import {
  deskTool,
  require_isNumber
} from "/build/_shared/chunk-XANHPADF.js";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  Code,
  ComposeIcon,
  Container,
  CopyIcon,
  Dialog,
  EyeOpenIcon,
  Flex,
  FormField,
  Grid,
  Heading,
  Inline,
  Label,
  LeaveIcon,
  Menu,
  MenuButton,
  MenuIcon,
  MenuItem,
  MobileDeviceIcon,
  Spinner,
  Stack,
  Studio,
  Switch,
  Text,
  TextInput,
  ThListIcon,
  ThemeProvider,
  ToastProvider,
  Tooltip,
  UndoIcon,
  defineConfig,
  defineField,
  definePlugin,
  defineType,
  nanoid,
  require_isString,
  require_omit,
  route,
  studioTheme,
  useClient,
  useColorScheme,
  useToast
} from "/build/_shared/chunk-4NY5OEBK.js";
import "/build/_shared/chunk-EX55ICKE.js";
import "/build/_shared/chunk-RZPD7QDG.js";
import {
  OG_IMAGE_HEIGHT,
  OG_IMAGE_WIDTH,
  secondsToMinutes
} from "/build/_shared/chunk-TGHXYJU4.js";
import "/build/_shared/chunk-DWGBMFOF.js";
import {
  Disc,
  Home,
  Tags,
  Users
} from "/build/_shared/chunk-NFNY43FL.js";
import "/build/_shared/chunk-E7KB5GSM.js";
import {
  projectDetails
} from "/build/_shared/chunk-KCXGHVR5.js";
import {
  groq
} from "/build/_shared/chunk-6TKMBU2E.js";
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
  __commonJS,
  __toESM,
  init_buffer,
  init_dirname,
  init_filename,
  init_global,
  init_process,
  process_exports
} from "/build/_shared/chunk-I4IZRGLP.js";

// node_modules/axios/lib/helpers/bind.js
var require_bind = __commonJS({
  "node_modules/axios/lib/helpers/bind.js"(exports, module) {
    "use strict";
    init_global();
    init_dirname();
    init_filename();
    init_buffer();
    init_process();
    module.exports = function bind(fn, thisArg) {
      return function wrap() {
        var args = new Array(arguments.length);
        for (var i3 = 0; i3 < args.length; i3++) {
          args[i3] = arguments[i3];
        }
        return fn.apply(thisArg, args);
      };
    };
  }
});

// node_modules/axios/lib/utils.js
var require_utils = __commonJS({
  "node_modules/axios/lib/utils.js"(exports, module) {
    "use strict";
    init_global();
    init_dirname();
    init_filename();
    init_buffer();
    init_process();
    var bind = require_bind();
    var toString = Object.prototype.toString;
    function isArray(val) {
      return toString.call(val) === "[object Array]";
    }
    function isUndefined2(val) {
      return typeof val === "undefined";
    }
    function isBuffer(val) {
      return val !== null && !isUndefined2(val) && val.constructor !== null && !isUndefined2(val.constructor) && typeof val.constructor.isBuffer === "function" && val.constructor.isBuffer(val);
    }
    function isArrayBuffer(val) {
      return toString.call(val) === "[object ArrayBuffer]";
    }
    function isFormData(val) {
      return typeof FormData !== "undefined" && val instanceof FormData;
    }
    function isArrayBufferView(val) {
      var result;
      if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
        result = ArrayBuffer.isView(val);
      } else {
        result = val && val.buffer && val.buffer instanceof ArrayBuffer;
      }
      return result;
    }
    function isString(val) {
      return typeof val === "string";
    }
    function isNumber(val) {
      return typeof val === "number";
    }
    function isObject(val) {
      return val !== null && typeof val === "object";
    }
    function isPlainObject(val) {
      if (toString.call(val) !== "[object Object]") {
        return false;
      }
      var prototype = Object.getPrototypeOf(val);
      return prototype === null || prototype === Object.prototype;
    }
    function isDate(val) {
      return toString.call(val) === "[object Date]";
    }
    function isFile(val) {
      return toString.call(val) === "[object File]";
    }
    function isBlob(val) {
      return toString.call(val) === "[object Blob]";
    }
    function isFunction2(val) {
      return toString.call(val) === "[object Function]";
    }
    function isStream(val) {
      return isObject(val) && isFunction2(val.pipe);
    }
    function isURLSearchParams(val) {
      return typeof URLSearchParams !== "undefined" && val instanceof URLSearchParams;
    }
    function trim(str) {
      return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
    }
    function isStandardBrowserEnv() {
      if (typeof navigator !== "undefined" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS")) {
        return false;
      }
      return typeof window !== "undefined" && typeof document !== "undefined";
    }
    function forEach(obj, fn) {
      if (obj === null || typeof obj === "undefined") {
        return;
      }
      if (typeof obj !== "object") {
        obj = [obj];
      }
      if (isArray(obj)) {
        for (var i3 = 0, l3 = obj.length; i3 < l3; i3++) {
          fn.call(null, obj[i3], i3, obj);
        }
      } else {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            fn.call(null, obj[key], key, obj);
          }
        }
      }
    }
    function merge() {
      var result = {};
      function assignValue(val, key) {
        if (isPlainObject(result[key]) && isPlainObject(val)) {
          result[key] = merge(result[key], val);
        } else if (isPlainObject(val)) {
          result[key] = merge({}, val);
        } else if (isArray(val)) {
          result[key] = val.slice();
        } else {
          result[key] = val;
        }
      }
      for (var i3 = 0, l3 = arguments.length; i3 < l3; i3++) {
        forEach(arguments[i3], assignValue);
      }
      return result;
    }
    function extend(a2, b2, thisArg) {
      forEach(b2, function assignValue(val, key) {
        if (thisArg && typeof val === "function") {
          a2[key] = bind(val, thisArg);
        } else {
          a2[key] = val;
        }
      });
      return a2;
    }
    function stripBOM(content) {
      if (content.charCodeAt(0) === 65279) {
        content = content.slice(1);
      }
      return content;
    }
    module.exports = {
      isArray,
      isArrayBuffer,
      isBuffer,
      isFormData,
      isArrayBufferView,
      isString,
      isNumber,
      isObject,
      isPlainObject,
      isUndefined: isUndefined2,
      isDate,
      isFile,
      isBlob,
      isFunction: isFunction2,
      isStream,
      isURLSearchParams,
      isStandardBrowserEnv,
      forEach,
      merge,
      extend,
      trim,
      stripBOM
    };
  }
});

// node_modules/axios/lib/helpers/buildURL.js
var require_buildURL = __commonJS({
  "node_modules/axios/lib/helpers/buildURL.js"(exports, module) {
    "use strict";
    init_global();
    init_dirname();
    init_filename();
    init_buffer();
    init_process();
    var utils = require_utils();
    function encode(val) {
      return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    }
    module.exports = function buildURL(url, params, paramsSerializer) {
      if (!params) {
        return url;
      }
      var serializedParams;
      if (paramsSerializer) {
        serializedParams = paramsSerializer(params);
      } else if (utils.isURLSearchParams(params)) {
        serializedParams = params.toString();
      } else {
        var parts = [];
        utils.forEach(params, function serialize2(val, key) {
          if (val === null || typeof val === "undefined") {
            return;
          }
          if (utils.isArray(val)) {
            key = key + "[]";
          } else {
            val = [val];
          }
          utils.forEach(val, function parseValue(v2) {
            if (utils.isDate(v2)) {
              v2 = v2.toISOString();
            } else if (utils.isObject(v2)) {
              v2 = JSON.stringify(v2);
            }
            parts.push(encode(key) + "=" + encode(v2));
          });
        });
        serializedParams = parts.join("&");
      }
      if (serializedParams) {
        var hashmarkIndex = url.indexOf("#");
        if (hashmarkIndex !== -1) {
          url = url.slice(0, hashmarkIndex);
        }
        url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
      }
      return url;
    };
  }
});

// node_modules/axios/lib/core/InterceptorManager.js
var require_InterceptorManager = __commonJS({
  "node_modules/axios/lib/core/InterceptorManager.js"(exports, module) {
    "use strict";
    init_global();
    init_dirname();
    init_filename();
    init_buffer();
    init_process();
    var utils = require_utils();
    function InterceptorManager() {
      this.handlers = [];
    }
    InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
      this.handlers.push({
        fulfilled,
        rejected,
        synchronous: options ? options.synchronous : false,
        runWhen: options ? options.runWhen : null
      });
      return this.handlers.length - 1;
    };
    InterceptorManager.prototype.eject = function eject(id) {
      if (this.handlers[id]) {
        this.handlers[id] = null;
      }
    };
    InterceptorManager.prototype.forEach = function forEach(fn) {
      utils.forEach(this.handlers, function forEachHandler(h2) {
        if (h2 !== null) {
          fn(h2);
        }
      });
    };
    module.exports = InterceptorManager;
  }
});

// node_modules/axios/lib/helpers/normalizeHeaderName.js
var require_normalizeHeaderName = __commonJS({
  "node_modules/axios/lib/helpers/normalizeHeaderName.js"(exports, module) {
    "use strict";
    init_global();
    init_dirname();
    init_filename();
    init_buffer();
    init_process();
    var utils = require_utils();
    module.exports = function normalizeHeaderName(headers, normalizedName) {
      utils.forEach(headers, function processHeader(value, name) {
        if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
          headers[normalizedName] = value;
          delete headers[name];
        }
      });
    };
  }
});

// node_modules/axios/lib/core/enhanceError.js
var require_enhanceError = __commonJS({
  "node_modules/axios/lib/core/enhanceError.js"(exports, module) {
    "use strict";
    init_global();
    init_dirname();
    init_filename();
    init_buffer();
    init_process();
    module.exports = function enhanceError(error, config2, code, request, response) {
      error.config = config2;
      if (code) {
        error.code = code;
      }
      error.request = request;
      error.response = response;
      error.isAxiosError = true;
      error.toJSON = function toJSON() {
        return {
          // Standard
          message: this.message,
          name: this.name,
          // Microsoft
          description: this.description,
          number: this.number,
          // Mozilla
          fileName: this.fileName,
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          stack: this.stack,
          // Axios
          config: this.config,
          code: this.code,
          status: this.response && this.response.status ? this.response.status : null
        };
      };
      return error;
    };
  }
});

// node_modules/axios/lib/core/createError.js
var require_createError = __commonJS({
  "node_modules/axios/lib/core/createError.js"(exports, module) {
    "use strict";
    init_global();
    init_dirname();
    init_filename();
    init_buffer();
    init_process();
    var enhanceError = require_enhanceError();
    module.exports = function createError(message, config2, code, request, response) {
      var error = new Error(message);
      return enhanceError(error, config2, code, request, response);
    };
  }
});

// node_modules/axios/lib/core/settle.js
var require_settle = __commonJS({
  "node_modules/axios/lib/core/settle.js"(exports, module) {
    "use strict";
    init_global();
    init_dirname();
    init_filename();
    init_buffer();
    init_process();
    var createError = require_createError();
    module.exports = function settle(resolve, reject, response) {
      var validateStatus = response.config.validateStatus;
      if (!response.status || !validateStatus || validateStatus(response.status)) {
        resolve(response);
      } else {
        reject(createError(
          "Request failed with status code " + response.status,
          response.config,
          null,
          response.request,
          response
        ));
      }
    };
  }
});

// node_modules/axios/lib/helpers/cookies.js
var require_cookies = __commonJS({
  "node_modules/axios/lib/helpers/cookies.js"(exports, module) {
    "use strict";
    init_global();
    init_dirname();
    init_filename();
    init_buffer();
    init_process();
    var utils = require_utils();
    module.exports = utils.isStandardBrowserEnv() ? (
      // Standard browser envs support document.cookie
      function standardBrowserEnv() {
        return {
          write: function write(name, value, expires, path, domain, secure) {
            var cookie = [];
            cookie.push(name + "=" + encodeURIComponent(value));
            if (utils.isNumber(expires)) {
              cookie.push("expires=" + new Date(expires).toGMTString());
            }
            if (utils.isString(path)) {
              cookie.push("path=" + path);
            }
            if (utils.isString(domain)) {
              cookie.push("domain=" + domain);
            }
            if (secure === true) {
              cookie.push("secure");
            }
            document.cookie = cookie.join("; ");
          },
          read: function read(name) {
            var match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
            return match ? decodeURIComponent(match[3]) : null;
          },
          remove: function remove(name) {
            this.write(name, "", Date.now() - 864e5);
          }
        };
      }()
    ) : (
      // Non standard browser env (web workers, react-native) lack needed support.
      function nonStandardBrowserEnv() {
        return {
          write: function write() {
          },
          read: function read() {
            return null;
          },
          remove: function remove() {
          }
        };
      }()
    );
  }
});

// node_modules/axios/lib/helpers/isAbsoluteURL.js
var require_isAbsoluteURL = __commonJS({
  "node_modules/axios/lib/helpers/isAbsoluteURL.js"(exports, module) {
    "use strict";
    init_global();
    init_dirname();
    init_filename();
    init_buffer();
    init_process();
    module.exports = function isAbsoluteURL(url) {
      return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
    };
  }
});

// node_modules/axios/lib/helpers/combineURLs.js
var require_combineURLs = __commonJS({
  "node_modules/axios/lib/helpers/combineURLs.js"(exports, module) {
    "use strict";
    init_global();
    init_dirname();
    init_filename();
    init_buffer();
    init_process();
    module.exports = function combineURLs(baseURL, relativeURL) {
      return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
    };
  }
});

// node_modules/axios/lib/core/buildFullPath.js
var require_buildFullPath = __commonJS({
  "node_modules/axios/lib/core/buildFullPath.js"(exports, module) {
    "use strict";
    init_global();
    init_dirname();
    init_filename();
    init_buffer();
    init_process();
    var isAbsoluteURL = require_isAbsoluteURL();
    var combineURLs = require_combineURLs();
    module.exports = function buildFullPath(baseURL, requestedURL) {
      if (baseURL && !isAbsoluteURL(requestedURL)) {
        return combineURLs(baseURL, requestedURL);
      }
      return requestedURL;
    };
  }
});

// node_modules/axios/lib/helpers/parseHeaders.js
var require_parseHeaders = __commonJS({
  "node_modules/axios/lib/helpers/parseHeaders.js"(exports, module) {
    "use strict";
    init_global();
    init_dirname();
    init_filename();
    init_buffer();
    init_process();
    var utils = require_utils();
    var ignoreDuplicateOf = [
      "age",
      "authorization",
      "content-length",
      "content-type",
      "etag",
      "expires",
      "from",
      "host",
      "if-modified-since",
      "if-unmodified-since",
      "last-modified",
      "location",
      "max-forwards",
      "proxy-authorization",
      "referer",
      "retry-after",
      "user-agent"
    ];
    module.exports = function parseHeaders(headers) {
      var parsed = {};
      var key;
      var val;
      var i3;
      if (!headers) {
        return parsed;
      }
      utils.forEach(headers.split("\n"), function parser(line) {
        i3 = line.indexOf(":");
        key = utils.trim(line.substr(0, i3)).toLowerCase();
        val = utils.trim(line.substr(i3 + 1));
        if (key) {
          if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
            return;
          }
          if (key === "set-cookie") {
            parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
          } else {
            parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
          }
        }
      });
      return parsed;
    };
  }
});

// node_modules/axios/lib/helpers/isURLSameOrigin.js
var require_isURLSameOrigin = __commonJS({
  "node_modules/axios/lib/helpers/isURLSameOrigin.js"(exports, module) {
    "use strict";
    init_global();
    init_dirname();
    init_filename();
    init_buffer();
    init_process();
    var utils = require_utils();
    module.exports = utils.isStandardBrowserEnv() ? (
      // Standard browser envs have full support of the APIs needed to test
      // whether the request URL is of the same origin as current location.
      function standardBrowserEnv() {
        var msie = /(msie|trident)/i.test(navigator.userAgent);
        var urlParsingNode = document.createElement("a");
        var originURL;
        function resolveURL(url) {
          var href = url;
          if (msie) {
            urlParsingNode.setAttribute("href", href);
            href = urlParsingNode.href;
          }
          urlParsingNode.setAttribute("href", href);
          return {
            href: urlParsingNode.href,
            protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
            host: urlParsingNode.host,
            search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
            hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
            hostname: urlParsingNode.hostname,
            port: urlParsingNode.port,
            pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
          };
        }
        originURL = resolveURL(window.location.href);
        return function isURLSameOrigin(requestURL) {
          var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
          return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
        };
      }()
    ) : (
      // Non standard browser envs (web workers, react-native) lack needed support.
      function nonStandardBrowserEnv() {
        return function isURLSameOrigin() {
          return true;
        };
      }()
    );
  }
});

// node_modules/axios/lib/cancel/Cancel.js
var require_Cancel = __commonJS({
  "node_modules/axios/lib/cancel/Cancel.js"(exports, module) {
    "use strict";
    init_global();
    init_dirname();
    init_filename();
    init_buffer();
    init_process();
    function Cancel(message) {
      this.message = message;
    }
    Cancel.prototype.toString = function toString() {
      return "Cancel" + (this.message ? ": " + this.message : "");
    };
    Cancel.prototype.__CANCEL__ = true;
    module.exports = Cancel;
  }
});

// node_modules/axios/lib/adapters/xhr.js
var require_xhr = __commonJS({
  "node_modules/axios/lib/adapters/xhr.js"(exports, module) {
    "use strict";
    init_global();
    init_dirname();
    init_filename();
    init_buffer();
    init_process();
    var utils = require_utils();
    var settle = require_settle();
    var cookies = require_cookies();
    var buildURL = require_buildURL();
    var buildFullPath = require_buildFullPath();
    var parseHeaders = require_parseHeaders();
    var isURLSameOrigin = require_isURLSameOrigin();
    var createError = require_createError();
    var defaults = require_defaults();
    var Cancel = require_Cancel();
    module.exports = function xhrAdapter(config2) {
      return new Promise(function dispatchXhrRequest(resolve, reject) {
        var requestData = config2.data;
        var requestHeaders = config2.headers;
        var responseType = config2.responseType;
        var onCanceled;
        function done() {
          if (config2.cancelToken) {
            config2.cancelToken.unsubscribe(onCanceled);
          }
          if (config2.signal) {
            config2.signal.removeEventListener("abort", onCanceled);
          }
        }
        if (utils.isFormData(requestData)) {
          delete requestHeaders["Content-Type"];
        }
        var request = new XMLHttpRequest();
        if (config2.auth) {
          var username = config2.auth.username || "";
          var password = config2.auth.password ? unescape(encodeURIComponent(config2.auth.password)) : "";
          requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
        }
        var fullPath = buildFullPath(config2.baseURL, config2.url);
        request.open(config2.method.toUpperCase(), buildURL(fullPath, config2.params, config2.paramsSerializer), true);
        request.timeout = config2.timeout;
        function onloadend() {
          if (!request) {
            return;
          }
          var responseHeaders = "getAllResponseHeaders" in request ? parseHeaders(request.getAllResponseHeaders()) : null;
          var responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
          var response = {
            data: responseData,
            status: request.status,
            statusText: request.statusText,
            headers: responseHeaders,
            config: config2,
            request
          };
          settle(function _resolve(value) {
            resolve(value);
            done();
          }, function _reject(err) {
            reject(err);
            done();
          }, response);
          request = null;
        }
        if ("onloadend" in request) {
          request.onloadend = onloadend;
        } else {
          request.onreadystatechange = function handleLoad() {
            if (!request || request.readyState !== 4) {
              return;
            }
            if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
              return;
            }
            setTimeout(onloadend);
          };
        }
        request.onabort = function handleAbort() {
          if (!request) {
            return;
          }
          reject(createError("Request aborted", config2, "ECONNABORTED", request));
          request = null;
        };
        request.onerror = function handleError() {
          reject(createError("Network Error", config2, null, request));
          request = null;
        };
        request.ontimeout = function handleTimeout() {
          var timeoutErrorMessage = config2.timeout ? "timeout of " + config2.timeout + "ms exceeded" : "timeout exceeded";
          var transitional = config2.transitional || defaults.transitional;
          if (config2.timeoutErrorMessage) {
            timeoutErrorMessage = config2.timeoutErrorMessage;
          }
          reject(createError(
            timeoutErrorMessage,
            config2,
            transitional.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED",
            request
          ));
          request = null;
        };
        if (utils.isStandardBrowserEnv()) {
          var xsrfValue = (config2.withCredentials || isURLSameOrigin(fullPath)) && config2.xsrfCookieName ? cookies.read(config2.xsrfCookieName) : void 0;
          if (xsrfValue) {
            requestHeaders[config2.xsrfHeaderName] = xsrfValue;
          }
        }
        if ("setRequestHeader" in request) {
          utils.forEach(requestHeaders, function setRequestHeader(val, key) {
            if (typeof requestData === "undefined" && key.toLowerCase() === "content-type") {
              delete requestHeaders[key];
            } else {
              request.setRequestHeader(key, val);
            }
          });
        }
        if (!utils.isUndefined(config2.withCredentials)) {
          request.withCredentials = !!config2.withCredentials;
        }
        if (responseType && responseType !== "json") {
          request.responseType = config2.responseType;
        }
        if (typeof config2.onDownloadProgress === "function") {
          request.addEventListener("progress", config2.onDownloadProgress);
        }
        if (typeof config2.onUploadProgress === "function" && request.upload) {
          request.upload.addEventListener("progress", config2.onUploadProgress);
        }
        if (config2.cancelToken || config2.signal) {
          onCanceled = function(cancel) {
            if (!request) {
              return;
            }
            reject(!cancel || cancel && cancel.type ? new Cancel("canceled") : cancel);
            request.abort();
            request = null;
          };
          config2.cancelToken && config2.cancelToken.subscribe(onCanceled);
          if (config2.signal) {
            config2.signal.aborted ? onCanceled() : config2.signal.addEventListener("abort", onCanceled);
          }
        }
        if (!requestData) {
          requestData = null;
        }
        request.send(requestData);
      });
    };
  }
});

// node_modules/axios/lib/defaults.js
var require_defaults = __commonJS({
  "node_modules/axios/lib/defaults.js"(exports, module) {
    "use strict";
    init_global();
    init_dirname();
    init_filename();
    init_buffer();
    init_process();
    var utils = require_utils();
    var normalizeHeaderName = require_normalizeHeaderName();
    var enhanceError = require_enhanceError();
    var DEFAULT_CONTENT_TYPE = {
      "Content-Type": "application/x-www-form-urlencoded"
    };
    function setContentTypeIfUnset(headers, value) {
      if (!utils.isUndefined(headers) && utils.isUndefined(headers["Content-Type"])) {
        headers["Content-Type"] = value;
      }
    }
    function getDefaultAdapter() {
      var adapter;
      if (typeof XMLHttpRequest !== "undefined") {
        adapter = require_xhr();
      } else if (typeof process_exports !== "undefined" && Object.prototype.toString.call(process_exports) === "[object process]") {
        adapter = require_xhr();
      }
      return adapter;
    }
    function stringifySafely(rawValue, parser, encoder) {
      if (utils.isString(rawValue)) {
        try {
          (parser || JSON.parse)(rawValue);
          return utils.trim(rawValue);
        } catch (e3) {
          if (e3.name !== "SyntaxError") {
            throw e3;
          }
        }
      }
      return (encoder || JSON.stringify)(rawValue);
    }
    var defaults = {
      transitional: {
        silentJSONParsing: true,
        forcedJSONParsing: true,
        clarifyTimeoutError: false
      },
      adapter: getDefaultAdapter(),
      transformRequest: [function transformRequest(data, headers) {
        normalizeHeaderName(headers, "Accept");
        normalizeHeaderName(headers, "Content-Type");
        if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
          return data;
        }
        if (utils.isArrayBufferView(data)) {
          return data.buffer;
        }
        if (utils.isURLSearchParams(data)) {
          setContentTypeIfUnset(headers, "application/x-www-form-urlencoded;charset=utf-8");
          return data.toString();
        }
        if (utils.isObject(data) || headers && headers["Content-Type"] === "application/json") {
          setContentTypeIfUnset(headers, "application/json");
          return stringifySafely(data);
        }
        return data;
      }],
      transformResponse: [function transformResponse(data) {
        var transitional = this.transitional || defaults.transitional;
        var silentJSONParsing = transitional && transitional.silentJSONParsing;
        var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
        var strictJSONParsing = !silentJSONParsing && this.responseType === "json";
        if (strictJSONParsing || forcedJSONParsing && utils.isString(data) && data.length) {
          try {
            return JSON.parse(data);
          } catch (e3) {
            if (strictJSONParsing) {
              if (e3.name === "SyntaxError") {
                throw enhanceError(e3, this, "E_JSON_PARSE");
              }
              throw e3;
            }
          }
        }
        return data;
      }],
      /**
       * A timeout in milliseconds to abort a request. If set to 0 (default) a
       * timeout is not created.
       */
      timeout: 0,
      xsrfCookieName: "XSRF-TOKEN",
      xsrfHeaderName: "X-XSRF-TOKEN",
      maxContentLength: -1,
      maxBodyLength: -1,
      validateStatus: function validateStatus(status) {
        return status >= 200 && status < 300;
      },
      headers: {
        common: {
          "Accept": "application/json, text/plain, */*"
        }
      }
    };
    utils.forEach(["delete", "get", "head"], function forEachMethodNoData(method) {
      defaults.headers[method] = {};
    });
    utils.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
      defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
    });
    module.exports = defaults;
  }
});

// node_modules/axios/lib/core/transformData.js
var require_transformData = __commonJS({
  "node_modules/axios/lib/core/transformData.js"(exports, module) {
    "use strict";
    init_global();
    init_dirname();
    init_filename();
    init_buffer();
    init_process();
    var utils = require_utils();
    var defaults = require_defaults();
    module.exports = function transformData(data, headers, fns) {
      var context = this || defaults;
      utils.forEach(fns, function transform(fn) {
        data = fn.call(context, data, headers);
      });
      return data;
    };
  }
});

// node_modules/axios/lib/cancel/isCancel.js
var require_isCancel = __commonJS({
  "node_modules/axios/lib/cancel/isCancel.js"(exports, module) {
    "use strict";
    init_global();
    init_dirname();
    init_filename();
    init_buffer();
    init_process();
    module.exports = function isCancel(value) {
      return !!(value && value.__CANCEL__);
    };
  }
});

// node_modules/axios/lib/core/dispatchRequest.js
var require_dispatchRequest = __commonJS({
  "node_modules/axios/lib/core/dispatchRequest.js"(exports, module) {
    "use strict";
    init_global();
    init_dirname();
    init_filename();
    init_buffer();
    init_process();
    var utils = require_utils();
    var transformData = require_transformData();
    var isCancel = require_isCancel();
    var defaults = require_defaults();
    var Cancel = require_Cancel();
    function throwIfCancellationRequested(config2) {
      if (config2.cancelToken) {
        config2.cancelToken.throwIfRequested();
      }
      if (config2.signal && config2.signal.aborted) {
        throw new Cancel("canceled");
      }
    }
    module.exports = function dispatchRequest(config2) {
      throwIfCancellationRequested(config2);
      config2.headers = config2.headers || {};
      config2.data = transformData.call(
        config2,
        config2.data,
        config2.headers,
        config2.transformRequest
      );
      config2.headers = utils.merge(
        config2.headers.common || {},
        config2.headers[config2.method] || {},
        config2.headers
      );
      utils.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        function cleanHeaderConfig(method) {
          delete config2.headers[method];
        }
      );
      var adapter = config2.adapter || defaults.adapter;
      return adapter(config2).then(function onAdapterResolution(response) {
        throwIfCancellationRequested(config2);
        response.data = transformData.call(
          config2,
          response.data,
          response.headers,
          config2.transformResponse
        );
        return response;
      }, function onAdapterRejection(reason) {
        if (!isCancel(reason)) {
          throwIfCancellationRequested(config2);
          if (reason && reason.response) {
            reason.response.data = transformData.call(
              config2,
              reason.response.data,
              reason.response.headers,
              config2.transformResponse
            );
          }
        }
        return Promise.reject(reason);
      });
    };
  }
});

// node_modules/axios/lib/core/mergeConfig.js
var require_mergeConfig = __commonJS({
  "node_modules/axios/lib/core/mergeConfig.js"(exports, module) {
    "use strict";
    init_global();
    init_dirname();
    init_filename();
    init_buffer();
    init_process();
    var utils = require_utils();
    module.exports = function mergeConfig(config1, config2) {
      config2 = config2 || {};
      var config3 = {};
      function getMergedValue(target, source) {
        if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
          return utils.merge(target, source);
        } else if (utils.isPlainObject(source)) {
          return utils.merge({}, source);
        } else if (utils.isArray(source)) {
          return source.slice();
        }
        return source;
      }
      function mergeDeepProperties(prop) {
        if (!utils.isUndefined(config2[prop])) {
          return getMergedValue(config1[prop], config2[prop]);
        } else if (!utils.isUndefined(config1[prop])) {
          return getMergedValue(void 0, config1[prop]);
        }
      }
      function valueFromConfig2(prop) {
        if (!utils.isUndefined(config2[prop])) {
          return getMergedValue(void 0, config2[prop]);
        }
      }
      function defaultToConfig2(prop) {
        if (!utils.isUndefined(config2[prop])) {
          return getMergedValue(void 0, config2[prop]);
        } else if (!utils.isUndefined(config1[prop])) {
          return getMergedValue(void 0, config1[prop]);
        }
      }
      function mergeDirectKeys(prop) {
        if (prop in config2) {
          return getMergedValue(config1[prop], config2[prop]);
        } else if (prop in config1) {
          return getMergedValue(void 0, config1[prop]);
        }
      }
      var mergeMap = {
        "url": valueFromConfig2,
        "method": valueFromConfig2,
        "data": valueFromConfig2,
        "baseURL": defaultToConfig2,
        "transformRequest": defaultToConfig2,
        "transformResponse": defaultToConfig2,
        "paramsSerializer": defaultToConfig2,
        "timeout": defaultToConfig2,
        "timeoutMessage": defaultToConfig2,
        "withCredentials": defaultToConfig2,
        "adapter": defaultToConfig2,
        "responseType": defaultToConfig2,
        "xsrfCookieName": defaultToConfig2,
        "xsrfHeaderName": defaultToConfig2,
        "onUploadProgress": defaultToConfig2,
        "onDownloadProgress": defaultToConfig2,
        "decompress": defaultToConfig2,
        "maxContentLength": defaultToConfig2,
        "maxBodyLength": defaultToConfig2,
        "transport": defaultToConfig2,
        "httpAgent": defaultToConfig2,
        "httpsAgent": defaultToConfig2,
        "cancelToken": defaultToConfig2,
        "socketPath": defaultToConfig2,
        "responseEncoding": defaultToConfig2,
        "validateStatus": mergeDirectKeys
      };
      utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
        var merge = mergeMap[prop] || mergeDeepProperties;
        var configValue = merge(prop);
        utils.isUndefined(configValue) && merge !== mergeDirectKeys || (config3[prop] = configValue);
      });
      return config3;
    };
  }
});

// node_modules/axios/lib/env/data.js
var require_data = __commonJS({
  "node_modules/axios/lib/env/data.js"(exports, module) {
    init_global();
    init_dirname();
    init_filename();
    init_buffer();
    init_process();
    module.exports = {
      "version": "0.24.0"
    };
  }
});

// node_modules/axios/lib/helpers/validator.js
var require_validator = __commonJS({
  "node_modules/axios/lib/helpers/validator.js"(exports, module) {
    "use strict";
    init_global();
    init_dirname();
    init_filename();
    init_buffer();
    init_process();
    var VERSION = require_data().version;
    var validators = {};
    ["object", "boolean", "number", "function", "string", "symbol"].forEach(function(type, i3) {
      validators[type] = function validator(thing) {
        return typeof thing === type || "a" + (i3 < 1 ? "n " : " ") + type;
      };
    });
    var deprecatedWarnings = {};
    validators.transitional = function transitional(validator, version, message) {
      function formatMessage(opt, desc) {
        return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
      }
      return function(value, opt, opts) {
        if (validator === false) {
          throw new Error(formatMessage(opt, " has been removed" + (version ? " in " + version : "")));
        }
        if (version && !deprecatedWarnings[opt]) {
          deprecatedWarnings[opt] = true;
          console.warn(
            formatMessage(
              opt,
              " has been deprecated since v" + version + " and will be removed in the near future"
            )
          );
        }
        return validator ? validator(value, opt, opts) : true;
      };
    };
    function assertOptions(options, schema, allowUnknown) {
      if (typeof options !== "object") {
        throw new TypeError("options must be an object");
      }
      var keys = Object.keys(options);
      var i3 = keys.length;
      while (i3-- > 0) {
        var opt = keys[i3];
        var validator = schema[opt];
        if (validator) {
          var value = options[opt];
          var result = value === void 0 || validator(value, opt, options);
          if (result !== true) {
            throw new TypeError("option " + opt + " must be " + result);
          }
          continue;
        }
        if (allowUnknown !== true) {
          throw Error("Unknown option " + opt);
        }
      }
    }
    module.exports = {
      assertOptions,
      validators
    };
  }
});

// node_modules/axios/lib/core/Axios.js
var require_Axios = __commonJS({
  "node_modules/axios/lib/core/Axios.js"(exports, module) {
    "use strict";
    init_global();
    init_dirname();
    init_filename();
    init_buffer();
    init_process();
    var utils = require_utils();
    var buildURL = require_buildURL();
    var InterceptorManager = require_InterceptorManager();
    var dispatchRequest = require_dispatchRequest();
    var mergeConfig = require_mergeConfig();
    var validator = require_validator();
    var validators = validator.validators;
    function Axios(instanceConfig) {
      this.defaults = instanceConfig;
      this.interceptors = {
        request: new InterceptorManager(),
        response: new InterceptorManager()
      };
    }
    Axios.prototype.request = function request(config2) {
      if (typeof config2 === "string") {
        config2 = arguments[1] || {};
        config2.url = arguments[0];
      } else {
        config2 = config2 || {};
      }
      config2 = mergeConfig(this.defaults, config2);
      if (config2.method) {
        config2.method = config2.method.toLowerCase();
      } else if (this.defaults.method) {
        config2.method = this.defaults.method.toLowerCase();
      } else {
        config2.method = "get";
      }
      var transitional = config2.transitional;
      if (transitional !== void 0) {
        validator.assertOptions(transitional, {
          silentJSONParsing: validators.transitional(validators.boolean),
          forcedJSONParsing: validators.transitional(validators.boolean),
          clarifyTimeoutError: validators.transitional(validators.boolean)
        }, false);
      }
      var requestInterceptorChain = [];
      var synchronousRequestInterceptors = true;
      this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config2) === false) {
          return;
        }
        synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
        requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
      });
      var responseInterceptorChain = [];
      this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
      });
      var promise;
      if (!synchronousRequestInterceptors) {
        var chain = [dispatchRequest, void 0];
        Array.prototype.unshift.apply(chain, requestInterceptorChain);
        chain = chain.concat(responseInterceptorChain);
        promise = Promise.resolve(config2);
        while (chain.length) {
          promise = promise.then(chain.shift(), chain.shift());
        }
        return promise;
      }
      var newConfig = config2;
      while (requestInterceptorChain.length) {
        var onFulfilled = requestInterceptorChain.shift();
        var onRejected = requestInterceptorChain.shift();
        try {
          newConfig = onFulfilled(newConfig);
        } catch (error) {
          onRejected(error);
          break;
        }
      }
      try {
        promise = dispatchRequest(newConfig);
      } catch (error) {
        return Promise.reject(error);
      }
      while (responseInterceptorChain.length) {
        promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
      }
      return promise;
    };
    Axios.prototype.getUri = function getUri(config2) {
      config2 = mergeConfig(this.defaults, config2);
      return buildURL(config2.url, config2.params, config2.paramsSerializer).replace(/^\?/, "");
    };
    utils.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
      Axios.prototype[method] = function(url, config2) {
        return this.request(mergeConfig(config2 || {}, {
          method,
          url,
          data: (config2 || {}).data
        }));
      };
    });
    utils.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
      Axios.prototype[method] = function(url, data, config2) {
        return this.request(mergeConfig(config2 || {}, {
          method,
          url,
          data
        }));
      };
    });
    module.exports = Axios;
  }
});

// node_modules/axios/lib/cancel/CancelToken.js
var require_CancelToken = __commonJS({
  "node_modules/axios/lib/cancel/CancelToken.js"(exports, module) {
    "use strict";
    init_global();
    init_dirname();
    init_filename();
    init_buffer();
    init_process();
    var Cancel = require_Cancel();
    function CancelToken(executor) {
      if (typeof executor !== "function") {
        throw new TypeError("executor must be a function.");
      }
      var resolvePromise;
      this.promise = new Promise(function promiseExecutor(resolve) {
        resolvePromise = resolve;
      });
      var token = this;
      this.promise.then(function(cancel) {
        if (!token._listeners)
          return;
        var i3;
        var l3 = token._listeners.length;
        for (i3 = 0; i3 < l3; i3++) {
          token._listeners[i3](cancel);
        }
        token._listeners = null;
      });
      this.promise.then = function(onfulfilled) {
        var _resolve;
        var promise = new Promise(function(resolve) {
          token.subscribe(resolve);
          _resolve = resolve;
        }).then(onfulfilled);
        promise.cancel = function reject() {
          token.unsubscribe(_resolve);
        };
        return promise;
      };
      executor(function cancel(message) {
        if (token.reason) {
          return;
        }
        token.reason = new Cancel(message);
        resolvePromise(token.reason);
      });
    }
    CancelToken.prototype.throwIfRequested = function throwIfRequested() {
      if (this.reason) {
        throw this.reason;
      }
    };
    CancelToken.prototype.subscribe = function subscribe(listener) {
      if (this.reason) {
        listener(this.reason);
        return;
      }
      if (this._listeners) {
        this._listeners.push(listener);
      } else {
        this._listeners = [listener];
      }
    };
    CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
      if (!this._listeners) {
        return;
      }
      var index = this._listeners.indexOf(listener);
      if (index !== -1) {
        this._listeners.splice(index, 1);
      }
    };
    CancelToken.source = function source() {
      var cancel;
      var token = new CancelToken(function executor(c3) {
        cancel = c3;
      });
      return {
        token,
        cancel
      };
    };
    module.exports = CancelToken;
  }
});

// node_modules/axios/lib/helpers/spread.js
var require_spread = __commonJS({
  "node_modules/axios/lib/helpers/spread.js"(exports, module) {
    "use strict";
    init_global();
    init_dirname();
    init_filename();
    init_buffer();
    init_process();
    module.exports = function spread(callback) {
      return function wrap(arr) {
        return callback.apply(null, arr);
      };
    };
  }
});

// node_modules/axios/lib/helpers/isAxiosError.js
var require_isAxiosError = __commonJS({
  "node_modules/axios/lib/helpers/isAxiosError.js"(exports, module) {
    "use strict";
    init_global();
    init_dirname();
    init_filename();
    init_buffer();
    init_process();
    module.exports = function isAxiosError(payload) {
      return typeof payload === "object" && payload.isAxiosError === true;
    };
  }
});

// node_modules/axios/lib/axios.js
var require_axios = __commonJS({
  "node_modules/axios/lib/axios.js"(exports, module) {
    "use strict";
    init_global();
    init_dirname();
    init_filename();
    init_buffer();
    init_process();
    var utils = require_utils();
    var bind = require_bind();
    var Axios = require_Axios();
    var mergeConfig = require_mergeConfig();
    var defaults = require_defaults();
    function createInstance(defaultConfig2) {
      var context = new Axios(defaultConfig2);
      var instance = bind(Axios.prototype.request, context);
      utils.extend(instance, Axios.prototype, context);
      utils.extend(instance, context);
      instance.create = function create(instanceConfig) {
        return createInstance(mergeConfig(defaultConfig2, instanceConfig));
      };
      return instance;
    }
    var axios2 = createInstance(defaults);
    axios2.Axios = Axios;
    axios2.Cancel = require_Cancel();
    axios2.CancelToken = require_CancelToken();
    axios2.isCancel = require_isCancel();
    axios2.VERSION = require_data().version;
    axios2.all = function all(promises) {
      return Promise.all(promises);
    };
    axios2.spread = require_spread();
    axios2.isAxiosError = require_isAxiosError();
    module.exports = axios2;
    module.exports.default = axios2;
  }
});

// node_modules/axios/index.js
var require_axios2 = __commonJS({
  "node_modules/axios/index.js"(exports, module) {
    init_global();
    init_dirname();
    init_filename();
    init_buffer();
    init_process();
    module.exports = require_axios();
  }
});

// browser-route-module:routes/studio.$.tsx?browser
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/routes/studio.$.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// node_modules/remix-utils/browser/react/client-only.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_runtime = __toESM(require_jsx_runtime());

// node_modules/remix-utils/browser/react/use-hydrated.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react = __toESM(require_react());
var hydrating = true;
function useHydrated() {
  let [hydrated, setHydrated] = (0, import_react.useState)(() => !hydrating);
  (0, import_react.useEffect)(function hydrate() {
    hydrating = false;
    setHydrated(true);
  }, []);
  return hydrated;
}

// node_modules/remix-utils/browser/react/client-only.js
function ClientOnly({ children, fallback = null }) {
  return useHydrated() ? (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: children() }) : (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: fallback });
}

// app/styles/studio.css
var studio_default = "/build/_assets/studio-7UYMGTOZ.css";

// sanity.config.ts
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// node_modules/@sanity/vision/lib/index.esm.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react2 = __toESM(require_react());
var visionTool = definePlugin((options) => {
  const {
    name,
    title,
    icon,
    ...config2
  } = options || {};
  return {
    name: "@sanity/vision",
    tools: [{
      name: name || "vision",
      title: title || "Vision",
      icon: icon || EyeOpenIcon,
      component: (0, import_react2.lazy)(() => import("/build/_shared/SanityVision-9c6415d5-T7BMFUCJ.js")),
      options: config2,
      router: route.create("/*")
    }]
  };
});

// node_modules/sanity/lib/desk.esm.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var import_react3 = __toESM(require_react());
var import_omit = __toESM(require_omit());
var import_isNumber = __toESM(require_isNumber());
var import_isString = __toESM(require_isString());

// node_modules/sanity-plugin-vercel-deploy/dist/index.esm.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var import_axios = __toESM(require_axios2());
var import_react6 = __toESM(require_react());

// node_modules/spacetime/builds/spacetime.mjs
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var e = (e3, t3, a2) => {
  const [n3, r3] = e3.split("/"), [o3, i3] = r3.split(":");
  return Date.UTC(a2, n3 - 1, o3, i3) - 36e5 * t3;
};
var t = (t3, a2, n3, r3, o3) => {
  const i3 = new Date(t3).getUTCFullYear(), s2 = e(a2, o3, i3), u2 = e(n3, r3, i3);
  return t3 >= s2 && t3 < u2;
};
var a = (e3) => {
  let a2 = e3.timezones[e3.tz];
  if (void 0 === a2)
    return console.warn("Warning: couldn't find timezone " + e3.tz), 0;
  if (void 0 === a2.dst)
    return a2.offset;
  let n3 = a2.offset, r3 = a2.offset + 1;
  "n" === a2.hem && (r3 = n3 - 1);
  let o3 = a2.dst.split("->");
  return true === t(e3.epoch, o3[0], o3[1], n3, r3) ? n3 : r3;
};
var n;
var r = (n = Object.freeze({ __proto__: null, default: { "9|s": "2/dili,2/jayapura", "9|n": "2/chita,2/khandyga,2/pyongyang,2/seoul,2/tokyo,11/palau", "9.5|s|04/04:03->10/03:02": "4/adelaide,4/broken_hill,4/south,4/yancowinna", "9.5|s": "4/darwin,4/north", "8|s|03/08:01->10/04:00": "12/casey", "8|s": "2/kuala_lumpur,2/makassar,2/singapore,4/perth,2/ujung_pandang,4/west", "8|n": "2/brunei,2/choibalsan,2/hong_kong,2/irkutsk,2/kuching,2/macau,2/manila,2/shanghai,2/taipei,2/ulaanbaatar,2/chongqing,2/chungking,2/harbin,2/macao,2/ulan_bator", "8.75|s": "4/eucla", "7|s": "12/davis,2/jakarta,9/christmas", "7|n": "2/bangkok,2/barnaul,2/hovd,2/krasnoyarsk,2/novokuznetsk,2/novosibirsk,2/phnom_penh,2/pontianak,2/saigon,2/tomsk,2/vientiane,2/ho_chi_minh", "6|s": "12/vostok", "6|n": "2/almaty,2/bishkek,2/dhaka,2/omsk,2/qyzylorda,2/qostanay,2/thimphu,2/urumqi,9/chagos,2/dacca,2/kashgar,2/thimbu", "6.5|n": "2/rangoon,9/cocos,2/yangon", "5|s": "12/mawson,9/kerguelen", "5|n": "2/aqtau,2/aqtobe,2/ashgabat,2/atyrau,2/baku,2/dushanbe,2/karachi,2/oral,2/samarkand,2/tashkent,2/yekaterinburg,9/maldives,2/ashkhabad", "5.75|n": "2/katmandu,2/kathmandu", "5.5|n": "2/calcutta,2/colombo,2/kolkata", "4|s": "9/reunion", "4|n": "2/dubai,2/muscat,2/tbilisi,2/yerevan,8/astrakhan,8/samara,8/saratov,8/ulyanovsk,8/volgograd,2/volgograd,9/mahe,9/mauritius", "4.5|n|03/22:00->09/21:24": "2/tehran", "4.5|n": "2/kabul", "3|s": "12/syowa,9/antananarivo", "3|n|03/28:03->10/31:04": "2/famagusta,2/nicosia,8/athens,8/bucharest,8/helsinki,8/kiev,8/mariehamn,8/riga,8/sofia,8/tallinn,8/uzhgorod,8/vilnius,8/zaporozhye,8/nicosia", "3|n|03/28:02->10/31:03": "8/chisinau,8/tiraspol", "3|n|03/28:00->10/30:24": "2/beirut", "3|n|03/27:00->10/30:01": "2/gaza,2/hebron", "3|n|03/26:02->10/31:02": "2/jerusalem,2/tel_aviv", "3|n|03/26:00->10/29:01": "2/amman", "3|n|03/26:00->10/28:24": "2/damascus", "3|n": "0/addis_ababa,0/asmera,0/dar_es_salaam,0/djibouti,0/juba,0/kampala,0/mogadishu,0/nairobi,2/aden,2/baghdad,2/bahrain,2/kuwait,2/qatar,2/riyadh,8/istanbul,8/kirov,8/minsk,8/moscow,8/simferopol,9/comoro,9/mayotte,0/asmara,2/istanbul", "2|s|03/28:02->10/31:02": "12/troll", "2|s": "0/gaborone,0/harare,0/johannesburg,0/lubumbashi,0/lusaka,0/maputo,0/maseru,0/mbabane", "2|n|03/28:02->10/31:03": "0/ceuta,arctic/longyearbyen,8/amsterdam,8/andorra,8/belgrade,8/berlin,8/bratislava,8/brussels,8/budapest,8/busingen,8/copenhagen,8/gibraltar,8/ljubljana,8/luxembourg,8/madrid,8/malta,8/monaco,8/oslo,8/paris,8/podgorica,8/prague,8/rome,8/san_marino,8/sarajevo,8/skopje,8/stockholm,8/tirane,8/vaduz,8/vatican,8/vienna,8/warsaw,8/zagreb,8/zurich,3/jan_mayen", "2|n": "0/blantyre,0/bujumbura,0/cairo,0/khartoum,0/kigali,0/tripoli,8/kaliningrad", "1|s": "0/brazzaville,0/kinshasa,0/luanda,0/windhoek", "1|n|04/11:03->05/16:02": "0/casablanca,0/el_aaiun", "1|n|03/28:01->10/31:02": "3/canary,3/faeroe,3/madeira,8/dublin,8/guernsey,8/isle_of_man,8/jersey,8/lisbon,8/london,3/faroe,8/belfast", "1|n": "0/algiers,0/bangui,0/douala,0/lagos,0/libreville,0/malabo,0/ndjamena,0/niamey,0/porto-novo,0/tunis", "14|n": "11/kiritimati", "13|s|04/04:04->09/26:03": "11/apia", "13|s|01/15:02->11/05:03": "11/tongatapu", "13|n": "11/enderbury,11/fakaofo", "12|s|04/04:03->09/26:02": "12/mcmurdo,11/auckland,12/south_pole", "12|s|01/17:03->11/14:02": "11/fiji", "12|n": "2/anadyr,2/kamchatka,2/srednekolymsk,11/funafuti,11/kwajalein,11/majuro,11/nauru,11/tarawa,11/wake,11/wallis", "12.75|s|04/04:03->09/26:02": "11/chatham", "11|s|04/04:03->10/03:02": "12/macquarie", "11|s": "11/bougainville", "11|n": "2/magadan,2/sakhalin,11/efate,11/guadalcanal,11/kosrae,11/noumea,11/ponape,11/pohnpei", "11.5|n|04/04:03->10/03:02": "11/norfolk", "10|s|04/04:03->10/03:02": "4/currie,4/hobart,4/melbourne,4/sydney,4/act,4/canberra,4/nsw,4/tasmania,4/victoria", "10|s": "12/dumontdurville,4/brisbane,4/lindeman,11/port_moresby,4/queensland", "10|n": "2/ust-nera,2/vladivostok,2/yakutsk,11/guam,11/saipan,11/truk,11/chuuk,11/yap", "10.5|s|04/04:01->10/03:02": "4/lord_howe,4/lhi", "0|n|03/28:00->10/31:01": "1/scoresbysund,3/azores", "0|n": "0/abidjan,0/accra,0/bamako,0/banjul,0/bissau,0/conakry,0/dakar,0/freetown,0/lome,0/monrovia,0/nouakchott,0/ouagadougou,0/sao_tome,1/danmarkshavn,3/reykjavik,3/st_helena,13/gmt,13/utc,0/timbuktu,13/gmt-0,13/gmt+0,13/gmt0,13/greenwich,13/uct,13/universal,13/zulu", "-9|n|03/14:02->11/07:02": "1/adak,1/atka,us/aleutian", "-9|n": "11/gambier", "-9.5|n": "11/marquesas", "-8|n|03/14:02->11/07:02": "1/anchorage,1/juneau,1/metlakatla,1/nome,1/sitka,1/yakutat,us/alaska", "-8|n": "11/pitcairn", "-7|n|03/14:02->11/07:02": "1/los_angeles,1/santa_isabel,1/tijuana,1/vancouver,1/ensenada,6/pacific,10/bajanorte,us/pacific-new,us/pacific", "-7|n|03/08:02->11/01:01": "1/dawson,1/whitehorse,6/yukon", "-7|n": "1/creston,1/dawson_creek,1/fort_nelson,1/hermosillo,1/phoenix,us/arizona", "-6|s|04/03:22->09/04:22": "11/easter,7/easterisland", "-6|n|04/04:02->10/31:02": "1/chihuahua,1/mazatlan,10/bajasur", "-6|n|03/14:02->11/07:02": "1/boise,1/cambridge_bay,1/denver,1/edmonton,1/inuvik,1/ojinaga,1/yellowknife,1/shiprock,6/mountain,us/mountain", "-6|n": "1/belize,1/costa_rica,1/el_salvador,1/guatemala,1/managua,1/regina,1/swift_current,1/tegucigalpa,11/galapagos,6/east-saskatchewan,6/saskatchewan", "-5|s": "1/lima,1/rio_branco,1/porto_acre,5/acre", "-5|n|04/04:02->10/31:02": "1/bahia_banderas,1/merida,1/mexico_city,1/monterrey,10/general", "-5|n|03/14:02->11/07:02": "1/chicago,1/matamoros,1/menominee,1/rainy_river,1/rankin_inlet,1/resolute,1/winnipeg,1/indiana/knox,1/indiana/tell_city,1/north_dakota/beulah,1/north_dakota/center,1/north_dakota/new_salem,1/knox_in,6/central,us/central,us/indiana-starke", "-5|n|03/12:03->11/05:01": "1/north_dakota", "-5|n": "1/bogota,1/cancun,1/cayman,1/coral_harbour,1/eirunepe,1/guayaquil,1/jamaica,1/panama,1/atikokan", "-4|s|05/13:23->08/13:01": "12/palmer", "-4|s|04/03:24->09/05:00": "1/santiago,7/continental", "-4|s|03/27:24->10/03:00": "1/asuncion", "-4|s|02/16:24->11/03:00": "1/campo_grande,1/cuiaba", "-4|s": "1/la_paz,1/manaus,5/west", "-4|n|03/14:02->11/07:02": "1/detroit,1/grand_turk,1/indianapolis,1/iqaluit,1/louisville,1/montreal,1/nassau,1/new_york,1/nipigon,1/pangnirtung,1/port-au-prince,1/thunder_bay,1/toronto,1/indiana/marengo,1/indiana/petersburg,1/indiana/vevay,1/indiana/vincennes,1/indiana/winamac,1/kentucky/monticello,1/fort_wayne,1/indiana/indianapolis,1/kentucky/louisville,6/eastern,us/east-indiana,us/eastern,us/michigan", "-4|n|03/14:00->11/07:01": "1/havana", "-4|n|03/12:03->11/05:01": "1/indiana,1/kentucky", "-4|n": "1/anguilla,1/antigua,1/aruba,1/barbados,1/blanc-sablon,1/boa_vista,1/caracas,1/curacao,1/dominica,1/grenada,1/guadeloupe,1/guyana,1/kralendijk,1/lower_princes,1/marigot,1/martinique,1/montserrat,1/port_of_spain,1/porto_velho,1/puerto_rico,1/santo_domingo,1/st_barthelemy,1/st_kitts,1/st_lucia,1/st_thomas,1/st_vincent,1/tortola,1/virgin", "-3|s": "1/argentina,1/buenos_aires,1/catamarca,1/cordoba,1/fortaleza,1/jujuy,1/mendoza,1/montevideo,1/punta_arenas,1/sao_paulo,12/rothera,3/stanley,1/argentina/la_rioja,1/argentina/rio_gallegos,1/argentina/salta,1/argentina/san_juan,1/argentina/san_luis,1/argentina/tucuman,1/argentina/ushuaia,1/argentina/buenos_aires,1/argentina/catamarca,1/argentina/comodrivadavia,1/argentina/cordoba,1/argentina/jujuy,1/argentina/mendoza,1/rosario,5/east", "-3|n|03/14:02->11/07:02": "1/glace_bay,1/goose_bay,1/halifax,1/moncton,1/thule,3/bermuda,6/atlantic", "-3|n": "1/araguaina,1/bahia,1/belem,1/cayenne,1/maceio,1/paramaribo,1/recife,1/santarem", "-2|n|03/27:22->10/30:23": "1/godthab,1/nuuk", "-2|n|03/14:02->11/07:02": "1/miquelon", "-2|n": "1/noronha,3/south_georgia,5/denoronha", "-2.5|n|03/14:02->11/07:02": "1/st_johns,6/newfoundland", "-1|n": "3/cape_verde", "-11|n": "11/midway,11/niue,11/pago_pago,11/samoa,us/samoa", "-10|n": "11/honolulu,11/johnston,11/rarotonga,11/tahiti,us/hawaii" } })) && n.default || n;
var o = ["africa", "america", "asia", "atlantic", "australia", "brazil", "canada", "chile", "europe", "indian", "mexico", "pacific", "antarctica", "etc"];
var i = {};
Object.keys(r).forEach((e3) => {
  let t3 = e3.split("|"), a2 = { offset: Number(t3[0]), hem: t3[1] };
  t3[2] && (a2.dst = t3[2]), r[e3].split(",").forEach((e4) => {
    e4 = e4.replace(/(^[0-9]+)\//, (e5, t4) => (t4 = Number(t4), o[t4] + "/")), i[e4] = a2;
  });
}), i.utc = { offset: 0, hem: "n" };
for (let e3 = -14; e3 <= 14; e3 += 0.5) {
  let t3 = e3;
  t3 > 0 && (t3 = "+" + t3);
  let a2 = "etc/gmt" + t3;
  i[a2] = { offset: -1 * e3, hem: "n" }, a2 = "utc/gmt" + t3, i[a2] = { offset: -1 * e3, hem: "n" };
}
var s = /(\-?[0-9]+)h(rs)?/i;
var u = /(\-?[0-9]+)/;
var l = /utc([\-+]?[0-9]+)/i;
var h = /gmt([\-+]?[0-9]+)/i;
var c = function(e3) {
  return (e3 = Number(e3)) >= -13 && e3 <= 13 ? "etc/gmt" + (e3 = ((e3 *= -1) > 0 ? "+" : "") + e3) : null;
};
var d = i;
var m = function(e3) {
  let t3 = e3.match(s);
  if (null !== t3)
    return c(t3[1]);
  if (t3 = e3.match(l), null !== t3)
    return c(t3[1]);
  if (t3 = e3.match(h), null !== t3) {
    let e4 = -1 * Number(t3[1]);
    return c(e4);
  }
  return t3 = e3.match(u), null !== t3 ? c(t3[1]) : null;
};
var p = (() => {
  let e3 = (() => {
    if ("undefined" == typeof Intl || void 0 === Intl.DateTimeFormat)
      return null;
    let e4 = Intl.DateTimeFormat();
    if (void 0 === e4 || void 0 === e4.resolvedOptions)
      return null;
    let t3 = e4.resolvedOptions().timeZone;
    return t3 ? t3.toLowerCase() : null;
  })();
  return null === e3 ? "utc" : e3;
})();
var f = Object.keys(d).reduce((e3, t3) => {
  let a2 = t3.split("/")[1] || "";
  return a2 = a2.replace(/_/g, " "), e3[a2] = t3, e3;
}, {});
var y;
var g = (e3, t3) => {
  if (!e3)
    return p;
  "string" != typeof e3 && console.error("Timezone must be a string - recieved: '", e3, "'\n");
  let a2 = e3.trim();
  if (a2 = a2.toLowerCase(), true === t3.hasOwnProperty(a2))
    return a2;
  if (a2 = ((e4) => (e4 = (e4 = (e4 = (e4 = (e4 = e4.replace(/ time/g, "")).replace(/ (standard|daylight|summer)/g, "")).replace(/\b(east|west|north|south)ern/g, "$1")).replace(/\b(africa|america|australia)n/g, "$1")).replace(/\beuropean/g, "europe")).replace(/\islands/g, "island"))(a2), true === t3.hasOwnProperty(a2))
    return a2;
  if (true === f.hasOwnProperty(a2))
    return f[a2];
  if (true === /[0-9]/.test(a2)) {
    let e4 = m(a2);
    if (e4)
      return e4;
  }
  throw new Error("Spacetime: Cannot find timezone named: '" + e3 + "'. Please enter an IANA timezone id.");
};
var b = (function(e3, t3) {
  t3.isLeapYear = (e4) => e4 % 4 == 0 && e4 % 100 != 0 || e4 % 400 == 0, t3.isDate = (e4) => "[object Date]" === Object.prototype.toString.call(e4) && !isNaN(e4.valueOf()), t3.isArray = (e4) => "[object Array]" === Object.prototype.toString.call(e4), t3.isObject = (e4) => "[object Object]" === Object.prototype.toString.call(e4), t3.isBoolean = (e4) => "[object Boolean]" === Object.prototype.toString.call(e4), t3.zeroPad = (e4, t4 = 2) => (e4 += "").length >= t4 ? e4 : new Array(t4 - e4.length + 1).join("0") + e4, t3.titleCase = (e4) => e4 ? e4[0].toUpperCase() + e4.substr(1) : "", t3.ordinal = (e4) => {
    let t4 = e4 % 10, a2 = e4 % 100;
    return 1 === t4 && 11 !== a2 ? e4 + "st" : 2 === t4 && 12 !== a2 ? e4 + "nd" : 3 === t4 && 13 !== a2 ? e4 + "rd" : e4 + "th";
  }, t3.toCardinal = (e4) => (e4 = (e4 = String(e4)).replace(/([0-9])(st|nd|rd|th)$/i, "$1"), parseInt(e4, 10)), t3.normalize = (e4 = "") => "day" === (e4 = (e4 = (e4 = (e4 = e4.toLowerCase().trim()).replace(/ies$/, "y")).replace(/s$/, "")).replace(/-/g, "")) || "days" === e4 ? "date" : "min" === e4 || "mins" === e4 ? "minute" : e4, t3.getEpoch = (e4) => "number" == typeof e4 ? e4 : t3.isDate(e4) ? e4.getTime() : e4.epoch ? e4.epoch : null, t3.beADate = (e4, a2) => false === t3.isObject(e4) ? a2.clone().set(e4) : e4, t3.formatTimezone = (e4, a2 = "") => {
    const n3 = e4 > 0 ? "+" : "-", r3 = Math.abs(e4);
    return `${n3}${t3.zeroPad(parseInt("" + r3, 10))}${a2}${t3.zeroPad(r3 % 1 * 60)}`;
  };
}(y = { exports: {} }, y.exports), y.exports);
b.isLeapYear, b.isDate, b.isArray, b.isObject, b.isBoolean, b.zeroPad, b.titleCase, b.ordinal, b.toCardinal, b.normalize, b.getEpoch, b.beADate, b.formatTimezone;
var k = { year: (/* @__PURE__ */ new Date()).getFullYear(), month: 0, date: 1 };
var w = { parseArray: (e3, t3, a2) => {
  if (0 === t3.length)
    return e3;
  let n3 = ["year", "month", "date", "hour", "minute", "second", "millisecond"];
  for (let r3 = 0; r3 < n3.length; r3++) {
    let o3 = t3[r3] || a2[n3[r3]] || k[n3[r3]] || 0;
    e3 = e3[n3[r3]](o3);
  }
  return e3;
}, parseObject: (e3, t3, a2) => {
  if (0 === Object.keys(t3).length)
    return e3;
  t3 = Object.assign({}, k, a2, t3);
  let n3 = Object.keys(t3);
  for (let r3 = 0; r3 < n3.length; r3++) {
    let o3 = n3[r3];
    if (void 0 === e3[o3] || "function" != typeof e3[o3])
      continue;
    if (null === t3[o3] || void 0 === t3[o3] || "" === t3[o3])
      continue;
    let i3 = t3[o3] || a2[o3] || k[o3] || 0;
    e3 = e3[o3](i3);
  }
  return e3;
}, parseNumber: function(e3, t3) {
  return t3 > 0 && t3 < 25e8 && false === e3.silent && (console.warn("  - Warning: You are setting the date to January 1970."), console.warn("       -   did input seconds instead of milliseconds?")), e3.epoch = t3, e3;
} };
var v = function(e3) {
  return e3.epoch = Date.now(), Object.keys(e3._today || {}).forEach((t3) => {
    "function" == typeof e3[t3] && (e3 = e3[t3](e3._today[t3]));
  }), e3;
};
var z = { now: (e3) => v(e3), today: (e3) => v(e3), tonight: (e3) => e3 = (e3 = v(e3)).hour(18), tomorrow: (e3) => e3 = (e3 = (e3 = v(e3)).add(1, "day")).startOf("day"), yesterday: (e3) => e3 = (e3 = (e3 = v(e3)).subtract(1, "day")).startOf("day"), christmas: (e3) => {
  let t3 = v(e3).year();
  return e3 = e3.set([t3, 11, 25, 18, 0, 0]);
}, "new years": (e3) => {
  let t3 = v(e3).year();
  return e3 = e3.set([t3, 11, 31, 18, 0, 0]);
} };
z["new years eve"] = z["new years"];
var _ = z;
var j = function(e3) {
  return e3 = (e3 = (e3 = (e3 = e3.replace(/\b(mon|tues?|wed|wednes|thur?s?|fri|sat|satur|sun)(day)?\b/i, "")).replace(/([0-9])(th|rd|st|nd)/, "$1")).replace(/,/g, "")).replace(/ +/g, " ").trim();
};
var O = { millisecond: 1, second: 1e3, minute: 6e4, hour: 36e5, day: 864e5 };
O.date = O.day, O.month = 25488e5, O.week = 6048e5, O.year = 3154e7, Object.keys(O).forEach((e3) => {
  O[e3 + "s"] = O[e3];
});
var $ = O;
var D = (e3, t3, a2, n3, r3) => {
  let o3 = e3.d[a2]();
  if (o3 === t3)
    return;
  let i3 = null === r3 ? null : e3.d[r3](), s2 = e3.epoch, u2 = t3 - o3;
  e3.epoch += $[n3] * u2, "day" === n3 && Math.abs(u2) > 28 && t3 < 28 && (e3.epoch += $.hour), null !== r3 && i3 !== e3.d[r3]() && (e3.epoch = s2);
  const l3 = $[n3] / 2;
  for (; e3.d[a2]() < t3; )
    e3.epoch += l3;
  for (; e3.d[a2]() > t3; )
    e3.epoch -= l3;
  null !== r3 && i3 !== e3.d[r3]() && (e3.epoch = s2);
};
var M = { year: { valid: (e3) => e3 > -4e3 && e3 < 4e3, walkTo: (e3, t3) => D(e3, t3, "getFullYear", "year", null) }, month: { valid: (e3) => e3 >= 0 && e3 <= 11, walkTo: (e3, t3) => {
  let a2 = e3.d, n3 = a2.getMonth(), r3 = e3.epoch, o3 = a2.getFullYear();
  if (n3 === t3)
    return;
  let i3 = t3 - n3;
  for (e3.epoch += $.day * (28 * i3), o3 !== e3.d.getFullYear() && (e3.epoch = r3); e3.d.getMonth() < t3; )
    e3.epoch += $.day;
  for (; e3.d.getMonth() > t3; )
    e3.epoch -= $.day;
} }, date: { valid: (e3) => e3 > 0 && e3 <= 31, walkTo: (e3, t3) => D(e3, t3, "getDate", "day", "getMonth") }, hour: { valid: (e3) => e3 >= 0 && e3 < 24, walkTo: (e3, t3) => D(e3, t3, "getHours", "hour", "getDate") }, minute: { valid: (e3) => e3 >= 0 && e3 < 60, walkTo: (e3, t3) => D(e3, t3, "getMinutes", "minute", "getHours") }, second: { valid: (e3) => e3 >= 0 && e3 < 60, walkTo: (e3, t3) => {
  e3.epoch = e3.seconds(t3).epoch;
} }, millisecond: { valid: (e3) => e3 >= 0 && e3 < 1e3, walkTo: (e3, t3) => {
  e3.epoch = e3.milliseconds(t3).epoch;
} } };
var P = (e3, t3) => {
  let a2 = Object.keys(M), n3 = e3.clone();
  for (let r3 = 0; r3 < a2.length; r3++) {
    let o3 = a2[r3], i3 = t3[o3];
    if (void 0 === i3 && (i3 = n3[o3]()), "string" == typeof i3 && (i3 = parseInt(i3, 10)), !M[o3].valid(i3))
      return e3.epoch = null, void (false === e3.silent && console.warn("invalid " + o3 + ": " + i3));
    M[o3].walkTo(e3, i3);
  }
};
var S = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sept", "oct", "nov", "dec"];
var q = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
var T = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var E = b;
var N = { short: () => S, long: () => q, mapping: () => function() {
  const e3 = { sep: 8 };
  for (let t3 = 0; t3 < S.length; t3++)
    e3[S[t3]] = t3;
  for (let t3 = 0; t3 < q.length; t3++)
    e3[q[t3]] = t3;
  return e3;
}(), set: (e3) => {
  S = e3.short || S, q = e3.long || q;
} };
var C = (e3, t3) => {
  if (!t3)
    return e3;
  "Z" !== t3 && "z" !== t3 || (t3 = "+0000");
  let a2 = 0;
  /^[\+-]?[0-9]{2}:[0-9]{2}$/.test(t3) && (true === /:00/.test(t3) && (t3 = t3.replace(/:00/, "")), true === /:30/.test(t3) && (t3 = t3.replace(/:30/, ".5"))), /^[\+-]?[0-9]{4}$/.test(t3) && (t3 = t3.replace(/30$/, ".5")), a2 = parseFloat(t3), Math.abs(a2) > 100 && (a2 /= 100), a2 *= -1, a2 >= 0 && (a2 = "+" + a2);
  let n3 = "etc/gmt" + a2;
  return e3.timezones[n3] && (e3.tz = n3), e3;
};
var I = (e3, t3 = "") => {
  let a2 = (t3 = t3.replace(/^\s+/, "").toLowerCase()).match(/([0-9]{1,2}):([0-9]{1,2}):?([0-9]{1,2})?[:\.]?([0-9]{1,4})?/);
  if (null !== a2) {
    let n3 = Number(a2[1]);
    if (n3 < 0 || n3 > 24)
      return e3.startOf("day");
    let r3 = Number(a2[2]);
    if (a2[2].length < 2 || r3 < 0 || r3 > 59)
      return e3.startOf("day");
    a2[4] > 999 && (a2[4] = parseInt(("" + a2[4]).substring(0, 3), 10)), e3 = (e3 = (e3 = (e3 = e3.hour(n3)).minute(r3)).seconds(a2[3] || 0)).millisecond(a2[4] || 0);
    let o3 = t3.match(/[\b0-9] ?(am|pm)\b/);
    return null !== o3 && o3[1] && (e3 = e3.ampm(o3[1])), e3;
  }
  if (a2 = t3.match(/([0-9]+) ?(am|pm)/), null !== a2 && a2[1]) {
    let t4 = Number(a2[1]);
    return t4 > 12 || t4 < 1 ? e3.startOf("day") : e3 = (e3 = (e3 = e3.hour(a2[1] || 0)).ampm(a2[2])).startOf("hour");
  }
  return e3 = e3.startOf("day");
};
var Y = E.isLeapYear;
var A = N.mapping();
var x = P;
var L = { parseOffset: C, parseTime: I, parseYear: (e3 = "", t3) => {
  if (e3 = e3.trim(), true === /^'[0-9][0-9]$/.test(e3)) {
    let t4 = Number(e3.replace(/'/, ""));
    return t4 > 50 ? 1900 + t4 : 2e3 + t4;
  }
  let a2 = parseInt(e3, 10);
  return !a2 && t3 && (a2 = t3.year), a2 = a2 || (/* @__PURE__ */ new Date()).getFullYear(), a2;
}, parseMonth: function(e3) {
  return e3 = e3.toLowerCase().trim(), A[e3];
}, validate: (e3) => {
  if (true !== T.hasOwnProperty(e3.month))
    return false;
  if (1 === e3.month)
    return !!(Y(e3.year) && e3.date <= 29) || e3.date <= 28;
  let t3 = T[e3.month] || 0;
  return e3.date <= t3;
} };
var { validate: F, parseTime: B, parseYear: Z, parseMonth: H, parseOffset: Q } = L;
var G = [{ reg: /^(\-?0?0?[0-9]{3,4})-([0-9]{1,2})-([0-9]{1,2})[T| ]([0-9.:]+)(Z|[0-9\-\+:]+)?$/i, parse: (e3, t3) => {
  let a2 = { year: t3[1], month: parseInt(t3[2], 10) - 1, date: t3[3] };
  return false === F(a2) ? (e3.epoch = null, e3) : (Q(e3, t3[5]), x(e3, a2), e3 = B(e3, t3[4]));
} }, { reg: /^([0-9]{4})[\-\/\. ]([0-9]{1,2})[\-\/\. ]([0-9]{1,2})( [0-9]{1,2}(:[0-9]{0,2})?(:[0-9]{0,3})? ?(am|pm)?)?$/i, parse: (e3, t3) => {
  let a2 = { year: t3[1], month: parseInt(t3[2], 10) - 1, date: parseInt(t3[3], 10) };
  return a2.month >= 12 && (a2.date = parseInt(t3[2], 10), a2.month = parseInt(t3[3], 10) - 1), false === F(a2) ? (e3.epoch = null, e3) : (x(e3, a2), e3 = B(e3, t3[4]));
} }, { reg: /^([0-9]{4})[\-\/\. ]([a-z]+)[\-\/\. ]([0-9]{1,2})( [0-9]{1,2}(:[0-9]{0,2})?(:[0-9]{0,3})? ?(am|pm)?)?$/i, parse: (e3, t3) => {
  let a2 = { year: Z(t3[1], e3._today), month: H(t3[2]), date: E.toCardinal(t3[3] || "") };
  return false === F(a2) ? (e3.epoch = null, e3) : (x(e3, a2), e3 = B(e3, t3[4]));
} }];
var { validate: U, parseTime: V, parseYear: W, parseMonth: J } = L;
var K = [{ reg: /^([0-9]{1,2})[\-\/.]([0-9]{1,2})[\-\/.]?([0-9]{4})?( [0-9]{1,2}:[0-9]{2}:?[0-9]{0,2}? ?(am|pm|gmt))?$/i, parse: (e3, t3) => {
  let a2 = parseInt(t3[1], 10) - 1, n3 = parseInt(t3[2], 10);
  (e3.british || a2 >= 12) && (n3 = parseInt(t3[1], 10), a2 = parseInt(t3[2], 10) - 1);
  let r3 = { date: n3, month: a2, year: W(t3[3], e3._today) || (/* @__PURE__ */ new Date()).getFullYear() };
  return false === U(r3) ? (e3.epoch = null, e3) : (x(e3, r3), e3 = V(e3, t3[4]));
} }, { reg: /^([a-z]+)[\-\/\. ]([0-9]{1,2})[\-\/\. ]?([0-9]{4}|'[0-9]{2})?( [0-9]{1,2}(:[0-9]{0,2})?(:[0-9]{0,3})? ?(am|pm)?)?$/i, parse: (e3, t3) => {
  let a2 = { year: W(t3[3], e3._today), month: J(t3[1]), date: E.toCardinal(t3[2] || "") };
  return false === U(a2) ? (e3.epoch = null, e3) : (x(e3, a2), e3 = V(e3, t3[4]));
} }, { reg: /^([a-z]+) ([0-9]{1,2})( [0-9]{4})?( ([0-9:]+( ?am| ?pm| ?gmt)?))?$/i, parse: (e3, t3) => {
  let a2 = { year: W(t3[3], e3._today), month: J(t3[1]), date: E.toCardinal(t3[2] || "") };
  return false === U(a2) ? (e3.epoch = null, e3) : (x(e3, a2), e3 = V(e3, t3[4]));
} }, { reg: /^([a-z]+) ([0-9]{1,2})( [0-9:]+)?( \+[0-9]{4})?( [0-9]{4})?$/i, parse: (e3, t3) => {
  let a2 = { year: W(t3[5], e3._today), month: J(t3[1]), date: E.toCardinal(t3[2] || "") };
  return false === U(a2) ? (e3.epoch = null, e3) : (x(e3, a2), e3 = V(e3, t3[3]));
} }];
var { validate: R, parseTime: X, parseYear: ee, parseMonth: te } = L;
var ae = [{ reg: /^([0-9]{1,2})[\-\/]([a-z]+)[\-\/]?([0-9]{4})?$/i, parse: (e3, t3) => {
  let a2 = { year: ee(t3[3], e3._today), month: te(t3[2]), date: E.toCardinal(t3[1] || "") };
  return false === R(a2) ? (e3.epoch = null, e3) : (x(e3, a2), e3 = X(e3, t3[4]));
} }, { reg: /^([0-9]{1,2})( [a-z]+)( [0-9]{4}| '[0-9]{2})? ?([0-9]{1,2}:[0-9]{2}:?[0-9]{0,2}? ?(am|pm|gmt))?$/i, parse: (e3, t3) => {
  let a2 = { year: ee(t3[3], e3._today), month: te(t3[2]), date: E.toCardinal(t3[1]) };
  return a2.month && false !== R(a2) ? (x(e3, a2), e3 = X(e3, t3[4])) : (e3.epoch = null, e3);
} }, { reg: /^([0-9]{1,2})[\. -/]([a-z]+)[\. -/]([0-9]{4})?( [0-9]{1,2}(:[0-9]{0,2})?(:[0-9]{0,3})? ?(am|pm)?)?$/i, parse: (e3, t3) => {
  let a2 = { date: Number(t3[1]), month: te(t3[2]), year: Number(t3[3]) };
  return false === R(a2) ? (e3.epoch = null, e3) : (x(e3, a2), e3 = e3.startOf("day"), e3 = X(e3, t3[4]));
} }];
var { validate: ne, parseTime: re, parseYear: oe, parseMonth: ie } = L;
var se = [].concat(G, K, ae, [{ reg: /^([0-9]{4})[\-\/]([0-9]{2})$/i, parse: (e3, t3) => {
  let a2 = { year: t3[1], month: parseInt(t3[2], 10) - 1, date: 1 };
  return false === ne(a2) ? (e3.epoch = null, e3) : (x(e3, a2), e3 = re(e3, t3[4]));
} }, { reg: /^([a-z]+) ([0-9]{4})$/i, parse: (e3, t3) => {
  let a2 = { year: oe(t3[2], e3._today), month: ie(t3[1]), date: e3._today.date || 1 };
  return false === ne(a2) ? (e3.epoch = null, e3) : (x(e3, a2), e3 = re(e3, t3[4]));
} }, { reg: /^(q[0-9])( of)?( [0-9]{4})?/i, parse: (e3, t3) => {
  let a2 = t3[1] || "";
  e3 = e3.quarter(a2);
  let n3 = t3[3] || "";
  return n3 && (n3 = n3.trim(), e3 = e3.year(n3)), e3;
} }, { reg: /^(spring|summer|winter|fall|autumn)( of)?( [0-9]{4})?/i, parse: (e3, t3) => {
  let a2 = t3[1] || "";
  e3 = e3.season(a2);
  let n3 = t3[3] || "";
  return n3 && (n3 = n3.trim(), e3 = e3.year(n3)), e3;
} }, { reg: /^[0-9,]+ ?b\.?c\.?$/i, parse: (e3, t3) => {
  let a2 = t3[0] || "";
  a2 = a2.replace(/^([0-9,]+) ?b\.?c\.?$/i, "-$1");
  let n3 = /* @__PURE__ */ new Date(), r3 = { year: parseInt(a2.trim(), 10), month: n3.getMonth(), date: n3.getDate() };
  return false === ne(r3) ? (e3.epoch = null, e3) : (x(e3, r3), e3 = re(e3));
} }, { reg: /^[0-9,]+ ?(a\.?d\.?|c\.?e\.?)$/i, parse: (e3, t3) => {
  let a2 = t3[0] || "";
  a2 = a2.replace(/,/g, "");
  let n3 = /* @__PURE__ */ new Date(), r3 = { year: parseInt(a2.trim(), 10), month: n3.getMonth(), date: n3.getDate() };
  return false === ne(r3) ? (e3.epoch = null, e3) : (x(e3, r3), e3 = re(e3));
} }, { reg: /^[0-9]{4}( ?a\.?d\.?)?$/i, parse: (e3, t3) => {
  let a2 = e3._today;
  a2.month && !a2.date && (a2.date = 1);
  let n3 = /* @__PURE__ */ new Date(), r3 = { year: oe(t3[0], a2), month: a2.month || n3.getMonth(), date: a2.date || n3.getDate() };
  return false === ne(r3) ? (e3.epoch = null, e3) : (x(e3, r3), e3 = re(e3));
} }]);
var ue = w;
var le = _;
var he = j;
var ce = function(e3, t3, a2) {
  for (let n3 = 0; n3 < se.length; n3++) {
    let r3 = t3.match(se[n3].reg);
    if (r3) {
      let t4 = se[n3].parse(e3, r3, a2);
      if (null !== t4 && t4.isValid())
        return t4;
    }
  }
  return false === e3.silent && console.warn("Warning: couldn't parse date-string: '" + t3 + "'"), e3.epoch = null, e3;
};
var { parseArray: de, parseObject: me, parseNumber: pe } = ue;
var fe = { year: (/* @__PURE__ */ new Date()).getFullYear(), month: 0, date: 1 };
var ye = (e3, t3) => {
  let a2 = e3._today || fe;
  if ("number" == typeof t3)
    return pe(e3, t3);
  if (e3.epoch = Date.now(), e3._today && E.isObject(e3._today) && Object.keys(e3._today).length > 0) {
    let t4 = me(e3, a2, fe);
    t4.isValid() && (e3.epoch = t4.epoch);
  }
  return null == t3 || "" === t3 ? e3 : true === E.isDate(t3) ? (e3.epoch = t3.getTime(), e3) : true === E.isArray(t3) ? e3 = de(e3, t3, a2) : true === E.isObject(t3) ? t3.epoch ? (e3.epoch = t3.epoch, e3.tz = t3.tz, e3) : e3 = me(e3, t3, a2) : "string" != typeof t3 ? e3 : (t3 = he(t3), true === le.hasOwnProperty(t3) ? e3 = le[t3](e3) : ce(e3, t3));
};
var ge = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
var be = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
var ke = true;
var we = { short: () => ge, long: () => be, set: (e3) => {
  ge = e3.short || ge, be = e3.long || be;
}, aliases: { mo: 1, tu: 2, we: 3, th: 4, fr: 5, sa: 6, su: 7, tues: 2, weds: 3, wedn: 3, thur: 4, thurs: 4 } };
var ve = { useTitleCase: () => ke, set: (e3) => {
  ke = e3;
} };
var ze = (e3) => {
  let t3 = e3.timezone().current.offset;
  return t3 ? E.formatTimezone(t3, ":") : "Z";
};
var _e = (e3) => ve.useTitleCase() ? E.titleCase(e3) : e3;
var je = { day: (e3) => _e(e3.dayName()), "day-short": (e3) => _e(we.short()[e3.day()]), "day-number": (e3) => e3.day(), "day-ordinal": (e3) => E.ordinal(e3.day()), "day-pad": (e3) => E.zeroPad(e3.day()), date: (e3) => e3.date(), "date-ordinal": (e3) => E.ordinal(e3.date()), "date-pad": (e3) => E.zeroPad(e3.date()), month: (e3) => _e(e3.monthName()), "month-short": (e3) => _e(N.short()[e3.month()]), "month-number": (e3) => e3.month(), "month-ordinal": (e3) => E.ordinal(e3.month()), "month-pad": (e3) => E.zeroPad(e3.month()), "iso-month": (e3) => E.zeroPad(e3.month() + 1), year: (e3) => {
  let t3 = e3.year();
  return t3 > 0 ? t3 : (t3 = Math.abs(t3), t3 + " BC");
}, "year-short": (e3) => {
  let t3 = e3.year();
  return t3 > 0 ? "'" + String(e3.year()).substr(2, 4) : (t3 = Math.abs(t3), t3 + " BC");
}, "iso-year": (e3) => {
  let t3 = e3.year(), a2 = t3 < 0, n3 = E.zeroPad(Math.abs(t3), 4);
  return a2 && (n3 = E.zeroPad(n3, 6), n3 = "-" + n3), n3;
}, time: (e3) => e3.time(), "time-24": (e3) => `${e3.hour24()}:${E.zeroPad(e3.minute())}`, hour: (e3) => e3.hour12(), "hour-pad": (e3) => E.zeroPad(e3.hour12()), "hour-24": (e3) => e3.hour24(), "hour-24-pad": (e3) => E.zeroPad(e3.hour24()), minute: (e3) => e3.minute(), "minute-pad": (e3) => E.zeroPad(e3.minute()), second: (e3) => e3.second(), "second-pad": (e3) => E.zeroPad(e3.second()), millisecond: (e3) => e3.millisecond(), "millisecond-pad": (e3) => E.zeroPad(e3.millisecond(), 3), ampm: (e3) => e3.ampm(), quarter: (e3) => "Q" + e3.quarter(), season: (e3) => e3.season(), era: (e3) => e3.era(), json: (e3) => e3.json(), timezone: (e3) => e3.timezone().name, offset: (e3) => ze(e3), numeric: (e3) => `${e3.year()}/${E.zeroPad(e3.month() + 1)}/${E.zeroPad(e3.date())}`, "numeric-us": (e3) => `${E.zeroPad(e3.month() + 1)}/${E.zeroPad(e3.date())}/${e3.year()}`, "numeric-uk": (e3) => `${E.zeroPad(e3.date())}/${E.zeroPad(e3.month() + 1)}/${e3.year()}`, "mm/dd": (e3) => `${E.zeroPad(e3.month() + 1)}/${E.zeroPad(e3.date())}`, iso: (e3) => `${e3.format("iso-year")}-${E.zeroPad(e3.month() + 1)}-${E.zeroPad(e3.date())}T${E.zeroPad(e3.h24())}:${E.zeroPad(e3.minute())}:${E.zeroPad(e3.second())}.${E.zeroPad(e3.millisecond(), 3)}${ze(e3)}`, "iso-short": (e3) => {
  let t3 = E.zeroPad(e3.month() + 1), a2 = E.zeroPad(e3.date());
  var n3;
  return `${(n3 = e3.year()) >= 0 ? E.zeroPad(n3, 4) : (n3 = Math.abs(n3), "-" + E.zeroPad(n3, 4))}-${t3}-${a2}`;
}, "iso-utc": (e3) => new Date(e3.epoch).toISOString(), nice: (e3) => `${N.short()[e3.month()]} ${E.ordinal(e3.date())}, ${e3.time()}`, "nice-24": (e3) => `${N.short()[e3.month()]} ${E.ordinal(e3.date())}, ${e3.hour24()}:${E.zeroPad(e3.minute())}`, "nice-year": (e3) => `${N.short()[e3.month()]} ${E.ordinal(e3.date())}, ${e3.year()}`, "nice-day": (e3) => `${we.short()[e3.day()]} ${_e(N.short()[e3.month()])} ${E.ordinal(e3.date())}`, "nice-full": (e3) => `${e3.dayName()} ${_e(e3.monthName())} ${E.ordinal(e3.date())}, ${e3.time()}`, "nice-full-24": (e3) => `${e3.dayName()} ${_e(e3.monthName())} ${E.ordinal(e3.date())}, ${e3.hour24()}:${E.zeroPad(e3.minute())}` };
var Oe = { "day-name": "day", "month-name": "month", "iso 8601": "iso", "time-h24": "time-24", "time-12": "time", "time-h12": "time", tz: "timezone", "day-num": "day-number", "month-num": "month-number", "month-iso": "iso-month", "year-iso": "iso-year", "nice-short": "nice", "nice-short-24": "nice-24", mdy: "numeric-us", dmy: "numeric-uk", ymd: "numeric", "yyyy/mm/dd": "numeric", "mm/dd/yyyy": "numeric-us", "dd/mm/yyyy": "numeric-us", "little-endian": "numeric-uk", "big-endian": "numeric", "day-nice": "nice-day" };
Object.keys(Oe).forEach((e3) => je[e3] = je[Oe[e3]]);
var $e = (e3, t3 = "") => {
  if (true !== e3.isValid())
    return "";
  if (je.hasOwnProperty(t3)) {
    let a2 = je[t3](e3) || "";
    return "json" !== t3 && (a2 = String(a2), "ampm" !== t3 && (a2 = _e(a2))), a2;
  }
  if (-1 !== t3.indexOf("{")) {
    let a2 = /\{(.+?)\}/g;
    return t3 = t3.replace(a2, (t4, a3) => {
      if (a3 = a3.toLowerCase().trim(), je.hasOwnProperty(a3)) {
        let t5 = String(je[a3](e3));
        return "ampm" !== a3 ? _e(t5) : t5;
      }
      return "";
    });
  }
  return e3.format("iso-short");
};
var De = E.zeroPad;
var Me = E.formatTimezone;
var Pe = { G: (e3) => e3.era(), GG: (e3) => e3.era(), GGG: (e3) => e3.era(), GGGG: (e3) => "AD" === e3.era() ? "Anno Domini" : "Before Christ", y: (e3) => e3.year(), yy: (e3) => parseInt(String(e3.year()).substr(2, 4), 10), yyy: (e3) => e3.year(), yyyy: (e3) => e3.year(), yyyyy: (e3) => "0" + e3.year(), Q: (e3) => e3.quarter(), QQ: (e3) => e3.quarter(), QQQ: (e3) => e3.quarter(), QQQQ: (e3) => e3.quarter(), M: (e3) => e3.month() + 1, MM: (e3) => De(e3.month() + 1), MMM: (e3) => e3.format("month-short"), MMMM: (e3) => e3.format("month"), w: (e3) => e3.week(), ww: (e3) => De(e3.week()), d: (e3) => e3.date(), dd: (e3) => De(e3.date()), D: (e3) => e3.dayOfYear(), DD: (e3) => De(e3.dayOfYear()), DDD: (e3) => De(e3.dayOfYear(), 3), E: (e3) => e3.format("day-short"), EE: (e3) => e3.format("day-short"), EEE: (e3) => e3.format("day-short"), EEEE: (e3) => e3.format("day"), EEEEE: (e3) => e3.format("day")[0], e: (e3) => e3.day(), ee: (e3) => e3.day(), eee: (e3) => e3.format("day-short"), eeee: (e3) => e3.format("day"), eeeee: (e3) => e3.format("day")[0], a: (e3) => e3.ampm().toUpperCase(), aa: (e3) => e3.ampm().toUpperCase(), aaa: (e3) => e3.ampm().toUpperCase(), aaaa: (e3) => e3.ampm().toUpperCase(), h: (e3) => e3.h12(), hh: (e3) => De(e3.h12()), H: (e3) => e3.hour(), HH: (e3) => De(e3.hour()), m: (e3) => e3.minute(), mm: (e3) => De(e3.minute()), s: (e3) => e3.second(), ss: (e3) => De(e3.second()), SSS: (e3) => De(e3.millisecond(), 3), A: (e3) => e3.epoch - e3.startOf("day").epoch, z: (e3) => e3.timezone().name, zz: (e3) => e3.timezone().name, zzz: (e3) => e3.timezone().name, zzzz: (e3) => e3.timezone().name, Z: (e3) => Me(e3.timezone().current.offset), ZZ: (e3) => Me(e3.timezone().current.offset), ZZZ: (e3) => Me(e3.timezone().current.offset), ZZZZ: (e3) => Me(e3.timezone().current.offset, ":") };
var Se = (e3, t3, a2) => {
  let n3 = e3, r3 = t3;
  for (let o3 = 0; o3 < a2; o3 += 1)
    Pe[n3] = Pe[r3], n3 += e3, r3 += t3;
};
Se("q", "Q", 4), Se("L", "M", 4), Se("Y", "y", 4), Se("c", "e", 4), Se("k", "H", 2), Se("K", "h", 2), Se("S", "s", 2), Se("v", "z", 4), Se("V", "Z", 4);
var qe = (e3, t3) => {
  let a2 = t3.split("");
  return a2 = function(e4) {
    for (let t4 = 0; t4 < e4.length; t4 += 1)
      if ("'" === e4[t4])
        for (let a3 = t4 + 1; a3 < e4.length; a3 += 1) {
          if (e4[a3] && (e4[t4] += e4[a3]), "'" === e4[a3]) {
            e4[a3] = null;
            break;
          }
          e4[a3] = null;
        }
    return e4.filter((e5) => e5);
  }(a2), a2 = function(e4) {
    for (let t4 = 0; t4 < e4.length; t4 += 1) {
      let a3 = e4[t4];
      for (let n3 = t4 + 1; n3 < e4.length && e4[n3] === a3; n3 += 1)
        e4[t4] += e4[n3], e4[n3] = null;
    }
    return (e4 = e4.filter((e5) => e5)).map((e5) => ("''" === e5 && (e5 = "'"), e5));
  }(a2), a2.reduce((t4, a3) => (void 0 !== Pe[a3] ? t4 += Pe[a3](e3) || "" : (/^'.{1,}'$/.test(a3) && (a3 = a3.replace(/'/g, "")), t4 += a3), t4), "");
};
var Te = ["year", "season", "quarter", "month", "week", "day", "quarterHour", "hour", "minute"];
var Ee = function(e3, t3) {
  let a2 = e3.clone().startOf(t3), n3 = e3.clone().endOf(t3).epoch - a2.epoch, r3 = (e3.epoch - a2.epoch) / n3;
  return parseFloat(r3.toFixed(2));
};
var Ne = (e3, t3) => {
  if (t3)
    return t3 = E.normalize(t3), Ee(e3, t3);
  let a2 = {};
  return Te.forEach((t4) => {
    a2[t4] = Ee(e3, t4);
  }), a2;
};
var Ce = (e3, t3) => {
  let a2 = e3.progress();
  return "quarterhour" === (t3 = E.normalize(t3)) && (t3 = "quarterHour"), void 0 !== a2[t3] ? (a2[t3] > 0.5 && (e3 = e3.add(1, t3)), e3 = e3.startOf(t3)) : false === e3.silent && console.warn("no known unit '" + t3 + "'"), e3;
};
var Ie = (e3, t3, a2) => {
  let n3 = 0;
  for (e3 = e3.clone(); e3.isBefore(t3); )
    e3 = e3.add(1, a2), n3 += 1;
  return e3.isAfter(t3, a2) && (n3 -= 1), n3;
};
var Ye = (e3, t3, a2) => e3.isBefore(t3) ? Ie(e3, t3, a2) : -1 * Ie(t3, e3, a2);
var Ae = function(e3, t3) {
  let a2 = t3.epoch - e3.epoch, n3 = { milliseconds: a2, seconds: parseInt(a2 / 1e3, 10) };
  n3.minutes = parseInt(n3.seconds / 60, 10), n3.hours = parseInt(n3.minutes / 60, 10);
  let r3 = e3.clone();
  return n3.years = ((e4, t4) => {
    let a3 = t4.year() - e4.year();
    return (e4 = e4.year(t4.year())).isAfter(t4) && (a3 -= 1), a3;
  })(r3, t3), r3 = e3.add(n3.years, "year"), n3.months = 12 * n3.years, r3 = e3.add(n3.months, "month"), n3.months += Ye(r3, t3, "month"), n3.weeks = 52 * n3.years, r3 = e3.add(n3.weeks, "week"), n3.weeks += Ye(r3, t3, "week"), n3.days = 7 * n3.weeks, r3 = e3.add(n3.days, "day"), n3.days += Ye(r3, t3, "day"), n3;
};
var xe = function(e3, t3, a2) {
  t3 = E.beADate(t3, e3);
  let n3 = false;
  if (e3.isAfter(t3)) {
    let a3 = e3;
    e3 = t3, t3 = a3, n3 = true;
  }
  let r3 = Ae(e3, t3);
  return n3 && (r3 = function(e4) {
    return Object.keys(e4).forEach((t4) => {
      e4[t4] *= -1;
    }), e4;
  }(r3)), a2 ? (a2 = E.normalize(a2), true !== /s$/.test(a2) && (a2 += "s"), "dates" === a2 && (a2 = "days"), r3[a2]) : r3;
};
var Le = { months: { almost: 10, over: 4 }, days: { almost: 25, over: 10 }, hours: { almost: 20, over: 8 }, minutes: { almost: 50, over: 20 }, seconds: { almost: 50, over: 20 } };
function Fe(e3, t3) {
  return 1 === e3 && (t3 = t3.slice(0, -1)), e3 + " " + t3;
}
var Be = (e3, t3) => {
  const a2 = function(e4, t4) {
    const a3 = e4.isBefore(t4), n4 = a3 ? t4 : e4;
    let r4 = a3 ? e4 : t4;
    r4 = r4.clone();
    const o4 = { years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
    return Object.keys(o4).forEach((e5) => {
      if (r4.isSame(n4, e5))
        return;
      let t5 = r4.diff(n4, e5);
      r4 = r4.add(t5, e5), o4[e5] = t5;
    }), a3 && Object.keys(o4).forEach((e5) => {
      0 !== o4[e5] && (o4[e5] *= -1);
    }), o4;
  }(e3, t3 = E.beADate(t3, e3));
  if (true === Object.keys(a2).every((e4) => !a2[e4]))
    return { diff: a2, rounded: "now", qualified: "now", precise: "now" };
  let n3, r3, o3, i3 = [];
  return Object.keys(a2).forEach((e4, t4, o4) => {
    const s2 = Math.abs(a2[e4]);
    if (0 === s2)
      return;
    const u2 = Fe(s2, e4);
    if (i3.push(u2), !n3) {
      if (n3 = r3 = u2, t4 > 4)
        return;
      const i4 = o4[t4 + 1], l3 = Math.abs(a2[i4]);
      l3 > Le[i4].almost ? (n3 = Fe(s2 + 1, e4), r3 = "almost " + n3) : l3 > Le[i4].over && (r3 = "over " + u2);
    }
  }), o3 = i3.splice(0, 2).join(", "), true === e3.isAfter(t3) ? (n3 += " ago", r3 += " ago", o3 += " ago") : (n3 = "in " + n3, r3 = "in " + r3, o3 = "in " + o3), { diff: a2, rounded: n3, qualified: r3, precise: o3 };
};
var Ze = { north: [["spring", 2, 1], ["summer", 5, 1], ["fall", 8, 1], ["autumn", 8, 1], ["winter", 11, 1]], south: [["fall", 2, 1], ["autumn", 2, 1], ["winter", 5, 1], ["spring", 8, 1], ["summer", 11, 1]] };
var He = [null, [0, 1], [3, 1], [6, 1], [9, 1]];
var Qe = { minute: (e3) => (x(e3, { second: 0, millisecond: 0 }), e3), quarterhour: (e3) => {
  let t3 = e3.minutes();
  return e3 = t3 >= 45 ? e3.minutes(45) : t3 >= 30 ? e3.minutes(30) : t3 >= 15 ? e3.minutes(15) : e3.minutes(0), x(e3, { second: 0, millisecond: 0 }), e3;
}, hour: (e3) => (x(e3, { minute: 0, second: 0, millisecond: 0 }), e3), day: (e3) => (x(e3, { hour: 0, minute: 0, second: 0, millisecond: 0 }), e3), week: (e3) => {
  let t3 = e3.clone();
  return (e3 = e3.day(e3._weekStart)).isAfter(t3) && (e3 = e3.subtract(1, "week")), x(e3, { hour: 0, minute: 0, second: 0, millisecond: 0 }), e3;
}, month: (e3) => (x(e3, { date: 1, hour: 0, minute: 0, second: 0, millisecond: 0 }), e3), quarter: (e3) => {
  let t3 = e3.quarter();
  return He[t3] && x(e3, { month: He[t3][0], date: He[t3][1], hour: 0, minute: 0, second: 0, millisecond: 0 }), e3;
}, season: (e3) => {
  let t3 = e3.season(), a2 = "north";
  "South" === e3.hemisphere() && (a2 = "south");
  for (let n3 = 0; n3 < Ze[a2].length; n3++)
    if (Ze[a2][n3][0] === t3) {
      let r3 = e3.year();
      return "winter" === t3 && e3.month() < 3 && (r3 -= 1), x(e3, { year: r3, month: Ze[a2][n3][1], date: Ze[a2][n3][2], hour: 0, minute: 0, second: 0, millisecond: 0 }), e3;
    }
  return e3;
}, year: (e3) => (x(e3, { month: 0, date: 1, hour: 0, minute: 0, second: 0, millisecond: 0 }), e3), decade: (e3) => {
  let t3 = (e3 = e3.startOf("year")).year(), a2 = 10 * parseInt(t3 / 10, 10);
  return e3 = e3.year(a2);
}, century: (e3) => {
  let t3 = (e3 = e3.startOf("year")).year(), a2 = 100 * parseInt(t3 / 100, 10);
  return e3 = e3.year(a2);
} };
Qe.date = Qe.day;
var Ge = g;
var Ue = $e;
var Ve = qe;
var We = Ne;
var Je = Ce;
var Ke = xe;
var Re = Be;
var Xe = { startOf: (e3, t3) => {
  let a2 = e3.clone();
  return t3 = E.normalize(t3), Qe[t3] ? Qe[t3](a2) : "summer" === t3 || "winter" === t3 ? (a2 = a2.season(t3), Qe.season(a2)) : a2;
}, endOf: (e3, t3) => {
  let a2 = e3.clone();
  return t3 = E.normalize(t3), Qe[t3] ? (a2 = Qe[t3](a2), a2 = a2.add(1, t3), a2 = a2.subtract(1, "millisecond"), a2) : a2;
} };
var et = function(e3, t3 = "", a2) {
  if (!t3 || !a2)
    return [];
  if (t3 = E.normalize(t3), a2 = e3.clone().set(a2), e3.isAfter(a2)) {
    let t4 = e3;
    e3 = a2, a2 = t4;
  }
  let n3 = e3.clone();
  !function(e4) {
    return !!we.short().find((t4) => t4 === e4) || !!we.long().find((t4) => t4 === e4);
  }(t3) ? n3 = n3.next(t3) : (n3 = n3.next(t3), t3 = "week");
  let r3 = [];
  for (; n3.isBefore(a2); )
    r3.push(n3), n3 = n3.add(1, t3);
  return r3;
};
var tt = (e3) => {
  let a2 = e3.timezones, n3 = e3.tz;
  if (false === a2.hasOwnProperty(n3) && (n3 = Ge(e3.tz, a2)), null === n3)
    return false === e3.silent && console.warn("Warn: could not find given or local timezone - '" + e3.tz + "'"), { current: { epochShift: 0 } };
  let r3 = a2[n3], o3 = { name: (i3 = n3, i3 = (i3 = (i3 = i3[0].toUpperCase() + i3.substr(1)).replace(/\/gmt/, "/GMT")).replace(/[\/_]([a-z])/gi, (e4) => e4.toUpperCase())), hasDst: Boolean(r3.dst), default_offset: r3.offset, hemisphere: "s" === r3.hem ? "South" : "North", current: {} };
  var i3, s2;
  if (o3.hasDst) {
    let e4 = (s2 = r3.dst) ? s2.split("->") : [];
    o3.change = { start: e4[0], back: e4[1] };
  }
  let u2 = r3.offset, l3 = u2;
  return true === o3.hasDst && (l3 = "North" === o3.hemisphere ? u2 - 1 : r3.offset + 1), false === o3.hasDst ? (o3.current.offset = u2, o3.current.isDST = false) : true === t(e3.epoch, o3.change.start, o3.change.back, u2, l3) ? (o3.current.offset = u2, o3.current.isDST = "North" === o3.hemisphere) : (o3.current.offset = l3, o3.current.isDST = "South" === o3.hemisphere), o3;
};
var at = ye;
var nt = ["century", "decade", "year", "month", "date", "day", "hour", "minute", "second", "millisecond"];
var rt = { set: function(e3, t3) {
  let a2 = this.clone();
  return a2 = at(a2, e3, null), t3 && (this.tz = Ge(t3)), a2;
}, timezone: function() {
  return tt(this);
}, isDST: function() {
  return tt(this).current.isDST;
}, hasDST: function() {
  return tt(this).hasDst;
}, offset: function() {
  return 60 * tt(this).current.offset;
}, hemisphere: function() {
  return tt(this).hemisphere;
}, format: function(e3) {
  return Ue(this, e3);
}, unixFmt: function(e3) {
  return Ve(this, e3);
}, startOf: function(e3) {
  return Xe.startOf(this, e3);
}, endOf: function(e3) {
  return Xe.endOf(this, e3);
}, leapYear: function() {
  let e3 = this.year();
  return E.isLeapYear(e3);
}, progress: function(e3) {
  return We(this, e3);
}, nearest: function(e3) {
  return Je(this, e3);
}, diff: function(e3, t3) {
  return Ke(this, e3, t3);
}, since: function(e3) {
  return e3 || (e3 = this.clone().set()), Re(this, e3);
}, next: function(e3) {
  return this.add(1, e3).startOf(e3);
}, last: function(e3) {
  return this.subtract(1, e3).startOf(e3);
}, isValid: function() {
  return !(!this.epoch && 0 !== this.epoch) && !isNaN(this.d.getTime());
}, goto: function(e3) {
  let t3 = this.clone();
  return t3.tz = Ge(e3, t3.timezones), t3;
}, every: function(e3, t3) {
  if ("object" == typeof e3 && "string" == typeof t3) {
    let a2 = t3;
    t3 = e3, e3 = a2;
  }
  return et(this, e3, t3);
}, isAwake: function() {
  let e3 = this.hour();
  return !(e3 < 8 || e3 > 22);
}, isAsleep: function() {
  return !this.isAwake();
}, daysInMonth: function() {
  switch (this.month()) {
    case 0:
      return 31;
    case 1:
      return this.leapYear() ? 29 : 28;
    case 2:
      return 31;
    case 3:
      return 30;
    case 4:
      return 31;
    case 5:
      return 30;
    case 6:
    case 7:
      return 31;
    case 8:
      return 30;
    case 9:
      return 31;
    case 10:
      return 30;
    case 11:
      return 31;
    default:
      throw new Error("Invalid Month state.");
  }
}, log: function() {
  return console.log(""), console.log(Ue(this, "nice-short")), this;
}, logYear: function() {
  return console.log(""), console.log(Ue(this, "full-short")), this;
}, json: function() {
  return nt.reduce((e3, t3) => (e3[t3] = this[t3](), e3), {});
}, debug: function() {
  let e3 = this.timezone(), t3 = this.format("MM") + " " + this.format("date-ordinal") + " " + this.year();
  return t3 += "\n     - " + this.format("time"), console.log("\n\n", t3 + "\n     - " + e3.name + " (" + e3.current.offset + ")"), this;
}, from: function(e3) {
  return (e3 = this.clone().set(e3)).since(this);
}, fromNow: function() {
  return this.clone().set(Date.now()).since(this);
}, weekStart: function(e3) {
  if ("number" == typeof e3)
    return this._weekStart = e3, this;
  if ("string" == typeof e3) {
    e3 = e3.toLowerCase().trim();
    let t3 = we.short().indexOf(e3);
    -1 === t3 && (t3 = we.long().indexOf(e3)), -1 === t3 && (t3 = 1), this._weekStart = t3;
  } else
    console.warn("Spacetime Error: Cannot understand .weekStart() input:", e3);
  return this;
} };
rt.inDST = rt.isDST, rt.round = rt.nearest, rt.each = rt.every;
var ot = rt;
var it = E.isLeapYear;
var st = (e3) => ("string" == typeof e3 && (e3 = parseInt(e3, 10)), e3);
var ut = ["year", "month", "date", "hour", "minute", "second", "millisecond"];
var lt = (e3, t3, a2) => {
  let n3 = ut.indexOf(a2), r3 = ut.slice(n3, ut.length);
  for (let a3 = 0; a3 < r3.length; a3++) {
    let n4 = t3[r3[a3]]();
    e3[r3[a3]](n4);
  }
  return e3;
};
var ht = function(e3, t3, a2, n3) {
  return true === a2 && e3.isBefore(t3) ? e3 = e3.add(1, n3) : false === a2 && e3.isAfter(t3) && (e3 = e3.minus(1, n3)), e3;
};
var ct = { milliseconds: (e3, t3) => {
  t3 = st(t3);
  let a2 = e3.millisecond() - t3;
  return e3.epoch - a2;
}, seconds: (e3, t3, a2) => {
  t3 = st(t3);
  let n3 = e3.clone(), r3 = (e3.second() - t3) * $.second;
  return e3.epoch = e3.epoch - r3, (e3 = ht(e3, n3, a2, "minute")).epoch;
}, minutes: (e3, t3, a2) => {
  t3 = st(t3);
  let n3 = e3.clone(), r3 = (e3.minute() - t3) * $.minute;
  return e3.epoch -= r3, lt(e3, n3, "second"), (e3 = ht(e3, n3, a2, "hour")).epoch;
}, hours: (e3, t3, a2) => {
  (t3 = st(t3)) >= 24 ? t3 = 24 : t3 < 0 && (t3 = 0);
  let n3 = e3.clone(), r3 = e3.hour() - t3, o3 = r3 * $.hour;
  return e3.epoch -= o3, e3.date() !== n3.date() && (e3 = n3.clone(), r3 > 1 && (r3 -= 1), r3 < 1 && (r3 += 1), o3 = r3 * $.hour, e3.epoch -= o3), x(e3, { hour: t3 }), lt(e3, n3, "minute"), (e3 = ht(e3, n3, a2, "day")).epoch;
}, time: (e3, t3, a2) => {
  let n3 = t3.match(/([0-9]{1,2})[:h]([0-9]{1,2})(:[0-9]{1,2})? ?(am|pm)?/);
  if (!n3) {
    if (n3 = t3.match(/([0-9]{1,2}) ?(am|pm)/), !n3)
      return e3.epoch;
    n3.splice(2, 0, "0"), n3.splice(3, 0, "");
  }
  let r3 = false, o3 = parseInt(n3[1], 10), i3 = parseInt(n3[2], 10);
  i3 >= 60 && (i3 = 59), o3 > 12 && (r3 = true), false === r3 && ("am" === n3[4] && 12 === o3 && (o3 = 0), "pm" === n3[4] && o3 < 12 && (o3 += 12)), n3[3] = n3[3] || "", n3[3] = n3[3].replace(/:/, "");
  let s2 = parseInt(n3[3], 10) || 0, u2 = e3.clone();
  return e3 = (e3 = (e3 = (e3 = e3.hour(o3)).minute(i3)).second(s2)).millisecond(0), (e3 = ht(e3, u2, a2, "day")).epoch;
}, date: (e3, t3, a2) => {
  if ((t3 = st(t3)) > 28) {
    let a3 = e3.month(), n4 = T[a3];
    1 === a3 && 29 === t3 && it(e3.year()) && (n4 = 29), t3 > n4 && (t3 = n4);
  }
  t3 <= 0 && (t3 = 1);
  let n3 = e3.clone();
  return x(e3, { date: t3 }), (e3 = ht(e3, n3, a2, "month")).epoch;
}, month: (e3, t3, a2) => {
  "string" == typeof t3 && (t3 = N.mapping()[t3.toLowerCase()]), (t3 = st(t3)) >= 12 && (t3 = 11), t3 <= 0 && (t3 = 0);
  let n3 = e3.date();
  n3 > T[t3] && (n3 = T[t3]);
  let r3 = e3.clone();
  return x(e3, { month: t3, date: n3 }), (e3 = ht(e3, r3, a2, "year")).epoch;
}, year: (e3, t3) => ("string" == typeof t3 && /^'[0-9]{2}$/.test(t3) && (t3 = t3.replace(/'/, "").trim(), t3 = (t3 = Number(t3)) > 30 ? 1900 + t3 : 2e3 + t3), t3 = st(t3), x(e3, { year: t3 }), e3.epoch), week: (e3, t3, a2) => {
  let n3 = e3.clone();
  return t3 = st(t3), "december" === (e3 = (e3 = (e3 = e3.month(0)).date(1)).day("monday")).monthName() && e3.date() >= 28 && (e3 = e3.add(1, "week")), t3 -= 1, e3 = e3.add(t3, "weeks"), (e3 = ht(e3, n3, a2, "year")).epoch;
}, dayOfYear: (e3, t3, a2) => {
  t3 = st(t3);
  let n3 = e3.clone();
  return (t3 -= 1) <= 0 ? t3 = 0 : t3 >= 365 && (t3 = 364), e3 = (e3 = e3.startOf("year")).add(t3, "day"), lt(e3, n3, "hour"), (e3 = ht(e3, n3, a2, "year")).epoch;
} };
var dt = (e3) => e3 = (e3 = (e3 = e3.minute(0)).second(0)).millisecond(1);
var mt = { millisecond: function(e3) {
  if (void 0 !== e3) {
    let t3 = this.clone();
    return t3.epoch = ct.milliseconds(t3, e3), t3;
  }
  return this.d.getMilliseconds();
}, second: function(e3, t3) {
  if (void 0 !== e3) {
    let a2 = this.clone();
    return a2.epoch = ct.seconds(a2, e3, t3), a2;
  }
  return this.d.getSeconds();
}, minute: function(e3, t3) {
  if (void 0 !== e3) {
    let a2 = this.clone();
    return a2.epoch = ct.minutes(a2, e3, t3), a2;
  }
  return this.d.getMinutes();
}, hour: function(e3, t3) {
  let a2 = this.d;
  if (void 0 !== e3) {
    let a3 = this.clone();
    return a3.epoch = ct.hours(a3, e3, t3), a3;
  }
  return a2.getHours();
}, hourFloat: function(e3, t3) {
  if (void 0 !== e3) {
    let a3 = this.clone(), n4 = e3 % 1;
    n4 *= 60;
    let r4 = parseInt(e3, 10);
    return a3.epoch = ct.hours(a3, r4, t3), a3.epoch = ct.minutes(a3, n4, t3), a3;
  }
  let a2 = this.d, n3 = a2.getHours(), r3 = a2.getMinutes();
  return r3 /= 60, n3 + r3;
}, hour12: function(e3, t3) {
  let a2 = this.d;
  if (void 0 !== e3) {
    let a3 = this.clone(), n4 = (e3 = "" + e3).match(/^([0-9]+)(am|pm)$/);
    if (n4) {
      let e4 = parseInt(n4[1], 10);
      "pm" === n4[2] && (e4 += 12), a3.epoch = ct.hours(a3, e4, t3);
    }
    return a3;
  }
  let n3 = a2.getHours();
  return n3 > 12 && (n3 -= 12), 0 === n3 && (n3 = 12), n3;
}, time: function(e3, t3) {
  if (void 0 !== e3) {
    let a2 = this.clone();
    return e3 = e3.toLowerCase().trim(), a2.epoch = ct.time(a2, e3, t3), a2;
  }
  return `${this.h12()}:${E.zeroPad(this.minute())}${this.ampm()}`;
}, ampm: function(e3, t3) {
  let a2 = "am", n3 = this.hour();
  if (n3 >= 12 && (a2 = "pm"), "string" != typeof e3)
    return a2;
  let r3 = this.clone();
  return e3 = e3.toLowerCase().trim(), n3 >= 12 && "am" === e3 ? (n3 -= 12, r3.hour(n3, t3)) : n3 < 12 && "pm" === e3 ? (n3 += 12, r3.hour(n3, t3)) : r3;
}, dayTime: function(e3, t3) {
  if (void 0 !== e3) {
    const a3 = { morning: "7:00am", breakfast: "7:00am", noon: "12:00am", lunch: "12:00pm", afternoon: "2:00pm", evening: "6:00pm", dinner: "6:00pm", night: "11:00pm", midnight: "23:59pm" };
    let n3 = this.clone();
    return e3 = (e3 = e3 || "").toLowerCase(), true === a3.hasOwnProperty(e3) && (n3 = n3.time(a3[e3], t3)), n3;
  }
  let a2 = this.hour();
  return a2 < 6 ? "night" : a2 < 12 ? "morning" : a2 < 17 ? "afternoon" : a2 < 22 ? "evening" : "night";
}, iso: function(e3) {
  return void 0 !== e3 ? this.set(e3) : this.format("iso");
} };
var pt = { date: function(e3, t3) {
  if (void 0 !== e3) {
    let a2 = this.clone();
    return (e3 = parseInt(e3, 10)) && (a2.epoch = ct.date(a2, e3, t3)), a2;
  }
  return this.d.getDate();
}, day: function(e3, t3) {
  if (void 0 === e3)
    return this.d.getDay();
  let a2 = this.clone(), n3 = e3;
  "string" == typeof e3 && (e3 = e3.toLowerCase(), we.aliases.hasOwnProperty(e3) ? n3 = we.aliases[e3] : (n3 = we.short().indexOf(e3), -1 === n3 && (n3 = we.long().indexOf(e3))));
  let r3 = this.d.getDay() - n3;
  true === t3 && r3 > 0 && (r3 -= 7), false === t3 && r3 < 0 && (r3 += 7);
  let o3 = this.subtract(r3, "days");
  return x(o3, { hour: a2.hour(), minute: a2.minute(), second: a2.second() }), o3;
}, dayName: function(e3, t3) {
  if (void 0 === e3)
    return we.long()[this.day()];
  let a2 = this.clone();
  return a2 = a2.day(e3, t3), a2;
} };
var ft = { dayOfYear: function(e3, t3) {
  if (void 0 !== e3) {
    let a3 = this.clone();
    return a3.epoch = ct.dayOfYear(a3, e3, t3), a3;
  }
  let a2, n3 = 0, r3 = this.d.getMonth();
  for (let e4 = 1; e4 <= r3; e4++)
    a2 = /* @__PURE__ */ new Date(), a2.setDate(1), a2.setFullYear(this.d.getFullYear()), a2.setHours(1), a2.setMinutes(1), a2.setMonth(e4), a2.setHours(-2), n3 += a2.getDate();
  return n3 + this.d.getDate();
}, week: function(e3, t3) {
  if (void 0 !== e3) {
    let a3 = this.clone();
    return a3.epoch = ct.week(this, e3, t3), a3 = dt(a3), a3;
  }
  let a2 = this.clone();
  a2 = a2.month(0), a2 = a2.date(1), a2 = dt(a2), a2 = a2.day("monday"), "december" === a2.monthName() && a2.date() >= 28 && (a2 = a2.add(1, "week"));
  let n3 = 1;
  1 === a2.date() && (n3 = 0), a2 = a2.minus(1, "second");
  const r3 = this.epoch;
  if (a2.epoch > r3)
    return 1;
  let o3 = 0, i3 = 4 * this.month();
  for (a2.epoch += $.week * i3, o3 += i3; o3 <= 52; o3++) {
    if (a2.epoch > r3)
      return o3 + n3;
    a2 = a2.add(1, "week");
  }
  return 52;
}, month: function(e3, t3) {
  if (void 0 !== e3) {
    let a2 = this.clone();
    return a2.epoch = ct.month(a2, e3, t3), a2;
  }
  return this.d.getMonth();
}, monthName: function(e3, t3) {
  if (void 0 !== e3) {
    let a2 = this.clone();
    return a2 = a2.month(e3, t3), a2;
  }
  return N.long()[this.month()];
}, quarter: function(e3, t3) {
  if (void 0 !== e3 && ("string" == typeof e3 && (e3 = e3.replace(/^q/i, ""), e3 = parseInt(e3, 10)), He[e3])) {
    let a3 = this.clone(), n3 = He[e3][0];
    return a3 = a3.month(n3, t3), a3 = a3.date(1, t3), a3 = a3.startOf("day"), a3;
  }
  let a2 = this.d.getMonth();
  for (let e4 = 1; e4 < He.length; e4++)
    if (a2 < He[e4][0])
      return e4 - 1;
  return 4;
}, season: function(e3, t3) {
  let a2 = "north";
  if ("South" === this.hemisphere() && (a2 = "south"), void 0 !== e3) {
    let n4 = this.clone();
    for (let r3 = 0; r3 < Ze[a2].length; r3++)
      e3 === Ze[a2][r3][0] && (n4 = n4.month(Ze[a2][r3][1], t3), n4 = n4.date(1), n4 = n4.startOf("day"));
    return n4;
  }
  let n3 = this.d.getMonth();
  for (let e4 = 0; e4 < Ze[a2].length - 1; e4++)
    if (n3 >= Ze[a2][e4][1] && n3 < Ze[a2][e4 + 1][1])
      return Ze[a2][e4][0];
  return "winter";
}, year: function(e3) {
  if (void 0 !== e3) {
    let t3 = this.clone();
    return t3.epoch = ct.year(t3, e3), t3;
  }
  return this.d.getFullYear();
}, era: function(e3) {
  if (void 0 !== e3) {
    let t3 = this.clone();
    e3 = e3.toLowerCase();
    let a2 = t3.d.getFullYear();
    return "bc" === e3 && a2 > 0 && (t3.epoch = ct.year(t3, -1 * a2)), "ad" === e3 && a2 < 0 && (t3.epoch = ct.year(t3, -1 * a2)), t3;
  }
  return this.d.getFullYear() < 0 ? "BC" : "AD";
}, decade: function(e3) {
  if (void 0 !== e3) {
    if (!(e3 = (e3 = (e3 = String(e3)).replace(/([0-9])'?s$/, "$1")).replace(/([0-9])(th|rd|st|nd)/, "$1")))
      return console.warn("Spacetime: Invalid decade input"), this;
    2 === e3.length && /[0-9][0-9]/.test(e3) && (e3 = "19" + e3);
    let t3 = Number(e3);
    return isNaN(t3) ? this : (t3 = 10 * Math.floor(t3 / 10), this.year(t3));
  }
  return this.startOf("decade").year();
}, century: function(e3) {
  if (void 0 !== e3) {
    "string" == typeof e3 && (e3 = (e3 = (e3 = e3.replace(/([0-9])(th|rd|st|nd)/, "$1")).replace(/([0-9]+) ?(b\.?c\.?|a\.?d\.?)/i, (e4, t5, a2) => (a2.match(/b\.?c\.?/i) && (t5 = "-" + t5), t5))).replace(/c$/, ""));
    let t4 = Number(e3);
    return isNaN(e3) ? (console.warn("Spacetime: Invalid century input"), this) : (0 === t4 && (t4 = 1), t4 = t4 >= 0 ? 100 * (t4 - 1) : 100 * (t4 + 1), this.year(t4));
  }
  let t3 = this.startOf("century").year();
  return t3 = Math.floor(t3 / 100), t3 < 0 ? t3 - 1 : t3 + 1;
}, millenium: function(e3) {
  if (void 0 !== e3) {
    if ("string" == typeof e3 && (e3 = e3.replace(/([0-9])(th|rd|st|nd)/, "$1"), e3 = Number(e3), isNaN(e3)))
      return console.warn("Spacetime: Invalid millenium input"), this;
    e3 > 0 && (e3 -= 1);
    let t4 = 1e3 * e3;
    return 0 === t4 && (t4 = 1), this.year(t4);
  }
  let t3 = Math.floor(this.year() / 1e3);
  return t3 >= 0 && (t3 += 1), t3;
} };
var yt = Object.assign({}, mt, pt, ft);
yt.milliseconds = yt.millisecond, yt.seconds = yt.second, yt.minutes = yt.minute, yt.hours = yt.hour, yt.hour24 = yt.hour, yt.h12 = yt.hour12, yt.h24 = yt.hour24, yt.days = yt.day;
var gt = (e3) => {
  Object.keys(yt).forEach((t3) => {
    e3.prototype[t3] = yt[t3];
  });
};
var bt = E.isLeapYear;
var kt = function(e3, t3) {
  return 1 === e3 && bt(t3) ? 29 : T[e3];
};
var wt = { months: (e3, t3) => {
  if (e3.month > 0) {
    let a2 = parseInt(e3.month / 12, 10);
    e3.year = t3.year() + a2, e3.month = e3.month % 12;
  } else if (e3.month < 0) {
    let a2 = Math.floor(Math.abs(e3.month) / 13, 10);
    a2 = Math.abs(a2) + 1, e3.year = t3.year() - a2, e3.month = e3.month % 12, e3.month = e3.month + 12, 12 === e3.month && (e3.month = 0);
  }
  return e3;
}, days: (e3, t3, a2) => {
  let n3 = t3.year(), r3 = t3.month(), o3 = kt(r3, n3);
  for (; a2 > o3; )
    a2 -= o3, r3 += 1, r3 >= 12 && (r3 -= 12, n3 += 1), o3 = kt(r3, n3);
  return e3.month = r3, e3.date = a2, e3;
}, daysBack: (e3, t3, a2) => {
  e3.year = t3.year(), e3.month = t3.month();
  let n3 = t3.date();
  for (e3.date = n3 - Math.abs(a2); e3.date < 1; ) {
    e3.month -= 1, e3.month < 0 && (e3.month = 11, e3.year -= 1);
    let t4 = kt(e3.month, e3.year);
    e3.date += t4;
  }
  return e3;
} };
var vt = ["millisecond", "second", "minute", "hour", "date", "month"];
var zt = { second: vt.slice(0, 1), minute: vt.slice(0, 2), quarterhour: vt.slice(0, 2), hour: vt.slice(0, 3), date: vt.slice(0, 4), month: vt.slice(0, 4), quarter: vt.slice(0, 4), season: vt.slice(0, 4), year: vt, decade: vt, century: vt };
zt.week = zt.hour, zt.season = zt.date, zt.quarter = zt.date;
var _t = { year: true, quarter: true, season: true, month: true, week: true, date: true };
var jt = { month: true, quarter: true, season: true, year: true };
var Ot = (e3) => {
  e3.prototype.add = function(e4, t3) {
    let a2 = this.clone();
    if (!t3 || 0 === e4)
      return a2;
    let n3 = this.clone();
    if ("millisecond" === (t3 = E.normalize(t3)))
      return a2.epoch += e4, a2;
    "fortnight" === t3 && (e4 *= 2, t3 = "week"), $[t3] ? a2.epoch += $[t3] * e4 : "week" === t3 || "weekend" === t3 ? a2.epoch += $.day * (7 * e4) : "quarter" === t3 || "season" === t3 ? a2.epoch += $.month * (3 * e4) : "quarterhour" === t3 && (a2.epoch += 15 * $.minute * e4);
    let r3 = {};
    if (zt[t3] && zt[t3].forEach((e5) => {
      r3[e5] = n3[e5]();
    }), _t[t3]) {
      const e5 = n3.timezone().current.offset - a2.timezone().current.offset;
      a2.epoch += 3600 * e5 * 1e3;
    }
    if ("month" === t3 && (r3.month = n3.month() + e4, r3 = wt.months(r3, n3)), "week" === t3) {
      let t4 = n3.date() + 7 * e4;
      t4 <= 28 && t4 > 1 && (r3.date = t4);
    }
    if ("weekend" === t3 && "saturday" !== a2.dayName())
      a2 = a2.day("saturday", true);
    else if ("date" === t3) {
      if (e4 < 0)
        r3 = wt.daysBack(r3, n3, e4);
      else {
        let t4 = n3.date() + e4;
        r3 = wt.days(r3, n3, t4);
      }
      0 !== e4 && n3.isSame(a2, "day") && (r3.date = n3.date() + e4);
    } else if ("quarter" === t3) {
      if (r3.month = n3.month() + 3 * e4, r3.year = n3.year(), r3.month < 0) {
        let e5 = Math.floor(r3.month / 12), t4 = r3.month + 12 * Math.abs(e5);
        r3.month = t4, r3.year += e5;
      } else if (r3.month >= 12) {
        let e5 = Math.floor(r3.month / 12);
        r3.month = r3.month % 12, r3.year += e5;
      }
      r3.date = n3.date();
    } else if ("year" === t3) {
      let t4 = n3.year() + e4, r4 = a2.year();
      if (r4 < t4) {
        let t5 = Math.floor(e4 / 4) || 1;
        a2.epoch += Math.abs($.day * t5);
      } else if (r4 > t4) {
        let t5 = Math.floor(e4 / 4) || 1;
        a2.epoch += $.day * t5;
      }
    } else
      "decade" === t3 ? r3.year = a2.year() + 10 : "century" === t3 && (r3.year = a2.year() + 100);
    if (jt[t3]) {
      let e5 = T[r3.month];
      r3.date = n3.date(), r3.date > e5 && (r3.date = e5);
    }
    return Object.keys(r3).length > 1 && x(a2, r3), a2;
  }, e3.prototype.subtract = function(e4, t3) {
    return this.clone().add(-1 * e4, t3);
  }, e3.prototype.minus = e3.prototype.subtract, e3.prototype.plus = e3.prototype.add;
};
var $t = { millisecond: (e3) => e3.epoch, second: (e3) => [e3.year(), e3.month(), e3.date(), e3.hour(), e3.minute(), e3.second()].join("-"), minute: (e3) => [e3.year(), e3.month(), e3.date(), e3.hour(), e3.minute()].join("-"), hour: (e3) => [e3.year(), e3.month(), e3.date(), e3.hour()].join("-"), day: (e3) => [e3.year(), e3.month(), e3.date()].join("-"), week: (e3) => [e3.year(), e3.week()].join("-"), month: (e3) => [e3.year(), e3.month()].join("-"), quarter: (e3) => [e3.year(), e3.quarter()].join("-"), year: (e3) => e3.year() };
$t.date = $t.day;
var Dt = (e3) => {
  const t3 = { isAfter: function(e4) {
    e4 = E.beADate(e4, this);
    let t4 = E.getEpoch(e4);
    return null === t4 ? null : this.epoch > t4;
  }, isBefore: function(e4) {
    e4 = E.beADate(e4, this);
    let t4 = E.getEpoch(e4);
    return null === t4 ? null : this.epoch < t4;
  }, isEqual: function(e4) {
    e4 = E.beADate(e4, this);
    let t4 = E.getEpoch(e4);
    return null === t4 ? null : this.epoch === t4;
  }, isBetween: function(e4, t4, a2 = false) {
    e4 = E.beADate(e4, this), t4 = E.beADate(t4, this);
    let n3 = E.getEpoch(e4);
    if (null === n3)
      return null;
    let r3 = E.getEpoch(t4);
    return null === r3 ? null : a2 ? this.isBetween(e4, t4) || this.isEqual(e4) || this.isEqual(t4) : n3 < this.epoch && this.epoch < r3;
  } };
  Object.keys(t3).forEach((a2) => {
    e3.prototype[a2] = t3[a2];
  });
};
var Mt = (e3) => {
  const t3 = { i18n: (e4) => {
    E.isObject(e4.days) && we.set(e4.days), E.isObject(e4.months) && N.set(e4.months), E.isBoolean(e4.useTitleCase) && ve.set(e4.useTitleCase);
  } };
  Object.keys(t3).forEach((a2) => {
    e3.prototype[a2] = t3[a2];
  });
};
var Pt = a;
var St = ot;
var qt = gt;
var Tt = Ot;
var Et = (e3) => {
  e3.prototype.isSame = function(t3, a2, n3 = true) {
    let r3 = this;
    if (!a2)
      return null;
    if ("string" == typeof t3 && "object" == typeof a2) {
      let e4 = t3;
      t3 = a2, a2 = e4;
    }
    return "string" != typeof t3 && "number" != typeof t3 || (t3 = new e3(t3, this.timezone.name)), a2 = a2.replace(/s$/, ""), true === n3 && r3.tz !== t3.tz && ((t3 = t3.clone()).tz = r3.tz), $t[a2] ? $t[a2](r3) === $t[a2](t3) : null;
  };
};
var Nt = Dt;
var Ct = Mt;
var It = d;
var Yt = function(e3, t3, a2 = {}) {
  this.epoch = null, this.tz = Ge(t3, It), this.silent = a2.silent || true, this.british = a2.dmy || a2.british, this._weekStart = 1, void 0 !== a2.weekStart && (this._weekStart = a2.weekStart), this._today = {}, void 0 !== a2.today && (this._today = a2.today), Object.defineProperty(this, "d", { get: function() {
    let e4 = Pt(this), t4 = (new Date(this.epoch).getTimezoneOffset() || 0) + 60 * e4;
    t4 = 60 * t4 * 1e3;
    let a3 = this.epoch + t4;
    return new Date(a3);
  } }), Object.defineProperty(this, "timezones", { get: () => It, set: (e4) => (It = e4, e4) });
  let n3 = at(this, e3);
  this.epoch = n3.epoch;
};
Object.keys(St).forEach((e3) => {
  Yt.prototype[e3] = St[e3];
}), Yt.prototype.clone = function() {
  return new Yt(this.epoch, this.tz, { silent: this.silent, weekStart: this._weekStart, today: this._today, parsers: this.parsers });
}, Yt.prototype.toLocalDate = function() {
  return this.toNativeDate();
}, Yt.prototype.toNativeDate = function() {
  return new Date(this.epoch);
}, qt(Yt), Tt(Yt), Et(Yt), Nt(Yt), Ct(Yt);
var At = Yt;
var xt = (e3, t3) => {
  let a2 = new At(null), n3 = new At(null);
  a2 = a2.time(e3), n3 = t3 ? n3.time(t3) : a2.add(59, "minutes");
  let r3 = a2.hour(), o3 = n3.hour();
  return Object.keys(a2.timezones).filter((e4) => {
    if (-1 === e4.indexOf("/"))
      return false;
    let t4 = new At(null, e4), i3 = t4.hour();
    return i3 >= r3 && i3 <= o3 && (!(i3 === r3 && t4.minute() < a2.minute()) && !(i3 === o3 && t4.minute() > n3.minute()));
  });
};
var Lt = (e3, t3, a2) => new At(e3, t3, a2);
var Ft = function(e3) {
  let t3 = e3._today || {};
  return Object.keys(t3).forEach((a2) => {
    e3 = e3[a2](t3[a2]);
  }), e3;
};
Lt.now = (e3, t3) => {
  let a2 = new At((/* @__PURE__ */ new Date()).getTime(), e3, t3);
  return a2 = Ft(a2), a2;
}, Lt.today = (e3, t3) => {
  let a2 = new At((/* @__PURE__ */ new Date()).getTime(), e3, t3);
  return a2 = Ft(a2), a2.startOf("day");
}, Lt.tomorrow = (e3, t3) => {
  let a2 = new At((/* @__PURE__ */ new Date()).getTime(), e3, t3);
  return a2 = Ft(a2), a2.add(1, "day").startOf("day");
}, Lt.yesterday = (e3, t3) => {
  let a2 = new At((/* @__PURE__ */ new Date()).getTime(), e3, t3);
  return a2 = Ft(a2), a2.subtract(1, "day").startOf("day");
}, Lt.extend = function(e3 = {}) {
  return Object.keys(e3).forEach((t3) => {
    At.prototype[t3] = e3[t3];
  }), this;
}, Lt.timezones = function() {
  return new At().timezones;
}, Lt.max = function(e3, t3) {
  let a2 = new At(null, e3, t3);
  return a2.epoch = 864e13, a2;
}, Lt.min = function(e3, t3) {
  let a2 = new At(null, e3, t3);
  return a2.epoch = -864e13, a2;
}, Lt.whereIts = xt, Lt.version = "6.16.3", Lt.plugin = Lt.extend;
var Bt = Lt;

// node_modules/swr/dist/index.mjs
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react4 = __toESM(require_react(), 1);
function __awaiter(thisArg, _arguments, P2, generator) {
  function adopt(value) {
    return value instanceof P2 ? value : new P2(function(resolve) {
      resolve(value);
    });
  }
  return new (P2 || (P2 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e3) {
        reject(e3);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e3) {
        reject(e3);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _2 = { label: 0, sent: function() {
    if (t3[0] & 1)
      throw t3[1];
    return t3[1];
  }, trys: [], ops: [] }, f2, y2, t3, g2;
  return g2 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
    return this;
  }), g2;
  function verb(n3) {
    return function(v2) {
      return step([n3, v2]);
    };
  }
  function step(op) {
    if (f2)
      throw new TypeError("Generator is already executing.");
    while (_2)
      try {
        if (f2 = 1, y2 && (t3 = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t3 = y2["return"]) && t3.call(y2), 0) : y2.next) && !(t3 = t3.call(y2, op[1])).done)
          return t3;
        if (y2 = 0, t3)
          op = [op[0] & 2, t3.value];
        switch (op[0]) {
          case 0:
          case 1:
            t3 = op;
            break;
          case 4:
            _2.label++;
            return { value: op[1], done: false };
          case 5:
            _2.label++;
            y2 = op[1];
            op = [0];
            continue;
          case 7:
            op = _2.ops.pop();
            _2.trys.pop();
            continue;
          default:
            if (!(t3 = _2.trys, t3 = t3.length > 0 && t3[t3.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _2 = 0;
              continue;
            }
            if (op[0] === 3 && (!t3 || op[1] > t3[0] && op[1] < t3[3])) {
              _2.label = op[1];
              break;
            }
            if (op[0] === 6 && _2.label < t3[1]) {
              _2.label = t3[1];
              t3 = op;
              break;
            }
            if (t3 && _2.label < t3[2]) {
              _2.label = t3[2];
              _2.ops.push(op);
              break;
            }
            if (t3[2])
              _2.ops.pop();
            _2.trys.pop();
            continue;
        }
        op = body.call(thisArg, _2);
      } catch (e3) {
        op = [6, e3];
        y2 = 0;
      } finally {
        f2 = t3 = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
var noop = function() {
};
var UNDEFINED = (
  /*#__NOINLINE__*/
  noop()
);
var OBJECT = Object;
var isUndefined = function(v2) {
  return v2 === UNDEFINED;
};
var isFunction = function(v2) {
  return typeof v2 == "function";
};
var mergeObjects = function(a2, b2) {
  return OBJECT.assign({}, a2, b2);
};
var STR_UNDEFINED = "undefined";
var hasWindow = function() {
  return typeof window != STR_UNDEFINED;
};
var hasDocument = function() {
  return typeof document != STR_UNDEFINED;
};
var hasRequestAnimationFrame = function() {
  return hasWindow() && typeof window["requestAnimationFrame"] != STR_UNDEFINED;
};
var table = /* @__PURE__ */ new WeakMap();
var counter = 0;
var stableHash = function(arg) {
  var type = typeof arg;
  var constructor = arg && arg.constructor;
  var isDate = constructor == Date;
  var result;
  var index;
  if (OBJECT(arg) === arg && !isDate && constructor != RegExp) {
    result = table.get(arg);
    if (result)
      return result;
    result = ++counter + "~";
    table.set(arg, result);
    if (constructor == Array) {
      result = "@";
      for (index = 0; index < arg.length; index++) {
        result += stableHash(arg[index]) + ",";
      }
      table.set(arg, result);
    }
    if (constructor == OBJECT) {
      result = "#";
      var keys = OBJECT.keys(arg).sort();
      while (!isUndefined(index = keys.pop())) {
        if (!isUndefined(arg[index])) {
          result += index + ":" + stableHash(arg[index]) + ",";
        }
      }
      table.set(arg, result);
    }
  } else {
    result = isDate ? arg.toJSON() : type == "symbol" ? arg.toString() : type == "string" ? JSON.stringify(arg) : "" + arg;
  }
  return result;
};
var online = true;
var isOnline = function() {
  return online;
};
var hasWin = hasWindow();
var hasDoc = hasDocument();
var onWindowEvent = hasWin && window.addEventListener ? window.addEventListener.bind(window) : noop;
var onDocumentEvent = hasDoc ? document.addEventListener.bind(document) : noop;
var offWindowEvent = hasWin && window.removeEventListener ? window.removeEventListener.bind(window) : noop;
var offDocumentEvent = hasDoc ? document.removeEventListener.bind(document) : noop;
var isVisible = function() {
  var visibilityState = hasDoc && document.visibilityState;
  return isUndefined(visibilityState) || visibilityState !== "hidden";
};
var initFocus = function(callback) {
  onDocumentEvent("visibilitychange", callback);
  onWindowEvent("focus", callback);
  return function() {
    offDocumentEvent("visibilitychange", callback);
    offWindowEvent("focus", callback);
  };
};
var initReconnect = function(callback) {
  var onOnline = function() {
    online = true;
    callback();
  };
  var onOffline = function() {
    online = false;
  };
  onWindowEvent("online", onOnline);
  onWindowEvent("offline", onOffline);
  return function() {
    offWindowEvent("online", onOnline);
    offWindowEvent("offline", onOffline);
  };
};
var preset = {
  isOnline,
  isVisible
};
var defaultConfigOptions = {
  initFocus,
  initReconnect
};
var IS_SERVER = !hasWindow() || "Deno" in window;
var rAF = function(f2) {
  return hasRequestAnimationFrame() ? window["requestAnimationFrame"](f2) : setTimeout(f2, 1);
};
var useIsomorphicLayoutEffect = IS_SERVER ? import_react4.useEffect : import_react4.useLayoutEffect;
var navigatorConnection = typeof navigator !== "undefined" && navigator.connection;
var slowConnection = !IS_SERVER && navigatorConnection && (["slow-2g", "2g"].includes(navigatorConnection.effectiveType) || navigatorConnection.saveData);
var serialize = function(key) {
  if (isFunction(key)) {
    try {
      key = key();
    } catch (err) {
      key = "";
    }
  }
  var args = [].concat(key);
  key = typeof key == "string" ? key : (Array.isArray(key) ? key.length : key) ? stableHash(key) : "";
  var infoKey = key ? "$swr$" + key : "";
  return [key, args, infoKey];
};
var SWRGlobalState = /* @__PURE__ */ new WeakMap();
var FOCUS_EVENT = 0;
var RECONNECT_EVENT = 1;
var MUTATE_EVENT = 2;
var broadcastState = function(cache2, key, data, error, isValidating, revalidate, broadcast) {
  if (broadcast === void 0) {
    broadcast = true;
  }
  var _a2 = SWRGlobalState.get(cache2), EVENT_REVALIDATORS = _a2[0], STATE_UPDATERS = _a2[1], FETCH = _a2[3];
  var revalidators = EVENT_REVALIDATORS[key];
  var updaters = STATE_UPDATERS[key];
  if (broadcast && updaters) {
    for (var i3 = 0; i3 < updaters.length; ++i3) {
      updaters[i3](data, error, isValidating);
    }
  }
  if (revalidate) {
    delete FETCH[key];
    if (revalidators && revalidators[0]) {
      return revalidators[0](MUTATE_EVENT).then(function() {
        return cache2.get(key);
      });
    }
  }
  return cache2.get(key);
};
var __timestamp = 0;
var getTimestamp = function() {
  return ++__timestamp;
};
var internalMutate = function() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  return __awaiter(void 0, void 0, void 0, function() {
    var cache2, _key, _data, _opts, options, populateCache, revalidate, rollbackOnError, customOptimisticData, _a2, key, keyInfo, _b, MUTATION, data, error, beforeMutationTs, hasCustomOptimisticData, rollbackData, optimisticData, res;
    return __generator(this, function(_c) {
      switch (_c.label) {
        case 0:
          cache2 = args[0], _key = args[1], _data = args[2], _opts = args[3];
          options = typeof _opts === "boolean" ? { revalidate: _opts } : _opts || {};
          populateCache = isUndefined(options.populateCache) ? true : options.populateCache;
          revalidate = options.revalidate !== false;
          rollbackOnError = options.rollbackOnError !== false;
          customOptimisticData = options.optimisticData;
          _a2 = serialize(_key), key = _a2[0], keyInfo = _a2[2];
          if (!key)
            return [
              2
              /*return*/
            ];
          _b = SWRGlobalState.get(cache2), MUTATION = _b[2];
          if (args.length < 3) {
            return [2, broadcastState(cache2, key, cache2.get(key), UNDEFINED, UNDEFINED, revalidate, true)];
          }
          data = _data;
          beforeMutationTs = getTimestamp();
          MUTATION[key] = [beforeMutationTs, 0];
          hasCustomOptimisticData = !isUndefined(customOptimisticData);
          rollbackData = cache2.get(key);
          if (hasCustomOptimisticData) {
            optimisticData = isFunction(customOptimisticData) ? customOptimisticData(rollbackData) : customOptimisticData;
            cache2.set(key, optimisticData);
            broadcastState(cache2, key, optimisticData);
          }
          if (isFunction(data)) {
            try {
              data = data(cache2.get(key));
            } catch (err) {
              error = err;
            }
          }
          if (!(data && isFunction(data.then)))
            return [3, 2];
          return [
            4,
            data.catch(function(err) {
              error = err;
            })
            // Check if other mutations have occurred since we've started this mutation.
            // If there's a race we don't update cache or broadcast the change,
            // just return the data.
          ];
        case 1:
          data = _c.sent();
          if (beforeMutationTs !== MUTATION[key][0]) {
            if (error)
              throw error;
            return [2, data];
          } else if (error && hasCustomOptimisticData && rollbackOnError) {
            populateCache = true;
            data = rollbackData;
            cache2.set(key, rollbackData);
          }
          _c.label = 2;
        case 2:
          if (populateCache) {
            if (!error) {
              if (isFunction(populateCache)) {
                data = populateCache(data, rollbackData);
              }
              cache2.set(key, data);
            }
            cache2.set(keyInfo, mergeObjects(cache2.get(keyInfo), { error }));
          }
          MUTATION[key][1] = getTimestamp();
          return [
            4,
            broadcastState(cache2, key, data, error, UNDEFINED, revalidate, !!populateCache)
            // Throw error or return data
          ];
        case 3:
          res = _c.sent();
          if (error)
            throw error;
          return [2, populateCache ? res : data];
      }
    });
  });
};
var revalidateAllKeys = function(revalidators, type) {
  for (var key in revalidators) {
    if (revalidators[key][0])
      revalidators[key][0](type);
  }
};
var initCache = function(provider, options) {
  if (!SWRGlobalState.has(provider)) {
    var opts = mergeObjects(defaultConfigOptions, options);
    var EVENT_REVALIDATORS = {};
    var mutate2 = internalMutate.bind(UNDEFINED, provider);
    var unmount = noop;
    SWRGlobalState.set(provider, [EVENT_REVALIDATORS, {}, {}, {}, mutate2]);
    if (!IS_SERVER) {
      var releaseFocus_1 = opts.initFocus(setTimeout.bind(UNDEFINED, revalidateAllKeys.bind(UNDEFINED, EVENT_REVALIDATORS, FOCUS_EVENT)));
      var releaseReconnect_1 = opts.initReconnect(setTimeout.bind(UNDEFINED, revalidateAllKeys.bind(UNDEFINED, EVENT_REVALIDATORS, RECONNECT_EVENT)));
      unmount = function() {
        releaseFocus_1 && releaseFocus_1();
        releaseReconnect_1 && releaseReconnect_1();
        SWRGlobalState.delete(provider);
      };
    }
    return [provider, mutate2, unmount];
  }
  return [provider, SWRGlobalState.get(provider)[4]];
};
var onErrorRetry = function(_2, __, config2, revalidate, opts) {
  var maxRetryCount = config2.errorRetryCount;
  var currentRetryCount = opts.retryCount;
  var timeout = ~~((Math.random() + 0.5) * (1 << (currentRetryCount < 8 ? currentRetryCount : 8))) * config2.errorRetryInterval;
  if (!isUndefined(maxRetryCount) && currentRetryCount > maxRetryCount) {
    return;
  }
  setTimeout(revalidate, timeout, opts);
};
var _a = initCache(/* @__PURE__ */ new Map());
var cache = _a[0];
var mutate = _a[1];
var defaultConfig = mergeObjects(
  {
    // events
    onLoadingSlow: noop,
    onSuccess: noop,
    onError: noop,
    onErrorRetry,
    onDiscarded: noop,
    // switches
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    revalidateIfStale: true,
    shouldRetryOnError: true,
    // timeouts
    errorRetryInterval: slowConnection ? 1e4 : 5e3,
    focusThrottleInterval: 5 * 1e3,
    dedupingInterval: 2 * 1e3,
    loadingTimeout: slowConnection ? 5e3 : 3e3,
    // providers
    compare: function(currentData, newData) {
      return stableHash(currentData) == stableHash(newData);
    },
    isPaused: function() {
      return false;
    },
    cache,
    mutate,
    fallback: {}
  },
  // use web preset by default
  preset
);
var mergeConfigs = function(a2, b2) {
  var v2 = mergeObjects(a2, b2);
  if (b2) {
    var u1 = a2.use, f1 = a2.fallback;
    var u2 = b2.use, f2 = b2.fallback;
    if (u1 && u2) {
      v2.use = u1.concat(u2);
    }
    if (f1 && f2) {
      v2.fallback = mergeObjects(f1, f2);
    }
  }
  return v2;
};
var SWRConfigContext = (0, import_react4.createContext)({});
var SWRConfig$1 = function(props) {
  var value = props.value;
  var extendedConfig = mergeConfigs((0, import_react4.useContext)(SWRConfigContext), value);
  var provider = value && value.provider;
  var cacheContext = (0, import_react4.useState)(function() {
    return provider ? initCache(provider(extendedConfig.cache || cache), value) : UNDEFINED;
  })[0];
  if (cacheContext) {
    extendedConfig.cache = cacheContext[0];
    extendedConfig.mutate = cacheContext[1];
  }
  useIsomorphicLayoutEffect(function() {
    return cacheContext ? cacheContext[2] : UNDEFINED;
  }, []);
  return (0, import_react4.createElement)(SWRConfigContext.Provider, mergeObjects(props, {
    value: extendedConfig
  }));
};
var useStateWithDeps = function(state, unmountedRef) {
  var rerender = (0, import_react4.useState)({})[1];
  var stateRef = (0, import_react4.useRef)(state);
  var stateDependenciesRef = (0, import_react4.useRef)({
    data: false,
    error: false,
    isValidating: false
  });
  var setState = (0, import_react4.useCallback)(
    function(payload) {
      var shouldRerender = false;
      var currentState = stateRef.current;
      for (var _2 in payload) {
        var k2 = _2;
        if (currentState[k2] !== payload[k2]) {
          currentState[k2] = payload[k2];
          if (stateDependenciesRef.current[k2]) {
            shouldRerender = true;
          }
        }
      }
      if (shouldRerender && !unmountedRef.current) {
        rerender({});
      }
    },
    // config.suspense isn't allowed to change during the lifecycle
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  useIsomorphicLayoutEffect(function() {
    stateRef.current = state;
  });
  return [stateRef, stateDependenciesRef.current, setState];
};
var normalize = function(args) {
  return isFunction(args[1]) ? [args[0], args[1], args[2] || {}] : [args[0], null, (args[1] === null ? args[2] : args[1]) || {}];
};
var useSWRConfig = function() {
  return mergeObjects(defaultConfig, (0, import_react4.useContext)(SWRConfigContext));
};
var withArgs = function(hook) {
  return function useSWRArgs() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var fallbackConfig = useSWRConfig();
    var _a2 = normalize(args), key = _a2[0], fn = _a2[1], _config = _a2[2];
    var config2 = mergeConfigs(fallbackConfig, _config);
    var next = hook;
    var use = config2.use;
    if (use) {
      for (var i3 = use.length; i3-- > 0; ) {
        next = use[i3](next);
      }
    }
    return next(key, fn || config2.fetcher, config2);
  };
};
var subscribeCallback = function(key, callbacks, callback) {
  var keyedRevalidators = callbacks[key] || (callbacks[key] = []);
  keyedRevalidators.push(callback);
  return function() {
    var index = keyedRevalidators.indexOf(callback);
    if (index >= 0) {
      keyedRevalidators[index] = keyedRevalidators[keyedRevalidators.length - 1];
      keyedRevalidators.pop();
    }
  };
};
var WITH_DEDUPE = { dedupe: true };
var useSWRHandler = function(_key, fetcher2, config2) {
  var cache2 = config2.cache, compare = config2.compare, fallbackData = config2.fallbackData, suspense = config2.suspense, revalidateOnMount = config2.revalidateOnMount, refreshInterval = config2.refreshInterval, refreshWhenHidden = config2.refreshWhenHidden, refreshWhenOffline = config2.refreshWhenOffline;
  var _a2 = SWRGlobalState.get(cache2), EVENT_REVALIDATORS = _a2[0], STATE_UPDATERS = _a2[1], MUTATION = _a2[2], FETCH = _a2[3];
  var _b = serialize(_key), key = _b[0], fnArgs = _b[1], keyInfo = _b[2];
  var initialMountedRef = (0, import_react4.useRef)(false);
  var unmountedRef = (0, import_react4.useRef)(false);
  var keyRef = (0, import_react4.useRef)(key);
  var fetcherRef = (0, import_react4.useRef)(fetcher2);
  var configRef = (0, import_react4.useRef)(config2);
  var getConfig = function() {
    return configRef.current;
  };
  var isActive = function() {
    return getConfig().isVisible() && getConfig().isOnline();
  };
  var patchFetchInfo = function(info2) {
    return cache2.set(keyInfo, mergeObjects(cache2.get(keyInfo), info2));
  };
  var cached = cache2.get(key);
  var fallback = isUndefined(fallbackData) ? config2.fallback[key] : fallbackData;
  var data = isUndefined(cached) ? fallback : cached;
  var info = cache2.get(keyInfo) || {};
  var error = info.error;
  var isInitialMount = !initialMountedRef.current;
  var shouldRevalidate = function() {
    if (isInitialMount && !isUndefined(revalidateOnMount))
      return revalidateOnMount;
    if (getConfig().isPaused())
      return false;
    if (suspense)
      return isUndefined(data) ? false : config2.revalidateIfStale;
    return isUndefined(data) || config2.revalidateIfStale;
  };
  var resolveValidating = function() {
    if (!key || !fetcher2)
      return false;
    if (info.isValidating)
      return true;
    return isInitialMount && shouldRevalidate();
  };
  var isValidating = resolveValidating();
  var _c = useStateWithDeps({
    data,
    error,
    isValidating
  }, unmountedRef), stateRef = _c[0], stateDependencies = _c[1], setState = _c[2];
  var revalidate = (0, import_react4.useCallback)(
    function(revalidateOpts) {
      return __awaiter(void 0, void 0, void 0, function() {
        var currentFetcher, newData, startAt, loading, opts, shouldStartNewRequest, isCurrentKeyMounted, cleanupState, newState, finishRequestAndUpdateState, mutationInfo, err_1;
        var _a3;
        return __generator(this, function(_b2) {
          switch (_b2.label) {
            case 0:
              currentFetcher = fetcherRef.current;
              if (!key || !currentFetcher || unmountedRef.current || getConfig().isPaused()) {
                return [2, false];
              }
              loading = true;
              opts = revalidateOpts || {};
              shouldStartNewRequest = !FETCH[key] || !opts.dedupe;
              isCurrentKeyMounted = function() {
                return !unmountedRef.current && key === keyRef.current && initialMountedRef.current;
              };
              cleanupState = function() {
                var requestInfo = FETCH[key];
                if (requestInfo && requestInfo[1] === startAt) {
                  delete FETCH[key];
                }
              };
              newState = { isValidating: false };
              finishRequestAndUpdateState = function() {
                patchFetchInfo({ isValidating: false });
                if (isCurrentKeyMounted()) {
                  setState(newState);
                }
              };
              patchFetchInfo({
                isValidating: true
              });
              setState({ isValidating: true });
              _b2.label = 1;
            case 1:
              _b2.trys.push([1, 3, , 4]);
              if (shouldStartNewRequest) {
                broadcastState(cache2, key, stateRef.current.data, stateRef.current.error, true);
                if (config2.loadingTimeout && !cache2.get(key)) {
                  setTimeout(function() {
                    if (loading && isCurrentKeyMounted()) {
                      getConfig().onLoadingSlow(key, config2);
                    }
                  }, config2.loadingTimeout);
                }
                FETCH[key] = [currentFetcher.apply(void 0, fnArgs), getTimestamp()];
              }
              _a3 = FETCH[key], newData = _a3[0], startAt = _a3[1];
              return [4, newData];
            case 2:
              newData = _b2.sent();
              if (shouldStartNewRequest) {
                setTimeout(cleanupState, config2.dedupingInterval);
              }
              if (!FETCH[key] || FETCH[key][1] !== startAt) {
                if (shouldStartNewRequest) {
                  if (isCurrentKeyMounted()) {
                    getConfig().onDiscarded(key);
                  }
                }
                return [2, false];
              }
              patchFetchInfo({
                error: UNDEFINED
              });
              newState.error = UNDEFINED;
              mutationInfo = MUTATION[key];
              if (!isUndefined(mutationInfo) && // case 1
              (startAt <= mutationInfo[0] || // case 2
              startAt <= mutationInfo[1] || // case 3
              mutationInfo[1] === 0)) {
                finishRequestAndUpdateState();
                if (shouldStartNewRequest) {
                  if (isCurrentKeyMounted()) {
                    getConfig().onDiscarded(key);
                  }
                }
                return [2, false];
              }
              if (!compare(stateRef.current.data, newData)) {
                newState.data = newData;
              } else {
                newState.data = stateRef.current.data;
              }
              if (!compare(cache2.get(key), newData)) {
                cache2.set(key, newData);
              }
              if (shouldStartNewRequest) {
                if (isCurrentKeyMounted()) {
                  getConfig().onSuccess(newData, key, config2);
                }
              }
              return [3, 4];
            case 3:
              err_1 = _b2.sent();
              cleanupState();
              if (!getConfig().isPaused()) {
                patchFetchInfo({ error: err_1 });
                newState.error = err_1;
                if (shouldStartNewRequest && isCurrentKeyMounted()) {
                  getConfig().onError(err_1, key, config2);
                  if (typeof config2.shouldRetryOnError === "boolean" && config2.shouldRetryOnError || isFunction(config2.shouldRetryOnError) && config2.shouldRetryOnError(err_1)) {
                    if (isActive()) {
                      getConfig().onErrorRetry(err_1, key, config2, revalidate, {
                        retryCount: (opts.retryCount || 0) + 1,
                        dedupe: true
                      });
                    }
                  }
                }
              }
              return [3, 4];
            case 4:
              loading = false;
              finishRequestAndUpdateState();
              if (isCurrentKeyMounted() && shouldStartNewRequest) {
                broadcastState(cache2, key, newState.data, newState.error, false);
              }
              return [2, true];
          }
        });
      });
    },
    // `setState` is immutable, and `eventsCallback`, `fnArgs`, `keyInfo`,
    // and `keyValidating` are depending on `key`, so we can exclude them from
    // the deps array.
    //
    // FIXME:
    // `fn` and `config` might be changed during the lifecycle,
    // but they might be changed every render like this.
    // `useSWR('key', () => fetch('/api/'), { suspense: true })`
    // So we omit the values from the deps array
    // even though it might cause unexpected behaviors.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [key]
  );
  var boundMutate = (0, import_react4.useCallback)(
    // By using `bind` we don't need to modify the size of the rest arguments.
    // Due to https://github.com/microsoft/TypeScript/issues/37181, we have to
    // cast it to any for now.
    internalMutate.bind(UNDEFINED, cache2, function() {
      return keyRef.current;
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  useIsomorphicLayoutEffect(function() {
    fetcherRef.current = fetcher2;
    configRef.current = config2;
  });
  useIsomorphicLayoutEffect(function() {
    if (!key)
      return;
    var keyChanged = key !== keyRef.current;
    var softRevalidate = revalidate.bind(UNDEFINED, WITH_DEDUPE);
    var onStateUpdate = function(updatedData, updatedError, updatedIsValidating) {
      setState(mergeObjects(
        {
          error: updatedError,
          isValidating: updatedIsValidating
        },
        // Since `setState` only shallowly compares states, we do a deep
        // comparison here.
        compare(stateRef.current.data, updatedData) ? UNDEFINED : {
          data: updatedData
        }
      ));
    };
    var nextFocusRevalidatedAt = 0;
    var onRevalidate = function(type) {
      if (type == FOCUS_EVENT) {
        var now = Date.now();
        if (getConfig().revalidateOnFocus && now > nextFocusRevalidatedAt && isActive()) {
          nextFocusRevalidatedAt = now + getConfig().focusThrottleInterval;
          softRevalidate();
        }
      } else if (type == RECONNECT_EVENT) {
        if (getConfig().revalidateOnReconnect && isActive()) {
          softRevalidate();
        }
      } else if (type == MUTATE_EVENT) {
        return revalidate();
      }
      return;
    };
    var unsubUpdate = subscribeCallback(key, STATE_UPDATERS, onStateUpdate);
    var unsubEvents = subscribeCallback(key, EVENT_REVALIDATORS, onRevalidate);
    unmountedRef.current = false;
    keyRef.current = key;
    initialMountedRef.current = true;
    if (keyChanged) {
      setState({
        data,
        error,
        isValidating
      });
    }
    if (shouldRevalidate()) {
      if (isUndefined(data) || IS_SERVER) {
        softRevalidate();
      } else {
        rAF(softRevalidate);
      }
    }
    return function() {
      unmountedRef.current = true;
      unsubUpdate();
      unsubEvents();
    };
  }, [key, revalidate]);
  useIsomorphicLayoutEffect(function() {
    var timer;
    function next() {
      var interval = isFunction(refreshInterval) ? refreshInterval(data) : refreshInterval;
      if (interval && timer !== -1) {
        timer = setTimeout(execute, interval);
      }
    }
    function execute() {
      if (!stateRef.current.error && (refreshWhenHidden || getConfig().isVisible()) && (refreshWhenOffline || getConfig().isOnline())) {
        revalidate(WITH_DEDUPE).then(next);
      } else {
        next();
      }
    }
    next();
    return function() {
      if (timer) {
        clearTimeout(timer);
        timer = -1;
      }
    };
  }, [refreshInterval, refreshWhenHidden, refreshWhenOffline, revalidate]);
  (0, import_react4.useDebugValue)(data);
  if (suspense && isUndefined(data) && key) {
    fetcherRef.current = fetcher2;
    configRef.current = config2;
    unmountedRef.current = false;
    throw isUndefined(error) ? revalidate(WITH_DEDUPE) : error;
  }
  return {
    mutate: boundMutate,
    get data() {
      stateDependencies.data = true;
      return data;
    },
    get error() {
      stateDependencies.error = true;
      return error;
    },
    get isValidating() {
      stateDependencies.isValidating = true;
      return isValidating;
    }
  };
};
var SWRConfig = OBJECT.defineProperty(SWRConfig$1, "default", {
  value: defaultConfig
});
var useSWR = withArgs(useSWRHandler);

// node_modules/sanity-plugin-vercel-deploy/node_modules/@sanity/icons/dist/index.esm.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react5 = __toESM(require_react());
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var _excluded = ["symbol"];
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i3;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i3 = 0; i3 < sourceSymbolKeys.length; i3++) {
      key = sourceSymbolKeys[i3];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i3;
  for (i3 = 0; i3 < sourceKeys.length; i3++) {
    key = sourceKeys[i3];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
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
  for (var i3 = 1; i3 < arguments.length; i3++) {
    var source = null != arguments[i3] ? arguments[i3] : {};
    i3 % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var AccessDeniedIcon = (0, import_react5.forwardRef)(function AccessDeniedIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "access-denied",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M18.1569 6.84315C21.281 9.96734 21.281 15.0327 18.1569 18.1569C15.0327 21.281 9.96734 21.281 6.84314 18.1569C3.71895 15.0327 3.71895 9.96734 6.84314 6.84315C9.96734 3.71895 15.0327 3.71895 18.1569 6.84315ZM18.1569 6.84315L6.84401 18.156",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var ActivityIcon = (0, import_react5.forwardRef)(function ActivityIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "activity",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M21 15H19L15.5 7L11 18L8 12L6 15H4",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var AddCircleIcon = (0, import_react5.forwardRef)(function AddCircleIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "add-circle",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M8 12.4H17M12.5 8V17M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var AddIcon = (0, import_react5.forwardRef)(function AddIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "add",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M12.5 5V20M5 12.5H20",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var ApiIcon = (0, import_react5.forwardRef)(function ApiIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "api",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: [/* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M5.93047 13.2107L6.66782 10.3728H6.73089L7.45854 13.2107H5.93047ZM8.17164 16H9.66089L7.56041 9H5.93047L3.82999 16H5.20767L5.65396 14.2876H7.73505L8.17164 16Z",
      fill: "currentColor"
    }), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M10.5389 9V16H11.9166V13.7782H13.0323C14.541 13.7782 15.5015 12.8517 15.5015 11.3964C15.5015 9.92654 14.5701 9 13.1003 9H10.5389ZM11.9166 10.1303H12.751C13.6533 10.1303 14.1044 10.5475 14.1044 11.3867C14.1044 12.2308 13.6533 12.6431 12.751 12.6431H11.9166V10.1303Z",
      fill: "currentColor"
    }), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M21.1675 16V14.8164H19.717V10.1836H21.1675V9H16.8889V10.1836H18.3393V14.8164H16.8889V16H21.1675Z",
      fill: "currentColor"
    })]
  }));
});
var ArchiveIcon = (0, import_react5.forwardRef)(function ArchiveIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "archive",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: [/* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M16 14L12.5 17.5L9 14M4.5 7.5V20.5H20.5V7.5L18.5 4.5H6.5L4.5 7.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    }), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M12.5 10.5V17",
      stroke: "currentColor",
      strokeWidth: 1.2
    }), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M4.5 7.5H20.5",
      stroke: "currentColor",
      strokeWidth: 1.2
    })]
  }));
});
var ArrowDownIcon = (0, import_react5.forwardRef)(function ArrowDownIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "arrow-down",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M12.5 18.5V6M12.5 18.5L18 13M12.5 18.5L7 13",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var ArrowLeftIcon = (0, import_react5.forwardRef)(function ArrowLeftIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "arrow-left",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M12 18L6.5 12.5L12 7M6.5 12.5H19",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var ArrowRightIcon = (0, import_react5.forwardRef)(function ArrowRightIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "arrow-right",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M13 7L18.5 12.5L13 18M18.5 12.5H6",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var ArrowTopRightIcon = (0, import_react5.forwardRef)(function ArrowTopRightIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "arrow-top-right",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: [/* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M9 8.5H16.5V16",
      stroke: "currentColor",
      strokeWidth: 1.2
    }), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M16.5 8.5L7 18",
      stroke: "currentColor",
      strokeWidth: 1.2
    })]
  }));
});
var ArrowUpIcon = (0, import_react5.forwardRef)(function ArrowUpIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "arrow-up",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M12.5 6V18.5M7 11.5L12.5 6L18 11.5",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var BarChartIcon = (0, import_react5.forwardRef)(function BarChartIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "bar-chart",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M5.5 5V19.5H20M8.5 18V13M11.5 18V9M14.5 18V11M17.5 18V7",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var BasketIcon = (0, import_react5.forwardRef)(function BasketIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "basket",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: [/* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M8.5 10.5H5L6.5 19.5H18.5L20 10.5H16.5M8.5 10.5L10.2721 5.18377C10.4082 4.77543 10.7903 4.5 11.2208 4.5H13.7792C14.2097 4.5 14.5918 4.77543 14.7279 5.18377L16.5 10.5M8.5 10.5H16.5",
      stroke: "currentColor",
      strokeWidth: 1.2
    }), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M12.5 10.5V19.5",
      stroke: "currentColor",
      strokeWidth: 1.2
    }), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M9.5 19.5L8.5 10.5",
      stroke: "currentColor",
      strokeWidth: 1.2
    }), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M15.5 19.5L16.5 10.5",
      stroke: "currentColor",
      strokeWidth: 1.2
    }), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M19.5 13.5H5.5",
      stroke: "currentColor",
      strokeWidth: 1.2
    }), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M19 16.5H6",
      stroke: "currentColor",
      strokeWidth: 1.2
    })]
  }));
});
var BellIcon = (0, import_react5.forwardRef)(function BellIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "bell",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M10.5 17.5V18.5C10.5 20 11.5 20.5 12.5 20.5C13.5 20.5 14.5 20 14.5 18.5V17.5M5.5 17C6.5 15.5 6.5 15 6.5 12C6.5 8 8.5 5.5 12.5 5.5C16.5 5.5 18.5 8 18.5 12C18.5 15 18.5 15.5 19.5 17V17.5H5.5V17Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var BillIcon = (0, import_react5.forwardRef)(function BillIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "bill",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M6.50001 5.5C8.50003 5.5 8.50003 8 8.50003 8V9.5M6.50001 5.5C4.5 5.5 4.5 8 4.5 8L4.50001 9.5H8.50003M6.50001 5.5C6.50001 5.5 15.8333 5.5 17.6667 5.5C19.5 5.5 19.5 8.5 19.5 8.5V20L17.6667 19L15.8333 20L14 19L12.1667 20L10.3334 19L8.50003 20V9.5M11 12.5H15M11 9.5H16M11 15.5H16",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var BinaryDocumentIcon = (0, import_react5.forwardRef)(function BinaryDocumentIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "binary-document",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: [/* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M9.5 11.5V16.5M10.5 4.5H18.5V20.5H6.5V8.5L10.5 4.5ZM12.5 11.5V16.5H15.5V11.5H12.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinecap: "square"
    }), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M10.5 4.5V8.5H6.5",
      stroke: "currentColor",
      strokeWidth: 1.2
    })]
  }));
});
var BlockElementIcon = (0, import_react5.forwardRef)(function BlockElementIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "block-element",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M6.5 8.5V7.9H5.9V8.5H6.5ZM18.5 8.5H19.1V7.9H18.5V8.5ZM6.5 16.5H5.9V17.1H6.5V16.5ZM18.5 16.5V17.1H19.1V16.5H18.5ZM6.5 9.1H18.5V7.9H6.5V9.1ZM7.1 16.5V8.5H5.9V16.5H7.1ZM18.5 15.9H6.5V17.1H18.5V15.9ZM17.9 8.5V16.5H19.1V8.5H17.9ZM5 20.1H20V18.9H5V20.1ZM5 6.1H20V4.9H5V6.1Z",
      fill: "currentColor"
    })
  }));
});
var BlockquoteIcon = (0, import_react5.forwardRef)(function BlockquoteIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "blockquote",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M10 17.5H19M6 7.5H19M10 12.5H17M6.5 12V18",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var BoldIcon = (0, import_react5.forwardRef)(function BoldIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "bold",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M13.2087 18C15.5322 18 16.9731 16.793 16.9731 14.8844C16.9731 13.4812 15.9245 12.3949 14.4836 12.2892V12.1534C15.6001 11.9875 16.4526 10.9841 16.4526 9.82991C16.4526 8.14761 15.1927 7.11409 13.0804 7.11409H8.32019V18H13.2087ZM10.5985 8.85674H12.4995C13.5859 8.85674 14.212 9.37727 14.212 10.2448C14.212 11.1199 13.5406 11.6254 12.3109 11.6254H10.5985V8.85674ZM10.5985 16.2574V13.1643H12.575C13.9178 13.1643 14.6496 13.6924 14.6496 14.6882C14.6496 15.7066 13.9404 16.2574 12.6278 16.2574H10.5985Z",
      fill: "currentColor"
    })
  }));
});
var BookIcon = (0, import_react5.forwardRef)(function BookIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "book",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M12.5 18.5L4.5 19.5V18.5M12.5 18.5L20.5 19.5V18.5M12.5 18.5V6.5M12.5 18.5H4.5M12.5 18.5H20.5M4.5 18.5V17.5M20.5 18.5V17.5M4.5 5.5V17.5L12.5 18.5L20.5 17.5V5.5L12.5 6.5L4.5 5.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var BottleIcon = (0, import_react5.forwardRef)(function BottleIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "bottle",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M7.5 17.5L17.5 17.5M17.5 13C17.5 12.087 17.5 11.3518 17.5 11C17.5 8.5 14.5 9 14.5 7.37494L14.5 5.5M17.5 13C17.5 15.1229 17.5 18.7543 17.5 20.5022C17.5 21.0545 17.0523 21.5 16.5 21.5L8.5 21.5C7.94771 21.5 7.5 21.0547 7.5 20.5024C7.5 18.8157 7.5 15.3546 7.5 13M17.5 13L7.5 13M7.5 13C7.5 12.2538 7.5 11.5648 7.5 11C7.5 8.5 10.5 9 10.5 7.37494L10.5 5.5M10.5 5.5L10.5 3.99999C10.5 3.72385 10.7239 3.49999 11 3.49999L14 3.49999C14.2761 3.49999 14.5 3.72385 14.5 3.99999L14.5 5.5M10.5 5.5L14.5 5.5",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var BulbFilledIcon = (0, import_react5.forwardRef)(function BulbFilledIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "bulb-filled",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: [/* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M16.4272 14.3368C15.8273 15.1773 15.5 16.1794 15.5 17.212V18.5C15.5 19.0523 15.0523 19.5 14.5 19.5H14V20.5C14 21.0523 13.5523 21.5 13 21.5H12C11.4477 21.5 11 21.0523 11 20.5V19.5H10.5C9.94772 19.5 9.5 19.0523 9.5 18.5V17.212C9.5 16.1794 9.17266 15.1773 8.57284 14.3368C7.60216 12.9767 7 11.94 7 10C7 7 9.5 4.5 12.5 4.5C15.5 4.5 18 7 18 10C18 11.94 17.3978 12.9767 16.4272 14.3368Z",
      fill: "currentColor"
    }), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M16.4272 14.3368L15.9388 13.9883L16.4272 14.3368ZM14 19.5V18.9H13.4V19.5H14ZM11 19.5H11.6V18.9H11V19.5ZM8.57284 14.3368L9.06122 13.9883H9.06122L8.57284 14.3368ZM16.1 17.212C16.1 16.3069 16.3868 15.4261 16.9155 14.6853L15.9388 13.9883C15.2678 14.9284 14.9 16.0519 14.9 17.212H16.1ZM16.1 18.5V17.212H14.9V18.5H16.1ZM14.5 20.1C15.3837 20.1 16.1 19.3837 16.1 18.5H14.9C14.9 18.7209 14.7209 18.9 14.5 18.9V20.1ZM14 20.1H14.5V18.9H14V20.1ZM13.4 19.5V20.5H14.6V19.5H13.4ZM13.4 20.5C13.4 20.7209 13.2209 20.9 13 20.9V22.1C13.8837 22.1 14.6 21.3837 14.6 20.5H13.4ZM13 20.9H12V22.1H13V20.9ZM12 20.9C11.7791 20.9 11.6 20.7209 11.6 20.5H10.4C10.4 21.3837 11.1163 22.1 12 22.1V20.9ZM11.6 20.5V19.5H10.4V20.5H11.6ZM10.5 20.1H11V18.9H10.5V20.1ZM8.9 18.5C8.9 19.3837 9.61634 20.1 10.5 20.1V18.9C10.2791 18.9 10.1 18.7209 10.1 18.5H8.9ZM8.9 17.212V18.5H10.1V17.212H8.9ZM8.08446 14.6853C8.61315 15.4261 8.9 16.3069 8.9 17.212H10.1C10.1 16.0519 9.73217 14.9284 9.06122 13.9883L8.08446 14.6853ZM6.4 10C6.4 11.0377 6.56208 11.8595 6.86624 12.611C7.16624 13.3521 7.59495 13.9995 8.08446 14.6853L9.06122 13.9883C8.58004 13.314 8.22233 12.7629 7.97858 12.1607C7.739 11.5688 7.6 10.9023 7.6 10H6.4ZM12.5 3.9C9.16863 3.9 6.4 6.66863 6.4 10H7.6C7.6 7.33137 9.83137 5.1 12.5 5.1V3.9ZM18.6 10C18.6 6.66863 15.8314 3.9 12.5 3.9V5.1C15.1686 5.1 17.4 7.33137 17.4 10H18.6ZM16.9155 14.6853C17.4051 13.9995 17.8338 13.3521 18.1338 12.611C18.4379 11.8595 18.6 11.0377 18.6 10H17.4C17.4 10.9023 17.261 11.5688 17.0214 12.1607C16.7777 12.7629 16.42 13.314 15.9388 13.9883L16.9155 14.6853Z",
      fill: "currentColor"
    })]
  }));
});
var BulbOutlineIcon = (0, import_react5.forwardRef)(function BulbOutlineIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "bulb-outline",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M9.5 16.5H15.5M11 20V20.5C11 21.0523 11.4477 21.5 12 21.5H13C13.5523 21.5 14 21.0523 14 20.5V20M18 10C18 11.94 17.3978 12.9767 16.4272 14.3368C15.8273 15.1773 15.5 16.1794 15.5 17.212V18.5C15.5 19.0523 15.0523 19.5 14.5 19.5H10.5C9.94772 19.5 9.5 19.0523 9.5 18.5V17.212C9.5 16.1794 9.17266 15.1773 8.57284 14.3368C7.60216 12.9767 7 11.94 7 10C7 7 9.5 4.5 12.5 4.5C15.5 4.5 18 7 18 10Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var CalendarIcon = (0, import_react5.forwardRef)(function CalendarIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "calendar",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M4.5 10.5V19.5H20.5V10.5M4.5 10.5V5.5H20.5V10.5M4.5 10.5H12.5H20.5M20.5 13.5H16.5M16.5 13.5H12.5M16.5 13.5V10.5M16.5 13.5V16.5M12.5 13.5H8.5M12.5 13.5V16.5M12.5 13.5V10.5M8.5 13.5H4.5M8.5 13.5V10.5M8.5 13.5V16.5M20.5 16.5H16.5M16.5 16.5H12.5M16.5 16.5V19.5M12.5 16.5H8.5M12.5 16.5V19.5M8.5 16.5H4.5M8.5 16.5V19.5M17.5 8V3M7.5 8V3",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var CaseIcon = (0, import_react5.forwardRef)(function CaseIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "case",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M9 8.5122V6C9 5.44772 9.44772 5 10 5H15C15.5523 5 16 5.44772 16 6V8.5122M4.5 12V18.5C4.5 19.0523 4.94772 19.5 5.5 19.5H19.5C20.0523 19.5 20.5 19.0523 20.5 18.5V12M4.5 12V9.5122C4.5 8.95991 4.94772 8.5122 5.5 8.5122H19.5C20.0523 8.5122 20.5 8.95991 20.5 9.5122V12M4.5 12L11.7978 14.7367C12.2505 14.9064 12.7495 14.9064 13.2022 14.7367L20.5 12",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var ChartUpwardIcon = (0, import_react5.forwardRef)(function ChartUpwardIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "chart-upward",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M5.5 5V19.5H20M7.5 16L11.5 11.5L15.5 14L19.5 8.5",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var CheckmarkCircleIcon = (0, import_react5.forwardRef)(function CheckmarkCircleIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "checkmark-circle",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M9.5 12.1316L11.7414 14.5L16 10M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var CheckmarkIcon = (0, import_react5.forwardRef)(function CheckmarkIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "checkmark",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M5.5 11.5L10.5 16.5L19.5 7.60001",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var ChevronDownIcon = (0, import_react5.forwardRef)(function ChevronDownIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "chevron-down",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M17 10.5L12.5 15L8 10.5",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var ChevronLeftIcon = (0, import_react5.forwardRef)(function ChevronLeftIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "chevron-left",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M14.5 17L10 12.5L14.5 8",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var ChevronRightIcon = (0, import_react5.forwardRef)(function ChevronRightIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "chevron-right",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M10.5 8L15 12.5L10.5 17",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var ChevronUpIcon = (0, import_react5.forwardRef)(function ChevronUpIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "chevron-up",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M8 14.5L12.5 10L17 14.5",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var CircleIcon = (0, import_react5.forwardRef)(function CircleIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "circle",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("circle", {
      cx: 12.5,
      cy: 12.5,
      r: 8,
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var ClipboardIcon = (0, import_react5.forwardRef)(function ClipboardIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "clipboard",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M8 5.5H6.5V19.5H18.5V5.5H17M12.5 3C11.5 3 11.5 4.5 11 4.5C10 4.5 9.5 5 9.5 6.5H15.6C15.6 5 15 4.5 14 4.5C13.5 4.5 13.5 3 12.5 3Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var ClipboardImageIcon = (0, import_react5.forwardRef)(function ClipboardImageIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "clipboard-image",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M8 5.5H6.5V19.5H10.5M17 5.5H18.5V11.5M10.5 18.5L12.73 15.8983C13.1327 15.4285 13.8613 15.4335 14.2575 15.909L15.299 17.1588C15.6754 17.6105 16.3585 17.6415 16.7743 17.2257L16.9903 17.0097C17.2947 16.7053 17.7597 16.6298 18.1447 16.8223L20.5 18M10.5 11.5H20.5V21.5H10.5V11.5ZM12.5 3C11.5 3 11.5 4.5 11 4.5C10 4.5 9.5 5 9.5 6.5H15.6C15.6 5 15 4.5 14 4.5C13.5 4.5 13.5 3 12.5 3Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var ClockIcon = (0, import_react5.forwardRef)(function ClockIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "clock",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M12.5 8V12.5L15.5 15.5M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var CloseCircleIcon = (0, import_react5.forwardRef)(function CloseCircleIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "close-circle",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M9.5 15.5L12.5 12.5M12.5 12.5L15.5 9.5M12.5 12.5L9.5 9.5M12.5 12.5L15.5 15.5M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var CloseIcon = (0, import_react5.forwardRef)(function CloseIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "close",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M18 7L7 18M7 7L18 18",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var CodeBlockIcon = (0, import_react5.forwardRef)(function CodeBlockIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "code-block",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M11 15L8.5 12.5L11 10M14 10L16.5 12.5L14 15M5.5 6.5H19.5V18.5H5.5V6.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var CodeIcon = (0, import_react5.forwardRef)(function CodeIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "code",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M7.5 12.5L7.07574 12.0757L6.65147 12.5L7.07574 12.9243L7.5 12.5ZM17.5 12.5L17.9243 12.9243L18.3485 12.5L17.9243 12.0757L17.5 12.5ZM11.4243 15.5757L7.92426 12.0757L7.07574 12.9243L10.5757 16.4243L11.4243 15.5757ZM7.92426 12.9243L11.4243 9.42426L10.5757 8.57574L7.07574 12.0757L7.92426 12.9243ZM13.5757 9.42426L17.0757 12.9243L17.9243 12.0757L14.4243 8.57574L13.5757 9.42426ZM17.0757 12.0757L13.5757 15.5757L14.4243 16.4243L17.9243 12.9243L17.0757 12.0757Z",
      fill: "currentColor"
    })
  }));
});
var CogIcon = (0, import_react5.forwardRef)(function CogIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "cog",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: [/* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M14.2624 5.40607L13.8714 4.42848C13.6471 3.86771 13.104 3.5 12.5 3.5C11.896 3.5 11.3529 3.86771 11.1286 4.42848L10.7376 5.40607C10.5857 5.78585 10.2869 6.08826 9.90901 6.2448C9.53111 6.40133 9.10603 6.39874 8.73006 6.23761L7.76229 5.82285C7.20716 5.58494 6.56311 5.70897 6.13604 6.13604C5.70897 6.56311 5.58494 7.20716 5.82285 7.76229L6.23761 8.73006C6.39874 9.10602 6.40133 9.53111 6.2448 9.90901C6.08826 10.2869 5.78585 10.5857 5.40607 10.7376L4.42848 11.1286C3.86771 11.3529 3.5 11.896 3.5 12.5C3.5 13.104 3.86771 13.6471 4.42848 13.8714L5.40607 14.2624C5.78585 14.4143 6.08826 14.7131 6.2448 15.091C6.40133 15.4689 6.39874 15.894 6.23761 16.2699L5.82285 17.2377C5.58494 17.7928 5.70897 18.4369 6.13604 18.864C6.56311 19.291 7.20716 19.4151 7.76229 19.1772L8.73006 18.7624C9.10603 18.6013 9.53111 18.5987 9.90901 18.7552C10.2869 18.9117 10.5857 19.2141 10.7376 19.5939L11.1286 20.5715C11.3529 21.1323 11.896 21.5 12.5 21.5C13.104 21.5 13.6471 21.1323 13.8714 20.5715L14.2624 19.5939C14.4143 19.2141 14.7131 18.9117 15.091 18.7552C15.4689 18.5987 15.894 18.6013 16.2699 18.7624L17.2377 19.1771C17.7928 19.4151 18.4369 19.291 18.864 18.864C19.291 18.4369 19.4151 17.7928 19.1771 17.2377L18.7624 16.2699C18.6013 15.894 18.5987 15.4689 18.7552 15.091C18.9117 14.7131 19.2141 14.4143 19.5939 14.2624L20.5715 13.8714C21.1323 13.6471 21.5 13.104 21.5 12.5C21.5 11.896 21.1323 11.3529 20.5715 11.1286L19.5939 10.7376C19.2141 10.5857 18.9117 10.2869 18.7552 9.90901C18.5987 9.53111 18.6013 9.10602 18.7624 8.73006L19.1772 7.76229C19.4151 7.20716 19.291 6.56311 18.864 6.13604C18.4369 5.70897 17.7928 5.58494 17.2377 5.82285L16.2699 6.23761C15.894 6.39874 15.4689 6.40133 15.091 6.2448C14.7131 6.08826 14.4143 5.78585 14.2624 5.40607Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    }), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M16.5 12.5C16.5 14.7091 14.7091 16.5 12.5 16.5C10.2909 16.5 8.5 14.7091 8.5 12.5C8.5 10.2909 10.2909 8.5 12.5 8.5C14.7091 8.5 16.5 10.2909 16.5 12.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    })]
  }));
});
var CollapseIcon = (0, import_react5.forwardRef)(function CollapseIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "collapse",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: [/* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M6 14.5L10.5 14.5V19M19 10.5H14.5L14.5 6",
      stroke: "currentColor",
      strokeWidth: 1.2
    }), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M10.5 14.5L6 19",
      stroke: "currentColor",
      strokeWidth: 1.2
    }), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M14.5 10.5L19 6",
      stroke: "currentColor",
      strokeWidth: 1.2
    })]
  }));
});
var CommentIcon = (0, import_react5.forwardRef)(function CommentIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "comment",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M7.5 16.5H9.5V20.5L13.5 16.5H17.5C18.6046 16.5 19.5 15.6046 19.5 14.5V8.5C19.5 7.39543 18.6046 6.5 17.5 6.5H7.5C6.39543 6.5 5.5 7.39543 5.5 8.5V14.5C5.5 15.6046 6.39543 16.5 7.5 16.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var ComponentIcon = (0, import_react5.forwardRef)(function ComponentIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "component",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M8.5 8.5L12.5 12.5M12.5 12.5L16.5 16.5M12.5 12.5L16.5 8.5M12.5 12.5L8.5 16.5M12.5 4L21 12.5L12.5 21L4 12.5L12.5 4Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var ComposeIcon2 = (0, import_react5.forwardRef)(function ComposeIcon22(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "compose",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M17 6L19 8M14 5.5H5.5V19.5H19.5V11M9 16L9.5 13.5L19 4L21 6L11.5 15.5L9 16Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var ControlsIcon = (0, import_react5.forwardRef)(function ControlsIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "controls",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M6.5 5V7.5M6.5 7.5C5.39543 7.5 4.5 8.39543 4.5 9.5C4.5 10.6046 5.39543 11.5 6.5 11.5M6.5 7.5C7.60457 7.5 8.5 8.39543 8.5 9.5C8.5 10.6046 7.60457 11.5 6.5 11.5M6.5 11.5V20M12.5 5V13.5M12.5 13.5C11.3954 13.5 10.5 14.3954 10.5 15.5C10.5 16.6046 11.3954 17.5 12.5 17.5M12.5 13.5C13.6046 13.5 14.5 14.3954 14.5 15.5C14.5 16.6046 13.6046 17.5 12.5 17.5M12.5 17.5V20M18.5 5V7.5M18.5 7.5C17.3954 7.5 16.5 8.39543 16.5 9.5C16.5 10.6046 17.3954 11.5 18.5 11.5M18.5 7.5C19.6046 7.5 20.5 8.39543 20.5 9.5C20.5 10.6046 19.6046 11.5 18.5 11.5M18.5 11.5V20",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var CopyIcon2 = (0, import_react5.forwardRef)(function CopyIcon22(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "copy",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M8.5 8.5H5.5V20.5H16.5V16.5M19.5 4.5H8.5V16.5H19.5V4.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var CreditCardIcon = (0, import_react5.forwardRef)(function CreditCardIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "credit-card",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M4.5 10.5H20.5M4.5 9.5H20.5M4.5 11.5H20.5M7 15.5H14M5.5 18.5H19.5C20.0523 18.5 20.5 18.0523 20.5 17.5V7.5C20.5 6.94772 20.0523 6.5 19.5 6.5H5.5C4.94772 6.5 4.5 6.94772 4.5 7.5V17.5C4.5 18.0523 4.94772 18.5 5.5 18.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var CropIcon = (0, import_react5.forwardRef)(function CropIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "crop",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M8.5 4V16.5H21M4 8.5H16.5V21",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var DashboardIcon = (0, import_react5.forwardRef)(function DashboardIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "dashboard",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M14.5 19.5V12.5M10.5 12.5V5.5M5.5 12.5H19.5M5.5 19.5H19.5V5.5H5.5V19.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var DatabaseIcon = (0, import_react5.forwardRef)(function DatabaseIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "database",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M18.5 7V17.5C18.5 19.0594 16.0504 20.5 12.5 20.5C8.9496 20.5 6.5 19.0594 6.5 17.5V7M18.5 7C18.5 8.45543 15.8137 9.5 12.5 9.5C9.18629 9.5 6.5 8.45543 6.5 7C6.5 5.54457 9.18629 4.5 12.5 4.5C15.8137 4.5 18.5 5.54457 18.5 7Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var DesktopIcon = (0, import_react5.forwardRef)(function DesktopIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "desktop",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M4.5 14.5V16.5C4.5 17.0523 4.94772 17.5 5.5 17.5H12.5M4.5 14.5V6.5C4.5 5.94772 4.94772 5.5 5.5 5.5H19.5C20.0523 5.5 20.5 5.94772 20.5 6.5V14.5M4.5 14.5H20.5M20.5 14.5V16.5C20.5 17.0523 20.0523 17.5 19.5 17.5H12.5M12.5 17.5V20.5M12.5 20.5H8M12.5 20.5H17",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var DocumentIcon = (0, import_react5.forwardRef)(function DocumentIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "document",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M10.5 4.5V8.5H6.5M10.5 4.5H18.5V20.5H6.5V8.5L10.5 4.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var DocumentPdfIcon = (0, import_react5.forwardRef)(function DocumentPdfIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "document-pdf",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: [/* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M10.5 4.5V8.5H6.5M10.5 4.5H18.5V20.5H6.5V8.5L10.5 4.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    }), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M12.7414 13.14L12.749 13.1046C12.896 12.4991 13.0809 11.7442 12.9365 11.0602C12.8402 10.5206 12.4425 10.3104 12.1031 10.2952C11.7028 10.2775 11.3456 10.5054 11.2569 10.8373C11.0897 11.4453 11.2392 12.2762 11.5128 13.3351C11.1683 14.1559 10.6186 15.3491 10.2158 16.0584C9.46592 16.446 8.46022 17.0438 8.31075 17.7987C8.28036 17.9381 8.31582 18.1154 8.39942 18.275C8.49315 18.4523 8.64261 18.5891 8.81741 18.655C8.89341 18.6828 8.9846 18.7056 9.091 18.7056C9.53686 18.7056 10.2588 18.3459 11.2215 16.6942C11.3684 16.6461 11.5204 16.5954 11.6673 16.5448C12.3564 16.3117 13.0708 16.0685 13.7167 15.9596C14.4311 16.3421 15.2443 16.5878 15.7966 16.5878C16.3437 16.5878 16.5591 16.2636 16.6401 16.0685C16.782 15.7265 16.7136 15.2959 16.4831 15.0653C16.1487 14.736 15.3355 14.6499 14.0689 14.8069C13.4457 14.4269 13.0378 13.9102 12.7414 13.14ZM9.96245 16.9881C9.61032 17.4998 9.34433 17.7557 9.19993 17.8671C9.36966 17.5555 9.70152 17.2262 9.96245 16.9881ZM12.1816 11.0222C12.3133 11.2477 12.2956 11.9291 12.1943 12.2737C12.0701 11.7695 12.0524 11.0552 12.1259 10.9716L12.1816 11.0222ZM12.1411 14.0748C12.4121 14.5435 12.7541 14.9463 13.1316 15.2452C12.5844 15.3693 12.0853 15.5745 11.6395 15.7569C11.5331 15.8 11.4292 15.843 11.3279 15.8836C11.6648 15.2731 11.946 14.5815 12.1411 14.0748ZM16.0828 15.7341L16.0676 15.7569C16.0676 15.7569 15.8346 15.8988 14.9403 15.5466C15.9688 15.4985 16.0828 15.7341 16.0828 15.7341Z",
      fill: "currentColor"
    })]
  }));
});
var DocumentRemoveIcon = (0, import_react5.forwardRef)(function DocumentRemoveIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "document-remove",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M10.2515 3.9H10.5H18.5H19.1V4.5V11.9H17.9V5.1H11.1V8.5V9.1H10.5H7.09999V11.9H5.89999V8.5V8.25147L6.07573 8.07574L10.0757 4.07574L10.2515 3.9ZM17.9 19.9V14.1H19.1V20.5V21.1H18.5H6.49999H5.89999V20.5V14.1H7.09999V19.9H17.9ZM7.94852 7.9H9.89999V5.94853L7.94852 7.9ZM2 13.6H23V12.4H2V13.6Z",
      fill: "currentColor"
    })
  }));
});
var DocumentSheetIcon = (0, import_react5.forwardRef)(function DocumentSheetIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "document-sheet",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: [/* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M10.5 4.5V8.5H6.5M10.5 4.5H18.5V20.5H6.5V8.5L10.5 4.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    }), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("line", {
      x1: 10.4,
      y1: 19,
      x2: 10.4,
      y2: 10,
      stroke: "currentColor",
      strokeWidth: 1.2
    }), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("line", {
      x1: 14.4,
      y1: 19,
      x2: 14.4,
      y2: 10,
      stroke: "currentColor",
      strokeWidth: 1.2
    }), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("line", {
      x1: 8,
      y1: 12.4,
      x2: 17,
      y2: 12.4,
      stroke: "currentColor",
      strokeWidth: 1.2
    }), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("line", {
      x1: 8,
      y1: 16.4,
      x2: 17,
      y2: 16.4,
      stroke: "currentColor",
      strokeWidth: 1.2
    })]
  }));
});
var DocumentTextIcon = (0, import_react5.forwardRef)(function DocumentTextIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "document-text",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: [/* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M10.5 4.5V8.5H6.5M10.5 4.5H18.5V20.5H6.5V8.5L10.5 4.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    }), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M16 12H12.5H9",
      stroke: "currentColor",
      strokeWidth: 1.2
    }), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M14 15H12.5H9",
      stroke: "currentColor",
      strokeWidth: 1.2
    })]
  }));
});
var DocumentVideoIcon = (0, import_react5.forwardRef)(function DocumentVideoIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "document-video",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: [/* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M10.5 4.5V8.5H6.5M10.5 4.5H18.5V20.5H6.5V8.5L10.5 4.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    }), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M11.5 15.5V12.5L14 14L11.5 15.5Z",
      fill: "currentColor",
      stroke: "currentColor",
      strokeWidth: 1.2
    })]
  }));
});
var DocumentWordIcon = (0, import_react5.forwardRef)(function DocumentWordIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "document-word",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: [/* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M10.5 4.5V8.5H6.5M10.5 4.5H18.5V20.5H6.5V8.5L10.5 4.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    }), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M12.4699 13.4588H12.5263L13.6328 17H14.5435L16 12H14.9952L14.0656 15.7214H14.0129L12.929 12H12.0672L10.9984 15.7214H10.9419L10.0124 12H9L10.4565 17H11.371L12.4699 13.4588Z",
      fill: "currentColor"
    })]
  }));
});
var DocumentZipIcon = (0, import_react5.forwardRef)(function DocumentZipIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "document-zip",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: [/* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M10.5 4.5V8.5H6.5M10.5 4.5H18.5V20.5H6.5V8.5L10.5 4.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    }), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M15 4.5L13.5 5L15.5 6L13.5 7L15.5 8L13.5 9L15.5 10L13.5 11L14.5 11.5V13",
      stroke: "currentColor",
      strokeLinejoin: "round"
    }), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M13.5 13H15.5L16 17H13L13.5 13Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    })]
  }));
});
var DocumentsIcon = (0, import_react5.forwardRef)(function DocumentsIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "documents",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M16.5 6.5H19.5V21.5H8.5V18.5M10 3.5V8H5.5M10 3.5H16.5V18.5H5.5V8L10 3.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var DotIcon = (0, import_react5.forwardRef)(function DotIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "dot",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("circle", {
      cx: 12.5,
      cy: 12.5,
      r: 1.5,
      fill: "currentColor",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var DoubleChevronDownIcon = (0, import_react5.forwardRef)(function DoubleChevronDownIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "double-chevron-down",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M17 8.5L12.5 13L8 8.5M17 12.5L12.5 17L8 12.5",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var DoubleChevronLeftIcon = (0, import_react5.forwardRef)(function DoubleChevronLeftIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "double-chevron-left",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M12.5 17L8 12.5L12.5 8M16.5 17L12 12.5L16.5 8",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var DoubleChevronRightIcon = (0, import_react5.forwardRef)(function DoubleChevronRightIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "double-chevron-right",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M12.5 8L17 12.5L12.5 17M8.5 8L13 12.5L8.5 17",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var DoubleChevronUpIcon = (0, import_react5.forwardRef)(function DoubleChevronUpIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "double-chevron-up",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M8 12.5L12.5 8L17 12.5M8 16.5L12.5 12L17 16.5",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var DownloadIcon = (0, import_react5.forwardRef)(function DownloadIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "download",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M19.5 17V19.5H5.5V17M17.5 11L12.5 16L7.5 11M12.5 16V4.99998",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var DragHandleIcon = (0, import_react5.forwardRef)(function DragHandleIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "drag-handle",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M9.5 8C10.3284 8 11 7.32843 11 6.5C11 5.67157 10.3284 5 9.5 5C8.67157 5 8 5.67157 8 6.5C8 7.32843 8.67157 8 9.5 8ZM9.5 14C10.3284 14 11 13.3284 11 12.5C11 11.6716 10.3284 11 9.5 11C8.67157 11 8 11.6716 8 12.5C8 13.3284 8.67157 14 9.5 14ZM11 18.5C11 19.3284 10.3284 20 9.5 20C8.67157 20 8 19.3284 8 18.5C8 17.6716 8.67157 17 9.5 17C10.3284 17 11 17.6716 11 18.5ZM15.5 8C16.3284 8 17 7.32843 17 6.5C17 5.67157 16.3284 5 15.5 5C14.6716 5 14 5.67157 14 6.5C14 7.32843 14.6716 8 15.5 8ZM17 12.5C17 13.3284 16.3284 14 15.5 14C14.6716 14 14 13.3284 14 12.5C14 11.6716 14.6716 11 15.5 11C16.3284 11 17 11.6716 17 12.5ZM15.5 20C16.3284 20 17 19.3284 17 18.5C17 17.6716 16.3284 17 15.5 17C14.6716 17 14 17.6716 14 18.5C14 19.3284 14.6716 20 15.5 20Z",
      fill: "currentColor"
    })
  }));
});
var DropIcon = (0, import_react5.forwardRef)(function DropIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "drop",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M18.5 14.5C18.5 18 16 20.5 12.5 20.5C9 20.5 6.5 18 6.5 14.5C6.5 11 9.5 7.50001 12.5 4.5C15.5 7.5 18.5 11 18.5 14.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var EarthAmericasIcon = (0, import_react5.forwardRef)(function EarthAmericasIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "earth-americas",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M9.9 19.4303V16.7515L11.5203 15.1312L8.60296 13.4642L7.6 12.2105V13L6.4382 13.2107L5.3943 10.4269C5.20272 11.0847 5.1 11.7804 5.1 12.5C5.1 15.672 7.09572 18.3778 9.9 19.4303ZM15.6 5.77866V11.4485L13.7515 9.6H11.3L10.2922 10.9437L10.7485 11.4H12.6V12.8183L13.3211 13.9H15.7172L18.7651 16.4399C19.484 15.2991 19.9 13.9481 19.9 12.5C19.9 9.52001 18.1385 6.95143 15.6 5.77866ZM15.6 4.47567C18.8178 5.71962 21.1 8.84329 21.1 12.5C21.1 17.2497 17.2496 21.1 12.5 21.1C7.75035 21.1 3.9 17.2497 3.9 12.5C3.9 7.75035 7.75035 3.9 12.5 3.9C13.5164 3.9 14.4915 4.07631 15.3966 4.4H15.6V4.47567Z",
      fill: "currentColor"
    })
  }));
});
var EarthGlobeIcon = (0, import_react5.forwardRef)(function EarthGlobeIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "earth-globe",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M5.5 16.5H19.5M5.5 8.5H19.5M4.5 12.5H20.5M12.5 20.5C12.5 20.5 8 18.5 8 12.5C8 6.5 12.5 4.5 12.5 4.5M12.5 4.5C12.5 4.5 17 6.5 17 12.5C17 18.5 12.5 20.5 12.5 20.5M12.5 4.5V20.5M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var EditIcon = (0, import_react5.forwardRef)(function EditIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "edit",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M15 7L18 10M6 19L7 15L17 5L20 8L10 18L6 19Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var EllipsisHorizontalIcon = (0, import_react5.forwardRef)(function EllipsisHorizontalIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "ellipsis-horizontal",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: [/* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M6.5 11C7.32843 11 8 11.6716 8 12.5C8 13.3284 7.32843 14 6.5 14C5.67157 14 5 13.3284 5 12.5C5 11.6716 5.67157 11 6.5 11Z",
      fill: "currentColor"
    }), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M12.5 11C13.3284 11 14 11.6716 14 12.5C14 13.3284 13.3284 14 12.5 14C11.6716 14 11 13.3284 11 12.5C11 11.6716 11.6716 11 12.5 11Z",
      fill: "currentColor"
    }), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M18.5 11C19.3284 11 20 11.6716 20 12.5C20 13.3284 19.3284 14 18.5 14C17.6716 14 17 13.3284 17 12.5C17 11.6716 17.6716 11 18.5 11Z",
      fill: "currentColor"
    })]
  }));
});
var EllipsisVerticalIcon = (0, import_react5.forwardRef)(function EllipsisVerticalIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "ellipsis-vertical",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M14 6.5C14 7.32843 13.3284 8 12.5 8C11.6716 8 11 7.32843 11 6.5C11 5.67157 11.6716 5 12.5 5C13.3284 5 14 5.67157 14 6.5ZM14 12.5C14 13.3284 13.3284 14 12.5 14C11.6716 14 11 13.3284 11 12.5C11 11.6716 11.6716 11 12.5 11C13.3284 11 14 11.6716 14 12.5ZM12.5 20C13.3284 20 14 19.3284 14 18.5C14 17.6716 13.3284 17 12.5 17C11.6716 17 11 17.6716 11 18.5C11 19.3284 11.6716 20 12.5 20Z",
      fill: "currentColor"
    })
  }));
});
var EnvelopeIcon = (0, import_react5.forwardRef)(function EnvelopeIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "envelope",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: [/* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M20.5 18.5H4.5V6.5H20.5V18.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    }), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M20.5 18.5L17.75 15.5L15 12.5M4.5 18.5L10 12.5M20.5 6.5L12.5 15L4.5 6.5",
      stroke: "currentColor",
      strokeWidth: 1.2
    })]
  }));
});
var EqualIcon = (0, import_react5.forwardRef)(function EqualIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "equal",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: [/* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M7.5 4.5H3.5V20.5H7.5",
      stroke: "currentColor",
      strokeWidth: 1.2
    }), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M17.5 20.5L21.5 20.5L21.5 4.5L17.5 4.5",
      stroke: "currentColor",
      strokeWidth: 1.2
    }), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M9 10.5H16",
      stroke: "currentColor",
      strokeWidth: 1.2
    }), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M9 14.5H16",
      stroke: "currentColor",
      strokeWidth: 1.2
    })]
  }));
});
var ErrorFilledIcon = (0, import_react5.forwardRef)(function ErrorFilledIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "error-filled",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M4 12.5C4 7.80558 7.80558 4 12.5 4C17.1944 4 21 7.80558 21 12.5C21 17.1944 17.1944 21 12.5 21C7.80558 21 4 17.1944 4 12.5ZM13 14.5V16H12V14.5H13ZM12 9V13H13V9H12Z",
      fill: "currentColor"
    })
  }));
});
var ErrorOutlineIcon = (0, import_react5.forwardRef)(function ErrorOutlineIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "error-outline",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M12.5 16V14.5M12.5 9V13M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var ExpandIcon = (0, import_react5.forwardRef)(function ExpandIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "expand",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: [/* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M14 6.5H18.5V11M11 18.5H6.5V14",
      stroke: "currentColor",
      strokeWidth: 1.2
    }), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M18.5 6.5L14 11M6.5 18.5L11 14",
      stroke: "currentColor",
      strokeWidth: 1.2
    })]
  }));
});
var EyeClosedIcon = (0, import_react5.forwardRef)(function EyeClosedIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "eye-closed",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M7 15.5L5.5 17.5M20.5 12.5C19.8612 13.5647 19.041 14.6294 18.0008 15.501M18.0008 15.501C16.5985 16.676 14.7965 17.5 12.5 17.5M18.0008 15.501L18 15.5M18.0008 15.501L19.5 17.5M12.5 17.5C8.5 17.5 6 15 4.5 12.5M12.5 17.5V20M15.5 17L16.5 19.5M9.5 17L8.5 19.5",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var EyeOpenIcon2 = (0, import_react5.forwardRef)(function EyeOpenIcon22(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "eye-open",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M5.20513 12.5C6.66296 14.7936 8.9567 16.9 12.5 16.9C16.0433 16.9 18.3371 14.7936 19.7949 12.5C18.3371 10.2064 16.0433 8.1 12.5 8.1C8.9567 8.1 6.66296 10.2064 5.20513 12.5ZM3.98551 12.1913C5.53974 9.60093 8.20179 6.9 12.5 6.9C16.7982 6.9 19.4603 9.60093 21.0145 12.1913L21.1997 12.5L21.0145 12.8087C19.4603 15.3991 16.7982 18.1 12.5 18.1C8.20179 18.1 5.53974 15.3991 3.98551 12.8087L3.80029 12.5L3.98551 12.1913ZM12.5 9.4C10.7879 9.4 9.4 10.7879 9.4 12.5C9.4 14.2121 10.7879 15.6 12.5 15.6C14.2121 15.6 15.6 14.2121 15.6 12.5C15.6 10.7879 14.2121 9.4 12.5 9.4Z",
      fill: "currentColor"
    })
  }));
});
var FilterIcon = (0, import_react5.forwardRef)(function FilterIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "filter",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M11 12L6 7V6L19 6L19 7L14 12V17L11 19V12Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinecap: "square"
    })
  }));
});
var FolderIcon = (0, import_react5.forwardRef)(function FolderIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "folder",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M11.5 8.5H19.5V18.5H5.5V5.5H10.5L11.5 8.5ZM11.5 8.5H5.5",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var GenerateIcon = (0, import_react5.forwardRef)(function GenerateIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "generate",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: [/* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M9 5.30423C6.33576 6.60253 4.5 9.33688 4.5 12.5C4.5 16.9183 8.08172 20.5 12.5 20.5C16.9183 20.5 20.5 16.9183 20.5 12.5C20.5 8.08172 16.9183 4.5 12.5 4.5V14.5",
      stroke: "currentColor",
      strokeWidth: 1.2
    }), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M16 11L12.5 14.5L9 11",
      stroke: "currentColor",
      strokeWidth: 1.2
    })]
  }));
});
var HeartFilledIcon = (0, import_react5.forwardRef)(function HeartFilledIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "heart-filled",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M17 16C15.8 17.3235 12.5 20.5 12.5 20.5C12.5 20.5 9.2 17.3235 8 16C5.2 12.9118 4.5 11.7059 4.5 9.5C4.5 7.29412 6.1 5.5 8.5 5.5C10.5 5.5 11.7 6.82353 12.5 8.14706C13.3 6.82353 14.5 5.5 16.5 5.5C18.9 5.5 20.5 7.29412 20.5 9.5C20.5 11.7059 19.8 12.9118 17 16Z",
      fill: "currentColor",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var HeartIcon = (0, import_react5.forwardRef)(function HeartIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "heart",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M17 16C15.8 17.3235 12.5 20.5 12.5 20.5C12.5 20.5 9.2 17.3235 8 16C5.2 12.9118 4.5 11.7059 4.5 9.5C4.5 7.29412 6.1 5.5 8.5 5.5C10.5 5.5 11.7 6.82353 12.5 8.14706C13.3 6.82353 14.5 5.5 16.5 5.5C18.9 5.5 20.5 7.29412 20.5 9.5C20.5 11.7059 19.8 12.9118 17 16Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var HelpCircleIcon = (0, import_react5.forwardRef)(function HelpCircleIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "help-circle",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M12.5 13C12.5 11 14 11.5 14 10C14 9.34375 13.5 8.5 12.5 8.5C11.5 8.5 11 9 10.5 9.5M12.5 16V14.5M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var HomeIcon = (0, import_react5.forwardRef)(function HomeIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "home",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M6.5 8.75V18.5H18.5V8.75M4.5 10L12.5 5L20.5 10M14.5 18.5V11.5H10.5V18.5",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var IceCreamIcon = (0, import_react5.forwardRef)(function IceCreamIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "ice-cream",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M9.5 13.5L12.5 20.5L15.5 13.5M12.5 8.26389C11.9692 7.78885 11.2684 7.5 10.5 7.5C8.84315 7.5 7.5 8.84315 7.5 10.5C7.5 12.1569 8.84315 13.5 10.5 13.5C11.2684 13.5 11.9692 13.2111 12.5 12.7361M9.5 7.5C9.5 5.84315 10.8431 4.5 12.5 4.5C14.1569 4.5 15.5 5.84315 15.5 7.5M17.5 10.5C17.5 12.1569 16.1569 13.5 14.5 13.5C12.8431 13.5 11.5 12.1569 11.5 10.5C11.5 8.84315 12.8431 7.5 14.5 7.5C16.1569 7.5 17.5 8.84315 17.5 10.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var ImageIcon = (0, import_react5.forwardRef)(function ImageIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "image",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M5.5 15.5L8.79289 12.2071C9.18342 11.8166 9.81658 11.8166 10.2071 12.2071L12.8867 14.8867C13.2386 15.2386 13.7957 15.2782 14.1938 14.9796L15.1192 14.2856C15.3601 14.1049 15.6696 14.0424 15.9618 14.1154L19.5 15M5.5 6.5H19.5V18.5H5.5V6.5ZM15.5 10.5C15.5 11.0523 15.0523 11.5 14.5 11.5C13.9477 11.5 13.5 11.0523 13.5 10.5C13.5 9.94772 13.9477 9.5 14.5 9.5C15.0523 9.5 15.5 9.94772 15.5 10.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var ImageRemoveIcon = (0, import_react5.forwardRef)(function ImageRemoveIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "image-remove",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M4.9 5.9H5.5H19.5H20.1V6.5V11.4H18.9V7.1H6.1V11.4H4.9V6.5V5.9ZM18.9 13.7315V13.6H20.1V18.5V19.1H19.5H5.5H4.9V18.5V13.6H7.74853L6.1 15.2485V17.9H18.9V14.9685L15.8162 14.1975C15.6994 14.1683 15.5756 14.1933 15.4792 14.2656L14.5538 14.9596C13.9168 15.4374 13.0255 15.374 12.4625 14.811L11.2515 13.6H12.9485L13.311 13.9625C13.4518 14.1032 13.6746 14.1191 13.8338 13.9996L14.3667 13.6H18.3739L18.9 13.7315ZM12.9 10C12.9 10.6024 13.2329 11.1271 13.7248 11.4H15.2752C15.7671 11.1271 16.1 10.6024 16.1 10C16.1 9.11635 15.3837 8.4 14.5 8.4C13.6163 8.4 12.9 9.11635 12.9 10ZM8.25147 11.4H10.7485L10.6314 11.2828C10.0065 10.658 8.99347 10.658 8.36863 11.2828L8.25147 11.4ZM14.1 10C14.1 9.77909 14.2791 9.6 14.5 9.6C14.7209 9.6 14.9 9.77909 14.9 10C14.9 10.2209 14.7209 10.4 14.5 10.4C14.2791 10.4 14.1 10.2209 14.1 10ZM2 13.1H23V11.9H2V13.1Z",
      fill: "currentColor"
    })
  }));
});
var ImagesIcon = (0, import_react5.forwardRef)(function ImagesIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "images",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M18.5 7.5H20.5V19.5H6.5V17.5M4.5 14.5L7.79289 11.2071C8.18342 10.8166 8.81658 10.8166 9.20711 11.2071L11.8867 13.8867C12.2386 14.2386 12.7957 14.2782 13.1938 13.9796L14.1192 13.2856C14.3601 13.1049 14.6696 13.0424 14.9618 13.1154L18.5 14M4.5 5.5H18.5V17.5H4.5V5.5ZM14.5 9.5C14.5 10.0523 14.0523 10.5 13.5 10.5C12.9477 10.5 12.5 10.0523 12.5 9.5C12.5 8.94772 12.9477 8.5 13.5 8.5C14.0523 8.5 14.5 8.94772 14.5 9.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var InfoFilledIcon = (0, import_react5.forwardRef)(function InfoFilledIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "info-filled",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M21 12.5C21 17.1944 17.1944 21 12.5 21C7.80558 21 4 17.1944 4 12.5C4 7.80558 7.80558 4 12.5 4C17.1944 4 21 7.80558 21 12.5ZM12 10.5V9H13V10.5H12ZM13 16V12H12V16H13Z",
      fill: "currentColor"
    })
  }));
});
var InfoOutlineIcon = (0, import_react5.forwardRef)(function InfoOutlineIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "info-outline",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M12.5 10.5V9M12.5 12V16M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var InlineElementIcon = (0, import_react5.forwardRef)(function InlineElementIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "inline-element",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M16.5 6.5H17.1V5.9H16.5V6.5ZM8.5 6.5V5.9H7.9V6.5H8.5ZM16.5 18.5V19.1H17.1V18.5H16.5ZM8.5 18.5H7.9V19.1H8.5V18.5ZM16.5 5.9H8.5V7.1H16.5V5.9ZM17.1 18.5V6.5H15.9V18.5H17.1ZM8.5 19.1H16.5V17.9H8.5V19.1ZM7.9 6.5V18.5H9.1V6.5H7.9ZM4.9 5V20H6.1V5H4.9ZM18.9 5V20H20.1V5H18.9Z",
      fill: "currentColor"
    })
  }));
});
var InlineIcon = (0, import_react5.forwardRef)(function InlineIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "inline",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M12.5 6.5H19.5V18.5H12.5M12.5 6.5H5.5V18.5H12.5M12.5 6.5V18.5",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var InsertAboveIcon = (0, import_react5.forwardRef)(function InsertAboveIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "insert-above",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M14.5 10.5556L10.5 10.5556M12.5 12.5L12.5 8.50001M18.5 5.50001L6.5 5.50001M18.5 19.5L6.5 19.5L6.5 15.5L18.5 15.5L18.5 19.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinecap: "square"
    })
  }));
});
var InsertBelowIcon = (0, import_react5.forwardRef)(function InsertBelowIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "insert-below",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M10.5 14.5H14.5M12.5 12.5V16.5M6.5 19.5H18.5M6.5 5.5H18.5V9.5H6.5V5.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2,
      strokeLinecap: "square"
    })
  }));
});
var ItalicIcon = (0, import_react5.forwardRef)(function ItalicIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "italic",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M10.43 18H11.7276L13.4551 9.86763H12.1576L10.43 18ZM13.3043 8.29848C13.8022 8.29848 14.2095 7.89111 14.2095 7.39321C14.2095 6.89531 13.8022 6.48794 13.3043 6.48794C12.8064 6.48794 12.399 6.89531 12.399 7.39321C12.399 7.89111 12.8064 8.29848 13.3043 8.29848Z",
      fill: "currentColor"
    })
  }));
});
var JoystickIcon = (0, import_react5.forwardRef)(function JoystickIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "joystick",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M9.5 16V14.5H15.5V16M13.5 10.5V14.5M11.5 10.5V14.5M15.5 7.5C15.5 9.15685 14.1569 10.5 12.5 10.5C10.8431 10.5 9.5 9.15685 9.5 7.5C9.5 5.84315 10.8431 4.5 12.5 4.5C14.1569 4.5 15.5 5.84315 15.5 7.5ZM18.5 19.5H6.5C5.94772 19.5 5.5 19.0523 5.5 18.5V17.5C5.5 16.9477 5.94772 16.5 6.5 16.5H18.5C19.0523 16.5 19.5 16.9477 19.5 17.5V18.5C19.5 19.0523 19.0523 19.5 18.5 19.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var LaunchIcon = (0, import_react5.forwardRef)(function LaunchIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "launch",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: [/* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M14 6.5H5.5V19.5H18.5V11M20.5 4.5L10.5 14.5",
      stroke: "currentColor",
      strokeWidth: 1.2
    }), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M16 4.5H20.5V9",
      stroke: "currentColor",
      strokeWidth: 1.2
    })]
  }));
});
var LeaveIcon2 = (0, import_react5.forwardRef)(function LeaveIcon22(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "leave",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: [/* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M16.5 15V19.5H5.5V5.5H16.5V10M10 12.5H22.5",
      stroke: "currentColor",
      strokeWidth: 1.2
    }), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M20 10L22.5 12.5L20 15",
      stroke: "currentColor",
      strokeWidth: 1.2
    })]
  }));
});
var LemonIcon = (0, import_react5.forwardRef)(function LemonIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "lemon",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M10.6569 10.3431L6.41422 14.5858C7.58579 15.7574 9.12132 16.3431 10.6569 16.3431M10.6569 10.3431L14.8995 6.1005C16.0711 7.27208 16.6569 8.80761 16.6569 10.3431M10.6569 10.3431L10.6569 16.3431M10.6569 10.3431L16.6569 10.3431M10.6569 10.3431L14.8995 14.5858M14.8995 14.5858C13.7279 15.7574 12.1924 16.3431 10.6569 16.3431M14.8995 14.5858C16.0711 13.4142 16.6569 11.8787 16.6569 10.3431M16.3137 4.68629C19.4379 7.81049 19.4379 12.8758 16.3137 16C13.1895 19.1242 8.12419 19.1242 5 16L16.3137 4.68629Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var LinkIcon = (0, import_react5.forwardRef)(function LinkIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "link",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M11 12.5L12.5 14C13.281 14.7811 14.719 14.7811 15.5 14L18.5 11C19.281 10.219 19.281 8.78105 18.5 8L18 7.50001C17.2189 6.71896 15.781 6.71896 15 7.5L13 9.5M12 15.5L10 17.5C9.21895 18.281 7.78105 18.281 7 17.5L6.5 17C5.71895 16.219 5.71896 14.7811 6.5 14L9.50001 11C10.2811 10.219 11.719 10.219 12.5 11L14 12.5",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var LinkRemovedIcon = (0, import_react5.forwardRef)(function LinkRemovedIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "link-removed",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M18.4243 7.07574C17.9038 6.55531 17.1875 6.31422 16.5 6.31422C15.8125 6.31422 15.0962 6.55531 14.5757 7.07574L12.5757 9.07574L13.4243 9.92427L15.4243 7.92427C15.6849 7.66365 16.078 7.51422 16.5 7.51422C16.922 7.51422 17.3151 7.66365 17.5757 7.92427L17.9983 7.50165L17.5757 7.92427L18.0757 8.42427C18.3363 8.68488 18.4858 9.07799 18.4858 9.5C18.4858 9.92201 18.3363 10.3151 18.0757 10.5757L16.7515 11.9H18.4485L18.9243 11.4243C19.4447 10.9038 19.6858 10.1875 19.6858 9.5C19.6858 8.81253 19.4447 8.09617 18.9243 7.57574L18.5 8L18.9243 7.57574L18.4243 7.07574ZM12.0757 11.4243L12.5515 11.9H14.2485L12.9243 10.5757C12.4038 10.0553 11.6875 9.81421 11 9.81421C10.3125 9.81421 9.59617 10.0553 9.07574 10.5757L7.75147 11.9H9.44853L9.92427 11.4243C10.1849 11.1636 10.578 11.0142 11 11.0142C11.422 11.0142 11.8151 11.1636 12.0757 11.4243ZM7.24853 14.1H5.67654C5.43071 14.5303 5.31421 15.0221 5.31421 15.5C5.31421 16.1875 5.55529 16.9038 6.07573 17.4243L6.4965 17.0035L6.07573 17.4243L6.57573 17.9243C7.09616 18.4447 7.81252 18.6858 8.49999 18.6858C9.18746 18.6858 9.90382 18.4447 10.4243 17.9243L12.4243 15.9243L11.5757 15.0757L9.57573 17.0757C9.31511 17.3363 8.922 17.4858 8.49999 17.4858C8.07798 17.4858 7.68487 17.3363 7.42426 17.0757L6.99999 17.5L7.42425 17.0757L6.92426 16.5757C6.66364 16.3151 6.51421 15.922 6.51421 15.5C6.51421 15.078 6.66365 14.6849 6.92426 14.4243L7.24853 14.1ZM16.2485 14.1H11.7515L12.0757 14.4243C12.5962 14.9447 13.3125 15.1858 14 15.1858C14.6875 15.1858 15.4038 14.9447 15.9243 14.4243L16.2485 14.1ZM2 13.6H23V12.4H2V13.6Z",
      fill: "currentColor"
    })
  }));
});
var LockIcon = (0, import_react5.forwardRef)(function LockIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "lock",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M15.5 11.5V8.5C15.5 6.5 14 5.5 12.5 5.5C11 5.5 9.5 6.5 9.5 8.5V11.5M7.5 11.5H17.5V19.5H7.5V11.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var LogoJsIcon = (0, import_react5.forwardRef)(function LogoJsIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "logo-js",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M20 5H5V20H20V5ZM12.5254 16.1572C12.5254 17.4189 11.7742 18.1536 10.4792 18.1536C9.24243 18.1536 8.49121 17.4189 8.45801 16.2942V16.261H9.67407V16.2859C9.69897 16.7466 9.9729 17.0703 10.4626 17.0703C10.9939 17.0703 11.272 16.7507 11.272 16.1489V12.011H12.5254V16.1572ZM18.2893 16.2153C18.2893 17.4023 17.3679 18.1536 15.8738 18.1536C14.4419 18.1536 13.5371 17.4688 13.4666 16.4062L13.4624 16.3398H14.6702L14.6743 16.3813C14.72 16.8296 15.2056 17.1326 15.907 17.1326C16.5752 17.1326 17.0359 16.813 17.0359 16.3523V16.3481C17.0359 15.9539 16.7412 15.7339 15.9983 15.5803L15.3674 15.4517C14.1223 15.1985 13.5869 14.6174 13.5869 13.7085V13.7043C13.5869 12.592 14.5415 11.8574 15.8696 11.8574C17.2683 11.8574 18.0901 12.5962 18.1689 13.5964L18.1731 13.6504H16.9944L16.9861 13.6006C16.9155 13.1731 16.5005 12.8743 15.8696 12.8743C15.2512 12.8784 14.8403 13.1606 14.8403 13.6089V13.613C14.8403 14.0032 15.1309 14.2356 15.8364 14.3809L16.4714 14.5095C17.7373 14.771 18.2893 15.2773 18.2893 16.2112V16.2153Z",
      fill: "currentColor"
    })
  }));
});
var LogoTsIcon = (0, import_react5.forwardRef)(function LogoTsIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "logo-ts",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M20 5H5V20H20V5ZM11.0769 18H9.82349V13.0444H8.02637V12.011H12.874V13.0444H11.0769V18ZM18.2893 16.2153C18.2893 17.4023 17.3679 18.1536 15.8738 18.1536C14.4419 18.1536 13.5371 17.4688 13.4666 16.4062L13.4624 16.3398H14.6702L14.6743 16.3813C14.72 16.8296 15.2056 17.1326 15.907 17.1326C16.5752 17.1326 17.0359 16.813 17.0359 16.3523V16.3481C17.0359 15.9539 16.7412 15.7339 15.9983 15.5803L15.3674 15.4517C14.1223 15.1985 13.5869 14.6174 13.5869 13.7085V13.7043C13.5869 12.592 14.5415 11.8574 15.8696 11.8574C17.2683 11.8574 18.0901 12.5962 18.1689 13.5964L18.1731 13.6504H16.9944L16.9861 13.6006C16.9155 13.1731 16.5005 12.8743 15.8696 12.8743C15.2512 12.8784 14.8403 13.1606 14.8403 13.6089V13.613C14.8403 14.0032 15.1309 14.2356 15.8364 14.3809L16.4714 14.5095C17.7373 14.771 18.2893 15.2773 18.2893 16.2112V16.2153Z",
      fill: "currentColor"
    })
  }));
});
var MasterDetailIcon = (0, import_react5.forwardRef)(function MasterDetailIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "master-detail",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M6 8.5H9M10.5 5.5V19.5M6 11.5H9M13 8.5H18M6 14.5H9M4.5 5.5H20.5V19.5H4.5V5.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var MenuIcon2 = (0, import_react5.forwardRef)(function MenuIcon22(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "menu",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M6 8.1H19V6.9H6V8.1ZM6 18.1H19V16.9H6V18.1ZM6 13.1H19V11.9H6V13.1Z",
      fill: "currentColor"
    })
  }));
});
var MobileDeviceIcon2 = (0, import_react5.forwardRef)(function MobileDeviceIcon22(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "mobile-device",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M8.1 6.5C8.1 5.7268 8.7268 5.1 9.5 5.1V3.9C8.06406 3.9 6.9 5.06406 6.9 6.5H8.1ZM8.1 18.5V6.5H6.9V18.5H8.1ZM9.5 19.9C8.7268 19.9 8.1 19.2732 8.1 18.5H6.9C6.9 19.9359 8.06406 21.1 9.5 21.1V19.9ZM15.5 19.9H9.5V21.1H15.5V19.9ZM16.9 18.5C16.9 19.2732 16.2732 19.9 15.5 19.9V21.1C16.9359 21.1 18.1 19.9359 18.1 18.5H16.9ZM16.9 6.5V18.5H18.1V6.5H16.9ZM15.5 5.1C16.2732 5.1 16.9 5.7268 16.9 6.5H18.1C18.1 5.06406 16.9359 3.9 15.5 3.9V5.1ZM9.5 5.1H15.5V3.9H9.5V5.1ZM12.9 17.5C12.9 17.7209 12.7209 17.9 12.5 17.9V19.1C13.3837 19.1 14.1 18.3837 14.1 17.5H12.9ZM12.5 17.1C12.7209 17.1 12.9 17.2791 12.9 17.5H14.1C14.1 16.6163 13.3837 15.9 12.5 15.9V17.1ZM12.1 17.5C12.1 17.2791 12.2791 17.1 12.5 17.1V15.9C11.6163 15.9 10.9 16.6163 10.9 17.5H12.1ZM12.5 17.9C12.2791 17.9 12.1 17.7209 12.1 17.5H10.9C10.9 18.3837 11.6163 19.1 12.5 19.1V17.9Z",
      fill: "currentColor"
    })
  }));
});
var MoonIcon = (0, import_react5.forwardRef)(function MoonIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "moon",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M19.6065 16.1775C18.9417 16.387 18.234 16.5 17.5 16.5C13.634 16.5 10.5 13.366 10.5 9.5C10.5 7.54163 11.3042 5.77109 12.6004 4.50062C12.567 4.50021 12.5335 4.5 12.5 4.5C8.08172 4.5 4.5 8.08172 4.5 12.5C4.5 16.9183 8.08172 20.5 12.5 20.5C15.5924 20.5 18.275 18.7454 19.6065 16.1775Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var OkHandIcon = (0, import_react5.forwardRef)(function OkHandIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "ok-hand",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M15.9957 11.5C14.8197 10.912 11.9957 9 10.4957 9C8.9957 9 5.17825 11.7674 6 13C7 14.5 9.15134 11.7256 10.4957 12C11.8401 12.2744 13 13.5 13 14.5C13 15.5 11.8401 16.939 10.4957 16.5C9.15134 16.061 8.58665 14.3415 7.4957 14C6.21272 13.5984 5.05843 14.6168 5.5 15.5C5.94157 16.3832 7.10688 17.6006 8.4957 19C9.74229 20.2561 11.9957 21.5 14.9957 20C17.9957 18.5 18.5 16.2498 18.5 13C18.5 11.5 13.7332 5.36875 11.9957 4.5C10.9957 4 10 5 10.9957 6.5C11.614 7.43149 13.5 9.27705 14 10.3751M15.5 8C15.5 8 15.3707 7.5 14.9957 6C14.4957 4 15.9957 3.5 16.4957 4.5C17.1281 5.76491 18.2872 10.9147 18.4957 13",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var OlistIcon = (0, import_react5.forwardRef)(function OlistIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "olist",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M7.5 18.5V19H8.30902L7.94721 18.2764L7.5 18.5ZM7.5 16.5L7.94721 16.7236L8.30902 16H7.5V16.5ZM7 17.5L6.55279 17.2764L6.44098 17.5L6.55279 17.7236L7 17.5ZM6.5 6.5H7V6H6.5V6.5ZM6 13.5L5.55279 13.2764L5.19098 14H6V13.5ZM7 11.5L7.44721 11.7236L7.80902 11H7V11.5ZM10 8H19V7H10V8ZM10 13H19V12H10V13ZM10 18H19V17H10V18ZM5 19H7.5V18H5V19ZM7.5 16H5V17H7.5V16ZM7.94721 18.2764L7.44721 17.2764L6.55279 17.7236L7.05279 18.7236L7.94721 18.2764ZM7.44721 17.7236L7.94721 16.7236L7.05279 16.2764L6.55279 17.2764L7.44721 17.7236ZM5 7H6.5V6H5V7ZM5 9H6.5V8H5V9ZM6.5 9H8V8H6.5V9ZM6 6.5V8.5H7V6.5H6ZM8 13H6V14H8V13ZM6.44721 13.7236L7.44721 11.7236L6.55279 11.2764L5.55279 13.2764L6.44721 13.7236ZM7 11H5V12H7V11Z",
      fill: "currentColor"
    })
  }));
});
var OverageIcon = (0, import_react5.forwardRef)(function OverageIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "overage",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M14 5.9H18.5H19.1V6.5V11H17.9V7.94853L12.8485 13H11.1515L17.0515 7.1H14V5.9ZM10.2515 13.9H11.9485H22V15.1L12.95 15.1H7.95L3 15.1V13.9H10.2515ZM8.15148 16L6.07574 18.0757L6.92426 18.9243L9.84853 16H8.15148Z",
      fill: "currentColor"
    })
  }));
});
var PackageIcon = (0, import_react5.forwardRef)(function PackageIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "package",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M12.5 13V22M12.5 13L4.5 8M12.5 13L20.5 8M8.5 5.5L16.5 10.5M4.5 8L12.5 3L20.5 8V17L12.5 22L4.5 17V8Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var PauseIcon = (0, import_react5.forwardRef)(function PauseIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "pause",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: [/* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M10.5 7.5H8.5V17.5H10.5V7.5ZM16.5 7.5H14.5V17.5H16.5V7.5Z",
      fill: "currentColor"
    }), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M8.5 7.5V6.9H7.9V7.5H8.5ZM10.5 7.5H11.1V6.9H10.5V7.5ZM8.5 17.5H7.9V18.1H8.5V17.5ZM10.5 17.5V18.1H11.1V17.5H10.5ZM14.5 7.5V6.9H13.9V7.5H14.5ZM16.5 7.5H17.1V6.9H16.5V7.5ZM14.5 17.5H13.9V18.1H14.5V17.5ZM16.5 17.5V18.1H17.1V17.5H16.5ZM8.5 8.1H10.5V6.9H8.5V8.1ZM9.1 17.5V7.5H7.9V17.5H9.1ZM10.5 16.9H8.5V18.1H10.5V16.9ZM9.9 7.5V17.5H11.1V7.5H9.9ZM14.5 8.1H16.5V6.9H14.5V8.1ZM15.1 17.5V7.5H13.9V17.5H15.1ZM16.5 16.9H14.5V18.1H16.5V16.9ZM15.9 7.5V17.5H17.1V7.5H15.9Z",
      fill: "currentColor"
    })]
  }));
});
var PinIcon = (0, import_react5.forwardRef)(function PinIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "pin",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: [/* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M6.5 10.5C6.5 7 9 4.5 12.5 4.5C16 4.5 18.5 7 18.5 10.5C18.5 14 15.5 17.5 12.5 20.5C9.5 17.5 6.5 14 6.5 10.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    }), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M14 10.5C14 11.3284 13.3284 12 12.5 12C11.6716 12 11 11.3284 11 10.5C11 9.67157 11.6716 9 12.5 9C13.3284 9 14 9.67157 14 10.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    })]
  }));
});
var PinRemovedIcon = (0, import_react5.forwardRef)(function PinRemovedIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "pin-removed",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12.0757 20.9243L12.5 21.3485L12.9243 20.9243C14.4315 19.417 15.9655 17.7584 17.1242 16.0203C17.5402 15.3963 17.9127 14.7549 18.2192 14.1H16.8785C16.6575 14.5172 16.4051 14.9356 16.1258 15.3547C15.1381 16.8362 13.8436 18.2803 12.5 19.6478C11.1564 18.2803 9.86189 16.8362 8.87423 15.3547C8.59486 14.9356 8.34249 14.5172 8.12154 14.1H6.78084C7.08725 14.7549 7.45976 15.3963 7.87577 16.0203C9.03448 17.7584 10.5685 19.417 12.0757 20.9243ZM19.1 10.5C19.1 10.9701 19.0508 11.4372 18.9594 11.9H17.732C17.8418 11.4297 17.9 10.9627 17.9 10.5C17.9 7.33137 15.6686 5.1 12.5 5.1C9.33137 5.1 7.1 7.33137 7.1 10.5C7.1 10.9627 7.15822 11.4297 7.26799 11.9H6.04056C5.94923 11.4372 5.9 10.9701 5.9 10.5C5.9 6.66863 8.66863 3.9 12.5 3.9C16.3314 3.9 19.1 6.66863 19.1 10.5ZM14.6 10.5C14.6 11.0379 14.3978 11.5285 14.0653 11.9H10.9347C10.6022 11.5285 10.4 11.0379 10.4 10.5C10.4 9.3402 11.3402 8.4 12.5 8.4C13.6598 8.4 14.6 9.3402 14.6 10.5ZM11.6 10.5C11.6 10.0029 12.0029 9.6 12.5 9.6C12.9971 9.6 13.4 10.0029 13.4 10.5C13.4 10.9971 12.9971 11.4 12.5 11.4C12.0029 11.4 11.6 10.9971 11.6 10.5ZM2 13.6H23V12.4H2V13.6Z",
      fill: "currentColor"
    })
  }));
});
var PlayIcon = (0, import_react5.forwardRef)(function PlayIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "play",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M7.5 18.5V6.5L17.5 12.5L7.5 18.5Z",
      fill: "currentColor",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var PlugIcon = (0, import_react5.forwardRef)(function PlugIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "plug",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M13.25 8.5L16.75 5M16.25 11.5L19.75 8M9.25 15.5L5.25 19.5M7.75 14L9.75 12C8.25 10 8.75 9 9.75 8C10.15 7.6 11.25 6.5 11.25 6.5L18.25 13.5C18.25 13.5 17.3825 14.3675 16.75 15C15.75 16 14.75 16.5 12.75 15L10.75 17L7.75 14Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var PresentationIcon = (0, import_react5.forwardRef)(function PresentationIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "presentation",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M10.5 18H5.5V8.5H19.5V18H14.5M10.5 18L9 22M10.5 18H14.5M14.5 18L16 22M4.5 8.5H20.5V6.5H4.5V8.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var PublishIcon = (0, import_react5.forwardRef)(function PublishIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "publish",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: [/* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M4.99997 5.50005H20M7.5 14L12.5 9.00003L17.5 14",
      stroke: "currentColor",
      strokeWidth: 1.2
    }), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M12.5 9.00003V20",
      stroke: "currentColor",
      strokeWidth: 1.2
    })]
  }));
});
var ReadOnlyIcon = (0, import_react5.forwardRef)(function ReadOnlyIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "read-only",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M15 7L18 10M10 12L7 15L6 19L10 18L13 15M12 10L17 5L20 8L15 13M19 19L5 5",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var RemoveCircleIcon = (0, import_react5.forwardRef)(function RemoveCircleIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "remove-circle",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M8 12.4H17M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var RemoveIcon = (0, import_react5.forwardRef)(function RemoveIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "remove",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M5 12.5H20",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var ResetIcon = (0, import_react5.forwardRef)(function ResetIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "reset",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M4.56189 13.5L4.14285 13.9294L4.5724 14.3486L4.99144 13.9189L4.56189 13.5ZM9.92427 15.9243L15.9243 9.92427L15.0757 9.07574L9.07574 15.0757L9.92427 15.9243ZM9.07574 9.92426L15.0757 15.9243L15.9243 15.0757L9.92426 9.07574L9.07574 9.92426ZM19.9 12.5C19.9 16.5869 16.5869 19.9 12.5 19.9V21.1C17.2496 21.1 21.1 17.2496 21.1 12.5H19.9ZM5.1 12.5C5.1 8.41309 8.41309 5.1 12.5 5.1V3.9C7.75035 3.9 3.9 7.75035 3.9 12.5H5.1ZM12.5 5.1C16.5869 5.1 19.9 8.41309 19.9 12.5H21.1C21.1 7.75035 17.2496 3.9 12.5 3.9V5.1ZM5.15728 13.4258C5.1195 13.1227 5.1 12.8138 5.1 12.5H3.9C3.9 12.8635 3.92259 13.2221 3.9665 13.5742L5.15728 13.4258ZM12.5 19.9C9.9571 19.9 7.71347 18.6179 6.38048 16.6621L5.38888 17.3379C6.93584 19.6076 9.54355 21.1 12.5 21.1V19.9ZM4.99144 13.9189L7.42955 11.4189L6.57045 10.5811L4.13235 13.0811L4.99144 13.9189ZM4.98094 13.0706L2.41905 10.5706L1.58095 11.4294L4.14285 13.9294L4.98094 13.0706Z",
      fill: "currentColor"
    })
  }));
});
var RestoreIcon = (0, import_react5.forwardRef)(function RestoreIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "restore",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: [/* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M5.88468 17C7.32466 19.1128 9.75033 20.5 12.5 20.5C16.9183 20.5 20.5 16.9183 20.5 12.5C20.5 8.08172 16.9183 4.5 12.5 4.5C8.08172 4.5 4.5 8.08172 4.5 12.5V13.5M12.5 8V12.5L15.5 15.5",
      stroke: "currentColor",
      strokeWidth: 1.2
    }), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M7 11L4.5 13.5L2 11",
      stroke: "currentColor",
      strokeWidth: 1.2
    })]
  }));
});
var RetrieveIcon = (0, import_react5.forwardRef)(function RetrieveIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "retrieve",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: [/* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M12.5 10.5L12.5 17.5M4.5 7.5V20.5H20.5V7.5L18.5 4.5H6.5L4.5 7.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    }), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M9 14L12.5 10.5L16 14",
      stroke: "currentColor",
      strokeWidth: 1.2
    }), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M4.5 7.5H20.5",
      stroke: "currentColor",
      strokeWidth: 1.2
    })]
  }));
});
var RevertIcon = (0, import_react5.forwardRef)(function RevertIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "revert",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: [/* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M5 9L14.5 9C16.9853 9 19 11.0147 19 13.5C19 15.9853 16.9853 18 14.5 18H5",
      stroke: "currentColor",
      strokeWidth: 1.2
    }), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M9 13L5 9L9 5",
      stroke: "currentColor",
      strokeWidth: 1.2
    })]
  }));
});
var RobotIcon = (0, import_react5.forwardRef)(function RobotIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "robot",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M12.5 15.5V17.5M12.5 8.5V6.5M12.5 6.5C13.3284 6.5 14 5.82843 14 5C14 4.17157 13.3284 3.5 12.5 3.5C11.6716 3.5 11 4.17157 11 5C11 5.82843 11.6716 6.5 12.5 6.5ZM20.5 20.5V19.5C20.5 18.3954 19.6046 17.5 18.5 17.5H6.5C5.39543 17.5 4.5 18.3954 4.5 19.5V20.5H20.5ZM11.5 12C11.5 12.5523 11.0523 13 10.5 13C9.94772 13 9.5 12.5523 9.5 12C9.5 11.4477 9.94772 11 10.5 11C11.0523 11 11.5 11.4477 11.5 12ZM15.5 12C15.5 12.5523 15.0523 13 14.5 13C13.9477 13 13.5 12.5523 13.5 12C13.5 11.4477 13.9477 11 14.5 11C15.0523 11 15.5 11.4477 15.5 12ZM8.5 15.5H16.5C17.6046 15.5 18.5 14.6046 18.5 13.5V10.5C18.5 9.39543 17.6046 8.5 16.5 8.5H8.5C7.39543 8.5 6.5 9.39543 6.5 10.5V13.5C6.5 14.6046 7.39543 15.5 8.5 15.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var RocketIcon = (0, import_react5.forwardRef)(function RocketIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "rocket",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M12.5 20.5L15.5 14M11 9.5L4.5 12.5M9 14C9 14 7.54688 14.9531 6.5 16C5.5 17 4.5 20.5 4.5 20.5C4.5 20.5 8 19.5 9 18.5C10 17.5 11 16 11 16M9 14C9 14 10.1 9.90001 12.5 7.50001C15.5 4.50001 20.5 4.50001 20.5 4.50001C20.5 4.50001 20.5 9.5 17.5 12.5C15.7492 14.2508 11 16 11 16L9 14ZM16.5 10C16.5 10.8284 15.8284 11.5 15 11.5C14.1716 11.5 13.5 10.8284 13.5 10C13.5 9.17157 14.1716 8.5 15 8.5C15.8284 8.5 16.5 9.17157 16.5 10Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var SearchIcon = (0, import_react5.forwardRef)(function SearchIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "search",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M14.0355 14.0355L20 20M15.5 10.5C15.5 13.2614 13.2614 15.5 10.5 15.5C7.73858 15.5 5.5 13.2614 5.5 10.5C5.5 7.73858 7.73858 5.5 10.5 5.5C13.2614 5.5 15.5 7.73858 15.5 10.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var SelectIcon = (0, import_react5.forwardRef)(function SelectIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "select",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M16.5 15.5L12.5 19.5L8.5 15.5M8.5 9.5L12.5 5.5L16.5 9.5",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var SortIcon = (0, import_react5.forwardRef)(function SortIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "sort",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M8.5 18.5V6M16.5 19V6.5M12 15L8.5 18.5L5 15M13 10L16.5 6.5L20 10",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var SpinnerIcon = (0, import_react5.forwardRef)(function SpinnerIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "spinner",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M4.5 12.5C4.5 16.9183 8.08172 20.5 12.5 20.5C16.9183 20.5 20.5 16.9183 20.5 12.5C20.5 8.08172 16.9183 4.5 12.5 4.5",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var SplitHorizontalIcon = (0, import_react5.forwardRef)(function SplitHorizontalIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "split-horizontal",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M19.5 10.5V20.5H5.5V10.5M19.5 10.5H5.5M19.5 10.5V4.5H5.5V10.5M12.5 13V15.5M12.5 18V15.5M12.5 15.5H15M12.5 15.5H10",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var SplitVerticalIcon = (0, import_react5.forwardRef)(function SplitVerticalIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "split-vertical",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M10.5 5.5V19.5M13 12.5H15.5M18 12.5H15.5M15.5 12.5V15M15.5 12.5V10M4.5 5.5H20.5V19.5H4.5V5.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var SquareIcon = (0, import_react5.forwardRef)(function SquareIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "square",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("rect", {
      x: 5.5,
      y: 5.5,
      width: 14,
      height: 14,
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var StackCompactIcon = (0, import_react5.forwardRef)(function StackCompactIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "stack-compact",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M5.5 15.5V18.5H19.5V15.5M5.5 15.5H19.5M5.5 15.5V9.5M19.5 15.5V9.5M5.5 9.5V6.5H19.5V9.5M5.5 9.5H19.5M5.5 12.5H19.5",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var StackIcon = (0, import_react5.forwardRef)(function StackIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "stack",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M5.5 12.5H19.5M5.5 18.5H19.5V6.5H5.5V18.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var StarIcon = (0, import_react5.forwardRef)(function StarIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "star",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M13 4L15.2747 9.8691L21.5595 10.2188L16.6806 14.1959L18.2901 20.2812L13 16.87L7.70993 20.2812L9.31941 14.1959L4.44049 10.2188L10.7253 9.8691L13 4Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var StopIcon = (0, import_react5.forwardRef)(function StopIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "stop",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("rect", {
      x: 7.5,
      y: 7.5,
      width: 10,
      height: 10,
      fill: "currentColor",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var StrikethroughIcon = (0, import_react5.forwardRef)(function StrikethroughIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "strikethrough",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12.5656 7.73438C11.0656 7.73438 10.0734 8.48438 10.0734 9.625C10.0734 10.2317 10.3649 10.6613 11.0519 11H8.90358C8.71703 10.6199 8.62813 10.1801 8.62813 9.67188C8.62813 7.75781 10.2297 6.46094 12.6125 6.46094C14.7922 6.46094 16.4172 7.75781 16.5344 9.57812H15.1203C14.925 8.42188 13.9719 7.73438 12.5656 7.73438ZM12.4875 18.2656C10.0969 18.2656 8.44844 17 8.3 15.0547H9.72188C9.89375 16.2344 11.0188 16.9844 12.6203 16.9844C14.1359 16.9844 15.2531 16.1641 15.2531 15.0469C15.2531 14.6375 15.1255 14.292 14.8589 14H16.5912C16.6638 14.266 16.6984 14.5566 16.6984 14.875C16.6984 16.9453 15.0656 18.2656 12.4875 18.2656ZM7 13.1H18V11.9H7V13.1Z",
      fill: "currentColor"
    })
  }));
});
var SunIcon = (0, import_react5.forwardRef)(function SunIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "sun",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M19 12.5H22M3 12.5H6M12.5 6V3M12.5 22V19M17.3891 7.61091L19.5104 5.48959M5.48959 19.5104L7.61091 17.3891M7.61091 7.61091L5.48959 5.48959M19.5104 19.5104L17.3891 17.3891M16 12.5C16 14.433 14.433 16 12.5 16C10.567 16 9 14.433 9 12.5C9 10.567 10.567 9 12.5 9C14.433 9 16 10.567 16 12.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var SyncIcon = (0, import_react5.forwardRef)(function SyncIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "sync",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: [/* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M13.5 4.5H12.5C8.08172 4.5 4.5 8.08172 4.5 12.5C4.5 15.6631 6.33576 18.3975 9 19.6958M11.5 20.5H12.5C16.9183 20.5 20.5 16.9183 20.5 12.5C20.5 9.33688 18.6642 6.60253 16 5.30423",
      stroke: "currentColor",
      strokeWidth: 1.2
    }), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M14 17.5619L11.5 20.5L14.5 23.0619M11 7.43811L13.5 4.50001L10.5 1.93811",
      stroke: "currentColor",
      strokeWidth: 1.2
    })]
  }));
});
var TagIcon = (0, import_react5.forwardRef)(function TagIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "tag",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: [/* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M12.5 20L5 20L5 12.5L12.5 5L20 12.5L12.5 20Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    }), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M11 15.5C11 16.3284 10.3284 17 9.5 17C8.67157 17 8 16.3284 8 15.5C8 14.6716 8.67157 14 9.5 14C10.3284 14 11 14.6716 11 15.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    })]
  }));
});
var TerminalIcon = (0, import_react5.forwardRef)(function TerminalIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "terminal",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M8.5 9.5L11.5 12.5L8.5 15.5M13 15.5H17M5.5 6.5H19.5V18.5H5.5V6.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var ThLargeIcon = (0, import_react5.forwardRef)(function ThLargeIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "th-large",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M12.5 6.5V12.5M12.5 12.5V18.5M12.5 12.5H20.5M12.5 12.5H4.5M4.5 6.5H20.5V18.5H4.5V6.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var ThListIcon2 = (0, import_react5.forwardRef)(function ThListIcon22(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "th-list",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M9.5 6.5V10.5M9.5 10.5V14.5M9.5 10.5H20.5M9.5 10.5H4.5M9.5 14.5V18.5M9.5 14.5H20.5M9.5 14.5H4.5M4.5 6.5H20.5V18.5H4.5V6.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var TiersIcon = (0, import_react5.forwardRef)(function TiersIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "tiers",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: [/* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M16.5 14.5L20.5 16.5L12.5 20.5L4.5 16.5L8.5 14.5",
      stroke: "currentColor",
      strokeWidth: 1.2
    }), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M16.5 10.5L20.5 12.5L12.5 16.5L4.5 12.5L8.5 10.5",
      stroke: "currentColor",
      strokeWidth: 1.2
    }), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M20.5 8.5L12.5 12.5L4.5 8.5L12.5 4.5L20.5 8.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    })]
  }));
});
var ToggleArrowRightIcon = (0, import_react5.forwardRef)(function ToggleArrowRightIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "toggle-arrow-right",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M10 16.5V8.5L16 12.5L10 16.5Z",
      fill: "currentColor"
    })
  }));
});
var TokenIcon = (0, import_react5.forwardRef)(function TokenIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "token",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M17.5711 12.5C17.5711 15.2614 15.3325 17.5 12.5711 17.5M7.57107 12.5C7.57107 9.73858 9.80964 7.5 12.5711 7.5M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var TransferIcon = (0, import_react5.forwardRef)(function TransferIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "transfer",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: [/* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M19.5 16.5H6M5.5 8.5L19 8.5",
      stroke: "currentColor",
      strokeWidth: 1.2
    }), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M16 13L19.5 16.5L16 20M9 12L5.5 8.5L9 5",
      stroke: "currentColor",
      strokeWidth: 1.2
    })]
  }));
});
var TranslateIcon = (0, import_react5.forwardRef)(function TranslateIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "translate",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M9.4 5.4H4V6.6H13.2189C13.1612 6.78478 13.0895 6.99578 13.0025 7.22211C12.7032 8.00031 12.2402 8.91125 11.5757 9.57574L10 11.1515L9.42426 10.5757C8.72102 9.8725 8.25297 9.16987 7.96199 8.64611C7.81668 8.38455 7.71617 8.16874 7.65305 8.02146C7.62151 7.94787 7.59937 7.89154 7.5857 7.85534C7.57886 7.83725 7.57415 7.8242 7.57144 7.81657L7.56886 7.80922C7.56886 7.80922 7.56921 7.81026 7 8C6.43079 8.18974 6.43091 8.19009 6.43091 8.19009L6.43133 8.19135L6.43206 8.19351L6.4341 8.19948L6.44052 8.21786C6.44587 8.23292 6.45336 8.25357 6.46313 8.27942C6.48266 8.33112 6.5113 8.40369 6.55008 8.49416C6.62758 8.67501 6.74582 8.92795 6.91301 9.22889C7.24703 9.83013 7.77898 10.6275 8.57574 11.4243L9.15147 12L4.57964 16.5718L4.57655 16.5749L4.57577 16.5757L5.4243 17.4242L5.42688 17.4216L10.0368 12.8117L12.6159 14.9609L13.3841 14.0391L10.8888 11.9597L12.4243 10.4243C13.2598 9.58875 13.7968 8.49969 14.1225 7.65289C14.2818 7.23863 14.395 6.87072 14.4696 6.6H16V5.4H10.6V4H9.4V5.4ZM17.4405 10L21.553 19.7672H20.2509L19.1279 17.1H14.8721L13.7491 19.7672H12.447L16.5595 10H17.4405ZM15.3773 15.9H18.6227L17 12.0462L15.3773 15.9Z",
      fill: "currentColor"
    })
  }));
});
var TrashIcon = (0, import_react5.forwardRef)(function TrashIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "trash",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M5 6.5H20M10 6.5V4.5C10 3.94772 10.4477 3.5 11 3.5H14C14.5523 3.5 15 3.94772 15 4.5V6.5M12.5 9V17M15.5 9L15 17M9.5 9L10 17M18.5 6.5L17.571 18.5767C17.5309 19.0977 17.0965 19.5 16.574 19.5H8.42603C7.90349 19.5 7.46905 19.0977 7.42898 18.5767L6.5 6.5H18.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var TrendUpwardIcon = (0, import_react5.forwardRef)(function TrendUpwardIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "trend-upward",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: [/* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M4.5 18.5L11.5 10.5L13.5 14.5L20.5 6.5",
      stroke: "currentColor",
      strokeWidth: 1.2
    }), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M20.5 11V6.5H16",
      stroke: "currentColor",
      strokeWidth: 1.2
    })]
  }));
});
var TriangleOutlineIcon = (0, import_react5.forwardRef)(function TriangleOutlineIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "triangle-outline",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M20.5 18.5H4.5L12.5 5.5L20.5 18.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var TrolleyIcon = (0, import_react5.forwardRef)(function TrolleyIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "trolley",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M8 17.5L5.81763 6.26772C5.71013 5.81757 5.30779 5.5 4.84498 5.5H3M8 17.5H17M8 17.5C8.82843 17.5 9.5 18.1716 9.5 19C9.5 19.8284 8.82843 20.5 8 20.5C7.17157 20.5 6.5 19.8284 6.5 19C6.5 18.1716 7.17157 17.5 8 17.5ZM17 17.5C17.8284 17.5 18.5 18.1716 18.5 19C18.5 19.8284 17.8284 20.5 17 20.5C16.1716 20.5 15.5 19.8284 15.5 19C15.5 18.1716 16.1716 17.5 17 17.5ZM7.78357 14.5H17.5L19 7.5H6",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var TruncateIcon = (0, import_react5.forwardRef)(function TruncateIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "truncate",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M5 12.5H20M8.5 19.5L12.5 15.5L16.5 19.5M16.5 5.5L12.5 9.5L8.5 5.5",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var UlistIcon = (0, import_react5.forwardRef)(function UlistIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "ulist",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M10 7.5H19M10 17.5H19M10 12.5H19M7.10153 17.5001C7.10153 17.8323 6.83221 18.1016 6.5 18.1016C6.16778 18.1016 5.89847 17.8323 5.89847 17.5001C5.89847 17.1678 6.16778 16.8985 6.5 16.8985C6.83221 16.8985 7.10153 17.1678 7.10153 17.5001ZM7.10153 7.5C7.10153 7.83221 6.83221 8.10153 6.5 8.10153C6.16778 8.10153 5.89847 7.83221 5.89847 7.5C5.89847 7.16778 6.16778 6.89847 6.5 6.89847C6.83221 6.89847 7.10153 7.16778 7.10153 7.5ZM7.10153 12.5C7.10153 12.8322 6.83221 13.1015 6.5 13.1015C6.16778 13.1015 5.89847 12.8322 5.89847 12.5C5.89847 12.1678 6.16778 11.8985 6.5 11.8985C6.83221 11.8985 7.10153 12.1678 7.10153 12.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var UnderlineIcon = (0, import_react5.forwardRef)(function UnderlineIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "underline",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M8.17 7.11409H9.52791V14.1677C9.52791 15.8123 10.6067 17.0042 12.4927 17.0042C14.3787 17.0042 15.4574 15.8123 15.4574 14.1677V7.11409H16.8154V14.2582C16.8154 16.5817 15.1934 18.2565 12.4927 18.2565C9.79195 18.2565 8.17 16.5817 8.17 14.2582V7.11409ZM7 21.1H18V19.9H7V21.1Z",
      fill: "currentColor"
    })
  }));
});
var UndoIcon2 = (0, import_react5.forwardRef)(function UndoIcon22(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "undo",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: [/* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M5.88468 17C7.32466 19.1128 9.75033 20.5 12.5 20.5C16.9183 20.5 20.5 16.9183 20.5 12.5C20.5 8.08172 16.9183 4.5 12.5 4.5C8.08172 4.5 4.5 8.08172 4.5 12.5V13.5",
      stroke: "currentColor",
      strokeWidth: 1.2
    }), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M7 11L4.5 13.5L2 11",
      stroke: "currentColor",
      strokeWidth: 1.2
    })]
  }));
});
var UnknownIcon = (0, import_react5.forwardRef)(function UnknownIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "unknown",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M12.5 13C12.5 11 14 11.5 14 10C14 9.34375 13.5 8.5 12.5 8.5C11.5 8.5 11 9 10.5 9.5M12.5 16V14.5M5.5 5.5H19.5V19.5H5.5V5.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var UnlockIcon = (0, import_react5.forwardRef)(function UnlockIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "unlock",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: [/* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M7.5 11.5H17.5V19.5H7.5V11.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    }), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M3.5 11.5V8.5C3.5 6.5 5 5.5 6.5 5.5C8 5.5 9.5 6.5 9.5 8.5V11.5",
      stroke: "currentColor",
      strokeWidth: 1.2
    })]
  }));
});
var UnpublishIcon = (0, import_react5.forwardRef)(function UnpublishIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "unpublish",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: [/* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M5 19.5H20M12.5 16V4.99998",
      stroke: "currentColor",
      strokeWidth: 1.2
    }), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M17.5 11L12.5 16L7.5 11",
      stroke: "currentColor",
      strokeWidth: 1.2
    })]
  }));
});
var UploadIcon = (0, import_react5.forwardRef)(function UploadIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "upload",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: [/* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M12.5 6.00003V15.5M5.5 15.5H19.5V19.5H5.5V15.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    }), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M7.5 11L12.5 6.00003L17.5 11",
      stroke: "currentColor",
      strokeWidth: 1.2
    })]
  }));
});
var UserIcon = (0, import_react5.forwardRef)(function UserIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "user",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M8 14.5C7 15 5.5 16 5.5 19.5H19.5C19.5 16 18.3416 15.1708 17 14.5C16 14 14 14 14 12.5C14 11 15 10.25 15 8.25C15 6.25 14 5.25 12.5 5.25C11 5.25 10 6.25 10 8.25C10 10.25 11 11 11 12.5C11 14 9 14 8 14.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var UsersIcon = (0, import_react5.forwardRef)(function UsersIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "users",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M17.5 18.5H21.5C21.5 15 20.8416 14.1708 19.5 13.5C18.5 13 16.5 12.5 16.5 11C16.5 9.5 17.5 9 17.5 7C17.5 5 16.5 4 15 4C13.6628 4 12.723 4.79472 12.5347 6.38415M4.5 20.5C4.5 17 5.5 16 6.5 15.5C7.5 15 9.5 14.5 9.5 13C9.5 11.5 8.5 11 8.5 9C8.5 7 9.5 6 11 6C12.5 6 13.5 7 13.5 9C13.5 11 12.5 11.5 12.5 13C12.5 14.5 14.5 15 15.5 15.5C16.8416 16.1708 17.5 17 17.5 20.5H4.5Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var WarningFilledIcon = (0, import_react5.forwardRef)(function WarningFilledIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "warning-filled",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M14.7728 5.35558C13.7822 3.57248 11.2178 3.57247 10.2272 5.35558L3.62622 17.2373C2.66345 18.9703 3.91657 21.1 5.89903 21.1H19.101C21.0834 21.1 22.3365 18.9703 21.3738 17.2373L14.7728 5.35558ZM13 16V17.5H12V16H13ZM12 10.4999V14.5H13V10.4999H12Z",
      fill: "currentColor"
    })
  }));
});
var WarningOutlineIcon = (0, import_react5.forwardRef)(function WarningOutlineIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", _objectSpread(_objectSpread({
    "data-sanity-icon": "warning-outline",
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref
  }, props), {}, {
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", {
      d: "M12.5 10V14M12.5 17V15.5M14.2483 5.64697L20.8493 17.5287C21.5899 18.8618 20.6259 20.5 19.101 20.5H5.89903C4.37406 20.5 3.41013 18.8618 4.15072 17.5287L10.7517 5.64697C11.5137 4.27535 13.4863 4.27535 14.2483 5.64697Z",
      stroke: "currentColor",
      strokeWidth: 1.2
    })
  }));
});
var icons = {
  "access-denied": AccessDeniedIcon,
  activity: ActivityIcon,
  "add-circle": AddCircleIcon,
  add: AddIcon,
  api: ApiIcon,
  archive: ArchiveIcon,
  "arrow-down": ArrowDownIcon,
  "arrow-left": ArrowLeftIcon,
  "arrow-right": ArrowRightIcon,
  "arrow-top-right": ArrowTopRightIcon,
  "arrow-up": ArrowUpIcon,
  "bar-chart": BarChartIcon,
  basket: BasketIcon,
  bell: BellIcon,
  bill: BillIcon,
  "binary-document": BinaryDocumentIcon,
  "block-element": BlockElementIcon,
  blockquote: BlockquoteIcon,
  bold: BoldIcon,
  book: BookIcon,
  bottle: BottleIcon,
  "bulb-filled": BulbFilledIcon,
  "bulb-outline": BulbOutlineIcon,
  calendar: CalendarIcon,
  case: CaseIcon,
  "chart-upward": ChartUpwardIcon,
  "checkmark-circle": CheckmarkCircleIcon,
  checkmark: CheckmarkIcon,
  "chevron-down": ChevronDownIcon,
  "chevron-left": ChevronLeftIcon,
  "chevron-right": ChevronRightIcon,
  "chevron-up": ChevronUpIcon,
  circle: CircleIcon,
  clipboard: ClipboardIcon,
  "clipboard-image": ClipboardImageIcon,
  clock: ClockIcon,
  "close-circle": CloseCircleIcon,
  close: CloseIcon,
  "code-block": CodeBlockIcon,
  code: CodeIcon,
  cog: CogIcon,
  collapse: CollapseIcon,
  comment: CommentIcon,
  component: ComponentIcon,
  compose: ComposeIcon2,
  controls: ControlsIcon,
  copy: CopyIcon2,
  "credit-card": CreditCardIcon,
  crop: CropIcon,
  dashboard: DashboardIcon,
  database: DatabaseIcon,
  desktop: DesktopIcon,
  document: DocumentIcon,
  "document-pdf": DocumentPdfIcon,
  "document-remove": DocumentRemoveIcon,
  "document-sheet": DocumentSheetIcon,
  "document-text": DocumentTextIcon,
  "document-video": DocumentVideoIcon,
  "document-word": DocumentWordIcon,
  "document-zip": DocumentZipIcon,
  documents: DocumentsIcon,
  dot: DotIcon,
  "double-chevron-down": DoubleChevronDownIcon,
  "double-chevron-left": DoubleChevronLeftIcon,
  "double-chevron-right": DoubleChevronRightIcon,
  "double-chevron-up": DoubleChevronUpIcon,
  download: DownloadIcon,
  "drag-handle": DragHandleIcon,
  drop: DropIcon,
  "earth-americas": EarthAmericasIcon,
  "earth-globe": EarthGlobeIcon,
  edit: EditIcon,
  "ellipsis-horizontal": EllipsisHorizontalIcon,
  "ellipsis-vertical": EllipsisVerticalIcon,
  envelope: EnvelopeIcon,
  equal: EqualIcon,
  "error-filled": ErrorFilledIcon,
  "error-outline": ErrorOutlineIcon,
  expand: ExpandIcon,
  "eye-closed": EyeClosedIcon,
  "eye-open": EyeOpenIcon2,
  filter: FilterIcon,
  folder: FolderIcon,
  generate: GenerateIcon,
  "heart-filled": HeartFilledIcon,
  heart: HeartIcon,
  "help-circle": HelpCircleIcon,
  home: HomeIcon,
  "ice-cream": IceCreamIcon,
  image: ImageIcon,
  "image-remove": ImageRemoveIcon,
  images: ImagesIcon,
  "info-filled": InfoFilledIcon,
  "info-outline": InfoOutlineIcon,
  "inline-element": InlineElementIcon,
  inline: InlineIcon,
  "insert-above": InsertAboveIcon,
  "insert-below": InsertBelowIcon,
  italic: ItalicIcon,
  joystick: JoystickIcon,
  launch: LaunchIcon,
  leave: LeaveIcon2,
  lemon: LemonIcon,
  link: LinkIcon,
  "link-removed": LinkRemovedIcon,
  lock: LockIcon,
  "logo-js": LogoJsIcon,
  "logo-ts": LogoTsIcon,
  "master-detail": MasterDetailIcon,
  menu: MenuIcon2,
  "mobile-device": MobileDeviceIcon2,
  moon: MoonIcon,
  "ok-hand": OkHandIcon,
  olist: OlistIcon,
  overage: OverageIcon,
  package: PackageIcon,
  pause: PauseIcon,
  pin: PinIcon,
  "pin-removed": PinRemovedIcon,
  play: PlayIcon,
  plug: PlugIcon,
  presentation: PresentationIcon,
  publish: PublishIcon,
  "read-only": ReadOnlyIcon,
  "remove-circle": RemoveCircleIcon,
  remove: RemoveIcon,
  reset: ResetIcon,
  restore: RestoreIcon,
  retrieve: RetrieveIcon,
  revert: RevertIcon,
  robot: RobotIcon,
  rocket: RocketIcon,
  search: SearchIcon,
  select: SelectIcon,
  sort: SortIcon,
  spinner: SpinnerIcon,
  "split-horizontal": SplitHorizontalIcon,
  "split-vertical": SplitVerticalIcon,
  square: SquareIcon,
  "stack-compact": StackCompactIcon,
  stack: StackIcon,
  star: StarIcon,
  stop: StopIcon,
  strikethrough: StrikethroughIcon,
  sun: SunIcon,
  sync: SyncIcon,
  tag: TagIcon,
  terminal: TerminalIcon,
  "th-large": ThLargeIcon,
  "th-list": ThListIcon2,
  tiers: TiersIcon,
  "toggle-arrow-right": ToggleArrowRightIcon,
  token: TokenIcon,
  transfer: TransferIcon,
  translate: TranslateIcon,
  trash: TrashIcon,
  "trend-upward": TrendUpwardIcon,
  "triangle-outline": TriangleOutlineIcon,
  trolley: TrolleyIcon,
  truncate: TruncateIcon,
  ulist: UlistIcon,
  underline: UnderlineIcon,
  undo: UndoIcon2,
  unknown: UnknownIcon,
  unlock: UnlockIcon,
  unpublish: UnpublishIcon,
  upload: UploadIcon,
  user: UserIcon,
  users: UsersIcon,
  "warning-filled": WarningFilledIcon,
  "warning-outline": WarningOutlineIcon
};
var Icon = (0, import_react5.forwardRef)(function Icon2(props, ref) {
  const {
    symbol
  } = props, restProps = _objectWithoutProperties(props, _excluded);
  const iconComponent = icons[symbol];
  if (!iconComponent) {
    return null;
  }
  return (0, import_react5.createElement)(iconComponent, _objectSpread(_objectSpread({}, restProps), {}, {
    ref
  }));
});

// node_modules/sanity-plugin-vercel-deploy/dist/index.esm.js
var deployIcon = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("svg", {
    "data-sanity-icon": "true",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    preserveAspectRatio: "xMidYMid",
    width: "1em",
    height: "1em",
    children: [/* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", {
      d: "M10.06,19.53H4.27L12.5,5.21l8.23,14.32H14.94",
      style: {
        stroke: "currentColor",
        strokeWidth: "1.2"
      }
    }), /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", {
      d: "M12.5,12.58v7.51",
      style: {
        stroke: "currentColor",
        strokeWidth: "1.2"
      }
    }), /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", {
      d: "M15.12,16.76,12.5,12.58,10,16.71",
      style: {
        stroke: "currentColor",
        strokeWidth: "1.2"
      }
    })]
  });
};
var DeployStatus = (_ref) => {
  let {
    status,
    justify,
    children
  } = _ref;
  const titleCase = (str) => {
    return str.toLowerCase().split(" ").map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
  };
  const badgeTone = {
    LOADING: "default",
    ERROR: "critical",
    INITIATED: "default",
    CANCELED: "default",
    READY: "positive",
    BUILDING: "caution",
    QUEUED: "default"
  }[status] || "default";
  const badgeMode = {
    LOADING: "outline",
    READY: "outline",
    CANCELED: "outline"
  }[status] || "default";
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(Flex, {
    wrap: "nowrap",
    align: "center",
    justify,
    children: [/* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Badge, {
      mode: badgeMode,
      tone: badgeTone,
      padding: 2,
      fontSize: 1,
      children: titleCase(status)
    }), children]
  });
};
var DeployHistory = (_ref2) => {
  let {
    url,
    vercelProject,
    vercelToken,
    vercelTeam
  } = _ref2;
  var _a2;
  const [deployments, setDeployments] = (0, import_react6.useState)([]);
  const [loading, setLoading] = (0, import_react6.useState)(false);
  const [error, setError] = (0, import_react6.useState)(false);
  const deployHookId = (_a2 = url == null ? void 0 : url.split("/").pop()) == null ? void 0 : _a2.split("?").shift();
  (0, import_react6.useEffect)(() => {
    if (!vercelProject) {
      return;
    }
    setLoading(true);
    import_axios.default.get("https://api.vercel.com/v5/now/deployments?projectId=".concat(vercelProject, "&meta-deployHookId=").concat(deployHookId, "&limit=6").concat((vercelTeam == null ? void 0 : vercelTeam.id) ? "&teamId=".concat(vercelTeam == null ? void 0 : vercelTeam.id) : ""), {
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer ".concat(vercelToken)
      }
    }).then((_ref3) => {
      let {
        data
      } = _ref3;
      setDeployments(data.deployments);
      setLoading(false);
      setError(false);
    }).catch((e3) => {
      setLoading(false);
      setError(true);
      console.warn(e3);
    });
  }, [url, vercelProject, vercelTeam == null ? void 0 : vercelTeam.id, vercelToken]);
  if (loading) {
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(Flex, {
      direction: "column",
      align: "center",
      justify: "center",
      paddingTop: 3,
      children: [/* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Spinner, {
        size: 4
      }), /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Box, {
        padding: 4,
        children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Text, {
          size: 2,
          children: "loading deployment history..."
        })
      })]
    });
  }
  if (error) {
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Card, {
      padding: 4,
      radius: 2,
      shadow: 1,
      tone: "critical",
      children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(Text, {
        size: 2,
        align: "center",
        children: ["Could not load deployments for ", vercelProject]
      })
    });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(Box, {
    as: "ul",
    padding: 0,
    children: [/* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Card, {
      as: "li",
      padding: 4,
      borderBottom: true,
      children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(Flex, {
        children: [/* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Box, {
          flex: 3,
          children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Label, {
            muted: true,
            children: "Preview URL"
          })
        }), /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Box, {
          flex: 1,
          marginLeft: 2,
          children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Label, {
            muted: true,
            children: "State"
          })
        }), /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Box, {
          flex: 3,
          marginLeft: 2,
          style: {
            maxWidth: "40%"
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Label, {
            muted: true,
            children: "Commit"
          })
        }), /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Box, {
          flex: 2,
          marginLeft: 2,
          children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Label, {
            align: "right",
            muted: true,
            children: "Deployed At"
          })
        })]
      })
    }), deployments == null ? void 0 : deployments.map((deployment) => {
      var _a22, _b, _c, _d, _e2;
      return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Card, {
        as: "li",
        padding: 4,
        borderBottom: true,
        children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(Flex, {
          align: "center",
          children: [/* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Box, {
            flex: 3,
            children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Text, {
              weight: "semibold",
              children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Box, {
                style: {
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                },
                children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("a", {
                  href: "https://".concat(deployment.url),
                  target: "_blank",
                  rel: "noopener noreferrer",
                  style: {
                    color: "inherit"
                  },
                  children: deployment.url
                })
              })
            })
          }), /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Box, {
            flex: 1,
            marginLeft: 2,
            children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Text, {
              children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(DeployStatus, {
                status: deployment.state
              })
            })
          }), /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Box, {
            flex: 3,
            marginLeft: 2,
            style: {
              maxWidth: "40%"
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(Stack, {
              space: 2,
              children: [/* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Text, {
                children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Box, {
                  style: {
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                  },
                  children: (_a22 = deployment.meta) == null ? void 0 : _a22.githubCommitMessage
                })
              }), /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Text, {
                size: 2,
                muted: true,
                children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(Inline, {
                  space: 3,
                  children: [/* @__PURE__ */ (0, import_jsx_runtime4.jsx)(TransferIcon, {}), (_b = deployment.meta) == null ? void 0 : _b.githubCommitRef]
                })
              })]
            })
          }), /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Flex, {
            flex: 2,
            justify: "flex-end",
            marginLeft: 2,
            children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(Inline, {
              space: 2,
              children: [/* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Text, {
                style: {
                  whiteSpace: "nowrap"
                },
                muted: true,
                children: Bt.now().since(Bt(deployment.created)).rounded
              }), /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Tooltip, {
                content: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Box, {
                  padding: 2,
                  children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Text, {
                    muted: true,
                    size: 1,
                    children: (_c = deployment.creator) == null ? void 0 : _c.username
                  })
                }),
                fallbackPlacements: ["right", "left"],
                placement: "top",
                children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Avatar, {
                  alt: (_d = deployment.creator) == null ? void 0 : _d.username,
                  src: "https://vercel.com/api/www/avatar/".concat((_e2 = deployment.creator) == null ? void 0 : _e2.uid, "?&s=48"),
                  size: 1
                })
              })]
            })
          })]
        })
      }, deployment.uid);
    })]
  });
};
var useClient2 = () => {
  return useClient({
    apiVersion: "2022-09-14"
  });
};
var fetcher = (url, token) => import_axios.default.get(url, {
  headers: {
    "content-type": "application/json",
    Authorization: "Bearer ".concat(token)
  }
}).then((res) => res.data);
var initialDeploy$1 = {
  title: "",
  project: "",
  team: "",
  url: "",
  token: "",
  disableDeleteAction: false
};
var DeployItem = (_ref4) => {
  let {
    name,
    url,
    _id,
    vercelProject,
    vercelToken,
    vercelTeam,
    disableDeleteAction
  } = _ref4;
  var _a2;
  const client = useClient2();
  const [isLoading, setIsLoading] = (0, import_react6.useState)(true);
  const [isDeploying, setDeploying] = (0, import_react6.useState)(false);
  const [isHistoryOpen, setIsHistoryOpen] = (0, import_react6.useState)(false);
  const [isSubmitting, setIsSubmitting] = (0, import_react6.useState)(false);
  const [isFormOpen, setIsFormOpen] = (0, import_react6.useState)(false);
  const [pendingDeploy, setpendingDeploy] = (0, import_react6.useState)(initialDeploy$1);
  const [errorMessage, setErrorMessage] = (0, import_react6.useState)(null);
  const [status, setStatus] = (0, import_react6.useState)("LOADING");
  const [timestamp, setTimestamp] = (0, import_react6.useState)(null);
  const [buildTime, setBuildTime] = (0, import_react6.useState)(null);
  const toast = useToast();
  const deployHookId = (_a2 = url == null ? void 0 : url.split("/").pop()) == null ? void 0 : _a2.split("?").shift();
  const {
    data: projectData
  } = useSWR(["https://api.vercel.com/v8/projects/".concat(vercelProject).concat((vercelTeam == null ? void 0 : vercelTeam.id) ? "?teamId=".concat(vercelTeam == null ? void 0 : vercelTeam.id) : ""), vercelToken], (path, token) => fetcher(path, token), {
    errorRetryCount: 3,
    onError: (err) => {
      var _a22, _b, _c;
      setStatus("ERROR");
      setErrorMessage((_c = (_b = (_a22 = err.response) == null ? void 0 : _a22.data) == null ? void 0 : _b.error) == null ? void 0 : _c.message);
      setIsLoading(false);
    }
  });
  const {
    data: deploymentData
  } = useSWR(() => ["https://api.vercel.com/v5/now/deployments?projectId=".concat(projectData.id, "&meta-deployHookId=").concat(deployHookId, "&limit=1").concat((vercelTeam == null ? void 0 : vercelTeam.id) ? "&teamId=".concat(vercelTeam == null ? void 0 : vercelTeam.id) : ""), vercelToken], (path, token) => fetcher(path, token), {
    errorRetryCount: 3,
    refreshInterval: isDeploying ? 5e3 : 0,
    onError: (err) => {
      var _a22, _b, _c;
      setStatus("ERROR");
      setErrorMessage((_c = (_b = (_a22 = err.response) == null ? void 0 : _a22.data) == null ? void 0 : _b.error) == null ? void 0 : _c.message);
      setIsLoading(false);
    }
  });
  const onDeploy = (_name, _url) => {
    setStatus("INITIATED");
    setDeploying(true);
    setTimestamp(null);
    setBuildTime(null);
    import_axios.default.post(url).then(() => {
      toast.push({
        status: "success",
        title: "Success!",
        description: "Triggered Deployment: ".concat(_name)
      });
    }).catch((err) => {
      setDeploying(false);
      toast.push({
        status: "error",
        title: "Deploy Failed.",
        description: "".concat(err)
      });
    });
  };
  const onCancel = (id, token) => {
    setIsLoading(true);
    import_axios.default.patch("https://api.vercel.com/v12/deployments/".concat(id, "/cancel"), null, {
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer ".concat(token)
      },
      params: {
        ...vercelTeam ? {
          teamId: vercelTeam == null ? void 0 : vercelTeam.id
        } : {}
      }
    }).then((res) => res.data).then((res) => {
      setStatus("CANCELED");
      setDeploying(false);
      setIsLoading(false);
      setBuildTime(null);
      setTimestamp(res.canceledAt);
    });
  };
  const onRemove = (_name, id) => {
    setIsLoading(true);
    client.delete(id).then(() => {
      toast.push({
        status: "success",
        title: "Successfully deleted deployment: ".concat(_name)
      });
    });
  };
  const onEdit = () => {
    setpendingDeploy({
      title: name,
      project: vercelProject,
      team: vercelTeam == null ? void 0 : vercelTeam.slug,
      url,
      token: vercelToken,
      disableDeleteAction
    });
    setIsFormOpen(true);
  };
  const onSubmitEdit = async () => {
    var _a22;
    let vercelTeamID;
    let vercelTeamName;
    setIsSubmitting(true);
    if (pendingDeploy.team) {
      try {
        const fetchTeam = await import_axios.default.get("https://api.vercel.com/v2/teams?slug=".concat(pendingDeploy.team), {
          headers: {
            Authorization: "Bearer ".concat(pendingDeploy.token)
          }
        });
        if (!((_a22 = fetchTeam == null ? void 0 : fetchTeam.data) == null ? void 0 : _a22.id)) {
          throw new Error("No team id found");
        }
        vercelTeamID = fetchTeam.data.id;
        vercelTeamName = fetchTeam.data.name;
      } catch (error) {
        console.error(error);
        setIsSubmitting(false);
        toast.push({
          status: "error",
          title: "No Team found!",
          closable: true,
          description: "Make sure the token you provided is valid and that the team\u2019s slug correspond to the one you see in Vercel"
        });
        return;
      }
    }
    client.patch(_id).set({
      name: pendingDeploy.title,
      url: pendingDeploy.url,
      vercelProject: pendingDeploy.project,
      vercelTeam: {
        slug: pendingDeploy.team || void 0,
        name: vercelTeamName || void 0,
        id: vercelTeamID || void 0
      },
      vercelToken: pendingDeploy.token,
      disableDeleteAction: pendingDeploy.disableDeleteAction
    }).commit().then(() => {
      toast.push({
        status: "success",
        title: "Success!",
        description: "Updated Deployment: ".concat(pendingDeploy.title)
      });
      setIsFormOpen(false);
      setIsSubmitting(false);
    });
  };
  (0, import_react6.useEffect)(() => {
    let isSubscribed = true;
    if ((deploymentData == null ? void 0 : deploymentData.deployments) && isSubscribed) {
      const latestDeployment = deploymentData.deployments[0];
      setStatus((latestDeployment == null ? void 0 : latestDeployment.state) || "READY");
      if (latestDeployment == null ? void 0 : latestDeployment.created) {
        setTimestamp(latestDeployment == null ? void 0 : latestDeployment.created);
      }
      setIsLoading(false);
    }
    return () => {
      isSubscribed = false;
    };
  }, [deploymentData]);
  (0, import_react6.useEffect)(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      if (status === "READY" || status === "ERROR" || status === "CANCELED") {
        setDeploying(false);
      } else if (status === "BUILDING" || status === "INITIATED") {
        setDeploying(true);
      }
    }
    return () => {
      isSubscribed = false;
    };
  }, [status]);
  const tick = (_timestamp) => {
    if (_timestamp) {
      setBuildTime(Bt.now().since(Bt(_timestamp)).rounded);
    }
  };
  (0, import_react6.useEffect)(() => {
    let isTicking = true;
    const timer = setInterval(() => {
      if (isTicking && isDeploying) {
        tick(timestamp);
      }
    }, 1e3);
    if (!isDeploying) {
      clearInterval(timer);
    }
    return () => {
      isTicking = false;
      clearInterval(timer);
    };
  }, [timestamp, isDeploying]);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, {
    children: [/* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(Flex, {
      wrap: "wrap",
      direction: ["column", "column", "row"],
      align: ["flex-end", "flex-end", "center"],
      children: [/* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Box, {
        flex: [4, 1],
        paddingBottom: [4, 4, 1],
        children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(Stack, {
          space: 3,
          children: [/* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(Inline, {
            space: 2,
            children: [/* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Heading, {
              as: "h2",
              size: 1,
              children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Text, {
                weight: "semibold",
                children: name
              })
            }), /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Badge, {
              tone: "primary",
              paddingX: 3,
              paddingY: 2,
              radius: 6,
              fontSize: 0,
              children: vercelProject
            }), (vercelTeam == null ? void 0 : vercelTeam.id) && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Badge, {
              mode: "outline",
              paddingX: 3,
              paddingY: 2,
              radius: 6,
              fontSize: 0,
              children: vercelTeam == null ? void 0 : vercelTeam.name
            })]
          }), /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Code, {
            size: 1,
            children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Box, {
              style: {
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis"
              },
              children: url
            })
          })]
        })
      }), /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Flex, {
        wrap: "nowrap",
        align: "center",
        marginLeft: [0, 0, 4],
        flex: [1, "none"],
        children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(Inline, {
          space: 2,
          children: [vercelToken && vercelProject && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Box, {
            marginRight: 2,
            children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(Stack, {
              space: 2,
              children: [/* @__PURE__ */ (0, import_jsx_runtime4.jsx)(DeployStatus, {
                status,
                justify: "flex-end",
                children: errorMessage && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Box, {
                  marginLeft: 2,
                  children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Tooltip, {
                    content: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Box, {
                      padding: 2,
                      children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Text, {
                        muted: true,
                        size: 1,
                        children: errorMessage
                      })
                    }),
                    placement: "top",
                    children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Badge, {
                      mode: "outline",
                      tone: "critical",
                      children: "?"
                    })
                  })
                })
              }), /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Text, {
                align: "right",
                size: 1,
                muted: true,
                children: isDeploying ? buildTime || "--" : timestamp ? Bt.now().since(Bt(timestamp)).rounded : "--"
              })]
            })
          }), /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Button, {
            type: "button",
            tone: "positive",
            disabled: isDeploying || isLoading,
            loading: isDeploying || isLoading,
            onClick: () => onDeploy(name),
            paddingX: [5],
            paddingY: [4],
            radius: 3,
            text: "Deploy"
          }), isDeploying && (status === "BUILDING" || status === "QUEUED") && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Button, {
            type: "button",
            tone: "critical",
            onClick: () => {
              onCancel(deploymentData.deployments[0].uid, vercelToken);
            },
            radius: 3,
            text: "Cancel"
          }), /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(MenuButton, {
            id: _id,
            button: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Button, {
              mode: "bleed",
              icon: EllipsisVerticalIcon,
              disabled: isDeploying || isLoading
            }),
            popover: {
              portal: true,
              placement: "bottom-end"
            },
            menu: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(Menu, {
              children: [/* @__PURE__ */ (0, import_jsx_runtime4.jsx)(MenuItem, {
                text: "History",
                icon: ClockIcon,
                onClick: () => setIsHistoryOpen(true),
                disabled: !(deploymentData == null ? void 0 : deploymentData.deployments.length)
              }), /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(MenuItem, {
                text: "Edit",
                icon: EditIcon,
                tone: "primary",
                onClick: () => onEdit()
              }), !disableDeleteAction && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(MenuItem, {
                text: "Delete",
                icon: TrashIcon,
                tone: "critical",
                onClick: () => onRemove(name, _id)
              })]
            })
          })]
        })
      })]
    }), isFormOpen && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Dialog, {
      header: "Edit Project Deployment",
      id: "update-webhook",
      width: 1,
      onClickOutside: () => setIsFormOpen(false),
      onClose: () => setIsFormOpen(false),
      footer: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Box, {
        padding: 3,
        children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(Grid, {
          columns: 2,
          gap: 3,
          children: [/* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Button, {
            padding: 4,
            mode: "ghost",
            text: "Cancel",
            onClick: () => setIsFormOpen(false)
          }), /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Button, {
            padding: 4,
            text: "Update",
            tone: "primary",
            loading: isSubmitting,
            onClick: () => onSubmitEdit(),
            disabled: isSubmitting || !pendingDeploy.project || !pendingDeploy.url || !pendingDeploy.token
          })]
        })
      }),
      children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Box, {
        padding: 4,
        children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(Stack, {
          space: 4,
          children: [/* @__PURE__ */ (0, import_jsx_runtime4.jsx)(FormField, {
            title: "Display Title (internal use only)",
            description: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, {
              children: ["This should be the environment you are deploying to, like", " ", /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("em", {
                children: "Production"
              }), " or ", /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("em", {
                children: "Staging"
              })]
            }),
            children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(TextInput, {
              type: "text",
              value: pendingDeploy.title,
              onChange: (e3) => {
                e3.persist();
                const title = e3.target.value;
                setpendingDeploy((prevState) => ({
                  ...prevState,
                  ...{
                    title
                  }
                }));
              }
            })
          }), /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(FormField, {
            title: "Vercel Project Name",
            description: 'Vercel Project: Settings \u2192 General \u2192 "Project Name"',
            children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(TextInput, {
              type: "text",
              value: pendingDeploy.project,
              onChange: (e3) => {
                e3.persist();
                const project = e3.target.value;
                setpendingDeploy((prevState) => ({
                  ...prevState,
                  ...{
                    project
                  }
                }));
              }
            })
          }), /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(FormField, {
            title: "Vercel Team Name",
            description: 'Required for projects under a Vercel Team: Settings \u2192 General \u2192 "Team Name"',
            children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(TextInput, {
              type: "text",
              value: pendingDeploy.team,
              onChange: (e3) => {
                e3.persist();
                const team = e3.target.value;
                setpendingDeploy((prevState) => ({
                  ...prevState,
                  ...{
                    team
                  }
                }));
              }
            })
          }), /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(FormField, {
            title: "Deploy Hook URL",
            description: 'Vercel Project: Settings \u2192 Git \u2192 "Deploy Hooks"',
            children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(TextInput, {
              type: "text",
              inputMode: "url",
              value: pendingDeploy.url,
              onChange: (e3) => {
                e3.persist();
                const pendingDeployUrl = e3.target.value;
                setpendingDeploy((prevState) => ({
                  ...prevState,
                  ...{
                    url: pendingDeployUrl
                  }
                }));
              }
            })
          }), /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(FormField, {
            children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Card, {
              paddingY: 3,
              children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(Flex, {
                align: "center",
                children: [/* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Switch, {
                  id: "disableDeleteAction",
                  style: {
                    display: "block"
                  },
                  onChange: (e3) => {
                    e3.persist();
                    const isChecked = e3.target.checked;
                    setpendingDeploy((prevState) => ({
                      ...prevState,
                      ...{
                        disableDeleteAction: isChecked
                      }
                    }));
                  },
                  checked: pendingDeploy.disableDeleteAction
                }), /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Box, {
                  flex: 1,
                  paddingLeft: 3,
                  children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Text, {
                    children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("label", {
                      htmlFor: "disableDeleteAction",
                      children: 'Disable the "Delete" action for this item in production?'
                    })
                  })
                })]
              })
            })
          })]
        })
      })
    }), isHistoryOpen && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Dialog, {
      id: "deploy-history",
      header: "Deployment History: ".concat(name),
      onClickOutside: () => setIsHistoryOpen(false),
      onClose: () => setIsHistoryOpen(false),
      width: 2,
      children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(DeployHistory, {
        url,
        vercelProject: projectData.id,
        vercelToken,
        vercelTeam
      })
    })]
  });
};
var initialDeploy = {
  title: "",
  project: "",
  team: "",
  url: "",
  token: "",
  disableDeleteAction: false
};
var VercelDeploy = () => {
  const WEBHOOK_TYPE = "webhook_deploy";
  const WEBHOOK_QUERY = '*[_type == "'.concat(WEBHOOK_TYPE, '"] | order(_createdAt)');
  const client = useClient2();
  const {
    scheme
  } = useColorScheme();
  const [isLoading, setIsLoading] = (0, import_react6.useState)(true);
  const [isSubmitting, setIsSubmitting] = (0, import_react6.useState)(false);
  const [isFormOpen, setIsFormOpen] = (0, import_react6.useState)(false);
  const [deploys, setDeploys] = (0, import_react6.useState)([]);
  const [pendingDeploy, setpendingDeploy] = (0, import_react6.useState)(initialDeploy);
  const toast = useToast();
  const onSubmit = async () => {
    var _a2;
    let vercelTeamID;
    let vercelTeamName;
    setIsSubmitting(true);
    if (pendingDeploy.team) {
      try {
        const fetchTeam = await import_axios.default.get("https://api.vercel.com/v2/teams?slug=".concat(pendingDeploy.team), {
          headers: {
            Authorization: "Bearer ".concat(pendingDeploy.token)
          }
        });
        if (!((_a2 = fetchTeam == null ? void 0 : fetchTeam.data) == null ? void 0 : _a2.id)) {
          throw new Error("No team id found");
        }
        vercelTeamID = fetchTeam.data.id;
        vercelTeamName = fetchTeam.data.name;
      } catch (error) {
        console.error(error);
        setIsSubmitting(false);
        toast.push({
          status: "error",
          title: "No Team found!",
          closable: true,
          description: "Make sure the token you provided is valid and that the team\u2019s slug correspond to the one you see in Vercel"
        });
        return;
      }
    }
    client.create({
      // Explicitly define an _id inside the vercel-deploy path to make sure it's not publicly accessible
      // This will protect users' tokens & project info. Read more: https://www.sanity.io/docs/ids
      _id: "vercel-deploy.".concat(nanoid()),
      _type: WEBHOOK_TYPE,
      name: pendingDeploy.title,
      url: pendingDeploy.url,
      vercelProject: pendingDeploy.project,
      vercelTeam: {
        slug: pendingDeploy.team || void 0,
        name: vercelTeamName || void 0,
        id: vercelTeamID || void 0
      },
      vercelToken: pendingDeploy.token,
      disableDeleteAction: pendingDeploy.disableDeleteAction
    }).then(() => {
      toast.push({
        status: "success",
        title: "Success!",
        description: "Created Deployment: ".concat(pendingDeploy.title)
      });
      setIsFormOpen(false);
      setIsSubmitting(false);
      setpendingDeploy(initialDeploy);
    });
  };
  (0, import_react6.useEffect)(() => {
    let webhookSubscription;
    client.fetch(WEBHOOK_QUERY).then((w3) => {
      setDeploys(w3);
      setIsLoading(false);
      webhookSubscription = client.listen(WEBHOOK_QUERY, {}, {
        includeResult: true
      }).subscribe({
        next: (res) => {
          if (res.type === "mutation") {
            const wasCreated = res.mutations.some((item) => Object.prototype.hasOwnProperty.call(item, "create"));
            const wasPatched = res.mutations.some((item) => Object.prototype.hasOwnProperty.call(item, "patch"));
            const wasDeleted = res.mutations.some((item) => Object.prototype.hasOwnProperty.call(item, "delete"));
            const filterDeploy = (deploy) => deploy._id !== res.documentId;
            const updateDeploy = (deploy) => deploy._id === res.documentId ? res.result : deploy;
            if (wasCreated) {
              setDeploys((prevState) => {
                if (res.result) {
                  return [...prevState, res.result];
                }
                return prevState;
              });
            }
            if (wasPatched) {
              setDeploys((prevState) => {
                const updatedDeploys = prevState.map(updateDeploy);
                return updatedDeploys;
              });
            }
            if (wasDeleted) {
              setDeploys((prevState) => prevState.filter(filterDeploy));
            }
          }
        }
      });
    });
    return () => {
      if (webhookSubscription) {
        webhookSubscription.unsubscribe();
      }
    };
  }, [WEBHOOK_QUERY, client]);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ThemeProvider, {
    theme: studioTheme,
    children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(ToastProvider, {
      children: [/* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Container, {
        display: "grid",
        width: 6,
        style: {
          minHeight: "100%"
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(Flex, {
          direction: "column",
          children: [/* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Card, {
            padding: 4,
            borderBottom: true,
            children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(Flex, {
              align: "center",
              children: [/* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(Flex, {
                flex: 1,
                align: "center",
                children: [/* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Card, {
                  children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("svg", {
                    fill: "currentColor",
                    viewBox: "0 0 512 512",
                    height: "2rem",
                    width: "2rem",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", {
                      d: "M256 48l240 416H16z"
                    })
                  })
                }), /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Card, {
                  marginX: 1,
                  style: {
                    opacity: 0.15
                  },
                  children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("svg", {
                    viewBox: "0 0 24 24",
                    width: "32",
                    height: "32",
                    stroke: "currentColor",
                    strokeWidth: "1",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    fill: "none",
                    shapeRendering: "geometricPrecision",
                    children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", {
                      d: "M16.88 3.549L7.12 20.451"
                    })
                  })
                }), /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Card, {
                  children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Text, {
                    as: "h1",
                    size: 2,
                    weight: "semibold",
                    children: "Vercel Deployments"
                  })
                })]
              }), /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Box, {
                children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Button, {
                  type: "button",
                  fontSize: 2,
                  tone: "primary",
                  padding: 3,
                  radius: 3,
                  text: "Add Project",
                  onClick: () => setIsFormOpen(true)
                })
              })]
            })
          }), /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Card, {
            flex: 1,
            children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Stack, {
              as: "ul",
              children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Card, {
                as: "li",
                padding: 4,
                children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(Flex, {
                  direction: "column",
                  align: "center",
                  justify: "center",
                  paddingTop: 3,
                  children: [/* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Spinner, {
                    size: 4
                  }), /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Box, {
                    padding: 4,
                    children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Text, {
                      size: 2,
                      children: "loading your deployments..."
                    })
                  })]
                })
              }) : deploys.length ? deploys.map((deploy) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Card, {
                as: "li",
                padding: 4,
                borderBottom: true,
                children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(DeployItem, {
                  name: deploy.name,
                  url: deploy.url,
                  _id: deploy._id,
                  vercelProject: deploy.vercelProject,
                  vercelTeam: deploy.vercelTeam,
                  vercelToken: deploy.vercelToken,
                  disableDeleteAction: deploy.disableDeleteAction
                }, deploy._id)
              }, deploy._id)) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Card, {
                as: "li",
                padding: 5,
                paddingTop: 6,
                children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(Flex, {
                  direction: "column",
                  align: "center",
                  justify: "center",
                  children: [/* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    width: "150",
                    viewBox: "0 0 260 235",
                    children: [/* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", {
                      fill: scheme === "dark" ? "transparent" : "white",
                      fillRule: "evenodd",
                      stroke: scheme === "dark" ? "white" : "black",
                      strokeDasharray: "4 4",
                      strokeWidth: "2",
                      d: "M107.36 2.48l105.7 185.47H2.66L108.35 2.48z",
                      clipRule: "evenodd"
                    }), /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("ellipse", {
                      cx: "182.68",
                      cy: "156.48",
                      fill: "transparent",
                      rx: "74.32",
                      ry: "74.52"
                    }), /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", {
                      stroke: scheme === "dark" ? "white" : "black",
                      strokeWidth: "2",
                      d: "M256.5 156.48c0 40.88-33.05 74.02-73.82 74.02-40.77 0-73.83-33.14-73.83-74.02 0-40.87 33.06-74.01 73.83-74.01 40.77 0 73.82 33.14 73.82 74.01z"
                    }), /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("mask", {
                      id: "a",
                      width: "149",
                      height: "150",
                      x: "108",
                      y: "81",
                      maskUnits: "userSpaceOnUse",
                      children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("ellipse", {
                        cx: "182.68",
                        cy: "156.48",
                        fill: "white",
                        rx: "74.32",
                        ry: "74.52"
                      })
                    }), /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("g", {
                      mask: "url(#a)",
                      children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", {
                        fill: scheme === "dark" ? "white" : "black",
                        fillRule: "evenodd",
                        d: "M108.36 2.48l105.7 185.47H2.66L108.35 2.48z",
                        clipRule: "evenodd"
                      })
                    })]
                  }), /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(Flex, {
                    direction: "column",
                    align: "center",
                    padding: 4,
                    children: [/* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Text, {
                      size: 3,
                      children: "No deployments created yet."
                    }), /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Box, {
                      padding: 4,
                      children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Button, {
                        fontSize: 3,
                        paddingX: 5,
                        paddingY: 4,
                        tone: "primary",
                        radius: 4,
                        text: "Add Project",
                        onClick: () => setIsFormOpen(true)
                      })
                    }), /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Text, {
                      size: 1,
                      weight: "semibold",
                      muted: true,
                      children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("a", {
                        href: "https://github.com/ndimatteo/sanity-plugin-vercel-deploy#-your-first-vercel-deployment",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        style: {
                          color: "inherit"
                        },
                        children: "Need help?"
                      })
                    })]
                  })]
                })
              })
            })
          })]
        })
      }), isFormOpen && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Dialog, {
        header: "New Project Deployment",
        id: "create-webhook",
        width: 1,
        onClickOutside: () => setIsFormOpen(false),
        onClose: () => setIsFormOpen(false),
        footer: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Box, {
          padding: 3,
          children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(Grid, {
            columns: 2,
            gap: 3,
            children: [/* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Button, {
              padding: 4,
              mode: "ghost",
              text: "Cancel",
              onClick: () => setIsFormOpen(false)
            }), /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Button, {
              padding: 4,
              text: "Create",
              tone: "primary",
              loading: isSubmitting,
              onClick: () => onSubmit(),
              disabled: isSubmitting || !pendingDeploy.project || !pendingDeploy.url || !pendingDeploy.token
            })]
          })
        }),
        children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Box, {
          padding: 4,
          children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(Stack, {
            space: 4,
            children: [/* @__PURE__ */ (0, import_jsx_runtime4.jsx)(FormField, {
              title: "Display Title (internal use only)",
              description: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, {
                children: ["This should be the environment you are deploying to, like", " ", /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("em", {
                  children: "Production"
                }), " or ", /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("em", {
                  children: "Staging"
                })]
              }),
              children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(TextInput, {
                type: "text",
                value: pendingDeploy.title,
                onChange: (e3) => {
                  e3.persist();
                  const title = e3.target.value;
                  setpendingDeploy((prevState) => ({
                    ...prevState,
                    ...{
                      title
                    }
                  }));
                }
              })
            }), /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(FormField, {
              title: "Vercel Project Name",
              description: 'Vercel Project: Settings \u2192 General \u2192 "Project Name"',
              children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(TextInput, {
                type: "text",
                value: pendingDeploy.project,
                onChange: (e3) => {
                  e3.persist();
                  const project = e3.target.value;
                  setpendingDeploy((prevState) => ({
                    ...prevState,
                    ...{
                      project
                    }
                  }));
                }
              })
            }), /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(FormField, {
              title: "Vercel Team Name",
              description: 'Required for projects under a Vercel Team: Settings \u2192 General \u2192 "Team Name"',
              children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(TextInput, {
                type: "text",
                value: pendingDeploy.team,
                onChange: (e3) => {
                  e3.persist();
                  const team = e3.target.value;
                  setpendingDeploy((prevState) => ({
                    ...prevState,
                    ...{
                      team
                    }
                  }));
                }
              })
            }), /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(FormField, {
              title: "Deploy Hook URL",
              description: 'Vercel Project: Settings \u2192 Git \u2192 "Deploy Hooks"',
              children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(TextInput, {
                type: "text",
                inputMode: "url",
                value: pendingDeploy.url,
                onChange: (e3) => {
                  e3.persist();
                  const url = e3.target.value;
                  setpendingDeploy((prevState) => ({
                    ...prevState,
                    ...{
                      url
                    }
                  }));
                }
              })
            }), /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(FormField, {
              title: "Vercel Token",
              description: 'Vercel Account dropdown: Settings \u2192 "Tokens"',
              children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(TextInput, {
                type: "text",
                value: pendingDeploy.token,
                onChange: (e3) => {
                  e3.persist();
                  const token = e3.target.value;
                  setpendingDeploy((prevState) => ({
                    ...prevState,
                    ...{
                      token
                    }
                  }));
                }
              })
            }), /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(FormField, {
              children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Card, {
                paddingY: 3,
                children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(Flex, {
                  align: "center",
                  children: [/* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Switch, {
                    id: "disableDeleteAction",
                    style: {
                      display: "block"
                    },
                    onChange: (e3) => {
                      e3.persist();
                      const isChecked = e3.target.checked;
                      setpendingDeploy((prevState) => ({
                        ...prevState,
                        ...{
                          disableDeleteAction: isChecked
                        }
                      }));
                    },
                    checked: pendingDeploy.disableDeleteAction
                  }), /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Box, {
                    flex: 1,
                    paddingLeft: 3,
                    children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Text, {
                      children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("label", {
                        htmlFor: "disableDeleteAction",
                        children: 'Disable the "Delete" action for this item in production?'
                      })
                    })
                  })]
                })
              })
            })]
          })
        })
      })]
    })
  });
};
var vercelDeployTool = definePlugin((options) => {
  const {
    name,
    title,
    icon,
    ...config2
  } = options || {};
  return {
    name: "sanity-plugin-vercel-deploy",
    tools: [{
      name: name || "vercel-deploy",
      title: title || "Deploy",
      icon: icon || deployIcon,
      component: VercelDeploy,
      options: config2,
      router: route.create("/*")
    }]
  };
});

// app/sanity/schema/index.ts
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/sanity/schema/artist.ts
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var artistType = defineType({
  name: "artist",
  title: "Artist",
  type: "document",
  icon: Users,
  fields: [
    defineField({
      name: "title",
      type: "string"
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title"
      }
    }),
    defineField({
      name: "image",
      type: "image",
      options: { hotspot: true }
    })
  ]
});

// app/sanity/schema/genre.ts
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var genreType = defineType({
  name: "genre",
  title: "Genre",
  type: "document",
  icon: Tags,
  fields: [
    defineField({
      name: "title",
      type: "string"
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title"
      }
    })
  ]
});

// app/sanity/schema/home.ts
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var homeType = defineType({
  name: "home",
  title: "Home",
  type: "document",
  icon: Home,
  fields: [
    defineField({
      name: "title",
      type: "string"
    }),
    defineField({
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
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var recordType = defineType({
  name: "record",
  title: "Record",
  type: "document",
  icon: Disc,
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
      icon: ThListIcon
    },
    {
      name: "editorial",
      title: "Editorial",
      icon: ComposeIcon
    },
    {
      name: "tracks",
      title: "Tracks",
      icon: MenuIcon
    }
  ],
  fields: [
    defineField({
      name: "title",
      type: "string",
      group: "details"
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title"
      },
      group: "details"
    }),
    defineField({
      name: "likes",
      type: "number",
      readOnly: true,
      fieldset: "rating"
    }),
    defineField({
      name: "dislikes",
      type: "number",
      readOnly: true,
      fieldset: "rating"
    }),
    defineField({
      name: "artist",
      type: "reference",
      to: [{ type: "artist" }],
      group: "details"
    }),
    defineField({
      name: "genres",
      type: "array",
      of: [{ type: "reference", to: { type: "genre" } }],
      group: "details"
    }),
    defineField({
      name: "content",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
      group: "editorial"
    }),
    defineField({
      name: "image",
      type: "image",
      options: { hotspot: true },
      group: "editorial"
    }),
    defineField({
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
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/sanity/components/Duration.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Duration(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { gap: 3, align: "center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { flex: 1, children: props.renderDefault(props) }, void 0, false, {
      fileName: "app/sanity/components/Duration.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    props.value ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Code, { size: 4, children: secondsToMinutes(props.value) }, void 0, false, {
      fileName: "app/sanity/components/Duration.tsx",
      lineNumber: 12,
      columnNumber: 9
    }, this) : null
  ] }, void 0, true, {
    fileName: "app/sanity/components/Duration.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/sanity/schema/track.ts
var trackType = defineType({
  name: "track",
  title: "Track",
  type: "object",
  fields: [
    defineField({
      name: "title",
      type: "string"
    }),
    defineField({
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
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// node_modules/sanity-plugin-iframe-pane/lib/index.esm.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
var import_react39 = __toESM(require_react());

// node_modules/usehooks-ts/dist/esm/index.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// node_modules/usehooks-ts/dist/esm/useBoolean/useBoolean.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react7 = __toESM(require_react());

// node_modules/usehooks-ts/dist/esm/useClickAnyWhere/useClickAnyWhere.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// node_modules/usehooks-ts/dist/esm/useCopyToClipboard/useCopyToClipboard.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react8 = __toESM(require_react());
var __awaiter2 = function(thisArg, _arguments, P2, generator) {
  function adopt(value) {
    return value instanceof P2 ? value : new P2(function(resolve) {
      resolve(value);
    });
  }
  return new (P2 || (P2 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e3) {
        reject(e3);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e3) {
        reject(e3);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
function useCopyToClipboard() {
  const [copiedText, setCopiedText] = (0, import_react8.useState)(null);
  const copy = (text) => __awaiter2(this, void 0, void 0, function* () {
    if (!(navigator === null || navigator === void 0 ? void 0 : navigator.clipboard)) {
      console.warn("Clipboard not supported");
      return false;
    }
    try {
      yield navigator.clipboard.writeText(text);
      setCopiedText(text);
      return true;
    } catch (error) {
      console.warn("Copy failed", error);
      setCopiedText(null);
      return false;
    }
  });
  return [copiedText, copy];
}
var useCopyToClipboard_default = useCopyToClipboard;

// node_modules/usehooks-ts/dist/esm/useCountdown/useCountdown.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react9 = __toESM(require_react());

// node_modules/usehooks-ts/dist/esm/useCounter/useCounter.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react10 = __toESM(require_react());

// node_modules/usehooks-ts/dist/esm/useDarkMode/useDarkMode.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// node_modules/usehooks-ts/dist/esm/useDebounce/useDebounce.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react11 = __toESM(require_react());

// node_modules/usehooks-ts/dist/esm/useDocumentTitle/useDocumentTitle.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// node_modules/usehooks-ts/dist/esm/useEffectOnce/useEffectOnce.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react12 = __toESM(require_react());

// node_modules/usehooks-ts/dist/esm/useElementSize/useElementSize.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react13 = __toESM(require_react());

// node_modules/usehooks-ts/dist/esm/useEventCallback/useEventCallback.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react14 = __toESM(require_react());

// node_modules/usehooks-ts/dist/esm/useEventListener/useEventListener.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react15 = __toESM(require_react());

// node_modules/usehooks-ts/dist/esm/useFetch/useFetch.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react16 = __toESM(require_react());

// node_modules/usehooks-ts/dist/esm/useHover/useHover.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react17 = __toESM(require_react());

// node_modules/usehooks-ts/dist/esm/useImageOnLoad/useImageOnLoad.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react18 = __toESM(require_react());

// node_modules/usehooks-ts/dist/esm/useIntersectionObserver/useIntersectionObserver.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react19 = __toESM(require_react());

// node_modules/usehooks-ts/dist/esm/useInterval/useInterval.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react20 = __toESM(require_react());

// node_modules/usehooks-ts/dist/esm/useIsClient/useIsClient.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react21 = __toESM(require_react());

// node_modules/usehooks-ts/dist/esm/useIsFirstRender/useIsFirstRender.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react22 = __toESM(require_react());

// node_modules/usehooks-ts/dist/esm/useIsMounted/useIsMounted.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react23 = __toESM(require_react());

// node_modules/usehooks-ts/dist/esm/useIsomorphicLayoutEffect/useIsomorphicLayoutEffect.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react24 = __toESM(require_react());

// node_modules/usehooks-ts/dist/esm/useLocalStorage/useLocalStorage.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react25 = __toESM(require_react());

// node_modules/usehooks-ts/dist/esm/useLockedBody/useLockedBody.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react26 = __toESM(require_react());

// node_modules/usehooks-ts/dist/esm/useMap/useMap.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react27 = __toESM(require_react());

// node_modules/usehooks-ts/dist/esm/useMediaQuery/useMediaQuery.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react28 = __toESM(require_react());

// node_modules/usehooks-ts/dist/esm/useOnClickOutside/useOnClickOutside.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// node_modules/usehooks-ts/dist/esm/useReadLocalStorage/useReadLocalStorage.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react29 = __toESM(require_react());

// node_modules/usehooks-ts/dist/esm/useScreen/useScreen.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react30 = __toESM(require_react());

// node_modules/usehooks-ts/dist/esm/useScript/useScript.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react31 = __toESM(require_react());

// node_modules/usehooks-ts/dist/esm/useSessionStorage/useSessionStorage.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react32 = __toESM(require_react());

// node_modules/usehooks-ts/dist/esm/useSsr/useSsr.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// node_modules/usehooks-ts/dist/esm/useStep/useStep.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react33 = __toESM(require_react());

// node_modules/usehooks-ts/dist/esm/useTernaryDarkMode/useTernaryDarkMode.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react34 = __toESM(require_react());

// node_modules/usehooks-ts/dist/esm/useTimeout/useTimeout.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react35 = __toESM(require_react());

// node_modules/usehooks-ts/dist/esm/useToggle/useToggle.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react36 = __toESM(require_react());

// node_modules/usehooks-ts/dist/esm/useUpdateEffect/useUpdateEffect.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react37 = __toESM(require_react());

// node_modules/usehooks-ts/dist/esm/useWindowSize/useWindowSize.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react38 = __toESM(require_react());

// node_modules/sanity-plugin-iframe-pane/lib/index.esm.js
function e2(e3, t3) {
  var n3 = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var i3 = Object.getOwnPropertySymbols(e3);
    t3 && (i3 = i3.filter(function(t4) {
      return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
    })), n3.push.apply(n3, i3);
  }
  return n3;
}
function t2(t3) {
  for (var i3 = 1; i3 < arguments.length; i3++) {
    var r3 = null != arguments[i3] ? arguments[i3] : {};
    i3 % 2 ? e2(Object(r3), true).forEach(function(e3) {
      n2(t3, e3, r3[e3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(r3)) : e2(Object(r3)).forEach(function(e3) {
      Object.defineProperty(t3, e3, Object.getOwnPropertyDescriptor(r3, e3));
    });
  }
  return t3;
}
function n2(e3, t3, n3) {
  return (t3 = function(e4) {
    var t4 = function(e5, t5) {
      if ("object" != typeof e5 || null === e5)
        return e5;
      var n4 = e5[Symbol.toPrimitive];
      if (void 0 !== n4) {
        var i3 = n4.call(e5, t5 || "default");
        if ("object" != typeof i3)
          return i3;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === t5 ? String : Number)(e5);
    }(e4, "string");
    return "symbol" == typeof t4 ? t4 : String(t4);
  }(t3)) in e3 ? Object.defineProperty(e3, t3, { value: n3, enumerable: true, configurable: true, writable: true }) : e3[t3] = n3, e3;
}
var O2 = { desktop: { width: "100%", height: "100%", maxHeight: "100%" }, mobile: { width: 414, height: "100%", maxHeight: 736 } };
var j2 = "desktop";
function w2(e3) {
  const { document: n3, options: w3 } = e3, { url: P2, defaultSize: k2 = j2, reload: S2, loader: x2, attributes: z2 = {}, showDisplayUrl: C2 = true } = w3, [D2, E2] = (0, import_react39.useState)(P2 && "string" == typeof P2 ? P2 : ""), [L2, B2] = (0, import_react39.useState)((null == O2 ? void 0 : O2[k2]) ? k2 : j2), [H2, N2] = (0, import_react39.useState)(false), R2 = (0, import_react39.useRef)(null), T2 = (0, import_react39.useRef)(null), { displayed: _2 } = n3, [, I2] = useCopyToClipboard_default();
  function U2() {
    (null == T2 ? void 0 : T2.current) && (T2.current.src = T2.current.src, N2(true));
  }
  return (0, import_react39.useEffect)(() => {
    ((null == S2 ? void 0 : S2.revision) || 0 == (null == S2 ? void 0 : S2.revision)) && setTimeout(() => {
      U2();
    }, Number(null == S2 ? void 0 : S2.revision));
  }, [_2._rev, null == S2 ? void 0 : S2.revision]), (0, import_react39.useEffect)(() => {
    "function" == typeof P2 && (async () => {
      N2(true);
      const e4 = "function" == typeof P2 ? await P2(_2) : "";
      e4 !== D2 && e4 && "string" == typeof e4 && E2(e4);
    })();
  }, [_2._rev]), D2 && "string" == typeof D2 ? (0, import_jsx_runtime5.jsxs)(ThemeProvider, { children: [(0, import_jsx_runtime5.jsx)("textarea", { style: { position: "absolute", pointerEvents: "none", opacity: 0 }, ref: R2, value: D2, readOnly: true, tabIndex: -1 }), (0, import_jsx_runtime5.jsxs)(Flex, { direction: "column", style: { height: "100%" }, children: [(0, import_jsx_runtime5.jsx)(Card, { padding: 2, borderBottom: true, children: (0, import_jsx_runtime5.jsxs)(Flex, { align: "center", gap: 2, children: [(0, import_jsx_runtime5.jsx)(Flex, { align: "center", gap: 1, children: (0, import_jsx_runtime5.jsx)(Button, { fontSize: [1], padding: 2, tone: "primary", mode: "mobile" === L2 ? "default" : "ghost", icon: MobileDeviceIcon, onClick: () => B2("mobile" === L2 ? "desktop" : "mobile") }) }), (0, import_jsx_runtime5.jsx)(Box, { flex: 1, children: C2 && (0, import_jsx_runtime5.jsx)(Text, { size: 0, textOverflow: "ellipsis", children: D2 }) }), (0, import_jsx_runtime5.jsxs)(Flex, { align: "center", gap: 1, children: [(null == S2 ? void 0 : S2.button) ? (0, import_jsx_runtime5.jsx)(Button, { fontSize: [1], padding: 2, icon: UndoIcon, title: "Reload", "aria-label": "Reload", onClick: () => U2() }) : null, (0, import_jsx_runtime5.jsx)(Button, { fontSize: [1], icon: CopyIcon, padding: [2], title: "Copy", "aria-label": "Copy", onClick: () => {
    var e4;
    (null == (e4 = null == R2 ? void 0 : R2.current) ? void 0 : e4.value) && I2(R2.current.value);
  } }), (0, import_jsx_runtime5.jsx)(Button, { fontSize: [1], icon: LeaveIcon, padding: [2], text: "Open", tone: "primary", onClick: () => window.open(D2) })] })] }) }), (0, import_jsx_runtime5.jsx)(Card, { tone: "transparent", padding: "mobile" === L2 ? 2 : 0, style: { height: "100%" }, children: (0, import_jsx_runtime5.jsxs)(Flex, { align: "center", justify: "center", style: { height: "100%", position: "relative" }, children: [x2 && H2 && (0, import_jsx_runtime5.jsx)(Flex, { justify: "center", align: "center", style: { inset: "0", position: "absolute" }, children: (0, import_jsx_runtime5.jsx)(Flex, { style: t2(t2({}, O2[L2]), {}, { backgroundColor: "rgba(0,0,0,0.2)" }), justify: "center", align: "center", children: (0, import_jsx_runtime5.jsx)(Card, { padding: 4, radius: 2, shadow: 1, children: (0, import_jsx_runtime5.jsxs)(Flex, { align: "center", direction: "column", gap: 3, height: "fill", justify: "center", children: [(0, import_jsx_runtime5.jsx)(Spinner, {}), x2 && "string" == typeof x2 && (0, import_jsx_runtime5.jsx)(Text, { size: 1, children: x2 })] }) }) }) }), (0, import_jsx_runtime5.jsx)("iframe", t2(t2({ ref: T2, title: "preview", style: O2[L2], frameBorder: "0", src: D2 }, z2), {}, { onLoad: function() {
    N2(false), z2.onLoad && "function" == typeof z2.onLoad && z2.onLoad();
  } }))] }) })] })] }) : (0, import_jsx_runtime5.jsx)(ThemeProvider, { children: (0, import_jsx_runtime5.jsx)(Flex, { padding: 5, align: "center", justify: "center", children: (0, import_jsx_runtime5.jsx)(Spinner, {}) }) });
}

// app/sanity/components/OGPreview.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react40 = __toESM(require_react());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function OGPreview({ document: document2, options }) {
  const { displayed } = document2;
  const url = import_react40.default.useMemo(() => options.url(displayed), [displayed, options]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    Flex,
    {
      height: "fill",
      direction: "column",
      align: "flex-start",
      padding: 5,
      gap: 5,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card, { shadow: 2, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Flex, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          "img",
          {
            src: url,
            alt: "OG Preview",
            width: OG_IMAGE_WIDTH,
            height: OG_IMAGE_HEIGHT,
            style: { width: `100%`, height: `auto` }
          },
          void 0,
          false,
          {
            fileName: "app/sanity/components/OGPreview.tsx",
            lineNumber: 20,
            columnNumber: 11
          },
          this
        ) }, void 0, false, {
          fileName: "app/sanity/components/OGPreview.tsx",
          lineNumber: 19,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "app/sanity/components/OGPreview.tsx",
          lineNumber: 18,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Code, { size: 0, children: url }, void 0, false, {
          fileName: "app/sanity/components/OGPreview.tsx",
          lineNumber: 29,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/sanity/components/OGPreview.tsx",
      lineNumber: 11,
      columnNumber: 5
    },
    this
  );
}

// app/sanity/structure/resolvePreviewUrl.ts
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/sanity/structure/getSecret.ts
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var SECRET_ID = `sanity.preview.secret`;
var query = (ttl) => groq`*[_id == $id && dateTime(_updatedAt) > dateTime(now()) - ${ttl}][0].secret`;
var tag = "preview.secret";
async function getSecret(client, id, createIfNotExists) {
  const secret = await client.fetch(
    // Use a TTL of 1 hour when reading the secret, while using a 30min expiry if `createIfNotExists` is defined to avoid a race condition where
    // a preview pane could get a Secret and use it just as it expires. Twice the TTL gives a wide margin to ensure that when the secret is read
    // it's recent enough to be valid no matter if it's used in an iframe URL, or a "Open Preview" URL.
    query(createIfNotExists ? 60 * 30 : 60 * 60),
    { id }
  );
  if (!secret && createIfNotExists) {
    const newSecret = createIfNotExists === true ? Math.random().toString(36).slice(2) : createIfNotExists();
    try {
      const patch = client.patch(id).set({ secret: newSecret });
      await client.transaction().createIfNotExists({ _id: id, _type: id }).patch(patch).commit({ tag });
      return newSecret;
    } catch (err) {
      console.error(
        "Failed to create a new preview secret. Ensure the `client` has a `token` specified that has `write` permissions.",
        err
      );
    }
  }
  return secret;
}

// app/sanity/structure/resolvePreviewUrl.ts
async function resolvePreviewUrl(doc, client) {
  var _a2;
  if (typeof window === "undefined") {
    return "";
  }
  const previewUrl = new URL("/resource/preview", window.origin);
  previewUrl.searchParams.set("type", doc._type);
  if ((_a2 = doc == null ? void 0 : doc.slug) == null ? void 0 : _a2.current) {
    previewUrl.searchParams.set("slug", doc.slug.current);
  }
  const secret = await getSecret(client, SECRET_ID, true);
  if (secret) {
    previewUrl.searchParams.set("secret", secret);
  }
  return previewUrl.toString();
}

// app/sanity/structure/resolveOGUrl.ts
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
function resolveOGUrl(doc) {
  if (typeof window === "undefined") {
    return "";
  }
  const ogUrl = new URL("/resource/og", window.origin);
  ogUrl.searchParams.set("id", doc._id);
  return ogUrl.toString();
}

// app/sanity/structure/index.ts
var structure = (S2) => S2.list().id("root").title("Content").items([
  // Singleton, home page curation
  S2.documentListItem().schemaType("home").icon(Home).id("home").title("Home"),
  S2.divider(),
  // Document lists
  S2.documentTypeListItem("record").title("Records").icon(Disc),
  S2.documentTypeListItem("artist").title("Artists").icon(Users),
  S2.divider(),
  S2.documentTypeListItem("genre").title("Genres").icon(Tags)
]);
var defaultDocumentNode = (S2, { schemaType, getClient }) => {
  const { apiVersion } = projectDetails();
  const client = getClient({ apiVersion });
  const previewView = S2.view.component(w2).options({
    url: (doc) => resolvePreviewUrl(doc, client),
    reload: { button: true }
  }).title("Preview");
  const OGPreviewView = S2.view.component(OGPreview).options({
    url: (doc) => resolveOGUrl(doc)
  }).title("OG Preview");
  switch (schemaType) {
    case `home`:
      return S2.document().views([S2.view.form(), previewView]);
    case `record`:
      return S2.document().views([S2.view.form(), previewView, OGPreviewView]);
    default:
      return S2.document().views([S2.view.form()]);
  }
};

// sanity.config.ts
var config = defineConfig({
  ...projectDetails(),
  name: "sanity-remix",
  title: "Sanity Remix",
  plugins: [deskTool({ structure, defaultDocumentNode }), visionTool(), vercelDeployTool()],
  basePath: `/studio`,
  schema: {
    types: schema_default
  }
});

// app/routes/studio.$.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var meta = () => [
  { title: "Sanity Studio" },
  { name: "robots", content: "noindex" }
];
var links = () => {
  return [{ rel: "stylesheet", href: studio_default }];
};
function StudioPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ClientOnly, { children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    Studio,
    {
      config
    },
    void 0,
    false,
    {
      fileName: "app/routes/studio.$.tsx",
      lineNumber: 22,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "app/routes/studio.$.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}
export {
  StudioPage as default,
  links,
  meta
};
/*! Bundled license information:

swr/dist/index.mjs:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)
*/
//# sourceMappingURL=/build/routes/studio.$-LE2QMHMI.js.map
