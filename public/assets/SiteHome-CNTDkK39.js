import{$ as e,Ct as t,J as n,Kt as r,Lt as i,Q as a,Vt as o,Y as s,Yt as c,Z as l,ct as u,d,et as f,gt as p,l as m,mt as h,ot as g,pt as _,qt as v,st as y,t as b,tt as x,u as S}from"./vapor-runtime-BR_2rwNk.js";import{a as C,n as w}from"./vapor-helpers-vapor-DkadWylb.js";import{n as T}from"./src-DL2I7l-s.js";import{t as E}from"./Code-B_4lzH85.js";var D=t=>d(n=>{let r=e(`div`,n);u(r,`card bg-base-100 border border-base-200 shadow-sm`);let i=e(`div`,r);s(r,i),u(i,`card-body`);let a=e(`div`,i);s(i,a),u(a,`flex items-center gap-3 mb-1`);let d=e(`div`,a);s(a,d),u(d,`w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center`);let f=e(`span`,d);s(d,f),u(f,`text-lg`);let p=l(`rue:slot:anchor`);s(f,p),c(()=>{let e=t.icon||`⚡️`;o(()=>m(e,f,p))});let h=e(`div`,a);s(a,h),u(h,`font-semibold text-base-content`);let g=l(`rue:slot:anchor`);s(h,g),c(()=>{let e=t.title;o(()=>m(e,h,g))});let _=e(`p`,i);s(i,_),u(_,`text-sm text-base-content/70`);let v=l(`rue:slot:anchor`);return s(_,v),c(()=>{let e=t.desc;o(()=>m(e,_,v))}),r}),ee=()=>d(t=>{let n=e(`div`,t);u(n,`card bg-primary text-primary-content shadow-sm`);let r=e(`div`,n);s(n,r),u(r,`card-body items-center text-center`);let i=e(`div`,r);s(r,i),u(i,`text-3xl font-extrabold`),s(i,f(`Hello`));let a=e(`div`,r);return s(r,a),u(a,`mt-2 text-sm opacity-90`),s(a,f(`Hello component`)),n}),te=()=>d(t=>{let n=e(`div`,t);u(n,`card bg-base-100 text-base-content border border-base-200 shadow-sm`);let r=e(`div`,n);s(n,r),u(r,`card-body items-center text-center`);let i=e(`div`,r);s(r,i),u(i,`text-3xl font-extrabold`),s(i,f(`World`));let a=e(`div`,r);return s(r,a),u(a,`mt-2 text-sm text-base-content/70`),s(a,f(`World component`)),n}),ne=()=>d(t=>{let n=e(`div`,t);u(n,`card bg-accent text-accent-content shadow-sm`);let r=e(`div`,n);s(n,r),u(r,`card-body items-center text-center`);let i=e(`div`,r);s(r,i),u(i,`text-3xl font-extrabold`),s(i,f(`Hi`));let a=e(`div`,r);return s(r,a),u(a,`mt-2 text-sm opacity-90`),s(a,f(`Rue`)),n}),re=()=>d(t=>{let n=e(`div`,t);u(n,`card bg-base-100 text-base-content border border-base-200 shadow-sm`);let r=e(`div`,n);s(n,r),u(r,`card-body items-center text-center`);let i=e(`div`,r);s(r,i),u(i,`text-3xl font-extrabold`),s(i,f(`Yes`));let a=e(`div`,r);return s(r,a),u(a,`mt-2 text-sm text-base-content/70`),s(a,f(`My name is Rue`)),n}),ie=[{title:`原始 DOM 编程`,desc:`直接操作节点与事件`},{title:`jQuery 的崛起`,desc:`Write Less, Do More`},{title:`Backbone.js 与 MVC`,desc:`早期前端架构探索`},{title:`Web Components`,desc:`原生组件标准`},{title:`现代构建工具与生态`,desc:`模块化与开发体验`}],O=t=>d(r=>{let i=e(`input`,r);return u(i,`w-full rounded-md border border-base-300 bg-base-100 px-3 py-2 text-base-content shadow-sm focus:border-violet-500 focus:ring focus:ring-violet-200`),c(()=>{_(i,t.value)}),n(i,`input`,e=>t.onChange(e.target.value)),g(i,`placeholder`,`搜索视频`),i}),k=t=>d(n=>{let r=e(`div`,n);u(r,`mt-3 space-y-2`);let i=e(`div`,r);s(r,i),u(i,`text-sm text-base-content/70`);let p=l(`rue:slot:anchor`);s(i,p),c(()=>{let e=t.videos.length;o(()=>m(e,i,p))}),s(i,f(` 个视频`));let h=l(`rue:slot:anchor`);return s(r,h),c(()=>{let n=t.videos.length===0?d(()=>{let n=a(),r=e(`div`,n);s(n,r),u(r,`rounded-md border border-base-300/70 bg-base-100/70 backdrop-blur-sm p-3 text-sm text-base-content/70`);let i=l(`rue:slot:anchor`);return s(r,i),c(()=>{let e=t.emptyHeading||`暂无匹配`;o(()=>m(e,r,i))}),n}):d(()=>{let n=a(),r=e(`ul`,n);s(n,r),u(r,`space-y-2`);let i=l(`rue:list:start`),f=l(`rue:list:end`);s(r,i),s(r,f);let p=new Map;return c(()=>{p=w({items:t.videos||[],getKey:(e,t)=>t,elements:p,parent:r,before:f,singleRoot:!0,start:i,renderItem:(t,n,r,i,f)=>{m(d(()=>{let n=a(),r=e(`li`,n);s(n,r),c(()=>{g(r,`key`,String(f))}),u(r,`rounded-md border border-base-300/70 bg-base-100/70 backdrop-blur-sm p-3`);let i=e(`div`,r);s(r,i),u(i,`font-medium text-base-content`);let d=l(`rue:slot:anchor`);s(i,d),c(()=>{let e=t.title;o(()=>m(e,i,d))});let p=e(`div`,r);s(r,p),u(p,`text-sm text-base-content/70`);let h=l(`rue:slot:anchor`);return s(p,h),c(()=>{let e=t.desc;o(()=>m(e,p,h))}),n}),n,r)}})}),n});o(()=>m(n,r,h))}),r}),ae=e=>{let{searchText:t,setSearchText:n,foundVideos:i}=C(`useSetup:0:0`,()=>r(()=>{let[t,n]=C(`useState:1:0`,()=>v(``));return{searchText:t,setSearchText:n,foundVideos:C(`computed:1:1`,()=>p(()=>e.videos.filter(e=>e.title.toLowerCase().includes(t.value.toLowerCase()))))}}));return d(e=>{let r=a(),u=l(`rue:component:anchor`);s(r,u),c(()=>{let e=b(O,{value:t.value,onChange:n});o(()=>m(e,r,u))});let d=l(`rue:component:anchor`);return s(r,d),c(()=>{let e=b(k,{videos:i.get(),emptyHeading:`没有匹配 “${t.value}”`});o(()=>m(e,r,d))}),r})},oe=()=>{let{count:a,state:o}=C(`useSetup:0:0:dup1`,()=>r(()=>({count:C(`ref:1:2`,()=>i(0)),state:C(`reactive:1:3`,()=>t({enabled:!1}))})));return d(t=>{let r=e(`div`,t);u(r,`rounded-xl border border-base-300/70 bg-base-100/70 backdrop-blur-sm p-4`);let i=e(`div`,r);s(r,i),u(i,`flex items-center gap-3`);let l=e(`button`,i);s(i,l),u(l,`btn btn-primary`),n(l,`click`,()=>a.value++),s(l,f(`+1`));let d=e(`button`,i);s(i,d),u(d,`btn btn-outline`),n(d,`click`,()=>a.value=0),s(d,f(`重置`));let p=e(`label`,i);s(i,p),u(p,`flex items-center gap-2 ml-auto`);let m=e(`input`,p);s(p,m),g(m,`type`,`checkbox`),u(m,`checkbox`),c(()=>{y(m,!!o.enabled)}),n(m,`change`,e=>o.enabled=e.target.checked);let _=e(`span`,p);s(p,_),u(_,`text-sm text-base-content`),s(_,f(`启用`));let v=e(`div`,r);s(r,v),u(v,`mt-2 text-sm text-base-content/70`),s(v,f(`计数：`));let b=x(v);s(v,b),c(()=>{h(b,a.value)}),s(v,f(`，启用：`));let S=x(v);return s(v,S),c(()=>{h(S,o.enabled?`是`:`否`)}),r})},se=()=>{let{count:t}=C(`useSetup:0:0:dup2`,()=>r(()=>({count:C(`ref:1:4`,()=>i(0))})));return d(r=>{let i=e(`div`,r);u(i,`card h-[330px] border border-base-300/70 bg-base-100/80 shadow-sm backdrop-blur-sm`);let p=e(`div`,i);s(i,p),u(p,`card-body flex h-full p-6`);let g=e(`div`,p);s(p,g),u(g,`flex items-start justify-between gap-4`);let _=e(`div`,g);s(g,_);let v=e(`div`,_);s(_,v),u(v,`text-sm uppercase tracking-[0.22em] text-base-content/45`),s(v,f(`Live Demo`));let y=e(`div`,_);s(_,y),u(y,`mt-2 text-sm text-base-content/70`),s(y,f(`一个 ref signal 同时驱动计数和 v-if 条件分支。`));let b=e(`div`,g);s(g,b),u(b,`badge badge-outline badge-lg`);let S=x(b);s(b,S),c(()=>{h(S,t.value)});let C=e(`div`,p);s(p,C),u(C,`mt-6 grid gap-4`);let w=e(`button`,C);s(C,w),u(w,`rounded-xl border border-base-300 bg-base-100 px-4 py-3 text-base font-medium text-base-content shadow-sm transition hover:border-primary hover:text-primary`),n(w,`click`,()=>t.value++),s(w,f(`计数：`));let T=x(w);s(w,T),c(()=>{h(T,t.value)});let E=e(`div`,C);s(C,E),u(E,`min-h-[96px] rounded-2xl border border-base-300/70 bg-base-200/40 p-4`);let D=l(`rue:slot:anchor`);s(E,D),c(()=>{let n=t.value%2==0?d(()=>{let t=a(),n=e(`div`,t);s(t,n),u(n,`flex h-full items-center justify-between gap-3`);let r=e(`div`,n);s(n,r);let i=e(`div`,r);s(r,i),u(i,`font-semibold text-base-content`),s(i,f(`偶数态 UI`));let o=e(`div`,r);s(r,o),u(o,`mt-1 text-sm text-base-content/70`),s(o,f(`当前展示欢迎提示卡片。`));let c=e(`span`,n);return s(n,c),u(c,`badge badge-info badge-lg`),s(c,f(`v-if`)),t}):d(()=>{let t=a(),n=e(`div`,t);s(t,n),u(n,`flex h-full items-center justify-between gap-3`);let r=e(`div`,n);s(n,r);let i=e(`div`,r);s(r,i),u(i,`font-semibold text-base-content`),s(i,f(`奇数态 UI`));let o=e(`div`,r);s(r,o),u(o,`mt-1 text-sm text-base-content/70`),s(o,f(`signal 更新后切到另一套界面。`));let c=e(`span`,n);return s(n,c),u(c,`badge badge-success badge-lg`),s(c,f(`v-else`)),t});o(()=>m(n,E,D))});let ee=e(`div`,p);return s(p,ee),u(ee,`mt-auto text-xs tracking-[0.16em] text-base-content/45`),s(ee,f(`点击按钮时，下面的两个 UI 会跟着 signal 一起切换。`)),i})},ce=`import { type FC, ref } from '@rue-js/rue'

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

export default App`,le=[{id:`npm`,label:`npm`,command:`npm create rue@latest`},{id:`pnpm`,label:`pnpm`,command:`pnpm create rue@latest`},{id:`bun`,label:`bun`,command:`bun create rue@latest`},{id:`yarn`,label:`yarn`,command:`yarn dlx create-rue@latest`}],ue=[{name:`虚位以待`,href:`/page/sponsor/index`,description:`期待与你一起支持 Rue 生态建设。`}],de=[{name:`虚位以待`,href:`/page/sponsor/index`,description:`欢迎加入 Rue 赞助计划。`}],fe=[{name:`QueryPHP`,href:`https://www.queryphp.com`,description:`现代化 PHP 开发框架`},{name:`VibeWindow`,href:`https://vibewindow.huododo.com/#/`,description:`氛围视窗软件智能体`},{name:`订货宝`,href:`https://www.dhb168.com/?from=ruejs`,description:`经销商订货系统与批发贸易订货平台`},{name:`Vercel`,href:`https://vercel.com`,description:`云部署与前端基础设施`}],pe=[{title:`i18n 国际化插件`,desc:`直接展示源文本即 key、局部插值和按需懒加载语言包的完整链路。`,to:`/examples/i18n-switcher`,eyebrow:`I18n Demo`,accentClassName:`border-emerald-200 bg-linear-to-br from-emerald-500/12 via-base-100 to-teal-500/10 hover:border-emerald-400/60`},{title:`路由插件`,desc:`集中看嵌套路由、守卫、redirect 和实验页在真实页面里的组合方式。`,to:`/examples/router-demo/guide/router/overview`,eyebrow:`Router Demo`,accentClassName:`border-sky-200 bg-linear-to-br from-sky-500/12 via-base-100 to-cyan-500/10 hover:border-sky-400/60`},{title:`数据状态与 URL 同步插件`,desc:`把 Store、筛选条件和查询串连起来，观察状态如何驱动可分享链接。`,to:`/examples/store-query-sync`,eyebrow:`State Demo`,accentClassName:`border-amber-200 bg-linear-to-br from-amber-500/12 via-base-100 to-orange-500/10 hover:border-amber-400/60`}],me=t=>d(n=>{let r=e(`section`,n);u(r,`max-w-[1100px] mx-auto mt-8`);let i=e(`div`,r);s(r,i),u(i,`flex flex-col gap-3 md:flex-row md:items-end md:justify-between`);let f=e(`div`,i);s(i,f);let p=e(`div`,f);s(f,p),u(p,`text-sm font-semibold uppercase tracking-[0.24em] text-base-content/45`);let h=l(`rue:slot:anchor`);s(p,h),c(()=>{let e=t.eyebrow;o(()=>m(e,p,h))});let _=e(`h2`,f);s(f,_),u(_,`mt-2 text-3xl font-semibold text-base-content`);let v=l(`rue:slot:anchor`);s(_,v),c(()=>{let e=t.title;o(()=>m(e,_,v))});let y=l(`rue:slot:anchor`);s(i,y),c(()=>{let e=t.actionLabel&&t.actionTo?d(()=>{let e=a(),n=l(`rue:component:anchor`);return s(e,n),c(()=>{let r=b(T,{to:t.actionTo,className:`btn btn-outline self-start md:self-auto`,children:t.actionLabel});o(()=>m(r,e,n))}),e}):``;o(()=>m(e,i,y))});let x=e(`div`,r);s(r,x),c(()=>{u(x,String(`mt-5 grid gap-4 ${t.items.length>1?`md:grid-cols-2`:``}`))});let S=l(`rue:list:start`),C=l(`rue:list:end`);s(x,S),s(x,C);let E=new Map;return c(()=>{E=w({items:t.items||[],getKey:(e,t)=>e.name,elements:E,parent:x,before:C,singleRoot:!0,trackIndex:!1,start:S,renderItem:(t,n,r,i,f)=>{m(d(()=>{let n=a(),r=e(`a`,n);s(n,r),c(()=>{g(r,`key`,String(t.name))}),c(()=>{g(r,`href`,String(t.href))}),g(r,`target`,`_blank`),g(r,`rel`,`noreferrer`),u(r,`group rounded-[1.5rem] border border-base-200 bg-base-100/90 p-5 transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg`);let i=e(`div`,r);s(r,i),u(i,`flex min-h-[116px] flex-col justify-center gap-4`);let d=e(`div`,i);s(i,d);let f=e(`div`,d);s(d,f),u(f,`text-3xl font-semibold tracking-tight text-base-content`);let p=l(`rue:slot:anchor`);s(f,p),c(()=>{let e=t.name;o(()=>m(e,f,p))});let h=e(`p`,d);s(d,h),u(h,`mt-3 max-w-[30ch] text-base leading-7 text-base-content/65`);let _=l(`rue:slot:anchor`);return s(h,_),c(()=>{let e=t.description;o(()=>m(e,h,_))}),n}),n,r)}})}),r}),he=()=>{let{activeCreateCommand:t,selectedCreateCommand:h}=C(`useSetup:0:0:dup3`,()=>r(()=>{let e=C(`ref:1:5`,()=>i(`npm`));return{activeCreateCommand:e,selectedCreateCommand:C(`computed:1:6`,()=>p(()=>le.find(t=>t.id===e.value)??le[0]))}}));return d(r=>{let i=a(),p=e(`section`,i);s(i,p),u(p,`relative rounded-2xl bg-gr2adient-to-br from-violet-50 to-fuchsia-50 p-12 mb-10`);let _=e(`div`,p);s(p,_),u(_,`absolute -top-24 -left-24 w-96 h-96 rounded-full bg-violet-200/40 blur-3xl`);let v=e(`div`,p);s(p,v),u(v,`absolute -bottom-24 -right-24 w-md h-112 rounded-full bg-fuchsia-200/40 blur-3xl`);let y=e(`div`,p);s(p,y),u(y,`relative max-w-[1100px] mx-auto text-center`);let x=e(`div`,y);s(y,x),u(x,`hover-3d`);let C=e(`figure`,x);s(x,C);let O=e(`div`,C);s(C,O),g(O,`class`,`mx-auto w-full px-6 pb-4 text-center`);let k=e(`div`,O);s(O,k),g(k,`class`,`flex select-none items-end justify-center gap-6 whitespace-nowrap text-[clamp(6rem,21vw,16rem)] font-black leading-none bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent md:gap-10`);let he=e(`span`,k);s(k,he),s(he,f(`Rue`));let ge=e(`span`,k);s(k,ge),g(ge,`class`,`pl-1`),s(ge,f(`.JS`));let A=e(`div`,C);s(C,A),u(A,`inline-flex items-center justify-center gap-3`);let _e=e(`span`,A);s(A,_e),u(_e,`inline-flex items-center justify-center w-28 h-28 md:w-30 md:h-30 rounded-full bg-linear-to-br from-sky-500 via-cyan-400 to-emerald-300 shadow-md ring-1 ring-white/15`);let ve=e(`span`,_e);s(_e,ve),u(ve,`text-black font-extrabold text-[28px] md:text-[112px] leading-none drop-shadow-none`),s(ve,f(`T`));let ye=e(`span`,A);s(A,ye),u(ye,`text-[44px] md:text-[95px] font-extrabold tracking-tight bg-linear-to-r from-sky-500 via-cyan-400 to-emerald-300 bg-clip-text text-transparent`),s(ye,f(`he Wasm`));let be=e(`div`,C);s(C,be),u(be,`mt-2 text-[44px] md:text-[62px] font-extrabold tracking-tight bg-linear-to-r from-sky-400 via-cyan-300 to-teal-200 bg-clip-text text-transparent`),s(be,f(`Framework For Native DOM`));let xe=e(`p`,C);s(C,xe),u(xe,`mt-6 text-lg md:text-xl text-base-content/70`),s(xe,f(`Rust 运行时，Rust 响应式系统，Rust 原生 DOM 编译器`)),s(x,e(`div`,x)),s(x,e(`div`,x)),s(x,e(`div`,x)),s(x,e(`div`,x)),s(x,e(`div`,x)),s(x,e(`div`,x)),s(x,e(`div`,x)),s(x,e(`div`,x));let j=e(`div`,y);s(y,j),u(j,`mt-8 flex flex-wrap justify-center gap-3`);let Se=l(`rue:component:anchor`);s(j,Se),m(b(T,{to:`/guide/guide/quick-start`,className:`btn btn-primary btn-lg`,children:`快速上手`}),j,Se);let Ce=l(`rue:component:anchor`);s(j,Ce),m(b(T,{to:`/guide/guide/introduction`,className:`btn btn-outline btn-lg`,children:`文档`}),j,Ce);let we=l(`rue:component:anchor`);s(j,we),m(b(T,{to:`/api/api/index`,className:`btn btn-outline btn-lg`,children:`API`}),j,we);let M=e(`a`,j);s(j,M),g(M,`href`,`https://github.com/hunzhiwange/ruejs`),g(M,`target`,`_blank`),u(M,`btn btn-outline btn-lg`),s(M,f(`Github`));let N=e(`div`,y);s(y,N),u(N,`mx-auto mt-18 max-w-[900px] rounded-2xl border border-white/60 bg-slate-950/90 p-4 text-left shadow-xl shadow-fuchsia-200/40`);let P=e(`div`,N);s(N,P),u(P,`mb-3 flex flex-wrap items-center justify-between gap-3`);let F=e(`div`,P);s(P,F),u(F,`flex items-center gap-2`);let Te=e(`span`,F);s(F,Te),u(Te,`h-3 w-3 rounded-full bg-rose-400`);let Ee=e(`span`,F);s(F,Ee),u(Ee,`h-3 w-3 rounded-full bg-amber-400`);let De=e(`span`,F);s(F,De),u(De,`h-3 w-3 rounded-full bg-emerald-400`);let Oe=e(`span`,F);s(F,Oe),u(Oe,`ml-2 text-xs uppercase tracking-[0.24em] text-white/45`),s(Oe,f(`Quick Start`));let I=e(`div`,P);s(P,I),u(I,`inline-flex rounded-xl border border-white/10 bg-white/5 p-1`),g(I,`role`,`tablist`),g(I,`aria-label`,`选择创建命令`);let ke=l(`rue:list:start`),Ae=l(`rue:list:end`);s(I,ke),s(I,Ae);let je=new Map;c(()=>{je=w({items:le||[],getKey:(e,t)=>e.id,elements:je,parent:I,before:Ae,singleRoot:!0,trackIndex:!1,start:ke,renderItem:(r,i,f,p,h)=>{m(d(()=>{let i=a(),d=e(`button`,i);s(i,d),c(()=>{g(d,`key`,String(r.id))}),g(d,`type`,`button`),g(d,`role`,`tab`),c(()=>{g(d,`aria-selected`,String(t.value===r.id))}),c(()=>{u(d,String(`rounded-lg px-3 py-1.5 text-xs font-medium transition ${t.value===r.id?`bg-white text-slate-950 shadow-sm`:`text-white/65 hover:text-white`}`))}),n(d,`click`,()=>t.value=r.id);let f=l(`rue:slot:anchor`);return s(d,f),c(()=>{let e=r.label;o(()=>m(e,d,f))}),i}),i,f)}})});let Me=e(`pre`,N);s(N,Me),u(Me,`overflow-x-auto text-sm md:text-base text-white/92`);let Ne=e(`code`,Me);s(Me,Ne),s(Ne,f(`$ `));let Pe=l(`rue:slot:anchor`);s(Ne,Pe),c(()=>{let e=h.get().command;o(()=>m(e,Ne,Pe))});let L=e(`section`,i);s(i,L),u(L,`grid md:grid-cols-3 gap-6 max-w-[1100px] mx-auto`);let Fe=l(`rue:component:anchor`);s(L,Fe),m(b(D,{title:`简洁易用`,desc:`轻量、直观的 API，适合渐进式接入；保留熟悉的 JSX / TSX 开发方式，无需额外模板语法。`,icon:`✅`}),L,Fe);let Ie=l(`rue:component:anchor`);s(L,Ie),m(b(D,{title:`编译驱动的原生 DOM 渲染`,desc:`围绕真实 DOM 做最小更新，并可结合 Rust / Wasm 运行时扩展与原生 DOM 编译能力。`,icon:`🦀`}),L,Ie);let Le=l(`rue:component:anchor`);s(L,Le),m(b(D,{title:`React JSX + Vue 式响应式`,desc:`适合希望保留 React 风格 JSX，同时获得 ref、reactive、computed 等 Vue 式响应式 API 的项目。`,icon:`🤝`}),L,Le);let Re=e(`section`,i);s(i,Re),u(Re,`max-w-[1100px] mx-auto mt-12`);let R=e(`div`,Re);s(Re,R),u(R,`mt-6 grid md:grid-cols-2 gap-6 items-stretch`);let z=e(`div`,R);s(R,z),u(z,`card bg-base-100 border p-0 overflow-auto h-[330px]`);let ze=l(`rue:component:anchor`);s(z,ze),c(()=>{let e=b(E,{className:`h-full`,lang:`tsx`,code:ce});o(()=>m(e,z,ze))});let Be=l(`rue:component:anchor`);s(R,Be),m(b(se,{}),R,Be);let Ve=e(`section`,i);s(i,Ve),u(Ve,`mt-12 rounded-2xl p-8 bg-linear-to-br from-pink-500/80 to-fuchsia-500/80 text-white ring-1 ring-white/30 shadow-lg max-w-[1100px] mx-auto`);let B=e(`div`,Ve);s(Ve,B),u(B,`md:flex items-center justify-between`);let V=e(`div`,B);s(B,V);let He=e(`h2`,V);s(V,He),u(He,`text-2xl font-semibold mb-2 text-white`),s(He,f(`生态与插件`));let Ue=e(`p`,V);s(V,Ue),u(Ue,`text-white/90`),s(Ue,f(`官方路由、设计组件库与构建插件协同工作，也支持渐进式接入现有应用。`));let H=e(`div`,B);s(B,H),u(H,`mt-4 md:mt-0 flex gap-3`);let We=l(`rue:component:anchor`);s(H,We),m(b(T,{to:`/plugins`,className:`btn btn-outline`,children:`插件`}),H,We);let Ge=l(`rue:component:anchor`);s(H,Ge),m(b(T,{to:`/design/button`,className:`btn btn-outline`,children:`组件库`}),H,Ge);let Ke=e(`section`,i);s(i,Ke),u(Ke,`max-w-[1100px] mx-auto mt-8`);let U=e(`div`,Ke);s(Ke,U),u(U,`mt-6 grid gap-4 md:grid-cols-3`);let qe=l(`rue:list:start`),Je=l(`rue:list:end`);s(U,qe),s(U,Je);let Ye=new Map;c(()=>{Ye=w({items:pe||[],getKey:(e,t)=>e.to,elements:Ye,parent:U,before:Je,start:qe,renderItem:(t,n,r,i,p)=>{let h=d(()=>{let n=a(),r=e(`div`,n);s(n,r),u(r,`text-xs font-semibold uppercase tracking-[0.22em] text-base-content/55`);let i=l(`rue:slot:anchor`);s(r,i),c(()=>{let e=t.eyebrow;o(()=>m(e,r,i))});let d=e(`div`,n);s(n,d),u(d,`mt-3 text-xl font-semibold text-base-content`);let p=l(`rue:slot:anchor`);s(d,p),c(()=>{let e=t.title;o(()=>m(e,d,p))});let h=e(`p`,n);s(n,h),u(h,`mt-2 text-sm leading-6 text-base-content/72`);let g=l(`rue:slot:anchor`);s(h,g),c(()=>{let e=t.desc;o(()=>m(e,h,g))});let _=e(`div`,n);return s(n,_),u(_,`mt-4 text-sm font-medium text-base-content/88`),s(_,f(`打开 Demo`)),n});S(b(T,{key:t.to,to:t.to,className:`group rounded-[1.5rem] border p-5 text-left text-base-content transition hover:-translate-y-0.5 hover:shadow-xl ${t.accentClassName}`,children:h}),n,r,i)}})});let W=e(`section`,i);s(i,W),u(W,`max-w-[1100px] mx-auto mt-12`);let Xe=e(`h2`,W);s(W,Xe),u(Xe,`text-2xl font-semibold mb-2`),s(Xe,f(`用组件组织界面`));let Ze=e(`p`,W);s(W,Ze),u(Ze,`text-gray-600`),s(Ze,f(`Rue 以 JSX / TSX 组件表达界面中的可复用片段。组件同时包含结构与逻辑，按需组合即可形成页面或模块。`));let G=e(`div`,W);s(W,G),u(G,`mt-6 grid md:grid-cols-2 gap-6 items-start`);let Qe=e(`div`,G);s(G,Qe),u(Qe,`card bg-base-100 border p-0 overflow-auto h-[360px] md:h-[560px]`);let $e=l(`rue:component:anchor`);s(Qe,$e),c(()=>{let e=b(E,{className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue'

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

export default HelloWorld`});o(()=>m(e,Qe,$e))});let K=e(`div`,G);s(G,K),u(K,`grid gap-6`);let et=l(`rue:component:anchor`);s(K,et),m(b(ee,{}),K,et);let tt=l(`rue:component:anchor`);s(K,tt),m(b(te,{}),K,tt);let nt=l(`rue:component:anchor`);s(K,nt),m(b(ne,{}),K,nt);let rt=l(`rue:component:anchor`);s(K,rt),m(b(re,{}),K,rt);let it=e(`p`,W);s(W,it),u(it,`mt-6 text-gray-600`),s(it,f(`Rue 的组件强调可复用与可组合，保持清晰的数据与事件流，也方便把交互片段渐进接入现有页面。`));let q=e(`section`,i);s(i,q),u(q,`max-w-[1100px] mx-auto mt-12`);let at=e(`h2`,q);s(q,at),u(at,`text-2xl font-semibold mb-2`),s(at,f(`Vapor 渲染路径：更贴近真实 DOM 更新模型`));let ot=e(`p`,q);s(q,ot),u(ot,`text-gray-600`),s(ot,f(`Rue 提供默认 Block / Vapor 渲染路径，Vapor 适合需要更高性能、细粒度更新的区域。`));let st=e(`p`,q);s(q,st),u(st,`text-gray-600`),s(st,f(`结合 Rust 实现的响应式系统、Rust / Wasm 运行时与原生 DOM 编译能力，Vapor 会把 JSX 转换为更贴近真实 DOM 的产物。`));let J=e(`div`,q);s(q,J),u(J,`mt-6 grid md:grid-cols-2 gap-6 items-start`);let ct=e(`div`,J);s(J,ct),u(ct,`card bg-base-100 border overflow-auto h-[360px] md:h-[510px]`);let lt=l(`rue:component:anchor`);s(ct,lt),c(()=>{let e=b(E,{className:`h-full`,lang:`tsx`,code:`const Hello: FC = () => (
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

export default HelloWorld`});o(()=>m(e,ct,lt))});let ut=e(`div`,J);s(J,ut),u(ut,`card bg-base-100 border p-0 overflow-auto h-[360px] md:h-[510px]`);let dt=l(`rue:component:anchor`);s(ut,dt),c(()=>{let e=b(E,{className:`h-full`,lang:`ts`,code:`/* RUE_VAPOR_TRANSFORMED */
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
export default HelloWorld;`});o(()=>m(e,ut,dt))});let ft=e(`div`,q);s(q,ft),u(ft,`mt-6 space-y-3 text-gray-700`);let pt=e(`p`,ft);s(ft,pt),s(pt,f(`Vapor 渲染路径直接面向原生 DOM，减少额外协调开销；配合细粒度响应式更新，在复杂界面中能保持更稳的性能与内存表现。`));let Y=e(`section`,i);s(i,Y),u(Y,`max-w-[1100px] mx-auto mt-12`);let mt=e(`h2`,Y);s(Y,mt),u(mt,`text-2xl font-semibold mb-2`),s(mt,f(`React 风格 JSX，Vue 式响应式 API`));let ht=e(`p`,Y);s(Y,ht),u(ht,`text-gray-600`),s(ht,f(`Rue 适合希望保留 React 风格 JSX，同时获得 Vue 式响应式 API 的项目。你既可以用 useState，也可以用 ref / reactive / computed 来组织交互逻辑。`));let X=e(`div`,Y);s(Y,X),u(X,`mt-6 grid md:grid-cols-2 gap-6 items-start`);let gt=e(`div`,X);s(X,gt),u(gt,`card bg-base-100 border p-0 overflow-auto h-[360px] md:h-[660px]`);let _t=l(`rue:component:anchor`);s(gt,_t),c(()=>{let e=b(E,{className:`h-full`,lang:`tsx`,code:`import { type FC, useState, ref, reactive, computed } from '@rue-js/rue';

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

export default Reactive;`});o(()=>m(e,gt,_t))});let Z=e(`div`,X);s(X,Z),u(Z,`grid gap-6`);let Q=e(`div`,Z);s(Z,Q);let vt=e(`h3`,Q);s(Q,vt),u(vt,`text-lg font-semibold mb-2 text-base-content`),s(vt,f(`前端的发展，从原始DOM，到 JQUERY等`));let yt=l(`rue:component:anchor`);s(Q,yt),c(()=>{let e=b(ae,{videos:ie});o(()=>m(e,Q,yt))});let $=e(`div`,Z);s(Z,$);let bt=e(`h3`,$);s($,bt),u(bt,`text-lg font-semibold mb-2 text-base-content`),s(bt,f(`ref / reactive 示例`));let xt=l(`rue:component:anchor`);s($,xt),m(b(oe,{}),$,xt);let St=e(`p`,Y);s(Y,St),u(St,`mt-6 text-gray-600`),s(St,f(`Rue 支持渐进集成：你可以在现有页面中按需挂载组件、路由或交互片段，而不必一次性重写整站。`));let Ct=l(`rue:component:anchor`);s(i,Ct),c(()=>{let e=b(me,{eyebrow:`Platinum Sponsor`,title:`白金赞助商`,items:ue,actionLabel:`成为赞助商`,actionTo:`/page/sponsor/index`});o(()=>m(e,i,Ct))});let wt=l(`rue:component:anchor`);s(i,wt),c(()=>{let e=b(me,{eyebrow:`Gold Sponsor`,title:`黄金赞助商`,actionLabel:`成为赞助商`,actionTo:`/page/sponsor/index`,items:de});o(()=>m(e,i,wt))});let Tt=l(`rue:component:anchor`);return s(i,Tt),c(()=>{let e=b(me,{eyebrow:`Links`,title:`友情链接`,items:fe});o(()=>m(e,i,Tt))}),i})};export{he as default};