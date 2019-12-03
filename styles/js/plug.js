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
      window.onYouTubeIframeAPIReady = function() {
       for (var e, o, t = y.getTagsAsArray("iframe").concat(y.getTagsAsArray("embed")), n = 0; n < t.length; n++) {
        if (e = t[n], o = void 0, -1 < (o = e.src || "").indexOf("youtube.com/embed/") || -1 < o.indexOf("youtube.com/v/")) u(a(t[n]))
       }
       v(document).load(function() {
        var e = evt.target || evt.srcElement,
         o = checkIfYouTubeVideo(e);
        "IFRAME" === e.tagName && o && s(e.src) && c(e.src) && u(e)
       })
      }
     },
     initVimeoAPI: function() {
      v(document).ready(function() {
       for (var e = y.getTagsAsArray("iframe").concat(y.getTagsAsArray("embed")), o = 0; o < e.length; o++)
        if (-1 < (e[o].src || "").indexOf("player.vimeo.com/video/")) {
         var t = new Vimeo.Player(e[o]);
         t.getDuration().then(function(e) {
          t.pysMarks = l(e)
         }), t.getVideoTitle().then(function(e) {
          t.pysVideoTitle = e
         }), t.getVideoId().then(function(e) {
          t.pysVideoId = e
         }), t.pysCompletedMarks = {}, t.on("play", function() {
          if (!this.pysTimer) {
           clearInterval(this.pysTimer);
           var e = this;
           this.pysTimer = setInterval(function() {
            var n;
            (n = e).getCurrentTime().then(function(e) {
             for (var o in n.pysMarks)
              if (n.pysMarks[o] <= e && !n.pysCompletedMarks[o]) {
               n.pysCompletedMarks[o] = !0, "0%" === o && (o = "play");
               var t = {
                video_type: "vimeo",
                video_id: n.pysVideoId,
                video_title: n.pysVideoTitle,
                event_trigger: o
               };
               g.onWatchVideo(t), w.onWatchVideo(t), h.onWatchVideo(t), d.onWatchVideo(t)
              }
            })
           }, 1e3)
          }
         }), t.on("pause", function() {
          clearInterval(this.pysTimer), this.pysTimer = !1
         }), t.on("ended", function() {
          clearInterval(this.pysTimer), this.pysTimer = !1
         })
        }
      })
     },
manageCookies: function() {
						try {
							var e = f();
							"direct" !== e ? Cookies.set("pysTrafficSource", e, {
								expires: .5
							}) : Cookies.remove("pysTrafficSource");
							var t = m();
							v.each(p, function(e, o) {
								void 0 === Cookies.get("pys_" + o) && t.hasOwnProperty(o) && Cookies.set("pys_" + o, t[o], {
									expires: .5
								})
							})
						} catch (e) {
							console.error(e)
						}
					},
initializeRequestParams: function() {
						n.traffic_source = f();
						var t = function() {
							try {
								var t = [],
									n = m();
								return v.each(p, function(e, o) {
									Cookies.get("pys_" + o) ? t[o] = Cookies.get("pys_" + o) : n.hasOwnProperty(o) && (t[o] = n[o])
								}), t
							} catch (e) {
								return console.error(e), []
							}
						}();
v.each(p, function(e, o) {
							o in t && (n[o] = t[o])
						});
						var e = new Date;
						n.event_day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][e.getDay()], n.event_month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][e.getMonth()], n.event_hour = ["00-01", "01-02", "02-03", "03-04", "04-05", "05-06", "06-07", "07-08", "08-09", "09-10", "10-11", "11-12", "12-13", "13-14", "14-15", "15-16", "16-17", "17-18", "18-19", "19-20", "20-21", "21-22", "22-23", "23-24"][e.getHours()]
					},
getRequestParams: function() {
						return n
					},
					getLinkExtension: function(e) {
						return 0 < (e = (e = (e = e.substring(0, -1 === e.indexOf("#") ? e.length : e.indexOf("#"))).substring(0, -1 === e.indexOf("?") ? e.length : e.indexOf("?"))).substring(e.lastIndexOf("/") + 1, e.length)).length && -1 !== e.indexOf(".") ? e = e.substring(e.indexOf(".") + 1) : ""
					},
					getLinkFilename: function(e) {
						return 0 < (e = (e = (e = e.substring(0, -1 === e.indexOf("#") ? e.length : e.indexOf("#"))).substring(0, -1 === e.indexOf("?") ? e.length : e.indexOf("?"))).substring(e.lastIndexOf("/") + 1, e.length)).length && -1 !== e.indexOf(".") ? e : ""
					},
					setupMouseOverClickEvents: function(e, o) {
						v(document).onFirst("mouseover", o.join(","), function() {
							if (v(this).hasClass("pys-mouse-over-" + e)) return !0;
							v(this).addClass("pys-mouse-over-" + e), y.fireDynamicEvent(e)
						})
					},
	setupCSSClickEvents: function(e, o) {
						v(document).onFirst("click", o.join(","), function() {
							y.fireDynamicEvent(e)
						})
					},
					setupURLClickEvents: function() {
						v("a[data-pys-event-id]").onFirst("click", function(e) {
							v(this).attr("data-pys-event-id").split(",").forEach(function(e) {
								e = parseInt(e), !1 === isNaN(e) && y.fireDynamicEvent(e)
							})
						})
					},
setupScrollPosEvents: function(t, e) {
						var n = {},
							a = v(document).height() - v(window).height();
						v.each(e, function(e, o) {
							o = a * o / 100, o = Math.round(o), n[o] = t
						}), v(document).scroll(function() {
							var t = v(window).scrollTop();
							v.each(n, function(e, o) {
								return t <= e || (null === o || (n[e] = null, void y.fireDynamicEvent(o)))
							})
						})
					},
	fireDynamicEvent: function(e) {
						if (i.dynamicEventsParams.hasOwnProperty(e)) {
							var o = {};
							i.dynamicEventsParams[e].hasOwnProperty("facebook") && (o = y.copyProperties(i.dynamicEventsParams[e].facebook, {}), g.fireEvent(o.name, {
								params: o.params
							})), i.dynamicEventsParams[e].hasOwnProperty("ga") && (o = y.copyProperties(i.dynamicEventsParams[e].ga, {}), w.fireEvent(o.action, {
								params: o.params
							})), i.dynamicEventsParams[e].hasOwnProperty("google_ads") && (o = y.copyProperties(i.dynamicEventsParams[e].google_ads, {}), h.fireEvent(o.action, {
								params: o.params,
								ids: o.ids
							})), i.dynamicEventsParams[e].hasOwnProperty("pinterest") && (o = y.copyProperties(i.dynamicEventsParams[e].pinterest, {}), d.fireEvent(o.name, {
								params: o.params
							}))
						}
					},
fireStaticEvents: function(a) {
						i.staticEvents.hasOwnProperty(a) && v.each(i.staticEvents[a], function(n, e) {
							v.each(e, function(e, o) {
								if (o.fired = o.fired || !1, !o.fired) {
									var t = !1;
									"facebook" === a ? t = g.fireEvent(n, o) : "ga" === a ? t = w.fireEvent(n, o) : "google_ads" === a ? t = h.fireEvent(n, o) : "pinterest" === a && (t = d.fireEvent(n, o)), o.fired = t
								}
							})
						})
					},
