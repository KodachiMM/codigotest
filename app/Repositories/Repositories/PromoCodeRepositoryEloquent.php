<?php

namespace App\Repositories\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\Repositories\PromoCodeRepository;
use App\Models\PromoCode;
use App\Repositories\Validators\PromoCodeValidator;

/**
 * Class PromoCodeRepositoryEloquent.
 *
 * @package namespace App\Repositories\Repositories;
 */
class PromoCodeRepositoryEloquent extends BaseRepository implements PromoCodeRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return PromoCode::class;
    }

    /**
    * Specify Validator class name
    *
    * @return mixed
    */
    public function validator()
    {

        return PromoCodeValidator::class;
    }


    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
    
}
