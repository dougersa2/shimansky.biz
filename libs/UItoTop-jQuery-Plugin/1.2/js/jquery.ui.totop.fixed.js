/*! UItoTop jQuery Plugin 1.2 | Matt Varone | http://www.mattvarone.com/web-design/uitotop-jquery-plugin
//# sourceMappingURL=jquery.ui.totop.fixed.js.map
 * https://github.com/sksmatt/UItoTop-jQuery-Plugin
 */
"undefined" !== typeof window.jQuery && function () {
	jQuery.extend(jQuery.easing, {
		easeInQuad : function (e, a, b, c, d) {
			return c * (a /= d) * a + b
		},
		easeOutQuad : function (e, a, b, c, d) {
			return -c * (a /= d) * (a - 2) + b
		},
		easeInOutQuad : function (e, a, b, c, d) {
			return 1 > (a /= d / 2) ? c / 2 * a * a + b : -c / 2 * (--a * (a - 2) - 1) + b
		},
		easeInCubic : function (e, a, b, c, d) {
			return c * (a /= d) * a * a + b
		},
		easeOutCubic : function (e, a, b, c, d) {
			return c * ((a = a / d - 1) * a * a + 1) + b
		},
		easeInOutCubic : function (e, a, b, c, d) {
			return 1 > (a /= d / 2) ? c / 2 * a * a * a + b : c / 2 * ((a -= 2) * a * a + 2) + b
		},
		easeInQuart : function (e, a, b, c, d) {
			return c * (a /= d) * a * a * a + b
		},
		easeOutQuart : function (e, a, b, c, d) {
			return -c * ((a = a / d - 1) * a * a * a - 1) + b
		},
		easeInOutQuart : function (e, a, b, c, d) {
			return 1 > (a /= d / 2) ? c / 2 * a * a * a * a + b : -c / 2 * ((a -= 2) * a * a * a - 2) + b
		},
		easeInQuint : function (e, a, b, c, d) {
			return c * (a /= d) * a * a * a * a + b
		},
		easeOutQuint : function (e, a, b, c, d) {
			return c * ((a = a / d - 1) * a * a * a * a + 1) + b
		},
		easeInOutQuint : function (e, a, b, c, d) {
			return 1 > (a /= d / 2) ? c / 2 * a * a * a * a * a + b : c / 2 * ((a -= 2) * a * a * a * a + 2) + b
		},
		easeInSine : function (e, a, b, c, d) {
			return -c * Math.cos(a / d * (Math.PI / 2)) + c + b
		},
		easeOutSine : function (e, a, b, c, d) {
			return c * Math.sin(a / d * (Math.PI / 2)) + b
		},
		easeInOutSine : function (e, a, b, c, d) {
			return -c / 2 * (Math.cos(Math.PI * a / d) - 1) + b
		},
		easeInExpo : function (e, a, b, c, d) {
			return 0 == a ? b : c * Math.pow(2, 10 * (a / d - 1)) + b
		},
		easeOutExpo : function (e, a, b, c, d) {
			return a == d ? b + c : c * (-Math.pow(2, -10 * a / d) + 1) + b
		},
		easeInOutExpo : function (e, a, b, c, d) {
			return 0 == a ? b : a == d ? b + c : 1 > (a /= d / 2) ? c / 2 * Math.pow(2, 10 * (a - 1)) + b : c / 2 * (-Math.pow(2, -10 * --a) + 2) + b
		},
		easeInCirc : function (e, a, b, c, d) {
			return -c * (Math.sqrt(1 - (a /= d) * a) - 1) + b
		},
		easeOutCirc : function (e, a, b, c, d) {
			return c * Math.sqrt(1 - (a = a / d - 1) * a) + b
		},
		easeInOutCirc : function (e, a, b, c, d) {
			return 1 > (a /= d / 2) ? -c / 2 * (Math.sqrt(1 - a * a) - 1) + b : c / 2 * (Math.sqrt(1 - (a -= 2) * a) + 1) + b
		},
		easeInElastic : function (e, a, b, c, d) {
			e = 1.70158;
			var f = 0,
			g = c;
			if (0 == a)
				return b;
			if (1 == (a /= d))
				return b + c;
			f || (f = 0.3 * d);
			g < Math.abs(c) ? (g = c, e = f / 4) : e = f / (2 * Math.PI) * Math.asin(c / g);
			return  - (g * Math.pow(2, 10 * (a -= 1)) * Math.sin((a * d - e) * 2 * Math.PI / f)) + b
		},
		easeOutElastic : function (e, a, b, c, d) {
			e = 1.70158;
			var f = 0,
			g = c;
			if (0 == a)
				return b;
			if (1 == (a /= d))
				return b + c;
			f || (f = 0.3 * d);
			g < Math.abs(c) ? (g = c, e = f / 4) : e = f / (2 * Math.PI) * Math.asin(c / g);
			return g * Math.pow(2, -10 * a) * Math.sin((a * d - e) * 2 * Math.PI / f) + c + b
		},
		easeInOutElastic : function (e, a, b, c, d) {
			e = 1.70158;
			var f = 0,
			g = c;
			if (0 == a)
				return b;
			if (2 == (a /= d / 2))
				return b + c;
			f || (f = d * 0.3 * 1.5);
			g < Math.abs(c) ? (g = c, e = f / 4) : e = f / (2 * Math.PI) * Math.asin(c / g);
			return 1 > a ? -0.5 * g * Math.pow(2, 10 * (a -= 1)) * Math.sin((a * d - e) * 2 * Math.PI / f) + b : 0.5 * g * Math.pow(2, -10 * (a -= 1)) * Math.sin((a * d - e) * 2 * Math.PI / f) + c + b
		},
		easeInBack : function (e, a, b, c, d, f) {
			void 0 == f && (f = 1.70158);
			return c * (a /= d) * a * ((f + 1) * a - f) + b
		},
		easeOutBack : function (e, a, b, c, d, f) {
			void 0 == f && (f = 1.70158);
			return c * ((a = a / d - 1) * a * ((f + 1) * a + f) + 1) + b
		},
		easeInOutBack : function (e, a, b, c, d, f) {
			void 0 == f && (f = 1.70158);
			return 1 > (a /= d / 2) ? c / 2 * a * a * (((f *= 1.525) + 1) * a - f) + b : c / 2 * ((a -= 2) * a * (((f *= 1.525) + 1) * a + f) + 2) + b
		},
		easeInBounce : function (e, a, b, c, d) {
			return c - jQuery.easing.easeOutBounce(e, d - a, 0, c, d) + b
		},
		easeOutBounce : function (e, a, b, c, d) {
			return (a /= d) < 1 / 2.75 ? c * 7.5625 * a * a + b : a < 2 / 2.75 ? c * (7.5625 * (a -= 1.5 / 2.75) * a + 0.75) + b : a < 2.5 / 2.75 ? c * (7.5625 * (a -= 2.25 / 2.75) * a + 0.9375) + b : c * (7.5625 * (a -= 2.625 / 2.75) * a + 0.984375) + b
		},
		easeInOutBounce : function (e, a, b, c, d) {
			return a < d / 2 ? 0.5 * jQuery.easing.easeInBounce(e, 2 * a, 0, c, d) + b : 0.5 * jQuery.easing.easeOutBounce(e, 2 * a - d, 0, c, d) + 0.5 * c + b
		}
	});
	(function (e) {
		e.fn.UItoTop = function (a) {
			var b = e.extend({
					text : "To Top",
					min : 200,
					inDelay : 600,
					outDelay : 400,
					containerID : "toTop",
					containerHoverID : "toTopHover",
					scrollSpeed : 1200,
					easingType : "linear"
				}, a),
			c = "#" + b.containerID,
			d = "#" + b.containerHoverID;
			e("body").append('<a href="#" id="' + b.containerID + '">' + b.text + "</a>");
			e(c).hide().on("click.UItoTop", function () {
				e("html, body").animate({
					scrollTop : 0
				}, b.scrollSpeed, b.easingType);
				e("#" + b.containerHoverID, this).stop().animate({
					opacity : 0
				}, b.inDelay, b.easingType);
				return !1
			}).prepend('<span id="' + b.containerHoverID + '"></span>').hover(function () {
				e(d, this).stop().animate({
					opacity : 1
				}, 600, "linear")
			}, function () {
				e(d, this).stop().animate({
					opacity : 0
				}, 700, "linear")
			});
			e(window).scroll(function () {
				var a = e(window).scrollTop();
				"undefined" === typeof document.body.style.maxHeight && e(c).css({
					position : "absolute",
					top : a + e(window).height() - 50
				});
				a > b.min ? e(c).fadeIn(b.inDelay) : e(c).fadeOut(b.Outdelay)
			})
		}
	})(jQuery);
}
();
