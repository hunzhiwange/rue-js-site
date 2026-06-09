import{$ as e,Ht as t,J as n,Jt as r,Q as i,Rt as a,Tt as o,Xt as s,Y as c,Z as l,_t as u,c as d,ct as f,et as p,l as m,mt as h,ot as g,pt as _,qt as v,s as y,st as b,t as x,tt as S}from"./vapor-runtime-aZAg0Qkw.js";import{a as C,n as w}from"./vapor-helpers-vapor-gtGwiIv0.js";import{n as T}from"./src-Bf6HXobY.js";import{n as E,t as D}from"./Code-5DOEyGxf.js";var O=n=>m(r=>{let i=e(`div`,r);f(i,`card bg-base-100 border border-base-200 shadow-sm`);let a=e(`div`,i);c(i,a),f(a,`card-body`);let o=e(`div`,a);c(a,o),f(o,`flex items-center gap-3 mb-1`);let u=e(`div`,o);c(o,u),f(u,`w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center`);let d=e(`span`,u);c(u,d),f(d,`text-lg`);let p=l(`rue:slot:anchor`);c(d,p),s(()=>{let e=n.icon||`⚡️`;t(()=>y(e,d,p))});let m=e(`div`,o);c(o,m),f(m,`font-semibold text-base-content`);let h=l(`rue:slot:anchor`);c(m,h),s(()=>{let e=n.title;t(()=>y(e,m,h))});let g=e(`p`,a);c(a,g),f(g,`text-sm text-base-content/70`);let _=l(`rue:slot:anchor`);return c(g,_),s(()=>{let e=n.desc;t(()=>y(e,g,_))}),i}),ee=()=>m(t=>{let n=e(`div`,t);f(n,`card bg-primary text-primary-content shadow-sm`);let r=e(`div`,n);c(n,r),f(r,`card-body items-center text-center`);let i=e(`div`,r);c(r,i),f(i,`text-3xl font-extrabold`),c(i,p(`Hello`));let a=e(`div`,r);return c(r,a),f(a,`mt-2 text-sm opacity-90`),c(a,p(`Hello component`)),n}),te=()=>m(t=>{let n=e(`div`,t);f(n,`card bg-base-100 text-base-content border border-base-200 shadow-sm`);let r=e(`div`,n);c(n,r),f(r,`card-body items-center text-center`);let i=e(`div`,r);c(r,i),f(i,`text-3xl font-extrabold`),c(i,p(`World`));let a=e(`div`,r);return c(r,a),f(a,`mt-2 text-sm text-base-content/70`),c(a,p(`World component`)),n}),ne=()=>m(t=>{let n=e(`div`,t);f(n,`card bg-accent text-accent-content shadow-sm`);let r=e(`div`,n);c(n,r),f(r,`card-body items-center text-center`);let i=e(`div`,r);c(r,i),f(i,`text-3xl font-extrabold`),c(i,p(`Hi`));let a=e(`div`,r);return c(r,a),f(a,`mt-2 text-sm opacity-90`),c(a,p(`Rue`)),n}),re=()=>m(t=>{let n=e(`div`,t);f(n,`card bg-base-100 text-base-content border border-base-200 shadow-sm`);let r=e(`div`,n);c(n,r),f(r,`card-body items-center text-center`);let i=e(`div`,r);c(r,i),f(i,`text-3xl font-extrabold`),c(i,p(`Yes`));let a=e(`div`,r);return c(r,a),f(a,`mt-2 text-sm text-base-content/70`),c(a,p(`My name is Rue`)),n}),ie=[{title:`原始 DOM 编程`,desc:`直接操作节点与事件`},{title:`jQuery 的崛起`,desc:`Write Less, Do More`},{title:`Backbone.js 与 MVC`,desc:`早期前端架构探索`},{title:`Web Components`,desc:`原生组件标准`},{title:`现代构建工具与生态`,desc:`模块化与开发体验`}],k=t=>m(r=>{let i=e(`input`,r);return f(i,`w-full rounded-md border border-base-300 bg-base-100 px-3 py-2 text-base-content shadow-sm focus:border-violet-500 focus:ring focus:ring-violet-200`),s(()=>{_(i,t.value)}),n(i,`input`,e=>t.onChange(e.target.value)),g(i,`placeholder`,`搜索视频`),i}),A=n=>m(r=>{let a=e(`div`,r);f(a,`mt-3 space-y-2`);let o=e(`div`,a);c(a,o),f(o,`text-sm text-base-content/70`);let u=l(`rue:slot:anchor`);c(o,u),s(()=>{let e=n.videos.length;t(()=>y(e,o,u))}),c(o,p(` 个视频`));let d=l(`rue:slot:anchor`);return c(a,d),s(()=>{let r=n.videos.length===0?m(()=>{let r=i(),a=e(`div`,r);c(r,a),f(a,`rounded-md border border-base-300/70 bg-base-100/70 backdrop-blur-sm p-3 text-sm text-base-content/70`);let o=l(`rue:slot:anchor`);return c(a,o),s(()=>{let e=n.emptyHeading||`暂无匹配`;t(()=>y(e,a,o))}),r}):m(()=>{let r=i(),a=e(`ul`,r);c(r,a),f(a,`space-y-2`);let o=l(`rue:list:start`),u=l(`rue:list:end`);c(a,o),c(a,u);let d=new Map;return s(()=>{d=w({items:n.videos||[],getKey:(e,t)=>t,elements:d,parent:a,before:u,singleRoot:!0,start:o,renderItem:(n,r,a,o,u)=>{y(m(()=>{let r=i(),a=e(`li`,r);c(r,a),s(()=>{g(a,`key`,String(u))}),f(a,`rounded-md border border-base-300/70 bg-base-100/70 backdrop-blur-sm p-3`);let o=e(`div`,a);c(a,o),f(o,`font-medium text-base-content`);let d=l(`rue:slot:anchor`);c(o,d),s(()=>{let e=n.title;t(()=>y(e,o,d))});let p=e(`div`,a);c(a,p),f(p,`text-sm text-base-content/70`);let m=l(`rue:slot:anchor`);return c(p,m),s(()=>{let e=n.desc;t(()=>y(e,p,m))}),r}),r,a)}})}),r});t(()=>y(r,a,d))}),a}),ae=e=>{let{searchText:n,setSearchText:a,foundVideos:o}=C(`useSetup:0:0`,()=>v(()=>{let[t,n]=C(`useState:1:0`,()=>r(``));return{searchText:t,setSearchText:n,foundVideos:C(`computed:1:1`,()=>u(()=>e.videos.filter(e=>e.title.toLowerCase().includes(t.value.toLowerCase()))))}}));return m(e=>{let r=i(),u=l(`rue:component:anchor`);c(r,u),s(()=>{let e=x(k,{value:n.value,onChange:a});t(()=>y(e,r,u))});let d=l(`rue:component:anchor`);return c(r,d),s(()=>{let e=x(A,{videos:o.get(),emptyHeading:`没有匹配 “${n.value}”`});t(()=>y(e,r,d))}),r})},oe=()=>{let{count:t,state:r}=C(`useSetup:0:0:dup1`,()=>v(()=>({count:C(`ref:1:2`,()=>a(0)),state:C(`reactive:1:3`,()=>o({enabled:!1}))})));return m(i=>{let a=e(`div`,i);f(a,`rounded-xl border border-base-300/70 bg-base-100/70 backdrop-blur-sm p-4`);let o=e(`div`,a);c(a,o),f(o,`flex items-center gap-3`);let l=e(`button`,o);c(o,l),f(l,`btn btn-primary`),n(l,`click`,()=>t.value++),c(l,p(`+1`));let u=e(`button`,o);c(o,u),f(u,`btn btn-outline`),n(u,`click`,()=>t.value=0),c(u,p(`重置`));let d=e(`label`,o);c(o,d),f(d,`flex items-center gap-2 ml-auto`);let m=e(`input`,d);c(d,m),g(m,`type`,`checkbox`),f(m,`checkbox`),s(()=>{b(m,!!r.enabled)}),n(m,`change`,e=>r.enabled=e.target.checked);let _=e(`span`,d);c(d,_),f(_,`text-sm text-base-content`),c(_,p(`启用`));let v=e(`div`,a);c(a,v),f(v,`mt-2 text-sm text-base-content/70`),c(v,p(`计数：`));let y=S(v);c(v,y),s(()=>{h(y,t.value)}),c(v,p(`，启用：`));let x=S(v);return c(v,x),s(()=>{h(x,r.enabled?`是`:`否`)}),a})},se=()=>{let{count:r}=C(`useSetup:0:0:dup2`,()=>v(()=>({count:C(`ref:1:4`,()=>a(0))})));return m(a=>{let o=e(`div`,a);f(o,`card h-[330px] border border-base-300/70 bg-base-100/80 shadow-sm backdrop-blur-sm`);let u=e(`div`,o);c(o,u),f(u,`card-body flex h-full p-6`);let d=e(`div`,u);c(u,d),f(d,`flex items-start justify-between gap-4`);let g=e(`div`,d);c(d,g);let _=e(`div`,g);c(g,_),f(_,`text-sm uppercase tracking-[0.22em] text-base-content/45`),c(_,p(`Live Demo`));let v=e(`div`,g);c(g,v),f(v,`mt-2 text-sm text-base-content/70`),c(v,p(`一个 ref signal 同时驱动计数和 v-if 条件分支。`));let b=e(`div`,d);c(d,b),f(b,`badge badge-outline badge-lg`);let x=S(b);c(b,x),s(()=>{h(x,r.value)});let C=e(`div`,u);c(u,C),f(C,`mt-6 grid gap-4`);let w=e(`button`,C);c(C,w),f(w,`rounded-xl border border-base-300 bg-base-100 px-4 py-3 text-base font-medium text-base-content shadow-sm transition hover:border-primary hover:text-primary`),n(w,`click`,()=>r.value++),c(w,p(`计数：`));let T=S(w);c(w,T),s(()=>{h(T,r.value)});let E=e(`div`,C);c(C,E),f(E,`min-h-[96px] rounded-2xl border border-base-300/70 bg-base-200/40 p-4`);let D=l(`rue:slot:anchor`);c(E,D),s(()=>{let n=r.value%2==0?m(()=>{let t=i(),n=e(`div`,t);c(t,n),f(n,`flex h-full items-center justify-between gap-3`);let r=e(`div`,n);c(n,r);let a=e(`div`,r);c(r,a),f(a,`font-semibold text-base-content`),c(a,p(`偶数态 UI`));let o=e(`div`,r);c(r,o),f(o,`mt-1 text-sm text-base-content/70`),c(o,p(`当前展示欢迎提示卡片。`));let s=e(`span`,n);return c(n,s),f(s,`badge badge-info badge-lg`),c(s,p(`v-if`)),t}):m(()=>{let t=i(),n=e(`div`,t);c(t,n),f(n,`flex h-full items-center justify-between gap-3`);let r=e(`div`,n);c(n,r);let a=e(`div`,r);c(r,a),f(a,`font-semibold text-base-content`),c(a,p(`奇数态 UI`));let o=e(`div`,r);c(r,o),f(o,`mt-1 text-sm text-base-content/70`),c(o,p(`signal 更新后切到另一套界面。`));let s=e(`span`,n);return c(n,s),f(s,`badge badge-success badge-lg`),c(s,p(`v-else`)),t});t(()=>y(n,E,D))});let O=e(`div`,u);return c(u,O),f(O,`mt-auto text-xs tracking-[0.16em] text-base-content/45`),c(O,p(`点击按钮时，下面的两个 UI 会跟着 signal 一起切换。`)),o})},ce=`import { type FC, ref } from '@rue-js/rue'

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

export default App`,le=[{id:`npm`,label:`npm`,command:`npm create rue@latest`},{id:`pnpm`,label:`pnpm`,command:`pnpm create rue@latest`},{id:`bun`,label:`bun`,command:`bun create rue@latest`},{id:`yarn`,label:`yarn`,command:`yarn dlx create-rue@latest`}],ue=[{name:`虚位以待`,href:`/page/sponsor/index`,description:`期待与你一起支持 Rue 生态建设。`}],de=[{name:`虚位以待`,href:`/page/sponsor/index`,description:`欢迎加入 Rue 赞助计划。`}],fe=[{name:`QueryPHP`,href:`https://www.queryphp.com`,description:`现代化 PHP 开发框架`},{name:`VibeWindow`,href:`https://vibewindow.huododo.com/#/`,description:`氛围视窗软件智能体`},{name:`订货宝`,href:`https://www.dhb168.com/?from=ruejs`,description:`经销商订货系统与批发贸易订货平台`},{name:`Vercel`,href:`https://vercel.com`,description:`云部署与前端基础设施`}],pe=[{title:`i18n 国际化插件`,desc:`直接展示源文本即 key、局部插值和按需懒加载语言包的完整链路。`,to:`/examples/i18n-switcher`,eyebrow:`I18n Demo`,accentClassName:`border-emerald-200 bg-linear-to-br from-emerald-500/12 via-base-100 to-teal-500/10 hover:border-emerald-400/60`},{title:`路由插件`,desc:`集中看嵌套路由、守卫、redirect 和实验页在真实页面里的组合方式。`,to:`/examples/router-demo/guide/router/overview`,eyebrow:`Router Demo`,accentClassName:`border-sky-200 bg-linear-to-br from-sky-500/12 via-base-100 to-cyan-500/10 hover:border-sky-400/60`},{title:`数据状态与 URL 同步插件`,desc:`把 Store、筛选条件和查询串连起来，观察状态如何驱动可分享链接。`,to:`/examples/store-query-sync`,eyebrow:`State Demo`,accentClassName:`border-amber-200 bg-linear-to-br from-amber-500/12 via-base-100 to-orange-500/10 hover:border-amber-400/60`},{title:`Text.js 全栈应用框架`,desc:`基于 Vite、Rue、RSC 与文件系统路由，了解 App Router、SSR、API 路由和 Workers 部署。`,to:`/textjs`,eyebrow:`Full-stack`,accentClassName:`border-cyan-200 bg-linear-to-br from-cyan-500/12 via-base-100 to-blue-500/10 hover:border-cyan-400/60`}],me=n=>m(r=>{let a=e(`section`,r);f(a,`max-w-[1100px] mx-auto mt-8`);let o=e(`div`,a);c(a,o),f(o,`flex flex-col gap-3 md:flex-row md:items-end md:justify-between`);let u=e(`div`,o);c(o,u);let d=e(`div`,u);c(u,d),f(d,`text-sm font-semibold uppercase tracking-[0.24em] text-base-content/45`);let p=l(`rue:slot:anchor`);c(d,p),s(()=>{let e=n.eyebrow;t(()=>y(e,d,p))});let h=e(`h2`,u);c(u,h),f(h,`mt-2 text-3xl font-semibold text-base-content`);let _=l(`rue:slot:anchor`);c(h,_),s(()=>{let e=n.title;t(()=>y(e,h,_))});let v=l(`rue:slot:anchor`);c(o,v),s(()=>{let e=n.actionLabel&&n.actionTo?m(()=>{let e=i(),r=l(`rue:component:anchor`);return c(e,r),s(()=>{let i=x(T,{to:n.actionTo,className:`btn btn-outline self-start md:self-auto`,children:n.actionLabel});t(()=>y(i,e,r))}),e}):``;t(()=>y(e,o,v))});let b=e(`div`,a);c(a,b),s(()=>{f(b,String(`mt-5 grid gap-4 ${n.items.length>1?`md:grid-cols-2`:``}`))});let S=l(`rue:list:start`),C=l(`rue:list:end`);c(b,S),c(b,C);let E=new Map;return s(()=>{E=w({items:n.items||[],getKey:(e,t)=>e.name,elements:E,parent:b,before:C,singleRoot:!0,trackIndex:!1,start:S,renderItem:(n,r,a,o,u)=>{y(m(()=>{let r=i(),a=e(`a`,r);c(r,a),s(()=>{g(a,`key`,String(n.name))}),s(()=>{g(a,`href`,String(n.href))}),g(a,`target`,`_blank`),g(a,`rel`,`noreferrer`),f(a,`group rounded-[1.5rem] border border-base-200 bg-base-100/90 p-5 transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg`);let o=e(`div`,a);c(a,o),f(o,`flex min-h-[116px] flex-col justify-center gap-4`);let u=e(`div`,o);c(o,u);let d=e(`div`,u);c(u,d),f(d,`text-3xl font-semibold tracking-tight text-base-content`);let p=l(`rue:slot:anchor`);c(d,p),s(()=>{let e=n.name;t(()=>y(e,d,p))});let m=e(`p`,u);c(u,m),f(m,`mt-3 max-w-[30ch] text-base leading-7 text-base-content/65`);let h=l(`rue:slot:anchor`);return c(m,h),s(()=>{let e=n.description;t(()=>y(e,m,h))}),r}),r,a)}})}),a}),j=()=>{let{activeCreateCommand:r,selectedCreateCommand:o,createCommandCopy:_}=C(`useSetup:0:0:dup3`,()=>v(()=>{let e=C(`ref:1:5`,()=>a(`npm`)),t=C(`computed:1:6`,()=>u(()=>le.find(t=>t.id===e.value)??le[0]));return{activeCreateCommand:e,selectedCreateCommand:t,createCommandCopy:E(()=>t.get().command)}}));return m(a=>{let u=i(),v=e(`section`,u);c(u,v),f(v,`relative rounded-2xl bg-gr2adient-to-br from-violet-50 to-fuchsia-50 p-12 mb-10`);let b=e(`div`,v);c(v,b),f(b,`absolute -top-24 -left-24 w-96 h-96 rounded-full bg-violet-200/40 blur-3xl`);let C=e(`div`,v);c(v,C),f(C,`absolute -bottom-24 -right-24 w-md h-112 rounded-full bg-fuchsia-200/40 blur-3xl`);let E=e(`div`,v);c(v,E),f(E,`relative max-w-[1100px] mx-auto text-center`);let k=e(`div`,E);c(E,k),f(k,`hover-3d`);let A=e(`figure`,k);c(k,A);let j=e(`div`,A);c(A,j),g(j,`class`,`mx-auto w-full px-6 pb-4 text-center`);let M=e(`div`,j);c(j,M),g(M,`class`,`flex select-none items-end justify-center gap-6 whitespace-nowrap text-[clamp(6rem,21vw,16rem)] font-black leading-none bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent md:gap-10`);let he=e(`span`,M);c(M,he),c(he,p(`Rue`));let ge=e(`span`,M);c(M,ge),g(ge,`class`,`pl-1`),c(ge,p(`.JS`));let N=e(`div`,A);c(A,N),f(N,`inline-flex items-center justify-center gap-3`);let _e=e(`span`,N);c(N,_e),f(_e,`inline-flex items-center justify-center w-28 h-28 md:w-30 md:h-30 rounded-full bg-linear-to-br from-sky-500 via-cyan-400 to-emerald-300 shadow-md ring-1 ring-white/15`);let ve=e(`span`,_e);c(_e,ve),f(ve,`text-black font-extrabold text-[28px] md:text-[112px] leading-none drop-shadow-none`),c(ve,p(`T`));let ye=e(`span`,N);c(N,ye),f(ye,`text-[44px] md:text-[95px] font-extrabold tracking-tight bg-linear-to-r from-sky-500 via-cyan-400 to-emerald-300 bg-clip-text text-transparent`),c(ye,p(`he Wasm`));let be=e(`div`,A);c(A,be),f(be,`mt-2 text-[44px] md:text-[62px] font-extrabold tracking-tight bg-linear-to-r from-sky-400 via-cyan-300 to-teal-200 bg-clip-text text-transparent`),c(be,p(`Framework For Native DOM`));let xe=e(`p`,A);c(A,xe),f(xe,`mt-6 text-lg md:text-xl text-base-content/70`),c(xe,p(`Rust 运行时，Rust 响应式系统，Rust 原生 DOM 编译器`)),c(k,e(`div`,k)),c(k,e(`div`,k)),c(k,e(`div`,k)),c(k,e(`div`,k)),c(k,e(`div`,k)),c(k,e(`div`,k)),c(k,e(`div`,k)),c(k,e(`div`,k));let P=e(`div`,E);c(E,P),f(P,`mt-8 flex flex-wrap justify-center gap-3`);let Se=l(`rue:component:anchor`);c(P,Se),y(x(T,{to:`/guide/guide/quick-start`,className:`btn btn-primary btn-lg`,children:`快速上手`}),P,Se);let Ce=l(`rue:component:anchor`);c(P,Ce),y(x(T,{to:`/guide/guide/introduction`,className:`btn btn-outline btn-lg`,children:`文档`}),P,Ce);let we=l(`rue:component:anchor`);c(P,we),y(x(T,{to:`/api/api/index`,className:`btn btn-outline btn-lg`,children:`API`}),P,we);let F=e(`a`,P);c(P,F),g(F,`href`,`https://github.com/hunzhiwange/ruejs`),g(F,`target`,`_blank`),f(F,`btn btn-outline btn-lg`),c(F,p(`Github`));let I=e(`div`,E);c(E,I),f(I,`mx-auto mt-18 max-w-[900px] rounded-2xl border border-white/60 bg-slate-950/90 p-4 text-left shadow-xl shadow-fuchsia-200/40`);let L=e(`div`,I);c(I,L),f(L,`mb-3 flex flex-wrap items-center justify-between gap-3`);let R=e(`div`,L);c(L,R),f(R,`flex items-center gap-2`);let Te=e(`span`,R);c(R,Te),f(Te,`h-3 w-3 rounded-full bg-rose-400`);let Ee=e(`span`,R);c(R,Ee),f(Ee,`h-3 w-3 rounded-full bg-amber-400`);let De=e(`span`,R);c(R,De),f(De,`h-3 w-3 rounded-full bg-emerald-400`);let Oe=e(`span`,R);c(R,Oe),f(Oe,`ml-2 text-xs uppercase tracking-[0.24em] text-white/45`),c(Oe,p(`Quick Start`));let z=e(`div`,L);c(L,z),f(z,`inline-flex rounded-xl border border-white/10 bg-white/5 p-1`),g(z,`role`,`tablist`),g(z,`aria-label`,`选择创建命令`);let ke=l(`rue:list:start`),Ae=l(`rue:list:end`);c(z,ke),c(z,Ae);let je=new Map;s(()=>{je=w({items:le||[],getKey:(e,t)=>e.id,elements:je,parent:z,before:Ae,singleRoot:!0,trackIndex:!1,start:ke,renderItem:(a,o,u,d,p)=>{y(m(()=>{let o=i(),u=e(`button`,o);c(o,u),s(()=>{g(u,`key`,String(a.id))}),g(u,`type`,`button`),g(u,`role`,`tab`),s(()=>{g(u,`aria-selected`,String(r.value===a.id))}),s(()=>{f(u,String(`rounded-lg px-3 py-1.5 text-xs font-medium transition ${r.value===a.id?`bg-white text-slate-950 shadow-sm`:`text-white/65 hover:text-white`}`))}),n(u,`click`,()=>{r.value=a.id});let d=l(`rue:slot:anchor`);return c(u,d),s(()=>{let e=a.label;t(()=>y(e,u,d))}),o}),o,u)}})});let B=e(`div`,I);c(I,B),f(B,`flex flex-col gap-3 md:flex-row md:items-center`);let Me=e(`pre`,B);c(B,Me),f(Me,`min-w-0 flex-1 overflow-x-auto text-sm text-white/92 md:text-base`);let Ne=e(`code`,Me);c(Me,Ne),c(Ne,p(`$ `));let Pe=l(`rue:slot:anchor`);c(Ne,Pe),s(()=>{let e=o.get().command;t(()=>y(e,Ne,Pe))});let V=e(`button`,B);c(B,V),g(V,`type`,`button`),s(()=>{f(V,String(`shrink-0 rounded-xl border px-3 py-2 text-xs font-medium transition ${_.copied.value?`border-emerald-300/30 bg-emerald-400/15 text-emerald-100`:`border-white/10 bg-white/5 text-white/75 hover:bg-white/10 hover:text-white`}`))}),s(()=>{g(V,`aria-label`,String(`复制 ${o.get().label} 创建命令`))}),n(V,`click`,_.handleCopy);let Fe=S(V);c(V,Fe),s(()=>{h(Fe,_.copied.value?`已复制`:`复制`)});let H=e(`section`,u);c(u,H),f(H,`grid md:grid-cols-3 gap-6 max-w-[1100px] mx-auto`);let Ie=l(`rue:component:anchor`);c(H,Ie),y(x(O,{title:`简洁易用`,desc:`轻量、直观的 API，适合渐进式接入；保留熟悉的 JSX / TSX 开发方式，无需额外模板语法。`,icon:`✅`}),H,Ie);let Le=l(`rue:component:anchor`);c(H,Le),y(x(O,{title:`编译驱动的原生 DOM 渲染`,desc:`围绕真实 DOM 做最小更新，并可结合 Rust / Wasm 运行时扩展与原生 DOM 编译能力。`,icon:`🦀`}),H,Le);let Re=l(`rue:component:anchor`);c(H,Re),y(x(O,{title:`React JSX + Vue 式响应式`,desc:`适合希望保留 React 风格 JSX，同时获得 ref、reactive、computed 等 Vue 式响应式 API 的项目。`,icon:`🤝`}),H,Re);let ze=e(`section`,u);c(u,ze),f(ze,`max-w-[1100px] mx-auto mt-12`);let U=e(`div`,ze);c(ze,U),f(U,`mt-6 grid md:grid-cols-2 gap-6 items-stretch`);let Be=e(`div`,U);c(U,Be),f(Be,`card bg-base-100 border p-0 overflow-auto h-[330px]`);let Ve=l(`rue:component:anchor`);c(Be,Ve),s(()=>{let e=x(D,{className:`h-full`,lang:`tsx`,code:ce});t(()=>y(e,Be,Ve))});let He=l(`rue:component:anchor`);c(U,He),y(x(se,{}),U,He);let Ue=e(`section`,u);c(u,Ue),f(Ue,`mt-12 rounded-2xl p-8 bg-linear-to-br from-pink-500/80 to-fuchsia-500/80 text-white ring-1 ring-white/30 shadow-lg max-w-[1100px] mx-auto`);let W=e(`div`,Ue);c(Ue,W),f(W,`md:flex items-center justify-between`);let We=e(`div`,W);c(W,We);let Ge=e(`h2`,We);c(We,Ge),f(Ge,`text-2xl font-semibold mb-2 text-white`),c(Ge,p(`生态与插件`));let Ke=e(`p`,We);c(We,Ke),f(Ke,`text-white/90`),c(Ke,p(`官方路由、设计组件库与构建插件协同工作，也支持渐进式接入现有应用。`));let G=e(`div`,W);c(W,G),f(G,`mt-4 md:mt-0 flex gap-3`);let qe=l(`rue:component:anchor`);c(G,qe),y(x(T,{to:`/plugins`,className:`btn btn-outline`,children:`插件`}),G,qe);let Je=l(`rue:component:anchor`);c(G,Je),y(x(T,{to:`/design/button`,className:`btn btn-outline`,children:`组件库`}),G,Je);let Ye=l(`rue:component:anchor`);c(G,Ye),y(x(T,{to:`/textjs`,className:`btn btn-outline`,children:`Text.js`}),G,Ye);let Xe=e(`section`,u);c(u,Xe),f(Xe,`max-w-[1100px] mx-auto mt-8`);let Ze=e(`div`,Xe);c(Xe,Ze),f(Ze,`mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4`);let Qe=l(`rue:list:start`),$e=l(`rue:list:end`);c(Ze,Qe),c(Ze,$e);let et=new Map;s(()=>{et=w({items:pe||[],getKey:(e,t)=>e.to,elements:et,parent:Ze,before:$e,start:Qe,renderItem:(n,r,a,o,u)=>{let h=m(()=>{let r=i(),a=e(`div`,r);c(r,a),f(a,`text-xs font-semibold uppercase tracking-[0.22em] text-base-content/55`);let o=l(`rue:slot:anchor`);c(a,o),s(()=>{let e=n.eyebrow;t(()=>y(e,a,o))});let u=e(`div`,r);c(r,u),f(u,`mt-3 text-xl font-semibold text-base-content`);let d=l(`rue:slot:anchor`);c(u,d),s(()=>{let e=n.title;t(()=>y(e,u,d))});let m=e(`p`,r);c(r,m),f(m,`mt-2 text-sm leading-6 text-base-content/72`);let h=l(`rue:slot:anchor`);c(m,h),s(()=>{let e=n.desc;t(()=>y(e,m,h))});let g=e(`div`,r);return c(r,g),f(g,`mt-4 text-sm font-medium text-base-content/88`),c(g,p(`打开 Demo`)),r});d(x(T,{key:n.to,to:n.to,className:`group rounded-[1.5rem] border p-5 text-left text-base-content transition hover:-translate-y-0.5 hover:shadow-xl ${n.accentClassName}`,children:h}),r,a,o)}})});let K=e(`section`,u);c(u,K),f(K,`max-w-[1100px] mx-auto mt-12`);let tt=e(`h2`,K);c(K,tt),f(tt,`text-2xl font-semibold mb-2`),c(tt,p(`用组件组织界面`));let nt=e(`p`,K);c(K,nt),f(nt,`text-gray-600`),c(nt,p(`Rue 以 JSX / TSX 组件表达界面中的可复用片段。组件同时包含结构与逻辑，按需组合即可形成页面或模块。`));let q=e(`div`,K);c(K,q),f(q,`mt-6 grid md:grid-cols-2 gap-6 items-start`);let rt=e(`div`,q);c(q,rt),f(rt,`card bg-base-100 border p-0 overflow-auto h-[360px] md:h-[560px]`);let it=l(`rue:component:anchor`);c(rt,it),s(()=>{let e=x(D,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue'

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

export default HelloWorld`});t(()=>y(e,rt,it))});let J=e(`div`,q);c(q,J),f(J,`grid gap-6`);let at=l(`rue:component:anchor`);c(J,at),y(x(ee,{}),J,at);let ot=l(`rue:component:anchor`);c(J,ot),y(x(te,{}),J,ot);let st=l(`rue:component:anchor`);c(J,st),y(x(ne,{}),J,st);let ct=l(`rue:component:anchor`);c(J,ct),y(x(re,{}),J,ct);let lt=e(`p`,K);c(K,lt),f(lt,`mt-6 text-gray-600`),c(lt,p(`Rue 的组件强调可复用与可组合，保持清晰的数据与事件流，也方便把交互片段渐进接入现有页面。`));let Y=e(`section`,u);c(u,Y),f(Y,`max-w-[1100px] mx-auto mt-12`);let ut=e(`h2`,Y);c(Y,ut),f(ut,`text-2xl font-semibold mb-2`),c(ut,p(`Vapor 渲染路径：更贴近真实 DOM 更新模型`));let dt=e(`p`,Y);c(Y,dt),f(dt,`text-gray-600`),c(dt,p(`Rue 提供默认 Block / Vapor 渲染路径，Vapor 适合需要更高性能、细粒度更新的区域。`));let ft=e(`p`,Y);c(Y,ft),f(ft,`text-gray-600`),c(ft,p(`结合 Rust 实现的响应式系统、Rust / Wasm 运行时与原生 DOM 编译能力，Vapor 会把 JSX 转换为更贴近真实 DOM 的产物。`));let X=e(`div`,Y);c(Y,X),f(X,`mt-6 grid md:grid-cols-2 gap-6 items-start`);let pt=e(`div`,X);c(X,pt),f(pt,`card bg-base-100 border overflow-auto h-[360px] md:h-[510px]`);let mt=l(`rue:component:anchor`);c(pt,mt),s(()=>{let e=x(D,{className:`h-full`,lang:`tsx`,code:`const Hello: FC = () => (
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

export default HelloWorld`});t(()=>y(e,pt,mt))});let ht=e(`div`,X);c(X,ht),f(ht,`card bg-base-100 border p-0 overflow-auto h-[360px] md:h-[510px]`);let gt=l(`rue:component:anchor`);c(ht,gt),s(()=>{let e=x(D,{className:`h-full`,lang:`ts`,code:`/* RUE_VAPOR_TRANSFORMED */
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
export default HelloWorld;`});t(()=>y(e,ht,gt))});let _t=e(`div`,Y);c(Y,_t),f(_t,`mt-6 space-y-3 text-gray-700`);let vt=e(`p`,_t);c(_t,vt),c(vt,p(`Vapor 渲染路径直接面向原生 DOM，减少额外协调开销；配合细粒度响应式更新，在复杂界面中能保持更稳的性能与内存表现。`));let Z=e(`section`,u);c(u,Z),f(Z,`max-w-[1100px] mx-auto mt-12`);let yt=e(`h2`,Z);c(Z,yt),f(yt,`text-2xl font-semibold mb-2`),c(yt,p(`React 风格 JSX，Vue 式响应式 API`));let bt=e(`p`,Z);c(Z,bt),f(bt,`text-gray-600`),c(bt,p(`Rue 适合希望保留 React 风格 JSX，同时获得 Vue 式响应式 API 的项目。你既可以用 useState，也可以用 ref / reactive / computed 来组织交互逻辑。`));let Q=e(`div`,Z);c(Z,Q),f(Q,`mt-6 grid md:grid-cols-2 gap-6 items-start`);let xt=e(`div`,Q);c(Q,xt),f(xt,`card bg-base-100 border p-0 overflow-auto h-[360px] md:h-[660px]`);let St=l(`rue:component:anchor`);c(xt,St),s(()=>{let e=x(D,{className:`h-full`,lang:`tsx`,code:`import { type FC, useState, ref, reactive, computed } from '@rue-js/rue';

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

export default Reactive;`});t(()=>y(e,xt,St))});let $=e(`div`,Q);c(Q,$),f($,`grid gap-6`);let Ct=e(`div`,$);c($,Ct);let wt=e(`h3`,Ct);c(Ct,wt),f(wt,`text-lg font-semibold mb-2 text-base-content`),c(wt,p(`前端的发展，从原始DOM，到 JQUERY等`));let Tt=l(`rue:component:anchor`);c(Ct,Tt),s(()=>{let e=x(ae,{videos:ie});t(()=>y(e,Ct,Tt))});let Et=e(`div`,$);c($,Et);let Dt=e(`h3`,Et);c(Et,Dt),f(Dt,`text-lg font-semibold mb-2 text-base-content`),c(Dt,p(`ref / reactive 示例`));let Ot=l(`rue:component:anchor`);c(Et,Ot),y(x(oe,{}),Et,Ot);let kt=e(`p`,Z);c(Z,kt),f(kt,`mt-6 text-gray-600`),c(kt,p(`Rue 支持渐进集成：你可以在现有页面中按需挂载组件、路由或交互片段，而不必一次性重写整站。`));let At=l(`rue:component:anchor`);c(u,At),s(()=>{let e=x(me,{eyebrow:`Platinum Sponsor`,title:`白金赞助商`,items:ue,actionLabel:`成为赞助商`,actionTo:`/page/sponsor/index`});t(()=>y(e,u,At))});let jt=l(`rue:component:anchor`);c(u,jt),s(()=>{let e=x(me,{eyebrow:`Gold Sponsor`,title:`黄金赞助商`,actionLabel:`成为赞助商`,actionTo:`/page/sponsor/index`,items:de});t(()=>y(e,u,jt))});let Mt=l(`rue:component:anchor`);return c(u,Mt),s(()=>{let e=x(me,{eyebrow:`Links`,title:`友情链接`,items:fe});t(()=>y(e,u,Mt))}),u})};export{j as default};