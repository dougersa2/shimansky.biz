/*!
 * pastebin.com/1FkrdeUp
 * github.com/englishextra/shimansky.biz/blob/master/js/shimansky.biz-reusable.js
 */
/*!
 * libraries checks
 */
jqueryLoaded=window.jQuery?1:0;
bootstrapLoaded=window.jQuery&&$.fn.button?1:0;
json2Loaded=window.JSON?1:0;
touchwipeLoaded=window.touchwipe?1:0;
hammerLoaded=window.Hammer?1:0;
/*!
 *
 *
 */
addEvent(window, "blur", function () {
	(function (d, w) {
		var a = /localhost/.test(self.location.host) ? "http://localhost/externalcounters/" : "http://shimansky.biz/externalcounters/",
		b = encodeURIComponent(d.referrer || ""),
		c = encodeURIComponent(w.location.href || ""),
		e = encodeURIComponent((d.title || "").replace("\x27", "&#39;") + " - \u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442 \u043d\u0435 \u0430\u043a\u0442\u0438\u0432\u0435\u043d"),
		f = d.createElement("div"),
		g = d.getElementsByTagName("body")[0].firstChild;
		f.setAttribute("style", "position:absolute;left:-9999px;width:1px;height:1px;border:0;background:transparent url(" + a + "?dmn=" + c + "\x26rfrr=" + b + "\x26ttl=" + e + "\x26encoding=utf-8) top left no-repeat;");
		g.parentNode.insertBefore(f, g);
	}
		(document, window));
}, !1);
/*!
 *
 *
 */
(function (d) {
	var g = /localhost/.test(self.location.host) ? "http://localhost/externalcounters/" : "http://shimansky.biz/externalcounters/",
	c = d.getElementsByTagName("a") || "",
	a = self.location.protocol + "//" + self.location.host + "/" || "",
	h = self.location.host + "/" || "",
	k = encodeURIComponent(d.location.href || ""),
	l = encodeURIComponent(d.title || "").replace("\x27", "&#39;");
	if (c && a && h)
		for (a = 0; a < c.length; a += 1)
			if (b = c[a], (e = b.getAttribute("href") || "") && (e.match(/^\/scripts\//) || /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)|(localhost)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/.test(e)) && !b.getAttribute("rel"))
				c[a].onclick = function () {
					var a = this.getAttribute("href"),
					c = d.getElementsByTagName("body")[0].firstChild,
					f = d.createElement("div");
					f.setAttribute("style", "position:absolute;left:-9999px;width:1px;height:1px;border:0;background:transparent url(" + g + "?dmn=" + encodeURIComponent(a) + "&rfrr=" + k + "&ttl=" + l + "&encoding=utf-8) top left no-repeat;");
					c.parentNode.insertBefore(f, c)
				}
})(document);
/*!
 *
 *
 */

/*!
 *
 *
 */
window.Modernizr && Modernizr.touch && yepnope.injectJs("/libs/hammer.js-1.0.5/shimansky.biz/js/jquery.hammer.min.js", function () {
	(function (b) {
		var f = /localhost/.test(self.location.host) ? "http://localhost/externalcounters/" : "http://shimansky.biz/externalcounters/",
		d = b.getElementsByTagName("a") || "",
		a = self.location.protocol + "//" + self.location.host + "/" || "",
		g = self.location.host + "/" || "",
		h = encodeURIComponent(b.location.href || ""),
		k = encodeURIComponent(b.title || "").replace("\x27", "&#39;");
		if (d && a && g && "undefined" !== typeof window.jQuery && "undefined" !== typeof window.Hammer)
			for (var c, e, a = 0; a < d.length; a += 1)
				if (c = d[a], (e = c.getAttribute("href") || "") && (e.match(/^\/scripts\//) || /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)|(localhost)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/.test(e)) && !c.getAttribute("rel"))
					$(c).hammer().on("touch", $(this), function (a) {
						a.preventDefault();
						a = $(this).attr("href");
						var c = b.getElementsByTagName("body")[0].firstChild,
						d = b.createElement("div");
						d.setAttribute("style", "position:absolute;left:-9999px;width:1px;height:1px;border:0;background:transparent url(" + f + "?dmn=" + encodeURIComponent(a) + "&rfrr=" + h + "&ttl=" + k + "&encoding=utf-8) top left no-repeat;");
						c.parentNode.insertBefore(d, c);
						b.location.href = a
					})
	})(document);
}, {
	charset : "utf-8"
}, 5E3);
/*!
 *
 *
 */
yepnope.injectJs("/libs/mmenu-3.3.0/shimansky.biz/js/jquery.mmenu.fixed.min.js", function () {
	"undefined" !== typeof window.jQuery && function () {
		$(function () {
			$("nav#menu-left").mmenu()
		});
		$(function () {
			$("nav#menu-right").mmenu({
				position : "right",
				counters : !0,
				searchfield : !0
			});
		})
	}
	();
	"undefined" !== typeof window.jQuery && function () {
		$("li a.nav-li-a-delimiter").click(function (a) {
			a.preventDefault()
		});
	}
	();
}, {
	charset : "utf-8"
}, 5E3);
/*!
 *
 *
 */
yepnope.injectJs("/libs/skrollr/shimansky.biz/js/skrollr.min.js", function () {
	yepnope.injectJs("/libs/skrollr/shimansky.biz/js/skrollr.menu.min.js", function () {
		(function () {
			for (var b, c = function () {}, a = "assert clear count debug dir dirxml error exception group groupCollapsed groupEnd info log markTimeline profile profileEnd table time timeEnd timeStamp trace warn".split(" "), d = a.length, e = window.console = window.console || {}; d--; )
				b = a[d], e[b] || (e[b] = c)
		})();
		var s;
		$(function () {
			function b() {
				950 > $(window).width() || $("html").hasClass("lt-ie9") ? ("undefined" !== typeof s && s && s.destroy(), $("html").removeClass("js").addClass("no-js no-js-mode")) : $("html").removeClass("no-js").removeClass("no-js-mode").addClass("js");
				if (!$("html").hasClass("no-js")) {
					c = $(window).height();
					$(".app-wrap .app-nav").remove();
					$(".app-wrap").append('<nav class="app-nav"><ul></ul></nav>');
					s = skrollr.init();
					var a = 500;
					$(".steps > .step").each(function (b, c) {
						a += 1E3;
						$(".app-wrap .app-nav > ul").append('<li><a data-position="' + a + '" href="#' + $(this).attr("id") + '"><span>' + $(this).data("nav") + "</span></a></li>")
					});
					var b = (c - $(".app-nav > ul").height()) / 2;
					$(".app-nav > ul").css("top", b)
				}
			}
			var c;
			b();
			$(window).resize(function () {
				b()
			});
			$(window).scroll(function (a) {
				a = $("body").scrollTop();
				$(".steps > .step");
				$("#ScrollY").html(a);
				activeSlide = Math.round(a / 1E3) - 1;
				-1 < activeSlide && $(".app-nav li").removeClass("active").eq(activeSlide).addClass("active")
			});
			$(".scroll-arrow").click(function () {
				$("html, body").animate({
					scrollTop : $(".step1").offset().top
				});
				$(".scroll-arrow").hide()
			});
			$('a[href^="#"]').on("click", function (a) {
				a.preventDefault();
				console.log(a);
				$(this.hash);
				console.log($(this).attr("data-position"));
				$("html, body").stop().animate({
					scrollTop : $(this).attr("data-position")
				}, 900, "swing")
			})
		});
	}, {
		charset : "utf-8"
	}, 5E3);
}, {
	charset : "utf-8"
}, 5E3);
/*!
 *
 *
 */
(function (b, c) {
	b && c && $.ajax({
		url : "/scripts/getjson/?load=" + encodeURIComponent(c),
		dataType : "json",
		async : !0,
		success : function (a) {
			a && b.appendChild(document.createTextNode("\u0412\u0441\u0435\u0433\u043e \u0437\u0430\u0433\u0440\u0443\u0437\u043e\u043a: " + a.summaries.time.downloads + ", \u0438\u0437 \u043d\u0438\u0445 " + a.summaries.geo.percent + "% \u0438\u0437 " + a.summaries.geo.top + ", " + a.summaries.os.percent + "% \u043f\u043e\u0434 " + a.summaries.os.top + ""))
		}
	})
})(document.getElementById("sf_ivscrenru_stat") || "", "https://sourceforge.net/projects/iv-scr-en-ru/files/stats/json?start_date=2010-06-05&end_date=" + sbizFnGetYyyymmdd());
/*!
 *
 *
 */
yepnope.injectJs("/libs/superbox/shimansky.biz/js/superbox.fixed.min.js", function () {
	"undefined" !== typeof window.jQuery && $(function () {
		$(".superbox").SuperBox();
	});
	"undefined" !== typeof window.jQuery && $(document).on("click", ".superbox-current-desc h2 a", function (a) {
		a.preventDefault();
		a = /localhost/.test(self.location.host) ? "http://localhost/externalcounters/" : "http://shimansky.biz/externalcounters/";
		var e = encodeURIComponent(document.location.href || ""),
		f = encodeURIComponent(document.title || "").replace("\x27", "&#39;"),
		b = $(this).attr("href"),
		c = document.getElementsByTagName("body")[0].firstChild,
		d = document.createElement("div");
		d.setAttribute("style", "position:absolute;left:-9999px;width:1px;height:1px;border:0;background:transparent url(" + a + "?dmn=" + encodeURIComponent(b) + "&rfrr=" + e + "&ttl=" + f + "&encoding=utf-8) top left no-repeat;");
		c.parentNode.insertBefore(d, c);
		setTimeout(function () {
			window.open(b, "_blank") || (document.location.href = b)
		}, 500);
	});
}, {
	charset : "utf-8"
}, 5E3);
/*!
 *
 *
 */
(function () {
	var a = document.getElementById("page"),
	b = document.getElementById("circularG");
	b && (b.style.display = "none");
	a && (a.style.display = "block")
})();
/*!
 *
 *
 */
var a = document.getElementById("parallax") || "", b = document.getElementById("parallax_disabled") || "";
"undefined" !== typeof sbizIsMobileBrowser && sbizIsMobileBrowser && (a.style.display = "none", b.style.display = "block");
/*!
 *
 *
 */
("undefined" !== typeof sbizIsMobileBrowser && sbizIsMobileBrowser) || yepnope.injectJs("/libs/parallax/shimansky.biz/js/jquery.parallax.min.js", function () {
	var $html = $("html"),
	$scene1 = $("#scene1");
	$scene1.parallax();
}, {
	charset : "utf-8"
}, 5E3);
/*!
 *
 *
 */
/*!
 * may not work properly
 */
("undefined" !== typeof sbizIsMobileBrowser && sbizIsMobileBrowser) || ("undefined" !== typeof window.jQuery && function (a, b) {
	$(a).on("focus", "#" + b, function () {
		$(this).animate({
			width : $(this).width() + 145 + "px"
		}, 300)
	});
	$(a).on("blur", "#" + b, function () {
		$(this).animate({
			width : $(this).width() - 145 + "px"
		}, 300)
	})
}
	(document, "search_text"));
/*!
 * works fine
 */
("undefined" !== typeof earlyIsMobileBrowser && earlyIsMobileBrowser) || ("undefined" !== typeof window.jQuery && function (a, b) {
	var w = $("#" + b).width();
	$(a).on("focus", "#" + b, function () {
		$(this).animate({
			width : w + 145 + "px"
		}, 300)
	});
	$(a).on("blur", "#" + b, function () {
		$(this).animate({
			width : w + "px"
		}, 300)
	})
}
	(document, "search_text"));
/*!
 *
 *
 */
var a = document.getElementById("sequence") || "",
isOpera = window.opera && navigator.userAgent && /Presto/.test(navigator.userAgent) || "";
(isOpera || "undefined" !== typeof sbizIsMobileBrowser && sbizIsMobileBrowser) && (a.style.display = "none");
/*!
 *
 *
 */
yepnope.injectJs("/libs/jquery-2.0.3/jquery.fixed.min.js", function () {
	(isOpera || ("undefined" !== typeof sbizIsMobileBrowser && sbizIsMobileBrowser)) || yepnope.injectJs("/libs/Sequence/shimansky.biz/js/jquery.sequence.min.js", function () {
		"undefined" !== typeof window.jQuery && $(document).ready(function () {
			$("#sequence").sequence({
				autoPlay : !0,
				autoPlayDelay : 2E3,
				nextButton : !0,
				prevButton : !0,
				preloader : !0,
				navigationSkip : !0,
				pauseOnHover : !0,
				animateStartingFrameIn : !0,
				preloadTheseFrames : [1],
				preloadTheseImages : "/images/pages/more/more_resume_writing/step1.svg /images/pages/more/more_resume_writing/step2.svg /images/pages/more/more_resume_writing/step3.svg /images/pages/more/more_resume_writing/step4.svg /images/pages/more/more_resume_writing/step5.svg /images/pages/more/more_resume_writing/step6.svg /images/pages/more/more_resume_writing/step7.svg /images/pages/more/more_resume_writing/step8.svg".split(" ")
			}).data("sequence");
			sequence.afterLoaded = function () {
				$(".sequence-prev, .sequence-next").fadeIn(500)
			}
		});
	}, {
		charset : "utf-8"
	}, 5E3);
}, {
	charset : "utf-8"
}, 5E3);
/*!
 *
 *
 */
yepnope.injectJs("/libs/sidr/shimansky.biz/js/jquery.sidr.min.js", function () {
	"undefined" !== typeof window.jQuery && function (a) {
		a(document).ready(function () {
			a("#leftnavbtn").sidr({
				name : "leftnav",
				source : "#leftnav"
			});
			a(window).click(function () {
				a.sidr("close", "leftnav")
			})
		})
	}
	(jQuery);
}, {
	charset : "utf-8"
}, 5E3);
("undefined" !== typeof sbizIsMobileBrowser && sbizIsMobileBrowser) && yepnope.injectJs("/libs/jquery.touchwipe/shimansky.biz/js/jquery.touchwipe.min.js", function () {
	(function (a) {
		a(window).touchwipe({
			wipeLeft : function () {
				a.sidr("close", "leftnav")
			},
			wipeRight : function () {
				a.sidr("open", "leftnav")
			},
			preventDefaultEvents : !1
		})
	})(jQuery);
}, {
	charset : "utf-8"
}, 5E3);
/*!
 *
 *
 */
window.onload = function (b, c) {
	if (!b)
		for (a = c.getElementsByTagName("img"), b = 0; b < a.length; b++)
			/ svgimg /.test(a[b].getAttribute("class")) && (d = a[b].getAttribute("src"), a[b].setAttribute("src", d.replace(/(.*)\.(.*?)$/, "$1.png")))
}
(/svg/.test(document.documentElement.className), document);
/*!
 *
 *
 */
/*!
 *
 *
 */
yepnope.injectJs("/libs/jquery-2.0.3/jquery.fixed.min.js", function () {
	(function (b, c) {
		b && c && $.ajax({
			url : "/scripts/getjson/?load=" + encodeURIComponent(c),
			dataType : "json",
			async : !0,
			success : function (a) {
				a && b.appendChild(document.createTextNode("\u0412\u0441\u0435\u0433\u043e \u0437\u0430\u0433\u0440\u0443\u0437\u043e\u043a: " + a.summaries.time.downloads + ", \u0438\u0437 \u043d\u0438\u0445 " + a.summaries.geo.percent + "% \u0438\u0437 " + a.summaries.geo.top + ", " + a.summaries.os.percent + "% \u043f\u043e\u0434 " + a.summaries.os.top + ""));
				$("#sf_roughandreadygrammartips_stat_holder").css("visibility", "visible")
			}
		})
	})(document.getElementById("sf_roughandreadygrammartips_stat") || "", "https://sourceforge.net/projects/rough-and-ready-grammar-tips/files/stats/json?start_date=2014-01-30&end_date=" + sbizFnGetYyyymmdd());
}, {
	charset : "utf-8"
}, 5E3);
/*!
 *
 *
 */
/*!
 *
 *
 */
/*!
 *
 *
 */
/*!
 *
 *
 */
("undefined" !== typeof sbizIsMobileBrowser && sbizIsMobileBrowser) || yepnope.injectJs("/libs/jquery-ui-1.10.3.custom.autocomplete/shimansky.biz/js/jquery-ui-1.10.3.custom.min.js", function () {
	"undefined" !== typeof window.jQuery && function (d, c, e, f) {
		$("#" + c).autocomplete({
			source : function (b, a) {
				$.ajax({
					url : f,
					dataType : "json",
					data : {
						q : b.term,
						c : 10
					},
					success : function (b) {
						a($.map(b, function (a) {
								return {
									label : a.value,
									value : a.name
								}
							}))
					}
				})
			},
			minLength : 1,
			select : function (b, a) {
				if (a.item.value && (a.item.value.match(/^http\:\/\//) || a.item.value.match(/^https\:\/\//) || a.item.value.match(/^\/search\//) || a.item.value.match(/^\//)))
					return d.location.href = a.item.value, !1;
				$(b.target).val($("#" + c).val());
				$("#" + e).submit()
			},
			open : function () {},
			close : function () {}
		})
	}
	(document, "search_text", "search_form", "/libs/jquery-ui-1.10.3.custom.autocomplete/shimansky.biz/autocomplete/");
}, {
	charset : "utf-8"
}, 5E3);
/*!
 *
 *
 */
/*!
 *
 *
 */
/*!
 *
 *
 */
(function (a, b, c) {
	if (d = a.getElementById(b) || "")
		a = a.createElement("audio"), a.setAttribute("id", "player_" + b), a.setAttribute("src", c), a.setAttribute("type", "audio/mp3"), a.setAttribute("controls", "controls"), d.appendChild(a)
})(document, "audio1", "/dl/mp3/tests_macmillan_practice_tests_for_the_russian_state_exam_2nd_test_20.mp3");
/*!
 *
 *
 */
("undefined" !== typeof sbizIsMobileBrowser && sbizIsMobileBrowser) ? function (f, c) {
	for (var d = c.length; d--; ) {
		var a = c[d],
		b = f.createElement("a"),
		e = a.parentNode;
		b.href = a.src;
		b.appendChild(document.createTextNode("\u041f\u0440\u043e\u0441\u043b\u0443\u0448\u0430\u0442\u044c \u0437\u0432\u0443\u043a / Listen to the sound"));
		b.setAttribute("target", "_blank"),
		g = f.createElement("p");
		g.appendChild(b);
		e.insertBefore(g, a);
		e.removeChild(a)
	}
}
(document, document.getElementsByTagName("audio") || "") : yepnope.injectCss("/libs/mediaelement/shimansky.biz/mediaelementplayer.min.css", function () {
	yepnope.injectJs("/libs/mediaelement/shimansky.biz/mediaelement-and-player.min.js", function () {
		$("audio,video").mediaelementplayer()
	}, {
		charset : "utf-8"
	}, 5E3)
}, {
	media : "all"
}, 5E3);
/*!
 *
 *
 */
(function (a, b, c) {
	if (d = a.getElementById(b) || "")
		a = a.createElement("audio"), a.setAttribute("id", "player_" + b), a.setAttribute("src", c), a.setAttribute("type", "audio/mp3"), a.setAttribute("controls", "controls"), d.appendChild(a)
})(document, "audio2", "/dl/mp3/tests_macmillan_gia_english_test_sample_2013_2.mp3");
/*!
 *
 *
 */
("undefined" !== typeof sbizIsMobileBrowser && sbizIsMobileBrowser) || (function (b, c) {
	if (f = b.getElementById(c))
		a = b.createElement("iframe"), a.setAttribute("src", "//player.vimeo.com/video/78267173"), a.setAttribute("width", "500"), a.setAttribute("height", "282"), a.setAttribute("style", "border:none;"), a.setAttribute("webkitallowfullscreen", "true"), a.setAttribute("mozallowfullscreen", "true"), a.setAttribute("allowfullscreen", "true"), f.appendChild(a)
})(document, "video_78267173");
 /*!
 *
 *
 */
(function (e, f, a, h, k) {
	b = document.createElement("a");
	b.setAttribute("style", "display:none;");
	b.setAttribute("href", "#");
	b.setAttribute("id", h);
	b.setAttribute("onclick", "function scrollTop2(c){var b=window.pageYOffset,d=0,e=setInterval(function(b,a){return function(){a-=b*c;window.scrollTo(0,a);d++;(150<d||0>a)&&clearInterval(e)}}(c,b--),50)};scrollTop2(100);return false;");
	c = document.createElement("span");
	c.setAttribute("id", k);
	b.appendChild(c);
	d = document.createTextNode("\u041d\u0430\u0432\u0435\u0440\u0445");
	b.appendChild(d);
	e.appendChild(b);
	f.onscroll = function () {
		var e = f.pageYOffset || a.documentElement.scrollTop || a.body.scrollTop,
		k = f.innerHeight || a.documentElement.clientHeight || a.body.clientHeight,
		g = a.getElementById(h) || "";
		g && (e > k ? g.style.display = "inline" : g.style.display = "none")
	}
})(document.getElementsByTagName("body")[0] || document.documentElement, window, document, "toTop", "toTopHover");
/*!
 *
 *
 */
(function (a, f, g) {
	b = document.createElement("a");
	b.setAttribute("style", "display:none;");
	b.setAttribute("href", "#");
	b.setAttribute("id", f);
	b.setAttribute("onclick", "function scrollTop2(c){var b=window.pageYOffset,d=0,e=setInterval(function(b,a){return function(){a-=b*c;window.scrollTo(0,a);d++;(150<d||0>a)&&clearInterval(e)}}(c,b--),50)};scrollTop2(100);return false;");
	c = document.createElement("span");
	c.setAttribute("id", g);
	b.appendChild(c);
	d = document.createTextNode("\u041d\u0430\u0432\u0435\u0440\u0445");
	b.appendChild(d);
	a.appendChild(b);
	"undefined" !== typeof window.jQuery && $(window).scroll(function () {
		$(this).scrollTop() > $(window).height() ? $("#" + f).stop().fadeIn() : $("#" + f).stop().fadeOut()
	})
})(document.getElementsByTagName("body")[0] || document.documentElement, "toTop", "toTopHover");
/*!
 *
 *
 */
yepnope.injectJs("//cdn.jsdelivr.net/jquery.easing/1.3/jquery.easing.1.3.js", function () {
	yepnope.injectJs("//cdn.jsdelivr.net/jquery.uitotop/1.2/js/jquery.ui.totop.min.js", function () {
		"undefined" !== typeof window.jQuery && $(document).ready(function () {
			$().UItoTop({
				easingType : "easeOutQuart"
			})
		})
	}, {
		charset : "utf-8"
	}, 5E3)
}, {
	charset : "utf-8"
}, 5E3);
/*!
 *
 *
 */
"undefined" !== typeof window.jQuery && function (c, a, b) {
	c && a && b && ($(document).on("keypress", a, function () {
			"" != a.val() && b.html("")
		}), c.submit(function () {
			if ("" == a.val() || !/^[a-zA-Z]*$/.test(a.val()))
				return a.val(""), b.html("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043b\u043e\u0432\u043e \u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0438\u043c\u0438 \u0431\u0443\u043a\u0432\u0430\u043c\u0438!"), !1
		}))
}
($("#oald8form") || "", $("#searchfield") || "", $("#oald8form_check") || "");
/*!
 *
 *
 */
var deferredJS = function () {
	yepnope.injectJs("/libs/jquery-2.0.3/jquery.fixed.min.js", function () {
		yepnope.injectJs("/libs/bootstrap-3.1.0/shimansky.biz/js/bootstrap.min.js", function () {
			"undefined" !== typeof window.jQuery && $(document).ready(function () {
				$("#show-menu").click(function (e) {
					e.preventDefault();
					$("#wrapper").toggleClass("active");
				});
				var maxHeight = 0;
				$(".activity-feed-wrapper").each(function () {
					if ($(this).height() > maxHeight) {
						maxHeight = $(this).height();
					}
				});
				$(".activity-feed-wrapper").height(maxHeight);
			});
			yepnope.injectJs("/libs/json2/shimansky.biz/js/json2.min.js", function () {
				yepnope.injectJs("/libs/jStorage/shimansky.biz/js/jstorage.min.js", function () {
					"undefined" !== typeof window.jQuery && domready(function () {
						(function (b) {
							b && function () {
								var a = $("#comments_check"),
								f = $("#comments_form_submit_button");
								b && a && (a.hide(), f.click(function () {
										var d = b.value,
										c = encodeURIComponent(window.location.href.split("#")[0]),
										g = encodeURIComponent(document.title.replace("\x27", "&#39;")),
										e = "comments_textarea=" + d + "&self_href=" + c + "&self_title=" + g;
										d && $.jStorage.set("comments_textarea", JSON.stringify(d));
										if (!d || !c || !g)
											return a.html("\u00a0\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0412\u0430\u0448\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435!\u00a0"), a.show(), !1;
										f.hide();
										$.ajax({
											type : "POST",
											url : "/scripts/comments/add.php",
											data : e,
											success : function () {
												a.hide();
												$.jStorage.flush("comments_textarea");
												$("#comments_form")[0].reset();
												$("#load_pt_comments").load("/scripts/comments/?load=posts&limit=100");
												b.focus()
											}
										});
										return !1
									}));
								var e = b.value,
								c = $.jStorage.get("comments_textarea");
								c && !e && (b.value = $.parseJSON(c));
								$("#comments_form_reset_button").click(function () {
									a.hide();
									$.jStorage.flush("comments_textarea");
									b.value = "";
									b.focus();
								})
							}
							();
							$("#load_pt_comments").load("/scripts/comments/?load=posts&limit=100");
							$(window).load(function () {
								b.focus()
							})
						})(document.getElementById("comments_textarea") || "")
					});
					"undefined" !== typeof window.jQuery && $(document).on("click", "#load_pt_comments a", function (a) {
						a.preventDefault();
						a = /localhost/.test(self.location.host) ? "http://localhost/externalcounters/" : "http://shimansky.biz/externalcounters/";
						var e = encodeURIComponent(document.location.href || ""),
						f = encodeURIComponent(document.title || "").replace("\x27", "&#39;"),
						b = $(this).attr("href"),
						c = document.getElementsByTagName("body")[0].firstChild,
						d = document.createElement("div");
						d.setAttribute("style", "position:absolute;left:-9999px;width:1px;height:1px;border:0;background:transparent url(" + a + "?dmn=" + encodeURIComponent(b) + "&rfrr=" + e + "&ttl=" + f + "&encoding=utf-8) top left no-repeat;");
						c.parentNode.insertBefore(d, c);
						setTimeout(function () {
							window.open(b, "_blank") || (document.location.href = b)
						}, 500);
					});
				}, {
					charset : "utf-8"
				}, 5E3);
			}, {
				charset : "utf-8"
			}, 5E3);
		}, {
			charset : "utf-8"
		}, 5E3);
	}, {
		charset : "utf-8"
	}, 5E3);
};
/*!
 *
 *
 */
(function () {
	var a = document.getElementById("page"),
	b = document.getElementById("circularG");
	b && (b.style.display = "none");
	a && (a.style.display = "block")
})();
/*!
 *
 *
 */
(function (d) {
	var g = /localhost/.test(self.location.host) ? "http://localhost/externalcounters/" : "http://shimansky.biz/externalcounters/",
	c = d.getElementsByTagName("a") || "",
	a = self.location.protocol + "//" + self.location.host + "/" || "",
	h = self.location.host + "/" || "",
	k = encodeURIComponent(d.location.href || ""),
	l = encodeURIComponent(d.title || "").replace("\x27", "&#39;");
	if (c && a && h)
		for (a = 0; a < c.length; a += 1)
			if (b = c[a], (e = b.getAttribute("href") || "") && (e.match(/^\/scripts\//) || /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)|(localhost)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/.test(e)) && !b.getAttribute("rel"))
				c[a].onclick = function () {
					var a = this.getAttribute("href"),
					c = d.getElementsByTagName("body")[0] || d.documentElement,
					f = d.createElement("div");
					f.setAttribute("style", "position:absolute;left:-9999px;width:1px;height:1px;border:0;background:transparent url(" + g + "?dmn=" + encodeURIComponent(a) + "&rfrr=" + k + "&ttl=" + l + "&encoding=utf-8) top left no-repeat;");
					c.parentNode.insertBefore(f, c)
				}
})(document);
/*!
 *
 *
 */
yepnope.injectJs("/libs/jquery-2.0.3/jquery.fixed.min.js", function () {}, {
	charset : "utf-8"
}, 5E3);
/*!
 *
 *
 */
yepnope.injectJs("/libs/bootstrap-3.1.0/shimansky.biz/js/bootstrap.min.js", function () {
	"undefined" !== typeof window.jQuery && $(document).ready(function () {
		$("#show-menu").click(function (e) {
			e.preventDefault();
			$("#wrapper").toggleClass("active");
		});
		var maxHeight = 0;
		$(".activity-feed-wrapper").each(function () {
			if ($(this).height() > maxHeight) {
				maxHeight = $(this).height();
			}
		});
		$(".activity-feed-wrapper").height(maxHeight);
	});
}, {
	charset : "utf-8"
}, 5E3);
/*!
 *
 *
 */
(function () {
	var a = document.getElementById("page"),
	b = document.getElementById("circularG");
	b && (b.style.display = "none");
	a && (a.style.display = "block")
})();
/*!
 *
 *
 */
("undefined" !== typeof sbizIsMobileBrowser && sbizIsMobileBrowser) && yepnope.injectJs("/libs/jquery.webks-responsive-table/shimansky.biz/jquery.webks-responsive-table.fixed.min.js", function () {
	"undefined" !== typeof window.jQuery && domready(function () {
		(function (a, b, c) {
			window.innerWidth && (0 < window.innerWidth ? window.innerWidth : screen.width) && $(function () {
				$("body").addClass("javascript-active");
				$(a).responsiveTable({
					displayResponsiveCallback : function () {
						return b > (window.innerWidth ? 0 < window.innerWidth ? window.innerWidth : screen.width : "")
					}
				});
				$(window).bind("orientationchange", function (b) {
					setTimeout("$('" + a + "').responsiveTableUpdate()", c)
				});
				$(window).resize(function () {
					$(a).responsiveTableUpdate()
				})
			})
		})("table.respond", 768, 100)
	});
}, {
	charset : "utf-8"
}, 5E3);
/*!
 *
 *
 */
yepnope.injectJs("/libs/sidr/shimansky.biz/js/jquery.sidr.min.js", function () {
	"undefined" !== typeof window.jQuery && function (a) {
		a(document).ready(function () {
			a("#leftnavbtn").sidr({
				name : "leftnav",
				source : "#leftnav"
			});
			a(window).click(function () {
				a.sidr("close", "leftnav")
			})
		})
	}
	(jQuery);
	("undefined" !== typeof sbizIsMobileBrowser && sbizIsMobileBrowser) && yepnope.injectJs("/libs/jquery.touchwipe/shimansky.biz/js/jquery.touchwipe.min.js", function () {
		(function (a) {
			a(window).touchwipe({
				wipeLeft : function () {
					a.sidr("close", "leftnav")
				},
				wipeRight : function () {
					a.sidr("open", "leftnav")
				},
				preventDefaultEvents : !1
			})
		})(jQuery);
	}, {
		charset : "utf-8"
	}, 5E3);
}, {
	charset : "utf-8"
}, 5E3);
/*!
 *
 *
 */
(function (b, c) {
	b && c && $.ajax({
		url : "/scripts/getjson/?load=" + encodeURIComponent(c),
		dataType : "json",
		async : !0,
		success : function (a) {
			a && b.appendChild(document.createTextNode("\u0412\u0441\u0435\u0433\u043e \u0437\u0430\u0433\u0440\u0443\u0437\u043e\u043a: " + a.summaries.time.downloads + ", \u0438\u0437 \u043d\u0438\u0445 " + a.summaries.geo.percent + "% \u0438\u0437 " + a.summaries.geo.top + ", " + a.summaries.os.percent + "% \u043f\u043e\u0434 " + a.summaries.os.top + ""));
			$("#sf_articlesreadingrulesutf_stat_holder").css("visibility", "visible")
		}
	})
})(document.getElementById("sf_articlesreadingrulesutf_stat") || "", "https://sourceforge.net/projects/articles-reading-rules-utf/files/stats/json?start_date=2014-01-30&end_date=" + sbizFnGetYyyymmdd());

/*!
 *
 *
 */
var deferredJS = function () {
	yepnope.injectJs("/libs/jquery-2.0.3/jquery.fixed.min.js", function () {}, {
		charset : "utf-8"
	}, 5E3);
};
/*!
 *
 *
 */
/*!
 *
 *
 */
/*!
 *
 *
 */

/*!
 *
 *
 */
/*!
 *
 *
 */
document.getElementById("vk_like") && !/localhost/.test(self.location.host) && yepnope.injectJs("//vk.com/js/api/openapi.js?105", function () {
	domready(function () {
		!/localhost/.test(self.location.host) && (VK.init({
				apiId : 4331247,
				nameTransportPath : "/xd_receiver.htm",
				onlyWidgets : !0
			}), VK.Widgets.Like("vk_like", {
				type : "button",
				height : 24
			}))
	});
}, {
	charset : "utf-8"
}, 5E3);
/*!
 *
 *
 */
/*!
 *
 *
 */

/*!
 *
 *
 */
yepnope.injectJs("/libs/parallax/shimansky.biz/js/parallax.min.js", function () {
	var scene1 = document.getElementById("scene1");
	var parallax1 = new Parallax(scene1);
}, {
	charset : "utf-8"
}, 5E3);
/*!
 *
 *
 */
"undefined" !== typeof window.jQuery && $(function () {
	$("a[href*=#]:not([href=#])").click(function () {
		if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
			var a = $(this.hash),
			a = a.length ? a : $("[name=" + this.hash.slice(1) + "]");
			if (a.length)
				return $("html,body").animate({
					scrollTop : a.offset().top
				}, 1E3), !1
		}
	})
});
/*!
 *
 *
 */
"undefined" !== typeof window.jQuery && $("#morenav").click(function () {
	$(this).attr("href", "#page" == $(this).attr("href") ? "#more_holder" : "#page");
	$(this).toggleClass("movedown_btn moveup_btn");
});
/*!
 *
 *
 */
("undefined" !== typeof sbizIsMobileBrowser && sbizIsMobileBrowser) ? ($("#parallax").hide(), $("#morenav_container").hide(), $("#more_holder").addClass("more_holder_mobile"), $("#parallax_disabled").show()) : yepnope.injectJs("/libs/parallax/shimansky.biz/js/jquery.parallax.min.js", function () {}, {
	charset : "utf-8"
}, 5E3);
/*!
 *
 *
 */
(function (a) {
	a && (!a.hasAttribute("class") || a.hasAttribute("class") && "no-js" !== a.getAttribute("class")) && a.setAttribute("class", "no-js")
}
	(document.documentElement || ""));
/*!
 *
 *
 */
("undefined" !== typeof sbizIsMobileBrowser && sbizIsMobileBrowser) || yepnope.injectJs("/libs/jquery-ui-1.10.3.custom.autocomplete/shimansky.biz/js/jquery-ui-1.10.3.custom.min.js", function () {
	"undefined" !== typeof window.jQuery && function (d, c, e, f) {
		$("#" + c).autocomplete({
			source : function (b, a) {
				$.ajax({
					url : f,
					dataType : "json",
					data : {
						q : b.term,
						c : 10
					},
					success : function (b) {
						a($.map(b, function (a) {
								return {
									label : a.value,
									value : a.name
								}
							}))
					}
				})
			},
			minLength : 1,
			select : function (b, a) {
				if (a.item.value && (a.item.value.match(/^http\:\/\//) || a.item.value.match(/^https\:\/\//) || a.item.value.match(/^\/search\//) || a.item.value.match(/^\//)))
					return d.location.href = a.item.value, !1;
				$(b.target).val($("#" + c).val());
				$("#" + e).submit()
			},
			open : function () {},
			close : function () {}
		})
	}
	(document, "search_text", "search_form", "/libs/jquery-ui-1.10.3.custom.autocomplete/shimansky.biz/autocomplete/");
}, {
	charset : "utf-8"
}, 5E3);
/*!
 *
 *
 */
var hidePreloader = function () {
	var a = document.getElementById("page"),
	b = document.getElementById("circularG");
	b && (b.style.display = "none");
	a && (a.style.display = "block")
};
window.addEventListener ? window.addEventListener("load", hidePreloader, !1) : window.attachEvent ? window.attachEvent("onload", hidePreloader) : window.onload = hidePreloader;
/*!
 *
 *
 */
("undefined" !== typeof sbizIsMobileBrowser && sbizIsMobileBrowser) && yepnope.injectJs("/libs/jquery.webks-responsive-table/shimansky.biz/jquery.webks-responsive-table.fixed.min.js", function () {
	"undefined" !== typeof window.jQuery && domready(function () {
		(function (a, b, c, d) {
			a.innerWidth && (0 < a.innerWidth ? a.innerWidth : screen.width) && $(function () {
				$("body").addClass("javascript-active");
				$(b).responsiveTable({
					displayResponsiveCallback : function () {
						return c > (a.innerWidth ? 0 < a.innerWidth ? a.innerWidth : screen.width : "")
					}
				});
				$(a).bind("orientationchange", function (a) {
					setTimeout("$(\x27" + b + "\x27).responsiveTableUpdate()", d)
				});
				$(a).resize(function () {
					$(b).responsiveTableUpdate()
				})
			})
		})(window, "table.respond", 768, 100)
	});
}, {
	charset : "utf-8"
}, 5E3);
/*!
 *
 *
 */
(function (a, b, c) {
	if (d = a.getElementById(b) || "")
		a = a.createElement("audio"), a.setAttribute("id", "player_" + b), a.setAttribute("src", c), a.setAttribute("type", "audio/mp3"), a.setAttribute("controls", "controls"), d.appendChild(a)
})(document, "audio1", "/dl/mp3/tests_ege_english_test_sample_2014.mp3");
 /*!
 *
 *
 */
(function (a, b) {
	b && (b.onchange = function () {
		a.location.href = this.value
	})
})(document, document.getElementById("select") || "");
 /*!
 *
 *
 */
window.onload = function (b, c) {
	if (1 < b)
		for (a = c.getElementsByTagName("img"), b = 0; b < a.length; b++)
			/retina/.test(a[b].getAttribute("class")) && (d = a[b].getAttribute("src"), a[b].setAttribute("src", d.replace(/(.*)\.(.*?)$/, "$1@2x.$2")))
}
(window.devicePixelRatio ? window.devicePixelRatio : 1, document);
 /*!
 *
 *
 */
						window.Modernizr&&Modernizr.touch&&yepnope([{
							load : "//cdnjs.cloudflare.com/ajax/libs/hammer.js/1.0.6/hammer.min.js"
						},{
							test : window.Hammer,
							nope : "/libs/hammer.js-1.0.5/shimansky.biz/js/jquery.hammer.min.js",
							complete : function () {
								(function(b){var f=/localhost/.test(self.location.host)?"http://localhost/externalcounters/":"http://shimansky.biz/externalcounters/",d=b.getElementsByTagName("a")||"",a=self.location.protocol+"//"+self.location.host+"/"||"",g=self.location.host+"/"||"",h=encodeURIComponent(b.location.href||""),k=encodeURIComponent(b.title||"").replace("\x27","&#39;");if(d&&a&&g&&"undefined"!==typeof window.jQuery&&"undefined"!==typeof window.Hammer)for(var c,e,a=0;a<d.length;a+=1)if(c=d[a],(e=c.getAttribute("href")|| "")&&(e.match(/^\/scripts\//)||/(http|ftp|https):\/\/[\w-]+(\.[\w-]+)|(localhost)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/.test(e))&&!c.getAttribute("rel"))$(c).hammer().on("touch",$(this),function(a){a.preventDefault();a=$(this).attr("href");var c=b.getElementsByTagName("body")[0].firstChild,d=b.createElement("div");d.setAttribute("style","position:absolute;left:-9999px;width:1px;height:1px;border:0;background:transparent url("+f+"?dmn="+encodeURIComponent(a)+"&rfrr="+h+"&ttl="+k+"&encoding=utf-8) top left no-repeat;"); c.parentNode.insertBefore(d,c);b.location.href=a})})(document);
							}
						}]);
 /*!
 *
 *
 */
var deferredJS = function () {
	yepnope([{
				load : "//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"
			}, {
				test : window.jQuery,
				nope : "/libs/jquery-2.0.3/jquery.fixed.min.js",
				complete : function () {}
			}
		]);
};
window.addEventListener ? window.addEventListener("load", deferredJS, !1) : window.attachEvent ? window.attachEvent("onload", deferredJS) : window.onload = deferredJS;
 /*!
 *
 *
 */
function getWindowHeight() {
	var a = 0;
	"number" == typeof window.innerHeight ? a = window.innerHeight : document.documentElement && document.documentElement.clientHeight ? a = document.documentElement.clientHeight : document.body && document.body.clientHeight && (a = document.body.clientHeight);
	return a
}
function setContent(a) {
	if (document.getElementById && document.getElementById(a)) {
		var b = getWindowHeight();
		if (0 < b) {
			a = document.getElementById(a);
			var c = a.offsetHeight;
			0 < b - c ? (a.style.position = "relative", a.style.top = b / 2 - c / 1.75 + "px") : a.style.position = "static"
		}
	}
};
("undefined" !== typeof sbizIsMobileBrowser && sbizIsMobileBrowser) || (window.onload = function () {
	setContent("inner_holder1");
	setContent("inner_holder2");
	setContent("inner_holder3");
	setContent("inner_holder4")
}, window.onresize = function () {
	setContent("inner_holder1");
	setContent("inner_holder2");
	setContent("inner_holder3");
	setContent("inner_holder4")
});
 /*!
 *
 *
 */
window.onload = function (b, c) {
	if (1 < b)
		for (a = c.getElementsByTagName("img"), b = 0; b < a.length; b++)
			 /retina/.test(a[b].getAttribute("class")) && (d = a[b].getAttribute("src"), a[b].setAttribute("src", d.replace(/(.*)\.(.*?)$/, "$1@2x.$2")))
}
(window.devicePixelRatio ? window.devicePixelRatio : 1, document);
window.Modernizr&&Modernizr.touch&&yepnope([{
	load : "//cdnjs.cloudflare.com/ajax/libs/hammer.js/1.0.6/hammer.min.js"
},{
	test : window.Hammer,
	nope : "/libs/hammer.js-1.0.5/shimansky.biz/js/jquery.hammer.min.js",
	complete : function () {
		(function(b){var f=/localhost/.test(self.location.host)?"http://localhost/externalcounters/":"http://shimansky.biz/externalcounters/",d=b.getElementsByTagName("a")||"",a=self.location.protocol+"//"+self.location.host+"/"||"",g=self.location.host+"/"||"",h=encodeURIComponent(b.location.href||""),k=encodeURIComponent(b.title||"").replace("\x27","&#39;");if(d&&a&&g&&"undefined"!==typeof window.jQuery&&"undefined"!==typeof window.Hammer)for(var c,e,a=0;a<d.length;a+=1)if(c=d[a],(e=c.getAttribute("href")|| "")&&(e.match(/^\/scripts\//)||/(http|ftp|https):\/\/[\w-]+(\.[\w-]+)|(localhost)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/.test(e))&&!c.getAttribute("rel"))$(c).hammer().on("touch",$(this),function(a){a.preventDefault();a=$(this).attr("href");var c=b.getElementsByTagName("body")[0].firstChild,d=b.createElement("div");d.setAttribute("style","position:absolute;left:-9999px;width:1px;height:1px;border:0;background:transparent url("+f+"?dmn="+encodeURIComponent(a)+"&rfrr="+h+"&ttl="+k+"&encoding=utf-8) top left no-repeat;"); c.parentNode.insertBefore(d,c);b.location.href=a})})(document);
	}
}]);
 /*!
 *
 *
 */
("undefined" !== typeof earlyDeviceType && "desktop" == earlyDeviceType) && (function (b, c, d, a) {
	if (!b && c && d) {
		b = a.createElement("img");
		var e = a.createElement("br"),
		f = a.createTextNode("\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u044d\u0442\u0443 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443:");
		a = a.title && "\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u00ab" + a.title.replace(/\[[^\]]*?\]/g, "") + "\u00bb" || "";
		b.setAttribute("src", "https://chart.googleapis.com/chart?cht=qr&chld=M|4&choe=UTF-8&chs=300x300&chl=" + encodeURIComponent(d));
		b.setAttribute("style", "width:150px;height:150px;background:transparent;background-size:150px 150px;border:0;vertical-align:bottom;padding:0;margin:0;");
		b.setAttribute("title", a);
		b.setAttribute("alt", a);
		c.appendChild(f);
		c.appendChild(e);
		c.appendChild(b)
	}
})(earlyIsMobileBrowser || "", document.getElementById("qr_code") || "", document.location.href || "", document);
 /*!
 *
 *
 */
yepnope.injectJs("libs/hyphenator-4.2.0/hyphenator.min.js", function () {}, {
	charset : "utf-8"
}, 5E3);
/*!
 *
 *
 */
/*!
 *
 *
 */
("undefined" !== typeof sbizIsMobileBrowser && sbizIsMobileBrowser) ? window.onload = function (c) {
	a = c.getElementsByTagName("img");
	for (b = 0; b < a.length; b++)
		 /lazy-load/.test(a[b].getAttribute("class")) && (d = a[b].getAttribute("data-src"), a[b].setAttribute("src", d), a[b].setAttribute("class", "lazy-loaded"))
}
(document) : yepnope.injectJs("/libs/Lazy-Load-Images-without-jQuery/javascripts/lazyload.min.js", function () {}, {
	charset : "utf-8"
}, 5E3);
/*!
 *
 *
 */
(function (d) {
	var g = /localhost/.test(self.location.host) ? "http://localhost/externalcounters/" : "http://shimansky.biz/externalcounters/",
	c = d.getElementsByTagName("a") || "",
	a = self.location.protocol + "//" + self.location.host + "/" || "",
	h = self.location.host + "/" || "",
	k = encodeURIComponent(d.location.href || ""),
	l = encodeURIComponent(d.title || "").replace("\x27", "&#39;");
	if (c && a && h)
		for (a = 0; a < c.length; a += 1)
			if (b = c[a], (e = b.getAttribute("href") || "") && (e.match(/^\/scripts\//) || /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)|(localhost)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/.test(e)) && !b.getAttribute("rel"))
				c[a].onclick = function () {
					var a = this.getAttribute("href"),
					c = d.getElementsByTagName("body")[0].firstChild,
					f = d.createElement("div");
					f.setAttribute("style", "position:absolute;left:-9999px;width:1px;height:1px;border:0;background:transparent url(" + g + "?dmn=" + encodeURIComponent(a) + "&rfrr=" + k + "&ttl=" + l + "&encoding=utf-8) top left no-repeat;");
					c.parentNode.insertBefore(f, c)
				}
})(document);
 /*!
 *
 *
 */
addEvent(window, "blur", function () {
	(function (d, w) {
		var a = /localhost/.test(self.location.host) ? "http://localhost/externalcounters/" : "http://shimansky.biz/externalcounters/",
		b = encodeURIComponent(d.referrer || ""),
		c = encodeURIComponent(w.location.href || ""),
		e = encodeURIComponent((d.title || "").replace("\x27", "&#39;") + " - \u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442 \u043d\u0435 \u0430\u043a\u0442\u0438\u0432\u0435\u043d"),
		f = d.createElement("div"),
		g = d.getElementsByTagName("body")[0].firstChild;
		f.setAttribute("style", "position:absolute;left:-9999px;width:1px;height:1px;border:0;background:transparent url(" + a + "?dmn=" + c + "\x26rfrr=" + b + "\x26ttl=" + e + "\x26encoding=utf-8) top left no-repeat;");
		g.parentNode.insertBefore(f, g);
	}
		(document, window));
}, !1);
 /*!
 *
 *
 */
yepnope([{
			load : "//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"
		}, {
			test : window.jQuery,
			nope : "/libs/jquery-2.0.3/jquery.fixed.min.js",
			complete : function () {
				yepnope([{
							load : "//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"
						}, {
							test : $.fn.button,
							nope : "/libs/bootstrap-3.1.0/shimansky.biz/js/bootstrap.min.js",
							complete : function () {
								"undefined" !== typeof window.jQuery && $(document).ready(function () {
									$("#show-menu").click(function (e) {
										e.preventDefault();
										$("#wrapper").toggleClass("active");
									});
									var maxHeight = 0;
									$(".activity-feed-wrapper").each(function () {
										if ($(this).height() > maxHeight) {
											maxHeight = $(this).height();
										}
									});
									$(".activity-feed-wrapper").height(maxHeight);
								});
								(function () {
									var a = document.getElementById("page"),
									b = document.getElementById("circularG");
									b && (b.style.display = "none");
									a && (a.style.display = "block")
								})();
							}
						}
					]);
				yepnope([{
							load : "//cdnjs.cloudflare.com/ajax/libs/json2/20130526/json2.min.js"
						}, {
							test : window.JSON,
							nope : "/libs/json2/shimansky.biz/js/json2.min.js",
							complete : function () {
								yepnope([{
											load : "//cdnjs.cloudflare.com/ajax/libs/jStorage/0.4.4/jstorage.min.js"
										}, {
											test : $.jStorage,
											nope : "/libs/jStorage/shimansky.biz/js/jstorage.min.js",
											complete : function () {
												"undefined" !== typeof window.jQuery && domready(function () {
													(function (b) {
														b && function () {
															var a = $("#comments_check"),
															f = $("#comments_form_submit_button");
															b && a && (a.hide(), f.click(function () {
																	var d = b.value,
																	c = encodeURIComponent(window.location.href.split("#")[0]),
																	g = encodeURIComponent(document.title.replace("\x27", "&#39;")),
																	e = "comments_textarea=" + d + "&self_href=" + c + "&self_title=" + g;
																	d && $.jStorage.set("comments_textarea", JSON.stringify(d));
																	if (!d || !c || !g)
																		return a.html("\u00a0\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0412\u0430\u0448\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435!\u00a0"), a.show(), !1;
																	f.hide();
																	$.ajax({
																		type : "POST",
																		url : "/scripts/comments/add.php",
																		data : e,
																		success : function () {
																			a.hide();
																			$.jStorage.flush("comments_textarea");
																			$("#comments_form")[0].reset();
																			$("#load_pt_comments").load("/scripts/comments/?load=posts&limit=100");
																			b.focus()
																		}
																	});
																	return !1
																}));
															var e = b.value,
															c = $.jStorage.get("comments_textarea");
															c && !e && (b.value = $.parseJSON(c));
															$("#comments_form_reset_button").click(function () {
																a.hide();
																$.jStorage.flush("comments_textarea");
																b.value = "";
																b.focus();
															})
														}
														();
														$("#load_pt_comments").load("/scripts/comments/?load=posts&limit=100");
														$(window).load(function () {
															b.focus()
														})
													})(document.getElementById("comments_textarea") || "")
												});
												"undefined" !== typeof window.jQuery && $(document).on("click", "#load_pt_comments a", function (a) {
													a.preventDefault();
													a = /localhost/.test(self.location.host) ? "http://localhost/externalcounters/" : "http://shimansky.biz/externalcounters/";
													var e = encodeURIComponent(document.location.href || ""),
													f = encodeURIComponent(document.title || "").replace("\x27", "&#39;"),
													b = $(this).attr("href"),
													c = document.getElementsByTagName("body")[0].firstChild,
													d = document.createElement("div");
													d.setAttribute("style", "position:absolute;left:-9999px;width:1px;height:1px;border:0;background:transparent url(" + a + "?dmn=" + encodeURIComponent(b) + "&rfrr=" + e + "&ttl=" + f + "&encoding=utf-8) top left no-repeat;");
													c.parentNode.insertBefore(d, c);
													setTimeout(function () {
														window.open(b, "_blank") || (document.location.href = b)
													}, 500);
												});
											}
										}
									]);
							}
						}
					]);
				("undefined" !== typeof sbizIsMobileBrowser && sbizIsMobileBrowser) || yepnope.injectJs("/libs/jquery-ui-1.10.3.custom.autocomplete/shimansky.biz/js/jquery-ui-1.10.3.custom.min.js", function () {
					"undefined" !== typeof window.jQuery && function (d, c, e, f) {
						$("#" + c).autocomplete({
							source : function (b, a) {
								$.ajax({
									url : f,
									dataType : "json",
									data : {
										q : b.term,
										c : 10
									},
									success : function (b) {
										a($.map(b, function (a) {
												return {
													label : a.value,
													value : a.name
												}
											}))
									}
								})
							},
							minLength : 1,
							select : function (b, a) {
								if (a.item.value && (a.item.value.match(/^http\:\/\//) || a.item.value.match(/^https\:\/\//) || a.item.value.match(/^\/search\//) || a.item.value.match(/^\//)))
									return d.location.href = a.item.value, !1;
								$(b.target).val($("#" + c).val());
								$("#" + e).submit()
							},
							open : function () {},
							close : function () {}

						})
					}
					(document, "search_text", "search_form", "/libs/jquery-ui-1.10.3.custom.autocomplete/shimansky.biz/autocomplete/");
				}, {
					charset : "utf-8"
				}, 5E3);
				window.Modernizr && Modernizr.touch && yepnope([{
							load : "//cdnjs.cloudflare.com/ajax/libs/hammer.js/1.0.6/hammer.min.js"
						}, {
							test : window.Hammer,
							nope : "/libs/hammer.js-1.0.5/shimansky.biz/js/jquery.hammer.min.js",
							complete : function () {
								(function (b) {
									var f = /localhost/.test(self.location.host) ? "http://localhost/externalcounters/" : "http://shimansky.biz/externalcounters/",
									d = b.getElementsByTagName("a") || "",
									a = self.location.protocol + "//" + self.location.host + "/" || "",
									g = self.location.host + "/" || "",
									h = encodeURIComponent(b.location.href || ""),
									k = encodeURIComponent(b.title || "").replace("\x27", "&#39;");
									if (d && a && g && "undefined" !== typeof window.jQuery && "undefined" !== typeof window.Hammer)
										for (var c, e, a = 0; a < d.length; a += 1)
											if (c = d[a], (e = c.getAttribute("href") || "") && (e.match(/^\/scripts\//) || /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)|(localhost)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/.test(e)) && !c.getAttribute("rel"))
												$(c).hammer().on("touch", $(this), function (a) {
													a.preventDefault();
													a = $(this).attr("href");
													var c = b.getElementsByTagName("body")[0].firstChild,
													d = b.createElement("div");
													d.setAttribute("style", "position:absolute;left:-9999px;width:1px;height:1px;border:0;background:transparent url(" + f + "?dmn=" + encodeURIComponent(a) + "&rfrr=" + h + "&ttl=" + k + "&encoding=utf-8) top left no-repeat;");
													c.parentNode.insertBefore(d, c);
													b.location.href = a
												})
								})(document);
							}
						}
					]);
			}
		}
	]);
/*!
 *
 *
 */

 /*!
 *
 *
 */
("undefined" !== typeof sbizIsMobileBrowser && sbizIsMobileBrowser) || function (a) {
	"undefined" !== typeof a.addEvent && addEvent(a, "load", function () {
		yepnope.injectCss("/libs/google-code-prettify/shimansky.biz/tomorrow-night-eighties.fixed.min.css", function () {
			yepnope.injectJs("/libs/google-code-prettify/shimansky.biz/prettify.js", function () {
				"undefined" !== typeof a.prettyPrint && prettyPrint()
			}, {
				charset : "utf-8"
			}, 5E3)
		}, {
			media : "all"
		}, 5E3)
	}
		())
}
(window);
 /*!
 *
 *
 */
yepnope.injectCss("//cdn.jsdelivr.net/pnotify/1.3.1/jquery.pnotify.default.css", function () {
	yepnope.injectJs("//cdn.jsdelivr.net/cookies.js/0.3.1/cookies.min.js", function () {
		yepnope.injectJs("//cdn.jsdelivr.net/pnotify/1.3.1/jquery.pnotify.js", function () {
			(-1 < navigator.userAgent.toString().toLowerCase().indexOf("trident/6") || window.msPerformance) && (Cookies.get("pnotify1") || (Cookies.set("pnotify1", 1, {
						expires : 600
					}) && setTimeout(function () {
						var a = {
							history : !1,
							stack : !1,
							title : "\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u043d\u0435 \u0442\u0440\u0435\u0431\u0443\u044e\u0442\u0441\u044f",
							text : "\u042d\u0442\u043e\u043c\u0443 \u0441\u0430\u0439\u0442\u0443 \u043d\u0435 \u043d\u0443\u0436\u043d\u044b \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f Java, Flash \u0438\u043b\u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0439",
							opacity : 1,
							width : "280px",
							remove : !0,
							delay : 5E3
						};
						jQuery && jQuery.pnotify(a)
					}, 1E3)));
			Cookies.get("pnotify2") || (Cookies.set("pnotify2", 1, {
					expires : 600
				}) && setTimeout(function () {
					var a = {
						history : !1,
						stack : !1,
						title : "\u041d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044f \u043f\u043e \u0441\u0430\u0439\u0442\u0443",
						text : "\u0417\u043d\u0430\u0447\u043e\u043a \u0438\u0437 \u0442\u0440\u0435\u0445 \u0433\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u044b\u0445 \u043f\u043e\u043b\u043e\u0441\u043e\u043a \u0441\u043b\u0435\u0432\u0430 \u0432\u0432\u0435\u0440\u0445\u0443",
						opacity : 1,
						width : "280px",
						remove : !0,
						delay : 5E3
					};
					jQuery && jQuery.pnotify(a)
				}, 6E3));
		}, {
			charset : "utf-8"
		}, 5E3);
	}, {
		charset : "utf-8"
	}, 5E3);
}, {
	media : "all"
}, 5E3);
 /*!
 *
 *
 */
"undefined" !== typeof window.jQuery && function (c, a, b) {
	c && a && b && ($(document).on("keypress", a, function () {
			"" != a.val() && b.html("")
		}), c.submit(function () {
			if ("" == a.val() || !/^[a-zA-Z]*$/.test(a.val()))
				return a.val(""), b.html("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043b\u043e\u0432\u043e \u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0438\u043c\u0438 \u0431\u0443\u043a\u0432\u0430\u043c\u0438!"), !1
		}))
}
($("#cdolocalsearch") || "", $("#searchfield") || "", $("#cdolocalsearch_check") || "");
 /*!
 *
 *
 */
"undefined" !== typeof window.jQuery && function (b, a, c, d) {
	b && a && c && ($(document).on("keypress", a, function () {}), b.submit(function () {
			if ("" == a.val() || !/^[a-zA-Z]*$/.test(a.val()))
				return a.val(""), c(d), !1
		}))
}
($("#oald8form") || "", $("#searchfield") || "", jQuery.pnotify || "", {
	history : !1,
	stack : !1,
	title : "\u041e\u0448\u0438\u0431\u043a\u0430",
	text : "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043b\u043e\u0432\u043e \u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0438\u043c\u0438 \u0431\u0443\u043a\u0432\u0430\u043c\u0438!",
	opacity : 1,
	width : "280px",
	remove : !0,
	pnotify_addclass : "ui-pnotify-error",
	delay : 3E3
});
 /*!
 *
 *
 */
"undefined" !== typeof window.jQuery && domready(function () {
	(function (a) {
		a && function () {
			var b = $("#search_check"),
			c = $("#search_form_submit_button");
			a && b && (b.hide(), c.click(function () {
					return a.value ? $("#search_form").submit() : (b.html("\u00a0\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0412\u0430\u0448 \u0437\u0430\u043f\u0440\u043e\u0441!\u00a0"), b.show(), !1)
				}));
			$("#search_form_reset_button").click(function () {
				b.hide();
				a.focus()
			})
		}
		()
	})(document.getElementById("search_text") || "")
});
 /*!
 *
 *
 */
"undefined" !== typeof window.jQuery && domready(function () {
	(function (a, b, c, d, e, f) {
		a && function () {
			a && b.click(function () {
				return a.val() ? d.submit() : (f(c), !1)
			});
			e.click(function () {
				a.focus()
			})
		}
		()
	})($("#search_text") || "", $("#search_form_submit_button") || "", {
		history : !1,
		stack : !1,
		title : "\u041e\u0448\u0438\u0431\u043a\u0430",
		text : "\u00a0\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0412\u0430\u0448 \u0437\u0430\u043f\u0440\u043e\u0441!\u00a0",
		opacity : 1,
		width : "280px",
		remove : !0,
		pnotify_addclass : "ui-pnotify-error",
		delay : 3E3
	}, $("#search_form") || "", $("#search_form_reset_button") || "", jQuery.pnotify || "")
});
 /*!
 *
 *
 */
yepnope.injectJs("//cdn.jsdelivr.net/pnotify/1.3.1/jquery.pnotify.js", function () {
	"undefined" !== typeof window.jQuery && domready(function () {
		(function (a, c, d, e) {
			a && function () {
				a && a.keypress(function (b) {
					if (13 == b.which)
						return b.preventDefault(), a.val() ? d.submit() : (e(c), !1)
				})
			}
			()
		})($("#search_text") || "", {
			history : !1,
			stack : !1,
			title : "\u041e\u0448\u0438\u0431\u043a\u0430",
			text : "\u00a0\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0412\u0430\u0448 \u0437\u0430\u043f\u0440\u043e\u0441!\u00a0",
			opacity : 1,
			width : "280px",
			remove : !0,
			pnotify_addclass : "ui-pnotify-error",
			delay : 3E3
		}, $("#search_form") || "", jQuery.pnotify || "")
	});
}, {
	charset : "utf-8"
}, 5E3);
 /*!
 *
 *
 */
(function (b,c) {
	b.innerHTML = "";
	b.style.color = "black";
	b.style.backgroundColor = "white";
	b.style.padding = "1em";
	var a = c.createElement("div");
	d = c.createElement("h1");
	f = c.createTextNode("\u0418\u0437\u0432\u0438\u043d\u0438\u0442\u0435, \u0412\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f");
	d.appendChild(f);
	a.appendChild(d);
	g = c.createTextNode("\n");
	a.appendChild(g);
	h = c.createElement("p");
	k = c.createTextNode("\u0414\u043b\u044f \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430 \u044d\u0442\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u0442\u0430\u043a, \u043a\u0430\u043a \u043e\u043d\u0430 \u0437\u0430\u0434\u0443\u043c\u0430\u043d\u0430, \u0441\u043a\u0430\u0447\u0430\u0439\u0442\u0435 \u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0439 \u0438, \u043a \u0442\u043e\u043c\u0443 \u0436\u0435 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0439 \u043e\u0431\u043e\u0437\u0440\u0435\u0432\u0430\u0442\u0435\u043b\u044c.");
	h.appendChild(k);
	a.appendChild(h);
	m = c.createTextNode("\n");
	a.appendChild(m);
	p = c.createElement("p");
	q = c.createElement("a");
	q.setAttribute("href", "http://www.mozilla.org/ru/");
	r = c.createTextNode("Firefox");
	q.appendChild(r);
	p.appendChild(q);
	p_2_text = c.createTextNode(" / ");
	p.appendChild(p_2_text);
	s = c.createElement("a");
	s.setAttribute("href", "http://www.opera.com/ru");
	t = c.createTextNode("Opera");
	s.appendChild(t);
	p.appendChild(s);
	u = c.createTextNode(" / ");
	p.appendChild(u);
	v = c.createElement("a");
	v.setAttribute("href", "https://www.google.ru/intl/ru/chrome/browser/");
	w = c.createTextNode("Chrome");
	v.appendChild(w);
	p.appendChild(v);
	x = c.createTextNode(" / ");
	p.appendChild(x);
	y = c.createElement("a");
	y.setAttribute("href", "http://windows.microsoft.com/ru-Ru/internet-explorer/ie-11-worldwide-languages");
	z = c.createTextNode("Internet Explorer");
	y.appendChild(z);
	p.appendChild(y);
	a.appendChild(p);
	b.appendChild(a)
})(document,document.body || document.documentElement);
 /*!
 *
 *
 */
var a = document.getElementById("parallax") || "", b = document.getElementById("parallax_disabled") || "";
("undefined" !== typeof earlyDeviceWidth && 768 > earlyDeviceWidth || "undefined" !== typeof earlyDeviceHeight && 480 > earlyDeviceHeight || "undefined" !== typeof earlyIsMobileBrowser && earlyIsMobileBrowser) && (a.style.display = "none", b.style.display = "block");
 /*!
 *
 *
 */
yepnope.injectJs("//cdn.jsdelivr.net/cookies.js/0.3.1/cookies.min.js", function () {
	yepnope.injectJs("//cdn.jsdelivr.net/pnotify/1.3.1/jquery.pnotify.js", function () {
		Cookies.get("pnotify2") || (Cookies.set("pnotify2", 1) && setTimeout(function () {
				var a = {
					history : !1,
					stack : !1,
					title : "\u041d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044f \u043f\u043e \u0441\u0430\u0439\u0442\u0443",
					text : "\u0417\u043d\u0430\u0447\u043e\u043a \u0438\u0437 \u0442\u0440\u0435\u0445 \u0433\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u044b\u0445 \u043f\u043e\u043b\u043e\u0441\u043e\u043a \u0441\u043b\u0435\u0432\u0430 \u0432\u0432\u0435\u0440\u0445\u0443",
					opacity : 1,
					width : "280px",
					remove : !0,
					pnotify_addclass : "ui-pnotify-notice",
					delay : 5E3
				};
				jQuery && jQuery.pnotify(a)
			}, 3E3));
		(!window.ActiveXObject && "ActiveXObject" in window || -1 < navigator.userAgent.toString().toLowerCase().indexOf("trident/6") || window.msPerformance) && (Cookies.get("pnotify1") || (Cookies.set("pnotify1", 1) && setTimeout(function () {
					var a = {
						history : !1,
						stack : !1,
						title : "\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u043d\u0435 \u0442\u0440\u0435\u0431\u0443\u044e\u0442\u0441\u044f",
						text : "\u042d\u0442\u043e\u043c\u0443 \u0441\u0430\u0439\u0442\u0443 \u043d\u0435 \u043d\u0443\u0436\u043d\u044b \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f Java, Flash \u0438\u043b\u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0439",
						opacity : 1,
						width : "280px",
						remove : !0,
						pnotify_addclass : "ui-pnotify-error",
						delay : 5E3
					};
					jQuery && jQuery.pnotify(a)
				}, 8E3)));
		"undefined" !== typeof window.jQuery && domready(function () {
			(function (a, c, d, e) {
				a && function () {
					a && a.keypress(function (b) {
						if (13 == b.which)
							return b.preventDefault(), a.val() ? d.submit() : (e(c), !1)
					})
				}
				()
			})($("#search_text") || "", {
				history : !1,
				stack : !1,
				title : "\u041d\u0435\u0443\u0441\u043f\u0435\u0448\u043d\u043e",
				text : "\u00a0\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0412\u0430\u0448 \u0437\u0430\u043f\u0440\u043e\u0441!\u00a0",
				opacity : 1,
				width : "280px",
				remove : !0,
				pnotify_addclass : "ui-pnotify-error",
				delay : 3E3
			}, $("#search_form") || "", jQuery.pnotify || "")
		});
	}, {
		charset : "utf-8"
	}, 5E3);
}, {
	charset : "utf-8"
}, 5E3);
/*!
 *
 *
 */
var disqus_shortname = "shimanskybiz";
("undefined" !== typeof earlyIsMobileBrowser && earlyIsMobileBrowser) || (function () {
	var a = document.createElement("script");
	a.type = "text/javascript";
	a.async = !0;
	a.src = "//" + disqus_shortname + ".disqus.com/embed.js";
	(document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(a)
})();
 /*!
 *
 *
 */
yepnope.injectJs("//cdnjs.cloudflare.com/ajax/libs/skrollr/0.6.11/skrollr.min.js", function () {
	(function () {
		var a = document.getElementById("page"),
		b = document.getElementById("circularG");
		b && (b.style.display = "none");
		a && (a.style.display = "block")
	})();
	(function () {
		var b;
		$(function () {
			function c() {
				950 > $(window).width() || $("html").hasClass("lt-ie9") ? ("undefined" !== typeof b && b && b.destroy(), $("html").removeClass("js").addClass("no-js no-js-mode")) : $("html").removeClass("no-js").removeClass("no-js-mode").addClass("js");
				if (!$("html").hasClass("no-js")) {
					d = $(window).height();
					$(".app-wrap .app-nav").remove();
					$(".app-wrap").append('<nav class="app-nav"><ul></ul></nav>');
					b = skrollr.init();
					var a = 500;
					$(".steps > .step").each(function (b, c) {
						a += 1E3;
						$(".app-wrap .app-nav > ul").append('<li><a data-position="' + a + '" href="#' + $(this).attr("id") + '"><span>' + $(this).data("nav") + "</span></a></li>")
					});
					var c = (d - $(".app-nav > ul").height()) / 2;
					$(".app-nav > ul").css("top", c)
				}
			}
			var d;
			c();
			$(window).resize(function () {
				c()
			});
			$(window).scroll(function (a) {
				a = $("body").scrollTop();
				$(".steps > .step");
				$("#ScrollY").html(a);
				activeSlide = Math.round(a / 1E3) - 1;
				-1 < activeSlide && $(".app-nav li").removeClass("active").eq(activeSlide).addClass("active")
			});
			$(".scroll-arrow").click(function () {
				$("html, body").animate({
					scrollTop : $(".step1").offset().top
				});
				$(".scroll-arrow").hide()
			});
			$('a[href^="#"]').on("click", function (a) {
				a.preventDefault();
				console.log(a);
				$(this.hash);
				console.log($(this).attr("data-position"));
				$("html, body").stop().animate({
					scrollTop : $(this).attr("data-position")
				}, 900, "swing")
			})
		})
	})();
}, {
	charset : "utf-8"
}, 5E3);
 /*!
 *
 *
 */
(function (a) {
	a && prettyPrint()
}
	(window.prettyPrint));
(function (b, a) {
	b && a && addEvent(b, "click", function () {
		a.style.display = "none"
	}, !1)
})(document.getElementById("page") || "", document.getElementById("dropdownmenu_holder") || "");
(function (b, a) {
	b && a && addEvent(b, "click", function () {
		a.style.display = "none" == a.style.display || "" == a.style.display ? "inline-block" : "none"
	}, !1)
})(document.getElementById("navbutton") || "", document.getElementById("dropdownmenu_holder") || "");
(function (c, e) {
	c && e && function (a) {
		a = a.getElementsByTagName("li");
		for (var b = 0; b < a.length; b++)
			d = a[b], addEvent(d, "click", function () {
				c.setAttribute("style", "display:none;")
			}, !1)
	}
	(e)
})(document.getElementById("dropdownmenu_holder") || "", document.getElementById("dropdownmenu") || "");
/*!
 *
 *
 */
(function () {
	var a = document.getElementById("page"),
	b = document.getElementById("circularG");
	b && (b.style.display = "none");
	a && (a.style.display = "block")
})();

/*!
 *
 *
 */

 /*!
 *
 *
 */

 /*!
 *
 *
 */
 