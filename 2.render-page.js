exports.ids = [2];
exports.modules = {

/***/ 601:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(66);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactJss = __webpack_require__(179);
	
	var _reactJss2 = _interopRequireDefault(_reactJss);
	
	var _reactShare = __webpack_require__(602);
	
	var _config = __webpack_require__(461);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var styles = function styles(theme) {
	  var _share, _label;
	
	  return {
	    share: (_share = {
	      display: "flex",
	      flexDirection: "column",
	      justifyContent: "center",
	      alignItems: "center",
	      padding: "1em 0 0"
	    }, _share["@media (min-width: " + theme.mediaQueryTresholds.M + "px)"] = {
	      flexDirection: "row"
	    }, _share),
	    links: {
	      display: "flex",
	      flexDirection: "row",
	      "& .SocialMediaShareButton": {
	        margin: "0 .8em",
	        cursor: "pointer"
	      }
	    },
	    label: (_label = {
	      fontSize: "1.2em",
	      margin: "0 1em 1em"
	    }, _label["@media (min-width: " + theme.mediaQueryTresholds.M + "px)"] = {
	      margin: "0 1em"
	    }, _label)
	  };
	};
	
	var PostShare = function (_React$Component) {
	  _inherits(PostShare, _React$Component);
	
	  function PostShare() {
	    _classCallCheck(this, PostShare);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  PostShare.prototype.render = function render() {
	    var _props = this.props,
	        post = _props.post,
	        classes = _props.classes,
	        slug = _props.slug;
	    var excerpt = post.excerpt,
	        frontmatter = post.frontmatter;
	    var title = frontmatter.title;
	
	    var url = _config2.default.siteUrl + _config2.default.pathPrefix + slug;
	
	    var iconSize = 36;
	    var filter = function filter(count) {
	      return count > 0 ? count : "";
	    };
	
	    return _react2.default.createElement(
	      "div",
	      { className: classes.share },
	      _react2.default.createElement(
	        "span",
	        { className: classes.label },
	        "SHARE"
	      ),
	      _react2.default.createElement(
	        "div",
	        { className: classes.links },
	        _react2.default.createElement(
	          _reactShare.TwitterShareButton,
	          { url: url, title: title },
	          _react2.default.createElement(_reactShare.TwitterIcon, { round: true, size: iconSize })
	        ),
	        _react2.default.createElement(
	          _reactShare.GooglePlusShareButton,
	          { url: url },
	          _react2.default.createElement(_reactShare.GooglePlusIcon, { round: true, size: iconSize }),
	          _react2.default.createElement(
	            _reactShare.GooglePlusShareCount,
	            { url: url },
	            function (count) {
	              return _react2.default.createElement(
	                "div",
	                { className: "share-count" },
	                filter(count)
	              );
	            }
	          )
	        ),
	        _react2.default.createElement(
	          _reactShare.FacebookShareButton,
	          {
	            url: url,
	            quote: title + " - " + excerpt,
	            "aria-label": "Facebook share"
	          },
	          _react2.default.createElement(_reactShare.FacebookIcon, { round: true, size: iconSize }),
	          _react2.default.createElement(
	            _reactShare.FacebookShareCount,
	            { url: url },
	            function (count) {
	              return _react2.default.createElement(
	                "div",
	                { className: "share-count" },
	                filter(count)
	              );
	            }
	          )
	        ),
	        _react2.default.createElement(
	          _reactShare.LinkedinShareButton,
	          { url: url, title: title, description: excerpt },
	          _react2.default.createElement(_reactShare.LinkedinIcon, { round: true, size: iconSize }),
	          _react2.default.createElement(
	            _reactShare.LinkedinShareCount,
	            { url: url },
	            function (count) {
	              return _react2.default.createElement(
	                "div",
	                { className: "share-count" },
	                filter(count)
	              );
	            }
	          )
	        )
	      )
	    );
	  };
	
	  return PostShare;
	}(_react2.default.Component);
	
	PostShare.propTypes = {
	  post: _propTypes2.default.object.isRequired,
	  classes: _propTypes2.default.object.isRequired,
	  slug: _propTypes2.default.string.isRequired
	};
	
	exports.default = (0, _reactJss2.default)(styles)(PostShare);
	module.exports = exports["default"];

/***/ }),

/***/ 602:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _FacebookShareCount = __webpack_require__(603);
	
	Object.defineProperty(exports, 'FacebookShareCount', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_FacebookShareCount).default;
	  }
	});
	
	var _GooglePlusShareCount = __webpack_require__(613);
	
	Object.defineProperty(exports, 'GooglePlusShareCount', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_GooglePlusShareCount).default;
	  }
	});
	
	var _LinkedinShareCount = __webpack_require__(617);
	
	Object.defineProperty(exports, 'LinkedinShareCount', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_LinkedinShareCount).default;
	  }
	});
	
	var _PinterestShareCount = __webpack_require__(619);
	
	Object.defineProperty(exports, 'PinterestShareCount', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_PinterestShareCount).default;
	  }
	});
	
	var _VKShareCount = __webpack_require__(620);
	
	Object.defineProperty(exports, 'VKShareCount', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_VKShareCount).default;
	  }
	});
	
	var _OKShareCount = __webpack_require__(621);
	
	Object.defineProperty(exports, 'OKShareCount', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_OKShareCount).default;
	  }
	});
	
	var _RedditShareCount = __webpack_require__(622);
	
	Object.defineProperty(exports, 'RedditShareCount', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_RedditShareCount).default;
	  }
	});
	
	var _TumblrShareCount = __webpack_require__(623);
	
	Object.defineProperty(exports, 'TumblrShareCount', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_TumblrShareCount).default;
	  }
	});
	
	var _FacebookShareButton = __webpack_require__(624);
	
	Object.defineProperty(exports, 'FacebookShareButton', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_FacebookShareButton).default;
	  }
	});
	
	var _GooglePlusShareButton = __webpack_require__(627);
	
	Object.defineProperty(exports, 'GooglePlusShareButton', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_GooglePlusShareButton).default;
	  }
	});
	
	var _LinkedinShareButton = __webpack_require__(628);
	
	Object.defineProperty(exports, 'LinkedinShareButton', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_LinkedinShareButton).default;
	  }
	});
	
	var _TwitterShareButton = __webpack_require__(629);
	
	Object.defineProperty(exports, 'TwitterShareButton', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_TwitterShareButton).default;
	  }
	});
	
	var _PinterestShareButton = __webpack_require__(630);
	
	Object.defineProperty(exports, 'PinterestShareButton', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_PinterestShareButton).default;
	  }
	});
	
	var _VKShareButton = __webpack_require__(631);
	
	Object.defineProperty(exports, 'VKShareButton', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_VKShareButton).default;
	  }
	});
	
	var _OKShareButton = __webpack_require__(632);
	
	Object.defineProperty(exports, 'OKShareButton', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_OKShareButton).default;
	  }
	});
	
	var _TelegramShareButton = __webpack_require__(633);
	
	Object.defineProperty(exports, 'TelegramShareButton', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_TelegramShareButton).default;
	  }
	});
	
	var _WhatsappShareButton = __webpack_require__(634);
	
	Object.defineProperty(exports, 'WhatsappShareButton', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_WhatsappShareButton).default;
	  }
	});
	
	var _RedditShareButton = __webpack_require__(635);
	
	Object.defineProperty(exports, 'RedditShareButton', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_RedditShareButton).default;
	  }
	});
	
	var _EmailShareButton = __webpack_require__(636);
	
	Object.defineProperty(exports, 'EmailShareButton', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_EmailShareButton).default;
	  }
	});
	
	var _TumblrShareButton = __webpack_require__(637);
	
	Object.defineProperty(exports, 'TumblrShareButton', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_TumblrShareButton).default;
	  }
	});
	
	var _LivejournalShareButton = __webpack_require__(638);
	
	Object.defineProperty(exports, 'LivejournalShareButton', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_LivejournalShareButton).default;
	  }
	});
	
	var _MailruShareButton = __webpack_require__(639);
	
	Object.defineProperty(exports, 'MailruShareButton', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_MailruShareButton).default;
	  }
	});
	
	var _ViberShareButton = __webpack_require__(640);
	
	Object.defineProperty(exports, 'ViberShareButton', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_ViberShareButton).default;
	  }
	});
	
	var _FacebookIcon = __webpack_require__(641);
	
	Object.defineProperty(exports, 'FacebookIcon', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_FacebookIcon).default;
	  }
	});
	
	var _TwitterIcon = __webpack_require__(643);
	
	Object.defineProperty(exports, 'TwitterIcon', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_TwitterIcon).default;
	  }
	});
	
	var _GooglePlusIcon = __webpack_require__(644);
	
	Object.defineProperty(exports, 'GooglePlusIcon', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_GooglePlusIcon).default;
	  }
	});
	
	var _LinkedinIcon = __webpack_require__(645);
	
	Object.defineProperty(exports, 'LinkedinIcon', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_LinkedinIcon).default;
	  }
	});
	
	var _PinterestIcon = __webpack_require__(646);
	
	Object.defineProperty(exports, 'PinterestIcon', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_PinterestIcon).default;
	  }
	});
	
	var _VKIcon = __webpack_require__(647);
	
	Object.defineProperty(exports, 'VKIcon', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_VKIcon).default;
	  }
	});
	
	var _OKIcon = __webpack_require__(648);
	
	Object.defineProperty(exports, 'OKIcon', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_OKIcon).default;
	  }
	});
	
	var _TelegramIcon = __webpack_require__(649);
	
	Object.defineProperty(exports, 'TelegramIcon', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_TelegramIcon).default;
	  }
	});
	
	var _WhatsappIcon = __webpack_require__(650);
	
	Object.defineProperty(exports, 'WhatsappIcon', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_WhatsappIcon).default;
	  }
	});
	
	var _RedditIcon = __webpack_require__(651);
	
	Object.defineProperty(exports, 'RedditIcon', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_RedditIcon).default;
	  }
	});
	
	var _TumblrIcon = __webpack_require__(652);
	
	Object.defineProperty(exports, 'TumblrIcon', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_TumblrIcon).default;
	  }
	});
	
	var _MailruIcon = __webpack_require__(653);
	
	Object.defineProperty(exports, 'MailruIcon', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_MailruIcon).default;
	  }
	});
	
	var _EmailIcon = __webpack_require__(654);
	
	Object.defineProperty(exports, 'EmailIcon', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_EmailIcon).default;
	  }
	});
	
	var _LivejournalIcon = __webpack_require__(655);
	
	Object.defineProperty(exports, 'LivejournalIcon', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_LivejournalIcon).default;
	  }
	});
	
	var _ViberIcon = __webpack_require__(656);
	
	Object.defineProperty(exports, 'ViberIcon', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_ViberIcon).default;
	  }
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 603:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsonp = __webpack_require__(604);
	
	var _jsonp2 = _interopRequireDefault(_jsonp);
	
	var _shareCountFactory = __webpack_require__(605);
	
	var _shareCountFactory2 = _interopRequireDefault(_shareCountFactory);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getFacebookShareCount(shareUrl, callback) {
	  var endpoint = 'https://graph.facebook.com/?id=' + shareUrl;
	
	  (0, _jsonp2.default)(endpoint, function (err, data) {
	    callback(!err && data && data.share && data.share.share_count ? data.share.share_count : undefined);
	  });
	}
	
	exports.default = (0, _shareCountFactory2.default)(getFacebookShareCount);

/***/ }),

/***/ 604:
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies
	 */
	
	var debug = __webpack_require__(562)('jsonp');
	
	/**
	 * Module exports.
	 */
	
	module.exports = jsonp;
	
	/**
	 * Callback index.
	 */
	
	var count = 0;
	
	/**
	 * Noop function.
	 */
	
	function noop(){}
	
	/**
	 * JSONP handler
	 *
	 * Options:
	 *  - param {String} qs parameter (`callback`)
	 *  - prefix {String} qs parameter (`__jp`)
	 *  - name {String} qs parameter (`prefix` + incr)
	 *  - timeout {Number} how long after a timeout error is emitted (`60000`)
	 *
	 * @param {String} url
	 * @param {Object|Function} optional options / callback
	 * @param {Function} optional callback
	 */
	
	function jsonp(url, opts, fn){
	  if ('function' == typeof opts) {
	    fn = opts;
	    opts = {};
	  }
	  if (!opts) opts = {};
	
	  var prefix = opts.prefix || '__jp';
	
	  // use the callback name that was passed if one was provided.
	  // otherwise generate a unique name by incrementing our counter.
	  var id = opts.name || (prefix + (count++));
	
	  var param = opts.param || 'callback';
	  var timeout = null != opts.timeout ? opts.timeout : 60000;
	  var enc = encodeURIComponent;
	  var target = document.getElementsByTagName('script')[0] || document.head;
	  var script;
	  var timer;
	
	
	  if (timeout) {
	    timer = setTimeout(function(){
	      cleanup();
	      if (fn) fn(new Error('Timeout'));
	    }, timeout);
	  }
	
	  function cleanup(){
	    if (script.parentNode) script.parentNode.removeChild(script);
	    window[id] = noop;
	    if (timer) clearTimeout(timer);
	  }
	
	  function cancel(){
	    if (window[id]) {
	      cleanup();
	    }
	  }
	
	  window[id] = function(data){
	    debug('jsonp got', data);
	    cleanup();
	    if (fn) fn(null, data);
	  };
	
	  // add qs component
	  url += (~url.indexOf('?') ? '&' : '?') + param + '=' + enc(id);
	  url = url.replace('?&', '?');
	
	  debug('jsonp req "%s"', url);
	
	  // create script
	  script = document.createElement('script');
	  script.src = url;
	  target.parentNode.insertBefore(script, target);
	
	  return cancel;
	}


/***/ }),

/***/ 605:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(79);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _getPrototypeOf = __webpack_require__(606);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(123);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(609);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(124);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(158);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	exports.default = shareCountFactory;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(66);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _classnames = __webpack_require__(351);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SocialMediaShareCount = function (_Component) {
	  (0, _inherits3.default)(SocialMediaShareCount, _Component);
	
	  function SocialMediaShareCount(props) {
	    (0, _classCallCheck3.default)(this, SocialMediaShareCount);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (SocialMediaShareCount.__proto__ || (0, _getPrototypeOf2.default)(SocialMediaShareCount)).call(this, props));
	
	    _this._isMounted = false;
	    _this.state = { count: 0 };
	    return _this;
	  }
	
	  (0, _createClass3.default)(SocialMediaShareCount, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this._isMounted = true;
	      this.updateCount(this.props.url);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.url !== this.props.url) {
	        this.updateCount(nextProps.url);
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this._isMounted = false;
	    }
	  }, {
	    key: 'updateCount',
	    value: function updateCount(url) {
	      var _this2 = this;
	
	      if (this.props.getCount) {
	        this.setState({
	          isLoading: true
	        });
	
	        this.props.getCount(url, function (count) {
	          if (_this2._isMounted) {
	            _this2.setState({
	              count: count,
	              isLoading: false
	            });
	          }
	        });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _state = this.state,
	          count = _state.count,
	          isLoading = _state.isLoading;
	      var _props = this.props,
	          children = _props.children,
	          className = _props.className;
	
	
	      return _react2.default.createElement(
	        'div',
	        { className: (0, _classnames2.default)('SocialMediaShareCount', className) },
	        !isLoading && children(count || 0)
	      );
	    }
	  }]);
	  return SocialMediaShareCount;
	}(_react.Component);
	
	SocialMediaShareCount.propTypes = {
	  children: _propTypes2.default.func,
	  className: _propTypes2.default.string,
	  getCount: _propTypes2.default.func,
	  url: _propTypes2.default.string.isRequired
	};
	
	SocialMediaShareCount.defaultProps = {
	  children: function children(shareCount) {
	    return shareCount;
	  }
	};
	
	function shareCountFactory(getCount) {
	  return function (props) {
	    return _react2.default.createElement(SocialMediaShareCount, (0, _extends3.default)({ getCount: getCount }, props));
	  };
	}

/***/ }),

/***/ 606:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(607), __esModule: true };

/***/ }),

/***/ 607:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(608);
	module.exports = __webpack_require__(85).Object.getPrototypeOf;


/***/ }),

/***/ 608:
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject = __webpack_require__(117);
	var $getPrototypeOf = __webpack_require__(139);
	
	__webpack_require__(121)('getPrototypeOf', function () {
	  return function getPrototypeOf(it) {
	    return $getPrototypeOf(toObject(it));
	  };
	});


/***/ }),

/***/ 609:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(610);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ }),

/***/ 610:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(611), __esModule: true };

/***/ }),

/***/ 611:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(612);
	var $Object = __webpack_require__(85).Object;
	module.exports = function defineProperty(it, key, desc) {
	  return $Object.defineProperty(it, key, desc);
	};


/***/ }),

/***/ 612:
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(83);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(93), 'Object', { defineProperty: __webpack_require__(89).f });


/***/ }),

/***/ 613:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _stringify = __webpack_require__(614);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _ieDetection = __webpack_require__(616);
	
	var _ieDetection2 = _interopRequireDefault(_ieDetection);
	
	var _shareCountFactory = __webpack_require__(605);
	
	var _shareCountFactory2 = _interopRequireDefault(_shareCountFactory);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getGooglePlusShareCount(shareUrl, callback) {
	  if ((0, _ieDetection2.default)(11)) {
	    /* eslint-disable no-console */
	    console.error('Google plus share count is not supported in <=IE10!');
	    /* eslint-enable no-console */
	    return;
	  }
	
	  var xhr = new XMLHttpRequest();
	
	  xhr.open('POST', 'https://clients6.google.com/rpc');
	  xhr.setRequestHeader('Accept', 'application/json');
	  xhr.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
	
	  xhr.send((0, _stringify2.default)({
	    method: 'pos.plusones.get',
	    id: 'p',
	    params: {
	      nolog: true,
	      id: shareUrl,
	      source: 'widget',
	      userId: '@viewer',
	      groupId: '@self'
	    },
	    jsonrpc: '2.0',
	    key: 'p',
	    apiVersion: 'v1'
	  }));
	
	  xhr.onload = function onSuccessdata() {
	    var data = JSON.parse(this.responseText);
	    callback(data ? data.result.metadata.globalCounts.count : undefined);
	  };
	
	  xhr.onerror = function onErrordata() {};
	}
	
	exports.default = (0, _shareCountFactory2.default)(getGooglePlusShareCount);

/***/ }),

/***/ 614:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(615), __esModule: true };

/***/ }),

/***/ 615:
/***/ (function(module, exports, __webpack_require__) {

	var core = __webpack_require__(85);
	var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
	module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};


/***/ }),

/***/ 616:
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isInternetExplorerBefore;
	/*
	 * This detection method identifies Internet Explorers up until version 11.
	 *
	 * Reference: https://msdn.microsoft.com/en-us/library/ms537503(v=vs.85).aspx
	 */
	function isInternetExplorerBefore(version) {
	  var iematch = /MSIE ([0-9]+)/g.exec(window.navigator.userAgent);
	
	  return iematch ? +iematch[1] < version : false;
	}

/***/ }),

/***/ 617:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsonp = __webpack_require__(604);
	
	var _jsonp2 = _interopRequireDefault(_jsonp);
	
	var _objectToGetParams = __webpack_require__(618);
	
	var _objectToGetParams2 = _interopRequireDefault(_objectToGetParams);
	
	var _shareCountFactory = __webpack_require__(605);
	
	var _shareCountFactory2 = _interopRequireDefault(_shareCountFactory);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getLinkedinShareCount(shareUrl, callback) {
	  var url = 'https://www.linkedin.com/countserv/count/share';
	
	  return (0, _jsonp2.default)(url + (0, _objectToGetParams2.default)({
	    url: shareUrl,
	    format: 'jsonp'
	  }), function (err, data) {
	    callback(data ? data.count : undefined);
	  });
	}
	
	exports.default = (0, _shareCountFactory2.default)(getLinkedinShareCount);

/***/ }),

/***/ 618:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _keys = __webpack_require__(118);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	exports.default = objectToGetParams;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* eslint-disable prefer-template */
	function objectToGetParams(object) {
	  return '?' + (0, _keys2.default)(object).filter(function (key) {
	    return !!object[key];
	  }).map(function (key) {
	    return key + '=' + encodeURIComponent(object[key]);
	  }).join('&');
	}
	/* eslint-enable prefer-template */

/***/ }),

/***/ 619:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsonp = __webpack_require__(604);
	
	var _jsonp2 = _interopRequireDefault(_jsonp);
	
	var _objectToGetParams = __webpack_require__(618);
	
	var _objectToGetParams2 = _interopRequireDefault(_objectToGetParams);
	
	var _shareCountFactory = __webpack_require__(605);
	
	var _shareCountFactory2 = _interopRequireDefault(_shareCountFactory);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getPinterestShareCount(shareUrl, callback) {
	  var url = 'https://api.pinterest.com/v1/urls/count.json';
	
	  return (0, _jsonp2.default)(url + (0, _objectToGetParams2.default)({
	    url: shareUrl
	  }), function (err, data) {
	    callback(data ? data.count : undefined);
	  });
	}
	
	exports.default = (0, _shareCountFactory2.default)(getPinterestShareCount);

/***/ }),

/***/ 620:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsonp = __webpack_require__(604);
	
	var _jsonp2 = _interopRequireDefault(_jsonp);
	
	var _objectToGetParams = __webpack_require__(618);
	
	var _objectToGetParams2 = _interopRequireDefault(_objectToGetParams);
	
	var _shareCountFactory = __webpack_require__(605);
	
	var _shareCountFactory2 = _interopRequireDefault(_shareCountFactory);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getVKShareCount(shareUrl, callback) {
	  if (!window.VK) {
	    window.VK = {
	      Share: {
	        count: function count(index, _count) {
	          return window.VK.callbacks[index](_count);
	        }
	      },
	      callbacks: []
	    };
	  }
	
	  var url = 'https://vk.com/share.php';
	  var index = window.VK.callbacks.length;
	
	  window.VK.callbacks.push(callback);
	
	  return (0, _jsonp2.default)(url + (0, _objectToGetParams2.default)({
	    act: 'count',
	    index: index,
	    url: shareUrl
	  }));
	}
	
	exports.default = (0, _shareCountFactory2.default)(getVKShareCount);

/***/ }),

/***/ 621:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsonp = __webpack_require__(604);
	
	var _jsonp2 = _interopRequireDefault(_jsonp);
	
	var _objectToGetParams = __webpack_require__(618);
	
	var _objectToGetParams2 = _interopRequireDefault(_objectToGetParams);
	
	var _shareCountFactory = __webpack_require__(605);
	
	var _shareCountFactory2 = _interopRequireDefault(_shareCountFactory);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getOKShareCount(shareUrl, callback) {
	  if (!window.OK) {
	    window.OK = {
	      Share: {
	        count: function count(index, _count) {
	          return window.OK.callbacks[index](_count);
	        }
	      },
	      callbacks: []
	    };
	  }
	
	  var url = 'https://connect.ok.ru/dk';
	  var index = window.OK.callbacks.length;
	
	  window.ODKL = {
	    updateCount: function updateCount(a, b) {
	      window.OK.callbacks[index](b);
	    }
	  };
	  window.OK.callbacks.push(callback);
	
	  return (0, _jsonp2.default)(url + (0, _objectToGetParams2.default)({
	    'st.cmd': 'extLike',
	    uid: 'odklcnt0',
	    ref: shareUrl
	  }));
	}
	
	exports.default = (0, _shareCountFactory2.default)(getOKShareCount);

/***/ }),

/***/ 622:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsonp = __webpack_require__(604);
	
	var _jsonp2 = _interopRequireDefault(_jsonp);
	
	var _shareCountFactory = __webpack_require__(605);
	
	var _shareCountFactory2 = _interopRequireDefault(_shareCountFactory);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getRedditShareCount(shareUrl, callback) {
	  var endpoint = 'https://www.reddit.com/api/info.json?limit=1&url=' + shareUrl;
	
	  (0, _jsonp2.default)(endpoint, { param: 'jsonp' }, function (err, response) {
	    callback(!err && response && response.data && response.data.children.length > 0 && response.data.children[0].data.score ? response.data.children[0].data.score : undefined);
	  });
	}
	
	exports.default = (0, _shareCountFactory2.default)(getRedditShareCount);

/***/ }),

/***/ 623:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsonp = __webpack_require__(604);
	
	var _jsonp2 = _interopRequireDefault(_jsonp);
	
	var _objectToGetParams = __webpack_require__(618);
	
	var _objectToGetParams2 = _interopRequireDefault(_objectToGetParams);
	
	var _shareCountFactory = __webpack_require__(605);
	
	var _shareCountFactory2 = _interopRequireDefault(_shareCountFactory);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getTumblrShareCount(shareUrl, callback) {
	  var endpoint = 'https://api.tumblr.com/v2/share/stats';
	
	  return (0, _jsonp2.default)(endpoint + (0, _objectToGetParams2.default)({
	    url: shareUrl
	  }), function (err, data) {
	    callback(data ? data.note_count : undefined);
	  });
	}
	
	exports.default = (0, _shareCountFactory2.default)(getTumblrShareCount);

/***/ }),

/***/ 624:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _propTypes = __webpack_require__(66);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _assert = __webpack_require__(625);
	
	var _assert2 = _interopRequireDefault(_assert);
	
	var _objectToGetParams = __webpack_require__(618);
	
	var _objectToGetParams2 = _interopRequireDefault(_objectToGetParams);
	
	var _createShareButton = __webpack_require__(626);
	
	var _createShareButton2 = _interopRequireDefault(_createShareButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function facebookLink(url, _ref) {
	  var quote = _ref.quote,
	      hashtag = _ref.hashtag;
	
	  (0, _assert2.default)(url, 'facebook.url');
	
	  return 'https://www.facebook.com/sharer/sharer.php' + (0, _objectToGetParams2.default)({
	    u: url,
	    quote: quote,
	    hashtag: hashtag
	  });
	}
	
	var FacebookShareButton = (0, _createShareButton2.default)('facebook', facebookLink, function (props) {
	  /* eslint-disable no-console */
	  if (props.picture) {
	    console.warn('FacebookShareButton warning: picture is a deprecated prop.');
	  }
	
	  if (props.title) {
	    console.warn('FacebookShareButton warning: title is a deprecated prop. Use "quote" instead.');
	  }
	
	  if (props.description) {
	    console.warn('FacebookShareButton warning: description is a deprecated prop.\n      Use "quote" instead.');
	  }
	  /* eslint-enable no-console */
	
	  return {
	    quote: props.quote,
	    hashtag: props.hashtag
	  };
	}, {
	  quote: _propTypes2.default.string,
	  hashtag: _propTypes2.default.string
	}, {
	  windowWidth: 550,
	  windowHeight: 400
	});
	
	exports.default = FacebookShareButton;

/***/ }),

/***/ 626:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(79);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _getPrototypeOf = __webpack_require__(606);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(123);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(609);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(124);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(158);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _keys = __webpack_require__(118);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _typeof2 = __webpack_require__(125);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(66);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _classnames = __webpack_require__(351);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _ieDetection = __webpack_require__(616);
	
	var _ieDetection2 = _interopRequireDefault(_ieDetection);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var isPromise = function isPromise(obj) {
	  return !!obj && ((typeof obj === 'undefined' ? 'undefined' : (0, _typeof3.default)(obj)) === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
	};
	
	function windowOpen(url, _ref, onShareWindowClose) {
	  var name = _ref.name,
	      _ref$height = _ref.height,
	      height = _ref$height === undefined ? 400 : _ref$height,
	      _ref$width = _ref.width,
	      width = _ref$width === undefined ? 550 : _ref$width;
	
	  /* eslint-disable no-mixed-operators */
	  var left = window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - width / 2;
	  var top = window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - height / 2;
	  /* eslint-enable no-mixed-operators */
	
	  var config = {
	    height: height,
	    width: width,
	    left: left,
	    top: top,
	    location: 'no',
	    toolbar: 'no',
	    status: 'no',
	    directories: 'no',
	    menubar: 'no',
	    scrollbars: 'yes',
	    resizable: 'no',
	    centerscreen: 'yes',
	    chrome: 'yes'
	  };
	
	  var shareDialog = window.open(url, (0, _ieDetection2.default)(10) ? '' : name, (0, _keys2.default)(config).map(function (key) {
	    return key + '=' + config[key];
	  }).join(', '));
	
	  if (onShareWindowClose) {
	    var interval = window.setInterval(function () {
	      try {
	        if (shareDialog === null || shareDialog.closed) {
	          window.clearInterval(interval);
	          onShareWindowClose(shareDialog);
	        }
	      } catch (e) {
	        /* eslint-disable no-console */
	        console.error(e);
	        /* eslint-enable no-console */
	      }
	    }, 1000);
	  }
	
	  return shareDialog;
	}
	
	var ShareButton = function (_PureComponent) {
	  (0, _inherits3.default)(ShareButton, _PureComponent);
	
	  function ShareButton() {
	    var _ref2;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, ShareButton);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref2 = ShareButton.__proto__ || (0, _getPrototypeOf2.default)(ShareButton)).call.apply(_ref2, [this].concat(args))), _this), _this.onClick = function (e) {
	      var _this$props = _this.props,
	          disabled = _this$props.disabled,
	          onClick = _this$props.onClick,
	          openWindow = _this$props.openWindow,
	          beforeOnClick = _this$props.beforeOnClick;
	
	
	      if (disabled) {
	        return;
	      }
	
	      e.preventDefault();
	
	      var link = _this.link();
	
	      var clickHandler = openWindow ? function () {
	        return _this.openWindow(link);
	      } : function () {
	        return onClick(link);
	      };
	
	      if (beforeOnClick) {
	        var returnVal = beforeOnClick();
	
	        if (isPromise(returnVal)) {
	          returnVal.then(clickHandler);
	        } else {
	          clickHandler();
	        }
	      } else {
	        clickHandler();
	      }
	    }, _this.onKeyPress = function (e) {
	      if (e.key === 'Enter' || e.key === 13 || e.key === ' ' || e.key === 32) {
	        _this.onClick(e);
	      }
	    }, _this.openWindow = function (link) {
	      var _this$props2 = _this.props,
	          onShareWindowClose = _this$props2.onShareWindowClose,
	          windowWidth = _this$props2.windowWidth,
	          windowHeight = _this$props2.windowHeight;
	
	
	      var windowOptions = {
	        height: windowHeight,
	        width: windowWidth
	      };
	
	      windowOpen(link, windowOptions, onShareWindowClose);
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(ShareButton, [{
	    key: 'link',
	    value: function link() {
	      var _props = this.props,
	          url = _props.url,
	          opts = _props.opts,
	          networkLink = _props.networkLink;
	
	      return networkLink(url, opts);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props,
	          additionalProps = _props2.additionalProps,
	          children = _props2.children,
	          className = _props2.className,
	          disabled = _props2.disabled,
	          disabledStyle = _props2.disabledStyle,
	          name = _props2.name,
	          network = _props2.network,
	          role = _props2.role,
	          style = _props2.style,
	          tabIndex = _props2.tabIndex;
	
	
	      var classes = (0, _classnames2.default)('SocialMediaShareButton', 'SocialMediaShareButton--' + network, {
	        'SocialMediaShareButton--disabled': !!disabled,
	        disabled: !!disabled
	      }, className);
	
	      return _react2.default.createElement(
	        'div',
	        (0, _extends3.default)({
	          name: name
	        }, additionalProps, {
	          role: role,
	          tabIndex: tabIndex,
	          onClick: this.onClick,
	          onKeyPress: this.onKeyPress,
	          className: classes,
	          style: (0, _extends3.default)({}, style, disabled ? disabledStyle : {}) }),
	        children
	      );
	    }
	  }]);
	  return ShareButton;
	}(_react.PureComponent);
	
	ShareButton.propTypes = {
	  additionalProps: _propTypes2.default.object,
	  children: _propTypes2.default.node,
	  className: _propTypes2.default.string,
	  disabled: _propTypes2.default.bool,
	  disabledStyle: _propTypes2.default.object,
	  name: _propTypes2.default.string,
	  network: _propTypes2.default.string.isRequired,
	  networkLink: _propTypes2.default.func.isRequired,
	  onClick: _propTypes2.default.func,
	  opts: _propTypes2.default.object,
	  openWindow: _propTypes2.default.bool,
	  url: _propTypes2.default.string.isRequired,
	  role: _propTypes2.default.string,
	  style: _propTypes2.default.object,
	  windowWidth: _propTypes2.default.number,
	  windowHeight: _propTypes2.default.number,
	  beforeOnClick: _propTypes2.default.func,
	  onShareWindowClose: _propTypes2.default.func,
	  tabIndex: _propTypes2.default.string
	};
	ShareButton.defaultProps = {
	  disabledStyle: {
	    opacity: 0.6
	  },
	  openWindow: true,
	  role: 'button',
	  tabIndex: '0'
	};
	
	
	function createShareButton(network, link) {
	  var optsMap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
	    return {};
	  };
	  var propTypes = arguments[3];
	  var defaultProps = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
	
	  var CreatedButton = function CreatedButton(props) {
	    return _react2.default.createElement(ShareButton, (0, _extends3.default)({}, props, {
	      network: network,
	      networkLink: link,
	      opts: optsMap(props) }));
	  };
	
	  CreatedButton.propTypes = propTypes;
	  CreatedButton.defaultProps = defaultProps;
	
	  return CreatedButton;
	}
	
	exports.default = createShareButton;

/***/ }),

/***/ 627:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _assert = __webpack_require__(625);
	
	var _assert2 = _interopRequireDefault(_assert);
	
	var _objectToGetParams = __webpack_require__(618);
	
	var _objectToGetParams2 = _interopRequireDefault(_objectToGetParams);
	
	var _createShareButton = __webpack_require__(626);
	
	var _createShareButton2 = _interopRequireDefault(_createShareButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function googlePlusLink(url) {
	  (0, _assert2.default)(url, 'googlePlus.url');
	
	  return 'https://plus.google.com/share' + (0, _objectToGetParams2.default)({ url: url });
	}
	
	var GooglePlusShareButton = (0, _createShareButton2.default)('googlePlus', googlePlusLink, undefined, undefined, {
	  windowWidth: 550,
	  windowHeight: 400
	});
	
	exports.default = GooglePlusShareButton;

/***/ }),

/***/ 628:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _propTypes = __webpack_require__(66);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _assert = __webpack_require__(625);
	
	var _assert2 = _interopRequireDefault(_assert);
	
	var _objectToGetParams = __webpack_require__(618);
	
	var _objectToGetParams2 = _interopRequireDefault(_objectToGetParams);
	
	var _createShareButton = __webpack_require__(626);
	
	var _createShareButton2 = _interopRequireDefault(_createShareButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function linkedinLink(url, _ref) {
	  var title = _ref.title,
	      description = _ref.description;
	
	  (0, _assert2.default)(url, 'linkedin.url');
	
	  return 'https://linkedin.com/shareArticle' + (0, _objectToGetParams2.default)({
	    url: url,
	    title: title,
	    summary: description
	  });
	}
	
	var LinkedinShareButton = (0, _createShareButton2.default)('linkedin', linkedinLink, function (props) {
	  return {
	    title: props.title,
	    description: props.description
	  };
	}, {
	  title: _propTypes2.default.string,
	  description: _propTypes2.default.string
	}, {
	  windowWidth: 750,
	  windowHeight: 600
	});
	
	exports.default = LinkedinShareButton;

/***/ }),

/***/ 629:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _propTypes = __webpack_require__(66);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _assert = __webpack_require__(625);
	
	var _assert2 = _interopRequireDefault(_assert);
	
	var _objectToGetParams = __webpack_require__(618);
	
	var _objectToGetParams2 = _interopRequireDefault(_objectToGetParams);
	
	var _createShareButton = __webpack_require__(626);
	
	var _createShareButton2 = _interopRequireDefault(_createShareButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function twitterLink(url, _ref) {
	  var title = _ref.title,
	      via = _ref.via,
	      _ref$hashtags = _ref.hashtags,
	      hashtags = _ref$hashtags === undefined ? [] : _ref$hashtags;
	
	  (0, _assert2.default)(url, 'twitter.url');
	  (0, _assert2.default)(Array.isArray(hashtags), 'twitter.hashtags is not an array');
	
	  return 'https://twitter.com/share' + (0, _objectToGetParams2.default)({
	    url: url,
	    text: title,
	    via: via,
	    hashtags: hashtags.join(',')
	  });
	}
	
	var TwitterShareButton = (0, _createShareButton2.default)('twitter', twitterLink, function (props) {
	  return {
	    hashtags: props.hashtags,
	    title: props.title,
	    via: props.via
	  };
	}, {
	  hashtags: _propTypes2.default.arrayOf(_propTypes2.default.string),
	  title: _propTypes2.default.string,
	  via: _propTypes2.default.string
	}, {
	  windowWidth: 550,
	  windowHeight: 400
	});
	
	exports.default = TwitterShareButton;

/***/ }),

/***/ 630:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _propTypes = __webpack_require__(66);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _assert = __webpack_require__(625);
	
	var _assert2 = _interopRequireDefault(_assert);
	
	var _objectToGetParams = __webpack_require__(618);
	
	var _objectToGetParams2 = _interopRequireDefault(_objectToGetParams);
	
	var _createShareButton = __webpack_require__(626);
	
	var _createShareButton2 = _interopRequireDefault(_createShareButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function pinterestLink(url, _ref) {
	  var media = _ref.media,
	      description = _ref.description;
	
	  (0, _assert2.default)(url, 'pinterest.url');
	  (0, _assert2.default)(media, 'pinterest.media');
	
	  return 'https://pinterest.com/pin/create/button/' + (0, _objectToGetParams2.default)({
	    url: url,
	    media: media,
	    description: description
	  });
	}
	
	var PinterestShareButton = (0, _createShareButton2.default)('pinterest', pinterestLink, function (props) {
	  return {
	    media: props.media,
	    description: props.description
	  };
	}, {
	  media: _propTypes2.default.string.isRequired,
	  description: _propTypes2.default.string
	}, {
	  windowWidth: 1000,
	  windowHeight: 730
	});
	
	exports.default = PinterestShareButton;

/***/ }),

/***/ 631:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _propTypes = __webpack_require__(66);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _assert = __webpack_require__(625);
	
	var _assert2 = _interopRequireDefault(_assert);
	
	var _objectToGetParams = __webpack_require__(618);
	
	var _objectToGetParams2 = _interopRequireDefault(_objectToGetParams);
	
	var _createShareButton = __webpack_require__(626);
	
	var _createShareButton2 = _interopRequireDefault(_createShareButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function vkLink(url, _ref) {
	  var title = _ref.title,
	      description = _ref.description,
	      image = _ref.image;
	
	  (0, _assert2.default)(url, 'vk.url');
	
	  return 'https://vk.com/share.php' + (0, _objectToGetParams2.default)({
	    url: url,
	    title: title,
	    description: description,
	    image: image
	  });
	}
	
	var VKShareButton = (0, _createShareButton2.default)('vk', vkLink, function (props) {
	  return {
	    title: props.title,
	    description: props.description,
	    image: props.image
	  };
	}, {
	  title: _propTypes2.default.string,
	  description: _propTypes2.default.string,
	  image: _propTypes2.default.string
	}, {
	  windowWidth: 660,
	  windowHeight: 460
	});
	
	exports.default = VKShareButton;

/***/ }),

/***/ 632:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _propTypes = __webpack_require__(66);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _assert = __webpack_require__(625);
	
	var _assert2 = _interopRequireDefault(_assert);
	
	var _objectToGetParams = __webpack_require__(618);
	
	var _objectToGetParams2 = _interopRequireDefault(_objectToGetParams);
	
	var _createShareButton = __webpack_require__(626);
	
	var _createShareButton2 = _interopRequireDefault(_createShareButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function okLink(url, _ref) {
	  var title = _ref.title,
	      description = _ref.description,
	      image = _ref.image;
	
	  (0, _assert2.default)(url, 'ok.url');
	
	  return 'https://connect.ok.ru/offer' + (0, _objectToGetParams2.default)({
	    url: url,
	    title: title,
	    description: description,
	    imageUrl: image
	  });
	}
	
	var OKShareButton = (0, _createShareButton2.default)('ok', okLink, function (props) {
	  return {
	    title: props.title,
	    description: props.description,
	    image: props.image
	  };
	}, {
	  title: _propTypes2.default.string,
	  description: _propTypes2.default.string,
	  image: _propTypes2.default.string
	}, {
	  windowWidth: 660,
	  windowHeight: 460
	});
	
	exports.default = OKShareButton;

/***/ }),

/***/ 633:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _propTypes = __webpack_require__(66);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _assert = __webpack_require__(625);
	
	var _assert2 = _interopRequireDefault(_assert);
	
	var _objectToGetParams = __webpack_require__(618);
	
	var _objectToGetParams2 = _interopRequireDefault(_objectToGetParams);
	
	var _createShareButton = __webpack_require__(626);
	
	var _createShareButton2 = _interopRequireDefault(_createShareButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function telegramLink(url, _ref) {
	  var title = _ref.title;
	
	  (0, _assert2.default)(url, 'telegram.url');
	
	  return 'https://telegram.me/share/' + (0, _objectToGetParams2.default)({
	    url: url,
	    text: title
	  });
	}
	
	var TelegramShareButton = (0, _createShareButton2.default)('telegram', telegramLink, function (props) {
	  return {
	    title: props.title,
	    via: props.via
	  };
	}, {
	  title: _propTypes2.default.string,
	  via: _propTypes2.default.string
	}, {
	  windowWidth: 550,
	  windowHeight: 400
	});
	
	exports.default = TelegramShareButton;

/***/ }),

/***/ 634:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _propTypes = __webpack_require__(66);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _assert = __webpack_require__(625);
	
	var _assert2 = _interopRequireDefault(_assert);
	
	var _objectToGetParams = __webpack_require__(618);
	
	var _objectToGetParams2 = _interopRequireDefault(_objectToGetParams);
	
	var _createShareButton = __webpack_require__(626);
	
	var _createShareButton2 = _interopRequireDefault(_createShareButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function whatsappLink(url, _ref) {
	  var title = _ref.title,
	      separator = _ref.separator;
	
	  (0, _assert2.default)(url, 'whatsapp.url');
	  return 'https://api.whatsapp.com/send' + (0, _objectToGetParams2.default)({
	    text: title ? title + separator + url : url
	  });
	}
	
	var WhatsappShareButton = (0, _createShareButton2.default)('whatsapp', whatsappLink, function (props) {
	  return {
	    title: props.title,
	    separator: props.separator
	  };
	}, {
	  title: _propTypes2.default.string,
	  separator: _propTypes2.default.string
	}, {
	  separator: ' ',
	  windowWidth: 550,
	  windowHeight: 400
	});
	
	exports.default = WhatsappShareButton;

/***/ }),

/***/ 635:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _propTypes = __webpack_require__(66);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _assert = __webpack_require__(625);
	
	var _assert2 = _interopRequireDefault(_assert);
	
	var _objectToGetParams = __webpack_require__(618);
	
	var _objectToGetParams2 = _interopRequireDefault(_objectToGetParams);
	
	var _createShareButton = __webpack_require__(626);
	
	var _createShareButton2 = _interopRequireDefault(_createShareButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function redditLink(url, _ref) {
	  var title = _ref.title;
	
	  (0, _assert2.default)(url, 'reddit.url');
	
	  return 'https://www.reddit.com/submit' + (0, _objectToGetParams2.default)({
	    url: url,
	    title: title
	  });
	}
	
	var RedditShareButton = (0, _createShareButton2.default)('reddit', redditLink, function (props) {
	  return {
	    title: props.title
	  };
	}, {
	  title: _propTypes2.default.string
	}, {
	  windowWidth: 660,
	  windowHeight: 460
	});
	
	exports.default = RedditShareButton;

/***/ }),

/***/ 636:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _propTypes = __webpack_require__(66);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _objectToGetParams = __webpack_require__(618);
	
	var _objectToGetParams2 = _interopRequireDefault(_objectToGetParams);
	
	var _createShareButton = __webpack_require__(626);
	
	var _createShareButton2 = _interopRequireDefault(_createShareButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function emailLink(url, _ref) {
	  var subject = _ref.subject,
	      body = _ref.body;
	
	  return 'mailto:' + (0, _objectToGetParams2.default)({ subject: subject, body: body || url });
	}
	
	var EmailShareButton = (0, _createShareButton2.default)('email', emailLink, function (props) {
	  return {
	    subject: props.subject,
	    body: props.body
	  };
	}, {
	  subject: _propTypes2.default.string,
	  body: _propTypes2.default.string
	}, {
	  openWindow: false,
	  onClick: function onClick(link) {
	    window.location.href = link;
	  }
	});
	
	exports.default = EmailShareButton;

/***/ }),

/***/ 637:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _propTypes = __webpack_require__(66);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _assert = __webpack_require__(625);
	
	var _assert2 = _interopRequireDefault(_assert);
	
	var _objectToGetParams = __webpack_require__(618);
	
	var _objectToGetParams2 = _interopRequireDefault(_objectToGetParams);
	
	var _createShareButton = __webpack_require__(626);
	
	var _createShareButton2 = _interopRequireDefault(_createShareButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function tumblrLink(url, _ref) {
	  var title = _ref.title,
	      caption = _ref.caption,
	      tags = _ref.tags,
	      posttype = _ref.posttype;
	
	  (0, _assert2.default)(url, 'tumblr.url');
	
	  return 'https://www.tumblr.com/widgets/share/tool' + (0, _objectToGetParams2.default)({
	    canonicalUrl: url,
	    title: title,
	    caption: caption,
	    tags: tags,
	    posttype: posttype
	  });
	}
	
	var TumblrShareButton = (0, _createShareButton2.default)('tumblr', tumblrLink, function (props) {
	  return {
	    title: props.title,
	    tags: props.tags.join(','),
	    caption: props.caption,
	    posttype: props.posttype
	  };
	}, {
	  title: _propTypes2.default.string,
	  caption: _propTypes2.default.string,
	  posttype: _propTypes2.default.string,
	  tags: _propTypes2.default.arrayOf(_propTypes2.default.string)
	}, {
	  tags: [],
	  posttype: 'link',
	  windowWidth: 660,
	  windowHeight: 460
	});
	
	exports.default = TumblrShareButton;

/***/ }),

/***/ 638:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _propTypes = __webpack_require__(66);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _assert = __webpack_require__(625);
	
	var _assert2 = _interopRequireDefault(_assert);
	
	var _objectToGetParams = __webpack_require__(618);
	
	var _objectToGetParams2 = _interopRequireDefault(_objectToGetParams);
	
	var _createShareButton = __webpack_require__(626);
	
	var _createShareButton2 = _interopRequireDefault(_createShareButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function livejournalLink(url, _ref) {
	  var title = _ref.title,
	      description = _ref.description;
	
	  (0, _assert2.default)(url, 'livejournal.url');
	
	  return 'https://www.livejournal.com/update.bml' + (0, _objectToGetParams2.default)({
	    subject: title,
	    event: description
	  });
	}
	
	var LivejournalShareButton = (0, _createShareButton2.default)('livejournal', livejournalLink, function (props) {
	  return {
	    title: props.title,
	    description: props.description
	  };
	}, {
	  title: _propTypes2.default.string,
	  description: _propTypes2.default.string
	}, {
	  windowWidth: 660,
	  windowHeight: 460
	});
	
	exports.default = LivejournalShareButton;

/***/ }),

/***/ 639:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _propTypes = __webpack_require__(66);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _assert = __webpack_require__(625);
	
	var _assert2 = _interopRequireDefault(_assert);
	
	var _objectToGetParams = __webpack_require__(618);
	
	var _objectToGetParams2 = _interopRequireDefault(_objectToGetParams);
	
	var _createShareButton = __webpack_require__(626);
	
	var _createShareButton2 = _interopRequireDefault(_createShareButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function mailruLink(url, _ref) {
	  var title = _ref.title,
	      description = _ref.description,
	      image = _ref.image;
	
	  (0, _assert2.default)(url, 'mailru.url');
	
	  return 'https://connect.mail.ru/share' + (0, _objectToGetParams2.default)({
	    url: url,
	    title: title,
	    description: description,
	    imageurl: image
	  });
	}
	
	var MailruShareButton = (0, _createShareButton2.default)('mailru', mailruLink, function (props) {
	  return {
	    title: props.title,
	    description: props.description,
	    image: props.image
	  };
	}, {
	  title: _propTypes2.default.string,
	  description: _propTypes2.default.string,
	  image: _propTypes2.default.string
	}, {
	  windowWidth: 660,
	  windowHeight: 460
	});
	
	exports.default = MailruShareButton;

/***/ }),

/***/ 640:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _propTypes = __webpack_require__(66);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _assert = __webpack_require__(625);
	
	var _assert2 = _interopRequireDefault(_assert);
	
	var _objectToGetParams = __webpack_require__(618);
	
	var _objectToGetParams2 = _interopRequireDefault(_objectToGetParams);
	
	var _createShareButton = __webpack_require__(626);
	
	var _createShareButton2 = _interopRequireDefault(_createShareButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function viberLink(url, _ref) {
	  var title = _ref.title;
	
	  (0, _assert2.default)(url, 'viber.url');
	  return 'viber://forward' + (0, _objectToGetParams2.default)({
	    text: (title || '') + ' ' + url
	  });
	}
	
	var ViberShareButton = (0, _createShareButton2.default)('viber', viberLink, function (props) {
	  return {
	    title: props.title
	  };
	}, {
	  title: _propTypes2.default.string
	}, {
	  windowWidth: 660,
	  windowHeight: 460
	});
	
	exports.default = ViberShareButton;

/***/ }),

/***/ 641:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _iconFactory = __webpack_require__(642);
	
	var _iconFactory2 = _interopRequireDefault(_iconFactory);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var FacebookIcon = (0, _iconFactory2.default)('facebook', {
	  icon: 'M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z',
	  mask: 'M0,0v64h64V0H0z M39.6,22l-2.8,0c-2.2,0-2.6,1.1-2.6,2.6V28h5.3l-0.7,5.3h-4.6V47h-5.5V33.3H24V28h4.6V24 c0-4.6,2.8-7,6.9-7c2,0,3.6,0.1,4.1,0.2V22z',
	  color: '#3b5998'
	});
	
	exports.default = FacebookIcon;

/***/ }),

/***/ 642:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = iconFactory;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(66);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function iconFactory(network, iconConfig) {
	  var Icon = function Icon(props) {
	    var className = props.className,
	        iconBgStyle = props.iconBgStyle,
	        logoFillColor = props.logoFillColor,
	        round = props.round,
	        size = props.size;
	
	
	    var baseStyle = {
	      width: size,
	      height: size
	    };
	
	    var classes = 'social-icon social-icon--' + network + ' ' + className;
	
	    return _react2.default.createElement(
	      'div',
	      { style: baseStyle },
	      _react2.default.createElement(
	        'svg',
	        {
	          viewBox: '0 0 64 64',
	          width: size,
	          height: size,
	          className: classes },
	        _react2.default.createElement(
	          'g',
	          null,
	          !round ? _react2.default.createElement('rect', {
	            width: '64',
	            height: '64',
	            fill: iconConfig.color,
	            style: iconBgStyle }) : _react2.default.createElement('circle', {
	            cx: '32',
	            cy: '32',
	            r: '31',
	            fill: iconConfig.color,
	            style: iconBgStyle })
	        ),
	        _react2.default.createElement(
	          'g',
	          null,
	          _react2.default.createElement('path', { d: iconConfig.icon, fill: logoFillColor })
	        )
	      )
	    );
	  };
	
	  Icon.propTypes = {
	    className: _propTypes2.default.string,
	    iconBgStyle: _propTypes2.default.object,
	    logoFillColor: _propTypes2.default.string,
	    round: _propTypes2.default.bool,
	    size: _propTypes2.default.number
	  };
	
	  Icon.defaultProps = {
	    className: '',
	    iconBgStyle: {},
	    logoFillColor: 'white',
	    size: 64
	  };
	
	  return Icon;
	}

/***/ }),

/***/ 643:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _iconFactory = __webpack_require__(642);
	
	var _iconFactory2 = _interopRequireDefault(_iconFactory);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var TwitterIcon = (0, _iconFactory2.default)('twitter', {
	  icon: 'M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z',
	  mask: 'M0,0v64h64V0H0z M44.7,25.5c0,0.3,0,0.6,0,0.8C44.7,35,38.1,45,26.1,45c-3.7,0-7.2-1.1-10.1-2.9 c0.5,0.1,1,0.1,1.6,0.1c3.1,0,5.9-1,8.2-2.8c-2.9-0.1-5.3-2-6.1-4.6c0.4,0.1,0.8,0.1,1.2,0.1c0.6,0,1.2-0.1,1.7-0.2 c-3-0.6-5.3-3.3-5.3-6.4c0,0,0-0.1,0-0.1c0.9,0.5,1.9,0.8,3,0.8c-1.8-1.2-2.9-3.2-2.9-5.5c0-1.2,0.3-2.3,0.9-3.3 c3.2,4,8.1,6.6,13.5,6.9c-0.1-0.5-0.2-1-0.2-1.5c0-3.6,2.9-6.6,6.6-6.6c1.9,0,3.6,0.8,4.8,2.1c1.5-0.3,2.9-0.8,4.2-1.6 c-0.5,1.5-1.5,2.8-2.9,3.6c1.3-0.2,2.6-0.5,3.8-1C47.1,23.4,46,24.5,44.7,25.5z',
	  color: '#00aced'
	});
	
	exports.default = TwitterIcon;

/***/ }),

/***/ 644:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _iconFactory = __webpack_require__(642);
	
	var _iconFactory2 = _interopRequireDefault(_iconFactory);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var GooglePlusIcon = (0, _iconFactory2.default)('google', {
	  icon: 'M25.3,30.1v3.8h6.3c-0.3,1.6-1.9,4.8-6.3,4.8c-3.8,0-6.9-3.1-6.9-7s3.1-7,6.9-7c2.2,0,3.6,0.9,4.4,1.7l3-2.9c-1.9-1.8-4.4-2.9-7.4-2.9c-6.1,0-11.1,5-11.1,11.1s5,11.1,11.1,11.1c6.4,0,10.7-4.5,10.7-10.9c0-0.7-0.1-1.3-0.2-1.8H25.3L25.3,30.1z M49.8,28.9h-3.2v-3.2h-3.2v3.2h-3.2v3.2h3.2v3.2h3.2v-3.2h3.2',
	  mask: 'M0,0v64h64V0H0z M31.3,19.1c0.3,0.3,0.6,0.7,0.9,1.2c0.3,0.4,0.5,0.9,0.7,1.5c0.2,0.6,0.3,1.3,0.3,2.1 c0,1.4-0.3,2.6-0.9,3.4c-0.3,0.4-0.6,0.8-0.9,1.2c-0.4,0.4-0.8,0.7-1.2,1.1c-0.2,0.2-0.5,0.5-0.7,0.8c-0.2,0.3-0.4,0.7-0.4,1.1 c0,0.4,0.1,0.8,0.4,1c0.2,0.3,0.4,0.5,0.6,0.7l1.4,1.1c0.8,0.7,1.6,1.5,2.2,2.3c0.6,0.8,0.9,2,0.9,3.3c0,1.9-0.9,3.7-2.6,5.2 c-1.8,1.6-4.3,2.4-7.7,2.4c-2.8,0-4.9-0.6-6.3-1.8c-1.4-1.1-2.1-2.4-2.1-3.9c0-0.7,0.2-1.6,0.7-2.5c0.4-0.9,1.2-1.7,2.4-2.4 c1.3-0.7,2.7-1.2,4.1-1.5c1.4-0.2,2.6-0.3,3.5-0.4c-0.3-0.4-0.5-0.8-0.8-1.2c-0.3-0.4-0.4-0.9-0.4-1.5c0-0.4,0-0.6,0.2-0.9 c0.1-0.2,0.2-0.5,0.2-0.7c-0.5,0.1-0.9,0.1-1.3,0.1c-2.1,0-3.8-0.7-4.9-2c-1.2-1.2-1.8-2.7-1.8-4.3c0-2,0.8-3.8,2.5-5.4 c1.1-0.9,2.3-1.6,3.5-1.8c1.2-0.2,2.3-0.4,3.4-0.4h8L33,18.4h-2.5C30.7,18.6,31,18.8,31.3,19.1z M48,32h-4.3v4.2h-2.5V32H37v-2.5 h4.2v-4.3h2.5v4.3H48V32z M27.1,19.1c-0.6-0.5-1.4-0.7-2.2-0.7c-1.1,0-2,0.5-2.7,1.3c-0.6,0.9-0.9,1.9-0.9,3c0,1.5,0.4,3,1.3,4.5 c0.4,0.7,0.9,1.4,1.6,1.9c0.6,0.5,1.4,0.8,2.2,0.8c1.1,0,1.9-0.4,2.6-1.1c0.3-0.5,0.6-1,0.7-1.6c0.1-0.5,0.1-1,0.1-1.4 c0-1.6-0.4-3.2-1.2-4.8C28.2,20.2,27.7,19.5,27.1,19.1z M26.9,36.2c-0.2,0-0.7,0-1.6,0.1c-0.8,0.1-1.7,0.3-2.5,0.6 c-0.2,0.1-0.5,0.2-0.9,0.4c-0.4,0.2-0.7,0.4-1.1,0.7c-0.4,0.3-0.7,0.7-0.9,1.2c-0.3,0.5-0.4,1.1-0.4,1.8c0,1.4,0.6,2.6,1.9,3.5 c1.2,0.9,2.9,1.4,5,1.4c1.9,0,3.3-0.4,4.3-1.3c1-0.8,1.5-1.8,1.5-3.1c0-1-0.3-1.9-1-2.7c-0.7-0.7-1.8-1.6-3.3-2.6 C27.5,36.2,27.2,36.2,26.9,36.2z',
	  color: '#dd4b39'
	});
	
	exports.default = GooglePlusIcon;

/***/ }),

/***/ 645:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _iconFactory = __webpack_require__(642);
	
	var _iconFactory2 = _interopRequireDefault(_iconFactory);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var LinkedinIcon = (0, _iconFactory2.default)('linkedin', {
	  icon: 'M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z',
	  mask: 'M0,0v64h64V0H0z M25.8,44h-5.4V26.6h5.4V44z M23.1,24.3c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1 c1.7,0,3.1,1.4,3.1,3.1C26.2,22.9,24.8,24.3,23.1,24.3z M46,44h-5.4v-8.4c0-2,0-4.6-2.8-4.6c-2.8,0-3.2,2.2-3.2,4.5V44h-5.4V26.6 h5.2V29h0.1c0.7-1.4,2.5-2.8,5.1-2.8c5.5,0,6.5,3.6,6.5,8.3V44z',
	  color: '#007fb1'
	});
	
	exports.default = LinkedinIcon;

/***/ }),

/***/ 646:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _iconFactory = __webpack_require__(642);
	
	var _iconFactory2 = _interopRequireDefault(_iconFactory);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var PinterestIcon = (0, _iconFactory2.default)('pinterest', {
	  icon: 'M32,16c-8.8,0-16,7.2-16,16c0,6.6,3.9,12.2,9.6,14.7c0-1.1,0-2.5,0.3-3.7 c0.3-1.3,2.1-8.7,2.1-8.7s-0.5-1-0.5-2.5c0-2.4,1.4-4.1,3.1-4.1c1.5,0,2.2,1.1,2.2,2.4c0,1.5-0.9,3.7-1.4,5.7 c-0.4,1.7,0.9,3.1,2.5,3.1c3,0,5.1-3.9,5.1-8.5c0-3.5-2.4-6.1-6.7-6.1c-4.9,0-7.9,3.6-7.9,7.7c0,1.4,0.4,2.4,1.1,3.1 c0.3,0.3,0.3,0.5,0.2,0.9c-0.1,0.3-0.3,1-0.3,1.3c-0.1,0.4-0.4,0.6-0.8,0.4c-2.2-0.9-3.3-3.4-3.3-6.1c0-4.5,3.8-10,11.4-10 c6.1,0,10.1,4.4,10.1,9.2c0,6.3-3.5,11-8.6,11c-1.7,0-3.4-0.9-3.9-2c0,0-0.9,3.7-1.1,4.4c-0.3,1.2-1,2.5-1.6,3.4 c1.4,0.4,3,0.7,4.5,0.7c8.8,0,16-7.2,16-16C48,23.2,40.8,16,32,16z',
	  mask: 'M0,0v64h64V0H0z M32,48c-1.6,0-3.1-0.2-4.5-0.7c0.6-1,1.3-2.2,1.6-3.4c0.2-0.7,1.1-4.4,1.1-4.4 c0.6,1.1,2.2,2,3.9,2c5.1,0,8.6-4.7,8.6-11c0-4.7-4-9.2-10.1-9.2c-7.6,0-11.4,5.5-11.4,10c0,2.8,1,5.2,3.3,6.1 c0.4,0.1,0.7,0,0.8-0.4c0.1-0.3,0.2-1,0.3-1.3c0.1-0.4,0.1-0.5-0.2-0.9c-0.6-0.8-1.1-1.7-1.1-3.1c0-4,3-7.7,7.9-7.7 c4.3,0,6.7,2.6,6.7,6.1c0,4.6-2,8.5-5.1,8.5c-1.7,0-2.9-1.4-2.5-3.1c0.5-2,1.4-4.2,1.4-5.7c0-1.3-0.7-2.4-2.2-2.4 c-1.7,0-3.1,1.8-3.1,4.1c0,1.5,0.5,2.5,0.5,2.5s-1.8,7.4-2.1,8.7c-0.3,1.2-0.3,2.6-0.3,3.7C19.9,44.2,16,38.6,16,32 c0-8.8,7.2-16,16-16c8.8,0,16,7.2,16,16C48,40.8,40.8,48,32,48z',
	  color: '#cb2128'
	});
	
	exports.default = PinterestIcon;

/***/ }),

/***/ 647:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _iconFactory = __webpack_require__(642);
	
	var _iconFactory2 = _interopRequireDefault(_iconFactory);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var VKIcon = (0, _iconFactory2.default)('vk', {
	  icon: 'M44.94,44.84h-0.2c-2.17-.36-3.66-1.92-4.92-3.37C39.1,40.66,38,38.81,36.7,39c-1.85.3-.93,3.52-1.71,4.9-0.62,1.11-3.29.91-5.12,0.71-5.79-.62-8.75-3.77-11.35-7.14A64.13,64.13,0,0,1,11.6,26a10.59,10.59,0,0,1-1.51-4.49C11,20.7,12.56,21,14.11,21c1.31,0,3.36-.29,4.32.2C19,21.46,19.57,23,20,24a37.18,37.18,0,0,0,3.31,5.82c0.56,0.81,1.41,2.35,2.41,2.14s1.06-2.63,1.1-4.18c0-1.77,0-4-.5-4.9S25,22,24.15,21.47c0.73-1.49,2.72-1.63,5.12-1.63,2,0,4.84-.23,5.62,1.12s0.25,3.85.2,5.71c-0.06,2.09-.41,4.25,1,5.21,1.09-.12,1.68-1.2,2.31-2A28,28,0,0,0,41.72,24c0.44-1,.91-2.65,1.71-3,1.21-.47,3.15-0.1,4.92-0.1,1.46,0,4.05-.41,4.52.61,0.39,0.85-.75,3-1.1,3.57a61.88,61.88,0,0,1-4.12,5.61c-0.58.78-1.78,2-1.71,3.27,0.05,0.94,1,1.67,1.71,2.35a33.12,33.12,0,0,1,3.92,4.18c0.47,0.62,1.5,2,1.4,2.76C52.66,45.81,46.88,44.24,44.94,44.84Z',
	  mask: 'M0,0v64h64V0H0z M44.94,44.84h-0.2c-2.17-.36-3.66-1.92-4.92-3.37C39.1,40.66,38,38.81,36.7,39c-1.85.3-.93,3.52-1.71,4.9-0.62,1.11-3.29.91-5.12,0.71-5.79-.62-8.75-3.77-11.35-7.14A64.13,64.13,0,0,1,11.6,26a10.59,10.59,0,0,1-1.51-4.49C11,20.7,12.56,21,14.11,21c1.31,0,3.36-.29,4.32.2C19,21.46,19.57,23,20,24a37.18,37.18,0,0,0,3.31,5.82c0.56,0.81,1.41,2.35,2.41,2.14s1.06-2.63,1.1-4.18c0-1.77,0-4-.5-4.9S25,22,24.15,21.47c0.73-1.49,2.72-1.63,5.12-1.63,2,0,4.84-.23,5.62,1.12s0.25,3.85.2,5.71c-0.06,2.09-.41,4.25,1,5.21,1.09-.12,1.68-1.2,2.31-2A28,28,0,0,0,41.72,24c0.44-1,.91-2.65,1.71-3,1.21-.47,3.15-0.1,4.92-0.1,1.46,0,4.05-.41,4.52.61,0.39,0.85-.75,3-1.1,3.57a61.88,61.88,0,0,1-4.12,5.61c-0.58.78-1.78,2-1.71,3.27,0.05,0.94,1,1.67,1.71,2.35a33.12,33.12,0,0,1,3.92,4.18c0.47,0.62,1.5,2,1.4,2.76C52.66,45.81,46.88,44.24,44.94,44.84Z',
	  color: '#45668e'
	});
	
	exports.default = VKIcon;

/***/ }),

/***/ 648:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _iconFactory = __webpack_require__(642);
	
	var _iconFactory2 = _interopRequireDefault(_iconFactory);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var OKIcon = (0, _iconFactory2.default)('ok', {
	  icon: 'M39,30c-1,0-3,2-7,2s-6-2-7-2c-1.1,0-2,0.9-2,2c0,1,0.6,1.5,1,1.7c1.2,0.7,5,2.3,5,2.3l-4.3,5.4   c0,0-0.8,0.9-0.8,1.6c0,1.1,0.9,2,2,2c1,0,1.5-0.7,1.5-0.7S32,39,32,39c0,0,4.5,5.3,4.5,5.3S37,45,38,45c1.1,0,2-0.9,2-2   c0-0.6-0.8-1.6-0.8-1.6L35,36c0,0,3.8-1.6,5-2.3c0.4-0.3,1-0.7,1-1.7C41,30.9,40.1,30,39,30z M32,15c-3.9,0-7,3.1-7,7s3.1,7,7,7c3.9,0,7-3.1,7-7S35.9,15,32,15z M32,25.5   c-1.9,0-3.5-1.6-3.5-3.5c0-1.9,1.6-3.5,3.5-3.5c1.9,0,3.5,1.6,3.5,3.5C35.5,23.9,33.9,22.5,35,22.5z ',
	  mask: 'M45,1H5C2.8,1,1,2.8,1,5v40c0,2.2,1.8,4,4,4h40c2.2,0,4-1.8,4-4V5C49,2.8,47.2,1,45,1z',
	  color: '#f2720c'
	});
	
	exports.default = OKIcon;

/***/ }),

/***/ 649:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _iconFactory = __webpack_require__(642);
	
	var _iconFactory2 = _interopRequireDefault(_iconFactory);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var TelegramIcon = (0, _iconFactory2.default)('telegram', {
	  icon: 'm45.90873,15.44335c-0.6901,-0.0281 -1.37668,0.14048 -1.96142,0.41265c-0.84989,0.32661 -8.63939,3.33986 -16.5237,6.39174c-3.9685,1.53296 -7.93349,3.06593 -10.98537,4.24067c-3.05012,1.1765 -5.34694,2.05098 -5.4681,2.09312c-0.80775,0.28096 -1.89996,0.63566 -2.82712,1.72788c-0.23354,0.27218 -0.46884,0.62161 -0.58825,1.10275c-0.11941,0.48114 -0.06673,1.09222 0.16682,1.5716c0.46533,0.96052 1.25376,1.35737 2.18443,1.71383c3.09051,0.99037 6.28638,1.93508 8.93263,2.8236c0.97632,3.44171 1.91401,6.89571 2.84116,10.34268c0.30554,0.69185 0.97105,0.94823 1.65764,0.95525l-0.00351,0.03512c0,0 0.53908,0.05268 1.06412,-0.07375c0.52679,-0.12292 1.18879,-0.42846 1.79109,-0.99212c0.662,-0.62161 2.45836,-2.38812 3.47683,-3.38552l7.6736,5.66477l0.06146,0.03512c0,0 0.84989,0.59703 2.09312,0.68132c0.62161,0.04214 1.4399,-0.07726 2.14229,-0.59176c0.70766,-0.51626 1.1765,-1.34683 1.396,-2.29506c0.65673,-2.86224 5.00979,-23.57745 5.75257,-27.00686l-0.02107,0.08077c0.51977,-1.93157 0.32837,-3.70159 -0.87096,-4.74991c-0.60054,-0.52152 -1.2924,-0.7498 -1.98425,-0.77965l0,0.00176zm-0.2072,3.29069c0.04741,0.0439 0.0439,0.0439 0.00351,0.04741c-0.01229,-0.00351 0.14048,0.2072 -0.15804,1.32576l-0.01229,0.04214l-0.00878,0.03863c-0.75858,3.50668 -5.15554,24.40802 -5.74203,26.96472c-0.08077,0.34417 -0.11414,0.31959 -0.09482,0.29852c-0.1756,-0.02634 -0.50045,-0.16506 -0.52679,-0.1756l-13.13468,-9.70175c4.4988,-4.33199 9.09945,-8.25307 13.744,-12.43229c0.8218,-0.41265 0.68483,-1.68573 -0.29852,-1.70681c-1.04305,0.24584 -1.92279,0.99564 -2.8798,1.47502c-5.49971,3.2626 -11.11882,6.13186 -16.55882,9.49279c-2.792,-0.97105 -5.57873,-1.77704 -8.15298,-2.57601c2.2336,-0.89555 4.00889,-1.55579 5.75608,-2.23009c3.05188,-1.1765 7.01687,-2.7042 10.98537,-4.24067c7.94051,-3.06944 15.92667,-6.16346 16.62028,-6.43037l0.05619,-0.02283l0.05268,-0.02283c0.19316,-0.0878 0.30378,-0.09658 0.35471,-0.10009c0,0 -0.01756,-0.05795 -0.00351,-0.04566l-0.00176,0zm-20.91715,22.0638l2.16687,1.60145c-0.93418,0.91311 -1.81743,1.77353 -2.45485,2.38812l0.28798,-3.98957',
	  mask: 'M0,0v64h64V0H0z M32,48c-1.6,0-3.1-0.2-4.5-0.7c0.6-1,1.3-2.2,1.6-3.4c0.2-0.7,1.1-4.4,1.1-4.4 c0.6,1.1,2.2,2,3.9,2c5.1,0,8.6-4.7,8.6-11c0-4.7-4-9.2-10.1-9.2c-7.6,0-11.4,5.5-11.4,10c0,2.8,1,5.2,3.3,6.1 c0.4,0.1,0.7,0,0.8-0.4c0.1-0.3,0.2-1,0.3-1.3c0.1-0.4,0.1-0.5-0.2-0.9c-0.6-0.8-1.1-1.7-1.1-3.1c0-4,3-7.7,7.9-7.7 c4.3,0,6.7,2.6,6.7,6.1c0,4.6-2,8.5-5.1,8.5c-1.7,0-2.9-1.4-2.5-3.1c0.5-2,1.4-4.2,1.4-5.7c0-1.3-0.7-2.4-2.2-2.4 c-1.7,0-3.1,1.8-3.1,4.1c0,1.5,0.5,2.5,0.5,2.5s-1.8,7.4-2.1,8.7c-0.3,1.2-0.3,2.6-0.3,3.7C19.9,44.2,16,38.6,16,32 c0-8.8,7.2-16,16-16c8.8,0,16,7.2,16,16C48,40.8,40.8,48,32,48z',
	  color: '#37aee2'
	});
	
	exports.default = TelegramIcon;

/***/ }),

/***/ 650:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _iconFactory = __webpack_require__(642);
	
	var _iconFactory2 = _interopRequireDefault(_iconFactory);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var WhatsappIcon = (0, _iconFactory2.default)('whatsapp', {
	  icon: 'm42.32286,33.93287c-0.5178,-0.2589 -3.04726,-1.49644 -3.52105,-1.66732c-0.4712,-0.17346 -0.81554,-0.2589 -1.15987,0.2589c-0.34175,0.51004 -1.33075,1.66474 -1.63108,2.00648c-0.30032,0.33658 -0.60064,0.36247 -1.11327,0.12945c-0.5178,-0.2589 -2.17994,-0.80259 -4.14759,-2.56312c-1.53269,-1.37217 -2.56312,-3.05503 -2.86603,-3.57283c-0.30033,-0.5178 -0.03366,-0.80259 0.22524,-1.06149c0.23301,-0.23301 0.5178,-0.59547 0.7767,-0.90616c0.25372,-0.31068 0.33657,-0.5178 0.51262,-0.85437c0.17088,-0.36246 0.08544,-0.64725 -0.04402,-0.90615c-0.12945,-0.2589 -1.15987,-2.79613 -1.58964,-3.80584c-0.41424,-1.00971 -0.84142,-0.88027 -1.15987,-0.88027c-0.29773,-0.02588 -0.64208,-0.02588 -0.98382,-0.02588c-0.34693,0 -0.90616,0.12945 -1.37736,0.62136c-0.4712,0.5178 -1.80194,1.76053 -1.80194,4.27186c0,2.51134 1.84596,4.945 2.10227,5.30747c0.2589,0.33657 3.63497,5.51458 8.80262,7.74113c1.23237,0.5178 2.1903,0.82848 2.94111,1.08738c1.23237,0.38836 2.35599,0.33657 3.24402,0.20712c0.99159,-0.15534 3.04985,-1.24272 3.47963,-2.45956c0.44013,-1.21683 0.44013,-2.22654 0.31068,-2.45955c-0.12945,-0.23301 -0.46601,-0.36247 -0.98382,-0.59548m-9.40068,12.84407l-0.02589,0c-3.05503,0 -6.08417,-0.82849 -8.72495,-2.38189l-0.62136,-0.37023l-6.47252,1.68286l1.73463,-6.29129l-0.41424,-0.64725c-1.70875,-2.71846 -2.6149,-5.85116 -2.6149,-9.07706c0,-9.39809 7.68934,-17.06155 17.15993,-17.06155c4.58253,0 8.88029,1.78642 12.11655,5.02268c3.23625,3.21036 5.02267,7.50812 5.02267,12.06476c-0.0078,9.3981 -7.69712,17.06155 -17.14699,17.06155m14.58906,-31.58846c-3.93529,-3.80584 -9.1133,-5.95471 -14.62789,-5.95471c-11.36055,0 -20.60848,9.2065 -20.61625,20.52564c0,3.61684 0.94757,7.14565 2.75211,10.26282l-2.92557,10.63564l10.93337,-2.85309c3.0136,1.63108 6.4052,2.4958 9.85634,2.49839l0.01037,0c11.36574,0 20.61884,-9.2091 20.62403,-20.53082c0,-5.48093 -2.14111,-10.64081 -6.03239,-14.51915',
	  mask: 'M0,0v64h64V0H0z M32,48c-1.6,0-3.1-0.2-4.5-0.7c0.6-1,1.3-2.2,1.6-3.4c0.2-0.7,1.1-4.4,1.1-4.4 c0.6,1.1,2.2,2,3.9,2c5.1,0,8.6-4.7,8.6-11c0-4.7-4-9.2-10.1-9.2c-7.6,0-11.4,5.5-11.4,10c0,2.8,1,5.2,3.3,6.1 c0.4,0.1,0.7,0,0.8-0.4c0.1-0.3,0.2-1,0.3-1.3c0.1-0.4,0.1-0.5-0.2-0.9c-0.6-0.8-1.1-1.7-1.1-3.1c0-4,3-7.7,7.9-7.7 c4.3,0,6.7,2.6,6.7,6.1c0,4.6-2,8.5-5.1,8.5c-1.7,0-2.9-1.4-2.5-3.1c0.5-2,1.4-4.2,1.4-5.7c0-1.3-0.7-2.4-2.2-2.4 c-1.7,0-3.1,1.8-3.1,4.1c0,1.5,0.5,2.5,0.5,2.5s-1.8,7.4-2.1,8.7c-0.3,1.2-0.3,2.6-0.3,3.7C19.9,44.2,16,38.6,16,32 c0-8.8,7.2-16,16-16c8.8,0,16,7.2,16,16C48,40.8,40.8,48,32,48z',
	  color: '#2cb742'
	});
	
	exports.default = WhatsappIcon;

/***/ }),

/***/ 651:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _iconFactory = __webpack_require__(642);
	
	var _iconFactory2 = _interopRequireDefault(_iconFactory);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var RedditIcon = (0, _iconFactory2.default)('reddit', {
	  icon: 'm 52.8165,31.942362 c 0,-2.4803 -2.0264,-4.4965 -4.5169,-4.4965 -1.2155,0 -2.3171,0.4862 -3.128,1.2682 -3.077,-2.0247 -7.2403,-3.3133 -11.8507,-3.4782 l 2.5211,-7.9373 6.8272,1.5997 -0.0102,0.0986 c 0,2.0281 1.6575,3.6771 3.6958,3.6771 2.0366,0 3.6924,-1.649 3.6924,-3.6771 0,-2.0281 -1.6575,-3.6788 -3.6924,-3.6788 -1.564,0 -2.8968,0.9758 -3.4357,2.3443 l -7.3593,-1.7255 c -0.3213,-0.0782 -0.6477,0.1071 -0.748,0.4233 L 32,25.212062 c -4.8246,0.0578 -9.1953,1.3566 -12.41,3.4425 -0.8058,-0.7446 -1.8751,-1.2104 -3.0583,-1.2104 -2.4905,0 -4.5152,2.0179 -4.5152,4.4982 0,1.649 0.9061,3.0787 2.2389,3.8607 -0.0884,0.4794 -0.1462,0.9639 -0.1462,1.4569 0,6.6487 8.1736,12.0581 18.2223,12.0581 10.0487,0 18.224,-5.4094 18.224,-12.0581 0,-0.4658 -0.0493,-0.9248 -0.1275,-1.377 1.4144,-0.7599 2.3885,-2.2304 2.3885,-3.9406 z m -29.2808,3.0872 c 0,-1.4756 1.207,-2.6775 2.6894,-2.6775 1.4824,0 2.6877,1.2019 2.6877,2.6775 0,1.4756 -1.2053,2.6758 -2.6877,2.6758 -1.4824,0 -2.6894,-1.2002 -2.6894,-2.6758 z m 15.4037,7.9373 c -1.3549,1.3481 -3.4816,2.0043 -6.5008,2.0043 l -0.0221,-0.0051 -0.0221,0.0051 c -3.0209,0 -5.1476,-0.6562 -6.5008,-2.0043 -0.2465,-0.2448 -0.2465,-0.6443 0,-0.8891 0.2465,-0.2465 0.6477,-0.2465 0.8942,0 1.105,1.0999 2.9393,1.6337 5.6066,1.6337 l 0.0221,0.0051 0.0221,-0.0051 c 2.6673,0 4.5016,-0.5355 5.6066,-1.6354 0.2465,-0.2465 0.6477,-0.2448 0.8942,0 0.2465,0.2465 0.2465,0.6443 0,0.8908 z m -0.3213,-5.2615 c -1.4824,0 -2.6877,-1.2002 -2.6877,-2.6758 0,-1.4756 1.2053,-2.6775 2.6877,-2.6775 1.4824,0 2.6877,1.2019 2.6877,2.6775 0,1.4756 -1.2053,2.6758 -2.6877,2.6758 z',
	  color: '#5f99cf'
	});
	
	exports.default = RedditIcon;

/***/ }),

/***/ 652:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _iconFactory = __webpack_require__(642);
	
	var _iconFactory2 = _interopRequireDefault(_iconFactory);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var TumblrIcon = (0, _iconFactory2.default)('tumblr', {
	  icon: 'M39.2,41c-0.6,0.3-1.6,0.5-2.4,0.5c-2.4,0.1-2.9-1.7-2.9-3v-9.3h6v-4.5h-6V17c0,0-4.3,0-4.4,0 c-0.1,0-0.2,0.1-0.2,0.2c-0.3,2.3-1.4,6.4-5.9,8.1v3.9h3V39c0,3.4,2.5,8.1,9,8c2.2,0,4.7-1,5.2-1.8L39.2,41z',
	  mask: 'M0,0v64h64V0H0z M35.4,47c-6.5,0.1-9-4.7-9-8v-9.8h-3v-3.9c4.6-1.6,5.6-5.7,5.9-8.1c0-0.2,0.1-0.2,0.2-0.2 c0.1,0,4.4,0,4.4,0v7.6h6v4.5h-6v9.3c0,1.3,0.5,3,2.9,3c0.8,0,1.9-0.3,2.4-0.5l1.4,4.3C40.1,46,37.6,47,35.4,47z',
	  color: '#2c4762'
	});
	
	exports.default = TumblrIcon;

/***/ }),

/***/ 653:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _iconFactory = __webpack_require__(642);
	
	var _iconFactory2 = _interopRequireDefault(_iconFactory);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var MailruIcon = (0, _iconFactory2.default)('mailru', {
	  icon: 'M39.7107745,17 C41.6619755,17 43.3204965,18.732852 43.3204965,21.0072202 C43.3204965,23.2815885 41.7595357,25.0144404 39.7107745,25.0144404 C37.7595732,25.0144404 36.1010522,23.2815885 36.1010522,21.0072202 C36.1010522,18.732852 37.7595732,17 39.7107745,17 Z M24.3938451,17 C26.3450463,17 28.0035672,18.732852 28.0035672,21.0072202 C28.0035672,23.2815885 26.4426063,25.0144404 24.3938451,25.0144404 C22.4426439,25.0144404 20.7841229,23.2815885 20.7841229,21.0072202 C20.7841229,18.732852 22.4426439,17 24.3938451,17 Z M51.9057817,43.4259928 C51.7106617,44.0758123 51.4179815,44.6173285 50.9301812,44.9422383 C50.637501,45.1588448 50.2472607,45.267148 49.8570205,45.267148 C49.07654,45.267148 48.3936197,44.833935 48.0033795,44.0758123 L46.2472985,40.7184115 L45.759498,41.2599278 C42.5400162,44.9422383 37.466893,47 32.0035297,47 C26.5401664,47 21.5646034,44.9422383 18.2475614,41.2599278 L17.7597611,40.7184115 L16.00368,44.0758123 C15.6134398,44.833935 14.9305194,45.267148 14.1500389,45.267148 C13.7597986,45.267148 13.3695584,45.1588448 13.0768782,44.9422383 C12.0037176,44.2924187 11.7110374,42.7761733 12.2963978,41.5848375 L16.7841605,33.0288807 C17.1744007,32.270758 17.8573211,31.8375453 18.6378016,31.8375453 C19.0280418,31.8375453 19.4182821,31.9458485 19.7109623,32.1624548 C20.7841229,32.8122743 21.0768031,34.3285197 20.4914427,35.5198555 L20.1012025,36.2779783 L20.2963226,36.602888 C22.4426439,39.9602888 27.0279667,42.234657 31.9059697,42.234657 C36.7839727,42.234657 41.3692955,40.068592 43.5156167,36.602888 L43.7107367,36.2779783 L43.3204965,35.6281587 C43.0278165,35.0866425 42.9302562,34.436823 43.1253765,33.7870035 C43.3204965,33.137184 43.6131767,32.5956678 44.100977,32.270758 C44.3936572,32.0541515 44.7838975,31.9458485 45.1741377,31.9458485 C45.9546182,31.9458485 46.6375385,32.3790613 47.0277787,33.137184 L51.5155415,41.6931408 C52.003342,42.234657 52.100902,42.8844765 51.9057817,43.4259928 Z',
	  mask: 'M0,0v64h64V0H0z M35.4,47c-6.5,0.1-9-4.7-9-8v-9.8h-3v-3.9c4.6-1.6,5.6-5.7,5.9-8.1c0-0.2,0.1-0.2,0.2-0.2 c0.1,0,4.4,0,4.4,0v7.6h6v4.5h-6v9.3c0,1.3,0.5,3,2.9,3c0.8,0,1.9-0.3,2.4-0.5l1.4,4.3C40.1,46,37.6,47,35.4,47z',
	  color: '#168DE2'
	});
	
	exports.default = MailruIcon;

/***/ }),

/***/ 654:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _iconFactory = __webpack_require__(642);
	
	var _iconFactory2 = _interopRequireDefault(_iconFactory);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var EmailIcon = (0, _iconFactory2.default)('email', {
	  icon: 'M17,22v20h30V22H17z M41.1,25L32,32.1L22.9,25H41.1z M20,39V26.6l12,9.3l12-9.3V39H20z',
	  mask: 'M41.1,25H22.9l9.1,7.1L41.1,25z M44,26.6l-12,9.3l-12-9.3V39h24V26.6z M0,0v64h64V0H0z M47,42H17V22h30V42z',
	  color: '#7f7f7f'
	});
	
	exports.default = EmailIcon;

/***/ }),

/***/ 655:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _iconFactory = __webpack_require__(642);
	
	var _iconFactory2 = _interopRequireDefault(_iconFactory);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var LivejournalIcon = (0, _iconFactory2.default)('livejournal', {
	  icon: 'M18.3407821,28.1764706 L21.9441341,31.789916 L33.0055865,42.882353 C33.0055865,42.882353 33.0893855,42.9663866 33.0893855,42.9663866 L46.6648046,47 C46.6648046,47 46.6648046,47 46.7486034,47 C46.8324022,47 46.8324022,47 46.9162012,46.9159664 C47,46.8319327 47,46.8319327 47,46.7478991 L42.9776536,33.1344537 C42.9776536,33.1344537 42.9776536,33.1344537 42.8938548,33.0504202 L31.1620111,21.3697479 L31.1620111,21.3697479 L28.1452514,18.2605042 C27.3072626,17.4201681 26.5530726,17 25.7150838,17 C24.2905028,17 23.0335195,18.3445378 21.5251397,19.8571429 C21.273743,20.1092437 20.9385475,20.4453781 20.6871508,20.697479 C20.3519553,21.0336134 20.1005586,21.2857143 19.849162,21.5378151 C18.3407821,22.9663866 17.0837989,24.2268908 17,25.7394958 C17.0837989,26.4957983 17.5027933,27.3361345 18.3407821,28.1764706 Z M39.9012319,39.6134454 C39.7336341,39.4453781 39.4822374,37.6806724 40.2364275,36.8403362 C40.9906174,36.0840337 41.6610084,36 42.1638017,36 C42.3313995,36 42.4989973,36 42.5827961,36 L44.8453659,43.5630253 L43.5883828,44.8235295 L36.0464833,42.5546218 C35.9626843,42.2184874 35.8788855,41.2100841 36.8844722,40.2016807 C37.2196676,39.8655463 37.8900587,39.6134454 38.5604498,39.6134454 C39.147042,39.6134454 39.5660364,39.7815126 39.5660364,39.7815126 C39.6498353,39.8655463 39.8174331,39.8655463 39.8174331,39.7815126 C39.9850307,39.7815126 39.9850307,39.697479 39.9012319,39.6134454 Z',
	  mask: 'M0,0v64h64V0H0z M35.4,47c-6.5,0.1-9-4.7-9-8v-9.8h-3v-3.9c4.6-1.6,5.6-5.7,5.9-8.1c0-0.2,0.1-0.2,0.2-0.2 c0.1,0,4.4,0,4.4,0v7.6h6v4.5h-6v9.3c0,1.3,0.5,3,2.9,3c0.8,0,1.9-0.3,2.4-0.5l1.4,4.3C40.1,46,37.6,47,35.4,47z',
	  color: '#21A5D8'
	});
	
	exports.default = LivejournalIcon;

/***/ }),

/***/ 656:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _iconFactory = __webpack_require__(642);
	
	var _iconFactory2 = _interopRequireDefault(_iconFactory);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ViberIcon = (0, _iconFactory2.default)('viber', {
	  icon: 'm31.0,12.3c9.0,0.2 16.4,6.2 18.0,15.2c0.2,1.5 0.3,3.0 0.4,4.6a1.0,1.0 0 0 1 -0.8,1.2l-0.1,0a1.1,1.1 0 0 1 -1.0,-1.2l0,0c-0.0,-1.2 -0.1,-2.5 -0.3,-3.8a16.1,16.1 0 0 0 -13.0,-13.5c-1.0,-0.1 -2.0,-0.2 -3.0,-0.3c-0.6,-0.0 -1.4,-0.1 -1.6,-0.8a1.1,1.1 0 0 1 0.9,-1.2l0.6,0l0.0,-0.0zm10.6,39.2a19.9,19.9 0 0 1 -2.1,-0.6c-6.9,-2.9 -13.2,-6.6 -18.3,-12.2a47.5,47.5 0 0 1 -7.0,-10.7c-0.8,-1.8 -1.6,-3.7 -2.4,-5.6c-0.6,-1.7 0.3,-3.4 1.4,-4.7a11.3,11.3 0 0 1 3.7,-2.8a2.4,2.4 0 0 1 3.0,0.7a39.0,39.0 0 0 1 4.7,6.5a3.1,3.1 0 0 1 -0.8,4.2c-0.3,0.2 -0.6,0.5 -1.0,0.8a3.3,3.3 0 0 0 -0.7,0.7a2.1,2.1 0 0 0 -0.1,1.9c1.7,4.9 4.7,8.7 9.7,10.8a5.0,5.0 0 0 0 2.5,0.6c1.5,-0.1 2.0,-1.8 3.1,-2.7a2.9,2.9 0 0 1 3.5,-0.1c1.1,0.7 2.2,1.4 3.3,2.2a37.8,37.8 0 0 1 3.1,2.4a2.4,2.4 0 0 1 0.7,3.0a10.4,10.4 0 0 1 -4.4,4.8a10.8,10.8 0 0 1 -1.9,0.6c-0.7,-0.2 0.6,-0.2 0,0l0.0,0l0,-0.0zm3.1,-21.4a4.2,4.2 0 0 1 -0.0,0.6a1.0,1.0 0 0 1 -1.9,0.1a2.7,2.7 0 0 1 -0.1,-0.8a10.9,10.9 0 0 0 -1.4,-5.5a10.2,10.2 0 0 0 -4.2,-4.0a12.3,12.3 0 0 0 -3.4,-1.0c-0.5,-0.0 -1.0,-0.1 -1.5,-0.2a0.9,0.9 0 0 1 -0.9,-1.0l0,-0.1a0.9,0.9 0 0 1 0.9,-0.9l0.1,0a14.1,14.1 0 0 1 5.9,1.5a11.9,11.9 0 0 1 6.5,9.3c0,0.1 0.0,0.3 0.0,0.5c0,0.4 0.0,0.9 0.0,1.5l0,0l0.0,0.0zm-5.6,-0.2a1.1,1.1 0 0 1 -1.2,-0.9l0,-0.1a11.3,11.3 0 0 0 -0.2,-1.4a4.0,4.0 0 0 0 -1.5,-2.3a3.9,3.9 0 0 0 -1.2,-0.5c-0.5,-0.1 -1.1,-0.1 -1.6,-0.2a1.0,1.0 0 0 1 -0.8,-1.1l0,0l0,0a1.0,1.0 0 0 1 1.1,-0.8c3.4,0.2 6.0,2.0 6.3,6.2a2.8,2.8 0 0 1 0,0.8a0.8,0.8 0 0 1 -0.8,0.7l0,0l0.0,-0.0z',
	  mask: '',
	  color: '#7C529E'
	});
	
	exports.default = ViberIcon;

/***/ })

};;
//# sourceMappingURL=2.render-page.js.map