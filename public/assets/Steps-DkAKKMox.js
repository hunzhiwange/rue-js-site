import{$ as e,$t as t,Bt as n,Gt as r,Xt as i,Z as a,b as o,ct as s,et as c,gt as l,l as u,nt as d,o as f,p,rt as m,t as h,tt as g,ut as _,yt as v}from"./vapor-runtime-CKrmRMZX.js";import{a as y,n as b}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{a as x,i as S}from"./persistentSidebarPlayground-CKHFGglU.js";import{r as C}from"./SidebarPlaygroundDesign-CWudvLqE.js";import{t as w}from"./PreviewBlock-xsXk-Jrr.js";var T=(...e)=>e.filter(Boolean).join(` `),E=e=>Array.isArray(e)?e.flatMap(e=>E(e)):e==null||typeof e==`boolean`?[]:[e],D=(e,t)=>t?`${e} ${t}`:e,O=(e,t)=>t??e,k=(e,t)=>{if(t)return t;if(e===`error`)return`error`;if(e===`finish`||e===`process`)return`primary`},A=(e,t)=>{if(!t){if(e===`finish`)return`✓`;if(e===`error`)return`✕`}},j=e=>{typeof e.preventDefault==`function`&&e.preventDefault(),typeof e.stopPropagation==`function`&&e.stopPropagation()},M=e=>{let{cls:n}=y(`useSetup:0:0`,()=>i(()=>({cls:y(`computed:1:0`,()=>v(()=>e.status===`wait`?`inline-block size-2.5 rounded-full border border-base-300 bg-base-100`:`inline-block size-2.5 rounded-full bg-current`))})));return u(e=>{let r=g(`span`,e);return t(()=>{_(r,n.get())}),r})},N=(e,t)=>{if(!e)return;let n=S(M,{status:t.status});return typeof e==`function`?e(n,t):n},P=(e,t,n,r)=>e.status?e.status:typeof n==`number`?t<n?`finish`:t===n?r??`process`:`wait`:`wait`,F=(e,t,n)=>{let{nextChildren:r}=y(`useSetup:0:0:dup1`,()=>i(()=>({nextChildren:y(`computed:1:1`,()=>v(()=>E(n)))})));return o(e,t,...r.get())},I=({as:e=`li`,color:t,className:n,title:r,description:i,content:a,subTitle:o,icon:s,status:c,disabled:l,clickable:u,dataContent:d,children:f,index:m,onClick:h,onKeyDown:g,..._})=>{let v=e,y=a??i,b=r??f,C=u??!!h,w=k(c,t),T=d??_[`data-content`]??A(c,s!=null),E=r!=null||y!=null||o!=null||s!=null,O=_[`aria-current`]??(c===`process`?`step`:void 0),M=l?`true`:void 0,N=`step`;w&&(N+=` step-${w}`),C&&!l&&(N+=` cursor-pointer`),l&&(N+=` opacity-50`),C&&l&&(N+=` cursor-not-allowed`);let P=e=>{if(l){j(e);return}h&&h(e,m)},I=C?_.role??`button`:_.role,L=C?_.tabIndex??(l?-1:0):_.tabIndex,R=C?e=>{if(g&&g(e),e.defaultPrevented||l){l&&j(e);return}(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),P(e))}:_.onKeyDown,z=C?P:_.onClick,B=E?x(p,{children:[s==null?null:S(`span`,{className:D(`step-icon`,y==null?void 0:`mt-0.5`),"aria-hidden":`true`,children:s}),x(`span`,{className:`inline-flex min-w-0 flex-col gap-1 py-1 text-start`,children:[b!=null||o!=null?x(`span`,{className:`flex flex-wrap items-center gap-2 leading-tight`,children:[b==null?null:S(`span`,{className:`font-medium`,children:b}),o==null?null:S(`span`,{className:`text-xs opacity-60`,children:o})]}):null,y==null?null:S(`span`,{className:`text-xs leading-snug opacity-70`,children:y})]})]}):f;return F(v,{..._,className:D(N,n),...T==null?{}:{"data-content":T},role:I,tabIndex:L,onClick:z,onKeyDown:R,"aria-current":O,"aria-disabled":M},B)},L=Object.assign(({as:n=`ul`,direction:i,orientation:o,className:s,children:l,items:d,current:p,status:m,progressDot:g,onChange:_,...v})=>{let y=n,b=O(i,o),x=d&&d.length>0?d.map((n,i)=>{let o=P(n,i,p,m),s=n.icon??N(g,{index:i,status:o,title:n.title,description:n.description,content:n.content}),l=n.clickable??(!!_||!!n.onClick);return u(u=>{let d=c(),m=e(`rue:component:anchor`);return a(d,m),t(()=>{let e=h(I,{key:n.key??i,...n,index:i,status:o,color:k(o,n.color),icon:s,clickable:l,"aria-current":i===p?n[`aria-current`]??`step`:n[`aria-current`],onClick:(e,t)=>{n.disabled||(n.onClick&&typeof t==`number`&&n.onClick(e,t),_&&typeof t==`number`&&t!==p&&_(t))}});r(()=>f(e,d,m))}),d})}):l,S=`steps`;return b&&(S+=` steps-${b}`),F(y,{...v,className:T(S,s)},x)},{Step:I,Icon:({as:e=`span`,className:t,children:n,...r})=>F(e,{...r,className:D(`step-icon`,t)},n)}),R=n=>u(i=>{let o=g(`div`,i);_(o,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let l=g(`table`,o);a(o,l),_(l,`table table-zebra`);let p=g(`thead`,l);a(l,p);let m=g(`tr`,p);a(p,m);let h=g(`th`,m);a(m,h),a(h,d(`属性`));let v=g(`th`,m);a(m,v),a(v,d(`说明`));let y=g(`th`,m);a(m,y),a(y,d(`类型`));let x=g(`th`,m);a(m,x),a(x,d(`默认值`));let S=g(`tbody`,l);a(l,S);let C=e(`rue:list:start`),w=e(`rue:list:end`);a(S,C),a(S,w);let T=new Map;return t(()=>{T=b({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,i,o,l,d)=>{f(u(()=>{let i=c(),o=g(`tr`,i);a(i,o),t(()=>{s(o,`key`,String(n.prop))});let l=g(`td`,o);a(o,l);let u=g(`code`,l);a(l,u);let d=e(`rue:slot:anchor`);a(u,d),t(()=>{let e=n.prop;r(()=>f(e,u,d))});let p=g(`td`,o);a(o,p);let m=e(`rue:slot:anchor`);a(p,m),t(()=>{let e=n.description;r(()=>f(e,p,m))});let h=g(`td`,o);a(o,h);let _=g(`code`,h);a(h,_);let v=e(`rue:slot:anchor`);a(_,v),t(()=>{let e=n.type;r(()=>f(e,_,v))});let y=g(`td`,o);a(o,y);let b=g(`code`,y);a(y,b);let x=e(`rue:slot:anchor`);return a(b,x),t(()=>{let e=n.defaultValue;r(()=>f(e,b,x))}),i}),i,o)}})}),o}),z=()=>u(e=>{let t=g(`svg`,e);s(t,`xmlns`,`http://www.w3.org/2000/svg`),s(t,`viewBox`,`0 0 24 24`),s(t,`fill`,`none`),s(t,`stroke`,`currentColor`),s(t,`strokeWidth`,`2`),_(t,`size-[1.05em]`);let n=g(`path`,t);a(t,n),s(n,`strokeLinecap`,`round`),s(n,`strokeLinejoin`,`round`),s(n,`d`,`M6 20a6 6 0 0 1 12 0`);let r=g(`circle`,t);return a(t,r),s(r,`cx`,`12`),s(r,`cy`,`9`),s(r,`r`,`4`),t}),B=()=>u(e=>{let t=g(`svg`,e);s(t,`xmlns`,`http://www.w3.org/2000/svg`),s(t,`viewBox`,`0 0 24 24`),s(t,`fill`,`none`),s(t,`stroke`,`currentColor`),s(t,`strokeWidth`,`2`),_(t,`size-[1.05em]`);let n=g(`path`,t);a(t,n),s(n,`strokeLinecap`,`round`),s(n,`strokeLinejoin`,`round`),s(n,`d`,`m12 3 1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3Z`);let r=g(`path`,t);return a(t,r),s(r,`strokeLinecap`,`round`),s(r,`strokeLinejoin`,`round`),s(r,`d`,`M5 18h.01M19 18h.01M12 21h.01`),t}),ee=()=>u(e=>{let t=g(`svg`,e);s(t,`xmlns`,`http://www.w3.org/2000/svg`),s(t,`viewBox`,`0 0 24 24`),s(t,`fill`,`none`),s(t,`stroke`,`currentColor`),s(t,`strokeWidth`,`2`),_(t,`size-[1.05em]`);let n=g(`rect`,t);a(t,n),s(n,`x`,`3`),s(n,`y`,`5`),s(n,`width`,`18`),s(n,`height`,`14`),s(n,`rx`,`2`);let r=g(`path`,t);return a(t,r),s(r,`strokeLinecap`,`round`),s(r,`strokeLinejoin`,`round`),s(r,`d`,`M3 10h18`),t}),te=()=>u(e=>{let t=g(`svg`,e);s(t,`xmlns`,`http://www.w3.org/2000/svg`),s(t,`viewBox`,`0 0 24 24`),s(t,`fill`,`none`),s(t,`stroke`,`currentColor`),s(t,`strokeWidth`,`2`),_(t,`size-[1.05em]`);let n=g(`circle`,t);a(t,n),s(n,`cx`,`12`),s(n,`cy`,`12`),s(n,`r`,`9`);let r=g(`path`,t);a(t,r),s(r,`strokeLinecap`,`round`),s(r,`strokeLinejoin`,`round`),s(r,`d`,`M8 14s1.5 2 4 2 4-2 4-2`);let i=g(`path`,t);return a(t,i),s(i,`strokeLinecap`,`round`),s(i,`strokeLinejoin`,`round`),s(i,`d`,`M9 10h.01M15 10h.01`),t}),ne=()=>u(t=>{let n=g(`div`,t);_(n,`grid gap-5`);let r=g(`div`,n);a(n,r),_(r,`space-y-2`);let i=g(`div`,r);a(r,i),_(i,`text-sm font-medium`),a(i,d(`长标签交付流程`));let o=g(`div`,r);a(r,o),_(o,`max-w-xl overflow-x-auto pb-2`),s(o,`data-testid`,`steps-scroll-wrapper`);let l=e(`rue:component:anchor`);a(o,l),f(h(L,{className:`min-w-[1120px]`,children:u(()=>{let t=c(),n=e(`rue:component:anchor`);a(t,n),f(h(L.Step,{color:`primary`,children:`需求确认`}),t,n);let r=e(`rue:component:anchor`);a(t,r),f(h(L.Step,{color:`primary`,children:`设计评审与资源排期`}),t,r);let i=e(`rue:component:anchor`);a(t,i),f(h(L.Step,{color:`primary`,children:`前后端联调验收`}),t,i);let o=e(`rue:component:anchor`);a(t,o),f(h(L.Step,{color:`secondary`,children:`灰度发布到内部环境`}),t,o);let s=e(`rue:component:anchor`);a(t,s),f(h(L.Step,{color:`secondary`,children:`邀请试点客户体验`}),t,s);let l=e(`rue:component:anchor`);a(t,l),f(h(L.Step,{color:`accent`,children:`收集反馈并修复阻塞问题`}),t,l);let u=e(`rue:component:anchor`);a(t,u),f(h(L.Step,{color:`accent`,children:`准备正式发布说明`}),t,u);let d=e(`rue:component:anchor`);a(t,d),f(h(L.Step,{color:`warning`,children:`上线窗口审批`}),t,d);let p=e(`rue:component:anchor`);a(t,p),f(h(L.Step,{color:`warning`,children:`生产环境发布`}),t,p);let m=e(`rue:component:anchor`);a(t,m),f(h(L.Step,{color:`success`,children:`发布后巡检`}),t,m);let g=e(`rue:component:anchor`);return a(t,g),f(h(L.Step,{color:`neutral`,children:`归档复盘`}),t,g),t})}),o,l);let p=g(`div`,n);a(n,p),_(p,`space-y-2`);let m=g(`div`,p);a(p,m),_(m,`text-sm font-medium`),a(m,d(`编号里程碑`));let v=g(`div`,p);a(p,v),_(v,`max-w-md overflow-x-auto pb-2`);let y=e(`rue:component:anchor`);return a(v,y),f(h(L,{className:`min-w-[960px]`,children:u(()=>{let t=c(),n=e(`rue:component:anchor`);a(t,n),f(h(L.Step,{color:`neutral`,children:`Start`}),t,n);let r=e(`rue:component:anchor`);a(t,r),f(h(L.Step,{color:`secondary`,children:`02`}),t,r);let i=e(`rue:component:anchor`);a(t,i),f(h(L.Step,{color:`secondary`,children:`03`}),t,i);let o=e(`rue:component:anchor`);a(t,o),f(h(L.Step,{color:`secondary`,children:`04`}),t,o);let s=e(`rue:component:anchor`);a(t,s),f(h(L.Step,{children:`05`}),t,s);let l=e(`rue:component:anchor`);a(t,l),f(h(L.Step,{color:`accent`,children:`06`}),t,l);let u=e(`rue:component:anchor`);a(t,u),f(h(L.Step,{color:`accent`,children:`07`}),t,u);let d=e(`rue:component:anchor`);a(t,d),f(h(L.Step,{children:`08`}),t,d);let p=e(`rue:component:anchor`);a(t,p),f(h(L.Step,{color:`info`,children:`09`}),t,p);let m=e(`rue:component:anchor`);a(t,m),f(h(L.Step,{color:`info`,children:`10`}),t,m);let g=e(`rue:component:anchor`);a(t,g),f(h(L.Step,{color:`error`,children:`11`}),t,g);let _=e(`rue:component:anchor`);a(t,_),f(h(L.Step,{color:`warning`,children:`12`}),t,_);let v=e(`rue:component:anchor`);return a(t,v),f(h(L.Step,{color:`neutral`,children:`End`}),t,v),t})}),v,y),n}),re=()=>{let{current:o}=y(`useSetup:0:0`,()=>i(()=>({current:y(`ref:1:0`,()=>n(0))})));return u(n=>{let i=g(`div`,n);_(i,`card bg-base-100 shadow-sm`);let s=g(`div`,i);a(i,s),_(s,`card-body gap-4`);let c=e(`rue:component:anchor`);a(s,c),t(()=>{let e=h(L,{current:o.value,onChange:e=>o.value=e,items:[{title:`Draft`,description:`Prepare the release scope and changelog.`,clickable:!0},{title:`Review`,description:`QA and product approve the rollout plan.`,clickable:!0},{title:`Deploy`,description:`Promote the release to production.`,clickable:!0}]});r(()=>f(e,s,c))});let u=g(`div`,s);a(s,u),_(u,`rounded-box border border-dashed border-base-300 bg-base-200/50 px-4 py-3 text-sm`),a(u,d(`点击步骤可切换，当前选中步骤：`));let p=g(`code`,u);a(u,p);let v=m(p);return a(p,v),t(()=>{l(v,o.value)}),i})},ie=[{prop:`direction / orientation`,description:`设置整体朝向；支持沿用 Rue 旧的 direction 写法，也支持更通用的 orientation 别名。`,type:`'horizontal' | 'vertical'`,defaultValue:`-`},{prop:`items`,description:`数据驱动模式，适合与 current、status、onChange 一起使用。`,type:`StepItem[]`,defaultValue:`-`},{prop:`current`,description:`当前进行中的步骤索引；前面的步骤自动推导为完成态，后面的步骤自动推导为等待态。`,type:`number`,defaultValue:`-`},{prop:`status`,description:`当前步骤的全局状态覆盖，仅作用于 current 命中的步骤。`,type:`'wait' | 'process' | 'finish' | 'error'`,defaultValue:`'process'`},{prop:`progressDot`,description:`切换为进度点模式，也支持自定义 dot 渲染函数。`,type:`boolean | (dot, info) => any`,defaultValue:`false`},{prop:`onChange`,description:`搭配 items 使用时启用点击切换，回传目标步骤索引。`,type:`(current: number) => void`,defaultValue:`-`}],ae=[{prop:`color`,description:`直接指定 Rue 语义色；未指定时会根据 status 自动映射。`,type:`'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'`,defaultValue:`按 status 推导`},{prop:`title`,description:`步骤主标题；在 children 写法中可与 description、subTitle、icon 组合为语义化内容区。`,type:`any`,defaultValue:`-`},{prop:`description / content`,description:`标题下方的补充说明文字；content 优先级高于 description。`,type:`any`,defaultValue:`-`},{prop:`subTitle`,description:`标题旁边的次级信息，适合展示倒计时、状态文案等。`,type:`any`,defaultValue:`-`},{prop:`icon`,description:`自定义步骤图标；继续支持旧的 <Steps.Icon /> 插槽写法。`,type:`any`,defaultValue:`-`},{prop:`status`,description:`单步状态，可覆盖根组件根据 current 推导的结果。`,type:`'wait' | 'process' | 'finish' | 'error'`,defaultValue:`-`},{prop:`dataContent / data-content`,description:`直接控制 daisyUI step 圆点中的字符，适合问号、勾号或自定义符号。`,type:`string`,defaultValue:`-`},{prop:`clickable / disabled`,description:`控制单步是否可交互，以及是否禁用点击切换。`,type:`boolean`,defaultValue:`false`}],V=()=>{let{tabs:o}=y(`useSetup:0:0:dup1`,()=>i(()=>({tabs:{horizontal:y(`ref:1:1`,()=>n(`preview`)),vertical:y(`ref:1:2`,()=>n(`preview`)),responsive:y(`ref:1:3`,()=>n(`preview`)),icons:y(`ref:1:4`,()=>n(`preview`)),dataContent:y(`ref:1:5`,()=>n(`preview`)),colors:y(`ref:1:6`,()=>n(`preview`)),scrollable:y(`ref:1:7`,()=>n(`preview`)),richStep:y(`ref:1:8`,()=>n(`preview`)),items:y(`ref:1:9`,()=>n(`preview`)),clickable:y(`ref:1:10`,()=>n(`preview`)),progressDot:y(`ref:1:11`,()=>n(`preview`))}})));return u(n=>{let i=c(),s=e(`rue:component:anchor`);return a(i,s),f(h(C,{children:u(()=>{let n=c(),i=g(`div`,n);a(n,i),_(i,`max-w-none prose prose-sm md:prose-base`);let s=g(`h1`,i);a(i,s),a(s,d(`Steps 步骤条`));let u=g(`p`,i);a(i,u),_(u,`text-sm mt-3 mb-3`),a(u,d(`Rue Steps 继续保留 daisyUI 的轻量视觉风格，同时补齐更贴近成熟业务组件的数据驱动 API： 支持`));let p=m(u);a(u,p),l(p,` `);let v=g(`code`,u);a(u,v),a(v,d(`items`)),a(u,d(`、`));let y=g(`code`,u);a(u,y),a(y,d(`current`)),a(u,d(`、`));let b=g(`code`,u);a(u,b),a(b,d(`status`)),a(u,d(`、`));let C=g(`code`,u);a(u,C),a(C,d(`progressDot`)),a(u,d(`、`));let T=g(`code`,u);a(u,T),a(T,d(`onChange`)),a(u,d(`，以及单步级别的`));let E=g(`code`,u);a(u,E),a(E,d(`title`)),a(u,d(`、`));let D=g(`code`,u);a(u,D),a(D,d(`description`)),a(u,d(`、`));let O=g(`code`,u);a(u,O),a(O,d(`subTitle`)),a(u,d(`和`));let k=g(`code`,u);a(u,k),a(k,d(`icon`)),a(u,d(`。`));let A=g(`div`,i);a(i,A),_(A,`not-prose mt-6 grid gap-4 md:grid-cols-3`);let j=g(`div`,A);a(A,j),_(j,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let M=g(`div`,j);a(j,M),_(M,`text-xs font-semibold uppercase tracking-wide text-primary`),a(M,d(`双模式`));let N=g(`div`,j);a(j,N),_(N,`mt-2 text-sm font-medium`),a(N,d(`children / items 都可用`));let P=g(`p`,j);a(j,P),_(P,`mt-2 text-sm opacity-70`),a(P,d(`老的`));let F=g(`code`,P);a(P,F),a(F,d(`Steps.Step`)),a(P,d(`和`));let I=g(`code`,P);a(P,I),a(I,d(`Steps.Icon`));let V=m(P);a(P,V),l(V,` `),a(P,d(`不变，新场景可直接传入数据数组。`));let H=g(`div`,A);a(A,H),_(H,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let U=g(`div`,H);a(H,U),_(U,`text-xs font-semibold uppercase tracking-wide text-secondary`),a(U,d(`状态推导`));let W=g(`div`,H);a(H,W),_(W,`mt-2 text-sm font-medium`),a(W,d(`current 自动推导完成/进行中/等待`));let G=g(`p`,H);a(H,G),_(G,`mt-2 text-sm opacity-70`),a(G,d(`不必手动给每一步都写颜色，只有例外项再单独覆盖即可。`));let K=g(`div`,A);a(A,K),_(K,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let q=g(`div`,K);a(K,q),_(q,`text-xs font-semibold uppercase tracking-wide text-accent`),a(q,d(`内容增强`));let J=g(`div`,K);a(K,J),_(J,`mt-2 text-sm font-medium`),a(J,d(`支持标题、副标题、描述和进度点`));let Y=g(`p`,K);a(K,Y),_(Y,`mt-2 text-sm opacity-70`),a(Y,d(`适合把原本只能写一行文本的步骤条，扩展成更完整的流程说明区。`));let X=g(`h2`,i);a(i,X),a(X,d(`基础布局`));let Z=g(`p`,i);a(i,Z),a(Z,d(`这一组示例保留 Rue 原有 demo，用来展示最基础的横向、纵向和响应式排列方式。`));let oe=e(`rue:component:anchor`);a(i,oe),t(()=>{let e=h(w,{title:`Horizontal`,tab:o.horizontal,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(L,{"data-testid":`steps-horizontal`,children:[S(L.Step,{color:`primary`,children:`Register`}),S(L.Step,{color:`primary`,children:`Choose plan`}),S(L.Step,{children:`Purchase`}),S(L.Step,{children:`Receive Product`})]})})}),code:`<Steps>
  <Steps.Step color="primary">Register</Steps.Step>
  <Steps.Step color="primary">Choose plan</Steps.Step>
  <Steps.Step>Purchase</Steps.Step>
  <Steps.Step>Receive Product</Steps.Step>
</Steps>`});r(()=>f(e,i,oe))});let se=e(`rue:component:anchor`);a(i,se),t(()=>{let e=h(w,{title:`Vertical`,tab:o.vertical,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(L,{direction:`vertical`,children:[S(L.Step,{color:`primary`,children:`Register`}),S(L.Step,{color:`primary`,children:`Choose plan`}),S(L.Step,{children:`Purchase`}),S(L.Step,{children:`Receive Product`})]})})}),code:`<Steps direction="vertical">
  <Steps.Step color="primary">Register</Steps.Step>
  <Steps.Step color="primary">Choose plan</Steps.Step>
  <Steps.Step>Purchase</Steps.Step>
  <Steps.Step>Receive Product</Steps.Step>
</Steps>`});r(()=>f(e,i,se))});let ce=e(`rue:component:anchor`);a(i,ce),t(()=>{let e=h(w,{title:`Responsive`,tab:o.responsive,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(L,{direction:`vertical`,className:`lg:steps-horizontal`,children:[S(L.Step,{color:`primary`,children:`Register`}),S(L.Step,{color:`primary`,children:`Choose plan`}),S(L.Step,{children:`Purchase`}),S(L.Step,{children:`Receive Product`})]})})}),code:`<Steps direction="vertical" className="lg:steps-horizontal">
  <Steps.Step color="primary">Register</Steps.Step>
  <Steps.Step color="primary">Choose plan</Steps.Step>
  <Steps.Step>Purchase</Steps.Step>
  <Steps.Step>Receive Product</Steps.Step>
</Steps>`});r(()=>f(e,i,ce))});let le=g(`h2`,i);a(i,le),a(le,d(`视觉定制`));let Q=g(`p`,i);a(i,Q),a(Q,d(`这一组仍然保留当前 Rue 的静态能力，包括自定义 icon、data-content、语义色和滚动容器。`));let ue=e(`rue:component:anchor`);a(i,ue),t(()=>{let e=h(w,{title:`With custom content in step-icon`,tab:o.icons,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(L,{"data-testid":`steps-icons`,children:[x(L.Step,{color:`neutral`,children:[S(L.Icon,{children:`1`}),`Step 1`]}),x(L.Step,{color:`neutral`,children:[S(L.Icon,{children:`2`}),`Step 2`]}),x(L.Step,{children:[S(L.Icon,{children:`3`}),`Step 3`]})]})})}),code:`<Steps>
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
</Steps>`});r(()=>f(e,i,ue))});let de=e(`rue:component:anchor`);a(i,de),t(()=>{let e=h(w,{title:`With data-content`,tab:o.dataContent,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(L,{children:[S(L.Step,{color:`neutral`,"data-content":`?`,children:`Step 1`}),S(L.Step,{color:`neutral`,"data-content":`!`,children:`Step 2`}),S(L.Step,{color:`neutral`,"data-content":`✓`,children:`Step 3`}),S(L.Step,{color:`neutral`,"data-content":`✕`,children:`Step 4`}),S(L.Step,{color:`neutral`,"data-content":`★`,children:`Step 5`})]})})}),code:`<Steps>
  <Steps.Step color="neutral" data-content="?">Step 1</Steps.Step>
  <Steps.Step color="neutral" data-content="!">Step 2</Steps.Step>
  <Steps.Step color="neutral" data-content="✓">Step 3</Steps.Step>
  <Steps.Step color="neutral" data-content="✕">Step 4</Steps.Step>
  <Steps.Step color="neutral" data-content="★">Step 5</Steps.Step>
</Steps>`});r(()=>f(e,i,de))});let fe=e(`rue:component:anchor`);a(i,fe),t(()=>{let e=h(w,{title:`Custom colors`,tab:o.colors,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(L,{children:[S(L.Step,{color:`info`,children:`Fly to moon`}),S(L.Step,{color:`info`,children:`Shrink the moon`}),S(L.Step,{color:`info`,children:`Grab the moon`}),S(L.Step,{color:`error`,"data-content":`?`,children:`Sit on toilet`})]})})}),code:`<Steps>
  <Steps.Step color="info">Fly to moon</Steps.Step>
  <Steps.Step color="info">Shrink the moon</Steps.Step>
  <Steps.Step color="info">Grab the moon</Steps.Step>
  <Steps.Step color="error" data-content="?">Sit on toilet</Steps.Step>
</Steps>`});r(()=>f(e,i,fe))});let pe=e(`rue:component:anchor`);a(i,pe),t(()=>{let e=h(w,{title:`With scrollable wrapper`,tab:o.scrollable,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:S(ne,{})})}),code:`<div className="grid gap-5">
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
</div>`});r(()=>f(e,i,pe))});let me=g(`h2`,i);a(i,me),a(me,d(`增强 API`));let he=g(`p`,i);a(i,he),a(he,d(`下面这些示例展示的是本次补齐的语义层能力，目标是让 Rue Steps 在不丢失现有风格的前提下更接近常见业务组件的使用体验。`));let ge=e(`rue:component:anchor`);a(i,ge),t(()=>{let e=h(w,{title:`Rich step content`,tab:o.richStep,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(L,{direction:`vertical`,children:[S(L.Step,{status:`finish`,title:`Connect repository`,description:`Link your GitHub repository and import the default build settings.`,icon:S(z,{})}),S(L.Step,{status:`process`,title:`Configure policies`,subTitle:`~ 2 mins`,description:`Set preview branches, branch protection, and deployment rules.`,icon:S(B,{})}),S(L.Step,{status:`wait`,title:`Ship to production`,description:`Merge the release branch after the final smoke test passes.`})]})})}),code:`<Steps direction="vertical">
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
</Steps>`});r(()=>f(e,i,ge))});let _e=e(`rue:component:anchor`);a(i,_e),t(()=>{let e=h(w,{title:`Items + current + status`,tab:o.items,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body gap-4`,children:[S(L,{current:1,status:`error`,items:[{title:`Account`,description:`Create workspace and invite collaborators.`,icon:S(z,{})},{title:`Verification`,subTitle:`Left 00:00:08`,description:`Waiting for security review and DNS validation.`,icon:S(B,{})},{title:`Payment`,description:`Unlock the production environment after confirmation.`,icon:S(ee,{})},{title:`Done`,description:`Your first deployment is ready.`,icon:S(te,{})}]}),x(`div`,{className:`text-sm opacity-70`,children:[`当前索引为 `,S(`code`,{children:`1`}),`，所以第 0 步自动完成，第 1 步继承根节点的`,` `,S(`code`,{children:`error`}),` 状态。`]})]})}),code:`<Steps
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
/>`});r(()=>f(e,i,_e))});let ve=e(`rue:component:anchor`);a(i,ve),t(()=>{let e=h(w,{title:`Clickable items`,tab:o.clickable,preview:S(re,{}),code:`const ClickableStepsDemo: FC = () => {
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
}`});r(()=>f(e,i,ve))});let ye=e(`rue:component:anchor`);a(i,ye),t(()=>{let e=h(w,{title:`Progress dot`,tab:o.progressDot,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:S(L,{progressDot:(e,t)=>S(`span`,{className:`tooltip tooltip-bottom`,"data-tip":`${t.title}`,children:e}),items:[{title:`Collect requirements`,description:`Align scope with design and engineering.`},{title:`Build demo`,description:`Create a stakeholder-ready flow.`},{title:`Launch beta`,description:`Open access to pilot users.`}]})})}),code:`<Steps
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
      title: 'Build demo',
      description: 'Create a stakeholder-ready flow.',
    },
    {
      title: 'Launch beta',
      description: 'Open access to pilot users.',
    },
  ]}
/>`});r(()=>f(e,i,ye))});let be=g(`h2`,i);a(i,be),a(be,d(`API`));let $=g(`p`,i);a(i,$);let xe=g(`code`,$);a($,xe),a(xe,d(`Steps`)),a($,d(`负责布局、状态推导与点击切换；`));let Se=g(`code`,$);a($,Se),a(Se,d(`Steps.Step`)),a($,d(`和`));let Ce=m($);a($,Ce),l(Ce,` `);let we=g(`code`,$);a($,we),a(we,d(`StepItem`)),a($,d(`共享同一组单步属性。`));let Te=g(`h3`,i);a(i,Te),a(Te,d(`Steps`));let Ee=e(`rue:component:anchor`);a(i,Ee),t(()=>{let e=h(R,{rows:ie});r(()=>f(e,i,Ee))});let De=g(`h3`,i);a(i,De),a(De,d(`Steps.Step / StepItem`));let Oe=e(`rue:component:anchor`);return a(i,Oe),t(()=>{let e=h(R,{rows:ae});r(()=>f(e,i,Oe))}),n})}),i,s),i})};export{V as default};