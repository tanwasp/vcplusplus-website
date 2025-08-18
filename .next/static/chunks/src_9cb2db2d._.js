(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/data/pagesConfig.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/Navigation.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>Navigation
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$pagesConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/pagesConfig.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function Navigation(param) {
    let { currentPage = '' } = param;
    _s();
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Get navigation items from pages configuration
    const navItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$pagesConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEnabledPages"])().map((page)=>({
            name: page.title,
            href: page.path,
            key: page.key
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "bg-maroon text-white shadow-lg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between h-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-shrink-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        className: "flex items-center space-x-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/vcplusplug_logo.png",
                                                alt: "VC++ Logo",
                                                width: 32,
                                                height: 32,
                                                className: "h-8 w-8"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Navigation.tsx",
                                                lineNumber: 29,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-2xl font-bold",
                                                children: "VC++"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Navigation.tsx",
                                                lineNumber: 36,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/Navigation.tsx",
                                        lineNumber: 28,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Navigation.tsx",
                                    lineNumber: 27,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden md:block",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ml-10 flex items-baseline space-x-4",
                                        children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: item.href,
                                                className: "px-3 py-2 rounded-md font-medium transition-colors ".concat(currentPage === item.key ? 'bg-white/10' : 'hover:bg-white/10'),
                                                children: item.name
                                            }, item.key, false, {
                                                fileName: "[project]/src/app/components/Navigation.tsx",
                                                lineNumber: 42,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Navigation.tsx",
                                        lineNumber: 40,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Navigation.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/Navigation.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:hidden flex items-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsMenuOpen(!isMenuOpen),
                                className: "text-white hover:text-gray-300",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "h-6 w-6",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M4 6h16M4 12h16M4 18h16"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Navigation.tsx",
                                        lineNumber: 64,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Navigation.tsx",
                                    lineNumber: 63,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Navigation.tsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Navigation.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/Navigation.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this),
                isMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-maroon/95",
                        children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                className: "block px-3 py-2 rounded-md font-medium transition-colors ".concat(currentPage === item.key ? 'bg-white/10' : 'hover:bg-white/10'),
                                onClick: ()=>setIsMenuOpen(false),
                                children: item.name
                            }, item.key, false, {
                                fileName: "[project]/src/app/components/Navigation.tsx",
                                lineNumber: 75,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Navigation.tsx",
                        lineNumber: 73,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Navigation.tsx",
                    lineNumber: 72,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/Navigation.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/Navigation.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_s(Navigation, "vK10R+uCyHfZ4DZVnxbYkMWJB8g=");
_c = Navigation;
var _c;
__turbopack_context__.k.register(_c, "Navigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/SectionGuard.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>SectionGuard
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$pagesConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/pagesConfig.ts [app-client] (ecmascript)");
'use client';
;
;
function SectionGuard(param) {
    let { pageKey, sectionKey, children } = param;
    // Don't render the section if it's disabled
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$pagesConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSectionEnabled"])(pageKey, sectionKey)) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
_c = SectionGuard;
var _c;
__turbopack_context__.k.register(_c, "SectionGuard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/PageOverflow.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>PageOverflow
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function PageOverflow(param) {
    let { topColor = '#8A0933', bottomColor = '#333333' // default dark gray
     } = param;
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PageOverflow.useEffect": ()=>{
            // Create or update style element for overflow colors
            let styleElement = document.getElementById('page-overflow-styles');
            if (!styleElement) {
                styleElement = document.createElement('style');
                styleElement.id = 'page-overflow-styles';
                document.head.appendChild(styleElement);
            }
            styleElement.textContent = "\n      body::before {\n        content: '';\n        position: fixed;\n        top: -100vh;\n        left: 0;\n        right: 0;\n        height: 100vh;\n        background: ".concat(topColor, " !important;\n        z-index: -1;\n        pointer-events: none;\n      }\n      \n      body::after {\n        content: '';\n        position: fixed;\n        bottom: -100vh;\n        left: 0;\n        right: 0;\n        height: 100vh;\n        background: ").concat(bottomColor, " !important;\n        z-index: -1;\n        pointer-events: none;\n      }\n    ");
        }
    }["PageOverflow.useEffect"], [
        topColor,
        bottomColor
    ]);
    return null;
}
_s(PageOverflow, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = PageOverflow;
var _c;
__turbopack_context__.k.register(_c, "PageOverflow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_9cb2db2d._.js.map