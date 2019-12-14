<?php

use Illuminate\Database\Seeder;

class PromoCodesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Models\PromoCode::class, 10)->create();
    }
}
