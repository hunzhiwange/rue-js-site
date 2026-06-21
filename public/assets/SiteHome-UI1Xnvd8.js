import{$t as e,Jt as t,Q as n,St as r,Z as i,_t as a,an as o,dt as s,et as c,in as l,it as u,jt as d,l as f,lt as p,nt as m,o as h,rt as g,s as _,t as v,tt as y,ut as b,vt as x,zt as S}from"./vapor-runtime-DsQWl-IB.js";import{a as C,n as w}from"./vapor-helpers-vapor-Dg64FcpK.js";import{n as T}from"./src-BQmFTPN8.js";import{n as E,t as D}from"./Code-4SUSUwRg.js";var O=t=>f(r=>{let i=m(`div`,r);s(i,`card bg-base-100 border border-base-200 shadow-sm`);let a=m(`div`,i);n(i,a),s(a,`card-body`);let o=m(`div`,a);n(a,o),s(o,`flex items-center gap-3 mb-1`);let l=m(`div`,o);n(o,l),s(l,`w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center`);let u=m(`span`,l);n(l,u),s(u,`text-lg`);let d=c(`rue:slot:anchor`);n(u,d),S(()=>{let n=t.icon||`⚡️`;e(()=>h(n,u,d))});let f=m(`div`,o);n(o,f),s(f,`font-semibold text-base-content`);let p=c(`rue:slot:anchor`);n(f,p),S(()=>{let n=t.title;e(()=>h(n,f,p))});let g=m(`p`,a);n(a,g),s(g,`text-sm text-base-content/70`);let _=c(`rue:slot:anchor`);return n(g,_),S(()=>{let n=t.desc;e(()=>h(n,g,_))}),i}),ee=()=>f(e=>{let t=m(`div`,e);s(t,`card bg-primary text-primary-content shadow-sm`);let r=m(`div`,t);n(t,r),s(r,`card-body items-center text-center`);let i=m(`div`,r);n(r,i),s(i,`text-3xl font-extrabold`),n(i,g(`Hello`));let a=m(`div`,r);return n(r,a),s(a,`mt-2 text-sm opacity-90`),n(a,g(`Hello component`)),t}),te=()=>f(e=>{let t=m(`div`,e);s(t,`card bg-base-100 text-base-content border border-base-200 shadow-sm`);let r=m(`div`,t);n(t,r),s(r,`card-body items-center text-center`);let i=m(`div`,r);n(r,i),s(i,`text-3xl font-extrabold`),n(i,g(`World`));let a=m(`div`,r);return n(r,a),s(a,`mt-2 text-sm text-base-content/70`),n(a,g(`World component`)),t}),ne=()=>f(e=>{let t=m(`div`,e);s(t,`card bg-accent text-accent-content shadow-sm`);let r=m(`div`,t);n(t,r),s(r,`card-body items-center text-center`);let i=m(`div`,r);n(r,i),s(i,`text-3xl font-extrabold`),n(i,g(`Hi`));let a=m(`div`,r);return n(r,a),s(a,`mt-2 text-sm opacity-90`),n(a,g(`Rue`)),t}),re=()=>f(e=>{let t=m(`div`,e);s(t,`card bg-base-100 text-base-content border border-base-200 shadow-sm`);let r=m(`div`,t);n(t,r),s(r,`card-body items-center text-center`);let i=m(`div`,r);n(r,i),s(i,`text-3xl font-extrabold`),n(i,g(`Yes`));let a=m(`div`,r);return n(r,a),s(a,`mt-2 text-sm text-base-content/70`),n(a,g(`My name is Rue`)),t}),ie=[{title:`原始 DOM 编程`,desc:`直接操作节点与事件`},{title:`jQuery 的崛起`,desc:`Write Less, Do More`},{title:`Backbone.js 与 MVC`,desc:`早期前端架构探索`},{title:`Web Components`,desc:`原生组件标准`},{title:`现代构建工具与生态`,desc:`模块化与开发体验`}],k=e=>f(t=>{let n=m(`input`,t);return s(n,`w-full rounded-md border border-base-300 bg-base-100 px-3 py-2 text-base-content shadow-sm focus:border-violet-500 focus:ring focus:ring-violet-200`),S(()=>{a(n,e.value)}),i(n,`input`,t=>e.onChange(t.target.value)),p(n,`placeholder`,`搜索视频`),n}),A=t=>f(r=>{let i=m(`div`,r);s(i,`mt-3 space-y-2`);let a=m(`div`,i);n(i,a),s(a,`text-sm text-base-content/70`);let o=c(`rue:slot:anchor`);n(a,o),S(()=>{let n=t.videos.length;e(()=>h(n,a,o))}),n(a,g(` 个视频`));let l=c(`rue:slot:anchor`);return n(i,l),S(()=>{let r=t.videos.length===0?f(()=>{let r=y(),i=m(`div`,r);n(r,i),s(i,`rounded-md border border-base-300/70 bg-base-100/70 backdrop-blur-sm p-3 text-sm text-base-content/70`);let a=c(`rue:slot:anchor`);return n(i,a),S(()=>{let n=t.emptyHeading||`暂无匹配`;e(()=>h(n,i,a))}),r}):f(()=>{let r=y(),i=m(`ul`,r);n(r,i),s(i,`space-y-2`);let a=c(`rue:list:start`),o=c(`rue:list:end`);n(i,a),n(i,o);let l=new Map;return S(()=>{l=w({items:t.videos||[],getKey:(e,t)=>t,elements:l,parent:i,before:o,singleRoot:!0,start:a,renderItem:(t,r,i,a,o)=>{h(f(()=>{let r=y(),i=m(`li`,r);n(r,i),S(()=>{p(i,`key`,String(o))}),s(i,`rounded-md border border-base-300/70 bg-base-100/70 backdrop-blur-sm p-3`);let a=m(`div`,i);n(i,a),s(a,`font-medium text-base-content`);let l=c(`rue:slot:anchor`);n(a,l),S(()=>{let n=t.title;e(()=>h(n,a,l))});let u=m(`div`,i);n(i,u),s(u,`text-sm text-base-content/70`);let d=c(`rue:slot:anchor`);return n(u,d),S(()=>{let n=t.desc;e(()=>h(n,u,d))}),r}),r,i)}})}),r});e(()=>h(r,i,l))}),i}),ae=t=>{let{searchText:i,setSearchText:a,foundVideos:s}=C(`useSetup:0:0`,()=>l(()=>{let[e,n]=C(`useState:1:0`,()=>o(``));return{searchText:e,setSearchText:n,foundVideos:C(`computed:1:1`,()=>r(()=>t.videos.filter(t=>t.title.toLowerCase().includes(e.value.toLowerCase()))))}}));return f(t=>{let r=y(),o=c(`rue:component:anchor`);n(r,o),S(()=>{let t=v(k,{value:i.value,onChange:a});e(()=>h(t,r,o))});let l=c(`rue:component:anchor`);return n(r,l),S(()=>{let t=v(A,{videos:s.get(),emptyHeading:`没有匹配 “${i.value}”`});e(()=>h(t,r,l))}),r})},oe=()=>{let{count:e,state:r}=C(`useSetup:0:0:dup1`,()=>l(()=>({count:C(`ref:1:2`,()=>t(0)),state:C(`reactive:1:3`,()=>d({enabled:!1}))})));return f(t=>{let a=m(`div`,t);s(a,`rounded-xl border border-base-300/70 bg-base-100/70 backdrop-blur-sm p-4`);let o=m(`div`,a);n(a,o),s(o,`flex items-center gap-3`);let c=m(`button`,o);n(o,c),s(c,`btn btn-primary`),i(c,`click`,()=>e.value++),n(c,g(`+1`));let l=m(`button`,o);n(o,l),s(l,`btn btn-outline`),i(l,`click`,()=>e.value=0),n(l,g(`重置`));let d=m(`label`,o);n(o,d),s(d,`flex items-center gap-2 ml-auto`);let f=m(`input`,d);n(d,f),p(f,`type`,`checkbox`),s(f,`checkbox`),S(()=>{b(f,!!r.enabled)}),i(f,`change`,e=>r.enabled=e.target.checked);let h=m(`span`,d);n(d,h),s(h,`text-sm text-base-content`),n(h,g(`启用`));let _=m(`div`,a);n(a,_),s(_,`mt-2 text-sm text-base-content/70`),n(_,g(`计数：`));let v=u(_);n(_,v),S(()=>{x(v,e.value)}),n(_,g(`，启用：`));let y=u(_);return n(_,y),S(()=>{x(y,r.enabled?`是`:`否`)}),a})},se=()=>{let{count:r}=C(`useSetup:0:0:dup2`,()=>l(()=>({count:C(`ref:1:4`,()=>t(0))})));return f(t=>{let a=m(`div`,t);s(a,`card h-[330px] border border-base-300/70 bg-base-100/80 shadow-sm backdrop-blur-sm`);let o=m(`div`,a);n(a,o),s(o,`card-body flex h-full p-6`);let l=m(`div`,o);n(o,l),s(l,`flex items-start justify-between gap-4`);let d=m(`div`,l);n(l,d);let p=m(`div`,d);n(d,p),s(p,`text-sm uppercase tracking-[0.22em] text-base-content/45`),n(p,g(`Live Demo`));let _=m(`div`,d);n(d,_),s(_,`mt-2 text-sm text-base-content/70`),n(_,g(`一个 ref signal 同时驱动计数和 v-if 条件分支。`));let v=m(`div`,l);n(l,v),s(v,`badge badge-outline badge-lg`);let b=u(v);n(v,b),S(()=>{x(b,r.value)});let C=m(`div`,o);n(o,C),s(C,`mt-6 grid gap-4`);let w=m(`button`,C);n(C,w),s(w,`rounded-xl border border-base-300 bg-base-100 px-4 py-3 text-base font-medium text-base-content shadow-sm transition hover:border-primary hover:text-primary`),i(w,`click`,()=>r.value++),n(w,g(`计数：`));let T=u(w);n(w,T),S(()=>{x(T,r.value)});let E=m(`div`,C);n(C,E),s(E,`min-h-[96px] rounded-2xl border border-base-300/70 bg-base-200/40 p-4`);let D=c(`rue:slot:anchor`);n(E,D),S(()=>{let t=r.value%2==0?f(()=>{let e=y(),t=m(`div`,e);n(e,t),s(t,`flex h-full items-center justify-between gap-3`);let r=m(`div`,t);n(t,r);let i=m(`div`,r);n(r,i),s(i,`font-semibold text-base-content`),n(i,g(`偶数态 UI`));let a=m(`div`,r);n(r,a),s(a,`mt-1 text-sm text-base-content/70`),n(a,g(`当前展示欢迎提示卡片。`));let o=m(`span`,t);return n(t,o),s(o,`badge badge-info badge-lg`),n(o,g(`v-if`)),e}):f(()=>{let e=y(),t=m(`div`,e);n(e,t),s(t,`flex h-full items-center justify-between gap-3`);let r=m(`div`,t);n(t,r);let i=m(`div`,r);n(r,i),s(i,`font-semibold text-base-content`),n(i,g(`奇数态 UI`));let a=m(`div`,r);n(r,a),s(a,`mt-1 text-sm text-base-content/70`),n(a,g(`signal 更新后切到另一套界面。`));let o=m(`span`,t);return n(t,o),s(o,`badge badge-success badge-lg`),n(o,g(`v-else`)),e});e(()=>h(t,E,D))});let O=m(`div`,o);return n(o,O),s(O,`mt-auto text-xs tracking-[0.16em] text-base-content/45`),n(O,g(`点击按钮时，下面的两个 UI 会跟着 signal 一起切换。`)),a})},ce=`import { type FC, ref } from '@rue-js/rue'

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

export default App`,le=[{id:`npm`,label:`npm`,command:`npm create rue@latest`},{id:`pnpm`,label:`pnpm`,command:`pnpm create rue@latest`},{id:`bun`,label:`bun`,command:`bun create rue@latest`},{id:`yarn`,label:`yarn`,command:`yarn dlx create-rue@latest`}],ue=[{name:`虚位以待`,href:`/page/sponsor/index`,description:`期待与你一起支持 Rue 生态建设。`}],de=[{name:`虚位以待`,href:`/page/sponsor/index`,description:`欢迎加入 Rue 赞助计划。`}],fe=[{name:`QueryPHP`,href:`https://www.queryphp.com`,description:`现代化 PHP 开发框架`},{name:`VibeWindow`,href:`https://vibewindow.huododo.com/#/`,description:`氛围视窗软件智能体`},{name:`订货宝`,href:`https://www.dhb168.com/?from=ruejs`,description:`经销商订货系统与批发贸易订货平台`},{name:`Vercel`,href:`https://vercel.com`,description:`云部署与前端基础设施`}],pe=[{title:`i18n 国际化插件`,desc:`直接展示源文本即 key、局部插值和按需懒加载语言包的完整链路。`,to:`/examples/i18n-switcher`,eyebrow:`I18n Demo`,accentClassName:`border-emerald-200 bg-linear-to-br from-emerald-500/12 via-base-100 to-teal-500/10 hover:border-emerald-400/60`},{title:`路由插件`,desc:`集中看嵌套路由、守卫、redirect 和实验页在真实页面里的组合方式。`,to:`/examples/router-demo/guide/router/overview`,eyebrow:`Router Demo`,accentClassName:`border-sky-200 bg-linear-to-br from-sky-500/12 via-base-100 to-cyan-500/10 hover:border-sky-400/60`},{title:`数据状态与 URL 同步插件`,desc:`把 Store、筛选条件和查询串连起来，观察状态如何驱动可分享链接。`,to:`/examples/store-query-sync`,eyebrow:`State Demo`,accentClassName:`border-amber-200 bg-linear-to-br from-amber-500/12 via-base-100 to-orange-500/10 hover:border-amber-400/60`},{title:`Text.js 全栈应用框架`,desc:`基于 Vite、Rue、RSC 与文件系统路由，了解 App Router、SSR、API 路由和 Workers 部署。`,to:`/textjs`,eyebrow:`Full-stack`,accentClassName:`border-cyan-200 bg-linear-to-br from-cyan-500/12 via-base-100 to-blue-500/10 hover:border-cyan-400/60`}],me=t=>f(r=>{let i=m(`section`,r);s(i,`max-w-[1100px] mx-auto mt-8`);let a=m(`div`,i);n(i,a),s(a,`flex flex-col gap-3 md:flex-row md:items-end md:justify-between`);let o=m(`div`,a);n(a,o);let l=m(`div`,o);n(o,l),s(l,`text-sm font-semibold uppercase tracking-[0.24em] text-base-content/45`);let u=c(`rue:slot:anchor`);n(l,u),S(()=>{let n=t.eyebrow;e(()=>h(n,l,u))});let d=m(`h2`,o);n(o,d),s(d,`mt-2 text-3xl font-semibold text-base-content`);let g=c(`rue:slot:anchor`);n(d,g),S(()=>{let n=t.title;e(()=>h(n,d,g))});let _=c(`rue:slot:anchor`);n(a,_),S(()=>{let r=t.actionLabel&&t.actionTo?f(()=>{let r=y(),i=c(`rue:component:anchor`);return n(r,i),S(()=>{let n=v(T,{to:t.actionTo,className:`btn btn-outline self-start md:self-auto`,children:t.actionLabel});e(()=>h(n,r,i))}),r}):``;e(()=>h(r,a,_))});let b=m(`div`,i);n(i,b),S(()=>{s(b,`mt-5 grid gap-4 ${t.items.length>1?`md:grid-cols-2`:``}`)});let x=c(`rue:list:start`),C=c(`rue:list:end`);n(b,x),n(b,C);let E=new Map;return S(()=>{E=w({items:t.items||[],getKey:(e,t)=>e.name,elements:E,parent:b,before:C,singleRoot:!0,trackIndex:!1,start:x,renderItem:(t,r,i,a,o)=>{h(f(()=>{let r=y(),i=m(`a`,r);n(r,i),S(()=>{p(i,`key`,String(t.name))}),S(()=>{p(i,`href`,String(t.href))}),p(i,`target`,`_blank`),p(i,`rel`,`noreferrer`),s(i,`group rounded-[1.5rem] border border-base-200 bg-base-100/90 p-5 transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg`);let a=m(`div`,i);n(i,a),s(a,`flex min-h-[116px] flex-col justify-center gap-4`);let o=m(`div`,a);n(a,o);let l=m(`div`,o);n(o,l),s(l,`text-3xl font-semibold tracking-tight text-base-content`);let u=c(`rue:slot:anchor`);n(l,u),S(()=>{let n=t.name;e(()=>h(n,l,u))});let d=m(`p`,o);n(o,d),s(d,`mt-3 max-w-[30ch] text-base leading-7 text-base-content/65`);let f=c(`rue:slot:anchor`);return n(d,f),S(()=>{let n=t.description;e(()=>h(n,d,f))}),r}),r,i)}})}),i}),j=()=>{let{activeCreateCommand:a,selectedCreateCommand:o,createCommandCopy:d}=C(`useSetup:0:0:dup3`,()=>l(()=>{let e=C(`ref:1:5`,()=>t(`npm`)),n=C(`computed:1:6`,()=>r(()=>le.find(t=>t.id===e.value)??le[0]));return{activeCreateCommand:e,selectedCreateCommand:n,createCommandCopy:C(`computed:1:7`,()=>r(()=>E(()=>n.get().command)))}}));return f(t=>{let r=y(),l=m(`section`,r);n(r,l),s(l,`relative rounded-2xl bg-gr2adient-to-br from-violet-50 to-fuchsia-50 p-12 mb-10`);let b=m(`div`,l);n(l,b),s(b,`absolute -top-24 -left-24 w-96 h-96 rounded-full bg-violet-200/40 blur-3xl`);let C=m(`div`,l);n(l,C),s(C,`absolute -bottom-24 -right-24 w-md h-112 rounded-full bg-fuchsia-200/40 blur-3xl`);let E=m(`div`,l);n(l,E),s(E,`relative max-w-[1100px] mx-auto text-center`);let k=m(`div`,E);n(E,k),s(k,`hover-3d`);let A=m(`figure`,k);n(k,A);let j=m(`div`,A);n(A,j),p(j,`class`,`mx-auto w-full px-6 pb-4 text-center`);let M=m(`div`,j);n(j,M),p(M,`class`,`flex select-none items-end justify-center gap-6 whitespace-nowrap text-[clamp(6rem,21vw,16rem)] font-black leading-none bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent md:gap-10`);let he=m(`span`,M);n(M,he),n(he,g(`Rue`));let ge=m(`span`,M);n(M,ge),p(ge,`class`,`pl-1`),n(ge,g(`.JS`));let N=m(`div`,A);n(A,N),s(N,`inline-flex items-center justify-center gap-3`);let _e=m(`span`,N);n(N,_e),s(_e,`inline-flex items-center justify-center w-28 h-28 md:w-30 md:h-30 rounded-full bg-linear-to-br from-sky-500 via-cyan-400 to-emerald-300 shadow-md ring-1 ring-white/15`);let ve=m(`span`,_e);n(_e,ve),s(ve,`text-black font-extrabold text-[28px] md:text-[112px] leading-none drop-shadow-none`),n(ve,g(`T`));let ye=m(`span`,N);n(N,ye),s(ye,`text-[44px] md:text-[95px] font-extrabold tracking-tight bg-linear-to-r from-sky-500 via-cyan-400 to-emerald-300 bg-clip-text text-transparent`),n(ye,g(`he Wasm`));let be=m(`div`,A);n(A,be),s(be,`mt-2 text-[44px] md:text-[62px] font-extrabold tracking-tight bg-linear-to-r from-sky-400 via-cyan-300 to-teal-200 bg-clip-text text-transparent`),n(be,g(`Framework For Native DOM`));let xe=m(`p`,A);n(A,xe),s(xe,`mt-6 text-lg md:text-xl text-base-content/70`),n(xe,g(`Rust 运行时，Rust 响应式系统，Rust 原生 DOM 编译器`)),n(k,m(`div`,k)),n(k,m(`div`,k)),n(k,m(`div`,k)),n(k,m(`div`,k)),n(k,m(`div`,k)),n(k,m(`div`,k)),n(k,m(`div`,k)),n(k,m(`div`,k));let P=m(`div`,E);n(E,P),s(P,`mt-8 flex flex-wrap justify-center gap-3`);let Se=c(`rue:component:anchor`);n(P,Se),h(v(T,{to:`/guide/guide/quick-start`,className:`btn btn-primary btn-lg`,children:`快速上手`}),P,Se);let Ce=c(`rue:component:anchor`);n(P,Ce),h(v(T,{to:`/guide/guide/introduction`,className:`btn btn-outline btn-lg`,children:`文档`}),P,Ce);let we=c(`rue:component:anchor`);n(P,we),h(v(T,{to:`/api/api/index`,className:`btn btn-outline btn-lg`,children:`API`}),P,we);let F=m(`a`,P);n(P,F),p(F,`href`,`https://github.com/hunzhiwange/ruejs`),p(F,`target`,`_blank`),s(F,`btn btn-outline btn-lg`),n(F,g(`Github`));let I=m(`div`,E);n(E,I),s(I,`mx-auto mt-18 max-w-[900px] rounded-2xl border border-white/60 bg-slate-950/90 p-4 text-left shadow-xl shadow-fuchsia-200/40`);let L=m(`div`,I);n(I,L),s(L,`mb-3 flex flex-wrap items-center justify-between gap-3`);let R=m(`div`,L);n(L,R),s(R,`flex items-center gap-2`);let Te=m(`span`,R);n(R,Te),s(Te,`h-3 w-3 rounded-full bg-rose-400`);let Ee=m(`span`,R);n(R,Ee),s(Ee,`h-3 w-3 rounded-full bg-amber-400`);let De=m(`span`,R);n(R,De),s(De,`h-3 w-3 rounded-full bg-emerald-400`);let Oe=m(`span`,R);n(R,Oe),s(Oe,`ml-2 text-xs uppercase tracking-[0.24em] text-white/45`),n(Oe,g(`Quick Start`));let z=m(`div`,L);n(L,z),s(z,`inline-flex rounded-xl border border-white/10 bg-white/5 p-1`),p(z,`role`,`tablist`),p(z,`aria-label`,`选择创建命令`);let ke=c(`rue:list:start`),Ae=c(`rue:list:end`);n(z,ke),n(z,Ae);let je=new Map;S(()=>{je=w({items:le||[],getKey:(e,t)=>e.id,elements:je,parent:z,before:Ae,singleRoot:!0,trackIndex:!1,start:ke,renderItem:(t,r,o,l,u)=>{h(f(()=>{let r=y(),o=m(`button`,r);n(r,o),S(()=>{p(o,`key`,String(t.id))}),p(o,`type`,`button`),p(o,`role`,`tab`),S(()=>{p(o,`aria-selected`,String(a.value===t.id))}),S(()=>{s(o,`rounded-lg px-3 py-1.5 text-xs font-medium transition ${a.value===t.id?`bg-white text-slate-950 shadow-sm`:`text-white/65 hover:text-white`}`)}),i(o,`click`,()=>{a.value=t.id});let l=c(`rue:slot:anchor`);return n(o,l),S(()=>{let n=t.label;e(()=>h(n,o,l))}),r}),r,o)}})});let B=m(`div`,I);n(I,B),s(B,`flex flex-col gap-3 md:flex-row md:items-center`);let Me=m(`pre`,B);n(B,Me),s(Me,`min-w-0 flex-1 overflow-x-auto text-sm text-white/92 md:text-base`);let Ne=m(`code`,Me);n(Me,Ne),n(Ne,g(`$ `));let Pe=c(`rue:slot:anchor`);n(Ne,Pe),S(()=>{let t=o.get().command;e(()=>h(t,Ne,Pe))});let V=m(`button`,B);n(B,V),p(V,`type`,`button`),S(()=>{s(V,`shrink-0 rounded-xl border px-3 py-2 text-xs font-medium transition ${d.get().copied.value?`border-emerald-300/30 bg-emerald-400/15 text-emerald-100`:`border-white/10 bg-white/5 text-white/75 hover:bg-white/10 hover:text-white`}`)}),S(()=>{p(V,`aria-label`,String(`复制 ${o.get().label} 创建命令`))}),i(V,`click`,d.get().handleCopy);let Fe=u(V);n(V,Fe),S(()=>{x(Fe,d.get().copied.value?`已复制`:`复制`)});let H=m(`section`,r);n(r,H),s(H,`grid md:grid-cols-3 gap-6 max-w-[1100px] mx-auto`);let Ie=c(`rue:component:anchor`);n(H,Ie),h(v(O,{title:`简洁易用`,desc:`轻量、直观的 API，适合渐进式接入；保留熟悉的 JSX / TSX 开发方式，无需额外模板语法。`,icon:`✅`}),H,Ie);let Le=c(`rue:component:anchor`);n(H,Le),h(v(O,{title:`编译驱动的原生 DOM 渲染`,desc:`围绕真实 DOM 做最小更新，并可结合 Rust / Wasm 运行时扩展与原生 DOM 编译能力。`,icon:`🦀`}),H,Le);let Re=c(`rue:component:anchor`);n(H,Re),h(v(O,{title:`React JSX + Vue 式响应式`,desc:`适合希望保留 React 风格 JSX，同时获得 ref、reactive、computed 等 Vue 式响应式 API 的项目。`,icon:`🤝`}),H,Re);let ze=m(`section`,r);n(r,ze),s(ze,`max-w-[1100px] mx-auto mt-12`);let U=m(`div`,ze);n(ze,U),s(U,`mt-6 grid md:grid-cols-2 gap-6 items-stretch`);let Be=m(`div`,U);n(U,Be),s(Be,`card bg-base-100 border p-0 overflow-auto h-[330px]`);let Ve=c(`rue:component:anchor`);n(Be,Ve),S(()=>{let t=v(D,{className:`h-full`,lang:`tsx`,code:ce});e(()=>h(t,Be,Ve))});let He=c(`rue:component:anchor`);n(U,He),h(v(se,{}),U,He);let Ue=m(`section`,r);n(r,Ue),s(Ue,`mt-12 rounded-2xl p-8 bg-linear-to-br from-pink-500/80 to-fuchsia-500/80 text-white ring-1 ring-white/30 shadow-lg max-w-[1100px] mx-auto`);let W=m(`div`,Ue);n(Ue,W),s(W,`md:flex items-center justify-between`);let We=m(`div`,W);n(W,We);let Ge=m(`h2`,We);n(We,Ge),s(Ge,`text-2xl font-semibold mb-2 text-white`),n(Ge,g(`生态与插件`));let Ke=m(`p`,We);n(We,Ke),s(Ke,`text-white/90`),n(Ke,g(`官方路由、设计组件库与构建插件协同工作，也支持渐进式接入现有应用。`));let G=m(`div`,W);n(W,G),s(G,`mt-4 md:mt-0 flex gap-3`);let qe=c(`rue:component:anchor`);n(G,qe),h(v(T,{to:`/plugins`,className:`btn btn-outline`,children:`插件`}),G,qe);let Je=c(`rue:component:anchor`);n(G,Je),h(v(T,{to:`/design/button`,className:`btn btn-outline`,children:`组件库`}),G,Je);let Ye=c(`rue:component:anchor`);n(G,Ye),h(v(T,{to:`/textjs`,className:`btn btn-outline`,children:`Text.js`}),G,Ye);let Xe=m(`section`,r);n(r,Xe),s(Xe,`max-w-[1100px] mx-auto mt-8`);let Ze=m(`div`,Xe);n(Xe,Ze),s(Ze,`mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4`);let Qe=c(`rue:list:start`),$e=c(`rue:list:end`);n(Ze,Qe),n(Ze,$e);let et=new Map;S(()=>{et=w({items:pe||[],getKey:(e,t)=>e.to,elements:et,parent:Ze,before:$e,start:Qe,renderItem:(t,r,i,a,o)=>{let l=f(()=>{let r=y(),i=m(`div`,r);n(r,i),s(i,`text-xs font-semibold uppercase tracking-[0.22em] text-base-content/55`);let a=c(`rue:slot:anchor`);n(i,a),S(()=>{let n=t.eyebrow;e(()=>h(n,i,a))});let o=m(`div`,r);n(r,o),s(o,`mt-3 text-xl font-semibold text-base-content`);let l=c(`rue:slot:anchor`);n(o,l),S(()=>{let n=t.title;e(()=>h(n,o,l))});let u=m(`p`,r);n(r,u),s(u,`mt-2 text-sm leading-6 text-base-content/72`);let d=c(`rue:slot:anchor`);n(u,d),S(()=>{let n=t.desc;e(()=>h(n,u,d))});let f=m(`div`,r);return n(r,f),s(f,`mt-4 text-sm font-medium text-base-content/88`),n(f,g(`打开 Demo`)),r});_(v(T,{key:t.to,to:t.to,className:`group rounded-[1.5rem] border p-5 text-left text-base-content transition hover:-translate-y-0.5 hover:shadow-xl ${t.accentClassName}`,children:l}),r,i,a)}})});let K=m(`section`,r);n(r,K),s(K,`max-w-[1100px] mx-auto mt-12`);let tt=m(`h2`,K);n(K,tt),s(tt,`text-2xl font-semibold mb-2`),n(tt,g(`用组件组织界面`));let nt=m(`p`,K);n(K,nt),s(nt,`text-gray-600`),n(nt,g(`Rue 以 JSX / TSX 组件表达界面中的可复用片段。组件同时包含结构与逻辑，按需组合即可形成页面或模块。`));let q=m(`div`,K);n(K,q),s(q,`mt-6 grid md:grid-cols-2 gap-6 items-start`);let rt=m(`div`,q);n(q,rt),s(rt,`card bg-base-100 border p-0 overflow-auto h-[360px] md:h-[560px]`);let it=c(`rue:component:anchor`);n(rt,it),S(()=>{let t=v(D,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue'

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

export default HelloWorld`});e(()=>h(t,rt,it))});let J=m(`div`,q);n(q,J),s(J,`grid gap-6`);let at=c(`rue:component:anchor`);n(J,at),h(v(ee,{}),J,at);let ot=c(`rue:component:anchor`);n(J,ot),h(v(te,{}),J,ot);let st=c(`rue:component:anchor`);n(J,st),h(v(ne,{}),J,st);let ct=c(`rue:component:anchor`);n(J,ct),h(v(re,{}),J,ct);let lt=m(`p`,K);n(K,lt),s(lt,`mt-6 text-gray-600`),n(lt,g(`Rue 的组件强调可复用与可组合，保持清晰的数据与事件流，也方便把交互片段渐进接入现有页面。`));let Y=m(`section`,r);n(r,Y),s(Y,`max-w-[1100px] mx-auto mt-12`);let ut=m(`h2`,Y);n(Y,ut),s(ut,`text-2xl font-semibold mb-2`),n(ut,g(`Vapor 渲染路径：更贴近真实 DOM 更新模型`));let dt=m(`p`,Y);n(Y,dt),s(dt,`text-gray-600`),n(dt,g(`Rue 提供默认 Block / Vapor 渲染路径，Vapor 适合需要更高性能、细粒度更新的区域。`));let ft=m(`p`,Y);n(Y,ft),s(ft,`text-gray-600`),n(ft,g(`结合 Rust 实现的响应式系统、Rust / Wasm 运行时与原生 DOM 编译能力，Vapor 会把 JSX 转换为更贴近真实 DOM 的产物。`));let X=m(`div`,Y);n(Y,X),s(X,`mt-6 grid md:grid-cols-2 gap-6 items-start`);let pt=m(`div`,X);n(X,pt),s(pt,`card bg-base-100 border overflow-auto h-[360px] md:h-[510px]`);let mt=c(`rue:component:anchor`);n(pt,mt),S(()=>{let t=v(D,{className:`h-full`,lang:`tsx`,code:`const Hello: FC = () => (
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

export default HelloWorld`});e(()=>h(t,pt,mt))});let ht=m(`div`,X);n(X,ht),s(ht,`card bg-base-100 border p-0 overflow-auto h-[360px] md:h-[510px]`);let gt=c(`rue:component:anchor`);n(ht,gt),S(()=>{let t=v(D,{className:`h-full`,lang:`ts`,code:`/* RUE_VAPOR_TRANSFORMED */
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
export default HelloWorld;`});e(()=>h(t,ht,gt))});let _t=m(`div`,Y);n(Y,_t),s(_t,`mt-6 space-y-3 text-gray-700`);let vt=m(`p`,_t);n(_t,vt),n(vt,g(`Vapor 渲染路径直接面向原生 DOM，减少额外协调开销；配合细粒度响应式更新，在复杂界面中能保持更稳的性能与内存表现。`));let Z=m(`section`,r);n(r,Z),s(Z,`max-w-[1100px] mx-auto mt-12`);let yt=m(`h2`,Z);n(Z,yt),s(yt,`text-2xl font-semibold mb-2`),n(yt,g(`React 风格 JSX，Vue 式响应式 API`));let bt=m(`p`,Z);n(Z,bt),s(bt,`text-gray-600`),n(bt,g(`Rue 适合希望保留 React 风格 JSX，同时获得 Vue 式响应式 API 的项目。你既可以用 useState，也可以用 ref / reactive / computed 来组织交互逻辑。`));let Q=m(`div`,Z);n(Z,Q),s(Q,`mt-6 grid md:grid-cols-2 gap-6 items-start`);let xt=m(`div`,Q);n(Q,xt),s(xt,`card bg-base-100 border p-0 overflow-auto h-[360px] md:h-[660px]`);let St=c(`rue:component:anchor`);n(xt,St),S(()=>{let t=v(D,{className:`h-full`,lang:`tsx`,code:`import { type FC, useState, ref, reactive, computed } from '@rue-js/rue';

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

export default Reactive;`});e(()=>h(t,xt,St))});let $=m(`div`,Q);n(Q,$),s($,`grid gap-6`);let Ct=m(`div`,$);n($,Ct);let wt=m(`h3`,Ct);n(Ct,wt),s(wt,`text-lg font-semibold mb-2 text-base-content`),n(wt,g(`前端的发展，从原始DOM，到 JQUERY等`));let Tt=c(`rue:component:anchor`);n(Ct,Tt),S(()=>{let t=v(ae,{videos:ie});e(()=>h(t,Ct,Tt))});let Et=m(`div`,$);n($,Et);let Dt=m(`h3`,Et);n(Et,Dt),s(Dt,`text-lg font-semibold mb-2 text-base-content`),n(Dt,g(`ref / reactive 示例`));let Ot=c(`rue:component:anchor`);n(Et,Ot),h(v(oe,{}),Et,Ot);let kt=m(`p`,Z);n(Z,kt),s(kt,`mt-6 text-gray-600`),n(kt,g(`Rue 支持渐进集成：你可以在现有页面中按需挂载组件、路由或交互片段，而不必一次性重写整站。`));let At=c(`rue:component:anchor`);n(r,At),S(()=>{let t=v(me,{eyebrow:`Platinum Sponsor`,title:`白金赞助商`,items:ue,actionLabel:`成为赞助商`,actionTo:`/page/sponsor/index`});e(()=>h(t,r,At))});let jt=c(`rue:component:anchor`);n(r,jt),S(()=>{let t=v(me,{eyebrow:`Gold Sponsor`,title:`黄金赞助商`,actionLabel:`成为赞助商`,actionTo:`/page/sponsor/index`,items:de});e(()=>h(t,r,jt))});let Mt=c(`rue:component:anchor`);return n(r,Mt),S(()=>{let t=v(me,{eyebrow:`Links`,title:`友情链接`,items:fe});e(()=>h(t,r,Mt))}),r})};export{j as default};