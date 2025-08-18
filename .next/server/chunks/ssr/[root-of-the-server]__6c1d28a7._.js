module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/data/pagesConfig.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * Configuration file for enabling/disabling website pages and their sections
 * Set any page to false to hide it from navigation and disable routing
 * Set any section to false to hide it from the page
 */ __turbopack_context__.s({
    "getEnabledPages": ()=>getEnabledPages,
    "getEnabledSections": ()=>getEnabledSections,
    "getNavigationItems": ()=>getNavigationItems,
    "getPageConfig": ()=>getPageConfig,
    "getSectionConfig": ()=>getSectionConfig,
    "isPageEnabled": ()=>isPageEnabled,
    "isSectionEnabled": ()=>isSectionEnabled,
    "pagesConfig": ()=>pagesConfig
});
const pagesConfig = [
    {
        key: "home",
        title: "Home",
        path: "/",
        enabled: true,
        description: "Homepage with hero section and overview",
        sections: [
            {
                key: "hero",
                title: "Hero Section",
                enabled: true,
                description: "Main banner with club name and tagline"
            },
            {
                key: "features",
                title: "What We Offer",
                enabled: true,
                description: "Features/offerings section"
            },
            {
                key: "upcoming-events",
                title: "Upcoming Events Preview",
                enabled: false,
                description: "Preview of upcoming events"
            }
        ]
    },
    {
        key: "about",
        title: "About",
        path: "/about",
        enabled: true,
        description: "About us, mission, and leadership team",
        sections: [
            {
                key: "hero",
                title: "Hero Section",
                enabled: true,
                description: "About page header"
            },
            {
                key: "mission",
                title: "Our Mission",
                enabled: false,
                description: "Mission statement and values"
            },
            {
                key: "leadership",
                title: "Leadership Team",
                enabled: true,
                description: "Team member profiles"
            },
            {
                key: "join-cta",
                title: "Join Us CTA",
                enabled: false,
                description: "Call-to-action to join the club"
            }
        ]
    },
    {
        key: "events",
        title: "Events",
        path: "/events",
        enabled: false,
        description: "Upcoming and past events, workshops, hackathons",
        sections: [
            {
                key: "hero",
                title: "Hero Section",
                enabled: true,
                description: "Events page header"
            },
            {
                key: "upcoming-events",
                title: "Upcoming Events",
                enabled: true,
                description: "List of upcoming events"
            },
            {
                key: "event-calendar",
                title: "Event Calendar",
                enabled: true,
                description: "Interactive calendar (coming soon)"
            },
            {
                key: "past-events",
                title: "Past Events",
                enabled: true,
                description: "Archive of past events"
            },
            {
                key: "newsletter-cta",
                title: "Newsletter Signup",
                enabled: true,
                description: "Email subscription CTA"
            }
        ]
    },
    {
        key: "projects",
        title: "Projects",
        path: "/projects",
        enabled: false,
        description: "Member projects and collaborative work",
        sections: [
            {
                key: "hero",
                title: "Hero Section",
                enabled: true,
                description: "Projects page header"
            },
            {
                key: "featured-projects",
                title: "Featured Projects",
                enabled: true,
                description: "Highlighted member projects"
            },
            {
                key: "all-projects",
                title: "All Projects",
                enabled: true,
                description: "Complete project portfolio with filters"
            },
            {
                key: "project-cta",
                title: "Start Your Project CTA",
                enabled: true,
                description: "Encourage new project proposals"
            }
        ]
    },
    {
        key: "resources",
        title: "Resources",
        path: "/resources",
        enabled: false,
        description: "Learning resources, tutorials, and tools",
        sections: [
            {
                key: "hero",
                title: "Hero Section",
                enabled: true,
                description: "Resources page header"
            },
            {
                key: "search-filters",
                title: "Search & Filters",
                enabled: true,
                description: "Resource search and filtering tools"
            },
            {
                key: "resources-grid",
                title: "Resources Grid",
                enabled: true,
                description: "Main resources display"
            },
            {
                key: "contribute-cta",
                title: "Contribute Resources CTA",
                enabled: true,
                description: "Encourage resource contributions"
            }
        ]
    },
    {
        key: "contact",
        title: "Contact",
        path: "/contact",
        enabled: true,
        description: "Contact information and contact form",
        sections: [
            {
                key: "hero",
                title: "Hero Section",
                enabled: true,
                description: "Contact page header"
            },
            {
                key: "contact-info",
                title: "Contact Information",
                enabled: true,
                description: "Meeting times, location, email"
            },
            {
                key: "contact-form",
                title: "Contact Form",
                enabled: true,
                description: "Message submission form"
            },
            {
                key: "leadership-contact",
                title: "Leadership Contact",
                enabled: false,
                description: "Direct contact info for team members"
            },
            {
                key: "faq",
                title: "FAQ Section",
                enabled: true,
                description: "Frequently asked questions"
            }
        ]
    }
];
const getEnabledPages = ()=>{
    return pagesConfig.filter((page)=>page.enabled);
};
const isPageEnabled = (pageKey)=>{
    const page = pagesConfig.find((p)=>p.key === pageKey);
    return page ? page.enabled : false;
};
const getNavigationItems = ()=>{
    return getEnabledPages().filter((page)=>page.key !== "home");
};
const getPageConfig = (pageKey)=>{
    return pagesConfig.find((p)=>p.key === pageKey);
};
const isSectionEnabled = (pageKey, sectionKey)=>{
    const page = getPageConfig(pageKey);
    if (!page || !page.enabled || !page.sections) {
        return false;
    }
    const section = page.sections.find((s)=>s.key === sectionKey);
    return section ? section.enabled : false;
};
const getEnabledSections = (pageKey)=>{
    const page = getPageConfig(pageKey);
    if (!page || !page.enabled || !page.sections) {
        return [];
    }
    return page.sections.filter((section)=>section.enabled);
};
const getSectionConfig = (pageKey, sectionKey)=>{
    const page = getPageConfig(pageKey);
    if (!page || !page.sections) {
        return undefined;
    }
    return page.sections.find((s)=>s.key === sectionKey);
};
}),
"[project]/src/app/components/Navigation.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>Navigation
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$pagesConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/pagesConfig.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function Navigation({ currentPage = '' }) {
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Get navigation items from pages configuration
    const navItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$pagesConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEnabledPages"])().map((page)=>({
            name: page.title,
            href: page.path,
            key: page.key
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "bg-maroon text-white shadow-lg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between h-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-shrink-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-2xl font-bold",
                                            children: "VC++"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Navigation.tsx",
                                            lineNumber: 28,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Navigation.tsx",
                                        lineNumber: 27,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Navigation.tsx",
                                    lineNumber: 26,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden md:block",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ml-10 flex items-baseline space-x-4",
                                        children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: item.href,
                                                className: `px-3 py-2 rounded-md font-medium transition-colors ${currentPage === item.key ? 'bg-white/10' : 'hover:bg-white/10'}`,
                                                children: item.name
                                            }, item.key, false, {
                                                fileName: "[project]/src/app/components/Navigation.tsx",
                                                lineNumber: 34,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Navigation.tsx",
                                        lineNumber: 32,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Navigation.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/Navigation.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:hidden flex items-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsMenuOpen(!isMenuOpen),
                                className: "text-white hover:text-gray-300",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "h-6 w-6",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M4 6h16M4 12h16M4 18h16"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Navigation.tsx",
                                        lineNumber: 56,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Navigation.tsx",
                                    lineNumber: 55,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Navigation.tsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Navigation.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/Navigation.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this),
                isMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-maroon/95",
                        children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                className: `block px-3 py-2 rounded-md font-medium transition-colors ${currentPage === item.key ? 'bg-white/10' : 'hover:bg-white/10'}`,
                                onClick: ()=>setIsMenuOpen(false),
                                children: item.name
                            }, item.key, false, {
                                fileName: "[project]/src/app/components/Navigation.tsx",
                                lineNumber: 67,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Navigation.tsx",
                        lineNumber: 65,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Navigation.tsx",
                    lineNumber: 64,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/Navigation.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/Navigation.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/components/SectionGuard.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>SectionGuard
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$pagesConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/pagesConfig.ts [app-ssr] (ecmascript)");
'use client';
;
;
function SectionGuard({ pageKey, sectionKey, children }) {
    // Don't render the section if it's disabled
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$pagesConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSectionEnabled"])(pageKey, sectionKey)) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__6c1d28a7._.js.map