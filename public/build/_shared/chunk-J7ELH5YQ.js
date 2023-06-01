import {
  require_image_url_umd
} from "/build/_shared/chunk-E7KB5GSM.js";
import {
  projectDetails
} from "/build/_shared/chunk-KCXGHVR5.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-V4O2SHX5.js";
import {
  __toESM,
  init_buffer,
  init_dirname,
  init_filename,
  init_global,
  init_process
} from "/build/_shared/chunk-I4IZRGLP.js";

// app/components/Title.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Title(props) {
  return props.children ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-bold max-w-4xl text-4xl font-bold tracking-tighter md:text-4xl lg:text-5xl xl:text-7xl", children: props.children }, void 0, false, {
    fileName: "app/components/Title.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this) : null;
}

// app/components/RecordCover.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_image_url = __toESM(require_image_url_umd());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function RecordCover(props) {
  var _a;
  const { title, image } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "aspect-square light:bg-white", children: image ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "img",
      {
        className: "h-auto w-full object-cover shadow-black transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-cyan-200",
        src: (0, import_image_url.default)(projectDetails()).image(image.asset._ref).height(800).width(800).fit("max").auto("format").url(),
        alt: (_a = String(title)) != null ? _a : ``,
        loading: "lazy"
      },
      void 0,
      false,
      {
        fileName: "app/components/RecordCover.tsx",
        lineNumber: 22,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "p-5 bg-black", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h5", { className: " text-2xl font-bold tracking-tight text-gray-900 dark:text-white items-center", children: title }, void 0, false, {
        fileName: "app/components/RecordCover.tsx",
        lineNumber: 39,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mb-3 font-normal text-gray-700 dark:text-gray-40", children: "Here are the biggest enterprise technology acquisitions of 2021 so far." }, void 0, false, {
        fileName: "app/components/RecordCover.tsx",
        lineNumber: 41,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { className: "btn btn-sm bg-neutral-focus", children: "read more" }, void 0, false, {
        fileName: "app/components/RecordCover.tsx",
        lineNumber: 42,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/RecordCover.tsx",
      lineNumber: 35,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/RecordCover.tsx",
    lineNumber: 21,
    columnNumber: 9
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex aspect-square w-full items-center justify-center bg-gray-100 text-gray-500", children: title != null ? title : `Missing Record art` }, void 0, false, {
    fileName: "app/components/RecordCover.tsx",
    lineNumber: 48,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/RecordCover.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

export {
  RecordCover,
  Title
};
//# sourceMappingURL=/build/_shared/chunk-J7ELH5YQ.js.map
