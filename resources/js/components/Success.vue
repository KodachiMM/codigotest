<template>
	<div class="container mt-5" id="package-order">
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

				<hr class="my-5">

				<div class="row">
					<div class="col">
						Subtotal
					</div>

					<div class="col-auto">
						${{ formatNumber(order.subtotal) }}
					</div>
				</div>

				<div class="row">
					<div class="col">
						GST
					</div>

					<div class="col-auto">
						${{ formatNumber(order.gst) }}
					</div>
				</div>

				<div class="row" v-if="order.discount > 0">
					<div class="col">
						<strong>Discount</strong>
					</div>

					<div class="col-auto">
						<strong>- ${{ formatNumber(order.discount) }}</strong>
					</div>
				</div>

				<div class="row grand-total">
					<div class="col">
						Grand Total
					</div>

					<div class="col-auto">
						${{ formatNumber(order.grand_total) }}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			pack: [],
			order: [],
		};
	},

	methods: {
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

	created() {
		this.pack = JSON.parse(localStorage.getItem('pack'));
		this.order = JSON.parse(localStorage.getItem('order'));
	}
}
</script>