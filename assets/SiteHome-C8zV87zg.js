import{F as e,G as t,I as n,K as r,L as i,M as a,N as o,Q as s,R as c,W as l,Z as u,_t as d,at as f,d as p,ht as m,l as h,mt as g,nt as _,ot as v,t as y,ut as b,z as x}from"./vapor-runtime-Bp8DIxJg.js";import{a as S,n as C}from"./vapor-helpers-vapor-D3i3KBBg.js";import{t as w}from"./src-CN6L-geZ.js";import{t as T}from"./Code-D55WiaDx.js";var E=t=>p(n=>{let a=i(`div`,n);r(a,`card bg-base-100 border border-base-200 shadow-sm`);let c=i(`div`,a);o(a,c),r(c,`card-body`);let l=i(`div`,c);o(c,l),r(l,`flex items-center gap-3 mb-1`);let u=i(`div`,l);o(l,u),r(u,`w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center`);let f=i(`span`,u);o(u,f),r(f,`text-lg`);let p=x(f);o(f,p),d(()=>{s(p,t.icon||`⚡️`)});let m=i(`div`,l);o(l,m),r(m,`font-semibold text-base-content`);let g=e(`rue:slot:anchor`);o(m,g),d(()=>{let e=t.title;b(()=>h(e,m,g))});let _=i(`p`,c);o(c,_),r(_,`text-sm text-base-content/70`);let v=e(`rue:slot:anchor`);return o(_,v),d(()=>{let e=t.desc;b(()=>h(e,_,v))}),a}),ee=()=>p(e=>{let t=i(`div`,e);r(t,`card bg-primary text-primary-content shadow-sm`);let n=i(`div`,t);o(t,n),r(n,`card-body items-center text-center`);let a=i(`div`,n);o(n,a),r(a,`text-3xl font-extrabold`),o(a,c(`Hello`));let s=i(`div`,n);return o(n,s),r(s,`mt-2 text-sm opacity-90`),o(s,c(`Hello component`)),t}),te=()=>p(e=>{let t=i(`div`,e);r(t,`card bg-base-100 text-base-content border border-base-200 shadow-sm`);let n=i(`div`,t);o(t,n),r(n,`card-body items-center text-center`);let a=i(`div`,n);o(n,a),r(a,`text-3xl font-extrabold`),o(a,c(`World`));let s=i(`div`,n);return o(n,s),r(s,`mt-2 text-sm text-base-content/70`),o(s,c(`World component`)),t}),ne=()=>p(e=>{let t=i(`div`,e);r(t,`card bg-accent text-accent-content shadow-sm`);let n=i(`div`,t);o(t,n),r(n,`card-body items-center text-center`);let a=i(`div`,n);o(n,a),r(a,`text-3xl font-extrabold`),o(a,c(`Hi`));let s=i(`div`,n);return o(n,s),r(s,`mt-2 text-sm opacity-90`),o(s,c(`Rue`)),t}),re=()=>p(e=>{let t=i(`div`,e);r(t,`card bg-base-100 text-base-content border border-base-200 shadow-sm`);let n=i(`div`,t);o(t,n),r(n,`card-body items-center text-center`);let a=i(`div`,n);o(n,a),r(a,`text-3xl font-extrabold`),o(a,c(`Yes`));let s=i(`div`,n);return o(n,s),r(s,`mt-2 text-sm text-base-content/70`),o(s,c(`My name is Rue`)),t}),ie=[{title:`原始 DOM 编程`,desc:`直接操作节点与事件`},{title:`jQuery 的崛起`,desc:`Write Less, Do More`},{title:`Backbone.js 与 MVC`,desc:`早期前端架构探索`},{title:`Web Components`,desc:`原生组件标准`},{title:`现代构建工具与生态`,desc:`模块化与开发体验`}],D=e=>p(t=>{let n=i(`input`,t);return r(n,`w-full rounded-md border border-base-300 bg-base-100 px-3 py-2 text-base-content shadow-sm focus:border-violet-500 focus:ring focus:ring-violet-200`),d(()=>{u(n,e.value)}),a(n,`input`,t=>e.onChange(t.target.value)),l(n,`placeholder`,`搜索视频`),n}),O=t=>p(a=>{let u=i(`div`,a);r(u,`mt-3 space-y-2`);let f=i(`div`,u);o(u,f),r(f,`text-sm text-base-content/70`);let m=e(`rue:slot:anchor`);o(f,m),d(()=>{let e=t.videos.length;b(()=>h(e,f,m))}),o(f,c(` 个视频`));let g=e(`rue:slot:anchor`);return o(u,g),d(()=>{let a=t.videos.length===0?p(()=>{let e=n(),a=i(`div`,e);o(e,a),r(a,`rounded-md border border-base-300/70 bg-base-100/70 backdrop-blur-sm p-3 text-sm text-base-content/70`);let c=x(a);return o(a,c),d(()=>{s(c,t.emptyHeading||`暂无匹配`)}),e}):p(()=>{let a=n(),s=i(`ul`,a);o(a,s),r(s,`space-y-2`);let c=e(`rue:list:start`),u=e(`rue:list:end`);o(s,c),o(s,u);let f=new Map;return d(()=>{f=C({items:t.videos||[],getKey:(e,t)=>t,elements:f,parent:s,before:u,singleRoot:!0,start:c,renderItem:(t,a,s,c,u)=>{h(p(()=>{let a=n(),s=i(`li`,a);o(a,s),d(()=>{l(s,`key`,String(u))}),r(s,`rounded-md border border-base-300/70 bg-base-100/70 backdrop-blur-sm p-3`);let c=i(`div`,s);o(s,c),r(c,`font-medium text-base-content`);let f=e(`rue:slot:anchor`);o(c,f),d(()=>{let e=t.title;b(()=>h(e,c,f))});let p=i(`div`,s);o(s,p),r(p,`text-sm text-base-content/70`);let m=e(`rue:slot:anchor`);return o(p,m),d(()=>{let e=t.desc;b(()=>h(e,p,m))}),a}),a,s)}})}),a});b(()=>h(a,u,g))}),u}),ae=t=>{let{searchText:r,setSearchText:i,foundVideos:a}=S(`useSetup:0:0`,()=>g(()=>{let[e,n]=S(`useState:1:0`,()=>m(``));return{searchText:e,setSearchText:n,foundVideos:S(`computed:1:1`,()=>_(()=>t.videos.filter(t=>t.title.toLowerCase().includes(e.value.toLowerCase()))))}}));return p(t=>{let s=n(),c=e(`rue:component:anchor`);o(s,c),d(()=>{let e=y(D,{value:r.value,onChange:i});b(()=>h(e,s,c))});let l=e(`rue:component:anchor`);return o(s,l),d(()=>{let e=y(O,{videos:a.get(),emptyHeading:`没有匹配 “${r.value}”`});b(()=>h(e,s,l))}),s})},oe=()=>{let{count:e,state:n}=S(`useSetup:0:0:dup1`,()=>g(()=>({count:S(`ref:1:2`,()=>v(0)),state:S(`reactive:1:3`,()=>f({enabled:!1}))})));return p(u=>{let f=i(`div`,u);r(f,`rounded-xl border border-base-300/70 bg-base-100/70 backdrop-blur-sm p-4`);let p=i(`div`,f);o(f,p),r(p,`flex items-center gap-3`);let m=i(`button`,p);o(p,m),r(m,`btn btn-primary`),a(m,`click`,()=>e.value++),o(m,c(`+1`));let h=i(`button`,p);o(p,h),r(h,`btn btn-outline`),a(h,`click`,()=>e.value=0),o(h,c(`重置`));let g=i(`label`,p);o(p,g),r(g,`flex items-center gap-2 ml-auto`);let _=i(`input`,g);o(g,_),l(_,`type`,`checkbox`),r(_,`checkbox`),d(()=>{t(_,!!n.enabled)}),a(_,`change`,e=>n.enabled=e.target.checked);let v=i(`span`,g);o(g,v),r(v,`text-sm text-base-content`),o(v,c(`启用`));let y=i(`div`,f);o(f,y),r(y,`mt-2 text-sm text-base-content/70`),o(y,c(`计数：`));let b=x(y);o(y,b),d(()=>{s(b,e.value)}),o(y,c(`，启用：`));let S=x(y);return o(y,S),d(()=>{s(S,n.enabled?`是`:`否`)}),f})},se=()=>p(t=>{let a=n(),s=i(`section`,a);o(a,s),r(s,`relative rounded-2xl bg-gr2adient-to-br from-violet-50 to-fuchsia-50 p-12 mb-10`);let u=i(`div`,s);o(s,u),r(u,`absolute -top-24 -left-24 w-96 h-96 rounded-full bg-violet-200/40 blur-3xl`);let f=i(`div`,s);o(s,f),r(f,`absolute -bottom-24 -right-24 w-md h-112 rounded-full bg-fuchsia-200/40 blur-3xl`);let p=i(`div`,s);o(s,p),r(p,`relative max-w-[1100px] mx-auto text-center`);let m=i(`div`,p);o(p,m),r(m,`hover-3d`);let g=i(`figure`,m);o(m,g);let _=i(`div`,g);o(g,_),r(_,`inline-flex items-center justify-center gap-3`);let v=i(`span`,_);o(_,v),r(v,`inline-flex items-center justify-center w-22 h-22 rounded-full bg-linear-to-br from-violet-500 via-fuchsia-500 to-pink-500 shadow-lg ring-1 ring-white/30`);let x=i(`span`,v);o(v,x),r(x,`text-white font-extrabold text-[64px] md:text-[92px] leading-none`),o(x,c(`T`));let S=i(`span`,_);o(_,S),r(S,`text-6xl md:text-8xl font-extrabold tracking-tight bg-linear-to-r from-violet-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent`),o(S,c(`he Wasm`));let C=i(`div`,g);o(g,C),r(C,`mt-2 text-4xl md:text-5xl font-extrabold tracking-tight bg-linear-to-r from-violet-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent`),o(C,c(`Framework For Vapor Native DOM`));let D=i(`p`,g);o(g,D),r(D,`mt-6 text-lg md:text-xl text-gray-700`),o(D,c(`Rust 运行时，Rust 响应式系统，Rust 原生 DOM 编译器`)),o(m,i(`div`,m)),o(m,i(`div`,m)),o(m,i(`div`,m)),o(m,i(`div`,m)),o(m,i(`div`,m)),o(m,i(`div`,m)),o(m,i(`div`,m)),o(m,i(`div`,m));let O=i(`div`,p);o(p,O),r(O,`mt-8 flex flex-wrap justify-center gap-3`);let se=e(`rue:component:anchor`);o(O,se),h(y(w,{to:`/guide/guide/quick-start`,className:`btn btn-primary btn-lg`,children:`快速上手`}),O,se);let ce=e(`rue:component:anchor`);o(O,ce),h(y(w,{to:`/guide/guide/introduction`,className:`btn btn-outline btn-lg`,children:`文档`}),O,ce);let le=e(`rue:component:anchor`);o(O,le),h(y(w,{to:`/api/api/index`,className:`btn btn-outline btn-lg`,children:`API`}),O,le);let k=i(`a`,O);o(O,k),l(k,`href`,`https://github.com/hunzhiwange/ruejs`),l(k,`target`,`_blank`),r(k,`btn btn-outline btn-lg`),o(k,c(`Github`));let A=i(`a`,O);o(O,A),l(A,`href`,`https://vercel.com`),l(A,`target`,`_blank`),r(A,`btn btn-outline btn-lg`),o(A,c(`Vercel`));let j=i(`a`,O);o(O,j),l(j,`href`,`https://www.dhb168.com/?from=ruejs`),l(j,`target`,`_blank`),l(j,`data-tip`,`订货宝-经销商订货系统,批发贸易订货,用订货宝下单软件app,小程序-订货管理系统`),r(j,`tooltip tooltip-top btn btn-outline btn-lg`),o(j,c(`订货宝`));let M=i(`section`,a);o(a,M),r(M,`grid md:grid-cols-3 gap-6 max-w-[1100px] mx-auto`);let ue=e(`rue:component:anchor`);o(M,ue),h(y(E,{title:`简洁易用`,desc:`基于标准 HTML/CSS/TSX/WebAssembly，编译驱动的原生 DOM 渲染，组件语法直观，开发体验轻松高效。`,icon:`✅`}),M,ue);let de=e(`rue:component:anchor`);o(M,de),h(y(E,{title:`Rust 编译器 · Vapor 模式`,desc:`由 Rust 实现的 Vapor 原生 DOM 编译与细粒度更新，低内存、高性能，适用于复杂界面。`,icon:`🦀`}),M,de);let fe=e(`rue:component:anchor`);o(M,fe),h(y(E,{title:`兼容 React / Vue 语法`,desc:`同时支持 useState / useEffect 与 ref / reactive / watchEffect 等相关 API，保留熟悉的心智模型，渐进式融入现有代码。`,icon:`🤝`}),M,fe);let N=i(`section`,a);o(a,N),r(N,`mt-12 rounded-2xl p-8 bg-linear-to-br from-pink-500/80 to-fuchsia-500/80 text-white ring-1 ring-white/30 shadow-lg max-w-[1100px] mx-auto`);let P=i(`div`,N);o(N,P),r(P,`md:flex items-center justify-between`);let F=i(`div`,P);o(P,F);let I=i(`h2`,F);o(F,I),r(I,`text-2xl font-semibold mb-2 text-white`),o(I,c(`生态与插件`));let pe=i(`p`,F);o(F,pe),r(pe,`text-white/90`),o(pe,c(`可使用 AI 开发你自己的插件，可渐进式集成到你的应用。`));let L=i(`div`,P);o(P,L),r(L,`mt-4 md:mt-0 flex gap-3`);let me=e(`rue:component:anchor`);o(L,me),h(y(w,{to:`/plugins`,className:`btn btn-outline`,children:`插件`}),L,me);let he=e(`rue:component:anchor`);o(L,he),h(y(w,{to:`/design/button`,className:`btn btn-outline`,children:`组件库`}),L,he);let R=i(`section`,a);o(a,R),r(R,`max-w-[1100px] mx-auto mt-12`);let ge=i(`h2`,R);o(R,ge),r(ge,`text-2xl font-semibold mb-2`),o(ge,c(`用组件组织界面`));let _e=i(`p`,R);o(R,_e),r(_e,`text-gray-600`),o(_e,c(`Rue 以组件表达界面中的可复用片段。组件同时包含结构与逻辑，按需组合即可形成页面或模块，语法简洁、心智负担低。`));let z=i(`div`,R);o(R,z),r(z,`mt-6 grid md:grid-cols-2 gap-6 items-start`);let B=i(`div`,z);o(z,B),r(B,`card bg-base-100 border p-0 overflow-auto h-[360px] md:h-[560px]`);let ve=e(`rue:component:anchor`);o(B,ve),d(()=>{let e=y(T,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue'

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

export default HelloWorld`});b(()=>h(e,B,ve))});let V=i(`div`,z);o(z,V),r(V,`grid gap-6`);let ye=e(`rue:component:anchor`);o(V,ye),h(y(ee,{}),V,ye);let be=e(`rue:component:anchor`);o(V,be),h(y(te,{}),V,be);let xe=e(`rue:component:anchor`);o(V,xe),h(y(ne,{}),V,xe);let Se=e(`rue:component:anchor`);o(V,Se),h(y(re,{}),V,Se);let Ce=i(`p`,R);o(R,Ce),r(Ce,`mt-6 text-gray-600`),o(Ce,c(`Rue 的组件强调可复用与可组合，关注清晰的数据与事件流。你可以按需拼装来自不同团队的模块，保持一致的开发体验，而不受沉重框架约束。`));let H=i(`section`,a);o(a,H),r(H,`max-w-[1100px] mx-auto mt-12`);let we=i(`h2`,H);o(H,we),r(we,`text-2xl font-semibold mb-2`),o(we,c(`Vapor 模式：Rust 编译到原生 DOM`));let Te=i(`p`,H);o(H,Te),r(Te,`text-gray-600`),o(Te,c(`Rue 以 JSX/TSX 描述结构与逻辑，使用 Vapor 原生 DOM 渲染路径。`));let Ee=i(`p`,H);o(H,Ee),r(Ee,`text-gray-600`),o(Ee,c(`Vapor 编译器由 Rust 实现，对小块更新进行细粒度优化；高性能区域采用 Vapor，通用区域沿用虚拟 DOM，二者可渐进混用。`));let U=i(`div`,H);o(H,U),r(U,`mt-6 grid md:grid-cols-2 gap-6 items-start`);let W=i(`div`,U);o(U,W),r(W,`card bg-base-100 border overflow-auto h-[360px] md:h-[510px]`);let De=e(`rue:component:anchor`);o(W,De),d(()=>{let e=y(T,{className:`h-full`,lang:`tsx`,code:`const Hello: FC = () => (
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

export default HelloWorld`});b(()=>h(e,W,De))});let G=i(`div`,U);o(U,G),r(G,`card bg-base-100 border p-0 overflow-auto h-[360px] md:h-[510px]`);let Oe=e(`rue:component:anchor`);o(G,Oe),d(()=>{let e=y(T,{className:`h-full`,lang:`ts`,code:`/* RUE_VAPOR_TRANSFORMED */
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
export default HelloWorld;`});b(()=>h(e,G,Oe))});let K=i(`div`,H);o(H,K),r(K,`mt-6 space-y-3 text-gray-700`);let ke=i(`p`,K);o(K,ke),o(ke,c(`Vapor 模式优势： 直接创建与更新原生 DOM，避免额外的整树协调 开销；按需、细粒度响应式更新，组件级挂载与卸载更高效；更小的运行时路径与更少的内存占用，在复杂界面中表现尤为稳定。`));let q=i(`section`,a);o(a,q),r(q,`max-w-[1100px] mx-auto mt-12`);let Ae=i(`h2`,q);o(q,Ae),r(Ae,`text-2xl font-semibold mb-2`),o(Ae,c(`在需要的地方添加交互（兼容 React / Vue）`));let je=i(`p`,q);o(q,je),r(je,`text-gray-600`),o(je,c(`Rue 组件可以接收数据并返回视图。你既可以用 React 风格的 useState， 也可以用 Vue 风格的 ref / reactive 在任何位置增加交互。`));let J=i(`div`,q);o(q,J),r(J,`mt-6 grid md:grid-cols-2 gap-6 items-start`);let Y=i(`div`,J);o(J,Y),r(Y,`card bg-base-100 border p-0 overflow-auto h-[360px] md:h-[660px]`);let Me=e(`rue:component:anchor`);o(Y,Me),d(()=>{let e=y(T,{className:`h-full`,lang:`tsx`,code:`import { type FC, useState, ref, reactive, computed } from '@rue-js/rue';

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
    className="w-full rounded-md border border-base-300 bg-base-100 px-3 py-2 text-base-content shadow-sm focus:border-violet-500 focus:ring focus:ring-violet-200"
    value={p.value}
    onInput={(e: any) => p.onChange((e.target as HTMLInputElement).value)}
    placeholder="搜索视频"
  />
)

// VideoList 组件
const VideoList: FC<{ videos: Video[]; emptyHeading?: string }> = p => (
  <div className="mt-3 space-y-2">
    <div className="text-sm text-base-content/70">{p.videos.length} 个视频</div>
    {p.videos.length === 0 ? (
      <div className="rounded-md border border-base-300/70 bg-base-100/70 backdrop-blur-sm p-3 text-sm text-base-content/70">
        {p.emptyHeading || '暂无匹配'}
      </div>
    ) : (
      <ul className="space-y-2">
        {p.videos.map((v, i) => (
          <li
            key={i}
            className="rounded-md border border-base-300/70 bg-base-100/70 backdrop-blur-sm p-3"
          >
            <div className="font-medium text-base-content">{v.title}</div>
            <div className="text-sm text-base-content/70">{v.desc}</div>
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
      <h3 className="text-lg font-semibold mb-2 text-base-content">前端的发展，从原始DOM，到 JQUERY等</h3>
      <SearchableVideoList videos={videos} />
    </div>
    <div>
      <h3 className="text-lg font-semibold mb-2 text-base-content">ref / reactive 示例</h3>
      <ReactiveDemo />
    </div>
  </div>
)

export default Reactive;`});b(()=>h(e,Y,Me))});let X=i(`div`,J);o(J,X),r(X,`grid gap-6`);let Z=i(`div`,X);o(X,Z);let Ne=i(`h3`,Z);o(Z,Ne),r(Ne,`text-lg font-semibold mb-2 text-base-content`),o(Ne,c(`前端的发展，从原始DOM，到 JQUERY等`));let Pe=e(`rue:component:anchor`);o(Z,Pe),d(()=>{let e=y(ae,{videos:ie});b(()=>h(e,Z,Pe))});let Q=i(`div`,X);o(X,Q);let Fe=i(`h3`,Q);o(Q,Fe),r(Fe,`text-lg font-semibold mb-2 text-base-content`),o(Fe,c(`ref / reactive 示例`));let Ie=e(`rue:component:anchor`);o(Q,Ie),h(y(oe,{}),Q,Ie);let $=i(`p`,q);return o(q,$),r($,`mt-6 text-gray-600`),o($,c(`Rue 支持渐进集成：在任意 DOM 节点挂载交互片段，与现有页面共存，无需重写整站。`)),a});export{se as default};