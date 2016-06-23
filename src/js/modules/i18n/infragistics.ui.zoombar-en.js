﻿/*!@license
* Infragistics.Web.ClientUI Zoombar localization resources <build_number>
*
* Copyright (c) 2011-<year> Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
    $.ig = $.ig || {};

    if (!$.ig.Zoombar) {
	    $.ig.Zoombar = {};

	    $.extend($.ig.Zoombar, {
		
		    locale: {
			    zoombarTargetNotSpecified: "igZoombar requires a valid target to attach to!",
			    zoombarTypeNotSupported: "The type of widget the Zoombar is trying to attach to is not supported!",
			    optionChangeNotSupported: "Changing the following option after the igZoombar has been created is not supported:"
		    }
	    });

    }
})(jQuery);