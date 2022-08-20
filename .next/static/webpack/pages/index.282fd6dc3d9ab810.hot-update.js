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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Pricing; }\n/* harmony export */ });\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"C:\\\\Users\\\\Samst\\\\OneDrive\\\\Desktop\\\\Cypher\\\\cypher.io\\\\cypher\\\\components\\\\pricing.tsx\";\n\n/* This example requires Tailwind CSS v2.0+ */\n\n\nvar pricing = {\n  tiers: [{\n    price: 'NFT Asessment Package',\n    description: 'An essential tool to scale a project. Our experts offer bespoke advice on the areas that need improving, so you can focus on building.',\n    features: ['Detailed Report with strengths, weaknesses and recommended actions.', 'Pre and post-mint across 8 domains and over 100 data points.', 'Project listed on our new NFT project analytics platform.', 'Extensive feedback, guidance and access to our NFT network.', 'Certificate of assessment with awards in each domain.', 'Comprehensive re-assessment if project scores poorly before making it public.'],\n    cta: 'Request on Discord'\n  }, {\n    price: 'Discord Security Package',\n    description: 'Discord is the lifeblood of an NFT project. We can help protect your community and reputation by taking simple steps to secure their project.',\n    features: ['Access to our team of security experts to support you through each step.', 'Education on common attacks methods such as phishing, social engineering and malware.', 'Create a plan for responding to hacks and minimize the damage and impact on your reputation.', 'Consultation on best practices for securing your server from implementing bots and permissions to training staff.', 'Discord security training material to distribute to your everyone on your team.'],\n    cta: 'Request on Discord'\n  }, {\n    price: 'Total Project Assessment and Security Package',\n    description: 'Dedicated support and infrastructure for your company.',\n    features: ['Everything in NFT Assessment Package', 'Everything in Discord Security Package', 'Priority access to our team of NFT and Discord Security experts', 'MARKETING BONUS - [Front-page feature on our NFT investment analytics platform for a week and an in-depth thread on our Twitter highlighting your project\\'s strengths.]'],\n    cta: 'Request on Discord',\n    optionThree: true\n  }]\n};\n\nfunction classNames() {\n  for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {\n    classes[_key] = arguments[_key];\n  }\n\n  return classes.filter(Boolean).join(' ');\n}\n\nfunction Pricing() {\n  var _this = this;\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"mt-12 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6\",\n      children: pricing.tiers.map(function (tier) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"relative p-8 bg-[#344250] rounded-3xl shadow-sm flex flex-col\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex-1\",\n            children: [tier.optionThree ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n              className: \"absolute top-0 py-1.5 px-4 bg-green-500 rounded-full text-sm font-semibold text-white transform -translate-y-1/2\",\n              children: \"Get access to our marketing package included\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 59,\n              columnNumber: 17\n            }, _this) : null, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n              className: \"mt-4 flex items-baseline text-[#e6e6e6]\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"text-5xl tracking-tight font-bold\",\n                children: tier.price\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 64,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 63,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n              className: \"mt-6 text-[#e6e6e6]\",\n              children: tier.description\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 66,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n              role: \"list\",\n              className: \"mt-6 space-y-6\",\n              children: tier.features.map(function (feature) {\n                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                  className: \"flex\",\n                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__.CheckIcon, {\n                    className: \"flex-shrink-0 w-6 h-6 text-green-300\",\n                    \"aria-hidden\": \"true\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 72,\n                    columnNumber: 21\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"ml-3 text-[#e6e6e6]\",\n                    children: feature\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 73,\n                    columnNumber: 21\n                  }, _this)]\n                }, feature, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 71,\n                  columnNumber: 19\n                }, _this);\n              })\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 69,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            href: \"https://discord.gg/cypherseals\",\n            className: classNames(tier.optionThree ? 'bg-green-500 text-[#f1f1f1] hover:bg-green-400' : 'bg-[#f1f1f1] text-[#111111] hover:bg-green-100', 'mt-8 block w-full py-3 px-6 border border-transparent rounded-full text-center font-medium'),\n            children: tier.cta\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 79,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 52,\n    columnNumber: 5\n  }, this);\n}\n_c = Pricing;\n\nvar _c;\n\n$RefreshReg$(_c, \"Pricing\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qiw0RkFKbUIsQ0FGdkI7WUFBQSxVQVNHUSxJQUFJLENBQUNUO1VBVFI7WUFBQTtZQUFBO1lBQUE7VUFBQSxTQXZCRjtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUEsU0FEaUI7TUFBQSxDQUFsQjtJQURIO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFGRjtJQUFBO0lBQUE7SUFBQTtFQUFBLFFBREY7QUE0Q0Q7S0E3Q3VCTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3ByaWNpbmcudHN4P2UwY2YiXSwic291cmNlc0NvbnRlbnQiOlsiLyogVGhpcyBleGFtcGxlIHJlcXVpcmVzIFRhaWx3aW5kIENTUyB2Mi4wKyAqL1xyXG5pbXBvcnQgeyBDaGVja0ljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0L291dGxpbmUnXHJcblxyXG5jb25zdCBwcmljaW5nID0ge1xyXG4gIHRpZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByaWNlOiAnTkZUIEFzZXNzbWVudCBQYWNrYWdlJyxcclxuICAgICAgZGVzY3JpcHRpb246ICdBbiBlc3NlbnRpYWwgdG9vbCB0byBzY2FsZSBhIHByb2plY3QuIE91ciBleHBlcnRzIG9mZmVyIGJlc3Bva2UgYWR2aWNlIG9uIHRoZSBhcmVhcyB0aGF0IG5lZWQgaW1wcm92aW5nLCBzbyB5b3UgY2FuIGZvY3VzIG9uIGJ1aWxkaW5nLicsXHJcbiAgICAgIGZlYXR1cmVzOiBbXHJcbiAgICAgICAgJ0RldGFpbGVkIFJlcG9ydCB3aXRoIHN0cmVuZ3Rocywgd2Vha25lc3NlcyBhbmQgcmVjb21tZW5kZWQgYWN0aW9ucy4nLFxyXG4gICAgICAgICdQcmUgYW5kIHBvc3QtbWludCBhY3Jvc3MgOCBkb21haW5zIGFuZCBvdmVyIDEwMCBkYXRhIHBvaW50cy4nLFxyXG4gICAgICAgICdQcm9qZWN0IGxpc3RlZCBvbiBvdXIgbmV3IE5GVCBwcm9qZWN0IGFuYWx5dGljcyBwbGF0Zm9ybS4nLFxyXG4gICAgICAgICdFeHRlbnNpdmUgZmVlZGJhY2ssIGd1aWRhbmNlIGFuZCBhY2Nlc3MgdG8gb3VyIE5GVCBuZXR3b3JrLicsXHJcbiAgICAgICAgJ0NlcnRpZmljYXRlIG9mIGFzc2Vzc21lbnQgd2l0aCBhd2FyZHMgaW4gZWFjaCBkb21haW4uJyxcclxuICAgICAgICAnQ29tcHJlaGVuc2l2ZSByZS1hc3Nlc3NtZW50IGlmIHByb2plY3Qgc2NvcmVzIHBvb3JseSBiZWZvcmUgbWFraW5nIGl0IHB1YmxpYy4nXHJcbiAgICAgIF0sXHJcbiAgICAgIGN0YTogJ1JlcXVlc3Qgb24gRGlzY29yZCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwcmljZTogJ0Rpc2NvcmQgU2VjdXJpdHkgUGFja2FnZScsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnRGlzY29yZCBpcyB0aGUgbGlmZWJsb29kIG9mIGFuIE5GVCBwcm9qZWN0LiBXZSBjYW4gaGVscCBwcm90ZWN0IHlvdXIgY29tbXVuaXR5IGFuZCByZXB1dGF0aW9uIGJ5IHRha2luZyBzaW1wbGUgc3RlcHMgdG8gc2VjdXJlIHRoZWlyIHByb2plY3QuJyxcclxuICAgICAgZmVhdHVyZXM6IFtcclxuICAgICAgICAnQWNjZXNzIHRvIG91ciB0ZWFtIG9mIHNlY3VyaXR5IGV4cGVydHMgdG8gc3VwcG9ydCB5b3UgdGhyb3VnaCBlYWNoIHN0ZXAuJyxcclxuICAgICAgICAnRWR1Y2F0aW9uIG9uIGNvbW1vbiBhdHRhY2tzIG1ldGhvZHMgc3VjaCBhcyBwaGlzaGluZywgc29jaWFsIGVuZ2luZWVyaW5nIGFuZCBtYWx3YXJlLicsXHJcbiAgICAgICAgJ0NyZWF0ZSBhIHBsYW4gZm9yIHJlc3BvbmRpbmcgdG8gaGFja3MgYW5kIG1pbmltaXplIHRoZSBkYW1hZ2UgYW5kIGltcGFjdCBvbiB5b3VyIHJlcHV0YXRpb24uJyxcclxuICAgICAgICAnQ29uc3VsdGF0aW9uIG9uIGJlc3QgcHJhY3RpY2VzIGZvciBzZWN1cmluZyB5b3VyIHNlcnZlciBmcm9tIGltcGxlbWVudGluZyBib3RzIGFuZCBwZXJtaXNzaW9ucyB0byB0cmFpbmluZyBzdGFmZi4nLFxyXG4gICAgICAgICdEaXNjb3JkIHNlY3VyaXR5IHRyYWluaW5nIG1hdGVyaWFsIHRvIGRpc3RyaWJ1dGUgdG8geW91ciBldmVyeW9uZSBvbiB5b3VyIHRlYW0uJyxcclxuICAgICAgXSxcclxuICAgICAgY3RhOiAnUmVxdWVzdCBvbiBEaXNjb3JkJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHByaWNlOiAnVG90YWwgUHJvamVjdCBBc3Nlc3NtZW50IGFuZCBTZWN1cml0eSBQYWNrYWdlJyxcclxuICAgICAgZGVzY3JpcHRpb246ICdEZWRpY2F0ZWQgc3VwcG9ydCBhbmQgaW5mcmFzdHJ1Y3R1cmUgZm9yIHlvdXIgY29tcGFueS4nLFxyXG4gICAgICBmZWF0dXJlczogW1xyXG4gICAgICAgICdFdmVyeXRoaW5nIGluIE5GVCBBc3Nlc3NtZW50IFBhY2thZ2UnLFxyXG4gICAgICAgICdFdmVyeXRoaW5nIGluIERpc2NvcmQgU2VjdXJpdHkgUGFja2FnZScsXHJcbiAgICAgICAgJ1ByaW9yaXR5IGFjY2VzcyB0byBvdXIgdGVhbSBvZiBORlQgYW5kIERpc2NvcmQgU2VjdXJpdHkgZXhwZXJ0cycsXHJcbiAgICAgICAgJ01BUktFVElORyBCT05VUyAtIFtGcm9udC1wYWdlIGZlYXR1cmUgb24gb3VyIE5GVCBpbnZlc3RtZW50IGFuYWx5dGljcyBwbGF0Zm9ybSBmb3IgYSB3ZWVrIGFuZCBhbiBpbi1kZXB0aCB0aHJlYWQgb24gb3VyIFR3aXR0ZXIgaGlnaGxpZ2h0aW5nIHlvdXIgcHJvamVjdFxcJ3Mgc3RyZW5ndGhzLl0nLFxyXG4gICAgICBdLFxyXG4gICAgICBjdGE6ICdSZXF1ZXN0IG9uIERpc2NvcmQnLFxyXG4gICAgICBvcHRpb25UaHJlZTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgXSxcclxufVxyXG5cclxuZnVuY3Rpb24gY2xhc3NOYW1lcyguLi5jbGFzc2VzKSB7XHJcbiAgcmV0dXJuIGNsYXNzZXMuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcmljaW5nKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvIHB4LTQgc206cHgtNiBsZzpweC04XCI+IFxyXG4gICAgICB7LyogVGllcnMgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTIgc3BhY2UteS0xMiBsZzpzcGFjZS15LTAgbGc6Z3JpZCBsZzpncmlkLWNvbHMtMyBsZzpnYXAteC02XCI+XHJcbiAgICAgICAge3ByaWNpbmcudGllcnMubWFwKCh0aWVyKSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHAtOCBiZy1bIzM0NDI1MF0gcm91bmRlZC0zeGwgc2hhZG93LXNtIGZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTFcIj5cclxuICAgICAgICAgICAgICB7dGllci5vcHRpb25UaHJlZSA/IChcclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIHB5LTEuNSBweC00IGJnLWdyZWVuLTUwMCByb3VuZGVkLWZ1bGwgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgdHJhbnNmb3JtIC10cmFuc2xhdGUteS0xLzJcIj5cclxuICAgICAgICAgICAgICAgICAgR2V0IGFjY2VzcyB0byBvdXIgbWFya2V0aW5nIHBhY2thZ2UgaW5jbHVkZWRcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC00IGZsZXggaXRlbXMtYmFzZWxpbmUgdGV4dC1bI2U2ZTZlNl1cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtNXhsIHRyYWNraW5nLXRpZ2h0IGZvbnQtYm9sZFwiPnt0aWVyLnByaWNlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtNiB0ZXh0LVsjZTZlNmU2XVwiPnt0aWVyLmRlc2NyaXB0aW9ufTwvcD5cclxuXHJcbiAgICAgICAgICAgICAgey8qIEZlYXR1cmUgbGlzdCAqL31cclxuICAgICAgICAgICAgICA8dWwgcm9sZT1cImxpc3RcIiBjbGFzc05hbWU9XCJtdC02IHNwYWNlLXktNlwiPlxyXG4gICAgICAgICAgICAgICAge3RpZXIuZmVhdHVyZXMubWFwKChmZWF0dXJlKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2ZlYXR1cmV9IGNsYXNzTmFtZT1cImZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Q2hlY2tJY29uIGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTAgdy02IGgtNiB0ZXh0LWdyZWVuLTMwMFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMyB0ZXh0LVsjZTZlNmU2XVwiPntmZWF0dXJlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9kaXNjb3JkLmdnL2N5cGhlcnNlYWxzXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICB0aWVyLm9wdGlvblRocmVlXHJcbiAgICAgICAgICAgICAgICAgID8gJ2JnLWdyZWVuLTUwMCB0ZXh0LVsjZjFmMWYxXSBob3ZlcjpiZy1ncmVlbi00MDAnXHJcbiAgICAgICAgICAgICAgICAgIDogJ2JnLVsjZjFmMWYxXSB0ZXh0LVsjMTExMTExXSBob3ZlcjpiZy1ncmVlbi0xMDAnLFxyXG4gICAgICAgICAgICAgICAgJ210LTggYmxvY2sgdy1mdWxsIHB5LTMgcHgtNiBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IHJvdW5kZWQtZnVsbCB0ZXh0LWNlbnRlciBmb250LW1lZGl1bSdcclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3RpZXIuY3RhfVxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIkNoZWNrSWNvbiIsInByaWNpbmciLCJ0aWVycyIsInByaWNlIiwiZGVzY3JpcHRpb24iLCJmZWF0dXJlcyIsImN0YSIsIm9wdGlvblRocmVlIiwiY2xhc3NOYW1lcyIsImNsYXNzZXMiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsIlByaWNpbmciLCJtYXAiLCJ0aWVyIiwiZmVhdHVyZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/pricing.tsx\n"));

/***/ })

});