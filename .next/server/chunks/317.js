"use strict";
exports.id = 317;
exports.ids = [317];
exports.modules = {

/***/ 16149:
/***/ (() => {


// UNUSED EXPORTS: guards, isType, pick

;// CONCATENATED MODULE: ./node_modules/@contentlayer/client/dist/guards.js
function is(typeName, _) {
    if (_) {
        if (Array.isArray(typeName)) {
            // TODO make type field name dynamic (probably will require to code-gen the guard function)
            return typeName.some((typeName_)=>_?.type === typeName_);
        } else {
            return typeName === _?.type;
        }
    } else {
        return (_)=>is(typeName, _);
    }
}
const isType = (/* unused pure expression or super */ null && (is));
const guards = {
    is,
    // isType,
    // hasAllFields,
    // allFields,
    hasField
};
function hasField(_, property) {
    return _.hasOwnProperty(property);
} //# sourceMappingURL=guards.js.map

;// CONCATENATED MODULE: ./node_modules/@contentlayer/client/dist/index.js

 //# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ./node_modules/contentlayer/dist/client/index.js
 //# sourceMappingURL=index.js.map


/***/ }),

/***/ 47596:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ND: () => (/* binding */ allCoreContent),
/* harmony export */   O2: () => (/* binding */ sortPosts),
/* harmony export */   gT: () => (/* binding */ coreContent)
/* harmony export */ });
/* unused harmony exports dateSortDesc, omit, pick, sortedBlogPost */
/* harmony import */ var _chunk_4VSLFMH7_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79910);

// src/utils/contentlayer.ts
var isProduction = "production" === "production";
function dateSortDesc(a, b) {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
}
function sortPosts(allBlogs, dateKey = "date") {
    return allBlogs.sort((a, b)=>dateSortDesc(a[dateKey], b[dateKey]));
}
function sortedBlogPost(allBlogs) {
    return sortPosts(allBlogs);
}
var pick = (obj, keys)=>{
    return keys.reduce((acc, key)=>{
        var _a;
        acc[key] = (_a = obj[key]) != null ? _a : null;
        return acc;
    }, {});
};
var omit = (obj, keys)=>{
    const result = Object.assign({}, obj);
    keys.forEach((key)=>{
        delete result[key];
    });
    return result;
};
function coreContent(content) {
    return omit(content, [
        "body",
        "_raw",
        "_id"
    ]);
}
function allCoreContent(contents) {
    if (isProduction) return contents.map((c)=>coreContent(c)).filter((c)=>!("draft" in c && c.draft === true));
    return contents.map((c)=>coreContent(c));
}



/***/ })

};
;