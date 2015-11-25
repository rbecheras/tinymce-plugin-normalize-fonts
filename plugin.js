/**
 * plugin.js
 *
 * Released under LGPL License.
 * Copyright (c) 2015 SIRAP SAS All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

/*global tinymce:true */

tinymce.PluginManager.add('normalizefonts', function(editor) {



	editor.on('change',function(evt){
		var content = editor.getBody();

		var p = $(content).find('*').contents().filter(function(){
			return this.nodeType === 3;
		});

		// console.log(p);


	});

});
