import {
  init_buffer,
  init_dirname,
  init_filename,
  init_global,
  init_process
} from "/build/_shared/chunk-I4IZRGLP.js";

// node_modules/@sanity/asset-utils/dist/asset-utils.esm.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct2(Parent2, args2, Class2) {
      var a = [null];
      a.push.apply(a, args2);
      var Constructor = Function.bind.apply(Parent2, a);
      var instance = new Constructor();
      if (Class2)
        _setPrototypeOf(instance, Class2.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
  _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
    if (Class2 === null || !_isNativeFunction(Class2))
      return Class2;
    if (typeof Class2 !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class2))
        return _cache.get(Class2);
      _cache.set(Class2, Wrapper);
    }
    function Wrapper() {
      return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class2.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class2);
  };
  return _wrapNativeSuper(Class);
}
var DEFAULT_CROP = /* @__PURE__ */ Object.freeze({
  left: 0,
  top: 0,
  bottom: 0,
  right: 0
});
var DEFAULT_HOTSPOT = /* @__PURE__ */ Object.freeze({
  x: 0.5,
  y: 0.5,
  height: 1,
  width: 1
});
var isDefaultCrop = function isDefaultCrop2(crop) {
  var top = crop.top, bottom = crop.bottom, left = crop.left, right = crop.right;
  var defaultTop = DEFAULT_CROP.top, defaultBottom = DEFAULT_CROP.bottom, defaultLeft = DEFAULT_CROP.left, defaultRight = DEFAULT_CROP.right;
  return top === defaultTop && bottom === defaultBottom && left === defaultLeft && right === defaultRight;
};
var isDefaultHotspot = function isDefaultHotspot2(hotspot) {
  var x = hotspot.x, y = hotspot.y, width = hotspot.width, height = hotspot.height;
  var defaultX = DEFAULT_HOTSPOT.x, defaultY = DEFAULT_HOTSPOT.y, defaultWidth = DEFAULT_HOTSPOT.width, defaultHeight = DEFAULT_HOTSPOT.height;
  return x === defaultX && y === defaultY && width === defaultWidth && height === defaultHeight;
};
var UnresolvableError = /* @__PURE__ */ function(_Error) {
  _inheritsLoose(UnresolvableError2, _Error);
  function UnresolvableError2(inputSource, message) {
    var _this;
    if (message === void 0) {
      message = "Failed to resolve asset ID from source";
    }
    _this = _Error.call(this, message) || this;
    _this.unresolvable = true;
    _this.input = inputSource;
    return _this;
  }
  return UnresolvableError2;
}(/* @__PURE__ */ _wrapNativeSuper(Error));
function isUnresolvableError(err) {
  var error = err;
  return Boolean(error.unresolvable && "input" in error);
}
function getForgivingResolver(method) {
  return function() {
    try {
      return method.apply(void 0, arguments);
    } catch (err) {
      if (isUnresolvableError(err)) {
        return void 0;
      }
      throw err;
    }
  };
}
var cdnUrl = "https://cdn.sanity.io";
var fileAssetFilenamePattern = /^([a-zA-Z0-9_]{24,40}|[a-f0-9]{40})+\.[a-z0-9]+$/;
var imageAssetFilenamePattern = /^([a-zA-Z0-9_]{24,40}|[a-f0-9]{40})-\d+x\d+\.[a-z0-9]+$/;
var pathPattern = /^(images|files)\/([a-z0-9]+)\/([a-z0-9][-\w]*)\//;
var idPattern = /^(?:image-(?:[a-zA-Z0-9_]{24,40}|[a-f0-9]{40})+-\d+x\d+-[a-z0-9]+|file-(?:[a-zA-Z0-9_]{24,40}|[a-f0-9]{40})+-[a-z0-9]+)$/;
function isReference(ref) {
  return isObject(ref) && typeof ref._ref === "string";
}
function isAssetIdStub(stub) {
  return isObject(stub) && typeof stub._id === "string";
}
function isAssetPathStub(stub) {
  return isObject(stub) && typeof stub.path === "string";
}
function isAssetUrlStub(stub) {
  return isObject(stub) && typeof stub.url === "string";
}
function isAssetObjectStub(stub) {
  var item = stub;
  return isObject(item) && item.asset && typeof item.asset === "object";
}
function isObject(obj) {
  return obj !== null && !Array.isArray(obj) && typeof obj === "object";
}
function hasPath(urlOrPath) {
  return pathPattern.test(tryGetUrlPath(urlOrPath) || "");
}
function tryGetAssetPath(src) {
  if (isAssetObjectStub(src)) {
    return tryGetAssetPath(src.asset);
  }
  if (isReference(src)) {
    return void 0;
  }
  if (typeof src === "string") {
    return hasPath(src) ? getUrlPath(src) : void 0;
  }
  if (isAssetPathStub(src)) {
    return src.path;
  }
  if (isAssetUrlStub(src)) {
    return getUrlPath(src.url);
  }
  return void 0;
}
function getUrlPath(url) {
  if (pathPattern.test(url)) {
    return url;
  }
  if (!url.startsWith(cdnUrl + "/")) {
    throw new UnresolvableError('Failed to resolve path from URL "' + url + '"');
  }
  var qsPos = url.indexOf("?");
  var toIndex = qsPos === -1 ? void 0 : qsPos;
  return url.slice(cdnUrl.length + 1, toIndex);
}
var tryGetUrlPath = /* @__PURE__ */ getForgivingResolver(getUrlPath);
var exampleImageId = "image-027401f31c3ac1e6d78c5d539ccd1beff72b9b11-2000x3000-jpg";
function parseImageAssetId(documentId) {
  var _documentId$split2 = documentId.split("-"), assetId = _documentId$split2[1], dimensionString = _documentId$split2[2], extension = _documentId$split2[3];
  var _split$map = (dimensionString || "").split("x").map(Number), width = _split$map[0], height = _split$map[1];
  if (!assetId || !dimensionString || !extension || !(width > 0) || !(height > 0)) {
    throw new Error("Malformed asset ID '" + documentId + `'. Expected an id like "` + exampleImageId + '".');
  }
  return {
    type: "image",
    assetId,
    width,
    height,
    extension
  };
}
function getImageDimensions(src) {
  var imageId = getAssetDocumentId(src);
  var _parseImageAssetId = parseImageAssetId(imageId), width = _parseImageAssetId.width, height = _parseImageAssetId.height;
  var aspectRatio = width / height;
  return {
    width,
    height,
    aspectRatio
  };
}
function getAssetDocumentId(src) {
  var source = isAssetObjectStub(src) ? src.asset : src;
  var id = "";
  if (typeof source === "string") {
    id = getIdFromString(source);
  } else if (isReference(source)) {
    id = source._ref;
  } else if (isAssetIdStub(source)) {
    id = source._id;
  } else if (isAssetPathStub(source)) {
    id = idFromUrl(cdnUrl + "/" + source.path);
  } else if (isAssetUrlStub(source)) {
    id = idFromUrl(source.url);
  }
  var hasId = id && idPattern.test(id);
  if (!hasId) {
    throw new UnresolvableError(src);
  }
  return id;
}
var tryGetAssetDocumentId = /* @__PURE__ */ getForgivingResolver(getAssetDocumentId);
function getIdFromString(str) {
  if (idPattern.test(str)) {
    return str;
  }
  if (str.indexOf(cdnUrl + "/images") === 0 || str.indexOf(cdnUrl + "/files") === 0) {
    return idFromUrl(str);
  }
  if (pathPattern.test(str)) {
    return idFromUrl(cdnUrl + "/" + str);
  }
  if (isFileAssetFilename(str)) {
    return idFromUrl(cdnUrl + "/files/a/b/" + str);
  }
  if (isImageAssetFilename(str)) {
    return idFromUrl(cdnUrl + "/images/a/b/" + str);
  }
  throw new UnresolvableError(str);
}
function idFromUrl(url) {
  var path = getUrlPath(url);
  var _path$split = path.split("/"), type = _path$split[0], fileName = _path$split[3];
  var prefix = type.replace(/s$/, "");
  return prefix + "-" + fileName.replace(/\./g, "-");
}
function getProject(src) {
  var path = tryGetAssetPath(src);
  if (!path) {
    throw new UnresolvableError(src, "Failed to resolve project ID and dataset from source");
  }
  var _ref = path.match(pathPattern) || [], projectId = _ref[2], dataset = _ref[3];
  if (!projectId || !dataset) {
    throw new UnresolvableError(src, "Failed to resolve project ID and dataset from source");
  }
  return {
    projectId,
    dataset
  };
}
function isImageAssetFilename(filename) {
  return imageAssetFilenamePattern.test(filename);
}
function isFileAssetFilename(filename) {
  return fileAssetFilenamePattern.test(filename);
}
function isFileSource(src) {
  var assetId = tryGetAssetDocumentId(src);
  return assetId ? assetId.startsWith("file-") : false;
}
function isImageSource(src) {
  var assetId = tryGetAssetDocumentId(src);
  return assetId ? assetId.startsWith("image-") : false;
}

export {
  isDefaultCrop,
  isDefaultHotspot,
  getImageDimensions,
  getProject,
  isFileSource,
  isImageSource
};
//# sourceMappingURL=/build/_shared/chunk-DWGBMFOF.js.map
