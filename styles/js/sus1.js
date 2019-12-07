-! function(e) {
	var n = !1;
if ("function" == typeof define && define.amd && (define(e), n = !0), "object" == typeof exports && (module.exports = e(), n = !0), !n) {
		 o = window.Cookies,
			t = window.Cookies = e();
		t.noConflict = function() {
			window.Cookies = o, t
		}
	}
