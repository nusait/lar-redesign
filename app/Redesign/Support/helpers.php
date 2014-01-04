<?php

if ( ! function_exists('xml_path'))
{
	function xml_path($path = '')
	{
		return app()->make('path.xml').($path ? '/'.$path : $path);
	}
}

if ( ! function_exists('format_path'))
{
	function format_path($path = '')
	{
		return app()->make('path.format').($path ? '/'.$path : $path);
	}
}

if ( ! function_exists('rendered_path'))
{
	function rendered_path($path = '')
	{
		return app()->make('path.rendered').($path ? '/'.$path : $path);
	}
}

if ( ! function_exists('region_path'))
{
	function region_path($path = '')
	{
		return app()->make('path.region').($path ? '/'.$path : $path);
	}
}

if ( ! function_exists('region_name'))
{
	function region_name($name)
	{
		return strtoupper(snake_case(strtolower($name)));
	}
}

if ( ! function_exists('get_region'))
{
	function get_region($name, $direct = false)
	{
		if ($direct) {
			return File::get($name);
		}

		$xml = region_name($name) . '.xml';
		$xslt = region_name($name) . '.xsl';
		$blade = region_name($name) . '.blade.php';

		$xml_file = xml_path($xml);
		$xslt_file = format_path($xslt);
		$blade_file = app_path('views/regions/' . $blade);

		if ( File::exists( $xml_file ) and File::exists( $xslt_file ) ) {
			return transform($xml, $xslt);
		} elseif ( File::exists($blade_file) ) {
			return File::get( $blade_file );
		}

		return null;
	}
}

if ( ! function_exists('parse_img'))
{
	function parse_img($domdoc)
	{
		$width = 640;
		$height = 400;
		foreach ($domdoc->getElementsByTagName('img') as $element) {
			if ($element->getAttribute('data-width')) {
				$width = $element->getAttribute('data-width');
			}
			if ($element->getAttribute('data-height')) {
				$height = $element->getAttribute('data-height');
			}
			$element->setAttribute('src', "//www.lorempixel.com/{$width}/{$height}/cats");
		}
		return $domdoc;
	}
}

if ( ! function_exists('transform'))
{
	function transform($xml_name, $format_name, $rendered_name = null)
	{
		$rendered_name = $rendered_name ?: basename($xml_name, '.xml') . '.html';
		$xml = new DOMDocument;
		$xml->loadXML(File::get(xml_path($xml_name)));

		$xsl = new DOMDocument;
		$xsl->load(format_path($format_name));

		$processor = new XSLTProcessor;
		$processor->importStyleSheet($xsl);

		$doc = $processor->transformToDoc($xml);
		$doc = parse_img($doc);

		$html = $doc->saveXML();
		$html = str_replace('<?xml version="1.0"?>', '', $html);


		File::put(rendered_path($rendered_name), $html);
		return $html;
	}
}


if ( ! function_exists('share_region'))
{
	function share_region($name, $region = null) {
		if ($region !== null) {
			return View::share($name, $region);
		}

		$region = get_region($name);

		if (! $region) {
			throw new Exception("Region $name is not found", 1);
		}

		return View::share($name, $region);
	}
}

if ( ! function_exists('get_default'))
{
	function get_default($name) { //basic
		$name = 'DEFAULT_' . strtoupper($name); //DEFAULT_BASIC

		return get_region($name);
	}
}