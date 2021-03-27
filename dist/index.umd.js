(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.mybad = factory());
}(this, (function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck$1(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys$1(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys$1(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys$1(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _inherits$1(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn$1(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn$1(this, result);
    };
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _classPrivateFieldGet(receiver, privateMap) {
    var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get");

    return _classApplyDescriptorGet(receiver, descriptor);
  }

  function _classPrivateFieldSet(receiver, privateMap, value) {
    var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set");

    _classApplyDescriptorSet(receiver, descriptor, value);

    return value;
  }

  function _classExtractFieldDescriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) {
      throw new TypeError("attempted to " + action + " private field on non-instance");
    }

    return privateMap.get(receiver);
  }

  function _classApplyDescriptorGet(receiver, descriptor) {
    if (descriptor.get) {
      return descriptor.get.call(receiver);
    }

    return descriptor.value;
  }

  function _classApplyDescriptorSet(receiver, descriptor, value) {
    if (descriptor.set) {
      descriptor.set.call(receiver, value);
    } else {
      if (!descriptor.writable) {
        throw new TypeError("attempted to set read only private field");
      }

      descriptor.value = value;
    }
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function getAugmentedNamespace(n) {
  	if (n.__esModule) return n;
  	var a = Object.defineProperty({}, '__esModule', {value: true});
  	Object.keys(n).forEach(function (k) {
  		var d = Object.getOwnPropertyDescriptor(n, k);
  		Object.defineProperty(a, k, d.get ? d : {
  			enumerable: true,
  			get: function () {
  				return n[k];
  			}
  		});
  	});
  	return a;
  }

  function createCommonjsModule(fn) {
    var module = { exports: {} };
  	return fn(module, module.exports), module.exports;
  }

  var check = function (it) {
    return it && it.Math == Math && it;
  };
  var global$1 =
  check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || check(typeof self == 'object' && self) || check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  function () {
    return this;
  }() || Function('return this')();

  var fails = function (exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  };

  var descriptors = !fails(function () {
    return Object.defineProperty({}, 1, {
      get: function () {
        return 7;
      }
    })[1] != 7;
  });

  var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
  var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
  var NASHORN_BUG = getOwnPropertyDescriptor$1 && !nativePropertyIsEnumerable.call({
    1: 2
  }, 1);
  var f$5 = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor$1(this, V);
    return !!descriptor && descriptor.enumerable;
  } : nativePropertyIsEnumerable;
  var objectPropertyIsEnumerable = {
    f: f$5
  };

  var createPropertyDescriptor = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var toString$5 = {}.toString;
  var classofRaw = function (it) {
    return toString$5.call(it).slice(8, -1);
  };

  var split = ''.split;
  var indexedObject = fails(function () {
    return !Object('z').propertyIsEnumerable(0);
  }) ? function (it) {
    return classofRaw(it) == 'String' ? split.call(it, '') : Object(it);
  } : Object;

  var requireObjectCoercible = function (it) {
    if (it == undefined) throw TypeError("Can't call method on " + it);
    return it;
  };

  var toIndexedObject = function (it) {
    return indexedObject(requireObjectCoercible(it));
  };

  var isObject$2 = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };

  var toPrimitive = function (input, PREFERRED_STRING) {
    if (!isObject$2(input)) return input;
    var fn, val;
    if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject$2(val = fn.call(input))) return val;
    if (typeof (fn = input.valueOf) == 'function' && !isObject$2(val = fn.call(input))) return val;
    if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject$2(val = fn.call(input))) return val;
    throw TypeError("Can't convert object to primitive value");
  };

  var hasOwnProperty$1 = {}.hasOwnProperty;
  var has$2 = function (it, key) {
    return hasOwnProperty$1.call(it, key);
  };

  var document$1 = global$1.document;
  var EXISTS = isObject$2(document$1) && isObject$2(document$1.createElement);
  var documentCreateElement = function (it) {
    return EXISTS ? document$1.createElement(it) : {};
  };

  var ie8DomDefine = !descriptors && !fails(function () {
    return Object.defineProperty(documentCreateElement('div'), 'a', {
      get: function () {
        return 7;
      }
    }).a != 7;
  });

  var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var f$4 = descriptors ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject(O);
    P = toPrimitive(P, true);
    if (ie8DomDefine) try {
      return nativeGetOwnPropertyDescriptor(O, P);
    } catch (error) {
    }
    if (has$2(O, P)) return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(O, P), O[P]);
  };
  var objectGetOwnPropertyDescriptor = {
    f: f$4
  };

  var anObject = function (it) {
    if (!isObject$2(it)) {
      throw TypeError(String(it) + ' is not an object');
    }
    return it;
  };

  var nativeDefineProperty = Object.defineProperty;
  var f$3 = descriptors ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPrimitive(P, true);
    anObject(Attributes);
    if (ie8DomDefine) try {
      return nativeDefineProperty(O, P, Attributes);
    } catch (error) {
    }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };
  var objectDefineProperty = {
    f: f$3
  };

  var createNonEnumerableProperty = descriptors ? function (object, key, value) {
    return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var setGlobal = function (key, value) {
    try {
      createNonEnumerableProperty(global$1, key, value);
    } catch (error) {
      global$1[key] = value;
    }
    return value;
  };

  var SHARED = '__core-js_shared__';
  var store$1 = global$1[SHARED] || setGlobal(SHARED, {});
  var sharedStore = store$1;

  var functionToString = Function.toString;
  if (typeof sharedStore.inspectSource != 'function') {
    sharedStore.inspectSource = function (it) {
      return functionToString.call(it);
    };
  }
  var inspectSource = sharedStore.inspectSource;

  var WeakMap$2 = global$1.WeakMap;
  var nativeWeakMap = typeof WeakMap$2 === 'function' && /native code/.test(inspectSource(WeakMap$2));

  var shared = createCommonjsModule(function (module) {
    (module.exports = function (key, value) {
      return sharedStore[key] || (sharedStore[key] = value !== undefined ? value : {});
    })('versions', []).push({
      version: '3.9.1',
      mode: 'global',
      copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
    });
  });

  var id$1 = 0;
  var postfix = Math.random();
  var uid = function (key) {
    return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id$1 + postfix).toString(36);
  };

  var keys = shared('keys');
  var sharedKey = function (key) {
    return keys[key] || (keys[key] = uid(key));
  };

  var hiddenKeys$1 = {};

  var WeakMap$1 = global$1.WeakMap;
  var set, get, has$1;
  var enforce = function (it) {
    return has$1(it) ? get(it) : set(it, {});
  };
  var getterFor = function (TYPE) {
    return function (it) {
      var state;
      if (!isObject$2(it) || (state = get(it)).type !== TYPE) {
        throw TypeError('Incompatible receiver, ' + TYPE + ' required');
      }
      return state;
    };
  };
  if (nativeWeakMap) {
    var store = sharedStore.state || (sharedStore.state = new WeakMap$1());
    var wmget = store.get;
    var wmhas = store.has;
    var wmset = store.set;
    set = function (it, metadata) {
      metadata.facade = it;
      wmset.call(store, it, metadata);
      return metadata;
    };
    get = function (it) {
      return wmget.call(store, it) || {};
    };
    has$1 = function (it) {
      return wmhas.call(store, it);
    };
  } else {
    var STATE = sharedKey('state');
    hiddenKeys$1[STATE] = true;
    set = function (it, metadata) {
      metadata.facade = it;
      createNonEnumerableProperty(it, STATE, metadata);
      return metadata;
    };
    get = function (it) {
      return has$2(it, STATE) ? it[STATE] : {};
    };
    has$1 = function (it) {
      return has$2(it, STATE);
    };
  }
  var internalState = {
    set: set,
    get: get,
    has: has$1,
    enforce: enforce,
    getterFor: getterFor
  };

  var redefine = createCommonjsModule(function (module) {
    var getInternalState = internalState.get;
    var enforceInternalState = internalState.enforce;
    var TEMPLATE = String(String).split('String');
    (module.exports = function (O, key, value, options) {
      var unsafe = options ? !!options.unsafe : false;
      var simple = options ? !!options.enumerable : false;
      var noTargetGet = options ? !!options.noTargetGet : false;
      var state;
      if (typeof value == 'function') {
        if (typeof key == 'string' && !has$2(value, 'name')) {
          createNonEnumerableProperty(value, 'name', key);
        }
        state = enforceInternalState(value);
        if (!state.source) {
          state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
        }
      }
      if (O === global$1) {
        if (simple) O[key] = value;else setGlobal(key, value);
        return;
      } else if (!unsafe) {
        delete O[key];
      } else if (!noTargetGet && O[key]) {
        simple = true;
      }
      if (simple) O[key] = value;else createNonEnumerableProperty(O, key, value);
    })(Function.prototype, 'toString', function toString() {
      return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
    });
  });

  var path = global$1;

  var aFunction$1 = function (variable) {
    return typeof variable == 'function' ? variable : undefined;
  };
  var getBuiltIn = function (namespace, method) {
    return arguments.length < 2 ? aFunction$1(path[namespace]) || aFunction$1(global$1[namespace]) : path[namespace] && path[namespace][method] || global$1[namespace] && global$1[namespace][method];
  };

  var ceil = Math.ceil;
  var floor = Math.floor;
  var toInteger = function (argument) {
    return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
  };

  var min$2 = Math.min;
  var toLength = function (argument) {
    return argument > 0 ? min$2(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0;
  };

  var max$1 = Math.max;
  var min$1 = Math.min;
  var toAbsoluteIndex = function (index, length) {
    var integer = toInteger(index);
    return integer < 0 ? max$1(integer + length, 0) : min$1(integer, length);
  };

  var createMethod$3 = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIndexedObject($this);
      var length = toLength(O.length);
      var index = toAbsoluteIndex(fromIndex, length);
      var value;
      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++];
        if (value != value) return true;
      } else for (; length > index; index++) {
        if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
      }
      return !IS_INCLUDES && -1;
    };
  };
  var arrayIncludes = {
    includes: createMethod$3(true),
    indexOf: createMethod$3(false)
  };

  var indexOf$1 = arrayIncludes.indexOf;
  var objectKeysInternal = function (object, names) {
    var O = toIndexedObject(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) !has$2(hiddenKeys$1, key) && has$2(O, key) && result.push(key);
    while (names.length > i) if (has$2(O, key = names[i++])) {
      ~indexOf$1(result, key) || result.push(key);
    }
    return result;
  };

  var enumBugKeys = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

  var hiddenKeys = enumBugKeys.concat('length', 'prototype');
  var f$2 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return objectKeysInternal(O, hiddenKeys);
  };
  var objectGetOwnPropertyNames = {
    f: f$2
  };

  var f$1 = Object.getOwnPropertySymbols;
  var objectGetOwnPropertySymbols = {
    f: f$1
  };

  var ownKeys = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = objectGetOwnPropertyNames.f(anObject(it));
    var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
    return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
  };

  var copyConstructorProperties = function (target, source) {
    var keys = ownKeys(source);
    var defineProperty = objectDefineProperty.f;
    var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (!has$2(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  };

  var replacement = /#|\.prototype\./;
  var isForced = function (feature, detection) {
    var value = data[normalize(feature)];
    return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == 'function' ? fails(detection) : !!detection;
  };
  var normalize = isForced.normalize = function (string) {
    return String(string).replace(replacement, '.').toLowerCase();
  };
  var data = isForced.data = {};
  var NATIVE = isForced.NATIVE = 'N';
  var POLYFILL = isForced.POLYFILL = 'P';
  var isForced_1 = isForced;

  var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
  var _export = function (options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) {
      target = global$1;
    } else if (STATIC) {
      target = global$1[TARGET] || setGlobal(TARGET, {});
    } else {
      target = (global$1[TARGET] || {}).prototype;
    }
    if (target) for (key in source) {
      sourceProperty = source[key];
      if (options.noTargetGet) {
        descriptor = getOwnPropertyDescriptor(target, key);
        targetProperty = descriptor && descriptor.value;
      } else targetProperty = target[key];
      FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
      if (!FORCED && targetProperty !== undefined) {
        if (typeof sourceProperty === typeof targetProperty) continue;
        copyConstructorProperties(sourceProperty, targetProperty);
      }
      if (options.sham || targetProperty && targetProperty.sham) {
        createNonEnumerableProperty(sourceProperty, 'sham', true);
      }
      redefine(target, key, sourceProperty, options);
    }
  };

  var aFunction = function (it) {
    if (typeof it != 'function') {
      throw TypeError(String(it) + ' is not a function');
    }
    return it;
  };

  var functionBindContext = function (fn, that, length) {
    aFunction(fn);
    if (that === undefined) return fn;
    switch (length) {
      case 0:
        return function () {
          return fn.call(that);
        };
      case 1:
        return function (a) {
          return fn.call(that, a);
        };
      case 2:
        return function (a, b) {
          return fn.call(that, a, b);
        };
      case 3:
        return function (a, b, c) {
          return fn.call(that, a, b, c);
        };
    }
    return function ()
    {
      return fn.apply(that, arguments);
    };
  };

  var toObject = function (argument) {
    return Object(requireObjectCoercible(argument));
  };

  var isArray$2 = Array.isArray || function isArray(arg) {
    return classofRaw(arg) == 'Array';
  };

  var engineIsNode = classofRaw(global$1.process) == 'process';

  var engineUserAgent = getBuiltIn('navigator', 'userAgent') || '';

  var process$1 = global$1.process;
  var versions = process$1 && process$1.versions;
  var v8 = versions && versions.v8;
  var match, version;
  if (v8) {
    match = v8.split('.');
    version = match[0] + match[1];
  } else if (engineUserAgent) {
    match = engineUserAgent.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
      match = engineUserAgent.match(/Chrome\/(\d+)/);
      if (match) version = match[1];
    }
  }
  var engineV8Version = version && +version;

  var nativeSymbol = !!Object.getOwnPropertySymbols && !fails(function () {
    return !Symbol.sham && (
    engineIsNode ? engineV8Version === 38 : engineV8Version > 37 && engineV8Version < 41);
  });

  var useSymbolAsUid = nativeSymbol
  && !Symbol.sham && typeof Symbol.iterator == 'symbol';

  var WellKnownSymbolsStore = shared('wks');
  var Symbol$1 = global$1.Symbol;
  var createWellKnownSymbol = useSymbolAsUid ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid;
  var wellKnownSymbol = function (name) {
    if (!has$2(WellKnownSymbolsStore, name) || !(nativeSymbol || typeof WellKnownSymbolsStore[name] == 'string')) {
      if (nativeSymbol && has$2(Symbol$1, name)) {
        WellKnownSymbolsStore[name] = Symbol$1[name];
      } else {
        WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
      }
    }
    return WellKnownSymbolsStore[name];
  };

  var SPECIES$4 = wellKnownSymbol('species');
  var arraySpeciesCreate = function (originalArray, length) {
    var C;
    if (isArray$2(originalArray)) {
      C = originalArray.constructor;
      if (typeof C == 'function' && (C === Array || isArray$2(C.prototype))) C = undefined;else if (isObject$2(C)) {
        C = C[SPECIES$4];
        if (C === null) C = undefined;
      }
    }
    return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
  };

  var push = [].push;
  var createMethod$2 = function (TYPE) {
    var IS_MAP = TYPE == 1;
    var IS_FILTER = TYPE == 2;
    var IS_SOME = TYPE == 3;
    var IS_EVERY = TYPE == 4;
    var IS_FIND_INDEX = TYPE == 6;
    var IS_FILTER_OUT = TYPE == 7;
    var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
    return function ($this, callbackfn, that, specificCreate) {
      var O = toObject($this);
      var self = indexedObject(O);
      var boundFunction = functionBindContext(callbackfn, that, 3);
      var length = toLength(self.length);
      var index = 0;
      var create = specificCreate || arraySpeciesCreate;
      var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
      var value, result;
      for (; length > index; index++) if (NO_HOLES || index in self) {
        value = self[index];
        result = boundFunction(value, index, O);
        if (TYPE) {
          if (IS_MAP) target[index] = result;
          else if (result) switch (TYPE) {
              case 3:
                return true;
              case 5:
                return value;
              case 6:
                return index;
              case 2:
                push.call(target, value);
            } else switch (TYPE) {
              case 4:
                return false;
              case 7:
                push.call(target, value);
            }
        }
      }
      return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
    };
  };
  var arrayIteration = {
    forEach: createMethod$2(0),
    map: createMethod$2(1),
    filter: createMethod$2(2),
    some: createMethod$2(3),
    every: createMethod$2(4),
    find: createMethod$2(5),
    findIndex: createMethod$2(6),
    filterOut: createMethod$2(7)
  };

  var objectKeys$2 = Object.keys || function keys(O) {
    return objectKeysInternal(O, enumBugKeys);
  };

  var objectDefineProperties = descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject(O);
    var keys = objectKeys$2(Properties);
    var length = keys.length;
    var index = 0;
    var key;
    while (length > index) objectDefineProperty.f(O, key = keys[index++], Properties[key]);
    return O;
  };

  var html = getBuiltIn('document', 'documentElement');

  var GT = '>';
  var LT = '<';
  var PROTOTYPE = 'prototype';
  var SCRIPT = 'script';
  var IE_PROTO$1 = sharedKey('IE_PROTO');
  var EmptyConstructor = function () {
  };
  var scriptTag = function (content) {
    return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
  };
  var NullProtoObjectViaActiveX = function (activeXDocument) {
    activeXDocument.write(scriptTag(''));
    activeXDocument.close();
    var temp = activeXDocument.parentWindow.Object;
    activeXDocument = null;
    return temp;
  };
  var NullProtoObjectViaIFrame = function () {
    var iframe = documentCreateElement('iframe');
    var JS = 'java' + SCRIPT + ':';
    var iframeDocument;
    iframe.style.display = 'none';
    html.appendChild(iframe);
    iframe.src = String(JS);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(scriptTag('document.F=Object'));
    iframeDocument.close();
    return iframeDocument.F;
  };
  var activeXDocument;
  var NullProtoObject = function () {
    try {
      activeXDocument = document.domain && new ActiveXObject('htmlfile');
    } catch (error) {
    }
    NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
    var length = enumBugKeys.length;
    while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
    return NullProtoObject();
  };
  hiddenKeys$1[IE_PROTO$1] = true;
  var objectCreate = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
      EmptyConstructor[PROTOTYPE] = anObject(O);
      result = new EmptyConstructor();
      EmptyConstructor[PROTOTYPE] = null;
      result[IE_PROTO$1] = O;
    } else result = NullProtoObject();
    return Properties === undefined ? result : objectDefineProperties(result, Properties);
  };

  var UNSCOPABLES = wellKnownSymbol('unscopables');
  var ArrayPrototype$1 = Array.prototype;
  if (ArrayPrototype$1[UNSCOPABLES] == undefined) {
    objectDefineProperty.f(ArrayPrototype$1, UNSCOPABLES, {
      configurable: true,
      value: objectCreate(null)
    });
  }
  var addToUnscopables = function (key) {
    ArrayPrototype$1[UNSCOPABLES][key] = true;
  };

  var $find = arrayIteration.find;
  var FIND = 'find';
  var SKIPS_HOLES = true;
  if (FIND in []) Array(1)[FIND](function () {
    SKIPS_HOLES = false;
  });
  _export({
    target: 'Array',
    proto: true,
    forced: SKIPS_HOLES
  }, {
    find: function find(callbackfn
    ) {
      return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });
  addToUnscopables(FIND);

  var arrayMethodIsStrict = function (METHOD_NAME, argument) {
    var method = [][METHOD_NAME];
    return !!method && fails(function () {
      method.call(null, argument || function () {
        throw 1;
      }, 1);
    });
  };

  var $some = arrayIteration.some;
  var STRICT_METHOD$1 = arrayMethodIsStrict('some');
  _export({
    target: 'Array',
    proto: true,
    forced: !STRICT_METHOD$1
  }, {
    some: function some(callbackfn
    ) {
      return $some(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var nativeJoin = [].join;
  var ES3_STRINGS = indexedObject != Object;
  var STRICT_METHOD = arrayMethodIsStrict('join', ',');
  _export({
    target: 'Array',
    proto: true,
    forced: ES3_STRINGS || !STRICT_METHOD
  }, {
    join: function join(separator) {
      return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
    }
  });

  var SPECIES$3 = wellKnownSymbol('species');
  var arrayMethodHasSpeciesSupport = function (METHOD_NAME) {
    return engineV8Version >= 51 || !fails(function () {
      var array = [];
      var constructor = array.constructor = {};
      constructor[SPECIES$3] = function () {
        return {
          foo: 1
        };
      };
      return array[METHOD_NAME](Boolean).foo !== 1;
    });
  };

  var $filter = arrayIteration.filter;
  var HAS_SPECIES_SUPPORT$2 = arrayMethodHasSpeciesSupport('filter');
  _export({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT$2
  }, {
    filter: function filter(callbackfn
    ) {
      return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var regexpFlags = function () {
    var that = anObject(this);
    var result = '';
    if (that.global) result += 'g';
    if (that.ignoreCase) result += 'i';
    if (that.multiline) result += 'm';
    if (that.dotAll) result += 's';
    if (that.unicode) result += 'u';
    if (that.sticky) result += 'y';
    return result;
  };

  function RE(s, f) {
    return RegExp(s, f);
  }
  var UNSUPPORTED_Y$1 = fails(function () {
    var re = RE('a', 'y');
    re.lastIndex = 2;
    return re.exec('abcd') != null;
  });
  var BROKEN_CARET = fails(function () {
    var re = RE('^r', 'gy');
    re.lastIndex = 2;
    return re.exec('str') != null;
  });
  var regexpStickyHelpers = {
    UNSUPPORTED_Y: UNSUPPORTED_Y$1,
    BROKEN_CARET: BROKEN_CARET
  };

  var nativeExec = RegExp.prototype.exec;
  var nativeReplace = String.prototype.replace;
  var patchedExec = nativeExec;
  var UPDATES_LAST_INDEX_WRONG = function () {
    var re1 = /a/;
    var re2 = /b*/g;
    nativeExec.call(re1, 'a');
    nativeExec.call(re2, 'a');
    return re1.lastIndex !== 0 || re2.lastIndex !== 0;
  }();
  var UNSUPPORTED_Y = regexpStickyHelpers.UNSUPPORTED_Y || regexpStickyHelpers.BROKEN_CARET;
  var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;
  var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;
  if (PATCH) {
    patchedExec = function exec(str) {
      var re = this;
      var lastIndex, reCopy, match, i;
      var sticky = UNSUPPORTED_Y && re.sticky;
      var flags = regexpFlags.call(re);
      var source = re.source;
      var charsAdded = 0;
      var strCopy = str;
      if (sticky) {
        flags = flags.replace('y', '');
        if (flags.indexOf('g') === -1) {
          flags += 'g';
        }
        strCopy = String(str).slice(re.lastIndex);
        if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
          source = '(?: ' + source + ')';
          strCopy = ' ' + strCopy;
          charsAdded++;
        }
        reCopy = new RegExp('^(?:' + source + ')', flags);
      }
      if (NPCG_INCLUDED) {
        reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
      }
      if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;
      match = nativeExec.call(sticky ? reCopy : re, strCopy);
      if (sticky) {
        if (match) {
          match.input = match.input.slice(charsAdded);
          match[0] = match[0].slice(charsAdded);
          match.index = re.lastIndex;
          re.lastIndex += match[0].length;
        } else re.lastIndex = 0;
      } else if (UPDATES_LAST_INDEX_WRONG && match) {
        re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
      }
      if (NPCG_INCLUDED && match && match.length > 1) {
        nativeReplace.call(match[0], reCopy, function () {
          for (i = 1; i < arguments.length - 2; i++) {
            if (arguments[i] === undefined) match[i] = undefined;
          }
        });
      }
      return match;
    };
  }
  var regexpExec = patchedExec;

  _export({
    target: 'RegExp',
    proto: true,
    forced: /./.exec !== regexpExec
  }, {
    exec: regexpExec
  });

  var SPECIES$2 = wellKnownSymbol('species');
  var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
    var re = /./;
    re.exec = function () {
      var result = [];
      result.groups = {
        a: '7'
      };
      return result;
    };
    return ''.replace(re, '$<a>') !== '7';
  });
  var REPLACE_KEEPS_$0 = function () {
    return 'a'.replace(/./, '$0') === '$0';
  }();
  var REPLACE = wellKnownSymbol('replace');
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = function () {
    if (/./[REPLACE]) {
      return /./[REPLACE]('a', '$0') === '';
    }
    return false;
  }();
  var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
    var re = /(?:)/;
    var originalExec = re.exec;
    re.exec = function () {
      return originalExec.apply(this, arguments);
    };
    var result = 'ab'.split(re);
    return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
  });
  var fixRegexpWellKnownSymbolLogic = function (KEY, length, exec, sham) {
    var SYMBOL = wellKnownSymbol(KEY);
    var DELEGATES_TO_SYMBOL = !fails(function () {
      var O = {};
      O[SYMBOL] = function () {
        return 7;
      };
      return ''[KEY](O) != 7;
    });
    var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
      var execCalled = false;
      var re = /a/;
      if (KEY === 'split') {
        re = {};
        re.constructor = {};
        re.constructor[SPECIES$2] = function () {
          return re;
        };
        re.flags = '';
        re[SYMBOL] = /./[SYMBOL];
      }
      re.exec = function () {
        execCalled = true;
        return null;
      };
      re[SYMBOL]('');
      return !execCalled;
    });
    if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || KEY === 'replace' && !(REPLACE_SUPPORTS_NAMED_GROUPS && REPLACE_KEEPS_$0 && !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE) || KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC) {
      var nativeRegExpMethod = /./[SYMBOL];
      var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            return {
              done: true,
              value: nativeRegExpMethod.call(regexp, str, arg2)
            };
          }
          return {
            done: true,
            value: nativeMethod.call(str, regexp, arg2)
          };
        }
        return {
          done: false
        };
      }, {
        REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
        REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
      });
      var stringMethod = methods[0];
      var regexMethod = methods[1];
      redefine(String.prototype, KEY, stringMethod);
      redefine(RegExp.prototype, SYMBOL, length == 2
      ? function (string, arg) {
        return regexMethod.call(string, this, arg);
      }
      : function (string) {
        return regexMethod.call(string, this);
      });
    }
    if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
  };

  var MATCH$1 = wellKnownSymbol('match');
  var isRegexp = function (it) {
    var isRegExp;
    return isObject$2(it) && ((isRegExp = it[MATCH$1]) !== undefined ? !!isRegExp : classofRaw(it) == 'RegExp');
  };

  var SPECIES$1 = wellKnownSymbol('species');
  var speciesConstructor = function (O, defaultConstructor) {
    var C = anObject(O).constructor;
    var S;
    return C === undefined || (S = anObject(C)[SPECIES$1]) == undefined ? defaultConstructor : aFunction(S);
  };

  var createMethod$1 = function (CONVERT_TO_STRING) {
    return function ($this, pos) {
      var S = String(requireObjectCoercible($this));
      var position = toInteger(pos);
      var size = S.length;
      var first, second;
      if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
      first = S.charCodeAt(position);
      return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? S.charAt(position) : first : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
    };
  };
  var stringMultibyte = {
    codeAt: createMethod$1(false),
    charAt: createMethod$1(true)
  };

  var charAt$1 = stringMultibyte.charAt;
  var advanceStringIndex = function (S, index, unicode) {
    return index + (unicode ? charAt$1(S, index).length : 1);
  };

  var regexpExecAbstract = function (R, S) {
    var exec = R.exec;
    if (typeof exec === 'function') {
      var result = exec.call(R, S);
      if (typeof result !== 'object') {
        throw TypeError('RegExp exec method returned something other than an Object or null');
      }
      return result;
    }
    if (classofRaw(R) !== 'RegExp') {
      throw TypeError('RegExp#exec called on incompatible receiver');
    }
    return regexpExec.call(R, S);
  };

  var arrayPush = [].push;
  var min = Math.min;
  var MAX_UINT32 = 0xFFFFFFFF;
  var SUPPORTS_Y = !fails(function () {
    return !RegExp(MAX_UINT32, 'y');
  });
  fixRegexpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
    var internalSplit;
    if ('abbc'.split(/(b)*/)[1] == 'c' ||
    'test'.split(/(?:)/, -1).length != 4 || 'ab'.split(/(?:ab)*/).length != 2 || '.'.split(/(.?)(.?)/).length != 4 ||
    '.'.split(/()()/).length > 1 || ''.split(/.?/).length) {
      internalSplit = function (separator, limit) {
        var string = String(requireObjectCoercible(this));
        var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
        if (lim === 0) return [];
        if (separator === undefined) return [string];
        if (!isRegexp(separator)) {
          return nativeSplit.call(string, separator, lim);
        }
        var output = [];
        var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
        var lastLastIndex = 0;
        var separatorCopy = new RegExp(separator.source, flags + 'g');
        var match, lastIndex, lastLength;
        while (match = regexpExec.call(separatorCopy, string)) {
          lastIndex = separatorCopy.lastIndex;
          if (lastIndex > lastLastIndex) {
            output.push(string.slice(lastLastIndex, match.index));
            if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
            lastLength = match[0].length;
            lastLastIndex = lastIndex;
            if (output.length >= lim) break;
          }
          if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++;
        }
        if (lastLastIndex === string.length) {
          if (lastLength || !separatorCopy.test('')) output.push('');
        } else output.push(string.slice(lastLastIndex));
        return output.length > lim ? output.slice(0, lim) : output;
      };
    } else if ('0'.split(undefined, 0).length) {
      internalSplit = function (separator, limit) {
        return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
      };
    } else internalSplit = nativeSplit;
    return [
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined ? splitter.call(separator, O, limit) : internalSplit.call(String(O), separator, limit);
    },
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);
      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') + (rx.multiline ? 'm' : '') + (rx.unicode ? 'u' : '') + (SUPPORTS_Y ? 'y' : 'g');
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return regexpExecAbstract(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = regexpExecAbstract(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (z === null || (e = min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }];
  }, !SUPPORTS_Y);

  var $includes = arrayIncludes.includes;
  _export({
    target: 'Array',
    proto: true
  }, {
    includes: function includes(el
    ) {
      return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
    }
  });
  addToUnscopables('includes');

  var notARegexp = function (it) {
    if (isRegexp(it)) {
      throw TypeError("The method doesn't accept regular expressions");
    }
    return it;
  };

  var MATCH = wellKnownSymbol('match');
  var correctIsRegexpLogic = function (METHOD_NAME) {
    var regexp = /./;
    try {
      '/./'[METHOD_NAME](regexp);
    } catch (error1) {
      try {
        regexp[MATCH] = false;
        return '/./'[METHOD_NAME](regexp);
      } catch (error2) {
      }
    }
    return false;
  };

  _export({
    target: 'String',
    proto: true,
    forced: !correctIsRegexpLogic('includes')
  }, {
    includes: function includes(searchString
    ) {
      return !!~String(requireObjectCoercible(this)).indexOf(notARegexp(searchString), arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var createProperty = function (object, key, value) {
    var propertyKey = toPrimitive(key);
    if (propertyKey in object) objectDefineProperty.f(object, propertyKey, createPropertyDescriptor(0, value));else object[propertyKey] = value;
  };

  var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport('slice');
  var SPECIES = wellKnownSymbol('species');
  var nativeSlice = [].slice;
  var max = Math.max;
  _export({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT$1
  }, {
    slice: function slice(start, end) {
      var O = toIndexedObject(this);
      var length = toLength(O.length);
      var k = toAbsoluteIndex(start, length);
      var fin = toAbsoluteIndex(end === undefined ? length : end, length);
      var Constructor, result, n;
      if (isArray$2(O)) {
        Constructor = O.constructor;
        if (typeof Constructor == 'function' && (Constructor === Array || isArray$2(Constructor.prototype))) {
          Constructor = undefined;
        } else if (isObject$2(Constructor)) {
          Constructor = Constructor[SPECIES];
          if (Constructor === null) Constructor = undefined;
        }
        if (Constructor === Array || Constructor === undefined) {
          return nativeSlice.call(O, k, fin);
        }
      }
      result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
      for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
      result.length = n;
      return result;
    }
  });

  var whitespaces = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' + '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

  var whitespace = '[' + whitespaces + ']';
  var ltrim = RegExp('^' + whitespace + whitespace + '*');
  var rtrim = RegExp(whitespace + whitespace + '*$');
  var createMethod = function (TYPE) {
    return function ($this) {
      var string = String(requireObjectCoercible($this));
      if (TYPE & 1) string = string.replace(ltrim, '');
      if (TYPE & 2) string = string.replace(rtrim, '');
      return string;
    };
  };
  var stringTrim = {
    start: createMethod(1),
    end: createMethod(2),
    trim: createMethod(3)
  };

  var non = '\u200B\u0085\u180E';
  var stringTrimForced = function (METHOD_NAME) {
    return fails(function () {
      return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
    });
  };

  var $trim = stringTrim.trim;
  _export({
    target: 'String',
    proto: true,
    forced: stringTrimForced('trim')
  }, {
    trim: function trim() {
      return $trim(this);
    }
  });

  var defineProperty$1 = objectDefineProperty.f;
  var FunctionPrototype = Function.prototype;
  var FunctionPrototypeToString = FunctionPrototype.toString;
  var nameRE = /^\s*function ([^ (]*)/;
  var NAME = 'name';
  if (descriptors && !(NAME in FunctionPrototype)) {
    defineProperty$1(FunctionPrototype, NAME, {
      configurable: true,
      get: function () {
        try {
          return FunctionPrototypeToString.call(this).match(nameRE)[1];
        } catch (error) {
          return '';
        }
      }
    });
  }

  var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
  var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
  var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';
  var IS_CONCAT_SPREADABLE_SUPPORT = engineV8Version >= 51 || !fails(function () {
    var array = [];
    array[IS_CONCAT_SPREADABLE] = false;
    return array.concat()[0] !== array;
  });
  var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');
  var isConcatSpreadable = function (O) {
    if (!isObject$2(O)) return false;
    var spreadable = O[IS_CONCAT_SPREADABLE];
    return spreadable !== undefined ? !!spreadable : isArray$2(O);
  };
  var FORCED$1 = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;
  _export({
    target: 'Array',
    proto: true,
    forced: FORCED$1
  }, {
    concat: function concat(arg) {
      var O = toObject(this);
      var A = arraySpeciesCreate(O, 0);
      var n = 0;
      var i, k, length, len, E;
      for (i = -1, length = arguments.length; i < length; i++) {
        E = i === -1 ? O : arguments[i];
        if (isConcatSpreadable(E)) {
          len = toLength(E.length);
          if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
          for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
        } else {
          if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
          createProperty(A, n++, E);
        }
      }
      A.length = n;
      return A;
    }
  });

  var $map = arrayIteration.map;
  var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
  _export({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT
  }, {
    map: function map(callbackfn
    ) {
      return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  fixRegexpWellKnownSymbolLogic('match', 1, function (MATCH, nativeMatch, maybeCallNative) {
    return [
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = regexp == undefined ? undefined : regexp[MATCH];
      return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    function (regexp) {
      var res = maybeCallNative(nativeMatch, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      if (!rx.global) return regexpExecAbstract(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regexpExecAbstract(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }];
  });

  var trim = stringTrim.trim;
  var $parseInt = global$1.parseInt;
  var hex = /^[+-]?0[Xx]/;
  var FORCED = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22;
  var numberParseInt = FORCED ? function parseInt(string, radix) {
    var S = trim(String(string));
    return $parseInt(S, radix >>> 0 || (hex.test(S) ? 16 : 10));
  } : $parseInt;

  _export({
    global: true,
    forced: parseInt != numberParseInt
  }, {
    parseInt: numberParseInt
  });

  var nativeGetOwnPropertyNames$1 = objectGetOwnPropertyNames.f;
  var toString$4 = {}.toString;
  var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
  var getWindowNames = function (it) {
    try {
      return nativeGetOwnPropertyNames$1(it);
    } catch (error) {
      return windowNames.slice();
    }
  };
  var f = function getOwnPropertyNames(it) {
    return windowNames && toString$4.call(it) == '[object Window]' ? getWindowNames(it) : nativeGetOwnPropertyNames$1(toIndexedObject(it));
  };
  var objectGetOwnPropertyNamesExternal = {
    f: f
  };

  var nativeGetOwnPropertyNames = objectGetOwnPropertyNamesExternal.f;
  var FAILS_ON_PRIMITIVES$1 = fails(function () {
    return !Object.getOwnPropertyNames(1);
  });
  _export({
    target: 'Object',
    stat: true,
    forced: FAILS_ON_PRIMITIVES$1
  }, {
    getOwnPropertyNames: nativeGetOwnPropertyNames
  });

  var FAILS_ON_PRIMITIVES = fails(function () {
    objectKeys$2(1);
  });
  _export({
    target: 'Object',
    stat: true,
    forced: FAILS_ON_PRIMITIVES
  }, {
    keys: function keys(it) {
      return objectKeys$2(toObject(it));
    }
  });

  var redefineAll = function (target, src, options) {
    for (var key in src) redefine(target, key, src[key], options);
    return target;
  };

  var freezing = !fails(function () {
    return Object.isExtensible(Object.preventExtensions({}));
  });

  var internalMetadata = createCommonjsModule(function (module) {
    var defineProperty = objectDefineProperty.f;
    var METADATA = uid('meta');
    var id = 0;
    var isExtensible = Object.isExtensible || function () {
      return true;
    };
    var setMetadata = function (it) {
      defineProperty(it, METADATA, {
        value: {
          objectID: 'O' + ++id,
          weakData: {}
        }
      });
    };
    var fastKey = function (it, create) {
      if (!isObject$2(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
      if (!has$2(it, METADATA)) {
        if (!isExtensible(it)) return 'F';
        if (!create) return 'E';
        setMetadata(it);
      }
      return it[METADATA].objectID;
    };
    var getWeakData = function (it, create) {
      if (!has$2(it, METADATA)) {
        if (!isExtensible(it)) return true;
        if (!create) return false;
        setMetadata(it);
      }
      return it[METADATA].weakData;
    };
    var onFreeze = function (it) {
      if (freezing && meta.REQUIRED && isExtensible(it) && !has$2(it, METADATA)) setMetadata(it);
      return it;
    };
    var meta = module.exports = {
      REQUIRED: false,
      fastKey: fastKey,
      getWeakData: getWeakData,
      onFreeze: onFreeze
    };
    hiddenKeys$1[METADATA] = true;
  });

  var iterators = {};

  var ITERATOR$5 = wellKnownSymbol('iterator');
  var ArrayPrototype = Array.prototype;
  var isArrayIteratorMethod = function (it) {
    return it !== undefined && (iterators.Array === it || ArrayPrototype[ITERATOR$5] === it);
  };

  var TO_STRING_TAG$3 = wellKnownSymbol('toStringTag');
  var test = {};
  test[TO_STRING_TAG$3] = 'z';
  var toStringTagSupport = String(test) === '[object z]';

  var TO_STRING_TAG$2 = wellKnownSymbol('toStringTag');
  var CORRECT_ARGUMENTS = classofRaw(function () {
    return arguments;
  }()) == 'Arguments';
  var tryGet = function (it, key) {
    try {
      return it[key];
    } catch (error) {
    }
  };
  var classof = toStringTagSupport ? classofRaw : function (it) {
    var O, tag, result;
    return it === undefined ? 'Undefined' : it === null ? 'Null'
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG$2)) == 'string' ? tag
    : CORRECT_ARGUMENTS ? classofRaw(O)
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
  };

  var ITERATOR$4 = wellKnownSymbol('iterator');
  var getIteratorMethod = function (it) {
    if (it != undefined) return it[ITERATOR$4] || it['@@iterator'] || iterators[classof(it)];
  };

  var iteratorClose = function (iterator) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) {
      return anObject(returnMethod.call(iterator)).value;
    }
  };

  var Result = function (stopped, result) {
    this.stopped = stopped;
    this.result = result;
  };
  var iterate = function (iterable, unboundFunction, options) {
    var that = options && options.that;
    var AS_ENTRIES = !!(options && options.AS_ENTRIES);
    var IS_ITERATOR = !!(options && options.IS_ITERATOR);
    var INTERRUPTED = !!(options && options.INTERRUPTED);
    var fn = functionBindContext(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
    var iterator, iterFn, index, length, result, next, step;
    var stop = function (condition) {
      if (iterator) iteratorClose(iterator);
      return new Result(true, condition);
    };
    var callFn = function (value) {
      if (AS_ENTRIES) {
        anObject(value);
        return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
      }
      return INTERRUPTED ? fn(value, stop) : fn(value);
    };
    if (IS_ITERATOR) {
      iterator = iterable;
    } else {
      iterFn = getIteratorMethod(iterable);
      if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
      if (isArrayIteratorMethod(iterFn)) {
        for (index = 0, length = toLength(iterable.length); length > index; index++) {
          result = callFn(iterable[index]);
          if (result && result instanceof Result) return result;
        }
        return new Result(false);
      }
      iterator = iterFn.call(iterable);
    }
    next = iterator.next;
    while (!(step = next.call(iterator)).done) {
      try {
        result = callFn(step.value);
      } catch (error) {
        iteratorClose(iterator);
        throw error;
      }
      if (typeof result == 'object' && result && result instanceof Result) return result;
    }
    return new Result(false);
  };

  var anInstance = function (it, Constructor, name) {
    if (!(it instanceof Constructor)) {
      throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
    }
    return it;
  };

  var ITERATOR$3 = wellKnownSymbol('iterator');
  var SAFE_CLOSING = false;
  try {
    var called = 0;
    var iteratorWithReturn = {
      next: function () {
        return {
          done: !!called++
        };
      },
      'return': function () {
        SAFE_CLOSING = true;
      }
    };
    iteratorWithReturn[ITERATOR$3] = function () {
      return this;
    };
    Array.from(iteratorWithReturn, function () {
      throw 2;
    });
  } catch (error) {
  }
  var checkCorrectnessOfIteration = function (exec, SKIP_CLOSING) {
    if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
    var ITERATION_SUPPORT = false;
    try {
      var object = {};
      object[ITERATOR$3] = function () {
        return {
          next: function () {
            return {
              done: ITERATION_SUPPORT = true
            };
          }
        };
      };
      exec(object);
    } catch (error) {
    }
    return ITERATION_SUPPORT;
  };

  var defineProperty = objectDefineProperty.f;
  var TO_STRING_TAG$1 = wellKnownSymbol('toStringTag');
  var setToStringTag = function (it, TAG, STATIC) {
    if (it && !has$2(it = STATIC ? it : it.prototype, TO_STRING_TAG$1)) {
      defineProperty(it, TO_STRING_TAG$1, {
        configurable: true,
        value: TAG
      });
    }
  };

  var aPossiblePrototype = function (it) {
    if (!isObject$2(it) && it !== null) {
      throw TypeError("Can't set " + String(it) + ' as a prototype');
    }
    return it;
  };

  var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
    var CORRECT_SETTER = false;
    var test = {};
    var setter;
    try {
      setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
      setter.call(test, []);
      CORRECT_SETTER = test instanceof Array;
    } catch (error) {
    }
    return function setPrototypeOf(O, proto) {
      anObject(O);
      aPossiblePrototype(proto);
      if (CORRECT_SETTER) setter.call(O, proto);else O.__proto__ = proto;
      return O;
    };
  }() : undefined);

  var inheritIfRequired = function ($this, dummy, Wrapper) {
    var NewTarget, NewTargetPrototype;
    if (
    objectSetPrototypeOf &&
    typeof (NewTarget = dummy.constructor) == 'function' && NewTarget !== Wrapper && isObject$2(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype) objectSetPrototypeOf($this, NewTargetPrototype);
    return $this;
  };

  var collection = function (CONSTRUCTOR_NAME, wrapper, common) {
    var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
    var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
    var ADDER = IS_MAP ? 'set' : 'add';
    var NativeConstructor = global$1[CONSTRUCTOR_NAME];
    var NativePrototype = NativeConstructor && NativeConstructor.prototype;
    var Constructor = NativeConstructor;
    var exported = {};
    var fixMethod = function (KEY) {
      var nativeMethod = NativePrototype[KEY];
      redefine(NativePrototype, KEY, KEY == 'add' ? function add(value) {
        nativeMethod.call(this, value === 0 ? 0 : value);
        return this;
      } : KEY == 'delete' ? function (key) {
        return IS_WEAK && !isObject$2(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'get' ? function get(key) {
        return IS_WEAK && !isObject$2(key) ? undefined : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'has' ? function has(key) {
        return IS_WEAK && !isObject$2(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        nativeMethod.call(this, key === 0 ? 0 : key, value);
        return this;
      });
    };
    var REPLACE = isForced_1(CONSTRUCTOR_NAME, typeof NativeConstructor != 'function' || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
      new NativeConstructor().entries().next();
    })));
    if (REPLACE) {
      Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
      internalMetadata.REQUIRED = true;
    } else if (isForced_1(CONSTRUCTOR_NAME, true)) {
      var instance = new Constructor();
      var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
      var THROWS_ON_PRIMITIVES = fails(function () {
        instance.has(1);
      });
      var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) {
        new NativeConstructor(iterable);
      });
      var BUGGY_ZERO = !IS_WEAK && fails(function () {
        var $instance = new NativeConstructor();
        var index = 5;
        while (index--) $instance[ADDER](index, index);
        return !$instance.has(-0);
      });
      if (!ACCEPT_ITERABLES) {
        Constructor = wrapper(function (dummy, iterable) {
          anInstance(dummy, Constructor, CONSTRUCTOR_NAME);
          var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
          if (iterable != undefined) iterate(iterable, that[ADDER], {
            that: that,
            AS_ENTRIES: IS_MAP
          });
          return that;
        });
        Constructor.prototype = NativePrototype;
        NativePrototype.constructor = Constructor;
      }
      if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
        fixMethod('delete');
        fixMethod('has');
        IS_MAP && fixMethod('get');
      }
      if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
      if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
    }
    exported[CONSTRUCTOR_NAME] = Constructor;
    _export({
      global: true,
      forced: Constructor != NativeConstructor
    }, exported);
    setToStringTag(Constructor, CONSTRUCTOR_NAME);
    if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);
    return Constructor;
  };

  var getWeakData = internalMetadata.getWeakData;
  var setInternalState$2 = internalState.set;
  var internalStateGetterFor = internalState.getterFor;
  var find = arrayIteration.find;
  var findIndex = arrayIteration.findIndex;
  var id = 0;
  var uncaughtFrozenStore = function (store) {
    return store.frozen || (store.frozen = new UncaughtFrozenStore());
  };
  var UncaughtFrozenStore = function () {
    this.entries = [];
  };
  var findUncaughtFrozen = function (store, key) {
    return find(store.entries, function (it) {
      return it[0] === key;
    });
  };
  UncaughtFrozenStore.prototype = {
    get: function (key) {
      var entry = findUncaughtFrozen(this, key);
      if (entry) return entry[1];
    },
    has: function (key) {
      return !!findUncaughtFrozen(this, key);
    },
    set: function (key, value) {
      var entry = findUncaughtFrozen(this, key);
      if (entry) entry[1] = value;else this.entries.push([key, value]);
    },
    'delete': function (key) {
      var index = findIndex(this.entries, function (it) {
        return it[0] === key;
      });
      if (~index) this.entries.splice(index, 1);
      return !!~index;
    }
  };
  var collectionWeak = {
    getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
      var C = wrapper(function (that, iterable) {
        anInstance(that, C, CONSTRUCTOR_NAME);
        setInternalState$2(that, {
          type: CONSTRUCTOR_NAME,
          id: id++,
          frozen: undefined
        });
        if (iterable != undefined) iterate(iterable, that[ADDER], {
          that: that,
          AS_ENTRIES: IS_MAP
        });
      });
      var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);
      var define = function (that, key, value) {
        var state = getInternalState(that);
        var data = getWeakData(anObject(key), true);
        if (data === true) uncaughtFrozenStore(state).set(key, value);else data[state.id] = value;
        return that;
      };
      redefineAll(C.prototype, {
        'delete': function (key) {
          var state = getInternalState(this);
          if (!isObject$2(key)) return false;
          var data = getWeakData(key);
          if (data === true) return uncaughtFrozenStore(state)['delete'](key);
          return data && has$2(data, state.id) && delete data[state.id];
        },
        has: function has(key) {
          var state = getInternalState(this);
          if (!isObject$2(key)) return false;
          var data = getWeakData(key);
          if (data === true) return uncaughtFrozenStore(state).has(key);
          return data && has$2(data, state.id);
        }
      });
      redefineAll(C.prototype, IS_MAP ? {
        get: function get(key) {
          var state = getInternalState(this);
          if (isObject$2(key)) {
            var data = getWeakData(key);
            if (data === true) return uncaughtFrozenStore(state).get(key);
            return data ? data[state.id] : undefined;
          }
        },
        set: function set(key, value) {
          return define(this, key, value);
        }
      } : {
        add: function add(value) {
          return define(this, value, true);
        }
      });
      return C;
    }
  };

  createCommonjsModule(function (module) {
    var enforceIternalState = internalState.enforce;
    var IS_IE11 = !global$1.ActiveXObject && 'ActiveXObject' in global$1;
    var isExtensible = Object.isExtensible;
    var InternalWeakMap;
    var wrapper = function (init) {
      return function WeakMap() {
        return init(this, arguments.length ? arguments[0] : undefined);
      };
    };
    var $WeakMap = module.exports = collection('WeakMap', wrapper, collectionWeak);
    if (nativeWeakMap && IS_IE11) {
      InternalWeakMap = collectionWeak.getConstructor(wrapper, 'WeakMap', true);
      internalMetadata.REQUIRED = true;
      var WeakMapPrototype = $WeakMap.prototype;
      var nativeDelete = WeakMapPrototype['delete'];
      var nativeHas = WeakMapPrototype.has;
      var nativeGet = WeakMapPrototype.get;
      var nativeSet = WeakMapPrototype.set;
      redefineAll(WeakMapPrototype, {
        'delete': function (key) {
          if (isObject$2(key) && !isExtensible(key)) {
            var state = enforceIternalState(this);
            if (!state.frozen) state.frozen = new InternalWeakMap();
            return nativeDelete.call(this, key) || state.frozen['delete'](key);
          }
          return nativeDelete.call(this, key);
        },
        has: function has(key) {
          if (isObject$2(key) && !isExtensible(key)) {
            var state = enforceIternalState(this);
            if (!state.frozen) state.frozen = new InternalWeakMap();
            return nativeHas.call(this, key) || state.frozen.has(key);
          }
          return nativeHas.call(this, key);
        },
        get: function get(key) {
          if (isObject$2(key) && !isExtensible(key)) {
            var state = enforceIternalState(this);
            if (!state.frozen) state.frozen = new InternalWeakMap();
            return nativeHas.call(this, key) ? nativeGet.call(this, key) : state.frozen.get(key);
          }
          return nativeGet.call(this, key);
        },
        set: function set(key, value) {
          if (isObject$2(key) && !isExtensible(key)) {
            var state = enforceIternalState(this);
            if (!state.frozen) state.frozen = new InternalWeakMap();
            nativeHas.call(this, key) ? nativeSet.call(this, key, value) : state.frozen.set(key, value);
          } else nativeSet.call(this, key, value);
          return this;
        }
      });
    }
  });

  var objectToString$2 = toStringTagSupport ? {}.toString : function toString() {
    return '[object ' + classof(this) + ']';
  };

  if (!toStringTagSupport) {
    redefine(Object.prototype, 'toString', objectToString$2, {
      unsafe: true
    });
  }

  var correctPrototypeGetter = !fails(function () {
    function F() {
    }
    F.prototype.constructor = null;
    return Object.getPrototypeOf(new F()) !== F.prototype;
  });

  var IE_PROTO = sharedKey('IE_PROTO');
  var ObjectPrototype = Object.prototype;
  var objectGetPrototypeOf = correctPrototypeGetter ? Object.getPrototypeOf : function (O) {
    O = toObject(O);
    if (has$2(O, IE_PROTO)) return O[IE_PROTO];
    if (typeof O.constructor == 'function' && O instanceof O.constructor) {
      return O.constructor.prototype;
    }
    return O instanceof Object ? ObjectPrototype : null;
  };

  var ITERATOR$2 = wellKnownSymbol('iterator');
  var BUGGY_SAFARI_ITERATORS$1 = false;
  var returnThis$2 = function () {
    return this;
  };
  var IteratorPrototype$2, PrototypeOfArrayIteratorPrototype, arrayIterator;
  if ([].keys) {
    arrayIterator = [].keys();
    if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;else {
      PrototypeOfArrayIteratorPrototype = objectGetPrototypeOf(objectGetPrototypeOf(arrayIterator));
      if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$2 = PrototypeOfArrayIteratorPrototype;
    }
  }
  var NEW_ITERATOR_PROTOTYPE = IteratorPrototype$2 == undefined || fails(function () {
    var test = {};
    return IteratorPrototype$2[ITERATOR$2].call(test) !== test;
  });
  if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {};
  if (!has$2(IteratorPrototype$2, ITERATOR$2)) {
    createNonEnumerableProperty(IteratorPrototype$2, ITERATOR$2, returnThis$2);
  }
  var iteratorsCore = {
    IteratorPrototype: IteratorPrototype$2,
    BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
  };

  var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;
  var returnThis$1 = function () {
    return this;
  };
  var createIteratorConstructor = function (IteratorConstructor, NAME, next) {
    var TO_STRING_TAG = NAME + ' Iterator';
    IteratorConstructor.prototype = objectCreate(IteratorPrototype$1, {
      next: createPropertyDescriptor(1, next)
    });
    setToStringTag(IteratorConstructor, TO_STRING_TAG, false);
    iterators[TO_STRING_TAG] = returnThis$1;
    return IteratorConstructor;
  };

  var IteratorPrototype = iteratorsCore.IteratorPrototype;
  var BUGGY_SAFARI_ITERATORS = iteratorsCore.BUGGY_SAFARI_ITERATORS;
  var ITERATOR$1 = wellKnownSymbol('iterator');
  var KEYS = 'keys';
  var VALUES = 'values';
  var ENTRIES = 'entries';
  var returnThis = function () {
    return this;
  };
  var defineIterator = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
    createIteratorConstructor(IteratorConstructor, NAME, next);
    var getIterationMethod = function (KIND) {
      if (KIND === DEFAULT && defaultIterator) return defaultIterator;
      if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
      switch (KIND) {
        case KEYS:
          return function keys() {
            return new IteratorConstructor(this, KIND);
          };
        case VALUES:
          return function values() {
            return new IteratorConstructor(this, KIND);
          };
        case ENTRIES:
          return function entries() {
            return new IteratorConstructor(this, KIND);
          };
      }
      return function () {
        return new IteratorConstructor(this);
      };
    };
    var TO_STRING_TAG = NAME + ' Iterator';
    var INCORRECT_VALUES_NAME = false;
    var IterablePrototype = Iterable.prototype;
    var nativeIterator = IterablePrototype[ITERATOR$1] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];
    var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
    var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
    var CurrentIteratorPrototype, methods, KEY;
    if (anyNativeIterator) {
      CurrentIteratorPrototype = objectGetPrototypeOf(anyNativeIterator.call(new Iterable()));
      if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
        if (objectGetPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
          if (objectSetPrototypeOf) {
            objectSetPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
          } else if (typeof CurrentIteratorPrototype[ITERATOR$1] != 'function') {
            createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR$1, returnThis);
          }
        }
        setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true);
      }
    }
    if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() {
        return nativeIterator.call(this);
      };
    }
    if (IterablePrototype[ITERATOR$1] !== defaultIterator) {
      createNonEnumerableProperty(IterablePrototype, ITERATOR$1, defaultIterator);
    }
    iterators[NAME] = defaultIterator;
    if (DEFAULT) {
      methods = {
        values: getIterationMethod(VALUES),
        keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
        entries: getIterationMethod(ENTRIES)
      };
      if (FORCED) for (KEY in methods) {
        if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
          redefine(IterablePrototype, KEY, methods[KEY]);
        }
      } else _export({
        target: NAME,
        proto: true,
        forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
      }, methods);
    }
    return methods;
  };

  var charAt = stringMultibyte.charAt;
  var STRING_ITERATOR = 'String Iterator';
  var setInternalState$1 = internalState.set;
  var getInternalState$1 = internalState.getterFor(STRING_ITERATOR);
  defineIterator(String, 'String', function (iterated) {
    setInternalState$1(this, {
      type: STRING_ITERATOR,
      string: String(iterated),
      index: 0
    });
  }, function next() {
    var state = getInternalState$1(this);
    var string = state.string;
    var index = state.index;
    var point;
    if (index >= string.length) return {
      value: undefined,
      done: true
    };
    point = charAt(string, index);
    state.index += point.length;
    return {
      value: point,
      done: false
    };
  });

  var ARRAY_ITERATOR = 'Array Iterator';
  var setInternalState = internalState.set;
  var getInternalState = internalState.getterFor(ARRAY_ITERATOR);
  var es_array_iterator = defineIterator(Array, 'Array', function (iterated, kind) {
    setInternalState(this, {
      type: ARRAY_ITERATOR,
      target: toIndexedObject(iterated),
      index: 0,
      kind: kind
    });
  }, function () {
    var state = getInternalState(this);
    var target = state.target;
    var kind = state.kind;
    var index = state.index++;
    if (!target || index >= target.length) {
      state.target = undefined;
      return {
        value: undefined,
        done: true
      };
    }
    if (kind == 'keys') return {
      value: index,
      done: false
    };
    if (kind == 'values') return {
      value: target[index],
      done: false
    };
    return {
      value: [index, target[index]],
      done: false
    };
  }, 'values');
  iterators.Arguments = iterators.Array;
  addToUnscopables('keys');
  addToUnscopables('values');
  addToUnscopables('entries');

  var domIterables = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0
  };

  var ITERATOR = wellKnownSymbol('iterator');
  var TO_STRING_TAG = wellKnownSymbol('toStringTag');
  var ArrayValues = es_array_iterator.values;
  for (var COLLECTION_NAME in domIterables) {
    var Collection = global$1[COLLECTION_NAME];
    var CollectionPrototype = Collection && Collection.prototype;
    if (CollectionPrototype) {
      if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
        createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
      } catch (error) {
        CollectionPrototype[ITERATOR] = ArrayValues;
      }
      if (!CollectionPrototype[TO_STRING_TAG]) {
        createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
      }
      if (domIterables[COLLECTION_NAME]) for (var METHOD_NAME in es_array_iterator) {
        if (CollectionPrototype[METHOD_NAME] !== es_array_iterator[METHOD_NAME]) try {
          createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, es_array_iterator[METHOD_NAME]);
        } catch (error) {
          CollectionPrototype[METHOD_NAME] = es_array_iterator[METHOD_NAME];
        }
      }
    }
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  function _extendableBuiltin(cls) {
    function ExtendableBuiltin() {
      cls.apply(this, arguments);
    }
    ExtendableBuiltin.prototype = Object.create(cls.prototype, {
      constructor: {
        value: cls,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(ExtendableBuiltin, cls);
    } else {
      ExtendableBuiltin.__proto__ = cls;
    }
    return ExtendableBuiltin;
  }
  var ExtendableError$1 = function (_extendableBuiltin2) {
    _inherits(ExtendableError, _extendableBuiltin2);
    function ExtendableError() {
      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      _classCallCheck(this, ExtendableError);
      var _this = _possibleConstructorReturn(this, (ExtendableError.__proto__ || Object.getPrototypeOf(ExtendableError)).call(this, message));
      Object.defineProperty(_this, 'message', {
        configurable: true,
        enumerable: false,
        value: message,
        writable: true
      });
      Object.defineProperty(_this, 'name', {
        configurable: true,
        enumerable: false,
        value: _this.constructor.name,
        writable: true
      });
      if (Error.hasOwnProperty('captureStackTrace')) {
        Error.captureStackTrace(_this, _this.constructor);
        return _possibleConstructorReturn(_this);
      }
      Object.defineProperty(_this, 'stack', {
        configurable: true,
        enumerable: false,
        value: new Error(message).stack,
        writable: true
      });
      return _this;
    }
    return ExtendableError;
  }(_extendableBuiltin(Error));

  var es6 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': ExtendableError$1
  });

  var colorName = {
    "aliceblue": [240, 248, 255],
    "antiquewhite": [250, 235, 215],
    "aqua": [0, 255, 255],
    "aquamarine": [127, 255, 212],
    "azure": [240, 255, 255],
    "beige": [245, 245, 220],
    "bisque": [255, 228, 196],
    "black": [0, 0, 0],
    "blanchedalmond": [255, 235, 205],
    "blue": [0, 0, 255],
    "blueviolet": [138, 43, 226],
    "brown": [165, 42, 42],
    "burlywood": [222, 184, 135],
    "cadetblue": [95, 158, 160],
    "chartreuse": [127, 255, 0],
    "chocolate": [210, 105, 30],
    "coral": [255, 127, 80],
    "cornflowerblue": [100, 149, 237],
    "cornsilk": [255, 248, 220],
    "crimson": [220, 20, 60],
    "cyan": [0, 255, 255],
    "darkblue": [0, 0, 139],
    "darkcyan": [0, 139, 139],
    "darkgoldenrod": [184, 134, 11],
    "darkgray": [169, 169, 169],
    "darkgreen": [0, 100, 0],
    "darkgrey": [169, 169, 169],
    "darkkhaki": [189, 183, 107],
    "darkmagenta": [139, 0, 139],
    "darkolivegreen": [85, 107, 47],
    "darkorange": [255, 140, 0],
    "darkorchid": [153, 50, 204],
    "darkred": [139, 0, 0],
    "darksalmon": [233, 150, 122],
    "darkseagreen": [143, 188, 143],
    "darkslateblue": [72, 61, 139],
    "darkslategray": [47, 79, 79],
    "darkslategrey": [47, 79, 79],
    "darkturquoise": [0, 206, 209],
    "darkviolet": [148, 0, 211],
    "deeppink": [255, 20, 147],
    "deepskyblue": [0, 191, 255],
    "dimgray": [105, 105, 105],
    "dimgrey": [105, 105, 105],
    "dodgerblue": [30, 144, 255],
    "firebrick": [178, 34, 34],
    "floralwhite": [255, 250, 240],
    "forestgreen": [34, 139, 34],
    "fuchsia": [255, 0, 255],
    "gainsboro": [220, 220, 220],
    "ghostwhite": [248, 248, 255],
    "gold": [255, 215, 0],
    "goldenrod": [218, 165, 32],
    "gray": [128, 128, 128],
    "green": [0, 128, 0],
    "greenyellow": [173, 255, 47],
    "grey": [128, 128, 128],
    "honeydew": [240, 255, 240],
    "hotpink": [255, 105, 180],
    "indianred": [205, 92, 92],
    "indigo": [75, 0, 130],
    "ivory": [255, 255, 240],
    "khaki": [240, 230, 140],
    "lavender": [230, 230, 250],
    "lavenderblush": [255, 240, 245],
    "lawngreen": [124, 252, 0],
    "lemonchiffon": [255, 250, 205],
    "lightblue": [173, 216, 230],
    "lightcoral": [240, 128, 128],
    "lightcyan": [224, 255, 255],
    "lightgoldenrodyellow": [250, 250, 210],
    "lightgray": [211, 211, 211],
    "lightgreen": [144, 238, 144],
    "lightgrey": [211, 211, 211],
    "lightpink": [255, 182, 193],
    "lightsalmon": [255, 160, 122],
    "lightseagreen": [32, 178, 170],
    "lightskyblue": [135, 206, 250],
    "lightslategray": [119, 136, 153],
    "lightslategrey": [119, 136, 153],
    "lightsteelblue": [176, 196, 222],
    "lightyellow": [255, 255, 224],
    "lime": [0, 255, 0],
    "limegreen": [50, 205, 50],
    "linen": [250, 240, 230],
    "magenta": [255, 0, 255],
    "maroon": [128, 0, 0],
    "mediumaquamarine": [102, 205, 170],
    "mediumblue": [0, 0, 205],
    "mediumorchid": [186, 85, 211],
    "mediumpurple": [147, 112, 219],
    "mediumseagreen": [60, 179, 113],
    "mediumslateblue": [123, 104, 238],
    "mediumspringgreen": [0, 250, 154],
    "mediumturquoise": [72, 209, 204],
    "mediumvioletred": [199, 21, 133],
    "midnightblue": [25, 25, 112],
    "mintcream": [245, 255, 250],
    "mistyrose": [255, 228, 225],
    "moccasin": [255, 228, 181],
    "navajowhite": [255, 222, 173],
    "navy": [0, 0, 128],
    "oldlace": [253, 245, 230],
    "olive": [128, 128, 0],
    "olivedrab": [107, 142, 35],
    "orange": [255, 165, 0],
    "orangered": [255, 69, 0],
    "orchid": [218, 112, 214],
    "palegoldenrod": [238, 232, 170],
    "palegreen": [152, 251, 152],
    "paleturquoise": [175, 238, 238],
    "palevioletred": [219, 112, 147],
    "papayawhip": [255, 239, 213],
    "peachpuff": [255, 218, 185],
    "peru": [205, 133, 63],
    "pink": [255, 192, 203],
    "plum": [221, 160, 221],
    "powderblue": [176, 224, 230],
    "purple": [128, 0, 128],
    "rebeccapurple": [102, 51, 153],
    "red": [255, 0, 0],
    "rosybrown": [188, 143, 143],
    "royalblue": [65, 105, 225],
    "saddlebrown": [139, 69, 19],
    "salmon": [250, 128, 114],
    "sandybrown": [244, 164, 96],
    "seagreen": [46, 139, 87],
    "seashell": [255, 245, 238],
    "sienna": [160, 82, 45],
    "silver": [192, 192, 192],
    "skyblue": [135, 206, 235],
    "slateblue": [106, 90, 205],
    "slategray": [112, 128, 144],
    "slategrey": [112, 128, 144],
    "snow": [255, 250, 250],
    "springgreen": [0, 255, 127],
    "steelblue": [70, 130, 180],
    "tan": [210, 180, 140],
    "teal": [0, 128, 128],
    "thistle": [216, 191, 216],
    "tomato": [255, 99, 71],
    "turquoise": [64, 224, 208],
    "violet": [238, 130, 238],
    "wheat": [245, 222, 179],
    "white": [255, 255, 255],
    "whitesmoke": [245, 245, 245],
    "yellow": [255, 255, 0],
    "yellowgreen": [154, 205, 50]
  };

  const reverseKeywords = {};
  for (const key of Object.keys(colorName)) {
    reverseKeywords[colorName[key]] = key;
  }
  const convert$1 = {
    rgb: {
      channels: 3,
      labels: 'rgb'
    },
    hsl: {
      channels: 3,
      labels: 'hsl'
    },
    hsv: {
      channels: 3,
      labels: 'hsv'
    },
    hwb: {
      channels: 3,
      labels: 'hwb'
    },
    cmyk: {
      channels: 4,
      labels: 'cmyk'
    },
    xyz: {
      channels: 3,
      labels: 'xyz'
    },
    lab: {
      channels: 3,
      labels: 'lab'
    },
    lch: {
      channels: 3,
      labels: 'lch'
    },
    hex: {
      channels: 1,
      labels: ['hex']
    },
    keyword: {
      channels: 1,
      labels: ['keyword']
    },
    ansi16: {
      channels: 1,
      labels: ['ansi16']
    },
    ansi256: {
      channels: 1,
      labels: ['ansi256']
    },
    hcg: {
      channels: 3,
      labels: ['h', 'c', 'g']
    },
    apple: {
      channels: 3,
      labels: ['r16', 'g16', 'b16']
    },
    gray: {
      channels: 1,
      labels: ['gray']
    }
  };
  var conversions = convert$1;
  for (const model of Object.keys(convert$1)) {
    if (!('channels' in convert$1[model])) {
      throw new Error('missing channels property: ' + model);
    }
    if (!('labels' in convert$1[model])) {
      throw new Error('missing channel labels property: ' + model);
    }
    if (convert$1[model].labels.length !== convert$1[model].channels) {
      throw new Error('channel and label counts mismatch: ' + model);
    }
    const {
      channels,
      labels
    } = convert$1[model];
    delete convert$1[model].channels;
    delete convert$1[model].labels;
    Object.defineProperty(convert$1[model], 'channels', {
      value: channels
    });
    Object.defineProperty(convert$1[model], 'labels', {
      value: labels
    });
  }
  convert$1.rgb.hsl = function (rgb) {
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
    const min = Math.min(r, g, b);
    const max = Math.max(r, g, b);
    const delta = max - min;
    let h;
    let s;
    if (max === min) {
      h = 0;
    } else if (r === max) {
      h = (g - b) / delta;
    } else if (g === max) {
      h = 2 + (b - r) / delta;
    } else if (b === max) {
      h = 4 + (r - g) / delta;
    }
    h = Math.min(h * 60, 360);
    if (h < 0) {
      h += 360;
    }
    const l = (min + max) / 2;
    if (max === min) {
      s = 0;
    } else if (l <= 0.5) {
      s = delta / (max + min);
    } else {
      s = delta / (2 - max - min);
    }
    return [h, s * 100, l * 100];
  };
  convert$1.rgb.hsv = function (rgb) {
    let rdif;
    let gdif;
    let bdif;
    let h;
    let s;
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
    const v = Math.max(r, g, b);
    const diff = v - Math.min(r, g, b);
    const diffc = function (c) {
      return (v - c) / 6 / diff + 1 / 2;
    };
    if (diff === 0) {
      h = 0;
      s = 0;
    } else {
      s = diff / v;
      rdif = diffc(r);
      gdif = diffc(g);
      bdif = diffc(b);
      if (r === v) {
        h = bdif - gdif;
      } else if (g === v) {
        h = 1 / 3 + rdif - bdif;
      } else if (b === v) {
        h = 2 / 3 + gdif - rdif;
      }
      if (h < 0) {
        h += 1;
      } else if (h > 1) {
        h -= 1;
      }
    }
    return [h * 360, s * 100, v * 100];
  };
  convert$1.rgb.hwb = function (rgb) {
    const r = rgb[0];
    const g = rgb[1];
    let b = rgb[2];
    const h = convert$1.rgb.hsl(rgb)[0];
    const w = 1 / 255 * Math.min(r, Math.min(g, b));
    b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
    return [h, w * 100, b * 100];
  };
  convert$1.rgb.cmyk = function (rgb) {
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
    const k = Math.min(1 - r, 1 - g, 1 - b);
    const c = (1 - r - k) / (1 - k) || 0;
    const m = (1 - g - k) / (1 - k) || 0;
    const y = (1 - b - k) / (1 - k) || 0;
    return [c * 100, m * 100, y * 100, k * 100];
  };
  function comparativeDistance(x, y) {
    return (x[0] - y[0]) ** 2 + (x[1] - y[1]) ** 2 + (x[2] - y[2]) ** 2;
  }
  convert$1.rgb.keyword = function (rgb) {
    const reversed = reverseKeywords[rgb];
    if (reversed) {
      return reversed;
    }
    let currentClosestDistance = Infinity;
    let currentClosestKeyword;
    for (const keyword of Object.keys(colorName)) {
      const value = colorName[keyword];
      const distance = comparativeDistance(rgb, value);
      if (distance < currentClosestDistance) {
        currentClosestDistance = distance;
        currentClosestKeyword = keyword;
      }
    }
    return currentClosestKeyword;
  };
  convert$1.keyword.rgb = function (keyword) {
    return colorName[keyword];
  };
  convert$1.rgb.xyz = function (rgb) {
    let r = rgb[0] / 255;
    let g = rgb[1] / 255;
    let b = rgb[2] / 255;
    r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92;
    g = g > 0.04045 ? ((g + 0.055) / 1.055) ** 2.4 : g / 12.92;
    b = b > 0.04045 ? ((b + 0.055) / 1.055) ** 2.4 : b / 12.92;
    const x = r * 0.4124 + g * 0.3576 + b * 0.1805;
    const y = r * 0.2126 + g * 0.7152 + b * 0.0722;
    const z = r * 0.0193 + g * 0.1192 + b * 0.9505;
    return [x * 100, y * 100, z * 100];
  };
  convert$1.rgb.lab = function (rgb) {
    const xyz = convert$1.rgb.xyz(rgb);
    let x = xyz[0];
    let y = xyz[1];
    let z = xyz[2];
    x /= 95.047;
    y /= 100;
    z /= 108.883;
    x = x > 0.008856 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
    y = y > 0.008856 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
    z = z > 0.008856 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
    const l = 116 * y - 16;
    const a = 500 * (x - y);
    const b = 200 * (y - z);
    return [l, a, b];
  };
  convert$1.hsl.rgb = function (hsl) {
    const h = hsl[0] / 360;
    const s = hsl[1] / 100;
    const l = hsl[2] / 100;
    let t2;
    let t3;
    let val;
    if (s === 0) {
      val = l * 255;
      return [val, val, val];
    }
    if (l < 0.5) {
      t2 = l * (1 + s);
    } else {
      t2 = l + s - l * s;
    }
    const t1 = 2 * l - t2;
    const rgb = [0, 0, 0];
    for (let i = 0; i < 3; i++) {
      t3 = h + 1 / 3 * -(i - 1);
      if (t3 < 0) {
        t3++;
      }
      if (t3 > 1) {
        t3--;
      }
      if (6 * t3 < 1) {
        val = t1 + (t2 - t1) * 6 * t3;
      } else if (2 * t3 < 1) {
        val = t2;
      } else if (3 * t3 < 2) {
        val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
      } else {
        val = t1;
      }
      rgb[i] = val * 255;
    }
    return rgb;
  };
  convert$1.hsl.hsv = function (hsl) {
    const h = hsl[0];
    let s = hsl[1] / 100;
    let l = hsl[2] / 100;
    let smin = s;
    const lmin = Math.max(l, 0.01);
    l *= 2;
    s *= l <= 1 ? l : 2 - l;
    smin *= lmin <= 1 ? lmin : 2 - lmin;
    const v = (l + s) / 2;
    const sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);
    return [h, sv * 100, v * 100];
  };
  convert$1.hsv.rgb = function (hsv) {
    const h = hsv[0] / 60;
    const s = hsv[1] / 100;
    let v = hsv[2] / 100;
    const hi = Math.floor(h) % 6;
    const f = h - Math.floor(h);
    const p = 255 * v * (1 - s);
    const q = 255 * v * (1 - s * f);
    const t = 255 * v * (1 - s * (1 - f));
    v *= 255;
    switch (hi) {
      case 0:
        return [v, t, p];
      case 1:
        return [q, v, p];
      case 2:
        return [p, v, t];
      case 3:
        return [p, q, v];
      case 4:
        return [t, p, v];
      case 5:
        return [v, p, q];
    }
  };
  convert$1.hsv.hsl = function (hsv) {
    const h = hsv[0];
    const s = hsv[1] / 100;
    const v = hsv[2] / 100;
    const vmin = Math.max(v, 0.01);
    let sl;
    let l;
    l = (2 - s) * v;
    const lmin = (2 - s) * vmin;
    sl = s * vmin;
    sl /= lmin <= 1 ? lmin : 2 - lmin;
    sl = sl || 0;
    l /= 2;
    return [h, sl * 100, l * 100];
  };
  convert$1.hwb.rgb = function (hwb) {
    const h = hwb[0] / 360;
    let wh = hwb[1] / 100;
    let bl = hwb[2] / 100;
    const ratio = wh + bl;
    let f;
    if (ratio > 1) {
      wh /= ratio;
      bl /= ratio;
    }
    const i = Math.floor(6 * h);
    const v = 1 - bl;
    f = 6 * h - i;
    if ((i & 0x01) !== 0) {
      f = 1 - f;
    }
    const n = wh + f * (v - wh);
    let r;
    let g;
    let b;
    switch (i) {
      default:
      case 6:
      case 0:
        r = v;
        g = n;
        b = wh;
        break;
      case 1:
        r = n;
        g = v;
        b = wh;
        break;
      case 2:
        r = wh;
        g = v;
        b = n;
        break;
      case 3:
        r = wh;
        g = n;
        b = v;
        break;
      case 4:
        r = n;
        g = wh;
        b = v;
        break;
      case 5:
        r = v;
        g = wh;
        b = n;
        break;
    }
    return [r * 255, g * 255, b * 255];
  };
  convert$1.cmyk.rgb = function (cmyk) {
    const c = cmyk[0] / 100;
    const m = cmyk[1] / 100;
    const y = cmyk[2] / 100;
    const k = cmyk[3] / 100;
    const r = 1 - Math.min(1, c * (1 - k) + k);
    const g = 1 - Math.min(1, m * (1 - k) + k);
    const b = 1 - Math.min(1, y * (1 - k) + k);
    return [r * 255, g * 255, b * 255];
  };
  convert$1.xyz.rgb = function (xyz) {
    const x = xyz[0] / 100;
    const y = xyz[1] / 100;
    const z = xyz[2] / 100;
    let r;
    let g;
    let b;
    r = x * 3.2406 + y * -1.5372 + z * -0.4986;
    g = x * -0.9689 + y * 1.8758 + z * 0.0415;
    b = x * 0.0557 + y * -0.2040 + z * 1.0570;
    r = r > 0.0031308 ? 1.055 * r ** (1.0 / 2.4) - 0.055 : r * 12.92;
    g = g > 0.0031308 ? 1.055 * g ** (1.0 / 2.4) - 0.055 : g * 12.92;
    b = b > 0.0031308 ? 1.055 * b ** (1.0 / 2.4) - 0.055 : b * 12.92;
    r = Math.min(Math.max(0, r), 1);
    g = Math.min(Math.max(0, g), 1);
    b = Math.min(Math.max(0, b), 1);
    return [r * 255, g * 255, b * 255];
  };
  convert$1.xyz.lab = function (xyz) {
    let x = xyz[0];
    let y = xyz[1];
    let z = xyz[2];
    x /= 95.047;
    y /= 100;
    z /= 108.883;
    x = x > 0.008856 ? x ** (1 / 3) : 7.787 * x + 16 / 116;
    y = y > 0.008856 ? y ** (1 / 3) : 7.787 * y + 16 / 116;
    z = z > 0.008856 ? z ** (1 / 3) : 7.787 * z + 16 / 116;
    const l = 116 * y - 16;
    const a = 500 * (x - y);
    const b = 200 * (y - z);
    return [l, a, b];
  };
  convert$1.lab.xyz = function (lab) {
    const l = lab[0];
    const a = lab[1];
    const b = lab[2];
    let x;
    let y;
    let z;
    y = (l + 16) / 116;
    x = a / 500 + y;
    z = y - b / 200;
    const y2 = y ** 3;
    const x2 = x ** 3;
    const z2 = z ** 3;
    y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
    x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
    z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;
    x *= 95.047;
    y *= 100;
    z *= 108.883;
    return [x, y, z];
  };
  convert$1.lab.lch = function (lab) {
    const l = lab[0];
    const a = lab[1];
    const b = lab[2];
    let h;
    const hr = Math.atan2(b, a);
    h = hr * 360 / 2 / Math.PI;
    if (h < 0) {
      h += 360;
    }
    const c = Math.sqrt(a * a + b * b);
    return [l, c, h];
  };
  convert$1.lch.lab = function (lch) {
    const l = lch[0];
    const c = lch[1];
    const h = lch[2];
    const hr = h / 360 * 2 * Math.PI;
    const a = c * Math.cos(hr);
    const b = c * Math.sin(hr);
    return [l, a, b];
  };
  convert$1.rgb.ansi16 = function (args, saturation = null) {
    const [r, g, b] = args;
    let value = saturation === null ? convert$1.rgb.hsv(args)[2] : saturation;
    value = Math.round(value / 50);
    if (value === 0) {
      return 30;
    }
    let ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));
    if (value === 2) {
      ansi += 60;
    }
    return ansi;
  };
  convert$1.hsv.ansi16 = function (args) {
    return convert$1.rgb.ansi16(convert$1.hsv.rgb(args), args[2]);
  };
  convert$1.rgb.ansi256 = function (args) {
    const r = args[0];
    const g = args[1];
    const b = args[2];
    if (r === g && g === b) {
      if (r < 8) {
        return 16;
      }
      if (r > 248) {
        return 231;
      }
      return Math.round((r - 8) / 247 * 24) + 232;
    }
    const ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
    return ansi;
  };
  convert$1.ansi16.rgb = function (args) {
    let color = args % 10;
    if (color === 0 || color === 7) {
      if (args > 50) {
        color += 3.5;
      }
      color = color / 10.5 * 255;
      return [color, color, color];
    }
    const mult = (~~(args > 50) + 1) * 0.5;
    const r = (color & 1) * mult * 255;
    const g = (color >> 1 & 1) * mult * 255;
    const b = (color >> 2 & 1) * mult * 255;
    return [r, g, b];
  };
  convert$1.ansi256.rgb = function (args) {
    if (args >= 232) {
      const c = (args - 232) * 10 + 8;
      return [c, c, c];
    }
    args -= 16;
    let rem;
    const r = Math.floor(args / 36) / 5 * 255;
    const g = Math.floor((rem = args % 36) / 6) / 5 * 255;
    const b = rem % 6 / 5 * 255;
    return [r, g, b];
  };
  convert$1.rgb.hex = function (args) {
    const integer = ((Math.round(args[0]) & 0xFF) << 16) + ((Math.round(args[1]) & 0xFF) << 8) + (Math.round(args[2]) & 0xFF);
    const string = integer.toString(16).toUpperCase();
    return '000000'.substring(string.length) + string;
  };
  convert$1.hex.rgb = function (args) {
    const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
    if (!match) {
      return [0, 0, 0];
    }
    let colorString = match[0];
    if (match[0].length === 3) {
      colorString = colorString.split('').map(char => {
        return char + char;
      }).join('');
    }
    const integer = parseInt(colorString, 16);
    const r = integer >> 16 & 0xFF;
    const g = integer >> 8 & 0xFF;
    const b = integer & 0xFF;
    return [r, g, b];
  };
  convert$1.rgb.hcg = function (rgb) {
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;
    const max = Math.max(Math.max(r, g), b);
    const min = Math.min(Math.min(r, g), b);
    const chroma = max - min;
    let grayscale;
    let hue;
    if (chroma < 1) {
      grayscale = min / (1 - chroma);
    } else {
      grayscale = 0;
    }
    if (chroma <= 0) {
      hue = 0;
    } else if (max === r) {
      hue = (g - b) / chroma % 6;
    } else if (max === g) {
      hue = 2 + (b - r) / chroma;
    } else {
      hue = 4 + (r - g) / chroma;
    }
    hue /= 6;
    hue %= 1;
    return [hue * 360, chroma * 100, grayscale * 100];
  };
  convert$1.hsl.hcg = function (hsl) {
    const s = hsl[1] / 100;
    const l = hsl[2] / 100;
    const c = l < 0.5 ? 2.0 * s * l : 2.0 * s * (1.0 - l);
    let f = 0;
    if (c < 1.0) {
      f = (l - 0.5 * c) / (1.0 - c);
    }
    return [hsl[0], c * 100, f * 100];
  };
  convert$1.hsv.hcg = function (hsv) {
    const s = hsv[1] / 100;
    const v = hsv[2] / 100;
    const c = s * v;
    let f = 0;
    if (c < 1.0) {
      f = (v - c) / (1 - c);
    }
    return [hsv[0], c * 100, f * 100];
  };
  convert$1.hcg.rgb = function (hcg) {
    const h = hcg[0] / 360;
    const c = hcg[1] / 100;
    const g = hcg[2] / 100;
    if (c === 0.0) {
      return [g * 255, g * 255, g * 255];
    }
    const pure = [0, 0, 0];
    const hi = h % 1 * 6;
    const v = hi % 1;
    const w = 1 - v;
    let mg = 0;
    switch (Math.floor(hi)) {
      case 0:
        pure[0] = 1;
        pure[1] = v;
        pure[2] = 0;
        break;
      case 1:
        pure[0] = w;
        pure[1] = 1;
        pure[2] = 0;
        break;
      case 2:
        pure[0] = 0;
        pure[1] = 1;
        pure[2] = v;
        break;
      case 3:
        pure[0] = 0;
        pure[1] = w;
        pure[2] = 1;
        break;
      case 4:
        pure[0] = v;
        pure[1] = 0;
        pure[2] = 1;
        break;
      default:
        pure[0] = 1;
        pure[1] = 0;
        pure[2] = w;
    }
    mg = (1.0 - c) * g;
    return [(c * pure[0] + mg) * 255, (c * pure[1] + mg) * 255, (c * pure[2] + mg) * 255];
  };
  convert$1.hcg.hsv = function (hcg) {
    const c = hcg[1] / 100;
    const g = hcg[2] / 100;
    const v = c + g * (1.0 - c);
    let f = 0;
    if (v > 0.0) {
      f = c / v;
    }
    return [hcg[0], f * 100, v * 100];
  };
  convert$1.hcg.hsl = function (hcg) {
    const c = hcg[1] / 100;
    const g = hcg[2] / 100;
    const l = g * (1.0 - c) + 0.5 * c;
    let s = 0;
    if (l > 0.0 && l < 0.5) {
      s = c / (2 * l);
    } else if (l >= 0.5 && l < 1.0) {
      s = c / (2 * (1 - l));
    }
    return [hcg[0], s * 100, l * 100];
  };
  convert$1.hcg.hwb = function (hcg) {
    const c = hcg[1] / 100;
    const g = hcg[2] / 100;
    const v = c + g * (1.0 - c);
    return [hcg[0], (v - c) * 100, (1 - v) * 100];
  };
  convert$1.hwb.hcg = function (hwb) {
    const w = hwb[1] / 100;
    const b = hwb[2] / 100;
    const v = 1 - b;
    const c = v - w;
    let g = 0;
    if (c < 1) {
      g = (v - c) / (1 - c);
    }
    return [hwb[0], c * 100, g * 100];
  };
  convert$1.apple.rgb = function (apple) {
    return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
  };
  convert$1.rgb.apple = function (rgb) {
    return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
  };
  convert$1.gray.rgb = function (args) {
    return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
  };
  convert$1.gray.hsl = function (args) {
    return [0, 0, args[0]];
  };
  convert$1.gray.hsv = convert$1.gray.hsl;
  convert$1.gray.hwb = function (gray) {
    return [0, 100, gray[0]];
  };
  convert$1.gray.cmyk = function (gray) {
    return [0, 0, 0, gray[0]];
  };
  convert$1.gray.lab = function (gray) {
    return [gray[0], 0, 0];
  };
  convert$1.gray.hex = function (gray) {
    const val = Math.round(gray[0] / 100 * 255) & 0xFF;
    const integer = (val << 16) + (val << 8) + val;
    const string = integer.toString(16).toUpperCase();
    return '000000'.substring(string.length) + string;
  };
  convert$1.rgb.gray = function (rgb) {
    const val = (rgb[0] + rgb[1] + rgb[2]) / 3;
    return [val / 255 * 100];
  };

  function buildGraph() {
    const graph = {};
    const models = Object.keys(conversions);
    for (let len = models.length, i = 0; i < len; i++) {
      graph[models[i]] = {
        distance: -1,
        parent: null
      };
    }
    return graph;
  }
  function deriveBFS(fromModel) {
    const graph = buildGraph();
    const queue = [fromModel];
    graph[fromModel].distance = 0;
    while (queue.length) {
      const current = queue.pop();
      const adjacents = Object.keys(conversions[current]);
      for (let len = adjacents.length, i = 0; i < len; i++) {
        const adjacent = adjacents[i];
        const node = graph[adjacent];
        if (node.distance === -1) {
          node.distance = graph[current].distance + 1;
          node.parent = current;
          queue.unshift(adjacent);
        }
      }
    }
    return graph;
  }
  function link(from, to) {
    return function (args) {
      return to(from(args));
    };
  }
  function wrapConversion(toModel, graph) {
    const path = [graph[toModel].parent, toModel];
    let fn = conversions[graph[toModel].parent][toModel];
    let cur = graph[toModel].parent;
    while (graph[cur].parent) {
      path.unshift(graph[cur].parent);
      fn = link(conversions[graph[cur].parent][cur], fn);
      cur = graph[cur].parent;
    }
    fn.conversion = path;
    return fn;
  }
  var route = function (fromModel) {
    const graph = deriveBFS(fromModel);
    const conversion = {};
    const models = Object.keys(graph);
    for (let len = models.length, i = 0; i < len; i++) {
      const toModel = models[i];
      const node = graph[toModel];
      if (node.parent === null) {
        continue;
      }
      conversion[toModel] = wrapConversion(toModel, graph);
    }
    return conversion;
  };

  const convert = {};
  const models = Object.keys(conversions);
  function wrapRaw(fn) {
    const wrappedFn = function (...args) {
      const arg0 = args[0];
      if (arg0 === undefined || arg0 === null) {
        return arg0;
      }
      if (arg0.length > 1) {
        args = arg0;
      }
      return fn(args);
    };
    if ('conversion' in fn) {
      wrappedFn.conversion = fn.conversion;
    }
    return wrappedFn;
  }
  function wrapRounded(fn) {
    const wrappedFn = function (...args) {
      const arg0 = args[0];
      if (arg0 === undefined || arg0 === null) {
        return arg0;
      }
      if (arg0.length > 1) {
        args = arg0;
      }
      const result = fn(args);
      if (typeof result === 'object') {
        for (let len = result.length, i = 0; i < len; i++) {
          result[i] = Math.round(result[i]);
        }
      }
      return result;
    };
    if ('conversion' in fn) {
      wrappedFn.conversion = fn.conversion;
    }
    return wrappedFn;
  }
  models.forEach(fromModel => {
    convert[fromModel] = {};
    Object.defineProperty(convert[fromModel], 'channels', {
      value: conversions[fromModel].channels
    });
    Object.defineProperty(convert[fromModel], 'labels', {
      value: conversions[fromModel].labels
    });
    const routes = route(fromModel);
    const routeModels = Object.keys(routes);
    routeModels.forEach(toModel => {
      const fn = routes[toModel];
      convert[fromModel][toModel] = wrapRounded(fn);
      convert[fromModel][toModel].raw = wrapRaw(fn);
    });
  });
  var colorConvert = convert;

  var ansiStyles = createCommonjsModule(function (module) {
    const wrapAnsi16 = (fn, offset) => (...args) => {
      const code = fn(...args);
      return `\u001B[${code + offset}m`;
    };
    const wrapAnsi256 = (fn, offset) => (...args) => {
      const code = fn(...args);
      return `\u001B[${38 + offset};5;${code}m`;
    };
    const wrapAnsi16m = (fn, offset) => (...args) => {
      const rgb = fn(...args);
      return `\u001B[${38 + offset};2;${rgb[0]};${rgb[1]};${rgb[2]}m`;
    };
    const ansi2ansi = n => n;
    const rgb2rgb = (r, g, b) => [r, g, b];
    const setLazyProperty = (object, property, get) => {
      Object.defineProperty(object, property, {
        get: () => {
          const value = get();
          Object.defineProperty(object, property, {
            value,
            enumerable: true,
            configurable: true
          });
          return value;
        },
        enumerable: true,
        configurable: true
      });
    };
    let colorConvert$1;
    const makeDynamicStyles = (wrap, targetSpace, identity, isBackground) => {
      if (colorConvert$1 === undefined) {
        colorConvert$1 = colorConvert;
      }
      const offset = isBackground ? 10 : 0;
      const styles = {};
      for (const [sourceSpace, suite] of Object.entries(colorConvert$1)) {
        const name = sourceSpace === 'ansi16' ? 'ansi' : sourceSpace;
        if (sourceSpace === targetSpace) {
          styles[name] = wrap(identity, offset);
        } else if (typeof suite === 'object') {
          styles[name] = wrap(suite[targetSpace], offset);
        }
      }
      return styles;
    };
    function assembleStyles() {
      const codes = new Map();
      const styles = {
        modifier: {
          reset: [0, 0],
          bold: [1, 22],
          dim: [2, 22],
          italic: [3, 23],
          underline: [4, 24],
          inverse: [7, 27],
          hidden: [8, 28],
          strikethrough: [9, 29]
        },
        color: {
          black: [30, 39],
          red: [31, 39],
          green: [32, 39],
          yellow: [33, 39],
          blue: [34, 39],
          magenta: [35, 39],
          cyan: [36, 39],
          white: [37, 39],
          blackBright: [90, 39],
          redBright: [91, 39],
          greenBright: [92, 39],
          yellowBright: [93, 39],
          blueBright: [94, 39],
          magentaBright: [95, 39],
          cyanBright: [96, 39],
          whiteBright: [97, 39]
        },
        bgColor: {
          bgBlack: [40, 49],
          bgRed: [41, 49],
          bgGreen: [42, 49],
          bgYellow: [43, 49],
          bgBlue: [44, 49],
          bgMagenta: [45, 49],
          bgCyan: [46, 49],
          bgWhite: [47, 49],
          bgBlackBright: [100, 49],
          bgRedBright: [101, 49],
          bgGreenBright: [102, 49],
          bgYellowBright: [103, 49],
          bgBlueBright: [104, 49],
          bgMagentaBright: [105, 49],
          bgCyanBright: [106, 49],
          bgWhiteBright: [107, 49]
        }
      };
      styles.color.gray = styles.color.blackBright;
      styles.bgColor.bgGray = styles.bgColor.bgBlackBright;
      styles.color.grey = styles.color.blackBright;
      styles.bgColor.bgGrey = styles.bgColor.bgBlackBright;
      for (const [groupName, group] of Object.entries(styles)) {
        for (const [styleName, style] of Object.entries(group)) {
          styles[styleName] = {
            open: `\u001B[${style[0]}m`,
            close: `\u001B[${style[1]}m`
          };
          group[styleName] = styles[styleName];
          codes.set(style[0], style[1]);
        }
        Object.defineProperty(styles, groupName, {
          value: group,
          enumerable: false
        });
      }
      Object.defineProperty(styles, 'codes', {
        value: codes,
        enumerable: false
      });
      styles.color.close = '\u001B[39m';
      styles.bgColor.close = '\u001B[49m';
      setLazyProperty(styles.color, 'ansi', () => makeDynamicStyles(wrapAnsi16, 'ansi16', ansi2ansi, false));
      setLazyProperty(styles.color, 'ansi256', () => makeDynamicStyles(wrapAnsi256, 'ansi256', ansi2ansi, false));
      setLazyProperty(styles.color, 'ansi16m', () => makeDynamicStyles(wrapAnsi16m, 'rgb', rgb2rgb, false));
      setLazyProperty(styles.bgColor, 'ansi', () => makeDynamicStyles(wrapAnsi16, 'ansi16', ansi2ansi, true));
      setLazyProperty(styles.bgColor, 'ansi256', () => makeDynamicStyles(wrapAnsi256, 'ansi256', ansi2ansi, true));
      setLazyProperty(styles.bgColor, 'ansi16m', () => makeDynamicStyles(wrapAnsi16m, 'rgb', rgb2rgb, true));
      return styles;
    }
    Object.defineProperty(module, 'exports', {
      enumerable: true,
      get: assembleStyles
    });
  });

  var _endianness;
  function endianness() {
    if (typeof _endianness === 'undefined') {
      var a = new ArrayBuffer(2);
      var b = new Uint8Array(a);
      var c = new Uint16Array(a);
      b[0] = 1;
      b[1] = 2;
      if (c[0] === 258) {
        _endianness = 'BE';
      } else if (c[0] === 513) {
        _endianness = 'LE';
      } else {
        throw new Error('unable to figure out endianess');
      }
    }
    return _endianness;
  }
  function hostname() {
    if (typeof global.location !== 'undefined') {
      return global.location.hostname;
    } else return '';
  }
  function loadavg() {
    return [];
  }
  function uptime() {
    return 0;
  }
  function freemem() {
    return Number.MAX_VALUE;
  }
  function totalmem() {
    return Number.MAX_VALUE;
  }
  function cpus() {
    return [];
  }
  function type() {
    return 'Browser';
  }
  function release() {
    if (typeof global.navigator !== 'undefined') {
      return global.navigator.appVersion;
    }
    return '';
  }
  function networkInterfaces() {}
  function getNetworkInterfaces() {}
  function arch() {
    return 'javascript';
  }
  function platform() {
    return 'browser';
  }
  function tmpDir() {
    return '/tmp';
  }
  var tmpdir = tmpDir;
  var EOL = '\n';
  var os$1 = {
    EOL: EOL,
    tmpdir: tmpdir,
    tmpDir: tmpDir,
    networkInterfaces: networkInterfaces,
    getNetworkInterfaces: getNetworkInterfaces,
    release: release,
    type: type,
    cpus: cpus,
    totalmem: totalmem,
    freemem: freemem,
    uptime: uptime,
    loadavg: loadavg,
    hostname: hostname,
    endianness: endianness
  };

  var os$2 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    endianness: endianness,
    hostname: hostname,
    loadavg: loadavg,
    uptime: uptime,
    freemem: freemem,
    totalmem: totalmem,
    cpus: cpus,
    type: type,
    release: release,
    networkInterfaces: networkInterfaces,
    getNetworkInterfaces: getNetworkInterfaces,
    arch: arch,
    platform: platform,
    tmpDir: tmpDir,
    tmpdir: tmpdir,
    EOL: EOL,
    'default': os$1
  });

  function isatty() {
    return false;
  }
  function ReadStream() {
    throw new Error('tty.ReadStream is not implemented');
  }
  function WriteStream() {
    throw new Error('tty.ReadStream is not implemented');
  }
  var tty$1 = {
    isatty: isatty,
    ReadStream: ReadStream,
    WriteStream: WriteStream
  };

  var tty$2 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    isatty: isatty,
    ReadStream: ReadStream,
    WriteStream: WriteStream,
    'default': tty$1
  });

  var hasFlag = (flag, argv = process.argv) => {
    const prefix = flag.startsWith('-') ? '' : flag.length === 1 ? '-' : '--';
    const position = argv.indexOf(prefix + flag);
    const terminatorPosition = argv.indexOf('--');
    return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
  };

  var os = /*@__PURE__*/getAugmentedNamespace(os$2);

  var tty = /*@__PURE__*/getAugmentedNamespace(tty$2);

  const {
    env
  } = process;
  let forceColor;
  if (hasFlag('no-color') || hasFlag('no-colors') || hasFlag('color=false') || hasFlag('color=never')) {
    forceColor = 0;
  } else if (hasFlag('color') || hasFlag('colors') || hasFlag('color=true') || hasFlag('color=always')) {
    forceColor = 1;
  }
  if ('FORCE_COLOR' in env) {
    if (env.FORCE_COLOR === 'true') {
      forceColor = 1;
    } else if (env.FORCE_COLOR === 'false') {
      forceColor = 0;
    } else {
      forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
    }
  }
  function translateLevel(level) {
    if (level === 0) {
      return false;
    }
    return {
      level,
      hasBasic: true,
      has256: level >= 2,
      has16m: level >= 3
    };
  }
  function supportsColor(haveStream, streamIsTTY) {
    if (forceColor === 0) {
      return 0;
    }
    if (hasFlag('color=16m') || hasFlag('color=full') || hasFlag('color=truecolor')) {
      return 3;
    }
    if (hasFlag('color=256')) {
      return 2;
    }
    if (haveStream && !streamIsTTY && forceColor === undefined) {
      return 0;
    }
    const min = forceColor || 0;
    if (env.TERM === 'dumb') {
      return min;
    }
    if (process.platform === 'win32') {
      const osRelease = os.release().split('.');
      if (Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
        return Number(osRelease[2]) >= 14931 ? 3 : 2;
      }
      return 1;
    }
    if ('CI' in env) {
      if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI'].some(sign => sign in env) || env.CI_NAME === 'codeship') {
        return 1;
      }
      return min;
    }
    if ('TEAMCITY_VERSION' in env) {
      return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
    }
    if ('GITHUB_ACTIONS' in env) {
      return 1;
    }
    if (env.COLORTERM === 'truecolor') {
      return 3;
    }
    if ('TERM_PROGRAM' in env) {
      const version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);
      switch (env.TERM_PROGRAM) {
        case 'iTerm.app':
          return version >= 3 ? 3 : 2;
        case 'Apple_Terminal':
          return 2;
      }
    }
    if (/-256(color)?$/i.test(env.TERM)) {
      return 2;
    }
    if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
      return 1;
    }
    if ('COLORTERM' in env) {
      return 1;
    }
    return min;
  }
  function getSupportLevel(stream) {
    const level = supportsColor(stream, stream && stream.isTTY);
    return translateLevel(level);
  }
  var supportsColor_1 = {
    supportsColor: getSupportLevel,
    stdout: translateLevel(supportsColor(true, tty.isatty(1))),
    stderr: translateLevel(supportsColor(true, tty.isatty(2)))
  };

  const stringReplaceAll$1 = (string, substring, replacer) => {
    let index = string.indexOf(substring);
    if (index === -1) {
      return string;
    }
    const substringLength = substring.length;
    let endIndex = 0;
    let returnValue = '';
    do {
      returnValue += string.substr(endIndex, index - endIndex) + substring + replacer;
      endIndex = index + substringLength;
      index = string.indexOf(substring, endIndex);
    } while (index !== -1);
    returnValue += string.substr(endIndex);
    return returnValue;
  };
  const stringEncaseCRLFWithFirstIndex$1 = (string, prefix, postfix, index) => {
    let endIndex = 0;
    let returnValue = '';
    do {
      const gotCR = string[index - 1] === '\r';
      returnValue += string.substr(endIndex, (gotCR ? index - 1 : index) - endIndex) + prefix + (gotCR ? '\r\n' : '\n') + postfix;
      endIndex = index + 1;
      index = string.indexOf('\n', endIndex);
    } while (index !== -1);
    returnValue += string.substr(endIndex);
    return returnValue;
  };
  var util$2 = {
    stringReplaceAll: stringReplaceAll$1,
    stringEncaseCRLFWithFirstIndex: stringEncaseCRLFWithFirstIndex$1
  };

  const TEMPLATE_REGEX = /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi;
  const STYLE_REGEX = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g;
  const STRING_REGEX = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/;
  const ESCAPE_REGEX = /\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi;
  const ESCAPES = new Map([['n', '\n'], ['r', '\r'], ['t', '\t'], ['b', '\b'], ['f', '\f'], ['v', '\v'], ['0', '\0'], ['\\', '\\'], ['e', '\u001B'], ['a', '\u0007']]);
  function unescape(c) {
    const u = c[0] === 'u';
    const bracket = c[1] === '{';
    if (u && !bracket && c.length === 5 || c[0] === 'x' && c.length === 3) {
      return String.fromCharCode(parseInt(c.slice(1), 16));
    }
    if (u && bracket) {
      return String.fromCodePoint(parseInt(c.slice(2, -1), 16));
    }
    return ESCAPES.get(c) || c;
  }
  function parseArguments(name, arguments_) {
    const results = [];
    const chunks = arguments_.trim().split(/\s*,\s*/g);
    let matches;
    for (const chunk of chunks) {
      const number = Number(chunk);
      if (!Number.isNaN(number)) {
        results.push(number);
      } else if (matches = chunk.match(STRING_REGEX)) {
        results.push(matches[2].replace(ESCAPE_REGEX, (m, escape, character) => escape ? unescape(escape) : character));
      } else {
        throw new Error(`Invalid Chalk template style argument: ${chunk} (in style '${name}')`);
      }
    }
    return results;
  }
  function parseStyle(style) {
    STYLE_REGEX.lastIndex = 0;
    const results = [];
    let matches;
    while ((matches = STYLE_REGEX.exec(style)) !== null) {
      const name = matches[1];
      if (matches[2]) {
        const args = parseArguments(name, matches[2]);
        results.push([name].concat(args));
      } else {
        results.push([name]);
      }
    }
    return results;
  }
  function buildStyle(chalk, styles) {
    const enabled = {};
    for (const layer of styles) {
      for (const style of layer.styles) {
        enabled[style[0]] = layer.inverse ? null : style.slice(1);
      }
    }
    let current = chalk;
    for (const [styleName, styles] of Object.entries(enabled)) {
      if (!Array.isArray(styles)) {
        continue;
      }
      if (!(styleName in current)) {
        throw new Error(`Unknown Chalk style: ${styleName}`);
      }
      current = styles.length > 0 ? current[styleName](...styles) : current[styleName];
    }
    return current;
  }
  var templates = (chalk, temporary) => {
    const styles = [];
    const chunks = [];
    let chunk = [];
    temporary.replace(TEMPLATE_REGEX, (m, escapeCharacter, inverse, style, close, character) => {
      if (escapeCharacter) {
        chunk.push(unescape(escapeCharacter));
      } else if (style) {
        const string = chunk.join('');
        chunk = [];
        chunks.push(styles.length === 0 ? string : buildStyle(chalk, styles)(string));
        styles.push({
          inverse,
          styles: parseStyle(style)
        });
      } else if (close) {
        if (styles.length === 0) {
          throw new Error('Found extraneous } in Chalk template literal');
        }
        chunks.push(buildStyle(chalk, styles)(chunk.join('')));
        chunk = [];
        styles.pop();
      } else {
        chunk.push(character);
      }
    });
    chunks.push(chunk.join(''));
    if (styles.length > 0) {
      const errMessage = `Chalk template literal is missing ${styles.length} closing bracket${styles.length === 1 ? '' : 's'} (\`}\`)`;
      throw new Error(errMessage);
    }
    return chunks.join('');
  };

  const {
    stdout: stdoutColor,
    stderr: stderrColor
  } = supportsColor_1;
  const {
    stringReplaceAll,
    stringEncaseCRLFWithFirstIndex
  } = util$2;
  const {
    isArray: isArray$1
  } = Array;
  const levelMapping = ['ansi', 'ansi', 'ansi256', 'ansi16m'];
  const styles = Object.create(null);
  const applyOptions = (object, options = {}) => {
    if (options.level && !(Number.isInteger(options.level) && options.level >= 0 && options.level <= 3)) {
      throw new Error('The `level` option should be an integer from 0 to 3');
    }
    const colorLevel = stdoutColor ? stdoutColor.level : 0;
    object.level = options.level === undefined ? colorLevel : options.level;
  };
  class ChalkClass {
    constructor(options) {
      return chalkFactory(options);
    }
  }
  const chalkFactory = options => {
    const chalk = {};
    applyOptions(chalk, options);
    chalk.template = (...arguments_) => chalkTag(chalk.template, ...arguments_);
    Object.setPrototypeOf(chalk, Chalk.prototype);
    Object.setPrototypeOf(chalk.template, chalk);
    chalk.template.constructor = () => {
      throw new Error('`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.');
    };
    chalk.template.Instance = ChalkClass;
    return chalk.template;
  };
  function Chalk(options) {
    return chalkFactory(options);
  }
  for (const [styleName, style] of Object.entries(ansiStyles)) {
    styles[styleName] = {
      get() {
        const builder = createBuilder(this, createStyler(style.open, style.close, this._styler), this._isEmpty);
        Object.defineProperty(this, styleName, {
          value: builder
        });
        return builder;
      }
    };
  }
  styles.visible = {
    get() {
      const builder = createBuilder(this, this._styler, true);
      Object.defineProperty(this, 'visible', {
        value: builder
      });
      return builder;
    }
  };
  const usedModels = ['rgb', 'hex', 'keyword', 'hsl', 'hsv', 'hwb', 'ansi', 'ansi256'];
  for (const model of usedModels) {
    styles[model] = {
      get() {
        const {
          level
        } = this;
        return function (...arguments_) {
          const styler = createStyler(ansiStyles.color[levelMapping[level]][model](...arguments_), ansiStyles.color.close, this._styler);
          return createBuilder(this, styler, this._isEmpty);
        };
      }
    };
  }
  for (const model of usedModels) {
    const bgModel = 'bg' + model[0].toUpperCase() + model.slice(1);
    styles[bgModel] = {
      get() {
        const {
          level
        } = this;
        return function (...arguments_) {
          const styler = createStyler(ansiStyles.bgColor[levelMapping[level]][model](...arguments_), ansiStyles.bgColor.close, this._styler);
          return createBuilder(this, styler, this._isEmpty);
        };
      }
    };
  }
  const proto = Object.defineProperties(() => {}, { ...styles,
    level: {
      enumerable: true,
      get() {
        return this._generator.level;
      },
      set(level) {
        this._generator.level = level;
      }
    }
  });
  const createStyler = (open, close, parent) => {
    let openAll;
    let closeAll;
    if (parent === undefined) {
      openAll = open;
      closeAll = close;
    } else {
      openAll = parent.openAll + open;
      closeAll = close + parent.closeAll;
    }
    return {
      open,
      close,
      openAll,
      closeAll,
      parent
    };
  };
  const createBuilder = (self, _styler, _isEmpty) => {
    const builder = (...arguments_) => {
      if (isArray$1(arguments_[0]) && isArray$1(arguments_[0].raw)) {
        return applyStyle(builder, chalkTag(builder, ...arguments_));
      }
      return applyStyle(builder, arguments_.length === 1 ? '' + arguments_[0] : arguments_.join(' '));
    };
    Object.setPrototypeOf(builder, proto);
    builder._generator = self;
    builder._styler = _styler;
    builder._isEmpty = _isEmpty;
    return builder;
  };
  const applyStyle = (self, string) => {
    if (self.level <= 0 || !string) {
      return self._isEmpty ? '' : string;
    }
    let styler = self._styler;
    if (styler === undefined) {
      return string;
    }
    const {
      openAll,
      closeAll
    } = styler;
    if (string.indexOf('\u001B') !== -1) {
      while (styler !== undefined) {
        string = stringReplaceAll(string, styler.close, styler.open);
        styler = styler.parent;
      }
    }
    const lfIndex = string.indexOf('\n');
    if (lfIndex !== -1) {
      string = stringEncaseCRLFWithFirstIndex(string, closeAll, openAll, lfIndex);
    }
    return openAll + string + closeAll;
  };
  let template;
  const chalkTag = (chalk, ...strings) => {
    const [firstString] = strings;
    if (!isArray$1(firstString) || !isArray$1(firstString.raw)) {
      return strings.join(' ');
    }
    const arguments_ = strings.slice(1);
    const parts = [firstString.raw[0]];
    for (let i = 1; i < firstString.length; i++) {
      parts.push(String(arguments_[i - 1]).replace(/[{}\\]/g, '\\$&'), String(firstString.raw[i]));
    }
    if (template === undefined) {
      template = templates;
    }
    return template(chalk, parts.join(''));
  };
  Object.defineProperties(Chalk.prototype, styles);
  const chalk = Chalk();
  chalk.supportsColor = stdoutColor;
  chalk.stderr = Chalk({
    level: stderrColor ? stderrColor.level : 0
  });
  chalk.stderr.supportsColor = stderrColor;
  var source = chalk;

  var inherits;
  if (typeof Object.create === 'function') {
    inherits = function inherits(ctor, superCtor) {
      ctor.super_ = superCtor;
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
    };
  } else {
    inherits = function inherits(ctor, superCtor) {
      ctor.super_ = superCtor;
      var TempCtor = function () {};
      TempCtor.prototype = superCtor.prototype;
      ctor.prototype = new TempCtor();
      ctor.prototype.constructor = ctor;
    };
  }
  var inherits$1 = inherits;

  var formatRegExp = /%[sdj%]/g;
  function format(f) {
    if (!isString$1(f)) {
      var objects = [];
      for (var i = 0; i < arguments.length; i++) {
        objects.push(inspect$1(arguments[i]));
      }
      return objects.join(' ');
    }
    var i = 1;
    var args = arguments;
    var len = args.length;
    var str = String(f).replace(formatRegExp, function (x) {
      if (x === '%%') return '%';
      if (i >= len) return x;
      switch (x) {
        case '%s':
          return String(args[i++]);
        case '%d':
          return Number(args[i++]);
        case '%j':
          try {
            return JSON.stringify(args[i++]);
          } catch (_) {
            return '[Circular]';
          }
        default:
          return x;
      }
    });
    for (var x = args[i]; i < len; x = args[++i]) {
      if (isNull$1(x) || !isObject$1(x)) {
        str += ' ' + x;
      } else {
        str += ' ' + inspect$1(x);
      }
    }
    return str;
  }
  function deprecate(fn, msg) {
    if (isUndefined$1(global.process)) {
      return function () {
        return deprecate(fn, msg).apply(this, arguments);
      };
    }
    var warned = false;
    function deprecated() {
      if (!warned) {
        {
          console.error(msg);
        }
        warned = true;
      }
      return fn.apply(this, arguments);
    }
    return deprecated;
  }
  var debugs = {};
  var debugEnviron;
  function debuglog(set) {
    if (isUndefined$1(debugEnviron)) debugEnviron = '';
    set = set.toUpperCase();
    if (!debugs[set]) {
      if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
        var pid = 0;
        debugs[set] = function () {
          var msg = format.apply(null, arguments);
          console.error('%s %d: %s', set, pid, msg);
        };
      } else {
        debugs[set] = function () {};
      }
    }
    return debugs[set];
  }
  function inspect$1(obj, opts) {
    var ctx = {
      seen: [],
      stylize: stylizeNoColor$1
    };
    if (arguments.length >= 3) ctx.depth = arguments[2];
    if (arguments.length >= 4) ctx.colors = arguments[3];
    if (isBoolean$1(opts)) {
      ctx.showHidden = opts;
    } else if (opts) {
      _extend$1(ctx, opts);
    }
    if (isUndefined$1(ctx.showHidden)) ctx.showHidden = false;
    if (isUndefined$1(ctx.depth)) ctx.depth = 2;
    if (isUndefined$1(ctx.colors)) ctx.colors = false;
    if (isUndefined$1(ctx.customInspect)) ctx.customInspect = true;
    if (ctx.colors) ctx.stylize = stylizeWithColor$1;
    return formatValue$1(ctx, obj, ctx.depth);
  }
  inspect$1.colors = {
    'bold': [1, 22],
    'italic': [3, 23],
    'underline': [4, 24],
    'inverse': [7, 27],
    'white': [37, 39],
    'grey': [90, 39],
    'black': [30, 39],
    'blue': [34, 39],
    'cyan': [36, 39],
    'green': [32, 39],
    'magenta': [35, 39],
    'red': [31, 39],
    'yellow': [33, 39]
  };
  inspect$1.styles = {
    'special': 'cyan',
    'number': 'yellow',
    'boolean': 'yellow',
    'undefined': 'grey',
    'null': 'bold',
    'string': 'green',
    'date': 'magenta',
    'regexp': 'red'
  };
  function stylizeWithColor$1(str, styleType) {
    var style = inspect$1.styles[styleType];
    if (style) {
      return '\u001b[' + inspect$1.colors[style][0] + 'm' + str + '\u001b[' + inspect$1.colors[style][1] + 'm';
    } else {
      return str;
    }
  }
  function stylizeNoColor$1(str, styleType) {
    return str;
  }
  function arrayToHash$1(array) {
    var hash = {};
    array.forEach(function (val, idx) {
      hash[val] = true;
    });
    return hash;
  }
  function formatValue$1(ctx, value, recurseTimes) {
    if (ctx.customInspect && value && isFunction$2(value.inspect) &&
    value.inspect !== inspect$1 &&
    !(value.constructor && value.constructor.prototype === value)) {
      var ret = value.inspect(recurseTimes, ctx);
      if (!isString$1(ret)) {
        ret = formatValue$1(ctx, ret, recurseTimes);
      }
      return ret;
    }
    var primitive = formatPrimitive$1(ctx, value);
    if (primitive) {
      return primitive;
    }
    var keys = Object.keys(value);
    var visibleKeys = arrayToHash$1(keys);
    if (ctx.showHidden) {
      keys = Object.getOwnPropertyNames(value);
    }
    if (isError$1(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
      return formatError$1(value);
    }
    if (keys.length === 0) {
      if (isFunction$2(value)) {
        var name = value.name ? ': ' + value.name : '';
        return ctx.stylize('[Function' + name + ']', 'special');
      }
      if (isRegExp$1(value)) {
        return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
      }
      if (isDate$1(value)) {
        return ctx.stylize(Date.prototype.toString.call(value), 'date');
      }
      if (isError$1(value)) {
        return formatError$1(value);
      }
    }
    var base = '',
        array = false,
        braces = ['{', '}'];
    if (isArray(value)) {
      array = true;
      braces = ['[', ']'];
    }
    if (isFunction$2(value)) {
      var n = value.name ? ': ' + value.name : '';
      base = ' [Function' + n + ']';
    }
    if (isRegExp$1(value)) {
      base = ' ' + RegExp.prototype.toString.call(value);
    }
    if (isDate$1(value)) {
      base = ' ' + Date.prototype.toUTCString.call(value);
    }
    if (isError$1(value)) {
      base = ' ' + formatError$1(value);
    }
    if (keys.length === 0 && (!array || value.length == 0)) {
      return braces[0] + base + braces[1];
    }
    if (recurseTimes < 0) {
      if (isRegExp$1(value)) {
        return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
      } else {
        return ctx.stylize('[Object]', 'special');
      }
    }
    ctx.seen.push(value);
    var output;
    if (array) {
      output = formatArray$1(ctx, value, recurseTimes, visibleKeys, keys);
    } else {
      output = keys.map(function (key) {
        return formatProperty$1(ctx, value, recurseTimes, visibleKeys, key, array);
      });
    }
    ctx.seen.pop();
    return reduceToSingleString$1(output, base, braces);
  }
  function formatPrimitive$1(ctx, value) {
    if (isUndefined$1(value)) return ctx.stylize('undefined', 'undefined');
    if (isString$1(value)) {
      var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
      return ctx.stylize(simple, 'string');
    }
    if (isNumber$1(value)) return ctx.stylize('' + value, 'number');
    if (isBoolean$1(value)) return ctx.stylize('' + value, 'boolean');
    if (isNull$1(value)) return ctx.stylize('null', 'null');
  }
  function formatError$1(value) {
    return '[' + Error.prototype.toString.call(value) + ']';
  }
  function formatArray$1(ctx, value, recurseTimes, visibleKeys, keys) {
    var output = [];
    for (var i = 0, l = value.length; i < l; ++i) {
      if (hasOwnProperty(value, String(i))) {
        output.push(formatProperty$1(ctx, value, recurseTimes, visibleKeys, String(i), true));
      } else {
        output.push('');
      }
    }
    keys.forEach(function (key) {
      if (!key.match(/^\d+$/)) {
        output.push(formatProperty$1(ctx, value, recurseTimes, visibleKeys, key, true));
      }
    });
    return output;
  }
  function formatProperty$1(ctx, value, recurseTimes, visibleKeys, key, array) {
    var name, str, desc;
    desc = Object.getOwnPropertyDescriptor(value, key) || {
      value: value[key]
    };
    if (desc.get) {
      if (desc.set) {
        str = ctx.stylize('[Getter/Setter]', 'special');
      } else {
        str = ctx.stylize('[Getter]', 'special');
      }
    } else {
      if (desc.set) {
        str = ctx.stylize('[Setter]', 'special');
      }
    }
    if (!hasOwnProperty(visibleKeys, key)) {
      name = '[' + key + ']';
    }
    if (!str) {
      if (ctx.seen.indexOf(desc.value) < 0) {
        if (isNull$1(recurseTimes)) {
          str = formatValue$1(ctx, desc.value, null);
        } else {
          str = formatValue$1(ctx, desc.value, recurseTimes - 1);
        }
        if (str.indexOf('\n') > -1) {
          if (array) {
            str = str.split('\n').map(function (line) {
              return '  ' + line;
            }).join('\n').substr(2);
          } else {
            str = '\n' + str.split('\n').map(function (line) {
              return '   ' + line;
            }).join('\n');
          }
        }
      } else {
        str = ctx.stylize('[Circular]', 'special');
      }
    }
    if (isUndefined$1(name)) {
      if (array && key.match(/^\d+$/)) {
        return str;
      }
      name = JSON.stringify('' + key);
      if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
        name = name.substr(1, name.length - 2);
        name = ctx.stylize(name, 'name');
      } else {
        name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
        name = ctx.stylize(name, 'string');
      }
    }
    return name + ': ' + str;
  }
  function reduceToSingleString$1(output, base, braces) {
    var length = output.reduce(function (prev, cur) {
      if (cur.indexOf('\n') >= 0) ;
      return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
    }, 0);
    if (length > 60) {
      return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
    }
    return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
  }
  function isArray(ar) {
    return Array.isArray(ar);
  }
  function isBoolean$1(arg) {
    return typeof arg === 'boolean';
  }
  function isNull$1(arg) {
    return arg === null;
  }
  function isNullOrUndefined(arg) {
    return arg == null;
  }
  function isNumber$1(arg) {
    return typeof arg === 'number';
  }
  function isString$1(arg) {
    return typeof arg === 'string';
  }
  function isSymbol(arg) {
    return typeof arg === 'symbol';
  }
  function isUndefined$1(arg) {
    return arg === void 0;
  }
  function isRegExp$1(re) {
    return isObject$1(re) && objectToString$1(re) === '[object RegExp]';
  }
  function isObject$1(arg) {
    return typeof arg === 'object' && arg !== null;
  }
  function isDate$1(d) {
    return isObject$1(d) && objectToString$1(d) === '[object Date]';
  }
  function isError$1(e) {
    return isObject$1(e) && (objectToString$1(e) === '[object Error]' || e instanceof Error);
  }
  function isFunction$2(arg) {
    return typeof arg === 'function';
  }
  function isPrimitive(arg) {
    return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || typeof arg === 'symbol' ||
    typeof arg === 'undefined';
  }
  function isBuffer(maybeBuf) {
    return Buffer.isBuffer(maybeBuf);
  }
  function objectToString$1(o) {
    return Object.prototype.toString.call(o);
  }
  function pad(n) {
    return n < 10 ? '0' + n.toString(10) : n.toString(10);
  }
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  function timestamp() {
    var d = new Date();
    var time = [pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds())].join(':');
    return [d.getDate(), months[d.getMonth()], time].join(' ');
  }
  function log() {
    console.log('%s - %s', timestamp(), format.apply(null, arguments));
  }
  function _extend$1(origin, add) {
    if (!add || !isObject$1(add)) return origin;
    var keys = Object.keys(add);
    var i = keys.length;
    while (i--) {
      origin[keys[i]] = add[keys[i]];
    }
    return origin;
  }
  function hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  }
  var util = {
    inherits: inherits$1,
    _extend: _extend$1,
    log: log,
    isBuffer: isBuffer,
    isPrimitive: isPrimitive,
    isFunction: isFunction$2,
    isError: isError$1,
    isDate: isDate$1,
    isObject: isObject$1,
    isRegExp: isRegExp$1,
    isUndefined: isUndefined$1,
    isSymbol: isSymbol,
    isString: isString$1,
    isNumber: isNumber$1,
    isNullOrUndefined: isNullOrUndefined,
    isNull: isNull$1,
    isBoolean: isBoolean$1,
    isArray: isArray,
    inspect: inspect$1,
    deprecate: deprecate,
    format: format,
    debuglog: debuglog
  };

  var util$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    format: format,
    deprecate: deprecate,
    debuglog: debuglog,
    inspect: inspect$1,
    isArray: isArray,
    isBoolean: isBoolean$1,
    isNull: isNull$1,
    isNullOrUndefined: isNullOrUndefined,
    isNumber: isNumber$1,
    isString: isString$1,
    isSymbol: isSymbol,
    isUndefined: isUndefined$1,
    isRegExp: isRegExp$1,
    isObject: isObject$1,
    isDate: isDate$1,
    isError: isError$1,
    isFunction: isFunction$2,
    isPrimitive: isPrimitive,
    isBuffer: isBuffer,
    log: log,
    inherits: inherits$1,
    _extend: _extend$1,
    'default': util
  });

  var arrayMap = function (xs, f) {
    if (xs.map) return xs.map(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
      var x = xs[i];
      if (hasOwn$4.call(xs, i)) res.push(f(x, i, xs));
    }
    return res;
  };
  var hasOwn$4 = Object.prototype.hasOwnProperty;

  var indexOf = [].indexOf;
  var indexof = function (arr, obj) {
    if (indexOf) return arr.indexOf(obj);
    for (var i = 0; i < arr.length; ++i) {
      if (arr[i] === obj) return i;
    }
    return -1;
  };

  var isarray = Array.isArray || function (arr) {
    return Object.prototype.toString.call(arr) == '[object Array]';
  };

  var hasOwn$3 = Object.prototype.hasOwnProperty;
  var toString$3 = Object.prototype.toString;
  var foreach$1 = function forEach(obj, fn, ctx) {
    if (toString$3.call(fn) !== '[object Function]') {
      throw new TypeError('iterator must be a function');
    }
    var l = obj.length;
    if (l === +l) {
      for (var i = 0; i < l; i++) {
        fn.call(ctx, obj[i], i, obj);
      }
    } else {
      for (var k in obj) {
        if (hasOwn$3.call(obj, k)) {
          fn.call(ctx, obj[k], k, obj);
        }
      }
    }
  };

  var hasOwn$2 = Object.prototype.hasOwnProperty;
  var arrayReduce = function (xs, f, acc) {
    var hasAcc = arguments.length >= 3;
    if (hasAcc && xs.reduce) return xs.reduce(f, acc);
    if (xs.reduce) return xs.reduce(f);
    for (var i = 0; i < xs.length; i++) {
      if (!hasOwn$2.call(xs, i)) continue;
      if (!hasAcc) {
        acc = xs[i];
        hasAcc = true;
        continue;
      }
      acc = f(acc, xs[i], i);
    }
    return acc;
  };

  var hasOwn$1 = Object.prototype.hasOwnProperty;
  var toString$2 = Object.prototype.toString;
  var isFunction$1 = function (fn) {
    return typeof fn === 'function' && !(fn instanceof RegExp) || toString$2.call(fn) === '[object Function]';
  };
  var foreach = function forEach(obj, fn) {
    if (!isFunction$1(fn)) {
      throw new TypeError('iterator must be a function');
    }
    var i,
        k,
        isString = typeof obj === 'string',
        l = obj.length,
        context = arguments.length > 2 ? arguments[2] : null;
    if (l === +l) {
      for (i = 0; i < l; i++) {
        if (context === null) {
          fn(isString ? obj.charAt(i) : obj[i], i, obj);
        } else {
          fn.call(context, isString ? obj.charAt(i) : obj[i], i, obj);
        }
      }
    } else {
      for (k in obj) {
        if (hasOwn$1.call(obj, k)) {
          if (context === null) {
            fn(obj[k], k, obj);
          } else {
            fn.call(context, obj[k], k, obj);
          }
        }
      }
    }
  };

  var toString$1 = Object.prototype.toString;
  var isArguments = function isArguments(value) {
    var str = toString$1.call(value);
    var isArguments = str === '[object Arguments]';
    if (!isArguments) {
      isArguments = str !== '[object Array]' && value !== null && typeof value === 'object' && typeof value.length === 'number' && value.length >= 0 && toString$1.call(value.callee) === '[object Function]';
    }
    return isArguments;
  };

  var has = Object.prototype.hasOwnProperty,
      toString = Object.prototype.toString,
      hasDontEnumBug = !{
    'toString': null
  }.propertyIsEnumerable('toString'),
      hasProtoEnumBug = function () {}.propertyIsEnumerable('prototype'),
      dontEnums = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"];
  var keysShim = function keys(object) {
    var isObject = object !== null && typeof object === 'object',
        isFunction = toString.call(object) === '[object Function]',
        isArguments$1 = isArguments(object),
        theKeys = [];
    if (!isObject && !isFunction && !isArguments$1) {
      throw new TypeError("Object.keys called on a non-object");
    }
    if (isArguments$1) {
      foreach(object, function (value, index) {
        theKeys.push(index);
      });
    } else {
      var name,
          skipProto = hasProtoEnumBug && isFunction;
      for (name in object) {
        if (!(skipProto && name === 'prototype') && has.call(object, name)) {
          theKeys.push(name);
        }
      }
    }
    if (hasDontEnumBug) {
      var ctor = object.constructor,
          skipConstructor = ctor && ctor.prototype === object;
      foreach(dontEnums, function (dontEnum) {
        if (!(skipConstructor && dontEnum === 'constructor') && has.call(object, dontEnum)) {
          theKeys.push(dontEnum);
        }
      });
    }
    return theKeys;
  };
  keysShim.shim = function shimObjectKeys() {
    if (!Object.keys) {
      Object.keys = keysShim;
    }
    return Object.keys || keysShim;
  };
  var objectKeys$1 = keysShim;

  /*! JSON v3.3.0 | http://bestiejs.github.io/json3 | Copyright 2012-2014, Kit Cambridge | http://kit.mit-license.org */
  var json3 = createCommonjsModule(function (module, exports) {
    (function (root) {
      var isLoader = typeof undefined === "function" ;
      var freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal;
      if (freeGlobal && (freeGlobal["global"] === freeGlobal || freeGlobal["window"] === freeGlobal)) {
        root = freeGlobal;
      }
      function runInContext(context, exports) {
        context || (context = root["Object"]());
        exports || (exports = root["Object"]());
        var Number = context["Number"] || root["Number"],
            String = context["String"] || root["String"],
            Object = context["Object"] || root["Object"],
            Date = context["Date"] || root["Date"],
            SyntaxError = context["SyntaxError"] || root["SyntaxError"],
            TypeError = context["TypeError"] || root["TypeError"],
            Math = context["Math"] || root["Math"],
            nativeJSON = context["JSON"] || root["JSON"];
        if (typeof nativeJSON == "object" && nativeJSON) {
          exports.stringify = nativeJSON.stringify;
          exports.parse = nativeJSON.parse;
        }
        var objectProto = Object.prototype,
            getClass = objectProto.toString,
            isProperty,
            forEach,
            undef;
        var isExtended = new Date(-3509827334573292);
        try {
          isExtended = isExtended.getUTCFullYear() == -109252 && isExtended.getUTCMonth() === 0 && isExtended.getUTCDate() === 1 &&
          isExtended.getUTCHours() == 10 && isExtended.getUTCMinutes() == 37 && isExtended.getUTCSeconds() == 6 && isExtended.getUTCMilliseconds() == 708;
        } catch (exception) {}
        function has(name) {
          if (has[name] !== undef) {
            return has[name];
          }
          var isSupported;
          if (name == "bug-string-char-index") {
            isSupported = "a"[0] != "a";
          } else if (name == "json") {
            isSupported = has("json-stringify") && has("json-parse");
          } else {
            var value,
                serialized = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
            if (name == "json-stringify") {
              var stringify = exports.stringify,
                  stringifySupported = typeof stringify == "function" && isExtended;
              if (stringifySupported) {
                (value = function () {
                  return 1;
                }).toJSON = value;
                try {
                  stringifySupported =
                  stringify(0) === "0" &&
                  stringify(new Number()) === "0" && stringify(new String()) == '""' &&
                  stringify(getClass) === undef &&
                  stringify(undef) === undef &&
                  stringify() === undef &&
                  stringify(value) === "1" && stringify([value]) == "[1]" &&
                  stringify([undef]) == "[null]" &&
                  stringify(null) == "null" &&
                  stringify([undef, getClass, null]) == "[null,null,null]" &&
                  stringify({
                    "a": [value, true, false, null, "\x00\b\n\f\r\t"]
                  }) == serialized &&
                  stringify(null, value) === "1" && stringify([1, 2], null, 1) == "[\n 1,\n 2\n]" &&
                  stringify(new Date(-8.64e15)) == '"-271821-04-20T00:00:00.000Z"' &&
                  stringify(new Date(8.64e15)) == '"+275760-09-13T00:00:00.000Z"' &&
                  stringify(new Date(-621987552e5)) == '"-000001-01-01T00:00:00.000Z"' &&
                  stringify(new Date(-1)) == '"1969-12-31T23:59:59.999Z"';
                } catch (exception) {
                  stringifySupported = false;
                }
              }
              isSupported = stringifySupported;
            }
            if (name == "json-parse") {
              var parse = exports.parse;
              if (typeof parse == "function") {
                try {
                  if (parse("0") === 0 && !parse(false)) {
                    value = parse(serialized);
                    var parseSupported = value["a"].length == 5 && value["a"][0] === 1;
                    if (parseSupported) {
                      try {
                        parseSupported = !parse('"\t"');
                      } catch (exception) {}
                      if (parseSupported) {
                        try {
                          parseSupported = parse("01") !== 1;
                        } catch (exception) {}
                      }
                      if (parseSupported) {
                        try {
                          parseSupported = parse("1.") !== 1;
                        } catch (exception) {}
                      }
                    }
                  }
                } catch (exception) {
                  parseSupported = false;
                }
              }
              isSupported = parseSupported;
            }
          }
          return has[name] = !!isSupported;
        }
        if (!has("json")) {
          var functionClass = "[object Function]",
              dateClass = "[object Date]",
              numberClass = "[object Number]",
              stringClass = "[object String]",
              arrayClass = "[object Array]",
              booleanClass = "[object Boolean]";
          var charIndexBuggy = has("bug-string-char-index");
          if (!isExtended) {
            var floor = Math.floor;
            var Months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
            var getDay = function (year, month) {
              return Months[month] + 365 * (year - 1970) + floor((year - 1969 + (month = +(month > 1))) / 4) - floor((year - 1901 + month) / 100) + floor((year - 1601 + month) / 400);
            };
          }
          if (!(isProperty = objectProto.hasOwnProperty)) {
            isProperty = function (property) {
              var members = {},
                  constructor;
              if ((members.__proto__ = null, members.__proto__ = {
                "toString": 1
              }, members).toString != getClass) {
                isProperty = function (property) {
                  var original = this.__proto__,
                      result = (property in (this.__proto__ = null, this));
                  this.__proto__ = original;
                  return result;
                };
              } else {
                constructor = members.constructor;
                isProperty = function (property) {
                  var parent = (this.constructor || constructor).prototype;
                  return property in this && !(property in parent && this[property] === parent[property]);
                };
              }
              members = null;
              return isProperty.call(this, property);
            };
          }
          var PrimitiveTypes = {
            "boolean": 1,
            "number": 1,
            "string": 1,
            "undefined": 1
          };
          var isHostType = function (object, property) {
            var type = typeof object[property];
            return type == "object" ? !!object[property] : !PrimitiveTypes[type];
          };
          forEach = function (object, callback) {
            var size = 0,
                Properties,
                members,
                property;
            (Properties = function () {
              this.valueOf = 0;
            }).prototype.valueOf = 0;
            members = new Properties();
            for (property in members) {
              if (isProperty.call(members, property)) {
                size++;
              }
            }
            Properties = members = null;
            if (!size) {
              members = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
              forEach = function (object, callback) {
                var isFunction = getClass.call(object) == functionClass,
                    property,
                    length;
                var hasProperty = !isFunction && typeof object.constructor != "function" && isHostType(object, "hasOwnProperty") ? object.hasOwnProperty : isProperty;
                for (property in object) {
                  if (!(isFunction && property == "prototype") && hasProperty.call(object, property)) {
                    callback(property);
                  }
                }
                for (length = members.length; property = members[--length]; hasProperty.call(object, property) && callback(property));
              };
            } else if (size == 2) {
              forEach = function (object, callback) {
                var members = {},
                    isFunction = getClass.call(object) == functionClass,
                    property;
                for (property in object) {
                  if (!(isFunction && property == "prototype") && !isProperty.call(members, property) && (members[property] = 1) && isProperty.call(object, property)) {
                    callback(property);
                  }
                }
              };
            } else {
              forEach = function (object, callback) {
                var isFunction = getClass.call(object) == functionClass,
                    property,
                    isConstructor;
                for (property in object) {
                  if (!(isFunction && property == "prototype") && isProperty.call(object, property) && !(isConstructor = property === "constructor")) {
                    callback(property);
                  }
                }
                if (isConstructor || isProperty.call(object, property = "constructor")) {
                  callback(property);
                }
              };
            }
            return forEach(object, callback);
          };
          if (!has("json-stringify")) {
            var Escapes = {
              92: "\\\\",
              34: '\\"',
              8: "\\b",
              12: "\\f",
              10: "\\n",
              13: "\\r",
              9: "\\t"
            };
            var leadingZeroes = "000000";
            var toPaddedString = function (width, value) {
              return (leadingZeroes + (value || 0)).slice(-width);
            };
            var unicodePrefix = "\\u00";
            var quote = function (value) {
              var result = '"',
                  index = 0,
                  length = value.length,
                  useCharIndex = !charIndexBuggy || length > 10;
              var symbols = useCharIndex && (charIndexBuggy ? value.split("") : value);
              for (; index < length; index++) {
                var charCode = value.charCodeAt(index);
                switch (charCode) {
                  case 8:
                  case 9:
                  case 10:
                  case 12:
                  case 13:
                  case 34:
                  case 92:
                    result += Escapes[charCode];
                    break;
                  default:
                    if (charCode < 32) {
                      result += unicodePrefix + toPaddedString(2, charCode.toString(16));
                      break;
                    }
                    result += useCharIndex ? symbols[index] : value.charAt(index);
                }
              }
              return result + '"';
            };
            var serialize = function (property, object, callback, properties, whitespace, indentation, stack) {
              var value, className, year, month, date, time, hours, minutes, seconds, milliseconds, results, element, index, length, prefix, result;
              try {
                value = object[property];
              } catch (exception) {}
              if (typeof value == "object" && value) {
                className = getClass.call(value);
                if (className == dateClass && !isProperty.call(value, "toJSON")) {
                  if (value > -1 / 0 && value < 1 / 0) {
                    if (getDay) {
                      date = floor(value / 864e5);
                      for (year = floor(date / 365.2425) + 1970 - 1; getDay(year + 1, 0) <= date; year++);
                      for (month = floor((date - getDay(year, 0)) / 30.42); getDay(year, month + 1) <= date; month++);
                      date = 1 + date - getDay(year, month);
                      time = (value % 864e5 + 864e5) % 864e5;
                      hours = floor(time / 36e5) % 24;
                      minutes = floor(time / 6e4) % 60;
                      seconds = floor(time / 1e3) % 60;
                      milliseconds = time % 1e3;
                    } else {
                      year = value.getUTCFullYear();
                      month = value.getUTCMonth();
                      date = value.getUTCDate();
                      hours = value.getUTCHours();
                      minutes = value.getUTCMinutes();
                      seconds = value.getUTCSeconds();
                      milliseconds = value.getUTCMilliseconds();
                    }
                    value = (year <= 0 || year >= 1e4 ? (year < 0 ? "-" : "+") + toPaddedString(6, year < 0 ? -year : year) : toPaddedString(4, year)) + "-" + toPaddedString(2, month + 1) + "-" + toPaddedString(2, date) +
                    "T" + toPaddedString(2, hours) + ":" + toPaddedString(2, minutes) + ":" + toPaddedString(2, seconds) +
                    "." + toPaddedString(3, milliseconds) + "Z";
                  } else {
                    value = null;
                  }
                } else if (typeof value.toJSON == "function" && (className != numberClass && className != stringClass && className != arrayClass || isProperty.call(value, "toJSON"))) {
                  value = value.toJSON(property);
                }
              }
              if (callback) {
                value = callback.call(object, property, value);
              }
              if (value === null) {
                return "null";
              }
              className = getClass.call(value);
              if (className == booleanClass) {
                return "" + value;
              } else if (className == numberClass) {
                return value > -1 / 0 && value < 1 / 0 ? "" + value : "null";
              } else if (className == stringClass) {
                return quote("" + value);
              }
              if (typeof value == "object") {
                for (length = stack.length; length--;) {
                  if (stack[length] === value) {
                    throw TypeError();
                  }
                }
                stack.push(value);
                results = [];
                prefix = indentation;
                indentation += whitespace;
                if (className == arrayClass) {
                  for (index = 0, length = value.length; index < length; index++) {
                    element = serialize(index, value, callback, properties, whitespace, indentation, stack);
                    results.push(element === undef ? "null" : element);
                  }
                  result = results.length ? whitespace ? "[\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "]" : "[" + results.join(",") + "]" : "[]";
                } else {
                  forEach(properties || value, function (property) {
                    var element = serialize(property, value, callback, properties, whitespace, indentation, stack);
                    if (element !== undef) {
                      results.push(quote(property) + ":" + (whitespace ? " " : "") + element);
                    }
                  });
                  result = results.length ? whitespace ? "{\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "}" : "{" + results.join(",") + "}" : "{}";
                }
                stack.pop();
                return result;
              }
            };
            exports.stringify = function (source, filter, width) {
              var whitespace, callback, properties, className;
              if (typeof filter == "function" || typeof filter == "object" && filter) {
                if ((className = getClass.call(filter)) == functionClass) {
                  callback = filter;
                } else if (className == arrayClass) {
                  properties = {};
                  for (var index = 0, length = filter.length, value; index < length; value = filter[index++], (className = getClass.call(value), className == stringClass || className == numberClass) && (properties[value] = 1));
                }
              }
              if (width) {
                if ((className = getClass.call(width)) == numberClass) {
                  if ((width -= width % 1) > 0) {
                    for (whitespace = "", width > 10 && (width = 10); whitespace.length < width; whitespace += " ");
                  }
                } else if (className == stringClass) {
                  whitespace = width.length <= 10 ? width : width.slice(0, 10);
                }
              }
              return serialize("", (value = {}, value[""] = source, value), callback, properties, whitespace, "", []);
            };
          }
          if (!has("json-parse")) {
            var fromCharCode = String.fromCharCode;
            var Unescapes = {
              92: "\\",
              34: '"',
              47: "/",
              98: "\b",
              116: "\t",
              110: "\n",
              102: "\f",
              114: "\r"
            };
            var Index, Source;
            var abort = function () {
              Index = Source = null;
              throw SyntaxError();
            };
            var lex = function () {
              var source = Source,
                  length = source.length,
                  value,
                  begin,
                  position,
                  isSigned,
                  charCode;
              while (Index < length) {
                charCode = source.charCodeAt(Index);
                switch (charCode) {
                  case 9:
                  case 10:
                  case 13:
                  case 32:
                    Index++;
                    break;
                  case 123:
                  case 125:
                  case 91:
                  case 93:
                  case 58:
                  case 44:
                    value = charIndexBuggy ? source.charAt(Index) : source[Index];
                    Index++;
                    return value;
                  case 34:
                    for (value = "@", Index++; Index < length;) {
                      charCode = source.charCodeAt(Index);
                      if (charCode < 32) {
                        abort();
                      } else if (charCode == 92) {
                        charCode = source.charCodeAt(++Index);
                        switch (charCode) {
                          case 92:
                          case 34:
                          case 47:
                          case 98:
                          case 116:
                          case 110:
                          case 102:
                          case 114:
                            value += Unescapes[charCode];
                            Index++;
                            break;
                          case 117:
                            begin = ++Index;
                            for (position = Index + 4; Index < position; Index++) {
                              charCode = source.charCodeAt(Index);
                              if (!(charCode >= 48 && charCode <= 57 || charCode >= 97 && charCode <= 102 || charCode >= 65 && charCode <= 70)) {
                                abort();
                              }
                            }
                            value += fromCharCode("0x" + source.slice(begin, Index));
                            break;
                          default:
                            abort();
                        }
                      } else {
                        if (charCode == 34) {
                          break;
                        }
                        charCode = source.charCodeAt(Index);
                        begin = Index;
                        while (charCode >= 32 && charCode != 92 && charCode != 34) {
                          charCode = source.charCodeAt(++Index);
                        }
                        value += source.slice(begin, Index);
                      }
                    }
                    if (source.charCodeAt(Index) == 34) {
                      Index++;
                      return value;
                    }
                    abort();
                  default:
                    begin = Index;
                    if (charCode == 45) {
                      isSigned = true;
                      charCode = source.charCodeAt(++Index);
                    }
                    if (charCode >= 48 && charCode <= 57) {
                      if (charCode == 48 && (charCode = source.charCodeAt(Index + 1), charCode >= 48 && charCode <= 57)) {
                        abort();
                      }
                      isSigned = false;
                      for (; Index < length && (charCode = source.charCodeAt(Index), charCode >= 48 && charCode <= 57); Index++);
                      if (source.charCodeAt(Index) == 46) {
                        position = ++Index;
                        for (; position < length && (charCode = source.charCodeAt(position), charCode >= 48 && charCode <= 57); position++);
                        if (position == Index) {
                          abort();
                        }
                        Index = position;
                      }
                      charCode = source.charCodeAt(Index);
                      if (charCode == 101 || charCode == 69) {
                        charCode = source.charCodeAt(++Index);
                        if (charCode == 43 || charCode == 45) {
                          Index++;
                        }
                        for (position = Index; position < length && (charCode = source.charCodeAt(position), charCode >= 48 && charCode <= 57); position++);
                        if (position == Index) {
                          abort();
                        }
                        Index = position;
                      }
                      return +source.slice(begin, Index);
                    }
                    if (isSigned) {
                      abort();
                    }
                    if (source.slice(Index, Index + 4) == "true") {
                      Index += 4;
                      return true;
                    } else if (source.slice(Index, Index + 5) == "false") {
                      Index += 5;
                      return false;
                    } else if (source.slice(Index, Index + 4) == "null") {
                      Index += 4;
                      return null;
                    }
                    abort();
                }
              }
              return "$";
            };
            var get = function (value) {
              var results, hasMembers;
              if (value == "$") {
                abort();
              }
              if (typeof value == "string") {
                if ((charIndexBuggy ? value.charAt(0) : value[0]) == "@") {
                  return value.slice(1);
                }
                if (value == "[") {
                  results = [];
                  for (;; hasMembers || (hasMembers = true)) {
                    value = lex();
                    if (value == "]") {
                      break;
                    }
                    if (hasMembers) {
                      if (value == ",") {
                        value = lex();
                        if (value == "]") {
                          abort();
                        }
                      } else {
                        abort();
                      }
                    }
                    if (value == ",") {
                      abort();
                    }
                    results.push(get(value));
                  }
                  return results;
                } else if (value == "{") {
                  results = {};
                  for (;; hasMembers || (hasMembers = true)) {
                    value = lex();
                    if (value == "}") {
                      break;
                    }
                    if (hasMembers) {
                      if (value == ",") {
                        value = lex();
                        if (value == "}") {
                          abort();
                        }
                      } else {
                        abort();
                      }
                    }
                    if (value == "," || typeof value != "string" || (charIndexBuggy ? value.charAt(0) : value[0]) != "@" || lex() != ":") {
                      abort();
                    }
                    results[value.slice(1)] = get(lex());
                  }
                  return results;
                }
                abort();
              }
              return value;
            };
            var update = function (source, property, callback) {
              var element = walk(source, property, callback);
              if (element === undef) {
                delete source[property];
              } else {
                source[property] = element;
              }
            };
            var walk = function (source, property, callback) {
              var value = source[property],
                  length;
              if (typeof value == "object" && value) {
                if (getClass.call(value) == arrayClass) {
                  for (length = value.length; length--;) {
                    update(value, length, callback);
                  }
                } else {
                  forEach(value, function (property) {
                    update(value, property, callback);
                  });
                }
              }
              return callback.call(source, property, value);
            };
            exports.parse = function (source, callback) {
              var result, value;
              Index = 0;
              Source = "" + source;
              result = get(lex());
              if (lex() != "$") {
                abort();
              }
              Index = Source = null;
              return callback && getClass.call(callback) == functionClass ? walk((value = {}, value[""] = result, value), "", callback) : result;
            };
          }
        }
        exports["runInContext"] = runInContext;
        return exports;
      }
      if (exports && !exports.nodeType && !isLoader) {
        runInContext(root, exports);
      } else {
        var nativeJSON = root.JSON;
        var JSON3 = runInContext(root, root["JSON3"] = {
          "noConflict": function () {
            root.JSON = nativeJSON;
            return JSON3;
          }
        });
        root.JSON = {
          "parse": JSON3.parse,
          "stringify": JSON3.stringify
        };
      }
    })(commonjsGlobal);
  });

  function objectKeys(val) {
    if (Object.keys) return Object.keys(val);
    return objectKeys$1(val);
  }
  var utilInspect = inspect;
  /**
   * Echos the value of a value. Trys to print the value out
   * in the best way possible given the different types.
   *
   * @param {Object} obj The object to print out.
   * @param {Object} opts Optional options object that alters the output.
   * @license MIT (© Joyent)
   */
  function inspect(obj, opts) {
    var ctx = {
      seen: [],
      stylize: stylizeNoColor
    };
    if (arguments.length >= 3) ctx.depth = arguments[2];
    if (arguments.length >= 4) ctx.colors = arguments[3];
    if (isBoolean(opts)) {
      ctx.showHidden = opts;
    } else if (opts) {
      _extend(ctx, opts);
    }
    if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
    if (isUndefined(ctx.depth)) ctx.depth = 2;
    if (isUndefined(ctx.colors)) ctx.colors = false;
    if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
    if (ctx.colors) ctx.stylize = stylizeWithColor;
    return formatValue(ctx, obj, ctx.depth);
  }
  inspect.colors = {
    'bold': [1, 22],
    'italic': [3, 23],
    'underline': [4, 24],
    'inverse': [7, 27],
    'white': [37, 39],
    'grey': [90, 39],
    'black': [30, 39],
    'blue': [34, 39],
    'cyan': [36, 39],
    'green': [32, 39],
    'magenta': [35, 39],
    'red': [31, 39],
    'yellow': [33, 39]
  };
  inspect.styles = {
    'special': 'cyan',
    'number': 'yellow',
    'boolean': 'yellow',
    'undefined': 'grey',
    'null': 'bold',
    'string': 'green',
    'date': 'magenta',
    'regexp': 'red'
  };
  function stylizeNoColor(str, styleType) {
    return str;
  }
  function isBoolean(arg) {
    return typeof arg === 'boolean';
  }
  function isUndefined(arg) {
    return arg === void 0;
  }
  function stylizeWithColor(str, styleType) {
    var style = inspect.styles[styleType];
    if (style) {
      return '\u001b[' + inspect.colors[style][0] + 'm' + str + '\u001b[' + inspect.colors[style][1] + 'm';
    } else {
      return str;
    }
  }
  function isFunction(arg) {
    return typeof arg === 'function';
  }
  function isString(arg) {
    return typeof arg === 'string';
  }
  function isNumber(arg) {
    return typeof arg === 'number';
  }
  function isNull(arg) {
    return arg === null;
  }
  function hasOwn(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  }
  function isRegExp(re) {
    return isObject(re) && objectToString(re) === '[object RegExp]';
  }
  function isObject(arg) {
    return typeof arg === 'object' && arg !== null;
  }
  function isError(e) {
    return isObject(e) && (objectToString(e) === '[object Error]' || e instanceof Error);
  }
  function isDate(d) {
    return isObject(d) && objectToString(d) === '[object Date]';
  }
  function objectToString(o) {
    return Object.prototype.toString.call(o);
  }
  function arrayToHash(array) {
    var hash = {};
    foreach$1(array, function (val, idx) {
      hash[val] = true;
    });
    return hash;
  }
  function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
    var output = [];
    for (var i = 0, l = value.length; i < l; ++i) {
      if (hasOwn(value, String(i))) {
        output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
      } else {
        output.push('');
      }
    }
    foreach$1(keys, function (key) {
      if (!key.match(/^\d+$/)) {
        output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
      }
    });
    return output;
  }
  function formatError(value) {
    return '[' + Error.prototype.toString.call(value) + ']';
  }
  function formatValue(ctx, value, recurseTimes) {
    if (ctx.customInspect && value && isFunction(value.inspect) &&
    value.inspect !== inspect &&
    !(value.constructor && value.constructor.prototype === value)) {
      var ret = value.inspect(recurseTimes, ctx);
      if (!isString(ret)) {
        ret = formatValue(ctx, ret, recurseTimes);
      }
      return ret;
    }
    var primitive = formatPrimitive(ctx, value);
    if (primitive) {
      return primitive;
    }
    var keys = objectKeys(value);
    var visibleKeys = arrayToHash(keys);
    if (ctx.showHidden && Object.getOwnPropertyNames) {
      keys = Object.getOwnPropertyNames(value);
    }
    if (isError(value) && (indexof(keys, 'message') >= 0 || indexof(keys, 'description') >= 0)) {
      return formatError(value);
    }
    if (keys.length === 0) {
      if (isFunction(value)) {
        var name = value.name ? ': ' + value.name : '';
        return ctx.stylize('[Function' + name + ']', 'special');
      }
      if (isRegExp(value)) {
        return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
      }
      if (isDate(value)) {
        return ctx.stylize(Date.prototype.toString.call(value), 'date');
      }
      if (isError(value)) {
        return formatError(value);
      }
    }
    var base = '',
        array = false,
        braces = ['{', '}'];
    if (isarray(value)) {
      array = true;
      braces = ['[', ']'];
    }
    if (isFunction(value)) {
      var n = value.name ? ': ' + value.name : '';
      base = ' [Function' + n + ']';
    }
    if (isRegExp(value)) {
      base = ' ' + RegExp.prototype.toString.call(value);
    }
    if (isDate(value)) {
      base = ' ' + Date.prototype.toUTCString.call(value);
    }
    if (isError(value)) {
      base = ' ' + formatError(value);
    }
    if (keys.length === 0 && (!array || value.length == 0)) {
      return braces[0] + base + braces[1];
    }
    if (recurseTimes < 0) {
      if (isRegExp(value)) {
        return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
      } else {
        return ctx.stylize('[Object]', 'special');
      }
    }
    ctx.seen.push(value);
    var output;
    if (array) {
      output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
    } else {
      output = arrayMap(keys, function (key) {
        return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
      });
    }
    ctx.seen.pop();
    return reduceToSingleString(output, base, braces);
  }
  function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
    var name, str, desc;
    desc = {
      value: value[key]
    };
    if (Object.getOwnPropertyDescriptor) {
      desc = Object.getOwnPropertyDescriptor(value, key) || desc;
    }
    if (desc.get) {
      if (desc.set) {
        str = ctx.stylize('[Getter/Setter]', 'special');
      } else {
        str = ctx.stylize('[Getter]', 'special');
      }
    } else {
      if (desc.set) {
        str = ctx.stylize('[Setter]', 'special');
      }
    }
    if (!hasOwn(visibleKeys, key)) {
      name = '[' + key + ']';
    }
    if (!str) {
      if (indexof(ctx.seen, desc.value) < 0) {
        if (isNull(recurseTimes)) {
          str = formatValue(ctx, desc.value, null);
        } else {
          str = formatValue(ctx, desc.value, recurseTimes - 1);
        }
        if (str.indexOf('\n') > -1) {
          if (array) {
            str = arrayMap(str.split('\n'), function (line) {
              return '  ' + line;
            }).join('\n').substr(2);
          } else {
            str = '\n' + arrayMap(str.split('\n'), function (line) {
              return '   ' + line;
            }).join('\n');
          }
        }
      } else {
        str = ctx.stylize('[Circular]', 'special');
      }
    }
    if (isUndefined(name)) {
      if (array && key.match(/^\d+$/)) {
        return str;
      }
      name = json3.stringify('' + key);
      if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
        name = name.substr(1, name.length - 2);
        name = ctx.stylize(name, 'name');
      } else {
        name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
        name = ctx.stylize(name, 'string');
      }
    }
    return name + ': ' + str;
  }
  function formatPrimitive(ctx, value) {
    if (isUndefined(value)) return ctx.stylize('undefined', 'undefined');
    if (isString(value)) {
      var simple = '\'' + json3.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
      return ctx.stylize(simple, 'string');
    }
    if (isNumber(value)) return ctx.stylize('' + value, 'number');
    if (isBoolean(value)) return ctx.stylize('' + value, 'boolean');
    if (isNull(value)) return ctx.stylize('null', 'null');
  }
  function reduceToSingleString(output, base, braces) {
    var length = arrayReduce(output, function (prev, cur) {
      if (cur.indexOf('\n') >= 0) ;
      return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
    }, 0);
    if (length > 60) {
      return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
    }
    return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
  }
  function _extend(origin, add) {
    if (!add || !isObject(add)) return origin;
    var keys = objectKeys(add);
    var i = keys.length;
    while (i--) {
      origin[keys[i]] = add[keys[i]];
    }
    return origin;
  }

  var ExtendableError = /*@__PURE__*/getAugmentedNamespace(es6);

  var require$$0 = /*@__PURE__*/getAugmentedNamespace(util$1);

  var _inspect;
  try {
    _inspect = require$$0.inspect;
  } catch (error) {
    _inspect = utilInspect;
  }
  var DEFAULT_ERROR_INDENT = 4;
  var DEFAULT_ERROR_COLORS = true;
  var DEFAULT_ERROR_VERBOSE = true;
  var TRUTHY_PATTERN = /^true|1$/i;
  var _error = new WeakMap();
  var _id = new WeakMap();
  var _key = new WeakMap();
  var _code = new WeakMap();
  var _message = new WeakMap();
  var _details = new WeakMap();
  var BaseError = function (_ExtendableError) {
    _inherits$1(BaseError, _ExtendableError);
    var _super = _createSuper(BaseError);
    function BaseError() {
      var _this;
      for (var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
        args[_key2] = arguments[_key2];
      }
      _classCallCheck$1(this, BaseError);
      var error = args.find(function (arg) {
        return [arg instanceof Error, typeof arg === 'string', typeof arg === 'number'].some(Boolean);
      });
      if (error) {
        if (!(error instanceof Error)) {
          error = new Error("".concat(error));
          error.stack = error.stack.split('\n').filter(function (stackLine) {
            return !/new [A-Za-z_]+Error/gim.test(stackLine);
          }).filter(function (stackLine) {
            return !stackLine.includes('js-mybad/src');
          }).join('\n');
        }
        args = args.slice(1);
      }
      var options = args[0] || {};
      var _ref = options || {},
          id = _ref.id,
          key = _ref.key,
          code = _ref.code,
          message = _ref.message,
          details = _ref.details;
      if (error) {
        id = id || error.id;
        key = key || error.key;
        code = code || error.code;
        message = message || error.message;
        details = details || error.details;
      } else {
        error = options.error;
      }
      message = message || error && "".concat(error) || 'Unknown';
      message = message && "".concat(message);
      message = message.split('Error:').pop().trim();
      details = details || {};
      _this = _super.call(this, message);
      _error.set(_assertThisInitialized(_this), {
        writable: true,
        value: undefined
      });
      _id.set(_assertThisInitialized(_this), {
        writable: true,
        value: undefined
      });
      _key.set(_assertThisInitialized(_this), {
        writable: true,
        value: undefined
      });
      _code.set(_assertThisInitialized(_this), {
        writable: true,
        value: undefined
      });
      _message.set(_assertThisInitialized(_this), {
        writable: true,
        value: undefined
      });
      _details.set(_assertThisInitialized(_this), {
        writable: true,
        value: undefined
      });
      var klass = _this.constructor.name;
      if (_typeof(details) !== 'object') {
        throw TypeError("Expected argument ".concat(klass, "(details = <details>) to be a `").concat(_typeof({}), "`, but was `").concat(_typeof(details), "`."));
      }
      if (error) {
        _this.stack = error.stack || _this.stack;
      }
      _classPrivateFieldSet(_assertThisInitialized(_this), _error, error);
      _classPrivateFieldSet(_assertThisInitialized(_this), _id, id);
      _classPrivateFieldSet(_assertThisInitialized(_this), _key, key);
      _classPrivateFieldSet(_assertThisInitialized(_this), _code, code);
      _classPrivateFieldSet(_assertThisInitialized(_this), _message, message);
      _classPrivateFieldSet(_assertThisInitialized(_this), _details, details);
      return _this;
    }
    _createClass(BaseError, [{
      key: "error",
      get: function get() {
        return _classPrivateFieldGet(this, _error);
      },
      set: function set(value) {
        _classPrivateFieldSet(this, _error, value);
      }
    }, {
      key: "id",
      get: function get() {
        return _classPrivateFieldGet(this, _id);
      },
      set: function set(value) {
        _classPrivateFieldSet(this, _id, value);
      }
    }, {
      key: "key",
      get: function get() {
        return _classPrivateFieldGet(this, _key);
      },
      set: function set(value) {
        _classPrivateFieldSet(this, _key, value);
      }
    }, {
      key: "code",
      get: function get() {
        return _classPrivateFieldGet(this, _code);
      },
      set: function set(value) {
        _classPrivateFieldSet(this, _code, value);
      }
    }, {
      key: "message",
      get: function get() {
        return _classPrivateFieldGet(this, _message);
      },
      set: function set(value) {
        _classPrivateFieldSet(this, _message, value);
      }
    }, {
      key: "details",
      get: function get() {
        return _classPrivateFieldGet(this, _details) || {};
      },
      set: function set(value) {
        _classPrivateFieldSet(this, _details, value);
      }
    }, {
      key: "stack",
      get: function get() {
        return _get(_getPrototypeOf(BaseError.prototype), "stack", this) || '';
      }
    }, {
      key: "stacktrace",
      get: function get() {
        return this.stack;
      }
    }, {
      key: "stackframes",
      get: function get() {
        var _stackframes;
        if (this.stack) {
          _stackframes = this.stack.split(/\n/).slice(1).filter(function (value) {
            return value && !!value.trim().length;
          }).map(function (value) {
            try {
              var stackframeLine = value.trim();
              var stackframeData;
              if (stackframeLine.includes('(')) {
                stackframeData = stackframeLine.match(/^at ([^()]+)\((.+)(?::(\d+):(\d+)\))/i);
              } else {
                stackframeData = stackframeLine.match(/^at (.+)(?::(\d+):(\d+))/i);
              }
              var _ref2 = stackframeData || [],
                  _ref3 = _slicedToArray(_ref2, 5),
              _ = _ref3[0],
                  functionName = _ref3[1],
                  fileName = _ref3[2],
                  lineNumber = _ref3[3],
                  columnNumber = _ref3[4];
              functionName = functionName && functionName.trim();
              lineNumber = lineNumber && parseInt(lineNumber);
              columnNumber = columnNumber && parseInt(columnNumber);
              return {
                functionName: functionName,
                fileName: fileName,
                lineNumber: lineNumber,
                columnNumber: columnNumber
              };
            } catch (error) {
              return error;
            }
          });
        } else {
          _stackframes = null;
        }
        return _stackframes;
      }
    }, {
      key: "stackobjects",
      get: function get() {
        var _this2 = this;
        var _stackobjects = (this.stackframes || []).map(function (stackframe) {
          var file = stackframe.fileName;
          var function_ = stackframe.functionName;
          var line = stackframe.lineNumber;
          var column = stackframe.columnNumber;
          var source = stackframe.source;
          var stackobject = {
            file: file,
            "function": function_,
            line: line,
            column: column,
            source: source
          };
          return stackobject;
        }).filter(function (stackobject) {
          return !!stackobject.file;
        }).filter(function (stackobject) {
          var isInternalStackFile = stackobject.file.includes(__filename);
          var isInternalStackFunction = Object.getOwnPropertyNames(_this2).includes(stackobject["function"]);
          var isInternalStackObject = isInternalStackFile && isInternalStackFunction;
          return !isInternalStackObject;
        });
        return _stackobjects;
      }
    }, {
      key: "data",
      get: function get() {
        return {
          type: this.constructor.name,
          id: this.id,
          code: this.code,
          key: this.key,
          message: this.message,
          details: this.details,
          stack: this.stackobjects
        };
      }
    }, {
      key: "json",
      value: function json() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var _ref4 = options || {},
            indent = _ref4.indent;
        if (!indent && indent !== false) {
          indent = DEFAULT_ERROR_INDENT;
        }
        return JSON.stringify(this.data, null, indent);
      }
    }, {
      key: "inspect",
      value: function inspect() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        options = options || {};
        var _options = options,
            colors = _options.colors,
            verbose = _options.verbose;
        var message;
        var details;
        var indent = DEFAULT_ERROR_INDENT;
        if (!this.message) {
          message = '<none>';
        } else {
          message = this.message.split(' - Arguments')[0];
        }
        if (colors) {
          message = source.red(message);
        }
        if (verbose) {
          var depth = null;
          details = _inspect(this.details, {
            colors: colors,
            indent: indent,
            depth: depth
          });
        } else {
          details = null;
        }
        var hasDetails = _typeof(this.details) === 'object' && !!Object.keys(this.details).length;
        message = [message, hasDetails && details].filter(Boolean).join(' - ');
        return message;
      }
    }, {
      key: "toString",
      value: function toString() {
        var colors;
        var verbose;
        colors = process.env['ERROR_COLORS'];
        colors = colors || process.env['COLORS'];
        if (typeof colors === 'undefined') {
          colors = DEFAULT_ERROR_COLORS;
        }
        colors = TRUTHY_PATTERN.test("".concat(colors));
        verbose = process.env['ERROR_VERBOSE'];
        verbose = verbose || process.env['VERBOSE'];
        if (typeof verbose === 'undefined') {
          verbose = DEFAULT_ERROR_VERBOSE;
        }
        verbose = TRUTHY_PATTERN.test("".concat(verbose));
        var string = this.inspect({
          colors: colors,
          verbose: verbose
        });
        return string;
      }
    }], [{
      key: "cast",
      value: function cast(error) {
        if (error instanceof BaseError) {
          return error;
        } else {
          var castedError = new BaseError(error);
          castedError.stack = error.stack;
          return castedError;
        }
      }
    }, {
      key: "from",
      value: function from(error) {
        return this.cast(error);
      }
    }, {
      key: "object",
      value: function object(error, attrs) {
        var extendedError = BaseError.cast(error);
        return _objectSpread2({
          type: error.constructor.name,
          id: extendedError.id,
          code: extendedError.code,
          key: extendedError.key,
          message: extendedError.message,
          details: extendedError.details,
          stack: extendedError.stackobjects
        }, attrs);
      }
    }]);
    return BaseError;
  }(ExtendableError);
  var errors = {
    Error: BaseError
  };

  var src = errors;

  var jsMybad = src;

  return jsMybad;

})));
