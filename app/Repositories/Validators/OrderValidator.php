<?php

namespace App\Repositories\Validators;

use \Prettus\Validator\Contracts\ValidatorInterface;
use \Prettus\Validator\LaravelValidator;

/**
 * Class OrderValidator.
 *
 * @package namespace App\Repositories\Validators;
 */
class OrderValidator extends LaravelValidator
{
    /**
     * Validation Rules
     *
     * @var array
     */
    protected $rules = [
        ValidatorInterface::RULE_CREATE => [
            'pack_id' => 'required|uuid',
            'subtotal' => 'required|numeric',
            'gst' => 'required|numeric',
            'discount' => 'required|numeric',
            'grand_total' => 'required|numeric',
        ],

        ValidatorInterface::RULE_UPDATE => [],
    ];
}
