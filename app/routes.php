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

// Route::get('debug', function () {
// 	dd(transform('qlinks.xml', 'test.xsl', 'test.html'));
// });

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
	return View::make('pages.basic', compact('DEPARTMENT_RIBBON_NAV', 'DEPARTMENT_SUB_NAV', 'DEPARTMENT_QUICKLINKS'));
});

Route::get('collapsible', function () {
	$DEPARTMENT_RIBBON_NAV = get_region('DEPARTMENT_RIBBON_NAV');
	$DEPARTMENT_SUB_NAV = get_region('DEPARTMENT_SUB_NAV');
	$DEPARTMENT_QUICKLINKS = get_region('DEPARTMENT_QUICKLINKS');

	return View::make('pages.collapsible', compact('DEPARTMENT_RIBBON_NAV', 'DEPARTMENT_SUB_NAV', 'DEPARTMENT_QUICKLINKS'));
});

Route::get('department', function () {
	$DEPARTMENT_RIBBON_NAV = get_region('DEPARTMENT_RIBBON_NAV');

	return View::make('pages.department', compact('DEPARTMENT_RIBBON_NAV'));
});

Route::get('detail', function () {
	$DEPARTMENT_RIBBON_NAV = get_region('DEPARTMENT_RIBBON_NAV');
	$DEPARTMENT_SUB_NAV = get_region('DEPARTMENT_SUB_NAV');
	$DEPARTMENT_QUICKLINKS = get_region('DEPARTMENT_QUICKLINKS');

	return View::make('pages.detail', compact('DEPARTMENT_RIBBON_NAV', 'DEPARTMENT_SUB_NAV', 'DEPARTMENT_QUICKLINKS'));//, 'DEPARTMENT_SUB_NAV', 'DEPARTMENT_QUICKLINKS'));
});

Route::get('division', function () {
	return View::make('pages.division');
});

Route::get('stack', function () {

	$DEPARTMENT_RIBBON_NAV = get_region('DEPARTMENT_RIBBON_NAV');
	$DEPARTMENT_SUB_NAV = get_region('DEPARTMENT_SUB_NAV');
	$DEPARTMENT_QUICKLINKS = get_region('DEPARTMENT_QUICKLINKS');

	return View::make('pages.stack', compact('DEPARTMENT_RIBBON_NAV', 'DEPARTMENT_SUB_NAV', 'DEPARTMENT_QUICKLINKS'));
});



