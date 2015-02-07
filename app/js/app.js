'use strict';

(function() {
	$('a[href^=#]').on( 'click' ,function(){
		event.preventDefault();
		history.pushState({}, '', this.href);
		$('.active').removeClass('active').next().addClass('active');
	});

	/*$('#tab-toggle').click(function(){
		var tabContainer = $('#tab-container');
		//event.preventDefault();
		tabContainer.removeClass('hide').toggleClass('show');
	})*/
})(jQuery);
