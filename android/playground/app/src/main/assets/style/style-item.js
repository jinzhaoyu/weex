/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(286)
	var __weex_style__ = __webpack_require__(287)
	var __weex_script__ = __webpack_require__(288)

	__weex_define__('@weex-component/db2a20e3c65e67c0f449e29c05c9d644', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/db2a20e3c65e67c0f449e29c05c9d644',undefined,undefined)

/***/ },

/***/ 286:
/***/ function(module, exports) {

	module.exports = {
	  "type": "text",
	  "classList": [
	    "item",
	    "txt"
	  ],
	  "attr": {
	    "value": function () {return this.value}
	  },
	  "style": {
	    "backgroundColor": function () {return this.bgColor()}
	  }
	}

/***/ },

/***/ 287:
/***/ function(module, exports) {

	module.exports = {
	  "item": {
	    "marginRight": 10,
	    "width": 160,
	    "height": 75,
	    "paddingLeft": 8,
	    "paddingRight": 8,
	    "paddingTop": 8,
	    "paddingBottom": 8
	  },
	  "txt": {
	    "color": "#eeeeee"
	  }
	}

/***/ },

/***/ 288:
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    value: '',
	    type: '0' }},
	  methods: {
	    bgColor: function bgColor() {
	      return this.type == '1' ? '#7BA3A8' : '#BEAD92';
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ }

/******/ });