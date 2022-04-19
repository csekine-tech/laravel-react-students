<?php

use App\Http\Controllers\API\StudentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
Route::get('/students',[StudentController::class,'index']);
Route::get('/student/{id}',[StudentController::class,'edit']);
Route::post('/update-student/{id}',[StudentController::class,'update']);
Route::post('/add-student',[StudentController::class,'store']);
Route::get('/remove-student/{id}',[StudentController::class,'delete']);
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
