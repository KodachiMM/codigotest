<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

/**
 * Class CreatePackagesTable.
 */
class CreatePackagesTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('packages', function(Blueprint $table) {
			$table->uuid('pack_id')->primary();
			$table->string('pack_name')->unique();
			$table->string('pack_description');
			$table->string('pack_type');
			$table->integer('total_credit');
			$table->string('tag_name')->nullable();
			$table->integer('validity_month');
			$table->double('pack_price');
			$table->boolean('newbie_first_attend');
			$table->tinyInteger('newbie_addition_credit');
			$table->mediumText('newbie_note')->nullable();
			$table->string('pack_alias');
			$table->double('estimate_price');
			$table->tinyInteger('disp_order');
            $table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('packages');
	}
}
