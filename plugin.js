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

	function pStyles2Span(changeEvt){
		if (changeEvt.lastLevel) {
			// console.log(changeEvt);
			// var content = editor.getBody();
			// var allParapgraphs = $(content).find('*').contents().filter(function(){
			// 	return this.nodeType === 3;
			// });
			// console.log(allParapgraphs);
		}
	}

	// move text formatting style rules from p blocks to inner span elements
	editor.on('change',pStyles2Span);

});
