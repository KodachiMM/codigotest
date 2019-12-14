<?php

namespace App\Repositories\Transformers;

use League\Fractal\TransformerAbstract;
use App\Models\PromoCode;

/**
 * Class PromoCodeTransformer.
 *
 * @package namespace App\Repositories\Transformers;
 */
class PromoCodeTransformer extends TransformerAbstract
{
    /**
     * Transform the PromoCode entity.
     *
     * @param \App\Models\PromoCode $model
     *
     * @return array
     */
    public function transform(PromoCode $model)
    {
        return [
            'id'         => (int) $model->id,

            /* place your other model properties here */

            'created_at' => $model->created_at,
            'updated_at' => $model->updated_at
        ];
    }
}
