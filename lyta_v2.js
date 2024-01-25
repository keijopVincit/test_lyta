/*** lyta-adloader - 1.8.4 | Thu Jan 25 2024 08:58:54 GMT+0200 (Eastern European Standard Time) ***/
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/lazyload.min.js":
/*!********************************!*\
  !*** ./src/js/lazyload.min.js ***!
  \********************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _extends() {
  return (_extends = Object.assign || function (t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }).apply(this, arguments);
}
function _typeof(t) {
  return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
    return typeof t;
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  })(t);
}
!function (t, e) {
  "object" === ( false ? 0 : _typeof(exports)) && "undefined" != "object" ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(this, function () {
  "use strict";

  var t = "undefined" != typeof window,
    e = t && !("onscroll" in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),
    n = t && "IntersectionObserver" in window,
    o = t && "classList" in document.createElement("p"),
    r = {
      elements_selector: "img",
      container: e || t ? document : null,
      threshold: 300,
      thresholds: null,
      data_src: "src",
      data_srcset: "srcset",
      data_sizes: "sizes",
      data_bg: "bg",
      class_loading: "loading",
      class_loaded: "loaded",
      class_error: "error",
      load_delay: 0,
      auto_unobserve: !0,
      callback_enter: null,
      callback_exit: null,
      callback_reveal: null,
      callback_loaded: null,
      callback_error: null,
      callback_finish: null,
      use_native: !1
    },
    a = function (t, e) {
      var n,
        o = new t(e);
      try {
        n = new CustomEvent("LazyLoad::Initialized", {
          detail: {
            instance: o
          }
        });
      } catch (t) {
        (n = document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized", !1, !1, {
          instance: o
        });
      }
      window.dispatchEvent(n);
    };
  var i = function (t, e) {
      return t.getAttribute("data-" + e);
    },
    s = function (t, e, n) {
      var o = "data-" + e;
      null !== n ? t.setAttribute(o, n) : t.removeAttribute(o);
    },
    c = function (t) {
      return "true" === i(t, "was-processed");
    },
    l = function (t, e) {
      return s(t, "ll-timeout", e);
    },
    u = function (t) {
      return i(t, "ll-timeout");
    },
    d = function (t, e) {
      t && t(e);
    },
    f = function (t, e) {
      t._loadingCount += e, 0 === t._elements.length && 0 === t._loadingCount && d(t._settings.callback_finish);
    },
    _ = function (t) {
      for (var e, n = [], o = 0; e = t.children[o]; o += 1) "SOURCE" === e.tagName && n.push(e);
      return n;
    },
    v = function (t, e, n) {
      n && t.setAttribute(e, n);
    },
    g = function (t, e) {
      v(t, "sizes", i(t, e.data_sizes)), v(t, "srcset", i(t, e.data_srcset)), v(t, "src", i(t, e.data_src));
    },
    m = {
      IMG: function (t, e) {
        var n = t.parentNode;
        n && "PICTURE" === n.tagName && _(n).forEach(function (t) {
          g(t, e);
        });
        g(t, e);
      },
      IFRAME: function (t, e) {
        v(t, "src", i(t, e.data_src));
      },
      VIDEO: function (t, e) {
        _(t).forEach(function (t) {
          v(t, "src", i(t, e.data_src));
        }), v(t, "src", i(t, e.data_src)), t.load();
      }
    },
    b = function (t, e) {
      var n,
        o,
        r = e._settings,
        a = t.tagName,
        s = m[a];
      if (s) return s(t, r), f(e, 1), void (e._elements = (n = e._elements, o = t, n.filter(function (t) {
        return t !== o;
      })));
      !function (t, e) {
        var n = i(t, e.data_src),
          o = i(t, e.data_bg);
        n && (t.style.backgroundImage = 'url("'.concat(n, '")')), o && (t.style.backgroundImage = o);
      }(t, r);
    },
    h = function (t, e) {
      o ? t.classList.add(e) : t.className += (t.className ? " " : "") + e;
    },
    p = function (t, e, n) {
      t.addEventListener(e, n);
    },
    y = function (t, e, n) {
      t.removeEventListener(e, n);
    },
    E = function (t, e, n) {
      y(t, "load", e), y(t, "loadeddata", e), y(t, "error", n);
    },
    w = function (t, e, n) {
      var r = n._settings,
        a = e ? r.class_loaded : r.class_error,
        i = e ? r.callback_loaded : r.callback_error,
        s = t.target;
      !function (t, e) {
        o ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\s+)" + e + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "");
      }(s, r.class_loading), h(s, a), d(i, s), f(n, -1);
    },
    I = function (t, e) {
      var n = function n(r) {
          w(r, !0, e), E(t, n, o);
        },
        o = function o(r) {
          w(r, !1, e), E(t, n, o);
        };
      !function (t, e, n) {
        p(t, "load", e), p(t, "loadeddata", e), p(t, "error", n);
      }(t, n, o);
    },
    k = ["IMG", "IFRAME", "VIDEO"],
    A = function (t, e) {
      var n = e._observer;
      z(t, e), n && e._settings.auto_unobserve && n.unobserve(t);
    },
    L = function (t) {
      var e = u(t);
      e && (clearTimeout(e), l(t, null));
    },
    x = function (t, e) {
      var n = e._settings.load_delay,
        o = u(t);
      o || (o = setTimeout(function () {
        A(t, e), L(t);
      }, n), l(t, o));
    },
    z = function (t, e, n) {
      var o = e._settings;
      !n && c(t) || (k.indexOf(t.tagName) > -1 && (I(t, e), h(t, o.class_loading)), b(t, e), function (t) {
        s(t, "was-processed", "true");
      }(t), d(o.callback_reveal, t), d(o.callback_set, t));
    },
    O = function (t) {
      return !!n && (t._observer = new IntersectionObserver(function (e) {
        e.forEach(function (e) {
          return function (t) {
            return t.isIntersecting || t.intersectionRatio > 0;
          }(e) ? function (t, e) {
            var n = e._settings;
            d(n.callback_enter, t), n.load_delay ? x(t, e) : A(t, e);
          }(e.target, t) : function (t, e) {
            var n = e._settings;
            d(n.callback_exit, t), n.load_delay && L(t);
          }(e.target, t);
        });
      }, {
        root: (e = t._settings).container === document ? null : e.container,
        rootMargin: e.thresholds || e.threshold + "px"
      }), !0);
      var e;
    },
    N = ["IMG", "IFRAME"],
    C = function (t, e) {
      return function (t) {
        return t.filter(function (t) {
          return !c(t);
        });
      }((n = t || function (t) {
        return t.container.querySelectorAll(t.elements_selector);
      }(e), Array.prototype.slice.call(n)));
      var n;
    },
    M = function (t, e) {
      this._settings = function (t) {
        return _extends({}, r, t);
      }(t), this._loadingCount = 0, O(this), this.update(e);
    };
  return M.prototype = {
    update: function (t) {
      var n,
        o = this,
        r = this._settings;
      (this._elements = C(t, r), !e && this._observer) ? (function (t) {
        return t.use_native && "loading" in HTMLImageElement.prototype;
      }(r) && ((n = this)._elements.forEach(function (t) {
        -1 !== N.indexOf(t.tagName) && (t.setAttribute("loading", "lazy"), z(t, n));
      }), this._elements = C(t, r)), this._elements.forEach(function (t) {
        o._observer.observe(t);
      })) : this.loadAll();
    },
    destroy: function () {
      var t = this;
      this._observer && (this._elements.forEach(function (e) {
        t._observer.unobserve(e);
      }), this._observer = null), this._elements = null, this._settings = null;
    },
    load: function (t, e) {
      z(t, this, e);
    },
    loadAll: function () {
      var t = this;
      this._elements.forEach(function (e) {
        A(e, t);
      });
    }
  }, t && function (t, e) {
    if (e) if (e.length) for (var n, o = 0; n = e[o]; o += 1) a(t, n);else a(t, e);
  }(M, window.lazyLoadOptions), M;
});

/***/ }),

/***/ "./src/js/lyta.js":
/*!************************!*\
  !*** ./src/js/lyta.js ***!
  \************************/
/***/ (() => {

window.Lyta = function () {
  const FORMATID = 0;
  const ENABLED_FOR_CLIENT = 1;
  const ADUNIT_NAME = 2;
  const RESPONSIFY = 3;
  const DESKTOP_CONTENT_FORMAT_ID = 63814;
  const BOX_FORMAT_FORMAT_ID = 63002;
  const MOBILE_CONTENT_FORMAT_ID = BOX_FORMAT_FORMAT_ID;
  const DESKTOP_PARADE_ID = 63010;
  const MOBILE_PARADE_ID = 63009;
  const INTERSTITIAL_ADS = ['interstitiaali', 'mobiiliinterstitiaali'];
  const SPECIAL_ADS = ['erikoismainos', 'mobiilierikoismainos'];
  const TOP_ADS = ['ylaparaati', 'mobiiliylaparaati'];
  const OUT_OF_PAGE_ADS = [].concat(INTERSTITIAL_ADS, SPECIAL_ADS);
  const PRIORITY_ADS = OUT_OF_PAGE_ADS;
  const INTERSTITIAL_COOKIE = 'interstitial';
  const INTERSTITIAL_COOKIE_EXPIRY = 60 * 15; // 15 minutes
  const ELEMENT_FIT_THROTTLE = 50; // Element fit throttle in ms
  const AD_QUEUE_DELAY = 100; // Default delay for queued ads
  const LYTA_UPDATE_EVENT = 'Lyta::Update';
  const LYTA_THROTTLED_FIT_EVENT = 'Lyta::Fit';
  const TCF_READY_EVENT = 'Lyta::TCFReady';
  const LABEL_TIMEOUT = 500;
  const MAGGIO_APPLICATION_SITE = 'maggio-application';
  const BELOW_CONTENT_NAME = 'belowcontent';
  let Lyta = {};
  Lyta.initialized = false;
  Lyta.version = "1.8.4"; // Set by webpack.DefinePlugin

  // Integration functionality for Relevant Programmatic
  // To enable Relevant Programmatic on the page, use the following recipe:
  //
  // <script>
  //     var LytaConfig = {
  //         ...
  //         relevant: {
  //             enabled: true, // if not set to true, Relevant Programmatic will be bypassed
  //             scriptUrl: '[URL per site provided by Relevant]', // Relevant-script, can be loaded separately instead
  //             configId: '[ID per site provided by Relevant]',
  //             stdCall: true, // Needed for separate targeting per format (but might make ads load slower..)
  //         },
  //    ...
  var Relevant = {
    use: false,
    // Shorthand for LytaConfig.relevant.enabled
    config: (window.LytaConfig || {}).relevant || {},
    setupOptions: null,
    // sas.setup options
    queuedAds: [],
    // queued formats, later requested by Relevant.flushFormats()
    onNoAdCb: null,
    // noad-callback, set by Relevant.setOnNoad()
    init: function () {
      this.use = this.config.enabled;
      if (!this.use) {
        return;
      }
      if (this.config.scriptUrl) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = this.config.scriptUrl;
        document.head.appendChild(script);
      }
    },
    withRelevant: function (fn) {
      window.relevantDigital = window.relevantDigital || {};
      relevantDigital.cmd = relevantDigital.cmd || [];
      relevantDigital.cmd.push(fn);
    },
    setOnNoad: function (cb) {
      this.onNoAdCb = cb;
      if (!this.use) {
        sas.cmd.push(function () {
          sas.events.on("noad", cb);
        });
      }
    },
    setup: function (setupOptions) {
      this.setupOptions = setupOptions;
      if (!this.use) {
        sas.cmd.push(function () {
          sas.setup(setupOptions);
        });
      }
    },
    // Use callNow == true to make the call immediately when using Relevant - else
    // the format will be queued until Relevant.flushFormats() is called. Purpose is to
    // avoid multiple calls / auctions for formats that are requested simultaneously.
    callFormat: function (params, callNow) {
      if (this.use) {
        this.queuedAds.push(params);
        if (callNow) {
          this.flushFormats();
        }
      } else {
        sas.cmd.push(function () {
          sas.call("std", params);
        });
      }
    },
    // Triggers a Prebid auction + ad-request(s) for queued formats.
    flushFormats: function () {
      Lyta.group('Relevant: flushFormats ...');
      var formats = this.queuedAds.splice(0);
      Lyta.log(JSON.parse(JSON.stringify(formats)));
      if (!formats.length) {
        return;
      }
      var that = this;
      this.withRelevant(function () {
        // If LytaConfig.relevant.stdCall is NOT true, then Smart will be called using 'onecall' and
        // siteId / pageId / target will be copied from the first format (so they will be the same for all formats).
        var fst = formats[0];
        var allowedDivIds = formats.map(function (fmt) {
          var elm = document.getElementById(fmt.tagId);
          if (elm) {
            // The Relevant script is using the 'data-ad-unit-id' attribute to read the format-id
            // needed when div id is not on sas_??? format.
            elm.setAttribute('data-ad-unit-id', '' + fmt.formatId);
          }
          return fmt.tagId;
        });
        Lyta.log('Relevant: allowedDivIds');
        Lyta.log(JSON.parse(JSON.stringify(allowedDivIds)));
        relevantDigital.loadPrebid({
          sasOptions: {
            siteId: fst.siteId,
            pageId: fst.pageId,
            preloadSlots: false,
            autoRender: true,
            panicDisable: false,
            // set to true during Smart-downtimes to disable Smart-calls
            callParams: {
              target: fst.target || ''
            },
            callOptions: {
              getAdContent: true
            },
            setup: that.setupOptions,
            stdCall: that.config.stdCall ? formats : null,
            onLoad: function (data) {
              if (!data.hasAd && that.onNoAdCb) {
                that.onNoAdCb(data);
              }
            }
          },
          configId: that.config.configId,
          manageAdserver: true,
          allowedDivIds: allowedDivIds
        });
      });
      Lyta.groupEnd('Relevant: flushFormats ...');
    }
  };
  Relevant.init();
  let adFormats = {};
  let isViewable = false;
  let queueAds = false;
  let processAdQueueTimeout = null;
  let lowPriorityadQueue = [];
  let highPriorityAdQueue = [];
  let lazyLoadAds = false;
  let lazyAdsQueue = {};
  let useTcf = false;
  let tcfReady = false;

  // Create a responsive container and wrapper within an element
  // by given ID (adContainerId)
  //
  // Ad will be loaded in DIV element with ID "adContainerId-wrapper"
  // inside a DIV container with ID "adContainerId-container"
  //
  // The container is scaled down to fit within the space allocated
  // for its parent container. CSS transformations are used
  // for scaling

  const responsifyAd = adContainerId => {
    const adElement = document.getElementById(adContainerId);
    var naturalHeight = 0;
    var mutationEvent = false;
    if (!adElement) {
      return;
    }
    const createWrapper = elem => {
      var baseName = elem.id;
      // Inject container and wrapper to given element
      var container = document.createElement("div");
      var wrapper = document.createElement("div");
      container.id = baseName + "-container";
      wrapper.id = getWrapperId(baseName);
      container.appendChild(wrapper);
      adElement.appendChild(container);
      return container;
    };
    const container = createWrapper(adElement);
    const fitElement = () => {
      const offsetWidth = container.offsetWidth;
      const parentNode = container.parentNode;
      const naturalWidth = container.scrollWidth;
      var height, scale, naturalHeight;
      if (offsetWidth >= naturalWidth) {
        // The container fits in viewport, so no need to scale
        // Force overflow: hidden to mitigate cases where wide
        // iframe ads are slow to trigger onload event
        // and cause narrow viewports to overflow
        container.setAttribute("style", "overflow: hidden");
        parentNode.style.height = "";
        return;
      }
      height = container.scrollHeight;
      if (mutationEvent) {
        mutationEvent = false;
        if (naturalHeight == height) {
          return;
        }
        naturalHeight = height;
      }

      // Determine scaling factor
      scale = Math.min(1, offsetWidth / naturalWidth);

      // Scale down parent node height and ad container
      parentNode.style.height = height * scale + "px";
      container.setAttribute("style", "-webkit-transform: scale(" + scale + ");" + "-moz-transform: scale(" + scale + ");" + "transform: scale(" + scale + ");" + "transform-origin: 0 0");
    };
    const dispatchUpdateEvent = () => {
      var event = new CustomEvent(LYTA_UPDATE_EVENT);
      mutationEvent = true;
      window.dispatchEvent(event);
    };

    // Define MutationObserver for updating ad dimensionson DOM changes
    const observer = new MutationObserver(function (mutationsList) {
      dispatchUpdateEvent();
      for (var i = 0; i < mutationsList.length; i++) {
        var mutation = mutationsList[i];
        if (mutation.type == 'childList') {
          Array.prototype.forEach.call(mutation.target.children, child => {
            var childOfInterest;
            if (child.tagName === "A") {
              childOfInterest = child.getElementsByTagName('IMG')[0];
            }
            if (child.tagName === "IFRAME") {
              childOfInterest = child;
            }
            if (childOfInterest) {
              childOfInterest.addEventListener('load', dispatchUpdateEvent, false);
            }
          });
        }
      }
    });

    // Begin observing changes in adContainerId container
    observer.observe(document.getElementById(adContainerId), {
      childList: true,
      attributes: false,
      characterData: false,
      subtree: true
    });

    // Bind event handler to fit responsified element on LYTA_THROTTLED_FIT_EVENT
    window.addEventListener(LYTA_THROTTLED_FIT_EVENT, fitElement, false);
    return getWrapperId(adContainerId);
  };

  // https://gist.github.com/edwinwebb/e71bde8b00ff40f3f046
  const throttle = (func, wait, options) => {
    const _ = {
      now: Date.now || function () {
        return new Date().getTime();
      }
    };
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    const later = () => {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };
    return () => {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Bind event handlers to fit responsified elements on window resize or
  // LYTA_UPDATE_EVENT events.
  const dispatchFitEvent = () => {
    var event = new CustomEvent(LYTA_THROTTLED_FIT_EVENT);
    window.dispatchEvent(event);
  };
  const throttledFitEvent = throttle(dispatchFitEvent, ELEMENT_FIT_THROTTLE);
  window.addEventListener("resize", throttledFitEvent, false);
  window.addEventListener(LYTA_UPDATE_EVENT, throttledFitEvent, false);
  const getWrapperId = containerId => {
    return containerId + "-wrapper";
  };
  const clientType = () => {
    var client = "mobile";
    if (typeof window.matchMedia == "function" && window.matchMedia("(min-width: 768px)").matches || typeof window.matchMedia == "undefined" && window.innerWidth >= 768) {
      client = "tablet";
    }
    if (typeof window.matchMedia == "function" && window.matchMedia("(min-width: 980px)").matches || typeof window.matchMedia == "undefined" && window.innerWidth >= 980) {
      client = "desktop";
    }
    return client;
  };
  const clientPlatform = () => {
    var platform = "browser";
    var ua = navigator.userAgent || navigator.vendor;
    if (ua.indexOf("FBAN") > -1) {
      platform = "facebook_app";
    } else if (ua.indexOf("Twitter") > -1) {
      platform = "twitter_app";
    } else if (window && window.isMaggioView === true) {
      platform = "maggio";
    }
    return platform;
  };
  const isMobile = () => {
    return clientType() === "mobile";
  };
  const isDesktop = () => {
    return clientType() === "tablet" || clientType() === "desktop";
  };
  const getCookie = name => {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
  };
  const createCookie = (name, value, seconds) => {
    var expires = "";
    if (seconds) {
      var date = new Date();
      date.setTime(date.getTime() + seconds * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
  };
  const clearCookie = name => {
    createCookie(name, "", -1);
  };
  const canShowAd = adUnit => {
    // Care only about out-of-page ad units (interstitial and "special ads")
    if (OUT_OF_PAGE_ADS.indexOf(adUnit) == -1) {
      return true;
    }
    // Interstitial requested, and not yet shown
    if (INTERSTITIAL_ADS.indexOf(adUnit) > -1 && Lyta.interstitialShown !== INTERSTITIAL_COOKIE) {
      createCookie(INTERSTITIAL_COOKIE, INTERSTITIAL_COOKIE, Lyta.interstitialCookieExpiry);
      return true;
    }
    // Special ad requested, interstitial already shown
    if (SPECIAL_ADS.indexOf(adUnit) > -1 && Lyta.interstitialShown == INTERSTITIAL_COOKIE) {
      return true;
    }
    // Can not show interstitial or special ad unit
    return false;
  };
  const getContentFormatID = () => {
    if (clientType() === "mobile") {
      return MOBILE_CONTENT_FORMAT_ID;
    } else {
      return DESKTOP_CONTENT_FORMAT_ID;
    }
  };
  const getContentAdunitNames = position => {
    var adUnitNames = ["content_0" + position];
    if (clientType() === "mobile") {
      adUnitNames.push("boksi" + position);
    }
    return adUnitNames;
  };
  const getContentTopId = () => {
    if (clientType() === "mobile") {
      return MOBILE_PARADE_ID;
    } else {
      return DESKTOP_PARADE_ID;
    }
  };
  const getContentTopName = () => {
    if (clientType() === "mobile") {
      return "mobiiliylaparaati";
    } else {
      return "ylaparaati";
    }
  };
  const getBelowContentName = () => {
    var adUnitNames = [BELOW_CONTENT_NAME];
    if (clientType() !== "mobile") {
      adUnitNames.push("boksi1");
    }
    return adUnitNames;
  };

  // Serialize given obj to a string separated with separator
  //
  // If the property is an array, each of the array elements
  // will be appended to the string with the name of the property
  //
  // For example:
  // obj.example = [1,2,3]
  // serialize(obj,';')
  // ->
  // example=1;example=2;example=3

  const serialize = (obj, separator) => {
    var separator = separator || "&";
    let str = [];
    for (let p in obj) {
      if (obj.hasOwnProperty(p)) {
        if (typeof obj[p] === "object" && obj[p].constructor === Array) {
          for (let i in obj[p]) {
            str.push(p + "=" + obj[p][i]);
          }
        } else {
          str.push(p + "=" + obj[p]);
        }
      }
    }
    return str.join(separator);
  };

  // Slugify given string
  // https://gist.github.com/hagemann/382adfc57adbd5af078dc93feef01fe1

  const slugify = string => {
    const a = 'àáäâãåăæąçćčđďèéěėëêęğǵḧìíïîįłḿǹńňñòóöôœøṕŕřßşśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;';
    const b = 'aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz------';
    const p = new RegExp(a.split('').join('|'), 'g');
    return string.toString().toLowerCase().replace(/\s+/g, '-') // Replace spaces with -
    .replace(p, function (c) {
      return b.charAt(a.indexOf(c));
    }) // Replace special characters
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
  };

  // Build object for targeting

  const targetOptions = (adUnitName, adCallKeywords) => {
    let url = document.location.pathname + document.location.search;
    if (typeof window.digitalData?.page?.pageInfo?.locationPathName === 'string') {
      url = window.digitalData.page.pageInfo.locationPathName;
    }
    let target = {
      page_type: LytaConfig.target.pageType,
      client: clientType(),
      platform: clientPlatform(),
      url: url,
      adunit: adUnitName
    };
    if (typeof LytaConfig.target.adCategory === "string" && LytaConfig.target.adCategory.length > 0) {
      target.category = LytaConfig.target.adCategory;
    }
    if (typeof LytaConfig.target.assetId === "string" && LytaConfig.target.assetId.length > 0) {
      target.assetid = LytaConfig.target.assetId;
    }
    if (typeof LytaConfig.target.newsSubjects !== "undefined" && LytaConfig.target.newsSubjects.length > 0) {
      target.news_subject = LytaConfig.target.newsSubjects;
    }
    if (typeof LytaConfig.target.keywords === 'object' && LytaConfig.target.keywords.length > 0) {
      target.keyword = target.keyword || [];
      for (const keyword of LytaConfig.target.keywords) {
        target.keyword.push(slugify(keyword));
      }
    }
    if (typeof adCallKeywords === 'object' && adCallKeywords.length > 0) {
      target.keyword = target.keyword || [];
      for (const keyword of adCallKeywords) {
        target.keyword.push(slugify(keyword));
      }
    }
    if (typeof LytaConfig.target.user === 'object') {
      let user = LytaConfig.target.user;
      if (user.activeSubscriptions) {
        target.subs = user.activeSubscriptions;
      }
      target.loggedin = user.signInStatus;
    }
    return target;
  };
  const isInitialized = () => {
    return Lyta.initialized;
  };
  const renderQueuedAd = (instance, callNow) => {
    Relevant.callFormat(instance.adCall, callNow);
    if (instance.adLabels) {
      showAdLabels(instance.adUnitWrapper, instance.adContainer);
    }
  };
  const processAdQueue = (queue, dequeue) => {
    Lyta.group('processAdQueue called ...');
    Lyta.log(JSON.parse(JSON.stringify(queue)));
    var dequeue = dequeue === undefined ? false : dequeue;
    let queueItem;
    if (useTcf && !tcfReady) {
      Lyta.log('... but TCF is not ready for ad queue.');
      window.addEventListener(TCF_READY_EVENT, function () {
        Lyta.log(`processAdQueue triggered by ${TCF_READY_EVENT} event listener`);
        processAdQueue(queue, dequeue);
      }, false);
      return Lyta.groupEnd();
    }
    if (dequeue) {
      queueAds = false;
      Lyta.log('Ad queuing set to disabled. Further ad loads will no longer be queued.');
    }
    Lyta.log('Started processing queued ads.');
    queue.reverse();
    while (queueItem = queue.pop()) {
      renderQueuedAd(queueItem, false);
      Lyta.log(queueItem.adUnit + ' called from queue');
    }
    Relevant.flushFormats();
    Lyta.groupEnd();
  };
  const tcfCallback = (tcData, success) => {
    Lyta.group('tcfCallback');
    if (success) {
      if (tcData.eventStatus === 'tcloaded' || tcData.eventStatus === 'useractioncomplete') {
        if (!tcfReady) {
          Lyta.log('Flagging TCF ready, processing queued ads, and triggering ' + TCF_READY_EVENT);
          // Flag TCF as ready and process queued ads
          tcfReady = true;
          processAdQueue(highPriorityAdQueue, false);
          // Dispatch TCF_READY_EVENT
          var event = new CustomEvent(TCF_READY_EVENT);
          window.dispatchEvent(event);
          // Remove event listener
          __tcfapi('removeEventListener', 2, function (success) {
            if (success) {
              Lyta.log('removed EventListener for tcfCallback');
            } else {
              Lyta.log('Failed to remove EventListener for tcfCallback');
            }
          }, tcData.listenerId);
        } else {
          Lyta.log('TCF already ready');
        }
      }
    } else {
      Lyta.log('Failed');
    }
    Lyta.groupEnd();
  };
  const viewableChangeListener = viewable => {
    isViewable = viewable;
    if (isViewable && queueAds) {
      window.clearTimeout(processAdQueueTimeout);
      processAdQueue(lowPriorityadQueue, true);
    }
  };

  // Process lazy ad
  const processLazyAd = adContainerId => {
    let adCallObject = lazyAdsQueue[adContainerId];
    if (adCallObject) {
      if (useTcf && !tcfReady) {
        Lyta.log('TCF not ready for lazy ad. Queuing instead.');
        lowPriorityadQueue.push(adCallObject);
        return;
      } else {
        renderQueuedAd(adCallObject, true);
        Lyta.log(adContainerId + ' lazy loaded');
      }
    }
  };

  // Show generic ad labels inside ad unit container

  const showAdLabels = (wrapperId, adContainer) => {
    showLabelTimeout = window.setTimeout(function () {
      Lyta.log(`Show ad labels after ${LABEL_TIMEOUT} timeout for ${wrapperId}`);
      let element = document.getElementById(wrapperId);
      let positions = ["beforebegin", "afterend"];
      let title = {
        beforebegin: "Juttu jatkuu mainoksen jälkeen",
        afterend: "Juttu jatkuu"
      };
      let html = '';
      if (LytaConfig.site == MAGGIO_APPLICATION_SITE && adContainer == BELOW_CONTENT_NAME) {
        positions = ["beforebegin"];
        title = {
          beforebegin: "Mainos"
        };
      }
      for (let i = 0; i < positions.length; i++) {
        if (!document.getElementById(adContainer + '-label-' + positions[i])) {
          html = '<div id="' + adContainer + '-label-' + positions[i] + '" class="lyta-label-' + positions[i] + '">' + title[positions[i]] + '</div>';
          element.insertAdjacentHTML(positions[i], html);
        }
      }
    }, LABEL_TIMEOUT);
  };

  // Hide generic ad labels inside ad unit container

  const hideAdLabels = adContainer => {
    var positions = ["beforebegin", "afterend"];
    for (let i = 0; i < positions.length; i++) {
      document.getElementById(adContainer + "-label-" + positions[i]).style.display = "none";
    }
  };

  // Insert ad notice above Adform Out-Stream advertisement
  // when ad is displayed
  // Remove ad notice as advertisement collapses

  const setupAdformAdTitle = () => {
    window._adform = window._adform || [];
    _adform.push(["on.init", function (settings) {
      let lib = Adform.lib;
      let element = this.container && this.container.get("element");
      let collapseTimeout = settings.options.hideTime * 1000;
      if (typeof element !== "undefined") {
        this.on("expand", onExpand);
        this.on("collapse", onCollapse);
      }
      function onExpand() {
        showAdLabels('contentTop-wrapper', 'contentTop');
      }
      function onCollapse() {
        setTimeout(function () {
          hideAdLabels('contentTop');
        }, collapseTimeout);
      }
    }]);
    window.addEventListener('adEnd', function (e) {
      hideAdLabels('contentTop');
    });
  };

  // Default format for non-Lorien sites

  adFormats['default'] = {
    // placement_name: [format_id, enabled_for_client, adunit_name, responsify]
    // placement_name - (string) Key used for calling the specific ad unit
    // format_id - (int) ID of the ad format in Smart Adserver
    // enabled_for_client - (bool) should the ad be shown for the client
    // adunit_name - (string or array) value of the "adunit" key passed to Smart
    //               this is used to target advertisements that share
    //               their format ID (boksi, viikkoruutu)
    // responsify - (bool) should the advertisement be wrapped in
    //              a container that is scaled to fit within its parent
    ylaparaati: [DESKTOP_PARADE_ID, isDesktop(), "ylaparaati", true],
    mobiiliylaparaati: [MOBILE_PARADE_ID, isMobile(), "mobiiliylaparaati", true],
    boksi1: [BOX_FORMAT_FORMAT_ID, isDesktop(), "boksi1", true],
    boksi2: [BOX_FORMAT_FORMAT_ID, isDesktop(), "boksi2", true],
    boksi3: [BOX_FORMAT_FORMAT_ID, isDesktop(), "boksi3", true],
    boksi4: [63773, isDesktop(), "boksi4", true],
    mobiiliboksi1: [BOX_FORMAT_FORMAT_ID, isMobile(), "boksi1", true],
    mobiiliboksi2: [BOX_FORMAT_FORMAT_ID, isMobile(), "boksi2", true],
    mobiiliboksi3: [BOX_FORMAT_FORMAT_ID, isMobile(), "boksi3", true],
    mobiiliboksi4: [63773, isMobile(), "boksi4", true],
    mobiiliextraboksi: [64879, isMobile(), "extraboksi", true],
    omniboksi1: [BOX_FORMAT_FORMAT_ID, true, "boksi1", true],
    omniboksi2: [BOX_FORMAT_FORMAT_ID, true, "boksi2", true],
    omniboksi3: [BOX_FORMAT_FORMAT_ID, true, "boksi3", true],
    omniboksi4: [63773, true, "boksi4", true],
    jattiboksi: [63814, isDesktop(), "jattiboksi", true],
    suurtaulu: [63768, isDesktop(), "suurtaulu", true],
    alaparaati: [63822, isDesktop(), "alaparaati", true],
    outstream: [63825, true, "outstream", true],
    hoksaacom: [63189, true, "hoksaacom", false],
    adswiper: [63770, true, "adswiper", false],
    header: [63769, isDesktop(), "header", false],
    erikoismainos: [63008, isDesktop(), "erikoismainos", false],
    mobiilierikoismainos: [63007, isMobile(), "mobiilierikoismainos", false],
    erikoismainos_ekaleva: [65117, true, "erikoismainos_ekaleva", false],
    viikkoruutu1: [63815, isDesktop(), "viikkoruutu1", false],
    viikkoruutu2: [63815, isDesktop(), "viikkoruutu2", false],
    viikkoruutu3: [63815, isDesktop(), "viikkoruutu3", false],
    viikkoruutu4: [63815, isDesktop(), "viikkoruutu4", false],
    viikkoruutu5: [63815, isDesktop(), "viikkoruutu5", false],
    viikkoruutu6: [63815, isDesktop(), "viikkoruutu6", false]
  };
  adFormats['sites-lorien'] = {
    // placement_name: [format_id, enabled_for_client, adunit_name, responsify]
    // placement_name - (string) Key used for calling the specific ad unit
    // format_id - (int) ID of the ad format in Smart Adserver
    // enabled_for_client - (bool) should the ad be shown for the client
    // adunit_name - (string or array) value of the "adunit" key passed to Smart
    //               this is used to target advertisements that share
    //               their format ID (boksi, viikkoruutu)
    // responsify - (bool) should the advertisement be wrapped in
    //              a container that is scaled to fit within its parent
    ylaparaati: [DESKTOP_PARADE_ID, isDesktop(), "ylaparaati", true],
    mobiiliylaparaati: [MOBILE_PARADE_ID, isMobile(), "mobiiliylaparaati", true],
    sidebar1: [BOX_FORMAT_FORMAT_ID, isDesktop(), ["sidebar_01", "boksi1"], true],
    sidebar2: [BOX_FORMAT_FORMAT_ID, isDesktop(), ["sidebar_02", "boksi2"], true],
    sidebar3: [BOX_FORMAT_FORMAT_ID, isDesktop(), ["sidebar_03", "boksi3"], true],
    contentTop: [63825, true, "outstream", true],
    content1: [getContentFormatID(), true, getContentAdunitNames(1), true],
    content2: [getContentFormatID(), true, getContentAdunitNames(2), true],
    content3: [getContentFormatID(), true, getContentAdunitNames(3), true],
    outstream: [63825, true, "outstream", true],
    belowcontent: [BOX_FORMAT_FORMAT_ID, isMobile(), BELOW_CONTENT_NAME, true],
    adswiper: [63770, true, "adswiper", false],
    erikoismainos: [63008, isDesktop(), "erikoismainos", false],
    mobiilierikoismainos: [63007, isMobile(), "mobiilierikoismainos", false],
    interstitiaali: [81021, isDesktop(), "interstitiaali", false],
    mobiiliinterstitiaali: [81037, isMobile(), "mobiiliinterstitiaali", false],
    viikkoruutu1: [63815, true, "viikkoruutu1", false],
    viikkoruutu2: [63815, true, "viikkoruutu2", false],
    viikkoruutu3: [63815, true, "viikkoruutu3", false],
    viikkoruutu4: [63815, true, "viikkoruutu4", false],
    viikkoruutu5: [63815, true, "viikkoruutu5", false],
    viikkoruutu6: [63815, true, "viikkoruutu6", false]
  };
  adFormats[MAGGIO_APPLICATION_SITE] = {
    // placement_name: [format_id, enabled_for_client, adunit_name, responsify]
    // placement_name - (string) Key used for calling the specific ad unit
    // format_id - (int) ID of the ad format in Smart Adserver
    // enabled_for_client - (bool) should the ad be shown for the client
    // adunit_name - (string or array) value of the "adunit" key passed to Smart
    //               this is used to target advertisements that share
    //               their format ID (boksi, viikkoruutu)
    // responsify - (bool) should the advertisement be wrapped in
    //              a container that is scaled to fit within its parent
    contentTop: [getContentTopId(), true, getContentTopName(), true],
    content1: [getContentFormatID(), true, getContentAdunitNames(1), true],
    content2: [getContentFormatID(), true, getContentAdunitNames(2), true],
    content3: [getContentFormatID(), true, getContentAdunitNames(3), true],
    belowcontent: [BOX_FORMAT_FORMAT_ID, true, getBelowContentName(), true]
  };
  adFormats['sites-tapahtumat'] = {
    // placement_name: [format_id, enabled_for_client, adunit_name, responsify]
    // placement_name - (string) Key used for calling the specific ad unit
    // format_id - (int) ID of the ad format in Smart Adserver
    // enabled_for_client - (bool) should the ad be shown for the client
    // adunit_name - (string or array) value of the "adunit" key passed to Smart
    //               this is used to target advertisements that share
    //               their format ID (boksi, viikkoruutu)
    // responsify - (bool) should the advertisement be wrapped in
    //              a container that is scaled to fit within its parent
    ylaparaati: [DESKTOP_PARADE_ID, isDesktop(), "ylaparaati", true],
    mobiiliylaparaati: [MOBILE_PARADE_ID, isMobile(), "mobiiliylaparaati", true]
  };
  Lyta.log = message => {
    if (!LytaConfig.debug) {
      return;
    }
    console.log(message);
  };
  Lyta.group = group => {
    if (!LytaConfig.debug) {
      return;
    }
    console.group(group);
  };
  Lyta.groupEnd = () => {
    if (!LytaConfig.debug) {
      return;
    }
    console.groupEnd();
  };
  Lyta.init = () => {
    if (isInitialized()) {
      return true;
    }
    const scheme = 'http:' == document.location.protocol && LytaConfig.smart.forceSSL !== true ? 'http://' : 'https://';
    const head = document.head || document.documentElement;
    const script = document.createElement("script");
    window.sas = window.sas || {};
    var sas = window.sas;
    sas.cmd = sas.cmd || [];
    let smartSetupParameters = {
      networkid: LytaConfig.smart.networkId,
      domain: scheme + LytaConfig.smart.host,
      async: true
    };
    if (typeof LytaConfig.uidCookieName === "string" && (uid = getCookie(LytaConfig.uidCookieName))) {
      smartSetupParameters.uid = uid;
    }
    Relevant.setup(smartSetupParameters);
    script.async = false;
    script.src = scheme + "ced.sascdn.com/tag/" + LytaConfig.smart.networkId + "/smart.js";
    head.insertBefore(script, head.firstChild);
    setupAdformAdTitle();

    // Use site specific ad format mapping, if available
    // Revert to default mapping if site specific mapping does not exist

    Lyta.adFormats = adFormats[LytaConfig.site] || adFormats['default'];

    // Read and cache interstitial ad parameters
    Lyta.interstitialShown = getCookie(INTERSTITIAL_COOKIE);
    Lyta.interstitialCookieExpiry = LytaConfig.interstitialCookieExpiry || INTERSTITIAL_COOKIE_EXPIRY;

    // Listen for MRAID viewability events if mraid is defined

    if (typeof mraid !== "undefined") {
      queueAds = true;
      mraid.addEventListener("viewableChange", viewableChangeListener);
    }

    // Use TCF v2 API if available
    if (typeof window.__tcfapi == "function") {
      useTcf = true;
      Lyta.log('__tcfapi in use. All ad loads will be deferred until TCF is ready.');
      // Do stuff
      __tcfapi('addEventListener', 2, tcfCallback);
    }

    // Automatically load queued advertisements after predefined delay
    Lyta.queueTime = LytaConfig.queueTime || AD_QUEUE_DELAY;
    if (LytaConfig.queueAds === true) {
      queueAds = true;
      Lyta.log(`Ad queue enabled with ${Lyta.queueTime} ms timeout.`);
      processAdQueueTimeout = window.setTimeout(function () {
        processAdQueue(lowPriorityadQueue, true);
      }, Lyta.queueTime);
    }

    // Lazy load ads
    // https://github.com/verlok/lazyload
    if (LytaConfig.lazyLoadAds === true) {
      lazyLoadAds = true;

      // Lazy load options
      window.lazyLoadOptions = {
        threshold: window.innerHeight,
        elements_selector: ".lyta-lazy-load",
        callback_reveal: function (el) {
          processLazyAd(el.id);
        }
      };

      // Event listener for LazyLoad init
      window.addEventListener("LazyLoad::Initialized", function (event) {
        Lyta.log('Lazy load: initialized');
        window.lazyLoadInstance = event.detail.instance;
      }, false);

      // Event listener for LazyLoad to check the DOM again after browser has loaded all the DOM
      document.addEventListener('DOMContentLoaded', function (event) {
        if (window.lazyLoadInstance) {
          Lyta.log('Lazy load: updated lazy load instance');
          window.lazyLoadInstance.update();
        }
      });
    }

    // Callback for onNoad event
    // Applies to all ad units
    Relevant.setOnNoad(function (data) {
      var tagId = data.tagId;
      var container = data.tagId.replace('-wrapper', '');
      document.getElementById(tagId).style.display = 'none';
      document.getElementById(container).style.display = 'none';
    });
    Lyta.initialized = true;
    Lyta.log(`Lyta version ${Lyta.version} initialized.`);
    return Lyta;
  };
  Lyta.refresh = options => {
    isInitialized() || Lyta.init();
    options = options === undefined ? {} : options;
    const adUnit = options.adUnit === undefined ? false : options.adUnit;
    const adContainer = options.adContainer === undefined ? adUnit : options.adContainer;
    const forceMasterFlag = options.forceMasterFlag === undefined ? false : options.forceMasterFlag;
    const resetTimestamp = options.resetTimestamp === undefined ? true : options.resetTimestamp;
    const keywords = options.keywords === undefined ? false : options.keywords;
    if (!adUnit) {
      Lyta.log("Refresh: Ad unit not not defined.");
      return;
    }
    Lyta.log(adUnit + " refresh requested, formatId = " + Lyta.adFormats[adUnit][FORMATID] + ")");
    const adUnitName = Lyta.adFormats[adUnit][ADUNIT_NAME];
    const target = targetOptions(adUnitName, keywords);
    const adCall = {
      forceMasterFlag: forceMasterFlag,
      resetTimestamp: resetTimestamp,
      target: serialize(target, ";")
    };
    let adUnitWrapper = adContainer;
    if (Lyta.adFormats[adUnit][RESPONSIFY]) {
      adUnitWrapper = getWrapperId(adContainer);
    }
    sas.refresh(adUnitWrapper, adCall);
    Lyta.log(JSON.parse(JSON.stringify(adUnit)));
    Lyta.log(JSON.parse(JSON.stringify(adCall)));
  };
  Lyta.render = options => {
    isInitialized() || Lyta.init();
    options = options === undefined ? {} : options;
    const adUnit = options.adUnit === undefined ? false : options.adUnit;
    const adContainer = options.adContainer === undefined ? adUnit : options.adContainer;
    const async = options.async === undefined ? true : options.async;
    const checkVisibility = options.checkVisibility === undefined ? false : !!options.checkVisibility;
    const onNoad = options.onNoad === undefined ? undefined : options.onNoad;
    const adLabels = options.adLabels === undefined ? false : options.adLabels;
    const keywords = options.keywords === undefined ? false : options.keywords;
    if (!adUnit) {
      Lyta.log("Ad unit not not defined.");
      return;
    }
    const elem = document.getElementById(adContainer);
    const adUnitName = Lyta.adFormats[adUnit][ADUNIT_NAME];
    Lyta.group(adUnit);
    Lyta.log(JSON.parse(JSON.stringify({
      call: 'Lyta.render',
      adUnitPlacementID: adUnit,
      formatId: Lyta.adFormats[adUnit][FORMATID],
      checkVisibility: checkVisibility,
      isVisible: elem.offsetParent === null,
      responsifyAd: Lyta.adFormats[adUnit][RESPONSIFY],
      enabledForClient: Lyta.adFormats[adUnit][ENABLED_FOR_CLIENT],
      canShowAd: !canShowAd(adUnit),
      adLabels: adLabels,
      options: options
    })));
    if (!Lyta.adFormats[adUnit][ENABLED_FOR_CLIENT]) {
      Lyta.log('Skipping - Not enabled');
      return Lyta.groupEnd();
    }
    if (elem.offsetParent === null && checkVisibility) {
      Lyta.log('Skipping - Not visible');
      return Lyta.groupEnd();
    }
    if (!canShowAd(adUnit)) {
      Lyta.log('Skipping - Can not show on this page load');
      return Lyta.groupEnd();
    }
    let adUnitWrapper = adContainer;
    if (Lyta.adFormats[adUnit][RESPONSIFY]) {
      adUnitWrapper = responsifyAd(adContainer);
    }
    const target = targetOptions(adUnitName, keywords);
    let adCall = {
      siteId: LytaConfig.smart.siteId,
      pageId: LytaConfig.smart.pageId,
      formatId: Lyta.adFormats[adUnit][FORMATID],
      async: async,
      target: serialize(target, ";"),
      tagId: adUnitWrapper
    };
    if (typeof onNoad === "function") {
      adCall.onNoad = onNoad;
    }
    let lazyAd = false;
    if (lazyLoadAds && elem.className.indexOf('lyta-lazy-load') > -1) {
      lazyAd = true;
    }

    // Queue lower priority advertisements, call PRIORITY_ADS as soon
    // as sas is ready.
    //
    // Handle lazy load ads with lyta-lazy-load class name

    let wasQueued = false;
    const adCallObject = {
      adUnit: adUnit,
      adCall: adCall,
      adUnitWrapper: adUnitWrapper,
      adContainer: adContainer,
      adLabels: adLabels
    };
    if (lazyAd) {
      lazyAdsQueue[adContainer] = adCallObject;
      wasQueued = true;
      Lyta.log('Will be loaded lazily');
    } else if (queueAds) {
      // If TCF is NOT in use or if TCF is ready, render high priority
      // ads immediately. TCF can only be ready if it is in use.
      const shouldRender = !useTcf || tcfReady;

      // It is sufficient to check if the adUnit is in the PRIORITY_ADS array.
      // canShowAd(adUnit) takes care of INTERSTITIAL_ADS throttling
      if (PRIORITY_ADS.indexOf(adUnit) > -1) {
        if (shouldRender) {
          Relevant.callFormat(adCall, true);
          Lyta.log('Rendered');
        } else {
          highPriorityAdQueue.push(adCallObject);
          wasQueued = true;
          Lyta.log('Queued to priority queue');
        }
      } else {
        lowPriorityadQueue.push(adCallObject);
        wasQueued = true;
        Lyta.log('Queued to low priority queue');
      }
    }
    // Render ad immediately if queue is not used or already processed
    else {
      Relevant.callFormat(adCall, true);
    }
    // Show ad labels if ad was not queued
    if (adLabels && !wasQueued) {
      showAdLabels(adUnitWrapper, adContainer);
    }
    Lyta.groupEnd();
  };
  return Lyta.init();
}();

/***/ }),

/***/ "./src/js/outstream.js":
/*!*****************************!*\
  !*** ./src/js/outstream.js ***!
  \*****************************/
/***/ (() => {

var Injector = Injector || {};
Injector.lorien = function (d) {
  var app = {};
  var pageType = '';
  var assetType = '';
  var cache = function () {
    if (typeof digitalData === 'object' && typeof digitalData.page === 'object' && typeof digitalData.page.category === 'object' && typeof digitalData.page.attributes === 'object') {
      pageType = digitalData.page.category.pageType || '';
      assetType = digitalData.page.attributes.assetType || '';
    }
    app.config = {
      slot: `
              .js-lyta-content > p, 
              .js-lyta-content > h2, 
              .js-lyta-content > h3, 
              .js-lyta-content > h4, 
              .js-lyta-content > h5,
              .js-lyta-content .paywall-content > p,
              .js-lyta-content .paywall-content > h2,
              .js-lyta-content .paywall-content > h3,
              .js-lyta-content .paywall-content > h4,
              .js-lyta-content .paywall-content > h5
              `,
      contentTopId: 'contentTop',
      contentAdIds: ['content1', 'content2', 'content3'],
      contentAdSpace: 20,
      injectInsideElement: false,
      injectAfterSlot: 4,
      minSlots: 6,
      waitForElement: true
    };
  };
  app.init = function () {
    cache();
    if (app.config.hasOwnProperty('runBefore')) app.config.runBefore();
    if (canBeInjected()) {
      if (app.config.waitForElement) {
        // Injects ContentTop and content ads when element exists
        var elementExist = setInterval(function () {
          if (d.querySelectorAll(app.config.slot).length) {
            injectAds();
            clearInterval(elementExist);
          }
        }, 100);
        if (app.config.hasOwnProperty('runAfter')) app.config.runAfter();
      } else {
        injectAds();
        if (app.config.hasOwnProperty('runAfter')) app.config.runAfter();
      }
    }
  };

  // Define values on which pages ContentTop can be injected
  var canBeInjected = function () {
    var commercialTypes = ['commercial', 'advertisement'];
    return pageType == 'article' && commercialTypes.indexOf(assetType) === -1;
  };
  var injectElement = function (el, referenceNode, injectInsideElement) {
    if (injectInsideElement) {
      referenceNode.appendChild(el);
    } else {
      referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
    }
  };
  var elementToInject = function (elementId, lazyLoad) {
    var osElement = d.createElement('div');
    osElement.id = elementId;
    osElement.setAttribute("data-placement-id", elementId);
    if (lazyLoad) {
      osElement.className = 'lyta-lazy-load';
    }
    return osElement;
  };
  var findAdSlot = function (slots, start) {
    // Check that the slot has two elements (p, h2, h3, h4 or h5) before and after.
    // Ignore two last iterations, there has to be two elements after the slot.
    var start = typeof start !== 'undefined' ? start - 1 : app.config.injectAfterSlot - 1;
    var validElems = ["P", "H2", "H3", "H4", "H5"];
    var validCurrentElems = ["P"];
    var slotsCount = slots.length - 2;
    var slot = 0;
    for (var i = start; i < slotsCount; i++) {
      var prevElemStatus = validElems.indexOf(slots[i].previousElementSibling.tagName);
      var curElemStatus = validCurrentElems.indexOf(slots[i].tagName);
      var nextElemStatus = validElems.indexOf(slots[i].nextElementSibling.tagName);
      var secondElementPos = i + 1;
      var secondElementStatus = validElems.indexOf(slots[secondElementPos].nextElementSibling.tagName);
      if (curElemStatus != -1 && prevElemStatus != -1 && nextElemStatus != -1 && secondElementStatus != -1) {
        slot = i;
        break;
      }
    }
    return slot;
  };
  var injectContentAds = function (slots, start) {
    var startSlot = start;
    var adSlot = 0;
    for (let i = 0; i < app.config.contentAdIds.length; i++) {
      startSlot += app.config.contentAdSpace;
      adSlot = findAdSlot(slots, startSlot);
      if (adSlot > 0) {
        injectElement(elementToInject(app.config.contentAdIds[i], true), slots[adSlot], app.config.injectInsideElement);
        callAdvertisement(app.config.contentAdIds[i]);
        Lyta.log('Injector: injected ' + app.config.contentAdIds[i] + ' ad unit');
      }
    }
    if (window.lazyLoadInstance && LytaConfig.lazyLoadAds === true) {
      window.lazyLoadInstance.update();
      Lyta.log('Injector: updated lazy load instance');
    }
  };
  var injectContentTopAd = function (slots, pos) {
    injectElement(elementToInject(app.config.contentTopId, false), slots[pos], app.config.injectInsideElement);
    callAdvertisement(app.config.contentTopId);
    Lyta.log('Injector: injected content top ad unit');
  };
  var callAdvertisement = function (container) {
    try {
      Lyta.render({
        adUnit: container,
        async: true,
        checkVisibility: true,
        adLabels: true
      });
    } catch (error) {
      try {
        Lyta.log(error);
      } catch (logerror) {
        console.log(error);
      }
    }
  };
  var injectAds = function () {
    var slots = d.querySelectorAll(app.config.slot);
    Lyta.log('Injector detected ' + slots.length + ' slots');
    if (slots.length >= app.config.injectAfterSlot) {
      var firstSlot = findAdSlot(slots);
      // minSlots is defined
      if (app.config.hasOwnProperty('minSlots') && typeof app.config.minSlots === 'number') {
        if (slots.length >= app.config.minSlots && firstSlot > 0) {
          Lyta.log('Injector found enough valid slots. Detected ' + slots.length + ', required ' + app.config.minSlots);

          // Inject Outsream ad
          injectContentTopAd(slots, firstSlot);

          // Inject content ads
          injectContentAds(slots, firstSlot);
        } else {
          Lyta.log('Injector: Did not inject. Not enough valid slots. Detected ' + slots.length + ', required ' + app.config.minSlots);
        }
        // minSlots is not defined
      } else {
        if (firstSlot > 0) {
          Lyta.log('Injector found enough valid slots. Detected ' + slots.length + ' slots.');

          // Inject Outsream ad
          injectContentTopAd(slots, firstSlot);

          // Inject content ads
          injectContentAds(slots, firstSlot);
        } else {
          Lyta.log('Injector: Did not inject. Not enough valid slots. Detected ' + slots.length);
        }
      }
    } else {
      Lyta.log('Injector: Did not inject. Not enough slots. Detected ' + slots.length + ', required ' + app.config.injectAfterSlot);
    }
  };
  app.init(); // self-invoking version
}(window.document);

/***/ }),

/***/ "./src/polyfill/custom_event_ie.js":
/*!*****************************************!*\
  !*** ./src/polyfill/custom_event_ie.js ***!
  \*****************************************/
/***/ (() => {

// CustomEvent micro-polyfill for Internet Explorer
(function () {
  if (typeof window.CustomEvent === "function") {
    return false;
  }
  function CustomEvent(event, params) {
    params = params || {
      bubbles: false,
      cancelable: false,
      detail: undefined
    };
    var evt = document.createEvent("CustomEvent");
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  }
  CustomEvent.prototype = window.Event.prototype;
  window.CustomEvent = CustomEvent;
})();

/***/ }),

/***/ "./src/polyfill/intersection_observer.js":
/*!***********************************************!*\
  !*** ./src/polyfill/intersection_observer.js ***!
  \***********************************************/
/***/ (() => {

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.
 *
 *  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 */
(function () {
  'use strict';

  // Exit early if we're not running in a browser.
  if (typeof window !== 'object') {
    return;
  }

  // Exit early if all IntersectionObserver and IntersectionObserverEntry
  // features are natively supported.
  if ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype) {
    // Minimal polyfill for Edge 15's lack of `isIntersecting`
    // See: https://github.com/w3c/IntersectionObserver/issues/211
    if (!('isIntersecting' in window.IntersectionObserverEntry.prototype)) {
      Object.defineProperty(window.IntersectionObserverEntry.prototype, 'isIntersecting', {
        get: function () {
          return this.intersectionRatio > 0;
        }
      });
    }
    return;
  }

  /**
   * A local reference to the document.
   */
  var document = window.document;

  /**
   * An IntersectionObserver registry. This registry exists to hold a strong
   * reference to IntersectionObserver instances currently observing a target
   * element. Without this registry, instances without another reference may be
   * garbage collected.
   */
  var registry = [];

  /**
   * Creates the global IntersectionObserverEntry constructor.
   * https://w3c.github.io/IntersectionObserver/#intersection-observer-entry
   * @param {Object} entry A dictionary of instance properties.
   * @constructor
   */
  function IntersectionObserverEntry(entry) {
    this.time = entry.time;
    this.target = entry.target;
    this.rootBounds = entry.rootBounds;
    this.boundingClientRect = entry.boundingClientRect;
    this.intersectionRect = entry.intersectionRect || getEmptyRect();
    this.isIntersecting = !!entry.intersectionRect;

    // Calculates the intersection ratio.
    var targetRect = this.boundingClientRect;
    var targetArea = targetRect.width * targetRect.height;
    var intersectionRect = this.intersectionRect;
    var intersectionArea = intersectionRect.width * intersectionRect.height;

    // Sets intersection ratio.
    if (targetArea) {
      // Round the intersection ratio to avoid floating point math issues:
      // https://github.com/w3c/IntersectionObserver/issues/324
      this.intersectionRatio = Number((intersectionArea / targetArea).toFixed(4));
    } else {
      // If area is zero and is intersecting, sets to 1, otherwise to 0
      this.intersectionRatio = this.isIntersecting ? 1 : 0;
    }
  }

  /**
   * Creates the global IntersectionObserver constructor.
   * https://w3c.github.io/IntersectionObserver/#intersection-observer-interface
   * @param {Function} callback The function to be invoked after intersection
   *     changes have queued. The function is not invoked if the queue has
   *     been emptied by calling the `takeRecords` method.
   * @param {Object=} opt_options Optional configuration options.
   * @constructor
   */
  function IntersectionObserver(callback, opt_options) {
    var options = opt_options || {};
    if (typeof callback != 'function') {
      throw new Error('callback must be a function');
    }
    if (options.root && options.root.nodeType != 1) {
      throw new Error('root must be an Element');
    }

    // Binds and throttles `this._checkForIntersections`.
    this._checkForIntersections = throttle(this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT);

    // Private properties.
    this._callback = callback;
    this._observationTargets = [];
    this._queuedEntries = [];
    this._rootMarginValues = this._parseRootMargin(options.rootMargin);

    // Public properties.
    this.thresholds = this._initThresholds(options.threshold);
    this.root = options.root || null;
    this.rootMargin = this._rootMarginValues.map(function (margin) {
      return margin.value + margin.unit;
    }).join(' ');
  }

  /**
   * The minimum interval within which the document will be checked for
   * intersection changes.
   */
  IntersectionObserver.prototype.THROTTLE_TIMEOUT = 100;

  /**
   * The frequency in which the polyfill polls for intersection changes.
   * this can be updated on a per instance basis and must be set prior to
   * calling `observe` on the first target.
   */
  IntersectionObserver.prototype.POLL_INTERVAL = null;

  /**
   * Use a mutation observer on the root element
   * to detect intersection changes.
   */
  IntersectionObserver.prototype.USE_MUTATION_OBSERVER = true;

  /**
   * Starts observing a target element for intersection changes based on
   * the thresholds values.
   * @param {Element} target The DOM element to observe.
   */
  IntersectionObserver.prototype.observe = function (target) {
    var isTargetAlreadyObserved = this._observationTargets.some(function (item) {
      return item.element == target;
    });
    if (isTargetAlreadyObserved) {
      return;
    }
    if (!(target && target.nodeType == 1)) {
      throw new Error('target must be an Element');
    }
    this._registerInstance();
    this._observationTargets.push({
      element: target,
      entry: null
    });
    this._monitorIntersections();
    this._checkForIntersections();
  };

  /**
   * Stops observing a target element for intersection changes.
   * @param {Element} target The DOM element to observe.
   */
  IntersectionObserver.prototype.unobserve = function (target) {
    this._observationTargets = this._observationTargets.filter(function (item) {
      return item.element != target;
    });
    if (!this._observationTargets.length) {
      this._unmonitorIntersections();
      this._unregisterInstance();
    }
  };

  /**
   * Stops observing all target elements for intersection changes.
   */
  IntersectionObserver.prototype.disconnect = function () {
    this._observationTargets = [];
    this._unmonitorIntersections();
    this._unregisterInstance();
  };

  /**
   * Returns any queue entries that have not yet been reported to the
   * callback and clears the queue. This can be used in conjunction with the
   * callback to obtain the absolute most up-to-date intersection information.
   * @return {Array} The currently queued entries.
   */
  IntersectionObserver.prototype.takeRecords = function () {
    var records = this._queuedEntries.slice();
    this._queuedEntries = [];
    return records;
  };

  /**
   * Accepts the threshold value from the user configuration object and
   * returns a sorted array of unique threshold values. If a value is not
   * between 0 and 1 and error is thrown.
   * @private
   * @param {Array|number=} opt_threshold An optional threshold value or
   *     a list of threshold values, defaulting to [0].
   * @return {Array} A sorted list of unique and valid threshold values.
   */
  IntersectionObserver.prototype._initThresholds = function (opt_threshold) {
    var threshold = opt_threshold || [0];
    if (!Array.isArray(threshold)) threshold = [threshold];
    return threshold.sort().filter(function (t, i, a) {
      if (typeof t != 'number' || isNaN(t) || t < 0 || t > 1) {
        throw new Error('threshold must be a number between 0 and 1 inclusively');
      }
      return t !== a[i - 1];
    });
  };

  /**
   * Accepts the rootMargin value from the user configuration object
   * and returns an array of the four margin values as an object containing
   * the value and unit properties. If any of the values are not properly
   * formatted or use a unit other than px or %, and error is thrown.
   * @private
   * @param {string=} opt_rootMargin An optional rootMargin value,
   *     defaulting to '0px'.
   * @return {Array<Object>} An array of margin objects with the keys
   *     value and unit.
   */
  IntersectionObserver.prototype._parseRootMargin = function (opt_rootMargin) {
    var marginString = opt_rootMargin || '0px';
    var margins = marginString.split(/\s+/).map(function (margin) {
      var parts = /^(-?\d*\.?\d+)(px|%)$/.exec(margin);
      if (!parts) {
        throw new Error('rootMargin must be specified in pixels or percent');
      }
      return {
        value: parseFloat(parts[1]),
        unit: parts[2]
      };
    });

    // Handles shorthand.
    margins[1] = margins[1] || margins[0];
    margins[2] = margins[2] || margins[0];
    margins[3] = margins[3] || margins[1];
    return margins;
  };

  /**
   * Starts polling for intersection changes if the polling is not already
   * happening, and if the page's visibility state is visible.
   * @private
   */
  IntersectionObserver.prototype._monitorIntersections = function () {
    if (!this._monitoringIntersections) {
      this._monitoringIntersections = true;

      // If a poll interval is set, use polling instead of listening to
      // resize and scroll events or DOM mutations.
      if (this.POLL_INTERVAL) {
        this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL);
      } else {
        addEvent(window, 'resize', this._checkForIntersections, true);
        addEvent(document, 'scroll', this._checkForIntersections, true);
        if (this.USE_MUTATION_OBSERVER && 'MutationObserver' in window) {
          this._domObserver = new MutationObserver(this._checkForIntersections);
          this._domObserver.observe(document, {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true
          });
        }
      }
    }
  };

  /**
   * Stops polling for intersection changes.
   * @private
   */
  IntersectionObserver.prototype._unmonitorIntersections = function () {
    if (this._monitoringIntersections) {
      this._monitoringIntersections = false;
      clearInterval(this._monitoringInterval);
      this._monitoringInterval = null;
      removeEvent(window, 'resize', this._checkForIntersections, true);
      removeEvent(document, 'scroll', this._checkForIntersections, true);
      if (this._domObserver) {
        this._domObserver.disconnect();
        this._domObserver = null;
      }
    }
  };

  /**
   * Scans each observation target for intersection changes and adds them
   * to the internal entries queue. If new entries are found, it
   * schedules the callback to be invoked.
   * @private
   */
  IntersectionObserver.prototype._checkForIntersections = function () {
    var rootIsInDom = this._rootIsInDom();
    var rootRect = rootIsInDom ? this._getRootRect() : getEmptyRect();
    this._observationTargets.forEach(function (item) {
      var target = item.element;
      var targetRect = getBoundingClientRect(target);
      var rootContainsTarget = this._rootContainsTarget(target);
      var oldEntry = item.entry;
      var intersectionRect = rootIsInDom && rootContainsTarget && this._computeTargetAndRootIntersection(target, rootRect);
      var newEntry = item.entry = new IntersectionObserverEntry({
        time: now(),
        target: target,
        boundingClientRect: targetRect,
        rootBounds: rootRect,
        intersectionRect: intersectionRect
      });
      if (!oldEntry) {
        this._queuedEntries.push(newEntry);
      } else if (rootIsInDom && rootContainsTarget) {
        // If the new entry intersection ratio has crossed any of the
        // thresholds, add a new entry.
        if (this._hasCrossedThreshold(oldEntry, newEntry)) {
          this._queuedEntries.push(newEntry);
        }
      } else {
        // If the root is not in the DOM or target is not contained within
        // root but the previous entry for this target had an intersection,
        // add a new record indicating removal.
        if (oldEntry && oldEntry.isIntersecting) {
          this._queuedEntries.push(newEntry);
        }
      }
    }, this);
    if (this._queuedEntries.length) {
      this._callback(this.takeRecords(), this);
    }
  };

  /**
   * Accepts a target and root rect computes the intersection between then
   * following the algorithm in the spec.
   * TODO(philipwalton): at this time clip-path is not considered.
   * https://w3c.github.io/IntersectionObserver/#calculate-intersection-rect-algo
   * @param {Element} target The target DOM element
   * @param {Object} rootRect The bounding rect of the root after being
   *     expanded by the rootMargin value.
   * @return {?Object} The final intersection rect object or undefined if no
   *     intersection is found.
   * @private
   */
  IntersectionObserver.prototype._computeTargetAndRootIntersection = function (target, rootRect) {
    // If the element isn't displayed, an intersection can't happen.
    if (window.getComputedStyle(target).display == 'none') return;
    var targetRect = getBoundingClientRect(target);
    var intersectionRect = targetRect;
    var parent = getParentNode(target);
    var atRoot = false;
    while (!atRoot) {
      var parentRect = null;
      var parentComputedStyle = parent.nodeType == 1 ? window.getComputedStyle(parent) : {};

      // If the parent isn't displayed, an intersection can't happen.
      if (parentComputedStyle.display == 'none') return;
      if (parent == this.root || parent == document) {
        atRoot = true;
        parentRect = rootRect;
      } else {
        // If the element has a non-visible overflow, and it's not the <body>
        // or <html> element, update the intersection rect.
        // Note: <body> and <html> cannot be clipped to a rect that's not also
        // the document rect, so no need to compute a new intersection.
        if (parent != document.body && parent != document.documentElement && parentComputedStyle.overflow != 'visible') {
          parentRect = getBoundingClientRect(parent);
        }
      }

      // If either of the above conditionals set a new parentRect,
      // calculate new intersection data.
      if (parentRect) {
        intersectionRect = computeRectIntersection(parentRect, intersectionRect);
        if (!intersectionRect) break;
      }
      parent = getParentNode(parent);
    }
    return intersectionRect;
  };

  /**
   * Returns the root rect after being expanded by the rootMargin value.
   * @return {Object} The expanded root rect.
   * @private
   */
  IntersectionObserver.prototype._getRootRect = function () {
    var rootRect;
    if (this.root) {
      rootRect = getBoundingClientRect(this.root);
    } else {
      // Use <html>/<body> instead of window since scroll bars affect size.
      var html = document.documentElement;
      var body = document.body;
      rootRect = {
        top: 0,
        left: 0,
        right: html.clientWidth || body.clientWidth,
        width: html.clientWidth || body.clientWidth,
        bottom: html.clientHeight || body.clientHeight,
        height: html.clientHeight || body.clientHeight
      };
    }
    return this._expandRectByRootMargin(rootRect);
  };

  /**
   * Accepts a rect and expands it by the rootMargin value.
   * @param {Object} rect The rect object to expand.
   * @return {Object} The expanded rect.
   * @private
   */
  IntersectionObserver.prototype._expandRectByRootMargin = function (rect) {
    var margins = this._rootMarginValues.map(function (margin, i) {
      return margin.unit == 'px' ? margin.value : margin.value * (i % 2 ? rect.width : rect.height) / 100;
    });
    var newRect = {
      top: rect.top - margins[0],
      right: rect.right + margins[1],
      bottom: rect.bottom + margins[2],
      left: rect.left - margins[3]
    };
    newRect.width = newRect.right - newRect.left;
    newRect.height = newRect.bottom - newRect.top;
    return newRect;
  };

  /**
   * Accepts an old and new entry and returns true if at least one of the
   * threshold values has been crossed.
   * @param {?IntersectionObserverEntry} oldEntry The previous entry for a
   *    particular target element or null if no previous entry exists.
   * @param {IntersectionObserverEntry} newEntry The current entry for a
   *    particular target element.
   * @return {boolean} Returns true if a any threshold has been crossed.
   * @private
   */
  IntersectionObserver.prototype._hasCrossedThreshold = function (oldEntry, newEntry) {
    // To make comparing easier, an entry that has a ratio of 0
    // but does not actually intersect is given a value of -1
    var oldRatio = oldEntry && oldEntry.isIntersecting ? oldEntry.intersectionRatio || 0 : -1;
    var newRatio = newEntry.isIntersecting ? newEntry.intersectionRatio || 0 : -1;

    // Ignore unchanged ratios
    if (oldRatio === newRatio) return;
    for (var i = 0; i < this.thresholds.length; i++) {
      var threshold = this.thresholds[i];

      // Return true if an entry matches a threshold or if the new ratio
      // and the old ratio are on the opposite sides of a threshold.
      if (threshold == oldRatio || threshold == newRatio || threshold < oldRatio !== threshold < newRatio) {
        return true;
      }
    }
  };

  /**
   * Returns whether or not the root element is an element and is in the DOM.
   * @return {boolean} True if the root element is an element and is in the DOM.
   * @private
   */
  IntersectionObserver.prototype._rootIsInDom = function () {
    return !this.root || containsDeep(document, this.root);
  };

  /**
   * Returns whether or not the target element is a child of root.
   * @param {Element} target The target element to check.
   * @return {boolean} True if the target element is a child of root.
   * @private
   */
  IntersectionObserver.prototype._rootContainsTarget = function (target) {
    return containsDeep(this.root || document, target);
  };

  /**
   * Adds the instance to the global IntersectionObserver registry if it isn't
   * already present.
   * @private
   */
  IntersectionObserver.prototype._registerInstance = function () {
    if (registry.indexOf(this) < 0) {
      registry.push(this);
    }
  };

  /**
   * Removes the instance from the global IntersectionObserver registry.
   * @private
   */
  IntersectionObserver.prototype._unregisterInstance = function () {
    var index = registry.indexOf(this);
    if (index != -1) registry.splice(index, 1);
  };

  /**
   * Returns the result of the performance.now() method or null in browsers
   * that don't support the API.
   * @return {number} The elapsed time since the page was requested.
   */
  function now() {
    return window.performance && performance.now && performance.now();
  }

  /**
   * Throttles a function and delays its execution, so it's only called at most
   * once within a given time period.
   * @param {Function} fn The function to throttle.
   * @param {number} timeout The amount of time that must pass before the
   *     function can be called again.
   * @return {Function} The throttled function.
   */
  function throttle(fn, timeout) {
    var timer = null;
    return function () {
      if (!timer) {
        timer = setTimeout(function () {
          fn();
          timer = null;
        }, timeout);
      }
    };
  }

  /**
   * Adds an event handler to a DOM node ensuring cross-browser compatibility.
   * @param {Node} node The DOM node to add the event handler to.
   * @param {string} event The event name.
   * @param {Function} fn The event handler to add.
   * @param {boolean} opt_useCapture Optionally adds the even to the capture
   *     phase. Note: this only works in modern browsers.
   */
  function addEvent(node, event, fn, opt_useCapture) {
    if (typeof node.addEventListener == 'function') {
      node.addEventListener(event, fn, opt_useCapture || false);
    } else if (typeof node.attachEvent == 'function') {
      node.attachEvent('on' + event, fn);
    }
  }

  /**
   * Removes a previously added event handler from a DOM node.
   * @param {Node} node The DOM node to remove the event handler from.
   * @param {string} event The event name.
   * @param {Function} fn The event handler to remove.
   * @param {boolean} opt_useCapture If the event handler was added with this
   *     flag set to true, it should be set to true here in order to remove it.
   */
  function removeEvent(node, event, fn, opt_useCapture) {
    if (typeof node.removeEventListener == 'function') {
      node.removeEventListener(event, fn, opt_useCapture || false);
    } else if (typeof node.detatchEvent == 'function') {
      node.detatchEvent('on' + event, fn);
    }
  }

  /**
   * Returns the intersection between two rect objects.
   * @param {Object} rect1 The first rect.
   * @param {Object} rect2 The second rect.
   * @return {?Object} The intersection rect or undefined if no intersection
   *     is found.
   */
  function computeRectIntersection(rect1, rect2) {
    var top = Math.max(rect1.top, rect2.top);
    var bottom = Math.min(rect1.bottom, rect2.bottom);
    var left = Math.max(rect1.left, rect2.left);
    var right = Math.min(rect1.right, rect2.right);
    var width = right - left;
    var height = bottom - top;
    return width >= 0 && height >= 0 && {
      top: top,
      bottom: bottom,
      left: left,
      right: right,
      width: width,
      height: height
    };
  }

  /**
   * Shims the native getBoundingClientRect for compatibility with older IE.
   * @param {Element} el The element whose bounding rect to get.
   * @return {Object} The (possibly shimmed) rect of the element.
   */
  function getBoundingClientRect(el) {
    var rect;
    try {
      rect = el.getBoundingClientRect();
    } catch (err) {
      // Ignore Windows 7 IE11 "Unspecified error"
      // https://github.com/w3c/IntersectionObserver/pull/205
    }
    if (!rect) return getEmptyRect();

    // Older IE
    if (!(rect.width && rect.height)) {
      rect = {
        top: rect.top,
        right: rect.right,
        bottom: rect.bottom,
        left: rect.left,
        width: rect.right - rect.left,
        height: rect.bottom - rect.top
      };
    }
    return rect;
  }

  /**
   * Returns an empty rect object. An empty rect is returned when an element
   * is not in the DOM.
   * @return {Object} The empty rect.
   */
  function getEmptyRect() {
    return {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: 0,
      height: 0
    };
  }

  /**
   * Checks to see if a parent element contains a child element (including inside
   * shadow DOM).
   * @param {Node} parent The parent element.
   * @param {Node} child The child element.
   * @return {boolean} True if the parent node contains the child node.
   */
  function containsDeep(parent, child) {
    var node = child;
    while (node) {
      if (node == parent) return true;
      node = getParentNode(node);
    }
    return false;
  }

  /**
   * Gets the parent node of an element or its host element if the parent node
   * is a shadow root.
   * @param {Node} node The node whose parent to get.
   * @return {Node|null} The parent node or null if no parent exists.
   */
  function getParentNode(node) {
    var parent = node.parentNode;
    if (parent && parent.nodeType == 11 && parent.host) {
      // If the parent is a shadow root, return the host element.
      return parent.host;
    }
    if (parent && parent.assignedSlot) {
      // If the parent is distributed in a <slot>, return the parent of a slot.
      return parent.assignedSlot.parentNode;
    }
    return parent;
  }

  // Exposes the constructors globally.
  window.IntersectionObserver = IntersectionObserver;
  window.IntersectionObserverEntry = IntersectionObserverEntry;
})();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__(/*! ./src/polyfill/custom_event_ie.js */ "./src/polyfill/custom_event_ie.js");
__webpack_require__(/*! ./src/polyfill/intersection_observer.js */ "./src/polyfill/intersection_observer.js");
__webpack_require__(/*! ./src/js/lyta.js */ "./src/js/lyta.js");
__webpack_require__(/*! ./src/js/outstream.js */ "./src/js/outstream.js");
__webpack_require__(/*! ./src/js/lazyload.min.js */ "./src/js/lazyload.min.js");
})();

/******/ })()
;
//# sourceMappingURL=lyta.js.map
