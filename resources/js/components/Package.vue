<template>
	<div id="package-style">
		<div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
			<h1 class="display-4">Pricing</h1>
		</div>

		<div class="container package-list mt-5">
			<div class="card-deck mb-3 text-center">
				
				<div class="row">
					<div v-for="pack in pack_list" :key="pack.id"  class="col-md-4">
						<div class="card mb-4 shadow-sm">
							<div class="card-header">
								<div v-if="pack.tag_name" class="ribbon ribbon-top-left">
									<span>{{ pack.tag_name }}</span>
								</div>
								<h4 class="my-0 font-weight-normal">{{ pack.pack_name }}</h4>
							</div>
							<div class="card-body">
								<div :class="packColor(pack.pack_type)">
									<i v-if="pack.pack_type == 'unlimited'" class="fas fa-infinity"></i>
									<span v-else>{{ pack.total_credit }}</span>
								</div>

								<ul v-if="pack.pack_type != 'unlimited'" class="list-unstyled mt-3 mb-4">
									<li>Take your class at any YM studio!</li>
									<li>Choose from 350 weekly classes</li>
									<li>7 day booking window</li>
								</ul>

								<ul v-else class="list-unstyled mt-3 mb-4">
									<li><strong>Monthly Subscription Fees</strong></li>
									<li>Lorem ipsum dolar sit amet</li>
									<li>Consectetur adipiscing elit</li>
								</ul>

								<h1 class="card-title pricing-card-title">
									${{ pack.pack_price }}
								</h1>

								<ul class="list-unstyled mt-3 mb-4">
									<li>
										<small class="text-muted" :class="pack.pack_alias == 'single-pack' ? 'text-hidden' : ''">
											${{ pack.pack_type == 'unlimited' ? pack.pack_price : pack.estimate_price }}
											{{ pack.pack_type == 'unlimited' ? 'per month' : 'per class!' }}
										</small>
									</li>
								</ul>

								<router-link class="btn btn-lg btn-outline-info" :to="{ name: 'packageOrder', params: { id: pack.pack_id } }" title="Buy Now">
									Buy Now
								</router-link>
							</div>
						</div>
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
			pack_list: [],
		};
	},

	methods: {
		async fetchPackages() {
			await axios
				.get('/api/packages')
				.then(({ data }) => {
					if (data.errorCode == 0 && data.message == 'Success') {
						this.pack_list = data.data.pack_list;
					}
				}).catch(error => {
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
	},

	mounted() {
		this.fetchPackages();
	},
};
</script>