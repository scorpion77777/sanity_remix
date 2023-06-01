import {
  useRouteLoaderData
} from "/build/_shared/chunk-SJDDFQ2Q.js";
import {
  projectDetails
} from "/build/_shared/chunk-KCXGHVR5.js";
import {
  require_jsx_runtime
} from "/build/_shared/chunk-EZIV2XCM.js";
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

// app/lib/useRootLoaderData.ts
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
function useRootLoaderData() {
  const data = useRouteLoaderData(`root`);
  return data;
}

// app/components/PreviewWrapper.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// node_modules/@sanity/preview-kit/dist/index.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react2 = __toESM(require_react(), 1);

// node_modules/suspend-react/dist/index.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var globalCache = [];
function shallowEqualArrays(arrA, arrB, equal = (a, b) => a === b) {
  if (arrA === arrB)
    return true;
  if (!arrA || !arrB)
    return false;
  const len = arrA.length;
  if (arrB.length !== len)
    return false;
  for (let i = 0; i < len; i++)
    if (!equal(arrA[i], arrB[i]))
      return false;
  return true;
}
function query(fn, keys, preload = false, config = {}) {
  for (const entry2 of globalCache) {
    if (shallowEqualArrays(keys, entry2.keys, entry2.equal)) {
      if (preload)
        return void 0;
      if (Object.prototype.hasOwnProperty.call(entry2, "error"))
        throw entry2.error;
      if (Object.prototype.hasOwnProperty.call(entry2, "response"))
        return entry2.response;
      if (!preload)
        throw entry2.promise;
    }
  }
  const entry = {
    keys,
    equal: config.equal,
    promise: (
      // Execute the promise
      fn(...keys).then((response) => entry.response = response).then(() => {
        if (config.lifespan && config.lifespan > 0) {
          setTimeout(() => {
            const index = globalCache.indexOf(entry);
            if (index !== -1)
              globalCache.splice(index, 1);
          }, config.lifespan);
        }
      }).catch((error) => entry.error = error)
    )
  };
  globalCache.push(entry);
  if (!preload)
    throw entry.promise;
  return void 0;
}
var suspend = (fn, keys, config) => query(fn, keys, false, config);

// node_modules/@sanity/preview-kit/dist/index.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var _checkAuth = async (projectId2, token) => {
  const headers = token ? {
    Authorization: "Bearer ".concat(token)
  } : void 0;
  const res = await fetch("https://".concat(projectId2, ".api.sanity.io/v1/users/me"), {
    credentials: "include",
    headers
  });
  const json = await res.json();
  return Boolean(json == null ? void 0 : json.id);
};
var _lazyGroqStore = async () => {
  const pkg = await import("/build/_shared/index.browser-WC4HWTKQ.js");
  const {
    groqStore
  } = "default" in pkg ? pkg.default : pkg;
  return groqStore;
};
var _lazyEventSourcePolyfill = async () => {
  const pkg = await import("/build/_shared/browser-RMGMSBAI.js");
  const EventSourcePolyfill = "default" in pkg ? pkg.default : pkg;
  return EventSourcePolyfill;
};
function useParams(params) {
  const stringifiedParams = (0, import_react2.useMemo)(() => JSON.stringify(params || {}), [params]);
  return (0, import_react2.useMemo)(() => JSON.parse(stringifiedParams), [stringifiedParams]);
}
var _definePreview = (_ref) => {
  let {
    projectId: projectId2,
    dataset: dataset2,
    documentLimit = 3e3,
    subscriptionThrottleMs = 10,
    overlayDrafts = true,
    listen = true,
    importEventSourcePolyfill,
    importGroqStore,
    preload,
    onPublicAccessOnly,
    checkAuth,
    includeTypes
  } = _ref;
  if (!projectId2) {
    console.warn("No projectId set for createPreviewHook, returning dummy hook");
    const usePreview2 = function usePreview22() {
      console.warn("The hook returned by createPreviewHook is a dummy as there is no projectId set, returning null");
      return null;
    };
    return usePreview2;
  }
  let store;
  return function usePreview2(token, query2, _params, _serverSnapshot) {
    if (typeof document === "undefined") {
      throw new Error("Calling usePreview outside a browser environment isn't supported. Ensure the component using the hook is only rendering on the client. For example by wrapping it in PreviewSuspense.");
    }
    if (!token && token !== null) {
      throw new Error("No `token` given to usePreview hook, if this is intentional then set it to `null`");
    }
    const [serverSnapshot] = (0, import_react2.useState)(() => _serverSnapshot);
    const params = useParams(_params);
    if (!store) {
      if (onPublicAccessOnly) {
        const hasAuth = checkAuth(projectId2, token);
        if (!hasAuth) {
          onPublicAccessOnly();
        }
      }
      const groqStore = importGroqStore();
      store = groqStore({
        projectId: projectId2,
        dataset: dataset2,
        documentLimit,
        subscriptionThrottleMs,
        includeTypes,
        token: token === null ? void 0 : token,
        // Lazy load the huge `@sanity/eventsource/browser` polyfill, but only if a token is specified
        EventSource: token === null ? void 0 : importEventSourcePolyfill(),
        listen,
        overlayDrafts
      });
    }
    const initial = serverSnapshot != null ? serverSnapshot : preload(store, query2, params);
    const syncStore = (0, import_react2.useMemo)(() => {
      let snapshot = initial;
      return {
        getServerSnapshot: serverSnapshot === void 0 ? void 0 : () => serverSnapshot,
        getSnapshot: () => snapshot,
        subscribe: (onStoreChange) => {
          let subscription;
          const handleError = (err) => {
            console.error("Error thrown in the usePreviewHook subscription", err);
            throw err;
          };
          if (listen) {
            subscription = store.subscribe(query2, typeof params === "undefined" ? {} : params, (err, result) => {
              if (err) {
                handleError(err);
              } else {
                snapshot = result;
                onStoreChange();
              }
            });
          } else {
            store.query(query2, params).then((result) => {
              snapshot = result;
              onStoreChange();
            }).catch(handleError);
          }
          return () => subscription == null ? void 0 : subscription.unsubscribe();
        }
      };
    }, [initial, params, query2, serverSnapshot]);
    (0, import_react2.useEffect)(() => {
      const callback = () => {
        store.close();
      };
      window.addEventListener("beforeunload", callback);
      return () => window.removeEventListener("beforeunload", callback);
    }, []);
    return (0, import_react2.useSyncExternalStore)(syncStore.subscribe, syncStore.getSnapshot, syncStore.getServerSnapshot);
  };
};
var _preloadQuery = (store, query2, params) => (
  // eslint-disable-next-line no-warning-comments
  // @todo: fix the casting to any here
  store.query(query2, params)
);
var definePreview = (config) => _definePreview({
  ...config,
  importEventSourcePolyfill: () => suspend(() => _lazyEventSourcePolyfill(), ["@sanity/preview-kit", "@sanity/eventsource/browser"]),
  importGroqStore: () => suspend(() => _lazyGroqStore(), ["@sanity/preview-kit", "@sanity/groq-store"]),
  preload: (store, query2, params) => suspend(() => _preloadQuery(store, query2, params), ["@sanity/preview-kit", "preload", query2, JSON.stringify(params != null ? params : {})]),
  checkAuth: (projectId2, token) => suspend(() => _checkAuth(projectId2, token), ["@sanity/preview-kit", "checkAuth", projectId2, token])
});
function PreviewSuspense(_ref2) {
  let {
    children,
    fallback
  } = _ref2;
  const [mounted, mount] = (0, import_react2.useReducer)(() => true, false);
  (0, import_react2.useEffect)(mount, [mount]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.Suspense, {
    fallback,
    children: mounted ? children : fallback
  });
}

// app/components/PreviewWrapper.tsx
var import_react3 = __toESM(require_react());

// app/components/Loading.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Loading() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "animate-pulse border border-dashed border-red-500 bg-red-50 p-8 text-center", children: "Loading preview..." }, void 0, false, {
    fileName: "app/components/Loading.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/components/PreviewWrapper.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var { projectId, dataset } = projectDetails();
var usePreview = definePreview({ projectId, dataset });
function PreviewWrapper(props) {
  const {
    // Given this data OR if preview is active, draft data
    data,
    // Render this component using the data
    render,
    // If preview mode is active, listen to this query
    query: query2 = null,
    // With these params
    params = {},
    // And fallback to this while loading
    fallback = /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Loading, {}, void 0, false, {
      fileName: "app/components/PreviewWrapper.tsx",
      lineNumber: 35,
      columnNumber: 16
    }, this)
  } = props;
  const { preview, token } = useRootLoaderData();
  if (!preview || !query2) {
    const Component = render(data);
    return Component && (0, import_react3.isValidElement)(Component) ? Component : null;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PreviewSuspense, { fallback, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    PreviewSuspended,
    {
      query: query2,
      render,
      params: params != null ? params : {},
      token
    },
    void 0,
    false,
    {
      fileName: "app/components/PreviewWrapper.tsx",
      lineNumber: 47,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "app/components/PreviewWrapper.tsx",
    lineNumber: 46,
    columnNumber: 5
  }, this);
}
function PreviewSuspended(props) {
  const { query: query2, params = {}, token = null, render } = props;
  const previewData = usePreview(token, query2, params);
  const Component = render(previewData);
  return Component && (0, import_react3.isValidElement)(Component) ? Component : null;
}

export {
  useRootLoaderData,
  PreviewWrapper
};
//# sourceMappingURL=/build/_shared/chunk-IKQGDK4R.js.map
