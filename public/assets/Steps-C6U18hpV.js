import{At as e,Dn as t,E as n,Mt as r,P as i,Q as a,Vt as o,_n as s,_t as c,at as l,b as u,bn as d,ct as f,dt as p,et as m,gt as h,hn as g,kn as _,on as v,qt as y,rt as b,st as x,tn as S,ut as C,v as w,vn as T,vt as E,w as D,wn as O,x as k,xn as A,xt as j,yt as M}from"./rue-runtime-HIMg8Lz8.js";import{r as N}from"./SidebarPlaygroundDesign-Cj7sFoQ4.js";import{t as P}from"./PreviewBlock-Dc0KnPUP.js";var F=T(`<span></span>`),I=T(`<span aria-hidden="true"><!--rue:text-hole:0--></span>`),L=T(`<span class="inline-flex min-w-0 flex-col gap-1 py-1 text-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></span>`),R=(...e)=>e.filter(Boolean).join(` `),z=e=>Array.isArray(e)?e.flatMap(e=>z(e)):e==null||typeof e==`boolean`?[]:[e],B=(e,t)=>t?`${e} ${t}`:e,V=(e,t)=>t??e,H=(e,t)=>{if(t)return t;if(e===`error`)return`error`;if(e===`finish`||e===`process`)return`primary`},U=(e,t)=>{if(!t){if(e===`finish`)return`✓`;if(e===`error`)return`✕`}},W=e=>{typeof e.preventDefault==`function`&&e.preventDefault(),typeof e.stopPropagation==`function`&&e.stopPropagation()},G=e=>{let t=l(e.status),n=t.get()===`wait`?`inline-block size-2.5 rounded-full border border-base-300 bg-base-100`:`inline-block size-2.5 rounded-full bg-current`;return f(o(Object.assign(e=>{let t=F().content.cloneNode(!0).firstChild,r=t,i;return O(()=>{let e=n,t=e==null?``:String(e);Object.is(i,t)||(i=t,r.className=t)}),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),e=>m(()=>{t.set(e.status)}),()=>e)},K=(e,t)=>{if(!e)return;let n=b(G,()=>({status:t.status}));return typeof e==`function`?e(n,t):n},q=(e,t,n,r)=>e.status?e.status:typeof n==`number`?t<n?`finish`:t===n?r??`process`:`wait`:`wait`,J=v((e,t,n)=>{let{nextChildren:a,__rue_phase2_nextChildren:o}=d(`useSetup:0:0`,()=>{let e=i(()=>z(n));return e.get(),{nextChildren:e,__rue_phase2_nextChildren:e}});return r(w,()=>({is:e,...t,children:a.get()}))}),Y=({as:t=`li`,color:n,className:r,title:i,description:o,content:s,subTitle:l,icon:u,status:d,disabled:f,clickable:m,dataContent:g,children:v,index:y,onClick:b,onKeyDown:x,...S})=>{let w=t,T=s??o,D=i??v,k=m??!!b,A=H(d,n),N=g??S[`data-content`]??U(d,u!=null),P=i!=null||T!=null||l!=null||u!=null,F=S[`aria-current`]??(d===`process`?`step`:void 0),R=f?`true`:void 0,z=`step`;A&&(z+=` step-${A}`),k&&!f&&(z+=` cursor-pointer`),f&&(z+=` opacity-50`),k&&f&&(z+=` cursor-not-allowed`);let V=e=>{if(f){W(e);return}b&&b(e,y)},G=k?S.role??`button`:S.role,K=k?S.tabIndex??(f?-1:0):S.tabIndex,q=k?e=>{if(x&&x(e),e.defaultPrevented||f){f&&W(e);return}(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),V(e))}:S.onKeyDown,Y=k?V:S.onClick,X=P?e(()=>{let t=c();p(t,M(` `));let n=h(`rue:slot:anchor`);p(t,n),O(()=>{let r=u==null?``:e(()=>{let e=c(),t=I().content.cloneNode(!0),n=t.firstChild,r=n,i=n.childNodes[0],o=i.parentNode;return e.appendChild(t),O(()=>{a(r,B(`step-icon`,T==null?void 0:`mt-0.5`))}),j(r,`aria-hidden`,`true`),O(()=>{let e=u;_(()=>C(e,o,i))}),e},!0);_(()=>C(r,t,n))}),p(t,M(` `));let r=L().content.cloneNode(!0),i=r.firstChild,o=i.childNodes[0],s=o.parentNode,d=i.childNodes[1],f=d.parentNode;return t.appendChild(r),O(()=>{let t=D!=null||l!=null?e(()=>{let t=c(),n=E(`span`,t);p(t,n),a(n,`flex flex-wrap items-center gap-2 leading-tight`);let r=h(`rue:slot:anchor`);p(n,r),O(()=>{let t=D==null?``:e(()=>{let e=c(),t=E(`span`,e);p(e,t),a(t,`font-medium`);let n=h(`rue:slot:anchor`);return p(t,n),O(()=>{let e=D;_(()=>C(e,t,n))}),e},!0);_(()=>C(t,n,r))});let i=h(`rue:slot:anchor`);return p(n,i),O(()=>{let t=l==null?``:e(()=>{let e=c(),t=E(`span`,e);p(e,t),a(t,`text-xs opacity-60`);let n=h(`rue:slot:anchor`);return p(t,n),O(()=>{let e=l;_(()=>C(e,t,n))}),e},!0);_(()=>C(t,n,i))}),t},!0):``;_(()=>C(t,s,o))}),O(()=>{let t=T==null?``:e(()=>{let e=c(),t=E(`span`,e);p(e,t),a(t,`text-xs leading-snug opacity-70`);let n=h(`rue:slot:anchor`);return p(t,n),O(()=>{let e=T;_(()=>C(e,t,n))}),e},!0);_(()=>C(t,f,d))}),p(t,M(` `)),t},!0):v;return J(w,{...S,className:B(z,r),...N==null?{}:{"data-content":N},role:G,tabIndex:K,onClick:Y,onKeyDown:q,"aria-current":F,"aria-disabled":R},X)},X=Object.assign(({as:e=`ul`,direction:t,orientation:n,className:a,children:o,items:s,current:c,status:l,progressDot:u,onChange:d,...f})=>{let p=e,m=V(t,n),h=s&&s.length>0?s.map(v((e,t)=>{v();let n=i(()=>q(e,t,c,l));n.get();let a=n,o=i(()=>e.icon??K(u,{index:t,status:a.get(),title:e.title,description:e.description,content:e.content}));o.get();let s=i(()=>e.clickable??(!!d||!!e.onClick));return s.get(),r(Y,()=>({key:e.key??t,...e,index:t,status:n.get(),color:H(n.get(),e.color),icon:o.get(),clickable:s.get(),"aria-current":t===c?e[`aria-current`]??`step`:e[`aria-current`],onClick:(t,n)=>{e.disabled||(e.onClick&&typeof n==`number`&&e.onClick(t,n),d&&typeof n==`number`&&n!==c&&d(n))}}))})):o,g=`steps`;return m&&(g+=` steps-${m}`),J(p,{...f,className:R(g,a)},h)},{Step:Y,Icon:({as:e=`span`,className:t,children:n,...r})=>J(e,{...r,className:B(`step-icon`,t)},n)}),ee=T(`<span class="tooltip tooltip-bottom"><!--rue:text-hole:0--></span>`),Z=T(`<div class="card bg-base-100 shadow-sm"><div class="card-body"><!--rue:opaque-hole:0--></div></div>`),te=T(`<div class="card bg-base-100 shadow-sm"><div class="card-body gap-4"><!--rue:opaque-hole:0--><div class="text-sm opacity-70">当前索引为 <code>1</code>，所以第 0 步自动完成，第 1 步继承根节点的 <code>error</code> 状态。</div></div></div>`),Q=T(`<div class="not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100"><table class="table table-zebra"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><!--rue:text-hole:0--></tbody></table></div>`),$=T(`<div class="grid gap-5"><div class="space-y-2"><div class="text-sm font-medium">长标签交付流程</div><div class="max-w-xl overflow-x-auto pb-2" data-testid="steps-scroll-wrapper"><!--rue:opaque-hole:0--></div></div><div class="space-y-2"><div class="text-sm font-medium">编号里程碑</div><div class="max-w-md overflow-x-auto pb-2"><!--rue:opaque-hole:1--></div></div></div>`),ne=T(`<div class="card bg-base-100 shadow-sm"><div class="card-body gap-4"><!--rue:opaque-hole:0--><div class="rounded-box border border-dashed border-base-300 bg-base-200/50 px-4 py-3 text-sm">点击步骤可切换，当前选中步骤：<code><!--rue:text-hole:1--></code></div></div></div>`),re=T(`<div class="max-w-none prose prose-sm md:prose-base"><h1>Steps 步骤条</h1><p class="text-sm mt-3 mb-3">Rue Steps 展示 daisyUI 的轻量视觉风格，同时补充更贴近成熟业务组件的数据驱动 API： 支持 <code>items</code>、<code>current</code>、<code>status</code>、<code>progressDot</code>、 <code>onChange</code>，以及单步级别的 <code>title</code>、<code>description</code>、 <code>subTitle</code> 和 <code>icon</code>。</p><div class="not-prose mt-6 grid gap-4 md:grid-cols-3"><div class="rounded-box border border-base-300 bg-base-100 p-4 shadow-sm"><div class="text-xs font-semibold uppercase tracking-wide text-primary">双模式</div><div class="mt-2 text-sm font-medium">children / items 都可用</div><p class="mt-2 text-sm opacity-70">基础的 <code>Steps.Step</code> 和 <code>Steps.Icon</code> 不变，新场景可直接传入数据数组。</p></div><div class="rounded-box border border-base-300 bg-base-100 p-4 shadow-sm"><div class="text-xs font-semibold uppercase tracking-wide text-secondary">状态推导</div><div class="mt-2 text-sm font-medium">current 自动推导完成/进行中/等待</div><p class="mt-2 text-sm opacity-70">不必手动给每一步都写颜色，只有例外项再单独覆盖即可。</p></div><div class="rounded-box border border-base-300 bg-base-100 p-4 shadow-sm"><div class="text-xs font-semibold uppercase tracking-wide text-accent">内容增强</div><div class="mt-2 text-sm font-medium">支持标题、副标题、描述和进度点</div><p class="mt-2 text-sm opacity-70">适合把基础只能写一行文本的步骤条，扩展成更完整的流程说明区。</p></div></div><h2>基础布局</h2><p>这组示例使用 Rue 基础示例，用来展示最基础的横向、纵向和响应式排列方式。</p><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><h2>视觉定制</h2><p>这组示例展示当前 Rue 的静态能力，包括自定义 icon、data-content、语义色和滚动容器。</p><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--><!--rue:opaque-hole:5--><!--rue:opaque-hole:6--><h2>语义 API</h2><p>下面这些示例展示的是这些的语义层能力，目标是让 Rue Steps 在不丢失当前风格的前提下更接近常见业务组件的使用体验。</p><!--rue:opaque-hole:7--><!--rue:opaque-hole:8--><!--rue:opaque-hole:9--><!--rue:opaque-hole:10--><h2>API</h2><p><code>Steps</code> 负责布局、状态推导与点击切换；<code>Steps.Step</code> 和 <code>StepItem</code> 共享同一组单步属性。</p><h3>Steps</h3><!--rue:opaque-hole:11--><h3>Steps.Step / StepItem</h3><!--rue:opaque-hole:12--></div>`),ie=e=>{let n=l(e.rows);return f(o(Object.assign(e=>{let r=Q().content.cloneNode(!0).firstChild,i=r.childNodes[0].childNodes[1].childNodes[0],a=i.parentNode,o=T(`<tr><td><code><!--rue:text-hole:0--></code></td><td>rue:row-text</td><td><code><!--rue:text-hole:2--></code></td><td><code><!--rue:text-hole:3--></code></td></tr>`),c=[];return O(()=>{let e=n.get()||[];c=D(a,i,c,e,(e,t)=>e.prop,(e,t,n)=>{let r=e,i;return k(e=>{let t=o().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0].childNodes[0],a=n.parentNode,c=t.childNodes[1].childNodes[0];c.data=``,c.parentNode;let l=t.childNodes[2].childNodes[0].childNodes[0],u=l.parentNode,d=t.childNodes[3].childNodes[0].childNodes[0],f=d.parentNode,p=s(``);a.insertBefore(p,n),a.removeChild(n);let m;{let e=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);Object.is(m,e)||(p.textContent=e,m=e)}let h;{let e=r.description==null||typeof r.description==`boolean`?``:String(r.description);Object.is(h,e)||(c.textContent=e,h=e)}let g=s(``);u.insertBefore(g,l),u.removeChild(l);let _;{let e=r.type==null||typeof r.type==`boolean`?``:String(r.type);Object.is(_,e)||(g.textContent=e,_=e)}let v=s(``);f.insertBefore(v,d),f.removeChild(d);let y;{let e=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);Object.is(y,e)||(v.textContent=e,y=e)}return i=()=>{{let e=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);Object.is(m,e)||(p.textContent=e,m=e)}{let e=r.description==null||typeof r.description==`boolean`?``:String(r.description);Object.is(h,e)||(c.textContent=e,h=e)}{let e=r.type==null||typeof r.type==`boolean`?``:String(r.type);Object.is(_,e)||(g.textContent=e,_=e)}{let e=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);Object.is(y,e)||(v.textContent=e,y=e)}},{__rue_compiled_host:t,__rue_compiled_roots:[t]}},(n,a)=>{e=n,t=a,r=n,i()},n)})}),t(()=>u(c)),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})),e=>m(()=>{n.set(e.rows)}),()=>e)},ae=()=>f(e(()=>{let e=c(),t=E(`svg`,e);p(e,t),j(t,`xmlns`,`http://www.w3.org/2000/svg`),j(t,`viewBox`,`0 0 24 24`),j(t,`fill`,`none`),j(t,`stroke`,`currentColor`),j(t,`strokeWidth`,`2`),a(t,`size-[1.05em]`);let n=E(`path`,t);p(t,n),j(n,`strokeLinecap`,`round`),j(n,`strokeLinejoin`,`round`),j(n,`d`,`M6 20a6 6 0 0 1 12 0`);let r=E(`circle`,t);return p(t,r),j(r,`cx`,`12`),j(r,`cy`,`9`),j(r,`r`,`4`),e},!0),e=>m(()=>{})),oe=()=>f(e(()=>{let e=c(),t=E(`svg`,e);p(e,t),j(t,`xmlns`,`http://www.w3.org/2000/svg`),j(t,`viewBox`,`0 0 24 24`),j(t,`fill`,`none`),j(t,`stroke`,`currentColor`),j(t,`strokeWidth`,`2`),a(t,`size-[1.05em]`);let n=E(`path`,t);p(t,n),j(n,`strokeLinecap`,`round`),j(n,`strokeLinejoin`,`round`),j(n,`d`,`m12 3 1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3Z`);let r=E(`path`,t);return p(t,r),j(r,`strokeLinecap`,`round`),j(r,`strokeLinejoin`,`round`),j(r,`d`,`M5 18h.01M19 18h.01M12 21h.01`),e},!0),e=>m(()=>{})),se=()=>f(e(()=>{let e=c(),t=E(`svg`,e);p(e,t),j(t,`xmlns`,`http://www.w3.org/2000/svg`),j(t,`viewBox`,`0 0 24 24`),j(t,`fill`,`none`),j(t,`stroke`,`currentColor`),j(t,`strokeWidth`,`2`),a(t,`size-[1.05em]`);let n=E(`rect`,t);p(t,n),j(n,`x`,`3`),j(n,`y`,`5`),j(n,`width`,`18`),j(n,`height`,`14`),j(n,`rx`,`2`);let r=E(`path`,t);return p(t,r),j(r,`strokeLinecap`,`round`),j(r,`strokeLinejoin`,`round`),j(r,`d`,`M3 10h18`),e},!0),e=>m(()=>{})),ce=()=>f(e(()=>{let e=c(),t=E(`svg`,e);p(e,t),j(t,`xmlns`,`http://www.w3.org/2000/svg`),j(t,`viewBox`,`0 0 24 24`),j(t,`fill`,`none`),j(t,`stroke`,`currentColor`),j(t,`strokeWidth`,`2`),a(t,`size-[1.05em]`);let n=E(`circle`,t);p(t,n),j(n,`cx`,`12`),j(n,`cy`,`12`),j(n,`r`,`9`);let r=E(`path`,t);p(t,r),j(r,`strokeLinecap`,`round`),j(r,`strokeLinejoin`,`round`),j(r,`d`,`M8 14s1.5 2 4 2 4-2 4-2`);let i=E(`path`,t);return p(t,i),j(i,`strokeLinecap`,`round`),j(i,`strokeLinejoin`,`round`),j(i,`d`,`M9 10h.01M15 10h.01`),e},!0),e=>m(()=>{})),le=()=>f(e(()=>{let e=c(),t=$().content.cloneNode(!0),n=t.firstChild,i=n.childNodes[0].childNodes[1].childNodes[0],a=i.parentNode,o=n.childNodes[1].childNodes[1].childNodes[0],s=o.parentNode;return e.appendChild(t),O(()=>{let e=r(X.Step,()=>({color:`primary`,children:`需求确认`})),t=r(X.Step,()=>({color:`primary`,children:`设计评审与资源排期`})),n=r(X.Step,()=>({color:`primary`,children:`前后端联调验收`})),o=r(X.Step,()=>({color:`secondary`,children:`灰度发布到内部环境`})),s=r(X.Step,()=>({color:`secondary`,children:`邀请试点客户体验`})),c=r(X.Step,()=>({color:`accent`,children:`收集反馈并修复阻塞问题`})),l=r(X.Step,()=>({color:`accent`,children:`准备正式发布说明`})),u=r(X.Step,()=>({color:`warning`,children:`上线窗口审批`})),d=r(X.Step,()=>({color:`warning`,children:`生产环境发布`})),f=r(X.Step,()=>({color:`success`,children:`发布后巡检`})),p=r(X.Step,()=>({color:`neutral`,children:`归档复盘`})),m=r(X,()=>({className:`min-w-[1120px]`,children:[e,t,n,o,s,c,l,u,d,f,p]}));_(()=>C(m,a,i))}),O(()=>{let e=r(X.Step,()=>({color:`neutral`,children:`Start`})),t=r(X.Step,()=>({color:`secondary`,children:`02`})),n=r(X.Step,()=>({color:`secondary`,children:`03`})),i=r(X.Step,()=>({color:`secondary`,children:`04`})),a=r(X.Step,()=>({children:`05`})),c=r(X.Step,()=>({color:`accent`,children:`06`})),l=r(X.Step,()=>({color:`accent`,children:`07`})),u=r(X.Step,()=>({children:`08`})),d=r(X.Step,()=>({color:`info`,children:`09`})),f=r(X.Step,()=>({color:`info`,children:`10`})),p=r(X.Step,()=>({color:`error`,children:`11`})),m=r(X.Step,()=>({color:`warning`,children:`12`})),h=r(X.Step,()=>({color:`neutral`,children:`End`})),g=r(X,()=>({className:`min-w-[960px]`,children:[e,t,n,i,a,c,l,u,d,f,p,m,h]}));_(()=>C(g,s,o))}),e},!0),e=>m(()=>{})),ue=()=>{let e=S(0);return y(()=>f(o(Object.assign(t=>{let n=ne().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[0],i=r.parentNode,a=n.childNodes[0].childNodes[1].childNodes[1].childNodes[0],o=a.parentNode,c=g(i);x(c,X,()=>({current:e.value,onChange:t=>e.value=t,items:[{title:`Draft`,description:`Prepare the release scope and changelog.`,clickable:!0},{title:`Review`,description:`QA and product approve the rollout plan.`,clickable:!0},{title:`Deploy`,description:`Promote the release to production.`,clickable:!0}]})),i.insertBefore(c,r);let l=s(``);return o.insertBefore(l,a),o.removeChild(a),A(l,()=>e.value),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})),e=>m(()=>{})))},de=[{prop:`direction / orientation`,description:`设置整体朝向；支持使用 Rue 基础的 direction 写法，也支持更通用的 orientation 别名。`,type:`'horizontal' | 'vertical'`,defaultValue:`-`},{prop:`items`,description:`数据驱动模式，适合与 current、status、onChange 一起使用。`,type:`StepItem[]`,defaultValue:`-`},{prop:`current`,description:`当前进行中的步骤索引；前面的步骤自动推导为完成态，后面的步骤自动推导为等待态。`,type:`number`,defaultValue:`-`},{prop:`status`,description:`当前步骤的全局状态覆盖，仅作用于 current 命中的步骤。`,type:`'wait' | 'process' | 'finish' | 'error'`,defaultValue:`'process'`},{prop:`progressDot`,description:`切换为进度点模式，也支持自定义 dot 渲染函数。`,type:`boolean | (dot, info) => any`,defaultValue:`false`},{prop:`onChange`,description:`搭配 items 使用时启用点击切换，回传目标步骤索引。`,type:`(current: number) => void`,defaultValue:`-`}],fe=[{prop:`color`,description:`直接指定 Rue 语义色；未指定时会根据 status 自动映射。`,type:`'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'`,defaultValue:`按 status 推导`},{prop:`title`,description:`步骤主标题；在 children 写法中可与 description、subTitle、icon 组合为语义化内容区。`,type:`any`,defaultValue:`-`},{prop:`description / content`,description:`标题下方的补充说明文字；content 优先级高于 description。`,type:`any`,defaultValue:`-`},{prop:`subTitle`,description:`标题旁边的次级信息，适合展示倒计时、状态文案等。`,type:`any`,defaultValue:`-`},{prop:`icon`,description:`自定义步骤图标；支持基础的 <Steps.Icon /> 插槽写法。`,type:`any`,defaultValue:`-`},{prop:`status`,description:`单步状态，可覆盖根组件根据 current 推导的结果。`,type:`'wait' | 'process' | 'finish' | 'error'`,defaultValue:`-`},{prop:`dataContent / data-content`,description:`直接控制 daisyUI step 圆点中的字符，适合问号、勾号或自定义符号。`,type:`string`,defaultValue:`-`},{prop:`clickable / disabled`,description:`控制单步是否可交互，以及是否禁用点击切换。`,type:`boolean`,defaultValue:`false`}],pe=()=>{let t={horizontal:S(`preview`),vertical:S(`preview`),responsive:S(`preview`),icons:S(`preview`),dataContent:S(`preview`),colors:S(`preview`),scrollable:S(`preview`),richStep:S(`preview`),items:S(`preview`),clickable:S(`preview`),progressDot:S(`preview`)};return y(()=>f(b(N,()=>({children:(i,s,l)=>n(i,l,()=>o(Object.assign(n=>{let i=c(),s=re().content.cloneNode(!0),l=s.firstChild,u=l.childNodes[5],d=u.parentNode,f=l.childNodes[6],p=f.parentNode,m=l.childNodes[7],h=m.parentNode,v=l.childNodes[10],y=v.parentNode,S=l.childNodes[11],w=S.parentNode,T=l.childNodes[12],E=T.parentNode,D=l.childNodes[13],k=D.parentNode,A=l.childNodes[16],M=A.parentNode,N=l.childNodes[17],F=N.parentNode,I=l.childNodes[18],L=I.parentNode,R=l.childNodes[19],z=R.parentNode,B=l.childNodes[23],V=B.parentNode,H=l.childNodes[25],U=H.parentNode;i.appendChild(s);let W=g(d);x(W,P,()=>({title:`Horizontal`,tab:t.horizontal,preview:e(()=>{let e=c(),t=Z().content.cloneNode(!0),n=t.firstChild.childNodes[0].childNodes[0],i=n.parentNode;return e.appendChild(t),O(()=>{let e=r(X.Step,()=>({color:`primary`,children:`Register`})),t=r(X.Step,()=>({color:`primary`,children:`Choose plan`})),a=r(X.Step,()=>({children:`Purchase`})),o=r(X.Step,()=>({children:`Receive Product`})),s=r(X,()=>({"data-testid":`steps-horizontal`,children:[e,t,a,o]}));_(()=>C(s,i,n))}),e},!0),code:`<Steps>
  <Steps.Step color="primary">Register</Steps.Step>
  <Steps.Step color="primary">Choose plan</Steps.Step>
  <Steps.Step>Purchase</Steps.Step>
  <Steps.Step>Receive Product</Steps.Step>
</Steps>`})),d.insertBefore(W,u);let G=g(p);x(G,P,()=>({title:`Vertical`,tab:t.vertical,preview:e(()=>{let e=c(),t=Z().content.cloneNode(!0),n=t.firstChild.childNodes[0].childNodes[0],i=n.parentNode;return e.appendChild(t),O(()=>{let e=r(X.Step,()=>({color:`primary`,children:`Register`})),t=r(X.Step,()=>({color:`primary`,children:`Choose plan`})),a=r(X.Step,()=>({children:`Purchase`})),o=r(X.Step,()=>({children:`Receive Product`})),s=r(X,()=>({direction:`vertical`,children:[e,t,a,o]}));_(()=>C(s,i,n))}),e},!0),code:`<Steps direction="vertical">
  <Steps.Step color="primary">Register</Steps.Step>
  <Steps.Step color="primary">Choose plan</Steps.Step>
  <Steps.Step>Purchase</Steps.Step>
  <Steps.Step>Receive Product</Steps.Step>
</Steps>`})),p.insertBefore(G,f);let K=g(h);x(K,P,()=>({title:`Responsive`,tab:t.responsive,preview:e(()=>{let e=c(),t=Z().content.cloneNode(!0),n=t.firstChild.childNodes[0].childNodes[0],i=n.parentNode;return e.appendChild(t),O(()=>{let e=r(X.Step,()=>({color:`primary`,children:`Register`})),t=r(X.Step,()=>({color:`primary`,children:`Choose plan`})),a=r(X.Step,()=>({children:`Purchase`})),o=r(X.Step,()=>({children:`Receive Product`})),s=r(X,()=>({direction:`vertical`,className:`lg:steps-horizontal`,children:[e,t,a,o]}));_(()=>C(s,i,n))}),e},!0),code:`<Steps direction="vertical" className="lg:steps-horizontal">
  <Steps.Step color="primary">Register</Steps.Step>
  <Steps.Step color="primary">Choose plan</Steps.Step>
  <Steps.Step>Purchase</Steps.Step>
  <Steps.Step>Receive Product</Steps.Step>
</Steps>`})),h.insertBefore(K,m);let q=g(y);x(q,P,()=>({title:`With custom content in step-icon`,tab:t.icons,preview:e(()=>{let e=c(),t=Z().content.cloneNode(!0),n=t.firstChild.childNodes[0].childNodes[0],i=n.parentNode;return e.appendChild(t),O(()=>{let e=r(X.Icon,()=>({children:`1`})),t=r(X.Step,()=>({color:`neutral`,children:[e,`Step 1`]})),a=r(X.Icon,()=>({children:`2`})),o=r(X.Step,()=>({color:`neutral`,children:[a,`Step 2`]})),s=r(X.Icon,()=>({children:`3`})),c=r(X.Step,()=>({children:[s,`Step 3`]})),l=r(X,()=>({"data-testid":`steps-icons`,children:[t,o,c]}));_(()=>C(l,i,n))}),e},!0),code:`<Steps>
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
</Steps>`})),y.insertBefore(q,v);let J=g(w);x(J,P,()=>({title:`With data-content`,tab:t.dataContent,preview:e(()=>{let e=c(),t=Z().content.cloneNode(!0),n=t.firstChild.childNodes[0].childNodes[0],i=n.parentNode;return e.appendChild(t),O(()=>{let e=r(X.Step,()=>({color:`neutral`,"data-content":`?`,children:`Step 1`})),t=r(X.Step,()=>({color:`neutral`,"data-content":`!`,children:`Step 2`})),a=r(X.Step,()=>({color:`neutral`,"data-content":`✓`,children:`Step 3`})),o=r(X.Step,()=>({color:`neutral`,"data-content":`✕`,children:`Step 4`})),s=r(X.Step,()=>({color:`neutral`,"data-content":`★`,children:`Step 5`})),c=r(X,()=>({children:[e,t,a,o,s]}));_(()=>C(c,i,n))}),e},!0),code:`<Steps>
  <Steps.Step color="neutral" data-content="?">Step 1</Steps.Step>
  <Steps.Step color="neutral" data-content="!">Step 2</Steps.Step>
  <Steps.Step color="neutral" data-content="✓">Step 3</Steps.Step>
  <Steps.Step color="neutral" data-content="✕">Step 4</Steps.Step>
  <Steps.Step color="neutral" data-content="★">Step 5</Steps.Step>
</Steps>`})),w.insertBefore(J,S);let Y=g(E);x(Y,P,()=>({title:`Custom colors`,tab:t.colors,preview:e(()=>{let e=c(),t=Z().content.cloneNode(!0),n=t.firstChild.childNodes[0].childNodes[0],i=n.parentNode;return e.appendChild(t),O(()=>{let e=r(X.Step,()=>({color:`info`,children:`Fly to moon`})),t=r(X.Step,()=>({color:`info`,children:`Shrink the moon`})),a=r(X.Step,()=>({color:`info`,children:`Grab the moon`})),o=r(X.Step,()=>({color:`error`,"data-content":`?`,children:`Sit on toilet`})),s=r(X,()=>({children:[e,t,a,o]}));_(()=>C(s,i,n))}),e},!0),code:`<Steps>
  <Steps.Step color="info">Fly to moon</Steps.Step>
  <Steps.Step color="info">Shrink the moon</Steps.Step>
  <Steps.Step color="info">Grab the moon</Steps.Step>
  <Steps.Step color="error" data-content="?">Sit on toilet</Steps.Step>
</Steps>`})),E.insertBefore(Y,T);let Q=g(k);x(Q,P,()=>({title:`With scrollable wrapper`,tab:t.scrollable,preview:o(Object.assign(e=>{let t=Z().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0],r=n.parentNode,i=g(r);return x(i,le,()=>({})),r.insertBefore(i,n),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),code:`<div className="grid gap-5">
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
</div>`})),k.insertBefore(Q,D);let $=g(M);x($,P,()=>({title:`Rich step content`,tab:t.richStep,preview:e(()=>{let e=c(),t=Z().content.cloneNode(!0),n=t.firstChild.childNodes[0].childNodes[0],i=n.parentNode;return e.appendChild(t),O(()=>{let e=r(X.Step,()=>({status:`finish`,title:`Connect repository`,description:`Link your GitHub repository and import the default build settings.`,icon:b(ae,()=>({}))})),t=r(X.Step,()=>({status:`process`,title:`Configure policies`,subTitle:`~ 2 mins`,description:`Set preview branches, branch protection, and deployment rules.`,icon:b(oe,()=>({}))})),a=r(X.Step,()=>({status:`wait`,title:`Ship to production`,description:`Merge the release branch after the final smoke test passes.`})),o=r(X,()=>({direction:`vertical`,children:[e,t,a]}));_(()=>C(o,i,n))}),e},!0),code:`<Steps direction="vertical">
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
</Steps>`})),M.insertBefore($,A);let ne=g(F);x(ne,P,()=>({title:`Items + current + status`,tab:t.items,preview:o(Object.assign(e=>{let t=te().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0],r=n.parentNode,i=g(r);return x(i,X,()=>({current:1,status:`error`,items:[{title:`Account`,description:`Create workspace and invite collaborators.`,icon:b(ae,()=>({}))},{title:`Verification`,subTitle:`Left 00:00:08`,description:`Waiting for security review and DNS validation.`,icon:b(oe,()=>({}))},{title:`Payment`,description:`Unlock the production environment after confirmation.`,icon:b(se,()=>({}))},{title:`Done`,description:`Your first deployment is ready.`,icon:b(ce,()=>({}))}]})),r.insertBefore(i,n),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),code:`<Steps
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
/>`})),F.insertBefore(ne,N);let pe=g(L);x(pe,P,()=>({title:`Clickable items`,tab:t.clickable,preview:b(ue,()=>({})),code:`const ClickableStepsDemo: FC = () => {
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
}`})),L.insertBefore(pe,I);let me=g(z);x(me,P,()=>({title:`Progress dot`,tab:t.progressDot,preview:o(Object.assign(t=>{let n=Z().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[0],i=r.parentNode,o=g(i);return x(o,X,()=>({progressDot:(t,n)=>e(e=>{let r=ee().content.cloneNode(!0).firstChild,i=r,o=r.childNodes[0],s=o.parentNode;return a(i,`tooltip tooltip-bottom`),O(()=>{j(i,`data-tip`,String(`${n.title}`))}),O(()=>{let e=t;_(()=>C(e,s,o))}),r}),items:[{title:`Collect requirements`,description:`Align scope with design and engineering.`},{title:`BuildDemo`,description:`Create a stakeholder-ready flow.`},{title:`Launch beta`,description:`Open access to pilot users.`}]})),i.insertBefore(o,r),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})),code:`<Steps
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
/>`})),z.insertBefore(me,R);let he=g(V);x(he,ie,()=>({rows:de})),V.insertBefore(he,B);let ge=g(U);return x(ge,ie,()=>({rows:fe})),U.insertBefore(ge,H),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0})))})),e=>m(()=>{})))};export{pe as default};