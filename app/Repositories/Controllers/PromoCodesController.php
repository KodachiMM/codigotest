<?php

namespace App\Repositories\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;
use App\Http\Requests\PromoCodeCreateRequest;
use App\Http\Requests\PromoCodeUpdateRequest;
use App\Repositories\Repositories\PromoCodeRepository;
use App\Repositories\Validators\PromoCodeValidator;

/**
 * Class PromoCodesController.
 *
 * @package namespace App\Repositories\Controllers;
 */
class PromoCodesController extends Controller
{
    /**
     * @var PromoCodeRepository
     */
    protected $repository;

    /**
     * @var PromoCodeValidator
     */
    protected $validator;

    /**
     * PromoCodesController constructor.
     *
     * @param PromoCodeRepository $repository
     * @param PromoCodeValidator $validator
     */
    public function __construct(PromoCodeRepository $repository, PromoCodeValidator $validator)
    {
        $this->repository = $repository;
        $this->validator  = $validator;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->repository->pushCriteria(app('Prettus\Repository\Criteria\RequestCriteria'));
        $promoCodes = $this->repository->all();

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $promoCodes,
            ]);
        }

        return view('promoCodes.index', compact('promoCodes'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  PromoCodeCreateRequest $request
     *
     * @return \Illuminate\Http\Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function store(PromoCodeCreateRequest $request)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_CREATE);

            $promoCode = $this->repository->create($request->all());

            $response = [
                'message' => 'PromoCode created.',
                'data'    => $promoCode->toArray(),
            ];

            if ($request->wantsJson()) {

                return response()->json($response);
            }

            return redirect()->back()->with('message', $response['message']);
        } catch (ValidatorException $e) {
            if ($request->wantsJson()) {
                return response()->json([
                    'error'   => true,
                    'message' => $e->getMessageBag()
                ]);
            }

            return redirect()->back()->withErrors($e->getMessageBag())->withInput();
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $promoCode = $this->repository->find($id);

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $promoCode,
            ]);
        }

        return view('promoCodes.show', compact('promoCode'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $promoCode = $this->repository->find($id);

        return view('promoCodes.edit', compact('promoCode'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  PromoCodeUpdateRequest $request
     * @param  string            $id
     *
     * @return Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function update(PromoCodeUpdateRequest $request, $id)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_UPDATE);

            $promoCode = $this->repository->update($request->all(), $id);

            $response = [
                'message' => 'PromoCode updated.',
                'data'    => $promoCode->toArray(),
            ];

            if ($request->wantsJson()) {

                return response()->json($response);
            }

            return redirect()->back()->with('message', $response['message']);
        } catch (ValidatorException $e) {

            if ($request->wantsJson()) {

                return response()->json([
                    'error'   => true,
                    'message' => $e->getMessageBag()
                ]);
            }

            return redirect()->back()->withErrors($e->getMessageBag())->withInput();
        }
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $deleted = $this->repository->delete($id);

        if (request()->wantsJson()) {

            return response()->json([
                'message' => 'PromoCode deleted.',
                'deleted' => $deleted,
            ]);
        }

        return redirect()->back()->with('message', 'PromoCode deleted.');
    }

    public function apply(Request $request)
    {
        try {

            $promo_code = $this->repository->findByField('code', $request->promo_code)->first();

            if ($promo_code) {
                return response()->json(['status' => 'success', 'data' => $promo_code], 200);
            }

            return response()->json([], 406);

        } catch (\Exception $e) {

            return response()->json([], 406);
        }
    }
}
