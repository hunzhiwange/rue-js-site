import{$ as e,Et as t,G as n,H as r,J as i,K as a,T as o,W as s,_t as c,d as l,dt as u,kt as d,l as f,q as p,st as m,t as h,tt as g,xt as _,y as v}from"./vapor-runtime-ACs_OvwU.js";import{a as y,n as b}from"./vapor-helpers-vapor-BFB_fGs4.js";import{n as x,t as S}from"./src-B0RvnZVV.js";import{n as C}from"./SidebarPlaygroundDesign-fKTv1NQ3.js";import{t as w}from"./PreviewBlock-BkL9wNXA.js";var T=(...e)=>e.filter(Boolean).join(` `),E=e=>Array.isArray(e)?e.flatMap(e=>E(e)):e==null||typeof e==`boolean`?[]:[e],D=(e,t)=>t?`${e} ${t}`:e,O=(e,t)=>t??e,k=(e,t)=>{if(t)return t;if(e===`error`)return`error`;if(e===`finish`||e===`process`)return`primary`},A=(e,t)=>{if(!t){if(e===`finish`)return`✓`;if(e===`error`)return`✕`}},j=e=>{typeof e.preventDefault==`function`&&e.preventDefault(),typeof e.stopPropagation==`function`&&e.stopPropagation()},M=e=>{let{cls:n}=y(`useSetup:0:0`,()=>t(()=>({cls:y(`computed:1:0`,()=>u(()=>e.status===`wait`?`inline-block size-2.5 rounded-full border border-base-300 bg-base-100`:`inline-block size-2.5 rounded-full bg-current`))})));return l(e=>{let t=a(`span`,e);return d(()=>{g(t,String(n.get()))}),t})},N=(e,t)=>{if(!e)return;let n=S(M,{status:t.status});return typeof e==`function`?e(n,t):n},P=(e,t,n,r)=>e.status?e.status:typeof n==`number`?t<n?`finish`:t===n?r??`process`:`wait`:`wait`,F=(e,n,r)=>{let{nextChildren:i}=y(`useSetup:0:0:dup1`,()=>t(()=>({nextChildren:y(`computed:1:1`,()=>u(()=>E(r)))})));return o(e,n,...i.get())},I=({as:e=`li`,color:t,className:n,title:r,description:i,content:a,subTitle:o,icon:s,status:c,disabled:l,clickable:u,dataContent:d,children:f,index:p,onClick:m,onKeyDown:h,...g})=>{let _=e,y=a??i,b=r??f,C=u??!!m,w=k(c,t),T=d??g[`data-content`]??A(c,s!=null),E=r!=null||y!=null||o!=null||s!=null,O=g[`aria-current`]??(c===`process`?`step`:void 0),M=l?`true`:void 0,N=`step`;w&&(N+=` step-${w}`),C&&!l&&(N+=` cursor-pointer`),l&&(N+=` opacity-50`),C&&l&&(N+=` cursor-not-allowed`);let P=e=>{if(l){j(e);return}m&&m(e,p)},I=C?g.role??`button`:g.role,L=C?g.tabIndex??(l?-1:0):g.tabIndex,R=C?e=>{if(h&&h(e),e.defaultPrevented||l){l&&j(e);return}(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),P(e))}:g.onKeyDown,z=C?P:g.onClick,B=E?x(v,{children:[s==null?null:S(`span`,{className:D(`step-icon`,y==null?void 0:`mt-0.5`),"aria-hidden":`true`,children:s}),x(`span`,{className:`inline-flex min-w-0 flex-col gap-1 py-1 text-start`,children:[b!=null||o!=null?x(`span`,{className:`flex flex-wrap items-center gap-2 leading-tight`,children:[b==null?null:S(`span`,{className:`font-medium`,children:b}),o==null?null:S(`span`,{className:`text-xs opacity-60`,children:o})]}):null,y==null?null:S(`span`,{className:`text-xs leading-snug opacity-70`,children:y})]})]}):f;return F(_,{...g,className:D(N,n),...T==null?{}:{"data-content":T},role:I,tabIndex:L,onClick:z,onKeyDown:R,"aria-current":O,"aria-disabled":M},B)},L=Object.assign(({as:e=`ul`,direction:t,orientation:i,className:a,children:o,items:c,current:u,status:p,progressDot:m,onChange:g,...v})=>{let y=e,b=O(t,i),x=c&&c.length>0?c.map((e,t)=>{let i=P(e,t,u,p),a=e.icon??N(m,{index:t,status:i,title:e.title,description:e.description,content:e.content}),o=e.clickable??(!!g||!!e.onClick);return l(c=>{let l=n(),p=s(`rue:component:anchor`);return r(l,p),d(()=>{let n=h(I,{key:e.key??t,...e,index:t,status:i,color:k(i,e.color),icon:a,clickable:o,onClick:(t,n)=>{e.disabled||(e.onClick&&typeof n==`number`&&e.onClick(t,n),g&&typeof n==`number`&&n!==u&&g(n))}});_(()=>f(n,l,p))}),l})}):o,S=`steps`;return b&&(S+=` steps-${b}`),F(y,{...v,className:T(S,a)},x)},{Step:I,Icon:({as:e=`span`,className:t,children:n,...r})=>F(e,{...r,className:D(`step-icon`,t)},n)}),R=t=>l(i=>{let o=a(`div`,i);g(o,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let c=a(`table`,o);r(o,c),g(c,`table table-zebra`);let u=a(`thead`,c);r(c,u);let m=a(`tr`,u);r(u,m);let h=a(`th`,m);r(m,h),r(h,p(`属性`));let v=a(`th`,m);r(m,v),r(v,p(`说明`));let y=a(`th`,m);r(m,y),r(y,p(`类型`));let x=a(`th`,m);r(m,x),r(x,p(`默认值`));let S=a(`tbody`,c);r(c,S);let C=s(`rue:list:start`),w=s(`rue:list:end`);r(S,C),r(S,w);let T=new Map;return d(()=>{T=b({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,i,o,c,u)=>{f(l(()=>{let i=n(),o=a(`tr`,i);r(i,o),d(()=>{e(o,`key`,String(t.prop))});let c=a(`td`,o);r(o,c);let l=a(`code`,c);r(c,l);let u=s(`rue:slot:anchor`);r(l,u),d(()=>{let e=t.prop;_(()=>f(e,l,u))});let p=a(`td`,o);r(o,p);let m=s(`rue:slot:anchor`);r(p,m),d(()=>{let e=t.description;_(()=>f(e,p,m))});let h=a(`td`,o);r(o,h);let g=a(`code`,h);r(h,g);let v=s(`rue:slot:anchor`);r(g,v),d(()=>{let e=t.type;_(()=>f(e,g,v))});let y=a(`td`,o);r(o,y);let b=a(`code`,y);r(y,b);let x=s(`rue:slot:anchor`);return r(b,x),d(()=>{let e=t.defaultValue;_(()=>f(e,b,x))}),i}),i,o)}})}),o}),z=()=>l(t=>{let n=a(`svg`,t);e(n,`xmlns`,`http://www.w3.org/2000/svg`),e(n,`viewBox`,`0 0 24 24`),e(n,`fill`,`none`),e(n,`stroke`,`currentColor`),e(n,`strokeWidth`,`2`),g(n,`size-[1.05em]`);let i=a(`path`,n);r(n,i),e(i,`strokeLinecap`,`round`),e(i,`strokeLinejoin`,`round`),e(i,`d`,`M6 20a6 6 0 0 1 12 0`);let o=a(`circle`,n);return r(n,o),e(o,`cx`,`12`),e(o,`cy`,`9`),e(o,`r`,`4`),n}),B=()=>l(t=>{let n=a(`svg`,t);e(n,`xmlns`,`http://www.w3.org/2000/svg`),e(n,`viewBox`,`0 0 24 24`),e(n,`fill`,`none`),e(n,`stroke`,`currentColor`),e(n,`strokeWidth`,`2`),g(n,`size-[1.05em]`);let i=a(`path`,n);r(n,i),e(i,`strokeLinecap`,`round`),e(i,`strokeLinejoin`,`round`),e(i,`d`,`m12 3 1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3Z`);let o=a(`path`,n);return r(n,o),e(o,`strokeLinecap`,`round`),e(o,`strokeLinejoin`,`round`),e(o,`d`,`M5 18h.01M19 18h.01M12 21h.01`),n}),ee=()=>l(t=>{let n=a(`svg`,t);e(n,`xmlns`,`http://www.w3.org/2000/svg`),e(n,`viewBox`,`0 0 24 24`),e(n,`fill`,`none`),e(n,`stroke`,`currentColor`),e(n,`strokeWidth`,`2`),g(n,`size-[1.05em]`);let i=a(`rect`,n);r(n,i),e(i,`x`,`3`),e(i,`y`,`5`),e(i,`width`,`18`),e(i,`height`,`14`),e(i,`rx`,`2`);let o=a(`path`,n);return r(n,o),e(o,`strokeLinecap`,`round`),e(o,`strokeLinejoin`,`round`),e(o,`d`,`M3 10h18`),n}),te=()=>l(t=>{let n=a(`svg`,t);e(n,`xmlns`,`http://www.w3.org/2000/svg`),e(n,`viewBox`,`0 0 24 24`),e(n,`fill`,`none`),e(n,`stroke`,`currentColor`),e(n,`strokeWidth`,`2`),g(n,`size-[1.05em]`);let i=a(`circle`,n);r(n,i),e(i,`cx`,`12`),e(i,`cy`,`12`),e(i,`r`,`9`);let o=a(`path`,n);r(n,o),e(o,`strokeLinecap`,`round`),e(o,`strokeLinejoin`,`round`),e(o,`d`,`M8 14s1.5 2 4 2 4-2 4-2`);let s=a(`path`,n);return r(n,s),e(s,`strokeLinecap`,`round`),e(s,`strokeLinejoin`,`round`),e(s,`d`,`M9 10h.01M15 10h.01`),n}),ne=()=>l(t=>{let i=a(`div`,t);g(i,`grid gap-5`);let o=a(`div`,i);r(i,o),g(o,`space-y-2`);let c=a(`div`,o);r(o,c),g(c,`text-sm font-medium`),r(c,p(`长标签交付流程`));let u=a(`div`,o);r(o,u),g(u,`max-w-xl overflow-x-auto pb-2`),e(u,`data-testid`,`steps-scroll-wrapper`);let d=s(`rue:component:anchor`);r(u,d),f(h(L,{className:`min-w-[1120px]`,children:l(()=>{let e=n(),t=s(`rue:component:anchor`);r(e,t),f(h(L.Step,{color:`primary`,children:`需求确认`}),e,t);let i=s(`rue:component:anchor`);r(e,i),f(h(L.Step,{color:`primary`,children:`设计评审与资源排期`}),e,i);let a=s(`rue:component:anchor`);r(e,a),f(h(L.Step,{color:`primary`,children:`前后端联调验收`}),e,a);let o=s(`rue:component:anchor`);r(e,o),f(h(L.Step,{color:`secondary`,children:`灰度发布到内部环境`}),e,o);let c=s(`rue:component:anchor`);r(e,c),f(h(L.Step,{color:`secondary`,children:`邀请试点客户体验`}),e,c);let l=s(`rue:component:anchor`);r(e,l),f(h(L.Step,{color:`accent`,children:`收集反馈并修复阻塞问题`}),e,l);let u=s(`rue:component:anchor`);r(e,u),f(h(L.Step,{color:`accent`,children:`准备正式发布说明`}),e,u);let d=s(`rue:component:anchor`);r(e,d),f(h(L.Step,{color:`warning`,children:`上线窗口审批`}),e,d);let p=s(`rue:component:anchor`);r(e,p),f(h(L.Step,{color:`warning`,children:`生产环境发布`}),e,p);let m=s(`rue:component:anchor`);r(e,m),f(h(L.Step,{color:`success`,children:`发布后巡检`}),e,m);let g=s(`rue:component:anchor`);return r(e,g),f(h(L.Step,{color:`neutral`,children:`归档复盘`}),e,g),e})}),u,d);let m=a(`div`,i);r(i,m),g(m,`space-y-2`);let _=a(`div`,m);r(m,_),g(_,`text-sm font-medium`),r(_,p(`编号里程碑`));let v=a(`div`,m);r(m,v),g(v,`max-w-md overflow-x-auto pb-2`);let y=s(`rue:component:anchor`);return r(v,y),f(h(L,{className:`min-w-[960px]`,children:l(()=>{let e=n(),t=s(`rue:component:anchor`);r(e,t),f(h(L.Step,{color:`neutral`,children:`Start`}),e,t);let i=s(`rue:component:anchor`);r(e,i),f(h(L.Step,{color:`secondary`,children:`02`}),e,i);let a=s(`rue:component:anchor`);r(e,a),f(h(L.Step,{color:`secondary`,children:`03`}),e,a);let o=s(`rue:component:anchor`);r(e,o),f(h(L.Step,{color:`secondary`,children:`04`}),e,o);let c=s(`rue:component:anchor`);r(e,c),f(h(L.Step,{children:`05`}),e,c);let l=s(`rue:component:anchor`);r(e,l),f(h(L.Step,{color:`accent`,children:`06`}),e,l);let u=s(`rue:component:anchor`);r(e,u),f(h(L.Step,{color:`accent`,children:`07`}),e,u);let d=s(`rue:component:anchor`);r(e,d),f(h(L.Step,{children:`08`}),e,d);let p=s(`rue:component:anchor`);r(e,p),f(h(L.Step,{color:`info`,children:`09`}),e,p);let m=s(`rue:component:anchor`);r(e,m),f(h(L.Step,{color:`info`,children:`10`}),e,m);let g=s(`rue:component:anchor`);r(e,g),f(h(L.Step,{color:`error`,children:`11`}),e,g);let _=s(`rue:component:anchor`);r(e,_),f(h(L.Step,{color:`warning`,children:`12`}),e,_);let v=s(`rue:component:anchor`);return r(e,v),f(h(L.Step,{color:`neutral`,children:`End`}),e,v),e})}),v,y),i}),re=()=>{let{current:e}=y(`useSetup:0:0`,()=>t(()=>({current:y(`ref:1:0`,()=>c(0))})));return l(t=>{let n=a(`div`,t);g(n,`card bg-base-100 shadow-sm`);let o=a(`div`,n);r(n,o),g(o,`card-body gap-4`);let c=s(`rue:component:anchor`);r(o,c),d(()=>{let t=h(L,{current:e.value,onChange:t=>e.value=t,items:[{title:`Draft`,description:`Prepare the release scope and changelog.`,clickable:!0},{title:`Review`,description:`QA and product approve the rollout plan.`,clickable:!0},{title:`Deploy`,description:`Promote the release to production.`,clickable:!0}]});_(()=>f(t,o,c))});let l=a(`div`,o);r(o,l),g(l,`rounded-box border border-dashed border-base-300 bg-base-200/50 px-4 py-3 text-sm`),r(l,p(`点击步骤可切换，当前选中步骤：`));let u=a(`code`,l);r(l,u);let v=i(u);return r(u,v),d(()=>{m(v,e.value)}),n})},ie=[{prop:`direction / orientation`,description:`设置整体朝向；支持沿用 Rue 旧的 direction 写法，也支持更通用的 orientation 别名。`,type:`'horizontal' | 'vertical'`,defaultValue:`-`},{prop:`items`,description:`数据驱动模式，适合与 current、status、onChange 一起使用。`,type:`StepItem[]`,defaultValue:`-`},{prop:`current`,description:`当前进行中的步骤索引；前面的步骤自动推导为完成态，后面的步骤自动推导为等待态。`,type:`number`,defaultValue:`-`},{prop:`status`,description:`当前步骤的全局状态覆盖，仅作用于 current 命中的步骤。`,type:`'wait' | 'process' | 'finish' | 'error'`,defaultValue:`'process'`},{prop:`progressDot`,description:`切换为进度点模式，也支持自定义 dot 渲染函数。`,type:`boolean | (dot, info) => any`,defaultValue:`false`},{prop:`onChange`,description:`搭配 items 使用时启用点击切换，回传目标步骤索引。`,type:`(current: number) => void`,defaultValue:`-`}],ae=[{prop:`color`,description:`直接指定 Rue 语义色；未指定时会根据 status 自动映射。`,type:`'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'`,defaultValue:`按 status 推导`},{prop:`title`,description:`步骤主标题；在 children 写法中可与 description、subTitle、icon 组合为语义化内容区。`,type:`any`,defaultValue:`-`},{prop:`description / content`,description:`标题下方的补充说明文字；content 优先级高于 description。`,type:`any`,defaultValue:`-`},{prop:`subTitle`,description:`标题旁边的次级信息，适合展示倒计时、状态文案等。`,type:`any`,defaultValue:`-`},{prop:`icon`,description:`自定义步骤图标；继续支持旧的 <Steps.Icon /> 插槽写法。`,type:`any`,defaultValue:`-`},{prop:`status`,description:`单步状态，可覆盖根组件根据 current 推导的结果。`,type:`'wait' | 'process' | 'finish' | 'error'`,defaultValue:`-`},{prop:`dataContent / data-content`,description:`直接控制 daisyUI step 圆点中的字符，适合问号、勾号或自定义符号。`,type:`string`,defaultValue:`-`},{prop:`clickable / disabled`,description:`控制单步是否可交互，以及是否禁用点击切换。`,type:`boolean`,defaultValue:`false`}],V=()=>{let{tabs:e}=y(`useSetup:0:0:dup1`,()=>t(()=>({tabs:{horizontal:y(`ref:1:1`,()=>c(`preview`)),vertical:y(`ref:1:2`,()=>c(`preview`)),responsive:y(`ref:1:3`,()=>c(`preview`)),icons:y(`ref:1:4`,()=>c(`preview`)),dataContent:y(`ref:1:5`,()=>c(`preview`)),colors:y(`ref:1:6`,()=>c(`preview`)),scrollable:y(`ref:1:7`,()=>c(`preview`)),richStep:y(`ref:1:8`,()=>c(`preview`)),items:y(`ref:1:9`,()=>c(`preview`)),clickable:y(`ref:1:10`,()=>c(`preview`)),progressDot:y(`ref:1:11`,()=>c(`preview`))}})));return l(t=>{let o=n(),c=s(`rue:component:anchor`);return r(o,c),f(h(C,{children:l(()=>{let t=n(),o=a(`div`,t);r(t,o),g(o,`max-w-none prose prose-sm md:prose-base`);let c=a(`h1`,o);r(o,c),r(c,p(`Steps 步骤条`));let l=a(`p`,o);r(o,l),g(l,`text-sm mt-3 mb-3`),r(l,p(`Rue Steps 继续保留 daisyUI 的轻量视觉风格，同时补齐更贴近成熟业务组件的数据驱动 API： 支持`));let u=i(l);r(l,u),m(u,` `);let v=a(`code`,l);r(l,v),r(v,p(`items`)),r(l,p(`、`));let y=a(`code`,l);r(l,y),r(y,p(`current`)),r(l,p(`、`));let b=a(`code`,l);r(l,b),r(b,p(`status`)),r(l,p(`、`));let C=a(`code`,l);r(l,C),r(C,p(`progressDot`)),r(l,p(`、`));let T=a(`code`,l);r(l,T),r(T,p(`onChange`)),r(l,p(`，以及单步级别的`));let E=a(`code`,l);r(l,E),r(E,p(`title`)),r(l,p(`、`));let D=a(`code`,l);r(l,D),r(D,p(`description`)),r(l,p(`、`));let O=a(`code`,l);r(l,O),r(O,p(`subTitle`)),r(l,p(`和`));let k=a(`code`,l);r(l,k),r(k,p(`icon`)),r(l,p(`。`));let A=a(`div`,o);r(o,A),g(A,`not-prose mt-6 grid gap-4 md:grid-cols-3`);let j=a(`div`,A);r(A,j),g(j,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let M=a(`div`,j);r(j,M),g(M,`text-xs font-semibold uppercase tracking-wide text-primary`),r(M,p(`双模式`));let N=a(`div`,j);r(j,N),g(N,`mt-2 text-sm font-medium`),r(N,p(`children / items 都可用`));let P=a(`p`,j);r(j,P),g(P,`mt-2 text-sm opacity-70`),r(P,p(`老的`));let F=a(`code`,P);r(P,F),r(F,p(`Steps.Step`)),r(P,p(`和`));let I=a(`code`,P);r(P,I),r(I,p(`Steps.Icon`));let V=i(P);r(P,V),m(V,` `),r(P,p(`不变，新场景可直接传入数据数组。`));let H=a(`div`,A);r(A,H),g(H,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let U=a(`div`,H);r(H,U),g(U,`text-xs font-semibold uppercase tracking-wide text-secondary`),r(U,p(`状态推导`));let W=a(`div`,H);r(H,W),g(W,`mt-2 text-sm font-medium`),r(W,p(`current 自动推导完成/进行中/等待`));let G=a(`p`,H);r(H,G),g(G,`mt-2 text-sm opacity-70`),r(G,p(`不必手动给每一步都写颜色，只有例外项再单独覆盖即可。`));let K=a(`div`,A);r(A,K),g(K,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let q=a(`div`,K);r(K,q),g(q,`text-xs font-semibold uppercase tracking-wide text-accent`),r(q,p(`内容增强`));let J=a(`div`,K);r(K,J),g(J,`mt-2 text-sm font-medium`),r(J,p(`支持标题、副标题、描述和进度点`));let Y=a(`p`,K);r(K,Y),g(Y,`mt-2 text-sm opacity-70`),r(Y,p(`适合把原本只能写一行文本的步骤条，扩展成更完整的流程说明区。`));let X=a(`h2`,o);r(o,X),r(X,p(`基础布局`));let Z=a(`p`,o);r(o,Z),r(Z,p(`这一组示例保留 Rue 原有 demo，用来展示最基础的横向、纵向和响应式排列方式。`));let oe=s(`rue:component:anchor`);r(o,oe),d(()=>{let t=h(w,{title:`Horizontal`,tab:e.horizontal,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(L,{"data-testid":`steps-horizontal`,children:[S(L.Step,{color:`primary`,children:`Register`}),S(L.Step,{color:`primary`,children:`Choose plan`}),S(L.Step,{children:`Purchase`}),S(L.Step,{children:`Receive Product`})]})})}),code:`<Steps>
  <Steps.Step color="primary">Register</Steps.Step>
  <Steps.Step color="primary">Choose plan</Steps.Step>
  <Steps.Step>Purchase</Steps.Step>
  <Steps.Step>Receive Product</Steps.Step>
</Steps>`});_(()=>f(t,o,oe))});let se=s(`rue:component:anchor`);r(o,se),d(()=>{let t=h(w,{title:`Vertical`,tab:e.vertical,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(L,{direction:`vertical`,children:[S(L.Step,{color:`primary`,children:`Register`}),S(L.Step,{color:`primary`,children:`Choose plan`}),S(L.Step,{children:`Purchase`}),S(L.Step,{children:`Receive Product`})]})})}),code:`<Steps direction="vertical">
  <Steps.Step color="primary">Register</Steps.Step>
  <Steps.Step color="primary">Choose plan</Steps.Step>
  <Steps.Step>Purchase</Steps.Step>
  <Steps.Step>Receive Product</Steps.Step>
</Steps>`});_(()=>f(t,o,se))});let ce=s(`rue:component:anchor`);r(o,ce),d(()=>{let t=h(w,{title:`Responsive`,tab:e.responsive,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(L,{direction:`vertical`,className:`lg:steps-horizontal`,children:[S(L.Step,{color:`primary`,children:`Register`}),S(L.Step,{color:`primary`,children:`Choose plan`}),S(L.Step,{children:`Purchase`}),S(L.Step,{children:`Receive Product`})]})})}),code:`<Steps direction="vertical" className="lg:steps-horizontal">
  <Steps.Step color="primary">Register</Steps.Step>
  <Steps.Step color="primary">Choose plan</Steps.Step>
  <Steps.Step>Purchase</Steps.Step>
  <Steps.Step>Receive Product</Steps.Step>
</Steps>`});_(()=>f(t,o,ce))});let le=a(`h2`,o);r(o,le),r(le,p(`视觉定制`));let Q=a(`p`,o);r(o,Q),r(Q,p(`这一组仍然保留当前 Rue 的静态能力，包括自定义 icon、data-content、语义色和滚动容器。`));let ue=s(`rue:component:anchor`);r(o,ue),d(()=>{let t=h(w,{title:`With custom content in step-icon`,tab:e.icons,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(L,{"data-testid":`steps-icons`,children:[x(L.Step,{color:`neutral`,children:[S(L.Icon,{children:`1`}),`Step 1`]}),x(L.Step,{color:`neutral`,children:[S(L.Icon,{children:`2`}),`Step 2`]}),x(L.Step,{children:[S(L.Icon,{children:`3`}),`Step 3`]})]})})}),code:`<Steps>
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
</Steps>`});_(()=>f(t,o,ue))});let de=s(`rue:component:anchor`);r(o,de),d(()=>{let t=h(w,{title:`With data-content`,tab:e.dataContent,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(L,{children:[S(L.Step,{color:`neutral`,"data-content":`?`,children:`Step 1`}),S(L.Step,{color:`neutral`,"data-content":`!`,children:`Step 2`}),S(L.Step,{color:`neutral`,"data-content":`✓`,children:`Step 3`}),S(L.Step,{color:`neutral`,"data-content":`✕`,children:`Step 4`}),S(L.Step,{color:`neutral`,"data-content":`★`,children:`Step 5`})]})})}),code:`<Steps>
  <Steps.Step color="neutral" data-content="?">Step 1</Steps.Step>
  <Steps.Step color="neutral" data-content="!">Step 2</Steps.Step>
  <Steps.Step color="neutral" data-content="✓">Step 3</Steps.Step>
  <Steps.Step color="neutral" data-content="✕">Step 4</Steps.Step>
  <Steps.Step color="neutral" data-content="★">Step 5</Steps.Step>
</Steps>`});_(()=>f(t,o,de))});let fe=s(`rue:component:anchor`);r(o,fe),d(()=>{let t=h(w,{title:`Custom colors`,tab:e.colors,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(L,{children:[S(L.Step,{color:`info`,children:`Fly to moon`}),S(L.Step,{color:`info`,children:`Shrink the moon`}),S(L.Step,{color:`info`,children:`Grab the moon`}),S(L.Step,{color:`error`,"data-content":`?`,children:`Sit on toilet`})]})})}),code:`<Steps>
  <Steps.Step color="info">Fly to moon</Steps.Step>
  <Steps.Step color="info">Shrink the moon</Steps.Step>
  <Steps.Step color="info">Grab the moon</Steps.Step>
  <Steps.Step color="error" data-content="?">Sit on toilet</Steps.Step>
</Steps>`});_(()=>f(t,o,fe))});let pe=s(`rue:component:anchor`);r(o,pe),d(()=>{let t=h(w,{title:`With scrollable wrapper`,tab:e.scrollable,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:S(ne,{})})}),code:`<div className="grid gap-5">
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
</div>`});_(()=>f(t,o,pe))});let me=a(`h2`,o);r(o,me),r(me,p(`增强 API`));let he=a(`p`,o);r(o,he),r(he,p(`下面这些示例展示的是本次补齐的语义层能力，目标是让 Rue Steps 在不丢失现有风格的前提下更接近常见业务组件的使用体验。`));let ge=s(`rue:component:anchor`);r(o,ge),d(()=>{let t=h(w,{title:`Rich step content`,tab:e.richStep,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(L,{direction:`vertical`,children:[S(L.Step,{status:`finish`,title:`Connect repository`,description:`Link your GitHub repository and import the default build settings.`,icon:S(z,{})}),S(L.Step,{status:`process`,title:`Configure policies`,subTitle:`~ 2 mins`,description:`Set preview branches, branch protection, and deployment rules.`,icon:S(B,{})}),S(L.Step,{status:`wait`,title:`Ship to production`,description:`Merge the release branch after the final smoke test passes.`})]})})}),code:`<Steps direction="vertical">
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
</Steps>`});_(()=>f(t,o,ge))});let _e=s(`rue:component:anchor`);r(o,_e),d(()=>{let t=h(w,{title:`Items + current + status`,tab:e.items,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body gap-4`,children:[S(L,{current:1,status:`error`,items:[{title:`Account`,description:`Create workspace and invite collaborators.`,icon:S(z,{})},{title:`Verification`,subTitle:`Left 00:00:08`,description:`Waiting for security review and DNS validation.`,icon:S(B,{})},{title:`Payment`,description:`Unlock the production environment after confirmation.`,icon:S(ee,{})},{title:`Done`,description:`Your first deployment is ready.`,icon:S(te,{})}]}),x(`div`,{className:`text-sm opacity-70`,children:[`当前索引为 `,S(`code`,{children:`1`}),`，所以第 0 步自动完成，第 1 步继承根节点的`,` `,S(`code`,{children:`error`}),` 状态。`]})]})}),code:`<Steps
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
/>`});_(()=>f(t,o,_e))});let ve=s(`rue:component:anchor`);r(o,ve),d(()=>{let t=h(w,{title:`Clickable items`,tab:e.clickable,preview:S(re,{}),code:`const ClickableStepsDemo: FC = () => {
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
}`});_(()=>f(t,o,ve))});let ye=s(`rue:component:anchor`);r(o,ye),d(()=>{let t=h(w,{title:`Progress dot`,tab:e.progressDot,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:S(L,{progressDot:(e,t)=>S(`span`,{className:`tooltip tooltip-bottom`,"data-tip":`${t.title}`,children:e}),items:[{title:`Collect requirements`,description:`Align scope with design and engineering.`},{title:`Build demo`,description:`Create a stakeholder-ready flow.`},{title:`Launch beta`,description:`Open access to pilot users.`}]})})}),code:`<Steps
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
/>`});_(()=>f(t,o,ye))});let be=a(`h2`,o);r(o,be),r(be,p(`API`));let $=a(`p`,o);r(o,$);let xe=a(`code`,$);r($,xe),r(xe,p(`Steps`)),r($,p(`负责布局、状态推导与点击切换；`));let Se=a(`code`,$);r($,Se),r(Se,p(`Steps.Step`)),r($,p(`和`));let Ce=i($);r($,Ce),m(Ce,` `);let we=a(`code`,$);r($,we),r(we,p(`StepItem`)),r($,p(`共享同一组单步属性。`));let Te=a(`h3`,o);r(o,Te),r(Te,p(`Steps`));let Ee=s(`rue:component:anchor`);r(o,Ee),d(()=>{let e=h(R,{rows:ie});_(()=>f(e,o,Ee))});let De=a(`h3`,o);r(o,De),r(De,p(`Steps.Step / StepItem`));let Oe=s(`rue:component:anchor`);return r(o,Oe),d(()=>{let e=h(R,{rows:ae});_(()=>f(e,o,Oe))}),t})}),o,c),o})};export{V as default};