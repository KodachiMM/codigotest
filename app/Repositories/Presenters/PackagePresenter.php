<?php

namespace App\Repositories\Presenters;

use App\Repositories\Transformers\PackageTransformer;
use Prettus\Repository\Presenter\FractalPresenter;

/**
 * Class PackagePresenter.
 *
 * @package namespace App\Repositories\Presenters;
 */
class PackagePresenter extends FractalPresenter
{
    public function __construct()
	{
		parent::__construct();
    }

    /**
     * Transformer
     *
     * @return \League\Fractal\TransformerAbstract
     */
    public function getTransformer()
    {
        return new PackageTransformer();
    }
}
