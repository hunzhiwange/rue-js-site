import{$ as e,B as t,Dt as n,G as r,H as i,K as a,Q as o,Tt as s,U as c,W as l,Z as u,at as d,c as f,ht as p,it as m,l as h,lt as g,mt as _,s as v,t as y,wt as b,yt as x,z as S}from"./vapor-runtime-C1rlwc61.js";import{a as C,n as w}from"./vapor-helpers-vapor-HR6N5lMH.js";import{n as T}from"./src-nJ7Qboh5.js";import{t as E}from"./Code-BCLFq1E3.js";var D=r=>h(a=>{let o=l(`div`,a);e(o,`card bg-base-100 border border-base-200 shadow-sm`);let s=l(`div`,o);t(o,s),e(s,`card-body`);let c=l(`div`,s);t(s,c),e(c,`flex items-center gap-3 mb-1`);let u=l(`div`,c);t(c,u),e(u,`w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center`);let d=l(`span`,u);t(u,d),e(d,`text-lg`);let f=i(`rue:slot:anchor`);t(d,f),n(()=>{let e=r.icon||`⚡️`;x(()=>v(e,d,f))});let p=l(`div`,c);t(c,p),e(p,`font-semibold text-base-content`);let m=i(`rue:slot:anchor`);t(p,m),n(()=>{let e=r.title;x(()=>v(e,p,m))});let h=l(`p`,s);t(s,h),e(h,`text-sm text-base-content/70`);let g=i(`rue:slot:anchor`);return t(h,g),n(()=>{let e=r.desc;x(()=>v(e,h,g))}),o}),ee=()=>h(n=>{let i=l(`div`,n);e(i,`card bg-primary text-primary-content shadow-sm`);let a=l(`div`,i);t(i,a),e(a,`card-body items-center text-center`);let o=l(`div`,a);t(a,o),e(o,`text-3xl font-extrabold`),t(o,r(`Hello`));let s=l(`div`,a);return t(a,s),e(s,`mt-2 text-sm opacity-90`),t(s,r(`Hello component`)),i}),te=()=>h(n=>{let i=l(`div`,n);e(i,`card bg-base-100 text-base-content border border-base-200 shadow-sm`);let a=l(`div`,i);t(i,a),e(a,`card-body items-center text-center`);let o=l(`div`,a);t(a,o),e(o,`text-3xl font-extrabold`),t(o,r(`World`));let s=l(`div`,a);return t(a,s),e(s,`mt-2 text-sm text-base-content/70`),t(s,r(`World component`)),i}),ne=()=>h(n=>{let i=l(`div`,n);e(i,`card bg-accent text-accent-content shadow-sm`);let a=l(`div`,i);t(i,a),e(a,`card-body items-center text-center`);let o=l(`div`,a);t(a,o),e(o,`text-3xl font-extrabold`),t(o,r(`Hi`));let s=l(`div`,a);return t(a,s),e(s,`mt-2 text-sm opacity-90`),t(s,r(`Rue`)),i}),re=()=>h(n=>{let i=l(`div`,n);e(i,`card bg-base-100 text-base-content border border-base-200 shadow-sm`);let a=l(`div`,i);t(i,a),e(a,`card-body items-center text-center`);let o=l(`div`,a);t(a,o),e(o,`text-3xl font-extrabold`),t(o,r(`Yes`));let s=l(`div`,a);return t(a,s),e(s,`mt-2 text-sm text-base-content/70`),t(s,r(`My name is Rue`)),i}),ie=[{title:`原始 DOM 编程`,desc:`直接操作节点与事件`},{title:`jQuery 的崛起`,desc:`Write Less, Do More`},{title:`Backbone.js 与 MVC`,desc:`早期前端架构探索`},{title:`Web Components`,desc:`原生组件标准`},{title:`现代构建工具与生态`,desc:`模块化与开发体验`}],O=t=>h(r=>{let i=l(`input`,r);return e(i,`w-full rounded-md border border-base-300 bg-base-100 px-3 py-2 text-base-content shadow-sm focus:border-violet-500 focus:ring focus:ring-violet-200`),n(()=>{m(i,t.value)}),S(i,`input`,e=>t.onChange(e.target.value)),u(i,`placeholder`,`搜索视频`),i}),k=a=>h(o=>{let s=l(`div`,o);e(s,`mt-3 space-y-2`);let d=l(`div`,s);t(s,d),e(d,`text-sm text-base-content/70`);let f=i(`rue:slot:anchor`);t(d,f),n(()=>{let e=a.videos.length;x(()=>v(e,d,f))}),t(d,r(` 个视频`));let p=i(`rue:slot:anchor`);return t(s,p),n(()=>{let r=a.videos.length===0?h(()=>{let r=c(),o=l(`div`,r);t(r,o),e(o,`rounded-md border border-base-300/70 bg-base-100/70 backdrop-blur-sm p-3 text-sm text-base-content/70`);let s=i(`rue:slot:anchor`);return t(o,s),n(()=>{let e=a.emptyHeading||`暂无匹配`;x(()=>v(e,o,s))}),r}):h(()=>{let r=c(),o=l(`ul`,r);t(r,o),e(o,`space-y-2`);let s=i(`rue:list:start`),d=i(`rue:list:end`);t(o,s),t(o,d);let f=new Map;return n(()=>{f=w({items:a.videos||[],getKey:(e,t)=>t,elements:f,parent:o,before:d,singleRoot:!0,start:s,renderItem:(r,a,o,s,d)=>{v(h(()=>{let a=c(),o=l(`li`,a);t(a,o),n(()=>{u(o,`key`,String(d))}),e(o,`rounded-md border border-base-300/70 bg-base-100/70 backdrop-blur-sm p-3`);let s=l(`div`,o);t(o,s),e(s,`font-medium text-base-content`);let f=i(`rue:slot:anchor`);t(s,f),n(()=>{let e=r.title;x(()=>v(e,s,f))});let p=l(`div`,o);t(o,p),e(p,`text-sm text-base-content/70`);let m=i(`rue:slot:anchor`);return t(p,m),n(()=>{let e=r.desc;x(()=>v(e,p,m))}),a}),a,o)}})}),r});x(()=>v(r,s,p))}),s}),ae=e=>{let{searchText:r,setSearchText:a,foundVideos:o}=C(`useSetup:0:0`,()=>b(()=>{let[t,n]=C(`useState:1:0`,()=>s(``));return{searchText:t,setSearchText:n,foundVideos:C(`computed:1:1`,()=>g(()=>e.videos.filter(e=>e.title.toLowerCase().includes(t.value.toLowerCase()))))}}));return h(e=>{let s=c(),l=i(`rue:component:anchor`);t(s,l),n(()=>{let e=y(O,{value:r.value,onChange:a});x(()=>v(e,s,l))});let u=i(`rue:component:anchor`);return t(s,u),n(()=>{let e=y(k,{videos:o.get(),emptyHeading:`没有匹配 “${r.value}”`});x(()=>v(e,s,u))}),s})},oe=()=>{let{count:i,state:s}=C(`useSetup:0:0:dup1`,()=>b(()=>({count:C(`ref:1:2`,()=>p(0)),state:C(`reactive:1:3`,()=>_({enabled:!1}))})));return h(c=>{let f=l(`div`,c);e(f,`rounded-xl border border-base-300/70 bg-base-100/70 backdrop-blur-sm p-4`);let p=l(`div`,f);t(f,p),e(p,`flex items-center gap-3`);let m=l(`button`,p);t(p,m),e(m,`btn btn-primary`),S(m,`click`,()=>i.value++),t(m,r(`+1`));let h=l(`button`,p);t(p,h),e(h,`btn btn-outline`),S(h,`click`,()=>i.value=0),t(h,r(`重置`));let g=l(`label`,p);t(p,g),e(g,`flex items-center gap-2 ml-auto`);let _=l(`input`,g);t(g,_),u(_,`type`,`checkbox`),e(_,`checkbox`),n(()=>{o(_,!!s.enabled)}),S(_,`change`,e=>s.enabled=e.target.checked);let v=l(`span`,g);t(g,v),e(v,`text-sm text-base-content`),t(v,r(`启用`));let y=l(`div`,f);t(f,y),e(y,`mt-2 text-sm text-base-content/70`),t(y,r(`计数：`));let b=a(y);t(y,b),n(()=>{d(b,i.value)}),t(y,r(`，启用：`));let x=a(y);return t(y,x),n(()=>{d(x,s.enabled?`是`:`否`)}),f})},se=()=>{let{count:o}=C(`useSetup:0:0:dup2`,()=>b(()=>({count:C(`ref:1:4`,()=>p(0))})));return h(s=>{let u=l(`div`,s);e(u,`card h-[330px] border border-base-300/70 bg-base-100/80 shadow-sm backdrop-blur-sm`);let f=l(`div`,u);t(u,f),e(f,`card-body flex h-full p-6`);let p=l(`div`,f);t(f,p),e(p,`flex items-start justify-between gap-4`);let m=l(`div`,p);t(p,m);let g=l(`div`,m);t(m,g),e(g,`text-sm uppercase tracking-[0.22em] text-base-content/45`),t(g,r(`Live Demo`));let _=l(`div`,m);t(m,_),e(_,`mt-2 text-sm text-base-content/70`),t(_,r(`一个 ref signal 同时驱动计数和 v-if 条件分支。`));let y=l(`div`,p);t(p,y),e(y,`badge badge-outline badge-lg`);let b=a(y);t(y,b),n(()=>{d(b,o.value)});let C=l(`div`,f);t(f,C),e(C,`mt-6 grid gap-4`);let w=l(`button`,C);t(C,w),e(w,`rounded-xl border border-base-300 bg-base-100 px-4 py-3 text-base font-medium text-base-content shadow-sm transition hover:border-primary hover:text-primary`),S(w,`click`,()=>o.value++),t(w,r(`计数：`));let T=a(w);t(w,T),n(()=>{d(T,o.value)});let E=l(`div`,C);t(C,E),e(E,`min-h-[96px] rounded-2xl border border-base-300/70 bg-base-200/40 p-4`);let D=i(`rue:slot:anchor`);t(E,D),n(()=>{let n=o.value%2==0?h(()=>{let n=c(),i=l(`div`,n);t(n,i),e(i,`flex h-full items-center justify-between gap-3`);let a=l(`div`,i);t(i,a);let o=l(`div`,a);t(a,o),e(o,`font-semibold text-base-content`),t(o,r(`偶数态 UI`));let s=l(`div`,a);t(a,s),e(s,`mt-1 text-sm text-base-content/70`),t(s,r(`当前展示欢迎提示卡片。`));let u=l(`span`,i);return t(i,u),e(u,`badge badge-info badge-lg`),t(u,r(`v-if`)),n}):h(()=>{let n=c(),i=l(`div`,n);t(n,i),e(i,`flex h-full items-center justify-between gap-3`);let a=l(`div`,i);t(i,a);let o=l(`div`,a);t(a,o),e(o,`font-semibold text-base-content`),t(o,r(`奇数态 UI`));let s=l(`div`,a);t(a,s),e(s,`mt-1 text-sm text-base-content/70`),t(s,r(`signal 更新后切到另一套界面。`));let u=l(`span`,i);return t(i,u),e(u,`badge badge-success badge-lg`),t(u,r(`v-else`)),n});x(()=>v(n,E,D))});let ee=l(`div`,f);return t(f,ee),e(ee,`mt-auto text-xs tracking-[0.16em] text-base-content/45`),t(ee,r(`点击按钮时，下面的两个 UI 会跟着 signal 一起切换。`)),u})},ce=`import { type FC, ref } from '@rue-js/rue'

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

export default App`,le=[{id:`npm`,label:`npm`,command:`npm create rue@latest`},{id:`pnpm`,label:`pnpm`,command:`pnpm create rue@latest`},{id:`bun`,label:`bun`,command:`bun create rue@latest`},{id:`yarn`,label:`yarn`,command:`yarn dlx create-rue@latest`}],ue=[{name:`虚位以待`,href:`/page/sponsor/index`,description:`期待与你一起支持 Rue 生态建设。`}],de=[{name:`虚位以待`,href:`/page/sponsor/index`,description:`欢迎加入 Rue 赞助计划。`}],fe=[{name:`QueryPHP`,href:`https://www.queryphp.com`,description:`现代化 PHP 开发框架`},{name:`VibeWindow`,href:`https://vibewindow.huododo.com/#/`,description:`氛围视窗软件智能体`},{name:`订货宝`,href:`https://www.dhb168.com/?from=ruejs`,description:`经销商订货系统与批发贸易订货平台`},{name:`Vercel`,href:`https://vercel.com`,description:`云部署与前端基础设施`}],pe=[{title:`i18n 国际化插件`,desc:`直接展示源文本即 key、局部插值和按需懒加载语言包的完整链路。`,to:`/examples/i18n-switcher`,eyebrow:`I18n Demo`,accentClassName:`border-emerald-200 bg-linear-to-br from-emerald-500/12 via-base-100 to-teal-500/10 hover:border-emerald-400/60`},{title:`路由插件`,desc:`集中看嵌套路由、守卫、redirect 和实验页在真实页面里的组合方式。`,to:`/examples/router-demo/guide/router/overview`,eyebrow:`Router Demo`,accentClassName:`border-sky-200 bg-linear-to-br from-sky-500/12 via-base-100 to-cyan-500/10 hover:border-sky-400/60`},{title:`数据状态与 URL 同步插件`,desc:`把 Store、筛选条件和查询串连起来，观察状态如何驱动可分享链接。`,to:`/examples/store-query-sync`,eyebrow:`State Demo`,accentClassName:`border-amber-200 bg-linear-to-br from-amber-500/12 via-base-100 to-orange-500/10 hover:border-amber-400/60`},{title:`Text.js 全栈应用框架`,desc:`基于 Vite、Rue、RSC 与文件系统路由，了解 App Router、SSR、API 路由和 Workers 部署。`,to:`/textjs`,eyebrow:`Full-stack`,accentClassName:`border-cyan-200 bg-linear-to-br from-cyan-500/12 via-base-100 to-blue-500/10 hover:border-cyan-400/60`}],me=r=>h(a=>{let o=l(`section`,a);e(o,`max-w-[1100px] mx-auto mt-8`);let s=l(`div`,o);t(o,s),e(s,`flex flex-col gap-3 md:flex-row md:items-end md:justify-between`);let d=l(`div`,s);t(s,d);let f=l(`div`,d);t(d,f),e(f,`text-sm font-semibold uppercase tracking-[0.24em] text-base-content/45`);let p=i(`rue:slot:anchor`);t(f,p),n(()=>{let e=r.eyebrow;x(()=>v(e,f,p))});let m=l(`h2`,d);t(d,m),e(m,`mt-2 text-3xl font-semibold text-base-content`);let g=i(`rue:slot:anchor`);t(m,g),n(()=>{let e=r.title;x(()=>v(e,m,g))});let _=i(`rue:slot:anchor`);t(s,_),n(()=>{let e=r.actionLabel&&r.actionTo?h(()=>{let e=c(),a=i(`rue:component:anchor`);return t(e,a),n(()=>{let t=y(T,{to:r.actionTo,className:`btn btn-outline self-start md:self-auto`,children:r.actionLabel});x(()=>v(t,e,a))}),e}):``;x(()=>v(e,s,_))});let b=l(`div`,o);t(o,b),n(()=>{e(b,String(`mt-5 grid gap-4 ${r.items.length>1?`md:grid-cols-2`:``}`))});let S=i(`rue:list:start`),C=i(`rue:list:end`);t(b,S),t(b,C);let E=new Map;return n(()=>{E=w({items:r.items||[],getKey:(e,t)=>e.name,elements:E,parent:b,before:C,singleRoot:!0,trackIndex:!1,start:S,renderItem:(r,a,o,s,d)=>{v(h(()=>{let a=c(),o=l(`a`,a);t(a,o),n(()=>{u(o,`key`,String(r.name))}),n(()=>{u(o,`href`,String(r.href))}),u(o,`target`,`_blank`),u(o,`rel`,`noreferrer`),e(o,`group rounded-[1.5rem] border border-base-200 bg-base-100/90 p-5 transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg`);let s=l(`div`,o);t(o,s),e(s,`flex min-h-[116px] flex-col justify-center gap-4`);let d=l(`div`,s);t(s,d);let f=l(`div`,d);t(d,f),e(f,`text-3xl font-semibold tracking-tight text-base-content`);let p=i(`rue:slot:anchor`);t(f,p),n(()=>{let e=r.name;x(()=>v(e,f,p))});let m=l(`p`,d);t(d,m),e(m,`mt-3 max-w-[30ch] text-base leading-7 text-base-content/65`);let h=i(`rue:slot:anchor`);return t(m,h),n(()=>{let e=r.description;x(()=>v(e,m,h))}),a}),a,o)}})}),o}),he=()=>{let{activeCreateCommand:a,selectedCreateCommand:o}=C(`useSetup:0:0:dup3`,()=>b(()=>{let e=C(`ref:1:5`,()=>p(`npm`));return{activeCreateCommand:e,selectedCreateCommand:C(`computed:1:6`,()=>g(()=>le.find(t=>t.id===e.value)??le[0]))}}));return h(s=>{let d=c(),p=l(`section`,d);t(d,p),e(p,`relative rounded-2xl bg-gr2adient-to-br from-violet-50 to-fuchsia-50 p-12 mb-10`);let m=l(`div`,p);t(p,m),e(m,`absolute -top-24 -left-24 w-96 h-96 rounded-full bg-violet-200/40 blur-3xl`);let g=l(`div`,p);t(p,g),e(g,`absolute -bottom-24 -right-24 w-md h-112 rounded-full bg-fuchsia-200/40 blur-3xl`);let _=l(`div`,p);t(p,_),e(_,`relative max-w-[1100px] mx-auto text-center`);let b=l(`div`,_);t(_,b),e(b,`hover-3d`);let C=l(`figure`,b);t(b,C);let O=l(`div`,C);t(C,O),u(O,`class`,`mx-auto w-full px-6 pb-4 text-center`);let k=l(`div`,O);t(O,k),u(k,`class`,`flex select-none items-end justify-center gap-6 whitespace-nowrap text-[clamp(6rem,21vw,16rem)] font-black leading-none bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent md:gap-10`);let he=l(`span`,k);t(k,he),t(he,r(`Rue`));let ge=l(`span`,k);t(k,ge),u(ge,`class`,`pl-1`),t(ge,r(`.JS`));let A=l(`div`,C);t(C,A),e(A,`inline-flex items-center justify-center gap-3`);let _e=l(`span`,A);t(A,_e),e(_e,`inline-flex items-center justify-center w-28 h-28 md:w-30 md:h-30 rounded-full bg-linear-to-br from-sky-500 via-cyan-400 to-emerald-300 shadow-md ring-1 ring-white/15`);let ve=l(`span`,_e);t(_e,ve),e(ve,`text-black font-extrabold text-[28px] md:text-[112px] leading-none drop-shadow-none`),t(ve,r(`T`));let ye=l(`span`,A);t(A,ye),e(ye,`text-[44px] md:text-[95px] font-extrabold tracking-tight bg-linear-to-r from-sky-500 via-cyan-400 to-emerald-300 bg-clip-text text-transparent`),t(ye,r(`he Wasm`));let be=l(`div`,C);t(C,be),e(be,`mt-2 text-[44px] md:text-[62px] font-extrabold tracking-tight bg-linear-to-r from-sky-400 via-cyan-300 to-teal-200 bg-clip-text text-transparent`),t(be,r(`Framework For Native DOM`));let xe=l(`p`,C);t(C,xe),e(xe,`mt-6 text-lg md:text-xl text-base-content/70`),t(xe,r(`Rust 运行时，Rust 响应式系统，Rust 原生 DOM 编译器`)),t(b,l(`div`,b)),t(b,l(`div`,b)),t(b,l(`div`,b)),t(b,l(`div`,b)),t(b,l(`div`,b)),t(b,l(`div`,b)),t(b,l(`div`,b)),t(b,l(`div`,b));let j=l(`div`,_);t(_,j),e(j,`mt-8 flex flex-wrap justify-center gap-3`);let Se=i(`rue:component:anchor`);t(j,Se),v(y(T,{to:`/guide/guide/quick-start`,className:`btn btn-primary btn-lg`,children:`快速上手`}),j,Se);let Ce=i(`rue:component:anchor`);t(j,Ce),v(y(T,{to:`/guide/guide/introduction`,className:`btn btn-outline btn-lg`,children:`文档`}),j,Ce);let we=i(`rue:component:anchor`);t(j,we),v(y(T,{to:`/api/api/index`,className:`btn btn-outline btn-lg`,children:`API`}),j,we);let M=l(`a`,j);t(j,M),u(M,`href`,`https://github.com/hunzhiwange/ruejs`),u(M,`target`,`_blank`),e(M,`btn btn-outline btn-lg`),t(M,r(`Github`));let N=l(`div`,_);t(_,N),e(N,`mx-auto mt-18 max-w-[900px] rounded-2xl border border-white/60 bg-slate-950/90 p-4 text-left shadow-xl shadow-fuchsia-200/40`);let P=l(`div`,N);t(N,P),e(P,`mb-3 flex flex-wrap items-center justify-between gap-3`);let F=l(`div`,P);t(P,F),e(F,`flex items-center gap-2`);let Te=l(`span`,F);t(F,Te),e(Te,`h-3 w-3 rounded-full bg-rose-400`);let Ee=l(`span`,F);t(F,Ee),e(Ee,`h-3 w-3 rounded-full bg-amber-400`);let De=l(`span`,F);t(F,De),e(De,`h-3 w-3 rounded-full bg-emerald-400`);let Oe=l(`span`,F);t(F,Oe),e(Oe,`ml-2 text-xs uppercase tracking-[0.24em] text-white/45`),t(Oe,r(`Quick Start`));let I=l(`div`,P);t(P,I),e(I,`inline-flex rounded-xl border border-white/10 bg-white/5 p-1`),u(I,`role`,`tablist`),u(I,`aria-label`,`选择创建命令`);let ke=i(`rue:list:start`),Ae=i(`rue:list:end`);t(I,ke),t(I,Ae);let je=new Map;n(()=>{je=w({items:le||[],getKey:(e,t)=>e.id,elements:je,parent:I,before:Ae,singleRoot:!0,trackIndex:!1,start:ke,renderItem:(r,o,s,d,f)=>{v(h(()=>{let o=c(),s=l(`button`,o);t(o,s),n(()=>{u(s,`key`,String(r.id))}),u(s,`type`,`button`),u(s,`role`,`tab`),n(()=>{u(s,`aria-selected`,String(a.value===r.id))}),n(()=>{e(s,String(`rounded-lg px-3 py-1.5 text-xs font-medium transition ${a.value===r.id?`bg-white text-slate-950 shadow-sm`:`text-white/65 hover:text-white`}`))}),S(s,`click`,()=>a.value=r.id);let d=i(`rue:slot:anchor`);return t(s,d),n(()=>{let e=r.label;x(()=>v(e,s,d))}),o}),o,s)}})});let Me=l(`pre`,N);t(N,Me),e(Me,`overflow-x-auto text-sm md:text-base text-white/92`);let Ne=l(`code`,Me);t(Me,Ne),t(Ne,r(`$ `));let Pe=i(`rue:slot:anchor`);t(Ne,Pe),n(()=>{let e=o.get().command;x(()=>v(e,Ne,Pe))});let L=l(`section`,d);t(d,L),e(L,`grid md:grid-cols-3 gap-6 max-w-[1100px] mx-auto`);let Fe=i(`rue:component:anchor`);t(L,Fe),v(y(D,{title:`简洁易用`,desc:`轻量、直观的 API，适合渐进式接入；保留熟悉的 JSX / TSX 开发方式，无需额外模板语法。`,icon:`✅`}),L,Fe);let Ie=i(`rue:component:anchor`);t(L,Ie),v(y(D,{title:`编译驱动的原生 DOM 渲染`,desc:`围绕真实 DOM 做最小更新，并可结合 Rust / Wasm 运行时扩展与原生 DOM 编译能力。`,icon:`🦀`}),L,Ie);let Le=i(`rue:component:anchor`);t(L,Le),v(y(D,{title:`React JSX + Vue 式响应式`,desc:`适合希望保留 React 风格 JSX，同时获得 ref、reactive、computed 等 Vue 式响应式 API 的项目。`,icon:`🤝`}),L,Le);let Re=l(`section`,d);t(d,Re),e(Re,`max-w-[1100px] mx-auto mt-12`);let R=l(`div`,Re);t(Re,R),e(R,`mt-6 grid md:grid-cols-2 gap-6 items-stretch`);let z=l(`div`,R);t(R,z),e(z,`card bg-base-100 border p-0 overflow-auto h-[330px]`);let ze=i(`rue:component:anchor`);t(z,ze),n(()=>{let e=y(E,{className:`h-full`,lang:`tsx`,code:ce});x(()=>v(e,z,ze))});let Be=i(`rue:component:anchor`);t(R,Be),v(y(se,{}),R,Be);let Ve=l(`section`,d);t(d,Ve),e(Ve,`mt-12 rounded-2xl p-8 bg-linear-to-br from-pink-500/80 to-fuchsia-500/80 text-white ring-1 ring-white/30 shadow-lg max-w-[1100px] mx-auto`);let B=l(`div`,Ve);t(Ve,B),e(B,`md:flex items-center justify-between`);let V=l(`div`,B);t(B,V);let He=l(`h2`,V);t(V,He),e(He,`text-2xl font-semibold mb-2 text-white`),t(He,r(`生态与插件`));let Ue=l(`p`,V);t(V,Ue),e(Ue,`text-white/90`),t(Ue,r(`官方路由、设计组件库与构建插件协同工作，也支持渐进式接入现有应用。`));let H=l(`div`,B);t(B,H),e(H,`mt-4 md:mt-0 flex gap-3`);let We=i(`rue:component:anchor`);t(H,We),v(y(T,{to:`/plugins`,className:`btn btn-outline`,children:`插件`}),H,We);let Ge=i(`rue:component:anchor`);t(H,Ge),v(y(T,{to:`/design/button`,className:`btn btn-outline`,children:`组件库`}),H,Ge);let Ke=i(`rue:component:anchor`);t(H,Ke),v(y(T,{to:`/textjs`,className:`btn btn-outline`,children:`Text.js`}),H,Ke);let qe=l(`section`,d);t(d,qe),e(qe,`max-w-[1100px] mx-auto mt-8`);let U=l(`div`,qe);t(qe,U),e(U,`mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4`);let Je=i(`rue:list:start`),Ye=i(`rue:list:end`);t(U,Je),t(U,Ye);let Xe=new Map;n(()=>{Xe=w({items:pe||[],getKey:(e,t)=>e.to,elements:Xe,parent:U,before:Ye,start:Je,renderItem:(a,o,s,u,d)=>{let p=h(()=>{let o=c(),s=l(`div`,o);t(o,s),e(s,`text-xs font-semibold uppercase tracking-[0.22em] text-base-content/55`);let u=i(`rue:slot:anchor`);t(s,u),n(()=>{let e=a.eyebrow;x(()=>v(e,s,u))});let d=l(`div`,o);t(o,d),e(d,`mt-3 text-xl font-semibold text-base-content`);let f=i(`rue:slot:anchor`);t(d,f),n(()=>{let e=a.title;x(()=>v(e,d,f))});let p=l(`p`,o);t(o,p),e(p,`mt-2 text-sm leading-6 text-base-content/72`);let m=i(`rue:slot:anchor`);t(p,m),n(()=>{let e=a.desc;x(()=>v(e,p,m))});let h=l(`div`,o);return t(o,h),e(h,`mt-4 text-sm font-medium text-base-content/88`),t(h,r(`打开 Demo`)),o});f(y(T,{key:a.to,to:a.to,className:`group rounded-[1.5rem] border p-5 text-left text-base-content transition hover:-translate-y-0.5 hover:shadow-xl ${a.accentClassName}`,children:p}),o,s,u)}})});let W=l(`section`,d);t(d,W),e(W,`max-w-[1100px] mx-auto mt-12`);let Ze=l(`h2`,W);t(W,Ze),e(Ze,`text-2xl font-semibold mb-2`),t(Ze,r(`用组件组织界面`));let Qe=l(`p`,W);t(W,Qe),e(Qe,`text-gray-600`),t(Qe,r(`Rue 以 JSX / TSX 组件表达界面中的可复用片段。组件同时包含结构与逻辑，按需组合即可形成页面或模块。`));let G=l(`div`,W);t(W,G),e(G,`mt-6 grid md:grid-cols-2 gap-6 items-start`);let $e=l(`div`,G);t(G,$e),e($e,`card bg-base-100 border p-0 overflow-auto h-[360px] md:h-[560px]`);let et=i(`rue:component:anchor`);t($e,et),n(()=>{let e=y(E,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue'

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

export default HelloWorld`});x(()=>v(e,$e,et))});let K=l(`div`,G);t(G,K),e(K,`grid gap-6`);let tt=i(`rue:component:anchor`);t(K,tt),v(y(ee,{}),K,tt);let nt=i(`rue:component:anchor`);t(K,nt),v(y(te,{}),K,nt);let rt=i(`rue:component:anchor`);t(K,rt),v(y(ne,{}),K,rt);let it=i(`rue:component:anchor`);t(K,it),v(y(re,{}),K,it);let at=l(`p`,W);t(W,at),e(at,`mt-6 text-gray-600`),t(at,r(`Rue 的组件强调可复用与可组合，保持清晰的数据与事件流，也方便把交互片段渐进接入现有页面。`));let q=l(`section`,d);t(d,q),e(q,`max-w-[1100px] mx-auto mt-12`);let ot=l(`h2`,q);t(q,ot),e(ot,`text-2xl font-semibold mb-2`),t(ot,r(`Vapor 渲染路径：更贴近真实 DOM 更新模型`));let st=l(`p`,q);t(q,st),e(st,`text-gray-600`),t(st,r(`Rue 提供默认 Block / Vapor 渲染路径，Vapor 适合需要更高性能、细粒度更新的区域。`));let ct=l(`p`,q);t(q,ct),e(ct,`text-gray-600`),t(ct,r(`结合 Rust 实现的响应式系统、Rust / Wasm 运行时与原生 DOM 编译能力，Vapor 会把 JSX 转换为更贴近真实 DOM 的产物。`));let J=l(`div`,q);t(q,J),e(J,`mt-6 grid md:grid-cols-2 gap-6 items-start`);let lt=l(`div`,J);t(J,lt),e(lt,`card bg-base-100 border overflow-auto h-[360px] md:h-[510px]`);let ut=i(`rue:component:anchor`);t(lt,ut),n(()=>{let e=y(E,{className:`h-full`,lang:`tsx`,code:`const Hello: FC = () => (
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

export default HelloWorld`});x(()=>v(e,lt,ut))});let dt=l(`div`,J);t(J,dt),e(dt,`card bg-base-100 border p-0 overflow-auto h-[360px] md:h-[510px]`);let ft=i(`rue:component:anchor`);t(dt,ft),n(()=>{let e=y(E,{className:`h-full`,lang:`ts`,code:`/* RUE_VAPOR_TRANSFORMED */
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
export default HelloWorld;`});x(()=>v(e,dt,ft))});let pt=l(`div`,q);t(q,pt),e(pt,`mt-6 space-y-3 text-gray-700`);let mt=l(`p`,pt);t(pt,mt),t(mt,r(`Vapor 渲染路径直接面向原生 DOM，减少额外协调开销；配合细粒度响应式更新，在复杂界面中能保持更稳的性能与内存表现。`));let Y=l(`section`,d);t(d,Y),e(Y,`max-w-[1100px] mx-auto mt-12`);let ht=l(`h2`,Y);t(Y,ht),e(ht,`text-2xl font-semibold mb-2`),t(ht,r(`React 风格 JSX，Vue 式响应式 API`));let gt=l(`p`,Y);t(Y,gt),e(gt,`text-gray-600`),t(gt,r(`Rue 适合希望保留 React 风格 JSX，同时获得 Vue 式响应式 API 的项目。你既可以用 useState，也可以用 ref / reactive / computed 来组织交互逻辑。`));let X=l(`div`,Y);t(Y,X),e(X,`mt-6 grid md:grid-cols-2 gap-6 items-start`);let _t=l(`div`,X);t(X,_t),e(_t,`card bg-base-100 border p-0 overflow-auto h-[360px] md:h-[660px]`);let vt=i(`rue:component:anchor`);t(_t,vt),n(()=>{let e=y(E,{className:`h-full`,lang:`tsx`,code:`import { type FC, useState, ref, reactive, computed } from '@rue-js/rue';

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

export default Reactive;`});x(()=>v(e,_t,vt))});let Z=l(`div`,X);t(X,Z),e(Z,`grid gap-6`);let Q=l(`div`,Z);t(Z,Q);let yt=l(`h3`,Q);t(Q,yt),e(yt,`text-lg font-semibold mb-2 text-base-content`),t(yt,r(`前端的发展，从原始DOM，到 JQUERY等`));let bt=i(`rue:component:anchor`);t(Q,bt),n(()=>{let e=y(ae,{videos:ie});x(()=>v(e,Q,bt))});let $=l(`div`,Z);t(Z,$);let xt=l(`h3`,$);t($,xt),e(xt,`text-lg font-semibold mb-2 text-base-content`),t(xt,r(`ref / reactive 示例`));let St=i(`rue:component:anchor`);t($,St),v(y(oe,{}),$,St);let Ct=l(`p`,Y);t(Y,Ct),e(Ct,`mt-6 text-gray-600`),t(Ct,r(`Rue 支持渐进集成：你可以在现有页面中按需挂载组件、路由或交互片段，而不必一次性重写整站。`));let wt=i(`rue:component:anchor`);t(d,wt),n(()=>{let e=y(me,{eyebrow:`Platinum Sponsor`,title:`白金赞助商`,items:ue,actionLabel:`成为赞助商`,actionTo:`/page/sponsor/index`});x(()=>v(e,d,wt))});let Tt=i(`rue:component:anchor`);t(d,Tt),n(()=>{let e=y(me,{eyebrow:`Gold Sponsor`,title:`黄金赞助商`,actionLabel:`成为赞助商`,actionTo:`/page/sponsor/index`,items:de});x(()=>v(e,d,Tt))});let Et=i(`rue:component:anchor`);return t(d,Et),n(()=>{let e=y(me,{eyebrow:`Links`,title:`友情链接`,items:fe});x(()=>v(e,d,Et))}),d})};export{he as default};