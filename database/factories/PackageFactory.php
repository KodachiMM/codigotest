<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Package;
use Faker\Generator as Faker;

$factory->define(Package::class, function (Faker $faker) {
    return [
        'pack_id' => $faker->uuid,
        // 'pack_name' => $faker->unique()->word,
        // 'pack_description' => $faker->sentence,
        // 'pack_type' => $faker->word,
        // 'total_credit' => mt_rand(0, 10),
        'validity_month' => mt_rand(0, 24),
        // 'pack_price' => $faker->randomFloat(2, 0, 1000),
        'newbie_first_attend' => $faker->boolean,
        'newbie_addition_credit' => mt_rand(0, 1),
        // 'pack_alias' => $faker->word,
        // 'estimate_price' => mt_rand(0, 50),
        // 'disp_order' => mt_rand(1, 6),
    ];
});