exports.id = 202;
exports.ids = [202];
exports.modules = {

/***/ 35879:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50954, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 73380, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 24941));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 73453));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 56695));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 84944));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 88886))

/***/ }),

/***/ 56695:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Comments)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pliny_comments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74135);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68248);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_3__);
/* __next_internal_client_entry_do_not_use__ default auto */ 



function Comments({ slug }) {
    const [loadComments, setLoadComments] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            !loadComments && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: ()=>setLoadComments(true),
                children: "Load Comments"
            }),
            (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_3___default().comments) && loadComments && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(pliny_comments__WEBPACK_IMPORTED_MODULE_1__/* .Comments */ .HW, {
                commentsConfig: (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_3___default().comments),
                slug: slug
            })
        ]
    });
}


/***/ }),

/***/ 84944:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68248);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ default auto */ 


const ScrollTopAndComment = ()=>{
    const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const handleWindowScroll = ()=>{
            if (window.scrollY > 50) setShow(true);
            else setShow(false);
        };
        window.addEventListener("scroll", handleWindowScroll);
        return ()=>window.removeEventListener("scroll", handleWindowScroll);
    }, []);
    const handleScrollTop = ()=>{
        window.scrollTo({
            top: 0
        });
    };
    const handleScrollToComment = ()=>{
        document.getElementById("comment")?.scrollIntoView();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `fixed bottom-8 right-8 hidden flex-col gap-3 ${show ? "md:flex" : "md:hidden"}`,
        children: [
            (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_1___default().comments)?.provider && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                "aria-label": "Scroll To Comment",
                onClick: handleScrollToComment,
                className: "rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                    className: "h-5 w-5",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        fillRule: "evenodd",
                        d: "M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z",
                        clipRule: "evenodd"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                "aria-label": "Scroll To Top",
                onClick: handleScrollTop,
                className: "rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                    className: "h-5 w-5",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        fillRule: "evenodd",
                        d: "M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z",
                        clipRule: "evenodd"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScrollTopAndComment);


/***/ }),

/***/ 88886:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ PostLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./components/Comments.tsx
var Comments = __webpack_require__(56695);
// EXTERNAL MODULE: ./components/Link.tsx
var Link = __webpack_require__(62108);
;// CONCATENATED MODULE: ./components/PageTitle.tsx

function PageTitle({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("h1", {
        className: "text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14",
        children: children
    });
}

;// CONCATENATED MODULE: ./components/SectionContainer.tsx

function SectionContainer({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        children: children
    });
}

// EXTERNAL MODULE: ./data/siteMetadata.js
var data_siteMetadata = __webpack_require__(68248);
var siteMetadata_default = /*#__PURE__*/__webpack_require__.n(data_siteMetadata);
// EXTERNAL MODULE: ./components/ScrollTopAndComment.tsx
var ScrollTopAndComment = __webpack_require__(84944);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(57114);
;// CONCATENATED MODULE: ./layouts/PostLayout.tsx
/* eslint-disable */ /* __next_internal_client_entry_do_not_use__ default auto */ 







const editUrl = (path)=>`${siteMetadata.siteRepo}/blob/main/${path}`;
const discussUrl = (path)=>`https://mobile.twitter.com/search?q=${encodeURIComponent(`${siteMetadata.siteUrl}/${path}`)}`;
const postDateTemplate = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
};
function PostLayout({ content, authorDetails, next, prev, children }) {
    const { filePath, path, slug, date, title, tags } = content;
    const basePath = path.split("/")[0];
    const router = (0,navigation.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SectionContainer, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(ScrollTopAndComment["default"], {}),
            /*#__PURE__*/ jsx_runtime_.jsx("article", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("header", {
                            className: "pt-16 xl:pb-6",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "space-y-1 text-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("dl", {
                                        className: "space-y-10",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("dt", {
                                                    className: "sr-only",
                                                    children: "Published on"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("dd", {
                                                    className: "text-base font-medium leading-6 text-gray-500 dark:text-gray-400",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("time", {
                                                        dateTime: date,
                                                        children: new Date(date).toLocaleDateString((siteMetadata_default()).locale, postDateTemplate)
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(PageTitle, {
                                            children: title
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("dl", {
                                    className: "pb-10 pt-6 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("dt", {
                                            className: "sr-only",
                                            children: "Authors"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("dd", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                className: "flex flex-wrap justify-center gap-4 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8",
                                                children: authorDetails.map((author)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        className: "flex items-center space-x-2",
                                                        children: [
                                                            author.avatar && // <Image
                                                            //   src={author.avatar}
                                                            //   width={38}
                                                            //   height={38}
                                                            //   alt="avatar"
                                                            //   className="h-10 w-10 rounded-full"
                                                            // />
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: author.avatar,
                                                                alt: "avatar",
                                                                className: "h-10 w-10 rounded-full",
                                                                width: 38,
                                                                height: 38
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("dl", {
                                                                className: "whitespace-nowrap text-sm font-medium leading-5",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("dt", {
                                                                        className: "sr-only",
                                                                        children: "Name"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("dd", {
                                                                        className: "text-gray-900 dark:text-gray-100",
                                                                        children: author.name
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("dt", {
                                                                        className: "sr-only",
                                                                        children: "Twitter"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("dd", {
                                                                        children: author.twitter && /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                                                                            href: author.twitter,
                                                                            className: "text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",
                                                                            children: author.twitter.replace("https://twitter.com/", "@")
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }, author.name))
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "prose max-w-none pb-8 pt-10 dark:prose-invert",
                                            children: children
                                        }),
                                        (siteMetadata_default()).comments && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "pb-6 pt-6 text-center text-gray-700 dark:text-gray-300",
                                            id: "comment",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Comments["default"], {
                                                slug: slug
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y",
                                            children: [
                                                tags && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "py-4 xl:py-8",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                            className: "text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400",
                                                            children: "Tags"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "flex flex-wrap",
                                                            children: tags.map((tag)=>// <Tag key={tag} text={tag} />
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer",
                                                                    children: tag
                                                                }, tag))
                                                        })
                                                    ]
                                                }),
                                                (next || prev) && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "flex justify-between py-4 xl:block xl:space-y-8 xl:py-8",
                                                    children: [
                                                        prev && prev.path && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                                    className: "text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400",
                                                                    children: "Previous Article"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                                                                        href: `/${prev.path}`,
                                                                        children: prev.title
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        next && next.path && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                                    className: "text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400",
                                                                    children: "Next Article"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                                                                        href: `/${next.path}`,
                                                                        children: next.title
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "pt-4 xl:pt-8",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer",
                                                onClick: ()=>router.back(),
                                                children: "← Back"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 83285:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/home/loc/dyzio-blog/components/Comments.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 90142:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14178);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);


const Image = ({ ...rest })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        ...rest
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Image);


/***/ }),

/***/ 82345:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ components)
/* harmony export */ });
/* harmony import */ var pliny_ui_TOCInline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76416);
/* harmony import */ var pliny_ui_Pre__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61930);
/* harmony import */ var pliny_ui_BlogNewsletterForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82226);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90142);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5725);





const components = {
    Image: _Image__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
    TOCInline: pliny_ui_TOCInline__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z,
    a: _Link__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
    pre: pliny_ui_Pre__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP,
    BlogNewsletterForm: pliny_ui_BlogNewsletterForm__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP
};


/***/ }),

/***/ 96211:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ PageTitle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function PageTitle({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
        className: "text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14",
        children: children
    });
}


/***/ }),

/***/ 84676:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/home/loc/dyzio-blog/components/ScrollTopAndComment.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 17796:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ PostMinimal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90142);
/* harmony import */ var pliny_ui_Bleed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27815);
/* harmony import */ var _components_Comments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83285);
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5725);
/* harmony import */ var _components_PageTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(96211);
/* harmony import */ var _components_SectionContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(98841);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(95976);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_ScrollTopAndComment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(84676);









function PostMinimal({ content, next, prev, children }) {
    const { slug, title, images } = content;
    const displayImage = images && images.length > 0 ? images[0] : "https://picsum.photos/seed/picsum/800/400";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_SectionContainer__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ScrollTopAndComment__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("article", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "space-y-1 pb-10 text-center dark:border-gray-700",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-full",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(pliny_ui_Bleed__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "aspect-[2/1] w-full relative",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Image__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                src: displayImage,
                                                alt: title,
                                                fill: true,
                                                className: "object-cover"
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "pt-10 relative",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PageTitle__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                        children: title
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "prose max-w-none py-4 dark:prose-invert",
                            children: children
                        }),
                        (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_7___default().comments) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "pb-6 pt-6 text-center text-gray-700 dark:text-gray-300",
                            id: "comment",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Comments__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, {
                                slug: slug
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base",
                                children: [
                                    prev && prev.path && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "pt-4 xl:pt-8",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Link__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                            href: `/${prev.path}`,
                                            className: "text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",
                                            "aria-label": `Previous post: ${prev.title}`,
                                            children: [
                                                "← ",
                                                prev.title
                                            ]
                                        })
                                    }),
                                    next && next.path && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "pt-4 xl:pt-8",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Link__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                            href: `/${next.path}`,
                                            className: "text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",
                                            "aria-label": `Next post: ${next.title}`,
                                            children: [
                                                next.title,
                                                " →"
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 50527:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/home/loc/dyzio-blog/layouts/PostLayout.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 99568:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ PostLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pliny_utils_formatDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26719);
/* harmony import */ var _components_Comments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83285);
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5725);
/* harmony import */ var _components_PageTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96211);
/* harmony import */ var _components_SectionContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(98841);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(95976);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_ScrollTopAndComment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(84676);








function PostLayout({ content, next, prev, children }) {
    const { path, slug, date, title } = content;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_SectionContainer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ScrollTopAndComment__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("article", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "space-y-1 border-b border-gray-200 pb-10 text-center dark:border-gray-700",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dl", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                                                    className: "sr-only",
                                                    children: "Published on"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                                                    className: "text-base font-medium leading-6 text-gray-500 dark:text-gray-400",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("time", {
                                                        dateTime: date,
                                                        children: (0,pliny_utils_formatDate__WEBPACK_IMPORTED_MODULE_1__/* .formatDate */ .p)(date, (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_6___default().locale))
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PageTitle__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                            children: title
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "prose max-w-none pb-8 pt-10 dark:prose-invert",
                                        children: children
                                    })
                                }),
                                (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_6___default().comments) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "pb-6 pt-6 text-center text-gray-700 dark:text-gray-300",
                                    id: "comment",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Comments__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP, {
                                        slug: slug
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base",
                                        children: [
                                            prev && prev.path && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "pt-4 xl:pt-8",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                    href: `/${prev.path}`,
                                                    className: "text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",
                                                    "aria-label": `Previous post: ${prev.title}`,
                                                    children: [
                                                        "← ",
                                                        prev.title
                                                    ]
                                                })
                                            }),
                                            next && next.path && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "pt-4 xl:pt-8",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                    href: `/${next.path}`,
                                                    className: "text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",
                                                    "aria-label": `Next post: ${next.title}`,
                                                    children: [
                                                        next.title,
                                                        " →"
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 97503:
/***/ (() => {



/***/ })

};
;