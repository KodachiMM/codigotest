<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Auth;
use Hash;
use DB;

class AuthController extends Controller
{
	public function login(Request $request)
	{
		try {
			$user = User::where('email', $request->email)->firstOrFail();

			if (Hash::check($request->password, $user->password)) {
				$token = $user->createToken('logged_in')->accessToken;
				return response()->json(['status' => 'success', 'token' => $token], 200);
			}

			return response()->json([], 400);

		} catch (\Exception $e) {
			return response()->json([], 400);
		}
	}

	public function logout()
	{
		if (Auth::guard('api')->check()) {
			$token = Auth::guard('api')->user()->token();

			DB::table('oauth_access_tokens')
				->where('id', $token->id)
				->delete();

			return response()->json(['status' => 'success'], 200);
		}

		return response()->json([], 403);
	}
}