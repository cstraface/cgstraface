(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 718:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ App)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./src/utilits.js
var utilits = __webpack_require__(335);
;// CONCATENATED MODULE: ./src/layout/PreLoader.js



const PreLoader = ()=>{
    (0,external_react_.useEffect)(()=>{
        utilits/* swissUtilits.preloader */.X.preloader();
    }, []);
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        id: "preloader",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "loader_line"
        })
    });
};
/* harmony default export */ const layout_PreLoader = (PreLoader);

// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(764);
// EXTERNAL MODULE: ./src/context/context.js
var context = __webpack_require__(298);
;// CONCATENATED MODULE: ./pages/_app.js




function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(context/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(layout_PreLoader, {}),
            /*#__PURE__*/ jsx_runtime.jsx(Component, {
                ...pageProps
            })
        ]
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js&preferredRegion=!

        // Next.js Route Loader
        
        
    

/***/ }),

/***/ 764:
/***/ (() => {



/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,995], () => (__webpack_exec__(718)));
module.exports = __webpack_exports__;

})();