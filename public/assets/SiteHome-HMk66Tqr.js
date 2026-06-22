import{Nt as e,Q as t,Vt as n,Xt as r,Z as i,at as a,bt as o,dt as s,ft as c,it as l,l as u,nt as d,o as f,on as p,pt as m,rt as h,s as g,sn as _,t as v,tn as y,tt as b,wt as x,yt as S}from"./vapor-runtime-x7F5M-49.js";import{a as C,n as w}from"./vapor-helpers-vapor-D1LP4JjK.js";import{n as T}from"./src-BEG41jq3.js";import{n as E,t as D}from"./Code-C5NjdoiC.js";var O=e=>u(r=>{let i=h(`div`,r);m(i,`card bg-base-100 border border-base-200 shadow-sm`);let a=h(`div`,i);t(i,a),m(a,`card-body`);let o=h(`div`,a);t(a,o),m(o,`flex items-center gap-3 mb-1`);let s=h(`div`,o);t(o,s),m(s,`w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center`);let c=h(`span`,s);t(s,c),m(c,`text-lg`);let l=b(`rue:slot:anchor`);t(c,l),n(()=>{let t=e.icon||`⚡️`;y(()=>f(t,c,l))});let u=h(`div`,o);t(o,u),m(u,`font-semibold text-base-content`);let d=b(`rue:slot:anchor`);t(u,d),n(()=>{let t=e.title;y(()=>f(t,u,d))});let p=h(`p`,a);t(a,p),m(p,`text-sm text-base-content/70`);let g=b(`rue:slot:anchor`);return t(p,g),n(()=>{let t=e.desc;y(()=>f(t,p,g))}),i}),ee=()=>u(e=>{let n=h(`div`,e);m(n,`card bg-primary text-primary-content shadow-sm`);let r=h(`div`,n);t(n,r),m(r,`card-body items-center text-center`);let i=h(`div`,r);t(r,i),m(i,`text-3xl font-extrabold`),t(i,l(`Hello`));let a=h(`div`,r);return t(r,a),m(a,`mt-2 text-sm opacity-90`),t(a,l(`Hello component`)),n}),te=()=>u(e=>{let n=h(`div`,e);m(n,`card bg-base-100 text-base-content border border-base-200 shadow-sm`);let r=h(`div`,n);t(n,r),m(r,`card-body items-center text-center`);let i=h(`div`,r);t(r,i),m(i,`text-3xl font-extrabold`),t(i,l(`World`));let a=h(`div`,r);return t(r,a),m(a,`mt-2 text-sm text-base-content/70`),t(a,l(`World component`)),n}),ne=()=>u(e=>{let n=h(`div`,e);m(n,`card bg-accent text-accent-content shadow-sm`);let r=h(`div`,n);t(n,r),m(r,`card-body items-center text-center`);let i=h(`div`,r);t(r,i),m(i,`text-3xl font-extrabold`),t(i,l(`Hi`));let a=h(`div`,r);return t(r,a),m(a,`mt-2 text-sm opacity-90`),t(a,l(`Rue`)),n}),re=()=>u(e=>{let n=h(`div`,e);m(n,`card bg-base-100 text-base-content border border-base-200 shadow-sm`);let r=h(`div`,n);t(n,r),m(r,`card-body items-center text-center`);let i=h(`div`,r);t(r,i),m(i,`text-3xl font-extrabold`),t(i,l(`Yes`));let a=h(`div`,r);return t(r,a),m(a,`mt-2 text-sm text-base-content/70`),t(a,l(`My name is Rue`)),n}),ie=[{title:`原始 DOM 编程`,desc:`直接操作节点与事件`},{title:`jQuery 的崛起`,desc:`Write Less, Do More`},{title:`Backbone.js 与 MVC`,desc:`早期前端架构探索`},{title:`Web Components`,desc:`原生组件标准`},{title:`现代构建工具与生态`,desc:`模块化与开发体验`}],k=e=>u(t=>{let r=h(`input`,t);return m(r,`w-full rounded-md border border-base-300 bg-base-100 px-3 py-2 text-base-content shadow-sm focus:border-violet-500 focus:ring focus:ring-violet-200`),n(()=>{S(r,e.value)}),i(r,`input`,t=>e.onChange(t.target.value)),s(r,`placeholder`,`搜索视频`),r}),A=e=>u(r=>{let i=h(`div`,r);m(i,`mt-3 space-y-2`);let a=h(`div`,i);t(i,a),m(a,`text-sm text-base-content/70`);let o=b(`rue:slot:anchor`);t(a,o),n(()=>{let t=e.videos.length;y(()=>f(t,a,o))}),t(a,l(` 个视频`));let c=b(`rue:slot:anchor`);return t(i,c),n(()=>{let r=e.videos.length===0?u(()=>{let r=d(),i=h(`div`,r);t(r,i),m(i,`rounded-md border border-base-300/70 bg-base-100/70 backdrop-blur-sm p-3 text-sm text-base-content/70`);let a=b(`rue:slot:anchor`);return t(i,a),n(()=>{let t=e.emptyHeading||`暂无匹配`;y(()=>f(t,i,a))}),r}):u(()=>{let r=d(),i=h(`ul`,r);t(r,i),m(i,`space-y-2`);let a=b(`rue:list:start`),o=b(`rue:list:end`);t(i,a),t(i,o);let c=new Map;return n(()=>{c=w({items:e.videos||[],getKey:(e,t)=>t,elements:c,parent:i,before:o,singleRoot:!0,start:a,renderItem:(e,r,i,a,o)=>{f(u(()=>{let r=d(),i=h(`li`,r);t(r,i),n(()=>{s(i,`key`,String(o))}),m(i,`rounded-md border border-base-300/70 bg-base-100/70 backdrop-blur-sm p-3`);let a=h(`div`,i);t(i,a),m(a,`font-medium text-base-content`);let c=b(`rue:slot:anchor`);t(a,c),n(()=>{let t=e.title;y(()=>f(t,a,c))});let l=h(`div`,i);t(i,l),m(l,`text-sm text-base-content/70`);let u=b(`rue:slot:anchor`);return t(l,u),n(()=>{let t=e.desc;y(()=>f(t,l,u))}),r}),r,i)}})}),r});y(()=>f(r,i,c))}),i}),ae=e=>{let{searchText:r,setSearchText:i,foundVideos:a}=C(`useSetup:0:0`,()=>p(()=>{let[t,n]=C(`useState:1:0`,()=>_(``));return{searchText:t,setSearchText:n,foundVideos:C(`computed:1:1`,()=>x(()=>e.videos.filter(e=>e.title.toLowerCase().includes(t.value.toLowerCase()))))}}));return u(e=>{let o=d(),s=b(`rue:component:anchor`);t(o,s),n(()=>{let e=v(k,{value:r.value,onChange:i});y(()=>f(e,o,s))});let c=b(`rue:component:anchor`);return t(o,c),n(()=>{let e=v(A,{videos:a.get(),emptyHeading:`没有匹配 “${r.value}”`});y(()=>f(e,o,c))}),o})},oe=()=>{let{count:d,state:f}=C(`useSetup:0:0:dup1`,()=>p(()=>({count:C(`ref:1:2`,()=>r(0)),state:C(`reactive:1:3`,()=>e({enabled:!1}))})));return u(e=>{let r=h(`div`,e);m(r,`rounded-xl border border-base-300/70 bg-base-100/70 backdrop-blur-sm p-4`);let u=h(`div`,r);t(r,u),m(u,`flex items-center gap-3`);let p=h(`button`,u);t(u,p),m(p,`btn btn-primary`),i(p,`click`,()=>d.value++),t(p,l(`+1`));let g=h(`button`,u);t(u,g),m(g,`btn btn-outline`),i(g,`click`,()=>d.value=0),t(g,l(`重置`));let _=h(`label`,u);t(u,_),m(_,`flex items-center gap-2 ml-auto`);let v=h(`input`,_);t(_,v),s(v,`type`,`checkbox`),m(v,`checkbox`),n(()=>{c(v,!!f.enabled)}),i(v,`change`,e=>f.enabled=e.target.checked);let y=h(`span`,_);t(_,y),m(y,`text-sm text-base-content`),t(y,l(`启用`));let b=h(`div`,r);t(r,b),m(b,`mt-2 text-sm text-base-content/70`),t(b,l(`计数：`));let x=a(b);t(b,x),n(()=>{o(x,d.value)}),t(b,l(`，启用：`));let S=a(b);return t(b,S),n(()=>{o(S,f.enabled?`是`:`否`)}),r})},se=()=>{let{count:e}=C(`useSetup:0:0:dup2`,()=>p(()=>({count:C(`ref:1:4`,()=>r(0))})));return u(r=>{let s=h(`div`,r);m(s,`card h-[330px] border border-base-300/70 bg-base-100/80 shadow-sm backdrop-blur-sm`);let c=h(`div`,s);t(s,c),m(c,`card-body flex h-full p-6`);let p=h(`div`,c);t(c,p),m(p,`flex items-start justify-between gap-4`);let g=h(`div`,p);t(p,g);let _=h(`div`,g);t(g,_),m(_,`text-sm uppercase tracking-[0.22em] text-base-content/45`),t(_,l(`Live Demo`));let v=h(`div`,g);t(g,v),m(v,`mt-2 text-sm text-base-content/70`),t(v,l(`一个 ref signal 同时驱动计数和 v-if 条件分支。`));let x=h(`div`,p);t(p,x),m(x,`badge badge-outline badge-lg`);let S=a(x);t(x,S),n(()=>{o(S,e.value)});let C=h(`div`,c);t(c,C),m(C,`mt-6 grid gap-4`);let w=h(`button`,C);t(C,w),m(w,`rounded-xl border border-base-300 bg-base-100 px-4 py-3 text-base font-medium text-base-content shadow-sm transition hover:border-primary hover:text-primary`),i(w,`click`,()=>e.value++),t(w,l(`计数：`));let T=a(w);t(w,T),n(()=>{o(T,e.value)});let E=h(`div`,C);t(C,E),m(E,`min-h-[96px] rounded-2xl border border-base-300/70 bg-base-200/40 p-4`);let D=b(`rue:slot:anchor`);t(E,D),n(()=>{let n=e.value%2==0?u(()=>{let e=d(),n=h(`div`,e);t(e,n),m(n,`flex h-full items-center justify-between gap-3`);let r=h(`div`,n);t(n,r);let i=h(`div`,r);t(r,i),m(i,`font-semibold text-base-content`),t(i,l(`偶数态 UI`));let a=h(`div`,r);t(r,a),m(a,`mt-1 text-sm text-base-content/70`),t(a,l(`当前展示欢迎提示卡片。`));let o=h(`span`,n);return t(n,o),m(o,`badge badge-info badge-lg`),t(o,l(`v-if`)),e}):u(()=>{let e=d(),n=h(`div`,e);t(e,n),m(n,`flex h-full items-center justify-between gap-3`);let r=h(`div`,n);t(n,r);let i=h(`div`,r);t(r,i),m(i,`font-semibold text-base-content`),t(i,l(`奇数态 UI`));let a=h(`div`,r);t(r,a),m(a,`mt-1 text-sm text-base-content/70`),t(a,l(`signal 更新后切到另一套界面。`));let o=h(`span`,n);return t(n,o),m(o,`badge badge-success badge-lg`),t(o,l(`v-else`)),e});y(()=>f(n,E,D))});let O=h(`div`,c);return t(c,O),m(O,`mt-auto text-xs tracking-[0.16em] text-base-content/45`),t(O,l(`点击按钮时，下面的两个 UI 会跟着 signal 一起切换。`)),s})},ce=`import { type FC, ref } from '@rue-js/rue'

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

export default App`,le=[{id:`npm`,label:`npm`,command:`npm create rue@latest`},{id:`pnpm`,label:`pnpm`,command:`pnpm create rue@latest`},{id:`bun`,label:`bun`,command:`bun create rue@latest`},{id:`yarn`,label:`yarn`,command:`yarn dlx create-rue@latest`}],ue=[{name:`虚位以待`,href:`/page/sponsor/index`,description:`期待与你一起支持 Rue 生态建设。`}],de=[{name:`虚位以待`,href:`/page/sponsor/index`,description:`欢迎加入 Rue 赞助计划。`}],fe=[{name:`QueryPHP`,href:`https://www.queryphp.com`,description:`现代化 PHP 开发框架`},{name:`VibeWindow`,href:`https://vibewindow.huododo.com/#/`,description:`氛围视窗软件智能体`},{name:`订货宝`,href:`https://www.dhb168.com/?from=ruejs`,description:`经销商订货系统与批发贸易订货平台`},{name:`Vercel`,href:`https://vercel.com`,description:`云部署与前端基础设施`}],pe=[{title:`i18n 国际化插件`,desc:`直接展示源文本即 key、局部插值和按需懒加载语言包的完整链路。`,to:`/examples/i18n-switcher`,eyebrow:`I18n Demo`,accentClassName:`border-emerald-200 bg-linear-to-br from-emerald-500/12 via-base-100 to-teal-500/10 hover:border-emerald-400/60`},{title:`路由插件`,desc:`集中看嵌套路由、守卫、redirect 和实验页在真实页面里的组合方式。`,to:`/examples/router-demo/guide/router/overview`,eyebrow:`Router Demo`,accentClassName:`border-sky-200 bg-linear-to-br from-sky-500/12 via-base-100 to-cyan-500/10 hover:border-sky-400/60`},{title:`数据状态与 URL 同步插件`,desc:`把 Store、筛选条件和查询串连起来，观察状态如何驱动可分享链接。`,to:`/examples/store-query-sync`,eyebrow:`State Demo`,accentClassName:`border-amber-200 bg-linear-to-br from-amber-500/12 via-base-100 to-orange-500/10 hover:border-amber-400/60`},{title:`Text.js 全栈应用框架`,desc:`基于 Vite、Rue、RSC 与文件系统路由，了解 App Router、SSR、API 路由和 Workers 部署。`,to:`/textjs`,eyebrow:`Full-stack`,accentClassName:`border-cyan-200 bg-linear-to-br from-cyan-500/12 via-base-100 to-blue-500/10 hover:border-cyan-400/60`}],me=e=>u(r=>{let i=h(`section`,r);m(i,`max-w-[1100px] mx-auto mt-8`);let a=h(`div`,i);t(i,a),m(a,`flex flex-col gap-3 md:flex-row md:items-end md:justify-between`);let o=h(`div`,a);t(a,o);let c=h(`div`,o);t(o,c),m(c,`text-sm font-semibold uppercase tracking-[0.24em] text-base-content/45`);let l=b(`rue:slot:anchor`);t(c,l),n(()=>{let t=e.eyebrow;y(()=>f(t,c,l))});let p=h(`h2`,o);t(o,p),m(p,`mt-2 text-3xl font-semibold text-base-content`);let g=b(`rue:slot:anchor`);t(p,g),n(()=>{let t=e.title;y(()=>f(t,p,g))});let _=b(`rue:slot:anchor`);t(a,_),n(()=>{let r=e.actionLabel&&e.actionTo?u(()=>{let r=d(),i=b(`rue:component:anchor`);return t(r,i),n(()=>{let t=v(T,{to:e.actionTo,className:`btn btn-outline self-start md:self-auto`,children:e.actionLabel});y(()=>f(t,r,i))}),r}):``;y(()=>f(r,a,_))});let x=h(`div`,i);t(i,x),n(()=>{m(x,`mt-5 grid gap-4 ${e.items.length>1?`md:grid-cols-2`:``}`)});let S=b(`rue:list:start`),C=b(`rue:list:end`);t(x,S),t(x,C);let E=new Map;return n(()=>{E=w({items:e.items||[],getKey:(e,t)=>e.name,elements:E,parent:x,before:C,singleRoot:!0,trackIndex:!1,start:S,renderItem:(e,r,i,a,o)=>{f(u(()=>{let r=d(),i=h(`a`,r);t(r,i),n(()=>{s(i,`key`,String(e.name))}),n(()=>{s(i,`href`,String(e.href))}),s(i,`target`,`_blank`),s(i,`rel`,`noreferrer`),m(i,`group rounded-[1.5rem] border border-base-200 bg-base-100/90 p-5 transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg`);let a=h(`div`,i);t(i,a),m(a,`flex min-h-[116px] flex-col justify-center gap-4`);let o=h(`div`,a);t(a,o);let c=h(`div`,o);t(o,c),m(c,`text-3xl font-semibold tracking-tight text-base-content`);let l=b(`rue:slot:anchor`);t(c,l),n(()=>{let t=e.name;y(()=>f(t,c,l))});let u=h(`p`,o);t(o,u),m(u,`mt-3 max-w-[30ch] text-base leading-7 text-base-content/65`);let p=b(`rue:slot:anchor`);return t(u,p),n(()=>{let t=e.description;y(()=>f(t,u,p))}),r}),r,i)}})}),i}),j=()=>{let{activeCreateCommand:e,selectedCreateCommand:c,createCommandCopy:_}=C(`useSetup:0:0:dup3`,()=>p(()=>{let e=C(`ref:1:5`,()=>r(`npm`)),t=C(`computed:1:6`,()=>x(()=>le.find(t=>t.id===e.value)??le[0]));return{activeCreateCommand:e,selectedCreateCommand:t,createCommandCopy:C(`computed:1:7`,()=>x(()=>E(()=>t.get().command)))}}));return u(r=>{let p=d(),x=h(`section`,p);t(p,x),m(x,`relative rounded-2xl bg-gr2adient-to-br from-violet-50 to-fuchsia-50 p-12 mb-10`);let S=h(`div`,x);t(x,S),m(S,`absolute -top-24 -left-24 w-96 h-96 rounded-full bg-violet-200/40 blur-3xl`);let C=h(`div`,x);t(x,C),m(C,`absolute -bottom-24 -right-24 w-md h-112 rounded-full bg-fuchsia-200/40 blur-3xl`);let E=h(`div`,x);t(x,E),m(E,`relative max-w-[1100px] mx-auto text-center`);let k=h(`div`,E);t(E,k),m(k,`hover-3d`);let A=h(`figure`,k);t(k,A);let j=h(`div`,A);t(A,j),s(j,`class`,`mx-auto w-full px-6 pb-4 text-center`);let M=h(`div`,j);t(j,M),s(M,`class`,`flex select-none items-end justify-center gap-6 whitespace-nowrap text-[clamp(6rem,21vw,16rem)] font-black leading-none bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent md:gap-10`);let he=h(`span`,M);t(M,he),t(he,l(`Rue`));let ge=h(`span`,M);t(M,ge),s(ge,`class`,`pl-1`),t(ge,l(`.JS`));let N=h(`div`,A);t(A,N),m(N,`inline-flex items-center justify-center gap-3`);let _e=h(`span`,N);t(N,_e),m(_e,`inline-flex items-center justify-center w-28 h-28 md:w-30 md:h-30 rounded-full bg-linear-to-br from-sky-500 via-cyan-400 to-emerald-300 shadow-md ring-1 ring-white/15`);let ve=h(`span`,_e);t(_e,ve),m(ve,`text-black font-extrabold text-[28px] md:text-[112px] leading-none drop-shadow-none`),t(ve,l(`T`));let ye=h(`span`,N);t(N,ye),m(ye,`text-[44px] md:text-[95px] font-extrabold tracking-tight bg-linear-to-r from-sky-500 via-cyan-400 to-emerald-300 bg-clip-text text-transparent`),t(ye,l(`he Wasm`));let be=h(`div`,A);t(A,be),m(be,`mt-2 text-[44px] md:text-[62px] font-extrabold tracking-tight bg-linear-to-r from-sky-400 via-cyan-300 to-teal-200 bg-clip-text text-transparent`),t(be,l(`Framework For Native DOM`));let xe=h(`p`,A);t(A,xe),m(xe,`mt-6 text-lg md:text-xl text-base-content/70`),t(xe,l(`Rust 运行时，Rust 响应式系统，Rust 原生 DOM 编译器`)),t(k,h(`div`,k)),t(k,h(`div`,k)),t(k,h(`div`,k)),t(k,h(`div`,k)),t(k,h(`div`,k)),t(k,h(`div`,k)),t(k,h(`div`,k)),t(k,h(`div`,k));let P=h(`div`,E);t(E,P),m(P,`mt-8 flex flex-wrap justify-center gap-3`);let Se=b(`rue:component:anchor`);t(P,Se),f(v(T,{to:`/guide/guide/quick-start`,className:`btn btn-primary btn-lg`,children:`快速上手`}),P,Se);let Ce=b(`rue:component:anchor`);t(P,Ce),f(v(T,{to:`/guide/guide/introduction`,className:`btn btn-outline btn-lg`,children:`文档`}),P,Ce);let we=b(`rue:component:anchor`);t(P,we),f(v(T,{to:`/api/api/index`,className:`btn btn-outline btn-lg`,children:`API`}),P,we);let Te=h(`a`,P);t(P,Te),s(Te,`href`,`https://github.com/hunzhiwange/ruejs`),s(Te,`target`,`_blank`),m(Te,`btn btn-outline btn-lg`),t(Te,l(`Github`));let F=h(`div`,E);t(E,F),m(F,`mx-auto mt-18 max-w-[900px] rounded-2xl border border-white/60 bg-slate-950/90 p-4 text-left shadow-xl shadow-fuchsia-200/40`);let I=h(`div`,F);t(F,I),m(I,`mb-3 flex flex-wrap items-center justify-between gap-3`);let L=h(`div`,I);t(I,L),m(L,`flex items-center gap-2`);let Ee=h(`span`,L);t(L,Ee),m(Ee,`h-3 w-3 rounded-full bg-rose-400`);let De=h(`span`,L);t(L,De),m(De,`h-3 w-3 rounded-full bg-amber-400`);let Oe=h(`span`,L);t(L,Oe),m(Oe,`h-3 w-3 rounded-full bg-emerald-400`);let ke=h(`span`,L);t(L,ke),m(ke,`ml-2 text-xs uppercase tracking-[0.24em] text-white/45`),t(ke,l(`Quick Start`));let R=h(`div`,I);t(I,R),m(R,`inline-flex rounded-xl border border-white/10 bg-white/5 p-1`),s(R,`role`,`tablist`),s(R,`aria-label`,`选择创建命令`);let Ae=b(`rue:list:start`),je=b(`rue:list:end`);t(R,Ae),t(R,je);let Me=new Map;n(()=>{Me=w({items:le||[],getKey:(e,t)=>e.id,elements:Me,parent:R,before:je,singleRoot:!0,trackIndex:!1,start:Ae,renderItem:(r,a,o,c,l)=>{f(u(()=>{let a=d(),o=h(`button`,a);t(a,o),n(()=>{s(o,`key`,String(r.id))}),s(o,`type`,`button`),s(o,`role`,`tab`),n(()=>{s(o,`aria-selected`,String(e.value===r.id))}),n(()=>{m(o,`rounded-lg px-3 py-1.5 text-xs font-medium transition ${e.value===r.id?`bg-white text-slate-950 shadow-sm`:`text-white/65 hover:text-white`}`)}),i(o,`click`,()=>{e.value=r.id});let c=b(`rue:slot:anchor`);return t(o,c),n(()=>{let e=r.label;y(()=>f(e,o,c))}),a}),a,o)}})});let z=h(`div`,F);t(F,z),m(z,`flex flex-col gap-3 md:flex-row md:items-center`);let Ne=h(`pre`,z);t(z,Ne),m(Ne,`min-w-0 flex-1 overflow-x-auto text-sm text-white/92 md:text-base`);let Pe=h(`code`,Ne);t(Ne,Pe),t(Pe,l(`$ `));let Fe=b(`rue:slot:anchor`);t(Pe,Fe),n(()=>{let e=c.get().command;y(()=>f(e,Pe,Fe))});let B=h(`button`,z);t(z,B),s(B,`type`,`button`),n(()=>{m(B,`shrink-0 rounded-xl border px-3 py-2 text-xs font-medium transition ${_.get().copied.value?`border-emerald-300/30 bg-emerald-400/15 text-emerald-100`:`border-white/10 bg-white/5 text-white/75 hover:bg-white/10 hover:text-white`}`)}),n(()=>{s(B,`aria-label`,String(`复制 ${c.get().label} 创建命令`))}),i(B,`click`,_.get().handleCopy);let Ie=a(B);t(B,Ie),n(()=>{o(Ie,_.get().copied.value?`已复制`:`复制`)});let V=h(`section`,p);t(p,V),m(V,`grid md:grid-cols-3 gap-6 max-w-[1100px] mx-auto`);let Le=b(`rue:component:anchor`);t(V,Le),f(v(O,{title:`简洁易用`,desc:`轻量、直观的 API，适合渐进式接入；保留熟悉的 JSX / TSX 开发方式，无需额外模板语法。`,icon:`✅`}),V,Le);let Re=b(`rue:component:anchor`);t(V,Re),f(v(O,{title:`编译驱动的原生 DOM 渲染`,desc:`围绕真实 DOM 做最小更新，并可结合 Rust / Wasm 运行时扩展与原生 DOM 编译能力。`,icon:`🦀`}),V,Re);let ze=b(`rue:component:anchor`);t(V,ze),f(v(O,{title:`React JSX + Vue 式响应式`,desc:`适合希望保留 React 风格 JSX，同时获得 ref、reactive、computed 等 Vue 式响应式 API 的项目。`,icon:`🤝`}),V,ze);let Be=h(`section`,p);t(p,Be),m(Be,`max-w-[1100px] mx-auto mt-12`);let H=h(`div`,Be);t(Be,H),m(H,`mt-6 grid md:grid-cols-2 gap-6 items-stretch`);let Ve=h(`div`,H);t(H,Ve),m(Ve,`card bg-base-100 border p-0 overflow-auto h-[330px]`);let He=b(`rue:component:anchor`);t(Ve,He),n(()=>{let e=v(D,{className:`h-full`,lang:`tsx`,code:ce});y(()=>f(e,Ve,He))});let Ue=b(`rue:component:anchor`);t(H,Ue),f(v(se,{}),H,Ue);let We=h(`section`,p);t(p,We),m(We,`mt-12 rounded-2xl p-8 bg-linear-to-br from-pink-500/80 to-fuchsia-500/80 text-white ring-1 ring-white/30 shadow-lg max-w-[1100px] mx-auto`);let U=h(`div`,We);t(We,U),m(U,`md:flex items-center justify-between`);let Ge=h(`div`,U);t(U,Ge);let Ke=h(`h2`,Ge);t(Ge,Ke),m(Ke,`text-2xl font-semibold mb-2 text-white`),t(Ke,l(`生态与插件`));let qe=h(`p`,Ge);t(Ge,qe),m(qe,`text-white/90`),t(qe,l(`官方路由、设计组件库与构建插件协同工作，也支持渐进式接入现有应用。`));let W=h(`div`,U);t(U,W),m(W,`mt-4 md:mt-0 flex gap-3`);let Je=b(`rue:component:anchor`);t(W,Je),f(v(T,{to:`/plugins`,className:`btn btn-outline`,children:`插件`}),W,Je);let Ye=b(`rue:component:anchor`);t(W,Ye),f(v(T,{to:`/design/button`,className:`btn btn-outline`,children:`组件库`}),W,Ye);let Xe=b(`rue:component:anchor`);t(W,Xe),f(v(T,{to:`/textjs`,className:`btn btn-outline`,children:`Text.js`}),W,Xe);let Ze=h(`section`,p);t(p,Ze),m(Ze,`max-w-[1100px] mx-auto mt-8`);let Qe=h(`div`,Ze);t(Ze,Qe),m(Qe,`mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4`);let $e=b(`rue:list:start`),et=b(`rue:list:end`);t(Qe,$e),t(Qe,et);let tt=new Map;n(()=>{tt=w({items:pe||[],getKey:(e,t)=>e.to,elements:tt,parent:Qe,before:et,start:$e,renderItem:(e,r,i,a,o)=>{let s=u(()=>{let r=d(),i=h(`div`,r);t(r,i),m(i,`text-xs font-semibold uppercase tracking-[0.22em] text-base-content/55`);let a=b(`rue:slot:anchor`);t(i,a),n(()=>{let t=e.eyebrow;y(()=>f(t,i,a))});let o=h(`div`,r);t(r,o),m(o,`mt-3 text-xl font-semibold text-base-content`);let s=b(`rue:slot:anchor`);t(o,s),n(()=>{let t=e.title;y(()=>f(t,o,s))});let c=h(`p`,r);t(r,c),m(c,`mt-2 text-sm leading-6 text-base-content/72`);let u=b(`rue:slot:anchor`);t(c,u),n(()=>{let t=e.desc;y(()=>f(t,c,u))});let p=h(`div`,r);return t(r,p),m(p,`mt-4 text-sm font-medium text-base-content/88`),t(p,l(`打开 Demo`)),r});g(v(T,{key:e.to,to:e.to,className:`group rounded-[1.5rem] border p-5 text-left text-base-content transition hover:-translate-y-0.5 hover:shadow-xl ${e.accentClassName}`,children:s}),r,i,a)}})});let G=h(`section`,p);t(p,G),m(G,`max-w-[1100px] mx-auto mt-12`);let nt=h(`h2`,G);t(G,nt),m(nt,`text-2xl font-semibold mb-2`),t(nt,l(`用组件组织界面`));let rt=h(`p`,G);t(G,rt),m(rt,`text-gray-600`),t(rt,l(`Rue 以 JSX / TSX 组件表达界面中的可复用片段。组件同时包含结构与逻辑，按需组合即可形成页面或模块。`));let K=h(`div`,G);t(G,K),m(K,`mt-6 grid md:grid-cols-2 gap-6 items-start`);let it=h(`div`,K);t(K,it),m(it,`card bg-base-100 border p-0 overflow-auto h-[360px] md:h-[560px]`);let at=b(`rue:component:anchor`);t(it,at),n(()=>{let e=v(D,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue'

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

export default HelloWorld`});y(()=>f(e,it,at))});let q=h(`div`,K);t(K,q),m(q,`grid gap-6`);let ot=b(`rue:component:anchor`);t(q,ot),f(v(ee,{}),q,ot);let st=b(`rue:component:anchor`);t(q,st),f(v(te,{}),q,st);let ct=b(`rue:component:anchor`);t(q,ct),f(v(ne,{}),q,ct);let lt=b(`rue:component:anchor`);t(q,lt),f(v(re,{}),q,lt);let ut=h(`p`,G);t(G,ut),m(ut,`mt-6 text-gray-600`),t(ut,l(`Rue 的组件强调可复用与可组合，保持清晰的数据与事件流，也方便把交互片段渐进接入现有页面。`));let J=h(`section`,p);t(p,J),m(J,`max-w-[1100px] mx-auto mt-12`);let dt=h(`h2`,J);t(J,dt),m(dt,`text-2xl font-semibold mb-2`),t(dt,l(`Vapor 渲染路径：更贴近真实 DOM 更新模型`));let ft=h(`p`,J);t(J,ft),m(ft,`text-gray-600`),t(ft,l(`Rue 提供默认 Block / Vapor 渲染路径，Vapor 适合需要更高性能、细粒度更新的区域。`));let pt=h(`p`,J);t(J,pt),m(pt,`text-gray-600`),t(pt,l(`结合 Rust 实现的响应式系统、Rust / Wasm 运行时与原生 DOM 编译能力，Vapor 会把 JSX 转换为更贴近真实 DOM 的产物。`));let Y=h(`div`,J);t(J,Y),m(Y,`mt-6 grid md:grid-cols-2 gap-6 items-start`);let mt=h(`div`,Y);t(Y,mt),m(mt,`card bg-base-100 border overflow-auto h-[360px] md:h-[510px]`);let ht=b(`rue:component:anchor`);t(mt,ht),n(()=>{let e=v(D,{className:`h-full`,lang:`tsx`,code:`const Hello: FC = () => (
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

export default HelloWorld`});y(()=>f(e,mt,ht))});let gt=h(`div`,Y);t(Y,gt),m(gt,`card bg-base-100 border p-0 overflow-auto h-[360px] md:h-[510px]`);let _t=b(`rue:component:anchor`);t(gt,_t),n(()=>{let e=v(D,{className:`h-full`,lang:`ts`,code:`/* RUE_VAPOR_TRANSFORMED */
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
export default HelloWorld;`});y(()=>f(e,gt,_t))});let vt=h(`div`,J);t(J,vt),m(vt,`mt-6 space-y-3 text-gray-700`);let yt=h(`p`,vt);t(vt,yt),t(yt,l(`Vapor 渲染路径直接面向原生 DOM，减少额外协调开销；配合细粒度响应式更新，在复杂界面中能保持更稳的性能与内存表现。`));let X=h(`section`,p);t(p,X),m(X,`max-w-[1100px] mx-auto mt-12`);let bt=h(`h2`,X);t(X,bt),m(bt,`text-2xl font-semibold mb-2`),t(bt,l(`React 风格 JSX，Vue 式响应式 API`));let xt=h(`p`,X);t(X,xt),m(xt,`text-gray-600`),t(xt,l(`Rue 适合希望保留 React 风格 JSX，同时获得 Vue 式响应式 API 的项目。你既可以用 useState，也可以用 ref / reactive / computed 来组织交互逻辑。`));let Z=h(`div`,X);t(X,Z),m(Z,`mt-6 grid md:grid-cols-2 gap-6 items-start`);let St=h(`div`,Z);t(Z,St),m(St,`card bg-base-100 border p-0 overflow-auto h-[360px] md:h-[660px]`);let Ct=b(`rue:component:anchor`);t(St,Ct),n(()=>{let e=v(D,{className:`h-full`,lang:`tsx`,code:`import { type FC, useState, ref, reactive, computed } from '@rue-js/rue';

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

export default Reactive;`});y(()=>f(e,St,Ct))});let Q=h(`div`,Z);t(Z,Q),m(Q,`grid gap-6`);let wt=h(`div`,Q);t(Q,wt);let Tt=h(`h3`,wt);t(wt,Tt),m(Tt,`text-lg font-semibold mb-2 text-base-content`),t(Tt,l(`前端的发展，从原始DOM，到 JQUERY等`));let Et=b(`rue:component:anchor`);t(wt,Et),n(()=>{let e=v(ae,{videos:ie});y(()=>f(e,wt,Et))});let $=h(`div`,Q);t(Q,$);let Dt=h(`h3`,$);t($,Dt),m(Dt,`text-lg font-semibold mb-2 text-base-content`),t(Dt,l(`ref / reactive 示例`));let Ot=b(`rue:component:anchor`);t($,Ot),f(v(oe,{}),$,Ot);let kt=h(`p`,X);t(X,kt),m(kt,`mt-6 text-gray-600`),t(kt,l(`Rue 支持渐进集成：你可以在现有页面中按需挂载组件、路由或交互片段，而不必一次性重写整站。`));let At=b(`rue:component:anchor`);t(p,At),n(()=>{let e=v(me,{eyebrow:`Platinum Sponsor`,title:`白金赞助商`,items:ue,actionLabel:`成为赞助商`,actionTo:`/page/sponsor/index`});y(()=>f(e,p,At))});let jt=b(`rue:component:anchor`);t(p,jt),n(()=>{let e=v(me,{eyebrow:`Gold Sponsor`,title:`黄金赞助商`,actionLabel:`成为赞助商`,actionTo:`/page/sponsor/index`,items:de});y(()=>f(e,p,jt))});let Mt=b(`rue:component:anchor`);return t(p,Mt),n(()=>{let e=v(me,{eyebrow:`Links`,title:`友情链接`,items:fe});y(()=>f(e,p,Mt))}),p})};export{j as default};