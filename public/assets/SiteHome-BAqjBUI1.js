import{$ as e,Et as t,Q as n,Qt as r,Wt as i,X as a,Xt as o,Y as s,Yt as c,ct as l,et as u,ht as d,l as f,lt as p,mt as m,nt as h,o as g,s as _,st as v,t as y,tt as b,vt as x,zt as S}from"./vapor-runtime-CXIalONM.js";import{a as C,n as w}from"./vapor-helpers-vapor-CoXKrGmY.js";import{n as T}from"./src-5SIVqI72.js";import{n as E,t as D}from"./Code-BIscIyEp.js";var O=e=>f(t=>{let o=u(`div`,t);p(o,`card bg-base-100 border border-base-200 shadow-sm`);let s=u(`div`,o);a(o,s),p(s,`card-body`);let c=u(`div`,s);a(s,c),p(c,`flex items-center gap-3 mb-1`);let l=u(`div`,c);a(c,l),p(l,`w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center`);let d=u(`span`,l);a(l,d),p(d,`text-lg`);let f=n(`rue:slot:anchor`);a(d,f),r(()=>{let t=e.icon||`⚡️`;i(()=>g(t,d,f))});let m=u(`div`,c);a(c,m),p(m,`font-semibold text-base-content`);let h=n(`rue:slot:anchor`);a(m,h),r(()=>{let t=e.title;i(()=>g(t,m,h))});let _=u(`p`,s);a(s,_),p(_,`text-sm text-base-content/70`);let v=n(`rue:slot:anchor`);return a(_,v),r(()=>{let t=e.desc;i(()=>g(t,_,v))}),o}),ee=()=>f(e=>{let t=u(`div`,e);p(t,`card bg-primary text-primary-content shadow-sm`);let n=u(`div`,t);a(t,n),p(n,`card-body items-center text-center`);let r=u(`div`,n);a(n,r),p(r,`text-3xl font-extrabold`),a(r,b(`Hello`));let i=u(`div`,n);return a(n,i),p(i,`mt-2 text-sm opacity-90`),a(i,b(`Hello component`)),t}),te=()=>f(e=>{let t=u(`div`,e);p(t,`card bg-base-100 text-base-content border border-base-200 shadow-sm`);let n=u(`div`,t);a(t,n),p(n,`card-body items-center text-center`);let r=u(`div`,n);a(n,r),p(r,`text-3xl font-extrabold`),a(r,b(`World`));let i=u(`div`,n);return a(n,i),p(i,`mt-2 text-sm text-base-content/70`),a(i,b(`World component`)),t}),ne=()=>f(e=>{let t=u(`div`,e);p(t,`card bg-accent text-accent-content shadow-sm`);let n=u(`div`,t);a(t,n),p(n,`card-body items-center text-center`);let r=u(`div`,n);a(n,r),p(r,`text-3xl font-extrabold`),a(r,b(`Hi`));let i=u(`div`,n);return a(n,i),p(i,`mt-2 text-sm opacity-90`),a(i,b(`Rue`)),t}),re=()=>f(e=>{let t=u(`div`,e);p(t,`card bg-base-100 text-base-content border border-base-200 shadow-sm`);let n=u(`div`,t);a(t,n),p(n,`card-body items-center text-center`);let r=u(`div`,n);a(n,r),p(r,`text-3xl font-extrabold`),a(r,b(`Yes`));let i=u(`div`,n);return a(n,i),p(i,`mt-2 text-sm text-base-content/70`),a(i,b(`My name is Rue`)),t}),ie=[{title:`原始 DOM 编程`,desc:`直接操作节点与事件`},{title:`jQuery 的崛起`,desc:`Write Less, Do More`},{title:`Backbone.js 与 MVC`,desc:`早期前端架构探索`},{title:`Web Components`,desc:`原生组件标准`},{title:`现代构建工具与生态`,desc:`模块化与开发体验`}],k=e=>f(t=>{let n=u(`input`,t);return p(n,`w-full rounded-md border border-base-300 bg-base-100 px-3 py-2 text-base-content shadow-sm focus:border-violet-500 focus:ring focus:ring-violet-200`),r(()=>{m(n,e.value)}),s(n,`input`,t=>e.onChange(t.target.value)),v(n,`placeholder`,`搜索视频`),n}),A=t=>f(o=>{let s=u(`div`,o);p(s,`mt-3 space-y-2`);let c=u(`div`,s);a(s,c),p(c,`text-sm text-base-content/70`);let l=n(`rue:slot:anchor`);a(c,l),r(()=>{let e=t.videos.length;i(()=>g(e,c,l))}),a(c,b(` 个视频`));let d=n(`rue:slot:anchor`);return a(s,d),r(()=>{let o=t.videos.length===0?f(()=>{let o=e(),s=u(`div`,o);a(o,s),p(s,`rounded-md border border-base-300/70 bg-base-100/70 backdrop-blur-sm p-3 text-sm text-base-content/70`);let c=n(`rue:slot:anchor`);return a(s,c),r(()=>{let e=t.emptyHeading||`暂无匹配`;i(()=>g(e,s,c))}),o}):f(()=>{let o=e(),s=u(`ul`,o);a(o,s),p(s,`space-y-2`);let c=n(`rue:list:start`),l=n(`rue:list:end`);a(s,c),a(s,l);let d=new Map;return r(()=>{d=w({items:t.videos||[],getKey:(e,t)=>t,elements:d,parent:s,before:l,singleRoot:!0,start:c,renderItem:(t,o,s,c,l)=>{g(f(()=>{let o=e(),s=u(`li`,o);a(o,s),r(()=>{v(s,`key`,String(l))}),p(s,`rounded-md border border-base-300/70 bg-base-100/70 backdrop-blur-sm p-3`);let c=u(`div`,s);a(s,c),p(c,`font-medium text-base-content`);let d=n(`rue:slot:anchor`);a(c,d),r(()=>{let e=t.title;i(()=>g(e,c,d))});let f=u(`div`,s);a(s,f),p(f,`text-sm text-base-content/70`);let m=n(`rue:slot:anchor`);return a(f,m),r(()=>{let e=t.desc;i(()=>g(e,f,m))}),o}),o,s)}})}),o});i(()=>g(o,s,d))}),s}),ae=t=>{let{searchText:s,setSearchText:l,foundVideos:u}=C(`useSetup:0:0`,()=>c(()=>{let[e,n]=C(`useState:1:0`,()=>o(``));return{searchText:e,setSearchText:n,foundVideos:C(`computed:1:1`,()=>x(()=>t.videos.filter(t=>t.title.toLowerCase().includes(e.value.toLowerCase()))))}}));return f(t=>{let o=e(),c=n(`rue:component:anchor`);a(o,c),r(()=>{let e=y(k,{value:s.value,onChange:l});i(()=>g(e,o,c))});let d=n(`rue:component:anchor`);return a(o,d),r(()=>{let e=y(A,{videos:u.get(),emptyHeading:`没有匹配 “${s.value}”`});i(()=>g(e,o,d))}),o})},oe=()=>{let{count:e,state:n}=C(`useSetup:0:0:dup1`,()=>c(()=>({count:C(`ref:1:2`,()=>S(0)),state:C(`reactive:1:3`,()=>t({enabled:!1}))})));return f(t=>{let i=u(`div`,t);p(i,`rounded-xl border border-base-300/70 bg-base-100/70 backdrop-blur-sm p-4`);let o=u(`div`,i);a(i,o),p(o,`flex items-center gap-3`);let c=u(`button`,o);a(o,c),p(c,`btn btn-primary`),s(c,`click`,()=>e.value++),a(c,b(`+1`));let f=u(`button`,o);a(o,f),p(f,`btn btn-outline`),s(f,`click`,()=>e.value=0),a(f,b(`重置`));let m=u(`label`,o);a(o,m),p(m,`flex items-center gap-2 ml-auto`);let g=u(`input`,m);a(m,g),v(g,`type`,`checkbox`),p(g,`checkbox`),r(()=>{l(g,!!n.enabled)}),s(g,`change`,e=>n.enabled=e.target.checked);let _=u(`span`,m);a(m,_),p(_,`text-sm text-base-content`),a(_,b(`启用`));let y=u(`div`,i);a(i,y),p(y,`mt-2 text-sm text-base-content/70`),a(y,b(`计数：`));let x=h(y);a(y,x),r(()=>{d(x,e.value)}),a(y,b(`，启用：`));let S=h(y);return a(y,S),r(()=>{d(S,n.enabled?`是`:`否`)}),i})},se=()=>{let{count:t}=C(`useSetup:0:0:dup2`,()=>c(()=>({count:C(`ref:1:4`,()=>S(0))})));return f(o=>{let c=u(`div`,o);p(c,`card h-[330px] border border-base-300/70 bg-base-100/80 shadow-sm backdrop-blur-sm`);let l=u(`div`,c);a(c,l),p(l,`card-body flex h-full p-6`);let m=u(`div`,l);a(l,m),p(m,`flex items-start justify-between gap-4`);let _=u(`div`,m);a(m,_);let v=u(`div`,_);a(_,v),p(v,`text-sm uppercase tracking-[0.22em] text-base-content/45`),a(v,b(`Live Demo`));let y=u(`div`,_);a(_,y),p(y,`mt-2 text-sm text-base-content/70`),a(y,b(`一个 ref signal 同时驱动计数和 v-if 条件分支。`));let x=u(`div`,m);a(m,x),p(x,`badge badge-outline badge-lg`);let S=h(x);a(x,S),r(()=>{d(S,t.value)});let C=u(`div`,l);a(l,C),p(C,`mt-6 grid gap-4`);let w=u(`button`,C);a(C,w),p(w,`rounded-xl border border-base-300 bg-base-100 px-4 py-3 text-base font-medium text-base-content shadow-sm transition hover:border-primary hover:text-primary`),s(w,`click`,()=>t.value++),a(w,b(`计数：`));let T=h(w);a(w,T),r(()=>{d(T,t.value)});let E=u(`div`,C);a(C,E),p(E,`min-h-[96px] rounded-2xl border border-base-300/70 bg-base-200/40 p-4`);let D=n(`rue:slot:anchor`);a(E,D),r(()=>{let n=t.value%2==0?f(()=>{let t=e(),n=u(`div`,t);a(t,n),p(n,`flex h-full items-center justify-between gap-3`);let r=u(`div`,n);a(n,r);let i=u(`div`,r);a(r,i),p(i,`font-semibold text-base-content`),a(i,b(`偶数态 UI`));let o=u(`div`,r);a(r,o),p(o,`mt-1 text-sm text-base-content/70`),a(o,b(`当前展示欢迎提示卡片。`));let s=u(`span`,n);return a(n,s),p(s,`badge badge-info badge-lg`),a(s,b(`v-if`)),t}):f(()=>{let t=e(),n=u(`div`,t);a(t,n),p(n,`flex h-full items-center justify-between gap-3`);let r=u(`div`,n);a(n,r);let i=u(`div`,r);a(r,i),p(i,`font-semibold text-base-content`),a(i,b(`奇数态 UI`));let o=u(`div`,r);a(r,o),p(o,`mt-1 text-sm text-base-content/70`),a(o,b(`signal 更新后切到另一套界面。`));let s=u(`span`,n);return a(n,s),p(s,`badge badge-success badge-lg`),a(s,b(`v-else`)),t});i(()=>g(n,E,D))});let O=u(`div`,l);return a(l,O),p(O,`mt-auto text-xs tracking-[0.16em] text-base-content/45`),a(O,b(`点击按钮时，下面的两个 UI 会跟着 signal 一起切换。`)),c})},ce=`import { type FC, ref } from '@rue-js/rue'

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

export default App`,le=[{id:`npm`,label:`npm`,command:`npm create rue@latest`},{id:`pnpm`,label:`pnpm`,command:`pnpm create rue@latest`},{id:`bun`,label:`bun`,command:`bun create rue@latest`},{id:`yarn`,label:`yarn`,command:`yarn dlx create-rue@latest`}],ue=[{name:`虚位以待`,href:`/page/sponsor/index`,description:`期待与你一起支持 Rue 生态建设。`}],de=[{name:`虚位以待`,href:`/page/sponsor/index`,description:`欢迎加入 Rue 赞助计划。`}],fe=[{name:`QueryPHP`,href:`https://www.queryphp.com`,description:`现代化 PHP 开发框架`},{name:`VibeWindow`,href:`https://vibewindow.huododo.com/#/`,description:`氛围视窗软件智能体`},{name:`订货宝`,href:`https://www.dhb168.com/?from=ruejs`,description:`经销商订货系统与批发贸易订货平台`},{name:`Vercel`,href:`https://vercel.com`,description:`云部署与前端基础设施`}],pe=[{title:`i18n 国际化插件`,desc:`直接展示源文本即 key、局部插值和按需懒加载语言包的完整链路。`,to:`/examples/i18n-switcher`,eyebrow:`I18n Demo`,accentClassName:`border-emerald-200 bg-linear-to-br from-emerald-500/12 via-base-100 to-teal-500/10 hover:border-emerald-400/60`},{title:`路由插件`,desc:`集中看嵌套路由、守卫、redirect 和实验页在真实页面里的组合方式。`,to:`/examples/router-demo/guide/router/overview`,eyebrow:`Router Demo`,accentClassName:`border-sky-200 bg-linear-to-br from-sky-500/12 via-base-100 to-cyan-500/10 hover:border-sky-400/60`},{title:`数据状态与 URL 同步插件`,desc:`把 Store、筛选条件和查询串连起来，观察状态如何驱动可分享链接。`,to:`/examples/store-query-sync`,eyebrow:`State Demo`,accentClassName:`border-amber-200 bg-linear-to-br from-amber-500/12 via-base-100 to-orange-500/10 hover:border-amber-400/60`},{title:`Text.js 全栈应用框架`,desc:`基于 Vite、Rue、RSC 与文件系统路由，了解 App Router、SSR、API 路由和 Workers 部署。`,to:`/textjs`,eyebrow:`Full-stack`,accentClassName:`border-cyan-200 bg-linear-to-br from-cyan-500/12 via-base-100 to-blue-500/10 hover:border-cyan-400/60`}],me=t=>f(o=>{let s=u(`section`,o);p(s,`max-w-[1100px] mx-auto mt-8`);let c=u(`div`,s);a(s,c),p(c,`flex flex-col gap-3 md:flex-row md:items-end md:justify-between`);let l=u(`div`,c);a(c,l);let d=u(`div`,l);a(l,d),p(d,`text-sm font-semibold uppercase tracking-[0.24em] text-base-content/45`);let m=n(`rue:slot:anchor`);a(d,m),r(()=>{let e=t.eyebrow;i(()=>g(e,d,m))});let h=u(`h2`,l);a(l,h),p(h,`mt-2 text-3xl font-semibold text-base-content`);let _=n(`rue:slot:anchor`);a(h,_),r(()=>{let e=t.title;i(()=>g(e,h,_))});let b=n(`rue:slot:anchor`);a(c,b),r(()=>{let o=t.actionLabel&&t.actionTo?f(()=>{let o=e(),s=n(`rue:component:anchor`);return a(o,s),r(()=>{let e=y(T,{to:t.actionTo,className:`btn btn-outline self-start md:self-auto`,children:t.actionLabel});i(()=>g(e,o,s))}),o}):``;i(()=>g(o,c,b))});let x=u(`div`,s);a(s,x),r(()=>{p(x,`mt-5 grid gap-4 ${t.items.length>1?`md:grid-cols-2`:``}`)});let S=n(`rue:list:start`),C=n(`rue:list:end`);a(x,S),a(x,C);let E=new Map;return r(()=>{E=w({items:t.items||[],getKey:(e,t)=>e.name,elements:E,parent:x,before:C,singleRoot:!0,trackIndex:!1,start:S,renderItem:(t,o,s,c,l)=>{g(f(()=>{let o=e(),s=u(`a`,o);a(o,s),r(()=>{v(s,`key`,String(t.name))}),r(()=>{v(s,`href`,String(t.href))}),v(s,`target`,`_blank`),v(s,`rel`,`noreferrer`),p(s,`group rounded-[1.5rem] border border-base-200 bg-base-100/90 p-5 transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg`);let c=u(`div`,s);a(s,c),p(c,`flex min-h-[116px] flex-col justify-center gap-4`);let l=u(`div`,c);a(c,l);let d=u(`div`,l);a(l,d),p(d,`text-3xl font-semibold tracking-tight text-base-content`);let f=n(`rue:slot:anchor`);a(d,f),r(()=>{let e=t.name;i(()=>g(e,d,f))});let m=u(`p`,l);a(l,m),p(m,`mt-3 max-w-[30ch] text-base leading-7 text-base-content/65`);let h=n(`rue:slot:anchor`);return a(m,h),r(()=>{let e=t.description;i(()=>g(e,m,h))}),o}),o,s)}})}),s}),j=()=>{let{activeCreateCommand:t,selectedCreateCommand:o,createCommandCopy:l}=C(`useSetup:0:0:dup3`,()=>c(()=>{let e=C(`ref:1:5`,()=>S(`npm`)),t=C(`computed:1:6`,()=>x(()=>le.find(t=>t.id===e.value)??le[0]));return{activeCreateCommand:e,selectedCreateCommand:t,createCommandCopy:C(`computed:1:7`,()=>x(()=>E(()=>t.get().command)))}}));return f(c=>{let m=e(),x=u(`section`,m);a(m,x),p(x,`relative rounded-2xl bg-gr2adient-to-br from-violet-50 to-fuchsia-50 p-12 mb-10`);let S=u(`div`,x);a(x,S),p(S,`absolute -top-24 -left-24 w-96 h-96 rounded-full bg-violet-200/40 blur-3xl`);let C=u(`div`,x);a(x,C),p(C,`absolute -bottom-24 -right-24 w-md h-112 rounded-full bg-fuchsia-200/40 blur-3xl`);let E=u(`div`,x);a(x,E),p(E,`relative max-w-[1100px] mx-auto text-center`);let k=u(`div`,E);a(E,k),p(k,`hover-3d`);let A=u(`figure`,k);a(k,A);let j=u(`div`,A);a(A,j),v(j,`class`,`mx-auto w-full px-6 pb-4 text-center`);let M=u(`div`,j);a(j,M),v(M,`class`,`flex select-none items-end justify-center gap-6 whitespace-nowrap text-[clamp(6rem,21vw,16rem)] font-black leading-none bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent md:gap-10`);let he=u(`span`,M);a(M,he),a(he,b(`Rue`));let ge=u(`span`,M);a(M,ge),v(ge,`class`,`pl-1`),a(ge,b(`.JS`));let N=u(`div`,A);a(A,N),p(N,`inline-flex items-center justify-center gap-3`);let _e=u(`span`,N);a(N,_e),p(_e,`inline-flex items-center justify-center w-28 h-28 md:w-30 md:h-30 rounded-full bg-linear-to-br from-sky-500 via-cyan-400 to-emerald-300 shadow-md ring-1 ring-white/15`);let ve=u(`span`,_e);a(_e,ve),p(ve,`text-black font-extrabold text-[28px] md:text-[112px] leading-none drop-shadow-none`),a(ve,b(`T`));let ye=u(`span`,N);a(N,ye),p(ye,`text-[44px] md:text-[95px] font-extrabold tracking-tight bg-linear-to-r from-sky-500 via-cyan-400 to-emerald-300 bg-clip-text text-transparent`),a(ye,b(`he Wasm`));let be=u(`div`,A);a(A,be),p(be,`mt-2 text-[44px] md:text-[62px] font-extrabold tracking-tight bg-linear-to-r from-sky-400 via-cyan-300 to-teal-200 bg-clip-text text-transparent`),a(be,b(`Framework For Native DOM`));let xe=u(`p`,A);a(A,xe),p(xe,`mt-6 text-lg md:text-xl text-base-content/70`),a(xe,b(`Rust 运行时，Rust 响应式系统，Rust 原生 DOM 编译器`)),a(k,u(`div`,k)),a(k,u(`div`,k)),a(k,u(`div`,k)),a(k,u(`div`,k)),a(k,u(`div`,k)),a(k,u(`div`,k)),a(k,u(`div`,k)),a(k,u(`div`,k));let P=u(`div`,E);a(E,P),p(P,`mt-8 flex flex-wrap justify-center gap-3`);let Se=n(`rue:component:anchor`);a(P,Se),g(y(T,{to:`/guide/guide/quick-start`,className:`btn btn-primary btn-lg`,children:`快速上手`}),P,Se);let Ce=n(`rue:component:anchor`);a(P,Ce),g(y(T,{to:`/guide/guide/introduction`,className:`btn btn-outline btn-lg`,children:`文档`}),P,Ce);let we=n(`rue:component:anchor`);a(P,we),g(y(T,{to:`/api/api/index`,className:`btn btn-outline btn-lg`,children:`API`}),P,we);let Te=u(`a`,P);a(P,Te),v(Te,`href`,`https://github.com/hunzhiwange/ruejs`),v(Te,`target`,`_blank`),p(Te,`btn btn-outline btn-lg`),a(Te,b(`Github`));let F=u(`div`,E);a(E,F),p(F,`mx-auto mt-18 max-w-[900px] rounded-2xl border border-white/60 bg-slate-950/90 p-4 text-left shadow-xl shadow-fuchsia-200/40`);let I=u(`div`,F);a(F,I),p(I,`mb-3 flex flex-wrap items-center justify-between gap-3`);let L=u(`div`,I);a(I,L),p(L,`flex items-center gap-2`);let Ee=u(`span`,L);a(L,Ee),p(Ee,`h-3 w-3 rounded-full bg-rose-400`);let De=u(`span`,L);a(L,De),p(De,`h-3 w-3 rounded-full bg-amber-400`);let Oe=u(`span`,L);a(L,Oe),p(Oe,`h-3 w-3 rounded-full bg-emerald-400`);let ke=u(`span`,L);a(L,ke),p(ke,`ml-2 text-xs uppercase tracking-[0.24em] text-white/45`),a(ke,b(`Quick Start`));let R=u(`div`,I);a(I,R),p(R,`inline-flex rounded-xl border border-white/10 bg-white/5 p-1`),v(R,`role`,`tablist`),v(R,`aria-label`,`选择创建命令`);let Ae=n(`rue:list:start`),je=n(`rue:list:end`);a(R,Ae),a(R,je);let Me=new Map;r(()=>{Me=w({items:le||[],getKey:(e,t)=>e.id,elements:Me,parent:R,before:je,singleRoot:!0,trackIndex:!1,start:Ae,renderItem:(o,c,l,d,m)=>{g(f(()=>{let c=e(),l=u(`button`,c);a(c,l),r(()=>{v(l,`key`,String(o.id))}),v(l,`type`,`button`),v(l,`role`,`tab`),r(()=>{v(l,`aria-selected`,String(t.value===o.id))}),r(()=>{p(l,`rounded-lg px-3 py-1.5 text-xs font-medium transition ${t.value===o.id?`bg-white text-slate-950 shadow-sm`:`text-white/65 hover:text-white`}`)}),s(l,`click`,()=>{t.value=o.id});let d=n(`rue:slot:anchor`);return a(l,d),r(()=>{let e=o.label;i(()=>g(e,l,d))}),c}),c,l)}})});let z=u(`div`,F);a(F,z),p(z,`flex flex-col gap-3 md:flex-row md:items-center`);let Ne=u(`pre`,z);a(z,Ne),p(Ne,`min-w-0 flex-1 overflow-x-auto text-sm text-white/92 md:text-base`);let Pe=u(`code`,Ne);a(Ne,Pe),a(Pe,b(`$ `));let Fe=n(`rue:slot:anchor`);a(Pe,Fe),r(()=>{let e=o.get().command;i(()=>g(e,Pe,Fe))});let B=u(`button`,z);a(z,B),v(B,`type`,`button`),r(()=>{p(B,`shrink-0 rounded-xl border px-3 py-2 text-xs font-medium transition ${l.get().copied.value?`border-emerald-300/30 bg-emerald-400/15 text-emerald-100`:`border-white/10 bg-white/5 text-white/75 hover:bg-white/10 hover:text-white`}`)}),r(()=>{v(B,`aria-label`,String(`复制 ${o.get().label} 创建命令`))}),s(B,`click`,l.get().handleCopy);let Ie=h(B);a(B,Ie),r(()=>{d(Ie,l.get().copied.value?`已复制`:`复制`)});let V=u(`section`,m);a(m,V),p(V,`grid md:grid-cols-3 gap-6 max-w-[1100px] mx-auto`);let Le=n(`rue:component:anchor`);a(V,Le),g(y(O,{title:`简洁易用`,desc:`轻量、直观的 API，适合渐进式接入；保留熟悉的 JSX / TSX 开发方式，无需额外模板语法。`,icon:`✅`}),V,Le);let Re=n(`rue:component:anchor`);a(V,Re),g(y(O,{title:`编译驱动的原生 DOM 渲染`,desc:`围绕真实 DOM 做最小更新，并可结合 Rust / Wasm 运行时扩展与原生 DOM 编译能力。`,icon:`🦀`}),V,Re);let ze=n(`rue:component:anchor`);a(V,ze),g(y(O,{title:`React JSX + Vue 式响应式`,desc:`适合希望保留 React 风格 JSX，同时获得 ref、reactive、computed 等 Vue 式响应式 API 的项目。`,icon:`🤝`}),V,ze);let Be=u(`section`,m);a(m,Be),p(Be,`max-w-[1100px] mx-auto mt-12`);let H=u(`div`,Be);a(Be,H),p(H,`mt-6 grid md:grid-cols-2 gap-6 items-stretch`);let Ve=u(`div`,H);a(H,Ve),p(Ve,`card bg-base-100 border p-0 overflow-auto h-[330px]`);let He=n(`rue:component:anchor`);a(Ve,He),r(()=>{let e=y(D,{className:`h-full`,lang:`tsx`,code:ce});i(()=>g(e,Ve,He))});let Ue=n(`rue:component:anchor`);a(H,Ue),g(y(se,{}),H,Ue);let We=u(`section`,m);a(m,We),p(We,`mt-12 rounded-2xl p-8 bg-linear-to-br from-pink-500/80 to-fuchsia-500/80 text-white ring-1 ring-white/30 shadow-lg max-w-[1100px] mx-auto`);let U=u(`div`,We);a(We,U),p(U,`md:flex items-center justify-between`);let Ge=u(`div`,U);a(U,Ge);let Ke=u(`h2`,Ge);a(Ge,Ke),p(Ke,`text-2xl font-semibold mb-2 text-white`),a(Ke,b(`生态与插件`));let qe=u(`p`,Ge);a(Ge,qe),p(qe,`text-white/90`),a(qe,b(`官方路由、设计组件库与构建插件协同工作，也支持渐进式接入现有应用。`));let W=u(`div`,U);a(U,W),p(W,`mt-4 md:mt-0 flex gap-3`);let Je=n(`rue:component:anchor`);a(W,Je),g(y(T,{to:`/plugins`,className:`btn btn-outline`,children:`插件`}),W,Je);let Ye=n(`rue:component:anchor`);a(W,Ye),g(y(T,{to:`/design/button`,className:`btn btn-outline`,children:`组件库`}),W,Ye);let Xe=n(`rue:component:anchor`);a(W,Xe),g(y(T,{to:`/textjs`,className:`btn btn-outline`,children:`Text.js`}),W,Xe);let Ze=u(`section`,m);a(m,Ze),p(Ze,`max-w-[1100px] mx-auto mt-8`);let Qe=u(`div`,Ze);a(Ze,Qe),p(Qe,`mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4`);let $e=n(`rue:list:start`),et=n(`rue:list:end`);a(Qe,$e),a(Qe,et);let tt=new Map;r(()=>{tt=w({items:pe||[],getKey:(e,t)=>e.to,elements:tt,parent:Qe,before:et,start:$e,renderItem:(t,o,s,c,l)=>{let d=f(()=>{let o=e(),s=u(`div`,o);a(o,s),p(s,`text-xs font-semibold uppercase tracking-[0.22em] text-base-content/55`);let c=n(`rue:slot:anchor`);a(s,c),r(()=>{let e=t.eyebrow;i(()=>g(e,s,c))});let l=u(`div`,o);a(o,l),p(l,`mt-3 text-xl font-semibold text-base-content`);let d=n(`rue:slot:anchor`);a(l,d),r(()=>{let e=t.title;i(()=>g(e,l,d))});let f=u(`p`,o);a(o,f),p(f,`mt-2 text-sm leading-6 text-base-content/72`);let m=n(`rue:slot:anchor`);a(f,m),r(()=>{let e=t.desc;i(()=>g(e,f,m))});let h=u(`div`,o);return a(o,h),p(h,`mt-4 text-sm font-medium text-base-content/88`),a(h,b(`打开 Demo`)),o});_(y(T,{key:t.to,to:t.to,className:`group rounded-[1.5rem] border p-5 text-left text-base-content transition hover:-translate-y-0.5 hover:shadow-xl ${t.accentClassName}`,children:d}),o,s,c)}})});let G=u(`section`,m);a(m,G),p(G,`max-w-[1100px] mx-auto mt-12`);let nt=u(`h2`,G);a(G,nt),p(nt,`text-2xl font-semibold mb-2`),a(nt,b(`用组件组织界面`));let rt=u(`p`,G);a(G,rt),p(rt,`text-gray-600`),a(rt,b(`Rue 以 JSX / TSX 组件表达界面中的可复用片段。组件同时包含结构与逻辑，按需组合即可形成页面或模块。`));let K=u(`div`,G);a(G,K),p(K,`mt-6 grid md:grid-cols-2 gap-6 items-start`);let it=u(`div`,K);a(K,it),p(it,`card bg-base-100 border p-0 overflow-auto h-[360px] md:h-[560px]`);let at=n(`rue:component:anchor`);a(it,at),r(()=>{let e=y(D,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue'

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

export default HelloWorld`});i(()=>g(e,it,at))});let q=u(`div`,K);a(K,q),p(q,`grid gap-6`);let ot=n(`rue:component:anchor`);a(q,ot),g(y(ee,{}),q,ot);let st=n(`rue:component:anchor`);a(q,st),g(y(te,{}),q,st);let ct=n(`rue:component:anchor`);a(q,ct),g(y(ne,{}),q,ct);let lt=n(`rue:component:anchor`);a(q,lt),g(y(re,{}),q,lt);let ut=u(`p`,G);a(G,ut),p(ut,`mt-6 text-gray-600`),a(ut,b(`Rue 的组件强调可复用与可组合，保持清晰的数据与事件流，也方便把交互片段渐进接入现有页面。`));let J=u(`section`,m);a(m,J),p(J,`max-w-[1100px] mx-auto mt-12`);let dt=u(`h2`,J);a(J,dt),p(dt,`text-2xl font-semibold mb-2`),a(dt,b(`Vapor 渲染路径：更贴近真实 DOM 更新模型`));let ft=u(`p`,J);a(J,ft),p(ft,`text-gray-600`),a(ft,b(`Rue 提供默认 Block / Vapor 渲染路径，Vapor 适合需要更高性能、细粒度更新的区域。`));let pt=u(`p`,J);a(J,pt),p(pt,`text-gray-600`),a(pt,b(`结合 Rust 实现的响应式系统、Rust / Wasm 运行时与原生 DOM 编译能力，Vapor 会把 JSX 转换为更贴近真实 DOM 的产物。`));let Y=u(`div`,J);a(J,Y),p(Y,`mt-6 grid md:grid-cols-2 gap-6 items-start`);let mt=u(`div`,Y);a(Y,mt),p(mt,`card bg-base-100 border overflow-auto h-[360px] md:h-[510px]`);let ht=n(`rue:component:anchor`);a(mt,ht),r(()=>{let e=y(D,{className:`h-full`,lang:`tsx`,code:`const Hello: FC = () => (
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

export default HelloWorld`});i(()=>g(e,mt,ht))});let gt=u(`div`,Y);a(Y,gt),p(gt,`card bg-base-100 border p-0 overflow-auto h-[360px] md:h-[510px]`);let _t=n(`rue:component:anchor`);a(gt,_t),r(()=>{let e=y(D,{className:`h-full`,lang:`ts`,code:`/* RUE_VAPOR_TRANSFORMED */
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
export default HelloWorld;`});i(()=>g(e,gt,_t))});let vt=u(`div`,J);a(J,vt),p(vt,`mt-6 space-y-3 text-gray-700`);let yt=u(`p`,vt);a(vt,yt),a(yt,b(`Vapor 渲染路径直接面向原生 DOM，减少额外协调开销；配合细粒度响应式更新，在复杂界面中能保持更稳的性能与内存表现。`));let X=u(`section`,m);a(m,X),p(X,`max-w-[1100px] mx-auto mt-12`);let bt=u(`h2`,X);a(X,bt),p(bt,`text-2xl font-semibold mb-2`),a(bt,b(`React 风格 JSX，Vue 式响应式 API`));let xt=u(`p`,X);a(X,xt),p(xt,`text-gray-600`),a(xt,b(`Rue 适合希望保留 React 风格 JSX，同时获得 Vue 式响应式 API 的项目。你既可以用 useState，也可以用 ref / reactive / computed 来组织交互逻辑。`));let Z=u(`div`,X);a(X,Z),p(Z,`mt-6 grid md:grid-cols-2 gap-6 items-start`);let St=u(`div`,Z);a(Z,St),p(St,`card bg-base-100 border p-0 overflow-auto h-[360px] md:h-[660px]`);let Ct=n(`rue:component:anchor`);a(St,Ct),r(()=>{let e=y(D,{className:`h-full`,lang:`tsx`,code:`import { type FC, useState, ref, reactive, computed } from '@rue-js/rue';

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

export default Reactive;`});i(()=>g(e,St,Ct))});let Q=u(`div`,Z);a(Z,Q),p(Q,`grid gap-6`);let wt=u(`div`,Q);a(Q,wt);let Tt=u(`h3`,wt);a(wt,Tt),p(Tt,`text-lg font-semibold mb-2 text-base-content`),a(Tt,b(`前端的发展，从原始DOM，到 JQUERY等`));let Et=n(`rue:component:anchor`);a(wt,Et),r(()=>{let e=y(ae,{videos:ie});i(()=>g(e,wt,Et))});let $=u(`div`,Q);a(Q,$);let Dt=u(`h3`,$);a($,Dt),p(Dt,`text-lg font-semibold mb-2 text-base-content`),a(Dt,b(`ref / reactive 示例`));let Ot=n(`rue:component:anchor`);a($,Ot),g(y(oe,{}),$,Ot);let kt=u(`p`,X);a(X,kt),p(kt,`mt-6 text-gray-600`),a(kt,b(`Rue 支持渐进集成：你可以在现有页面中按需挂载组件、路由或交互片段，而不必一次性重写整站。`));let At=n(`rue:component:anchor`);a(m,At),r(()=>{let e=y(me,{eyebrow:`Platinum Sponsor`,title:`白金赞助商`,items:ue,actionLabel:`成为赞助商`,actionTo:`/page/sponsor/index`});i(()=>g(e,m,At))});let jt=n(`rue:component:anchor`);a(m,jt),r(()=>{let e=y(me,{eyebrow:`Gold Sponsor`,title:`黄金赞助商`,actionLabel:`成为赞助商`,actionTo:`/page/sponsor/index`,items:de});i(()=>g(e,m,jt))});let Mt=n(`rue:component:anchor`);return a(m,Mt),r(()=>{let e=y(me,{eyebrow:`Links`,title:`友情链接`,items:fe});i(()=>g(e,m,Mt))}),m})};export{j as default};