import {
  PaneItem
} from "/build/_shared/chunk-LCU4VCYZ.js";
import {
  Delay,
  useDeskTool,
  useDeskToolSetting
} from "/build/_shared/chunk-MCOGTQKF.js";
import "/build/_shared/chunk-YO7MURLU.js";
import {
  BackLink,
  Pane,
  PaneContent,
  PaneHeader,
  PaneHeaderActions,
  _DEBUG,
  require_isNumber,
  usePane,
  usePaneLayout
} from "/build/_shared/chunk-XANHPADF.js";
import {
  ArrowLeftIcon,
  Box,
  Button,
  Card,
  CommandList,
  Container,
  DEFAULT_STUDIO_CLIENT_OPTIONS,
  Flex,
  Heading,
  SanityDefaultPreview,
  SearchIcon,
  SourceProvider,
  Spinner,
  SpinnerIcon,
  Stack,
  Subject,
  SyncIcon,
  Text,
  TextInput,
  Ue,
  asyncScheduler,
  catchError,
  collate,
  concat,
  createSearchQuery,
  debounce,
  defer,
  exhaustMapWithTrailing,
  fromEvent,
  fromString,
  getPublishedId,
  isIndexSegment,
  isKeySegment,
  isReferenceSchemaType,
  map,
  merge,
  mergeMap,
  of,
  partition,
  require_isEqual,
  require_isString,
  require_omit,
  require_shallow_equals,
  scan,
  share,
  startWith,
  styled_components_browser_esm_default,
  take,
  tap,
  throttleTime,
  throwError,
  timer,
  useClient,
  useObservableCallback,
  useSchema,
  useSource,
  useUnique
} from "/build/_shared/chunk-4NY5OEBK.js";
import "/build/_shared/chunk-EX55ICKE.js";
import "/build/_shared/chunk-RZPD7QDG.js";
import "/build/_shared/chunk-DWGBMFOF.js";
import "/build/_shared/chunk-E7KB5GSM.js";
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

// node_modules/sanity/lib/_chunks/index-5d8405fd.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_react = __toESM(require_react());
var import_shallow_equals = __toESM(require_shallow_equals());
var import_isEqual = __toESM(require_isEqual());
var import_omit = __toESM(require_omit());
var import_isNumber = __toESM(require_isNumber());
var import_isString = __toESM(require_isString());
var _templateObject;
var _templateObject2;
var _templateObject3;
var _templateObject4;
var _templateObject5;
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var PARTIAL_PAGE_LIMIT = 100;
var FULL_LIST_LIMIT = 2e3;
var DEFAULT_ORDERING = {
  by: [{
    field: "_updatedAt",
    direction: "desc"
  }]
};
var EMPTY_RECORD = {};
function removePublishedWithDrafts(documents) {
  return collate(documents).map((entry) => {
    const doc = entry.draft || entry.published;
    return {
      ...doc,
      hasPublished: !!entry.published,
      hasDraft: !!entry.draft
    };
  });
}
var RE_TYPE_NAME_IN_FILTER = /\b_type\s*==\s*(['"].*?['"]|\$.*?(?:\s|$))|\B(['"].*?['"]|\$.*?(?:\s|$))\s*==\s*_type\b/;
function getTypeNameFromSingleTypeFilter(filter) {
  let params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const matches = filter.match(RE_TYPE_NAME_IN_FILTER);
  if (!matches) {
    return null;
  }
  const match = (matches[1] || matches[2]).trim().replace(/^["']|["']$/g, "");
  if (match[0] === "$") {
    const k = match.slice(1);
    const v = params[k];
    return typeof v === "string" ? v : null;
  }
  return match;
}
function isSimpleTypeFilter(filter) {
  return /^_type\s*==\s*['"$]\w+['"]?\s*$/.test(filter.trim());
}
function applyOrderingFunctions(order, schemaType) {
  const orderBy = order.by.map((by) => {
    if (by.mapWith) {
      return by;
    }
    const fieldType = tryResolveSchemaTypeForPath(schemaType, by.field);
    if (!fieldType) {
      return by;
    }
    if (fieldExtendsType(fieldType, "datetime")) {
      return {
        ...by,
        mapWith: "dateTime"
      };
    }
    if (fieldType.jsonType === "string") {
      return {
        ...by,
        mapWith: "lower"
      };
    }
    return by;
  });
  return orderBy.every((item, index) => item === order.by[index]) ? order : {
    ...order,
    by: orderBy
  };
}
function tryResolveSchemaTypeForPath(baseType, path) {
  const pathSegments = fromString(path);
  let current = baseType;
  for (const segment of pathSegments) {
    if (!current) {
      return void 0;
    }
    if (typeof segment === "string") {
      current = getFieldTypeByName(current, segment);
      continue;
    }
    const isArrayAccessor = isKeySegment(segment) || isIndexSegment(segment);
    if (!isArrayAccessor || current.jsonType !== "array") {
      return void 0;
    }
    const [memberType, otherType] = current.of || [];
    if (otherType || !memberType) {
      return void 0;
    }
    if (!isReferenceSchemaType(memberType)) {
      current = memberType;
      continue;
    }
    const [refType, otherRefType] = memberType.to || [];
    if (otherRefType || !refType) {
      return void 0;
    }
    current = refType;
  }
  return current;
}
function getFieldTypeByName(type, fieldName) {
  if (!("fields" in type)) {
    return void 0;
  }
  const fieldType = type.fields.find((field) => field.name === fieldName);
  return fieldType ? fieldType.type : void 0;
}
function fieldExtendsType(field, ofType) {
  let current = field.type;
  while (current) {
    if (current.name === ofType) {
      return true;
    }
    if (!current.type && current.jsonType === ofType) {
      return true;
    }
    current = current.type;
  }
  return false;
}
var RootBox = styled_components_browser_esm_default(Box)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n"])));
var CommandListBox = styled_components_browser_esm_default(Box)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n"])));
var SKELETON_ITEMS = [...Array(30).keys()];
function LoadingView(props) {
  const {
    layout
  } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stack, {
    padding: 2,
    space: 1,
    children: SKELETON_ITEMS.map((num) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
      padding: 2,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SanityDefaultPreview, {
        isPlaceholder: true,
        layout
      })
    }, num))
  });
}
function DocumentListPaneContent(props) {
  const {
    childItemId,
    error,
    filterIsSimpleTypeConstraint,
    hasMaxItems,
    hasSearchQuery,
    isActive,
    isLazyLoading,
    isLoading,
    items,
    layout,
    loadingVariant,
    onListChange,
    onRetry,
    searchInputElement,
    showIcons
  } = props;
  const schema = useSchema();
  const {
    collapsed: layoutCollapsed
  } = usePaneLayout();
  const {
    collapsed,
    index
  } = usePane();
  const [shouldRender, setShouldRender] = (0, import_react.useState)(false);
  const handleEndReached = (0, import_react.useCallback)(() => {
    if (isLoading || isLazyLoading || !shouldRender)
      return;
    onListChange();
  }, [isLazyLoading, isLoading, onListChange, shouldRender]);
  (0, import_react.useEffect)(() => {
    if (collapsed)
      return void 0;
    const timer2 = setTimeout(() => {
      setShouldRender(true);
    }, 0);
    return () => {
      clearTimeout(timer2);
    };
  }, [collapsed, items]);
  const renderItem = (0, import_react.useCallback)((item, _ref) => {
    let {
      activeIndex
    } = _ref;
    const publishedId = getPublishedId(item._id);
    const isSelected = childItemId === publishedId;
    const pressed = !isActive && isSelected;
    const selected = isActive && isSelected;
    const isLastItem = activeIndex === items.length - 1;
    const showSpinner = isLastItem && isLazyLoading;
    const showMaxItemsMessage = isLastItem && hasMaxItems;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
      children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaneItem, {
        icon: showIcons === false ? false : void 0,
        id: publishedId,
        layout,
        marginBottom: 1,
        pressed,
        schemaType: schema.get(item._type),
        selected,
        value: item
      }), showSpinner && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flex, {
        align: "center",
        justify: "center",
        padding: 4,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spinner, {
          muted: true
        })
      }), showMaxItemsMessage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
        marginY: 1,
        paddingX: 3,
        paddingY: 4,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
          align: "center",
          muted: true,
          size: 1,
          children: ["Displaying a maximum of ", FULL_LIST_LIMIT, " documents"]
        })
      })]
    });
  }, [childItemId, isActive, items.length, layout, schema, showIcons, hasMaxItems, isLazyLoading]);
  const noDocumentsContent = (0, import_react.useMemo)(() => {
    if (hasSearchQuery) {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flex, {
        align: "center",
        direction: "column",
        height: "fill",
        justify: "center",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
          width: 1,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
            paddingX: 4,
            paddingY: 5,
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
              align: "center",
              muted: true,
              children: "No results found"
            })
          })
        })
      });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flex, {
      align: "center",
      direction: "column",
      height: "fill",
      justify: "center",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
        width: 1,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
          paddingX: 4,
          paddingY: 5,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
            align: "center",
            muted: true,
            children: filterIsSimpleTypeConstraint ? "No documents of this type" : "No matching documents"
          })
        })
      })
    });
  }, [filterIsSimpleTypeConstraint, hasSearchQuery]);
  const mainContent = (0, import_react.useMemo)(() => {
    if (!shouldRender) {
      return null;
    }
    if (error) {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flex, {
        align: "center",
        direction: "column",
        height: "fill",
        justify: "center",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
          width: 1,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Stack, {
            paddingX: 4,
            paddingY: 5,
            space: 4,
            children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
              as: "h3",
              children: "Could not fetch list items"
            }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
              as: "p",
              children: ["Error: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
                children: error.message
              })]
            }), onRetry && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
                icon: SyncIcon,
                onClick: onRetry,
                text: "Retry",
                tone: "primary"
              })
            })]
          })
        })
      });
    }
    if (!isLoading && items.length === 0) {
      return noDocumentsContent;
    }
    if (loadingVariant === "initial" && isLoading) {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Delay, {
        ms: 300,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingView, {
          layout
        })
      });
    }
    if (loadingVariant === "spinner" && isLoading) {
      return null;
    }
    const key = "".concat(index, "-").concat(collapsed);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RootBox, {
      overflow: "hidden",
      height: "fill",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandListBox, {
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandList, {
          activeItemDataAttr: "data-hovered",
          ariaLabel: "Document list",
          canReceiveFocus: true,
          focusRingOffset: -3,
          inputElement: searchInputElement,
          itemHeight: 51,
          items,
          onEndReached: handleEndReached,
          onlyShowSelectionWhenActive: true,
          overscan: 10,
          padding: 2,
          paddingBottom: 1,
          renderItem,
          wrapAround: false
        }, key)
      })
    });
  }, [
    collapsed,
    error,
    handleEndReached,
    index,
    isLoading,
    items,
    layout,
    loadingVariant,
    // noDocumentsContent,
    onRetry,
    renderItem,
    searchInputElement,
    shouldRender
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaneContent, {
    overflow: layoutCollapsed || loadingVariant === "initial" ? "hidden" : "auto",
    children: mainContent
  });
}
var DocumentListPaneHeader = (0, import_react.memo)((_ref2) => {
  let {
    contentAfter,
    index,
    initialValueTemplates = [],
    menuItemGroups = [],
    menuItems = [],
    setLayout,
    setSortOrder,
    title
  } = _ref2;
  const {
    features
  } = useDeskTool();
  const {
    collapsed,
    isLast
  } = usePane();
  const tabIndex = isLast && !collapsed ? -1 : 0;
  const actionHandlers = (0, import_react.useMemo)(() => {
    return {
      setLayout: (_ref3) => {
        let {
          layout: value
        } = _ref3;
        setLayout(value);
      },
      setSortOrder: (sort) => {
        setSortOrder(sort);
      }
    };
  }, [setLayout, setSortOrder]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaneHeader, {
    actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaneHeaderActions, {
      initialValueTemplateItems: initialValueTemplates,
      actionHandlers,
      menuItemGroups,
      menuItems
    }),
    backButton: features.backButton && index > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
      as: BackLink,
      "data-as": "a",
      icon: ArrowLeftIcon,
      mode: "bleed"
    }),
    contentAfter,
    tabIndex,
    title
  });
});
DocumentListPaneHeader.displayName = "DocumentListPaneHeader";
function listenSearchQuery(options) {
  const {
    client,
    schema,
    sort,
    limit,
    params,
    filter,
    searchQuery,
    staticTypeNames
  } = options;
  const sortBy = sort.by;
  const extendedProjection = sort == null ? void 0 : sort.extendedProjection;
  const events$ = defer(() => {
    return client.listen("*[".concat(filter, "]"), params, {
      events: ["welcome", "mutation", "reconnect"],
      includeResult: false,
      visibility: "query"
    });
  }).pipe(mergeMap((ev, i) => {
    const isFirst = i === 0;
    if (isFirst && ev.type !== "welcome") {
      return throwError(() => new Error(ev.type === "reconnect" ? "Could not establish EventSource connection" : 'Received unexpected type of first event "'.concat(ev.type, '"')));
    }
    return of(ev);
  }), share());
  const [welcome$, mutationAndReconnect$] = partition(events$, (ev) => ev.type === "welcome");
  return merge(welcome$.pipe(take(1)), mutationAndReconnect$.pipe(throttleTime(1e3, asyncScheduler, {
    leading: true,
    trailing: true
  }))).pipe(exhaustMapWithTrailing(() => {
    const typeNames$ = staticTypeNames ? of(staticTypeNames) : client.observable.fetch("array::unique(*[".concat(filter, "][]._type)"), params);
    return typeNames$.pipe(mergeMap((typeNames) => {
      const types = typeNames.flatMap((name) => schema.get(name) || []);
      const searchTerms = {
        filter,
        query: searchQuery || "",
        types
      };
      const searchOptions = {
        __unstable_extendedProjection: extendedProjection,
        comments: ["findability-source: ".concat(searchQuery ? "list-query" : "list")],
        limit,
        params,
        sort: sortBy
      };
      const {
        query: createdQuery,
        params: createdParams
      } = createSearchQuery(searchTerms, searchOptions);
      return client.observable.fetch(createdQuery, createdParams);
    }));
  }));
}
var EMPTY_ARRAY$1 = [];
var INITIAL_STATE = {
  error: null,
  onRetry: void 0,
  result: null
};
var INITIAL_QUERY_RESULTS = {
  result: null,
  error: null
};
function useDocumentList(opts) {
  const {
    filter,
    params: paramsProp,
    sortOrder,
    searchQuery
  } = opts;
  const client = useClient(DEFAULT_STUDIO_CLIENT_OPTIONS);
  const schema = useSchema();
  const [resultState, setResult] = (0, import_react.useState)(INITIAL_STATE);
  const {
    onRetry,
    error,
    result
  } = resultState;
  const documents = result == null ? void 0 : result.documents;
  const items = (0, import_react.useMemo)(() => documents ? removePublishedWithDrafts(documents) : EMPTY_ARRAY$1, [documents]);
  const [isLazyLoading, setIsLazyLoading] = (0, import_react.useState)(false);
  const [hasFullList, setHasFullList] = (0, import_react.useState)(false);
  const [shouldFetchFullList, setShouldFetchFullList] = (0, import_react.useState)(false);
  const typeNameFromFilter = (0, import_react.useMemo)(() => getTypeNameFromSingleTypeFilter(filter, paramsProp), [filter, paramsProp]);
  const isLoading = result === null && !error;
  const hasMaxItems = (documents == null ? void 0 : documents.length) === FULL_LIST_LIMIT;
  const onListChange = (0, import_react.useCallback)(() => {
    if (isLoading || hasFullList || shouldFetchFullList)
      return;
    setShouldFetchFullList(true);
  }, [isLoading, hasFullList, shouldFetchFullList]);
  const handleSetResult = (0, import_react.useCallback)((res) => {
    var _a, _b;
    if (res.error) {
      setResult(res);
      return;
    }
    const documentsLength = ((_b = (_a = res.result) == null ? void 0 : _a.documents) == null ? void 0 : _b.length) || 0;
    const isLoadingMoreItems = !res.error && (res == null ? void 0 : res.result) === null && shouldFetchFullList;
    if (isLoadingMoreItems) {
      setIsLazyLoading(true);
      return;
    }
    if (documentsLength < PARTIAL_PAGE_LIMIT && documentsLength !== 0 && !shouldFetchFullList) {
      setHasFullList(true);
    }
    if ((res == null ? void 0 : res.result) === null) {
      setResult((prev) => ({
        ...prev.error ? res : prev
      }));
      return;
    }
    setIsLazyLoading(false);
    setResult(res);
  }, [shouldFetchFullList]);
  const queryResults$ = (0, import_react.useMemo)(() => {
    const onRetry$ = new Subject();
    const _onRetry = () => onRetry$.next();
    const limit = shouldFetchFullList ? FULL_LIST_LIMIT : PARTIAL_PAGE_LIMIT;
    const sort = sortOrder || DEFAULT_ORDERING;
    return listenSearchQuery({
      client,
      filter,
      limit,
      params: paramsProp,
      schema,
      searchQuery: searchQuery || "",
      sort,
      staticTypeNames: typeNameFromFilter ? [typeNameFromFilter] : void 0
    }).pipe(map((results) => ({
      result: {
        documents: results
      },
      error: null
    })), startWith(INITIAL_QUERY_RESULTS), catchError((err) => {
      if (err instanceof ProgressEvent) {
        return throwError(() => new Error("Request error"));
      }
      return throwError(() => err);
    }), catchError((err, caught$) => {
      return concat(of({
        result: null,
        error: err
      }), merge(fromEvent(window, "online"), onRetry$).pipe(take(1), mergeMap(() => caught$)));
    }), scan((prev, next) => ({
      ...prev,
      ...next,
      onRetry: _onRetry
    })));
  }, [client, filter, paramsProp, schema, searchQuery, shouldFetchFullList, sortOrder, typeNameFromFilter]);
  (0, import_react.useEffect)(() => {
    const sub = queryResults$.subscribe(handleSetResult);
    return () => {
      sub.unsubscribe();
    };
  }, [handleSetResult, queryResults$]);
  const reset = (0, import_react.useCallback)(() => {
    setHasFullList(false);
    setIsLazyLoading(false);
    setResult(INITIAL_STATE);
    setShouldFetchFullList(false);
  }, []);
  (0, import_react.useEffect)(() => {
    reset();
  }, [reset, filter, paramsProp, sortOrder, searchQuery]);
  return {
    error,
    hasMaxItems,
    isLazyLoading,
    isLoading,
    isSearchReady: !error,
    items,
    onListChange,
    onRetry
  };
}
var EMPTY_ARRAY = [];
var rotate = Ue(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var AnimatedSpinnerIcon = styled_components_browser_esm_default(SpinnerIcon)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  animation: ", " 500ms linear infinite;\n"])), rotate);
var SearchCard = styled_components_browser_esm_default(Card)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  [data-ui='TextInput'] {\n    border-radius: inherit;\n  }\n"])));
function useShallowUnique(value) {
  const valueRef = (0, import_react.useRef)(value);
  if (!(0, import_shallow_equals.default)(valueRef.current, value)) {
    valueRef.current = value;
  }
  return valueRef.current;
}
var addSelectedStateToMenuItems = (options) => {
  const {
    menuItems,
    sortOrderRaw,
    layout
  } = options;
  return menuItems == null ? void 0 : menuItems.map((item) => {
    var _a, _b, _c, _d;
    if ((_a = item.params) == null ? void 0 : _a.layout) {
      return {
        ...item,
        selected: layout === ((_b = item.params) == null ? void 0 : _b.layout)
      };
    }
    if ((_c = item == null ? void 0 : item.params) == null ? void 0 : _c.by) {
      return {
        ...item,
        selected: (0, import_isEqual.default)(sortOrderRaw == null ? void 0 : sortOrderRaw.by, ((_d = item == null ? void 0 : item.params) == null ? void 0 : _d.by) || EMPTY_ARRAY)
      };
    }
    return {
      ...item,
      selected: false
    };
  });
};
var DocumentListPane = (0, import_react.memo)(function DocumentListPane2(props) {
  const {
    childItemId,
    index,
    isActive,
    isSelected,
    pane,
    paneKey
  } = props;
  const schema = useSchema();
  const {
    name: parentSourceName
  } = useSource();
  const {
    defaultLayout = "default",
    displayOptions,
    initialValueTemplates = EMPTY_ARRAY,
    menuItemGroups,
    menuItems,
    options,
    title
  } = pane;
  const {
    apiVersion,
    defaultOrdering = EMPTY_ARRAY,
    filter
  } = options;
  const params = useShallowUnique(options.params || EMPTY_RECORD);
  const sourceName = pane.source;
  const typeName = (0, import_react.useMemo)(() => getTypeNameFromSingleTypeFilter(filter, params), [filter, params]);
  const showIcons = (displayOptions == null ? void 0 : displayOptions.showIcons) !== false;
  const [layout, setLayout] = useDeskToolSetting(typeName, "layout", defaultLayout);
  const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
  const [searchInputValue, setSearchInputValue] = (0, import_react.useState)("");
  const [searchInputElement, setSearchInputElement] = (0, import_react.useState)(null);
  const showSearchLoadingRef = (0, import_react.useRef)(false);
  const defaultSortOrder = (0, import_react.useMemo)(() => {
    return (defaultOrdering == null ? void 0 : defaultOrdering.length) > 0 ? {
      by: defaultOrdering
    } : DEFAULT_ORDERING;
  }, [defaultOrdering]);
  const [sortOrderRaw, setSortOrder] = useDeskToolSetting(typeName, "sortOrder", defaultSortOrder);
  const sortWithOrderingFn = typeName && sortOrderRaw ? applyOrderingFunctions(sortOrderRaw, schema.get(typeName)) : sortOrderRaw;
  const sortOrder = useUnique(sortWithOrderingFn);
  const filterIsSimpleTypeConstraint = isSimpleTypeFilter(filter);
  const {
    error,
    hasMaxItems,
    isLazyLoading,
    isLoading,
    isSearchReady,
    items,
    onListChange,
    onRetry
  } = useDocumentList({
    apiVersion,
    filter,
    params,
    searchQuery: searchQuery == null ? void 0 : searchQuery.trim(),
    sortOrder
  });
  const menuItemsWithSelectedState = (0, import_react.useMemo)(() => addSelectedStateToMenuItems({
    menuItems,
    sortOrderRaw,
    layout
  }), [layout, menuItems, sortOrderRaw]);
  const handleQueryChange = useObservableCallback((event$) => {
    return event$.pipe(map((event) => event.target.value), tap(setSearchInputValue), debounce((value) => value === "" ? of("") : timer(300)), tap(setSearchQuery));
  }, []);
  const handleClearSearch = (0, import_react.useCallback)(() => {
    setSearchQuery("");
    setSearchInputValue("");
  }, []);
  const handleSearchKeyDown = (0, import_react.useCallback)((event) => {
    if (event.key === "Escape") {
      handleClearSearch();
    }
  }, [handleClearSearch]);
  (0, import_react.useEffect)(() => {
    if (showSearchLoadingRef.current === false && !isLoading) {
      showSearchLoadingRef.current = true;
    }
    return () => {
      showSearchLoadingRef.current = false;
    };
  }, [isLoading]);
  (0, import_react.useEffect)(() => {
    handleClearSearch();
    showSearchLoadingRef.current = false;
  }, [paneKey, handleClearSearch]);
  const loadingVariant = (0, import_react.useMemo)(() => {
    const showSpinner = isLoading && items.length === 0 && showSearchLoadingRef.current;
    if (showSpinner)
      return "spinner";
    return "initial";
  }, [isLoading, items.length]);
  const searchInput = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
    paddingX: 2,
    paddingBottom: 2,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchCard, {
      radius: 4,
      tone: "transparent",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
        "aria-label": "Search list",
        autoComplete: "off",
        border: false,
        clearButton: Boolean(searchQuery),
        disabled: !isSearchReady,
        fontSize: [2, 2, 1],
        icon: loadingVariant === "spinner" ? AnimatedSpinnerIcon : SearchIcon,
        onChange: handleQueryChange,
        onClear: handleClearSearch,
        onKeyDown: handleSearchKeyDown,
        placeholder: "Search list",
        radius: 2,
        ref: setSearchInputElement,
        spellCheck: false,
        value: searchInputValue
      })
    })
  });
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceProvider, {
    name: sourceName || parentSourceName,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Pane, {
      currentMaxWidth: 350,
      "data-ui": "DocumentListPane",
      id: paneKey,
      maxWidth: 640,
      minWidth: 320,
      selected: isSelected,
      children: [_DEBUG, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentListPaneHeader, {
        contentAfter: searchInput,
        index,
        initialValueTemplates,
        menuItemGroups,
        menuItems: menuItemsWithSelectedState,
        setLayout,
        setSortOrder,
        title
      }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentListPaneContent, {
        childItemId,
        error,
        filterIsSimpleTypeConstraint,
        hasMaxItems,
        hasSearchQuery: Boolean(searchQuery),
        isActive,
        isLazyLoading,
        isLoading,
        items,
        layout,
        loadingVariant,
        onListChange,
        onRetry,
        searchInputElement,
        showIcons
      }, paneKey)]
    })
  });
});
export {
  DocumentListPane as default
};
//# sourceMappingURL=/build/_shared/index-5d8405fd-DZWUNDDV.js.map
