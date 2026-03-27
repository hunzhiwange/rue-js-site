var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __reflectGet = Reflect.get;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var __superGet = (cls, obj, key) => __reflectGet(__getProtoOf(cls), key, obj);
import { X as e, __tla as __tla_0 } from "./rue-CEPv9khA.js";
let Hs, zs, Us, Mi, Ks, Vs, Ws, Bs, qs;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  var _a2, _b, _e2, _t2, _n2, _r2, _i2, _e_instances, a_fn, _c;
  var t = class extends Error {
    constructor(e2) {
      super(e2), this.name = `ShikiError`;
    }
  };
  function n(e2) {
    return r(e2);
  }
  function r(e2) {
    return Array.isArray(e2) ? i(e2) : e2 instanceof RegExp ? e2 : typeof e2 == `object` ? a(e2) : e2;
  }
  function i(e2) {
    let t2 = [];
    for (let n2 = 0, i2 = e2.length; n2 < i2; n2++) t2[n2] = r(e2[n2]);
    return t2;
  }
  function a(e2) {
    let t2 = {};
    for (let n2 in e2) t2[n2] = r(e2[n2]);
    return t2;
  }
  function o(e2, ...t2) {
    return t2.forEach((t3) => {
      for (let n2 in t3) e2[n2] = t3[n2];
    }), e2;
  }
  function s(e2) {
    let t2 = ~e2.lastIndexOf(`/`) || ~e2.lastIndexOf(`\\`);
    return t2 === 0 ? e2 : ~t2 === e2.length - 1 ? s(e2.substring(0, e2.length - 1)) : e2.substr(~t2 + 1);
  }
  var c = /\$(\d+)|\${(\d+):\/(downcase|upcase)}/g, l = class {
    static hasCaptures(e2) {
      return e2 === null ? false : (c.lastIndex = 0, c.test(e2));
    }
    static replaceCaptures(e2, t2, n2) {
      return e2.replace(c, (e3, r2, i2, a2) => {
        let o2 = n2[parseInt(r2 || i2, 10)];
        if (o2) {
          let e4 = t2.substring(o2.start, o2.end);
          for (; e4[0] === `.`; ) e4 = e4.substring(1);
          switch (a2) {
            case `downcase`:
              return e4.toLowerCase();
            case `upcase`:
              return e4.toUpperCase();
            default:
              return e4;
          }
        } else return e3;
      });
    }
  };
  function u(e2, t2) {
    return e2 < t2 ? -1 : e2 > t2 ? 1 : 0;
  }
  function d(e2, t2) {
    if (e2 === null && t2 === null) return 0;
    if (!e2) return -1;
    if (!t2) return 1;
    let n2 = e2.length, r2 = t2.length;
    if (n2 === r2) {
      for (let r3 = 0; r3 < n2; r3++) {
        let n3 = u(e2[r3], t2[r3]);
        if (n3 !== 0) return n3;
      }
      return 0;
    }
    return n2 - r2;
  }
  function f(e2) {
    return !!(/^#[0-9a-f]{6}$/i.test(e2) || /^#[0-9a-f]{8}$/i.test(e2) || /^#[0-9a-f]{3}$/i.test(e2) || /^#[0-9a-f]{4}$/i.test(e2));
  }
  function p(e2) {
    return e2.replace(/[\-\\\{\}\*\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, `\\$&`);
  }
  var m = class {
    constructor(e2) {
      __publicField(this, "cache", /* @__PURE__ */ new Map());
      this.fn = e2;
    }
    get(e2) {
      if (this.cache.has(e2)) return this.cache.get(e2);
      let t2 = this.fn(e2);
      return this.cache.set(e2, t2), t2;
    }
  }, h = class {
    constructor(e2, t2, n2) {
      __publicField(this, "_cachedMatchRoot", new m((e2) => this._root.match(e2)));
      this._colorMap = e2, this._defaults = t2, this._root = n2;
    }
    static createFromRawTheme(e2, t2) {
      return this.createFromParsedTheme(ne(e2), t2);
    }
    static createFromParsedTheme(e2, t2) {
      return ie(e2, t2);
    }
    getColorMap() {
      return this._colorMap.getColorMap();
    }
    getDefaults() {
      return this._defaults;
    }
    match(e2) {
      if (e2 === null) return this._defaults;
      let t2 = e2.scopeName, n2 = this._cachedMatchRoot.get(t2).find((t3) => _(e2.parent, t3.parentScopes));
      return n2 ? new te(n2.fontStyle, n2.foreground, n2.background) : null;
    }
  }, g = class e2 {
    constructor(e3, t2) {
      this.parent = e3, this.scopeName = t2;
    }
    static push(t2, n2) {
      for (let r2 of n2) t2 = new e2(t2, r2);
      return t2;
    }
    static from(...t2) {
      let n2 = null;
      for (let r2 = 0; r2 < t2.length; r2++) n2 = new e2(n2, t2[r2]);
      return n2;
    }
    push(t2) {
      return new e2(this, t2);
    }
    getSegments() {
      let e3 = this, t2 = [];
      for (; e3; ) t2.push(e3.scopeName), e3 = e3.parent;
      return t2.reverse(), t2;
    }
    toString() {
      return this.getSegments().join(` `);
    }
    extends(e3) {
      return this === e3 ? true : this.parent === null ? false : this.parent.extends(e3);
    }
    getExtensionIfDefined(e3) {
      let t2 = [], n2 = this;
      for (; n2 && n2 !== e3; ) t2.push(n2.scopeName), n2 = n2.parent;
      return n2 === e3 ? t2.reverse() : void 0;
    }
  };
  function _(e2, t2) {
    if (t2.length === 0) return true;
    for (let n2 = 0; n2 < t2.length; n2++) {
      let r2 = t2[n2], i2 = false;
      if (r2 === `>`) {
        if (n2 === t2.length - 1) return false;
        r2 = t2[++n2], i2 = true;
      }
      for (; e2 && !ee(e2.scopeName, r2); ) {
        if (i2) return false;
        e2 = e2.parent;
      }
      if (!e2) return false;
      e2 = e2.parent;
    }
    return true;
  }
  function ee(e2, t2) {
    return t2 === e2 || e2.startsWith(t2) && e2[t2.length] === `.`;
  }
  var te = class {
    constructor(e2, t2, n2) {
      this.fontStyle = e2, this.foregroundId = t2, this.backgroundId = n2;
    }
  };
  function ne(e2) {
    if (!e2 || !e2.settings || !Array.isArray(e2.settings)) return [];
    let t2 = e2.settings, n2 = [], r2 = 0;
    for (let e3 = 0, i2 = t2.length; e3 < i2; e3++) {
      let i3 = t2[e3];
      if (!i3.settings) continue;
      let a2;
      if (typeof i3.scope == `string`) {
        let e4 = i3.scope;
        e4 = e4.replace(/^[,]+/, ``), e4 = e4.replace(/[,]+$/, ``), a2 = e4.split(`,`);
      } else a2 = Array.isArray(i3.scope) ? i3.scope : [
        ``
      ];
      let o2 = -1;
      if (typeof i3.settings.fontStyle == `string`) {
        o2 = 0;
        let e4 = i3.settings.fontStyle.split(` `);
        for (let t3 = 0, n3 = e4.length; t3 < n3; t3++) switch (e4[t3]) {
          case `italic`:
            o2 |= 1;
            break;
          case `bold`:
            o2 |= 2;
            break;
          case `underline`:
            o2 |= 4;
            break;
          case `strikethrough`:
            o2 |= 8;
            break;
        }
      }
      let s2 = null;
      typeof i3.settings.foreground == `string` && f(i3.settings.foreground) && (s2 = i3.settings.foreground);
      let c2 = null;
      typeof i3.settings.background == `string` && f(i3.settings.background) && (c2 = i3.settings.background);
      for (let t3 = 0, i4 = a2.length; t3 < i4; t3++) {
        let i5 = a2[t3].trim().split(` `), l2 = i5[i5.length - 1], u2 = null;
        i5.length > 1 && (u2 = i5.slice(0, i5.length - 1), u2.reverse()), n2[r2++] = new re(l2, u2, e3, o2, s2, c2);
      }
    }
    return n2;
  }
  var re = class {
    constructor(e2, t2, n2, r2, i2, a2) {
      this.scope = e2, this.parentScopes = t2, this.index = n2, this.fontStyle = r2, this.foreground = i2, this.background = a2;
    }
  }, v = ((e2) => (e2[e2.NotSet = -1] = `NotSet`, e2[e2.None = 0] = `None`, e2[e2.Italic = 1] = `Italic`, e2[e2.Bold = 2] = `Bold`, e2[e2.Underline = 4] = `Underline`, e2[e2.Strikethrough = 8] = `Strikethrough`, e2))(v || {});
  function ie(e2, t2) {
    e2.sort((e3, t3) => {
      let n3 = u(e3.scope, t3.scope);
      return n3 !== 0 || (n3 = d(e3.parentScopes, t3.parentScopes), n3 !== 0) ? n3 : e3.index - t3.index;
    });
    let n2 = 0, r2 = `#000000`, i2 = `#ffffff`;
    for (; e2.length >= 1 && e2[0].scope === ``; ) {
      let t3 = e2.shift();
      t3.fontStyle !== -1 && (n2 = t3.fontStyle), t3.foreground !== null && (r2 = t3.foreground), t3.background !== null && (i2 = t3.background);
    }
    let a2 = new ae(t2), o2 = new te(n2, a2.getId(r2), a2.getId(i2)), s2 = new ce(new se(0, null, -1, 0, 0), []);
    for (let t3 = 0, n3 = e2.length; t3 < n3; t3++) {
      let n4 = e2[t3];
      s2.insert(0, n4.scope, n4.parentScopes, n4.fontStyle, a2.getId(n4.foreground), a2.getId(n4.background));
    }
    return new h(a2, o2, s2);
  }
  var ae = class {
    constructor(e2) {
      __publicField(this, "_isFrozen");
      __publicField(this, "_lastColorId");
      __publicField(this, "_id2color");
      __publicField(this, "_color2id");
      if (this._lastColorId = 0, this._id2color = [], this._color2id = /* @__PURE__ */ Object.create(null), Array.isArray(e2)) {
        this._isFrozen = true;
        for (let t2 = 0, n2 = e2.length; t2 < n2; t2++) this._color2id[e2[t2]] = t2, this._id2color[t2] = e2[t2];
      } else this._isFrozen = false;
    }
    getId(e2) {
      if (e2 === null) return 0;
      e2 = e2.toUpperCase();
      let t2 = this._color2id[e2];
      if (t2) return t2;
      if (this._isFrozen) throw Error(`Missing color in color map - ${e2}`);
      return t2 = ++this._lastColorId, this._color2id[e2] = t2, this._id2color[t2] = e2, t2;
    }
    getColorMap() {
      return this._id2color.slice(0);
    }
  }, oe = Object.freeze([]), se = class e2 {
    constructor(e3, t2, n2, r2, i2) {
      __publicField(this, "scopeDepth");
      __publicField(this, "parentScopes");
      __publicField(this, "fontStyle");
      __publicField(this, "foreground");
      __publicField(this, "background");
      this.scopeDepth = e3, this.parentScopes = t2 || oe, this.fontStyle = n2, this.foreground = r2, this.background = i2;
    }
    clone() {
      return new e2(this.scopeDepth, this.parentScopes, this.fontStyle, this.foreground, this.background);
    }
    static cloneArr(e3) {
      let t2 = [];
      for (let n2 = 0, r2 = e3.length; n2 < r2; n2++) t2[n2] = e3[n2].clone();
      return t2;
    }
    acceptOverwrite(e3, t2, n2, r2) {
      this.scopeDepth > e3 ? console.log(`how did this happen?`) : this.scopeDepth = e3, t2 !== -1 && (this.fontStyle = t2), n2 !== 0 && (this.foreground = n2), r2 !== 0 && (this.background = r2);
    }
  }, ce = class e2 {
    constructor(e3, t2 = [], n2 = {}) {
      __publicField(this, "_rulesWithParentScopes");
      this._mainRule = e3, this._children = n2, this._rulesWithParentScopes = t2;
    }
    static _cmpBySpecificity(e3, t2) {
      if (e3.scopeDepth !== t2.scopeDepth) return t2.scopeDepth - e3.scopeDepth;
      let n2 = 0, r2 = 0;
      for (; e3.parentScopes[n2] === `>` && n2++, t2.parentScopes[r2] === `>` && r2++, !(n2 >= e3.parentScopes.length || r2 >= t2.parentScopes.length); ) {
        let i2 = t2.parentScopes[r2].length - e3.parentScopes[n2].length;
        if (i2 !== 0) return i2;
        n2++, r2++;
      }
      return t2.parentScopes.length - e3.parentScopes.length;
    }
    match(t2) {
      if (t2 !== ``) {
        let e3 = t2.indexOf(`.`), n3, r2;
        if (e3 === -1 ? (n3 = t2, r2 = ``) : (n3 = t2.substring(0, e3), r2 = t2.substring(e3 + 1)), this._children.hasOwnProperty(n3)) return this._children[n3].match(r2);
      }
      let n2 = this._rulesWithParentScopes.concat(this._mainRule);
      return n2.sort(e2._cmpBySpecificity), n2;
    }
    insert(t2, n2, r2, i2, a2, o2) {
      if (n2 === ``) {
        this._doInsertHere(t2, r2, i2, a2, o2);
        return;
      }
      let s2 = n2.indexOf(`.`), c2, l2;
      s2 === -1 ? (c2 = n2, l2 = ``) : (c2 = n2.substring(0, s2), l2 = n2.substring(s2 + 1));
      let u2;
      this._children.hasOwnProperty(c2) ? u2 = this._children[c2] : (u2 = new e2(this._mainRule.clone(), se.cloneArr(this._rulesWithParentScopes)), this._children[c2] = u2), u2.insert(t2 + 1, l2, r2, i2, a2, o2);
    }
    _doInsertHere(e3, t2, n2, r2, i2) {
      if (t2 === null) {
        this._mainRule.acceptOverwrite(e3, n2, r2, i2);
        return;
      }
      for (let a2 = 0, o2 = this._rulesWithParentScopes.length; a2 < o2; a2++) {
        let o3 = this._rulesWithParentScopes[a2];
        if (d(o3.parentScopes, t2) === 0) {
          o3.acceptOverwrite(e3, n2, r2, i2);
          return;
        }
      }
      n2 === -1 && (n2 = this._mainRule.fontStyle), r2 === 0 && (r2 = this._mainRule.foreground), i2 === 0 && (i2 = this._mainRule.background), this._rulesWithParentScopes.push(new se(e3, t2, n2, r2, i2));
    }
  }, y = class e2 {
    static toBinaryStr(e3) {
      return e3.toString(2).padStart(32, `0`);
    }
    static print(t2) {
      let n2 = e2.getLanguageId(t2), r2 = e2.getTokenType(t2), i2 = e2.getFontStyle(t2), a2 = e2.getForeground(t2), o2 = e2.getBackground(t2);
      console.log({
        languageId: n2,
        tokenType: r2,
        fontStyle: i2,
        foreground: a2,
        background: o2
      });
    }
    static getLanguageId(e3) {
      return (e3 & 255) >>> 0;
    }
    static getTokenType(e3) {
      return (e3 & 768) >>> 8;
    }
    static containsBalancedBrackets(e3) {
      return (e3 & 1024) != 0;
    }
    static getFontStyle(e3) {
      return (e3 & 30720) >>> 11;
    }
    static getForeground(e3) {
      return (e3 & 16744448) >>> 15;
    }
    static getBackground(e3) {
      return (e3 & 4278190080) >>> 24;
    }
    static set(t2, n2, r2, i2, a2, o2, s2) {
      let c2 = e2.getLanguageId(t2), l2 = e2.getTokenType(t2), u2 = e2.containsBalancedBrackets(t2) ? 1 : 0, d2 = e2.getFontStyle(t2), f2 = e2.getForeground(t2), p2 = e2.getBackground(t2);
      return n2 !== 0 && (c2 = n2), r2 !== 8 && (l2 = ue(r2)), i2 !== null && (u2 = i2 ? 1 : 0), a2 !== -1 && (d2 = a2), o2 !== 0 && (f2 = o2), s2 !== 0 && (p2 = s2), (c2 << 0 | l2 << 8 | u2 << 10 | d2 << 11 | f2 << 15 | p2 << 24) >>> 0;
    }
  };
  function le(e2) {
    return e2;
  }
  function ue(e2) {
    return e2;
  }
  function de(e2, t2) {
    let n2 = [], r2 = pe(e2), i2 = r2.next();
    for (; i2 !== null; ) {
      let e3 = 0;
      if (i2.length === 2 && i2.charAt(1) === `:`) {
        switch (i2.charAt(0)) {
          case `R`:
            e3 = 1;
            break;
          case `L`:
            e3 = -1;
            break;
          default:
            console.log(`Unknown priority ${i2} in scope selector`);
        }
        i2 = r2.next();
      }
      let t3 = o2();
      if (n2.push({
        matcher: t3,
        priority: e3
      }), i2 !== `,`) break;
      i2 = r2.next();
    }
    return n2;
    function a2() {
      if (i2 === `-`) {
        i2 = r2.next();
        let e3 = a2();
        return (t3) => !!e3 && !e3(t3);
      }
      if (i2 === `(`) {
        i2 = r2.next();
        let e3 = s2();
        return i2 === `)` && (i2 = r2.next()), e3;
      }
      if (fe(i2)) {
        let e3 = [];
        do
          e3.push(i2), i2 = r2.next();
        while (fe(i2));
        return (n3) => t2(e3, n3);
      }
      return null;
    }
    function o2() {
      let e3 = [], t3 = a2();
      for (; t3; ) e3.push(t3), t3 = a2();
      return (t4) => e3.every((e4) => e4(t4));
    }
    function s2() {
      let e3 = [], t3 = o2();
      for (; t3 && (e3.push(t3), i2 === `|` || i2 === `,`); ) {
        do
          i2 = r2.next();
        while (i2 === `|` || i2 === `,`);
        t3 = o2();
      }
      return (t4) => e3.some((e4) => e4(t4));
    }
  }
  function fe(e2) {
    return !!e2 && !!e2.match(/[\w\.:]+/);
  }
  function pe(e2) {
    let t2 = /([LR]:|[\w\.:][\w\.:\-]*|[\,\|\-\(\)])/g, n2 = t2.exec(e2);
    return {
      next: () => {
        if (!n2) return null;
        let r2 = n2[0];
        return n2 = t2.exec(e2), r2;
      }
    };
  }
  function me(e2) {
    typeof e2.dispose == `function` && e2.dispose();
  }
  var he = class {
    constructor(e2) {
      this.scopeName = e2;
    }
    toKey() {
      return this.scopeName;
    }
  }, ge = class {
    constructor(e2, t2) {
      this.scopeName = e2, this.ruleName = t2;
    }
    toKey() {
      return `${this.scopeName}#${this.ruleName}`;
    }
  }, _e = class {
    constructor() {
      __publicField(this, "_references", []);
      __publicField(this, "_seenReferenceKeys", /* @__PURE__ */ new Set());
      __publicField(this, "visitedRule", /* @__PURE__ */ new Set());
    }
    get references() {
      return this._references;
    }
    add(e2) {
      let t2 = e2.toKey();
      this._seenReferenceKeys.has(t2) || (this._seenReferenceKeys.add(t2), this._references.push(e2));
    }
  }, ve = class {
    constructor(e2, t2) {
      __publicField(this, "seenFullScopeRequests", /* @__PURE__ */ new Set());
      __publicField(this, "seenPartialScopeRequests", /* @__PURE__ */ new Set());
      __publicField(this, "Q");
      this.repo = e2, this.initialScopeName = t2, this.seenFullScopeRequests.add(this.initialScopeName), this.Q = [
        new he(this.initialScopeName)
      ];
    }
    processQueue() {
      let e2 = this.Q;
      this.Q = [];
      let t2 = new _e();
      for (let n2 of e2) ye(n2, this.initialScopeName, this.repo, t2);
      for (let e3 of t2.references) if (e3 instanceof he) {
        if (this.seenFullScopeRequests.has(e3.scopeName)) continue;
        this.seenFullScopeRequests.add(e3.scopeName), this.Q.push(e3);
      } else {
        if (this.seenFullScopeRequests.has(e3.scopeName) || this.seenPartialScopeRequests.has(e3.toKey())) continue;
        this.seenPartialScopeRequests.add(e3.toKey()), this.Q.push(e3);
      }
    }
  };
  function ye(e2, t2, n2, r2) {
    let i2 = n2.lookup(e2.scopeName);
    if (!i2) {
      if (e2.scopeName === t2) throw Error(`No grammar provided for <${t2}>`);
      return;
    }
    let a2 = n2.lookup(t2);
    e2 instanceof he ? xe({
      baseGrammar: a2,
      selfGrammar: i2
    }, r2) : be(e2.ruleName, {
      baseGrammar: a2,
      selfGrammar: i2,
      repository: i2.repository
    }, r2);
    let o2 = n2.injections(e2.scopeName);
    if (o2) for (let e3 of o2) r2.add(new he(e3));
  }
  function be(e2, t2, n2) {
    if (t2.repository && t2.repository[e2]) {
      let r2 = t2.repository[e2];
      Se([
        r2
      ], t2, n2);
    }
  }
  function xe(e2, t2) {
    e2.selfGrammar.patterns && Array.isArray(e2.selfGrammar.patterns) && Se(e2.selfGrammar.patterns, {
      ...e2,
      repository: e2.selfGrammar.repository
    }, t2), e2.selfGrammar.injections && Se(Object.values(e2.selfGrammar.injections), {
      ...e2,
      repository: e2.selfGrammar.repository
    }, t2);
  }
  function Se(e2, t2, n2) {
    for (let r2 of e2) {
      if (n2.visitedRule.has(r2)) continue;
      n2.visitedRule.add(r2);
      let e3 = r2.repository ? o({}, t2.repository, r2.repository) : t2.repository;
      Array.isArray(r2.patterns) && Se(r2.patterns, {
        ...t2,
        repository: e3
      }, n2);
      let i2 = r2.include;
      if (!i2) continue;
      let a2 = Oe(i2);
      switch (a2.kind) {
        case 0:
          xe({
            ...t2,
            selfGrammar: t2.baseGrammar
          }, n2);
          break;
        case 1:
          xe(t2, n2);
          break;
        case 2:
          be(a2.ruleName, {
            ...t2,
            repository: e3
          }, n2);
          break;
        case 3:
        case 4:
          let r3 = a2.scopeName === t2.selfGrammar.scopeName ? t2.selfGrammar : a2.scopeName === t2.baseGrammar.scopeName ? t2.baseGrammar : void 0;
          if (r3) {
            let i3 = {
              baseGrammar: t2.baseGrammar,
              selfGrammar: r3,
              repository: e3
            };
            a2.kind === 4 ? be(a2.ruleName, i3, n2) : xe(i3, n2);
          } else a2.kind === 4 ? n2.add(new ge(a2.scopeName, a2.ruleName)) : n2.add(new he(a2.scopeName));
          break;
      }
    }
  }
  var Ce = class {
    constructor() {
      __publicField(this, "kind", 0);
    }
  }, we = class {
    constructor() {
      __publicField(this, "kind", 1);
    }
  }, Te = class {
    constructor(e2) {
      __publicField(this, "kind", 2);
      this.ruleName = e2;
    }
  }, Ee = class {
    constructor(e2) {
      __publicField(this, "kind", 3);
      this.scopeName = e2;
    }
  }, De = class {
    constructor(e2, t2) {
      __publicField(this, "kind", 4);
      this.scopeName = e2, this.ruleName = t2;
    }
  };
  function Oe(e2) {
    if (e2 === `$base`) return new Ce();
    if (e2 === `$self`) return new we();
    let t2 = e2.indexOf(`#`);
    return t2 === -1 ? new Ee(e2) : t2 === 0 ? new Te(e2.substring(1)) : new De(e2.substring(0, t2), e2.substring(t2 + 1));
  }
  var ke = /\\(\d+)/, Ae = /\\(\d+)/g, je = -1, Me = -2;
  function Ne(e2) {
    return e2;
  }
  function Pe(e2) {
    return e2;
  }
  var Fe = class {
    constructor(e2, t2, n2, r2) {
      __publicField(this, "$location");
      __publicField(this, "id");
      __publicField(this, "_nameIsCapturing");
      __publicField(this, "_name");
      __publicField(this, "_contentNameIsCapturing");
      __publicField(this, "_contentName");
      this.$location = e2, this.id = t2, this._name = n2 || null, this._nameIsCapturing = l.hasCaptures(this._name), this._contentName = r2 || null, this._contentNameIsCapturing = l.hasCaptures(this._contentName);
    }
    get debugName() {
      let e2 = this.$location ? `${s(this.$location.filename)}:${this.$location.line}` : `unknown`;
      return `${this.constructor.name}#${this.id} @ ${e2}`;
    }
    getName(e2, t2) {
      return !this._nameIsCapturing || this._name === null || e2 === null || t2 === null ? this._name : l.replaceCaptures(this._name, e2, t2);
    }
    getContentName(e2, t2) {
      return !this._contentNameIsCapturing || this._contentName === null ? this._contentName : l.replaceCaptures(this._contentName, e2, t2);
    }
  }, Ie = class extends Fe {
    constructor(e2, t2, n2, r2, i2) {
      super(e2, t2, n2, r2);
      __publicField(this, "retokenizeCapturedWithRuleId");
      this.retokenizeCapturedWithRuleId = i2;
    }
    dispose() {
    }
    collectPatterns(e2, t2) {
      throw Error(`Not supported!`);
    }
    compile(e2, t2) {
      throw Error(`Not supported!`);
    }
    compileAG(e2, t2, n2, r2) {
      throw Error(`Not supported!`);
    }
  }, Le = class extends Fe {
    constructor(e2, t2, n2, r2, i2) {
      super(e2, t2, n2, null);
      __publicField(this, "_match");
      __publicField(this, "captures");
      __publicField(this, "_cachedCompiledPatterns");
      this._match = new He(r2, this.id), this.captures = i2, this._cachedCompiledPatterns = null;
    }
    dispose() {
      this._cachedCompiledPatterns && (this._cachedCompiledPatterns = (this._cachedCompiledPatterns.dispose(), null));
    }
    get debugMatchRegExp() {
      return `${this._match.source}`;
    }
    collectPatterns(e2, t2) {
      t2.push(this._match);
    }
    compile(e2, t2) {
      return this._getCachedCompiledPatterns(e2).compile(e2);
    }
    compileAG(e2, t2, n2, r2) {
      return this._getCachedCompiledPatterns(e2).compileAG(e2, n2, r2);
    }
    _getCachedCompiledPatterns(e2) {
      return this._cachedCompiledPatterns || (this._cachedCompiledPatterns = new Ue(), this.collectPatterns(e2, this._cachedCompiledPatterns)), this._cachedCompiledPatterns;
    }
  }, Re = class extends Fe {
    constructor(e2, t2, n2, r2, i2) {
      super(e2, t2, n2, r2);
      __publicField(this, "hasMissingPatterns");
      __publicField(this, "patterns");
      __publicField(this, "_cachedCompiledPatterns");
      this.patterns = i2.patterns, this.hasMissingPatterns = i2.hasMissingPatterns, this._cachedCompiledPatterns = null;
    }
    dispose() {
      this._cachedCompiledPatterns && (this._cachedCompiledPatterns = (this._cachedCompiledPatterns.dispose(), null));
    }
    collectPatterns(e2, t2) {
      for (let n2 of this.patterns) e2.getRule(n2).collectPatterns(e2, t2);
    }
    compile(e2, t2) {
      return this._getCachedCompiledPatterns(e2).compile(e2);
    }
    compileAG(e2, t2, n2, r2) {
      return this._getCachedCompiledPatterns(e2).compileAG(e2, n2, r2);
    }
    _getCachedCompiledPatterns(e2) {
      return this._cachedCompiledPatterns || (this._cachedCompiledPatterns = new Ue(), this.collectPatterns(e2, this._cachedCompiledPatterns)), this._cachedCompiledPatterns;
    }
  }, ze = class extends Fe {
    constructor(e2, t2, n2, r2, i2, a2, o2, s2, c2, l2) {
      super(e2, t2, n2, r2);
      __publicField(this, "_begin");
      __publicField(this, "beginCaptures");
      __publicField(this, "_end");
      __publicField(this, "endHasBackReferences");
      __publicField(this, "endCaptures");
      __publicField(this, "applyEndPatternLast");
      __publicField(this, "hasMissingPatterns");
      __publicField(this, "patterns");
      __publicField(this, "_cachedCompiledPatterns");
      this._begin = new He(i2, this.id), this.beginCaptures = a2, this._end = new He(o2 || `\uFFFF`, -1), this.endHasBackReferences = this._end.hasBackReferences, this.endCaptures = s2, this.applyEndPatternLast = c2 || false, this.patterns = l2.patterns, this.hasMissingPatterns = l2.hasMissingPatterns, this._cachedCompiledPatterns = null;
    }
    dispose() {
      this._cachedCompiledPatterns && (this._cachedCompiledPatterns = (this._cachedCompiledPatterns.dispose(), null));
    }
    get debugBeginRegExp() {
      return `${this._begin.source}`;
    }
    get debugEndRegExp() {
      return `${this._end.source}`;
    }
    getEndWithResolvedBackReferences(e2, t2) {
      return this._end.resolveBackReferences(e2, t2);
    }
    collectPatterns(e2, t2) {
      t2.push(this._begin);
    }
    compile(e2, t2) {
      return this._getCachedCompiledPatterns(e2, t2).compile(e2);
    }
    compileAG(e2, t2, n2, r2) {
      return this._getCachedCompiledPatterns(e2, t2).compileAG(e2, n2, r2);
    }
    _getCachedCompiledPatterns(e2, t2) {
      if (!this._cachedCompiledPatterns) {
        this._cachedCompiledPatterns = new Ue();
        for (let t3 of this.patterns) e2.getRule(t3).collectPatterns(e2, this._cachedCompiledPatterns);
        this.applyEndPatternLast ? this._cachedCompiledPatterns.push(this._end.hasBackReferences ? this._end.clone() : this._end) : this._cachedCompiledPatterns.unshift(this._end.hasBackReferences ? this._end.clone() : this._end);
      }
      return this._end.hasBackReferences && (this.applyEndPatternLast ? this._cachedCompiledPatterns.setSource(this._cachedCompiledPatterns.length() - 1, t2) : this._cachedCompiledPatterns.setSource(0, t2)), this._cachedCompiledPatterns;
    }
  }, Be = class extends Fe {
    constructor(e2, t2, n2, r2, i2, a2, o2, s2, c2) {
      super(e2, t2, n2, r2);
      __publicField(this, "_begin");
      __publicField(this, "beginCaptures");
      __publicField(this, "whileCaptures");
      __publicField(this, "_while");
      __publicField(this, "whileHasBackReferences");
      __publicField(this, "hasMissingPatterns");
      __publicField(this, "patterns");
      __publicField(this, "_cachedCompiledPatterns");
      __publicField(this, "_cachedCompiledWhilePatterns");
      this._begin = new He(i2, this.id), this.beginCaptures = a2, this.whileCaptures = s2, this._while = new He(o2, Me), this.whileHasBackReferences = this._while.hasBackReferences, this.patterns = c2.patterns, this.hasMissingPatterns = c2.hasMissingPatterns, this._cachedCompiledPatterns = null, this._cachedCompiledWhilePatterns = null;
    }
    dispose() {
      this._cachedCompiledPatterns && (this._cachedCompiledPatterns = (this._cachedCompiledPatterns.dispose(), null)), this._cachedCompiledWhilePatterns && (this._cachedCompiledWhilePatterns = (this._cachedCompiledWhilePatterns.dispose(), null));
    }
    get debugBeginRegExp() {
      return `${this._begin.source}`;
    }
    get debugWhileRegExp() {
      return `${this._while.source}`;
    }
    getWhileWithResolvedBackReferences(e2, t2) {
      return this._while.resolveBackReferences(e2, t2);
    }
    collectPatterns(e2, t2) {
      t2.push(this._begin);
    }
    compile(e2, t2) {
      return this._getCachedCompiledPatterns(e2).compile(e2);
    }
    compileAG(e2, t2, n2, r2) {
      return this._getCachedCompiledPatterns(e2).compileAG(e2, n2, r2);
    }
    _getCachedCompiledPatterns(e2) {
      if (!this._cachedCompiledPatterns) {
        this._cachedCompiledPatterns = new Ue();
        for (let t2 of this.patterns) e2.getRule(t2).collectPatterns(e2, this._cachedCompiledPatterns);
      }
      return this._cachedCompiledPatterns;
    }
    compileWhile(e2, t2) {
      return this._getCachedCompiledWhilePatterns(e2, t2).compile(e2);
    }
    compileWhileAG(e2, t2, n2, r2) {
      return this._getCachedCompiledWhilePatterns(e2, t2).compileAG(e2, n2, r2);
    }
    _getCachedCompiledWhilePatterns(e2, t2) {
      return this._cachedCompiledWhilePatterns || (this._cachedCompiledWhilePatterns = new Ue(), this._cachedCompiledWhilePatterns.push(this._while.hasBackReferences ? this._while.clone() : this._while)), this._while.hasBackReferences && this._cachedCompiledWhilePatterns.setSource(0, t2 || `\uFFFF`), this._cachedCompiledWhilePatterns;
    }
  }, Ve = class e2 {
    static createCaptureRule(e3, t2, n2, r2, i2) {
      return e3.registerRule((e4) => new Ie(t2, e4, n2, r2, i2));
    }
    static getCompiledRuleId(t2, n2, r2) {
      return t2.id || n2.registerRule((i2) => {
        if (t2.id = i2, t2.match) return new Le(t2.$vscodeTextmateLocation, t2.id, t2.name, t2.match, e2._compileCaptures(t2.captures, n2, r2));
        if (t2.begin === void 0) {
          t2.repository && (r2 = o({}, r2, t2.repository));
          let i3 = t2.patterns;
          return i3 === void 0 && t2.include && (i3 = [
            {
              include: t2.include
            }
          ]), new Re(t2.$vscodeTextmateLocation, t2.id, t2.name, t2.contentName, e2._compilePatterns(i3, n2, r2));
        }
        return t2.while ? new Be(t2.$vscodeTextmateLocation, t2.id, t2.name, t2.contentName, t2.begin, e2._compileCaptures(t2.beginCaptures || t2.captures, n2, r2), t2.while, e2._compileCaptures(t2.whileCaptures || t2.captures, n2, r2), e2._compilePatterns(t2.patterns, n2, r2)) : new ze(t2.$vscodeTextmateLocation, t2.id, t2.name, t2.contentName, t2.begin, e2._compileCaptures(t2.beginCaptures || t2.captures, n2, r2), t2.end, e2._compileCaptures(t2.endCaptures || t2.captures, n2, r2), t2.applyEndPatternLast, e2._compilePatterns(t2.patterns, n2, r2));
      }), t2.id;
    }
    static _compileCaptures(t2, n2, r2) {
      let i2 = [];
      if (t2) {
        let a2 = 0;
        for (let e3 in t2) {
          if (e3 === `$vscodeTextmateLocation`) continue;
          let t3 = parseInt(e3, 10);
          t3 > a2 && (a2 = t3);
        }
        for (let e3 = 0; e3 <= a2; e3++) i2[e3] = null;
        for (let a3 in t2) {
          if (a3 === `$vscodeTextmateLocation`) continue;
          let o2 = parseInt(a3, 10), s2 = 0;
          t2[a3].patterns && (s2 = e2.getCompiledRuleId(t2[a3], n2, r2)), i2[o2] = e2.createCaptureRule(n2, t2[a3].$vscodeTextmateLocation, t2[a3].name, t2[a3].contentName, s2);
        }
      }
      return i2;
    }
    static _compilePatterns(t2, n2, r2) {
      let i2 = [];
      if (t2) for (let a2 = 0, o2 = t2.length; a2 < o2; a2++) {
        let o3 = t2[a2], s2 = -1;
        if (o3.include) {
          let t3 = Oe(o3.include);
          switch (t3.kind) {
            case 0:
            case 1:
              s2 = e2.getCompiledRuleId(r2[o3.include], n2, r2);
              break;
            case 2:
              let i3 = r2[t3.ruleName];
              i3 && (s2 = e2.getCompiledRuleId(i3, n2, r2));
              break;
            case 3:
            case 4:
              let a3 = t3.scopeName, c2 = t3.kind === 4 ? t3.ruleName : null, l2 = n2.getExternalGrammar(a3, r2);
              if (l2) if (c2) {
                let t4 = l2.repository[c2];
                t4 && (s2 = e2.getCompiledRuleId(t4, n2, l2.repository));
              } else s2 = e2.getCompiledRuleId(l2.repository.$self, n2, l2.repository);
              break;
          }
        } else s2 = e2.getCompiledRuleId(o3, n2, r2);
        if (s2 !== -1) {
          let e3 = n2.getRule(s2), t3 = false;
          if ((e3 instanceof Re || e3 instanceof ze || e3 instanceof Be) && e3.hasMissingPatterns && e3.patterns.length === 0 && (t3 = true), t3) continue;
          i2.push(s2);
        }
      }
      return {
        patterns: i2,
        hasMissingPatterns: (t2 ? t2.length : 0) !== i2.length
      };
    }
  }, He = class e2 {
    constructor(e3, t2) {
      __publicField(this, "source");
      __publicField(this, "ruleId");
      __publicField(this, "hasAnchor");
      __publicField(this, "hasBackReferences");
      __publicField(this, "_anchorCache");
      if (e3 && typeof e3 == `string`) {
        let t3 = e3.length, n2 = 0, r2 = [], i2 = false;
        for (let a2 = 0; a2 < t3; a2++) if (e3.charAt(a2) === `\\` && a2 + 1 < t3) {
          let t4 = e3.charAt(a2 + 1);
          t4 === `z` ? (r2.push(e3.substring(n2, a2)), r2.push(`$(?!\\n)(?<!\\n)`), n2 = a2 + 2) : (t4 === `A` || t4 === `G`) && (i2 = true), a2++;
        }
        this.hasAnchor = i2, n2 === 0 ? this.source = e3 : (r2.push(e3.substring(n2, t3)), this.source = r2.join(``));
      } else this.hasAnchor = false, this.source = e3;
      this.hasAnchor ? this._anchorCache = this._buildAnchorCache() : this._anchorCache = null, this.ruleId = t2, typeof this.source == `string` ? this.hasBackReferences = ke.test(this.source) : this.hasBackReferences = false;
    }
    clone() {
      return new e2(this.source, this.ruleId);
    }
    setSource(e3) {
      this.source !== e3 && (this.source = e3, this.hasAnchor && (this._anchorCache = this._buildAnchorCache()));
    }
    resolveBackReferences(e3, t2) {
      if (typeof this.source != `string`) throw Error(`This method should only be called if the source is a string`);
      let n2 = t2.map((t3) => e3.substring(t3.start, t3.end));
      return Ae.lastIndex = 0, this.source.replace(Ae, (e4, t3) => p(n2[parseInt(t3, 10)] || ``));
    }
    _buildAnchorCache() {
      if (typeof this.source != `string`) throw Error(`This method should only be called if the source is a string`);
      let e3 = [], t2 = [], n2 = [], r2 = [], i2, a2, o2, s2;
      for (i2 = 0, a2 = this.source.length; i2 < a2; i2++) o2 = this.source.charAt(i2), e3[i2] = o2, t2[i2] = o2, n2[i2] = o2, r2[i2] = o2, o2 === `\\` && i2 + 1 < a2 && (s2 = this.source.charAt(i2 + 1), s2 === `A` ? (e3[i2 + 1] = `\uFFFF`, t2[i2 + 1] = `\uFFFF`, n2[i2 + 1] = `A`, r2[i2 + 1] = `A`) : s2 === `G` ? (e3[i2 + 1] = `\uFFFF`, t2[i2 + 1] = `G`, n2[i2 + 1] = `\uFFFF`, r2[i2 + 1] = `G`) : (e3[i2 + 1] = s2, t2[i2 + 1] = s2, n2[i2 + 1] = s2, r2[i2 + 1] = s2), i2++);
      return {
        A0_G0: e3.join(``),
        A0_G1: t2.join(``),
        A1_G0: n2.join(``),
        A1_G1: r2.join(``)
      };
    }
    resolveAnchors(e3, t2) {
      return !this.hasAnchor || !this._anchorCache || typeof this.source != `string` ? this.source : e3 ? t2 ? this._anchorCache.A1_G1 : this._anchorCache.A1_G0 : t2 ? this._anchorCache.A0_G1 : this._anchorCache.A0_G0;
    }
  }, Ue = class {
    constructor() {
      __publicField(this, "_items");
      __publicField(this, "_hasAnchors");
      __publicField(this, "_cached");
      __publicField(this, "_anchorCache");
      this._items = [], this._hasAnchors = false, this._cached = null, this._anchorCache = {
        A0_G0: null,
        A0_G1: null,
        A1_G0: null,
        A1_G1: null
      };
    }
    dispose() {
      this._disposeCaches();
    }
    _disposeCaches() {
      this._cached && (this._cached = (this._cached.dispose(), null)), this._anchorCache.A0_G0 && (this._anchorCache.A0_G0.dispose(), this._anchorCache.A0_G0 = null), this._anchorCache.A0_G1 && (this._anchorCache.A0_G1.dispose(), this._anchorCache.A0_G1 = null), this._anchorCache.A1_G0 && (this._anchorCache.A1_G0.dispose(), this._anchorCache.A1_G0 = null), this._anchorCache.A1_G1 && (this._anchorCache.A1_G1.dispose(), this._anchorCache.A1_G1 = null);
    }
    push(e2) {
      this._items.push(e2), this._hasAnchors = this._hasAnchors || e2.hasAnchor;
    }
    unshift(e2) {
      this._items.unshift(e2), this._hasAnchors = this._hasAnchors || e2.hasAnchor;
    }
    length() {
      return this._items.length;
    }
    setSource(e2, t2) {
      this._items[e2].source !== t2 && (this._disposeCaches(), this._items[e2].setSource(t2));
    }
    compile(e2) {
      return this._cached || (this._cached = new We(e2, this._items.map((e3) => e3.source), this._items.map((e3) => e3.ruleId))), this._cached;
    }
    compileAG(e2, t2, n2) {
      return this._hasAnchors ? t2 ? n2 ? (this._anchorCache.A1_G1 || (this._anchorCache.A1_G1 = this._resolveAnchors(e2, t2, n2)), this._anchorCache.A1_G1) : (this._anchorCache.A1_G0 || (this._anchorCache.A1_G0 = this._resolveAnchors(e2, t2, n2)), this._anchorCache.A1_G0) : n2 ? (this._anchorCache.A0_G1 || (this._anchorCache.A0_G1 = this._resolveAnchors(e2, t2, n2)), this._anchorCache.A0_G1) : (this._anchorCache.A0_G0 || (this._anchorCache.A0_G0 = this._resolveAnchors(e2, t2, n2)), this._anchorCache.A0_G0) : this.compile(e2);
    }
    _resolveAnchors(e2, t2, n2) {
      return new We(e2, this._items.map((e3) => e3.resolveAnchors(t2, n2)), this._items.map((e3) => e3.ruleId));
    }
  }, We = class {
    constructor(e2, t2, n2) {
      __publicField(this, "scanner");
      this.regExps = t2, this.rules = n2, this.scanner = e2.createOnigScanner(t2);
    }
    dispose() {
      typeof this.scanner.dispose == `function` && this.scanner.dispose();
    }
    toString() {
      let e2 = [];
      for (let t2 = 0, n2 = this.rules.length; t2 < n2; t2++) e2.push(`   - ` + this.rules[t2] + `: ` + this.regExps[t2]);
      return e2.join(`
`);
    }
    findNextMatchSync(e2, t2, n2) {
      let r2 = this.scanner.findNextMatchSync(e2, t2, n2);
      return r2 ? {
        ruleId: this.rules[r2.index],
        captureIndices: r2.captureIndices
      } : null;
    }
  }, Ge = class {
    constructor(e2, t2) {
      this.languageId = e2, this.tokenType = t2;
    }
  }, Ke = (_a2 = class {
    constructor(e2, t2) {
      __publicField(this, "_defaultAttributes");
      __publicField(this, "_embeddedLanguagesMatcher");
      __publicField(this, "_getBasicScopeAttributes", new m((e2) => new Ge(this._scopeToLanguage(e2), this._toStandardTokenType(e2))));
      this._defaultAttributes = new Ge(e2, 8), this._embeddedLanguagesMatcher = new qe(Object.entries(t2 || {}));
    }
    getDefaultAttributes() {
      return this._defaultAttributes;
    }
    getBasicScopeAttributes(t2) {
      return t2 === null ? _a2._NULL_SCOPE_METADATA : this._getBasicScopeAttributes.get(t2);
    }
    _scopeToLanguage(e2) {
      return this._embeddedLanguagesMatcher.match(e2) || 0;
    }
    _toStandardTokenType(t2) {
      let n2 = t2.match(_a2.STANDARD_TOKEN_TYPE_REGEXP);
      if (!n2) return 8;
      switch (n2[1]) {
        case `comment`:
          return 1;
        case `string`:
          return 2;
        case `regex`:
          return 3;
        case `meta.embedded`:
          return 0;
      }
      throw Error(`Unexpected match for standard token type!`);
    }
  }, __publicField(_a2, "_NULL_SCOPE_METADATA", new Ge(0, 0)), __publicField(_a2, "STANDARD_TOKEN_TYPE_REGEXP", /\b(comment|string|regex|meta\.embedded)\b/), _a2), qe = class {
    constructor(e2) {
      __publicField(this, "values");
      __publicField(this, "scopesRegExp");
      if (e2.length === 0) this.values = null, this.scopesRegExp = null;
      else {
        this.values = new Map(e2);
        let t2 = e2.map(([e3, t3]) => p(e3));
        t2.sort(), t2.reverse(), this.scopesRegExp = RegExp(`^((${t2.join(`)|(`)}))($|\\.)`, ``);
      }
    }
    match(e2) {
      if (!this.scopesRegExp) return;
      let t2 = e2.match(this.scopesRegExp);
      if (t2) return this.values.get(t2[1]);
    }
  };
  typeof process < `u` && {}.VSCODE_TEXTMATE_DEBUG;
  var Je = false, Ye = class {
    constructor(e2, t2) {
      this.stack = e2, this.stoppedEarly = t2;
    }
  };
  function Xe(e2, t2, n2, r2, i2, a2, o2, s2) {
    let c2 = t2.content.length, l2 = false, u2 = -1;
    if (o2) {
      let o3 = Ze(e2, t2, n2, r2, i2, a2);
      i2 = o3.stack, r2 = o3.linePos, n2 = o3.isFirstLine, u2 = o3.anchorPosition;
    }
    let d2 = Date.now();
    for (; !l2; ) {
      if (s2 !== 0 && Date.now() - d2 > s2) return new Ye(i2, true);
      f2();
    }
    return new Ye(i2, false);
    function f2() {
      let o3 = Qe(e2, t2, n2, r2, i2, u2);
      if (!o3) {
        a2.produce(i2, c2), l2 = true;
        return;
      }
      let s3 = o3.captureIndices, d3 = o3.matchedRuleId, f3 = s3 && s3.length > 0 ? s3[0].end > r2 : false;
      if (d3 === je) {
        let o4 = i2.getRule(e2);
        a2.produce(i2, s3[0].start), i2 = i2.withContentNameScopesList(i2.nameScopesList), it(e2, t2, n2, i2, a2, o4.endCaptures, s3), a2.produce(i2, s3[0].end);
        let d4 = i2;
        if (i2 = i2.parent, u2 = d4.getAnchorPos(), !f3 && d4.getEnterPos() === r2) {
          i2 = d4, a2.produce(i2, c2), l2 = true;
          return;
        }
      } else {
        let o4 = e2.getRule(d3);
        a2.produce(i2, s3[0].start);
        let p2 = i2, m2 = o4.getName(t2.content, s3), h2 = i2.contentNameScopesList.pushAttributed(m2, e2);
        if (i2 = i2.push(d3, r2, u2, s3[0].end === c2, null, h2, h2), o4 instanceof ze) {
          let r3 = o4;
          it(e2, t2, n2, i2, a2, r3.beginCaptures, s3), a2.produce(i2, s3[0].end), u2 = s3[0].end;
          let d4 = r3.getContentName(t2.content, s3), m3 = h2.pushAttributed(d4, e2);
          if (i2 = i2.withContentNameScopesList(m3), r3.endHasBackReferences && (i2 = i2.withEndRule(r3.getEndWithResolvedBackReferences(t2.content, s3))), !f3 && p2.hasSameRuleAs(i2)) {
            i2 = i2.pop(), a2.produce(i2, c2), l2 = true;
            return;
          }
        } else if (o4 instanceof Be) {
          let r3 = o4;
          it(e2, t2, n2, i2, a2, r3.beginCaptures, s3), a2.produce(i2, s3[0].end), u2 = s3[0].end;
          let d4 = r3.getContentName(t2.content, s3), m3 = h2.pushAttributed(d4, e2);
          if (i2 = i2.withContentNameScopesList(m3), r3.whileHasBackReferences && (i2 = i2.withEndRule(r3.getWhileWithResolvedBackReferences(t2.content, s3))), !f3 && p2.hasSameRuleAs(i2)) {
            i2 = i2.pop(), a2.produce(i2, c2), l2 = true;
            return;
          }
        } else if (it(e2, t2, n2, i2, a2, o4.captures, s3), a2.produce(i2, s3[0].end), i2 = i2.pop(), !f3) {
          i2 = i2.safePop(), a2.produce(i2, c2), l2 = true;
          return;
        }
      }
      s3[0].end > r2 && (r2 = s3[0].end, n2 = false);
    }
  }
  function Ze(e2, t2, n2, r2, i2, a2) {
    let o2 = i2.beginRuleCapturedEOL ? 0 : -1, s2 = [];
    for (let t3 = i2; t3; t3 = t3.pop()) {
      let n3 = t3.getRule(e2);
      n3 instanceof Be && s2.push({
        rule: n3,
        stack: t3
      });
    }
    for (let c2 = s2.pop(); c2; c2 = s2.pop()) {
      let { ruleScanner: s3, findOptions: l2 } = nt(c2.rule, e2, c2.stack.endRule, n2, r2 === o2), u2 = s3.findNextMatchSync(t2, r2, l2);
      if (u2) {
        if (u2.ruleId !== Me) {
          i2 = c2.stack.pop();
          break;
        }
        u2.captureIndices && u2.captureIndices.length && (a2.produce(c2.stack, u2.captureIndices[0].start), it(e2, t2, n2, c2.stack, a2, c2.rule.whileCaptures, u2.captureIndices), a2.produce(c2.stack, u2.captureIndices[0].end), o2 = u2.captureIndices[0].end, u2.captureIndices[0].end > r2 && (r2 = u2.captureIndices[0].end, n2 = false));
      } else {
        i2 = c2.stack.pop();
        break;
      }
    }
    return {
      stack: i2,
      linePos: r2,
      anchorPosition: o2,
      isFirstLine: n2
    };
  }
  function Qe(e2, t2, n2, r2, i2, a2) {
    let o2 = $e(e2, t2, n2, r2, i2, a2), s2 = e2.getInjections();
    if (s2.length === 0) return o2;
    let c2 = et(s2, e2, t2, n2, r2, i2, a2);
    if (!c2) return o2;
    if (!o2) return c2;
    let l2 = o2.captureIndices[0].start, u2 = c2.captureIndices[0].start;
    return u2 < l2 || c2.priorityMatch && u2 === l2 ? c2 : o2;
  }
  function $e(e2, t2, n2, r2, i2, a2) {
    let { ruleScanner: o2, findOptions: s2 } = tt(i2.getRule(e2), e2, i2.endRule, n2, r2 === a2), c2 = o2.findNextMatchSync(t2, r2, s2);
    return c2 ? {
      captureIndices: c2.captureIndices,
      matchedRuleId: c2.ruleId
    } : null;
  }
  function et(e2, t2, n2, r2, i2, a2, o2) {
    let s2 = Number.MAX_VALUE, c2 = null, l2, u2 = 0, d2 = a2.contentNameScopesList.getScopeNames();
    for (let a3 = 0, f2 = e2.length; a3 < f2; a3++) {
      let f3 = e2[a3];
      if (!f3.matcher(d2)) continue;
      let { ruleScanner: p2, findOptions: m2 } = tt(t2.getRule(f3.ruleId), t2, null, r2, i2 === o2), h2 = p2.findNextMatchSync(n2, i2, m2);
      if (!h2) continue;
      let g2 = h2.captureIndices[0].start;
      if (!(g2 >= s2) && (s2 = g2, c2 = h2.captureIndices, l2 = h2.ruleId, u2 = f3.priority, s2 === i2)) break;
    }
    return c2 ? {
      priorityMatch: u2 === -1,
      captureIndices: c2,
      matchedRuleId: l2
    } : null;
  }
  function tt(e2, t2, n2, r2, i2) {
    return Je ? {
      ruleScanner: e2.compile(t2, n2),
      findOptions: rt(r2, i2)
    } : {
      ruleScanner: e2.compileAG(t2, n2, r2, i2),
      findOptions: 0
    };
  }
  function nt(e2, t2, n2, r2, i2) {
    return Je ? {
      ruleScanner: e2.compileWhile(t2, n2),
      findOptions: rt(r2, i2)
    } : {
      ruleScanner: e2.compileWhileAG(t2, n2, r2, i2),
      findOptions: 0
    };
  }
  function rt(e2, t2) {
    let n2 = 0;
    return e2 || (n2 |= 1), t2 || (n2 |= 4), n2;
  }
  function it(e2, t2, n2, r2, i2, a2, o2) {
    if (a2.length === 0) return;
    let s2 = t2.content, c2 = Math.min(a2.length, o2.length), l2 = [], u2 = o2[0].end;
    for (let t3 = 0; t3 < c2; t3++) {
      let c3 = a2[t3];
      if (c3 === null) continue;
      let d2 = o2[t3];
      if (d2.length === 0) continue;
      if (d2.start > u2) break;
      for (; l2.length > 0 && l2[l2.length - 1].endPos <= d2.start; ) i2.produceFromScopes(l2[l2.length - 1].scopes, l2[l2.length - 1].endPos), l2.pop();
      if (l2.length > 0 ? i2.produceFromScopes(l2[l2.length - 1].scopes, d2.start) : i2.produce(r2, d2.start), c3.retokenizeCapturedWithRuleId) {
        let t4 = c3.getName(s2, o2), a3 = r2.contentNameScopesList.pushAttributed(t4, e2), l3 = c3.getContentName(s2, o2), u3 = a3.pushAttributed(l3, e2), f3 = r2.push(c3.retokenizeCapturedWithRuleId, d2.start, -1, false, null, a3, u3), p2 = e2.createOnigString(s2.substring(0, d2.end));
        Xe(e2, p2, n2 && d2.start === 0, d2.start, f3, i2, false, 0), me(p2);
        continue;
      }
      let f2 = c3.getName(s2, o2);
      if (f2 !== null) {
        let t4 = (l2.length > 0 ? l2[l2.length - 1].scopes : r2.contentNameScopesList).pushAttributed(f2, e2);
        l2.push(new at(t4, d2.end));
      }
    }
    for (; l2.length > 0; ) i2.produceFromScopes(l2[l2.length - 1].scopes, l2[l2.length - 1].endPos), l2.pop();
  }
  var at = class {
    constructor(e2, t2) {
      __publicField(this, "scopes");
      __publicField(this, "endPos");
      this.scopes = e2, this.endPos = t2;
    }
  };
  function ot(e2, t2, n2, r2, i2, a2, o2, s2) {
    return new ut(e2, t2, n2, r2, i2, a2, o2, s2);
  }
  function st(e2, t2, n2, r2, i2) {
    let a2 = de(t2, ct), o2 = Ve.getCompiledRuleId(n2, r2, i2.repository);
    for (let n3 of a2) e2.push({
      debugSelector: t2,
      matcher: n3.matcher,
      ruleId: o2,
      grammar: i2,
      priority: n3.priority
    });
  }
  function ct(e2, t2) {
    if (t2.length < e2.length) return false;
    let n2 = 0;
    return e2.every((e3) => {
      for (let r2 = n2; r2 < t2.length; r2++) if (lt(t2[r2], e3)) return n2 = r2 + 1, true;
      return false;
    });
  }
  function lt(e2, t2) {
    if (!e2) return false;
    if (e2 === t2) return true;
    let n2 = t2.length;
    return e2.length > n2 && e2.substr(0, n2) === t2 && e2[n2] === `.`;
  }
  var ut = class {
    constructor(e2, t2, n2, r2, i2, a2, o2, s2) {
      __publicField(this, "_rootId");
      __publicField(this, "_lastRuleId");
      __publicField(this, "_ruleId2desc");
      __publicField(this, "_includedGrammars");
      __publicField(this, "_grammarRepository");
      __publicField(this, "_grammar");
      __publicField(this, "_injections");
      __publicField(this, "_basicScopeAttributesProvider");
      __publicField(this, "_tokenTypeMatchers");
      if (this._rootScopeName = e2, this.balancedBracketSelectors = a2, this._onigLib = s2, this._basicScopeAttributesProvider = new Ke(n2, r2), this._rootId = -1, this._lastRuleId = 0, this._ruleId2desc = [
        null
      ], this._includedGrammars = {}, this._grammarRepository = o2, this._grammar = dt(t2, null), this._injections = null, this._tokenTypeMatchers = [], i2) for (let e3 of Object.keys(i2)) {
        let t3 = de(e3, ct);
        for (let n3 of t3) this._tokenTypeMatchers.push({
          matcher: n3.matcher,
          type: i2[e3]
        });
      }
    }
    get themeProvider() {
      return this._grammarRepository;
    }
    dispose() {
      for (let e2 of this._ruleId2desc) e2 && e2.dispose();
    }
    createOnigScanner(e2) {
      return this._onigLib.createOnigScanner(e2);
    }
    createOnigString(e2) {
      return this._onigLib.createOnigString(e2);
    }
    getMetadataForScope(e2) {
      return this._basicScopeAttributesProvider.getBasicScopeAttributes(e2);
    }
    _collectInjections() {
      let e2 = {
        lookup: (e3) => e3 === this._rootScopeName ? this._grammar : this.getExternalGrammar(e3),
        injections: (e3) => this._grammarRepository.injections(e3)
      }, t2 = [], n2 = this._rootScopeName, r2 = e2.lookup(n2);
      if (r2) {
        let e3 = r2.injections;
        if (e3) for (let n3 in e3) st(t2, n3, e3[n3], this, r2);
        let i2 = this._grammarRepository.injections(n2);
        i2 && i2.forEach((e4) => {
          let n3 = this.getExternalGrammar(e4);
          if (n3) {
            let e5 = n3.injectionSelector;
            e5 && st(t2, e5, n3, this, n3);
          }
        });
      }
      return t2.sort((e3, t3) => e3.priority - t3.priority), t2;
    }
    getInjections() {
      return this._injections === null && (this._injections = this._collectInjections()), this._injections;
    }
    registerRule(e2) {
      let t2 = ++this._lastRuleId, n2 = e2(Ne(t2));
      return this._ruleId2desc[t2] = n2, n2;
    }
    getRule(e2) {
      return this._ruleId2desc[Pe(e2)];
    }
    getExternalGrammar(e2, t2) {
      if (this._includedGrammars[e2]) return this._includedGrammars[e2];
      if (this._grammarRepository) {
        let n2 = this._grammarRepository.lookup(e2);
        if (n2) return this._includedGrammars[e2] = dt(n2, t2 && t2.$base), this._includedGrammars[e2];
      }
    }
    tokenizeLine(e2, t2, n2 = 0) {
      let r2 = this._tokenize(e2, t2, false, n2);
      return {
        tokens: r2.lineTokens.getResult(r2.ruleStack, r2.lineLength),
        ruleStack: r2.ruleStack,
        stoppedEarly: r2.stoppedEarly
      };
    }
    tokenizeLine2(e2, t2, n2 = 0) {
      let r2 = this._tokenize(e2, t2, true, n2);
      return {
        tokens: r2.lineTokens.getBinaryResult(r2.ruleStack, r2.lineLength),
        ruleStack: r2.ruleStack,
        stoppedEarly: r2.stoppedEarly
      };
    }
    _tokenize(e2, t2, n2, r2) {
      this._rootId === -1 && (this._rootId = Ve.getCompiledRuleId(this._grammar.repository.$self, this, this._grammar.repository), this.getInjections());
      let i2;
      if (!t2 || t2 === pt.NULL) {
        i2 = true;
        let e3 = this._basicScopeAttributesProvider.getDefaultAttributes(), n3 = this.themeProvider.getDefaults(), r3 = y.set(0, e3.languageId, e3.tokenType, null, n3.fontStyle, n3.foregroundId, n3.backgroundId), a3 = this.getRule(this._rootId).getName(null, null), o3;
        o3 = a3 ? ft.createRootAndLookUpScopeName(a3, r3, this) : ft.createRoot(`unknown`, r3), t2 = new pt(null, this._rootId, -1, -1, false, null, o3, o3);
      } else i2 = false, t2.reset();
      e2 += `
`;
      let a2 = this.createOnigString(e2), o2 = a2.content.length, s2 = new ht(n2, e2, this._tokenTypeMatchers, this.balancedBracketSelectors), c2 = Xe(this, a2, i2, 0, t2, s2, true, r2);
      return me(a2), {
        lineLength: o2,
        lineTokens: s2,
        ruleStack: c2.stack,
        stoppedEarly: c2.stoppedEarly
      };
    }
  };
  function dt(e2, t2) {
    return e2 = n(e2), e2.repository = e2.repository || {}, e2.repository.$self = {
      $vscodeTextmateLocation: e2.$vscodeTextmateLocation,
      patterns: e2.patterns,
      name: e2.scopeName
    }, e2.repository.$base = t2 || e2.repository.$self, e2;
  }
  var ft = class e2 {
    constructor(e3, t2, n2) {
      this.parent = e3, this.scopePath = t2, this.tokenAttributes = n2;
    }
    static fromExtension(t2, n2) {
      let r2 = t2, i2 = (t2 == null ? void 0 : t2.scopePath) ?? null;
      for (let t3 of n2) i2 = g.push(i2, t3.scopeNames), r2 = new e2(r2, i2, t3.encodedTokenAttributes);
      return r2;
    }
    static createRoot(t2, n2) {
      return new e2(null, new g(null, t2), n2);
    }
    static createRootAndLookUpScopeName(t2, n2, r2) {
      let i2 = r2.getMetadataForScope(t2), a2 = new g(null, t2), o2 = r2.themeProvider.themeMatch(a2);
      return new e2(null, a2, e2.mergeAttributes(n2, i2, o2));
    }
    get scopeName() {
      return this.scopePath.scopeName;
    }
    toString() {
      return this.getScopeNames().join(` `);
    }
    equals(t2) {
      return e2.equals(this, t2);
    }
    static equals(e3, t2) {
      do {
        if (e3 === t2 || !e3 && !t2) return true;
        if (!e3 || !t2 || e3.scopeName !== t2.scopeName || e3.tokenAttributes !== t2.tokenAttributes) return false;
        e3 = e3.parent, t2 = t2.parent;
      } while (true);
    }
    static mergeAttributes(e3, t2, n2) {
      let r2 = -1, i2 = 0, a2 = 0;
      return n2 !== null && (r2 = n2.fontStyle, i2 = n2.foregroundId, a2 = n2.backgroundId), y.set(e3, t2.languageId, t2.tokenType, null, r2, i2, a2);
    }
    pushAttributed(t2, n2) {
      if (t2 === null) return this;
      if (t2.indexOf(` `) === -1) return e2._pushAttributed(this, t2, n2);
      let r2 = t2.split(/ /g), i2 = this;
      for (let t3 of r2) i2 = e2._pushAttributed(i2, t3, n2);
      return i2;
    }
    static _pushAttributed(t2, n2, r2) {
      let i2 = r2.getMetadataForScope(n2), a2 = t2.scopePath.push(n2), o2 = r2.themeProvider.themeMatch(a2);
      return new e2(t2, a2, e2.mergeAttributes(t2.tokenAttributes, i2, o2));
    }
    getScopeNames() {
      return this.scopePath.getSegments();
    }
    getExtensionIfDefined(e3) {
      var _a3;
      let t2 = [], n2 = this;
      for (; n2 && n2 !== e3; ) t2.push({
        encodedTokenAttributes: n2.tokenAttributes,
        scopeNames: n2.scopePath.getExtensionIfDefined(((_a3 = n2.parent) == null ? void 0 : _a3.scopePath) ?? null)
      }), n2 = n2.parent;
      return n2 === e3 ? t2.reverse() : void 0;
    }
  }, pt = (_b = class {
    constructor(e2, t2, n2, r2, i2, a2, o2, s2) {
      __publicField(this, "_stackElementBrand");
      __publicField(this, "_enterPos");
      __publicField(this, "_anchorPos");
      __publicField(this, "depth");
      this.parent = e2, this.ruleId = t2, this.beginRuleCapturedEOL = i2, this.endRule = a2, this.nameScopesList = o2, this.contentNameScopesList = s2, this.depth = this.parent ? this.parent.depth + 1 : 1, this._enterPos = n2, this._anchorPos = r2;
    }
    equals(t2) {
      return t2 === null ? false : _b._equals(this, t2);
    }
    static _equals(e2, t2) {
      return e2 === t2 ? true : this._structuralEquals(e2, t2) ? ft.equals(e2.contentNameScopesList, t2.contentNameScopesList) : false;
    }
    static _structuralEquals(e2, t2) {
      do {
        if (e2 === t2 || !e2 && !t2) return true;
        if (!e2 || !t2 || e2.depth !== t2.depth || e2.ruleId !== t2.ruleId || e2.endRule !== t2.endRule) return false;
        e2 = e2.parent, t2 = t2.parent;
      } while (true);
    }
    clone() {
      return this;
    }
    static _reset(e2) {
      for (; e2; ) e2._enterPos = -1, e2._anchorPos = -1, e2 = e2.parent;
    }
    reset() {
      _b._reset(this);
    }
    pop() {
      return this.parent;
    }
    safePop() {
      return this.parent ? this.parent : this;
    }
    push(t2, n2, r2, i2, a2, o2, s2) {
      return new _b(this, t2, n2, r2, i2, a2, o2, s2);
    }
    getEnterPos() {
      return this._enterPos;
    }
    getAnchorPos() {
      return this._anchorPos;
    }
    getRule(e2) {
      return e2.getRule(this.ruleId);
    }
    toString() {
      let e2 = [];
      return this._writeString(e2, 0), `[` + e2.join(`,`) + `]`;
    }
    _writeString(e2, t2) {
      var _a3, _b2;
      return this.parent && (t2 = this.parent._writeString(e2, t2)), e2[t2++] = `(${this.ruleId}, ${(_a3 = this.nameScopesList) == null ? void 0 : _a3.toString()}, ${(_b2 = this.contentNameScopesList) == null ? void 0 : _b2.toString()})`, t2;
    }
    withContentNameScopesList(e2) {
      return this.contentNameScopesList === e2 ? this : this.parent.push(this.ruleId, this._enterPos, this._anchorPos, this.beginRuleCapturedEOL, this.endRule, this.nameScopesList, e2);
    }
    withEndRule(t2) {
      return this.endRule === t2 ? this : new _b(this.parent, this.ruleId, this._enterPos, this._anchorPos, this.beginRuleCapturedEOL, t2, this.nameScopesList, this.contentNameScopesList);
    }
    hasSameRuleAs(e2) {
      let t2 = this;
      for (; t2 && t2._enterPos === e2._enterPos; ) {
        if (t2.ruleId === e2.ruleId) return true;
        t2 = t2.parent;
      }
      return false;
    }
    toStateStackFrame() {
      var _a3, _b2, _c2;
      return {
        ruleId: Pe(this.ruleId),
        beginRuleCapturedEOL: this.beginRuleCapturedEOL,
        endRule: this.endRule,
        nameScopesList: ((_b2 = this.nameScopesList) == null ? void 0 : _b2.getExtensionIfDefined(((_a3 = this.parent) == null ? void 0 : _a3.nameScopesList) ?? null)) ?? [],
        contentNameScopesList: ((_c2 = this.contentNameScopesList) == null ? void 0 : _c2.getExtensionIfDefined(this.nameScopesList)) ?? []
      };
    }
    static pushFrame(t2, n2) {
      let r2 = ft.fromExtension((t2 == null ? void 0 : t2.nameScopesList) ?? null, n2.nameScopesList);
      return new _b(t2, Ne(n2.ruleId), n2.enterPos ?? -1, n2.anchorPos ?? -1, n2.beginRuleCapturedEOL, n2.endRule, r2, ft.fromExtension(r2, n2.contentNameScopesList));
    }
  }, __publicField(_b, "NULL", new _b(null, 0, 0, 0, false, null, null, null)), _b), mt = class {
    constructor(e2, t2) {
      __publicField(this, "balancedBracketScopes");
      __publicField(this, "unbalancedBracketScopes");
      __publicField(this, "allowAny", false);
      this.balancedBracketScopes = e2.flatMap((e3) => e3 === `*` ? (this.allowAny = true, []) : de(e3, ct).map((e4) => e4.matcher)), this.unbalancedBracketScopes = t2.flatMap((e3) => de(e3, ct).map((e4) => e4.matcher));
    }
    get matchesAlways() {
      return this.allowAny && this.unbalancedBracketScopes.length === 0;
    }
    get matchesNever() {
      return this.balancedBracketScopes.length === 0 && !this.allowAny;
    }
    match(e2) {
      for (let t2 of this.unbalancedBracketScopes) if (t2(e2)) return false;
      for (let t2 of this.balancedBracketScopes) if (t2(e2)) return true;
      return this.allowAny;
    }
  }, ht = class {
    constructor(e2, t2, n2, r2) {
      __publicField(this, "_emitBinaryTokens");
      __publicField(this, "_lineText");
      __publicField(this, "_tokens");
      __publicField(this, "_binaryTokens");
      __publicField(this, "_lastTokenEndIndex");
      __publicField(this, "_tokenTypeOverrides");
      this.balancedBracketSelectors = r2, this._emitBinaryTokens = e2, this._tokenTypeOverrides = n2, this._lineText = null, this._tokens = [], this._binaryTokens = [], this._lastTokenEndIndex = 0;
    }
    produce(e2, t2) {
      this.produceFromScopes(e2.contentNameScopesList, t2);
    }
    produceFromScopes(e2, t2) {
      var _a3;
      if (this._lastTokenEndIndex >= t2) return;
      if (this._emitBinaryTokens) {
        let n3 = (e2 == null ? void 0 : e2.tokenAttributes) ?? 0, r2 = false;
        if (((_a3 = this.balancedBracketSelectors) == null ? void 0 : _a3.matchesAlways) && (r2 = true), this._tokenTypeOverrides.length > 0 || this.balancedBracketSelectors && !this.balancedBracketSelectors.matchesAlways && !this.balancedBracketSelectors.matchesNever) {
          let t3 = (e2 == null ? void 0 : e2.getScopeNames()) ?? [];
          for (let e3 of this._tokenTypeOverrides) e3.matcher(t3) && (n3 = y.set(n3, 0, le(e3.type), null, -1, 0, 0));
          this.balancedBracketSelectors && (r2 = this.balancedBracketSelectors.match(t3));
        }
        if (r2 && (n3 = y.set(n3, 0, 8, r2, -1, 0, 0)), this._binaryTokens.length > 0 && this._binaryTokens[this._binaryTokens.length - 1] === n3) {
          this._lastTokenEndIndex = t2;
          return;
        }
        this._binaryTokens.push(this._lastTokenEndIndex), this._binaryTokens.push(n3), this._lastTokenEndIndex = t2;
        return;
      }
      let n2 = (e2 == null ? void 0 : e2.getScopeNames()) ?? [];
      this._tokens.push({
        startIndex: this._lastTokenEndIndex,
        endIndex: t2,
        scopes: n2
      }), this._lastTokenEndIndex = t2;
    }
    getResult(e2, t2) {
      return this._tokens.length > 0 && this._tokens[this._tokens.length - 1].startIndex === t2 - 1 && this._tokens.pop(), this._tokens.length === 0 && (this._lastTokenEndIndex = -1, this.produce(e2, t2), this._tokens[this._tokens.length - 1].startIndex = 0), this._tokens;
    }
    getBinaryResult(e2, t2) {
      this._binaryTokens.length > 0 && this._binaryTokens[this._binaryTokens.length - 2] === t2 - 1 && (this._binaryTokens.pop(), this._binaryTokens.pop()), this._binaryTokens.length === 0 && (this._lastTokenEndIndex = -1, this.produce(e2, t2), this._binaryTokens[this._binaryTokens.length - 2] = 0);
      let n2 = new Uint32Array(this._binaryTokens.length);
      for (let e3 = 0, t3 = this._binaryTokens.length; e3 < t3; e3++) n2[e3] = this._binaryTokens[e3];
      return n2;
    }
  }, gt = class {
    constructor(e2, t2) {
      __publicField(this, "_grammars", /* @__PURE__ */ new Map());
      __publicField(this, "_rawGrammars", /* @__PURE__ */ new Map());
      __publicField(this, "_injectionGrammars", /* @__PURE__ */ new Map());
      __publicField(this, "_theme");
      this._onigLib = t2, this._theme = e2;
    }
    dispose() {
      for (let e2 of this._grammars.values()) e2.dispose();
    }
    setTheme(e2) {
      this._theme = e2;
    }
    getColorMap() {
      return this._theme.getColorMap();
    }
    addGrammar(e2, t2) {
      this._rawGrammars.set(e2.scopeName, e2), t2 && this._injectionGrammars.set(e2.scopeName, t2);
    }
    lookup(e2) {
      return this._rawGrammars.get(e2);
    }
    injections(e2) {
      return this._injectionGrammars.get(e2);
    }
    getDefaults() {
      return this._theme.getDefaults();
    }
    themeMatch(e2) {
      return this._theme.match(e2);
    }
    grammarForScopeName(e2, t2, n2, r2, i2) {
      if (!this._grammars.has(e2)) {
        let a2 = this._rawGrammars.get(e2);
        if (!a2) return null;
        this._grammars.set(e2, ot(e2, a2, t2, n2, r2, i2, this, this._onigLib));
      }
      return this._grammars.get(e2);
    }
  }, _t = class {
    constructor(e2) {
      __publicField(this, "_options");
      __publicField(this, "_syncRegistry");
      __publicField(this, "_ensureGrammarCache");
      this._options = e2, this._syncRegistry = new gt(h.createFromRawTheme(e2.theme, e2.colorMap), e2.onigLib), this._ensureGrammarCache = /* @__PURE__ */ new Map();
    }
    dispose() {
      this._syncRegistry.dispose();
    }
    setTheme(e2, t2) {
      this._syncRegistry.setTheme(h.createFromRawTheme(e2, t2));
    }
    getColorMap() {
      return this._syncRegistry.getColorMap();
    }
    loadGrammarWithEmbeddedLanguages(e2, t2, n2) {
      return this.loadGrammarWithConfiguration(e2, t2, {
        embeddedLanguages: n2
      });
    }
    loadGrammarWithConfiguration(e2, t2, n2) {
      return this._loadGrammar(e2, t2, n2.embeddedLanguages, n2.tokenTypes, new mt(n2.balancedBracketSelectors || [], n2.unbalancedBracketSelectors || []));
    }
    loadGrammar(e2) {
      return this._loadGrammar(e2, 0, null, null, null);
    }
    _loadGrammar(e2, t2, n2, r2, i2) {
      let a2 = new ve(this._syncRegistry, e2);
      for (; a2.Q.length > 0; ) a2.Q.map((e3) => this._loadSingleGrammar(e3.scopeName)), a2.processQueue();
      return this._grammarForScopeName(e2, t2, n2, r2, i2);
    }
    _loadSingleGrammar(e2) {
      this._ensureGrammarCache.has(e2) || (this._doLoadSingleGrammar(e2), this._ensureGrammarCache.set(e2, true));
    }
    _doLoadSingleGrammar(e2) {
      let t2 = this._options.loadGrammar(e2);
      if (t2) {
        let n2 = typeof this._options.getInjections == `function` ? this._options.getInjections(e2) : void 0;
        this._syncRegistry.addGrammar(t2, n2);
      }
    }
    addGrammar(e2, t2 = [], n2 = 0, r2 = null) {
      return this._syncRegistry.addGrammar(e2, t2), this._grammarForScopeName(e2.scopeName, n2, r2);
    }
    _grammarForScopeName(e2, t2 = 0, n2 = null, r2 = null, i2 = null) {
      return this._syncRegistry.grammarForScopeName(e2, t2, n2, r2, i2);
    }
  }, vt = pt.NULL;
  const yt = [
    `area`,
    `base`,
    `basefont`,
    `bgsound`,
    `br`,
    `col`,
    `command`,
    `embed`,
    `frame`,
    `hr`,
    `image`,
    `img`,
    `input`,
    `keygen`,
    `link`,
    `meta`,
    `param`,
    `source`,
    `track`,
    `wbr`
  ];
  var bt = class {
    constructor(e2, t2, n2) {
      this.normal = t2, this.property = e2, n2 && (this.space = n2);
    }
  };
  bt.prototype.normal = {}, bt.prototype.property = {}, bt.prototype.space = void 0;
  function xt(e2, t2) {
    let n2 = {}, r2 = {};
    for (let t3 of e2) Object.assign(n2, t3.property), Object.assign(r2, t3.normal);
    return new bt(n2, r2, t2);
  }
  function St(e2) {
    return e2.toLowerCase();
  }
  var b = class {
    constructor(e2, t2) {
      this.attribute = t2, this.property = e2;
    }
  };
  b.prototype.attribute = ``, b.prototype.booleanish = false, b.prototype.boolean = false, b.prototype.commaOrSpaceSeparated = false, b.prototype.commaSeparated = false, b.prototype.defined = false, b.prototype.mustUseProperty = false, b.prototype.number = false, b.prototype.overloadedBoolean = false, b.prototype.property = ``, b.prototype.spaceSeparated = false, b.prototype.space = void 0;
  var Ct = e({
    boolean: () => x,
    booleanish: () => S,
    commaOrSpaceSeparated: () => E,
    commaSeparated: () => T,
    number: () => C,
    overloadedBoolean: () => Tt,
    spaceSeparated: () => w
  }, 1), wt = 0;
  const x = D(), S = D(), Tt = D(), C = D(), w = D(), T = D(), E = D();
  function D() {
    return 2 ** ++wt;
  }
  var Et = Object.keys(Ct), Dt = class extends b {
    constructor(e2, t2, n2, r2) {
      let i2 = -1;
      if (super(e2, t2), Ot(this, `space`, r2), typeof n2 == `number`) for (; ++i2 < Et.length; ) {
        let e3 = Et[i2];
        Ot(this, Et[i2], (n2 & Ct[e3]) === Ct[e3]);
      }
    }
  };
  Dt.prototype.defined = true;
  function Ot(e2, t2, n2) {
    n2 && (e2[t2] = n2);
  }
  function O(e2) {
    let t2 = {}, n2 = {};
    for (let [r2, i2] of Object.entries(e2.properties)) {
      let a2 = new Dt(r2, e2.transform(e2.attributes || {}, r2), i2, e2.space);
      e2.mustUseProperty && e2.mustUseProperty.includes(r2) && (a2.mustUseProperty = true), t2[r2] = a2, n2[St(r2)] = r2, n2[St(a2.attribute)] = r2;
    }
    return new bt(t2, n2, e2.space);
  }
  const kt = O({
    properties: {
      ariaActiveDescendant: null,
      ariaAtomic: S,
      ariaAutoComplete: null,
      ariaBusy: S,
      ariaChecked: S,
      ariaColCount: C,
      ariaColIndex: C,
      ariaColSpan: C,
      ariaControls: w,
      ariaCurrent: null,
      ariaDescribedBy: w,
      ariaDetails: null,
      ariaDisabled: S,
      ariaDropEffect: w,
      ariaErrorMessage: null,
      ariaExpanded: S,
      ariaFlowTo: w,
      ariaGrabbed: S,
      ariaHasPopup: null,
      ariaHidden: S,
      ariaInvalid: null,
      ariaKeyShortcuts: null,
      ariaLabel: null,
      ariaLabelledBy: w,
      ariaLevel: C,
      ariaLive: null,
      ariaModal: S,
      ariaMultiLine: S,
      ariaMultiSelectable: S,
      ariaOrientation: null,
      ariaOwns: w,
      ariaPlaceholder: null,
      ariaPosInSet: C,
      ariaPressed: S,
      ariaReadOnly: S,
      ariaRelevant: null,
      ariaRequired: S,
      ariaRoleDescription: w,
      ariaRowCount: C,
      ariaRowIndex: C,
      ariaRowSpan: C,
      ariaSelected: S,
      ariaSetSize: C,
      ariaSort: null,
      ariaValueMax: C,
      ariaValueMin: C,
      ariaValueNow: C,
      ariaValueText: null,
      role: null
    },
    transform(e2, t2) {
      return t2 === `role` ? t2 : `aria-` + t2.slice(4).toLowerCase();
    }
  });
  function At(e2, t2) {
    return t2 in e2 ? e2[t2] : t2;
  }
  function jt(e2, t2) {
    return At(e2, t2.toLowerCase());
  }
  const Mt = O({
    attributes: {
      acceptcharset: `accept-charset`,
      classname: `class`,
      htmlfor: `for`,
      httpequiv: `http-equiv`
    },
    mustUseProperty: [
      `checked`,
      `multiple`,
      `muted`,
      `selected`
    ],
    properties: {
      abbr: null,
      accept: T,
      acceptCharset: w,
      accessKey: w,
      action: null,
      allow: null,
      allowFullScreen: x,
      allowPaymentRequest: x,
      allowUserMedia: x,
      alt: null,
      as: null,
      async: x,
      autoCapitalize: null,
      autoComplete: w,
      autoFocus: x,
      autoPlay: x,
      blocking: w,
      capture: null,
      charSet: null,
      checked: x,
      cite: null,
      className: w,
      cols: C,
      colSpan: null,
      content: null,
      contentEditable: S,
      controls: x,
      controlsList: w,
      coords: C | T,
      crossOrigin: null,
      data: null,
      dateTime: null,
      decoding: null,
      default: x,
      defer: x,
      dir: null,
      dirName: null,
      disabled: x,
      download: Tt,
      draggable: S,
      encType: null,
      enterKeyHint: null,
      fetchPriority: null,
      form: null,
      formAction: null,
      formEncType: null,
      formMethod: null,
      formNoValidate: x,
      formTarget: null,
      headers: w,
      height: C,
      hidden: Tt,
      high: C,
      href: null,
      hrefLang: null,
      htmlFor: w,
      httpEquiv: w,
      id: null,
      imageSizes: null,
      imageSrcSet: null,
      inert: x,
      inputMode: null,
      integrity: null,
      is: null,
      isMap: x,
      itemId: null,
      itemProp: w,
      itemRef: w,
      itemScope: x,
      itemType: w,
      kind: null,
      label: null,
      lang: null,
      language: null,
      list: null,
      loading: null,
      loop: x,
      low: C,
      manifest: null,
      max: null,
      maxLength: C,
      media: null,
      method: null,
      min: null,
      minLength: C,
      multiple: x,
      muted: x,
      name: null,
      nonce: null,
      noModule: x,
      noValidate: x,
      onAbort: null,
      onAfterPrint: null,
      onAuxClick: null,
      onBeforeMatch: null,
      onBeforePrint: null,
      onBeforeToggle: null,
      onBeforeUnload: null,
      onBlur: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onContextLost: null,
      onContextMenu: null,
      onContextRestored: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFormData: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLanguageChange: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadEnd: null,
      onLoadStart: null,
      onMessage: null,
      onMessageError: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRejectionHandled: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onScrollEnd: null,
      onSecurityPolicyViolation: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onSlotChange: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnhandledRejection: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onWheel: null,
      open: x,
      optimum: C,
      pattern: null,
      ping: w,
      placeholder: null,
      playsInline: x,
      popover: null,
      popoverTarget: null,
      popoverTargetAction: null,
      poster: null,
      preload: null,
      readOnly: x,
      referrerPolicy: null,
      rel: w,
      required: x,
      reversed: x,
      rows: C,
      rowSpan: C,
      sandbox: w,
      scope: null,
      scoped: x,
      seamless: x,
      selected: x,
      shadowRootClonable: x,
      shadowRootDelegatesFocus: x,
      shadowRootMode: null,
      shape: null,
      size: C,
      sizes: null,
      slot: null,
      span: C,
      spellCheck: S,
      src: null,
      srcDoc: null,
      srcLang: null,
      srcSet: null,
      start: C,
      step: null,
      style: null,
      tabIndex: C,
      target: null,
      title: null,
      translate: null,
      type: null,
      typeMustMatch: x,
      useMap: null,
      value: S,
      width: C,
      wrap: null,
      writingSuggestions: null,
      align: null,
      aLink: null,
      archive: w,
      axis: null,
      background: null,
      bgColor: null,
      border: C,
      borderColor: null,
      bottomMargin: C,
      cellPadding: null,
      cellSpacing: null,
      char: null,
      charOff: null,
      classId: null,
      clear: null,
      code: null,
      codeBase: null,
      codeType: null,
      color: null,
      compact: x,
      declare: x,
      event: null,
      face: null,
      frame: null,
      frameBorder: null,
      hSpace: C,
      leftMargin: C,
      link: null,
      longDesc: null,
      lowSrc: null,
      marginHeight: C,
      marginWidth: C,
      noResize: x,
      noHref: x,
      noShade: x,
      noWrap: x,
      object: null,
      profile: null,
      prompt: null,
      rev: null,
      rightMargin: C,
      rules: null,
      scheme: null,
      scrolling: S,
      standby: null,
      summary: null,
      text: null,
      topMargin: C,
      valueType: null,
      version: null,
      vAlign: null,
      vLink: null,
      vSpace: C,
      allowTransparency: null,
      autoCorrect: null,
      autoSave: null,
      disablePictureInPicture: x,
      disableRemotePlayback: x,
      prefix: null,
      property: null,
      results: C,
      security: null,
      unselectable: null
    },
    space: `html`,
    transform: jt
  }), Nt = O({
    attributes: {
      accentHeight: `accent-height`,
      alignmentBaseline: `alignment-baseline`,
      arabicForm: `arabic-form`,
      baselineShift: `baseline-shift`,
      capHeight: `cap-height`,
      className: `class`,
      clipPath: `clip-path`,
      clipRule: `clip-rule`,
      colorInterpolation: `color-interpolation`,
      colorInterpolationFilters: `color-interpolation-filters`,
      colorProfile: `color-profile`,
      colorRendering: `color-rendering`,
      crossOrigin: `crossorigin`,
      dataType: `datatype`,
      dominantBaseline: `dominant-baseline`,
      enableBackground: `enable-background`,
      fillOpacity: `fill-opacity`,
      fillRule: `fill-rule`,
      floodColor: `flood-color`,
      floodOpacity: `flood-opacity`,
      fontFamily: `font-family`,
      fontSize: `font-size`,
      fontSizeAdjust: `font-size-adjust`,
      fontStretch: `font-stretch`,
      fontStyle: `font-style`,
      fontVariant: `font-variant`,
      fontWeight: `font-weight`,
      glyphName: `glyph-name`,
      glyphOrientationHorizontal: `glyph-orientation-horizontal`,
      glyphOrientationVertical: `glyph-orientation-vertical`,
      hrefLang: `hreflang`,
      horizAdvX: `horiz-adv-x`,
      horizOriginX: `horiz-origin-x`,
      horizOriginY: `horiz-origin-y`,
      imageRendering: `image-rendering`,
      letterSpacing: `letter-spacing`,
      lightingColor: `lighting-color`,
      markerEnd: `marker-end`,
      markerMid: `marker-mid`,
      markerStart: `marker-start`,
      navDown: `nav-down`,
      navDownLeft: `nav-down-left`,
      navDownRight: `nav-down-right`,
      navLeft: `nav-left`,
      navNext: `nav-next`,
      navPrev: `nav-prev`,
      navRight: `nav-right`,
      navUp: `nav-up`,
      navUpLeft: `nav-up-left`,
      navUpRight: `nav-up-right`,
      onAbort: `onabort`,
      onActivate: `onactivate`,
      onAfterPrint: `onafterprint`,
      onBeforePrint: `onbeforeprint`,
      onBegin: `onbegin`,
      onCancel: `oncancel`,
      onCanPlay: `oncanplay`,
      onCanPlayThrough: `oncanplaythrough`,
      onChange: `onchange`,
      onClick: `onclick`,
      onClose: `onclose`,
      onCopy: `oncopy`,
      onCueChange: `oncuechange`,
      onCut: `oncut`,
      onDblClick: `ondblclick`,
      onDrag: `ondrag`,
      onDragEnd: `ondragend`,
      onDragEnter: `ondragenter`,
      onDragExit: `ondragexit`,
      onDragLeave: `ondragleave`,
      onDragOver: `ondragover`,
      onDragStart: `ondragstart`,
      onDrop: `ondrop`,
      onDurationChange: `ondurationchange`,
      onEmptied: `onemptied`,
      onEnd: `onend`,
      onEnded: `onended`,
      onError: `onerror`,
      onFocus: `onfocus`,
      onFocusIn: `onfocusin`,
      onFocusOut: `onfocusout`,
      onHashChange: `onhashchange`,
      onInput: `oninput`,
      onInvalid: `oninvalid`,
      onKeyDown: `onkeydown`,
      onKeyPress: `onkeypress`,
      onKeyUp: `onkeyup`,
      onLoad: `onload`,
      onLoadedData: `onloadeddata`,
      onLoadedMetadata: `onloadedmetadata`,
      onLoadStart: `onloadstart`,
      onMessage: `onmessage`,
      onMouseDown: `onmousedown`,
      onMouseEnter: `onmouseenter`,
      onMouseLeave: `onmouseleave`,
      onMouseMove: `onmousemove`,
      onMouseOut: `onmouseout`,
      onMouseOver: `onmouseover`,
      onMouseUp: `onmouseup`,
      onMouseWheel: `onmousewheel`,
      onOffline: `onoffline`,
      onOnline: `ononline`,
      onPageHide: `onpagehide`,
      onPageShow: `onpageshow`,
      onPaste: `onpaste`,
      onPause: `onpause`,
      onPlay: `onplay`,
      onPlaying: `onplaying`,
      onPopState: `onpopstate`,
      onProgress: `onprogress`,
      onRateChange: `onratechange`,
      onRepeat: `onrepeat`,
      onReset: `onreset`,
      onResize: `onresize`,
      onScroll: `onscroll`,
      onSeeked: `onseeked`,
      onSeeking: `onseeking`,
      onSelect: `onselect`,
      onShow: `onshow`,
      onStalled: `onstalled`,
      onStorage: `onstorage`,
      onSubmit: `onsubmit`,
      onSuspend: `onsuspend`,
      onTimeUpdate: `ontimeupdate`,
      onToggle: `ontoggle`,
      onUnload: `onunload`,
      onVolumeChange: `onvolumechange`,
      onWaiting: `onwaiting`,
      onZoom: `onzoom`,
      overlinePosition: `overline-position`,
      overlineThickness: `overline-thickness`,
      paintOrder: `paint-order`,
      panose1: `panose-1`,
      pointerEvents: `pointer-events`,
      referrerPolicy: `referrerpolicy`,
      renderingIntent: `rendering-intent`,
      shapeRendering: `shape-rendering`,
      stopColor: `stop-color`,
      stopOpacity: `stop-opacity`,
      strikethroughPosition: `strikethrough-position`,
      strikethroughThickness: `strikethrough-thickness`,
      strokeDashArray: `stroke-dasharray`,
      strokeDashOffset: `stroke-dashoffset`,
      strokeLineCap: `stroke-linecap`,
      strokeLineJoin: `stroke-linejoin`,
      strokeMiterLimit: `stroke-miterlimit`,
      strokeOpacity: `stroke-opacity`,
      strokeWidth: `stroke-width`,
      tabIndex: `tabindex`,
      textAnchor: `text-anchor`,
      textDecoration: `text-decoration`,
      textRendering: `text-rendering`,
      transformOrigin: `transform-origin`,
      typeOf: `typeof`,
      underlinePosition: `underline-position`,
      underlineThickness: `underline-thickness`,
      unicodeBidi: `unicode-bidi`,
      unicodeRange: `unicode-range`,
      unitsPerEm: `units-per-em`,
      vAlphabetic: `v-alphabetic`,
      vHanging: `v-hanging`,
      vIdeographic: `v-ideographic`,
      vMathematical: `v-mathematical`,
      vectorEffect: `vector-effect`,
      vertAdvY: `vert-adv-y`,
      vertOriginX: `vert-origin-x`,
      vertOriginY: `vert-origin-y`,
      wordSpacing: `word-spacing`,
      writingMode: `writing-mode`,
      xHeight: `x-height`,
      playbackOrder: `playbackorder`,
      timelineBegin: `timelinebegin`
    },
    properties: {
      about: E,
      accentHeight: C,
      accumulate: null,
      additive: null,
      alignmentBaseline: null,
      alphabetic: C,
      amplitude: C,
      arabicForm: null,
      ascent: C,
      attributeName: null,
      attributeType: null,
      azimuth: C,
      bandwidth: null,
      baselineShift: null,
      baseFrequency: null,
      baseProfile: null,
      bbox: null,
      begin: null,
      bias: C,
      by: null,
      calcMode: null,
      capHeight: C,
      className: w,
      clip: null,
      clipPath: null,
      clipPathUnits: null,
      clipRule: null,
      color: null,
      colorInterpolation: null,
      colorInterpolationFilters: null,
      colorProfile: null,
      colorRendering: null,
      content: null,
      contentScriptType: null,
      contentStyleType: null,
      crossOrigin: null,
      cursor: null,
      cx: null,
      cy: null,
      d: null,
      dataType: null,
      defaultAction: null,
      descent: C,
      diffuseConstant: C,
      direction: null,
      display: null,
      dur: null,
      divisor: C,
      dominantBaseline: null,
      download: x,
      dx: null,
      dy: null,
      edgeMode: null,
      editable: null,
      elevation: C,
      enableBackground: null,
      end: null,
      event: null,
      exponent: C,
      externalResourcesRequired: null,
      fill: null,
      fillOpacity: C,
      fillRule: null,
      filter: null,
      filterRes: null,
      filterUnits: null,
      floodColor: null,
      floodOpacity: null,
      focusable: null,
      focusHighlight: null,
      fontFamily: null,
      fontSize: null,
      fontSizeAdjust: null,
      fontStretch: null,
      fontStyle: null,
      fontVariant: null,
      fontWeight: null,
      format: null,
      fr: null,
      from: null,
      fx: null,
      fy: null,
      g1: T,
      g2: T,
      glyphName: T,
      glyphOrientationHorizontal: null,
      glyphOrientationVertical: null,
      glyphRef: null,
      gradientTransform: null,
      gradientUnits: null,
      handler: null,
      hanging: C,
      hatchContentUnits: null,
      hatchUnits: null,
      height: null,
      href: null,
      hrefLang: null,
      horizAdvX: C,
      horizOriginX: C,
      horizOriginY: C,
      id: null,
      ideographic: C,
      imageRendering: null,
      initialVisibility: null,
      in: null,
      in2: null,
      intercept: C,
      k: C,
      k1: C,
      k2: C,
      k3: C,
      k4: C,
      kernelMatrix: E,
      kernelUnitLength: null,
      keyPoints: null,
      keySplines: null,
      keyTimes: null,
      kerning: null,
      lang: null,
      lengthAdjust: null,
      letterSpacing: null,
      lightingColor: null,
      limitingConeAngle: C,
      local: null,
      markerEnd: null,
      markerMid: null,
      markerStart: null,
      markerHeight: null,
      markerUnits: null,
      markerWidth: null,
      mask: null,
      maskContentUnits: null,
      maskUnits: null,
      mathematical: null,
      max: null,
      media: null,
      mediaCharacterEncoding: null,
      mediaContentEncodings: null,
      mediaSize: C,
      mediaTime: null,
      method: null,
      min: null,
      mode: null,
      name: null,
      navDown: null,
      navDownLeft: null,
      navDownRight: null,
      navLeft: null,
      navNext: null,
      navPrev: null,
      navRight: null,
      navUp: null,
      navUpLeft: null,
      navUpRight: null,
      numOctaves: null,
      observer: null,
      offset: null,
      onAbort: null,
      onActivate: null,
      onAfterPrint: null,
      onBeforePrint: null,
      onBegin: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnd: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFocusIn: null,
      onFocusOut: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadStart: null,
      onMessage: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onMouseWheel: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRepeat: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onShow: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onZoom: null,
      opacity: null,
      operator: null,
      order: null,
      orient: null,
      orientation: null,
      origin: null,
      overflow: null,
      overlay: null,
      overlinePosition: C,
      overlineThickness: C,
      paintOrder: null,
      panose1: null,
      path: null,
      pathLength: C,
      patternContentUnits: null,
      patternTransform: null,
      patternUnits: null,
      phase: null,
      ping: w,
      pitch: null,
      playbackOrder: null,
      pointerEvents: null,
      points: null,
      pointsAtX: C,
      pointsAtY: C,
      pointsAtZ: C,
      preserveAlpha: null,
      preserveAspectRatio: null,
      primitiveUnits: null,
      propagate: null,
      property: E,
      r: null,
      radius: null,
      referrerPolicy: null,
      refX: null,
      refY: null,
      rel: E,
      rev: E,
      renderingIntent: null,
      repeatCount: null,
      repeatDur: null,
      requiredExtensions: E,
      requiredFeatures: E,
      requiredFonts: E,
      requiredFormats: E,
      resource: null,
      restart: null,
      result: null,
      rotate: null,
      rx: null,
      ry: null,
      scale: null,
      seed: null,
      shapeRendering: null,
      side: null,
      slope: null,
      snapshotTime: null,
      specularConstant: C,
      specularExponent: C,
      spreadMethod: null,
      spacing: null,
      startOffset: null,
      stdDeviation: null,
      stemh: null,
      stemv: null,
      stitchTiles: null,
      stopColor: null,
      stopOpacity: null,
      strikethroughPosition: C,
      strikethroughThickness: C,
      string: null,
      stroke: null,
      strokeDashArray: E,
      strokeDashOffset: null,
      strokeLineCap: null,
      strokeLineJoin: null,
      strokeMiterLimit: C,
      strokeOpacity: C,
      strokeWidth: null,
      style: null,
      surfaceScale: C,
      syncBehavior: null,
      syncBehaviorDefault: null,
      syncMaster: null,
      syncTolerance: null,
      syncToleranceDefault: null,
      systemLanguage: E,
      tabIndex: C,
      tableValues: null,
      target: null,
      targetX: C,
      targetY: C,
      textAnchor: null,
      textDecoration: null,
      textRendering: null,
      textLength: null,
      timelineBegin: null,
      title: null,
      transformBehavior: null,
      type: null,
      typeOf: E,
      to: null,
      transform: null,
      transformOrigin: null,
      u1: null,
      u2: null,
      underlinePosition: C,
      underlineThickness: C,
      unicode: null,
      unicodeBidi: null,
      unicodeRange: null,
      unitsPerEm: C,
      values: null,
      vAlphabetic: C,
      vMathematical: C,
      vectorEffect: null,
      vHanging: C,
      vIdeographic: C,
      version: null,
      vertAdvY: C,
      vertOriginX: C,
      vertOriginY: C,
      viewBox: null,
      viewTarget: null,
      visibility: null,
      width: null,
      widths: null,
      wordSpacing: null,
      writingMode: null,
      x: null,
      x1: null,
      x2: null,
      xChannelSelector: null,
      xHeight: C,
      y: null,
      y1: null,
      y2: null,
      yChannelSelector: null,
      z: null,
      zoomAndPan: null
    },
    space: `svg`,
    transform: At
  }), Pt = O({
    properties: {
      xLinkActuate: null,
      xLinkArcRole: null,
      xLinkHref: null,
      xLinkRole: null,
      xLinkShow: null,
      xLinkTitle: null,
      xLinkType: null
    },
    space: `xlink`,
    transform(e2, t2) {
      return `xlink:` + t2.slice(5).toLowerCase();
    }
  }), Ft = O({
    attributes: {
      xmlnsxlink: `xmlns:xlink`
    },
    properties: {
      xmlnsXLink: null,
      xmlns: null
    },
    space: `xmlns`,
    transform: jt
  }), It = O({
    properties: {
      xmlBase: null,
      xmlLang: null,
      xmlSpace: null
    },
    space: `xml`,
    transform(e2, t2) {
      return `xml:` + t2.slice(3).toLowerCase();
    }
  });
  var Lt = /[A-Z]/g, Rt = /-[a-z]/g, zt = /^data[-\w.:]+$/i;
  function Bt(e2, t2) {
    let n2 = St(t2), r2 = t2, i2 = b;
    if (n2 in e2.normal) return e2.property[e2.normal[n2]];
    if (n2.length > 4 && n2.slice(0, 4) === `data` && zt.test(t2)) {
      if (t2.charAt(4) === `-`) {
        let e3 = t2.slice(5).replace(Rt, Ht);
        r2 = `data` + e3.charAt(0).toUpperCase() + e3.slice(1);
      } else {
        let e3 = t2.slice(4);
        if (!Rt.test(e3)) {
          let n3 = e3.replace(Lt, Vt);
          n3.charAt(0) !== `-` && (n3 = `-` + n3), t2 = `data` + n3;
        }
      }
      i2 = Dt;
    }
    return new i2(r2, t2);
  }
  function Vt(e2) {
    return `-` + e2.toLowerCase();
  }
  function Ht(e2) {
    return e2.charAt(1).toUpperCase();
  }
  const Ut = xt([
    kt,
    Mt,
    Pt,
    Ft,
    It
  ], `html`), Wt = xt([
    kt,
    Nt,
    Pt,
    Ft,
    It
  ], `svg`);
  var Gt = {}.hasOwnProperty;
  function Kt(e2, t2) {
    let n2 = t2 || {};
    function r2(t3, ...n3) {
      let i2 = r2.invalid, a2 = r2.handlers;
      if (t3 && Gt.call(t3, e2)) {
        let n4 = String(t3[e2]);
        i2 = Gt.call(a2, n4) ? a2[n4] : r2.unknown;
      }
      if (i2) return i2.call(this, t3, ...n3);
    }
    return r2.handlers = n2.handlers || {}, r2.invalid = n2.invalid, r2.unknown = n2.unknown, r2;
  }
  var qt = /["&'<>`]/g, Jt = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, Yt = /[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g, Xt = /[|\\{}()[\]^$+*?.]/g, Zt = /* @__PURE__ */ new WeakMap();
  function Qt(e2, t2) {
    if (e2 = e2.replace(t2.subset ? $t(t2.subset) : qt, r2), t2.subset || t2.escapeOnly) return e2;
    return e2.replace(Jt, n2).replace(Yt, r2);
    function n2(e3, n3, r3) {
      return t2.format((e3.charCodeAt(0) - 55296) * 1024 + e3.charCodeAt(1) - 56320 + 65536, r3.charCodeAt(n3 + 2), t2);
    }
    function r2(e3, n3, r3) {
      return t2.format(e3.charCodeAt(0), r3.charCodeAt(n3 + 1), t2);
    }
  }
  function $t(e2) {
    let t2 = Zt.get(e2);
    return t2 || (t2 = en(e2), Zt.set(e2, t2)), t2;
  }
  function en(e2) {
    let t2 = [], n2 = -1;
    for (; ++n2 < e2.length; ) t2.push(e2[n2].replace(Xt, `\\$&`));
    return RegExp(`(?:` + t2.join(`|`) + `)`, `g`);
  }
  var tn = /[\dA-Fa-f]/;
  function nn(e2, t2, n2) {
    let r2 = `&#x` + e2.toString(16).toUpperCase();
    return n2 && t2 && !tn.test(String.fromCharCode(t2)) ? r2 : r2 + `;`;
  }
  var rn = /\d/;
  function an(e2, t2, n2) {
    let r2 = `&#` + String(e2);
    return n2 && t2 && !rn.test(String.fromCharCode(t2)) ? r2 : r2 + `;`;
  }
  const on = `AElig.AMP.Aacute.Acirc.Agrave.Aring.Atilde.Auml.COPY.Ccedil.ETH.Eacute.Ecirc.Egrave.Euml.GT.Iacute.Icirc.Igrave.Iuml.LT.Ntilde.Oacute.Ocirc.Ograve.Oslash.Otilde.Ouml.QUOT.REG.THORN.Uacute.Ucirc.Ugrave.Uuml.Yacute.aacute.acirc.acute.aelig.agrave.amp.aring.atilde.auml.brvbar.ccedil.cedil.cent.copy.curren.deg.divide.eacute.ecirc.egrave.eth.euml.frac12.frac14.frac34.gt.iacute.icirc.iexcl.igrave.iquest.iuml.laquo.lt.macr.micro.middot.nbsp.not.ntilde.oacute.ocirc.ograve.ordf.ordm.oslash.otilde.ouml.para.plusmn.pound.quot.raquo.reg.sect.shy.sup1.sup2.sup3.szlig.thorn.times.uacute.ucirc.ugrave.uml.uuml.yacute.yen.yuml`.split(`.`), sn = {
    nbsp: `\xA0`,
    iexcl: `\xA1`,
    cent: `\xA2`,
    pound: `\xA3`,
    curren: `\xA4`,
    yen: `\xA5`,
    brvbar: `\xA6`,
    sect: `\xA7`,
    uml: `\xA8`,
    copy: `\xA9`,
    ordf: `\xAA`,
    laquo: `\xAB`,
    not: `\xAC`,
    shy: `\xAD`,
    reg: `\xAE`,
    macr: `\xAF`,
    deg: `\xB0`,
    plusmn: `\xB1`,
    sup2: `\xB2`,
    sup3: `\xB3`,
    acute: `\xB4`,
    micro: `\xB5`,
    para: `\xB6`,
    middot: `\xB7`,
    cedil: `\xB8`,
    sup1: `\xB9`,
    ordm: `\xBA`,
    raquo: `\xBB`,
    frac14: `\xBC`,
    frac12: `\xBD`,
    frac34: `\xBE`,
    iquest: `\xBF`,
    Agrave: `\xC0`,
    Aacute: `\xC1`,
    Acirc: `\xC2`,
    Atilde: `\xC3`,
    Auml: `\xC4`,
    Aring: `\xC5`,
    AElig: `\xC6`,
    Ccedil: `\xC7`,
    Egrave: `\xC8`,
    Eacute: `\xC9`,
    Ecirc: `\xCA`,
    Euml: `\xCB`,
    Igrave: `\xCC`,
    Iacute: `\xCD`,
    Icirc: `\xCE`,
    Iuml: `\xCF`,
    ETH: `\xD0`,
    Ntilde: `\xD1`,
    Ograve: `\xD2`,
    Oacute: `\xD3`,
    Ocirc: `\xD4`,
    Otilde: `\xD5`,
    Ouml: `\xD6`,
    times: `\xD7`,
    Oslash: `\xD8`,
    Ugrave: `\xD9`,
    Uacute: `\xDA`,
    Ucirc: `\xDB`,
    Uuml: `\xDC`,
    Yacute: `\xDD`,
    THORN: `\xDE`,
    szlig: `\xDF`,
    agrave: `\xE0`,
    aacute: `\xE1`,
    acirc: `\xE2`,
    atilde: `\xE3`,
    auml: `\xE4`,
    aring: `\xE5`,
    aelig: `\xE6`,
    ccedil: `\xE7`,
    egrave: `\xE8`,
    eacute: `\xE9`,
    ecirc: `\xEA`,
    euml: `\xEB`,
    igrave: `\xEC`,
    iacute: `\xED`,
    icirc: `\xEE`,
    iuml: `\xEF`,
    eth: `\xF0`,
    ntilde: `\xF1`,
    ograve: `\xF2`,
    oacute: `\xF3`,
    ocirc: `\xF4`,
    otilde: `\xF5`,
    ouml: `\xF6`,
    divide: `\xF7`,
    oslash: `\xF8`,
    ugrave: `\xF9`,
    uacute: `\xFA`,
    ucirc: `\xFB`,
    uuml: `\xFC`,
    yacute: `\xFD`,
    thorn: `\xFE`,
    yuml: `\xFF`,
    fnof: `\u0192`,
    Alpha: `\u0391`,
    Beta: `\u0392`,
    Gamma: `\u0393`,
    Delta: `\u0394`,
    Epsilon: `\u0395`,
    Zeta: `\u0396`,
    Eta: `\u0397`,
    Theta: `\u0398`,
    Iota: `\u0399`,
    Kappa: `\u039A`,
    Lambda: `\u039B`,
    Mu: `\u039C`,
    Nu: `\u039D`,
    Xi: `\u039E`,
    Omicron: `\u039F`,
    Pi: `\u03A0`,
    Rho: `\u03A1`,
    Sigma: `\u03A3`,
    Tau: `\u03A4`,
    Upsilon: `\u03A5`,
    Phi: `\u03A6`,
    Chi: `\u03A7`,
    Psi: `\u03A8`,
    Omega: `\u03A9`,
    alpha: `\u03B1`,
    beta: `\u03B2`,
    gamma: `\u03B3`,
    delta: `\u03B4`,
    epsilon: `\u03B5`,
    zeta: `\u03B6`,
    eta: `\u03B7`,
    theta: `\u03B8`,
    iota: `\u03B9`,
    kappa: `\u03BA`,
    lambda: `\u03BB`,
    mu: `\u03BC`,
    nu: `\u03BD`,
    xi: `\u03BE`,
    omicron: `\u03BF`,
    pi: `\u03C0`,
    rho: `\u03C1`,
    sigmaf: `\u03C2`,
    sigma: `\u03C3`,
    tau: `\u03C4`,
    upsilon: `\u03C5`,
    phi: `\u03C6`,
    chi: `\u03C7`,
    psi: `\u03C8`,
    omega: `\u03C9`,
    thetasym: `\u03D1`,
    upsih: `\u03D2`,
    piv: `\u03D6`,
    bull: `\u2022`,
    hellip: `\u2026`,
    prime: `\u2032`,
    Prime: `\u2033`,
    oline: `\u203E`,
    frasl: `\u2044`,
    weierp: `\u2118`,
    image: `\u2111`,
    real: `\u211C`,
    trade: `\u2122`,
    alefsym: `\u2135`,
    larr: `\u2190`,
    uarr: `\u2191`,
    rarr: `\u2192`,
    darr: `\u2193`,
    harr: `\u2194`,
    crarr: `\u21B5`,
    lArr: `\u21D0`,
    uArr: `\u21D1`,
    rArr: `\u21D2`,
    dArr: `\u21D3`,
    hArr: `\u21D4`,
    forall: `\u2200`,
    part: `\u2202`,
    exist: `\u2203`,
    empty: `\u2205`,
    nabla: `\u2207`,
    isin: `\u2208`,
    notin: `\u2209`,
    ni: `\u220B`,
    prod: `\u220F`,
    sum: `\u2211`,
    minus: `\u2212`,
    lowast: `\u2217`,
    radic: `\u221A`,
    prop: `\u221D`,
    infin: `\u221E`,
    ang: `\u2220`,
    and: `\u2227`,
    or: `\u2228`,
    cap: `\u2229`,
    cup: `\u222A`,
    int: `\u222B`,
    there4: `\u2234`,
    sim: `\u223C`,
    cong: `\u2245`,
    asymp: `\u2248`,
    ne: `\u2260`,
    equiv: `\u2261`,
    le: `\u2264`,
    ge: `\u2265`,
    sub: `\u2282`,
    sup: `\u2283`,
    nsub: `\u2284`,
    sube: `\u2286`,
    supe: `\u2287`,
    oplus: `\u2295`,
    otimes: `\u2297`,
    perp: `\u22A5`,
    sdot: `\u22C5`,
    lceil: `\u2308`,
    rceil: `\u2309`,
    lfloor: `\u230A`,
    rfloor: `\u230B`,
    lang: `\u2329`,
    rang: `\u232A`,
    loz: `\u25CA`,
    spades: `\u2660`,
    clubs: `\u2663`,
    hearts: `\u2665`,
    diams: `\u2666`,
    quot: `"`,
    amp: `&`,
    lt: `<`,
    gt: `>`,
    OElig: `\u0152`,
    oelig: `\u0153`,
    Scaron: `\u0160`,
    scaron: `\u0161`,
    Yuml: `\u0178`,
    circ: `\u02C6`,
    tilde: `\u02DC`,
    ensp: `\u2002`,
    emsp: `\u2003`,
    thinsp: `\u2009`,
    zwnj: `\u200C`,
    zwj: `\u200D`,
    lrm: `\u200E`,
    rlm: `\u200F`,
    ndash: `\u2013`,
    mdash: `\u2014`,
    lsquo: `\u2018`,
    rsquo: `\u2019`,
    sbquo: `\u201A`,
    ldquo: `\u201C`,
    rdquo: `\u201D`,
    bdquo: `\u201E`,
    dagger: `\u2020`,
    Dagger: `\u2021`,
    permil: `\u2030`,
    lsaquo: `\u2039`,
    rsaquo: `\u203A`,
    euro: `\u20AC`
  }, cn = [
    `cent`,
    `copy`,
    `divide`,
    `gt`,
    `lt`,
    `not`,
    `para`,
    `times`
  ];
  var ln = {}.hasOwnProperty, un = {}, dn;
  for (dn in sn) ln.call(sn, dn) && (un[sn[dn]] = dn);
  var fn = /[^\dA-Za-z]/;
  function pn(e2, t2, n2, r2) {
    let i2 = String.fromCharCode(e2);
    if (ln.call(un, i2)) {
      let e3 = un[i2], a2 = `&` + e3;
      return n2 && on.includes(e3) && !cn.includes(e3) && (!r2 || t2 && t2 !== 61 && fn.test(String.fromCharCode(t2))) ? a2 : a2 + `;`;
    }
    return ``;
  }
  function mn(e2, t2, n2) {
    let r2 = nn(e2, t2, n2.omitOptionalSemicolons), i2;
    if ((n2.useNamedReferences || n2.useShortestReferences) && (i2 = pn(e2, t2, n2.omitOptionalSemicolons, n2.attribute)), (n2.useShortestReferences || !i2) && n2.useShortestReferences) {
      let i3 = an(e2, t2, n2.omitOptionalSemicolons);
      i3.length < r2.length && (r2 = i3);
    }
    return i2 && (!n2.useShortestReferences || i2.length < r2.length) ? i2 : r2;
  }
  function k(e2, t2) {
    return Qt(e2, Object.assign({
      format: mn
    }, t2));
  }
  var hn = /^>|^->|<!--|-->|--!>|<!-$/g, gn = [
    `>`
  ], _n = [
    `<`,
    `>`
  ];
  function vn(e2, t2, n2, r2) {
    return r2.settings.bogusComments ? `<?` + k(e2.value, Object.assign({}, r2.settings.characterReferences, {
      subset: gn
    })) + `>` : `<!--` + e2.value.replace(hn, i2) + `-->`;
    function i2(e3) {
      return k(e3, Object.assign({}, r2.settings.characterReferences, {
        subset: _n
      }));
    }
  }
  function yn(e2, t2, n2, r2) {
    return `<!` + (r2.settings.upperDoctype ? `DOCTYPE` : `doctype`) + (r2.settings.tightDoctype ? `` : ` `) + `html>`;
  }
  function bn(e2, t2) {
    let n2 = String(e2);
    if (typeof t2 != `string`) throw TypeError(`Expected character`);
    let r2 = 0, i2 = n2.indexOf(t2);
    for (; i2 !== -1; ) r2++, i2 = n2.indexOf(t2, i2 + t2.length);
    return r2;
  }
  function xn(e2, t2) {
    let n2 = t2 || {};
    return (e2[e2.length - 1] === `` ? [
      ...e2,
      ``
    ] : e2).join((n2.padRight ? ` ` : ``) + `,` + (n2.padLeft === false ? `` : ` `)).trim();
  }
  function Sn(e2) {
    return e2.join(` `).trim();
  }
  var Cn = /[ \t\n\f\r]/g;
  function wn(e2) {
    return typeof e2 == `object` ? e2.type === `text` ? Tn(e2.value) : false : Tn(e2);
  }
  function Tn(e2) {
    return e2.replace(Cn, ``) === ``;
  }
  const A = On(1), En = On(-1);
  var Dn = [];
  function On(e2) {
    return t2;
    function t2(t3, n2, r2) {
      let i2 = t3 ? t3.children : Dn, a2 = (n2 || 0) + e2, o2 = i2[a2];
      if (!r2) for (; o2 && wn(o2); ) a2 += e2, o2 = i2[a2];
      return o2;
    }
  }
  var kn = {}.hasOwnProperty;
  function An(e2) {
    return t2;
    function t2(t3, n2, r2) {
      return kn.call(e2, t3.tagName) && e2[t3.tagName](t3, n2, r2);
    }
  }
  const jn = An({
    body: Pn,
    caption: Mn,
    colgroup: Mn,
    dd: Rn,
    dt: Ln,
    head: Mn,
    html: Nn,
    li: In,
    optgroup: Bn,
    option: Vn,
    p: Fn,
    rp: zn,
    rt: zn,
    tbody: Un,
    td: Kn,
    tfoot: Wn,
    th: Kn,
    thead: Hn,
    tr: Gn
  });
  function Mn(e2, t2, n2) {
    let r2 = A(n2, t2, true);
    return !r2 || r2.type !== `comment` && !(r2.type === `text` && wn(r2.value.charAt(0)));
  }
  function Nn(e2, t2, n2) {
    let r2 = A(n2, t2);
    return !r2 || r2.type !== `comment`;
  }
  function Pn(e2, t2, n2) {
    let r2 = A(n2, t2);
    return !r2 || r2.type !== `comment`;
  }
  function Fn(e2, t2, n2) {
    let r2 = A(n2, t2);
    return r2 ? r2.type === `element` && (r2.tagName === `address` || r2.tagName === `article` || r2.tagName === `aside` || r2.tagName === `blockquote` || r2.tagName === `details` || r2.tagName === `div` || r2.tagName === `dl` || r2.tagName === `fieldset` || r2.tagName === `figcaption` || r2.tagName === `figure` || r2.tagName === `footer` || r2.tagName === `form` || r2.tagName === `h1` || r2.tagName === `h2` || r2.tagName === `h3` || r2.tagName === `h4` || r2.tagName === `h5` || r2.tagName === `h6` || r2.tagName === `header` || r2.tagName === `hgroup` || r2.tagName === `hr` || r2.tagName === `main` || r2.tagName === `menu` || r2.tagName === `nav` || r2.tagName === `ol` || r2.tagName === `p` || r2.tagName === `pre` || r2.tagName === `section` || r2.tagName === `table` || r2.tagName === `ul`) : !n2 || !(n2.type === `element` && (n2.tagName === `a` || n2.tagName === `audio` || n2.tagName === `del` || n2.tagName === `ins` || n2.tagName === `map` || n2.tagName === `noscript` || n2.tagName === `video`));
  }
  function In(e2, t2, n2) {
    let r2 = A(n2, t2);
    return !r2 || r2.type === `element` && r2.tagName === `li`;
  }
  function Ln(e2, t2, n2) {
    let r2 = A(n2, t2);
    return !!(r2 && r2.type === `element` && (r2.tagName === `dt` || r2.tagName === `dd`));
  }
  function Rn(e2, t2, n2) {
    let r2 = A(n2, t2);
    return !r2 || r2.type === `element` && (r2.tagName === `dt` || r2.tagName === `dd`);
  }
  function zn(e2, t2, n2) {
    let r2 = A(n2, t2);
    return !r2 || r2.type === `element` && (r2.tagName === `rp` || r2.tagName === `rt`);
  }
  function Bn(e2, t2, n2) {
    let r2 = A(n2, t2);
    return !r2 || r2.type === `element` && r2.tagName === `optgroup`;
  }
  function Vn(e2, t2, n2) {
    let r2 = A(n2, t2);
    return !r2 || r2.type === `element` && (r2.tagName === `option` || r2.tagName === `optgroup`);
  }
  function Hn(e2, t2, n2) {
    let r2 = A(n2, t2);
    return !!(r2 && r2.type === `element` && (r2.tagName === `tbody` || r2.tagName === `tfoot`));
  }
  function Un(e2, t2, n2) {
    let r2 = A(n2, t2);
    return !r2 || r2.type === `element` && (r2.tagName === `tbody` || r2.tagName === `tfoot`);
  }
  function Wn(e2, t2, n2) {
    return !A(n2, t2);
  }
  function Gn(e2, t2, n2) {
    let r2 = A(n2, t2);
    return !r2 || r2.type === `element` && r2.tagName === `tr`;
  }
  function Kn(e2, t2, n2) {
    let r2 = A(n2, t2);
    return !r2 || r2.type === `element` && (r2.tagName === `td` || r2.tagName === `th`);
  }
  const qn = An({
    body: Xn,
    colgroup: Zn,
    head: Yn,
    html: Jn,
    tbody: Qn
  });
  function Jn(e2) {
    let t2 = A(e2, -1);
    return !t2 || t2.type !== `comment`;
  }
  function Yn(e2) {
    let t2 = /* @__PURE__ */ new Set();
    for (let n3 of e2.children) if (n3.type === `element` && (n3.tagName === `base` || n3.tagName === `title`)) {
      if (t2.has(n3.tagName)) return false;
      t2.add(n3.tagName);
    }
    let n2 = e2.children[0];
    return !n2 || n2.type === `element`;
  }
  function Xn(e2) {
    let t2 = A(e2, -1, true);
    return !t2 || t2.type !== `comment` && !(t2.type === `text` && wn(t2.value.charAt(0))) && !(t2.type === `element` && (t2.tagName === `meta` || t2.tagName === `link` || t2.tagName === `script` || t2.tagName === `style` || t2.tagName === `template`));
  }
  function Zn(e2, t2, n2) {
    let r2 = En(n2, t2), i2 = A(e2, -1, true);
    return n2 && r2 && r2.type === `element` && r2.tagName === `colgroup` && jn(r2, n2.children.indexOf(r2), n2) ? false : !!(i2 && i2.type === `element` && i2.tagName === `col`);
  }
  function Qn(e2, t2, n2) {
    let r2 = En(n2, t2), i2 = A(e2, -1);
    return n2 && r2 && r2.type === `element` && (r2.tagName === `thead` || r2.tagName === `tbody`) && jn(r2, n2.children.indexOf(r2), n2) ? false : !!(i2 && i2.type === `element` && i2.tagName === `tr`);
  }
  var $n = {
    name: [
      [
        `	
\f\r &/=>`.split(``),
        `	
\f\r "&'/=>\``.split(``)
      ],
      [
        `\0	
\f\r "&'/<=>`.split(``),
        `\0	
\f\r "&'/<=>\``.split(``)
      ]
    ],
    unquoted: [
      [
        `	
\f\r &>`.split(``),
        `\0	
\f\r "&'<=>\``.split(``)
      ],
      [
        `\0	
\f\r "&'<=>\``.split(``),
        `\0	
\f\r "&'<=>\``.split(``)
      ]
    ],
    single: [
      [
        `&'`.split(``),
        `"&'\``.split(``)
      ],
      [
        `\0&'`.split(``),
        `\0"&'\``.split(``)
      ]
    ],
    double: [
      [
        `"&`.split(``),
        `"&'\``.split(``)
      ],
      [
        `\0"&`.split(``),
        `\0"&'\``.split(``)
      ]
    ]
  };
  function er(e2, t2, n2, r2) {
    let i2 = r2.schema, a2 = i2.space === `svg` ? false : r2.settings.omitOptionalTags, o2 = i2.space === `svg` ? r2.settings.closeEmptyElements : r2.settings.voids.includes(e2.tagName.toLowerCase()), s2 = [], c2;
    i2.space === `html` && e2.tagName === `svg` && (r2.schema = Wt);
    let l2 = tr(r2, e2.properties), u2 = r2.all(i2.space === `html` && e2.tagName === `template` ? e2.content : e2);
    return r2.schema = i2, u2 && (o2 = false), (l2 || !a2 || !qn(e2, t2, n2)) && (s2.push(`<`, e2.tagName, l2 ? ` ` + l2 : ``), o2 && (i2.space === `svg` || r2.settings.closeSelfClosing) && (c2 = l2.charAt(l2.length - 1), (!r2.settings.tightSelfClosing || c2 === `/` || c2 && c2 !== `"` && c2 !== `'`) && s2.push(` `), s2.push(`/`)), s2.push(`>`)), s2.push(u2), !o2 && (!a2 || !jn(e2, t2, n2)) && s2.push(`</` + e2.tagName + `>`), s2.join(``);
  }
  function tr(e2, t2) {
    let n2 = [], r2 = -1, i2;
    if (t2) {
      for (i2 in t2) if (t2[i2] !== null && t2[i2] !== void 0) {
        let r3 = nr(e2, i2, t2[i2]);
        r3 && n2.push(r3);
      }
    }
    for (; ++r2 < n2.length; ) {
      let t3 = e2.settings.tightAttributes ? n2[r2].charAt(n2[r2].length - 1) : void 0;
      r2 !== n2.length - 1 && t3 !== `"` && t3 !== `'` && (n2[r2] += ` `);
    }
    return n2.join(``);
  }
  function nr(e2, t2, n2) {
    let r2 = Bt(e2.schema, t2), i2 = e2.settings.allowParseErrors && e2.schema.space === `html` ? 0 : 1, a2 = e2.settings.allowDangerousCharacters ? 0 : 1, o2 = e2.quote, s2;
    if (r2.overloadedBoolean && (n2 === r2.attribute || n2 === ``) ? n2 = true : (r2.boolean || r2.overloadedBoolean) && (typeof n2 != `string` || n2 === r2.attribute || n2 === ``) && (n2 = !!n2), n2 == null || n2 === false || typeof n2 == `number` && Number.isNaN(n2)) return ``;
    let c2 = k(r2.attribute, Object.assign({}, e2.settings.characterReferences, {
      subset: $n.name[i2][a2]
    }));
    return n2 === true || (n2 = Array.isArray(n2) ? (r2.commaSeparated ? xn : Sn)(n2, {
      padLeft: !e2.settings.tightCommaSeparatedLists
    }) : String(n2), e2.settings.collapseEmptyAttributes && !n2) ? c2 : (e2.settings.preferUnquoted && (s2 = k(n2, Object.assign({}, e2.settings.characterReferences, {
      attribute: true,
      subset: $n.unquoted[i2][a2]
    }))), s2 !== n2 && (e2.settings.quoteSmart && bn(n2, o2) > bn(n2, e2.alternative) && (o2 = e2.alternative), s2 = o2 + k(n2, Object.assign({}, e2.settings.characterReferences, {
      subset: (o2 === `'` ? $n.single : $n.double)[i2][a2],
      attribute: true
    })) + o2), c2 + (s2 && `=` + s2));
  }
  var rr = [
    `<`,
    `&`
  ];
  function ir(e2, t2, n2, r2) {
    return n2 && n2.type === `element` && (n2.tagName === `script` || n2.tagName === `style`) ? e2.value : k(e2.value, Object.assign({}, r2.settings.characterReferences, {
      subset: rr
    }));
  }
  function ar(e2, t2, n2, r2) {
    return r2.settings.allowDangerousHtml ? e2.value : ir(e2, t2, n2, r2);
  }
  function or(e2, t2, n2, r2) {
    return r2.all(e2);
  }
  const sr = Kt(`type`, {
    invalid: cr,
    unknown: lr,
    handlers: {
      comment: vn,
      doctype: yn,
      element: er,
      raw: ar,
      root: or,
      text: ir
    }
  });
  function cr(e2) {
    throw Error("Expected node, not `" + e2 + "`");
  }
  function lr(e2) {
    let t2 = e2;
    throw Error("Cannot compile unknown node `" + t2.type + "`");
  }
  var ur = {}, dr = {}, fr = [];
  function pr(e2, t2) {
    let n2 = t2 || ur, r2 = n2.quote || `"`, i2 = r2 === `"` ? `'` : `"`;
    if (r2 !== `"` && r2 !== `'`) throw Error("Invalid quote `" + r2 + "`, expected `'` or `\"`");
    return {
      one: mr,
      all: hr,
      settings: {
        omitOptionalTags: n2.omitOptionalTags || false,
        allowParseErrors: n2.allowParseErrors || false,
        allowDangerousCharacters: n2.allowDangerousCharacters || false,
        quoteSmart: n2.quoteSmart || false,
        preferUnquoted: n2.preferUnquoted || false,
        tightAttributes: n2.tightAttributes || false,
        upperDoctype: n2.upperDoctype || false,
        tightDoctype: n2.tightDoctype || false,
        bogusComments: n2.bogusComments || false,
        tightCommaSeparatedLists: n2.tightCommaSeparatedLists || false,
        tightSelfClosing: n2.tightSelfClosing || false,
        collapseEmptyAttributes: n2.collapseEmptyAttributes || false,
        allowDangerousHtml: n2.allowDangerousHtml || false,
        voids: n2.voids || yt,
        characterReferences: n2.characterReferences || dr,
        closeSelfClosing: n2.closeSelfClosing || false,
        closeEmptyElements: n2.closeEmptyElements || false
      },
      schema: n2.space === `svg` ? Wt : Ut,
      quote: r2,
      alternative: i2
    }.one(Array.isArray(e2) ? {
      type: `root`,
      children: e2
    } : e2, void 0, void 0);
  }
  function mr(e2, t2, n2) {
    return sr(e2, t2, n2, this);
  }
  function hr(e2) {
    let t2 = [], n2 = e2 && e2.children || fr, r2 = -1;
    for (; ++r2 < n2.length; ) t2[r2] = this.one(n2[r2], r2, e2);
    return t2.join(``);
  }
  function gr(e2, t2) {
    let n2 = typeof e2 == `string` ? {} : {
      ...e2.colorReplacements
    }, r2 = typeof e2 == `string` ? e2 : e2.name;
    for (let [e3, i2] of Object.entries((t2 == null ? void 0 : t2.colorReplacements) || {})) typeof i2 == `string` ? n2[e3] = i2 : e3 === r2 && Object.assign(n2, i2);
    return n2;
  }
  function j(e2, t2) {
    return e2 && ((t2 == null ? void 0 : t2[e2 == null ? void 0 : e2.toLowerCase()]) || e2);
  }
  function _r(e2) {
    return Array.isArray(e2) ? e2 : [
      e2
    ];
  }
  async function vr(e2) {
    return Promise.resolve(typeof e2 == `function` ? e2() : e2).then((e3) => e3.default || e3);
  }
  function yr(e2) {
    return !e2 || [
      `plaintext`,
      `txt`,
      `text`,
      `plain`
    ].includes(e2);
  }
  function br(e2) {
    return e2 === `ansi` || yr(e2);
  }
  function xr(e2) {
    return e2 === `none`;
  }
  function Sr(e2) {
    return xr(e2);
  }
  function Cr(e2, t2) {
    var _a3;
    if (!t2) return e2;
    e2.properties || (e2.properties = {}), (_a3 = e2.properties).class || (_a3.class = []), typeof e2.properties.class == `string` && (e2.properties.class = e2.properties.class.split(/\s+/g)), Array.isArray(e2.properties.class) || (e2.properties.class = []);
    let n2 = Array.isArray(t2) ? t2 : t2.split(/\s+/g);
    for (let t3 of n2) t3 && !e2.properties.class.includes(t3) && e2.properties.class.push(t3);
    return e2;
  }
  function wr(e2, t2 = false) {
    var _a3;
    if (e2.length === 0) return [
      [
        ``,
        0
      ]
    ];
    let n2 = e2.split(/(\r?\n)/g), r2 = 0, i2 = [];
    for (let e3 = 0; e3 < n2.length; e3 += 2) {
      let a2 = t2 ? n2[e3] + (n2[e3 + 1] || ``) : n2[e3];
      i2.push([
        a2,
        r2
      ]), r2 += n2[e3].length, r2 += ((_a3 = n2[e3 + 1]) == null ? void 0 : _a3.length) || 0;
    }
    return i2;
  }
  function Tr(e2) {
    let t2 = wr(e2, true).map(([e3]) => e3);
    function n2(n3) {
      if (n3 === e2.length) return {
        line: t2.length - 1,
        character: t2[t2.length - 1].length
      };
      let r3 = n3, i2 = 0;
      for (let e3 of t2) {
        if (r3 < e3.length) break;
        r3 -= e3.length, i2++;
      }
      return {
        line: i2,
        character: r3
      };
    }
    function r2(e3, n3) {
      let r3 = 0;
      for (let n4 = 0; n4 < e3; n4++) r3 += t2[n4].length;
      return r3 += n3, r3;
    }
    return {
      lines: t2,
      indexToPos: n2,
      posToIndex: r2
    };
  }
  var Er = `light-dark()`, Dr = [
    `color`,
    `background-color`
  ];
  function Or(e2, t2) {
    let n2 = 0, r2 = [];
    for (let i2 of t2) i2 > n2 && r2.push({
      ...e2,
      content: e2.content.slice(n2, i2),
      offset: e2.offset + n2
    }), n2 = i2;
    return n2 < e2.content.length && r2.push({
      ...e2,
      content: e2.content.slice(n2),
      offset: e2.offset + n2
    }), r2;
  }
  function kr(e2, t2) {
    let n2 = Array.from(t2 instanceof Set ? t2 : new Set(t2)).sort((e3, t3) => e3 - t3);
    return n2.length ? e2.map((e3) => e3.flatMap((e4) => {
      let t3 = n2.filter((t4) => e4.offset < t4 && t4 < e4.offset + e4.content.length).map((t4) => t4 - e4.offset).sort((e5, t4) => e5 - t4);
      return t3.length ? Or(e4, t3) : e4;
    })) : e2;
  }
  function Ar(e2, n2, r2, i2, a2 = `css-vars`) {
    let o2 = {
      content: e2.content,
      explanation: e2.explanation,
      offset: e2.offset
    }, s2 = n2.map((t2) => jr(e2.variants[t2])), c2 = new Set(s2.flatMap((e3) => Object.keys(e3))), l2 = {}, u2 = (e3, t2) => {
      let i3 = t2 === `color` ? `` : t2 === `background-color` ? `-bg` : `-${t2}`;
      return r2 + n2[e3] + (t2 === `color` ? `` : i3);
    };
    return s2.forEach((e3, r3) => {
      for (let o3 of c2) {
        let c3 = e3[o3] || `inherit`;
        if (r3 === 0 && i2 && Dr.includes(o3)) if (i2 === Er && s2.length > 1) {
          let e4 = n2.findIndex((e5) => e5 === `light`), i3 = n2.findIndex((e5) => e5 === `dark`);
          if (e4 === -1 || i3 === -1) throw new t('When using `defaultColor: "light-dark()"`, you must provide both `light` and `dark` themes');
          l2[o3] = `light-dark(${s2[e4][o3] || `inherit`}, ${s2[i3][o3] || `inherit`})`, a2 === `css-vars` && (l2[u2(r3, o3)] = c3);
        } else l2[o3] = c3;
        else a2 === `css-vars` && (l2[u2(r3, o3)] = c3);
      }
    }), o2.htmlStyle = l2, o2;
  }
  function jr(e2) {
    let t2 = {};
    if (e2.color && (t2.color = e2.color), e2.bgColor && (t2[`background-color`] = e2.bgColor), e2.fontStyle) {
      e2.fontStyle & v.Italic && (t2[`font-style`] = `italic`), e2.fontStyle & v.Bold && (t2[`font-weight`] = `bold`);
      let n2 = [];
      e2.fontStyle & v.Underline && n2.push(`underline`), e2.fontStyle & v.Strikethrough && n2.push(`line-through`), n2.length && (t2[`text-decoration`] = n2.join(` `));
    }
    return t2;
  }
  function Mr(e2) {
    return typeof e2 == `string` ? e2 : Object.entries(e2).map(([e3, t2]) => `${e3}:${t2}`).join(`;`);
  }
  var Nr = /* @__PURE__ */ new WeakMap();
  function Pr(e2, t2) {
    Nr.set(e2, t2);
  }
  function Fr(e2) {
    return Nr.get(e2);
  }
  var Ir = class e2 {
    constructor(...e3) {
      __publicField(this, "_stacks", {});
      __publicField(this, "lang");
      if (e3.length === 2) {
        let [t2, n2] = e3;
        this.lang = n2, this._stacks = t2;
      } else {
        let [t2, n2, r2] = e3;
        this.lang = n2, this._stacks = {
          [r2]: t2
        };
      }
    }
    get themes() {
      return Object.keys(this._stacks);
    }
    get theme() {
      return this.themes[0];
    }
    get _stack() {
      return this._stacks[this.theme];
    }
    static initial(t2, n2) {
      return new e2(Object.fromEntries(_r(n2).map((e3) => [
        e3,
        vt
      ])), t2);
    }
    getInternalStack(e3 = this.theme) {
      return this._stacks[e3];
    }
    getScopes(e3 = this.theme) {
      return Lr(this._stacks[e3]);
    }
    toJSON() {
      return {
        lang: this.lang,
        theme: this.theme,
        themes: this.themes,
        scopes: this.getScopes()
      };
    }
  };
  function Lr(e2) {
    let t2 = [], n2 = /* @__PURE__ */ new Set();
    function r2(e3) {
      var _a3;
      if (n2.has(e3)) return;
      n2.add(e3);
      let i2 = (_a3 = e3 == null ? void 0 : e3.nameScopesList) == null ? void 0 : _a3.scopeName;
      i2 && t2.push(i2), e3.parent && r2(e3.parent);
    }
    return r2(e2), t2;
  }
  function Rr(e2, n2) {
    if (!(e2 instanceof Ir)) throw new t(`Invalid grammar state`);
    return e2.getInternalStack(n2);
  }
  function zr() {
    let e2 = /* @__PURE__ */ new WeakMap();
    function n2(n3) {
      if (!e2.has(n3.meta)) {
        let r2 = function(e3) {
          if (typeof e3 == `number`) {
            if (e3 < 0 || e3 > n3.source.length) throw new t(`Invalid decoration offset: ${e3}. Code length: ${n3.source.length}`);
            return {
              ...i2.indexToPos(e3),
              offset: e3
            };
          } else {
            let n4 = i2.lines[e3.line];
            if (n4 === void 0) throw new t(`Invalid decoration position ${JSON.stringify(e3)}. Lines length: ${i2.lines.length}`);
            let r3 = e3.character;
            if (r3 < 0 && (r3 = n4.length + r3), r3 < 0 || r3 > n4.length) throw new t(`Invalid decoration position ${JSON.stringify(e3)}. Line ${e3.line} length: ${n4.length}`);
            return {
              ...e3,
              character: r3,
              offset: i2.posToIndex(e3.line, r3)
            };
          }
        }, i2 = Tr(n3.source), a2 = (n3.options.decorations || []).map((e3) => ({
          ...e3,
          start: r2(e3.start),
          end: r2(e3.end)
        }));
        Br(a2), e2.set(n3.meta, {
          decorations: a2,
          converter: i2,
          source: n3.source
        });
      }
      return e2.get(n3.meta);
    }
    return {
      name: `shiki:decorations`,
      tokens(e3) {
        var _a3;
        if ((_a3 = this.options.decorations) == null ? void 0 : _a3.length) return kr(e3, n2(this).decorations.flatMap((e4) => [
          e4.start.offset,
          e4.end.offset
        ]));
      },
      code(e3) {
        var _a3;
        if (!((_a3 = this.options.decorations) == null ? void 0 : _a3.length)) return;
        let r2 = n2(this), i2 = Array.from(e3.children).filter((e4) => e4.type === `element` && e4.tagName === `span`);
        if (i2.length !== r2.converter.lines.length) throw new t(`Number of lines in code element (${i2.length}) does not match the number of lines in the source (${r2.converter.lines.length}). Failed to apply decorations.`);
        function a2(e4, n3, r3, a3) {
          let o3 = i2[e4], c3 = ``, l3 = -1, u2 = -1;
          if (n3 === 0 && (l3 = 0), r3 === 0 && (u2 = 0), r3 === 1 / 0 && (u2 = o3.children.length), l3 === -1 || u2 === -1) for (let e5 = 0; e5 < o3.children.length; e5++) c3 += Vr(o3.children[e5]), l3 === -1 && c3.length === n3 && (l3 = e5 + 1), u2 === -1 && c3.length === r3 && (u2 = e5 + 1);
          if (l3 === -1) throw new t(`Failed to find start index for decoration ${JSON.stringify(a3.start)}`);
          if (u2 === -1) throw new t(`Failed to find end index for decoration ${JSON.stringify(a3.end)}`);
          let d2 = o3.children.slice(l3, u2);
          if (!a3.alwaysWrap && d2.length === o3.children.length) s2(o3, a3, `line`);
          else if (!a3.alwaysWrap && d2.length === 1 && d2[0].type === `element`) s2(d2[0], a3, `token`);
          else {
            let e5 = {
              type: `element`,
              tagName: `span`,
              properties: {},
              children: d2
            };
            s2(e5, a3, `wrapper`), o3.children.splice(l3, d2.length, e5);
          }
        }
        function o2(e4, t2) {
          i2[e4] = s2(i2[e4], t2, `line`);
        }
        function s2(e4, t2, n3) {
          var _a4;
          let r3 = t2.properties || {}, i3 = t2.transform || ((e5) => e5);
          return e4.tagName = t2.tagName || `span`, e4.properties = {
            ...e4.properties,
            ...r3,
            class: e4.properties.class
          }, ((_a4 = t2.properties) == null ? void 0 : _a4.class) && Cr(e4, t2.properties.class), e4 = i3(e4, n3) || e4, e4;
        }
        let c2 = [], l2 = r2.decorations.sort((e4, t2) => t2.start.offset - e4.start.offset || e4.end.offset - t2.end.offset);
        for (let e4 of l2) {
          let { start: t2, end: n3 } = e4;
          if (t2.line === n3.line) a2(t2.line, t2.character, n3.character, e4);
          else if (t2.line < n3.line) {
            a2(t2.line, t2.character, 1 / 0, e4);
            for (let r3 = t2.line + 1; r3 < n3.line; r3++) c2.unshift(() => o2(r3, e4));
            a2(n3.line, 0, n3.character, e4);
          }
        }
        c2.forEach((e4) => e4());
      }
    };
  }
  function Br(e2) {
    for (let n2 = 0; n2 < e2.length; n2++) {
      let r2 = e2[n2];
      if (r2.start.offset > r2.end.offset) throw new t(`Invalid decoration range: ${JSON.stringify(r2.start)} - ${JSON.stringify(r2.end)}`);
      for (let i2 = n2 + 1; i2 < e2.length; i2++) {
        let n3 = e2[i2], a2 = r2.start.offset <= n3.start.offset && n3.start.offset < r2.end.offset, o2 = r2.start.offset < n3.end.offset && n3.end.offset <= r2.end.offset, s2 = n3.start.offset <= r2.start.offset && r2.start.offset < n3.end.offset, c2 = n3.start.offset < r2.end.offset && r2.end.offset <= n3.end.offset;
        if (a2 || o2 || s2 || c2) {
          if (a2 && o2 || s2 && c2 || s2 && r2.start.offset === r2.end.offset || o2 && n3.start.offset === n3.end.offset) continue;
          throw new t(`Decorations ${JSON.stringify(r2.start)} and ${JSON.stringify(n3.start)} intersect.`);
        }
      }
    }
  }
  function Vr(e2) {
    return e2.type === `text` ? e2.value : e2.type === `element` ? e2.children.map(Vr).join(``) : ``;
  }
  var Hr = [
    zr()
  ];
  function Ur(e2) {
    let t2 = Wr(e2.transformers || []);
    return [
      ...t2.pre,
      ...t2.normal,
      ...t2.post,
      ...Hr
    ];
  }
  function Wr(e2) {
    let t2 = [], n2 = [], r2 = [];
    for (let i2 of e2) switch (i2.enforce) {
      case `pre`:
        t2.push(i2);
        break;
      case `post`:
        n2.push(i2);
        break;
      default:
        r2.push(i2);
    }
    return {
      pre: t2,
      post: n2,
      normal: r2
    };
  }
  var M = [
    `black`,
    `red`,
    `green`,
    `yellow`,
    `blue`,
    `magenta`,
    `cyan`,
    `white`,
    `brightBlack`,
    `brightRed`,
    `brightGreen`,
    `brightYellow`,
    `brightBlue`,
    `brightMagenta`,
    `brightCyan`,
    `brightWhite`
  ], Gr = {
    1: `bold`,
    2: `dim`,
    3: `italic`,
    4: `underline`,
    7: `reverse`,
    8: `hidden`,
    9: `strikethrough`
  };
  function Kr(e2, t2) {
    let n2 = e2.indexOf(`\x1B`, t2);
    if (n2 !== -1 && e2[n2 + 1] === `[`) {
      let t3 = e2.indexOf(`m`, n2);
      if (t3 !== -1) return {
        sequence: e2.substring(n2 + 2, t3).split(`;`),
        startPosition: n2,
        position: t3 + 1
      };
    }
    return {
      position: e2.length
    };
  }
  function qr(e2) {
    let t2 = e2.shift();
    if (t2 === `2`) {
      let t3 = e2.splice(0, 3).map((e3) => Number.parseInt(e3));
      return t3.length !== 3 || t3.some((e3) => Number.isNaN(e3)) ? void 0 : {
        type: `rgb`,
        rgb: t3
      };
    } else if (t2 === `5`) {
      let t3 = e2.shift();
      if (t3) return {
        type: `table`,
        index: Number(t3)
      };
    }
  }
  function Jr(e2) {
    let t2 = [];
    for (; e2.length > 0; ) {
      let n2 = e2.shift();
      if (!n2) continue;
      let r2 = Number.parseInt(n2);
      if (!Number.isNaN(r2)) if (r2 === 0) t2.push({
        type: `resetAll`
      });
      else if (r2 <= 9) Gr[r2] && t2.push({
        type: `setDecoration`,
        value: Gr[r2]
      });
      else if (r2 <= 29) {
        let e3 = Gr[r2 - 20];
        e3 && (t2.push({
          type: `resetDecoration`,
          value: e3
        }), e3 === `dim` && t2.push({
          type: `resetDecoration`,
          value: `bold`
        }));
      } else if (r2 <= 37) t2.push({
        type: `setForegroundColor`,
        value: {
          type: `named`,
          name: M[r2 - 30]
        }
      });
      else if (r2 === 38) {
        let n3 = qr(e2);
        n3 && t2.push({
          type: `setForegroundColor`,
          value: n3
        });
      } else if (r2 === 39) t2.push({
        type: `resetForegroundColor`
      });
      else if (r2 <= 47) t2.push({
        type: `setBackgroundColor`,
        value: {
          type: `named`,
          name: M[r2 - 40]
        }
      });
      else if (r2 === 48) {
        let n3 = qr(e2);
        n3 && t2.push({
          type: `setBackgroundColor`,
          value: n3
        });
      } else r2 === 49 ? t2.push({
        type: `resetBackgroundColor`
      }) : r2 === 53 ? t2.push({
        type: `setDecoration`,
        value: `overline`
      }) : r2 === 55 ? t2.push({
        type: `resetDecoration`,
        value: `overline`
      }) : r2 >= 90 && r2 <= 97 ? t2.push({
        type: `setForegroundColor`,
        value: {
          type: `named`,
          name: M[r2 - 90 + 8]
        }
      }) : r2 >= 100 && r2 <= 107 && t2.push({
        type: `setBackgroundColor`,
        value: {
          type: `named`,
          name: M[r2 - 100 + 8]
        }
      });
    }
    return t2;
  }
  function Yr() {
    let e2 = null, t2 = null, n2 = /* @__PURE__ */ new Set();
    return {
      parse(r2) {
        let i2 = [], a2 = 0;
        do {
          let o2 = Kr(r2, a2), s2 = o2.sequence ? r2.substring(a2, o2.startPosition) : r2.substring(a2);
          if (s2.length > 0 && i2.push({
            value: s2,
            foreground: e2,
            background: t2,
            decorations: new Set(n2)
          }), o2.sequence) {
            let r3 = Jr(o2.sequence);
            for (let i3 of r3) i3.type === `resetAll` ? (e2 = null, t2 = null, n2.clear()) : i3.type === `resetForegroundColor` ? e2 = null : i3.type === `resetBackgroundColor` ? t2 = null : i3.type === `resetDecoration` && n2.delete(i3.value);
            for (let i3 of r3) i3.type === `setForegroundColor` ? e2 = i3.value : i3.type === `setBackgroundColor` ? t2 = i3.value : i3.type === `setDecoration` && n2.add(i3.value);
          }
          a2 = o2.position;
        } while (a2 < r2.length);
        return i2;
      }
    };
  }
  var Xr = {
    black: `#000000`,
    red: `#bb0000`,
    green: `#00bb00`,
    yellow: `#bbbb00`,
    blue: `#0000bb`,
    magenta: `#ff00ff`,
    cyan: `#00bbbb`,
    white: `#eeeeee`,
    brightBlack: `#555555`,
    brightRed: `#ff5555`,
    brightGreen: `#00ff00`,
    brightYellow: `#ffff55`,
    brightBlue: `#5555ff`,
    brightMagenta: `#ff55ff`,
    brightCyan: `#55ffff`,
    brightWhite: `#ffffff`
  };
  function Zr(e2 = Xr) {
    function t2(t3) {
      return e2[t3];
    }
    function n2(e3) {
      return `#${e3.map((e4) => Math.max(0, Math.min(e4, 255)).toString(16).padStart(2, `0`)).join(``)}`;
    }
    let r2;
    function i2() {
      if (r2) return r2;
      r2 = [];
      for (let e4 = 0; e4 < M.length; e4++) r2.push(t2(M[e4]));
      let e3 = [
        0,
        95,
        135,
        175,
        215,
        255
      ];
      for (let t3 = 0; t3 < 6; t3++) for (let i4 = 0; i4 < 6; i4++) for (let a3 = 0; a3 < 6; a3++) r2.push(n2([
        e3[t3],
        e3[i4],
        e3[a3]
      ]));
      let i3 = 8;
      for (let e4 = 0; e4 < 24; e4++, i3 += 10) r2.push(n2([
        i3,
        i3,
        i3
      ]));
      return r2;
    }
    function a2(e3) {
      return i2()[e3];
    }
    function o2(e3) {
      switch (e3.type) {
        case `named`:
          return t2(e3.name);
        case `rgb`:
          return n2(e3.rgb);
        case `table`:
          return a2(e3.index);
      }
    }
    return {
      value: o2
    };
  }
  var Qr = {
    black: `#000000`,
    red: `#cd3131`,
    green: `#0DBC79`,
    yellow: `#E5E510`,
    blue: `#2472C8`,
    magenta: `#BC3FBC`,
    cyan: `#11A8CD`,
    white: `#E5E5E5`,
    brightBlack: `#666666`,
    brightRed: `#F14C4C`,
    brightGreen: `#23D18B`,
    brightYellow: `#F5F543`,
    brightBlue: `#3B8EEA`,
    brightMagenta: `#D670D6`,
    brightCyan: `#29B8DB`,
    brightWhite: `#FFFFFF`
  };
  function $r(e2, t2, n2) {
    let r2 = gr(e2, n2), i2 = wr(t2), a2 = Zr(Object.fromEntries(M.map((t3) => {
      var _a3;
      let n3 = `terminal.ansi${t3[0].toUpperCase()}${t3.substring(1)}`;
      return [
        t3,
        ((_a3 = e2.colors) == null ? void 0 : _a3[n3]) || Qr[t3]
      ];
    }))), o2 = Yr();
    return i2.map((t3) => o2.parse(t3[0]).map((n3) => {
      let i3, o3;
      n3.decorations.has(`reverse`) ? (i3 = n3.background ? a2.value(n3.background) : e2.bg, o3 = n3.foreground ? a2.value(n3.foreground) : e2.fg) : (i3 = n3.foreground ? a2.value(n3.foreground) : e2.fg, o3 = n3.background ? a2.value(n3.background) : void 0), i3 = j(i3, r2), o3 = j(o3, r2), n3.decorations.has(`dim`) && (i3 = ei(i3));
      let s2 = v.None;
      return n3.decorations.has(`bold`) && (s2 |= v.Bold), n3.decorations.has(`italic`) && (s2 |= v.Italic), n3.decorations.has(`underline`) && (s2 |= v.Underline), n3.decorations.has(`strikethrough`) && (s2 |= v.Strikethrough), {
        content: n3.value,
        offset: t3[1],
        color: i3,
        bgColor: o3,
        fontStyle: s2
      };
    }));
  }
  function ei(e2) {
    let t2 = e2.match(/#([0-9a-f]{3,8})/i);
    if (t2) {
      let e3 = t2[1];
      if (e3.length === 8) {
        let t3 = Math.round(Number.parseInt(e3.slice(6, 8), 16) / 2).toString(16).padStart(2, `0`);
        return `#${e3.slice(0, 6)}${t3}`;
      } else if (e3.length === 6) return `#${e3}80`;
      else if (e3.length === 4) {
        let t3 = e3[0], n3 = e3[1], r2 = e3[2], i2 = e3[3];
        return `#${t3}${t3}${n3}${n3}${r2}${r2}${Math.round(Number.parseInt(`${i2}${i2}`, 16) / 2).toString(16).padStart(2, `0`)}`;
      } else if (e3.length === 3) {
        let t3 = e3[0], n3 = e3[1], r2 = e3[2];
        return `#${t3}${t3}${n3}${n3}${r2}${r2}80`;
      }
    }
    let n2 = e2.match(/var\((--[\w-]+-ansi-[\w-]+)\)/);
    return n2 ? `var(${n2[1]}-dim)` : e2;
  }
  function ti(e2, n2, r2 = {}) {
    let { theme: i2 = e2.getLoadedThemes()[0] } = r2, a2 = e2.resolveLangAlias(r2.lang || `text`);
    if (yr(a2) || xr(i2)) return wr(n2).map((e3) => [
      {
        content: e3[0],
        offset: e3[1]
      }
    ]);
    let { theme: o2, colorMap: s2 } = e2.setTheme(i2);
    if (a2 === `ansi`) return $r(o2, n2, r2);
    let c2 = e2.getLanguage(r2.lang || `text`);
    if (r2.grammarState) {
      if (r2.grammarState.lang !== c2.name) throw new t(`Grammar state language "${r2.grammarState.lang}" does not match highlight language "${c2.name}"`);
      if (!r2.grammarState.themes.includes(o2.name)) throw new t(`Grammar state themes "${r2.grammarState.themes}" do not contain highlight theme "${o2.name}"`);
    }
    return ri(n2, c2, o2, s2, r2);
  }
  function ni(...e2) {
    if (e2.length === 2) return Fr(e2[1]);
    let [n2, r2, i2 = {}] = e2, { lang: a2 = `text`, theme: o2 = n2.getLoadedThemes()[0] } = i2;
    if (yr(a2) || xr(o2)) throw new t(`Plain language does not have grammar state`);
    if (a2 === `ansi`) throw new t(`ANSI language does not have grammar state`);
    let { theme: s2, colorMap: c2 } = n2.setTheme(o2), l2 = n2.getLanguage(a2);
    return new Ir(ii(r2, l2, s2, c2, i2).stateStack, l2.name, s2.name);
  }
  function ri(e2, t2, n2, r2, i2) {
    let a2 = ii(e2, t2, n2, r2, i2), o2 = new Ir(a2.stateStack, t2.name, n2.name);
    return Pr(a2.tokens, o2), a2.tokens;
  }
  function ii(e2, t2, n2, r2, i2) {
    let a2 = gr(n2, i2), { tokenizeMaxLineLength: o2 = 0, tokenizeTimeLimit: s2 = 500 } = i2, c2 = wr(e2), l2 = i2.grammarState ? Rr(i2.grammarState, n2.name) ?? vt : i2.grammarContextCode == null ? vt : ii(i2.grammarContextCode, t2, n2, r2, {
      ...i2,
      grammarState: void 0,
      grammarContextCode: void 0
    }).stateStack, u2 = [], d2 = [];
    for (let e3 = 0, f2 = c2.length; e3 < f2; e3++) {
      let [f3, p2] = c2[e3];
      if (f3 === ``) {
        u2 = [], d2.push([]);
        continue;
      }
      if (o2 > 0 && f3.length >= o2) {
        u2 = [], d2.push([
          {
            content: f3,
            offset: p2,
            color: ``,
            fontStyle: 0
          }
        ]);
        continue;
      }
      let m2, h2, g2;
      i2.includeExplanation && (m2 = t2.tokenizeLine(f3, l2, s2), h2 = m2.tokens, g2 = 0);
      let _2 = t2.tokenizeLine2(f3, l2, s2), ee2 = _2.tokens.length / 2;
      for (let e4 = 0; e4 < ee2; e4++) {
        let t3 = _2.tokens[2 * e4], o3 = e4 + 1 < ee2 ? _2.tokens[2 * e4 + 2] : f3.length;
        if (t3 === o3) continue;
        let s3 = _2.tokens[2 * e4 + 1], c3 = j(r2[y.getForeground(s3)], a2), l3 = y.getFontStyle(s3), d3 = {
          content: f3.substring(t3, o3),
          offset: p2 + t3,
          color: c3,
          fontStyle: l3
        };
        if (i2.includeExplanation) {
          let e5 = [];
          if (i2.includeExplanation !== `scopeName`) for (let t4 of n2.settings) {
            let n3;
            switch (typeof t4.scope) {
              case `string`:
                n3 = t4.scope.split(/,/).map((e6) => e6.trim());
                break;
              case `object`:
                n3 = t4.scope;
                break;
              default:
                continue;
            }
            e5.push({
              settings: t4,
              selectors: n3.map((e6) => e6.split(/ /))
            });
          }
          d3.explanation = [];
          let r3 = 0;
          for (; t3 + r3 < o3; ) {
            let t4 = h2[g2], n3 = f3.substring(t4.startIndex, t4.endIndex);
            r3 += n3.length, d3.explanation.push({
              content: n3,
              scopes: i2.includeExplanation === `scopeName` ? ai(t4.scopes) : oi(e5, t4.scopes)
            }), g2 += 1;
          }
        }
        u2.push(d3);
      }
      d2.push(u2), u2 = [], l2 = _2.ruleStack;
    }
    return {
      tokens: d2,
      stateStack: l2
    };
  }
  function ai(e2) {
    return e2.map((e3) => ({
      scopeName: e3
    }));
  }
  function oi(e2, t2) {
    let n2 = [];
    for (let r2 = 0, i2 = t2.length; r2 < i2; r2++) {
      let i3 = t2[r2];
      n2[r2] = {
        scopeName: i3,
        themeMatches: li(e2, i3, t2.slice(0, r2))
      };
    }
    return n2;
  }
  function si(e2, t2) {
    return e2 === t2 || t2.substring(0, e2.length) === e2 && t2[e2.length] === `.`;
  }
  function ci(e2, t2, n2) {
    if (!si(e2[e2.length - 1], t2)) return false;
    let r2 = e2.length - 2, i2 = n2.length - 1;
    for (; r2 >= 0 && i2 >= 0; ) si(e2[r2], n2[i2]) && --r2, --i2;
    return r2 === -1;
  }
  function li(e2, t2, n2) {
    let r2 = [];
    for (let { selectors: i2, settings: a2 } of e2) for (let e3 of i2) if (ci(e3, t2, n2)) {
      r2.push(a2);
      break;
    }
    return r2;
  }
  function ui(e2, t2, n2) {
    let r2 = Object.entries(n2.themes).filter((e3) => e3[1]).map((e3) => ({
      color: e3[0],
      theme: e3[1]
    })), i2 = r2.map((r3) => {
      let i3 = ti(e2, t2, {
        ...n2,
        theme: r3.theme
      });
      return {
        tokens: i3,
        state: Fr(i3),
        theme: typeof r3.theme == `string` ? r3.theme : r3.theme.name
      };
    }), a2 = di(...i2.map((e3) => e3.tokens)), o2 = a2[0].map((e3, t3) => e3.map((e4, i3) => {
      let o3 = {
        content: e4.content,
        variants: {},
        offset: e4.offset
      };
      return `includeExplanation` in n2 && n2.includeExplanation && (o3.explanation = e4.explanation), a2.forEach((e5, n3) => {
        let { content: a3, explanation: s3, offset: c2, ...l2 } = e5[t3][i3];
        o3.variants[r2[n3].color] = l2;
      }), o3;
    })), s2 = i2[0].state ? new Ir(Object.fromEntries(i2.map((e3) => {
      var _a3;
      return [
        e3.theme,
        (_a3 = e3.state) == null ? void 0 : _a3.getInternalStack(e3.theme)
      ];
    })), i2[0].state.lang) : void 0;
    return s2 && Pr(o2, s2), o2;
  }
  function di(...e2) {
    let t2 = e2.map(() => []), n2 = e2.length;
    for (let r2 = 0; r2 < e2[0].length; r2++) {
      let i2 = e2.map((e3) => e3[r2]), a2 = t2.map(() => []);
      t2.forEach((e3, t3) => e3.push(a2[t3]));
      let o2 = i2.map(() => 0), s2 = i2.map((e3) => e3[0]);
      for (; s2.every((e3) => e3); ) {
        let e3 = Math.min(...s2.map((e4) => e4.content.length));
        for (let t3 = 0; t3 < n2; t3++) {
          let n3 = s2[t3];
          n3.content.length === e3 ? (a2[t3].push(n3), o2[t3] += 1, s2[t3] = i2[t3][o2[t3]]) : (a2[t3].push({
            ...n3,
            content: n3.content.slice(0, e3)
          }), s2[t3] = {
            ...n3,
            content: n3.content.slice(e3),
            offset: n3.offset + e3
          });
        }
      }
    }
    return t2;
  }
  function fi(e2, n2, r2) {
    let i2, a2, o2, s2, c2, l2;
    if (`themes` in r2) {
      let { defaultColor: u2 = `light`, cssVariablePrefix: d2 = `--shiki-`, colorsRendering: f2 = `css-vars` } = r2, p2 = Object.entries(r2.themes).filter((e3) => e3[1]).map((e3) => ({
        color: e3[0],
        theme: e3[1]
      })).sort((e3, t2) => e3.color === u2 ? -1 : t2.color === u2 ? 1 : 0);
      if (p2.length === 0) throw new t("`themes` option must not be empty");
      let m2 = ui(e2, n2, r2);
      if (l2 = Fr(m2), u2 && Er !== u2 && !p2.find((e3) => e3.color === u2)) throw new t(`\`themes\` option must contain the defaultColor key \`${u2}\``);
      let h2 = p2.map((t2) => e2.getTheme(t2.theme)), g2 = p2.map((e3) => e3.color);
      o2 = m2.map((e3) => e3.map((e4) => Ar(e4, g2, d2, u2, f2))), l2 && Pr(o2, l2);
      let _2 = p2.map((e3) => gr(e3.theme, r2));
      a2 = pi(p2, h2, _2, d2, u2, `fg`, f2), i2 = pi(p2, h2, _2, d2, u2, `bg`, f2), s2 = `shiki-themes ${h2.map((e3) => e3.name).join(` `)}`, c2 = u2 ? void 0 : [
        a2,
        i2
      ].join(`;`);
    } else if (`theme` in r2) {
      let t2 = gr(r2.theme, r2);
      o2 = ti(e2, n2, r2);
      let c3 = e2.getTheme(r2.theme);
      i2 = j(c3.bg, t2), a2 = j(c3.fg, t2), s2 = c3.name, l2 = Fr(o2);
    } else throw new t("Invalid options, either `theme` or `themes` must be provided");
    return {
      tokens: o2,
      fg: a2,
      bg: i2,
      themeName: s2,
      rootStyle: c2,
      grammarState: l2
    };
  }
  function pi(e2, n2, r2, i2, a2, o2, s2) {
    return e2.map((c2, l2) => {
      let u2 = j(n2[l2][o2], r2[l2]) || `inherit`, d2 = `${i2 + c2.color}${o2 === `bg` ? `-bg` : ``}:${u2}`;
      if (l2 === 0 && a2) {
        if (a2 === Er && e2.length > 1) {
          let i3 = e2.findIndex((e3) => e3.color === `light`), a3 = e2.findIndex((e3) => e3.color === `dark`);
          if (i3 === -1 || a3 === -1) throw new t('When using `defaultColor: "light-dark()"`, you must provide both `light` and `dark` themes');
          return `light-dark(${j(n2[i3][o2], r2[i3]) || `inherit`}, ${j(n2[a3][o2], r2[a3]) || `inherit`});${d2}`;
        }
        return u2;
      }
      return s2 === `css-vars` ? d2 : null;
    }).filter((e3) => !!e3).join(`;`);
  }
  function mi(e2, t2, n2, r2 = {
    meta: {},
    options: n2,
    codeToHast: (t3, n3) => mi(e2, t3, n3),
    codeToTokens: (t3, n3) => fi(e2, t3, n3)
  }) {
    var _a3, _b2;
    let i2 = t2;
    for (let e3 of Ur(n2)) i2 = ((_a3 = e3.preprocess) == null ? void 0 : _a3.call(r2, i2, n2)) || i2;
    let { tokens: a2, fg: o2, bg: s2, themeName: c2, rootStyle: l2, grammarState: u2 } = fi(e2, i2, n2), { mergeWhitespaces: d2 = true, mergeSameStyleTokens: f2 = false } = n2;
    d2 === true ? a2 = gi(a2) : d2 === `never` && (a2 = _i(a2)), f2 && (a2 = vi(a2));
    let p2 = {
      ...r2,
      get source() {
        return i2;
      }
    };
    for (let e3 of Ur(n2)) a2 = ((_b2 = e3.tokens) == null ? void 0 : _b2.call(p2, a2)) || a2;
    return hi(a2, {
      ...n2,
      fg: o2,
      bg: s2,
      themeName: c2,
      rootStyle: n2.rootStyle === false ? false : n2.rootStyle ?? l2
    }, p2, u2);
  }
  function hi(e2, t2, n2, r2 = Fr(e2)) {
    var _a3, _b2, _c2, _d;
    let i2 = Ur(t2), a2 = [], o2 = {
      type: `root`,
      children: []
    }, { structure: s2 = `classic`, tabindex: c2 = `0` } = t2, l2 = {
      class: `shiki ${t2.themeName || ``}`
    };
    t2.rootStyle !== false && (t2.rootStyle == null ? l2.style = `background-color:${t2.bg};color:${t2.fg}` : l2.style = t2.rootStyle), c2 !== false && c2 != null && (l2.tabindex = c2.toString());
    for (let [e3, n3] of Object.entries(t2.meta || {})) e3.startsWith(`_`) || (l2[e3] = n3);
    let u2 = {
      type: `element`,
      tagName: `pre`,
      properties: l2,
      children: []
    }, d2 = {
      type: `element`,
      tagName: `code`,
      properties: {},
      children: a2
    }, f2 = [], p2 = {
      ...n2,
      structure: s2,
      addClassToHast: Cr,
      get source() {
        return n2.source;
      },
      get tokens() {
        return e2;
      },
      get options() {
        return t2;
      },
      get root() {
        return o2;
      },
      get pre() {
        return u2;
      },
      get code() {
        return d2;
      },
      get lines() {
        return f2;
      }
    };
    if (e2.forEach((e3, t3) => {
      var _a4, _b3;
      t3 && (s2 === `inline` ? o2.children.push({
        type: `element`,
        tagName: `br`,
        properties: {},
        children: []
      }) : s2 === `classic` && a2.push({
        type: `text`,
        value: `
`
      }));
      let n3 = {
        type: `element`,
        tagName: `span`,
        properties: {
          class: `line`
        },
        children: []
      }, r3 = 0;
      for (let a3 of e3) {
        let e4 = {
          type: `element`,
          tagName: `span`,
          properties: {
            ...a3.htmlAttrs
          },
          children: [
            {
              type: `text`,
              value: a3.content
            }
          ]
        }, c3 = Mr(a3.htmlStyle || jr(a3));
        c3 && (e4.properties.style = c3);
        for (let o3 of i2) e4 = ((_a4 = o3 == null ? void 0 : o3.span) == null ? void 0 : _a4.call(p2, e4, t3 + 1, r3, n3, a3)) || e4;
        s2 === `inline` ? o2.children.push(e4) : s2 === `classic` && n3.children.push(e4), r3 += a3.content.length;
      }
      if (s2 === `classic`) {
        for (let e4 of i2) n3 = ((_b3 = e4 == null ? void 0 : e4.line) == null ? void 0 : _b3.call(p2, n3, t3 + 1)) || n3;
        f2.push(n3), a2.push(n3);
      } else s2 === `inline` && f2.push(n3);
    }), s2 === `classic`) {
      for (let e3 of i2) d2 = ((_a3 = e3 == null ? void 0 : e3.code) == null ? void 0 : _a3.call(p2, d2)) || d2;
      u2.children.push(d2);
      for (let e3 of i2) u2 = ((_b2 = e3 == null ? void 0 : e3.pre) == null ? void 0 : _b2.call(p2, u2)) || u2;
      o2.children.push(u2);
    } else if (s2 === `inline`) {
      let e3 = [], t3 = {
        type: `element`,
        tagName: `span`,
        properties: {
          class: `line`
        },
        children: []
      };
      for (let n4 of o2.children) n4.type === `element` && n4.tagName === `br` ? (e3.push(t3), t3 = {
        type: `element`,
        tagName: `span`,
        properties: {
          class: `line`
        },
        children: []
      }) : (n4.type === `element` || n4.type === `text`) && t3.children.push(n4);
      e3.push(t3);
      let n3 = {
        type: `element`,
        tagName: `code`,
        properties: {},
        children: e3
      };
      for (let e4 of i2) n3 = ((_c2 = e4 == null ? void 0 : e4.code) == null ? void 0 : _c2.call(p2, n3)) || n3;
      o2.children = [];
      for (let e4 = 0; e4 < n3.children.length; e4++) {
        e4 > 0 && o2.children.push({
          type: `element`,
          tagName: `br`,
          properties: {},
          children: []
        });
        let t4 = n3.children[e4];
        t4.type === `element` && o2.children.push(...t4.children);
      }
    }
    let m2 = o2;
    for (let e3 of i2) m2 = ((_d = e3 == null ? void 0 : e3.root) == null ? void 0 : _d.call(p2, m2)) || m2;
    return r2 && Pr(m2, r2), m2;
  }
  function gi(e2) {
    return e2.map((e3) => {
      let t2 = [], n2 = ``, r2;
      return e3.forEach((i2, a2) => {
        let o2 = !(i2.fontStyle && (i2.fontStyle & v.Underline || i2.fontStyle & v.Strikethrough));
        o2 && i2.content.match(/^\s+$/) && e3[a2 + 1] ? (r2 === void 0 && (r2 = i2.offset), n2 += i2.content) : n2 ? (o2 ? t2.push({
          ...i2,
          offset: r2,
          content: n2 + i2.content
        }) : t2.push({
          content: n2,
          offset: r2
        }, i2), r2 = void 0, n2 = ``) : t2.push(i2);
      }), t2;
    });
  }
  function _i(e2) {
    return e2.map((e3) => e3.flatMap((e4) => {
      if (e4.content.match(/^\s+$/)) return e4;
      let t2 = e4.content.match(/^(\s*)(.*?)(\s*)$/);
      if (!t2) return e4;
      let [, n2, r2, i2] = t2;
      if (!n2 && !i2) return e4;
      let a2 = [
        {
          ...e4,
          offset: e4.offset + n2.length,
          content: r2
        }
      ];
      return n2 && a2.unshift({
        content: n2,
        offset: e4.offset
      }), i2 && a2.push({
        content: i2,
        offset: e4.offset + n2.length + r2.length
      }), a2;
    }));
  }
  function vi(e2) {
    return e2.map((e3) => {
      let t2 = [];
      for (let n2 of e3) {
        if (t2.length === 0) {
          t2.push({
            ...n2
          });
          continue;
        }
        let e4 = t2[t2.length - 1], r2 = Mr(e4.htmlStyle || jr(e4)), i2 = Mr(n2.htmlStyle || jr(n2)), a2 = e4.fontStyle && (e4.fontStyle & v.Underline || e4.fontStyle & v.Strikethrough), o2 = n2.fontStyle && (n2.fontStyle & v.Underline || n2.fontStyle & v.Strikethrough);
        !a2 && !o2 && r2 === i2 ? e4.content += n2.content : t2.push({
          ...n2
        });
      }
      return t2;
    });
  }
  var yi = pr;
  function bi(e2, t2, n2) {
    var _a3;
    let r2 = {
      meta: {},
      options: n2,
      codeToHast: (t3, n3) => mi(e2, t3, n3),
      codeToTokens: (t3, n3) => fi(e2, t3, n3)
    }, i2 = yi(mi(e2, t2, n2, r2));
    for (let e3 of Ur(n2)) i2 = ((_a3 = e3.postprocess) == null ? void 0 : _a3.call(r2, i2, n2)) || i2;
    return i2;
  }
  var xi = {
    light: `#333333`,
    dark: `#bbbbbb`
  }, Si = {
    light: `#fffffe`,
    dark: `#1e1e1e`
  }, Ci = `__shiki_resolved`;
  function wi(e2) {
    var _a3, _b2, _c2, _d, _e3;
    if (e2 == null ? void 0 : e2[Ci]) return e2;
    let t2 = {
      ...e2
    };
    t2.tokenColors && !t2.settings && (t2.settings = t2.tokenColors, delete t2.tokenColors), t2.type || (t2.type = `dark`), t2.colorReplacements = {
      ...t2.colorReplacements
    }, t2.settings || (t2.settings = []);
    let { bg: n2, fg: r2 } = t2;
    if (!n2 || !r2) {
      let e3 = t2.settings ? t2.settings.find((e4) => !e4.name && !e4.scope) : void 0;
      ((_a3 = e3 == null ? void 0 : e3.settings) == null ? void 0 : _a3.foreground) && (r2 = e3.settings.foreground), ((_b2 = e3 == null ? void 0 : e3.settings) == null ? void 0 : _b2.background) && (n2 = e3.settings.background), !r2 && ((_c2 = t2 == null ? void 0 : t2.colors) == null ? void 0 : _c2[`editor.foreground`]) && (r2 = t2.colors[`editor.foreground`]), !n2 && ((_d = t2 == null ? void 0 : t2.colors) == null ? void 0 : _d[`editor.background`]) && (n2 = t2.colors[`editor.background`]), r2 || (r2 = t2.type === `light` ? xi.light : xi.dark), n2 || (n2 = t2.type === `light` ? Si.light : Si.dark), t2.fg = r2, t2.bg = n2;
    }
    t2.settings[0] && t2.settings[0].settings && !t2.settings[0].scope || t2.settings.unshift({
      settings: {
        foreground: t2.fg,
        background: t2.bg
      }
    });
    let i2 = 0, a2 = /* @__PURE__ */ new Map();
    function o2(e3) {
      var _a4;
      if (a2.has(e3)) return a2.get(e3);
      i2 += 1;
      let n3 = `#${i2.toString(16).padStart(8, `0`).toLowerCase()}`;
      return ((_a4 = t2.colorReplacements) == null ? void 0 : _a4[`#${n3}`]) ? o2(e3) : (a2.set(e3, n3), n3);
    }
    t2.settings = t2.settings.map((e3) => {
      var _a4, _b3;
      let n3 = ((_a4 = e3.settings) == null ? void 0 : _a4.foreground) && !e3.settings.foreground.startsWith(`#`), r3 = ((_b3 = e3.settings) == null ? void 0 : _b3.background) && !e3.settings.background.startsWith(`#`);
      if (!n3 && !r3) return e3;
      let i3 = {
        ...e3,
        settings: {
          ...e3.settings
        }
      };
      if (n3) {
        let n4 = o2(e3.settings.foreground);
        t2.colorReplacements[n4] = e3.settings.foreground, i3.settings.foreground = n4;
      }
      if (r3) {
        let n4 = o2(e3.settings.background);
        t2.colorReplacements[n4] = e3.settings.background, i3.settings.background = n4;
      }
      return i3;
    });
    for (let e3 of Object.keys(t2.colors || {})) if ((e3 === `editor.foreground` || e3 === `editor.background` || e3.startsWith(`terminal.ansi`)) && !((_e3 = t2.colors[e3]) == null ? void 0 : _e3.startsWith(`#`))) {
      let n3 = o2(t2.colors[e3]);
      t2.colorReplacements[n3] = t2.colors[e3], t2.colors[e3] = n3;
    }
    return Object.defineProperty(t2, Ci, {
      enumerable: false,
      writable: false,
      value: true
    }), t2;
  }
  async function Ti(e2) {
    return Array.from(new Set((await Promise.all(e2.filter((e3) => !br(e3)).map(async (e3) => await vr(e3).then((e4) => Array.isArray(e4) ? e4 : [
      e4
    ])))).flat()));
  }
  async function Ei(e2) {
    return (await Promise.all(e2.map(async (e3) => Sr(e3) ? null : wi(await vr(e3))))).filter((e3) => !!e3);
  }
  var N = class extends Error {
    constructor(e2) {
      super(e2), this.name = `ShikiError`;
    }
  };
  function Di(e2, t2) {
    if (!t2) return e2;
    if (t2[e2]) {
      let n2 = /* @__PURE__ */ new Set([
        e2
      ]);
      for (; t2[e2]; ) {
        if (e2 = t2[e2], n2.has(e2)) throw new N(`Circular alias \`${Array.from(n2).join(` -> `)} -> ${e2}\``);
        n2.add(e2);
      }
    }
    return e2;
  }
  var Oi = class extends _t {
    constructor(e2, t2, n2, r2 = {}) {
      super(e2);
      __publicField(this, "_resolvedThemes", /* @__PURE__ */ new Map());
      __publicField(this, "_resolvedGrammars", /* @__PURE__ */ new Map());
      __publicField(this, "_langMap", /* @__PURE__ */ new Map());
      __publicField(this, "_langGraph", /* @__PURE__ */ new Map());
      __publicField(this, "_textmateThemeCache", /* @__PURE__ */ new WeakMap());
      __publicField(this, "_loadedThemesCache", null);
      __publicField(this, "_loadedLanguagesCache", null);
      this._resolver = e2, this._themes = t2, this._langs = n2, this._alias = r2, this._themes.map((e3) => this.loadTheme(e3)), this.loadLanguages(this._langs);
    }
    getTheme(e2) {
      return typeof e2 == `string` ? this._resolvedThemes.get(e2) : this.loadTheme(e2);
    }
    loadTheme(e2) {
      let t2 = wi(e2);
      return t2.name && (this._resolvedThemes.set(t2.name, t2), this._loadedThemesCache = null), t2;
    }
    getLoadedThemes() {
      return this._loadedThemesCache || (this._loadedThemesCache = [
        ...this._resolvedThemes.keys()
      ]), this._loadedThemesCache;
    }
    setTheme(e2) {
      let t2 = this._textmateThemeCache.get(e2);
      t2 || (t2 = h.createFromRawTheme(e2), this._textmateThemeCache.set(e2, t2)), this._syncRegistry.setTheme(t2);
    }
    getGrammar(e2) {
      return e2 = Di(e2, this._alias), this._resolvedGrammars.get(e2);
    }
    loadLanguage(e2) {
      var _a3, _b2, _c2, _d;
      if (this.getGrammar(e2.name)) return;
      let t2 = new Set([
        ...this._langMap.values()
      ].filter((t3) => {
        var _a4;
        return (_a4 = t3.embeddedLangsLazy) == null ? void 0 : _a4.includes(e2.name);
      }));
      this._resolver.addLanguage(e2);
      let n2 = {
        balancedBracketSelectors: e2.balancedBracketSelectors || [
          `*`
        ],
        unbalancedBracketSelectors: e2.unbalancedBracketSelectors || []
      };
      this._syncRegistry._rawGrammars.set(e2.scopeName, e2);
      let r2 = this.loadGrammarWithConfiguration(e2.scopeName, 1, n2);
      if (r2.name = e2.name, this._resolvedGrammars.set(e2.name, r2), e2.aliases && e2.aliases.forEach((t3) => {
        this._alias[t3] = e2.name;
      }), this._loadedLanguagesCache = null, t2.size) for (let e3 of t2) this._resolvedGrammars.delete(e3.name), this._loadedLanguagesCache = null, (_b2 = (_a3 = this._syncRegistry) == null ? void 0 : _a3._injectionGrammars) == null ? void 0 : _b2.delete(e3.scopeName), (_d = (_c2 = this._syncRegistry) == null ? void 0 : _c2._grammars) == null ? void 0 : _d.delete(e3.scopeName), this.loadLanguage(this._langMap.get(e3.name));
    }
    dispose() {
      super.dispose(), this._resolvedThemes.clear(), this._resolvedGrammars.clear(), this._langMap.clear(), this._langGraph.clear(), this._loadedThemesCache = null;
    }
    loadLanguages(e2) {
      for (let t3 of e2) this.resolveEmbeddedLanguages(t3);
      let t2 = Array.from(this._langGraph.entries()), n2 = t2.filter(([e3, t3]) => !t3);
      if (n2.length) {
        let e3 = t2.filter(([e4, t3]) => {
          var _a3;
          return t3 ? (_a3 = t3.embeddedLanguages || t3.embeddedLangs) == null ? void 0 : _a3.some((e5) => n2.map(([e6]) => e6).includes(e5)) : false;
        }).filter((e4) => !n2.includes(e4));
        throw new N(`Missing languages ${n2.map(([e4]) => `\`${e4}\``).join(`, `)}, required by ${e3.map(([e4]) => `\`${e4}\``).join(`, `)}`);
      }
      for (let [e3, n3] of t2) this._resolver.addLanguage(n3);
      for (let [e3, n3] of t2) this.loadLanguage(n3);
    }
    getLoadedLanguages() {
      return this._loadedLanguagesCache || (this._loadedLanguagesCache = [
        .../* @__PURE__ */ new Set([
          ...this._resolvedGrammars.keys(),
          ...Object.keys(this._alias)
        ])
      ]), this._loadedLanguagesCache;
    }
    resolveEmbeddedLanguages(e2) {
      this._langMap.set(e2.name, e2), this._langGraph.set(e2.name, e2);
      let t2 = e2.embeddedLanguages ?? e2.embeddedLangs;
      if (t2) for (let e3 of t2) this._langGraph.set(e3, this._langMap.get(e3));
    }
  }, ki = class {
    constructor(e2, t2) {
      __publicField(this, "_langs", /* @__PURE__ */ new Map());
      __publicField(this, "_scopeToLang", /* @__PURE__ */ new Map());
      __publicField(this, "_injections", /* @__PURE__ */ new Map());
      __publicField(this, "_onigLib");
      this._onigLib = {
        createOnigScanner: (t3) => e2.createScanner(t3),
        createOnigString: (t3) => e2.createString(t3)
      }, t2.forEach((e3) => this.addLanguage(e3));
    }
    get onigLib() {
      return this._onigLib;
    }
    getLangRegistration(e2) {
      return this._langs.get(e2);
    }
    loadGrammar(e2) {
      return this._scopeToLang.get(e2);
    }
    addLanguage(e2) {
      this._langs.set(e2.name, e2), e2.aliases && e2.aliases.forEach((t2) => {
        this._langs.set(t2, e2);
      }), this._scopeToLang.set(e2.scopeName, e2), e2.injectTo && e2.injectTo.forEach((t2) => {
        this._injections.get(t2) || this._injections.set(t2, []), this._injections.get(t2).push(e2.scopeName);
      });
    }
    getInjections(e2) {
      let t2 = e2.split(`.`), n2 = [];
      for (let e3 = 1; e3 <= t2.length; e3++) {
        let r2 = t2.slice(0, e3).join(`.`);
        n2 = [
          ...n2,
          ...this._injections.get(r2) || []
        ];
      }
      return n2;
    }
  }, Ai = 0;
  function ji(e2) {
    Ai += 1, e2.warnings !== false && Ai >= 10 && Ai % 10 == 0 && console.warn(`[Shiki] ${Ai} instances have been created. Shiki is supposed to be used as a singleton, consider refactoring your code to cache your highlighter instance; Or call \`highlighter.dispose()\` to release unused instances.`);
    let t2 = false;
    if (!e2.engine) throw new N("`engine` option is required for synchronous mode");
    let n2 = (e2.langs || []).flat(1), r2 = (e2.themes || []).flat(1).map(wi), i2 = new Oi(new ki(e2.engine, n2), r2, n2, e2.langAlias), a2;
    function o2(t3) {
      return Di(t3, e2.langAlias);
    }
    function s2(e3) {
      g2();
      let t3 = i2.getGrammar(typeof e3 == `string` ? e3 : e3.name);
      if (!t3) throw new N(`Language \`${e3}\` not found, you may need to load it first`);
      return t3;
    }
    function c2(e3) {
      if (e3 === `none`) return {
        bg: ``,
        fg: ``,
        name: `none`,
        settings: [],
        type: `dark`
      };
      g2();
      let t3 = i2.getTheme(e3);
      if (!t3) throw new N(`Theme \`${e3}\` not found, you may need to load it first`);
      return t3;
    }
    function l2(e3) {
      g2();
      let t3 = c2(e3);
      return a2 !== e3 && (i2.setTheme(t3), a2 = e3), {
        theme: t3,
        colorMap: i2.getColorMap()
      };
    }
    function u2() {
      return g2(), i2.getLoadedThemes();
    }
    function d2() {
      return g2(), i2.getLoadedLanguages();
    }
    function f2(...e3) {
      g2(), i2.loadLanguages(e3.flat(1));
    }
    async function p2(...e3) {
      return f2(await Ti(e3));
    }
    function m2(...e3) {
      g2();
      for (let t3 of e3.flat(1)) i2.loadTheme(t3);
    }
    async function h2(...e3) {
      return g2(), m2(await Ei(e3));
    }
    function g2() {
      if (t2) throw new N(`Shiki instance has been disposed`);
    }
    function _2() {
      t2 || (t2 = true, i2.dispose(), --Ai);
    }
    return {
      setTheme: l2,
      getTheme: c2,
      getLanguage: s2,
      getLoadedThemes: u2,
      getLoadedLanguages: d2,
      resolveLangAlias: o2,
      loadLanguage: p2,
      loadLanguageSync: f2,
      loadTheme: h2,
      loadThemeSync: m2,
      dispose: _2,
      [Symbol.dispose]: _2
    };
  }
  Mi = function(e2) {
    let t2 = ji(e2);
    return {
      getLastGrammarState: (...e3) => ni(t2, ...e3),
      codeToTokensBase: (e3, n2) => ti(t2, e3, n2),
      codeToTokensWithThemes: (e3, n2) => ui(t2, e3, n2),
      codeToTokens: (e3, n2) => fi(t2, e3, n2),
      codeToHast: (e3, n2) => mi(t2, e3, n2),
      codeToHtml: (e3, n2) => bi(t2, e3, n2),
      getBundledLanguages: () => ({}),
      getBundledThemes: () => ({}),
      ...t2,
      getInternalContext: () => t2
    };
  };
  function Ni(e2) {
    if ([
      ...e2
    ].length !== 1) throw Error(`Expected "${e2}" to be a single code point`);
    return e2.codePointAt(0);
  }
  function Pi(e2, t2, n2) {
    return e2.has(t2) || e2.set(t2, n2), e2.get(t2);
  }
  var Fi = /* @__PURE__ */ new Set([
    `alnum`,
    `alpha`,
    `ascii`,
    `blank`,
    `cntrl`,
    `digit`,
    `graph`,
    `lower`,
    `print`,
    `punct`,
    `space`,
    `upper`,
    `word`,
    `xdigit`
  ]), P = String.raw;
  function Ii(e2, t2) {
    if (e2 == null) throw Error(t2 ?? `Value expected`);
    return e2;
  }
  var Li = P`\[\^?`, Ri = `c.? | C(?:-.?)?|${P`[pP]\{(?:\^?[-\x20_]*[A-Za-z][-\x20\w]*\})?`}|${P`x[89A-Fa-f]\p{AHex}(?:\\x[89A-Fa-f]\p{AHex})*`}|${P`u(?:\p{AHex}{4})? | x\{[^\}]*\}? | x\p{AHex}{0,2}`}|${P`o\{[^\}]*\}?`}|${P`\d{1,3}`}`, zi = /[?*+][?+]?|\{(?:\d+(?:,\d*)?|,\d+)\}\??/, Bi = new RegExp(P`
  \\ (?:
    ${Ri}
    | [gk]<[^>]*>?
    | [gk]'[^']*'?
    | .
  )
  | \( (?:
    \? (?:
      [:=!>({]
      | <[=!]
      | <[^>]*>
      | '[^']*'
      | ~\|?
      | #(?:[^)\\]|\\.?)*
      | [^:)]*[:)]
    )?
    | \*[^\)]*\)?
  )?
  | (?:${zi.source})+
  | ${Li}
  | .
`.replace(/\s+/g, ``), `gsu`), Vi = new RegExp(P`
  \\ (?:
    ${Ri}
    | .
  )
  | \[:(?:\^?\p{Alpha}+|\^):\]
  | ${Li}
  | &&
  | .
`.replace(/\s+/g, ``), `gsu`);
  function Hi(e2, t2 = {}) {
    let n2 = {
      flags: ``,
      ...t2,
      rules: {
        captureGroup: false,
        singleline: false,
        ...t2.rules
      }
    };
    if (typeof e2 != `string`) throw Error(`String expected as pattern`);
    let r2 = ha(n2.flags), i2 = [
      r2.extended
    ], a2 = {
      captureGroup: n2.rules.captureGroup,
      getCurrentModX() {
        return i2.at(-1);
      },
      numOpenGroups: 0,
      popModX() {
        i2.pop();
      },
      pushModX(e3) {
        i2.push(e3);
      },
      replaceCurrentModX(e3) {
        i2[i2.length - 1] = e3;
      },
      singleline: n2.rules.singleline
    }, o2 = [], s2;
    for (Bi.lastIndex = 0; s2 = Bi.exec(e2); ) {
      let t3 = Ui(a2, e2, s2[0], Bi.lastIndex);
      t3.tokens ? o2.push(...t3.tokens) : t3.token && o2.push(t3.token), t3.lastIndex !== void 0 && (Bi.lastIndex = t3.lastIndex);
    }
    let c2 = [], l2 = 0;
    o2.filter((e3) => e3.type === `GroupOpen`).forEach((e3) => {
      e3.kind === `capturing` ? e3.number = ++l2 : e3.raw === `(` && c2.push(e3);
    }), l2 || c2.forEach((e3, t3) => {
      e3.kind = `capturing`, e3.number = t3 + 1;
    });
    let u2 = l2 || c2.length;
    return {
      tokens: o2.map((e3) => e3.type === `EscapedNumber` ? _a(e3, u2) : e3).flat(),
      flags: r2
    };
  }
  function Ui(e2, t2, n2, r2) {
    let [i2, a2] = n2;
    if (n2 === `[` || n2 === `[^`) {
      let e3 = Wi(t2, n2, r2);
      return {
        tokens: e3.tokens,
        lastIndex: e3.lastIndex
      };
    }
    if (i2 === `\\`) {
      if (`AbBGyYzZ`.includes(a2)) return {
        token: Ji(n2, n2)
      };
      if (/^\\g[<']/.test(n2)) {
        if (!/^\\g(?:<[^>]+>|'[^']+')$/.test(n2)) throw Error(`Invalid group name "${n2}"`);
        return {
          token: aa(n2)
        };
      }
      if (/^\\k[<']/.test(n2)) {
        if (!/^\\k(?:<[^>]+>|'[^']+')$/.test(n2)) throw Error(`Invalid group name "${n2}"`);
        return {
          token: Yi(n2)
        };
      }
      if (a2 === `K`) return {
        token: ea(`keep`, n2)
      };
      if (a2 === `N` || a2 === `R`) return {
        token: I(`newline`, n2, {
          negate: a2 === `N`
        })
      };
      if (a2 === `O`) return {
        token: I(`any`, n2)
      };
      if (a2 === `X`) return {
        token: I(`text_segment`, n2)
      };
      let e3 = Ki(n2, {
        inCharClass: false
      });
      return Array.isArray(e3) ? {
        tokens: e3
      } : {
        token: e3
      };
    }
    if (i2 === `(`) {
      if (a2 === `*`) return {
        token: ua(n2)
      };
      if (n2 === `(?{`) throw Error(`Unsupported callout "${n2}"`);
      if (n2.startsWith(`(?#`)) {
        if (t2[r2] !== `)`) throw Error(`Unclosed comment group "(?#"`);
        return {
          lastIndex: r2 + 1
        };
      }
      if (/^\(\?[-imx]+[:)]$/.test(n2)) return {
        token: la(n2, e2)
      };
      if (e2.pushModX(e2.getCurrentModX()), e2.numOpenGroups++, n2 === `(` && !e2.captureGroup || n2 === `(?:`) return {
        token: L(`group`, n2)
      };
      if (n2 === `(?>`) return {
        token: L(`atomic`, n2)
      };
      if (n2 === `(?=` || n2 === `(?!` || n2 === `(?<=` || n2 === `(?<!`) return {
        token: L(n2[2] === `<` ? `lookbehind` : `lookahead`, n2, {
          negate: n2.endsWith(`!`)
        })
      };
      if (n2 === `(` && e2.captureGroup || n2.startsWith(`(?<`) && n2.endsWith(`>`) || n2.startsWith(`(?'`) && n2.endsWith(`'`)) return {
        token: L(`capturing`, n2, {
          ...n2 !== `(` && {
            name: n2.slice(3, -1)
          }
        })
      };
      if (n2.startsWith(`(?~`)) {
        if (n2 === `(?~|`) throw Error(`Unsupported absence function kind "${n2}"`);
        return {
          token: L(`absence_repeater`, n2)
        };
      }
      throw n2 === `(?(` ? Error(`Unsupported conditional "${n2}"`) : Error(`Invalid or unsupported group option "${n2}"`);
    }
    if (n2 === `)`) {
      if (e2.popModX(), e2.numOpenGroups--, e2.numOpenGroups < 0) throw Error(`Unmatched ")"`);
      return {
        token: na(n2)
      };
    }
    if (e2.getCurrentModX()) {
      if (n2 === `#`) {
        let e3 = t2.indexOf(`
`, r2);
        return {
          lastIndex: e3 === -1 ? t2.length : e3
        };
      }
      if (/^\s$/.test(n2)) {
        let e3 = /\s+/y;
        return e3.lastIndex = r2, {
          lastIndex: e3.exec(t2) ? e3.lastIndex : r2
        };
      }
    }
    return n2 === `.` ? {
      token: I(`dot`, n2)
    } : n2 === `^` || n2 === `$` ? {
      token: Ji(e2.singleline ? {
        "^": P`\A`,
        $: P`\Z`
      }[n2] : n2, n2)
    } : n2 === `|` ? {
      token: qi(n2)
    } : zi.test(n2) ? {
      tokens: va(n2)
    } : {
      token: F(Ni(n2), n2)
    };
  }
  function Wi(e2, t2, n2) {
    let r2 = [
      $i(t2[1] === `^`, t2)
    ], i2 = 1, a2;
    for (Vi.lastIndex = n2; a2 = Vi.exec(e2); ) {
      let e3 = a2[0];
      if (e3[0] === `[` && e3[1] !== `:`) i2++, r2.push($i(e3[1] === `^`, e3));
      else if (e3 === `]`) {
        if (r2.at(-1).type === `CharacterClassOpen`) r2.push(F(93, e3));
        else if (i2--, r2.push(Xi(e3)), !i2) break;
      } else {
        let t3 = Gi(e3);
        Array.isArray(t3) ? r2.push(...t3) : r2.push(t3);
      }
    }
    return {
      tokens: r2,
      lastIndex: Vi.lastIndex || e2.length
    };
  }
  function Gi(e2) {
    if (e2[0] === `\\`) return Ki(e2, {
      inCharClass: true
    });
    if (e2[0] === `[`) {
      let t2 = /\[:(?<negate>\^?)(?<name>[a-z]+):\]/.exec(e2);
      if (!t2 || !Fi.has(t2.groups.name)) throw Error(`Invalid POSIX class "${e2}"`);
      return I(`posix`, e2, {
        value: t2.groups.name,
        negate: !!t2.groups.negate
      });
    }
    return e2 === `-` ? Zi(e2) : e2 === `&&` ? Qi(e2) : F(Ni(e2), e2);
  }
  function Ki(e2, { inCharClass: t2 }) {
    let n2 = e2[1];
    if (n2 === `c` || n2 === `C`) return ca(e2);
    if (`dDhHsSwW`.includes(n2)) return fa(e2);
    if (e2.startsWith(P`\o{`)) throw Error(`Incomplete, invalid, or unsupported octal code point "${e2}"`);
    if (/^\\[pP]\{/.test(e2)) {
      if (e2.length === 3) throw Error(`Incomplete or invalid Unicode property "${e2}"`);
      return pa(e2);
    }
    if (new RegExp("^\\\\x[89A-Fa-f]\\p{AHex}", "u").test(e2)) try {
      let t3 = e2.split(/\\x/).slice(1).map((e3) => parseInt(e3, 16)), n3 = new TextDecoder(`utf-8`, {
        ignoreBOM: true,
        fatal: true
      }).decode(new Uint8Array(t3)), r2 = new TextEncoder();
      return [
        ...n3
      ].map((e3) => {
        let t4 = [
          ...r2.encode(e3)
        ].map((e4) => `\\x${e4.toString(16)}`).join(``);
        return F(Ni(e3), t4);
      });
    } catch {
      throw Error(`Multibyte code "${e2}" incomplete or invalid in Oniguruma`);
    }
    if (n2 === `u` || n2 === `x`) return F(ga(e2), e2);
    if (sa.has(n2)) return F(sa.get(n2), e2);
    if (/\d/.test(n2)) return ta(t2, e2);
    if (e2 === `\\`) throw Error(P`Incomplete escape "\"`);
    if (n2 === `M`) throw Error(`Unsupported meta "${e2}"`);
    if ([
      ...e2
    ].length === 2) return F(e2.codePointAt(1), e2);
    throw Error(`Unexpected escape "${e2}"`);
  }
  function qi(e2) {
    return {
      type: `Alternator`,
      raw: e2
    };
  }
  function Ji(e2, t2) {
    return {
      type: `Assertion`,
      kind: e2,
      raw: t2
    };
  }
  function Yi(e2) {
    return {
      type: `Backreference`,
      raw: e2
    };
  }
  function F(e2, t2) {
    return {
      type: `Character`,
      value: e2,
      raw: t2
    };
  }
  function Xi(e2) {
    return {
      type: `CharacterClassClose`,
      raw: e2
    };
  }
  function Zi(e2) {
    return {
      type: `CharacterClassHyphen`,
      raw: e2
    };
  }
  function Qi(e2) {
    return {
      type: `CharacterClassIntersector`,
      raw: e2
    };
  }
  function $i(e2, t2) {
    return {
      type: `CharacterClassOpen`,
      negate: e2,
      raw: t2
    };
  }
  function I(e2, t2, n2 = {}) {
    return {
      type: `CharacterSet`,
      kind: e2,
      ...n2,
      raw: t2
    };
  }
  function ea(e2, t2, n2 = {}) {
    return e2 === `keep` ? {
      type: `Directive`,
      kind: e2,
      raw: t2
    } : {
      type: `Directive`,
      kind: e2,
      flags: Ii(n2.flags),
      raw: t2
    };
  }
  function ta(e2, t2) {
    return {
      type: `EscapedNumber`,
      inCharClass: e2,
      raw: t2
    };
  }
  function na(e2) {
    return {
      type: `GroupClose`,
      raw: e2
    };
  }
  function L(e2, t2, n2 = {}) {
    return {
      type: `GroupOpen`,
      kind: e2,
      ...n2,
      raw: t2
    };
  }
  function ra(e2, t2, n2, r2) {
    return {
      type: `NamedCallout`,
      kind: e2,
      tag: t2,
      arguments: n2,
      raw: r2
    };
  }
  function ia(e2, t2, n2, r2) {
    return {
      type: `Quantifier`,
      kind: e2,
      min: t2,
      max: n2,
      raw: r2
    };
  }
  function aa(e2) {
    return {
      type: `Subroutine`,
      raw: e2
    };
  }
  var oa = /* @__PURE__ */ new Set([
    `COUNT`,
    `CMP`,
    `ERROR`,
    `FAIL`,
    `MAX`,
    `MISMATCH`,
    `SKIP`,
    `TOTAL_COUNT`
  ]), sa = /* @__PURE__ */ new Map([
    [
      `a`,
      7
    ],
    [
      `b`,
      8
    ],
    [
      `e`,
      27
    ],
    [
      `f`,
      12
    ],
    [
      `n`,
      10
    ],
    [
      `r`,
      13
    ],
    [
      `t`,
      9
    ],
    [
      `v`,
      11
    ]
  ]);
  function ca(e2) {
    let t2 = e2[1] === `c` ? e2[2] : e2[3];
    if (!t2 || !/[A-Za-z]/.test(t2)) throw Error(`Unsupported control character "${e2}"`);
    return F(Ni(t2.toUpperCase()) - 64, e2);
  }
  function la(e2, t2) {
    let { on: n2, off: r2 } = /^\(\?(?<on>[imx]*)(?:-(?<off>[-imx]*))?/.exec(e2).groups;
    r2 ?? (r2 = ``);
    let i2 = (t2.getCurrentModX() || n2.includes(`x`)) && !r2.includes(`x`), a2 = ma(n2), o2 = ma(r2), s2 = {};
    if (a2 && (s2.enable = a2), o2 && (s2.disable = o2), e2.endsWith(`)`)) return t2.replaceCurrentModX(i2), ea(`flags`, e2, {
      flags: s2
    });
    if (e2.endsWith(`:`)) return t2.pushModX(i2), t2.numOpenGroups++, L(`group`, e2, {
      ...(a2 || o2) && {
        flags: s2
      }
    });
    throw Error(`Unexpected flag modifier "${e2}"`);
  }
  function ua(e2) {
    let t2 = /\(\*(?<name>[A-Za-z_]\w*)?(?:\[(?<tag>(?:[A-Za-z_]\w*)?)\])?(?:\{(?<args>[^}]*)\})?\)/.exec(e2);
    if (!t2) throw Error(`Incomplete or invalid named callout "${e2}"`);
    let { name: n2, tag: r2, args: i2 } = t2.groups;
    if (!n2) throw Error(`Invalid named callout "${e2}"`);
    if (r2 === ``) throw Error(`Named callout tag with empty value not allowed "${e2}"`);
    let a2 = i2 ? i2.split(`,`).filter((e3) => e3 !== ``).map((e3) => /^[+-]?\d+$/.test(e3) ? +e3 : e3) : [], [o2, s2, c2] = a2, l2 = oa.has(n2) ? n2.toLowerCase() : `custom`;
    switch (l2) {
      case `fail`:
      case `mismatch`:
      case `skip`:
        if (a2.length > 0) throw Error(`Named callout arguments not allowed "${a2}"`);
        break;
      case `error`:
        if (a2.length > 1) throw Error(`Named callout allows only one argument "${a2}"`);
        if (typeof o2 == `string`) throw Error(`Named callout argument must be a number "${o2}"`);
        break;
      case `max`:
        if (!a2.length || a2.length > 2) throw Error(`Named callout must have one or two arguments "${a2}"`);
        if (typeof o2 == `string` && !/^[A-Za-z_]\w*$/.test(o2)) throw Error(`Named callout argument one must be a tag or number "${o2}"`);
        if (a2.length === 2 && (typeof s2 == `number` || !/^[<>X]$/.test(s2))) throw Error(`Named callout optional argument two must be '<', '>', or 'X' "${s2}"`);
        break;
      case `count`:
      case `total_count`:
        if (a2.length > 1) throw Error(`Named callout allows only one argument "${a2}"`);
        if (a2.length === 1 && (typeof o2 == `number` || !/^[<>X]$/.test(o2))) throw Error(`Named callout optional argument must be '<', '>', or 'X' "${o2}"`);
        break;
      case `cmp`:
        if (a2.length !== 3) throw Error(`Named callout must have three arguments "${a2}"`);
        if (typeof o2 == `string` && !/^[A-Za-z_]\w*$/.test(o2)) throw Error(`Named callout argument one must be a tag or number "${o2}"`);
        if (typeof s2 == `number` || !/^(?:[<>!=]=|[<>])$/.test(s2)) throw Error(`Named callout argument two must be '==', '!=', '>', '<', '>=', or '<=' "${s2}"`);
        if (typeof c2 == `string` && !/^[A-Za-z_]\w*$/.test(c2)) throw Error(`Named callout argument three must be a tag or number "${c2}"`);
        break;
      case `custom`:
        throw Error(`Undefined callout name "${n2}"`);
      default:
        throw Error(`Unexpected named callout kind "${l2}"`);
    }
    return ra(l2, r2 ?? null, (i2 == null ? void 0 : i2.split(`,`)) ?? null, e2);
  }
  function da(e2) {
    let t2 = null, n2, r2;
    if (e2[0] === `{`) {
      let { minStr: i2, maxStr: a2 } = /^\{(?<minStr>\d*)(?:,(?<maxStr>\d*))?/.exec(e2).groups, o2 = 1e5;
      if (+i2 > o2 || a2 && +a2 > o2) throw Error(`Quantifier value unsupported in Oniguruma`);
      if (n2 = +i2, r2 = a2 === void 0 ? +i2 : a2 === `` ? 1 / 0 : +a2, n2 > r2 && (t2 = `possessive`, [n2, r2] = [
        r2,
        n2
      ]), e2.endsWith(`?`)) {
        if (t2 === `possessive`) throw Error(`Unsupported possessive interval quantifier chain with "?"`);
        t2 = `lazy`;
      } else t2 || (t2 = `greedy`);
    } else n2 = e2[0] === `+` ? 1 : 0, r2 = e2[0] === `?` ? 1 : 1 / 0, t2 = e2[1] === `+` ? `possessive` : e2[1] === `?` ? `lazy` : `greedy`;
    return ia(t2, n2, r2, e2);
  }
  function fa(e2) {
    let t2 = e2[1].toLowerCase();
    return I({
      d: `digit`,
      h: `hex`,
      s: `space`,
      w: `word`
    }[t2], e2, {
      negate: e2[1] !== t2
    });
  }
  function pa(e2) {
    let { p: t2, neg: n2, value: r2 } = /^\\(?<p>[pP])\{(?<neg>\^?)(?<value>[^}]+)/.exec(e2).groups;
    return I(`property`, e2, {
      value: r2,
      negate: t2 === `P` && !n2 || t2 === `p` && !!n2
    });
  }
  function ma(e2) {
    let t2 = {};
    return e2.includes(`i`) && (t2.ignoreCase = true), e2.includes(`m`) && (t2.dotAll = true), e2.includes(`x`) && (t2.extended = true), Object.keys(t2).length ? t2 : null;
  }
  function ha(e2) {
    let t2 = {
      ignoreCase: false,
      dotAll: false,
      extended: false,
      digitIsAscii: false,
      posixIsAscii: false,
      spaceIsAscii: false,
      wordIsAscii: false,
      textSegmentMode: null
    };
    for (let n2 = 0; n2 < e2.length; n2++) {
      let r2 = e2[n2];
      if (!`imxDPSWy`.includes(r2)) throw Error(`Invalid flag "${r2}"`);
      if (r2 === `y`) {
        if (!/^y{[gw]}/.test(e2.slice(n2))) throw Error(`Invalid or unspecified flag "y" mode`);
        t2.textSegmentMode = e2[n2 + 2] === `g` ? `grapheme` : `word`, n2 += 3;
        continue;
      }
      t2[{
        i: `ignoreCase`,
        m: `dotAll`,
        x: `extended`,
        D: `digitIsAscii`,
        P: `posixIsAscii`,
        S: `spaceIsAscii`,
        W: `wordIsAscii`
      }[r2]] = true;
    }
    return t2;
  }
  function ga(e2) {
    if (new RegExp("^(?:\\\\u(?!\\p{AHex}{4})|\\\\x(?!\\p{AHex}{1,2}|\\{\\p{AHex}{1,8}\\}))", "u").test(e2)) throw Error(`Incomplete or invalid escape "${e2}"`);
    let t2 = e2[2] === `{` ? new RegExp("^\\\\x\\{\\s*(?<hex>\\p{AHex}+)", "u").exec(e2).groups.hex : e2.slice(2);
    return parseInt(t2, 16);
  }
  function _a(e2, t2) {
    let { raw: n2, inCharClass: r2 } = e2, i2 = n2.slice(1);
    if (!r2 && (i2 !== `0` && i2.length === 1 || i2[0] !== `0` && +i2 <= t2)) return [
      Yi(n2)
    ];
    let a2 = [], o2 = i2.match(/^[0-7]+|\d/g);
    for (let e3 = 0; e3 < o2.length; e3++) {
      let t3 = o2[e3], r3;
      if (e3 === 0 && t3 !== `8` && t3 !== `9`) {
        if (r3 = parseInt(t3, 8), r3 > 127) throw Error(P`Octal encoded byte above 177 unsupported "${n2}"`);
      } else r3 = Ni(t3);
      a2.push(F(r3, (e3 === 0 ? `\\` : ``) + t3));
    }
    return a2;
  }
  function va(e2) {
    let t2 = [], n2 = new RegExp(zi, `gy`), r2;
    for (; r2 = n2.exec(e2); ) {
      let e3 = r2[0];
      if (e3[0] === `{`) {
        let r3 = /^\{(?<min>\d+),(?<max>\d+)\}\??$/.exec(e3);
        if (r3) {
          let { min: i2, max: a2 } = r3.groups;
          if (+i2 > +a2 && e3.endsWith(`?`)) {
            n2.lastIndex--, t2.push(da(e3.slice(0, -1)));
            continue;
          }
        }
      }
      t2.push(da(e3));
    }
    return t2;
  }
  function ya(e2, t2) {
    if (!Array.isArray(e2.body)) throw Error(`Expected node with body array`);
    if (e2.body.length !== 1) return false;
    let n2 = e2.body[0];
    return !t2 || Object.keys(t2).every((e3) => t2[e3] === n2[e3]);
  }
  function ba(e2) {
    return xa.has(e2.type);
  }
  var xa = /* @__PURE__ */ new Set([
    `AbsenceFunction`,
    `Backreference`,
    `CapturingGroup`,
    `Character`,
    `CharacterClass`,
    `CharacterSet`,
    `Group`,
    `Quantifier`,
    `Subroutine`
  ]);
  function Sa(e2, t2 = {}) {
    let n2 = {
      flags: ``,
      normalizeUnknownPropertyNames: false,
      skipBackrefValidation: false,
      skipLookbehindValidation: false,
      skipPropertyNameValidation: false,
      unicodePropertyMap: null,
      ...t2,
      rules: {
        captureGroup: false,
        singleline: false,
        ...t2.rules
      }
    }, r2 = Hi(e2, {
      flags: n2.flags,
      rules: {
        captureGroup: n2.rules.captureGroup,
        singleline: n2.rules.singleline
      }
    }), i2 = (e3, t3) => {
      let n3 = r2.tokens[a2.nextIndex];
      switch (a2.parent = e3, a2.nextIndex++, n3.type) {
        case `Alternator`:
          return R();
        case `Assertion`:
          return Ca(n3);
        case `Backreference`:
          return wa(n3, a2);
        case `Character`:
          return Fa(n3.value, {
            useLastValid: !!t3.isCheckingRangeEnd
          });
        case `CharacterClassHyphen`:
          return Ta(n3, a2, t3);
        case `CharacterClassOpen`:
          return Ea(n3, a2, t3);
        case `CharacterSet`:
          return Da(n3, a2);
        case `Directive`:
          return za(n3.kind, {
            flags: n3.flags
          });
        case `GroupOpen`:
          return Oa(n3, a2, t3);
        case `NamedCallout`:
          return Va(n3.kind, n3.tag, n3.arguments);
        case `Quantifier`:
          return ka(n3, a2);
        case `Subroutine`:
          return Aa(n3, a2);
        default:
          throw Error(`Unexpected token type "${n3.type}"`);
      }
    }, a2 = {
      capturingGroups: [],
      hasNumberedRef: false,
      namedGroupsByName: /* @__PURE__ */ new Map(),
      nextIndex: 0,
      normalizeUnknownPropertyNames: n2.normalizeUnknownPropertyNames,
      parent: null,
      skipBackrefValidation: n2.skipBackrefValidation,
      skipLookbehindValidation: n2.skipLookbehindValidation,
      skipPropertyNameValidation: n2.skipPropertyNameValidation,
      subroutines: [],
      tokens: r2.tokens,
      unicodePropertyMap: n2.unicodePropertyMap,
      walk: i2
    }, o2 = Wa(Ba(r2.flags)), s2 = o2.body[0];
    for (; a2.nextIndex < r2.tokens.length; ) {
      let e3 = i2(s2, {});
      e3.type === `Alternative` ? (o2.body.push(e3), s2 = e3) : s2.body.push(e3);
    }
    let { capturingGroups: c2, hasNumberedRef: l2, namedGroupsByName: u2, subroutines: d2 } = a2;
    if (l2 && u2.size && !n2.rules.captureGroup) throw Error(`Numbered backref/subroutine not allowed when using named capture`);
    for (let { ref: e3 } of d2) if (typeof e3 == `number`) {
      if (e3 > c2.length) throw Error(`Subroutine uses a group number that's not defined`);
      e3 && (c2[e3 - 1].isSubroutined = true);
    } else if (u2.has(e3)) {
      if (u2.get(e3).length > 1) throw Error(P`Subroutine uses a duplicate group name "\g<${e3}>"`);
      u2.get(e3)[0].isSubroutined = true;
    } else throw Error(P`Subroutine uses a group name that's not defined "\g<${e3}>"`);
    return o2;
  }
  function Ca({ kind: e2 }) {
    return Ma(Ii({
      "^": `line_start`,
      $: `line_end`,
      "\\A": `string_start`,
      "\\b": `word_boundary`,
      "\\B": `word_boundary`,
      "\\G": `search_start`,
      "\\y": `text_segment_boundary`,
      "\\Y": `text_segment_boundary`,
      "\\z": `string_end`,
      "\\Z": `string_end_newline`
    }[e2], `Unexpected assertion kind "${e2}"`), {
      negate: e2 === P`\B` || e2 === P`\Y`
    });
  }
  function wa({ raw: e2 }, t2) {
    let n2 = /^\\k[<']/.test(e2), r2 = n2 ? e2.slice(3, -1) : e2.slice(1), i2 = (n3, r3 = false) => {
      let i3 = t2.capturingGroups.length, a2 = false;
      if (n3 > i3) if (t2.skipBackrefValidation) a2 = true;
      else throw Error(`Not enough capturing groups defined to the left "${e2}"`);
      return t2.hasNumberedRef = true, Na(r3 ? i3 + 1 - n3 : n3, {
        orphan: a2
      });
    };
    if (n2) {
      let n3 = /^(?<sign>-?)0*(?<num>[1-9]\d*)$/.exec(r2);
      if (n3) return i2(+n3.groups.num, !!n3.groups.sign);
      if (/[-+]/.test(r2)) throw Error(`Invalid backref name "${e2}"`);
      if (!t2.namedGroupsByName.has(r2)) throw Error(`Group name not defined to the left "${e2}"`);
      return Na(r2);
    }
    return i2(+r2);
  }
  function Ta(e2, t2, n2) {
    let { tokens: r2, walk: i2 } = t2, a2 = t2.parent, o2 = a2.body.at(-1), s2 = r2[t2.nextIndex];
    if (!n2.isCheckingRangeEnd && o2 && o2.type !== `CharacterClass` && o2.type !== `CharacterClassRange` && s2 && s2.type !== `CharacterClassOpen` && s2.type !== `CharacterClassClose` && s2.type !== `CharacterClassIntersector`) {
      let e3 = i2(a2, {
        ...n2,
        isCheckingRangeEnd: true
      });
      if (o2.type === `Character` && e3.type === `Character`) return a2.body.pop(), La(o2, e3);
      throw Error(`Invalid character class range`);
    }
    return Fa(Ni(`-`));
  }
  function Ea({ negate: e2 }, t2, n2) {
    let { tokens: r2, walk: i2 } = t2, a2 = r2[t2.nextIndex], o2 = [
      Ia()
    ], s2 = eo(a2);
    for (; s2.type !== `CharacterClassClose`; ) {
      if (s2.type === `CharacterClassIntersector`) o2.push(Ia()), t2.nextIndex++;
      else {
        let e3 = o2.at(-1);
        e3.body.push(i2(e3, n2));
      }
      s2 = eo(r2[t2.nextIndex], a2);
    }
    let c2 = Ia({
      negate: e2
    });
    return o2.length === 1 ? c2.body = o2[0].body : (c2.kind = `intersection`, c2.body = o2.map((e3) => e3.body.length === 1 ? e3.body[0] : e3)), t2.nextIndex++, c2;
  }
  function Da({ kind: e2, negate: t2, value: n2 }, r2) {
    let { normalizeUnknownPropertyNames: i2, skipPropertyNameValidation: a2, unicodePropertyMap: o2 } = r2;
    if (e2 === `property`) {
      let r3 = $a(n2);
      if (Fi.has(r3) && !(o2 == null ? void 0 : o2.has(r3))) e2 = `posix`, n2 = r3;
      else return V(n2, {
        negate: t2,
        normalizeUnknownPropertyNames: i2,
        skipPropertyNameValidation: a2,
        unicodePropertyMap: o2
      });
    }
    return e2 === `posix` ? Ha(n2, {
      negate: t2
    }) : Ra(e2, {
      negate: t2
    });
  }
  function Oa(e2, t2, n2) {
    let { tokens: r2, capturingGroups: i2, namedGroupsByName: a2, skipLookbehindValidation: o2, walk: s2 } = t2, c2 = Ka(e2), l2 = c2.type === `AbsenceFunction`, u2 = Xa(c2), d2 = u2 && c2.negate;
    if (c2.type === `CapturingGroup` && (i2.push(c2), c2.name && Pi(a2, c2.name, []).push(c2)), l2 && n2.isInAbsenceFunction) throw Error(`Nested absence function not supported by Oniguruma`);
    let f2 = to(r2[t2.nextIndex]);
    for (; f2.type !== `GroupClose`; ) {
      if (f2.type === `Alternator`) c2.body.push(R()), t2.nextIndex++;
      else {
        let e3 = c2.body.at(-1), t3 = s2(e3, {
          ...n2,
          isInAbsenceFunction: n2.isInAbsenceFunction || l2,
          isInLookbehind: n2.isInLookbehind || u2,
          isInNegLookbehind: n2.isInNegLookbehind || d2
        });
        if (e3.body.push(t3), (u2 || n2.isInLookbehind) && !o2) {
          let e4 = `Lookbehind includes a pattern not allowed by Oniguruma`;
          if (d2 || n2.isInNegLookbehind) {
            if (Ya(t3) || t3.type === `CapturingGroup`) throw Error(e4);
          } else if (Ya(t3) || Xa(t3) && t3.negate) throw Error(e4);
        }
      }
      f2 = to(r2[t2.nextIndex]);
    }
    return t2.nextIndex++, c2;
  }
  function ka({ kind: e2, min: t2, max: n2 }, r2) {
    let i2 = r2.parent, a2 = i2.body.at(-1);
    if (!a2 || !ba(a2)) throw Error(`Quantifier requires a repeatable token`);
    let o2 = Ua(e2, t2, n2, a2);
    return i2.body.pop(), o2;
  }
  function Aa({ raw: e2 }, t2) {
    let { capturingGroups: n2, subroutines: r2 } = t2, i2 = e2.slice(3, -1), a2 = /^(?<sign>[-+]?)0*(?<num>[1-9]\d*)$/.exec(i2);
    if (a2) {
      let e3 = +a2.groups.num, r3 = n2.length;
      if (t2.hasNumberedRef = true, i2 = {
        "": e3,
        "+": r3 + e3,
        "-": r3 + 1 - e3
      }[a2.groups.sign], i2 < 1) throw Error(`Invalid subroutine number`);
    } else i2 === `0` && (i2 = 0);
    let o2 = Ga(i2);
    return r2.push(o2), o2;
  }
  function ja(e2, t2) {
    if (e2 !== `repeater`) throw Error(`Unexpected absence function kind "${e2}"`);
    return {
      type: `AbsenceFunction`,
      kind: e2,
      body: qa(t2 == null ? void 0 : t2.body)
    };
  }
  function R(e2) {
    return {
      type: `Alternative`,
      body: Ja(e2 == null ? void 0 : e2.body)
    };
  }
  function Ma(e2, t2) {
    let n2 = {
      type: `Assertion`,
      kind: e2
    };
    return (e2 === `word_boundary` || e2 === `text_segment_boundary`) && (n2.negate = !!(t2 == null ? void 0 : t2.negate)), n2;
  }
  function Na(e2, t2) {
    let n2 = !!(t2 == null ? void 0 : t2.orphan);
    return {
      type: `Backreference`,
      ref: e2,
      ...n2 && {
        orphan: n2
      }
    };
  }
  function Pa(e2, t2) {
    let n2 = {
      name: void 0,
      isSubroutined: false,
      ...t2
    };
    if (n2.name !== void 0 && !Za(n2.name)) throw Error(`Group name "${n2.name}" invalid in Oniguruma`);
    return {
      type: `CapturingGroup`,
      number: e2,
      ...n2.name && {
        name: n2.name
      },
      ...n2.isSubroutined && {
        isSubroutined: n2.isSubroutined
      },
      body: qa(t2 == null ? void 0 : t2.body)
    };
  }
  function Fa(e2, t2) {
    let n2 = {
      useLastValid: false,
      ...t2
    };
    if (e2 > 1114111) {
      let t3 = e2.toString(16);
      if (n2.useLastValid) e2 = 1114111;
      else throw e2 > 1310719 ? Error(`Invalid code point out of range "\\x{${t3}}"`) : Error(`Invalid code point out of range in JS "\\x{${t3}}"`);
    }
    return {
      type: `Character`,
      value: e2
    };
  }
  function Ia(e2) {
    let t2 = {
      kind: `union`,
      negate: false,
      ...e2
    };
    return {
      type: `CharacterClass`,
      kind: t2.kind,
      negate: t2.negate,
      body: Ja(e2 == null ? void 0 : e2.body)
    };
  }
  function La(e2, t2) {
    if (t2.value < e2.value) throw Error(`Character class range out of order`);
    return {
      type: `CharacterClassRange`,
      min: e2,
      max: t2
    };
  }
  function Ra(e2, t2) {
    let n2 = !!(t2 == null ? void 0 : t2.negate), r2 = {
      type: `CharacterSet`,
      kind: e2
    };
    return (e2 === `digit` || e2 === `hex` || e2 === `newline` || e2 === `space` || e2 === `word`) && (r2.negate = n2), (e2 === `text_segment` || e2 === `newline` && !n2) && (r2.variableLength = true), r2;
  }
  function za(e2, t2 = {}) {
    if (e2 === `keep`) return {
      type: `Directive`,
      kind: e2
    };
    if (e2 === `flags`) return {
      type: `Directive`,
      kind: e2,
      flags: Ii(t2.flags)
    };
    throw Error(`Unexpected directive kind "${e2}"`);
  }
  function Ba(e2) {
    return {
      type: `Flags`,
      ...e2
    };
  }
  function z(e2) {
    let t2 = e2 == null ? void 0 : e2.atomic, n2 = e2 == null ? void 0 : e2.flags;
    if (t2 && n2) throw Error(`Atomic group cannot have flags`);
    return {
      type: `Group`,
      ...t2 && {
        atomic: t2
      },
      ...n2 && {
        flags: n2
      },
      body: qa(e2 == null ? void 0 : e2.body)
    };
  }
  function B(e2) {
    let t2 = {
      behind: false,
      negate: false,
      ...e2
    };
    return {
      type: `LookaroundAssertion`,
      kind: t2.behind ? `lookbehind` : `lookahead`,
      negate: t2.negate,
      body: qa(e2 == null ? void 0 : e2.body)
    };
  }
  function Va(e2, t2, n2) {
    return {
      type: `NamedCallout`,
      kind: e2,
      tag: t2,
      arguments: n2
    };
  }
  function Ha(e2, t2) {
    let n2 = !!(t2 == null ? void 0 : t2.negate);
    if (!Fi.has(e2)) throw Error(`Invalid POSIX class "${e2}"`);
    return {
      type: `CharacterSet`,
      kind: `posix`,
      value: e2,
      negate: n2
    };
  }
  function Ua(e2, t2, n2, r2) {
    if (t2 > n2) throw Error(`Invalid reversed quantifier range`);
    return {
      type: `Quantifier`,
      kind: e2,
      min: t2,
      max: n2,
      body: r2
    };
  }
  function Wa(e2, t2) {
    return {
      type: `Regex`,
      body: qa(t2 == null ? void 0 : t2.body),
      flags: e2
    };
  }
  function Ga(e2) {
    return {
      type: `Subroutine`,
      ref: e2
    };
  }
  function V(e2, t2) {
    var _a3;
    let n2 = {
      negate: false,
      normalizeUnknownPropertyNames: false,
      skipPropertyNameValidation: false,
      unicodePropertyMap: null,
      ...t2
    }, r2 = (_a3 = n2.unicodePropertyMap) == null ? void 0 : _a3.get($a(e2));
    if (!r2) {
      if (n2.normalizeUnknownPropertyNames) r2 = Qa(e2);
      else if (n2.unicodePropertyMap && !n2.skipPropertyNameValidation) throw Error(P`Invalid Unicode property "\p{${e2}}"`);
    }
    return {
      type: `CharacterSet`,
      kind: `property`,
      value: r2 ?? e2,
      negate: n2.negate
    };
  }
  function Ka({ flags: e2, kind: t2, name: n2, negate: r2, number: i2 }) {
    switch (t2) {
      case `absence_repeater`:
        return ja(`repeater`);
      case `atomic`:
        return z({
          atomic: true
        });
      case `capturing`:
        return Pa(i2, {
          name: n2
        });
      case `group`:
        return z({
          flags: e2
        });
      case `lookahead`:
      case `lookbehind`:
        return B({
          behind: t2 === `lookbehind`,
          negate: r2
        });
      default:
        throw Error(`Unexpected group kind "${t2}"`);
    }
  }
  function qa(e2) {
    if (e2 === void 0) e2 = [
      R()
    ];
    else if (!Array.isArray(e2) || !e2.length || !e2.every((e3) => e3.type === `Alternative`)) throw Error(`Invalid body; expected array of one or more Alternative nodes`);
    return e2;
  }
  function Ja(e2) {
    if (e2 === void 0) e2 = [];
    else if (!Array.isArray(e2) || !e2.every((e3) => !!e3.type)) throw Error(`Invalid body; expected array of nodes`);
    return e2;
  }
  function Ya(e2) {
    return e2.type === `LookaroundAssertion` && e2.kind === `lookahead`;
  }
  function Xa(e2) {
    return e2.type === `LookaroundAssertion` && e2.kind === `lookbehind`;
  }
  function Za(e2) {
    return /^[\p{Alpha}\p{Pc}][^)]*$/u.test(e2);
  }
  function Qa(e2) {
    return e2.trim().replace(/[- _]+/g, `_`).replace(/[A-Z][a-z]+(?=[A-Z])/g, `$&_`).replace(/[A-Za-z]+/g, (e3) => e3[0].toUpperCase() + e3.slice(1).toLowerCase());
  }
  function $a(e2) {
    return e2.replace(/[- _]+/g, ``).toLowerCase();
  }
  function eo(e2, t2) {
    return Ii(e2, `${(t2 == null ? void 0 : t2.type) === `Character` && t2.value === 93 ? `Empty` : `Unclosed`} character class`);
  }
  function to(e2) {
    return Ii(e2, `Unclosed group`);
  }
  function no(e2, t2, n2 = null) {
    function r2(e3, t3) {
      for (let n3 = 0; n3 < e3.length; n3++) {
        let r3 = i2(e3[n3], t3, n3, e3);
        n3 = Math.max(-1, n3 + r3);
      }
    }
    function i2(a2, o2 = null, s2 = null, c2 = null) {
      var _a3, _b2;
      let l2 = 0, u2 = false, d2 = {
        node: a2,
        parent: o2,
        key: s2,
        container: c2,
        root: e2,
        remove() {
          ro(c2).splice(Math.max(0, H(s2) + l2), 1), l2--, u2 = true;
        },
        removeAllNextSiblings() {
          return ro(c2).splice(H(s2) + 1);
        },
        removeAllPrevSiblings() {
          let e3 = H(s2) + l2;
          return l2 -= e3, ro(c2).splice(0, Math.max(0, e3));
        },
        replaceWith(e3, t3 = {}) {
          let n3 = !!t3.traverse;
          c2 ? c2[Math.max(0, H(s2) + l2)] = e3 : Ii(o2, `Can't replace root node`)[s2] = e3, n3 && i2(e3, o2, s2, c2), u2 = true;
        },
        replaceWithMultiple(e3, t3 = {}) {
          let n3 = !!t3.traverse;
          if (ro(c2).splice(Math.max(0, H(s2) + l2), 1, ...e3), l2 += e3.length - 1, n3) {
            let t4 = 0;
            for (let n4 = 0; n4 < e3.length; n4++) t4 += i2(e3[n4], o2, H(s2) + n4 + t4, c2);
          }
          u2 = true;
        },
        skip() {
          u2 = true;
        }
      }, { type: f2 } = a2, p2 = t2[`*`], m2 = t2[f2], h2 = typeof p2 == `function` ? p2 : p2 == null ? void 0 : p2.enter, g2 = typeof m2 == `function` ? m2 : m2 == null ? void 0 : m2.enter;
      if (h2 == null ? void 0 : h2(d2, n2), g2 == null ? void 0 : g2(d2, n2), !u2) switch (f2) {
        case `AbsenceFunction`:
        case `CapturingGroup`:
        case `Group`:
          r2(a2.body, a2);
          break;
        case `Alternative`:
        case `CharacterClass`:
          r2(a2.body, a2);
          break;
        case `Assertion`:
        case `Backreference`:
        case `Character`:
        case `CharacterSet`:
        case `Directive`:
        case `Flags`:
        case `NamedCallout`:
        case `Subroutine`:
          break;
        case `CharacterClassRange`:
          i2(a2.min, a2, `min`), i2(a2.max, a2, `max`);
          break;
        case `LookaroundAssertion`:
          r2(a2.body, a2);
          break;
        case `Quantifier`:
          i2(a2.body, a2, `body`);
          break;
        case `Regex`:
          r2(a2.body, a2), i2(a2.flags, a2, `flags`);
          break;
        default:
          throw Error(`Unexpected node type "${f2}"`);
      }
      return (_a3 = m2 == null ? void 0 : m2.exit) == null ? void 0 : _a3.call(m2, d2, n2), (_b2 = p2 == null ? void 0 : p2.exit) == null ? void 0 : _b2.call(p2, d2, n2), l2;
    }
    return i2(e2), e2;
  }
  function ro(e2) {
    if (!Array.isArray(e2)) throw Error(`Container expected`);
    return e2;
  }
  function H(e2) {
    if (typeof e2 != `number`) throw Error(`Numeric key expected`);
    return e2;
  }
  var io = String.raw`\(\?(?:[:=!>A-Za-z\-]|<[=!]|\(DEFINE\))`;
  function ao(e2, t2) {
    for (let n2 = 0; n2 < e2.length; n2++) e2[n2] >= t2 && e2[n2]++;
  }
  function oo(e2, t2, n2, r2) {
    return e2.slice(0, t2) + r2 + e2.slice(t2 + n2.length);
  }
  const U = Object.freeze({
    DEFAULT: `DEFAULT`,
    CHAR_CLASS: `CHAR_CLASS`
  });
  function so(e2, t2, n2, r2) {
    let i2 = new RegExp(String.raw`${t2}|(?<$skip>\[\^?|\\?.)`, `gsu`), a2 = [
      false
    ], o2 = 0, s2 = ``;
    for (let t3 of e2.matchAll(i2)) {
      let { 0: e3, groups: { $skip: i3 } } = t3;
      if (!i3 && (!r2 || r2 === U.DEFAULT == !o2)) {
        n2 instanceof Function ? s2 += n2(t3, {
          context: o2 ? U.CHAR_CLASS : U.DEFAULT,
          negated: a2[a2.length - 1]
        }) : s2 += n2;
        continue;
      }
      e3[0] === `[` ? (o2++, a2.push(e3[1] === `^`)) : e3 === `]` && o2 && (o2--, a2.pop()), s2 += e3;
    }
    return s2;
  }
  function co(e2, t2, n2, r2) {
    so(e2, t2, n2, r2);
  }
  function lo(e2, t2, n2 = 0, r2) {
    if (!new RegExp(t2, `su`).test(e2)) return null;
    let i2 = RegExp(`${t2}|(?<$skip>\\\\?.)`, `gsu`);
    i2.lastIndex = n2;
    let a2 = 0, o2;
    for (; o2 = i2.exec(e2); ) {
      let { 0: e3, groups: { $skip: t3 } } = o2;
      if (!t3 && (!r2 || r2 === U.DEFAULT == !a2)) return o2;
      e3 === `[` ? a2++ : e3 === `]` && a2 && a2--, i2.lastIndex == o2.index && i2.lastIndex++;
    }
    return null;
  }
  function uo(e2, t2, n2) {
    return !!lo(e2, t2, 0, n2);
  }
  function fo(e2, t2) {
    let n2 = /\\?./gsu;
    n2.lastIndex = t2;
    let r2 = e2.length, i2 = 0, a2 = 1, o2;
    for (; o2 = n2.exec(e2); ) {
      let [e3] = o2;
      if (e3 === `[`) i2++;
      else if (i2) e3 === `]` && i2--;
      else if (e3 === `(`) a2++;
      else if (e3 === `)` && (a2--, !a2)) {
        r2 = o2.index;
        break;
      }
    }
    return e2.slice(t2, r2);
  }
  var po = new RegExp(String.raw`(?<noncapturingStart>${io})|(?<capturingStart>\((?:\?<[^>]+>)?)|\\?.`, `gsu`);
  function mo(e2, t2) {
    let n2 = (t2 == null ? void 0 : t2.hiddenCaptures) ?? [], r2 = (t2 == null ? void 0 : t2.captureTransfers) ?? /* @__PURE__ */ new Map();
    if (!/\(\?>/.test(e2)) return {
      pattern: e2,
      captureTransfers: r2,
      hiddenCaptures: n2
    };
    let i2 = [
      0
    ], a2 = [], o2 = 0, s2 = 0, c2 = NaN, l2;
    do {
      l2 = false;
      let t3 = 0, u2 = 0, d2 = false, f2;
      for (po.lastIndex = Number.isNaN(c2) ? 0 : c2 + 7; f2 = po.exec(e2); ) {
        let { 0: p2, index: m2, groups: { capturingStart: h2, noncapturingStart: g2 } } = f2;
        if (p2 === `[`) t3++;
        else if (t3) p2 === `]` && t3--;
        else if (p2 === `(?>` && !d2) c2 = m2, d2 = true;
        else if (d2 && g2) u2++;
        else if (h2) d2 ? u2++ : (o2++, i2.push(o2 + s2));
        else if (p2 === `)` && d2) {
          if (!u2) {
            s2++;
            let t4 = o2 + s2;
            if (e2 = `${e2.slice(0, c2)}(?:(?=(${e2.slice(c2 + 3, m2)}))<$$${t4}>)${e2.slice(m2 + 1)}`, l2 = true, a2.push(t4), ao(n2, t4), r2.size) {
              let e3 = /* @__PURE__ */ new Map();
              r2.forEach((n3, r3) => {
                e3.set(r3 >= t4 ? r3 + 1 : r3, n3.map((e4) => e4 >= t4 ? e4 + 1 : e4));
              }), r2 = e3;
            }
            break;
          }
          u2--;
        }
      }
    } while (l2);
    return n2.push(...a2), e2 = so(e2, String.raw`\\(?<backrefNum>[1-9]\d*)|<\$\$(?<wrappedBackrefNum>\d+)>`, ({ 0: e3, groups: { backrefNum: t3, wrappedBackrefNum: n3 } }) => {
      if (t3) {
        let n4 = +t3;
        if (n4 > i2.length - 1) throw Error(`Backref "${e3}" greater than number of captures`);
        return `\\${i2[n4]}`;
      }
      return `\\${n3}`;
    }, U.DEFAULT), {
      pattern: e2,
      captureTransfers: r2,
      hiddenCaptures: n2
    };
  }
  var ho = String.raw`(?:[?*+]|\{\d+(?:,\d*)?\})`, go = new RegExp(String.raw`
\\(?: \d+
  | c[A-Za-z]
  | [gk]<[^>]+>
  | [pPu]\{[^\}]+\}
  | u[A-Fa-f\d]{4}
  | x[A-Fa-f\d]{2}
  )
| \((?: \? (?: [:=!>]
  | <(?:[=!]|[^>]+>)
  | [A-Za-z\-]+:
  | \(DEFINE\)
  ))?
| (?<qBase>${ho})(?<qMod>[?+]?)(?<invalidQ>[?*+\{]?)
| \\?.
`.replace(/\s+/g, ``), `gsu`);
  function _o(e2) {
    if (!RegExp(`${ho}\\+`).test(e2)) return {
      pattern: e2
    };
    let t2 = [], n2 = null, r2 = null, i2 = ``, a2 = 0, o2;
    for (go.lastIndex = 0; o2 = go.exec(e2); ) {
      let { 0: s2, index: c2, groups: { qBase: l2, qMod: u2, invalidQ: d2 } } = o2;
      if (s2 === `[`) a2 || (r2 = c2), a2++;
      else if (s2 === `]`) a2 ? a2-- : r2 = null;
      else if (!a2) if (u2 === `+` && i2 && !i2.startsWith(`(`)) {
        if (d2) throw Error(`Invalid quantifier "${s2}"`);
        let t3 = -1;
        if (/^\{\d+\}$/.test(l2)) e2 = oo(e2, c2 + l2.length, u2, ``);
        else {
          if (i2 === `)` || i2 === `]`) {
            let t4 = i2 === `)` ? n2 : r2;
            if (t4 === null) throw Error(`Invalid unmatched "${i2}"`);
            e2 = `${e2.slice(0, t4)}(?>${e2.slice(t4, c2)}${l2})${e2.slice(c2 + s2.length)}`;
          } else e2 = `${e2.slice(0, c2 - i2.length)}(?>${i2}${l2})${e2.slice(c2 + s2.length)}`;
          t3 += 4;
        }
        go.lastIndex += t3;
      } else s2[0] === `(` ? t2.push(c2) : s2 === `)` && (n2 = t2.length ? t2.pop() : null);
      i2 = s2;
    }
    return {
      pattern: e2
    };
  }
  var W = String.raw, vo = W`\(\?R=(?<rDepth>[^\)]+)\)|${W`\\g<(?<gRNameOrNum>[^>&]+)&R=(?<gRDepth>[^>]+)>`}`, yo = W`\(\?<(?![=!])(?<captureName>[^>]+)>`, bo = W`${yo}|(?<unnamed>\()(?!\?)`, G = new RegExp(W`${yo}|${vo}|\(\?|\\?.`, `gsu`), xo = `Cannot use multiple overlapping recursions`;
  function So(e2, t2) {
    let { hiddenCaptures: n2, mode: r2 } = {
      hiddenCaptures: [],
      mode: `plugin`,
      ...t2
    }, i2 = (t2 == null ? void 0 : t2.captureTransfers) ?? /* @__PURE__ */ new Map();
    if (!new RegExp(vo, `su`).test(e2)) return {
      pattern: e2,
      captureTransfers: i2,
      hiddenCaptures: n2
    };
    if (r2 === `plugin` && uo(e2, W`\(\?\(DEFINE\)`, U.DEFAULT)) throw Error(`DEFINE groups cannot be used with recursion`);
    let a2 = [], o2 = uo(e2, W`\\[1-9]`, U.DEFAULT), s2 = /* @__PURE__ */ new Map(), c2 = [], l2 = false, u2 = 0, d2 = 0, f2;
    for (G.lastIndex = 0; f2 = G.exec(e2); ) {
      let { 0: t3, groups: { captureName: p2, rDepth: m2, gRNameOrNum: h2, gRDepth: g2 } } = f2;
      if (t3 === `[`) u2++;
      else if (u2) t3 === `]` && u2--;
      else if (m2) {
        if (Co(m2), l2) throw Error(xo);
        if (o2) throw Error(`${r2 === `external` ? `Backrefs` : `Numbered backrefs`} cannot be used with global recursion`);
        let t4 = e2.slice(0, f2.index), s3 = e2.slice(G.lastIndex);
        if (uo(s3, vo, U.DEFAULT)) throw Error(xo);
        let c3 = m2 - 1;
        e2 = wo(t4, s3, c3, false, n2, a2, d2), i2 = Do(i2, t4, c3, a2.length, 0, d2);
        break;
      } else if (h2) {
        Co(g2);
        let u3 = false;
        for (let e3 of c2) if (e3.name === h2 || e3.num === +h2) {
          if (u3 = true, e3.hasRecursedWithin) throw Error(xo);
          break;
        }
        if (!u3) throw Error(W`Recursive \g cannot be used outside the referenced group "${r2 === `external` ? h2 : W`\g<${h2}&R=${g2}>`}"`);
        let p3 = s2.get(h2), m3 = fo(e2, p3);
        if (o2 && uo(m3, W`${yo}|\((?!\?)`, U.DEFAULT)) throw Error(`${r2 === `external` ? `Backrefs` : `Numbered backrefs`} cannot be used with recursion of capturing groups`);
        let _2 = e2.slice(p3, f2.index), ee2 = m3.slice(_2.length + t3.length), te2 = a2.length, ne2 = g2 - 1, re2 = wo(_2, ee2, ne2, true, n2, a2, d2);
        i2 = Do(i2, _2, ne2, a2.length - te2, te2, d2), e2 = `${e2.slice(0, p3)}${re2}${e2.slice(p3 + m3.length)}`, G.lastIndex += re2.length - t3.length - _2.length - ee2.length, c2.forEach((e3) => e3.hasRecursedWithin = true), l2 = true;
      } else if (p2) d2++, s2.set(String(d2), G.lastIndex), s2.set(p2, G.lastIndex), c2.push({
        num: d2,
        name: p2
      });
      else if (t3[0] === `(`) {
        let e3 = t3 === `(`;
        e3 && (d2++, s2.set(String(d2), G.lastIndex)), c2.push(e3 ? {
          num: d2
        } : {});
      } else t3 === `)` && c2.pop();
    }
    return n2.push(...a2), {
      pattern: e2,
      captureTransfers: i2,
      hiddenCaptures: n2
    };
  }
  function Co(e2) {
    let t2 = `Max depth must be integer between 2 and 100; used ${e2}`;
    if (!/^[1-9]\d*$/.test(e2) || (e2 = +e2, e2 < 2 || e2 > 100)) throw Error(t2);
  }
  function wo(e2, t2, n2, r2, i2, a2, o2) {
    let s2 = /* @__PURE__ */ new Set();
    r2 && co(e2 + t2, yo, ({ groups: { captureName: e3 } }) => {
      s2.add(e3);
    }, U.DEFAULT);
    let c2 = [
      n2,
      r2 ? s2 : null,
      i2,
      a2,
      o2
    ];
    return `${e2}${To(`(?:${e2}`, `forward`, ...c2)}(?:)${To(`${t2})`, `backward`, ...c2)}${t2}`;
  }
  function To(e2, t2, n2, r2, i2, a2, o2) {
    let s2 = (e3) => t2 === `forward` ? e3 + 2 : n2 - e3 + 2 - 1, c2 = ``;
    for (let t3 = 0; t3 < n2; t3++) {
      let n3 = s2(t3);
      c2 += so(e2, W`${bo}|\\k<(?<backref>[^>]+)>`, ({ 0: e3, groups: { captureName: t4, unnamed: s3, backref: c3 } }) => {
        if (c3 && r2 && !r2.has(c3)) return e3;
        let l2 = `_$${n3}`;
        if (s3 || t4) {
          let n4 = o2 + a2.length + 1;
          return a2.push(n4), Eo(i2, n4), s3 ? e3 : `(?<${t4}${l2}>`;
        }
        return W`\k<${c3}${l2}>`;
      }, U.DEFAULT);
    }
    return c2;
  }
  function Eo(e2, t2) {
    for (let n2 = 0; n2 < e2.length; n2++) e2[n2] >= t2 && e2[n2]++;
  }
  function Do(e2, t2, n2, r2, i2, a2) {
    if (e2.size && r2) {
      let o2 = 0;
      co(t2, bo, () => o2++, U.DEFAULT);
      let s2 = a2 - o2 + i2, c2 = /* @__PURE__ */ new Map();
      return e2.forEach((e3, t3) => {
        let i3 = (r2 - o2 * n2) / n2, a3 = o2 * n2, l2 = t3 > s2 + o2 ? t3 + r2 : t3, u2 = [];
        for (let t4 of e3) if (t4 <= s2) u2.push(t4);
        else if (t4 > s2 + o2 + i3) u2.push(t4 + r2);
        else if (t4 <= s2 + o2) for (let e4 = 0; e4 <= n2; e4++) u2.push(t4 + o2 * e4);
        else for (let e4 = 0; e4 <= n2; e4++) u2.push(t4 + a3 + i3 * e4);
        c2.set(l2, u2);
      }), c2;
    }
    return e2;
  }
  var K = String.fromCodePoint, q = String.raw, J = {
    flagGroups: /* @__PURE__ */ (() => true)(),
    unicodeSets: /* @__PURE__ */ (() => true)()
  };
  J.bugFlagVLiteralHyphenIsRange = J.unicodeSets ? (() => {
    try {
      new RegExp(q`[\d\-a]`, `v`);
    } catch {
      return true;
    }
    return false;
  })() : false, J.bugNestedClassIgnoresNegation = J.unicodeSets && RegExp(`[[^a]]`, `v`).test(`a`);
  function Oo(e2, { enable: t2, disable: n2 }) {
    return {
      dotAll: !(n2 == null ? void 0 : n2.dotAll) && !!((t2 == null ? void 0 : t2.dotAll) || e2.dotAll),
      ignoreCase: !(n2 == null ? void 0 : n2.ignoreCase) && !!((t2 == null ? void 0 : t2.ignoreCase) || e2.ignoreCase)
    };
  }
  function ko(e2, t2, n2) {
    return e2.has(t2) || e2.set(t2, n2), e2.get(t2);
  }
  function Ao(e2, t2) {
    return Mo[e2] >= Mo[t2];
  }
  function jo(e2, t2) {
    if (e2 == null) throw Error(t2 ?? `Value expected`);
    return e2;
  }
  var Mo = {
    ES2025: 2025,
    ES2024: 2024,
    ES2018: 2018
  }, No = {
    auto: `auto`,
    ES2025: `ES2025`,
    ES2024: `ES2024`,
    ES2018: `ES2018`
  };
  function Po(e2 = {}) {
    if ({}.toString.call(e2) !== `[object Object]`) throw Error(`Unexpected options`);
    if (e2.target !== void 0 && !No[e2.target]) throw Error(`Unexpected target "${e2.target}"`);
    let t2 = {
      accuracy: `default`,
      avoidSubclass: false,
      flags: ``,
      global: false,
      hasIndices: false,
      lazyCompileLength: 1 / 0,
      target: `auto`,
      verbose: false,
      ...e2,
      rules: {
        allowOrphanBackrefs: false,
        asciiWordBoundaries: false,
        captureGroup: false,
        recursionLimit: 20,
        singleline: false,
        ...e2.rules
      }
    };
    return t2.target === `auto` && (t2.target = J.flagGroups ? `ES2025` : J.unicodeSets ? `ES2024` : `ES2018`), t2;
  }
  var Fo = `[	-\r ]`, Io = /* @__PURE__ */ new Set([
    K(304),
    K(305)
  ]), Y = q`[\p{L}\p{M}\p{N}\p{Pc}]`;
  function Lo(e2) {
    if (Io.has(e2)) return [
      e2
    ];
    let t2 = /* @__PURE__ */ new Set(), n2 = e2.toLowerCase(), r2 = n2.toUpperCase(), i2 = Vo.get(n2), a2 = zo.get(n2), o2 = Bo.get(n2);
    return [
      ...r2
    ].length === 1 && t2.add(r2), o2 && t2.add(o2), i2 && t2.add(i2), t2.add(n2), a2 && t2.add(a2), [
      ...t2
    ];
  }
  var Ro = new Map(`C Other
Cc Control cntrl
Cf Format
Cn Unassigned
Co Private_Use
Cs Surrogate
L Letter
LC Cased_Letter
Ll Lowercase_Letter
Lm Modifier_Letter
Lo Other_Letter
Lt Titlecase_Letter
Lu Uppercase_Letter
M Mark Combining_Mark
Mc Spacing_Mark
Me Enclosing_Mark
Mn Nonspacing_Mark
N Number
Nd Decimal_Number digit
Nl Letter_Number
No Other_Number
P Punctuation punct
Pc Connector_Punctuation
Pd Dash_Punctuation
Pe Close_Punctuation
Pf Final_Punctuation
Pi Initial_Punctuation
Po Other_Punctuation
Ps Open_Punctuation
S Symbol
Sc Currency_Symbol
Sk Modifier_Symbol
Sm Math_Symbol
So Other_Symbol
Z Separator
Zl Line_Separator
Zp Paragraph_Separator
Zs Space_Separator
ASCII
ASCII_Hex_Digit AHex
Alphabetic Alpha
Any
Assigned
Bidi_Control Bidi_C
Bidi_Mirrored Bidi_M
Case_Ignorable CI
Cased
Changes_When_Casefolded CWCF
Changes_When_Casemapped CWCM
Changes_When_Lowercased CWL
Changes_When_NFKC_Casefolded CWKCF
Changes_When_Titlecased CWT
Changes_When_Uppercased CWU
Dash
Default_Ignorable_Code_Point DI
Deprecated Dep
Diacritic Dia
Emoji
Emoji_Component EComp
Emoji_Modifier EMod
Emoji_Modifier_Base EBase
Emoji_Presentation EPres
Extended_Pictographic ExtPict
Extender Ext
Grapheme_Base Gr_Base
Grapheme_Extend Gr_Ext
Hex_Digit Hex
IDS_Binary_Operator IDSB
IDS_Trinary_Operator IDST
ID_Continue IDC
ID_Start IDS
Ideographic Ideo
Join_Control Join_C
Logical_Order_Exception LOE
Lowercase Lower
Math
Noncharacter_Code_Point NChar
Pattern_Syntax Pat_Syn
Pattern_White_Space Pat_WS
Quotation_Mark QMark
Radical
Regional_Indicator RI
Sentence_Terminal STerm
Soft_Dotted SD
Terminal_Punctuation Term
Unified_Ideograph UIdeo
Uppercase Upper
Variation_Selector VS
White_Space space
XID_Continue XIDC
XID_Start XIDS`.split(/\s/).map((e2) => [
    $a(e2),
    e2
  ])), zo = /* @__PURE__ */ new Map([
    [
      `s`,
      K(383)
    ],
    [
      K(383),
      `s`
    ]
  ]), Bo = /* @__PURE__ */ new Map([
    [
      K(223),
      K(7838)
    ],
    [
      K(107),
      K(8490)
    ],
    [
      K(229),
      K(8491)
    ],
    [
      K(969),
      K(8486)
    ]
  ]), Vo = new Map([
    X(453),
    X(456),
    X(459),
    X(498),
    ...Wo(8072, 8079),
    ...Wo(8088, 8095),
    ...Wo(8104, 8111),
    X(8124),
    X(8140),
    X(8188)
  ]), Ho = /* @__PURE__ */ new Map([
    [
      `alnum`,
      q`[\p{Alpha}\p{Nd}]`
    ],
    [
      `alpha`,
      q`\p{Alpha}`
    ],
    [
      `ascii`,
      q`\p{ASCII}`
    ],
    [
      `blank`,
      q`[\p{Zs}\t]`
    ],
    [
      `cntrl`,
      q`\p{Cc}`
    ],
    [
      `digit`,
      q`\p{Nd}`
    ],
    [
      `graph`,
      q`[\P{space}&&\P{Cc}&&\P{Cn}&&\P{Cs}]`
    ],
    [
      `lower`,
      q`\p{Lower}`
    ],
    [
      `print`,
      q`[[\P{space}&&\P{Cc}&&\P{Cn}&&\P{Cs}]\p{Zs}]`
    ],
    [
      `punct`,
      q`[\p{P}\p{S}]`
    ],
    [
      `space`,
      q`\p{space}`
    ],
    [
      `upper`,
      q`\p{Upper}`
    ],
    [
      `word`,
      q`[\p{Alpha}\p{M}\p{Nd}\p{Pc}]`
    ],
    [
      `xdigit`,
      q`\p{AHex}`
    ]
  ]);
  function Uo(e2, t2) {
    let n2 = [];
    for (let r2 = e2; r2 <= t2; r2++) n2.push(r2);
    return n2;
  }
  function X(e2) {
    let t2 = K(e2);
    return [
      t2.toLowerCase(),
      t2
    ];
  }
  function Wo(e2, t2) {
    return Uo(e2, t2).map((e3) => X(e3));
  }
  var Go = /* @__PURE__ */ new Set([
    `Lower`,
    `Lowercase`,
    `Upper`,
    `Uppercase`,
    `Ll`,
    `Lowercase_Letter`,
    `Lt`,
    `Titlecase_Letter`,
    `Lu`,
    `Uppercase_Letter`
  ]);
  function Ko(e2, t2) {
    let n2 = {
      accuracy: `default`,
      asciiWordBoundaries: false,
      avoidSubclass: false,
      bestEffortTarget: `ES2025`,
      ...t2
    };
    Xo(e2);
    let r2 = {
      accuracy: n2.accuracy,
      asciiWordBoundaries: n2.asciiWordBoundaries,
      avoidSubclass: n2.avoidSubclass,
      flagDirectivesByAlt: /* @__PURE__ */ new Map(),
      jsGroupNameMap: /* @__PURE__ */ new Map(),
      minTargetEs2024: Ao(n2.bestEffortTarget, `ES2024`),
      passedLookbehind: false,
      strategy: null,
      subroutineRefMap: /* @__PURE__ */ new Map(),
      supportedGNodes: /* @__PURE__ */ new Set(),
      digitIsAscii: e2.flags.digitIsAscii,
      spaceIsAscii: e2.flags.spaceIsAscii,
      wordIsAscii: e2.flags.wordIsAscii
    };
    no(e2, qo, r2);
    let i2 = {
      dotAll: e2.flags.dotAll,
      ignoreCase: e2.flags.ignoreCase
    }, a2 = {
      currentFlags: i2,
      prevFlags: null,
      globalFlags: i2,
      groupOriginByCopy: /* @__PURE__ */ new Map(),
      groupsByName: /* @__PURE__ */ new Map(),
      multiplexCapturesToLeftByRef: /* @__PURE__ */ new Map(),
      openRefs: /* @__PURE__ */ new Map(),
      reffedNodesByReferencer: /* @__PURE__ */ new Map(),
      subroutineRefMap: r2.subroutineRefMap
    };
    return no(e2, Jo, a2), no(e2, Yo, {
      groupsByName: a2.groupsByName,
      highestOrphanBackref: 0,
      numCapturesToLeft: 0,
      reffedNodesByReferencer: a2.reffedNodesByReferencer
    }), e2._originMap = a2.groupOriginByCopy, e2._strategy = r2.strategy, e2;
  }
  var qo = {
    AbsenceFunction({ node: e2, parent: t2, replaceWith: n2 }) {
      let { body: r2, kind: i2 } = e2;
      if (i2 === `repeater`) {
        let e3 = z();
        e3.body[0].body.push(B({
          negate: true,
          body: r2
        }), V(`Any`));
        let i3 = z();
        i3.body[0].body.push(Ua(`greedy`, 0, 1 / 0, e3)), n2($(i3, t2), {
          traverse: true
        });
      } else throw Error(`Unsupported absence function "(?~|"`);
    },
    Alternative: {
      enter({ node: e2, parent: t2, key: n2 }, { flagDirectivesByAlt: r2 }) {
        let i2 = e2.body.filter((e3) => e3.kind === `flags`);
        for (let e3 = n2 + 1; e3 < t2.body.length; e3++) {
          let n3 = t2.body[e3];
          ko(r2, n3, []).push(...i2);
        }
      },
      exit({ node: e2 }, { flagDirectivesByAlt: t2 }) {
        var _a3;
        if ((_a3 = t2.get(e2)) == null ? void 0 : _a3.length) {
          let n2 = rs(t2.get(e2));
          if (n2) {
            let t3 = z({
              flags: n2
            });
            t3.body[0].body = e2.body, e2.body = [
              $(t3, e2)
            ];
          }
        }
      }
    },
    Assertion({ node: e2, parent: t2, key: n2, container: r2, root: i2, remove: a2, replaceWith: o2 }, s2) {
      let { kind: c2, negate: l2 } = e2, { asciiWordBoundaries: u2, avoidSubclass: d2, supportedGNodes: f2, wordIsAscii: p2 } = s2;
      if (c2 === `text_segment_boundary`) throw Error(`Unsupported text segment boundary "\\${l2 ? `Y` : `y`}"`);
      if (c2 === `line_end`) o2($(B({
        body: [
          R({
            body: [
              Ma(`string_end`)
            ]
          }),
          R({
            body: [
              Fa(10)
            ]
          })
        ]
      }), t2));
      else if (c2 === `line_start`) o2($(Z(q`(?<=\A|\n(?!\z))`, {
        skipLookbehindValidation: true
      }), t2));
      else if (c2 === `search_start`) if (f2.has(e2)) i2.flags.sticky = true, a2();
      else {
        let e3 = r2[n2 - 1];
        if (e3 && ls(e3)) o2($(B({
          negate: true
        }), t2));
        else if (d2) throw Error(q`Uses "\G" in a way that requires a subclass`);
        else o2(Q(Ma(`string_start`), t2)), s2.strategy = `clip_search`;
      }
      else if (!(c2 === `string_end` || c2 === `string_start`)) if (c2 === `string_end_newline`) o2($(Z(q`(?=\n?\z)`), t2));
      else if (c2 === `word_boundary`) {
        if (!p2 && !u2) {
          let e3 = `(?:(?<=${Y})(?!${Y})|(?<!${Y})(?=${Y}))`, n3 = `(?:(?<=${Y})(?=${Y})|(?<!${Y})(?!${Y}))`;
          o2($(Z(l2 ? n3 : e3), t2));
        }
      } else throw Error(`Unexpected assertion kind "${c2}"`);
    },
    Backreference({ node: e2 }, { jsGroupNameMap: t2 }) {
      let { ref: n2 } = e2;
      typeof n2 == `string` && !ds(n2) && (n2 = ns(n2, t2), e2.ref = n2);
    },
    CapturingGroup({ node: e2 }, { jsGroupNameMap: t2, subroutineRefMap: n2 }) {
      let { name: r2 } = e2;
      r2 && !ds(r2) && (r2 = ns(r2, t2), e2.name = r2), n2.set(e2.number, e2), r2 && n2.set(r2, e2);
    },
    CharacterClassRange({ node: e2, parent: t2, replaceWith: n2 }) {
      t2.kind === `intersection` && n2($(Ia({
        body: [
          e2
        ]
      }), t2), {
        traverse: true
      });
    },
    CharacterSet({ node: e2, parent: t2, replaceWith: n2 }, { accuracy: r2, minTargetEs2024: i2, digitIsAscii: a2, spaceIsAscii: o2, wordIsAscii: s2 }) {
      let { kind: c2, negate: l2, value: u2 } = e2;
      if (a2 && (c2 === `digit` || u2 === `digit`)) {
        n2(Q(Ra(`digit`, {
          negate: l2
        }), t2));
        return;
      }
      if (o2 && (c2 === `space` || u2 === `space`)) {
        n2($(fs(Z(Fo), l2), t2));
        return;
      }
      if (s2 && (c2 === `word` || u2 === `word`)) {
        n2(Q(Ra(`word`, {
          negate: l2
        }), t2));
        return;
      }
      if (c2 === `any`) n2(Q(V(`Any`), t2));
      else if (c2 === `digit`) n2(Q(V(`Nd`, {
        negate: l2
      }), t2));
      else if (c2 !== `dot`) if (c2 === `text_segment`) {
        if (r2 === `strict`) throw Error(q`Use of "\X" requires non-strict accuracy`);
        let e3 = `\\p{Emoji}(?:\\p{EMod}|\\uFE0F\\u20E3?|[\\x{E0020}-\\x{E007E}]+\\x{E007F})?`, a3 = q`\p{RI}{2}|${e3}(?:\u200D${e3})*`;
        n2($(Z(q`(?>\r\n|${i2 ? q`\p{RGI_Emoji}` : a3}|\P{M}\p{M}*)`, {
          skipPropertyNameValidation: true
        }), t2));
      } else if (c2 === `hex`) n2(Q(V(`AHex`, {
        negate: l2
      }), t2));
      else if (c2 === `newline`) n2($(Z(l2 ? `[^
]` : `(?>\r
?|[
\v\f\x85\u2028\u2029])`), t2));
      else if (c2 === `posix`) if (!i2 && (u2 === `graph` || u2 === `print`)) {
        if (r2 === `strict`) throw Error(`POSIX class "${u2}" requires min target ES2024 or non-strict accuracy`);
        let e3 = {
          graph: `!-~`,
          print: ` -~`
        }[u2];
        l2 && (e3 = `\0-${K(e3.codePointAt(0) - 1)}${K(e3.codePointAt(2) + 1)}-\u{10FFFF}`), n2($(Z(`[${e3}]`), t2));
      } else n2($(fs(Z(Ho.get(u2)), l2), t2));
      else if (c2 === `property`) Ro.has($a(u2)) || (e2.key = `sc`);
      else if (c2 === `space`) n2(Q(V(`space`, {
        negate: l2
      }), t2));
      else if (c2 === `word`) n2($(fs(Z(Y), l2), t2));
      else throw Error(`Unexpected character set kind "${c2}"`);
    },
    Directive({ node: e2, parent: t2, root: n2, remove: r2, replaceWith: i2, removeAllPrevSiblings: a2, removeAllNextSiblings: o2 }) {
      let { kind: s2, flags: c2 } = e2;
      if (s2 === `flags`) if (!c2.enable && !c2.disable) r2();
      else {
        let e3 = z({
          flags: c2
        });
        e3.body[0].body = o2(), i2($(e3, t2), {
          traverse: true
        });
      }
      else if (s2 === `keep`) {
        let e3 = n2.body[0], r3 = n2.body.length === 1 && ya(e3, {
          type: `Group`
        }) && e3.body[0].body.length === 1 ? e3.body[0] : n2;
        if (t2.parent !== r3 || r3.body.length > 1) throw Error(q`Uses "\K" in a way that's unsupported`);
        let o3 = B({
          behind: true
        });
        o3.body[0].body = a2(), i2($(o3, t2));
      } else throw Error(`Unexpected directive kind "${s2}"`);
    },
    Flags({ node: e2, parent: t2 }) {
      if (e2.posixIsAscii) throw Error(`Unsupported flag "P"`);
      if (e2.textSegmentMode === `word`) throw Error(`Unsupported flag "y{w}"`);
      [
        `digitIsAscii`,
        `extended`,
        `posixIsAscii`,
        `spaceIsAscii`,
        `wordIsAscii`,
        `textSegmentMode`
      ].forEach((t3) => delete e2[t3]), Object.assign(e2, {
        global: false,
        hasIndices: false,
        multiline: false,
        sticky: e2.sticky ?? false
      }), t2.options = {
        disable: {
          x: true,
          n: true
        },
        force: {
          v: true
        }
      };
    },
    Group({ node: e2 }) {
      if (!e2.flags) return;
      let { enable: t2, disable: n2 } = e2.flags;
      (t2 == null ? void 0 : t2.extended) && delete t2.extended, (n2 == null ? void 0 : n2.extended) && delete n2.extended, (t2 == null ? void 0 : t2.dotAll) && (n2 == null ? void 0 : n2.dotAll) && delete t2.dotAll, (t2 == null ? void 0 : t2.ignoreCase) && (n2 == null ? void 0 : n2.ignoreCase) && delete t2.ignoreCase, t2 && !Object.keys(t2).length && delete e2.flags.enable, n2 && !Object.keys(n2).length && delete e2.flags.disable, !e2.flags.enable && !e2.flags.disable && delete e2.flags;
    },
    LookaroundAssertion({ node: e2 }, t2) {
      let { kind: n2 } = e2;
      n2 === `lookbehind` && (t2.passedLookbehind = true);
    },
    NamedCallout({ node: e2, parent: t2, replaceWith: n2 }) {
      let { kind: r2 } = e2;
      if (r2 === `fail`) n2($(B({
        negate: true
      }), t2));
      else throw Error(`Unsupported named callout "(*${r2.toUpperCase()}"`);
    },
    Quantifier({ node: e2 }) {
      if (e2.body.type === `Quantifier`) {
        let t2 = z();
        t2.body[0].body.push(e2.body), e2.body = $(t2, e2);
      }
    },
    Regex: {
      enter({ node: e2 }, { supportedGNodes: t2 }) {
        let n2 = [], r2 = false, i2 = false;
        for (let t3 of e2.body) if (t3.body.length === 1 && t3.body[0].kind === `search_start`) t3.body.pop();
        else {
          let e3 = os(t3.body);
          e3 ? (r2 = true, Array.isArray(e3) ? n2.push(...e3) : n2.push(e3)) : i2 = true;
        }
        r2 && !i2 && n2.forEach((e3) => t2.add(e3));
      },
      exit(e2, { accuracy: t2, passedLookbehind: n2, strategy: r2 }) {
        if (t2 === `strict` && n2 && r2) throw Error(q`Uses "\G" in a way that requires non-strict accuracy`);
      }
    },
    Subroutine({ node: e2 }, { jsGroupNameMap: t2 }) {
      let { ref: n2 } = e2;
      typeof n2 == `string` && !ds(n2) && (n2 = ns(n2, t2), e2.ref = n2);
    }
  }, Jo = {
    Backreference({ node: e2 }, { multiplexCapturesToLeftByRef: t2, reffedNodesByReferencer: n2 }) {
      let { orphan: r2, ref: i2 } = e2;
      r2 || n2.set(e2, [
        ...t2.get(i2).map(({ node: e3 }) => e3)
      ]);
    },
    CapturingGroup: {
      enter({ node: e2, parent: t2, replaceWith: n2, skip: r2 }, { groupOriginByCopy: i2, groupsByName: a2, multiplexCapturesToLeftByRef: o2, openRefs: s2, reffedNodesByReferencer: c2 }) {
        let l2 = i2.get(e2);
        if (l2 && s2.has(e2.number)) {
          let r3 = Q(es(e2.number), t2);
          c2.set(r3, s2.get(e2.number)), n2(r3);
          return;
        }
        s2.set(e2.number, e2), o2.set(e2.number, []), e2.name && ko(o2, e2.name, []);
        let u2 = o2.get(e2.name ?? e2.number);
        for (let t3 = 0; t3 < u2.length; t3++) {
          let n3 = u2[t3];
          if (l2 === n3.node || l2 && l2 === n3.origin || e2 === n3.origin) {
            u2.splice(t3, 1);
            break;
          }
        }
        if (o2.get(e2.number).push({
          node: e2,
          origin: l2
        }), e2.name && o2.get(e2.name).push({
          node: e2,
          origin: l2
        }), e2.name) {
          let t3 = ko(a2, e2.name, /* @__PURE__ */ new Map()), n3 = false;
          if (l2) n3 = true;
          else for (let e3 of t3.values()) if (!e3.hasDuplicateNameToRemove) {
            n3 = true;
            break;
          }
          a2.get(e2.name).set(e2, {
            node: e2,
            hasDuplicateNameToRemove: n3
          });
        }
      },
      exit({ node: e2 }, { openRefs: t2 }) {
        t2.delete(e2.number);
      }
    },
    Group: {
      enter({ node: e2 }, t2) {
        t2.prevFlags = t2.currentFlags, e2.flags && (t2.currentFlags = Oo(t2.currentFlags, e2.flags));
      },
      exit(e2, t2) {
        t2.currentFlags = t2.prevFlags;
      }
    },
    Subroutine({ node: e2, parent: t2, replaceWith: n2 }, r2) {
      let { isRecursive: i2, ref: a2 } = e2;
      if (i2) {
        let n3 = t2;
        for (; (n3 = n3.parent) && !(n3.type === `CapturingGroup` && (n3.name === a2 || n3.number === a2)); ) ;
        r2.reffedNodesByReferencer.set(e2, n3);
        return;
      }
      let o2 = r2.subroutineRefMap.get(a2), s2 = a2 === 0, c2 = s2 ? es(0) : $o(o2, r2.groupOriginByCopy, null), l2 = c2;
      if (!s2) {
        let e3 = rs(ts(o2, (e4) => e4.type === `Group` && !!e4.flags)), t3 = e3 ? Oo(r2.globalFlags, e3) : r2.globalFlags;
        Zo(t3, r2.currentFlags) || (l2 = z({
          flags: is(t3)
        }), l2.body[0].body.push(c2));
      }
      n2($(l2, t2), {
        traverse: !s2
      });
    }
  }, Yo = {
    Backreference({ node: e2, parent: t2, replaceWith: n2 }, r2) {
      if (e2.orphan) {
        r2.highestOrphanBackref = Math.max(r2.highestOrphanBackref, e2.ref);
        return;
      }
      let i2 = r2.reffedNodesByReferencer.get(e2).filter((t3) => Qo(t3, e2));
      i2.length ? i2.length > 1 ? n2($(z({
        atomic: true,
        body: i2.reverse().map((e3) => R({
          body: [
            Na(e3.number)
          ]
        }))
      }), t2)) : e2.ref = i2[0].number : n2($(B({
        negate: true
      }), t2));
    },
    CapturingGroup({ node: e2 }, t2) {
      e2.number = ++t2.numCapturesToLeft, e2.name && t2.groupsByName.get(e2.name).get(e2).hasDuplicateNameToRemove && delete e2.name;
    },
    Regex: {
      exit({ node: e2 }, t2) {
        let n2 = Math.max(t2.highestOrphanBackref - t2.numCapturesToLeft, 0);
        for (let t3 = 0; t3 < n2; t3++) {
          let t4 = Pa();
          e2.body.at(-1).body.push(t4);
        }
      }
    },
    Subroutine({ node: e2 }, t2) {
      !e2.isRecursive || e2.ref === 0 || (e2.ref = t2.reffedNodesByReferencer.get(e2).number);
    }
  };
  function Xo(e2) {
    no(e2, {
      "*"({ node: e3, parent: t2 }) {
        e3.parent = t2;
      }
    });
  }
  function Zo(e2, t2) {
    return e2.dotAll === t2.dotAll && e2.ignoreCase === t2.ignoreCase;
  }
  function Qo(e2, t2) {
    let n2 = t2;
    do {
      if (n2.type === `Regex`) return false;
      if (n2.type === `Alternative`) continue;
      if (n2 === e2) return false;
      let t3 = as(n2.parent);
      for (let r2 of t3) {
        if (r2 === n2) break;
        if (r2 === e2 || ss(r2, e2)) return true;
      }
    } while (n2 = n2.parent);
    throw Error(`Unexpected path`);
  }
  function $o(e2, t2, n2, r2) {
    let i2 = Array.isArray(e2) ? [] : {};
    for (let [a2, o2] of Object.entries(e2)) a2 === `parent` ? i2.parent = Array.isArray(n2) ? r2 : n2 : o2 && typeof o2 == `object` ? i2[a2] = $o(o2, t2, i2, n2) : (a2 === `type` && o2 === `CapturingGroup` && t2.set(i2, t2.get(e2) ?? e2), i2[a2] = o2);
    return i2;
  }
  function es(e2) {
    let t2 = Ga(e2);
    return t2.isRecursive = true, t2;
  }
  function ts(e2, t2) {
    let n2 = [];
    for (; e2 = e2.parent; ) (!t2 || t2(e2)) && n2.push(e2);
    return n2;
  }
  function ns(e2, t2) {
    if (t2.has(e2)) return t2.get(e2);
    let n2 = `$${t2.size}_${e2.replace(/^[^$_\p{IDS}]|[^$\u200C\u200D\p{IDC}]/gu, `_`)}`;
    return t2.set(e2, n2), n2;
  }
  function rs(e2) {
    let t2 = [
      `dotAll`,
      `ignoreCase`
    ], n2 = {
      enable: {},
      disable: {}
    };
    return e2.forEach(({ flags: e3 }) => {
      t2.forEach((t3) => {
        var _a3, _b2;
        ((_a3 = e3.enable) == null ? void 0 : _a3[t3]) && (delete n2.disable[t3], n2.enable[t3] = true), ((_b2 = e3.disable) == null ? void 0 : _b2[t3]) && (n2.disable[t3] = true);
      });
    }), Object.keys(n2.enable).length || delete n2.enable, Object.keys(n2.disable).length || delete n2.disable, n2.enable || n2.disable ? n2 : null;
  }
  function is({ dotAll: e2, ignoreCase: t2 }) {
    let n2 = {};
    return (e2 || t2) && (n2.enable = {}, e2 && (n2.enable.dotAll = true), t2 && (n2.enable.ignoreCase = true)), (!e2 || !t2) && (n2.disable = {}, !e2 && (n2.disable.dotAll = true), !t2 && (n2.disable.ignoreCase = true)), n2;
  }
  function as(e2) {
    if (!e2) throw Error(`Node expected`);
    let { body: t2 } = e2;
    return Array.isArray(t2) ? t2 : t2 ? [
      t2
    ] : null;
  }
  function os(e2) {
    let t2 = e2.find((e3) => e3.kind === `search_start` || us(e3, {
      negate: false
    }) || !cs(e3));
    if (!t2) return null;
    if (t2.kind === `search_start`) return t2;
    if (t2.type === `LookaroundAssertion`) return t2.body[0].body[0];
    if (t2.type === `CapturingGroup` || t2.type === `Group`) {
      let e3 = [];
      for (let n2 of t2.body) {
        let t3 = os(n2.body);
        if (!t3) return null;
        Array.isArray(t3) ? e3.push(...t3) : e3.push(t3);
      }
      return e3;
    }
    return null;
  }
  function ss(e2, t2) {
    let n2 = as(e2) ?? [];
    for (let e3 of n2) if (e3 === t2 || ss(e3, t2)) return true;
    return false;
  }
  function cs({ type: e2 }) {
    return e2 === `Assertion` || e2 === `Directive` || e2 === `LookaroundAssertion`;
  }
  function ls(e2) {
    let t2 = [
      `Character`,
      `CharacterClass`,
      `CharacterSet`
    ];
    return t2.includes(e2.type) || e2.type === `Quantifier` && e2.min && t2.includes(e2.body.type);
  }
  function us(e2, t2) {
    let n2 = {
      negate: null,
      ...t2
    };
    return e2.type === `LookaroundAssertion` && (n2.negate === null || e2.negate === n2.negate) && e2.body.length === 1 && ya(e2.body[0], {
      type: `Assertion`,
      kind: `search_start`
    });
  }
  function ds(e2) {
    return /^[$_\p{IDS}][$\u200C\u200D\p{IDC}]*$/u.test(e2);
  }
  function Z(e2, t2) {
    let n2 = Sa(e2, {
      ...t2,
      unicodePropertyMap: Ro
    }).body;
    return n2.length > 1 || n2[0].body.length > 1 ? z({
      body: n2
    }) : n2[0].body[0];
  }
  function fs(e2, t2) {
    return e2.negate = t2, e2;
  }
  function Q(e2, t2) {
    return e2.parent = t2, e2;
  }
  function $(e2, t2) {
    return Xo(e2), e2.parent = t2, e2;
  }
  function ps(e2, t2) {
    let n2 = Po(t2), r2 = Ao(n2.target, `ES2024`), i2 = Ao(n2.target, `ES2025`), a2 = n2.rules.recursionLimit;
    if (!Number.isInteger(a2) || a2 < 2 || a2 > 20) throw Error(`Invalid recursionLimit; use 2-20`);
    let o2 = null, s2 = null;
    if (!i2) {
      let t3 = [
        e2.flags.ignoreCase
      ];
      no(e2, ms, {
        getCurrentModI: () => t3.at(-1),
        popModI() {
          t3.pop();
        },
        pushModI(e3) {
          t3.push(e3);
        },
        setHasCasedChar() {
          t3.at(-1) ? o2 = true : s2 = true;
        }
      });
    }
    let c2 = {
      dotAll: e2.flags.dotAll,
      ignoreCase: !!((e2.flags.ignoreCase || o2) && !s2)
    }, l2 = e2, u2 = {
      accuracy: n2.accuracy,
      appliedGlobalFlags: c2,
      captureMap: /* @__PURE__ */ new Map(),
      currentFlags: {
        dotAll: e2.flags.dotAll,
        ignoreCase: e2.flags.ignoreCase
      },
      inCharClass: false,
      lastNode: l2,
      originMap: e2._originMap,
      recursionLimit: a2,
      useAppliedIgnoreCase: !!(!i2 && o2 && s2),
      useFlagMods: i2,
      useFlagV: r2,
      verbose: n2.verbose
    };
    function d2(e3) {
      return u2.lastNode = l2, l2 = e3, jo(hs[e3.type], `Unexpected node type "${e3.type}"`)(e3, u2, d2);
    }
    let f2 = {
      pattern: e2.body.map(d2).join(`|`),
      flags: d2(e2.flags),
      options: {
        ...e2.options
      }
    };
    return r2 || (delete f2.options.force.v, f2.options.disable.v = true, f2.options.unicodeSetsPlugin = null), f2._captureTransfers = /* @__PURE__ */ new Map(), f2._hiddenCaptures = [], u2.captureMap.forEach((e3, t3) => {
      e3.hidden && f2._hiddenCaptures.push(t3), e3.transferTo && ko(f2._captureTransfers, e3.transferTo, []).push(t3);
    }), f2;
  }
  var ms = {
    "*": {
      enter({ node: e2 }, t2) {
        if (Ds(e2)) {
          let n2 = t2.getCurrentModI();
          t2.pushModI(e2.flags ? Oo({
            ignoreCase: n2
          }, e2.flags).ignoreCase : n2);
        }
      },
      exit({ node: e2 }, t2) {
        Ds(e2) && t2.popModI();
      }
    },
    Backreference(e2, t2) {
      t2.setHasCasedChar();
    },
    Character({ node: e2 }, t2) {
      xs(K(e2.value)) && t2.setHasCasedChar();
    },
    CharacterClassRange({ node: e2, skip: t2 }, n2) {
      t2(), Ss(e2, {
        firstOnly: true
      }).length && n2.setHasCasedChar();
    },
    CharacterSet({ node: e2 }, t2) {
      e2.kind === `property` && Go.has(e2.value) && t2.setHasCasedChar();
    }
  }, hs = {
    Alternative({ body: e2 }, t2, n2) {
      return e2.map(n2).join(``);
    },
    Assertion({ kind: e2, negate: t2 }) {
      if (e2 === `string_end`) return `$`;
      if (e2 === `string_start`) return `^`;
      if (e2 === `word_boundary`) return t2 ? q`\B` : q`\b`;
      throw Error(`Unexpected assertion kind "${e2}"`);
    },
    Backreference({ ref: e2 }, t2) {
      if (typeof e2 != `number`) throw Error(`Unexpected named backref in transformed AST`);
      if (!t2.useFlagMods && t2.accuracy === `strict` && t2.currentFlags.ignoreCase && !t2.captureMap.get(e2).ignoreCase) throw Error(`Use of case-insensitive backref to case-sensitive group requires target ES2025 or non-strict accuracy`);
      return `\\` + e2;
    },
    CapturingGroup(e2, t2, n2) {
      let { body: r2, name: i2, number: a2 } = e2, o2 = {
        ignoreCase: t2.currentFlags.ignoreCase
      }, s2 = t2.originMap.get(e2);
      return s2 && (o2.hidden = true, a2 > s2.number && (o2.transferTo = s2.number)), t2.captureMap.set(a2, o2), `(${i2 ? `?<${i2}>` : ``}${r2.map(n2).join(`|`)})`;
    },
    Character({ value: e2 }, t2) {
      let n2 = K(e2), r2 = Cs(e2, {
        escDigit: t2.lastNode.type === `Backreference`,
        inCharClass: t2.inCharClass,
        useFlagV: t2.useFlagV
      });
      if (r2 !== n2) return r2;
      if (t2.useAppliedIgnoreCase && t2.currentFlags.ignoreCase && xs(n2)) {
        let e3 = Lo(n2);
        return t2.inCharClass ? e3.join(``) : e3.length > 1 ? `[${e3.join(``)}]` : e3[0];
      }
      return n2;
    },
    CharacterClass(e2, t2, n2) {
      let { kind: r2, negate: i2, parent: a2 } = e2, { body: o2 } = e2;
      if (r2 === `intersection` && !t2.useFlagV) throw Error(`Use of character class intersection requires min target ES2024`);
      J.bugFlagVLiteralHyphenIsRange && t2.useFlagV && o2.some(ks) && (o2 = [
        Fa(45),
        ...o2.filter((e3) => !ks(e3))
      ]);
      let s2 = () => `[${i2 ? `^` : ``}${o2.map(n2).join(r2 === `intersection` ? `&&` : ``)}]`;
      if (!t2.inCharClass) {
        if ((!t2.useFlagV || J.bugNestedClassIgnoresNegation) && !i2) {
          let t3 = o2.filter((e3) => e3.type === `CharacterClass` && e3.kind === `union` && e3.negate);
          if (t3.length) {
            let r4 = z(), i3 = r4.body[0];
            return r4.parent = a2, i3.parent = r4, o2 = o2.filter((e3) => !t3.includes(e3)), e2.body = o2, o2.length ? (e2.parent = i3, i3.body.push(e2)) : r4.body.pop(), t3.forEach((e3) => {
              let t4 = R({
                body: [
                  e3
                ]
              });
              e3.parent = t4, t4.parent = r4, r4.body.push(t4);
            }), n2(r4);
          }
        }
        t2.inCharClass = true;
        let r3 = s2();
        return t2.inCharClass = false, r3;
      }
      let c2 = o2[0];
      if (r2 === `union` && !i2 && c2 && ((!t2.useFlagV || !t2.verbose) && a2.kind === `union` && !(J.bugFlagVLiteralHyphenIsRange && t2.useFlagV) || !t2.verbose && a2.kind === `intersection` && o2.length === 1 && c2.type !== `CharacterClassRange`)) return o2.map(n2).join(``);
      if (!t2.useFlagV && a2.type === `CharacterClass`) throw Error(`Uses nested character class in a way that requires min target ES2024`);
      return s2();
    },
    CharacterClassRange(e2, t2) {
      let n2 = e2.min.value, r2 = e2.max.value, i2 = {
        escDigit: false,
        inCharClass: true,
        useFlagV: t2.useFlagV
      }, a2 = Cs(n2, i2), o2 = Cs(r2, i2), s2 = /* @__PURE__ */ new Set();
      return t2.useAppliedIgnoreCase && t2.currentFlags.ignoreCase && ws(Ss(e2)).forEach((e3) => {
        s2.add(Array.isArray(e3) ? `${Cs(e3[0], i2)}-${Cs(e3[1], i2)}` : Cs(e3, i2));
      }), `${a2}-${o2}${[
        ...s2
      ].join(``)}`;
    },
    CharacterSet({ kind: e2, negate: t2, value: n2, key: r2 }, i2) {
      if (e2 === `dot`) return i2.currentFlags.dotAll ? i2.appliedGlobalFlags.dotAll || i2.useFlagMods ? `.` : `[^]` : q`[^\n]`;
      if (e2 === `digit`) return t2 ? q`\D` : q`\d`;
      if (e2 === `property`) {
        if (i2.useAppliedIgnoreCase && i2.currentFlags.ignoreCase && Go.has(n2)) throw Error(`Unicode property "${n2}" can't be case-insensitive when other chars have specific case`);
        return `${t2 ? q`\P` : q`\p`}{${r2 ? `${r2}=` : ``}${n2}}`;
      }
      if (e2 === `word`) return t2 ? q`\W` : q`\w`;
      throw Error(`Unexpected character set kind "${e2}"`);
    },
    Flags(e2, t2) {
      return (t2.appliedGlobalFlags.ignoreCase ? `i` : ``) + (e2.dotAll ? `s` : ``) + (e2.sticky ? `y` : ``);
    },
    Group({ atomic: e2, body: t2, flags: n2, parent: r2 }, i2, a2) {
      let o2 = i2.currentFlags;
      n2 && (i2.currentFlags = Oo(o2, n2));
      let s2 = t2.map(a2).join(`|`), c2 = !i2.verbose && t2.length === 1 && r2.type !== `Quantifier` && !e2 && (!i2.useFlagMods || !n2) ? s2 : `(?${Ts(e2, n2, i2.useFlagMods)}${s2})`;
      return i2.currentFlags = o2, c2;
    },
    LookaroundAssertion({ body: e2, kind: t2, negate: n2 }, r2, i2) {
      return `(?${`${t2 === `lookahead` ? `` : `<`}${n2 ? `!` : `=`}`}${e2.map(i2).join(`|`)})`;
    },
    Quantifier(e2, t2, n2) {
      return n2(e2.body) + Es(e2);
    },
    Subroutine({ isRecursive: e2, ref: t2 }, n2) {
      if (!e2) throw Error(`Unexpected non-recursive subroutine in transformed AST`);
      let r2 = n2.recursionLimit;
      return t2 === 0 ? `(?R=${r2})` : q`\g<${t2}&R=${r2}>`;
    }
  }, gs = /* @__PURE__ */ new Set([
    `$`,
    `(`,
    `)`,
    `*`,
    `+`,
    `.`,
    `?`,
    `[`,
    `\\`,
    `]`,
    `^`,
    `{`,
    `|`,
    `}`
  ]), _s = /* @__PURE__ */ new Set([
    `-`,
    `\\`,
    `]`,
    `^`,
    `[`
  ]), vs = new Set("()-/[\\]^{|}!#$%&*+,.:;<=>?@`~".split(``)), ys = /* @__PURE__ */ new Map([
    [
      9,
      q`\t`
    ],
    [
      10,
      q`\n`
    ],
    [
      11,
      q`\v`
    ],
    [
      12,
      q`\f`
    ],
    [
      13,
      q`\r`
    ],
    [
      8232,
      q`\u2028`
    ],
    [
      8233,
      q`\u2029`
    ],
    [
      65279,
      q`\uFEFF`
    ]
  ]), bs = new RegExp("^\\p{Cased}$", "u");
  function xs(e2) {
    return bs.test(e2);
  }
  function Ss(e2, t2) {
    let n2 = !!(t2 == null ? void 0 : t2.firstOnly), r2 = e2.min.value, i2 = e2.max.value, a2 = [];
    if (r2 < 65 && (i2 === 65535 || i2 >= 131071) || r2 === 65536 && i2 >= 131071) return a2;
    for (let e3 = r2; e3 <= i2; e3++) {
      let t3 = K(e3);
      if (!xs(t3)) continue;
      let o2 = Lo(t3).filter((e4) => {
        let t4 = e4.codePointAt(0);
        return t4 < r2 || t4 > i2;
      });
      if (o2.length && (a2.push(...o2), n2)) break;
    }
    return a2;
  }
  function Cs(e2, { escDigit: t2, inCharClass: n2, useFlagV: r2 }) {
    if (ys.has(e2)) return ys.get(e2);
    if (e2 < 32 || e2 > 126 && e2 < 160 || e2 > 262143 || t2 && Os(e2)) return e2 > 255 ? `\\u{${e2.toString(16).toUpperCase()}}` : `\\x${e2.toString(16).toUpperCase().padStart(2, `0`)}`;
    let i2 = n2 ? r2 ? vs : _s : gs, a2 = K(e2);
    return (i2.has(a2) ? `\\` : ``) + a2;
  }
  function ws(e2) {
    let t2 = e2.map((e3) => e3.codePointAt(0)).sort((e3, t3) => e3 - t3), n2 = [], r2 = null;
    for (let e3 = 0; e3 < t2.length; e3++) t2[e3 + 1] === t2[e3] + 1 ? r2 ?? (r2 = t2[e3]) : r2 === null ? n2.push(t2[e3]) : (n2.push([
      r2,
      t2[e3]
    ]), r2 = null);
    return n2;
  }
  function Ts(e2, t2, n2) {
    if (e2) return `>`;
    let r2 = ``;
    if (t2 && n2) {
      let { enable: e3, disable: n3 } = t2;
      r2 = ((e3 == null ? void 0 : e3.ignoreCase) ? `i` : ``) + ((e3 == null ? void 0 : e3.dotAll) ? `s` : ``) + (n3 ? `-` : ``) + ((n3 == null ? void 0 : n3.ignoreCase) ? `i` : ``) + ((n3 == null ? void 0 : n3.dotAll) ? `s` : ``);
    }
    return `${r2}:`;
  }
  function Es({ kind: e2, max: t2, min: n2 }) {
    let r2;
    return r2 = !n2 && t2 === 1 ? `?` : !n2 && t2 === 1 / 0 ? `*` : n2 === 1 && t2 === 1 / 0 ? `+` : n2 === t2 ? `{${n2}}` : `{${n2},${t2 === 1 / 0 ? `` : t2}}`, r2 + {
      greedy: ``,
      lazy: `?`,
      possessive: `+`
    }[e2];
  }
  function Ds({ type: e2 }) {
    return e2 === `CapturingGroup` || e2 === `Group` || e2 === `LookaroundAssertion`;
  }
  function Os(e2) {
    return e2 > 47 && e2 < 58;
  }
  function ks({ type: e2, value: t2 }) {
    return e2 === `Character` && t2 === 45;
  }
  var As = (_c = class extends RegExp {
    constructor(t2, n2, r2) {
      var __super = (...args) => {
        super(...args);
        __privateAdd(this, _e_instances);
        __privateAdd(this, _e2, /* @__PURE__ */ new Map());
        __privateAdd(this, _t2, null);
        __privateAdd(this, _n2);
        __privateAdd(this, _r2, null);
        __privateAdd(this, _i2, null);
        __publicField(this, "rawOptions", {});
        return this;
      };
      let i2 = !!(r2 == null ? void 0 : r2.lazyCompile);
      if (t2 instanceof RegExp) {
        if (r2) throw Error(`Cannot provide options when copying a regexp`);
        let i3 = t2;
        __super(i3, n2), __privateSet(this, _n2, i3.source), i3 instanceof _c && (__privateSet(this, _e2, __privateGet(i3, _e2)), __privateSet(this, _r2, __privateGet(i3, _r2)), __privateSet(this, _i2, __privateGet(i3, _i2)), this.rawOptions = i3.rawOptions);
      } else {
        let e2 = {
          hiddenCaptures: [],
          strategy: null,
          transfers: [],
          ...r2
        };
        __super(i2 ? `` : t2, n2), __privateSet(this, _n2, t2), __privateSet(this, _e2, Ms(e2.hiddenCaptures, e2.transfers)), __privateSet(this, _i2, e2.strategy), this.rawOptions = r2 ?? {};
      }
      i2 || __privateSet(this, _t2, this);
    }
    get source() {
      return __privateGet(this, _n2) || `(?:)`;
    }
    exec(t2) {
      if (!__privateGet(this, _t2)) {
        let { lazyCompile: t3, ...n3 } = this.rawOptions;
        __privateSet(this, _t2, new _c(__privateGet(this, _n2), this.flags, n3));
      }
      let n2 = this.global || this.sticky, r2 = this.lastIndex;
      if (__privateGet(this, _i2) === `clip_search` && n2 && r2) {
        this.lastIndex = 0;
        let e2 = __privateMethod(this, _e_instances, a_fn).call(this, t2.slice(r2));
        return e2 && (js(e2, r2, t2, this.hasIndices), this.lastIndex += r2), e2;
      }
      return __privateMethod(this, _e_instances, a_fn).call(this, t2);
    }
  }, _e2 = new WeakMap(), _t2 = new WeakMap(), _n2 = new WeakMap(), _r2 = new WeakMap(), _i2 = new WeakMap(), _e_instances = new WeakSet(), a_fn = function(e2) {
    __privateGet(this, _t2).lastIndex = this.lastIndex;
    let t2 = __superGet(_c.prototype, this, "exec").call(__privateGet(this, _t2), e2);
    if (this.lastIndex = __privateGet(this, _t2).lastIndex, !t2 || !__privateGet(this, _e2).size) return t2;
    let n2 = [
      ...t2
    ];
    t2.length = 1;
    let r2;
    this.hasIndices && (r2 = [
      ...t2.indices
    ], t2.indices.length = 1);
    let i2 = [
      0
    ];
    for (let e3 = 1; e3 < n2.length; e3++) {
      let { hidden: a2, transferTo: o2 } = __privateGet(this, _e2).get(e3) ?? {};
      if (a2 ? i2.push(null) : (i2.push(t2.length), t2.push(n2[e3]), this.hasIndices && t2.indices.push(r2[e3])), o2 && n2[e3] !== void 0) {
        let a3 = i2[o2];
        if (!a3) throw Error(`Invalid capture transfer to "${a3}"`);
        if (t2[a3] = n2[e3], this.hasIndices && (t2.indices[a3] = r2[e3]), t2.groups) {
          __privateGet(this, _r2) || __privateSet(this, _r2, Ns(this.source));
          let i3 = __privateGet(this, _r2).get(o2);
          i3 && (t2.groups[i3] = n2[e3], this.hasIndices && (t2.indices.groups[i3] = r2[e3]));
        }
      }
    }
    return t2;
  }, _c);
  function js(e2, t2, n2, r2) {
    if (e2.index += t2, e2.input = n2, r2) {
      let n3 = e2.indices;
      for (let e3 = 0; e3 < n3.length; e3++) {
        let r4 = n3[e3];
        r4 && (n3[e3] = [
          r4[0] + t2,
          r4[1] + t2
        ]);
      }
      let r3 = n3.groups;
      r3 && Object.keys(r3).forEach((e3) => {
        let n4 = r3[e3];
        n4 && (r3[e3] = [
          n4[0] + t2,
          n4[1] + t2
        ]);
      });
    }
  }
  function Ms(e2, t2) {
    let n2 = /* @__PURE__ */ new Map();
    for (let t3 of e2) n2.set(t3, {
      hidden: true
    });
    for (let [e3, r2] of t2) for (let t3 of r2) ko(n2, t3, {}).transferTo = e3;
    return n2;
  }
  function Ns(e2) {
    let t2 = /(?<capture>\((?:\?<(?![=!])(?<name>[^>]+)>|(?!\?)))|\\?./gsu, n2 = /* @__PURE__ */ new Map(), r2 = 0, i2 = 0, a2;
    for (; a2 = t2.exec(e2); ) {
      let { 0: e3, groups: { capture: t3, name: o2 } } = a2;
      e3 === `[` ? r2++ : r2 ? e3 === `]` && r2-- : t3 && (i2++, o2 && n2.set(i2, o2));
    }
    return n2;
  }
  function Ps(e2, t2) {
    let n2 = Fs(e2, t2);
    return n2.options ? new As(n2.pattern, n2.flags, n2.options) : new RegExp(n2.pattern, n2.flags);
  }
  function Fs(e2, t2) {
    let n2 = Po(t2), r2 = Ko(Sa(e2, {
      flags: n2.flags,
      normalizeUnknownPropertyNames: true,
      rules: {
        captureGroup: n2.rules.captureGroup,
        singleline: n2.rules.singleline
      },
      skipBackrefValidation: n2.rules.allowOrphanBackrefs,
      unicodePropertyMap: Ro
    }), {
      accuracy: n2.accuracy,
      asciiWordBoundaries: n2.rules.asciiWordBoundaries,
      avoidSubclass: n2.avoidSubclass,
      bestEffortTarget: n2.target
    }), i2 = ps(r2, n2), a2 = So(i2.pattern, {
      captureTransfers: i2._captureTransfers,
      hiddenCaptures: i2._hiddenCaptures,
      mode: `external`
    }), o2 = mo(_o(a2.pattern).pattern, {
      captureTransfers: a2.captureTransfers,
      hiddenCaptures: a2.hiddenCaptures
    }), s2 = {
      pattern: o2.pattern,
      flags: `${n2.hasIndices ? `d` : ``}${n2.global ? `g` : ``}${i2.flags}${i2.options.disable.v ? `u` : `v`}`
    };
    if (n2.avoidSubclass) {
      if (n2.lazyCompileLength !== 1 / 0) throw Error(`Lazy compilation requires subclass`);
    } else {
      let e3 = o2.hiddenCaptures.sort((e4, t4) => e4 - t4), t3 = Array.from(o2.captureTransfers), i3 = r2._strategy, a3 = s2.pattern.length >= n2.lazyCompileLength;
      (e3.length || t3.length || i3 || a3) && (s2.options = {
        ...e3.length && {
          hiddenCaptures: e3
        },
        ...t3.length && {
          transfers: t3
        },
        ...i3 && {
          strategy: i3
        },
        ...a3 && {
          lazyCompile: a3
        }
      });
    }
    return s2;
  }
  var Is = 4294967295, Ls = class {
    constructor(e2, t2 = {}) {
      __publicField(this, "regexps");
      this.patterns = e2, this.options = t2;
      let { forgiving: n2 = false, cache: r2, regexConstructor: i2 } = t2;
      if (!i2) throw Error("Option `regexConstructor` is not provided");
      this.regexps = e2.map((e3) => {
        if (typeof e3 != `string`) return e3;
        let t3 = r2 == null ? void 0 : r2.get(e3);
        if (t3) {
          if (t3 instanceof RegExp) return t3;
          if (n2) return null;
          throw t3;
        }
        try {
          let t4 = i2(e3);
          return r2 == null ? void 0 : r2.set(e3, t4), t4;
        } catch (t4) {
          if (r2 == null ? void 0 : r2.set(e3, t4), n2) return null;
          throw t4;
        }
      });
    }
    findNextMatchSync(e2, t2, n2) {
      let r2 = typeof e2 == `string` ? e2 : e2.content, i2 = [];
      function a2(e3, t3, n3 = 0) {
        return {
          index: e3,
          captureIndices: t3.indices.map((e4) => e4 == null ? {
            start: Is,
            end: Is,
            length: 0
          } : {
            start: e4[0] + n3,
            end: e4[1] + n3,
            length: e4[1] - e4[0]
          })
        };
      }
      for (let e3 = 0; e3 < this.regexps.length; e3++) {
        let n3 = this.regexps[e3];
        if (n3) try {
          n3.lastIndex = t2;
          let o2 = n3.exec(r2);
          if (!o2) continue;
          if (o2.index === t2) return a2(e3, o2, 0);
          i2.push([
            e3,
            o2,
            0
          ]);
        } catch (e4) {
          if (this.options.forgiving) continue;
          throw e4;
        }
      }
      if (i2.length) {
        let e3 = Math.min(...i2.map((e4) => e4[1].index));
        for (let [t3, n3, r3] of i2) if (n3.index === e3) return a2(t3, n3, r3);
      }
      return null;
    }
  };
  function Rs(e2, t2) {
    return Ps(e2, {
      global: true,
      hasIndices: true,
      lazyCompileLength: 3e3,
      rules: {
        allowOrphanBackrefs: true,
        asciiWordBoundaries: true,
        captureGroup: true,
        recursionLimit: 5,
        singleline: true
      },
      ...t2
    });
  }
  zs = function(e2 = {}) {
    let t2 = Object.assign({
      target: `auto`,
      cache: /* @__PURE__ */ new Map()
    }, e2);
    return t2.regexConstructor || (t2.regexConstructor = (e3) => Rs(e3, {
      target: t2.target
    })), {
      createScanner(e3) {
        return new Ls(e3, t2);
      },
      createString(e3) {
        return {
          content: e3
        };
      }
    };
  };
  let Gs;
  Bs = [
    Object.freeze(JSON.parse(`{"displayName":"JavaScript","name":"javascript","patterns":[{"include":"#directives"},{"include":"#statements"},{"include":"#shebang"}],"repository":{"access-modifier":{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(abstract|declare|override|public|protected|private|readonly|static)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"storage.modifier.js"},"after-operator-block-as-object-literal":{"begin":"(?<!\\\\+\\\\+|--)(?<=[!(+,:=>?\\\\[]|^await|[^$._[:alnum:]]await|^return|[^$._[:alnum:]]return|^yield|[^$._[:alnum:]]yield|^throw|[^$._[:alnum:]]throw|^in|[^$._[:alnum:]]in|^of|[^$._[:alnum:]]of|^typeof|[^$._[:alnum:]]typeof|&&|\\\\|\\\\||\\\\*)\\\\s*(\\\\{)","beginCaptures":{"1":{"name":"punctuation.definition.block.js"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.block.js"}},"name":"meta.objectliteral.js","patterns":[{"include":"#object-member"}]},"array-binding-pattern":{"begin":"(?:(\\\\.\\\\.\\\\.)\\\\s*)?(\\\\[)","beginCaptures":{"1":{"name":"keyword.operator.rest.js"},"2":{"name":"punctuation.definition.binding-pattern.array.js"}},"end":"]","endCaptures":{"0":{"name":"punctuation.definition.binding-pattern.array.js"}},"patterns":[{"include":"#binding-element"},{"include":"#punctuation-comma"}]},"array-binding-pattern-const":{"begin":"(?:(\\\\.\\\\.\\\\.)\\\\s*)?(\\\\[)","beginCaptures":{"1":{"name":"keyword.operator.rest.js"},"2":{"name":"punctuation.definition.binding-pattern.array.js"}},"end":"]","endCaptures":{"0":{"name":"punctuation.definition.binding-pattern.array.js"}},"patterns":[{"include":"#binding-element-const"},{"include":"#punctuation-comma"}]},"array-literal":{"begin":"\\\\s*(\\\\[)","beginCaptures":{"1":{"name":"meta.brace.square.js"}},"end":"]","endCaptures":{"0":{"name":"meta.brace.square.js"}},"name":"meta.array.literal.js","patterns":[{"include":"#expression"},{"include":"#punctuation-comma"}]},"arrow-function":{"patterns":[{"captures":{"1":{"name":"storage.modifier.async.js"},"2":{"name":"variable.parameter.js"}},"match":"(?:(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))\\\\b(async)\\\\s+)?([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(?==>)","name":"meta.arrow.js"},{"begin":"(?:(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))\\\\b(async))?((?<![]!)}])\\\\s*(?=((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|(<\\\\s*[$_[:alpha:]][$_[:alnum:]]*\\\\s+extends\\\\s*[^=>])|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\"'()\`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>)))","beginCaptures":{"1":{"name":"storage.modifier.async.js"}},"end":"(?==>|\\\\{|^(\\\\s*(export|function|class|interface|let|var|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|const|import|enum|namespace|module|type|abstract|declare)\\\\s+))","name":"meta.arrow.js","patterns":[{"include":"#comment"},{"include":"#type-parameters"},{"include":"#function-parameters"},{"include":"#arrow-return-type"},{"include":"#possibly-arrow-return-type"}]},{"begin":"=>","beginCaptures":{"0":{"name":"storage.type.function.arrow.js"}},"end":"((?<=[}\\\\S])(?<!=>)|((?!\\\\{)(?=\\\\S)))(?!/[*/])","name":"meta.arrow.js","patterns":[{"include":"#single-line-comment-consuming-line-ending"},{"include":"#decl-block"},{"include":"#expression"}]}]},"arrow-return-type":{"begin":"(?<=\\\\))\\\\s*(:)","beginCaptures":{"1":{"name":"keyword.operator.type.annotation.js"}},"end":"(?==>|\\\\{|^(\\\\s*(export|function|class|interface|let|var|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|const|import|enum|namespace|module|type|abstract|declare)\\\\s+))","name":"meta.return.type.arrow.js","patterns":[{"include":"#arrow-return-type-body"}]},"arrow-return-type-body":{"patterns":[{"begin":"(?<=:)(?=\\\\s*\\\\{)","end":"(?<=})","patterns":[{"include":"#type-object"}]},{"include":"#type-predicate-operator"},{"include":"#type"}]},"async-modifier":{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(async)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"storage.modifier.async.js"},"binding-element":{"patterns":[{"include":"#comment"},{"include":"#string"},{"include":"#numeric-literal"},{"include":"#regex"},{"include":"#object-binding-pattern"},{"include":"#array-binding-pattern"},{"include":"#destructuring-variable-rest"},{"include":"#variable-initializer"}]},"binding-element-const":{"patterns":[{"include":"#comment"},{"include":"#string"},{"include":"#numeric-literal"},{"include":"#regex"},{"include":"#object-binding-pattern-const"},{"include":"#array-binding-pattern-const"},{"include":"#destructuring-variable-rest-const"},{"include":"#variable-initializer"}]},"boolean-literal":{"patterns":[{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))true(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"constant.language.boolean.true.js"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))false(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"constant.language.boolean.false.js"}]},"brackets":{"patterns":[{"begin":"\\\\{","end":"}|(?=\\\\*/)","patterns":[{"include":"#brackets"}]},{"begin":"\\\\[","end":"]|(?=\\\\*/)","patterns":[{"include":"#brackets"}]}]},"cast":{"patterns":[{"include":"#jsx"}]},"class-declaration":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(?:(abstract)\\\\s+)?\\\\b(class)\\\\b(?=\\\\s+|/[*/])","beginCaptures":{"1":{"name":"keyword.control.export.js"},"2":{"name":"storage.modifier.js"},"3":{"name":"storage.modifier.js"},"4":{"name":"storage.type.class.js"}},"end":"(?<=})","name":"meta.class.js","patterns":[{"include":"#class-declaration-or-expression-patterns"}]},"class-declaration-or-expression-patterns":{"patterns":[{"include":"#comment"},{"include":"#class-or-interface-heritage"},{"captures":{"0":{"name":"entity.name.type.class.js"}},"match":"[$_[:alpha:]][$_[:alnum:]]*"},{"include":"#type-parameters"},{"include":"#class-or-interface-body"}]},"class-expression":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(abstract)\\\\s+)?(class)\\\\b(?=\\\\s+|[<{]|/[*/])","beginCaptures":{"1":{"name":"storage.modifier.js"},"2":{"name":"storage.type.class.js"}},"end":"(?<=})","name":"meta.class.js","patterns":[{"include":"#class-declaration-or-expression-patterns"}]},"class-or-interface-body":{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.definition.block.js"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.block.js"}},"patterns":[{"include":"#comment"},{"include":"#decorator"},{"begin":"(?<=:)\\\\s*","end":"(?=[-\\\\])+,:;}\\\\s]|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)","patterns":[{"include":"#expression"}]},{"include":"#method-declaration"},{"include":"#indexer-declaration"},{"include":"#field-declaration"},{"include":"#string"},{"include":"#type-annotation"},{"include":"#variable-initializer"},{"include":"#access-modifier"},{"include":"#property-accessor"},{"include":"#async-modifier"},{"include":"#after-operator-block-as-object-literal"},{"include":"#decl-block"},{"include":"#expression"},{"include":"#punctuation-comma"},{"include":"#punctuation-semicolon"}]},"class-or-interface-heritage":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))\\\\b(extends|implements)\\\\b(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","beginCaptures":{"1":{"name":"storage.modifier.js"}},"end":"(?=\\\\{)","patterns":[{"include":"#comment"},{"include":"#class-or-interface-heritage"},{"include":"#type-parameters"},{"include":"#expressionWithoutIdentifiers"},{"captures":{"1":{"name":"entity.name.type.module.js"},"2":{"name":"punctuation.accessor.js"},"3":{"name":"punctuation.accessor.optional.js"}},"match":"([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))(?=\\\\s*[$_[:alpha:]][$_[:alnum:]]*(\\\\s*\\\\??\\\\.\\\\s*[$_[:alpha:]][$_[:alnum:]]*)*\\\\s*)"},{"captures":{"1":{"name":"entity.other.inherited-class.js"}},"match":"([$_[:alpha:]][$_[:alnum:]]*)"},{"include":"#expressionPunctuations"}]},"comment":{"patterns":[{"begin":"/\\\\*\\\\*(?!/)","beginCaptures":{"0":{"name":"punctuation.definition.comment.js"}},"end":"\\\\*/","endCaptures":{"0":{"name":"punctuation.definition.comment.js"}},"name":"comment.block.documentation.js","patterns":[{"include":"#docblock"}]},{"begin":"(/\\\\*)(?:\\\\s*((@)internal)(?=\\\\s|(\\\\*/)))?","beginCaptures":{"1":{"name":"punctuation.definition.comment.js"},"2":{"name":"storage.type.internaldeclaration.js"},"3":{"name":"punctuation.decorator.internaldeclaration.js"}},"end":"\\\\*/","endCaptures":{"0":{"name":"punctuation.definition.comment.js"}},"name":"comment.block.js"},{"begin":"(^[\\\\t ]+)?((//)(?:\\\\s*((@)internal)(?=\\\\s|$))?)","beginCaptures":{"1":{"name":"punctuation.whitespace.comment.leading.js"},"2":{"name":"comment.line.double-slash.js"},"3":{"name":"punctuation.definition.comment.js"},"4":{"name":"storage.type.internaldeclaration.js"},"5":{"name":"punctuation.decorator.internaldeclaration.js"}},"contentName":"comment.line.double-slash.js","end":"(?=$)"}]},"control-statement":{"patterns":[{"include":"#switch-statement"},{"include":"#for-loop"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(catch|finally|throw|try)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.control.trycatch.js"},{"captures":{"1":{"name":"keyword.control.loop.js"},"2":{"name":"entity.name.label.js"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(break|continue|goto)\\\\s+([$_[:alpha:]][$_[:alnum:]]*)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(break|continue|do|goto|while)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.control.loop.js"},{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(return)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","beginCaptures":{"0":{"name":"keyword.control.flow.js"}},"end":"(?=[;}]|$|;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)","patterns":[{"include":"#expression"}]},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(case|default|switch)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.control.switch.js"},{"include":"#if-statement"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(else|if)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.control.conditional.js"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(with)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.control.with.js"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(package)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.control.js"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(debugger)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.other.debugger.js"}]},"decl-block":{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.definition.block.js"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.block.js"}},"name":"meta.block.js","patterns":[{"include":"#statements"}]},"declaration":{"patterns":[{"include":"#decorator"},{"include":"#var-expr"},{"include":"#function-declaration"},{"include":"#class-declaration"},{"include":"#interface-declaration"},{"include":"#enum-declaration"},{"include":"#namespace-declaration"},{"include":"#type-alias-declaration"},{"include":"#import-equals-declaration"},{"include":"#import-declaration"},{"include":"#export-declaration"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(declare|export)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"storage.modifier.js"}]},"decorator":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))@","beginCaptures":{"0":{"name":"punctuation.decorator.js"}},"end":"(?=\\\\s)","name":"meta.decorator.js","patterns":[{"include":"#expression"}]},"destructuring-const":{"patterns":[{"begin":"(?<![:=]|^of|[^$._[:alnum:]]of|^in|[^$._[:alnum:]]in)\\\\s*(?=\\\\{)","end":"(?=$|^|[,;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+))","name":"meta.object-binding-pattern-variable.js","patterns":[{"include":"#object-binding-pattern-const"},{"include":"#type-annotation"},{"include":"#comment"}]},{"begin":"(?<![:=]|^of|[^$._[:alnum:]]of|^in|[^$._[:alnum:]]in)\\\\s*(?=\\\\[)","end":"(?=$|^|[,;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+))","name":"meta.array-binding-pattern-variable.js","patterns":[{"include":"#array-binding-pattern-const"},{"include":"#type-annotation"},{"include":"#comment"}]}]},"destructuring-parameter":{"patterns":[{"begin":"(?<![:=])\\\\s*(?:(\\\\.\\\\.\\\\.)\\\\s*)?(\\\\{)","beginCaptures":{"1":{"name":"keyword.operator.rest.js"},"2":{"name":"punctuation.definition.binding-pattern.object.js"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.binding-pattern.object.js"}},"name":"meta.parameter.object-binding-pattern.js","patterns":[{"include":"#parameter-object-binding-element"}]},{"begin":"(?<![:=])\\\\s*(?:(\\\\.\\\\.\\\\.)\\\\s*)?(\\\\[)","beginCaptures":{"1":{"name":"keyword.operator.rest.js"},"2":{"name":"punctuation.definition.binding-pattern.array.js"}},"end":"]","endCaptures":{"0":{"name":"punctuation.definition.binding-pattern.array.js"}},"name":"meta.paramter.array-binding-pattern.js","patterns":[{"include":"#parameter-binding-element"},{"include":"#punctuation-comma"}]}]},"destructuring-parameter-rest":{"captures":{"1":{"name":"keyword.operator.rest.js"},"2":{"name":"variable.parameter.js"}},"match":"(?:(\\\\.\\\\.\\\\.)\\\\s*)?([$_[:alpha:]][$_[:alnum:]]*)"},"destructuring-variable":{"patterns":[{"begin":"(?<![:=]|^of|[^$._[:alnum:]]of|^in|[^$._[:alnum:]]in)\\\\s*(?=\\\\{)","end":"(?=$|^|[,;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+))","name":"meta.object-binding-pattern-variable.js","patterns":[{"include":"#object-binding-pattern"},{"include":"#type-annotation"},{"include":"#comment"}]},{"begin":"(?<![:=]|^of|[^$._[:alnum:]]of|^in|[^$._[:alnum:]]in)\\\\s*(?=\\\\[)","end":"(?=$|^|[,;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+))","name":"meta.array-binding-pattern-variable.js","patterns":[{"include":"#array-binding-pattern"},{"include":"#type-annotation"},{"include":"#comment"}]}]},"destructuring-variable-rest":{"captures":{"1":{"name":"keyword.operator.rest.js"},"2":{"name":"meta.definition.variable.js variable.other.readwrite.js"}},"match":"(?:(\\\\.\\\\.\\\\.)\\\\s*)?([$_[:alpha:]][$_[:alnum:]]*)"},"destructuring-variable-rest-const":{"captures":{"1":{"name":"keyword.operator.rest.js"},"2":{"name":"meta.definition.variable.js variable.other.constant.js"}},"match":"(?:(\\\\.\\\\.\\\\.)\\\\s*)?([$_[:alpha:]][$_[:alnum:]]*)"},"directives":{"begin":"^(///)\\\\s*(?=<(reference|amd-dependency|amd-module)(\\\\s+(path|types|no-default-lib|lib|name|resolution-mode)\\\\s*=\\\\s*(('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`)))+\\\\s*/>\\\\s*$)","beginCaptures":{"1":{"name":"punctuation.definition.comment.js"}},"end":"(?=$)","name":"comment.line.triple-slash.directive.js","patterns":[{"begin":"(<)(reference|amd-dependency|amd-module)","beginCaptures":{"1":{"name":"punctuation.definition.tag.directive.js"},"2":{"name":"entity.name.tag.directive.js"}},"end":"/>","endCaptures":{"0":{"name":"punctuation.definition.tag.directive.js"}},"name":"meta.tag.js","patterns":[{"match":"path|types|no-default-lib|lib|name|resolution-mode","name":"entity.other.attribute-name.directive.js"},{"match":"=","name":"keyword.operator.assignment.js"},{"include":"#string"}]}]},"docblock":{"patterns":[{"captures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"},"3":{"name":"constant.language.access-type.jsdoc"}},"match":"((@)a(?:ccess|pi))\\\\s+(p(?:rivate|rotected|ublic))\\\\b"},{"captures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"},"3":{"name":"entity.name.type.instance.jsdoc"},"4":{"name":"punctuation.definition.bracket.angle.begin.jsdoc"},"5":{"name":"constant.other.email.link.underline.jsdoc"},"6":{"name":"punctuation.definition.bracket.angle.end.jsdoc"}},"match":"((@)author)\\\\s+([^*/<>@\\\\s](?:[^*/<>@]|\\\\*[^/])*)(?:\\\\s*(<)([^>\\\\s]+)(>))?"},{"captures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"},"3":{"name":"entity.name.type.instance.jsdoc"},"4":{"name":"keyword.operator.control.jsdoc"},"5":{"name":"entity.name.type.instance.jsdoc"}},"match":"((@)borrows)\\\\s+((?:[^*/@\\\\s]|\\\\*[^/])+)\\\\s+(as)\\\\s+((?:[^*/@\\\\s]|\\\\*[^/])+)"},{"begin":"((@)example)\\\\s+","beginCaptures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"}},"end":"(?=@|\\\\*/)","name":"meta.example.jsdoc","patterns":[{"match":"^\\\\s\\\\*\\\\s+"},{"begin":"\\\\G(<)caption(>)","beginCaptures":{"0":{"name":"entity.name.tag.inline.jsdoc"},"1":{"name":"punctuation.definition.bracket.angle.begin.jsdoc"},"2":{"name":"punctuation.definition.bracket.angle.end.jsdoc"}},"contentName":"constant.other.description.jsdoc","end":"(</)caption(>)|(?=\\\\*/)","endCaptures":{"0":{"name":"entity.name.tag.inline.jsdoc"},"1":{"name":"punctuation.definition.bracket.angle.begin.jsdoc"},"2":{"name":"punctuation.definition.bracket.angle.end.jsdoc"}}},{"captures":{"0":{"name":"source.embedded.js"}},"match":"[^*@\\\\s](?:[^*]|\\\\*[^/])*"}]},{"captures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"},"3":{"name":"constant.language.symbol-type.jsdoc"}},"match":"((@)kind)\\\\s+(class|constant|event|external|file|function|member|mixin|module|namespace|typedef)\\\\b"},{"captures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"},"3":{"name":"variable.other.link.underline.jsdoc"},"4":{"name":"entity.name.type.instance.jsdoc"}},"match":"((@)see)\\\\s+(?:((?=https?://)(?:[^*\\\\s]|\\\\*[^/])+)|((?!https?://|(?:\\\\[[^]\\\\[]*])?\\\\{@(?:link|linkcode|linkplain|tutorial)\\\\b)(?:[^*/@\\\\s]|\\\\*[^/])+))"},{"captures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"},"3":{"name":"variable.other.jsdoc"}},"match":"((@)template)\\\\s+([$A-Z_a-z][]$.\\\\[\\\\w]*(?:\\\\s*,\\\\s*[$A-Z_a-z][]$.\\\\[\\\\w]*)*)"},{"begin":"((@)template)\\\\s+(?=\\\\{)","beginCaptures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"}},"end":"(?=\\\\s|\\\\*/|[^]$A-\\\\[_a-{}])","patterns":[{"include":"#jsdoctype"},{"match":"([$A-Z_a-z][]$.\\\\[\\\\w]*)","name":"variable.other.jsdoc"}]},{"captures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"},"3":{"name":"variable.other.jsdoc"}},"match":"((@)(?:arg|argument|const|constant|member|namespace|param|var))\\\\s+([$A-Z_a-z][]$.\\\\[\\\\w]*)"},{"begin":"((@)typedef)\\\\s+(?=\\\\{)","beginCaptures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"}},"end":"(?=\\\\s|\\\\*/|[^]$A-\\\\[_a-{}])","patterns":[{"include":"#jsdoctype"},{"match":"(?:[^*/@\\\\s]|\\\\*[^/])+","name":"entity.name.type.instance.jsdoc"}]},{"begin":"((@)(?:arg|argument|const|constant|member|namespace|param|prop|property|var))\\\\s+(?=\\\\{)","beginCaptures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"}},"end":"(?=\\\\s|\\\\*/|[^]$A-\\\\[_a-{}])","patterns":[{"include":"#jsdoctype"},{"match":"([$A-Z_a-z][]$.\\\\[\\\\w]*)","name":"variable.other.jsdoc"},{"captures":{"1":{"name":"punctuation.definition.optional-value.begin.bracket.square.jsdoc"},"2":{"name":"keyword.operator.assignment.jsdoc"},"3":{"name":"source.embedded.js"},"4":{"name":"punctuation.definition.optional-value.end.bracket.square.jsdoc"},"5":{"name":"invalid.illegal.syntax.jsdoc"}},"match":"(\\\\[)\\\\s*[$\\\\w]+(?:(?:\\\\[])?\\\\.[$\\\\w]+)*(?:\\\\s*(=)\\\\s*((?>\\"(?:\\\\*(?!/)|\\\\\\\\(?!\\")|[^*\\\\\\\\])*?\\"|'(?:\\\\*(?!/)|\\\\\\\\(?!')|[^*\\\\\\\\])*?'|\\\\[(?:\\\\*(?!/)|[^*])*?]|(?:\\\\*(?!/)|\\\\s(?!\\\\s*])|\\\\[.*?(?:]|(?=\\\\*/))|[^]*\\\\[\\\\s])*)*))?\\\\s*(?:(])((?:[^*\\\\s]|\\\\*[^/\\\\s])+)?|(?=\\\\*/))","name":"variable.other.jsdoc"}]},{"begin":"((@)(?:define|enum|exception|export|extends|lends|implements|modifies|namespace|private|protected|returns?|satisfies|suppress|this|throws|type|yields?))\\\\s+(?=\\\\{)","beginCaptures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"}},"end":"(?=\\\\s|\\\\*/|[^]$A-\\\\[_a-{}])","patterns":[{"include":"#jsdoctype"}]},{"captures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"},"3":{"name":"entity.name.type.instance.jsdoc"}},"match":"((@)(?:alias|augments|callback|constructs|emits|event|fires|exports?|extends|external|function|func|host|lends|listens|interface|memberof!?|method|module|mixes|mixin|name|requires|see|this|typedef|uses))\\\\s+((?:[^*@{}\\\\s]|\\\\*[^/])+)"},{"begin":"((@)(?:default(?:value)?|license|version))\\\\s+(([\\"']))","beginCaptures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"},"3":{"name":"variable.other.jsdoc"},"4":{"name":"punctuation.definition.string.begin.jsdoc"}},"contentName":"variable.other.jsdoc","end":"(\\\\3)|(?=$|\\\\*/)","endCaptures":{"0":{"name":"variable.other.jsdoc"},"1":{"name":"punctuation.definition.string.end.jsdoc"}}},{"captures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"},"3":{"name":"variable.other.jsdoc"}},"match":"((@)(?:default(?:value)?|license|tutorial|variation|version))\\\\s+([^*\\\\s]+)"},{"captures":{"1":{"name":"punctuation.definition.block.tag.jsdoc"}},"match":"(@)(?:abstract|access|alias|api|arg|argument|async|attribute|augments|author|beta|borrows|bubbles|callback|chainable|class|classdesc|code|config|const|constant|constructor|constructs|copyright|default|defaultvalue|define|deprecated|desc|description|dict|emits|enum|event|example|exception|exports?|extends|extension(?:_?for)?|external|externs|file|fileoverview|final|fires|for|func|function|generator|global|hideconstructor|host|ignore|implements|implicitCast|inherit[Dd]oc|inner|instance|interface|internal|kind|lends|license|listens|main|member|memberof!?|method|mixes|mixins?|modifies|module|name|namespace|noalias|nocollapse|nocompile|nosideeffects|override|overview|package|param|polymer(?:Behavior)?|preserve|private|prop|property|protected|public|read[Oo]nly|record|require[ds]|returns?|see|since|static|struct|submodule|summary|suppress|template|this|throws|todo|tutorial|type|typedef|unrestricted|uses|var|variation|version|virtual|writeOnce|yields?)\\\\b","name":"storage.type.class.jsdoc"},{"include":"#inline-tags"},{"captures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"}},"match":"((@)[$_[:alpha:]][$_[:alnum:]]*)(?=\\\\s+)"}]},"enum-declaration":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?(?:\\\\b(const)\\\\s+)?\\\\b(enum)\\\\s+([$_[:alpha:]][$_[:alnum:]]*)","beginCaptures":{"1":{"name":"keyword.control.export.js"},"2":{"name":"storage.modifier.js"},"3":{"name":"storage.modifier.js"},"4":{"name":"storage.type.enum.js"},"5":{"name":"entity.name.type.enum.js"}},"end":"(?<=})","name":"meta.enum.declaration.js","patterns":[{"include":"#comment"},{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.definition.block.js"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.block.js"}},"patterns":[{"include":"#comment"},{"begin":"([$_[:alpha:]][$_[:alnum:]]*)","beginCaptures":{"0":{"name":"variable.other.enummember.js"}},"end":"(?=[,}]|$)","patterns":[{"include":"#comment"},{"include":"#variable-initializer"}]},{"begin":"(?=(('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`)|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])+])))","end":"(?=[,}]|$)","patterns":[{"include":"#string"},{"include":"#array-literal"},{"include":"#comment"},{"include":"#variable-initializer"}]},{"include":"#punctuation-comma"}]}]},"export-declaration":{"patterns":[{"captures":{"1":{"name":"keyword.control.export.js"},"2":{"name":"keyword.control.as.js"},"3":{"name":"storage.type.namespace.js"},"4":{"name":"entity.name.type.module.js"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(export)\\\\s+(as)\\\\s+(namespace)\\\\s+([$_[:alpha:]][$_[:alnum:]]*)"},{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(export)(?:\\\\s+(type))?(?:\\\\s*(=)|\\\\s+(default)(?=\\\\s+))","beginCaptures":{"1":{"name":"keyword.control.export.js"},"2":{"name":"keyword.control.type.js"},"3":{"name":"keyword.operator.assignment.js"},"4":{"name":"keyword.control.default.js"}},"end":"(?=$|;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)","name":"meta.export.default.js","patterns":[{"include":"#interface-declaration"},{"include":"#expression"}]},{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(export)(?:\\\\s+(type))?\\\\b(?!(\\\\$)|(\\\\s*:))((?=\\\\s*[*{])|((?=\\\\s*[$_[:alpha:]][$_[:alnum:]]*([,\\\\s]))(?!\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)))","beginCaptures":{"1":{"name":"keyword.control.export.js"},"2":{"name":"keyword.control.type.js"}},"end":"(?=$|;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)","name":"meta.export.js","patterns":[{"include":"#import-export-declaration"}]}]},"expression":{"patterns":[{"include":"#expressionWithoutIdentifiers"},{"include":"#identifiers"},{"include":"#expressionPunctuations"}]},"expression-inside-possibly-arrow-parens":{"patterns":[{"include":"#expressionWithoutIdentifiers"},{"include":"#comment"},{"include":"#string"},{"include":"#decorator"},{"include":"#destructuring-parameter"},{"captures":{"1":{"name":"storage.modifier.js"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(override|public|protected|private|readonly)\\\\s+(?=(override|public|protected|private|readonly)\\\\s+)"},{"captures":{"1":{"name":"storage.modifier.js"},"2":{"name":"keyword.operator.rest.js"},"3":{"name":"entity.name.function.js variable.language.this.js"},"4":{"name":"entity.name.function.js"},"5":{"name":"keyword.operator.optional.js"}},"match":"(?:(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(override|public|private|protected|readonly)\\\\s+)?(?:(\\\\.\\\\.\\\\.)\\\\s*)?(?<![:=])(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(this)|([$_[:alpha:]][$_[:alnum:]]*))(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\\\\s*(\\\\??)(?=\\\\s*(=\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|(\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|(<\\\\s*[$_[:alpha:]][$_[:alnum:]]*\\\\s+extends\\\\s*[^=>])|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\"'()\`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>)))))|(:\\\\s*((<)|(\\\\(\\\\s*((\\\\))|(\\\\.\\\\.\\\\.)|([$_[:alnum:]]+\\\\s*(([,:=?])|(\\\\)\\\\s*=>)))))))|(:\\\\s*(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))Function(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))|(:\\\\s*((<\\\\s*)$|(\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))))))|(:\\\\s*(=>|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(<[^<>]*>)|[^(),<=>])+=\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|(\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|(<\\\\s*[$_[:alpha:]][$_[:alnum:]]*\\\\s+extends\\\\s*[^=>])|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\"'()\`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>))))))"},{"captures":{"1":{"name":"storage.modifier.js"},"2":{"name":"keyword.operator.rest.js"},"3":{"name":"variable.parameter.js variable.language.this.js"},"4":{"name":"variable.parameter.js"},"5":{"name":"keyword.operator.optional.js"}},"match":"(?:(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(override|public|private|protected|readonly)\\\\s+)?(?:(\\\\.\\\\.\\\\.)\\\\s*)?(?<![:=])(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(this)|([$_[:alpha:]][$_[:alnum:]]*))(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\\\\s*(\\\\??)(?=\\\\s*[,:]|$)"},{"include":"#type-annotation"},{"include":"#variable-initializer"},{"match":",","name":"punctuation.separator.parameter.js"},{"include":"#identifiers"},{"include":"#expressionPunctuations"}]},"expression-operators":{"patterns":[{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(await)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.control.flow.js"},{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(yield)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))(?=\\\\s*/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*\\\\*)","beginCaptures":{"1":{"name":"keyword.control.flow.js"}},"end":"\\\\*","endCaptures":{"0":{"name":"keyword.generator.asterisk.js"}},"patterns":[{"include":"#comment"}]},{"captures":{"1":{"name":"keyword.control.flow.js"},"2":{"name":"keyword.generator.asterisk.js"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(yield)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))(?:\\\\s*(\\\\*))?"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))delete(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.operator.expression.delete.js"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))in(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))(?!\\\\()","name":"keyword.operator.expression.in.js"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))of(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))(?!\\\\()","name":"keyword.operator.expression.of.js"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))instanceof(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.operator.expression.instanceof.js"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))new(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.operator.new.js"},{"include":"#typeof-operator"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))void(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.operator.expression.void.js"},{"captures":{"1":{"name":"keyword.control.as.js"},"2":{"name":"storage.modifier.js"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(as)\\\\s+(const)(?=\\\\s*($|[]),:;}]))"},{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(as)|(satisfies))\\\\s+","beginCaptures":{"1":{"name":"keyword.control.as.js"},"2":{"name":"keyword.control.satisfies.js"}},"end":"(?=^|[-\\\\])+,:;>?}]|\\\\|\\\\||&&|!==|$|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(as|satisfies)\\\\s+)|(\\\\s+<))","patterns":[{"include":"#type"}]},{"match":"\\\\.\\\\.\\\\.","name":"keyword.operator.spread.js"},{"match":"(?:\\\\*|(?<!\\\\()/|[-%+])=","name":"keyword.operator.assignment.compound.js"},{"match":"(?:[\\\\&^]|<<|>>>??|\\\\|)=","name":"keyword.operator.assignment.compound.bitwise.js"},{"match":"<<|>>>?","name":"keyword.operator.bitwise.shift.js"},{"match":"[!=]==?","name":"keyword.operator.comparison.js"},{"match":"<=|>=|<>|[<>]","name":"keyword.operator.relational.js"},{"captures":{"1":{"name":"keyword.operator.logical.js"},"2":{"name":"keyword.operator.assignment.compound.js"},"3":{"name":"keyword.operator.arithmetic.js"}},"match":"(?<=[$_[:alnum:]])(!)\\\\s*(?:(/=)|(/)(?![*/]))"},{"match":"!|&&|\\\\|\\\\||\\\\?\\\\?","name":"keyword.operator.logical.js"},{"match":"[\\\\&^|~]","name":"keyword.operator.bitwise.js"},{"match":"=","name":"keyword.operator.assignment.js"},{"match":"--","name":"keyword.operator.decrement.js"},{"match":"\\\\+\\\\+","name":"keyword.operator.increment.js"},{"match":"[-%*+/]","name":"keyword.operator.arithmetic.js"},{"begin":"(?<=[]$)_[:alnum:]])\\\\s*(?=(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)+(?:(/=)|(/)(?![*/])))","end":"(/=)|(/)(?!\\\\*([^*]|(\\\\*[^/]))*\\\\*/)","endCaptures":{"1":{"name":"keyword.operator.assignment.compound.js"},"2":{"name":"keyword.operator.arithmetic.js"}},"patterns":[{"include":"#comment"}]},{"captures":{"1":{"name":"keyword.operator.assignment.compound.js"},"2":{"name":"keyword.operator.arithmetic.js"}},"match":"(?<=[]$)_[:alnum:]])\\\\s*(?:(/=)|(/)(?![*/]))"}]},"expressionPunctuations":{"patterns":[{"include":"#punctuation-comma"},{"include":"#punctuation-accessor"}]},"expressionWithoutIdentifiers":{"patterns":[{"include":"#jsx"},{"include":"#string"},{"include":"#regex"},{"include":"#comment"},{"include":"#function-expression"},{"include":"#class-expression"},{"include":"#arrow-function"},{"include":"#paren-expression-possibly-arrow"},{"include":"#cast"},{"include":"#ternary-expression"},{"include":"#new-expr"},{"include":"#instanceof-expr"},{"include":"#object-literal"},{"include":"#expression-operators"},{"include":"#function-call"},{"include":"#literal"},{"include":"#support-objects"},{"include":"#paren-expression"}]},"field-declaration":{"begin":"(?<!\\\\()(?:(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(readonly)\\\\s+)?(?=\\\\s*(\\\\b((?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$))|((?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$))|(#?[$_[:alpha:]][$_[:alnum:]]*)|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`)|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])+]))\\\\s*(?:(?:(\\\\?)|(!))\\\\s*)?([,:;=}]|$))","beginCaptures":{"1":{"name":"storage.modifier.js"}},"end":"(?=[,;}]|$|^((?!\\\\s*(\\\\b((?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$))|((?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$))|(#?[$_[:alpha:]][$_[:alnum:]]*)|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`)|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])+]))\\\\s*(?:(?:(\\\\?)|(!))\\\\s*)?([,:;=]|$))))|(?<=})","name":"meta.field.declaration.js","patterns":[{"include":"#variable-initializer"},{"include":"#type-annotation"},{"include":"#string"},{"include":"#array-literal"},{"include":"#numeric-literal"},{"include":"#comment"},{"captures":{"1":{"name":"meta.definition.property.js entity.name.function.js"},"2":{"name":"keyword.operator.optional.js"},"3":{"name":"keyword.operator.definiteassignment.js"}},"match":"(#?[$_[:alpha:]][$_[:alnum:]]*)(?:(\\\\?)|(!))?(?=\\\\s*\\\\s*(=\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|(\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|(<\\\\s*[$_[:alpha:]][$_[:alnum:]]*\\\\s+extends\\\\s*[^=>])|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\"'()\`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>)))))|(:\\\\s*((<)|(\\\\(\\\\s*((\\\\))|(\\\\.\\\\.\\\\.)|([$_[:alnum:]]+\\\\s*(([,:=?])|(\\\\)\\\\s*=>)))))))|(:\\\\s*(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))Function(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))|(:\\\\s*((<\\\\s*)$|(\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))))))|(:\\\\s*(=>|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(<[^<>]*>)|[^(),<=>])+=\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|(\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|(<\\\\s*[$_[:alpha:]][$_[:alnum:]]*\\\\s+extends\\\\s*[^=>])|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\"'()\`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>))))))"},{"match":"#?[$_[:alpha:]][$_[:alnum:]]*","name":"meta.definition.property.js variable.object.property.js"},{"match":"\\\\?","name":"keyword.operator.optional.js"},{"match":"!","name":"keyword.operator.definiteassignment.js"}]},"for-loop":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))for(?=((\\\\s+|(\\\\s*/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*))await)?\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)?(\\\\())","beginCaptures":{"0":{"name":"keyword.control.loop.js"}},"end":"(?<=\\\\))","patterns":[{"include":"#comment"},{"match":"await","name":"keyword.control.loop.js"},{"begin":"\\\\(","beginCaptures":{"0":{"name":"meta.brace.round.js"}},"end":"\\\\)","endCaptures":{"0":{"name":"meta.brace.round.js"}},"patterns":[{"include":"#var-expr"},{"include":"#expression"},{"include":"#punctuation-semicolon"}]}]},"function-body":{"patterns":[{"include":"#comment"},{"include":"#type-parameters"},{"include":"#function-parameters"},{"include":"#return-type"},{"include":"#type-function-return-type"},{"include":"#decl-block"},{"match":"\\\\*","name":"keyword.generator.asterisk.js"}]},"function-call":{"patterns":[{"begin":"(?=(((([$_[:alpha:]][$_[:alnum:]]*)(\\\\s*\\\\??\\\\.\\\\s*(#?[$_[:alpha:]][$_[:alnum:]]*))*)|(\\\\??\\\\.\\\\s*#?[$_[:alpha:]][$_[:alnum:]]*))|(?<=\\\\)))\\\\s*(?:(\\\\?\\\\.\\\\s*)|(!))?((<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))(([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>)*(?<!=)>))*(?<!=)>)*(?<!=)>\\\\s*)?\\\\())","end":"(?<=\\\\))(?!(((([$_[:alpha:]][$_[:alnum:]]*)(\\\\s*\\\\??\\\\.\\\\s*(#?[$_[:alpha:]][$_[:alnum:]]*))*)|(\\\\??\\\\.\\\\s*#?[$_[:alpha:]][$_[:alnum:]]*))|(?<=\\\\)))\\\\s*(?:(\\\\?\\\\.\\\\s*)|(!))?((<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))(([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>)*(?<!=)>))*(?<!=)>)*(?<!=)>\\\\s*)?\\\\())","patterns":[{"begin":"(?=(([$_[:alpha:]][$_[:alnum:]]*)(\\\\s*\\\\??\\\\.\\\\s*(#?[$_[:alpha:]][$_[:alnum:]]*))*)|(\\\\??\\\\.\\\\s*#?[$_[:alpha:]][$_[:alnum:]]*))","end":"(?=\\\\s*(?:(\\\\?\\\\.\\\\s*)|(!))?((<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))(([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>)*(?<!=)>))*(?<!=)>)*(?<!=)>\\\\s*)?\\\\())","name":"meta.function-call.js","patterns":[{"include":"#function-call-target"}]},{"include":"#comment"},{"include":"#function-call-optionals"},{"include":"#type-arguments"},{"include":"#paren-expression"}]},{"begin":"(?=(((([$_[:alpha:]][$_[:alnum:]]*)(\\\\s*\\\\??\\\\.\\\\s*(#?[$_[:alpha:]][$_[:alnum:]]*))*)|(\\\\??\\\\.\\\\s*#?[$_[:alpha:]][$_[:alnum:]]*))|(?<=\\\\)))(<\\\\s*[(\\\\[{]\\\\s*)$)","end":"(?<=>)(?!(((([$_[:alpha:]][$_[:alnum:]]*)(\\\\s*\\\\??\\\\.\\\\s*(#?[$_[:alpha:]][$_[:alnum:]]*))*)|(\\\\??\\\\.\\\\s*#?[$_[:alpha:]][$_[:alnum:]]*))|(?<=\\\\)))(<\\\\s*[(\\\\[{]\\\\s*)$)","patterns":[{"begin":"(?=(([$_[:alpha:]][$_[:alnum:]]*)(\\\\s*\\\\??\\\\.\\\\s*(#?[$_[:alpha:]][$_[:alnum:]]*))*)|(\\\\??\\\\.\\\\s*#?[$_[:alpha:]][$_[:alnum:]]*))","end":"(?=(<\\\\s*[(\\\\[{]\\\\s*)$)","name":"meta.function-call.js","patterns":[{"include":"#function-call-target"}]},{"include":"#comment"},{"include":"#function-call-optionals"},{"include":"#type-arguments"}]}]},"function-call-optionals":{"patterns":[{"match":"\\\\?\\\\.","name":"meta.function-call.js punctuation.accessor.optional.js"},{"match":"!","name":"meta.function-call.js keyword.operator.definiteassignment.js"}]},"function-call-target":{"patterns":[{"include":"#support-function-call-identifiers"},{"match":"(#?[$_[:alpha:]][$_[:alnum:]]*)","name":"entity.name.function.js"}]},"function-declaration":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?(?:(async)\\\\s+)?(function)\\\\b(?:\\\\s*(\\\\*))?(?:(?:\\\\s+|(?<=\\\\*))([$_[:alpha:]][$_[:alnum:]]*))?\\\\s*","beginCaptures":{"1":{"name":"keyword.control.export.js"},"2":{"name":"storage.modifier.js"},"3":{"name":"storage.modifier.async.js"},"4":{"name":"storage.type.function.js"},"5":{"name":"keyword.generator.asterisk.js"},"6":{"name":"meta.definition.function.js entity.name.function.js"}},"end":"(?=;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)|(?<=})","name":"meta.function.js","patterns":[{"include":"#function-name"},{"include":"#function-body"}]},"function-expression":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(async)\\\\s+)?(function)\\\\b(?:\\\\s*(\\\\*))?(?:(?:\\\\s+|(?<=\\\\*))([$_[:alpha:]][$_[:alnum:]]*))?\\\\s*","beginCaptures":{"1":{"name":"storage.modifier.async.js"},"2":{"name":"storage.type.function.js"},"3":{"name":"keyword.generator.asterisk.js"},"4":{"name":"meta.definition.function.js entity.name.function.js"}},"end":"(?=;)|(?<=})","name":"meta.function.expression.js","patterns":[{"include":"#function-name"},{"include":"#single-line-comment-consuming-line-ending"},{"include":"#function-body"}]},"function-name":{"match":"[$_[:alpha:]][$_[:alnum:]]*","name":"meta.definition.function.js entity.name.function.js"},"function-parameters":{"begin":"\\\\(","beginCaptures":{"0":{"name":"punctuation.definition.parameters.begin.js"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.definition.parameters.end.js"}},"name":"meta.parameters.js","patterns":[{"include":"#function-parameters-body"}]},"function-parameters-body":{"patterns":[{"include":"#comment"},{"include":"#string"},{"include":"#decorator"},{"include":"#destructuring-parameter"},{"include":"#parameter-name"},{"include":"#parameter-type-annotation"},{"include":"#variable-initializer"},{"match":",","name":"punctuation.separator.parameter.js"}]},"identifiers":{"patterns":[{"include":"#object-identifiers"},{"captures":{"1":{"name":"punctuation.accessor.js"},"2":{"name":"punctuation.accessor.optional.js"},"3":{"name":"entity.name.function.js"}},"match":"(?:(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))\\\\s*)?([$_[:alpha:]][$_[:alnum:]]*)(?=\\\\s*=\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|(\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|(<\\\\s*[$_[:alpha:]][$_[:alnum:]]*\\\\s+extends\\\\s*[^=>])|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\"'()\`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>)))))"},{"captures":{"1":{"name":"punctuation.accessor.js"},"2":{"name":"punctuation.accessor.optional.js"},"3":{"name":"variable.other.constant.property.js"}},"match":"(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))\\\\s*(#?\\\\p{upper}[$_\\\\d[:upper:]]*)(?![$_[:alnum:]])"},{"captures":{"1":{"name":"punctuation.accessor.js"},"2":{"name":"punctuation.accessor.optional.js"},"3":{"name":"variable.other.property.js"}},"match":"(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))\\\\s*(#?[$_[:alpha:]][$_[:alnum:]]*)"},{"match":"(\\\\p{upper}[$_\\\\d[:upper:]]*)(?![$_[:alnum:]])","name":"variable.other.constant.js"},{"match":"[$_[:alpha:]][$_[:alnum:]]*","name":"variable.other.readwrite.js"}]},"if-statement":{"patterns":[{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?=\\\\bif\\\\s*(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))\\\\s*(?!\\\\{))","end":"(?=;|$|})","patterns":[{"include":"#comment"},{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(if)\\\\s*(\\\\()","beginCaptures":{"1":{"name":"keyword.control.conditional.js"},"2":{"name":"meta.brace.round.js"}},"end":"\\\\)","endCaptures":{"0":{"name":"meta.brace.round.js"}},"patterns":[{"include":"#expression"}]},{"begin":"(?<=\\\\))\\\\s*/(?![*/])(?=(?:[^/\\\\[\\\\\\\\]|\\\\\\\\.|\\\\[([^]\\\\\\\\]|\\\\\\\\.)*])+/([dgimsuvy]+|(?![*/])|(?=/\\\\*))(?!\\\\s*[$0-9A-Z_a-z]))","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.js"}},"end":"(/)([dgimsuvy]*)","endCaptures":{"1":{"name":"punctuation.definition.string.end.js"},"2":{"name":"keyword.other.js"}},"name":"string.regexp.js","patterns":[{"include":"#regexp"}]},{"include":"#statements"}]}]},"import-declaration":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(import)(?:\\\\s+(type)(?!\\\\s+from))?(?!\\\\s*[(:])(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","beginCaptures":{"1":{"name":"keyword.control.export.js"},"2":{"name":"storage.modifier.js"},"3":{"name":"keyword.control.import.js"},"4":{"name":"keyword.control.type.js"}},"end":"(?<!(?:^|[^$._[:alnum:]])import)(?=;|$|^)","name":"meta.import.js","patterns":[{"include":"#single-line-comment-consuming-line-ending"},{"include":"#comment"},{"include":"#string"},{"begin":"(?<=(?:^|[^$._[:alnum:]])import)(?!\\\\s*[\\"'])","end":"\\\\bfrom\\\\b","endCaptures":{"0":{"name":"keyword.control.from.js"}},"patterns":[{"include":"#import-export-declaration"}]},{"include":"#import-export-declaration"}]},"import-equals-declaration":{"patterns":[{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(import)(?:\\\\s+(type))?\\\\s+([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(=)\\\\s*(require)\\\\s*(\\\\()","beginCaptures":{"1":{"name":"keyword.control.export.js"},"2":{"name":"storage.modifier.js"},"3":{"name":"keyword.control.import.js"},"4":{"name":"keyword.control.type.js"},"5":{"name":"variable.other.readwrite.alias.js"},"6":{"name":"keyword.operator.assignment.js"},"7":{"name":"keyword.control.require.js"},"8":{"name":"meta.brace.round.js"}},"end":"\\\\)","endCaptures":{"0":{"name":"meta.brace.round.js"}},"name":"meta.import-equals.external.js","patterns":[{"include":"#comment"},{"include":"#string"}]},{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(import)(?:\\\\s+(type))?\\\\s+([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(=)\\\\s*(?!require\\\\b)","beginCaptures":{"1":{"name":"keyword.control.export.js"},"2":{"name":"storage.modifier.js"},"3":{"name":"keyword.control.import.js"},"4":{"name":"keyword.control.type.js"},"5":{"name":"variable.other.readwrite.alias.js"},"6":{"name":"keyword.operator.assignment.js"}},"end":"(?=;|$|^)","name":"meta.import-equals.internal.js","patterns":[{"include":"#single-line-comment-consuming-line-ending"},{"include":"#comment"},{"captures":{"1":{"name":"entity.name.type.module.js"},"2":{"name":"punctuation.accessor.js"},"3":{"name":"punctuation.accessor.optional.js"}},"match":"([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))"},{"match":"([$_[:alpha:]][$_[:alnum:]]*)","name":"variable.other.readwrite.js"}]}]},"import-export-assert-clause":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(with)|(assert))\\\\s*(\\\\{)","beginCaptures":{"1":{"name":"keyword.control.with.js"},"2":{"name":"keyword.control.assert.js"},"3":{"name":"punctuation.definition.block.js"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.block.js"}},"patterns":[{"include":"#comment"},{"include":"#string"},{"match":"[$_[:alpha:]][$_[:alnum:]]*\\\\s*(?=(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*:)","name":"meta.object-literal.key.js"},{"match":":","name":"punctuation.separator.key-value.js"}]},"import-export-block":{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.definition.block.js"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.block.js"}},"name":"meta.block.js","patterns":[{"include":"#import-export-clause"}]},"import-export-clause":{"patterns":[{"include":"#comment"},{"captures":{"1":{"name":"keyword.control.type.js"},"2":{"name":"keyword.control.default.js"},"3":{"name":"constant.language.import-export-all.js"},"4":{"name":"variable.other.readwrite.js"},"5":{"name":"string.quoted.alias.js"},"12":{"name":"keyword.control.as.js"},"13":{"name":"keyword.control.default.js"},"14":{"name":"variable.other.readwrite.alias.js"},"15":{"name":"string.quoted.alias.js"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(type)\\\\s+)?(?:\\\\b(default)|(\\\\*)|\\\\b([$_[:alpha:]][$_[:alnum:]]*)|(('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`)))\\\\s+(as)\\\\s+(?:(default(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))|([$_[:alpha:]][$_[:alnum:]]*)|(('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`)))"},{"include":"#punctuation-comma"},{"match":"\\\\*","name":"constant.language.import-export-all.js"},{"match":"\\\\b(default)\\\\b","name":"keyword.control.default.js"},{"captures":{"1":{"name":"keyword.control.type.js"},"2":{"name":"variable.other.readwrite.alias.js"},"3":{"name":"string.quoted.alias.js"}},"match":"(?:\\\\b(type)\\\\s+)?(?:([$_[:alpha:]][$_[:alnum:]]*)|(('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`)))"}]},"import-export-declaration":{"patterns":[{"include":"#comment"},{"include":"#string"},{"include":"#import-export-block"},{"match":"\\\\bfrom\\\\b","name":"keyword.control.from.js"},{"include":"#import-export-assert-clause"},{"include":"#import-export-clause"}]},"indexer-declaration":{"begin":"(?:(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(readonly)\\\\s*)?\\\\s*(\\\\[)\\\\s*([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(?=:)","beginCaptures":{"1":{"name":"storage.modifier.js"},"2":{"name":"meta.brace.square.js"},"3":{"name":"variable.parameter.js"}},"end":"(])\\\\s*(\\\\?\\\\s*)?|$","endCaptures":{"1":{"name":"meta.brace.square.js"},"2":{"name":"keyword.operator.optional.js"}},"name":"meta.indexer.declaration.js","patterns":[{"include":"#type-annotation"}]},"indexer-mapped-type-declaration":{"begin":"(?:(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))([-+])?(readonly)\\\\s*)?\\\\s*(\\\\[)\\\\s*([$_[:alpha:]][$_[:alnum:]]*)\\\\s+(in)\\\\s+","beginCaptures":{"1":{"name":"keyword.operator.type.modifier.js"},"2":{"name":"storage.modifier.js"},"3":{"name":"meta.brace.square.js"},"4":{"name":"entity.name.type.js"},"5":{"name":"keyword.operator.expression.in.js"}},"end":"(])([-+])?\\\\s*(\\\\?\\\\s*)?|$","endCaptures":{"1":{"name":"meta.brace.square.js"},"2":{"name":"keyword.operator.type.modifier.js"},"3":{"name":"keyword.operator.optional.js"}},"name":"meta.indexer.mappedtype.declaration.js","patterns":[{"captures":{"1":{"name":"keyword.control.as.js"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(as)\\\\s+"},{"include":"#type"}]},"inline-tags":{"patterns":[{"captures":{"1":{"name":"punctuation.definition.bracket.square.begin.jsdoc"},"2":{"name":"punctuation.definition.bracket.square.end.jsdoc"}},"match":"(\\\\[)[^]]+(])(?=\\\\{@(?:link|linkcode|linkplain|tutorial))","name":"constant.other.description.jsdoc"},{"begin":"(\\\\{)((@)(?:link(?:code|plain)?|tutorial))\\\\s*","beginCaptures":{"1":{"name":"punctuation.definition.bracket.curly.begin.jsdoc"},"2":{"name":"storage.type.class.jsdoc"},"3":{"name":"punctuation.definition.inline.tag.jsdoc"}},"end":"}|(?=\\\\*/)","endCaptures":{"0":{"name":"punctuation.definition.bracket.curly.end.jsdoc"}},"name":"entity.name.type.instance.jsdoc","patterns":[{"captures":{"1":{"name":"variable.other.link.underline.jsdoc"},"2":{"name":"punctuation.separator.pipe.jsdoc"}},"match":"\\\\G((?=https?://)(?:[^*|}\\\\s]|\\\\*/)+)(\\\\|)?"},{"captures":{"1":{"name":"variable.other.description.jsdoc"},"2":{"name":"punctuation.separator.pipe.jsdoc"}},"match":"\\\\G((?:[^*@{|}\\\\s]|\\\\*[^/])+)(\\\\|)?"}]}]},"instanceof-expr":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(instanceof)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","beginCaptures":{"1":{"name":"keyword.operator.expression.instanceof.js"}},"end":"(?<=\\\\))|(?=[-\\\\])+,:;>?}]|\\\\|\\\\||&&|!==|$|([!=]==?)|(([\\\\&^|~]\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s+instanceof(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))function((\\\\s+[$_[:alpha:]][$_[:alnum:]]*)|(\\\\s*\\\\())))","patterns":[{"include":"#type"}]},"interface-declaration":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(?:(abstract)\\\\s+)?\\\\b(interface)\\\\b(?=\\\\s+|/[*/])","beginCaptures":{"1":{"name":"keyword.control.export.js"},"2":{"name":"storage.modifier.js"},"3":{"name":"storage.modifier.js"},"4":{"name":"storage.type.interface.js"}},"end":"(?<=})","name":"meta.interface.js","patterns":[{"include":"#comment"},{"include":"#class-or-interface-heritage"},{"captures":{"0":{"name":"entity.name.type.interface.js"}},"match":"[$_[:alpha:]][$_[:alnum:]]*"},{"include":"#type-parameters"},{"include":"#class-or-interface-body"}]},"jsdoctype":{"patterns":[{"begin":"\\\\G(\\\\{)","beginCaptures":{"0":{"name":"entity.name.type.instance.jsdoc"},"1":{"name":"punctuation.definition.bracket.curly.begin.jsdoc"}},"contentName":"entity.name.type.instance.jsdoc","end":"((}))\\\\s*|(?=\\\\*/)","endCaptures":{"1":{"name":"entity.name.type.instance.jsdoc"},"2":{"name":"punctuation.definition.bracket.curly.end.jsdoc"}},"patterns":[{"include":"#brackets"}]}]},"jsx":{"patterns":[{"include":"#jsx-tag-without-attributes-in-expression"},{"include":"#jsx-tag-in-expression"}]},"jsx-children":{"patterns":[{"include":"#jsx-tag-without-attributes"},{"include":"#jsx-tag"},{"include":"#jsx-evaluated-code"},{"include":"#jsx-entities"}]},"jsx-entities":{"patterns":[{"captures":{"1":{"name":"punctuation.definition.entity.js"},"3":{"name":"punctuation.definition.entity.js"}},"match":"(&)([0-9A-Za-z]+|#[0-9]+|#x\\\\h+)(;)","name":"constant.character.entity.js"}]},"jsx-evaluated-code":{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.section.embedded.begin.js"}},"contentName":"meta.embedded.expression.js","end":"}","endCaptures":{"0":{"name":"punctuation.section.embedded.end.js"}},"patterns":[{"include":"#expression"}]},"jsx-string-double-quoted":{"begin":"\\"","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.js"}},"end":"\\"","endCaptures":{"0":{"name":"punctuation.definition.string.end.js"}},"name":"string.quoted.double.js","patterns":[{"include":"#jsx-entities"}]},"jsx-string-single-quoted":{"begin":"'","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.js"}},"end":"'","endCaptures":{"0":{"name":"punctuation.definition.string.end.js"}},"name":"string.quoted.single.js","patterns":[{"include":"#jsx-entities"}]},"jsx-tag":{"begin":"(?=(<)\\\\s*(?:([$_[:alpha:]][-$._[:alnum:]]*)(?<![-.])(:))?((?:[a-z][0-9a-z]*|([$_[:alpha:]][-$._[:alnum:]]*))(?<![-.]))(?=((<\\\\s*)|(\\\\s+))(?!\\\\?)|/?>))","end":"(/>)|(</)\\\\s*(?:([$_[:alpha:]][-$._[:alnum:]]*)(?<![-.])(:))?((?:[a-z][0-9a-z]*|([$_[:alpha:]][-$._[:alnum:]]*))(?<![-.]))?\\\\s*(>)","endCaptures":{"1":{"name":"punctuation.definition.tag.end.js"},"2":{"name":"punctuation.definition.tag.begin.js"},"3":{"name":"entity.name.tag.namespace.js"},"4":{"name":"punctuation.separator.namespace.js"},"5":{"name":"entity.name.tag.js"},"6":{"name":"support.class.component.js"},"7":{"name":"punctuation.definition.tag.end.js"}},"name":"meta.tag.js","patterns":[{"begin":"(<)\\\\s*(?:([$_[:alpha:]][-$._[:alnum:]]*)(?<![-.])(:))?((?:[a-z][0-9a-z]*|([$_[:alpha:]][-$._[:alnum:]]*))(?<![-.]))(?=((<\\\\s*)|(\\\\s+))(?!\\\\?)|/?>)","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.js"},"2":{"name":"entity.name.tag.namespace.js"},"3":{"name":"punctuation.separator.namespace.js"},"4":{"name":"entity.name.tag.js"},"5":{"name":"support.class.component.js"}},"end":"(?=/?>)","patterns":[{"include":"#comment"},{"include":"#type-arguments"},{"include":"#jsx-tag-attributes"}]},{"begin":"(>)","beginCaptures":{"1":{"name":"punctuation.definition.tag.end.js"}},"contentName":"meta.jsx.children.js","end":"(?=</)","patterns":[{"include":"#jsx-children"}]}]},"jsx-tag-attribute-assignment":{"match":"=(?=\\\\s*(?:[\\"'{]|/\\\\*|//|\\\\n))","name":"keyword.operator.assignment.js"},"jsx-tag-attribute-name":{"captures":{"1":{"name":"entity.other.attribute-name.namespace.js"},"2":{"name":"punctuation.separator.namespace.js"},"3":{"name":"entity.other.attribute-name.js"}},"match":"\\\\s*(?:([$_[:alpha:]][-$._[:alnum:]]*)(:))?([$_[:alpha:]][-$_[:alnum:]]*)(?=[=\\\\s]|/?>|/\\\\*|//)"},"jsx-tag-attributes":{"begin":"\\\\s+","end":"(?=/?>)","name":"meta.tag.attributes.js","patterns":[{"include":"#comment"},{"include":"#jsx-tag-attribute-name"},{"include":"#jsx-tag-attribute-assignment"},{"include":"#jsx-string-double-quoted"},{"include":"#jsx-string-single-quoted"},{"include":"#jsx-evaluated-code"},{"include":"#jsx-tag-attributes-illegal"}]},"jsx-tag-attributes-illegal":{"match":"\\\\S+","name":"invalid.illegal.attribute.js"},"jsx-tag-in-expression":{"begin":"(?<!\\\\+\\\\+|--)(?<=[(*,:=>?\\\\[{]|&&|\\\\|\\\\||\\\\?|\\\\*/|^await|[^$._[:alnum:]]await|^return|[^$._[:alnum:]]return|^default|[^$._[:alnum:]]default|^yield|[^$._[:alnum:]]yield|^)\\\\s*(?!<\\\\s*[$_[:alpha:]][$_[:alnum:]]*((\\\\s+extends\\\\s+[^=>])|,))(?=(<)\\\\s*(?:([$_[:alpha:]][-$._[:alnum:]]*)(?<![-.])(:))?((?:[a-z][0-9a-z]*|([$_[:alpha:]][-$._[:alnum:]]*))(?<![-.]))(?=((<\\\\s*)|(\\\\s+))(?!\\\\?)|/?>))","end":"(?!(<)\\\\s*(?:([$_[:alpha:]][-$._[:alnum:]]*)(?<![-.])(:))?((?:[a-z][0-9a-z]*|([$_[:alpha:]][-$._[:alnum:]]*))(?<![-.]))(?=((<\\\\s*)|(\\\\s+))(?!\\\\?)|/?>))","patterns":[{"include":"#jsx-tag"}]},"jsx-tag-without-attributes":{"begin":"(<)\\\\s*(?:([$_[:alpha:]][-$._[:alnum:]]*)(?<![-.])(:))?((?:[a-z][0-9a-z]*|([$_[:alpha:]][-$._[:alnum:]]*))(?<![-.]))?\\\\s*(>)","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.js"},"2":{"name":"entity.name.tag.namespace.js"},"3":{"name":"punctuation.separator.namespace.js"},"4":{"name":"entity.name.tag.js"},"5":{"name":"support.class.component.js"},"6":{"name":"punctuation.definition.tag.end.js"}},"contentName":"meta.jsx.children.js","end":"(</)\\\\s*(?:([$_[:alpha:]][-$._[:alnum:]]*)(?<![-.])(:))?((?:[a-z][0-9a-z]*|([$_[:alpha:]][-$._[:alnum:]]*))(?<![-.]))?\\\\s*(>)","endCaptures":{"1":{"name":"punctuation.definition.tag.begin.js"},"2":{"name":"entity.name.tag.namespace.js"},"3":{"name":"punctuation.separator.namespace.js"},"4":{"name":"entity.name.tag.js"},"5":{"name":"support.class.component.js"},"6":{"name":"punctuation.definition.tag.end.js"}},"name":"meta.tag.without-attributes.js","patterns":[{"include":"#jsx-children"}]},"jsx-tag-without-attributes-in-expression":{"begin":"(?<!\\\\+\\\\+|--)(?<=[(*,:=>?\\\\[{]|&&|\\\\|\\\\||\\\\?|\\\\*/|^await|[^$._[:alnum:]]await|^return|[^$._[:alnum:]]return|^default|[^$._[:alnum:]]default|^yield|[^$._[:alnum:]]yield|^)\\\\s*(?=(<)\\\\s*(?:([$_[:alpha:]][-$._[:alnum:]]*)(?<![-.])(:))?((?:[a-z][0-9a-z]*|([$_[:alpha:]][-$._[:alnum:]]*))(?<![-.]))?\\\\s*(>))","end":"(?!(<)\\\\s*(?:([$_[:alpha:]][-$._[:alnum:]]*)(?<![-.])(:))?((?:[a-z][0-9a-z]*|([$_[:alpha:]][-$._[:alnum:]]*))(?<![-.]))?\\\\s*(>))","patterns":[{"include":"#jsx-tag-without-attributes"}]},"label":{"patterns":[{"begin":"([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(:)(?=\\\\s*\\\\{)","beginCaptures":{"1":{"name":"entity.name.label.js"},"2":{"name":"punctuation.separator.label.js"}},"end":"(?<=})","patterns":[{"include":"#decl-block"}]},{"captures":{"1":{"name":"entity.name.label.js"},"2":{"name":"punctuation.separator.label.js"}},"match":"([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(:)"}]},"literal":{"patterns":[{"include":"#numeric-literal"},{"include":"#boolean-literal"},{"include":"#null-literal"},{"include":"#undefined-literal"},{"include":"#numericConstant-literal"},{"include":"#array-literal"},{"include":"#this-literal"},{"include":"#super-literal"}]},"method-declaration":{"patterns":[{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(override)\\\\s+)?(?:\\\\b(p(?:ublic|rivate|rotected))\\\\s+)?(?:\\\\b(abstract)\\\\s+)?(?:\\\\b(async)\\\\s+)?\\\\s*\\\\b(constructor)\\\\b(?!:)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","beginCaptures":{"1":{"name":"storage.modifier.js"},"2":{"name":"storage.modifier.js"},"3":{"name":"storage.modifier.js"},"4":{"name":"storage.modifier.async.js"},"5":{"name":"storage.type.js"}},"end":"(?=[,;}]|$)|(?<=})","name":"meta.method.declaration.js","patterns":[{"include":"#method-declaration-name"},{"include":"#function-body"}]},{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(override)\\\\s+)?(?:\\\\b(p(?:ublic|rivate|rotected))\\\\s+)?(?:\\\\b(abstract)\\\\s+)?(?:\\\\b(async)\\\\s+)?(?:\\\\s*\\\\b(new)\\\\b(?!:)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))|(?:(\\\\*)\\\\s*)?)(?=\\\\s*((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*))?\\\\()","beginCaptures":{"1":{"name":"storage.modifier.js"},"2":{"name":"storage.modifier.js"},"3":{"name":"storage.modifier.js"},"4":{"name":"storage.modifier.async.js"},"5":{"name":"keyword.operator.new.js"},"6":{"name":"keyword.generator.asterisk.js"}},"end":"(?=[,;}]|$)|(?<=})","name":"meta.method.declaration.js","patterns":[{"include":"#method-declaration-name"},{"include":"#function-body"}]},{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(override)\\\\s+)?(?:\\\\b(p(?:ublic|rivate|rotected))\\\\s+)?(?:\\\\b(abstract)\\\\s+)?(?:\\\\b(async)\\\\s+)?(?:\\\\b([gs]et)\\\\s+)?(?:(\\\\*)\\\\s*)?(?=\\\\s*((\\\\b((?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$))|((?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$))|([$_[:alpha:]][$_[:alnum:]]*)|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`)|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])+]))\\\\s*(\\\\??))\\\\s*((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*))?\\\\()","beginCaptures":{"1":{"name":"storage.modifier.js"},"2":{"name":"storage.modifier.js"},"3":{"name":"storage.modifier.js"},"4":{"name":"storage.modifier.async.js"},"5":{"name":"storage.type.property.js"},"6":{"name":"keyword.generator.asterisk.js"}},"end":"(?=[,;}]|$)|(?<=})","name":"meta.method.declaration.js","patterns":[{"include":"#method-declaration-name"},{"include":"#function-body"}]}]},"method-declaration-name":{"begin":"(?=(\\\\b((?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$))|((?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$))|([$_[:alpha:]][$_[:alnum:]]*)|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`)|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])+]))\\\\s*(\\\\??)\\\\s*[(<])","end":"(?=[(<])","patterns":[{"include":"#string"},{"include":"#array-literal"},{"include":"#numeric-literal"},{"match":"[$_[:alpha:]][$_[:alnum:]]*","name":"meta.definition.method.js entity.name.function.js"},{"match":"\\\\?","name":"keyword.operator.optional.js"}]},"namespace-declaration":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(namespace|module)\\\\s+(?=[\\"$'_\`[:alpha:]])","beginCaptures":{"1":{"name":"keyword.control.export.js"},"2":{"name":"storage.modifier.js"},"3":{"name":"storage.type.namespace.js"}},"end":"(?<=})|(?=;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)","name":"meta.namespace.declaration.js","patterns":[{"include":"#comment"},{"include":"#string"},{"match":"([$_[:alpha:]][$_[:alnum:]]*)","name":"entity.name.type.module.js"},{"include":"#punctuation-accessor"},{"include":"#decl-block"}]},"new-expr":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(new)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","beginCaptures":{"1":{"name":"keyword.operator.new.js"}},"end":"(?<=\\\\))|(?=[-\\\\])+,:;>?}]|\\\\|\\\\||&&|!==|$|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))new(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))function((\\\\s+[$_[:alpha:]][$_[:alnum:]]*)|(\\\\s*\\\\())))","name":"new.expr.js","patterns":[{"include":"#expression"}]},"null-literal":{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))null(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"constant.language.null.js"},"numeric-literal":{"patterns":[{"captures":{"1":{"name":"storage.type.numeric.bigint.js"}},"match":"\\\\b(?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$)","name":"constant.numeric.hex.js"},{"captures":{"1":{"name":"storage.type.numeric.bigint.js"}},"match":"\\\\b(?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$)","name":"constant.numeric.binary.js"},{"captures":{"1":{"name":"storage.type.numeric.bigint.js"}},"match":"\\\\b(?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$)","name":"constant.numeric.octal.js"},{"captures":{"0":{"name":"constant.numeric.decimal.js"},"1":{"name":"meta.delimiter.decimal.period.js"},"2":{"name":"storage.type.numeric.bigint.js"},"3":{"name":"meta.delimiter.decimal.period.js"},"4":{"name":"storage.type.numeric.bigint.js"},"5":{"name":"meta.delimiter.decimal.period.js"},"6":{"name":"storage.type.numeric.bigint.js"},"7":{"name":"storage.type.numeric.bigint.js"},"8":{"name":"meta.delimiter.decimal.period.js"},"9":{"name":"storage.type.numeric.bigint.js"},"10":{"name":"meta.delimiter.decimal.period.js"},"11":{"name":"storage.type.numeric.bigint.js"},"12":{"name":"meta.delimiter.decimal.period.js"},"13":{"name":"storage.type.numeric.bigint.js"},"14":{"name":"storage.type.numeric.bigint.js"}},"match":"(?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$)"}]},"numericConstant-literal":{"patterns":[{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))NaN(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"constant.language.nan.js"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))Infinity(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"constant.language.infinity.js"}]},"object-binding-element":{"patterns":[{"include":"#comment"},{"begin":"(?=(\\\\b((?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$))|((?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$))|([$_[:alpha:]][$_[:alnum:]]*)|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`)|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])+]))\\\\s*(:))","end":"(?=[,}])","patterns":[{"include":"#object-binding-element-propertyName"},{"include":"#binding-element"}]},{"include":"#object-binding-pattern"},{"include":"#destructuring-variable-rest"},{"include":"#variable-initializer"},{"include":"#punctuation-comma"}]},"object-binding-element-const":{"patterns":[{"include":"#comment"},{"begin":"(?=(\\\\b((?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$))|((?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$))|([$_[:alpha:]][$_[:alnum:]]*)|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`)|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])+]))\\\\s*(:))","end":"(?=[,}])","patterns":[{"include":"#object-binding-element-propertyName"},{"include":"#binding-element-const"}]},{"include":"#object-binding-pattern-const"},{"include":"#destructuring-variable-rest-const"},{"include":"#variable-initializer"},{"include":"#punctuation-comma"}]},"object-binding-element-propertyName":{"begin":"(?=(\\\\b((?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$))|((?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$))|([$_[:alpha:]][$_[:alnum:]]*)|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`)|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])+]))\\\\s*(:))","end":"(:)","endCaptures":{"0":{"name":"punctuation.destructuring.js"}},"patterns":[{"include":"#string"},{"include":"#array-literal"},{"include":"#numeric-literal"},{"match":"([$_[:alpha:]][$_[:alnum:]]*)","name":"variable.object.property.js"}]},"object-binding-pattern":{"begin":"(?:(\\\\.\\\\.\\\\.)\\\\s*)?(\\\\{)","beginCaptures":{"1":{"name":"keyword.operator.rest.js"},"2":{"name":"punctuation.definition.binding-pattern.object.js"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.binding-pattern.object.js"}},"patterns":[{"include":"#object-binding-element"}]},"object-binding-pattern-const":{"begin":"(?:(\\\\.\\\\.\\\\.)\\\\s*)?(\\\\{)","beginCaptures":{"1":{"name":"keyword.operator.rest.js"},"2":{"name":"punctuation.definition.binding-pattern.object.js"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.binding-pattern.object.js"}},"patterns":[{"include":"#object-binding-element-const"}]},"object-identifiers":{"patterns":[{"match":"([$_[:alpha:]][$_[:alnum:]]*)(?=\\\\s*\\\\??\\\\.\\\\s*prototype\\\\b(?!\\\\$))","name":"support.class.js"},{"captures":{"1":{"name":"punctuation.accessor.js"},"2":{"name":"punctuation.accessor.optional.js"},"3":{"name":"variable.other.constant.object.property.js"},"4":{"name":"variable.other.object.property.js"}},"match":"(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))\\\\s*(?:(#?\\\\p{upper}[$_\\\\d[:upper:]]*)|(#?[$_[:alpha:]][$_[:alnum:]]*))(?=\\\\s*\\\\??\\\\.\\\\s*#?[$_[:alpha:]][$_[:alnum:]]*)"},{"captures":{"1":{"name":"variable.other.constant.object.js"},"2":{"name":"variable.other.object.js"}},"match":"(?:(\\\\p{upper}[$_\\\\d[:upper:]]*)|([$_[:alpha:]][$_[:alnum:]]*))(?=\\\\s*\\\\??\\\\.\\\\s*#?[$_[:alpha:]][$_[:alnum:]]*)"}]},"object-literal":{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.definition.block.js"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.block.js"}},"name":"meta.objectliteral.js","patterns":[{"include":"#object-member"}]},"object-literal-method-declaration":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(async)\\\\s+)?(?:\\\\b([gs]et)\\\\s+)?(?:(\\\\*)\\\\s*)?(?=\\\\s*((\\\\b((?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$))|((?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$))|([$_[:alpha:]][$_[:alnum:]]*)|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`)|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])+]))\\\\s*(\\\\??))\\\\s*((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*))?\\\\()","beginCaptures":{"1":{"name":"storage.modifier.async.js"},"2":{"name":"storage.type.property.js"},"3":{"name":"keyword.generator.asterisk.js"}},"end":"(?=[,;}])|(?<=})","name":"meta.method.declaration.js","patterns":[{"include":"#method-declaration-name"},{"include":"#function-body"},{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(async)\\\\s+)?(?:\\\\b([gs]et)\\\\s+)?(?:(\\\\*)\\\\s*)?(?=\\\\s*((\\\\b((?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$))|((?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$))|([$_[:alpha:]][$_[:alnum:]]*)|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`)|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])+]))\\\\s*(\\\\??))\\\\s*((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*))?\\\\()","beginCaptures":{"1":{"name":"storage.modifier.async.js"},"2":{"name":"storage.type.property.js"},"3":{"name":"keyword.generator.asterisk.js"}},"end":"(?=[(<])","patterns":[{"include":"#method-declaration-name"}]}]},"object-member":{"patterns":[{"include":"#comment"},{"include":"#object-literal-method-declaration"},{"begin":"(?=\\\\[)","end":"(?=:)|((?<=])(?=\\\\s*[(<]))","name":"meta.object.member.js meta.object-literal.key.js","patterns":[{"include":"#comment"},{"include":"#array-literal"}]},{"begin":"(?=[\\"'\`])","end":"(?=:)|((?<=[\\"'\`])(?=((\\\\s*[(,<}])|(\\\\s+(as|satisifies)\\\\s+))))","name":"meta.object.member.js meta.object-literal.key.js","patterns":[{"include":"#comment"},{"include":"#string"}]},{"begin":"(?=\\\\b((?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$))|((?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$)))","end":"(?=:)|(?=\\\\s*([(,<}])|(\\\\s+as|satisifies\\\\s+))","name":"meta.object.member.js meta.object-literal.key.js","patterns":[{"include":"#comment"},{"include":"#numeric-literal"}]},{"begin":"(?<=[]\\"'\`])(?=\\\\s*[(<])","end":"(?=[,;}])|(?<=})","name":"meta.method.declaration.js","patterns":[{"include":"#function-body"}]},{"captures":{"0":{"name":"meta.object-literal.key.js"},"1":{"name":"constant.numeric.decimal.js"}},"match":"(?![$_[:alpha:]])(\\\\d+)\\\\s*(?=(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*:)","name":"meta.object.member.js"},{"captures":{"0":{"name":"meta.object-literal.key.js"},"1":{"name":"entity.name.function.js"}},"match":"([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(?=(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*:(\\\\s*/\\\\*([^*]|(\\\\*[^/]))*\\\\*/)*\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|(\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|(<\\\\s*[$_[:alpha:]][$_[:alnum:]]*\\\\s+extends\\\\s*[^=>])|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\"'()\`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>)))))","name":"meta.object.member.js"},{"captures":{"0":{"name":"meta.object-literal.key.js"}},"match":"[$_[:alpha:]][$_[:alnum:]]*\\\\s*(?=(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*:)","name":"meta.object.member.js"},{"begin":"\\\\.\\\\.\\\\.","beginCaptures":{"0":{"name":"keyword.operator.spread.js"}},"end":"(?=[,}])","name":"meta.object.member.js","patterns":[{"include":"#expression"}]},{"captures":{"1":{"name":"variable.other.readwrite.js"}},"match":"([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(?=[,}]|$|//|/\\\\*)","name":"meta.object.member.js"},{"captures":{"1":{"name":"keyword.control.as.js"},"2":{"name":"storage.modifier.js"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(as)\\\\s+(const)(?=\\\\s*([,}]|$))","name":"meta.object.member.js"},{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(as)|(satisfies))\\\\s+","beginCaptures":{"1":{"name":"keyword.control.as.js"},"2":{"name":"keyword.control.satisfies.js"}},"end":"(?=[-\\\\])+,:;>?}]|\\\\|\\\\||&&|!==|$|^|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(as|satisifies)\\\\s+))","name":"meta.object.member.js","patterns":[{"include":"#type"}]},{"begin":"(?=[$_[:alpha:]][$_[:alnum:]]*\\\\s*=)","end":"(?=[,}]|$|//|/\\\\*)","name":"meta.object.member.js","patterns":[{"include":"#expression"}]},{"begin":":","beginCaptures":{"0":{"name":"meta.object-literal.key.js punctuation.separator.key-value.js"}},"end":"(?=[,}])","name":"meta.object.member.js","patterns":[{"begin":"(?<=:)\\\\s*(async)?(?=\\\\s*(<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))))","beginCaptures":{"1":{"name":"storage.modifier.async.js"}},"end":"(?<=\\\\))","patterns":[{"include":"#type-parameters"},{"begin":"\\\\(","beginCaptures":{"0":{"name":"meta.brace.round.js"}},"end":"\\\\)","endCaptures":{"0":{"name":"meta.brace.round.js"}},"patterns":[{"include":"#expression-inside-possibly-arrow-parens"}]}]},{"begin":"(?<=:)\\\\s*(async)?\\\\s*(\\\\()(?=\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))))","beginCaptures":{"1":{"name":"storage.modifier.async.js"},"2":{"name":"meta.brace.round.js"}},"end":"\\\\)","endCaptures":{"0":{"name":"meta.brace.round.js"}},"patterns":[{"include":"#expression-inside-possibly-arrow-parens"}]},{"begin":"(?<=:)\\\\s*(async)?\\\\s*(?=<\\\\s*$)","beginCaptures":{"1":{"name":"storage.modifier.async.js"}},"end":"(?<=>)","patterns":[{"include":"#type-parameters"}]},{"begin":"(?<=>)\\\\s*(\\\\()(?=\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))))","beginCaptures":{"1":{"name":"meta.brace.round.js"}},"end":"\\\\)","endCaptures":{"0":{"name":"meta.brace.round.js"}},"patterns":[{"include":"#expression-inside-possibly-arrow-parens"}]},{"include":"#possibly-arrow-return-type"},{"include":"#expression"}]},{"include":"#punctuation-comma"},{"include":"#decl-block"}]},"parameter-array-binding-pattern":{"begin":"(?:(\\\\.\\\\.\\\\.)\\\\s*)?(\\\\[)","beginCaptures":{"1":{"name":"keyword.operator.rest.js"},"2":{"name":"punctuation.definition.binding-pattern.array.js"}},"end":"]","endCaptures":{"0":{"name":"punctuation.definition.binding-pattern.array.js"}},"patterns":[{"include":"#parameter-binding-element"},{"include":"#punctuation-comma"}]},"parameter-binding-element":{"patterns":[{"include":"#comment"},{"include":"#string"},{"include":"#numeric-literal"},{"include":"#regex"},{"include":"#parameter-object-binding-pattern"},{"include":"#parameter-array-binding-pattern"},{"include":"#destructuring-parameter-rest"},{"include":"#variable-initializer"}]},"parameter-name":{"patterns":[{"captures":{"1":{"name":"storage.modifier.js"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(override|public|protected|private|readonly)\\\\s+(?=(override|public|protected|private|readonly)\\\\s+)"},{"captures":{"1":{"name":"storage.modifier.js"},"2":{"name":"keyword.operator.rest.js"},"3":{"name":"entity.name.function.js variable.language.this.js"},"4":{"name":"entity.name.function.js"},"5":{"name":"keyword.operator.optional.js"}},"match":"(?:(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(override|public|private|protected|readonly)\\\\s+)?(?:(\\\\.\\\\.\\\\.)\\\\s*)?(?<![:=])(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(this)|([$_[:alpha:]][$_[:alnum:]]*))(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\\\\s*(\\\\??)(?=\\\\s*(=\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|(\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|(<\\\\s*[$_[:alpha:]][$_[:alnum:]]*\\\\s+extends\\\\s*[^=>])|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\"'()\`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>)))))|(:\\\\s*((<)|(\\\\(\\\\s*((\\\\))|(\\\\.\\\\.\\\\.)|([$_[:alnum:]]+\\\\s*(([,:=?])|(\\\\)\\\\s*=>)))))))|(:\\\\s*(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))Function(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))|(:\\\\s*((<\\\\s*)$|(\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))))))|(:\\\\s*(=>|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(<[^<>]*>)|[^(),<=>])+=\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|(\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|(<\\\\s*[$_[:alpha:]][$_[:alnum:]]*\\\\s+extends\\\\s*[^=>])|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\"'()\`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>))))))"},{"captures":{"1":{"name":"storage.modifier.js"},"2":{"name":"keyword.operator.rest.js"},"3":{"name":"variable.parameter.js variable.language.this.js"},"4":{"name":"variable.parameter.js"},"5":{"name":"keyword.operator.optional.js"}},"match":"(?:(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(override|public|private|protected|readonly)\\\\s+)?(?:(\\\\.\\\\.\\\\.)\\\\s*)?(?<![:=])(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(this)|([$_[:alpha:]][$_[:alnum:]]*))(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\\\\s*(\\\\??)"}]},"parameter-object-binding-element":{"patterns":[{"include":"#comment"},{"begin":"(?=(\\\\b((?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$))|((?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$))|([$_[:alpha:]][$_[:alnum:]]*)|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`)|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])+]))\\\\s*(:))","end":"(?=[,}])","patterns":[{"include":"#object-binding-element-propertyName"},{"include":"#parameter-binding-element"},{"include":"#paren-expression"}]},{"include":"#parameter-object-binding-pattern"},{"include":"#destructuring-parameter-rest"},{"include":"#variable-initializer"},{"include":"#punctuation-comma"}]},"parameter-object-binding-pattern":{"begin":"(?:(\\\\.\\\\.\\\\.)\\\\s*)?(\\\\{)","beginCaptures":{"1":{"name":"keyword.operator.rest.js"},"2":{"name":"punctuation.definition.binding-pattern.object.js"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.binding-pattern.object.js"}},"patterns":[{"include":"#parameter-object-binding-element"}]},"parameter-type-annotation":{"patterns":[{"begin":"(:)","beginCaptures":{"1":{"name":"keyword.operator.type.annotation.js"}},"end":"(?=[),])|(?==[^>])","name":"meta.type.annotation.js","patterns":[{"include":"#type"}]}]},"paren-expression":{"begin":"\\\\(","beginCaptures":{"0":{"name":"meta.brace.round.js"}},"end":"\\\\)","endCaptures":{"0":{"name":"meta.brace.round.js"}},"patterns":[{"include":"#expression"}]},"paren-expression-possibly-arrow":{"patterns":[{"begin":"(?<=[(,=])\\\\s*(async)?(?=\\\\s*((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*))?\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))))","beginCaptures":{"1":{"name":"storage.modifier.async.js"}},"end":"(?<=\\\\))","patterns":[{"include":"#paren-expression-possibly-arrow-with-typeparameters"}]},{"begin":"(?<=[(,=]|=>|^return|[^$._[:alnum:]]return)\\\\s*(async)?(?=\\\\s*((((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*))?\\\\()|(<)|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)))\\\\s*$)","beginCaptures":{"1":{"name":"storage.modifier.async.js"}},"end":"(?<=\\\\))","patterns":[{"include":"#paren-expression-possibly-arrow-with-typeparameters"}]},{"include":"#possibly-arrow-return-type"}]},"paren-expression-possibly-arrow-with-typeparameters":{"patterns":[{"include":"#type-parameters"},{"begin":"\\\\(","beginCaptures":{"0":{"name":"meta.brace.round.js"}},"end":"\\\\)","endCaptures":{"0":{"name":"meta.brace.round.js"}},"patterns":[{"include":"#expression-inside-possibly-arrow-parens"}]}]},"possibly-arrow-return-type":{"begin":"(?<=\\\\)|^)\\\\s*(:)(?=\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*=>)","beginCaptures":{"1":{"name":"meta.arrow.js meta.return.type.arrow.js keyword.operator.type.annotation.js"}},"contentName":"meta.arrow.js meta.return.type.arrow.js","end":"(?==>|\\\\{|^(\\\\s*(export|function|class|interface|let|var|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|const|import|enum|namespace|module|type|abstract|declare)\\\\s+))","patterns":[{"include":"#arrow-return-type-body"}]},"property-accessor":{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(accessor|get|set)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"storage.type.property.js"},"punctuation-accessor":{"captures":{"1":{"name":"punctuation.accessor.js"},"2":{"name":"punctuation.accessor.optional.js"}},"match":"(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d))"},"punctuation-comma":{"match":",","name":"punctuation.separator.comma.js"},"punctuation-semicolon":{"match":";","name":"punctuation.terminator.statement.js"},"qstring-double":{"begin":"\\"","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.js"}},"end":"(\\")|([^\\\\n\\\\\\\\])$","endCaptures":{"1":{"name":"punctuation.definition.string.end.js"},"2":{"name":"invalid.illegal.newline.js"}},"name":"string.quoted.double.js","patterns":[{"include":"#string-character-escape"}]},"qstring-single":{"begin":"'","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.js"}},"end":"(')|([^\\\\n\\\\\\\\])$","endCaptures":{"1":{"name":"punctuation.definition.string.end.js"},"2":{"name":"invalid.illegal.newline.js"}},"name":"string.quoted.single.js","patterns":[{"include":"#string-character-escape"}]},"regex":{"patterns":[{"begin":"(?<!\\\\+\\\\+|--|})(?<=[!(+,:=?\\\\[]|^return|[^$._[:alnum:]]return|^case|[^$._[:alnum:]]case|=>|&&|\\\\|\\\\||\\\\*/)\\\\s*(/)(?![*/])(?=(?:[^()/\\\\[\\\\\\\\]|\\\\\\\\.|\\\\[([^]\\\\\\\\]|\\\\\\\\.)+]|\\\\(([^)\\\\\\\\]|\\\\\\\\.)+\\\\))+/([dgimsuvy]+|(?![*/])|(?=/\\\\*))(?!\\\\s*[$0-9A-Z_a-z]))","beginCaptures":{"1":{"name":"punctuation.definition.string.begin.js"}},"end":"(/)([dgimsuvy]*)","endCaptures":{"1":{"name":"punctuation.definition.string.end.js"},"2":{"name":"keyword.other.js"}},"name":"string.regexp.js","patterns":[{"include":"#regexp"}]},{"begin":"((?<![]$)_[:alnum:]]|\\\\+\\\\+|--|}|\\\\*/)|((?<=^return|[^$._[:alnum:]]return|^case|[^$._[:alnum:]]case))\\\\s*)/(?![*/])(?=(?:[^/\\\\[\\\\\\\\]|\\\\\\\\.|\\\\[([^]\\\\\\\\]|\\\\\\\\.)*])+/([dgimsuvy]+|(?![*/])|(?=/\\\\*))(?!\\\\s*[$0-9A-Z_a-z]))","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.js"}},"end":"(/)([dgimsuvy]*)","endCaptures":{"1":{"name":"punctuation.definition.string.end.js"},"2":{"name":"keyword.other.js"}},"name":"string.regexp.js","patterns":[{"include":"#regexp"}]}]},"regex-character-class":{"patterns":[{"match":"\\\\\\\\[DSWdfnrstvw]|\\\\.","name":"constant.other.character-class.regexp"},{"match":"\\\\\\\\([0-7]{3}|x\\\\h{2}|u\\\\h{4})","name":"constant.character.numeric.regexp"},{"match":"\\\\\\\\c[A-Z]","name":"constant.character.control.regexp"},{"match":"\\\\\\\\.","name":"constant.character.escape.backslash.regexp"}]},"regexp":{"patterns":[{"match":"\\\\\\\\[Bb]|[$^]","name":"keyword.control.anchor.regexp"},{"captures":{"0":{"name":"keyword.other.back-reference.regexp"},"1":{"name":"variable.other.regexp"}},"match":"\\\\\\\\(?:[1-9]\\\\d*|k<([$A-Z_a-z][$\\\\w]*)>)"},{"match":"[*+?]|\\\\{(\\\\d+,\\\\d+|\\\\d+,|,\\\\d+|\\\\d+)}\\\\??","name":"keyword.operator.quantifier.regexp"},{"match":"\\\\|","name":"keyword.operator.or.regexp"},{"begin":"(\\\\()((\\\\?=)|(\\\\?!)|(\\\\?<=)|(\\\\?<!))","beginCaptures":{"1":{"name":"punctuation.definition.group.regexp"},"2":{"name":"punctuation.definition.group.assertion.regexp"},"3":{"name":"meta.assertion.look-ahead.regexp"},"4":{"name":"meta.assertion.negative-look-ahead.regexp"},"5":{"name":"meta.assertion.look-behind.regexp"},"6":{"name":"meta.assertion.negative-look-behind.regexp"}},"end":"(\\\\))","endCaptures":{"1":{"name":"punctuation.definition.group.regexp"}},"name":"meta.group.assertion.regexp","patterns":[{"include":"#regexp"}]},{"begin":"\\\\((?:(\\\\?:)|\\\\?<([$A-Z_a-z][$\\\\w]*)>)?","beginCaptures":{"0":{"name":"punctuation.definition.group.regexp"},"1":{"name":"punctuation.definition.group.no-capture.regexp"},"2":{"name":"variable.other.regexp"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.definition.group.regexp"}},"name":"meta.group.regexp","patterns":[{"include":"#regexp"}]},{"begin":"(\\\\[)(\\\\^)?","beginCaptures":{"1":{"name":"punctuation.definition.character-class.regexp"},"2":{"name":"keyword.operator.negation.regexp"}},"end":"(])","endCaptures":{"1":{"name":"punctuation.definition.character-class.regexp"}},"name":"constant.other.character-class.set.regexp","patterns":[{"captures":{"1":{"name":"constant.character.numeric.regexp"},"2":{"name":"constant.character.control.regexp"},"3":{"name":"constant.character.escape.backslash.regexp"},"4":{"name":"constant.character.numeric.regexp"},"5":{"name":"constant.character.control.regexp"},"6":{"name":"constant.character.escape.backslash.regexp"}},"match":"(?:.|(\\\\\\\\(?:[0-7]{3}|x\\\\h{2}|u\\\\h{4}))|(\\\\\\\\c[A-Z])|(\\\\\\\\.))-(?:[^]\\\\\\\\]|(\\\\\\\\(?:[0-7]{3}|x\\\\h{2}|u\\\\h{4}))|(\\\\\\\\c[A-Z])|(\\\\\\\\.))","name":"constant.other.character-class.range.regexp"},{"include":"#regex-character-class"}]},{"include":"#regex-character-class"}]},"return-type":{"patterns":[{"begin":"(?<=\\\\))\\\\s*(:)(?=\\\\s*\\\\S)","beginCaptures":{"1":{"name":"keyword.operator.type.annotation.js"}},"end":"(?<![\\\\&:|])(?=$|^|[,;{}]|//)","name":"meta.return.type.js","patterns":[{"include":"#return-type-core"}]},{"begin":"(?<=\\\\))\\\\s*(:)","beginCaptures":{"1":{"name":"keyword.operator.type.annotation.js"}},"end":"(?<![\\\\&:|])((?=[,;{}]|//|^\\\\s*$)|((?<=\\\\S)(?=\\\\s*$)))","name":"meta.return.type.js","patterns":[{"include":"#return-type-core"}]}]},"return-type-core":{"patterns":[{"include":"#comment"},{"begin":"(?<=[\\\\&:|])(?=\\\\s*\\\\{)","end":"(?<=})","patterns":[{"include":"#type-object"}]},{"include":"#type-predicate-operator"},{"include":"#type"}]},"shebang":{"captures":{"1":{"name":"punctuation.definition.comment.js"}},"match":"\\\\A(#!).*(?=$)","name":"comment.line.shebang.js"},"single-line-comment-consuming-line-ending":{"begin":"(^[\\\\t ]+)?((//)(?:\\\\s*((@)internal)(?=\\\\s|$))?)","beginCaptures":{"1":{"name":"punctuation.whitespace.comment.leading.js"},"2":{"name":"comment.line.double-slash.js"},"3":{"name":"punctuation.definition.comment.js"},"4":{"name":"storage.type.internaldeclaration.js"},"5":{"name":"punctuation.decorator.internaldeclaration.js"}},"contentName":"comment.line.double-slash.js","end":"(?=^)"},"statements":{"patterns":[{"include":"#declaration"},{"include":"#control-statement"},{"include":"#after-operator-block-as-object-literal"},{"include":"#decl-block"},{"include":"#label"},{"include":"#expression"},{"include":"#punctuation-semicolon"},{"include":"#string"},{"include":"#comment"}]},"string":{"patterns":[{"include":"#qstring-single"},{"include":"#qstring-double"},{"include":"#template"}]},"string-character-escape":{"match":"\\\\\\\\(x\\\\h{2}|u\\\\h{4}|u\\\\{\\\\h+}|[012][0-7]{0,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.|$)","name":"constant.character.escape.js"},"super-literal":{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))super\\\\b(?!\\\\$)","name":"variable.language.super.js"},"support-function-call-identifiers":{"patterns":[{"include":"#literal"},{"include":"#support-objects"},{"include":"#object-identifiers"},{"include":"#punctuation-accessor"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))import(?=\\\\s*\\\\(\\\\s*[\\"'\`])","name":"keyword.operator.expression.import.js"}]},"support-objects":{"patterns":[{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(arguments)\\\\b(?!\\\\$)","name":"variable.language.arguments.js"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(Promise)\\\\b(?!\\\\$)","name":"support.class.promise.js"},{"captures":{"1":{"name":"keyword.control.import.js"},"2":{"name":"punctuation.accessor.js"},"3":{"name":"punctuation.accessor.optional.js"},"4":{"name":"support.variable.property.importmeta.js"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(import)\\\\s*(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))\\\\s*(meta)\\\\b(?!\\\\$)"},{"captures":{"1":{"name":"keyword.operator.new.js"},"2":{"name":"punctuation.accessor.js"},"3":{"name":"punctuation.accessor.optional.js"},"4":{"name":"support.variable.property.target.js"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(new)\\\\s*(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))\\\\s*(target)\\\\b(?!\\\\$)"},{"captures":{"1":{"name":"punctuation.accessor.js"},"2":{"name":"punctuation.accessor.optional.js"},"3":{"name":"support.variable.property.js"},"4":{"name":"support.constant.js"}},"match":"(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))\\\\s*(?:(constructor|length|prototype|__proto__)\\\\b(?!\\\\$|\\\\s*(<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\()|(EPSILON|MAX_SAFE_INTEGER|MAX_VALUE|MIN_SAFE_INTEGER|MIN_VALUE|NEGATIVE_INFINITY|POSITIVE_INFINITY)\\\\b(?!\\\\$))"},{"captures":{"1":{"name":"support.type.object.module.js"},"2":{"name":"support.type.object.module.js"},"3":{"name":"punctuation.accessor.js"},"4":{"name":"punctuation.accessor.optional.js"},"5":{"name":"support.type.object.module.js"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(exports)|(module)(?:(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))(exports|id|filename|loaded|parent|children))?)\\\\b(?!\\\\$)"}]},"switch-statement":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?=\\\\bswitch\\\\s*\\\\()","end":"}","endCaptures":{"0":{"name":"punctuation.definition.block.js"}},"name":"switch-statement.expr.js","patterns":[{"include":"#comment"},{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(switch)\\\\s*(\\\\()","beginCaptures":{"1":{"name":"keyword.control.switch.js"},"2":{"name":"meta.brace.round.js"}},"end":"\\\\)","endCaptures":{"0":{"name":"meta.brace.round.js"}},"name":"switch-expression.expr.js","patterns":[{"include":"#expression"}]},{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.definition.block.js"}},"end":"(?=})","name":"switch-block.expr.js","patterns":[{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(case|default(?=:))(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","beginCaptures":{"1":{"name":"keyword.control.switch.js"}},"end":"(?=:)","name":"case-clause.expr.js","patterns":[{"include":"#expression"}]},{"begin":"(:)\\\\s*(\\\\{)","beginCaptures":{"1":{"name":"case-clause.expr.js punctuation.definition.section.case-statement.js"},"2":{"name":"meta.block.js punctuation.definition.block.js"}},"contentName":"meta.block.js","end":"}","endCaptures":{"0":{"name":"meta.block.js punctuation.definition.block.js"}},"patterns":[{"include":"#statements"}]},{"captures":{"0":{"name":"case-clause.expr.js punctuation.definition.section.case-statement.js"}},"match":"(:)"},{"include":"#statements"}]}]},"template":{"patterns":[{"include":"#template-call"},{"begin":"([$_[:alpha:]][$_[:alnum:]]*)?(\`)","beginCaptures":{"1":{"name":"entity.name.function.tagged-template.js"},"2":{"name":"string.template.js punctuation.definition.string.template.begin.js"}},"contentName":"string.template.js","end":"\`","endCaptures":{"0":{"name":"string.template.js punctuation.definition.string.template.end.js"}},"patterns":[{"include":"#template-substitution-element"},{"include":"#string-character-escape"}]}]},"template-call":{"patterns":[{"begin":"(?=(([$_[:alpha:]][$_[:alnum:]]*\\\\s*\\\\??\\\\.\\\\s*)*|(\\\\??\\\\.\\\\s*)?)([$_[:alpha:]][$_[:alnum:]]*)(<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))(([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>)*(?<!=)>))*(?<!=)>)*(?<!=)>\\\\s*)?\`)","end":"(?=\`)","patterns":[{"begin":"(?=(([$_[:alpha:]][$_[:alnum:]]*\\\\s*\\\\??\\\\.\\\\s*)*|(\\\\??\\\\.\\\\s*)?)([$_[:alpha:]][$_[:alnum:]]*))","end":"(?=(<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))(([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>)*(?<!=)>))*(?<!=)>)*(?<!=)>\\\\s*)?\`)","patterns":[{"include":"#support-function-call-identifiers"},{"match":"([$_[:alpha:]][$_[:alnum:]]*)","name":"entity.name.function.tagged-template.js"}]},{"include":"#type-arguments"}]},{"begin":"([$_[:alpha:]][$_[:alnum:]]*)?\\\\s*(?=(<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))(([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>)*(?<!=)>))*(?<!=)>)*(?<!=)>\\\\s*)\`)","beginCaptures":{"1":{"name":"entity.name.function.tagged-template.js"}},"end":"(?=\`)","patterns":[{"include":"#type-arguments"}]}]},"template-substitution-element":{"begin":"\\\\$\\\\{","beginCaptures":{"0":{"name":"punctuation.definition.template-expression.begin.js"}},"contentName":"meta.embedded.line.js","end":"}","endCaptures":{"0":{"name":"punctuation.definition.template-expression.end.js"}},"name":"meta.template.expression.js","patterns":[{"include":"#expression"}]},"template-type":{"patterns":[{"include":"#template-call"},{"begin":"([$_[:alpha:]][$_[:alnum:]]*)?(\`)","beginCaptures":{"1":{"name":"entity.name.function.tagged-template.js"},"2":{"name":"string.template.js punctuation.definition.string.template.begin.js"}},"contentName":"string.template.js","end":"\`","endCaptures":{"0":{"name":"string.template.js punctuation.definition.string.template.end.js"}},"patterns":[{"include":"#template-type-substitution-element"},{"include":"#string-character-escape"}]}]},"template-type-substitution-element":{"begin":"\\\\$\\\\{","beginCaptures":{"0":{"name":"punctuation.definition.template-expression.begin.js"}},"contentName":"meta.embedded.line.js","end":"}","endCaptures":{"0":{"name":"punctuation.definition.template-expression.end.js"}},"name":"meta.template.expression.js","patterns":[{"include":"#type"}]},"ternary-expression":{"begin":"(?!\\\\?\\\\.\\\\s*\\\\D)(\\\\?)(?!\\\\?)","beginCaptures":{"1":{"name":"keyword.operator.ternary.js"}},"end":"\\\\s*(:)","endCaptures":{"1":{"name":"keyword.operator.ternary.js"}},"patterns":[{"include":"#expression"}]},"this-literal":{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))this\\\\b(?!\\\\$)","name":"variable.language.this.js"},"type":{"patterns":[{"include":"#comment"},{"include":"#type-string"},{"include":"#numeric-literal"},{"include":"#type-primitive"},{"include":"#type-builtin-literals"},{"include":"#type-parameters"},{"include":"#type-tuple"},{"include":"#type-object"},{"include":"#type-operators"},{"include":"#type-conditional"},{"include":"#type-fn-type-parameters"},{"include":"#type-paren-or-function-parameters"},{"include":"#type-function-return-type"},{"captures":{"1":{"name":"storage.modifier.js"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(readonly)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\\\\s*"},{"include":"#type-name"}]},"type-alias-declaration":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(type)\\\\b\\\\s+([$_[:alpha:]][$_[:alnum:]]*)\\\\s*","beginCaptures":{"1":{"name":"keyword.control.export.js"},"2":{"name":"storage.modifier.js"},"3":{"name":"storage.type.type.js"},"4":{"name":"entity.name.type.alias.js"}},"end":"(?=[;}]|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)","name":"meta.type.declaration.js","patterns":[{"include":"#comment"},{"include":"#type-parameters"},{"begin":"(=)\\\\s*(intrinsic)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","beginCaptures":{"1":{"name":"keyword.operator.assignment.js"},"2":{"name":"keyword.control.intrinsic.js"}},"end":"(?=[;}]|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)","patterns":[{"include":"#type"}]},{"begin":"(=)\\\\s*","beginCaptures":{"1":{"name":"keyword.operator.assignment.js"}},"end":"(?=[;}]|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)","patterns":[{"include":"#type"}]}]},"type-annotation":{"patterns":[{"begin":"(:)(?=\\\\s*\\\\S)","beginCaptures":{"1":{"name":"keyword.operator.type.annotation.js"}},"end":"(?<![\\\\&:|])(?!\\\\s*[\\\\&|]\\\\s+)((?=^|[]),;}]|//)|(?==[^>])|((?<=[]$)>_}[:alpha:]])\\\\s*(?=\\\\{)))","name":"meta.type.annotation.js","patterns":[{"include":"#type"}]},{"begin":"(:)","beginCaptures":{"1":{"name":"keyword.operator.type.annotation.js"}},"end":"(?<![\\\\&:|])((?=[]),;}]|//)|(?==[^>])|(?=^\\\\s*$)|((?<=[]$)>_}[:alpha:]])\\\\s*(?=\\\\{)))","name":"meta.type.annotation.js","patterns":[{"include":"#type"}]}]},"type-arguments":{"begin":"<","beginCaptures":{"0":{"name":"punctuation.definition.typeparameters.begin.js"}},"end":">","endCaptures":{"0":{"name":"punctuation.definition.typeparameters.end.js"}},"name":"meta.type.parameters.js","patterns":[{"include":"#type-arguments-body"}]},"type-arguments-body":{"patterns":[{"captures":{"0":{"name":"keyword.operator.type.js"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(_)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))"},{"include":"#type"},{"include":"#punctuation-comma"}]},"type-builtin-literals":{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(this|true|false|undefined|null|object)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"support.type.builtin.js"},"type-conditional":{"patterns":[{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(extends)\\\\s+","beginCaptures":{"1":{"name":"storage.modifier.js"}},"end":"(?<=:)","patterns":[{"begin":"\\\\?","beginCaptures":{"0":{"name":"keyword.operator.ternary.js"}},"end":":","endCaptures":{"0":{"name":"keyword.operator.ternary.js"}},"patterns":[{"include":"#type"}]},{"include":"#type"}]}]},"type-fn-type-parameters":{"patterns":[{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(abstract)\\\\s+)?(new)\\\\b(?=\\\\s*<)","beginCaptures":{"1":{"name":"meta.type.constructor.js storage.modifier.js"},"2":{"name":"meta.type.constructor.js keyword.control.new.js"}},"end":"(?<=>)","patterns":[{"include":"#comment"},{"include":"#type-parameters"}]},{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(abstract)\\\\s+)?(new)\\\\b\\\\s*(?=\\\\()","beginCaptures":{"1":{"name":"storage.modifier.js"},"2":{"name":"keyword.control.new.js"}},"end":"(?<=\\\\))","name":"meta.type.constructor.js","patterns":[{"include":"#function-parameters"}]},{"begin":"((?=\\\\(\\\\s*((\\\\))|(\\\\.\\\\.\\\\.)|([$_[:alnum:]]+\\\\s*(([,:=?])|(\\\\)\\\\s*=>))))))","end":"(?<=\\\\))","name":"meta.type.function.js","patterns":[{"include":"#function-parameters"}]}]},"type-function-return-type":{"patterns":[{"begin":"(=>)(?=\\\\s*\\\\S)","beginCaptures":{"1":{"name":"storage.type.function.arrow.js"}},"end":"(?<!=>)(?<![\\\\&|])(?=[]),:;=>?{}]|//|$)","name":"meta.type.function.return.js","patterns":[{"include":"#type-function-return-type-core"}]},{"begin":"=>","beginCaptures":{"0":{"name":"storage.type.function.arrow.js"}},"end":"(?<!=>)(?<![\\\\&|])((?=[]),:;=>?{}]|//|^\\\\s*$)|((?<=\\\\S)(?=\\\\s*$)))","name":"meta.type.function.return.js","patterns":[{"include":"#type-function-return-type-core"}]}]},"type-function-return-type-core":{"patterns":[{"include":"#comment"},{"begin":"(?<==>)(?=\\\\s*\\\\{)","end":"(?<=})","patterns":[{"include":"#type-object"}]},{"include":"#type-predicate-operator"},{"include":"#type"}]},"type-infer":{"patterns":[{"captures":{"1":{"name":"keyword.operator.expression.infer.js"},"2":{"name":"entity.name.type.js"},"3":{"name":"keyword.operator.expression.extends.js"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(infer)\\\\s+([$_[:alpha:]][$_[:alnum:]]*)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))(?:\\\\s+(extends)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))?","name":"meta.type.infer.js"}]},"type-name":{"patterns":[{"begin":"([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))\\\\s*(<)","captures":{"1":{"name":"entity.name.type.module.js"},"2":{"name":"punctuation.accessor.js"},"3":{"name":"punctuation.accessor.optional.js"},"4":{"name":"meta.type.parameters.js punctuation.definition.typeparameters.begin.js"}},"contentName":"meta.type.parameters.js","end":"(>)","endCaptures":{"1":{"name":"meta.type.parameters.js punctuation.definition.typeparameters.end.js"}},"patterns":[{"include":"#type-arguments-body"}]},{"begin":"([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(<)","beginCaptures":{"1":{"name":"entity.name.type.js"},"2":{"name":"meta.type.parameters.js punctuation.definition.typeparameters.begin.js"}},"contentName":"meta.type.parameters.js","end":"(>)","endCaptures":{"1":{"name":"meta.type.parameters.js punctuation.definition.typeparameters.end.js"}},"patterns":[{"include":"#type-arguments-body"}]},{"captures":{"1":{"name":"entity.name.type.module.js"},"2":{"name":"punctuation.accessor.js"},"3":{"name":"punctuation.accessor.optional.js"}},"match":"([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))"},{"match":"[$_[:alpha:]][$_[:alnum:]]*","name":"entity.name.type.js"}]},"type-object":{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.definition.block.js"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.block.js"}},"name":"meta.object.type.js","patterns":[{"include":"#comment"},{"include":"#method-declaration"},{"include":"#indexer-declaration"},{"include":"#indexer-mapped-type-declaration"},{"include":"#field-declaration"},{"include":"#type-annotation"},{"begin":"\\\\.\\\\.\\\\.","beginCaptures":{"0":{"name":"keyword.operator.spread.js"}},"end":"(?=[,;}]|$)|(?<=})","patterns":[{"include":"#type"}]},{"include":"#punctuation-comma"},{"include":"#punctuation-semicolon"},{"include":"#type"}]},"type-operators":{"patterns":[{"include":"#typeof-operator"},{"include":"#type-infer"},{"begin":"([\\\\&|])(?=\\\\s*\\\\{)","beginCaptures":{"0":{"name":"keyword.operator.type.js"}},"end":"(?<=})","patterns":[{"include":"#type-object"}]},{"begin":"[\\\\&|]","beginCaptures":{"0":{"name":"keyword.operator.type.js"}},"end":"(?=\\\\S)"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))keyof(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.operator.expression.keyof.js"},{"match":"([:?])","name":"keyword.operator.ternary.js"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))import(?=\\\\s*\\\\()","name":"keyword.operator.expression.import.js"}]},"type-parameters":{"begin":"(<)","beginCaptures":{"1":{"name":"punctuation.definition.typeparameters.begin.js"}},"end":"(>)","endCaptures":{"1":{"name":"punctuation.definition.typeparameters.end.js"}},"name":"meta.type.parameters.js","patterns":[{"include":"#comment"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(extends|in|out|const)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"storage.modifier.js"},{"include":"#type"},{"include":"#punctuation-comma"},{"match":"(=)(?!>)","name":"keyword.operator.assignment.js"}]},"type-paren-or-function-parameters":{"begin":"\\\\(","beginCaptures":{"0":{"name":"meta.brace.round.js"}},"end":"\\\\)","endCaptures":{"0":{"name":"meta.brace.round.js"}},"name":"meta.type.paren.cover.js","patterns":[{"captures":{"1":{"name":"storage.modifier.js"},"2":{"name":"keyword.operator.rest.js"},"3":{"name":"entity.name.function.js variable.language.this.js"},"4":{"name":"entity.name.function.js"},"5":{"name":"keyword.operator.optional.js"}},"match":"(?:(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(public|private|protected|readonly)\\\\s+)?(?:(\\\\.\\\\.\\\\.)\\\\s*)?(?<![:=])(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(this)|([$_[:alpha:]][$_[:alnum:]]*))\\\\s*(\\\\??)(?=\\\\s*(:\\\\s*((<)|(\\\\(\\\\s*((\\\\))|(\\\\.\\\\.\\\\.)|([$_[:alnum:]]+\\\\s*(([,:=?])|(\\\\)\\\\s*=>)))))))|(:\\\\s*(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))Function(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))|(:\\\\s*((<\\\\s*)$|(\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))))"},{"captures":{"1":{"name":"storage.modifier.js"},"2":{"name":"keyword.operator.rest.js"},"3":{"name":"variable.parameter.js variable.language.this.js"},"4":{"name":"variable.parameter.js"},"5":{"name":"keyword.operator.optional.js"}},"match":"(?:(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(public|private|protected|readonly)\\\\s+)?(?:(\\\\.\\\\.\\\\.)\\\\s*)?(?<![:=])(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(this)|([$_[:alpha:]][$_[:alnum:]]*))\\\\s*(\\\\??)(?=:)"},{"include":"#type-annotation"},{"match":",","name":"punctuation.separator.parameter.js"},{"include":"#type"}]},"type-predicate-operator":{"patterns":[{"captures":{"1":{"name":"keyword.operator.type.asserts.js"},"2":{"name":"variable.parameter.js variable.language.this.js"},"3":{"name":"variable.parameter.js"},"4":{"name":"keyword.operator.expression.is.js"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(asserts)\\\\s+)?(?!asserts)(?:(this)|([$_[:alpha:]][$_[:alnum:]]*))\\\\s(is)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))"},{"captures":{"1":{"name":"keyword.operator.type.asserts.js"},"2":{"name":"variable.parameter.js variable.language.this.js"},"3":{"name":"variable.parameter.js"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(asserts)\\\\s+(?!is)(?:(this)|([$_[:alpha:]][$_[:alnum:]]*))(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))asserts(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.operator.type.asserts.js"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))is(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.operator.expression.is.js"}]},"type-primitive":{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(string|number|bigint|boolean|symbol|any|void|never|unknown)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"support.type.primitive.js"},"type-string":{"patterns":[{"include":"#qstring-single"},{"include":"#qstring-double"},{"include":"#template-type"}]},"type-tuple":{"begin":"\\\\[","beginCaptures":{"0":{"name":"meta.brace.square.js"}},"end":"]","endCaptures":{"0":{"name":"meta.brace.square.js"}},"name":"meta.type.tuple.js","patterns":[{"match":"\\\\.\\\\.\\\\.","name":"keyword.operator.rest.js"},{"captures":{"1":{"name":"entity.name.label.js"},"2":{"name":"keyword.operator.optional.js"},"3":{"name":"punctuation.separator.label.js"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(\\\\?)?\\\\s*(:)"},{"include":"#type"},{"include":"#punctuation-comma"}]},"typeof-operator":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))typeof(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","beginCaptures":{"0":{"name":"keyword.operator.expression.typeof.js"}},"end":"(?=[]\\\\&),:;=>?{|}]|(extends\\\\s+)|$|;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)","patterns":[{"include":"#type-arguments"},{"include":"#expression"}]},"undefined-literal":{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))undefined(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"constant.language.undefined.js"},"var-expr":{"patterns":[{"begin":"(?=(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(var|let)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))","end":"(?!(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(var|let)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))((?=^|[;}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+)|;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)|((?<!^let|[^$._[:alnum:]]let|^var|[^$._[:alnum:]]var)(?=\\\\s*$)))","name":"meta.var.expr.js","patterns":[{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(var|let)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\\\\s*","beginCaptures":{"1":{"name":"keyword.control.export.js"},"2":{"name":"storage.modifier.js"},"3":{"name":"storage.type.js"}},"end":"(?=\\\\S)"},{"include":"#destructuring-variable"},{"include":"#var-single-variable"},{"include":"#variable-initializer"},{"include":"#comment"},{"begin":"(,)\\\\s*(?=$|//)","beginCaptures":{"1":{"name":"punctuation.separator.comma.js"}},"end":"(?<!,)(((?=[;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+)|^\\\\s*$))|((?<=\\\\S)(?=\\\\s*$)))","patterns":[{"include":"#single-line-comment-consuming-line-ending"},{"include":"#comment"},{"include":"#destructuring-variable"},{"include":"#var-single-variable"},{"include":"#punctuation-comma"}]},{"include":"#punctuation-comma"}]},{"begin":"(?=(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(const(?!\\\\s+enum\\\\b))(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))","beginCaptures":{"1":{"name":"keyword.control.export.js"},"2":{"name":"storage.modifier.js"},"3":{"name":"storage.type.js"}},"end":"(?!(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(const(?!\\\\s+enum\\\\b))(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))((?=^|[;}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+)|;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)|((?<!(?:^|[^$._[:alnum:]])const)(?=\\\\s*$)))","name":"meta.var.expr.js","patterns":[{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(const(?!\\\\s+enum\\\\b))(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\\\\s*","beginCaptures":{"1":{"name":"keyword.control.export.js"},"2":{"name":"storage.modifier.js"},"3":{"name":"storage.type.js"}},"end":"(?=\\\\S)"},{"include":"#destructuring-const"},{"include":"#var-single-const"},{"include":"#variable-initializer"},{"include":"#comment"},{"begin":"(,)\\\\s*(?=$|//)","beginCaptures":{"1":{"name":"punctuation.separator.comma.js"}},"end":"(?<!,)(((?=[;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+)|^\\\\s*$))|((?<=\\\\S)(?=\\\\s*$)))","patterns":[{"include":"#single-line-comment-consuming-line-ending"},{"include":"#comment"},{"include":"#destructuring-const"},{"include":"#var-single-const"},{"include":"#punctuation-comma"}]},{"include":"#punctuation-comma"}]},{"begin":"(?=(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b\\\\b(using(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])|await\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b)\\\\b(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))","beginCaptures":{"1":{"name":"keyword.control.export.js"},"2":{"name":"storage.modifier.js"},"3":{"name":"storage.type.js"}},"end":"(?!(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b\\\\b(using(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])|await\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b)\\\\b(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))((?=[;}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+)|;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)|((?<!(?:^|[^$._[:alnum:]]|^await\\\\s+|[^$._[:alnum:]]await\\\\s+)using)(?=\\\\s*$)))","name":"meta.var.expr.js","patterns":[{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b\\\\b(using(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])|await\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b)\\\\b(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\\\\s*","beginCaptures":{"1":{"name":"keyword.control.export.js"},"2":{"name":"storage.modifier.js"},"3":{"name":"storage.type.js"}},"end":"(?=\\\\S)"},{"include":"#var-single-const"},{"include":"#variable-initializer"},{"include":"#comment"},{"begin":"(,)\\\\s*((?!\\\\S)|(?=//))","beginCaptures":{"1":{"name":"punctuation.separator.comma.js"}},"end":"(?<!,)(((?=[;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+)|^\\\\s*$))|((?<=\\\\S)(?=\\\\s*$)))","patterns":[{"include":"#single-line-comment-consuming-line-ending"},{"include":"#comment"},{"include":"#var-single-const"},{"include":"#punctuation-comma"}]},{"include":"#punctuation-comma"}]}]},"var-single-const":{"patterns":[{"begin":"([$_[:alpha:]][$_[:alnum:]]*)(?=\\\\s*(=\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|(\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|(<\\\\s*[$_[:alpha:]][$_[:alnum:]]*\\\\s+extends\\\\s*[^=>])|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\"'()\`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>)))))|(:\\\\s*((<)|(\\\\(\\\\s*((\\\\))|(\\\\.\\\\.\\\\.)|([$_[:alnum:]]+\\\\s*(([,:=?])|(\\\\)\\\\s*=>)))))))|(:\\\\s*(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))Function(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))|(:\\\\s*((<\\\\s*)$|(\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))))))|(:\\\\s*(=>|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(<[^<>]*>)|[^(),<=>])+=\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|(\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|(<\\\\s*[$_[:alpha:]][$_[:alnum:]]*\\\\s+extends\\\\s*[^=>])|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\"'()\`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>))))))","beginCaptures":{"1":{"name":"meta.definition.variable.js variable.other.constant.js entity.name.function.js"}},"end":"(?=$|^|[,;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+)|(;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b))","name":"meta.var-single-variable.expr.js","patterns":[{"include":"#var-single-variable-type-annotation"}]},{"begin":"([$_[:alpha:]][$_[:alnum:]]*)","beginCaptures":{"1":{"name":"meta.definition.variable.js variable.other.constant.js"}},"end":"(?=$|^|[,;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+)|(;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b))","name":"meta.var-single-variable.expr.js","patterns":[{"include":"#var-single-variable-type-annotation"}]}]},"var-single-variable":{"patterns":[{"begin":"([$_[:alpha:]][$_[:alnum:]]*)(!)?(?=\\\\s*(=\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|(\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|(<\\\\s*[$_[:alpha:]][$_[:alnum:]]*\\\\s+extends\\\\s*[^=>])|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\"'()\`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>)))))|(:\\\\s*((<)|(\\\\(\\\\s*((\\\\))|(\\\\.\\\\.\\\\.)|([$_[:alnum:]]+\\\\s*(([,:=?])|(\\\\)\\\\s*=>)))))))|(:\\\\s*(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))Function(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))|(:\\\\s*((<\\\\s*)$|(\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))))))|(:\\\\s*(=>|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(<[^<>]*>)|[^(),<=>])+=\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|(\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|(<\\\\s*[$_[:alpha:]][$_[:alnum:]]*\\\\s+extends\\\\s*[^=>])|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\"'()\`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>))))))","beginCaptures":{"1":{"name":"meta.definition.variable.js entity.name.function.js"},"2":{"name":"keyword.operator.definiteassignment.js"}},"end":"(?=$|^|[,;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+)|(;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b))","name":"meta.var-single-variable.expr.js","patterns":[{"include":"#var-single-variable-type-annotation"}]},{"begin":"(\\\\p{upper}[$_\\\\d[:upper:]]*)(?![$_[:alnum:]])(!)?","beginCaptures":{"1":{"name":"meta.definition.variable.js variable.other.constant.js"},"2":{"name":"keyword.operator.definiteassignment.js"}},"end":"(?=$|^|[,;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+)|(;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b))","name":"meta.var-single-variable.expr.js","patterns":[{"include":"#var-single-variable-type-annotation"}]},{"begin":"([$_[:alpha:]][$_[:alnum:]]*)(!)?","beginCaptures":{"1":{"name":"meta.definition.variable.js variable.other.readwrite.js"},"2":{"name":"keyword.operator.definiteassignment.js"}},"end":"(?=$|^|[,;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+)|(;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b))","name":"meta.var-single-variable.expr.js","patterns":[{"include":"#var-single-variable-type-annotation"}]}]},"var-single-variable-type-annotation":{"patterns":[{"include":"#type-annotation"},{"include":"#string"},{"include":"#comment"}]},"variable-initializer":{"patterns":[{"begin":"(?<![!=])(=)(?!=)(?=\\\\s*\\\\S)(?!\\\\s*.*=>\\\\s*$)","beginCaptures":{"1":{"name":"keyword.operator.assignment.js"}},"end":"(?=$|^|[]),;}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+))","patterns":[{"include":"#expression"}]},{"begin":"(?<![!=])(=)(?!=)","beginCaptures":{"1":{"name":"keyword.operator.assignment.js"}},"end":"(?=[]),;}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+))|(?=^\\\\s*$)|(?<![-\\\\&*+/|])(?<=\\\\S)(?<!=)(?=\\\\s*$)","patterns":[{"include":"#expression"}]}]}},"scopeName":"source.js","aliases":["js","cjs","mjs"]}`))
  ];
  Vs = [
    Object.freeze(JSON.parse('{"displayName":"TypeScript","name":"typescript","patterns":[{"include":"#directives"},{"include":"#statements"},{"include":"#shebang"}],"repository":{"access-modifier":{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(abstract|declare|override|public|protected|private|readonly|static)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"storage.modifier.ts"},"after-operator-block-as-object-literal":{"begin":"(?<!\\\\+\\\\+|--)(?<=[!(+,:=>?\\\\[]|^await|[^$._[:alnum:]]await|^return|[^$._[:alnum:]]return|^yield|[^$._[:alnum:]]yield|^throw|[^$._[:alnum:]]throw|^in|[^$._[:alnum:]]in|^of|[^$._[:alnum:]]of|^typeof|[^$._[:alnum:]]typeof|&&|\\\\|\\\\||\\\\*)\\\\s*(\\\\{)","beginCaptures":{"1":{"name":"punctuation.definition.block.ts"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.block.ts"}},"name":"meta.objectliteral.ts","patterns":[{"include":"#object-member"}]},"array-binding-pattern":{"begin":"(?:(\\\\.\\\\.\\\\.)\\\\s*)?(\\\\[)","beginCaptures":{"1":{"name":"keyword.operator.rest.ts"},"2":{"name":"punctuation.definition.binding-pattern.array.ts"}},"end":"]","endCaptures":{"0":{"name":"punctuation.definition.binding-pattern.array.ts"}},"patterns":[{"include":"#binding-element"},{"include":"#punctuation-comma"}]},"array-binding-pattern-const":{"begin":"(?:(\\\\.\\\\.\\\\.)\\\\s*)?(\\\\[)","beginCaptures":{"1":{"name":"keyword.operator.rest.ts"},"2":{"name":"punctuation.definition.binding-pattern.array.ts"}},"end":"]","endCaptures":{"0":{"name":"punctuation.definition.binding-pattern.array.ts"}},"patterns":[{"include":"#binding-element-const"},{"include":"#punctuation-comma"}]},"array-literal":{"begin":"\\\\s*(\\\\[)","beginCaptures":{"1":{"name":"meta.brace.square.ts"}},"end":"]","endCaptures":{"0":{"name":"meta.brace.square.ts"}},"name":"meta.array.literal.ts","patterns":[{"include":"#expression"},{"include":"#punctuation-comma"}]},"arrow-function":{"patterns":[{"captures":{"1":{"name":"storage.modifier.async.ts"},"2":{"name":"variable.parameter.ts"}},"match":"(?:(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))\\\\b(async)\\\\s+)?([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(?==>)","name":"meta.arrow.ts"},{"begin":"(?:(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))\\\\b(async))?((?<![]!)}])\\\\s*(?=((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\"\'()`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>)))","beginCaptures":{"1":{"name":"storage.modifier.async.ts"}},"end":"(?==>|\\\\{|^(\\\\s*(export|function|class|interface|let|var|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|const|import|enum|namespace|module|type|abstract|declare)\\\\s+))","name":"meta.arrow.ts","patterns":[{"include":"#comment"},{"include":"#type-parameters"},{"include":"#function-parameters"},{"include":"#arrow-return-type"},{"include":"#possibly-arrow-return-type"}]},{"begin":"=>","beginCaptures":{"0":{"name":"storage.type.function.arrow.ts"}},"end":"((?<=[}\\\\S])(?<!=>)|((?!\\\\{)(?=\\\\S)))(?!/[*/])","name":"meta.arrow.ts","patterns":[{"include":"#single-line-comment-consuming-line-ending"},{"include":"#decl-block"},{"include":"#expression"}]}]},"arrow-return-type":{"begin":"(?<=\\\\))\\\\s*(:)","beginCaptures":{"1":{"name":"keyword.operator.type.annotation.ts"}},"end":"(?==>|\\\\{|^(\\\\s*(export|function|class|interface|let|var|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|const|import|enum|namespace|module|type|abstract|declare)\\\\s+))","name":"meta.return.type.arrow.ts","patterns":[{"include":"#arrow-return-type-body"}]},"arrow-return-type-body":{"patterns":[{"begin":"(?<=:)(?=\\\\s*\\\\{)","end":"(?<=})","patterns":[{"include":"#type-object"}]},{"include":"#type-predicate-operator"},{"include":"#type"}]},"async-modifier":{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(async)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"storage.modifier.async.ts"},"binding-element":{"patterns":[{"include":"#comment"},{"include":"#string"},{"include":"#numeric-literal"},{"include":"#regex"},{"include":"#object-binding-pattern"},{"include":"#array-binding-pattern"},{"include":"#destructuring-variable-rest"},{"include":"#variable-initializer"}]},"binding-element-const":{"patterns":[{"include":"#comment"},{"include":"#string"},{"include":"#numeric-literal"},{"include":"#regex"},{"include":"#object-binding-pattern-const"},{"include":"#array-binding-pattern-const"},{"include":"#destructuring-variable-rest-const"},{"include":"#variable-initializer"}]},"boolean-literal":{"patterns":[{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))true(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"constant.language.boolean.true.ts"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))false(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"constant.language.boolean.false.ts"}]},"brackets":{"patterns":[{"begin":"\\\\{","end":"}|(?=\\\\*/)","patterns":[{"include":"#brackets"}]},{"begin":"\\\\[","end":"]|(?=\\\\*/)","patterns":[{"include":"#brackets"}]}]},"cast":{"patterns":[{"captures":{"1":{"name":"meta.brace.angle.ts"},"2":{"name":"storage.modifier.ts"},"3":{"name":"meta.brace.angle.ts"}},"match":"\\\\s*(<)\\\\s*(const)\\\\s*(>)","name":"cast.expr.ts"},{"begin":"(?<!\\\\+\\\\+|--)(?<=^return|[^$._[:alnum:]]return|^throw|[^$._[:alnum:]]throw|^yield|[^$._[:alnum:]]yield|^await|[^$._[:alnum:]]await|^default|[^$._[:alnum:]]default|[\\\\&(*,:=>?^|]|[^$_[:alnum:]](?:\\\\+\\\\+|--)|[^+]\\\\+|[^-]-)\\\\s*(<)(?!<?=)(?!\\\\s*$)","beginCaptures":{"1":{"name":"meta.brace.angle.ts"}},"end":"(>)","endCaptures":{"1":{"name":"meta.brace.angle.ts"}},"name":"cast.expr.ts","patterns":[{"include":"#type"}]},{"begin":"(?<=^)\\\\s*(<)(?=[$_[:alpha:]][$_[:alnum:]]*\\\\s*>)","beginCaptures":{"1":{"name":"meta.brace.angle.ts"}},"end":"(>)","endCaptures":{"1":{"name":"meta.brace.angle.ts"}},"name":"cast.expr.ts","patterns":[{"include":"#type"}]}]},"class-declaration":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(?:(abstract)\\\\s+)?\\\\b(class)\\\\b(?=\\\\s+|/[*/])","beginCaptures":{"1":{"name":"keyword.control.export.ts"},"2":{"name":"storage.modifier.ts"},"3":{"name":"storage.modifier.ts"},"4":{"name":"storage.type.class.ts"}},"end":"(?<=})","name":"meta.class.ts","patterns":[{"include":"#class-declaration-or-expression-patterns"}]},"class-declaration-or-expression-patterns":{"patterns":[{"include":"#comment"},{"include":"#class-or-interface-heritage"},{"captures":{"0":{"name":"entity.name.type.class.ts"}},"match":"[$_[:alpha:]][$_[:alnum:]]*"},{"include":"#type-parameters"},{"include":"#class-or-interface-body"}]},"class-expression":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(abstract)\\\\s+)?(class)\\\\b(?=\\\\s+|[<{]|/[*/])","beginCaptures":{"1":{"name":"storage.modifier.ts"},"2":{"name":"storage.type.class.ts"}},"end":"(?<=})","name":"meta.class.ts","patterns":[{"include":"#class-declaration-or-expression-patterns"}]},"class-or-interface-body":{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.definition.block.ts"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.block.ts"}},"patterns":[{"include":"#comment"},{"include":"#decorator"},{"begin":"(?<=:)\\\\s*","end":"(?=[-\\\\])+,:;}\\\\s]|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)","patterns":[{"include":"#expression"}]},{"include":"#method-declaration"},{"include":"#indexer-declaration"},{"include":"#field-declaration"},{"include":"#string"},{"include":"#type-annotation"},{"include":"#variable-initializer"},{"include":"#access-modifier"},{"include":"#property-accessor"},{"include":"#async-modifier"},{"include":"#after-operator-block-as-object-literal"},{"include":"#decl-block"},{"include":"#expression"},{"include":"#punctuation-comma"},{"include":"#punctuation-semicolon"}]},"class-or-interface-heritage":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))\\\\b(extends|implements)\\\\b(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","beginCaptures":{"1":{"name":"storage.modifier.ts"}},"end":"(?=\\\\{)","patterns":[{"include":"#comment"},{"include":"#class-or-interface-heritage"},{"include":"#type-parameters"},{"include":"#expressionWithoutIdentifiers"},{"captures":{"1":{"name":"entity.name.type.module.ts"},"2":{"name":"punctuation.accessor.ts"},"3":{"name":"punctuation.accessor.optional.ts"}},"match":"([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))(?=\\\\s*[$_[:alpha:]][$_[:alnum:]]*(\\\\s*\\\\??\\\\.\\\\s*[$_[:alpha:]][$_[:alnum:]]*)*\\\\s*)"},{"captures":{"1":{"name":"entity.other.inherited-class.ts"}},"match":"([$_[:alpha:]][$_[:alnum:]]*)"},{"include":"#expressionPunctuations"}]},"comment":{"patterns":[{"begin":"/\\\\*\\\\*(?!/)","beginCaptures":{"0":{"name":"punctuation.definition.comment.ts"}},"end":"\\\\*/","endCaptures":{"0":{"name":"punctuation.definition.comment.ts"}},"name":"comment.block.documentation.ts","patterns":[{"include":"#docblock"}]},{"begin":"(/\\\\*)(?:\\\\s*((@)internal)(?=\\\\s|(\\\\*/)))?","beginCaptures":{"1":{"name":"punctuation.definition.comment.ts"},"2":{"name":"storage.type.internaldeclaration.ts"},"3":{"name":"punctuation.decorator.internaldeclaration.ts"}},"end":"\\\\*/","endCaptures":{"0":{"name":"punctuation.definition.comment.ts"}},"name":"comment.block.ts"},{"begin":"(^[\\\\t ]+)?((//)(?:\\\\s*((@)internal)(?=\\\\s|$))?)","beginCaptures":{"1":{"name":"punctuation.whitespace.comment.leading.ts"},"2":{"name":"comment.line.double-slash.ts"},"3":{"name":"punctuation.definition.comment.ts"},"4":{"name":"storage.type.internaldeclaration.ts"},"5":{"name":"punctuation.decorator.internaldeclaration.ts"}},"contentName":"comment.line.double-slash.ts","end":"(?=$)"}]},"control-statement":{"patterns":[{"include":"#switch-statement"},{"include":"#for-loop"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(catch|finally|throw|try)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.control.trycatch.ts"},{"captures":{"1":{"name":"keyword.control.loop.ts"},"2":{"name":"entity.name.label.ts"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(break|continue|goto)\\\\s+([$_[:alpha:]][$_[:alnum:]]*)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(break|continue|do|goto|while)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.control.loop.ts"},{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(return)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","beginCaptures":{"0":{"name":"keyword.control.flow.ts"}},"end":"(?=[;}]|$|;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)","patterns":[{"include":"#expression"}]},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(case|default|switch)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.control.switch.ts"},{"include":"#if-statement"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(else|if)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.control.conditional.ts"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(with)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.control.with.ts"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(package)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.control.ts"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(debugger)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.other.debugger.ts"}]},"decl-block":{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.definition.block.ts"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.block.ts"}},"name":"meta.block.ts","patterns":[{"include":"#statements"}]},"declaration":{"patterns":[{"include":"#decorator"},{"include":"#var-expr"},{"include":"#function-declaration"},{"include":"#class-declaration"},{"include":"#interface-declaration"},{"include":"#enum-declaration"},{"include":"#namespace-declaration"},{"include":"#type-alias-declaration"},{"include":"#import-equals-declaration"},{"include":"#import-declaration"},{"include":"#export-declaration"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(declare|export)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"storage.modifier.ts"}]},"decorator":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))@","beginCaptures":{"0":{"name":"punctuation.decorator.ts"}},"end":"(?=\\\\s)","name":"meta.decorator.ts","patterns":[{"include":"#expression"}]},"destructuring-const":{"patterns":[{"begin":"(?<![:=]|^of|[^$._[:alnum:]]of|^in|[^$._[:alnum:]]in)\\\\s*(?=\\\\{)","end":"(?=$|^|[,;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+))","name":"meta.object-binding-pattern-variable.ts","patterns":[{"include":"#object-binding-pattern-const"},{"include":"#type-annotation"},{"include":"#comment"}]},{"begin":"(?<![:=]|^of|[^$._[:alnum:]]of|^in|[^$._[:alnum:]]in)\\\\s*(?=\\\\[)","end":"(?=$|^|[,;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+))","name":"meta.array-binding-pattern-variable.ts","patterns":[{"include":"#array-binding-pattern-const"},{"include":"#type-annotation"},{"include":"#comment"}]}]},"destructuring-parameter":{"patterns":[{"begin":"(?<![:=])\\\\s*(?:(\\\\.\\\\.\\\\.)\\\\s*)?(\\\\{)","beginCaptures":{"1":{"name":"keyword.operator.rest.ts"},"2":{"name":"punctuation.definition.binding-pattern.object.ts"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.binding-pattern.object.ts"}},"name":"meta.parameter.object-binding-pattern.ts","patterns":[{"include":"#parameter-object-binding-element"}]},{"begin":"(?<![:=])\\\\s*(?:(\\\\.\\\\.\\\\.)\\\\s*)?(\\\\[)","beginCaptures":{"1":{"name":"keyword.operator.rest.ts"},"2":{"name":"punctuation.definition.binding-pattern.array.ts"}},"end":"]","endCaptures":{"0":{"name":"punctuation.definition.binding-pattern.array.ts"}},"name":"meta.paramter.array-binding-pattern.ts","patterns":[{"include":"#parameter-binding-element"},{"include":"#punctuation-comma"}]}]},"destructuring-parameter-rest":{"captures":{"1":{"name":"keyword.operator.rest.ts"},"2":{"name":"variable.parameter.ts"}},"match":"(?:(\\\\.\\\\.\\\\.)\\\\s*)?([$_[:alpha:]][$_[:alnum:]]*)"},"destructuring-variable":{"patterns":[{"begin":"(?<![:=]|^of|[^$._[:alnum:]]of|^in|[^$._[:alnum:]]in)\\\\s*(?=\\\\{)","end":"(?=$|^|[,;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+))","name":"meta.object-binding-pattern-variable.ts","patterns":[{"include":"#object-binding-pattern"},{"include":"#type-annotation"},{"include":"#comment"}]},{"begin":"(?<![:=]|^of|[^$._[:alnum:]]of|^in|[^$._[:alnum:]]in)\\\\s*(?=\\\\[)","end":"(?=$|^|[,;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+))","name":"meta.array-binding-pattern-variable.ts","patterns":[{"include":"#array-binding-pattern"},{"include":"#type-annotation"},{"include":"#comment"}]}]},"destructuring-variable-rest":{"captures":{"1":{"name":"keyword.operator.rest.ts"},"2":{"name":"meta.definition.variable.ts variable.other.readwrite.ts"}},"match":"(?:(\\\\.\\\\.\\\\.)\\\\s*)?([$_[:alpha:]][$_[:alnum:]]*)"},"destructuring-variable-rest-const":{"captures":{"1":{"name":"keyword.operator.rest.ts"},"2":{"name":"meta.definition.variable.ts variable.other.constant.ts"}},"match":"(?:(\\\\.\\\\.\\\\.)\\\\s*)?([$_[:alpha:]][$_[:alnum:]]*)"},"directives":{"begin":"^(///)\\\\s*(?=<(reference|amd-dependency|amd-module)(\\\\s+(path|types|no-default-lib|lib|name|resolution-mode)\\\\s*=\\\\s*((\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`)))+\\\\s*/>\\\\s*$)","beginCaptures":{"1":{"name":"punctuation.definition.comment.ts"}},"end":"(?=$)","name":"comment.line.triple-slash.directive.ts","patterns":[{"begin":"(<)(reference|amd-dependency|amd-module)","beginCaptures":{"1":{"name":"punctuation.definition.tag.directive.ts"},"2":{"name":"entity.name.tag.directive.ts"}},"end":"/>","endCaptures":{"0":{"name":"punctuation.definition.tag.directive.ts"}},"name":"meta.tag.ts","patterns":[{"match":"path|types|no-default-lib|lib|name|resolution-mode","name":"entity.other.attribute-name.directive.ts"},{"match":"=","name":"keyword.operator.assignment.ts"},{"include":"#string"}]}]},"docblock":{"patterns":[{"captures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"},"3":{"name":"constant.language.access-type.jsdoc"}},"match":"((@)a(?:ccess|pi))\\\\s+(p(?:rivate|rotected|ublic))\\\\b"},{"captures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"},"3":{"name":"entity.name.type.instance.jsdoc"},"4":{"name":"punctuation.definition.bracket.angle.begin.jsdoc"},"5":{"name":"constant.other.email.link.underline.jsdoc"},"6":{"name":"punctuation.definition.bracket.angle.end.jsdoc"}},"match":"((@)author)\\\\s+([^*/<>@\\\\s](?:[^*/<>@]|\\\\*[^/])*)(?:\\\\s*(<)([^>\\\\s]+)(>))?"},{"captures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"},"3":{"name":"entity.name.type.instance.jsdoc"},"4":{"name":"keyword.operator.control.jsdoc"},"5":{"name":"entity.name.type.instance.jsdoc"}},"match":"((@)borrows)\\\\s+((?:[^*/@\\\\s]|\\\\*[^/])+)\\\\s+(as)\\\\s+((?:[^*/@\\\\s]|\\\\*[^/])+)"},{"begin":"((@)example)\\\\s+","beginCaptures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"}},"end":"(?=@|\\\\*/)","name":"meta.example.jsdoc","patterns":[{"match":"^\\\\s\\\\*\\\\s+"},{"begin":"\\\\G(<)caption(>)","beginCaptures":{"0":{"name":"entity.name.tag.inline.jsdoc"},"1":{"name":"punctuation.definition.bracket.angle.begin.jsdoc"},"2":{"name":"punctuation.definition.bracket.angle.end.jsdoc"}},"contentName":"constant.other.description.jsdoc","end":"(</)caption(>)|(?=\\\\*/)","endCaptures":{"0":{"name":"entity.name.tag.inline.jsdoc"},"1":{"name":"punctuation.definition.bracket.angle.begin.jsdoc"},"2":{"name":"punctuation.definition.bracket.angle.end.jsdoc"}}},{"captures":{"0":{"name":"source.embedded.ts"}},"match":"[^*@\\\\s](?:[^*]|\\\\*[^/])*"}]},{"captures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"},"3":{"name":"constant.language.symbol-type.jsdoc"}},"match":"((@)kind)\\\\s+(class|constant|event|external|file|function|member|mixin|module|namespace|typedef)\\\\b"},{"captures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"},"3":{"name":"variable.other.link.underline.jsdoc"},"4":{"name":"entity.name.type.instance.jsdoc"}},"match":"((@)see)\\\\s+(?:((?=https?://)(?:[^*\\\\s]|\\\\*[^/])+)|((?!https?://|(?:\\\\[[^]\\\\[]*])?\\\\{@(?:link|linkcode|linkplain|tutorial)\\\\b)(?:[^*/@\\\\s]|\\\\*[^/])+))"},{"captures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"},"3":{"name":"variable.other.jsdoc"}},"match":"((@)template)\\\\s+([$A-Z_a-z][]$.\\\\[\\\\w]*(?:\\\\s*,\\\\s*[$A-Z_a-z][]$.\\\\[\\\\w]*)*)"},{"begin":"((@)template)\\\\s+(?=\\\\{)","beginCaptures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"}},"end":"(?=\\\\s|\\\\*/|[^]$A-\\\\[_a-{}])","patterns":[{"include":"#jsdoctype"},{"match":"([$A-Z_a-z][]$.\\\\[\\\\w]*)","name":"variable.other.jsdoc"}]},{"captures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"},"3":{"name":"variable.other.jsdoc"}},"match":"((@)(?:arg|argument|const|constant|member|namespace|param|var))\\\\s+([$A-Z_a-z][]$.\\\\[\\\\w]*)"},{"begin":"((@)typedef)\\\\s+(?=\\\\{)","beginCaptures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"}},"end":"(?=\\\\s|\\\\*/|[^]$A-\\\\[_a-{}])","patterns":[{"include":"#jsdoctype"},{"match":"(?:[^*/@\\\\s]|\\\\*[^/])+","name":"entity.name.type.instance.jsdoc"}]},{"begin":"((@)(?:arg|argument|const|constant|member|namespace|param|prop|property|var))\\\\s+(?=\\\\{)","beginCaptures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"}},"end":"(?=\\\\s|\\\\*/|[^]$A-\\\\[_a-{}])","patterns":[{"include":"#jsdoctype"},{"match":"([$A-Z_a-z][]$.\\\\[\\\\w]*)","name":"variable.other.jsdoc"},{"captures":{"1":{"name":"punctuation.definition.optional-value.begin.bracket.square.jsdoc"},"2":{"name":"keyword.operator.assignment.jsdoc"},"3":{"name":"source.embedded.ts"},"4":{"name":"punctuation.definition.optional-value.end.bracket.square.jsdoc"},"5":{"name":"invalid.illegal.syntax.jsdoc"}},"match":"(\\\\[)\\\\s*[$\\\\w]+(?:(?:\\\\[])?\\\\.[$\\\\w]+)*(?:\\\\s*(=)\\\\s*((?>\\"(?:\\\\*(?!/)|\\\\\\\\(?!\\")|[^*\\\\\\\\])*?\\"|\'(?:\\\\*(?!/)|\\\\\\\\(?!\')|[^*\\\\\\\\])*?\'|\\\\[(?:\\\\*(?!/)|[^*])*?]|(?:\\\\*(?!/)|\\\\s(?!\\\\s*])|\\\\[.*?(?:]|(?=\\\\*/))|[^]*\\\\[\\\\s])*)*))?\\\\s*(?:(])((?:[^*\\\\s]|\\\\*[^/\\\\s])+)?|(?=\\\\*/))","name":"variable.other.jsdoc"}]},{"begin":"((@)(?:define|enum|exception|export|extends|lends|implements|modifies|namespace|private|protected|returns?|satisfies|suppress|this|throws|type|yields?))\\\\s+(?=\\\\{)","beginCaptures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"}},"end":"(?=\\\\s|\\\\*/|[^]$A-\\\\[_a-{}])","patterns":[{"include":"#jsdoctype"}]},{"captures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"},"3":{"name":"entity.name.type.instance.jsdoc"}},"match":"((@)(?:alias|augments|callback|constructs|emits|event|fires|exports?|extends|external|function|func|host|lends|listens|interface|memberof!?|method|module|mixes|mixin|name|requires|see|this|typedef|uses))\\\\s+((?:[^*@{}\\\\s]|\\\\*[^/])+)"},{"begin":"((@)(?:default(?:value)?|license|version))\\\\s+(([\\"\']))","beginCaptures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"},"3":{"name":"variable.other.jsdoc"},"4":{"name":"punctuation.definition.string.begin.jsdoc"}},"contentName":"variable.other.jsdoc","end":"(\\\\3)|(?=$|\\\\*/)","endCaptures":{"0":{"name":"variable.other.jsdoc"},"1":{"name":"punctuation.definition.string.end.jsdoc"}}},{"captures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"},"3":{"name":"variable.other.jsdoc"}},"match":"((@)(?:default(?:value)?|license|tutorial|variation|version))\\\\s+([^*\\\\s]+)"},{"captures":{"1":{"name":"punctuation.definition.block.tag.jsdoc"}},"match":"(@)(?:abstract|access|alias|api|arg|argument|async|attribute|augments|author|beta|borrows|bubbles|callback|chainable|class|classdesc|code|config|const|constant|constructor|constructs|copyright|default|defaultvalue|define|deprecated|desc|description|dict|emits|enum|event|example|exception|exports?|extends|extension(?:_?for)?|external|externs|file|fileoverview|final|fires|for|func|function|generator|global|hideconstructor|host|ignore|implements|implicitCast|inherit[Dd]oc|inner|instance|interface|internal|kind|lends|license|listens|main|member|memberof!?|method|mixes|mixins?|modifies|module|name|namespace|noalias|nocollapse|nocompile|nosideeffects|override|overview|package|param|polymer(?:Behavior)?|preserve|private|prop|property|protected|public|read[Oo]nly|record|require[ds]|returns?|see|since|static|struct|submodule|summary|suppress|template|this|throws|todo|tutorial|type|typedef|unrestricted|uses|var|variation|version|virtual|writeOnce|yields?)\\\\b","name":"storage.type.class.jsdoc"},{"include":"#inline-tags"},{"captures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"}},"match":"((@)[$_[:alpha:]][$_[:alnum:]]*)(?=\\\\s+)"}]},"enum-declaration":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?(?:\\\\b(const)\\\\s+)?\\\\b(enum)\\\\s+([$_[:alpha:]][$_[:alnum:]]*)","beginCaptures":{"1":{"name":"keyword.control.export.ts"},"2":{"name":"storage.modifier.ts"},"3":{"name":"storage.modifier.ts"},"4":{"name":"storage.type.enum.ts"},"5":{"name":"entity.name.type.enum.ts"}},"end":"(?<=})","name":"meta.enum.declaration.ts","patterns":[{"include":"#comment"},{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.definition.block.ts"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.block.ts"}},"patterns":[{"include":"#comment"},{"begin":"([$_[:alpha:]][$_[:alnum:]]*)","beginCaptures":{"0":{"name":"variable.other.enummember.ts"}},"end":"(?=[,}]|$)","patterns":[{"include":"#comment"},{"include":"#variable-initializer"}]},{"begin":"(?=((\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`)|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])+])))","end":"(?=[,}]|$)","patterns":[{"include":"#string"},{"include":"#array-literal"},{"include":"#comment"},{"include":"#variable-initializer"}]},{"include":"#punctuation-comma"}]}]},"export-declaration":{"patterns":[{"captures":{"1":{"name":"keyword.control.export.ts"},"2":{"name":"keyword.control.as.ts"},"3":{"name":"storage.type.namespace.ts"},"4":{"name":"entity.name.type.module.ts"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(export)\\\\s+(as)\\\\s+(namespace)\\\\s+([$_[:alpha:]][$_[:alnum:]]*)"},{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(export)(?:\\\\s+(type))?(?:\\\\s*(=)|\\\\s+(default)(?=\\\\s+))","beginCaptures":{"1":{"name":"keyword.control.export.ts"},"2":{"name":"keyword.control.type.ts"},"3":{"name":"keyword.operator.assignment.ts"},"4":{"name":"keyword.control.default.ts"}},"end":"(?=$|;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)","name":"meta.export.default.ts","patterns":[{"include":"#interface-declaration"},{"include":"#expression"}]},{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(export)(?:\\\\s+(type))?\\\\b(?!(\\\\$)|(\\\\s*:))((?=\\\\s*[*{])|((?=\\\\s*[$_[:alpha:]][$_[:alnum:]]*([,\\\\s]))(?!\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)))","beginCaptures":{"1":{"name":"keyword.control.export.ts"},"2":{"name":"keyword.control.type.ts"}},"end":"(?=$|;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)","name":"meta.export.ts","patterns":[{"include":"#import-export-declaration"}]}]},"expression":{"patterns":[{"include":"#expressionWithoutIdentifiers"},{"include":"#identifiers"},{"include":"#expressionPunctuations"}]},"expression-inside-possibly-arrow-parens":{"patterns":[{"include":"#expressionWithoutIdentifiers"},{"include":"#comment"},{"include":"#string"},{"include":"#decorator"},{"include":"#destructuring-parameter"},{"captures":{"1":{"name":"storage.modifier.ts"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(override|public|protected|private|readonly)\\\\s+(?=(override|public|protected|private|readonly)\\\\s+)"},{"captures":{"1":{"name":"storage.modifier.ts"},"2":{"name":"keyword.operator.rest.ts"},"3":{"name":"entity.name.function.ts variable.language.this.ts"},"4":{"name":"entity.name.function.ts"},"5":{"name":"keyword.operator.optional.ts"}},"match":"(?:(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(override|public|private|protected|readonly)\\\\s+)?(?:(\\\\.\\\\.\\\\.)\\\\s*)?(?<![:=])(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(this)|([$_[:alpha:]][$_[:alnum:]]*))(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\\\\s*(\\\\??)(?=\\\\s*(=\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\"\'()`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>)))))|(:\\\\s*((<)|(\\\\(\\\\s*((\\\\))|(\\\\.\\\\.\\\\.)|([$_[:alnum:]]+\\\\s*(([,:=?])|(\\\\)\\\\s*=>)))))))|(:\\\\s*(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))Function(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))|(:\\\\s*((<\\\\s*)$|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))))))|(:\\\\s*(=>|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(<[^<>]*>)|[^(),<=>])+=\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\"\'()`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>))))))"},{"captures":{"1":{"name":"storage.modifier.ts"},"2":{"name":"keyword.operator.rest.ts"},"3":{"name":"variable.parameter.ts variable.language.this.ts"},"4":{"name":"variable.parameter.ts"},"5":{"name":"keyword.operator.optional.ts"}},"match":"(?:(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(override|public|private|protected|readonly)\\\\s+)?(?:(\\\\.\\\\.\\\\.)\\\\s*)?(?<![:=])(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(this)|([$_[:alpha:]][$_[:alnum:]]*))(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\\\\s*(\\\\??)(?=\\\\s*[,:]|$)"},{"include":"#type-annotation"},{"include":"#variable-initializer"},{"match":",","name":"punctuation.separator.parameter.ts"},{"include":"#identifiers"},{"include":"#expressionPunctuations"}]},"expression-operators":{"patterns":[{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(await)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.control.flow.ts"},{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(yield)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))(?=\\\\s*/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*\\\\*)","beginCaptures":{"1":{"name":"keyword.control.flow.ts"}},"end":"\\\\*","endCaptures":{"0":{"name":"keyword.generator.asterisk.ts"}},"patterns":[{"include":"#comment"}]},{"captures":{"1":{"name":"keyword.control.flow.ts"},"2":{"name":"keyword.generator.asterisk.ts"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(yield)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))(?:\\\\s*(\\\\*))?"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))delete(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.operator.expression.delete.ts"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))in(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))(?!\\\\()","name":"keyword.operator.expression.in.ts"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))of(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))(?!\\\\()","name":"keyword.operator.expression.of.ts"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))instanceof(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.operator.expression.instanceof.ts"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))new(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.operator.new.ts"},{"include":"#typeof-operator"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))void(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.operator.expression.void.ts"},{"captures":{"1":{"name":"keyword.control.as.ts"},"2":{"name":"storage.modifier.ts"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(as)\\\\s+(const)(?=\\\\s*($|[]),:;}]))"},{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(as)|(satisfies))\\\\s+","beginCaptures":{"1":{"name":"keyword.control.as.ts"},"2":{"name":"keyword.control.satisfies.ts"}},"end":"(?=^|[-\\\\])+,:;>?}]|\\\\|\\\\||&&|!==|$|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(as|satisfies)\\\\s+)|(\\\\s+<))","patterns":[{"include":"#type"}]},{"match":"\\\\.\\\\.\\\\.","name":"keyword.operator.spread.ts"},{"match":"(?:\\\\*|(?<!\\\\()/|[-%+])=","name":"keyword.operator.assignment.compound.ts"},{"match":"(?:[\\\\&^]|<<|>>>??|\\\\|)=","name":"keyword.operator.assignment.compound.bitwise.ts"},{"match":"<<|>>>?","name":"keyword.operator.bitwise.shift.ts"},{"match":"[!=]==?","name":"keyword.operator.comparison.ts"},{"match":"<=|>=|<>|[<>]","name":"keyword.operator.relational.ts"},{"captures":{"1":{"name":"keyword.operator.logical.ts"},"2":{"name":"keyword.operator.assignment.compound.ts"},"3":{"name":"keyword.operator.arithmetic.ts"}},"match":"(?<=[$_[:alnum:]])(!)\\\\s*(?:(/=)|(/)(?![*/]))"},{"match":"!|&&|\\\\|\\\\||\\\\?\\\\?","name":"keyword.operator.logical.ts"},{"match":"[\\\\&^|~]","name":"keyword.operator.bitwise.ts"},{"match":"=","name":"keyword.operator.assignment.ts"},{"match":"--","name":"keyword.operator.decrement.ts"},{"match":"\\\\+\\\\+","name":"keyword.operator.increment.ts"},{"match":"[-%*+/]","name":"keyword.operator.arithmetic.ts"},{"begin":"(?<=[]$)_[:alnum:]])\\\\s*(?=(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)+(?:(/=)|(/)(?![*/])))","end":"(/=)|(/)(?!\\\\*([^*]|(\\\\*[^/]))*\\\\*/)","endCaptures":{"1":{"name":"keyword.operator.assignment.compound.ts"},"2":{"name":"keyword.operator.arithmetic.ts"}},"patterns":[{"include":"#comment"}]},{"captures":{"1":{"name":"keyword.operator.assignment.compound.ts"},"2":{"name":"keyword.operator.arithmetic.ts"}},"match":"(?<=[]$)_[:alnum:]])\\\\s*(?:(/=)|(/)(?![*/]))"}]},"expressionPunctuations":{"patterns":[{"include":"#punctuation-comma"},{"include":"#punctuation-accessor"}]},"expressionWithoutIdentifiers":{"patterns":[{"include":"#string"},{"include":"#regex"},{"include":"#comment"},{"include":"#function-expression"},{"include":"#class-expression"},{"include":"#arrow-function"},{"include":"#paren-expression-possibly-arrow"},{"include":"#cast"},{"include":"#ternary-expression"},{"include":"#new-expr"},{"include":"#instanceof-expr"},{"include":"#object-literal"},{"include":"#expression-operators"},{"include":"#function-call"},{"include":"#literal"},{"include":"#support-objects"},{"include":"#paren-expression"}]},"field-declaration":{"begin":"(?<!\\\\()(?:(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(readonly)\\\\s+)?(?=\\\\s*(\\\\b((?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$))|((?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$))|(#?[$_[:alpha:]][$_[:alnum:]]*)|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`)|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])+]))\\\\s*(?:(?:(\\\\?)|(!))\\\\s*)?([,:;=}]|$))","beginCaptures":{"1":{"name":"storage.modifier.ts"}},"end":"(?=[,;}]|$|^((?!\\\\s*(\\\\b((?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$))|((?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$))|(#?[$_[:alpha:]][$_[:alnum:]]*)|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`)|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])+]))\\\\s*(?:(?:(\\\\?)|(!))\\\\s*)?([,:;=]|$))))|(?<=})","name":"meta.field.declaration.ts","patterns":[{"include":"#variable-initializer"},{"include":"#type-annotation"},{"include":"#string"},{"include":"#array-literal"},{"include":"#numeric-literal"},{"include":"#comment"},{"captures":{"1":{"name":"meta.definition.property.ts entity.name.function.ts"},"2":{"name":"keyword.operator.optional.ts"},"3":{"name":"keyword.operator.definiteassignment.ts"}},"match":"(#?[$_[:alpha:]][$_[:alnum:]]*)(?:(\\\\?)|(!))?(?=\\\\s*\\\\s*(=\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\"\'()`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>)))))|(:\\\\s*((<)|(\\\\(\\\\s*((\\\\))|(\\\\.\\\\.\\\\.)|([$_[:alnum:]]+\\\\s*(([,:=?])|(\\\\)\\\\s*=>)))))))|(:\\\\s*(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))Function(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))|(:\\\\s*((<\\\\s*)$|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))))))|(:\\\\s*(=>|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(<[^<>]*>)|[^(),<=>])+=\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\"\'()`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>))))))"},{"match":"#?[$_[:alpha:]][$_[:alnum:]]*","name":"meta.definition.property.ts variable.object.property.ts"},{"match":"\\\\?","name":"keyword.operator.optional.ts"},{"match":"!","name":"keyword.operator.definiteassignment.ts"}]},"for-loop":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))for(?=((\\\\s+|(\\\\s*/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*))await)?\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)?(\\\\())","beginCaptures":{"0":{"name":"keyword.control.loop.ts"}},"end":"(?<=\\\\))","patterns":[{"include":"#comment"},{"match":"await","name":"keyword.control.loop.ts"},{"begin":"\\\\(","beginCaptures":{"0":{"name":"meta.brace.round.ts"}},"end":"\\\\)","endCaptures":{"0":{"name":"meta.brace.round.ts"}},"patterns":[{"include":"#var-expr"},{"include":"#expression"},{"include":"#punctuation-semicolon"}]}]},"function-body":{"patterns":[{"include":"#comment"},{"include":"#type-parameters"},{"include":"#function-parameters"},{"include":"#return-type"},{"include":"#type-function-return-type"},{"include":"#decl-block"},{"match":"\\\\*","name":"keyword.generator.asterisk.ts"}]},"function-call":{"patterns":[{"begin":"(?=(((([$_[:alpha:]][$_[:alnum:]]*)(\\\\s*\\\\??\\\\.\\\\s*(#?[$_[:alpha:]][$_[:alnum:]]*))*)|(\\\\??\\\\.\\\\s*#?[$_[:alpha:]][$_[:alnum:]]*))|(?<=\\\\)))\\\\s*(?:(\\\\?\\\\.\\\\s*)|(!))?((<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))(([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>)*(?<!=)>))*(?<!=)>)*(?<!=)>\\\\s*)?\\\\())","end":"(?<=\\\\))(?!(((([$_[:alpha:]][$_[:alnum:]]*)(\\\\s*\\\\??\\\\.\\\\s*(#?[$_[:alpha:]][$_[:alnum:]]*))*)|(\\\\??\\\\.\\\\s*#?[$_[:alpha:]][$_[:alnum:]]*))|(?<=\\\\)))\\\\s*(?:(\\\\?\\\\.\\\\s*)|(!))?((<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))(([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>)*(?<!=)>))*(?<!=)>)*(?<!=)>\\\\s*)?\\\\())","patterns":[{"begin":"(?=(([$_[:alpha:]][$_[:alnum:]]*)(\\\\s*\\\\??\\\\.\\\\s*(#?[$_[:alpha:]][$_[:alnum:]]*))*)|(\\\\??\\\\.\\\\s*#?[$_[:alpha:]][$_[:alnum:]]*))","end":"(?=\\\\s*(?:(\\\\?\\\\.\\\\s*)|(!))?((<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))(([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>)*(?<!=)>))*(?<!=)>)*(?<!=)>\\\\s*)?\\\\())","name":"meta.function-call.ts","patterns":[{"include":"#function-call-target"}]},{"include":"#comment"},{"include":"#function-call-optionals"},{"include":"#type-arguments"},{"include":"#paren-expression"}]},{"begin":"(?=(((([$_[:alpha:]][$_[:alnum:]]*)(\\\\s*\\\\??\\\\.\\\\s*(#?[$_[:alpha:]][$_[:alnum:]]*))*)|(\\\\??\\\\.\\\\s*#?[$_[:alpha:]][$_[:alnum:]]*))|(?<=\\\\)))(<\\\\s*[(\\\\[{]\\\\s*)$)","end":"(?<=>)(?!(((([$_[:alpha:]][$_[:alnum:]]*)(\\\\s*\\\\??\\\\.\\\\s*(#?[$_[:alpha:]][$_[:alnum:]]*))*)|(\\\\??\\\\.\\\\s*#?[$_[:alpha:]][$_[:alnum:]]*))|(?<=\\\\)))(<\\\\s*[(\\\\[{]\\\\s*)$)","patterns":[{"begin":"(?=(([$_[:alpha:]][$_[:alnum:]]*)(\\\\s*\\\\??\\\\.\\\\s*(#?[$_[:alpha:]][$_[:alnum:]]*))*)|(\\\\??\\\\.\\\\s*#?[$_[:alpha:]][$_[:alnum:]]*))","end":"(?=(<\\\\s*[(\\\\[{]\\\\s*)$)","name":"meta.function-call.ts","patterns":[{"include":"#function-call-target"}]},{"include":"#comment"},{"include":"#function-call-optionals"},{"include":"#type-arguments"}]}]},"function-call-optionals":{"patterns":[{"match":"\\\\?\\\\.","name":"meta.function-call.ts punctuation.accessor.optional.ts"},{"match":"!","name":"meta.function-call.ts keyword.operator.definiteassignment.ts"}]},"function-call-target":{"patterns":[{"include":"#support-function-call-identifiers"},{"match":"(#?[$_[:alpha:]][$_[:alnum:]]*)","name":"entity.name.function.ts"}]},"function-declaration":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?(?:(async)\\\\s+)?(function)\\\\b(?:\\\\s*(\\\\*))?(?:(?:\\\\s+|(?<=\\\\*))([$_[:alpha:]][$_[:alnum:]]*))?\\\\s*","beginCaptures":{"1":{"name":"keyword.control.export.ts"},"2":{"name":"storage.modifier.ts"},"3":{"name":"storage.modifier.async.ts"},"4":{"name":"storage.type.function.ts"},"5":{"name":"keyword.generator.asterisk.ts"},"6":{"name":"meta.definition.function.ts entity.name.function.ts"}},"end":"(?=;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)|(?<=})","name":"meta.function.ts","patterns":[{"include":"#function-name"},{"include":"#function-body"}]},"function-expression":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(async)\\\\s+)?(function)\\\\b(?:\\\\s*(\\\\*))?(?:(?:\\\\s+|(?<=\\\\*))([$_[:alpha:]][$_[:alnum:]]*))?\\\\s*","beginCaptures":{"1":{"name":"storage.modifier.async.ts"},"2":{"name":"storage.type.function.ts"},"3":{"name":"keyword.generator.asterisk.ts"},"4":{"name":"meta.definition.function.ts entity.name.function.ts"}},"end":"(?=;)|(?<=})","name":"meta.function.expression.ts","patterns":[{"include":"#function-name"},{"include":"#single-line-comment-consuming-line-ending"},{"include":"#function-body"}]},"function-name":{"match":"[$_[:alpha:]][$_[:alnum:]]*","name":"meta.definition.function.ts entity.name.function.ts"},"function-parameters":{"begin":"\\\\(","beginCaptures":{"0":{"name":"punctuation.definition.parameters.begin.ts"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.definition.parameters.end.ts"}},"name":"meta.parameters.ts","patterns":[{"include":"#function-parameters-body"}]},"function-parameters-body":{"patterns":[{"include":"#comment"},{"include":"#string"},{"include":"#decorator"},{"include":"#destructuring-parameter"},{"include":"#parameter-name"},{"include":"#parameter-type-annotation"},{"include":"#variable-initializer"},{"match":",","name":"punctuation.separator.parameter.ts"}]},"identifiers":{"patterns":[{"include":"#object-identifiers"},{"captures":{"1":{"name":"punctuation.accessor.ts"},"2":{"name":"punctuation.accessor.optional.ts"},"3":{"name":"entity.name.function.ts"}},"match":"(?:(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))\\\\s*)?([$_[:alpha:]][$_[:alnum:]]*)(?=\\\\s*=\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\"\'()`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>)))))"},{"captures":{"1":{"name":"punctuation.accessor.ts"},"2":{"name":"punctuation.accessor.optional.ts"},"3":{"name":"variable.other.constant.property.ts"}},"match":"(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))\\\\s*(#?\\\\p{upper}[$_\\\\d[:upper:]]*)(?![$_[:alnum:]])"},{"captures":{"1":{"name":"punctuation.accessor.ts"},"2":{"name":"punctuation.accessor.optional.ts"},"3":{"name":"variable.other.property.ts"}},"match":"(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))\\\\s*(#?[$_[:alpha:]][$_[:alnum:]]*)"},{"match":"(\\\\p{upper}[$_\\\\d[:upper:]]*)(?![$_[:alnum:]])","name":"variable.other.constant.ts"},{"match":"[$_[:alpha:]][$_[:alnum:]]*","name":"variable.other.readwrite.ts"}]},"if-statement":{"patterns":[{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?=\\\\bif\\\\s*(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))\\\\s*(?!\\\\{))","end":"(?=;|$|})","patterns":[{"include":"#comment"},{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(if)\\\\s*(\\\\()","beginCaptures":{"1":{"name":"keyword.control.conditional.ts"},"2":{"name":"meta.brace.round.ts"}},"end":"\\\\)","endCaptures":{"0":{"name":"meta.brace.round.ts"}},"patterns":[{"include":"#expression"}]},{"begin":"(?<=\\\\))\\\\s*/(?![*/])(?=(?:[^/\\\\[\\\\\\\\]|\\\\\\\\.|\\\\[([^]\\\\\\\\]|\\\\\\\\.)*])+/([dgimsuvy]+|(?![*/])|(?=/\\\\*))(?!\\\\s*[$0-9A-Z_a-z]))","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.ts"}},"end":"(/)([dgimsuvy]*)","endCaptures":{"1":{"name":"punctuation.definition.string.end.ts"},"2":{"name":"keyword.other.ts"}},"name":"string.regexp.ts","patterns":[{"include":"#regexp"}]},{"include":"#statements"}]}]},"import-declaration":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(import)(?:\\\\s+(type)(?!\\\\s+from))?(?!\\\\s*[(:])(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","beginCaptures":{"1":{"name":"keyword.control.export.ts"},"2":{"name":"storage.modifier.ts"},"3":{"name":"keyword.control.import.ts"},"4":{"name":"keyword.control.type.ts"}},"end":"(?<!(?:^|[^$._[:alnum:]])import)(?=;|$|^)","name":"meta.import.ts","patterns":[{"include":"#single-line-comment-consuming-line-ending"},{"include":"#comment"},{"include":"#string"},{"begin":"(?<=(?:^|[^$._[:alnum:]])import)(?!\\\\s*[\\"\'])","end":"\\\\bfrom\\\\b","endCaptures":{"0":{"name":"keyword.control.from.ts"}},"patterns":[{"include":"#import-export-declaration"}]},{"include":"#import-export-declaration"}]},"import-equals-declaration":{"patterns":[{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(import)(?:\\\\s+(type))?\\\\s+([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(=)\\\\s*(require)\\\\s*(\\\\()","beginCaptures":{"1":{"name":"keyword.control.export.ts"},"2":{"name":"storage.modifier.ts"},"3":{"name":"keyword.control.import.ts"},"4":{"name":"keyword.control.type.ts"},"5":{"name":"variable.other.readwrite.alias.ts"},"6":{"name":"keyword.operator.assignment.ts"},"7":{"name":"keyword.control.require.ts"},"8":{"name":"meta.brace.round.ts"}},"end":"\\\\)","endCaptures":{"0":{"name":"meta.brace.round.ts"}},"name":"meta.import-equals.external.ts","patterns":[{"include":"#comment"},{"include":"#string"}]},{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(import)(?:\\\\s+(type))?\\\\s+([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(=)\\\\s*(?!require\\\\b)","beginCaptures":{"1":{"name":"keyword.control.export.ts"},"2":{"name":"storage.modifier.ts"},"3":{"name":"keyword.control.import.ts"},"4":{"name":"keyword.control.type.ts"},"5":{"name":"variable.other.readwrite.alias.ts"},"6":{"name":"keyword.operator.assignment.ts"}},"end":"(?=;|$|^)","name":"meta.import-equals.internal.ts","patterns":[{"include":"#single-line-comment-consuming-line-ending"},{"include":"#comment"},{"captures":{"1":{"name":"entity.name.type.module.ts"},"2":{"name":"punctuation.accessor.ts"},"3":{"name":"punctuation.accessor.optional.ts"}},"match":"([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))"},{"match":"([$_[:alpha:]][$_[:alnum:]]*)","name":"variable.other.readwrite.ts"}]}]},"import-export-assert-clause":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(with)|(assert))\\\\s*(\\\\{)","beginCaptures":{"1":{"name":"keyword.control.with.ts"},"2":{"name":"keyword.control.assert.ts"},"3":{"name":"punctuation.definition.block.ts"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.block.ts"}},"patterns":[{"include":"#comment"},{"include":"#string"},{"match":"[$_[:alpha:]][$_[:alnum:]]*\\\\s*(?=(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*:)","name":"meta.object-literal.key.ts"},{"match":":","name":"punctuation.separator.key-value.ts"}]},"import-export-block":{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.definition.block.ts"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.block.ts"}},"name":"meta.block.ts","patterns":[{"include":"#import-export-clause"}]},"import-export-clause":{"patterns":[{"include":"#comment"},{"captures":{"1":{"name":"keyword.control.type.ts"},"2":{"name":"keyword.control.default.ts"},"3":{"name":"constant.language.import-export-all.ts"},"4":{"name":"variable.other.readwrite.ts"},"5":{"name":"string.quoted.alias.ts"},"12":{"name":"keyword.control.as.ts"},"13":{"name":"keyword.control.default.ts"},"14":{"name":"variable.other.readwrite.alias.ts"},"15":{"name":"string.quoted.alias.ts"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(type)\\\\s+)?(?:\\\\b(default)|(\\\\*)|\\\\b([$_[:alpha:]][$_[:alnum:]]*)|((\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`)))\\\\s+(as)\\\\s+(?:(default(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))|([$_[:alpha:]][$_[:alnum:]]*)|((\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`)))"},{"include":"#punctuation-comma"},{"match":"\\\\*","name":"constant.language.import-export-all.ts"},{"match":"\\\\b(default)\\\\b","name":"keyword.control.default.ts"},{"captures":{"1":{"name":"keyword.control.type.ts"},"2":{"name":"variable.other.readwrite.alias.ts"},"3":{"name":"string.quoted.alias.ts"}},"match":"(?:\\\\b(type)\\\\s+)?(?:([$_[:alpha:]][$_[:alnum:]]*)|((\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`)))"}]},"import-export-declaration":{"patterns":[{"include":"#comment"},{"include":"#string"},{"include":"#import-export-block"},{"match":"\\\\bfrom\\\\b","name":"keyword.control.from.ts"},{"include":"#import-export-assert-clause"},{"include":"#import-export-clause"}]},"indexer-declaration":{"begin":"(?:(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(readonly)\\\\s*)?\\\\s*(\\\\[)\\\\s*([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(?=:)","beginCaptures":{"1":{"name":"storage.modifier.ts"},"2":{"name":"meta.brace.square.ts"},"3":{"name":"variable.parameter.ts"}},"end":"(])\\\\s*(\\\\?\\\\s*)?|$","endCaptures":{"1":{"name":"meta.brace.square.ts"},"2":{"name":"keyword.operator.optional.ts"}},"name":"meta.indexer.declaration.ts","patterns":[{"include":"#type-annotation"}]},"indexer-mapped-type-declaration":{"begin":"(?:(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))([-+])?(readonly)\\\\s*)?\\\\s*(\\\\[)\\\\s*([$_[:alpha:]][$_[:alnum:]]*)\\\\s+(in)\\\\s+","beginCaptures":{"1":{"name":"keyword.operator.type.modifier.ts"},"2":{"name":"storage.modifier.ts"},"3":{"name":"meta.brace.square.ts"},"4":{"name":"entity.name.type.ts"},"5":{"name":"keyword.operator.expression.in.ts"}},"end":"(])([-+])?\\\\s*(\\\\?\\\\s*)?|$","endCaptures":{"1":{"name":"meta.brace.square.ts"},"2":{"name":"keyword.operator.type.modifier.ts"},"3":{"name":"keyword.operator.optional.ts"}},"name":"meta.indexer.mappedtype.declaration.ts","patterns":[{"captures":{"1":{"name":"keyword.control.as.ts"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(as)\\\\s+"},{"include":"#type"}]},"inline-tags":{"patterns":[{"captures":{"1":{"name":"punctuation.definition.bracket.square.begin.jsdoc"},"2":{"name":"punctuation.definition.bracket.square.end.jsdoc"}},"match":"(\\\\[)[^]]+(])(?=\\\\{@(?:link|linkcode|linkplain|tutorial))","name":"constant.other.description.jsdoc"},{"begin":"(\\\\{)((@)(?:link(?:code|plain)?|tutorial))\\\\s*","beginCaptures":{"1":{"name":"punctuation.definition.bracket.curly.begin.jsdoc"},"2":{"name":"storage.type.class.jsdoc"},"3":{"name":"punctuation.definition.inline.tag.jsdoc"}},"end":"}|(?=\\\\*/)","endCaptures":{"0":{"name":"punctuation.definition.bracket.curly.end.jsdoc"}},"name":"entity.name.type.instance.jsdoc","patterns":[{"captures":{"1":{"name":"variable.other.link.underline.jsdoc"},"2":{"name":"punctuation.separator.pipe.jsdoc"}},"match":"\\\\G((?=https?://)(?:[^*|}\\\\s]|\\\\*/)+)(\\\\|)?"},{"captures":{"1":{"name":"variable.other.description.jsdoc"},"2":{"name":"punctuation.separator.pipe.jsdoc"}},"match":"\\\\G((?:[^*@{|}\\\\s]|\\\\*[^/])+)(\\\\|)?"}]}]},"instanceof-expr":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(instanceof)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","beginCaptures":{"1":{"name":"keyword.operator.expression.instanceof.ts"}},"end":"(?<=\\\\))|(?=[-\\\\])+,:;>?}]|\\\\|\\\\||&&|!==|$|([!=]==?)|(([\\\\&^|~]\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s+instanceof(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))function((\\\\s+[$_[:alpha:]][$_[:alnum:]]*)|(\\\\s*\\\\())))","patterns":[{"include":"#type"}]},"interface-declaration":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(?:(abstract)\\\\s+)?\\\\b(interface)\\\\b(?=\\\\s+|/[*/])","beginCaptures":{"1":{"name":"keyword.control.export.ts"},"2":{"name":"storage.modifier.ts"},"3":{"name":"storage.modifier.ts"},"4":{"name":"storage.type.interface.ts"}},"end":"(?<=})","name":"meta.interface.ts","patterns":[{"include":"#comment"},{"include":"#class-or-interface-heritage"},{"captures":{"0":{"name":"entity.name.type.interface.ts"}},"match":"[$_[:alpha:]][$_[:alnum:]]*"},{"include":"#type-parameters"},{"include":"#class-or-interface-body"}]},"jsdoctype":{"patterns":[{"begin":"\\\\G(\\\\{)","beginCaptures":{"0":{"name":"entity.name.type.instance.jsdoc"},"1":{"name":"punctuation.definition.bracket.curly.begin.jsdoc"}},"contentName":"entity.name.type.instance.jsdoc","end":"((}))\\\\s*|(?=\\\\*/)","endCaptures":{"1":{"name":"entity.name.type.instance.jsdoc"},"2":{"name":"punctuation.definition.bracket.curly.end.jsdoc"}},"patterns":[{"include":"#brackets"}]}]},"label":{"patterns":[{"begin":"([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(:)(?=\\\\s*\\\\{)","beginCaptures":{"1":{"name":"entity.name.label.ts"},"2":{"name":"punctuation.separator.label.ts"}},"end":"(?<=})","patterns":[{"include":"#decl-block"}]},{"captures":{"1":{"name":"entity.name.label.ts"},"2":{"name":"punctuation.separator.label.ts"}},"match":"([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(:)"}]},"literal":{"patterns":[{"include":"#numeric-literal"},{"include":"#boolean-literal"},{"include":"#null-literal"},{"include":"#undefined-literal"},{"include":"#numericConstant-literal"},{"include":"#array-literal"},{"include":"#this-literal"},{"include":"#super-literal"}]},"method-declaration":{"patterns":[{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(override)\\\\s+)?(?:\\\\b(p(?:ublic|rivate|rotected))\\\\s+)?(?:\\\\b(abstract)\\\\s+)?(?:\\\\b(async)\\\\s+)?\\\\s*\\\\b(constructor)\\\\b(?!:)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","beginCaptures":{"1":{"name":"storage.modifier.ts"},"2":{"name":"storage.modifier.ts"},"3":{"name":"storage.modifier.ts"},"4":{"name":"storage.modifier.async.ts"},"5":{"name":"storage.type.ts"}},"end":"(?=[,;}]|$)|(?<=})","name":"meta.method.declaration.ts","patterns":[{"include":"#method-declaration-name"},{"include":"#function-body"}]},{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(override)\\\\s+)?(?:\\\\b(p(?:ublic|rivate|rotected))\\\\s+)?(?:\\\\b(abstract)\\\\s+)?(?:\\\\b(async)\\\\s+)?(?:\\\\s*\\\\b(new)\\\\b(?!:)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))|(?:(\\\\*)\\\\s*)?)(?=\\\\s*((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*))?\\\\()","beginCaptures":{"1":{"name":"storage.modifier.ts"},"2":{"name":"storage.modifier.ts"},"3":{"name":"storage.modifier.ts"},"4":{"name":"storage.modifier.async.ts"},"5":{"name":"keyword.operator.new.ts"},"6":{"name":"keyword.generator.asterisk.ts"}},"end":"(?=[,;}]|$)|(?<=})","name":"meta.method.declaration.ts","patterns":[{"include":"#method-declaration-name"},{"include":"#function-body"}]},{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(override)\\\\s+)?(?:\\\\b(p(?:ublic|rivate|rotected))\\\\s+)?(?:\\\\b(abstract)\\\\s+)?(?:\\\\b(async)\\\\s+)?(?:\\\\b([gs]et)\\\\s+)?(?:(\\\\*)\\\\s*)?(?=\\\\s*((\\\\b((?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$))|((?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$))|([$_[:alpha:]][$_[:alnum:]]*)|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`)|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])+]))\\\\s*(\\\\??))\\\\s*((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*))?\\\\()","beginCaptures":{"1":{"name":"storage.modifier.ts"},"2":{"name":"storage.modifier.ts"},"3":{"name":"storage.modifier.ts"},"4":{"name":"storage.modifier.async.ts"},"5":{"name":"storage.type.property.ts"},"6":{"name":"keyword.generator.asterisk.ts"}},"end":"(?=[,;}]|$)|(?<=})","name":"meta.method.declaration.ts","patterns":[{"include":"#method-declaration-name"},{"include":"#function-body"}]}]},"method-declaration-name":{"begin":"(?=(\\\\b((?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$))|((?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$))|([$_[:alpha:]][$_[:alnum:]]*)|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`)|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])+]))\\\\s*(\\\\??)\\\\s*[(<])","end":"(?=[(<])","patterns":[{"include":"#string"},{"include":"#array-literal"},{"include":"#numeric-literal"},{"match":"[$_[:alpha:]][$_[:alnum:]]*","name":"meta.definition.method.ts entity.name.function.ts"},{"match":"\\\\?","name":"keyword.operator.optional.ts"}]},"namespace-declaration":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(namespace|module)\\\\s+(?=[\\"$\'_`[:alpha:]])","beginCaptures":{"1":{"name":"keyword.control.export.ts"},"2":{"name":"storage.modifier.ts"},"3":{"name":"storage.type.namespace.ts"}},"end":"(?<=})|(?=;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)","name":"meta.namespace.declaration.ts","patterns":[{"include":"#comment"},{"include":"#string"},{"match":"([$_[:alpha:]][$_[:alnum:]]*)","name":"entity.name.type.module.ts"},{"include":"#punctuation-accessor"},{"include":"#decl-block"}]},"new-expr":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(new)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","beginCaptures":{"1":{"name":"keyword.operator.new.ts"}},"end":"(?<=\\\\))|(?=[-\\\\])+,:;>?}]|\\\\|\\\\||&&|!==|$|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))new(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))function((\\\\s+[$_[:alpha:]][$_[:alnum:]]*)|(\\\\s*\\\\())))","name":"new.expr.ts","patterns":[{"include":"#expression"}]},"null-literal":{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))null(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"constant.language.null.ts"},"numeric-literal":{"patterns":[{"captures":{"1":{"name":"storage.type.numeric.bigint.ts"}},"match":"\\\\b(?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$)","name":"constant.numeric.hex.ts"},{"captures":{"1":{"name":"storage.type.numeric.bigint.ts"}},"match":"\\\\b(?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$)","name":"constant.numeric.binary.ts"},{"captures":{"1":{"name":"storage.type.numeric.bigint.ts"}},"match":"\\\\b(?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$)","name":"constant.numeric.octal.ts"},{"captures":{"0":{"name":"constant.numeric.decimal.ts"},"1":{"name":"meta.delimiter.decimal.period.ts"},"2":{"name":"storage.type.numeric.bigint.ts"},"3":{"name":"meta.delimiter.decimal.period.ts"},"4":{"name":"storage.type.numeric.bigint.ts"},"5":{"name":"meta.delimiter.decimal.period.ts"},"6":{"name":"storage.type.numeric.bigint.ts"},"7":{"name":"storage.type.numeric.bigint.ts"},"8":{"name":"meta.delimiter.decimal.period.ts"},"9":{"name":"storage.type.numeric.bigint.ts"},"10":{"name":"meta.delimiter.decimal.period.ts"},"11":{"name":"storage.type.numeric.bigint.ts"},"12":{"name":"meta.delimiter.decimal.period.ts"},"13":{"name":"storage.type.numeric.bigint.ts"},"14":{"name":"storage.type.numeric.bigint.ts"}},"match":"(?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$)"}]},"numericConstant-literal":{"patterns":[{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))NaN(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"constant.language.nan.ts"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))Infinity(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"constant.language.infinity.ts"}]},"object-binding-element":{"patterns":[{"include":"#comment"},{"begin":"(?=(\\\\b((?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$))|((?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$))|([$_[:alpha:]][$_[:alnum:]]*)|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`)|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])+]))\\\\s*(:))","end":"(?=[,}])","patterns":[{"include":"#object-binding-element-propertyName"},{"include":"#binding-element"}]},{"include":"#object-binding-pattern"},{"include":"#destructuring-variable-rest"},{"include":"#variable-initializer"},{"include":"#punctuation-comma"}]},"object-binding-element-const":{"patterns":[{"include":"#comment"},{"begin":"(?=(\\\\b((?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$))|((?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$))|([$_[:alpha:]][$_[:alnum:]]*)|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`)|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])+]))\\\\s*(:))","end":"(?=[,}])","patterns":[{"include":"#object-binding-element-propertyName"},{"include":"#binding-element-const"}]},{"include":"#object-binding-pattern-const"},{"include":"#destructuring-variable-rest-const"},{"include":"#variable-initializer"},{"include":"#punctuation-comma"}]},"object-binding-element-propertyName":{"begin":"(?=(\\\\b((?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$))|((?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$))|([$_[:alpha:]][$_[:alnum:]]*)|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`)|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])+]))\\\\s*(:))","end":"(:)","endCaptures":{"0":{"name":"punctuation.destructuring.ts"}},"patterns":[{"include":"#string"},{"include":"#array-literal"},{"include":"#numeric-literal"},{"match":"([$_[:alpha:]][$_[:alnum:]]*)","name":"variable.object.property.ts"}]},"object-binding-pattern":{"begin":"(?:(\\\\.\\\\.\\\\.)\\\\s*)?(\\\\{)","beginCaptures":{"1":{"name":"keyword.operator.rest.ts"},"2":{"name":"punctuation.definition.binding-pattern.object.ts"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.binding-pattern.object.ts"}},"patterns":[{"include":"#object-binding-element"}]},"object-binding-pattern-const":{"begin":"(?:(\\\\.\\\\.\\\\.)\\\\s*)?(\\\\{)","beginCaptures":{"1":{"name":"keyword.operator.rest.ts"},"2":{"name":"punctuation.definition.binding-pattern.object.ts"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.binding-pattern.object.ts"}},"patterns":[{"include":"#object-binding-element-const"}]},"object-identifiers":{"patterns":[{"match":"([$_[:alpha:]][$_[:alnum:]]*)(?=\\\\s*\\\\??\\\\.\\\\s*prototype\\\\b(?!\\\\$))","name":"support.class.ts"},{"captures":{"1":{"name":"punctuation.accessor.ts"},"2":{"name":"punctuation.accessor.optional.ts"},"3":{"name":"variable.other.constant.object.property.ts"},"4":{"name":"variable.other.object.property.ts"}},"match":"(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))\\\\s*(?:(#?\\\\p{upper}[$_\\\\d[:upper:]]*)|(#?[$_[:alpha:]][$_[:alnum:]]*))(?=\\\\s*\\\\??\\\\.\\\\s*#?[$_[:alpha:]][$_[:alnum:]]*)"},{"captures":{"1":{"name":"variable.other.constant.object.ts"},"2":{"name":"variable.other.object.ts"}},"match":"(?:(\\\\p{upper}[$_\\\\d[:upper:]]*)|([$_[:alpha:]][$_[:alnum:]]*))(?=\\\\s*\\\\??\\\\.\\\\s*#?[$_[:alpha:]][$_[:alnum:]]*)"}]},"object-literal":{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.definition.block.ts"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.block.ts"}},"name":"meta.objectliteral.ts","patterns":[{"include":"#object-member"}]},"object-literal-method-declaration":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(async)\\\\s+)?(?:\\\\b([gs]et)\\\\s+)?(?:(\\\\*)\\\\s*)?(?=\\\\s*((\\\\b((?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$))|((?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$))|([$_[:alpha:]][$_[:alnum:]]*)|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`)|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])+]))\\\\s*(\\\\??))\\\\s*((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*))?\\\\()","beginCaptures":{"1":{"name":"storage.modifier.async.ts"},"2":{"name":"storage.type.property.ts"},"3":{"name":"keyword.generator.asterisk.ts"}},"end":"(?=[,;}])|(?<=})","name":"meta.method.declaration.ts","patterns":[{"include":"#method-declaration-name"},{"include":"#function-body"},{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(async)\\\\s+)?(?:\\\\b([gs]et)\\\\s+)?(?:(\\\\*)\\\\s*)?(?=\\\\s*((\\\\b((?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$))|((?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$))|([$_[:alpha:]][$_[:alnum:]]*)|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`)|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])+]))\\\\s*(\\\\??))\\\\s*((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*))?\\\\()","beginCaptures":{"1":{"name":"storage.modifier.async.ts"},"2":{"name":"storage.type.property.ts"},"3":{"name":"keyword.generator.asterisk.ts"}},"end":"(?=[(<])","patterns":[{"include":"#method-declaration-name"}]}]},"object-member":{"patterns":[{"include":"#comment"},{"include":"#object-literal-method-declaration"},{"begin":"(?=\\\\[)","end":"(?=:)|((?<=])(?=\\\\s*[(<]))","name":"meta.object.member.ts meta.object-literal.key.ts","patterns":[{"include":"#comment"},{"include":"#array-literal"}]},{"begin":"(?=[\\"\'`])","end":"(?=:)|((?<=[\\"\'`])(?=((\\\\s*[(,<}])|(\\\\s+(as|satisifies)\\\\s+))))","name":"meta.object.member.ts meta.object-literal.key.ts","patterns":[{"include":"#comment"},{"include":"#string"}]},{"begin":"(?=\\\\b((?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$))|((?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$)))","end":"(?=:)|(?=\\\\s*([(,<}])|(\\\\s+as|satisifies\\\\s+))","name":"meta.object.member.ts meta.object-literal.key.ts","patterns":[{"include":"#comment"},{"include":"#numeric-literal"}]},{"begin":"(?<=[]\\"\'`])(?=\\\\s*[(<])","end":"(?=[,;}])|(?<=})","name":"meta.method.declaration.ts","patterns":[{"include":"#function-body"}]},{"captures":{"0":{"name":"meta.object-literal.key.ts"},"1":{"name":"constant.numeric.decimal.ts"}},"match":"(?![$_[:alpha:]])(\\\\d+)\\\\s*(?=(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*:)","name":"meta.object.member.ts"},{"captures":{"0":{"name":"meta.object-literal.key.ts"},"1":{"name":"entity.name.function.ts"}},"match":"([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(?=(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*:(\\\\s*/\\\\*([^*]|(\\\\*[^/]))*\\\\*/)*\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\"\'()`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>)))))","name":"meta.object.member.ts"},{"captures":{"0":{"name":"meta.object-literal.key.ts"}},"match":"[$_[:alpha:]][$_[:alnum:]]*\\\\s*(?=(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*:)","name":"meta.object.member.ts"},{"begin":"\\\\.\\\\.\\\\.","beginCaptures":{"0":{"name":"keyword.operator.spread.ts"}},"end":"(?=[,}])","name":"meta.object.member.ts","patterns":[{"include":"#expression"}]},{"captures":{"1":{"name":"variable.other.readwrite.ts"}},"match":"([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(?=[,}]|$|//|/\\\\*)","name":"meta.object.member.ts"},{"captures":{"1":{"name":"keyword.control.as.ts"},"2":{"name":"storage.modifier.ts"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(as)\\\\s+(const)(?=\\\\s*([,}]|$))","name":"meta.object.member.ts"},{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(as)|(satisfies))\\\\s+","beginCaptures":{"1":{"name":"keyword.control.as.ts"},"2":{"name":"keyword.control.satisfies.ts"}},"end":"(?=[-\\\\])+,:;>?}]|\\\\|\\\\||&&|!==|$|^|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(as|satisifies)\\\\s+))","name":"meta.object.member.ts","patterns":[{"include":"#type"}]},{"begin":"(?=[$_[:alpha:]][$_[:alnum:]]*\\\\s*=)","end":"(?=[,}]|$|//|/\\\\*)","name":"meta.object.member.ts","patterns":[{"include":"#expression"}]},{"begin":":","beginCaptures":{"0":{"name":"meta.object-literal.key.ts punctuation.separator.key-value.ts"}},"end":"(?=[,}])","name":"meta.object.member.ts","patterns":[{"begin":"(?<=:)\\\\s*(async)?(?=\\\\s*(<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))))","beginCaptures":{"1":{"name":"storage.modifier.async.ts"}},"end":"(?<=\\\\))","patterns":[{"include":"#type-parameters"},{"begin":"\\\\(","beginCaptures":{"0":{"name":"meta.brace.round.ts"}},"end":"\\\\)","endCaptures":{"0":{"name":"meta.brace.round.ts"}},"patterns":[{"include":"#expression-inside-possibly-arrow-parens"}]}]},{"begin":"(?<=:)\\\\s*(async)?\\\\s*(\\\\()(?=\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))))","beginCaptures":{"1":{"name":"storage.modifier.async.ts"},"2":{"name":"meta.brace.round.ts"}},"end":"\\\\)","endCaptures":{"0":{"name":"meta.brace.round.ts"}},"patterns":[{"include":"#expression-inside-possibly-arrow-parens"}]},{"begin":"(?<=:)\\\\s*(async)?\\\\s*(?=<\\\\s*$)","beginCaptures":{"1":{"name":"storage.modifier.async.ts"}},"end":"(?<=>)","patterns":[{"include":"#type-parameters"}]},{"begin":"(?<=>)\\\\s*(\\\\()(?=\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))))","beginCaptures":{"1":{"name":"meta.brace.round.ts"}},"end":"\\\\)","endCaptures":{"0":{"name":"meta.brace.round.ts"}},"patterns":[{"include":"#expression-inside-possibly-arrow-parens"}]},{"include":"#possibly-arrow-return-type"},{"include":"#expression"}]},{"include":"#punctuation-comma"},{"include":"#decl-block"}]},"parameter-array-binding-pattern":{"begin":"(?:(\\\\.\\\\.\\\\.)\\\\s*)?(\\\\[)","beginCaptures":{"1":{"name":"keyword.operator.rest.ts"},"2":{"name":"punctuation.definition.binding-pattern.array.ts"}},"end":"]","endCaptures":{"0":{"name":"punctuation.definition.binding-pattern.array.ts"}},"patterns":[{"include":"#parameter-binding-element"},{"include":"#punctuation-comma"}]},"parameter-binding-element":{"patterns":[{"include":"#comment"},{"include":"#string"},{"include":"#numeric-literal"},{"include":"#regex"},{"include":"#parameter-object-binding-pattern"},{"include":"#parameter-array-binding-pattern"},{"include":"#destructuring-parameter-rest"},{"include":"#variable-initializer"}]},"parameter-name":{"patterns":[{"captures":{"1":{"name":"storage.modifier.ts"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(override|public|protected|private|readonly)\\\\s+(?=(override|public|protected|private|readonly)\\\\s+)"},{"captures":{"1":{"name":"storage.modifier.ts"},"2":{"name":"keyword.operator.rest.ts"},"3":{"name":"entity.name.function.ts variable.language.this.ts"},"4":{"name":"entity.name.function.ts"},"5":{"name":"keyword.operator.optional.ts"}},"match":"(?:(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(override|public|private|protected|readonly)\\\\s+)?(?:(\\\\.\\\\.\\\\.)\\\\s*)?(?<![:=])(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(this)|([$_[:alpha:]][$_[:alnum:]]*))(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\\\\s*(\\\\??)(?=\\\\s*(=\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\"\'()`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>)))))|(:\\\\s*((<)|(\\\\(\\\\s*((\\\\))|(\\\\.\\\\.\\\\.)|([$_[:alnum:]]+\\\\s*(([,:=?])|(\\\\)\\\\s*=>)))))))|(:\\\\s*(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))Function(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))|(:\\\\s*((<\\\\s*)$|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))))))|(:\\\\s*(=>|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(<[^<>]*>)|[^(),<=>])+=\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\"\'()`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>))))))"},{"captures":{"1":{"name":"storage.modifier.ts"},"2":{"name":"keyword.operator.rest.ts"},"3":{"name":"variable.parameter.ts variable.language.this.ts"},"4":{"name":"variable.parameter.ts"},"5":{"name":"keyword.operator.optional.ts"}},"match":"(?:(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(override|public|private|protected|readonly)\\\\s+)?(?:(\\\\.\\\\.\\\\.)\\\\s*)?(?<![:=])(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(this)|([$_[:alpha:]][$_[:alnum:]]*))(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\\\\s*(\\\\??)"}]},"parameter-object-binding-element":{"patterns":[{"include":"#comment"},{"begin":"(?=(\\\\b((?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$))|((?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$))|([$_[:alpha:]][$_[:alnum:]]*)|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`)|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])+]))\\\\s*(:))","end":"(?=[,}])","patterns":[{"include":"#object-binding-element-propertyName"},{"include":"#parameter-binding-element"},{"include":"#paren-expression"}]},{"include":"#parameter-object-binding-pattern"},{"include":"#destructuring-parameter-rest"},{"include":"#variable-initializer"},{"include":"#punctuation-comma"}]},"parameter-object-binding-pattern":{"begin":"(?:(\\\\.\\\\.\\\\.)\\\\s*)?(\\\\{)","beginCaptures":{"1":{"name":"keyword.operator.rest.ts"},"2":{"name":"punctuation.definition.binding-pattern.object.ts"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.binding-pattern.object.ts"}},"patterns":[{"include":"#parameter-object-binding-element"}]},"parameter-type-annotation":{"patterns":[{"begin":"(:)","beginCaptures":{"1":{"name":"keyword.operator.type.annotation.ts"}},"end":"(?=[),])|(?==[^>])","name":"meta.type.annotation.ts","patterns":[{"include":"#type"}]}]},"paren-expression":{"begin":"\\\\(","beginCaptures":{"0":{"name":"meta.brace.round.ts"}},"end":"\\\\)","endCaptures":{"0":{"name":"meta.brace.round.ts"}},"patterns":[{"include":"#expression"}]},"paren-expression-possibly-arrow":{"patterns":[{"begin":"(?<=[(,=])\\\\s*(async)?(?=\\\\s*((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*))?\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))))","beginCaptures":{"1":{"name":"storage.modifier.async.ts"}},"end":"(?<=\\\\))","patterns":[{"include":"#paren-expression-possibly-arrow-with-typeparameters"}]},{"begin":"(?<=[(,=]|=>|^return|[^$._[:alnum:]]return)\\\\s*(async)?(?=\\\\s*((((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*))?\\\\()|(<)|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)))\\\\s*$)","beginCaptures":{"1":{"name":"storage.modifier.async.ts"}},"end":"(?<=\\\\))","patterns":[{"include":"#paren-expression-possibly-arrow-with-typeparameters"}]},{"include":"#possibly-arrow-return-type"}]},"paren-expression-possibly-arrow-with-typeparameters":{"patterns":[{"include":"#type-parameters"},{"begin":"\\\\(","beginCaptures":{"0":{"name":"meta.brace.round.ts"}},"end":"\\\\)","endCaptures":{"0":{"name":"meta.brace.round.ts"}},"patterns":[{"include":"#expression-inside-possibly-arrow-parens"}]}]},"possibly-arrow-return-type":{"begin":"(?<=\\\\)|^)\\\\s*(:)(?=\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*=>)","beginCaptures":{"1":{"name":"meta.arrow.ts meta.return.type.arrow.ts keyword.operator.type.annotation.ts"}},"contentName":"meta.arrow.ts meta.return.type.arrow.ts","end":"(?==>|\\\\{|^(\\\\s*(export|function|class|interface|let|var|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|const|import|enum|namespace|module|type|abstract|declare)\\\\s+))","patterns":[{"include":"#arrow-return-type-body"}]},"property-accessor":{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(accessor|get|set)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"storage.type.property.ts"},"punctuation-accessor":{"captures":{"1":{"name":"punctuation.accessor.ts"},"2":{"name":"punctuation.accessor.optional.ts"}},"match":"(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d))"},"punctuation-comma":{"match":",","name":"punctuation.separator.comma.ts"},"punctuation-semicolon":{"match":";","name":"punctuation.terminator.statement.ts"},"qstring-double":{"begin":"\\"","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.ts"}},"end":"(\\")|([^\\\\n\\\\\\\\])$","endCaptures":{"1":{"name":"punctuation.definition.string.end.ts"},"2":{"name":"invalid.illegal.newline.ts"}},"name":"string.quoted.double.ts","patterns":[{"include":"#string-character-escape"}]},"qstring-single":{"begin":"\'","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.ts"}},"end":"(\')|([^\\\\n\\\\\\\\])$","endCaptures":{"1":{"name":"punctuation.definition.string.end.ts"},"2":{"name":"invalid.illegal.newline.ts"}},"name":"string.quoted.single.ts","patterns":[{"include":"#string-character-escape"}]},"regex":{"patterns":[{"begin":"(?<!\\\\+\\\\+|--|})(?<=[!(+,:=?\\\\[]|^return|[^$._[:alnum:]]return|^case|[^$._[:alnum:]]case|=>|&&|\\\\|\\\\||\\\\*/)\\\\s*(/)(?![*/])(?=(?:[^()/\\\\[\\\\\\\\]|\\\\\\\\.|\\\\[([^]\\\\\\\\]|\\\\\\\\.)+]|\\\\(([^)\\\\\\\\]|\\\\\\\\.)+\\\\))+/([dgimsuvy]+|(?![*/])|(?=/\\\\*))(?!\\\\s*[$0-9A-Z_a-z]))","beginCaptures":{"1":{"name":"punctuation.definition.string.begin.ts"}},"end":"(/)([dgimsuvy]*)","endCaptures":{"1":{"name":"punctuation.definition.string.end.ts"},"2":{"name":"keyword.other.ts"}},"name":"string.regexp.ts","patterns":[{"include":"#regexp"}]},{"begin":"((?<![]$)_[:alnum:]]|\\\\+\\\\+|--|}|\\\\*/)|((?<=^return|[^$._[:alnum:]]return|^case|[^$._[:alnum:]]case))\\\\s*)/(?![*/])(?=(?:[^/\\\\[\\\\\\\\]|\\\\\\\\.|\\\\[([^]\\\\\\\\]|\\\\\\\\.)*])+/([dgimsuvy]+|(?![*/])|(?=/\\\\*))(?!\\\\s*[$0-9A-Z_a-z]))","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.ts"}},"end":"(/)([dgimsuvy]*)","endCaptures":{"1":{"name":"punctuation.definition.string.end.ts"},"2":{"name":"keyword.other.ts"}},"name":"string.regexp.ts","patterns":[{"include":"#regexp"}]}]},"regex-character-class":{"patterns":[{"match":"\\\\\\\\[DSWdfnrstvw]|\\\\.","name":"constant.other.character-class.regexp"},{"match":"\\\\\\\\([0-7]{3}|x\\\\h{2}|u\\\\h{4})","name":"constant.character.numeric.regexp"},{"match":"\\\\\\\\c[A-Z]","name":"constant.character.control.regexp"},{"match":"\\\\\\\\.","name":"constant.character.escape.backslash.regexp"}]},"regexp":{"patterns":[{"match":"\\\\\\\\[Bb]|[$^]","name":"keyword.control.anchor.regexp"},{"captures":{"0":{"name":"keyword.other.back-reference.regexp"},"1":{"name":"variable.other.regexp"}},"match":"\\\\\\\\(?:[1-9]\\\\d*|k<([$A-Z_a-z][$\\\\w]*)>)"},{"match":"[*+?]|\\\\{(\\\\d+,\\\\d+|\\\\d+,|,\\\\d+|\\\\d+)}\\\\??","name":"keyword.operator.quantifier.regexp"},{"match":"\\\\|","name":"keyword.operator.or.regexp"},{"begin":"(\\\\()((\\\\?=)|(\\\\?!)|(\\\\?<=)|(\\\\?<!))","beginCaptures":{"1":{"name":"punctuation.definition.group.regexp"},"2":{"name":"punctuation.definition.group.assertion.regexp"},"3":{"name":"meta.assertion.look-ahead.regexp"},"4":{"name":"meta.assertion.negative-look-ahead.regexp"},"5":{"name":"meta.assertion.look-behind.regexp"},"6":{"name":"meta.assertion.negative-look-behind.regexp"}},"end":"(\\\\))","endCaptures":{"1":{"name":"punctuation.definition.group.regexp"}},"name":"meta.group.assertion.regexp","patterns":[{"include":"#regexp"}]},{"begin":"\\\\((?:(\\\\?:)|\\\\?<([$A-Z_a-z][$\\\\w]*)>)?","beginCaptures":{"0":{"name":"punctuation.definition.group.regexp"},"1":{"name":"punctuation.definition.group.no-capture.regexp"},"2":{"name":"variable.other.regexp"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.definition.group.regexp"}},"name":"meta.group.regexp","patterns":[{"include":"#regexp"}]},{"begin":"(\\\\[)(\\\\^)?","beginCaptures":{"1":{"name":"punctuation.definition.character-class.regexp"},"2":{"name":"keyword.operator.negation.regexp"}},"end":"(])","endCaptures":{"1":{"name":"punctuation.definition.character-class.regexp"}},"name":"constant.other.character-class.set.regexp","patterns":[{"captures":{"1":{"name":"constant.character.numeric.regexp"},"2":{"name":"constant.character.control.regexp"},"3":{"name":"constant.character.escape.backslash.regexp"},"4":{"name":"constant.character.numeric.regexp"},"5":{"name":"constant.character.control.regexp"},"6":{"name":"constant.character.escape.backslash.regexp"}},"match":"(?:.|(\\\\\\\\(?:[0-7]{3}|x\\\\h{2}|u\\\\h{4}))|(\\\\\\\\c[A-Z])|(\\\\\\\\.))-(?:[^]\\\\\\\\]|(\\\\\\\\(?:[0-7]{3}|x\\\\h{2}|u\\\\h{4}))|(\\\\\\\\c[A-Z])|(\\\\\\\\.))","name":"constant.other.character-class.range.regexp"},{"include":"#regex-character-class"}]},{"include":"#regex-character-class"}]},"return-type":{"patterns":[{"begin":"(?<=\\\\))\\\\s*(:)(?=\\\\s*\\\\S)","beginCaptures":{"1":{"name":"keyword.operator.type.annotation.ts"}},"end":"(?<![\\\\&:|])(?=$|^|[,;{}]|//)","name":"meta.return.type.ts","patterns":[{"include":"#return-type-core"}]},{"begin":"(?<=\\\\))\\\\s*(:)","beginCaptures":{"1":{"name":"keyword.operator.type.annotation.ts"}},"end":"(?<![\\\\&:|])((?=[,;{}]|//|^\\\\s*$)|((?<=\\\\S)(?=\\\\s*$)))","name":"meta.return.type.ts","patterns":[{"include":"#return-type-core"}]}]},"return-type-core":{"patterns":[{"include":"#comment"},{"begin":"(?<=[\\\\&:|])(?=\\\\s*\\\\{)","end":"(?<=})","patterns":[{"include":"#type-object"}]},{"include":"#type-predicate-operator"},{"include":"#type"}]},"shebang":{"captures":{"1":{"name":"punctuation.definition.comment.ts"}},"match":"\\\\A(#!).*(?=$)","name":"comment.line.shebang.ts"},"single-line-comment-consuming-line-ending":{"begin":"(^[\\\\t ]+)?((//)(?:\\\\s*((@)internal)(?=\\\\s|$))?)","beginCaptures":{"1":{"name":"punctuation.whitespace.comment.leading.ts"},"2":{"name":"comment.line.double-slash.ts"},"3":{"name":"punctuation.definition.comment.ts"},"4":{"name":"storage.type.internaldeclaration.ts"},"5":{"name":"punctuation.decorator.internaldeclaration.ts"}},"contentName":"comment.line.double-slash.ts","end":"(?=^)"},"statements":{"patterns":[{"include":"#declaration"},{"include":"#control-statement"},{"include":"#after-operator-block-as-object-literal"},{"include":"#decl-block"},{"include":"#label"},{"include":"#expression"},{"include":"#punctuation-semicolon"},{"include":"#string"},{"include":"#comment"}]},"string":{"patterns":[{"include":"#qstring-single"},{"include":"#qstring-double"},{"include":"#template"}]},"string-character-escape":{"match":"\\\\\\\\(x\\\\h{2}|u\\\\h{4}|u\\\\{\\\\h+}|[012][0-7]{0,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.|$)","name":"constant.character.escape.ts"},"super-literal":{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))super\\\\b(?!\\\\$)","name":"variable.language.super.ts"},"support-function-call-identifiers":{"patterns":[{"include":"#literal"},{"include":"#support-objects"},{"include":"#object-identifiers"},{"include":"#punctuation-accessor"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))import(?=\\\\s*\\\\(\\\\s*[\\"\'`])","name":"keyword.operator.expression.import.ts"}]},"support-objects":{"patterns":[{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(arguments)\\\\b(?!\\\\$)","name":"variable.language.arguments.ts"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(Promise)\\\\b(?!\\\\$)","name":"support.class.promise.ts"},{"captures":{"1":{"name":"keyword.control.import.ts"},"2":{"name":"punctuation.accessor.ts"},"3":{"name":"punctuation.accessor.optional.ts"},"4":{"name":"support.variable.property.importmeta.ts"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(import)\\\\s*(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))\\\\s*(meta)\\\\b(?!\\\\$)"},{"captures":{"1":{"name":"keyword.operator.new.ts"},"2":{"name":"punctuation.accessor.ts"},"3":{"name":"punctuation.accessor.optional.ts"},"4":{"name":"support.variable.property.target.ts"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(new)\\\\s*(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))\\\\s*(target)\\\\b(?!\\\\$)"},{"captures":{"1":{"name":"punctuation.accessor.ts"},"2":{"name":"punctuation.accessor.optional.ts"},"3":{"name":"support.variable.property.ts"},"4":{"name":"support.constant.ts"}},"match":"(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))\\\\s*(?:(constructor|length|prototype|__proto__)\\\\b(?!\\\\$|\\\\s*(<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\()|(EPSILON|MAX_SAFE_INTEGER|MAX_VALUE|MIN_SAFE_INTEGER|MIN_VALUE|NEGATIVE_INFINITY|POSITIVE_INFINITY)\\\\b(?!\\\\$))"},{"captures":{"1":{"name":"support.type.object.module.ts"},"2":{"name":"support.type.object.module.ts"},"3":{"name":"punctuation.accessor.ts"},"4":{"name":"punctuation.accessor.optional.ts"},"5":{"name":"support.type.object.module.ts"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(exports)|(module)(?:(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))(exports|id|filename|loaded|parent|children))?)\\\\b(?!\\\\$)"}]},"switch-statement":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?=\\\\bswitch\\\\s*\\\\()","end":"}","endCaptures":{"0":{"name":"punctuation.definition.block.ts"}},"name":"switch-statement.expr.ts","patterns":[{"include":"#comment"},{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(switch)\\\\s*(\\\\()","beginCaptures":{"1":{"name":"keyword.control.switch.ts"},"2":{"name":"meta.brace.round.ts"}},"end":"\\\\)","endCaptures":{"0":{"name":"meta.brace.round.ts"}},"name":"switch-expression.expr.ts","patterns":[{"include":"#expression"}]},{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.definition.block.ts"}},"end":"(?=})","name":"switch-block.expr.ts","patterns":[{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(case|default(?=:))(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","beginCaptures":{"1":{"name":"keyword.control.switch.ts"}},"end":"(?=:)","name":"case-clause.expr.ts","patterns":[{"include":"#expression"}]},{"begin":"(:)\\\\s*(\\\\{)","beginCaptures":{"1":{"name":"case-clause.expr.ts punctuation.definition.section.case-statement.ts"},"2":{"name":"meta.block.ts punctuation.definition.block.ts"}},"contentName":"meta.block.ts","end":"}","endCaptures":{"0":{"name":"meta.block.ts punctuation.definition.block.ts"}},"patterns":[{"include":"#statements"}]},{"captures":{"0":{"name":"case-clause.expr.ts punctuation.definition.section.case-statement.ts"}},"match":"(:)"},{"include":"#statements"}]}]},"template":{"patterns":[{"include":"#template-call"},{"begin":"([$_[:alpha:]][$_[:alnum:]]*)?(`)","beginCaptures":{"1":{"name":"entity.name.function.tagged-template.ts"},"2":{"name":"string.template.ts punctuation.definition.string.template.begin.ts"}},"contentName":"string.template.ts","end":"`","endCaptures":{"0":{"name":"string.template.ts punctuation.definition.string.template.end.ts"}},"patterns":[{"include":"#template-substitution-element"},{"include":"#string-character-escape"}]}]},"template-call":{"patterns":[{"begin":"(?=(([$_[:alpha:]][$_[:alnum:]]*\\\\s*\\\\??\\\\.\\\\s*)*|(\\\\??\\\\.\\\\s*)?)([$_[:alpha:]][$_[:alnum:]]*)(<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))(([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>)*(?<!=)>))*(?<!=)>)*(?<!=)>\\\\s*)?`)","end":"(?=`)","patterns":[{"begin":"(?=(([$_[:alpha:]][$_[:alnum:]]*\\\\s*\\\\??\\\\.\\\\s*)*|(\\\\??\\\\.\\\\s*)?)([$_[:alpha:]][$_[:alnum:]]*))","end":"(?=(<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))(([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>)*(?<!=)>))*(?<!=)>)*(?<!=)>\\\\s*)?`)","patterns":[{"include":"#support-function-call-identifiers"},{"match":"([$_[:alpha:]][$_[:alnum:]]*)","name":"entity.name.function.tagged-template.ts"}]},{"include":"#type-arguments"}]},{"begin":"([$_[:alpha:]][$_[:alnum:]]*)?\\\\s*(?=(<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))(([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>)*(?<!=)>))*(?<!=)>)*(?<!=)>\\\\s*)`)","beginCaptures":{"1":{"name":"entity.name.function.tagged-template.ts"}},"end":"(?=`)","patterns":[{"include":"#type-arguments"}]}]},"template-substitution-element":{"begin":"\\\\$\\\\{","beginCaptures":{"0":{"name":"punctuation.definition.template-expression.begin.ts"}},"contentName":"meta.embedded.line.ts","end":"}","endCaptures":{"0":{"name":"punctuation.definition.template-expression.end.ts"}},"name":"meta.template.expression.ts","patterns":[{"include":"#expression"}]},"template-type":{"patterns":[{"include":"#template-call"},{"begin":"([$_[:alpha:]][$_[:alnum:]]*)?(`)","beginCaptures":{"1":{"name":"entity.name.function.tagged-template.ts"},"2":{"name":"string.template.ts punctuation.definition.string.template.begin.ts"}},"contentName":"string.template.ts","end":"`","endCaptures":{"0":{"name":"string.template.ts punctuation.definition.string.template.end.ts"}},"patterns":[{"include":"#template-type-substitution-element"},{"include":"#string-character-escape"}]}]},"template-type-substitution-element":{"begin":"\\\\$\\\\{","beginCaptures":{"0":{"name":"punctuation.definition.template-expression.begin.ts"}},"contentName":"meta.embedded.line.ts","end":"}","endCaptures":{"0":{"name":"punctuation.definition.template-expression.end.ts"}},"name":"meta.template.expression.ts","patterns":[{"include":"#type"}]},"ternary-expression":{"begin":"(?!\\\\?\\\\.\\\\s*\\\\D)(\\\\?)(?!\\\\?)","beginCaptures":{"1":{"name":"keyword.operator.ternary.ts"}},"end":"\\\\s*(:)","endCaptures":{"1":{"name":"keyword.operator.ternary.ts"}},"patterns":[{"include":"#expression"}]},"this-literal":{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))this\\\\b(?!\\\\$)","name":"variable.language.this.ts"},"type":{"patterns":[{"include":"#comment"},{"include":"#type-string"},{"include":"#numeric-literal"},{"include":"#type-primitive"},{"include":"#type-builtin-literals"},{"include":"#type-parameters"},{"include":"#type-tuple"},{"include":"#type-object"},{"include":"#type-operators"},{"include":"#type-conditional"},{"include":"#type-fn-type-parameters"},{"include":"#type-paren-or-function-parameters"},{"include":"#type-function-return-type"},{"captures":{"1":{"name":"storage.modifier.ts"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(readonly)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\\\\s*"},{"include":"#type-name"}]},"type-alias-declaration":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(type)\\\\b\\\\s+([$_[:alpha:]][$_[:alnum:]]*)\\\\s*","beginCaptures":{"1":{"name":"keyword.control.export.ts"},"2":{"name":"storage.modifier.ts"},"3":{"name":"storage.type.type.ts"},"4":{"name":"entity.name.type.alias.ts"}},"end":"(?=[;}]|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)","name":"meta.type.declaration.ts","patterns":[{"include":"#comment"},{"include":"#type-parameters"},{"begin":"(=)\\\\s*(intrinsic)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","beginCaptures":{"1":{"name":"keyword.operator.assignment.ts"},"2":{"name":"keyword.control.intrinsic.ts"}},"end":"(?=[;}]|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)","patterns":[{"include":"#type"}]},{"begin":"(=)\\\\s*","beginCaptures":{"1":{"name":"keyword.operator.assignment.ts"}},"end":"(?=[;}]|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)","patterns":[{"include":"#type"}]}]},"type-annotation":{"patterns":[{"begin":"(:)(?=\\\\s*\\\\S)","beginCaptures":{"1":{"name":"keyword.operator.type.annotation.ts"}},"end":"(?<![\\\\&:|])(?!\\\\s*[\\\\&|]\\\\s+)((?=^|[]),;}]|//)|(?==[^>])|((?<=[]$)>_}[:alpha:]])\\\\s*(?=\\\\{)))","name":"meta.type.annotation.ts","patterns":[{"include":"#type"}]},{"begin":"(:)","beginCaptures":{"1":{"name":"keyword.operator.type.annotation.ts"}},"end":"(?<![\\\\&:|])((?=[]),;}]|//)|(?==[^>])|(?=^\\\\s*$)|((?<=[]$)>_}[:alpha:]])\\\\s*(?=\\\\{)))","name":"meta.type.annotation.ts","patterns":[{"include":"#type"}]}]},"type-arguments":{"begin":"<","beginCaptures":{"0":{"name":"punctuation.definition.typeparameters.begin.ts"}},"end":">","endCaptures":{"0":{"name":"punctuation.definition.typeparameters.end.ts"}},"name":"meta.type.parameters.ts","patterns":[{"include":"#type-arguments-body"}]},"type-arguments-body":{"patterns":[{"captures":{"0":{"name":"keyword.operator.type.ts"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(_)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))"},{"include":"#type"},{"include":"#punctuation-comma"}]},"type-builtin-literals":{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(this|true|false|undefined|null|object)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"support.type.builtin.ts"},"type-conditional":{"patterns":[{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(extends)\\\\s+","beginCaptures":{"1":{"name":"storage.modifier.ts"}},"end":"(?<=:)","patterns":[{"begin":"\\\\?","beginCaptures":{"0":{"name":"keyword.operator.ternary.ts"}},"end":":","endCaptures":{"0":{"name":"keyword.operator.ternary.ts"}},"patterns":[{"include":"#type"}]},{"include":"#type"}]}]},"type-fn-type-parameters":{"patterns":[{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(abstract)\\\\s+)?(new)\\\\b(?=\\\\s*<)","beginCaptures":{"1":{"name":"meta.type.constructor.ts storage.modifier.ts"},"2":{"name":"meta.type.constructor.ts keyword.control.new.ts"}},"end":"(?<=>)","patterns":[{"include":"#comment"},{"include":"#type-parameters"}]},{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(abstract)\\\\s+)?(new)\\\\b\\\\s*(?=\\\\()","beginCaptures":{"1":{"name":"storage.modifier.ts"},"2":{"name":"keyword.control.new.ts"}},"end":"(?<=\\\\))","name":"meta.type.constructor.ts","patterns":[{"include":"#function-parameters"}]},{"begin":"((?=\\\\(\\\\s*((\\\\))|(\\\\.\\\\.\\\\.)|([$_[:alnum:]]+\\\\s*(([,:=?])|(\\\\)\\\\s*=>))))))","end":"(?<=\\\\))","name":"meta.type.function.ts","patterns":[{"include":"#function-parameters"}]}]},"type-function-return-type":{"patterns":[{"begin":"(=>)(?=\\\\s*\\\\S)","beginCaptures":{"1":{"name":"storage.type.function.arrow.ts"}},"end":"(?<!=>)(?<![\\\\&|])(?=[]),:;=>?{}]|//|$)","name":"meta.type.function.return.ts","patterns":[{"include":"#type-function-return-type-core"}]},{"begin":"=>","beginCaptures":{"0":{"name":"storage.type.function.arrow.ts"}},"end":"(?<!=>)(?<![\\\\&|])((?=[]),:;=>?{}]|//|^\\\\s*$)|((?<=\\\\S)(?=\\\\s*$)))","name":"meta.type.function.return.ts","patterns":[{"include":"#type-function-return-type-core"}]}]},"type-function-return-type-core":{"patterns":[{"include":"#comment"},{"begin":"(?<==>)(?=\\\\s*\\\\{)","end":"(?<=})","patterns":[{"include":"#type-object"}]},{"include":"#type-predicate-operator"},{"include":"#type"}]},"type-infer":{"patterns":[{"captures":{"1":{"name":"keyword.operator.expression.infer.ts"},"2":{"name":"entity.name.type.ts"},"3":{"name":"keyword.operator.expression.extends.ts"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(infer)\\\\s+([$_[:alpha:]][$_[:alnum:]]*)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))(?:\\\\s+(extends)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))?","name":"meta.type.infer.ts"}]},"type-name":{"patterns":[{"begin":"([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))\\\\s*(<)","captures":{"1":{"name":"entity.name.type.module.ts"},"2":{"name":"punctuation.accessor.ts"},"3":{"name":"punctuation.accessor.optional.ts"},"4":{"name":"meta.type.parameters.ts punctuation.definition.typeparameters.begin.ts"}},"contentName":"meta.type.parameters.ts","end":"(>)","endCaptures":{"1":{"name":"meta.type.parameters.ts punctuation.definition.typeparameters.end.ts"}},"patterns":[{"include":"#type-arguments-body"}]},{"begin":"([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(<)","beginCaptures":{"1":{"name":"entity.name.type.ts"},"2":{"name":"meta.type.parameters.ts punctuation.definition.typeparameters.begin.ts"}},"contentName":"meta.type.parameters.ts","end":"(>)","endCaptures":{"1":{"name":"meta.type.parameters.ts punctuation.definition.typeparameters.end.ts"}},"patterns":[{"include":"#type-arguments-body"}]},{"captures":{"1":{"name":"entity.name.type.module.ts"},"2":{"name":"punctuation.accessor.ts"},"3":{"name":"punctuation.accessor.optional.ts"}},"match":"([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))"},{"match":"[$_[:alpha:]][$_[:alnum:]]*","name":"entity.name.type.ts"}]},"type-object":{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.definition.block.ts"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.block.ts"}},"name":"meta.object.type.ts","patterns":[{"include":"#comment"},{"include":"#method-declaration"},{"include":"#indexer-declaration"},{"include":"#indexer-mapped-type-declaration"},{"include":"#field-declaration"},{"include":"#type-annotation"},{"begin":"\\\\.\\\\.\\\\.","beginCaptures":{"0":{"name":"keyword.operator.spread.ts"}},"end":"(?=[,;}]|$)|(?<=})","patterns":[{"include":"#type"}]},{"include":"#punctuation-comma"},{"include":"#punctuation-semicolon"},{"include":"#type"}]},"type-operators":{"patterns":[{"include":"#typeof-operator"},{"include":"#type-infer"},{"begin":"([\\\\&|])(?=\\\\s*\\\\{)","beginCaptures":{"0":{"name":"keyword.operator.type.ts"}},"end":"(?<=})","patterns":[{"include":"#type-object"}]},{"begin":"[\\\\&|]","beginCaptures":{"0":{"name":"keyword.operator.type.ts"}},"end":"(?=\\\\S)"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))keyof(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.operator.expression.keyof.ts"},{"match":"([:?])","name":"keyword.operator.ternary.ts"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))import(?=\\\\s*\\\\()","name":"keyword.operator.expression.import.ts"}]},"type-parameters":{"begin":"(<)","beginCaptures":{"1":{"name":"punctuation.definition.typeparameters.begin.ts"}},"end":"(>)","endCaptures":{"1":{"name":"punctuation.definition.typeparameters.end.ts"}},"name":"meta.type.parameters.ts","patterns":[{"include":"#comment"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(extends|in|out|const)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"storage.modifier.ts"},{"include":"#type"},{"include":"#punctuation-comma"},{"match":"(=)(?!>)","name":"keyword.operator.assignment.ts"}]},"type-paren-or-function-parameters":{"begin":"\\\\(","beginCaptures":{"0":{"name":"meta.brace.round.ts"}},"end":"\\\\)","endCaptures":{"0":{"name":"meta.brace.round.ts"}},"name":"meta.type.paren.cover.ts","patterns":[{"captures":{"1":{"name":"storage.modifier.ts"},"2":{"name":"keyword.operator.rest.ts"},"3":{"name":"entity.name.function.ts variable.language.this.ts"},"4":{"name":"entity.name.function.ts"},"5":{"name":"keyword.operator.optional.ts"}},"match":"(?:(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(public|private|protected|readonly)\\\\s+)?(?:(\\\\.\\\\.\\\\.)\\\\s*)?(?<![:=])(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(this)|([$_[:alpha:]][$_[:alnum:]]*))\\\\s*(\\\\??)(?=\\\\s*(:\\\\s*((<)|(\\\\(\\\\s*((\\\\))|(\\\\.\\\\.\\\\.)|([$_[:alnum:]]+\\\\s*(([,:=?])|(\\\\)\\\\s*=>)))))))|(:\\\\s*(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))Function(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))|(:\\\\s*((<\\\\s*)$|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))))"},{"captures":{"1":{"name":"storage.modifier.ts"},"2":{"name":"keyword.operator.rest.ts"},"3":{"name":"variable.parameter.ts variable.language.this.ts"},"4":{"name":"variable.parameter.ts"},"5":{"name":"keyword.operator.optional.ts"}},"match":"(?:(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(public|private|protected|readonly)\\\\s+)?(?:(\\\\.\\\\.\\\\.)\\\\s*)?(?<![:=])(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(this)|([$_[:alpha:]][$_[:alnum:]]*))\\\\s*(\\\\??)(?=:)"},{"include":"#type-annotation"},{"match":",","name":"punctuation.separator.parameter.ts"},{"include":"#type"}]},"type-predicate-operator":{"patterns":[{"captures":{"1":{"name":"keyword.operator.type.asserts.ts"},"2":{"name":"variable.parameter.ts variable.language.this.ts"},"3":{"name":"variable.parameter.ts"},"4":{"name":"keyword.operator.expression.is.ts"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(asserts)\\\\s+)?(?!asserts)(?:(this)|([$_[:alpha:]][$_[:alnum:]]*))\\\\s(is)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))"},{"captures":{"1":{"name":"keyword.operator.type.asserts.ts"},"2":{"name":"variable.parameter.ts variable.language.this.ts"},"3":{"name":"variable.parameter.ts"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(asserts)\\\\s+(?!is)(?:(this)|([$_[:alpha:]][$_[:alnum:]]*))(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))asserts(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.operator.type.asserts.ts"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))is(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.operator.expression.is.ts"}]},"type-primitive":{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(string|number|bigint|boolean|symbol|any|void|never|unknown)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"support.type.primitive.ts"},"type-string":{"patterns":[{"include":"#qstring-single"},{"include":"#qstring-double"},{"include":"#template-type"}]},"type-tuple":{"begin":"\\\\[","beginCaptures":{"0":{"name":"meta.brace.square.ts"}},"end":"]","endCaptures":{"0":{"name":"meta.brace.square.ts"}},"name":"meta.type.tuple.ts","patterns":[{"match":"\\\\.\\\\.\\\\.","name":"keyword.operator.rest.ts"},{"captures":{"1":{"name":"entity.name.label.ts"},"2":{"name":"keyword.operator.optional.ts"},"3":{"name":"punctuation.separator.label.ts"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(\\\\?)?\\\\s*(:)"},{"include":"#type"},{"include":"#punctuation-comma"}]},"typeof-operator":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))typeof(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","beginCaptures":{"0":{"name":"keyword.operator.expression.typeof.ts"}},"end":"(?=[]\\\\&),:;=>?{|}]|(extends\\\\s+)|$|;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)","patterns":[{"include":"#type-arguments"},{"include":"#expression"}]},"undefined-literal":{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))undefined(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"constant.language.undefined.ts"},"var-expr":{"patterns":[{"begin":"(?=(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(var|let)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))","end":"(?!(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(var|let)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))((?=^|[;}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+)|;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)|((?<!^let|[^$._[:alnum:]]let|^var|[^$._[:alnum:]]var)(?=\\\\s*$)))","name":"meta.var.expr.ts","patterns":[{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(var|let)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\\\\s*","beginCaptures":{"1":{"name":"keyword.control.export.ts"},"2":{"name":"storage.modifier.ts"},"3":{"name":"storage.type.ts"}},"end":"(?=\\\\S)"},{"include":"#destructuring-variable"},{"include":"#var-single-variable"},{"include":"#variable-initializer"},{"include":"#comment"},{"begin":"(,)\\\\s*(?=$|//)","beginCaptures":{"1":{"name":"punctuation.separator.comma.ts"}},"end":"(?<!,)(((?=[;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+)|^\\\\s*$))|((?<=\\\\S)(?=\\\\s*$)))","patterns":[{"include":"#single-line-comment-consuming-line-ending"},{"include":"#comment"},{"include":"#destructuring-variable"},{"include":"#var-single-variable"},{"include":"#punctuation-comma"}]},{"include":"#punctuation-comma"}]},{"begin":"(?=(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(const(?!\\\\s+enum\\\\b))(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))","beginCaptures":{"1":{"name":"keyword.control.export.ts"},"2":{"name":"storage.modifier.ts"},"3":{"name":"storage.type.ts"}},"end":"(?!(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(const(?!\\\\s+enum\\\\b))(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))((?=^|[;}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+)|;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)|((?<!(?:^|[^$._[:alnum:]])const)(?=\\\\s*$)))","name":"meta.var.expr.ts","patterns":[{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(const(?!\\\\s+enum\\\\b))(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\\\\s*","beginCaptures":{"1":{"name":"keyword.control.export.ts"},"2":{"name":"storage.modifier.ts"},"3":{"name":"storage.type.ts"}},"end":"(?=\\\\S)"},{"include":"#destructuring-const"},{"include":"#var-single-const"},{"include":"#variable-initializer"},{"include":"#comment"},{"begin":"(,)\\\\s*(?=$|//)","beginCaptures":{"1":{"name":"punctuation.separator.comma.ts"}},"end":"(?<!,)(((?=[;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+)|^\\\\s*$))|((?<=\\\\S)(?=\\\\s*$)))","patterns":[{"include":"#single-line-comment-consuming-line-ending"},{"include":"#comment"},{"include":"#destructuring-const"},{"include":"#var-single-const"},{"include":"#punctuation-comma"}]},{"include":"#punctuation-comma"}]},{"begin":"(?=(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b\\\\b(using(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])|await\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b)\\\\b(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))","beginCaptures":{"1":{"name":"keyword.control.export.ts"},"2":{"name":"storage.modifier.ts"},"3":{"name":"storage.type.ts"}},"end":"(?!(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b\\\\b(using(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])|await\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b)\\\\b(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))((?=[;}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+)|;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)|((?<!(?:^|[^$._[:alnum:]]|^await\\\\s+|[^$._[:alnum:]]await\\\\s+)using)(?=\\\\s*$)))","name":"meta.var.expr.ts","patterns":[{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b\\\\b(using(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])|await\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b)\\\\b(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\\\\s*","beginCaptures":{"1":{"name":"keyword.control.export.ts"},"2":{"name":"storage.modifier.ts"},"3":{"name":"storage.type.ts"}},"end":"(?=\\\\S)"},{"include":"#var-single-const"},{"include":"#variable-initializer"},{"include":"#comment"},{"begin":"(,)\\\\s*((?!\\\\S)|(?=//))","beginCaptures":{"1":{"name":"punctuation.separator.comma.ts"}},"end":"(?<!,)(((?=[;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+)|^\\\\s*$))|((?<=\\\\S)(?=\\\\s*$)))","patterns":[{"include":"#single-line-comment-consuming-line-ending"},{"include":"#comment"},{"include":"#var-single-const"},{"include":"#punctuation-comma"}]},{"include":"#punctuation-comma"}]}]},"var-single-const":{"patterns":[{"begin":"([$_[:alpha:]][$_[:alnum:]]*)(?=\\\\s*(=\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\"\'()`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>)))))|(:\\\\s*((<)|(\\\\(\\\\s*((\\\\))|(\\\\.\\\\.\\\\.)|([$_[:alnum:]]+\\\\s*(([,:=?])|(\\\\)\\\\s*=>)))))))|(:\\\\s*(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))Function(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))|(:\\\\s*((<\\\\s*)$|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))))))|(:\\\\s*(=>|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(<[^<>]*>)|[^(),<=>])+=\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\"\'()`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>))))))","beginCaptures":{"1":{"name":"meta.definition.variable.ts variable.other.constant.ts entity.name.function.ts"}},"end":"(?=$|^|[,;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+)|(;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b))","name":"meta.var-single-variable.expr.ts","patterns":[{"include":"#var-single-variable-type-annotation"}]},{"begin":"([$_[:alpha:]][$_[:alnum:]]*)","beginCaptures":{"1":{"name":"meta.definition.variable.ts variable.other.constant.ts"}},"end":"(?=$|^|[,;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+)|(;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b))","name":"meta.var-single-variable.expr.ts","patterns":[{"include":"#var-single-variable-type-annotation"}]}]},"var-single-variable":{"patterns":[{"begin":"([$_[:alpha:]][$_[:alnum:]]*)(!)?(?=\\\\s*(=\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\"\'()`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>)))))|(:\\\\s*((<)|(\\\\(\\\\s*((\\\\))|(\\\\.\\\\.\\\\.)|([$_[:alnum:]]+\\\\s*(([,:=?])|(\\\\)\\\\s*=>)))))))|(:\\\\s*(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))Function(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))|(:\\\\s*((<\\\\s*)$|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))))))|(:\\\\s*(=>|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(<[^<>]*>)|[^(),<=>])+=\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\"\'()`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>))))))","beginCaptures":{"1":{"name":"meta.definition.variable.ts entity.name.function.ts"},"2":{"name":"keyword.operator.definiteassignment.ts"}},"end":"(?=$|^|[,;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+)|(;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b))","name":"meta.var-single-variable.expr.ts","patterns":[{"include":"#var-single-variable-type-annotation"}]},{"begin":"(\\\\p{upper}[$_\\\\d[:upper:]]*)(?![$_[:alnum:]])(!)?","beginCaptures":{"1":{"name":"meta.definition.variable.ts variable.other.constant.ts"},"2":{"name":"keyword.operator.definiteassignment.ts"}},"end":"(?=$|^|[,;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+)|(;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b))","name":"meta.var-single-variable.expr.ts","patterns":[{"include":"#var-single-variable-type-annotation"}]},{"begin":"([$_[:alpha:]][$_[:alnum:]]*)(!)?","beginCaptures":{"1":{"name":"meta.definition.variable.ts variable.other.readwrite.ts"},"2":{"name":"keyword.operator.definiteassignment.ts"}},"end":"(?=$|^|[,;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+)|(;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b))","name":"meta.var-single-variable.expr.ts","patterns":[{"include":"#var-single-variable-type-annotation"}]}]},"var-single-variable-type-annotation":{"patterns":[{"include":"#type-annotation"},{"include":"#string"},{"include":"#comment"}]},"variable-initializer":{"patterns":[{"begin":"(?<![!=])(=)(?!=)(?=\\\\s*\\\\S)(?!\\\\s*.*=>\\\\s*$)","beginCaptures":{"1":{"name":"keyword.operator.assignment.ts"}},"end":"(?=$|^|[]),;}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+))","patterns":[{"include":"#expression"}]},{"begin":"(?<![!=])(=)(?!=)","beginCaptures":{"1":{"name":"keyword.operator.assignment.ts"}},"end":"(?=[]),;}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+))|(?=^\\\\s*$)|(?<![-\\\\&*+/|])(?<=\\\\S)(?<!=)(?=\\\\s*$)","patterns":[{"include":"#expression"}]}]}},"scopeName":"source.ts","aliases":["ts","cts","mts"]}'))
  ];
  Hs = [
    Object.freeze(JSON.parse(`{"displayName":"TSX","name":"tsx","patterns":[{"include":"#directives"},{"include":"#statements"},{"include":"#shebang"}],"repository":{"access-modifier":{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(abstract|declare|override|public|protected|private|readonly|static)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"storage.modifier.tsx"},"after-operator-block-as-object-literal":{"begin":"(?<!\\\\+\\\\+|--)(?<=[!(+,:=>?\\\\[]|^await|[^$._[:alnum:]]await|^return|[^$._[:alnum:]]return|^yield|[^$._[:alnum:]]yield|^throw|[^$._[:alnum:]]throw|^in|[^$._[:alnum:]]in|^of|[^$._[:alnum:]]of|^typeof|[^$._[:alnum:]]typeof|&&|\\\\|\\\\||\\\\*)\\\\s*(\\\\{)","beginCaptures":{"1":{"name":"punctuation.definition.block.tsx"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.block.tsx"}},"name":"meta.objectliteral.tsx","patterns":[{"include":"#object-member"}]},"array-binding-pattern":{"begin":"(?:(\\\\.\\\\.\\\\.)\\\\s*)?(\\\\[)","beginCaptures":{"1":{"name":"keyword.operator.rest.tsx"},"2":{"name":"punctuation.definition.binding-pattern.array.tsx"}},"end":"]","endCaptures":{"0":{"name":"punctuation.definition.binding-pattern.array.tsx"}},"patterns":[{"include":"#binding-element"},{"include":"#punctuation-comma"}]},"array-binding-pattern-const":{"begin":"(?:(\\\\.\\\\.\\\\.)\\\\s*)?(\\\\[)","beginCaptures":{"1":{"name":"keyword.operator.rest.tsx"},"2":{"name":"punctuation.definition.binding-pattern.array.tsx"}},"end":"]","endCaptures":{"0":{"name":"punctuation.definition.binding-pattern.array.tsx"}},"patterns":[{"include":"#binding-element-const"},{"include":"#punctuation-comma"}]},"array-literal":{"begin":"\\\\s*(\\\\[)","beginCaptures":{"1":{"name":"meta.brace.square.tsx"}},"end":"]","endCaptures":{"0":{"name":"meta.brace.square.tsx"}},"name":"meta.array.literal.tsx","patterns":[{"include":"#expression"},{"include":"#punctuation-comma"}]},"arrow-function":{"patterns":[{"captures":{"1":{"name":"storage.modifier.async.tsx"},"2":{"name":"variable.parameter.tsx"}},"match":"(?:(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))\\\\b(async)\\\\s+)?([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(?==>)","name":"meta.arrow.tsx"},{"begin":"(?:(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))\\\\b(async))?((?<![]!)}])\\\\s*(?=((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|(<\\\\s*[$_[:alpha:]][$_[:alnum:]]*\\\\s+extends\\\\s*[^=>])|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\"'()\`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>)))","beginCaptures":{"1":{"name":"storage.modifier.async.tsx"}},"end":"(?==>|\\\\{|^(\\\\s*(export|function|class|interface|let|var|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|const|import|enum|namespace|module|type|abstract|declare)\\\\s+))","name":"meta.arrow.tsx","patterns":[{"include":"#comment"},{"include":"#type-parameters"},{"include":"#function-parameters"},{"include":"#arrow-return-type"},{"include":"#possibly-arrow-return-type"}]},{"begin":"=>","beginCaptures":{"0":{"name":"storage.type.function.arrow.tsx"}},"end":"((?<=[}\\\\S])(?<!=>)|((?!\\\\{)(?=\\\\S)))(?!/[*/])","name":"meta.arrow.tsx","patterns":[{"include":"#single-line-comment-consuming-line-ending"},{"include":"#decl-block"},{"include":"#expression"}]}]},"arrow-return-type":{"begin":"(?<=\\\\))\\\\s*(:)","beginCaptures":{"1":{"name":"keyword.operator.type.annotation.tsx"}},"end":"(?==>|\\\\{|^(\\\\s*(export|function|class|interface|let|var|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|const|import|enum|namespace|module|type|abstract|declare)\\\\s+))","name":"meta.return.type.arrow.tsx","patterns":[{"include":"#arrow-return-type-body"}]},"arrow-return-type-body":{"patterns":[{"begin":"(?<=:)(?=\\\\s*\\\\{)","end":"(?<=})","patterns":[{"include":"#type-object"}]},{"include":"#type-predicate-operator"},{"include":"#type"}]},"async-modifier":{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(async)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"storage.modifier.async.tsx"},"binding-element":{"patterns":[{"include":"#comment"},{"include":"#string"},{"include":"#numeric-literal"},{"include":"#regex"},{"include":"#object-binding-pattern"},{"include":"#array-binding-pattern"},{"include":"#destructuring-variable-rest"},{"include":"#variable-initializer"}]},"binding-element-const":{"patterns":[{"include":"#comment"},{"include":"#string"},{"include":"#numeric-literal"},{"include":"#regex"},{"include":"#object-binding-pattern-const"},{"include":"#array-binding-pattern-const"},{"include":"#destructuring-variable-rest-const"},{"include":"#variable-initializer"}]},"boolean-literal":{"patterns":[{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))true(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"constant.language.boolean.true.tsx"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))false(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"constant.language.boolean.false.tsx"}]},"brackets":{"patterns":[{"begin":"\\\\{","end":"}|(?=\\\\*/)","patterns":[{"include":"#brackets"}]},{"begin":"\\\\[","end":"]|(?=\\\\*/)","patterns":[{"include":"#brackets"}]}]},"cast":{"patterns":[{"include":"#jsx"}]},"class-declaration":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(?:(abstract)\\\\s+)?\\\\b(class)\\\\b(?=\\\\s+|/[*/])","beginCaptures":{"1":{"name":"keyword.control.export.tsx"},"2":{"name":"storage.modifier.tsx"},"3":{"name":"storage.modifier.tsx"},"4":{"name":"storage.type.class.tsx"}},"end":"(?<=})","name":"meta.class.tsx","patterns":[{"include":"#class-declaration-or-expression-patterns"}]},"class-declaration-or-expression-patterns":{"patterns":[{"include":"#comment"},{"include":"#class-or-interface-heritage"},{"captures":{"0":{"name":"entity.name.type.class.tsx"}},"match":"[$_[:alpha:]][$_[:alnum:]]*"},{"include":"#type-parameters"},{"include":"#class-or-interface-body"}]},"class-expression":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(abstract)\\\\s+)?(class)\\\\b(?=\\\\s+|[<{]|/[*/])","beginCaptures":{"1":{"name":"storage.modifier.tsx"},"2":{"name":"storage.type.class.tsx"}},"end":"(?<=})","name":"meta.class.tsx","patterns":[{"include":"#class-declaration-or-expression-patterns"}]},"class-or-interface-body":{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.definition.block.tsx"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.block.tsx"}},"patterns":[{"include":"#comment"},{"include":"#decorator"},{"begin":"(?<=:)\\\\s*","end":"(?=[-\\\\])+,:;}\\\\s]|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)","patterns":[{"include":"#expression"}]},{"include":"#method-declaration"},{"include":"#indexer-declaration"},{"include":"#field-declaration"},{"include":"#string"},{"include":"#type-annotation"},{"include":"#variable-initializer"},{"include":"#access-modifier"},{"include":"#property-accessor"},{"include":"#async-modifier"},{"include":"#after-operator-block-as-object-literal"},{"include":"#decl-block"},{"include":"#expression"},{"include":"#punctuation-comma"},{"include":"#punctuation-semicolon"}]},"class-or-interface-heritage":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))\\\\b(extends|implements)\\\\b(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","beginCaptures":{"1":{"name":"storage.modifier.tsx"}},"end":"(?=\\\\{)","patterns":[{"include":"#comment"},{"include":"#class-or-interface-heritage"},{"include":"#type-parameters"},{"include":"#expressionWithoutIdentifiers"},{"captures":{"1":{"name":"entity.name.type.module.tsx"},"2":{"name":"punctuation.accessor.tsx"},"3":{"name":"punctuation.accessor.optional.tsx"}},"match":"([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))(?=\\\\s*[$_[:alpha:]][$_[:alnum:]]*(\\\\s*\\\\??\\\\.\\\\s*[$_[:alpha:]][$_[:alnum:]]*)*\\\\s*)"},{"captures":{"1":{"name":"entity.other.inherited-class.tsx"}},"match":"([$_[:alpha:]][$_[:alnum:]]*)"},{"include":"#expressionPunctuations"}]},"comment":{"patterns":[{"begin":"/\\\\*\\\\*(?!/)","beginCaptures":{"0":{"name":"punctuation.definition.comment.tsx"}},"end":"\\\\*/","endCaptures":{"0":{"name":"punctuation.definition.comment.tsx"}},"name":"comment.block.documentation.tsx","patterns":[{"include":"#docblock"}]},{"begin":"(/\\\\*)(?:\\\\s*((@)internal)(?=\\\\s|(\\\\*/)))?","beginCaptures":{"1":{"name":"punctuation.definition.comment.tsx"},"2":{"name":"storage.type.internaldeclaration.tsx"},"3":{"name":"punctuation.decorator.internaldeclaration.tsx"}},"end":"\\\\*/","endCaptures":{"0":{"name":"punctuation.definition.comment.tsx"}},"name":"comment.block.tsx"},{"begin":"(^[\\\\t ]+)?((//)(?:\\\\s*((@)internal)(?=\\\\s|$))?)","beginCaptures":{"1":{"name":"punctuation.whitespace.comment.leading.tsx"},"2":{"name":"comment.line.double-slash.tsx"},"3":{"name":"punctuation.definition.comment.tsx"},"4":{"name":"storage.type.internaldeclaration.tsx"},"5":{"name":"punctuation.decorator.internaldeclaration.tsx"}},"contentName":"comment.line.double-slash.tsx","end":"(?=$)"}]},"control-statement":{"patterns":[{"include":"#switch-statement"},{"include":"#for-loop"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(catch|finally|throw|try)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.control.trycatch.tsx"},{"captures":{"1":{"name":"keyword.control.loop.tsx"},"2":{"name":"entity.name.label.tsx"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(break|continue|goto)\\\\s+([$_[:alpha:]][$_[:alnum:]]*)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(break|continue|do|goto|while)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.control.loop.tsx"},{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(return)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","beginCaptures":{"0":{"name":"keyword.control.flow.tsx"}},"end":"(?=[;}]|$|;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)","patterns":[{"include":"#expression"}]},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(case|default|switch)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.control.switch.tsx"},{"include":"#if-statement"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(else|if)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.control.conditional.tsx"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(with)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.control.with.tsx"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(package)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.control.tsx"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(debugger)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.other.debugger.tsx"}]},"decl-block":{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.definition.block.tsx"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.block.tsx"}},"name":"meta.block.tsx","patterns":[{"include":"#statements"}]},"declaration":{"patterns":[{"include":"#decorator"},{"include":"#var-expr"},{"include":"#function-declaration"},{"include":"#class-declaration"},{"include":"#interface-declaration"},{"include":"#enum-declaration"},{"include":"#namespace-declaration"},{"include":"#type-alias-declaration"},{"include":"#import-equals-declaration"},{"include":"#import-declaration"},{"include":"#export-declaration"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(declare|export)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"storage.modifier.tsx"}]},"decorator":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))@","beginCaptures":{"0":{"name":"punctuation.decorator.tsx"}},"end":"(?=\\\\s)","name":"meta.decorator.tsx","patterns":[{"include":"#expression"}]},"destructuring-const":{"patterns":[{"begin":"(?<![:=]|^of|[^$._[:alnum:]]of|^in|[^$._[:alnum:]]in)\\\\s*(?=\\\\{)","end":"(?=$|^|[,;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+))","name":"meta.object-binding-pattern-variable.tsx","patterns":[{"include":"#object-binding-pattern-const"},{"include":"#type-annotation"},{"include":"#comment"}]},{"begin":"(?<![:=]|^of|[^$._[:alnum:]]of|^in|[^$._[:alnum:]]in)\\\\s*(?=\\\\[)","end":"(?=$|^|[,;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+))","name":"meta.array-binding-pattern-variable.tsx","patterns":[{"include":"#array-binding-pattern-const"},{"include":"#type-annotation"},{"include":"#comment"}]}]},"destructuring-parameter":{"patterns":[{"begin":"(?<![:=])\\\\s*(?:(\\\\.\\\\.\\\\.)\\\\s*)?(\\\\{)","beginCaptures":{"1":{"name":"keyword.operator.rest.tsx"},"2":{"name":"punctuation.definition.binding-pattern.object.tsx"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.binding-pattern.object.tsx"}},"name":"meta.parameter.object-binding-pattern.tsx","patterns":[{"include":"#parameter-object-binding-element"}]},{"begin":"(?<![:=])\\\\s*(?:(\\\\.\\\\.\\\\.)\\\\s*)?(\\\\[)","beginCaptures":{"1":{"name":"keyword.operator.rest.tsx"},"2":{"name":"punctuation.definition.binding-pattern.array.tsx"}},"end":"]","endCaptures":{"0":{"name":"punctuation.definition.binding-pattern.array.tsx"}},"name":"meta.paramter.array-binding-pattern.tsx","patterns":[{"include":"#parameter-binding-element"},{"include":"#punctuation-comma"}]}]},"destructuring-parameter-rest":{"captures":{"1":{"name":"keyword.operator.rest.tsx"},"2":{"name":"variable.parameter.tsx"}},"match":"(?:(\\\\.\\\\.\\\\.)\\\\s*)?([$_[:alpha:]][$_[:alnum:]]*)"},"destructuring-variable":{"patterns":[{"begin":"(?<![:=]|^of|[^$._[:alnum:]]of|^in|[^$._[:alnum:]]in)\\\\s*(?=\\\\{)","end":"(?=$|^|[,;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+))","name":"meta.object-binding-pattern-variable.tsx","patterns":[{"include":"#object-binding-pattern"},{"include":"#type-annotation"},{"include":"#comment"}]},{"begin":"(?<![:=]|^of|[^$._[:alnum:]]of|^in|[^$._[:alnum:]]in)\\\\s*(?=\\\\[)","end":"(?=$|^|[,;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+))","name":"meta.array-binding-pattern-variable.tsx","patterns":[{"include":"#array-binding-pattern"},{"include":"#type-annotation"},{"include":"#comment"}]}]},"destructuring-variable-rest":{"captures":{"1":{"name":"keyword.operator.rest.tsx"},"2":{"name":"meta.definition.variable.tsx variable.other.readwrite.tsx"}},"match":"(?:(\\\\.\\\\.\\\\.)\\\\s*)?([$_[:alpha:]][$_[:alnum:]]*)"},"destructuring-variable-rest-const":{"captures":{"1":{"name":"keyword.operator.rest.tsx"},"2":{"name":"meta.definition.variable.tsx variable.other.constant.tsx"}},"match":"(?:(\\\\.\\\\.\\\\.)\\\\s*)?([$_[:alpha:]][$_[:alnum:]]*)"},"directives":{"begin":"^(///)\\\\s*(?=<(reference|amd-dependency|amd-module)(\\\\s+(path|types|no-default-lib|lib|name|resolution-mode)\\\\s*=\\\\s*(('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`)))+\\\\s*/>\\\\s*$)","beginCaptures":{"1":{"name":"punctuation.definition.comment.tsx"}},"end":"(?=$)","name":"comment.line.triple-slash.directive.tsx","patterns":[{"begin":"(<)(reference|amd-dependency|amd-module)","beginCaptures":{"1":{"name":"punctuation.definition.tag.directive.tsx"},"2":{"name":"entity.name.tag.directive.tsx"}},"end":"/>","endCaptures":{"0":{"name":"punctuation.definition.tag.directive.tsx"}},"name":"meta.tag.tsx","patterns":[{"match":"path|types|no-default-lib|lib|name|resolution-mode","name":"entity.other.attribute-name.directive.tsx"},{"match":"=","name":"keyword.operator.assignment.tsx"},{"include":"#string"}]}]},"docblock":{"patterns":[{"captures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"},"3":{"name":"constant.language.access-type.jsdoc"}},"match":"((@)a(?:ccess|pi))\\\\s+(p(?:rivate|rotected|ublic))\\\\b"},{"captures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"},"3":{"name":"entity.name.type.instance.jsdoc"},"4":{"name":"punctuation.definition.bracket.angle.begin.jsdoc"},"5":{"name":"constant.other.email.link.underline.jsdoc"},"6":{"name":"punctuation.definition.bracket.angle.end.jsdoc"}},"match":"((@)author)\\\\s+([^*/<>@\\\\s](?:[^*/<>@]|\\\\*[^/])*)(?:\\\\s*(<)([^>\\\\s]+)(>))?"},{"captures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"},"3":{"name":"entity.name.type.instance.jsdoc"},"4":{"name":"keyword.operator.control.jsdoc"},"5":{"name":"entity.name.type.instance.jsdoc"}},"match":"((@)borrows)\\\\s+((?:[^*/@\\\\s]|\\\\*[^/])+)\\\\s+(as)\\\\s+((?:[^*/@\\\\s]|\\\\*[^/])+)"},{"begin":"((@)example)\\\\s+","beginCaptures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"}},"end":"(?=@|\\\\*/)","name":"meta.example.jsdoc","patterns":[{"match":"^\\\\s\\\\*\\\\s+"},{"begin":"\\\\G(<)caption(>)","beginCaptures":{"0":{"name":"entity.name.tag.inline.jsdoc"},"1":{"name":"punctuation.definition.bracket.angle.begin.jsdoc"},"2":{"name":"punctuation.definition.bracket.angle.end.jsdoc"}},"contentName":"constant.other.description.jsdoc","end":"(</)caption(>)|(?=\\\\*/)","endCaptures":{"0":{"name":"entity.name.tag.inline.jsdoc"},"1":{"name":"punctuation.definition.bracket.angle.begin.jsdoc"},"2":{"name":"punctuation.definition.bracket.angle.end.jsdoc"}}},{"captures":{"0":{"name":"source.embedded.tsx"}},"match":"[^*@\\\\s](?:[^*]|\\\\*[^/])*"}]},{"captures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"},"3":{"name":"constant.language.symbol-type.jsdoc"}},"match":"((@)kind)\\\\s+(class|constant|event|external|file|function|member|mixin|module|namespace|typedef)\\\\b"},{"captures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"},"3":{"name":"variable.other.link.underline.jsdoc"},"4":{"name":"entity.name.type.instance.jsdoc"}},"match":"((@)see)\\\\s+(?:((?=https?://)(?:[^*\\\\s]|\\\\*[^/])+)|((?!https?://|(?:\\\\[[^]\\\\[]*])?\\\\{@(?:link|linkcode|linkplain|tutorial)\\\\b)(?:[^*/@\\\\s]|\\\\*[^/])+))"},{"captures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"},"3":{"name":"variable.other.jsdoc"}},"match":"((@)template)\\\\s+([$A-Z_a-z][]$.\\\\[\\\\w]*(?:\\\\s*,\\\\s*[$A-Z_a-z][]$.\\\\[\\\\w]*)*)"},{"begin":"((@)template)\\\\s+(?=\\\\{)","beginCaptures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"}},"end":"(?=\\\\s|\\\\*/|[^]$A-\\\\[_a-{}])","patterns":[{"include":"#jsdoctype"},{"match":"([$A-Z_a-z][]$.\\\\[\\\\w]*)","name":"variable.other.jsdoc"}]},{"captures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"},"3":{"name":"variable.other.jsdoc"}},"match":"((@)(?:arg|argument|const|constant|member|namespace|param|var))\\\\s+([$A-Z_a-z][]$.\\\\[\\\\w]*)"},{"begin":"((@)typedef)\\\\s+(?=\\\\{)","beginCaptures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"}},"end":"(?=\\\\s|\\\\*/|[^]$A-\\\\[_a-{}])","patterns":[{"include":"#jsdoctype"},{"match":"(?:[^*/@\\\\s]|\\\\*[^/])+","name":"entity.name.type.instance.jsdoc"}]},{"begin":"((@)(?:arg|argument|const|constant|member|namespace|param|prop|property|var))\\\\s+(?=\\\\{)","beginCaptures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"}},"end":"(?=\\\\s|\\\\*/|[^]$A-\\\\[_a-{}])","patterns":[{"include":"#jsdoctype"},{"match":"([$A-Z_a-z][]$.\\\\[\\\\w]*)","name":"variable.other.jsdoc"},{"captures":{"1":{"name":"punctuation.definition.optional-value.begin.bracket.square.jsdoc"},"2":{"name":"keyword.operator.assignment.jsdoc"},"3":{"name":"source.embedded.tsx"},"4":{"name":"punctuation.definition.optional-value.end.bracket.square.jsdoc"},"5":{"name":"invalid.illegal.syntax.jsdoc"}},"match":"(\\\\[)\\\\s*[$\\\\w]+(?:(?:\\\\[])?\\\\.[$\\\\w]+)*(?:\\\\s*(=)\\\\s*((?>\\"(?:\\\\*(?!/)|\\\\\\\\(?!\\")|[^*\\\\\\\\])*?\\"|'(?:\\\\*(?!/)|\\\\\\\\(?!')|[^*\\\\\\\\])*?'|\\\\[(?:\\\\*(?!/)|[^*])*?]|(?:\\\\*(?!/)|\\\\s(?!\\\\s*])|\\\\[.*?(?:]|(?=\\\\*/))|[^]*\\\\[\\\\s])*)*))?\\\\s*(?:(])((?:[^*\\\\s]|\\\\*[^/\\\\s])+)?|(?=\\\\*/))","name":"variable.other.jsdoc"}]},{"begin":"((@)(?:define|enum|exception|export|extends|lends|implements|modifies|namespace|private|protected|returns?|satisfies|suppress|this|throws|type|yields?))\\\\s+(?=\\\\{)","beginCaptures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"}},"end":"(?=\\\\s|\\\\*/|[^]$A-\\\\[_a-{}])","patterns":[{"include":"#jsdoctype"}]},{"captures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"},"3":{"name":"entity.name.type.instance.jsdoc"}},"match":"((@)(?:alias|augments|callback|constructs|emits|event|fires|exports?|extends|external|function|func|host|lends|listens|interface|memberof!?|method|module|mixes|mixin|name|requires|see|this|typedef|uses))\\\\s+((?:[^*@{}\\\\s]|\\\\*[^/])+)"},{"begin":"((@)(?:default(?:value)?|license|version))\\\\s+(([\\"']))","beginCaptures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"},"3":{"name":"variable.other.jsdoc"},"4":{"name":"punctuation.definition.string.begin.jsdoc"}},"contentName":"variable.other.jsdoc","end":"(\\\\3)|(?=$|\\\\*/)","endCaptures":{"0":{"name":"variable.other.jsdoc"},"1":{"name":"punctuation.definition.string.end.jsdoc"}}},{"captures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"},"3":{"name":"variable.other.jsdoc"}},"match":"((@)(?:default(?:value)?|license|tutorial|variation|version))\\\\s+([^*\\\\s]+)"},{"captures":{"1":{"name":"punctuation.definition.block.tag.jsdoc"}},"match":"(@)(?:abstract|access|alias|api|arg|argument|async|attribute|augments|author|beta|borrows|bubbles|callback|chainable|class|classdesc|code|config|const|constant|constructor|constructs|copyright|default|defaultvalue|define|deprecated|desc|description|dict|emits|enum|event|example|exception|exports?|extends|extension(?:_?for)?|external|externs|file|fileoverview|final|fires|for|func|function|generator|global|hideconstructor|host|ignore|implements|implicitCast|inherit[Dd]oc|inner|instance|interface|internal|kind|lends|license|listens|main|member|memberof!?|method|mixes|mixins?|modifies|module|name|namespace|noalias|nocollapse|nocompile|nosideeffects|override|overview|package|param|polymer(?:Behavior)?|preserve|private|prop|property|protected|public|read[Oo]nly|record|require[ds]|returns?|see|since|static|struct|submodule|summary|suppress|template|this|throws|todo|tutorial|type|typedef|unrestricted|uses|var|variation|version|virtual|writeOnce|yields?)\\\\b","name":"storage.type.class.jsdoc"},{"include":"#inline-tags"},{"captures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"}},"match":"((@)[$_[:alpha:]][$_[:alnum:]]*)(?=\\\\s+)"}]},"enum-declaration":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?(?:\\\\b(const)\\\\s+)?\\\\b(enum)\\\\s+([$_[:alpha:]][$_[:alnum:]]*)","beginCaptures":{"1":{"name":"keyword.control.export.tsx"},"2":{"name":"storage.modifier.tsx"},"3":{"name":"storage.modifier.tsx"},"4":{"name":"storage.type.enum.tsx"},"5":{"name":"entity.name.type.enum.tsx"}},"end":"(?<=})","name":"meta.enum.declaration.tsx","patterns":[{"include":"#comment"},{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.definition.block.tsx"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.block.tsx"}},"patterns":[{"include":"#comment"},{"begin":"([$_[:alpha:]][$_[:alnum:]]*)","beginCaptures":{"0":{"name":"variable.other.enummember.tsx"}},"end":"(?=[,}]|$)","patterns":[{"include":"#comment"},{"include":"#variable-initializer"}]},{"begin":"(?=(('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`)|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])+])))","end":"(?=[,}]|$)","patterns":[{"include":"#string"},{"include":"#array-literal"},{"include":"#comment"},{"include":"#variable-initializer"}]},{"include":"#punctuation-comma"}]}]},"export-declaration":{"patterns":[{"captures":{"1":{"name":"keyword.control.export.tsx"},"2":{"name":"keyword.control.as.tsx"},"3":{"name":"storage.type.namespace.tsx"},"4":{"name":"entity.name.type.module.tsx"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(export)\\\\s+(as)\\\\s+(namespace)\\\\s+([$_[:alpha:]][$_[:alnum:]]*)"},{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(export)(?:\\\\s+(type))?(?:\\\\s*(=)|\\\\s+(default)(?=\\\\s+))","beginCaptures":{"1":{"name":"keyword.control.export.tsx"},"2":{"name":"keyword.control.type.tsx"},"3":{"name":"keyword.operator.assignment.tsx"},"4":{"name":"keyword.control.default.tsx"}},"end":"(?=$|;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)","name":"meta.export.default.tsx","patterns":[{"include":"#interface-declaration"},{"include":"#expression"}]},{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(export)(?:\\\\s+(type))?\\\\b(?!(\\\\$)|(\\\\s*:))((?=\\\\s*[*{])|((?=\\\\s*[$_[:alpha:]][$_[:alnum:]]*([,\\\\s]))(?!\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)))","beginCaptures":{"1":{"name":"keyword.control.export.tsx"},"2":{"name":"keyword.control.type.tsx"}},"end":"(?=$|;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)","name":"meta.export.tsx","patterns":[{"include":"#import-export-declaration"}]}]},"expression":{"patterns":[{"include":"#expressionWithoutIdentifiers"},{"include":"#identifiers"},{"include":"#expressionPunctuations"}]},"expression-inside-possibly-arrow-parens":{"patterns":[{"include":"#expressionWithoutIdentifiers"},{"include":"#comment"},{"include":"#string"},{"include":"#decorator"},{"include":"#destructuring-parameter"},{"captures":{"1":{"name":"storage.modifier.tsx"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(override|public|protected|private|readonly)\\\\s+(?=(override|public|protected|private|readonly)\\\\s+)"},{"captures":{"1":{"name":"storage.modifier.tsx"},"2":{"name":"keyword.operator.rest.tsx"},"3":{"name":"entity.name.function.tsx variable.language.this.tsx"},"4":{"name":"entity.name.function.tsx"},"5":{"name":"keyword.operator.optional.tsx"}},"match":"(?:(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(override|public|private|protected|readonly)\\\\s+)?(?:(\\\\.\\\\.\\\\.)\\\\s*)?(?<![:=])(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(this)|([$_[:alpha:]][$_[:alnum:]]*))(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\\\\s*(\\\\??)(?=\\\\s*(=\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|(\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|(<\\\\s*[$_[:alpha:]][$_[:alnum:]]*\\\\s+extends\\\\s*[^=>])|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\"'()\`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>)))))|(:\\\\s*((<)|(\\\\(\\\\s*((\\\\))|(\\\\.\\\\.\\\\.)|([$_[:alnum:]]+\\\\s*(([,:=?])|(\\\\)\\\\s*=>)))))))|(:\\\\s*(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))Function(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))|(:\\\\s*((<\\\\s*)$|(\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))))))|(:\\\\s*(=>|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(<[^<>]*>)|[^(),<=>])+=\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|(\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|(<\\\\s*[$_[:alpha:]][$_[:alnum:]]*\\\\s+extends\\\\s*[^=>])|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\"'()\`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>))))))"},{"captures":{"1":{"name":"storage.modifier.tsx"},"2":{"name":"keyword.operator.rest.tsx"},"3":{"name":"variable.parameter.tsx variable.language.this.tsx"},"4":{"name":"variable.parameter.tsx"},"5":{"name":"keyword.operator.optional.tsx"}},"match":"(?:(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(override|public|private|protected|readonly)\\\\s+)?(?:(\\\\.\\\\.\\\\.)\\\\s*)?(?<![:=])(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(this)|([$_[:alpha:]][$_[:alnum:]]*))(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\\\\s*(\\\\??)(?=\\\\s*[,:]|$)"},{"include":"#type-annotation"},{"include":"#variable-initializer"},{"match":",","name":"punctuation.separator.parameter.tsx"},{"include":"#identifiers"},{"include":"#expressionPunctuations"}]},"expression-operators":{"patterns":[{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(await)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.control.flow.tsx"},{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(yield)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))(?=\\\\s*/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*\\\\*)","beginCaptures":{"1":{"name":"keyword.control.flow.tsx"}},"end":"\\\\*","endCaptures":{"0":{"name":"keyword.generator.asterisk.tsx"}},"patterns":[{"include":"#comment"}]},{"captures":{"1":{"name":"keyword.control.flow.tsx"},"2":{"name":"keyword.generator.asterisk.tsx"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(yield)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))(?:\\\\s*(\\\\*))?"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))delete(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.operator.expression.delete.tsx"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))in(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))(?!\\\\()","name":"keyword.operator.expression.in.tsx"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))of(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))(?!\\\\()","name":"keyword.operator.expression.of.tsx"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))instanceof(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.operator.expression.instanceof.tsx"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))new(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.operator.new.tsx"},{"include":"#typeof-operator"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))void(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.operator.expression.void.tsx"},{"captures":{"1":{"name":"keyword.control.as.tsx"},"2":{"name":"storage.modifier.tsx"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(as)\\\\s+(const)(?=\\\\s*($|[]),:;}]))"},{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(as)|(satisfies))\\\\s+","beginCaptures":{"1":{"name":"keyword.control.as.tsx"},"2":{"name":"keyword.control.satisfies.tsx"}},"end":"(?=^|[-\\\\])+,:;>?}]|\\\\|\\\\||&&|!==|$|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(as|satisfies)\\\\s+)|(\\\\s+<))","patterns":[{"include":"#type"}]},{"match":"\\\\.\\\\.\\\\.","name":"keyword.operator.spread.tsx"},{"match":"(?:\\\\*|(?<!\\\\()/|[-%+])=","name":"keyword.operator.assignment.compound.tsx"},{"match":"(?:[\\\\&^]|<<|>>>??|\\\\|)=","name":"keyword.operator.assignment.compound.bitwise.tsx"},{"match":"<<|>>>?","name":"keyword.operator.bitwise.shift.tsx"},{"match":"[!=]==?","name":"keyword.operator.comparison.tsx"},{"match":"<=|>=|<>|[<>]","name":"keyword.operator.relational.tsx"},{"captures":{"1":{"name":"keyword.operator.logical.tsx"},"2":{"name":"keyword.operator.assignment.compound.tsx"},"3":{"name":"keyword.operator.arithmetic.tsx"}},"match":"(?<=[$_[:alnum:]])(!)\\\\s*(?:(/=)|(/)(?![*/]))"},{"match":"!|&&|\\\\|\\\\||\\\\?\\\\?","name":"keyword.operator.logical.tsx"},{"match":"[\\\\&^|~]","name":"keyword.operator.bitwise.tsx"},{"match":"=","name":"keyword.operator.assignment.tsx"},{"match":"--","name":"keyword.operator.decrement.tsx"},{"match":"\\\\+\\\\+","name":"keyword.operator.increment.tsx"},{"match":"[-%*+/]","name":"keyword.operator.arithmetic.tsx"},{"begin":"(?<=[]$)_[:alnum:]])\\\\s*(?=(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)+(?:(/=)|(/)(?![*/])))","end":"(/=)|(/)(?!\\\\*([^*]|(\\\\*[^/]))*\\\\*/)","endCaptures":{"1":{"name":"keyword.operator.assignment.compound.tsx"},"2":{"name":"keyword.operator.arithmetic.tsx"}},"patterns":[{"include":"#comment"}]},{"captures":{"1":{"name":"keyword.operator.assignment.compound.tsx"},"2":{"name":"keyword.operator.arithmetic.tsx"}},"match":"(?<=[]$)_[:alnum:]])\\\\s*(?:(/=)|(/)(?![*/]))"}]},"expressionPunctuations":{"patterns":[{"include":"#punctuation-comma"},{"include":"#punctuation-accessor"}]},"expressionWithoutIdentifiers":{"patterns":[{"include":"#jsx"},{"include":"#string"},{"include":"#regex"},{"include":"#comment"},{"include":"#function-expression"},{"include":"#class-expression"},{"include":"#arrow-function"},{"include":"#paren-expression-possibly-arrow"},{"include":"#cast"},{"include":"#ternary-expression"},{"include":"#new-expr"},{"include":"#instanceof-expr"},{"include":"#object-literal"},{"include":"#expression-operators"},{"include":"#function-call"},{"include":"#literal"},{"include":"#support-objects"},{"include":"#paren-expression"}]},"field-declaration":{"begin":"(?<!\\\\()(?:(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(readonly)\\\\s+)?(?=\\\\s*(\\\\b((?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$))|((?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$))|(#?[$_[:alpha:]][$_[:alnum:]]*)|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`)|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])+]))\\\\s*(?:(?:(\\\\?)|(!))\\\\s*)?([,:;=}]|$))","beginCaptures":{"1":{"name":"storage.modifier.tsx"}},"end":"(?=[,;}]|$|^((?!\\\\s*(\\\\b((?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$))|((?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$))|(#?[$_[:alpha:]][$_[:alnum:]]*)|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`)|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])+]))\\\\s*(?:(?:(\\\\?)|(!))\\\\s*)?([,:;=]|$))))|(?<=})","name":"meta.field.declaration.tsx","patterns":[{"include":"#variable-initializer"},{"include":"#type-annotation"},{"include":"#string"},{"include":"#array-literal"},{"include":"#numeric-literal"},{"include":"#comment"},{"captures":{"1":{"name":"meta.definition.property.tsx entity.name.function.tsx"},"2":{"name":"keyword.operator.optional.tsx"},"3":{"name":"keyword.operator.definiteassignment.tsx"}},"match":"(#?[$_[:alpha:]][$_[:alnum:]]*)(?:(\\\\?)|(!))?(?=\\\\s*\\\\s*(=\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|(\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|(<\\\\s*[$_[:alpha:]][$_[:alnum:]]*\\\\s+extends\\\\s*[^=>])|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\"'()\`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>)))))|(:\\\\s*((<)|(\\\\(\\\\s*((\\\\))|(\\\\.\\\\.\\\\.)|([$_[:alnum:]]+\\\\s*(([,:=?])|(\\\\)\\\\s*=>)))))))|(:\\\\s*(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))Function(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))|(:\\\\s*((<\\\\s*)$|(\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))))))|(:\\\\s*(=>|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(<[^<>]*>)|[^(),<=>])+=\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|(\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|(<\\\\s*[$_[:alpha:]][$_[:alnum:]]*\\\\s+extends\\\\s*[^=>])|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\"'()\`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>))))))"},{"match":"#?[$_[:alpha:]][$_[:alnum:]]*","name":"meta.definition.property.tsx variable.object.property.tsx"},{"match":"\\\\?","name":"keyword.operator.optional.tsx"},{"match":"!","name":"keyword.operator.definiteassignment.tsx"}]},"for-loop":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))for(?=((\\\\s+|(\\\\s*/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*))await)?\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)?(\\\\())","beginCaptures":{"0":{"name":"keyword.control.loop.tsx"}},"end":"(?<=\\\\))","patterns":[{"include":"#comment"},{"match":"await","name":"keyword.control.loop.tsx"},{"begin":"\\\\(","beginCaptures":{"0":{"name":"meta.brace.round.tsx"}},"end":"\\\\)","endCaptures":{"0":{"name":"meta.brace.round.tsx"}},"patterns":[{"include":"#var-expr"},{"include":"#expression"},{"include":"#punctuation-semicolon"}]}]},"function-body":{"patterns":[{"include":"#comment"},{"include":"#type-parameters"},{"include":"#function-parameters"},{"include":"#return-type"},{"include":"#type-function-return-type"},{"include":"#decl-block"},{"match":"\\\\*","name":"keyword.generator.asterisk.tsx"}]},"function-call":{"patterns":[{"begin":"(?=(((([$_[:alpha:]][$_[:alnum:]]*)(\\\\s*\\\\??\\\\.\\\\s*(#?[$_[:alpha:]][$_[:alnum:]]*))*)|(\\\\??\\\\.\\\\s*#?[$_[:alpha:]][$_[:alnum:]]*))|(?<=\\\\)))\\\\s*(?:(\\\\?\\\\.\\\\s*)|(!))?((<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))(([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>)*(?<!=)>))*(?<!=)>)*(?<!=)>\\\\s*)?\\\\())","end":"(?<=\\\\))(?!(((([$_[:alpha:]][$_[:alnum:]]*)(\\\\s*\\\\??\\\\.\\\\s*(#?[$_[:alpha:]][$_[:alnum:]]*))*)|(\\\\??\\\\.\\\\s*#?[$_[:alpha:]][$_[:alnum:]]*))|(?<=\\\\)))\\\\s*(?:(\\\\?\\\\.\\\\s*)|(!))?((<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))(([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>)*(?<!=)>))*(?<!=)>)*(?<!=)>\\\\s*)?\\\\())","patterns":[{"begin":"(?=(([$_[:alpha:]][$_[:alnum:]]*)(\\\\s*\\\\??\\\\.\\\\s*(#?[$_[:alpha:]][$_[:alnum:]]*))*)|(\\\\??\\\\.\\\\s*#?[$_[:alpha:]][$_[:alnum:]]*))","end":"(?=\\\\s*(?:(\\\\?\\\\.\\\\s*)|(!))?((<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))(([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>)*(?<!=)>))*(?<!=)>)*(?<!=)>\\\\s*)?\\\\())","name":"meta.function-call.tsx","patterns":[{"include":"#function-call-target"}]},{"include":"#comment"},{"include":"#function-call-optionals"},{"include":"#type-arguments"},{"include":"#paren-expression"}]},{"begin":"(?=(((([$_[:alpha:]][$_[:alnum:]]*)(\\\\s*\\\\??\\\\.\\\\s*(#?[$_[:alpha:]][$_[:alnum:]]*))*)|(\\\\??\\\\.\\\\s*#?[$_[:alpha:]][$_[:alnum:]]*))|(?<=\\\\)))(<\\\\s*[(\\\\[{]\\\\s*)$)","end":"(?<=>)(?!(((([$_[:alpha:]][$_[:alnum:]]*)(\\\\s*\\\\??\\\\.\\\\s*(#?[$_[:alpha:]][$_[:alnum:]]*))*)|(\\\\??\\\\.\\\\s*#?[$_[:alpha:]][$_[:alnum:]]*))|(?<=\\\\)))(<\\\\s*[(\\\\[{]\\\\s*)$)","patterns":[{"begin":"(?=(([$_[:alpha:]][$_[:alnum:]]*)(\\\\s*\\\\??\\\\.\\\\s*(#?[$_[:alpha:]][$_[:alnum:]]*))*)|(\\\\??\\\\.\\\\s*#?[$_[:alpha:]][$_[:alnum:]]*))","end":"(?=(<\\\\s*[(\\\\[{]\\\\s*)$)","name":"meta.function-call.tsx","patterns":[{"include":"#function-call-target"}]},{"include":"#comment"},{"include":"#function-call-optionals"},{"include":"#type-arguments"}]}]},"function-call-optionals":{"patterns":[{"match":"\\\\?\\\\.","name":"meta.function-call.tsx punctuation.accessor.optional.tsx"},{"match":"!","name":"meta.function-call.tsx keyword.operator.definiteassignment.tsx"}]},"function-call-target":{"patterns":[{"include":"#support-function-call-identifiers"},{"match":"(#?[$_[:alpha:]][$_[:alnum:]]*)","name":"entity.name.function.tsx"}]},"function-declaration":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?(?:(async)\\\\s+)?(function)\\\\b(?:\\\\s*(\\\\*))?(?:(?:\\\\s+|(?<=\\\\*))([$_[:alpha:]][$_[:alnum:]]*))?\\\\s*","beginCaptures":{"1":{"name":"keyword.control.export.tsx"},"2":{"name":"storage.modifier.tsx"},"3":{"name":"storage.modifier.async.tsx"},"4":{"name":"storage.type.function.tsx"},"5":{"name":"keyword.generator.asterisk.tsx"},"6":{"name":"meta.definition.function.tsx entity.name.function.tsx"}},"end":"(?=;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)|(?<=})","name":"meta.function.tsx","patterns":[{"include":"#function-name"},{"include":"#function-body"}]},"function-expression":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(async)\\\\s+)?(function)\\\\b(?:\\\\s*(\\\\*))?(?:(?:\\\\s+|(?<=\\\\*))([$_[:alpha:]][$_[:alnum:]]*))?\\\\s*","beginCaptures":{"1":{"name":"storage.modifier.async.tsx"},"2":{"name":"storage.type.function.tsx"},"3":{"name":"keyword.generator.asterisk.tsx"},"4":{"name":"meta.definition.function.tsx entity.name.function.tsx"}},"end":"(?=;)|(?<=})","name":"meta.function.expression.tsx","patterns":[{"include":"#function-name"},{"include":"#single-line-comment-consuming-line-ending"},{"include":"#function-body"}]},"function-name":{"match":"[$_[:alpha:]][$_[:alnum:]]*","name":"meta.definition.function.tsx entity.name.function.tsx"},"function-parameters":{"begin":"\\\\(","beginCaptures":{"0":{"name":"punctuation.definition.parameters.begin.tsx"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.definition.parameters.end.tsx"}},"name":"meta.parameters.tsx","patterns":[{"include":"#function-parameters-body"}]},"function-parameters-body":{"patterns":[{"include":"#comment"},{"include":"#string"},{"include":"#decorator"},{"include":"#destructuring-parameter"},{"include":"#parameter-name"},{"include":"#parameter-type-annotation"},{"include":"#variable-initializer"},{"match":",","name":"punctuation.separator.parameter.tsx"}]},"identifiers":{"patterns":[{"include":"#object-identifiers"},{"captures":{"1":{"name":"punctuation.accessor.tsx"},"2":{"name":"punctuation.accessor.optional.tsx"},"3":{"name":"entity.name.function.tsx"}},"match":"(?:(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))\\\\s*)?([$_[:alpha:]][$_[:alnum:]]*)(?=\\\\s*=\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|(\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|(<\\\\s*[$_[:alpha:]][$_[:alnum:]]*\\\\s+extends\\\\s*[^=>])|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\"'()\`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>)))))"},{"captures":{"1":{"name":"punctuation.accessor.tsx"},"2":{"name":"punctuation.accessor.optional.tsx"},"3":{"name":"variable.other.constant.property.tsx"}},"match":"(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))\\\\s*(#?\\\\p{upper}[$_\\\\d[:upper:]]*)(?![$_[:alnum:]])"},{"captures":{"1":{"name":"punctuation.accessor.tsx"},"2":{"name":"punctuation.accessor.optional.tsx"},"3":{"name":"variable.other.property.tsx"}},"match":"(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))\\\\s*(#?[$_[:alpha:]][$_[:alnum:]]*)"},{"match":"(\\\\p{upper}[$_\\\\d[:upper:]]*)(?![$_[:alnum:]])","name":"variable.other.constant.tsx"},{"match":"[$_[:alpha:]][$_[:alnum:]]*","name":"variable.other.readwrite.tsx"}]},"if-statement":{"patterns":[{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?=\\\\bif\\\\s*(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))\\\\s*(?!\\\\{))","end":"(?=;|$|})","patterns":[{"include":"#comment"},{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(if)\\\\s*(\\\\()","beginCaptures":{"1":{"name":"keyword.control.conditional.tsx"},"2":{"name":"meta.brace.round.tsx"}},"end":"\\\\)","endCaptures":{"0":{"name":"meta.brace.round.tsx"}},"patterns":[{"include":"#expression"}]},{"begin":"(?<=\\\\))\\\\s*/(?![*/])(?=(?:[^/\\\\[\\\\\\\\]|\\\\\\\\.|\\\\[([^]\\\\\\\\]|\\\\\\\\.)*])+/([dgimsuvy]+|(?![*/])|(?=/\\\\*))(?!\\\\s*[$0-9A-Z_a-z]))","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.tsx"}},"end":"(/)([dgimsuvy]*)","endCaptures":{"1":{"name":"punctuation.definition.string.end.tsx"},"2":{"name":"keyword.other.tsx"}},"name":"string.regexp.tsx","patterns":[{"include":"#regexp"}]},{"include":"#statements"}]}]},"import-declaration":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(import)(?:\\\\s+(type)(?!\\\\s+from))?(?!\\\\s*[(:])(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","beginCaptures":{"1":{"name":"keyword.control.export.tsx"},"2":{"name":"storage.modifier.tsx"},"3":{"name":"keyword.control.import.tsx"},"4":{"name":"keyword.control.type.tsx"}},"end":"(?<!(?:^|[^$._[:alnum:]])import)(?=;|$|^)","name":"meta.import.tsx","patterns":[{"include":"#single-line-comment-consuming-line-ending"},{"include":"#comment"},{"include":"#string"},{"begin":"(?<=(?:^|[^$._[:alnum:]])import)(?!\\\\s*[\\"'])","end":"\\\\bfrom\\\\b","endCaptures":{"0":{"name":"keyword.control.from.tsx"}},"patterns":[{"include":"#import-export-declaration"}]},{"include":"#import-export-declaration"}]},"import-equals-declaration":{"patterns":[{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(import)(?:\\\\s+(type))?\\\\s+([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(=)\\\\s*(require)\\\\s*(\\\\()","beginCaptures":{"1":{"name":"keyword.control.export.tsx"},"2":{"name":"storage.modifier.tsx"},"3":{"name":"keyword.control.import.tsx"},"4":{"name":"keyword.control.type.tsx"},"5":{"name":"variable.other.readwrite.alias.tsx"},"6":{"name":"keyword.operator.assignment.tsx"},"7":{"name":"keyword.control.require.tsx"},"8":{"name":"meta.brace.round.tsx"}},"end":"\\\\)","endCaptures":{"0":{"name":"meta.brace.round.tsx"}},"name":"meta.import-equals.external.tsx","patterns":[{"include":"#comment"},{"include":"#string"}]},{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(import)(?:\\\\s+(type))?\\\\s+([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(=)\\\\s*(?!require\\\\b)","beginCaptures":{"1":{"name":"keyword.control.export.tsx"},"2":{"name":"storage.modifier.tsx"},"3":{"name":"keyword.control.import.tsx"},"4":{"name":"keyword.control.type.tsx"},"5":{"name":"variable.other.readwrite.alias.tsx"},"6":{"name":"keyword.operator.assignment.tsx"}},"end":"(?=;|$|^)","name":"meta.import-equals.internal.tsx","patterns":[{"include":"#single-line-comment-consuming-line-ending"},{"include":"#comment"},{"captures":{"1":{"name":"entity.name.type.module.tsx"},"2":{"name":"punctuation.accessor.tsx"},"3":{"name":"punctuation.accessor.optional.tsx"}},"match":"([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))"},{"match":"([$_[:alpha:]][$_[:alnum:]]*)","name":"variable.other.readwrite.tsx"}]}]},"import-export-assert-clause":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(with)|(assert))\\\\s*(\\\\{)","beginCaptures":{"1":{"name":"keyword.control.with.tsx"},"2":{"name":"keyword.control.assert.tsx"},"3":{"name":"punctuation.definition.block.tsx"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.block.tsx"}},"patterns":[{"include":"#comment"},{"include":"#string"},{"match":"[$_[:alpha:]][$_[:alnum:]]*\\\\s*(?=(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*:)","name":"meta.object-literal.key.tsx"},{"match":":","name":"punctuation.separator.key-value.tsx"}]},"import-export-block":{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.definition.block.tsx"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.block.tsx"}},"name":"meta.block.tsx","patterns":[{"include":"#import-export-clause"}]},"import-export-clause":{"patterns":[{"include":"#comment"},{"captures":{"1":{"name":"keyword.control.type.tsx"},"2":{"name":"keyword.control.default.tsx"},"3":{"name":"constant.language.import-export-all.tsx"},"4":{"name":"variable.other.readwrite.tsx"},"5":{"name":"string.quoted.alias.tsx"},"12":{"name":"keyword.control.as.tsx"},"13":{"name":"keyword.control.default.tsx"},"14":{"name":"variable.other.readwrite.alias.tsx"},"15":{"name":"string.quoted.alias.tsx"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(type)\\\\s+)?(?:\\\\b(default)|(\\\\*)|\\\\b([$_[:alpha:]][$_[:alnum:]]*)|(('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`)))\\\\s+(as)\\\\s+(?:(default(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))|([$_[:alpha:]][$_[:alnum:]]*)|(('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`)))"},{"include":"#punctuation-comma"},{"match":"\\\\*","name":"constant.language.import-export-all.tsx"},{"match":"\\\\b(default)\\\\b","name":"keyword.control.default.tsx"},{"captures":{"1":{"name":"keyword.control.type.tsx"},"2":{"name":"variable.other.readwrite.alias.tsx"},"3":{"name":"string.quoted.alias.tsx"}},"match":"(?:\\\\b(type)\\\\s+)?(?:([$_[:alpha:]][$_[:alnum:]]*)|(('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`)))"}]},"import-export-declaration":{"patterns":[{"include":"#comment"},{"include":"#string"},{"include":"#import-export-block"},{"match":"\\\\bfrom\\\\b","name":"keyword.control.from.tsx"},{"include":"#import-export-assert-clause"},{"include":"#import-export-clause"}]},"indexer-declaration":{"begin":"(?:(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(readonly)\\\\s*)?\\\\s*(\\\\[)\\\\s*([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(?=:)","beginCaptures":{"1":{"name":"storage.modifier.tsx"},"2":{"name":"meta.brace.square.tsx"},"3":{"name":"variable.parameter.tsx"}},"end":"(])\\\\s*(\\\\?\\\\s*)?|$","endCaptures":{"1":{"name":"meta.brace.square.tsx"},"2":{"name":"keyword.operator.optional.tsx"}},"name":"meta.indexer.declaration.tsx","patterns":[{"include":"#type-annotation"}]},"indexer-mapped-type-declaration":{"begin":"(?:(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))([-+])?(readonly)\\\\s*)?\\\\s*(\\\\[)\\\\s*([$_[:alpha:]][$_[:alnum:]]*)\\\\s+(in)\\\\s+","beginCaptures":{"1":{"name":"keyword.operator.type.modifier.tsx"},"2":{"name":"storage.modifier.tsx"},"3":{"name":"meta.brace.square.tsx"},"4":{"name":"entity.name.type.tsx"},"5":{"name":"keyword.operator.expression.in.tsx"}},"end":"(])([-+])?\\\\s*(\\\\?\\\\s*)?|$","endCaptures":{"1":{"name":"meta.brace.square.tsx"},"2":{"name":"keyword.operator.type.modifier.tsx"},"3":{"name":"keyword.operator.optional.tsx"}},"name":"meta.indexer.mappedtype.declaration.tsx","patterns":[{"captures":{"1":{"name":"keyword.control.as.tsx"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(as)\\\\s+"},{"include":"#type"}]},"inline-tags":{"patterns":[{"captures":{"1":{"name":"punctuation.definition.bracket.square.begin.jsdoc"},"2":{"name":"punctuation.definition.bracket.square.end.jsdoc"}},"match":"(\\\\[)[^]]+(])(?=\\\\{@(?:link|linkcode|linkplain|tutorial))","name":"constant.other.description.jsdoc"},{"begin":"(\\\\{)((@)(?:link(?:code|plain)?|tutorial))\\\\s*","beginCaptures":{"1":{"name":"punctuation.definition.bracket.curly.begin.jsdoc"},"2":{"name":"storage.type.class.jsdoc"},"3":{"name":"punctuation.definition.inline.tag.jsdoc"}},"end":"}|(?=\\\\*/)","endCaptures":{"0":{"name":"punctuation.definition.bracket.curly.end.jsdoc"}},"name":"entity.name.type.instance.jsdoc","patterns":[{"captures":{"1":{"name":"variable.other.link.underline.jsdoc"},"2":{"name":"punctuation.separator.pipe.jsdoc"}},"match":"\\\\G((?=https?://)(?:[^*|}\\\\s]|\\\\*/)+)(\\\\|)?"},{"captures":{"1":{"name":"variable.other.description.jsdoc"},"2":{"name":"punctuation.separator.pipe.jsdoc"}},"match":"\\\\G((?:[^*@{|}\\\\s]|\\\\*[^/])+)(\\\\|)?"}]}]},"instanceof-expr":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(instanceof)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","beginCaptures":{"1":{"name":"keyword.operator.expression.instanceof.tsx"}},"end":"(?<=\\\\))|(?=[-\\\\])+,:;>?}]|\\\\|\\\\||&&|!==|$|([!=]==?)|(([\\\\&^|~]\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s+instanceof(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))function((\\\\s+[$_[:alpha:]][$_[:alnum:]]*)|(\\\\s*\\\\())))","patterns":[{"include":"#type"}]},"interface-declaration":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(?:(abstract)\\\\s+)?\\\\b(interface)\\\\b(?=\\\\s+|/[*/])","beginCaptures":{"1":{"name":"keyword.control.export.tsx"},"2":{"name":"storage.modifier.tsx"},"3":{"name":"storage.modifier.tsx"},"4":{"name":"storage.type.interface.tsx"}},"end":"(?<=})","name":"meta.interface.tsx","patterns":[{"include":"#comment"},{"include":"#class-or-interface-heritage"},{"captures":{"0":{"name":"entity.name.type.interface.tsx"}},"match":"[$_[:alpha:]][$_[:alnum:]]*"},{"include":"#type-parameters"},{"include":"#class-or-interface-body"}]},"jsdoctype":{"patterns":[{"begin":"\\\\G(\\\\{)","beginCaptures":{"0":{"name":"entity.name.type.instance.jsdoc"},"1":{"name":"punctuation.definition.bracket.curly.begin.jsdoc"}},"contentName":"entity.name.type.instance.jsdoc","end":"((}))\\\\s*|(?=\\\\*/)","endCaptures":{"1":{"name":"entity.name.type.instance.jsdoc"},"2":{"name":"punctuation.definition.bracket.curly.end.jsdoc"}},"patterns":[{"include":"#brackets"}]}]},"jsx":{"patterns":[{"include":"#jsx-tag-without-attributes-in-expression"},{"include":"#jsx-tag-in-expression"}]},"jsx-children":{"patterns":[{"include":"#jsx-tag-without-attributes"},{"include":"#jsx-tag"},{"include":"#jsx-evaluated-code"},{"include":"#jsx-entities"}]},"jsx-entities":{"patterns":[{"captures":{"1":{"name":"punctuation.definition.entity.tsx"},"3":{"name":"punctuation.definition.entity.tsx"}},"match":"(&)([0-9A-Za-z]+|#[0-9]+|#x\\\\h+)(;)","name":"constant.character.entity.tsx"}]},"jsx-evaluated-code":{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.section.embedded.begin.tsx"}},"contentName":"meta.embedded.expression.tsx","end":"}","endCaptures":{"0":{"name":"punctuation.section.embedded.end.tsx"}},"patterns":[{"include":"#expression"}]},"jsx-string-double-quoted":{"begin":"\\"","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.tsx"}},"end":"\\"","endCaptures":{"0":{"name":"punctuation.definition.string.end.tsx"}},"name":"string.quoted.double.tsx","patterns":[{"include":"#jsx-entities"}]},"jsx-string-single-quoted":{"begin":"'","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.tsx"}},"end":"'","endCaptures":{"0":{"name":"punctuation.definition.string.end.tsx"}},"name":"string.quoted.single.tsx","patterns":[{"include":"#jsx-entities"}]},"jsx-tag":{"begin":"(?=(<)\\\\s*(?:([$_[:alpha:]][-$._[:alnum:]]*)(?<![-.])(:))?((?:[a-z][0-9a-z]*|([$_[:alpha:]][-$._[:alnum:]]*))(?<![-.]))(?=((<\\\\s*)|(\\\\s+))(?!\\\\?)|/?>))","end":"(/>)|(</)\\\\s*(?:([$_[:alpha:]][-$._[:alnum:]]*)(?<![-.])(:))?((?:[a-z][0-9a-z]*|([$_[:alpha:]][-$._[:alnum:]]*))(?<![-.]))?\\\\s*(>)","endCaptures":{"1":{"name":"punctuation.definition.tag.end.tsx"},"2":{"name":"punctuation.definition.tag.begin.tsx"},"3":{"name":"entity.name.tag.namespace.tsx"},"4":{"name":"punctuation.separator.namespace.tsx"},"5":{"name":"entity.name.tag.tsx"},"6":{"name":"support.class.component.tsx"},"7":{"name":"punctuation.definition.tag.end.tsx"}},"name":"meta.tag.tsx","patterns":[{"begin":"(<)\\\\s*(?:([$_[:alpha:]][-$._[:alnum:]]*)(?<![-.])(:))?((?:[a-z][0-9a-z]*|([$_[:alpha:]][-$._[:alnum:]]*))(?<![-.]))(?=((<\\\\s*)|(\\\\s+))(?!\\\\?)|/?>)","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.tsx"},"2":{"name":"entity.name.tag.namespace.tsx"},"3":{"name":"punctuation.separator.namespace.tsx"},"4":{"name":"entity.name.tag.tsx"},"5":{"name":"support.class.component.tsx"}},"end":"(?=/?>)","patterns":[{"include":"#comment"},{"include":"#type-arguments"},{"include":"#jsx-tag-attributes"}]},{"begin":"(>)","beginCaptures":{"1":{"name":"punctuation.definition.tag.end.tsx"}},"contentName":"meta.jsx.children.tsx","end":"(?=</)","patterns":[{"include":"#jsx-children"}]}]},"jsx-tag-attribute-assignment":{"match":"=(?=\\\\s*(?:[\\"'{]|/\\\\*|//|\\\\n))","name":"keyword.operator.assignment.tsx"},"jsx-tag-attribute-name":{"captures":{"1":{"name":"entity.other.attribute-name.namespace.tsx"},"2":{"name":"punctuation.separator.namespace.tsx"},"3":{"name":"entity.other.attribute-name.tsx"}},"match":"\\\\s*(?:([$_[:alpha:]][-$._[:alnum:]]*)(:))?([$_[:alpha:]][-$_[:alnum:]]*)(?=[=\\\\s]|/?>|/\\\\*|//)"},"jsx-tag-attributes":{"begin":"\\\\s+","end":"(?=/?>)","name":"meta.tag.attributes.tsx","patterns":[{"include":"#comment"},{"include":"#jsx-tag-attribute-name"},{"include":"#jsx-tag-attribute-assignment"},{"include":"#jsx-string-double-quoted"},{"include":"#jsx-string-single-quoted"},{"include":"#jsx-evaluated-code"},{"include":"#jsx-tag-attributes-illegal"}]},"jsx-tag-attributes-illegal":{"match":"\\\\S+","name":"invalid.illegal.attribute.tsx"},"jsx-tag-in-expression":{"begin":"(?<!\\\\+\\\\+|--)(?<=[(*,:=>?\\\\[{]|&&|\\\\|\\\\||\\\\?|\\\\*/|^await|[^$._[:alnum:]]await|^return|[^$._[:alnum:]]return|^default|[^$._[:alnum:]]default|^yield|[^$._[:alnum:]]yield|^)\\\\s*(?!<\\\\s*[$_[:alpha:]][$_[:alnum:]]*((\\\\s+extends\\\\s+[^=>])|,))(?=(<)\\\\s*(?:([$_[:alpha:]][-$._[:alnum:]]*)(?<![-.])(:))?((?:[a-z][0-9a-z]*|([$_[:alpha:]][-$._[:alnum:]]*))(?<![-.]))(?=((<\\\\s*)|(\\\\s+))(?!\\\\?)|/?>))","end":"(?!(<)\\\\s*(?:([$_[:alpha:]][-$._[:alnum:]]*)(?<![-.])(:))?((?:[a-z][0-9a-z]*|([$_[:alpha:]][-$._[:alnum:]]*))(?<![-.]))(?=((<\\\\s*)|(\\\\s+))(?!\\\\?)|/?>))","patterns":[{"include":"#jsx-tag"}]},"jsx-tag-without-attributes":{"begin":"(<)\\\\s*(?:([$_[:alpha:]][-$._[:alnum:]]*)(?<![-.])(:))?((?:[a-z][0-9a-z]*|([$_[:alpha:]][-$._[:alnum:]]*))(?<![-.]))?\\\\s*(>)","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.tsx"},"2":{"name":"entity.name.tag.namespace.tsx"},"3":{"name":"punctuation.separator.namespace.tsx"},"4":{"name":"entity.name.tag.tsx"},"5":{"name":"support.class.component.tsx"},"6":{"name":"punctuation.definition.tag.end.tsx"}},"contentName":"meta.jsx.children.tsx","end":"(</)\\\\s*(?:([$_[:alpha:]][-$._[:alnum:]]*)(?<![-.])(:))?((?:[a-z][0-9a-z]*|([$_[:alpha:]][-$._[:alnum:]]*))(?<![-.]))?\\\\s*(>)","endCaptures":{"1":{"name":"punctuation.definition.tag.begin.tsx"},"2":{"name":"entity.name.tag.namespace.tsx"},"3":{"name":"punctuation.separator.namespace.tsx"},"4":{"name":"entity.name.tag.tsx"},"5":{"name":"support.class.component.tsx"},"6":{"name":"punctuation.definition.tag.end.tsx"}},"name":"meta.tag.without-attributes.tsx","patterns":[{"include":"#jsx-children"}]},"jsx-tag-without-attributes-in-expression":{"begin":"(?<!\\\\+\\\\+|--)(?<=[(*,:=>?\\\\[{]|&&|\\\\|\\\\||\\\\?|\\\\*/|^await|[^$._[:alnum:]]await|^return|[^$._[:alnum:]]return|^default|[^$._[:alnum:]]default|^yield|[^$._[:alnum:]]yield|^)\\\\s*(?=(<)\\\\s*(?:([$_[:alpha:]][-$._[:alnum:]]*)(?<![-.])(:))?((?:[a-z][0-9a-z]*|([$_[:alpha:]][-$._[:alnum:]]*))(?<![-.]))?\\\\s*(>))","end":"(?!(<)\\\\s*(?:([$_[:alpha:]][-$._[:alnum:]]*)(?<![-.])(:))?((?:[a-z][0-9a-z]*|([$_[:alpha:]][-$._[:alnum:]]*))(?<![-.]))?\\\\s*(>))","patterns":[{"include":"#jsx-tag-without-attributes"}]},"label":{"patterns":[{"begin":"([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(:)(?=\\\\s*\\\\{)","beginCaptures":{"1":{"name":"entity.name.label.tsx"},"2":{"name":"punctuation.separator.label.tsx"}},"end":"(?<=})","patterns":[{"include":"#decl-block"}]},{"captures":{"1":{"name":"entity.name.label.tsx"},"2":{"name":"punctuation.separator.label.tsx"}},"match":"([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(:)"}]},"literal":{"patterns":[{"include":"#numeric-literal"},{"include":"#boolean-literal"},{"include":"#null-literal"},{"include":"#undefined-literal"},{"include":"#numericConstant-literal"},{"include":"#array-literal"},{"include":"#this-literal"},{"include":"#super-literal"}]},"method-declaration":{"patterns":[{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(override)\\\\s+)?(?:\\\\b(p(?:ublic|rivate|rotected))\\\\s+)?(?:\\\\b(abstract)\\\\s+)?(?:\\\\b(async)\\\\s+)?\\\\s*\\\\b(constructor)\\\\b(?!:)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","beginCaptures":{"1":{"name":"storage.modifier.tsx"},"2":{"name":"storage.modifier.tsx"},"3":{"name":"storage.modifier.tsx"},"4":{"name":"storage.modifier.async.tsx"},"5":{"name":"storage.type.tsx"}},"end":"(?=[,;}]|$)|(?<=})","name":"meta.method.declaration.tsx","patterns":[{"include":"#method-declaration-name"},{"include":"#function-body"}]},{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(override)\\\\s+)?(?:\\\\b(p(?:ublic|rivate|rotected))\\\\s+)?(?:\\\\b(abstract)\\\\s+)?(?:\\\\b(async)\\\\s+)?(?:\\\\s*\\\\b(new)\\\\b(?!:)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))|(?:(\\\\*)\\\\s*)?)(?=\\\\s*((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*))?\\\\()","beginCaptures":{"1":{"name":"storage.modifier.tsx"},"2":{"name":"storage.modifier.tsx"},"3":{"name":"storage.modifier.tsx"},"4":{"name":"storage.modifier.async.tsx"},"5":{"name":"keyword.operator.new.tsx"},"6":{"name":"keyword.generator.asterisk.tsx"}},"end":"(?=[,;}]|$)|(?<=})","name":"meta.method.declaration.tsx","patterns":[{"include":"#method-declaration-name"},{"include":"#function-body"}]},{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(override)\\\\s+)?(?:\\\\b(p(?:ublic|rivate|rotected))\\\\s+)?(?:\\\\b(abstract)\\\\s+)?(?:\\\\b(async)\\\\s+)?(?:\\\\b([gs]et)\\\\s+)?(?:(\\\\*)\\\\s*)?(?=\\\\s*((\\\\b((?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$))|((?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$))|([$_[:alpha:]][$_[:alnum:]]*)|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`)|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])+]))\\\\s*(\\\\??))\\\\s*((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*))?\\\\()","beginCaptures":{"1":{"name":"storage.modifier.tsx"},"2":{"name":"storage.modifier.tsx"},"3":{"name":"storage.modifier.tsx"},"4":{"name":"storage.modifier.async.tsx"},"5":{"name":"storage.type.property.tsx"},"6":{"name":"keyword.generator.asterisk.tsx"}},"end":"(?=[,;}]|$)|(?<=})","name":"meta.method.declaration.tsx","patterns":[{"include":"#method-declaration-name"},{"include":"#function-body"}]}]},"method-declaration-name":{"begin":"(?=(\\\\b((?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$))|((?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$))|([$_[:alpha:]][$_[:alnum:]]*)|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`)|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])+]))\\\\s*(\\\\??)\\\\s*[(<])","end":"(?=[(<])","patterns":[{"include":"#string"},{"include":"#array-literal"},{"include":"#numeric-literal"},{"match":"[$_[:alpha:]][$_[:alnum:]]*","name":"meta.definition.method.tsx entity.name.function.tsx"},{"match":"\\\\?","name":"keyword.operator.optional.tsx"}]},"namespace-declaration":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(namespace|module)\\\\s+(?=[\\"$'_\`[:alpha:]])","beginCaptures":{"1":{"name":"keyword.control.export.tsx"},"2":{"name":"storage.modifier.tsx"},"3":{"name":"storage.type.namespace.tsx"}},"end":"(?<=})|(?=;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)","name":"meta.namespace.declaration.tsx","patterns":[{"include":"#comment"},{"include":"#string"},{"match":"([$_[:alpha:]][$_[:alnum:]]*)","name":"entity.name.type.module.tsx"},{"include":"#punctuation-accessor"},{"include":"#decl-block"}]},"new-expr":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(new)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","beginCaptures":{"1":{"name":"keyword.operator.new.tsx"}},"end":"(?<=\\\\))|(?=[-\\\\])+,:;>?}]|\\\\|\\\\||&&|!==|$|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))new(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))function((\\\\s+[$_[:alpha:]][$_[:alnum:]]*)|(\\\\s*\\\\())))","name":"new.expr.tsx","patterns":[{"include":"#expression"}]},"null-literal":{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))null(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"constant.language.null.tsx"},"numeric-literal":{"patterns":[{"captures":{"1":{"name":"storage.type.numeric.bigint.tsx"}},"match":"\\\\b(?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$)","name":"constant.numeric.hex.tsx"},{"captures":{"1":{"name":"storage.type.numeric.bigint.tsx"}},"match":"\\\\b(?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$)","name":"constant.numeric.binary.tsx"},{"captures":{"1":{"name":"storage.type.numeric.bigint.tsx"}},"match":"\\\\b(?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$)","name":"constant.numeric.octal.tsx"},{"captures":{"0":{"name":"constant.numeric.decimal.tsx"},"1":{"name":"meta.delimiter.decimal.period.tsx"},"2":{"name":"storage.type.numeric.bigint.tsx"},"3":{"name":"meta.delimiter.decimal.period.tsx"},"4":{"name":"storage.type.numeric.bigint.tsx"},"5":{"name":"meta.delimiter.decimal.period.tsx"},"6":{"name":"storage.type.numeric.bigint.tsx"},"7":{"name":"storage.type.numeric.bigint.tsx"},"8":{"name":"meta.delimiter.decimal.period.tsx"},"9":{"name":"storage.type.numeric.bigint.tsx"},"10":{"name":"meta.delimiter.decimal.period.tsx"},"11":{"name":"storage.type.numeric.bigint.tsx"},"12":{"name":"meta.delimiter.decimal.period.tsx"},"13":{"name":"storage.type.numeric.bigint.tsx"},"14":{"name":"storage.type.numeric.bigint.tsx"}},"match":"(?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$)"}]},"numericConstant-literal":{"patterns":[{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))NaN(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"constant.language.nan.tsx"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))Infinity(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"constant.language.infinity.tsx"}]},"object-binding-element":{"patterns":[{"include":"#comment"},{"begin":"(?=(\\\\b((?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$))|((?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$))|([$_[:alpha:]][$_[:alnum:]]*)|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`)|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])+]))\\\\s*(:))","end":"(?=[,}])","patterns":[{"include":"#object-binding-element-propertyName"},{"include":"#binding-element"}]},{"include":"#object-binding-pattern"},{"include":"#destructuring-variable-rest"},{"include":"#variable-initializer"},{"include":"#punctuation-comma"}]},"object-binding-element-const":{"patterns":[{"include":"#comment"},{"begin":"(?=(\\\\b((?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$))|((?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$))|([$_[:alpha:]][$_[:alnum:]]*)|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`)|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])+]))\\\\s*(:))","end":"(?=[,}])","patterns":[{"include":"#object-binding-element-propertyName"},{"include":"#binding-element-const"}]},{"include":"#object-binding-pattern-const"},{"include":"#destructuring-variable-rest-const"},{"include":"#variable-initializer"},{"include":"#punctuation-comma"}]},"object-binding-element-propertyName":{"begin":"(?=(\\\\b((?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$))|((?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$))|([$_[:alpha:]][$_[:alnum:]]*)|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`)|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])+]))\\\\s*(:))","end":"(:)","endCaptures":{"0":{"name":"punctuation.destructuring.tsx"}},"patterns":[{"include":"#string"},{"include":"#array-literal"},{"include":"#numeric-literal"},{"match":"([$_[:alpha:]][$_[:alnum:]]*)","name":"variable.object.property.tsx"}]},"object-binding-pattern":{"begin":"(?:(\\\\.\\\\.\\\\.)\\\\s*)?(\\\\{)","beginCaptures":{"1":{"name":"keyword.operator.rest.tsx"},"2":{"name":"punctuation.definition.binding-pattern.object.tsx"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.binding-pattern.object.tsx"}},"patterns":[{"include":"#object-binding-element"}]},"object-binding-pattern-const":{"begin":"(?:(\\\\.\\\\.\\\\.)\\\\s*)?(\\\\{)","beginCaptures":{"1":{"name":"keyword.operator.rest.tsx"},"2":{"name":"punctuation.definition.binding-pattern.object.tsx"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.binding-pattern.object.tsx"}},"patterns":[{"include":"#object-binding-element-const"}]},"object-identifiers":{"patterns":[{"match":"([$_[:alpha:]][$_[:alnum:]]*)(?=\\\\s*\\\\??\\\\.\\\\s*prototype\\\\b(?!\\\\$))","name":"support.class.tsx"},{"captures":{"1":{"name":"punctuation.accessor.tsx"},"2":{"name":"punctuation.accessor.optional.tsx"},"3":{"name":"variable.other.constant.object.property.tsx"},"4":{"name":"variable.other.object.property.tsx"}},"match":"(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))\\\\s*(?:(#?\\\\p{upper}[$_\\\\d[:upper:]]*)|(#?[$_[:alpha:]][$_[:alnum:]]*))(?=\\\\s*\\\\??\\\\.\\\\s*#?[$_[:alpha:]][$_[:alnum:]]*)"},{"captures":{"1":{"name":"variable.other.constant.object.tsx"},"2":{"name":"variable.other.object.tsx"}},"match":"(?:(\\\\p{upper}[$_\\\\d[:upper:]]*)|([$_[:alpha:]][$_[:alnum:]]*))(?=\\\\s*\\\\??\\\\.\\\\s*#?[$_[:alpha:]][$_[:alnum:]]*)"}]},"object-literal":{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.definition.block.tsx"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.block.tsx"}},"name":"meta.objectliteral.tsx","patterns":[{"include":"#object-member"}]},"object-literal-method-declaration":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(async)\\\\s+)?(?:\\\\b([gs]et)\\\\s+)?(?:(\\\\*)\\\\s*)?(?=\\\\s*((\\\\b((?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$))|((?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$))|([$_[:alpha:]][$_[:alnum:]]*)|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`)|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])+]))\\\\s*(\\\\??))\\\\s*((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*))?\\\\()","beginCaptures":{"1":{"name":"storage.modifier.async.tsx"},"2":{"name":"storage.type.property.tsx"},"3":{"name":"keyword.generator.asterisk.tsx"}},"end":"(?=[,;}])|(?<=})","name":"meta.method.declaration.tsx","patterns":[{"include":"#method-declaration-name"},{"include":"#function-body"},{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(async)\\\\s+)?(?:\\\\b([gs]et)\\\\s+)?(?:(\\\\*)\\\\s*)?(?=\\\\s*((\\\\b((?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$))|((?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$))|([$_[:alpha:]][$_[:alnum:]]*)|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`)|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])+]))\\\\s*(\\\\??))\\\\s*((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*))?\\\\()","beginCaptures":{"1":{"name":"storage.modifier.async.tsx"},"2":{"name":"storage.type.property.tsx"},"3":{"name":"keyword.generator.asterisk.tsx"}},"end":"(?=[(<])","patterns":[{"include":"#method-declaration-name"}]}]},"object-member":{"patterns":[{"include":"#comment"},{"include":"#object-literal-method-declaration"},{"begin":"(?=\\\\[)","end":"(?=:)|((?<=])(?=\\\\s*[(<]))","name":"meta.object.member.tsx meta.object-literal.key.tsx","patterns":[{"include":"#comment"},{"include":"#array-literal"}]},{"begin":"(?=[\\"'\`])","end":"(?=:)|((?<=[\\"'\`])(?=((\\\\s*[(,<}])|(\\\\s+(as|satisifies)\\\\s+))))","name":"meta.object.member.tsx meta.object-literal.key.tsx","patterns":[{"include":"#comment"},{"include":"#string"}]},{"begin":"(?=\\\\b((?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$))|((?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$)))","end":"(?=:)|(?=\\\\s*([(,<}])|(\\\\s+as|satisifies\\\\s+))","name":"meta.object.member.tsx meta.object-literal.key.tsx","patterns":[{"include":"#comment"},{"include":"#numeric-literal"}]},{"begin":"(?<=[]\\"'\`])(?=\\\\s*[(<])","end":"(?=[,;}])|(?<=})","name":"meta.method.declaration.tsx","patterns":[{"include":"#function-body"}]},{"captures":{"0":{"name":"meta.object-literal.key.tsx"},"1":{"name":"constant.numeric.decimal.tsx"}},"match":"(?![$_[:alpha:]])(\\\\d+)\\\\s*(?=(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*:)","name":"meta.object.member.tsx"},{"captures":{"0":{"name":"meta.object-literal.key.tsx"},"1":{"name":"entity.name.function.tsx"}},"match":"([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(?=(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*:(\\\\s*/\\\\*([^*]|(\\\\*[^/]))*\\\\*/)*\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|(\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|(<\\\\s*[$_[:alpha:]][$_[:alnum:]]*\\\\s+extends\\\\s*[^=>])|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\"'()\`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>)))))","name":"meta.object.member.tsx"},{"captures":{"0":{"name":"meta.object-literal.key.tsx"}},"match":"[$_[:alpha:]][$_[:alnum:]]*\\\\s*(?=(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*:)","name":"meta.object.member.tsx"},{"begin":"\\\\.\\\\.\\\\.","beginCaptures":{"0":{"name":"keyword.operator.spread.tsx"}},"end":"(?=[,}])","name":"meta.object.member.tsx","patterns":[{"include":"#expression"}]},{"captures":{"1":{"name":"variable.other.readwrite.tsx"}},"match":"([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(?=[,}]|$|//|/\\\\*)","name":"meta.object.member.tsx"},{"captures":{"1":{"name":"keyword.control.as.tsx"},"2":{"name":"storage.modifier.tsx"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(as)\\\\s+(const)(?=\\\\s*([,}]|$))","name":"meta.object.member.tsx"},{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(as)|(satisfies))\\\\s+","beginCaptures":{"1":{"name":"keyword.control.as.tsx"},"2":{"name":"keyword.control.satisfies.tsx"}},"end":"(?=[-\\\\])+,:;>?}]|\\\\|\\\\||&&|!==|$|^|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(as|satisifies)\\\\s+))","name":"meta.object.member.tsx","patterns":[{"include":"#type"}]},{"begin":"(?=[$_[:alpha:]][$_[:alnum:]]*\\\\s*=)","end":"(?=[,}]|$|//|/\\\\*)","name":"meta.object.member.tsx","patterns":[{"include":"#expression"}]},{"begin":":","beginCaptures":{"0":{"name":"meta.object-literal.key.tsx punctuation.separator.key-value.tsx"}},"end":"(?=[,}])","name":"meta.object.member.tsx","patterns":[{"begin":"(?<=:)\\\\s*(async)?(?=\\\\s*(<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))))","beginCaptures":{"1":{"name":"storage.modifier.async.tsx"}},"end":"(?<=\\\\))","patterns":[{"include":"#type-parameters"},{"begin":"\\\\(","beginCaptures":{"0":{"name":"meta.brace.round.tsx"}},"end":"\\\\)","endCaptures":{"0":{"name":"meta.brace.round.tsx"}},"patterns":[{"include":"#expression-inside-possibly-arrow-parens"}]}]},{"begin":"(?<=:)\\\\s*(async)?\\\\s*(\\\\()(?=\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))))","beginCaptures":{"1":{"name":"storage.modifier.async.tsx"},"2":{"name":"meta.brace.round.tsx"}},"end":"\\\\)","endCaptures":{"0":{"name":"meta.brace.round.tsx"}},"patterns":[{"include":"#expression-inside-possibly-arrow-parens"}]},{"begin":"(?<=:)\\\\s*(async)?\\\\s*(?=<\\\\s*$)","beginCaptures":{"1":{"name":"storage.modifier.async.tsx"}},"end":"(?<=>)","patterns":[{"include":"#type-parameters"}]},{"begin":"(?<=>)\\\\s*(\\\\()(?=\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))))","beginCaptures":{"1":{"name":"meta.brace.round.tsx"}},"end":"\\\\)","endCaptures":{"0":{"name":"meta.brace.round.tsx"}},"patterns":[{"include":"#expression-inside-possibly-arrow-parens"}]},{"include":"#possibly-arrow-return-type"},{"include":"#expression"}]},{"include":"#punctuation-comma"},{"include":"#decl-block"}]},"parameter-array-binding-pattern":{"begin":"(?:(\\\\.\\\\.\\\\.)\\\\s*)?(\\\\[)","beginCaptures":{"1":{"name":"keyword.operator.rest.tsx"},"2":{"name":"punctuation.definition.binding-pattern.array.tsx"}},"end":"]","endCaptures":{"0":{"name":"punctuation.definition.binding-pattern.array.tsx"}},"patterns":[{"include":"#parameter-binding-element"},{"include":"#punctuation-comma"}]},"parameter-binding-element":{"patterns":[{"include":"#comment"},{"include":"#string"},{"include":"#numeric-literal"},{"include":"#regex"},{"include":"#parameter-object-binding-pattern"},{"include":"#parameter-array-binding-pattern"},{"include":"#destructuring-parameter-rest"},{"include":"#variable-initializer"}]},"parameter-name":{"patterns":[{"captures":{"1":{"name":"storage.modifier.tsx"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(override|public|protected|private|readonly)\\\\s+(?=(override|public|protected|private|readonly)\\\\s+)"},{"captures":{"1":{"name":"storage.modifier.tsx"},"2":{"name":"keyword.operator.rest.tsx"},"3":{"name":"entity.name.function.tsx variable.language.this.tsx"},"4":{"name":"entity.name.function.tsx"},"5":{"name":"keyword.operator.optional.tsx"}},"match":"(?:(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(override|public|private|protected|readonly)\\\\s+)?(?:(\\\\.\\\\.\\\\.)\\\\s*)?(?<![:=])(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(this)|([$_[:alpha:]][$_[:alnum:]]*))(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\\\\s*(\\\\??)(?=\\\\s*(=\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|(\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|(<\\\\s*[$_[:alpha:]][$_[:alnum:]]*\\\\s+extends\\\\s*[^=>])|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\"'()\`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>)))))|(:\\\\s*((<)|(\\\\(\\\\s*((\\\\))|(\\\\.\\\\.\\\\.)|([$_[:alnum:]]+\\\\s*(([,:=?])|(\\\\)\\\\s*=>)))))))|(:\\\\s*(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))Function(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))|(:\\\\s*((<\\\\s*)$|(\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))))))|(:\\\\s*(=>|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(<[^<>]*>)|[^(),<=>])+=\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|(\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|(<\\\\s*[$_[:alpha:]][$_[:alnum:]]*\\\\s+extends\\\\s*[^=>])|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\"'()\`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>))))))"},{"captures":{"1":{"name":"storage.modifier.tsx"},"2":{"name":"keyword.operator.rest.tsx"},"3":{"name":"variable.parameter.tsx variable.language.this.tsx"},"4":{"name":"variable.parameter.tsx"},"5":{"name":"keyword.operator.optional.tsx"}},"match":"(?:(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(override|public|private|protected|readonly)\\\\s+)?(?:(\\\\.\\\\.\\\\.)\\\\s*)?(?<![:=])(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(this)|([$_[:alpha:]][$_[:alnum:]]*))(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\\\\s*(\\\\??)"}]},"parameter-object-binding-element":{"patterns":[{"include":"#comment"},{"begin":"(?=(\\\\b((?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$))|((?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$))|([$_[:alpha:]][$_[:alnum:]]*)|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`)|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])+]))\\\\s*(:))","end":"(?=[,}])","patterns":[{"include":"#object-binding-element-propertyName"},{"include":"#parameter-binding-element"},{"include":"#paren-expression"}]},{"include":"#parameter-object-binding-pattern"},{"include":"#destructuring-parameter-rest"},{"include":"#variable-initializer"},{"include":"#punctuation-comma"}]},"parameter-object-binding-pattern":{"begin":"(?:(\\\\.\\\\.\\\\.)\\\\s*)?(\\\\{)","beginCaptures":{"1":{"name":"keyword.operator.rest.tsx"},"2":{"name":"punctuation.definition.binding-pattern.object.tsx"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.binding-pattern.object.tsx"}},"patterns":[{"include":"#parameter-object-binding-element"}]},"parameter-type-annotation":{"patterns":[{"begin":"(:)","beginCaptures":{"1":{"name":"keyword.operator.type.annotation.tsx"}},"end":"(?=[),])|(?==[^>])","name":"meta.type.annotation.tsx","patterns":[{"include":"#type"}]}]},"paren-expression":{"begin":"\\\\(","beginCaptures":{"0":{"name":"meta.brace.round.tsx"}},"end":"\\\\)","endCaptures":{"0":{"name":"meta.brace.round.tsx"}},"patterns":[{"include":"#expression"}]},"paren-expression-possibly-arrow":{"patterns":[{"begin":"(?<=[(,=])\\\\s*(async)?(?=\\\\s*((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*))?\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))))","beginCaptures":{"1":{"name":"storage.modifier.async.tsx"}},"end":"(?<=\\\\))","patterns":[{"include":"#paren-expression-possibly-arrow-with-typeparameters"}]},{"begin":"(?<=[(,=]|=>|^return|[^$._[:alnum:]]return)\\\\s*(async)?(?=\\\\s*((((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*))?\\\\()|(<)|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)))\\\\s*$)","beginCaptures":{"1":{"name":"storage.modifier.async.tsx"}},"end":"(?<=\\\\))","patterns":[{"include":"#paren-expression-possibly-arrow-with-typeparameters"}]},{"include":"#possibly-arrow-return-type"}]},"paren-expression-possibly-arrow-with-typeparameters":{"patterns":[{"include":"#type-parameters"},{"begin":"\\\\(","beginCaptures":{"0":{"name":"meta.brace.round.tsx"}},"end":"\\\\)","endCaptures":{"0":{"name":"meta.brace.round.tsx"}},"patterns":[{"include":"#expression-inside-possibly-arrow-parens"}]}]},"possibly-arrow-return-type":{"begin":"(?<=\\\\)|^)\\\\s*(:)(?=\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*=>)","beginCaptures":{"1":{"name":"meta.arrow.tsx meta.return.type.arrow.tsx keyword.operator.type.annotation.tsx"}},"contentName":"meta.arrow.tsx meta.return.type.arrow.tsx","end":"(?==>|\\\\{|^(\\\\s*(export|function|class|interface|let|var|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|const|import|enum|namespace|module|type|abstract|declare)\\\\s+))","patterns":[{"include":"#arrow-return-type-body"}]},"property-accessor":{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(accessor|get|set)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"storage.type.property.tsx"},"punctuation-accessor":{"captures":{"1":{"name":"punctuation.accessor.tsx"},"2":{"name":"punctuation.accessor.optional.tsx"}},"match":"(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d))"},"punctuation-comma":{"match":",","name":"punctuation.separator.comma.tsx"},"punctuation-semicolon":{"match":";","name":"punctuation.terminator.statement.tsx"},"qstring-double":{"begin":"\\"","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.tsx"}},"end":"(\\")|([^\\\\n\\\\\\\\])$","endCaptures":{"1":{"name":"punctuation.definition.string.end.tsx"},"2":{"name":"invalid.illegal.newline.tsx"}},"name":"string.quoted.double.tsx","patterns":[{"include":"#string-character-escape"}]},"qstring-single":{"begin":"'","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.tsx"}},"end":"(')|([^\\\\n\\\\\\\\])$","endCaptures":{"1":{"name":"punctuation.definition.string.end.tsx"},"2":{"name":"invalid.illegal.newline.tsx"}},"name":"string.quoted.single.tsx","patterns":[{"include":"#string-character-escape"}]},"regex":{"patterns":[{"begin":"(?<!\\\\+\\\\+|--|})(?<=[!(+,:=?\\\\[]|^return|[^$._[:alnum:]]return|^case|[^$._[:alnum:]]case|=>|&&|\\\\|\\\\||\\\\*/)\\\\s*(/)(?![*/])(?=(?:[^()/\\\\[\\\\\\\\]|\\\\\\\\.|\\\\[([^]\\\\\\\\]|\\\\\\\\.)+]|\\\\(([^)\\\\\\\\]|\\\\\\\\.)+\\\\))+/([dgimsuvy]+|(?![*/])|(?=/\\\\*))(?!\\\\s*[$0-9A-Z_a-z]))","beginCaptures":{"1":{"name":"punctuation.definition.string.begin.tsx"}},"end":"(/)([dgimsuvy]*)","endCaptures":{"1":{"name":"punctuation.definition.string.end.tsx"},"2":{"name":"keyword.other.tsx"}},"name":"string.regexp.tsx","patterns":[{"include":"#regexp"}]},{"begin":"((?<![]$)_[:alnum:]]|\\\\+\\\\+|--|}|\\\\*/)|((?<=^return|[^$._[:alnum:]]return|^case|[^$._[:alnum:]]case))\\\\s*)/(?![*/])(?=(?:[^/\\\\[\\\\\\\\]|\\\\\\\\.|\\\\[([^]\\\\\\\\]|\\\\\\\\.)*])+/([dgimsuvy]+|(?![*/])|(?=/\\\\*))(?!\\\\s*[$0-9A-Z_a-z]))","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.tsx"}},"end":"(/)([dgimsuvy]*)","endCaptures":{"1":{"name":"punctuation.definition.string.end.tsx"},"2":{"name":"keyword.other.tsx"}},"name":"string.regexp.tsx","patterns":[{"include":"#regexp"}]}]},"regex-character-class":{"patterns":[{"match":"\\\\\\\\[DSWdfnrstvw]|\\\\.","name":"constant.other.character-class.regexp"},{"match":"\\\\\\\\([0-7]{3}|x\\\\h{2}|u\\\\h{4})","name":"constant.character.numeric.regexp"},{"match":"\\\\\\\\c[A-Z]","name":"constant.character.control.regexp"},{"match":"\\\\\\\\.","name":"constant.character.escape.backslash.regexp"}]},"regexp":{"patterns":[{"match":"\\\\\\\\[Bb]|[$^]","name":"keyword.control.anchor.regexp"},{"captures":{"0":{"name":"keyword.other.back-reference.regexp"},"1":{"name":"variable.other.regexp"}},"match":"\\\\\\\\(?:[1-9]\\\\d*|k<([$A-Z_a-z][$\\\\w]*)>)"},{"match":"[*+?]|\\\\{(\\\\d+,\\\\d+|\\\\d+,|,\\\\d+|\\\\d+)}\\\\??","name":"keyword.operator.quantifier.regexp"},{"match":"\\\\|","name":"keyword.operator.or.regexp"},{"begin":"(\\\\()((\\\\?=)|(\\\\?!)|(\\\\?<=)|(\\\\?<!))","beginCaptures":{"1":{"name":"punctuation.definition.group.regexp"},"2":{"name":"punctuation.definition.group.assertion.regexp"},"3":{"name":"meta.assertion.look-ahead.regexp"},"4":{"name":"meta.assertion.negative-look-ahead.regexp"},"5":{"name":"meta.assertion.look-behind.regexp"},"6":{"name":"meta.assertion.negative-look-behind.regexp"}},"end":"(\\\\))","endCaptures":{"1":{"name":"punctuation.definition.group.regexp"}},"name":"meta.group.assertion.regexp","patterns":[{"include":"#regexp"}]},{"begin":"\\\\((?:(\\\\?:)|\\\\?<([$A-Z_a-z][$\\\\w]*)>)?","beginCaptures":{"0":{"name":"punctuation.definition.group.regexp"},"1":{"name":"punctuation.definition.group.no-capture.regexp"},"2":{"name":"variable.other.regexp"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.definition.group.regexp"}},"name":"meta.group.regexp","patterns":[{"include":"#regexp"}]},{"begin":"(\\\\[)(\\\\^)?","beginCaptures":{"1":{"name":"punctuation.definition.character-class.regexp"},"2":{"name":"keyword.operator.negation.regexp"}},"end":"(])","endCaptures":{"1":{"name":"punctuation.definition.character-class.regexp"}},"name":"constant.other.character-class.set.regexp","patterns":[{"captures":{"1":{"name":"constant.character.numeric.regexp"},"2":{"name":"constant.character.control.regexp"},"3":{"name":"constant.character.escape.backslash.regexp"},"4":{"name":"constant.character.numeric.regexp"},"5":{"name":"constant.character.control.regexp"},"6":{"name":"constant.character.escape.backslash.regexp"}},"match":"(?:.|(\\\\\\\\(?:[0-7]{3}|x\\\\h{2}|u\\\\h{4}))|(\\\\\\\\c[A-Z])|(\\\\\\\\.))-(?:[^]\\\\\\\\]|(\\\\\\\\(?:[0-7]{3}|x\\\\h{2}|u\\\\h{4}))|(\\\\\\\\c[A-Z])|(\\\\\\\\.))","name":"constant.other.character-class.range.regexp"},{"include":"#regex-character-class"}]},{"include":"#regex-character-class"}]},"return-type":{"patterns":[{"begin":"(?<=\\\\))\\\\s*(:)(?=\\\\s*\\\\S)","beginCaptures":{"1":{"name":"keyword.operator.type.annotation.tsx"}},"end":"(?<![\\\\&:|])(?=$|^|[,;{}]|//)","name":"meta.return.type.tsx","patterns":[{"include":"#return-type-core"}]},{"begin":"(?<=\\\\))\\\\s*(:)","beginCaptures":{"1":{"name":"keyword.operator.type.annotation.tsx"}},"end":"(?<![\\\\&:|])((?=[,;{}]|//|^\\\\s*$)|((?<=\\\\S)(?=\\\\s*$)))","name":"meta.return.type.tsx","patterns":[{"include":"#return-type-core"}]}]},"return-type-core":{"patterns":[{"include":"#comment"},{"begin":"(?<=[\\\\&:|])(?=\\\\s*\\\\{)","end":"(?<=})","patterns":[{"include":"#type-object"}]},{"include":"#type-predicate-operator"},{"include":"#type"}]},"shebang":{"captures":{"1":{"name":"punctuation.definition.comment.tsx"}},"match":"\\\\A(#!).*(?=$)","name":"comment.line.shebang.tsx"},"single-line-comment-consuming-line-ending":{"begin":"(^[\\\\t ]+)?((//)(?:\\\\s*((@)internal)(?=\\\\s|$))?)","beginCaptures":{"1":{"name":"punctuation.whitespace.comment.leading.tsx"},"2":{"name":"comment.line.double-slash.tsx"},"3":{"name":"punctuation.definition.comment.tsx"},"4":{"name":"storage.type.internaldeclaration.tsx"},"5":{"name":"punctuation.decorator.internaldeclaration.tsx"}},"contentName":"comment.line.double-slash.tsx","end":"(?=^)"},"statements":{"patterns":[{"include":"#declaration"},{"include":"#control-statement"},{"include":"#after-operator-block-as-object-literal"},{"include":"#decl-block"},{"include":"#label"},{"include":"#expression"},{"include":"#punctuation-semicolon"},{"include":"#string"},{"include":"#comment"}]},"string":{"patterns":[{"include":"#qstring-single"},{"include":"#qstring-double"},{"include":"#template"}]},"string-character-escape":{"match":"\\\\\\\\(x\\\\h{2}|u\\\\h{4}|u\\\\{\\\\h+}|[012][0-7]{0,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.|$)","name":"constant.character.escape.tsx"},"super-literal":{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))super\\\\b(?!\\\\$)","name":"variable.language.super.tsx"},"support-function-call-identifiers":{"patterns":[{"include":"#literal"},{"include":"#support-objects"},{"include":"#object-identifiers"},{"include":"#punctuation-accessor"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))import(?=\\\\s*\\\\(\\\\s*[\\"'\`])","name":"keyword.operator.expression.import.tsx"}]},"support-objects":{"patterns":[{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(arguments)\\\\b(?!\\\\$)","name":"variable.language.arguments.tsx"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(Promise)\\\\b(?!\\\\$)","name":"support.class.promise.tsx"},{"captures":{"1":{"name":"keyword.control.import.tsx"},"2":{"name":"punctuation.accessor.tsx"},"3":{"name":"punctuation.accessor.optional.tsx"},"4":{"name":"support.variable.property.importmeta.tsx"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(import)\\\\s*(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))\\\\s*(meta)\\\\b(?!\\\\$)"},{"captures":{"1":{"name":"keyword.operator.new.tsx"},"2":{"name":"punctuation.accessor.tsx"},"3":{"name":"punctuation.accessor.optional.tsx"},"4":{"name":"support.variable.property.target.tsx"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(new)\\\\s*(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))\\\\s*(target)\\\\b(?!\\\\$)"},{"captures":{"1":{"name":"punctuation.accessor.tsx"},"2":{"name":"punctuation.accessor.optional.tsx"},"3":{"name":"support.variable.property.tsx"},"4":{"name":"support.constant.tsx"}},"match":"(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))\\\\s*(?:(constructor|length|prototype|__proto__)\\\\b(?!\\\\$|\\\\s*(<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\()|(EPSILON|MAX_SAFE_INTEGER|MAX_VALUE|MIN_SAFE_INTEGER|MIN_VALUE|NEGATIVE_INFINITY|POSITIVE_INFINITY)\\\\b(?!\\\\$))"},{"captures":{"1":{"name":"support.type.object.module.tsx"},"2":{"name":"support.type.object.module.tsx"},"3":{"name":"punctuation.accessor.tsx"},"4":{"name":"punctuation.accessor.optional.tsx"},"5":{"name":"support.type.object.module.tsx"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(exports)|(module)(?:(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))(exports|id|filename|loaded|parent|children))?)\\\\b(?!\\\\$)"}]},"switch-statement":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?=\\\\bswitch\\\\s*\\\\()","end":"}","endCaptures":{"0":{"name":"punctuation.definition.block.tsx"}},"name":"switch-statement.expr.tsx","patterns":[{"include":"#comment"},{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(switch)\\\\s*(\\\\()","beginCaptures":{"1":{"name":"keyword.control.switch.tsx"},"2":{"name":"meta.brace.round.tsx"}},"end":"\\\\)","endCaptures":{"0":{"name":"meta.brace.round.tsx"}},"name":"switch-expression.expr.tsx","patterns":[{"include":"#expression"}]},{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.definition.block.tsx"}},"end":"(?=})","name":"switch-block.expr.tsx","patterns":[{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(case|default(?=:))(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","beginCaptures":{"1":{"name":"keyword.control.switch.tsx"}},"end":"(?=:)","name":"case-clause.expr.tsx","patterns":[{"include":"#expression"}]},{"begin":"(:)\\\\s*(\\\\{)","beginCaptures":{"1":{"name":"case-clause.expr.tsx punctuation.definition.section.case-statement.tsx"},"2":{"name":"meta.block.tsx punctuation.definition.block.tsx"}},"contentName":"meta.block.tsx","end":"}","endCaptures":{"0":{"name":"meta.block.tsx punctuation.definition.block.tsx"}},"patterns":[{"include":"#statements"}]},{"captures":{"0":{"name":"case-clause.expr.tsx punctuation.definition.section.case-statement.tsx"}},"match":"(:)"},{"include":"#statements"}]}]},"template":{"patterns":[{"include":"#template-call"},{"begin":"([$_[:alpha:]][$_[:alnum:]]*)?(\`)","beginCaptures":{"1":{"name":"entity.name.function.tagged-template.tsx"},"2":{"name":"string.template.tsx punctuation.definition.string.template.begin.tsx"}},"contentName":"string.template.tsx","end":"\`","endCaptures":{"0":{"name":"string.template.tsx punctuation.definition.string.template.end.tsx"}},"patterns":[{"include":"#template-substitution-element"},{"include":"#string-character-escape"}]}]},"template-call":{"patterns":[{"begin":"(?=(([$_[:alpha:]][$_[:alnum:]]*\\\\s*\\\\??\\\\.\\\\s*)*|(\\\\??\\\\.\\\\s*)?)([$_[:alpha:]][$_[:alnum:]]*)(<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))(([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>)*(?<!=)>))*(?<!=)>)*(?<!=)>\\\\s*)?\`)","end":"(?=\`)","patterns":[{"begin":"(?=(([$_[:alpha:]][$_[:alnum:]]*\\\\s*\\\\??\\\\.\\\\s*)*|(\\\\??\\\\.\\\\s*)?)([$_[:alpha:]][$_[:alnum:]]*))","end":"(?=(<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))(([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>)*(?<!=)>))*(?<!=)>)*(?<!=)>\\\\s*)?\`)","patterns":[{"include":"#support-function-call-identifiers"},{"match":"([$_[:alpha:]][$_[:alnum:]]*)","name":"entity.name.function.tagged-template.tsx"}]},{"include":"#type-arguments"}]},{"begin":"([$_[:alpha:]][$_[:alnum:]]*)?\\\\s*(?=(<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))(([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>)*(?<!=)>))*(?<!=)>)*(?<!=)>\\\\s*)\`)","beginCaptures":{"1":{"name":"entity.name.function.tagged-template.tsx"}},"end":"(?=\`)","patterns":[{"include":"#type-arguments"}]}]},"template-substitution-element":{"begin":"\\\\$\\\\{","beginCaptures":{"0":{"name":"punctuation.definition.template-expression.begin.tsx"}},"contentName":"meta.embedded.line.tsx","end":"}","endCaptures":{"0":{"name":"punctuation.definition.template-expression.end.tsx"}},"name":"meta.template.expression.tsx","patterns":[{"include":"#expression"}]},"template-type":{"patterns":[{"include":"#template-call"},{"begin":"([$_[:alpha:]][$_[:alnum:]]*)?(\`)","beginCaptures":{"1":{"name":"entity.name.function.tagged-template.tsx"},"2":{"name":"string.template.tsx punctuation.definition.string.template.begin.tsx"}},"contentName":"string.template.tsx","end":"\`","endCaptures":{"0":{"name":"string.template.tsx punctuation.definition.string.template.end.tsx"}},"patterns":[{"include":"#template-type-substitution-element"},{"include":"#string-character-escape"}]}]},"template-type-substitution-element":{"begin":"\\\\$\\\\{","beginCaptures":{"0":{"name":"punctuation.definition.template-expression.begin.tsx"}},"contentName":"meta.embedded.line.tsx","end":"}","endCaptures":{"0":{"name":"punctuation.definition.template-expression.end.tsx"}},"name":"meta.template.expression.tsx","patterns":[{"include":"#type"}]},"ternary-expression":{"begin":"(?!\\\\?\\\\.\\\\s*\\\\D)(\\\\?)(?!\\\\?)","beginCaptures":{"1":{"name":"keyword.operator.ternary.tsx"}},"end":"\\\\s*(:)","endCaptures":{"1":{"name":"keyword.operator.ternary.tsx"}},"patterns":[{"include":"#expression"}]},"this-literal":{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))this\\\\b(?!\\\\$)","name":"variable.language.this.tsx"},"type":{"patterns":[{"include":"#comment"},{"include":"#type-string"},{"include":"#numeric-literal"},{"include":"#type-primitive"},{"include":"#type-builtin-literals"},{"include":"#type-parameters"},{"include":"#type-tuple"},{"include":"#type-object"},{"include":"#type-operators"},{"include":"#type-conditional"},{"include":"#type-fn-type-parameters"},{"include":"#type-paren-or-function-parameters"},{"include":"#type-function-return-type"},{"captures":{"1":{"name":"storage.modifier.tsx"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(readonly)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\\\\s*"},{"include":"#type-name"}]},"type-alias-declaration":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(type)\\\\b\\\\s+([$_[:alpha:]][$_[:alnum:]]*)\\\\s*","beginCaptures":{"1":{"name":"keyword.control.export.tsx"},"2":{"name":"storage.modifier.tsx"},"3":{"name":"storage.type.type.tsx"},"4":{"name":"entity.name.type.alias.tsx"}},"end":"(?=[;}]|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)","name":"meta.type.declaration.tsx","patterns":[{"include":"#comment"},{"include":"#type-parameters"},{"begin":"(=)\\\\s*(intrinsic)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","beginCaptures":{"1":{"name":"keyword.operator.assignment.tsx"},"2":{"name":"keyword.control.intrinsic.tsx"}},"end":"(?=[;}]|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)","patterns":[{"include":"#type"}]},{"begin":"(=)\\\\s*","beginCaptures":{"1":{"name":"keyword.operator.assignment.tsx"}},"end":"(?=[;}]|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)","patterns":[{"include":"#type"}]}]},"type-annotation":{"patterns":[{"begin":"(:)(?=\\\\s*\\\\S)","beginCaptures":{"1":{"name":"keyword.operator.type.annotation.tsx"}},"end":"(?<![\\\\&:|])(?!\\\\s*[\\\\&|]\\\\s+)((?=^|[]),;}]|//)|(?==[^>])|((?<=[]$)>_}[:alpha:]])\\\\s*(?=\\\\{)))","name":"meta.type.annotation.tsx","patterns":[{"include":"#type"}]},{"begin":"(:)","beginCaptures":{"1":{"name":"keyword.operator.type.annotation.tsx"}},"end":"(?<![\\\\&:|])((?=[]),;}]|//)|(?==[^>])|(?=^\\\\s*$)|((?<=[]$)>_}[:alpha:]])\\\\s*(?=\\\\{)))","name":"meta.type.annotation.tsx","patterns":[{"include":"#type"}]}]},"type-arguments":{"begin":"<","beginCaptures":{"0":{"name":"punctuation.definition.typeparameters.begin.tsx"}},"end":">","endCaptures":{"0":{"name":"punctuation.definition.typeparameters.end.tsx"}},"name":"meta.type.parameters.tsx","patterns":[{"include":"#type-arguments-body"}]},"type-arguments-body":{"patterns":[{"captures":{"0":{"name":"keyword.operator.type.tsx"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(_)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))"},{"include":"#type"},{"include":"#punctuation-comma"}]},"type-builtin-literals":{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(this|true|false|undefined|null|object)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"support.type.builtin.tsx"},"type-conditional":{"patterns":[{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(extends)\\\\s+","beginCaptures":{"1":{"name":"storage.modifier.tsx"}},"end":"(?<=:)","patterns":[{"begin":"\\\\?","beginCaptures":{"0":{"name":"keyword.operator.ternary.tsx"}},"end":":","endCaptures":{"0":{"name":"keyword.operator.ternary.tsx"}},"patterns":[{"include":"#type"}]},{"include":"#type"}]}]},"type-fn-type-parameters":{"patterns":[{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(abstract)\\\\s+)?(new)\\\\b(?=\\\\s*<)","beginCaptures":{"1":{"name":"meta.type.constructor.tsx storage.modifier.tsx"},"2":{"name":"meta.type.constructor.tsx keyword.control.new.tsx"}},"end":"(?<=>)","patterns":[{"include":"#comment"},{"include":"#type-parameters"}]},{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(abstract)\\\\s+)?(new)\\\\b\\\\s*(?=\\\\()","beginCaptures":{"1":{"name":"storage.modifier.tsx"},"2":{"name":"keyword.control.new.tsx"}},"end":"(?<=\\\\))","name":"meta.type.constructor.tsx","patterns":[{"include":"#function-parameters"}]},{"begin":"((?=\\\\(\\\\s*((\\\\))|(\\\\.\\\\.\\\\.)|([$_[:alnum:]]+\\\\s*(([,:=?])|(\\\\)\\\\s*=>))))))","end":"(?<=\\\\))","name":"meta.type.function.tsx","patterns":[{"include":"#function-parameters"}]}]},"type-function-return-type":{"patterns":[{"begin":"(=>)(?=\\\\s*\\\\S)","beginCaptures":{"1":{"name":"storage.type.function.arrow.tsx"}},"end":"(?<!=>)(?<![\\\\&|])(?=[]),:;=>?{}]|//|$)","name":"meta.type.function.return.tsx","patterns":[{"include":"#type-function-return-type-core"}]},{"begin":"=>","beginCaptures":{"0":{"name":"storage.type.function.arrow.tsx"}},"end":"(?<!=>)(?<![\\\\&|])((?=[]),:;=>?{}]|//|^\\\\s*$)|((?<=\\\\S)(?=\\\\s*$)))","name":"meta.type.function.return.tsx","patterns":[{"include":"#type-function-return-type-core"}]}]},"type-function-return-type-core":{"patterns":[{"include":"#comment"},{"begin":"(?<==>)(?=\\\\s*\\\\{)","end":"(?<=})","patterns":[{"include":"#type-object"}]},{"include":"#type-predicate-operator"},{"include":"#type"}]},"type-infer":{"patterns":[{"captures":{"1":{"name":"keyword.operator.expression.infer.tsx"},"2":{"name":"entity.name.type.tsx"},"3":{"name":"keyword.operator.expression.extends.tsx"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(infer)\\\\s+([$_[:alpha:]][$_[:alnum:]]*)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))(?:\\\\s+(extends)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))?","name":"meta.type.infer.tsx"}]},"type-name":{"patterns":[{"begin":"([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))\\\\s*(<)","captures":{"1":{"name":"entity.name.type.module.tsx"},"2":{"name":"punctuation.accessor.tsx"},"3":{"name":"punctuation.accessor.optional.tsx"},"4":{"name":"meta.type.parameters.tsx punctuation.definition.typeparameters.begin.tsx"}},"contentName":"meta.type.parameters.tsx","end":"(>)","endCaptures":{"1":{"name":"meta.type.parameters.tsx punctuation.definition.typeparameters.end.tsx"}},"patterns":[{"include":"#type-arguments-body"}]},{"begin":"([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(<)","beginCaptures":{"1":{"name":"entity.name.type.tsx"},"2":{"name":"meta.type.parameters.tsx punctuation.definition.typeparameters.begin.tsx"}},"contentName":"meta.type.parameters.tsx","end":"(>)","endCaptures":{"1":{"name":"meta.type.parameters.tsx punctuation.definition.typeparameters.end.tsx"}},"patterns":[{"include":"#type-arguments-body"}]},{"captures":{"1":{"name":"entity.name.type.module.tsx"},"2":{"name":"punctuation.accessor.tsx"},"3":{"name":"punctuation.accessor.optional.tsx"}},"match":"([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))"},{"match":"[$_[:alpha:]][$_[:alnum:]]*","name":"entity.name.type.tsx"}]},"type-object":{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.definition.block.tsx"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.block.tsx"}},"name":"meta.object.type.tsx","patterns":[{"include":"#comment"},{"include":"#method-declaration"},{"include":"#indexer-declaration"},{"include":"#indexer-mapped-type-declaration"},{"include":"#field-declaration"},{"include":"#type-annotation"},{"begin":"\\\\.\\\\.\\\\.","beginCaptures":{"0":{"name":"keyword.operator.spread.tsx"}},"end":"(?=[,;}]|$)|(?<=})","patterns":[{"include":"#type"}]},{"include":"#punctuation-comma"},{"include":"#punctuation-semicolon"},{"include":"#type"}]},"type-operators":{"patterns":[{"include":"#typeof-operator"},{"include":"#type-infer"},{"begin":"([\\\\&|])(?=\\\\s*\\\\{)","beginCaptures":{"0":{"name":"keyword.operator.type.tsx"}},"end":"(?<=})","patterns":[{"include":"#type-object"}]},{"begin":"[\\\\&|]","beginCaptures":{"0":{"name":"keyword.operator.type.tsx"}},"end":"(?=\\\\S)"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))keyof(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.operator.expression.keyof.tsx"},{"match":"([:?])","name":"keyword.operator.ternary.tsx"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))import(?=\\\\s*\\\\()","name":"keyword.operator.expression.import.tsx"}]},"type-parameters":{"begin":"(<)","beginCaptures":{"1":{"name":"punctuation.definition.typeparameters.begin.tsx"}},"end":"(>)","endCaptures":{"1":{"name":"punctuation.definition.typeparameters.end.tsx"}},"name":"meta.type.parameters.tsx","patterns":[{"include":"#comment"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(extends|in|out|const)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"storage.modifier.tsx"},{"include":"#type"},{"include":"#punctuation-comma"},{"match":"(=)(?!>)","name":"keyword.operator.assignment.tsx"}]},"type-paren-or-function-parameters":{"begin":"\\\\(","beginCaptures":{"0":{"name":"meta.brace.round.tsx"}},"end":"\\\\)","endCaptures":{"0":{"name":"meta.brace.round.tsx"}},"name":"meta.type.paren.cover.tsx","patterns":[{"captures":{"1":{"name":"storage.modifier.tsx"},"2":{"name":"keyword.operator.rest.tsx"},"3":{"name":"entity.name.function.tsx variable.language.this.tsx"},"4":{"name":"entity.name.function.tsx"},"5":{"name":"keyword.operator.optional.tsx"}},"match":"(?:(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(public|private|protected|readonly)\\\\s+)?(?:(\\\\.\\\\.\\\\.)\\\\s*)?(?<![:=])(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(this)|([$_[:alpha:]][$_[:alnum:]]*))\\\\s*(\\\\??)(?=\\\\s*(:\\\\s*((<)|(\\\\(\\\\s*((\\\\))|(\\\\.\\\\.\\\\.)|([$_[:alnum:]]+\\\\s*(([,:=?])|(\\\\)\\\\s*=>)))))))|(:\\\\s*(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))Function(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))|(:\\\\s*((<\\\\s*)$|(\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))))"},{"captures":{"1":{"name":"storage.modifier.tsx"},"2":{"name":"keyword.operator.rest.tsx"},"3":{"name":"variable.parameter.tsx variable.language.this.tsx"},"4":{"name":"variable.parameter.tsx"},"5":{"name":"keyword.operator.optional.tsx"}},"match":"(?:(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(public|private|protected|readonly)\\\\s+)?(?:(\\\\.\\\\.\\\\.)\\\\s*)?(?<![:=])(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(this)|([$_[:alpha:]][$_[:alnum:]]*))\\\\s*(\\\\??)(?=:)"},{"include":"#type-annotation"},{"match":",","name":"punctuation.separator.parameter.tsx"},{"include":"#type"}]},"type-predicate-operator":{"patterns":[{"captures":{"1":{"name":"keyword.operator.type.asserts.tsx"},"2":{"name":"variable.parameter.tsx variable.language.this.tsx"},"3":{"name":"variable.parameter.tsx"},"4":{"name":"keyword.operator.expression.is.tsx"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(asserts)\\\\s+)?(?!asserts)(?:(this)|([$_[:alpha:]][$_[:alnum:]]*))\\\\s(is)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))"},{"captures":{"1":{"name":"keyword.operator.type.asserts.tsx"},"2":{"name":"variable.parameter.tsx variable.language.this.tsx"},"3":{"name":"variable.parameter.tsx"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(asserts)\\\\s+(?!is)(?:(this)|([$_[:alpha:]][$_[:alnum:]]*))(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))asserts(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.operator.type.asserts.tsx"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))is(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.operator.expression.is.tsx"}]},"type-primitive":{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(string|number|bigint|boolean|symbol|any|void|never|unknown)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"support.type.primitive.tsx"},"type-string":{"patterns":[{"include":"#qstring-single"},{"include":"#qstring-double"},{"include":"#template-type"}]},"type-tuple":{"begin":"\\\\[","beginCaptures":{"0":{"name":"meta.brace.square.tsx"}},"end":"]","endCaptures":{"0":{"name":"meta.brace.square.tsx"}},"name":"meta.type.tuple.tsx","patterns":[{"match":"\\\\.\\\\.\\\\.","name":"keyword.operator.rest.tsx"},{"captures":{"1":{"name":"entity.name.label.tsx"},"2":{"name":"keyword.operator.optional.tsx"},"3":{"name":"punctuation.separator.label.tsx"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(\\\\?)?\\\\s*(:)"},{"include":"#type"},{"include":"#punctuation-comma"}]},"typeof-operator":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))typeof(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","beginCaptures":{"0":{"name":"keyword.operator.expression.typeof.tsx"}},"end":"(?=[]\\\\&),:;=>?{|}]|(extends\\\\s+)|$|;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)","patterns":[{"include":"#type-arguments"},{"include":"#expression"}]},"undefined-literal":{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))undefined(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"constant.language.undefined.tsx"},"var-expr":{"patterns":[{"begin":"(?=(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(var|let)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))","end":"(?!(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(var|let)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))((?=^|[;}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+)|;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)|((?<!^let|[^$._[:alnum:]]let|^var|[^$._[:alnum:]]var)(?=\\\\s*$)))","name":"meta.var.expr.tsx","patterns":[{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(var|let)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\\\\s*","beginCaptures":{"1":{"name":"keyword.control.export.tsx"},"2":{"name":"storage.modifier.tsx"},"3":{"name":"storage.type.tsx"}},"end":"(?=\\\\S)"},{"include":"#destructuring-variable"},{"include":"#var-single-variable"},{"include":"#variable-initializer"},{"include":"#comment"},{"begin":"(,)\\\\s*(?=$|//)","beginCaptures":{"1":{"name":"punctuation.separator.comma.tsx"}},"end":"(?<!,)(((?=[;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+)|^\\\\s*$))|((?<=\\\\S)(?=\\\\s*$)))","patterns":[{"include":"#single-line-comment-consuming-line-ending"},{"include":"#comment"},{"include":"#destructuring-variable"},{"include":"#var-single-variable"},{"include":"#punctuation-comma"}]},{"include":"#punctuation-comma"}]},{"begin":"(?=(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(const(?!\\\\s+enum\\\\b))(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))","beginCaptures":{"1":{"name":"keyword.control.export.tsx"},"2":{"name":"storage.modifier.tsx"},"3":{"name":"storage.type.tsx"}},"end":"(?!(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(const(?!\\\\s+enum\\\\b))(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))((?=^|[;}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+)|;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)|((?<!(?:^|[^$._[:alnum:]])const)(?=\\\\s*$)))","name":"meta.var.expr.tsx","patterns":[{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(const(?!\\\\s+enum\\\\b))(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\\\\s*","beginCaptures":{"1":{"name":"keyword.control.export.tsx"},"2":{"name":"storage.modifier.tsx"},"3":{"name":"storage.type.tsx"}},"end":"(?=\\\\S)"},{"include":"#destructuring-const"},{"include":"#var-single-const"},{"include":"#variable-initializer"},{"include":"#comment"},{"begin":"(,)\\\\s*(?=$|//)","beginCaptures":{"1":{"name":"punctuation.separator.comma.tsx"}},"end":"(?<!,)(((?=[;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+)|^\\\\s*$))|((?<=\\\\S)(?=\\\\s*$)))","patterns":[{"include":"#single-line-comment-consuming-line-ending"},{"include":"#comment"},{"include":"#destructuring-const"},{"include":"#var-single-const"},{"include":"#punctuation-comma"}]},{"include":"#punctuation-comma"}]},{"begin":"(?=(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b\\\\b(using(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])|await\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b)\\\\b(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))","beginCaptures":{"1":{"name":"keyword.control.export.tsx"},"2":{"name":"storage.modifier.tsx"},"3":{"name":"storage.type.tsx"}},"end":"(?!(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b\\\\b(using(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])|await\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b)\\\\b(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))((?=[;}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+)|;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)|((?<!(?:^|[^$._[:alnum:]]|^await\\\\s+|[^$._[:alnum:]]await\\\\s+)using)(?=\\\\s*$)))","name":"meta.var.expr.tsx","patterns":[{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b\\\\b(using(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])|await\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b)\\\\b(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\\\\s*","beginCaptures":{"1":{"name":"keyword.control.export.tsx"},"2":{"name":"storage.modifier.tsx"},"3":{"name":"storage.type.tsx"}},"end":"(?=\\\\S)"},{"include":"#var-single-const"},{"include":"#variable-initializer"},{"include":"#comment"},{"begin":"(,)\\\\s*((?!\\\\S)|(?=//))","beginCaptures":{"1":{"name":"punctuation.separator.comma.tsx"}},"end":"(?<!,)(((?=[;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+)|^\\\\s*$))|((?<=\\\\S)(?=\\\\s*$)))","patterns":[{"include":"#single-line-comment-consuming-line-ending"},{"include":"#comment"},{"include":"#var-single-const"},{"include":"#punctuation-comma"}]},{"include":"#punctuation-comma"}]}]},"var-single-const":{"patterns":[{"begin":"([$_[:alpha:]][$_[:alnum:]]*)(?=\\\\s*(=\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|(\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|(<\\\\s*[$_[:alpha:]][$_[:alnum:]]*\\\\s+extends\\\\s*[^=>])|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\"'()\`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>)))))|(:\\\\s*((<)|(\\\\(\\\\s*((\\\\))|(\\\\.\\\\.\\\\.)|([$_[:alnum:]]+\\\\s*(([,:=?])|(\\\\)\\\\s*=>)))))))|(:\\\\s*(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))Function(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))|(:\\\\s*((<\\\\s*)$|(\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))))))|(:\\\\s*(=>|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(<[^<>]*>)|[^(),<=>])+=\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|(\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|(<\\\\s*[$_[:alpha:]][$_[:alnum:]]*\\\\s+extends\\\\s*[^=>])|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\"'()\`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>))))))","beginCaptures":{"1":{"name":"meta.definition.variable.tsx variable.other.constant.tsx entity.name.function.tsx"}},"end":"(?=$|^|[,;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+)|(;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b))","name":"meta.var-single-variable.expr.tsx","patterns":[{"include":"#var-single-variable-type-annotation"}]},{"begin":"([$_[:alpha:]][$_[:alnum:]]*)","beginCaptures":{"1":{"name":"meta.definition.variable.tsx variable.other.constant.tsx"}},"end":"(?=$|^|[,;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+)|(;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b))","name":"meta.var-single-variable.expr.tsx","patterns":[{"include":"#var-single-variable-type-annotation"}]}]},"var-single-variable":{"patterns":[{"begin":"([$_[:alpha:]][$_[:alnum:]]*)(!)?(?=\\\\s*(=\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|(\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|(<\\\\s*[$_[:alpha:]][$_[:alnum:]]*\\\\s+extends\\\\s*[^=>])|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\"'()\`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>)))))|(:\\\\s*((<)|(\\\\(\\\\s*((\\\\))|(\\\\.\\\\.\\\\.)|([$_[:alnum:]]+\\\\s*(([,:=?])|(\\\\)\\\\s*=>)))))))|(:\\\\s*(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))Function(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))|(:\\\\s*((<\\\\s*)$|(\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))))))|(:\\\\s*(=>|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(<[^<>]*>)|[^(),<=>])+=\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|(\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|(<\\\\s*[$_[:alpha:]][$_[:alnum:]]*\\\\s+extends\\\\s*[^=>])|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\"'()\`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>))))))","beginCaptures":{"1":{"name":"meta.definition.variable.tsx entity.name.function.tsx"},"2":{"name":"keyword.operator.definiteassignment.tsx"}},"end":"(?=$|^|[,;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+)|(;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b))","name":"meta.var-single-variable.expr.tsx","patterns":[{"include":"#var-single-variable-type-annotation"}]},{"begin":"(\\\\p{upper}[$_\\\\d[:upper:]]*)(?![$_[:alnum:]])(!)?","beginCaptures":{"1":{"name":"meta.definition.variable.tsx variable.other.constant.tsx"},"2":{"name":"keyword.operator.definiteassignment.tsx"}},"end":"(?=$|^|[,;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+)|(;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b))","name":"meta.var-single-variable.expr.tsx","patterns":[{"include":"#var-single-variable-type-annotation"}]},{"begin":"([$_[:alpha:]][$_[:alnum:]]*)(!)?","beginCaptures":{"1":{"name":"meta.definition.variable.tsx variable.other.readwrite.tsx"},"2":{"name":"keyword.operator.definiteassignment.tsx"}},"end":"(?=$|^|[,;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+)|(;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b))","name":"meta.var-single-variable.expr.tsx","patterns":[{"include":"#var-single-variable-type-annotation"}]}]},"var-single-variable-type-annotation":{"patterns":[{"include":"#type-annotation"},{"include":"#string"},{"include":"#comment"}]},"variable-initializer":{"patterns":[{"begin":"(?<![!=])(=)(?!=)(?=\\\\s*\\\\S)(?!\\\\s*.*=>\\\\s*$)","beginCaptures":{"1":{"name":"keyword.operator.assignment.tsx"}},"end":"(?=$|^|[]),;}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+))","patterns":[{"include":"#expression"}]},{"begin":"(?<![!=])(=)(?!=)","beginCaptures":{"1":{"name":"keyword.operator.assignment.tsx"}},"end":"(?=[]),;}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+))|(?=^\\\\s*$)|(?<![-\\\\&*+/|])(?<=\\\\S)(?<!=)(?=\\\\s*$)","patterns":[{"include":"#expression"}]}]}},"scopeName":"source.tsx"}`))
  ];
  Us = [
    Object.freeze(JSON.parse(`{"displayName":"Rust","name":"rust","patterns":[{"begin":"(<)(\\\\[)","beginCaptures":{"1":{"name":"punctuation.brackets.angle.rust"},"2":{"name":"punctuation.brackets.square.rust"}},"end":">","endCaptures":{"0":{"name":"punctuation.brackets.angle.rust"}},"patterns":[{"include":"#block-comments"},{"include":"#comments"},{"include":"#gtypes"},{"include":"#lvariables"},{"include":"#lifetimes"},{"include":"#punctuation"},{"include":"#types"}]},{"captures":{"1":{"name":"keyword.operator.macro.dollar.rust"},"3":{"name":"keyword.other.crate.rust"},"4":{"name":"entity.name.type.metavariable.rust"},"6":{"name":"keyword.operator.key-value.rust"},"7":{"name":"variable.other.metavariable.specifier.rust"}},"match":"(\\\\$)((crate)|([A-Z]\\\\w*))(\\\\s*(:)\\\\s*(block|expr(?:_2021)?|ident|item|lifetime|literal|meta|pat(?:_param)?|path|stmt|tt|ty|vis)\\\\b)?","name":"meta.macro.metavariable.type.rust","patterns":[{"include":"#keywords"}]},{"captures":{"1":{"name":"keyword.operator.macro.dollar.rust"},"2":{"name":"variable.other.metavariable.name.rust"},"4":{"name":"keyword.operator.key-value.rust"},"5":{"name":"variable.other.metavariable.specifier.rust"}},"match":"(\\\\$)([a-z]\\\\w*)(\\\\s*(:)\\\\s*(block|expr(?:_2021)?|ident|item|lifetime|literal|meta|pat(?:_param)?|path|stmt|tt|ty|vis)\\\\b)?","name":"meta.macro.metavariable.rust","patterns":[{"include":"#keywords"}]},{"captures":{"1":{"name":"entity.name.function.macro.rules.rust"},"3":{"name":"entity.name.function.macro.rust"},"4":{"name":"entity.name.type.macro.rust"},"5":{"name":"punctuation.brackets.curly.rust"}},"match":"\\\\b(macro_rules!)\\\\s+(([0-9_a-z]+)|([A-Z][0-9_a-z]*))\\\\s+(\\\\{)","name":"meta.macro.rules.rust"},{"captures":{"1":{"name":"storage.type.rust"},"2":{"name":"entity.name.module.rust"}},"match":"(mod)\\\\s+((?:r#(?!crate|[Ss]elf|super))?[a-z][0-9A-Z_a-z]*)"},{"begin":"\\\\b(extern)\\\\s+(crate)","beginCaptures":{"1":{"name":"storage.type.rust"},"2":{"name":"keyword.other.crate.rust"}},"end":";","endCaptures":{"0":{"name":"punctuation.semi.rust"}},"name":"meta.import.rust","patterns":[{"include":"#block-comments"},{"include":"#comments"},{"include":"#keywords"},{"include":"#punctuation"}]},{"begin":"\\\\b(use)\\\\s","beginCaptures":{"1":{"name":"keyword.other.rust"}},"end":";","endCaptures":{"0":{"name":"punctuation.semi.rust"}},"name":"meta.use.rust","patterns":[{"include":"#block-comments"},{"include":"#comments"},{"include":"#keywords"},{"include":"#namespaces"},{"include":"#punctuation"},{"include":"#types"},{"include":"#lvariables"}]},{"include":"#block-comments"},{"include":"#comments"},{"include":"#attributes"},{"include":"#lvariables"},{"include":"#constants"},{"include":"#gtypes"},{"include":"#functions"},{"include":"#types"},{"include":"#keywords"},{"include":"#lifetimes"},{"include":"#macros"},{"include":"#namespaces"},{"include":"#punctuation"},{"include":"#strings"},{"include":"#variables"}],"repository":{"attributes":{"begin":"(#)(!?)(\\\\[)","beginCaptures":{"1":{"name":"punctuation.definition.attribute.rust"},"3":{"name":"punctuation.brackets.attribute.rust"}},"end":"]","endCaptures":{"0":{"name":"punctuation.brackets.attribute.rust"}},"name":"meta.attribute.rust","patterns":[{"include":"#block-comments"},{"include":"#comments"},{"include":"#keywords"},{"include":"#lifetimes"},{"include":"#punctuation"},{"include":"#strings"},{"include":"#gtypes"},{"include":"#types"}]},"block-comments":{"patterns":[{"match":"/\\\\*\\\\*/","name":"comment.block.rust"},{"begin":"/\\\\*\\\\*","end":"\\\\*/","name":"comment.block.documentation.rust","patterns":[{"include":"#block-comments"}]},{"begin":"/\\\\*(?!\\\\*)","end":"\\\\*/","name":"comment.block.rust","patterns":[{"include":"#block-comments"}]}]},"comments":{"patterns":[{"captures":{"1":{"name":"punctuation.definition.comment.rust"}},"match":"(///).*$","name":"comment.line.documentation.rust"},{"captures":{"1":{"name":"punctuation.definition.comment.rust"}},"match":"(//).*$","name":"comment.line.double-slash.rust"}]},"constants":{"patterns":[{"match":"\\\\b[A-Z]{2}[0-9A-Z_]*\\\\b","name":"constant.other.caps.rust"},{"captures":{"1":{"name":"storage.type.rust"},"2":{"name":"constant.other.caps.rust"}},"match":"\\\\b(const)\\\\s+([A-Z][0-9A-Z_a-z]*)\\\\b"},{"captures":{"1":{"name":"punctuation.separator.dot.decimal.rust"},"2":{"name":"keyword.operator.exponent.rust"},"3":{"name":"keyword.operator.exponent.sign.rust"},"4":{"name":"constant.numeric.decimal.exponent.mantissa.rust"},"5":{"name":"entity.name.type.numeric.rust"}},"match":"\\\\b\\\\d[_\\\\d]*(\\\\.?)[_\\\\d]*(?:([Ee])([-+]?)([_\\\\d]+))?(f32|f64|i128|i16|i32|i64|i8|isize|u128|u16|u32|u64|u8|usize)?\\\\b","name":"constant.numeric.decimal.rust"},{"captures":{"1":{"name":"entity.name.type.numeric.rust"}},"match":"\\\\b0x[A-F_a-f\\\\d]+(i128|i16|i32|i64|i8|isize|u128|u16|u32|u64|u8|usize)?\\\\b","name":"constant.numeric.hex.rust"},{"captures":{"1":{"name":"entity.name.type.numeric.rust"}},"match":"\\\\b0o[0-7_]+(i128|i16|i32|i64|i8|isize|u128|u16|u32|u64|u8|usize)?\\\\b","name":"constant.numeric.oct.rust"},{"captures":{"1":{"name":"entity.name.type.numeric.rust"}},"match":"\\\\b0b[01_]+(i128|i16|i32|i64|i8|isize|u128|u16|u32|u64|u8|usize)?\\\\b","name":"constant.numeric.bin.rust"},{"match":"\\\\b(true|false)\\\\b","name":"constant.language.bool.rust"}]},"escapes":{"captures":{"1":{"name":"constant.character.escape.backslash.rust"},"2":{"name":"constant.character.escape.bit.rust"},"3":{"name":"constant.character.escape.unicode.rust"},"4":{"name":"constant.character.escape.unicode.punctuation.rust"},"5":{"name":"constant.character.escape.unicode.punctuation.rust"}},"match":"(\\\\\\\\)(?:(x[0-7][A-Fa-f\\\\d])|(u(\\\\{)[A-Fa-f\\\\d]{4,6}(}))|.)","name":"constant.character.escape.rust"},"functions":{"patterns":[{"captures":{"1":{"name":"keyword.other.rust"},"2":{"name":"punctuation.brackets.round.rust"}},"match":"\\\\b(pub)(\\\\()"},{"begin":"\\\\b(fn)\\\\s+((?:r#(?!crate|[Ss]elf|super))?[0-9A-Z_a-z]+)((\\\\()|(<))","beginCaptures":{"1":{"name":"keyword.other.fn.rust"},"2":{"name":"entity.name.function.rust"},"4":{"name":"punctuation.brackets.round.rust"},"5":{"name":"punctuation.brackets.angle.rust"}},"end":"(\\\\{)|(;)","endCaptures":{"1":{"name":"punctuation.brackets.curly.rust"},"2":{"name":"punctuation.semi.rust"}},"name":"meta.function.definition.rust","patterns":[{"include":"#block-comments"},{"include":"#comments"},{"include":"#keywords"},{"include":"#lvariables"},{"include":"#constants"},{"include":"#gtypes"},{"include":"#functions"},{"include":"#lifetimes"},{"include":"#macros"},{"include":"#namespaces"},{"include":"#punctuation"},{"include":"#strings"},{"include":"#types"},{"include":"#variables"}]},{"begin":"((?:r#(?!crate|[Ss]elf|super))?[0-9A-Z_a-z]+)(\\\\()","beginCaptures":{"1":{"name":"entity.name.function.rust"},"2":{"name":"punctuation.brackets.round.rust"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.brackets.round.rust"}},"name":"meta.function.call.rust","patterns":[{"include":"#block-comments"},{"include":"#comments"},{"include":"#attributes"},{"include":"#keywords"},{"include":"#lvariables"},{"include":"#constants"},{"include":"#gtypes"},{"include":"#functions"},{"include":"#lifetimes"},{"include":"#macros"},{"include":"#namespaces"},{"include":"#punctuation"},{"include":"#strings"},{"include":"#types"},{"include":"#variables"}]},{"begin":"((?:r#(?!crate|[Ss]elf|super))?[0-9A-Z_a-z]+)(?=::<.*>\\\\()","beginCaptures":{"1":{"name":"entity.name.function.rust"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.brackets.round.rust"}},"name":"meta.function.call.rust","patterns":[{"include":"#block-comments"},{"include":"#comments"},{"include":"#attributes"},{"include":"#keywords"},{"include":"#lvariables"},{"include":"#constants"},{"include":"#gtypes"},{"include":"#functions"},{"include":"#lifetimes"},{"include":"#macros"},{"include":"#namespaces"},{"include":"#punctuation"},{"include":"#strings"},{"include":"#types"},{"include":"#variables"}]}]},"gtypes":{"patterns":[{"match":"\\\\b(Some|None)\\\\b","name":"entity.name.type.option.rust"},{"match":"\\\\b(Ok|Err)\\\\b","name":"entity.name.type.result.rust"}]},"interpolations":{"captures":{"1":{"name":"punctuation.definition.interpolation.rust"},"2":{"name":"punctuation.definition.interpolation.rust"}},"match":"(\\\\{)[^\\"{}]*(})","name":"meta.interpolation.rust"},"keywords":{"patterns":[{"match":"\\\\b(await|break|continue|do|else|for|if|loop|match|return|try|while|yield)\\\\b","name":"keyword.control.rust"},{"match":"\\\\b(extern|let|macro|mod)\\\\b","name":"keyword.other.rust storage.type.rust"},{"match":"\\\\b(const)\\\\b","name":"storage.modifier.rust"},{"match":"\\\\b(type)\\\\b","name":"keyword.declaration.type.rust storage.type.rust"},{"match":"\\\\b(enum)\\\\b","name":"keyword.declaration.enum.rust storage.type.rust"},{"match":"\\\\b(trait)\\\\b","name":"keyword.declaration.trait.rust storage.type.rust"},{"match":"\\\\b(struct)\\\\b","name":"keyword.declaration.struct.rust storage.type.rust"},{"match":"\\\\b(abstract|static)\\\\b","name":"storage.modifier.rust"},{"match":"\\\\b(as|async|become|box|dyn|move|final|gen|impl|in|override|priv|pub|ref|typeof|union|unsafe|unsized|use|virtual|where)\\\\b","name":"keyword.other.rust"},{"match":"\\\\bfn\\\\b","name":"keyword.other.fn.rust"},{"match":"\\\\bcrate\\\\b","name":"keyword.other.crate.rust"},{"match":"\\\\bmut\\\\b","name":"storage.modifier.mut.rust"},{"match":"([\\\\^|]|\\\\|\\\\||&&|<<|>>|!)(?!=)","name":"keyword.operator.logical.rust"},{"match":"&(?![\\\\&=])","name":"keyword.operator.borrow.and.rust"},{"match":"((?:[-%\\\\&*+/^|]|<<|>>)=)","name":"keyword.operator.assignment.rust"},{"match":"(?<![<>])=(?![=>])","name":"keyword.operator.assignment.equal.rust"},{"match":"(=(=)?(?!>)|!=|<=|(?<!=)>=)","name":"keyword.operator.comparison.rust"},{"match":"(([%+]|(\\\\*(?!\\\\w)))(?!=))|(-(?!>))|(/(?!/))","name":"keyword.operator.math.rust"},{"captures":{"1":{"name":"punctuation.brackets.round.rust"},"2":{"name":"punctuation.brackets.square.rust"},"3":{"name":"punctuation.brackets.curly.rust"},"4":{"name":"keyword.operator.comparison.rust"},"5":{"name":"punctuation.brackets.round.rust"},"6":{"name":"punctuation.brackets.square.rust"},"7":{"name":"punctuation.brackets.curly.rust"}},"match":"(?:\\\\b|(?:(\\\\))|(])|(})))[\\\\t ]+([<>])[\\\\t ]+(?:\\\\b|(?:(\\\\()|(\\\\[)|(\\\\{)))"},{"match":"::","name":"keyword.operator.namespace.rust"},{"captures":{"1":{"name":"keyword.operator.dereference.rust"}},"match":"(\\\\*)(?=\\\\w+)"},{"match":"@","name":"keyword.operator.subpattern.rust"},{"match":"\\\\.(?!\\\\.)","name":"keyword.operator.access.dot.rust"},{"match":"\\\\.{2}([.=])?","name":"keyword.operator.range.rust"},{"match":":(?!:)","name":"keyword.operator.key-value.rust"},{"match":"->|<-","name":"keyword.operator.arrow.skinny.rust"},{"match":"=>","name":"keyword.operator.arrow.fat.rust"},{"match":"\\\\$","name":"keyword.operator.macro.dollar.rust"},{"match":"\\\\?","name":"keyword.operator.question.rust"}]},"lifetimes":{"patterns":[{"captures":{"1":{"name":"punctuation.definition.lifetime.rust"},"2":{"name":"entity.name.type.lifetime.rust"}},"match":"(')([A-Z_a-z][0-9A-Z_a-z]*)(?!')\\\\b"},{"captures":{"1":{"name":"keyword.operator.borrow.rust"},"2":{"name":"punctuation.definition.lifetime.rust"},"3":{"name":"entity.name.type.lifetime.rust"}},"match":"(&)(')([A-Z_a-z][0-9A-Z_a-z]*)(?!')\\\\b"}]},"lvariables":{"patterns":[{"match":"\\\\b[Ss]elf\\\\b","name":"variable.language.self.rust"},{"match":"\\\\bsuper\\\\b","name":"variable.language.super.rust"}]},"macros":{"patterns":[{"captures":{"2":{"name":"entity.name.function.macro.rust"},"3":{"name":"entity.name.type.macro.rust"}},"match":"(([_a-z][0-9A-Z_a-z]*!)|([A-Z_][0-9A-Z_a-z]*!))","name":"meta.macro.rust"}]},"namespaces":{"patterns":[{"captures":{"1":{"name":"entity.name.namespace.rust"},"2":{"name":"keyword.operator.namespace.rust"}},"match":"(?<![0-9A-Z_a-z])([0-9A-Z_a-z]+)((?<!s(?:uper|elf))::)"}]},"punctuation":{"patterns":[{"match":",","name":"punctuation.comma.rust"},{"match":"[{}]","name":"punctuation.brackets.curly.rust"},{"match":"[()]","name":"punctuation.brackets.round.rust"},{"match":";","name":"punctuation.semi.rust"},{"match":"[]\\\\[]","name":"punctuation.brackets.square.rust"},{"match":"(?<!=)[<>]","name":"punctuation.brackets.angle.rust"}]},"strings":{"patterns":[{"begin":"(b?)(\\")","beginCaptures":{"1":{"name":"string.quoted.byte.raw.rust"},"2":{"name":"punctuation.definition.string.rust"}},"end":"\\"","endCaptures":{"0":{"name":"punctuation.definition.string.rust"}},"name":"string.quoted.double.rust","patterns":[{"include":"#escapes"},{"include":"#interpolations"}]},{"begin":"(b?r)(#*)(\\")","beginCaptures":{"1":{"name":"string.quoted.byte.raw.rust"},"2":{"name":"punctuation.definition.string.raw.rust"},"3":{"name":"punctuation.definition.string.rust"}},"end":"(\\")(\\\\2)","endCaptures":{"1":{"name":"punctuation.definition.string.rust"},"2":{"name":"punctuation.definition.string.raw.rust"}},"name":"string.quoted.double.rust"},{"begin":"(b)?(')","beginCaptures":{"1":{"name":"string.quoted.byte.raw.rust"},"2":{"name":"punctuation.definition.char.rust"}},"end":"'","endCaptures":{"0":{"name":"punctuation.definition.char.rust"}},"name":"string.quoted.single.char.rust","patterns":[{"include":"#escapes"}]}]},"types":{"patterns":[{"captures":{"1":{"name":"entity.name.type.numeric.rust"}},"match":"(?<![A-Za-z])(f32|f64|i128|i16|i32|i64|i8|isize|u128|u16|u32|u64|u8|usize)\\\\b"},{"begin":"\\\\b(_?[A-Z][0-9A-Z_a-z]*)(<)","beginCaptures":{"1":{"name":"entity.name.type.rust"},"2":{"name":"punctuation.brackets.angle.rust"}},"end":">","endCaptures":{"0":{"name":"punctuation.brackets.angle.rust"}},"patterns":[{"include":"#block-comments"},{"include":"#comments"},{"include":"#keywords"},{"include":"#lvariables"},{"include":"#lifetimes"},{"include":"#punctuation"},{"include":"#types"},{"include":"#variables"}]},{"match":"\\\\b(bool|char|str)\\\\b","name":"entity.name.type.primitive.rust"},{"captures":{"1":{"name":"keyword.declaration.trait.rust storage.type.rust"},"2":{"name":"entity.name.type.trait.rust"}},"match":"\\\\b(trait)\\\\s+(_?[A-Z][0-9A-Z_a-z]*)\\\\b"},{"captures":{"1":{"name":"keyword.declaration.struct.rust storage.type.rust"},"2":{"name":"entity.name.type.struct.rust"}},"match":"\\\\b(struct)\\\\s+(_?[A-Z][0-9A-Z_a-z]*)\\\\b"},{"captures":{"1":{"name":"keyword.declaration.enum.rust storage.type.rust"},"2":{"name":"entity.name.type.enum.rust"}},"match":"\\\\b(enum)\\\\s+(_?[A-Z][0-9A-Z_a-z]*)\\\\b"},{"captures":{"1":{"name":"keyword.declaration.type.rust storage.type.rust"},"2":{"name":"entity.name.type.declaration.rust"}},"match":"\\\\b(type)\\\\s+(_?[A-Z][0-9A-Z_a-z]*)\\\\b"},{"match":"\\\\b_?[A-Z][0-9A-Z_a-z]*\\\\b(?!!)","name":"entity.name.type.rust"}]},"variables":{"patterns":[{"match":"\\\\b(?<!(?<!\\\\.)\\\\.)(?:r#(?!(crate|[Ss]elf|super)))?[0-9_a-z]+\\\\b","name":"variable.other.rust"}]}},"scopeName":"source.rust","aliases":["rs"]}`))
  ];
  Ws = [
    Object.freeze(JSON.parse(`{"displayName":"CSS","name":"css","patterns":[{"include":"#comment-block"},{"include":"#escapes"},{"include":"#combinators"},{"include":"#selector"},{"include":"#at-rules"},{"include":"#rule-list"}],"repository":{"at-rules":{"patterns":[{"begin":"\\\\A\\\\uFEFF?(?i:(?=\\\\s*@charset\\\\b))","end":";|(?=$)","endCaptures":{"0":{"name":"punctuation.terminator.rule.css"}},"name":"meta.at-rule.charset.css","patterns":[{"captures":{"1":{"name":"invalid.illegal.not-lowercase.charset.css"},"2":{"name":"invalid.illegal.leading-whitespace.charset.css"},"3":{"name":"invalid.illegal.no-whitespace.charset.css"},"4":{"name":"invalid.illegal.whitespace.charset.css"},"5":{"name":"invalid.illegal.not-double-quoted.charset.css"},"6":{"name":"invalid.illegal.unclosed-string.charset.css"},"7":{"name":"invalid.illegal.unexpected-characters.charset.css"}},"match":"\\\\G((?!@charset)@\\\\w+)|\\\\G(\\\\s+)|(@charset\\\\S[^;]*)|(?<=@charset)( {2,}|\\\\t+)|(?<=@charset )([^\\";]+)|(\\"[^\\"]+)$|(?<=\\")([^;]+)"},{"captures":{"1":{"name":"keyword.control.at-rule.charset.css"},"2":{"name":"punctuation.definition.keyword.css"}},"match":"((@)charset)(?=\\\\s)"},{"begin":"\\"","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.css"}},"end":"\\"|$","endCaptures":{"0":{"name":"punctuation.definition.string.end.css"}},"name":"string.quoted.double.css","patterns":[{"begin":"(?:\\\\G|^)(?=[^\\"]+$)","end":"$","name":"invalid.illegal.unclosed.string.css"}]}]},{"begin":"(?i)((@)import)(?:\\\\s+|$|(?=[\\"']|/\\\\*))","beginCaptures":{"1":{"name":"keyword.control.at-rule.import.css"},"2":{"name":"punctuation.definition.keyword.css"}},"end":";","endCaptures":{"0":{"name":"punctuation.terminator.rule.css"}},"name":"meta.at-rule.import.css","patterns":[{"begin":"\\\\G\\\\s*(?=/\\\\*)","end":"(?<=\\\\*/)\\\\s*","patterns":[{"include":"#comment-block"}]},{"include":"#string"},{"include":"#url"},{"include":"#media-query-list"}]},{"begin":"(?i)((@)font-face)(?=\\\\s*|\\\\{|/\\\\*|$)","beginCaptures":{"1":{"name":"keyword.control.at-rule.font-face.css"},"2":{"name":"punctuation.definition.keyword.css"}},"end":"(?!\\\\G)","name":"meta.at-rule.font-face.css","patterns":[{"include":"#comment-block"},{"include":"#escapes"},{"include":"#rule-list"}]},{"begin":"(?i)(@)page(?=[:{\\\\s]|/\\\\*|$)","captures":{"0":{"name":"keyword.control.at-rule.page.css"},"1":{"name":"punctuation.definition.keyword.css"}},"end":"(?=\\\\s*($|[:;{]))","name":"meta.at-rule.page.css","patterns":[{"include":"#rule-list"}]},{"begin":"(?i)(?=@media([(\\\\s]|/\\\\*|$))","end":"(?<=})(?!\\\\G)","patterns":[{"begin":"(?i)\\\\G(@)media","beginCaptures":{"0":{"name":"keyword.control.at-rule.media.css"},"1":{"name":"punctuation.definition.keyword.css"}},"end":"(?=\\\\s*[;{])","name":"meta.at-rule.media.header.css","patterns":[{"include":"#media-query-list"}]},{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.section.media.begin.bracket.curly.css"}},"end":"}","endCaptures":{"0":{"name":"punctuation.section.media.end.bracket.curly.css"}},"name":"meta.at-rule.media.body.css","patterns":[{"include":"$self"}]}]},{"begin":"(?i)(?=@counter-style([\\"';{\\\\s]|/\\\\*|$))","end":"(?<=})(?!\\\\G)","patterns":[{"begin":"(?i)\\\\G(@)counter-style","beginCaptures":{"0":{"name":"keyword.control.at-rule.counter-style.css"},"1":{"name":"punctuation.definition.keyword.css"}},"end":"(?=\\\\s*\\\\{)","name":"meta.at-rule.counter-style.header.css","patterns":[{"include":"#comment-block"},{"include":"#escapes"},{"captures":{"0":{"patterns":[{"include":"#escapes"}]}},"match":"[-A-Z_a-z[^\\\\x00-\\\\x7F]](?:[-0-9A-Z_a-z[^\\\\x00-\\\\x7F]]|\\\\\\\\(?:\\\\h{1,6}|.))*","name":"variable.parameter.style-name.css"}]},{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.section.property-list.begin.bracket.curly.css"}},"end":"}","endCaptures":{"0":{"name":"punctuation.section.property-list.end.bracket.curly.css"}},"name":"meta.at-rule.counter-style.body.css","patterns":[{"include":"#comment-block"},{"include":"#escapes"},{"include":"#rule-list-innards"}]}]},{"begin":"(?i)(?=@document([\\"';{\\\\s]|/\\\\*|$))","end":"(?<=})(?!\\\\G)","patterns":[{"begin":"(?i)\\\\G(@)document","beginCaptures":{"0":{"name":"keyword.control.at-rule.document.css"},"1":{"name":"punctuation.definition.keyword.css"}},"end":"(?=\\\\s*[;{])","name":"meta.at-rule.document.header.css","patterns":[{"begin":"(?i)(?<![-\\\\w])(url-prefix|domain|regexp)(\\\\()","beginCaptures":{"1":{"name":"support.function.document-rule.css"},"2":{"name":"punctuation.section.function.begin.bracket.round.css"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.section.function.end.bracket.round.css"}},"name":"meta.function.document-rule.css","patterns":[{"include":"#string"},{"include":"#comment-block"},{"include":"#escapes"},{"match":"[^\\"')\\\\s]+","name":"variable.parameter.document-rule.css"}]},{"include":"#url"},{"include":"#commas"},{"include":"#comment-block"},{"include":"#escapes"}]},{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.section.document.begin.bracket.curly.css"}},"end":"}","endCaptures":{"0":{"name":"punctuation.section.document.end.bracket.curly.css"}},"name":"meta.at-rule.document.body.css","patterns":[{"include":"$self"}]}]},{"begin":"(?i)(?=@(?:-(?:webkit|moz|o|ms)-)?keyframes([\\"';{\\\\s]|/\\\\*|$))","end":"(?<=})(?!\\\\G)","patterns":[{"begin":"(?i)\\\\G(@)(?:-(?:webkit|moz|o|ms)-)?keyframes","beginCaptures":{"0":{"name":"keyword.control.at-rule.keyframes.css"},"1":{"name":"punctuation.definition.keyword.css"}},"end":"(?=\\\\s*\\\\{)","name":"meta.at-rule.keyframes.header.css","patterns":[{"include":"#comment-block"},{"include":"#escapes"},{"captures":{"0":{"patterns":[{"include":"#escapes"}]}},"match":"[-A-Z_a-z[^\\\\x00-\\\\x7F]](?:[-0-9A-Z_a-z[^\\\\x00-\\\\x7F]]|\\\\\\\\(?:\\\\h{1,6}|.))*","name":"variable.parameter.keyframe-list.css"}]},{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.section.keyframes.begin.bracket.curly.css"}},"end":"}","endCaptures":{"0":{"name":"punctuation.section.keyframes.end.bracket.curly.css"}},"name":"meta.at-rule.keyframes.body.css","patterns":[{"include":"#comment-block"},{"include":"#escapes"},{"captures":{"1":{"name":"entity.other.keyframe-offset.css"},"2":{"name":"entity.other.keyframe-offset.percentage.css"}},"match":"(?i)(?<![-\\\\w])(from|to)(?![-\\\\w])|([-+]?(?:\\\\d+(?:\\\\.\\\\d+)?|\\\\.\\\\d+)%)"},{"include":"#rule-list"}]}]},{"begin":"(?i)(?=@supports([(\\\\s]|/\\\\*|$))","end":"(?<=})(?!\\\\G)|(?=;)","patterns":[{"begin":"(?i)\\\\G(@)supports","beginCaptures":{"0":{"name":"keyword.control.at-rule.supports.css"},"1":{"name":"punctuation.definition.keyword.css"}},"end":"(?=\\\\s*[;{])","name":"meta.at-rule.supports.header.css","patterns":[{"include":"#feature-query-operators"},{"include":"#feature-query"},{"include":"#comment-block"},{"include":"#escapes"}]},{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.section.supports.begin.bracket.curly.css"}},"end":"}","endCaptures":{"0":{"name":"punctuation.section.supports.end.bracket.curly.css"}},"name":"meta.at-rule.supports.body.css","patterns":[{"include":"$self"}]}]},{"begin":"(?i)((@)(-(ms|o)-)?viewport)(?=[\\"';{\\\\s]|/\\\\*|$)","beginCaptures":{"1":{"name":"keyword.control.at-rule.viewport.css"},"2":{"name":"punctuation.definition.keyword.css"}},"end":"(?=\\\\s*[;@{])","name":"meta.at-rule.viewport.css","patterns":[{"include":"#comment-block"},{"include":"#escapes"}]},{"begin":"(?i)((@)font-feature-values)(?=[\\"';{\\\\s]|/\\\\*|$)\\\\s*","beginCaptures":{"1":{"name":"keyword.control.at-rule.font-feature-values.css"},"2":{"name":"punctuation.definition.keyword.css"}},"contentName":"variable.parameter.font-name.css","end":"(?=\\\\s*[;@{])","name":"meta.at-rule.font-features.css","patterns":[{"include":"#comment-block"},{"include":"#escapes"}]},{"include":"#font-features"},{"begin":"(?i)((@)namespace)(?=[\\"';\\\\s]|/\\\\*|$)","beginCaptures":{"1":{"name":"keyword.control.at-rule.namespace.css"},"2":{"name":"punctuation.definition.keyword.css"}},"end":";|(?=[@{])","endCaptures":{"0":{"name":"punctuation.terminator.rule.css"}},"name":"meta.at-rule.namespace.css","patterns":[{"include":"#url"},{"captures":{"1":{"patterns":[{"include":"#comment-block"}]},"2":{"name":"entity.name.function.namespace-prefix.css","patterns":[{"include":"#escapes"}]}},"match":"(?i)(?:\\\\G|^|(?<=\\\\s))(?=(?<=\\\\s|^)[-A-Z_a-z[^\\\\x00-\\\\x7F]]|\\\\s*/\\\\*(?:[^*]|\\\\*[^/])*\\\\*/)(.*?)([-A-Z_a-z[^\\\\x00-\\\\x7F]](?:[-0-9A-Z_a-z[^\\\\x00-\\\\x7F]]|\\\\\\\\(?:\\\\h{1,6}|.))*)"},{"include":"#comment-block"},{"include":"#escapes"},{"include":"#string"}]},{"begin":"(?i)(?=@[-\\\\w]+[^;]+;s*$)","end":"(?<=;)(?!\\\\G)","patterns":[{"begin":"(?i)\\\\G(@)[-\\\\w]+","beginCaptures":{"0":{"name":"keyword.control.at-rule.css"},"1":{"name":"punctuation.definition.keyword.css"}},"end":";","endCaptures":{"0":{"name":"punctuation.terminator.rule.css"}},"name":"meta.at-rule.header.css"}]},{"begin":"(?i)(?=@[-\\\\w]+([({\\\\s]|/\\\\*|$))","end":"(?<=})(?!\\\\G)","patterns":[{"begin":"(?i)\\\\G(@)[-\\\\w]+","beginCaptures":{"0":{"name":"keyword.control.at-rule.css"},"1":{"name":"punctuation.definition.keyword.css"}},"end":"(?=\\\\s*[;{])","name":"meta.at-rule.header.css"},{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.section.begin.bracket.curly.css"}},"end":"}","endCaptures":{"0":{"name":"punctuation.section.end.bracket.curly.css"}},"name":"meta.at-rule.body.css","patterns":[{"include":"$self"}]}]}]},"color-keywords":{"patterns":[{"match":"(?i)(?<![-\\\\w])(aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow)(?![-\\\\w])","name":"support.constant.color.w3c-standard-color-name.css"},{"match":"(?i)(?<![-\\\\w])(aliceblue|antiquewhite|aquamarine|azure|beige|bisque|blanchedalmond|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|gainsboro|ghostwhite|gold|goldenrod|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|limegreen|linen|magenta|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|oldlace|olivedrab|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|rebeccapurple|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|thistle|tomato|transparent|turquoise|violet|wheat|whitesmoke|yellowgreen)(?![-\\\\w])","name":"support.constant.color.w3c-extended-color-name.css"},{"match":"(?i)(?<![-\\\\w])currentColor(?![-\\\\w])","name":"support.constant.color.current.css"},{"match":"(?i)(?<![-\\\\w])(ActiveBorder|ActiveCaption|AppWorkspace|Background|ButtonFace|ButtonHighlight|ButtonShadow|ButtonText|CaptionText|GrayText|Highlight|HighlightText|InactiveBorder|InactiveCaption|InactiveCaptionText|InfoBackground|InfoText|Menu|MenuText|Scrollbar|ThreeDDarkShadow|ThreeDFace|ThreeDHighlight|ThreeDLightShadow|ThreeDShadow|Window|WindowFrame|WindowText)(?![-\\\\w])","name":"invalid.deprecated.color.system.css"}]},"combinators":{"patterns":[{"match":"/deep/|>>>","name":"invalid.deprecated.combinator.css"},{"match":">>|[+>~]","name":"keyword.operator.combinator.css"}]},"commas":{"match":",","name":"punctuation.separator.list.comma.css"},"comment-block":{"begin":"/\\\\*","beginCaptures":{"0":{"name":"punctuation.definition.comment.begin.css"}},"end":"\\\\*/","endCaptures":{"0":{"name":"punctuation.definition.comment.end.css"}},"name":"comment.block.css"},"escapes":{"patterns":[{"match":"\\\\\\\\\\\\h{1,6}","name":"constant.character.escape.codepoint.css"},{"begin":"\\\\\\\\$\\\\s*","end":"^(?<!\\\\G)","name":"constant.character.escape.newline.css"},{"match":"\\\\\\\\.","name":"constant.character.escape.css"}]},"feature-query":{"begin":"\\\\(","beginCaptures":{"0":{"name":"punctuation.definition.condition.begin.bracket.round.css"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.definition.condition.end.bracket.round.css"}},"name":"meta.feature-query.css","patterns":[{"include":"#feature-query-operators"},{"include":"#feature-query"}]},"feature-query-operators":{"patterns":[{"match":"(?i)(?<=[()\\\\s]|^|\\\\*/)(and|not|or)(?=[()\\\\s]|/\\\\*|$)","name":"keyword.operator.logical.feature.$1.css"},{"include":"#rule-list-innards"}]},"font-features":{"begin":"(?i)((@)(annotation|character-variant|ornaments|styleset|stylistic|swash))(?=[\\"';@{\\\\s]|/\\\\*|$)","beginCaptures":{"1":{"name":"keyword.control.at-rule.\${3:/downcase}.css"},"2":{"name":"punctuation.definition.keyword.css"}},"end":"(?<=})","name":"meta.at-rule.\${3:/downcase}.css","patterns":[{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.section.property-list.begin.bracket.curly.css"}},"end":"}","endCaptures":{"0":{"name":"punctuation.section.property-list.end.bracket.curly.css"}},"name":"meta.property-list.font-feature.css","patterns":[{"captures":{"0":{"patterns":[{"include":"#escapes"}]}},"match":"[-A-Z_a-z[^\\\\x00-\\\\x7F]](?:[-0-9A-Z_a-z[^\\\\x00-\\\\x7F]]|\\\\\\\\(?:\\\\h{1,6}|.))*","name":"variable.font-feature.css"},{"include":"#rule-list-innards"}]}]},"functional-pseudo-classes":{"patterns":[{"begin":"(?i)((:)dir)(\\\\()","beginCaptures":{"1":{"name":"entity.other.attribute-name.pseudo-class.css"},"2":{"name":"punctuation.definition.entity.css"},"3":{"name":"punctuation.section.function.begin.bracket.round.css"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.section.function.end.bracket.round.css"}},"patterns":[{"include":"#comment-block"},{"include":"#escapes"},{"match":"(?i)(?<![-\\\\w])(ltr|rtl)(?![-\\\\w])","name":"support.constant.text-direction.css"},{"include":"#property-values"}]},{"begin":"(?i)((:)lang)(\\\\()","beginCaptures":{"1":{"name":"entity.other.attribute-name.pseudo-class.css"},"2":{"name":"punctuation.definition.entity.css"},"3":{"name":"punctuation.section.function.begin.bracket.round.css"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.section.function.end.bracket.round.css"}},"patterns":[{"match":"(?<=[(,\\\\s])[A-Za-z]+(-[0-9A-Za-z]*|\\\\\\\\(?:\\\\h{1,6}|.))*(?=[),\\\\s])","name":"support.constant.language-range.css"},{"begin":"\\"","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.css"}},"end":"\\"","endCaptures":{"0":{"name":"punctuation.definition.string.end.css"}},"name":"string.quoted.double.css","patterns":[{"include":"#escapes"},{"match":"(?<=[\\"\\\\s])[*A-Za-z]+(-[*0-9A-Za-z]*)*(?=[\\"\\\\s])","name":"support.constant.language-range.css"}]},{"begin":"'","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.css"}},"end":"'","endCaptures":{"0":{"name":"punctuation.definition.string.end.css"}},"name":"string.quoted.single.css","patterns":[{"include":"#escapes"},{"match":"(?<=['\\\\s])[*A-Za-z]+(-[*0-9A-Za-z]*)*(?=['\\\\s])","name":"support.constant.language-range.css"}]},{"include":"#commas"}]},{"begin":"(?i)((:)(?:not|has|matches|where|is))(\\\\()","beginCaptures":{"1":{"name":"entity.other.attribute-name.pseudo-class.css"},"2":{"name":"punctuation.definition.entity.css"},"3":{"name":"punctuation.section.function.begin.bracket.round.css"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.section.function.end.bracket.round.css"}},"patterns":[{"include":"#selector-innards"}]},{"begin":"(?i)((:)nth-(?:last-)?(?:child|of-type))(\\\\()","beginCaptures":{"1":{"name":"entity.other.attribute-name.pseudo-class.css"},"2":{"name":"punctuation.definition.entity.css"},"3":{"name":"punctuation.section.function.begin.bracket.round.css"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.section.function.end.bracket.round.css"}},"patterns":[{"match":"(?i)[-+]?(\\\\d+n?|n)(\\\\s*[-+]\\\\s*\\\\d+)?","name":"constant.numeric.css"},{"match":"(?i)even|odd","name":"support.constant.parity.css"}]}]},"functions":{"patterns":[{"begin":"(?i)(?<![-\\\\w])(calc)(\\\\()","beginCaptures":{"1":{"name":"support.function.calc.css"},"2":{"name":"punctuation.section.function.begin.bracket.round.css"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.section.function.end.bracket.round.css"}},"name":"meta.function.calc.css","patterns":[{"match":"[*/]|(?<=\\\\s|^)[-+](?=\\\\s|$)","name":"keyword.operator.arithmetic.css"},{"include":"#property-values"}]},{"begin":"(?i)(?<![-\\\\w])(rgba?|hsla?|hwb|lab|oklab|lch|oklch|color)(\\\\()","beginCaptures":{"1":{"name":"support.function.misc.css"},"2":{"name":"punctuation.section.function.begin.bracket.round.css"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.section.function.end.bracket.round.css"}},"name":"meta.function.color.css","patterns":[{"include":"#property-values"}]},{"begin":"(?i)(?<![-\\\\w])((?:-(?:webkit-|moz-|o-))?(?:repeating-)?(?:linear|radial|conic)-gradient)(\\\\()","beginCaptures":{"1":{"name":"support.function.gradient.css"},"2":{"name":"punctuation.section.function.begin.bracket.round.css"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.section.function.end.bracket.round.css"}},"name":"meta.function.gradient.css","patterns":[{"match":"(?i)(?<![-\\\\w])(from|to|at|in|hue)(?![-\\\\w])","name":"keyword.operator.gradient.css"},{"include":"#property-values"}]},{"begin":"(?i)(?<![-\\\\w])(-webkit-gradient)(\\\\()","beginCaptures":{"1":{"name":"invalid.deprecated.gradient.function.css"},"2":{"name":"punctuation.section.function.begin.bracket.round.css"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.section.function.end.bracket.round.css"}},"name":"meta.function.gradient.invalid.deprecated.gradient.css","patterns":[{"begin":"(?i)(?<![-\\\\w])(from|to|color-stop)(\\\\()","beginCaptures":{"1":{"name":"invalid.deprecated.function.css"},"2":{"name":"punctuation.section.function.begin.bracket.round.css"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.section.function.end.bracket.round.css"}},"patterns":[{"include":"#property-values"}]},{"include":"#property-values"}]},{"begin":"(?i)(?<![-\\\\w])(annotation|attr|blur|brightness|character-variant|clamp|contrast|counters?|cross-fade|drop-shadow|element|fit-content|format|grayscale|hue-rotate|color-mix|image-set|invert|local|max|min|minmax|opacity|ornaments|repeat|saturate|sepia|styleset|stylistic|swash|symbols|cos|sin|tan|acos|asin|atan2??|hypot|sqrt|pow|log|exp|abs|sign)(\\\\()","beginCaptures":{"1":{"name":"support.function.misc.css"},"2":{"name":"punctuation.section.function.begin.bracket.round.css"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.section.function.end.bracket.round.css"}},"name":"meta.function.misc.css","patterns":[{"match":"(?i)(?<=[\\",\\\\s]|\\\\*/|^)\\\\d+x(?=[\\"'),\\\\s]|/\\\\*|$)","name":"constant.numeric.other.density.css"},{"include":"#property-values"},{"match":"[^\\"'),\\\\s]+","name":"variable.parameter.misc.css"}]},{"begin":"(?i)(?<![-\\\\w])(circle|ellipse|inset|polygon|rect)(\\\\()","beginCaptures":{"1":{"name":"support.function.shape.css"},"2":{"name":"punctuation.section.function.begin.bracket.round.css"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.section.function.end.bracket.round.css"}},"name":"meta.function.shape.css","patterns":[{"match":"(?i)(?<=\\\\s|^|\\\\*/)(at|round)(?=\\\\s|/\\\\*|$)","name":"keyword.operator.shape.css"},{"include":"#property-values"}]},{"begin":"(?i)(?<![-\\\\w])(cubic-bezier|steps)(\\\\()","beginCaptures":{"1":{"name":"support.function.timing-function.css"},"2":{"name":"punctuation.section.function.begin.bracket.round.css"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.section.function.end.bracket.round.css"}},"name":"meta.function.timing-function.css","patterns":[{"match":"(?i)(?<![-\\\\w])(start|end)(?=\\\\s*\\\\)|$)","name":"support.constant.step-direction.css"},{"include":"#property-values"}]},{"begin":"(?i)(?<![-\\\\w])((?:translate|scale|rotate)(?:[XYZ]|3D)?|matrix(?:3D)?|skew[XY]?|perspective)(\\\\()","beginCaptures":{"1":{"name":"support.function.transform.css"},"2":{"name":"punctuation.section.function.begin.bracket.round.css"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.section.function.end.bracket.round.css"}},"patterns":[{"include":"#property-values"}]},{"include":"#url"},{"begin":"(?i)(?<![-\\\\w])(var)(\\\\()","beginCaptures":{"1":{"name":"support.function.misc.css"},"2":{"name":"punctuation.section.function.begin.bracket.round.css"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.section.function.end.bracket.round.css"}},"name":"meta.function.variable.css","patterns":[{"match":"--[-A-Z_a-z[^\\\\x00-\\\\x7F]](?:[-0-9A-Z_a-z[^\\\\x00-\\\\x7F]]|\\\\\\\\(?:\\\\h{1,6}|.))*","name":"variable.argument.css"},{"include":"#property-values"}]}]},"media-feature-keywords":{"match":"(?i)(?<=^|[:\\\\s]|\\\\*/)(?:portrait|landscape|progressive|interlace|fullscreen|standalone|minimal-ui|browser|hover)(?=[)\\\\s]|$)","name":"support.constant.property-value.css"},"media-features":{"captures":{"1":{"name":"support.type.property-name.media.css"},"2":{"name":"support.type.property-name.media.css"},"3":{"name":"support.type.vendored.property-name.media.css"}},"match":"(?i)(?<=^|[(\\\\s]|\\\\*/)(?:((?:m(?:in-|ax-))?(?:height|width|aspect-ratio|color|color-index|monochrome|resolution)|grid|scan|orientation|display-mode|hover)|((?:m(?:in-|ax-))?device-(?:height|width|aspect-ratio))|((?:[-_](?:webkit|apple|khtml|epub|moz|ms|o|xv|ah|rim|atsc|hp|tc|wap|ro)|(?:mso|prince))-[-\\\\w]+(?=\\\\s*(?:/\\\\*(?:[^*]|\\\\*[^/])*\\\\*/)?\\\\s*[):])))(?=\\\\s|$|[):<=>]|/\\\\*)"},"media-query":{"begin":"\\\\G","end":"(?=\\\\s*[;{])","patterns":[{"include":"#comment-block"},{"include":"#escapes"},{"include":"#media-types"},{"match":"(?i)(?<=\\\\s|^|,|\\\\*/)(only|not)(?=[{\\\\s]|/\\\\*|$)","name":"keyword.operator.logical.$1.media.css"},{"match":"(?i)(?<=\\\\s|^|\\\\*/|\\\\))and(?=\\\\s|/\\\\*|$)","name":"keyword.operator.logical.and.media.css"},{"match":",(?:(?:\\\\s*,)+|(?=\\\\s*[);{]))","name":"invalid.illegal.comma.css"},{"include":"#commas"},{"begin":"\\\\(","beginCaptures":{"0":{"name":"punctuation.definition.parameters.begin.bracket.round.css"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.definition.parameters.end.bracket.round.css"}},"patterns":[{"include":"#media-features"},{"include":"#media-feature-keywords"},{"match":":","name":"punctuation.separator.key-value.css"},{"match":">=|<=|[<=>]","name":"keyword.operator.comparison.css"},{"captures":{"1":{"name":"constant.numeric.css"},"2":{"name":"keyword.operator.arithmetic.css"},"3":{"name":"constant.numeric.css"}},"match":"(\\\\d+)\\\\s*(/)\\\\s*(\\\\d+)","name":"meta.ratio.css"},{"include":"#numeric-values"},{"include":"#comment-block"}]}]},"media-query-list":{"begin":"(?=\\\\s*[^;{])","end":"(?=\\\\s*[;{])","patterns":[{"include":"#media-query"}]},"media-types":{"captures":{"1":{"name":"support.constant.media.css"},"2":{"name":"invalid.deprecated.constant.media.css"}},"match":"(?i)(?<=^|[,\\\\s]|\\\\*/)(?:(all|print|screen|speech)|(aural|braille|embossed|handheld|projection|tty|tv))(?=$|[,;{\\\\s]|/\\\\*)"},"numeric-values":{"patterns":[{"captures":{"1":{"name":"punctuation.definition.constant.css"}},"match":"(#)(?:\\\\h{3,4}|\\\\h{6}|\\\\h{8})\\\\b","name":"constant.other.color.rgb-value.hex.css"},{"captures":{"1":{"name":"keyword.other.unit.percentage.css"},"2":{"name":"keyword.other.unit.\${2:/downcase}.css"}},"match":"(?i)(?<![-\\\\w])[-+]?(?:[0-9]+(?:\\\\.[0-9]+)?|\\\\.[0-9]+)(?:(?<=[0-9])E[-+]?[0-9]+)?(?:(%)|(deg|grad|rad|turn|Hz|kHz|ch|cm|em|ex|fr|in|mm|mozmm|pc|pt|px|q|rem|rch|rex|rlh|ic|ric|rcap|vh|vw|vb|vi|svh|svw|svb|svi|dvh|dvw|dvb|dvi|lvh|lvw|lvb|lvi|vmax|vmin|cqw|cqi|cqh|cqb|cqmin|cqmax|dpi|dpcm|dppx|s|ms)\\\\b)?","name":"constant.numeric.css"}]},"property-keywords":{"patterns":[{"match":"(?i)(?<![-\\\\w])(above|absolute|active|add|additive|after-edge|alias|all|all-petite-caps|all-scroll|all-small-caps|alpha|alphabetic|alternate|alternate-reverse|always|antialiased|auto|auto-fill|auto-fit|auto-pos|available|avoid|avoid-column|avoid-page|avoid-region|backwards|balance|baseline|before-edge|below|bevel|bidi-override|blink|block|block-axis|block-start|block-end|bold|bolder|border|border-box|both|bottom|bottom-outside|break-all|break-word|bullets|butt|capitalize|caption|cell|center|central|char|circle|clip|clone|close-quote|closest-corner|closest-side|col-resize|collapse|color|color-burn|color-dodge|column|column-reverse|common-ligatures|compact|condensed|contain|content|content-box|contents|context-menu|contextual|copy|cover|crisp-edges|crispEdges|crosshair|cyclic|dark|darken|dashed|decimal|default|dense|diagonal-fractions|difference|digits|disabled|disc|discretionary-ligatures|distribute|distribute-all-lines|distribute-letter|distribute-space|dot|dotted|double|double-circle|downleft|downright|e-resize|each-line|ease|ease-in|ease-in-out|ease-out|economy|ellipse|ellipsis|embed|end|evenodd|ew-resize|exact|exclude|exclusion|expanded|extends|extra-condensed|extra-expanded|fallback|farthest-corner|farthest-side|fill|fill-available|fill-box|filled|fit-content|fixed|flat|flex|flex-end|flex-start|flip|flow-root|forwards|freeze|from-image|full-width|geometricPrecision|georgian|grab|grabbing|grayscale|grid|groove|hand|hanging|hard-light|help|hidden|hide|historical-forms|historical-ligatures|horizontal|horizontal-tb|hue|icon|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space|ideographic|inactive|infinite|inherit|initial|inline|inline-axis|inline-block|inline-end|inline-flex|inline-grid|inline-list-item|inline-start|inline-table|inset|inside|inter-character|inter-ideograph|inter-word|intersect|invert|isolate|isolate-override|italic|jis04|jis78|jis83|jis90|justify|justify-all|kannada|keep-all|landscape|larger??|left|light|lighten|lighter|line|line-edge|line-through|linear|linearRGB|lining-nums|list-item|local|loose|lowercase|lr|lr-tb|ltr|luminance|luminosity|main-size|mandatory|manipulation|manual|margin-box|match-parent|match-source|mathematical|max-content|medium|menu|message-box|middle|min-content|miter|mixed|move|multiply|n-resize|narrower|ne-resize|nearest-neighbor|nesw-resize|newspaper|no-change|no-clip|no-close-quote|no-common-ligatures|no-contextual|no-discretionary-ligatures|no-drop|no-historical-ligatures|no-open-quote|no-repeat|none|nonzero|normal|not-allowed|nowrap|ns-resize|numbers|numeric|nw-resize|nwse-resize|oblique|oldstyle-nums|open|open-quote|optimizeLegibility|optimizeQuality|optimizeSpeed|optional|ordinal|outset|outside|over|overlay|overline|padding|padding-box|page|painted|pan-down|pan-left|pan-right|pan-up|pan-x|pan-y|paused|petite-caps|pixelated|plaintext|pointer|portrait|pre|pre-line|pre-wrap|preserve-3d|progress|progressive|proportional-nums|proportional-width|proximity|radial|recto|region|relative|remove|repeat|repeat-[xy]|reset-size|reverse|revert|ridge|right|rl|rl-tb|round|row|row-resize|row-reverse|row-severse|rtl|ruby|ruby-base|ruby-base-container|ruby-text|ruby-text-container|run-in|running|s-resize|saturation|scale-down|screen|scroll|scroll-position|se-resize|semi-condensed|semi-expanded|separate|sesame|show|sideways|sideways-left|sideways-lr|sideways-right|sideways-rl|simplified|slashed-zero|slice|small|small-caps|small-caption|smaller|smooth|soft-light|solid|space|space-around|space-between|space-evenly|spell-out|square|sRGB|stacked-fractions|start|static|status-bar|swap|step-end|step-start|sticky|stretch|strict|stroke|stroke-box|style|sub|subgrid|subpixel-antialiased|subtract|super|sw-resize|symbolic|table|table-caption|table-cell|table-column|table-column-group|table-footer-group|table-header-group|table-row|table-row-group|tabular-nums|tb|tb-rl|text|text-after-edge|text-before-edge|text-bottom|text-top|thick|thin|titling-caps|top|top-outside|touch|traditional|transparent|triangle|ultra-condensed|ultra-expanded|under|underline|unicase|unset|upleft|uppercase|upright|use-glyph-orientation|use-script|verso|vertical|vertical-ideographic|vertical-lr|vertical-rl|vertical-text|view-box|visible|visibleFill|visiblePainted|visibleStroke|w-resize|wait|wavy|weight|whitespace|wider|words|wrap|wrap-reverse|x|x-large|x-small|xx-large|xx-small|y|zero|zoom-in|zoom-out)(?![-\\\\w])","name":"support.constant.property-value.css"},{"match":"(?i)(?<![-\\\\w])(arabic-indic|armenian|bengali|cambodian|circle|cjk-decimal|cjk-earthly-branch|cjk-heavenly-stem|cjk-ideographic|decimal|decimal-leading-zero|devanagari|disc|disclosure-closed|disclosure-open|ethiopic-halehame-am|ethiopic-halehame-ti-e[rt]|ethiopic-numeric|georgian|gujarati|gurmukhi|hangul|hangul-consonant|hebrew|hiragana|hiragana-iroha|japanese-formal|japanese-informal|kannada|katakana|katakana-iroha|khmer|korean-hangul-formal|korean-hanja-formal|korean-hanja-informal|lao|lower-alpha|lower-armenian|lower-greek|lower-latin|lower-roman|malayalam|mongolian|myanmar|oriya|persian|simp-chinese-formal|simp-chinese-informal|square|tamil|telugu|thai|tibetan|trad-chinese-formal|trad-chinese-informal|upper-alpha|upper-armenian|upper-latin|upper-roman|urdu)(?![-\\\\w])","name":"support.constant.property-value.list-style-type.css"},{"match":"(?<![-\\\\w])(?i:-(?:ah|apple|atsc|epub|hp|khtml|moz|ms|o|rim|ro|tc|wap|webkit|xv)|(?:mso|prince))-[-A-Za-z]+","name":"support.constant.vendored.property-value.css"},{"match":"(?<![-\\\\w])(?i:arial|century|comic|courier|garamond|georgia|helvetica|impact|lucida|symbol|system-ui|system|tahoma|times|trebuchet|ui-monospace|ui-rounded|ui-sans-serif|ui-serif|utopia|verdana|webdings|sans-serif|serif|monospace)(?![-\\\\w])","name":"support.constant.font-name.css"}]},"property-names":{"patterns":[{"match":"(?i)(?<![-\\\\w])(?:accent-color|additive-symbols|align-content|align-items|align-self|all|animation|animation-delay|animation-direction|animation-duration|animation-fill-mode|animation-iteration-count|animation-name|animation-play-state|animation-timing-function|aspect-ratio|backdrop-filter|backface-visibility|background|background-attachment|background-blend-mode|background-clip|background-color|background-image|background-origin|background-position|background-position-[xy]|background-repeat|background-size|bleed|block-size|border|border-block-end|border-block-end-color|border-block-end-style|border-block-end-width|border-block-start|border-block-start-color|border-block-start-style|border-block-start-width|border-bottom|border-bottom-color|border-bottom-left-radius|border-bottom-right-radius|border-bottom-style|border-bottom-width|border-collapse|border-color|border-end-end-radius|border-end-start-radius|border-image|border-image-outset|border-image-repeat|border-image-slice|border-image-source|border-image-width|border-inline-end|border-inline-end-color|border-inline-end-style|border-inline-end-width|border-inline-start|border-inline-start-color|border-inline-start-style|border-inline-start-width|border-left|border-left-color|border-left-style|border-left-width|border-radius|border-right|border-right-color|border-right-style|border-right-width|border-spacing|border-start-end-radius|border-start-start-radius|border-style|border-top|border-top-color|border-top-left-radius|border-top-right-radius|border-top-style|border-top-width|border-width|bottom|box-decoration-break|box-shadow|box-sizing|break-after|break-before|break-inside|caption-side|caret-color|clear|clip|clip-path|clip-rule|color|color-adjust|color-interpolation-filters|color-scheme|column-count|column-fill|column-gap|column-rule|column-rule-color|column-rule-style|column-rule-width|column-span|column-width|columns|contain|container|container-name|container-type|content|counter-increment|counter-reset|cursor|direction|display|empty-cells|enable-background|fallback|fill|fill-opacity|fill-rule|filter|flex|flex-basis|flex-direction|flex-flow|flex-grow|flex-shrink|flex-wrap|float|flood-color|flood-opacity|font|font-display|font-family|font-feature-settings|font-kerning|font-language-override|font-optical-sizing|font-size|font-size-adjust|font-stretch|font-style|font-synthesis|font-variant|font-variant-alternates|font-variant-caps|font-variant-east-asian|font-variant-ligatures|font-variant-numeric|font-variant-position|font-variation-settings|font-weight|gap|glyph-orientation-horizontal|glyph-orientation-vertical|grid|grid-area|grid-auto-columns|grid-auto-flow|grid-auto-rows|grid-column|grid-column-end|grid-column-gap|grid-column-start|grid-gap|grid-row|grid-row-end|grid-row-gap|grid-row-start|grid-template|grid-template-areas|grid-template-columns|grid-template-rows|hanging-punctuation|height|hyphens|image-orientation|image-rendering|image-resolution|ime-mode|initial-letter|initial-letter-align|inline-size|inset|inset-block|inset-block-end|inset-block-start|inset-inline|inset-inline-end|inset-inline-start|isolation|justify-content|justify-items|justify-self|kerning|left|letter-spacing|lighting-color|line-break|line-clamp|line-height|list-style|list-style-image|list-style-position|list-style-type|margin|margin-block|margin-block-end|margin-block-start|margin-bottom|margin-inline|margin-inline-end|margin-inline-start|margin-left|margin-right|margin-top|marker-end|marker-mid|marker-start|marks|mask|mask-border|mask-border-mode|mask-border-outset|mask-border-repeat|mask-border-slice|mask-border-source|mask-border-width|mask-clip|mask-composite|mask-image|mask-mode|mask-origin|mask-position|mask-repeat|mask-size|mask-type|max-block-size|max-height|max-inline-size|max-lines|max-width|max-zoom|min-block-size|min-height|min-inline-size|min-width|min-zoom|mix-blend-mode|negative|object-fit|object-position|offset|offset-anchor|offset-distance|offset-path|offset-position|offset-rotation|opacity|order|orientation|orphans|outline|outline-color|outline-offset|outline-style|outline-width|overflow|overflow-anchor|overflow-block|overflow-inline|overflow-wrap|overflow-[xy]|overscroll-behavior|overscroll-behavior-block|overscroll-behavior-inline|overscroll-behavior-[xy]|pad|padding|padding-block|padding-block-end|padding-block-start|padding-bottom|padding-inline|padding-inline-end|padding-inline-start|padding-left|padding-right|padding-top|page-break-after|page-break-before|page-break-inside|paint-order|perspective|perspective-origin|place-content|place-items|place-self|pointer-events|position|prefix|quotes|range|resize|right|rotate|row-gap|ruby-align|ruby-merge|ruby-position|scale|scroll-behavior|scroll-margin|scroll-margin-block|scroll-margin-block-end|scroll-margin-block-start|scroll-margin-bottom|scroll-margin-inline|scroll-margin-inline-end|scroll-margin-inline-start|scroll-margin-left|scroll-margin-right|scroll-margin-top|scroll-padding|scroll-padding-block|scroll-padding-block-end|scroll-padding-block-start|scroll-padding-bottom|scroll-padding-inline|scroll-padding-inline-end|scroll-padding-inline-start|scroll-padding-left|scroll-padding-right|scroll-padding-top|scroll-snap-align|scroll-snap-coordinate|scroll-snap-destination|scroll-snap-stop|scroll-snap-type|scrollbar-color|scrollbar-gutter|scrollbar-width|shape-image-threshold|shape-margin|shape-outside|shape-rendering|size|speak-as|src|stop-color|stop-opacity|stroke|stroke-dasharray|stroke-dashoffset|stroke-linecap|stroke-linejoin|stroke-miterlimit|stroke-opacity|stroke-width|suffix|symbols|system|tab-size|table-layout|text-align|text-align-last|text-anchor|text-combine-upright|text-decoration|text-decoration-color|text-decoration-line|text-decoration-skip|text-decoration-skip-ink|text-decoration-style|text-decoration-thickness|text-emphasis|text-emphasis-color|text-emphasis-position|text-emphasis-style|text-indent|text-justify|text-orientation|text-overflow|text-rendering|text-shadow|text-size-adjust|text-transform|text-underline-offset|text-underline-position|top|touch-action|transform|transform-box|transform-origin|transform-style|transition|transition-delay|transition-duration|transition-property|transition-timing-function|translate|unicode-bidi|unicode-range|user-select|user-zoom|vertical-align|visibility|white-space|widows|width|will-change|word-break|word-spacing|word-wrap|writing-mode|z-index|zoom|alignment-baseline|baseline-shift|clip-rule|color-interpolation|color-interpolation-filters|color-profile|color-rendering|cx|cy|dominant-baseline|enable-background|fill|fill-opacity|fill-rule|flood-color|flood-opacity|glyph-orientation-horizontal|glyph-orientation-vertical|height|kerning|lighting-color|marker-end|marker-mid|marker-start|rx??|ry|shape-rendering|stop-color|stop-opacity|stroke|stroke-dasharray|stroke-dashoffset|stroke-linecap|stroke-linejoin|stroke-miterlimit|stroke-opacity|stroke-width|text-anchor|width|[xy]|adjust|after|align|align-last|alignment|alignment-adjust|appearance|attachment|azimuth|background-break|balance|baseline|before|bidi|binding|bookmark|bookmark-label|bookmark-level|bookmark-target|border-length|bottom-color|bottom-left-radius|bottom-right-radius|bottom-style|bottom-width|box|box-align|box-direction|box-flex|box-flex-group|box-lines|box-ordinal-group|box-orient|box-pack|break|character|collapse|column|column-break-after|column-break-before|count|counter|crop|cue|cue-after|cue-before|decoration|decoration-break|delay|display-model|display-role|down|drop|drop-initial-after-adjust|drop-initial-after-align|drop-initial-before-adjust|drop-initial-before-align|drop-initial-size|drop-initial-value|duration|elevation|emphasis|family|fit|fit-position|flex-group|float-offset|gap|grid-columns|grid-rows|hanging-punctuation|header|hyphenate|hyphenate-after|hyphenate-before|hyphenate-character|hyphenate-lines|hyphenate-resource|icon|image|increment|indent|index|initial-after-adjust|initial-after-align|initial-before-adjust|initial-before-align|initial-size|initial-value|inline-box-align|iteration-count|justify|label|left-color|left-style|left-width|length|level|line|line-stacking|line-stacking-ruby|line-stacking-shift|line-stacking-strategy|lines|list|mark|mark-after|mark-before|marks|marquee|marquee-direction|marquee-play-count|marquee-speed|marquee-style|max|min|model|move-to|name|nav|nav-down|nav-index|nav-left|nav-right|nav-up|new|numeral|offset|ordinal-group|orient|origin|overflow-style|overhang|pack|page|page-policy|pause|pause-after|pause-before|phonemes|pitch|pitch-range|play-count|play-during|play-state|point|presentation|presentation-level|profile|property|punctuation|punctuation-trim|radius|rate|rendering-intent|repeat|replace|reset|resolution|resource|respond-to|rest|rest-after|rest-before|richness|right-color|right-style|right-width|role|rotation|rotation-point|rows|ruby|ruby-overhang|ruby-span|rule|rule-color|rule-style|rule-width|shadow|size|size-adjust|sizing|space|space-collapse|spacing|span|speak|speak-header|speak-numeral|speak-punctuation|speech|speech-rate|speed|stacking|stacking-ruby|stacking-shift|stacking-strategy|stress|stretch|string-set|style|style-image|style-position|style-type|target|target-name|target-new|target-position|text|text-height|text-justify|text-outline|text-replace|text-wrap|timing-function|top-color|top-left-radius|top-right-radius|top-style|top-width|trim|unicode|up|user-select|variant|voice|voice-balance|voice-duration|voice-family|voice-pitch|voice-pitch-range|voice-rate|voice-stress|voice-volume|volume|weight|white|white-space-collapse|word|wrap)(?![-\\\\w])","name":"support.type.property-name.css"},{"match":"(?<![-\\\\w])(?i:-(?:ah|apple|atsc|epub|hp|khtml|moz|ms|o|rim|ro|tc|wap|webkit|xv)|(?:mso|prince))-[-A-Za-z]+","name":"support.type.vendored.property-name.css"}]},"property-values":{"patterns":[{"include":"#commas"},{"include":"#comment-block"},{"include":"#escapes"},{"include":"#functions"},{"include":"#property-keywords"},{"include":"#unicode-range"},{"include":"#numeric-values"},{"include":"#color-keywords"},{"include":"#string"},{"match":"!\\\\s*important(?![-\\\\w])","name":"keyword.other.important.css"}]},"pseudo-classes":{"captures":{"1":{"name":"punctuation.definition.entity.css"},"2":{"name":"invalid.illegal.colon.css"}},"match":"(?i)(:)(:*)(?:active|any-link|checked|default|disabled|empty|enabled|first|(?:first|last|only)-(?:child|of-type)|focus|focus-visible|focus-within|fullscreen|host|hover|in-range|indeterminate|invalid|left|link|optional|out-of-range|read-only|read-write|required|right|root|scope|target|unresolved|valid|visited)(?![-\\\\w]|\\\\s*[;}])","name":"entity.other.attribute-name.pseudo-class.css"},"pseudo-elements":{"captures":{"1":{"name":"punctuation.definition.entity.css"},"2":{"name":"punctuation.definition.entity.css"}},"match":"(?i)(?:(::?)(?:after|before|first-letter|first-line|(?:-(?:ah|apple|atsc|epub|hp|khtml|moz|ms|o|rim|ro|tc|wap|webkit|xv)|(?:mso|prince))-[-a-z]+)|(::)(?:backdrop|content|grammar-error|marker|placeholder|selection|shadow|spelling-error))(?![-\\\\w]|\\\\s*[;}])","name":"entity.other.attribute-name.pseudo-element.css"},"rule-list":{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.section.property-list.begin.bracket.curly.css"}},"end":"}","endCaptures":{"0":{"name":"punctuation.section.property-list.end.bracket.curly.css"}},"name":"meta.property-list.css","patterns":[{"include":"#rule-list-innards"}]},"rule-list-innards":{"patterns":[{"include":"#comment-block"},{"include":"#escapes"},{"include":"#font-features"},{"match":"(?<![-\\\\w])--[-A-Z_a-z[^\\\\x00-\\\\x7F]](?:[-0-9A-Z_a-z[^\\\\x00-\\\\x7F]]|\\\\\\\\(?:\\\\h{1,6}|.))*","name":"variable.css"},{"begin":"(?<![-A-Za-z])(?=[-A-Za-z])","end":"$|(?![-A-Za-z])","name":"meta.property-name.css","patterns":[{"include":"#property-names"}]},{"begin":"(:)\\\\s*","beginCaptures":{"1":{"name":"punctuation.separator.key-value.css"}},"contentName":"meta.property-value.css","end":"\\\\s*(;)|\\\\s*(?=[)}])","endCaptures":{"1":{"name":"punctuation.terminator.rule.css"}},"patterns":[{"include":"#comment-block"},{"include":"#property-values"}]},{"match":";","name":"punctuation.terminator.rule.css"}]},"selector":{"begin":"(?=\\\\|?(?:[-#*.:A-\\\\[_a-z[^\\\\x00-\\\\x7F]]|\\\\\\\\(?:\\\\h{1,6}|.)))","end":"(?=\\\\s*[)/@{])","name":"meta.selector.css","patterns":[{"include":"#selector-innards"}]},"selector-innards":{"patterns":[{"include":"#comment-block"},{"include":"#commas"},{"include":"#escapes"},{"include":"#combinators"},{"captures":{"1":{"name":"entity.other.namespace-prefix.css"},"2":{"name":"punctuation.separator.css"}},"match":"(?:^|(?<=[(,;}\\\\s]))(?![-*\\\\w]+\\\\|(?![-#*.:A-\\\\[_a-z[^\\\\x00-\\\\x7F]]))([-A-Z_a-z[^\\\\x00-\\\\x7F]](?:[-0-9A-Z_a-z[^\\\\x00-\\\\x7F]]|\\\\\\\\(?:\\\\h{1,6}|.))*|\\\\*)?(\\\\|)"},{"include":"#tag-names"},{"match":"\\\\*","name":"entity.name.tag.wildcard.css"},{"captures":{"1":{"name":"punctuation.definition.entity.css"},"2":{"patterns":[{"include":"#escapes"}]}},"match":"(?<![-@\\\\w])([#.])((?:-?[0-9]|-(?=$|[#)+,.:>\\\\[{|~\\\\s]|/\\\\*)|(?:[-0-9A-Z_a-z[^\\\\x00-\\\\x7F]]|\\\\\\\\(?:\\\\h{1,6}|.))*(?:[]!\\"%-(*;<?@^\`|}]|/(?!\\\\*))+)(?:[-0-9A-Z_a-z[^\\\\x00-\\\\x7F]]|\\\\\\\\(?:\\\\h{1,6}|.))*)","name":"invalid.illegal.bad-identifier.css"},{"captures":{"1":{"name":"punctuation.definition.entity.css"},"2":{"patterns":[{"include":"#escapes"}]}},"match":"(\\\\.)((?:[-0-9A-Z_a-z[^\\\\x00-\\\\x7F]]|\\\\\\\\(?:\\\\h{1,6}|.))+)(?=$|[#)+,.:>\\\\[{|~\\\\s]|/\\\\*)","name":"entity.other.attribute-name.class.css"},{"captures":{"1":{"name":"punctuation.definition.entity.css"},"2":{"patterns":[{"include":"#escapes"}]}},"match":"(#)(-?(?![0-9])(?:[-0-9A-Z_a-z[^\\\\x00-\\\\x7F]]|\\\\\\\\(?:\\\\h{1,6}|.))+)(?=$|[#)+,.:>\\\\[{|~\\\\s]|/\\\\*)","name":"entity.other.attribute-name.id.css"},{"begin":"\\\\[","beginCaptures":{"0":{"name":"punctuation.definition.entity.begin.bracket.square.css"}},"end":"]","endCaptures":{"0":{"name":"punctuation.definition.entity.end.bracket.square.css"}},"name":"meta.attribute-selector.css","patterns":[{"include":"#comment-block"},{"include":"#string"},{"captures":{"1":{"name":"storage.modifier.ignore-case.css"}},"match":"(?<=[\\"'\\\\s]|^|\\\\*/)\\\\s*([Ii])\\\\s*(?=[]\\\\s]|/\\\\*|$)"},{"captures":{"1":{"name":"string.unquoted.attribute-value.css","patterns":[{"include":"#escapes"}]}},"match":"(?<==)\\\\s*((?!/\\\\*)(?:[^]\\"'\\\\\\\\\\\\s]|\\\\\\\\.)+)"},{"include":"#escapes"},{"match":"[$*^|~]?=","name":"keyword.operator.pattern.css"},{"match":"\\\\|","name":"punctuation.separator.css"},{"captures":{"1":{"name":"entity.other.namespace-prefix.css","patterns":[{"include":"#escapes"}]}},"match":"(-?(?!\\\\d)(?:[-\\\\w[^\\\\x00-\\\\x7F]]|\\\\\\\\(?:\\\\h{1,6}|.))+|\\\\*)(?=\\\\|(?![=\\\\s]|$|])(?:-?(?!\\\\d)|[-\\\\\\\\\\\\w[^\\\\x00-\\\\x7F]]))"},{"captures":{"1":{"name":"entity.other.attribute-name.css","patterns":[{"include":"#escapes"}]}},"match":"(-?(?!\\\\d)(?>[-\\\\w[^\\\\x00-\\\\x7F]]|\\\\\\\\(?:\\\\h{1,6}|.))+)\\\\s*(?=[]$*=^|~]|/\\\\*)"}]},{"include":"#pseudo-classes"},{"include":"#pseudo-elements"},{"include":"#functional-pseudo-classes"},{"match":"(?<![-@\\\\w])(?=[a-z]\\\\w*-)(?:(?![A-Z])[-\\\\w])+(?![-(\\\\w])","name":"entity.name.tag.custom.css"}]},"string":{"patterns":[{"begin":"\\"","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.css"}},"end":"\\"|(?<!\\\\\\\\)(?=$|\\\\n)","endCaptures":{"0":{"name":"punctuation.definition.string.end.css"}},"name":"string.quoted.double.css","patterns":[{"begin":"(?:\\\\G|^)(?=(?:[^\\"\\\\\\\\]|\\\\\\\\.)+$)","end":"$","name":"invalid.illegal.unclosed.string.css","patterns":[{"include":"#escapes"}]},{"include":"#escapes"}]},{"begin":"'","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.css"}},"end":"'|(?<!\\\\\\\\)(?=$|\\\\n)","endCaptures":{"0":{"name":"punctuation.definition.string.end.css"}},"name":"string.quoted.single.css","patterns":[{"begin":"(?:\\\\G|^)(?=(?:[^'\\\\\\\\]|\\\\\\\\.)+$)","end":"$","name":"invalid.illegal.unclosed.string.css","patterns":[{"include":"#escapes"}]},{"include":"#escapes"}]}]},"tag-names":{"match":"(?i)(?<![-:\\\\w])(?:a|abbr|acronym|address|applet|area|article|aside|audio|b|base|basefont|bdi|bdo|bgsound|big|blink|blockquote|body|br|button|canvas|caption|center|cite|code|col|colgroup|command|content|data|datalist|dd|del|details|dfn|dialog|dir|div|dl|dt|element|em|embed|fieldset|figcaption|figure|font|footer|form|frame|frameset|h[1-6]|head|header|hgroup|hr|html|i|iframe|image|img|input|ins|isindex|kbd|keygen|label|legend|li|link|listing|main|map|mark|marquee|math|menu|menuitem|meta|meter|multicol|nav|nextid|nobr|noembed|noframes|noscript|object|ol|optgroup|option|output|p|param|picture|plaintext|pre|progress|q|rb|rp|rtc??|ruby|s|samp|script|section|select|shadow|slot|small|source|spacer|span|strike|strong|style|sub|summary|sup|table|tbody|td|template|textarea|tfoot|th|thead|time|title|tr|track|tt|ul??|var|video|wbr|xmp|altGlyph|altGlyphDef|altGlyphItem|animate|animateColor|animateMotion|animateTransform|circle|clipPath|color-profile|cursor|defs|desc|discard|ellipse|feBlend|feColorMatrix|feComponentTransfer|feComposite|feConvolveMatrix|feDiffuseLighting|feDisplacementMap|feDistantLight|feDropShadow|feFlood|feFuncA|feFuncB|feFuncG|feFuncR|feGaussianBlur|feImage|feMerge|feMergeNode|feMorphology|feOffset|fePointLight|feSpecularLighting|feSpotLight|feTile|feTurbulence|filter|font-face|font-face-format|font-face-name|font-face-src|font-face-uri|foreignObject|g|glyph|glyphRef|hatch|hatchpath|hkern|line|linearGradient|marker|mask|mesh|meshgradient|meshpatch|meshrow|metadata|missing-glyph|mpath|path|pattern|polygon|polyline|radialGradient|rect|set|solidcolor|stop|svg|switch|symbol|text|textPath|tref|tspan|use|view|vkern|annotation|annotation-xml|maction|maligngroup|malignmark|math|menclose|merror|mfenced|mfrac|mglyph|mi|mlabeledtr|mlongdiv|mmultiscripts|mn|mo|mover|mpadded|mphantom|mroot|mrow|ms|mscarries|mscarry|msgroup|msline|mspace|msqrt|msrow|mstack|mstyle|msub|msubsup|msup|mtable|mtd|mtext|mtr|munder|munderover|semantics)(?=[#)+,.:>\\\\[{|~\\\\s]|/\\\\*|$)","name":"entity.name.tag.css"},"unicode-range":{"captures":{"0":{"name":"constant.other.unicode-range.css"},"1":{"name":"punctuation.separator.dash.unicode-range.css"}},"match":"(?<![-\\\\w])[Uu]\\\\+[?\\\\h]{1,6}(?:(-)\\\\h{1,6})?(?![-\\\\w])"},"url":{"begin":"(?i)(?<![-@\\\\w])(url)(\\\\()","beginCaptures":{"1":{"name":"support.function.url.css"},"2":{"name":"punctuation.section.function.begin.bracket.round.css"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.section.function.end.bracket.round.css"}},"name":"meta.function.url.css","patterns":[{"match":"[^\\"')\\\\s]+","name":"variable.parameter.url.css"},{"include":"#string"},{"include":"#comment-block"},{"include":"#escapes"}]}},"scopeName":"source.css"}`))
  ];
  Gs = Object.freeze(JSON.parse(`{"displayName":"HTML","injections":{"R:text.html - (comment.block, text.html meta.embedded, meta.tag.*.*.html, meta.tag.*.*.*.html, meta.tag.*.*.*.*.html)":{"patterns":[{"match":"<","name":"invalid.illegal.bad-angle-bracket.html"}]}},"name":"html","patterns":[{"include":"#xml-processing"},{"include":"#comment"},{"include":"#doctype"},{"include":"#cdata"},{"include":"#tags-valid"},{"include":"#tags-invalid"},{"include":"#entities"}],"repository":{"attribute":{"patterns":[{"begin":"(s(hape|cope|t(ep|art)|ize(s)?|p(ellcheck|an)|elected|lot|andbox|rc(set|doc|lang)?)|h(ttp-equiv|i(dden|gh)|e(ight|aders)|ref(lang)?)|n(o(nce|validate|module)|ame)|c(h(ecked|arset)|ite|o(nt(ent(editable)?|rols)|ords|l(s(pan)?|or))|lass|rossorigin)|t(ype(mustmatch)?|itle|a(rget|bindex)|ranslate)|i(s(map)?|n(tegrity|putmode)|tem(scope|type|id|prop|ref)|d)|op(timum|en)|d(i(sabled|r(name)?)|ownload|e(coding|f(er|ault))|at(etime|a)|raggable)|usemap|p(ing|oster|la(ysinline|ceholder)|attern|reload)|enctype|value|kind|for(m(novalidate|target|enctype|action|method)?)?|w(idth|rap)|l(ist|o(op|w)|a(ng|bel))|a(s(ync)?|c(ce(sskey|pt(-charset)?)|tion)|uto(c(omplete|apitalize)|play|focus)|l(t|low(usermedia|paymentrequest|fullscreen))|bbr)|r(ows(pan)?|e(versed|quired|ferrerpolicy|l|adonly))|m(in(length)?|u(ted|ltiple)|e(thod|dia)|a(nifest|x(length)?)))(?![-:\\\\w])","beginCaptures":{"0":{"name":"entity.other.attribute-name.html"}},"end":"(?=\\\\s*+[^=\\\\s])","name":"meta.attribute.$1.html","patterns":[{"include":"#attribute-interior"}]},{"begin":"style(?![-:\\\\w])","beginCaptures":{"0":{"name":"entity.other.attribute-name.html"}},"end":"(?=\\\\s*+[^=\\\\s])","name":"meta.attribute.style.html","patterns":[{"begin":"=","beginCaptures":{"0":{"name":"punctuation.separator.key-value.html"}},"end":"(?<=[^=\\\\s])(?!\\\\s*=)|(?=/?>)","patterns":[{"begin":"(?=[^/<=>\`\\\\s]|/(?!>))","end":"(?!\\\\G)","name":"meta.embedded.line.css","patterns":[{"captures":{"0":{"name":"source.css"}},"match":"([^\\"'/<=>\`\\\\s]|/(?!>))+","name":"string.unquoted.html"},{"begin":"\\"","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.html"}},"contentName":"source.css","end":"(\\")","endCaptures":{"0":{"name":"punctuation.definition.string.end.html"},"1":{"name":"source.css"}},"name":"string.quoted.double.html","patterns":[{"include":"#entities"}]},{"begin":"'","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.html"}},"contentName":"source.css","end":"(')","endCaptures":{"0":{"name":"punctuation.definition.string.end.html"},"1":{"name":"source.css"}},"name":"string.quoted.single.html","patterns":[{"include":"#entities"}]}]},{"match":"=","name":"invalid.illegal.unexpected-equals-sign.html"}]}]},{"begin":"on(s(croll|t(orage|alled)|u(spend|bmit)|e(curitypolicyviolation|ek(ing|ed)|lect))|hashchange|c(hange|o(ntextmenu|py)|u(t|echange)|l(ick|ose)|an(cel|play(through)?))|t(imeupdate|oggle)|in(put|valid)|o((?:n|ff)line)|d(urationchange|r(op|ag(start|over|e(n(ter|d)|xit)|leave)?)|blclick)|un(handledrejection|load)|p(opstate|lay(ing)?|a(ste|use|ge(show|hide))|rogress)|e(nded|rror|mptied)|volumechange|key(down|up|press)|focus|w(heel|aiting)|l(oad(start|e(nd|d((?:|meta)data)))?|anguagechange)|a(uxclick|fterprint|bort)|r(e(s(ize|et)|jectionhandled)|atechange)|m(ouse(o(ut|ver)|down|up|enter|leave|move)|essage(error)?)|b(efore(unload|print)|lur))(?![-:\\\\w])","beginCaptures":{"0":{"name":"entity.other.attribute-name.html"}},"end":"(?=\\\\s*+[^=\\\\s])","name":"meta.attribute.event-handler.$1.html","patterns":[{"begin":"=","beginCaptures":{"0":{"name":"punctuation.separator.key-value.html"}},"end":"(?<=[^=\\\\s])(?!\\\\s*=)|(?=/?>)","patterns":[{"begin":"(?=[^/<=>\`\\\\s]|/(?!>))","end":"(?!\\\\G)","name":"meta.embedded.line.js","patterns":[{"captures":{"0":{"name":"source.js"},"1":{"patterns":[{"include":"source.js"}]}},"match":"(([^\\"'/<=>\`\\\\s]|/(?!>))+)","name":"string.unquoted.html"},{"begin":"\\"","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.html"}},"contentName":"source.js","end":"(\\")","endCaptures":{"0":{"name":"punctuation.definition.string.end.html"},"1":{"name":"source.js"}},"name":"string.quoted.double.html","patterns":[{"captures":{"0":{"patterns":[{"include":"source.js"}]}},"match":"([^\\\\n\\"/]|/(?![*/]))+"},{"begin":"//","beginCaptures":{"0":{"name":"punctuation.definition.comment.js"}},"end":"(?=\\")|\\\\n","name":"comment.line.double-slash.js"},{"begin":"/\\\\*","beginCaptures":{"0":{"name":"punctuation.definition.comment.begin.js"}},"end":"(?=\\")|\\\\*/","endCaptures":{"0":{"name":"punctuation.definition.comment.end.js"}},"name":"comment.block.js"}]},{"begin":"'","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.html"}},"contentName":"source.js","end":"(')","endCaptures":{"0":{"name":"punctuation.definition.string.end.html"},"1":{"name":"source.js"}},"name":"string.quoted.single.html","patterns":[{"captures":{"0":{"patterns":[{"include":"source.js"}]}},"match":"([^\\\\n'/]|/(?![*/]))+"},{"begin":"//","beginCaptures":{"0":{"name":"punctuation.definition.comment.js"}},"end":"(?=')|\\\\n","name":"comment.line.double-slash.js"},{"begin":"/\\\\*","beginCaptures":{"0":{"name":"punctuation.definition.comment.begin.js"}},"end":"(?=')|\\\\*/","endCaptures":{"0":{"name":"punctuation.definition.comment.end.js"}},"name":"comment.block.js"}]}]},{"match":"=","name":"invalid.illegal.unexpected-equals-sign.html"}]}]},{"begin":"(data-[-a-z]+)(?![-:\\\\w])","beginCaptures":{"0":{"name":"entity.other.attribute-name.html"}},"end":"(?=\\\\s*+[^=\\\\s])","name":"meta.attribute.data-x.$1.html","patterns":[{"include":"#attribute-interior"}]},{"begin":"(align|bgcolor|border)(?![-:\\\\w])","beginCaptures":{"0":{"name":"invalid.deprecated.entity.other.attribute-name.html"}},"end":"(?=\\\\s*+[^=\\\\s])","name":"meta.attribute.$1.html","patterns":[{"include":"#attribute-interior"}]},{"begin":"([^\\\\x00- \\"'/<=>\\\\x7F-\\\\x{9F}\uFDD0-\uFDEF\uFFFE\uFFFF\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\\\\x{4FFFE}\\\\x{4FFFF}\\\\x{5FFFE}\\\\x{5FFFF}\\\\x{6FFFE}\\\\x{6FFFF}\\\\x{7FFFE}\\\\x{7FFFF}\\\\x{8FFFE}\\\\x{8FFFF}\\\\x{9FFFE}\\\\x{9FFFF}\\\\x{AFFFE}\\\\x{AFFFF}\\\\x{BFFFE}\\\\x{BFFFF}\\\\x{CFFFE}\\\\x{CFFFF}\\\\x{DFFFE}\\\\x{DFFFF}\\\\x{EFFFE}\\\\x{EFFFF}\\\\x{FFFFE}\\\\x{FFFFF}\\\\x{10FFFE}\\\\x{10FFFF}]+)","beginCaptures":{"0":{"name":"entity.other.attribute-name.html"}},"end":"(?=\\\\s*+[^=\\\\s])","name":"meta.attribute.unrecognized.$1.html","patterns":[{"include":"#attribute-interior"}]},{"match":"[^>\\\\s]+","name":"invalid.illegal.character-not-allowed-here.html"}]},"attribute-interior":{"patterns":[{"begin":"=","beginCaptures":{"0":{"name":"punctuation.separator.key-value.html"}},"end":"(?<=[^=\\\\s])(?!\\\\s*=)|(?=/?>)","patterns":[{"match":"([^\\"'/<=>\`\\\\s]|/(?!>))+","name":"string.unquoted.html"},{"begin":"\\"","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.html"}},"end":"\\"","endCaptures":{"0":{"name":"punctuation.definition.string.end.html"}},"name":"string.quoted.double.html","patterns":[{"include":"#entities"}]},{"begin":"'","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.html"}},"end":"'","endCaptures":{"0":{"name":"punctuation.definition.string.end.html"}},"name":"string.quoted.single.html","patterns":[{"include":"#entities"}]},{"match":"=","name":"invalid.illegal.unexpected-equals-sign.html"}]}]},"cdata":{"begin":"<!\\\\[CDATA\\\\[","beginCaptures":{"0":{"name":"punctuation.definition.tag.begin.html"}},"contentName":"string.other.inline-data.html","end":"]]>","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.metadata.cdata.html"},"comment":{"begin":"<!--","captures":{"0":{"name":"punctuation.definition.comment.html"}},"end":"-->","name":"comment.block.html","patterns":[{"match":"\\\\G-?>","name":"invalid.illegal.characters-not-allowed-here.html"},{"match":"<!-(?:-(?!>)|(?=-->))","name":"invalid.illegal.characters-not-allowed-here.html"},{"match":"--!>","name":"invalid.illegal.characters-not-allowed-here.html"}]},"core-minus-invalid":{"patterns":[{"include":"#xml-processing"},{"include":"#comment"},{"include":"#doctype"},{"include":"#cdata"},{"include":"#tags-valid"},{"include":"#entities"}]},"doctype":{"begin":"<!(?=(?i:DOCTYPE\\\\s))","beginCaptures":{"0":{"name":"punctuation.definition.tag.begin.html"}},"end":">","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.metadata.doctype.html","patterns":[{"match":"\\\\G(?i:DOCTYPE)","name":"entity.name.tag.html"},{"begin":"\\"","end":"\\"","name":"string.quoted.double.html"},{"match":"[^>\\\\s]+","name":"entity.other.attribute-name.html"}]},"entities":{"patterns":[{"captures":{"1":{"name":"punctuation.definition.entity.html"},"912":{"name":"punctuation.definition.entity.html"}},"match":"(&)(?=[A-Za-z])((a(s(ymp(eq)?|cr|t)|n(d(slope|[dv]|and)?|g(s(t|ph)|zarr|e|le|rt(vb(d)?)?|msd(a([a-h]))?)?)|c(y|irc|d|ute|E)?|tilde|o(pf|gon)|uml|p(id|os|prox(eq)?|[Ee]|acir)?|elig|f(r)?|w((?:con|)int)|l(pha|e(ph|fsym))|acute|ring|grave|m(p|a(cr|lg))|breve)|A(s(sign|cr)|nd|MP|c(y|irc)|tilde|o(pf|gon)|uml|pplyFunction|fr|Elig|lpha|acute|ring|grave|macr|breve))|(B(scr|cy|opf|umpeq|e(cause|ta|rnoullis)|fr|a(ckslash|r(v|wed))|reve)|b(s(cr|im(e)?|ol(hsub|b)?|emi)|n(ot|e(quiv)?)|c(y|ong)|ig(s(tar|qcup)|c(irc|up|ap)|triangle(down|up)|o(times|dot|plus)|uplus|vee|wedge)|o(t(tom)?|pf|wtie|x(h([DUdu])?|times|H([DUdu])?|d([LRlr])|u([LRlr])|plus|D([LRlr])|v([HLRhlr])?|U([LRlr])|V([HLRhlr])?|minus|box))|Not|dquo|u(ll(et)?|mp(e(q)?|E)?)|prime|e(caus(e)?|t(h|ween|a)|psi|rnou|mptyv)|karow|fr|l(ock|k(1([24])|34)|a(nk|ck(square|triangle(down|left|right)?|lozenge)))|a(ck(sim(eq)?|cong|prime|epsilon)|r(vee|wed(ge)?))|r(eve|vbar)|brk(tbrk)?))|(c(s(cr|u(p(e)?|b(e)?))|h(cy|i|eck(mark)?)|ylcty|c(irc|ups(sm)?|edil|a(ps|ron))|tdot|ir(scir|c(eq|le(d(R|circ|S|dash|ast)|arrow(left|right)))?|e|fnint|E|mid)?|o(n(int|g(dot)?)|p(y(sr)?|f|rod)|lon(e(q)?)?|m(p(fn|le(xes|ment))?|ma(t)?))|dot|u(darr([lr])|p(s|c([au]p)|or|dot|brcap)?|e(sc|pr)|vee|wed|larr(p)?|r(vearrow(left|right)|ly(eq(succ|prec)|vee|wedge)|arr(m)?|ren))|e(nt(erdot)?|dil|mptyv)|fr|w((?:con|)int)|lubs(uit)?|a(cute|p(s|c([au]p)|dot|and|brcup)?|r(on|et))|r(oss|arr))|C(scr|hi|c(irc|onint|edil|aron)|ircle(Minus|Times|Dot|Plus)|Hcy|o(n(tourIntegral|int|gruent)|unterClockwiseContourIntegral|p(f|roduct)|lon(e)?)|dot|up(Cap)?|OPY|e(nterDot|dilla)|fr|lo(seCurly((?:Double|)Quote)|ckwiseContourIntegral)|a(yleys|cute|p(italDifferentialD)?)|ross))|(d(s(c([ry])|trok|ol)|har([lr])|c(y|aron)|t(dot|ri(f)?)|i(sin|e|v(ide(ontimes)?|onx)?|am(s|ond(suit)?)?|gamma)|Har|z(cy|igrarr)|o(t(square|plus|eq(dot)?|minus)?|ublebarwedge|pf|wn(harpoon(left|right)|downarrows|arrow)|llar)|d(otseq|a(rr|gger))?|u(har|arr)|jcy|e(lta|g|mptyv)|f(isht|r)|wangle|lc(orn|rop)|a(sh(v)?|leth|rr|gger)|r(c(orn|rop)|bkarow)|b(karow|lac)|Arr)|D(s(cr|trok)|c(y|aron)|Scy|i(fferentialD|a(critical(Grave|Tilde|Do(t|ubleAcute)|Acute)|mond))|o(t(Dot|Equal)?|uble(Right(Tee|Arrow)|ContourIntegral|Do(t|wnArrow)|Up((?:Down|)Arrow)|VerticalBar|L(ong(RightArrow|Left((?:Right|)Arrow))|eft(RightArrow|Tee|Arrow)))|pf|wn(Right(TeeVector|Vector(Bar)?)|Breve|Tee(Arrow)?|arrow|Left(RightVector|TeeVector|Vector(Bar)?)|Arrow(Bar|UpArrow)?))|Zcy|el(ta)?|D(otrahd)?|Jcy|fr|a(shv|rr|gger)))|(e(s(cr|im|dot)|n(sp|g)|c(y|ir(c)?|olon|aron)|t([ah])|o(pf|gon)|dot|u(ro|ml)|p(si(v|lon)?|lus|ar(sl)?)|e|D(D??ot)|q(s(im|lant(less|gtr))|c(irc|olon)|u(iv(DD)?|est|als)|vparsl)|f(Dot|r)|l(s(dot)?|inters|l)?|a(ster|cute)|r(Dot|arr)|g(s(dot)?|rave)?|x(cl|ist|p(onentiale|ectation))|m(sp(1([34]))?|pty(set|v)?|acr))|E(s(cr|im)|c(y|irc|aron)|ta|o(pf|gon)|NG|dot|uml|TH|psilon|qu(ilibrium|al(Tilde)?)|fr|lement|acute|grave|x(ists|ponentialE)|m(pty((?:|Very)SmallSquare)|acr)))|(f(scr|nof|cy|ilig|o(pf|r(k(v)?|all))|jlig|partint|emale|f(ilig|l(l??ig)|r)|l(tns|lig|at)|allingdotseq|r(own|a(sl|c(1([2-68])|78|2([35])|3([458])|45|5([68])))))|F(scr|cy|illed((?:|Very)SmallSquare)|o(uriertrf|pf|rAll)|fr))|(G(scr|c(y|irc|edil)|t|opf|dot|T|Jcy|fr|amma(d)?|reater(Greater|SlantEqual|Tilde|Equal(Less)?|FullEqual|Less)|g|breve)|g(s(cr|im([el])?)|n(sim|e(q(q)?)?|E|ap(prox)?)|c(y|irc)|t(c(c|ir)|dot|quest|lPar|r(sim|dot|eq(q?less)|less|a(pprox|rr)))?|imel|opf|dot|jcy|e(s(cc|dot(o(l)?)?|l(es)?)?|q(slant|q)?|l)?|v(nE|ertneqq)|fr|E(l)?|l([Eaj])?|a(cute|p|mma(d)?)|rave|g(g)?|breve))|(h(s(cr|trok|lash)|y(phen|bull)|circ|o(ok((?:lef|righ)tarrow)|pf|arr|rbar|mtht)|e(llip|arts(uit)?|rcon)|ks([ew]arow)|fr|a(irsp|lf|r(dcy|r(cir|w)?)|milt)|bar|Arr)|H(s(cr|trok)|circ|ilbertSpace|o(pf|rizontalLine)|ump(DownHump|Equal)|fr|a(cek|t)|ARDcy))|(i(s(cr|in(s(v)?|dot|[Ev])?)|n(care|t(cal|prod|e(rcal|gers)|larhk)?|odot|fin(tie)?)?|c(y|irc)?|t(ilde)?|i(nfin|i(i??nt)|ota)?|o(cy|ta|pf|gon)|u(kcy|ml)|jlig|prod|e(cy|xcl)|quest|f([fr])|acute|grave|m(of|ped|a(cr|th|g(part|e|line))))|I(scr|n(t(e(rsection|gral))?|visible(Comma|Times))|c(y|irc)|tilde|o(ta|pf|gon)|dot|u(kcy|ml)|Ocy|Jlig|fr|Ecy|acute|grave|m(plies|a(cr|ginaryI))?))|(j(s(cr|ercy)|c(y|irc)|opf|ukcy|fr|math)|J(s(cr|ercy)|c(y|irc)|opf|ukcy|fr))|(k(scr|hcy|c(y|edil)|opf|jcy|fr|appa(v)?|green)|K(scr|c(y|edil)|Hcy|opf|Jcy|fr|appa))|(l(s(h|cr|trok|im([eg])?|q(uo(r)?|b)|aquo)|h(ar(d|u(l)?)|blk)|n(sim|e(q(q)?)?|E|ap(prox)?)|c(y|ub|e(d??il)|aron)|Barr|t(hree|c(c|ir)|imes|dot|quest|larr|r(i([ef])?|Par))?|Har|o(ng(left((?:|right)arrow)|rightarrow|mapsto)|times|z(enge|f)?|oparrow(left|right)|p(f|lus|ar)|w(ast|bar)|a(ng|rr)|brk)|d(sh|ca|quo(r)?|r((?:d|us)har))|ur((?:ds|u)har)|jcy|par(lt)?|e(s(s(sim|dot|eq(q?gtr)|approx|gtr)|cc|dot(o(r)?)?|g(es)?)?|q(slant|q)?|ft(harpoon(down|up)|threetimes|leftarrows|arrow(tail)?|right(squigarrow|harpoons|arrow(s)?))|g)?|v(nE|ertneqq)|f(isht|loor|r)|E(g)?|l(hard|corner|tri|arr)?|a(ng(d|le)?|cute|t(e(s)?|ail)?|p|emptyv|quo|rr(sim|hk|tl|pl|fs|lp|b(fs)?)?|gran|mbda)|r(har(d)?|corner|tri|arr|m)|g(E)?|m(idot|oust(ache)?)|b(arr|r(k(sl([du])|e)|ac([ek]))|brk)|A(tail|arr|rr))|L(s(h|cr|trok)|c(y|edil|aron)|t|o(ng(RightArrow|left((?:|right)arrow)|rightarrow|Left((?:Right|)Arrow))|pf|wer((?:Righ|Lef)tArrow))|T|e(ss(Greater|SlantEqual|Tilde|EqualGreater|FullEqual|Less)|ft(Right(Vector|Arrow)|Ceiling|T(ee(Vector|Arrow)?|riangle(Bar|Equal)?)|Do(ubleBracket|wn(TeeVector|Vector(Bar)?))|Up(TeeVector|DownVector|Vector(Bar)?)|Vector(Bar)?|arrow|rightarrow|Floor|A(ngleBracket|rrow(RightArrow|Bar)?)))|Jcy|fr|l(eftarrow)?|a(ng|cute|placetrf|rr|mbda)|midot))|(M(scr|cy|inusPlus|opf|u|e(diumSpace|llintrf)|fr|ap)|m(s(cr|tpos)|ho|nplus|c(y|omma)|i(nus(d(u)?|b)?|cro|d(cir|dot|ast)?)|o(dels|pf)|dash|u((?:lti|)map)?|p|easuredangle|DDot|fr|l(cp|dr)|a(cr|p(sto(down|up|left)?)?|l(t(ese)?|e)|rker)))|(n(s(hort(parallel|mid)|c(cue|[er])?|im(e(q)?)?|u(cc(eq)?|p(set(eq(q)?)?|[Ee])?|b(set(eq(q)?)?|[Ee])?)|par|qsu([bp]e)|mid)|Rightarrow|h(par|arr|Arr)|G(t(v)?|g)|c(y|ong(dot)?|up|edil|a(p|ron))|t(ilde|lg|riangle(left(eq)?|right(eq)?)|gl)|i(s(d)?|v)?|o(t(ni(v([abc]))?|in(dot|v([abc])|E)?)?|pf)|dash|u(m(sp|ero)?)?|jcy|p(olint|ar(sl|t|allel)?|r(cue|e(c(eq)?)?)?)|e(s(im|ear)|dot|quiv|ar(hk|r(ow)?)|xist(s)?|Arr)?|v(sim|infin|Harr|dash|Dash|l(t(rie)?|e|Arr)|ap|r(trie|Arr)|g([et]))|fr|w(near|ar(hk|r(ow)?)|Arr)|V([Dd]ash)|l(sim|t(ri(e)?)?|dr|e(s(s)?|q(slant|q)?|ft((?:|right)arrow))?|E|arr|Arr)|a(ng|cute|tur(al(s)?)?|p(id|os|prox|E)?|bla)|r(tri(e)?|ightarrow|arr([cw])?|Arr)|g(sim|t(r)?|e(s|q(slant|q)?)?|E)|mid|L(t(v)?|eft((?:|right)arrow)|l)|b(sp|ump(e)?))|N(scr|c(y|edil|aron)|tilde|o(nBreakingSpace|Break|t(R(ightTriangle(Bar|Equal)?|everseElement)|Greater(Greater|SlantEqual|Tilde|Equal|FullEqual|Less)?|S(u(cceeds(SlantEqual|Tilde|Equal)?|perset(Equal)?|bset(Equal)?)|quareSu(perset(Equal)?|bset(Equal)?))|Hump(DownHump|Equal)|Nested(GreaterGreater|LessLess)|C(ongruent|upCap)|Tilde(Tilde|Equal|FullEqual)?|DoubleVerticalBar|Precedes((?:Slant|)Equal)?|E(qual(Tilde)?|lement|xists)|VerticalBar|Le(ss(Greater|SlantEqual|Tilde|Equal|Less)?|ftTriangle(Bar|Equal)?))?|pf)|u|e(sted(GreaterGreater|LessLess)|wLine|gative(MediumSpace|Thi((?:n|ck)Space)|VeryThinSpace))|Jcy|fr|acute))|(o(s(cr|ol|lash)|h(m|bar)|c(y|ir(c)?)|ti(lde|mes(as)?)|S|int|opf|d(sold|iv|ot|ash|blac)|uml|p(erp|lus|ar)|elig|vbar|f(cir|r)|l(c(ir|ross)|t|ine|arr)|a(st|cute)|r(slope|igof|or|d(er(of)?|[fm])?|v|arr)?|g(t|on|rave)|m(i(nus|cron|d)|ega|acr))|O(s(cr|lash)|c(y|irc)|ti(lde|mes)|opf|dblac|uml|penCurly((?:Double|)Quote)|ver(B(ar|rac(e|ket))|Parenthesis)|fr|Elig|acute|r|grave|m(icron|ega|acr)))|(p(s(cr|i)|h(i(v)?|one|mmat)|cy|i(tchfork|v)?|o(intint|und|pf)|uncsp|er(cnt|tenk|iod|p|mil)|fr|l(us(sim|cir|two|d([ou])|e|acir|mn|b)?|an(ck(h)?|kv))|ar(s(im|l)|t|a(llel)?)?|r(sim|n(sim|E|ap)|cue|ime(s)?|o(d|p(to)?|f(surf|line|alar))|urel|e(c(sim|n(sim|eqq|approx)|curlyeq|eq|approx)?)?|E|ap)?|m)|P(s(cr|i)|hi|cy|i|o(incareplane|pf)|fr|lusMinus|artialD|r(ime|o(duct|portion(al)?)|ecedes(SlantEqual|Tilde|Equal)?)?))|(q(scr|int|opf|u(ot|est(eq)?|at(int|ernions))|prime|fr)|Q(scr|opf|UOT|fr))|(R(s(h|cr)|ho|c(y|edil|aron)|Barr|ight(Ceiling|T(ee(Vector|Arrow)?|riangle(Bar|Equal)?)|Do(ubleBracket|wn(TeeVector|Vector(Bar)?))|Up(TeeVector|DownVector|Vector(Bar)?)|Vector(Bar)?|arrow|Floor|A(ngleBracket|rrow(Bar|LeftArrow)?))|o(undImplies|pf)|uleDelayed|e(verse(UpEquilibrium|E(quilibrium|lement)))?|fr|EG|a(ng|cute|rr(tl)?)|rightarrow)|r(s(h|cr|q(uo(r)?|b)|aquo)|h(o(v)?|ar(d|u(l)?))|nmid|c(y|ub|e(d??il)|aron)|Barr|t(hree|imes|ri([ef]|ltri)?)|i(singdotseq|ng|ght(squigarrow|harpoon(down|up)|threetimes|left(harpoons|arrows)|arrow(tail)?|rightarrows))|Har|o(times|p(f|lus|ar)|a(ng|rr)|brk)|d(sh|ca|quo(r)?|ldhar)|uluhar|p(polint|ar(gt)?)|e(ct|al(s|ine|part)?|g)|f(isht|loor|r)|l(har|arr|m)|a(ng([de]|le)?|c(ute|e)|t(io(nals)?|ail)|dic|emptyv|quo|rr(sim|hk|c|tl|pl|fs|w|lp|ap|b(fs)?)?)|rarr|x|moust(ache)?|b(arr|r(k(sl([du])|e)|ac([ek]))|brk)|A(tail|arr|rr)))|(s(s(cr|tarf|etmn|mile)|h(y|c(hcy|y)|ort(parallel|mid)|arp)|c(sim|y|n(sim|E|ap)|cue|irc|polint|e(dil)?|E|a(p|ron))?|t(ar(f)?|r(ns|aight(phi|epsilon)))|i(gma([fv])?|m(ne|dot|plus|e(q)?|l(E)?|rarr|g(E)?)?)|zlig|o(pf|ftcy|l(b(ar)?)?)|dot([be])?|u(ng|cc(sim|n(sim|eqq|approx)|curlyeq|eq|approx)?|p(s(im|u([bp])|et(neq(q)?|eq(q)?)?)|hs(ol|ub)|1|n([Ee])|2|d(sub|ot)|3|plus|e(dot)?|E|larr|mult)?|m|b(s(im|u([bp])|et(neq(q)?|eq(q)?)?)|n([Ee])|dot|plus|e(dot)?|E|rarr|mult)?)|pa(des(uit)?|r)|e(swar|ct|tm(n|inus)|ar(hk|r(ow)?)|xt|mi|Arr)|q(su(p(set(eq)?|e)?|b(set(eq)?|e)?)|c(up(s)?|ap(s)?)|u(f|ar([ef]))?)|fr(own)?|w(nwar|ar(hk|r(ow)?)|Arr)|larr|acute|rarr|m(t(e(s)?)?|i(d|le)|eparsl|a(shp|llsetminus))|bquo)|S(scr|hort((?:Right|Down|Up|Left)Arrow)|c(y|irc|edil|aron)?|tar|igma|H(cy|CHcy)|opf|u(c(hThat|ceeds(SlantEqual|Tilde|Equal)?)|p(set|erset(Equal)?)?|m|b(set(Equal)?)?)|OFTcy|q(uare(Su(perset(Equal)?|bset(Equal)?)|Intersection|Union)?|rt)|fr|acute|mallCircle))|(t(s(hcy|c([ry])|trok)|h(i(nsp|ck(sim|approx))|orn|e(ta(sym|v)?|re(4|fore))|k(sim|ap))|c(y|edil|aron)|i(nt|lde|mes(d|b(ar)?)?)|o(sa|p(cir|f(ork)?|bot)?|ea)|dot|prime|elrec|fr|w(ixt|ohead((?:lef|righ)tarrow))|a(u|rget)|r(i(sb|time|dot|plus|e|angle(down|q|left(eq)?|right(eq)?)?|minus)|pezium|ade)|brk)|T(s(cr|trok)|RADE|h(i((?:n|ck)Space)|e(ta|refore))|c(y|edil|aron)|S(H??cy)|ilde(Tilde|Equal|FullEqual)?|HORN|opf|fr|a([bu])|ripleDot))|(u(scr|h(ar([lr])|blk)|c(y|irc)|t(ilde|dot|ri(f)?)|Har|o(pf|gon)|d(har|arr|blac)|u(arr|ml)|p(si(h|lon)?|harpoon(left|right)|downarrow|uparrows|lus|arrow)|f(isht|r)|wangle|l(c(orn(er)?|rop)|tri)|a(cute|rr)|r(c(orn(er)?|rop)|tri|ing)|grave|m(l|acr)|br(cy|eve)|Arr)|U(scr|n(ion(Plus)?|der(B(ar|rac(e|ket))|Parenthesis))|c(y|irc)|tilde|o(pf|gon)|dblac|uml|p(si(lon)?|downarrow|Tee(Arrow)?|per((?:Righ|Lef)tArrow)|DownArrow|Equilibrium|arrow|Arrow(Bar|DownArrow)?)|fr|a(cute|rr(ocir)?)|ring|grave|macr|br(cy|eve)))|(v(s(cr|u(pn([Ee])|bn([Ee])))|nsu([bp])|cy|Bar(v)?|zigzag|opf|dash|prop|e(e(eq|bar)?|llip|r(t|bar))|Dash|fr|ltri|a(ngrt|r(s(igma|u(psetneq(q)?|bsetneq(q)?))|nothing|t(heta|riangle(left|right))|p(hi|i|ropto)|epsilon|kappa|r(ho)?))|rtri|Arr)|V(scr|cy|opf|dash(l)?|e(e|r(yThinSpace|t(ical(Bar|Separator|Tilde|Line))?|bar))|Dash|vdash|fr|bar))|(w(scr|circ|opf|p|e(ierp|d(ge(q)?|bar))|fr|r(eath)?)|W(scr|circ|opf|edge|fr))|(X(scr|i|opf|fr)|x(s(cr|qcup)|h([Aa]rr)|nis|c(irc|up|ap)|i|o(time|dot|p(f|lus))|dtri|u(tri|plus)|vee|fr|wedge|l([Aa]rr)|r([Aa]rr)|map))|(y(scr|c(y|irc)|icy|opf|u(cy|ml)|en|fr|ac(y|ute))|Y(scr|c(y|irc)|opf|uml|Icy|Ucy|fr|acute|Acy))|(z(scr|hcy|c(y|aron)|igrarr|opf|dot|e(ta|etrf)|fr|w(n?j)|acute)|Z(scr|c(y|aron)|Hcy|opf|dot|e(ta|roWidthSpace)|fr|acute)))(;)","name":"constant.character.entity.named.$2.html"},{"captures":{"1":{"name":"punctuation.definition.entity.html"},"3":{"name":"punctuation.definition.entity.html"}},"match":"(&)#[0-9]+(;)","name":"constant.character.entity.numeric.decimal.html"},{"captures":{"1":{"name":"punctuation.definition.entity.html"},"3":{"name":"punctuation.definition.entity.html"}},"match":"(&)#[Xx]\\\\h+(;)","name":"constant.character.entity.numeric.hexadecimal.html"},{"match":"&(?=[0-9A-Za-z]+;)","name":"invalid.illegal.ambiguous-ampersand.html"}]},"math":{"patterns":[{"begin":"(?i)(<)(math)(?=\\\\s|/?>)(?:(([^\\"'>]|\\"[^\\"]*\\"|'[^']*')*)(>))?","beginCaptures":{"0":{"name":"meta.tag.structure.$2.start.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"patterns":[{"include":"#attribute"}]},"5":{"name":"punctuation.definition.tag.end.html"}},"end":"(?i)(</)(\\\\2)\\\\s*(>)","endCaptures":{"0":{"name":"meta.tag.structure.$2.end.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.element.structure.$2.html","patterns":[{"begin":"(?<!>)\\\\G","end":">","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.structure.start.html","patterns":[{"include":"#attribute"}]},{"include":"#tags"}]}],"repository":{"attribute":{"patterns":[{"begin":"(s(hift|ymmetric|cript(sizemultiplier|level|minsize)|t(ackalign|retchy)|ide|u([bp]scriptshift)|e(parator(s)?|lection)|rc)|h(eight|ref)|n(otation|umalign)|c(haralign|olumn(spa(n|cing)|width|lines|align)|lose|rossout)|i(n(dent(shift(first|last)?|target|align(first|last)?)|fixlinebreakstyle)|d)|o(pen|verflow)|d(i(splay(style)?|r)|e(nomalign|cimalpoint|pth))|position|e(dge|qual(columns|rows))|voffset|f(orm|ence|rame(spacing)?)|width|l(space|ine(thickness|leading|break(style|multchar)?)|o(ngdivstyle|cation)|ength|quote|argeop)|a(c(cent(under)?|tiontype)|l(t(text|img(-(height|valign|width))?)|ign(mentscope)?))|r(space|ow(spa(n|cing)|lines|align)|quote)|groupalign|x(link:href|mlns)|m(in(size|labelspacing)|ovablelimits|a(th(size|color|variant|background)|xsize))|bevelled)(?![-:\\\\w])","beginCaptures":{"0":{"name":"entity.other.attribute-name.html"}},"end":"(?=\\\\s*+[^=\\\\s])","name":"meta.attribute.$1.html","patterns":[{"include":"#attribute-interior"}]},{"begin":"([^\\\\x00- \\"'/<=>\\\\x7F-\\\\x{9F}\uFDD0-\uFDEF\uFFFE\uFFFF\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\\\\x{4FFFE}\\\\x{4FFFF}\\\\x{5FFFE}\\\\x{5FFFF}\\\\x{6FFFE}\\\\x{6FFFF}\\\\x{7FFFE}\\\\x{7FFFF}\\\\x{8FFFE}\\\\x{8FFFF}\\\\x{9FFFE}\\\\x{9FFFF}\\\\x{AFFFE}\\\\x{AFFFF}\\\\x{BFFFE}\\\\x{BFFFF}\\\\x{CFFFE}\\\\x{CFFFF}\\\\x{DFFFE}\\\\x{DFFFF}\\\\x{EFFFE}\\\\x{EFFFF}\\\\x{FFFFE}\\\\x{FFFFF}\\\\x{10FFFE}\\\\x{10FFFF}]+)","beginCaptures":{"0":{"name":"entity.other.attribute-name.html"}},"end":"(?=\\\\s*+[^=\\\\s])","name":"meta.attribute.unrecognized.$1.html","patterns":[{"include":"#attribute-interior"}]},{"match":"[^>\\\\s]+","name":"invalid.illegal.character-not-allowed-here.html"}]},"tags":{"patterns":[{"include":"#comment"},{"include":"#cdata"},{"captures":{"0":{"name":"meta.tag.structure.math.$2.void.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"patterns":[{"include":"#attribute"}]},"5":{"name":"punctuation.definition.tag.end.html"}},"match":"(?i)(<)(annotation|annotation-xml|semantics|menclose|merror|mfenced|mfrac|mpadded|mphantom|mroot|mrow|msqrt|mstyle|mmultiscripts|mover|mprescripts|msub|msubsup|msup|munder|munderover|none|mlabeledtr|mtable|mtd|mtr|mlongdiv|mscarries|mscarry|msgroup|msline|msrow|mstack|maction)(?=\\\\s|/?>)(([^\\"'>]|\\"[^\\"]*\\"|'[^']*')*)(/>)","name":"meta.element.structure.math.$2.html"},{"begin":"(?i)(<)(annotation|annotation-xml|semantics|menclose|merror|mfenced|mfrac|mpadded|mphantom|mroot|mrow|msqrt|mstyle|mmultiscripts|mover|mprescripts|msub|msubsup|msup|munder|munderover|none|mlabeledtr|mtable|mtd|mtr|mlongdiv|mscarries|mscarry|msgroup|msline|msrow|mstack|maction)(?=\\\\s|/?>)(?:(([^\\"'>]|\\"[^\\"]*\\"|'[^']*')*)(>))?","beginCaptures":{"0":{"name":"meta.tag.structure.math.$2.start.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"patterns":[{"include":"#attribute"}]},"5":{"name":"punctuation.definition.tag.end.html"}},"end":"(?i)(</)(\\\\2)\\\\s*(>)|(/>)|(?=</\\\\w+)","endCaptures":{"0":{"name":"meta.tag.structure.math.$2.end.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"name":"punctuation.definition.tag.end.html"},"4":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.element.structure.math.$2.html","patterns":[{"begin":"(?<!>)\\\\G","end":"(?=/>)|>","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.structure.start.html","patterns":[{"include":"#attribute"}]},{"include":"#tags"}]},{"captures":{"0":{"name":"meta.tag.inline.math.$2.void.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"patterns":[{"include":"#attribute"}]},"5":{"name":"punctuation.definition.tag.end.html"}},"match":"(?i)(<)(m(?:[inos]|space|text|aligngroup|alignmark))(?=\\\\s|/?>)(([^\\"'>]|\\"[^\\"]*\\"|'[^']*')*)(/>)","name":"meta.element.inline.math.$2.html"},{"begin":"(?i)(<)(m(?:[inos]|space|text|aligngroup|alignmark))(?=\\\\s|/?>)(?:(([^\\"'>]|\\"[^\\"]*\\"|'[^']*')*)(>))?","beginCaptures":{"0":{"name":"meta.tag.inline.math.$2.start.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"patterns":[{"include":"#attribute"}]},"5":{"name":"punctuation.definition.tag.end.html"}},"end":"(?i)(</)(\\\\2)\\\\s*(>)|(/>)|(?=</\\\\w+)","endCaptures":{"0":{"name":"meta.tag.inline.math.$2.end.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"name":"punctuation.definition.tag.end.html"},"4":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.element.inline.math.$2.html","patterns":[{"begin":"(?<!>)\\\\G","end":"(?=/>)|>","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.inline.start.html","patterns":[{"include":"#attribute"}]},{"include":"#tags"}]},{"captures":{"0":{"name":"meta.tag.object.math.$2.void.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"patterns":[{"include":"#attribute"}]},"5":{"name":"punctuation.definition.tag.end.html"}},"match":"(?i)(<)(mglyph)(?=\\\\s|/?>)(([^\\"'>]|\\"[^\\"]*\\"|'[^']*')*)(/>)","name":"meta.element.object.math.$2.html"},{"begin":"(?i)(<)(mglyph)(?=\\\\s|/?>)(?:(([^\\"'>]|\\"[^\\"]*\\"|'[^']*')*)(>))?","beginCaptures":{"0":{"name":"meta.tag.object.math.$2.start.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"patterns":[{"include":"#attribute"}]},"5":{"name":"punctuation.definition.tag.end.html"}},"end":"(?i)(</)(\\\\2)\\\\s*(>)|(/>)|(?=</\\\\w+)","endCaptures":{"0":{"name":"meta.tag.object.math.$2.end.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"name":"punctuation.definition.tag.end.html"},"4":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.element.object.math.$2.html","patterns":[{"begin":"(?<!>)\\\\G","end":"(?=/>)|>","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.object.start.html","patterns":[{"include":"#attribute"}]},{"include":"#tags"}]},{"captures":{"0":{"name":"meta.tag.other.invalid.void.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"name":"invalid.illegal.unrecognized-tag.html"},"4":{"patterns":[{"include":"#attribute"}]},"6":{"name":"punctuation.definition.tag.end.html"}},"match":"(?i)(<)(([:\\\\w]+))(?=\\\\s|/?>)(([^\\"'>]|\\"[^\\"]*\\"|'[^']*')*)(/>)","name":"meta.element.other.invalid.html"},{"begin":"(?i)(<)((\\\\w[^>\\\\s]*))(?=\\\\s|/?>)(?:(([^\\"'>]|\\"[^\\"]*\\"|'[^']*')*)(>))?","beginCaptures":{"0":{"name":"meta.tag.other.invalid.start.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"name":"invalid.illegal.unrecognized-tag.html"},"4":{"patterns":[{"include":"#attribute"}]},"6":{"name":"punctuation.definition.tag.end.html"}},"end":"(?i)(</)((\\\\2))\\\\s*(>)|(/>)|(?=</\\\\w+)","endCaptures":{"0":{"name":"meta.tag.other.invalid.end.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"name":"invalid.illegal.unrecognized-tag.html"},"4":{"name":"punctuation.definition.tag.end.html"},"5":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.element.other.invalid.html","patterns":[{"begin":"(?<!>)\\\\G","end":"(?=/>)|>","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.other.invalid.start.html","patterns":[{"include":"#attribute"}]},{"include":"#tags"}]},{"include":"#tags-invalid"}]}}},"svg":{"patterns":[{"begin":"(?i)(<)(svg)(?=\\\\s|/?>)(?:(([^\\"'>]|\\"[^\\"]*\\"|'[^']*')*)(>))?","beginCaptures":{"0":{"name":"meta.tag.structure.$2.start.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"patterns":[{"include":"#attribute"}]},"5":{"name":"punctuation.definition.tag.end.html"}},"end":"(?i)(</)(\\\\2)\\\\s*(>)","endCaptures":{"0":{"name":"meta.tag.structure.$2.end.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.element.structure.$2.html","patterns":[{"begin":"(?<!>)\\\\G","end":">","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.structure.start.html","patterns":[{"include":"#attribute"}]},{"include":"#tags"}]}],"repository":{"attribute":{"patterns":[{"begin":"(s(hape-rendering|ystemLanguage|cale|t(yle|itchTiles|op-(color|opacity)|dDeviation|em([hv])|artOffset|r(i(ng|kethrough-(thickness|position))|oke(-(opacity|dash(offset|array)|width|line(cap|join)|miterlimit))?))|urfaceScale|p(e(cular(Constant|Exponent)|ed)|acing|readMethod)|eed|lope)|h(oriz-(origin-x|adv-x)|eight|anging|ref(lang)?)|y([12]|ChannelSelector)?|n(umOctaves|ame)|c(y|o(ntentS((?:cript|tyle)Type)|lor(-(interpolation(-filters)?|profile|rendering))?)|ursor|l(ip(-(path|rule)|PathUnits)?|ass)|a(p-height|lcMode)|x)|t(ype|o|ext(-(decoration|anchor|rendering)|Length)|a(rget([XY])?|b(index|leValues))|ransform)|i(n(tercept|2)?|d(eographic)?|mage-rendering)|z(oomAndPan)?|o(p(erator|acity)|ver(flow|line-(thickness|position))|ffset|r(i(ent(ation)?|gin)|der))|d(y|i(splay|visor|ffuseConstant|rection)|ominant-baseline|ur|e(scent|celerate)|x)?|u(1|n(i(code(-(range|bidi))?|ts-per-em)|derline-(thickness|position))|2)|p(ing|oint(s(At([XYZ]))?|er-events)|a(nose-1|t(h(Length)?|tern(ContentUnits|Transform|Units))|int-order)|r(imitiveUnits|eserveA(spectRatio|lpha)))|e(n(d|able-background)|dgeMode|levation|x(ternalResourcesRequired|ponent))|v(i(sibility|ew(Box|Target))|-(hanging|ideographic|alphabetic|mathematical)|e(ctor-effect|r(sion|t-(origin-([xy])|adv-y)))|alues)|k([123]|e(y(Splines|Times|Points)|rn(ing|el(Matrix|UnitLength)))|4)?|f(y|il(ter(Res|Units)?|l(-(opacity|rule))?)|o(nt-(s(t(yle|retch)|ize(-adjust)?)|variant|family|weight)|rmat)|lood-(color|opacity)|r(om)?|x)|w(idth(s)?|ord-spacing|riting-mode)|l(i(ghting-color|mitingConeAngle)|ocal|e(ngthAdjust|tter-spacing)|ang)|a(scent|cc(umulate|ent-height)|ttribute(Name|Type)|zimuth|dditive|utoReverse|l(ignment-baseline|phabetic|lowReorder)|rabic-form|mplitude)|r(y|otate|e(s(tart|ult)|ndering-intent|peat(Count|Dur)|quired(Extensions|Features)|f([XY]|errerPolicy)|l)|adius|x)?|g([12]|lyph(Ref|-(name|orientation-(horizontal|vertical)))|radient(Transform|Units))|x([12]|ChannelSelector|-height|link:(show|href|t(ype|itle)|a(ctuate|rcrole)|role)|ml:(space|lang|base))?|m(in|ode|e(thod|dia)|a(sk((?:Content|)Units)?|thematical|rker(Height|-(start|end|mid)|Units|Width)|x))|b(y|ias|egin|ase(Profile|line-shift|Frequency)|box))(?![-:\\\\w])","beginCaptures":{"0":{"name":"entity.other.attribute-name.html"}},"end":"(?=\\\\s*+[^=\\\\s])","name":"meta.attribute.$1.html","patterns":[{"include":"#attribute-interior"}]},{"begin":"([^\\\\x00- \\"'/<=>\\\\x7F-\\\\x{9F}\uFDD0-\uFDEF\uFFFE\uFFFF\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\\\\x{4FFFE}\\\\x{4FFFF}\\\\x{5FFFE}\\\\x{5FFFF}\\\\x{6FFFE}\\\\x{6FFFF}\\\\x{7FFFE}\\\\x{7FFFF}\\\\x{8FFFE}\\\\x{8FFFF}\\\\x{9FFFE}\\\\x{9FFFF}\\\\x{AFFFE}\\\\x{AFFFF}\\\\x{BFFFE}\\\\x{BFFFF}\\\\x{CFFFE}\\\\x{CFFFF}\\\\x{DFFFE}\\\\x{DFFFF}\\\\x{EFFFE}\\\\x{EFFFF}\\\\x{FFFFE}\\\\x{FFFFF}\\\\x{10FFFE}\\\\x{10FFFF}]+)","beginCaptures":{"0":{"name":"entity.other.attribute-name.html"}},"end":"(?=\\\\s*+[^=\\\\s])","name":"meta.attribute.unrecognized.$1.html","patterns":[{"include":"#attribute-interior"}]},{"match":"[^>\\\\s]+","name":"invalid.illegal.character-not-allowed-here.html"}]},"tags":{"patterns":[{"include":"#comment"},{"include":"#cdata"},{"captures":{"0":{"name":"meta.tag.metadata.svg.$2.void.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"patterns":[{"include":"#attribute"}]},"5":{"name":"punctuation.definition.tag.end.html"}},"match":"(?i)(<)(color-profile|desc|metadata|script|style|title)(?=\\\\s|/?>)(([^\\"'>]|\\"[^\\"]*\\"|'[^']*')*)(/>)","name":"meta.element.metadata.svg.$2.html"},{"begin":"(?i)(<)(color-profile|desc|metadata|script|style|title)(?=\\\\s|/?>)(?:(([^\\"'>]|\\"[^\\"]*\\"|'[^']*')*)(>))?","beginCaptures":{"0":{"name":"meta.tag.metadata.svg.$2.start.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"patterns":[{"include":"#attribute"}]},"5":{"name":"punctuation.definition.tag.end.html"}},"end":"(?i)(</)(\\\\2)\\\\s*(>)|(/>)|(?=</\\\\w+)","endCaptures":{"0":{"name":"meta.tag.metadata.svg.$2.end.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"name":"punctuation.definition.tag.end.html"},"4":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.element.metadata.svg.$2.html","patterns":[{"begin":"(?<!>)\\\\G","end":"(?=/>)|>","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.metadata.start.html","patterns":[{"include":"#attribute"}]},{"include":"#tags"}]},{"captures":{"0":{"name":"meta.tag.structure.svg.$2.void.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"patterns":[{"include":"#attribute"}]},"5":{"name":"punctuation.definition.tag.end.html"}},"match":"(?i)(<)(animateMotion|clipPath|defs|feComponentTransfer|feDiffuseLighting|feMerge|feSpecularLighting|filter|g|hatch|linearGradient|marker|mask|mesh|meshgradient|meshpatch|meshrow|pattern|radialGradient|switch|text|textPath)(?=\\\\s|/?>)(([^\\"'>]|\\"[^\\"]*\\"|'[^']*')*)(/>)","name":"meta.element.structure.svg.$2.html"},{"begin":"(?i)(<)(animateMotion|clipPath|defs|feComponentTransfer|feDiffuseLighting|feMerge|feSpecularLighting|filter|g|hatch|linearGradient|marker|mask|mesh|meshgradient|meshpatch|meshrow|pattern|radialGradient|switch|text|textPath)(?=\\\\s|/?>)(?:(([^\\"'>]|\\"[^\\"]*\\"|'[^']*')*)(>))?","beginCaptures":{"0":{"name":"meta.tag.structure.svg.$2.start.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"patterns":[{"include":"#attribute"}]},"5":{"name":"punctuation.definition.tag.end.html"}},"end":"(?i)(</)(\\\\2)\\\\s*(>)|(/>)|(?=</\\\\w+)","endCaptures":{"0":{"name":"meta.tag.structure.svg.$2.end.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"name":"punctuation.definition.tag.end.html"},"4":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.element.structure.svg.$2.html","patterns":[{"begin":"(?<!>)\\\\G","end":"(?=/>)|>","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.structure.start.html","patterns":[{"include":"#attribute"}]},{"include":"#tags"}]},{"captures":{"0":{"name":"meta.tag.inline.svg.$2.void.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"patterns":[{"include":"#attribute"}]},"5":{"name":"punctuation.definition.tag.end.html"}},"match":"(?i)(<)(a|animate|discard|feBlend|feColorMatrix|feComposite|feConvolveMatrix|feDisplacementMap|feDistantLight|feDropShadow|feFlood|feFuncA|feFuncB|feFuncG|feFuncR|feGaussianBlur|feMergeNode|feMorphology|feOffset|fePointLight|feSpotLight|feTile|feTurbulence|hatchPath|mpath|set|solidcolor|stop|tspan)(?=\\\\s|/?>)(([^\\"'>]|\\"[^\\"]*\\"|'[^']*')*)(/>)","name":"meta.element.inline.svg.$2.html"},{"begin":"(?i)(<)(a|animate|discard|feBlend|feColorMatrix|feComposite|feConvolveMatrix|feDisplacementMap|feDistantLight|feDropShadow|feFlood|feFuncA|feFuncB|feFuncG|feFuncR|feGaussianBlur|feMergeNode|feMorphology|feOffset|fePointLight|feSpotLight|feTile|feTurbulence|hatchPath|mpath|set|solidcolor|stop|tspan)(?=\\\\s|/?>)(?:(([^\\"'>]|\\"[^\\"]*\\"|'[^']*')*)(>))?","beginCaptures":{"0":{"name":"meta.tag.inline.svg.$2.start.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"patterns":[{"include":"#attribute"}]},"5":{"name":"punctuation.definition.tag.end.html"}},"end":"(?i)(</)(\\\\2)\\\\s*(>)|(/>)|(?=</\\\\w+)","endCaptures":{"0":{"name":"meta.tag.inline.svg.$2.end.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"name":"punctuation.definition.tag.end.html"},"4":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.element.inline.svg.$2.html","patterns":[{"begin":"(?<!>)\\\\G","end":"(?=/>)|>","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.inline.start.html","patterns":[{"include":"#attribute"}]},{"include":"#tags"}]},{"captures":{"0":{"name":"meta.tag.object.svg.$2.void.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"patterns":[{"include":"#attribute"}]},"5":{"name":"punctuation.definition.tag.end.html"}},"match":"(?i)(<)(circle|ellipse|feImage|foreignObject|image|line|path|polygon|polyline|rect|symbol|use|view)(?=\\\\s|/?>)(([^\\"'>]|\\"[^\\"]*\\"|'[^']*')*)(/>)","name":"meta.element.object.svg.$2.html"},{"begin":"(?i)(<)(a|circle|ellipse|feImage|foreignObject|image|line|path|polygon|polyline|rect|symbol|use|view)(?=\\\\s|/?>)(?:(([^\\"'>]|\\"[^\\"]*\\"|'[^']*')*)(>))?","beginCaptures":{"0":{"name":"meta.tag.object.svg.$2.start.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"patterns":[{"include":"#attribute"}]},"5":{"name":"punctuation.definition.tag.end.html"}},"end":"(?i)(</)(\\\\2)\\\\s*(>)|(/>)|(?=</\\\\w+)","endCaptures":{"0":{"name":"meta.tag.object.svg.$2.end.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"name":"punctuation.definition.tag.end.html"},"4":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.element.object.svg.$2.html","patterns":[{"begin":"(?<!>)\\\\G","end":"(?=/>)|>","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.object.start.html","patterns":[{"include":"#attribute"}]},{"include":"#tags"}]},{"captures":{"0":{"name":"meta.tag.other.svg.$2.void.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"name":"invalid.deprecated.html"},"4":{"patterns":[{"include":"#attribute"}]},"6":{"name":"punctuation.definition.tag.end.html"}},"match":"(?i)(<)((altGlyph|altGlyphDef|altGlyphItem|animateColor|animateTransform|cursor|font|font-face|font-face-format|font-face-name|font-face-src|font-face-uri|glyph|glyphRef|hkern|missing-glyph|tref|vkern))(?=\\\\s|/?>)(([^\\"'>]|\\"[^\\"]*\\"|'[^']*')*)(/>)","name":"meta.element.other.svg.$2.html"},{"begin":"(?i)(<)((altGlyph|altGlyphDef|altGlyphItem|animateColor|animateTransform|cursor|font|font-face|font-face-format|font-face-name|font-face-src|font-face-uri|glyph|glyphRef|hkern|missing-glyph|tref|vkern))(?=\\\\s|/?>)(?:(([^\\"'>]|\\"[^\\"]*\\"|'[^']*')*)(>))?","beginCaptures":{"0":{"name":"meta.tag.other.svg.$2.start.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"name":"invalid.deprecated.html"},"4":{"patterns":[{"include":"#attribute"}]},"6":{"name":"punctuation.definition.tag.end.html"}},"end":"(?i)(</)((\\\\2))\\\\s*(>)|(/>)|(?=</\\\\w+)","endCaptures":{"0":{"name":"meta.tag.other.svg.$2.end.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"name":"invalid.deprecated.html"},"4":{"name":"punctuation.definition.tag.end.html"},"5":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.element.other.svg.$2.html","patterns":[{"begin":"(?<!>)\\\\G","end":"(?=/>)|>","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.other.start.html","patterns":[{"include":"#attribute"}]},{"include":"#tags"}]},{"captures":{"0":{"name":"meta.tag.other.invalid.void.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"name":"invalid.illegal.unrecognized-tag.html"},"4":{"patterns":[{"include":"#attribute"}]},"6":{"name":"punctuation.definition.tag.end.html"}},"match":"(?i)(<)(([:\\\\w]+))(?=\\\\s|/?>)(([^\\"'>]|\\"[^\\"]*\\"|'[^']*')*)(/>)","name":"meta.element.other.invalid.html"},{"begin":"(?i)(<)((\\\\w[^>\\\\s]*))(?=\\\\s|/?>)(?:(([^\\"'>]|\\"[^\\"]*\\"|'[^']*')*)(>))?","beginCaptures":{"0":{"name":"meta.tag.other.invalid.start.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"name":"invalid.illegal.unrecognized-tag.html"},"4":{"patterns":[{"include":"#attribute"}]},"6":{"name":"punctuation.definition.tag.end.html"}},"end":"(?i)(</)((\\\\2))\\\\s*(>)|(/>)|(?=</\\\\w+)","endCaptures":{"0":{"name":"meta.tag.other.invalid.end.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"name":"invalid.illegal.unrecognized-tag.html"},"4":{"name":"punctuation.definition.tag.end.html"},"5":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.element.other.invalid.html","patterns":[{"begin":"(?<!>)\\\\G","end":"(?=/>)|>","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.other.invalid.start.html","patterns":[{"include":"#attribute"}]},{"include":"#tags"}]},{"include":"#tags-invalid"}]}}},"tags-invalid":{"patterns":[{"begin":"(</?)((\\\\w[^>\\\\s]*))(?<!/)","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"name":"invalid.illegal.unrecognized-tag.html"}},"end":"((?: ?/)?>)","endCaptures":{"1":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.other.$2.html","patterns":[{"include":"#attribute"}]}]},"tags-valid":{"patterns":[{"begin":"(^[\\\\t ]+)?(?=<(?i:style)\\\\b(?!-))","beginCaptures":{"1":{"name":"punctuation.whitespace.embedded.leading.html"}},"end":"(?!\\\\G)([\\\\t ]*$\\\\n?)?","endCaptures":{"1":{"name":"punctuation.whitespace.embedded.trailing.html"}},"patterns":[{"begin":"(?i)(<)(style)(?=\\\\s|/?>)","beginCaptures":{"0":{"name":"meta.tag.metadata.style.start.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"}},"end":"(?i)((<)/)(style)\\\\s*(>)","endCaptures":{"0":{"name":"meta.tag.metadata.style.end.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"source.css-ignored-vscode"},"3":{"name":"entity.name.tag.html"},"4":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.embedded.block.html","patterns":[{"begin":"\\\\G","captures":{"1":{"name":"punctuation.definition.tag.end.html"}},"end":"(>)","name":"meta.tag.metadata.style.start.html","patterns":[{"include":"#attribute"}]},{"begin":"(?!\\\\G)","end":"(?=</(?i:style))","name":"source.css","patterns":[{"include":"source.css"}]}]}]},{"begin":"(^[\\\\t ]+)?(?=<(?i:script)\\\\b(?!-))","beginCaptures":{"1":{"name":"punctuation.whitespace.embedded.leading.html"}},"end":"(?!\\\\G)([\\\\t ]*$\\\\n?)?","endCaptures":{"1":{"name":"punctuation.whitespace.embedded.trailing.html"}},"patterns":[{"begin":"(<)((?i:script))\\\\b","beginCaptures":{"0":{"name":"meta.tag.metadata.script.start.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"}},"end":"(/)((?i:script))(>)","endCaptures":{"0":{"name":"meta.tag.metadata.script.end.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.embedded.block.html","patterns":[{"begin":"\\\\G","end":"(?=/)","patterns":[{"begin":"(>)","beginCaptures":{"0":{"name":"meta.tag.metadata.script.start.html"},"1":{"name":"punctuation.definition.tag.end.html"}},"end":"((<))(?=/(?i:script))","endCaptures":{"0":{"name":"meta.tag.metadata.script.end.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"source.js-ignored-vscode"}},"patterns":[{"begin":"\\\\G","end":"(?=</(?i:script))","name":"source.js","patterns":[{"begin":"(^[\\\\t ]+)?(?=//)","beginCaptures":{"1":{"name":"punctuation.whitespace.comment.leading.js"}},"end":"(?!\\\\G)","patterns":[{"begin":"//","beginCaptures":{"0":{"name":"punctuation.definition.comment.js"}},"end":"(?=<\/script)|\\\\n","name":"comment.line.double-slash.js"}]},{"begin":"/\\\\*","captures":{"0":{"name":"punctuation.definition.comment.js"}},"end":"\\\\*/|(?=<\/script)","name":"comment.block.js"},{"include":"source.js"}]}]},{"begin":"\\\\G","end":"(?i:(?=>|type(?=[=\\\\s])(?!\\\\s*=\\\\s*(''|\\"\\"|([\\"']?)(text/(javascript(1\\\\.[0-5])?|x-javascript|jscript|livescript|(x-)?ecmascript|babel)|application/((?:(x-)?jav|(x-)?ecm)ascript)|module)[\\"'>\\\\s]))))","name":"meta.tag.metadata.script.start.html","patterns":[{"include":"#attribute"}]},{"begin":"(?i:(?=type\\\\s*=\\\\s*([\\"']?)text/(x-handlebars|(x-(handlebars-)?|ng-)?template|html)[\\"'>\\\\s]))","end":"((<))(?=/(?i:script))","endCaptures":{"0":{"name":"meta.tag.metadata.script.end.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"text.html.basic"}},"patterns":[{"begin":"\\\\G","end":"(>)","endCaptures":{"1":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.metadata.script.start.html","patterns":[{"include":"#attribute"}]},{"begin":"(?!\\\\G)","end":"(?=</(?i:script))","name":"text.html.basic","patterns":[{"include":"text.html.basic"}]}]},{"begin":"(?=(?i:type))","end":"(<)(?=/(?i:script))","endCaptures":{"0":{"name":"meta.tag.metadata.script.end.html"},"1":{"name":"punctuation.definition.tag.begin.html"}},"patterns":[{"begin":"\\\\G","end":"(>)","endCaptures":{"1":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.metadata.script.start.html","patterns":[{"include":"#attribute"}]},{"begin":"(?!\\\\G)","end":"(?=</(?i:script))","name":"source.unknown"}]}]}]}]},{"begin":"(?i)(<)(base|link|meta)(?=\\\\s|/?>)","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"}},"end":"/?>","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.metadata.$2.void.html","patterns":[{"include":"#attribute"}]},{"begin":"(?i)(<)(noscript|title)(?=\\\\s|/?>)","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"}},"end":">","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.metadata.$2.start.html","patterns":[{"include":"#attribute"}]},{"begin":"(?i)(</)(noscript|title)(?=\\\\s|/?>)","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"}},"end":">","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.metadata.$2.end.html","patterns":[{"include":"#attribute"}]},{"begin":"(?i)(<)(col|hr|input)(?=\\\\s|/?>)","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"}},"end":"/?>","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.structure.$2.void.html","patterns":[{"include":"#attribute"}]},{"begin":"(?i)(<)(address|article|aside|blockquote|body|button|caption|colgroup|datalist|dd|details|dialog|div|dl|dt|fieldset|figcaption|figure|footer|form|head|header|hgroup|html|h[1-6]|label|legend|li|main|map|menu|meter|nav|ol|optgroup|option|output|p|pre|progress|section|select|slot|summary|table|tbody|td|template|textarea|tfoot|th|thead|tr|ul)(?=\\\\s|/?>)","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"}},"end":">","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.structure.$2.start.html","patterns":[{"include":"#attribute"}]},{"begin":"(?i)(</)(address|article|aside|blockquote|body|button|caption|colgroup|datalist|dd|details|dialog|div|dl|dt|fieldset|figcaption|figure|footer|form|head|header|hgroup|html|h[1-6]|label|legend|li|main|map|menu|meter|nav|ol|optgroup|option|output|p|pre|progress|section|select|slot|summary|table|tbody|td|template|textarea|tfoot|th|thead|tr|ul)(?=\\\\s|/?>)","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"}},"end":">","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.structure.$2.end.html","patterns":[{"include":"#attribute"}]},{"begin":"(?i)(<)(area|br|wbr)(?=\\\\s|/?>)","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"}},"end":"/?>","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.inline.$2.void.html","patterns":[{"include":"#attribute"}]},{"begin":"(?i)(<)(a|abbr|b|bdi|bdo|cite|code|data|del|dfn|em|i|ins|kbd|mark|q|rp|rt|ruby|s|samp|small|span|strong|sub|sup|time|u|var)(?=\\\\s|/?>)","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"}},"end":">","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.inline.$2.start.html","patterns":[{"include":"#attribute"}]},{"begin":"(?i)(</)(a|abbr|b|bdi|bdo|cite|code|data|del|dfn|em|i|ins|kbd|mark|q|rp|rt|ruby|s|samp|small|span|strong|sub|sup|time|u|var)(?=\\\\s|/?>)","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"}},"end":">","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.inline.$2.end.html","patterns":[{"include":"#attribute"}]},{"begin":"(?i)(<)(embed|img|param|source|track)(?=\\\\s|/?>)","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"}},"end":"/?>","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.object.$2.void.html","patterns":[{"include":"#attribute"}]},{"begin":"(?i)(<)(audio|canvas|iframe|object|picture|video)(?=\\\\s|/?>)","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"}},"end":">","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.object.$2.start.html","patterns":[{"include":"#attribute"}]},{"begin":"(?i)(</)(audio|canvas|iframe|object|picture|video)(?=\\\\s|/?>)","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"}},"end":">","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.object.$2.end.html","patterns":[{"include":"#attribute"}]},{"begin":"(?i)(<)((basefont|isindex))(?=\\\\s|/?>)","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"name":"invalid.deprecated.html"}},"end":"/?>","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.metadata.$2.void.html","patterns":[{"include":"#attribute"}]},{"begin":"(?i)(<)((center|frameset|noembed|noframes))(?=\\\\s|/?>)","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"name":"invalid.deprecated.html"}},"end":">","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.structure.$2.start.html","patterns":[{"include":"#attribute"}]},{"begin":"(?i)(</)((center|frameset|noembed|noframes))(?=\\\\s|/?>)","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"name":"invalid.deprecated.html"}},"end":">","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.structure.$2.end.html","patterns":[{"include":"#attribute"}]},{"begin":"(?i)(<)((acronym|big|blink|font|strike|tt|xmp))(?=\\\\s|/?>)","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"name":"invalid.deprecated.html"}},"end":">","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.inline.$2.start.html","patterns":[{"include":"#attribute"}]},{"begin":"(?i)(</)((acronym|big|blink|font|strike|tt|xmp))(?=\\\\s|/?>)","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"name":"invalid.deprecated.html"}},"end":">","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.inline.$2.end.html","patterns":[{"include":"#attribute"}]},{"begin":"(?i)(<)((frame))(?=\\\\s|/?>)","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"name":"invalid.deprecated.html"}},"end":"/?>","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.object.$2.void.html","patterns":[{"include":"#attribute"}]},{"begin":"(?i)(<)((applet))(?=\\\\s|/?>)","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"name":"invalid.deprecated.html"}},"end":">","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.object.$2.start.html","patterns":[{"include":"#attribute"}]},{"begin":"(?i)(</)((applet))(?=\\\\s|/?>)","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"name":"invalid.deprecated.html"}},"end":">","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.object.$2.end.html","patterns":[{"include":"#attribute"}]},{"begin":"(?i)(<)((dir|keygen|listing|menuitem|plaintext|spacer))(?=\\\\s|/?>)","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"name":"invalid.illegal.no-longer-supported.html"}},"end":">","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.other.$2.start.html","patterns":[{"include":"#attribute"}]},{"begin":"(?i)(</)((dir|keygen|listing|menuitem|plaintext|spacer))(?=\\\\s|/?>)","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"name":"invalid.illegal.no-longer-supported.html"}},"end":">","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.other.$2.end.html","patterns":[{"include":"#attribute"}]},{"include":"#math"},{"include":"#svg"},{"begin":"(<)([A-Za-z][.0-9A-Z_a-z\xB7\xC0-\xD6\xD8-\xF6\xF8-\u037D\u037F-\u1FFF\u200C\u200D\u203F\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u{10000}-\\\\x{EFFFF}]*-[-.0-9A-Z_a-z\xB7\xC0-\xD6\xD8-\xF6\xF8-\u037D\u037F-\u1FFF\u200C\u200D\u203F\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u{10000}-\\\\x{EFFFF}]*)(?=\\\\s|/?>)","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"}},"end":"/?>","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.custom.start.html","patterns":[{"include":"#attribute"}]},{"begin":"(</)([A-Za-z][.0-9A-Z_a-z\xB7\xC0-\xD6\xD8-\xF6\xF8-\u037D\u037F-\u1FFF\u200C\u200D\u203F\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u{10000}-\\\\x{EFFFF}]*-[-.0-9A-Z_a-z\xB7\xC0-\xD6\xD8-\xF6\xF8-\u037D\u037F-\u1FFF\u200C\u200D\u203F\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u{10000}-\\\\x{EFFFF}]*)(?=\\\\s|/?>)","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"}},"end":">","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.custom.end.html","patterns":[{"include":"#attribute"}]}]},"xml-processing":{"begin":"(<\\\\?)(xml)","captures":{"1":{"name":"punctuation.definition.tag.html"},"2":{"name":"entity.name.tag.html"}},"end":"(\\\\?>)","name":"meta.tag.metadata.processing.xml.html","patterns":[{"include":"#attribute"}]}},"scopeName":"text.html.basic","embeddedLangs":["javascript","css"]}`));
  Ks = [
    ...Bs,
    ...Ws,
    Gs
  ];
  qs = Object.freeze(JSON.parse(`{"colors":{"activityBar.background":"#16161e","activityBar.border":"#16161e","activityBar.foreground":"#787c99","activityBar.inactiveForeground":"#3b3e52","activityBarBadge.background":"#3d59a1","activityBarBadge.foreground":"#fff","activityBarTop.foreground":"#787c99","activityBarTop.inactiveForeground":"#3b3e52","badge.background":"#7e83b230","badge.foreground":"#acb0d0","breadcrumb.activeSelectionForeground":"#a9b1d6","breadcrumb.background":"#16161e","breadcrumb.focusForeground":"#a9b1d6","breadcrumb.foreground":"#515670","breadcrumbPicker.background":"#16161e","button.background":"#3d59a1dd","button.foreground":"#ffffff","button.hoverBackground":"#3d59a1AA","button.secondaryBackground":"#3b3e52","charts.blue":"#7aa2f7","charts.foreground":"#9AA5CE","charts.green":"#41a6b5","charts.lines":"#16161e","charts.orange":"#ff9e64","charts.purple":"#9d7cd8","charts.red":"#f7768e","charts.yellow":"#e0af68","chat.avatarBackground":"#3d59a1","chat.avatarForeground":"#a9b1d6","chat.requestBorder":"#0f0f14","chat.slashCommandBackground":"#14141b","chat.slashCommandForeground":"#7aa2f7","debugConsole.errorForeground":"#bb616b","debugConsole.infoForeground":"#787c99","debugConsole.sourceForeground":"#787c99","debugConsole.warningForeground":"#c49a5a","debugConsoleInputIcon.foreground":"#73daca","debugExceptionWidget.background":"#101014","debugExceptionWidget.border":"#963c47","debugIcon.breakpointDisabledForeground":"#414761","debugIcon.breakpointForeground":"#db4b4b","debugIcon.breakpointUnverifiedForeground":"#c24242","debugTokenExpression.boolean":"#ff9e64","debugTokenExpression.error":"#bb616b","debugTokenExpression.name":"#7dcfff","debugTokenExpression.number":"#ff9e64","debugTokenExpression.string":"#9ece6a","debugTokenExpression.value":"#9aa5ce","debugToolBar.background":"#101014","debugView.stateLabelBackground":"#14141b","debugView.stateLabelForeground":"#787c99","debugView.valueChangedHighlight":"#3d59a1aa","descriptionForeground":"#515670","diffEditor.diagonalFill":"#292e42","diffEditor.insertedLineBackground":"#41a6b520","diffEditor.insertedTextBackground":"#41a6b520","diffEditor.removedLineBackground":"#db4b4b22","diffEditor.removedTextBackground":"#db4b4b22","diffEditor.unchangedCodeBackground":"#282a3b66","diffEditorGutter.insertedLineBackground":"#41a6b525","diffEditorGutter.removedLineBackground":"#db4b4b22","diffEditorOverview.insertedForeground":"#41a6b525","diffEditorOverview.removedForeground":"#db4b4b22","disabledForeground":"#545c7e","dropdown.background":"#14141b","dropdown.foreground":"#787c99","dropdown.listBackground":"#14141b","editor.background":"#1a1b26","editor.findMatchBackground":"#3d59a166","editor.findMatchBorder":"#e0af68","editor.findMatchHighlightBackground":"#3d59a166","editor.findRangeHighlightBackground":"#515c7e33","editor.focusedStackFrameHighlightBackground":"#73daca20","editor.foldBackground":"#1111174a","editor.foreground":"#a9b1d6","editor.inactiveSelectionBackground":"#515c7e25","editor.lineHighlightBackground":"#1e202e","editor.rangeHighlightBackground":"#515c7e20","editor.selectionBackground":"#515c7e4d","editor.selectionHighlightBackground":"#515c7e44","editor.stackFrameHighlightBackground":"#E2BD3A20","editor.wordHighlightBackground":"#515c7e44","editor.wordHighlightStrongBackground":"#515c7e55","editorBracketHighlight.foreground1":"#698cd6","editorBracketHighlight.foreground2":"#68b3de","editorBracketHighlight.foreground3":"#9a7ecc","editorBracketHighlight.foreground4":"#25aac2","editorBracketHighlight.foreground5":"#80a856","editorBracketHighlight.foreground6":"#c49a5a","editorBracketHighlight.unexpectedBracket.foreground":"#db4b4b","editorBracketMatch.background":"#16161e","editorBracketMatch.border":"#42465d","editorBracketPairGuide.activeBackground1":"#698cd6","editorBracketPairGuide.activeBackground2":"#68b3de","editorBracketPairGuide.activeBackground3":"#9a7ecc","editorBracketPairGuide.activeBackground4":"#25aac2","editorBracketPairGuide.activeBackground5":"#80a856","editorBracketPairGuide.activeBackground6":"#c49a5a","editorCodeLens.foreground":"#51597d","editorCursor.foreground":"#c0caf5","editorError.foreground":"#db4b4b","editorGhostText.foreground":"#646e9c","editorGroup.border":"#101014","editorGroup.dropBackground":"#1e202e","editorGroupHeader.border":"#101014","editorGroupHeader.noTabsBackground":"#16161e","editorGroupHeader.tabsBackground":"#16161e","editorGroupHeader.tabsBorder":"#101014","editorGutter.addedBackground":"#164846","editorGutter.deletedBackground":"#823c41","editorGutter.modifiedBackground":"#394b70","editorHint.foreground":"#0da0ba","editorHoverWidget.background":"#16161e","editorHoverWidget.border":"#101014","editorIndentGuide.activeBackground1":"#363b54","editorIndentGuide.background1":"#232433","editorInfo.foreground":"#0da0ba","editorInlayHint.foreground":"#646e9c","editorLightBulb.foreground":"#e0af68","editorLightBulbAutoFix.foreground":"#e0af68","editorLineNumber.activeForeground":"#787c99","editorLineNumber.foreground":"#363b54","editorLink.activeForeground":"#acb0d0","editorMarkerNavigation.background":"#16161e","editorOverviewRuler.addedForeground":"#164846","editorOverviewRuler.border":"#101014","editorOverviewRuler.bracketMatchForeground":"#101014","editorOverviewRuler.deletedForeground":"#703438","editorOverviewRuler.errorForeground":"#db4b4b","editorOverviewRuler.findMatchForeground":"#a9b1d644","editorOverviewRuler.infoForeground":"#1abc9c","editorOverviewRuler.modifiedForeground":"#394b70","editorOverviewRuler.rangeHighlightForeground":"#a9b1d644","editorOverviewRuler.selectionHighlightForeground":"#a9b1d622","editorOverviewRuler.warningForeground":"#e0af68","editorOverviewRuler.wordHighlightForeground":"#bb9af755","editorOverviewRuler.wordHighlightStrongForeground":"#bb9af766","editorPane.background":"#1a1b26","editorRuler.foreground":"#101014","editorSuggestWidget.background":"#16161e","editorSuggestWidget.border":"#101014","editorSuggestWidget.highlightForeground":"#6183bb","editorSuggestWidget.selectedBackground":"#20222c","editorWarning.foreground":"#e0af68","editorWhitespace.foreground":"#363b54","editorWidget.background":"#16161e","editorWidget.border":"#101014","editorWidget.foreground":"#787c99","editorWidget.resizeBorder":"#545c7e33","errorForeground":"#515670","extensionBadge.remoteBackground":"#3d59a1","extensionBadge.remoteForeground":"#ffffff","extensionButton.prominentBackground":"#3d59a1DD","extensionButton.prominentForeground":"#ffffff","extensionButton.prominentHoverBackground":"#3d59a1AA","focusBorder":"#545c7e33","foreground":"#787c99","gitDecoration.addedResourceForeground":"#449dab","gitDecoration.conflictingResourceForeground":"#e0af68cc","gitDecoration.deletedResourceForeground":"#914c54","gitDecoration.ignoredResourceForeground":"#515670","gitDecoration.modifiedResourceForeground":"#6183bb","gitDecoration.renamedResourceForeground":"#449dab","gitDecoration.stageDeletedResourceForeground":"#914c54","gitDecoration.stageModifiedResourceForeground":"#6183bb","gitDecoration.untrackedResourceForeground":"#449dab","gitlens.gutterBackgroundColor":"#16161e","gitlens.gutterForegroundColor":"#787c99","gitlens.gutterUncommittedForegroundColor":"#7aa2f7","gitlens.trailingLineForegroundColor":"#646e9c","icon.foreground":"#787c99","inlineChat.foreground":"#a9b1d6","inlineChatDiff.inserted":"#41a6b540","inlineChatDiff.removed":"#db4b4b42","inlineChatInput.background":"#14141b","input.background":"#14141b","input.border":"#0f0f14","input.foreground":"#a9b1d6","input.placeholderForeground":"#787c998A","inputOption.activeBackground":"#3d59a144","inputOption.activeForeground":"#c0caf5","inputValidation.errorBackground":"#85353e","inputValidation.errorBorder":"#963c47","inputValidation.errorForeground":"#bbc2e0","inputValidation.infoBackground":"#3d59a15c","inputValidation.infoBorder":"#3d59a1","inputValidation.infoForeground":"#bbc2e0","inputValidation.warningBackground":"#c2985b","inputValidation.warningBorder":"#e0af68","inputValidation.warningForeground":"#000000","list.activeSelectionBackground":"#202330","list.activeSelectionForeground":"#a9b1d6","list.deemphasizedForeground":"#787c99","list.dropBackground":"#1e202e","list.errorForeground":"#bb616b","list.focusBackground":"#1c1d29","list.focusForeground":"#a9b1d6","list.highlightForeground":"#668ac4","list.hoverBackground":"#13131a","list.hoverForeground":"#a9b1d6","list.inactiveSelectionBackground":"#1c1d29","list.inactiveSelectionForeground":"#a9b1d6","list.invalidItemForeground":"#c97018","list.warningForeground":"#c49a5a","listFilterWidget.background":"#101014","listFilterWidget.noMatchesOutline":"#a6333f","listFilterWidget.outline":"#3d59a1","menu.background":"#16161e","menu.border":"#101014","menu.foreground":"#787c99","menu.selectionBackground":"#1e202e","menu.selectionForeground":"#a9b1d6","menu.separatorBackground":"#101014","menubar.selectionBackground":"#1e202e","menubar.selectionBorder":"#1b1e2e","menubar.selectionForeground":"#a9b1d6","merge.currentContentBackground":"#007a7544","merge.currentHeaderBackground":"#41a6b525","merge.incomingContentBackground":"#3d59a144","merge.incomingHeaderBackground":"#3d59a1aa","mergeEditor.change.background":"#41a6b525","mergeEditor.change.word.background":"#41a6b540","mergeEditor.conflict.handled.minimapOverViewRuler":"#449dab","mergeEditor.conflict.handledFocused.border":"#41a6b565","mergeEditor.conflict.handledUnfocused.border":"#41a6b525","mergeEditor.conflict.unhandled.minimapOverViewRuler":"#e0af68","mergeEditor.conflict.unhandledFocused.border":"#e0af68b0","mergeEditor.conflict.unhandledUnfocused.border":"#e0af6888","minimapGutter.addedBackground":"#1C5957","minimapGutter.deletedBackground":"#944449","minimapGutter.modifiedBackground":"#425882","multiDiffEditor.border":"#1a1b26","multiDiffEditor.headerBackground":"#1a1b26","notebook.cellBorderColor":"#101014","notebook.cellEditorBackground":"#16161e","notebook.cellStatusBarItemHoverBackground":"#1c1d29","notebook.editorBackground":"#1a1b26","notebook.focusedCellBorder":"#29355a","notificationCenterHeader.background":"#101014","notificationLink.foreground":"#6183bb","notifications.background":"#101014","notificationsErrorIcon.foreground":"#bb616b","notificationsInfoIcon.foreground":"#0da0ba","notificationsWarningIcon.foreground":"#bba461","panel.background":"#16161e","panel.border":"#101014","panelInput.border":"#16161e","panelTitle.activeBorder":"#16161e","panelTitle.activeForeground":"#787c99","panelTitle.inactiveForeground":"#42465d","peekView.border":"#101014","peekViewEditor.background":"#16161e","peekViewEditor.matchHighlightBackground":"#3d59a166","peekViewResult.background":"#101014","peekViewResult.fileForeground":"#787c99","peekViewResult.lineForeground":"#a9b1d6","peekViewResult.matchHighlightBackground":"#3d59a166","peekViewResult.selectionBackground":"#3d59a133","peekViewResult.selectionForeground":"#a9b1d6","peekViewTitle.background":"#101014","peekViewTitleDescription.foreground":"#787c99","peekViewTitleLabel.foreground":"#a9b1d6","pickerGroup.border":"#101014","pickerGroup.foreground":"#a9b1d6","progressBar.background":"#3d59a1","sash.hoverBorder":"#29355a","scmGraph.foreground1":"#ff9e64","scmGraph.foreground2":"#e0af68","scmGraph.foreground3":"#41a6b5","scmGraph.foreground4":"#7aa2f7","scmGraph.foreground5":"#bb9af7","scmGraph.historyItemBaseRefColor":"#9d7cd8","scmGraph.historyItemHoverAdditionsForeground":"#41a6b5","scmGraph.historyItemHoverDefaultLabelForeground":"#a9b1d6","scmGraph.historyItemHoverDeletionsForeground":"#f7768e","scmGraph.historyItemHoverLabelForeground":"#1b1e2e","scmGraph.historyItemRefColor":"#506FCA","scmGraph.historyItemRemoteRefColor":"#41a6b5","scrollbar.shadow":"#00000033","scrollbarSlider.activeBackground":"#868bc422","scrollbarSlider.background":"#868bc415","scrollbarSlider.hoverBackground":"#868bc410","selection.background":"#515c7e40","settings.headerForeground":"#6183bb","sideBar.background":"#16161e","sideBar.border":"#101014","sideBar.dropBackground":"#1e202e","sideBar.foreground":"#787c99","sideBarSectionHeader.background":"#16161e","sideBarSectionHeader.border":"#101014","sideBarSectionHeader.foreground":"#a9b1d6","sideBarTitle.foreground":"#787c99","statusBar.background":"#16161e","statusBar.border":"#101014","statusBar.debuggingBackground":"#16161e","statusBar.debuggingForeground":"#787c99","statusBar.foreground":"#787c99","statusBar.noFolderBackground":"#16161e","statusBarItem.activeBackground":"#101014","statusBarItem.hoverBackground":"#20222c","statusBarItem.prominentBackground":"#101014","statusBarItem.prominentHoverBackground":"#20222c","tab.activeBackground":"#16161e","tab.activeBorder":"#3d59a1","tab.activeForeground":"#a9b1d6","tab.activeModifiedBorder":"#1a1b26","tab.border":"#101014","tab.hoverForeground":"#a9b1d6","tab.inactiveBackground":"#16161e","tab.inactiveForeground":"#787c99","tab.inactiveModifiedBorder":"#1f202e","tab.lastPinnedBorder":"#222333","tab.unfocusedActiveBorder":"#1f202e","tab.unfocusedActiveForeground":"#a9b1d6","tab.unfocusedHoverForeground":"#a9b1d6","tab.unfocusedInactiveForeground":"#787c99","terminal.ansiBlack":"#363b54","terminal.ansiBlue":"#7aa2f7","terminal.ansiBrightBlack":"#363b54","terminal.ansiBrightBlue":"#7aa2f7","terminal.ansiBrightCyan":"#7dcfff","terminal.ansiBrightGreen":"#73daca","terminal.ansiBrightMagenta":"#bb9af7","terminal.ansiBrightRed":"#f7768e","terminal.ansiBrightWhite":"#acb0d0","terminal.ansiBrightYellow":"#e0af68","terminal.ansiCyan":"#7dcfff","terminal.ansiGreen":"#73daca","terminal.ansiMagenta":"#bb9af7","terminal.ansiRed":"#f7768e","terminal.ansiWhite":"#787c99","terminal.ansiYellow":"#e0af68","terminal.background":"#16161e","terminal.foreground":"#787c99","terminal.selectionBackground":"#515c7e4d","textBlockQuote.background":"#16161e","textCodeBlock.background":"#16161e","textLink.activeForeground":"#7dcfff","textLink.foreground":"#6183bb","textPreformat.foreground":"#9699a8","textSeparator.foreground":"#363b54","titleBar.activeBackground":"#16161e","titleBar.activeForeground":"#787c99","titleBar.border":"#101014","titleBar.inactiveBackground":"#16161e","titleBar.inactiveForeground":"#787c99","toolbar.activeBackground":"#202330","toolbar.hoverBackground":"#202330","tree.indentGuidesStroke":"#2b2b3b","walkThrough.embeddedEditorBackground":"#16161e","widget.shadow":"#ffffff00","window.activeBorder":"#0d0f17","window.inactiveBorder":"#0d0f17"},"displayName":"Tokyo Night","name":"tokyo-night","semanticTokenColors":{"*.defaultLibrary":{"foreground":"#2ac3de"},"parameter":{"foreground":"#d9d4cd"},"parameter.declaration":{"foreground":"#e0af68"},"property.declaration":{"foreground":"#73daca"},"property.defaultLibrary":{"foreground":"#2ac3de"},"variable":{"foreground":"#c0caf5"},"variable.declaration":{"foreground":"#bb9af7"},"variable.defaultLibrary":{"foreground":"#2ac3de"}},"tokenColors":[{"scope":["comment","meta.var.expr storage.type","keyword.control.flow","keyword.control.return","meta.directive.vue punctuation.separator.key-value.html","meta.directive.vue entity.other.attribute-name.html","tag.decorator.js entity.name.tag.js","tag.decorator.js punctuation.definition.tag.js","storage.modifier","string.quoted.docstring.multi","string.quoted.docstring.multi.python punctuation.definition.string.begin","string.quoted.docstring.multi.python punctuation.definition.string.end","string.quoted.docstring.multi.python constant.character.escape"],"settings":{"fontStyle":"italic"}},{"scope":["keyword.control.flow.block-scalar.literal","keyword.control.flow.python"],"settings":{"fontStyle":""}},{"scope":["comment","comment.block.documentation","punctuation.definition.comment","comment.block.documentation punctuation","string.quoted.docstring.multi","string.quoted.docstring.multi.python punctuation.definition.string.begin","string.quoted.docstring.multi.python punctuation.definition.string.end","string.quoted.docstring.multi.python constant.character.escape"],"settings":{"foreground":"#51597d"}},{"scope":["keyword.operator.assignment.jsdoc","comment.block.documentation variable","comment.block.documentation storage","comment.block.documentation keyword","comment.block.documentation support","comment.block.documentation markup","comment.block.documentation markup.inline.raw.string.markdown","meta.other.type.phpdoc.php keyword.other.type.php","meta.other.type.phpdoc.php support.other.namespace.php","meta.other.type.phpdoc.php punctuation.separator.inheritance.php","meta.other.type.phpdoc.php support.class","keyword.other.phpdoc.php","log.date"],"settings":{"foreground":"#5a638c"}},{"scope":["meta.other.type.phpdoc.php support.class","comment.block.documentation storage.type","comment.block.documentation punctuation.definition.block.tag","comment.block.documentation entity.name.type.instance"],"settings":{"foreground":"#646e9c"}},{"scope":["variable.other.constant","punctuation.definition.constant","constant.language","constant.numeric","support.constant","constant.other.caps"],"settings":{"foreground":"#ff9e64"}},{"scope":["string","constant.other.symbol","constant.other.key","meta.attribute-selector","string constant.character"],"settings":{"fontStyle":"","foreground":"#9ece6a"}},{"scope":["constant.other.color","constant.other.color.rgb-value.hex punctuation.definition.constant"],"settings":{"foreground":"#9aa5ce"}},{"scope":["invalid","invalid.illegal"],"settings":{"foreground":"#ff5370"}},{"scope":"invalid.deprecated","settings":{"foreground":"#bb9af7"}},{"scope":"storage.type","settings":{"foreground":"#bb9af7"}},{"scope":["meta.var.expr storage.type","storage.modifier"],"settings":{"foreground":"#9d7cd8"}},{"scope":["punctuation.definition.template-expression","punctuation.section.embedded","meta.embedded.line.tag.smarty","support.constant.handlebars","punctuation.section.tag.twig"],"settings":{"foreground":"#7dcfff"}},{"scope":["keyword.control.smarty","keyword.control.twig","support.constant.handlebars keyword.control","keyword.operator.comparison.twig","keyword.blade","entity.name.function.blade","meta.tag.blade keyword.other.type.php"],"settings":{"foreground":"#0db9d7"}},{"scope":["keyword.operator.spread","keyword.operator.rest"],"settings":{"fontStyle":"bold","foreground":"#f7768e"}},{"scope":["keyword.operator","keyword.control.as","keyword.other","keyword.operator.bitwise.shift","punctuation","expression.embbeded.vue punctuation.definition.tag","text.html.twig meta.tag.inline.any.html","meta.tag.template.value.twig meta.function.arguments.twig","meta.directive.vue punctuation.separator.key-value.html","punctuation.definition.constant.markdown","punctuation.definition.string","punctuation.support.type.property-name","text.html.vue-html meta.tag","meta.attribute.directive","punctuation.definition.keyword","punctuation.terminator.rule","punctuation.definition.entity","punctuation.separator.inheritance.php","keyword.other.template","keyword.other.substitution","entity.name.operator","meta.property-list punctuation.separator.key-value","meta.at-rule.mixin punctuation.separator.key-value","meta.at-rule.function variable.parameter.url","meta.embedded.inline.phpx punctuation.definition.tag.begin.html","meta.embedded.inline.phpx punctuation.definition.tag.end.html"],"settings":{"foreground":"#89ddff"}},{"scope":["keyword.control.module.js","keyword.control.import","keyword.control.export","keyword.control.from","keyword.control.default","meta.import keyword.other"],"settings":{"foreground":"#7dcfff"}},{"scope":["keyword","keyword.control","keyword.other.important"],"settings":{"foreground":"#bb9af7"}},{"scope":"keyword.other.DML","settings":{"foreground":"#7dcfff"}},{"scope":["keyword.operator.logical","storage.type.function","keyword.operator.bitwise","keyword.operator.ternary","keyword.operator.comparison","keyword.operator.relational","keyword.operator.or.regexp"],"settings":{"foreground":"#bb9af7"}},{"scope":"entity.name.tag","settings":{"foreground":"#f7768e"}},{"scope":["entity.name.tag support.class.component","meta.tag.custom entity.name.tag","meta.tag.other.unrecognized.html.derivative entity.name.tag","meta.tag"],"settings":{"foreground":"#de5971"}},{"scope":["punctuation.definition.tag","text.html.php meta.embedded.block.html meta.tag.metadata.script.end.html punctuation.definition.tag.begin.html text.html.basic"],"settings":{"foreground":"#ba3c97"}},{"scope":["constant.other.php","variable.other.global.safer","variable.other.global.safer punctuation.definition.variable","variable.other.global","variable.other.global punctuation.definition.variable","constant.other"],"settings":{"foreground":"#e0af68"}},{"scope":["variable","support.variable","string constant.other.placeholder","variable.parameter.handlebars","variable.other.object","meta.fstring","meta.function-call meta.function-call.arguments","meta.embedded.inline.phpx constant.other.php"],"settings":{"foreground":"#c0caf5"}},{"scope":"meta.array.literal variable","settings":{"foreground":"#7dcfff"}},{"scope":["meta.object-literal.key","entity.name.type.hcl","string.alias.graphql","string.unquoted.graphql","string.unquoted.alias.graphql","meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js","meta.field.declaration.ts variable.object.property","meta.block entity.name.label"],"settings":{"foreground":"#73daca"}},{"scope":["variable.other.property","support.variable.property","support.variable.property.dom","meta.function-call variable.other.object.property"],"settings":{"foreground":"#7dcfff"}},{"scope":"variable.other.object.property","settings":{"foreground":"#c0caf5"}},{"scope":"meta.objectliteral meta.object.member meta.objectliteral meta.object.member meta.objectliteral meta.object.member meta.object-literal.key","settings":{"foreground":"#41a6b5"}},{"scope":"source.cpp meta.block variable.other","settings":{"foreground":"#f7768e"}},{"scope":"support.other.variable","settings":{"foreground":"#f7768e"}},{"scope":["meta.class-method.js entity.name.function.js","entity.name.method.js","variable.function.constructor","keyword.other.special-method","storage.type.cs"],"settings":{"foreground":"#7aa2f7"}},{"scope":["entity.name.function","variable.other.enummember","meta.function-call","meta.function-call entity.name.function","variable.function","meta.definition.method entity.name.function","meta.object-literal entity.name.function"],"settings":{"foreground":"#7aa2f7"}},{"scope":["variable.parameter.function.language.special","variable.parameter","meta.function.parameters punctuation.definition.variable","meta.function.parameter variable"],"settings":{"foreground":"#e0af68"}},{"scope":["keyword.other.type.php","storage.type.php","constant.character","constant.escape","keyword.other.unit"],"settings":{"foreground":"#bb9af7"}},{"scope":["meta.definition.variable variable.other.constant","meta.definition.variable variable.other.readwrite","variable.declaration.hcl variable.other.readwrite.hcl","meta.mapping.key.hcl variable.other.readwrite.hcl","variable.other.declaration"],"settings":{"foreground":"#bb9af7"}},{"scope":"entity.other.inherited-class","settings":{"fontStyle":"","foreground":"#bb9af7"}},{"scope":["support.class","support.type","variable.other.readwrite.alias","support.orther.namespace.use.php","meta.use.php","support.other.namespace.php","support.type.sys-types","support.variable.dom","support.constant.math","support.type.object.module","support.constant.json","entity.name.namespace","meta.import.qualifier","variable.other.constant.object"],"settings":{"foreground":"#0db9d7"}},{"scope":"entity.name","settings":{"foreground":"#c0caf5"}},{"scope":"support.function","settings":{"foreground":"#0db9d7"}},{"scope":["source.css support.type.property-name","source.sass support.type.property-name","source.scss support.type.property-name","source.less support.type.property-name","source.stylus support.type.property-name","source.postcss support.type.property-name","support.type.property-name.css","support.type.vendored.property-name","support.type.map.key"],"settings":{"foreground":"#7aa2f7"}},{"scope":["support.constant.font-name","meta.definition.variable"],"settings":{"foreground":"#9ece6a"}},{"scope":["entity.other.attribute-name.class","meta.at-rule.mixin.scss entity.name.function.scss"],"settings":{"foreground":"#9ece6a"}},{"scope":"entity.other.attribute-name.id","settings":{"foreground":"#fc7b7b"}},{"scope":"entity.name.tag.css","settings":{"foreground":"#0db9d7"}},{"scope":["entity.other.attribute-name.pseudo-class punctuation.definition.entity","entity.other.attribute-name.pseudo-element punctuation.definition.entity","entity.other.attribute-name.class punctuation.definition.entity","entity.name.tag.reference"],"settings":{"foreground":"#e0af68"}},{"scope":"meta.property-list","settings":{"foreground":"#9abdf5"}},{"scope":["meta.property-list meta.at-rule.if","meta.at-rule.return variable.parameter.url","meta.property-list meta.at-rule.else"],"settings":{"foreground":"#ff9e64"}},{"scope":["entity.other.attribute-name.parent-selector-suffix punctuation.definition.entity.css"],"settings":{"foreground":"#73daca"}},{"scope":"meta.property-list meta.property-list","settings":{"foreground":"#9abdf5"}},{"scope":["meta.at-rule.mixin keyword.control.at-rule.mixin","meta.at-rule.include entity.name.function.scss","meta.at-rule.include keyword.control.at-rule.include"],"settings":{"foreground":"#bb9af7"}},{"scope":["keyword.control.at-rule.include punctuation.definition.keyword","keyword.control.at-rule.mixin punctuation.definition.keyword","meta.at-rule.include keyword.control.at-rule.include","keyword.control.at-rule.extend punctuation.definition.keyword","meta.at-rule.extend keyword.control.at-rule.extend","entity.other.attribute-name.placeholder.css punctuation.definition.entity.css","meta.at-rule.media keyword.control.at-rule.media","meta.at-rule.mixin keyword.control.at-rule.mixin","meta.at-rule.function keyword.control.at-rule.function","keyword.control punctuation.definition.keyword"],"settings":{"foreground":"#9d7cd8"}},{"scope":"meta.property-list meta.at-rule.include","settings":{"foreground":"#c0caf5"}},{"scope":"support.constant.property-value","settings":{"foreground":"#ff9e64"}},{"scope":["entity.name.module.js","variable.import.parameter.js","variable.other.class.js"],"settings":{"foreground":"#c0caf5"}},{"scope":"variable.language","settings":{"foreground":"#f7768e"}},{"scope":"variable.other punctuation.definition.variable","settings":{"foreground":"#c0caf5"}},{"scope":["source.js constant.other.object.key.js string.unquoted.label.js","variable.language.this punctuation.definition.variable","keyword.other.this"],"settings":{"foreground":"#f7768e"}},{"scope":["entity.other.attribute-name","text.html.basic entity.other.attribute-name.html","text.html.basic entity.other.attribute-name"],"settings":{"foreground":"#bb9af7"}},{"scope":"text.html constant.character.entity","settings":{"foreground":"#0DB9D7"}},{"scope":["entity.other.attribute-name.id.html","meta.directive.vue entity.other.attribute-name.html"],"settings":{"foreground":"#bb9af7"}},{"scope":"source.sass keyword.control","settings":{"foreground":"#7aa2f7"}},{"scope":["entity.other.attribute-name.pseudo-class","entity.other.attribute-name.pseudo-element","entity.other.attribute-name.placeholder","meta.property-list meta.property-value"],"settings":{"foreground":"#bb9af7"}},{"scope":"markup.inserted","settings":{"foreground":"#449dab"}},{"scope":"markup.deleted","settings":{"foreground":"#914c54"}},{"scope":"markup.changed","settings":{"foreground":"#6183bb"}},{"scope":"string.regexp","settings":{"foreground":"#b4f9f8"}},{"scope":"punctuation.definition.group","settings":{"foreground":"#f7768e"}},{"scope":["constant.other.character-class.regexp"],"settings":{"foreground":"#bb9af7"}},{"scope":["constant.other.character-class.set.regexp","punctuation.definition.character-class.regexp"],"settings":{"foreground":"#e0af68"}},{"scope":"keyword.operator.quantifier.regexp","settings":{"foreground":"#89ddff"}},{"scope":"constant.character.escape.backslash","settings":{"foreground":"#c0caf5"}},{"scope":"constant.character.escape","settings":{"foreground":"#89ddff"}},{"scope":["tag.decorator.js entity.name.tag.js","tag.decorator.js punctuation.definition.tag.js"],"settings":{"foreground":"#7aa2f7"}},{"scope":"keyword.other.unit","settings":{"foreground":"#f7768e"}},{"scope":["source.json meta.structure.dictionary.json support.type.property-name.json"],"settings":{"foreground":"#7aa2f7"}},{"scope":["source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"],"settings":{"foreground":"#0db9d7"}},{"scope":["source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"],"settings":{"foreground":"#7dcfff"}},{"scope":["source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"],"settings":{"foreground":"#bb9af7"}},{"scope":["source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"],"settings":{"foreground":"#e0af68"}},{"scope":["source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"],"settings":{"foreground":"#0db9d7"}},{"scope":["source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"],"settings":{"foreground":"#73daca"}},{"scope":["source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"],"settings":{"foreground":"#f7768e"}},{"scope":["source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"],"settings":{"foreground":"#9ece6a"}},{"scope":"punctuation.definition.list_item.markdown","settings":{"foreground":"#9abdf5"}},{"scope":["meta.block","meta.brace","punctuation.definition.block","punctuation.definition.use","punctuation.definition.class","punctuation.definition.begin.bracket","punctuation.definition.end.bracket","punctuation.definition.switch-expression.begin.bracket","punctuation.definition.switch-expression.end.bracket","punctuation.definition.section.switch-block.begin.bracket","punctuation.definition.section.switch-block.end.bracket","punctuation.definition.group.shell","punctuation.definition.parameters","punctuation.definition.arguments","punctuation.definition.dictionary","punctuation.definition.array","punctuation.section"],"settings":{"foreground":"#9abdf5"}},{"scope":["meta.embedded.block"],"settings":{"foreground":"#c0caf5"}},{"scope":["meta.tag JSXNested","meta.jsx.children","text.html","text.log"],"settings":{"foreground":"#9aa5ce"}},{"scope":"text.html.markdown markup.inline.raw.markdown","settings":{"foreground":"#bb9af7"}},{"scope":"text.html.markdown markup.inline.raw.markdown punctuation.definition.raw.markdown","settings":{"foreground":"#4E5579"}},{"scope":["heading.1.markdown entity.name","heading.1.markdown punctuation.definition.heading.markdown"],"settings":{"fontStyle":"bold","foreground":"#89ddff"}},{"scope":["heading.2.markdown entity.name","heading.2.markdown punctuation.definition.heading.markdown"],"settings":{"fontStyle":"bold","foreground":"#61bdf2"}},{"scope":["heading.3.markdown entity.name","heading.3.markdown punctuation.definition.heading.markdown"],"settings":{"fontStyle":"bold","foreground":"#7aa2f7"}},{"scope":["heading.4.markdown entity.name","heading.4.markdown punctuation.definition.heading.markdown"],"settings":{"fontStyle":"bold","foreground":"#6d91de"}},{"scope":["heading.5.markdown entity.name","heading.5.markdown punctuation.definition.heading.markdown"],"settings":{"fontStyle":"bold","foreground":"#9aa5ce"}},{"scope":["heading.6.markdown entity.name","heading.6.markdown punctuation.definition.heading.markdown"],"settings":{"fontStyle":"bold","foreground":"#747ca1"}},{"scope":["markup.italic","markup.italic punctuation"],"settings":{"fontStyle":"italic","foreground":"#c0caf5"}},{"scope":["markup.bold","markup.bold punctuation"],"settings":{"fontStyle":"bold","foreground":"#c0caf5"}},{"scope":["markup.bold markup.italic","markup.bold markup.italic punctuation"],"settings":{"fontStyle":"bold italic","foreground":"#c0caf5"}},{"scope":["markup.underline","markup.underline punctuation"],"settings":{"fontStyle":"underline"}},{"scope":"markup.quote punctuation.definition.blockquote.markdown","settings":{"foreground":"#4e5579"}},{"scope":"markup.quote","settings":{"fontStyle":"italic"}},{"scope":["string.other.link","markup.underline.link","constant.other.reference.link.markdown","string.other.link.description.title.markdown"],"settings":{"foreground":"#73daca"}},{"scope":["markup.fenced_code.block.markdown","markup.inline.raw.string.markdown","variable.language.fenced.markdown"],"settings":{"foreground":"#89ddff"}},{"scope":"meta.separator","settings":{"fontStyle":"bold","foreground":"#51597d"}},{"scope":"markup.table","settings":{"foreground":"#c0cefc"}},{"scope":"token.info-token","settings":{"foreground":"#0db9d7"}},{"scope":"token.warn-token","settings":{"foreground":"#ffdb69"}},{"scope":"token.error-token","settings":{"foreground":"#db4b4b"}},{"scope":"token.debug-token","settings":{"foreground":"#b267e6"}},{"scope":"entity.tag.apacheconf","settings":{"foreground":"#f7768e"}},{"scope":["meta.preprocessor"],"settings":{"foreground":"#73daca"}},{"scope":"source.env","settings":{"foreground":"#7aa2f7"}}],"type":"dark"}`));
});
export {
  __tla,
  Hs as a,
  zs as c,
  Us as i,
  Mi as l,
  Ks as n,
  Vs as o,
  Ws as r,
  Bs as s,
  qs as t
};
