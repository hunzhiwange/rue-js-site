import{$ as e,Dt as t,Et as n,G as r,H as i,J as a,K as o,V as s,W as c,_t as l,d as u,dt as d,et as f,gt as p,kt as m,l as h,ot as g,q as _,st as v,t as y,tt as b,xt as x}from"./vapor-runtime-BAZOdMd8.js";import{a as S,n as C}from"./vapor-helpers-vapor-BvUp1QnH.js";import{t as w}from"./src-BZrq3-qJ.js";import{t as T}from"./Code-DY4Ua5uc.js";var E=e=>u(t=>{let n=o(`div`,t);b(n,`card bg-base-100 border border-base-200 shadow-sm`);let r=o(`div`,n);i(n,r),b(r,`card-body`);let a=o(`div`,r);i(r,a),b(a,`flex items-center gap-3 mb-1`);let s=o(`div`,a);i(a,s),b(s,`w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center`);let l=o(`span`,s);i(s,l),b(l,`text-lg`);let u=c(`rue:slot:anchor`);i(l,u),m(()=>{let t=e.icon||`⚡️`;x(()=>h(t,l,u))});let d=o(`div`,a);i(a,d),b(d,`font-semibold text-base-content`);let f=c(`rue:slot:anchor`);i(d,f),m(()=>{let t=e.title;x(()=>h(t,d,f))});let p=o(`p`,r);i(r,p),b(p,`text-sm text-base-content/70`);let g=c(`rue:slot:anchor`);return i(p,g),m(()=>{let t=e.desc;x(()=>h(t,p,g))}),n}),ee=()=>u(e=>{let t=o(`div`,e);b(t,`card bg-primary text-primary-content shadow-sm`);let n=o(`div`,t);i(t,n),b(n,`card-body items-center text-center`);let r=o(`div`,n);i(n,r),b(r,`text-3xl font-extrabold`),i(r,_(`Hello`));let a=o(`div`,n);return i(n,a),b(a,`mt-2 text-sm opacity-90`),i(a,_(`Hello component`)),t}),te=()=>u(e=>{let t=o(`div`,e);b(t,`card bg-base-100 text-base-content border border-base-200 shadow-sm`);let n=o(`div`,t);i(t,n),b(n,`card-body items-center text-center`);let r=o(`div`,n);i(n,r),b(r,`text-3xl font-extrabold`),i(r,_(`World`));let a=o(`div`,n);return i(n,a),b(a,`mt-2 text-sm text-base-content/70`),i(a,_(`World component`)),t}),ne=()=>u(e=>{let t=o(`div`,e);b(t,`card bg-accent text-accent-content shadow-sm`);let n=o(`div`,t);i(t,n),b(n,`card-body items-center text-center`);let r=o(`div`,n);i(n,r),b(r,`text-3xl font-extrabold`),i(r,_(`Hi`));let a=o(`div`,n);return i(n,a),b(a,`mt-2 text-sm opacity-90`),i(a,_(`Rue`)),t}),re=()=>u(e=>{let t=o(`div`,e);b(t,`card bg-base-100 text-base-content border border-base-200 shadow-sm`);let n=o(`div`,t);i(t,n),b(n,`card-body items-center text-center`);let r=o(`div`,n);i(n,r),b(r,`text-3xl font-extrabold`),i(r,_(`Yes`));let a=o(`div`,n);return i(n,a),b(a,`mt-2 text-sm text-base-content/70`),i(a,_(`My name is Rue`)),t}),ie=[{title:`原始 DOM 编程`,desc:`直接操作节点与事件`},{title:`jQuery 的崛起`,desc:`Write Less, Do More`},{title:`Backbone.js 与 MVC`,desc:`早期前端架构探索`},{title:`Web Components`,desc:`原生组件标准`},{title:`现代构建工具与生态`,desc:`模块化与开发体验`}],D=t=>u(n=>{let r=o(`input`,n);return b(r,`w-full rounded-md border border-base-300 bg-base-100 px-3 py-2 text-base-content shadow-sm focus:border-violet-500 focus:ring focus:ring-violet-200`),m(()=>{g(r,t.value)}),s(r,`input`,e=>t.onChange(e.target.value)),e(r,`placeholder`,`搜索视频`),r}),O=t=>u(n=>{let a=o(`div`,n);b(a,`mt-3 space-y-2`);let s=o(`div`,a);i(a,s),b(s,`text-sm text-base-content/70`);let l=c(`rue:slot:anchor`);i(s,l),m(()=>{let e=t.videos.length;x(()=>h(e,s,l))}),i(s,_(` 个视频`));let d=c(`rue:slot:anchor`);return i(a,d),m(()=>{let n=t.videos.length===0?u(()=>{let e=r(),n=o(`div`,e);i(e,n),b(n,`rounded-md border border-base-300/70 bg-base-100/70 backdrop-blur-sm p-3 text-sm text-base-content/70`);let a=c(`rue:slot:anchor`);return i(n,a),m(()=>{let e=t.emptyHeading||`暂无匹配`;x(()=>h(e,n,a))}),e}):u(()=>{let n=r(),a=o(`ul`,n);i(n,a),b(a,`space-y-2`);let s=c(`rue:list:start`),l=c(`rue:list:end`);i(a,s),i(a,l);let d=new Map;return m(()=>{d=C({items:t.videos||[],getKey:(e,t)=>t,elements:d,parent:a,before:l,singleRoot:!0,start:s,renderItem:(t,n,a,s,l)=>{h(u(()=>{let n=r(),a=o(`li`,n);i(n,a),m(()=>{e(a,`key`,String(l))}),b(a,`rounded-md border border-base-300/70 bg-base-100/70 backdrop-blur-sm p-3`);let s=o(`div`,a);i(a,s),b(s,`font-medium text-base-content`);let u=c(`rue:slot:anchor`);i(s,u),m(()=>{let e=t.title;x(()=>h(e,s,u))});let d=o(`div`,a);i(a,d),b(d,`text-sm text-base-content/70`);let f=c(`rue:slot:anchor`);return i(d,f),m(()=>{let e=t.desc;x(()=>h(e,d,f))}),n}),n,a)}})}),n});x(()=>h(n,a,d))}),a}),ae=e=>{let{searchText:a,setSearchText:o,foundVideos:s}=S(`useSetup:0:0`,()=>n(()=>{let[n,r]=S(`useState:1:0`,()=>t(``));return{searchText:n,setSearchText:r,foundVideos:S(`computed:1:1`,()=>d(()=>e.videos.filter(e=>e.title.toLowerCase().includes(n.value.toLowerCase()))))}}));return u(e=>{let t=r(),n=c(`rue:component:anchor`);i(t,n),m(()=>{let e=y(D,{value:a.value,onChange:o});x(()=>h(e,t,n))});let l=c(`rue:component:anchor`);return i(t,l),m(()=>{let e=y(O,{videos:s.get(),emptyHeading:`没有匹配 “${a.value}”`});x(()=>h(e,t,l))}),t})},oe=()=>{let{count:t,state:r}=S(`useSetup:0:0:dup1`,()=>n(()=>({count:S(`ref:1:2`,()=>l(0)),state:S(`reactive:1:3`,()=>p({enabled:!1}))})));return u(n=>{let c=o(`div`,n);b(c,`rounded-xl border border-base-300/70 bg-base-100/70 backdrop-blur-sm p-4`);let l=o(`div`,c);i(c,l),b(l,`flex items-center gap-3`);let u=o(`button`,l);i(l,u),b(u,`btn btn-primary`),s(u,`click`,()=>t.value++),i(u,_(`+1`));let d=o(`button`,l);i(l,d),b(d,`btn btn-outline`),s(d,`click`,()=>t.value=0),i(d,_(`重置`));let p=o(`label`,l);i(l,p),b(p,`flex items-center gap-2 ml-auto`);let h=o(`input`,p);i(p,h),e(h,`type`,`checkbox`),b(h,`checkbox`),m(()=>{f(h,!!r.enabled)}),s(h,`change`,e=>r.enabled=e.target.checked);let g=o(`span`,p);i(p,g),b(g,`text-sm text-base-content`),i(g,_(`启用`));let y=o(`div`,c);i(c,y),b(y,`mt-2 text-sm text-base-content/70`),i(y,_(`计数：`));let x=a(y);i(y,x),m(()=>{v(x,t.value)}),i(y,_(`，启用：`));let S=a(y);return i(y,S),m(()=>{v(S,r.enabled?`是`:`否`)}),c})},se=()=>{let{count:e}=S(`useSetup:0:0:dup2`,()=>n(()=>({count:S(`ref:1:4`,()=>l(0))})));return u(t=>{let n=o(`div`,t);b(n,`card h-[330px] border border-base-300/70 bg-base-100/80 shadow-sm backdrop-blur-sm`);let l=o(`div`,n);i(n,l),b(l,`card-body flex h-full p-6`);let d=o(`div`,l);i(l,d),b(d,`flex items-start justify-between gap-4`);let f=o(`div`,d);i(d,f);let p=o(`div`,f);i(f,p),b(p,`text-sm uppercase tracking-[0.22em] text-base-content/45`),i(p,_(`Live Demo`));let g=o(`div`,f);i(f,g),b(g,`mt-2 text-sm text-base-content/70`),i(g,_(`一个 ref signal 同时驱动计数和 v-if 条件分支。`));let y=o(`div`,d);i(d,y),b(y,`badge badge-outline badge-lg`);let S=a(y);i(y,S),m(()=>{v(S,e.value)});let C=o(`div`,l);i(l,C),b(C,`mt-6 grid gap-4`);let w=o(`button`,C);i(C,w),b(w,`rounded-xl border border-base-300 bg-base-100 px-4 py-3 text-base font-medium text-base-content shadow-sm transition hover:border-primary hover:text-primary`),s(w,`click`,()=>e.value++),i(w,_(`计数：`));let T=a(w);i(w,T),m(()=>{v(T,e.value)});let E=o(`div`,C);i(C,E),b(E,`min-h-[96px] rounded-2xl border border-base-300/70 bg-base-200/40 p-4`);let ee=c(`rue:slot:anchor`);i(E,ee),m(()=>{let t=e.value%2==0?u(()=>{let e=r(),t=o(`div`,e);i(e,t),b(t,`flex h-full items-center justify-between gap-3`);let n=o(`div`,t);i(t,n);let a=o(`div`,n);i(n,a),b(a,`font-semibold text-base-content`),i(a,_(`偶数态 UI`));let s=o(`div`,n);i(n,s),b(s,`mt-1 text-sm text-base-content/70`),i(s,_(`当前展示欢迎提示卡片。`));let c=o(`span`,t);return i(t,c),b(c,`badge badge-info badge-lg`),i(c,_(`v-if`)),e}):u(()=>{let e=r(),t=o(`div`,e);i(e,t),b(t,`flex h-full items-center justify-between gap-3`);let n=o(`div`,t);i(t,n);let a=o(`div`,n);i(n,a),b(a,`font-semibold text-base-content`),i(a,_(`奇数态 UI`));let s=o(`div`,n);i(n,s),b(s,`mt-1 text-sm text-base-content/70`),i(s,_(`signal 更新后切到另一套界面。`));let c=o(`span`,t);return i(t,c),b(c,`badge badge-success badge-lg`),i(c,_(`v-else`)),e});x(()=>h(t,E,ee))});let te=o(`div`,l);return i(l,te),b(te,`mt-auto text-xs tracking-[0.16em] text-base-content/45`),i(te,_(`点击按钮时，下面的两个 UI 会跟着 signal 一起切换。`)),n})},ce=`import { type FC, ref } from '@rue-js/rue'

const App: FC = () => {
  const count = ref(0)

  return (
    <div className="card h-[310px] border border-base-300/70 bg-base-100/80 shadow-sm backdrop-blur-sm">
      <div className="card-body flex h-full p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-sm uppercase tracking-[0.22em] text-base-content/45">Live Demo</div>
            <div className="mt-2 text-sm text-base-content/70">
              一个 ref signal 同时驱动计数和 v-if 条件分支。
            </div>
          </div>
          <div className="badge badge-outline badge-lg">{count.value}</div>
        </div>

        <div className="mt-6 grid gap-4">
          <button
            className="rounded-xl border border-base-300 bg-base-100 px-4 py-3 text-base font-medium text-base-content shadow-sm transition hover:border-primary hover:text-primary"
            onClick={() => count.value++}
          >
            计数：{count.value}
          </button>

          <div className="min-h-[96px] rounded-2xl border border-base-300/70 bg-base-200/40 p-4">
            <div v-if={count.value % 2 === 0} className="flex h-full items-center justify-between gap-3">
              <div>
                <div className="font-semibold text-base-content">偶数态 UI</div>
                <div className="mt-1 text-sm text-base-content/70">当前展示欢迎提示卡片。</div>
              </div>
              <span className="badge badge-info badge-lg">v-if</span>
            </div>
            <div v-else className="flex h-full items-center justify-between gap-3">
              <div>
                <div className="font-semibold text-base-content">奇数态 UI</div>
                <div className="mt-1 text-sm text-base-content/70">signal 更新后切到另一套界面。</div>
              </div>
              <span className="badge badge-success badge-lg">v-else</span>
            </div>
          </div>
        </div>

        <div className="mt-auto text-xs tracking-[0.16em] text-base-content/45">
          点击按钮时，下面的两个 UI 会跟着 signal 一起切换。
        </div>
      </div>
    </div>
  )
}

export default App`,le=[{id:`npm`,label:`npm`,command:`npm create rue@latest`},{id:`pnpm`,label:`pnpm`,command:`pnpm create rue@latest`},{id:`bun`,label:`bun`,command:`bun create rue@latest`},{id:`yarn`,label:`yarn`,command:`yarn dlx create-rue@latest`}],ue=()=>{let{activeCreateCommand:t,selectedCreateCommand:a}=S(`useSetup:0:0:dup3`,()=>n(()=>{let e=S(`ref:1:5`,()=>l(`npm`));return{activeCreateCommand:e,selectedCreateCommand:S(`computed:1:6`,()=>d(()=>le.find(t=>t.id===e.value)??le[0]))}}));return u(n=>{let l=r(),d=o(`section`,l);i(l,d),b(d,`relative rounded-2xl bg-gr2adient-to-br from-violet-50 to-fuchsia-50 p-12 mb-10`);let f=o(`div`,d);i(d,f),b(f,`absolute -top-24 -left-24 w-96 h-96 rounded-full bg-violet-200/40 blur-3xl`);let p=o(`div`,d);i(d,p),b(p,`absolute -bottom-24 -right-24 w-md h-112 rounded-full bg-fuchsia-200/40 blur-3xl`);let g=o(`div`,d);i(d,g),b(g,`relative max-w-[1100px] mx-auto text-center`);let v=o(`div`,g);i(g,v),b(v,`hover-3d`);let S=o(`figure`,v);i(v,S);let D=o(`div`,S);i(S,D),b(D,`inline-flex items-center justify-center gap-3`);let O=o(`span`,D);i(D,O),b(O,`inline-flex items-center justify-center w-22 h-22 rounded-full bg-linear-to-br from-violet-500 via-fuchsia-500 to-pink-500 shadow-lg ring-1 ring-white/30`);let ue=o(`span`,O);i(O,ue),b(ue,`text-white font-extrabold text-[64px] md:text-[92px] leading-none`),i(ue,_(`T`));let de=o(`span`,D);i(D,de),b(de,`text-6xl md:text-8xl font-extrabold tracking-tight bg-linear-to-r from-violet-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent`),i(de,_(`he Wasm`));let fe=o(`div`,S);i(S,fe),b(fe,`mt-2 text-4xl md:text-5xl font-extrabold tracking-tight bg-linear-to-r from-violet-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent`),i(fe,_(`Framework For Vapor Native DOM`));let pe=o(`p`,S);i(S,pe),b(pe,`mt-6 text-lg md:text-xl text-base-content/70`),i(pe,_(`Rust 运行时，Rust 响应式系统，Rust 原生 DOM 编译器`)),i(v,o(`div`,v)),i(v,o(`div`,v)),i(v,o(`div`,v)),i(v,o(`div`,v)),i(v,o(`div`,v)),i(v,o(`div`,v)),i(v,o(`div`,v)),i(v,o(`div`,v));let k=o(`div`,g);i(g,k),b(k,`mt-8 flex flex-wrap justify-center gap-3`);let me=c(`rue:component:anchor`);i(k,me),h(y(w,{to:`/guide/guide/quick-start`,className:`btn btn-primary btn-lg`,children:`快速上手`}),k,me);let he=c(`rue:component:anchor`);i(k,he),h(y(w,{to:`/guide/guide/introduction`,className:`btn btn-outline btn-lg`,children:`文档`}),k,he);let ge=c(`rue:component:anchor`);i(k,ge),h(y(w,{to:`/api/api/index`,className:`btn btn-outline btn-lg`,children:`API`}),k,ge);let A=o(`a`,k);i(k,A),e(A,`href`,`https://github.com/hunzhiwange/ruejs`),e(A,`target`,`_blank`),b(A,`btn btn-outline btn-lg`),i(A,_(`Github`));let j=o(`a`,k);i(k,j),e(j,`href`,`https://vercel.com`),e(j,`target`,`_blank`),b(j,`btn btn-outline btn-lg`),i(j,_(`Vercel`));let M=o(`a`,k);i(k,M),e(M,`href`,`https://www.dhb168.com/?from=ruejs`),e(M,`target`,`_blank`),e(M,`data-tip`,`订货宝-经销商订货系统,批发贸易订货,用订货宝下单软件app,小程序-订货管理系统`),b(M,`tooltip tooltip-top btn btn-outline btn-lg`),i(M,_(`订货宝`));let N=o(`div`,g);i(g,N),b(N,`mx-auto mt-6 max-w-[900px] rounded-2xl border border-white/60 bg-slate-950/90 p-4 text-left shadow-xl shadow-fuchsia-200/40`);let P=o(`div`,N);i(N,P),b(P,`mb-3 flex flex-wrap items-center justify-between gap-3`);let F=o(`div`,P);i(P,F),b(F,`flex items-center gap-2`);let _e=o(`span`,F);i(F,_e),b(_e,`h-3 w-3 rounded-full bg-rose-400`);let ve=o(`span`,F);i(F,ve),b(ve,`h-3 w-3 rounded-full bg-amber-400`);let ye=o(`span`,F);i(F,ye),b(ye,`h-3 w-3 rounded-full bg-emerald-400`);let be=o(`span`,F);i(F,be),b(be,`ml-2 text-xs uppercase tracking-[0.24em] text-white/45`),i(be,_(`Quick Start`));let I=o(`div`,P);i(P,I),b(I,`inline-flex rounded-xl border border-white/10 bg-white/5 p-1`),e(I,`role`,`tablist`),e(I,`aria-label`,`选择创建命令`);let xe=c(`rue:list:start`),Se=c(`rue:list:end`);i(I,xe),i(I,Se);let Ce=new Map;m(()=>{Ce=C({items:le||[],getKey:(e,t)=>e.id,elements:Ce,parent:I,before:Se,singleRoot:!0,trackIndex:!1,start:xe,renderItem:(n,a,l,d,f)=>{h(u(()=>{let a=r(),l=o(`button`,a);i(a,l),m(()=>{e(l,`key`,String(n.id))}),e(l,`type`,`button`),e(l,`role`,`tab`),m(()=>{e(l,`aria-selected`,String(t.value===n.id))}),m(()=>{b(l,String(`rounded-lg px-3 py-1.5 text-xs font-medium transition ${t.value===n.id?`bg-white text-slate-950 shadow-sm`:`text-white/65 hover:text-white`}`))}),s(l,`click`,()=>t.value=n.id);let u=c(`rue:slot:anchor`);return i(l,u),m(()=>{let e=n.label;x(()=>h(e,l,u))}),a}),a,l)}})});let L=o(`pre`,N);i(N,L),b(L,`overflow-x-auto text-sm md:text-base text-white/92`);let we=o(`code`,L);i(L,we),i(we,_(`$ `));let Te=c(`rue:slot:anchor`);i(we,Te),m(()=>{let e=a.get().command;x(()=>h(e,we,Te))});let R=o(`section`,l);i(l,R),b(R,`grid md:grid-cols-3 gap-6 max-w-[1100px] mx-auto`);let Ee=c(`rue:component:anchor`);i(R,Ee),h(y(E,{title:`简洁易用`,desc:`轻量、直观的 API，适合渐进式接入；保留熟悉的 JSX / TSX 开发方式，无需额外模板语法。`,icon:`✅`}),R,Ee);let De=c(`rue:component:anchor`);i(R,De),h(y(E,{title:`编译驱动的原生 DOM 渲染`,desc:`围绕真实 DOM 做最小更新，并可结合 Rust / Wasm 运行时扩展与原生 DOM 编译能力。`,icon:`🦀`}),R,De);let Oe=c(`rue:component:anchor`);i(R,Oe),h(y(E,{title:`React JSX + Vue 响应式`,desc:`适合希望保留 React 风格 JSX，同时获得 ref、reactive、computed 等 Vue 式响应式 API 的项目。`,icon:`🤝`}),R,Oe);let ke=o(`section`,l);i(l,ke),b(ke,`max-w-[1100px] mx-auto mt-12`);let z=o(`div`,ke);i(ke,z),b(z,`mt-6 grid md:grid-cols-2 gap-6 items-stretch`);let Ae=o(`div`,z);i(z,Ae),b(Ae,`card bg-base-100 border p-0 overflow-auto h-[330px]`);let je=c(`rue:component:anchor`);i(Ae,je),m(()=>{let e=y(T,{className:`h-full`,lang:`tsx`,code:ce});x(()=>h(e,Ae,je))});let Me=c(`rue:component:anchor`);i(z,Me),h(y(se,{}),z,Me);let Ne=o(`section`,l);i(l,Ne),b(Ne,`mt-12 rounded-2xl p-8 bg-linear-to-br from-pink-500/80 to-fuchsia-500/80 text-white ring-1 ring-white/30 shadow-lg max-w-[1100px] mx-auto`);let B=o(`div`,Ne);i(Ne,B),b(B,`md:flex items-center justify-between`);let V=o(`div`,B);i(B,V);let Pe=o(`h2`,V);i(V,Pe),b(Pe,`text-2xl font-semibold mb-2 text-white`),i(Pe,_(`生态与插件`));let Fe=o(`p`,V);i(V,Fe),b(Fe,`text-white/90`),i(Fe,_(`官方路由、设计组件库与构建插件协同工作，也支持渐进式接入现有应用。`));let H=o(`div`,B);i(B,H),b(H,`mt-4 md:mt-0 flex gap-3`);let Ie=c(`rue:component:anchor`);i(H,Ie),h(y(w,{to:`/plugins`,className:`btn btn-outline`,children:`插件`}),H,Ie);let Le=c(`rue:component:anchor`);i(H,Le),h(y(w,{to:`/design/button`,className:`btn btn-outline`,children:`组件库`}),H,Le);let U=o(`section`,l);i(l,U),b(U,`max-w-[1100px] mx-auto mt-12`);let Re=o(`h2`,U);i(U,Re),b(Re,`text-2xl font-semibold mb-2`),i(Re,_(`用组件组织界面`));let ze=o(`p`,U);i(U,ze),b(ze,`text-gray-600`),i(ze,_(`Rue 以 JSX / TSX 组件表达界面中的可复用片段。组件同时包含结构与逻辑，按需组合即可形成页面或模块。`));let W=o(`div`,U);i(U,W),b(W,`mt-6 grid md:grid-cols-2 gap-6 items-start`);let Be=o(`div`,W);i(W,Be),b(Be,`card bg-base-100 border p-0 overflow-auto h-[360px] md:h-[560px]`);let Ve=c(`rue:component:anchor`);i(Be,Ve),m(()=>{let e=y(T,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue'

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

export default HelloWorld`});x(()=>h(e,Be,Ve))});let G=o(`div`,W);i(W,G),b(G,`grid gap-6`);let He=c(`rue:component:anchor`);i(G,He),h(y(ee,{}),G,He);let Ue=c(`rue:component:anchor`);i(G,Ue),h(y(te,{}),G,Ue);let We=c(`rue:component:anchor`);i(G,We),h(y(ne,{}),G,We);let Ge=c(`rue:component:anchor`);i(G,Ge),h(y(re,{}),G,Ge);let Ke=o(`p`,U);i(U,Ke),b(Ke,`mt-6 text-gray-600`),i(Ke,_(`Rue 的组件强调可复用与可组合，保持清晰的数据与事件流，也方便把交互片段渐进接入现有页面。`));let K=o(`section`,l);i(l,K),b(K,`max-w-[1100px] mx-auto mt-12`);let qe=o(`h2`,K);i(K,qe),b(qe,`text-2xl font-semibold mb-2`),i(qe,_(`Vapor 渲染路径：更贴近真实 DOM 更新模型`));let Je=o(`p`,K);i(K,Je),b(Je,`text-gray-600`),i(Je,_(`Rue 提供默认 Block / Vapor 渲染路径，Vapor 适合需要更高性能、细粒度更新的区域。`));let Ye=o(`p`,K);i(K,Ye),b(Ye,`text-gray-600`),i(Ye,_(`结合 Rust 实现的响应式系统、Rust / Wasm 运行时与原生 DOM 编译能力，Vapor 会把 JSX 转换为更贴近真实 DOM 的产物。`));let q=o(`div`,K);i(K,q),b(q,`mt-6 grid md:grid-cols-2 gap-6 items-start`);let J=o(`div`,q);i(q,J),b(J,`card bg-base-100 border overflow-auto h-[360px] md:h-[510px]`);let Xe=c(`rue:component:anchor`);i(J,Xe),m(()=>{let e=y(T,{className:`h-full`,lang:`tsx`,code:`const Hello: FC = () => (
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

export default HelloWorld`});x(()=>h(e,J,Xe))});let Ze=o(`div`,q);i(q,Ze),b(Ze,`card bg-base-100 border p-0 overflow-auto h-[360px] md:h-[510px]`);let Qe=c(`rue:component:anchor`);i(Ze,Qe),m(()=>{let e=y(T,{className:`h-full`,lang:`ts`,code:`/* RUE_VAPOR_TRANSFORMED */
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
export default HelloWorld;`});x(()=>h(e,Ze,Qe))});let $e=o(`div`,K);i(K,$e),b($e,`mt-6 space-y-3 text-gray-700`);let et=o(`p`,$e);i($e,et),i(et,_(`Vapor 渲染路径直接面向原生 DOM，减少额外协调开销；配合细粒度响应式更新，在复杂界面中能保持更稳的性能与内存表现。`));let Y=o(`section`,l);i(l,Y),b(Y,`max-w-[1100px] mx-auto mt-12`);let tt=o(`h2`,Y);i(Y,tt),b(tt,`text-2xl font-semibold mb-2`),i(tt,_(`React 风格 JSX，Vue 式响应式 API`));let nt=o(`p`,Y);i(Y,nt),b(nt,`text-gray-600`),i(nt,_(`Rue 适合希望保留 React 风格 JSX，同时获得 Vue 式响应式 API 的项目。你既可以用 useState，也可以用 ref / reactive / computed 来组织交互逻辑。`));let X=o(`div`,Y);i(Y,X),b(X,`mt-6 grid md:grid-cols-2 gap-6 items-start`);let rt=o(`div`,X);i(X,rt),b(rt,`card bg-base-100 border p-0 overflow-auto h-[360px] md:h-[660px]`);let it=c(`rue:component:anchor`);i(rt,it),m(()=>{let e=y(T,{className:`h-full`,lang:`tsx`,code:`import { type FC, useState, ref, reactive, computed } from '@rue-js/rue';

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

export default Reactive;`});x(()=>h(e,rt,it))});let Z=o(`div`,X);i(X,Z),b(Z,`grid gap-6`);let Q=o(`div`,Z);i(Z,Q);let at=o(`h3`,Q);i(Q,at),b(at,`text-lg font-semibold mb-2 text-base-content`),i(at,_(`前端的发展，从原始DOM，到 JQUERY等`));let ot=c(`rue:component:anchor`);i(Q,ot),m(()=>{let e=y(ae,{videos:ie});x(()=>h(e,Q,ot))});let $=o(`div`,Z);i(Z,$);let st=o(`h3`,$);i($,st),b(st,`text-lg font-semibold mb-2 text-base-content`),i(st,_(`ref / reactive 示例`));let ct=c(`rue:component:anchor`);i($,ct),h(y(oe,{}),$,ct);let lt=o(`p`,Y);return i(Y,lt),b(lt,`mt-6 text-gray-600`),i(lt,_(`Rue 支持渐进集成：你可以在现有页面中按需挂载组件、路由或交互片段，而不必一次性重写整站。`)),l})};export{ue as default};