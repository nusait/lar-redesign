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
	transform_stamp_xml('basic');
	generate_shared();
	$DEFAULT = get_default('basic');
	$type = 'basic';
	return View::make(get_template(), compact('DEFAULT', 'type'));
});

Route::get('collapsible', function ()
{
	transform_stamp_xml('collapsible');
	generate_shared();
	$DEFAULT = get_default('collapsible');
	$type = 'collapsible';
	return View::make(get_template(), compact('DEFAULT', 'type'));
});

Route::get('panel', function ()
{
	transform_stamp_xml('panel');
	generate_shared();
	return View::make(get_template(), [
		'DEFAULT' => get_default('panel'),
		'DEPARTMENT_SUB_NAV' => null,
		'DEPARTMENT_QUICKLINKS' => null,
		'type' => 'panel'
	]);
});

Route::get('detail', function ()
{
	transform_stamp_xml('detail');
	generate_shared();
	$DEFAULT = get_default('detail');
	$type = 'detail';
	return View::make(get_template(), compact('DEFAULT', 'type'));
});

Route::get('multipanel', function ()
{
	transform_stamp_xml('panel');
	generate_shared();
	return View::make(get_template(), [
		'DEFAULT' => get_default('multipanel'),
		'DEPARTMENT_SUB_NAV' => null,
		'DEPARTMENT_QUICKLINKS' => null,
		'type' => 'multipanel'
	]);
});

Route::get('stack', function ()
{
	transform_stamp_xml('stack');
	generate_shared();
	$DEFAULT = get_default('stack');
	$type = 'stack';
	return View::make(get_template(), compact('DEFAULT', 'type'));
});

Route::get('form', function () {
	transform_stamp_xml('form');
	generate_shared();
	$DEFAULT = get_default('form');
	$tyle = 'form';
	return View::make(get_template(), compact('DEFAULT', 'type'));
});

Route::get('section', function () {
	transform_stamp_xml('section');
	generate_shared();
	$DEFAULT = get_default('section');
	$type = 'section';
	return View::make(get_template(), compact('DEFAULT', 'type'));
});

Route::get('map', function () {
	transform_stamp_xml('map');
	 generate_shared();
	 $DEFAULT = get_default('map');
	 $type = 'map';
	 return View::make(get_template(), compact('DEFAULT', 'type'));
});

Route::get('video', function () {
	transform_stamp_xml('video');
	generate_shared();
	$DEFAULT = get_default('video');
	$type = 'video';
	return View::make(get_template(), compact('DEFAULT', 'type'));
});

Route::get('embed', function () {
	transform_stamp_xml('embed');
	generate_shared();
	$DEFAULT = get_default('embed');
	$type = 'embed';
	return View::make(get_template(), compact('DEFAULT', 'type'));
});

Route::get('iframe', function () {
	transform_stamp_xml('iframe');
	generate_shared();
	$DEFAULT = get_default('iframe');
	$type = 'iframe';
	return View::make(get_template(), compact('DEFAULT', 'type'));
});
