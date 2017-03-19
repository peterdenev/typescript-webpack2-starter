(function (root, factory) {
   
        module.exports = factory(require('jquery'));
    
}(this, function ($) {
    return {
		txt: 'js module return',
		jQ: $
	};
}));

