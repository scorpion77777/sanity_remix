import {
  Moon,
  Sun
} from "/build/_shared/chunk-NFNY43FL.js";
import {
  PreviewWrapper
} from "/build/_shared/chunk-IKQGDK4R.js";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useFetcher,
  useLoaderData,
  useLocation,
  useRouteLoaderData
} from "/build/_shared/chunk-SJDDFQ2Q.js";
import "/build/_shared/chunk-KCXGHVR5.js";
import "/build/_shared/chunk-6TKMBU2E.js";
import "/build/_shared/chunk-EZIV2XCM.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-V4O2SHX5.js";
import "/build/_shared/chunk-5HQW4SWS.js";
import {
  __toESM,
  init_buffer,
  init_dirname,
  init_filename,
  init_global,
  init_process
} from "/build/_shared/chunk-I4IZRGLP.js";

// browser-route-module:root.tsx?browser
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/root.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/components/ExitPreview.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ExitPreview() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pointer-events-none fixed inset-0 flex h-screen w-screen items-end justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "form",
    {
      className: "pointer-events-auto",
      action: "/resource/preview",
      method: "POST",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "bg-black p-4 font-bold text-white", type: "submit", children: "Exit Preview Mode" }, void 0, false, {
        fileName: "app/components/ExitPreview.tsx",
        lineNumber: 11,
        columnNumber: 9
      }, this)
    },
    void 0,
    false,
    {
      fileName: "app/components/ExitPreview.tsx",
      lineNumber: 6,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "app/components/ExitPreview.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/components/Footer.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/components/Logo.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function Logo(props) {
  const { query: homeQuery, params: homeParams } = useRouteLoaderData(
    `root`
  );
  const { siteTitle } = props;
  if (siteTitle && typeof document !== `undefined`) {
    console.info(
      `Create and publish "home" document in Sanity Studio at ${window.origin}/studio/desk/home`
    );
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-lg font-bold tracking-tighter text-black dark:text-white lg:text-2xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    PreviewWrapper,
    {
      data: { siteTitle },
      render: ({ siteTitle: siteTitle2 }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/", children: siteTitle2 != null ? siteTitle2 : `Sanity Remix` }, void 0, false, {
        fileName: "app/components/Logo.tsx",
        lineNumber: 29,
        columnNumber: 11
      }, this),
      query: homeQuery,
      params: homeParams
    },
    void 0,
    false,
    {
      fileName: "app/components/Logo.tsx",
      lineNumber: 26,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "app/components/Logo.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

// app/components/Footer.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("header", { className: "border-t border-gray-100 transition-colors duration-1000 ease-in-out dark:border-gray-900", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "container mx-auto flex items-center justify-between p-4 lg:px-12", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Logo, {}, void 0, false, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 8,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-light", children: "Created with L\u2764\uFE0FVE by Vahan Martirosyan" }, void 0, false, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 9,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 7,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/components/Header.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/components/ThemeToggle.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
function ThemeToggle() {
  const cookieToggle = useFetcher();
  const { themePreference } = useLoaderData();
  const isDarkMode = themePreference === `dark`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(cookieToggle.Form, { method: "post", action: "/resource/toggle-theme", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { type: "submit", disabled: cookieToggle.state === "submitting", children: [
    isDarkMode ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Sun, { className: "h-auto w-4" }, void 0, false, {
      fileName: "app/components/ThemeToggle.tsx",
      lineNumber: 14,
      columnNumber: 11
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Moon, { className: "h-auto w-4" }, void 0, false, {
      fileName: "app/components/ThemeToggle.tsx",
      lineNumber: 16,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "sr-only select-none", children: [
      isDarkMode ? `Light` : `Dark`,
      " Mode"
    ] }, void 0, true, {
      fileName: "app/components/ThemeToggle.tsx",
      lineNumber: 18,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ThemeToggle.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/ThemeToggle.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/components/Header.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
function Header(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("header", { className: "border-b border-gray-100 transition-colors duration-1000 ease-in-out dark:border-gray-900", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "container mx-auto flex items-center justify-between p-4 lg:px-12", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Logo, { siteTitle: props.siteTitle }, void 0, false, {
      fileName: "app/components/Header.tsx",
      lineNumber: 16,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("form", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("label", { htmlFor: "default-search", className: "mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white", children: "Search" }, void 0, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 18,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "relative", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("svg", { "aria-hidden": "true", className: "w-4 h-4 text-black dark:text-gray-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" }, void 0, false, {
          fileName: "app/components/Header.tsx",
          lineNumber: 21,
          columnNumber: 178
        }, this) }, void 0, false, {
          fileName: "app/components/Header.tsx",
          lineNumber: 21,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/Header.tsx",
          lineNumber: 20,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { type: "search", id: "default-search", className: "block w-full max-h-12 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", placeholder: "Search Mockups, Logos...", required: true }, void 0, false, {
          fileName: "app/components/Header.tsx",
          lineNumber: 23,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Header.tsx",
        lineNumber: 19,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Header.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ThemeToggle, {}, void 0, false, {
      fileName: "app/components/Header.tsx",
      lineNumber: 29,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Header.tsx",
    lineNumber: 14,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Header.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/lib/getBodyClassNames.ts
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
function getBodyClassNames(themePreference) {
  const isDarkMode = !themePreference && typeof document !== "undefined" ? window.matchMedia("(prefers-color-scheme: dark)").matches : themePreference === `dark`;
  return [
    `transition-colors duration-1000 ease-in-out min-h-screen`,
    isDarkMode ? `dark bg-black text-white` : `bg-white text-black`
  ].join(" ").trim();
}

// app/root.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
var links = () => {
  return [
    { rel: "preconnect", href: "https://cdn.sanity.io" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous"
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
      crossOrigin: "anonymous"
    },
    {
      href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500;700&family=Inter:wght@500;700;800&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap",
      rel: "stylesheet"
    }
  ];
};
function App() {
  const { ENV, themePreference, home, preview } = useLoaderData();
  const { pathname } = useLocation();
  const isStudioRoute = pathname.startsWith("/studio");
  const bodyClassNames = getBodyClassNames(themePreference);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 93,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 94,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 95,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 96,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 97,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("link", { rel: "icon", href: "https://fav.farm/\u{1F918}" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 98,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 99,
        columnNumber: 9
      }, this),
      isStudioRoute && typeof document === "undefined" ? "__STYLES__" : null
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 92,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("body", { className: bodyClassNames, children: [
      isStudioRoute ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 104,
        columnNumber: 11
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Header, { siteTitle: home == null ? void 0 : home.siteTitle }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 107,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "container mx-auto p-4 lg:p-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Outlet, {}, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 109,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 108,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Footer, {}, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 111,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 106,
        columnNumber: 11
      }, this),
      preview ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ExitPreview, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 114,
        columnNumber: 20
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 115,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "script",
        {
          dangerouslySetInnerHTML: {
            __html: `window.ENV = ${JSON.stringify(ENV)}`
          }
        },
        void 0,
        false,
        {
          fileName: "app/root.tsx",
          lineNumber: 116,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 121,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 122,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 102,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 91,
    columnNumber: 5
  }, this);
}
export {
  App as default,
  links
};
//# sourceMappingURL=/build/root-ZTVDNFZQ.js.map
