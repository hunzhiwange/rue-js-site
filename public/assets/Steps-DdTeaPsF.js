import{$ as e,B as t,C as n,Dt as r,G as i,H as a,K as o,U as s,W as c,Z as l,_ as u,at as d,ht as f,l as p,lt as m,s as h,t as g,wt as _,yt as v}from"./vapor-runtime-C1rlwc61.js";import{a as y,n as b}from"./vapor-helpers-vapor-HR6N5lMH.js";import{n as x,t as S}from"./src-BLzF0BqW.js";import{n as C}from"./SidebarPlaygroundDesign-DmoUIYgb.js";import{t as w}from"./PreviewBlock-CfdDuiov.js";var T=(...e)=>e.filter(Boolean).join(` `),E=e=>Array.isArray(e)?e.flatMap(e=>E(e)):e==null||typeof e==`boolean`?[]:[e],D=(e,t)=>t?`${e} ${t}`:e,O=(e,t)=>t??e,k=(e,t)=>{if(t)return t;if(e===`error`)return`error`;if(e===`finish`||e===`process`)return`primary`},A=(e,t)=>{if(!t){if(e===`finish`)return`✓`;if(e===`error`)return`✕`}},j=e=>{typeof e.preventDefault==`function`&&e.preventDefault(),typeof e.stopPropagation==`function`&&e.stopPropagation()},M=t=>{let{cls:n}=y(`useSetup:0:0`,()=>_(()=>({cls:y(`computed:1:0`,()=>m(()=>t.status===`wait`?`inline-block size-2.5 rounded-full border border-base-300 bg-base-100`:`inline-block size-2.5 rounded-full bg-current`))})));return p(t=>{let i=c(`span`,t);return r(()=>{e(i,String(n.get()))}),i})},N=(e,t)=>{if(!e)return;let n=S(M,{status:t.status});return typeof e==`function`?e(n,t):n},P=(e,t,n,r)=>e.status?e.status:typeof n==`number`?t<n?`finish`:t===n?r??`process`:`wait`:`wait`,F=(e,t,r)=>{let{nextChildren:i}=y(`useSetup:0:0:dup1`,()=>_(()=>({nextChildren:y(`computed:1:1`,()=>m(()=>E(r)))})));return n(e,t,...i.get())},I=({as:e=`li`,color:t,className:n,title:r,description:i,content:a,subTitle:o,icon:s,status:c,disabled:l,clickable:d,dataContent:f,children:p,index:m,onClick:h,onKeyDown:g,..._})=>{let v=e,y=a??i,b=r??p,C=d??!!h,w=k(c,t),T=f??_[`data-content`]??A(c,s!=null),E=r!=null||y!=null||o!=null||s!=null,O=_[`aria-current`]??(c===`process`?`step`:void 0),M=l?`true`:void 0,N=`step`;w&&(N+=` step-${w}`),C&&!l&&(N+=` cursor-pointer`),l&&(N+=` opacity-50`),C&&l&&(N+=` cursor-not-allowed`);let P=e=>{if(l){j(e);return}h&&h(e,m)},I=C?_.role??`button`:_.role,L=C?_.tabIndex??(l?-1:0):_.tabIndex,R=C?e=>{if(g&&g(e),e.defaultPrevented||l){l&&j(e);return}(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),P(e))}:_.onKeyDown,z=C?P:_.onClick,B=E?x(u,{children:[s==null?null:S(`span`,{className:D(`step-icon`,y==null?void 0:`mt-0.5`),"aria-hidden":`true`,children:s}),x(`span`,{className:`inline-flex min-w-0 flex-col gap-1 py-1 text-start`,children:[b!=null||o!=null?x(`span`,{className:`flex flex-wrap items-center gap-2 leading-tight`,children:[b==null?null:S(`span`,{className:`font-medium`,children:b}),o==null?null:S(`span`,{className:`text-xs opacity-60`,children:o})]}):null,y==null?null:S(`span`,{className:`text-xs leading-snug opacity-70`,children:y})]})]}):p;return F(v,{..._,className:D(N,n),...T==null?{}:{"data-content":T},role:I,tabIndex:L,onClick:z,onKeyDown:R,"aria-current":O,"aria-disabled":M},B)},L=Object.assign(({as:e=`ul`,direction:n,orientation:i,className:o,children:c,items:l,current:u,status:d,progressDot:f,onChange:m,..._})=>{let y=e,b=O(n,i),x=l&&l.length>0?l.map((e,n)=>{let i=P(e,n,u,d),o=e.icon??N(f,{index:n,status:i,title:e.title,description:e.description,content:e.content}),c=e.clickable??(!!m||!!e.onClick);return p(l=>{let d=s(),f=a(`rue:component:anchor`);return t(d,f),r(()=>{let t=g(I,{key:e.key??n,...e,index:n,status:i,color:k(i,e.color),icon:o,clickable:c,onClick:(t,n)=>{e.disabled||(e.onClick&&typeof n==`number`&&e.onClick(t,n),m&&typeof n==`number`&&n!==u&&m(n))}});v(()=>h(t,d,f))}),d})}):c,S=`steps`;return b&&(S+=` steps-${b}`),F(y,{..._,className:T(S,o)},x)},{Step:I,Icon:({as:e=`span`,className:t,children:n,...r})=>F(e,{...r,className:D(`step-icon`,t)},n)}),R=n=>p(o=>{let u=c(`div`,o);e(u,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let d=c(`table`,u);t(u,d),e(d,`table table-zebra`);let f=c(`thead`,d);t(d,f);let m=c(`tr`,f);t(f,m);let g=c(`th`,m);t(m,g),t(g,i(`属性`));let _=c(`th`,m);t(m,_),t(_,i(`说明`));let y=c(`th`,m);t(m,y),t(y,i(`类型`));let x=c(`th`,m);t(m,x),t(x,i(`默认值`));let S=c(`tbody`,d);t(d,S);let C=a(`rue:list:start`),w=a(`rue:list:end`);t(S,C),t(S,w);let T=new Map;return r(()=>{T=b({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,n,i,o,u)=>{h(p(()=>{let n=s(),i=c(`tr`,n);t(n,i),r(()=>{l(i,`key`,String(e.prop))});let o=c(`td`,i);t(i,o);let u=c(`code`,o);t(o,u);let d=a(`rue:slot:anchor`);t(u,d),r(()=>{let t=e.prop;v(()=>h(t,u,d))});let f=c(`td`,i);t(i,f);let p=a(`rue:slot:anchor`);t(f,p),r(()=>{let t=e.description;v(()=>h(t,f,p))});let m=c(`td`,i);t(i,m);let g=c(`code`,m);t(m,g);let _=a(`rue:slot:anchor`);t(g,_),r(()=>{let t=e.type;v(()=>h(t,g,_))});let y=c(`td`,i);t(i,y);let b=c(`code`,y);t(y,b);let x=a(`rue:slot:anchor`);return t(b,x),r(()=>{let t=e.defaultValue;v(()=>h(t,b,x))}),n}),n,i)}})}),u}),z=()=>p(n=>{let r=c(`svg`,n);l(r,`xmlns`,`http://www.w3.org/2000/svg`),l(r,`viewBox`,`0 0 24 24`),l(r,`fill`,`none`),l(r,`stroke`,`currentColor`),l(r,`strokeWidth`,`2`),e(r,`size-[1.05em]`);let i=c(`path`,r);t(r,i),l(i,`strokeLinecap`,`round`),l(i,`strokeLinejoin`,`round`),l(i,`d`,`M6 20a6 6 0 0 1 12 0`);let a=c(`circle`,r);return t(r,a),l(a,`cx`,`12`),l(a,`cy`,`9`),l(a,`r`,`4`),r}),B=()=>p(n=>{let r=c(`svg`,n);l(r,`xmlns`,`http://www.w3.org/2000/svg`),l(r,`viewBox`,`0 0 24 24`),l(r,`fill`,`none`),l(r,`stroke`,`currentColor`),l(r,`strokeWidth`,`2`),e(r,`size-[1.05em]`);let i=c(`path`,r);t(r,i),l(i,`strokeLinecap`,`round`),l(i,`strokeLinejoin`,`round`),l(i,`d`,`m12 3 1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3Z`);let a=c(`path`,r);return t(r,a),l(a,`strokeLinecap`,`round`),l(a,`strokeLinejoin`,`round`),l(a,`d`,`M5 18h.01M19 18h.01M12 21h.01`),r}),ee=()=>p(n=>{let r=c(`svg`,n);l(r,`xmlns`,`http://www.w3.org/2000/svg`),l(r,`viewBox`,`0 0 24 24`),l(r,`fill`,`none`),l(r,`stroke`,`currentColor`),l(r,`strokeWidth`,`2`),e(r,`size-[1.05em]`);let i=c(`rect`,r);t(r,i),l(i,`x`,`3`),l(i,`y`,`5`),l(i,`width`,`18`),l(i,`height`,`14`),l(i,`rx`,`2`);let a=c(`path`,r);return t(r,a),l(a,`strokeLinecap`,`round`),l(a,`strokeLinejoin`,`round`),l(a,`d`,`M3 10h18`),r}),te=()=>p(n=>{let r=c(`svg`,n);l(r,`xmlns`,`http://www.w3.org/2000/svg`),l(r,`viewBox`,`0 0 24 24`),l(r,`fill`,`none`),l(r,`stroke`,`currentColor`),l(r,`strokeWidth`,`2`),e(r,`size-[1.05em]`);let i=c(`circle`,r);t(r,i),l(i,`cx`,`12`),l(i,`cy`,`12`),l(i,`r`,`9`);let a=c(`path`,r);t(r,a),l(a,`strokeLinecap`,`round`),l(a,`strokeLinejoin`,`round`),l(a,`d`,`M8 14s1.5 2 4 2 4-2 4-2`);let o=c(`path`,r);return t(r,o),l(o,`strokeLinecap`,`round`),l(o,`strokeLinejoin`,`round`),l(o,`d`,`M9 10h.01M15 10h.01`),r}),ne=()=>p(n=>{let r=c(`div`,n);e(r,`grid gap-5`);let o=c(`div`,r);t(r,o),e(o,`space-y-2`);let u=c(`div`,o);t(o,u),e(u,`text-sm font-medium`),t(u,i(`长标签交付流程`));let d=c(`div`,o);t(o,d),e(d,`max-w-xl overflow-x-auto pb-2`),l(d,`data-testid`,`steps-scroll-wrapper`);let f=a(`rue:component:anchor`);t(d,f),h(g(L,{className:`min-w-[1120px]`,children:p(()=>{let e=s(),n=a(`rue:component:anchor`);t(e,n),h(g(L.Step,{color:`primary`,children:`需求确认`}),e,n);let r=a(`rue:component:anchor`);t(e,r),h(g(L.Step,{color:`primary`,children:`设计评审与资源排期`}),e,r);let i=a(`rue:component:anchor`);t(e,i),h(g(L.Step,{color:`primary`,children:`前后端联调验收`}),e,i);let o=a(`rue:component:anchor`);t(e,o),h(g(L.Step,{color:`secondary`,children:`灰度发布到内部环境`}),e,o);let c=a(`rue:component:anchor`);t(e,c),h(g(L.Step,{color:`secondary`,children:`邀请试点客户体验`}),e,c);let l=a(`rue:component:anchor`);t(e,l),h(g(L.Step,{color:`accent`,children:`收集反馈并修复阻塞问题`}),e,l);let u=a(`rue:component:anchor`);t(e,u),h(g(L.Step,{color:`accent`,children:`准备正式发布说明`}),e,u);let d=a(`rue:component:anchor`);t(e,d),h(g(L.Step,{color:`warning`,children:`上线窗口审批`}),e,d);let f=a(`rue:component:anchor`);t(e,f),h(g(L.Step,{color:`warning`,children:`生产环境发布`}),e,f);let p=a(`rue:component:anchor`);t(e,p),h(g(L.Step,{color:`success`,children:`发布后巡检`}),e,p);let m=a(`rue:component:anchor`);return t(e,m),h(g(L.Step,{color:`neutral`,children:`归档复盘`}),e,m),e})}),d,f);let m=c(`div`,r);t(r,m),e(m,`space-y-2`);let _=c(`div`,m);t(m,_),e(_,`text-sm font-medium`),t(_,i(`编号里程碑`));let v=c(`div`,m);t(m,v),e(v,`max-w-md overflow-x-auto pb-2`);let y=a(`rue:component:anchor`);return t(v,y),h(g(L,{className:`min-w-[960px]`,children:p(()=>{let e=s(),n=a(`rue:component:anchor`);t(e,n),h(g(L.Step,{color:`neutral`,children:`Start`}),e,n);let r=a(`rue:component:anchor`);t(e,r),h(g(L.Step,{color:`secondary`,children:`02`}),e,r);let i=a(`rue:component:anchor`);t(e,i),h(g(L.Step,{color:`secondary`,children:`03`}),e,i);let o=a(`rue:component:anchor`);t(e,o),h(g(L.Step,{color:`secondary`,children:`04`}),e,o);let c=a(`rue:component:anchor`);t(e,c),h(g(L.Step,{children:`05`}),e,c);let l=a(`rue:component:anchor`);t(e,l),h(g(L.Step,{color:`accent`,children:`06`}),e,l);let u=a(`rue:component:anchor`);t(e,u),h(g(L.Step,{color:`accent`,children:`07`}),e,u);let d=a(`rue:component:anchor`);t(e,d),h(g(L.Step,{children:`08`}),e,d);let f=a(`rue:component:anchor`);t(e,f),h(g(L.Step,{color:`info`,children:`09`}),e,f);let p=a(`rue:component:anchor`);t(e,p),h(g(L.Step,{color:`info`,children:`10`}),e,p);let m=a(`rue:component:anchor`);t(e,m),h(g(L.Step,{color:`error`,children:`11`}),e,m);let _=a(`rue:component:anchor`);t(e,_),h(g(L.Step,{color:`warning`,children:`12`}),e,_);let v=a(`rue:component:anchor`);return t(e,v),h(g(L.Step,{color:`neutral`,children:`End`}),e,v),e})}),v,y),r}),re=()=>{let{current:n}=y(`useSetup:0:0`,()=>_(()=>({current:y(`ref:1:0`,()=>f(0))})));return p(s=>{let l=c(`div`,s);e(l,`card bg-base-100 shadow-sm`);let u=c(`div`,l);t(l,u),e(u,`card-body gap-4`);let f=a(`rue:component:anchor`);t(u,f),r(()=>{let e=g(L,{current:n.value,onChange:e=>n.value=e,items:[{title:`Draft`,description:`Prepare the release scope and changelog.`,clickable:!0},{title:`Review`,description:`QA and product approve the rollout plan.`,clickable:!0},{title:`Deploy`,description:`Promote the release to production.`,clickable:!0}]});v(()=>h(e,u,f))});let p=c(`div`,u);t(u,p),e(p,`rounded-box border border-dashed border-base-300 bg-base-200/50 px-4 py-3 text-sm`),t(p,i(`点击步骤可切换，当前选中步骤：`));let m=c(`code`,p);t(p,m);let _=o(m);return t(m,_),r(()=>{d(_,n.value)}),l})},ie=[{prop:`direction / orientation`,description:`设置整体朝向；支持沿用 Rue 旧的 direction 写法，也支持更通用的 orientation 别名。`,type:`'horizontal' | 'vertical'`,defaultValue:`-`},{prop:`items`,description:`数据驱动模式，适合与 current、status、onChange 一起使用。`,type:`StepItem[]`,defaultValue:`-`},{prop:`current`,description:`当前进行中的步骤索引；前面的步骤自动推导为完成态，后面的步骤自动推导为等待态。`,type:`number`,defaultValue:`-`},{prop:`status`,description:`当前步骤的全局状态覆盖，仅作用于 current 命中的步骤。`,type:`'wait' | 'process' | 'finish' | 'error'`,defaultValue:`'process'`},{prop:`progressDot`,description:`切换为进度点模式，也支持自定义 dot 渲染函数。`,type:`boolean | (dot, info) => any`,defaultValue:`false`},{prop:`onChange`,description:`搭配 items 使用时启用点击切换，回传目标步骤索引。`,type:`(current: number) => void`,defaultValue:`-`}],ae=[{prop:`color`,description:`直接指定 Rue 语义色；未指定时会根据 status 自动映射。`,type:`'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'`,defaultValue:`按 status 推导`},{prop:`title`,description:`步骤主标题；在 children 写法中可与 description、subTitle、icon 组合为语义化内容区。`,type:`any`,defaultValue:`-`},{prop:`description / content`,description:`标题下方的补充说明文字；content 优先级高于 description。`,type:`any`,defaultValue:`-`},{prop:`subTitle`,description:`标题旁边的次级信息，适合展示倒计时、状态文案等。`,type:`any`,defaultValue:`-`},{prop:`icon`,description:`自定义步骤图标；继续支持旧的 <Steps.Icon /> 插槽写法。`,type:`any`,defaultValue:`-`},{prop:`status`,description:`单步状态，可覆盖根组件根据 current 推导的结果。`,type:`'wait' | 'process' | 'finish' | 'error'`,defaultValue:`-`},{prop:`dataContent / data-content`,description:`直接控制 daisyUI step 圆点中的字符，适合问号、勾号或自定义符号。`,type:`string`,defaultValue:`-`},{prop:`clickable / disabled`,description:`控制单步是否可交互，以及是否禁用点击切换。`,type:`boolean`,defaultValue:`false`}],V=()=>{let{tabs:n}=y(`useSetup:0:0:dup1`,()=>_(()=>({tabs:{horizontal:y(`ref:1:1`,()=>f(`preview`)),vertical:y(`ref:1:2`,()=>f(`preview`)),responsive:y(`ref:1:3`,()=>f(`preview`)),icons:y(`ref:1:4`,()=>f(`preview`)),dataContent:y(`ref:1:5`,()=>f(`preview`)),colors:y(`ref:1:6`,()=>f(`preview`)),scrollable:y(`ref:1:7`,()=>f(`preview`)),richStep:y(`ref:1:8`,()=>f(`preview`)),items:y(`ref:1:9`,()=>f(`preview`)),clickable:y(`ref:1:10`,()=>f(`preview`)),progressDot:y(`ref:1:11`,()=>f(`preview`))}})));return p(l=>{let u=s(),f=a(`rue:component:anchor`);return t(u,f),h(g(C,{children:p(()=>{let l=s(),u=c(`div`,l);t(l,u),e(u,`max-w-none prose prose-sm md:prose-base`);let f=c(`h1`,u);t(u,f),t(f,i(`Steps 步骤条`));let p=c(`p`,u);t(u,p),e(p,`text-sm mt-3 mb-3`),t(p,i(`Rue Steps 继续保留 daisyUI 的轻量视觉风格，同时补齐更贴近成熟业务组件的数据驱动 API： 支持`));let m=o(p);t(p,m),d(m,` `);let _=c(`code`,p);t(p,_),t(_,i(`items`)),t(p,i(`、`));let y=c(`code`,p);t(p,y),t(y,i(`current`)),t(p,i(`、`));let b=c(`code`,p);t(p,b),t(b,i(`status`)),t(p,i(`、`));let C=c(`code`,p);t(p,C),t(C,i(`progressDot`)),t(p,i(`、`));let T=c(`code`,p);t(p,T),t(T,i(`onChange`)),t(p,i(`，以及单步级别的`));let E=c(`code`,p);t(p,E),t(E,i(`title`)),t(p,i(`、`));let D=c(`code`,p);t(p,D),t(D,i(`description`)),t(p,i(`、`));let O=c(`code`,p);t(p,O),t(O,i(`subTitle`)),t(p,i(`和`));let k=c(`code`,p);t(p,k),t(k,i(`icon`)),t(p,i(`。`));let A=c(`div`,u);t(u,A),e(A,`not-prose mt-6 grid gap-4 md:grid-cols-3`);let j=c(`div`,A);t(A,j),e(j,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let M=c(`div`,j);t(j,M),e(M,`text-xs font-semibold uppercase tracking-wide text-primary`),t(M,i(`双模式`));let N=c(`div`,j);t(j,N),e(N,`mt-2 text-sm font-medium`),t(N,i(`children / items 都可用`));let P=c(`p`,j);t(j,P),e(P,`mt-2 text-sm opacity-70`),t(P,i(`老的`));let F=c(`code`,P);t(P,F),t(F,i(`Steps.Step`)),t(P,i(`和`));let I=c(`code`,P);t(P,I),t(I,i(`Steps.Icon`));let V=o(P);t(P,V),d(V,` `),t(P,i(`不变，新场景可直接传入数据数组。`));let H=c(`div`,A);t(A,H),e(H,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let U=c(`div`,H);t(H,U),e(U,`text-xs font-semibold uppercase tracking-wide text-secondary`),t(U,i(`状态推导`));let W=c(`div`,H);t(H,W),e(W,`mt-2 text-sm font-medium`),t(W,i(`current 自动推导完成/进行中/等待`));let G=c(`p`,H);t(H,G),e(G,`mt-2 text-sm opacity-70`),t(G,i(`不必手动给每一步都写颜色，只有例外项再单独覆盖即可。`));let K=c(`div`,A);t(A,K),e(K,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let q=c(`div`,K);t(K,q),e(q,`text-xs font-semibold uppercase tracking-wide text-accent`),t(q,i(`内容增强`));let J=c(`div`,K);t(K,J),e(J,`mt-2 text-sm font-medium`),t(J,i(`支持标题、副标题、描述和进度点`));let Y=c(`p`,K);t(K,Y),e(Y,`mt-2 text-sm opacity-70`),t(Y,i(`适合把原本只能写一行文本的步骤条，扩展成更完整的流程说明区。`));let X=c(`h2`,u);t(u,X),t(X,i(`基础布局`));let Z=c(`p`,u);t(u,Z),t(Z,i(`这一组示例保留 Rue 原有 demo，用来展示最基础的横向、纵向和响应式排列方式。`));let oe=a(`rue:component:anchor`);t(u,oe),r(()=>{let e=g(w,{title:`Horizontal`,tab:n.horizontal,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(L,{"data-testid":`steps-horizontal`,children:[S(L.Step,{color:`primary`,children:`Register`}),S(L.Step,{color:`primary`,children:`Choose plan`}),S(L.Step,{children:`Purchase`}),S(L.Step,{children:`Receive Product`})]})})}),code:`<Steps>
  <Steps.Step color="primary">Register</Steps.Step>
  <Steps.Step color="primary">Choose plan</Steps.Step>
  <Steps.Step>Purchase</Steps.Step>
  <Steps.Step>Receive Product</Steps.Step>
</Steps>`});v(()=>h(e,u,oe))});let se=a(`rue:component:anchor`);t(u,se),r(()=>{let e=g(w,{title:`Vertical`,tab:n.vertical,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(L,{direction:`vertical`,children:[S(L.Step,{color:`primary`,children:`Register`}),S(L.Step,{color:`primary`,children:`Choose plan`}),S(L.Step,{children:`Purchase`}),S(L.Step,{children:`Receive Product`})]})})}),code:`<Steps direction="vertical">
  <Steps.Step color="primary">Register</Steps.Step>
  <Steps.Step color="primary">Choose plan</Steps.Step>
  <Steps.Step>Purchase</Steps.Step>
  <Steps.Step>Receive Product</Steps.Step>
</Steps>`});v(()=>h(e,u,se))});let ce=a(`rue:component:anchor`);t(u,ce),r(()=>{let e=g(w,{title:`Responsive`,tab:n.responsive,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(L,{direction:`vertical`,className:`lg:steps-horizontal`,children:[S(L.Step,{color:`primary`,children:`Register`}),S(L.Step,{color:`primary`,children:`Choose plan`}),S(L.Step,{children:`Purchase`}),S(L.Step,{children:`Receive Product`})]})})}),code:`<Steps direction="vertical" className="lg:steps-horizontal">
  <Steps.Step color="primary">Register</Steps.Step>
  <Steps.Step color="primary">Choose plan</Steps.Step>
  <Steps.Step>Purchase</Steps.Step>
  <Steps.Step>Receive Product</Steps.Step>
</Steps>`});v(()=>h(e,u,ce))});let le=c(`h2`,u);t(u,le),t(le,i(`视觉定制`));let Q=c(`p`,u);t(u,Q),t(Q,i(`这一组仍然保留当前 Rue 的静态能力，包括自定义 icon、data-content、语义色和滚动容器。`));let ue=a(`rue:component:anchor`);t(u,ue),r(()=>{let e=g(w,{title:`With custom content in step-icon`,tab:n.icons,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(L,{"data-testid":`steps-icons`,children:[x(L.Step,{color:`neutral`,children:[S(L.Icon,{children:`1`}),`Step 1`]}),x(L.Step,{color:`neutral`,children:[S(L.Icon,{children:`2`}),`Step 2`]}),x(L.Step,{children:[S(L.Icon,{children:`3`}),`Step 3`]})]})})}),code:`<Steps>
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
</Steps>`});v(()=>h(e,u,ue))});let de=a(`rue:component:anchor`);t(u,de),r(()=>{let e=g(w,{title:`With data-content`,tab:n.dataContent,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(L,{children:[S(L.Step,{color:`neutral`,"data-content":`?`,children:`Step 1`}),S(L.Step,{color:`neutral`,"data-content":`!`,children:`Step 2`}),S(L.Step,{color:`neutral`,"data-content":`✓`,children:`Step 3`}),S(L.Step,{color:`neutral`,"data-content":`✕`,children:`Step 4`}),S(L.Step,{color:`neutral`,"data-content":`★`,children:`Step 5`})]})})}),code:`<Steps>
  <Steps.Step color="neutral" data-content="?">Step 1</Steps.Step>
  <Steps.Step color="neutral" data-content="!">Step 2</Steps.Step>
  <Steps.Step color="neutral" data-content="✓">Step 3</Steps.Step>
  <Steps.Step color="neutral" data-content="✕">Step 4</Steps.Step>
  <Steps.Step color="neutral" data-content="★">Step 5</Steps.Step>
</Steps>`});v(()=>h(e,u,de))});let fe=a(`rue:component:anchor`);t(u,fe),r(()=>{let e=g(w,{title:`Custom colors`,tab:n.colors,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(L,{children:[S(L.Step,{color:`info`,children:`Fly to moon`}),S(L.Step,{color:`info`,children:`Shrink the moon`}),S(L.Step,{color:`info`,children:`Grab the moon`}),S(L.Step,{color:`error`,"data-content":`?`,children:`Sit on toilet`})]})})}),code:`<Steps>
  <Steps.Step color="info">Fly to moon</Steps.Step>
  <Steps.Step color="info">Shrink the moon</Steps.Step>
  <Steps.Step color="info">Grab the moon</Steps.Step>
  <Steps.Step color="error" data-content="?">Sit on toilet</Steps.Step>
</Steps>`});v(()=>h(e,u,fe))});let pe=a(`rue:component:anchor`);t(u,pe),r(()=>{let e=g(w,{title:`With scrollable wrapper`,tab:n.scrollable,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:S(ne,{})})}),code:`<div className="grid gap-5">
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
</div>`});v(()=>h(e,u,pe))});let me=c(`h2`,u);t(u,me),t(me,i(`增强 API`));let he=c(`p`,u);t(u,he),t(he,i(`下面这些示例展示的是本次补齐的语义层能力，目标是让 Rue Steps 在不丢失现有风格的前提下更接近常见业务组件的使用体验。`));let ge=a(`rue:component:anchor`);t(u,ge),r(()=>{let e=g(w,{title:`Rich step content`,tab:n.richStep,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(L,{direction:`vertical`,children:[S(L.Step,{status:`finish`,title:`Connect repository`,description:`Link your GitHub repository and import the default build settings.`,icon:S(z,{})}),S(L.Step,{status:`process`,title:`Configure policies`,subTitle:`~ 2 mins`,description:`Set preview branches, branch protection, and deployment rules.`,icon:S(B,{})}),S(L.Step,{status:`wait`,title:`Ship to production`,description:`Merge the release branch after the final smoke test passes.`})]})})}),code:`<Steps direction="vertical">
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
</Steps>`});v(()=>h(e,u,ge))});let _e=a(`rue:component:anchor`);t(u,_e),r(()=>{let e=g(w,{title:`Items + current + status`,tab:n.items,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body gap-4`,children:[S(L,{current:1,status:`error`,items:[{title:`Account`,description:`Create workspace and invite collaborators.`,icon:S(z,{})},{title:`Verification`,subTitle:`Left 00:00:08`,description:`Waiting for security review and DNS validation.`,icon:S(B,{})},{title:`Payment`,description:`Unlock the production environment after confirmation.`,icon:S(ee,{})},{title:`Done`,description:`Your first deployment is ready.`,icon:S(te,{})}]}),x(`div`,{className:`text-sm opacity-70`,children:[`当前索引为 `,S(`code`,{children:`1`}),`，所以第 0 步自动完成，第 1 步继承根节点的`,` `,S(`code`,{children:`error`}),` 状态。`]})]})}),code:`<Steps
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
/>`});v(()=>h(e,u,_e))});let ve=a(`rue:component:anchor`);t(u,ve),r(()=>{let e=g(w,{title:`Clickable items`,tab:n.clickable,preview:S(re,{}),code:`const ClickableStepsDemo: FC = () => {
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
}`});v(()=>h(e,u,ve))});let ye=a(`rue:component:anchor`);t(u,ye),r(()=>{let e=g(w,{title:`Progress dot`,tab:n.progressDot,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:S(L,{progressDot:(e,t)=>S(`span`,{className:`tooltip tooltip-bottom`,"data-tip":`${t.title}`,children:e}),items:[{title:`Collect requirements`,description:`Align scope with design and engineering.`},{title:`Build demo`,description:`Create a stakeholder-ready flow.`},{title:`Launch beta`,description:`Open access to pilot users.`}]})})}),code:`<Steps
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
/>`});v(()=>h(e,u,ye))});let be=c(`h2`,u);t(u,be),t(be,i(`API`));let $=c(`p`,u);t(u,$);let xe=c(`code`,$);t($,xe),t(xe,i(`Steps`)),t($,i(`负责布局、状态推导与点击切换；`));let Se=c(`code`,$);t($,Se),t(Se,i(`Steps.Step`)),t($,i(`和`));let Ce=o($);t($,Ce),d(Ce,` `);let we=c(`code`,$);t($,we),t(we,i(`StepItem`)),t($,i(`共享同一组单步属性。`));let Te=c(`h3`,u);t(u,Te),t(Te,i(`Steps`));let Ee=a(`rue:component:anchor`);t(u,Ee),r(()=>{let e=g(R,{rows:ie});v(()=>h(e,u,Ee))});let De=c(`h3`,u);t(u,De),t(De,i(`Steps.Step / StepItem`));let Oe=a(`rue:component:anchor`);return t(u,Oe),r(()=>{let e=g(R,{rows:ae});v(()=>h(e,u,Oe))}),l})}),u,f),u})};export{V as default};