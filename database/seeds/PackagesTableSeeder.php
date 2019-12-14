<?php

use Illuminate\Database\Seeder;

class PackagesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
		$packages = [
			[
				'pack_name' => 'Single Class',
				'pack_description' => 'Single Class desc',
				'pack_type' => 'non_shareable',
				'total_credit' => 1,
				'pack_price' => 30,
				'pack_alias' => 'single-pack',
				'estimate_price' => 30,
				'disp_order' => 4,
				'tag_name' => null,
				'newbie_note' => 'Newbie can attend a class and pay later',
			],
			[
				'pack_name' => '20 Class Pack',
				'pack_description' => '20 Class Pack desc',
				'pack_type' => 'non_shareable',
				'total_credit' => 20,
				'pack_price' => 380,
				'pack_alias' => 'pack-20',
				'estimate_price' => 19,
				'disp_order' => 2,
				'tag_name' => 'New',
				'newbie_note' => 'Newbie can attend a class and pay later',
			],
			[
				'pack_name' => '10 Class Pack',
				'pack_description' => '10 Class Pack desc',
				'pack_type' => 'non_shareable',
				'total_credit' => 10,
				'pack_price' => 220,
				'pack_alias' => 'pack-10',
				'estimate_price' => 22,
				'disp_order' => 1,
				'tag_name' => 'Popular',
				'newbie_note' => 'Newbie get an additional Free class',
			],
			[
				'pack_name' => '30 Class Pack',
				'pack_description' => '30 Class Pack desc',
				'pack_type' => 'non_shareable',
				'total_credit' => 30,
				'pack_price' => 540,
				'pack_alias' => 'pack-30',
				'estimate_price' => 18,
				'disp_order' => 3,
				'tag_name' => 'Limited',
				'newbie_note' => 'Newbie get an additional Free class',
			],
			[
				'pack_name' => '50 Share Class',
				'pack_description' => '50 Share Class desc',
				'pack_type' => 'shareable',
				'total_credit' => 50,
				'pack_price' => 880,
				'pack_alias' => 'share-pack-50',
				'estimate_price' => 17,
				'disp_order' => 6,
				'tag_name' => null,
				'newbie_note' => null,
			],
			[
				'pack_name' => 'Unlimited Class',
				'pack_description' => 'Unlimited Class desc',
				'pack_type' => 'unlimited',
				'total_credit' => 0,
				'pack_price' => 50,
				'pack_alias' => 'unlimited-pack',
				'estimate_price' => 0,
				'disp_order' => 5,
				'tag_name' => null,
				'newbie_note' => null,
			],
		];

		foreach ($packages as $package) {
			factory(App\Models\Package::class)->create([
				'pack_name' => $package['pack_name'],
				'pack_description' => $package['pack_description'],
				'pack_type' => $package['pack_type'],
				'total_credit' => $package['total_credit'],
				'pack_price' => $package['pack_price'],
				'pack_alias' => $package['pack_alias'],
				'estimate_price' => $package['estimate_price'],
				'disp_order' => $package['disp_order'],
				'tag_name' => $package['tag_name'],
				'newbie_note' => $package['newbie_note'],
			]);
		}
    }
}
