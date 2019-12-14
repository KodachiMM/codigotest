<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\PromoCode;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(PromoCode::class, function (Faker $faker) {
    return [
        'code' => Str::random(10),
        'discount' => mt_rand(5, 50),
    ];
});
