(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('marked'), require('rxjs/operators'), require('@angular/common/http'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define('ngx-markdown', ['exports', '@angular/core', '@angular/common', 'marked', 'rxjs/operators', '@angular/common/http', '@angular/platform-browser'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['ngx-markdown'] = {}, global.ng.core, global.ng.common, global.marked, global.rxjs.operators, global.ng.common.http, global.ng.platformBrowser));
}(this, (function (exports, i0, common, marked, operators, i1, i3) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var marked__namespace = /*#__PURE__*/_interopNamespace(marked);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);

    /* eslint-disable */
    var KatexOptions = /** @class */ (function () {
        function KatexOptions() {
        }
        return KatexOptions;
    }());

    var LanguagePipe = /** @class */ (function () {
        function LanguagePipe() {
        }
        LanguagePipe.prototype.transform = function (value, language) {
            if (value == null) {
                value = '';
            }
            if (language == null) {
                language = '';
            }
            if (typeof value !== 'string') {
                console.error("LanguagePipe has been invoked with an invalid value type [" + typeof value + "]");
                return value;
            }
            if (typeof language !== 'string') {
                console.error("LanguagePipe has been invoked with an invalid parameter [" + typeof language + "]");
                return value;
            }
            return '```' + language + '\n' + value + '\n```';
        };
        return LanguagePipe;
    }());
    LanguagePipe.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.0", ngImport: i0__namespace, type: LanguagePipe, deps: [], target: i0__namespace.ɵɵFactoryTarget.Pipe });
    LanguagePipe.ɵpipe = i0__namespace.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "12.0.0", ngImport: i0__namespace, type: LanguagePipe, name: "language" });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.0", ngImport: i0__namespace, type: LanguagePipe, decorators: [{
                type: i0.Pipe,
                args: [{
                        name: 'language',
                    }]
            }] });

    /*! *****************************************************************************
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
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    exports.PrismPlugin = void 0;
    (function (PrismPlugin) {
        PrismPlugin["LineHighlight"] = "line-highlight";
        PrismPlugin["LineNumbers"] = "line-numbers";
    })(exports.PrismPlugin || (exports.PrismPlugin = {}));

    var MarkedOptions = /** @class */ (function () {
        function MarkedOptions() {
        }
        return MarkedOptions;
    }());

    /* eslint-disable max-len */
    var errorJoyPixelsNotLoaded = '[ngx-markdown] When using the `emoji` attribute you *have to* include Emoji-Toolkit files to `angular.json` or use imports. See README for more information';
    var errorKatexNotLoaded = '[ngx-markdown] When using the `katex` attribute you *have to* include KaTeX files to `angular.json` or use imports. See README for more information';
    var errorSrcWithoutHttpClient = '[ngx-markdown] When using the `src` attribute you *have to* pass the `HttpClient` as a parameter of the `forRoot` method. See README for more information';
    /* eslint-enable max-len */
    var SECURITY_CONTEXT = new i0.InjectionToken('SECURITY_CONTEXT');
    var MarkdownService = /** @class */ (function () {
        function MarkdownService(platform, securityContext, http, options, sanitizer) {
            this.platform = platform;
            this.securityContext = securityContext;
            this.http = http;
            this.sanitizer = sanitizer;
            this.initialMarkedOptions = {
                renderer: new marked.Renderer(),
            };
            this.options = options;
        }
        Object.defineProperty(MarkdownService.prototype, "options", {
            get: function () { return this._options; },
            set: function (value) {
                this._options = Object.assign(Object.assign({}, this.initialMarkedOptions), value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MarkdownService.prototype, "renderer", {
            get: function () { return this.options.renderer; },
            set: function (value) {
                this.options.renderer = value;
            },
            enumerable: false,
            configurable: true
        });
        MarkdownService.prototype.compile = function (markdown, decodeHtml, emojify, markedOptions) {
            if (decodeHtml === void 0) { decodeHtml = false; }
            if (emojify === void 0) { emojify = false; }
            if (markedOptions === void 0) { markedOptions = this.options; }
            var trimmed = this.trimIndentation(markdown);
            var decoded = decodeHtml ? this.decodeHtml(trimmed) : trimmed;
            var emojified = emojify ? this.renderEmoji(decoded) : decoded;
            var compiled = marked__namespace.parse(emojified, markedOptions);
            return this.sanitizer.sanitize(this.securityContext, compiled) || '';
        };
        MarkdownService.prototype.getSource = function (src) {
            var _this = this;
            if (!this.http) {
                throw new Error(errorSrcWithoutHttpClient);
            }
            return this.http
                .get(src, { responseType: 'text' })
                .pipe(operators.map(function (markdown) { return _this.handleExtension(src, markdown); }));
        };
        MarkdownService.prototype.highlight = function (element) {
            if (!common.isPlatformBrowser(this.platform)) {
                return;
            }
            if (typeof Prism !== 'undefined') {
                if (!element) {
                    element = document;
                }
                var noLanguageElements = element.querySelectorAll('pre code:not([class*="language-"])');
                Array.prototype.forEach.call(noLanguageElements, function (x) { return x.classList.add('language-none'); });
                Prism.highlightAllUnder(element);
            }
        };
        MarkdownService.prototype.renderKatex = function (html, options) {
            if (!common.isPlatformBrowser(this.platform)) {
                return html;
            }
            if (typeof katex === 'undefined' || typeof katex.renderToString === 'undefined') {
                throw new Error(errorKatexNotLoaded);
            }
            return html.replace(/\$([^\s][^$]*?[^\s])\$/gm, function (_, tex) { return katex.renderToString(tex, options); });
        };
        MarkdownService.prototype.decodeHtml = function (html) {
            if (!common.isPlatformBrowser(this.platform)) {
                return html;
            }
            var textarea = document.createElement('textarea');
            textarea.innerHTML = html;
            return textarea.value;
        };
        MarkdownService.prototype.handleExtension = function (src, markdown) {
            var extension = src
                ? src.split('?')[0].split('.').splice(-1).join()
                : '';
            return extension !== 'md'
                ? '```' + extension + '\n' + markdown + '\n```'
                : markdown;
        };
        MarkdownService.prototype.renderEmoji = function (html) {
            if (!common.isPlatformBrowser(this.platform)) {
                return html;
            }
            if (typeof joypixels === 'undefined' || typeof joypixels.shortnameToUnicode === 'undefined') {
                throw new Error(errorJoyPixelsNotLoaded);
            }
            return joypixels.shortnameToUnicode(html);
        };
        MarkdownService.prototype.trimIndentation = function (markdown) {
            if (!markdown) {
                return '';
            }
            var indentStart;
            return markdown
                .split('\n')
                .map(function (line) {
                var lineIdentStart = indentStart;
                if (line.length > 0) {
                    lineIdentStart = isNaN(lineIdentStart)
                        ? line.search(/\S|$/)
                        : Math.min(line.search(/\S|$/), lineIdentStart);
                }
                if (isNaN(indentStart)) {
                    indentStart = lineIdentStart;
                }
                return lineIdentStart
                    ? line.substring(lineIdentStart)
                    : line;
            }).join('\n');
        };
        return MarkdownService;
    }());
    MarkdownService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.0", ngImport: i0__namespace, type: MarkdownService, deps: [{ token: i0.PLATFORM_ID }, { token: SECURITY_CONTEXT }, { token: i1__namespace.HttpClient, optional: true }, { token: MarkedOptions, optional: true }, { token: i3__namespace.DomSanitizer }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    MarkdownService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.0.0", ngImport: i0__namespace, type: MarkdownService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.0", ngImport: i0__namespace, type: MarkdownService, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () {
            return [{ type: Object, decorators: [{
                            type: i0.Inject,
                            args: [i0.PLATFORM_ID]
                        }] }, { type: i0__namespace.SecurityContext, decorators: [{
                            type: i0.Inject,
                            args: [SECURITY_CONTEXT]
                        }] }, { type: i1__namespace.HttpClient, decorators: [{
                            type: i0.Optional
                        }] }, { type: MarkedOptions, decorators: [{
                            type: i0.Optional
                        }] }, { type: i3__namespace.DomSanitizer }];
        } });

    var MarkdownComponent = /** @class */ (function () {
        function MarkdownComponent(element, markdownService) {
            this.element = element;
            this.markdownService = markdownService;
            // Event emitters
            this.error = new i0.EventEmitter();
            this.load = new i0.EventEmitter();
            this.ready = new i0.EventEmitter();
            this._emoji = false;
            this._katex = false;
            this._lineHighlight = false;
            this._lineNumbers = false;
        }
        Object.defineProperty(MarkdownComponent.prototype, "emoji", {
            // Plugin - emoji
            get: function () { return this._emoji; },
            set: function (value) { this._emoji = this.coerceBooleanProperty(value); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MarkdownComponent.prototype, "katex", {
            // Plugin - katex
            get: function () { return this._katex; },
            set: function (value) { this._katex = this.coerceBooleanProperty(value); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MarkdownComponent.prototype, "lineHighlight", {
            // Plugin - lineHighlight
            get: function () { return this._lineHighlight; },
            set: function (value) { this._lineHighlight = this.coerceBooleanProperty(value); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MarkdownComponent.prototype, "lineNumbers", {
            // Plugin - lineNumbers
            get: function () { return this._lineNumbers; },
            set: function (value) { this._lineNumbers = this.coerceBooleanProperty(value); },
            enumerable: false,
            configurable: true
        });
        MarkdownComponent.prototype.ngOnChanges = function () {
            if (this.data != null) {
                this.handleData();
                return;
            }
            if (this.src != null) {
                this.handleSrc();
                return;
            }
        };
        MarkdownComponent.prototype.ngAfterViewInit = function () {
            if (!this.data && !this.src) {
                this.handleTransclusion();
            }
        };
        MarkdownComponent.prototype.render = function (markdown, decodeHtml) {
            if (decodeHtml === void 0) { decodeHtml = false; }
            var compiled = this.markdownService.compile(markdown, decodeHtml, this.emoji);
            compiled = this.katex ? this.markdownService.renderKatex(compiled, this.katexOptions) : compiled;
            this.element.nativeElement.innerHTML = compiled;
            this.handlePlugins();
            this.markdownService.highlight(this.element.nativeElement);
            this.ready.emit();
        };
        MarkdownComponent.prototype.coerceBooleanProperty = function (value) {
            return value != null && "" + String(value) !== 'false';
        };
        MarkdownComponent.prototype.handleData = function () {
            this.render(this.data);
        };
        MarkdownComponent.prototype.handleSrc = function () {
            var _this = this;
            this.markdownService
                .getSource(this.src)
                .subscribe(function (markdown) {
                _this.render(markdown);
                _this.load.emit(markdown);
            }, function (error) { return _this.error.emit(error); });
        };
        MarkdownComponent.prototype.handleTransclusion = function () {
            this.render(this.element.nativeElement.innerHTML, true);
        };
        MarkdownComponent.prototype.handlePlugins = function () {
            if (this.lineHighlight) {
                this.setPluginOptions(this.element.nativeElement, { dataLine: this.line, dataLineOffset: this.lineOffset });
            }
            if (this.lineNumbers) {
                this.setPluginClass(this.element.nativeElement, exports.PrismPlugin.LineNumbers);
                this.setPluginOptions(this.element.nativeElement, { dataStart: this.start });
            }
        };
        MarkdownComponent.prototype.setPluginClass = function (element, plugin) {
            var _a;
            var preElements = element.querySelectorAll('pre');
            for (var i = 0; i < preElements.length; i++) {
                var classes = plugin instanceof Array ? plugin : [plugin];
                (_a = preElements.item(i).classList).add.apply(_a, __spreadArray([], __read(classes)));
            }
        };
        MarkdownComponent.prototype.setPluginOptions = function (element, options) {
            var _this = this;
            var preElements = element.querySelectorAll('pre');
            var _loop_1 = function (i) {
                Object.keys(options).forEach(function (option) {
                    var attributeValue = options[option];
                    if (attributeValue) {
                        var attributeName = _this.toLispCase(option);
                        preElements.item(i).setAttribute(attributeName, attributeValue.toString());
                    }
                });
            };
            for (var i = 0; i < preElements.length; i++) {
                _loop_1(i);
            }
        };
        MarkdownComponent.prototype.toLispCase = function (value) {
            var upperChars = value.match(/([A-Z])/g);
            if (!upperChars) {
                return value;
            }
            var str = value.toString();
            for (var i = 0, n = upperChars.length; i < n; i++) {
                str = str.replace(new RegExp(upperChars[i]), '-' + upperChars[i].toLowerCase());
            }
            if (str.slice(0, 1) === '-') {
                str = str.slice(1);
            }
            return str;
        };
        return MarkdownComponent;
    }());
    MarkdownComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.0", ngImport: i0__namespace, type: MarkdownComponent, deps: [{ token: i0__namespace.ElementRef }, { token: MarkdownService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    MarkdownComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.0.0", type: MarkdownComponent, selector: "markdown, [markdown]", inputs: { data: "data", src: "src", emoji: "emoji", katex: "katex", katexOptions: "katexOptions", lineHighlight: "lineHighlight", line: "line", lineOffset: "lineOffset", lineNumbers: "lineNumbers", start: "start" }, outputs: { error: "error", load: "load", ready: "ready" }, usesOnChanges: true, ngImport: i0__namespace, template: '<ng-content></ng-content>', isInline: true });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.0", ngImport: i0__namespace, type: MarkdownComponent, decorators: [{
                type: i0.Component,
                args: [{
                        // eslint-disable-next-line @angular-eslint/component-selector
                        selector: 'markdown, [markdown]',
                        template: '<ng-content></ng-content>',
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.ElementRef }, { type: MarkdownService }]; }, propDecorators: { data: [{
                    type: i0.Input
                }], src: [{
                    type: i0.Input
                }], emoji: [{
                    type: i0.Input
                }], katex: [{
                    type: i0.Input
                }], katexOptions: [{
                    type: i0.Input
                }], lineHighlight: [{
                    type: i0.Input
                }], line: [{
                    type: i0.Input
                }], lineOffset: [{
                    type: i0.Input
                }], lineNumbers: [{
                    type: i0.Input
                }], start: [{
                    type: i0.Input
                }], error: [{
                    type: i0.Output
                }], load: [{
                    type: i0.Output
                }], ready: [{
                    type: i0.Output
                }] } });

    var MarkdownPipe = /** @class */ (function () {
        function MarkdownPipe(elementRef, markdownService, zone) {
            this.elementRef = elementRef;
            this.markdownService = markdownService;
            this.zone = zone;
        }
        MarkdownPipe.prototype.transform = function (value) {
            var _this = this;
            if (value == null) {
                return '';
            }
            if (typeof value !== 'string') {
                console.error("MarkdownPipe has been invoked with an invalid value type [" + typeof value + "]");
                return value;
            }
            var markdown = this.markdownService.compile(value);
            this.zone.onStable
                .pipe(operators.first())
                .subscribe(function () { return _this.markdownService.highlight(_this.elementRef.nativeElement); });
            return markdown;
        };
        return MarkdownPipe;
    }());
    MarkdownPipe.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.0", ngImport: i0__namespace, type: MarkdownPipe, deps: [{ token: i0__namespace.ElementRef }, { token: MarkdownService }, { token: i0__namespace.NgZone }], target: i0__namespace.ɵɵFactoryTarget.Pipe });
    MarkdownPipe.ɵpipe = i0__namespace.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "12.0.0", ngImport: i0__namespace, type: MarkdownPipe, name: "markdown" });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.0", ngImport: i0__namespace, type: MarkdownPipe, decorators: [{
                type: i0.Pipe,
                args: [{
                        name: 'markdown',
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.ElementRef }, { type: MarkdownService }, { type: i0__namespace.NgZone }]; } });

    var sharedDeclarations = [
        LanguagePipe,
        MarkdownComponent,
        MarkdownPipe,
    ];
    var MarkdownModule = /** @class */ (function () {
        function MarkdownModule() {
        }
        MarkdownModule.forRoot = function (markdownModuleConfig) {
            return {
                ngModule: MarkdownModule,
                providers: [
                    MarkdownService,
                    markdownModuleConfig && markdownModuleConfig.loader || [],
                    markdownModuleConfig && markdownModuleConfig.markedOptions || [],
                    {
                        provide: SECURITY_CONTEXT,
                        useValue: markdownModuleConfig && markdownModuleConfig.sanitize != null
                            ? markdownModuleConfig.sanitize
                            : i0.SecurityContext.HTML,
                    },
                ],
            };
        };
        MarkdownModule.forChild = function () {
            return {
                ngModule: MarkdownModule,
            };
        };
        return MarkdownModule;
    }());
    MarkdownModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.0", ngImport: i0__namespace, type: MarkdownModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    MarkdownModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.0.0", ngImport: i0__namespace, type: MarkdownModule, declarations: [LanguagePipe,
            MarkdownComponent,
            MarkdownPipe], exports: [LanguagePipe,
            MarkdownComponent,
            MarkdownPipe] });
    MarkdownModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.0.0", ngImport: i0__namespace, type: MarkdownModule });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.0", ngImport: i0__namespace, type: MarkdownModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        exports: sharedDeclarations,
                        declarations: sharedDeclarations,
                    }]
            }] });

    /**
     * Generated bundle index. Do not edit.
     */

    Object.defineProperty(exports, 'MarkedRenderer', {
        enumerable: true,
        get: function () {
            return marked.Renderer;
        }
    });
    exports.KatexOptions = KatexOptions;
    exports.LanguagePipe = LanguagePipe;
    exports.MarkdownComponent = MarkdownComponent;
    exports.MarkdownModule = MarkdownModule;
    exports.MarkdownPipe = MarkdownPipe;
    exports.MarkdownService = MarkdownService;
    exports.MarkedOptions = MarkedOptions;
    exports.SECURITY_CONTEXT = SECURITY_CONTEXT;
    exports.errorJoyPixelsNotLoaded = errorJoyPixelsNotLoaded;
    exports.errorKatexNotLoaded = errorKatexNotLoaded;
    exports.errorSrcWithoutHttpClient = errorSrcWithoutHttpClient;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-markdown.umd.js.map
