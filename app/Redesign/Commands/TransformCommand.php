<?php namespace Redesign\Commands;

use Illuminate\Console\Command;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Input\InputArgument;
use Redesign\Support\AwesomeTemplateTransformer as Transformer;

class TransformCommand extends Command {

	/**
	 * The console command name.
	 *
	 * @var string
	 */
	protected $name = 'template:transform';

	/**
	 * The console command description.
	 *
	 * @var string
	 */
	protected $description = 'Transforms a template from the newest-template directory to blade';

	/**
	 * Create a new command instance.
	 *
	 * @return void
	 */
	public function __construct()
	{
		parent::__construct();
	}

	/**
	 * Execute the console command.
	 *
	 * @return void
	 */
	public function fire()
	{

		$source = $this->argument('source');  //default value: redesign-template.xml

		$dest = 'transformed-template.blade.php';

		$sourcePath = app_path('Cascade/newest-template/'.$source);
		$destPath = app_path('views/'. $dest);

		$t = new Transformer($sourcePath);
		$t->transform($destPath);
		$this->info("Template File $source has been tranformed to $dest in the views directory");
	}

	/**
	 * Get the console command arguments.
	 *
	 * @return array
	 */
	protected function getArguments()
	{
		return array(
			array('source', InputArgument::OPTIONAL, 'Source filename (include extension) in the newest-template directory', 'redesign-template.xml'),
		);
	}

	/**
	 * Get the console command options.
	 *
	 * @return array
	 */
	protected function getOptions()
	{
		return array(
		);
	}

}