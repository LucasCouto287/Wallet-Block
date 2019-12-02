Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
		value: function(e, o) {
			if (null == this) throw new TypeError('"this" is null or not defined');
			var t = Object(this),
				n = t.length >>> 0;
			if (0 === n) return !1;
			var a, i, r = 0 | o,
				d = Math.max(0 <= r ? r : n - Math.abs(r), 0);
			for (; d < n;) {
				if ((a = t[d]) === (i = e) || "number" == typeof a && "number" == typeof i && isNaN(a) && isNaN(i)) return !0;
				d++
			}
			return !1
		}
	}),
function(v, d) {
		d.debug && console.log("PYS:", d);
		var e = {
				isEnabled: function() {},
				disable: function() {},
				loadPixel: function() {},
				fireEvent: function(e, o) {
					return !1
				},
				onAdSenseEvent: function() {},
				onClickEvent: function(e) {},
				onWatchVideo: function(e) {},
				onCommentEvent: function() {},
				onFormEvent: function(e) {},
				onDownloadEvent: function(e) {},
				onWooAddToCartOnButtonEvent: function(e) {},
				onWooAddToCartOnSingleEvent: function(e, o, t, n, a) {},
				onWooRemoveFromCartEvent: function(e) {},
				onWooAffiliateEvent: function(e) {},
				onWooPayPalEvent: function() {},
				onEddAddToCartOnButtonEvent: function(e, o, t) {},
				onEddRemoveFromCartEvent: function(e) {}
			},
y = function(i) {
				var d = e,
					r = !1;

				function o() {
					i.gdpr.all_disabled_by_api || (i.gdpr.facebook_disabled_by_api || g.loadPixel(), i.gdpr.analytics_disabled_by_api || w.loadPixel(), i.gdpr.google_ads_disabled_by_api || h.loadPixel(), i.gdpr.pinterest_disabled_by_api || d.loadPixel())
				}

				function s(e) {
					return -1 < e.indexOf("enablejsapi")
				}

				function c(e) {
					return -1 < e.indexOf("origin")
				}

				function l(e) {
					for (var o = {}, t = [0, 10, 50, 90, 100], n = 0; n < t.length; n++) {
						var a = t[n],
							i = e * a / 100;
						100 === a && (i -= 1), o[a + "%"] = Math.floor(i)
					}
					return o
				}
