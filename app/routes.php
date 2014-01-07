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

Route::get('test/{name}', function ($name = null) {
	if ( ! is_null($name)) {
		return get_region($name);
	}
});

Route::get('debug', function () {
	$t = new Transformer(app_path('Cascade/newest-template/redesign-template.xml'));
	dd($t->transform());
	$t->render(); //dest
	//TODO create command
});

share_region('HEADTITLE', 'Redesign');
share_region('GA_TRACKING_ID', '_ga_tracking_id = 12345');

share_region('FOOTER');
share_region('COMMUNITY_DESKTOP');
share_region('COMMUNITY_MOBILE');
share_region('DEPARTMENTS_DESKTOP');
share_region('DEPARTMENTS_MOBILE');
share_region('NUHELP_DESKTOP');
share_region('NUHELP_MOBILE');
share_region('TOPICS_DESKTOP');
share_region('TOPICS_MOBILE');

share_region('DEPARTMENT_RIBBON_NAV', '');
share_region('BREADCRUMBS', '');
share_region('DEPARTMENT_SUB_NAV', '');
share_region('DEPARTMENT_QUICKLINKS', '');


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

Route::get('basic', function () {
	$DEPARTMENT_RIBBON_NAV = get_region('DEPARTMENT_RIBBON_NAV');
	$DEPARTMENT_SUB_NAV = get_region('DEPARTMENT_SUB_NAV');
	$DEPARTMENT_QUICKLINKS = get_region('DEPARTMENT_QUICKLINKS');
	$BREADCRUMBS = get_region('BREADCRUMBS');
	$DEFAULT = get_default('basic');
	return View::make(get_template(), compact('DEFAULT', 'BREADCRUMBS', 'DEPARTMENT_RIBBON_NAV', 'DEPARTMENT_SUB_NAV', 'DEPARTMENT_QUICKLINKS'));
});

Route::get('collapsible', function () {
	$DEPARTMENT_RIBBON_NAV = get_region('DEPARTMENT_RIBBON_NAV');
	$DEPARTMENT_SUB_NAV = get_region('DEPARTMENT_SUB_NAV');
	$DEPARTMENT_QUICKLINKS = get_region('DEPARTMENT_QUICKLINKS');
	$BREADCRUMBS = get_region('BREADCRUMBS');
	$DEFAULT = get_default('collapsible');
	return View::make(get_template(), compact('DEFAULT', 'BREADCRUMBS', 'DEPARTMENT_RIBBON_NAV', 'DEPARTMENT_SUB_NAV', 'DEPARTMENT_QUICKLINKS'));
});

Route::get('department', function () {
	$DEPARTMENT_RIBBON_NAV = get_region('DEPARTMENT_RIBBON_NAV');
	$DEFAULT = get_default('department');

	return View::make(get_template(), compact('DEFAULT', 'DEPARTMENT_RIBBON_NAV'));
});

Route::get('detail', function () {
	$DEPARTMENT_RIBBON_NAV = get_region('DEPARTMENT_RIBBON_NAV');
	$DEPARTMENT_SUB_NAV = get_region('DEPARTMENT_SUB_NAV');
	$DEPARTMENT_QUICKLINKS = get_region('DEPARTMENT_QUICKLINKS');
	$BREADCRUMBS = get_region('BREADCRUMBS');
	$DEFAULT = get_default('detail');

	return View::make(get_template(), compact('DEFAULT', 'BREADCRUMBS', 'DEPARTMENT_RIBBON_NAV', 'DEPARTMENT_SUB_NAV', 'DEPARTMENT_QUICKLINKS'));//, 'DEPARTMENT_SUB_NAV', 'DEPARTMENT_QUICKLINKS'));
});

Route::get('division', function () {
	$DEFAULT = get_default('division');

	return View::make(get_template(), compact('DEFAULT'));
});

Route::get('stack', function () {

	$DEPARTMENT_RIBBON_NAV = get_region('DEPARTMENT_RIBBON_NAV');
	$DEPARTMENT_SUB_NAV = get_region('DEPARTMENT_SUB_NAV');
	$DEPARTMENT_QUICKLINKS = get_region('DEPARTMENT_QUICKLINKS');
	$BREADCRUMBS = get_region('BREADCRUMBS');
	$DEFAULT = get_default('stack');

	return View::make(get_template(), compact('DEFAULT', 'BREADCRUMBS', 'DEPARTMENT_RIBBON_NAV', 'DEPARTMENT_SUB_NAV', 'DEPARTMENT_QUICKLINKS'));
});



