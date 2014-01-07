<?php namespace Redesign\Support;

use File;
use DOMDocument;

class AwesomeTemplateTransformer {
	protected $content;

	public function __construct($path)
	{
		$this->content = File::get($path);
	}

	public function process ()
	{
		$this->processBeginning();
		$this->removeConditionalComments('protect');
		$this->removeConditionalComments('passthrough');
		$this->removeCDDATA();
		$this->replaceSystemRegion();
		return $this->content;
	}

	public function transform ($dest)
	{
		$this->process();
		File::put($dest, $this->content);
	}

	protected function removeConditionalComments($name)
	{
		$start = '<!--#' . $name;
		$end = '#' . $name . '-->';
		$this->content = str_replace($start, '', $this->content);
		$this->content = str_replace($end, '', $this->content);
	}
	protected function removeCDDATA()
	{
		$start = '//<![CDATA[';
		$end = '//]]>';
		$this->content = str_replace($start, '', $this->content);
		$this->content = str_replace($end, '', $this->content);
	}
	protected function replaceSystemRegion()
	{
		$pattern = '/(<system-region name=")(.+)("\/>)/';
		$dest = '{{\$$2}}';
		$this->content = preg_replace($pattern, $dest, $this->content);
	}

	protected function processBeginning()
	{
		$pattern = '/(<html xmlns="http:\/\/www.w3.org\/1999\/xhtml" class="show-top allow-hover" lang="en"><!--<!\[endif\]-->)\s(.+\s)(<!DOCTYPE html>\s)(<!--\[if lt IE 9 \]>.+\s.+\s)(<!--\[if !\(IE\)\]><!-->)(\s#protect-top\]\]>)/';
		$dest = '$3$4$5$1';
		$this->content = preg_replace($pattern, $dest, $this->content);
	}
}