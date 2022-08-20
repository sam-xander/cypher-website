"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/pricing.tsx":
/*!********************************!*\
  !*** ./components/pricing.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Pricing; }\n/* harmony export */ });\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"C:\\\\Users\\\\Samst\\\\OneDrive\\\\Desktop\\\\Cypher\\\\cypher.io\\\\cypher\\\\components\\\\pricing.tsx\";\n\n/* This example requires Tailwind CSS v2.0+ */\n\n\nvar pricing = {\n  tiers: [{\n    price: 'NFT Asessment Package',\n    description: 'An essential tool to scale a project. Our experts offer bespoke advice on the areas that need improving, so you can focus on building.',\n    features: ['Detailed Report with strengths, weaknesses and recommended actions.', 'Pre and post-mint across 8 domains and over 100 data points.', 'Project listed on our new NFT project analytics platform.', 'Extensive feedback, guidance and access to our NFT network.', 'Certificate of assessment with awards in each domain.', 'Comprehensive re-assessment if project scores poorly before making it public.'],\n    cta: 'Request on Discord'\n  }, {\n    price: 'Discord Security Package',\n    description: 'A plan that scales with your rapidly growing business.',\n    features: ['Access to our team of security experts', 'Education on common attacks methods such as phishing, social engineering and malware.', 'Advanced analytics', '24-hour support response time', 'Marketing automations'],\n    cta: 'Request on Discord'\n  }, {\n    price: 'Total Project Assessment and Security Package',\n    description: 'Dedicated support and infrastructure for your company.',\n    features: ['Everything in NFT Assessment Package', 'Everything in Discord Security Package', 'Priority access to our team of NFT and Discord Security experts', 'MARKETING BONUS - [Front-page feature on our NFT investment analytics platform for a week and an in-depth thread on our Twitter highlighting your project\\'s strengths.]'],\n    cta: 'Request on Discord',\n    optionThree: true\n  }]\n};\n\nfunction classNames() {\n  for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {\n    classes[_key] = arguments[_key];\n  }\n\n  return classes.filter(Boolean).join(' ');\n}\n\nfunction Pricing() {\n  var _this = this;\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"mt-12 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6\",\n      children: pricing.tiers.map(function (tier) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"relative p-8 bg-[#344250] rounded-3xl shadow-sm flex flex-col\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex-1\",\n            children: [tier.optionThree ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n              className: \"absolute top-0 py-1.5 px-4 bg-green-500 rounded-full text-sm font-semibold text-white transform -translate-y-1/2\",\n              children: \"Get access to our marketing package included\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 59,\n              columnNumber: 17\n            }, _this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n              className: \"mt-4 flex items-baseline text-[#e6e6e6]\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"text-5xl tracking-tight font-bold\",\n                children: tier.price\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 64,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 63,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n              className: \"mt-6 text-[#e6e6e6]\",\n              children: tier.description\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 66,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n              role: \"list\",\n              className: \"mt-6 space-y-6\",\n              children: tier.features.map(function (feature) {\n                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                  className: \"flex\",\n                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__.CheckIcon, {\n                    className: \"flex-shrink-0 w-6 h-6 text-green-300\",\n                    \"aria-hidden\": \"true\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 72,\n                    columnNumber: 21\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"ml-3 text-[#e6e6e6]\",\n                    children: feature\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 73,\n                    columnNumber: 21\n                  }, _this)]\n                }, feature, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 71,\n                  columnNumber: 19\n                }, _this);\n              })\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 69,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            href: \"https://discord.gg/cypherseals\",\n            className: classNames(tier.optionThree ? 'bg-green-500 text-[#f1f1f1] hover:bg-green-400' : 'bg-[#f1f1f1] text-[#111111] hover:bg-green-100', 'mt-8 block w-full py-3 px-6 border border-transparent rounded-full text-center font-medium'),\n            children: tier.cta\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 79,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 52,\n    columnNumber: 5\n  }, this);\n}\n_c = Pricing;\n\nvar _c;\n\n$RefreshReg$(_c, \"Pricing\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qiw0RkFKbUIsQ0FGdkI7WUFBQSxVQVNHUSxJQUFJLENBQUNUO1VBVFI7WUFBQTtZQUFBO1lBQUE7VUFBQSxTQXZCRjtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUEsU0FEaUI7TUFBQSxDQUFsQjtJQURIO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFGRjtJQUFBO0lBQUE7SUFBQTtFQUFBLFFBREY7QUE0Q0Q7S0E3Q3VCTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3ByaWNpbmcudHN4P2UwY2YiXSwic291cmNlc0NvbnRlbnQiOlsiLyogVGhpcyBleGFtcGxlIHJlcXVpcmVzIFRhaWx3aW5kIENTUyB2Mi4wKyAqL1xyXG5pbXBvcnQgeyBDaGVja0ljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0L291dGxpbmUnXHJcblxyXG5jb25zdCBwcmljaW5nID0ge1xyXG4gIHRpZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByaWNlOiAnTkZUIEFzZXNzbWVudCBQYWNrYWdlJyxcclxuICAgICAgZGVzY3JpcHRpb246ICdBbiBlc3NlbnRpYWwgdG9vbCB0byBzY2FsZSBhIHByb2plY3QuIE91ciBleHBlcnRzIG9mZmVyIGJlc3Bva2UgYWR2aWNlIG9uIHRoZSBhcmVhcyB0aGF0IG5lZWQgaW1wcm92aW5nLCBzbyB5b3UgY2FuIGZvY3VzIG9uIGJ1aWxkaW5nLicsXHJcbiAgICAgIGZlYXR1cmVzOiBbXHJcbiAgICAgICAgJ0RldGFpbGVkIFJlcG9ydCB3aXRoIHN0cmVuZ3Rocywgd2Vha25lc3NlcyBhbmQgcmVjb21tZW5kZWQgYWN0aW9ucy4nLFxyXG4gICAgICAgICdQcmUgYW5kIHBvc3QtbWludCBhY3Jvc3MgOCBkb21haW5zIGFuZCBvdmVyIDEwMCBkYXRhIHBvaW50cy4nLFxyXG4gICAgICAgICdQcm9qZWN0IGxpc3RlZCBvbiBvdXIgbmV3IE5GVCBwcm9qZWN0IGFuYWx5dGljcyBwbGF0Zm9ybS4nLFxyXG4gICAgICAgICdFeHRlbnNpdmUgZmVlZGJhY2ssIGd1aWRhbmNlIGFuZCBhY2Nlc3MgdG8gb3VyIE5GVCBuZXR3b3JrLicsXHJcbiAgICAgICAgJ0NlcnRpZmljYXRlIG9mIGFzc2Vzc21lbnQgd2l0aCBhd2FyZHMgaW4gZWFjaCBkb21haW4uJyxcclxuICAgICAgICAnQ29tcHJlaGVuc2l2ZSByZS1hc3Nlc3NtZW50IGlmIHByb2plY3Qgc2NvcmVzIHBvb3JseSBiZWZvcmUgbWFraW5nIGl0IHB1YmxpYy4nXHJcbiAgICAgIF0sXHJcbiAgICAgIGN0YTogJ1JlcXVlc3Qgb24gRGlzY29yZCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwcmljZTogJ0Rpc2NvcmQgU2VjdXJpdHkgUGFja2FnZScsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnQSBwbGFuIHRoYXQgc2NhbGVzIHdpdGggeW91ciByYXBpZGx5IGdyb3dpbmcgYnVzaW5lc3MuJyxcclxuICAgICAgZmVhdHVyZXM6IFtcclxuICAgICAgICAnQWNjZXNzIHRvIG91ciB0ZWFtIG9mIHNlY3VyaXR5IGV4cGVydHMnLFxyXG4gICAgICAgICdFZHVjYXRpb24gb24gY29tbW9uIGF0dGFja3MgbWV0aG9kcyBzdWNoIGFzIHBoaXNoaW5nLCBzb2NpYWwgZW5naW5lZXJpbmcgYW5kIG1hbHdhcmUuJyxcclxuICAgICAgICAnQWR2YW5jZWQgYW5hbHl0aWNzJyxcclxuICAgICAgICAnMjQtaG91ciBzdXBwb3J0IHJlc3BvbnNlIHRpbWUnLFxyXG4gICAgICAgICdNYXJrZXRpbmcgYXV0b21hdGlvbnMnLFxyXG4gICAgICBdLFxyXG4gICAgICBjdGE6ICdSZXF1ZXN0IG9uIERpc2NvcmQnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcHJpY2U6ICdUb3RhbCBQcm9qZWN0IEFzc2Vzc21lbnQgYW5kIFNlY3VyaXR5IFBhY2thZ2UnLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ0RlZGljYXRlZCBzdXBwb3J0IGFuZCBpbmZyYXN0cnVjdHVyZSBmb3IgeW91ciBjb21wYW55LicsXHJcbiAgICAgIGZlYXR1cmVzOiBbXHJcbiAgICAgICAgJ0V2ZXJ5dGhpbmcgaW4gTkZUIEFzc2Vzc21lbnQgUGFja2FnZScsXHJcbiAgICAgICAgJ0V2ZXJ5dGhpbmcgaW4gRGlzY29yZCBTZWN1cml0eSBQYWNrYWdlJyxcclxuICAgICAgICAnUHJpb3JpdHkgYWNjZXNzIHRvIG91ciB0ZWFtIG9mIE5GVCBhbmQgRGlzY29yZCBTZWN1cml0eSBleHBlcnRzJyxcclxuICAgICAgICAnTUFSS0VUSU5HIEJPTlVTIC0gW0Zyb250LXBhZ2UgZmVhdHVyZSBvbiBvdXIgTkZUIGludmVzdG1lbnQgYW5hbHl0aWNzIHBsYXRmb3JtIGZvciBhIHdlZWsgYW5kIGFuIGluLWRlcHRoIHRocmVhZCBvbiBvdXIgVHdpdHRlciBoaWdobGlnaHRpbmcgeW91ciBwcm9qZWN0XFwncyBzdHJlbmd0aHMuXScsXHJcbiAgICAgIF0sXHJcbiAgICAgIGN0YTogJ1JlcXVlc3Qgb24gRGlzY29yZCcsXHJcbiAgICAgIG9wdGlvblRocmVlOiB0cnVlLFxyXG4gICAgfSxcclxuICBdLFxyXG59XHJcblxyXG5mdW5jdGlvbiBjbGFzc05hbWVzKC4uLmNsYXNzZXMpIHtcclxuICByZXR1cm4gY2xhc3Nlcy5maWx0ZXIoQm9vbGVhbikuam9pbignICcpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByaWNpbmcoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gcHgtNCBzbTpweC02IGxnOnB4LThcIj4gXHJcbiAgICAgIHsvKiBUaWVycyAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMiBzcGFjZS15LTEyIGxnOnNwYWNlLXktMCBsZzpncmlkIGxnOmdyaWQtY29scy0zIGxnOmdhcC14LTZcIj5cclxuICAgICAgICB7cHJpY2luZy50aWVycy5tYXAoKHRpZXIpID0+IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgcC04IGJnLVsjMzQ0MjUwXSByb3VuZGVkLTN4bCBzaGFkb3ctc20gZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMVwiPlxyXG4gICAgICAgICAgICAgIHt0aWVyLm9wdGlvblRocmVlID8gKFxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgcHktMS41IHB4LTQgYmctZ3JlZW4tNTAwIHJvdW5kZWQtZnVsbCB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS15LTEvMlwiPlxyXG4gICAgICAgICAgICAgICAgICBHZXQgYWNjZXNzIHRvIG91ciBtYXJrZXRpbmcgcGFja2FnZSBpbmNsdWRlZFxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTQgZmxleCBpdGVtcy1iYXNlbGluZSB0ZXh0LVsjZTZlNmU2XVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC01eGwgdHJhY2tpbmctdGlnaHQgZm9udC1ib2xkXCI+e3RpZXIucHJpY2V9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC02IHRleHQtWyNlNmU2ZTZdXCI+e3RpZXIuZGVzY3JpcHRpb259PC9wPlxyXG5cclxuICAgICAgICAgICAgICB7LyogRmVhdHVyZSBsaXN0ICovfVxyXG4gICAgICAgICAgICAgIDx1bCByb2xlPVwibGlzdFwiIGNsYXNzTmFtZT1cIm10LTYgc3BhY2UteS02XCI+XHJcbiAgICAgICAgICAgICAgICB7dGllci5mZWF0dXJlcy5tYXAoKGZlYXR1cmUpID0+IChcclxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17ZmVhdHVyZX0gY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGVja0ljb24gY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMCB3LTYgaC02IHRleHQtZ3JlZW4tMzAwXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0zIHRleHQtWyNlNmU2ZTZdXCI+e2ZlYXR1cmV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2Rpc2NvcmQuZ2cvY3lwaGVyc2VhbHNcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgIHRpZXIub3B0aW9uVGhyZWVcclxuICAgICAgICAgICAgICAgICAgPyAnYmctZ3JlZW4tNTAwIHRleHQtWyNmMWYxZjFdIGhvdmVyOmJnLWdyZWVuLTQwMCdcclxuICAgICAgICAgICAgICAgICAgOiAnYmctWyNmMWYxZjFdIHRleHQtWyMxMTExMTFdIGhvdmVyOmJnLWdyZWVuLTEwMCcsXHJcbiAgICAgICAgICAgICAgICAnbXQtOCBibG9jayB3LWZ1bGwgcHktMyBweC02IGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgcm91bmRlZC1mdWxsIHRleHQtY2VudGVyIGZvbnQtbWVkaXVtJ1xyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7dGllci5jdGF9XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiQ2hlY2tJY29uIiwicHJpY2luZyIsInRpZXJzIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImZlYXR1cmVzIiwiY3RhIiwib3B0aW9uVGhyZWUiLCJjbGFzc05hbWVzIiwiY2xhc3NlcyIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwiUHJpY2luZyIsIm1hcCIsInRpZXIiLCJmZWF0dXJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/pricing.tsx\n"));

/***/ })

});