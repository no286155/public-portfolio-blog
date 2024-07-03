exports.id = 978;
exports.ids = [978];
exports.modules = {

/***/ 45057:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 65782))

/***/ }),

/***/ 65782:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ListLayoutWithTags)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(57114);
// EXTERNAL MODULE: ./node_modules/github-slugger/index.js
var github_slugger = __webpack_require__(43418);
// EXTERNAL MODULE: ./node_modules/pliny/utils/formatDate.js
var formatDate = __webpack_require__(41473);
// EXTERNAL MODULE: ./components/Link.tsx
var Link = __webpack_require__(62108);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(11440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Tag.tsx



const Tag = ({ text })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: `/tags/${(0,github_slugger.slug)(text)}`,
        className: "mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",
        children: text.split(" ").join("-")
    });
};
/* harmony default export */ const components_Tag = (Tag);

// EXTERNAL MODULE: ./data/siteMetadata.js
var siteMetadata = __webpack_require__(68248);
var siteMetadata_default = /*#__PURE__*/__webpack_require__.n(siteMetadata);
;// CONCATENATED MODULE: ./app/tag-data.json
const tag_data_namespaceObject = JSON.parse('{"n4":1,"japanese":2,"language":2,"n5":1,"python":2,"debug":3,"react":1,"mysql":1,"certificate":1,"course":1}');
;// CONCATENATED MODULE: ./layouts/ListLayoutWithTags.tsx
/* eslint-disable jsx-a11y/anchor-is-valid */ /* __next_internal_client_entry_do_not_use__ default auto */ 







function Pagination({ totalPages, currentPage }) {
    const pathname = (0,navigation.usePathname)();
    const basePath = pathname.split("/")[1];
    const prevPage = currentPage - 1 > 0;
    const nextPage = currentPage + 1 <= totalPages;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "space-y-2 pb-8 pt-6 md:space-y-5",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
            className: "flex justify-between",
            children: [
                !prevPage && /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "cursor-auto disabled:opacity-50",
                    disabled: !prevPage,
                    children: "Previous"
                }),
                prevPage && /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                    href: currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`,
                    rel: "prev",
                    children: "Previous"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                    children: [
                        currentPage,
                        " of ",
                        totalPages
                    ]
                }),
                !nextPage && /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "cursor-auto disabled:opacity-50",
                    disabled: !nextPage,
                    children: "Next"
                }),
                nextPage && /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                    href: `/${basePath}/page/${currentPage + 1}`,
                    rel: "next",
                    children: "Next"
                })
            ]
        })
    });
}
function ListLayoutWithTags({ posts, title, initialDisplayPosts = [], pagination }) {
    const pathname = (0,navigation.usePathname)();
    const tagCounts = tag_data_namespaceObject;
    const tagKeys = Object.keys(tagCounts);
    const sortedTags = tagKeys.sort((a, b)=>tagCounts[b] - tagCounts[a]);
    const displayPosts = initialDisplayPosts.length > 0 ? initialDisplayPosts : posts;
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "pb-6 pt-6",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "sm:hidden text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14",
                        children: title
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex sm:space-x-24",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "hidden max-h-screen h-full sm:flex flex-wrap bg-gray-50 dark:bg-gray-900/70 shadow-md pt-5 dark:shadow-gray-800/40 rounded min-w-[280px] max-w-[280px] overflow-auto",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "py-4 px-6",
                                children: [
                                    pathname.startsWith("/blog") ? /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: "text-primary-500 font-bold uppercase",
                                        children: "All Posts"
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                                        href: `/blog`,
                                        className: "font-bold uppercase text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-500",
                                        children: "All Posts"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        children: sortedTags.map((t)=>{
                                            return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "my-3",
                                                children: pathname.split("/tags/")[1] === (0,github_slugger.slug)(t) ? /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    className: "inline py-2 px-3 uppercase text-sm font-bold text-primary-500",
                                                    children: `${t} (${tagCounts[t]})`
                                                }) : /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                                                    href: `/tags/${(0,github_slugger.slug)(t)}`,
                                                    className: "py-2 px-3 uppercase text-sm font-medium text-gray-500 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-500",
                                                    "aria-label": `View posts tagged ${t}`,
                                                    children: `${t} (${tagCounts[t]})`
                                                })
                                            }, t);
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                    children: displayPosts.map((post)=>{
                                        const { path, date, title, summary, tags } = post;
                                        return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "py-5",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
                                                className: "space-y-2 flex flex-col xl:space-y-0",
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
                                                        className: "space-y-3",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                                        className: "text-2xl font-bold leading-8 tracking-tight",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                                                                            href: `/${path}`,
                                                                            className: "text-gray-900 dark:text-gray-100",
                                                                            children: title
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "flex flex-wrap",
                                                                        children: tags?.map((tag)=>/*#__PURE__*/ jsx_runtime_.jsx(components_Tag, {
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
                                                    })
                                                ]
                                            })
                                        }, path);
                                    })
                                }),
                                pagination && pagination.totalPages > 1 && /*#__PURE__*/ jsx_runtime_.jsx(Pagination, {
                                    currentPage: pagination.currentPage,
                                    totalPages: pagination.totalPages
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 82874:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/home/loc/dyzio-blog/layouts/ListLayoutWithTags.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ })

};
;