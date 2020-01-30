<template>
	<div class="container mt-5" id="package-order" v-if="isLoaded">
		<div class="card">
			<div class="card-header">
				<h3>Class Pack Purchase Review</h3>
			</div>
			<div class="card-body p-4">
				<h4 class="mb-4">You have selected:</h4>

				<div class="row">
					<div class="col-md-1">
						<div class="float-left" :class="packColor(pack.pack_type)">
							<i v-if="pack.pack_type == 'unlimited'" class="fas fa-infinity"></i>
							<span v-else>{{ pack.total_credit }}</span>
						</div>
					</div>

					<div class="col-md-9">
						<div>
							<span class="class-color">{{ pack.pack_name }}</span><br>
							<span class="class-color-small">{{ pack.newbie_note ? pack.newbie_note : '' }}</span>
						</div>
					</div>

					<div class="col-md-2">
						<div class="text-right">
							<strong style="font-size: 18px;">${{ formatNumber(pack.pack_price) }}</strong><br>
							<small v-if="pack.pack_type == 'unlimited'" class="text-muted">per month</small>
						</div>
					</div>
				</div>

				<div class="row">
					<div class="col-md-5">
						<div class="input-group mt-3">
							<input type="text" v-model="promoCode" class="form-control" placeholder="Promo Code">
							<div class="input-group-append">
								<button class="btn btn-outline-info" type="button" @click="submitPromoCode">Apply</button>
							</div>

							<i v-if="promoSuccess" class="fa fa-check-circle text-success success-icon float-right"></i>
						</div>
						<span v-if="promoError" class="text-danger">Wrong Promo Code</span>
					</div>
				</div>

				<hr class="my-5">

				<div class="row">
					<div class="col">
						Subtotal
					</div>

					<div class="col-auto">
						${{ formatNumber(pack.pack_price) }}
					</div>
				</div>

				<div class="row">
					<div class="col">
						GST
					</div>

					<div class="col-auto">
						${{ formatNumber(taxAmt) }}
					</div>
				</div>

				<div class="row" v-if="promoSuccess">
					<div class="col">
						<strong>Discount</strong>
					</div>

					<div class="col-auto">
						<strong>- ${{ formatNumber(discountAmt) }}</strong>
					</div>
				</div>

				<div class="row grand-total">
					<div class="col">
						Grand Total
					</div>

					<div class="col-auto">
						${{ formatNumber(grandTotal) }}
					</div>
				</div>

				<hr class="my-5">

				<p>Please read all <span class="grand-total">Terms &amp; Conditions</span> before purchasing your YM Class or Class Pack.</p>

				<router-link class="text-info fas fa-arrow-left mt-3" :to="{ name: 'package' }" title="Back">
					<span class="text-info"> Back</span>
				</router-link>

				<button class="btn btn-info float-right" @click="purchase">Pay Now</button>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";

const GST = 7 / 100;

export default {
	data() {
		return {
			pack_id: this.$route.params.id,
			pack: [],

			promoCode: null,
			promoSuccess: false,
			promoError: false,
			promoId: null,

			taxAmt: 0,
			discountAmt: 0,
			grandTotal: 0,
		};
	},

	computed: {
		...mapGetters([
			'isLoaded',
			'getPackById'
		])
	},

	methods: {
		getPackage() {
			this.pack = this.getPackById(this.pack_id);
			this.taxAmt = this.pack.pack_price * GST;
			this.grandTotal = this.pack.pack_price + this.taxAmt;
		},

		async submitPromoCode() {
			if (this.promoCode == null || this.promoCode == '') {
				return false;
			}

			await axios
				.post('/api/apply-promo', { promo_code: this.promoCode })
				.then(({ data }) => {
					if (data.status == 'success') {
						this.promoError = false;
						this.promoSuccess = true;
						this.promoId = data.data.id;

						this.discountAmt = this.pack.pack_price * data.data.discount / 100;
						this.grandTotal = this.pack.pack_price + this.taxAmt - this.discountAmt;
					}
				})
				.catch(error => {
					if (error.response.status == 406) {
						this.promoError = true;
						this.promoSuccess = false;
						this.promoId = null;

						this.discountAmt = 0;
						this.grandTotal = this.taxAmt;
					}
				});
		},

		async purchase() {
			let param = {
				pack_id: this.pack.pack_id,
				promo_id: this.promoId,
				subtotal: this.formatNumber(this.pack.pack_price),
				gst: this.formatNumber(this.taxAmt),
				discount: this.formatNumber(this.discountAmt),
				grand_total: this.formatNumber(this.grandTotal),
			};

			await axios
				.post('/api/orders', param)
				.then(({ data }) => {
					localStorage.setItem('pack', JSON.stringify(this.pack));
					localStorage.setItem('order', JSON.stringify(data.data));
					this.$router.push("/success");
				})
				.catch(error => {
					console.log(error);
				});
		},

		packColor(pack_type) {
			if (pack_type == 'shareable') {
				return 'credit share-pack';
			} else if (pack_type == 'unlimited') {
				return 'credit unlimited-pack';
			}

			return 'credit';
		},

		formatNumber(number) {
			if (number != null) {
				return number.toLocaleString(undefined, { minimumFractionDigits: 2 });
			}
		},
	},

	mounted() {
		this.getPackage();
	},
}
</script>
