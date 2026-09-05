import{Bt as e,C as t,Et as n,H as r,K as i,Kt as a,L as o,Mt as s,S as c,Sn as l,W as u,X as d,Y as f,_n as p,_t as m,bn as h,fn as g,gn as _,hn as v,ht as y,it as b,kn as x,l as S,mn as C,nt as w,ot as T,q as E,rt as D,tt as O,wn as k,x as A,yn as j,z as M}from"./rue-runtime-CwEGJ854.js";import{r as N}from"./SidebarPlaygroundDesign-CwCJwf8H.js";import{t as P}from"./PreviewBlock-Daz-jANt.js";var F=p(`<span></span>`),I=p(`<span aria-hidden="true"><!--rue:text-hole:0--></span>`),L=p(`<span class="inline-flex min-w-0 flex-col gap-1 py-1 text-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></span>`),R=(...e)=>e.filter(Boolean).join(` `),z=e=>Array.isArray(e)?e.flatMap(e=>z(e)):e==null||typeof e==`boolean`?[]:[e],B=(e,t)=>t?`${e} ${t}`:e,V=(e,t)=>t??e,H=(e,t)=>{if(t)return t;if(e===`error`)return`error`;if(e===`finish`||e===`process`)return`primary`},U=(e,t)=>{if(!t){if(e===`finish`)return`✓`;if(e===`error`)return`✕`}},W=e=>{typeof e.preventDefault==`function`&&e.preventDefault(),typeof e.stopPropagation==`function`&&e.stopPropagation()},G=e=>{let t=u(e.status),r=t.get()===`wait`?`inline-block size-2.5 rounded-full border border-base-300 bg-base-100`:`inline-block size-2.5 rounded-full bg-current`;return E(n(Object.assign(e=>{let t=F().content.cloneNode(!0).firstChild,n=t,i;return k(()=>{let e=r,t=e==null?``:String(e);Object.is(i,t)||(i=t,n.className=t)}),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),e=>M(()=>{t.set(e.status)}),()=>e)},K=(e,t)=>{if(!e)return;let n=r(G,()=>({status:t.status}));return typeof e==`function`?e(n,t):n},q=(e,t,n,r)=>e.status?e.status:typeof n==`number`?t<n?`finish`:t===n?r??`process`:`wait`:`wait`,J=a((e,t,i)=>{let{nextChildren:a,__rue_phase2_nextChildren:o}=j(`useSetup:0:0`,()=>{let e=l(()=>z(i));return e.get(),{nextChildren:e,__rue_phase2_nextChildren:e}});return r(S,()=>({is:e,...t,children:(e,t,r)=>A(e,r,()=>n(Object.assign(e=>{let t=w(),n=_(``);return g(t,n),h(n,()=>a.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))}))}),Y=({as:e=`li`,color:t,className:n,title:r,description:i,content:a,subTitle:s,icon:c,status:l,disabled:u,clickable:p,dataContent:m,children:h,index:g,onClick:_,onKeyDown:v,...S})=>{let C=e,E=a??i,A=r??h,j=p??!!_,M=H(l,t),N=m??S[`data-content`]??U(l,c!=null),P=r!=null||E!=null||s!=null||c!=null,F=S[`aria-current`]??(l===`process`?`step`:void 0),R=u?`true`:void 0,z=`step`;M&&(z+=` step-${M}`),j&&!u&&(z+=` cursor-pointer`),u&&(z+=` opacity-50`),j&&u&&(z+=` cursor-not-allowed`);let V=e=>{if(u){W(e);return}_&&_(e,g)},G=j?S.role??`button`:S.role,K=j?S.tabIndex??(u?-1:0):S.tabIndex,q=j?e=>{if(v&&v(e),e.defaultPrevented||u){u&&W(e);return}(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),V(e))}:S.onKeyDown,Y=j?V:S.onClick,X=P?y(()=>{let e=w();d(e,b(` `));let t=O(`rue:slot:anchor`);d(e,t),k(()=>{let n=c==null?``:y(()=>{let e=w(),t=I().content.cloneNode(!0),n=t.firstChild,r=n,i=n.childNodes[0],a=i.parentNode;return e.appendChild(t),k(()=>{o(r,B(`step-icon`,E==null?void 0:`mt-0.5`))}),T(r,`aria-hidden`,`true`),k(()=>{let e=c;x(()=>f(e,a,i))}),e},!0);x(()=>f(n,e,t))}),d(e,b(` `));let n=L().content.cloneNode(!0),r=n.firstChild,i=r.childNodes[0],a=i.parentNode,l=r.childNodes[1],u=l.parentNode;return e.appendChild(n),k(()=>{let e=A!=null||s!=null?y(()=>{let e=w(),t=D(`span`,e);d(e,t),o(t,`flex flex-wrap items-center gap-2 leading-tight`);let n=O(`rue:slot:anchor`);d(t,n),k(()=>{let e=A==null?``:y(()=>{let e=w(),t=D(`span`,e);d(e,t),o(t,`font-medium`);let n=O(`rue:slot:anchor`);return d(t,n),k(()=>{let e=A;x(()=>f(e,t,n))}),e},!0);x(()=>f(e,t,n))});let r=O(`rue:slot:anchor`);return d(t,r),k(()=>{let e=s==null?``:y(()=>{let e=w(),t=D(`span`,e);d(e,t),o(t,`text-xs opacity-60`);let n=O(`rue:slot:anchor`);return d(t,n),k(()=>{let e=s;x(()=>f(e,t,n))}),e},!0);x(()=>f(e,t,r))}),e},!0):``;x(()=>f(e,a,i))}),k(()=>{let e=E==null?``:y(()=>{let e=w(),t=D(`span`,e);d(e,t),o(t,`text-xs leading-snug opacity-70`);let n=O(`rue:slot:anchor`);return d(t,n),k(()=>{let e=E;x(()=>f(e,t,n))}),e},!0);x(()=>f(e,u,l))}),d(e,b(` `)),e},!0):h;return J(C,{...S,className:B(z,n),...N==null?{}:{"data-content":N},role:G,tabIndex:K,onClick:Y,onKeyDown:q,"aria-current":F,"aria-disabled":R},X)},X=Object.assign(({as:e=`ul`,direction:t,orientation:n,className:r,children:i,items:o,current:s,status:c,progressDot:u,onChange:d,...f})=>{let p=e,h=V(t,n),g=o&&o.length>0?o.map(a((e,t)=>{a();let n=l(()=>q(e,t,s,c));n.get();let r=n,i=l(()=>e.icon??K(u,{index:t,status:r.get(),title:e.title,description:e.description,content:e.content}));i.get();let o=l(()=>e.clickable??(!!d||!!e.onClick));return o.get(),m(Y,()=>({key:e.key??t,...e,index:t,status:n.get(),color:H(n.get(),e.color),icon:i.get(),clickable:o.get(),"aria-current":t===s?e[`aria-current`]??`step`:e[`aria-current`],onClick:(t,n)=>{e.disabled||(e.onClick&&typeof n==`number`&&e.onClick(t,n),d&&typeof n==`number`&&n!==s&&d(n))}}))})):i,_=`steps`;return h&&(_+=` steps-${h}`),J(p,{...f,className:R(_,r)},g)},{Step:Y,Icon:({as:e=`span`,className:t,children:n,...r})=>J(e,{...r,className:B(`step-icon`,t)},n)}),ee=p(`<span class="tooltip tooltip-bottom"><!--rue:text-hole:0--></span>`),Z=p(`<div class="card bg-base-100 shadow-sm"><div class="card-body"><!--rue:opaque-hole:0--></div></div>`),te=p(`<div class="card bg-base-100 shadow-sm"><div class="card-body gap-4"><!--rue:opaque-hole:0--><div class="text-sm opacity-70">当前索引为 <code>1</code>，所以第 0 步自动完成，第 1 步继承根节点的 <code>error</code> 状态。</div></div></div>`),Q=p(`<div class="not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100"><table class="table table-zebra"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><!--rue:text-hole:0--></tbody></table></div>`),$=p(`<div class="grid gap-5"><div class="space-y-2"><div class="text-sm font-medium">长标签交付流程</div><div class="max-w-xl overflow-x-auto pb-2" data-testid="steps-scroll-wrapper"><!--rue:opaque-hole:0--></div></div><div class="space-y-2"><div class="text-sm font-medium">编号里程碑</div><div class="max-w-md overflow-x-auto pb-2"><!--rue:opaque-hole:1--></div></div></div>`),ne=p(`<div class="card bg-base-100 shadow-sm"><div class="card-body gap-4"><!--rue:opaque-hole:0--><div class="rounded-box border border-dashed border-base-300 bg-base-200/50 px-4 py-3 text-sm">点击步骤可切换，当前选中步骤：<code><!--rue:text-hole:1--></code></div></div></div>`),re=p(`<div class="max-w-none prose prose-sm md:prose-base"><h1>Steps 步骤条</h1><p class="text-sm mt-3 mb-3">Rue Steps 展示 daisyUI 的轻量视觉风格，同时补充更贴近成熟业务组件的数据驱动 API： 支持 <code>items</code>、<code>current</code>、<code>status</code>、<code>progressDot</code>、 <code>onChange</code>，以及单步级别的 <code>title</code>、<code>description</code>、 <code>subTitle</code> 和 <code>icon</code>。</p><div class="not-prose mt-6 grid gap-4 md:grid-cols-3"><div class="rounded-box border border-base-300 bg-base-100 p-4 shadow-sm"><div class="text-xs font-semibold uppercase tracking-wide text-primary">双模式</div><div class="mt-2 text-sm font-medium">children / items 都可用</div><p class="mt-2 text-sm opacity-70">基础的 <code>Steps.Step</code> 和 <code>Steps.Icon</code> 不变，新场景可直接传入数据数组。</p></div><div class="rounded-box border border-base-300 bg-base-100 p-4 shadow-sm"><div class="text-xs font-semibold uppercase tracking-wide text-secondary">状态推导</div><div class="mt-2 text-sm font-medium">current 自动推导完成/进行中/等待</div><p class="mt-2 text-sm opacity-70">不必手动给每一步都写颜色，只有例外项再单独覆盖即可。</p></div><div class="rounded-box border border-base-300 bg-base-100 p-4 shadow-sm"><div class="text-xs font-semibold uppercase tracking-wide text-accent">内容增强</div><div class="mt-2 text-sm font-medium">支持标题、副标题、描述和进度点</div><p class="mt-2 text-sm opacity-70">适合把基础只能写一行文本的步骤条，扩展成更完整的流程说明区。</p></div></div><h2>基础布局</h2><p>这组示例使用 Rue 基础示例，用来展示最基础的横向、纵向和响应式排列方式。</p><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><h2>视觉定制</h2><p>这组示例展示当前 Rue 的静态能力，包括自定义 icon、data-content、语义色和滚动容器。</p><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--><!--rue:opaque-hole:5--><!--rue:opaque-hole:6--><h2>语义 API</h2><p>下面这些示例展示的是这些的语义层能力，目标是让 Rue Steps 在不丢失当前风格的前提下更接近常见业务组件的使用体验。</p><!--rue:opaque-hole:7--><!--rue:opaque-hole:8--><!--rue:opaque-hole:9--><!--rue:opaque-hole:10--><h2>API</h2><p><code>Steps</code> 负责布局、状态推导与点击切换；<code>Steps.Step</code> 和 <code>StepItem</code> 共享同一组单步属性。</p><h3>Steps</h3><!--rue:opaque-hole:11--><h3>Steps.Step / StepItem</h3><!--rue:opaque-hole:12--></div>`),ie=e=>{let r=u(e.rows);return E(n(Object.assign(e=>{let i=Q().content.cloneNode(!0).firstChild,a=i.childNodes[0].childNodes[1].childNodes[0],o=a.parentNode,s=[];return k(()=>{let e=r.get()||[];s=t(o,a,s,e,(e,t)=>e.prop,(e,t)=>{let r=u(e),i=u(t);return c((e,t,i)=>A(e,i,()=>n(Object.assign(e=>{let t=v(`tr`,e),n=v(`td`,t);g(t,n);let i=v(`code`,n);g(n,i);let a=_(``);g(i,a),h(a,()=>r.get().prop);let o=v(`td`,t);g(t,o);let s=_(``);g(o,s),h(s,()=>r.get().description);let c=v(`td`,t);g(t,c);let l=v(`code`,c);g(c,l);let u=_(``);g(l,u),h(u,()=>r.get().type);let d=v(`td`,t);g(t,d);let f=v(`code`,d);g(d,f);let p=_(``);return g(f,p),h(p,()=>r.get().defaultValue),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(n,a)=>{e=n,t=a,r.set(n),i.set(a)})})}),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0})),e=>M(()=>{r.set(e.rows)}),()=>e)},ae=()=>E(y(()=>{let e=w(),t=D(`svg`,e);d(e,t),T(t,`xmlns`,`http://www.w3.org/2000/svg`),T(t,`viewBox`,`0 0 24 24`),T(t,`fill`,`none`),T(t,`stroke`,`currentColor`),T(t,`strokeWidth`,`2`),o(t,`size-[1.05em]`);let n=D(`path`,t);d(t,n),T(n,`strokeLinecap`,`round`),T(n,`strokeLinejoin`,`round`),T(n,`d`,`M6 20a6 6 0 0 1 12 0`);let r=D(`circle`,t);return d(t,r),T(r,`cx`,`12`),T(r,`cy`,`9`),T(r,`r`,`4`),e},!0),e=>M(()=>{})),oe=()=>E(y(()=>{let e=w(),t=D(`svg`,e);d(e,t),T(t,`xmlns`,`http://www.w3.org/2000/svg`),T(t,`viewBox`,`0 0 24 24`),T(t,`fill`,`none`),T(t,`stroke`,`currentColor`),T(t,`strokeWidth`,`2`),o(t,`size-[1.05em]`);let n=D(`path`,t);d(t,n),T(n,`strokeLinecap`,`round`),T(n,`strokeLinejoin`,`round`),T(n,`d`,`m12 3 1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3Z`);let r=D(`path`,t);return d(t,r),T(r,`strokeLinecap`,`round`),T(r,`strokeLinejoin`,`round`),T(r,`d`,`M5 18h.01M19 18h.01M12 21h.01`),e},!0),e=>M(()=>{})),se=()=>E(y(()=>{let e=w(),t=D(`svg`,e);d(e,t),T(t,`xmlns`,`http://www.w3.org/2000/svg`),T(t,`viewBox`,`0 0 24 24`),T(t,`fill`,`none`),T(t,`stroke`,`currentColor`),T(t,`strokeWidth`,`2`),o(t,`size-[1.05em]`);let n=D(`rect`,t);d(t,n),T(n,`x`,`3`),T(n,`y`,`5`),T(n,`width`,`18`),T(n,`height`,`14`),T(n,`rx`,`2`);let r=D(`path`,t);return d(t,r),T(r,`strokeLinecap`,`round`),T(r,`strokeLinejoin`,`round`),T(r,`d`,`M3 10h18`),e},!0),e=>M(()=>{})),ce=()=>E(y(()=>{let e=w(),t=D(`svg`,e);d(e,t),T(t,`xmlns`,`http://www.w3.org/2000/svg`),T(t,`viewBox`,`0 0 24 24`),T(t,`fill`,`none`),T(t,`stroke`,`currentColor`),T(t,`strokeWidth`,`2`),o(t,`size-[1.05em]`);let n=D(`circle`,t);d(t,n),T(n,`cx`,`12`),T(n,`cy`,`12`),T(n,`r`,`9`);let r=D(`path`,t);d(t,r),T(r,`strokeLinecap`,`round`),T(r,`strokeLinejoin`,`round`),T(r,`d`,`M8 14s1.5 2 4 2 4-2 4-2`);let i=D(`path`,t);return d(t,i),T(i,`strokeLinecap`,`round`),T(i,`strokeLinejoin`,`round`),T(i,`d`,`M9 10h.01M15 10h.01`),e},!0),e=>M(()=>{})),le=()=>E(y(()=>{let e=w(),t=$().content.cloneNode(!0),n=t.firstChild,r=n.childNodes[0].childNodes[1].childNodes[0],i=r.parentNode,a=n.childNodes[1].childNodes[1].childNodes[0],o=a.parentNode;return e.appendChild(t),k(()=>{let e=m(X.Step,()=>({color:`primary`,children:`需求确认`})),t=m(X.Step,()=>({color:`primary`,children:`设计评审与资源排期`})),n=m(X.Step,()=>({color:`primary`,children:`前后端联调验收`})),a=m(X.Step,()=>({color:`secondary`,children:`灰度发布到内部环境`})),o=m(X.Step,()=>({color:`secondary`,children:`邀请试点客户体验`})),s=m(X.Step,()=>({color:`accent`,children:`收集反馈并修复阻塞问题`})),c=m(X.Step,()=>({color:`accent`,children:`准备正式发布说明`})),l=m(X.Step,()=>({color:`warning`,children:`上线窗口审批`})),u=m(X.Step,()=>({color:`warning`,children:`生产环境发布`})),d=m(X.Step,()=>({color:`success`,children:`发布后巡检`})),p=m(X.Step,()=>({color:`neutral`,children:`归档复盘`})),h=m(X,()=>({className:`min-w-[1120px]`,children:[e,t,n,a,o,s,c,l,u,d,p]}));x(()=>f(h,i,r))}),k(()=>{let e=m(X.Step,()=>({color:`neutral`,children:`Start`})),t=m(X.Step,()=>({color:`secondary`,children:`02`})),n=m(X.Step,()=>({color:`secondary`,children:`03`})),r=m(X.Step,()=>({color:`secondary`,children:`04`})),i=m(X.Step,()=>({children:`05`})),s=m(X.Step,()=>({color:`accent`,children:`06`})),c=m(X.Step,()=>({color:`accent`,children:`07`})),l=m(X.Step,()=>({children:`08`})),u=m(X.Step,()=>({color:`info`,children:`09`})),d=m(X.Step,()=>({color:`info`,children:`10`})),p=m(X.Step,()=>({color:`error`,children:`11`})),h=m(X.Step,()=>({color:`warning`,children:`12`})),g=m(X.Step,()=>({color:`neutral`,children:`End`})),_=m(X,()=>({className:`min-w-[960px]`,children:[e,t,n,r,i,s,c,l,u,d,p,h,g]}));x(()=>f(_,o,a))}),e},!0),e=>M(()=>{})),ue=()=>{let t=e(0);return s(()=>E(n(Object.assign(e=>{let n=ne().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[0],a=r.parentNode,o=n.childNodes[0].childNodes[1].childNodes[1].childNodes[0],s=o.parentNode,c=C(a);i(c,X,()=>({current:t.value,onChange:e=>t.value=e,items:[{title:`Draft`,description:`Prepare the release scope and changelog.`,clickable:!0},{title:`Review`,description:`QA and product approve the rollout plan.`,clickable:!0},{title:`Deploy`,description:`Promote the release to production.`,clickable:!0}]})),a.insertBefore(c,r);let l=_(``);return s.insertBefore(l,o),s.removeChild(o),h(l,()=>t.value),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})),e=>M(()=>{})))},de=[{prop:`direction / orientation`,description:`设置整体朝向；支持使用 Rue 基础的 direction 写法，也支持更通用的 orientation 别名。`,type:`'horizontal' | 'vertical'`,defaultValue:`-`},{prop:`items`,description:`数据驱动模式，适合与 current、status、onChange 一起使用。`,type:`StepItem[]`,defaultValue:`-`},{prop:`current`,description:`当前进行中的步骤索引；前面的步骤自动推导为完成态，后面的步骤自动推导为等待态。`,type:`number`,defaultValue:`-`},{prop:`status`,description:`当前步骤的全局状态覆盖，仅作用于 current 命中的步骤。`,type:`'wait' | 'process' | 'finish' | 'error'`,defaultValue:`'process'`},{prop:`progressDot`,description:`切换为进度点模式，也支持自定义 dot 渲染函数。`,type:`boolean | (dot, info) => any`,defaultValue:`false`},{prop:`onChange`,description:`搭配 items 使用时启用点击切换，回传目标步骤索引。`,type:`(current: number) => void`,defaultValue:`-`}],fe=[{prop:`color`,description:`直接指定 Rue 语义色；未指定时会根据 status 自动映射。`,type:`'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'`,defaultValue:`按 status 推导`},{prop:`title`,description:`步骤主标题；在 children 写法中可与 description、subTitle、icon 组合为语义化内容区。`,type:`any`,defaultValue:`-`},{prop:`description / content`,description:`标题下方的补充说明文字；content 优先级高于 description。`,type:`any`,defaultValue:`-`},{prop:`subTitle`,description:`标题旁边的次级信息，适合展示倒计时、状态文案等。`,type:`any`,defaultValue:`-`},{prop:`icon`,description:`自定义步骤图标；支持基础的 <Steps.Icon /> 插槽写法。`,type:`any`,defaultValue:`-`},{prop:`status`,description:`单步状态，可覆盖根组件根据 current 推导的结果。`,type:`'wait' | 'process' | 'finish' | 'error'`,defaultValue:`-`},{prop:`dataContent / data-content`,description:`直接控制 daisyUI step 圆点中的字符，适合问号、勾号或自定义符号。`,type:`string`,defaultValue:`-`},{prop:`clickable / disabled`,description:`控制单步是否可交互，以及是否禁用点击切换。`,type:`boolean`,defaultValue:`false`}],pe=()=>{let t={horizontal:e(`preview`),vertical:e(`preview`),responsive:e(`preview`),icons:e(`preview`),dataContent:e(`preview`),colors:e(`preview`),scrollable:e(`preview`),richStep:e(`preview`),items:e(`preview`),clickable:e(`preview`),progressDot:e(`preview`)};return s(()=>E(r(N,()=>({children:(e,a,s)=>A(e,s,()=>n(Object.assign(e=>{let a=w(),s=re().content.cloneNode(!0),c=s.firstChild,l=c.childNodes[5],u=l.parentNode,d=c.childNodes[6],p=d.parentNode,h=c.childNodes[7],g=h.parentNode,_=c.childNodes[10],v=_.parentNode,b=c.childNodes[11],S=b.parentNode,E=c.childNodes[12],D=E.parentNode,O=c.childNodes[13],A=O.parentNode,j=c.childNodes[16],M=j.parentNode,N=c.childNodes[17],F=N.parentNode,I=c.childNodes[18],L=I.parentNode,R=c.childNodes[19],z=R.parentNode,B=c.childNodes[23],V=B.parentNode,H=c.childNodes[25],U=H.parentNode;a.appendChild(s);let W=C(u);i(W,P,()=>({title:`Horizontal`,tab:t.horizontal,preview:y(()=>{let e=w(),t=Z().content.cloneNode(!0),n=t.firstChild.childNodes[0].childNodes[0],r=n.parentNode;return e.appendChild(t),k(()=>{let e=m(X.Step,()=>({color:`primary`,children:`Register`})),t=m(X.Step,()=>({color:`primary`,children:`Choose plan`})),i=m(X.Step,()=>({children:`Purchase`})),a=m(X.Step,()=>({children:`Receive Product`})),o=m(X,()=>({"data-testid":`steps-horizontal`,children:[e,t,i,a]}));x(()=>f(o,r,n))}),e},!0),code:`<Steps>
  <Steps.Step color="primary">Register</Steps.Step>
  <Steps.Step color="primary">Choose plan</Steps.Step>
  <Steps.Step>Purchase</Steps.Step>
  <Steps.Step>Receive Product</Steps.Step>
</Steps>`})),u.insertBefore(W,l);let G=C(p);i(G,P,()=>({title:`Vertical`,tab:t.vertical,preview:y(()=>{let e=w(),t=Z().content.cloneNode(!0),n=t.firstChild.childNodes[0].childNodes[0],r=n.parentNode;return e.appendChild(t),k(()=>{let e=m(X.Step,()=>({color:`primary`,children:`Register`})),t=m(X.Step,()=>({color:`primary`,children:`Choose plan`})),i=m(X.Step,()=>({children:`Purchase`})),a=m(X.Step,()=>({children:`Receive Product`})),o=m(X,()=>({direction:`vertical`,children:[e,t,i,a]}));x(()=>f(o,r,n))}),e},!0),code:`<Steps direction="vertical">
  <Steps.Step color="primary">Register</Steps.Step>
  <Steps.Step color="primary">Choose plan</Steps.Step>
  <Steps.Step>Purchase</Steps.Step>
  <Steps.Step>Receive Product</Steps.Step>
</Steps>`})),p.insertBefore(G,d);let K=C(g);i(K,P,()=>({title:`Responsive`,tab:t.responsive,preview:y(()=>{let e=w(),t=Z().content.cloneNode(!0),n=t.firstChild.childNodes[0].childNodes[0],r=n.parentNode;return e.appendChild(t),k(()=>{let e=m(X.Step,()=>({color:`primary`,children:`Register`})),t=m(X.Step,()=>({color:`primary`,children:`Choose plan`})),i=m(X.Step,()=>({children:`Purchase`})),a=m(X.Step,()=>({children:`Receive Product`})),o=m(X,()=>({direction:`vertical`,className:`lg:steps-horizontal`,children:[e,t,i,a]}));x(()=>f(o,r,n))}),e},!0),code:`<Steps direction="vertical" className="lg:steps-horizontal">
  <Steps.Step color="primary">Register</Steps.Step>
  <Steps.Step color="primary">Choose plan</Steps.Step>
  <Steps.Step>Purchase</Steps.Step>
  <Steps.Step>Receive Product</Steps.Step>
</Steps>`})),g.insertBefore(K,h);let q=C(v);i(q,P,()=>({title:`With custom content in step-icon`,tab:t.icons,preview:y(()=>{let e=w(),t=Z().content.cloneNode(!0),n=t.firstChild.childNodes[0].childNodes[0],r=n.parentNode;return e.appendChild(t),k(()=>{let e=m(X.Icon,()=>({children:`1`})),t=m(X.Step,()=>({color:`neutral`,children:[e,`Step 1`]})),i=m(X.Icon,()=>({children:`2`})),a=m(X.Step,()=>({color:`neutral`,children:[i,`Step 2`]})),o=m(X.Icon,()=>({children:`3`})),s=m(X.Step,()=>({children:[o,`Step 3`]})),c=m(X,()=>({"data-testid":`steps-icons`,children:[t,a,s]}));x(()=>f(c,r,n))}),e},!0),code:`<Steps>
  <Steps.Step color="neutral">
    <Steps.Icon>1</Steps.Icon>
    Step 1
  </Steps.Step>
  <Steps.Step color="neutral">
    <Steps.Icon>2</Steps.Icon>
    Step 2
  </Steps.Step>
  <Steps.Step>
    <Steps.Icon>3</Steps.Icon>
    Step 3
  </Steps.Step>
</Steps>`})),v.insertBefore(q,_);let J=C(S);i(J,P,()=>({title:`With data-content`,tab:t.dataContent,preview:y(()=>{let e=w(),t=Z().content.cloneNode(!0),n=t.firstChild.childNodes[0].childNodes[0],r=n.parentNode;return e.appendChild(t),k(()=>{let e=m(X.Step,()=>({color:`neutral`,"data-content":`?`,children:`Step 1`})),t=m(X.Step,()=>({color:`neutral`,"data-content":`!`,children:`Step 2`})),i=m(X.Step,()=>({color:`neutral`,"data-content":`✓`,children:`Step 3`})),a=m(X.Step,()=>({color:`neutral`,"data-content":`✕`,children:`Step 4`})),o=m(X.Step,()=>({color:`neutral`,"data-content":`★`,children:`Step 5`})),s=m(X,()=>({children:[e,t,i,a,o]}));x(()=>f(s,r,n))}),e},!0),code:`<Steps>
  <Steps.Step color="neutral" data-content="?">Step 1</Steps.Step>
  <Steps.Step color="neutral" data-content="!">Step 2</Steps.Step>
  <Steps.Step color="neutral" data-content="✓">Step 3</Steps.Step>
  <Steps.Step color="neutral" data-content="✕">Step 4</Steps.Step>
  <Steps.Step color="neutral" data-content="★">Step 5</Steps.Step>
</Steps>`})),S.insertBefore(J,b);let Y=C(D);i(Y,P,()=>({title:`Custom colors`,tab:t.colors,preview:y(()=>{let e=w(),t=Z().content.cloneNode(!0),n=t.firstChild.childNodes[0].childNodes[0],r=n.parentNode;return e.appendChild(t),k(()=>{let e=m(X.Step,()=>({color:`info`,children:`Fly to moon`})),t=m(X.Step,()=>({color:`info`,children:`Shrink the moon`})),i=m(X.Step,()=>({color:`info`,children:`Grab the moon`})),a=m(X.Step,()=>({color:`error`,"data-content":`?`,children:`Sit on toilet`})),o=m(X,()=>({children:[e,t,i,a]}));x(()=>f(o,r,n))}),e},!0),code:`<Steps>
  <Steps.Step color="info">Fly to moon</Steps.Step>
  <Steps.Step color="info">Shrink the moon</Steps.Step>
  <Steps.Step color="info">Grab the moon</Steps.Step>
  <Steps.Step color="error" data-content="?">Sit on toilet</Steps.Step>
</Steps>`})),D.insertBefore(Y,E);let Q=C(A);i(Q,P,()=>({title:`With scrollable wrapper`,tab:t.scrollable,preview:n(Object.assign(e=>{let t=Z().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0],r=n.parentNode,a=C(r);return i(a,le,()=>({})),r.insertBefore(a,n),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),code:`<div className="grid gap-5">
  <div className="space-y-2">
    <div className="text-sm font-medium">长标签交付流程</div>
    <div className="max-w-xl overflow-x-auto pb-2">
      <Steps className="min-w-[1120px]">
        <Steps.Step color="primary">需求确认</Steps.Step>
        <Steps.Step color="primary">设计评审与资源排期</Steps.Step>
        <Steps.Step color="primary">前后端联调验收</Steps.Step>
        <Steps.Step color="secondary">灰度发布到内部环境</Steps.Step>
        <Steps.Step color="secondary">邀请试点客户体验</Steps.Step>
        <Steps.Step color="accent">收集反馈并修复阻塞问题</Steps.Step>
        <Steps.Step color="accent">准备正式发布说明</Steps.Step>
        <Steps.Step color="warning">上线窗口审批</Steps.Step>
        <Steps.Step color="warning">生产环境发布</Steps.Step>
        <Steps.Step color="success">发布后巡检</Steps.Step>
        <Steps.Step color="neutral">归档复盘</Steps.Step>
      </Steps>
    </div>
  </div>

  <div className="space-y-2">
    <div className="text-sm font-medium">编号里程碑</div>
    <div className="max-w-md overflow-x-auto pb-2">
      <Steps className="min-w-[960px]">
        <Steps.Step color="neutral">Start</Steps.Step>
        <Steps.Step color="secondary">02</Steps.Step>
        <Steps.Step color="secondary">03</Steps.Step>
        <Steps.Step color="secondary">04</Steps.Step>
        <Steps.Step>05</Steps.Step>
        <Steps.Step color="accent">06</Steps.Step>
        <Steps.Step color="accent">07</Steps.Step>
        <Steps.Step>08</Steps.Step>
        <Steps.Step color="info">09</Steps.Step>
        <Steps.Step color="info">10</Steps.Step>
        <Steps.Step color="error">11</Steps.Step>
        <Steps.Step color="warning">12</Steps.Step>
        <Steps.Step color="neutral">End</Steps.Step>
      </Steps>
    </div>
  </div>
</div>`})),A.insertBefore(Q,O);let $=C(M);i($,P,()=>({title:`Rich step content`,tab:t.richStep,preview:y(()=>{let e=w(),t=Z().content.cloneNode(!0),n=t.firstChild.childNodes[0].childNodes[0],i=n.parentNode;return e.appendChild(t),k(()=>{let e=m(X.Step,()=>({status:`finish`,title:`Connect repository`,description:`Link your GitHub repository and import the default build settings.`,icon:r(ae,()=>({}))})),t=m(X.Step,()=>({status:`process`,title:`Configure policies`,subTitle:`~ 2 mins`,description:`Set preview branches, branch protection, and deployment rules.`,icon:r(oe,()=>({}))})),a=m(X.Step,()=>({status:`wait`,title:`Ship to production`,description:`Merge the release branch after the final smoke test passes.`})),o=m(X,()=>({direction:`vertical`,children:[e,t,a]}));x(()=>f(o,i,n))}),e},!0),code:`<Steps direction="vertical">
  <Steps.Step
    status="finish"
    title="Connect repository"
    description="Link your GitHub repository and import the default build settings."
    icon={<UserIcon />}
  />
  <Steps.Step
    status="process"
    title="Configure policies"
    subTitle="~ 2 mins"
    description="Set preview branches, branch protection, and deployment rules."
    icon={<SparkIcon />}
  />
  <Steps.Step
    status="wait"
    title="Ship to production"
    description="Merge the release branch after the final smoke test passes."
  />
</Steps>`})),M.insertBefore($,j);let ne=C(F);i(ne,P,()=>({title:`Items + current + status`,tab:t.items,preview:n(Object.assign(e=>{let t=te().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0],a=n.parentNode,o=C(a);return i(o,X,()=>({current:1,status:`error`,items:[{title:`Account`,description:`Create workspace and invite collaborators.`,icon:r(ae,()=>({}))},{title:`Verification`,subTitle:`Left 00:00:08`,description:`Waiting for security review and DNS validation.`,icon:r(oe,()=>({}))},{title:`Payment`,description:`Unlock the production environment after confirmation.`,icon:r(se,()=>({}))},{title:`Done`,description:`Your first deployment is ready.`,icon:r(ce,()=>({}))}]})),a.insertBefore(o,n),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),code:`<Steps
  current={1}
  status="error"
  items={[
    {
      title: 'Account',
      description: 'Create workspace and invite collaborators.',
      icon: <UserIcon />,
    },
    {
      title: 'Verification',
      subTitle: 'Left 00:00:08',
      description: 'Waiting for security review and DNS validation.',
      icon: <SparkIcon />,
    },
    {
      title: 'Payment',
      description: 'Unlock the production environment after confirmation.',
      icon: <CardIcon />,
    },
    {
      title: 'Done',
      description: 'Your first deployment is ready.',
      icon: <SmileIcon />,
    },
  ]}
/>`})),F.insertBefore(ne,N);let pe=C(L);i(pe,P,()=>({title:`Clickable items`,tab:t.clickable,preview:r(ue,()=>({})),code:`const ClickableStepsDemo: FC = () => {
  const current = ref(0)

  return (
    <>
      <Steps
        current={current.value}
        onChange={index => (current.value = index)}
        items={[
          {
            title: 'Draft',
            description: 'Prepare the release scope and changelog.',
            clickable: true,
          },
          {
            title: 'Review',
            description: 'QA and product approve the rollout plan.',
            clickable: true,
          },
          {
            title: 'Deploy',
            description: 'Promote the release to production.',
            clickable: true,
          },
        ]}
      />
      <div className="rounded-box border border-dashed border-base-300 bg-base-200/50 px-4 py-3 text-sm">
        点击步骤可切换，当前选中步骤：<code>{current.value}</code>
      </div>
    </>
  )
}`})),L.insertBefore(pe,I);let me=C(z);i(me,P,()=>({title:`Progress dot`,tab:t.progressDot,preview:n(Object.assign(e=>{let t=Z().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0],r=n.parentNode,a=C(r);return i(a,X,()=>({progressDot:(e,t)=>y(n=>{let r=ee().content.cloneNode(!0).firstChild,i=r,a=r.childNodes[0],s=a.parentNode;return o(i,`tooltip tooltip-bottom`),k(()=>{T(i,`data-tip`,String(`${t.title}`))}),k(()=>{let t=e;x(()=>f(t,s,a))}),r}),items:[{title:`Collect requirements`,description:`Align scope with design and engineering.`},{title:`BuildDemo`,description:`Create a stakeholder-ready flow.`},{title:`Launch beta`,description:`Open access to pilot users.`}]})),r.insertBefore(a,n),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),code:`<Steps
  progressDot={(dot, info) => (
    <span className="tooltip tooltip-bottom" data-tip={\`\${info.title}\`}>
      {dot}
    </span>
  )}
  items={[
    {
      title: 'Collect requirements',
      description: 'Align scope with design and engineering.',
    },
    {
      title: 'BuildDemo',
      description: 'Create a stakeholder-ready flow.',
    },
    {
      title: 'Launch beta',
      description: 'Open access to pilot users.',
    },
  ]}
/>`})),z.insertBefore(me,R);let he=C(V);i(he,ie,()=>({rows:de})),V.insertBefore(he,B);let ge=C(U);return i(ge,ie,()=>({rows:fe})),U.insertBefore(ge,H),{__rue_compiled_host:a,__rue_compiled_roots:[a]}},{__rue_compiled_explicit_roots:!0})))})),e=>M(()=>{})))};export{pe as default};