import {
  OG_IMAGE_HEIGHT,
  OG_IMAGE_WIDTH,
  secondsToMinutes
} from "/build/_shared/chunk-TGHXYJU4.js";
import {
  getImageDimensions
} from "/build/_shared/chunk-DWGBMFOF.js";
import {
  ThumbsDown,
  ThumbsUp
} from "/build/_shared/chunk-NFNY43FL.js";
import {
  RecordCover,
  Title
} from "/build/_shared/chunk-J7ELH5YQ.js";
import {
  PreviewWrapper
} from "/build/_shared/chunk-IKQGDK4R.js";
import {
  useFetcher,
  useLoaderData,
  useLocation
} from "/build/_shared/chunk-SJDDFQ2Q.js";
import {
  require_image_url_umd
} from "/build/_shared/chunk-E7KB5GSM.js";
import {
  projectDetails
} from "/build/_shared/chunk-KCXGHVR5.js";
import "/build/_shared/chunk-6TKMBU2E.js";
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

// browser-route-module:routes/$slug.tsx?browser
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/routes/$slug.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/components/Record.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/components/LikeDislike.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function LikeDislike(props) {
  var _a, _b;
  const { id } = props;
  const fetcher = useFetcher();
  const location = useLocation();
  const isDone = fetcher.state === "idle" && fetcher.data !== null;
  const isWorking = fetcher.state === "loading" || fetcher.state === "submitting";
  const likes = isDone && Number((_a = fetcher == null ? void 0 : fetcher.data) == null ? void 0 : _a.likes) ? fetcher.data.likes : props == null ? void 0 : props.likes;
  const optimisticLikes = fetcher.formData && fetcher.formData.get("action") === "LIKE" ? likes + 1 : likes;
  const displayLikes = optimisticLikes || likes;
  const dislikes = isDone && Number((_b = fetcher == null ? void 0 : fetcher.data) == null ? void 0 : _b.dislikes) ? fetcher.data.dislikes : props == null ? void 0 : props.dislikes;
  const optimisticDislikes = fetcher.formData && fetcher.formData.get("action") === "DISLIKE" ? dislikes + 1 : dislikes;
  const displayDislikes = optimisticDislikes || dislikes;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    fetcher.Form,
    {
      action: location.pathname,
      className: "flex items-center justify-center gap-4 bg-black text-white",
      method: "post",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "id", type: "hidden", value: id }, void 0, false, {
          fileName: "app/components/LikeDislike.tsx",
          lineNumber: 44,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "button",
          {
            name: "action",
            type: "submit",
            value: "LIKE",
            disabled: isWorking,
            className: "flex items-center gap-2 bg-black p-4 transition-all duration-100 ease-in-out hover:bg-cyan-400 hover:text-black disabled:opacity-50",
            title: "Like",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs font-bold", children: displayLikes }, void 0, false, {
                fileName: "app/components/LikeDislike.tsx",
                lineNumber: 53,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThumbsUp, {}, void 0, false, {
                fileName: "app/components/LikeDislike.tsx",
                lineNumber: 54,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Like" }, void 0, false, {
                fileName: "app/components/LikeDislike.tsx",
                lineNumber: 55,
                columnNumber: 9
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "app/components/LikeDislike.tsx",
            lineNumber: 45,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "button",
          {
            name: "action",
            type: "submit",
            value: "DISLIKE",
            disabled: isWorking,
            className: "flex items-center gap-2 bg-black p-4 transition-all duration-100 ease-in-out hover:bg-cyan-400 hover:text-black disabled:opacity-50",
            title: "Dislike",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThumbsDown, {}, void 0, false, {
                fileName: "app/components/LikeDislike.tsx",
                lineNumber: 65,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs font-bold", children: displayDislikes }, void 0, false, {
                fileName: "app/components/LikeDislike.tsx",
                lineNumber: 66,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Dislike" }, void 0, false, {
                fileName: "app/components/LikeDislike.tsx",
                lineNumber: 67,
                columnNumber: 9
              }, this)
            ]
          },
          void 0,
          true,
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
    true,
    {
      fileName: "app/components/LikeDislike.tsx",
      lineNumber: 39,
      columnNumber: 5
    },
    this
  );
}

// app/components/SanityContent.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// node_modules/@portabletext/react/dist/react-portable-text.esm.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// node_modules/@portabletext/toolkit/dist/portable-text-toolkit.esm.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function isPortableTextSpan(node) {
  return node._type === "span" && "text" in node && typeof node.text === "string" && (typeof node.marks === "undefined" || Array.isArray(node.marks) && node.marks.every((mark) => typeof mark === "string"));
}
function isPortableTextBlock(node) {
  return (
    // A block doesn't _have_ to be named 'block' - to differentiate between
    // allowed child types and marks, one might name them differently
    typeof node._type === "string" && // Toolkit-types like nested spans are @-prefixed
    node._type[0] !== "@" && // `markDefs` isn't _required_ per say, but if it's there, it needs to be an array
    (!("markDefs" in node) || Array.isArray(node.markDefs) && // Every mark definition needs to have an `_key` to be mappable in child spans
    node.markDefs.every((def) => typeof def._key === "string")) && // `children` is required and needs to be an array
    "children" in node && Array.isArray(node.children) && // All children are objects with `_type` (usually spans, but can contain other stuff)
    node.children.every((child) => typeof child === "object" && "_type" in child)
  );
}
function isPortableTextListItemBlock(block) {
  return isPortableTextBlock(block) && "listItem" in block && typeof block.listItem === "string" && (typeof block.level === "undefined" || typeof block.level === "number");
}
function isPortableTextToolkitList(block) {
  return block._type === "@list";
}
function isPortableTextToolkitSpan(span) {
  return span._type === "@span";
}
function isPortableTextToolkitTextNode(node) {
  return node._type === "@text";
}
var knownDecorators = ["strong", "em", "code", "underline", "strike-through"];
function sortMarksByOccurences(span, index, blockChildren) {
  if (!isPortableTextSpan(span) || !span.marks) {
    return [];
  }
  if (!span.marks.length) {
    return [];
  }
  const marks = span.marks.slice();
  const occurences = {};
  marks.forEach((mark) => {
    occurences[mark] = 1;
    for (let siblingIndex = index + 1; siblingIndex < blockChildren.length; siblingIndex++) {
      const sibling = blockChildren[siblingIndex];
      if (sibling && isPortableTextSpan(sibling) && Array.isArray(sibling.marks) && sibling.marks.indexOf(mark) !== -1) {
        occurences[mark]++;
      } else {
        break;
      }
    }
  });
  return marks.sort((markA, markB) => sortMarks(occurences, markA, markB));
}
function sortMarks(occurences, markA, markB) {
  const aOccurences = occurences[markA];
  const bOccurences = occurences[markB];
  if (aOccurences !== bOccurences) {
    return bOccurences - aOccurences;
  }
  const aKnownPos = knownDecorators.indexOf(markA);
  const bKnownPos = knownDecorators.indexOf(markB);
  if (aKnownPos !== bKnownPos) {
    return aKnownPos - bKnownPos;
  }
  return markA.localeCompare(markB);
}
function buildMarksTree(block) {
  var _a;
  const {
    children,
    markDefs = []
  } = block;
  if (!children || !children.length) {
    return [];
  }
  const sortedMarks = children.map(sortMarksByOccurences);
  const rootNode = {
    _type: "@span",
    children: [],
    markType: "<unknown>"
  };
  let nodeStack = [rootNode];
  for (let i = 0; i < children.length; i++) {
    const span = children[i];
    if (!span) {
      continue;
    }
    const marksNeeded = sortedMarks[i] || [];
    let pos = 1;
    if (nodeStack.length > 1) {
      for (pos; pos < nodeStack.length; pos++) {
        const mark = ((_a = nodeStack[pos]) == null ? void 0 : _a.markKey) || "";
        const index = marksNeeded.indexOf(mark);
        if (index === -1) {
          break;
        }
        marksNeeded.splice(index, 1);
      }
    }
    nodeStack = nodeStack.slice(0, pos);
    let currentNode = nodeStack[nodeStack.length - 1];
    if (!currentNode) {
      continue;
    }
    for (const markKey of marksNeeded) {
      const markDef = markDefs.find((def) => def._key === markKey);
      const markType = markDef ? markDef._type : markKey;
      const node = {
        _type: "@span",
        _key: span._key,
        children: [],
        markDef,
        markType,
        markKey
      };
      currentNode.children.push(node);
      nodeStack.push(node);
      currentNode = node;
    }
    if (isPortableTextSpan(span)) {
      const lines = span.text.split("\n");
      for (let line = lines.length; line-- > 1; ) {
        lines.splice(line, 0, "\n");
      }
      currentNode.children = currentNode.children.concat(lines.map((text) => ({
        _type: "@text",
        text
      })));
    } else {
      currentNode.children = currentNode.children.concat(span);
    }
  }
  return rootNode.children;
}
function nestLists(blocks, mode) {
  const tree = [];
  let currentList;
  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    if (!block) {
      continue;
    }
    if (!isPortableTextListItemBlock(block)) {
      tree.push(block);
      currentList = void 0;
      continue;
    }
    if (!currentList) {
      currentList = listFromBlock(block, i, mode);
      tree.push(currentList);
      continue;
    }
    if (blockMatchesList(block, currentList)) {
      currentList.children.push(block);
      continue;
    }
    if ((block.level || 1) > currentList.level) {
      const newList = listFromBlock(block, i, mode);
      if (mode === "html") {
        const lastListItem = currentList.children[currentList.children.length - 1];
        const newLastChild = _objectSpread(_objectSpread({}, lastListItem), {}, {
          children: [...lastListItem.children, newList]
        });
        currentList.children[currentList.children.length - 1] = newLastChild;
      } else {
        currentList.children.push(newList);
      }
      currentList = newList;
      continue;
    }
    if ((block.level || 1) < currentList.level) {
      const matchingBranch = tree[tree.length - 1];
      const match = matchingBranch && findListMatching(matchingBranch, block);
      if (match) {
        currentList = match;
        currentList.children.push(block);
        continue;
      }
      currentList = listFromBlock(block, i, mode);
      tree.push(currentList);
      continue;
    }
    if (block.listItem !== currentList.listItem) {
      const matchingBranch = tree[tree.length - 1];
      const match = matchingBranch && findListMatching(matchingBranch, {
        level: block.level || 1
      });
      if (match && match.listItem === block.listItem) {
        currentList = match;
        currentList.children.push(block);
        continue;
      } else {
        currentList = listFromBlock(block, i, mode);
        tree.push(currentList);
        continue;
      }
    }
    console.warn("Unknown state encountered for block", block);
    tree.push(block);
  }
  return tree;
}
function blockMatchesList(block, list) {
  return (block.level || 1) === list.level && block.listItem === list.listItem;
}
function listFromBlock(block, index, mode) {
  return {
    _type: "@list",
    _key: "".concat(block._key || "".concat(index), "-parent"),
    mode,
    level: block.level || 1,
    listItem: block.listItem,
    children: [block]
  };
}
function findListMatching(rootNode, matching) {
  const level = matching.level || 1;
  const style = matching.listItem || "normal";
  const filterOnType = typeof matching.listItem === "string";
  if (isPortableTextToolkitList(rootNode) && (rootNode.level || 1) === level && filterOnType && (rootNode.listItem || "normal") === style) {
    return rootNode;
  }
  if (!("children" in rootNode)) {
    return void 0;
  }
  const node = rootNode.children[rootNode.children.length - 1];
  return node && !isPortableTextSpan(node) ? findListMatching(node, matching) : void 0;
}
function spanToPlainText(span) {
  let text = "";
  span.children.forEach((current) => {
    if (isPortableTextToolkitTextNode(current)) {
      text += current.text;
    } else if (isPortableTextToolkitSpan(current)) {
      text += spanToPlainText(current);
    }
  });
  return text;
}
var LIST_NEST_MODE_HTML = "html";

// node_modules/@portabletext/react/dist/react-portable-text.esm.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_react2 = __toESM(require_react());
function mergeComponents(parent, overrides) {
  const {
    block,
    list,
    listItem,
    marks,
    types,
    ...rest
  } = overrides;
  return {
    ...parent,
    block: mergeDeeply(parent, overrides, "block"),
    list: mergeDeeply(parent, overrides, "list"),
    listItem: mergeDeeply(parent, overrides, "listItem"),
    marks: mergeDeeply(parent, overrides, "marks"),
    types: mergeDeeply(parent, overrides, "types"),
    ...rest
  };
}
function mergeDeeply(parent, overrides, key) {
  const override = overrides[key];
  const parentVal = parent[key];
  if (typeof override === "function") {
    return override;
  }
  if (override && typeof parentVal === "function") {
    return override;
  }
  if (override) {
    return {
      ...parentVal,
      ...override
    };
  }
  return parentVal;
}
var link = (_ref) => {
  let {
    children,
    value
  } = _ref;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
    href: value == null ? void 0 : value.href,
    children
  });
};
var underlineStyle = {
  textDecoration: "underline"
};
var defaultMarks = {
  em: (_ref2) => {
    let {
      children
    } = _ref2;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
      children
    });
  },
  strong: (_ref3) => {
    let {
      children
    } = _ref3;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
      children
    });
  },
  code: (_ref4) => {
    let {
      children
    } = _ref4;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
      children
    });
  },
  underline: (_ref5) => {
    let {
      children
    } = _ref5;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
      style: underlineStyle,
      children
    });
  },
  "strike-through": (_ref6) => {
    let {
      children
    } = _ref6;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("del", {
      children
    });
  },
  link
};
var defaultLists = {
  number: (_ref7) => {
    let {
      children
    } = _ref7;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
      children
    });
  },
  bullet: (_ref8) => {
    let {
      children
    } = _ref8;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
      children
    });
  }
};
var DefaultListItem = (_ref9) => {
  let {
    children
  } = _ref9;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
    children
  });
};
var getTemplate = (type, prop) => "[@portabletext/react] Unknown ".concat(type, ", specify a component for it in the `components.").concat(prop, "` prop");
var unknownTypeWarning = (typeName) => getTemplate('block type "'.concat(typeName, '"'), "types");
var unknownMarkWarning = (markType) => getTemplate('mark type "'.concat(markType, '"'), "marks");
var unknownBlockStyleWarning = (blockStyle) => getTemplate('block style "'.concat(blockStyle, '"'), "block");
var unknownListStyleWarning = (listStyle) => getTemplate('list style "'.concat(listStyle, '"'), "list");
var unknownListItemStyleWarning = (listStyle) => getTemplate('list item style "'.concat(listStyle, '"'), "listItem");
function printWarning(message) {
  console.warn(message);
}
var hidden = {
  display: "none"
};
var DefaultUnknownType = (_ref10) => {
  let {
    value,
    isInline
  } = _ref10;
  const warning = unknownTypeWarning(value._type);
  return isInline ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
    style: hidden,
    children: warning
  }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    style: hidden,
    children: warning
  });
};
var DefaultUnknownMark = (_ref11) => {
  let {
    markType,
    children
  } = _ref11;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
    className: "unknown__pt__mark__".concat(markType),
    children
  });
};
var DefaultUnknownBlockStyle = (_ref12) => {
  let {
    children
  } = _ref12;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
    children
  });
};
var DefaultUnknownList = (_ref13) => {
  let {
    children
  } = _ref13;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
    children
  });
};
var DefaultUnknownListItem = (_ref14) => {
  let {
    children
  } = _ref14;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
    children
  });
};
var DefaultHardBreak = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {});
var defaultBlockStyles = {
  normal: (_ref15) => {
    let {
      children
    } = _ref15;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
      children
    });
  },
  blockquote: (_ref16) => {
    let {
      children
    } = _ref16;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
      children
    });
  },
  h1: (_ref17) => {
    let {
      children
    } = _ref17;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
      children
    });
  },
  h2: (_ref18) => {
    let {
      children
    } = _ref18;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
      children
    });
  },
  h3: (_ref19) => {
    let {
      children
    } = _ref19;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
      children
    });
  },
  h4: (_ref20) => {
    let {
      children
    } = _ref20;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
      children
    });
  },
  h5: (_ref21) => {
    let {
      children
    } = _ref21;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
      children
    });
  },
  h6: (_ref22) => {
    let {
      children
    } = _ref22;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h6", {
      children
    });
  }
};
var defaultComponents = {
  types: {},
  block: defaultBlockStyles,
  marks: defaultMarks,
  list: defaultLists,
  listItem: DefaultListItem,
  hardBreak: DefaultHardBreak,
  unknownType: DefaultUnknownType,
  unknownMark: DefaultUnknownMark,
  unknownList: DefaultUnknownList,
  unknownListItem: DefaultUnknownListItem,
  unknownBlockStyle: DefaultUnknownBlockStyle
};
function PortableText(_ref23) {
  let {
    value: input,
    components: componentOverrides,
    listNestingMode,
    onMissingComponent: missingComponentHandler = printWarning
  } = _ref23;
  const handleMissingComponent = missingComponentHandler || noop;
  const blocks = Array.isArray(input) ? input : [input];
  const nested = nestLists(blocks, listNestingMode || LIST_NEST_MODE_HTML);
  const components2 = (0, import_react2.useMemo)(() => {
    return componentOverrides ? mergeComponents(defaultComponents, componentOverrides) : defaultComponents;
  }, [componentOverrides]);
  const renderNode = (0, import_react2.useMemo)(() => getNodeRenderer(components2, handleMissingComponent), [components2, handleMissingComponent]);
  const rendered = nested.map((node, index) => renderNode({
    node,
    index,
    isInline: false,
    renderNode
  }));
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
    children: rendered
  });
}
var getNodeRenderer = (components2, handleMissingComponent) => {
  function renderNode(options) {
    const {
      node,
      index,
      isInline
    } = options;
    const key = node._key || "node-".concat(index);
    if (isPortableTextToolkitList(node)) {
      return renderList(node, index, key);
    }
    if (isPortableTextListItemBlock(node)) {
      return renderListItem(node, index, key);
    }
    if (isPortableTextToolkitSpan(node)) {
      return renderSpan(node, index, key);
    }
    if (hasCustomComponentForNode(node)) {
      return renderCustomBlock(node, index, key, isInline);
    }
    if (isPortableTextBlock(node)) {
      return renderBlock(node, index, key, isInline);
    }
    if (isPortableTextToolkitTextNode(node)) {
      return renderText(node, key);
    }
    return renderUnknownType(node, index, key, isInline);
  }
  function hasCustomComponentForNode(node) {
    return node._type in components2.types;
  }
  function renderListItem(node, index, key) {
    const tree = serializeBlock({
      node,
      index,
      isInline: false,
      renderNode
    });
    const renderer = components2.listItem;
    const handler = typeof renderer === "function" ? renderer : renderer[node.listItem];
    const Li = handler || components2.unknownListItem;
    if (Li === components2.unknownListItem) {
      const style = node.listItem || "bullet";
      handleMissingComponent(unknownListItemStyleWarning(style), {
        type: style,
        nodeType: "listItemStyle"
      });
    }
    let children = tree.children;
    if (node.style && node.style !== "normal") {
      const {
        listItem,
        ...blockNode
      } = node;
      children = renderNode({
        node: blockNode,
        index,
        isInline: false,
        renderNode
      });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Li, {
      value: node,
      index,
      isInline: false,
      renderNode,
      children
    }, key);
  }
  function renderList(node, index, key) {
    const children = node.children.map((child, childIndex) => renderNode({
      node: child._key ? child : {
        ...child,
        _key: "li-".concat(index, "-").concat(childIndex)
      },
      index: childIndex,
      isInline: false,
      renderNode
    }));
    const component = components2.list;
    const handler = typeof component === "function" ? component : component[node.listItem];
    const List = handler || components2.unknownList;
    if (List === components2.unknownList) {
      const style = node.listItem || "bullet";
      handleMissingComponent(unknownListStyleWarning(style), {
        nodeType: "listStyle",
        type: style
      });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
      value: node,
      index,
      isInline: false,
      renderNode,
      children
    }, key);
  }
  function renderSpan(node, _index, key) {
    const {
      markDef,
      markType,
      markKey
    } = node;
    const Span = components2.marks[markType] || components2.unknownMark;
    const children = node.children.map((child, childIndex) => renderNode({
      node: child,
      index: childIndex,
      isInline: true,
      renderNode
    }));
    if (Span === components2.unknownMark) {
      handleMissingComponent(unknownMarkWarning(markType), {
        nodeType: "mark",
        type: markType
      });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Span, {
      text: spanToPlainText(node),
      value: markDef,
      markType,
      markKey,
      renderNode,
      children
    }, key);
  }
  function renderBlock(node, index, key, isInline) {
    const {
      _key,
      ...props
    } = serializeBlock({
      node,
      index,
      isInline,
      renderNode
    });
    const style = props.node.style || "normal";
    const handler = typeof components2.block === "function" ? components2.block : components2.block[style];
    const Block = handler || components2.unknownBlockStyle;
    if (Block === components2.unknownBlockStyle) {
      handleMissingComponent(unknownBlockStyleWarning(style), {
        nodeType: "blockStyle",
        type: style
      });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
      ...props,
      value: props.node,
      renderNode
    }, key);
  }
  function renderText(node, key) {
    if (node.text === "\n") {
      const HardBreak = components2.hardBreak;
      return HardBreak ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HardBreak, {}, key) : "\n";
    }
    return node.text;
  }
  function renderUnknownType(node, index, key, isInline) {
    const nodeOptions = {
      value: node,
      isInline,
      index,
      renderNode
    };
    handleMissingComponent(unknownTypeWarning(node._type), {
      nodeType: "block",
      type: node._type
    });
    const UnknownType = components2.unknownType;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UnknownType, {
      ...nodeOptions
    }, key);
  }
  function renderCustomBlock(node, index, key, isInline) {
    const nodeOptions = {
      value: node,
      isInline,
      index,
      renderNode
    };
    const Node = components2.types[node._type];
    return Node ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Node, {
      ...nodeOptions
    }, key) : null;
  }
  return renderNode;
};
function serializeBlock(options) {
  const {
    node,
    index,
    isInline,
    renderNode
  } = options;
  const tree = buildMarksTree(node);
  const children = tree.map((child, i) => renderNode({
    node: child,
    isInline: true,
    index: i,
    renderNode
  }));
  return {
    _key: node._key || "block-".concat(index),
    children,
    index,
    isInline,
    node
  };
}
function noop() {
}

// app/components/SanityImage.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_image_url = __toESM(require_image_url_umd());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function SanityImage(props) {
  const { value, isInline } = props;
  const { width, height } = getImageDimensions(value);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    "img",
    {
      className: "not-prose h-auto w-full ",
      src: (0, import_image_url.default)(projectDetails()).image(value).width(isInline ? 100 : 800).fit("max").auto("format").url(),
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
    false,
    {
      fileName: "app/components/SanityImage.tsx",
      lineNumber: 19,
      columnNumber: 5
    },
    this
  );
}

// app/components/SanityContent.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var components = {
  types: {
    image: SanityImage
  }
};
function SanityContent(props) {
  const { value } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "prose font-serif dark:prose-invert md:prose-2xl prose-a:text-cyan-600 dark:prose-a:text-cyan-200", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(PortableText, { value, components }, void 0, false, {
    fileName: "app/components/SanityContent.tsx",
    lineNumber: 20,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/SanityContent.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/components/Record.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
function Record(props) {
  const { _id, title, artist, content, image, tracks, likes, dislikes } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("article", { className: "flex flex-col items-start gap-4 lg:flex-row lg:gap-12", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid-gap-4 mx-auto grid max-w-[70vw] grid-cols-1 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(RecordCover, { image, title }, void 0, false, {
        fileName: "app/components/Record.tsx",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(LikeDislike, { id: _id, likes, dislikes }, void 0, false, {
        fileName: "app/components/Record.tsx",
        lineNumber: 16,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Record.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-shrink-0 flex-col gap-4 md:gap-6 lg:w-2/3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("header", { children: [
        title ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Title, { children: title }, void 0, false, {
          fileName: "app/components/Record.tsx",
          lineNumber: 20,
          columnNumber: 20
        }, this) : null,
        artist ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "bg-black text-2xl font-bold tracking-tighter text-white", children: artist }, void 0, false, {
          fileName: "app/components/Record.tsx",
          lineNumber: 22,
          columnNumber: 13
        }, this) : null
      ] }, void 0, true, {
        fileName: "app/components/Record.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      content && (content == null ? void 0 : content.length) > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SanityContent, { value: content }, void 0, false, {
        fileName: "app/components/Record.tsx",
        lineNumber: 28,
        columnNumber: 11
      }, this) : null,
      tracks && (tracks == null ? void 0 : tracks.length) > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { className: "grid grid-cols-1 divide-y divide-gray-100 dark:divide-gray-900", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { className: "py-3 text-2xl font-bold tracking-tighter", children: (tracks == null ? void 0 : tracks.length) === 1 ? `1 Track` : `${tracks == null ? void 0 : tracks.length} Tracks` }, void 0, false, {
          fileName: "app/components/Record.tsx",
          lineNumber: 33,
          columnNumber: 15
        }, this),
        tracks.map((track) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "li",
          {
            className: "flex items-center justify-between py-3",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "text-lg", children: track.title }, void 0, false, {
                fileName: "app/components/Record.tsx",
                lineNumber: 41,
                columnNumber: 19
              }, this),
              track.duration ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "text-sm font-bold", children: secondsToMinutes(track.duration) }, void 0, false, {
                fileName: "app/components/Record.tsx",
                lineNumber: 43,
                columnNumber: 21
              }, this) : null
            ]
          },
          track._key,
          true,
          {
            fileName: "app/components/Record.tsx",
            lineNumber: 37,
            columnNumber: 17
          },
          this
        ))
      ] }, void 0, true, {
        fileName: "app/components/Record.tsx",
        lineNumber: 32,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Record.tsx",
        lineNumber: 31,
        columnNumber: 11
      }, this) : null
    ] }, void 0, true, {
      fileName: "app/components/Record.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Record.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/styles/app.css
var app_default = "/build/_assets/app-VA6DC2PE.css";

// app/routes/$slug.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
var links = () => {
  return [{ rel: "stylesheet", href: app_default }];
};
var meta = ({ data, matches }) => {
  var _a;
  const rootData = matches.find((match) => match.id === `root`);
  const home = rootData ? rootData.data.home : null;
  const title = [(_a = data == null ? void 0 : data.record) == null ? void 0 : _a.title, home == null ? void 0 : home.siteTitle].filter(Boolean).join(" | ");
  const { ogImageUrl } = data;
  return [
    { title },
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:title", content: title },
    { property: "og:title", content: title },
    { property: "og:image:width", content: String(OG_IMAGE_WIDTH) },
    { property: "og:image:height", content: String(OG_IMAGE_HEIGHT) },
    { property: "og:image", content: ogImageUrl }
  ];
};
function RecordPage() {
  const { record, query, params } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    PreviewWrapper,
    {
      data: record,
      render: Record,
      query,
      params
    },
    void 0,
    false,
    {
      fileName: "app/routes/$slug.tsx",
      lineNumber: 156,
      columnNumber: 5
    },
    this
  );
}
export {
  RecordPage as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/$slug-STWEVIPQ.js.map
