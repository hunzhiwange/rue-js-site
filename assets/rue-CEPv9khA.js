let Lr, ce, Dr, Mr, Pr, zr, pe, ue, kr, d, me, G, Vr, Rr, Fr, Or, q, Tr, Nr, de, le, fe, s, o, l, jr, qr, Ar, Qr, Ur, Wr, Ir, Y, ti, Cr, Br, Yr, Kr, Gr, Xr, ei, he, $r, Jr, ni, Zr, Z, Hr, Er, wr, se;
let __tla = (async () => {
  let e, t, n, r, i, a, c, u, f;
  e = Object.create;
  t = Object.defineProperty;
  n = Object.getOwnPropertyDescriptor;
  r = Object.getOwnPropertyNames;
  i = Object.getPrototypeOf;
  a = Object.prototype.hasOwnProperty;
  o = (e2, t2) => () => (t2 || e2((t2 = {
    exports: {}
  }).exports, t2), t2.exports);
  s = (e2, n2) => {
    let r2 = {};
    for (var i2 in e2) t(r2, i2, {
      get: e2[i2],
      enumerable: true
    });
    return n2 && t(r2, Symbol.toStringTag, {
      value: `Module`
    }), r2;
  };
  c = (e2, i2, o2, s2) => {
    if (i2 && typeof i2 == `object` || typeof i2 == `function`) for (var c2 = r(i2), l2 = 0, u2 = c2.length, d2; l2 < u2; l2++) d2 = c2[l2], !a.call(e2, d2) && d2 !== o2 && t(e2, d2, {
      get: ((e3) => i2[e3]).bind(null, d2),
      enumerable: !(s2 = n(i2, d2)) || s2.enumerable
    });
    return e2;
  };
  l = (n2, r2, a2) => (a2 = n2 == null ? {} : e(i(n2)), c(r2 || !n2 || !n2.__esModule ? t(a2, `default`, {
    value: n2,
    enumerable: true
  }) : a2, n2));
  u = `/assets/rue_runtime_vapor_bg-CLxAmDn_.wasm`;
  d = async (e2 = {}, t2) => {
    let n2;
    if (t2.startsWith(`data:`)) {
      let r2 = t2.replace(/^data:.*?base64,/, ``), i2;
      if (typeof Buffer == `function` && typeof Buffer.from == `function`) i2 = Buffer.from(r2, `base64`);
      else if (typeof atob == `function`) {
        let e3 = atob(r2);
        i2 = new Uint8Array(e3.length);
        for (let t3 = 0; t3 < e3.length; t3++) i2[t3] = e3.charCodeAt(t3);
      } else throw Error(`Cannot decode base64-encoded data URL`);
      n2 = await WebAssembly.instantiate(i2, e2);
    } else {
      let r2 = await fetch(t2), i2 = r2.headers.get(`Content-Type`) || ``;
      if (`instantiateStreaming` in WebAssembly && i2.startsWith(`application/wasm`)) n2 = await WebAssembly.instantiateStreaming(r2, e2);
      else {
        let t3 = await r2.arrayBuffer();
        n2 = await WebAssembly.instantiate(t3, e2);
      }
    }
    return n2.instance.exports;
  };
  function p(e2) {
    f = e2;
  }
  function m(e2) {
    E === T.length && T.push(T.length + 1);
    let t2 = E;
    return E = T[t2], T[t2] = e2, t2;
  }
  var h = typeof FinalizationRegistry > `u` ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((e2) => e2.dtor(e2.a, e2.b));
  function g(e2) {
    let t2 = typeof e2;
    if (t2 == `number` || t2 == `boolean` || e2 == null) return `${e2}`;
    if (t2 == `string`) return `"${e2}"`;
    if (t2 == `symbol`) {
      let t3 = e2.description;
      return t3 == null ? `Symbol` : `Symbol(${t3})`;
    }
    if (t2 == `function`) {
      let t3 = e2.name;
      return typeof t3 == `string` && t3.length > 0 ? `Function(${t3})` : `Function`;
    }
    if (Array.isArray(e2)) {
      let t3 = e2.length, n3 = `[`;
      t3 > 0 && (n3 += g(e2[0]));
      for (let r3 = 1; r3 < t3; r3++) n3 += `, ` + g(e2[r3]);
      return n3 += `]`, n3;
    }
    let n2 = /\[object ([^\]]+)\]/.exec(toString.call(e2)), r2;
    if (n2 && n2.length > 1) r2 = n2[1];
    else return toString.call(e2);
    if (r2 == `Object`) try {
      return `Object(` + JSON.stringify(e2) + `)`;
    } catch {
      return `Object`;
    }
    return e2 instanceof Error ? `${e2.name}: ${e2.message}
${e2.stack}` : r2;
  }
  function _(e2) {
    e2 < 132 || (T[e2] = E, E = e2);
  }
  var v = null;
  function y() {
    return (v === null || v.buffer.detached === true || v.buffer.detached === void 0 && v.buffer !== f.memory.buffer) && (v = new DataView(f.memory.buffer)), v;
  }
  function b(e2, t2) {
    return e2 >>>= 0, P(e2, t2);
  }
  var x = null;
  function S() {
    return (x === null || x.byteLength === 0) && (x = new Uint8Array(f.memory.buffer)), x;
  }
  function C(e2) {
    return T[e2];
  }
  function w(e2, t2) {
    try {
      return e2.apply(this, t2);
    } catch (e3) {
      f.__wbindgen_export3(m(e3));
    }
  }
  var T = Array(128).fill(void 0);
  T.push(void 0, null, true, false);
  var E = T.length;
  function D(e2) {
    return e2 == null;
  }
  function O(e2, t2, n2, r2) {
    let i2 = {
      a: e2,
      b: t2,
      cnt: 1,
      dtor: n2
    }, a2 = (...e3) => {
      i2.cnt++;
      let t3 = i2.a;
      i2.a = 0;
      try {
        return r2(t3, i2.b, ...e3);
      } finally {
        i2.a = t3, a2._wbg_cb_unref();
      }
    };
    return a2._wbg_cb_unref = () => {
      --i2.cnt === 0 && (i2.dtor(i2.a, i2.b), i2.a = 0, h.unregister(i2));
    }, h.register(a2, i2, i2), a2;
  }
  function k(e2, t2, n2) {
    if (n2 === void 0) {
      let n3 = F.encode(e2), r3 = t2(n3.length, 1) >>> 0;
      return S().subarray(r3, r3 + n3.length).set(n3), I = n3.length, r3;
    }
    let r2 = e2.length, i2 = t2(r2, 1) >>> 0, a2 = S(), o2 = 0;
    for (; o2 < r2; o2++) {
      let t3 = e2.charCodeAt(o2);
      if (t3 > 127) break;
      a2[i2 + o2] = t3;
    }
    if (o2 !== r2) {
      o2 !== 0 && (e2 = e2.slice(o2)), i2 = n2(i2, r2, r2 = o2 + e2.length * 3, 1) >>> 0;
      let t3 = S().subarray(i2 + o2, i2 + r2), a3 = F.encodeInto(e2, t3);
      o2 += a3.written, i2 = n2(i2, r2, o2, 1) >>> 0;
    }
    return I = o2, i2;
  }
  function A(e2) {
    let t2 = C(e2);
    return _(e2), t2;
  }
  var j = new TextDecoder(`utf-8`, {
    ignoreBOM: true,
    fatal: true
  });
  j.decode();
  var M = 2146435072, N = 0;
  function P(e2, t2) {
    return N += t2, N >= M && (j = new TextDecoder(`utf-8`, {
      ignoreBOM: true,
      fatal: true
    }), j.decode(), N = t2), j.decode(S().subarray(e2, e2 + t2));
  }
  var F = new TextEncoder();
  `encodeInto` in F || (F.encodeInto = function(e2, t2) {
    let n2 = F.encode(e2);
    return t2.set(n2), {
      read: e2.length,
      written: n2.length
    };
  });
  var I = 0;
  function L(e2, t2) {
    f.__wasm_bindgen_func_elem_179(e2, t2);
  }
  function R(e2, t2, n2, r2) {
    return f.__wasm_bindgen_func_elem_182(e2, t2, m(n2), m(r2)) !== 0;
  }
  function ee(e2, t2, n2, r2, i2, a2) {
    return A(f.__wasm_bindgen_func_elem_185(e2, t2, m(n2), m(r2), m(i2), m(a2)));
  }
  function te(e2, t2) {
    return A(f.__wasm_bindgen_func_elem_178(e2, t2));
  }
  function ne(e2, t2, n2) {
    f.__wasm_bindgen_func_elem_180(e2, t2, m(n2));
  }
  function re(e2, t2, n2) {
    return A(f.__wasm_bindgen_func_elem_181(e2, t2, m(n2)));
  }
  function ie(e2, t2, n2, r2, i2) {
    return A(f.__wasm_bindgen_func_elem_184(e2, t2, m(n2), m(r2), m(i2)));
  }
  function ae(e2, t2, n2, r2) {
    f.__wasm_bindgen_func_elem_1113(e2, t2, m(n2), m(r2));
  }
  function oe(e2, t2, n2, r2) {
    return A(f.__wasm_bindgen_func_elem_183(e2, t2, m(n2), m(r2)));
  }
  var z = typeof FinalizationRegistry > `u` ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((e2) => f.__wbg_effecthandle_free(e2 >>> 0, 1)), B = typeof FinalizationRegistry > `u` ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((e2) => f.__wbg_signalhandle_free(e2 >>> 0, 1)), V = typeof FinalizationRegistry > `u` ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((e2) => f.__wbg_wasmrue_free(e2 >>> 0, 1)), H = class e2 {
    static __wrap(t2) {
      t2 >>>= 0;
      let n2 = Object.create(e2.prototype);
      return n2.__wbg_ptr = t2, z.register(n2, n2.__wbg_ptr, n2), n2;
    }
    __destroy_into_raw() {
      let e3 = this.__wbg_ptr;
      return this.__wbg_ptr = 0, z.unregister(this), e3;
    }
    free() {
      let e3 = this.__destroy_into_raw();
      f.__wbg_effecthandle_free(e3, 0);
    }
    dispose() {
      f.effecthandle_dispose(this.__wbg_ptr);
    }
  };
  Symbol.dispose && (H.prototype[Symbol.dispose] = H.prototype.free);
  var U = class e2 {
    static __wrap(t2) {
      t2 >>>= 0;
      let n2 = Object.create(e2.prototype);
      return n2.__wbg_ptr = t2, B.register(n2, n2.__wbg_ptr, n2), n2;
    }
    __destroy_into_raw() {
      let e3 = this.__wbg_ptr;
      return this.__wbg_ptr = 0, B.unregister(this), e3;
    }
    free() {
      let e3 = this.__destroy_into_raw();
      f.__wbg_signalhandle_free(e3, 0);
    }
    getPath(e3) {
      return A(f.signalhandle_getPath(this.__wbg_ptr, m(e3)));
    }
    setPath(e3, t2) {
      f.signalhandle_setPath(this.__wbg_ptr, m(e3), m(t2));
    }
    valueOf() {
      return A(f.signalhandle_valueOf(this.__wbg_ptr));
    }
    peekPath(e3) {
      return A(f.signalhandle_peekPath(this.__wbg_ptr, m(e3)));
    }
    toString() {
      let e3, t2;
      try {
        let i2 = f.__wbindgen_add_to_stack_pointer(-16);
        f.signalhandle_toString(i2, this.__wbg_ptr);
        var n2 = y().getInt32(i2 + 0, true), r2 = y().getInt32(i2 + 4, true);
        return e3 = n2, t2 = r2, b(n2, r2);
      } finally {
        f.__wbindgen_add_to_stack_pointer(16), f.__wbindgen_export4(e3, t2, 1);
      }
    }
    get value() {
      return A(f.signalhandle_value(this.__wbg_ptr));
    }
    set value(e3) {
      f.signalhandle_set(this.__wbg_ptr, m(e3));
    }
    updatePath(e3, t2) {
      f.signalhandle_updatePath(this.__wbg_ptr, m(e3), m(t2));
    }
    get() {
      return A(f.signalhandle_get(this.__wbg_ptr));
    }
    set(e3) {
      f.signalhandle_set(this.__wbg_ptr, m(e3));
    }
    peek() {
      return A(f.signalhandle_peek(this.__wbg_ptr));
    }
    toJSON() {
      return A(f.signalhandle_toJSON(this.__wbg_ptr));
    }
    update(e3) {
      f.signalhandle_update(this.__wbg_ptr, m(e3));
    }
  };
  Symbol.dispose && (U.prototype[Symbol.dispose] = U.prototype.free);
  var W = class e2 {
    static __wrap(t2) {
      t2 >>>= 0;
      let n2 = Object.create(e2.prototype);
      return n2.__wbg_ptr = t2, V.register(n2, n2.__wbg_ptr, n2), n2;
    }
    __destroy_into_raw() {
      let e3 = this.__wbg_ptr;
      return this.__wbg_ptr = 0, V.unregister(this), e3;
    }
    free() {
      let e3 = this.__destroy_into_raw();
      f.__wbg_wasmrue_free(e3, 0);
    }
    onCreated(e3) {
      f.wasmrue_onCreated(this.__wbg_ptr, m(e3));
    }
    onMounted(e3) {
      f.wasmrue_onMounted(this.__wbg_ptr, m(e3));
    }
    onUpdated(e3) {
      f.wasmrue_onUpdated(this.__wbg_ptr, m(e3));
    }
    use(e3, t2) {
      f.wasmrue_use(this.__wbg_ptr, m(e3), m(t2));
    }
    onUnmounted(e3) {
      f.wasmrue_onUnmounted(this.__wbg_ptr, m(e3));
    }
    createElement(e3, t2, n2) {
      return A(f.wasmrue_createElement(this.__wbg_ptr, m(e3), m(t2), m(n2)));
    }
    renderBetween(e3, t2, n2, r2) {
      f.wasmrue_renderBetween(this.__wbg_ptr, m(e3), m(t2), m(n2), m(r2));
    }
    getDOMAdapter() {
      return A(f.wasmrue_getDOMAdapter(this.__wbg_ptr));
    }
    onBeforeMount(e3) {
      f.wasmrue_onBeforeMount(this.__wbg_ptr, m(e3));
    }
    setDOMAdapter(e3) {
      f.wasmrue_setDOMAdapter(this.__wbg_ptr, m(e3));
    }
    onBeforeCreate(e3) {
      f.wasmrue_onBeforeCreate(this.__wbg_ptr, m(e3));
    }
    onBeforeUpdate(e3) {
      f.wasmrue_onBeforeUpdate(this.__wbg_ptr, m(e3));
    }
    onBeforeUnmount(e3) {
      f.wasmrue_onBeforeUnmount(this.__wbg_ptr, m(e3));
    }
    getDOMAdapterMut() {
      return A(f.wasmrue_getDOMAdapterMut(this.__wbg_ptr));
    }
    h(e3, t2, n2) {
      return A(f.wasmrue_h(this.__wbg_ptr, m(e3), m(t2), m(n2)));
    }
    getCurrentContainer() {
      return A(f.wasmrue_getCurrentContainer(this.__wbg_ptr));
    }
    mount(e3, t2) {
      f.wasmrue_mount(this.__wbg_ptr, m(e3), m(t2));
    }
    vapor(e3) {
      return A(f.wasmrue_vapor(this.__wbg_ptr, m(e3)));
    }
    render(e3, t2) {
      f.wasmrue_render(this.__wbg_ptr, m(e3), m(t2));
    }
    emitted(e3) {
      return A(f.wasmrue_emitted(this.__wbg_ptr, m(e3)));
    }
    unmount(e3) {
      f.wasmrue_unmount(this.__wbg_ptr, m(e3));
    }
    onError(e3) {
      f.wasmrue_onError(this.__wbg_ptr, m(e3));
    }
  };
  Symbol.dispose && (W.prototype[Symbol.dispose] = W.prototype.free);
  G = function(e2, t2) {
    let n2 = f.computed(m(e2), D(t2) ? 16777215 : t2 ? 1 : 0);
    return U.__wrap(n2);
  };
  function K(e2) {
    let t2 = f.createRue(m(e2));
    return W.__wrap(t2);
  }
  q = function(e2, t2, n2) {
    return A(f.reactive(m(e2), D(t2) ? 0 : m(t2), D(n2) ? 16777215 : n2 ? 1 : 0));
  };
  se = function(e2, t2, n2) {
    return A(f.ref(m(e2), D(t2) ? 0 : m(t2), D(n2) ? 16777215 : n2 ? 1 : 0));
  };
  ce = function(e2, t2, n2) {
    let r2 = f.signal(m(e2), D(t2) ? 0 : m(t2), D(n2) ? 16777215 : n2 ? 1 : 0);
    return U.__wrap(r2);
  };
  le = function(e2, t2, n2) {
    f.useEffect(m(e2), D(t2) ? 0 : m(t2), D(n2) ? 0 : m(n2));
  };
  ue = function(e2) {
    return A(f.useRef(m(e2)));
  };
  de = function(e2) {
    return A(f.useSetup(m(e2)));
  };
  fe = function(e2, t2) {
    return A(f.useState(m(e2), D(t2) ? 0 : m(t2)));
  };
  pe = function(e2, t2) {
    return A(f.vaporWithHookId(m(e2), m(t2)));
  };
  me = function(e2, t2, n2) {
    let r2 = f.watch(m(e2), m(t2), D(n2) ? 0 : m(n2));
    return H.__wrap(r2);
  };
  he = function(e2, t2) {
    let n2 = f.watchEffect(m(e2), D(t2) ? 0 : m(t2));
    return H.__wrap(n2);
  };
  function ge(e2) {
    let t2 = C(e2), n2 = typeof t2 == `boolean` ? t2 : void 0;
    return D(n2) ? 16777215 : n2 ? 1 : 0;
  }
  function _e(e2, t2) {
    let n2 = k(g(C(t2)), f.__wbindgen_export, f.__wbindgen_export2), r2 = I;
    y().setInt32(e2 + 4, r2, true), y().setInt32(e2 + 0, n2, true);
  }
  function ve(e2) {
    return typeof C(e2) == `function`;
  }
  function ye(e2) {
    return C(e2) === null;
  }
  function be(e2) {
    let t2 = C(e2);
    return typeof t2 == `object` && !!t2;
  }
  function xe(e2) {
    return typeof C(e2) == `string`;
  }
  function Se(e2) {
    return C(e2) === void 0;
  }
  function Ce(e2, t2) {
    return C(e2) === C(t2);
  }
  function we(e2, t2) {
    let n2 = C(t2), r2 = typeof n2 == `number` ? n2 : void 0;
    y().setFloat64(e2 + 8, D(r2) ? 0 : r2, true), y().setInt32(e2 + 0, !D(r2), true);
  }
  function Te(e2) {
    throw A(e2);
  }
  function Ee(e2, t2) {
    let n2 = C(t2), r2 = typeof n2 == `string` ? n2 : void 0;
    var i2 = D(r2) ? 0 : k(r2, f.__wbindgen_export, f.__wbindgen_export2), a2 = I;
    y().setInt32(e2 + 4, a2, true), y().setInt32(e2 + 0, i2, true);
  }
  function De(e2, t2) {
    throw Error(b(e2, t2));
  }
  function Oe(e2) {
    C(e2)._wbg_cb_unref();
  }
  function ke() {
    return w(function(e2, t2, n2) {
      return m(C(e2).apply(C(t2), C(n2)));
    }, arguments);
  }
  function Ae() {
    return w(function(e2, t2, n2) {
      return m(C(e2).call(C(t2), C(n2)));
    }, arguments);
  }
  function je() {
    return w(function(e2, t2, n2, r2, i2) {
      return m(C(e2).call(C(t2), C(n2), C(r2), C(i2)));
    }, arguments);
  }
  function Me() {
    return w(function(e2, t2) {
      return m(C(e2).call(C(t2)));
    }, arguments);
  }
  function Ne() {
    return w(function(e2, t2, n2, r2) {
      return m(C(e2).call(C(t2), C(n2), C(r2)));
    }, arguments);
  }
  function Pe(e2, t2) {
    return m(C(e2).catch(C(t2)));
  }
  function Fe(e2, t2, n2) {
    return m(Object.defineProperty(C(e2), C(t2), C(n2)));
  }
  function Ie() {
    return w(function(e2, t2) {
      return Reflect.deleteProperty(C(e2), C(t2));
    }, arguments);
  }
  function Le(e2) {
    return m(Array.from(C(e2)));
  }
  function Re(e2, t2) {
    return m(Object.getOwnPropertyDescriptor(C(e2), C(t2)));
  }
  function ze(e2, t2) {
    let n2 = C(e2)[t2 >>> 0];
    return m(n2);
  }
  function Be() {
    return w(function(e2, t2) {
      return m(Reflect.get(C(e2), C(t2)));
    }, arguments);
  }
  function Ve(e2, t2) {
    return m(C(e2).get(C(t2)));
  }
  function He() {
    return w(function(e2, t2) {
      return Reflect.has(C(e2), C(t2));
    }, arguments);
  }
  function Ue(e2) {
    let t2;
    try {
      t2 = C(e2) instanceof Promise;
    } catch {
      t2 = false;
    }
    return t2;
  }
  function We(e2) {
    return Array.isArray(C(e2));
  }
  function Ge(e2, t2) {
    return Object.is(C(e2), C(t2));
  }
  function Ke(e2) {
    return m(Object.keys(C(e2)));
  }
  function qe(e2) {
    return C(e2).length;
  }
  function Je(e2) {
    let t2 = C(e2).name;
    return m(t2);
  }
  function Ye() {
    return m(/* @__PURE__ */ new Date());
  }
  function Xe() {
    return m({});
  }
  function Ze() {
    return m([]);
  }
  function Qe() {
    return m(/* @__PURE__ */ new Map());
  }
  function $e(e2, t2) {
    return m(Error(b(e2, t2)));
  }
  function et(e2, t2) {
    return m(Function(b(e2, t2)));
  }
  function tt(e2, t2, n2, r2) {
    return m(Function(b(e2, t2), b(n2, r2)));
  }
  function nt() {
    return w(function(e2) {
      return m(Reflect.ownKeys(C(e2)));
    }, arguments);
  }
  function rt(e2, t2) {
    return C(e2).push(C(t2));
  }
  function it(e2) {
    return m(Promise.resolve(C(e2)));
  }
  function at() {
    return w(function(e2, t2, n2) {
      return Reflect.set(C(e2), C(t2), C(n2));
    }, arguments);
  }
  function ot(e2, t2, n2) {
    C(e2)[t2 >>> 0] = A(n2);
  }
  function st(e2, t2, n2) {
    return m(C(e2).set(C(t2), C(n2)));
  }
  function ct(e2, t2) {
    C(e2).length = t2 >>> 0;
  }
  function lt(e2) {
    return m(U.__wrap(e2));
  }
  function ut() {
    let e2 = typeof global > `u` ? null : global;
    return D(e2) ? 0 : m(e2);
  }
  function dt() {
    let e2 = typeof globalThis > `u` ? null : globalThis;
    return D(e2) ? 0 : m(e2);
  }
  function ft() {
    let e2 = typeof self > `u` ? null : self;
    return D(e2) ? 0 : m(e2);
  }
  function pt() {
    let e2 = typeof window > `u` ? null : window;
    return D(e2) ? 0 : m(e2);
  }
  function mt() {
    return w(function(e2) {
      return m(JSON.stringify(C(e2)));
    }, arguments);
  }
  function ht(e2, t2) {
    return m(C(e2).then(C(t2)));
  }
  function gt(e2) {
    return m(C(e2).toISOString());
  }
  function _t(e2, t2) {
    return m(O(e2, t2, f.__wasm_bindgen_func_elem_64, ee));
  }
  function vt(e2, t2) {
    return m(b(e2, t2));
  }
  function yt(e2, t2) {
    return m(O(e2, t2, f.__wasm_bindgen_func_elem_64, R));
  }
  function bt(e2, t2) {
    return m(O(e2, t2, f.__wasm_bindgen_func_elem_73, L));
  }
  function xt(e2, t2) {
    return m(O(e2, t2, f.__wasm_bindgen_func_elem_64, oe));
  }
  function St(e2, t2) {
    return m(O(e2, t2, f.__wasm_bindgen_func_elem_64, ae));
  }
  function Ct(e2, t2) {
    return m(O(e2, t2, f.__wasm_bindgen_func_elem_64, re));
  }
  function wt(e2, t2) {
    return m(O(e2, t2, f.__wasm_bindgen_func_elem_64, ie));
  }
  function Tt(e2, t2) {
    return m(O(e2, t2, f.__wasm_bindgen_func_elem_64, te));
  }
  function Et(e2) {
    return m(e2);
  }
  function Dt(e2, t2) {
    return m(O(e2, t2, f.__wasm_bindgen_func_elem_64, ne));
  }
  function Ot(e2) {
    return m(C(e2));
  }
  function kt(e2) {
    A(e2);
  }
  function At(e2) {
    return C(e2) === void 0;
  }
  var jt = s({
    __wasm_bindgen_func_elem_1113: () => mr,
    __wasm_bindgen_func_elem_178: () => ur,
    __wasm_bindgen_func_elem_179: () => ar,
    __wasm_bindgen_func_elem_180: () => dr,
    __wasm_bindgen_func_elem_181: () => fr,
    __wasm_bindgen_func_elem_182: () => sr,
    __wasm_bindgen_func_elem_183: () => hr,
    __wasm_bindgen_func_elem_184: () => pr,
    __wasm_bindgen_func_elem_185: () => lr,
    __wasm_bindgen_func_elem_64: () => cr,
    __wasm_bindgen_func_elem_73: () => or,
    __wbg_effecthandle_free: () => Nt,
    __wbg_signalhandle_free: () => Pt,
    __wbg_wasmrue_free: () => Ft,
    __wbindgen_add_to_stack_pointer: () => yr,
    __wbindgen_export: () => gr,
    __wbindgen_export2: () => _r,
    __wbindgen_export3: () => vr,
    __wbindgen_export4: () => br,
    batch: () => It,
    computed: () => Lt,
    createComputed: () => Rt,
    createEffect: () => zt,
    createReactive: () => Bt,
    createRef: () => Vt,
    createResource: () => Ht,
    createRue: () => Ut,
    createSignal: () => Wt,
    effecthandle_dispose: () => Gt,
    getCurrentInstance: () => Kt,
    isReactive: () => qt,
    memory: () => Mt,
    onCleanup: () => Jt,
    propsReactive: () => Yt,
    reactive: () => Xt,
    readonly: () => Zt,
    ref: () => Qt,
    setCurrentInstance: () => $t,
    setReactiveScheduling: () => en,
    shallowReactive: () => tn,
    shallowReadonly: () => nn,
    signal: () => rn,
    signalhandle_get: () => an,
    signalhandle_getPath: () => on,
    signalhandle_peek: () => sn,
    signalhandle_peekPath: () => cn,
    signalhandle_set: () => ln,
    signalhandle_setPath: () => un,
    signalhandle_set_value: () => ir,
    signalhandle_toJSON: () => dn,
    signalhandle_toString: () => fn,
    signalhandle_update: () => pn,
    signalhandle_updatePath: () => mn,
    signalhandle_value: () => hn,
    signalhandle_valueOf: () => gn,
    toRaw: () => _n,
    toValue: () => vn,
    unref: () => yn,
    untrack: () => bn,
    useCallback: () => xn,
    useEffect: () => Sn,
    useMemo: () => Cn,
    useRef: () => wn,
    useSetup: () => Tn,
    useSignal: () => En,
    useState: () => Dn,
    vaporWithHookId: () => On,
    wasmrue_createElement: () => kn,
    wasmrue_emitted: () => An,
    wasmrue_getCurrentContainer: () => jn,
    wasmrue_getDOMAdapter: () => Mn,
    wasmrue_getDOMAdapterMut: () => Nn,
    wasmrue_h: () => Pn,
    wasmrue_mount: () => Fn,
    wasmrue_onBeforeCreate: () => In,
    wasmrue_onBeforeMount: () => Ln,
    wasmrue_onBeforeUnmount: () => Rn,
    wasmrue_onBeforeUpdate: () => zn,
    wasmrue_onCreated: () => Bn,
    wasmrue_onError: () => Vn,
    wasmrue_onMounted: () => Hn,
    wasmrue_onUnmounted: () => Un,
    wasmrue_onUpdated: () => Wn,
    wasmrue_render: () => Gn,
    wasmrue_renderBetween: () => Kn,
    wasmrue_setDOMAdapter: () => qn,
    wasmrue_unmount: () => Jn,
    wasmrue_use: () => Yn,
    wasmrue_vapor: () => Xn,
    watch: () => Zn,
    watchDeepSignal: () => Qn,
    watchEffect: () => $n,
    watchFn: () => er,
    watchPath: () => tr,
    watchSignal: () => nr,
    withHookSlot: () => rr
  }, 1);
  URL = globalThis.URL;
  var J = await d({
    "./rue_runtime_vapor_bg.js": {
      __wbindgen_object_is_undefined: At,
      __wbindgen_object_clone_ref: Ot,
      __wbg_signalhandle_new: lt,
      __wbindgen_object_drop_ref: kt,
      __wbg_instanceof_Promise_eca6c43a2610558d: Ue,
      __wbg_get_cbf36dc54869cf03: Ve,
      __wbg_new_b546ae120718850e: Qe,
      __wbg_set_efaaf145b9377369: st,
      __wbg_toISOString_eca15cbe422eeea5: gt,
      __wbg_new_0_23cedd11d9b40c9d: Ye,
      __wbg_stringify_655a6390e1f5eb6b: mt,
      __wbg_set_length_a5425f40fdfb1bb5: ct,
      __wbg_get_6b7bd52aca3f9671: ze,
      __wbg_new_25f239778d6112b9: Ze,
      __wbg_set_7df433eea03a5c14: ot,
      __wbg_from_29a8414a7a7cd19d: Le,
      __wbg_push_7d9be8f38fc13975: rt,
      __wbg_length_d45040a40c570362: qe,
      __wbg_isArray_51fd9e6422c0a395: We,
      __wbg_new_df1173567d5ff028: $e,
      __wbg_defineProperty_c4fadd16974ffa92: Fe,
      __wbg_getOwnPropertyDescriptor_b6aa5a2fa50d52c7: Re,
      __wbg_is_928aa29d71e75457: Ge,
      __wbg_new_1ba21ce319a06297: Xe,
      __wbg_keys_f5c6002ff150fc6c: Ke,
      __wbg_static_accessor_GLOBAL_THIS_60cf02db4de8e1c1: dt,
      __wbg_static_accessor_SELF_08f5a74c69739274: ft,
      __wbg_static_accessor_GLOBAL_769e6b65d6557335: ut,
      __wbg_static_accessor_WINDOW_a8924b26aa92d024: pt,
      __wbg_then_4f95312d68691235: ht,
      __wbg_catch_b9db41d97d42bd02: Pe,
      __wbg_resolve_fd5bfbaa4ce36e1e: it,
      __wbg_deleteProperty_da180bf2624d16d6: Ie,
      __wbg_get_af9dab7e9603ea93: Be,
      __wbg_has_0e670569d65d3a45: He,
      __wbg_set_781438a03c0c3c81: at,
      __wbg_ownKeys_f06fcde184cdc8e0: nt,
      __wbg_new_no_args_cb138f77cf6151ee: et,
      __wbg_new_with_args_df9e7125ffe55248: tt,
      __wbg_name_6d8c704cecb9e350: Je,
      __wbg_apply_52e9ae668d017009: ke,
      __wbg_call_abb4ff46ce38be40: Me,
      __wbg_call_3020136f7a2d6e44: Ae,
      __wbg_call_c8baa5c5e72d274e: Ne,
      __wbg_call_78f94eb02ec7f9b2: je,
      __wbg___wbindgen_throw_dd24417ed36fc46e: De,
      __wbg___wbindgen_is_null_dfda7d66506c95b5: ye,
      __wbg___wbindgen_rethrow_78714972834ecdf1: Te,
      __wbg___wbindgen_jsval_eq_b6101cc9cef1fe36: Ce,
      __wbg___wbindgen_is_object_ce774f3490692386: be,
      __wbg___wbindgen_is_string_704ef9c8fc131030: xe,
      __wbg___wbindgen_number_get_9619185a74197f95: we,
      __wbg___wbindgen_string_get_a2a31e16edf96e42: Ee,
      __wbg___wbindgen_boolean_get_dea25b33882b895b: ge,
      __wbg___wbindgen_is_function_8d400b8b1af978cd: ve,
      __wbg___wbindgen_is_undefined_f6b95eab589e0269: Se,
      __wbg__wbg_cb_unref_87dfb5aaa0cbcea7: Oe,
      __wbg___wbindgen_debug_string_adfb662ae34724b6: _e,
      __wbindgen_cast_756e0126608b8f1a: bt,
      __wbindgen_cast_44aa73f53c630eaf: yt,
      __wbindgen_cast_04cabf735c12b7a5: _t,
      __wbindgen_cast_2241b6af4c4b2941: vt,
      __wbindgen_cast_d6cd19b81560fd6e: Et,
      __wbindgen_cast_d0774c7caa5d9ff7: Tt,
      __wbindgen_cast_f1989982a8d89eac: Dt,
      __wbindgen_cast_9ea8bcbf90d58e28: Ct,
      __wbindgen_cast_bef8828423f5280a: wt,
      __wbindgen_cast_9de6aaeb961684b1: St,
      __wbindgen_cast_759b24220f401eeb: xt
    }
  }, u);
  const Mt = J.memory, Nt = J.__wbg_effecthandle_free, Pt = J.__wbg_signalhandle_free, Ft = J.__wbg_wasmrue_free, It = J.batch, Lt = J.computed, Rt = J.createComputed, zt = J.createEffect, Bt = J.createReactive, Vt = J.createRef, Ht = J.createResource, Ut = J.createRue, Wt = J.createSignal, Gt = J.effecthandle_dispose, Kt = J.getCurrentInstance, qt = J.isReactive, Jt = J.onCleanup, Yt = J.propsReactive, Xt = J.reactive, Zt = J.readonly, Qt = J.ref, $t = J.setCurrentInstance, en = J.setReactiveScheduling, tn = J.shallowReactive, nn = J.shallowReadonly, rn = J.signal, an = J.signalhandle_get, on = J.signalhandle_getPath, sn = J.signalhandle_peek, cn = J.signalhandle_peekPath, ln = J.signalhandle_set, un = J.signalhandle_setPath, dn = J.signalhandle_toJSON, fn = J.signalhandle_toString, pn = J.signalhandle_update, mn = J.signalhandle_updatePath, hn = J.signalhandle_value, gn = J.signalhandle_valueOf, _n = J.toRaw, vn = J.toValue, yn = J.unref, bn = J.untrack, xn = J.useCallback, Sn = J.useEffect, Cn = J.useMemo, wn = J.useRef, Tn = J.useSetup, En = J.useSignal, Dn = J.useState, On = J.vaporWithHookId, kn = J.wasmrue_createElement, An = J.wasmrue_emitted, jn = J.wasmrue_getCurrentContainer, Mn = J.wasmrue_getDOMAdapter, Nn = J.wasmrue_getDOMAdapterMut, Pn = J.wasmrue_h, Fn = J.wasmrue_mount, In = J.wasmrue_onBeforeCreate, Ln = J.wasmrue_onBeforeMount, Rn = J.wasmrue_onBeforeUnmount, zn = J.wasmrue_onBeforeUpdate, Bn = J.wasmrue_onCreated, Vn = J.wasmrue_onError, Hn = J.wasmrue_onMounted, Un = J.wasmrue_onUnmounted, Wn = J.wasmrue_onUpdated, Gn = J.wasmrue_render, Kn = J.wasmrue_renderBetween, qn = J.wasmrue_setDOMAdapter, Jn = J.wasmrue_unmount, Yn = J.wasmrue_use, Xn = J.wasmrue_vapor, Zn = J.watch, Qn = J.watchDeepSignal, $n = J.watchEffect, er = J.watchFn, tr = J.watchPath, nr = J.watchSignal, rr = J.withHookSlot, ir = J.signalhandle_set_value, ar = J.__wasm_bindgen_func_elem_179, or = J.__wasm_bindgen_func_elem_73, sr = J.__wasm_bindgen_func_elem_182, cr = J.__wasm_bindgen_func_elem_64, lr = J.__wasm_bindgen_func_elem_185, ur = J.__wasm_bindgen_func_elem_178, dr = J.__wasm_bindgen_func_elem_180, fr = J.__wasm_bindgen_func_elem_181, pr = J.__wasm_bindgen_func_elem_184, mr = J.__wasm_bindgen_func_elem_1113, hr = J.__wasm_bindgen_func_elem_183, gr = J.__wbindgen_export, _r = J.__wbindgen_export2, vr = J.__wbindgen_export3, yr = J.__wbindgen_add_to_stack_pointer, br = J.__wbindgen_export4;
  p(jt);
  let xr, Sr, X;
  xr = `http://www.w3.org/2000/svg`;
  Sr = /* @__PURE__ */ new Set([
    `svg`,
    `g`,
    `circle`,
    `ellipse`,
    `line`,
    `path`,
    `polygon`,
    `polyline`,
    `rect`,
    `text`,
    `defs`,
    `clipPath`,
    `mask`,
    `pattern`,
    `linearGradient`,
    `radialGradient`,
    `stop`,
    `use`,
    `symbol`,
    `marker`,
    `foreignObject`
  ]);
  Y = class {
    createComment(e2) {
      return document.createComment(e2);
    }
    createTextNode(e2) {
      return document.createTextNode(e2);
    }
    createElement(e2) {
      return Sr.has(e2) ? document.createElementNS(xr, e2) : document.createElement(e2);
    }
    createTextWrapper(e2) {
      return e2 instanceof SVGElement ? this.createElement(`text`) : this.createElement(`span`);
    }
    setStyle(e2, t2) {
      typeof t2 == `string` ? e2.setAttribute(`style`, t2) : t2 && typeof t2 == `object` ? Object.assign(e2.style, t2) : e2.removeAttribute(`style`);
    }
    settextContent(e2, t2) {
      e2.textContent = t2 == null || typeof t2 == `boolean` ? `` : String(t2);
    }
    createDocumentFragment() {
      return document.createDocumentFragment();
    }
    appendChild(e2, t2) {
      e2.appendChild(t2);
    }
    removeChild(e2, t2) {
      e2.removeChild(t2);
    }
    insertBefore(e2, t2, n2) {
      e2.insertBefore(t2, n2);
    }
    replaceChild(e2, t2, n2) {
      e2.replaceChild(t2, n2);
    }
    querySelector(e2) {
      return document.querySelector(e2);
    }
    setAttribute(e2, t2, n2) {
      e2.setAttribute(t2, String(n2));
    }
    removeAttribute(e2, t2) {
      e2.removeAttribute(t2);
    }
    addEventListener(e2, t2, n2) {
      e2.addEventListener(t2, n2);
    }
    removeEventListener(e2, t2, n2) {
      e2.removeEventListener(t2, n2);
    }
    setClassName(e2, t2) {
      e2 instanceof SVGElement ? e2.setAttribute(`class`, t2) : e2.className = t2;
    }
    setInnerHTML(e2, t2) {
      e2.innerHTML = t2;
    }
    patchStyle(e2, t2, n2) {
      let r2 = t2 || {}, i2 = n2 || {};
      for (let t3 of Object.keys(r2)) t3 in i2 || (e2.style[t3] = ``);
      Object.assign(e2.style, i2);
    }
    setValue(e2, t2) {
      let n2 = e2;
      if ((n2.tagName || ``).toUpperCase() === `SELECT`) {
        if (n2.multiple && Array.isArray(t2)) for (let e3 = 0; e3 < n2.options.length; e3++) {
          let r2 = n2.options[e3];
          r2.selected = t2.indexOf(r2.value) !== -1;
        }
        else n2.value = t2;
        return;
      }
      n2.value === void 0 ? n2.setAttribute(`value`, String(t2)) : n2.value = t2;
    }
    setChecked(e2, t2) {
      let n2 = e2;
      n2.checked === void 0 ? t2 ? n2.setAttribute(`checked`, ``) : n2.removeAttribute(`checked`) : n2.checked = t2;
    }
    setDisabled(e2, t2) {
      let n2 = e2;
      n2.disabled === void 0 ? t2 ? n2.setAttribute(`disabled`, ``) : n2.removeAttribute(`disabled`) : n2.disabled = t2;
    }
    getTagName(e2) {
      return e2.tagName;
    }
    contains(e2, t2) {
      var _a;
      return ((_a = e2.contains) == null ? void 0 : _a.call(e2, t2)) ?? false;
    }
    getParentNode(e2) {
      return e2.parentNode || null;
    }
    isFragment(e2) {
      return e2.nodeType === 11;
    }
    collectFragmentChildren(e2) {
      return this.isFragment(e2) ? Array.from(e2.childNodes) : [
        e2
      ];
    }
    applyRef(e2, t2) {
      typeof t2 == `function` ? t2(e2) : t2 && typeof t2 == `object` && `current` in t2 && (t2.current = e2);
    }
    clearRef(e2) {
      typeof e2 == `function` ? e2(null) : e2 && typeof e2 == `object` && `current` in e2 && (e2.current = void 0);
    }
  };
  X = new Y();
  Cr = (e2) => {
    X = e2, globalThis.__rue_dom = {
      createElement: (e3) => X.createElement(e3),
      createTextNode: (e3) => X.createTextNode(e3),
      createDocumentFragment: () => X.createDocumentFragment(),
      isFragment: (e3) => X.isFragment(e3),
      collectFragmentChildren: (e3) => X.collectFragmentChildren(e3),
      setTextContent: (e3, t2) => X.settextContent(e3, t2),
      appendChild: (e3, t2) => X.appendChild(e3, t2),
      insertBefore: (e3, t2, n2) => X.insertBefore(e3, t2, n2),
      removeChild: (e3, t2) => X.removeChild(e3, t2),
      contains: (e3, t2) => X.contains(e3, t2),
      setClassName: (e3, t2) => X.setClassName(e3, t2),
      patchStyle: (e3, t2, n2) => X.patchStyle(e3, t2, n2),
      setInnerHTML: (e3, t2) => X.setInnerHTML(e3, t2),
      setValue: (e3, t2) => X.setValue(e3, t2),
      setChecked: (e3, t2) => X.setChecked(e3, t2),
      setDisabled: (e3, t2) => X.setDisabled(e3, t2),
      clearRef: (e3) => X.clearRef(e3),
      applyRef: (e3, t2) => X.applyRef(e3, t2),
      setAttribute: (e3, t2, n2) => X.setAttribute(e3, t2, n2),
      removeAttribute: (e3, t2) => X.removeAttribute(e3, t2),
      getTagName: (e3) => X.getTagName(e3),
      addEventListener: (e3, t2, n2) => X.addEventListener(e3, t2, n2),
      removeEventListener: (e3, t2, n2) => X.removeEventListener(e3, t2, n2),
      hasValueProperty: (e3) => e3.value !== void 0,
      isSelectMultiple: (e3) => (X.getTagName(e3) || ``).toUpperCase() === `SELECT` && !!e3.multiple,
      querySelector: (e3) => X.querySelector(e3)
    };
  };
  globalThis.__rue_dom = {
    createElement: (e2) => X.createElement(e2),
    createTextNode: (e2) => X.createTextNode(e2),
    createDocumentFragment: () => X.createDocumentFragment(),
    isFragment: (e2) => X.isFragment(e2),
    collectFragmentChildren: (e2) => X.collectFragmentChildren(e2),
    setTextContent: (e2, t2) => X.settextContent(e2, t2),
    appendChild: (e2, t2) => X.appendChild(e2, t2),
    insertBefore: (e2, t2, n2) => X.insertBefore(e2, t2, n2),
    removeChild: (e2, t2) => X.removeChild(e2, t2),
    contains: (e2, t2) => X.contains(e2, t2),
    setClassName: (e2, t2) => X.setClassName(e2, t2),
    patchStyle: (e2, t2, n2) => X.patchStyle(e2, t2, n2),
    setInnerHTML: (e2, t2) => X.setInnerHTML(e2, t2),
    setValue: (e2, t2) => X.setValue(e2, t2),
    setChecked: (e2, t2) => X.setChecked(e2, t2),
    setDisabled: (e2, t2) => X.setDisabled(e2, t2),
    clearRef: (e2) => X.clearRef(e2),
    applyRef: (e2, t2) => X.applyRef(e2, t2),
    setAttribute: (e2, t2, n2) => X.setAttribute(e2, t2, n2),
    removeAttribute: (e2, t2) => X.removeAttribute(e2, t2),
    getTagName: (e2) => X.getTagName(e2),
    addEventListener: (e2, t2, n2) => X.addEventListener(e2, t2, n2),
    removeEventListener: (e2, t2, n2) => X.removeEventListener(e2, t2, n2),
    hasValueProperty: (e2) => e2.value !== void 0,
    isSelectMultiple: (e2) => (X.getTagName(e2) || ``).toUpperCase() === `SELECT` && !!e2.multiple,
    querySelector: (e2) => X.querySelector(e2)
  };
  wr = (e2) => X.createComment(e2);
  Tr = (e2) => X.createTextNode(e2);
  Er = (e2) => X.createElement(e2);
  Dr = (e2) => X.createTextWrapper(e2);
  Or = (e2, t2) => {
    X.setStyle(e2, t2);
  };
  kr = (e2, t2) => {
    X.settextContent(e2, t2);
  };
  Ar = () => X.createDocumentFragment();
  jr = (e2, t2) => {
    X.appendChild(e2, t2);
  };
  Mr = (e2, t2) => {
    X.removeChild(e2, t2);
  };
  Nr = (e2, t2, n2) => {
    X.insertBefore(e2, t2, n2);
  };
  Pr = (e2) => X.querySelector(e2);
  Fr = (e2, t2, n2) => X.setAttribute(e2, t2, n2);
  Ir = (e2, t2, n2) => X.addEventListener(e2, t2, n2);
  Lr = (e2, t2) => X.setClassName(e2, t2);
  Rr = (e2, t2) => X.setInnerHTML(e2, t2);
  zr = (e2, t2) => X.setValue(e2, t2);
  Br = (e2, t2) => X.setChecked(e2, t2);
  Vr = (e2, t2) => X.setDisabled(e2, t2);
  Z = (e2, t2) => X.contains(e2, t2);
  Hr = (e2) => X.getParentNode(e2);
  var Q = globalThis.__rue || (globalThis.__rue = K(globalThis.__rue_dom)), $ = () => globalThis.__rue_active || globalThis.__rue;
  Q.handleError = Q.handleError ?? ((e2, t2) => {
    var _a;
    try {
      (_a = console.error) == null ? void 0 : _a.call(console, e2);
    } catch {
    }
  });
  Ur = (e2, t2) => $().render(e2, t2);
  Wr = (e2, t2, n2, r2) => $().renderBetween(e2, t2, n2, r2);
  Gr = (e2) => $().emitted(e2);
  Kr = (e2) => ({
    type: `vapor`,
    props: {
      setup: e2
    },
    children: []
  });
  qr = (e2) => $().onBeforeCreate(e2);
  Jr = (e2) => $().onCreated(e2);
  Yr = (e2) => $().onMounted(e2);
  Xr = (e2) => $().onBeforeUnmount(e2);
  Zr = (e2) => $().onUnmounted(e2);
  Qr = (e2) => $().onError(e2);
  $r = () => $().getCurrentContainer();
  ei = Q;
  ti = function(e2, t2, ...n2) {
    return $().createElement(e2, t2, n2);
  };
  ni = `fragment`;
})();
export {
  Lr as A,
  ce as B,
  Dr as C,
  Mr as D,
  Pr as E,
  zr as F,
  pe as G,
  ue as H,
  kr as I,
  d as J,
  me as K,
  G as L,
  Vr as M,
  Rr as N,
  Fr as O,
  Or as P,
  q as R,
  Tr as S,
  Nr as T,
  de as U,
  le as V,
  fe as W,
  s as X,
  o as Y,
  l as Z,
  jr as _,
  __tla,
  qr as a,
  Ar as b,
  Qr as c,
  Ur as d,
  Wr as f,
  Ir as g,
  Y as h,
  ti as i,
  Cr as j,
  Br as k,
  Yr as l,
  Kr as m,
  Gr as n,
  Xr as o,
  ei as p,
  he as q,
  $r as r,
  Jr as s,
  ni as t,
  Zr as u,
  Z as v,
  Hr as w,
  Er as x,
  wr as y,
  se as z
};
