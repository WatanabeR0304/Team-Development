/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/server.ts":
/*!***********************!*\
  !*** ./src/server.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var console = __webpack_require__(/*! console-browserify */ "console-browserify");

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var express_1 = __importDefault(__webpack_require__(/*! express */ "express"));
var cors_1 = __importDefault(__webpack_require__(/*! cors */ "cors"));
var body_parser_1 = __importDefault(__webpack_require__(/*! body-parser */ "body-parser"));
global.XMLHttpRequest = __webpack_require__(/*! xhr2 */ "xhr2");
var port = {"npm_config_user_agent":"npm/7.13.0 node/v16.2.0 linux x64 workspaces/false","NODE_VERSION":"16.2.0","HOSTNAME":"50c3caca539f","APP_URL":"http://localhost:3000","YARN_VERSION":"1.22.5","npm_node_execpath":"/usr/local/bin/node","npm_config_noproxy":"","HOME":"/root","npm_package_json":"/app/package.json","APP_PORT":"3000","npm_config_userconfig":"/root/.npmrc","COLOR":"1","npm_config_metrics_registry":"https://registry.npmjs.org/","npm_config_prefix":"/usr/local","TERM":"xterm","npm_config_cache":"/root/.npm","npm_config_node_gyp":"/usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js","PATH":"/app/node_modules/.bin:/node_modules/.bin:/usr/local/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin","NODE":"/usr/local/bin/node","npm_package_name":"server","npm_lifecycle_script":"webpack --watch --config webpack.dev.js","npm_package_version":"1.0.0","npm_lifecycle_event":"dev","SERVER_URL":"http://localhost:3001","npm_config_globalconfig":"/usr/local/etc/npmrc","npm_config_init_module":"/root/.npm-init.js","PWD":"/app","npm_execpath":"/usr/local/lib/node_modules/npm/bin/npm-cli.js","SERVER_PORT":"3001","npm_command":"run-script","INIT_CWD":"/app","EDITOR":"vi"}.SERVER_PORT;
var app = express_1.default();
app.use(cors_1.default({}));
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.get("/", function (req, res) {
    console.log("hello");
    res.status(200).end();
});
app.listen(port);
console.log("app listening at " + port);


/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("body-parser");;

/***/ }),

/***/ "console-browserify":
/*!*************************************!*\
  !*** external "console-browserify" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("console-browserify");;

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");;

/***/ }),

/***/ "xhr2":
/*!***********************!*\
  !*** external "xhr2" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("xhr2");;

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=output.js.map