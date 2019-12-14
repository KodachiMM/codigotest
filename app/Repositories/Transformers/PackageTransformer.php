<?php

namespace App\Repositories\Transformers;

use App\Models\Package;
use League\Fractal\TransformerAbstract;

/**
 * Class PackageTransformer.
 *
 * @package namespace App\Repositories\Transformers;
 */
class PackageTransformer extends TransformerAbstract
{
    /**
     * Transform the Package entity.
     *
     * @param \App\Models\Package $model
     *
     * @return array
     */
    public function transform(Package $model)
    {
        return [
            'disp_order' => $model->disp_order,
            'pack_id' => $model->pack_id,
            'pack_name' => $model->pack_name,
            'pack_description' => $model->pack_description,
            'pack_type' => $model->pack_type,
            'total_credit' => $model->total_credit,
            'tag_name' => $model->tag_name,
            'validity_month' => $model->validity_month,
            'pack_price' => $model->pack_price,
            'newbie_first_attend' => $model->newbie_first_attend,
            'newbie_addition_credit' => $model->newbie_addition_credit,
            'newbie_note' => $model->newbie_note,
            'pack_alias' => $model->pack_alias,
            'estimate_price' => $model->estimate_price,
        ];
    }
}
