<?php

use Redesign\Support\AwesomeTemplateTransformer as Transformer;
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

Route::get('test/{name}', function ($name = null) 
{
	if ( ! is_null($name)) {
		return get_region($name);
	}
});

Route::get('debug', function () 
{
	$t = new Transformer(app_path('Cascade/newest-template/redesign-template.xml'));
	dd($t->transform());
	$t->render(); //dest
	//TODO create command
});

Route::get('env', function()
{
    return App::environment();
});

Route::get('/', function()
{
	return View::make('hello');
});

// Route::get('{type}', function ($type) {
// 	return View::make('pages.' . $type);
// });

Route::get('basic', function () 
{
	generate_shared();
	$DEFAULT = get_default('basic');
	return View::make(get_template(), compact('DEFAULT'));
});

Route::get('collapsible', function () 
{
	generate_shared();
	$DEFAULT = get_default('collapsible');
	return View::make(get_template(), compact('DEFAULT'));
});

Route::get('department', function () 
{
	generate_shared();
	return View::make(get_template(), [
		'DEFAULT' => get_default('department'),
		'DEPARTMENT_SUB_NAV' => null,
		'DEPARTMENT_QUICKLINKS' => null,
	]);
});

Route::get('detail', function () 
{
	generate_shared();
	$DEFAULT = get_default('detail');
	return View::make(get_template(), compact('DEFAULT'));
});

Route::get('division', function () 
{
	generate_shared();
	return View::make(get_template(), [
		'DEFAULT' => get_default('division'),
		'DEPARTMENT_SUB_NAV' => null,
		'DEPARTMENT_QUICKLINKS' => null,
	]);
});

Route::get('stack', function () 
{
	generate_shared();
	$DEFAULT = get_default('stack');
	return View::make(get_template(), compact('DEFAULT'));
});



