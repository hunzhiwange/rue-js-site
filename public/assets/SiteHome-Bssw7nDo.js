import{Cn as e,Ct as t,Kt as n,Lt as r,Mt as i,Tt as a,dt as o,ft as s,ht as c,jt as l,mt as u,ot as d,pn as f,pt as p,st as m,tn as h,vn as g,wn as _,wt as v}from"./context-8lXZvIn-.js";import{l as y,o as b,s as x,t as S}from"./vapor-runtime-ygJWVcNn.js";import{a as C,n as w}from"./vapor-helpers-vapor-CMwHgsXf.js";import{n as T}from"./src-DnK6Cdoa.js";import{n as E,t as D}from"./Code-DhoWkRkB.js";var O=e=>y(t=>{let n=p(`div`,t);a(n,`card bg-base-100 border border-base-200 shadow-sm`);let r=p(`div`,n);m(n,r),a(r,`card-body`);let i=p(`div`,r);m(r,i),a(i,`flex items-center gap-3 mb-1`);let s=p(`div`,i);m(i,s),a(s,`w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center`);let c=p(`span`,s);m(s,c),a(c,`text-lg`);let l=o(`rue:slot:anchor`);m(c,l),h(()=>{let t=e.icon||`⚡️`;g(()=>b(t,c,l))});let u=p(`div`,i);m(i,u),a(u,`font-semibold text-base-content`);let d=o(`rue:slot:anchor`);m(u,d),h(()=>{let t=e.title;g(()=>b(t,u,d))});let f=p(`p`,r);m(r,f),a(f,`text-sm text-base-content/70`);let _=o(`rue:slot:anchor`);return m(f,_),h(()=>{let t=e.desc;g(()=>b(t,f,_))}),n}),ee=()=>y(e=>{let t=p(`div`,e);a(t,`card bg-primary text-primary-content shadow-sm`);let n=p(`div`,t);m(t,n),a(n,`card-body items-center text-center`);let r=p(`div`,n);m(n,r),a(r,`text-3xl font-extrabold`),m(r,u(`Hello`));let i=p(`div`,n);return m(n,i),a(i,`mt-2 text-sm opacity-90`),m(i,u(`Hello component`)),t}),te=()=>y(e=>{let t=p(`div`,e);a(t,`card bg-base-100 text-base-content border border-base-200 shadow-sm`);let n=p(`div`,t);m(t,n),a(n,`card-body items-center text-center`);let r=p(`div`,n);m(n,r),a(r,`text-3xl font-extrabold`),m(r,u(`World`));let i=p(`div`,n);return m(n,i),a(i,`mt-2 text-sm text-base-content/70`),m(i,u(`World component`)),t}),ne=()=>y(e=>{let t=p(`div`,e);a(t,`card bg-accent text-accent-content shadow-sm`);let n=p(`div`,t);m(t,n),a(n,`card-body items-center text-center`);let r=p(`div`,n);m(n,r),a(r,`text-3xl font-extrabold`),m(r,u(`Hi`));let i=p(`div`,n);return m(n,i),a(i,`mt-2 text-sm opacity-90`),m(i,u(`Rue`)),t}),re=()=>y(e=>{let t=p(`div`,e);a(t,`card bg-base-100 text-base-content border border-base-200 shadow-sm`);let n=p(`div`,t);m(t,n),a(n,`card-body items-center text-center`);let r=p(`div`,n);m(n,r),a(r,`text-3xl font-extrabold`),m(r,u(`Yes`));let i=p(`div`,n);return m(n,i),a(i,`mt-2 text-sm text-base-content/70`),m(i,u(`My name is Rue`)),t}),ie=[{title:`原始 DOM 编程`,desc:`直接操作节点与事件`},{title:`jQuery 的崛起`,desc:`Write Less, Do More`},{title:`Backbone.js 与 MVC`,desc:`早期前端架构探索`},{title:`Web Components`,desc:`原生组件标准`},{title:`现代构建工具与生态`,desc:`模块化与开发体验`}],k=e=>y(n=>{let r=p(`input`,n);return a(r,`w-full rounded-md border border-base-300 bg-base-100 px-3 py-2 text-base-content shadow-sm focus:border-violet-500 focus:ring focus:ring-violet-200`),h(()=>{l(r,e.value)}),d(r,`input`,t=>e.onChange(t.target.value)),t(r,`placeholder`,`搜索视频`),r}),A=e=>y(n=>{let r=p(`div`,n);a(r,`mt-3 space-y-2`);let i=p(`div`,r);m(r,i),a(i,`text-sm text-base-content/70`);let c=o(`rue:slot:anchor`);m(i,c),h(()=>{let t=e.videos.length;g(()=>b(t,i,c))}),m(i,u(` 个视频`));let l=o(`rue:slot:anchor`);return m(r,l),h(()=>{let n=e.videos.length===0?y(()=>{let t=s(),n=p(`div`,t);m(t,n),a(n,`rounded-md border border-base-300/70 bg-base-100/70 backdrop-blur-sm p-3 text-sm text-base-content/70`);let r=o(`rue:slot:anchor`);return m(n,r),h(()=>{let t=e.emptyHeading||`暂无匹配`;g(()=>b(t,n,r))}),t}):y(()=>{let n=s(),r=p(`ul`,n);m(n,r),a(r,`space-y-2`);let i=o(`rue:list:start`),c=o(`rue:list:end`);m(r,i),m(r,c);let l=new Map;return h(()=>{l=w({items:e.videos||[],getKey:(e,t)=>t,elements:l,parent:r,before:c,singleRoot:!0,start:i,renderItem:(e,n,r,i,c)=>{b(y(()=>{let n=s(),r=p(`li`,n);m(n,r),h(()=>{t(r,`key`,String(c))}),a(r,`rounded-md border border-base-300/70 bg-base-100/70 backdrop-blur-sm p-3`);let i=p(`div`,r);m(r,i),a(i,`font-medium text-base-content`);let l=o(`rue:slot:anchor`);m(i,l),h(()=>{let t=e.title;g(()=>b(t,i,l))});let u=p(`div`,r);m(r,u),a(u,`text-sm text-base-content/70`);let d=o(`rue:slot:anchor`);return m(u,d),h(()=>{let t=e.desc;g(()=>b(t,u,d))}),n}),n,r)}})}),n});g(()=>b(n,r,l))}),r}),ae=t=>{let{searchText:n,setSearchText:i,foundVideos:a}=C(`useSetup:0:0`,()=>e(()=>{let[e,n]=C(`useState:1:0`,()=>_(``));return{searchText:e,setSearchText:n,foundVideos:C(`computed:1:1`,()=>r(()=>t.videos.filter(t=>t.title.toLowerCase().includes(e.value.toLowerCase()))))}}));return y(e=>{let t=s(),r=o(`rue:component:anchor`);m(t,r),h(()=>{let e=S(k,{value:n.value,onChange:i});g(()=>b(e,t,r))});let c=o(`rue:component:anchor`);return m(t,c),h(()=>{let e=S(A,{videos:a.get(),emptyHeading:`没有匹配 “${n.value}”`});g(()=>b(e,t,c))}),t})},oe=()=>{let{count:r,state:o}=C(`useSetup:0:0:dup1`,()=>e(()=>({count:C(`ref:1:2`,()=>f(0)),state:C(`reactive:1:3`,()=>n({enabled:!1}))})));return y(e=>{let n=p(`div`,e);a(n,`rounded-xl border border-base-300/70 bg-base-100/70 backdrop-blur-sm p-4`);let s=p(`div`,n);m(n,s),a(s,`flex items-center gap-3`);let l=p(`button`,s);m(s,l),a(l,`btn btn-primary`),d(l,`click`,()=>r.value++),m(l,u(`+1`));let f=p(`button`,s);m(s,f),a(f,`btn btn-outline`),d(f,`click`,()=>r.value=0),m(f,u(`重置`));let g=p(`label`,s);m(s,g),a(g,`flex items-center gap-2 ml-auto`);let _=p(`input`,g);m(g,_),t(_,`type`,`checkbox`),a(_,`checkbox`),h(()=>{v(_,!!o.enabled)}),d(_,`change`,e=>o.enabled=e.target.checked);let y=p(`span`,g);m(g,y),a(y,`text-sm text-base-content`),m(y,u(`启用`));let b=p(`div`,n);m(n,b),a(b,`mt-2 text-sm text-base-content/70`),m(b,u(`计数：`));let x=c(b);m(b,x),h(()=>{i(x,r.value)}),m(b,u(`，启用：`));let S=c(b);return m(b,S),h(()=>{i(S,o.enabled?`是`:`否`)}),n})},se=()=>{let{count:t}=C(`useSetup:0:0:dup2`,()=>e(()=>({count:C(`ref:1:4`,()=>f(0))})));return y(e=>{let n=p(`div`,e);a(n,`card h-[330px] border border-base-300/70 bg-base-100/80 shadow-sm backdrop-blur-sm`);let r=p(`div`,n);m(n,r),a(r,`card-body flex h-full p-6`);let l=p(`div`,r);m(r,l),a(l,`flex items-start justify-between gap-4`);let f=p(`div`,l);m(l,f);let _=p(`div`,f);m(f,_),a(_,`text-sm uppercase tracking-[0.22em] text-base-content/45`),m(_,u(`Live Demo`));let v=p(`div`,f);m(f,v),a(v,`mt-2 text-sm text-base-content/70`),m(v,u(`一个 ref signal 同时驱动计数和 v-if 条件分支。`));let x=p(`div`,l);m(l,x),a(x,`badge badge-outline badge-lg`);let S=c(x);m(x,S),h(()=>{i(S,t.value)});let C=p(`div`,r);m(r,C),a(C,`mt-6 grid gap-4`);let w=p(`button`,C);m(C,w),a(w,`rounded-xl border border-base-300 bg-base-100 px-4 py-3 text-base font-medium text-base-content shadow-sm transition hover:border-primary hover:text-primary`),d(w,`click`,()=>t.value++),m(w,u(`计数：`));let T=c(w);m(w,T),h(()=>{i(T,t.value)});let E=p(`div`,C);m(C,E),a(E,`min-h-[96px] rounded-2xl border border-base-300/70 bg-base-200/40 p-4`);let D=o(`rue:slot:anchor`);m(E,D),h(()=>{let e=t.value%2==0?y(()=>{let e=s(),t=p(`div`,e);m(e,t),a(t,`flex h-full items-center justify-between gap-3`);let n=p(`div`,t);m(t,n);let r=p(`div`,n);m(n,r),a(r,`font-semibold text-base-content`),m(r,u(`偶数态 UI`));let i=p(`div`,n);m(n,i),a(i,`mt-1 text-sm text-base-content/70`),m(i,u(`当前展示欢迎提示卡片。`));let o=p(`span`,t);return m(t,o),a(o,`badge badge-info badge-lg`),m(o,u(`v-if`)),e}):y(()=>{let e=s(),t=p(`div`,e);m(e,t),a(t,`flex h-full items-center justify-between gap-3`);let n=p(`div`,t);m(t,n);let r=p(`div`,n);m(n,r),a(r,`font-semibold text-base-content`),m(r,u(`奇数态 UI`));let i=p(`div`,n);m(n,i),a(i,`mt-1 text-sm text-base-content/70`),m(i,u(`signal 更新后切到另一套界面。`));let o=p(`span`,t);return m(t,o),a(o,`badge badge-success badge-lg`),m(o,u(`v-else`)),e});g(()=>b(e,E,D))});let O=p(`div`,r);return m(r,O),a(O,`mt-auto text-xs tracking-[0.16em] text-base-content/45`),m(O,u(`点击按钮时，下面的两个 UI 会跟着 signal 一起切换。`)),n})},ce=`import { type FC, ref } from '@rue-js/rue'

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

export default App`,le=[{id:`npm`,label:`npm`,command:`npm create rue@latest`},{id:`pnpm`,label:`pnpm`,command:`pnpm create rue@latest`},{id:`bun`,label:`bun`,command:`bun create rue@latest`},{id:`yarn`,label:`yarn`,command:`yarn dlx create-rue@latest`}],ue=[{name:`虚位以待`,href:`/page/sponsor/index`,description:`期待与你一起支持 Rue 生态建设。`}],de=[{name:`虚位以待`,href:`/page/sponsor/index`,description:`欢迎加入 Rue 赞助计划。`}],fe=[{name:`QueryPHP`,href:`https://www.queryphp.com`,description:`现代化 PHP 开发框架`},{name:`VibeWindow`,href:`https://vibewindow.huododo.com/#/`,description:`氛围视窗软件智能体`},{name:`订货宝`,href:`https://www.dhb168.com/?from=ruejs`,description:`经销商订货系统与批发贸易订货平台`},{name:`Vercel`,href:`https://vercel.com`,description:`云部署与前端基础设施`}],pe=[{title:`i18n 国际化插件`,desc:`直接展示源文本即 key、局部插值和按需懒加载语言包的完整链路。`,to:`/examples/i18n-switcher`,eyebrow:`I18n Demo`,accentClassName:`border-emerald-200 bg-linear-to-br from-emerald-500/12 via-base-100 to-teal-500/10 hover:border-emerald-400/60`},{title:`路由插件`,desc:`集中看嵌套路由、守卫、redirect 和实验页在真实页面里的组合方式。`,to:`/examples/router-demo/guide/router/overview`,eyebrow:`Router Demo`,accentClassName:`border-sky-200 bg-linear-to-br from-sky-500/12 via-base-100 to-cyan-500/10 hover:border-sky-400/60`},{title:`数据状态与 URL 同步插件`,desc:`把 Store、筛选条件和查询串连起来，观察状态如何驱动可分享链接。`,to:`/examples/store-query-sync`,eyebrow:`State Demo`,accentClassName:`border-amber-200 bg-linear-to-br from-amber-500/12 via-base-100 to-orange-500/10 hover:border-amber-400/60`},{title:`Text.js 全栈应用框架`,desc:`基于 Vite、Rue、RSC 与文件系统路由，了解 App Router、SSR、API 路由和 Workers 部署。`,to:`/textjs`,eyebrow:`Full-stack`,accentClassName:`border-cyan-200 bg-linear-to-br from-cyan-500/12 via-base-100 to-blue-500/10 hover:border-cyan-400/60`}],me=e=>y(n=>{let r=p(`section`,n);a(r,`max-w-[1100px] mx-auto mt-8`);let i=p(`div`,r);m(r,i),a(i,`flex flex-col gap-3 md:flex-row md:items-end md:justify-between`);let c=p(`div`,i);m(i,c);let l=p(`div`,c);m(c,l),a(l,`text-sm font-semibold uppercase tracking-[0.24em] text-base-content/45`);let u=o(`rue:slot:anchor`);m(l,u),h(()=>{let t=e.eyebrow;g(()=>b(t,l,u))});let d=p(`h2`,c);m(c,d),a(d,`mt-2 text-3xl font-semibold text-base-content`);let f=o(`rue:slot:anchor`);m(d,f),h(()=>{let t=e.title;g(()=>b(t,d,f))});let _=o(`rue:slot:anchor`);m(i,_),h(()=>{let t=e.actionLabel&&e.actionTo?y(()=>{let t=s(),n=o(`rue:component:anchor`);return m(t,n),h(()=>{let r=S(T,{to:e.actionTo,className:`btn btn-outline self-start md:self-auto`,children:e.actionLabel});g(()=>b(r,t,n))}),t}):``;g(()=>b(t,i,_))});let v=p(`div`,r);m(r,v),h(()=>{a(v,`mt-5 grid gap-4 ${e.items.length>1?`md:grid-cols-2`:``}`)});let x=o(`rue:list:start`),C=o(`rue:list:end`);m(v,x),m(v,C);let E=new Map;return h(()=>{E=w({items:e.items||[],getKey:(e,t)=>e.name,elements:E,parent:v,before:C,singleRoot:!0,trackIndex:!1,start:x,renderItem:(e,n,r,i,c)=>{b(y(()=>{let n=s(),r=p(`a`,n);m(n,r),h(()=>{t(r,`key`,String(e.name))}),h(()=>{t(r,`href`,String(e.href))}),t(r,`target`,`_blank`),t(r,`rel`,`noreferrer`),a(r,`group rounded-[1.5rem] border border-base-200 bg-base-100/90 p-5 transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg`);let i=p(`div`,r);m(r,i),a(i,`flex min-h-[116px] flex-col justify-center gap-4`);let c=p(`div`,i);m(i,c);let l=p(`div`,c);m(c,l),a(l,`text-3xl font-semibold tracking-tight text-base-content`);let u=o(`rue:slot:anchor`);m(l,u),h(()=>{let t=e.name;g(()=>b(t,l,u))});let d=p(`p`,c);m(c,d),a(d,`mt-3 max-w-[30ch] text-base leading-7 text-base-content/65`);let f=o(`rue:slot:anchor`);return m(d,f),h(()=>{let t=e.description;g(()=>b(t,d,f))}),n}),n,r)}})}),r}),j=()=>{let{activeCreateCommand:n,selectedCreateCommand:l,createCommandCopy:_}=C(`useSetup:0:0:dup3`,()=>e(()=>{let e=C(`ref:1:5`,()=>f(`npm`)),t=C(`computed:1:6`,()=>r(()=>le.find(t=>t.id===e.value)??le[0]));return{activeCreateCommand:e,selectedCreateCommand:t,createCommandCopy:C(`computed:1:7`,()=>r(()=>E(()=>t.get().command)))}}));return y(e=>{let r=s(),f=p(`section`,r);m(r,f),a(f,`relative rounded-2xl bg-gr2adient-to-br from-violet-50 to-fuchsia-50 p-12 mb-10`);let v=p(`div`,f);m(f,v),a(v,`absolute -top-24 -left-24 w-96 h-96 rounded-full bg-violet-200/40 blur-3xl`);let C=p(`div`,f);m(f,C),a(C,`absolute -bottom-24 -right-24 w-md h-112 rounded-full bg-fuchsia-200/40 blur-3xl`);let E=p(`div`,f);m(f,E),a(E,`relative max-w-[1100px] mx-auto text-center`);let k=p(`div`,E);m(E,k),a(k,`hover-3d`);let A=p(`figure`,k);m(k,A);let j=p(`div`,A);m(A,j),t(j,`class`,`mx-auto w-full px-6 pb-4 text-center`);let M=p(`div`,j);m(j,M),t(M,`class`,`flex select-none items-end justify-center gap-6 whitespace-nowrap text-[clamp(6rem,21vw,16rem)] font-black leading-none bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent md:gap-10`);let he=p(`span`,M);m(M,he),m(he,u(`Rue`));let ge=p(`span`,M);m(M,ge),t(ge,`class`,`pl-1`),m(ge,u(`.JS`));let N=p(`div`,A);m(A,N),a(N,`inline-flex items-center justify-center gap-3`);let _e=p(`span`,N);m(N,_e),a(_e,`inline-flex items-center justify-center w-28 h-28 md:w-30 md:h-30 rounded-full bg-linear-to-br from-sky-500 via-cyan-400 to-emerald-300 shadow-md ring-1 ring-white/15`);let ve=p(`span`,_e);m(_e,ve),a(ve,`text-black font-extrabold text-[28px] md:text-[112px] leading-none drop-shadow-none`),m(ve,u(`T`));let ye=p(`span`,N);m(N,ye),a(ye,`text-[44px] md:text-[95px] font-extrabold tracking-tight bg-linear-to-r from-sky-500 via-cyan-400 to-emerald-300 bg-clip-text text-transparent`),m(ye,u(`he Wasm`));let be=p(`div`,A);m(A,be),a(be,`mt-2 text-[44px] md:text-[62px] font-extrabold tracking-tight bg-linear-to-r from-sky-400 via-cyan-300 to-teal-200 bg-clip-text text-transparent`),m(be,u(`Framework For Native DOM`));let xe=p(`p`,A);m(A,xe),a(xe,`mt-6 text-lg md:text-xl text-base-content/70`),m(xe,u(`Rust 运行时，Rust 响应式系统，Rust 原生 DOM 编译器`)),m(k,p(`div`,k)),m(k,p(`div`,k)),m(k,p(`div`,k)),m(k,p(`div`,k)),m(k,p(`div`,k)),m(k,p(`div`,k)),m(k,p(`div`,k)),m(k,p(`div`,k));let P=p(`div`,E);m(E,P),a(P,`mt-8 flex flex-wrap justify-center gap-3`);let Se=o(`rue:component:anchor`);m(P,Se),b(S(T,{to:`/guide/guide/quick-start`,className:`btn btn-primary btn-lg`,children:`快速上手`}),P,Se);let Ce=o(`rue:component:anchor`);m(P,Ce),b(S(T,{to:`/guide/guide/introduction`,className:`btn btn-outline btn-lg`,children:`文档`}),P,Ce);let we=o(`rue:component:anchor`);m(P,we),b(S(T,{to:`/api/api/index`,className:`btn btn-outline btn-lg`,children:`API`}),P,we);let Te=p(`a`,P);m(P,Te),t(Te,`href`,`https://github.com/hunzhiwange/ruejs`),t(Te,`target`,`_blank`),a(Te,`btn btn-outline btn-lg`),m(Te,u(`Github`));let F=p(`div`,E);m(E,F),a(F,`mx-auto mt-18 max-w-[900px] rounded-2xl border border-white/60 bg-slate-950/90 p-4 text-left shadow-xl shadow-fuchsia-200/40`);let I=p(`div`,F);m(F,I),a(I,`mb-3 flex flex-wrap items-center justify-between gap-3`);let L=p(`div`,I);m(I,L),a(L,`flex items-center gap-2`);let Ee=p(`span`,L);m(L,Ee),a(Ee,`h-3 w-3 rounded-full bg-rose-400`);let De=p(`span`,L);m(L,De),a(De,`h-3 w-3 rounded-full bg-amber-400`);let Oe=p(`span`,L);m(L,Oe),a(Oe,`h-3 w-3 rounded-full bg-emerald-400`);let ke=p(`span`,L);m(L,ke),a(ke,`ml-2 text-xs uppercase tracking-[0.24em] text-white/45`),m(ke,u(`Quick Start`));let R=p(`div`,I);m(I,R),a(R,`inline-flex rounded-xl border border-white/10 bg-white/5 p-1`),t(R,`role`,`tablist`),t(R,`aria-label`,`选择创建命令`);let Ae=o(`rue:list:start`),je=o(`rue:list:end`);m(R,Ae),m(R,je);let Me=new Map;h(()=>{Me=w({items:le||[],getKey:(e,t)=>e.id,elements:Me,parent:R,before:je,singleRoot:!0,trackIndex:!1,start:Ae,renderItem:(e,r,i,c,l)=>{b(y(()=>{let r=s(),i=p(`button`,r);m(r,i),h(()=>{t(i,`key`,String(e.id))}),t(i,`type`,`button`),t(i,`role`,`tab`),h(()=>{t(i,`aria-selected`,String(n.value===e.id))}),h(()=>{a(i,`rounded-lg px-3 py-1.5 text-xs font-medium transition ${n.value===e.id?`bg-white text-slate-950 shadow-sm`:`text-white/65 hover:text-white`}`)}),d(i,`click`,()=>{n.value=e.id});let c=o(`rue:slot:anchor`);return m(i,c),h(()=>{let t=e.label;g(()=>b(t,i,c))}),r}),r,i)}})});let z=p(`div`,F);m(F,z),a(z,`flex flex-col gap-3 md:flex-row md:items-center`);let Ne=p(`pre`,z);m(z,Ne),a(Ne,`min-w-0 flex-1 overflow-x-auto text-sm text-white/92 md:text-base`);let Pe=p(`code`,Ne);m(Ne,Pe),m(Pe,u(`$ `));let Fe=o(`rue:slot:anchor`);m(Pe,Fe),h(()=>{let e=l.get().command;g(()=>b(e,Pe,Fe))});let B=p(`button`,z);m(z,B),t(B,`type`,`button`),h(()=>{a(B,`shrink-0 rounded-xl border px-3 py-2 text-xs font-medium transition ${_.get().copied.value?`border-emerald-300/30 bg-emerald-400/15 text-emerald-100`:`border-white/10 bg-white/5 text-white/75 hover:bg-white/10 hover:text-white`}`)}),h(()=>{t(B,`aria-label`,String(`复制 ${l.get().label} 创建命令`))}),d(B,`click`,_.get().handleCopy);let Ie=c(B);m(B,Ie),h(()=>{i(Ie,_.get().copied.value?`已复制`:`复制`)});let V=p(`section`,r);m(r,V),a(V,`grid md:grid-cols-3 gap-6 max-w-[1100px] mx-auto`);let Le=o(`rue:component:anchor`);m(V,Le),b(S(O,{title:`简洁易用`,desc:`轻量、直观的 API，适合渐进式接入；保留熟悉的 JSX / TSX 开发方式，无需额外模板语法。`,icon:`✅`}),V,Le);let Re=o(`rue:component:anchor`);m(V,Re),b(S(O,{title:`编译驱动的原生 DOM 渲染`,desc:`围绕真实 DOM 做最小更新，并可结合 Rust / Wasm 运行时扩展与原生 DOM 编译能力。`,icon:`🦀`}),V,Re);let ze=o(`rue:component:anchor`);m(V,ze),b(S(O,{title:`React JSX + Vue 式响应式`,desc:`适合希望保留 React 风格 JSX，同时获得 ref、reactive、computed 等 Vue 式响应式 API 的项目。`,icon:`🤝`}),V,ze);let Be=p(`section`,r);m(r,Be),a(Be,`max-w-[1100px] mx-auto mt-12`);let H=p(`div`,Be);m(Be,H),a(H,`mt-6 grid md:grid-cols-2 gap-6 items-stretch`);let Ve=p(`div`,H);m(H,Ve),a(Ve,`card bg-base-100 border p-0 overflow-auto h-[330px]`);let He=o(`rue:component:anchor`);m(Ve,He),h(()=>{let e=S(D,{className:`h-full`,lang:`tsx`,code:ce});g(()=>b(e,Ve,He))});let Ue=o(`rue:component:anchor`);m(H,Ue),b(S(se,{}),H,Ue);let We=p(`section`,r);m(r,We),a(We,`mt-12 rounded-2xl p-8 bg-linear-to-br from-pink-500/80 to-fuchsia-500/80 text-white ring-1 ring-white/30 shadow-lg max-w-[1100px] mx-auto`);let U=p(`div`,We);m(We,U),a(U,`md:flex items-center justify-between`);let Ge=p(`div`,U);m(U,Ge);let Ke=p(`h2`,Ge);m(Ge,Ke),a(Ke,`text-2xl font-semibold mb-2 text-white`),m(Ke,u(`生态与插件`));let qe=p(`p`,Ge);m(Ge,qe),a(qe,`text-white/90`),m(qe,u(`官方路由、设计组件库与构建插件协同工作，也支持渐进式接入现有应用。`));let W=p(`div`,U);m(U,W),a(W,`mt-4 md:mt-0 flex gap-3`);let Je=o(`rue:component:anchor`);m(W,Je),b(S(T,{to:`/plugins`,className:`btn btn-outline`,children:`插件`}),W,Je);let Ye=o(`rue:component:anchor`);m(W,Ye),b(S(T,{to:`/design/button`,className:`btn btn-outline`,children:`组件库`}),W,Ye);let Xe=o(`rue:component:anchor`);m(W,Xe),b(S(T,{to:`/textjs`,className:`btn btn-outline`,children:`Text.js`}),W,Xe);let Ze=p(`section`,r);m(r,Ze),a(Ze,`max-w-[1100px] mx-auto mt-8`);let Qe=p(`div`,Ze);m(Ze,Qe),a(Qe,`mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4`);let $e=o(`rue:list:start`),et=o(`rue:list:end`);m(Qe,$e),m(Qe,et);let tt=new Map;h(()=>{tt=w({items:pe||[],getKey:(e,t)=>e.to,elements:tt,parent:Qe,before:et,start:$e,renderItem:(e,t,n,r,i)=>{let c=y(()=>{let t=s(),n=p(`div`,t);m(t,n),a(n,`text-xs font-semibold uppercase tracking-[0.22em] text-base-content/55`);let r=o(`rue:slot:anchor`);m(n,r),h(()=>{let t=e.eyebrow;g(()=>b(t,n,r))});let i=p(`div`,t);m(t,i),a(i,`mt-3 text-xl font-semibold text-base-content`);let c=o(`rue:slot:anchor`);m(i,c),h(()=>{let t=e.title;g(()=>b(t,i,c))});let l=p(`p`,t);m(t,l),a(l,`mt-2 text-sm leading-6 text-base-content/72`);let d=o(`rue:slot:anchor`);m(l,d),h(()=>{let t=e.desc;g(()=>b(t,l,d))});let f=p(`div`,t);return m(t,f),a(f,`mt-4 text-sm font-medium text-base-content/88`),m(f,u(`打开 Demo`)),t});x(S(T,{key:e.to,to:e.to,className:`group rounded-[1.5rem] border p-5 text-left text-base-content transition hover:-translate-y-0.5 hover:shadow-xl ${e.accentClassName}`,children:c}),t,n,r)}})});let G=p(`section`,r);m(r,G),a(G,`max-w-[1100px] mx-auto mt-12`);let nt=p(`h2`,G);m(G,nt),a(nt,`text-2xl font-semibold mb-2`),m(nt,u(`用组件组织界面`));let rt=p(`p`,G);m(G,rt),a(rt,`text-gray-600`),m(rt,u(`Rue 以 JSX / TSX 组件表达界面中的可复用片段。组件同时包含结构与逻辑，按需组合即可形成页面或模块。`));let K=p(`div`,G);m(G,K),a(K,`mt-6 grid md:grid-cols-2 gap-6 items-start`);let it=p(`div`,K);m(K,it),a(it,`card bg-base-100 border p-0 overflow-auto h-[360px] md:h-[560px]`);let at=o(`rue:component:anchor`);m(it,at),h(()=>{let e=S(D,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue'

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

export default HelloWorld`});g(()=>b(e,it,at))});let q=p(`div`,K);m(K,q),a(q,`grid gap-6`);let ot=o(`rue:component:anchor`);m(q,ot),b(S(ee,{}),q,ot);let st=o(`rue:component:anchor`);m(q,st),b(S(te,{}),q,st);let ct=o(`rue:component:anchor`);m(q,ct),b(S(ne,{}),q,ct);let lt=o(`rue:component:anchor`);m(q,lt),b(S(re,{}),q,lt);let ut=p(`p`,G);m(G,ut),a(ut,`mt-6 text-gray-600`),m(ut,u(`Rue 的组件强调可复用与可组合，保持清晰的数据与事件流，也方便把交互片段渐进接入现有页面。`));let J=p(`section`,r);m(r,J),a(J,`max-w-[1100px] mx-auto mt-12`);let dt=p(`h2`,J);m(J,dt),a(dt,`text-2xl font-semibold mb-2`),m(dt,u(`细粒度响应式：更贴近真实 DOM 更新模型`));let ft=p(`p`,J);m(J,ft),a(ft,`text-gray-600`),m(ft,u(`Rue 的组件、状态和默认渲染路径都建立在细粒度响应式系统之上，依赖变化后只接管受影响的更新边界。`));let pt=p(`p`,J);m(J,pt),a(pt,`text-gray-600`),m(pt,u(`结合 Rust 实现的响应式系统、Rust / Wasm 运行时与原生 DOM 编译能力，JSX 会被转换为更贴近真实 DOM 的产物。`));let Y=p(`div`,J);m(J,Y),a(Y,`mt-6 grid md:grid-cols-2 gap-6 items-start`);let mt=p(`div`,Y);m(Y,mt),a(mt,`card bg-base-100 border overflow-auto h-[360px] md:h-[510px]`);let ht=o(`rue:component:anchor`);m(mt,ht),h(()=>{let e=S(D,{className:`h-full`,lang:`tsx`,code:`const Hello: FC = () => (
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

export default HelloWorld`});g(()=>b(e,mt,ht))});let gt=p(`div`,Y);m(Y,gt),a(gt,`card bg-base-100 border p-0 overflow-auto h-[360px] md:h-[510px]`);let _t=o(`rue:component:anchor`);m(gt,_t),h(()=>{let e=S(D,{className:`h-full`,lang:`ts`,code:`/* RUE_VAPOR_TRANSFORMED */
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
export default HelloWorld;`});g(()=>b(e,gt,_t))});let vt=p(`div`,J);m(J,vt),a(vt,`mt-6 space-y-3 text-gray-700`);let yt=p(`p`,vt);m(vt,yt),m(yt,u(`Vapor 渲染路径直接面向原生 DOM，减少额外协调开销；配合细粒度响应式更新，在复杂界面中能保持更稳的性能与内存表现。`));let X=p(`section`,r);m(r,X),a(X,`max-w-[1100px] mx-auto mt-12`);let bt=p(`h2`,X);m(X,bt),a(bt,`text-2xl font-semibold mb-2`),m(bt,u(`React 风格 JSX，Vue 式响应式 API`));let xt=p(`p`,X);m(X,xt),a(xt,`text-gray-600`),m(xt,u(`Rue 适合希望保留 React 风格 JSX，同时获得 Vue 式响应式 API 的项目。你既可以用 useState，也可以用 ref / reactive / computed 来组织交互逻辑。`));let Z=p(`div`,X);m(X,Z),a(Z,`mt-6 grid md:grid-cols-2 gap-6 items-start`);let St=p(`div`,Z);m(Z,St),a(St,`card bg-base-100 border p-0 overflow-auto h-[360px] md:h-[660px]`);let Ct=o(`rue:component:anchor`);m(St,Ct),h(()=>{let e=S(D,{className:`h-full`,lang:`tsx`,code:`import { type FC, useState, ref, reactive, computed } from '@rue-js/rue';

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

export default Reactive;`});g(()=>b(e,St,Ct))});let Q=p(`div`,Z);m(Z,Q),a(Q,`grid gap-6`);let wt=p(`div`,Q);m(Q,wt);let Tt=p(`h3`,wt);m(wt,Tt),a(Tt,`text-lg font-semibold mb-2 text-base-content`),m(Tt,u(`前端的发展，从原始DOM，到 JQUERY等`));let Et=o(`rue:component:anchor`);m(wt,Et),h(()=>{let e=S(ae,{videos:ie});g(()=>b(e,wt,Et))});let $=p(`div`,Q);m(Q,$);let Dt=p(`h3`,$);m($,Dt),a(Dt,`text-lg font-semibold mb-2 text-base-content`),m(Dt,u(`ref / reactive 示例`));let Ot=o(`rue:component:anchor`);m($,Ot),b(S(oe,{}),$,Ot);let kt=p(`p`,X);m(X,kt),a(kt,`mt-6 text-gray-600`),m(kt,u(`Rue 支持渐进集成：你可以在现有页面中按需挂载组件、路由或交互片段，而不必一次性重写整站。`));let At=o(`rue:component:anchor`);m(r,At),h(()=>{let e=S(me,{eyebrow:`Platinum Sponsor`,title:`白金赞助商`,items:ue,actionLabel:`成为赞助商`,actionTo:`/page/sponsor/index`});g(()=>b(e,r,At))});let jt=o(`rue:component:anchor`);m(r,jt),h(()=>{let e=S(me,{eyebrow:`Gold Sponsor`,title:`黄金赞助商`,actionLabel:`成为赞助商`,actionTo:`/page/sponsor/index`,items:de});g(()=>b(e,r,jt))});let Mt=o(`rue:component:anchor`);return m(r,Mt),h(()=>{let e=S(me,{eyebrow:`Links`,title:`友情链接`,items:fe});g(()=>b(e,r,Mt))}),r})};export{j as default};