import{$ as e,A as t,F as n,H as r,I as i,J as a,L as o,N as s,P as c,U as l,W as u,Y as d,c as f,dt as p,j as m,nt as h,pt as g,rt as _,t as v,u as y,ut as b}from"./vapor-runtime-CKndxKFn.js";import{a as x,n as S}from"./vapor-helpers-vapor-yxlhW-_4.js";import{t as C}from"./src-BNaUOyhz.js";import{t as w}from"./Code-B1JFTu6m.js";var T=e=>y(()=>{let t=n(`div`);u(t,`card bg-base-100 border border-base-200 shadow-sm`);let r=n(`div`);m(t,r),u(r,`card-body`);let i=n(`div`);m(r,i),u(i,`flex items-center gap-3 mb-1`);let a=n(`div`);m(i,a),u(a,`w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center`);let c=n(`span`);m(a,c),u(c,`text-lg`);let l=o(c);m(c,l),g(()=>{d(l,e.icon||`⚡️`)});let p=n(`div`);m(i,p),u(p,`font-semibold text-base-content`);let h=s(`rue:slot:anchor`);m(p,h),g(()=>{let t=e.title;f(t,p,h)});let _=n(`p`);m(r,_),u(_,`text-sm text-base-content/70`);let v=s(`rue:slot:anchor`);return m(_,v),g(()=>{let t=e.desc;f(t,_,v)}),t}),ee=()=>y(()=>{let e=n(`div`);u(e,`card bg-primary text-primary-content shadow-sm`);let t=n(`div`);m(e,t),u(t,`card-body items-center text-center`);let r=n(`div`);m(t,r),u(r,`text-3xl font-extrabold`),m(r,i(`Hello`));let a=n(`div`);return m(t,a),u(a,`mt-2 text-sm opacity-90`),m(a,i(`Hello component`)),e}),te=()=>y(()=>{let e=n(`div`);u(e,`card bg-base-100 text-base-content border border-base-200 shadow-sm`);let t=n(`div`);m(e,t),u(t,`card-body items-center text-center`);let r=n(`div`);m(t,r),u(r,`text-3xl font-extrabold`),m(r,i(`World`));let a=n(`div`);return m(t,a),u(a,`mt-2 text-sm text-base-content/70`),m(a,i(`World component`)),e}),ne=()=>y(()=>{let e=n(`div`);u(e,`card bg-accent text-accent-content shadow-sm`);let t=n(`div`);m(e,t),u(t,`card-body items-center text-center`);let r=n(`div`);m(t,r),u(r,`text-3xl font-extrabold`),m(r,i(`Hi`));let a=n(`div`);return m(t,a),u(a,`mt-2 text-sm opacity-90`),m(a,i(`Rue`)),e}),re=()=>y(()=>{let e=n(`div`);u(e,`card bg-base-100 text-base-content border border-base-200 shadow-sm`);let t=n(`div`);m(e,t),u(t,`card-body items-center text-center`);let r=n(`div`);m(t,r),u(r,`text-3xl font-extrabold`),m(r,i(`Yes`));let a=n(`div`);return m(t,a),u(a,`mt-2 text-sm text-base-content/70`),m(a,i(`My name is Rue`)),e}),ie=[{title:`原始 DOM 编程`,desc:`直接操作节点与事件`},{title:`jQuery 的崛起`,desc:`Write Less, Do More`},{title:`Backbone.js 与 MVC`,desc:`早期前端架构探索`},{title:`Web Components`,desc:`原生组件标准`},{title:`现代构建工具与生态`,desc:`模块化与开发体验`}],E=e=>y(()=>{let i=n(`input`);return u(i,`w-full rounded-md border-gray-300 shadow-sm focus:border-violet-500 focus:ring focus:ring-violet-200 px-3 py-2`),g(()=>{a(i,e.value)}),t(i,`input`,t=>e.onChange(t.target.value)),r(i,`placeholder`,`搜索视频`),i}),D=e=>y(()=>{let t=n(`div`);u(t,`mt-3 space-y-2`);let a=n(`div`);m(t,a),u(a,`text-sm text-gray-700`);let l=s(`rue:slot:anchor`);m(a,l),g(()=>{let t=e.videos.length;f(t,a,l)}),m(a,i(` 个视频`));let p=s(`rue:slot:anchor`);return m(t,p),g(()=>{f(e.videos.length===0?y(()=>{let t=c(),r=n(`div`);m(t,r),u(r,`rounded-md border border-gray-200/70 bg-white/60 backdrop-blur-sm p-3 text-sm`);let i=o(r);return m(r,i),g(()=>{d(i,e.emptyHeading||`暂无匹配`)}),t}):y(()=>{let t=c(),i=n(`ul`);m(t,i),u(i,`space-y-2`);let a=s(`rue:list:start`),o=s(`rue:list:end`);m(i,a),m(i,o);let l=new Map;return g(()=>{l=S({items:e.videos||[],getKey:(e,t)=>t,elements:l,parent:i,before:o,singleRoot:!0,start:a,renderItem:(e,t,i,a,o)=>{f(y(()=>{let t=c(),i=n(`li`);m(t,i),g(()=>{r(i,`key`,String(o))}),u(i,`rounded-md border border-gray-200/70 bg-white/60 backdrop-blur-sm p-3`);let a=n(`div`);m(i,a),u(a,`font-medium`);let l=s(`rue:slot:anchor`);m(a,l),g(()=>{let t=e.title;f(t,a,l)});let d=n(`div`);m(i,d),u(d,`text-sm text-gray-500`);let p=s(`rue:slot:anchor`);return m(d,p),g(()=>{let t=e.desc;f(t,d,p)}),t}),t,i)}})}),t}),t,p)}),t}),ae=t=>{let{searchText:n,setSearchText:r}=x(`useSetup:0:0`,()=>b(()=>{let[e,t]=x(`useState:1:0`,()=>p(``));return{searchText:e,setSearchText:t}})),i=x(`computed:1:1`,()=>e(()=>t.videos.filter(e=>e.title.toLowerCase().includes(n.value.toLowerCase()))));return y(()=>{let e=c(),t=s(`rue:component:anchor`);m(e,t),g(()=>{f(v(E,{value:n.value,onChange:r}),e,t)});let a=s(`rue:component:anchor`);return m(e,a),g(()=>{f(v(D,{videos:i.get(),emptyHeading:`没有匹配 “${n.value}”`}),e,a)}),e})},oe=()=>{let{count:e,state:a}=x(`useSetup:0:0`,()=>b(()=>({count:x(`ref:1:2`,()=>_(0)),state:x(`reactive:1:3`,()=>h({enabled:!1}))})));return y(()=>{let s=n(`div`);u(s,`rounded-xl border border-gray-200/70 bg-white/60 backdrop-blur-sm p-4`);let c=n(`div`);m(s,c),u(c,`flex items-center gap-3`);let f=n(`button`);m(c,f),u(f,`btn btn-primary`),t(f,`click`,()=>e.value++),m(f,i(`+1`));let p=n(`button`);m(c,p),u(p,`btn btn-outline`),t(p,`click`,()=>e.value=0),m(p,i(`重置`));let h=n(`label`);m(c,h),u(h,`flex items-center gap-2 ml-auto`);let _=n(`input`);m(h,_),r(_,`type`,`checkbox`),u(_,`checkbox`),g(()=>{l(_,!!a.enabled)}),t(_,`change`,e=>a.enabled=e.target.checked);let v=n(`span`);m(h,v),u(v,`text-sm`),m(v,i(`启用`));let y=n(`div`);m(s,y),u(y,`mt-2 text-sm text-gray-700`),m(y,i(`计数：`));let b=o(y);m(y,b),g(()=>{d(b,e.value)}),m(y,i(`，启用：`));let x=o(y);return m(y,x),g(()=>{d(x,a.enabled?`是`:`否`)}),s})},O=()=>y(()=>{let e=c(),t=n(`section`);m(e,t),u(t,`relative rounded-2xl bg-gr2adient-to-br from-violet-50 to-fuchsia-50 p-12 mb-10`);let r=n(`div`);m(t,r),u(r,`absolute -top-24 -left-24 w-96 h-96 rounded-full bg-violet-200/40 blur-3xl`);let a=n(`div`);m(t,a),u(a,`absolute -bottom-24 -right-24 w-md h-112 rounded-full bg-fuchsia-200/40 blur-3xl`);let o=n(`div`);m(t,o),u(o,`relative max-w-[1100px] mx-auto text-center`);let l=n(`div`);m(o,l),u(l,`hover-3d`);let d=n(`figure`);m(l,d);let p=n(`div`);m(d,p),u(p,`inline-flex items-center justify-center gap-3`);let h=n(`span`);m(p,h),u(h,`inline-flex items-center justify-center w-22 h-22 rounded-full bg-linear-to-br from-violet-500 via-fuchsia-500 to-pink-500 shadow-lg ring-1 ring-white/30`);let _=n(`span`);m(h,_),u(_,`text-white font-extrabold text-[64px] md:text-[92px] leading-none`),m(_,i(`T`));let y=n(`span`);m(p,y),u(y,`text-6xl md:text-8xl font-extrabold tracking-tight bg-linear-to-r from-violet-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent`),m(y,i(`he Wasm`));let b=n(`div`);m(d,b),u(b,`mt-2 text-4xl md:text-5xl font-extrabold tracking-tight bg-linear-to-r from-violet-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent`),m(b,i(`Framework For Vapor Native DOM`));let x=n(`p`);m(d,x),u(x,`mt-6 text-lg md:text-xl text-gray-700`),m(x,i(`Rust 运行时，Rust 响应式系统，Rust 原生 DOM 编译器`)),m(l,n(`div`)),m(l,n(`div`)),m(l,n(`div`)),m(l,n(`div`)),m(l,n(`div`)),m(l,n(`div`)),m(l,n(`div`)),m(l,n(`div`));let S=n(`div`);m(o,S),u(S,`mt-8 flex flex-wrap justify-center gap-3`);let E=s(`rue:component:anchor`);m(S,E),f(v(C,{to:`/guide/guide/quick-start`,className:`btn btn-primary btn-lg`,children:`快速上手`}),S,E);let D=s(`rue:component:anchor`);m(S,D),f(v(C,{to:`/guide/guide/introduction`,className:`btn btn-outline btn-lg`,children:`文档`}),S,D);let O=s(`rue:component:anchor`);m(S,O),f(v(C,{to:`/api/api/index`,className:`btn btn-outline btn-lg`,children:`API`}),S,O);let k=n(`section`);m(e,k),u(k,`grid md:grid-cols-3 gap-6 max-w-[1100px] mx-auto`);let se=s(`rue:component:anchor`);m(k,se),f(v(T,{title:`简洁易用`,desc:`基于标准 HTML/CSS/TSX/WebAssembly，编译驱动的原生 DOM 渲染，组件语法直观，开发体验轻松高效。`,icon:`✅`}),k,se);let ce=s(`rue:component:anchor`);m(k,ce),f(v(T,{title:`Rust 编译器 · Vapor 模式`,desc:`由 Rust 实现的 Vapor 原生 DOM 编译与细粒度更新，低内存、高性能，适用于复杂界面。`,icon:`🦀`}),k,ce);let le=s(`rue:component:anchor`);m(k,le),f(v(T,{title:`兼容 React / Vue 语法`,desc:`同时支持 useState / useEffect 与 ref / reactive / watchEffect 等相关 API，保留熟悉的心智模型，渐进式融入现有代码。`,icon:`🤝`}),k,le);let ue=n(`section`);m(e,ue),u(ue,`mt-12 rounded-2xl p-8 bg-linear-to-br from-pink-500/80 to-fuchsia-500/80 text-white ring-1 ring-white/30 shadow-lg max-w-[1100px] mx-auto`);let A=n(`div`);m(ue,A),u(A,`md:flex items-center justify-between`);let de=n(`div`);m(A,de);let fe=n(`h2`);m(de,fe),u(fe,`text-2xl font-semibold mb-2 text-white`),m(fe,i(`生态与插件`));let j=n(`p`);m(de,j),u(j,`text-white/90`),m(j,i(`可使用 AI 开发你自己的插件，可渐进式集成到你的应用。`));let M=n(`div`);m(A,M),u(M,`mt-4 md:mt-0 flex gap-3`);let pe=s(`rue:component:anchor`);m(M,pe),f(v(C,{to:`/plugins`,className:`btn btn-outline`,children:`插件`}),M,pe);let me=s(`rue:component:anchor`);m(M,me),f(v(C,{to:`/design/button`,className:`btn btn-outline`,children:`组件库`}),M,me);let N=n(`section`);m(e,N),u(N,`max-w-[1100px] mx-auto mt-12`);let P=n(`h2`);m(N,P),u(P,`text-2xl font-semibold mb-2`),m(P,i(`用组件组织界面`));let F=n(`p`);m(N,F),u(F,`text-gray-600`),m(F,i(`Rue 以组件表达界面中的可复用片段。组件同时包含结构与逻辑，按需组合即可形成页面或模块，语法简洁、心智负担低。`));let I=n(`div`);m(N,I),u(I,`mt-6 grid md:grid-cols-2 gap-6 items-start`);let L=n(`div`);m(I,L),u(L,`card bg-base-100 border p-0 overflow-auto h-[360px] md:h-[560px]`);let he=s(`rue:component:anchor`);m(L,he),g(()=>{f(v(w,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue'

const Hello: FC = () => (
  <div className="card bg-primary text-primary-content shadow-sm">
    <div className="card-body items-center text-center">
      <div className="text-3xl font-extrabold">Hello</div>
      <div className="mt-2 text-sm opacity-90">Hello component</div>
    </div>
  </div>
)

const World: FC = () => (
  <div className="card bg-base-100 text-base-content border border-base-200 shadow-sm">
    <div className="card-body items-center text-center">
      <div className="text-3xl font-extrabold">World</div>
      <div className="mt-2 text-sm text-base-content/70">World component</div>
    </div>
  </div>
)

const HelloRue: FC = () => (
  <div className="card bg-accent text-accent-content shadow-sm">
    <div className="card-body items-center text-center">
      <div className="text-3xl font-extrabold">Hi</div>
      <div className="mt-2 text-sm opacity-90">Rue</div>
    </div>
  </div>
)

const IAmRue: FC = () => (
  <div className="card bg-base-100 text-base-content border border-base-200 shadow-sm">
    <div className="card-body items-center text-center">
      <div className="text-3xl font-extrabold">Yes</div>
      <div className="mt-2 text-sm text-base-content/70">My name is Rue</div>
    </div>
  </div>
)

const HelloWorld: FC = () => (
  <div className="grid gap-6">
    <Hello />
    <World />
    <HelloRue />
    <IAmRue />
  </div>
)

export default HelloWorld`}),L,he)});let R=n(`div`);m(I,R),u(R,`grid gap-6`);let ge=s(`rue:component:anchor`);m(R,ge),f(v(ee,{}),R,ge);let _e=s(`rue:component:anchor`);m(R,_e),f(v(te,{}),R,_e);let ve=s(`rue:component:anchor`);m(R,ve),f(v(ne,{}),R,ve);let ye=s(`rue:component:anchor`);m(R,ye),f(v(re,{}),R,ye);let z=n(`p`);m(N,z),u(z,`mt-6 text-gray-600`),m(z,i(`Rue 的组件强调可复用与可组合，关注清晰的数据与事件流。你可以按需拼装来自不同团队的模块，保持一致的开发体验，而不受沉重框架约束。`));let B=n(`section`);m(e,B),u(B,`max-w-[1100px] mx-auto mt-12`);let V=n(`h2`);m(B,V),u(V,`text-2xl font-semibold mb-2`),m(V,i(`Vapor 模式：Rust 编译到原生 DOM`));let H=n(`p`);m(B,H),u(H,`text-gray-600`),m(H,i(`Rue 以 JSX/TSX 描述结构与逻辑，使用 Vapor 原生 DOM 渲染路径。`));let be=n(`p`);m(B,be),u(be,`text-gray-600`),m(be,i(`Vapor 编译器由 Rust 实现，对小块更新进行细粒度优化；高性能区域采用 Vapor，通用区域沿用虚拟 DOM，二者可渐进混用。`));let U=n(`div`);m(B,U),u(U,`mt-6 grid md:grid-cols-2 gap-6 items-start`);let W=n(`div`);m(U,W),u(W,`card bg-base-100 border overflow-auto h-[360px] md:h-[510px]`);let xe=s(`rue:component:anchor`);m(W,xe),g(()=>{f(v(w,{className:`h-full`,lang:`tsx`,code:`const Hello: FC = () => (
  <div className="card bg-primary text-primary-content shadow-sm">
    <div className="card-body items-center text-center">
      <div className="text-3xl font-extrabold">Hello</div>
      <div className="mt-2 text-sm opacity-90">Hello component</div>
    </div>
  </div>
)

const World: FC = () => (
  <div className="card bg-base-100 text-base-content border border-base-200 shadow-sm">
    <div className="card-body items-center text-center">
      <div className="text-3xl font-extrabold">World</div>
      <div className="mt-2 text-sm text-base-content/70">World component</div>
    </div>
  </div>
)

const HelloRue: FC = () => (
  <div className="card bg-accent text-accent-content shadow-sm">
    <div className="card-body items-center text-center">
      <div className="text-3xl font-extrabold">Hi</div>
      <div className="mt-2 text-sm opacity-90">Rue</div>
    </div>
  </div>
)

const IAmRue: FC = () => (
  <div className="card bg-base-100 text-base-content border border-base-200 shadow-sm">
    <div className="card-body items-center text-center">
      <div className="text-3xl font-extrabold">Yes</div>
      <div className="mt-2 text-sm text-base-content/70">My name is Rue</div>
    </div>
  </div>
)

const HelloWorld: FC = () => (
  <div className="grid gap-6">
    <Hello />
    <World />
    <HelloRue />
    <IAmRue />
  </div>
)

export default HelloWorld`}),W,xe)});let G=n(`div`);m(U,G),u(G,`card bg-base-100 border p-0 overflow-auto h-[360px] md:h-[510px]`);let Se=s(`rue:component:anchor`);m(G,Se),g(()=>{f(v(w,{className:`h-full`,lang:`ts`,code:`/* RUE_VAPOR_TRANSFORMED */
import { jsxDEV as _jsxDEV } from "@rue-js/jsx-dev-runtime";
import { vapor, renderBetween, _$createElement, _$createComment, _$createTextNode, _$appendChild, _$setClassName } from "@rue-js/rue";
const Hello = ()=>vapor(()=>{
        const _root = _$createElement("div");
        _$setClassName(_root, "card bg-primary text-primary-content shadow-sm");
        const _el1 = _$createElement("div");
        _$appendChild(_root, _el1);
        _$setClassName(_el1, "card-body items-center text-center");
        const _el2 = _$createElement("div");
        _$appendChild(_el1, _el2);
        _$setClassName(_el2, "text-3xl font-extrabold");
        _$appendChild(_el2, _$createTextNode("Hello"));
        const _el3 = _$createElement("div");
        _$appendChild(_el1, _el3);
        _$setClassName(_el3, "mt-2 text-sm opacity-90");
        _$appendChild(_el3, _$createTextNode("Hello component"));
        return _root;
    });
const World = ()=>vapor(()=>{
        const _root = _$createElement("div");
        _$setClassName(_root, "card bg-base-100 text-base-content border border-base-200 shadow-sm");
        const _el4 = _$createElement("div");
        _$appendChild(_root, _el4);
        _$setClassName(_el4, "card-body items-center text-center");
        const _el5 = _$createElement("div");
        _$appendChild(_el4, _el5);
        _$setClassName(_el5, "text-3xl font-extrabold");
        _$appendChild(_el5, _$createTextNode("World"));
        const _el6 = _$createElement("div");
        _$appendChild(_el4, _el6);
        _$setClassName(_el6, "mt-2 text-sm text-base-content/70");
        _$appendChild(_el6, _$createTextNode("World component"));
        return _root;
    });
const HelloRue = ()=>vapor(()=>{
        const _root = _$createElement("div");
        _$setClassName(_root, "card bg-accent text-accent-content shadow-sm");
        const _el7 = _$createElement("div");
        _$appendChild(_root, _el7);
        _$setClassName(_el7, "card-body items-center text-center");
        const _el8 = _$createElement("div");
        _$appendChild(_el7, _el8);
        _$setClassName(_el8, "text-3xl font-extrabold");
        _$appendChild(_el8, _$createTextNode("Hi"));
        const _el9 = _$createElement("div");
        _$appendChild(_el7, _el9);
        _$setClassName(_el9, "mt-2 text-sm opacity-90");
        _$appendChild(_el9, _$createTextNode("Rue"));
        return _root;
    });
const IAmRue = ()=>vapor(()=>{
        const _root = _$createElement("div");
        _$setClassName(_root, "card bg-base-100 text-base-content border border-base-200 shadow-sm");
        const _el10 = _$createElement("div");
        _$appendChild(_root, _el10);
        _$setClassName(_el10, "card-body items-center text-center");
        const _el11 = _$createElement("div");
        _$appendChild(_el10, _el11);
        _$setClassName(_el11, "text-3xl font-extrabold");
        _$appendChild(_el11, _$createTextNode("Yes"));
        const _el12 = _$createElement("div");
        _$appendChild(_el10, _el12);
        _$setClassName(_el12, "mt-2 text-sm text-base-content/70");
        _$appendChild(_el12, _$createTextNode("My name is Rue"));
        return _root;
    });
const HelloWorld = ()=>vapor(()=>{
        const _root = _$createElement("div");
        _$setClassName(_root, "grid gap-6");
        const _list1 = _$createComment("rue:component:start");
        const _list2 = _$createComment("rue:component:end");
        _$appendChild(_root, _list1);
        _$appendChild(_root, _list2);
        const __slot3 = /*#__PURE__*/ _jsxDEV(Hello, {}, void 0, false, {
            fileName: "rue-plugin-input.tsx",
            lineNumber: 39,
            columnNumber: 5
        }, this);
        renderBetween(__slot3, _root, _list1, _list2);
        const _list4 = _$createComment("rue:component:start");
        const _list5 = _$createComment("rue:component:end");
        _$appendChild(_root, _list4);
        _$appendChild(_root, _list5);
        const __slot6 = /*#__PURE__*/ _jsxDEV(World, {}, void 0, false, {
            fileName: "rue-plugin-input.tsx",
            lineNumber: 40,
            columnNumber: 5
        }, this);
        renderBetween(__slot6, _root, _list4, _list5);
        const _list7 = _$createComment("rue:component:start");
        const _list8 = _$createComment("rue:component:end");
        _$appendChild(_root, _list7);
        _$appendChild(_root, _list8);
        const __slot9 = /*#__PURE__*/ _jsxDEV(HelloRue, {}, void 0, false, {
            fileName: "rue-plugin-input.tsx",
            lineNumber: 41,
            columnNumber: 5
        }, this);
        renderBetween(__slot9, _root, _list7, _list8);
        const _list10 = _$createComment("rue:component:start");
        const _list11 = _$createComment("rue:component:end");
        _$appendChild(_root, _list10);
        _$appendChild(_root, _list11);
        const __slot12 = /*#__PURE__*/ _jsxDEV(IAmRue, {}, void 0, false, {
            fileName: "rue-plugin-input.tsx",
            lineNumber: 42,
            columnNumber: 5
        }, this);
        renderBetween(__slot12, _root, _list10, _list11);
        return _root;
    });
export default HelloWorld;`}),G,Se)});let K=n(`div`);m(B,K),u(K,`mt-6 space-y-3 text-gray-700`);let Ce=n(`p`);m(K,Ce),m(Ce,i(`Vapor 模式优势： 直接创建与更新原生 DOM，避免额外的整树协调 开销；按需、细粒度响应式更新，组件级挂载与卸载更高效；更小的运行时路径与更少的内存占用，在复杂界面中表现尤为稳定。`));let q=n(`section`);m(e,q),u(q,`max-w-[1100px] mx-auto mt-12`);let J=n(`h2`);m(q,J),u(J,`text-2xl font-semibold mb-2`),m(J,i(`在需要的地方添加交互（兼容 React / Vue）`));let we=n(`p`);m(q,we),u(we,`text-gray-600`),m(we,i(`Rue 组件可以接收数据并返回视图。你既可以用 React 风格的 useState， 也可以用 Vue 风格的 ref / reactive 在任何位置增加交互。`));let Y=n(`div`);m(q,Y),u(Y,`mt-6 grid md:grid-cols-2 gap-6 items-start`);let X=n(`div`);m(Y,X),u(X,`card bg-base-100 border p-0 overflow-auto h-[360px] md:h-[660px]`);let Te=s(`rue:component:anchor`);m(X,Te),g(()=>{f(v(w,{className:`h-full`,lang:`tsx`,code:`import { type FC, useState, ref, reactive, computed } from '@rue-js/rue';

type Video = { title: string; desc: string };
const videos: Video[] = [
  { title: '原始 DOM 编程', desc: '直接操作节点与事件' },
  { title: 'jQuery 的崛起', desc: 'Write Less, Do More' },
  { title: 'Backbone.js 与 MVC', desc: '早期前端架构探索' },
  { title: 'Web Components', desc: '原生组件标准' },
  { title: '现代构建工具与生态', desc: '模块化与开发体验' },
];

const SearchInput: FC<{ value: string; onChange: (t: string) => void }> = p => (
  <input
    className="w-full rounded-md border-gray-300 shadow-sm focus:border-violet-500 focus:ring focus:ring-violet-200 px-3 py-2"
    value={p.value}
    onInput={(e: any) => p.onChange((e.target as HTMLInputElement).value)}
    placeholder="搜索视频"
  />
)

// VideoList 组件
const VideoList: FC<{ videos: Video[]; emptyHeading?: string }> = p => (
  <div className="mt-3 space-y-2">
    <div className="text-sm text-gray-700">{p.videos.length} 个视频</div>
    {p.videos.length === 0 ? (
      <div className="rounded-md border border-gray-200/70 bg-white/60 backdrop-blur-sm p-3 text-sm">
        {p.emptyHeading || '暂无匹配'}
      </div>
    ) : (
      <ul className="space-y-2">
        {p.videos.map((v, i) => (
          <li
            key={i}
            className="rounded-md border border-gray-200/70 bg-white/60 backdrop-blur-sm p-3"
          >
            <div className="font-medium">{v.title}</div>
            <div className="text-sm text-gray-500">{v.desc}</div>
          </li>
        ))}
      </ul>
    )}
  </div>
)

const SearchableVideoList: FC<{ videos: Video[] }> = (p) => {
  const [searchText, setSearchText] = useState('');
  const foundVideos = computed(() =>
    p.videos.filter(v =>
      v.title.toLowerCase().includes(searchText.value.toLowerCase()),
    )
  )

  return (
    <>
      <SearchInput value={searchText.value} onChange={setSearchText} />
      <VideoList videos={foundVideos} emptyHeading={\`没有匹配 “\${searchText.value}”\`} />
    </>
  );
};

const ReactiveDemo: FC = () => {
  const count = ref(0);
  const state = reactive({ enabled: false });
  return (
    <div className="rounded-xl border border-gray-200/70 bg-white/60 backdrop-blur-sm p-4">
      <div className="flex items-center gap-3">
        <button className="btn btn-primary" onClick={() => (count.value++)}>+1</button>
        <button className="btn btn-outline" onClick={() => (count.value = 0)}>重置</button>
        <label className="flex items-center gap-2 ml-auto">
          <input
            type="checkbox"
            className="checkbox"
            checked={state.enabled}
            onChange={(e: any) => (state.enabled = (e.target as HTMLInputElement).checked)}
          />
          <span className="text-sm">启用</span>
        </label>
      </div>
      <div className="mt-2 text-sm text-gray-700">
        计数：{count.value}，启用：{state.enabled ? '是' : '否'}
      </div>
    </div>
  );
};

const Reactive: FC = () => (
  <div className="grid gap-6">
    <div>
      <h3 className="text-lg font-semibold mb-2">前端的发展，从原始DOM，到 JQUERY等</h3>
      <SearchableVideoList videos={videos} />
    </div>
    <div>
      <h3 className="text-lg font-semibold mb-2">ref / reactive 示例</h3>
      <ReactiveDemo />
    </div>
  </div>
)

export default Reactive;`}),X,Te)});let Z=n(`div`);m(Y,Z),u(Z,`grid gap-6`);let Q=n(`div`);m(Z,Q);let Ee=n(`h3`);m(Q,Ee),u(Ee,`text-lg font-semibold mb-2`),m(Ee,i(`前端的发展，从原始DOM，到 JQUERY等`));let De=s(`rue:component:anchor`);m(Q,De),g(()=>{f(v(ae,{videos:ie}),Q,De)});let $=n(`div`);m(Z,$);let Oe=n(`h3`);m($,Oe),u(Oe,`text-lg font-semibold mb-2`),m(Oe,i(`ref / reactive 示例`));let ke=s(`rue:component:anchor`);m($,ke),f(v(oe,{}),$,ke);let Ae=n(`p`);return m(q,Ae),u(Ae,`mt-6 text-gray-600`),m(Ae,i(`Rue 支持渐进集成：在任意 DOM 节点挂载交互片段，与现有页面共存，无需重写整站。`)),e});export{O as default};