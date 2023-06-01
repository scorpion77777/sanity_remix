import {
  applyPatch
} from "/build/_shared/chunk-EX55ICKE.js";
import {
  groq
} from "/build/_shared/chunk-6TKMBU2E.js";
import {
  __commonJS,
  __toESM,
  init_buffer,
  init_dirname,
  init_filename,
  init_global,
  init_process
} from "/build/_shared/chunk-I4IZRGLP.js";

// node_modules/fast-deep-equal/index.js
var require_fast_deep_equal = __commonJS({
  "node_modules/fast-deep-equal/index.js"(exports, module) {
    "use strict";
    init_global();
    init_dirname();
    init_filename();
    init_buffer();
    init_process();
    module.exports = function equal(a, b) {
      if (a === b)
        return true;
      if (a && b && typeof a == "object" && typeof b == "object") {
        if (a.constructor !== b.constructor)
          return false;
        var length2, i, keys;
        if (Array.isArray(a)) {
          length2 = a.length;
          if (length2 != b.length)
            return false;
          for (i = length2; i-- !== 0; )
            if (!equal(a[i], b[i]))
              return false;
          return true;
        }
        if (a.constructor === RegExp)
          return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf)
          return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString)
          return a.toString() === b.toString();
        keys = Object.keys(a);
        length2 = keys.length;
        if (length2 !== Object.keys(b).length)
          return false;
        for (i = length2; i-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
            return false;
        for (i = length2; i-- !== 0; ) {
          var key = keys[i];
          if (!equal(a[key], b[key]))
            return false;
        }
        return true;
      }
      return a !== a && b !== b;
    };
  }
});

// node_modules/@sanity/groq-store/dist/index.browser.mjs
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_fast_deep_equal = __toESM(require_fast_deep_equal(), 1);

// node_modules/throttle-debounce/esm/index.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
function throttle(delay, callback, options) {
  var _ref = options || {}, _ref$noTrailing = _ref.noTrailing, noTrailing = _ref$noTrailing === void 0 ? false : _ref$noTrailing, _ref$noLeading = _ref.noLeading, noLeading = _ref$noLeading === void 0 ? false : _ref$noLeading, _ref$debounceMode = _ref.debounceMode, debounceMode = _ref$debounceMode === void 0 ? void 0 : _ref$debounceMode;
  var timeoutID;
  var cancelled = false;
  var lastExec = 0;
  function clearExistingTimeout() {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
  }
  function cancel(options2) {
    var _ref2 = options2 || {}, _ref2$upcomingOnly = _ref2.upcomingOnly, upcomingOnly = _ref2$upcomingOnly === void 0 ? false : _ref2$upcomingOnly;
    clearExistingTimeout();
    cancelled = !upcomingOnly;
  }
  function wrapper() {
    for (var _len = arguments.length, arguments_ = new Array(_len), _key = 0; _key < _len; _key++) {
      arguments_[_key] = arguments[_key];
    }
    var self = this;
    var elapsed = Date.now() - lastExec;
    if (cancelled) {
      return;
    }
    function exec() {
      lastExec = Date.now();
      callback.apply(self, arguments_);
    }
    function clear() {
      timeoutID = void 0;
    }
    if (!noLeading && debounceMode && !timeoutID) {
      exec();
    }
    clearExistingTimeout();
    if (debounceMode === void 0 && elapsed > delay) {
      if (noLeading) {
        lastExec = Date.now();
        if (!noTrailing) {
          timeoutID = setTimeout(debounceMode ? clear : exec, delay);
        }
      } else {
        exec();
      }
    } else if (noTrailing !== true) {
      timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === void 0 ? delay - elapsed : delay);
    }
  }
  wrapper.cancel = cancel;
  return wrapper;
}

// node_modules/groq-js/dist/index.mjs
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// node_modules/groq-js/dist/1.mjs
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
function escapeRegExp(string3) {
  return string3.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function pathRegExp(pattern) {
  const re = [];
  for (const part of pattern.split(".")) {
    if (part === "*") {
      re.push("[^.]+");
    } else if (part === "**") {
      re.push(".*");
    } else {
      re.push(escapeRegExp(part));
    }
  }
  return new RegExp("^".concat(re.join("."), "$"));
}
var Path = class {
  constructor(pattern) {
    this.pattern = pattern;
    this.patternRe = pathRegExp(pattern);
  }
  matches(str) {
    return this.patternRe.test(str);
  }
  toJSON() {
    return this.pattern;
  }
};
var StreamValue = class {
  constructor(generator) {
    this.type = "stream";
    this.generator = generator;
    this.ticker = null;
    this.isDone = false;
    this.data = [];
  }
  // eslint-disable-next-line class-methods-use-this
  isArray() {
    return true;
  }
  async get() {
    const result = [];
    for await (const value of this) {
      result.push(await value.get());
    }
    return result;
  }
  async *[Symbol.asyncIterator]() {
    let i = 0;
    while (true) {
      for (; i < this.data.length; i++) {
        yield this.data[i];
      }
      if (this.isDone) {
        return;
      }
      await this._nextTick();
    }
  }
  _nextTick() {
    if (this.ticker) {
      return this.ticker;
    }
    let currentResolver;
    const setupTicker = () => {
      this.ticker = new Promise((resolve) => {
        currentResolver = resolve;
      });
    };
    const tick = () => {
      currentResolver();
      setupTicker();
    };
    const fetch2 = async () => {
      for await (const value of this.generator()) {
        this.data.push(value);
        tick();
      }
      this.isDone = true;
      tick();
    };
    setupTicker();
    fetch2();
    return this.ticker;
  }
};
var RFC3339_REGEX = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|([-+]\d{2}:\d{2}))$/;
function parseRFC3339(str) {
  if (RFC3339_REGEX.test(str)) {
    return new Date(str);
  }
  return null;
}
function formatRFC3339(d) {
  const year = addLeadingZero(d.getUTCFullYear(), 4);
  const month = addLeadingZero(d.getUTCMonth() + 1, 2);
  const day = addLeadingZero(d.getUTCDate(), 2);
  const hour = addLeadingZero(d.getUTCHours(), 2);
  const minute = addLeadingZero(d.getUTCMinutes(), 2);
  const second = addLeadingZero(d.getUTCSeconds(), 2);
  let fractionalSecond = "";
  const millis = d.getMilliseconds();
  if (millis != 0) {
    fractionalSecond = ".".concat(addLeadingZero(millis, 3));
  }
  return "".concat(year, "-").concat(month, "-").concat(day, "T").concat(hour, ":").concat(minute, ":").concat(second).concat(fractionalSecond, "Z");
}
function addLeadingZero(num, targetLength) {
  let str = num.toString();
  while (str.length < targetLength) {
    str = "0".concat(str);
  }
  return str;
}
var StaticValue = class {
  constructor(data, type) {
    this.data = data;
    this.type = type;
  }
  isArray() {
    return this.type === "array";
  }
  // eslint-disable-next-line require-await
  async get() {
    return this.data;
  }
  [Symbol.asyncIterator]() {
    if (Array.isArray(this.data)) {
      return function* (data) {
        for (const element of data) {
          yield fromJS(element);
        }
      }(this.data);
    }
    throw new Error("Cannot iterate over: ".concat(this.type));
  }
};
var NULL_VALUE = new StaticValue(null, "null");
var TRUE_VALUE = new StaticValue(true, "boolean");
var FALSE_VALUE = new StaticValue(false, "boolean");
var DateTime = class {
  constructor(date) {
    this.date = date;
  }
  static parseToValue(str) {
    const date = parseRFC3339(str);
    if (date) {
      return new StaticValue(new DateTime(date), "datetime");
    }
    return NULL_VALUE;
  }
  equals(other) {
    return this.date.getTime() == other.date.getTime();
  }
  add(secs) {
    const copy = new Date(this.date.getTime());
    copy.setTime(copy.getTime() + secs * 1e3);
    return new DateTime(copy);
  }
  difference(other) {
    return (this.date.getTime() - other.date.getTime()) / 1e3;
  }
  compareTo(other) {
    return this.date.getTime() - other.date.getTime();
  }
  toString() {
    return formatRFC3339(this.date);
  }
  toJSON() {
    return this.toString();
  }
};
function fromNumber(num) {
  if (Number.isFinite(num)) {
    return new StaticValue(num, "number");
  }
  return NULL_VALUE;
}
function fromString(str) {
  return new StaticValue(str, "string");
}
function fromDateTime(dt) {
  return new StaticValue(dt, "datetime");
}
function fromPath(path2) {
  return new StaticValue(path2, "path");
}
function isIterator(obj) {
  return obj && typeof obj.next === "function";
}
function fromJS(val) {
  if (isIterator(val)) {
    return new StreamValue(async function* () {
      for await (const value of val) {
        yield fromJS(value);
      }
    });
  } else if (val === null || val === void 0) {
    return NULL_VALUE;
  }
  return new StaticValue(val, getType(val));
}
function getType(data) {
  if (data === null || typeof data === "undefined") {
    return "null";
  }
  if (Array.isArray(data)) {
    return "array";
  }
  if (data instanceof Path) {
    return "path";
  }
  if (data instanceof DateTime) {
    return "datetime";
  }
  return typeof data;
}
function isEqual(a, b) {
  if (a.type === "string" && b.type === "string" || a.type === "boolean" && b.type === "boolean" || a.type === "null" && b.type === "null" || a.type === "number" && b.type === "number") {
    return a.data === b.data;
  }
  if (a.type === "datetime" && b.type === "datetime") {
    return a.data.equals(b.data);
  }
  return false;
}
var CHARS = /([^!@#$%^&*(),\\/?";:{}|[\]+<>\s-])+/g;
var CHARS_WITH_WILDCARD = /([^!@#$%^&(),\\/?";:{}|[\]+<>\s-])+/g;
var EDGE_CHARS = /(\b\.+|\.+\b)/g;
var MAX_TERM_LENGTH = 1024;
function matchText(tokens, patterns) {
  if (tokens.length === 0 || patterns.length === 0) {
    return false;
  }
  return patterns.every((pattern) => pattern(tokens));
}
function matchTokenize(text) {
  return text.replace(EDGE_CHARS, "").match(CHARS) || [];
}
function matchAnalyzePattern(text) {
  const termsRe = matchPatternRegex(text);
  return termsRe.map((re) => (tokens) => tokens.some((token) => re.test(token)));
}
function matchPatternRegex(text) {
  const terms = text.replace(EDGE_CHARS, "").match(CHARS_WITH_WILDCARD) || [];
  return terms.map((term) => new RegExp("^".concat(term.slice(0, MAX_TERM_LENGTH).replace(/\*/g, ".*"), "$"), "i"));
}
async function gatherText(value, cb) {
  if (value.type === "string") {
    cb(value.data);
    return true;
  }
  if (value.isArray()) {
    let success = true;
    for await (const part of value) {
      if (part.type === "string") {
        cb(part.data);
      } else {
        success = false;
      }
    }
    return success;
  }
  return false;
}
var TYPE_ORDER = {
  datetime: 1,
  number: 2,
  string: 3,
  boolean: 4
};
function partialCompare(a, b) {
  const aType = getType(a);
  const bType = getType(b);
  if (aType !== bType) {
    return null;
  }
  switch (aType) {
    case "number":
    case "boolean":
      return a - b;
    case "string":
      if (a < b)
        return -1;
      if (a > b)
        return 1;
      return 0;
    case "datetime":
      return a.compareTo(b);
    default:
      return null;
  }
}
function totalCompare(a, b) {
  const aType = getType(a);
  const bType = getType(b);
  const aTypeOrder = TYPE_ORDER[aType] || 100;
  const bTypeOrder = TYPE_ORDER[bType] || 100;
  if (aTypeOrder !== bTypeOrder) {
    return aTypeOrder - bTypeOrder;
  }
  let result = partialCompare(a, b);
  if (result === null) {
    result = 0;
  }
  return result;
}
var operators = {
  "==": function eq(left, right) {
    return isEqual(left, right) ? TRUE_VALUE : FALSE_VALUE;
  },
  "!=": function neq(left, right) {
    return isEqual(left, right) ? FALSE_VALUE : TRUE_VALUE;
  },
  ">": function gt(left, right) {
    if (left.type === "stream" || right.type === "stream")
      return NULL_VALUE;
    const result = partialCompare(left.data, right.data);
    if (result === null) {
      return NULL_VALUE;
    }
    return result > 0 ? TRUE_VALUE : FALSE_VALUE;
  },
  ">=": function gte(left, right) {
    if (left.type === "stream" || right.type === "stream")
      return NULL_VALUE;
    const result = partialCompare(left.data, right.data);
    if (result === null) {
      return NULL_VALUE;
    }
    return result >= 0 ? TRUE_VALUE : FALSE_VALUE;
  },
  "<": function lt(left, right) {
    if (left.type === "stream" || right.type === "stream")
      return NULL_VALUE;
    const result = partialCompare(left.data, right.data);
    if (result === null) {
      return NULL_VALUE;
    }
    return result < 0 ? TRUE_VALUE : FALSE_VALUE;
  },
  "<=": function lte(left, right) {
    if (left.type === "stream" || right.type === "stream")
      return NULL_VALUE;
    const result = partialCompare(left.data, right.data);
    if (result === null) {
      return NULL_VALUE;
    }
    return result <= 0 ? TRUE_VALUE : FALSE_VALUE;
  },
  // eslint-disable-next-line func-name-matching
  in: async function inop(left, right) {
    if (right.type === "path") {
      if (left.type !== "string") {
        return NULL_VALUE;
      }
      return right.data.matches(left.data) ? TRUE_VALUE : FALSE_VALUE;
    }
    if (right.isArray()) {
      for await (const b of right) {
        if (isEqual(left, b)) {
          return TRUE_VALUE;
        }
      }
      return FALSE_VALUE;
    }
    return NULL_VALUE;
  },
  match: async function match(left, right) {
    let tokens = [];
    let patterns = [];
    await gatherText(left, (part) => {
      tokens = tokens.concat(matchTokenize(part));
    });
    const didSucceed = await gatherText(right, (part) => {
      patterns = patterns.concat(matchAnalyzePattern(part));
    });
    if (!didSucceed) {
      return FALSE_VALUE;
    }
    const matched = matchText(tokens, patterns);
    return matched ? TRUE_VALUE : FALSE_VALUE;
  },
  "+": function plus(left, right) {
    if (left.type === "datetime" && right.type === "number") {
      return fromDateTime(left.data.add(right.data));
    }
    if (left.type === "number" && right.type === "number") {
      return fromNumber(left.data + right.data);
    }
    if (left.type === "string" && right.type === "string") {
      return fromString(left.data + right.data);
    }
    if (left.type === "object" && right.type === "object") {
      return fromJS({
        ...left.data,
        ...right.data
      });
    }
    if (left.type === "array" && right.type === "array") {
      return fromJS(left.data.concat(right.data));
    }
    if (left.isArray() && right.isArray()) {
      return new StreamValue(async function* () {
        for await (const val of left) {
          yield val;
        }
        for await (const val of right) {
          yield val;
        }
      });
    }
    return NULL_VALUE;
  },
  "-": function minus(left, right) {
    if (left.type === "datetime" && right.type === "number") {
      return fromDateTime(left.data.add(-right.data));
    }
    if (left.type === "datetime" && right.type === "datetime") {
      return fromNumber(left.data.difference(right.data));
    }
    if (left.type === "number" && right.type === "number") {
      return fromNumber(left.data - right.data);
    }
    return NULL_VALUE;
  },
  "*": numericOperator((a, b) => a * b),
  "/": numericOperator((a, b) => a / b),
  "%": numericOperator((a, b) => a % b),
  "**": numericOperator((a, b) => Math.pow(a, b))
};
function numericOperator(impl) {
  return function(left, right) {
    if (left.type === "number" && right.type === "number") {
      const result = impl(left.data, right.data);
      return fromNumber(result);
    }
    return NULL_VALUE;
  };
}
var Scope = class {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  constructor(params, source, value, context, parent) {
    this.isHidden = false;
    this.params = params;
    this.source = source;
    this.value = value;
    this.context = context;
    this.parent = parent;
  }
  createNested(value) {
    if (this.isHidden) {
      return new Scope(this.params, this.source, value, this.context, this.parent);
    }
    return new Scope(this.params, this.source, value, this.context, this);
  }
  createHidden(value) {
    const result = this.createNested(value);
    result.isHidden = true;
    return result;
  }
};
function evaluate(node, scope) {
  let execute = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : evaluate;
  const func = EXECUTORS[node.type];
  return func(node, scope, execute);
}
function promiselessApply(value, cb) {
  if ("then" in value) {
    return value.then(cb);
  }
  return cb(value);
}
var EXECUTORS = {
  This(_, scope) {
    return scope.value;
  },
  Selector() {
    throw new Error("Selectors can not be evaluated");
  },
  Everything(_, scope) {
    return scope.source;
  },
  Parameter(_ref, scope) {
    let {
      name
    } = _ref;
    return fromJS(scope.params[name]);
  },
  Context(_ref2, scope) {
    let {
      key
    } = _ref2;
    if (key === "before" || key === "after") {
      const value = scope.context[key];
      return value || NULL_VALUE;
    }
    throw new Error("unknown context key: ".concat(key));
  },
  Parent(_ref3, scope) {
    let {
      n
    } = _ref3;
    let current = scope;
    for (let i = 0; i < n; i++) {
      if (!current.parent) {
        return NULL_VALUE;
      }
      current = current.parent;
    }
    return current.value;
  },
  OpCall(_ref4, scope, execute) {
    let {
      op,
      left,
      right
    } = _ref4;
    const func = operators[op];
    if (!func) {
      throw new Error("Unknown operator: ".concat(op));
    }
    const leftValue = execute(left, scope);
    const rightValue = execute(right, scope);
    if ("then" in leftValue || "then" in rightValue) {
      return (async () => func(await leftValue, await rightValue))();
    }
    return func(leftValue, rightValue);
  },
  async Select(_ref5, scope, execute) {
    let {
      alternatives,
      fallback
    } = _ref5;
    for (const alt of alternatives) {
      const altCond = await execute(alt.condition, scope);
      if (altCond.type === "boolean" && altCond.data === true) {
        return execute(alt.value, scope);
      }
    }
    if (fallback) {
      return execute(fallback, scope);
    }
    return NULL_VALUE;
  },
  async InRange(_ref6, scope, execute) {
    let {
      base,
      left,
      right,
      isInclusive
    } = _ref6;
    const value = await execute(base, scope);
    const leftValue = await execute(left, scope);
    const rightValue = await execute(right, scope);
    const leftCmp = partialCompare(await value.get(), await leftValue.get());
    if (leftCmp === null) {
      return NULL_VALUE;
    }
    const rightCmp = partialCompare(await value.get(), await rightValue.get());
    if (rightCmp === null) {
      return NULL_VALUE;
    }
    if (isInclusive) {
      return leftCmp >= 0 && rightCmp <= 0 ? TRUE_VALUE : FALSE_VALUE;
    }
    return leftCmp >= 0 && rightCmp < 0 ? TRUE_VALUE : FALSE_VALUE;
  },
  async Filter(_ref7, scope, execute) {
    let {
      base,
      expr
    } = _ref7;
    const baseValue = await execute(base, scope);
    if (!baseValue.isArray()) {
      return NULL_VALUE;
    }
    return new StreamValue(async function* () {
      for await (const elem of baseValue) {
        const newScope = scope.createNested(elem);
        const exprValue = await execute(expr, newScope);
        if (exprValue.type === "boolean" && exprValue.data === true) {
          yield elem;
        }
      }
    });
  },
  async Projection(_ref8, scope, execute) {
    let {
      base,
      expr
    } = _ref8;
    const baseValue = await execute(base, scope);
    if (baseValue.type !== "object") {
      return NULL_VALUE;
    }
    const newScope = scope.createNested(baseValue);
    return execute(expr, newScope);
  },
  FuncCall(_ref9, scope, execute) {
    let {
      func,
      args
    } = _ref9;
    return func(args, scope, execute);
  },
  async PipeFuncCall(_ref10, scope, execute) {
    let {
      func,
      base,
      args
    } = _ref10;
    const baseValue = await execute(base, scope);
    return func(baseValue, args, scope, execute);
  },
  async AccessAttribute(_ref11, scope, execute) {
    let {
      base,
      name
    } = _ref11;
    let value = scope.value;
    if (base) {
      value = await execute(base, scope);
    }
    if (value.type === "object") {
      if (value.data.hasOwnProperty(name)) {
        return fromJS(value.data[name]);
      }
    }
    return NULL_VALUE;
  },
  async AccessElement(_ref12, scope, execute) {
    let {
      base,
      index
    } = _ref12;
    const baseValue = await execute(base, scope);
    if (!baseValue.isArray()) {
      return NULL_VALUE;
    }
    const data = await baseValue.get();
    const finalIndex = index < 0 ? index + data.length : index;
    return fromJS(data[finalIndex]);
  },
  async Slice(_ref13, scope, execute) {
    let {
      base,
      left,
      right,
      isInclusive
    } = _ref13;
    const baseValue = await execute(base, scope);
    if (!baseValue.isArray()) {
      return NULL_VALUE;
    }
    const array2 = await baseValue.get();
    let leftIdx = left;
    let rightIdx = right;
    if (leftIdx < 0) {
      leftIdx = array2.length + leftIdx;
    }
    if (rightIdx < 0) {
      rightIdx = array2.length + rightIdx;
    }
    if (isInclusive) {
      rightIdx++;
    }
    if (leftIdx < 0) {
      leftIdx = 0;
    }
    if (rightIdx < 0) {
      rightIdx = 0;
    }
    return fromJS(array2.slice(leftIdx, rightIdx));
  },
  async Deref(_ref14, scope, execute) {
    let {
      base
    } = _ref14;
    const value = await execute(base, scope);
    if (!scope.source.isArray()) {
      return NULL_VALUE;
    }
    if (value.type !== "object") {
      return NULL_VALUE;
    }
    const id = value.data._ref;
    if (typeof id !== "string") {
      return NULL_VALUE;
    }
    for await (const doc of scope.source) {
      if (doc.type === "object" && id === doc.data._id) {
        return doc;
      }
    }
    return NULL_VALUE;
  },
  Value(_ref15) {
    let {
      value
    } = _ref15;
    return fromJS(value);
  },
  Group(_ref16, scope, execute) {
    let {
      base
    } = _ref16;
    return execute(base, scope);
  },
  async Object(_ref17, scope, execute) {
    let {
      attributes
    } = _ref17;
    const result = {};
    for (const attr of attributes) {
      const attrType = attr.type;
      switch (attr.type) {
        case "ObjectAttributeValue": {
          const value = await execute(attr.value, scope);
          result[attr.name] = await value.get();
          break;
        }
        case "ObjectConditionalSplat": {
          const cond = await execute(attr.condition, scope);
          if (cond.type !== "boolean" || cond.data === false) {
            continue;
          }
          const value = await execute(attr.value, scope);
          if (value.type === "object") {
            Object.assign(result, value.data);
          }
          break;
        }
        case "ObjectSplat": {
          const value = await execute(attr.value, scope);
          if (value.type === "object") {
            Object.assign(result, value.data);
          }
          break;
        }
        default:
          throw new Error("Unknown node type: ".concat(attrType));
      }
    }
    return fromJS(result);
  },
  Array(_ref18, scope, execute) {
    let {
      elements
    } = _ref18;
    return new StreamValue(async function* () {
      for (const element of elements) {
        const value = await execute(element.value, scope);
        if (element.isSplat) {
          if (value.isArray()) {
            for await (const v of value) {
              yield v;
            }
          }
        } else {
          yield value;
        }
      }
    });
  },
  Tuple() {
    throw new Error("tuples can not be evaluated");
  },
  async Or(_ref19, scope, execute) {
    let {
      left,
      right
    } = _ref19;
    const leftValue = await execute(left, scope);
    const rightValue = await execute(right, scope);
    if (leftValue.type === "boolean") {
      if (leftValue.data === true) {
        return TRUE_VALUE;
      }
    }
    if (rightValue.type === "boolean") {
      if (rightValue.data === true) {
        return TRUE_VALUE;
      }
    }
    if (leftValue.type !== "boolean" || rightValue.type !== "boolean") {
      return NULL_VALUE;
    }
    return FALSE_VALUE;
  },
  async And(_ref20, scope, execute) {
    let {
      left,
      right
    } = _ref20;
    const leftValue = await execute(left, scope);
    const rightValue = await execute(right, scope);
    if (leftValue.type === "boolean") {
      if (leftValue.data === false) {
        return FALSE_VALUE;
      }
    }
    if (rightValue.type === "boolean") {
      if (rightValue.data === false) {
        return FALSE_VALUE;
      }
    }
    if (leftValue.type !== "boolean" || rightValue.type !== "boolean") {
      return NULL_VALUE;
    }
    return TRUE_VALUE;
  },
  async Not(_ref21, scope, execute) {
    let {
      base
    } = _ref21;
    const value = await execute(base, scope);
    if (value.type !== "boolean") {
      return NULL_VALUE;
    }
    return value.data ? FALSE_VALUE : TRUE_VALUE;
  },
  Neg(_ref22, scope, execute) {
    let {
      base
    } = _ref22;
    return promiselessApply(execute(base, scope), (value) => {
      if (value.type !== "number") {
        return NULL_VALUE;
      }
      return fromNumber(-value.data);
    });
  },
  Pos(_ref23, scope, execute) {
    let {
      base
    } = _ref23;
    return promiselessApply(execute(base, scope), (value) => {
      if (value.type !== "number") {
        return NULL_VALUE;
      }
      return fromNumber(value.data);
    });
  },
  Asc() {
    return NULL_VALUE;
  },
  Desc() {
    return NULL_VALUE;
  },
  async ArrayCoerce(_ref24, scope, execute) {
    let {
      base
    } = _ref24;
    const value = await execute(base, scope);
    return value.isArray() ? value : NULL_VALUE;
  },
  async Map(_ref25, scope, execute) {
    let {
      base,
      expr
    } = _ref25;
    const value = await execute(base, scope);
    if (!value.isArray()) {
      return NULL_VALUE;
    }
    return new StreamValue(async function* () {
      for await (const elem of value) {
        const newScope = scope.createHidden(elem);
        yield await execute(expr, newScope);
      }
    });
  },
  async FlatMap(_ref26, scope, execute) {
    let {
      base,
      expr
    } = _ref26;
    const value = await execute(base, scope);
    if (!value.isArray()) {
      return NULL_VALUE;
    }
    return new StreamValue(async function* () {
      for await (const elem of value) {
        const newScope = scope.createHidden(elem);
        const innerValue = await execute(expr, newScope);
        if (innerValue.isArray()) {
          for await (const inner of innerValue) {
            yield inner;
          }
        } else {
          yield innerValue;
        }
      }
    });
  }
};
function evaluateQuery(tree) {
  let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const root = fromJS(options.root);
  const dataset = fromJS(options.dataset);
  const params = {
    ...options.params
  };
  const scope = new Scope(params, dataset, root, {
    timestamp: options.timestamp || /* @__PURE__ */ new Date(),
    identity: options.identity === void 0 ? "me" : options.identity,
    sanity: options.sanity,
    after: options.after ? fromJS(options.after) : null,
    before: options.before ? fromJS(options.before) : null
  }, null);
  return evaluate(tree, scope);
}
function canConstantEvaluate(node) {
  switch (node.type) {
    case "Group":
    case "Value":
    case "Parameter":
      return true;
    case "Pos":
    case "Neg":
      return canConstantEvaluate(node.base);
    case "OpCall":
      switch (node.op) {
        case "+":
        case "-":
        case "*":
        case "/":
        case "%":
        case "**":
          return canConstantEvaluate(node.left) && canConstantEvaluate(node.right);
        default:
          return false;
      }
    default:
      return false;
  }
}
var DUMMY_SCOPE = new Scope({}, NULL_VALUE, NULL_VALUE, {
  timestamp: /* @__PURE__ */ new Date(0),
  identity: "me",
  before: null,
  after: null
}, null);
function tryConstantEvaluate(node) {
  if (!canConstantEvaluate(node)) {
    return null;
  }
  return constantEvaluate(node);
}
function constantEvaluate(node) {
  const value = evaluate(node, DUMMY_SCOPE, constantEvaluate);
  if ("then" in value) {
    throw new Error("BUG: constant evaluate should never return a promise");
  }
  return value;
}
async function portableTextContent(value) {
  if (value.type === "object") {
    return blockText(value.data);
  } else if (value.isArray()) {
    const texts = await arrayText(value);
    if (texts.length > 0) {
      return texts.join("\n\n");
    }
  }
  return null;
}
async function arrayText(value) {
  let result = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  for await (const block of value) {
    if (block.type === "object") {
      const text = blockText(block.data);
      if (text !== null)
        result.push(text);
    } else if (block.isArray()) {
      await arrayText(block, result);
    }
  }
  return result;
}
function blockText(obj) {
  if (typeof obj._type !== "string")
    return null;
  const children = obj.children;
  if (!Array.isArray(children))
    return null;
  let result = "";
  for (const child of children) {
    if (child && typeof child === "object" && typeof child._type === "string" && child._type === "span" && typeof child.text === "string") {
      result += child.text;
    }
  }
  return result;
}
var BM25k = 1.2;
async function evaluateScore(node, scope, execute) {
  if (node.type === "OpCall" && node.op === "match") {
    return evaluateMatchScore(node.left, node.right, scope, execute);
  }
  if (node.type === "FuncCall" && node.name === "boost") {
    const innerScore = await evaluateScore(node.args[0], scope, execute);
    const boost2 = await execute(node.args[1], scope);
    if (boost2.type === "number" && innerScore > 0) {
      return innerScore + boost2.data;
    }
    return 0;
  }
  switch (node.type) {
    case "Or": {
      const leftScore = await evaluateScore(node.left, scope, execute);
      const rightScore = await evaluateScore(node.right, scope, execute);
      return leftScore + rightScore;
    }
    case "And": {
      const leftScore = await evaluateScore(node.left, scope, execute);
      const rightScore = await evaluateScore(node.right, scope, execute);
      if (leftScore === 0 || rightScore === 0)
        return 0;
      return leftScore + rightScore;
    }
    default: {
      const res = await execute(node, scope);
      return res.type === "boolean" && res.data === true ? 1 : 0;
    }
  }
}
async function evaluateMatchScore(left, right, scope, execute) {
  const text = await execute(left, scope);
  const pattern = await execute(right, scope);
  let tokens = [];
  let terms = [];
  await gatherText(text, (part) => {
    tokens = tokens.concat(matchTokenize(part));
  });
  const didSucceed = await gatherText(pattern, (part) => {
    terms = terms.concat(matchPatternRegex(part));
  });
  if (!didSucceed) {
    return 0;
  }
  if (tokens.length === 0 || terms.length === 0) {
    return 0;
  }
  let score2 = 0;
  for (const re of terms) {
    const freq = tokens.reduce((c, token) => c + (re.test(token) ? 1 : 0), 0);
    score2 += freq * (BM25k + 1) / (freq + BM25k);
  }
  return score2;
}
function hasReference(value, pathSet) {
  switch (getType(value)) {
    case "array":
      for (const v of value) {
        if (hasReference(v, pathSet)) {
          return true;
        }
      }
      break;
    case "object":
      if (value._ref) {
        return pathSet.has(value._ref);
      }
      for (const v of Object.values(value)) {
        if (hasReference(v, pathSet)) {
          return true;
        }
      }
      break;
  }
  return false;
}
function countUTF8(str) {
  let count2 = 0;
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);
    if (code >= 55296 && code <= 56319) {
      continue;
    }
    count2++;
  }
  return count2;
}
var _global = {};
_global.anywhere = async function anywhere() {
  throw new Error("not implemented");
};
_global.anywhere.arity = 1;
_global.coalesce = async function coalesce(args, scope, execute) {
  for (const arg of args) {
    const value = await execute(arg, scope);
    if (value.type !== "null") {
      return value;
    }
  }
  return NULL_VALUE;
};
_global.count = async function count(args, scope, execute) {
  const inner = await execute(args[0], scope);
  if (!inner.isArray()) {
    return NULL_VALUE;
  }
  let num = 0;
  for await (const _ of inner) {
    num++;
  }
  return fromNumber(num);
};
_global.count.arity = 1;
_global.dateTime = async function dateTime(args, scope, execute) {
  const val = await execute(args[0], scope);
  if (val.type === "datetime") {
    return val;
  }
  if (val.type !== "string") {
    return NULL_VALUE;
  }
  return DateTime.parseToValue(val.data);
};
_global.dateTime.arity = 1;
_global.defined = async function defined(args, scope, execute) {
  const inner = await execute(args[0], scope);
  return inner.type === "null" ? FALSE_VALUE : TRUE_VALUE;
};
_global.defined.arity = 1;
_global.identity = async function identity(args, scope) {
  return fromString(scope.context.identity);
};
_global.identity.arity = 0;
_global.length = async function length(args, scope, execute) {
  const inner = await execute(args[0], scope);
  if (inner.type === "string") {
    return fromNumber(countUTF8(inner.data));
  }
  if (inner.isArray()) {
    let num = 0;
    for await (const _ of inner) {
      num++;
    }
    return fromNumber(num);
  }
  return NULL_VALUE;
};
_global.length.arity = 1;
_global.path = async function path(args, scope, execute) {
  const inner = await execute(args[0], scope);
  if (inner.type !== "string") {
    return NULL_VALUE;
  }
  return fromPath(new Path(inner.data));
};
_global.path.arity = 1;
_global.string = async function string(args, scope, execute) {
  const value = await execute(args[0], scope);
  switch (value.type) {
    case "number":
    case "string":
    case "boolean":
    case "datetime":
      return fromString("".concat(value.data));
    default:
      return NULL_VALUE;
  }
};
_global.string.arity = 1;
_global.references = async function references(args, scope, execute) {
  const pathSet = /* @__PURE__ */ new Set();
  for (const arg of args) {
    const path2 = await execute(arg, scope);
    if (path2.type === "string") {
      pathSet.add(path2.data);
    } else if (path2.isArray()) {
      for await (const elem of path2) {
        if (elem.type === "string") {
          pathSet.add(elem.data);
        }
      }
    }
  }
  if (pathSet.size === 0) {
    return FALSE_VALUE;
  }
  const scopeValue = await scope.value.get();
  return hasReference(scopeValue, pathSet) ? TRUE_VALUE : FALSE_VALUE;
};
_global.references.arity = (c) => c >= 1;
_global.round = async function round(args, scope, execute) {
  const value = await execute(args[0], scope);
  if (value.type !== "number") {
    return NULL_VALUE;
  }
  const num = value.data;
  let prec = 0;
  if (args.length === 2) {
    const precValue = await execute(args[1], scope);
    if (precValue.type !== "number" || precValue.data < 0 || !Number.isInteger(precValue.data)) {
      return NULL_VALUE;
    }
    prec = precValue.data;
  }
  if (prec === 0) {
    if (num < 0) {
      return fromNumber(-Math.round(-num));
    }
    return fromNumber(Math.round(num));
  }
  return fromNumber(Number(num.toFixed(prec)));
};
_global.round.arity = (count2) => count2 >= 1 && count2 <= 2;
_global.now = async function now(args, scope) {
  return fromString(scope.context.timestamp.toISOString());
};
_global.now.arity = 0;
_global.boost = async function boost() {
  throw new Error("unexpected boost call");
};
_global.boost.arity = 2;
var string2 = {};
string2.lower = async function(args, scope, execute) {
  const value = await execute(args[0], scope);
  if (value.type !== "string") {
    return NULL_VALUE;
  }
  return fromString(value.data.toLowerCase());
};
string2.lower.arity = 1;
string2.upper = async function(args, scope, execute) {
  const value = await execute(args[0], scope);
  if (value.type !== "string") {
    return NULL_VALUE;
  }
  return fromString(value.data.toUpperCase());
};
string2.upper.arity = 1;
string2.split = async function(args, scope, execute) {
  const str = await execute(args[0], scope);
  if (str.type !== "string") {
    return NULL_VALUE;
  }
  const sep = await execute(args[1], scope);
  if (sep.type !== "string") {
    return NULL_VALUE;
  }
  if (str.data.length === 0) {
    return fromJS([]);
  }
  if (sep.data.length === 0) {
    return fromJS(Array.from(str.data));
  }
  return fromJS(str.data.split(sep.data));
};
string2.split.arity = 2;
_global.lower = string2.lower;
_global.upper = string2.upper;
string2.startsWith = async function(args, scope, execute) {
  const str = await execute(args[0], scope);
  if (str.type !== "string") {
    return NULL_VALUE;
  }
  const prefix = await execute(args[1], scope);
  if (prefix.type !== "string") {
    return NULL_VALUE;
  }
  return str.data.startsWith(prefix.data) ? TRUE_VALUE : FALSE_VALUE;
};
string2.startsWith.arity = 2;
var array = {};
array.join = async function(args, scope, execute) {
  const arr = await execute(args[0], scope);
  if (!arr.isArray()) {
    return NULL_VALUE;
  }
  const sep = await execute(args[1], scope);
  if (sep.type !== "string") {
    return NULL_VALUE;
  }
  let buf = "";
  let needSep = false;
  for await (const elem of arr) {
    if (needSep) {
      buf += sep.data;
    }
    switch (elem.type) {
      case "number":
      case "string":
      case "boolean":
      case "datetime":
        buf += "".concat(elem.data);
        break;
      default:
        return NULL_VALUE;
    }
    needSep = true;
  }
  return fromJS(buf);
};
array.join.arity = 2;
array.compact = async function(args, scope, execute) {
  const arr = await execute(args[0], scope);
  if (!arr.isArray()) {
    return NULL_VALUE;
  }
  return new StreamValue(async function* () {
    for await (const elem of arr) {
      if (elem.type !== "null") {
        yield elem;
      }
    }
  });
};
array.compact.arity = 1;
array.unique = async function(args, scope, execute) {
  const value = await execute(args[0], scope);
  if (!value.isArray()) {
    return NULL_VALUE;
  }
  return new StreamValue(async function* () {
    const added = /* @__PURE__ */ new Set();
    for await (const iter of value) {
      switch (iter.type) {
        case "number":
        case "string":
        case "boolean":
        case "datetime":
          if (!added.has(iter.data)) {
            added.add(iter.data);
            yield iter;
          }
          break;
        default:
          yield iter;
      }
    }
  });
};
array.unique.arity = 1;
var pt = {};
pt.text = async function(args, scope, execute) {
  const value = await execute(args[0], scope);
  const text = await portableTextContent(value);
  if (text === null) {
    return NULL_VALUE;
  }
  return fromString(text);
};
pt.text.arity = 1;
var sanity = {};
sanity.projectId = async function(args, scope) {
  if (scope.context.sanity) {
    return fromString(scope.context.sanity.projectId);
  }
  return NULL_VALUE;
};
sanity.dataset = async function(args, scope) {
  if (scope.context.sanity) {
    return fromString(scope.context.sanity.dataset);
  }
  return NULL_VALUE;
};
var pipeFunctions = {};
pipeFunctions.order = async function order(base, args, scope, execute) {
  await true;
  if (!base.isArray()) {
    return NULL_VALUE;
  }
  const mappers = [];
  const directions = [];
  let n = 0;
  for (let mapper of args) {
    let direction = "asc";
    if (mapper.type === "Desc") {
      direction = "desc";
      mapper = mapper.base;
    } else if (mapper.type === "Asc") {
      mapper = mapper.base;
    }
    mappers.push(mapper);
    directions.push(direction);
    n++;
  }
  const aux = [];
  let idx = 0;
  for await (const value of base) {
    const newScope = scope.createNested(value);
    const tuple = [await value.get(), idx];
    for (let i = 0; i < n; i++) {
      const result = await execute(mappers[i], newScope);
      tuple.push(await result.get());
    }
    aux.push(tuple);
    idx++;
  }
  aux.sort((aTuple, bTuple) => {
    for (let i = 0; i < n; i++) {
      let c = totalCompare(aTuple[i + 2], bTuple[i + 2]);
      if (directions[i] === "desc") {
        c = -c;
      }
      if (c !== 0) {
        return c;
      }
    }
    return aTuple[1] - bTuple[1];
  });
  return fromJS(aux.map((v) => v[0]));
};
pipeFunctions.order.arity = (count2) => count2 >= 1;
pipeFunctions.score = async function score(base, args, scope, execute) {
  if (!base.isArray())
    return NULL_VALUE;
  const unknown = [];
  const scored = [];
  for await (const value of base) {
    if (value.type !== "object") {
      unknown.push(await value.get());
      continue;
    }
    const newScope = scope.createNested(value);
    let valueScore = typeof value.data._score === "number" ? value.data._score : 0;
    for (const arg of args) {
      valueScore += await evaluateScore(arg, newScope, execute);
    }
    const newObject = Object.assign({}, value.data, {
      _score: valueScore
    });
    scored.push(newObject);
  }
  scored.sort((a, b) => b._score - a._score);
  return fromJS(scored);
};
pipeFunctions.score.arity = (count2) => count2 >= 1;
var delta = {};
delta.operation = async function(args, scope) {
  const hasBefore = scope.context.before !== null;
  const hasAfter = scope.context.after !== null;
  if (hasBefore && hasAfter) {
    return fromString("update");
  }
  if (hasAfter) {
    return fromString("create");
  }
  if (hasBefore) {
    return fromString("delete");
  }
  return NULL_VALUE;
};
delta.changedAny = () => {
  throw new Error("not implemented");
};
delta.changedAny.arity = 1;
delta.changedAny.mode = "delta";
delta.changedOnly = () => {
  throw new Error("not implemented");
};
delta.changedOnly.arity = 1;
delta.changedOnly.mode = "delta";
var diff = {};
diff.changedAny = () => {
  throw new Error("not implemented");
};
diff.changedAny.arity = 3;
diff.changedOnly = () => {
  throw new Error("not implemented");
};
diff.changedOnly.arity = 3;
var math = {};
math.min = async function(args, scope, execute) {
  const arr = await execute(args[0], scope);
  if (!arr.isArray()) {
    return NULL_VALUE;
  }
  let n;
  for await (const elem of arr) {
    if (elem.type === "null")
      continue;
    if (elem.type !== "number") {
      return NULL_VALUE;
    }
    if (n === void 0 || elem.data < n) {
      n = elem.data;
    }
  }
  return fromJS(n);
};
math.min.arity = 1;
math.max = async function(args, scope, execute) {
  const arr = await execute(args[0], scope);
  if (!arr.isArray()) {
    return NULL_VALUE;
  }
  let n;
  for await (const elem of arr) {
    if (elem.type === "null")
      continue;
    if (elem.type !== "number") {
      return NULL_VALUE;
    }
    if (n === void 0 || elem.data > n) {
      n = elem.data;
    }
  }
  return fromJS(n);
};
math.max.arity = 1;
math.sum = async function(args, scope, execute) {
  const arr = await execute(args[0], scope);
  if (!arr.isArray()) {
    return NULL_VALUE;
  }
  let n = 0;
  for await (const elem of arr) {
    if (elem.type === "null")
      continue;
    if (elem.type !== "number") {
      return NULL_VALUE;
    }
    n += elem.data;
  }
  return fromJS(n);
};
math.sum.arity = 1;
math.avg = async function(args, scope, execute) {
  const arr = await execute(args[0], scope);
  if (!arr.isArray()) {
    return NULL_VALUE;
  }
  let n = 0;
  let c = 0;
  for await (const elem of arr) {
    if (elem.type === "null")
      continue;
    if (elem.type !== "number") {
      return NULL_VALUE;
    }
    n += elem.data;
    c++;
  }
  if (c === 0) {
    return NULL_VALUE;
  }
  return fromJS(n / c);
};
math.avg.arity = 1;
var namespaces = {
  global: _global,
  string: string2,
  array,
  pt,
  delta,
  diff,
  sanity,
  math
};
var MarkProcessor = class {
  constructor(string3, marks, parseOptions) {
    this.allowBoost = false;
    this.string = string3;
    this.marks = marks;
    this.index = 0;
    this.parseOptions = parseOptions;
  }
  hasMark() {
    let pos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
    return this.index + pos < this.marks.length;
  }
  getMark() {
    let pos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
    return this.marks[this.index + pos];
  }
  shift() {
    this.index += 1;
  }
  process(visitor) {
    const mark = this.marks[this.index];
    this.shift();
    const func = visitor[mark.name];
    if (!func) {
      throw new Error("Unknown handler: ".concat(mark.name));
    }
    return func.call(visitor, this, mark);
  }
  processString() {
    this.shift();
    return this.processStringEnd();
  }
  processStringEnd() {
    const prev = this.marks[this.index - 1];
    const curr = this.marks[this.index];
    this.shift();
    return this.string.slice(prev.position, curr.position);
  }
  slice(len) {
    const pos = this.marks[this.index].position;
    return this.string.slice(pos, pos + len);
  }
};
var WS = /^([\t\n\v\f\r \u0085\u00A0]|(\/\/[^\n]*\n))+/;
var NUM = /^\d+/;
var IDENT = /^[a-zA-Z_][a-zA-Z_0-9]*/;
var PREC_PAIR = 1;
var PREC_OR = 2;
var PREC_AND = 3;
var PREC_COMP = 4;
var PREC_ORDER = 4;
var PREC_ADD = 6;
var PREC_SUB = 6;
var PREC_MUL = 7;
var PREC_DIV = 7;
var PREC_MOD = 7;
var PREC_POW = 8;
var PREC_POS = 10;
var PREC_NOT = 10;
var PREC_NEG = 8;
function parse$1(str) {
  let pos = 0;
  pos = skipWS(str, pos);
  let result = parseExpr(str, pos, 0);
  if (result.type === "error")
    return result;
  pos = skipWS(str, result.position);
  if (pos !== str.length) {
    if (result.failPosition) {
      pos = result.failPosition - 1;
    }
    return {
      type: "error",
      position: pos
    };
  }
  delete result.position;
  delete result.failPosition;
  return result;
}
function parseExpr(str, pos, level) {
  let startPos = pos;
  let token = str[pos];
  let marks;
  switch (token) {
    case "+": {
      let rhs = parseExpr(str, skipWS(str, pos + 1), PREC_POS);
      if (rhs.type === "error")
        return rhs;
      marks = [{
        name: "pos",
        position: startPos
      }].concat(rhs.marks);
      pos = rhs.position;
      break;
    }
    case "-": {
      let rhs = parseExpr(str, skipWS(str, pos + 1), PREC_NEG);
      if (rhs.type === "error")
        return rhs;
      marks = [{
        name: "neg",
        position: startPos
      }].concat(rhs.marks);
      pos = rhs.position;
      break;
    }
    case "(": {
      let rhs = parseExpr(str, skipWS(str, pos + 1), 0);
      if (rhs.type === "error")
        return rhs;
      pos = skipWS(str, rhs.position);
      switch (str[pos]) {
        case ",": {
          marks = [{
            name: "tuple",
            position: startPos
          }].concat(rhs.marks);
          pos = skipWS(str, pos + 1);
          while (true) {
            rhs = parseExpr(str, pos, 0);
            if (rhs.type === "error")
              return rhs;
            pos = skipWS(str, rhs.position);
            if (str[pos] !== ",")
              break;
            pos = skipWS(str, pos + 1);
          }
          if (str[pos] !== ")")
            return {
              type: "error",
              position: pos
            };
          pos++;
          marks.push({
            name: "tuple_end",
            position: pos
          });
          break;
        }
        case ")": {
          pos++;
          marks = [{
            name: "group",
            position: startPos
          }].concat(rhs.marks);
          break;
        }
        default:
          return {
            type: "error",
            position: pos
          };
      }
      break;
    }
    case "!": {
      let rhs = parseExpr(str, skipWS(str, pos + 1), PREC_NOT);
      if (rhs.type === "error")
        return rhs;
      marks = [{
        name: "not",
        position: startPos
      }].concat(rhs.marks);
      pos = rhs.position;
      break;
    }
    case "{": {
      let result = parseObject(str, pos);
      if (result.type === "error")
        return result;
      marks = result.marks;
      pos = result.position;
      break;
    }
    case "[":
      marks = [{
        name: "array",
        position: pos
      }];
      pos = skipWS(str, pos + 1);
      if (str[pos] !== "]") {
        while (true) {
          if (str.slice(pos, pos + 3) === "...") {
            marks.push({
              name: "array_splat",
              position: pos
            });
            pos = skipWS(str, pos + 3);
          }
          let res = parseExpr(str, pos, 0);
          if (res.type === "error")
            return res;
          marks = marks.concat(res.marks);
          pos = res.position;
          pos = skipWS(str, pos);
          if (str[pos] !== ",")
            break;
          pos = skipWS(str, pos + 1);
          if (str[pos] === "]")
            break;
        }
      }
      if (str[pos] === "]") {
        pos++;
        marks.push({
          name: "array_end",
          position: pos
        });
      } else {
        return {
          type: "error",
          position: pos
        };
      }
      break;
    case "'":
    case '"': {
      let result = parseString(str, pos);
      if (result.type === "error")
        return result;
      marks = result.marks;
      pos = result.position;
      break;
    }
    case "^": {
      pos++;
      marks = [];
      while (str[pos] === "." && str[pos + 1] === "^") {
        marks.push({
          name: "dblparent",
          position: startPos
        });
        pos += 2;
      }
      marks.push({
        name: "parent",
        position: startPos
      });
      break;
    }
    case "@":
      marks = [{
        name: "this",
        position: startPos
      }];
      pos++;
      break;
    case "*":
      marks = [{
        name: "everything",
        position: startPos
      }];
      pos++;
      break;
    case "$": {
      let identLen = parseRegex(str, pos + 1, IDENT);
      if (identLen) {
        pos += 1 + identLen;
        marks = [{
          name: "param",
          position: startPos
        }, {
          name: "ident",
          position: startPos + 1
        }, {
          name: "ident_end",
          position: pos
        }];
      }
      break;
    }
    default: {
      let numLen = parseRegex(str, pos, NUM);
      if (numLen) {
        pos += numLen;
        let name = "integer";
        if (str[pos] === ".") {
          let fracLen = parseRegex(str, pos + 1, NUM);
          if (fracLen) {
            name = "float";
            pos += 1 + fracLen;
          }
        }
        if (str[pos] === "e" || str[pos] === "E") {
          name = "sci";
          pos++;
          if (str[pos] === "+" || str[pos] === "-") {
            pos++;
          }
          let expLen = parseRegex(str, pos, NUM);
          if (!expLen)
            return {
              type: "error",
              position: pos
            };
          pos += expLen;
        }
        marks = [{
          name,
          position: startPos
        }, {
          name: name + "_end",
          position: pos
        }];
        break;
      }
      let identLen = parseRegex(str, pos, IDENT);
      if (identLen) {
        pos += identLen;
        switch (str[pos]) {
          case ":":
          case "(": {
            let result = parseFuncCall(str, startPos, pos);
            if (result.type === "error")
              return result;
            marks = result.marks;
            pos = result.position;
            break;
          }
          default: {
            marks = [{
              name: "this_attr",
              position: startPos
            }, {
              name: "ident",
              position: startPos
            }, {
              name: "ident_end",
              position: pos
            }];
          }
        }
        break;
      }
    }
  }
  if (!marks) {
    return {
      type: "error",
      position: pos
    };
  }
  let lhsLevel = 12;
  let trav;
  loop:
    while (true) {
      let innerPos = skipWS(str, pos);
      if (innerPos === str.length) {
        pos = innerPos;
        break;
      }
      trav = parseTraversal(str, innerPos);
      if (trav.type === "success") {
        marks.unshift({
          name: "traverse",
          position: startPos
        });
        while (trav.type === "success") {
          marks = marks.concat(trav.marks);
          pos = trav.position;
          trav = parseTraversal(str, skipWS(str, pos));
        }
        marks.push({
          name: "traversal_end",
          position: pos
        });
        continue;
      }
      let token2 = str[innerPos];
      switch (token2) {
        case "=": {
          let nextToken = str[innerPos + 1];
          switch (nextToken) {
            case ">": {
              if (level > PREC_PAIR || lhsLevel <= PREC_PAIR)
                break loop;
              let rhs = parseExpr(str, skipWS(str, innerPos + 2), PREC_PAIR);
              if (rhs.type === "error")
                return rhs;
              marks = marks.concat(rhs.marks);
              marks.unshift({
                name: "pair",
                position: startPos
              });
              pos = rhs.position;
              lhsLevel = PREC_PAIR;
              break;
            }
            case "=": {
              if (level > PREC_COMP || lhsLevel <= PREC_COMP)
                break loop;
              let rhs = parseExpr(str, skipWS(str, innerPos + 2), 5);
              if (rhs.type === "error")
                return rhs;
              marks.unshift({
                name: "comp",
                position: startPos
              });
              marks.push({
                name: "op",
                position: innerPos
              }, {
                name: "op_end",
                position: innerPos + 2
              });
              marks = marks.concat(rhs.marks);
              pos = rhs.position;
              lhsLevel = PREC_COMP;
              break;
            }
            default:
              break loop;
          }
          break;
        }
        case "+": {
          if (level > PREC_ADD || lhsLevel < PREC_ADD)
            break loop;
          let rhs = parseExpr(str, skipWS(str, innerPos + 1), PREC_ADD + 1);
          if (rhs.type === "error")
            return rhs;
          marks = marks.concat(rhs.marks);
          marks.unshift({
            name: "add",
            position: startPos
          });
          pos = rhs.position;
          lhsLevel = PREC_ADD;
          break;
        }
        case "-": {
          if (level > PREC_SUB || lhsLevel < PREC_SUB)
            break loop;
          let rhs = parseExpr(str, skipWS(str, innerPos + 1), PREC_SUB + 1);
          if (rhs.type === "error")
            return rhs;
          marks = marks.concat(rhs.marks);
          marks.unshift({
            name: "sub",
            position: startPos
          });
          pos = rhs.position;
          lhsLevel = PREC_SUB;
          break;
        }
        case "*": {
          if (str[innerPos + 1] === "*") {
            if (level > PREC_POW || lhsLevel <= PREC_POW)
              break loop;
            let rhs2 = parseExpr(str, skipWS(str, innerPos + 2), PREC_POW);
            if (rhs2.type === "error")
              return rhs2;
            marks = marks.concat(rhs2.marks);
            marks.unshift({
              name: "pow",
              position: startPos
            });
            pos = rhs2.position;
            lhsLevel = PREC_POW;
            break;
          }
          if (level > PREC_MUL || lhsLevel < PREC_MUL)
            break loop;
          let rhs = parseExpr(str, skipWS(str, innerPos + 1), PREC_MUL + 1);
          if (rhs.type === "error")
            return rhs;
          marks = marks.concat(rhs.marks);
          marks.unshift({
            name: "mul",
            position: startPos
          });
          pos = rhs.position;
          lhsLevel = PREC_MUL;
          break;
        }
        case "/": {
          if (level > PREC_DIV || lhsLevel < PREC_DIV)
            break loop;
          let rhs = parseExpr(str, skipWS(str, innerPos + 1), PREC_DIV + 1);
          if (rhs.type === "error")
            return rhs;
          marks = marks.concat(rhs.marks);
          marks.unshift({
            name: "div",
            position: startPos
          });
          pos = rhs.position;
          lhsLevel = PREC_DIV;
          break;
        }
        case "%": {
          if (level > PREC_MOD || lhsLevel < PREC_MOD)
            break loop;
          let rhs = parseExpr(str, skipWS(str, innerPos + 1), PREC_MOD + 1);
          if (rhs.type === "error")
            return rhs;
          marks = marks.concat(rhs.marks);
          marks.unshift({
            name: "mod",
            position: startPos
          });
          pos = rhs.position;
          lhsLevel = PREC_MOD;
          break;
        }
        case "<":
        case ">": {
          if (level > PREC_COMP || lhsLevel <= PREC_COMP)
            break loop;
          let nextPos = innerPos + 1;
          if (str[nextPos] === "=") {
            nextPos++;
          }
          let rhs = parseExpr(str, skipWS(str, nextPos), PREC_COMP + 1);
          if (rhs.type === "error")
            return rhs;
          marks.unshift({
            name: "comp",
            position: startPos
          });
          marks.push({
            name: "op",
            position: innerPos
          }, {
            name: "op_end",
            position: nextPos
          });
          marks = marks.concat(rhs.marks);
          pos = rhs.position;
          lhsLevel = PREC_COMP;
          break;
        }
        case "|": {
          if (str[innerPos + 1] === "|") {
            if (level > PREC_OR || lhsLevel < PREC_OR)
              break loop;
            let rhs = parseExpr(str, skipWS(str, innerPos + 2), PREC_OR + 1);
            if (rhs.type === "error")
              return rhs;
            marks = marks.concat(rhs.marks);
            marks.unshift({
              name: "or",
              position: startPos
            });
            pos = rhs.position;
            lhsLevel = PREC_OR;
          } else {
            if (level > 11 || lhsLevel < 11)
              break loop;
            let identPos = skipWS(str, innerPos + 1);
            let identLen = parseRegex(str, identPos, IDENT);
            if (!identLen)
              return {
                type: "error",
                position: identPos
              };
            pos = identPos + identLen;
            if (str[pos] === "(" || str[pos] === ":") {
              let result = parseFuncCall(str, identPos, pos);
              if (result.type === "error")
                return result;
              marks = marks.concat(result.marks);
              marks.unshift({
                name: "pipecall",
                position: startPos
              });
              pos = result.position;
              lhsLevel = 11;
            }
          }
          break;
        }
        case "&": {
          if (str[innerPos + 1] != "&")
            break loop;
          if (level > PREC_AND || lhsLevel < PREC_AND)
            break loop;
          let rhs = parseExpr(str, skipWS(str, innerPos + 2), PREC_AND + 1);
          if (rhs.type === "error")
            return rhs;
          marks = marks.concat(rhs.marks);
          marks.unshift({
            name: "and",
            position: startPos
          });
          pos = rhs.position;
          lhsLevel = PREC_AND;
          break;
        }
        case "!": {
          if (str[innerPos + 1] !== "=")
            break loop;
          if (level > PREC_COMP || lhsLevel < PREC_COMP)
            break loop;
          let rhs = parseExpr(str, skipWS(str, innerPos + 2), PREC_COMP + 1);
          if (rhs.type === "error")
            return rhs;
          marks.unshift({
            name: "comp",
            position: startPos
          });
          marks.push({
            name: "op",
            position: innerPos
          }, {
            name: "op_end",
            position: innerPos + 2
          });
          marks = marks.concat(rhs.marks);
          pos = rhs.position;
          lhsLevel = PREC_COMP;
          break;
        }
        case "d": {
          if (str.slice(innerPos, innerPos + 4) !== "desc")
            break loop;
          if (level > PREC_ORDER || lhsLevel < PREC_ORDER)
            break loop;
          marks.unshift({
            name: "desc",
            position: startPos
          });
          pos = innerPos + 4;
          lhsLevel = PREC_ORDER;
          break;
        }
        case "a": {
          if (str.slice(innerPos, innerPos + 3) !== "asc")
            break loop;
          if (level > PREC_ORDER || lhsLevel < PREC_ORDER)
            break loop;
          marks.unshift({
            name: "asc",
            position: startPos
          });
          pos = innerPos + 3;
          lhsLevel = PREC_ORDER;
          break;
        }
        default: {
          let ident = parseRegexStr(str, innerPos, IDENT);
          switch (ident) {
            case "in": {
              if (level > PREC_COMP || lhsLevel <= PREC_COMP)
                break loop;
              pos = skipWS(str, innerPos + 2);
              let isGroup = false;
              if (str[pos] === "(") {
                isGroup = true;
                pos = skipWS(str, pos + 1);
              }
              let rangePos = pos;
              let result = parseExpr(str, pos, PREC_COMP + 1);
              if (result.type === "error")
                return result;
              pos = skipWS(str, result.position);
              if (str[pos] === "." && str[pos + 1] === ".") {
                let type = "inc_range";
                if (str[pos + 2] === ".") {
                  type = "exc_range";
                  pos = skipWS(str, pos + 3);
                } else {
                  pos = skipWS(str, pos + 2);
                }
                let rhs = parseExpr(str, pos, PREC_COMP + 1);
                if (rhs.type === "error")
                  return rhs;
                marks.unshift({
                  name: "in_range",
                  position: startPos
                });
                marks = marks.concat({
                  name: type,
                  position: rangePos
                }, result.marks, rhs.marks);
                pos = rhs.position;
              } else {
                marks.unshift({
                  name: "comp",
                  position: startPos
                });
                marks.push({
                  name: "op",
                  position: innerPos
                }, {
                  name: "op_end",
                  position: innerPos + 2
                });
                marks = marks.concat(result.marks);
              }
              if (isGroup) {
                pos = skipWS(str, pos);
                if (str[pos] !== ")")
                  return {
                    type: "error",
                    position: pos
                  };
                pos++;
              }
              lhsLevel = PREC_COMP;
              break;
            }
            case "match": {
              if (level > PREC_COMP || lhsLevel <= PREC_COMP)
                break loop;
              let rhs = parseExpr(str, skipWS(str, innerPos + 5), PREC_COMP + 1);
              if (rhs.type === "error")
                return rhs;
              marks.unshift({
                name: "comp",
                position: startPos
              });
              marks.push({
                name: "op",
                position: innerPos
              }, {
                name: "op_end",
                position: innerPos + 5
              });
              marks = marks.concat(rhs.marks);
              pos = rhs.position;
              lhsLevel = 4;
              break;
            }
            default: {
              break loop;
            }
          }
        }
      }
    }
  let failPosition = (trav == null ? void 0 : trav.type) === "error" && trav.position;
  return {
    type: "success",
    marks,
    position: pos,
    failPosition
  };
}
function parseTraversal(str, pos) {
  let startPos = pos;
  switch (str[pos]) {
    case ".": {
      pos = skipWS(str, pos + 1);
      let identStart = pos;
      let identLen2 = parseRegex(str, pos, IDENT);
      if (!identLen2)
        return {
          type: "error",
          position: pos
        };
      pos += identLen2;
      return {
        type: "success",
        marks: [{
          name: "attr_access",
          position: startPos
        }, {
          name: "ident",
          position: identStart
        }, {
          name: "ident_end",
          position: pos
        }],
        position: pos
      };
    }
    case "-":
      if (str[pos + 1] !== ">")
        return {
          type: "error",
          position: pos
        };
      let marks = [{
        name: "deref",
        position: startPos
      }];
      pos += 2;
      let identPos = skipWS(str, pos);
      let identLen = parseRegex(str, identPos, IDENT);
      if (identLen) {
        pos = identPos + identLen;
        marks.push({
          name: "deref_attr",
          position: identPos
        }, {
          name: "ident",
          position: identPos
        }, {
          name: "ident_end",
          position: pos
        });
      }
      return {
        type: "success",
        marks,
        position: pos
      };
    case "[": {
      pos = skipWS(str, pos + 1);
      if (str[pos] === "]") {
        return {
          type: "success",
          marks: [{
            name: "array_postfix",
            position: startPos
          }],
          position: pos + 1
        };
      }
      let rangePos = pos;
      let result = parseExpr(str, pos, 0);
      if (result.type === "error")
        return result;
      pos = skipWS(str, result.position);
      if (str[pos] === "." && str[pos + 1] === ".") {
        let type = "inc_range";
        if (str[pos + 2] === ".") {
          type = "exc_range";
          pos += 3;
        } else {
          pos += 2;
        }
        pos = skipWS(str, pos);
        let rhs = parseExpr(str, pos, 0);
        if (rhs.type === "error")
          return rhs;
        pos = skipWS(str, rhs.position);
        if (str[pos] !== "]")
          return {
            type: "error",
            position: pos
          };
        return {
          type: "success",
          marks: [{
            name: "slice",
            position: startPos
          }, {
            name: type,
            position: rangePos
          }].concat(result.marks, rhs.marks),
          position: pos + 1
        };
      }
      if (str[pos] !== "]")
        return {
          type: "error",
          position: pos
        };
      return {
        type: "success",
        marks: [{
          name: "square_bracket",
          position: startPos
        }].concat(result.marks),
        position: pos + 1
      };
    }
    case "|": {
      pos = skipWS(str, pos + 1);
      if (str[pos] === "{") {
        let result = parseObject(str, pos);
        if (result.type === "error")
          return result;
        result.marks.unshift({
          name: "projection",
          position: startPos
        });
        return result;
      }
      break;
    }
    case "{": {
      let result = parseObject(str, pos);
      if (result.type === "error")
        return result;
      result.marks.unshift({
        name: "projection",
        position: startPos
      });
      return result;
    }
  }
  return {
    type: "error",
    position: pos
  };
}
function parseFuncCall(str, startPos, pos) {
  let marks = [];
  marks.push({
    name: "func_call",
    position: startPos
  });
  if (str[pos] === ":" && str[pos + 1] === ":") {
    marks.push({
      name: "namespace",
      position: startPos
    });
    marks.push({
      name: "ident",
      position: startPos
    }, {
      name: "ident_end",
      position: pos
    });
    pos = skipWS(str, pos + 2);
    let nameLen = parseRegex(str, pos, IDENT);
    if (!nameLen)
      return {
        type: "error",
        position: pos
      };
    marks.push({
      name: "ident",
      position: pos
    }, {
      name: "ident_end",
      position: pos + nameLen
    });
    pos = skipWS(str, pos + nameLen);
    if (str[pos] !== "(")
      return {
        type: "error",
        position: pos
      };
    pos++;
    pos = skipWS(str, pos);
  } else {
    marks.push({
      name: "ident",
      position: startPos
    }, {
      name: "ident_end",
      position: pos
    });
    pos = skipWS(str, pos + 1);
  }
  let lastPos = pos;
  if (str[pos] !== ")") {
    while (true) {
      let result = parseExpr(str, pos, 0);
      if (result.type === "error")
        return result;
      marks = marks.concat(result.marks);
      lastPos = result.position;
      pos = skipWS(str, result.position);
      if (str[pos] !== ",")
        break;
      pos = skipWS(str, pos + 1);
      if (str[pos] === ")")
        break;
    }
  }
  if (str[pos] !== ")") {
    return {
      type: "error",
      position: pos
    };
  }
  marks.push({
    name: "func_args_end",
    position: lastPos
  });
  return {
    type: "success",
    marks,
    position: pos + 1
  };
}
function parseObject(str, pos) {
  let marks = [{
    name: "object",
    position: pos
  }];
  pos = skipWS(str, pos + 1);
  while (str[pos] !== "}") {
    let pairPos = pos;
    if (str.slice(pos, pos + 3) === "...") {
      pos = skipWS(str, pos + 3);
      if (str[pos] !== "}" && str[pos] !== ",") {
        let expr = parseExpr(str, pos, 0);
        if (expr.type === "error")
          return expr;
        marks.push({
          name: "object_splat",
          position: pairPos
        });
        marks = marks.concat(expr.marks);
        pos = expr.position;
      } else {
        marks.push({
          name: "object_splat_this",
          position: pairPos
        });
      }
    } else {
      let expr = parseExpr(str, pos, 0);
      if (expr.type === "error")
        return expr;
      let nextPos = skipWS(str, expr.position);
      if (expr.marks[0].name === "str" && str[nextPos] === ":") {
        let value = parseExpr(str, skipWS(str, nextPos + 1), 0);
        if (value.type === "error")
          return value;
        marks.push({
          name: "object_pair",
          position: pairPos
        });
        marks = marks.concat(expr.marks, value.marks);
        pos = value.position;
      } else {
        marks = marks.concat({
          name: "object_expr",
          position: pos
        }, expr.marks);
        pos = expr.position;
      }
    }
    pos = skipWS(str, pos);
    if (str[pos] !== ",")
      break;
    pos = skipWS(str, pos + 1);
  }
  if (str[pos] !== "}") {
    return {
      type: "error",
      position: pos
    };
  }
  pos++;
  marks.push({
    name: "object_end",
    position: pos
  });
  return {
    type: "success",
    marks,
    position: pos
  };
}
function parseString(str, pos) {
  let token = str[pos];
  pos = pos + 1;
  const marks = [{
    name: "str",
    position: pos
  }];
  str:
    for (; ; pos++) {
      if (pos > str.length)
        return {
          type: "error",
          position: pos
        };
      switch (str[pos]) {
        case token: {
          marks.push({
            name: "str_end",
            position: pos
          });
          pos++;
          break str;
        }
        case "\\": {
          marks.push({
            name: "str_pause",
            position: pos
          });
          if (str[pos + 1] === "u") {
            if (str[pos + 2] === "{") {
              marks.push({
                name: "unicode_hex",
                position: pos + 3
              });
              pos = str.indexOf("}", pos + 3);
              marks.push({
                name: "unicode_hex_end",
                position: pos
              });
            } else {
              marks.push({
                name: "unicode_hex",
                position: pos + 2
              });
              marks.push({
                name: "unicode_hex_end",
                position: pos + 6
              });
              pos += 5;
            }
          } else {
            marks.push({
              name: "single_escape",
              position: pos + 1
            });
            pos += 1;
          }
          marks.push({
            name: "str_start",
            position: pos + 1
          });
        }
      }
    }
  return {
    type: "success",
    marks,
    position: pos
  };
}
function skipWS(str, pos) {
  return pos + parseRegex(str, pos, WS);
}
function parseRegex(str, pos, re) {
  let m = re.exec(str.slice(pos));
  return m ? m[0].length : 0;
}
function parseRegexStr(str, pos, re) {
  let m = re.exec(str.slice(pos));
  return m ? m[0] : null;
}
function join(a, b) {
  return (base) => b(a(base));
}
function map(inner) {
  return (base) => ({
    type: "Map",
    base,
    expr: inner({
      type: "This"
    })
  });
}
function flatMap(inner) {
  return (base) => ({
    type: "FlatMap",
    base,
    expr: inner({
      type: "This"
    })
  });
}
function traverseArray(build, right) {
  if (!right) {
    return {
      type: "a-a",
      build
    };
  }
  switch (right.type) {
    case "a-a":
      return {
        type: "a-a",
        build: join(build, right.build)
      };
    case "a-b":
      return {
        type: "a-b",
        build: join(build, right.build)
      };
    case "b-b":
      return {
        type: "a-a",
        build: join(build, map(right.build))
      };
    case "b-a":
      return {
        type: "a-a",
        build: join(build, flatMap(right.build))
      };
    default:
      throw new Error("unknown type: ".concat(right.type));
  }
}
function traversePlain(mapper, right) {
  if (!right) {
    return {
      type: "b-b",
      build: mapper
    };
  }
  switch (right.type) {
    case "a-a":
    case "b-a":
      return {
        type: "b-a",
        build: join(mapper, right.build)
      };
    case "a-b":
    case "b-b":
      return {
        type: "b-b",
        build: join(mapper, right.build)
      };
    default:
      throw new Error("unknown type: ".concat(right.type));
  }
}
function traverseElement(mapper, right) {
  if (!right) {
    return {
      type: "a-b",
      build: mapper
    };
  }
  switch (right.type) {
    case "a-a":
    case "b-a":
      return {
        type: "a-a",
        build: join(mapper, right.build)
      };
    case "a-b":
    case "b-b":
      return {
        type: "a-b",
        build: join(mapper, right.build)
      };
    default:
      throw new Error("unknown type: ".concat(right.type));
  }
}
function traverseProjection(mapper, right) {
  if (!right) {
    return {
      type: "b-b",
      build: mapper
    };
  }
  switch (right.type) {
    case "a-a":
      return {
        type: "a-a",
        build: join(map(mapper), right.build)
      };
    case "a-b":
      return {
        type: "a-b",
        build: join(map(mapper), right.build)
      };
    case "b-a":
      return {
        type: "b-a",
        build: join(mapper, right.build)
      };
    case "b-b":
      return {
        type: "b-b",
        build: join(mapper, right.build)
      };
    default:
      throw new Error("unknown type: ".concat(right.type));
  }
}
var ESCAPE_SEQUENCE = {
  "'": "'",
  '"': '"',
  "\\": "\\",
  "/": "/",
  b: "\b",
  f: "\f",
  n: "\n",
  r: "\r",
  t: "	"
};
function expandHex(str) {
  const charCode = parseInt(str, 16);
  return String.fromCharCode(charCode);
}
var GroqQueryError = class extends Error {
  constructor() {
    super(...arguments);
    this.name = "GroqQueryError";
  }
};
var EXPR_BUILDER = {
  group(p) {
    const inner = p.process(EXPR_BUILDER);
    return {
      type: "Group",
      base: inner
    };
  },
  everything() {
    return {
      type: "Everything"
    };
  },
  this() {
    return {
      type: "This"
    };
  },
  parent() {
    return {
      type: "Parent",
      n: 1
    };
  },
  dblparent(p) {
    const next = p.process(EXPR_BUILDER);
    return {
      type: "Parent",
      n: next.n + 1
    };
  },
  traverse(p) {
    const base = p.process(EXPR_BUILDER);
    const traversalList = [];
    while (p.getMark().name !== "traversal_end") {
      traversalList.push(p.process(TRAVERSE_BUILDER));
    }
    p.shift();
    let traversal = null;
    for (let i = traversalList.length - 1; i >= 0; i--) {
      traversal = traversalList[i](traversal);
    }
    if (base.type === "Everything" || base.type === "Array" || base.type === "PipeFuncCall") {
      traversal = traverseArray((val) => val, traversal);
    }
    if (traversal === null)
      throw new Error("BUG: unexpected empty traversal");
    return traversal.build(base);
  },
  this_attr(p) {
    const name = p.processString();
    if (name === "null") {
      return {
        type: "Value",
        value: null
      };
    }
    if (name === "true") {
      return {
        type: "Value",
        value: true
      };
    }
    if (name === "false") {
      return {
        type: "Value",
        value: false
      };
    }
    return {
      type: "AccessAttribute",
      name
    };
  },
  neg(p) {
    const base = p.process(EXPR_BUILDER);
    return {
      type: "Neg",
      base
    };
  },
  pos(p) {
    const base = p.process(EXPR_BUILDER);
    return {
      type: "Pos",
      base
    };
  },
  add(p) {
    const left = p.process(EXPR_BUILDER);
    const right = p.process(EXPR_BUILDER);
    return {
      type: "OpCall",
      op: "+",
      left,
      right
    };
  },
  sub(p) {
    const left = p.process(EXPR_BUILDER);
    const right = p.process(EXPR_BUILDER);
    return {
      type: "OpCall",
      op: "-",
      left,
      right
    };
  },
  mul(p) {
    const left = p.process(EXPR_BUILDER);
    const right = p.process(EXPR_BUILDER);
    return {
      type: "OpCall",
      op: "*",
      left,
      right
    };
  },
  div(p) {
    const left = p.process(EXPR_BUILDER);
    const right = p.process(EXPR_BUILDER);
    return {
      type: "OpCall",
      op: "/",
      left,
      right
    };
  },
  mod(p) {
    const left = p.process(EXPR_BUILDER);
    const right = p.process(EXPR_BUILDER);
    return {
      type: "OpCall",
      op: "%",
      left,
      right
    };
  },
  pow(p) {
    const left = p.process(EXPR_BUILDER);
    const right = p.process(EXPR_BUILDER);
    return {
      type: "OpCall",
      op: "**",
      left,
      right
    };
  },
  comp(p) {
    const left = p.process(EXPR_BUILDER);
    const op = p.processString();
    const right = p.process(EXPR_BUILDER);
    return {
      type: "OpCall",
      op,
      left,
      right
    };
  },
  in_range(p) {
    const base = p.process(EXPR_BUILDER);
    const isInclusive = p.getMark().name === "inc_range";
    p.shift();
    const left = p.process(EXPR_BUILDER);
    const right = p.process(EXPR_BUILDER);
    return {
      type: "InRange",
      base,
      left,
      right,
      isInclusive
    };
  },
  str(p) {
    let value = "";
    loop:
      while (p.hasMark()) {
        const mark = p.getMark();
        switch (mark.name) {
          case "str_end":
            value += p.processStringEnd();
            break loop;
          case "str_pause":
            value += p.processStringEnd();
            break;
          case "str_start":
            p.shift();
            break;
          case "single_escape": {
            const char = p.slice(1);
            p.shift();
            value += ESCAPE_SEQUENCE[char];
            break;
          }
          case "unicode_hex":
            p.shift();
            value += expandHex(p.processStringEnd());
            break;
          default:
            throw new Error("unexpected mark: ".concat(mark.name));
        }
      }
    return {
      type: "Value",
      value
    };
  },
  integer(p) {
    const strValue = p.processStringEnd();
    return {
      type: "Value",
      value: Number(strValue)
    };
  },
  float(p) {
    const strValue = p.processStringEnd();
    return {
      type: "Value",
      value: Number(strValue)
    };
  },
  sci(p) {
    const strValue = p.processStringEnd();
    return {
      type: "Value",
      value: Number(strValue)
    };
  },
  object(p) {
    const attributes = [];
    while (p.getMark().name !== "object_end") {
      attributes.push(p.process(OBJECT_BUILDER));
    }
    p.shift();
    return {
      type: "Object",
      attributes
    };
  },
  array(p) {
    const elements = [];
    while (p.getMark().name !== "array_end") {
      let isSplat = false;
      if (p.getMark().name === "array_splat") {
        isSplat = true;
        p.shift();
      }
      const value = p.process(EXPR_BUILDER);
      elements.push({
        type: "ArrayElement",
        value,
        isSplat
      });
    }
    p.shift();
    return {
      type: "Array",
      elements
    };
  },
  tuple(p) {
    const members = [];
    while (p.getMark().name !== "tuple_end") {
      members.push(p.process(EXPR_BUILDER));
    }
    p.shift();
    return {
      type: "Tuple",
      members
    };
  },
  func_call(p) {
    let namespace = "global";
    if (p.getMark().name === "namespace") {
      p.shift();
      namespace = p.processString();
    }
    const name = p.processString();
    if (namespace === "global" && name === "select") {
      const result = {
        type: "Select",
        alternatives: []
      };
      while (p.getMark().name !== "func_args_end") {
        if (p.getMark().name === "pair") {
          if (result.fallback)
            throw new GroqQueryError("unexpected argument to select()");
          p.shift();
          const condition = p.process(EXPR_BUILDER);
          const value = p.process(EXPR_BUILDER);
          result.alternatives.push({
            type: "SelectAlternative",
            condition,
            value
          });
        } else {
          if (result.fallback)
            throw new GroqQueryError("unexpected argument to select()");
          const value = p.process(EXPR_BUILDER);
          result.fallback = value;
        }
      }
      p.shift();
      return result;
    }
    const args = [];
    while (p.getMark().name !== "func_args_end") {
      if (argumentShouldBeSelector(namespace, name, args.length)) {
        p.process(SELECTOR_BUILDER);
        args.push({
          type: "Selector"
        });
      } else {
        args.push(p.process(EXPR_BUILDER));
      }
    }
    p.shift();
    if (namespace === "global" && (name === "before" || name === "after")) {
      if (p.parseOptions.mode === "delta") {
        return {
          type: "Context",
          key: name
        };
      }
    }
    if (namespace === "global" && name === "boost" && !p.allowBoost)
      throw new GroqQueryError("unexpected boost");
    const funcs = namespaces[namespace];
    if (!funcs) {
      throw new GroqQueryError("Undefined namespace: ".concat(namespace));
    }
    const func = funcs[name];
    if (!func) {
      throw new GroqQueryError("Undefined function: ".concat(name));
    }
    if (func.arity !== void 0) {
      validateArity(name, func.arity, args.length);
    }
    if (func.mode !== void 0 && func.mode !== p.parseOptions.mode) {
      throw new GroqQueryError("Undefined function: ".concat(name));
    }
    return {
      type: "FuncCall",
      func,
      name,
      args
    };
  },
  pipecall(p) {
    const base = p.process(EXPR_BUILDER);
    p.shift();
    let namespace = "global";
    if (p.getMark().name === "namespace") {
      p.shift();
      namespace = p.processString();
    }
    if (namespace !== "global") {
      throw new GroqQueryError("Undefined namespace: ".concat(namespace));
    }
    const name = p.processString();
    const args = [];
    const oldAllowBoost = p.allowBoost;
    if (name === "score") {
      p.allowBoost = true;
    }
    for (; ; ) {
      const markName = p.getMark().name;
      if (markName === "func_args_end") {
        break;
      }
      if (name === "order") {
        if (markName === "asc") {
          p.shift();
          args.push({
            type: "Asc",
            base: p.process(EXPR_BUILDER)
          });
          continue;
        } else if (markName === "desc") {
          p.shift();
          args.push({
            type: "Desc",
            base: p.process(EXPR_BUILDER)
          });
          continue;
        }
      }
      args.push(p.process(EXPR_BUILDER));
    }
    p.shift();
    p.allowBoost = oldAllowBoost;
    const func = pipeFunctions[name];
    if (!func) {
      throw new GroqQueryError("Undefined pipe function: ".concat(name));
    }
    if (func.arity) {
      validateArity(name, func.arity, args.length);
    }
    return {
      type: "PipeFuncCall",
      func,
      base,
      name,
      args
    };
  },
  pair(p) {
    throw new GroqQueryError("unexpected =>");
  },
  and(p) {
    const left = p.process(EXPR_BUILDER);
    const right = p.process(EXPR_BUILDER);
    return {
      type: "And",
      left,
      right
    };
  },
  or(p) {
    const left = p.process(EXPR_BUILDER);
    const right = p.process(EXPR_BUILDER);
    return {
      type: "Or",
      left,
      right
    };
  },
  not(p) {
    const base = p.process(EXPR_BUILDER);
    return {
      type: "Not",
      base
    };
  },
  asc(p) {
    throw new GroqQueryError("unexpected asc");
  },
  desc(p) {
    throw new GroqQueryError("unexpected desc");
  },
  param(p) {
    const name = p.processString();
    if (p.parseOptions.params && p.parseOptions.params.hasOwnProperty(name)) {
      return {
        type: "Value",
        value: p.parseOptions.params[name]
      };
    }
    return {
      type: "Parameter",
      name
    };
  }
};
var OBJECT_BUILDER = {
  object_expr(p) {
    if (p.getMark().name === "pair") {
      p.shift();
      const condition = p.process(EXPR_BUILDER);
      const value2 = p.process(EXPR_BUILDER);
      return {
        type: "ObjectConditionalSplat",
        condition,
        value: value2
      };
    }
    const value = p.process(EXPR_BUILDER);
    return {
      type: "ObjectAttributeValue",
      name: extractPropertyKey(value),
      value
    };
  },
  object_pair(p) {
    const name = p.process(EXPR_BUILDER);
    if (name.type !== "Value")
      throw new Error("name must be string");
    const value = p.process(EXPR_BUILDER);
    return {
      type: "ObjectAttributeValue",
      name: name.value,
      value
    };
  },
  object_splat(p) {
    const value = p.process(EXPR_BUILDER);
    return {
      type: "ObjectSplat",
      value
    };
  },
  object_splat_this() {
    return {
      type: "ObjectSplat",
      value: {
        type: "This"
      }
    };
  }
};
var TRAVERSE_BUILDER = {
  square_bracket(p) {
    const expr = p.process(EXPR_BUILDER);
    const value = tryConstantEvaluate(expr);
    if (value && value.type === "number") {
      return (right) => traverseElement((base) => ({
        type: "AccessElement",
        base,
        index: value.data
      }), right);
    }
    if (value && value.type === "string") {
      return (right) => traversePlain((base) => ({
        type: "AccessAttribute",
        base,
        name: value.data
      }), right);
    }
    return (right) => traverseArray((base) => ({
      type: "Filter",
      base,
      expr
    }), right);
  },
  slice(p) {
    const isInclusive = p.getMark().name === "inc_range";
    p.shift();
    const left = p.process(EXPR_BUILDER);
    const right = p.process(EXPR_BUILDER);
    const leftValue = tryConstantEvaluate(left);
    const rightValue = tryConstantEvaluate(right);
    if (!leftValue || !rightValue || leftValue.type !== "number" || rightValue.type !== "number") {
      throw new GroqQueryError("slicing must use constant numbers");
    }
    return (rhs) => traverseArray((base) => ({
      type: "Slice",
      base,
      left: leftValue.data,
      right: rightValue.data,
      isInclusive
    }), rhs);
  },
  projection(p) {
    const obj = p.process(EXPR_BUILDER);
    return (right) => traverseProjection((base) => ({
      type: "Projection",
      base,
      expr: obj
    }), right);
  },
  attr_access(p) {
    const name = p.processString();
    return (right) => traversePlain((base) => ({
      type: "AccessAttribute",
      base,
      name
    }), right);
  },
  deref(p) {
    let attr = null;
    if (p.getMark().name === "deref_attr") {
      p.shift();
      attr = p.processString();
    }
    const wrap = (base) => attr ? {
      type: "AccessAttribute",
      base,
      name: attr
    } : base;
    return (right) => traversePlain((base) => wrap({
      type: "Deref",
      base
    }), right);
  },
  array_postfix(p) {
    return (right) => traverseArray((base) => ({
      type: "ArrayCoerce",
      base
    }), right);
  }
};
var SELECTOR_BUILDER = {
  group(p) {
    p.process(SELECTOR_BUILDER);
    return null;
  },
  everything() {
    throw new Error("Invalid selector syntax");
  },
  this() {
    throw new Error("Invalid selector syntax");
  },
  parent() {
    throw new Error("Invalid selector syntax");
  },
  dblparent(p) {
    throw new Error("Invalid selector syntax");
  },
  traverse(p) {
    p.process(SELECTOR_BUILDER);
    while (p.getMark().name !== "traversal_end") {
      p.process(TRAVERSE_BUILDER);
    }
    p.shift();
    return null;
  },
  this_attr(p) {
    p.processString();
    return null;
  },
  neg(p) {
    throw new Error("Invalid selector syntax");
  },
  pos(p) {
    throw new Error("Invalid selector syntax");
  },
  add(p) {
    throw new Error("Invalid selector syntax");
  },
  sub(p) {
    throw new Error("Invalid selector syntax");
  },
  mul(p) {
    throw new Error("Invalid selector syntax");
  },
  div(p) {
    throw new Error("Invalid selector syntax");
  },
  mod(p) {
    throw new Error("Invalid selector syntax");
  },
  pow(p) {
    throw new Error("Invalid selector syntax");
  },
  comp(p) {
    throw new Error("Invalid selector syntax");
  },
  in_range(p) {
    throw new Error("Invalid selector syntax");
  },
  str(p) {
    throw new Error("Invalid selector syntax");
  },
  integer(p) {
    throw new Error("Invalid selector syntax");
  },
  float(p) {
    throw new Error("Invalid selector syntax");
  },
  sci(p) {
    throw new Error("Invalid selector syntax");
  },
  object(p) {
    throw new Error("Invalid selector syntax");
  },
  array(p) {
    throw new Error("Invalid selector syntax");
  },
  tuple(p) {
    throw new Error("Invalid selector syntax");
  },
  func_call(p, mark) {
    const func = EXPR_BUILDER.func_call(p, mark);
    if (func.name === "anywhere" && func.args.length === 1)
      return null;
    throw new Error("Invalid selector syntax");
  },
  pipecall(p) {
    throw new Error("Invalid selector syntax");
  },
  pair(p) {
    throw new Error("Invalid selector syntax");
  },
  and(p) {
    throw new Error("Invalid selector syntax");
  },
  or(p) {
    throw new Error("Invalid selector syntax");
  },
  not(p) {
    throw new Error("Invalid selector syntax");
  },
  asc(p) {
    throw new Error("Invalid selector syntax");
  },
  desc(p) {
    throw new Error("Invalid selector syntax");
  },
  param(p) {
    throw new Error("Invalid selector syntax");
  }
};
function extractPropertyKey(node) {
  if (node.type === "AccessAttribute" && !node.base) {
    return node.name;
  }
  if (node.type === "Deref" || node.type === "Map" || node.type === "Projection" || node.type === "Slice" || node.type === "Filter" || node.type === "AccessElement" || node.type === "ArrayCoerce") {
    return extractPropertyKey(node.base);
  }
  throw new GroqQueryError("Cannot determine property key for type: ".concat(node.type));
}
function validateArity(name, arity, count2) {
  if (typeof arity === "number") {
    if (count2 !== arity) {
      throw new GroqQueryError("Incorrect number of arguments to function ".concat(name, "(). Expected ").concat(arity, ", got ").concat(count2, "."));
    }
  } else if (arity) {
    if (!arity(count2)) {
      throw new GroqQueryError("Incorrect number of arguments to function ".concat(name, "()."));
    }
  }
}
function argumentShouldBeSelector(namespace, functionName, argCount) {
  const functionsRequiringSelectors = ["changedAny", "changedOnly"];
  return namespace == "diff" && argCount == 2 && functionsRequiringSelectors.includes(functionName);
}
var GroqSyntaxError = class extends Error {
  constructor(position) {
    super("Syntax error in GROQ query at position ".concat(position));
    this.name = "GroqSyntaxError";
    this.position = position;
  }
};
function parse(input) {
  let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const result = parse$1(input);
  if (result.type === "error") {
    throw new GroqSyntaxError(result.position);
  }
  const processor = new MarkProcessor(input, result.marks, options);
  return processor.process(EXPR_BUILDER);
}

// node_modules/@sanity/groq-store/dist/index.browser.mjs
var _templateObject;
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var isNativeBrowserEventSource = (eventSource) => typeof window !== "undefined" && eventSource.addEventListener === window.EventSource.prototype.addEventListener;
var isPolyfillEventSource = (eventSource) => !isNativeBrowserEventSource(eventSource);
var addEventSourceListener = (eventSource, type, listener) => {
  if (isPolyfillEventSource(eventSource)) {
    eventSource.addEventListener(type, listener);
  } else {
    eventSource.addEventListener(type, listener, false);
  }
};
function listen(EventSourceImpl, config, handlers) {
  const {
    projectId,
    dataset,
    token
  } = config;
  const headers = token ? {
    Authorization: "Bearer ".concat(token)
  } : void 0;
  const url = "https://".concat(projectId, ".api.sanity.io/v1/data/listen/").concat(dataset, "?query=*&effectFormat=mendoza");
  const es = new EventSourceImpl(url, {
    withCredentials: true,
    headers
  });
  addEventSourceListener(es, "welcome", handlers.open);
  addEventSourceListener(es, "mutation", getMutationParser(handlers.next));
  addEventSourceListener(es, "channelError", (msg) => {
    es.close();
    let data;
    try {
      data = JSON.parse(msg.data);
    } catch (err) {
      handlers.error(new Error("Unknown error parsing listener message"));
      return;
    }
    handlers.error(new Error(data.message || data.error || "Listener returned HTTP ".concat(data.statusCode)));
  });
  addEventSourceListener(es, "error", (err) => {
    const origin = typeof window !== "undefined" && window.location.origin;
    const hintSuffix = origin ? ", and that the CORS-origin (".concat(origin, ") is allowed") : "";
    const errorMessage = isErrorLike(err) ? " (".concat(err.message, ")") : "";
    handlers.error(new Error("Error establishing listener - check that the project ID and dataset are correct".concat(hintSuffix).concat(errorMessage)));
  });
  return {
    unsubscribe: () => Promise.resolve(es.close())
  };
}
function getMutationParser(cb) {
  return (msg) => {
    let data;
    try {
      data = JSON.parse(msg.data);
    } catch (err) {
      return;
    }
    cb(data);
  };
}
function isErrorLike(err) {
  return typeof err === "object" && err !== null && "message" in err;
}
function isDraft(doc) {
  return doc._id.startsWith("drafts.");
}
function getPublishedId(document) {
  return isDraft(document) ? document._id.slice(7) : document._id;
}
function applyPatchWithoutRev(doc, patch) {
  const patchDoc = {
    ...doc
  };
  delete patchDoc._rev;
  return applyPatch(patchDoc, patch);
}
var DEBOUNCE_MS = 25;
function noop() {
  return Promise.resolve();
}
function getSyncingDataset(config, onNotifyUpdate, _ref) {
  let {
    getDocuments: getDocuments3,
    EventSource
  } = _ref;
  const {
    projectId,
    dataset,
    listen: useListener,
    overlayDrafts,
    documentLimit,
    token,
    includeTypes
  } = config;
  let stagedDocs;
  let previousTrx;
  let flushTimeout;
  const onUpdate = (docs) => {
    stagedDocs = void 0;
    flushTimeout = void 0;
    previousTrx = void 0;
    onNotifyUpdate(overlayDrafts ? overlay(docs) : docs);
  };
  if (!useListener) {
    const loaded2 = getDocuments3({
      projectId,
      dataset,
      documentLimit,
      token,
      includeTypes
    }).then(onUpdate).then(noop);
    return {
      unsubscribe: noop,
      loaded: loaded2
    };
  }
  const indexedDocuments = /* @__PURE__ */ new Map();
  let documents;
  const buffer = [];
  let onDoneLoading;
  let onLoadError;
  const loaded = new Promise((resolve, reject) => {
    onDoneLoading = resolve;
    onLoadError = reject;
  });
  const onOpen = async () => {
    const initial = await getDocuments3({
      projectId,
      dataset,
      documentLimit,
      token,
      includeTypes
    });
    documents = applyBufferedMutations(initial, buffer);
    documents.forEach((doc) => indexedDocuments.set(doc._id, doc));
    onUpdate(documents);
    onDoneLoading();
  };
  const onMutationReceived = (msg) => {
    if (documents) {
      applyMutation(msg);
      scheduleUpdate(documents, msg);
    } else {
      buffer.push(msg);
    }
  };
  const listener = listen(EventSource, config, {
    next: onMutationReceived,
    open: onOpen,
    error: (error) => onLoadError(error)
  });
  const scheduleUpdate = (docs, msg) => {
    clearTimeout(flushTimeout);
    if (previousTrx !== msg.transactionId && stagedDocs) {
      onUpdate(stagedDocs);
      previousTrx = void 0;
    } else {
      previousTrx = msg.transactionId;
      stagedDocs = docs.slice();
    }
    flushTimeout = setTimeout(onUpdate, DEBOUNCE_MS, docs.slice());
  };
  const applyMutation = (msg) => {
    if (!msg.effects || msg.documentId.startsWith("_.")) {
      return;
    }
    const document = indexedDocuments.get(msg.documentId) || null;
    replaceDocument(msg.documentId, applyPatchWithoutRev(document, msg.effects.apply));
  };
  const replaceDocument = (id, document) => {
    const current = indexedDocuments.get(id);
    const docs = documents || [];
    const position = current ? docs.indexOf(current) : -1;
    if (position === -1 && document) {
      docs.push(document);
      indexedDocuments.set(id, document);
    } else if (document) {
      docs.splice(position, 1, document);
      indexedDocuments.set(id, document);
    } else {
      docs.splice(position, 1);
      indexedDocuments.delete(id);
    }
  };
  return {
    unsubscribe: listener.unsubscribe,
    loaded
  };
}
function applyBufferedMutations(documents, mutations) {
  const groups = /* @__PURE__ */ new Map();
  mutations.forEach((mutation) => {
    const group = groups.get(mutation.documentId) || [];
    group.push(mutation);
    groups.set(mutation.documentId, group);
  });
  groups.forEach((group, id) => {
    const document = documents.find((doc) => doc._id === id);
    if (!document) {
      console.warn("Received mutation for missing document %s", id);
      return;
    }
    let hasFoundRevision = false;
    let current = document;
    group.forEach((mutation) => {
      hasFoundRevision = hasFoundRevision || mutation.previousRev === document._rev;
      if (!hasFoundRevision) {
        return;
      }
      if (mutation.effects) {
        current = applyPatchWithoutRev(current, mutation.effects.apply);
      }
    });
    documents.splice(documents.indexOf(document), 1, current);
  });
  return documents;
}
function overlay(documents) {
  const overlayed = /* @__PURE__ */ new Map();
  documents.forEach((doc) => {
    const existing = overlayed.get(getPublishedId(doc));
    if (doc._id.startsWith("drafts.")) {
      overlayed.set(getPublishedId(doc), pretendThatItsPublished(doc));
    } else if (!existing) {
      overlayed.set(doc._id, doc);
    }
  });
  return Array.from(overlayed.values());
}
function pretendThatItsPublished(doc) {
  return {
    ...doc,
    _id: getPublishedId(doc)
  };
}
function groqStore$1(config, envImplementations) {
  let documents = [];
  const executeThrottled = throttle(config.subscriptionThrottleMs || 50, executeAllSubscriptions);
  const activeSubscriptions = [];
  let dataset;
  async function loadDataset() {
    if (!dataset) {
      dataset = getSyncingDataset(config, (docs) => {
        documents = docs;
        executeThrottled();
      }, envImplementations);
    }
    await dataset.loaded;
  }
  async function query(groqQuery, params) {
    await loadDataset();
    const tree = parse(groqQuery, {
      params
    });
    const result = await evaluateQuery(tree, {
      dataset: documents,
      params
    });
    return result.get();
  }
  async function getDocument(documentId) {
    await loadDataset();
    return query(groq(_templateObject || (_templateObject = _taggedTemplateLiteral(["*[_id == $id][0]"]))), {
      id: documentId
    });
  }
  async function getDocuments3(documentIds) {
    await loadDataset();
    const subQueries = documentIds.map((id) => '*[_id == "'.concat(id, '"][0]')).join(",\n");
    return query("[".concat(subQueries, "]"));
  }
  function subscribe(groqQuery, params, callback) {
    if (!config.listen) {
      throw new Error("Cannot use `subscribe()` without `listen: true`");
    }
    const subscription = {
      query: groqQuery,
      params,
      callback
    };
    activeSubscriptions.push(subscription);
    let unsubscribed = false;
    const unsubscribe = () => {
      if (unsubscribed) {
        return Promise.resolve();
      }
      unsubscribed = true;
      activeSubscriptions.splice(activeSubscriptions.indexOf(subscription), 1);
      return Promise.resolve();
    };
    executeQuerySubscription(subscription);
    return {
      unsubscribe
    };
  }
  function executeQuerySubscription(subscription) {
    return query(subscription.query, subscription.params).then((res) => {
      if ("previousResult" in subscription && (0, import_fast_deep_equal.default)(subscription.previousResult, res)) {
        return;
      }
      subscription.previousResult = res;
      subscription.callback(void 0, res);
    }).catch((err) => {
      subscription.callback(err);
    });
  }
  function executeAllSubscriptions() {
    activeSubscriptions.forEach(executeQuerySubscription);
  }
  function close() {
    executeThrottled.cancel();
    return dataset ? dataset.unsubscribe() : Promise.resolve();
  }
  return {
    query,
    getDocument,
    getDocuments: getDocuments3,
    subscribe,
    close
  };
}
var getDocuments = async function getDocuments2(_ref2) {
  let {
    projectId,
    dataset,
    token,
    documentLimit,
    includeTypes = []
  } = _ref2;
  const baseUrl = "https://".concat(projectId, ".api.sanity.io/v1/data/export/").concat(dataset);
  const params = includeTypes.length > 0 ? new URLSearchParams({
    types: includeTypes == null ? void 0 : includeTypes.join(",")
  }) : "";
  const url = "".concat(baseUrl, "?").concat(params);
  const headers = token ? {
    Authorization: "Bearer ".concat(token)
  } : void 0;
  const response = await fetch(url, {
    credentials: "include",
    headers
  });
  if (response.status !== 200) {
    throw new Error("Error streaming dataset: ".concat(getError(await response.json())));
  }
  const stream = getDocumentStream(response.body);
  const reader = stream.getReader();
  const documents = [];
  let result;
  let document;
  do {
    result = await reader.read();
    document = result.value;
    if (isStreamError(document)) {
      throw new Error("Error streaming dataset: ".concat(document.error));
    } else if (document && isRelevantDocument(document)) {
      documents.push(document);
    }
    if (documentLimit && documents.length > documentLimit) {
      reader.cancel("Reached document limit");
      throw new Error("Error streaming dataset: Reached limit of ".concat(documentLimit, " documents. Try using the includeTypes option to reduce the amount of documents, or increase the limit."));
    }
  } while (!result.done);
  return documents;
};
function getDocumentStream(body) {
  if (!body) {
    throw new Error("Failed to read body from response");
  }
  let reader;
  let cancelled = false;
  function cancel() {
    cancelled = true;
    if (reader) {
      reader.cancel();
    }
  }
  return new ReadableStream({
    start(controller) {
      reader = body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      reader.read().then(processResult).catch((err) => controller.error(err));
      async function processResult(result) {
        if (result.done) {
          if (cancelled) {
            return;
          }
          buffer = buffer.trim();
          if (buffer.length === 0) {
            controller.close();
            return;
          }
          controller.enqueue(JSON.parse(buffer));
          controller.close();
          return;
        }
        buffer += decoder.decode(result.value, {
          stream: true
        });
        const lines = buffer.split("\n");
        for (let i = 0; i < lines.length - 1; ++i) {
          const line = lines[i].trim();
          if (line.length === 0) {
            continue;
          }
          try {
            controller.enqueue(JSON.parse(line));
          } catch (err) {
            controller.error(err);
            cancel();
            return;
          }
        }
        buffer = lines[lines.length - 1];
        if (!reader) {
          return;
        }
        try {
          processResult(await reader.read());
        } catch (err) {
          controller.error(err);
        }
      }
    },
    cancel
  });
}
function isStreamError(result) {
  if (!result) {
    return false;
  }
  if (!("error" in result) || typeof result.error !== "object" || result.error === null) {
    return false;
  }
  return "description" in result.error && typeof result.error.description === "string" && !("_id" in result);
}
function getError(body) {
  if (typeof body === "object" && "error" in body && "message" in body) {
    return body.message || body.error;
  }
  return "<unknown error>";
}
function isRelevantDocument(doc) {
  return !doc._id.startsWith("_.");
}
function assertEnvSupport() {
  const required = ["EventSource", "ReadableStream", "fetch"];
  const unsupported = required.filter((api) => !(api in window));
  if (unsupported.length > 0) {
    throw new Error("Browser not supported. Missing browser APIs: ".concat(unsupported.join(", ")));
  }
}
function groqStore(config) {
  var _a;
  assertEnvSupport();
  const EventSource = (_a = config.EventSource) != null ? _a : window.EventSource;
  if (config.token) {
    if (!config.EventSource) {
      throw new Error("When the `token` option is used the `EventSource` option must also be provided.");
    }
    if (config.EventSource === window.EventSource)
      throw new Error("When the `token` option is used the `EventSource` option must also be provided. EventSource cannot be `window.EventSource`, as it does not support passing a token.");
  }
  return groqStore$1(config, {
    EventSource,
    getDocuments
  });
}
export {
  groq,
  groqStore
};
//# sourceMappingURL=/build/_shared/index.browser-WC4HWTKQ.js.map
