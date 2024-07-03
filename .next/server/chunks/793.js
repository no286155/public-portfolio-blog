exports.id = 793;
exports.ids = [793];
exports.modules = {

/***/ 87930:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 33896));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 16173, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 61145))

/***/ }),

/***/ 50645:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 31232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 52987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 56926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 44282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 16505, 23))

/***/ }),

/***/ 44989:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50954, 23))

/***/ }),

/***/ 33896:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemeProviders: () => (/* binding */ ThemeProviders)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71072);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68248);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ ThemeProviders auto */ 


function ThemeProviders({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_themes__WEBPACK_IMPORTED_MODULE_1__/* .ThemeProvider */ .f, {
        attribute: "class",
        defaultTheme: (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_2___default().theme),
        enableSystem: true,
        children: children
    });
}


/***/ }),

/***/ 61145:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ DivAvoidServerComponentProps)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/pliny/search/index.js + 2 modules
var search = __webpack_require__(88145);
// EXTERNAL MODULE: ./data/siteMetadata.js
var siteMetadata = __webpack_require__(68248);
var siteMetadata_default = /*#__PURE__*/__webpack_require__.n(siteMetadata);
;// CONCATENATED MODULE: ./data/headerNavLinks.ts
const headerNavLinks = [
    {
        href: "/",
        title: "Home"
    },
    {
        href: "/portfolio",
        title: "Portfolio"
    },
    {
        href: "/blog",
        title: "Blog"
    },
    // { href: '/tags', title: 'Tags' },
    {
        href: "/project",
        title: "Projects"
    }
];
/* harmony default export */ const data_headerNavLinks = (headerNavLinks);

// EXTERNAL MODULE: ./components/Link.tsx
var Link = __webpack_require__(62108);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/next-themes/dist/index.js
var dist = __webpack_require__(71072);
;// CONCATENATED MODULE: ./components/ThemeSwitch.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


const ThemeSwitch = ()=>{
    const [mounted, setMounted] = (0,react_.useState)(false);
    const { theme, setTheme } = (0,dist/* useTheme */.F)();
    // When mounted on client, now we can show the UI
    (0,react_.useEffect)(()=>setMounted(true), []);
    if (!mounted) {
        return null;
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        "aria-label": "Toggle Dark Mode",
        onClick: ()=>setTheme(theme === "dark" ? "light" : "dark"),
        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            className: "text-gray-900 dark:text-gray-100 h-6 w-6",
            children: mounted && theme === "dark" ? /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                d: "M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",
                clipRule: "evenodd"
            }) : /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
            })
        })
    });
};
/* harmony default export */ const components_ThemeSwitch = (ThemeSwitch);

// EXTERNAL MODULE: ./node_modules/pliny/search/AlgoliaButton.js
var AlgoliaButton = __webpack_require__(38562);
// EXTERNAL MODULE: ./node_modules/pliny/search/KBarButton.js
var KBarButton = __webpack_require__(36522);
;// CONCATENATED MODULE: ./components/SearchButton.tsx




const SearchButton = ()=>{
    if ((siteMetadata_default()).search && ((siteMetadata_default()).search.provider === "algolia" || (siteMetadata_default()).search.provider === "kbar")) {
        const SearchButtonWrapper = (siteMetadata_default()).search.provider === "algolia" ? AlgoliaButton/* AlgoliaButton */.s : KBarButton/* KBarButton */.N;
        return /*#__PURE__*/ jsx_runtime_.jsx(SearchButtonWrapper, {
            "aria-label": "Search",
            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                className: "text-gray-900 dark:text-gray-100 h-6 w-6",
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                })
            })
        });
    }
};
/* harmony default export */ const components_SearchButton = (SearchButton);

;// CONCATENATED MODULE: ./components/Header.tsx



// import Logo from '@/data/logo.svg';

// import MobileNav from './MobileNav';


const Header = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: "flex items-center justify-between py-10 custom-header",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                    href: "/",
                    "aria-label": (siteMetadata_default()).headerTitle,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "mr-3",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                    width: "90",
                                    height: "20",
                                    viewBox: "0 0 160 69.55665699462354",
                                    className: "looka-1j8o68f",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                                            id: "SvgjsDefs1242"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                                            id: "SvgjsG1243",
                                            transform: "matrix(0.5628253254220374,0,0,0.5628253254220374,-5.327141790999914,9.766146226504215)",
                                            fill: "#1a2c5b",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("polygon", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    points: "38.182,57.753 20.18,47.91 20.18,42.455 38.182,32.652 38.182,39.074 25.625,45.113 38.182,51.379 "
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("polygon", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    points: "39.848,62.08 46.351,27.918 50.136,27.918 43.56,62.08 "
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("polygon", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    points: "51.8,57.78 51.8,51.4 64.372,45.181 51.8,39.028 51.8,32.696 69.82,42.5 69.82,47.91 "
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    d: "M44.999,86.031L9.465,65.517V24.484L44.999,3.969l35.536,20.516v41.029L44.999,86.031L44.999,86.031z M13.07,63.434  l31.929,18.434L76.93,63.434V26.566L44.999,8.131L13.07,26.565V63.434L13.07,63.434z"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("g", {
                                            id: "SvgjsG1244",
                                            transform: "matrix(2.4630542797616397,0,0,2.4630542797616397,55.66502390387113,-28.965516544793662)",
                                            fill: "#1a2c5b",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M21.6 40 l-19.84 0 l0 -28.24 l8.92 0 l0 21.12 l10.92 0 l0 7.12 z M42.36 18.72 l-7.16 0 l0 21.28 l-8.92 0 l0 -21.28 l-7.2 0 l0 -6.96 l23.28 0 l0 6.96 z"
                                            })
                                        })
                                    ]
                                })
                            }),
                            typeof (siteMetadata_default()).headerTitle === "string" ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "hidden h-6 text-2xl font-semibold sm:block",
                                children: (siteMetadata_default()).headerTitle
                            }) : (siteMetadata_default()).headerTitle
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center leading-5 space-x-4 sm:space-x-6",
                children: [
                    data_headerNavLinks.filter((link)=>link.href !== "/").map((link)=>/*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                            href: link.href,
                            className: "hidden sm:block font-medium text-gray-900 dark:text-gray-100",
                            children: link.title
                        }, link.title)),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_SearchButton, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_ThemeSwitch, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Header = (Header);

// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(57114);
;// CONCATENATED MODULE: ./components/social-icons/icons.tsx

// Icons taken from: https://simpleicons.org/
// To add a new icon, add a new function here and add it to components in social-icons/index.tsx
function Facebook(svgProps) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        ...svgProps,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
        })
    });
}
function Github(svgProps) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        ...svgProps,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
        })
    });
}
function Linkedin(svgProps) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        ...svgProps,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
        })
    });
}
function Mail(svgProps) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        ...svgProps,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
            })
        ]
    });
}
function Twitter(svgProps) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        ...svgProps,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
        })
    });
}
function Youtube(svgProps) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        ...svgProps,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M23.499 6.203a3.008 3.008 0 00-2.089-2.089c-1.87-.501-9.4-.501-9.4-.501s-7.509-.01-9.399.501a3.008 3.008 0 00-2.088 2.09A31.258 31.26 0 000 12.01a31.258 31.26 0 00.523 5.785 3.008 3.008 0 002.088 2.089c1.869.502 9.4.502 9.4.502s7.508 0 9.399-.502a3.008 3.008 0 002.089-2.09 31.258 31.26 0 00.5-5.784 31.258 31.26 0 00-.5-5.808zm-13.891 9.4V8.407l6.266 3.604z"
        })
    });
}
function Mastodon(svgProps) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        ...svgProps,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z"
        })
    });
}

;// CONCATENATED MODULE: ./components/social-icons/index.tsx


const components = {
    mail: Mail,
    github: Github,
    facebook: Facebook,
    youtube: Youtube,
    linkedin: Linkedin,
    twitter: Twitter,
    mastodon: Mastodon
};
const SocialIcon = ({ kind, href, size = 8 })=>{
    if (!href || kind === "mail" && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)) return null;
    const SocialSvg = components[kind];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
        className: "text-sm text-gray-500 transition hover:text-gray-600",
        target: "_blank",
        rel: "noopener noreferrer",
        href: href,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "sr-only",
                children: kind
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SocialSvg, {
                className: `fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-${size} w-${size}`
            })
        ]
    });
};
/* harmony default export */ const social_icons = (SocialIcon);

;// CONCATENATED MODULE: ./components/Footer.tsx




function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "mt-16 flex flex-col items-center",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mb-3 flex space-x-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(social_icons, {
                            kind: "mail",
                            href: `mailto:${(siteMetadata_default()).email}`,
                            size: 6
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(social_icons, {
                            kind: "github",
                            href: (siteMetadata_default()).github,
                            size: 6
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(social_icons, {
                            kind: "linkedin",
                            href: (siteMetadata_default()).linkedin,
                            size: 6
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: (siteMetadata_default()).author
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: ` • `
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: `© ${new Date().getFullYear()}`
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: ` • `
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                            href: "/",
                            children: (siteMetadata_default()).title
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/DivAvoidServerComponent.tsx
/* eslint-disable */ /* __next_internal_client_entry_do_not_use__ default auto */ 




function DivAvoidServerComponentProps({ children, searchConfig }) {
    const pathname = (0,navigation.usePathname)();
    const isPortfolio = pathname == "/portfolio";
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: !isPortfolio ? "mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0" : "px-4 xl:px-0",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex h-screen flex-col justify-between font-sans",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(search/* SearchProvider */.X, {
                    searchConfig: searchConfig,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(components_Header, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("main", {
                            className: "mb-auto mt-14",
                            children: children
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
            ]
        })
    });
}


/***/ }),

/***/ 62108:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* eslint-disable jsx-a11y/anchor-has-content */ 

const CustomLink = ({ href, ...rest })=>{
    const isInternalLink = href && href.startsWith("/");
    const isAnchorLink = href && href.startsWith("#");
    if (isInternalLink) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: href,
            ...rest
        });
    }
    if (isAnchorLink) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            href: href,
            ...rest
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: href,
        ...rest
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomLink);


/***/ }),

/***/ 68248:
/***/ ((module) => {

"use strict";
/** @type {import("pliny/config").PlinyConfig } */ 
const siteMetadata = {
    title: "Portfolio & Blog",
    author: "Loc Truong",
    headerTitle: "Loc Truong",
    description: "Hello, this is my personal blog. I write about coding and studying.",
    language: "en-us",
    theme: "system",
    siteUrl: "https://tailwind-nextjs-starter-blog.vercel.app",
    siteRepo: "https://github.com/locionic/projects",
    siteLogo: "/static/images/logo.png",
    socialBanner: "/static/images/twitter-card.png",
    mastodon: "https://mastodon.social/@mastodonuser",
    email: "hongloc2206@gmail.com",
    github: "https://github.com/locionic",
    twitter: "https://twitter.com/patryk_nizio",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
    linkedin: "https://www.linkedin.com/in/loc-truong-6813a6169/",
    locale: "en-EN",
    analytics: {
        // If you want to use an analytics provider you have to add it to the
        // content security policy in the `next.config.js` file.
        // supports Plausible, Simple Analytics, Umami, Posthog or Google Analytics.
        umamiAnalytics: {
            // We use an env variable for this site to avoid other users cloning our analytics ID
            umamiWebsiteId: process.env.NEXT_UMAMI_ID
        }
    },
    newsletter: {
        // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus
        // Please add your .env file and modify it according to your selection
        provider: "buttondown"
    },
    comments: {
        // If you want to use an analytics provider you have to add it to the
        // content security policy in the `next.config.js` file.
        // Select a provider and use the environment variables associated to it
        // https://vercel.com/docs/environment-variables
        provider: "giscus",
        giscusConfig: {
            // Visit the link below, and follow the steps in the 'configuration' section
            // https://giscus.app/
            repo: "locionic/projects",
            repositoryId: "R_kgDOLq9F2w",
            category: "General",
            categoryId: "DIC_kwDOLq9F284Ceie2",
            mapping: "pathname",
            reactions: "1",
            // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
            metadata: "0",
            // theme example: light, dark, dark_dimmed, dark_high_contrast
            // transparent_dark, preferred_color_scheme, custom
            theme: "light",
            // theme when dark mode
            darkTheme: "transparent_dark",
            // If the theme option above is set to 'custom`
            // please provide a link below to your custom theme css file.
            // example: https://giscus.app/themes/custom_example.css
            themeURL: "",
            // This corresponds to the `data-lang="en"` in giscus's configurations
            lang: "en"
        }
    },
    search: {
        provider: "kbar",
        kbarConfig: {
            searchDocumentsPath: "search.json"
        }
    }
};
module.exports = siteMetadata;


/***/ }),

/***/ 61307:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"app/layout.tsx","import":"Space_Grotesk","arguments":[{"subsets":["latin"],"display":"swap","variable":"--font-space-grotesk"}],"variableName":"space_grotesk"}
var layout_tsx_import_Space_Grotesk_arguments_subsets_latin_display_swap_variable_font_space_grotesk_variableName_space_grotesk_ = __webpack_require__(80057);
var layout_tsx_import_Space_Grotesk_arguments_subsets_latin_display_swap_variable_font_space_grotesk_variableName_space_grotesk_default = /*#__PURE__*/__webpack_require__.n(layout_tsx_import_Space_Grotesk_arguments_subsets_latin_display_swap_variable_font_space_grotesk_variableName_space_grotesk_);
// EXTERNAL MODULE: ./css/tailwind.css
var tailwind = __webpack_require__(84204);
// EXTERNAL MODULE: ./node_modules/pliny/search/algolia.css
var algolia = __webpack_require__(99536);
// EXTERNAL MODULE: ./node_modules/pliny/analytics/index.js + 5 modules
var analytics = __webpack_require__(26265);
// EXTERNAL MODULE: ./components/SectionContainer.tsx
var SectionContainer = __webpack_require__(98841);
// EXTERNAL MODULE: ./data/siteMetadata.js
var siteMetadata = __webpack_require__(95976);
var siteMetadata_default = /*#__PURE__*/__webpack_require__.n(siteMetadata);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./app/theme-providers.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/home/loc/dyzio-blog/app/theme-providers.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["ThemeProviders"];

;// CONCATENATED MODULE: ./components/DivAvoidServerComponent.tsx

const DivAvoidServerComponent_proxy = (0,module_proxy.createProxy)(String.raw`/home/loc/dyzio-blog/components/DivAvoidServerComponent.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: DivAvoidServerComponent_esModule, $$typeof: DivAvoidServerComponent_$$typeof } = DivAvoidServerComponent_proxy;
const DivAvoidServerComponent_default_ = DivAvoidServerComponent_proxy.default;


/* harmony default export */ const DivAvoidServerComponent = (DivAvoidServerComponent_default_);
;// CONCATENATED MODULE: ./app/layout.tsx









const metadata = {
    metadataBase: new URL((siteMetadata_default()).siteUrl),
    title: {
        default: (siteMetadata_default()).title,
        template: `%s | ${(siteMetadata_default()).title}`
    },
    description: (siteMetadata_default()).description,
    openGraph: {
        title: (siteMetadata_default()).title,
        description: (siteMetadata_default()).description,
        url: "./",
        siteName: (siteMetadata_default()).title,
        images: [
            (siteMetadata_default()).socialBanner
        ],
        locale: "en_US",
        type: "website"
    },
    alternates: {
        canonical: "./",
        types: {
            "application/rss+xml": `${(siteMetadata_default()).siteUrl}/feed.xml`
        }
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1
        }
    },
    twitter: {
        title: (siteMetadata_default()).title,
        card: "summary_large_image",
        images: [
            (siteMetadata_default()).socialBanner
        ]
    }
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("html", {
        lang: (siteMetadata_default()).language,
        className: `${(layout_tsx_import_Space_Grotesk_arguments_subsets_latin_display_swap_variable_font_space_grotesk_variableName_space_grotesk_default()).variable} scroll-smooth`,
        suppressHydrationWarning: true,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "apple-touch-icon",
                sizes: "76x76",
                href: "/static/favicons/apple-touch-icon.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: "/static/favicons/favicon-32x32.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: "/static/favicons/favicon-16x16.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "manifest",
                href: "/static/favicons/site.webmanifest"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "mask-icon",
                href: "/static/favicons/safari-pinned-tab.svg",
                color: "#5bbad5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "msapplication-TileColor",
                content: "#000000"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "theme-color",
                media: "(prefers-color-scheme: light)",
                content: "#fff"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "theme-color",
                media: "(prefers-color-scheme: dark)",
                content: "#000"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "alternate",
                type: "application/rss+xml",
                href: "/feed.xml"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("body", {
                className: "bg-white text-black antialiased dark:bg-gray-950 dark:text-white",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(e0, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(analytics/* Analytics */.cp, {
                            analyticsConfig: (siteMetadata_default()).analytics
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(SectionContainer/* default */.Z, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(DivAvoidServerComponent, {
                                searchConfig: (siteMetadata_default()).search,
                                children: children
                            })
                        })
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 96061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NotFound)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5725);


function NotFound() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "space-x-2 pb-8 pt-6 md:space-y-5",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:border-r-2 md:px-6 md:text-8xl md:leading-14",
                    children: "404"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "max-w-md",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "mb-4 text-xl font-bold leading-normal md:text-2xl",
                        children: "Sorry we couldn't find this page."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "mb-8",
                        children: "But dont worry, you can find plenty of other things on our homepage."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        href: "/",
                        className: "focus:shadow-outline-blue inline rounded-lg border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium leading-5 text-white shadow transition-colors duration-150 hover:bg-blue-700 focus:outline-none dark:hover:bg-blue-500",
                        children: "Back to homepage"
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 5725:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25124);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* eslint-disable jsx-a11y/anchor-has-content */ 

const CustomLink = ({ href, ...rest })=>{
    const isInternalLink = href && href.startsWith("/");
    const isAnchorLink = href && href.startsWith("#");
    if (isInternalLink) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: href,
            ...rest
        });
    }
    if (isAnchorLink) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            href: href,
            ...rest
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: href,
        ...rest
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomLink);


/***/ }),

/***/ 98841:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ SectionContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function SectionContainer({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        children: children
    });
}


/***/ }),

/***/ 84204:
/***/ (() => {



/***/ })

};
;