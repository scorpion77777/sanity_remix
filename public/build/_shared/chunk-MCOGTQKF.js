import {
  require_hashlru,
  require_json_inspector
} from "/build/_shared/chunk-YO7MURLU.js";
import {
  BackLink,
  ChildLink,
  DeskToolContext,
  DeskToolProvider,
  DocTitle,
  DocumentPaneContext,
  HistoryRestoreAction,
  LOADING_PANE,
  PANE_COLLAPSED_WIDTH,
  PANE_DEFAULT_MIN_WIDTH,
  Pane,
  PaneContent,
  PaneContextMenuButton,
  PaneFooter,
  PaneHeader,
  PaneLayoutContext,
  PaneRouterContext,
  ParameterizedLink,
  ReferenceChildLink,
  Root,
  SerializeError,
  require_camelCase,
  require_isNumber,
  require_kebabCase,
  setActivePanes,
  useDocumentPane,
  usePane,
  usePaneLayout,
  usePaneRouter
} from "/build/_shared/chunk-XANHPADF.js";
import {
  AddCircleIcon,
  ArrowLeftIcon,
  AvatarStack,
  Badge,
  BinaryDocumentIcon,
  BoundaryElementProvider,
  Box,
  Button,
  Card,
  Ce,
  ChangeConnectorRoot,
  ChangeFieldWrapper,
  ChangeList,
  ChevronDownIcon,
  CloseIcon,
  Code,
  CommandList,
  Container,
  Dialog,
  DialogProvider,
  DiffTooltip,
  DocumentChangeContext,
  EarthAmericasIcon,
  EditIcon,
  ErrorBoundary,
  ErrorOutlineIcon,
  Flex,
  FormBuilder,
  GetHookCollectionState,
  Grid,
  Heading,
  Hotkeys,
  InfoOutlineIcon,
  Inline,
  Label,
  LayerProvider,
  LegacyLayerProvider,
  Menu,
  MenuButton,
  MenuItem,
  NEVER,
  NoChanges,
  PlayIcon,
  Popover,
  PortalProvider,
  PresenceOverlay,
  PublishIcon,
  ReadOnlyIcon,
  ReferenceInputOptionsProvider,
  ReplaySubject,
  RestoreIcon,
  ScrollContainer,
  SearchIcon,
  SelectIcon,
  SourceProvider,
  Spinner,
  SplitVerticalIcon,
  Stack,
  SyncIcon,
  Tab,
  TabList,
  TabPanel,
  Text,
  TextInput,
  TextWithTone,
  Tooltip,
  TrashIcon,
  Ue,
  UnpublishIcon,
  UserAvatar,
  ValidationList,
  WarningOutlineIcon,
  _isCustomDocumentTypeDefinition,
  _raf2,
  catchError,
  concat,
  createPatchChannel,
  debounceTime,
  delay,
  distinctUntilChanged,
  firstValueFrom,
  focusFirstDescendant,
  format,
  from,
  fromMutationPatches,
  fromString,
  generateHelpUrl,
  get,
  getDraftId,
  getExpandOperations,
  getPublishedId,
  isActionEnabled,
  isDev,
  isObservable,
  isRecord$2,
  isString,
  isValidationErrorMarker,
  isValidationInfoMarker,
  isValidationWarningMarker,
  map,
  mapTo,
  merge,
  motion,
  nanoid,
  of,
  pairwise,
  publishReplay,
  refCount,
  rem,
  require_find,
  require_isEqual,
  require_isString,
  require_lib,
  require_negate,
  require_omit,
  require_pickBy,
  require_react_is,
  require_speakingurl,
  require_startCase,
  require_uniq,
  require_uniqueId,
  require_upperFirst,
  resolveKeyedPath,
  scan,
  setAtPath,
  startWith,
  styled_components_browser_esm_default,
  switchMap,
  tap,
  toMutationPatches,
  toString,
  useAsObservable,
  useClickOutside,
  useConnectionState,
  useCurrentUser,
  useDocumentOperation,
  useDocumentOperationEvent,
  useDocumentPresence,
  useDocumentPreview,
  useDocumentPreviewStore,
  useDocumentStore,
  useDocumentType,
  useDocumentValuePermissions,
  useEditState,
  useElementRect,
  useFormState,
  useGlobalKeyDown,
  useInitialValue,
  useLayer,
  useMemoObservable,
  usePortal,
  usePresenceStore,
  useRouter,
  useRouterState,
  useSchema,
  useSettingsStore,
  useSource,
  useSyncState,
  useTemplatePermissions,
  useTemplates,
  useTimeAgo,
  useTimelineSelector,
  useTimelineStore,
  useToast,
  useUnique,
  useValidationStatus,
  useWorkspace,
  useZIndex,
  v4_default,
  visitDiff
} from "/build/_shared/chunk-4NY5OEBK.js";
import {
  require_jsx_runtime
} from "/build/_shared/chunk-EZIV2XCM.js";
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

// node_modules/sanity/lib/_chunks/index-1873ab3b.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_react = __toESM(require_react());
var import_omit = __toESM(require_omit());
var import_isEqual = __toESM(require_isEqual());
var import_camelCase = __toESM(require_camelCase());
var import_speakingurl = __toESM(require_speakingurl());
var import_uniq = __toESM(require_uniq());
var import_kebabCase = __toESM(require_kebabCase());
var import_pickBy = __toESM(require_pickBy());
var import_find = __toESM(require_find());
var import_uniqueId = __toESM(require_uniqueId());
var import_react_is = __toESM(require_react_is());
var import_startCase = __toESM(require_startCase());
var import_is_hotkey = __toESM(require_lib());
var import_isNumber = __toESM(require_isNumber());
var import_isString = __toESM(require_isString());
var import_upperFirst = __toESM(require_upperFirst());
var import_react_json_inspector = __toESM(require_json_inspector());
var import_hashlru = __toESM(require_hashlru());
var import_negate = __toESM(require_negate());
var _templateObject;
var _templateObject2;
var _templateObject3;
var _templateObject4;
var _templateObject5;
var _templateObject6;
var _templateObject7;
var _templateObject8;
var _templateObject9;
var _templateObject10;
var _templateObject11;
var _templateObject12;
var _templateObject13;
var _templateObject14;
var _templateObject15;
var _templateObject16;
var _templateObject17;
var _templateObject18;
var _templateObject19;
var _templateObject20;
var _templateObject21;
var _templateObject22;
var _templateObject23;
var _templateObject24;
var _templateObject25;
var _templateObject26;
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function Delay(_ref) {
  let {
    children,
    ms = 0
  } = _ref;
  const [ready, setReady] = (0, import_react.useState)(ms <= 0);
  (0, import_react.useEffect)(() => {
    if (ms <= 0) {
      return void 0;
    }
    const timeoutId = setTimeout(() => setReady(true), ms);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [ms]);
  if (!ready || !children) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {});
  }
  return typeof children === "function" ? children() : children;
}
var RenderActionCollectionState = (props) => {
  const {
    actions,
    children,
    actionProps,
    onActionComplete
  } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GetHookCollectionState, {
    onReset: onActionComplete,
    hooks: actions,
    args: actionProps,
    children
  });
};
var RenderBadgeCollectionState = (props) => {
  const {
    badges,
    children,
    badgeProps,
    ...rest
  } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GetHookCollectionState, {
    ...rest,
    hooks: badges,
    args: badgeProps,
    children
  });
};
var emptyArray = [];
function PaneRouterProvider(props) {
  const {
    children,
    flatIndex,
    index: index2,
    params,
    payload,
    siblingIndex
  } = props;
  const {
    navigate,
    navigateIntent
  } = useRouter();
  const routerState = useRouterState();
  const routerPaneGroups = (0, import_react.useMemo)(() => (routerState == null ? void 0 : routerState.panes) || emptyArray, [routerState == null ? void 0 : routerState.panes]);
  const groupIndex = index2 - 1;
  const modifyCurrentGroup = (0, import_react.useCallback)((modifier) => {
    const currentGroup = routerPaneGroups[groupIndex] || [];
    const currentItem = currentGroup[siblingIndex];
    const nextGroup = modifier(currentGroup, currentItem);
    const nextPanes = [...routerPaneGroups.slice(0, groupIndex), nextGroup, ...routerPaneGroups.slice(groupIndex + 1)];
    const nextRouterState = {
      ...routerState || {},
      panes: nextPanes
    };
    setTimeout(() => navigate(nextRouterState), 0);
    return nextRouterState;
  }, [groupIndex, navigate, routerPaneGroups, routerState, siblingIndex]);
  const setPayload = (0, import_react.useCallback)((nextPayload) => {
    modifyCurrentGroup((siblings, item) => [...siblings.slice(0, siblingIndex), {
      ...item,
      payload: nextPayload
    }, ...siblings.slice(siblingIndex + 1)]);
  }, [modifyCurrentGroup, siblingIndex]);
  const setParams = (0, import_react.useCallback)((nextParams) => {
    modifyCurrentGroup((siblings, item) => [...siblings.slice(0, siblingIndex), {
      ...item,
      params: nextParams
    }, ...siblings.slice(siblingIndex + 1)]);
  }, [modifyCurrentGroup, siblingIndex]);
  const handleEditReference = (0, import_react.useCallback)((_ref2) => {
    let {
      id,
      parentRefPath,
      type,
      template
    } = _ref2;
    navigate({
      panes: [...routerPaneGroups.slice(0, groupIndex + 1), [{
        id,
        params: {
          template: template.id,
          parentRefPath: toString(parentRefPath),
          type
        },
        payload: template.params
      }]]
    });
  }, [groupIndex, navigate, routerPaneGroups]);
  const ctx = (0, import_react.useMemo)(() => ({
    // Zero-based index (position) of pane, visually
    index: flatIndex,
    // Zero-based index of pane group (within URL structure)
    groupIndex,
    // Zero-based index of pane within sibling group
    siblingIndex,
    // Payload of the current pane
    payload,
    // Params of the current pane
    params,
    // Whether or not the pane has any siblings (within the same group)
    hasGroupSiblings: routerPaneGroups[groupIndex] ? routerPaneGroups[groupIndex].length > 1 : false,
    // The length of the current group
    groupLength: routerPaneGroups[groupIndex] ? routerPaneGroups[groupIndex].length : 0,
    // Current router state for the "panes" property
    routerPanesState: routerPaneGroups,
    // Curried StateLink that passes the correct state automatically
    ChildLink,
    // Curried StateLink that pops off the last pane group
    BackLink,
    // A specialized `ChildLink` that takes in the needed props to open a
    // referenced document to the right
    ReferenceChildLink,
    // Similar to `ReferenceChildLink` expect without the wrapping component
    handleEditReference,
    // Curried StateLink that passed the correct state, but merges params/payload
    ParameterizedLink,
    // Replaces the current pane with a new one
    replaceCurrent: function() {
      let opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      modifyCurrentGroup(() => [{
        id: opts.id || "",
        payload: opts.payload,
        params: opts.params || {}
      }]);
    },
    // Removes the current pane from the group
    closeCurrent: () => {
      modifyCurrentGroup((siblings, item) => siblings.length > 1 ? siblings.filter((sibling) => sibling !== item) : siblings);
    },
    // Duplicate the current pane, with optional overrides for payload, parameters
    duplicateCurrent: (options) => {
      modifyCurrentGroup((siblings, item) => {
        const duplicatedItem = {
          ...item,
          payload: (options == null ? void 0 : options.payload) || item.payload,
          params: (options == null ? void 0 : options.params) || item.params
        };
        return [...siblings.slice(0, siblingIndex), duplicatedItem, ...siblings.slice(siblingIndex)];
      });
    },
    // Set the view for the current pane
    setView: (viewId) => {
      const restParams = (0, import_omit.default)(params, "view");
      return setParams(viewId ? {
        ...restParams,
        view: viewId
      } : restParams);
    },
    // Set the parameters for the current pane
    setParams,
    // Set the payload for the current pane
    setPayload,
    // Proxied navigation to a given intent. Consider just exposing `router` instead?
    navigateIntent
  }), [flatIndex, groupIndex, handleEditReference, modifyCurrentGroup, navigateIntent, params, payload, routerPaneGroups, setParams, setPayload, siblingIndex]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaneRouterContext.Provider, {
    value: ctx,
    children
  });
}
function _calcPaneResize(cache, left, right, deltaX) {
  var _a, _b;
  const sum = {
    flex: cache.left.flex + cache.right.flex,
    width: cache.left.width + cache.right.width
  };
  const leftMinWidth = (_a = left.minWidth) != null ? _a : PANE_DEFAULT_MIN_WIDTH;
  const rightMinWidth = (_b = right.minWidth) != null ? _b : PANE_DEFAULT_MIN_WIDTH;
  const leftMaxWidth = Math.min(left.maxWidth || Infinity, sum.width - rightMinWidth);
  const rightMaxWidth = Math.min(right.maxWidth || Infinity, sum.width - leftMinWidth);
  let minDeltaX = leftMinWidth - cache.left.width;
  const rightMinDeltaX = cache.right.width - rightMaxWidth;
  if (minDeltaX < rightMinDeltaX) {
    minDeltaX = rightMinDeltaX;
  }
  let maxDeltaX = cache.right.width - rightMinWidth;
  const leftMaxDeltaX = leftMaxWidth - cache.left.width;
  if (maxDeltaX > leftMaxDeltaX) {
    maxDeltaX = leftMaxDeltaX;
  }
  const _deltaX = Math.min(Math.max(deltaX, minDeltaX), maxDeltaX);
  const leftW = cache.left.width + _deltaX;
  const rightW = cache.right.width - _deltaX;
  const leftFlex = leftW / sum.width * sum.flex;
  const rightFlex = rightW / sum.width * sum.flex;
  return {
    leftFlex,
    leftW,
    rightFlex,
    rightW
  };
}
function _getDOMPath(rootElement, el) {
  const path = [];
  let e = el;
  while (e !== rootElement) {
    const parentElement = e.parentElement;
    if (!parentElement)
      return path;
    const children = Array.from(parentElement.childNodes);
    const index2 = children.indexOf(e);
    path.unshift(index2);
    if (parentElement === rootElement) {
      return path;
    }
    e = parentElement;
  }
  return path;
}
var EMPTY_PATH = [];
function _sortElements(rootElement, elements) {
  const map2 = /* @__PURE__ */ new WeakMap();
  for (const element of elements) {
    map2.set(element, _getDOMPath(rootElement, element));
  }
  const _sortByElementPath = (a, b) => {
    const _a = map2.get(a) || EMPTY_PATH;
    const _b = map2.get(b) || EMPTY_PATH;
    const len = Math.max(_a.length, _b.length);
    for (let i = 0; i < len; i += 1) {
      const aIndex = _a[i] || -1;
      const bIndex = _b[i] || -1;
      if (aIndex !== bIndex) {
        return aIndex - bIndex;
      }
    }
    return 0;
  };
  elements.sort(_sortByElementPath);
}
function createPaneLayoutController() {
  const observers = [];
  const elements = [];
  const optionsMap = /* @__PURE__ */ new WeakMap();
  const userCollapsedElementSet = /* @__PURE__ */ new Set();
  const cache = {};
  let rootElement = null;
  let rootWidth = 0;
  let expandedElement = null;
  let resizeDataMap = /* @__PURE__ */ new Map();
  let resizing = false;
  function collapse(element) {
    userCollapsedElementSet.add(element);
    if (expandedElement === element) {
      expandedElement = null;
    }
    _notifyObservers();
  }
  function expand(element) {
    userCollapsedElementSet.delete(element);
    expandedElement = element;
    _notifyObservers();
  }
  function mount(element, options) {
    optionsMap.set(element, {
      ...options,
      original: options
    });
    elements.push(element);
    if (rootElement) {
      _sortElements(rootElement, elements);
    }
    expand(element);
    return () => {
      const idx = elements.indexOf(element);
      if (idx > -1) {
        elements.splice(idx, 1);
      }
      optionsMap.delete(element);
      _notifyObservers();
    };
  }
  function resize(type, leftElement, deltaX) {
    var _a, _b, _c, _d;
    const leftIndex = elements.indexOf(leftElement);
    const leftOptions = optionsMap.get(leftElement);
    if (!leftOptions)
      return;
    const rightElement = elements[leftIndex + 1];
    const rightOptions = optionsMap.get(rightElement);
    if (!rightOptions)
      return;
    if (type === "start") {
      resizing = true;
      cache.left = {
        element: leftElement,
        flex: leftOptions.flex || 1,
        width: leftElement.offsetWidth
      };
      cache.right = {
        element: rightElement,
        flex: rightOptions.flex || 1,
        width: rightElement.offsetWidth
      };
      _notifyObservers();
    }
    if (type === "move" && cache.left && cache.right) {
      resizeDataMap = /* @__PURE__ */ new Map();
      const {
        leftW,
        rightW,
        leftFlex,
        rightFlex
      } = _calcPaneResize(cache, leftOptions, rightOptions, deltaX);
      resizeDataMap.set(leftElement, {
        flex: leftFlex,
        width: leftW
      });
      resizeDataMap.set(rightElement, {
        flex: rightFlex,
        width: rightW
      });
      _notifyObservers();
    }
    if (type === "end") {
      resizing = false;
      const leftResizeData = resizeDataMap.get(leftElement);
      const rightResizeData = resizeDataMap.get(rightElement);
      optionsMap.set(leftElement, {
        ...leftOptions,
        currentMinWidth: 0,
        currentMaxWidth: (_a = leftOptions.maxWidth) != null ? _a : Infinity,
        flex: (_b = leftResizeData == null ? void 0 : leftResizeData.flex) != null ? _b : leftOptions.flex
      });
      optionsMap.set(rightElement, {
        ...rightOptions,
        currentMinWidth: 0,
        currentMaxWidth: (_c = leftOptions.maxWidth) != null ? _c : Infinity,
        flex: (_d = rightResizeData == null ? void 0 : rightResizeData.flex) != null ? _d : rightOptions.flex
      });
      resizeDataMap = /* @__PURE__ */ new Map();
      delete cache.left;
      delete cache.right;
      _notifyObservers();
    }
  }
  function setRootElement(nextRootElement) {
    rootElement = nextRootElement;
  }
  function setRootWidth(nextRootWidth) {
    rootWidth = nextRootWidth;
    _notifyObservers();
  }
  function subscribe(observer) {
    observers.push(observer);
    return () => {
      const idx = observers.push(observer);
      if (idx > -1) {
        observers.splice(idx, 1);
      }
    };
  }
  return {
    collapse,
    expand,
    mount,
    resize,
    setRootElement,
    setRootWidth,
    subscribe
  };
  function _notifyObservers() {
    var _a, _b, _c, _d;
    if (!rootWidth)
      return;
    const _elements = [];
    for (const element of elements) {
      if (element !== expandedElement) {
        _elements.unshift(element);
      }
    }
    if (expandedElement) {
      _elements.unshift(expandedElement);
    }
    const dataMap = /* @__PURE__ */ new WeakMap();
    const len = _elements.length;
    const lastElement = _elements[0];
    const collapsedWidth = (len - 1) * PANE_COLLAPSED_WIDTH;
    let remaingWidth = rootWidth - collapsedWidth;
    for (const element of _elements) {
      const options = optionsMap.get(element);
      if (!options) {
        continue;
      }
      const minWidth = options.currentMinWidth || options.minWidth || PANE_DEFAULT_MIN_WIDTH;
      const isLast = element === lastElement;
      const userCollapsed = userCollapsedElementSet.has(element);
      const sizeCollapsed = minWidth > remaingWidth;
      const collapsed = isLast ? false : userCollapsed || sizeCollapsed;
      const resizeData = resizeDataMap.get(element);
      dataMap.set(element, {
        element,
        collapsed,
        currentMinWidth: (_a = resizeData == null ? void 0 : resizeData.width) != null ? _a : options.currentMinWidth,
        currentMaxWidth: (_b = resizeData == null ? void 0 : resizeData.width) != null ? _b : options.currentMaxWidth,
        flex: (_d = (_c = resizeData == null ? void 0 : resizeData.flex) != null ? _c : options.flex) != null ? _d : 1
      });
      if (collapsed) {
        remaingWidth -= PANE_COLLAPSED_WIDTH;
      } else {
        remaingWidth -= minWidth - PANE_COLLAPSED_WIDTH;
      }
    }
    const panes = [];
    for (const element of elements) {
      const data = dataMap.get(element);
      if (data)
        panes.push(data);
    }
    for (const observer of observers) {
      observer({
        expandedElement: expandedElement || elements[elements.length - 1] || null,
        panes,
        resizing
      });
    }
  }
}
function PaneLayout(props) {
  const {
    children,
    minWidth,
    onCollapse,
    onExpand,
    ...restProps
  } = props;
  const controller = (0, import_react.useMemo)(() => createPaneLayoutController(), []);
  const [rootElement, setRootElement] = (0, import_react.useState)(null);
  const rootRect = useElementRect(rootElement);
  const width = (rootRect == null ? void 0 : rootRect.width) || 0;
  const collapsed = width === void 0 || !minWidth ? void 0 : width < minWidth;
  const [state, setState] = (0, import_react.useState)({
    expandedElement: null,
    panes: [],
    resizing: false
  });
  (0, import_react.useEffect)(() => controller.setRootElement(rootElement), [controller, rootElement]);
  (0, import_react.useEffect)(() => controller.setRootWidth(width), [controller, width]);
  (0, import_react.useEffect)(() => controller.subscribe(setState), [controller]);
  (0, import_react.useEffect)(() => {
    if (collapsed === void 0)
      return;
    if (collapsed && onCollapse)
      onCollapse();
    if (!collapsed && onExpand)
      onExpand();
  }, [collapsed, onCollapse, onExpand]);
  const paneLayout = (0, import_react.useMemo)(() => ({
    collapse: controller.collapse,
    collapsed,
    expand: controller.expand,
    expandedElement: state.expandedElement,
    mount: controller.mount,
    panes: state.panes,
    resize: controller.resize,
    resizing: state.resizing
  }), [collapsed, controller, state.expandedElement, state.panes, state.resizing]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaneLayoutContext.Provider, {
    value: paneLayout,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
      "data-ui": "PaneLayout",
      ...restProps,
      "data-collapsed": collapsed ? "" : void 0,
      "data-resizing": state.resizing ? "" : void 0,
      "data-mounted": width ? "" : void 0,
      ref: setRootElement,
      children
    })
  });
}
var PaneResolutionError = class extends Error {
  constructor(_ref3) {
    let {
      message,
      context,
      helpId,
      cause
    } = _ref3;
    super(message);
    this.context = context;
    this.helpId = helpId;
    this.cause = cause;
  }
};
var randomIdCache = /* @__PURE__ */ new WeakMap();
function assignId(obj) {
  const cachedValue = randomIdCache.get(obj);
  if (cachedValue)
    return cachedValue;
  const id = nanoid();
  randomIdCache.set(obj, id);
  return id;
}
var bindCache = /* @__PURE__ */ new WeakMap();
function memoBind(obj, methodKey) {
  const boundMethods = bindCache.get(obj) || /* @__PURE__ */ new Map();
  if (boundMethods) {
    const bound2 = boundMethods.get(methodKey);
    if (bound2)
      return bound2;
  }
  const method = obj[methodKey];
  if (typeof method !== "function") {
    throw new Error("Expected property `".concat(methodKey, "` to be a function but got ").concat(typeof method, " instead."));
  }
  const bound = method.bind(obj);
  boundMethods.set(methodKey, bound);
  bindCache.set(obj, boundMethods);
  return bound;
}
var isPromise = (thing) => {
  return !!thing && typeof (thing == null ? void 0 : thing.then) === "function";
};
var isSerializable = (thing) => {
  if (!isRecord$2(thing))
    return false;
  return typeof thing.serialize === "function";
};
var rethrowWithPaneResolutionErrors = (next) => (unresolvedPane, context, flatIndex) => {
  try {
    return next(unresolvedPane, context, flatIndex);
  } catch (e) {
    if (e instanceof PaneResolutionError) {
      throw e;
    }
    throw new PaneResolutionError({
      message: typeof (e == null ? void 0 : e.message) === "string" ? e.message : "",
      context,
      cause: e
    });
  }
};
var wrapWithPublishReplay = (next) => function() {
  return next(...arguments).pipe(
    // need to add publishReplay + refCount to ensure new subscribers always
    // get an emission. without this, memoized observables may get stuck
    // waiting for their first emissions resulting in a loading pane
    publishReplay(1),
    refCount()
  );
};
function createPaneResolver(middleware) {
  const resolvePane = rethrowWithPaneResolutionErrors(wrapWithPublishReplay(middleware((unresolvedPane, context, flatIndex) => {
    if (!unresolvedPane) {
      throw new PaneResolutionError({
        message: "Pane returned no child",
        context,
        helpId: "structure-item-returned-no-child"
      });
    }
    if (isPromise(unresolvedPane) || isObservable(unresolvedPane)) {
      return from(unresolvedPane).pipe(switchMap((result) => resolvePane(result, context, flatIndex)));
    }
    if (isSerializable(unresolvedPane)) {
      return resolvePane(unresolvedPane.serialize(context), context, flatIndex);
    }
    if (typeof unresolvedPane === "function") {
      return resolvePane(unresolvedPane(context.id, context), context, flatIndex);
    }
    return of(unresolvedPane);
  })));
  return resolvePane;
}
async function resolveIntent(options) {
  const resolvedPaneCache = /* @__PURE__ */ new Map();
  const memoize = (nextFn) => (unresolvedPane, context, flatIndex) => {
    const key = unresolvedPane && "".concat(assignId(unresolvedPane), "-").concat(context.path.join("__"));
    const cachedResolvedPane = key && resolvedPaneCache.get(key);
    if (cachedResolvedPane)
      return cachedResolvedPane;
    const result = nextFn(unresolvedPane, context, flatIndex);
    if (key)
      resolvedPaneCache.set(key, result);
    return result;
  };
  const resolvePane = createPaneResolver(memoize);
  const fallbackEditorPanes = [[{
    id: "__edit__".concat(options.params.id),
    params: {
      ...(0, import_omit.default)(options.params, ["id"]),
      type: options.params.type
    },
    payload: options.payload
  }]];
  async function traverse(_ref4) {
    let {
      currentId,
      flatIndex,
      intent,
      params,
      parent: parent2,
      path,
      payload,
      unresolvedPane,
      levelIndex,
      structureContext
    } = _ref4;
    var _a;
    if (!unresolvedPane)
      return [];
    const {
      id: targetId,
      type: schemaTypeName,
      ...otherParams
    } = params;
    const context = {
      id: currentId,
      splitIndex: 0,
      parent: parent2,
      path,
      index: flatIndex,
      params: {},
      payload: void 0,
      structureContext
    };
    const resolvedPane = await firstValueFrom(resolvePane(unresolvedPane, context, flatIndex));
    if (resolvedPane.type === "document" && resolvedPane.id === targetId) {
      return [{
        panes: [...path.slice(0, path.length - 1).map((i) => [{
          id: i
        }]), [{
          id: targetId,
          params: otherParams,
          payload
        }]],
        depthIndex: path.length,
        levelIndex
      }];
    }
    if (
      // if the resolve pane's `canHandleIntent` returns true, then resolve
      ((_a = resolvedPane.canHandleIntent) == null ? void 0 : _a.call(resolvedPane, intent, params, {
        pane: resolvedPane,
        index: flatIndex
      })) || // if the pane's `canHandleIntent` did not return true, then match against
      // this default case. we will resolve the intent if:
      resolvedPane.type === "documentList" && // 1. the schema type matches (this required for the document to render)
      resolvedPane.schemaTypeName === schemaTypeName && // 2. the filter is the default filter.
      //
      // NOTE: this case is to prevent false positive matches where the user
      // has configured a more specific filter for a particular type. In that
      // case, the user can implement their own `canHandleIntent` function
      resolvedPane.options.filter === "_type == $type"
    ) {
      return [{
        panes: [
          // map the current path to router panes
          ...path.map((id) => [{
            id
          }]),
          // then augment with the intents IDs and params
          [{
            id: params.id,
            params: otherParams,
            payload
          }]
        ],
        depthIndex: path.length,
        levelIndex
      }];
    }
    if (resolvedPane.type === "list" && resolvedPane.child && resolvedPane.items) {
      return (await Promise.all(resolvedPane.items.map((item, nextLevelIndex) => {
        if (item.type === "divider")
          return Promise.resolve([]);
        return traverse({
          currentId: item._id || item.id,
          flatIndex: flatIndex + 1,
          intent,
          params,
          parent: resolvedPane,
          path: [...path, item.id],
          payload,
          unresolvedPane: typeof resolvedPane.child === "function" ? memoBind(resolvedPane, "child") : resolvedPane.child,
          levelIndex: nextLevelIndex,
          structureContext
        });
      }))).flat();
    }
    return [];
  }
  const matchingPanes = await traverse({
    currentId: "root",
    flatIndex: 0,
    levelIndex: 0,
    intent: options.intent,
    params: options.params,
    parent: null,
    path: [],
    payload: options.payload,
    unresolvedPane: options.rootPaneNode,
    structureContext: options.structureContext
  });
  const closestPaneToRoot = matchingPanes.sort((a, b) => {
    if (a.depthIndex === b.depthIndex)
      return a.levelIndex - b.levelIndex;
    return a.depthIndex - b.depthIndex;
  })[0];
  if (closestPaneToRoot) {
    return closestPaneToRoot.panes;
  }
  return fallbackEditorPanes;
}
function useDeskTool() {
  const deskTool = (0, import_react.useContext)(DeskToolContext);
  if (!deskTool)
    throw new Error("DeskTool: missing context value");
  return deskTool;
}
var fallbackEditorChild = (nodeId, context) => {
  const id = nodeId.replace(/^__edit__/, "");
  const {
    params,
    payload,
    structureContext: {
      resolveDocumentNode
    }
  } = context;
  const {
    type,
    template
  } = params;
  if (!type) {
    throw new Error("Document type for document with ID ".concat(id, " was not provided in the router params."));
  }
  let defaultDocumentBuilder = resolveDocumentNode({
    schemaType: type,
    documentId: id
  });
  defaultDocumentBuilder = defaultDocumentBuilder.id("editor").title("Editor");
  if (template) {
    defaultDocumentBuilder = defaultDocumentBuilder.initialValueTemplate(template, payload);
  }
  return defaultDocumentBuilder.serialize();
};
function hashContext(context) {
  var _a, _b;
  return "contextHash(".concat(JSON.stringify({
    id: context.id,
    parentId: parent && assignId(parent),
    path: context.path,
    index: context.index,
    splitIndex: context.splitIndex,
    serializeOptionsIndex: (_a = context.serializeOptions) == null ? void 0 : _a.index,
    serializeOptionsPath: (_b = context.serializeOptions) == null ? void 0 : _b.path
  }), ")");
}
var hashResolvedPaneMeta = (meta) => {
  const normalized = {
    type: meta.type,
    id: meta.routerPaneSibling.id,
    params: meta.routerPaneSibling.params || {},
    payload: meta.routerPaneSibling.payload || null,
    flatIndex: meta.flatIndex,
    groupIndex: meta.groupIndex,
    siblingIndex: meta.siblingIndex,
    path: meta.path,
    paneNode: meta.type === "resolvedMeta" ? assignId(meta.paneNode) : null
  };
  return "metaHash(".concat(JSON.stringify(normalized), ")");
};
function resolvePaneTree(_ref5) {
  let {
    unresolvedPane,
    flattenedRouterPanes,
    parent: parent2,
    path,
    resolvePane,
    structureContext
  } = _ref5;
  const [current, ...rest] = flattenedRouterPanes;
  const next = rest[0];
  const context = {
    id: current.routerPaneSibling.id,
    splitIndex: current.siblingIndex,
    parent: parent2,
    path: [...path, current.routerPaneSibling.id],
    index: current.flatIndex,
    params: current.routerPaneSibling.params || {},
    payload: current.routerPaneSibling.payload,
    structureContext
  };
  try {
    return resolvePane(unresolvedPane, context, current.flatIndex).pipe(
      // this switch map receives a resolved pane
      switchMap((paneNode) => {
        const resolvedPaneMeta = {
          type: "resolvedMeta",
          ...current,
          paneNode,
          path: context.path
        };
        const loadingPanes = rest.map((i, restIndex) => {
          const loadingPanePath = [...context.path, ...rest.slice(restIndex).map((_, currentIndex) => "[".concat(i.flatIndex + currentIndex, "]"))];
          const loadingPane = {
            type: "loading",
            path: loadingPanePath,
            paneNode: null,
            ...i
          };
          return loadingPane;
        });
        if (!rest.length) {
          return of([resolvedPaneMeta]);
        }
        let nextStream;
        if (
          // the fallback editor case
          next == null ? void 0 : next.routerPaneSibling.id.startsWith("__edit__")
        ) {
          nextStream = resolvePaneTree({
            unresolvedPane: fallbackEditorChild,
            flattenedRouterPanes: rest,
            parent: parent2,
            path: context.path,
            resolvePane,
            structureContext
          });
        } else if (current.groupIndex === (next == null ? void 0 : next.groupIndex)) {
          nextStream = resolvePaneTree({
            unresolvedPane,
            flattenedRouterPanes: rest,
            parent: parent2,
            path,
            resolvePane,
            structureContext
          });
        } else {
          nextStream = resolvePaneTree({
            unresolvedPane: typeof paneNode.child === "function" ? memoBind(paneNode, "child") : paneNode.child,
            flattenedRouterPanes: rest,
            parent: paneNode,
            path: context.path,
            resolvePane,
            structureContext
          });
        }
        return concat(
          // we emit the loading panes first in a concat (this emits immediately)
          of([resolvedPaneMeta, ...loadingPanes]),
          // then whenever the next stream is done, the results will be combined.
          nextStream.pipe(map((nextResolvedPanes) => [resolvedPaneMeta, ...nextResolvedPanes]))
        );
      })
    );
  } catch (e) {
    if (e instanceof PaneResolutionError) {
      if (e.context) {
        console.warn("Pane resolution error at index ".concat(e.context.index).concat(e.context.splitIndex > 0 ? " for split pane index ".concat(e.context.splitIndex) : "", ": ").concat(e.message).concat(e.helpId ? " - see ".concat(generateHelpUrl(e.helpId)) : ""), e);
      }
      if (e.helpId === "structure-item-returned-no-child") {
        return of([]);
      }
    }
    throw e;
  }
}
function createResolvedPaneNodeStream(_ref6) {
  let {
    routerPanesStream,
    rootPaneNode,
    initialCacheState = {
      cacheKeysByFlatIndex: [],
      flattenedRouterPanes: [],
      resolvedPaneCache: /* @__PURE__ */ new Map(),
      resolvePane: () => NEVER
    },
    structureContext
  } = _ref6;
  const resolvedPanes$ = routerPanesStream.pipe(
    // add in implicit "root" router pane
    map((rawRouterPanes) => [[{
      id: "root"
    }], ...rawRouterPanes]),
    // create flattened router panes
    map((routerPanes) => {
      const flattenedRouterPanes = routerPanes.flatMap((routerPaneGroup, groupIndex) => routerPaneGroup.map((routerPaneSibling, siblingIndex) => ({
        routerPaneSibling,
        groupIndex,
        siblingIndex
      }))).map((i, index2) => ({
        ...i,
        flatIndex: index2
      }));
      return flattenedRouterPanes;
    }),
    // calculate a "diffIndex" used for clearing the memo cache
    startWith([]),
    pairwise(),
    map((_ref7) => {
      let [prev, curr] = _ref7;
      for (let i = 0; i < curr.length; i++) {
        const prevValue = prev[i];
        const currValue = curr[i];
        if (!(0, import_isEqual.default)(prevValue, currValue)) {
          return {
            flattenedRouterPanes: curr,
            diffIndex: i
          };
        }
      }
      return {
        flattenedRouterPanes: curr,
        diffIndex: curr.length
      };
    }),
    // create the memoized `resolvePane` function and manage the memo cache
    scan((acc, next) => {
      const {
        cacheKeysByFlatIndex,
        resolvedPaneCache
      } = acc;
      const {
        flattenedRouterPanes,
        diffIndex
      } = next;
      const beforeDiffIndex = cacheKeysByFlatIndex.slice(0, diffIndex + 1);
      const afterDiffIndex = cacheKeysByFlatIndex.slice(diffIndex + 1);
      const keysToKeep = new Set(beforeDiffIndex.flatMap((keySet) => Array.from(keySet)));
      const keysToDelete = afterDiffIndex.flatMap((keySet) => Array.from(keySet)).filter((key) => !keysToKeep.has(key));
      for (const key of keysToDelete) {
        resolvedPaneCache.delete(key);
      }
      const memoize = (nextFn) => (unresolvedPane, context, flatIndex) => {
        const key = unresolvedPane && "".concat(assignId(unresolvedPane), "-").concat(hashContext(context));
        const cachedResolvedPane = key && resolvedPaneCache.get(key);
        if (cachedResolvedPane)
          return cachedResolvedPane;
        const result = nextFn(unresolvedPane, context, flatIndex);
        if (!key)
          return result;
        const cacheKeySet = cacheKeysByFlatIndex[flatIndex] || /* @__PURE__ */ new Set();
        cacheKeySet.add(key);
        cacheKeysByFlatIndex[flatIndex] = cacheKeySet;
        resolvedPaneCache.set(key, result);
        return result;
      };
      return {
        flattenedRouterPanes,
        cacheKeysByFlatIndex,
        resolvedPaneCache,
        resolvePane: createPaneResolver(memoize)
      };
    }, initialCacheState),
    // run the memoized, recursive resolving
    switchMap((_ref8) => {
      let {
        flattenedRouterPanes,
        resolvePane
      } = _ref8;
      return resolvePaneTree({
        unresolvedPane: rootPaneNode,
        flattenedRouterPanes,
        parent: null,
        path: [],
        resolvePane,
        structureContext
      });
    })
  );
  return resolvedPanes$.pipe(
    // this diffs the previous emission with the current one. if there is a new
    // loading pane at the same position where a previous pane already had a
    // resolved value (looking at the IDs to compare), then return the previous
    // pane instead of the loading pane
    scan((prev, next) => next.map((nextPane, index2) => {
      const prevPane = prev[index2];
      if (!prevPane)
        return nextPane;
      if (nextPane.type !== "loading")
        return nextPane;
      if (prevPane.routerPaneSibling.id === nextPane.routerPaneSibling.id) {
        return prevPane;
      }
      return nextPane;
    }), []),
    // this prevents duplicate emissions
    distinctUntilChanged((prev, next) => {
      if (prev.length !== next.length)
        return false;
      for (let i = 0; i < next.length; i++) {
        const prevValue = prev[i];
        const nextValue = next[i];
        if (hashResolvedPaneMeta(prevValue) !== hashResolvedPaneMeta(nextValue)) {
          return false;
        }
      }
      return true;
    })
  );
}
function useRouterPanesStream() {
  const routerStateSubject = (0, import_react.useMemo)(() => new ReplaySubject(1), []);
  const routerPanes$ = (0, import_react.useMemo)(() => routerStateSubject.asObservable().pipe(map((_routerState) => (_routerState == null ? void 0 : _routerState.panes) || [])), [routerStateSubject]);
  const {
    state: routerState
  } = useRouter();
  (0, import_react.useEffect)(() => {
    routerStateSubject.next(routerState);
  }, [routerState, routerStateSubject]);
  return routerPanes$;
}
function useResolvedPanes() {
  const [error, setError] = (0, import_react.useState)();
  if (error)
    throw error;
  const {
    structureContext,
    rootPaneNode
  } = useDeskTool();
  const [data, setData] = (0, import_react.useState)({
    paneDataItems: [],
    resolvedPanes: [],
    routerPanes: []
  });
  const routerPanesStream = useRouterPanesStream();
  (0, import_react.useEffect)(() => {
    const resolvedPanes$ = createResolvedPaneNodeStream({
      rootPaneNode,
      routerPanesStream,
      structureContext
    }).pipe(map((resolvedPanes) => {
      const routerPanes = resolvedPanes.reduce((acc, next) => {
        const currentGroup = acc[next.groupIndex] || [];
        currentGroup[next.siblingIndex] = next.routerPaneSibling;
        acc[next.groupIndex] = currentGroup;
        return acc;
      }, []);
      const groupsLen = routerPanes.length;
      const paneDataItems = resolvedPanes.map((pane) => {
        var _a;
        const {
          groupIndex,
          flatIndex,
          siblingIndex,
          routerPaneSibling,
          path
        } = pane;
        const itemId = routerPaneSibling.id;
        const nextGroup = routerPanes[groupIndex + 1];
        const paneDataItem = {
          active: groupIndex === groupsLen - 2,
          childItemId: (_a = nextGroup == null ? void 0 : nextGroup[0].id) != null ? _a : null,
          index: flatIndex,
          itemId: routerPaneSibling.id,
          groupIndex,
          key: "".concat(pane.type === "loading" ? "unknown" : pane.paneNode.id, "-").concat(itemId, "-").concat(siblingIndex),
          pane: pane.type === "loading" ? LOADING_PANE : pane.paneNode,
          params: routerPaneSibling.params || {},
          path: path.join(";"),
          payload: routerPaneSibling.payload,
          selected: flatIndex === resolvedPanes.length - 1,
          siblingIndex
        };
        return paneDataItem;
      });
      return {
        paneDataItems,
        routerPanes,
        resolvedPanes: paneDataItems.map((pane) => pane.pane)
      };
    }));
    const subscription = resolvedPanes$.subscribe({
      next: (result) => setData(result),
      error: (e) => setError(e)
    });
    return () => subscription.unsubscribe();
  }, [rootPaneNode, routerPanesStream, structureContext]);
  return data;
}
async function ensureDocumentIdAndType(documentStore, id, type) {
  if (id && type)
    return {
      id,
      type
    };
  if (!id && type)
    return {
      id: v4_default(),
      type
    };
  if (id && !type) {
    const resolvedType = await firstValueFrom(documentStore.resolveTypeForDocument(id));
    return {
      id,
      type: resolvedType
    };
  }
  throw new PaneResolutionError({
    message: "Neither document `id` or `type` was provided when trying to resolve intent."
  });
}
var EMPTY_RECORD = {};
var IntentResolver = (0, import_react.memo)(function IntentResolver2() {
  const {
    navigate
  } = useRouter();
  const maybeIntent = useRouterState((0, import_react.useCallback)((routerState) => {
    const intentName = typeof routerState.intent === "string" ? routerState.intent : void 0;
    return intentName ? {
      intent: intentName,
      params: isRecord$2(routerState.params) ? routerState.params : EMPTY_RECORD,
      payload: routerState.payload
    } : void 0;
  }, []));
  const {
    rootPaneNode,
    structureContext
  } = useDeskTool();
  const documentStore = useDocumentStore();
  const [error, setError] = (0, import_react.useState)(null);
  if (error)
    throw error;
  (0, import_react.useEffect)(() => {
    if (maybeIntent) {
      const {
        intent,
        params,
        payload
      } = maybeIntent;
      let cancelled = false;
      async function effect() {
        const {
          id,
          type
        } = await ensureDocumentIdAndType(documentStore, typeof params.id === "string" ? params.id : void 0, typeof params.type === "string" ? params.type : void 0);
        if (cancelled)
          return;
        const panes = await resolveIntent({
          intent,
          params: {
            ...params,
            id,
            type
          },
          payload,
          rootPaneNode,
          structureContext
        });
        if (cancelled)
          return;
        navigate({
          panes
        }, {
          replace: true
        });
      }
      effect().catch(setError);
      return () => {
        cancelled = true;
      };
    }
  }, [documentStore, maybeIntent, navigate, rootPaneNode, structureContext]);
  return null;
});
var PathSegment = styled_components_browser_esm_default.span(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  &:not(:last-child)::after {\n    content: ' \u279D ';\n    opacity: 0.5;\n  }\n"])));
function formatStack(stack) {
  return stack.replace(/\(\.\.\.\)\./g, "(...)\n  .").replace(/__WEBPACK_IMPORTED_MODULE_\d+_+/g, "").replace(/___default\./g, ".").replace(new RegExp(" \\(https?:\\/\\/".concat(window.location.host), "g"), " (");
}
function StructureError(_ref9) {
  let {
    error
  } = _ref9;
  if (!(error instanceof PaneResolutionError)) {
    throw error;
  }
  const {
    cause
  } = error;
  const stack = (cause == null ? void 0 : cause.stack) || error.stack;
  const showStack = stack && !(cause instanceof SerializeError) && !error.message.includes("Module build failed:");
  const path = cause instanceof SerializeError ? cause.path : [];
  const helpId = cause instanceof SerializeError && cause.helpId || error.helpId;
  const handleReload = (0, import_react.useCallback)(() => {
    window.location.reload();
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
    height: "fill",
    overflow: "auto",
    padding: 4,
    sizing: "border",
    tone: "critical",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
      children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
        as: "h2",
        children: "Encountered an error while reading structure"
      }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
        marginTop: 4,
        padding: 4,
        radius: 2,
        overflow: "auto",
        shadow: 1,
        tone: "inherit",
        children: [path.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Stack, {
          space: 2,
          children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
            children: "Structure path"
          }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, {
            children: path.slice(1).map((segment, i) => (
              // eslint-disable-next-line react/no-array-index-key
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PathSegment, {
                children: segment
              }, "".concat(segment, "-").concat(i))
            ))
          })]
        }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Stack, {
          marginTop: 4,
          space: 2,
          children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
            children: "Error"
          }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, {
            children: showStack ? formatStack(stack) : error.message
          })]
        }), helpId && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
          marginTop: 4,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
              href: generateHelpUrl(helpId),
              rel: "noopener noreferrer",
              target: "_blank",
              children: "View documentation"
            })
          })
        }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
          marginTop: 4,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
            text: "Reload",
            icon: SyncIcon,
            tone: "primary",
            onClick: handleReload
          })
        })]
      })]
    })
  });
}
function UnknownPane(props) {
  const {
    isSelected,
    pane,
    paneKey
  } = props;
  const type = isRecord$2(pane) && pane.type || null;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Pane, {
    id: paneKey,
    selected: isSelected,
    children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaneHeader, {
      title: "Unknown pane type"
    }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaneContent, {
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
        padding: 4,
        children: typeof type === "string" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
          as: "p",
          muted: true,
          children: ["Structure item of type ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
            children: type
          }), " is not a known entity."]
        }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
          as: "p",
          muted: true,
          children: ["Structure item is missing required ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
            children: "type"
          }), " property."]
        })
      })
    })]
  });
}
function getWaitMessages(path) {
  const thresholds = [{
    ms: 300,
    message: "Loading\u2026"
  }, {
    ms: 5e3,
    message: "Still loading\u2026"
  }];
  if (isDev) {
    const message = ["Check console for errors?", "Is your observable/promise resolving?", path.length > 0 ? "Structure path: ".concat(path.join(" \u279D ")) : ""];
    thresholds.push({
      ms: 1e4,
      message: message.join("\n")
    });
  }
  const src = of(null);
  return merge(...thresholds.map((_ref10) => {
    let {
      ms,
      message
    } = _ref10;
    return src.pipe(mapTo(message), delay(ms));
  }));
}
var DEFAULT_MESSAGE = "Loading\u2026";
var Content$1 = styled_components_browser_esm_default(Flex)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  opacity: 0;\n  transition: opacity 200ms;\n\n  &[data-mounted] {\n    opacity: 1;\n  }\n"])));
var LoadingPane = (0, import_react.memo)((props) => {
  const {
    delay: delay2 = 300,
    flex,
    message: messageProp = getWaitMessages,
    minWidth,
    paneKey,
    path,
    selected,
    title,
    tone
  } = props;
  const resolvedMessage = (0, import_react.useMemo)(() => {
    if (typeof messageProp === "function") {
      return messageProp(path ? path.split(";") : []);
    }
    return messageProp;
  }, [messageProp, path]);
  const [currentMessage, setCurrentMessage] = (0, import_react.useState)(() => {
    if (typeof resolvedMessage === "string")
      return resolvedMessage;
    return DEFAULT_MESSAGE;
  });
  (0, import_react.useEffect)(() => {
    if (typeof resolvedMessage !== "object")
      return void 0;
    if (typeof resolvedMessage.subscribe === "function")
      return void 0;
    const sub = resolvedMessage.subscribe(setCurrentMessage);
    return () => sub.unsubscribe();
  }, [resolvedMessage]);
  const [contentElement, setContentElement] = (0, import_react.useState)(null);
  const [mounted, setMounted] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    if (!contentElement)
      return void 0;
    return _raf2(() => setMounted(true));
  }, [contentElement]);
  const content = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Content$1, {
    align: "center",
    "data-mounted": mounted ? "" : void 0,
    direction: "column",
    height: "fill",
    justify: "center",
    ref: setContentElement,
    children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spinner, {
      muted: true
    }), (title || currentMessage) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
      marginTop: 3,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
        align: "center",
        muted: true,
        size: 1,
        children: title || currentMessage
      })
    })]
  });
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pane, {
    flex,
    id: paneKey,
    minWidth,
    selected,
    tone,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaneContent, {
      children: content
    })
  });
});
LoadingPane.displayName = "LoadingPane";
var paneMap = {
  component: (0, import_react.lazy)(() => import("/build/_shared/index-7e9d413a-QR2FFS27.js")),
  document: (0, import_react.lazy)(() => import("/build/_shared/index-41953214-4B4KGLB6.js")),
  documentList: (0, import_react.lazy)(() => import("/build/_shared/index-5d8405fd-DZWUNDDV.js")),
  list: (0, import_react.lazy)(() => import("/build/_shared/index-be6d53bc-LBHVSBXF.js"))
};
var DeskToolPane = (0, import_react.memo)(function DeskToolPane2(props) {
  const {
    active,
    childItemId,
    groupIndex,
    index: index2,
    itemId,
    pane,
    paneKey,
    params,
    payload,
    path,
    selected,
    siblingIndex
  } = props;
  const PaneComponent = paneMap[pane.type] || UnknownPane;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaneRouterProvider, {
    flatIndex: index2,
    index: groupIndex,
    params,
    payload,
    siblingIndex,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
      fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingPane, {
        paneKey,
        path,
        selected
      }),
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaneComponent, {
        childItemId: childItemId || "",
        index: index2,
        itemId,
        isActive: active,
        isSelected: selected,
        paneKey,
        pane
      })
    })
  });
}, (_ref11, _ref12) => {
  let {
    params: prevParams = {},
    payload: prevPayload = null,
    ...prev
  } = _ref11;
  let {
    params: nextParams = {},
    payload: nextPayload = null,
    ...next
  } = _ref12;
  if (!(0, import_isEqual.default)(prevParams, nextParams))
    return false;
  if (!(0, import_isEqual.default)(prevPayload, nextPayload))
    return false;
  const keys = /* @__PURE__ */ new Set([...Object.keys(prev), ...Object.keys(next)]);
  for (const key of keys) {
    if (prev[key] !== next[key])
      return false;
  }
  return true;
});
function ErrorPane(props) {
  const {
    children,
    flex,
    minWidth,
    paneKey,
    title = "Error",
    tone = "critical"
  } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Pane, {
    flex,
    id: paneKey,
    minWidth,
    tone,
    children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaneHeader, {
      title
    }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaneContent, {
      overflow: "auto",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
        paddingX: 4,
        paddingY: 5,
        children
      })
    })]
  });
}
function getOpErrorTitle(op) {
  if (op === "delete") {
    return "An error occurred while attempting to delete this document.\n      This usually means that there are other documents that refers to it.";
  }
  if (op === "unpublish") {
    return "An error occurred while attempting to unpublish this document.\n      This usually means that there are other documents that refers to it.";
  }
  return "An error occurred during ".concat(op);
}
function getOpSuccessTitle(op) {
  if (op === "publish") {
    return "The document was published";
  }
  if (op === "unpublish") {
    return "The document was unpublished. A draft has been created from the latest published version.";
  }
  if (op === "discardChanges") {
    return "All changes since last publish has now been discarded. The discarded draft can still be recovered from history";
  }
  if (op === "delete") {
    return "The document was successfully deleted";
  }
  return "Successfully performed ".concat(op, " on document");
}
var IGNORE_OPS = ["patch", "commit"];
var DocumentOperationResults = (0, import_react.memo)(function DocumentOperationResults2() {
  const {
    push: pushToast
  } = useToast();
  const {
    documentId,
    documentType
  } = useDocumentPane();
  const event = useDocumentOperationEvent(documentId, documentType);
  const prevEvent = (0, import_react.useRef)(event);
  (0, import_react.useEffect)(() => {
    if (!event || event === prevEvent.current)
      return;
    if (event.type === "error") {
      pushToast({
        closable: true,
        duration: 3e4,
        // 30s
        status: "error",
        title: getOpErrorTitle(event.op),
        description: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
          children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
            children: "Details"
          }), event.error.message]
        })
      });
    }
    if (event.type === "success" && !IGNORE_OPS.includes(event.op)) {
      pushToast({
        closable: true,
        status: "success",
        title: getOpSuccessTitle(event.op)
      });
    }
    prevEvent.current = event;
  }, [event, pushToast]);
  return null;
});
var getHistoryMenuItem = (params) => {
  const {
    features,
    hasValue,
    changesOpen
  } = params;
  if (!features.reviewChanges)
    return null;
  return {
    action: "reviewChanges",
    title: "Review changes",
    icon: RestoreIcon,
    isDisabled: changesOpen || !hasValue
  };
};
var getInspectItem = (_ref13) => {
  let {
    hasValue
  } = _ref13;
  return {
    action: "inspect",
    title: "Inspect",
    icon: BinaryDocumentIcon,
    isDisabled: !hasValue,
    shortcut: "Ctrl+Alt+I"
  };
};
var getProductionPreviewItem = (_ref14) => {
  let {
    previewUrl
  } = _ref14;
  if (!previewUrl)
    return null;
  return {
    action: "production-preview",
    title: "Open preview",
    icon: EarthAmericasIcon,
    shortcut: "Ctrl+Alt+O"
  };
};
var getMenuItems = (params) => {
  const items = [getProductionPreviewItem, getHistoryMenuItem, getInspectItem].filter(Boolean).map((fn) => fn(params));
  return items.filter((i) => i !== null);
};
var isSanityDocument = (value) => isRecord$2(value) && typeof value._id === "string" && typeof value._type === "string";
function usePreviewUrl(value) {
  const [previewUrl, setPreviewUrl] = (0, import_react.useState)(void 0);
  const [error, setError] = (0, import_react.useState)(null);
  const {
    resolveProductionUrl
  } = useSource().document;
  const value$ = useAsObservable(value);
  if (error)
    throw error;
  (0, import_react.useEffect)(() => {
    value$.pipe(
      // this so that the preview URL isn't fetched on every keystroke
      debounceTime(500),
      switchMap((document2) => isSanityDocument(document2) ? from(resolveProductionUrl({
        document: document2
      })) : of(void 0)),
      catchError((e) => {
        const message = isRecord$2(e) && typeof e.message === "string" ? e.message : "Unknown error";
        throw new Error("An error was thrown while trying to get your preview url: ".concat(message));
      })
    ).subscribe({
      next: setPreviewUrl,
      error: setError
    });
  }, [resolveProductionUrl, value$]);
  return previewUrl;
}
function getInitialValueTemplateOpts(templates, opts) {
  const payload = opts.panePayload || {};
  const structureNodeTemplate = opts.templateName;
  if (opts.urlTemplate && structureNodeTemplate && structureNodeTemplate !== opts.urlTemplate) {
    console.warn('Conflicting templates: URL says "'.concat(opts.urlTemplate, '", structure node says "').concat(structureNodeTemplate, '". Using "').concat(structureNodeTemplate, '".'));
  }
  const template = structureNodeTemplate || opts.urlTemplate;
  const typeTemplates = templates.filter((t) => t.schemaType === opts.documentType);
  const templateParams = {
    ...opts.templateParams,
    ...typeof payload === "object" ? payload || {} : {}
  };
  let templateName = template;
  if (!template && typeTemplates.length === 1) {
    templateName = typeTemplates[0].id;
  }
  return {
    templateName,
    templateParams
  };
}
var emptyObject = {};
var DocumentPaneProvider = (0, import_react.memo)((props) => {
  const {
    children,
    index: index2,
    pane,
    paneKey
  } = props;
  const schema = useSchema();
  const templates = useTemplates();
  const {
    actions: documentActions,
    badges: documentBadges,
    unstable_languageFilter: languageFilterResolver
  } = useSource().document;
  const presenceStore = usePresenceStore();
  const paneRouter = usePaneRouter();
  const {
    features
  } = useDeskTool();
  const {
    push: pushToast
  } = useToast();
  const {
    options,
    menuItemGroups,
    title = null,
    views: viewsProp = []
  } = pane;
  const paneOptions = useUnique(options);
  const documentIdRaw = paneOptions.id;
  const documentId = getPublishedId(documentIdRaw);
  const documentType = options.type;
  const paneParams = useUnique(paneRouter.params);
  const panePayload = useUnique(paneRouter.payload);
  const {
    templateName,
    templateParams
  } = (0, import_react.useMemo)(() => getInitialValueTemplateOpts(templates, {
    documentType,
    templateName: paneOptions.template,
    templateParams: paneOptions.templateParameters,
    panePayload,
    urlTemplate: paneParams == null ? void 0 : paneParams.template
  }), [documentType, paneOptions, paneParams, panePayload, templates]);
  const initialValueRaw = useInitialValue({
    documentId,
    documentType,
    templateName,
    templateParams
  });
  const initialValue = useUnique(initialValueRaw);
  const {
    patch
  } = useDocumentOperation(documentId, documentType);
  const editState = useEditState(documentId, documentType);
  const {
    validation: validationRaw
  } = useValidationStatus(documentId, documentType);
  const connectionState = useConnectionState(documentId, documentType);
  const schemaType = schema.get(documentType);
  const value = (editState == null ? void 0 : editState.draft) || (editState == null ? void 0 : editState.published) || initialValue.value;
  const actions = (0, import_react.useMemo)(() => documentActions({
    schemaType: documentType,
    documentId
  }), [documentActions, documentId, documentType]);
  const badges = (0, import_react.useMemo)(() => documentBadges({
    schemaType: documentType,
    documentId
  }), [documentBadges, documentId, documentType]);
  const languageFilter = (0, import_react.useMemo)(() => languageFilterResolver({
    schemaType: documentType,
    documentId
  }), [documentId, documentType, languageFilterResolver]);
  const validation = useUnique(validationRaw);
  const views = useUnique(viewsProp);
  const params = paneRouter.params || emptyObject;
  const [focusPath, setFocusPath] = (0, import_react.useState)(() => params.path ? fromString(params.path) : []);
  const activeViewId = params.view || views[0] && views[0].id || null;
  const [timelineMode, setTimelineMode] = (0, import_react.useState)("closed");
  const changesOpen = !!params.since;
  const [timelineError, setTimelineError] = (0, import_react.useState)(null);
  const timelineStore = useTimelineStore({
    documentId,
    documentType,
    onError: setTimelineError,
    rev: params.rev,
    since: params.since
  });
  const onOlderRevision = useTimelineSelector(timelineStore, (state) => state.onOlderRevision);
  const revTime = useTimelineSelector(timelineStore, (state) => state.revTime);
  const sinceAttributes = useTimelineSelector(timelineStore, (state) => state.sinceAttributes);
  const timelineDisplayed = useTimelineSelector(timelineStore, (state) => state.timelineDisplayed);
  const timelineReady = useTimelineSelector(timelineStore, (state) => state.timelineReady);
  const previewUrl = usePreviewUrl(value);
  const [presence, setPresence] = (0, import_react.useState)([]);
  (0, import_react.useEffect)(() => {
    const subscription = presenceStore.documentPresence(documentId).subscribe((nextPresence) => {
      setPresence(nextPresence);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [documentId, presenceStore]);
  const hasValue = Boolean(value);
  const menuItems = (0, import_react.useMemo)(() => getMenuItems({
    features,
    hasValue,
    changesOpen,
    previewUrl
  }), [changesOpen, features, hasValue, previewUrl]);
  const inspectOpen = params.inspect === "on";
  const compareValue = changesOpen ? sinceAttributes : (editState == null ? void 0 : editState.published) || null;
  const ready = connectionState === "connected" && editState.ready && (timelineReady || !!timelineError);
  const displayed = (0, import_react.useMemo)(() => onOlderRevision ? timelineDisplayed || {
    _id: value._id,
    _type: value._type
  } : value, [onOlderRevision, timelineDisplayed, value]);
  const setTimelineRange = (0, import_react.useCallback)((newSince, newRev) => {
    paneRouter.setParams({
      ...paneRouter.params,
      since: newSince,
      rev: newRev || void 0
    });
  }, [paneRouter]);
  const handleFocus = (0, import_react.useCallback)((nextFocusPath) => {
    setFocusPath(nextFocusPath);
    presenceStore.setLocation([{
      type: "document",
      documentId,
      path: nextFocusPath,
      lastActiveAt: /* @__PURE__ */ (/* @__PURE__ */ new Date()).toISOString()
    }]);
  }, [documentId, presenceStore, setFocusPath]);
  const handleBlur = (0, import_react.useCallback)((blurredPath) => {
    setFocusPath([]);
  }, [setFocusPath]);
  const patchRef = (0, import_react.useRef)(() => {
    throw new Error("Nope");
  });
  patchRef.current = (event) => {
    patch.execute(toMutationPatches(event.patches), initialValue.value);
  };
  const handleChange = (0, import_react.useCallback)((event) => patchRef.current(event), []);
  const handleHistoryClose = (0, import_react.useCallback)(() => {
    paneRouter.setParams({
      ...params,
      since: void 0
    });
  }, [paneRouter, params]);
  const handleHistoryOpen = (0, import_react.useCallback)(() => {
    paneRouter.setParams({
      ...params,
      since: "@lastPublished"
    });
  }, [paneRouter, params]);
  const handlePaneClose = (0, import_react.useCallback)(() => paneRouter.closeCurrent(), [paneRouter]);
  const handlePaneSplit = (0, import_react.useCallback)(() => paneRouter.duplicateCurrent(), [paneRouter]);
  const toggleInspect = (0, import_react.useCallback)(function() {
    let toggle = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !inspectOpen;
    if (toggle) {
      paneRouter.setParams({
        ...params,
        inspect: "on"
      });
    } else {
      paneRouter.setParams((0, import_omit.default)(params, "inspect"));
    }
  }, [inspectOpen, paneRouter, params]);
  const handleMenuAction = (0, import_react.useCallback)((item) => {
    if (item.action === "production-preview" && previewUrl) {
      window.open(previewUrl);
      return true;
    }
    if (item.action === "inspect") {
      toggleInspect(true);
      return true;
    }
    if (item.action === "reviewChanges") {
      handleHistoryOpen();
      return true;
    }
    return false;
  }, [handleHistoryOpen, previewUrl, toggleInspect]);
  const handleKeyUp = (0, import_react.useCallback)((event) => {
    for (const item of menuItems) {
      if (item.shortcut) {
        if ((0, import_is_hotkey.default)(item.shortcut, event)) {
          event.preventDefault();
          event.stopPropagation();
          handleMenuAction(item);
          return;
        }
      }
    }
  }, [handleMenuAction, menuItems]);
  const handleInspectClose = (0, import_react.useCallback)(() => toggleInspect(false), [toggleInspect]);
  const [openPath, onSetOpenPath] = (0, import_react.useState)([]);
  const [fieldGroupState, onSetFieldGroupState] = (0, import_react.useState)();
  const [collapsedPaths, onSetCollapsedPath] = (0, import_react.useState)();
  const [collapsedFieldSets, onSetCollapsedFieldSets] = (0, import_react.useState)();
  const handleOnSetCollapsedPath = (0, import_react.useCallback)((path, collapsed) => {
    onSetCollapsedPath((prevState) => setAtPath(prevState, path, collapsed));
  }, []);
  const handleOnSetCollapsedFieldSet = (0, import_react.useCallback)((path, collapsed) => {
    onSetCollapsedFieldSets((prevState) => setAtPath(prevState, path, collapsed));
  }, []);
  const handleSetActiveFieldGroup = (0, import_react.useCallback)((path, groupName) => onSetFieldGroupState((prevState) => setAtPath(prevState, path, groupName)), []);
  const requiredPermission = value._createdAt ? "update" : "create";
  const liveEdit = (0, import_react.useMemo)(() => Boolean(schemaType == null ? void 0 : schemaType.liveEdit), [schemaType == null ? void 0 : schemaType.liveEdit]);
  const docId = value._id ? value._id : "dummy-id";
  const docPermissionsInput = (0, import_react.useMemo)(() => {
    return {
      ...value,
      _id: liveEdit ? getPublishedId(docId) : getDraftId(docId)
    };
  }, [liveEdit, value, docId]);
  const [permissions, isPermissionsLoading] = useDocumentValuePermissions({
    document: docPermissionsInput,
    permission: requiredPermission
  });
  const isNonExistent = !(value == null ? void 0 : value._id);
  const readOnly = (0, import_react.useMemo)(() => {
    const hasNoPermission = !isPermissionsLoading && !(permissions == null ? void 0 : permissions.granted);
    const updateActionDisabled = !isActionEnabled(schemaType, "update");
    const createActionDisabled = isNonExistent && !isActionEnabled(schemaType, "create");
    const reconnecting = connectionState === "reconnecting";
    return !ready || revTime !== null || hasNoPermission || updateActionDisabled || createActionDisabled || reconnecting;
  }, [connectionState, isNonExistent, isPermissionsLoading, permissions == null ? void 0 : permissions.granted, ready, revTime, schemaType]);
  const formState = useFormState(schemaType, {
    value: displayed,
    readOnly,
    comparisonValue: compareValue,
    focusPath,
    openPath,
    collapsedPaths,
    presence,
    validation,
    collapsedFieldSets,
    fieldGroupState,
    changesOpen
  });
  const formStateRef = (0, import_react.useRef)(formState);
  formStateRef.current = formState;
  const setOpenPath = (0, import_react.useCallback)((path) => {
    const ops = getExpandOperations(formStateRef.current, path);
    ops.forEach((op) => {
      if (op.type === "expandPath") {
        onSetCollapsedPath((prevState) => setAtPath(prevState, op.path, false));
      }
      if (op.type === "expandFieldSet") {
        onSetCollapsedFieldSets((prevState) => setAtPath(prevState, op.path, false));
      }
      if (op.type === "setSelectedGroup") {
        onSetFieldGroupState((prevState) => setAtPath(prevState, op.path, op.groupName));
      }
    });
    onSetOpenPath(path);
  }, [formStateRef]);
  const documentPane = {
    actions,
    activeViewId,
    badges,
    changesOpen,
    collapsedFieldSets,
    collapsedPaths,
    compareValue,
    connectionState,
    displayed,
    documentId,
    documentIdRaw,
    documentType,
    editState,
    focusPath,
    menuItems,
    onBlur: handleBlur,
    onChange: handleChange,
    onFocus: handleFocus,
    onPathOpen: setOpenPath,
    onHistoryClose: handleHistoryClose,
    onHistoryOpen: handleHistoryOpen,
    onInspectClose: handleInspectClose,
    onKeyUp: handleKeyUp,
    onMenuAction: handleMenuAction,
    onPaneClose: handlePaneClose,
    onPaneSplit: handlePaneSplit,
    onSetActiveFieldGroup: handleSetActiveFieldGroup,
    onSetCollapsedPath: handleOnSetCollapsedPath,
    onSetCollapsedFieldSet: handleOnSetCollapsedFieldSet,
    index: index2,
    inspectOpen,
    validation,
    menuItemGroups: menuItemGroups || [],
    paneKey,
    previewUrl,
    ready,
    schemaType,
    isPermissionsLoading,
    permissions,
    setTimelineMode,
    setTimelineRange,
    timelineError,
    timelineMode,
    timelineStore,
    title,
    value,
    views,
    formState,
    unstable_languageFilter: languageFilter
  };
  (0, import_react.useEffect)(() => {
    if (connectionState === "reconnecting") {
      pushToast({
        id: "sanity/desk/reconnecting",
        status: "warning",
        title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
          children: "Connection lost. Reconnecting\u2026"
        })
      });
    }
  }, [connectionState, pushToast]);
  (0, import_react.useEffect)(() => {
    var _a;
    if (ready && params.path) {
      const {
        path,
        ...restParams
      } = params;
      const pathFromUrl = resolveKeyedPath((_a = formStateRef.current) == null ? void 0 : _a.value, fromString(path));
      setFocusPath(pathFromUrl);
      setOpenPath(pathFromUrl);
      paneRouter.setParams(restParams);
    }
  }, [params, documentId, setOpenPath, ready, paneRouter]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentPaneContext.Provider, {
    value: documentPane,
    children
  });
});
DocumentPaneProvider.displayName = "DocumentPaneProvider";
var TIMELINE_LABELS = {
  create: "created",
  delete: "deleted",
  discardDraft: "discarded draft",
  initial: "created",
  editDraft: "edited",
  editLive: "live edited",
  publish: "published",
  unpublish: "unpublished"
};
var TIMELINE_ICON_COMPONENTS = {
  create: AddCircleIcon,
  delete: TrashIcon,
  discardDraft: CloseIcon,
  initial: AddCircleIcon,
  editDraft: EditIcon,
  editLive: EditIcon,
  publish: PublishIcon,
  unpublish: UnpublishIcon
};
function formatTimelineEventLabel(type) {
  return TIMELINE_LABELS[type];
}
function getTimelineEventIconComponent(type) {
  return TIMELINE_ICON_COMPONENTS[type];
}
function UserAvatarStack(_ref15) {
  let {
    maxLength,
    userIds
  } = _ref15;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarStack, {
    maxLength,
    children: userIds.map((userId) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserAvatar, {
      user: userId,
      withTooltip: true
    }, userId))
  });
}
var IconWrapper = styled_components_browser_esm_default(Flex)((_ref16) => {
  let {
    theme
  } = _ref16;
  var _a;
  const borderColor = (_a = theme.sanity.color.base.skeleton) == null ? void 0 : _a.from;
  return Ce(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    --timeline-hairline-width: 1px;\n    position: relative;\n    z-index: 2;\n    margin: 0;\n    padding: 0;\n\n    &::before {\n      position: absolute;\n      content: '';\n      height: 100%;\n      width: var(--timeline-hairline-width);\n      background: ", ";\n      top: 0;\n      left: calc((100% - var(--timeline-hairline-width)) / 2);\n      z-index: 1;\n    }\n  "])), borderColor);
});
var Root$5 = styled_components_browser_esm_default(Button)((_ref17) => {
  let {
    $selected
  } = _ref17;
  return Ce(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    position: relative;\n    width: 100%;\n\n    /* Line styling */\n    &[data-first] ", "::before {\n      height: 50%;\n      top: unset;\n      bottom: 0;\n    }\n\n    &[data-last] ", "::before {\n      height: 50%;\n    }\n\n    ", "\n  "])), IconWrapper, IconWrapper, $selected && Ce(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      ", "::before {\n        background: transparent;\n      }\n    "])), IconWrapper));
});
var IconBox = styled_components_browser_esm_default(Box)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  background: var(--card-bg-color);\n  border-radius: 50px;\n  position: relative;\n  z-index: 2;\n"])));
var EventLabel = styled_components_browser_esm_default(Text)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  text-transform: capitalize;\n"])));
var TimestampBox = styled_components_browser_esm_default(Box)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  min-width: 1rem;\n  margin-left: ", ";\n"])), (_ref18) => {
  let {
    theme
  } = _ref18;
  return "-".concat(rem(theme.sanity.space[1]));
});
var TIMELINE_ITEM_EVENT_TONE = {
  initial: "primary",
  create: "primary",
  publish: "positive",
  editLive: "caution",
  editDraft: "caution",
  unpublish: "critical",
  discardDraft: "critical",
  delete: "critical",
  withinSelection: "primary"
};
function TimelineItem(_ref19) {
  let {
    chunk,
    isFirst,
    isLast,
    isLatest,
    isSelected,
    onSelect,
    timestamp,
    type
  } = _ref19;
  const iconComponent = getTimelineEventIconComponent(type);
  const authorUserIds = Array.from(chunk.authors);
  const formattedTimestamp = (0, import_react.useMemo)(() => {
    const parsedDate = new Date(timestamp);
    const formattedDate = format(parsedDate, "MMM d, yyyy, hh:mm a");
    return formattedDate;
  }, [timestamp]);
  const handleClick = (0, import_react.useCallback)((evt) => {
    evt.preventDefault();
    evt.stopPropagation();
    onSelect(chunk);
  }, [onSelect, chunk]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root$5, {
    $selected: isSelected,
    "data-chunk-id": chunk.id,
    "data-first": isFirst ? true : void 0,
    "data-last": isLast ? true : void 0,
    "data-ui": "timelineItem",
    mode: isSelected ? "default" : "bleed",
    onClick: handleClick,
    padding: 0,
    radius: 2,
    tone: isSelected ? "primary" : TIMELINE_ITEM_EVENT_TONE[chunk.type],
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
      paddingX: 2,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
        align: "stretch",
        children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconWrapper, {
          align: "center",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBox, {
            padding: 2,
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
              size: 2,
              children: iconComponent && (0, import_react.createElement)(iconComponent)
            })
          })
        }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Stack, {
          space: 2,
          margin: 2,
          children: [isLatest && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flex, {
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
              padding: 1,
              radius: 2,
              shadow: 1,
              tone: isSelected ? "primary" : TIMELINE_ITEM_EVENT_TONE[chunk.type],
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
                muted: true,
                size: 0,
                children: "Latest"
              })
            })
          }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventLabel, {
              size: 1,
              weight: "medium",
              children: formatTimelineEventLabel(type) || /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
                children: type
              })
            })
          }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimestampBox, {
            paddingX: 1,
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
              size: 0,
              muted: true,
              children: formattedTimestamp
            })
          })]
        }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flex, {
          flex: 1,
          justify: "flex-end",
          align: "center",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserAvatarStack, {
            maxLength: 3,
            userIds: authorUserIds
          })
        })]
      })
    })
  });
}
var StackWrapper = styled_components_browser_esm_default(Stack)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  max-width: 200px;\n"])));
var ListWrapper = styled_components_browser_esm_default(Flex)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  max-height: calc(100vh - 198px);\n  min-width: 244px;\n"])));
var Root$4 = styled_components_browser_esm_default(Box)((_ref20) => {
  let {
    $visible
  } = _ref20;
  return Ce(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    opacity: 0;\n    pointer-events: none;\n\n    ", "\n  "])), $visible && Ce(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n      opacity: 1;\n      pointer-events: auto;\n    "]))));
});
var Timeline = (_ref21) => {
  let {
    chunks,
    disabledBeforeFirstChunk,
    hasMoreChunks,
    lastChunk,
    onLoadMore,
    onSelect,
    firstChunk
  } = _ref21;
  const [mounted, setMounted] = (0, import_react.useState)(false);
  const filteredChunks = (0, import_react.useMemo)(() => {
    return chunks.filter((c) => {
      if (disabledBeforeFirstChunk && firstChunk) {
        return c.index < firstChunk.index;
      }
      return true;
    });
  }, [chunks, disabledBeforeFirstChunk, firstChunk]);
  const selectedIndex = (0, import_react.useMemo)(() => (lastChunk == null ? void 0 : lastChunk.id) ? filteredChunks.findIndex((c) => c.id === lastChunk.id) : -1, [lastChunk == null ? void 0 : lastChunk.id, filteredChunks]);
  const renderItem = (0, import_react.useCallback)((chunk, _ref22) => {
    let {
      activeIndex
    } = _ref22;
    const isFirst = activeIndex === 0;
    const isLast = filteredChunks && activeIndex === filteredChunks.length - 1 || false;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Box, {
      paddingBottom: isLast ? 1 : 0,
      paddingTop: isFirst ? 1 : 0,
      paddingX: 1,
      children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimelineItem, {
        chunk,
        isFirst,
        isLast,
        isLatest: activeIndex === 0 && !disabledBeforeFirstChunk,
        isSelected: activeIndex === selectedIndex,
        onSelect,
        timestamp: chunk.endTimestamp,
        type: chunk.type
      }), activeIndex === filteredChunks.length - 1 && hasMoreChunks && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flex, {
        align: "center",
        justify: "center",
        padding: 4,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spinner, {
          muted: true
        })
      })]
    });
  }, [disabledBeforeFirstChunk, filteredChunks, hasMoreChunks, onSelect, selectedIndex]);
  (0, import_react.useEffect)(() => setMounted(true), []);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Root$4, {
    $visible: !selectedIndex || mounted,
    "data-ui": "timeline",
    children: [filteredChunks.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StackWrapper, {
      padding: 3,
      space: 3,
      children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
        size: 1,
        weight: "semibold",
        children: "No document history"
      }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
        muted: true,
        size: 1,
        children: "When changing the content of the document, the document versions will appear in this menu."
      })]
    }), filteredChunks.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListWrapper, {
      direction: "column",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandList, {
        activeItemDataAttr: "data-hovered",
        ariaLabel: "Document revisions",
        autoFocus: "list",
        initialIndex: selectedIndex,
        initialScrollAlign: "center",
        itemHeight: 40,
        items: filteredChunks,
        onEndReached: onLoadMore,
        onEndReachedIndexOffset: 20,
        overscan: 5,
        renderItem,
        wrapAround: false
      })
    })]
  });
};
Timeline.displayName = "Timeline";
function TimelineError() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
    align: "flex-start",
    gap: 3,
    padding: 4,
    children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextWithTone, {
      tone: "critical",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorOutlineIcon, {})
    }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Stack, {
      space: 4,
      children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextWithTone, {
        size: 1,
        tone: "critical",
        weight: "semibold",
        children: "An error occurred whilst retrieving document changes."
      }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextWithTone, {
        size: 1,
        tone: "critical",
        children: "Document history transactions have not been affected."
      })]
    })]
  });
}
var Root$3 = styled_components_browser_esm_default(Popover)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  overflow: hidden;\n  overflow: clip;\n"])));
function TimelineMenu(_ref23) {
  let {
    chunk,
    mode,
    placement
  } = _ref23;
  const {
    setTimelineRange,
    setTimelineMode,
    timelineError,
    ready,
    timelineStore
  } = useDocumentPane();
  const [open, setOpen] = (0, import_react.useState)(false);
  const [button, setButton] = (0, import_react.useState)(null);
  const [popover, setPopover] = (0, import_react.useState)(null);
  const toast = useToast();
  const chunks = useTimelineSelector(timelineStore, (state) => state.chunks);
  const loading = useTimelineSelector(timelineStore, (state) => state.isLoading);
  const hasMoreChunks = useTimelineSelector(timelineStore, (state) => state.hasMoreChunks);
  const realRevChunk = useTimelineSelector(timelineStore, (state) => state.realRevChunk);
  const sinceTime = useTimelineSelector(timelineStore, (state) => state.sinceTime);
  const handleOpen = (0, import_react.useCallback)(() => {
    setTimelineMode(mode);
    setOpen(true);
  }, [mode, setTimelineMode]);
  const handleClose = (0, import_react.useCallback)(() => {
    setTimelineMode("closed");
    setOpen(false);
  }, [setTimelineMode]);
  const handleClickOutside = (0, import_react.useCallback)(() => {
    if (open) {
      handleClose();
    }
  }, [handleClose, open]);
  const handleGlobalKeyDown = (0, import_react.useCallback)((event) => {
    if (open && (event.key === "Escape" || event.key === "Tab")) {
      handleClose();
      button == null ? void 0 : button.focus();
    }
  }, [button, handleClose, open]);
  useClickOutside(handleClickOutside, [button, popover]);
  useGlobalKeyDown(handleGlobalKeyDown);
  const selectRev = (0, import_react.useCallback)((revChunk) => {
    try {
      const [sinceId, revId] = timelineStore.findRangeForRev(revChunk);
      setTimelineMode("closed");
      setTimelineRange(sinceId, revId);
    } catch (err) {
      toast.push({
        closable: true,
        description: err.message,
        status: "error",
        title: "Unable to load revision"
      });
    }
  }, [setTimelineMode, setTimelineRange, timelineStore, toast]);
  const selectSince = (0, import_react.useCallback)((sinceChunk) => {
    try {
      const [sinceId, revId] = timelineStore.findRangeForSince(sinceChunk);
      setTimelineMode("closed");
      setTimelineRange(sinceId, revId);
    } catch (err) {
      toast.push({
        closable: true,
        description: err.message,
        status: "error",
        title: "Unable to load revision"
      });
    }
  }, [setTimelineMode, setTimelineRange, timelineStore, toast]);
  const handleLoadMore = (0, import_react.useCallback)(() => {
    if (!loading) {
      timelineStore.loadMore();
    }
  }, [loading, timelineStore]);
  const content = timelineError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimelineError, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
    children: [mode === "rev" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timeline, {
      chunks,
      firstChunk: realRevChunk,
      hasMoreChunks,
      lastChunk: realRevChunk,
      onLoadMore: handleLoadMore,
      onSelect: selectRev
    }), mode === "since" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timeline, {
      chunks,
      disabledBeforeFirstChunk: true,
      firstChunk: realRevChunk,
      hasMoreChunks,
      lastChunk: sinceTime,
      onLoadMore: handleLoadMore,
      onSelect: selectSince
    })]
  });
  const timeLabel = useFormattedTimestamp((chunk == null ? void 0 : chunk.endTimestamp) || "");
  const revLabel = chunk ? "".concat((0, import_upperFirst.default)(formatTimelineEventLabel(chunk.type)), ": ").concat(timeLabel) : "Latest version";
  const sinceLabel = chunk ? "Since: ".concat(timeLabel) : "Since: unknown version";
  const buttonLabel = mode === "rev" ? revLabel : sinceLabel;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root$3, {
    constrainSize: true,
    content: open && content,
    "data-ui": "versionMenu",
    open,
    placement,
    portal: true,
    ref: setPopover,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
      disabled: !ready,
      mode: "bleed",
      fontSize: 1,
      padding: 2,
      iconRight: SelectIcon,
      onClick: open ? handleClose : handleOpen,
      ref: setButton,
      selected: open,
      text: ready ? buttonLabel : "Loading history"
    })
  });
}
function useFormattedTimestamp(time) {
  const formatted = (0, import_react.useMemo)(() => {
    const parsedDate = time ? new Date(time) : /* @__PURE__ */ new Date();
    const formattedDate = format(parsedDate, "MMM d, yyyy, hh:mm a");
    return formattedDate;
  }, [time]);
  return formatted;
}
function LoadingContent() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Delay, {
    ms: 300,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
      align: "center",
      direction: "column",
      height: "fill",
      justify: "center",
      paddingTop: 3,
      children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spinner, {
        muted: true
      }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
        marginTop: 3,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
          align: "center",
          muted: true,
          size: 1,
          children: "Loading changes"
        })
      })]
    })
  });
}
function collectLatestAuthorAnnotations(diff) {
  const authorMap = /* @__PURE__ */ new Map();
  visitDiff(diff, (child) => {
    if (child.action === "unchanged" || !("annotation" in child) || !child.annotation) {
      return true;
    }
    const {
      author,
      timestamp
    } = child.annotation;
    const previous = authorMap.get(author);
    if (!previous || previous.timestamp < timestamp) {
      authorMap.set(author, child.annotation);
    }
    return true;
  });
  return Array.from(authorMap.values()).sort((a, b) => a.timestamp < b.timestamp ? 1 : -1);
}
var Scroller$1 = styled_components_browser_esm_default(ScrollContainer)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  height: 100%;\n  overflow: auto;\n  position: relative;\n  scroll-behavior: smooth;\n"])));
function ChangesPanel() {
  const {
    documentId,
    onHistoryClose,
    schemaType,
    timelineError,
    timelineStore,
    value
  } = useDocumentPane();
  const {
    collapsed
  } = usePane();
  const scrollRef = (0, import_react.useRef)(null);
  const diff = useTimelineSelector(timelineStore, (state) => state.diff);
  const onOlderRevision = useTimelineSelector(timelineStore, (state) => state.onOlderRevision);
  const selectionState = useTimelineSelector(timelineStore, (state) => state.selectionState);
  const sinceTime = useTimelineSelector(timelineStore, (state) => state.sinceTime);
  const loading = selectionState === "loading";
  const isComparingCurrent = !onOlderRevision;
  const documentContext = import_react.default.useMemo(() => ({
    documentId,
    schemaType,
    FieldWrapper: ChangeFieldWrapper,
    rootDiff: diff,
    isComparingCurrent,
    value
  }), [documentId, diff, isComparingCurrent, schemaType, value]);
  const changeAnnotations = import_react.default.useMemo(() => diff ? collectLatestAuthorAnnotations(diff) : [], [diff]);
  if (collapsed) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
    direction: "column",
    flex: 1,
    style: {
      borderLeft: "1px dashed var(--card-border-color)",
      overflow: "hidden",
      minWidth: 320
    },
    "data-testid": "review-changes-pane",
    children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaneHeader, {
      actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
        icon: CloseIcon,
        mode: "bleed",
        onClick: onHistoryClose,
        padding: 3,
        title: "Hide changes panel"
      }),
      subActions: changeAnnotations.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
        paddingRight: 1,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DiffTooltip, {
          annotations: changeAnnotations,
          description: "Changes by",
          placement: "bottom-end",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarStack, {
            maxLength: 4,
            children: changeAnnotations.map((_ref24) => {
              let {
                author
              } = _ref24;
              return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserAvatar, {
                user: author
              }, author);
            })
          })
        })
      }),
      tabs: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimelineMenu, {
        mode: "since",
        chunk: sinceTime,
        placement: "bottom-start"
      }),
      title: "Changes"
    }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaneContent, {
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BoundaryElementProvider, {
        element: scrollRef.current,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scroller$1, {
          "data-ui": "Scroller",
          ref: scrollRef,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
            flex: 1,
            padding: 4,
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {
              diff,
              documentContext,
              error: timelineError,
              loading
            })
          })
        })
      })
    })]
  });
}
function Content(_ref25) {
  let {
    error,
    diff,
    documentContext,
    loading
  } = _ref25;
  const {
    schemaType
  } = useDocumentPane();
  if (error) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NoChanges, {});
  }
  if (loading) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingContent, {});
  }
  if (!diff) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NoChanges, {});
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentChangeContext.Provider, {
    value: documentContext,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChangeList, {
      diff,
      schemaType
    })
  });
}
function useDeskToolSetting(namespace, key, defaultValue) {
  const settingsStore = useSettingsStore();
  const [value, setValue] = (0, import_react.useState)(defaultValue);
  const deskToolSettings = (0, import_react.useMemo)(() => settingsStore.forNamespace("desk-tool"), [settingsStore]);
  const settings = (0, import_react.useMemo)(() => {
    if (namespace) {
      return deskToolSettings.forNamespace(namespace).forKey(key);
    }
    return deskToolSettings.forKey(key);
  }, [deskToolSettings, namespace, key]);
  (0, import_react.useEffect)(() => {
    const sub = settings.listen(defaultValue).subscribe({
      next: setValue
    });
    return () => sub == null ? void 0 : sub.unsubscribe();
  }, [defaultValue, key, namespace, settings]);
  const set = (0, import_react.useCallback)((newValue) => {
    setValue(newValue);
    settings.set(newValue);
  }, [settings]);
  return (0, import_react.useMemo)(() => [value, set], [set, value]);
}
var VIEW_MODE_PARSED = {
  id: "parsed",
  title: "Parsed"
};
var VIEW_MODE_RAW = {
  id: "raw",
  title: "Raw JSON"
};
var VIEW_MODES = [VIEW_MODE_PARSED, VIEW_MODE_RAW];
var lru = (0, import_hashlru.default)(1e3);
function isExpanded(keyPath, value) {
  const cached = lru.get(keyPath);
  if (cached === void 0) {
    lru.set(keyPath, Array.isArray(value) || isRecord$2(value));
    return isExpanded(keyPath, value);
  }
  return cached;
}
function toggleExpanded(event) {
  const {
    path
  } = event;
  const current = lru.get(path);
  if (current === void 0) {
    return;
  }
  lru.set(path, !current);
}
function selectElement(element) {
  const sel = window.getSelection();
  if (sel) {
    const range = document.createRange();
    sel.removeAllRanges();
    range.selectNodeContents(element);
    sel.addRange(range);
  }
}
function select(event) {
  selectElement(event.currentTarget);
}
function maybeSelectAll(event) {
  const selectAll = event.keyCode === 65 && (event.metaKey || event.ctrlKey);
  if (!selectAll) {
    return;
  }
  event.preventDefault();
  selectElement(event.currentTarget);
}
function isDocumentLike(value) {
  return isRecord$2(value) && isString(value._id) && isString(value._type);
}
var JSONInspectorWrapper = styled_components_browser_esm_default.div((_ref26) => {
  let {
    theme
  } = _ref26;
  const {
    color,
    fonts,
    space
  } = theme.sanity;
  return Ce(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    & .json-inspector,\n    & .json-inspector .json-inspector__selection {\n      font-family: ", ";\n      font-size: ", "px;\n      line-height: ", "px;\n      color: var(--card-code-fg-color);\n    }\n\n    & .json-inspector .json-inspector__leaf {\n      padding-left: ", ";\n    }\n\n    & .json-inspector .json-inspector__leaf.json-inspector__leaf_root {\n      padding-top: ", ";\n      padding-left: 0;\n    }\n\n    & .json-inspector > .json-inspector__leaf_root > .json-inspector__line > .json-inspector__key {\n      display: none;\n    }\n\n    & .json-inspector .json-inspector__line {\n      display: block;\n      position: relative;\n      cursor: default;\n    }\n\n    & .json-inspector .json-inspector__line::after {\n      content: '';\n      position: absolute;\n      top: 0;\n      left: -200px;\n      right: -50px;\n      bottom: 0;\n      z-index: -1;\n      pointer-events: none;\n    }\n\n    & .json-inspector .json-inspector__line:hover::after {\n      background: var(--card-code-bg-color);\n    }\n\n    & .json-inspector .json-inspector__leaf_composite > .json-inspector__line {\n      cursor: pointer;\n    }\n\n    & .json-inspector .json-inspector__leaf_composite > .json-inspector__line::before {\n      content: '\u25B8 ';\n      margin-left: calc(0 - ", " + 3px);\n      font-size: ", "px;\n      line-height: ", "px;\n    }\n\n    &\n      .json-inspector\n      .json-inspector__leaf_expanded.json-inspector__leaf_composite\n      > .json-inspector__line::before {\n      content: '\u25BE ';\n      font-size: ", "px;\n      line-height: ", "px;\n    }\n\n    & .json-inspector .json-inspector__radio,\n    & .json-inspector .json-inspector__flatpath {\n      display: none;\n    }\n\n    & .json-inspector .json-inspector__value {\n      margin-left: ", ";\n    }\n\n    &\n      .json-inspector\n      > .json-inspector__leaf_root\n      > .json-inspector__line\n      > .json-inspector__key\n      + .json-inspector__value {\n      margin: 0;\n    }\n\n    & .json-inspector .json-inspector__key {\n      color: ", ";\n    }\n\n    & .json-inspector .json-inspector__value_helper,\n    & .json-inspector .json-inspector__value_null {\n      color: ", ";\n    }\n\n    & .json-inspector .json-inspector__not-found {\n      padding-top: ", ";\n    }\n\n    & .json-inspector .json-inspector__value_string {\n      color: ", ";\n    }\n\n    & .json-inspector .json-inspector__value_boolean {\n      color: ", ";\n    }\n\n    & .json-inspector .json-inspector__value_number {\n      color: ", ";\n    }\n\n    & .json-inspector .json-inspector__show-original {\n      display: inline-block;\n      padding: 0 6px;\n      cursor: pointer;\n    }\n\n    & .json-inspector .json-inspector__show-original:hover {\n      color: inherit;\n    }\n\n    & .json-inspector .json-inspector__show-original::before {\n      content: '\u2194';\n    }\n\n    & .json-inspector .json-inspector__show-original:hover::after {\n      content: ' expand';\n    }\n  "])), fonts.code.family, fonts.code.sizes[2].fontSize, fonts.code.sizes[2].lineHeight, rem(space[4]), rem(space[3]), rem(space[4]), fonts.code.sizes[2].fontSize, fonts.code.sizes[2].lineHeight, fonts.code.sizes[2].fontSize, fonts.code.sizes[2].lineHeight, rem(space[4] / 2), color.syntax.property, color.syntax.constant, rem(space[3]), color.syntax.string, color.syntax.boolean, color.syntax.number);
});
function Search(props) {
  const {
    onChange,
    query
  } = props;
  const handleChange = (0, import_react.useCallback)((event) => onChange(event.target.value), [onChange]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
    icon: SearchIcon,
    onChange: handleChange,
    placeholder: "Search",
    radius: 2,
    value: query || ""
  });
}
function InspectDialog(props) {
  const {
    value
  } = props;
  const {
    onInspectClose,
    paneKey
  } = useDocumentPane();
  const dialogIdPrefix = "".concat(paneKey, "_inspect_");
  const [viewModeId, onViewModeChange] = useDeskToolSetting("desk-tool", "inspect-view-preferred-view-mode-".concat(paneKey), "parsed");
  const viewMode = VIEW_MODES.find((mode) => mode.id === viewModeId);
  const setParsedViewMode = (0, import_react.useCallback)(() => {
    onViewModeChange(VIEW_MODE_PARSED.id);
  }, [onViewModeChange]);
  const setRawViewMode = (0, import_react.useCallback)(() => {
    onViewModeChange(VIEW_MODE_RAW.id);
  }, [onViewModeChange]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
    id: "".concat(dialogIdPrefix, "dialog"),
    header: isDocumentLike(value) ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
      children: ["Inspecting", " ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocTitle, {
          document: value
        })
      })]
    }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
      children: "No value"
    }),
    onClose: onInspectClose,
    onClickOutside: onInspectClose,
    width: 3,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
      direction: "column",
      height: "fill",
      children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
        padding: 3,
        shadow: 1,
        style: {
          position: "sticky",
          bottom: 0,
          zIndex: 3
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabList, {
          space: 1,
          children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tab, {
            "aria-controls": "".concat(dialogIdPrefix, "tabpanel"),
            fontSize: 1,
            id: "".concat(dialogIdPrefix, "tab-").concat(VIEW_MODE_PARSED.id),
            label: VIEW_MODE_PARSED.title,
            onClick: setParsedViewMode,
            selected: viewMode === VIEW_MODE_PARSED
          }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tab, {
            "aria-controls": "".concat(dialogIdPrefix, "tabpanel"),
            fontSize: 1,
            id: "".concat(dialogIdPrefix, "tab-").concat(VIEW_MODE_RAW.id),
            label: VIEW_MODE_RAW.title,
            onClick: setRawViewMode,
            selected: viewMode === VIEW_MODE_RAW
          })]
        })
      }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabPanel, {
        "aria-labelledby": "".concat(dialogIdPrefix, "tab-").concat(viewModeId),
        flex: 1,
        id: "".concat(dialogIdPrefix, "tabpanel"),
        overflow: "auto",
        padding: 4,
        style: {
          outline: "none"
        },
        children: [viewMode === VIEW_MODE_PARSED && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JSONInspectorWrapper, {
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_json_inspector.default, {
            data: value,
            isExpanded,
            onClick: toggleExpanded,
            search: Search
          })
        }), viewMode === VIEW_MODE_RAW && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, {
          language: "json",
          tabIndex: 0,
          onKeyDown: maybeSelectAll,
          onDoubleClick: select,
          onFocus: select,
          children: JSON.stringify(value, null, 2)
        })]
      })]
    })
  });
}
var Root$2 = styled_components_browser_esm_default(Card)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  position: relative;\n  z-index: 50;\n"])));
var TextOneLine = styled_components_browser_esm_default(Text)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  & > * {\n    overflow: hidden;\n    overflow: clip;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n  }\n"])));
var ReferenceChangedBanner = (0, import_react.memo)(() => {
  var _a, _b, _c, _d, _e, _f;
  const documentPreviewStore = useDocumentPreviewStore();
  const {
    params,
    groupIndex,
    routerPanesState,
    replaceCurrent,
    BackLink: BackLink2
  } = usePaneRouter();
  const routerReferenceId = (_a = routerPanesState[groupIndex]) == null ? void 0 : _a[0].id;
  const parentGroup = routerPanesState[groupIndex - 1];
  const parentSibling = parentGroup == null ? void 0 : parentGroup[0];
  const parentId = parentSibling == null ? void 0 : parentSibling.id;
  const hasHistoryOpen = Boolean((_b = parentSibling == null ? void 0 : parentSibling.params) == null ? void 0 : _b.rev);
  const parentRefPath = (0, import_react.useMemo)(() => {
    return (params == null ? void 0 : params.parentRefPath) && fromString(params.parentRefPath) || null;
  }, [params == null ? void 0 : params.parentRefPath]);
  const referenceInfo = useMemoObservable(() => {
    const parentRefPathSegment = parentRefPath == null ? void 0 : parentRefPath[0];
    if (!parentId || !parentRefPathSegment || !parentRefPath) {
      return of({
        loading: false
      });
    }
    const publishedId = getPublishedId(parentId);
    const path = fromString(parentRefPathSegment);
    const keyedSegmentIndex = path.findIndex((p) => typeof p == "object" && "_key" in p);
    return concat(
      // emit a loading state instantly
      of({
        loading: true
      }),
      // then emit the values from watching the published ID's path
      documentPreviewStore.unstable_observePathsDocumentPair(publishedId, keyedSegmentIndex === -1 ? path : path.slice(0, keyedSegmentIndex)).pipe(
        // this debounce time is needed to prevent flashing banners due to
        // the router state updating faster than the content-lake state. we
        // debounce to wait for more emissions because the value pulled
        // initially could be stale.
        debounceTime(750),
        map((_ref27) => {
          let {
            draft,
            published
          } = _ref27;
          var _a2;
          return {
            loading: false,
            result: {
              availability: {
                draft: draft.availability,
                published: published.availability
              },
              refValue: (_a2 = get(draft.snapshot || published.snapshot, parentRefPath)) == null ? void 0 : _a2._ref
            }
          };
        })
      )
    );
  }, [documentPreviewStore, parentId, parentRefPath], {
    loading: true
  });
  const handleReloadReference = (0, import_react.useCallback)(() => {
    var _a2;
    if (referenceInfo.loading)
      return;
    if ((_a2 = referenceInfo.result) == null ? void 0 : _a2.refValue) {
      replaceCurrent({
        id: referenceInfo.result.refValue,
        params
      });
    }
  }, [referenceInfo.loading, referenceInfo.result, replaceCurrent, params]);
  const shouldHide = (
    // if `parentId` or `parentRefPath` is not present then this banner is n/a
    !parentId || !parentRefPath || // if viewing this pane via history, then hide
    hasHistoryOpen || // if loading, hide
    referenceInfo.loading || // if the parent document is not available (e.g. due to permission denied or
    // not found) we don't want to display a warning here, but instead rely on the
    // parent view to display the appropriate message
    !((_c = referenceInfo.result) == null ? void 0 : _c.availability.draft.available) && !((_d = referenceInfo.result) == null ? void 0 : _d.availability.published.available) || // if the references are the same, then hide the reference changed banner
    ((_e = referenceInfo.result) == null ? void 0 : _e.refValue) === routerReferenceId
  );
  if (shouldHide)
    return null;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root$2, {
    shadow: 1,
    tone: "caution",
    "data-testid": "reference-changed-banner",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
      paddingX: 4,
      paddingY: 2,
      sizing: "border",
      width: 1,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
        align: "center",
        children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
          size: 1,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WarningOutlineIcon, {})
        }), ((_f = referenceInfo.result) == null ? void 0 : _f.refValue) ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
          children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
            flex: 1,
            marginLeft: 3,
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextOneLine, {
              title: "This reference has changed since you opened it.",
              size: 1,
              children: "This reference has changed since you opened it."
            })
          }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
            marginLeft: 3,
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
              onClick: handleReloadReference,
              icon: SyncIcon,
              fontSize: 1,
              mode: "ghost",
              padding: 2,
              space: 2,
              text: "Reload reference"
            })
          })]
        }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
          children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
            flex: 1,
            marginLeft: 3,
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextOneLine, {
              title: "This reference has been removed since you opened it.",
              size: 1,
              children: "This reference has been removed since you opened it."
            })
          }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
            marginLeft: 3,
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
              as: BackLink2,
              icon: CloseIcon,
              fontSize: 1,
              mode: "ghost",
              padding: 2,
              space: 2,
              text: "Close reference"
            })
          })]
        })]
      })
    })
  });
});
ReferenceChangedBanner.displayName = "ReferenceChangedBanner";
var Root$1 = styled_components_browser_esm_default(Card)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  position: relative;\n  z-index: 50;\n"])));
function PermissionCheckBanner(_ref28) {
  let {
    granted,
    requiredPermission
  } = _ref28;
  var _a, _b;
  const currentUser = useCurrentUser();
  const plural = ((_a = currentUser == null ? void 0 : currentUser.roles) == null ? void 0 : _a.length) !== 1;
  const roles = join(((_b = currentUser == null ? void 0 : currentUser.roles) == null ? void 0 : _b.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
    children: r.title
  }, r.name))) || [], ", ");
  if (granted)
    return null;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root$1, {
    "data-testid": "permission-check-banner",
    shadow: 1,
    tone: "transparent",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
      paddingX: 4,
      paddingY: 3,
      sizing: "border",
      width: 1,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
        align: "flex-start",
        children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
          size: 1,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReadOnlyIcon, {})
        }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
          flex: 1,
          marginLeft: 3,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
            size: 1,
            children: ["Your role", plural && "s", " ", roles, " ", plural ? "do" : "does", " not have permissions to", " ", requiredPermission, " this document."]
          })
        })]
      })
    })
  });
}
function join(array, sep) {
  return array.reduce((result, item) => {
    if (result === null) {
      return [item];
    }
    return result.concat([sep, item]);
  }, null);
}
function usePrevious(value) {
  const ref = (0, import_react.useRef)();
  (0, import_react.useEffect)(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}
var LONG_ENOUGH_BUT_NOT_TOO_LONG = 1e3 * 60 * 60 * 24 * 24;
function useConditionalToast(params) {
  const toast = useToast();
  const wasEnabled = usePrevious(params.enabled);
  (0, import_react.useEffect)(() => {
    if (!wasEnabled && params.enabled) {
      toast.push({
        ...params,
        duration: LONG_ENOUGH_BUT_NOT_TOO_LONG
      });
    }
    if (wasEnabled && !params.enabled) {
      toast.push({
        ...params,
        // Note: @sanity/ui fallbacks to the default duration of 4s in case of falsey values
        duration: 0.01
      });
    }
  }, [params, toast, wasEnabled]);
}
var preventDefault = (ev) => ev.preventDefault();
function FormView(props) {
  var _a;
  const {
    hidden,
    margins
  } = props;
  const {
    collapsedFieldSets,
    collapsedPaths,
    displayed: value,
    editState,
    documentId,
    documentType,
    onChange,
    validation,
    ready,
    formState,
    onFocus,
    onBlur,
    onSetCollapsedPath,
    onPathOpen,
    onSetCollapsedFieldSet,
    onSetActiveFieldGroup
  } = useDocumentPane();
  const documentStore = useDocumentStore();
  const presence = useDocumentPresence(documentId);
  const patchChannel = (0, import_react.useMemo)(() => createPatchChannel(), []);
  const isLocked = (_a = editState == null ? void 0 : editState.transactionSyncLock) == null ? void 0 : _a.enabled;
  useConditionalToast({
    id: "sync-lock-".concat(documentId),
    status: "warning",
    enabled: isLocked,
    title: "Syncing document\u2026",
    description: "Please hold tight while the document is synced. This usually happens right after the document has been published, and it shouldn't take more than a few seconds"
  });
  (0, import_react.useEffect)(() => {
    const sub = documentStore.pair.documentEvents(documentId, documentType).pipe(tap((event) => {
      if (event.type === "mutation") {
        patchChannel.publish(prepareMutationEvent(event));
      }
      if (event.type === "rebase") {
        patchChannel.publish(prepareRebaseEvent(event));
      }
    })).subscribe();
    return () => {
      sub.unsubscribe();
    };
  }, [documentId, documentStore, documentType, patchChannel]);
  const hasRev = Boolean(value == null ? void 0 : value._rev);
  (0, import_react.useEffect)(() => {
    if (hasRev) {
      patchChannel.publish({
        type: "mutation",
        patches: [],
        snapshot: value
      });
    }
  }, [hasRev]);
  const formRef = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    if (ready && !(formState == null ? void 0 : formState.focusPath.length)) {
      focusFirstDescendant(formRef.current);
    }
  }, [ready]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
    hidden,
    paddingX: 4,
    paddingTop: 5,
    paddingBottom: 9,
    sizing: "border",
    width: 1,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PresenceOverlay, {
      margins,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
        as: "form",
        onSubmit: preventDefault,
        ref: formRef,
        children: ready ? formState === null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
          padding: 2,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
            children: "This form is hidden"
          })
        }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormBuilder, {
          __internal_patchChannel: patchChannel,
          collapsedFieldSets,
          collapsedPaths,
          focusPath: formState.focusPath,
          changed: formState.changed,
          focused: formState.focused,
          groups: formState.groups,
          id: "root",
          members: formState.members,
          onChange,
          onFieldGroupSelect: onSetActiveFieldGroup,
          onPathBlur: onBlur,
          onPathFocus: onFocus,
          onPathOpen,
          onSetFieldSetCollapsed: onSetCollapsedFieldSet,
          onSetPathCollapsed: onSetCollapsedPath,
          presence,
          readOnly: formState.readOnly,
          schemaType: formState.schemaType,
          validation,
          value: formState.value
        }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Delay, {
          ms: 300,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
            align: "center",
            direction: "column",
            height: "fill",
            justify: "center",
            children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spinner, {
              muted: true
            }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
              marginTop: 3,
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
                align: "center",
                muted: true,
                size: 1,
                children: "Loading document"
              })
            })]
          })
        })
      })
    })
  });
}
function prepareMutationEvent(event) {
  const patches = event.mutations.map((mut) => mut.patch).filter(Boolean);
  return {
    type: "mutation",
    snapshot: event.document,
    patches: fromMutationPatches(event.origin, patches)
  };
}
function prepareRebaseEvent(event) {
  const remotePatches = event.remoteMutations.map((mut) => mut.patch).filter(Boolean);
  const localPatches = event.localMutations.map((mut) => mut.patch).filter(Boolean);
  return {
    type: "rebase",
    snapshot: event.document,
    patches: fromMutationPatches("remote", remotePatches).concat(fromMutationPatches("local", localPatches))
  };
}
function DocumentHeaderTabs() {
  const {
    activeViewId,
    paneKey,
    views
  } = useDocumentPane();
  const tabPanelId = "".concat(paneKey, "tabpanel");
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabList, {
    space: 1,
    children: views.map((view, index2) => {
      var _a;
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentHeaderTab, {
        icon: view.icon,
        id: "".concat(paneKey, "tab-").concat(view.id),
        isActive: activeViewId === view.id,
        label: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
          children: view.title
        }),
        tabPanelId,
        viewId: index2 === 0 ? null : (_a = view.id) != null ? _a : null
      }, view.id);
    })
  });
}
function DocumentHeaderTab(props) {
  const {
    isActive,
    tabPanelId,
    viewId
  } = props;
  const {
    ready
  } = useDocumentPane();
  const {
    setView
  } = usePaneRouter();
  const handleClick = (0, import_react.useCallback)(() => setView(viewId), [setView, viewId]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tab, {
    ...props,
    "aria-controls": tabPanelId,
    disabled: !ready,
    fontSize: 1,
    selected: isActive,
    onClick: handleClick
  });
}
var BUTTON_PROPS = {
  error: {
    tone: "critical",
    icon: ErrorOutlineIcon
  },
  warning: {
    tone: "caution",
    icon: WarningOutlineIcon
  },
  info: {
    tone: "primary",
    icon: InfoOutlineIcon
  }
};
function ValidationMenu(props) {
  const {
    boundaryElement,
    isOpen,
    setOpen
  } = props;
  const {
    onFocus,
    onPathOpen,
    schemaType,
    validation
  } = useDocumentPane();
  const id = (0, import_react.useId)();
  const hasValidationMarkers = validation.length > 0;
  const hasErrorMarkers = validation.some(isValidationErrorMarker);
  const hasWarningMarkers = validation.some(isValidationWarningMarker);
  const hasInfoMarkers = validation.some(isValidationInfoMarker);
  const buttonProps = (0, import_react.useMemo)(() => {
    if (hasErrorMarkers)
      return BUTTON_PROPS.error;
    if (hasWarningMarkers)
      return BUTTON_PROPS.warning;
    if (hasInfoMarkers)
      return BUTTON_PROPS.info;
    return void 0;
  }, [hasErrorMarkers, hasInfoMarkers, hasWarningMarkers]);
  const handleOpen = (0, import_react.useCallback)((path) => {
    onPathOpen(path);
    onFocus(path);
  }, [onFocus, onPathOpen]);
  const handleClose = (0, import_react.useCallback)(() => setOpen(false), [setOpen]);
  if (!hasValidationMarkers)
    return null;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuButton, {
    id: id || "",
    button: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
      ...buttonProps,
      title: "Show validation issues",
      mode: "bleed",
      "data-testid": "validation-list-button"
    }),
    menu: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
      open: isOpen,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValidationList, {
        documentType: schemaType,
        validation,
        onClose: handleClose,
        onFocus: handleOpen
      })
    }),
    popover: {
      portal: true,
      boundaryElement,
      constrainSize: true,
      preventOverflow: true,
      width: 0
    },
    placement: "bottom"
  });
}
function DocumentHeaderTitle() {
  const {
    connectionState,
    schemaType,
    title,
    value: documentValue
  } = useDocumentPane();
  const subscribed = Boolean(documentValue) && connectionState === "connected";
  const {
    error,
    value
  } = useDocumentPreview({
    enabled: subscribed,
    schemaType,
    value: documentValue
  });
  if (connectionState !== "connected") {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {});
  }
  if (title) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
      children: title
    });
  }
  if (!documentValue) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
      children: ["New ", (schemaType == null ? void 0 : schemaType.title) || (schemaType == null ? void 0 : schemaType.name)]
    });
  }
  if (error) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
      children: ["Error: ", error.message]
    });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
    children: (value == null ? void 0 : value.title) || /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
      style: {
        color: "var(--card-muted-fg-color)"
      },
      children: "Untitled"
    })
  });
}
var isActionButton = (item) => Boolean(item.showAsAction);
var isMenuButton = (0, import_negate.default)(isActionButton);
var DocumentPanelHeader = (0, import_react.memo)((0, import_react.forwardRef)((_ref29, ref) => {
  let {
    rootElement
  } = _ref29;
  const {
    onMenuAction,
    onPaneClose,
    onPaneSplit,
    validation,
    menuItems,
    menuItemGroups,
    schemaType,
    timelineStore,
    ready,
    views,
    unstable_languageFilter
  } = useDocumentPane();
  const {
    features
  } = useDeskTool();
  const {
    index: index2,
    BackLink: BackLink2,
    hasGroupSiblings
  } = usePaneRouter();
  const contextMenuItems = (0, import_react.useMemo)(() => menuItems.filter(isMenuButton), [menuItems]);
  const [isValidationOpen, setValidationOpen] = import_react.default.useState(false);
  const showTabs = views.length > 1;
  const showVersionMenu = features.reviewChanges;
  const rev = useTimelineSelector(timelineStore, (state) => state.revTime);
  const {
    collapsed,
    isLast
  } = usePane();
  const tabIndex = isLast && !collapsed ? -1 : 0;
  const showSplitPaneButton = features.splitViews && onPaneSplit && views.length > 1;
  const showSplitPaneCloseButton = showSplitPaneButton && hasGroupSiblings;
  const showPaneGroupCloseButton = !showSplitPaneCloseButton && !features.backButton;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaneHeader, {
    ref,
    loading: !ready,
    title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentHeaderTitle, {}),
    tabs: showTabs && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentHeaderTabs, {}),
    tabIndex,
    backButton: features.backButton && index2 > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
      as: BackLink2,
      "data-as": "a",
      icon: ArrowLeftIcon,
      mode: "bleed"
    }),
    subActions: showVersionMenu && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimelineMenu, {
      chunk: rev,
      mode: "rev",
      placement: "bottom-end"
    }),
    actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Inline, {
      space: 1,
      children: [unstable_languageFilter.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
        children: unstable_languageFilter.map((languageFilterComponent, idx) => {
          return (0, import_react.createElement)(languageFilterComponent, {
            // eslint-disable-next-line react/no-array-index-key
            key: "language-filter-".concat(idx),
            schemaType
          });
        })
      }), validation.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValidationMenu, {
        boundaryElement: rootElement,
        isOpen: isValidationOpen,
        setOpen: setValidationOpen
      }, "validation-menu"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaneContextMenuButton, {
        itemGroups: menuItemGroups,
        items: contextMenuItems,
        onAction: onMenuAction
      }, "context-menu"), showSplitPaneButton && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
        icon: SplitVerticalIcon,
        mode: "bleed",
        onClick: onPaneSplit,
        title: "Split pane right"
      }, "split-pane-button"), showSplitPaneCloseButton && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
        icon: CloseIcon,
        mode: "bleed",
        onClick: onPaneClose,
        title: "Close split pane"
      }, "close-view-button"), showPaneGroupCloseButton && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
        icon: CloseIcon,
        mode: "bleed",
        title: "Close pane group",
        as: BackLink2
      }, "close-view-button")]
    })
  });
}));
DocumentPanelHeader.displayName = "DocumentPanelHeader";
var Scroller = styled_components_browser_esm_default(ScrollContainer)((_ref30) => {
  let {
    $disabled
  } = _ref30;
  if ($disabled) {
    return {
      height: "100%"
    };
  }
  return Ce(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n    height: 100%;\n    overflow: auto;\n    position: relative;\n    scroll-behavior: smooth;\n    outline: none;\n  "])));
});
var DocumentPanel = function DocumentPanel2(props) {
  const {
    footerHeight,
    isInspectOpen,
    rootElement,
    setDocumentPanelPortalElement
  } = props;
  const {
    activeViewId,
    displayed,
    documentId,
    editState,
    value,
    views,
    ready,
    schemaType,
    permissions,
    isPermissionsLoading
  } = useDocumentPane();
  const {
    collapsed: layoutCollapsed
  } = usePaneLayout();
  const parentPortal = usePortal();
  const {
    features
  } = useDeskTool();
  const [headerElement, setHeaderElement] = (0, import_react.useState)(null);
  const headerRect = useElementRect(headerElement);
  const portalRef = (0, import_react.useRef)(null);
  const [documentScrollElement, setDocumentScrollElement] = (0, import_react.useState)(null);
  const requiredPermission = value._createdAt ? "update" : "create";
  const activeView = (0, import_react.useMemo)(() => views.find((view) => view.id === activeViewId) || views[0] || {
    type: "form"
  }, [activeViewId, views]);
  const portalElement = features.splitPanes ? portalRef.current || parentPortal.element : parentPortal.element;
  const margins = (0, import_react.useMemo)(() => {
    if (layoutCollapsed) {
      return [(headerRect == null ? void 0 : headerRect.height) || 0, 0, footerHeight ? footerHeight + 2 : 2, 0];
    }
    return [0, 0, 2, 0];
  }, [layoutCollapsed, footerHeight, headerRect]);
  const formViewHidden = activeView.type !== "form";
  const activeViewNode = (0, import_react.useMemo)(() => activeView.type === "component" && activeView.component && (0, import_react.createElement)(activeView.component, {
    document: {
      draft: (editState == null ? void 0 : editState.draft) || null,
      displayed: displayed || value,
      historical: displayed,
      published: (editState == null ? void 0 : editState.published) || null
    },
    documentId,
    options: activeView.options,
    schemaType
  }), [activeView, displayed, documentId, editState == null ? void 0 : editState.draft, editState == null ? void 0 : editState.published, schemaType, value]);
  (0, import_react.useEffect)(() => {
    if (!(documentScrollElement == null ? void 0 : documentScrollElement.scrollTo))
      return;
    documentScrollElement.scrollTo(0, 0);
  }, [documentId, documentScrollElement]);
  (0, import_react.useEffect)(() => {
    if (portalElement) {
      setDocumentPanelPortalElement(portalElement);
    }
  }, [portalElement, setDocumentPanelPortalElement]);
  const inspectDialog = (0, import_react.useMemo)(() => {
    return isInspectOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InspectDialog, {
      value: displayed || value
    }) : null;
  }, [isInspectOpen, displayed, value]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
    direction: "column",
    flex: 2,
    overflow: layoutCollapsed ? void 0 : "hidden",
    children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentPanelHeader, {
      rootElement,
      ref: setHeaderElement
    }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaneContent, {
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalProvider, {
        element: portalElement,
        __unstable_elements: {
          documentScrollElement
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BoundaryElementProvider, {
          element: documentScrollElement,
          children: [activeView.type === "form" && !isPermissionsLoading && ready && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
            children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PermissionCheckBanner, {
              granted: Boolean(permissions == null ? void 0 : permissions.granted),
              requiredPermission
            }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReferenceChangedBanner, {})]
          }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Scroller, {
            $disabled: layoutCollapsed || false,
            "data-testid": "document-panel-scroller",
            ref: setDocumentScrollElement,
            children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormView, {
              hidden: formViewHidden,
              margins
            }, documentId + (ready ? "_ready" : "_pending")), activeViewNode]
          }), inspectDialog, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            "data-testid": "document-panel-portal",
            ref: portalRef
          })]
        })
      })
    })]
  });
};
var POPOVER_FALLBACK_PLACEMENTS = ["left", "bottom"];
var DIALOG_WIDTH_TO_UI_WIDTH = {
  small: 0,
  medium: 1,
  large: 2,
  full: "auto"
};
function ConfirmDialog(props) {
  const {
    dialog,
    referenceElement
  } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Popover, {
    content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmDialogContent, {
      dialog
    }),
    fallbackPlacements: POPOVER_FALLBACK_PLACEMENTS,
    open: true,
    placement: "top",
    portal: true,
    preventOverflow: true,
    referenceElement
  });
}
function ConfirmDialogContent(props) {
  const {
    dialog
  } = props;
  const {
    cancelButtonIcon,
    cancelButtonText,
    confirmButtonIcon,
    confirmButtonText,
    // color,
    message,
    onCancel,
    onConfirm,
    tone
  } = dialog;
  const {
    isTopLayer
  } = useLayer();
  const [element, setElement] = (0, import_react.useState)(null);
  const handleClickOutside = (0, import_react.useCallback)(() => {
    if (isTopLayer)
      onCancel();
  }, [isTopLayer, onCancel]);
  const handleGlobalKeyDown = (0, import_react.useCallback)((event) => {
    if (event.key === "Escape" && isTopLayer)
      onCancel();
  }, [isTopLayer, onCancel]);
  useClickOutside(handleClickOutside, [element]);
  useGlobalKeyDown(handleGlobalKeyDown);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
    direction: "column",
    ref: setElement,
    style: {
      minWidth: 320 - 16,
      maxWidth: 400
    },
    children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
      flex: 1,
      overflow: "auto",
      padding: 4,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
        children: message
      })
    }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
      paddingX: 4,
      paddingY: 3,
      style: {
        borderTop: "1px solid var(--card-border-color)"
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Grid, {
        columns: 2,
        gap: 2,
        children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
          icon: cancelButtonIcon,
          onClick: onCancel,
          mode: "ghost",
          text: cancelButtonText || "Cancel"
        }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
          icon: confirmButtonIcon,
          onClick: onConfirm,
          text: confirmButtonText || "Confirm",
          tone
        })]
      })
    })]
  });
}
function ModalDialog(props) {
  const {
    dialog
  } = props;
  const dialogId = (0, import_react.useId)();
  const footer = dialog.footer && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
    paddingX: 4,
    paddingY: 3,
    children: dialog.footer
  });
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegacyLayerProvider, {
    zOffset: "fullscreen",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
      __unstable_hideCloseButton: dialog.showCloseButton === false,
      footer,
      header: dialog.header,
      id: dialogId,
      onClose: dialog.onClose,
      onClickOutside: dialog.onClose,
      width: dialog.width === void 0 ? 1 : DIALOG_WIDTH_TO_UI_WIDTH[dialog.width],
      portal: "documentPanelPortalElement",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
        padding: 4,
        children: dialog.content
      })
    })
  });
}
function PopoverDialog(props) {
  const {
    dialog,
    referenceElement
  } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Popover, {
    content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverDialogContent, {
      dialog
    }),
    fallbackPlacements: POPOVER_FALLBACK_PLACEMENTS,
    open: true,
    placement: "top",
    portal: true,
    preventOverflow: true,
    referenceElement
  });
}
function PopoverDialogContent(props) {
  const {
    dialog
  } = props;
  const {
    content,
    onClose
  } = dialog;
  const {
    isTopLayer
  } = useLayer();
  const [element, setElement] = (0, import_react.useState)(null);
  const handleClickOutside = (0, import_react.useCallback)(() => {
    if (isTopLayer)
      onClose();
  }, [isTopLayer, onClose]);
  const handleGlobalKeyDown = (0, import_react.useCallback)((event) => {
    if (event.key === "Escape" && isTopLayer)
      onClose();
  }, [isTopLayer, onClose]);
  useClickOutside(handleClickOutside, [element]);
  useGlobalKeyDown(handleGlobalKeyDown);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    ref: setElement,
    children: content
  });
}
function ActionStateDialog(props) {
  const {
    dialog,
    referenceElement = null
  } = props;
  const modalId = (0, import_react.useId)();
  if (dialog.type === "confirm") {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmDialog, {
      dialog,
      referenceElement
    });
  }
  if (dialog.type === "popover") {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverDialog, {
      dialog,
      referenceElement
    });
  }
  if (dialog.type === "dialog" || !dialog.type) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModalDialog, {
      dialog
    });
  }
  const unknownModal = dialog;
  console.warn("Unsupported modal type ".concat(unknownModal.type));
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
    id: modalId,
    onClose: unknownModal.onClose,
    onClickOutside: unknownModal.onClose,
    width: 2,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
      padding: 4,
      children: unknownModal.content || /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
        children: ["Unexpected modal type (", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
          children: unknownModal.type
        }), ")"]
      })
    })
  });
}
function ActionMenuButton(props) {
  const {
    actionStates,
    disabled
  } = props;
  const idPrefix = (0, import_react.useId)();
  const buttonRef = (0, import_react.useRef)(null);
  const [actionIndex, setActionIndex] = (0, import_react.useState)(-1);
  const [referenceElement, setReferenceElement] = (0, import_react.useState)(null);
  const handleAction = (0, import_react.useCallback)((idx) => {
    setActionIndex(idx);
  }, []);
  const popoverProps = (0, import_react.useMemo)(() => ({
    placement: "top-end",
    portal: true,
    preventOverflow: true
  }), []);
  const currentAction = actionStates[actionIndex];
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
    children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuButton, {
      id: "".concat(idPrefix, "-action-menu"),
      button: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
        "data-testid": "action-menu-button",
        "aria-label": "Open document actions",
        disabled,
        icon: ChevronDownIcon,
        mode: "ghost",
        ref: buttonRef
      }),
      menu: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
        padding: 1,
        children: actionStates.map((actionState, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionMenuListItem, {
          actionState,
          disabled,
          index: idx,
          onAction: handleAction
        }, idx))
      }),
      popover: popoverProps,
      ref: setReferenceElement
    }), currentAction && currentAction.dialog && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegacyLayerProvider, {
      zOffset: "paneFooter",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionStateDialog, {
        dialog: currentAction.dialog,
        referenceElement
      })
    })]
  });
}
function ActionMenuListItem(props) {
  const {
    actionState,
    disabled,
    index: index2,
    onAction
  } = props;
  const {
    onHandle
  } = actionState;
  const handleClick = (0, import_react.useCallback)(() => {
    onAction(index2);
    if (onHandle)
      onHandle();
  }, [index2, onAction, onHandle]);
  const tooltipContent = actionState.title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
    padding: 2,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
      size: 1,
      children: actionState.title
    })
  });
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuItem, {
    "data-testid": "action-".concat(actionState.label.replace(" ", "")),
    disabled: disabled || Boolean(actionState.disabled),
    onClick: handleClick,
    padding: 0,
    tone: actionState.tone,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
      content: tooltipContent,
      disabled: !tooltipContent,
      fallbackPlacements: ["left", "bottom"],
      placement: "top",
      portal: true,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
        align: "center",
        paddingX: 3,
        children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
          flex: 1,
          paddingY: 3,
          children: [actionState.icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
            marginRight: 3,
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
              children: [(0, import_react.isValidElement)(actionState.icon) && actionState.icon, (0, import_react_is.isValidElementType)(actionState.icon) && (0, import_react.createElement)(actionState.icon)]
            })
          }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
            children: actionState.label
          })]
        }), actionState.shortcut && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
          marginLeft: 3,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hotkeys, {
            keys: String(actionState.shortcut).split("+").map((s) => s.slice(0, 1).toUpperCase() + s.slice(1))
          })
        })]
      })
    })
  });
}
function DocumentStatusBarActionsInner(props) {
  const {
    disabled,
    showMenu,
    states
  } = props;
  const [firstActionState, ...menuActionStates] = states;
  const [buttonElement, setButtonElement] = (0, import_react.useState)(null);
  const tooltipContent = (0, import_react.useMemo)(() => {
    if (!firstActionState || !firstActionState.title && !firstActionState.shortcut)
      return null;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
      padding: 2,
      style: {
        maxWidth: 300
      },
      align: "center",
      children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
        size: 1,
        children: firstActionState.title
      }), firstActionState.shortcut && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
        marginLeft: firstActionState.title ? 2 : 0,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hotkeys, {
          keys: String(firstActionState.shortcut).split("+").map((s) => s.slice(0, 1).toUpperCase() + s.slice(1).toLowerCase())
        })
      })]
    });
  }, [firstActionState]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
    children: [firstActionState && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayerProvider, {
      zOffset: 200,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
        disabled: !tooltipContent,
        content: tooltipContent,
        portal: true,
        placement: "top",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stack, {
          flex: 1,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
            "data-testid": "action-".concat(firstActionState.label),
            disabled: disabled || Boolean(firstActionState.disabled),
            icon: firstActionState.icon,
            onClick: firstActionState.onHandle,
            ref: setButtonElement,
            text: firstActionState.label,
            tone: firstActionState.tone || "primary"
          })
        })
      })
    }), showMenu && menuActionStates.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
      marginLeft: 1,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionMenuButton, {
        actionStates: menuActionStates,
        disabled
      })
    }), firstActionState && firstActionState.dialog && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionStateDialog, {
      dialog: firstActionState.dialog,
      referenceElement: buttonElement
    })]
  });
}
var DocumentStatusBarActions = (0, import_react.memo)(function DocumentStatusBarActions2() {
  const {
    actions,
    connectionState,
    documentId,
    editState
  } = useDocumentPane();
  if (!actions || !editState) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RenderActionCollectionState, {
    actions,
    actionProps: editState,
    children: (_ref31) => {
      let {
        states
      } = _ref31;
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentStatusBarActionsInner, {
        disabled: connectionState !== "connected",
        showMenu: actions.length > 1,
        states
      }, documentId);
    }
  });
});
var HistoryStatusBarActions = (0, import_react.memo)(function HistoryStatusBarActions2() {
  const {
    connectionState,
    editState,
    timelineStore
  } = useDocumentPane();
  const revTime = useTimelineSelector(timelineStore, (state) => state.revTime);
  const revision = (revTime == null ? void 0 : revTime.id) || "";
  const disabled = ((editState == null ? void 0 : editState.draft) || (editState == null ? void 0 : editState.published) || {})._rev === revision;
  const actionProps = (0, import_react.useMemo)(() => ({
    ...editState || {},
    revision
  }), [editState, revision]);
  const historyActions = (0, import_react.useMemo)(() => [HistoryRestoreAction], []);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RenderActionCollectionState, {
    actions: historyActions,
    actionProps,
    children: (_ref32) => {
      let {
        states
      } = _ref32;
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentStatusBarActionsInner, {
        disabled: connectionState !== "connected" || Boolean(disabled),
        showMenu: false,
        states
      });
    }
  });
});
var BADGE_TONES = {
  primary: "primary",
  success: "positive",
  warning: "caution",
  danger: "critical"
};
function DocumentBadgesInner(_ref33) {
  let {
    states
  } = _ref33;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Inline, {
    space: 1,
    children: states.map((badge, index2) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
      content: badge.title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
        padding: 2,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
          size: 1,
          children: badge.title
        })
      }),
      disabled: !badge.title,
      placement: "top",
      portal: true,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
        fontSize: 1,
        mode: "outline",
        paddingX: 2,
        paddingY: 1,
        radius: 4,
        tone: badge.color ? BADGE_TONES[badge.color] : void 0,
        style: {
          whiteSpace: "nowrap"
        },
        children: badge.label
      })
    }, String(index2)))
  });
}
function DocumentBadges() {
  const {
    badges,
    editState
  } = useDocumentPane();
  if (!editState || !badges)
    return null;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RenderBadgeCollectionState, {
    badges,
    badgeProps: editState,
    children: (_ref34) => {
      let {
        states
      } = _ref34;
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentBadgesInner, {
        states
      });
    }
  });
}
var Root2 = styled_components_browser_esm_default(Flex)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  cursor: default;\n"])));
function PublishStatus(props) {
  const {
    collapsed,
    disabled,
    lastPublished,
    lastUpdated,
    liveEdit
  } = props;
  const lastPublishedTimeAgo = useTimeAgo(lastPublished || "", {
    minimal: true,
    agoSuffix: true
  });
  const lastPublishedTime = useTimeAgo(lastPublished || "", {
    minimal: true
  });
  const lastUpdatedTimeAgo = useTimeAgo(lastUpdated || "", {
    minimal: true,
    agoSuffix: true
  });
  const lastUpdatedTime = useTimeAgo(lastUpdated || "", {
    minimal: true
  });
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root2, {
    align: "center",
    "data-ui": "SessionLayout",
    sizing: "border",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
      placement: "top",
      portal: true,
      content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stack, {
        padding: 3,
        space: 3,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
          size: 1,
          muted: true,
          children: liveEdit ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
            children: ["Last updated ", lastUpdated ? lastUpdatedTimeAgo : lastPublishedTimeAgo]
          }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
            children: ["Last published ", lastPublishedTimeAgo]
          })
        })
      }),
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
        mode: "bleed",
        tone: liveEdit ? "critical" : "positive",
        tabIndex: -1,
        disabled,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
          align: "center",
          children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
            marginRight: collapsed ? 0 : 3,
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
              size: 2,
              children: liveEdit ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlayIcon, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PublishIcon, {})
            })
          }), !collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
            size: 1,
            weight: "medium",
            children: liveEdit ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
              children: lastUpdated ? lastUpdatedTime : lastPublishedTime
            }) : lastPublishedTime
          })]
        })
      })
    })
  });
}
var StyledMotionPath = styled_components_browser_esm_default(motion.path)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  transform-origin: center;\n"])));
var Circle = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.circle, {
  fill: "none",
  r: "8",
  cx: "12.5",
  cy: "12.5",
  strokeWidth: "1.2",
  ...props
});
var Arrows = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledMotionPath, {
  fill: "none",
  d: "M14 17.5619L11.5 20.5L14.5 23.0619M11 7.43811L13.5 4.50001L10.5 1.93811",
  ...props
});
var Checkmark = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
  d: "M9.5 12.1316L11.7414 14.5L16 10",
  ...props
});
var Edit = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
  d: "M15 7L18 10M6 19L7 15L17 5L20 8L10 18L6 19Z",
  ...props
});
var rotateAnimation = Ue(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  0% {\n    transform: rotate(0);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"])));
var RotateGroup = styled_components_browser_esm_default.g(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  transform-origin: center;\n\n  &[data-rotate] {\n    animation: ", " 1s ease-in-out infinite;\n  }\n"])), rotateAnimation);
var root = {
  syncing: {
    scale: 1,
    transition: {
      duration: 0
    }
  },
  saved: {
    scale: [1, 0.8, 1.2, 0.9, 1.1, 0.95, 1.05, 0.99, 1],
    transition: {
      duration: 0.5,
      delay: 0.2
    }
  },
  changes: {
    transition: {
      duration: 0
    }
  }
};
var circle = {
  syncing: {
    strokeDasharray: "0, 0, 23, 3, 23, 3",
    strokeDashoffset: 10,
    opacity: 1,
    transition: {
      duration: 0
    }
  },
  saved: {
    strokeDasharray: "0, 0, 23, 0, 23, 0",
    strokeDashoffset: 10,
    opacity: 1,
    transition: {
      duration: 0.2
    }
  },
  changes: {
    strokeDasharray: "0, 60, 23, 0, 23, 0",
    strokeDashoffset: 0,
    opacity: 0,
    transition: {
      duration: 0.5
    }
  }
};
var arrows = {
  syncing: {
    opacity: 1,
    transition: {
      duration: 0
    }
  },
  saved: {
    opacity: 0,
    transition: {
      duration: 0.2
    }
  },
  changes: {
    opacity: 0
  }
};
var checkmark = {
  syncing: {
    pathLength: 0,
    transition: {
      duration: 0
    }
  },
  saved: {
    pathLength: 1,
    transition: {
      delay: 0.4,
      duration: 0.3
    }
  },
  changes: {
    pathLength: 0,
    transition: {
      duration: 0.2
    }
  }
};
var edit = {
  syncing: {
    pathLength: 0,
    transition: {
      duration: 0
    }
  },
  saved: {
    pathLength: 0,
    transition: {
      duration: 0
    }
  },
  changes: {
    pathLength: 1,
    transition: {
      duration: 0.4,
      delay: 0.5
    }
  }
};
function AnimatedStatusIcon(props) {
  const {
    status
  } = props;
  if (!status) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.2",
    "data-sanity-icon": "",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.g, {
      variants: root,
      initial: status,
      animate: status,
      children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RotateGroup, {
        "data-rotate": status === "changes" ? void 0 : "",
        children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrows, {
          variants: arrows,
          initial: status,
          animate: status
        }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, {
          variants: circle,
          initial: status,
          animate: status
        })]
      }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkmark, {
        variants: checkmark,
        initial: status,
        animate: status
      }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Edit, {
        variants: edit,
        initial: status,
        animate: status
      })]
    })
  });
}
var ReviewButton = import_react.default.forwardRef(function ReviewButton2(props, ref) {
  const {
    collapsed,
    status,
    lastUpdated,
    ...rest
  } = props;
  const lastUpdatedTime = useTimeAgo(lastUpdated || "", {
    minimal: true
  });
  const lastUpdatedTimeAgo = useTimeAgo(lastUpdated || "", {
    minimal: true,
    agoSuffix: true
  });
  const buttonProps = (0, import_react.useMemo)(() => {
    if (status === "syncing") {
      return {
        text: "Saving...",
        tone: void 0
      };
    }
    if (status === "changes") {
      return {
        text: lastUpdatedTime,
        tone: "caution"
      };
    }
    if (status === "saved") {
      return {
        text: "Saved!",
        tone: "positive"
      };
    }
    return {};
  }, [status, lastUpdatedTime]);
  if (!status) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
    placement: "top",
    portal: true,
    disabled: status !== "changes",
    content: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Stack, {
      padding: 3,
      space: 3,
      children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
        size: 1,
        weight: "semibold",
        children: "Review changes"
      }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
        size: 1,
        muted: true,
        children: ["Changes saved ", lastUpdatedTimeAgo]
      })]
    }),
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
      mode: "bleed",
      justify: "flex-start",
      tone: buttonProps == null ? void 0 : buttonProps.tone,
      ...rest,
      "data-testid": "review-changes-button",
      ref,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
        align: "center",
        children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
          marginRight: collapsed ? 0 : 3,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedStatusIcon, {
              status
            })
          })
        }), !collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
          size: 1,
          weight: "medium",
          children: buttonProps == null ? void 0 : buttonProps.text
        })]
      })
    })
  });
});
var ReviewChangesButton = import_react.default.memo(ReviewButton);
var SYNCING_TIMEOUT = 1e3;
var SAVED_TIMEOUT = 3e3;
var DocumentSparkline = (0, import_react.memo)(function DocumentSparkline2() {
  var _a;
  const {
    changesOpen,
    documentId,
    documentType,
    editState,
    onHistoryClose,
    onHistoryOpen,
    timelineStore,
    value
  } = useDocumentPane();
  const syncState = useSyncState(documentId, documentType);
  const lastUpdated = value == null ? void 0 : value._updatedAt;
  const lastPublished = (_a = editState == null ? void 0 : editState.published) == null ? void 0 : _a._updatedAt;
  const liveEdit = Boolean(editState == null ? void 0 : editState.liveEdit);
  const published = Boolean(editState == null ? void 0 : editState.published);
  const changed = Boolean(editState == null ? void 0 : editState.draft);
  const [rootFlexElement, setRootFlexElement] = (0, import_react.useState)(null);
  const rootFlexRect = useElementRect(rootFlexElement);
  const collapsed = !rootFlexRect || (rootFlexRect == null ? void 0 : rootFlexRect.width) < 300;
  const [status, setStatus] = (0, import_react.useState)(null);
  const showingRevision = useTimelineSelector(timelineStore, (state) => state.onOlderRevision);
  (0, import_react.useEffect)(() => {
    if (status === "syncing" && !syncState.isSyncing) {
      const timerId = setTimeout(() => setStatus("saved"), SYNCING_TIMEOUT);
      return () => clearTimeout(timerId);
    }
    if (status === "saved") {
      const timerId = setTimeout(() => setStatus(null), SAVED_TIMEOUT);
      return () => clearTimeout(timerId);
    }
  }, [status, lastUpdated, syncState.isSyncing]);
  (0, import_react.useLayoutEffect)(() => {
    setStatus(null);
  }, [documentId]);
  (0, import_react.useLayoutEffect)(() => {
    if (syncState.isSyncing) {
      setStatus("syncing");
    }
  }, [syncState.isSyncing, lastUpdated]);
  const reviewButton = (0, import_react.useMemo)(() => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewChangesButton, {
    lastUpdated,
    status: status || (changed ? "changes" : void 0),
    onClick: changesOpen ? onHistoryClose : onHistoryOpen,
    disabled: showingRevision,
    selected: changesOpen,
    collapsed
  }), [changed, changesOpen, onHistoryClose, onHistoryOpen, lastUpdated, showingRevision, status, collapsed]);
  const publishStatus = (0, import_react.useMemo)(() => (liveEdit || published) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
    marginRight: 1,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PublishStatus, {
      disabled: showingRevision,
      lastPublished,
      lastUpdated,
      liveEdit,
      collapsed
    })
  }), [collapsed, lastPublished, lastUpdated, liveEdit, published, showingRevision]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
    align: "center",
    "data-ui": "DocumentSparkline",
    ref: setRootFlexElement,
    children: [publishStatus, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
      align: "center",
      flex: 1,
      children: [reviewButton, !collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
        marginLeft: 3,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentBadges, {})
      })]
    })]
  });
});
var DocumentActionsBox = styled_components_browser_esm_default(Box)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  min-width: 10em;\n  max-width: 16em;\n"])));
function DocumentStatusBar(props) {
  const {
    actionsBoxRef
  } = props;
  const {
    badges,
    timelineStore
  } = useDocumentPane();
  const showingRevision = useTimelineSelector(timelineStore, (state) => state.onOlderRevision);
  return (0, import_react.useMemo)(() => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
    paddingLeft: 2,
    paddingRight: [2, 3],
    paddingY: 2,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
      align: "center",
      children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
        flex: [1, 2],
        children: badges && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentSparkline, {})
      }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentActionsBox, {
        flex: 1,
        marginLeft: [1, 3],
        ref: actionsBoxRef,
        children: showingRevision ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HistoryStatusBarActions, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentStatusBarActions, {})
      })]
    })
  }), [actionsBoxRef, badges, showingRevision]);
}
function KeyboardShortcutResponder(props) {
  const {
    actionsBoxElement,
    activeIndex,
    children,
    id,
    onActionStart,
    onKeyDown,
    rootRef,
    states,
    ...rest
  } = props;
  const activeAction = states[activeIndex];
  const handleKeyDown = (0, import_react.useCallback)((event) => {
    const matchingStates = states.filter((state) => state.shortcut && (0, import_is_hotkey.default)(state.shortcut, event));
    const matchingState = matchingStates[0];
    if (matchingStates.length > 1) {
      console.warn('Keyboard shortcut conflict: More than one document action matches the shortcut "'.concat(matchingState.shortcut, '"'));
    }
    if (matchingState && !matchingState.disabled && matchingState.onHandle) {
      event.preventDefault();
      matchingState.onHandle();
      onActionStart(states.indexOf(matchingState));
      return;
    }
    if (onKeyDown) {
      onKeyDown(event);
    }
  }, [onActionStart, onKeyDown, states]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Pane, {
    id,
    onKeyDown: handleKeyDown,
    tabIndex: -1,
    ...rest,
    ref: rootRef,
    children: [children, activeAction && activeAction.dialog && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegacyLayerProvider, {
      zOffset: "paneFooter",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionStateDialog, {
        dialog: activeAction.dialog,
        referenceElement: actionsBoxElement
      })
    })]
  });
}
var DocumentActionShortcuts = import_react.default.memo((props) => {
  const {
    actionsBoxElement,
    children,
    ...rest
  } = props;
  const {
    actions,
    editState
  } = useDocumentPane();
  const [activeIndex, setActiveIndex] = (0, import_react.useState)(-1);
  const onActionStart = (0, import_react.useCallback)((idx) => {
    setActiveIndex(idx);
  }, []);
  const actionProps = (0, import_react.useMemo)(() => editState && {
    ...editState,
    // @todo: what to call here?
    onComplete: () => void 0,
    // @todo: get revision string
    revision: void 0
  }, [editState]);
  if (!actionProps || !actions)
    return null;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RenderActionCollectionState, {
    actionProps,
    actions,
    children: (_ref35) => {
      let {
        states
      } = _ref35;
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyboardShortcutResponder, {
        ...rest,
        activeIndex,
        actionsBoxElement,
        onActionStart,
        states,
        children
      });
    }
  });
});
DocumentActionShortcuts.displayName = "DocumentActionShortcuts";
var DOCUMENT_PANEL_MIN_WIDTH = 320;
var DOCUMENT_PANEL_INITIAL_MIN_WIDTH = 600;
var CHANGES_PANEL_MIN_WIDTH = 320;
var DIALOG_PROVIDER_POSITION = [
  // We use the `position: fixed` for dialogs on narrow screens (< 512px).
  "fixed",
  // And we use the `position: absolute` strategy (within panes) on wide screens.
  "absolute"
];
var StyledChangeConnectorRoot = styled_components_browser_esm_default(ChangeConnectorRoot)(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  flex: 1;\n  display: flex;\n  min-height: 0;\n  min-width: 0;\n"])));
var DocumentPane = (0, import_react.memo)(function DocumentPane2(props) {
  const {
    name: parentSourceName
  } = useSource();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceProvider, {
    name: props.pane.source || parentSourceName,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentPaneInner, {
      ...props
    })
  });
});
function DocumentPaneInner(props) {
  var _a;
  const {
    pane,
    paneKey
  } = props;
  const {
    resolveNewDocumentOptions
  } = useSource().document;
  const paneRouter = usePaneRouter();
  const options = usePaneOptions(pane.options, paneRouter.params);
  const {
    documentType,
    isLoaded: isDocumentLoaded
  } = useDocumentType(options.id, options.type);
  const templateItems = (0, import_react.useMemo)(() => {
    return resolveNewDocumentOptions({
      type: "global"
    });
  }, [resolveNewDocumentOptions]);
  const [templatePermissions, isTemplatePermissionsLoading] = useTemplatePermissions({
    templateItems
  });
  const isLoaded = isDocumentLoaded && !isTemplatePermissionsLoading;
  const providerProps = (0, import_react.useMemo)(() => {
    return isLoaded && documentType && options.type !== documentType ? mergeDocumentType(props, options, documentType) : props;
  }, [props, documentType, isLoaded, options]);
  const {
    ReferenceChildLink: ReferenceChildLink2,
    handleEditReference,
    groupIndex,
    routerPanesState
  } = paneRouter;
  const childParams = ((_a = routerPanesState[groupIndex + 1]) == null ? void 0 : _a[0].params) || {};
  const routerPanesStateLength = routerPanesState.length;
  const {
    parentRefPath
  } = childParams;
  const activePath = (0, import_react.useMemo)(() => {
    return parentRefPath ? {
      path: fromString(parentRefPath),
      state: (
        // eslint-disable-next-line no-nested-ternary
        groupIndex >= routerPanesStateLength - 1 ? "none" : groupIndex >= routerPanesStateLength - 2 ? "selected" : "pressed"
      )
    } : {
      path: [],
      state: "none"
    };
  }, [parentRefPath, groupIndex, routerPanesStateLength]);
  if (options.type === "*" && !isLoaded) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingPane, {
      flex: 2.5,
      minWidth: 320,
      paneKey,
      title: "Loading document\u2026"
    });
  }
  if (!documentType) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorPane, {
      flex: 2.5,
      minWidth: 320,
      paneKey,
      title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
        children: "The document was not found"
      }),
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stack, {
        space: 4,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
          as: "p",
          children: ["The document type is not defined, and a document with the ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
            children: options.id
          }), " ", "identifier could not be found."]
        })
      })
    });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentPaneProvider, {
    ...providerProps,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReferenceInputOptionsProvider, {
      EditReferenceLinkComponent: ReferenceChildLink2,
      onEditReference: handleEditReference,
      initialValueTemplateItems: templatePermissions,
      activePath,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InnerDocumentPane, {})
    })
  }, "".concat(documentType, "-").concat(options.id));
}
function usePaneOptions(options) {
  let params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const templates = useTemplates();
  return (0, import_react.useMemo)(() => {
    if (options.type && options.type !== "*") {
      return options;
    }
    const templateName = options.template || params.template;
    const template = templateName ? templates.find((t) => t.id === templateName) : void 0;
    const documentType = template == null ? void 0 : template.schemaType;
    if (!documentType) {
      return options;
    }
    return {
      ...options,
      type: documentType
    };
  }, [options, params.template, templates]);
}
function mergeDocumentType(props, options, documentType) {
  return {
    ...props,
    pane: {
      ...props.pane,
      options: {
        ...options,
        type: documentType
      }
    }
  };
}
function InnerDocumentPane() {
  const {
    changesOpen,
    documentType,
    onFocus,
    onPathOpen,
    onHistoryOpen,
    onKeyUp,
    inspectOpen,
    paneKey,
    schemaType,
    value
  } = useDocumentPane();
  const {
    features
  } = useDeskTool();
  const {
    collapsed: layoutCollapsed
  } = usePaneLayout();
  const zOffsets = useZIndex();
  const [rootElement, setRootElement] = (0, import_react.useState)(null);
  const [footerElement, setFooterElement] = (0, import_react.useState)(null);
  const [actionsBoxElement, setActionsBoxElement] = (0, import_react.useState)(null);
  const [documentPanelPortalElement, setDocumentPanelPortalElement] = (0, import_react.useState)(null);
  const footerRect = useElementRect(footerElement);
  const footerH = footerRect == null ? void 0 : footerRect.height;
  const documentPanel = (0, import_react.useMemo)(() => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentPanel, {
    footerHeight: footerH || null,
    isInspectOpen: inspectOpen,
    rootElement,
    setDocumentPanelPortalElement
  }), [footerH, rootElement, inspectOpen]);
  const footer = (0, import_react.useMemo)(() => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalProvider, {
    __unstable_elements: {
      documentPanelPortalElement
    },
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogProvider, {
      position: DIALOG_PROVIDER_POSITION,
      zOffset: zOffsets.portal,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaneFooter, {
        ref: setFooterElement,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentStatusBar, {
          actionsBoxRef: setActionsBoxElement
        })
      })
    })
  }), [documentPanelPortalElement, zOffsets.portal]);
  const changesPanel = (0, import_react.useMemo)(() => {
    if (!features.reviewChanges)
      return null;
    if (!changesOpen)
      return null;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BoundaryElementProvider, {
      element: rootElement,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChangesPanel, {})
    });
  }, [changesOpen, features.reviewChanges, rootElement]);
  const onConnectorSetFocus = (0, import_react.useCallback)((path) => {
    onPathOpen(path);
    onFocus(path);
  }, [onPathOpen, onFocus]);
  const children = (0, import_react.useMemo)(() => {
    if (!schemaType) {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorPane, {
        flex: 2.5,
        minWidth: 320,
        paneKey,
        title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
          children: ["Unknown document type: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
            children: documentType
          })]
        }),
        tone: "caution",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Stack, {
          space: 4,
          children: [documentType && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
            as: "p",
            children: ["This document has the schema type ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
              children: documentType
            }), ", which is not defined as a type in the local content studio schema."]
          }), !documentType && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
            as: "p",
            children: "This document does not exist, and no schema type was specified for it."
          }), isDev && value && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
            children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
              as: "p",
              children: "Here is the JSON representation of the document:"
            }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
              padding: 3,
              overflow: "auto",
              radius: 2,
              shadow: 1,
              tone: "inherit",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, {
                language: "json",
                size: [1, 1, 2],
                children: JSON.stringify(value, null, 2)
              })
            })]
          })]
        })
      });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
      children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogProvider, {
        position: DIALOG_PROVIDER_POSITION,
        zOffset: zOffsets.portal,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flex, {
          direction: "column",
          flex: 1,
          height: layoutCollapsed ? void 0 : "fill",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StyledChangeConnectorRoot, {
            "data-testid": "change-connector-root",
            isReviewChangesOpen: changesOpen,
            onOpenReviewChanges: onHistoryOpen,
            onSetFocus: onConnectorSetFocus,
            children: [documentPanel, changesPanel]
          })
        })
      }), footer, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentOperationResults, {})]
    });
  }, [schemaType, zOffsets.portal, layoutCollapsed, changesOpen, onHistoryOpen, onConnectorSetFocus, documentPanel, changesPanel, footer, paneKey, documentType, value]);
  const currentMinWidth = changesOpen ? DOCUMENT_PANEL_INITIAL_MIN_WIDTH + CHANGES_PANEL_MIN_WIDTH : DOCUMENT_PANEL_INITIAL_MIN_WIDTH;
  const minWidth = changesOpen ? DOCUMENT_PANEL_MIN_WIDTH + CHANGES_PANEL_MIN_WIDTH : DOCUMENT_PANEL_MIN_WIDTH;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentActionShortcuts, {
    actionsBoxElement,
    currentMinWidth,
    "data-testid": "document-pane",
    flex: 2.5,
    id: paneKey,
    minWidth,
    onKeyUp,
    rootRef: setRootElement,
    children
  });
}
function NoDocumentTypesScreen() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
    height: "fill",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flex, {
      align: "center",
      height: "fill",
      justify: "center",
      padding: 4,
      sizing: "border",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
        width: 0,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
          padding: 4,
          radius: 2,
          shadow: 1,
          tone: "caution",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
            children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
                size: 1,
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WarningOutlineIcon, {})
              })
            }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Stack, {
              flex: 1,
              marginLeft: 3,
              space: 3,
              children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
                as: "h1",
                size: 1,
                weight: "bold",
                children: "No document types"
              }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
                as: "p",
                muted: true,
                size: 1,
                children: "Please define at least one document type in your schema."
              }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
                as: "p",
                muted: true,
                size: 1,
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
                  href: "https://www.sanity.io/docs/create-a-schema-and-configure-sanity-studio",
                  target: "_blank",
                  rel: "noreferrer",
                  children: "Learn how to add a document type \u2192"
                })
              })]
            })]
          })
        })
      })
    })
  });
}
var StyledPaneLayout = styled_components_browser_esm_default(PaneLayout)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n  min-height: 100%;\n  min-width: 320px;\n"])));
var isSaveHotkey = (0, import_is_hotkey.default)("mod+s");
var DeskTool = (0, import_react.memo)(function DeskTool2(_ref36) {
  let {
    onPaneChange
  } = _ref36;
  var _a;
  const {
    push: pushToast
  } = useToast();
  const schema = useSchema();
  const {
    layoutCollapsed,
    setLayoutCollapsed
  } = useDeskTool();
  const {
    paneDataItems,
    resolvedPanes
  } = useResolvedPanes();
  const isResolvingIntent = useRouterState((0, import_react.useCallback)((routerState) => typeof routerState.intent === "string", []));
  const [portalElement, setPortalElement] = (0, import_react.useState)(null);
  const handleRootCollapse = (0, import_react.useCallback)(() => setLayoutCollapsed(true), [setLayoutCollapsed]);
  const handleRootExpand = (0, import_react.useCallback)(() => setLayoutCollapsed(false), [setLayoutCollapsed]);
  (0, import_react.useEffect)(() => {
    if (resolvedPanes.length) {
      onPaneChange(resolvedPanes);
    }
  }, [onPaneChange, resolvedPanes]);
  (0, import_react.useEffect)(() => {
    const handleGlobalKeyDown = (event) => {
      if (isSaveHotkey(event)) {
        event.preventDefault();
        pushToast({
          closable: true,
          id: "auto-save-message",
          status: "info",
          title: "Your work is automatically saved!",
          duration: 4e3
        });
      }
    };
    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, [pushToast]);
  const hasDefinedDocumentTypes = (_a = schema._original) == null ? void 0 : _a.types.some(_isCustomDocumentTypeDefinition);
  if (!hasDefinedDocumentTypes) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NoDocumentTypesScreen, {});
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PortalProvider, {
    element: portalElement || null,
    children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StyledPaneLayout, {
      flex: 1,
      height: layoutCollapsed ? void 0 : "fill",
      minWidth: 512,
      onCollapse: handleRootCollapse,
      onExpand: handleRootExpand,
      children: [paneDataItems.map((_ref37) => {
        let {
          active,
          childItemId,
          groupIndex,
          itemId,
          key: paneKey,
          pane,
          index: paneIndex,
          params: paneParams,
          path,
          payload,
          siblingIndex,
          selected
        } = _ref37;
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Fragment, {
          children: pane === LOADING_PANE ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingPane, {
            paneKey,
            path,
            selected
          }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeskToolPane, {
            active,
            groupIndex,
            index: paneIndex,
            pane,
            childItemId,
            itemId,
            paneKey,
            params: paneParams,
            payload,
            path,
            selected,
            siblingIndex
          })
        }, "".concat(pane === LOADING_PANE ? "loading" : pane.type, "-").concat(paneIndex));
      }), paneDataItems.length <= 1 && isResolvingIntent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingPane, {
        paneKey: "intent-resolver"
      })]
    }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
      "data-portal": "",
      ref: setPortalElement
    })]
  });
});
function DeskToolBoundary(_ref38) {
  let {
    tool: {
      options
    }
  } = _ref38;
  const {
    unstable_sources: sources
  } = useWorkspace();
  const [firstSource] = sources;
  const {
    source,
    defaultDocumentNode,
    structure
  } = options || {};
  (0, import_react.useEffect)(() => {
    setActivePanes([]);
    return () => setActivePanes([]);
  }, []);
  const [{
    error
  }, setError] = (0, import_react.useState)({
    error: null
  });
  if (error)
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StructureError, {
      error
    });
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorBoundary, {
    onCatch: setError,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceProvider, {
      name: source || firstSource.name,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DeskToolProvider, {
        defaultDocumentNode,
        structure,
        children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeskTool, {
          onPaneChange: setActivePanes
        }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IntentResolver, {})]
      })
    })
  });
}
var index = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DeskToolBoundary
});

export {
  Delay,
  useDeskTool,
  DocumentPaneProvider,
  useDeskToolSetting,
  DocumentPane,
  index
};
//# sourceMappingURL=/build/_shared/chunk-MCOGTQKF.js.map
