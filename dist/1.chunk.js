webpackJsonp([1],{

/***/ 26:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(100)
	__vue_script__ = __webpack_require__(37)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\user-register.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(83)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-1eb467c6/user-register.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 37:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		data: function data() {
			return {
				active: false,
				user: {
					studentId: '',
					email: '',
					password: ''
				},
				label: {
					statu: 'ajax-loader',
					msg: '正在注册'
				}
			};
		},
		methods: {
			register: function register() {
				var _this = this;
	
				this.active = true;
				var _self = this;
				this.$http.post(Window.config.userRegister, this.user).then(function (response) {
					if (response.body.statu) {
						_this.label.statu = 'ajax-success';
						if (window.location.pathname != '/welcome.html') {
							setTimeout(function () {
								window.location.href = '/welcome.html';
							}, 1000);
						}
					} else {
						_this.label.statu = 'ajax-error';
					}
					_this.label.msg = response.body.msg;
				}, function (response) {
					_this.label.statu = 'ajax-error';
					_this.label.msg = '出错了,请重试！';
				});
				setTimeout(function () {
					_self.active = false;
					_self.label.statu = 'ajax-loader';
					_self.label.msg = '正在注册';
				}, 4000);
			}
		}
	};

/***/ },

/***/ 53:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(2)();
	// imports
	
	
	// module
	exports.push([module.id, ".register-login {\n  background-color: #fff;\n  border-radius: 20px;\n  position: absolute;\n  bottom: 104px;\n  right: 80px;\n  box-shadow: 0 0 80px #fff;\n  padding-top: 24px; }\n  .register-login .input {\n    position: relative;\n    color: #9e9e9e;\n    padding: 5px 0px; }\n    .register-login .input input {\n      background-color: transparent;\n      border: none;\n      box-shadow: 0 1px 0 0 #15bbf9;\n      border-radius: 0;\n      outline: none;\n      height: 2em;\n      width: 100%;\n      font-size: 1.2em;\n      margin-top: 0;\n      margin-right: 0;\n      margin-bottom: 15px;\n      margin-left: 0;\n      padding-top: 0;\n      padding-right: 0;\n      padding-bottom: 0;\n      padding-left: 0; }\n    .register-login .input input + label {\n      width: 100%;\n      pointer-events: none;\n      position: absolute;\n      top: .4em;\n      margin-left: 2px;\n      font-size: 1.2em;\n      -webkit-transition: all .3s;\n      transition: all .3s; }\n    .register-login .input input:focus {\n      box-shadow: 0 2px 0 0 #15bbf9; }\n      .register-login .input input:focus + label {\n        color: #26a69a;\n        top: -12px;\n        font-size: .4em; }\n  .register-login .active input {\n    box-shadow: 0 2px 0 0 #15bbf9; }\n    .register-login .active input + label {\n      color: #26a69a;\n      top: -12px;\n      font-size: .4em; }\n  .register-login .input {\n    font-size: 14px;\n    width: 80%;\n    margin: 0 auto;\n    color: #15bbf9; }\n  .register-login .button {\n    font-size: 20px;\n    padding: 4px 10px;\n    background-color: #15bbf9;\n    position: absolute;\n    width: 90px;\n    right: -5px;\n    box-shadow: -3px -3px 8px #999;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    margin-top: 10px; }\n    .register-login .button:active {\n      cursor: pointer;\n      box-shadow: -1px -1px 1px #c6c6c6;\n      margin-top: 7px; }\n  .register-login .label {\n    font-size: 20px;\n    position: absolute;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    margin-top: 10px;\n    right: 130px;\n    color: #2d2d2d;\n    display: none; }\n  .register-login .active {\n    display: block; }\n\n.fade-scale-origin1-transition {\n  width: calc(100vw - 85px);\n  max-width: 400px;\n  height: 270px; }\n  @media screen and (min-width: 1000px) {\n    .fade-scale-origin1-transition {\n      width: 400px; } }\n\n.fade-scale-origin1-enter, .fade-scale-origin1-leave {\n  height: 0px;\n  width: 0px;\n  overflow: hidden;\n  white-space: nowrap; }\n\n.ajax-loader {\n  position: absolute;\n  margin-left: -20px;\n  margin-top: 9px;\n  font-size: 0.2rem; }\n\n.ajax-error {\n  color: red;\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome; }\n  .ajax-error::before {\n    content: \"\\F00D\";\n    box-sizing: border-box; }\n  .ajax-error + span {\n    color: red; }\n\n.ajax-success {\n  color: green;\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome; }\n  .ajax-success::before {\n    content: \"\\F00C\";\n    box-sizing: border-box; }\n  .ajax-success + span {\n    color: green; }\n", "", {"version":3,"sources":["/./src/scripts/components/user-register.vue"],"names":[],"mappings":"AAAA;EACE,uBAAuB;EACvB,oBAAoB;EACpB,mBAAmB;EACnB,cAAc;EACd,YAAY;EACZ,0BAA0B;EAC1B,kBAAkB,EAAE;EACpB;IACE,mBAAmB;IACnB,eAAe;IACf,iBAAiB,EAAE;IACnB;MACE,8BAA8B;MAC9B,aAAa;MACb,8BAA8B;MAC9B,iBAAiB;MACjB,cAAc;MACd,YAAY;MACZ,YAAY;MACZ,iBAAiB;MACjB,cAAc;MACd,gBAAgB;MAChB,oBAAoB;MACpB,eAAe;MACf,eAAe;MACf,iBAAiB;MACjB,kBAAkB;MAClB,gBAAgB,EAAE;IACpB;MACE,YAAY;MACZ,qBAAqB;MACrB,mBAAmB;MACnB,UAAU;MACV,iBAAiB;MACjB,iBAAiB;MACjB,4BAAoB;MAApB,oBAAoB,EAAE;IACxB;MACE,8BAA8B,EAAE;MAChC;QACE,eAAe;QACf,WAAW;QACX,gBAAgB,EAAE;EACxB;IACE,8BAA8B,EAAE;IAChC;MACE,eAAe;MACf,WAAW;MACX,gBAAgB,EAAE;EACtB;IACE,gBAAgB;IAChB,WAAW;IACX,eAAe;IACf,eAAe,EAAE;EACnB;IACE,gBAAgB;IAChB,kBAAkB;IAClB,0BAA0B;IAC1B,mBAAmB;IACnB,YAAY;IACZ,YAAY;IACZ,+BAA+B;IAC/B,0BAAkB;OAAlB,uBAAkB;QAAlB,sBAAkB;YAAlB,kBAAkB;IAClB,iBAAiB,EAAE;IACnB;MACE,gBAAgB;MAChB,kCAAkC;MAClC,gBAAgB,EAAE;EACtB;IACE,gBAAgB;IAChB,mBAAmB;IACnB,0BAAkB;OAAlB,uBAAkB;QAAlB,sBAAkB;YAAlB,kBAAkB;IAClB,iBAAiB;IACjB,aAAa;IACb,eAAe;IACf,cAAc,EAAE;EAClB;IACE,eAAe,EAAE;;AAErB;EACE,0BAA0B;EAC1B,iBAAiB;EACjB,cAAc,EAAE;EAChB;IACE;MACE,aAAa,EAAE,EAAE;;AAEvB;EACE,YAAY;EACZ,WAAW;EACX,iBAAiB;EACjB,oBAAoB,EAAE;;AAExB;EACE,mBAAmB;EACnB,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB,EAAE;;AAEtB;EACE,WAAW;EACX,sBAAsB;EACtB,8CAA8C,EAAE;EAChD;IACE,iBAAiB;IACjB,uBAAuB,EAAE;EAC3B;IACE,WAAW,EAAE;;AAEjB;EACE,aAAa;EACb,sBAAsB;EACtB,8CAA8C,EAAE;EAChD;IACE,iBAAiB;IACjB,uBAAuB,EAAE;EAC3B;IACE,aAAa,EAAE","file":"user-register.vue","sourcesContent":[".register-login {\n  background-color: #fff;\n  border-radius: 20px;\n  position: absolute;\n  bottom: 104px;\n  right: 80px;\n  box-shadow: 0 0 80px #fff;\n  padding-top: 24px; }\n  .register-login .input {\n    position: relative;\n    color: #9e9e9e;\n    padding: 5px 0px; }\n    .register-login .input input {\n      background-color: transparent;\n      border: none;\n      box-shadow: 0 1px 0 0 #15bbf9;\n      border-radius: 0;\n      outline: none;\n      height: 2em;\n      width: 100%;\n      font-size: 1.2em;\n      margin-top: 0;\n      margin-right: 0;\n      margin-bottom: 15px;\n      margin-left: 0;\n      padding-top: 0;\n      padding-right: 0;\n      padding-bottom: 0;\n      padding-left: 0; }\n    .register-login .input input + label {\n      width: 100%;\n      pointer-events: none;\n      position: absolute;\n      top: .4em;\n      margin-left: 2px;\n      font-size: 1.2em;\n      transition: all .3s; }\n    .register-login .input input:focus {\n      box-shadow: 0 2px 0 0 #15bbf9; }\n      .register-login .input input:focus + label {\n        color: #26a69a;\n        top: -12px;\n        font-size: .4em; }\n  .register-login .active input {\n    box-shadow: 0 2px 0 0 #15bbf9; }\n    .register-login .active input + label {\n      color: #26a69a;\n      top: -12px;\n      font-size: .4em; }\n  .register-login .input {\n    font-size: 14px;\n    width: 80%;\n    margin: 0 auto;\n    color: #15bbf9; }\n  .register-login .button {\n    font-size: 20px;\n    padding: 4px 10px;\n    background-color: #15bbf9;\n    position: absolute;\n    width: 90px;\n    right: -5px;\n    box-shadow: -3px -3px 8px #999;\n    user-select: none;\n    margin-top: 10px; }\n    .register-login .button:active {\n      cursor: pointer;\n      box-shadow: -1px -1px 1px #c6c6c6;\n      margin-top: 7px; }\n  .register-login .label {\n    font-size: 20px;\n    position: absolute;\n    user-select: none;\n    margin-top: 10px;\n    right: 130px;\n    color: #2d2d2d;\n    display: none; }\n  .register-login .active {\n    display: block; }\n\n.fade-scale-origin1-transition {\n  width: calc(100vw - 85px);\n  max-width: 400px;\n  height: 270px; }\n  @media screen and (min-width: 1000px) {\n    .fade-scale-origin1-transition {\n      width: 400px; } }\n\n.fade-scale-origin1-enter, .fade-scale-origin1-leave {\n  height: 0px;\n  width: 0px;\n  overflow: hidden;\n  white-space: nowrap; }\n\n.ajax-loader {\n  position: absolute;\n  margin-left: -20px;\n  margin-top: 9px;\n  font-size: 0.2rem; }\n\n.ajax-error {\n  color: red;\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome; }\n  .ajax-error::before {\n    content: \"\\f00d\";\n    box-sizing: border-box; }\n  .ajax-error + span {\n    color: red; }\n\n.ajax-success {\n  color: green;\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome; }\n  .ajax-success::before {\n    content: \"\\f00c\";\n    box-sizing: border-box; }\n  .ajax-success + span {\n    color: green; }\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },

/***/ 83:
/***/ function(module, exports) {

	module.exports = "\n<div class=\"register-login\"  transition=\"fade-scale-origin1\">\n\t<form>\n        <div class=\"input\" :class=\"{'active': user.studentId}\">\n            <input id=\"username\" name=\"username\" class=\"input-normal\" type=\"text\" v-model=\"user.studentId\">\n            <label for=\"username\">学号</label>\n        </div>\n        <div class=\"input\" :class=\"{'active': user.email}\">\n            <input id=\"email\" name=\"email\" class=\"input-normal\" type=\"email\" v-model=\"user.email\">\n            <label for=\"email\">邮箱</label>\n        </div>\n        <div class=\"input\" :class=\"{'active': user.password}\">\n            <input id=\"password\" name=\"password\" class=\"input-normal\" type=\"password\" v-model=\"user.password\">\n            <label for=\"password\">密码</label>\n        </div>\n        <div class=\"label\" :class=\"{'active': active}\">\n\t\t\t<div :class=\"[label.statu]\"></div>\n\t\t\t<span>{{ label.msg }}</span>\n\t\t</div>\n        <span class=\"button\" @click=\"register\">注册</span>\n    </form>\n</div>\n";

/***/ },

/***/ 100:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(53);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(1)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./user-register.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./user-register.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }

});
//# sourceMappingURL=1.chunk.js.map