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
