/**
 * cbpGridGallery.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
;
(function (window) {
	'use strict';
	var docElem = window.document.documentElement,
	transEndEventNames = {
		'WebkitTransition' : 'webkitTransitionEnd',
		'MozTransition' : 'transitionend',
		'OTransition' : 'oTransitionEnd',
		'msTransition' : 'MSTransitionEnd',
		'transition' : 'transitionend'
	},
	transEndEventName = transEndEventNames[Modernizr.prefixed('transition')],
	support = {
		transitions : Modernizr.csstransitions,
		support3d : Modernizr.csstransforms3d
	};
	function setTransform(el, transformStr) {
		el.style.WebkitTransform = transformStr;
		el.style.msTransform = transformStr;
		el.style.transform = transformStr;
	}
	function getViewportW() {
		var client = docElem['clientWidth'],
		inner = window['innerWidth'];
		if (client < inner)
			return inner;
		else
			return client;
	}
	function extend(a, b) {
		for (var key in b) {
			if (b.hasOwnProperty(key)) {
				a[key] = b[key];
			}
		}
		return a;
	}
	function CBPGridGallery(el, options) {
		this.el = el;
		this.options = extend({}, this.options);
		extend(this.options, options);
		this._init();
	}
	CBPGridGallery.prototype.options = {};
	CBPGridGallery.prototype._init = function () {
		this.grid = this.el.querySelector('div.grid-wrap > ul.grid');
		this.gridItems = [].slice.call(this.grid.querySelectorAll('li:not(.grid-sizer)'));
		this._initMasonry();
		this._initEvents();
	};
	CBPGridGallery.prototype._initMasonry = function () {
		var grid = this.grid;
		imagesLoaded(grid, function () {
			new Masonry(grid, {
				itemSelector : 'li',
				columnWidth : grid.querySelector('.grid-sizer')
			});
		});
	};
	CBPGridGallery.prototype._initEvents = function () {
		var self = this;
		window.addEventListener('resize', function () {
			self._resizeHandler();
		});
	};
	CBPGridGallery.prototype._resizeHandler = function () {
		var self = this;
		function delayed() {
			self._resize();
			self._resizeTimeout = null;
		}
		if (this._resizeTimeout) {
			clearTimeout(this._resizeTimeout);
		}
		this._resizeTimeout = setTimeout(delayed, 50);
	}
	CBPGridGallery.prototype._resize = function () {
		if (this.isSlideshowVisible) {
			if (this.prevItem) {
				var translateVal = Number(-1 * (getViewportW() / 2 + this.prevItem.offsetWidth / 2));
				setTransform(this.prevItem, support.support3d ? 'translate3d(' + translateVal + 'px, 0, -150px)' : 'translate(' + translateVal + 'px)');
			}
			if (this.nextItem) {
				var translateVal = Number(getViewportW() / 2 + this.nextItem.offsetWidth / 2);
				setTransform(this.nextItem, support.support3d ? 'translate3d(' + translateVal + 'px, 0, -150px)' : 'translate(' + translateVal + 'px)');
			}
		}
	}
	window.CBPGridGallery = CBPGridGallery;
})(window);
