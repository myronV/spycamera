if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
+function (t) {
	"use strict";
	var e = jQuery.fn.jquery.split(" ")[0].split(".");
	if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 2) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")
}(), function (t) {
	"use strict";

	function e() {
		var t = document.createElement("bootstrap"), e = {
			WebkitTransition: "webkitTransitionEnd",
			MozTransition: "transitionend",
			OTransition: "oTransitionEnd otransitionend",
			transition: "transitionend"
		};
		for (var i in e) if (void 0 !== t.style[i]) return {end: e[i]};
		return !1
	}

	t.fn.emulateTransitionEnd = function (e) {
		var i = !1, o = this;
		t(this).one("bsTransitionEnd", function () {
			i = !0
		});
		return setTimeout(function () {
			i || t(o).trigger(t.support.transition.end)
		}, e), this
	}, t(function () {
		t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
			bindType: t.support.transition.end,
			delegateType: t.support.transition.end,
			handle: function (e) {
				if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
			}
		})
	})
}(jQuery), function (t) {
	"use strict";
	var e = '[data-dismiss="alert"]', i = function (i) {
		t(i).on("click", e, this.close)
	};
	i.VERSION = "3.3.5", i.TRANSITION_DURATION = 150, i.prototype.close = function (e) {
		function o() {
			a.detach().trigger("closed.bs.alert").remove()
		}

		var n = t(this), s = n.attr("data-target");
		s || (s = (s = n.attr("href")) && s.replace(/.*(?=#[^\s]*$)/, ""));
		var a = t(s);
		e && e.preventDefault(), a.length || (a = n.closest(".alert")), a.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (a.removeClass("in"), t.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", o).emulateTransitionEnd(i.TRANSITION_DURATION) : o())
	};
	var o = t.fn.alert;
	t.fn.alert = function (e) {
		return this.each(function () {
			var o = t(this), n = o.data("bs.alert");
			n || o.data("bs.alert", n = new i(this)), "string" == typeof e && n[e].call(o)
		})
	}, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function () {
		return t.fn.alert = o, this
	}, t(document).on("click.bs.alert.data-api", e, i.prototype.close)
}(jQuery), function (t) {
	"use strict";

	function e(e) {
		return this.each(function () {
			var o = t(this), n = o.data("bs.button"), s = "object" == typeof e && e;
			n || o.data("bs.button", n = new i(this, s)), "toggle" == e ? n.toggle() : e && n.setState(e)
		})
	}

	var i = function (e, o) {
		this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, o), this.isLoading = !1
	};
	i.VERSION = "3.3.5", i.DEFAULTS = {loadingText: "loading..."}, i.prototype.setState = function (e) {
		var i = "disabled", o = this.$element, n = o.is("input") ? "val" : "html", s = o.data();
		e += "Text", null == s.resetText && o.data("resetText", o[n]()), setTimeout(t.proxy(function () {
			o[n](null == s[e] ? this.options[e] : s[e]), "loadingText" == e ? (this.isLoading = !0, o.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = !1, o.removeClass(i).removeAttr(i))
		}, this), 0)
	}, i.prototype.toggle = function () {
		var t = !0, e = this.$element.closest('[data-toggle="buttons"]');
		if (e.length) {
			var i = this.$element.find("input");
			"radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), t && i.trigger("change")
		} else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
	};
	var o = t.fn.button;
	t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function () {
		return t.fn.button = o, this
	}, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (i) {
		var o = t(i.target);
		o.hasClass("btn") || (o = o.closest(".btn")), e.call(o, "toggle"), t(i.target).is('input[type="radio"]') || t(i.target).is('input[type="checkbox"]') || i.preventDefault()
	}).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (e) {
		t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
	})
}(jQuery), function (t) {
	"use strict";

	function e(e) {
		return this.each(function () {
			var o = t(this), n = o.data("bs.carousel"),
				s = t.extend({}, i.DEFAULTS, o.data(), "object" == typeof e && e),
				a = "string" == typeof e ? e : s.slide;
			n || o.data("bs.carousel", n = new i(this, s)), "number" == typeof e ? n.to(e) : a ? n[a]() : s.interval && n.pause().cycle()
		})
	}

	var i = function (e, i) {
		this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
	};
	i.VERSION = "3.3.5", i.TRANSITION_DURATION = 600, i.DEFAULTS = {
		interval: 5e3,
		pause: "hover",
		wrap: !0,
		keyboard: !0
	}, i.prototype.keydown = function (t) {
		if (!/input|textarea/i.test(t.target.tagName)) {
			switch (t.which) {
				case 37:
					this.prev();
					break;
				case 39:
					this.next();
					break;
				default:
					return
			}
			t.preventDefault()
		}
	}, i.prototype.cycle = function (e) {
		return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
	}, i.prototype.getItemIndex = function (t) {
		return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
	}, i.prototype.getItemForDirection = function (t, e) {
		var i = this.getItemIndex(e);
		if (("prev" == t && 0 === i || "next" == t && i == this.$items.length - 1) && !this.options.wrap) return e;
		var o = (i + ("prev" == t ? -1 : 1)) % this.$items.length;
		return this.$items.eq(o)
	}, i.prototype.to = function (t) {
		var e = this, i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
		if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function () {
			e.to(t)
		}) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
	}, i.prototype.pause = function (e) {
		return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
	}, i.prototype.next = function () {
		if (!this.sliding) return this.slide("next")
	}, i.prototype.prev = function () {
		if (!this.sliding) return this.slide("prev")
	}, i.prototype.slide = function (e, o) {
		var n = this.$element.find(".item.active"), s = o || this.getItemForDirection(e, n), a = this.interval,
			r = "next" == e ? "left" : "right", l = this;
		if (s.hasClass("active")) return this.sliding = !1;
		var h = s[0], d = t.Event("slide.bs.carousel", {relatedTarget: h, direction: r});
		if (this.$element.trigger(d), !d.isDefaultPrevented()) {
			if (this.sliding = !0, a && this.pause(), this.$indicators.length) {
				this.$indicators.find(".active").removeClass("active");
				var p = t(this.$indicators.children()[this.getItemIndex(s)]);
				p && p.addClass("active")
			}
			var c = t.Event("slid.bs.carousel", {relatedTarget: h, direction: r});
			return t.support.transition && this.$element.hasClass("slide") ? (s.addClass(e), s[0].offsetWidth, n.addClass(r), s.addClass(r), n.one("bsTransitionEnd", function () {
				s.removeClass([e, r].join(" ")).addClass("active"), n.removeClass(["active", r].join(" ")), l.sliding = !1, setTimeout(function () {
					l.$element.trigger(c)
				}, 0)
			}).emulateTransitionEnd(i.TRANSITION_DURATION)) : (n.removeClass("active"), s.addClass("active"), this.sliding = !1, this.$element.trigger(c)), a && this.cycle(), this
		}
	};
	var o = t.fn.carousel;
	t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function () {
		return t.fn.carousel = o, this
	};
	var n = function (i) {
		var o, n = t(this), s = t(n.attr("data-target") || (o = n.attr("href")) && o.replace(/.*(?=#[^\s]+$)/, ""));
		if (s.hasClass("carousel")) {
			var a = t.extend({}, s.data(), n.data()), r = n.attr("data-slide-to");
			r && (a.interval = !1), e.call(s, a), r && s.data("bs.carousel").to(r), i.preventDefault()
		}
	};
	t(document).on("click.bs.carousel.data-api", "[data-slide]", n).on("click.bs.carousel.data-api", "[data-slide-to]", n), t(window).on("load", function () {
		t('[data-ride="carousel"]').each(function () {
			var i = t(this);
			e.call(i, i.data())
		})
	})
}(jQuery), function (t) {
	"use strict";

	function e(e) {
		var i, o = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
		return t(o)
	}

	function i(e) {
		return this.each(function () {
			var i = t(this), n = i.data("bs.collapse"),
				s = t.extend({}, o.DEFAULTS, i.data(), "object" == typeof e && e);
			!n && s.toggle && /show|hide/.test(e) && (s.toggle = !1), n || i.data("bs.collapse", n = new o(this, s)), "string" == typeof e && n[e]()
		})
	}

	var o = function (e, i) {
		this.$element = t(e), this.options = t.extend({}, o.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
	};
	o.VERSION = "3.3.5", o.TRANSITION_DURATION = 350, o.DEFAULTS = {toggle: !0}, o.prototype.dimension = function () {
		return this.$element.hasClass("width") ? "width" : "height"
	}, o.prototype.show = function () {
		if (!this.transitioning && !this.$element.hasClass("in")) {
			var e, n = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
			if (!(n && n.length && (e = n.data("bs.collapse")) && e.transitioning)) {
				var s = t.Event("show.bs.collapse");
				if (this.$element.trigger(s), !s.isDefaultPrevented()) {
					n && n.length && (i.call(n, "hide"), e || n.data("bs.collapse", null));
					var a = this.dimension();
					this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
					var r = function () {
						this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
					};
					if (!t.support.transition) return r.call(this);
					var l = t.camelCase(["scroll", a].join("-"));
					this.$element.one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(o.TRANSITION_DURATION)[a](this.$element[0][l])
				}
			}
		}
	}, o.prototype.hide = function () {
		if (!this.transitioning && this.$element.hasClass("in")) {
			var e = t.Event("hide.bs.collapse");
			if (this.$element.trigger(e), !e.isDefaultPrevented()) {
				var i = this.dimension();
				this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
				var n = function () {
					this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
				};
				if (!t.support.transition) return n.call(this);
				this.$element[i](0).one("bsTransitionEnd", t.proxy(n, this)).emulateTransitionEnd(o.TRANSITION_DURATION)
			}
		}
	}, o.prototype.toggle = function () {
		this[this.$element.hasClass("in") ? "hide" : "show"]()
	}, o.prototype.getParent = function () {
		return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function (i, o) {
			var n = t(o);
			this.addAriaAndCollapsedClass(e(n), n)
		}, this)).end()
	}, o.prototype.addAriaAndCollapsedClass = function (t, e) {
		var i = t.hasClass("in");
		t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
	};
	var n = t.fn.collapse;
	t.fn.collapse = i, t.fn.collapse.Constructor = o, t.fn.collapse.noConflict = function () {
		return t.fn.collapse = n, this
	}, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (o) {
		var n = t(this);
		n.attr("data-target") || o.preventDefault();
		var s = e(n), a = s.data("bs.collapse") ? "toggle" : n.data();
		i.call(s, a)
	})
}(jQuery), function (t) {
	"use strict";

	function e(e) {
		var i = e.attr("data-target");
		i || (i = (i = e.attr("href")) && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
		var o = i && t(i);
		return o && o.length ? o : e.parent()
	}

	function i(i) {
		i && 3 === i.which || (t(o).remove(), t(n).each(function () {
			var o = t(this), n = e(o), s = {relatedTarget: this};
			n.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(n[0], i.target) || (n.trigger(i = t.Event("hide.bs.dropdown", s)), i.isDefaultPrevented() || (o.attr("aria-expanded", "false"), n.removeClass("open").trigger(t.Event("hidden.bs.dropdown", s)))))
		}))
	}

	var o = ".dropdown-backdrop", n = '[data-toggle="dropdown"]', s = function (e) {
		t(e).on("click.bs.dropdown", this.toggle)
	};
	s.VERSION = "3.3.5", s.prototype.toggle = function (o) {
		var n = t(this);
		if (!n.is(".disabled, :disabled")) {
			var s = e(n), a = s.hasClass("open");
			if (i(), !a) {
				"ontouchstart" in document.documentElement && !s.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", i);
				var r = {relatedTarget: this};
				if (s.trigger(o = t.Event("show.bs.dropdown", r)), o.isDefaultPrevented()) return;
				n.trigger("focus").attr("aria-expanded", "true"), s.toggleClass("open").trigger(t.Event("shown.bs.dropdown", r))
			}
			return !1
		}
	}, s.prototype.keydown = function (i) {
		if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) {
			var o = t(this);
			if (i.preventDefault(), i.stopPropagation(), !o.is(".disabled, :disabled")) {
				var s = e(o), a = s.hasClass("open");
				if (!a && 27 != i.which || a && 27 == i.which) return 27 == i.which && s.find(n).trigger("focus"), o.trigger("click");
				var r = s.find(".dropdown-menu li:not(.disabled):visible a");
				if (r.length) {
					var l = r.index(i.target);
					38 == i.which && l > 0 && l--, 40 == i.which && l < r.length - 1 && l++, ~l || (l = 0), r.eq(l).trigger("focus")
				}
			}
		}
	};
	var a = t.fn.dropdown;
	t.fn.dropdown = function (e) {
		return this.each(function () {
			var i = t(this), o = i.data("bs.dropdown");
			o || i.data("bs.dropdown", o = new s(this)), "string" == typeof e && o[e].call(i)
		})
	}, t.fn.dropdown.Constructor = s, t.fn.dropdown.noConflict = function () {
		return t.fn.dropdown = a, this
	}, t(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
		t.stopPropagation()
	}).on("click.bs.dropdown.data-api", n, s.prototype.toggle).on("keydown.bs.dropdown.data-api", n, s.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", s.prototype.keydown)
}(jQuery), function (t) {
	"use strict";

	function e(e, o) {
		return this.each(function () {
			var n = t(this), s = n.data("bs.modal"),
				a = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
			s || n.data("bs.modal", s = new i(this, a)), "string" == typeof e ? s[e](o) : a.show && s.show(o)
		})
	}

	var i = function (e, i) {
		this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function () {
			this.$element.trigger("loaded.bs.modal")
		}, this))
	};
	i.VERSION = "3.3.5", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = {
		backdrop: !0,
		keyboard: !0,
		show: !0
	}, i.prototype.toggle = function (t) {
		return this.isShown ? this.hide() : this.show(t)
	}, i.prototype.show = function (e) {
		var o = this, n = t.Event("show.bs.modal", {relatedTarget: e});
		this.$element.trigger(n), this.isShown || n.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
			o.$element.one("mouseup.dismiss.bs.modal", function (e) {
				t(e.target).is(o.$element) && (o.ignoreBackdropClick = !0)
			})
		}), this.backdrop(function () {
			var n = t.support.transition && o.$element.hasClass("fade");
			o.$element.parent().length || o.$element.appendTo(o.$body), o.$element.show().scrollTop(0), o.adjustDialog(), n && o.$element[0].offsetWidth, o.$element.addClass("in"), o.enforceFocus();
			var s = t.Event("shown.bs.modal", {relatedTarget: e});
			n ? o.$dialog.one("bsTransitionEnd", function () {
				o.$element.trigger("focus").trigger(s)
			}).emulateTransitionEnd(i.TRANSITION_DURATION) : o.$element.trigger("focus").trigger(s)
		}))
	}, i.prototype.hide = function (e) {
		e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
	}, i.prototype.enforceFocus = function () {
		t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function (t) {
			this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
		}, this))
	}, i.prototype.escape = function () {
		this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function (t) {
			27 == t.which && this.hide()
		}, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
	}, i.prototype.resize = function () {
		this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
	}, i.prototype.hideModal = function () {
		var t = this;
		this.$element.hide(), this.backdrop(function () {
			t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
		})
	}, i.prototype.removeBackdrop = function () {
		this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
	}, i.prototype.backdrop = function (e) {
		var o = this, n = this.$element.hasClass("fade") ? "fade" : "";
		if (this.isShown && this.options.backdrop) {
			var s = t.support.transition && n;
			if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + n).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function (t) {
				this.ignoreBackdropClick ? this.ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())
			}, this)), s && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
			s ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
		} else if (!this.isShown && this.$backdrop) {
			this.$backdrop.removeClass("in");
			var a = function () {
				o.removeBackdrop(), e && e()
			};
			t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : a()
		} else e && e()
	}, i.prototype.handleUpdate = function () {
		this.adjustDialog()
	}, i.prototype.adjustDialog = function () {
		var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
		this.$element.css({
			paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
			paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
		})
	}, i.prototype.resetAdjustments = function () {
		this.$element.css({paddingLeft: "", paddingRight: ""})
	}, i.prototype.checkScrollbar = function () {
		var t = window.innerWidth;
		if (!t) {
			var e = document.documentElement.getBoundingClientRect();
			t = e.right - Math.abs(e.left)
		}
		this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
	}, i.prototype.setScrollbar = function () {
		var t = parseInt(this.$body.css("padding-right") || 0, 10);
		this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
	}, i.prototype.resetScrollbar = function () {
		this.$body.css("padding-right", this.originalBodyPad)
	}, i.prototype.measureScrollbar = function () {
		var t = document.createElement("div");
		t.className = "modal-scrollbar-measure", this.$body.append(t);
		var e = t.offsetWidth - t.clientWidth;
		return this.$body[0].removeChild(t), e
	};
	var o = t.fn.modal;
	t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function () {
		return t.fn.modal = o, this
	}, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (i) {
		var o = t(this), n = o.attr("href"), s = t(o.attr("data-target") || n && n.replace(/.*(?=#[^\s]+$)/, "")),
			a = s.data("bs.modal") ? "toggle" : t.extend({remote: !/#/.test(n) && n}, s.data(), o.data());
		o.is("a") && i.preventDefault(), s.one("show.bs.modal", function (t) {
			t.isDefaultPrevented() || s.one("hidden.bs.modal", function () {
				o.is(":visible") && o.trigger("focus")
			})
		}), e.call(s, a, this)
	})
}(jQuery), function (t) {
	"use strict";
	var e = function (t, e) {
		this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
	};
	e.VERSION = "3.3.5", e.TRANSITION_DURATION = 150, e.DEFAULTS = {
		animation: !0,
		placement: "top",
		selector: !1,
		template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
		trigger: "hover focus",
		title: "",
		delay: 0,
		html: !1,
		container: !1,
		viewport: {selector: "body", padding: 0}
	}, e.prototype.init = function (e, i, o) {
		if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(o), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
			click: !1,
			hover: !1,
			focus: !1
		}, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
		for (var n = this.options.trigger.split(" "), s = n.length; s--;) {
			var a = n[s];
			if ("click" == a) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this)); else if ("manual" != a) {
				var r = "hover" == a ? "mouseenter" : "focusin", l = "hover" == a ? "mouseleave" : "focusout";
				this.$element.on(r + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
			}
		}
		this.options.selector ? this._options = t.extend({}, this.options, {
			trigger: "manual",
			selector: ""
		}) : this.fixTitle()
	}, e.prototype.getDefaults = function () {
		return e.DEFAULTS
	}, e.prototype.getOptions = function (e) {
		return (e = t.extend({}, this.getDefaults(), this.$element.data(), e)).delay && "number" == typeof e.delay && (e.delay = {
			show: e.delay,
			hide: e.delay
		}), e
	}, e.prototype.getDelegateOptions = function () {
		var e = {}, i = this.getDefaults();
		return this._options && t.each(this._options, function (t, o) {
			i[t] != o && (e[t] = o)
		}), e
	}, e.prototype.enter = function (e) {
		var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
		if (i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusin" == e.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState) i.hoverState = "in"; else {
			if (clearTimeout(i.timeout), i.hoverState = "in", !i.options.delay || !i.options.delay.show) return i.show();
			i.timeout = setTimeout(function () {
				"in" == i.hoverState && i.show()
			}, i.options.delay.show)
		}
	}, e.prototype.isInStateTrue = function () {
		for (var t in this.inState) if (this.inState[t]) return !0;
		return !1
	}, e.prototype.leave = function (e) {
		var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
		if (i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusout" == e.type ? "focus" : "hover"] = !1), !i.isInStateTrue()) {
			if (clearTimeout(i.timeout), i.hoverState = "out", !i.options.delay || !i.options.delay.hide) return i.hide();
			i.timeout = setTimeout(function () {
				"out" == i.hoverState && i.hide()
			}, i.options.delay.hide)
		}
	}, e.prototype.show = function () {
		var i = t.Event("show.bs." + this.type);
		if (this.hasContent() && this.enabled) {
			this.$element.trigger(i);
			var o = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
			if (i.isDefaultPrevented() || !o) return;
			var n = this, s = this.tip(), a = this.getUID(this.type);
			this.setContent(), s.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && s.addClass("fade");
			var r = "function" == typeof this.options.placement ? this.options.placement.call(this, s[0], this.$element[0]) : this.options.placement,
				l = /\s?auto?\s?/i, h = l.test(r);
			h && (r = r.replace(l, "") || "top"), s.detach().css({
				top: 0,
				left: 0,
				display: "block"
			}).addClass(r).data("bs." + this.type, this), this.options.container ? s.appendTo(this.options.container) : s.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
			var d = this.getPosition(), p = s[0].offsetWidth, c = s[0].offsetHeight;
			if (h) {
				var f = r, u = this.getPosition(this.$viewport);
				r = "bottom" == r && d.bottom + c > u.bottom ? "top" : "top" == r && d.top - c < u.top ? "bottom" : "right" == r && d.right + p > u.width ? "left" : "left" == r && d.left - p < u.left ? "right" : r, s.removeClass(f).addClass(r)
			}
			var g = this.getCalculatedOffset(r, d, p, c);
			this.applyPlacement(g, r);
			var m = function () {
				var t = n.hoverState;
				n.$element.trigger("shown.bs." + n.type), n.hoverState = null, "out" == t && n.leave(n)
			};
			t.support.transition && this.$tip.hasClass("fade") ? s.one("bsTransitionEnd", m).emulateTransitionEnd(e.TRANSITION_DURATION) : m()
		}
	}, e.prototype.applyPlacement = function (e, i) {
		var o = this.tip(), n = o[0].offsetWidth, s = o[0].offsetHeight, a = parseInt(o.css("margin-top"), 10),
			r = parseInt(o.css("margin-left"), 10);
		isNaN(a) && (a = 0), isNaN(r) && (r = 0), e.top += a, e.left += r, t.offset.setOffset(o[0], t.extend({
			using: function (t) {
				o.css({top: Math.round(t.top), left: Math.round(t.left)})
			}
		}, e), 0), o.addClass("in");
		var l = o[0].offsetWidth, h = o[0].offsetHeight;
		"top" == i && h != s && (e.top = e.top + s - h);
		var d = this.getViewportAdjustedDelta(i, e, l, h);
		d.left ? e.left += d.left : e.top += d.top;
		var p = /top|bottom/.test(i), c = p ? 2 * d.left - n + l : 2 * d.top - s + h,
			f = p ? "offsetWidth" : "offsetHeight";
		o.offset(e), this.replaceArrow(c, o[0][f], p)
	}, e.prototype.replaceArrow = function (t, e, i) {
		this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
	}, e.prototype.setContent = function () {
		var t = this.tip(), e = this.getTitle();
		t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
	}, e.prototype.hide = function (i) {
		function o() {
			"in" != n.hoverState && s.detach(), n.$element.removeAttr("aria-describedby").trigger("hidden.bs." + n.type), i && i()
		}

		var n = this, s = t(this.$tip), a = t.Event("hide.bs." + this.type);
		if (this.$element.trigger(a), !a.isDefaultPrevented()) return s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", o).emulateTransitionEnd(e.TRANSITION_DURATION) : o(), this.hoverState = null, this
	}, e.prototype.fixTitle = function () {
		var t = this.$element;
		(t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
	}, e.prototype.hasContent = function () {
		return this.getTitle()
	}, e.prototype.getPosition = function (e) {
		var i = (e = e || this.$element)[0], o = "BODY" == i.tagName, n = i.getBoundingClientRect();
		null == n.width && (n = t.extend({}, n, {width: n.right - n.left, height: n.bottom - n.top}));
		var s = o ? {top: 0, left: 0} : e.offset(),
			a = {scroll: o ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()},
			r = o ? {width: t(window).width(), height: t(window).height()} : null;
		return t.extend({}, n, a, r, s)
	}, e.prototype.getCalculatedOffset = function (t, e, i, o) {
		return "bottom" == t ? {
			top: e.top + e.height,
			left: e.left + e.width / 2 - i / 2
		} : "top" == t ? {
			top: e.top - o,
			left: e.left + e.width / 2 - i / 2
		} : "left" == t ? {
			top: e.top + e.height / 2 - o / 2,
			left: e.left - i
		} : {top: e.top + e.height / 2 - o / 2, left: e.left + e.width}
	}, e.prototype.getViewportAdjustedDelta = function (t, e, i, o) {
		var n = {top: 0, left: 0};
		if (!this.$viewport) return n;
		var s = this.options.viewport && this.options.viewport.padding || 0, a = this.getPosition(this.$viewport);
		if (/right|left/.test(t)) {
			var r = e.top - s - a.scroll, l = e.top + s - a.scroll + o;
			r < a.top ? n.top = a.top - r : l > a.top + a.height && (n.top = a.top + a.height - l)
		} else {
			var h = e.left - s, d = e.left + s + i;
			h < a.left ? n.left = a.left - h : d > a.right && (n.left = a.left + a.width - d)
		}
		return n
	}, e.prototype.getTitle = function () {
		var t = this.$element, e = this.options;
		return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
	}, e.prototype.getUID = function (t) {
		do {
			t += ~~(1e6 * Math.random())
		} while (document.getElementById(t));
		return t
	}, e.prototype.tip = function () {
		if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
		return this.$tip
	}, e.prototype.arrow = function () {
		return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
	}, e.prototype.enable = function () {
		this.enabled = !0
	}, e.prototype.disable = function () {
		this.enabled = !1
	}, e.prototype.toggleEnabled = function () {
		this.enabled = !this.enabled
	}, e.prototype.toggle = function (e) {
		var i = this;
		e && ((i = t(e.currentTarget).data("bs." + this.type)) || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), e ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
	}, e.prototype.destroy = function () {
		var t = this;
		clearTimeout(this.timeout), this.hide(function () {
			t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null
		})
	};
	var i = t.fn.tooltip;
	t.fn.tooltip = function (i) {
		return this.each(function () {
			var o = t(this), n = o.data("bs.tooltip"), s = "object" == typeof i && i;
			!n && /destroy|hide/.test(i) || (n || o.data("bs.tooltip", n = new e(this, s)), "string" == typeof i && n[i]())
		})
	}, t.fn.tooltip.Constructor = e, t.fn.tooltip.noConflict = function () {
		return t.fn.tooltip = i, this
	}
}(jQuery), function (t) {
	"use strict";
	var e = function (t, e) {
		this.init("popover", t, e)
	};
	if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
	e.VERSION = "3.3.5", e.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
		placement: "right",
		trigger: "click",
		content: "",
		template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
	}), e.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), e.prototype.constructor = e, e.prototype.getDefaults = function () {
		return e.DEFAULTS
	}, e.prototype.setContent = function () {
		var t = this.tip(), e = this.getTitle(), i = this.getContent();
		t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
	}, e.prototype.hasContent = function () {
		return this.getTitle() || this.getContent()
	}, e.prototype.getContent = function () {
		var t = this.$element, e = this.options;
		return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
	}, e.prototype.arrow = function () {
		return this.$arrow = this.$arrow || this.tip().find(".arrow")
	};
	var i = t.fn.popover;
	t.fn.popover = function (i) {
		return this.each(function () {
			var o = t(this), n = o.data("bs.popover"), s = "object" == typeof i && i;
			!n && /destroy|hide/.test(i) || (n || o.data("bs.popover", n = new e(this, s)), "string" == typeof i && n[i]())
		})
	}, t.fn.popover.Constructor = e, t.fn.popover.noConflict = function () {
		return t.fn.popover = i, this
	}
}(jQuery), function (t) {
	"use strict";

	function e(i, o) {
		this.$body = t(document.body), this.$scrollElement = t(t(i).is(document.body) ? window : i), this.options = t.extend({}, e.DEFAULTS, o), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
	}

	function i(i) {
		return this.each(function () {
			var o = t(this), n = o.data("bs.scrollspy"), s = "object" == typeof i && i;
			n || o.data("bs.scrollspy", n = new e(this, s)), "string" == typeof i && n[i]()
		})
	}

	e.VERSION = "3.3.5", e.DEFAULTS = {offset: 10}, e.prototype.getScrollHeight = function () {
		return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
	}, e.prototype.refresh = function () {
		var e = this, i = "offset", o = 0;
		this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", o = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
			var e = t(this), n = e.data("target") || e.attr("href"), s = /^#./.test(n) && t(n);
			return s && s.length && s.is(":visible") && [[s[i]().top + o, n]] || null
		}).sort(function (t, e) {
			return t[0] - e[0]
		}).each(function () {
			e.offsets.push(this[0]), e.targets.push(this[1])
		})
	}, e.prototype.process = function () {
		var t, e = this.$scrollElement.scrollTop() + this.options.offset, i = this.getScrollHeight(),
			o = this.options.offset + i - this.$scrollElement.height(), n = this.offsets, s = this.targets,
			a = this.activeTarget;
		if (this.scrollHeight != i && this.refresh(), e >= o) return a != (t = s[s.length - 1]) && this.activate(t);
		if (a && e < n[0]) return this.activeTarget = null, this.clear();
		for (t = n.length; t--;) a != s[t] && e >= n[t] && (void 0 === n[t + 1] || e < n[t + 1]) && this.activate(s[t])
	}, e.prototype.activate = function (e) {
		this.activeTarget = e, this.clear();
		var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
			o = t(i).parents("li").addClass("active");
		o.parent(".dropdown-menu").length && (o = o.closest("li.dropdown").addClass("active")), o.trigger("activate.bs.scrollspy")
	}, e.prototype.clear = function () {
		t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
	};
	var o = t.fn.scrollspy;
	t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function () {
		return t.fn.scrollspy = o, this
	}, t(window).on("load.bs.scrollspy.data-api", function () {
		t('[data-spy="scroll"]').each(function () {
			var e = t(this);
			i.call(e, e.data())
		})
	})
}(jQuery), function (t) {
	"use strict";

	function e(e) {
		return this.each(function () {
			var o = t(this), n = o.data("bs.tab");
			n || o.data("bs.tab", n = new i(this)), "string" == typeof e && n[e]()
		})
	}

	var i = function (e) {
		this.element = t(e)
	};
	i.VERSION = "3.3.5", i.TRANSITION_DURATION = 150, i.prototype.show = function () {
		var e = this.element, i = e.closest("ul:not(.dropdown-menu)"), o = e.data("target");
		if (o || (o = (o = e.attr("href")) && o.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
			var n = i.find(".active:last a"), s = t.Event("hide.bs.tab", {relatedTarget: e[0]}),
				a = t.Event("show.bs.tab", {relatedTarget: n[0]});
			if (n.trigger(s), e.trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
				var r = t(o);
				this.activate(e.closest("li"), i), this.activate(r, r.parent(), function () {
					n.trigger({type: "hidden.bs.tab", relatedTarget: e[0]}), e.trigger({
						type: "shown.bs.tab",
						relatedTarget: n[0]
					})
				})
			}
		}
	}, i.prototype.activate = function (e, o, n) {
		function s() {
			a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), r ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), n && n()
		}

		var a = o.find("> .active"),
			r = n && t.support.transition && (a.length && a.hasClass("fade") || !!o.find("> .fade").length);
		a.length && r ? a.one("bsTransitionEnd", s).emulateTransitionEnd(i.TRANSITION_DURATION) : s(), a.removeClass("in")
	};
	var o = t.fn.tab;
	t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function () {
		return t.fn.tab = o, this
	};
	var n = function (i) {
		i.preventDefault(), e.call(t(this), "show")
	};
	t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', n).on("click.bs.tab.data-api", '[data-toggle="pill"]', n)
}(jQuery), function (t) {
	"use strict";

	function e(e) {
		return this.each(function () {
			var o = t(this), n = o.data("bs.affix"), s = "object" == typeof e && e;
			n || o.data("bs.affix", n = new i(this, s)), "string" == typeof e && n[e]()
		})
	}

	var i = function (e, o) {
		this.options = t.extend({}, i.DEFAULTS, o), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
	};
	i.VERSION = "3.3.5", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
		offset: 0,
		target: window
	}, i.prototype.getState = function (t, e, i, o) {
		var n = this.$target.scrollTop(), s = this.$element.offset(), a = this.$target.height();
		if (null != i && "top" == this.affixed) return n < i && "top";
		if ("bottom" == this.affixed) return null != i ? !(n + this.unpin <= s.top) && "bottom" : !(n + a <= t - o) && "bottom";
		var r = null == this.affixed, l = r ? n : s.top, h = r ? a : e;
		return null != i && n <= i ? "top" : null != o && l + h >= t - o && "bottom"
	}, i.prototype.getPinnedOffset = function () {
		if (this.pinnedOffset) return this.pinnedOffset;
		this.$element.removeClass(i.RESET).addClass("affix");
		var t = this.$target.scrollTop(), e = this.$element.offset();
		return this.pinnedOffset = e.top - t
	}, i.prototype.checkPositionWithEventLoop = function () {
		setTimeout(t.proxy(this.checkPosition, this), 1)
	}, i.prototype.checkPosition = function () {
		if (this.$element.is(":visible")) {
			var e = this.$element.height(), o = this.options.offset, n = o.top, s = o.bottom,
				a = Math.max(t(document).height(), t(document.body).height());
			"object" != typeof o && (s = n = o), "function" == typeof n && (n = o.top(this.$element)), "function" == typeof s && (s = o.bottom(this.$element));
			var r = this.getState(a, e, n, s);
			if (this.affixed != r) {
				null != this.unpin && this.$element.css("top", "");
				var l = "affix" + (r ? "-" + r : ""), h = t.Event(l + ".bs.affix");
				if (this.$element.trigger(h), h.isDefaultPrevented()) return;
				this.affixed = r, this.unpin = "bottom" == r ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
			}
			"bottom" == r && this.$element.offset({top: a - e - s})
		}
	};
	var o = t.fn.affix;
	t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function () {
		return t.fn.affix = o, this
	}, t(window).on("load", function () {
		t('[data-spy="affix"]').each(function () {
			var i = t(this), o = i.data();
			o.offset = o.offset || {}, null != o.offsetBottom && (o.offset.bottom = o.offsetBottom), null != o.offsetTop && (o.offset.top = o.offsetTop), e.call(i, o)
		})
	})
}(jQuery);

function CountBox() {
	dateNow = new Date();
	amount = ((23 - dateNow.getHours()) * 60 * 60 + (59 - dateNow.getMinutes()) * 60 + (60 - dateNow.getSeconds())) * 1000;
	delete dateNow;
	if (amount < 0) {
		out = "<div class='countbox-num'><div class='countbox-hours1'><span></span>0</div><div class='countbox-hours2'><span></span>0</div><div class='countbox-hours-text'></div></div>" +
			"<div class='countbox-space'></div>" +
			"<div class='countbox-num'><div class='countbox-mins1'><span></span>0</div><div class='countbox-mins2'><span></span>0</div><div class='countbox-mins-text'></div></div>" +
			"<div class='countbox-space'></div>" +
			"<div class='countbox-num'><div class='countbox-secs1'><span></span>0</div><div class='countbox-secs2'><span></span>0</div><div class='countbox-secs-text'></div></div>";
		var list = document.getElementsByClassName("countbox");
		for (var i = 0; i < list.length; i++) {
			list[i].innerHTML = out;
		}
		setTimeout("CountBox()", 10000)
	} else {
		days = 0;
		days1 = 0;
		days2 = 0;
		hours = 0;
		hours1 = 0;
		hours2 = 0;
		mins = 0;
		mins1 = 0;
		mins2 = 0;
		secs = 0;
		secs1 = 0;
		secs2 = 0;
		out = "";
		amount = Math.floor(amount / 1e3);
		days = Math.floor(amount / 86400);
		days1 = (days >= 10) ? days.toString().charAt(0) : '0';
		days2 = (days >= 10) ? days.toString().charAt(1) : days.toString().charAt(0);
		amount = amount % 86400;
		hours = Math.floor(amount / 3600);
		hours1 = (hours >= 10) ? hours.toString().charAt(0) : '0';
		hours2 = (hours >= 10) ? hours.toString().charAt(1) : hours.toString().charAt(0);
		amount = amount % 3600;
		mins = Math.floor(amount / 60);
		mins1 = (mins >= 10) ? mins.toString().charAt(0) : '0';
		mins2 = (mins >= 10) ? mins.toString().charAt(1) : mins.toString().charAt(0);
		amount = amount % 60;
		secs = Math.floor(amount);
		secs1 = (secs >= 10) ? secs.toString().charAt(0) : '0';
		secs2 = (secs >= 10) ? secs.toString().charAt(1) : secs.toString().charAt(0);
		out = "<div class='countbox-num'><div class='countbox-hours1'><span></span>" + hours1 + "</div><div class='countbox-hours2'><span></span>" + hours2 + "</div><div class='countbox-hours-text'>часов</div></div>" +
			"<div class='countbox-space'>:</div>" +
			"<div class='countbox-num'><div class='countbox-mins1'><span></span>" + mins1 + "</div><div class='countbox-mins2'><span></span>" + mins2 + "</div><div class='countbox-mins-text'>минут</div></div>" +
			"<div class='countbox-space'>:</div>" +
			"<div class='countbox-num'><div class='countbox-secs1'><span></span>" + secs1 + "</div><div class='countbox-secs2'><span></span>" + secs2 + "</div><div class='countbox-secs-text'>секунд</div></div>";
		var list = document.getElementsByClassName("countbox");
		for (var i = 0; i < list.length; i++) {
			list[i].innerHTML = out;
		}
		setTimeout("CountBox()", 1e3)
	}
}

window.onload = function () {
	CountBox()
}
!function (a) {
	"use strict";
	"function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function (a) {
	"use strict";
	var b = window.Slick || {};
	b = function () {
		function c(c, d) {
			var f, e = this;
			e.defaults = {
				accessibility: !0,
				adaptiveHeight: !1,
				appendArrows: a(c),
				appendDots: a(c),
				arrows: !0,
				asNavFor: null,
				prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
				nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
				autoplay: !1,
				autoplaySpeed: 3e3,
				centerMode: !1,
				centerPadding: "50px",
				cssEase: "ease",
				customPaging: function (b, c) {
					return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c + 1)
				},
				dots: !1,
				dotsClass: "slick-dots",
				draggable: !0,
				easing: "linear",
				edgeFriction: .35,
				fade: !1,
				focusOnSelect: !1,
				infinite: !0,
				initialSlide: 0,
				lazyLoad: "ondemand",
				mobileFirst: !1,
				pauseOnHover: !0,
				pauseOnFocus: !0,
				pauseOnDotsHover: !1,
				respondTo: "window",
				responsive: null,
				rows: 1,
				rtl: !1,
				slide: "",
				slidesPerRow: 1,
				slidesToShow: 1,
				slidesToScroll: 1,
				speed: 500,
				swipe: !0,
				swipeToSlide: !1,
				touchMove: !0,
				touchThreshold: 5,
				useCSS: !0,
				useTransform: !0,
				variableWidth: !1,
				vertical: !1,
				verticalSwiping: !1,
				waitForAnimate: !0,
				zIndex: 1e3
			}, e.initials = {
				animating: !1,
				dragging: !1,
				autoPlayTimer: null,
				currentDirection: 0,
				currentLeft: null,
				currentSlide: 0,
				direction: 1,
				$dots: null,
				listWidth: null,
				listHeight: null,
				loadIndex: 0,
				$nextArrow: null,
				$prevArrow: null,
				slideCount: null,
				slideWidth: null,
				$slideTrack: null,
				$slides: null,
				sliding: !1,
				slideOffset: 0,
				swipeLeft: null,
				$list: null,
				touchObject: {},
				transformsEnabled: !1,
				unslicked: !1
			}, a.extend(e, e.initials), e.activeBreakpoint = null, e.animType = null, e.animProp = null, e.breakpoints = [], e.breakpointSettings = [], e.cssTransitions = !1, e.focussed = !1, e.interrupted = !1, e.hidden = "hidden", e.paused = !0, e.positionProp = null, e.respondTo = null, e.rowCount = 1, e.shouldClick = !0, e.$slider = a(c), e.$slidesCache = null, e.transformType = null, e.transitionType = null, e.visibilityChange = "visibilitychange", e.windowWidth = 0, e.windowTimer = null, f = a(c).data("slick") || {}, e.options = a.extend({}, e.defaults, d, f), e.currentSlide = e.options.initialSlide, e.originalSettings = e.options, "undefined" != typeof document.mozHidden ? (e.hidden = "mozHidden", e.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (e.hidden = "webkitHidden", e.visibilityChange = "webkitvisibilitychange"), e.autoPlay = a.proxy(e.autoPlay, e), e.autoPlayClear = a.proxy(e.autoPlayClear, e), e.autoPlayIterator = a.proxy(e.autoPlayIterator, e), e.changeSlide = a.proxy(e.changeSlide, e), e.clickHandler = a.proxy(e.clickHandler, e), e.selectHandler = a.proxy(e.selectHandler, e), e.setPosition = a.proxy(e.setPosition, e), e.swipeHandler = a.proxy(e.swipeHandler, e), e.dragHandler = a.proxy(e.dragHandler, e), e.keyHandler = a.proxy(e.keyHandler, e), e.instanceUid = b++, e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, e.registerBreakpoints(), e.init(!0)
		}

		var b = 0;
		return c
	}(), b.prototype.activateADA = function () {
		var a = this;
		a.$slideTrack.find(".slick-active").attr({"aria-hidden": "false"}).find("a, input, button, select").attr({tabindex: "0"})
	}, b.prototype.addSlide = b.prototype.slickAdd = function (b, c, d) {
		var e = this;
		if ("boolean" == typeof c) d = c, c = null; else if (0 > c || c >= e.slideCount) return !1;
		e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function (b, c) {
			a(c).attr("data-slick-index", b)
		}), e.$slidesCache = e.$slides, e.reinit()
	}, b.prototype.animateHeight = function () {
		var a = this;
		if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
			var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
			a.$list.animate({height: b}, a.options.speed)
		}
	}, b.prototype.animateSlide = function (b, c) {
		var d = {}, e = this;
		e.animateHeight(), e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({left: b}, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({top: b}, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft), a({animStart: e.currentLeft}).animate({animStart: b}, {
			duration: e.options.speed,
			easing: e.options.easing,
			step: function (a) {
				a = Math.ceil(a), e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d))
			},
			complete: function () {
				c && c.call()
			}
		})) : (e.applyTransition(), b = Math.ceil(b), e.options.vertical === !1 ? d[e.animType] = "translate3d(" + b + "px, 0px, 0px)" : d[e.animType] = "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function () {
			e.disableTransition(), c.call()
		}, e.options.speed))
	}, b.prototype.getNavTarget = function () {
		var b = this, c = b.options.asNavFor;
		return c && null !== c && (c = a(c).not(b.$slider)), c
	}, b.prototype.asNavFor = function (b) {
		var c = this, d = c.getNavTarget();
		null !== d && "object" == typeof d && d.each(function () {
			var c = a(this).slick("getSlick");
			c.unslicked || c.slideHandler(b, !0)
		})
	}, b.prototype.applyTransition = function (a) {
		var b = this, c = {};
		b.options.fade === !1 ? c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
	}, b.prototype.autoPlay = function () {
		var a = this;
		a.autoPlayClear(), a.slideCount > a.options.slidesToShow && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed))
	}, b.prototype.autoPlayClear = function () {
		var a = this;
		a.autoPlayTimer && clearInterval(a.autoPlayTimer)
	}, b.prototype.autoPlayIterator = function () {
		var a = this, b = a.currentSlide + a.options.slidesToScroll;
		a.paused || a.interrupted || a.focussed || (a.options.infinite === !1 && (1 === a.direction && a.currentSlide + 1 === a.slideCount - 1 ? a.direction = 0 : 0 === a.direction && (b = a.currentSlide - a.options.slidesToScroll, a.currentSlide - 1 === 0 && (a.direction = 1))), a.slideHandler(b))
	}, b.prototype.buildArrows = function () {
		var b = this;
		b.options.arrows === !0 && (b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow"), b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow"), b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({
			"aria-disabled": "true",
			tabindex: "-1"
		}))
	}, b.prototype.buildDots = function () {
		var c, d, b = this;
		if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
			for (b.$slider.addClass("slick-dotted"), d = a("<ul />").addClass(b.options.dotsClass), c = 0; c <= b.getDotCount(); c += 1) d.append(a("<li />").append(b.options.customPaging.call(this, b, c)));
			b.$dots = d.appendTo(b.options.appendDots), b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
		}
	}, b.prototype.buildOut = function () {
		var b = this;
		b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function (b, c) {
			a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "")
		}), b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass("draggable")
	}, b.prototype.buildRows = function () {
		var b, c, d, e, f, g, h, a = this;
		if (e = document.createDocumentFragment(), g = a.$slider.children(), a.options.rows > 1) {
			for (h = a.options.slidesPerRow * a.options.rows, f = Math.ceil(g.length / h), b = 0; f > b; b++) {
				var i = document.createElement("div");
				for (c = 0; c < a.options.rows; c++) {
					var j = document.createElement("div");
					for (d = 0; d < a.options.slidesPerRow; d++) {
						var k = b * h + (c * a.options.slidesPerRow + d);
						g.get(k) && j.appendChild(g.get(k))
					}
					i.appendChild(j)
				}
				e.appendChild(i)
			}
			a.$slider.empty().append(e), a.$slider.children().children().children().css({
				width: 100 / a.options.slidesPerRow + "%",
				display: "inline-block"
			})
		}
	}, b.prototype.checkResponsive = function (b, c) {
		var e, f, g, d = this, h = !1, i = d.$slider.width(), j = window.innerWidth || a(window).width();
		if ("window" === d.respondTo ? g = j : "slider" === d.respondTo ? g = i : "min" === d.respondTo && (g = Math.min(j, i)), d.options.responsive && d.options.responsive.length && null !== d.options.responsive) {
			f = null;
			for (e in d.breakpoints) d.breakpoints.hasOwnProperty(e) && (d.originalSettings.mobileFirst === !1 ? g < d.breakpoints[e] && (f = d.breakpoints[e]) : g > d.breakpoints[e] && (f = d.breakpoints[e]));
			null !== f ? null !== d.activeBreakpoint ? (f !== d.activeBreakpoint || c) && (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : null !== d.activeBreakpoint && (d.activeBreakpoint = null, d.options = d.originalSettings, b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b), h = f), b || h === !1 || d.$slider.trigger("breakpoint", [d, h])
		}
	}, b.prototype.changeSlide = function (b, c) {
		var f, g, h, d = this, e = a(b.currentTarget);
		switch (e.is("a") && b.preventDefault(), e.is("li") || (e = e.closest("li")), h = d.slideCount % d.options.slidesToScroll !== 0, f = h ? 0 : (d.slideCount - d.currentSlide) % d.options.slidesToScroll, b.data.message) {
			case"previous":
				g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide - g, !1, c);
				break;
			case"next":
				g = 0 === f ? d.options.slidesToScroll : f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide + g, !1, c);
				break;
			case"index":
				var i = 0 === b.data.index ? 0 : b.data.index || e.index() * d.options.slidesToScroll;
				d.slideHandler(d.checkNavigable(i), !1, c), e.children().trigger("focus");
				break;
			default:
				return
		}
	}, b.prototype.checkNavigable = function (a) {
		var c, d, b = this;
		if (c = b.getNavigableIndexes(), d = 0, a > c[c.length - 1]) a = c[c.length - 1]; else for (var e in c) {
			if (a < c[e]) {
				a = d;
				break
			}
			d = c[e]
		}
		return a
	}, b.prototype.cleanUpEvents = function () {
		var b = this;
		b.options.dots && null !== b.$dots && a("li", b.$dots).off("click.slick", b.changeSlide).off("mouseenter.slick", a.proxy(b.interrupt, b, !0)).off("mouseleave.slick", a.proxy(b.interrupt, b, !1)), b.$slider.off("focus.slick blur.slick"), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)), b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler), b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler), b.$list.off("touchend.slick mouseup.slick", b.swipeHandler), b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler), b.$list.off("click.slick", b.clickHandler), a(document).off(b.visibilityChange, b.visibility), b.cleanUpSlideEvents(), b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler), a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange), a(window).off("resize.slick.slick-" + b.instanceUid, b.resize), a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault), a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition)
	}, b.prototype.cleanUpSlideEvents = function () {
		var b = this;
		b.$list.off("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.off("mouseleave.slick", a.proxy(b.interrupt, b, !1))
	}, b.prototype.cleanUpRows = function () {
		var b, a = this;
		a.options.rows > 1 && (b = a.$slides.children().children(), b.removeAttr("style"), a.$slider.empty().append(b))
	}, b.prototype.clickHandler = function (a) {
		var b = this;
		b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault())
	}, b.prototype.destroy = function (b) {
		var c = this;
		c.autoPlayClear(), c.touchObject = {}, c.cleanUpEvents(), a(".slick-cloned", c.$slider).detach(), c.$dots && c.$dots.remove(), c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()), c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()), c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
			a(this).attr("style", a(this).data("originalStyling"))
		}), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.detach(), c.$list.detach(), c.$slider.append(c.$slides)), c.cleanUpRows(), c.$slider.removeClass("slick-slider"), c.$slider.removeClass("slick-initialized"), c.$slider.removeClass("slick-dotted"), c.unslicked = !0, b || c.$slider.trigger("destroy", [c])
	}, b.prototype.disableTransition = function (a) {
		var b = this, c = {};
		c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
	}, b.prototype.fadeSlide = function (a, b) {
		var c = this;
		c.cssTransitions === !1 ? (c.$slides.eq(a).css({zIndex: c.options.zIndex}), c.$slides.eq(a).animate({opacity: 1}, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({
			opacity: 1,
			zIndex: c.options.zIndex
		}), b && setTimeout(function () {
			c.disableTransition(a), b.call()
		}, c.options.speed))
	}, b.prototype.fadeSlideOut = function (a) {
		var b = this;
		b.cssTransitions === !1 ? b.$slides.eq(a).animate({
			opacity: 0,
			zIndex: b.options.zIndex - 2
		}, b.options.speed, b.options.easing) : (b.applyTransition(a), b.$slides.eq(a).css({
			opacity: 0,
			zIndex: b.options.zIndex - 2
		}))
	}, b.prototype.filterSlides = b.prototype.slickFilter = function (a) {
		var b = this;
		null !== a && (b.$slidesCache = b.$slides, b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit())
	}, b.prototype.focusHandler = function () {
		var b = this;
		b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function (c) {
			c.stopImmediatePropagation();
			var d = a(this);
			setTimeout(function () {
				b.options.pauseOnFocus && (b.focussed = d.is(":focus"), b.autoPlay())
			}, 0)
		})
	}, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function () {
		var a = this;
		return a.currentSlide
	}, b.prototype.getDotCount = function () {
		var a = this, b = 0, c = 0, d = 0;
		if (a.options.infinite === !0) for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow; else if (a.options.centerMode === !0) d = a.slideCount; else if (a.options.asNavFor) for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow; else d = 1 + Math.ceil((a.slideCount - a.options.slidesToShow) / a.options.slidesToScroll);
		return d - 1
	}, b.prototype.getLeft = function (a) {
		var c, d, f, b = this, e = 0;
		return b.slideOffset = 0, d = b.$slides.first().outerHeight(!0), b.options.infinite === !0 ? (b.slideCount > b.options.slidesToShow && (b.slideOffset = b.slideWidth * b.options.slidesToShow * -1, e = d * b.options.slidesToShow * -1), b.slideCount % b.options.slidesToScroll !== 0 && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (a > b.slideCount ? (b.slideOffset = (b.options.slidesToShow - (a - b.slideCount)) * b.slideWidth * -1, e = (b.options.slidesToShow - (a - b.slideCount)) * d * -1) : (b.slideOffset = b.slideCount % b.options.slidesToScroll * b.slideWidth * -1, e = b.slideCount % b.options.slidesToScroll * d * -1))) : a + b.options.slidesToShow > b.slideCount && (b.slideOffset = (a + b.options.slidesToShow - b.slideCount) * b.slideWidth, e = (a + b.options.slidesToShow - b.slideCount) * d), b.slideCount <= b.options.slidesToShow && (b.slideOffset = 0, e = 0), b.options.centerMode === !0 && b.options.infinite === !0 ? b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth : b.options.centerMode === !0 && (b.slideOffset = 0, b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2)), c = b.options.vertical === !1 ? a * b.slideWidth * -1 + b.slideOffset : a * d * -1 + e, b.options.variableWidth === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, b.options.centerMode === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow + 1), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, c += (b.$list.width() - f.outerWidth()) / 2)), c
	}, b.prototype.getOption = b.prototype.slickGetOption = function (a) {
		var b = this;
		return b.options[a]
	}, b.prototype.getNavigableIndexes = function () {
		var e, a = this, b = 0, c = 0, d = [];
		for (a.options.infinite === !1 ? e = a.slideCount : (b = -1 * a.options.slidesToScroll, c = -1 * a.options.slidesToScroll, e = 2 * a.slideCount); e > b;) d.push(b), b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
		return d
	}, b.prototype.getSlick = function () {
		return this
	}, b.prototype.getSlideCount = function () {
		var c, d, e, b = this;
		return e = b.options.centerMode === !0 ? b.slideWidth * Math.floor(b.options.slidesToShow / 2) : 0, b.options.swipeToSlide === !0 ? (b.$slideTrack.find(".slick-slide").each(function (c, f) {
			return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft ? (d = f, !1) : void 0
		}), c = Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1) : b.options.slidesToScroll
	}, b.prototype.goTo = b.prototype.slickGoTo = function (a, b) {
		var c = this;
		c.changeSlide({data: {message: "index", index: parseInt(a)}}, b)
	}, b.prototype.init = function (b) {
		var c = this;
		a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"), c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), c.updateArrows(), c.updateDots(), c.checkResponsive(!0), c.focusHandler()), b && c.$slider.trigger("init", [c]), c.options.accessibility === !0 && c.initADA(), c.options.autoplay && (c.paused = !1, c.autoPlay())
	}, b.prototype.initADA = function () {
		var b = this;
		b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({
			"aria-hidden": "true",
			tabindex: "-1"
		}).find("a, input, button, select").attr({tabindex: "-1"}), b.$slideTrack.attr("role", "listbox"), b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function (c) {
			a(this).attr({role: "option", "aria-describedby": "slick-slide" + b.instanceUid + c})
		}), null !== b.$dots && b.$dots.attr("role", "tablist").find("li").each(function (c) {
			a(this).attr({
				role: "presentation",
				"aria-selected": "false",
				"aria-controls": "navigation" + b.instanceUid + c,
				id: "slick-slide" + b.instanceUid + c
			})
		}).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), b.activateADA()
	}, b.prototype.initArrowEvents = function () {
		var a = this;
		a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.off("click.slick").on("click.slick", {message: "previous"}, a.changeSlide), a.$nextArrow.off("click.slick").on("click.slick", {message: "next"}, a.changeSlide))
	}, b.prototype.initDotEvents = function () {
		var b = this;
		b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", {message: "index"}, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.interrupt, b, !0)).on("mouseleave.slick", a.proxy(b.interrupt, b, !1))
	}, b.prototype.initSlideEvents = function () {
		var b = this;
		b.options.pauseOnHover && (b.$list.on("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.on("mouseleave.slick", a.proxy(b.interrupt, b, !1)))
	}, b.prototype.initializeEvents = function () {
		var b = this;
		b.initArrowEvents(), b.initDotEvents(), b.initSlideEvents(), b.$list.on("touchstart.slick mousedown.slick", {action: "start"}, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", {action: "move"}, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", {action: "end"}, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", {action: "end"}, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), a(document).on(b.visibilityChange, a.proxy(b.visibility, b)), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)), a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)), a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition)
	}, b.prototype.initUI = function () {
		var a = this;
		a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show()
	}, b.prototype.keyHandler = function (a) {
		var b = this;
		a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({data: {message: b.options.rtl === !0 ? "next" : "previous"}}) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({data: {message: b.options.rtl === !0 ? "previous" : "next"}}))
	}, b.prototype.lazyLoad = function () {
		function g(c) {
			a("img[data-lazy]", c).each(function () {
				var c = a(this), d = a(this).attr("data-lazy"), e = document.createElement("img");
				e.onload = function () {
					c.animate({opacity: 0}, 100, function () {
						c.attr("src", d).animate({opacity: 1}, 200, function () {
							c.removeAttr("data-lazy").removeClass("slick-loading")
						}), b.$slider.trigger("lazyLoaded", [b, c, d])
					})
				}, e.onerror = function () {
					c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), b.$slider.trigger("lazyLoadError", [b, c, d])
				}, e.src = d
			})
		}

		var c, d, e, f, b = this;
		b.options.centerMode === !0 ? b.options.infinite === !0 ? (e = b.currentSlide + (b.options.slidesToShow / 2 + 1), f = e + b.options.slidesToShow + 2) : (e = Math.max(0, b.currentSlide - (b.options.slidesToShow / 2 + 1)), f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide) : (e = b.options.infinite ? b.options.slidesToShow + b.currentSlide : b.currentSlide, f = Math.ceil(e + b.options.slidesToShow), b.options.fade === !0 && (e > 0 && e--, f <= b.slideCount && f++)), c = b.$slider.find(".slick-slide").slice(e, f), g(c), b.slideCount <= b.options.slidesToShow ? (d = b.$slider.find(".slick-slide"), g(d)) : b.currentSlide >= b.slideCount - b.options.slidesToShow ? (d = b.$slider.find(".slick-cloned").slice(0, b.options.slidesToShow), g(d)) : 0 === b.currentSlide && (d = b.$slider.find(".slick-cloned").slice(-1 * b.options.slidesToShow), g(d))
	}, b.prototype.loadSlider = function () {
		var a = this;
		a.setPosition(), a.$slideTrack.css({opacity: 1}), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad()
	}, b.prototype.next = b.prototype.slickNext = function () {
		var a = this;
		a.changeSlide({data: {message: "next"}})
	}, b.prototype.orientationChange = function () {
		var a = this;
		a.checkResponsive(), a.setPosition()
	}, b.prototype.pause = b.prototype.slickPause = function () {
		var a = this;
		a.autoPlayClear(), a.paused = !0
	}, b.prototype.play = b.prototype.slickPlay = function () {
		var a = this;
		a.autoPlay(), a.options.autoplay = !0, a.paused = !1, a.focussed = !1, a.interrupted = !1
	}, b.prototype.postSlide = function (a) {
		var b = this;
		b.unslicked || (b.$slider.trigger("afterChange", [b, a]), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay && b.autoPlay(), b.options.accessibility === !0 && b.initADA())
	}, b.prototype.prev = b.prototype.slickPrev = function () {
		var a = this;
		a.changeSlide({data: {message: "previous"}})
	}, b.prototype.preventDefault = function (a) {
		a.preventDefault()
	}, b.prototype.progressiveLazyLoad = function (b) {
		b = b || 1;
		var e, f, g, c = this, d = a("img[data-lazy]", c.$slider);
		d.length ? (e = d.first(), f = e.attr("data-lazy"), g = document.createElement("img"), g.onload = function () {
			e.attr("src", f).removeAttr("data-lazy").removeClass("slick-loading"), c.options.adaptiveHeight === !0 && c.setPosition(), c.$slider.trigger("lazyLoaded", [c, e, f]), c.progressiveLazyLoad()
		}, g.onerror = function () {
			3 > b ? setTimeout(function () {
				c.progressiveLazyLoad(b + 1)
			}, 500) : (e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), c.$slider.trigger("lazyLoadError", [c, e, f]), c.progressiveLazyLoad())
		}, g.src = f) : c.$slider.trigger("allImagesLoaded", [c])
	}, b.prototype.refresh = function (b) {
		var d, e, c = this;
		e = c.slideCount - c.options.slidesToShow, !c.options.infinite && c.currentSlide > e && (c.currentSlide = e), c.slideCount <= c.options.slidesToShow && (c.currentSlide = 0), d = c.currentSlide, c.destroy(!0), a.extend(c, c.initials, {currentSlide: d}), c.init(), b || c.changeSlide({
			data: {
				message: "index",
				index: d
			}
		}, !1)
	}, b.prototype.registerBreakpoints = function () {
		var c, d, e, b = this, f = b.options.responsive || null;
		if ("array" === a.type(f) && f.length) {
			b.respondTo = b.options.respondTo || "window";
			for (c in f) if (e = b.breakpoints.length - 1, d = f[c].breakpoint, f.hasOwnProperty(c)) {
				for (; e >= 0;) b.breakpoints[e] && b.breakpoints[e] === d && b.breakpoints.splice(e, 1), e--;
				b.breakpoints.push(d), b.breakpointSettings[d] = f[c].settings
			}
			b.breakpoints.sort(function (a, c) {
				return b.options.mobileFirst ? a - c : c - a
			})
		}
	}, b.prototype.reinit = function () {
		var b = this;
		b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.registerBreakpoints(), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.cleanUpSlideEvents(), b.initSlideEvents(), b.checkResponsive(!1, !0), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.setPosition(), b.focusHandler(), b.paused = !b.options.autoplay, b.autoPlay(), b.$slider.trigger("reInit", [b])
	}, b.prototype.resize = function () {
		var b = this;
		a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function () {
			b.windowWidth = a(window).width(), b.checkResponsive(), b.unslicked || b.setPosition()
		}, 50))
	}, b.prototype.removeSlide = b.prototype.slickRemove = function (a, b, c) {
		var d = this;
		return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a, d.slideCount < 1 || 0 > a || a > d.slideCount - 1 ? !1 : (d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, void d.reinit())
	}, b.prototype.setCSS = function (a) {
		var d, e, b = this, c = {};
		b.options.rtl === !0 && (a = -a), d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px", e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px", c[b.positionProp] = a, b.transformsEnabled === !1 ? b.$slideTrack.css(c) : (c = {}, b.cssTransitions === !1 ? (c[b.animType] = "translate(" + d + ", " + e + ")", b.$slideTrack.css(c)) : (c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)", b.$slideTrack.css(c)))
	}, b.prototype.setDimensions = function () {
		var a = this;
		a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({padding: "0px " + a.options.centerPadding}) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({padding: a.options.centerPadding + " 0px"})), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.options.vertical === !1 && a.options.variableWidth === !1 ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : a.options.variableWidth === !0 ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));
		var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
		a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b)
	}, b.prototype.setFade = function () {
		var c, b = this;
		b.$slides.each(function (d, e) {
			c = b.slideWidth * d * -1, b.options.rtl === !0 ? a(e).css({
				position: "relative",
				right: c,
				top: 0,
				zIndex: b.options.zIndex - 2,
				opacity: 0
			}) : a(e).css({position: "relative", left: c, top: 0, zIndex: b.options.zIndex - 2, opacity: 0})
		}), b.$slides.eq(b.currentSlide).css({zIndex: b.options.zIndex - 1, opacity: 1})
	}, b.prototype.setHeight = function () {
		var a = this;
		if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
			var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
			a.$list.css("height", b)
		}
	}, b.prototype.setOption = b.prototype.slickSetOption = function () {
		var c, d, e, f, h, b = this, g = !1;
		if ("object" === a.type(arguments[0]) ? (e = arguments[0], g = arguments[1], h = "multiple") : "string" === a.type(arguments[0]) && (e = arguments[0], f = arguments[1], g = arguments[2], "responsive" === arguments[0] && "array" === a.type(arguments[1]) ? h = "responsive" : "undefined" != typeof arguments[1] && (h = "single")), "single" === h) b.options[e] = f; else if ("multiple" === h) a.each(e, function (a, c) {
			b.options[a] = c
		}); else if ("responsive" === h) for (d in f) if ("array" !== a.type(b.options.responsive)) b.options.responsive = [f[d]]; else {
			for (c = b.options.responsive.length - 1; c >= 0;) b.options.responsive[c].breakpoint === f[d].breakpoint && b.options.responsive.splice(c, 1), c--;
			b.options.responsive.push(f[d])
		}
		g && (b.unload(), b.reinit())
	}, b.prototype.setPosition = function () {
		var a = this;
		a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a])
	}, b.prototype.setProps = function () {
		var a = this, b = document.body.style;
		a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0), a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = a.options.useTransform && null !== a.animType && a.animType !== !1
	}, b.prototype.setSlideClasses = function (a) {
		var c, d, e, f, b = this;
		d = b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), b.$slides.eq(a).addClass("slick-current"), b.options.centerMode === !0 ? (c = Math.floor(b.options.slidesToShow / 2), b.options.infinite === !0 && (a >= c && a <= b.slideCount - 1 - c ? b.$slides.slice(a - c, a + c + 1).addClass("slick-active").attr("aria-hidden", "false") : (e = b.options.slidesToShow + a,
			d.slice(e - c + 1, e + c + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === a ? d.eq(d.length - 1 - b.options.slidesToShow).addClass("slick-center") : a === b.slideCount - 1 && d.eq(b.options.slidesToShow).addClass("slick-center")), b.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= b.slideCount - b.options.slidesToShow ? b.$slides.slice(a, a + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : d.length <= b.options.slidesToShow ? d.addClass("slick-active").attr("aria-hidden", "false") : (f = b.slideCount % b.options.slidesToShow, e = b.options.infinite === !0 ? b.options.slidesToShow + a : a, b.options.slidesToShow == b.options.slidesToScroll && b.slideCount - a < b.options.slidesToShow ? d.slice(e - (b.options.slidesToShow - f), e + f).addClass("slick-active").attr("aria-hidden", "false") : d.slice(e, e + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === b.options.lazyLoad && b.lazyLoad()
	}, b.prototype.setupInfinite = function () {
		var c, d, e, b = this;
		if (b.options.fade === !0 && (b.options.centerMode = !1), b.options.infinite === !0 && b.options.fade === !1 && (d = null, b.slideCount > b.options.slidesToShow)) {
			for (e = b.options.centerMode === !0 ? b.options.slidesToShow + 1 : b.options.slidesToShow, c = b.slideCount; c > b.slideCount - e; c -= 1) d = c - 1, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d - b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");
			for (c = 0; e > c; c += 1) d = c, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d + b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");
			b.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
				a(this).attr("id", "")
			})
		}
	}, b.prototype.interrupt = function (a) {
		var b = this;
		a || b.autoPlay(), b.interrupted = a
	}, b.prototype.selectHandler = function (b) {
		var c = this, d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide"),
			e = parseInt(d.attr("data-slick-index"));
		return e || (e = 0), c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e), void c.asNavFor(e)) : void c.slideHandler(e)
	}, b.prototype.slideHandler = function (a, b, c) {
		var d, e, f, g, j, h = null, i = this;
		return b = b || !1, i.animating === !0 && i.options.waitForAnimate === !0 || i.options.fade === !0 && i.currentSlide === a || i.slideCount <= i.options.slidesToShow ? void 0 : (b === !1 && i.asNavFor(a), d = a, h = i.getLeft(d), g = i.getLeft(i.currentSlide), i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft, i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.getDotCount() * i.options.slidesToScroll) ? void(i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function () {
			i.postSlide(d)
		}) : i.postSlide(d))) : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll) ? void(i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function () {
			i.postSlide(d)
		}) : i.postSlide(d))) : (i.options.autoplay && clearInterval(i.autoPlayTimer), e = 0 > d ? i.slideCount % i.options.slidesToScroll !== 0 ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? i.slideCount % i.options.slidesToScroll !== 0 ? 0 : d - i.slideCount : d, i.animating = !0, i.$slider.trigger("beforeChange", [i, i.currentSlide, e]), f = i.currentSlide, i.currentSlide = e, i.setSlideClasses(i.currentSlide), i.options.asNavFor && (j = i.getNavTarget(), j = j.slick("getSlick"), j.slideCount <= j.options.slidesToShow && j.setSlideClasses(i.currentSlide)), i.updateDots(), i.updateArrows(), i.options.fade === !0 ? (c !== !0 ? (i.fadeSlideOut(f), i.fadeSlide(e, function () {
			i.postSlide(e)
		})) : i.postSlide(e), void i.animateHeight()) : void(c !== !0 ? i.animateSlide(h, function () {
			i.postSlide(e)
		}) : i.postSlide(e))))
	}, b.prototype.startLoad = function () {
		var a = this;
		a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading")
	}, b.prototype.swipeDirection = function () {
		var a, b, c, d, e = this;
		return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : e.options.verticalSwiping === !0 ? d >= 35 && 135 >= d ? "down" : "up" : "vertical"
	}, b.prototype.swipeEnd = function (a) {
		var c, d, b = this;
		if (b.dragging = !1, b.interrupted = !1, b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0, void 0 === b.touchObject.curX) return !1;
		if (b.touchObject.edgeHit === !0 && b.$slider.trigger("edge", [b, b.swipeDirection()]), b.touchObject.swipeLength >= b.touchObject.minSwipe) {
			switch (d = b.swipeDirection()) {
				case"left":
				case"down":
					c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide + b.getSlideCount()) : b.currentSlide + b.getSlideCount(), b.currentDirection = 0;
					break;
				case"right":
				case"up":
					c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide - b.getSlideCount()) : b.currentSlide - b.getSlideCount(), b.currentDirection = 1
			}
			"vertical" != d && (b.slideHandler(c), b.touchObject = {}, b.$slider.trigger("swipe", [b, d]))
		} else b.touchObject.startX !== b.touchObject.curX && (b.slideHandler(b.currentSlide), b.touchObject = {})
	}, b.prototype.swipeHandler = function (a) {
		var b = this;
		if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))) switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold), a.data.action) {
			case"start":
				b.swipeStart(a);
				break;
			case"move":
				b.swipeMove(a);
				break;
			case"end":
				b.swipeEnd(a)
		}
	}, b.prototype.swipeMove = function (a) {
		var d, e, f, g, h, b = this;
		return h = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !b.dragging || h && 1 !== h.length ? !1 : (d = b.getLeft(b.currentSlide), b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX, b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY, b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))), b.options.verticalSwiping === !0 && (b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curY - b.touchObject.startY, 2)))), e = b.swipeDirection(), "vertical" !== e ? (void 0 !== a.originalEvent && b.touchObject.swipeLength > 4 && a.preventDefault(), g = (b.options.rtl === !1 ? 1 : -1) * (b.touchObject.curX > b.touchObject.startX ? 1 : -1), b.options.verticalSwiping === !0 && (g = b.touchObject.curY > b.touchObject.startY ? 1 : -1), f = b.touchObject.swipeLength, b.touchObject.edgeHit = !1, b.options.infinite === !1 && (0 === b.currentSlide && "right" === e || b.currentSlide >= b.getDotCount() && "left" === e) && (f = b.touchObject.swipeLength * b.options.edgeFriction, b.touchObject.edgeHit = !0), b.options.vertical === !1 ? b.swipeLeft = d + f * g : b.swipeLeft = d + f * (b.$list.height() / b.listWidth) * g, b.options.verticalSwiping === !0 && (b.swipeLeft = d + f * g), b.options.fade === !0 || b.options.touchMove === !1 ? !1 : b.animating === !0 ? (b.swipeLeft = null, !1) : void b.setCSS(b.swipeLeft)) : void 0)
	}, b.prototype.swipeStart = function (a) {
		var c, b = this;
		return b.interrupted = !0, 1 !== b.touchObject.fingerCount || b.slideCount <= b.options.slidesToShow ? (b.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (c = a.originalEvent.touches[0]), b.touchObject.startX = b.touchObject.curX = void 0 !== c ? c.pageX : a.clientX, b.touchObject.startY = b.touchObject.curY = void 0 !== c ? c.pageY : a.clientY, void(b.dragging = !0))
	}, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function () {
		var a = this;
		null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit())
	}, b.prototype.unload = function () {
		var b = this;
		a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(), b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
	}, b.prototype.unslick = function (a) {
		var b = this;
		b.$slider.trigger("unslick", [b, a]), b.destroy()
	}, b.prototype.updateArrows = function () {
		var b, a = this;
		b = Math.floor(a.options.slidesToShow / 2), a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && !a.options.infinite && (a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === a.currentSlide ? (a.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && a.options.centerMode === !1 ? (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - 1 && a.options.centerMode === !0 && (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
	}, b.prototype.updateDots = function () {
		var a = this;
		null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
	}, b.prototype.visibility = function () {
		var a = this;
		a.options.autoplay && (document[a.hidden] ? a.interrupted = !0 : a.interrupted = !1)
	}, a.fn.slick = function () {
		var f, g, a = this, c = arguments[0], d = Array.prototype.slice.call(arguments, 1), e = a.length;
		for (f = 0; e > f; f++) if ("object" == typeof c || "undefined" == typeof c ? a[f].slick = new b(a[f], c) : g = a[f].slick[c].apply(a[f].slick, d), "undefined" != typeof g) return g;
		return a
	}
});

$(document).ready(function () {
	$('.reviews').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true
	});
});
!function (a) {
	"function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function (a) {
	function b(a) {
		var b = document.createElement("input"), c = "on" + a, d = c in b;
		return d || (b.setAttribute(c, "return;"), d = "function" == typeof b[c]), b = null, d
	}

	function c(a) {
		var b = "text" == a || "tel" == a;
		if (!b) {
			var c = document.createElement("input");
			c.setAttribute("type", a), b = "text" === c.type, c = null
		}
		return b
	}

	function d(b, c, e) {
		var f = e.aliases[b];
		return f ? (f.alias && d(f.alias, void 0, e), a.extend(!0, e, f), a.extend(!0, e, c), !0) : !1
	}

	function e(b) {
		function c(c) {
			function d(a, b, c, d) {
				this.matches = [], this.isGroup = a || !1, this.isOptional = b || !1, this.isQuantifier = c || !1, this.isAlternator = d || !1, this.quantifier = {
					min: 1,
					max: 1
				}
			}

			function e(c, d, e) {
				var f = b.definitions[d], g = 0 == c.matches.length;
				if (e = void 0 != e ? e : c.matches.length, f && !m) {
					f.placeholder = a.isFunction(f.placeholder) ? f.placeholder.call(this, b) : f.placeholder;
					for (var h = f.prevalidator, i = h ? h.length : 0, j = 1; j < f.cardinality; j++) {
						var k = i >= j ? h[j - 1] : [], l = k.validator, n = k.cardinality;
						c.matches.splice(e++, 0, {
							fn: l ? "string" == typeof l ? new RegExp(l) : new function () {
								this.test = l
							} : new RegExp("."),
							cardinality: n ? n : 1,
							optionality: c.isOptional,
							newBlockMarker: g,
							casing: f.casing,
							def: f.definitionSymbol || d,
							placeholder: f.placeholder,
							mask: d
						})
					}
					c.matches.splice(e++, 0, {
						fn: f.validator ? "string" == typeof f.validator ? new RegExp(f.validator) : new function () {
							this.test = f.validator
						} : new RegExp("."),
						cardinality: f.cardinality,
						optionality: c.isOptional,
						newBlockMarker: g,
						casing: f.casing,
						def: f.definitionSymbol || d,
						placeholder: f.placeholder,
						mask: d
					})
				} else c.matches.splice(e++, 0, {
					fn: null,
					cardinality: 0,
					optionality: c.isOptional,
					newBlockMarker: g,
					casing: null,
					def: d,
					placeholder: void 0,
					mask: d
				}), m = !1
			}

			for (var f, g, h, i, j, k, l = /(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})\??|[^.?*+^${[]()|\\]+|./g, m = !1, n = new d, o = [], p = []; f = l.exec(c);) switch (g = f[0], g.charAt(0)) {
				case b.optionalmarker.end:
				case b.groupmarker.end:
					if (h = o.pop(), o.length > 0) {
						if (i = o[o.length - 1], i.matches.push(h), i.isAlternator) {
							j = o.pop();
							for (var q = 0; q < j.matches.length; q++) j.matches[q].isGroup = !1;
							o.length > 0 ? (i = o[o.length - 1], i.matches.push(j)) : n.matches.push(j)
						}
					} else n.matches.push(h);
					break;
				case b.optionalmarker.start:
					o.push(new d(!1, !0));
					break;
				case b.groupmarker.start:
					o.push(new d(!0));
					break;
				case b.quantifiermarker.start:
					var r = new d(!1, !1, !0);
					g = g.replace(/[{}]/g, "");
					var s = g.split(","), t = isNaN(s[0]) ? s[0] : parseInt(s[0]),
						u = 1 == s.length ? t : isNaN(s[1]) ? s[1] : parseInt(s[1]);
					if (("*" == u || "+" == u) && (t = "*" == u ? 0 : 1), r.quantifier = {
						min: t,
						max: u
					}, o.length > 0) {
						var v = o[o.length - 1].matches;
						if (f = v.pop(), !f.isGroup) {
							var w = new d(!0);
							w.matches.push(f), f = w
						}
						v.push(f), v.push(r)
					} else {
						if (f = n.matches.pop(), !f.isGroup) {
							var w = new d(!0);
							w.matches.push(f), f = w
						}
						n.matches.push(f), n.matches.push(r)
					}
					break;
				case b.escapeChar:
					m = !0;
					break;
				case b.alternatormarker:
					o.length > 0 ? (i = o[o.length - 1], k = i.matches.pop()) : k = n.matches.pop(), k.isAlternator ? o.push(k) : (j = new d(!1, !1, !1, !0), j.matches.push(k), o.push(j));
					break;
				default:
					if (o.length > 0) {
						if (i = o[o.length - 1], i.matches.length > 0 && (k = i.matches[i.matches.length - 1], k.isGroup && (k.isGroup = !1, e(k, b.groupmarker.start, 0), e(k, b.groupmarker.end))), e(i, g), i.isAlternator) {
							j = o.pop();
							for (var q = 0; q < j.matches.length; q++) j.matches[q].isGroup = !1;
							o.length > 0 ? (i = o[o.length - 1], i.matches.push(j)) : n.matches.push(j)
						}
					} else n.matches.length > 0 && (k = n.matches[n.matches.length - 1], k.isGroup && (k.isGroup = !1, e(k, b.groupmarker.start, 0), e(k, b.groupmarker.end))), e(n, g)
			}
			return n.matches.length > 0 && (k = n.matches[n.matches.length - 1], k.isGroup && (k.isGroup = !1, e(k, b.groupmarker.start, 0), e(k, b.groupmarker.end)), p.push(n)), p
		}

		function d(d, e) {
			if (void 0 == d || "" == d) return void 0;
			if (1 == d.length && 0 == b.greedy && 0 != b.repeat && (b.placeholder = ""), b.repeat > 0 || "*" == b.repeat || "+" == b.repeat) {
				var f = "*" == b.repeat ? 0 : "+" == b.repeat ? 1 : b.repeat;
				d = b.groupmarker.start + d + b.groupmarker.end + b.quantifiermarker.start + f + "," + b.repeat + b.quantifiermarker.end
			}
			return void 0 == a.inputmask.masksCache[d] && (a.inputmask.masksCache[d] = {
				mask: d,
				maskToken: c(d),
				validPositions: {},
				_buffer: void 0,
				buffer: void 0,
				tests: {},
				metadata: e
			}), a.extend(!0, {}, a.inputmask.masksCache[d])
		}

		function e(a) {
			if (a = a.toString(), b.numericInput) {
				a = a.split("").reverse();
				for (var c = 0; c < a.length; c++) a[c] == b.optionalmarker.start ? a[c] = b.optionalmarker.end : a[c] == b.optionalmarker.end ? a[c] = b.optionalmarker.start : a[c] == b.groupmarker.start ? a[c] = b.groupmarker.end : a[c] == b.groupmarker.end && (a[c] = b.groupmarker.start);
				a = a.join("")
			}
			return a
		}

		var f = void 0;
		if (a.isFunction(b.mask) && (b.mask = b.mask.call(this, b)), a.isArray(b.mask)) {
			if (b.mask.length > 1) {
				b.keepStatic = void 0 == b.keepStatic ? !0 : b.keepStatic;
				var g = "(";
				return a.each(b.mask, function (b, c) {
					g.length > 1 && (g += ")|("), g += e(void 0 == c.mask || a.isFunction(c.mask) ? c : c.mask)
				}), g += ")", d(g, b.mask)
			}
			b.mask = b.mask.pop()
		}
		return b.mask && (f = void 0 == b.mask.mask || a.isFunction(b.mask.mask) ? d(e(b.mask), b.mask) : d(e(b.mask.mask), b.mask)), f
	}

	function f(d, e, f) {
		function g(a, b, c) {
			b = b || 0;
			var d, e, f, g = [], h = 0;
			do {
				if (a === !0 && k().validPositions[h]) {
					var i = k().validPositions[h];
					e = i.match, d = i.locator.slice(), g.push(c === !0 ? i.input : F(h, e))
				} else f = p(h, d, h - 1), e = f.match, d = f.locator.slice(), g.push(F(h, e));
				h++
			} while ((void 0 == cb || cb > h - 1) && null != e.fn || null == e.fn && "" != e.def || b >= h);
			return g.pop(), g
		}

		function k() {
			return e
		}

		function l(a) {
			var b = k();
			b.buffer = void 0, b.tests = {}, a !== !0 && (b._buffer = void 0, b.validPositions = {}, b.p = 0)
		}

		function m(a) {
			var b = k(), c = -1, d = b.validPositions;
			void 0 == a && (a = -1);
			var e = c, f = c;
			for (var g in d) {
				var h = parseInt(g);
				(-1 == a || null != d[h].match.fn) && (a >= h && (e = h), h >= a && (f = h))
			}
			return c = -1 != e && a - e > 1 || a > f ? e : f
		}

		function n(b, c, d) {
			if (f.insertMode && void 0 != k().validPositions[b] && void 0 == d) {
				var e, g = a.extend(!0, {}, k().validPositions), h = m();
				for (e = b; h >= e; e++) delete k().validPositions[e];
				k().validPositions[b] = c;
				var i, j = !0;
				for (e = b; h >= e; e++) {
					var l = g[e];
					if (void 0 != l) {
						var n = k().validPositions;
						i = !f.keepStatic && n[e] && (void 0 != n[e + 1] && s(e + 1, n[e].locator.slice(), e).length > 1 || void 0 != n[e].alternation) ? e + 1 : B(e), j = r(i, l.match.def) ? j && y(i, l.input, !0, !0) !== !1 : null == l.match.fn
					}
					if (!j) break
				}
				if (!j) return k().validPositions = a.extend(!0, {}, g), !1
			} else k().validPositions[b] = c;
			return !0
		}

		function o(a, b, c, d) {
			var e, g = a;
			k().p = a, void 0 != k().validPositions[a] && k().validPositions[a].input == f.radixPoint && (b++, g++);
			for (e = g; b > e; e++) void 0 != k().validPositions[e] && (c === !0 || 0 != f.canClearPosition(k(), e, m(), d, f)) && delete k().validPositions[e];
			for (l(!0), e = g + 1; e <= m();) {
				for (; void 0 != k().validPositions[g];) g++;
				var h = k().validPositions[g];
				g > e && (e = g + 1);
				var i = k().validPositions[e];
				void 0 != i && void 0 == h ? (r(g, i.match.def) && y(g, i.input, !0) !== !1 && (delete k().validPositions[e], e++), g++) : e++
			}
			var j = m();
			j >= a && void 0 != k().validPositions[j] && k().validPositions[j].input == f.radixPoint && delete k().validPositions[j], l(!0)
		}

		function p(a, b, c) {
			for (var d, e = s(a, b, c), g = m(), h = k().validPositions[g] || s(0)[0], i = void 0 != h.alternation ? h.locator[h.alternation].split(",") : [], j = 0; j < e.length && (d = e[j], !(d.match && (f.greedy && d.match.optionalQuantifier !== !0 || (d.match.optionality === !1 || d.match.newBlockMarker === !1) && d.match.optionalQuantifier !== !0) && (void 0 == h.alternation || void 0 != d.locator[h.alternation] && x(d.locator[h.alternation].toString().split(","), i)))); j++) ;
			return d
		}

		function q(a) {
			return k().validPositions[a] ? k().validPositions[a].match : s(a)[0].match
		}

		function r(a, b) {
			for (var c = !1, d = s(a), e = 0; e < d.length; e++) if (d[e].match && d[e].match.def == b) {
				c = !0;
				break
			}
			return c
		}

		function s(b, c, d) {
			function e(c, d, f, h) {
				function l(f, h, n) {
					if (g > 1e4) return alert("jquery.inputmask:There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + k().mask), !0;
					if (g == b && void 0 == f.matches) return i.push({match: f, locator: h.reverse()}), !0;
					if (void 0 != f.matches) {
						if (f.isGroup && n !== !0) {
							if (f = l(c.matches[m + 1], h)) return !0
						} else if (f.isOptional) {
							var o = f;
							if (f = e(f, d, h, n)) {
								var p = i[i.length - 1].match, q = 0 == a.inArray(p, o.matches);
								q && (j = !0), g = b
							}
						} else if (f.isAlternator) {
							var r, s = f, t = [], u = i.slice(), v = h.length, w = d.length > 0 ? d.shift() : -1;
							if (-1 == w || "string" == typeof w) {
								var x, y = g, z = d.slice();
								"string" == typeof w && (x = w.split(","));
								for (var A = 0; A < s.matches.length; A++) {
									i = [], f = l(s.matches[A], [A].concat(h), n) || f, r = i.slice(), g = y, i = [];
									for (var B = 0; B < z.length; B++) d[B] = z[B];
									for (var C = 0; C < r.length; C++) for (var D = r[C], E = 0; E < t.length; E++) {
										var F = t[E];
										if (D.match.mask == F.match.mask && ("string" != typeof w || -1 != a.inArray(D.locator[v].toString(), x))) {
											r.splice(C, 1), F.locator[v] = F.locator[v] + "," + D.locator[v], F.alternation = v;
											break
										}
									}
									t = t.concat(r)
								}
								"string" == typeof w && (t = a.map(t, function (b, c) {
									if (isFinite(c)) {
										var d, e = b.locator[v].toString().split(",");
										b.locator[v] = void 0, b.alternation = void 0;
										for (var f = 0; f < e.length; f++) d = -1 != a.inArray(e[f], x), d && (void 0 != b.locator[v] ? (b.locator[v] += ",", b.alternation = v, b.locator[v] += e[f]) : b.locator[v] = parseInt(e[f]));
										if (void 0 != b.locator[v]) return b
									}
								})), i = u.concat(t), j = !0
							} else f = l(s.matches[w], [w].concat(h), n);
							if (f) return !0
						} else if (f.isQuantifier && n !== !0) for (var G = f, H = d.length > 0 && n !== !0 ? d.shift() : 0; H < (isNaN(G.quantifier.max) ? H + 1 : G.quantifier.max) && b >= g; H++) {
							var I = c.matches[a.inArray(G, c.matches) - 1];
							if (f = l(I, [H].concat(h), !0)) {
								var p = i[i.length - 1].match;
								p.optionalQuantifier = H > G.quantifier.min - 1;
								var q = 0 == a.inArray(p, I.matches);
								if (q) {
									if (H > G.quantifier.min - 1) {
										j = !0, g = b;
										break
									}
									return !0
								}
								return !0
							}
						} else if (f = e(f, d, h, n)) return !0
					} else g++
				}

				for (var m = d.length > 0 ? d.shift() : 0; m < c.matches.length; m++) if (c.matches[m].isQuantifier !== !0) {
					var n = l(c.matches[m], [m].concat(f), h);
					if (n && g == b) return n;
					if (g > b) break
				}
			}

			var f = k().maskToken, g = c ? d : 0, h = c || [0], i = [], j = !1;
			if (void 0 == c) {
				for (var l, m = b - 1; void 0 == (l = k().validPositions[m]) && m > -1;) m--;
				if (void 0 != l && m > -1) g = m, h = l.locator.slice(); else {
					for (m = b - 1; void 0 == (l = k().tests[m]) && m > -1;) m--;
					void 0 != l && m > -1 && (g = m, h = l[0].locator.slice())
				}
			}
			for (var n = h.shift(); n < f.length; n++) {
				var o = e(f[n], h, [n]);
				if (o && g == b || g > b) break
			}
			return (0 == i.length || j) && i.push({
				match: {
					fn: null,
					cardinality: 0,
					optionality: !0,
					casing: null,
					def: ""
				}, locator: []
			}), k().tests[b] = a.extend(!0, [], i), k().tests[b]
		}

		function t() {
			return void 0 == k()._buffer && (k()._buffer = g(!1, 1)), k()._buffer
		}

		function u() {
			return void 0 == k().buffer && (k().buffer = g(!0, m(), !0)), k().buffer
		}

		function v(a, b, c) {
			if (c = c || u().slice(), a === !0) l(), a = 0, b = c.length; else for (var d = a; b > d; d++) delete k().validPositions[d], delete k().tests[d];
			for (var d = a; b > d; d++) c[d] != f.skipOptionalPartCharacter && y(d, c[d], !0, !0)
		}

		function w(a, b) {
			switch (b.casing) {
				case"upper":
					a = a.toUpperCase();
					break;
				case"lower":
					a = a.toLowerCase()
			}
			return a
		}

		function x(b, c) {
			for (var d = f.greedy ? c : c.slice(0, 1), e = !1, g = 0; g < b.length; g++) if (-1 != a.inArray(b[g], d)) {
				e = !0;
				break
			}
			return e
		}

		function y(b, c, d, e) {
			function g(b, c, d, e) {
				var g = !1;
				return a.each(s(b), function (h, i) {
					for (var j = i.match, p = c ? 1 : 0, q = "", r = (u(), j.cardinality); r > p; r--) q += D(b - (r - 1));
					if (c && (q += c), g = null != j.fn ? j.fn.test(q, k(), b, d, f) : c != j.def && c != f.skipOptionalPartCharacter || "" == j.def ? !1 : {
						c: j.def,
						pos: b
					}, g !== !1) {
						var s = void 0 != g.c ? g.c : c;
						s = s == f.skipOptionalPartCharacter && null === j.fn ? j.def : s;
						var t = b;
						if (void 0 != g.remove && o(g.remove, g.remove + 1, !0), g.refreshFromBuffer) {
							var x = g.refreshFromBuffer;
							if (d = !0, v(x === !0 ? x : x.start, x.end), void 0 == g.pos && void 0 == g.c) return g.pos = m(), !1;
							if (t = void 0 != g.pos ? g.pos : b, t != b) return g = a.extend(g, y(t, s, !0)), !1
						} else if (g !== !0 && void 0 != g.pos && g.pos != b && (t = g.pos, v(b, t), t != b)) return g = a.extend(g, y(t, s, !0)), !1;
						return 1 != g && void 0 == g.pos && void 0 == g.c ? !1 : (h > 0 && l(!0), n(t, a.extend({}, i, {input: w(s, j)}), e) || (g = !1), !1)
					}
				}), g
			}

			function h(b, c, d, e) {
				var g, h, i = a.extend(!0, {}, k().validPositions);
				for (g = m(); g >= 0; g--) if (k().validPositions[g] && void 0 != k().validPositions[g].alternation) {
					h = k().validPositions[g].alternation;
					break
				}
				if (void 0 != h) for (var j in k().validPositions) if (parseInt(j) > parseInt(g) && void 0 === k().validPositions[j].alternation) {
					for (var n = k().validPositions[j], o = n.locator[h], p = k().validPositions[g].locator[h].split(","), q = 0; q < p.length; q++) if (o < p[q]) {
						for (var r, s, t = j - 1; t >= 0; t--) if (r = k().validPositions[t], void 0 != r) {
							s = r.locator[h], r.locator[h] = p[q];
							break
						}
						if (o != r.locator[h]) {
							for (var v = u().slice(), w = j; w < m() + 1; w++) delete k().validPositions[w], delete k().tests[w];
							l(!0), f.keepStatic = !f.keepStatic;
							for (var w = j; w < v.length; w++) v[w] != f.skipOptionalPartCharacter && y(m() + 1, v[w], !1, !0);
							r.locator[h] = s;
							var x = y(b, c, d, e);
							if (f.keepStatic = !f.keepStatic, x) return x;
							l(), k().validPositions = a.extend(!0, {}, i)
						}
					}
					break
				}
				return !1
			}

			function i(b, c) {
				for (var d = k().validPositions[c], e = d.locator, f = e.length, g = b; c > g; g++) if (!z(g)) {
					var h = s(g), i = h[0], j = -1;
					a.each(h, function (a, b) {
						for (var c = 0; f > c; c++) b.locator[c] && x(b.locator[c].toString().split(","), e[c].toString().split(",")) && c > j && (j = c, i = b)
					}), n(g, a.extend({}, i, {input: i.match.def}), !0)
				}
			}

			d = d === !0;
			for (var j = u(), p = b - 1; p > -1 && !k().validPositions[p]; p--) ;
			for (p++; b > p; p++) void 0 == k().validPositions[p] && ((!z(p) || j[p] != F(p)) && s(p).length > 1 || j[p] == f.radixPoint || "0" == j[p] && a.inArray(f.radixPoint, j) < p) && g(p, j[p], !0);
			var q = b, r = !1, t = a.extend(!0, {}, k().validPositions);
			if (q < A() && (r = g(q, c, d, e), !d && r === !1)) {
				var C = k().validPositions[q];
				if (!C || null != C.match.fn || C.match.def != c && c != f.skipOptionalPartCharacter) {
					if ((f.insertMode || void 0 == k().validPositions[B(q)]) && !z(q)) for (var E = q + 1, G = B(q); G >= E; E++) if (r = g(E, c, d, e), r !== !1) {
						i(q, E), q = E;
						break
					}
				} else r = {caret: B(q)}
			}
			if (r === !1 && f.keepStatic && N(j) && (r = h(b, c, d, e)), r === !0 && (r = {pos: q}), a.isFunction(f.postValidation) && 0 != r && !d) {
				l(!0);
				var H = f.postValidation(u(), f);
				if (!H) return l(!0), k().validPositions = a.extend(!0, {}, t), !1
			}
			return r
		}

		function z(a) {
			var b = q(a);
			return null != b.fn ? b.fn : !1
		}

		function A() {
			var a;
			cb = bb.prop("maxLength"), -1 == cb && (cb = void 0);
			var b, c = m(), d = k().validPositions[c], e = void 0 != d ? d.locator.slice() : void 0;
			for (b = c + 1; void 0 == d || null != d.match.fn || null == d.match.fn && "" != d.match.def; b++) d = p(b, e, b - 1), e = d.locator.slice();
			return a = b, void 0 == cb || cb > a ? a : cb
		}

		function B(a) {
			var b = A();
			if (a >= b) return b;
			for (var c = a; ++c < b && !z(c) && (f.nojumps !== !0 || f.nojumpsThreshold > c);) ;
			return c
		}

		function C(a) {
			var b = a;
			if (0 >= b) return 0;
			for (; --b > 0 && !z(b);) ;
			return b
		}

		function D(a) {
			return void 0 == k().validPositions[a] ? F(a) : k().validPositions[a].input
		}

		function E(b, c, d, e, g) {
			if (e && a.isFunction(f.onBeforeWrite)) {
				var h = f.onBeforeWrite.call(b, e, c, d, f);
				if (h) {
					if (h.refreshFromBuffer) {
						var i = h.refreshFromBuffer;
						v(i === !0 ? i : i.start, i.end, h.buffer), l(!0), c = u()
					}
					d = h.caret || d
				}
			}
			b._valueSet(c.join("")), void 0 != d && K(b, d), g === !0 && (fb = !0, a(b).trigger("input"))
		}

		function F(a, b) {
			return b = b || q(a), void 0 != b.placeholder ? b.placeholder : null == b.fn ? b.def : f.placeholder.charAt(a % f.placeholder.length)
		}

		function G(b, c, d, e) {
			function f() {
				var a = !1, b = t().slice(i, B(i)).join("").indexOf(h);
				if (-1 != b && !z(i)) {
					a = !0;
					for (var c = t().slice(i, i + b), d = 0; d < c.length; d++) if (" " != c[d]) {
						a = !1;
						break
					}
				}
				return a
			}

			var g = void 0 != e ? e.slice() : b._valueGet().split(""), h = "", i = 0;
			l(), k().p = B(-1), c && b._valueSet("");
			var j = t().slice(0, B(-1)).join(""), n = g.join("").match(new RegExp(H(j), "g"));
			n && n.length > 0 && (g.splice(0, n.length * j.length), i = B(i)), a.each(g, function (c, e) {
				var g = a.Event("keypress");
				g.which = e.charCodeAt(0), h += e;
				var j = m(), l = k().validPositions[j], n = p(j + 1, l ? l.locator.slice() : void 0, j);
				if (!f() || d) {
					var o = d ? c : null == n.match.fn && n.match.optionality && j + 1 < k().p ? j + 1 : k().p;
					T.call(b, g, !0, !1, d, o), i = o + 1, h = ""
				} else T.call(b, g, !0, !1, !0, j + 1)
			}), c && E(b, u(), a(b).is(":focus") ? B(m(0)) : void 0, a.Event("checkval"))
		}

		function H(b) {
			return a.inputmask.escapeRegex.call(this, b)
		}

		function I(b) {
			if (b.data("_inputmask") && !b.hasClass("hasDatepicker")) {
				var c = [], d = k().validPositions;
				for (var e in d) d[e].match && null != d[e].match.fn && c.push(d[e].input);
				var g = (db ? c.reverse() : c).join(""), h = (db ? u().slice().reverse() : u()).join("");
				return a.isFunction(f.onUnMask) && (g = f.onUnMask.call(b, h, g, f) || g), g
			}
			return b[0]._valueGet()
		}

		function J(a) {
			if (db && "number" == typeof a && (!f.greedy || "" != f.placeholder)) {
				var b = u().length;
				a = b - a
			}
			return a
		}

		function K(b, c, d) {
			var e, g = b.jquery && b.length > 0 ? b[0] : b;
			if ("number" != typeof c) return g.setSelectionRange ? (c = g.selectionStart, d = g.selectionEnd) : document.selection && document.selection.createRange && (e = document.selection.createRange(), c = 0 - e.duplicate().moveStart("character", -1e5), d = c + e.text.length), {
				begin: J(c),
				end: J(d)
			};
			if (c = J(c), d = J(d), d = "number" == typeof d ? d : c, a(g).is(":visible")) {
				var h = a(g).css("font-size").replace("px", "") * d;
				g.scrollLeft = h > g.scrollWidth ? h : 0, 0 == f.insertMode && c == d && d++, g.setSelectionRange ? (g.selectionStart = c, g.selectionEnd = d) : g.createTextRange && (e = g.createTextRange(), e.collapse(!0), e.moveEnd("character", d), e.moveStart("character", c), e.select())
			}
		}

		function L(b) {
			var c, d, e = u(), f = e.length, g = m(), h = {}, i = k().validPositions[g],
				j = void 0 != i ? i.locator.slice() : void 0;
			for (c = g + 1; c < e.length; c++) d = p(c, j, c - 1), j = d.locator.slice(), h[c] = a.extend(!0, {}, d);
			var l = i && void 0 != i.alternation ? i.locator[i.alternation].split(",") : [];
			for (c = f - 1; c > g && (d = h[c].match, (d.optionality || d.optionalQuantifier || i && void 0 != i.alternation && void 0 != h[c].locator[i.alternation] && -1 != a.inArray(h[c].locator[i.alternation].toString(), l)) && e[c] == F(c, d)); c--) f--;
			return b ? {l: f, def: h[f] ? h[f].match : void 0} : f
		}

		function M(a) {
			for (var b = L(), c = a.length - 1; c > b && !z(c); c--) ;
			a.splice(b, c + 1 - b)
		}

		function N(b) {
			if (a.isFunction(f.isComplete)) return f.isComplete.call(bb, b, f);
			if ("*" == f.repeat) return void 0;
			{
				var c = !1, d = L(!0), e = C(d.l);
				m()
			}
			if (void 0 == d.def || d.def.newBlockMarker || d.def.optionalQuantifier) {
				c = !0;
				for (var g = 0; e >= g; g++) {
					var h = z(g), i = q(g);
					if (h && void 0 == k().validPositions[g] && i.optionality !== !0 && i.optionalQuantifier !== !0 || !h && b[g] != F(g)) {
						c = !1;
						break
					}
				}
			}
			return c
		}

		function O(a, b) {
			return db ? a - b > 1 || a - b == 1 && f.insertMode : b - a > 1 || b - a == 1 && f.insertMode
		}

		function P(b) {
			var c = a._data(b).events;
			a.each(c, function (b, c) {
				a.each(c, function (a, b) {
					if ("inputmask" == b.namespace && "setvalue" != b.type) {
						var c = b.handler;
						b.handler = function (a) {
							if (!this.disabled && (!this.readOnly || "keydown" == a.type && a.ctrlKey && 67 == a.keyCode)) {
								switch (a.type) {
									case"input":
										if (fb === !0) return fb = !1, a.preventDefault();
										break;
									case"keydown":
										eb = !1;
										break;
									case"keypress":
										if (eb === !0) return a.preventDefault();
										eb = !0;
										break;
									case"compositionstart":
										break;
									case"compositionupdate":
										fb = !0;
										break;
									case"compositionend":
								}
								return c.apply(this, arguments)
							}
							a.preventDefault()
						}
					}
				})
			})
		}

		function Q(b) {
			function c(b) {
				if (void 0 == a.valHooks[b] || 1 != a.valHooks[b].inputmaskpatch) {
					var c = a.valHooks[b] && a.valHooks[b].get ? a.valHooks[b].get : function (a) {
						return a.value
					}, d = a.valHooks[b] && a.valHooks[b].set ? a.valHooks[b].set : function (a, b) {
						return a.value = b, a
					};
					a.valHooks[b] = {
						get: function (b) {
							var d = a(b);
							if (d.data("_inputmask")) {
								if (d.data("_inputmask").opts.autoUnmask) return d.inputmask("unmaskedvalue");
								var e = c(b), f = d.data("_inputmask"), g = f.maskset, h = g._buffer;
								return h = h ? h.join("") : "", e != h ? e : ""
							}
							return c(b)
						}, set: function (b, c) {
							var e, f = a(b), g = f.data("_inputmask");
							return g ? (e = d(b, a.isFunction(g.opts.onBeforeMask) ? g.opts.onBeforeMask.call(mb, c, g.opts) || c : c), f.triggerHandler("setvalue.inputmask")) : e = d(b, c), e
						}, inputmaskpatch: !0
					}
				}
			}

			function d() {
				var b = a(this), c = a(this).data("_inputmask");
				return c ? c.opts.autoUnmask ? b.inputmask("unmaskedvalue") : h.call(this) != t().join("") ? h.call(this) : "" : h.call(this)
			}

			function e(b) {
				var c = a(this).data("_inputmask");
				c ? (i.call(this, a.isFunction(c.opts.onBeforeMask) ? c.opts.onBeforeMask.call(mb, b, c.opts) || b : b), a(this).triggerHandler("setvalue.inputmask")) : i.call(this, b)
			}

			function g(b) {
				a(b).bind("mouseenter.inputmask", function () {
					var b = a(this), c = this, d = c._valueGet();
					"" != d && d != u().join("") && (this._valueSet(a.isFunction(f.onBeforeMask) ? f.onBeforeMask.call(mb, d, f) || d : d), b.triggerHandler("setvalue.inputmask"))
				});//!! the bound handlers are executed in the order they where bound
				var c = a._data(b).events, d = c.mouseover;
				if (d) {
					for (var e = d[d.length - 1], g = d.length - 1; g > 0; g--) d[g] = d[g - 1];
					d[0] = e
				}
			}

			var h, i;
			if (!b._valueGet) {
				if (Object.getOwnPropertyDescriptor) {
					Object.getOwnPropertyDescriptor(b, "value")
				}
				document.__lookupGetter__ && b.__lookupGetter__("value") ? (h = b.__lookupGetter__("value"), i = b.__lookupSetter__("value"), b.__defineGetter__("value", d), b.__defineSetter__("value", e)) : (h = function () {
					return b.value
				}, i = function (a) {
					b.value = a
				}, c(b.type), g(b)), b._valueGet = function (a) {
					return db && a !== !0 ? h.call(this).split("").reverse().join("") : h.call(this)
				}, b._valueSet = function (a) {
					i.call(this, db ? a.split("").reverse().join("") : a)
				}
			}
		}

		function R(b, c, d, e) {
			function g() {
				if (f.keepStatic) {
					l(!0);
					var c, d = [];
					for (c = m(); c >= 0; c--) if (k().validPositions[c]) {
						if (void 0 != k().validPositions[c].alternation) break;
						d.push(k().validPositions[c].input), delete k().validPositions[c]
					}
					if (c > 0) for (; d.length > 0;) {
						k().p = B(m());
						var e = a.Event("keypress");
						e.which = d.pop().charCodeAt(0), T.call(b, e, !0, !1, !1, k().p)
					}
				}
			}

			if ((f.numericInput || db) && (c == a.inputmask.keyCode.BACKSPACE ? c = a.inputmask.keyCode.DELETE : c == a.inputmask.keyCode.DELETE && (c = a.inputmask.keyCode.BACKSPACE), db)) {
				var h = d.end;
				d.end = d.begin, d.begin = h
			}
			if (c == a.inputmask.keyCode.BACKSPACE && (d.end - d.begin < 1 || 0 == f.insertMode) ? d.begin = C(d.begin) : c == a.inputmask.keyCode.DELETE && d.begin == d.end && (d.end = z(d.end) ? d.end + 1 : B(d.end) + 1), o(d.begin, d.end, !1, e), e !== !0) {
				g();
				var i = m(d.begin);
				i < d.begin ? (-1 == i && l(), k().p = B(i)) : k().p = d.begin
			}
		}

		function S(c) {
			var d = this, e = a(d), g = c.keyCode, i = K(d);
			g == a.inputmask.keyCode.BACKSPACE || g == a.inputmask.keyCode.DELETE || h && 127 == g || c.ctrlKey && 88 == g && !b("cut") ? (c.preventDefault(), 88 == g && ($ = u().join("")), R(d, g, i), E(d, u(), k().p, c, $ != u().join("")), d._valueGet() == t().join("") ? e.trigger("cleared") : N(u()) === !0 && e.trigger("complete"), f.showTooltip && e.prop("title", k().mask)) : g == a.inputmask.keyCode.END || g == a.inputmask.keyCode.PAGE_DOWN ? setTimeout(function () {
				var a = B(m());
				f.insertMode || a != A() || c.shiftKey || a--, K(d, c.shiftKey ? i.begin : a, a)
			}, 0) : g == a.inputmask.keyCode.HOME && !c.shiftKey || g == a.inputmask.keyCode.PAGE_UP ? K(d, 0, c.shiftKey ? i.begin : 0) : (f.undoOnEscape && g == a.inputmask.keyCode.ESCAPE || 90 == g && c.ctrlKey) && c.altKey !== !0 ? (G(d, !0, !1, $.split("")), e.click()) : g != a.inputmask.keyCode.INSERT || c.shiftKey || c.ctrlKey ? 0 != f.insertMode || c.shiftKey || (g == a.inputmask.keyCode.RIGHT ? setTimeout(function () {
				var a = K(d);
				K(d, a.begin)
			}, 0) : g == a.inputmask.keyCode.LEFT && setTimeout(function () {
				var a = K(d);
				K(d, db ? a.begin + 1 : a.begin - 1)
			}, 0)) : (f.insertMode = !f.insertMode, K(d, f.insertMode || i.begin != A() ? i.begin : i.begin - 1)), f.onKeyDown.call(this, c, u(), K(d).begin, f), gb = -1 != a.inArray(g, f.ignorables)
		}

		function T(b, c, d, e, g) {
			var h = this, i = a(h), j = b.which || b.charCode || b.keyCode;
			if (!(c === !0 || b.ctrlKey && b.altKey) && (b.ctrlKey || b.metaKey || gb)) return !0;
			if (j) {
				46 == j && 0 == b.shiftKey && "," == f.radixPoint && (j = 44);
				var m, o = c ? {begin: g, end: g} : K(h), p = String.fromCharCode(j), q = O(o.begin, o.end);
				q && (k().undoPositions = a.extend(!0, {}, k().validPositions), R(h, a.inputmask.keyCode.DELETE, o, !0), o.begin = k().p, f.insertMode || (f.insertMode = !f.insertMode, n(o.begin, e), f.insertMode = !f.insertMode), q = !f.multi), k().writeOutBuffer = !0;
				var r = db && !q ? o.end : o.begin, t = y(r, p, e);
				if (t !== !1) {
					if (t !== !0 && (r = void 0 != t.pos ? t.pos : r, p = void 0 != t.c ? t.c : p), l(!0), void 0 != t.caret) m = t.caret; else {
						var w = k().validPositions;
						m = !f.keepStatic && (void 0 != w[r + 1] && s(r + 1, w[r].locator.slice(), r).length > 1 || void 0 != w[r].alternation) ? r + 1 : B(r)
					}
					k().p = m
				}
				if (d !== !1) {
					var x = this;
					if (setTimeout(function () {
						f.onKeyValidation.call(x, t, f)
					}, 0), k().writeOutBuffer && t !== !1) {
						var z = u();
						E(h, z, c ? void 0 : f.numericInput ? C(m) : m, b, c !== !0), c !== !0 && setTimeout(function () {
							N(z) === !0 && i.trigger("complete")
						}, 0)
					} else q && (k().buffer = void 0, k().validPositions = k().undoPositions)
				} else q && (k().buffer = void 0, k().validPositions = k().undoPositions);
				if (f.showTooltip && i.prop("title", k().mask), c && a.isFunction(f.onBeforeWrite)) {
					var A = f.onBeforeWrite.call(this, b, u(), m, f);
					if (A && A.refreshFromBuffer) {
						var D = A.refreshFromBuffer;
						v(D === !0 ? D : D.start, D.end, A.buffer), l(!0), A.caret && (k().p = A.caret)
					}
				}
				b.preventDefault()
			}
		}

		function U(b) {
			var c = this, d = a(c), e = c._valueGet(!0), g = K(c);
			if ("propertychange" == b.type && c._valueGet().length <= A()) return !0;
			if ("paste" == b.type) {
				var h = e.substr(0, g.begin), i = e.substr(g.end, e.length);
				h == t().slice(0, g.begin).join("") && (h = ""), i == t().slice(g.end).join("") && (i = ""), window.clipboardData && window.clipboardData.getData ? e = h + window.clipboardData.getData("Text") + i : b.originalEvent && b.originalEvent.clipboardData && b.originalEvent.clipboardData.getData && (e = h + b.originalEvent.clipboardData.getData("text/plain") + i)
			}
			var j = e;
			if (a.isFunction(f.onBeforePaste)) {
				if (j = f.onBeforePaste.call(c, e, f), j === !1) return b.preventDefault(), !1;
				j || (j = e)
			}
			return G(c, !0, !1, db ? j.split("").reverse() : j.split("")), d.click(), N(u()) === !0 && d.trigger("complete"), !1
		}

		function V(b) {
			var c = this;
			G(c, !0, !1), N(u()) === !0 && a(c).trigger("complete"), b.preventDefault()
		}

		function W(a) {
			var b = this;
			$ = u().join(""), ("" == ab || 0 != a.originalEvent.data.indexOf(ab)) && (_ = K(b))
		}

		function X(b) {
			var c = this, d = _ || K(c);
			0 == b.originalEvent.data.indexOf(ab) && (l(), d = {begin: 0, end: 0});
			var e = b.originalEvent.data;
			K(c, d.begin, d.end);
			for (var g = 0; g < e.length; g++) {
				var h = a.Event("keypress");
				h.which = e.charCodeAt(g), eb = !1, gb = !1, T.call(c, h)
			}
			setTimeout(function () {
				var a = k().p;
				E(c, u(), f.numericInput ? C(a) : a)
			}, 0), ab = b.originalEvent.data
		}

		function Y() {
		}

		function Z(b) {
			if (bb = a(b), bb.is(":input") && c(bb.attr("type"))) {
				if (bb.data("_inputmask", {
					maskset: e,
					opts: f,
					isRTL: !1
				}), f.showTooltip && bb.prop("title", k().mask), ("rtl" == b.dir || f.rightAlign) && bb.css("text-align", "right"), "rtl" == b.dir || f.numericInput) {
					b.dir = "ltr", bb.removeAttr("dir");
					var d = bb.data("_inputmask");
					d.isRTL = !0, bb.data("_inputmask", d), db = !0
				}
				bb.unbind(".inputmask"), bb.closest("form").bind("submit", function () {
					$ != u().join("") && bb.change(), bb[0]._valueGet && bb[0]._valueGet() == t().join("") && bb[0]._valueSet(""), f.removeMaskOnSubmit && bb.inputmask("remove")
				}).bind("reset", function () {
					setTimeout(function () {
						bb.triggerHandler("setvalue.inputmask")
					}, 0)
				}), bb.bind("mouseenter.inputmask", function () {
					var b = a(this), c = this;
					!b.is(":focus") && f.showMaskOnHover && c._valueGet() != u().join("") && E(c, u())
				}).bind("blur.inputmask", function (b) {
					var c = a(this), d = this;
					if (c.data("_inputmask")) {
						var e = d._valueGet(), g = u().slice();
						hb = !0, $ != g.join("") && setTimeout(function () {
							c.change(), $ = g.join("")
						}, 0), "" != e && (f.clearMaskOnLostFocus && (e == t().join("") ? g = [] : M(g)), N(g) === !1 && (c.trigger("incomplete"), f.clearIncomplete && (l(), g = f.clearMaskOnLostFocus ? [] : t().slice())), E(d, g, void 0, b))
					}
				}).bind("focus.inputmask", function () {
					var b = (a(this), this), c = b._valueGet();
					f.showMaskOnFocus && (!f.showMaskOnHover || f.showMaskOnHover && "" == c) && b._valueGet() != u().join("") && E(b, u(), B(m())), $ = u().join("")
				}).bind("mouseleave.inputmask", function () {
					var b = a(this), c = this;
					if (f.clearMaskOnLostFocus) {
						var d = u().slice(), e = c._valueGet();
						b.is(":focus") || e == b.attr("placeholder") || "" == e || (e == t().join("") ? d = [] : M(d), E(c, d))
					}
				}).bind("click.inputmask", function () {
					var b = a(this), c = this;
					if (b.is(":focus")) {
						var d = K(c);
						if (d.begin == d.end) if (f.radixFocus && "" != f.radixPoint && -1 != a.inArray(f.radixPoint, u()) && (hb || u().join("") == t().join(""))) K(c, a.inArray(f.radixPoint, u())), hb = !1; else {
							var e = db ? J(d.begin) : d.begin, g = B(m(e));
							g > e ? K(c, z(e) ? e : B(e)) : K(c, g)
						}
					}
				}).bind("dblclick.inputmask", function () {
					var a = this;
					setTimeout(function () {
						K(a, 0, B(m()))
					}, 0)
				}).bind(j + ".inputmask dragdrop.inputmask drop.inputmask", U).bind("setvalue.inputmask", function () {
					var a = this;
					G(a, !0, !1), $ = u().join(""), (f.clearMaskOnLostFocus || f.clearIncomplete) && a._valueGet() == t().join("") && a._valueSet("")
				}).bind("cut.inputmask", function (b) {
					fb = !0;
					var c = this, d = a(c), e = K(c);
					R(c, a.inputmask.keyCode.DELETE, e), E(c, u(), k().p, b, $ != u().join("")), c._valueGet() == t().join("") && d.trigger("cleared"), f.showTooltip && d.prop("title", k().mask)
				}).bind("complete.inputmask", f.oncomplete).bind("incomplete.inputmask", f.onincomplete).bind("cleared.inputmask", f.oncleared), bb.bind("keydown.inputmask", S).bind("keypress.inputmask", T), i || bb.bind("compositionstart.inputmask", W).bind("compositionupdate.inputmask", X).bind("compositionend.inputmask", Y), "paste" === j && bb.bind("input.inputmask", V), Q(b);
				var g = a.isFunction(f.onBeforeMask) ? f.onBeforeMask.call(b, b._valueGet(), f) || b._valueGet() : b._valueGet();
				G(b, !0, !1, g.split(""));
				var h = u().slice();
				$ = h.join("");
				var n;
				try {
					n = document.activeElement
				} catch (o) {
				}
				N(h) === !1 && f.clearIncomplete && l(), f.clearMaskOnLostFocus && (h.join("") == t().join("") ? h = [] : M(h)), E(b, h), n === b && K(b, B(m())), P(b)
			}
		}

		var $, _, ab, bb, cb, db = !1, eb = !1, fb = !1, gb = !1, hb = !0;
		if (void 0 != d) switch (d.action) {
			case"isComplete":
				return bb = a(d.el), e = bb.data("_inputmask").maskset, f = bb.data("_inputmask").opts, N(d.buffer);
			case"unmaskedvalue":
				return bb = d.$input, e = bb.data("_inputmask").maskset, f = bb.data("_inputmask").opts, db = d.$input.data("_inputmask").isRTL, I(d.$input);
			case"mask":
				$ = u().join(""), Z(d.el);
				break;
			case"format":
				bb = a({}), bb.data("_inputmask", {
					maskset: e,
					opts: f,
					isRTL: f.numericInput
				}), f.numericInput && (db = !0);
				var ib = (a.isFunction(f.onBeforeMask) ? f.onBeforeMask.call(bb, d.value, f) || d.value : d.value).split("");
				return G(bb, !1, !1, db ? ib.reverse() : ib), a.isFunction(f.onBeforeWrite) && f.onBeforeWrite.call(this, void 0, u(), 0, f), d.metadata ? {
					value: db ? u().slice().reverse().join("") : u().join(""),
					metadata: bb.inputmask("getmetadata")
				} : db ? u().slice().reverse().join("") : u().join("");
			case"isValid":
				bb = a({}), bb.data("_inputmask", {
					maskset: e,
					opts: f,
					isRTL: f.numericInput
				}), f.numericInput && (db = !0);
				var ib = d.value.split("");
				G(bb, !1, !0, db ? ib.reverse() : ib);
				for (var jb = u(), kb = L(), lb = jb.length - 1; lb > kb && !z(lb); lb--) ;
				return jb.splice(kb, lb + 1 - kb), N(jb) && d.value == jb.join("");
			case"getemptymask":
				return bb = a(d.el), e = bb.data("_inputmask").maskset, f = bb.data("_inputmask").opts, t();
			case"remove":
				var mb = d.el;
				bb = a(mb), e = bb.data("_inputmask").maskset, f = bb.data("_inputmask").opts, mb._valueSet(I(bb)), bb.unbind(".inputmask"), bb.removeData("_inputmask");
				var nb;
				Object.getOwnPropertyDescriptor && (nb = Object.getOwnPropertyDescriptor(mb, "value")), nb && nb.get ? mb._valueGet && Object.defineProperty(mb, "value", {
					get: mb._valueGet,
					set: mb._valueSet
				}) : document.__lookupGetter__ && mb.__lookupGetter__("value") && mb._valueGet && (mb.__defineGetter__("value", mb._valueGet), mb.__defineSetter__("value", mb._valueSet));
				try {
					delete mb._valueGet, delete mb._valueSet
				} catch (ob) {
					mb._valueGet = void 0, mb._valueSet = void 0
				}
				break;
			case"getmetadata":
				if (bb = a(d.el), e = bb.data("_inputmask").maskset, f = bb.data("_inputmask").opts, a.isArray(e.metadata)) {
					for (var pb, qb = m(), rb = qb; rb >= 0; rb--) if (k().validPositions[rb] && void 0 != k().validPositions[rb].alternation) {
						pb = k().validPositions[rb].alternation;
						break
					}
					return void 0 != pb ? e.metadata[k().validPositions[qb].locator[pb]] : e.metadata[0]
				}
				return e.metadata
		}
	}

	if (void 0 === a.fn.inputmask) {
		var g = navigator.userAgent, h = null !== g.match(new RegExp("iphone", "i")),
			i = (null !== g.match(new RegExp("android.*safari.*", "i")), null !== g.match(new RegExp("android.*chrome.*", "i")), null !== g.match(new RegExp("android.*firefox.*", "i"))),
			j = (/Kindle/i.test(g) || /Silk/i.test(g) || /KFTT/i.test(g) || /KFOT/i.test(g) || /KFJWA/i.test(g) || /KFJWI/i.test(g) || /KFSOWI/i.test(g) || /KFTHWA/i.test(g) || /KFTHWI/i.test(g) || /KFAPWA/i.test(g) || /KFAPWI/i.test(g), b("paste") ? "paste" : b("input") ? "input" : "propertychange");
		a.inputmask = {
			defaults: {
				placeholder: "_",
				optionalmarker: {start: "[", end: "]"},
				quantifiermarker: {start: "{", end: "}"},
				groupmarker: {start: "(", end: ")"},
				alternatormarker: "|",
				escapeChar: "\\",
				mask: null,
				oncomplete: a.noop,
				onincomplete: a.noop,
				oncleared: a.noop,
				repeat: 0,
				greedy: !0,
				autoUnmask: !1,
				removeMaskOnSubmit: !1,
				clearMaskOnLostFocus: !0,
				insertMode: !0,
				clearIncomplete: !1,
				aliases: {},
				alias: null,
				onKeyDown: a.noop,
				onBeforeMask: void 0,
				onBeforePaste: void 0,
				onBeforeWrite: void 0,
				onUnMask: void 0,
				showMaskOnFocus: !0,
				showMaskOnHover: !0,
				onKeyValidation: a.noop,
				skipOptionalPartCharacter: " ",
				showTooltip: !1,
				numericInput: !1,
				rightAlign: !1,
				undoOnEscape: !0,
				radixPoint: "",
				radixFocus: !1,
				nojumps: !1,
				nojumpsThreshold: 0,
				keepStatic: void 0,
				definitions: {
					9: {validator: "[0-9]", cardinality: 1, definitionSymbol: "*"},
					a: {
						validator: "[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
						cardinality: 1,
						definitionSymbol: "*"
					},
					"*": {validator: "[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]", cardinality: 1}
				},
				ignorables: [8, 9, 13, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123],
				isComplete: void 0,
				canClearPosition: a.noop,
				postValidation: void 0
			},
			keyCode: {
				ALT: 18,
				BACKSPACE: 8,
				CAPS_LOCK: 20,
				COMMA: 188,
				COMMAND: 91,
				COMMAND_LEFT: 91,
				COMMAND_RIGHT: 93,
				CONTROL: 17,
				DELETE: 46,
				DOWN: 40,
				END: 35,
				ENTER: 13,
				ESCAPE: 27,
				HOME: 36,
				INSERT: 45,
				LEFT: 37,
				MENU: 93,
				NUMPAD_ADD: 107,
				NUMPAD_DECIMAL: 110,
				NUMPAD_DIVIDE: 111,
				NUMPAD_ENTER: 108,
				NUMPAD_MULTIPLY: 106,
				NUMPAD_SUBTRACT: 109,
				PAGE_DOWN: 34,
				PAGE_UP: 33,
				PERIOD: 190,
				RIGHT: 39,
				SHIFT: 16,
				SPACE: 32,
				TAB: 9,
				UP: 38,
				WINDOWS: 91
			},
			masksCache: {},
			escapeRegex: function (a) {
				var b = ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^"];
				return a.replace(new RegExp("(\\" + b.join("|\\") + ")", "gim"), "\\$1")
			},
			format: function (b, c, g) {
				var h = a.extend(!0, {}, a.inputmask.defaults, c);
				return d(h.alias, c, h), f({action: "format", value: b, metadata: g}, e(h), h)
			},
			isValid: function (b, c) {
				var g = a.extend(!0, {}, a.inputmask.defaults, c);
				return d(g.alias, c, g), f({action: "isValid", value: b}, e(g), g)
			}
		}, a.fn.inputmask = function (b, c) {
			function g(b, c, e) {
				var f = a(b);
				f.data("inputmask-alias") && d(f.data("inputmask-alias"), {}, c);
				for (var g in c) {
					var h = f.data("inputmask-" + g.toLowerCase());
					void 0 != h && ("mask" == g && 0 == h.indexOf("[") ? (c[g] = h.replace(/[\s[\]]/g, "").split("','"), c[g][0] = c[g][0].replace("'", ""), c[g][c[g].length - 1] = c[g][c[g].length - 1].replace("'", "")) : c[g] = "boolean" == typeof h ? h : h.toString(), e && (e[g] = c[g]))
				}
				return c
			}

			var h, i = a.extend(!0, {}, a.inputmask.defaults, c);
			if ("string" == typeof b) switch (b) {
				case"mask":
					return d(i.alias, c, i), h = e(i), void 0 == h ? this : this.each(function () {
						f({action: "mask", el: this}, a.extend(!0, {}, h), g(this, i))
					});
				case"unmaskedvalue":
					var j = a(this);
					return j.data("_inputmask") ? f({action: "unmaskedvalue", $input: j}) : j.val();
				case"remove":
					return this.each(function () {
						var b = a(this);
						b.data("_inputmask") && f({action: "remove", el: this})
					});
				case"getemptymask":
					return this.data("_inputmask") ? f({action: "getemptymask", el: this}) : "";
				case"hasMaskedValue":
					return this.data("_inputmask") ? !this.data("_inputmask").opts.autoUnmask : !1;
				case"isComplete":
					return this.data("_inputmask") ? f({
						action: "isComplete",
						buffer: this[0]._valueGet().split(""),
						el: this
					}) : !0;
				case"getmetadata":
					return this.data("_inputmask") ? f({action: "getmetadata", el: this}) : void 0;
				default:
					return d(i.alias, c, i), d(b, c, i) || (i.mask = b), h = e(i), void 0 == h ? this : this.each(function () {
						f({action: "mask", el: this}, a.extend(!0, {}, h), g(this, i))
					})
			} else {
				if ("object" == typeof b) return i = a.extend(!0, {}, a.inputmask.defaults, b), d(i.alias, b, i), h = e(i), void 0 == h ? this : this.each(function () {
					f({action: "mask", el: this}, a.extend(!0, {}, h), g(this, i))
				});
				if (void 0 == b) return this.each(function () {
					var b = a(this).attr("data-inputmask");
					if (b && "" != b) try {
						b = b.replace(new RegExp("'", "g"), '"');
						var e = a.parseJSON("{" + b + "}");
						a.extend(!0, e, c), i = a.extend(!0, {}, a.inputmask.defaults, e), i = g(this, i), d(i.alias, e, i), i.alias = void 0, a(this).inputmask("mask", i)
					} catch (f) {
					}
					if (a(this).attr("data-inputmask-mask") || a(this).attr("data-inputmask-alias")) {
						i = a.extend(!0, {}, a.inputmask.defaults, {});
						var h = {};
						i = g(this, i, h), d(i.alias, h, i), i.alias = void 0, a(this).inputmask("mask", i)
					}
				})
			}
		}
	}
	return a.fn.inputmask
});

$(document).ready(function () {
	if (window.location.href.indexOf("/ru/") > -1) {
		$('input[name="phone"]').inputmask("+79999999999", {
			"clearIncomplete": true
		}).attr('type', 'tel');

	} else {
		$('input[name="phone"]').inputmask("+389999999999", {
			"clearIncomplete": true
		}).attr('type', 'tel');
	}


});



var $page = $('html, body');
$('a[href*="#"]').click(function () {
	$page.animate({
		scrollTop: $($.attr(this, 'href')).offset().top
	}, 600);
	return false;
});

(function () {

	$(document).on("click", ".m1modal", function (event) {
		if (event.target != this) {
			return false;
		} else {
			$(".m1modal").hide();
			$("#overlay-exit-popup").hide();
		}
	}).on("click", ".close-exit, #overlay-exit-popup", function (event) {
		if (event.target != this) {
			return false;
		} else {
			$(".m1modal").hide();
			$("#overlay-exit-popup").hide();
		}
	}).on("keydown", function (key) {
		if (key.keyCode == 27) {
			$(".m1modal").hide();
			$("#overlay-exit-popup").hide();
		}
	}).on("click", ".m1modal > *", function (event) {
		event.stopPropagation();
		return true;
	});


	var comebacker = true;


	setTimeout(function () {


		$(document).mouseleave(function (e) {
			if ((e.clientY < 0) && comebacker) {
				comebacker = false;
				var modalWindow = $("#exit-form");
				modalWindow.show();
				$("#overlay-exit-popup").show();
				return false;
			}
		});


	}, 3000);
}());