import{F as e,G as t,I as n,L as r,M as i,P as a,R as o,U as s,W as c,X as l,Z as u,_t as d,at as f,bt as p,c as m,ct as h,j as g,lt as _,pt as v,t as y,u as b,vt as x}from"./vapor-runtime-D3a-68js.js";import{a as S,n as C}from"./vapor-helpers-vapor-DGjYaAZX.js";import{t as w}from"./src-DHiZTgAR.js";import{t as T}from"./Code-2C2psoH3.js";var E=e=>b(()=>{let r=n(`div`);t(r,`card bg-base-100 border border-base-200 shadow-sm`);let s=n(`div`);i(r,s),t(s,`card-body`);let c=n(`div`);i(s,c),t(c,`flex items-center gap-3 mb-1`);let l=n(`div`);i(c,l),t(l,`w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center`);let d=n(`span`);i(l,d),t(d,`text-lg`);let f=o(d);i(d,f),p(()=>{u(f,e.icon||`⚡️`)});let h=n(`div`);i(c,h),t(h,`font-semibold text-base-content`);let g=a(`rue:slot:anchor`);i(h,g),p(()=>{let t=e.title;v(()=>m(t,h,g))});let _=n(`p`);i(s,_),t(_,`text-sm text-base-content/70`);let y=a(`rue:slot:anchor`);return i(_,y),p(()=>{let t=e.desc;v(()=>m(t,_,y))}),r}),ee=()=>b(()=>{let e=n(`div`);t(e,`card bg-primary text-primary-content shadow-sm`);let a=n(`div`);i(e,a),t(a,`card-body items-center text-center`);let o=n(`div`);i(a,o),t(o,`text-3xl font-extrabold`),i(o,r(`Hello`));let s=n(`div`);return i(a,s),t(s,`mt-2 text-sm opacity-90`),i(s,r(`Hello component`)),e}),te=()=>b(()=>{let e=n(`div`);t(e,`card bg-base-100 text-base-content border border-base-200 shadow-sm`);let a=n(`div`);i(e,a),t(a,`card-body items-center text-center`);let o=n(`div`);i(a,o),t(o,`text-3xl font-extrabold`),i(o,r(`World`));let s=n(`div`);return i(a,s),t(s,`mt-2 text-sm text-base-content/70`),i(s,r(`World component`)),e}),ne=()=>b(()=>{let e=n(`div`);t(e,`card bg-accent text-accent-content shadow-sm`);let a=n(`div`);i(e,a),t(a,`card-body items-center text-center`);let o=n(`div`);i(a,o),t(o,`text-3xl font-extrabold`),i(o,r(`Hi`));let s=n(`div`);return i(a,s),t(s,`mt-2 text-sm opacity-90`),i(s,r(`Rue`)),e}),re=()=>b(()=>{let e=n(`div`);t(e,`card bg-base-100 text-base-content border border-base-200 shadow-sm`);let a=n(`div`);i(e,a),t(a,`card-body items-center text-center`);let o=n(`div`);i(a,o),t(o,`text-3xl font-extrabold`),i(o,r(`Yes`));let s=n(`div`);return i(a,s),t(s,`mt-2 text-sm text-base-content/70`),i(s,r(`My name is Rue`)),e}),ie=[{title:`原始 DOM 编程`,desc:`直接操作节点与事件`},{title:`jQuery 的崛起`,desc:`Write Less, Do More`},{title:`Backbone.js 与 MVC`,desc:`早期前端架构探索`},{title:`Web Components`,desc:`原生组件标准`},{title:`现代构建工具与生态`,desc:`模块化与开发体验`}],D=e=>b(()=>{let r=n(`input`);return t(r,`w-full rounded-md border-gray-300 shadow-sm focus:border-violet-500 focus:ring focus:ring-violet-200 px-3 py-2`),p(()=>{l(r,e.value)}),g(r,`input`,t=>e.onChange(t.target.value)),s(r,`placeholder`,`搜索视频`),r}),O=c=>b(()=>{let l=n(`div`);t(l,`mt-3 space-y-2`);let d=n(`div`);i(l,d),t(d,`text-sm text-gray-700`);let f=a(`rue:slot:anchor`);i(d,f),p(()=>{let e=c.videos.length;v(()=>m(e,d,f))}),i(d,r(` 个视频`));let h=a(`rue:slot:anchor`);return i(l,h),p(()=>{let r=c.videos.length===0?b(()=>{let r=e(),a=n(`div`);i(r,a),t(a,`rounded-md border border-gray-200/70 bg-white/60 backdrop-blur-sm p-3 text-sm`);let s=o(a);return i(a,s),p(()=>{u(s,c.emptyHeading||`暂无匹配`)}),r}):b(()=>{let r=e(),o=n(`ul`);i(r,o),t(o,`space-y-2`);let l=a(`rue:list:start`),u=a(`rue:list:end`);i(o,l),i(o,u);let d=new Map;return p(()=>{d=C({items:c.videos||[],getKey:(e,t)=>t,elements:d,parent:o,before:u,singleRoot:!0,start:l,renderItem:(r,o,c,l,u)=>{m(b(()=>{let o=e(),c=n(`li`);i(o,c),p(()=>{s(c,`key`,String(u))}),t(c,`rounded-md border border-gray-200/70 bg-white/60 backdrop-blur-sm p-3`);let l=n(`div`);i(c,l),t(l,`font-medium`);let d=a(`rue:slot:anchor`);i(l,d),p(()=>{let e=r.title;v(()=>m(e,l,d))});let f=n(`div`);i(c,f),t(f,`text-sm text-gray-500`);let h=a(`rue:slot:anchor`);return i(f,h),p(()=>{let e=r.desc;v(()=>m(e,f,h))}),o}),o,c)}})}),r});v(()=>m(r,l,h))}),l}),ae=t=>{let{searchText:n,setSearchText:r,foundVideos:o}=S(`useSetup:0:0`,()=>d(()=>{let[e,n]=S(`useState:1:0`,()=>x(``));return{searchText:e,setSearchText:n,foundVideos:S(`computed:1:1`,()=>f(()=>t.videos.filter(t=>t.title.toLowerCase().includes(e.value.toLowerCase()))))}}));return b(()=>{let t=e(),s=a(`rue:component:anchor`);i(t,s),p(()=>{let e=y(D,{value:n.value,onChange:r});v(()=>m(e,t,s))});let c=a(`rue:component:anchor`);return i(t,c),p(()=>{let e=y(O,{videos:o.get(),emptyHeading:`没有匹配 “${n.value}”`});v(()=>m(e,t,c))}),t})},oe=()=>{let{count:e,state:a}=S(`useSetup:0:0:dup1`,()=>d(()=>({count:S(`ref:1:2`,()=>_(0)),state:S(`reactive:1:3`,()=>h({enabled:!1}))})));return b(()=>{let l=n(`div`);t(l,`rounded-xl border border-gray-200/70 bg-white/60 backdrop-blur-sm p-4`);let d=n(`div`);i(l,d),t(d,`flex items-center gap-3`);let f=n(`button`);i(d,f),t(f,`btn btn-primary`),g(f,`click`,()=>e.value++),i(f,r(`+1`));let m=n(`button`);i(d,m),t(m,`btn btn-outline`),g(m,`click`,()=>e.value=0),i(m,r(`重置`));let h=n(`label`);i(d,h),t(h,`flex items-center gap-2 ml-auto`);let _=n(`input`);i(h,_),s(_,`type`,`checkbox`),t(_,`checkbox`),p(()=>{c(_,!!a.enabled)}),g(_,`change`,e=>a.enabled=e.target.checked);let v=n(`span`);i(h,v),t(v,`text-sm`),i(v,r(`启用`));let y=n(`div`);i(l,y),t(y,`mt-2 text-sm text-gray-700`),i(y,r(`计数：`));let b=o(y);i(y,b),p(()=>{u(b,e.value)}),i(y,r(`，启用：`));let x=o(y);return i(y,x),p(()=>{u(x,a.enabled?`是`:`否`)}),l})},k=()=>b(()=>{let o=e(),c=n(`section`);i(o,c),t(c,`relative rounded-2xl bg-gr2adient-to-br from-violet-50 to-fuchsia-50 p-12 mb-10`);let l=n(`div`);i(c,l),t(l,`absolute -top-24 -left-24 w-96 h-96 rounded-full bg-violet-200/40 blur-3xl`);let u=n(`div`);i(c,u),t(u,`absolute -bottom-24 -right-24 w-md h-112 rounded-full bg-fuchsia-200/40 blur-3xl`);let d=n(`div`);i(c,d),t(d,`relative max-w-[1100px] mx-auto text-center`);let f=n(`div`);i(d,f),t(f,`hover-3d`);let h=n(`figure`);i(f,h);let g=n(`div`);i(h,g),t(g,`inline-flex items-center justify-center gap-3`);let _=n(`span`);i(g,_),t(_,`inline-flex items-center justify-center w-22 h-22 rounded-full bg-linear-to-br from-violet-500 via-fuchsia-500 to-pink-500 shadow-lg ring-1 ring-white/30`);let b=n(`span`);i(_,b),t(b,`text-white font-extrabold text-[64px] md:text-[92px] leading-none`),i(b,r(`T`));let x=n(`span`);i(g,x),t(x,`text-6xl md:text-8xl font-extrabold tracking-tight bg-linear-to-r from-violet-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent`),i(x,r(`he Wasm`));let S=n(`div`);i(h,S),t(S,`mt-2 text-4xl md:text-5xl font-extrabold tracking-tight bg-linear-to-r from-violet-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent`),i(S,r(`Framework For Vapor Native DOM`));let C=n(`p`);i(h,C),t(C,`mt-6 text-lg md:text-xl text-gray-700`),i(C,r(`Rust 运行时，Rust 响应式系统，Rust 原生 DOM 编译器`)),i(f,n(`div`)),i(f,n(`div`)),i(f,n(`div`)),i(f,n(`div`)),i(f,n(`div`)),i(f,n(`div`)),i(f,n(`div`)),i(f,n(`div`));let D=n(`div`);i(d,D),t(D,`mt-8 flex flex-wrap justify-center gap-3`);let O=a(`rue:component:anchor`);i(D,O),m(y(w,{to:`/guide/guide/quick-start`,className:`btn btn-primary btn-lg`,children:`快速上手`}),D,O);let k=a(`rue:component:anchor`);i(D,k),m(y(w,{to:`/guide/guide/introduction`,className:`btn btn-outline btn-lg`,children:`文档`}),D,k);let se=a(`rue:component:anchor`);i(D,se),m(y(w,{to:`/api/api/index`,className:`btn btn-outline btn-lg`,children:`API`}),D,se);let A=n(`a`);i(D,A),s(A,`href`,`https://github.com/hunzhiwange/ruejs`),s(A,`target`,`_blank`),t(A,`btn btn-outline btn-lg`),i(A,r(`Github`));let j=n(`a`);i(D,j),s(j,`href`,`https://www.dhb168.com/?from=ruejs`),s(j,`target`,`_blank`),s(j,`data-tip`,`订货宝-经销商订货系统,批发贸易订货,用订货宝下单软件app,小程序-订货管理系统`),t(j,`tooltip tooltip-top btn btn-outline btn-lg`),i(j,r(`订货宝`));let M=n(`section`);i(o,M),t(M,`grid md:grid-cols-3 gap-6 max-w-[1100px] mx-auto`);let ce=a(`rue:component:anchor`);i(M,ce),m(y(E,{title:`简洁易用`,desc:`基于标准 HTML/CSS/TSX/WebAssembly，编译驱动的原生 DOM 渲染，组件语法直观，开发体验轻松高效。`,icon:`✅`}),M,ce);let le=a(`rue:component:anchor`);i(M,le),m(y(E,{title:`Rust 编译器 · Vapor 模式`,desc:`由 Rust 实现的 Vapor 原生 DOM 编译与细粒度更新，低内存、高性能，适用于复杂界面。`,icon:`🦀`}),M,le);let ue=a(`rue:component:anchor`);i(M,ue),m(y(E,{title:`兼容 React / Vue 语法`,desc:`同时支持 useState / useEffect 与 ref / reactive / watchEffect 等相关 API，保留熟悉的心智模型，渐进式融入现有代码。`,icon:`🤝`}),M,ue);let de=n(`section`);i(o,de),t(de,`mt-12 rounded-2xl p-8 bg-linear-to-br from-pink-500/80 to-fuchsia-500/80 text-white ring-1 ring-white/30 shadow-lg max-w-[1100px] mx-auto`);let N=n(`div`);i(de,N),t(N,`md:flex items-center justify-between`);let fe=n(`div`);i(N,fe);let pe=n(`h2`);i(fe,pe),t(pe,`text-2xl font-semibold mb-2 text-white`),i(pe,r(`生态与插件`));let P=n(`p`);i(fe,P),t(P,`text-white/90`),i(P,r(`可使用 AI 开发你自己的插件，可渐进式集成到你的应用。`));let F=n(`div`);i(N,F),t(F,`mt-4 md:mt-0 flex gap-3`);let me=a(`rue:component:anchor`);i(F,me),m(y(w,{to:`/plugins`,className:`btn btn-outline`,children:`插件`}),F,me);let he=a(`rue:component:anchor`);i(F,he),m(y(w,{to:`/design/button`,className:`btn btn-outline`,children:`组件库`}),F,he);let I=n(`section`);i(o,I),t(I,`max-w-[1100px] mx-auto mt-12`);let L=n(`h2`);i(I,L),t(L,`text-2xl font-semibold mb-2`),i(L,r(`用组件组织界面`));let R=n(`p`);i(I,R),t(R,`text-gray-600`),i(R,r(`Rue 以组件表达界面中的可复用片段。组件同时包含结构与逻辑，按需组合即可形成页面或模块，语法简洁、心智负担低。`));let z=n(`div`);i(I,z),t(z,`mt-6 grid md:grid-cols-2 gap-6 items-start`);let B=n(`div`);i(z,B),t(B,`card bg-base-100 border p-0 overflow-auto h-[360px] md:h-[560px]`);let ge=a(`rue:component:anchor`);i(B,ge),p(()=>{let e=y(T,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue'

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

export default HelloWorld`});v(()=>m(e,B,ge))});let V=n(`div`);i(z,V),t(V,`grid gap-6`);let _e=a(`rue:component:anchor`);i(V,_e),m(y(ee,{}),V,_e);let ve=a(`rue:component:anchor`);i(V,ve),m(y(te,{}),V,ve);let ye=a(`rue:component:anchor`);i(V,ye),m(y(ne,{}),V,ye);let be=a(`rue:component:anchor`);i(V,be),m(y(re,{}),V,be);let H=n(`p`);i(I,H),t(H,`mt-6 text-gray-600`),i(H,r(`Rue 的组件强调可复用与可组合，关注清晰的数据与事件流。你可以按需拼装来自不同团队的模块，保持一致的开发体验，而不受沉重框架约束。`));let U=n(`section`);i(o,U),t(U,`max-w-[1100px] mx-auto mt-12`);let xe=n(`h2`);i(U,xe),t(xe,`text-2xl font-semibold mb-2`),i(xe,r(`Vapor 模式：Rust 编译到原生 DOM`));let Se=n(`p`);i(U,Se),t(Se,`text-gray-600`),i(Se,r(`Rue 以 JSX/TSX 描述结构与逻辑，使用 Vapor 原生 DOM 渲染路径。`));let Ce=n(`p`);i(U,Ce),t(Ce,`text-gray-600`),i(Ce,r(`Vapor 编译器由 Rust 实现，对小块更新进行细粒度优化；高性能区域采用 Vapor，通用区域沿用虚拟 DOM，二者可渐进混用。`));let W=n(`div`);i(U,W),t(W,`mt-6 grid md:grid-cols-2 gap-6 items-start`);let G=n(`div`);i(W,G),t(G,`card bg-base-100 border overflow-auto h-[360px] md:h-[510px]`);let we=a(`rue:component:anchor`);i(G,we),p(()=>{let e=y(T,{className:`h-full`,lang:`tsx`,code:`const Hello: FC = () => (
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

export default HelloWorld`});v(()=>m(e,G,we))});let K=n(`div`);i(W,K),t(K,`card bg-base-100 border p-0 overflow-auto h-[360px] md:h-[510px]`);let Te=a(`rue:component:anchor`);i(K,Te),p(()=>{let e=y(T,{className:`h-full`,lang:`ts`,code:`/* RUE_VAPOR_TRANSFORMED */
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
export default HelloWorld;`});v(()=>m(e,K,Te))});let Ee=n(`div`);i(U,Ee),t(Ee,`mt-6 space-y-3 text-gray-700`);let De=n(`p`);i(Ee,De),i(De,r(`Vapor 模式优势： 直接创建与更新原生 DOM，避免额外的整树协调 开销；按需、细粒度响应式更新，组件级挂载与卸载更高效；更小的运行时路径与更少的内存占用，在复杂界面中表现尤为稳定。`));let q=n(`section`);i(o,q),t(q,`max-w-[1100px] mx-auto mt-12`);let Oe=n(`h2`);i(q,Oe),t(Oe,`text-2xl font-semibold mb-2`),i(Oe,r(`在需要的地方添加交互（兼容 React / Vue）`));let J=n(`p`);i(q,J),t(J,`text-gray-600`),i(J,r(`Rue 组件可以接收数据并返回视图。你既可以用 React 风格的 useState， 也可以用 Vue 风格的 ref / reactive 在任何位置增加交互。`));let Y=n(`div`);i(q,Y),t(Y,`mt-6 grid md:grid-cols-2 gap-6 items-start`);let X=n(`div`);i(Y,X),t(X,`card bg-base-100 border p-0 overflow-auto h-[360px] md:h-[660px]`);let ke=a(`rue:component:anchor`);i(X,ke),p(()=>{let e=y(T,{className:`h-full`,lang:`tsx`,code:`import { type FC, useState, ref, reactive, computed } from '@rue-js/rue';

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

export default Reactive;`});v(()=>m(e,X,ke))});let Z=n(`div`);i(Y,Z),t(Z,`grid gap-6`);let Q=n(`div`);i(Z,Q);let Ae=n(`h3`);i(Q,Ae),t(Ae,`text-lg font-semibold mb-2`),i(Ae,r(`前端的发展，从原始DOM，到 JQUERY等`));let je=a(`rue:component:anchor`);i(Q,je),p(()=>{let e=y(ae,{videos:ie});v(()=>m(e,Q,je))});let $=n(`div`);i(Z,$);let Me=n(`h3`);i($,Me),t(Me,`text-lg font-semibold mb-2`),i(Me,r(`ref / reactive 示例`));let Ne=a(`rue:component:anchor`);i($,Ne),m(y(oe,{}),$,Ne);let Pe=n(`p`);return i(q,Pe),t(Pe,`mt-6 text-gray-600`),i(Pe,r(`Rue 支持渐进集成：在任意 DOM 节点挂载交互片段，与现有页面共存，无需重写整站。`)),o});export{k as default};