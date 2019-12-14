<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

/**
 * Class CreateOrdersTable.
 */
class CreateOrdersTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('orders', function(Blueprint $table) {
			$table->increments('id');
			$table->unsignedBigInteger('user_id')->nullable();
			$table->uuid('pack_id')->nullable();
			$table->unsignedInteger('promo_id')->nullable();
			$table->double('subtotal');
			$table->double('gst');
			$table->double('discount');
			$table->double('grand_total');
			$table->timestamps();
			$table->foreign('user_id')->references('id')->on('users')->onDelete('set null');
			$table->foreign('pack_id')->references('pack_id')->on('packages')->onDelete('set null');
			$table->foreign('promo_id')->references('id')->on('promo_codes')->onDelete('set null');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('orders');
	}
}
