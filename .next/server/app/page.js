"use strict";
(() => {
var exports = {};
exports.id = 931;
exports.ids = [931];
exports.modules = {

/***/ 18038:
/***/ ((module) => {

module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 98704:
/***/ ((module) => {

module.exports = require("next/dist/compiled/react-dom/server-rendering-stub");

/***/ }),

/***/ 97897:
/***/ ((module) => {

module.exports = require("next/dist/compiled/react-server-dom-webpack/client");

/***/ }),

/***/ 56786:
/***/ ((module) => {

module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ }),

/***/ 5868:
/***/ ((module) => {

module.exports = require("next/dist/server/app-render/app-render");

/***/ }),

/***/ 41844:
/***/ ((module) => {

module.exports = require("next/dist/server/app-render/get-segment-param");

/***/ }),

/***/ 96624:
/***/ ((module) => {

module.exports = require("next/dist/server/future/helpers/interception-routes");

/***/ }),

/***/ 75281:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module");

/***/ }),

/***/ 57085:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context");

/***/ }),

/***/ 20199:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/hash");

/***/ }),

/***/ 86819:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context");

/***/ }),

/***/ 39569:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/hooks-client-context");

/***/ }),

/***/ 17160:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context");

/***/ }),

/***/ 30893:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix");

/***/ }),

/***/ 12336:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url");

/***/ }),

/***/ 17887:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/handle-smooth-scroll");

/***/ }),

/***/ 98735:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot");

/***/ }),

/***/ 60120:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url");

/***/ }),

/***/ 68231:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path");

/***/ }),

/***/ 54614:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix");

/***/ }),

/***/ 53750:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash");

/***/ }),

/***/ 70982:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href");

/***/ }),

/***/ 79618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/server-inserted-html");

/***/ }),

/***/ 78423:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils");

/***/ }),

/***/ 25484:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default.a),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7262);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19513);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31823);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12502);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
// @ts-ignore this need to be imported from next/dist to be external


const AppPageRouteModule = next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__.AppPageRouteModule;
// We inject the tree and pages here so that we can use them in the route
// module.
const tree = {
        children: [
        '',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 80972)), "/home/loc/dyzio-blog/app/page.tsx"],
          
        }]
      },
        {
        'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 61307)), "/home/loc/dyzio-blog/app/layout.tsx"],
'not-found': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 96061)), "/home/loc/dyzio-blog/app/not-found.tsx"],
        
      }
      ]
      }.children;
const pages = ["/home/loc/dyzio-blog/app/page.tsx"];

// @ts-expect-error - replaced by webpack/turbopack loader

const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_PAGE,
        page: "/page",
        pathname: "/",
        // The following aren't used in production.
        bundlePath: "",
        filename: "",
        appPaths: []
    },
    userland: {
        loaderTree: tree
    }
});

//# sourceMappingURL=app-page.js.map

/***/ }),

/***/ 80972:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Page)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/pliny/utils/contentlayer.js
var contentlayer = __webpack_require__(47596);
// EXTERNAL MODULE: ./.contentlayer/generated/index.mjs + 3 modules
var generated = __webpack_require__(33199);
// EXTERNAL MODULE: ./components/Link.tsx
var Link = __webpack_require__(5725);
// EXTERNAL MODULE: ./components/Tag.tsx
var Tag = __webpack_require__(23469);
// EXTERNAL MODULE: ./data/siteMetadata.js
var siteMetadata = __webpack_require__(95976);
var siteMetadata_default = /*#__PURE__*/__webpack_require__.n(siteMetadata);
// EXTERNAL MODULE: ./node_modules/pliny/utils/formatDate.js + 1 modules
var formatDate = __webpack_require__(26719);
;// CONCATENATED MODULE: ./app/Main.tsx





const MAX_DISPLAY = 5;
function Home({ posts }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "divide-y divide-gray-200 dark:divide-gray-700",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "space-y-2 pb-8 pt-6 md:space-y-5",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14",
                                children: "Hello \uD83D\uDC4B"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-lg leading-7 text-gray-500 dark:text-gray-400",
                                children: (siteMetadata_default()).description
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: "divide-y divide-gray-200 dark:divide-gray-700",
                        children: [
                            !posts.length && "No posts found.",
                            posts.slice(0, MAX_DISPLAY).map((post)=>{
                                const { slug, date, title, summary, tags } = post;
                                return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "py-12",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("article", {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("dl", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("dt", {
                                                            className: "sr-only",
                                                            children: "Published on"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("dd", {
                                                            className: "text-base font-medium leading-6 text-gray-500 dark:text-gray-400",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("time", {
                                                                dateTime: date,
                                                                children: (0,formatDate/* formatDate */.p)(date, (siteMetadata_default()).locale)
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "space-y-5 xl:col-span-3",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "space-y-6",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                                            className: "text-2xl font-bold leading-8 tracking-tight",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                                                                                href: `/blog/${slug}`,
                                                                                className: "text-gray-900 dark:text-gray-100",
                                                                                children: title
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "flex flex-wrap",
                                                                            children: tags.map((tag)=>/*#__PURE__*/ jsx_runtime_.jsx(Tag/* default */.Z, {
                                                                                    text: tag
                                                                                }, tag))
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "prose max-w-none text-gray-500 dark:text-gray-400",
                                                                    children: summary
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "text-base font-medium leading-6",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                                                                href: `/blog/${slug}`,
                                                                className: "text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",
                                                                "aria-label": `Read "${title}"`,
                                                                children: "Read more →"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                }, slug);
                            })
                        ]
                    })
                ]
            }),
            posts.length > MAX_DISPLAY && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex justify-end text-base font-medium leading-6",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                    href: "/blog",
                    className: "text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",
                    "aria-label": "All posts",
                    children: "All Posts →"
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./app/page.tsx




async function Page() {
    const sortedPosts = (0,contentlayer/* sortPosts */.O2)(generated/* allBlogs */.R6);
    const posts = (0,contentlayer/* allCoreContent */.ND)(sortedPosts);
    return /*#__PURE__*/ jsx_runtime_.jsx(Home, {
        posts: posts
    });
}


/***/ }),

/***/ 23469:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25124);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var github_slugger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39086);
/* harmony import */ var github_slugger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(github_slugger__WEBPACK_IMPORTED_MODULE_2__);



const Tag = ({ text })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: `/tags/${(0,github_slugger__WEBPACK_IMPORTED_MODULE_2__.slug)(text)}`,
        className: "mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",
        children: text.split(" ").join("-")
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tag);


/***/ }),

/***/ 26719:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  p: () => (/* reexport */ formatDate)
});

;// CONCATENATED MODULE: ./node_modules/pliny/chunk-T2LUFWMO.js
// src/utils/formatDate.ts
var formatDate = (date, locale = "en-US")=>{
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric"
    };
    const now = new Date(date).toLocaleDateString(locale, options);
    return now;
};


// EXTERNAL MODULE: ./node_modules/pliny/chunk-4VSLFMH7.js
var chunk_4VSLFMH7 = __webpack_require__(79910);
;// CONCATENATED MODULE: ./node_modules/pliny/utils/formatDate.js




/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [478,910,309,317,86,327,793,199], () => (__webpack_exec__(25484)));
module.exports = __webpack_exports__;

})();