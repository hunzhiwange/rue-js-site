import{$ as e,D as t,Kt as n,Lt as r,Q as i,Vt as a,Y as o,Yt as s,Z as c,ct as l,d as u,et as d,gt as f,l as p,mt as m,ot as h,t as g,tt as _,y as v}from"./vapor-runtime-BR_2rwNk.js";import{a as y,n as b}from"./vapor-helpers-vapor-DkadWylb.js";import{i as x,r as S}from"./persistentSidebarPlayground-BLfmxcKI.js";import{n as C}from"./SidebarPlaygroundDesign-BScNtO2r.js";import{t as w}from"./PreviewBlock-DNT1sEzZ.js";var T=(...e)=>e.filter(Boolean).join(` `),E=e=>Array.isArray(e)?e.flatMap(e=>E(e)):e==null||typeof e==`boolean`?[]:[e],D=(e,t)=>t?`${e} ${t}`:e,O=(e,t)=>t??e,k=(e,t)=>{if(t)return t;if(e===`error`)return`error`;if(e===`finish`||e===`process`)return`primary`},A=(e,t)=>{if(!t){if(e===`finish`)return`✓`;if(e===`error`)return`✕`}},j=e=>{typeof e.preventDefault==`function`&&e.preventDefault(),typeof e.stopPropagation==`function`&&e.stopPropagation()},M=t=>{let{cls:r}=y(`useSetup:0:0`,()=>n(()=>({cls:y(`computed:1:0`,()=>f(()=>t.status===`wait`?`inline-block size-2.5 rounded-full border border-base-300 bg-base-100`:`inline-block size-2.5 rounded-full bg-current`))})));return u(t=>{let n=e(`span`,t);return s(()=>{l(n,String(r.get()))}),n})},N=(e,t)=>{if(!e)return;let n=S(M,{status:t.status});return typeof e==`function`?e(n,t):n},P=(e,t,n,r)=>e.status?e.status:typeof n==`number`?t<n?`finish`:t===n?r??`process`:`wait`:`wait`,F=(e,r,i)=>{let{nextChildren:a}=y(`useSetup:0:0:dup1`,()=>n(()=>({nextChildren:y(`computed:1:1`,()=>f(()=>E(i)))})));return t(e,r,...a.get())},I=({as:e=`li`,color:t,className:n,title:r,description:i,content:a,subTitle:o,icon:s,status:c,disabled:l,clickable:u,dataContent:d,children:f,index:p,onClick:m,onKeyDown:h,...g})=>{let _=e,y=a??i,b=r??f,C=u??!!m,w=k(c,t),T=d??g[`data-content`]??A(c,s!=null),E=r!=null||y!=null||o!=null||s!=null,O=g[`aria-current`]??(c===`process`?`step`:void 0),M=l?`true`:void 0,N=`step`;w&&(N+=` step-${w}`),C&&!l&&(N+=` cursor-pointer`),l&&(N+=` opacity-50`),C&&l&&(N+=` cursor-not-allowed`);let P=e=>{if(l){j(e);return}m&&m(e,p)},I=C?g.role??`button`:g.role,L=C?g.tabIndex??(l?-1:0):g.tabIndex,R=C?e=>{if(h&&h(e),e.defaultPrevented||l){l&&j(e);return}(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),P(e))}:g.onKeyDown,z=C?P:g.onClick,B=E?x(v,{children:[s==null?null:S(`span`,{className:D(`step-icon`,y==null?void 0:`mt-0.5`),"aria-hidden":`true`,children:s}),x(`span`,{className:`inline-flex min-w-0 flex-col gap-1 py-1 text-start`,children:[b!=null||o!=null?x(`span`,{className:`flex flex-wrap items-center gap-2 leading-tight`,children:[b==null?null:S(`span`,{className:`font-medium`,children:b}),o==null?null:S(`span`,{className:`text-xs opacity-60`,children:o})]}):null,y==null?null:S(`span`,{className:`text-xs leading-snug opacity-70`,children:y})]})]}):f;return F(_,{...g,className:D(N,n),...T==null?{}:{"data-content":T},role:I,tabIndex:L,onClick:z,onKeyDown:R,"aria-current":O,"aria-disabled":M},B)},L=Object.assign(({as:e=`ul`,direction:t,orientation:n,className:r,children:l,items:d,current:f,status:m,progressDot:h,onChange:_,...v})=>{let y=e,b=O(t,n),x=d&&d.length>0?d.map((e,t)=>{let n=P(e,t,f,m),r=e.icon??N(h,{index:t,status:n,title:e.title,description:e.description,content:e.content}),l=e.clickable??(!!_||!!e.onClick);return u(u=>{let d=i(),m=c(`rue:component:anchor`);return o(d,m),s(()=>{let i=g(I,{key:e.key??t,...e,index:t,status:n,color:k(n,e.color),icon:r,clickable:l,onClick:(t,n)=>{e.disabled||(e.onClick&&typeof n==`number`&&e.onClick(t,n),_&&typeof n==`number`&&n!==f&&_(n))}});a(()=>p(i,d,m))}),d})}):l,S=`steps`;return b&&(S+=` steps-${b}`),F(y,{...v,className:T(S,r)},x)},{Step:I,Icon:({as:e=`span`,className:t,children:n,...r})=>F(e,{...r,className:D(`step-icon`,t)},n)}),R=t=>u(n=>{let r=e(`div`,n);l(r,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=e(`table`,r);o(r,f),l(f,`table table-zebra`);let m=e(`thead`,f);o(f,m);let g=e(`tr`,m);o(m,g);let _=e(`th`,g);o(g,_),o(_,d(`属性`));let v=e(`th`,g);o(g,v),o(v,d(`说明`));let y=e(`th`,g);o(g,y),o(y,d(`类型`));let x=e(`th`,g);o(g,x),o(x,d(`默认值`));let S=e(`tbody`,f);o(f,S);let C=c(`rue:list:start`),w=c(`rue:list:end`);o(S,C),o(S,w);let T=new Map;return s(()=>{T=b({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,n,r,l,d)=>{p(u(()=>{let n=i(),r=e(`tr`,n);o(n,r),s(()=>{h(r,`key`,String(t.prop))});let l=e(`td`,r);o(r,l);let u=e(`code`,l);o(l,u);let d=c(`rue:slot:anchor`);o(u,d),s(()=>{let e=t.prop;a(()=>p(e,u,d))});let f=e(`td`,r);o(r,f);let m=c(`rue:slot:anchor`);o(f,m),s(()=>{let e=t.description;a(()=>p(e,f,m))});let g=e(`td`,r);o(r,g);let _=e(`code`,g);o(g,_);let v=c(`rue:slot:anchor`);o(_,v),s(()=>{let e=t.type;a(()=>p(e,_,v))});let y=e(`td`,r);o(r,y);let b=e(`code`,y);o(y,b);let x=c(`rue:slot:anchor`);return o(b,x),s(()=>{let e=t.defaultValue;a(()=>p(e,b,x))}),n}),n,r)}})}),r}),z=()=>u(t=>{let n=e(`svg`,t);h(n,`xmlns`,`http://www.w3.org/2000/svg`),h(n,`viewBox`,`0 0 24 24`),h(n,`fill`,`none`),h(n,`stroke`,`currentColor`),h(n,`strokeWidth`,`2`),l(n,`size-[1.05em]`);let r=e(`path`,n);o(n,r),h(r,`strokeLinecap`,`round`),h(r,`strokeLinejoin`,`round`),h(r,`d`,`M6 20a6 6 0 0 1 12 0`);let i=e(`circle`,n);return o(n,i),h(i,`cx`,`12`),h(i,`cy`,`9`),h(i,`r`,`4`),n}),B=()=>u(t=>{let n=e(`svg`,t);h(n,`xmlns`,`http://www.w3.org/2000/svg`),h(n,`viewBox`,`0 0 24 24`),h(n,`fill`,`none`),h(n,`stroke`,`currentColor`),h(n,`strokeWidth`,`2`),l(n,`size-[1.05em]`);let r=e(`path`,n);o(n,r),h(r,`strokeLinecap`,`round`),h(r,`strokeLinejoin`,`round`),h(r,`d`,`m12 3 1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3Z`);let i=e(`path`,n);return o(n,i),h(i,`strokeLinecap`,`round`),h(i,`strokeLinejoin`,`round`),h(i,`d`,`M5 18h.01M19 18h.01M12 21h.01`),n}),ee=()=>u(t=>{let n=e(`svg`,t);h(n,`xmlns`,`http://www.w3.org/2000/svg`),h(n,`viewBox`,`0 0 24 24`),h(n,`fill`,`none`),h(n,`stroke`,`currentColor`),h(n,`strokeWidth`,`2`),l(n,`size-[1.05em]`);let r=e(`rect`,n);o(n,r),h(r,`x`,`3`),h(r,`y`,`5`),h(r,`width`,`18`),h(r,`height`,`14`),h(r,`rx`,`2`);let i=e(`path`,n);return o(n,i),h(i,`strokeLinecap`,`round`),h(i,`strokeLinejoin`,`round`),h(i,`d`,`M3 10h18`),n}),te=()=>u(t=>{let n=e(`svg`,t);h(n,`xmlns`,`http://www.w3.org/2000/svg`),h(n,`viewBox`,`0 0 24 24`),h(n,`fill`,`none`),h(n,`stroke`,`currentColor`),h(n,`strokeWidth`,`2`),l(n,`size-[1.05em]`);let r=e(`circle`,n);o(n,r),h(r,`cx`,`12`),h(r,`cy`,`12`),h(r,`r`,`9`);let i=e(`path`,n);o(n,i),h(i,`strokeLinecap`,`round`),h(i,`strokeLinejoin`,`round`),h(i,`d`,`M8 14s1.5 2 4 2 4-2 4-2`);let a=e(`path`,n);return o(n,a),h(a,`strokeLinecap`,`round`),h(a,`strokeLinejoin`,`round`),h(a,`d`,`M9 10h.01M15 10h.01`),n}),ne=()=>u(t=>{let n=e(`div`,t);l(n,`grid gap-5`);let r=e(`div`,n);o(n,r),l(r,`space-y-2`);let a=e(`div`,r);o(r,a),l(a,`text-sm font-medium`),o(a,d(`长标签交付流程`));let s=e(`div`,r);o(r,s),l(s,`max-w-xl overflow-x-auto pb-2`),h(s,`data-testid`,`steps-scroll-wrapper`);let f=c(`rue:component:anchor`);o(s,f),p(g(L,{className:`min-w-[1120px]`,children:u(()=>{let e=i(),t=c(`rue:component:anchor`);o(e,t),p(g(L.Step,{color:`primary`,children:`需求确认`}),e,t);let n=c(`rue:component:anchor`);o(e,n),p(g(L.Step,{color:`primary`,children:`设计评审与资源排期`}),e,n);let r=c(`rue:component:anchor`);o(e,r),p(g(L.Step,{color:`primary`,children:`前后端联调验收`}),e,r);let a=c(`rue:component:anchor`);o(e,a),p(g(L.Step,{color:`secondary`,children:`灰度发布到内部环境`}),e,a);let s=c(`rue:component:anchor`);o(e,s),p(g(L.Step,{color:`secondary`,children:`邀请试点客户体验`}),e,s);let l=c(`rue:component:anchor`);o(e,l),p(g(L.Step,{color:`accent`,children:`收集反馈并修复阻塞问题`}),e,l);let u=c(`rue:component:anchor`);o(e,u),p(g(L.Step,{color:`accent`,children:`准备正式发布说明`}),e,u);let d=c(`rue:component:anchor`);o(e,d),p(g(L.Step,{color:`warning`,children:`上线窗口审批`}),e,d);let f=c(`rue:component:anchor`);o(e,f),p(g(L.Step,{color:`warning`,children:`生产环境发布`}),e,f);let m=c(`rue:component:anchor`);o(e,m),p(g(L.Step,{color:`success`,children:`发布后巡检`}),e,m);let h=c(`rue:component:anchor`);return o(e,h),p(g(L.Step,{color:`neutral`,children:`归档复盘`}),e,h),e})}),s,f);let m=e(`div`,n);o(n,m),l(m,`space-y-2`);let _=e(`div`,m);o(m,_),l(_,`text-sm font-medium`),o(_,d(`编号里程碑`));let v=e(`div`,m);o(m,v),l(v,`max-w-md overflow-x-auto pb-2`);let y=c(`rue:component:anchor`);return o(v,y),p(g(L,{className:`min-w-[960px]`,children:u(()=>{let e=i(),t=c(`rue:component:anchor`);o(e,t),p(g(L.Step,{color:`neutral`,children:`Start`}),e,t);let n=c(`rue:component:anchor`);o(e,n),p(g(L.Step,{color:`secondary`,children:`02`}),e,n);let r=c(`rue:component:anchor`);o(e,r),p(g(L.Step,{color:`secondary`,children:`03`}),e,r);let a=c(`rue:component:anchor`);o(e,a),p(g(L.Step,{color:`secondary`,children:`04`}),e,a);let s=c(`rue:component:anchor`);o(e,s),p(g(L.Step,{children:`05`}),e,s);let l=c(`rue:component:anchor`);o(e,l),p(g(L.Step,{color:`accent`,children:`06`}),e,l);let u=c(`rue:component:anchor`);o(e,u),p(g(L.Step,{color:`accent`,children:`07`}),e,u);let d=c(`rue:component:anchor`);o(e,d),p(g(L.Step,{children:`08`}),e,d);let f=c(`rue:component:anchor`);o(e,f),p(g(L.Step,{color:`info`,children:`09`}),e,f);let m=c(`rue:component:anchor`);o(e,m),p(g(L.Step,{color:`info`,children:`10`}),e,m);let h=c(`rue:component:anchor`);o(e,h),p(g(L.Step,{color:`error`,children:`11`}),e,h);let _=c(`rue:component:anchor`);o(e,_),p(g(L.Step,{color:`warning`,children:`12`}),e,_);let v=c(`rue:component:anchor`);return o(e,v),p(g(L.Step,{color:`neutral`,children:`End`}),e,v),e})}),v,y),n}),re=()=>{let{current:t}=y(`useSetup:0:0`,()=>n(()=>({current:y(`ref:1:0`,()=>r(0))})));return u(n=>{let r=e(`div`,n);l(r,`card bg-base-100 shadow-sm`);let i=e(`div`,r);o(r,i),l(i,`card-body gap-4`);let u=c(`rue:component:anchor`);o(i,u),s(()=>{let e=g(L,{current:t.value,onChange:e=>t.value=e,items:[{title:`Draft`,description:`Prepare the release scope and changelog.`,clickable:!0},{title:`Review`,description:`QA and product approve the rollout plan.`,clickable:!0},{title:`Deploy`,description:`Promote the release to production.`,clickable:!0}]});a(()=>p(e,i,u))});let f=e(`div`,i);o(i,f),l(f,`rounded-box border border-dashed border-base-300 bg-base-200/50 px-4 py-3 text-sm`),o(f,d(`点击步骤可切换，当前选中步骤：`));let h=e(`code`,f);o(f,h);let v=_(h);return o(h,v),s(()=>{m(v,t.value)}),r})},ie=[{prop:`direction / orientation`,description:`设置整体朝向；支持沿用 Rue 旧的 direction 写法，也支持更通用的 orientation 别名。`,type:`'horizontal' | 'vertical'`,defaultValue:`-`},{prop:`items`,description:`数据驱动模式，适合与 current、status、onChange 一起使用。`,type:`StepItem[]`,defaultValue:`-`},{prop:`current`,description:`当前进行中的步骤索引；前面的步骤自动推导为完成态，后面的步骤自动推导为等待态。`,type:`number`,defaultValue:`-`},{prop:`status`,description:`当前步骤的全局状态覆盖，仅作用于 current 命中的步骤。`,type:`'wait' | 'process' | 'finish' | 'error'`,defaultValue:`'process'`},{prop:`progressDot`,description:`切换为进度点模式，也支持自定义 dot 渲染函数。`,type:`boolean | (dot, info) => any`,defaultValue:`false`},{prop:`onChange`,description:`搭配 items 使用时启用点击切换，回传目标步骤索引。`,type:`(current: number) => void`,defaultValue:`-`}],ae=[{prop:`color`,description:`直接指定 Rue 语义色；未指定时会根据 status 自动映射。`,type:`'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'`,defaultValue:`按 status 推导`},{prop:`title`,description:`步骤主标题；在 children 写法中可与 description、subTitle、icon 组合为语义化内容区。`,type:`any`,defaultValue:`-`},{prop:`description / content`,description:`标题下方的补充说明文字；content 优先级高于 description。`,type:`any`,defaultValue:`-`},{prop:`subTitle`,description:`标题旁边的次级信息，适合展示倒计时、状态文案等。`,type:`any`,defaultValue:`-`},{prop:`icon`,description:`自定义步骤图标；继续支持旧的 <Steps.Icon /> 插槽写法。`,type:`any`,defaultValue:`-`},{prop:`status`,description:`单步状态，可覆盖根组件根据 current 推导的结果。`,type:`'wait' | 'process' | 'finish' | 'error'`,defaultValue:`-`},{prop:`dataContent / data-content`,description:`直接控制 daisyUI step 圆点中的字符，适合问号、勾号或自定义符号。`,type:`string`,defaultValue:`-`},{prop:`clickable / disabled`,description:`控制单步是否可交互，以及是否禁用点击切换。`,type:`boolean`,defaultValue:`false`}],V=()=>{let{tabs:t}=y(`useSetup:0:0:dup1`,()=>n(()=>({tabs:{horizontal:y(`ref:1:1`,()=>r(`preview`)),vertical:y(`ref:1:2`,()=>r(`preview`)),responsive:y(`ref:1:3`,()=>r(`preview`)),icons:y(`ref:1:4`,()=>r(`preview`)),dataContent:y(`ref:1:5`,()=>r(`preview`)),colors:y(`ref:1:6`,()=>r(`preview`)),scrollable:y(`ref:1:7`,()=>r(`preview`)),richStep:y(`ref:1:8`,()=>r(`preview`)),items:y(`ref:1:9`,()=>r(`preview`)),clickable:y(`ref:1:10`,()=>r(`preview`)),progressDot:y(`ref:1:11`,()=>r(`preview`))}})));return u(n=>{let r=i(),f=c(`rue:component:anchor`);return o(r,f),p(g(C,{children:u(()=>{let n=i(),r=e(`div`,n);o(n,r),l(r,`max-w-none prose prose-sm md:prose-base`);let u=e(`h1`,r);o(r,u),o(u,d(`Steps 步骤条`));let f=e(`p`,r);o(r,f),l(f,`text-sm mt-3 mb-3`),o(f,d(`Rue Steps 继续保留 daisyUI 的轻量视觉风格，同时补齐更贴近成熟业务组件的数据驱动 API： 支持`));let h=_(f);o(f,h),m(h,` `);let v=e(`code`,f);o(f,v),o(v,d(`items`)),o(f,d(`、`));let y=e(`code`,f);o(f,y),o(y,d(`current`)),o(f,d(`、`));let b=e(`code`,f);o(f,b),o(b,d(`status`)),o(f,d(`、`));let C=e(`code`,f);o(f,C),o(C,d(`progressDot`)),o(f,d(`、`));let T=e(`code`,f);o(f,T),o(T,d(`onChange`)),o(f,d(`，以及单步级别的`));let E=e(`code`,f);o(f,E),o(E,d(`title`)),o(f,d(`、`));let D=e(`code`,f);o(f,D),o(D,d(`description`)),o(f,d(`、`));let O=e(`code`,f);o(f,O),o(O,d(`subTitle`)),o(f,d(`和`));let k=e(`code`,f);o(f,k),o(k,d(`icon`)),o(f,d(`。`));let A=e(`div`,r);o(r,A),l(A,`not-prose mt-6 grid gap-4 md:grid-cols-3`);let j=e(`div`,A);o(A,j),l(j,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let M=e(`div`,j);o(j,M),l(M,`text-xs font-semibold uppercase tracking-wide text-primary`),o(M,d(`双模式`));let N=e(`div`,j);o(j,N),l(N,`mt-2 text-sm font-medium`),o(N,d(`children / items 都可用`));let P=e(`p`,j);o(j,P),l(P,`mt-2 text-sm opacity-70`),o(P,d(`老的`));let F=e(`code`,P);o(P,F),o(F,d(`Steps.Step`)),o(P,d(`和`));let I=e(`code`,P);o(P,I),o(I,d(`Steps.Icon`));let V=_(P);o(P,V),m(V,` `),o(P,d(`不变，新场景可直接传入数据数组。`));let H=e(`div`,A);o(A,H),l(H,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let U=e(`div`,H);o(H,U),l(U,`text-xs font-semibold uppercase tracking-wide text-secondary`),o(U,d(`状态推导`));let W=e(`div`,H);o(H,W),l(W,`mt-2 text-sm font-medium`),o(W,d(`current 自动推导完成/进行中/等待`));let G=e(`p`,H);o(H,G),l(G,`mt-2 text-sm opacity-70`),o(G,d(`不必手动给每一步都写颜色，只有例外项再单独覆盖即可。`));let K=e(`div`,A);o(A,K),l(K,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let q=e(`div`,K);o(K,q),l(q,`text-xs font-semibold uppercase tracking-wide text-accent`),o(q,d(`内容增强`));let J=e(`div`,K);o(K,J),l(J,`mt-2 text-sm font-medium`),o(J,d(`支持标题、副标题、描述和进度点`));let Y=e(`p`,K);o(K,Y),l(Y,`mt-2 text-sm opacity-70`),o(Y,d(`适合把原本只能写一行文本的步骤条，扩展成更完整的流程说明区。`));let X=e(`h2`,r);o(r,X),o(X,d(`基础布局`));let Z=e(`p`,r);o(r,Z),o(Z,d(`这一组示例保留 Rue 原有 demo，用来展示最基础的横向、纵向和响应式排列方式。`));let oe=c(`rue:component:anchor`);o(r,oe),s(()=>{let e=g(w,{title:`Horizontal`,tab:t.horizontal,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(L,{"data-testid":`steps-horizontal`,children:[S(L.Step,{color:`primary`,children:`Register`}),S(L.Step,{color:`primary`,children:`Choose plan`}),S(L.Step,{children:`Purchase`}),S(L.Step,{children:`Receive Product`})]})})}),code:`<Steps>
  <Steps.Step color="primary">Register</Steps.Step>
  <Steps.Step color="primary">Choose plan</Steps.Step>
  <Steps.Step>Purchase</Steps.Step>
  <Steps.Step>Receive Product</Steps.Step>
</Steps>`});a(()=>p(e,r,oe))});let se=c(`rue:component:anchor`);o(r,se),s(()=>{let e=g(w,{title:`Vertical`,tab:t.vertical,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(L,{direction:`vertical`,children:[S(L.Step,{color:`primary`,children:`Register`}),S(L.Step,{color:`primary`,children:`Choose plan`}),S(L.Step,{children:`Purchase`}),S(L.Step,{children:`Receive Product`})]})})}),code:`<Steps direction="vertical">
  <Steps.Step color="primary">Register</Steps.Step>
  <Steps.Step color="primary">Choose plan</Steps.Step>
  <Steps.Step>Purchase</Steps.Step>
  <Steps.Step>Receive Product</Steps.Step>
</Steps>`});a(()=>p(e,r,se))});let ce=c(`rue:component:anchor`);o(r,ce),s(()=>{let e=g(w,{title:`Responsive`,tab:t.responsive,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(L,{direction:`vertical`,className:`lg:steps-horizontal`,children:[S(L.Step,{color:`primary`,children:`Register`}),S(L.Step,{color:`primary`,children:`Choose plan`}),S(L.Step,{children:`Purchase`}),S(L.Step,{children:`Receive Product`})]})})}),code:`<Steps direction="vertical" className="lg:steps-horizontal">
  <Steps.Step color="primary">Register</Steps.Step>
  <Steps.Step color="primary">Choose plan</Steps.Step>
  <Steps.Step>Purchase</Steps.Step>
  <Steps.Step>Receive Product</Steps.Step>
</Steps>`});a(()=>p(e,r,ce))});let le=e(`h2`,r);o(r,le),o(le,d(`视觉定制`));let Q=e(`p`,r);o(r,Q),o(Q,d(`这一组仍然保留当前 Rue 的静态能力，包括自定义 icon、data-content、语义色和滚动容器。`));let ue=c(`rue:component:anchor`);o(r,ue),s(()=>{let e=g(w,{title:`With custom content in step-icon`,tab:t.icons,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(L,{"data-testid":`steps-icons`,children:[x(L.Step,{color:`neutral`,children:[S(L.Icon,{children:`1`}),`Step 1`]}),x(L.Step,{color:`neutral`,children:[S(L.Icon,{children:`2`}),`Step 2`]}),x(L.Step,{children:[S(L.Icon,{children:`3`}),`Step 3`]})]})})}),code:`<Steps>
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
</Steps>`});a(()=>p(e,r,ue))});let de=c(`rue:component:anchor`);o(r,de),s(()=>{let e=g(w,{title:`With data-content`,tab:t.dataContent,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(L,{children:[S(L.Step,{color:`neutral`,"data-content":`?`,children:`Step 1`}),S(L.Step,{color:`neutral`,"data-content":`!`,children:`Step 2`}),S(L.Step,{color:`neutral`,"data-content":`✓`,children:`Step 3`}),S(L.Step,{color:`neutral`,"data-content":`✕`,children:`Step 4`}),S(L.Step,{color:`neutral`,"data-content":`★`,children:`Step 5`})]})})}),code:`<Steps>
  <Steps.Step color="neutral" data-content="?">Step 1</Steps.Step>
  <Steps.Step color="neutral" data-content="!">Step 2</Steps.Step>
  <Steps.Step color="neutral" data-content="✓">Step 3</Steps.Step>
  <Steps.Step color="neutral" data-content="✕">Step 4</Steps.Step>
  <Steps.Step color="neutral" data-content="★">Step 5</Steps.Step>
</Steps>`});a(()=>p(e,r,de))});let fe=c(`rue:component:anchor`);o(r,fe),s(()=>{let e=g(w,{title:`Custom colors`,tab:t.colors,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(L,{children:[S(L.Step,{color:`info`,children:`Fly to moon`}),S(L.Step,{color:`info`,children:`Shrink the moon`}),S(L.Step,{color:`info`,children:`Grab the moon`}),S(L.Step,{color:`error`,"data-content":`?`,children:`Sit on toilet`})]})})}),code:`<Steps>
  <Steps.Step color="info">Fly to moon</Steps.Step>
  <Steps.Step color="info">Shrink the moon</Steps.Step>
  <Steps.Step color="info">Grab the moon</Steps.Step>
  <Steps.Step color="error" data-content="?">Sit on toilet</Steps.Step>
</Steps>`});a(()=>p(e,r,fe))});let pe=c(`rue:component:anchor`);o(r,pe),s(()=>{let e=g(w,{title:`With scrollable wrapper`,tab:t.scrollable,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:S(ne,{})})}),code:`<div className="grid gap-5">
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
</div>`});a(()=>p(e,r,pe))});let me=e(`h2`,r);o(r,me),o(me,d(`增强 API`));let he=e(`p`,r);o(r,he),o(he,d(`下面这些示例展示的是本次补齐的语义层能力，目标是让 Rue Steps 在不丢失现有风格的前提下更接近常见业务组件的使用体验。`));let ge=c(`rue:component:anchor`);o(r,ge),s(()=>{let e=g(w,{title:`Rich step content`,tab:t.richStep,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(L,{direction:`vertical`,children:[S(L.Step,{status:`finish`,title:`Connect repository`,description:`Link your GitHub repository and import the default build settings.`,icon:S(z,{})}),S(L.Step,{status:`process`,title:`Configure policies`,subTitle:`~ 2 mins`,description:`Set preview branches, branch protection, and deployment rules.`,icon:S(B,{})}),S(L.Step,{status:`wait`,title:`Ship to production`,description:`Merge the release branch after the final smoke test passes.`})]})})}),code:`<Steps direction="vertical">
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
</Steps>`});a(()=>p(e,r,ge))});let _e=c(`rue:component:anchor`);o(r,_e),s(()=>{let e=g(w,{title:`Items + current + status`,tab:t.items,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body gap-4`,children:[S(L,{current:1,status:`error`,items:[{title:`Account`,description:`Create workspace and invite collaborators.`,icon:S(z,{})},{title:`Verification`,subTitle:`Left 00:00:08`,description:`Waiting for security review and DNS validation.`,icon:S(B,{})},{title:`Payment`,description:`Unlock the production environment after confirmation.`,icon:S(ee,{})},{title:`Done`,description:`Your first deployment is ready.`,icon:S(te,{})}]}),x(`div`,{className:`text-sm opacity-70`,children:[`当前索引为 `,S(`code`,{children:`1`}),`，所以第 0 步自动完成，第 1 步继承根节点的`,` `,S(`code`,{children:`error`}),` 状态。`]})]})}),code:`<Steps
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
/>`});a(()=>p(e,r,_e))});let ve=c(`rue:component:anchor`);o(r,ve),s(()=>{let e=g(w,{title:`Clickable items`,tab:t.clickable,preview:S(re,{}),code:`const ClickableStepsDemo: FC = () => {
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
}`});a(()=>p(e,r,ve))});let ye=c(`rue:component:anchor`);o(r,ye),s(()=>{let e=g(w,{title:`Progress dot`,tab:t.progressDot,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:S(L,{progressDot:(e,t)=>S(`span`,{className:`tooltip tooltip-bottom`,"data-tip":`${t.title}`,children:e}),items:[{title:`Collect requirements`,description:`Align scope with design and engineering.`},{title:`Build demo`,description:`Create a stakeholder-ready flow.`},{title:`Launch beta`,description:`Open access to pilot users.`}]})})}),code:`<Steps
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
/>`});a(()=>p(e,r,ye))});let be=e(`h2`,r);o(r,be),o(be,d(`API`));let $=e(`p`,r);o(r,$);let xe=e(`code`,$);o($,xe),o(xe,d(`Steps`)),o($,d(`负责布局、状态推导与点击切换；`));let Se=e(`code`,$);o($,Se),o(Se,d(`Steps.Step`)),o($,d(`和`));let Ce=_($);o($,Ce),m(Ce,` `);let we=e(`code`,$);o($,we),o(we,d(`StepItem`)),o($,d(`共享同一组单步属性。`));let Te=e(`h3`,r);o(r,Te),o(Te,d(`Steps`));let Ee=c(`rue:component:anchor`);o(r,Ee),s(()=>{let e=g(R,{rows:ie});a(()=>p(e,r,Ee))});let De=e(`h3`,r);o(r,De),o(De,d(`Steps.Step / StepItem`));let Oe=c(`rue:component:anchor`);return o(r,Oe),s(()=>{let e=g(R,{rows:ae});a(()=>p(e,r,Oe))}),n})}),r,f),r})};export{V as default};