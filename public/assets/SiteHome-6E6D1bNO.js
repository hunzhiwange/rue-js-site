import{$ as e,Ht as t,J as n,Jt as r,Lt as i,Q as a,X as o,Xt as s,Z as c,at as l,c as u,et as d,ft as f,gt as p,l as m,ot as h,pt as g,q as _,qt as v,s as y,st as b,t as x,wt as S}from"./vapor-runtime-iQZthBPQ.js";import{a as C,n as w}from"./vapor-helpers-vapor-BjKHCvOa.js";import{n as T}from"./src-BzozQvLy.js";import{n as E,t as D}from"./Code-CZqShVUj.js";var O=e=>m(r=>{let i=a(`div`,r);b(i,`card bg-base-100 border border-base-200 shadow-sm`);let c=a(`div`,i);n(i,c),b(c,`card-body`);let l=a(`div`,c);n(c,l),b(l,`flex items-center gap-3 mb-1`);let u=a(`div`,l);n(l,u),b(u,`w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center`);let d=a(`span`,u);n(u,d),b(d,`text-lg`);let f=o(`rue:slot:anchor`);n(d,f),s(()=>{let n=e.icon||`⚡️`;t(()=>y(n,d,f))});let p=a(`div`,l);n(l,p),b(p,`font-semibold text-base-content`);let m=o(`rue:slot:anchor`);n(p,m),s(()=>{let n=e.title;t(()=>y(n,p,m))});let h=a(`p`,c);n(c,h),b(h,`text-sm text-base-content/70`);let g=o(`rue:slot:anchor`);return n(h,g),s(()=>{let n=e.desc;t(()=>y(n,h,g))}),i}),ee=()=>m(t=>{let r=a(`div`,t);b(r,`card bg-primary text-primary-content shadow-sm`);let i=a(`div`,r);n(r,i),b(i,`card-body items-center text-center`);let o=a(`div`,i);n(i,o),b(o,`text-3xl font-extrabold`),n(o,e(`Hello`));let s=a(`div`,i);return n(i,s),b(s,`mt-2 text-sm opacity-90`),n(s,e(`Hello component`)),r}),te=()=>m(t=>{let r=a(`div`,t);b(r,`card bg-base-100 text-base-content border border-base-200 shadow-sm`);let i=a(`div`,r);n(r,i),b(i,`card-body items-center text-center`);let o=a(`div`,i);n(i,o),b(o,`text-3xl font-extrabold`),n(o,e(`World`));let s=a(`div`,i);return n(i,s),b(s,`mt-2 text-sm text-base-content/70`),n(s,e(`World component`)),r}),ne=()=>m(t=>{let r=a(`div`,t);b(r,`card bg-accent text-accent-content shadow-sm`);let i=a(`div`,r);n(r,i),b(i,`card-body items-center text-center`);let o=a(`div`,i);n(i,o),b(o,`text-3xl font-extrabold`),n(o,e(`Hi`));let s=a(`div`,i);return n(i,s),b(s,`mt-2 text-sm opacity-90`),n(s,e(`Rue`)),r}),re=()=>m(t=>{let r=a(`div`,t);b(r,`card bg-base-100 text-base-content border border-base-200 shadow-sm`);let i=a(`div`,r);n(r,i),b(i,`card-body items-center text-center`);let o=a(`div`,i);n(i,o),b(o,`text-3xl font-extrabold`),n(o,e(`Yes`));let s=a(`div`,i);return n(i,s),b(s,`mt-2 text-sm text-base-content/70`),n(s,e(`My name is Rue`)),r}),ie=[{title:`原始 DOM 编程`,desc:`直接操作节点与事件`},{title:`jQuery 的崛起`,desc:`Write Less, Do More`},{title:`Backbone.js 与 MVC`,desc:`早期前端架构探索`},{title:`Web Components`,desc:`原生组件标准`},{title:`现代构建工具与生态`,desc:`模块化与开发体验`}],k=e=>m(t=>{let n=a(`input`,t);return b(n,`w-full rounded-md border border-base-300 bg-base-100 px-3 py-2 text-base-content shadow-sm focus:border-violet-500 focus:ring focus:ring-violet-200`),s(()=>{f(n,e.value)}),_(n,`input`,t=>e.onChange(t.target.value)),l(n,`placeholder`,`搜索视频`),n}),A=r=>m(i=>{let u=a(`div`,i);b(u,`mt-3 space-y-2`);let d=a(`div`,u);n(u,d),b(d,`text-sm text-base-content/70`);let f=o(`rue:slot:anchor`);n(d,f),s(()=>{let e=r.videos.length;t(()=>y(e,d,f))}),n(d,e(` 个视频`));let p=o(`rue:slot:anchor`);return n(u,p),s(()=>{let e=r.videos.length===0?m(()=>{let e=c(),i=a(`div`,e);n(e,i),b(i,`rounded-md border border-base-300/70 bg-base-100/70 backdrop-blur-sm p-3 text-sm text-base-content/70`);let l=o(`rue:slot:anchor`);return n(i,l),s(()=>{let e=r.emptyHeading||`暂无匹配`;t(()=>y(e,i,l))}),e}):m(()=>{let e=c(),i=a(`ul`,e);n(e,i),b(i,`space-y-2`);let u=o(`rue:list:start`),d=o(`rue:list:end`);n(i,u),n(i,d);let f=new Map;return s(()=>{f=w({items:r.videos||[],getKey:(e,t)=>t,elements:f,parent:i,before:d,singleRoot:!0,start:u,renderItem:(e,r,i,u,d)=>{y(m(()=>{let r=c(),i=a(`li`,r);n(r,i),s(()=>{l(i,`key`,String(d))}),b(i,`rounded-md border border-base-300/70 bg-base-100/70 backdrop-blur-sm p-3`);let u=a(`div`,i);n(i,u),b(u,`font-medium text-base-content`);let f=o(`rue:slot:anchor`);n(u,f),s(()=>{let n=e.title;t(()=>y(n,u,f))});let p=a(`div`,i);n(i,p),b(p,`text-sm text-base-content/70`);let m=o(`rue:slot:anchor`);return n(p,m),s(()=>{let n=e.desc;t(()=>y(n,p,m))}),r}),r,i)}})}),e});t(()=>y(e,u,p))}),u}),ae=e=>{let{searchText:i,setSearchText:a,foundVideos:l}=C(`useSetup:0:0`,()=>v(()=>{let[t,n]=C(`useState:1:0`,()=>r(``));return{searchText:t,setSearchText:n,foundVideos:C(`computed:1:1`,()=>p(()=>e.videos.filter(e=>e.title.toLowerCase().includes(t.value.toLowerCase()))))}}));return m(e=>{let r=c(),u=o(`rue:component:anchor`);n(r,u),s(()=>{let e=x(k,{value:i.value,onChange:a});t(()=>y(e,r,u))});let d=o(`rue:component:anchor`);return n(r,d),s(()=>{let e=x(A,{videos:l.get(),emptyHeading:`没有匹配 “${i.value}”`});t(()=>y(e,r,d))}),r})},oe=()=>{let{count:t,state:r}=C(`useSetup:0:0:dup1`,()=>v(()=>({count:C(`ref:1:2`,()=>i(0)),state:C(`reactive:1:3`,()=>S({enabled:!1}))})));return m(i=>{let o=a(`div`,i);b(o,`rounded-xl border border-base-300/70 bg-base-100/70 backdrop-blur-sm p-4`);let c=a(`div`,o);n(o,c),b(c,`flex items-center gap-3`);let u=a(`button`,c);n(c,u),b(u,`btn btn-primary`),_(u,`click`,()=>t.value++),n(u,e(`+1`));let f=a(`button`,c);n(c,f),b(f,`btn btn-outline`),_(f,`click`,()=>t.value=0),n(f,e(`重置`));let p=a(`label`,c);n(c,p),b(p,`flex items-center gap-2 ml-auto`);let m=a(`input`,p);n(p,m),l(m,`type`,`checkbox`),b(m,`checkbox`),s(()=>{h(m,!!r.enabled)}),_(m,`change`,e=>r.enabled=e.target.checked);let v=a(`span`,p);n(p,v),b(v,`text-sm text-base-content`),n(v,e(`启用`));let y=a(`div`,o);n(o,y),b(y,`mt-2 text-sm text-base-content/70`),n(y,e(`计数：`));let x=d(y);n(y,x),s(()=>{g(x,t.value)}),n(y,e(`，启用：`));let S=d(y);return n(y,S),s(()=>{g(S,r.enabled?`是`:`否`)}),o})},se=()=>{let{count:r}=C(`useSetup:0:0:dup2`,()=>v(()=>({count:C(`ref:1:4`,()=>i(0))})));return m(i=>{let l=a(`div`,i);b(l,`card h-[330px] border border-base-300/70 bg-base-100/80 shadow-sm backdrop-blur-sm`);let u=a(`div`,l);n(l,u),b(u,`card-body flex h-full p-6`);let f=a(`div`,u);n(u,f),b(f,`flex items-start justify-between gap-4`);let p=a(`div`,f);n(f,p);let h=a(`div`,p);n(p,h),b(h,`text-sm uppercase tracking-[0.22em] text-base-content/45`),n(h,e(`Live Demo`));let v=a(`div`,p);n(p,v),b(v,`mt-2 text-sm text-base-content/70`),n(v,e(`一个 ref signal 同时驱动计数和 v-if 条件分支。`));let x=a(`div`,f);n(f,x),b(x,`badge badge-outline badge-lg`);let S=d(x);n(x,S),s(()=>{g(S,r.value)});let C=a(`div`,u);n(u,C),b(C,`mt-6 grid gap-4`);let w=a(`button`,C);n(C,w),b(w,`rounded-xl border border-base-300 bg-base-100 px-4 py-3 text-base font-medium text-base-content shadow-sm transition hover:border-primary hover:text-primary`),_(w,`click`,()=>r.value++),n(w,e(`计数：`));let T=d(w);n(w,T),s(()=>{g(T,r.value)});let E=a(`div`,C);n(C,E),b(E,`min-h-[96px] rounded-2xl border border-base-300/70 bg-base-200/40 p-4`);let D=o(`rue:slot:anchor`);n(E,D),s(()=>{let i=r.value%2==0?m(()=>{let t=c(),r=a(`div`,t);n(t,r),b(r,`flex h-full items-center justify-between gap-3`);let i=a(`div`,r);n(r,i);let o=a(`div`,i);n(i,o),b(o,`font-semibold text-base-content`),n(o,e(`偶数态 UI`));let s=a(`div`,i);n(i,s),b(s,`mt-1 text-sm text-base-content/70`),n(s,e(`当前展示欢迎提示卡片。`));let l=a(`span`,r);return n(r,l),b(l,`badge badge-info badge-lg`),n(l,e(`v-if`)),t}):m(()=>{let t=c(),r=a(`div`,t);n(t,r),b(r,`flex h-full items-center justify-between gap-3`);let i=a(`div`,r);n(r,i);let o=a(`div`,i);n(i,o),b(o,`font-semibold text-base-content`),n(o,e(`奇数态 UI`));let s=a(`div`,i);n(i,s),b(s,`mt-1 text-sm text-base-content/70`),n(s,e(`signal 更新后切到另一套界面。`));let l=a(`span`,r);return n(r,l),b(l,`badge badge-success badge-lg`),n(l,e(`v-else`)),t});t(()=>y(i,E,D))});let O=a(`div`,u);return n(u,O),b(O,`mt-auto text-xs tracking-[0.16em] text-base-content/45`),n(O,e(`点击按钮时，下面的两个 UI 会跟着 signal 一起切换。`)),l})},ce=`import { type FC, ref } from '@rue-js/rue'

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

export default App`,le=[{id:`npm`,label:`npm`,command:`npm create rue@latest`},{id:`pnpm`,label:`pnpm`,command:`pnpm create rue@latest`},{id:`bun`,label:`bun`,command:`bun create rue@latest`},{id:`yarn`,label:`yarn`,command:`yarn dlx create-rue@latest`}],ue=[{name:`虚位以待`,href:`/page/sponsor/index`,description:`期待与你一起支持 Rue 生态建设。`}],de=[{name:`虚位以待`,href:`/page/sponsor/index`,description:`欢迎加入 Rue 赞助计划。`}],fe=[{name:`QueryPHP`,href:`https://www.queryphp.com`,description:`现代化 PHP 开发框架`},{name:`VibeWindow`,href:`https://vibewindow.huododo.com/#/`,description:`氛围视窗软件智能体`},{name:`订货宝`,href:`https://www.dhb168.com/?from=ruejs`,description:`经销商订货系统与批发贸易订货平台`},{name:`Vercel`,href:`https://vercel.com`,description:`云部署与前端基础设施`}],pe=[{title:`i18n 国际化插件`,desc:`直接展示源文本即 key、局部插值和按需懒加载语言包的完整链路。`,to:`/examples/i18n-switcher`,eyebrow:`I18n Demo`,accentClassName:`border-emerald-200 bg-linear-to-br from-emerald-500/12 via-base-100 to-teal-500/10 hover:border-emerald-400/60`},{title:`路由插件`,desc:`集中看嵌套路由、守卫、redirect 和实验页在真实页面里的组合方式。`,to:`/examples/router-demo/guide/router/overview`,eyebrow:`Router Demo`,accentClassName:`border-sky-200 bg-linear-to-br from-sky-500/12 via-base-100 to-cyan-500/10 hover:border-sky-400/60`},{title:`数据状态与 URL 同步插件`,desc:`把 Store、筛选条件和查询串连起来，观察状态如何驱动可分享链接。`,to:`/examples/store-query-sync`,eyebrow:`State Demo`,accentClassName:`border-amber-200 bg-linear-to-br from-amber-500/12 via-base-100 to-orange-500/10 hover:border-amber-400/60`},{title:`Text.js 全栈应用框架`,desc:`基于 Vite、Rue、RSC 与文件系统路由，了解 App Router、SSR、API 路由和 Workers 部署。`,to:`/textjs`,eyebrow:`Full-stack`,accentClassName:`border-cyan-200 bg-linear-to-br from-cyan-500/12 via-base-100 to-blue-500/10 hover:border-cyan-400/60`}],me=e=>m(r=>{let i=a(`section`,r);b(i,`max-w-[1100px] mx-auto mt-8`);let u=a(`div`,i);n(i,u),b(u,`flex flex-col gap-3 md:flex-row md:items-end md:justify-between`);let d=a(`div`,u);n(u,d);let f=a(`div`,d);n(d,f),b(f,`text-sm font-semibold uppercase tracking-[0.24em] text-base-content/45`);let p=o(`rue:slot:anchor`);n(f,p),s(()=>{let n=e.eyebrow;t(()=>y(n,f,p))});let h=a(`h2`,d);n(d,h),b(h,`mt-2 text-3xl font-semibold text-base-content`);let g=o(`rue:slot:anchor`);n(h,g),s(()=>{let n=e.title;t(()=>y(n,h,g))});let _=o(`rue:slot:anchor`);n(u,_),s(()=>{let r=e.actionLabel&&e.actionTo?m(()=>{let r=c(),i=o(`rue:component:anchor`);return n(r,i),s(()=>{let n=x(T,{to:e.actionTo,className:`btn btn-outline self-start md:self-auto`,children:e.actionLabel});t(()=>y(n,r,i))}),r}):``;t(()=>y(r,u,_))});let v=a(`div`,i);n(i,v),s(()=>{b(v,`mt-5 grid gap-4 ${e.items.length>1?`md:grid-cols-2`:``}`)});let S=o(`rue:list:start`),C=o(`rue:list:end`);n(v,S),n(v,C);let E=new Map;return s(()=>{E=w({items:e.items||[],getKey:(e,t)=>e.name,elements:E,parent:v,before:C,singleRoot:!0,trackIndex:!1,start:S,renderItem:(e,r,i,u,d)=>{y(m(()=>{let r=c(),i=a(`a`,r);n(r,i),s(()=>{l(i,`key`,String(e.name))}),s(()=>{l(i,`href`,String(e.href))}),l(i,`target`,`_blank`),l(i,`rel`,`noreferrer`),b(i,`group rounded-[1.5rem] border border-base-200 bg-base-100/90 p-5 transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg`);let u=a(`div`,i);n(i,u),b(u,`flex min-h-[116px] flex-col justify-center gap-4`);let d=a(`div`,u);n(u,d);let f=a(`div`,d);n(d,f),b(f,`text-3xl font-semibold tracking-tight text-base-content`);let p=o(`rue:slot:anchor`);n(f,p),s(()=>{let n=e.name;t(()=>y(n,f,p))});let m=a(`p`,d);n(d,m),b(m,`mt-3 max-w-[30ch] text-base leading-7 text-base-content/65`);let h=o(`rue:slot:anchor`);return n(m,h),s(()=>{let n=e.description;t(()=>y(n,m,h))}),r}),r,i)}})}),i}),j=()=>{let{activeCreateCommand:r,selectedCreateCommand:f,createCommandCopy:h}=C(`useSetup:0:0:dup3`,()=>v(()=>{let e=C(`ref:1:5`,()=>i(`npm`)),t=C(`computed:1:6`,()=>p(()=>le.find(t=>t.id===e.value)??le[0]));return{activeCreateCommand:e,selectedCreateCommand:t,createCommandCopy:C(`computed:1:7`,()=>p(()=>E(()=>t.get().command)))}}));return m(i=>{let p=c(),v=a(`section`,p);n(p,v),b(v,`relative rounded-2xl bg-gr2adient-to-br from-violet-50 to-fuchsia-50 p-12 mb-10`);let S=a(`div`,v);n(v,S),b(S,`absolute -top-24 -left-24 w-96 h-96 rounded-full bg-violet-200/40 blur-3xl`);let C=a(`div`,v);n(v,C),b(C,`absolute -bottom-24 -right-24 w-md h-112 rounded-full bg-fuchsia-200/40 blur-3xl`);let E=a(`div`,v);n(v,E),b(E,`relative max-w-[1100px] mx-auto text-center`);let k=a(`div`,E);n(E,k),b(k,`hover-3d`);let A=a(`figure`,k);n(k,A);let j=a(`div`,A);n(A,j),l(j,`class`,`mx-auto w-full px-6 pb-4 text-center`);let M=a(`div`,j);n(j,M),l(M,`class`,`flex select-none items-end justify-center gap-6 whitespace-nowrap text-[clamp(6rem,21vw,16rem)] font-black leading-none bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent md:gap-10`);let he=a(`span`,M);n(M,he),n(he,e(`Rue`));let ge=a(`span`,M);n(M,ge),l(ge,`class`,`pl-1`),n(ge,e(`.JS`));let N=a(`div`,A);n(A,N),b(N,`inline-flex items-center justify-center gap-3`);let _e=a(`span`,N);n(N,_e),b(_e,`inline-flex items-center justify-center w-28 h-28 md:w-30 md:h-30 rounded-full bg-linear-to-br from-sky-500 via-cyan-400 to-emerald-300 shadow-md ring-1 ring-white/15`);let ve=a(`span`,_e);n(_e,ve),b(ve,`text-black font-extrabold text-[28px] md:text-[112px] leading-none drop-shadow-none`),n(ve,e(`T`));let ye=a(`span`,N);n(N,ye),b(ye,`text-[44px] md:text-[95px] font-extrabold tracking-tight bg-linear-to-r from-sky-500 via-cyan-400 to-emerald-300 bg-clip-text text-transparent`),n(ye,e(`he Wasm`));let be=a(`div`,A);n(A,be),b(be,`mt-2 text-[44px] md:text-[62px] font-extrabold tracking-tight bg-linear-to-r from-sky-400 via-cyan-300 to-teal-200 bg-clip-text text-transparent`),n(be,e(`Framework For Native DOM`));let xe=a(`p`,A);n(A,xe),b(xe,`mt-6 text-lg md:text-xl text-base-content/70`),n(xe,e(`Rust 运行时，Rust 响应式系统，Rust 原生 DOM 编译器`)),n(k,a(`div`,k)),n(k,a(`div`,k)),n(k,a(`div`,k)),n(k,a(`div`,k)),n(k,a(`div`,k)),n(k,a(`div`,k)),n(k,a(`div`,k)),n(k,a(`div`,k));let P=a(`div`,E);n(E,P),b(P,`mt-8 flex flex-wrap justify-center gap-3`);let Se=o(`rue:component:anchor`);n(P,Se),y(x(T,{to:`/guide/guide/quick-start`,className:`btn btn-primary btn-lg`,children:`快速上手`}),P,Se);let Ce=o(`rue:component:anchor`);n(P,Ce),y(x(T,{to:`/guide/guide/introduction`,className:`btn btn-outline btn-lg`,children:`文档`}),P,Ce);let we=o(`rue:component:anchor`);n(P,we),y(x(T,{to:`/api/api/index`,className:`btn btn-outline btn-lg`,children:`API`}),P,we);let Te=a(`a`,P);n(P,Te),l(Te,`href`,`https://github.com/hunzhiwange/ruejs`),l(Te,`target`,`_blank`),b(Te,`btn btn-outline btn-lg`),n(Te,e(`Github`));let F=a(`div`,E);n(E,F),b(F,`mx-auto mt-18 max-w-[900px] rounded-2xl border border-white/60 bg-slate-950/90 p-4 text-left shadow-xl shadow-fuchsia-200/40`);let I=a(`div`,F);n(F,I),b(I,`mb-3 flex flex-wrap items-center justify-between gap-3`);let L=a(`div`,I);n(I,L),b(L,`flex items-center gap-2`);let Ee=a(`span`,L);n(L,Ee),b(Ee,`h-3 w-3 rounded-full bg-rose-400`);let De=a(`span`,L);n(L,De),b(De,`h-3 w-3 rounded-full bg-amber-400`);let Oe=a(`span`,L);n(L,Oe),b(Oe,`h-3 w-3 rounded-full bg-emerald-400`);let ke=a(`span`,L);n(L,ke),b(ke,`ml-2 text-xs uppercase tracking-[0.24em] text-white/45`),n(ke,e(`Quick Start`));let R=a(`div`,I);n(I,R),b(R,`inline-flex rounded-xl border border-white/10 bg-white/5 p-1`),l(R,`role`,`tablist`),l(R,`aria-label`,`选择创建命令`);let Ae=o(`rue:list:start`),je=o(`rue:list:end`);n(R,Ae),n(R,je);let Me=new Map;s(()=>{Me=w({items:le||[],getKey:(e,t)=>e.id,elements:Me,parent:R,before:je,singleRoot:!0,trackIndex:!1,start:Ae,renderItem:(e,i,u,d,f)=>{y(m(()=>{let i=c(),u=a(`button`,i);n(i,u),s(()=>{l(u,`key`,String(e.id))}),l(u,`type`,`button`),l(u,`role`,`tab`),s(()=>{l(u,`aria-selected`,String(r.value===e.id))}),s(()=>{b(u,`rounded-lg px-3 py-1.5 text-xs font-medium transition ${r.value===e.id?`bg-white text-slate-950 shadow-sm`:`text-white/65 hover:text-white`}`)}),_(u,`click`,()=>{r.value=e.id});let d=o(`rue:slot:anchor`);return n(u,d),s(()=>{let n=e.label;t(()=>y(n,u,d))}),i}),i,u)}})});let z=a(`div`,F);n(F,z),b(z,`flex flex-col gap-3 md:flex-row md:items-center`);let Ne=a(`pre`,z);n(z,Ne),b(Ne,`min-w-0 flex-1 overflow-x-auto text-sm text-white/92 md:text-base`);let Pe=a(`code`,Ne);n(Ne,Pe),n(Pe,e(`$ `));let Fe=o(`rue:slot:anchor`);n(Pe,Fe),s(()=>{let e=f.get().command;t(()=>y(e,Pe,Fe))});let B=a(`button`,z);n(z,B),l(B,`type`,`button`),s(()=>{b(B,`shrink-0 rounded-xl border px-3 py-2 text-xs font-medium transition ${h.get().copied.value?`border-emerald-300/30 bg-emerald-400/15 text-emerald-100`:`border-white/10 bg-white/5 text-white/75 hover:bg-white/10 hover:text-white`}`)}),s(()=>{l(B,`aria-label`,String(`复制 ${f.get().label} 创建命令`))}),_(B,`click`,h.get().handleCopy);let Ie=d(B);n(B,Ie),s(()=>{g(Ie,h.get().copied.value?`已复制`:`复制`)});let V=a(`section`,p);n(p,V),b(V,`grid md:grid-cols-3 gap-6 max-w-[1100px] mx-auto`);let Le=o(`rue:component:anchor`);n(V,Le),y(x(O,{title:`简洁易用`,desc:`轻量、直观的 API，适合渐进式接入；保留熟悉的 JSX / TSX 开发方式，无需额外模板语法。`,icon:`✅`}),V,Le);let Re=o(`rue:component:anchor`);n(V,Re),y(x(O,{title:`编译驱动的原生 DOM 渲染`,desc:`围绕真实 DOM 做最小更新，并可结合 Rust / Wasm 运行时扩展与原生 DOM 编译能力。`,icon:`🦀`}),V,Re);let ze=o(`rue:component:anchor`);n(V,ze),y(x(O,{title:`React JSX + Vue 式响应式`,desc:`适合希望保留 React 风格 JSX，同时获得 ref、reactive、computed 等 Vue 式响应式 API 的项目。`,icon:`🤝`}),V,ze);let Be=a(`section`,p);n(p,Be),b(Be,`max-w-[1100px] mx-auto mt-12`);let H=a(`div`,Be);n(Be,H),b(H,`mt-6 grid md:grid-cols-2 gap-6 items-stretch`);let Ve=a(`div`,H);n(H,Ve),b(Ve,`card bg-base-100 border p-0 overflow-auto h-[330px]`);let He=o(`rue:component:anchor`);n(Ve,He),s(()=>{let e=x(D,{className:`h-full`,lang:`tsx`,code:ce});t(()=>y(e,Ve,He))});let Ue=o(`rue:component:anchor`);n(H,Ue),y(x(se,{}),H,Ue);let We=a(`section`,p);n(p,We),b(We,`mt-12 rounded-2xl p-8 bg-linear-to-br from-pink-500/80 to-fuchsia-500/80 text-white ring-1 ring-white/30 shadow-lg max-w-[1100px] mx-auto`);let U=a(`div`,We);n(We,U),b(U,`md:flex items-center justify-between`);let Ge=a(`div`,U);n(U,Ge);let Ke=a(`h2`,Ge);n(Ge,Ke),b(Ke,`text-2xl font-semibold mb-2 text-white`),n(Ke,e(`生态与插件`));let qe=a(`p`,Ge);n(Ge,qe),b(qe,`text-white/90`),n(qe,e(`官方路由、设计组件库与构建插件协同工作，也支持渐进式接入现有应用。`));let W=a(`div`,U);n(U,W),b(W,`mt-4 md:mt-0 flex gap-3`);let Je=o(`rue:component:anchor`);n(W,Je),y(x(T,{to:`/plugins`,className:`btn btn-outline`,children:`插件`}),W,Je);let Ye=o(`rue:component:anchor`);n(W,Ye),y(x(T,{to:`/design/button`,className:`btn btn-outline`,children:`组件库`}),W,Ye);let Xe=o(`rue:component:anchor`);n(W,Xe),y(x(T,{to:`/textjs`,className:`btn btn-outline`,children:`Text.js`}),W,Xe);let Ze=a(`section`,p);n(p,Ze),b(Ze,`max-w-[1100px] mx-auto mt-8`);let Qe=a(`div`,Ze);n(Ze,Qe),b(Qe,`mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4`);let $e=o(`rue:list:start`),et=o(`rue:list:end`);n(Qe,$e),n(Qe,et);let tt=new Map;s(()=>{tt=w({items:pe||[],getKey:(e,t)=>e.to,elements:tt,parent:Qe,before:et,start:$e,renderItem:(r,i,l,d,f)=>{let p=m(()=>{let i=c(),l=a(`div`,i);n(i,l),b(l,`text-xs font-semibold uppercase tracking-[0.22em] text-base-content/55`);let u=o(`rue:slot:anchor`);n(l,u),s(()=>{let e=r.eyebrow;t(()=>y(e,l,u))});let d=a(`div`,i);n(i,d),b(d,`mt-3 text-xl font-semibold text-base-content`);let f=o(`rue:slot:anchor`);n(d,f),s(()=>{let e=r.title;t(()=>y(e,d,f))});let p=a(`p`,i);n(i,p),b(p,`mt-2 text-sm leading-6 text-base-content/72`);let m=o(`rue:slot:anchor`);n(p,m),s(()=>{let e=r.desc;t(()=>y(e,p,m))});let h=a(`div`,i);return n(i,h),b(h,`mt-4 text-sm font-medium text-base-content/88`),n(h,e(`打开 Demo`)),i});u(x(T,{key:r.to,to:r.to,className:`group rounded-[1.5rem] border p-5 text-left text-base-content transition hover:-translate-y-0.5 hover:shadow-xl ${r.accentClassName}`,children:p}),i,l,d)}})});let G=a(`section`,p);n(p,G),b(G,`max-w-[1100px] mx-auto mt-12`);let nt=a(`h2`,G);n(G,nt),b(nt,`text-2xl font-semibold mb-2`),n(nt,e(`用组件组织界面`));let rt=a(`p`,G);n(G,rt),b(rt,`text-gray-600`),n(rt,e(`Rue 以 JSX / TSX 组件表达界面中的可复用片段。组件同时包含结构与逻辑，按需组合即可形成页面或模块。`));let K=a(`div`,G);n(G,K),b(K,`mt-6 grid md:grid-cols-2 gap-6 items-start`);let it=a(`div`,K);n(K,it),b(it,`card bg-base-100 border p-0 overflow-auto h-[360px] md:h-[560px]`);let at=o(`rue:component:anchor`);n(it,at),s(()=>{let e=x(D,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue'

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

export default HelloWorld`});t(()=>y(e,it,at))});let q=a(`div`,K);n(K,q),b(q,`grid gap-6`);let ot=o(`rue:component:anchor`);n(q,ot),y(x(ee,{}),q,ot);let st=o(`rue:component:anchor`);n(q,st),y(x(te,{}),q,st);let ct=o(`rue:component:anchor`);n(q,ct),y(x(ne,{}),q,ct);let lt=o(`rue:component:anchor`);n(q,lt),y(x(re,{}),q,lt);let ut=a(`p`,G);n(G,ut),b(ut,`mt-6 text-gray-600`),n(ut,e(`Rue 的组件强调可复用与可组合，保持清晰的数据与事件流，也方便把交互片段渐进接入现有页面。`));let J=a(`section`,p);n(p,J),b(J,`max-w-[1100px] mx-auto mt-12`);let dt=a(`h2`,J);n(J,dt),b(dt,`text-2xl font-semibold mb-2`),n(dt,e(`Vapor 渲染路径：更贴近真实 DOM 更新模型`));let ft=a(`p`,J);n(J,ft),b(ft,`text-gray-600`),n(ft,e(`Rue 提供默认 Block / Vapor 渲染路径，Vapor 适合需要更高性能、细粒度更新的区域。`));let pt=a(`p`,J);n(J,pt),b(pt,`text-gray-600`),n(pt,e(`结合 Rust 实现的响应式系统、Rust / Wasm 运行时与原生 DOM 编译能力，Vapor 会把 JSX 转换为更贴近真实 DOM 的产物。`));let Y=a(`div`,J);n(J,Y),b(Y,`mt-6 grid md:grid-cols-2 gap-6 items-start`);let mt=a(`div`,Y);n(Y,mt),b(mt,`card bg-base-100 border overflow-auto h-[360px] md:h-[510px]`);let ht=o(`rue:component:anchor`);n(mt,ht),s(()=>{let e=x(D,{className:`h-full`,lang:`tsx`,code:`const Hello: FC = () => (
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

export default HelloWorld`});t(()=>y(e,mt,ht))});let gt=a(`div`,Y);n(Y,gt),b(gt,`card bg-base-100 border p-0 overflow-auto h-[360px] md:h-[510px]`);let _t=o(`rue:component:anchor`);n(gt,_t),s(()=>{let e=x(D,{className:`h-full`,lang:`ts`,code:`/* RUE_VAPOR_TRANSFORMED */
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
export default HelloWorld;`});t(()=>y(e,gt,_t))});let vt=a(`div`,J);n(J,vt),b(vt,`mt-6 space-y-3 text-gray-700`);let yt=a(`p`,vt);n(vt,yt),n(yt,e(`Vapor 渲染路径直接面向原生 DOM，减少额外协调开销；配合细粒度响应式更新，在复杂界面中能保持更稳的性能与内存表现。`));let X=a(`section`,p);n(p,X),b(X,`max-w-[1100px] mx-auto mt-12`);let bt=a(`h2`,X);n(X,bt),b(bt,`text-2xl font-semibold mb-2`),n(bt,e(`React 风格 JSX，Vue 式响应式 API`));let xt=a(`p`,X);n(X,xt),b(xt,`text-gray-600`),n(xt,e(`Rue 适合希望保留 React 风格 JSX，同时获得 Vue 式响应式 API 的项目。你既可以用 useState，也可以用 ref / reactive / computed 来组织交互逻辑。`));let Z=a(`div`,X);n(X,Z),b(Z,`mt-6 grid md:grid-cols-2 gap-6 items-start`);let St=a(`div`,Z);n(Z,St),b(St,`card bg-base-100 border p-0 overflow-auto h-[360px] md:h-[660px]`);let Ct=o(`rue:component:anchor`);n(St,Ct),s(()=>{let e=x(D,{className:`h-full`,lang:`tsx`,code:`import { type FC, useState, ref, reactive, computed } from '@rue-js/rue';

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

export default Reactive;`});t(()=>y(e,St,Ct))});let Q=a(`div`,Z);n(Z,Q),b(Q,`grid gap-6`);let wt=a(`div`,Q);n(Q,wt);let Tt=a(`h3`,wt);n(wt,Tt),b(Tt,`text-lg font-semibold mb-2 text-base-content`),n(Tt,e(`前端的发展，从原始DOM，到 JQUERY等`));let Et=o(`rue:component:anchor`);n(wt,Et),s(()=>{let e=x(ae,{videos:ie});t(()=>y(e,wt,Et))});let $=a(`div`,Q);n(Q,$);let Dt=a(`h3`,$);n($,Dt),b(Dt,`text-lg font-semibold mb-2 text-base-content`),n(Dt,e(`ref / reactive 示例`));let Ot=o(`rue:component:anchor`);n($,Ot),y(x(oe,{}),$,Ot);let kt=a(`p`,X);n(X,kt),b(kt,`mt-6 text-gray-600`),n(kt,e(`Rue 支持渐进集成：你可以在现有页面中按需挂载组件、路由或交互片段，而不必一次性重写整站。`));let At=o(`rue:component:anchor`);n(p,At),s(()=>{let e=x(me,{eyebrow:`Platinum Sponsor`,title:`白金赞助商`,items:ue,actionLabel:`成为赞助商`,actionTo:`/page/sponsor/index`});t(()=>y(e,p,At))});let jt=o(`rue:component:anchor`);n(p,jt),s(()=>{let e=x(me,{eyebrow:`Gold Sponsor`,title:`黄金赞助商`,actionLabel:`成为赞助商`,actionTo:`/page/sponsor/index`,items:de});t(()=>y(e,p,jt))});let Mt=o(`rue:component:anchor`);return n(p,Mt),s(()=>{let e=x(me,{eyebrow:`Links`,title:`友情链接`,items:fe});t(()=>y(e,p,Mt))}),p})};export{j as default};