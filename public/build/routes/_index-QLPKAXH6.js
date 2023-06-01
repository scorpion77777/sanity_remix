import {
  RecordCover,
  Title
} from "/build/_shared/chunk-J7ELH5YQ.js";
import {
  PreviewWrapper,
  useRootLoaderData
} from "/build/_shared/chunk-IKQGDK4R.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-SJDDFQ2Q.js";
import "/build/_shared/chunk-E7KB5GSM.js";
import "/build/_shared/chunk-KCXGHVR5.js";
import "/build/_shared/chunk-6TKMBU2E.js";
import "/build/_shared/chunk-EZIV2XCM.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-V4O2SHX5.js";
import {
  require_react
} from "/build/_shared/chunk-5HQW4SWS.js";
import {
  __toESM,
  init_buffer,
  init_dirname,
  init_filename,
  init_global,
  init_process
} from "/build/_shared/chunk-I4IZRGLP.js";

// browser-route-module:routes/_index.tsx?browser
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/routes/_index.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/components/Records.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Records(props) {
  const [search, setSearch] = (0, import_react2.useState)("");
  const { records = [] } = props;
  console.log(setSearch);
  return records.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12 lg:grid-cols-3", children: records.filter((val) => {
    var _a;
    if (setSearch == "") {
      return val;
    } else if ((_a = val.title) == null ? void 0 : _a.toLowerCase().includes(search)) {
      return val;
    }
  }).map((record) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "group relative flex flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative overflow-hidden transition-all duration-200 ease-in-out group-hover:scale-105 group-hover:opacity-90", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute z-0 h-48 w-[200%] translate-x-20 translate-y-20 -rotate-45 dark:bg-gradient-to-b from-black to-transparent opacity-25 mix-blend-overlay transition-transform duration-500 ease-in-out group-hover:translate-x-10 group-hover:translate-y-10 group-hover:opacity-75" }, void 0, false, {
        fileName: "app/components/Records.tsx",
        lineNumber: 36,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RecordCover, { image: record.image, title: record.title }, void 0, false, {
        fileName: "app/components/Records.tsx",
        lineNumber: 37,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Records.tsx",
      lineNumber: 35,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col", children: [
      (record == null ? void 0 : record.slug) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Link,
        {
          prefetch: "intent",
          to: record == null ? void 0 : record.slug,
          className: "text-base",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute inset-0" }, void 0, false, {
            fileName: "app/components/Records.tsx",
            lineNumber: 48,
            columnNumber: 19
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/components/Records.tsx",
          lineNumber: 41,
          columnNumber: 17
        },
        this
      ) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "pt-4 text-2xl font-bold tracking-tighter", children: record.title }, void 0, false, {
        fileName: "app/components/Records.tsx",
        lineNumber: 51,
        columnNumber: 17
      }, this),
      (record == null ? void 0 : record.artist) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bg-black font-bold leading-none tracking-tighter text-white", children: record.artist }, void 0, false, {
        fileName: "app/components/Records.tsx",
        lineNumber: 56,
        columnNumber: 17
      }, this) : null
    ] }, void 0, true, {
      fileName: "app/components/Records.tsx",
      lineNumber: 39,
      columnNumber: 13
    }, this)
  ] }, record._id, true, {
    fileName: "app/components/Records.tsx",
    lineNumber: 34,
    columnNumber: 11
  }, this)) }, void 0, false, {
    fileName: "app/components/Records.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "prose prose-xl mx-auto bg-green-50 p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "No records found, yet!" }, void 0, false, {
      fileName: "app/components/Records.tsx",
      lineNumber: 66,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/studio", children: "Log in to your Sanity Studio" }, void 0, false, {
        fileName: "app/components/Records.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this),
      " and start creating content!"
    ] }, void 0, true, {
      fileName: "app/components/Records.tsx",
      lineNumber: 67,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Records.tsx",
    lineNumber: 65,
    columnNumber: 5
  }, this);
}

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-7M2M6SRJ.css";

// app/routes/_index.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var links = () => {
  return [{ rel: "stylesheet", href: tailwind_default }];
};
var meta = ({ matches }) => {
  const rootData = matches.find((match) => match.id === `root`);
  const home = rootData ? rootData.data.home : null;
  const title = [home == null ? void 0 : home.title, home == null ? void 0 : home.siteTitle].filter(Boolean).join(" | ");
  return [{ title }];
};
function Index() {
  const { records = [], query, params } = useLoaderData();
  const { home, query: homeQuery, params: homeParams } = useRootLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-cols-1 gap-6 md:gap-12", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      PreviewWrapper,
      {
        data: home,
        render: (data) => (data == null ? void 0 : data.title) ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Title, { children: data.title }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 77,
          columnNumber: 39
        }, this) : null,
        query: homeQuery,
        params: homeParams
      },
      void 0,
      false,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 75,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      PreviewWrapper,
      {
        data: records,
        render: (data) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Records, { records: data != null ? data : [] }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 83,
          columnNumber: 25
        }, this),
        query,
        params
      },
      void 0,
      false,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 81,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 74,
    columnNumber: 5
  }, this);
}
export {
  Index as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/_index-QLPKAXH6.js.map
