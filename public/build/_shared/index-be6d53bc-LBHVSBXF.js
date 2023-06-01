import {
  PaneItem
} from "/build/_shared/chunk-LCU4VCYZ.js";
import {
  useDeskTool
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
  CommandList,
  require_isString,
  require_omit,
  styled_components_browser_esm_default
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

// node_modules/sanity/lib/_chunks/index-be6d53bc.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_react = __toESM(require_react());
var import_omit = __toESM(require_omit());
var import_isNumber = __toESM(require_isNumber());
var import_isString = __toESM(require_isString());
var _templateObject;
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var ListPaneHeader = (_ref) => {
  let {
    index,
    menuItems,
    menuItemGroups,
    title
  } = _ref;
  const {
    features
  } = useDeskTool();
  const {
    collapsed,
    isLast
  } = usePane();
  const tabIndex = isLast && !collapsed ? -1 : 0;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaneHeader, {
    actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaneHeaderActions, {
      menuItems,
      menuItemGroups
    }),
    backButton: features.backButton && index > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
      as: BackLink,
      "data-as": "a",
      icon: ArrowLeftIcon,
      mode: "bleed"
    }),
    tabIndex,
    title
  });
};
var Divider = styled_components_browser_esm_default.hr(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: var(--card-border-color);\n  height: 1px;\n  margin: 0;\n  border: none;\n"])));
function ListPaneContent(props) {
  const {
    childItemId,
    items,
    isActive,
    layout,
    showIcons,
    title
  } = props;
  const {
    collapsed: layoutCollapsed
  } = usePaneLayout();
  const getItemDisabled = (0, import_react.useCallback)((itemIndex) => {
    var _a;
    return ((_a = items == null ? void 0 : items.find((_, i) => i === itemIndex)) == null ? void 0 : _a.type) === "divider";
  }, [items]);
  const shouldShowIconForItem = (0, import_react.useCallback)((item) => {
    var _a;
    const itemShowIcon = (_a = item.displayOptions) == null ? void 0 : _a.showIcon;
    if (typeof itemShowIcon !== "undefined") {
      return itemShowIcon !== false;
    }
    return showIcons !== false;
  }, [showIcons]);
  const renderItem = (0, import_react.useCallback)((item, ctx) => {
    const {
      virtualIndex: itemIndex
    } = ctx;
    if (item.type === "divider") {
      return (
        // eslint-disable-next-line react/no-array-index-key
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
          marginTop: 1,
          marginBottom: 2,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Divider, {})
        }, "divider-".concat(itemIndex))
      );
    }
    const pressed = !isActive && childItemId === item.id;
    const selected = isActive && childItemId === item.id;
    const value = item._id && item.schemaType ? {
      _id: item._id,
      _type: item.schemaType.name,
      title: item.title
    } : void 0;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaneItem, {
      icon: shouldShowIconForItem(item) ? item.icon : false,
      id: item.id,
      layout,
      marginBottom: 1,
      pressed,
      schemaType: item.schemaType,
      selected,
      title: item.title,
      value
    }, item.id);
  }, [childItemId, isActive, layout, shouldShowIconForItem]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaneContent, {
    overflow: layoutCollapsed ? "hidden" : "auto",
    children: items && items.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandList, {
      activeItemDataAttr: "data-hovered",
      ariaLabel: "List of ".concat(title),
      canReceiveFocus: true,
      focusRingOffset: -3,
      getItemDisabled,
      itemHeight: 51,
      items,
      onlyShowSelectionWhenActive: true,
      padding: 2,
      paddingBottom: 1,
      renderItem,
      wrapAround: false
    })
  });
}
function ListPane(props) {
  const {
    childItemId,
    index,
    isActive,
    isSelected,
    pane,
    paneKey
  } = props;
  const {
    defaultLayout,
    displayOptions,
    items,
    menuItems,
    menuItemGroups,
    title
  } = pane;
  const showIcons = (displayOptions == null ? void 0 : displayOptions.showIcons) !== false;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Pane, {
    currentMaxWidth: 350,
    "data-testid": "desk-tool-list-pane",
    "data-ui": "ListPane",
    id: paneKey,
    maxWidth: 640,
    minWidth: 320,
    selected: isSelected,
    children: [_DEBUG, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListPaneHeader, {
      index,
      menuItems,
      menuItemGroups,
      title
    }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListPaneContent, {
      childItemId,
      isActive,
      items,
      layout: defaultLayout,
      showIcons,
      title
    }, paneKey)]
  });
}
export {
  ListPane as default
};
//# sourceMappingURL=/build/_shared/index-be6d53bc-LBHVSBXF.js.map
