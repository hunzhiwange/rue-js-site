import{$ as e,Kt as t,Lt as n,Q as r,S as i,Vt as a,Y as o,Yt as s,Z as c,ct as l,et as u,gt as d,l as f,m as p,mt as m,ot as h,s as g,t as _,tt as v}from"./vapor-runtime-DHPuOjqh.js";import{a as y,n as b}from"./vapor-helpers-vapor-CJFAWine.js";import{a as x,i as S}from"./persistentSidebarPlayground-C_0jw6dq.js";import{n as C}from"./SidebarPlaygroundDesign-DMSFSCs3.js";import{t as w}from"./PreviewBlock-BYaG1RFO.js";var T=(...e)=>e.filter(Boolean).join(` `),E=e=>Array.isArray(e)?e.flatMap(e=>E(e)):e==null||typeof e==`boolean`?[]:[e],D=(e,t)=>t?`${e} ${t}`:e,O=(e,t)=>t??e,k=(e,t)=>{if(t)return t;if(e===`error`)return`error`;if(e===`finish`||e===`process`)return`primary`},A=(e,t)=>{if(!t){if(e===`finish`)return`✓`;if(e===`error`)return`✕`}},j=e=>{typeof e.preventDefault==`function`&&e.preventDefault(),typeof e.stopPropagation==`function`&&e.stopPropagation()},M=n=>{let{cls:r}=y(`useSetup:0:0`,()=>t(()=>({cls:y(`computed:1:0`,()=>d(()=>n.status===`wait`?`inline-block size-2.5 rounded-full border border-base-300 bg-base-100`:`inline-block size-2.5 rounded-full bg-current`))})));return f(t=>{let n=e(`span`,t);return s(()=>{l(n,String(r.get()))}),n})},N=(e,t)=>{if(!e)return;let n=S(M,{status:t.status});return typeof e==`function`?e(n,t):n},P=(e,t,n,r)=>e.status?e.status:typeof n==`number`?t<n?`finish`:t===n?r??`process`:`wait`:`wait`,F=(e,n,r)=>{let{nextChildren:a}=y(`useSetup:0:0:dup1`,()=>t(()=>({nextChildren:y(`computed:1:1`,()=>d(()=>E(r)))})));return i(e,n,...a.get())},I=({as:e=`li`,color:t,className:n,title:r,description:i,content:a,subTitle:o,icon:s,status:c,disabled:l,clickable:u,dataContent:d,children:f,index:m,onClick:h,onKeyDown:g,..._})=>{let v=e,y=a??i,b=r??f,C=u??!!h,w=k(c,t),T=d??_[`data-content`]??A(c,s!=null),E=r!=null||y!=null||o!=null||s!=null,O=_[`aria-current`]??(c===`process`?`step`:void 0),M=l?`true`:void 0,N=`step`;w&&(N+=` step-${w}`),C&&!l&&(N+=` cursor-pointer`),l&&(N+=` opacity-50`),C&&l&&(N+=` cursor-not-allowed`);let P=e=>{if(l){j(e);return}h&&h(e,m)},I=C?_.role??`button`:_.role,L=C?_.tabIndex??(l?-1:0):_.tabIndex,R=C?e=>{if(g&&g(e),e.defaultPrevented||l){l&&j(e);return}(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),P(e))}:_.onKeyDown,z=C?P:_.onClick,B=E?x(p,{children:[s==null?null:S(`span`,{className:D(`step-icon`,y==null?void 0:`mt-0.5`),"aria-hidden":`true`,children:s}),x(`span`,{className:`inline-flex min-w-0 flex-col gap-1 py-1 text-start`,children:[b!=null||o!=null?x(`span`,{className:`flex flex-wrap items-center gap-2 leading-tight`,children:[b==null?null:S(`span`,{className:`font-medium`,children:b}),o==null?null:S(`span`,{className:`text-xs opacity-60`,children:o})]}):null,y==null?null:S(`span`,{className:`text-xs leading-snug opacity-70`,children:y})]})]}):f;return F(v,{..._,className:D(N,n),...T==null?{}:{"data-content":T},role:I,tabIndex:L,onClick:z,onKeyDown:R,"aria-current":O,"aria-disabled":M},B)},L=Object.assign(({as:e=`ul`,direction:t,orientation:n,className:i,children:l,items:u,current:d,status:p,progressDot:m,onChange:h,...v})=>{let y=e,b=O(t,n),x=u&&u.length>0?u.map((e,t)=>{let n=P(e,t,d,p),i=e.icon??N(m,{index:t,status:n,title:e.title,description:e.description,content:e.content}),l=e.clickable??(!!h||!!e.onClick);return f(u=>{let f=r(),p=c(`rue:component:anchor`);return o(f,p),s(()=>{let r=_(I,{key:e.key??t,...e,index:t,status:n,color:k(n,e.color),icon:i,clickable:l,"aria-current":t===d?e[`aria-current`]??`step`:e[`aria-current`],onClick:(t,n)=>{e.disabled||(e.onClick&&typeof n==`number`&&e.onClick(t,n),h&&typeof n==`number`&&n!==d&&h(n))}});a(()=>g(r,f,p))}),f})}):l,S=`steps`;return b&&(S+=` steps-${b}`),F(y,{...v,className:T(S,i)},x)},{Step:I,Icon:({as:e=`span`,className:t,children:n,...r})=>F(e,{...r,className:D(`step-icon`,t)},n)}),R=t=>f(n=>{let i=e(`div`,n);l(i,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let d=e(`table`,i);o(i,d),l(d,`table table-zebra`);let p=e(`thead`,d);o(d,p);let m=e(`tr`,p);o(p,m);let _=e(`th`,m);o(m,_),o(_,u(`属性`));let v=e(`th`,m);o(m,v),o(v,u(`说明`));let y=e(`th`,m);o(m,y),o(y,u(`类型`));let x=e(`th`,m);o(m,x),o(x,u(`默认值`));let S=e(`tbody`,d);o(d,S);let C=c(`rue:list:start`),w=c(`rue:list:end`);o(S,C),o(S,w);let T=new Map;return s(()=>{T=b({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,n,i,l,u)=>{g(f(()=>{let n=r(),i=e(`tr`,n);o(n,i),s(()=>{h(i,`key`,String(t.prop))});let l=e(`td`,i);o(i,l);let u=e(`code`,l);o(l,u);let d=c(`rue:slot:anchor`);o(u,d),s(()=>{let e=t.prop;a(()=>g(e,u,d))});let f=e(`td`,i);o(i,f);let p=c(`rue:slot:anchor`);o(f,p),s(()=>{let e=t.description;a(()=>g(e,f,p))});let m=e(`td`,i);o(i,m);let _=e(`code`,m);o(m,_);let v=c(`rue:slot:anchor`);o(_,v),s(()=>{let e=t.type;a(()=>g(e,_,v))});let y=e(`td`,i);o(i,y);let b=e(`code`,y);o(y,b);let x=c(`rue:slot:anchor`);return o(b,x),s(()=>{let e=t.defaultValue;a(()=>g(e,b,x))}),n}),n,i)}})}),i}),z=()=>f(t=>{let n=e(`svg`,t);h(n,`xmlns`,`http://www.w3.org/2000/svg`),h(n,`viewBox`,`0 0 24 24`),h(n,`fill`,`none`),h(n,`stroke`,`currentColor`),h(n,`strokeWidth`,`2`),l(n,`size-[1.05em]`);let r=e(`path`,n);o(n,r),h(r,`strokeLinecap`,`round`),h(r,`strokeLinejoin`,`round`),h(r,`d`,`M6 20a6 6 0 0 1 12 0`);let i=e(`circle`,n);return o(n,i),h(i,`cx`,`12`),h(i,`cy`,`9`),h(i,`r`,`4`),n}),B=()=>f(t=>{let n=e(`svg`,t);h(n,`xmlns`,`http://www.w3.org/2000/svg`),h(n,`viewBox`,`0 0 24 24`),h(n,`fill`,`none`),h(n,`stroke`,`currentColor`),h(n,`strokeWidth`,`2`),l(n,`size-[1.05em]`);let r=e(`path`,n);o(n,r),h(r,`strokeLinecap`,`round`),h(r,`strokeLinejoin`,`round`),h(r,`d`,`m12 3 1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3Z`);let i=e(`path`,n);return o(n,i),h(i,`strokeLinecap`,`round`),h(i,`strokeLinejoin`,`round`),h(i,`d`,`M5 18h.01M19 18h.01M12 21h.01`),n}),ee=()=>f(t=>{let n=e(`svg`,t);h(n,`xmlns`,`http://www.w3.org/2000/svg`),h(n,`viewBox`,`0 0 24 24`),h(n,`fill`,`none`),h(n,`stroke`,`currentColor`),h(n,`strokeWidth`,`2`),l(n,`size-[1.05em]`);let r=e(`rect`,n);o(n,r),h(r,`x`,`3`),h(r,`y`,`5`),h(r,`width`,`18`),h(r,`height`,`14`),h(r,`rx`,`2`);let i=e(`path`,n);return o(n,i),h(i,`strokeLinecap`,`round`),h(i,`strokeLinejoin`,`round`),h(i,`d`,`M3 10h18`),n}),te=()=>f(t=>{let n=e(`svg`,t);h(n,`xmlns`,`http://www.w3.org/2000/svg`),h(n,`viewBox`,`0 0 24 24`),h(n,`fill`,`none`),h(n,`stroke`,`currentColor`),h(n,`strokeWidth`,`2`),l(n,`size-[1.05em]`);let r=e(`circle`,n);o(n,r),h(r,`cx`,`12`),h(r,`cy`,`12`),h(r,`r`,`9`);let i=e(`path`,n);o(n,i),h(i,`strokeLinecap`,`round`),h(i,`strokeLinejoin`,`round`),h(i,`d`,`M8 14s1.5 2 4 2 4-2 4-2`);let a=e(`path`,n);return o(n,a),h(a,`strokeLinecap`,`round`),h(a,`strokeLinejoin`,`round`),h(a,`d`,`M9 10h.01M15 10h.01`),n}),ne=()=>f(t=>{let n=e(`div`,t);l(n,`grid gap-5`);let i=e(`div`,n);o(n,i),l(i,`space-y-2`);let a=e(`div`,i);o(i,a),l(a,`text-sm font-medium`),o(a,u(`长标签交付流程`));let s=e(`div`,i);o(i,s),l(s,`max-w-xl overflow-x-auto pb-2`),h(s,`data-testid`,`steps-scroll-wrapper`);let d=c(`rue:component:anchor`);o(s,d),g(_(L,{className:`min-w-[1120px]`,children:f(()=>{let e=r(),t=c(`rue:component:anchor`);o(e,t),g(_(L.Step,{color:`primary`,children:`需求确认`}),e,t);let n=c(`rue:component:anchor`);o(e,n),g(_(L.Step,{color:`primary`,children:`设计评审与资源排期`}),e,n);let i=c(`rue:component:anchor`);o(e,i),g(_(L.Step,{color:`primary`,children:`前后端联调验收`}),e,i);let a=c(`rue:component:anchor`);o(e,a),g(_(L.Step,{color:`secondary`,children:`灰度发布到内部环境`}),e,a);let s=c(`rue:component:anchor`);o(e,s),g(_(L.Step,{color:`secondary`,children:`邀请试点客户体验`}),e,s);let l=c(`rue:component:anchor`);o(e,l),g(_(L.Step,{color:`accent`,children:`收集反馈并修复阻塞问题`}),e,l);let u=c(`rue:component:anchor`);o(e,u),g(_(L.Step,{color:`accent`,children:`准备正式发布说明`}),e,u);let d=c(`rue:component:anchor`);o(e,d),g(_(L.Step,{color:`warning`,children:`上线窗口审批`}),e,d);let f=c(`rue:component:anchor`);o(e,f),g(_(L.Step,{color:`warning`,children:`生产环境发布`}),e,f);let p=c(`rue:component:anchor`);o(e,p),g(_(L.Step,{color:`success`,children:`发布后巡检`}),e,p);let m=c(`rue:component:anchor`);return o(e,m),g(_(L.Step,{color:`neutral`,children:`归档复盘`}),e,m),e})}),s,d);let p=e(`div`,n);o(n,p),l(p,`space-y-2`);let m=e(`div`,p);o(p,m),l(m,`text-sm font-medium`),o(m,u(`编号里程碑`));let v=e(`div`,p);o(p,v),l(v,`max-w-md overflow-x-auto pb-2`);let y=c(`rue:component:anchor`);return o(v,y),g(_(L,{className:`min-w-[960px]`,children:f(()=>{let e=r(),t=c(`rue:component:anchor`);o(e,t),g(_(L.Step,{color:`neutral`,children:`Start`}),e,t);let n=c(`rue:component:anchor`);o(e,n),g(_(L.Step,{color:`secondary`,children:`02`}),e,n);let i=c(`rue:component:anchor`);o(e,i),g(_(L.Step,{color:`secondary`,children:`03`}),e,i);let a=c(`rue:component:anchor`);o(e,a),g(_(L.Step,{color:`secondary`,children:`04`}),e,a);let s=c(`rue:component:anchor`);o(e,s),g(_(L.Step,{children:`05`}),e,s);let l=c(`rue:component:anchor`);o(e,l),g(_(L.Step,{color:`accent`,children:`06`}),e,l);let u=c(`rue:component:anchor`);o(e,u),g(_(L.Step,{color:`accent`,children:`07`}),e,u);let d=c(`rue:component:anchor`);o(e,d),g(_(L.Step,{children:`08`}),e,d);let f=c(`rue:component:anchor`);o(e,f),g(_(L.Step,{color:`info`,children:`09`}),e,f);let p=c(`rue:component:anchor`);o(e,p),g(_(L.Step,{color:`info`,children:`10`}),e,p);let m=c(`rue:component:anchor`);o(e,m),g(_(L.Step,{color:`error`,children:`11`}),e,m);let h=c(`rue:component:anchor`);o(e,h),g(_(L.Step,{color:`warning`,children:`12`}),e,h);let v=c(`rue:component:anchor`);return o(e,v),g(_(L.Step,{color:`neutral`,children:`End`}),e,v),e})}),v,y),n}),re=()=>{let{current:r}=y(`useSetup:0:0`,()=>t(()=>({current:y(`ref:1:0`,()=>n(0))})));return f(t=>{let n=e(`div`,t);l(n,`card bg-base-100 shadow-sm`);let i=e(`div`,n);o(n,i),l(i,`card-body gap-4`);let d=c(`rue:component:anchor`);o(i,d),s(()=>{let e=_(L,{current:r.value,onChange:e=>r.value=e,items:[{title:`Draft`,description:`Prepare the release scope and changelog.`,clickable:!0},{title:`Review`,description:`QA and product approve the rollout plan.`,clickable:!0},{title:`Deploy`,description:`Promote the release to production.`,clickable:!0}]});a(()=>g(e,i,d))});let f=e(`div`,i);o(i,f),l(f,`rounded-box border border-dashed border-base-300 bg-base-200/50 px-4 py-3 text-sm`),o(f,u(`点击步骤可切换，当前选中步骤：`));let p=e(`code`,f);o(f,p);let h=v(p);return o(p,h),s(()=>{m(h,r.value)}),n})},ie=[{prop:`direction / orientation`,description:`设置整体朝向；支持沿用 Rue 旧的 direction 写法，也支持更通用的 orientation 别名。`,type:`'horizontal' | 'vertical'`,defaultValue:`-`},{prop:`items`,description:`数据驱动模式，适合与 current、status、onChange 一起使用。`,type:`StepItem[]`,defaultValue:`-`},{prop:`current`,description:`当前进行中的步骤索引；前面的步骤自动推导为完成态，后面的步骤自动推导为等待态。`,type:`number`,defaultValue:`-`},{prop:`status`,description:`当前步骤的全局状态覆盖，仅作用于 current 命中的步骤。`,type:`'wait' | 'process' | 'finish' | 'error'`,defaultValue:`'process'`},{prop:`progressDot`,description:`切换为进度点模式，也支持自定义 dot 渲染函数。`,type:`boolean | (dot, info) => any`,defaultValue:`false`},{prop:`onChange`,description:`搭配 items 使用时启用点击切换，回传目标步骤索引。`,type:`(current: number) => void`,defaultValue:`-`}],ae=[{prop:`color`,description:`直接指定 Rue 语义色；未指定时会根据 status 自动映射。`,type:`'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'`,defaultValue:`按 status 推导`},{prop:`title`,description:`步骤主标题；在 children 写法中可与 description、subTitle、icon 组合为语义化内容区。`,type:`any`,defaultValue:`-`},{prop:`description / content`,description:`标题下方的补充说明文字；content 优先级高于 description。`,type:`any`,defaultValue:`-`},{prop:`subTitle`,description:`标题旁边的次级信息，适合展示倒计时、状态文案等。`,type:`any`,defaultValue:`-`},{prop:`icon`,description:`自定义步骤图标；继续支持旧的 <Steps.Icon /> 插槽写法。`,type:`any`,defaultValue:`-`},{prop:`status`,description:`单步状态，可覆盖根组件根据 current 推导的结果。`,type:`'wait' | 'process' | 'finish' | 'error'`,defaultValue:`-`},{prop:`dataContent / data-content`,description:`直接控制 daisyUI step 圆点中的字符，适合问号、勾号或自定义符号。`,type:`string`,defaultValue:`-`},{prop:`clickable / disabled`,description:`控制单步是否可交互，以及是否禁用点击切换。`,type:`boolean`,defaultValue:`false`}],V=()=>{let{tabs:i}=y(`useSetup:0:0:dup1`,()=>t(()=>({tabs:{horizontal:y(`ref:1:1`,()=>n(`preview`)),vertical:y(`ref:1:2`,()=>n(`preview`)),responsive:y(`ref:1:3`,()=>n(`preview`)),icons:y(`ref:1:4`,()=>n(`preview`)),dataContent:y(`ref:1:5`,()=>n(`preview`)),colors:y(`ref:1:6`,()=>n(`preview`)),scrollable:y(`ref:1:7`,()=>n(`preview`)),richStep:y(`ref:1:8`,()=>n(`preview`)),items:y(`ref:1:9`,()=>n(`preview`)),clickable:y(`ref:1:10`,()=>n(`preview`)),progressDot:y(`ref:1:11`,()=>n(`preview`))}})));return f(t=>{let n=r(),d=c(`rue:component:anchor`);return o(n,d),g(_(C,{children:f(()=>{let t=r(),n=e(`div`,t);o(t,n),l(n,`max-w-none prose prose-sm md:prose-base`);let d=e(`h1`,n);o(n,d),o(d,u(`Steps 步骤条`));let f=e(`p`,n);o(n,f),l(f,`text-sm mt-3 mb-3`),o(f,u(`Rue Steps 继续保留 daisyUI 的轻量视觉风格，同时补齐更贴近成熟业务组件的数据驱动 API： 支持`));let p=v(f);o(f,p),m(p,` `);let h=e(`code`,f);o(f,h),o(h,u(`items`)),o(f,u(`、`));let y=e(`code`,f);o(f,y),o(y,u(`current`)),o(f,u(`、`));let b=e(`code`,f);o(f,b),o(b,u(`status`)),o(f,u(`、`));let C=e(`code`,f);o(f,C),o(C,u(`progressDot`)),o(f,u(`、`));let T=e(`code`,f);o(f,T),o(T,u(`onChange`)),o(f,u(`，以及单步级别的`));let E=e(`code`,f);o(f,E),o(E,u(`title`)),o(f,u(`、`));let D=e(`code`,f);o(f,D),o(D,u(`description`)),o(f,u(`、`));let O=e(`code`,f);o(f,O),o(O,u(`subTitle`)),o(f,u(`和`));let k=e(`code`,f);o(f,k),o(k,u(`icon`)),o(f,u(`。`));let A=e(`div`,n);o(n,A),l(A,`not-prose mt-6 grid gap-4 md:grid-cols-3`);let j=e(`div`,A);o(A,j),l(j,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let M=e(`div`,j);o(j,M),l(M,`text-xs font-semibold uppercase tracking-wide text-primary`),o(M,u(`双模式`));let N=e(`div`,j);o(j,N),l(N,`mt-2 text-sm font-medium`),o(N,u(`children / items 都可用`));let P=e(`p`,j);o(j,P),l(P,`mt-2 text-sm opacity-70`),o(P,u(`老的`));let F=e(`code`,P);o(P,F),o(F,u(`Steps.Step`)),o(P,u(`和`));let I=e(`code`,P);o(P,I),o(I,u(`Steps.Icon`));let V=v(P);o(P,V),m(V,` `),o(P,u(`不变，新场景可直接传入数据数组。`));let H=e(`div`,A);o(A,H),l(H,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let U=e(`div`,H);o(H,U),l(U,`text-xs font-semibold uppercase tracking-wide text-secondary`),o(U,u(`状态推导`));let W=e(`div`,H);o(H,W),l(W,`mt-2 text-sm font-medium`),o(W,u(`current 自动推导完成/进行中/等待`));let G=e(`p`,H);o(H,G),l(G,`mt-2 text-sm opacity-70`),o(G,u(`不必手动给每一步都写颜色，只有例外项再单独覆盖即可。`));let K=e(`div`,A);o(A,K),l(K,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let q=e(`div`,K);o(K,q),l(q,`text-xs font-semibold uppercase tracking-wide text-accent`),o(q,u(`内容增强`));let J=e(`div`,K);o(K,J),l(J,`mt-2 text-sm font-medium`),o(J,u(`支持标题、副标题、描述和进度点`));let Y=e(`p`,K);o(K,Y),l(Y,`mt-2 text-sm opacity-70`),o(Y,u(`适合把原本只能写一行文本的步骤条，扩展成更完整的流程说明区。`));let X=e(`h2`,n);o(n,X),o(X,u(`基础布局`));let Z=e(`p`,n);o(n,Z),o(Z,u(`这一组示例保留 Rue 原有 demo，用来展示最基础的横向、纵向和响应式排列方式。`));let oe=c(`rue:component:anchor`);o(n,oe),s(()=>{let e=_(w,{title:`Horizontal`,tab:i.horizontal,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(L,{"data-testid":`steps-horizontal`,children:[S(L.Step,{color:`primary`,children:`Register`}),S(L.Step,{color:`primary`,children:`Choose plan`}),S(L.Step,{children:`Purchase`}),S(L.Step,{children:`Receive Product`})]})})}),code:`<Steps>
  <Steps.Step color="primary">Register</Steps.Step>
  <Steps.Step color="primary">Choose plan</Steps.Step>
  <Steps.Step>Purchase</Steps.Step>
  <Steps.Step>Receive Product</Steps.Step>
</Steps>`});a(()=>g(e,n,oe))});let se=c(`rue:component:anchor`);o(n,se),s(()=>{let e=_(w,{title:`Vertical`,tab:i.vertical,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(L,{direction:`vertical`,children:[S(L.Step,{color:`primary`,children:`Register`}),S(L.Step,{color:`primary`,children:`Choose plan`}),S(L.Step,{children:`Purchase`}),S(L.Step,{children:`Receive Product`})]})})}),code:`<Steps direction="vertical">
  <Steps.Step color="primary">Register</Steps.Step>
  <Steps.Step color="primary">Choose plan</Steps.Step>
  <Steps.Step>Purchase</Steps.Step>
  <Steps.Step>Receive Product</Steps.Step>
</Steps>`});a(()=>g(e,n,se))});let ce=c(`rue:component:anchor`);o(n,ce),s(()=>{let e=_(w,{title:`Responsive`,tab:i.responsive,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(L,{direction:`vertical`,className:`lg:steps-horizontal`,children:[S(L.Step,{color:`primary`,children:`Register`}),S(L.Step,{color:`primary`,children:`Choose plan`}),S(L.Step,{children:`Purchase`}),S(L.Step,{children:`Receive Product`})]})})}),code:`<Steps direction="vertical" className="lg:steps-horizontal">
  <Steps.Step color="primary">Register</Steps.Step>
  <Steps.Step color="primary">Choose plan</Steps.Step>
  <Steps.Step>Purchase</Steps.Step>
  <Steps.Step>Receive Product</Steps.Step>
</Steps>`});a(()=>g(e,n,ce))});let le=e(`h2`,n);o(n,le),o(le,u(`视觉定制`));let Q=e(`p`,n);o(n,Q),o(Q,u(`这一组仍然保留当前 Rue 的静态能力，包括自定义 icon、data-content、语义色和滚动容器。`));let ue=c(`rue:component:anchor`);o(n,ue),s(()=>{let e=_(w,{title:`With custom content in step-icon`,tab:i.icons,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(L,{"data-testid":`steps-icons`,children:[x(L.Step,{color:`neutral`,children:[S(L.Icon,{children:`1`}),`Step 1`]}),x(L.Step,{color:`neutral`,children:[S(L.Icon,{children:`2`}),`Step 2`]}),x(L.Step,{children:[S(L.Icon,{children:`3`}),`Step 3`]})]})})}),code:`<Steps>
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
</Steps>`});a(()=>g(e,n,ue))});let de=c(`rue:component:anchor`);o(n,de),s(()=>{let e=_(w,{title:`With data-content`,tab:i.dataContent,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(L,{children:[S(L.Step,{color:`neutral`,"data-content":`?`,children:`Step 1`}),S(L.Step,{color:`neutral`,"data-content":`!`,children:`Step 2`}),S(L.Step,{color:`neutral`,"data-content":`✓`,children:`Step 3`}),S(L.Step,{color:`neutral`,"data-content":`✕`,children:`Step 4`}),S(L.Step,{color:`neutral`,"data-content":`★`,children:`Step 5`})]})})}),code:`<Steps>
  <Steps.Step color="neutral" data-content="?">Step 1</Steps.Step>
  <Steps.Step color="neutral" data-content="!">Step 2</Steps.Step>
  <Steps.Step color="neutral" data-content="✓">Step 3</Steps.Step>
  <Steps.Step color="neutral" data-content="✕">Step 4</Steps.Step>
  <Steps.Step color="neutral" data-content="★">Step 5</Steps.Step>
</Steps>`});a(()=>g(e,n,de))});let fe=c(`rue:component:anchor`);o(n,fe),s(()=>{let e=_(w,{title:`Custom colors`,tab:i.colors,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(L,{children:[S(L.Step,{color:`info`,children:`Fly to moon`}),S(L.Step,{color:`info`,children:`Shrink the moon`}),S(L.Step,{color:`info`,children:`Grab the moon`}),S(L.Step,{color:`error`,"data-content":`?`,children:`Sit on toilet`})]})})}),code:`<Steps>
  <Steps.Step color="info">Fly to moon</Steps.Step>
  <Steps.Step color="info">Shrink the moon</Steps.Step>
  <Steps.Step color="info">Grab the moon</Steps.Step>
  <Steps.Step color="error" data-content="?">Sit on toilet</Steps.Step>
</Steps>`});a(()=>g(e,n,fe))});let pe=c(`rue:component:anchor`);o(n,pe),s(()=>{let e=_(w,{title:`With scrollable wrapper`,tab:i.scrollable,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:S(ne,{})})}),code:`<div className="grid gap-5">
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
</div>`});a(()=>g(e,n,pe))});let me=e(`h2`,n);o(n,me),o(me,u(`增强 API`));let he=e(`p`,n);o(n,he),o(he,u(`下面这些示例展示的是本次补齐的语义层能力，目标是让 Rue Steps 在不丢失现有风格的前提下更接近常见业务组件的使用体验。`));let ge=c(`rue:component:anchor`);o(n,ge),s(()=>{let e=_(w,{title:`Rich step content`,tab:i.richStep,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(L,{direction:`vertical`,children:[S(L.Step,{status:`finish`,title:`Connect repository`,description:`Link your GitHub repository and import the default build settings.`,icon:S(z,{})}),S(L.Step,{status:`process`,title:`Configure policies`,subTitle:`~ 2 mins`,description:`Set preview branches, branch protection, and deployment rules.`,icon:S(B,{})}),S(L.Step,{status:`wait`,title:`Ship to production`,description:`Merge the release branch after the final smoke test passes.`})]})})}),code:`<Steps direction="vertical">
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
</Steps>`});a(()=>g(e,n,ge))});let _e=c(`rue:component:anchor`);o(n,_e),s(()=>{let e=_(w,{title:`Items + current + status`,tab:i.items,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body gap-4`,children:[S(L,{current:1,status:`error`,items:[{title:`Account`,description:`Create workspace and invite collaborators.`,icon:S(z,{})},{title:`Verification`,subTitle:`Left 00:00:08`,description:`Waiting for security review and DNS validation.`,icon:S(B,{})},{title:`Payment`,description:`Unlock the production environment after confirmation.`,icon:S(ee,{})},{title:`Done`,description:`Your first deployment is ready.`,icon:S(te,{})}]}),x(`div`,{className:`text-sm opacity-70`,children:[`当前索引为 `,S(`code`,{children:`1`}),`，所以第 0 步自动完成，第 1 步继承根节点的`,` `,S(`code`,{children:`error`}),` 状态。`]})]})}),code:`<Steps
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
/>`});a(()=>g(e,n,_e))});let ve=c(`rue:component:anchor`);o(n,ve),s(()=>{let e=_(w,{title:`Clickable items`,tab:i.clickable,preview:S(re,{}),code:`const ClickableStepsDemo: FC = () => {
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
}`});a(()=>g(e,n,ve))});let ye=c(`rue:component:anchor`);o(n,ye),s(()=>{let e=_(w,{title:`Progress dot`,tab:i.progressDot,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:S(L,{progressDot:(e,t)=>S(`span`,{className:`tooltip tooltip-bottom`,"data-tip":`${t.title}`,children:e}),items:[{title:`Collect requirements`,description:`Align scope with design and engineering.`},{title:`Build demo`,description:`Create a stakeholder-ready flow.`},{title:`Launch beta`,description:`Open access to pilot users.`}]})})}),code:`<Steps
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
/>`});a(()=>g(e,n,ye))});let be=e(`h2`,n);o(n,be),o(be,u(`API`));let $=e(`p`,n);o(n,$);let xe=e(`code`,$);o($,xe),o(xe,u(`Steps`)),o($,u(`负责布局、状态推导与点击切换；`));let Se=e(`code`,$);o($,Se),o(Se,u(`Steps.Step`)),o($,u(`和`));let Ce=v($);o($,Ce),m(Ce,` `);let we=e(`code`,$);o($,we),o(we,u(`StepItem`)),o($,u(`共享同一组单步属性。`));let Te=e(`h3`,n);o(n,Te),o(Te,u(`Steps`));let Ee=c(`rue:component:anchor`);o(n,Ee),s(()=>{let e=_(R,{rows:ie});a(()=>g(e,n,Ee))});let De=e(`h3`,n);o(n,De),o(De,u(`Steps.Step / StepItem`));let Oe=c(`rue:component:anchor`);return o(n,Oe),s(()=>{let e=_(R,{rows:ae});a(()=>g(e,n,Oe))}),t})}),n,d),n})};export{V as default};