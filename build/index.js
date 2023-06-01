var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_stream = require("stream"), import_styled_components = require("styled-components"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1;
    if (new URL(request.url).pathname.startsWith("/studio")) {
      let sheet = new import_styled_components.ServerStyleSheet(), markup = (0, import_server.renderToString)(
        sheet.collectStyles(
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
            fileName: "app/entry.server.tsx",
            lineNumber: 26,
            columnNumber: 11
          }, this)
        )
      ), styles = sheet.getStyleTags();
      return markup = markup.replace("__STYLES__", styles), responseHeaders.set("Content-Type", "text/html"), resolve(
        new import_node.Response("<!DOCTYPE html>" + markup, {
          status: responseStatusCode,
          headers: responseHeaders
        })
      );
    }
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 43,
        columnNumber: 7
      }, this),
      {
        onShellReady: () => {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError: (err) => {
          reject(err);
        },
        onError: (error) => {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader
});
var import_node4 = require("@remix-run/node"), import_react6 = require("@remix-run/react"), import_groq = __toESM(require("groq")), import_zod2 = require("zod");

// app/components/ExitPreview.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function ExitPreview() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "pointer-events-none fixed inset-0 flex h-screen w-screen items-end justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    "form",
    {
      className: "pointer-events-auto",
      action: "/resource/preview",
      method: "POST",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { className: "bg-black p-4 font-bold text-white", type: "submit", children: "Exit Preview Mode" }, void 0, !1, {
        fileName: "app/components/ExitPreview.tsx",
        lineNumber: 11,
        columnNumber: 9
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/ExitPreview.tsx",
      lineNumber: 6,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/ExitPreview.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/components/Logo.tsx
var import_react4 = require("@remix-run/react");

// app/components/PreviewWrapper.tsx
var import_preview_kit = require("@sanity/preview-kit"), import_react3 = require("react");

// app/components/Loading.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function Loading() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "animate-pulse border border-dashed border-red-500 bg-red-50 p-8 text-center", children: "Loading preview..." }, void 0, !1, {
    fileName: "app/components/Loading.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/lib/useRootLoaderData.ts
var import_react2 = require("@remix-run/react");
function useRootLoaderData() {
  return (0, import_react2.useRouteLoaderData)("root");
}

// app/sanity/projectDetails.ts
var projectDetails = () => {
  let { SANITY_PROJECT_ID, SANITY_DATASET, SANITY_API_VERSION } = typeof document > "u" ? process.env : window.ENV;
  return {
    projectId: SANITY_PROJECT_ID ?? "7i6pmun4",
    dataset: SANITY_DATASET ?? "production ",
    apiVersion: SANITY_API_VERSION ?? "2023-05-11"
  };
};

// app/components/PreviewWrapper.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), { projectId, dataset } = projectDetails(), usePreview = (0, import_preview_kit.definePreview)({ projectId, dataset });
function PreviewWrapper(props) {
  let {
    // Given this data OR if preview is active, draft data
    data,
    // Render this component using the data
    render,
    // If preview mode is active, listen to this query
    query: query2 = null,
    // With these params
    params = {},
    // And fallback to this while loading
    fallback = /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Loading, {}, void 0, !1, {
      fileName: "app/components/PreviewWrapper.tsx",
      lineNumber: 35,
      columnNumber: 16
    }, this)
  } = props, { preview, token } = useRootLoaderData();
  if (!preview || !query2) {
    let Component = render(data);
    return Component && (0, import_react3.isValidElement)(Component) ? Component : null;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_preview_kit.PreviewSuspense, { fallback, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    PreviewSuspended,
    {
      query: query2,
      render,
      params: params ?? {},
      token
    },
    void 0,
    !1,
    {
      fileName: "app/components/PreviewWrapper.tsx",
      lineNumber: 47,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/PreviewWrapper.tsx",
    lineNumber: 46,
    columnNumber: 5
  }, this);
}
function PreviewSuspended(props) {
  let { query: query2, params = {}, token = null, render } = props, previewData = usePreview(token, query2, params), Component = render(previewData);
  return Component && (0, import_react3.isValidElement)(Component) ? Component : null;
}

// app/components/Logo.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function Logo(props) {
  let { query: homeQuery, params: homeParams } = (0, import_react4.useRouteLoaderData)(
    "root"
  ), { siteTitle } = props;
  return siteTitle && typeof document < "u" && console.info(
    `Create and publish "home" document in Sanity Studio at ${window.origin}/studio/desk/home`
  ), /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-lg font-bold tracking-tighter text-black dark:text-white lg:text-2xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    PreviewWrapper,
    {
      data: { siteTitle },
      render: ({ siteTitle: siteTitle2 }) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react4.Link, { to: "/", children: siteTitle2 ?? "Sanity Remix" }, void 0, !1, {
        fileName: "app/components/Logo.tsx",
        lineNumber: 29,
        columnNumber: 11
      }, this),
      query: homeQuery,
      params: homeParams
    },
    void 0,
    !1,
    {
      fileName: "app/components/Logo.tsx",
      lineNumber: 26,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/Logo.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

// app/components/Footer.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("header", { className: "border-t border-gray-100 transition-colors duration-1000 ease-in-out dark:border-gray-900", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "container mx-auto flex items-center justify-between p-4 lg:px-12", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Logo, {}, void 0, !1, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 8,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "text-light", children: "Created with L\u2764\uFE0FVE by Vahan Martirosyan" }, void 0, !1, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 9,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 7,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/components/ThemeToggle.tsx
var import_react5 = require("@remix-run/react"), import_lucide_react = require("lucide-react"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function ThemeToggle() {
  let cookieToggle = (0, import_react5.useFetcher)(), { themePreference } = (0, import_react5.useLoaderData)(), isDarkMode = themePreference === "dark";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(cookieToggle.Form, { method: "post", action: "/resource/toggle-theme", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("button", { type: "submit", disabled: cookieToggle.state === "submitting", children: [
    isDarkMode ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_lucide_react.Sun, { className: "h-auto w-4" }, void 0, !1, {
      fileName: "app/components/ThemeToggle.tsx",
      lineNumber: 14,
      columnNumber: 11
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_lucide_react.Moon, { className: "h-auto w-4" }, void 0, !1, {
      fileName: "app/components/ThemeToggle.tsx",
      lineNumber: 16,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "sr-only select-none", children: [
      isDarkMode ? "Light" : "Dark",
      " Mode"
    ] }, void 0, !0, {
      fileName: "app/components/ThemeToggle.tsx",
      lineNumber: 18,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ThemeToggle.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/ThemeToggle.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/components/Header.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function Header(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("header", { className: "border-b border-gray-100 transition-colors duration-1000 ease-in-out dark:border-gray-900", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "container mx-auto flex items-center justify-between p-4 lg:px-12", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Logo, { siteTitle: props.siteTitle }, void 0, !1, {
      fileName: "app/components/Header.tsx",
      lineNumber: 16,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("form", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("label", { htmlFor: "default-search", className: "mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white", children: "Search" }, void 0, !1, {
        fileName: "app/components/Header.tsx",
        lineNumber: 18,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "relative", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("svg", { "aria-hidden": "true", className: "w-4 h-4 text-black dark:text-gray-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" }, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 21,
          columnNumber: 178
        }, this) }, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 21,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 20,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("input", { type: "search", id: "default-search", className: "block w-full max-h-12 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", placeholder: "Search Mockups, Logos...", required: !0 }, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 23,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Header.tsx",
        lineNumber: 19,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Header.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(ThemeToggle, {}, void 0, !1, {
      fileName: "app/components/Header.tsx",
      lineNumber: 29,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Header.tsx",
    lineNumber: 14,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Header.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/cookies.ts
var import_node2 = require("@remix-run/node"), themePreferenceCookie = (0, import_node2.createCookie)("themePreference", {
  path: "/"
});

// app/lib/getBodyClassNames.ts
function getBodyClassNames(themePreference) {
  return [
    "transition-colors duration-1000 ease-in-out min-h-screen",
    (!themePreference && typeof document < "u" ? window.matchMedia("(prefers-color-scheme: dark)").matches : themePreference === "dark") ? "dark bg-black text-white" : "bg-white text-black"
  ].join(" ").trim();
}

// app/sessions.ts
var import_node3 = require("@remix-run/node"), { getSession, commitSession, destroySession } = (0, import_node3.createCookieSessionStorage)({
  cookie: {
    name: "__session",
    httpOnly: !0,
    maxAge: 60,
    path: "/",
    sameSite: "lax",
    secrets: [String(process.env.SANITY_PREVIEW_SECRET)],
    secure: !0
  }
});

// app/lib/getPreviewToken.ts
async function getPreviewToken(request) {
  let token = (await getSession(request.headers.get("Cookie"))).get("token");
  return {
    preview: !!token,
    token: token ? String(token) : null
  };
}

// app/sanity/client.ts
var import_client = require("@sanity/client");
var client = (0, import_client.createClient)({
  ...projectDetails(),
  useCdn: !0
}), previewClient = (0, import_client.createClient)({
  ...projectDetails(),
  useCdn: !1,
  token: process.env.SANITY_READ_TOKEN
}), getClient = (previewMode = !1) => previewMode ? previewClient : client, writeClient = (0, import_client.createClient)({
  ...projectDetails(),
  useCdn: !1,
  token: process.env.SANITY_WRITE_TOKEN
});

// app/types/home.ts
var import_zod = require("zod"), homeZ = import_zod.z.object({
  title: import_zod.z.string().nullable(),
  siteTitle: import_zod.z.string().nullable()
});

// app/root.tsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), links = () => [
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
], loader = async ({ request }) => {
  let { token, preview } = await getPreviewToken(request), cookieHeader = request.headers.get("Cookie"), cookie = await themePreferenceCookie.parse(cookieHeader) || {}, themePreference = import_zod2.z.union([import_zod2.z.literal("dark"), import_zod2.z.literal("light")]).optional().parse(cookie.themePreference), query2 = import_groq.default`*[_id == "home"][0]{
    title,
    siteTitle
  }`, home = await getClient(preview).fetch(query2).then((res) => res ? homeZ.parse(res) : null);
  return (0, import_node4.json)({
    home,
    preview,
    query: preview ? query2 : token,
    params: preview ? {} : null,
    // Note: This makes the token available to the client if they have an active session
    // This is useful to show live preview to unauthenticated users
    // If you would rather not, replace token with `null` and it will rely on your Studio auth
    token: preview ? token : null,
    themePreference,
    ENV: {
      SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
      SANITY_DATASET: process.env.SANITY_DATASET,
      SANITY_API_VERSION: process.env.SANITY_API_VERSION
    }
  });
};
function App() {
  let { ENV, themePreference, home, preview } = (0, import_react6.useLoaderData)(), { pathname } = (0, import_react6.useLocation)(), isStudioRoute = pathname.startsWith("/studio"), bodyClassNames = getBodyClassNames(themePreference);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 93,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 94,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react6.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 95,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 96,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 97,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("link", { rel: "icon", href: "https://fav.farm/\u{1F918}" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 98,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react6.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 99,
        columnNumber: 9
      }, this),
      isStudioRoute && typeof document > "u" ? "__STYLES__" : null
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 92,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("body", { className: bodyClassNames, children: [
      isStudioRoute ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react6.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 104,
        columnNumber: 11
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Header, { siteTitle: home == null ? void 0 : home.siteTitle }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 107,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "container mx-auto p-4 lg:p-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react6.Outlet, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 109,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 108,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Footer, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 111,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 106,
        columnNumber: 11
      }, this),
      preview ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(ExitPreview, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 114,
        columnNumber: 20
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react6.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 115,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
        "script",
        {
          dangerouslySetInnerHTML: {
            __html: `window.ENV = ${JSON.stringify(ENV)}`
          }
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 116,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react6.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 121,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react6.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 122,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 102,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 91,
    columnNumber: 5
  }, this);
}

// app/routes/resource.toggle-theme.ts
var resource_toggle_theme_exports = {};
__export(resource_toggle_theme_exports, {
  action: () => action,
  loader: () => loader2
});
var import_node5 = require("@remix-run/node");
var action = async ({ request }) => {
  let cookieHeader = request.headers.get("Cookie"), themePreference = (await themePreferenceCookie.parse(cookieHeader) || {}).themePreference === "dark" ? "light" : "dark";
  return (0, import_node5.json)(
    { themePreference },
    {
      headers: {
        "Set-Cookie": await themePreferenceCookie.serialize({
          themePreference
        })
      }
    }
  );
}, loader2 = () => (0, import_node5.redirect)("/", { status: 404 });

// app/routes/resource.preview.ts
var resource_preview_exports = {};
__export(resource_preview_exports, {
  action: () => action2,
  loader: () => loader3
});
var import_node6 = require("@remix-run/node"), import_groq3 = __toESM(require("groq"));

// app/sanity/structure/getSecret.ts
var import_groq2 = __toESM(require("groq")), SECRET_ID = "sanity.preview.secret", query = (ttl) => import_groq2.default`*[_id == $id && dateTime(_updatedAt) > dateTime(now()) - ${ttl}][0].secret`, tag = "preview.secret";
async function getSecret(client2, id, createIfNotExists) {
  let secret = await client2.fetch(
    // Use a TTL of 1 hour when reading the secret, while using a 30min expiry if `createIfNotExists` is defined to avoid a race condition where
    // a preview pane could get a Secret and use it just as it expires. Twice the TTL gives a wide margin to ensure that when the secret is read
    // it's recent enough to be valid no matter if it's used in an iframe URL, or a "Open Preview" URL.
    query(createIfNotExists ? 1800 : 3600),
    { id }
  );
  if (!secret && createIfNotExists) {
    let newSecret = createIfNotExists === !0 ? Math.random().toString(36).slice(2) : createIfNotExists();
    try {
      let patch = client2.patch(id).set({ secret: newSecret });
      return await client2.transaction().createIfNotExists({ _id: id, _type: id }).patch(patch).commit({ tag }), newSecret;
    } catch (err) {
      console.error(
        "Failed to create a new preview secret. Ensure the `client` has a `token` specified that has `write` permissions.",
        err
      );
    }
  }
  return secret;
}

// app/routes/resource.preview.ts
var action2 = async ({ request }) => {
  if (request.method !== "POST")
    return (0, import_node6.json)({ message: "Method not allowed" }, 405);
  let session = await getSession(request.headers.get("Cookie"));
  return (0, import_node6.redirect)("/", {
    headers: {
      "Set-Cookie": await destroySession(session)
    }
  });
}, PREVIEW_TYPES = ["record", "home"], loader3 = async ({ request }) => {
  let { token, projectId: projectId2 } = previewClient.config();
  if (!token)
    return new Response(
      `Setup "SANITY_READ_TOKEN" with a token with "Viewer" permissions to your environment variables. Create one at https://sanity.io/manage/project/${projectId2}/api#tokens`,
      { status: 401 }
    );
  let requestUrl = new URL(request.url), type = requestUrl.searchParams.get("type");
  if (!type)
    return new Response("No document type in preview URL", { status: 401 });
  if (!PREVIEW_TYPES.includes(type))
    return new Response("Invalid document type for preview", { status: 401 });
  let secret = requestUrl.searchParams.get("secret");
  if (!secret)
    return new Response("No secret in URL", { status: 401 });
  if (await getSecret(previewClient, SECRET_ID, !1) !== secret)
    return new Response("Invalid secret", { status: 401 });
  let validSlug = "/";
  if (type === "record") {
    let slug = requestUrl.searchParams.get("slug");
    if (!slug)
      return new Response("No slug in preview URL", { status: 401 });
    let recordSlug = await previewClient.fetch(
      import_groq3.default`*[_type == "record" && slug.current == $slug][0].slug.current`,
      { slug }
    );
    if (!recordSlug)
      return new Response("Invalid slug", { status: 401 });
    validSlug = `/${recordSlug}`;
  }
  let session = await getSession(request.headers.get("Cookie"));
  return session.set("token", token), (0, import_node6.redirect)(validSlug, {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  });
};

// app/routes/resource.og.tsx
var resource_og_exports = {};
__export(resource_og_exports, {
  OG_IMAGE_HEIGHT: () => OG_IMAGE_HEIGHT,
  OG_IMAGE_WIDTH: () => OG_IMAGE_WIDTH,
  loader: () => loader4
});

// app/lib/og.server.tsx
var import_resvg_js = require("@resvg/resvg-js"), import_image_url = __toESM(require("@sanity/image-url")), import_satori = __toESM(require("satori"));
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), fontSans = (baseUrl) => fetch(new URL(`${baseUrl}/fonts/Inter-ExtraBold.otf`)).then(
  (res) => res.arrayBuffer()
);
async function generatePngFromDocument(doc, origin) {
  var _a, _b;
  let { title, artist, image } = doc, fontSansData = await fontSans(origin), options = {
    width: OG_IMAGE_WIDTH,
    height: OG_IMAGE_HEIGHT,
    fonts: [
      {
        name: "Inter",
        data: fontSansData,
        style: "normal"
      }
    ]
  }, svg = await (0, import_satori.default)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      "div",
      {
        style: {
          width: options.width,
          height: options.height,
          background: "linear-gradient( 135deg, black 10%, #444 100%)",
          color: "white",
          fontFamily: "Inter",
          letterSpacing: "-0.05em",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          lineHeight: 1
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
            "div",
            {
              style: {
                width: (_a = image == null ? void 0 : image.asset) != null && _a._ref ? options.width - 500 : options.width,
                display: "flex",
                flexDirection: "column",
                padding: 50,
                gap: 25
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { style: { fontSize: 100 }, children: title }, void 0, !1, {
                  fileName: "app/lib/og.server.tsx",
                  lineNumber: 61,
                  columnNumber: 9
                }, this),
                artist != null && artist.title ? /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { style: { fontSize: 40 }, children: artist.title }, void 0, !1, {
                  fileName: "app/lib/og.server.tsx",
                  lineNumber: 63,
                  columnNumber: 11
                }, this) : null
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/lib/og.server.tsx",
              lineNumber: 52,
              columnNumber: 7
            },
            this
          ),
          (_b = image == null ? void 0 : image.asset) != null && _b._ref ? /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
            "div",
            {
              style: {
                width: 500,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
                "img",
                {
                  alt: "",
                  src: (0, import_image_url.default)(projectDetails()).image(image.asset._ref).height(800).width(800).fit("max").auto("format").url(),
                  width: "500",
                  height: "500"
                },
                void 0,
                !1,
                {
                  fileName: "app/lib/og.server.tsx",
                  lineNumber: 75,
                  columnNumber: 11
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/lib/og.server.tsx",
              lineNumber: 67,
              columnNumber: 9
            },
            this
          ) : null
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/lib/og.server.tsx",
        lineNumber: 38,
        columnNumber: 5
      },
      this
    ),
    options
  );
  return new import_resvg_js.Resvg(svg).render().asPng();
}

// app/routes/resource.og.tsx
var OG_IMAGE_WIDTH = 1200, OG_IMAGE_HEIGHT = 630, loader4 = async ({ request }) => {
  let { origin, searchParams } = new URL(request.url), id = searchParams.get("id");
  if (!id)
    return new Response("Bad request", { status: 400 });
  let doc = await previewClient.fetch("*[_id == $id][0]{ ..., artist-> }", {
    id
  });
  if (!doc)
    return new Response("Bad request", { status: 400 });
  let png = await generatePngFromDocument(doc, origin);
  return new Response(png, {
    status: 200,
    headers: {
      // Tell the browser the response is an image
      "Content-Type": "image/png",
      // Optional caching settings
      "cache-control": "no-cache"
    }
  });
};

// app/routes/studio.$.tsx
var studio_exports = {};
__export(studio_exports, {
  default: () => StudioPage,
  links: () => links2,
  meta: () => meta
});
var import_remix_utils = require("remix-utils"), import_sanity7 = require("sanity");

// app/styles/studio.css
var studio_default = "/build/_assets/studio-7UYMGTOZ.css";

// sanity.config.ts
var import_vision = require("@sanity/vision"), import_sanity6 = require("sanity"), import_desk = require("sanity/desk"), import_sanity_plugin_vercel_deploy = require("sanity-plugin-vercel-deploy");

// app/sanity/schema/artist.ts
var import_lucide_react2 = require("lucide-react"), import_sanity = require("sanity"), artistType = (0, import_sanity.defineType)({
  name: "artist",
  title: "Artist",
  type: "document",
  icon: import_lucide_react2.Users,
  fields: [
    (0, import_sanity.defineField)({
      name: "title",
      type: "string"
    }),
    (0, import_sanity.defineField)({
      name: "slug",
      type: "slug",
      options: {
        source: "title"
      }
    }),
    (0, import_sanity.defineField)({
      name: "image",
      type: "image",
      options: { hotspot: !0 }
    })
  ]
});

// app/sanity/schema/genre.ts
var import_lucide_react3 = require("lucide-react"), import_sanity2 = require("sanity"), genreType = (0, import_sanity2.defineType)({
  name: "genre",
  title: "Genre",
  type: "document",
  icon: import_lucide_react3.Tags,
  fields: [
    (0, import_sanity2.defineField)({
      name: "title",
      type: "string"
    }),
    (0, import_sanity2.defineField)({
      name: "slug",
      type: "slug",
      options: {
        source: "title"
      }
    })
  ]
});

// app/sanity/schema/home.ts
var import_lucide_react4 = require("lucide-react"), import_sanity3 = require("sanity"), homeType = (0, import_sanity3.defineType)({
  name: "home",
  title: "Home",
  type: "document",
  icon: import_lucide_react4.Home,
  fields: [
    (0, import_sanity3.defineField)({
      name: "title",
      type: "string"
    }),
    (0, import_sanity3.defineField)({
      name: "siteTitle",
      type: "string"
    })
  ],
  preview: {
    select: {
      title: "title",
      artist: "siteTitle"
    }
  }
});

// app/sanity/schema/record.ts
var import_icons = require("@sanity/icons"), import_lucide_react5 = require("lucide-react"), import_sanity4 = require("sanity"), recordType = (0, import_sanity4.defineType)({
  name: "record",
  title: "Record",
  type: "document",
  icon: import_lucide_react5.Disc,
  fieldsets: [
    {
      name: "rating",
      title: "Rating",
      description: "These fields are written to from the Remix front end",
      options: { columns: 2 }
    }
  ],
  groups: [
    {
      name: "details",
      title: "Details",
      icon: import_icons.ThListIcon
    },
    {
      name: "editorial",
      title: "Editorial",
      icon: import_icons.ComposeIcon
    },
    {
      name: "tracks",
      title: "Tracks",
      icon: import_icons.MenuIcon
    }
  ],
  fields: [
    (0, import_sanity4.defineField)({
      name: "title",
      type: "string",
      group: "details"
    }),
    (0, import_sanity4.defineField)({
      name: "slug",
      type: "slug",
      options: {
        source: "title"
      },
      group: "details"
    }),
    (0, import_sanity4.defineField)({
      name: "likes",
      type: "number",
      readOnly: !0,
      fieldset: "rating"
    }),
    (0, import_sanity4.defineField)({
      name: "dislikes",
      type: "number",
      readOnly: !0,
      fieldset: "rating"
    }),
    (0, import_sanity4.defineField)({
      name: "artist",
      type: "reference",
      to: [{ type: "artist" }],
      group: "details"
    }),
    (0, import_sanity4.defineField)({
      name: "genres",
      type: "array",
      of: [{ type: "reference", to: { type: "genre" } }],
      group: "details"
    }),
    (0, import_sanity4.defineField)({
      name: "content",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
      group: "editorial"
    }),
    (0, import_sanity4.defineField)({
      name: "image",
      type: "image",
      options: { hotspot: !0 },
      group: "editorial"
    }),
    (0, import_sanity4.defineField)({
      name: "tracks",
      type: "array",
      of: [{ type: "track" }],
      group: "tracks"
    })
  ],
  preview: {
    select: {
      title: "title",
      artist: "artist.title",
      media: "image"
    },
    prepare({ title, artist, media }) {
      return {
        title,
        subtitle: artist,
        media
      };
    }
  }
});

// app/sanity/schema/track.ts
var import_sanity5 = require("sanity");

// app/lib/secondsToMinutes.ts
function secondsToMinutes(seconds) {
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
}

// app/sanity/components/Duration.tsx
var import_ui = require("@sanity/ui");
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function Duration(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_ui.Flex, { gap: 3, align: "center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_ui.Box, { flex: 1, children: props.renderDefault(props) }, void 0, !1, {
      fileName: "app/sanity/components/Duration.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    props.value ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_ui.Code, { size: 4, children: secondsToMinutes(props.value) }, void 0, !1, {
      fileName: "app/sanity/components/Duration.tsx",
      lineNumber: 12,
      columnNumber: 9
    }, this) : null
  ] }, void 0, !0, {
    fileName: "app/sanity/components/Duration.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/sanity/schema/track.ts
var trackType = (0, import_sanity5.defineType)({
  name: "track",
  title: "Track",
  type: "object",
  fields: [
    (0, import_sanity5.defineField)({
      name: "title",
      type: "string"
    }),
    (0, import_sanity5.defineField)({
      name: "duration",
      description: "Time in seconds",
      type: "number",
      components: {
        input: Duration
      }
    })
  ],
  preview: {
    select: {
      title: "title",
      duration: "duration"
    },
    prepare({ title, duration }) {
      return {
        title,
        subtitle: secondsToMinutes(duration)
      };
    }
  }
});

// app/sanity/schema/index.ts
var schema_default = [artistType, genreType, homeType, recordType, trackType];

// app/sanity/structure/index.ts
var import_lucide_react6 = require("lucide-react"), import_sanity_plugin_iframe_pane = __toESM(require("sanity-plugin-iframe-pane"));

// app/sanity/components/OGPreview.tsx
var import_ui2 = require("@sanity/ui"), import_react7 = __toESM(require("react"));
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function OGPreview({ document: document2, options }) {
  let { displayed } = document2, url = import_react7.default.useMemo(() => options.url(displayed), [displayed, options]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
    import_ui2.Flex,
    {
      height: "fill",
      direction: "column",
      align: "flex-start",
      padding: 5,
      gap: 5,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_ui2.Card, { shadow: 2, children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_ui2.Flex, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
          "img",
          {
            src: url,
            alt: "OG Preview",
            width: OG_IMAGE_WIDTH,
            height: OG_IMAGE_HEIGHT,
            style: { width: "100%", height: "auto" }
          },
          void 0,
          !1,
          {
            fileName: "app/sanity/components/OGPreview.tsx",
            lineNumber: 20,
            columnNumber: 11
          },
          this
        ) }, void 0, !1, {
          fileName: "app/sanity/components/OGPreview.tsx",
          lineNumber: 19,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/sanity/components/OGPreview.tsx",
          lineNumber: 18,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_ui2.Code, { size: 0, children: url }, void 0, !1, {
          fileName: "app/sanity/components/OGPreview.tsx",
          lineNumber: 29,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/sanity/components/OGPreview.tsx",
      lineNumber: 11,
      columnNumber: 5
    },
    this
  );
}

// app/sanity/structure/resolvePreviewUrl.ts
async function resolvePreviewUrl(doc, client2) {
  var _a;
  if (typeof window > "u")
    return "";
  let previewUrl = new URL("/resource/preview", window.origin);
  previewUrl.searchParams.set("type", doc._type), (_a = doc == null ? void 0 : doc.slug) != null && _a.current && previewUrl.searchParams.set("slug", doc.slug.current);
  let secret = await getSecret(client2, SECRET_ID, !0);
  return secret && previewUrl.searchParams.set("secret", secret), previewUrl.toString();
}

// app/sanity/structure/resolveOGUrl.ts
function resolveOGUrl(doc) {
  if (typeof window > "u")
    return "";
  let ogUrl = new URL("/resource/og", window.origin);
  return ogUrl.searchParams.set("id", doc._id), ogUrl.toString();
}

// app/sanity/structure/index.ts
var structure = (S) => S.list().id("root").title("Content").items([
  // Singleton, home page curation
  S.documentListItem().schemaType("home").icon(import_lucide_react6.Home).id("home").title("Home"),
  S.divider(),
  // Document lists
  S.documentTypeListItem("record").title("Records").icon(import_lucide_react6.Disc),
  S.documentTypeListItem("artist").title("Artists").icon(import_lucide_react6.Users),
  S.divider(),
  S.documentTypeListItem("genre").title("Genres").icon(import_lucide_react6.Tags)
]), defaultDocumentNode = (S, { schemaType, getClient: getClient2 }) => {
  let { apiVersion } = projectDetails(), client2 = getClient2({ apiVersion }), previewView = S.view.component(import_sanity_plugin_iframe_pane.default).options({
    url: (doc) => resolvePreviewUrl(doc, client2),
    reload: { button: !0 }
  }).title("Preview"), OGPreviewView = S.view.component(OGPreview).options({
    url: (doc) => resolveOGUrl(doc)
  }).title("OG Preview");
  switch (schemaType) {
    case "home":
      return S.document().views([S.view.form(), previewView]);
    case "record":
      return S.document().views([S.view.form(), previewView, OGPreviewView]);
    default:
      return S.document().views([S.view.form()]);
  }
};

// sanity.config.ts
var config = (0, import_sanity6.defineConfig)({
  ...projectDetails(),
  name: "sanity-remix",
  title: "Sanity Remix",
  plugins: [(0, import_desk.deskTool)({ structure, defaultDocumentNode }), (0, import_vision.visionTool)(), (0, import_sanity_plugin_vercel_deploy.vercelDeployTool)()],
  basePath: "/studio",
  schema: {
    types: schema_default
  }
});

// app/routes/studio.$.tsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), meta = () => [
  { title: "Sanity Studio" },
  { name: "robots", content: "noindex" }
], links2 = () => [{ rel: "stylesheet", href: studio_default }];
function StudioPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_remix_utils.ClientOnly, { children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
    import_sanity7.Studio,
    {
      config
    },
    void 0,
    !1,
    {
      fileName: "app/routes/studio.$.tsx",
      lineNumber: 22,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/studio.$.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  links: () => links3,
  loader: () => loader5,
  meta: () => meta2
});
var import_node7 = require("@remix-run/node"), import_react10 = require("@remix-run/react"), import_groq4 = __toESM(require("groq"));

// app/components/Records.tsx
var import_react8 = require("@remix-run/react"), import_react9 = require("react");

// app/components/RecordCover.tsx
var import_image_url2 = __toESM(require("@sanity/image-url"));
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function RecordCover(props) {
  let { title, image } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "aspect-square light:bg-white", children: image ? /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      "img",
      {
        className: "h-auto w-full object-cover shadow-black transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-cyan-200",
        src: (0, import_image_url2.default)(projectDetails()).image(image.asset._ref).height(800).width(800).fit("max").auto("format").url(),
        alt: String(title) ?? "",
        loading: "lazy"
      },
      void 0,
      !1,
      {
        fileName: "app/components/RecordCover.tsx",
        lineNumber: 22,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "p-5 bg-black", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h5", { className: " text-2xl font-bold tracking-tight text-gray-900 dark:text-white items-center", children: title }, void 0, !1, {
        fileName: "app/components/RecordCover.tsx",
        lineNumber: 39,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "mb-3 font-normal text-gray-700 dark:text-gray-40", children: "Here are the biggest enterprise technology acquisitions of 2021 so far." }, void 0, !1, {
        fileName: "app/components/RecordCover.tsx",
        lineNumber: 41,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("button", { className: "btn btn-sm bg-neutral-focus", children: "read more" }, void 0, !1, {
        fileName: "app/components/RecordCover.tsx",
        lineNumber: 42,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/RecordCover.tsx",
      lineNumber: 35,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/RecordCover.tsx",
    lineNumber: 21,
    columnNumber: 9
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex aspect-square w-full items-center justify-center bg-gray-100 text-gray-500", children: title ?? "Missing Record art" }, void 0, !1, {
    fileName: "app/components/RecordCover.tsx",
    lineNumber: 48,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/RecordCover.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

// app/components/Records.tsx
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function Records(props) {
  let [search, setSearch] = (0, import_react9.useState)(""), { records = [] } = props;
  return console.log(setSearch), records.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("ul", { className: "grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12 lg:grid-cols-3", children: records.filter((val) => {
    var _a;
    if (setSearch == "")
      return val;
    if ((_a = val.title) != null && _a.toLowerCase().includes(search))
      return val;
  }).map((record) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("li", { className: "group relative flex flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "relative overflow-hidden transition-all duration-200 ease-in-out group-hover:scale-105 group-hover:opacity-90", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "absolute z-0 h-48 w-[200%] translate-x-20 translate-y-20 -rotate-45 dark:bg-gradient-to-b from-black to-transparent opacity-25 mix-blend-overlay transition-transform duration-500 ease-in-out group-hover:translate-x-10 group-hover:translate-y-10 group-hover:opacity-75" }, void 0, !1, {
        fileName: "app/components/Records.tsx",
        lineNumber: 36,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(RecordCover, { image: record.image, title: record.title }, void 0, !1, {
        fileName: "app/components/Records.tsx",
        lineNumber: 37,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Records.tsx",
      lineNumber: 35,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "flex flex-col", children: [
      record != null && record.slug ? /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
        import_react8.Link,
        {
          prefetch: "intent",
          to: record == null ? void 0 : record.slug,
          className: "text-base",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { className: "absolute inset-0" }, void 0, !1, {
            fileName: "app/components/Records.tsx",
            lineNumber: 48,
            columnNumber: 19
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/Records.tsx",
          lineNumber: 41,
          columnNumber: 17
        },
        this
      ) : /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { className: "pt-4 text-2xl font-bold tracking-tighter", children: record.title }, void 0, !1, {
        fileName: "app/components/Records.tsx",
        lineNumber: 51,
        columnNumber: 17
      }, this),
      record != null && record.artist ? /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { className: "bg-black font-bold leading-none tracking-tighter text-white", children: record.artist }, void 0, !1, {
        fileName: "app/components/Records.tsx",
        lineNumber: 56,
        columnNumber: 17
      }, this) : null
    ] }, void 0, !0, {
      fileName: "app/components/Records.tsx",
      lineNumber: 39,
      columnNumber: 13
    }, this)
  ] }, record._id, !0, {
    fileName: "app/components/Records.tsx",
    lineNumber: 34,
    columnNumber: 11
  }, this)) }, void 0, !1, {
    fileName: "app/components/Records.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "prose prose-xl mx-auto bg-green-50 p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { children: "No records found, yet!" }, void 0, !1, {
      fileName: "app/components/Records.tsx",
      lineNumber: 66,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("a", { href: "/studio", children: "Log in to your Sanity Studio" }, void 0, !1, {
        fileName: "app/components/Records.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this),
      " and start creating content!"
    ] }, void 0, !0, {
      fileName: "app/components/Records.tsx",
      lineNumber: 67,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Records.tsx",
    lineNumber: 65,
    columnNumber: 5
  }, this);
}

// app/components/Title.tsx
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function Title(props) {
  return props.children ? /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h1", { className: "text-bold max-w-4xl text-4xl font-bold tracking-tighter md:text-4xl lg:text-5xl xl:text-7xl", children: props.children }, void 0, !1, {
    fileName: "app/components/Title.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this) : null;
}

// app/lib/deduplicateDrafts.ts
function deduplicateDrafts(data) {
  let draftsMap = /* @__PURE__ */ new Map(), orderArray = [];
  for (let currentObject of data) {
    let id = currentObject._id;
    if (id.startsWith("drafts.")) {
      let draftId = id.substring(7);
      !draftsMap.has(draftId) && !draftsMap.has(id) && (draftsMap.set(draftId, currentObject), orderArray.push(draftId));
    } else
      draftsMap.has(id) || (draftsMap.set(id, currentObject), orderArray.push(id));
  }
  return orderArray.map((id) => draftsMap.get(id));
}

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-7M2M6SRJ.css";

// app/types/record.ts
var import_zod3 = require("zod"), recordZ = import_zod3.z.object({
  _id: import_zod3.z.string(),
  title: import_zod3.z.string().nullable(),
  slug: import_zod3.z.string().nullable(),
  likes: import_zod3.z.number(),
  dislikes: import_zod3.z.number(),
  artist: import_zod3.z.string().nullable(),
  tracks: import_zod3.z.array(
    import_zod3.z.object({
      _key: import_zod3.z.string(),
      title: import_zod3.z.string().nullable(),
      duration: import_zod3.z.number().nullable()
    })
  ).nullable(),
  // ...being a touch lazy here, these could be more strongly typed
  image: import_zod3.z.any().nullable(),
  content: import_zod3.z.array(import_zod3.z.any()).nullable()
}), recordsZ = import_zod3.z.array(recordZ), recordStubZ = import_zod3.z.object({
  _id: import_zod3.z.string(),
  _type: import_zod3.z.string(),
  title: import_zod3.z.string().nullable(),
  slug: import_zod3.z.string().nullable(),
  artist: import_zod3.z.string().nullable(),
  image: import_zod3.z.any().nullable()
}), recordStubsZ = import_zod3.z.array(recordStubZ);

// app/routes/_index.tsx
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime"), links3 = () => [{ rel: "stylesheet", href: tailwind_default }], meta2 = ({ matches }) => {
  let rootData = matches.find((match) => match.id === "root"), home = rootData ? rootData.data.home : null;
  return [{ title: [home == null ? void 0 : home.title, home == null ? void 0 : home.siteTitle].filter(Boolean).join(" | ") }];
}, loader5 = async ({ request }) => {
  let { preview } = await getPreviewToken(request), query2 = import_groq4.default`*[_type == "record"][0...12]|order(title asc){
    _id,
    _type,
    title,
    "slug": slug.current,
    "artist": artist->title,
    image
  }`, records = await getClient(preview).fetch(query2).then((res) => res ? recordStubsZ.parse(res) : null), recordsDeduped = records != null && records.length && preview ? recordStubsZ.parse(deduplicateDrafts(records)) : records;
  if (!records)
    throw new Response("Not found", { status: 404 });
  return (0, import_node7.json)({
    records: recordsDeduped,
    query: preview ? query2 : null,
    params: preview ? {} : null
  });
};
function Index() {
  let { records = [], query: query2, params } = (0, import_react10.useLoaderData)(), { home, query: homeQuery, params: homeParams } = useRootLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "grid grid-cols-1 gap-6 md:gap-12", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
      PreviewWrapper,
      {
        data: home,
        render: (data) => data != null && data.title ? /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Title, { children: data.title }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 77,
          columnNumber: 39
        }, this) : null,
        query: homeQuery,
        params: homeParams
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 75,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
      PreviewWrapper,
      {
        data: records,
        render: (data) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Records, { records: data ?? [] }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 83,
          columnNumber: 25
        }, this),
        query: query2,
        params
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 81,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 74,
    columnNumber: 5
  }, this);
}

// app/routes/$slug.tsx
var slug_exports = {};
__export(slug_exports, {
  action: () => action3,
  default: () => RecordPage,
  links: () => links4,
  loader: () => loader6,
  meta: () => meta3
});
var import_node8 = require("@remix-run/node"), import_react13 = require("@remix-run/react"), import_groq5 = __toESM(require("groq"));

// app/components/LikeDislike.tsx
var import_react11 = require("@remix-run/react"), import_lucide_react7 = require("lucide-react"), import_jsx_dev_runtime18 = require("react/jsx-dev-runtime");
function LikeDislike(props) {
  var _a, _b;
  let { id } = props, fetcher = (0, import_react11.useFetcher)(), location = (0, import_react11.useLocation)(), isDone = fetcher.state === "idle" && fetcher.data !== null, isWorking = fetcher.state === "loading" || fetcher.state === "submitting", likes = isDone && Number((_a = fetcher == null ? void 0 : fetcher.data) == null ? void 0 : _a.likes) ? fetcher.data.likes : props == null ? void 0 : props.likes, displayLikes = (fetcher.formData && fetcher.formData.get("action") === "LIKE" ? likes + 1 : likes) || likes, dislikes = isDone && Number((_b = fetcher == null ? void 0 : fetcher.data) == null ? void 0 : _b.dislikes) ? fetcher.data.dislikes : props == null ? void 0 : props.dislikes, displayDislikes = (fetcher.formData && fetcher.formData.get("action") === "DISLIKE" ? dislikes + 1 : dislikes) || dislikes;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
    fetcher.Form,
    {
      action: location.pathname,
      className: "flex items-center justify-center gap-4 bg-black text-white",
      method: "post",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("input", { name: "id", type: "hidden", value: id }, void 0, !1, {
          fileName: "app/components/LikeDislike.tsx",
          lineNumber: 44,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
          "button",
          {
            name: "action",
            type: "submit",
            value: "LIKE",
            disabled: isWorking,
            className: "flex items-center gap-2 bg-black p-4 transition-all duration-100 ease-in-out hover:bg-cyan-400 hover:text-black disabled:opacity-50",
            title: "Like",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", { className: "text-xs font-bold", children: displayLikes }, void 0, !1, {
                fileName: "app/components/LikeDislike.tsx",
                lineNumber: 53,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_lucide_react7.ThumbsUp, {}, void 0, !1, {
                fileName: "app/components/LikeDislike.tsx",
                lineNumber: 54,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", { className: "sr-only", children: "Like" }, void 0, !1, {
                fileName: "app/components/LikeDislike.tsx",
                lineNumber: 55,
                columnNumber: 9
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/LikeDislike.tsx",
            lineNumber: 45,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
          "button",
          {
            name: "action",
            type: "submit",
            value: "DISLIKE",
            disabled: isWorking,
            className: "flex items-center gap-2 bg-black p-4 transition-all duration-100 ease-in-out hover:bg-cyan-400 hover:text-black disabled:opacity-50",
            title: "Dislike",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_lucide_react7.ThumbsDown, {}, void 0, !1, {
                fileName: "app/components/LikeDislike.tsx",
                lineNumber: 65,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", { className: "text-xs font-bold", children: displayDislikes }, void 0, !1, {
                fileName: "app/components/LikeDislike.tsx",
                lineNumber: 66,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", { className: "sr-only", children: "Dislike" }, void 0, !1, {
                fileName: "app/components/LikeDislike.tsx",
                lineNumber: 67,
                columnNumber: 9
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/LikeDislike.tsx",
            lineNumber: 57,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/LikeDislike.tsx",
      lineNumber: 39,
      columnNumber: 5
    },
    this
  );
}

// app/components/SanityContent.tsx
var import_react12 = require("@portabletext/react");

// app/components/SanityImage.tsx
var import_asset_utils = require("@sanity/asset-utils"), import_image_url3 = __toESM(require("@sanity/image-url"));
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime");
function SanityImage(props) {
  let { value, isInline } = props, { width, height } = (0, import_asset_utils.getImageDimensions)(value);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
    "img",
    {
      className: "not-prose h-auto w-full ",
      src: (0, import_image_url3.default)(projectDetails()).image(value).width(isInline ? 100 : 800).fit("max").auto("format").url(),
      alt: value.alt || "",
      loading: "lazy",
      style: {
        // Display alongside text if image appears inside a block text span
        display: isInline ? "inline-block" : "block",
        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height
      }
    },
    void 0,
    !1,
    {
      fileName: "app/components/SanityImage.tsx",
      lineNumber: 19,
      columnNumber: 5
    },
    this
  );
}

// app/components/SanityContent.tsx
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime"), components = {
  types: {
    image: SanityImage
  }
};
function SanityContent(props) {
  let { value } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "prose font-serif dark:prose-invert md:prose-2xl prose-a:text-cyan-600 dark:prose-a:text-cyan-200", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react12.PortableText, { value, components }, void 0, !1, {
    fileName: "app/components/SanityContent.tsx",
    lineNumber: 20,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/SanityContent.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/components/Record.tsx
var import_jsx_dev_runtime21 = require("react/jsx-dev-runtime");
function Record(props) {
  let { _id, title, artist, content, image, tracks, likes, dislikes } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("article", { className: "flex flex-col items-start gap-4 lg:flex-row lg:gap-12", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "grid-gap-4 mx-auto grid max-w-[70vw] grid-cols-1 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(RecordCover, { image, title }, void 0, !1, {
        fileName: "app/components/Record.tsx",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(LikeDislike, { id: _id, likes, dislikes }, void 0, !1, {
        fileName: "app/components/Record.tsx",
        lineNumber: 16,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Record.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex flex-shrink-0 flex-col gap-4 md:gap-6 lg:w-2/3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("header", { children: [
        title ? /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Title, { children: title }, void 0, !1, {
          fileName: "app/components/Record.tsx",
          lineNumber: 20,
          columnNumber: 20
        }, this) : null,
        artist ? /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h2", { className: "bg-black text-2xl font-bold tracking-tighter text-white", children: artist }, void 0, !1, {
          fileName: "app/components/Record.tsx",
          lineNumber: 22,
          columnNumber: 13
        }, this) : null
      ] }, void 0, !0, {
        fileName: "app/components/Record.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      content && (content == null ? void 0 : content.length) > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(SanityContent, { value: content }, void 0, !1, {
        fileName: "app/components/Record.tsx",
        lineNumber: 28,
        columnNumber: 11
      }, this) : null,
      tracks && (tracks == null ? void 0 : tracks.length) > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_jsx_dev_runtime21.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("ul", { className: "grid grid-cols-1 divide-y divide-gray-100 dark:divide-gray-900", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("li", { className: "py-3 text-2xl font-bold tracking-tighter", children: (tracks == null ? void 0 : tracks.length) === 1 ? "1 Track" : `${tracks == null ? void 0 : tracks.length} Tracks` }, void 0, !1, {
          fileName: "app/components/Record.tsx",
          lineNumber: 33,
          columnNumber: 15
        }, this),
        tracks.map((track) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
          "li",
          {
            className: "flex items-center justify-between py-3",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("span", { className: "text-lg", children: track.title }, void 0, !1, {
                fileName: "app/components/Record.tsx",
                lineNumber: 41,
                columnNumber: 19
              }, this),
              track.duration ? /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("span", { className: "text-sm font-bold", children: secondsToMinutes(track.duration) }, void 0, !1, {
                fileName: "app/components/Record.tsx",
                lineNumber: 43,
                columnNumber: 21
              }, this) : null
            ]
          },
          track._key,
          !0,
          {
            fileName: "app/components/Record.tsx",
            lineNumber: 37,
            columnNumber: 17
          },
          this
        ))
      ] }, void 0, !0, {
        fileName: "app/components/Record.tsx",
        lineNumber: 32,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/Record.tsx",
        lineNumber: 31,
        columnNumber: 11
      }, this) : null
    ] }, void 0, !0, {
      fileName: "app/components/Record.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Record.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/styles/app.css
var app_default = "/build/_assets/app-VA6DC2PE.css";

// app/routes/$slug.tsx
var import_jsx_dev_runtime22 = require("react/jsx-dev-runtime"), links4 = () => [{ rel: "stylesheet", href: app_default }], meta3 = ({ data, matches }) => {
  var _a;
  let rootData = matches.find((match) => match.id === "root"), home = rootData ? rootData.data.home : null, title = [(_a = data == null ? void 0 : data.record) == null ? void 0 : _a.title, home == null ? void 0 : home.siteTitle].filter(Boolean).join(" | "), { ogImageUrl } = data;
  return [
    { title },
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:title", content: title },
    { property: "og:title", content: title },
    { property: "og:image:width", content: String(OG_IMAGE_WIDTH) },
    { property: "og:image:height", content: String(OG_IMAGE_HEIGHT) },
    { property: "og:image", content: ogImageUrl }
  ];
}, action3 = async ({ request }) => {
  if (request.method !== "POST")
    throw new Response("Method not allowed", { status: 405 });
  let { token, projectId: projectId2 } = writeClient.config();
  if (!token)
    throw new Response(
      `Setup "SANITY_WRITE_TOKEN" with a token with "Editor" permissions to your environment variables. Create one at https://sanity.io/manage/project/${projectId2}/api#tokens`,
      { status: 401 }
    );
  let body = await request.formData(), id = String(body.get("id")), action4 = String(body.get("action"));
  if (id)
    switch (action4) {
      case "LIKE":
        return await writeClient.patch(id).setIfMissing({ likes: 0 }).inc({ likes: 1 }).commit().then(({ likes, dislikes }) => ({
          likes: likes ?? 0,
          dislikes: dislikes ?? 0
        }));
      case "DISLIKE":
        return await writeClient.patch(id).setIfMissing({ dislikes: 0 }).inc({ dislikes: 1 }).commit().then(({ likes, dislikes }) => ({
          likes: likes ?? 0,
          dislikes: dislikes ?? 0
        }));
      default:
        return (0, import_node8.json)({ message: "Invalid action" }, 400);
    }
  return (0, import_node8.json)({ message: "Bad request" }, 400);
}, loader6 = async ({ params, request }) => {
  let { preview } = await getPreviewToken(request), query2 = import_groq5.default`*[_type == "record" && slug.current == $slug][0]{
    _id,
    title,
    // GROQ can re-shape data in the request!
    "slug": slug.current,
    "artist": artist->title,
    // coalesce() returns the first value that is not null
    // so we can ensure we have at least a zero
    "likes": coalesce(likes, 0),
    "dislikes": coalesce(dislikes, 0),
    // for simplicity in this demo these are typed as "any"
    // we can make them type-safe with a little more work
    // https://www.simeongriggs.dev/type-safe-groq-queries-for-sanity-data-with-zod
    image,
    content,
    // this is how we extract values from arrays
    tracks[]{
      _key,
      title,
      duration
    }
  }`, record = await client.fetch(query2, params).then((res) => res ? recordZ.parse(res) : null);
  if (!record)
    throw new Response("Not found", { status: 404 });
  let { origin } = new URL(request.url), ogImageUrl = `${origin}/resource/og?id=${record._id}`;
  return (0, import_node8.json)({
    record,
    ogImageUrl,
    query: preview ? query2 : null,
    params: preview ? params : null
  });
};
function RecordPage() {
  let { record, query: query2, params } = (0, import_react13.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
    PreviewWrapper,
    {
      data: record,
      render: Record,
      query: query2,
      params
    },
    void 0,
    !1,
    {
      fileName: "app/routes/$slug.tsx",
      lineNumber: 156,
      columnNumber: 5
    },
    this
  );
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "0eec6938", entry: { module: "/build/entry.client-QXO2M26B.js", imports: ["/build/_shared/chunk-RZPD7QDG.js", "/build/_shared/chunk-SJDDFQ2Q.js", "/build/_shared/chunk-V4O2SHX5.js", "/build/_shared/chunk-5HQW4SWS.js", "/build/_shared/chunk-I4IZRGLP.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-U4UKTVXR.js", imports: ["/build/_shared/chunk-NFNY43FL.js", "/build/_shared/chunk-CQVITFUO.js", "/build/_shared/chunk-M2PEN2UP.js", "/build/_shared/chunk-6TKMBU2E.js", "/build/_shared/chunk-EZIV2XCM.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$slug": { id: "routes/$slug", parentId: "root", path: ":slug", index: void 0, caseSensitive: void 0, module: "/build/routes/$slug-LMIRZHWN.js", imports: ["/build/_shared/chunk-TGHXYJU4.js", "/build/_shared/chunk-DWGBMFOF.js", "/build/_shared/chunk-LL2RBC7I.js", "/build/_shared/chunk-E7KB5GSM.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-DWMDXKZR.js", imports: ["/build/_shared/chunk-LL2RBC7I.js", "/build/_shared/chunk-E7KB5GSM.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/resource.og": { id: "routes/resource.og", parentId: "root", path: "resource/og", index: void 0, caseSensitive: void 0, module: "/build/routes/resource.og-T73I3IUQ.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/resource.preview": { id: "routes/resource.preview", parentId: "root", path: "resource/preview", index: void 0, caseSensitive: void 0, module: "/build/routes/resource.preview-PDYO4H4J.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/resource.toggle-theme": { id: "routes/resource.toggle-theme", parentId: "root", path: "resource/toggle-theme", index: void 0, caseSensitive: void 0, module: "/build/routes/resource.toggle-theme-LCWYGFJH.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/studio.$": { id: "routes/studio.$", parentId: "root", path: "studio/*", index: void 0, caseSensitive: void 0, module: "/build/routes/studio.$-YNTZSOVV.js", imports: ["/build/_shared/chunk-XANHPADF.js", "/build/_shared/chunk-4NY5OEBK.js", "/build/_shared/chunk-EX55ICKE.js", "/build/_shared/chunk-TGHXYJU4.js", "/build/_shared/chunk-DWGBMFOF.js", "/build/_shared/chunk-E7KB5GSM.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, hmr: void 0, url: "/build/manifest-0EEC6938.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/resource.toggle-theme": {
    id: "routes/resource.toggle-theme",
    parentId: "root",
    path: "resource/toggle-theme",
    index: void 0,
    caseSensitive: void 0,
    module: resource_toggle_theme_exports
  },
  "routes/resource.preview": {
    id: "routes/resource.preview",
    parentId: "root",
    path: "resource/preview",
    index: void 0,
    caseSensitive: void 0,
    module: resource_preview_exports
  },
  "routes/resource.og": {
    id: "routes/resource.og",
    parentId: "root",
    path: "resource/og",
    index: void 0,
    caseSensitive: void 0,
    module: resource_og_exports
  },
  "routes/studio.$": {
    id: "routes/studio.$",
    parentId: "root",
    path: "studio/*",
    index: void 0,
    caseSensitive: void 0,
    module: studio_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/$slug": {
    id: "routes/$slug",
    parentId: "root",
    path: ":slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
