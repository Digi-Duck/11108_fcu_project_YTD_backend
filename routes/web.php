<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FrontController;
use App\Http\Controllers\ReservationController;
use App\Http\Controllers\BlogController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('forntend.index');
// });

//前端
Route::get('/', [FrontController::class,'index']);
Route::get('/portfolio', [FrontController::class,'portfolio']);
Route::get('/reservation', [FrontController::class,'reservation']);
Route::get('/aboutus', [FrontController::class,'aboutus']);
Route::get('/blog', [FrontController::class,'blog']);
Route::post('/reservation/store', [FrontController::class,'store']);

//後端
Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/admin/reservation', [ReservationController::class,'reservation'])->middleware(['auth', 'verified'])->name('reservation');
Route::get('/admin/reservation/edit/{id}', [ReservationController::class,'edit'])->middleware(['auth', 'verified']);
Route::post('/admin/reservation/update/{id}', [ReservationController::class,'update'])->middleware(['auth', 'verified']);
Route::get('/admin/reservation/delete/{id}', [ReservationController::class,'delete'])->middleware(['auth', 'verified']);

Route::get('/admin/blog', [BlogController::class,'blog'])->middleware(['auth', 'verified'])->name('blog');
Route::get('/admin/blog/edit/{id}', [BlogController::class,'edit'])->middleware(['auth', 'verified']);
Route::post('/admin/blog/update/{id}', [BlogController::class,'update'])->middleware(['auth', 'verified']);
Route::get('/admin/blog/delete/{id}', [BlogController::class,'delete'])->middleware(['auth', 'verified']);

require __DIR__.'/auth.php';
