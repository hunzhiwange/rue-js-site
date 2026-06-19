import{$ as e,$t as t,Bt as n,Dt as r,Gt as i,X as a,Xt as o,Z as s,Zt as c,ct as l,et as u,gt as d,ht as f,l as p,lt as m,nt as h,o as g,rt as _,s as v,t as y,tt as b,ut as x,yt as S}from"./vapor-runtime-CKrmRMZX.js";import{a as C,n as w}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{n as T}from"./src-nCPlgyFh.js";import{n as E,t as D}from"./Code-D5UqTwV6.js";var O=n=>p(r=>{let a=b(`div`,r);x(a,`card bg-base-100 border border-base-200 shadow-sm`);let o=b(`div`,a);s(a,o),x(o,`card-body`);let c=b(`div`,o);s(o,c),x(c,`flex items-center gap-3 mb-1`);let l=b(`div`,c);s(c,l),x(l,`w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center`);let u=b(`span`,l);s(l,u),x(u,`text-lg`);let d=e(`rue:slot:anchor`);s(u,d),t(()=>{let e=n.icon||`⚡️`;i(()=>g(e,u,d))});let f=b(`div`,c);s(c,f),x(f,`font-semibold text-base-content`);let p=e(`rue:slot:anchor`);s(f,p),t(()=>{let e=n.title;i(()=>g(e,f,p))});let m=b(`p`,o);s(o,m),x(m,`text-sm text-base-content/70`);let h=e(`rue:slot:anchor`);return s(m,h),t(()=>{let e=n.desc;i(()=>g(e,m,h))}),a}),ee=()=>p(e=>{let t=b(`div`,e);x(t,`card bg-primary text-primary-content shadow-sm`);let n=b(`div`,t);s(t,n),x(n,`card-body items-center text-center`);let r=b(`div`,n);s(n,r),x(r,`text-3xl font-extrabold`),s(r,h(`Hello`));let i=b(`div`,n);return s(n,i),x(i,`mt-2 text-sm opacity-90`),s(i,h(`Hello component`)),t}),te=()=>p(e=>{let t=b(`div`,e);x(t,`card bg-base-100 text-base-content border border-base-200 shadow-sm`);let n=b(`div`,t);s(t,n),x(n,`card-body items-center text-center`);let r=b(`div`,n);s(n,r),x(r,`text-3xl font-extrabold`),s(r,h(`World`));let i=b(`div`,n);return s(n,i),x(i,`mt-2 text-sm text-base-content/70`),s(i,h(`World component`)),t}),ne=()=>p(e=>{let t=b(`div`,e);x(t,`card bg-accent text-accent-content shadow-sm`);let n=b(`div`,t);s(t,n),x(n,`card-body items-center text-center`);let r=b(`div`,n);s(n,r),x(r,`text-3xl font-extrabold`),s(r,h(`Hi`));let i=b(`div`,n);return s(n,i),x(i,`mt-2 text-sm opacity-90`),s(i,h(`Rue`)),t}),re=()=>p(e=>{let t=b(`div`,e);x(t,`card bg-base-100 text-base-content border border-base-200 shadow-sm`);let n=b(`div`,t);s(t,n),x(n,`card-body items-center text-center`);let r=b(`div`,n);s(n,r),x(r,`text-3xl font-extrabold`),s(r,h(`Yes`));let i=b(`div`,n);return s(n,i),x(i,`mt-2 text-sm text-base-content/70`),s(i,h(`My name is Rue`)),t}),ie=[{title:`原始 DOM 编程`,desc:`直接操作节点与事件`},{title:`jQuery 的崛起`,desc:`Write Less, Do More`},{title:`Backbone.js 与 MVC`,desc:`早期前端架构探索`},{title:`Web Components`,desc:`原生组件标准`},{title:`现代构建工具与生态`,desc:`模块化与开发体验`}],k=e=>p(n=>{let r=b(`input`,n);return x(r,`w-full rounded-md border border-base-300 bg-base-100 px-3 py-2 text-base-content shadow-sm focus:border-violet-500 focus:ring focus:ring-violet-200`),t(()=>{f(r,e.value)}),a(r,`input`,t=>e.onChange(t.target.value)),l(r,`placeholder`,`搜索视频`),r}),A=n=>p(r=>{let a=b(`div`,r);x(a,`mt-3 space-y-2`);let o=b(`div`,a);s(a,o),x(o,`text-sm text-base-content/70`);let c=e(`rue:slot:anchor`);s(o,c),t(()=>{let e=n.videos.length;i(()=>g(e,o,c))}),s(o,h(` 个视频`));let d=e(`rue:slot:anchor`);return s(a,d),t(()=>{let r=n.videos.length===0?p(()=>{let r=u(),a=b(`div`,r);s(r,a),x(a,`rounded-md border border-base-300/70 bg-base-100/70 backdrop-blur-sm p-3 text-sm text-base-content/70`);let o=e(`rue:slot:anchor`);return s(a,o),t(()=>{let e=n.emptyHeading||`暂无匹配`;i(()=>g(e,a,o))}),r}):p(()=>{let r=u(),a=b(`ul`,r);s(r,a),x(a,`space-y-2`);let o=e(`rue:list:start`),c=e(`rue:list:end`);s(a,o),s(a,c);let d=new Map;return t(()=>{d=w({items:n.videos||[],getKey:(e,t)=>t,elements:d,parent:a,before:c,singleRoot:!0,start:o,renderItem:(n,r,a,o,c)=>{g(p(()=>{let r=u(),a=b(`li`,r);s(r,a),t(()=>{l(a,`key`,String(c))}),x(a,`rounded-md border border-base-300/70 bg-base-100/70 backdrop-blur-sm p-3`);let o=b(`div`,a);s(a,o),x(o,`font-medium text-base-content`);let d=e(`rue:slot:anchor`);s(o,d),t(()=>{let e=n.title;i(()=>g(e,o,d))});let f=b(`div`,a);s(a,f),x(f,`text-sm text-base-content/70`);let p=e(`rue:slot:anchor`);return s(f,p),t(()=>{let e=n.desc;i(()=>g(e,f,p))}),r}),r,a)}})}),r});i(()=>g(r,a,d))}),a}),ae=n=>{let{searchText:r,setSearchText:a,foundVideos:l}=C(`useSetup:0:0`,()=>o(()=>{let[e,t]=C(`useState:1:0`,()=>c(``));return{searchText:e,setSearchText:t,foundVideos:C(`computed:1:1`,()=>S(()=>n.videos.filter(t=>t.title.toLowerCase().includes(e.value.toLowerCase()))))}}));return p(n=>{let o=u(),c=e(`rue:component:anchor`);s(o,c),t(()=>{let e=y(k,{value:r.value,onChange:a});i(()=>g(e,o,c))});let d=e(`rue:component:anchor`);return s(o,d),t(()=>{let e=y(A,{videos:l.get(),emptyHeading:`没有匹配 “${r.value}”`});i(()=>g(e,o,d))}),o})},oe=()=>{let{count:e,state:i}=C(`useSetup:0:0:dup1`,()=>o(()=>({count:C(`ref:1:2`,()=>n(0)),state:C(`reactive:1:3`,()=>r({enabled:!1}))})));return p(n=>{let r=b(`div`,n);x(r,`rounded-xl border border-base-300/70 bg-base-100/70 backdrop-blur-sm p-4`);let o=b(`div`,r);s(r,o),x(o,`flex items-center gap-3`);let c=b(`button`,o);s(o,c),x(c,`btn btn-primary`),a(c,`click`,()=>e.value++),s(c,h(`+1`));let u=b(`button`,o);s(o,u),x(u,`btn btn-outline`),a(u,`click`,()=>e.value=0),s(u,h(`重置`));let f=b(`label`,o);s(o,f),x(f,`flex items-center gap-2 ml-auto`);let p=b(`input`,f);s(f,p),l(p,`type`,`checkbox`),x(p,`checkbox`),t(()=>{m(p,!!i.enabled)}),a(p,`change`,e=>i.enabled=e.target.checked);let g=b(`span`,f);s(f,g),x(g,`text-sm text-base-content`),s(g,h(`启用`));let v=b(`div`,r);s(r,v),x(v,`mt-2 text-sm text-base-content/70`),s(v,h(`计数：`));let y=_(v);s(v,y),t(()=>{d(y,e.value)}),s(v,h(`，启用：`));let S=_(v);return s(v,S),t(()=>{d(S,i.enabled?`是`:`否`)}),r})},se=()=>{let{count:r}=C(`useSetup:0:0:dup2`,()=>o(()=>({count:C(`ref:1:4`,()=>n(0))})));return p(n=>{let o=b(`div`,n);x(o,`card h-[330px] border border-base-300/70 bg-base-100/80 shadow-sm backdrop-blur-sm`);let c=b(`div`,o);s(o,c),x(c,`card-body flex h-full p-6`);let l=b(`div`,c);s(c,l),x(l,`flex items-start justify-between gap-4`);let f=b(`div`,l);s(l,f);let m=b(`div`,f);s(f,m),x(m,`text-sm uppercase tracking-[0.22em] text-base-content/45`),s(m,h(`Live Demo`));let v=b(`div`,f);s(f,v),x(v,`mt-2 text-sm text-base-content/70`),s(v,h(`一个 ref signal 同时驱动计数和 v-if 条件分支。`));let y=b(`div`,l);s(l,y),x(y,`badge badge-outline badge-lg`);let S=_(y);s(y,S),t(()=>{d(S,r.value)});let C=b(`div`,c);s(c,C),x(C,`mt-6 grid gap-4`);let w=b(`button`,C);s(C,w),x(w,`rounded-xl border border-base-300 bg-base-100 px-4 py-3 text-base font-medium text-base-content shadow-sm transition hover:border-primary hover:text-primary`),a(w,`click`,()=>r.value++),s(w,h(`计数：`));let T=_(w);s(w,T),t(()=>{d(T,r.value)});let E=b(`div`,C);s(C,E),x(E,`min-h-[96px] rounded-2xl border border-base-300/70 bg-base-200/40 p-4`);let D=e(`rue:slot:anchor`);s(E,D),t(()=>{let e=r.value%2==0?p(()=>{let e=u(),t=b(`div`,e);s(e,t),x(t,`flex h-full items-center justify-between gap-3`);let n=b(`div`,t);s(t,n);let r=b(`div`,n);s(n,r),x(r,`font-semibold text-base-content`),s(r,h(`偶数态 UI`));let i=b(`div`,n);s(n,i),x(i,`mt-1 text-sm text-base-content/70`),s(i,h(`当前展示欢迎提示卡片。`));let a=b(`span`,t);return s(t,a),x(a,`badge badge-info badge-lg`),s(a,h(`v-if`)),e}):p(()=>{let e=u(),t=b(`div`,e);s(e,t),x(t,`flex h-full items-center justify-between gap-3`);let n=b(`div`,t);s(t,n);let r=b(`div`,n);s(n,r),x(r,`font-semibold text-base-content`),s(r,h(`奇数态 UI`));let i=b(`div`,n);s(n,i),x(i,`mt-1 text-sm text-base-content/70`),s(i,h(`signal 更新后切到另一套界面。`));let a=b(`span`,t);return s(t,a),x(a,`badge badge-success badge-lg`),s(a,h(`v-else`)),e});i(()=>g(e,E,D))});let O=b(`div`,c);return s(c,O),x(O,`mt-auto text-xs tracking-[0.16em] text-base-content/45`),s(O,h(`点击按钮时，下面的两个 UI 会跟着 signal 一起切换。`)),o})},ce=`import { type FC, ref } from '@rue-js/rue'

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

export default App`,le=[{id:`npm`,label:`npm`,command:`npm create rue@latest`},{id:`pnpm`,label:`pnpm`,command:`pnpm create rue@latest`},{id:`bun`,label:`bun`,command:`bun create rue@latest`},{id:`yarn`,label:`yarn`,command:`yarn dlx create-rue@latest`}],ue=[{name:`虚位以待`,href:`/page/sponsor/index`,description:`期待与你一起支持 Rue 生态建设。`}],de=[{name:`虚位以待`,href:`/page/sponsor/index`,description:`欢迎加入 Rue 赞助计划。`}],fe=[{name:`QueryPHP`,href:`https://www.queryphp.com`,description:`现代化 PHP 开发框架`},{name:`VibeWindow`,href:`https://vibewindow.huododo.com/#/`,description:`氛围视窗软件智能体`},{name:`订货宝`,href:`https://www.dhb168.com/?from=ruejs`,description:`经销商订货系统与批发贸易订货平台`},{name:`Vercel`,href:`https://vercel.com`,description:`云部署与前端基础设施`}],pe=[{title:`i18n 国际化插件`,desc:`直接展示源文本即 key、局部插值和按需懒加载语言包的完整链路。`,to:`/examples/i18n-switcher`,eyebrow:`I18n Demo`,accentClassName:`border-emerald-200 bg-linear-to-br from-emerald-500/12 via-base-100 to-teal-500/10 hover:border-emerald-400/60`},{title:`路由插件`,desc:`集中看嵌套路由、守卫、redirect 和实验页在真实页面里的组合方式。`,to:`/examples/router-demo/guide/router/overview`,eyebrow:`Router Demo`,accentClassName:`border-sky-200 bg-linear-to-br from-sky-500/12 via-base-100 to-cyan-500/10 hover:border-sky-400/60`},{title:`数据状态与 URL 同步插件`,desc:`把 Store、筛选条件和查询串连起来，观察状态如何驱动可分享链接。`,to:`/examples/store-query-sync`,eyebrow:`State Demo`,accentClassName:`border-amber-200 bg-linear-to-br from-amber-500/12 via-base-100 to-orange-500/10 hover:border-amber-400/60`},{title:`Text.js 全栈应用框架`,desc:`基于 Vite、Rue、RSC 与文件系统路由，了解 App Router、SSR、API 路由和 Workers 部署。`,to:`/textjs`,eyebrow:`Full-stack`,accentClassName:`border-cyan-200 bg-linear-to-br from-cyan-500/12 via-base-100 to-blue-500/10 hover:border-cyan-400/60`}],me=n=>p(r=>{let a=b(`section`,r);x(a,`max-w-[1100px] mx-auto mt-8`);let o=b(`div`,a);s(a,o),x(o,`flex flex-col gap-3 md:flex-row md:items-end md:justify-between`);let c=b(`div`,o);s(o,c);let d=b(`div`,c);s(c,d),x(d,`text-sm font-semibold uppercase tracking-[0.24em] text-base-content/45`);let f=e(`rue:slot:anchor`);s(d,f),t(()=>{let e=n.eyebrow;i(()=>g(e,d,f))});let m=b(`h2`,c);s(c,m),x(m,`mt-2 text-3xl font-semibold text-base-content`);let h=e(`rue:slot:anchor`);s(m,h),t(()=>{let e=n.title;i(()=>g(e,m,h))});let _=e(`rue:slot:anchor`);s(o,_),t(()=>{let r=n.actionLabel&&n.actionTo?p(()=>{let r=u(),a=e(`rue:component:anchor`);return s(r,a),t(()=>{let e=y(T,{to:n.actionTo,className:`btn btn-outline self-start md:self-auto`,children:n.actionLabel});i(()=>g(e,r,a))}),r}):``;i(()=>g(r,o,_))});let v=b(`div`,a);s(a,v),t(()=>{x(v,`mt-5 grid gap-4 ${n.items.length>1?`md:grid-cols-2`:``}`)});let S=e(`rue:list:start`),C=e(`rue:list:end`);s(v,S),s(v,C);let E=new Map;return t(()=>{E=w({items:n.items||[],getKey:(e,t)=>e.name,elements:E,parent:v,before:C,singleRoot:!0,trackIndex:!1,start:S,renderItem:(n,r,a,o,c)=>{g(p(()=>{let r=u(),a=b(`a`,r);s(r,a),t(()=>{l(a,`key`,String(n.name))}),t(()=>{l(a,`href`,String(n.href))}),l(a,`target`,`_blank`),l(a,`rel`,`noreferrer`),x(a,`group rounded-[1.5rem] border border-base-200 bg-base-100/90 p-5 transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg`);let o=b(`div`,a);s(a,o),x(o,`flex min-h-[116px] flex-col justify-center gap-4`);let c=b(`div`,o);s(o,c);let d=b(`div`,c);s(c,d),x(d,`text-3xl font-semibold tracking-tight text-base-content`);let f=e(`rue:slot:anchor`);s(d,f),t(()=>{let e=n.name;i(()=>g(e,d,f))});let p=b(`p`,c);s(c,p),x(p,`mt-3 max-w-[30ch] text-base leading-7 text-base-content/65`);let m=e(`rue:slot:anchor`);return s(p,m),t(()=>{let e=n.description;i(()=>g(e,p,m))}),r}),r,a)}})}),a}),j=()=>{let{activeCreateCommand:r,selectedCreateCommand:c,createCommandCopy:f}=C(`useSetup:0:0:dup3`,()=>o(()=>{let e=C(`ref:1:5`,()=>n(`npm`)),t=C(`computed:1:6`,()=>S(()=>le.find(t=>t.id===e.value)??le[0]));return{activeCreateCommand:e,selectedCreateCommand:t,createCommandCopy:C(`computed:1:7`,()=>S(()=>E(()=>t.get().command)))}}));return p(n=>{let o=u(),m=b(`section`,o);s(o,m),x(m,`relative rounded-2xl bg-gr2adient-to-br from-violet-50 to-fuchsia-50 p-12 mb-10`);let S=b(`div`,m);s(m,S),x(S,`absolute -top-24 -left-24 w-96 h-96 rounded-full bg-violet-200/40 blur-3xl`);let C=b(`div`,m);s(m,C),x(C,`absolute -bottom-24 -right-24 w-md h-112 rounded-full bg-fuchsia-200/40 blur-3xl`);let E=b(`div`,m);s(m,E),x(E,`relative max-w-[1100px] mx-auto text-center`);let k=b(`div`,E);s(E,k),x(k,`hover-3d`);let A=b(`figure`,k);s(k,A);let j=b(`div`,A);s(A,j),l(j,`class`,`mx-auto w-full px-6 pb-4 text-center`);let M=b(`div`,j);s(j,M),l(M,`class`,`flex select-none items-end justify-center gap-6 whitespace-nowrap text-[clamp(6rem,21vw,16rem)] font-black leading-none bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent md:gap-10`);let he=b(`span`,M);s(M,he),s(he,h(`Rue`));let ge=b(`span`,M);s(M,ge),l(ge,`class`,`pl-1`),s(ge,h(`.JS`));let N=b(`div`,A);s(A,N),x(N,`inline-flex items-center justify-center gap-3`);let _e=b(`span`,N);s(N,_e),x(_e,`inline-flex items-center justify-center w-28 h-28 md:w-30 md:h-30 rounded-full bg-linear-to-br from-sky-500 via-cyan-400 to-emerald-300 shadow-md ring-1 ring-white/15`);let ve=b(`span`,_e);s(_e,ve),x(ve,`text-black font-extrabold text-[28px] md:text-[112px] leading-none drop-shadow-none`),s(ve,h(`T`));let ye=b(`span`,N);s(N,ye),x(ye,`text-[44px] md:text-[95px] font-extrabold tracking-tight bg-linear-to-r from-sky-500 via-cyan-400 to-emerald-300 bg-clip-text text-transparent`),s(ye,h(`he Wasm`));let be=b(`div`,A);s(A,be),x(be,`mt-2 text-[44px] md:text-[62px] font-extrabold tracking-tight bg-linear-to-r from-sky-400 via-cyan-300 to-teal-200 bg-clip-text text-transparent`),s(be,h(`Framework For Native DOM`));let xe=b(`p`,A);s(A,xe),x(xe,`mt-6 text-lg md:text-xl text-base-content/70`),s(xe,h(`Rust 运行时，Rust 响应式系统，Rust 原生 DOM 编译器`)),s(k,b(`div`,k)),s(k,b(`div`,k)),s(k,b(`div`,k)),s(k,b(`div`,k)),s(k,b(`div`,k)),s(k,b(`div`,k)),s(k,b(`div`,k)),s(k,b(`div`,k));let P=b(`div`,E);s(E,P),x(P,`mt-8 flex flex-wrap justify-center gap-3`);let Se=e(`rue:component:anchor`);s(P,Se),g(y(T,{to:`/guide/guide/quick-start`,className:`btn btn-primary btn-lg`,children:`快速上手`}),P,Se);let Ce=e(`rue:component:anchor`);s(P,Ce),g(y(T,{to:`/guide/guide/introduction`,className:`btn btn-outline btn-lg`,children:`文档`}),P,Ce);let we=e(`rue:component:anchor`);s(P,we),g(y(T,{to:`/api/api/index`,className:`btn btn-outline btn-lg`,children:`API`}),P,we);let F=b(`a`,P);s(P,F),l(F,`href`,`https://github.com/hunzhiwange/ruejs`),l(F,`target`,`_blank`),x(F,`btn btn-outline btn-lg`),s(F,h(`Github`));let I=b(`div`,E);s(E,I),x(I,`mx-auto mt-18 max-w-[900px] rounded-2xl border border-white/60 bg-slate-950/90 p-4 text-left shadow-xl shadow-fuchsia-200/40`);let L=b(`div`,I);s(I,L),x(L,`mb-3 flex flex-wrap items-center justify-between gap-3`);let R=b(`div`,L);s(L,R),x(R,`flex items-center gap-2`);let Te=b(`span`,R);s(R,Te),x(Te,`h-3 w-3 rounded-full bg-rose-400`);let Ee=b(`span`,R);s(R,Ee),x(Ee,`h-3 w-3 rounded-full bg-amber-400`);let De=b(`span`,R);s(R,De),x(De,`h-3 w-3 rounded-full bg-emerald-400`);let Oe=b(`span`,R);s(R,Oe),x(Oe,`ml-2 text-xs uppercase tracking-[0.24em] text-white/45`),s(Oe,h(`Quick Start`));let z=b(`div`,L);s(L,z),x(z,`inline-flex rounded-xl border border-white/10 bg-white/5 p-1`),l(z,`role`,`tablist`),l(z,`aria-label`,`选择创建命令`);let ke=e(`rue:list:start`),Ae=e(`rue:list:end`);s(z,ke),s(z,Ae);let je=new Map;t(()=>{je=w({items:le||[],getKey:(e,t)=>e.id,elements:je,parent:z,before:Ae,singleRoot:!0,trackIndex:!1,start:ke,renderItem:(n,o,c,d,f)=>{g(p(()=>{let o=u(),c=b(`button`,o);s(o,c),t(()=>{l(c,`key`,String(n.id))}),l(c,`type`,`button`),l(c,`role`,`tab`),t(()=>{l(c,`aria-selected`,String(r.value===n.id))}),t(()=>{x(c,`rounded-lg px-3 py-1.5 text-xs font-medium transition ${r.value===n.id?`bg-white text-slate-950 shadow-sm`:`text-white/65 hover:text-white`}`)}),a(c,`click`,()=>{r.value=n.id});let d=e(`rue:slot:anchor`);return s(c,d),t(()=>{let e=n.label;i(()=>g(e,c,d))}),o}),o,c)}})});let B=b(`div`,I);s(I,B),x(B,`flex flex-col gap-3 md:flex-row md:items-center`);let Me=b(`pre`,B);s(B,Me),x(Me,`min-w-0 flex-1 overflow-x-auto text-sm text-white/92 md:text-base`);let Ne=b(`code`,Me);s(Me,Ne),s(Ne,h(`$ `));let Pe=e(`rue:slot:anchor`);s(Ne,Pe),t(()=>{let e=c.get().command;i(()=>g(e,Ne,Pe))});let V=b(`button`,B);s(B,V),l(V,`type`,`button`),t(()=>{x(V,`shrink-0 rounded-xl border px-3 py-2 text-xs font-medium transition ${f.get().copied.value?`border-emerald-300/30 bg-emerald-400/15 text-emerald-100`:`border-white/10 bg-white/5 text-white/75 hover:bg-white/10 hover:text-white`}`)}),t(()=>{l(V,`aria-label`,String(`复制 ${c.get().label} 创建命令`))}),a(V,`click`,f.get().handleCopy);let Fe=_(V);s(V,Fe),t(()=>{d(Fe,f.get().copied.value?`已复制`:`复制`)});let H=b(`section`,o);s(o,H),x(H,`grid md:grid-cols-3 gap-6 max-w-[1100px] mx-auto`);let Ie=e(`rue:component:anchor`);s(H,Ie),g(y(O,{title:`简洁易用`,desc:`轻量、直观的 API，适合渐进式接入；保留熟悉的 JSX / TSX 开发方式，无需额外模板语法。`,icon:`✅`}),H,Ie);let Le=e(`rue:component:anchor`);s(H,Le),g(y(O,{title:`编译驱动的原生 DOM 渲染`,desc:`围绕真实 DOM 做最小更新，并可结合 Rust / Wasm 运行时扩展与原生 DOM 编译能力。`,icon:`🦀`}),H,Le);let Re=e(`rue:component:anchor`);s(H,Re),g(y(O,{title:`React JSX + Vue 式响应式`,desc:`适合希望保留 React 风格 JSX，同时获得 ref、reactive、computed 等 Vue 式响应式 API 的项目。`,icon:`🤝`}),H,Re);let ze=b(`section`,o);s(o,ze),x(ze,`max-w-[1100px] mx-auto mt-12`);let U=b(`div`,ze);s(ze,U),x(U,`mt-6 grid md:grid-cols-2 gap-6 items-stretch`);let Be=b(`div`,U);s(U,Be),x(Be,`card bg-base-100 border p-0 overflow-auto h-[330px]`);let Ve=e(`rue:component:anchor`);s(Be,Ve),t(()=>{let e=y(D,{className:`h-full`,lang:`tsx`,code:ce});i(()=>g(e,Be,Ve))});let He=e(`rue:component:anchor`);s(U,He),g(y(se,{}),U,He);let Ue=b(`section`,o);s(o,Ue),x(Ue,`mt-12 rounded-2xl p-8 bg-linear-to-br from-pink-500/80 to-fuchsia-500/80 text-white ring-1 ring-white/30 shadow-lg max-w-[1100px] mx-auto`);let W=b(`div`,Ue);s(Ue,W),x(W,`md:flex items-center justify-between`);let We=b(`div`,W);s(W,We);let Ge=b(`h2`,We);s(We,Ge),x(Ge,`text-2xl font-semibold mb-2 text-white`),s(Ge,h(`生态与插件`));let Ke=b(`p`,We);s(We,Ke),x(Ke,`text-white/90`),s(Ke,h(`官方路由、设计组件库与构建插件协同工作，也支持渐进式接入现有应用。`));let G=b(`div`,W);s(W,G),x(G,`mt-4 md:mt-0 flex gap-3`);let qe=e(`rue:component:anchor`);s(G,qe),g(y(T,{to:`/plugins`,className:`btn btn-outline`,children:`插件`}),G,qe);let Je=e(`rue:component:anchor`);s(G,Je),g(y(T,{to:`/design/button`,className:`btn btn-outline`,children:`组件库`}),G,Je);let Ye=e(`rue:component:anchor`);s(G,Ye),g(y(T,{to:`/textjs`,className:`btn btn-outline`,children:`Text.js`}),G,Ye);let Xe=b(`section`,o);s(o,Xe),x(Xe,`max-w-[1100px] mx-auto mt-8`);let Ze=b(`div`,Xe);s(Xe,Ze),x(Ze,`mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4`);let Qe=e(`rue:list:start`),$e=e(`rue:list:end`);s(Ze,Qe),s(Ze,$e);let et=new Map;t(()=>{et=w({items:pe||[],getKey:(e,t)=>e.to,elements:et,parent:Ze,before:$e,start:Qe,renderItem:(n,r,a,o,c)=>{let l=p(()=>{let r=u(),a=b(`div`,r);s(r,a),x(a,`text-xs font-semibold uppercase tracking-[0.22em] text-base-content/55`);let o=e(`rue:slot:anchor`);s(a,o),t(()=>{let e=n.eyebrow;i(()=>g(e,a,o))});let c=b(`div`,r);s(r,c),x(c,`mt-3 text-xl font-semibold text-base-content`);let l=e(`rue:slot:anchor`);s(c,l),t(()=>{let e=n.title;i(()=>g(e,c,l))});let d=b(`p`,r);s(r,d),x(d,`mt-2 text-sm leading-6 text-base-content/72`);let f=e(`rue:slot:anchor`);s(d,f),t(()=>{let e=n.desc;i(()=>g(e,d,f))});let p=b(`div`,r);return s(r,p),x(p,`mt-4 text-sm font-medium text-base-content/88`),s(p,h(`打开 Demo`)),r});v(y(T,{key:n.to,to:n.to,className:`group rounded-[1.5rem] border p-5 text-left text-base-content transition hover:-translate-y-0.5 hover:shadow-xl ${n.accentClassName}`,children:l}),r,a,o)}})});let K=b(`section`,o);s(o,K),x(K,`max-w-[1100px] mx-auto mt-12`);let tt=b(`h2`,K);s(K,tt),x(tt,`text-2xl font-semibold mb-2`),s(tt,h(`用组件组织界面`));let nt=b(`p`,K);s(K,nt),x(nt,`text-gray-600`),s(nt,h(`Rue 以 JSX / TSX 组件表达界面中的可复用片段。组件同时包含结构与逻辑，按需组合即可形成页面或模块。`));let q=b(`div`,K);s(K,q),x(q,`mt-6 grid md:grid-cols-2 gap-6 items-start`);let rt=b(`div`,q);s(q,rt),x(rt,`card bg-base-100 border p-0 overflow-auto h-[360px] md:h-[560px]`);let it=e(`rue:component:anchor`);s(rt,it),t(()=>{let e=y(D,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue'

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

export default HelloWorld`});i(()=>g(e,rt,it))});let J=b(`div`,q);s(q,J),x(J,`grid gap-6`);let at=e(`rue:component:anchor`);s(J,at),g(y(ee,{}),J,at);let ot=e(`rue:component:anchor`);s(J,ot),g(y(te,{}),J,ot);let st=e(`rue:component:anchor`);s(J,st),g(y(ne,{}),J,st);let ct=e(`rue:component:anchor`);s(J,ct),g(y(re,{}),J,ct);let lt=b(`p`,K);s(K,lt),x(lt,`mt-6 text-gray-600`),s(lt,h(`Rue 的组件强调可复用与可组合，保持清晰的数据与事件流，也方便把交互片段渐进接入现有页面。`));let Y=b(`section`,o);s(o,Y),x(Y,`max-w-[1100px] mx-auto mt-12`);let ut=b(`h2`,Y);s(Y,ut),x(ut,`text-2xl font-semibold mb-2`),s(ut,h(`Vapor 渲染路径：更贴近真实 DOM 更新模型`));let dt=b(`p`,Y);s(Y,dt),x(dt,`text-gray-600`),s(dt,h(`Rue 提供默认 Block / Vapor 渲染路径，Vapor 适合需要更高性能、细粒度更新的区域。`));let ft=b(`p`,Y);s(Y,ft),x(ft,`text-gray-600`),s(ft,h(`结合 Rust 实现的响应式系统、Rust / Wasm 运行时与原生 DOM 编译能力，Vapor 会把 JSX 转换为更贴近真实 DOM 的产物。`));let X=b(`div`,Y);s(Y,X),x(X,`mt-6 grid md:grid-cols-2 gap-6 items-start`);let pt=b(`div`,X);s(X,pt),x(pt,`card bg-base-100 border overflow-auto h-[360px] md:h-[510px]`);let mt=e(`rue:component:anchor`);s(pt,mt),t(()=>{let e=y(D,{className:`h-full`,lang:`tsx`,code:`const Hello: FC = () => (
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

export default HelloWorld`});i(()=>g(e,pt,mt))});let ht=b(`div`,X);s(X,ht),x(ht,`card bg-base-100 border p-0 overflow-auto h-[360px] md:h-[510px]`);let gt=e(`rue:component:anchor`);s(ht,gt),t(()=>{let e=y(D,{className:`h-full`,lang:`ts`,code:`/* RUE_VAPOR_TRANSFORMED */
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
export default HelloWorld;`});i(()=>g(e,ht,gt))});let _t=b(`div`,Y);s(Y,_t),x(_t,`mt-6 space-y-3 text-gray-700`);let vt=b(`p`,_t);s(_t,vt),s(vt,h(`Vapor 渲染路径直接面向原生 DOM，减少额外协调开销；配合细粒度响应式更新，在复杂界面中能保持更稳的性能与内存表现。`));let Z=b(`section`,o);s(o,Z),x(Z,`max-w-[1100px] mx-auto mt-12`);let yt=b(`h2`,Z);s(Z,yt),x(yt,`text-2xl font-semibold mb-2`),s(yt,h(`React 风格 JSX，Vue 式响应式 API`));let bt=b(`p`,Z);s(Z,bt),x(bt,`text-gray-600`),s(bt,h(`Rue 适合希望保留 React 风格 JSX，同时获得 Vue 式响应式 API 的项目。你既可以用 useState，也可以用 ref / reactive / computed 来组织交互逻辑。`));let Q=b(`div`,Z);s(Z,Q),x(Q,`mt-6 grid md:grid-cols-2 gap-6 items-start`);let xt=b(`div`,Q);s(Q,xt),x(xt,`card bg-base-100 border p-0 overflow-auto h-[360px] md:h-[660px]`);let St=e(`rue:component:anchor`);s(xt,St),t(()=>{let e=y(D,{className:`h-full`,lang:`tsx`,code:`import { type FC, useState, ref, reactive, computed } from '@rue-js/rue';

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

export default Reactive;`});i(()=>g(e,xt,St))});let $=b(`div`,Q);s(Q,$),x($,`grid gap-6`);let Ct=b(`div`,$);s($,Ct);let wt=b(`h3`,Ct);s(Ct,wt),x(wt,`text-lg font-semibold mb-2 text-base-content`),s(wt,h(`前端的发展，从原始DOM，到 JQUERY等`));let Tt=e(`rue:component:anchor`);s(Ct,Tt),t(()=>{let e=y(ae,{videos:ie});i(()=>g(e,Ct,Tt))});let Et=b(`div`,$);s($,Et);let Dt=b(`h3`,Et);s(Et,Dt),x(Dt,`text-lg font-semibold mb-2 text-base-content`),s(Dt,h(`ref / reactive 示例`));let Ot=e(`rue:component:anchor`);s(Et,Ot),g(y(oe,{}),Et,Ot);let kt=b(`p`,Z);s(Z,kt),x(kt,`mt-6 text-gray-600`),s(kt,h(`Rue 支持渐进集成：你可以在现有页面中按需挂载组件、路由或交互片段，而不必一次性重写整站。`));let At=e(`rue:component:anchor`);s(o,At),t(()=>{let e=y(me,{eyebrow:`Platinum Sponsor`,title:`白金赞助商`,items:ue,actionLabel:`成为赞助商`,actionTo:`/page/sponsor/index`});i(()=>g(e,o,At))});let jt=e(`rue:component:anchor`);s(o,jt),t(()=>{let e=y(me,{eyebrow:`Gold Sponsor`,title:`黄金赞助商`,actionLabel:`成为赞助商`,actionTo:`/page/sponsor/index`,items:de});i(()=>g(e,o,jt))});let Mt=e(`rue:component:anchor`);return s(o,Mt),t(()=>{let e=y(me,{eyebrow:`Links`,title:`友情链接`,items:fe});i(()=>g(e,o,Mt))}),o})};export{j as default};