(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports === "object") {
        module.exports = factory(require('jquery'));
    } else {
        root.myJsLib = factory(root.jquery);
    }
}(this, function ($) {
    return {
		txt: 'js module return',
		jQ: $
	};
}));




