<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        $this->app->bind(\App\Repositories\Repositories\PackageRepository::class, \App\Repositories\Repositories\PackageRepositoryEloquent::class);
        $this->app->bind(\App\Repositories\Repositories\PromoCodeRepository::class, \App\Repositories\Repositories\PromoCodeRepositoryEloquent::class);
        $this->app->bind(\App\Repositories\Repositories\OrderRepository::class, \App\Repositories\Repositories\OrderRepositoryEloquent::class);
        //:end-bindings:
    }
}
