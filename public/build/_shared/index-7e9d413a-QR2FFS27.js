import {
  useDeskTool
} from "/build/_shared/chunk-MCOGTQKF.js";
import "/build/_shared/chunk-YO7MURLU.js";
import {
  BackLink,
  Pane,
  PaneHeader,
  PaneHeaderActions,
  require_isNumber,
  usePane
} from "/build/_shared/chunk-XANHPADF.js";
import {
  ArrowLeftIcon,
  Box,
  Button,
  require_isString,
  require_omit,
  require_react_is,
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

// node_modules/sanity/lib/_chunks/index-7e9d413a.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_react = __toESM(require_react());
var import_react_is = __toESM(require_react_is());
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
function UserComponentPaneHeader(props) {
  const {
    actionHandlers,
    index,
    menuItems,
    menuItemGroups,
    title
  } = props;
  const {
    features
  } = useDeskTool();
  if (!(menuItems == null ? void 0 : menuItems.length) && !title) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaneHeader, {
    actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaneHeaderActions, {
      menuItems,
      menuItemGroups,
      actionHandlers
    }),
    backButton: features.backButton && index > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
      as: BackLink,
      "data-as": "a",
      icon: ArrowLeftIcon,
      mode: "bleed"
    }),
    title
  });
}
var Root = styled_components_browser_esm_default(Box)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n"])));
function UserComponentPaneContent(props) {
  const {
    children
  } = props;
  const {
    collapsed
  } = usePane();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
    hidden: collapsed,
    height: "fill",
    overflow: "auto",
    children
  });
}
function UserComponentPane(props) {
  const {
    index,
    pane,
    paneKey,
    ...restProps
  } = props;
  const {
    child,
    component,
    menuItems,
    menuItemGroups,
    title = "",
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    type: _unused,
    ...restPane
  } = pane;
  const [ref, setRef] = (0, import_react.useState)(null);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Pane, {
    id: paneKey,
    minWidth: 320,
    selected: restProps.isSelected,
    children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserComponentPaneHeader, {
      actionHandlers: ref == null ? void 0 : ref.actionHandlers,
      index,
      menuItems,
      menuItemGroups,
      title
    }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UserComponentPaneContent, {
      children: [(0, import_react_is.isValidElementType)(component) && (0, import_react.createElement)(component, {
        ...restProps,
        ...restPane,
        // NOTE: here we're utilizing the function form of refs so setting
        // the ref causes a re-render for `UserComponentPaneHeader`
        ...{
          ref: setRef
        },
        child,
        // @todo: Fix typings
        paneKey
      }), (0, import_react.isValidElement)(component) && component]
    })]
  });
}
export {
  UserComponentPane as default
};
//# sourceMappingURL=/build/_shared/index-7e9d413a-QR2FFS27.js.map
