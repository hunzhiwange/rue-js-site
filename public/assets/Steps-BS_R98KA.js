import{$ as e,Ht as t,J as n,Lt as r,Q as i,X as a,Xt as o,Z as s,at as c,et as l,gt as u,l as d,p as f,pt as p,qt as m,s as h,st as g,t as _,x as v}from"./vapor-runtime-iQZthBPQ.js";import{a as y,n as b}from"./vapor-helpers-vapor-BjKHCvOa.js";import{a as x,i as S}from"./persistentSidebarPlayground-BfF7yM0K.js";import{r as C}from"./SidebarPlaygroundDesign-BcHYLGe4.js";import{t as w}from"./PreviewBlock-DJFn4Hia.js";var T=(...e)=>e.filter(Boolean).join(` `),E=e=>Array.isArray(e)?e.flatMap(e=>E(e)):e==null||typeof e==`boolean`?[]:[e],D=(e,t)=>t?`${e} ${t}`:e,O=(e,t)=>t??e,k=(e,t)=>{if(t)return t;if(e===`error`)return`error`;if(e===`finish`||e===`process`)return`primary`},A=(e,t)=>{if(!t){if(e===`finish`)return`✓`;if(e===`error`)return`✕`}},j=e=>{typeof e.preventDefault==`function`&&e.preventDefault(),typeof e.stopPropagation==`function`&&e.stopPropagation()},M=e=>{let{cls:t}=y(`useSetup:0:0`,()=>m(()=>({cls:y(`computed:1:0`,()=>u(()=>e.status===`wait`?`inline-block size-2.5 rounded-full border border-base-300 bg-base-100`:`inline-block size-2.5 rounded-full bg-current`))})));return d(e=>{let n=i(`span`,e);return o(()=>{g(n,t.get())}),n})},N=(e,t)=>{if(!e)return;let n=S(M,{status:t.status});return typeof e==`function`?e(n,t):n},P=(e,t,n,r)=>e.status?e.status:typeof n==`number`?t<n?`finish`:t===n?r??`process`:`wait`:`wait`,F=(e,t,n)=>{let{nextChildren:r}=y(`useSetup:0:0:dup1`,()=>m(()=>({nextChildren:y(`computed:1:1`,()=>u(()=>E(n)))})));return v(e,t,...r.get())},I=({as:e=`li`,color:t,className:n,title:r,description:i,content:a,subTitle:o,icon:s,status:c,disabled:l,clickable:u,dataContent:d,children:p,index:m,onClick:h,onKeyDown:g,..._})=>{let v=e,y=a??i,b=r??p,C=u??!!h,w=k(c,t),T=d??_[`data-content`]??A(c,s!=null),E=r!=null||y!=null||o!=null||s!=null,O=_[`aria-current`]??(c===`process`?`step`:void 0),M=l?`true`:void 0,N=`step`;w&&(N+=` step-${w}`),C&&!l&&(N+=` cursor-pointer`),l&&(N+=` opacity-50`),C&&l&&(N+=` cursor-not-allowed`);let P=e=>{if(l){j(e);return}h&&h(e,m)},I=C?_.role??`button`:_.role,L=C?_.tabIndex??(l?-1:0):_.tabIndex,R=C?e=>{if(g&&g(e),e.defaultPrevented||l){l&&j(e);return}(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),P(e))}:_.onKeyDown,z=C?P:_.onClick,B=E?x(f,{children:[s==null?null:S(`span`,{className:D(`step-icon`,y==null?void 0:`mt-0.5`),"aria-hidden":`true`,children:s}),x(`span`,{className:`inline-flex min-w-0 flex-col gap-1 py-1 text-start`,children:[b!=null||o!=null?x(`span`,{className:`flex flex-wrap items-center gap-2 leading-tight`,children:[b==null?null:S(`span`,{className:`font-medium`,children:b}),o==null?null:S(`span`,{className:`text-xs opacity-60`,children:o})]}):null,y==null?null:S(`span`,{className:`text-xs leading-snug opacity-70`,children:y})]})]}):p;return F(v,{..._,className:D(N,n),...T==null?{}:{"data-content":T},role:I,tabIndex:L,onClick:z,onKeyDown:R,"aria-current":O,"aria-disabled":M},B)},L=Object.assign(({as:e=`ul`,direction:r,orientation:i,className:c,children:l,items:u,current:f,status:p,progressDot:m,onChange:g,...v})=>{let y=e,b=O(r,i),x=u&&u.length>0?u.map((e,r)=>{let i=P(e,r,f,p),c=e.icon??N(m,{index:r,status:i,title:e.title,description:e.description,content:e.content}),l=e.clickable??(!!g||!!e.onClick);return d(u=>{let d=s(),p=a(`rue:component:anchor`);return n(d,p),o(()=>{let n=_(I,{key:e.key??r,...e,index:r,status:i,color:k(i,e.color),icon:c,clickable:l,"aria-current":r===f?e[`aria-current`]??`step`:e[`aria-current`],onClick:(t,n)=>{e.disabled||(e.onClick&&typeof n==`number`&&e.onClick(t,n),g&&typeof n==`number`&&n!==f&&g(n))}});t(()=>h(n,d,p))}),d})}):l,S=`steps`;return b&&(S+=` steps-${b}`),F(y,{...v,className:T(S,c)},x)},{Step:I,Icon:({as:e=`span`,className:t,children:n,...r})=>F(e,{...r,className:D(`step-icon`,t)},n)}),R=r=>d(l=>{let u=i(`div`,l);g(u,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=i(`table`,u);n(u,f),g(f,`table table-zebra`);let p=i(`thead`,f);n(f,p);let m=i(`tr`,p);n(p,m);let _=i(`th`,m);n(m,_),n(_,e(`属性`));let v=i(`th`,m);n(m,v),n(v,e(`说明`));let y=i(`th`,m);n(m,y),n(y,e(`类型`));let x=i(`th`,m);n(m,x),n(x,e(`默认值`));let S=i(`tbody`,f);n(f,S);let C=a(`rue:list:start`),w=a(`rue:list:end`);n(S,C),n(S,w);let T=new Map;return o(()=>{T=b({items:r.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,r,l,u,f)=>{h(d(()=>{let r=s(),l=i(`tr`,r);n(r,l),o(()=>{c(l,`key`,String(e.prop))});let u=i(`td`,l);n(l,u);let d=i(`code`,u);n(u,d);let f=a(`rue:slot:anchor`);n(d,f),o(()=>{let n=e.prop;t(()=>h(n,d,f))});let p=i(`td`,l);n(l,p);let m=a(`rue:slot:anchor`);n(p,m),o(()=>{let n=e.description;t(()=>h(n,p,m))});let g=i(`td`,l);n(l,g);let _=i(`code`,g);n(g,_);let v=a(`rue:slot:anchor`);n(_,v),o(()=>{let n=e.type;t(()=>h(n,_,v))});let y=i(`td`,l);n(l,y);let b=i(`code`,y);n(y,b);let x=a(`rue:slot:anchor`);return n(b,x),o(()=>{let n=e.defaultValue;t(()=>h(n,b,x))}),r}),r,l)}})}),u}),z=()=>d(e=>{let t=i(`svg`,e);c(t,`xmlns`,`http://www.w3.org/2000/svg`),c(t,`viewBox`,`0 0 24 24`),c(t,`fill`,`none`),c(t,`stroke`,`currentColor`),c(t,`strokeWidth`,`2`),g(t,`size-[1.05em]`);let r=i(`path`,t);n(t,r),c(r,`strokeLinecap`,`round`),c(r,`strokeLinejoin`,`round`),c(r,`d`,`M6 20a6 6 0 0 1 12 0`);let a=i(`circle`,t);return n(t,a),c(a,`cx`,`12`),c(a,`cy`,`9`),c(a,`r`,`4`),t}),B=()=>d(e=>{let t=i(`svg`,e);c(t,`xmlns`,`http://www.w3.org/2000/svg`),c(t,`viewBox`,`0 0 24 24`),c(t,`fill`,`none`),c(t,`stroke`,`currentColor`),c(t,`strokeWidth`,`2`),g(t,`size-[1.05em]`);let r=i(`path`,t);n(t,r),c(r,`strokeLinecap`,`round`),c(r,`strokeLinejoin`,`round`),c(r,`d`,`m12 3 1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3Z`);let a=i(`path`,t);return n(t,a),c(a,`strokeLinecap`,`round`),c(a,`strokeLinejoin`,`round`),c(a,`d`,`M5 18h.01M19 18h.01M12 21h.01`),t}),ee=()=>d(e=>{let t=i(`svg`,e);c(t,`xmlns`,`http://www.w3.org/2000/svg`),c(t,`viewBox`,`0 0 24 24`),c(t,`fill`,`none`),c(t,`stroke`,`currentColor`),c(t,`strokeWidth`,`2`),g(t,`size-[1.05em]`);let r=i(`rect`,t);n(t,r),c(r,`x`,`3`),c(r,`y`,`5`),c(r,`width`,`18`),c(r,`height`,`14`),c(r,`rx`,`2`);let a=i(`path`,t);return n(t,a),c(a,`strokeLinecap`,`round`),c(a,`strokeLinejoin`,`round`),c(a,`d`,`M3 10h18`),t}),te=()=>d(e=>{let t=i(`svg`,e);c(t,`xmlns`,`http://www.w3.org/2000/svg`),c(t,`viewBox`,`0 0 24 24`),c(t,`fill`,`none`),c(t,`stroke`,`currentColor`),c(t,`strokeWidth`,`2`),g(t,`size-[1.05em]`);let r=i(`circle`,t);n(t,r),c(r,`cx`,`12`),c(r,`cy`,`12`),c(r,`r`,`9`);let a=i(`path`,t);n(t,a),c(a,`strokeLinecap`,`round`),c(a,`strokeLinejoin`,`round`),c(a,`d`,`M8 14s1.5 2 4 2 4-2 4-2`);let o=i(`path`,t);return n(t,o),c(o,`strokeLinecap`,`round`),c(o,`strokeLinejoin`,`round`),c(o,`d`,`M9 10h.01M15 10h.01`),t}),ne=()=>d(t=>{let r=i(`div`,t);g(r,`grid gap-5`);let o=i(`div`,r);n(r,o),g(o,`space-y-2`);let l=i(`div`,o);n(o,l),g(l,`text-sm font-medium`),n(l,e(`长标签交付流程`));let u=i(`div`,o);n(o,u),g(u,`max-w-xl overflow-x-auto pb-2`),c(u,`data-testid`,`steps-scroll-wrapper`);let f=a(`rue:component:anchor`);n(u,f),h(_(L,{className:`min-w-[1120px]`,children:d(()=>{let e=s(),t=a(`rue:component:anchor`);n(e,t),h(_(L.Step,{color:`primary`,children:`需求确认`}),e,t);let r=a(`rue:component:anchor`);n(e,r),h(_(L.Step,{color:`primary`,children:`设计评审与资源排期`}),e,r);let i=a(`rue:component:anchor`);n(e,i),h(_(L.Step,{color:`primary`,children:`前后端联调验收`}),e,i);let o=a(`rue:component:anchor`);n(e,o),h(_(L.Step,{color:`secondary`,children:`灰度发布到内部环境`}),e,o);let c=a(`rue:component:anchor`);n(e,c),h(_(L.Step,{color:`secondary`,children:`邀请试点客户体验`}),e,c);let l=a(`rue:component:anchor`);n(e,l),h(_(L.Step,{color:`accent`,children:`收集反馈并修复阻塞问题`}),e,l);let u=a(`rue:component:anchor`);n(e,u),h(_(L.Step,{color:`accent`,children:`准备正式发布说明`}),e,u);let d=a(`rue:component:anchor`);n(e,d),h(_(L.Step,{color:`warning`,children:`上线窗口审批`}),e,d);let f=a(`rue:component:anchor`);n(e,f),h(_(L.Step,{color:`warning`,children:`生产环境发布`}),e,f);let p=a(`rue:component:anchor`);n(e,p),h(_(L.Step,{color:`success`,children:`发布后巡检`}),e,p);let m=a(`rue:component:anchor`);return n(e,m),h(_(L.Step,{color:`neutral`,children:`归档复盘`}),e,m),e})}),u,f);let p=i(`div`,r);n(r,p),g(p,`space-y-2`);let m=i(`div`,p);n(p,m),g(m,`text-sm font-medium`),n(m,e(`编号里程碑`));let v=i(`div`,p);n(p,v),g(v,`max-w-md overflow-x-auto pb-2`);let y=a(`rue:component:anchor`);return n(v,y),h(_(L,{className:`min-w-[960px]`,children:d(()=>{let e=s(),t=a(`rue:component:anchor`);n(e,t),h(_(L.Step,{color:`neutral`,children:`Start`}),e,t);let r=a(`rue:component:anchor`);n(e,r),h(_(L.Step,{color:`secondary`,children:`02`}),e,r);let i=a(`rue:component:anchor`);n(e,i),h(_(L.Step,{color:`secondary`,children:`03`}),e,i);let o=a(`rue:component:anchor`);n(e,o),h(_(L.Step,{color:`secondary`,children:`04`}),e,o);let c=a(`rue:component:anchor`);n(e,c),h(_(L.Step,{children:`05`}),e,c);let l=a(`rue:component:anchor`);n(e,l),h(_(L.Step,{color:`accent`,children:`06`}),e,l);let u=a(`rue:component:anchor`);n(e,u),h(_(L.Step,{color:`accent`,children:`07`}),e,u);let d=a(`rue:component:anchor`);n(e,d),h(_(L.Step,{children:`08`}),e,d);let f=a(`rue:component:anchor`);n(e,f),h(_(L.Step,{color:`info`,children:`09`}),e,f);let p=a(`rue:component:anchor`);n(e,p),h(_(L.Step,{color:`info`,children:`10`}),e,p);let m=a(`rue:component:anchor`);n(e,m),h(_(L.Step,{color:`error`,children:`11`}),e,m);let g=a(`rue:component:anchor`);n(e,g),h(_(L.Step,{color:`warning`,children:`12`}),e,g);let v=a(`rue:component:anchor`);return n(e,v),h(_(L.Step,{color:`neutral`,children:`End`}),e,v),e})}),v,y),r}),re=()=>{let{current:s}=y(`useSetup:0:0`,()=>m(()=>({current:y(`ref:1:0`,()=>r(0))})));return d(r=>{let c=i(`div`,r);g(c,`card bg-base-100 shadow-sm`);let u=i(`div`,c);n(c,u),g(u,`card-body gap-4`);let d=a(`rue:component:anchor`);n(u,d),o(()=>{let e=_(L,{current:s.value,onChange:e=>s.value=e,items:[{title:`Draft`,description:`Prepare the release scope and changelog.`,clickable:!0},{title:`Review`,description:`QA and product approve the rollout plan.`,clickable:!0},{title:`Deploy`,description:`Promote the release to production.`,clickable:!0}]});t(()=>h(e,u,d))});let f=i(`div`,u);n(u,f),g(f,`rounded-box border border-dashed border-base-300 bg-base-200/50 px-4 py-3 text-sm`),n(f,e(`点击步骤可切换，当前选中步骤：`));let m=i(`code`,f);n(f,m);let v=l(m);return n(m,v),o(()=>{p(v,s.value)}),c})},ie=[{prop:`direction / orientation`,description:`设置整体朝向；支持沿用 Rue 旧的 direction 写法，也支持更通用的 orientation 别名。`,type:`'horizontal' | 'vertical'`,defaultValue:`-`},{prop:`items`,description:`数据驱动模式，适合与 current、status、onChange 一起使用。`,type:`StepItem[]`,defaultValue:`-`},{prop:`current`,description:`当前进行中的步骤索引；前面的步骤自动推导为完成态，后面的步骤自动推导为等待态。`,type:`number`,defaultValue:`-`},{prop:`status`,description:`当前步骤的全局状态覆盖，仅作用于 current 命中的步骤。`,type:`'wait' | 'process' | 'finish' | 'error'`,defaultValue:`'process'`},{prop:`progressDot`,description:`切换为进度点模式，也支持自定义 dot 渲染函数。`,type:`boolean | (dot, info) => any`,defaultValue:`false`},{prop:`onChange`,description:`搭配 items 使用时启用点击切换，回传目标步骤索引。`,type:`(current: number) => void`,defaultValue:`-`}],ae=[{prop:`color`,description:`直接指定 Rue 语义色；未指定时会根据 status 自动映射。`,type:`'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'`,defaultValue:`按 status 推导`},{prop:`title`,description:`步骤主标题；在 children 写法中可与 description、subTitle、icon 组合为语义化内容区。`,type:`any`,defaultValue:`-`},{prop:`description / content`,description:`标题下方的补充说明文字；content 优先级高于 description。`,type:`any`,defaultValue:`-`},{prop:`subTitle`,description:`标题旁边的次级信息，适合展示倒计时、状态文案等。`,type:`any`,defaultValue:`-`},{prop:`icon`,description:`自定义步骤图标；继续支持旧的 <Steps.Icon /> 插槽写法。`,type:`any`,defaultValue:`-`},{prop:`status`,description:`单步状态，可覆盖根组件根据 current 推导的结果。`,type:`'wait' | 'process' | 'finish' | 'error'`,defaultValue:`-`},{prop:`dataContent / data-content`,description:`直接控制 daisyUI step 圆点中的字符，适合问号、勾号或自定义符号。`,type:`string`,defaultValue:`-`},{prop:`clickable / disabled`,description:`控制单步是否可交互，以及是否禁用点击切换。`,type:`boolean`,defaultValue:`false`}],V=()=>{let{tabs:c}=y(`useSetup:0:0:dup1`,()=>m(()=>({tabs:{horizontal:y(`ref:1:1`,()=>r(`preview`)),vertical:y(`ref:1:2`,()=>r(`preview`)),responsive:y(`ref:1:3`,()=>r(`preview`)),icons:y(`ref:1:4`,()=>r(`preview`)),dataContent:y(`ref:1:5`,()=>r(`preview`)),colors:y(`ref:1:6`,()=>r(`preview`)),scrollable:y(`ref:1:7`,()=>r(`preview`)),richStep:y(`ref:1:8`,()=>r(`preview`)),items:y(`ref:1:9`,()=>r(`preview`)),clickable:y(`ref:1:10`,()=>r(`preview`)),progressDot:y(`ref:1:11`,()=>r(`preview`))}})));return d(r=>{let u=s(),f=a(`rue:component:anchor`);return n(u,f),h(_(C,{children:d(()=>{let r=s(),u=i(`div`,r);n(r,u),g(u,`max-w-none prose prose-sm md:prose-base`);let d=i(`h1`,u);n(u,d),n(d,e(`Steps 步骤条`));let f=i(`p`,u);n(u,f),g(f,`text-sm mt-3 mb-3`),n(f,e(`Rue Steps 继续保留 daisyUI 的轻量视觉风格，同时补齐更贴近成熟业务组件的数据驱动 API： 支持`));let m=l(f);n(f,m),p(m,` `);let v=i(`code`,f);n(f,v),n(v,e(`items`)),n(f,e(`、`));let y=i(`code`,f);n(f,y),n(y,e(`current`)),n(f,e(`、`));let b=i(`code`,f);n(f,b),n(b,e(`status`)),n(f,e(`、`));let C=i(`code`,f);n(f,C),n(C,e(`progressDot`)),n(f,e(`、`));let T=i(`code`,f);n(f,T),n(T,e(`onChange`)),n(f,e(`，以及单步级别的`));let E=i(`code`,f);n(f,E),n(E,e(`title`)),n(f,e(`、`));let D=i(`code`,f);n(f,D),n(D,e(`description`)),n(f,e(`、`));let O=i(`code`,f);n(f,O),n(O,e(`subTitle`)),n(f,e(`和`));let k=i(`code`,f);n(f,k),n(k,e(`icon`)),n(f,e(`。`));let A=i(`div`,u);n(u,A),g(A,`not-prose mt-6 grid gap-4 md:grid-cols-3`);let j=i(`div`,A);n(A,j),g(j,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let M=i(`div`,j);n(j,M),g(M,`text-xs font-semibold uppercase tracking-wide text-primary`),n(M,e(`双模式`));let N=i(`div`,j);n(j,N),g(N,`mt-2 text-sm font-medium`),n(N,e(`children / items 都可用`));let P=i(`p`,j);n(j,P),g(P,`mt-2 text-sm opacity-70`),n(P,e(`老的`));let F=i(`code`,P);n(P,F),n(F,e(`Steps.Step`)),n(P,e(`和`));let I=i(`code`,P);n(P,I),n(I,e(`Steps.Icon`));let V=l(P);n(P,V),p(V,` `),n(P,e(`不变，新场景可直接传入数据数组。`));let H=i(`div`,A);n(A,H),g(H,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let U=i(`div`,H);n(H,U),g(U,`text-xs font-semibold uppercase tracking-wide text-secondary`),n(U,e(`状态推导`));let W=i(`div`,H);n(H,W),g(W,`mt-2 text-sm font-medium`),n(W,e(`current 自动推导完成/进行中/等待`));let G=i(`p`,H);n(H,G),g(G,`mt-2 text-sm opacity-70`),n(G,e(`不必手动给每一步都写颜色，只有例外项再单独覆盖即可。`));let K=i(`div`,A);n(A,K),g(K,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let q=i(`div`,K);n(K,q),g(q,`text-xs font-semibold uppercase tracking-wide text-accent`),n(q,e(`内容增强`));let J=i(`div`,K);n(K,J),g(J,`mt-2 text-sm font-medium`),n(J,e(`支持标题、副标题、描述和进度点`));let Y=i(`p`,K);n(K,Y),g(Y,`mt-2 text-sm opacity-70`),n(Y,e(`适合把原本只能写一行文本的步骤条，扩展成更完整的流程说明区。`));let X=i(`h2`,u);n(u,X),n(X,e(`基础布局`));let Z=i(`p`,u);n(u,Z),n(Z,e(`这一组示例保留 Rue 原有 demo，用来展示最基础的横向、纵向和响应式排列方式。`));let oe=a(`rue:component:anchor`);n(u,oe),o(()=>{let e=_(w,{title:`Horizontal`,tab:c.horizontal,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(L,{"data-testid":`steps-horizontal`,children:[S(L.Step,{color:`primary`,children:`Register`}),S(L.Step,{color:`primary`,children:`Choose plan`}),S(L.Step,{children:`Purchase`}),S(L.Step,{children:`Receive Product`})]})})}),code:`<Steps>
  <Steps.Step color="primary">Register</Steps.Step>
  <Steps.Step color="primary">Choose plan</Steps.Step>
  <Steps.Step>Purchase</Steps.Step>
  <Steps.Step>Receive Product</Steps.Step>
</Steps>`});t(()=>h(e,u,oe))});let se=a(`rue:component:anchor`);n(u,se),o(()=>{let e=_(w,{title:`Vertical`,tab:c.vertical,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(L,{direction:`vertical`,children:[S(L.Step,{color:`primary`,children:`Register`}),S(L.Step,{color:`primary`,children:`Choose plan`}),S(L.Step,{children:`Purchase`}),S(L.Step,{children:`Receive Product`})]})})}),code:`<Steps direction="vertical">
  <Steps.Step color="primary">Register</Steps.Step>
  <Steps.Step color="primary">Choose plan</Steps.Step>
  <Steps.Step>Purchase</Steps.Step>
  <Steps.Step>Receive Product</Steps.Step>
</Steps>`});t(()=>h(e,u,se))});let ce=a(`rue:component:anchor`);n(u,ce),o(()=>{let e=_(w,{title:`Responsive`,tab:c.responsive,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(L,{direction:`vertical`,className:`lg:steps-horizontal`,children:[S(L.Step,{color:`primary`,children:`Register`}),S(L.Step,{color:`primary`,children:`Choose plan`}),S(L.Step,{children:`Purchase`}),S(L.Step,{children:`Receive Product`})]})})}),code:`<Steps direction="vertical" className="lg:steps-horizontal">
  <Steps.Step color="primary">Register</Steps.Step>
  <Steps.Step color="primary">Choose plan</Steps.Step>
  <Steps.Step>Purchase</Steps.Step>
  <Steps.Step>Receive Product</Steps.Step>
</Steps>`});t(()=>h(e,u,ce))});let le=i(`h2`,u);n(u,le),n(le,e(`视觉定制`));let Q=i(`p`,u);n(u,Q),n(Q,e(`这一组仍然保留当前 Rue 的静态能力，包括自定义 icon、data-content、语义色和滚动容器。`));let ue=a(`rue:component:anchor`);n(u,ue),o(()=>{let e=_(w,{title:`With custom content in step-icon`,tab:c.icons,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(L,{"data-testid":`steps-icons`,children:[x(L.Step,{color:`neutral`,children:[S(L.Icon,{children:`1`}),`Step 1`]}),x(L.Step,{color:`neutral`,children:[S(L.Icon,{children:`2`}),`Step 2`]}),x(L.Step,{children:[S(L.Icon,{children:`3`}),`Step 3`]})]})})}),code:`<Steps>
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
</Steps>`});t(()=>h(e,u,ue))});let de=a(`rue:component:anchor`);n(u,de),o(()=>{let e=_(w,{title:`With data-content`,tab:c.dataContent,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(L,{children:[S(L.Step,{color:`neutral`,"data-content":`?`,children:`Step 1`}),S(L.Step,{color:`neutral`,"data-content":`!`,children:`Step 2`}),S(L.Step,{color:`neutral`,"data-content":`✓`,children:`Step 3`}),S(L.Step,{color:`neutral`,"data-content":`✕`,children:`Step 4`}),S(L.Step,{color:`neutral`,"data-content":`★`,children:`Step 5`})]})})}),code:`<Steps>
  <Steps.Step color="neutral" data-content="?">Step 1</Steps.Step>
  <Steps.Step color="neutral" data-content="!">Step 2</Steps.Step>
  <Steps.Step color="neutral" data-content="✓">Step 3</Steps.Step>
  <Steps.Step color="neutral" data-content="✕">Step 4</Steps.Step>
  <Steps.Step color="neutral" data-content="★">Step 5</Steps.Step>
</Steps>`});t(()=>h(e,u,de))});let fe=a(`rue:component:anchor`);n(u,fe),o(()=>{let e=_(w,{title:`Custom colors`,tab:c.colors,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(L,{children:[S(L.Step,{color:`info`,children:`Fly to moon`}),S(L.Step,{color:`info`,children:`Shrink the moon`}),S(L.Step,{color:`info`,children:`Grab the moon`}),S(L.Step,{color:`error`,"data-content":`?`,children:`Sit on toilet`})]})})}),code:`<Steps>
  <Steps.Step color="info">Fly to moon</Steps.Step>
  <Steps.Step color="info">Shrink the moon</Steps.Step>
  <Steps.Step color="info">Grab the moon</Steps.Step>
  <Steps.Step color="error" data-content="?">Sit on toilet</Steps.Step>
</Steps>`});t(()=>h(e,u,fe))});let pe=a(`rue:component:anchor`);n(u,pe),o(()=>{let e=_(w,{title:`With scrollable wrapper`,tab:c.scrollable,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:S(ne,{})})}),code:`<div className="grid gap-5">
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
</div>`});t(()=>h(e,u,pe))});let me=i(`h2`,u);n(u,me),n(me,e(`增强 API`));let he=i(`p`,u);n(u,he),n(he,e(`下面这些示例展示的是本次补齐的语义层能力，目标是让 Rue Steps 在不丢失现有风格的前提下更接近常见业务组件的使用体验。`));let ge=a(`rue:component:anchor`);n(u,ge),o(()=>{let e=_(w,{title:`Rich step content`,tab:c.richStep,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(L,{direction:`vertical`,children:[S(L.Step,{status:`finish`,title:`Connect repository`,description:`Link your GitHub repository and import the default build settings.`,icon:S(z,{})}),S(L.Step,{status:`process`,title:`Configure policies`,subTitle:`~ 2 mins`,description:`Set preview branches, branch protection, and deployment rules.`,icon:S(B,{})}),S(L.Step,{status:`wait`,title:`Ship to production`,description:`Merge the release branch after the final smoke test passes.`})]})})}),code:`<Steps direction="vertical">
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
</Steps>`});t(()=>h(e,u,ge))});let _e=a(`rue:component:anchor`);n(u,_e),o(()=>{let e=_(w,{title:`Items + current + status`,tab:c.items,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body gap-4`,children:[S(L,{current:1,status:`error`,items:[{title:`Account`,description:`Create workspace and invite collaborators.`,icon:S(z,{})},{title:`Verification`,subTitle:`Left 00:00:08`,description:`Waiting for security review and DNS validation.`,icon:S(B,{})},{title:`Payment`,description:`Unlock the production environment after confirmation.`,icon:S(ee,{})},{title:`Done`,description:`Your first deployment is ready.`,icon:S(te,{})}]}),x(`div`,{className:`text-sm opacity-70`,children:[`当前索引为 `,S(`code`,{children:`1`}),`，所以第 0 步自动完成，第 1 步继承根节点的`,` `,S(`code`,{children:`error`}),` 状态。`]})]})}),code:`<Steps
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
/>`});t(()=>h(e,u,_e))});let ve=a(`rue:component:anchor`);n(u,ve),o(()=>{let e=_(w,{title:`Clickable items`,tab:c.clickable,preview:S(re,{}),code:`const ClickableStepsDemo: FC = () => {
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
}`});t(()=>h(e,u,ve))});let ye=a(`rue:component:anchor`);n(u,ye),o(()=>{let e=_(w,{title:`Progress dot`,tab:c.progressDot,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:S(L,{progressDot:(e,t)=>S(`span`,{className:`tooltip tooltip-bottom`,"data-tip":`${t.title}`,children:e}),items:[{title:`Collect requirements`,description:`Align scope with design and engineering.`},{title:`Build demo`,description:`Create a stakeholder-ready flow.`},{title:`Launch beta`,description:`Open access to pilot users.`}]})})}),code:`<Steps
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
/>`});t(()=>h(e,u,ye))});let be=i(`h2`,u);n(u,be),n(be,e(`API`));let $=i(`p`,u);n(u,$);let xe=i(`code`,$);n($,xe),n(xe,e(`Steps`)),n($,e(`负责布局、状态推导与点击切换；`));let Se=i(`code`,$);n($,Se),n(Se,e(`Steps.Step`)),n($,e(`和`));let Ce=l($);n($,Ce),p(Ce,` `);let we=i(`code`,$);n($,we),n(we,e(`StepItem`)),n($,e(`共享同一组单步属性。`));let Te=i(`h3`,u);n(u,Te),n(Te,e(`Steps`));let Ee=a(`rue:component:anchor`);n(u,Ee),o(()=>{let e=_(R,{rows:ie});t(()=>h(e,u,Ee))});let De=i(`h3`,u);n(u,De),n(De,e(`Steps.Step / StepItem`));let Oe=a(`rue:component:anchor`);return n(u,Oe),o(()=>{let e=_(R,{rows:ae});t(()=>h(e,u,Oe))}),r})}),u,f),u})};export{V as default};