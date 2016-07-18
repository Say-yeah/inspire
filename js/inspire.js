var $ua   = navigator.userAgent.toUpperCase();
var $sp   = ($ua.indexOf( 'IPHONE' ) != -1) || ($ua.indexOf( 'ANDROID' ) != -1 || ($ua.indexOf( 'IPAD' ) != -1));
var $bp   = 768;
var $f_bp = null;

(function ($) {


var self = $.inspire = {



	init: function () {
		$( window ).load( function () {});
			self.anchor();
		}
	},


	// ページ内リンク
	anchor: function() {

		$('a.anc').click(function(e) {
			e.preventDefault();
			var h = $(this).attr('href');
			var t = null;

			if (0 < $(h).size()) {
				t = $(h);
			}
			else {
				t = h.slice(1);
				t = $('a[name=' + t + ']');
			}
			if (h === '#top') {
				t = $('html');
			}
			if (0 < t.size()) {
				$('html, body').animate({scrollTop: t.offset().top - 100 }, 1200, 'easeOutExpo');
			}
		});
	},



}
$(function () { self.init(); });
})(jQuery);





$( document ).ready( function() {
	var ua = navigator.userAgent.toUpperCase();
	var sp = (ua.indexOf( 'IPHONE' ) != -1) || (ua.indexOf( 'ANDROID' ) != -1) || (ua.indexOf( 'IPOD' ) != -1) || (ua.indexOf( 'IPAD' ) != -1);

	$ua = sp ? "sp" : "pc";
	$( 'html' ).attr( 'id', $ua );
})
