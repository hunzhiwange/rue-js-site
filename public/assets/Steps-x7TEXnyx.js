import{$t as e,Jt as t,Q as n,St as r,dt as i,et as a,in as o,it as s,l as c,lt as l,m as u,nt as d,o as f,rt as p,t as m,tt as h,vt as g,x as _,zt as v}from"./vapor-runtime-DsQWl-IB.js";import{a as y,n as b}from"./vapor-helpers-vapor-Dg64FcpK.js";import{a as x,i as S}from"./persistentSidebarPlayground-6jqnvaEa.js";import{r as C}from"./SidebarPlaygroundDesign-EU389JDE.js";import{t as w}from"./PreviewBlock-wHSyDiek.js";var T=(...e)=>e.filter(Boolean).join(` `),E=e=>Array.isArray(e)?e.flatMap(e=>E(e)):e==null||typeof e==`boolean`?[]:[e],D=(e,t)=>t?`${e} ${t}`:e,O=(e,t)=>t??e,k=(e,t)=>{if(t)return t;if(e===`error`)return`error`;if(e===`finish`||e===`process`)return`primary`},A=(e,t)=>{if(!t){if(e===`finish`)return`✓`;if(e===`error`)return`✕`}},j=e=>{typeof e.preventDefault==`function`&&e.preventDefault(),typeof e.stopPropagation==`function`&&e.stopPropagation()},M=e=>{let{cls:t}=y(`useSetup:0:0`,()=>o(()=>({cls:y(`computed:1:0`,()=>r(()=>e.status===`wait`?`inline-block size-2.5 rounded-full border border-base-300 bg-base-100`:`inline-block size-2.5 rounded-full bg-current`))})));return c(e=>{let n=d(`span`,e);return v(()=>{i(n,t.get())}),n})},N=(e,t)=>{if(!e)return;let n=S(M,{status:t.status});return typeof e==`function`?e(n,t):n},P=(e,t,n,r)=>e.status?e.status:typeof n==`number`?t<n?`finish`:t===n?r??`process`:`wait`:`wait`,F=(e,t,n)=>{let{nextChildren:i}=y(`useSetup:0:0:dup1`,()=>o(()=>({nextChildren:y(`computed:1:1`,()=>r(()=>E(n)))})));return _(e,t,...i.get())},I=({as:e=`li`,color:t,className:n,title:r,description:i,content:a,subTitle:o,icon:s,status:c,disabled:l,clickable:d,dataContent:f,children:p,index:m,onClick:h,onKeyDown:g,..._})=>{let v=e,y=a??i,b=r??p,C=d??!!h,w=k(c,t),T=f??_[`data-content`]??A(c,s!=null),E=r!=null||y!=null||o!=null||s!=null,O=_[`aria-current`]??(c===`process`?`step`:void 0),M=l?`true`:void 0,N=`step`;w&&(N+=` step-${w}`),C&&!l&&(N+=` cursor-pointer`),l&&(N+=` opacity-50`),C&&l&&(N+=` cursor-not-allowed`);let P=e=>{if(l){j(e);return}h&&h(e,m)},I=C?_.role??`button`:_.role,L=C?_.tabIndex??(l?-1:0):_.tabIndex,R=C?e=>{if(g&&g(e),e.defaultPrevented||l){l&&j(e);return}(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),P(e))}:_.onKeyDown,z=C?P:_.onClick,B=E?x(u,{children:[s==null?null:S(`span`,{className:D(`step-icon`,y==null?void 0:`mt-0.5`),"aria-hidden":`true`,children:s}),x(`span`,{className:`inline-flex min-w-0 flex-col gap-1 py-1 text-start`,children:[b!=null||o!=null?x(`span`,{className:`flex flex-wrap items-center gap-2 leading-tight`,children:[b==null?null:S(`span`,{className:`font-medium`,children:b}),o==null?null:S(`span`,{className:`text-xs opacity-60`,children:o})]}):null,y==null?null:S(`span`,{className:`text-xs leading-snug opacity-70`,children:y})]})]}):p;return F(v,{..._,className:D(N,n),...T==null?{}:{"data-content":T},role:I,tabIndex:L,onClick:z,onKeyDown:R,"aria-current":O,"aria-disabled":M},B)},L=Object.assign(({as:t=`ul`,direction:r,orientation:i,className:o,children:s,items:l,current:u,status:d,progressDot:p,onChange:g,..._})=>{let y=t,b=O(r,i),x=l&&l.length>0?l.map((t,r)=>{let i=P(t,r,u,d),o=t.icon??N(p,{index:r,status:i,title:t.title,description:t.description,content:t.content}),s=t.clickable??(!!g||!!t.onClick);return c(c=>{let l=h(),d=a(`rue:component:anchor`);return n(l,d),v(()=>{let n=m(I,{key:t.key??r,...t,index:r,status:i,color:k(i,t.color),icon:o,clickable:s,"aria-current":r===u?t[`aria-current`]??`step`:t[`aria-current`],onClick:(e,n)=>{t.disabled||(t.onClick&&typeof n==`number`&&t.onClick(e,n),g&&typeof n==`number`&&n!==u&&g(n))}});e(()=>f(n,l,d))}),l})}):s,S=`steps`;return b&&(S+=` steps-${b}`),F(y,{..._,className:T(S,o)},x)},{Step:I,Icon:({as:e=`span`,className:t,children:n,...r})=>F(e,{...r,className:D(`step-icon`,t)},n)}),R=t=>c(r=>{let o=d(`div`,r);i(o,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let s=d(`table`,o);n(o,s),i(s,`table table-zebra`);let u=d(`thead`,s);n(s,u);let m=d(`tr`,u);n(u,m);let g=d(`th`,m);n(m,g),n(g,p(`属性`));let _=d(`th`,m);n(m,_),n(_,p(`说明`));let y=d(`th`,m);n(m,y),n(y,p(`类型`));let x=d(`th`,m);n(m,x),n(x,p(`默认值`));let S=d(`tbody`,s);n(s,S);let C=a(`rue:list:start`),w=a(`rue:list:end`);n(S,C),n(S,w);let T=new Map;return v(()=>{T=b({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,r,i,o,s)=>{f(c(()=>{let r=h(),i=d(`tr`,r);n(r,i),v(()=>{l(i,`key`,String(t.prop))});let o=d(`td`,i);n(i,o);let s=d(`code`,o);n(o,s);let c=a(`rue:slot:anchor`);n(s,c),v(()=>{let n=t.prop;e(()=>f(n,s,c))});let u=d(`td`,i);n(i,u);let p=a(`rue:slot:anchor`);n(u,p),v(()=>{let n=t.description;e(()=>f(n,u,p))});let m=d(`td`,i);n(i,m);let g=d(`code`,m);n(m,g);let _=a(`rue:slot:anchor`);n(g,_),v(()=>{let n=t.type;e(()=>f(n,g,_))});let y=d(`td`,i);n(i,y);let b=d(`code`,y);n(y,b);let x=a(`rue:slot:anchor`);return n(b,x),v(()=>{let n=t.defaultValue;e(()=>f(n,b,x))}),r}),r,i)}})}),o}),z=()=>c(e=>{let t=d(`svg`,e);l(t,`xmlns`,`http://www.w3.org/2000/svg`),l(t,`viewBox`,`0 0 24 24`),l(t,`fill`,`none`),l(t,`stroke`,`currentColor`),l(t,`strokeWidth`,`2`),i(t,`size-[1.05em]`);let r=d(`path`,t);n(t,r),l(r,`strokeLinecap`,`round`),l(r,`strokeLinejoin`,`round`),l(r,`d`,`M6 20a6 6 0 0 1 12 0`);let a=d(`circle`,t);return n(t,a),l(a,`cx`,`12`),l(a,`cy`,`9`),l(a,`r`,`4`),t}),B=()=>c(e=>{let t=d(`svg`,e);l(t,`xmlns`,`http://www.w3.org/2000/svg`),l(t,`viewBox`,`0 0 24 24`),l(t,`fill`,`none`),l(t,`stroke`,`currentColor`),l(t,`strokeWidth`,`2`),i(t,`size-[1.05em]`);let r=d(`path`,t);n(t,r),l(r,`strokeLinecap`,`round`),l(r,`strokeLinejoin`,`round`),l(r,`d`,`m12 3 1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3Z`);let a=d(`path`,t);return n(t,a),l(a,`strokeLinecap`,`round`),l(a,`strokeLinejoin`,`round`),l(a,`d`,`M5 18h.01M19 18h.01M12 21h.01`),t}),ee=()=>c(e=>{let t=d(`svg`,e);l(t,`xmlns`,`http://www.w3.org/2000/svg`),l(t,`viewBox`,`0 0 24 24`),l(t,`fill`,`none`),l(t,`stroke`,`currentColor`),l(t,`strokeWidth`,`2`),i(t,`size-[1.05em]`);let r=d(`rect`,t);n(t,r),l(r,`x`,`3`),l(r,`y`,`5`),l(r,`width`,`18`),l(r,`height`,`14`),l(r,`rx`,`2`);let a=d(`path`,t);return n(t,a),l(a,`strokeLinecap`,`round`),l(a,`strokeLinejoin`,`round`),l(a,`d`,`M3 10h18`),t}),te=()=>c(e=>{let t=d(`svg`,e);l(t,`xmlns`,`http://www.w3.org/2000/svg`),l(t,`viewBox`,`0 0 24 24`),l(t,`fill`,`none`),l(t,`stroke`,`currentColor`),l(t,`strokeWidth`,`2`),i(t,`size-[1.05em]`);let r=d(`circle`,t);n(t,r),l(r,`cx`,`12`),l(r,`cy`,`12`),l(r,`r`,`9`);let a=d(`path`,t);n(t,a),l(a,`strokeLinecap`,`round`),l(a,`strokeLinejoin`,`round`),l(a,`d`,`M8 14s1.5 2 4 2 4-2 4-2`);let o=d(`path`,t);return n(t,o),l(o,`strokeLinecap`,`round`),l(o,`strokeLinejoin`,`round`),l(o,`d`,`M9 10h.01M15 10h.01`),t}),ne=()=>c(e=>{let t=d(`div`,e);i(t,`grid gap-5`);let r=d(`div`,t);n(t,r),i(r,`space-y-2`);let o=d(`div`,r);n(r,o),i(o,`text-sm font-medium`),n(o,p(`长标签交付流程`));let s=d(`div`,r);n(r,s),i(s,`max-w-xl overflow-x-auto pb-2`),l(s,`data-testid`,`steps-scroll-wrapper`);let u=a(`rue:component:anchor`);n(s,u),f(m(L,{className:`min-w-[1120px]`,children:c(()=>{let e=h(),t=a(`rue:component:anchor`);n(e,t),f(m(L.Step,{color:`primary`,children:`需求确认`}),e,t);let r=a(`rue:component:anchor`);n(e,r),f(m(L.Step,{color:`primary`,children:`设计评审与资源排期`}),e,r);let i=a(`rue:component:anchor`);n(e,i),f(m(L.Step,{color:`primary`,children:`前后端联调验收`}),e,i);let o=a(`rue:component:anchor`);n(e,o),f(m(L.Step,{color:`secondary`,children:`灰度发布到内部环境`}),e,o);let s=a(`rue:component:anchor`);n(e,s),f(m(L.Step,{color:`secondary`,children:`邀请试点客户体验`}),e,s);let c=a(`rue:component:anchor`);n(e,c),f(m(L.Step,{color:`accent`,children:`收集反馈并修复阻塞问题`}),e,c);let l=a(`rue:component:anchor`);n(e,l),f(m(L.Step,{color:`accent`,children:`准备正式发布说明`}),e,l);let u=a(`rue:component:anchor`);n(e,u),f(m(L.Step,{color:`warning`,children:`上线窗口审批`}),e,u);let d=a(`rue:component:anchor`);n(e,d),f(m(L.Step,{color:`warning`,children:`生产环境发布`}),e,d);let p=a(`rue:component:anchor`);n(e,p),f(m(L.Step,{color:`success`,children:`发布后巡检`}),e,p);let g=a(`rue:component:anchor`);return n(e,g),f(m(L.Step,{color:`neutral`,children:`归档复盘`}),e,g),e})}),s,u);let g=d(`div`,t);n(t,g),i(g,`space-y-2`);let _=d(`div`,g);n(g,_),i(_,`text-sm font-medium`),n(_,p(`编号里程碑`));let v=d(`div`,g);n(g,v),i(v,`max-w-md overflow-x-auto pb-2`);let y=a(`rue:component:anchor`);return n(v,y),f(m(L,{className:`min-w-[960px]`,children:c(()=>{let e=h(),t=a(`rue:component:anchor`);n(e,t),f(m(L.Step,{color:`neutral`,children:`Start`}),e,t);let r=a(`rue:component:anchor`);n(e,r),f(m(L.Step,{color:`secondary`,children:`02`}),e,r);let i=a(`rue:component:anchor`);n(e,i),f(m(L.Step,{color:`secondary`,children:`03`}),e,i);let o=a(`rue:component:anchor`);n(e,o),f(m(L.Step,{color:`secondary`,children:`04`}),e,o);let s=a(`rue:component:anchor`);n(e,s),f(m(L.Step,{children:`05`}),e,s);let c=a(`rue:component:anchor`);n(e,c),f(m(L.Step,{color:`accent`,children:`06`}),e,c);let l=a(`rue:component:anchor`);n(e,l),f(m(L.Step,{color:`accent`,children:`07`}),e,l);let u=a(`rue:component:anchor`);n(e,u),f(m(L.Step,{children:`08`}),e,u);let d=a(`rue:component:anchor`);n(e,d),f(m(L.Step,{color:`info`,children:`09`}),e,d);let p=a(`rue:component:anchor`);n(e,p),f(m(L.Step,{color:`info`,children:`10`}),e,p);let g=a(`rue:component:anchor`);n(e,g),f(m(L.Step,{color:`error`,children:`11`}),e,g);let _=a(`rue:component:anchor`);n(e,_),f(m(L.Step,{color:`warning`,children:`12`}),e,_);let v=a(`rue:component:anchor`);return n(e,v),f(m(L.Step,{color:`neutral`,children:`End`}),e,v),e})}),v,y),t}),re=()=>{let{current:r}=y(`useSetup:0:0`,()=>o(()=>({current:y(`ref:1:0`,()=>t(0))})));return c(t=>{let o=d(`div`,t);i(o,`card bg-base-100 shadow-sm`);let c=d(`div`,o);n(o,c),i(c,`card-body gap-4`);let l=a(`rue:component:anchor`);n(c,l),v(()=>{let t=m(L,{current:r.value,onChange:e=>r.value=e,items:[{title:`Draft`,description:`Prepare the release scope and changelog.`,clickable:!0},{title:`Review`,description:`QA and product approve the rollout plan.`,clickable:!0},{title:`Deploy`,description:`Promote the release to production.`,clickable:!0}]});e(()=>f(t,c,l))});let u=d(`div`,c);n(c,u),i(u,`rounded-box border border-dashed border-base-300 bg-base-200/50 px-4 py-3 text-sm`),n(u,p(`点击步骤可切换，当前选中步骤：`));let h=d(`code`,u);n(u,h);let _=s(h);return n(h,_),v(()=>{g(_,r.value)}),o})},ie=[{prop:`direction / orientation`,description:`设置整体朝向；支持使用 Rue 基础的 direction 写法，也支持更通用的 orientation 别名。`,type:`'horizontal' | 'vertical'`,defaultValue:`-`},{prop:`items`,description:`数据驱动模式，适合与 current、status、onChange 一起使用。`,type:`StepItem[]`,defaultValue:`-`},{prop:`current`,description:`当前进行中的步骤索引；前面的步骤自动推导为完成态，后面的步骤自动推导为等待态。`,type:`number`,defaultValue:`-`},{prop:`status`,description:`当前步骤的全局状态覆盖，仅作用于 current 命中的步骤。`,type:`'wait' | 'process' | 'finish' | 'error'`,defaultValue:`'process'`},{prop:`progressDot`,description:`切换为进度点模式，也支持自定义 dot 渲染函数。`,type:`boolean | (dot, info) => any`,defaultValue:`false`},{prop:`onChange`,description:`搭配 items 使用时启用点击切换，回传目标步骤索引。`,type:`(current: number) => void`,defaultValue:`-`}],ae=[{prop:`color`,description:`直接指定 Rue 语义色；未指定时会根据 status 自动映射。`,type:`'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'`,defaultValue:`按 status 推导`},{prop:`title`,description:`步骤主标题；在 children 写法中可与 description、subTitle、icon 组合为语义化内容区。`,type:`any`,defaultValue:`-`},{prop:`description / content`,description:`标题下方的补充说明文字；content 优先级高于 description。`,type:`any`,defaultValue:`-`},{prop:`subTitle`,description:`标题旁边的次级信息，适合展示倒计时、状态文案等。`,type:`any`,defaultValue:`-`},{prop:`icon`,description:`自定义步骤图标；支持基础的 <Steps.Icon /> 插槽写法。`,type:`any`,defaultValue:`-`},{prop:`status`,description:`单步状态，可覆盖根组件根据 current 推导的结果。`,type:`'wait' | 'process' | 'finish' | 'error'`,defaultValue:`-`},{prop:`dataContent / data-content`,description:`直接控制 daisyUI step 圆点中的字符，适合问号、勾号或自定义符号。`,type:`string`,defaultValue:`-`},{prop:`clickable / disabled`,description:`控制单步是否可交互，以及是否禁用点击切换。`,type:`boolean`,defaultValue:`false`}],V=()=>{let{tabs:r}=y(`useSetup:0:0:dup1`,()=>o(()=>({tabs:{horizontal:y(`ref:1:1`,()=>t(`preview`)),vertical:y(`ref:1:2`,()=>t(`preview`)),responsive:y(`ref:1:3`,()=>t(`preview`)),icons:y(`ref:1:4`,()=>t(`preview`)),dataContent:y(`ref:1:5`,()=>t(`preview`)),colors:y(`ref:1:6`,()=>t(`preview`)),scrollable:y(`ref:1:7`,()=>t(`preview`)),richStep:y(`ref:1:8`,()=>t(`preview`)),items:y(`ref:1:9`,()=>t(`preview`)),clickable:y(`ref:1:10`,()=>t(`preview`)),progressDot:y(`ref:1:11`,()=>t(`preview`))}})));return c(t=>{let o=h(),l=a(`rue:component:anchor`);return n(o,l),f(m(C,{children:c(()=>{let t=h(),o=d(`div`,t);n(t,o),i(o,`max-w-none prose prose-sm md:prose-base`);let c=d(`h1`,o);n(o,c),n(c,p(`Steps 步骤条`));let l=d(`p`,o);n(o,l),i(l,`text-sm mt-3 mb-3`),n(l,p(`Rue Steps 展示 daisyUI 的轻量视觉风格，同时补充更贴近成熟业务组件的数据驱动 API： 支持`));let u=s(l);n(l,u),g(u,` `);let _=d(`code`,l);n(l,_),n(_,p(`items`)),n(l,p(`、`));let y=d(`code`,l);n(l,y),n(y,p(`current`)),n(l,p(`、`));let b=d(`code`,l);n(l,b),n(b,p(`status`)),n(l,p(`、`));let C=d(`code`,l);n(l,C),n(C,p(`progressDot`)),n(l,p(`、`));let T=d(`code`,l);n(l,T),n(T,p(`onChange`)),n(l,p(`，以及单步级别的`));let E=d(`code`,l);n(l,E),n(E,p(`title`)),n(l,p(`、`));let D=d(`code`,l);n(l,D),n(D,p(`description`)),n(l,p(`、`));let O=d(`code`,l);n(l,O),n(O,p(`subTitle`)),n(l,p(`和`));let k=d(`code`,l);n(l,k),n(k,p(`icon`)),n(l,p(`。`));let A=d(`div`,o);n(o,A),i(A,`not-prose mt-6 grid gap-4 md:grid-cols-3`);let j=d(`div`,A);n(A,j),i(j,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let M=d(`div`,j);n(j,M),i(M,`text-xs font-semibold uppercase tracking-wide text-primary`),n(M,p(`双模式`));let N=d(`div`,j);n(j,N),i(N,`mt-2 text-sm font-medium`),n(N,p(`children / items 都可用`));let P=d(`p`,j);n(j,P),i(P,`mt-2 text-sm opacity-70`),n(P,p(`基础的`));let F=d(`code`,P);n(P,F),n(F,p(`Steps.Step`)),n(P,p(`和`));let I=d(`code`,P);n(P,I),n(I,p(`Steps.Icon`));let V=s(P);n(P,V),g(V,` `),n(P,p(`不变，新场景可直接传入数据数组。`));let H=d(`div`,A);n(A,H),i(H,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let U=d(`div`,H);n(H,U),i(U,`text-xs font-semibold uppercase tracking-wide text-secondary`),n(U,p(`状态推导`));let W=d(`div`,H);n(H,W),i(W,`mt-2 text-sm font-medium`),n(W,p(`current 自动推导完成/进行中/等待`));let G=d(`p`,H);n(H,G),i(G,`mt-2 text-sm opacity-70`),n(G,p(`不必手动给每一步都写颜色，只有例外项再单独覆盖即可。`));let K=d(`div`,A);n(A,K),i(K,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let q=d(`div`,K);n(K,q),i(q,`text-xs font-semibold uppercase tracking-wide text-accent`),n(q,p(`内容增强`));let J=d(`div`,K);n(K,J),i(J,`mt-2 text-sm font-medium`),n(J,p(`支持标题、副标题、描述和进度点`));let Y=d(`p`,K);n(K,Y),i(Y,`mt-2 text-sm opacity-70`),n(Y,p(`适合把基础只能写一行文本的步骤条，扩展成更完整的流程说明区。`));let X=d(`h2`,o);n(o,X),n(X,p(`基础布局`));let Z=d(`p`,o);n(o,Z),n(Z,p(`这组示例使用 Rue 基础示例，用来展示最基础的横向、纵向和响应式排列方式。`));let oe=a(`rue:component:anchor`);n(o,oe),v(()=>{let t=m(w,{title:`Horizontal`,tab:r.horizontal,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(L,{"data-testid":`steps-horizontal`,children:[S(L.Step,{color:`primary`,children:`Register`}),S(L.Step,{color:`primary`,children:`Choose plan`}),S(L.Step,{children:`Purchase`}),S(L.Step,{children:`Receive Product`})]})})}),code:`<Steps>
  <Steps.Step color="primary">Register</Steps.Step>
  <Steps.Step color="primary">Choose plan</Steps.Step>
  <Steps.Step>Purchase</Steps.Step>
  <Steps.Step>Receive Product</Steps.Step>
</Steps>`});e(()=>f(t,o,oe))});let se=a(`rue:component:anchor`);n(o,se),v(()=>{let t=m(w,{title:`Vertical`,tab:r.vertical,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(L,{direction:`vertical`,children:[S(L.Step,{color:`primary`,children:`Register`}),S(L.Step,{color:`primary`,children:`Choose plan`}),S(L.Step,{children:`Purchase`}),S(L.Step,{children:`Receive Product`})]})})}),code:`<Steps direction="vertical">
  <Steps.Step color="primary">Register</Steps.Step>
  <Steps.Step color="primary">Choose plan</Steps.Step>
  <Steps.Step>Purchase</Steps.Step>
  <Steps.Step>Receive Product</Steps.Step>
</Steps>`});e(()=>f(t,o,se))});let ce=a(`rue:component:anchor`);n(o,ce),v(()=>{let t=m(w,{title:`Responsive`,tab:r.responsive,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(L,{direction:`vertical`,className:`lg:steps-horizontal`,children:[S(L.Step,{color:`primary`,children:`Register`}),S(L.Step,{color:`primary`,children:`Choose plan`}),S(L.Step,{children:`Purchase`}),S(L.Step,{children:`Receive Product`})]})})}),code:`<Steps direction="vertical" className="lg:steps-horizontal">
  <Steps.Step color="primary">Register</Steps.Step>
  <Steps.Step color="primary">Choose plan</Steps.Step>
  <Steps.Step>Purchase</Steps.Step>
  <Steps.Step>Receive Product</Steps.Step>
</Steps>`});e(()=>f(t,o,ce))});let le=d(`h2`,o);n(o,le),n(le,p(`视觉定制`));let Q=d(`p`,o);n(o,Q),n(Q,p(`这组示例展示当前 Rue 的静态能力，包括自定义 icon、data-content、语义色和滚动容器。`));let ue=a(`rue:component:anchor`);n(o,ue),v(()=>{let t=m(w,{title:`With custom content in step-icon`,tab:r.icons,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(L,{"data-testid":`steps-icons`,children:[x(L.Step,{color:`neutral`,children:[S(L.Icon,{children:`1`}),`Step 1`]}),x(L.Step,{color:`neutral`,children:[S(L.Icon,{children:`2`}),`Step 2`]}),x(L.Step,{children:[S(L.Icon,{children:`3`}),`Step 3`]})]})})}),code:`<Steps>
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
</Steps>`});e(()=>f(t,o,ue))});let de=a(`rue:component:anchor`);n(o,de),v(()=>{let t=m(w,{title:`With data-content`,tab:r.dataContent,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(L,{children:[S(L.Step,{color:`neutral`,"data-content":`?`,children:`Step 1`}),S(L.Step,{color:`neutral`,"data-content":`!`,children:`Step 2`}),S(L.Step,{color:`neutral`,"data-content":`✓`,children:`Step 3`}),S(L.Step,{color:`neutral`,"data-content":`✕`,children:`Step 4`}),S(L.Step,{color:`neutral`,"data-content":`★`,children:`Step 5`})]})})}),code:`<Steps>
  <Steps.Step color="neutral" data-content="?">Step 1</Steps.Step>
  <Steps.Step color="neutral" data-content="!">Step 2</Steps.Step>
  <Steps.Step color="neutral" data-content="✓">Step 3</Steps.Step>
  <Steps.Step color="neutral" data-content="✕">Step 4</Steps.Step>
  <Steps.Step color="neutral" data-content="★">Step 5</Steps.Step>
</Steps>`});e(()=>f(t,o,de))});let fe=a(`rue:component:anchor`);n(o,fe),v(()=>{let t=m(w,{title:`Custom colors`,tab:r.colors,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(L,{children:[S(L.Step,{color:`info`,children:`Fly to moon`}),S(L.Step,{color:`info`,children:`Shrink the moon`}),S(L.Step,{color:`info`,children:`Grab the moon`}),S(L.Step,{color:`error`,"data-content":`?`,children:`Sit on toilet`})]})})}),code:`<Steps>
  <Steps.Step color="info">Fly to moon</Steps.Step>
  <Steps.Step color="info">Shrink the moon</Steps.Step>
  <Steps.Step color="info">Grab the moon</Steps.Step>
  <Steps.Step color="error" data-content="?">Sit on toilet</Steps.Step>
</Steps>`});e(()=>f(t,o,fe))});let pe=a(`rue:component:anchor`);n(o,pe),v(()=>{let t=m(w,{title:`With scrollable wrapper`,tab:r.scrollable,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:S(ne,{})})}),code:`<div className="grid gap-5">
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
</div>`});e(()=>f(t,o,pe))});let me=d(`h2`,o);n(o,me),n(me,p(`语义 API`));let he=d(`p`,o);n(o,he),n(he,p(`下面这些示例展示的是这些的语义层能力，目标是让 Rue Steps 在不丢失当前风格的前提下更接近常见业务组件的使用体验。`));let ge=a(`rue:component:anchor`);n(o,ge),v(()=>{let t=m(w,{title:`Rich step content`,tab:r.richStep,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(L,{direction:`vertical`,children:[S(L.Step,{status:`finish`,title:`Connect repository`,description:`Link your GitHub repository and import the default build settings.`,icon:S(z,{})}),S(L.Step,{status:`process`,title:`Configure policies`,subTitle:`~ 2 mins`,description:`Set preview branches, branch protection, and deployment rules.`,icon:S(B,{})}),S(L.Step,{status:`wait`,title:`Ship to production`,description:`Merge the release branch after the final smoke test passes.`})]})})}),code:`<Steps direction="vertical">
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
</Steps>`});e(()=>f(t,o,ge))});let _e=a(`rue:component:anchor`);n(o,_e),v(()=>{let t=m(w,{title:`Items + current + status`,tab:r.items,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body gap-4`,children:[S(L,{current:1,status:`error`,items:[{title:`Account`,description:`Create workspace and invite collaborators.`,icon:S(z,{})},{title:`Verification`,subTitle:`Left 00:00:08`,description:`Waiting for security review and DNS validation.`,icon:S(B,{})},{title:`Payment`,description:`Unlock the production environment after confirmation.`,icon:S(ee,{})},{title:`Done`,description:`Your first deployment is ready.`,icon:S(te,{})}]}),x(`div`,{className:`text-sm opacity-70`,children:[`当前索引为 `,S(`code`,{children:`1`}),`，所以第 0 步自动完成，第 1 步继承根节点的`,` `,S(`code`,{children:`error`}),` 状态。`]})]})}),code:`<Steps
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
/>`});e(()=>f(t,o,_e))});let ve=a(`rue:component:anchor`);n(o,ve),v(()=>{let t=m(w,{title:`Clickable items`,tab:r.clickable,preview:S(re,{}),code:`const ClickableStepsDemo: FC = () => {
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
}`});e(()=>f(t,o,ve))});let ye=a(`rue:component:anchor`);n(o,ye),v(()=>{let t=m(w,{title:`Progress dot`,tab:r.progressDot,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:S(L,{progressDot:(e,t)=>S(`span`,{className:`tooltip tooltip-bottom`,"data-tip":`${t.title}`,children:e}),items:[{title:`Collect requirements`,description:`Align scope with design and engineering.`},{title:`BuildDemo`,description:`Create a stakeholder-ready flow.`},{title:`Launch beta`,description:`Open access to pilot users.`}]})})}),code:`<Steps
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
/>`});e(()=>f(t,o,ye))});let be=d(`h2`,o);n(o,be),n(be,p(`API`));let $=d(`p`,o);n(o,$);let xe=d(`code`,$);n($,xe),n(xe,p(`Steps`)),n($,p(`负责布局、状态推导与点击切换；`));let Se=d(`code`,$);n($,Se),n(Se,p(`Steps.Step`)),n($,p(`和`));let Ce=s($);n($,Ce),g(Ce,` `);let we=d(`code`,$);n($,we),n(we,p(`StepItem`)),n($,p(`共享同一组单步属性。`));let Te=d(`h3`,o);n(o,Te),n(Te,p(`Steps`));let Ee=a(`rue:component:anchor`);n(o,Ee),v(()=>{let t=m(R,{rows:ie});e(()=>f(t,o,Ee))});let De=d(`h3`,o);n(o,De),n(De,p(`Steps.Step / StepItem`));let Oe=a(`rue:component:anchor`);return n(o,Oe),v(()=>{let t=m(R,{rows:ae});e(()=>f(t,o,Oe))}),t})}),o,l),o})};export{V as default};