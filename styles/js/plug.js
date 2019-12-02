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

				function a(e) {
					var o = window.location,
						t = document.createElement("a");
					t.href = e.src, t.hostname = "www.youtube.com", t.protocol = o.protocol;
					var n = "/" === t.pathname.charAt(0) ? t.pathname : "/" + t.pathname;
					if (s(t.search) || (t.search = (0 < t.search.length ? t.search + "&" : "") + "enablejsapi=1"), !c(t.search) && -1 === o.hostname.indexOf("localhost")) {
						var a = o.port ? ":" + o.port : "",
							i = o.protocol + "%2F%2F" + o.hostname + a;
						t.search = t.search + "&origin=" + i
					}
					if ("application/x-shockwave-flash" === e.type) {
						var r = document.createElement("iframe");
						r.height = e.height, r.width = e.width, n = n.replace("/v/", "/embed/"), e.parentNode.parentNode.replaceChild(r, e.parentNode), e = r
					}
					return t.pathname = n, e.src !== t.href + t.hash && (e.src = t.href + t.hash), e
				}

				function u(o) {
					var e = YT.get(o.id);
					e || (e = new YT.Player(o, {})), void 0 === o.pauseFlag && (o.pauseFlag = !1, e.addEventListener("onStateChange", function(e) {
						! function(e, o) {
							var t = e.data,
								n = e.target,
								a = n.getVideoUrl().match(/[?&]v=([^&#]*)/)[1],
								i = n.getPlayerState(),
								r = l(n.getDuration());
							o.playTracker = o.playTracker || {}, i !== YT.PlayerState.PLAYING || o.timer ? (clearInterval(o.timer), o.timer = !1) : (clearInterval(o.timer), o.timer = setInterval(function() {
								! function(e, o, t) {
									var n = e.getCurrentTime();
									for (var a in e[t] = e[t] || {}, o)
										if (o[a] <= n && !e[t][a]) {
											e[t][a] = !0;
											var i = e.getVideoData();
											"0%" === a && (a = "play");
											var r = {
												video_type: "youtube",
												video_id: t,
												video_title: i.title,
												event_trigger: a
											};
											g.onWatchVideo(r), w.onWatchVideo(r), h.onWatchVideo(r), d.onWatchVideo(r)
										}
								}(n, r, o.videoId)
							}, 1e3));
							t === YT.PlayerState.PLAYING && (o.playTracker[a] = !0, o.videoId = a, o.pauseFlag = !1);
							if (!o.playTracker[o.videoId]) return;
							if (t === YT.PlayerState.PAUSED) {
								if (o.pauseFlag) return;
								o.pauseFlag = !0
							}
						}(e, o)
					}))
				}
		var p = ["utm_source", "utm_media", "utm_campaign", "utm_term", "utm_content"],
					n = [];

				function f() {
					try {
						var e = document.referrer.toString(),
							o = 0 === e.length,
							t = !o && 0 === e.indexOf(i.siteUrl),
							n = !o && !t,
							a = void 0 !== Cookies.get("pysTrafficSource") && Cookies.get("pysTrafficSource");
						return !1 === n ? a || "direct" : a && a === e ? a : e
					} catch (e) {
						return console.error(e), "direct"
					}
				}

				function m() {
					try {
						var o = {},
							t = [];
						return window.location.search.substr(1).split("&").forEach(function(e) {
							1 < (t = e.split("=")).length && (o[t[0]] = t[1])
						}), o
					} catch (e) {
						return console.error(e), {}
					}
				}
return {
					setupPinterestObject: function() {
						return d = window.pys.Pinterest || d
					},
copyProperties: function(e, o) {
						for (var t in e) o[t] = e[t];
						return o
					},
getTagsAsArray: function(e) {
						return [].slice.call(document.getElementsByTagName(e))
					},
initYouTubeAPI: function() {
						if (void 0 === window.YT) {
							var e = document.createElement("script");
							e.src = "//www.youtube.com/iframe_api";
							var o = document.getElementsByTagName("script")[0];
							o.parentNode.insertBefore(e, o)
						}
