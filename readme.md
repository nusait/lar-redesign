## Redesign Laravel

### To do:

One of many layers to get to Cascade... if you don't know what that is, this repo is not for you. (be glad).

### Features:

** transform(xml, xslt, [output_file]) **

`transform()` helper function (located in `app/Redesign/Support/helpers.php` if you are curious) allows you to transform any xml to html with an xslt.
The xml file should be located in the xml folder (`app/Cascade/redesign-data-xml`).
The xslt file should be located in the format folder (`app/Cascade/redesign-formats`).

When you call this function, two things will happen.  It will write the result into a file and put it in the rendered folder (located in `app/Redesign/rendered`).  Then it will also return the result as a string.

To Use:

	transform('qlink.xml', 'tran.xsl', 'qlinks.html');

The third argument is optional; if it's not specified, the html file will be the same name as the xml file.

#### get_region(name)

Returns the html string from either the rendered folder (html) or the default views folder (blade)

#### share_view(region_name, [content])

If content is not defined, it will try to get the region of the same name using `get_region` then share the save variable to all the views.

#### Artisan Command: `template:transform`

'template:transform' transforms a cascade template into laravel blade file.  
To use: `php artisan template:transform source-file[optional]`   
The source file needs to be in `app/Cascade/newest-template` directory. Default Source filename is 'redesign-template.xml'  
The destination file needs will be generated to `app/views/transformed-template.blade.php`  

#### To change which template to use:  
The Default template is the transformed template ('transformed-template.blade.php')  
If you want to use the original template simply add query string: ?original=true at the end of the request.