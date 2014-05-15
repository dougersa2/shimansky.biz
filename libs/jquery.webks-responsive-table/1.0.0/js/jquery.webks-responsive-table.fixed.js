/**
 * @file Contains the jQuery "webks Responsive Table" Plugin.
 * 
 * @version 1.0.0
 * @since 2012-08-20
 * @see Project home:
 * @category responsive webdesign, jquery
 * @author webks:websolutions kept simple - Julian Pustkuchen & Thomas Frobieter
 *         GbR | http://www.webks.de
 * @copyright webks:websolutions kept simple - Julian Pustkuchen & Thomas
 *            Frobieter GbR | http://www.webks.de
 */
(function (c) {
	c.fn.responsiveTable = function (a) {
		return c(this).each(function () {
			c(this).responsiveTableInit(a)
		})
	};
	c.fn.responsiveTableInit = function (a) {
		var b = c.extend({
				preserveClasses : !0,
				dynamic : !0,
				displayResponsiveCallback : function () {
					return 960 > c(document).width()
				},
				showSwitch : !1,
				switchTitle : "Switch to default table view.",
				headerSelector : "thead td, thead th",
				bodyRowSelector : "tbody tr",
				responsiveRowElement : "<dl></dl>",
				responsiveColumnTitleElement : "<dt></dt>",
				responsiveColumnValueElement : "<dd></dd>"
			}, a);
		return this.each(function () {
			var a = c(this);
			a._responsiveTableCheckElement(!1);
			if (a.data("webks-responsive-table-processed"))
				return a.responsiveTableUpdate(), !0;
			var d = c("<div></div>");
			d.addClass("webks-responsive-table");
			b.preserveClasses && d.addClass(a.attr("class"));
			var h = [];
			a.find(b.headerSelector).each(function (a, b) {
				var d = c(this).html();
				h[a] = d
			});
			a.find(b.bodyRowSelector).each(function (a, e) {
				var g = c(b.responsiveRowElement);
				g.addClass("row row-" + a);
				b.preserveClasses && g.addClass(c(this).attr("class"));
				c(this).children("td").each(function (a, d) {
					var e = c(b.responsiveColumnTitleElement);
					b.preserveClasses && e.addClass(c(this).attr("class"));
					e.addClass("title col-" + a);
					e.html(h[a]);
					var f = c(b.responsiveColumnValueElement);
					b.preserveClasses && f.addClass(c(this).attr("class"));
					f.addClass("value col-" + a);
					f.html(c(this).html());
					"" == c.trim(c(this).html()) && (f.addClass("empty"), e.addClass("empty"));
					g.append(e).append(f)
				});
				d.append(g)
			});
			a.after(d);
			if (b.dynamic) {
				if (b.showSwitch) {
					var e = c("<a>");
					e.html(b.switchTitle);
					e.addClass("switchBtn btn");
					e.attr("href", "#");
					c("div.webks-responsive-table a.switchBtn").on("click", "a", function (b) {
						a.responsiveTableShowTable();
						b.preventDefault();
						return !1
					});
					d.prepend(e)
				}
				a.data("webks-responsive-table", d);
				a.data("webks-responsive-table-processed", !0);
				d.data("table", a);
				d.data("settings", b);
				a.data("webks-responsive-table-processed", !0);
				a.hide();
				a.responsiveTableUpdate()
			} else
				a.remove()
		})
	};
	c.fn.responsiveTableUpdate = function () {
		return this.each(function () {
			var a = c(this);
			a._responsiveTableCheckElement(!0);
			var b = a.data("webks-responsive-table");
			void 0 != b && (b = b.data("settings"), void 0 != b && b.dynamic && (b.displayResponsiveCallback() ? a.responsiveTableShowResponsive() : a.responsiveTableShowTable()))
		})
	};
	c.fn.responsiveTableShowTable = function () {
		return this.each(function () {
			var a = c(this);
			a._responsiveTableCheckElement(!0);
			var b = a.data("webks-responsive-table");
			0 < b.length && (a.show(), b.hide())
		})
	};
	c.fn.responsiveTableShowResponsive = function () {
		return this.each(function () {
			var a = c(this);
			a._responsiveTableCheckElement();
			var b = a.data("webks-responsive-table");
			0 < b.length && (a.hide(), b.show())
		})
	};
	c.fn._responsiveTableCheckElement = function (a) {
		void 0 === a && (a = !0);
		var b = c(this);
		if (!b.is("table"))
			throw "The selected DOM element may only be a table!";
		if (a && (void 0 === b.data("webks-responsive-table-processed") || !b.data("webks-responsive-table-processed")))
			throw "The selected DOM element has to be initialized by webks-responsive-table first.";
		return b
	}
})(jQuery);
