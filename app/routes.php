<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', function()
{
	return View::make('hello');
});

Route::get('division', function () {
	return View::make('pages.division');
});

Route::get('department', function () {
	return View::make('pages.department');
});

Route::get('stack', function () {
	return View::make('pages.stack');
});

Route::get('basic', function () {

});

Route::get('faq', function () {

});