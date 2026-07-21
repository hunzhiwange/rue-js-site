import{Cn as e,Ct as t,Lt as n,Mt as r,Tt as i,dt as a,ft as o,ht as s,m as c,mt as l,pn as u,pt as d,s as f,st as p,tn as m,vn as h}from"./context-8lXZvIn-.js";import{l as g,o as _,t as v}from"./vapor-runtime-ygJWVcNn.js";import{a as y,n as b}from"./vapor-helpers-vapor-CMwHgsXf.js";import{n as x,t as S}from"./src-CCTNpCXV.js";import{r as C}from"./SidebarPlaygroundDesign-BbUFY3mM.js";import{t as w}from"./PreviewBlock-ARp---67.js";var T=(...e)=>e.filter(Boolean).join(` `),E=e=>Array.isArray(e)?e.flatMap(e=>E(e)):e==null||typeof e==`boolean`?[]:[e],D=(e,t)=>t?`${e} ${t}`:e,O=(e,t)=>t??e,k=(e,t)=>{if(t)return t;if(e===`error`)return`error`;if(e===`finish`||e===`process`)return`primary`},A=(e,t)=>{if(!t){if(e===`finish`)return`✓`;if(e===`error`)return`✕`}},j=e=>{typeof e.preventDefault==`function`&&e.preventDefault(),typeof e.stopPropagation==`function`&&e.stopPropagation()},M=t=>{let{cls:r}=y(`useSetup:0:0`,()=>e(()=>({cls:y(`computed:1:0`,()=>n(()=>t.status===`wait`?`inline-block size-2.5 rounded-full border border-base-300 bg-base-100`:`inline-block size-2.5 rounded-full bg-current`))})));return g(e=>{let t=d(`span`,e);return m(()=>{i(t,r.get())}),t})},N=(e,t)=>{if(!e)return;let n=S(M,{status:t.status});return typeof e==`function`?e(n,t):n},P=(e,t,n,r)=>e.status?e.status:typeof n==`number`?t<n?`finish`:t===n?r??`process`:`wait`:`wait`,F=(t,r,i)=>{let{nextChildren:a}=y(`useSetup:0:0:dup1`,()=>e(()=>({nextChildren:y(`computed:1:1`,()=>n(()=>E(i)))})));return c(t,r,...a.get())},I=({as:e=`li`,color:t,className:n,title:r,description:i,content:a,subTitle:o,icon:s,status:c,disabled:l,clickable:u,dataContent:d,children:p,index:m,onClick:h,onKeyDown:g,..._})=>{let v=e,y=a??i,b=r??p,C=u??!!h,w=k(c,t),T=d??_[`data-content`]??A(c,s!=null),E=r!=null||y!=null||o!=null||s!=null,O=_[`aria-current`]??(c===`process`?`step`:void 0),M=l?`true`:void 0,N=`step`;w&&(N+=` step-${w}`),C&&!l&&(N+=` cursor-pointer`),l&&(N+=` opacity-50`),C&&l&&(N+=` cursor-not-allowed`);let P=e=>{if(l){j(e);return}h&&h(e,m)},I=C?_.role??`button`:_.role,L=C?_.tabIndex??(l?-1:0):_.tabIndex,R=C?e=>{if(g&&g(e),e.defaultPrevented||l){l&&j(e);return}(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),P(e))}:_.onKeyDown,z=C?P:_.onClick,B=E?x(f,{children:[s==null?null:S(`span`,{className:D(`step-icon`,y==null?void 0:`mt-0.5`),"aria-hidden":`true`,children:s}),x(`span`,{className:`inline-flex min-w-0 flex-col gap-1 py-1 text-start`,children:[b!=null||o!=null?x(`span`,{className:`flex flex-wrap items-center gap-2 leading-tight`,children:[b==null?null:S(`span`,{className:`font-medium`,children:b}),o==null?null:S(`span`,{className:`text-xs opacity-60`,children:o})]}):null,y==null?null:S(`span`,{className:`text-xs leading-snug opacity-70`,children:y})]})]}):p;return F(v,{..._,className:D(N,n),...T==null?{}:{"data-content":T},role:I,tabIndex:L,onClick:z,onKeyDown:R,"aria-current":O,"aria-disabled":M},B)},L=Object.assign(({as:e=`ul`,direction:t,orientation:n,className:r,children:i,items:s,current:c,status:l,progressDot:u,onChange:d,...f})=>{let y=e,b=O(t,n),x=s&&s.length>0?s.map((e,t)=>{let n=P(e,t,c,l),r=e.icon??N(u,{index:t,status:n,title:e.title,description:e.description,content:e.content}),i=e.clickable??(!!d||!!e.onClick);return g(s=>{let l=o(),u=a(`rue:component:anchor`);return p(l,u),m(()=>{let a=v(I,{key:e.key??t,...e,index:t,status:n,color:k(n,e.color),icon:r,clickable:i,"aria-current":t===c?e[`aria-current`]??`step`:e[`aria-current`],onClick:(t,n)=>{e.disabled||(e.onClick&&typeof n==`number`&&e.onClick(t,n),d&&typeof n==`number`&&n!==c&&d(n))}});h(()=>_(a,l,u))}),l})}):i,S=`steps`;return b&&(S+=` steps-${b}`),F(y,{...f,className:T(S,r)},x)},{Step:I,Icon:({as:e=`span`,className:t,children:n,...r})=>F(e,{...r,className:D(`step-icon`,t)},n)}),R=e=>g(n=>{let r=d(`div`,n);i(r,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let s=d(`table`,r);p(r,s),i(s,`table table-zebra`);let c=d(`thead`,s);p(s,c);let u=d(`tr`,c);p(c,u);let f=d(`th`,u);p(u,f),p(f,l(`属性`));let v=d(`th`,u);p(u,v),p(v,l(`说明`));let y=d(`th`,u);p(u,y),p(y,l(`类型`));let x=d(`th`,u);p(u,x),p(x,l(`默认值`));let S=d(`tbody`,s);p(s,S);let C=a(`rue:list:start`),w=a(`rue:list:end`);p(S,C),p(S,w);let T=new Map;return m(()=>{T=b({items:e.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,n,r,i,s)=>{_(g(()=>{let n=o(),r=d(`tr`,n);p(n,r),m(()=>{t(r,`key`,String(e.prop))});let i=d(`td`,r);p(r,i);let s=d(`code`,i);p(i,s);let c=a(`rue:slot:anchor`);p(s,c),m(()=>{let t=e.prop;h(()=>_(t,s,c))});let l=d(`td`,r);p(r,l);let u=a(`rue:slot:anchor`);p(l,u),m(()=>{let t=e.description;h(()=>_(t,l,u))});let f=d(`td`,r);p(r,f);let g=d(`code`,f);p(f,g);let v=a(`rue:slot:anchor`);p(g,v),m(()=>{let t=e.type;h(()=>_(t,g,v))});let y=d(`td`,r);p(r,y);let b=d(`code`,y);p(y,b);let x=a(`rue:slot:anchor`);return p(b,x),m(()=>{let t=e.defaultValue;h(()=>_(t,b,x))}),n}),n,r)}})}),r}),z=()=>g(e=>{let n=d(`svg`,e);t(n,`xmlns`,`http://www.w3.org/2000/svg`),t(n,`viewBox`,`0 0 24 24`),t(n,`fill`,`none`),t(n,`stroke`,`currentColor`),t(n,`strokeWidth`,`2`),i(n,`size-[1.05em]`);let r=d(`path`,n);p(n,r),t(r,`strokeLinecap`,`round`),t(r,`strokeLinejoin`,`round`),t(r,`d`,`M6 20a6 6 0 0 1 12 0`);let a=d(`circle`,n);return p(n,a),t(a,`cx`,`12`),t(a,`cy`,`9`),t(a,`r`,`4`),n}),B=()=>g(e=>{let n=d(`svg`,e);t(n,`xmlns`,`http://www.w3.org/2000/svg`),t(n,`viewBox`,`0 0 24 24`),t(n,`fill`,`none`),t(n,`stroke`,`currentColor`),t(n,`strokeWidth`,`2`),i(n,`size-[1.05em]`);let r=d(`path`,n);p(n,r),t(r,`strokeLinecap`,`round`),t(r,`strokeLinejoin`,`round`),t(r,`d`,`m12 3 1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3Z`);let a=d(`path`,n);return p(n,a),t(a,`strokeLinecap`,`round`),t(a,`strokeLinejoin`,`round`),t(a,`d`,`M5 18h.01M19 18h.01M12 21h.01`),n}),ee=()=>g(e=>{let n=d(`svg`,e);t(n,`xmlns`,`http://www.w3.org/2000/svg`),t(n,`viewBox`,`0 0 24 24`),t(n,`fill`,`none`),t(n,`stroke`,`currentColor`),t(n,`strokeWidth`,`2`),i(n,`size-[1.05em]`);let r=d(`rect`,n);p(n,r),t(r,`x`,`3`),t(r,`y`,`5`),t(r,`width`,`18`),t(r,`height`,`14`),t(r,`rx`,`2`);let a=d(`path`,n);return p(n,a),t(a,`strokeLinecap`,`round`),t(a,`strokeLinejoin`,`round`),t(a,`d`,`M3 10h18`),n}),te=()=>g(e=>{let n=d(`svg`,e);t(n,`xmlns`,`http://www.w3.org/2000/svg`),t(n,`viewBox`,`0 0 24 24`),t(n,`fill`,`none`),t(n,`stroke`,`currentColor`),t(n,`strokeWidth`,`2`),i(n,`size-[1.05em]`);let r=d(`circle`,n);p(n,r),t(r,`cx`,`12`),t(r,`cy`,`12`),t(r,`r`,`9`);let a=d(`path`,n);p(n,a),t(a,`strokeLinecap`,`round`),t(a,`strokeLinejoin`,`round`),t(a,`d`,`M8 14s1.5 2 4 2 4-2 4-2`);let o=d(`path`,n);return p(n,o),t(o,`strokeLinecap`,`round`),t(o,`strokeLinejoin`,`round`),t(o,`d`,`M9 10h.01M15 10h.01`),n}),ne=()=>g(e=>{let n=d(`div`,e);i(n,`grid gap-5`);let r=d(`div`,n);p(n,r),i(r,`space-y-2`);let s=d(`div`,r);p(r,s),i(s,`text-sm font-medium`),p(s,l(`长标签交付流程`));let c=d(`div`,r);p(r,c),i(c,`max-w-xl overflow-x-auto pb-2`),t(c,`data-testid`,`steps-scroll-wrapper`);let u=a(`rue:component:anchor`);p(c,u),_(v(L,{className:`min-w-[1120px]`,children:g(()=>{let e=o(),t=a(`rue:component:anchor`);p(e,t),_(v(L.Step,{color:`primary`,children:`需求确认`}),e,t);let n=a(`rue:component:anchor`);p(e,n),_(v(L.Step,{color:`primary`,children:`设计评审与资源排期`}),e,n);let r=a(`rue:component:anchor`);p(e,r),_(v(L.Step,{color:`primary`,children:`前后端联调验收`}),e,r);let i=a(`rue:component:anchor`);p(e,i),_(v(L.Step,{color:`secondary`,children:`灰度发布到内部环境`}),e,i);let s=a(`rue:component:anchor`);p(e,s),_(v(L.Step,{color:`secondary`,children:`邀请试点客户体验`}),e,s);let c=a(`rue:component:anchor`);p(e,c),_(v(L.Step,{color:`accent`,children:`收集反馈并修复阻塞问题`}),e,c);let l=a(`rue:component:anchor`);p(e,l),_(v(L.Step,{color:`accent`,children:`准备正式发布说明`}),e,l);let u=a(`rue:component:anchor`);p(e,u),_(v(L.Step,{color:`warning`,children:`上线窗口审批`}),e,u);let d=a(`rue:component:anchor`);p(e,d),_(v(L.Step,{color:`warning`,children:`生产环境发布`}),e,d);let f=a(`rue:component:anchor`);p(e,f),_(v(L.Step,{color:`success`,children:`发布后巡检`}),e,f);let m=a(`rue:component:anchor`);return p(e,m),_(v(L.Step,{color:`neutral`,children:`归档复盘`}),e,m),e})}),c,u);let f=d(`div`,n);p(n,f),i(f,`space-y-2`);let m=d(`div`,f);p(f,m),i(m,`text-sm font-medium`),p(m,l(`编号里程碑`));let h=d(`div`,f);p(f,h),i(h,`max-w-md overflow-x-auto pb-2`);let y=a(`rue:component:anchor`);return p(h,y),_(v(L,{className:`min-w-[960px]`,children:g(()=>{let e=o(),t=a(`rue:component:anchor`);p(e,t),_(v(L.Step,{color:`neutral`,children:`Start`}),e,t);let n=a(`rue:component:anchor`);p(e,n),_(v(L.Step,{color:`secondary`,children:`02`}),e,n);let r=a(`rue:component:anchor`);p(e,r),_(v(L.Step,{color:`secondary`,children:`03`}),e,r);let i=a(`rue:component:anchor`);p(e,i),_(v(L.Step,{color:`secondary`,children:`04`}),e,i);let s=a(`rue:component:anchor`);p(e,s),_(v(L.Step,{children:`05`}),e,s);let c=a(`rue:component:anchor`);p(e,c),_(v(L.Step,{color:`accent`,children:`06`}),e,c);let l=a(`rue:component:anchor`);p(e,l),_(v(L.Step,{color:`accent`,children:`07`}),e,l);let u=a(`rue:component:anchor`);p(e,u),_(v(L.Step,{children:`08`}),e,u);let d=a(`rue:component:anchor`);p(e,d),_(v(L.Step,{color:`info`,children:`09`}),e,d);let f=a(`rue:component:anchor`);p(e,f),_(v(L.Step,{color:`info`,children:`10`}),e,f);let m=a(`rue:component:anchor`);p(e,m),_(v(L.Step,{color:`error`,children:`11`}),e,m);let h=a(`rue:component:anchor`);p(e,h),_(v(L.Step,{color:`warning`,children:`12`}),e,h);let g=a(`rue:component:anchor`);return p(e,g),_(v(L.Step,{color:`neutral`,children:`End`}),e,g),e})}),h,y),n}),re=()=>{let{current:t}=y(`useSetup:0:0`,()=>e(()=>({current:y(`ref:1:0`,()=>u(0))})));return g(e=>{let n=d(`div`,e);i(n,`card bg-base-100 shadow-sm`);let o=d(`div`,n);p(n,o),i(o,`card-body gap-4`);let c=a(`rue:component:anchor`);p(o,c),m(()=>{let e=v(L,{current:t.value,onChange:e=>t.value=e,items:[{title:`Draft`,description:`Prepare the release scope and changelog.`,clickable:!0},{title:`Review`,description:`QA and product approve the rollout plan.`,clickable:!0},{title:`Deploy`,description:`Promote the release to production.`,clickable:!0}]});h(()=>_(e,o,c))});let u=d(`div`,o);p(o,u),i(u,`rounded-box border border-dashed border-base-300 bg-base-200/50 px-4 py-3 text-sm`),p(u,l(`点击步骤可切换，当前选中步骤：`));let f=d(`code`,u);p(u,f);let g=s(f);return p(f,g),m(()=>{r(g,t.value)}),n})},ie=[{prop:`direction / orientation`,description:`设置整体朝向；支持使用 Rue 基础的 direction 写法，也支持更通用的 orientation 别名。`,type:`'horizontal' | 'vertical'`,defaultValue:`-`},{prop:`items`,description:`数据驱动模式，适合与 current、status、onChange 一起使用。`,type:`StepItem[]`,defaultValue:`-`},{prop:`current`,description:`当前进行中的步骤索引；前面的步骤自动推导为完成态，后面的步骤自动推导为等待态。`,type:`number`,defaultValue:`-`},{prop:`status`,description:`当前步骤的全局状态覆盖，仅作用于 current 命中的步骤。`,type:`'wait' | 'process' | 'finish' | 'error'`,defaultValue:`'process'`},{prop:`progressDot`,description:`切换为进度点模式，也支持自定义 dot 渲染函数。`,type:`boolean | (dot, info) => any`,defaultValue:`false`},{prop:`onChange`,description:`搭配 items 使用时启用点击切换，回传目标步骤索引。`,type:`(current: number) => void`,defaultValue:`-`}],ae=[{prop:`color`,description:`直接指定 Rue 语义色；未指定时会根据 status 自动映射。`,type:`'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'`,defaultValue:`按 status 推导`},{prop:`title`,description:`步骤主标题；在 children 写法中可与 description、subTitle、icon 组合为语义化内容区。`,type:`any`,defaultValue:`-`},{prop:`description / content`,description:`标题下方的补充说明文字；content 优先级高于 description。`,type:`any`,defaultValue:`-`},{prop:`subTitle`,description:`标题旁边的次级信息，适合展示倒计时、状态文案等。`,type:`any`,defaultValue:`-`},{prop:`icon`,description:`自定义步骤图标；支持基础的 <Steps.Icon /> 插槽写法。`,type:`any`,defaultValue:`-`},{prop:`status`,description:`单步状态，可覆盖根组件根据 current 推导的结果。`,type:`'wait' | 'process' | 'finish' | 'error'`,defaultValue:`-`},{prop:`dataContent / data-content`,description:`直接控制 daisyUI step 圆点中的字符，适合问号、勾号或自定义符号。`,type:`string`,defaultValue:`-`},{prop:`clickable / disabled`,description:`控制单步是否可交互，以及是否禁用点击切换。`,type:`boolean`,defaultValue:`false`}],V=()=>{let{tabs:t}=y(`useSetup:0:0:dup1`,()=>e(()=>({tabs:{horizontal:y(`ref:1:1`,()=>u(`preview`)),vertical:y(`ref:1:2`,()=>u(`preview`)),responsive:y(`ref:1:3`,()=>u(`preview`)),icons:y(`ref:1:4`,()=>u(`preview`)),dataContent:y(`ref:1:5`,()=>u(`preview`)),colors:y(`ref:1:6`,()=>u(`preview`)),scrollable:y(`ref:1:7`,()=>u(`preview`)),richStep:y(`ref:1:8`,()=>u(`preview`)),items:y(`ref:1:9`,()=>u(`preview`)),clickable:y(`ref:1:10`,()=>u(`preview`)),progressDot:y(`ref:1:11`,()=>u(`preview`))}})));return g(e=>{let n=o(),c=a(`rue:component:anchor`);return p(n,c),_(v(C,{children:g(()=>{let e=o(),n=d(`div`,e);p(e,n),i(n,`max-w-none prose prose-sm md:prose-base`);let c=d(`h1`,n);p(n,c),p(c,l(`Steps 步骤条`));let u=d(`p`,n);p(n,u),i(u,`text-sm mt-3 mb-3`),p(u,l(`Rue Steps 展示 daisyUI 的轻量视觉风格，同时补充更贴近成熟业务组件的数据驱动 API： 支持`));let f=s(u);p(u,f),r(f,` `);let g=d(`code`,u);p(u,g),p(g,l(`items`)),p(u,l(`、`));let y=d(`code`,u);p(u,y),p(y,l(`current`)),p(u,l(`、`));let b=d(`code`,u);p(u,b),p(b,l(`status`)),p(u,l(`、`));let C=d(`code`,u);p(u,C),p(C,l(`progressDot`)),p(u,l(`、`));let T=d(`code`,u);p(u,T),p(T,l(`onChange`)),p(u,l(`，以及单步级别的`));let E=d(`code`,u);p(u,E),p(E,l(`title`)),p(u,l(`、`));let D=d(`code`,u);p(u,D),p(D,l(`description`)),p(u,l(`、`));let O=d(`code`,u);p(u,O),p(O,l(`subTitle`)),p(u,l(`和`));let k=d(`code`,u);p(u,k),p(k,l(`icon`)),p(u,l(`。`));let A=d(`div`,n);p(n,A),i(A,`not-prose mt-6 grid gap-4 md:grid-cols-3`);let j=d(`div`,A);p(A,j),i(j,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let M=d(`div`,j);p(j,M),i(M,`text-xs font-semibold uppercase tracking-wide text-primary`),p(M,l(`双模式`));let N=d(`div`,j);p(j,N),i(N,`mt-2 text-sm font-medium`),p(N,l(`children / items 都可用`));let P=d(`p`,j);p(j,P),i(P,`mt-2 text-sm opacity-70`),p(P,l(`基础的`));let F=d(`code`,P);p(P,F),p(F,l(`Steps.Step`)),p(P,l(`和`));let I=d(`code`,P);p(P,I),p(I,l(`Steps.Icon`));let V=s(P);p(P,V),r(V,` `),p(P,l(`不变，新场景可直接传入数据数组。`));let H=d(`div`,A);p(A,H),i(H,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let U=d(`div`,H);p(H,U),i(U,`text-xs font-semibold uppercase tracking-wide text-secondary`),p(U,l(`状态推导`));let W=d(`div`,H);p(H,W),i(W,`mt-2 text-sm font-medium`),p(W,l(`current 自动推导完成/进行中/等待`));let G=d(`p`,H);p(H,G),i(G,`mt-2 text-sm opacity-70`),p(G,l(`不必手动给每一步都写颜色，只有例外项再单独覆盖即可。`));let K=d(`div`,A);p(A,K),i(K,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let q=d(`div`,K);p(K,q),i(q,`text-xs font-semibold uppercase tracking-wide text-accent`),p(q,l(`内容增强`));let J=d(`div`,K);p(K,J),i(J,`mt-2 text-sm font-medium`),p(J,l(`支持标题、副标题、描述和进度点`));let Y=d(`p`,K);p(K,Y),i(Y,`mt-2 text-sm opacity-70`),p(Y,l(`适合把基础只能写一行文本的步骤条，扩展成更完整的流程说明区。`));let X=d(`h2`,n);p(n,X),p(X,l(`基础布局`));let Z=d(`p`,n);p(n,Z),p(Z,l(`这组示例使用 Rue 基础示例，用来展示最基础的横向、纵向和响应式排列方式。`));let oe=a(`rue:component:anchor`);p(n,oe),m(()=>{let e=v(w,{title:`Horizontal`,tab:t.horizontal,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(L,{"data-testid":`steps-horizontal`,children:[S(L.Step,{color:`primary`,children:`Register`}),S(L.Step,{color:`primary`,children:`Choose plan`}),S(L.Step,{children:`Purchase`}),S(L.Step,{children:`Receive Product`})]})})}),code:`<Steps>
  <Steps.Step color="primary">Register</Steps.Step>
  <Steps.Step color="primary">Choose plan</Steps.Step>
  <Steps.Step>Purchase</Steps.Step>
  <Steps.Step>Receive Product</Steps.Step>
</Steps>`});h(()=>_(e,n,oe))});let se=a(`rue:component:anchor`);p(n,se),m(()=>{let e=v(w,{title:`Vertical`,tab:t.vertical,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(L,{direction:`vertical`,children:[S(L.Step,{color:`primary`,children:`Register`}),S(L.Step,{color:`primary`,children:`Choose plan`}),S(L.Step,{children:`Purchase`}),S(L.Step,{children:`Receive Product`})]})})}),code:`<Steps direction="vertical">
  <Steps.Step color="primary">Register</Steps.Step>
  <Steps.Step color="primary">Choose plan</Steps.Step>
  <Steps.Step>Purchase</Steps.Step>
  <Steps.Step>Receive Product</Steps.Step>
</Steps>`});h(()=>_(e,n,se))});let ce=a(`rue:component:anchor`);p(n,ce),m(()=>{let e=v(w,{title:`Responsive`,tab:t.responsive,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(L,{direction:`vertical`,className:`lg:steps-horizontal`,children:[S(L.Step,{color:`primary`,children:`Register`}),S(L.Step,{color:`primary`,children:`Choose plan`}),S(L.Step,{children:`Purchase`}),S(L.Step,{children:`Receive Product`})]})})}),code:`<Steps direction="vertical" className="lg:steps-horizontal">
  <Steps.Step color="primary">Register</Steps.Step>
  <Steps.Step color="primary">Choose plan</Steps.Step>
  <Steps.Step>Purchase</Steps.Step>
  <Steps.Step>Receive Product</Steps.Step>
</Steps>`});h(()=>_(e,n,ce))});let le=d(`h2`,n);p(n,le),p(le,l(`视觉定制`));let Q=d(`p`,n);p(n,Q),p(Q,l(`这组示例展示当前 Rue 的静态能力，包括自定义 icon、data-content、语义色和滚动容器。`));let ue=a(`rue:component:anchor`);p(n,ue),m(()=>{let e=v(w,{title:`With custom content in step-icon`,tab:t.icons,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(L,{"data-testid":`steps-icons`,children:[x(L.Step,{color:`neutral`,children:[S(L.Icon,{children:`1`}),`Step 1`]}),x(L.Step,{color:`neutral`,children:[S(L.Icon,{children:`2`}),`Step 2`]}),x(L.Step,{children:[S(L.Icon,{children:`3`}),`Step 3`]})]})})}),code:`<Steps>
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
</Steps>`});h(()=>_(e,n,ue))});let de=a(`rue:component:anchor`);p(n,de),m(()=>{let e=v(w,{title:`With data-content`,tab:t.dataContent,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(L,{children:[S(L.Step,{color:`neutral`,"data-content":`?`,children:`Step 1`}),S(L.Step,{color:`neutral`,"data-content":`!`,children:`Step 2`}),S(L.Step,{color:`neutral`,"data-content":`✓`,children:`Step 3`}),S(L.Step,{color:`neutral`,"data-content":`✕`,children:`Step 4`}),S(L.Step,{color:`neutral`,"data-content":`★`,children:`Step 5`})]})})}),code:`<Steps>
  <Steps.Step color="neutral" data-content="?">Step 1</Steps.Step>
  <Steps.Step color="neutral" data-content="!">Step 2</Steps.Step>
  <Steps.Step color="neutral" data-content="✓">Step 3</Steps.Step>
  <Steps.Step color="neutral" data-content="✕">Step 4</Steps.Step>
  <Steps.Step color="neutral" data-content="★">Step 5</Steps.Step>
</Steps>`});h(()=>_(e,n,de))});let fe=a(`rue:component:anchor`);p(n,fe),m(()=>{let e=v(w,{title:`Custom colors`,tab:t.colors,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(L,{children:[S(L.Step,{color:`info`,children:`Fly to moon`}),S(L.Step,{color:`info`,children:`Shrink the moon`}),S(L.Step,{color:`info`,children:`Grab the moon`}),S(L.Step,{color:`error`,"data-content":`?`,children:`Sit on toilet`})]})})}),code:`<Steps>
  <Steps.Step color="info">Fly to moon</Steps.Step>
  <Steps.Step color="info">Shrink the moon</Steps.Step>
  <Steps.Step color="info">Grab the moon</Steps.Step>
  <Steps.Step color="error" data-content="?">Sit on toilet</Steps.Step>
</Steps>`});h(()=>_(e,n,fe))});let pe=a(`rue:component:anchor`);p(n,pe),m(()=>{let e=v(w,{title:`With scrollable wrapper`,tab:t.scrollable,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:S(ne,{})})}),code:`<div className="grid gap-5">
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
</div>`});h(()=>_(e,n,pe))});let me=d(`h2`,n);p(n,me),p(me,l(`语义 API`));let he=d(`p`,n);p(n,he),p(he,l(`下面这些示例展示的是这些的语义层能力，目标是让 Rue Steps 在不丢失当前风格的前提下更接近常见业务组件的使用体验。`));let ge=a(`rue:component:anchor`);p(n,ge),m(()=>{let e=v(w,{title:`Rich step content`,tab:t.richStep,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(L,{direction:`vertical`,children:[S(L.Step,{status:`finish`,title:`Connect repository`,description:`Link your GitHub repository and import the default build settings.`,icon:S(z,{})}),S(L.Step,{status:`process`,title:`Configure policies`,subTitle:`~ 2 mins`,description:`Set preview branches, branch protection, and deployment rules.`,icon:S(B,{})}),S(L.Step,{status:`wait`,title:`Ship to production`,description:`Merge the release branch after the final smoke test passes.`})]})})}),code:`<Steps direction="vertical">
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
</Steps>`});h(()=>_(e,n,ge))});let _e=a(`rue:component:anchor`);p(n,_e),m(()=>{let e=v(w,{title:`Items + current + status`,tab:t.items,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body gap-4`,children:[S(L,{current:1,status:`error`,items:[{title:`Account`,description:`Create workspace and invite collaborators.`,icon:S(z,{})},{title:`Verification`,subTitle:`Left 00:00:08`,description:`Waiting for security review and DNS validation.`,icon:S(B,{})},{title:`Payment`,description:`Unlock the production environment after confirmation.`,icon:S(ee,{})},{title:`Done`,description:`Your first deployment is ready.`,icon:S(te,{})}]}),x(`div`,{className:`text-sm opacity-70`,children:[`当前索引为 `,S(`code`,{children:`1`}),`，所以第 0 步自动完成，第 1 步继承根节点的`,` `,S(`code`,{children:`error`}),` 状态。`]})]})}),code:`<Steps
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
/>`});h(()=>_(e,n,_e))});let ve=a(`rue:component:anchor`);p(n,ve),m(()=>{let e=v(w,{title:`Clickable items`,tab:t.clickable,preview:S(re,{}),code:`const ClickableStepsDemo: FC = () => {
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
}`});h(()=>_(e,n,ve))});let ye=a(`rue:component:anchor`);p(n,ye),m(()=>{let e=v(w,{title:`Progress dot`,tab:t.progressDot,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:S(L,{progressDot:(e,t)=>S(`span`,{className:`tooltip tooltip-bottom`,"data-tip":`${t.title}`,children:e}),items:[{title:`Collect requirements`,description:`Align scope with design and engineering.`},{title:`BuildDemo`,description:`Create a stakeholder-ready flow.`},{title:`Launch beta`,description:`Open access to pilot users.`}]})})}),code:`<Steps
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
/>`});h(()=>_(e,n,ye))});let be=d(`h2`,n);p(n,be),p(be,l(`API`));let $=d(`p`,n);p(n,$);let xe=d(`code`,$);p($,xe),p(xe,l(`Steps`)),p($,l(`负责布局、状态推导与点击切换；`));let Se=d(`code`,$);p($,Se),p(Se,l(`Steps.Step`)),p($,l(`和`));let Ce=s($);p($,Ce),r(Ce,` `);let we=d(`code`,$);p($,we),p(we,l(`StepItem`)),p($,l(`共享同一组单步属性。`));let Te=d(`h3`,n);p(n,Te),p(Te,l(`Steps`));let Ee=a(`rue:component:anchor`);p(n,Ee),m(()=>{let e=v(R,{rows:ie});h(()=>_(e,n,Ee))});let De=d(`h3`,n);p(n,De),p(De,l(`Steps.Step / StepItem`));let Oe=a(`rue:component:anchor`);return p(n,Oe),m(()=>{let e=v(R,{rows:ae});h(()=>_(e,n,Oe))}),e})}),n,c),n})};export{V as default};