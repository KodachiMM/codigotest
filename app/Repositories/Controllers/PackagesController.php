<?php

namespace App\Repositories\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;
use App\Http\Requests\PackageCreateRequest;
use App\Http\Requests\PackageUpdateRequest;
use App\Repositories\Repositories\PackageRepository;
use App\Repositories\Presenters\PackagePresenter;
use App\Repositories\Validators\PackageValidator;

/**
 * Class PackagesController.
 *
 * @package namespace App\Repositories\Controllers;
 */
class PackagesController extends Controller
{
    /**
     * @var PackageRepository
     */
    protected $repository;

    /**
     * @var PackageValidator
     */
    protected $validator;

    /**
     * PackagesController constructor.
     *
     * @param PackageRepository $repository
     * @param PackageValidator $validator
     */
    public function __construct(PackageRepository $repository, PackageValidator $validator)
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

        $this->repository->setPresenter(new PackagePresenter());
        $packages = $this->repository->orderBy('disp_order')->paginate(10);

        if (request()->wantsJson()) {
            return response()->json([
                'errorCode' => 0,
                'message' => 'Success',
                'data' => [
                    'total_item' => $packages['meta']['pagination']['count'],
                    'total_page' => $packages['meta']['pagination']['total_pages'],
                    'mem_tier' => 'newbie',
                    'total_expired_class' => 0,
                    'pack_list' => $packages['data'],
                ]
            ]);
        }

        return view('packages.index', compact('packages'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  PackageCreateRequest $request
     *
     * @return \Illuminate\Http\Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function store(PackageCreateRequest $request)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_CREATE);

            $package = $this->repository->create($request->all());

            $response = [
                'message' => 'Package created.',
                'data'    => $package->toArray(),
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
        $package = $this->repository->findByField('pack_id', $id)->first();

        if (request()->wantsJson()) {
            return response()->json([
                'data' => $package,
            ]);
        }

        return view('packages.show', compact('package'));
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
        $package = $this->repository->find($id);

        return view('packages.edit', compact('package'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  PackageUpdateRequest $request
     * @param  string            $id
     *
     * @return Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function update(PackageUpdateRequest $request, $id)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_UPDATE);

            $package = $this->repository->update($request->all(), $id);

            $response = [
                'message' => 'Package updated.',
                'data'    => $package->toArray(),
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
                'message' => 'Package deleted.',
                'deleted' => $deleted,
            ]);
        }

        return redirect()->back()->with('message', 'Package deleted.');
    }
}
