<?php

namespace App\Repositories\Presenters;

use App\Repositories\Transformers\PromoCodeTransformer;
use Prettus\Repository\Presenter\FractalPresenter;

/**
 * Class PromoCodePresenter.
 *
 * @package namespace App\Repositories\Presenters;
 */
class PromoCodePresenter extends FractalPresenter
{
    /**
     * Transformer
     *
     * @return \League\Fractal\TransformerAbstract
     */
    public function getTransformer()
    {
        return new PromoCodeTransformer();
    }
}
