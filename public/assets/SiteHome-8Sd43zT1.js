import{F as e,G as t,I as n,K as r,L as i,M as a,N as o,Q as s,R as c,W as l,Z as u,d,dt as f,gt as p,ht as m,l as h,ot as g,rt as _,st as v,t as y,vt as b,z as x}from"./vapor-runtime-BuwLbCGk.js";import{a as S,n as C}from"./vapor-helpers-vapor-Bly5xJie.js";import{t as w}from"./src-CkrzrUT7.js";import{t as T}from"./Code-DQxnq0in.js";var ee=t=>d(n=>{let a=i(`div`,n);r(a,`card bg-base-100 border border-base-200 shadow-sm`);let s=i(`div`,a);o(a,s),r(s,`card-body`);let c=i(`div`,s);o(s,c),r(c,`flex items-center gap-3 mb-1`);let l=i(`div`,c);o(c,l),r(l,`w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center`);let u=i(`span`,l);o(l,u),r(u,`text-lg`);let d=e(`rue:slot:anchor`);o(u,d),b(()=>{let e=t.icon||`⚡️`;f(()=>h(e,u,d))});let p=i(`div`,c);o(c,p),r(p,`font-semibold text-base-content`);let m=e(`rue:slot:anchor`);o(p,m),b(()=>{let e=t.title;f(()=>h(e,p,m))});let g=i(`p`,s);o(s,g),r(g,`text-sm text-base-content/70`);let _=e(`rue:slot:anchor`);return o(g,_),b(()=>{let e=t.desc;f(()=>h(e,g,_))}),a}),te=()=>d(e=>{let t=i(`div`,e);r(t,`card bg-primary text-primary-content shadow-sm`);let n=i(`div`,t);o(t,n),r(n,`card-body items-center text-center`);let a=i(`div`,n);o(n,a),r(a,`text-3xl font-extrabold`),o(a,c(`Hello`));let s=i(`div`,n);return o(n,s),r(s,`mt-2 text-sm opacity-90`),o(s,c(`Hello component`)),t}),ne=()=>d(e=>{let t=i(`div`,e);r(t,`card bg-base-100 text-base-content border border-base-200 shadow-sm`);let n=i(`div`,t);o(t,n),r(n,`card-body items-center text-center`);let a=i(`div`,n);o(n,a),r(a,`text-3xl font-extrabold`),o(a,c(`World`));let s=i(`div`,n);return o(n,s),r(s,`mt-2 text-sm text-base-content/70`),o(s,c(`World component`)),t}),re=()=>d(e=>{let t=i(`div`,e);r(t,`card bg-accent text-accent-content shadow-sm`);let n=i(`div`,t);o(t,n),r(n,`card-body items-center text-center`);let a=i(`div`,n);o(n,a),r(a,`text-3xl font-extrabold`),o(a,c(`Hi`));let s=i(`div`,n);return o(n,s),r(s,`mt-2 text-sm opacity-90`),o(s,c(`Rue`)),t}),ie=()=>d(e=>{let t=i(`div`,e);r(t,`card bg-base-100 text-base-content border border-base-200 shadow-sm`);let n=i(`div`,t);o(t,n),r(n,`card-body items-center text-center`);let a=i(`div`,n);o(n,a),r(a,`text-3xl font-extrabold`),o(a,c(`Yes`));let s=i(`div`,n);return o(n,s),r(s,`mt-2 text-sm text-base-content/70`),o(s,c(`My name is Rue`)),t}),ae=[{title:`原始 DOM 编程`,desc:`直接操作节点与事件`},{title:`jQuery 的崛起`,desc:`Write Less, Do More`},{title:`Backbone.js 与 MVC`,desc:`早期前端架构探索`},{title:`Web Components`,desc:`原生组件标准`},{title:`现代构建工具与生态`,desc:`模块化与开发体验`}],E=e=>d(t=>{let n=i(`input`,t);return r(n,`w-full rounded-md border border-base-300 bg-base-100 px-3 py-2 text-base-content shadow-sm focus:border-violet-500 focus:ring focus:ring-violet-200`),b(()=>{u(n,e.value)}),a(n,`input`,t=>e.onChange(t.target.value)),l(n,`placeholder`,`搜索视频`),n}),D=t=>d(a=>{let s=i(`div`,a);r(s,`mt-3 space-y-2`);let u=i(`div`,s);o(s,u),r(u,`text-sm text-base-content/70`);let p=e(`rue:slot:anchor`);o(u,p),b(()=>{let e=t.videos.length;f(()=>h(e,u,p))}),o(u,c(` 个视频`));let m=e(`rue:slot:anchor`);return o(s,m),b(()=>{let a=t.videos.length===0?d(()=>{let a=n(),s=i(`div`,a);o(a,s),r(s,`rounded-md border border-base-300/70 bg-base-100/70 backdrop-blur-sm p-3 text-sm text-base-content/70`);let c=e(`rue:slot:anchor`);return o(s,c),b(()=>{let e=t.emptyHeading||`暂无匹配`;f(()=>h(e,s,c))}),a}):d(()=>{let a=n(),s=i(`ul`,a);o(a,s),r(s,`space-y-2`);let c=e(`rue:list:start`),u=e(`rue:list:end`);o(s,c),o(s,u);let p=new Map;return b(()=>{p=C({items:t.videos||[],getKey:(e,t)=>t,elements:p,parent:s,before:u,singleRoot:!0,start:c,renderItem:(t,a,s,c,u)=>{h(d(()=>{let a=n(),s=i(`li`,a);o(a,s),b(()=>{l(s,`key`,String(u))}),r(s,`rounded-md border border-base-300/70 bg-base-100/70 backdrop-blur-sm p-3`);let c=i(`div`,s);o(s,c),r(c,`font-medium text-base-content`);let d=e(`rue:slot:anchor`);o(c,d),b(()=>{let e=t.title;f(()=>h(e,c,d))});let p=i(`div`,s);o(s,p),r(p,`text-sm text-base-content/70`);let m=e(`rue:slot:anchor`);return o(p,m),b(()=>{let e=t.desc;f(()=>h(e,p,m))}),a}),a,s)}})}),a});f(()=>h(a,s,m))}),s}),oe=t=>{let{searchText:r,setSearchText:i,foundVideos:a}=S(`useSetup:0:0`,()=>m(()=>{let[e,n]=S(`useState:1:0`,()=>p(``));return{searchText:e,setSearchText:n,foundVideos:S(`computed:1:1`,()=>_(()=>t.videos.filter(t=>t.title.toLowerCase().includes(e.value.toLowerCase()))))}}));return d(t=>{let s=n(),c=e(`rue:component:anchor`);o(s,c),b(()=>{let e=y(E,{value:r.value,onChange:i});f(()=>h(e,s,c))});let l=e(`rue:component:anchor`);return o(s,l),b(()=>{let e=y(D,{videos:a.get(),emptyHeading:`没有匹配 “${r.value}”`});f(()=>h(e,s,l))}),s})},se=()=>{let{count:e,state:n}=S(`useSetup:0:0:dup1`,()=>m(()=>({count:S(`ref:1:2`,()=>v(0)),state:S(`reactive:1:3`,()=>g({enabled:!1}))})));return d(u=>{let d=i(`div`,u);r(d,`rounded-xl border border-base-300/70 bg-base-100/70 backdrop-blur-sm p-4`);let f=i(`div`,d);o(d,f),r(f,`flex items-center gap-3`);let p=i(`button`,f);o(f,p),r(p,`btn btn-primary`),a(p,`click`,()=>e.value++),o(p,c(`+1`));let m=i(`button`,f);o(f,m),r(m,`btn btn-outline`),a(m,`click`,()=>e.value=0),o(m,c(`重置`));let h=i(`label`,f);o(f,h),r(h,`flex items-center gap-2 ml-auto`);let g=i(`input`,h);o(h,g),l(g,`type`,`checkbox`),r(g,`checkbox`),b(()=>{t(g,!!n.enabled)}),a(g,`change`,e=>n.enabled=e.target.checked);let _=i(`span`,h);o(h,_),r(_,`text-sm text-base-content`),o(_,c(`启用`));let v=i(`div`,d);o(d,v),r(v,`mt-2 text-sm text-base-content/70`),o(v,c(`计数：`));let y=x(v);o(v,y),b(()=>{s(y,e.value)}),o(v,c(`，启用：`));let S=x(v);return o(v,S),b(()=>{s(S,n.enabled?`是`:`否`)}),d})},O=()=>d(t=>{let a=n(),s=i(`section`,a);o(a,s),r(s,`relative rounded-2xl bg-gr2adient-to-br from-violet-50 to-fuchsia-50 p-12 mb-10`);let u=i(`div`,s);o(s,u),r(u,`absolute -top-24 -left-24 w-96 h-96 rounded-full bg-violet-200/40 blur-3xl`);let d=i(`div`,s);o(s,d),r(d,`absolute -bottom-24 -right-24 w-md h-112 rounded-full bg-fuchsia-200/40 blur-3xl`);let p=i(`div`,s);o(s,p),r(p,`relative max-w-[1100px] mx-auto text-center`);let m=i(`div`,p);o(p,m),r(m,`hover-3d`);let g=i(`figure`,m);o(m,g);let _=i(`div`,g);o(g,_),r(_,`inline-flex items-center justify-center gap-3`);let v=i(`span`,_);o(_,v),r(v,`inline-flex items-center justify-center w-22 h-22 rounded-full bg-linear-to-br from-violet-500 via-fuchsia-500 to-pink-500 shadow-lg ring-1 ring-white/30`);let x=i(`span`,v);o(v,x),r(x,`text-white font-extrabold text-[64px] md:text-[92px] leading-none`),o(x,c(`T`));let S=i(`span`,_);o(_,S),r(S,`text-6xl md:text-8xl font-extrabold tracking-tight bg-linear-to-r from-violet-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent`),o(S,c(`he Wasm`));let C=i(`div`,g);o(g,C),r(C,`mt-2 text-4xl md:text-5xl font-extrabold tracking-tight bg-linear-to-r from-violet-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent`),o(C,c(`Framework For Vapor Native DOM`));let E=i(`p`,g);o(g,E),r(E,`mt-6 text-lg md:text-xl text-base-content/70`),o(E,c(`Rust 运行时，Rust 响应式系统，Rust 原生 DOM 编译器`)),o(m,i(`div`,m)),o(m,i(`div`,m)),o(m,i(`div`,m)),o(m,i(`div`,m)),o(m,i(`div`,m)),o(m,i(`div`,m)),o(m,i(`div`,m)),o(m,i(`div`,m));let D=i(`div`,p);o(p,D),r(D,`mt-8 flex flex-wrap justify-center gap-3`);let O=e(`rue:component:anchor`);o(D,O),h(y(w,{to:`/guide/guide/quick-start`,className:`btn btn-primary btn-lg`,children:`快速上手`}),D,O);let ce=e(`rue:component:anchor`);o(D,ce),h(y(w,{to:`/guide/guide/introduction`,className:`btn btn-outline btn-lg`,children:`文档`}),D,ce);let le=e(`rue:component:anchor`);o(D,le),h(y(w,{to:`/api/api/index`,className:`btn btn-outline btn-lg`,children:`API`}),D,le);let k=i(`a`,D);o(D,k),l(k,`href`,`https://github.com/hunzhiwange/ruejs`),l(k,`target`,`_blank`),r(k,`btn btn-outline btn-lg`),o(k,c(`Github`));let A=i(`a`,D);o(D,A),l(A,`href`,`https://vercel.com`),l(A,`target`,`_blank`),r(A,`btn btn-outline btn-lg`),o(A,c(`Vercel`));let j=i(`a`,D);o(D,j),l(j,`href`,`https://www.dhb168.com/?from=ruejs`),l(j,`target`,`_blank`),l(j,`data-tip`,`订货宝-经销商订货系统,批发贸易订货,用订货宝下单软件app,小程序-订货管理系统`),r(j,`tooltip tooltip-top btn btn-outline btn-lg`),o(j,c(`订货宝`));let M=i(`section`,a);o(a,M),r(M,`grid md:grid-cols-3 gap-6 max-w-[1100px] mx-auto`);let ue=e(`rue:component:anchor`);o(M,ue),h(y(ee,{title:`简洁易用`,desc:`基于标准 HTML/CSS/TSX/WebAssembly，编译驱动的原生 DOM 渲染，组件语法直观，开发体验轻松高效。`,icon:`✅`}),M,ue);let de=e(`rue:component:anchor`);o(M,de),h(y(ee,{title:`Rust 编译器 · Vapor 模式`,desc:`由 Rust 实现的 Vapor 原生 DOM 编译与细粒度更新，低内存、高性能，适用于复杂界面。`,icon:`🦀`}),M,de);let fe=e(`rue:component:anchor`);o(M,fe),h(y(ee,{title:`兼容 React / Vue 语法`,desc:`同时支持 useState / useEffect 与 ref / reactive / watchEffect 等相关 API，保留熟悉的心智模型，渐进式融入现有代码。`,icon:`🤝`}),M,fe);let N=i(`section`,a);o(a,N),r(N,`mt-12 rounded-2xl p-8 bg-linear-to-br from-pink-500/80 to-fuchsia-500/80 text-white ring-1 ring-white/30 shadow-lg max-w-[1100px] mx-auto`);let P=i(`div`,N);o(N,P),r(P,`md:flex items-center justify-between`);let F=i(`div`,P);o(P,F);let pe=i(`h2`,F);o(F,pe),r(pe,`text-2xl font-semibold mb-2 text-white`),o(pe,c(`生态与插件`));let me=i(`p`,F);o(F,me),r(me,`text-white/90`),o(me,c(`可使用 AI 开发你自己的插件，可渐进式集成到你的应用。`));let I=i(`div`,P);o(P,I),r(I,`mt-4 md:mt-0 flex gap-3`);let he=e(`rue:component:anchor`);o(I,he),h(y(w,{to:`/plugins`,className:`btn btn-outline`,children:`插件`}),I,he);let ge=e(`rue:component:anchor`);o(I,ge),h(y(w,{to:`/design/button`,className:`btn btn-outline`,children:`组件库`}),I,ge);let L=i(`section`,a);o(a,L),r(L,`max-w-[1100px] mx-auto mt-12`);let R=i(`h2`,L);o(L,R),r(R,`text-2xl font-semibold mb-2`),o(R,c(`用组件组织界面`));let _e=i(`p`,L);o(L,_e),r(_e,`text-gray-600`),o(_e,c(`Rue 以组件表达界面中的可复用片段。组件同时包含结构与逻辑，按需组合即可形成页面或模块，语法简洁、心智负担低。`));let z=i(`div`,L);o(L,z),r(z,`mt-6 grid md:grid-cols-2 gap-6 items-start`);let B=i(`div`,z);o(z,B),r(B,`card bg-base-100 border p-0 overflow-auto h-[360px] md:h-[560px]`);let ve=e(`rue:component:anchor`);o(B,ve),b(()=>{let e=y(T,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue'

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

export default HelloWorld`});f(()=>h(e,B,ve))});let V=i(`div`,z);o(z,V),r(V,`grid gap-6`);let ye=e(`rue:component:anchor`);o(V,ye),h(y(te,{}),V,ye);let be=e(`rue:component:anchor`);o(V,be),h(y(ne,{}),V,be);let xe=e(`rue:component:anchor`);o(V,xe),h(y(re,{}),V,xe);let Se=e(`rue:component:anchor`);o(V,Se),h(y(ie,{}),V,Se);let Ce=i(`p`,L);o(L,Ce),r(Ce,`mt-6 text-gray-600`),o(Ce,c(`Rue 的组件强调可复用与可组合，关注清晰的数据与事件流。你可以按需拼装来自不同团队的模块，保持一致的开发体验，而不受沉重框架约束。`));let H=i(`section`,a);o(a,H),r(H,`max-w-[1100px] mx-auto mt-12`);let we=i(`h2`,H);o(H,we),r(we,`text-2xl font-semibold mb-2`),o(we,c(`Vapor 模式：Rust 编译到原生 DOM`));let Te=i(`p`,H);o(H,Te),r(Te,`text-gray-600`),o(Te,c(`Rue 以 JSX/TSX 描述结构与逻辑，使用 Vapor 原生 DOM 渲染路径。`));let Ee=i(`p`,H);o(H,Ee),r(Ee,`text-gray-600`),o(Ee,c(`Vapor 编译器由 Rust 实现，对小块更新进行细粒度优化；高性能区域采用 Vapor，通用区域沿用虚拟 DOM，二者可渐进混用。`));let U=i(`div`,H);o(H,U),r(U,`mt-6 grid md:grid-cols-2 gap-6 items-start`);let W=i(`div`,U);o(U,W),r(W,`card bg-base-100 border overflow-auto h-[360px] md:h-[510px]`);let De=e(`rue:component:anchor`);o(W,De),b(()=>{let e=y(T,{className:`h-full`,lang:`tsx`,code:`const Hello: FC = () => (
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

export default HelloWorld`});f(()=>h(e,W,De))});let G=i(`div`,U);o(U,G),r(G,`card bg-base-100 border p-0 overflow-auto h-[360px] md:h-[510px]`);let Oe=e(`rue:component:anchor`);o(G,Oe),b(()=>{let e=y(T,{className:`h-full`,lang:`ts`,code:`/* RUE_VAPOR_TRANSFORMED */
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
export default HelloWorld;`});f(()=>h(e,G,Oe))});let K=i(`div`,H);o(H,K),r(K,`mt-6 space-y-3 text-gray-700`);let ke=i(`p`,K);o(K,ke),o(ke,c(`Vapor 模式优势： 直接创建与更新原生 DOM，避免额外的整树协调 开销；按需、细粒度响应式更新，组件级挂载与卸载更高效；更小的运行时路径与更少的内存占用，在复杂界面中表现尤为稳定。`));let q=i(`section`,a);o(a,q),r(q,`max-w-[1100px] mx-auto mt-12`);let Ae=i(`h2`,q);o(q,Ae),r(Ae,`text-2xl font-semibold mb-2`),o(Ae,c(`在需要的地方添加交互（兼容 React / Vue）`));let je=i(`p`,q);o(q,je),r(je,`text-gray-600`),o(je,c(`Rue 组件可以接收数据并返回视图。你既可以用 React 风格的 useState， 也可以用 Vue 风格的 ref / reactive 在任何位置增加交互。`));let J=i(`div`,q);o(q,J),r(J,`mt-6 grid md:grid-cols-2 gap-6 items-start`);let Y=i(`div`,J);o(J,Y),r(Y,`card bg-base-100 border p-0 overflow-auto h-[360px] md:h-[660px]`);let Me=e(`rue:component:anchor`);o(Y,Me),b(()=>{let e=y(T,{className:`h-full`,lang:`tsx`,code:`import { type FC, useState, ref, reactive, computed } from '@rue-js/rue';

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

export default Reactive;`});f(()=>h(e,Y,Me))});let X=i(`div`,J);o(J,X),r(X,`grid gap-6`);let Z=i(`div`,X);o(X,Z);let Ne=i(`h3`,Z);o(Z,Ne),r(Ne,`text-lg font-semibold mb-2 text-base-content`),o(Ne,c(`前端的发展，从原始DOM，到 JQUERY等`));let Pe=e(`rue:component:anchor`);o(Z,Pe),b(()=>{let e=y(oe,{videos:ae});f(()=>h(e,Z,Pe))});let Q=i(`div`,X);o(X,Q);let Fe=i(`h3`,Q);o(Q,Fe),r(Fe,`text-lg font-semibold mb-2 text-base-content`),o(Fe,c(`ref / reactive 示例`));let Ie=e(`rue:component:anchor`);o(Q,Ie),h(y(se,{}),Q,Ie);let $=i(`p`,q);return o(q,$),r($,`mt-6 text-gray-600`),o($,c(`Rue 支持渐进集成：在任意 DOM 节点挂载交互片段，与现有页面共存，无需重写整站。`)),a});export{O as default};