"use strict";
exports.id = 327;
exports.ids = [327];
exports.modules = {

/***/ 95976:
/***/ ((module) => {

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


/***/ })

};
;