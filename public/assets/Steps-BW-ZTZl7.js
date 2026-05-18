import{F as e,I as t,K as n,L as r,N as i,Q as a,R as o,W as s,d as c,dt as l,f as u,ht as d,l as f,st as p,t as m,vt as h,z as g}from"./vapor-runtime-BuwLbCGk.js";import{a as _,n as v}from"./vapor-helpers-vapor-Bly5xJie.js";import{n as y,t as b}from"./src-BQwLQD8R.js";import{n as x}from"./SidebarPlaygroundDesign-SQXYHI-q.js";import{t as S}from"./PreviewBlock-Cks1b4IL.js";var C=(...e)=>e.filter(Boolean).join(` `),w=(e,t)=>t?`${e} ${t}`:e,T=(e,t)=>t??e,E=(e,t)=>{if(t)return t;if(e===`error`)return`error`;if(e===`finish`||e===`process`)return`primary`},D=(e,t)=>{if(!t){if(e===`finish`)return`✓`;if(e===`error`)return`✕`}},O=e=>{typeof e.preventDefault==`function`&&e.preventDefault(),typeof e.stopPropagation==`function`&&e.stopPropagation()},k=({status:e})=>b(`span`,{className:e===`wait`?`inline-block size-2.5 rounded-full border border-base-300 bg-base-100`:`inline-block size-2.5 rounded-full bg-current`}),A=(e,t)=>{if(!e)return;let n=b(k,{status:t.status});return typeof e==`function`?e(n,t):n},j=(e,t,n,r)=>e.status?e.status:typeof n==`number`?t<n?`finish`:t===n?r??`process`:`wait`:`wait`,M=({as:e=`li`,color:t,className:n,title:r,description:i,content:a,subTitle:o,icon:s,status:c,disabled:l,clickable:d,dataContent:f,children:p,index:m,onClick:h,onKeyDown:g,..._})=>{let v=e,x=a??i,S=r??p,C=d??!!h,T=E(c,t),k=f??_[`data-content`]??D(c,s!=null),A=r!=null||x!=null||o!=null||s!=null,j=_[`aria-current`]??(c===`process`?`step`:void 0),M=l?`true`:void 0,N=`step`;T&&(N+=` step-${T}`),C&&!l&&(N+=` cursor-pointer`),l&&(N+=` opacity-50`),C&&l&&(N+=` cursor-not-allowed`);let P={..._,className:w(N,n)};k!==void 0&&(P[`data-content`]=k);let F=e=>{if(l){O(e);return}h&&h(e,m)};return C&&(P.role=_.role??`button`,P.tabIndex=_.tabIndex??(l?-1:0),P.onClick=F,P.onKeyDown=e=>{if(g&&g(e),e.defaultPrevented||l){l&&O(e);return}(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),F(e))}),b(v,{...P,"aria-current":j,"aria-disabled":M,children:A?y(u,{children:[s==null?null:b(`span`,{className:w(`step-icon`,x==null?void 0:`mt-0.5`),"aria-hidden":`true`,children:s}),y(`span`,{className:`inline-flex min-w-0 flex-col gap-1 py-1 text-start`,children:[S!=null||o!=null?y(`span`,{className:`flex flex-wrap items-center gap-2 leading-tight`,children:[S==null?null:b(`span`,{className:`font-medium`,children:S}),o==null?null:b(`span`,{className:`text-xs opacity-60`,children:o})]}):null,x==null?null:b(`span`,{className:`text-xs leading-snug opacity-70`,children:x})]})]}):p})},N=Object.assign(({as:e=`ul`,direction:t,orientation:n,className:r,children:i,items:a,current:o,status:s,progressDot:c,onChange:l,...u})=>{let d=e,f=T(t,n),p=a&&a.length>0?a.map((e,t)=>{let n=j(e,t,o,s),r=e.icon??A(c,{index:t,status:n,title:e.title,description:e.description,content:e.content}),i=e.clickable??(!!l||!!e.onClick);return b(M,{...e,index:t,status:n,color:E(n,e.color),icon:r,clickable:i,onClick:(t,n)=>{e.disabled||(e.onClick&&typeof n==`number`&&e.onClick(t,n),l&&typeof n==`number`&&n!==o&&l(n))}},e.key??t)}):i,m=`steps`;return f&&(m+=` steps-${f}`),b(d,{...u,className:C(m,r),children:p})},{Step:M,Icon:({as:e=`span`,className:t,children:n,...r})=>b(e,{...r,className:w(`step-icon`,t),children:n})}),P=a=>c(u=>{let d=r(`div`,u);n(d,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let p=r(`table`,d);i(d,p),n(p,`table table-zebra`);let m=r(`thead`,p);i(p,m);let g=r(`tr`,m);i(m,g);let _=r(`th`,g);i(g,_),i(_,o(`属性`));let y=r(`th`,g);i(g,y),i(y,o(`说明`));let b=r(`th`,g);i(g,b),i(b,o(`类型`));let x=r(`th`,g);i(g,x),i(x,o(`默认值`));let S=r(`tbody`,p);i(p,S);let C=e(`rue:list:start`),w=e(`rue:list:end`);i(S,C),i(S,w);let T=new Map;return h(()=>{T=v({items:a.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,a,o,u,d)=>{f(c(()=>{let a=t(),o=r(`tr`,a);i(a,o),h(()=>{s(o,`key`,String(n.prop))});let c=r(`td`,o);i(o,c);let u=r(`code`,c);i(c,u);let d=e(`rue:slot:anchor`);i(u,d),h(()=>{let e=n.prop;l(()=>f(e,u,d))});let p=r(`td`,o);i(o,p);let m=e(`rue:slot:anchor`);i(p,m),h(()=>{let e=n.description;l(()=>f(e,p,m))});let g=r(`td`,o);i(o,g);let _=r(`code`,g);i(g,_);let v=e(`rue:slot:anchor`);i(_,v),h(()=>{let e=n.type;l(()=>f(e,_,v))});let y=r(`td`,o);i(o,y);let b=r(`code`,y);i(y,b);let x=e(`rue:slot:anchor`);return i(b,x),h(()=>{let e=n.defaultValue;l(()=>f(e,b,x))}),a}),a,o)}})}),d}),F=()=>c(e=>{let t=r(`svg`,e);s(t,`xmlns`,`http://www.w3.org/2000/svg`),s(t,`viewBox`,`0 0 24 24`),s(t,`fill`,`none`),s(t,`stroke`,`currentColor`),s(t,`strokeWidth`,`2`),n(t,`size-[1.05em]`);let a=r(`path`,t);i(t,a),s(a,`strokeLinecap`,`round`),s(a,`strokeLinejoin`,`round`),s(a,`d`,`M6 20a6 6 0 0 1 12 0`);let o=r(`circle`,t);return i(t,o),s(o,`cx`,`12`),s(o,`cy`,`9`),s(o,`r`,`4`),t}),ee=()=>c(e=>{let t=r(`svg`,e);s(t,`xmlns`,`http://www.w3.org/2000/svg`),s(t,`viewBox`,`0 0 24 24`),s(t,`fill`,`none`),s(t,`stroke`,`currentColor`),s(t,`strokeWidth`,`2`),n(t,`size-[1.05em]`);let a=r(`path`,t);i(t,a),s(a,`strokeLinecap`,`round`),s(a,`strokeLinejoin`,`round`),s(a,`d`,`m12 3 1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3Z`);let o=r(`path`,t);return i(t,o),s(o,`strokeLinecap`,`round`),s(o,`strokeLinejoin`,`round`),s(o,`d`,`M5 18h.01M19 18h.01M12 21h.01`),t}),te=()=>c(e=>{let t=r(`svg`,e);s(t,`xmlns`,`http://www.w3.org/2000/svg`),s(t,`viewBox`,`0 0 24 24`),s(t,`fill`,`none`),s(t,`stroke`,`currentColor`),s(t,`strokeWidth`,`2`),n(t,`size-[1.05em]`);let a=r(`rect`,t);i(t,a),s(a,`x`,`3`),s(a,`y`,`5`),s(a,`width`,`18`),s(a,`height`,`14`),s(a,`rx`,`2`);let o=r(`path`,t);return i(t,o),s(o,`strokeLinecap`,`round`),s(o,`strokeLinejoin`,`round`),s(o,`d`,`M3 10h18`),t}),ne=()=>c(e=>{let t=r(`svg`,e);s(t,`xmlns`,`http://www.w3.org/2000/svg`),s(t,`viewBox`,`0 0 24 24`),s(t,`fill`,`none`),s(t,`stroke`,`currentColor`),s(t,`strokeWidth`,`2`),n(t,`size-[1.05em]`);let a=r(`circle`,t);i(t,a),s(a,`cx`,`12`),s(a,`cy`,`12`),s(a,`r`,`9`);let o=r(`path`,t);i(t,o),s(o,`strokeLinecap`,`round`),s(o,`strokeLinejoin`,`round`),s(o,`d`,`M8 14s1.5 2 4 2 4-2 4-2`);let c=r(`path`,t);return i(t,c),s(c,`strokeLinecap`,`round`),s(c,`strokeLinejoin`,`round`),s(c,`d`,`M9 10h.01M15 10h.01`),t}),re=()=>c(a=>{let l=r(`div`,a);n(l,`grid gap-5`);let u=r(`div`,l);i(l,u),n(u,`space-y-2`);let d=r(`div`,u);i(u,d),n(d,`text-sm font-medium`),i(d,o(`长标签交付流程`));let p=r(`div`,u);i(u,p),n(p,`max-w-xl overflow-x-auto pb-2`),s(p,`data-testid`,`steps-scroll-wrapper`);let h=e(`rue:component:anchor`);i(p,h),f(m(N,{className:`min-w-[1120px]`,children:c(()=>{let n=t(),r=e(`rue:component:anchor`);i(n,r),f(m(N.Step,{color:`primary`,children:`需求确认`}),n,r);let a=e(`rue:component:anchor`);i(n,a),f(m(N.Step,{color:`primary`,children:`设计评审与资源排期`}),n,a);let o=e(`rue:component:anchor`);i(n,o),f(m(N.Step,{color:`primary`,children:`前后端联调验收`}),n,o);let s=e(`rue:component:anchor`);i(n,s),f(m(N.Step,{color:`secondary`,children:`灰度发布到内部环境`}),n,s);let c=e(`rue:component:anchor`);i(n,c),f(m(N.Step,{color:`secondary`,children:`邀请试点客户体验`}),n,c);let l=e(`rue:component:anchor`);i(n,l),f(m(N.Step,{color:`accent`,children:`收集反馈并修复阻塞问题`}),n,l);let u=e(`rue:component:anchor`);i(n,u),f(m(N.Step,{color:`accent`,children:`准备正式发布说明`}),n,u);let d=e(`rue:component:anchor`);i(n,d),f(m(N.Step,{color:`warning`,children:`上线窗口审批`}),n,d);let p=e(`rue:component:anchor`);i(n,p),f(m(N.Step,{color:`warning`,children:`生产环境发布`}),n,p);let h=e(`rue:component:anchor`);i(n,h),f(m(N.Step,{color:`success`,children:`发布后巡检`}),n,h);let g=e(`rue:component:anchor`);return i(n,g),f(m(N.Step,{color:`neutral`,children:`归档复盘`}),n,g),n})}),p,h);let g=r(`div`,l);i(l,g),n(g,`space-y-2`);let _=r(`div`,g);i(g,_),n(_,`text-sm font-medium`),i(_,o(`编号里程碑`));let v=r(`div`,g);i(g,v),n(v,`max-w-md overflow-x-auto pb-2`);let y=e(`rue:component:anchor`);return i(v,y),f(m(N,{className:`min-w-[960px]`,children:c(()=>{let n=t(),r=e(`rue:component:anchor`);i(n,r),f(m(N.Step,{color:`neutral`,children:`Start`}),n,r);let a=e(`rue:component:anchor`);i(n,a),f(m(N.Step,{color:`secondary`,children:`02`}),n,a);let o=e(`rue:component:anchor`);i(n,o),f(m(N.Step,{color:`secondary`,children:`03`}),n,o);let s=e(`rue:component:anchor`);i(n,s),f(m(N.Step,{color:`secondary`,children:`04`}),n,s);let c=e(`rue:component:anchor`);i(n,c),f(m(N.Step,{children:`05`}),n,c);let l=e(`rue:component:anchor`);i(n,l),f(m(N.Step,{color:`accent`,children:`06`}),n,l);let u=e(`rue:component:anchor`);i(n,u),f(m(N.Step,{color:`accent`,children:`07`}),n,u);let d=e(`rue:component:anchor`);i(n,d),f(m(N.Step,{children:`08`}),n,d);let p=e(`rue:component:anchor`);i(n,p),f(m(N.Step,{color:`info`,children:`09`}),n,p);let h=e(`rue:component:anchor`);i(n,h),f(m(N.Step,{color:`info`,children:`10`}),n,h);let g=e(`rue:component:anchor`);i(n,g),f(m(N.Step,{color:`error`,children:`11`}),n,g);let _=e(`rue:component:anchor`);i(n,_),f(m(N.Step,{color:`warning`,children:`12`}),n,_);let v=e(`rue:component:anchor`);return i(n,v),f(m(N.Step,{color:`neutral`,children:`End`}),n,v),n})}),v,y),l}),ie=()=>{let{current:t}=_(`useSetup:0:0`,()=>d(()=>({current:_(`ref:1:0`,()=>p(0))})));return c(s=>{let c=r(`div`,s);n(c,`card bg-base-100 shadow-sm`);let u=r(`div`,c);i(c,u),n(u,`card-body gap-4`);let d=e(`rue:component:anchor`);i(u,d),h(()=>{let e=m(N,{current:t.value,onChange:e=>t.value=e,items:[{title:`Draft`,description:`Prepare the release scope and changelog.`,clickable:!0},{title:`Review`,description:`QA and product approve the rollout plan.`,clickable:!0},{title:`Deploy`,description:`Promote the release to production.`,clickable:!0}]});l(()=>f(e,u,d))});let p=r(`div`,u);i(u,p),n(p,`rounded-box border border-dashed border-base-300 bg-base-200/50 px-4 py-3 text-sm`),i(p,o(`点击步骤可切换，当前选中步骤：`));let _=r(`code`,p);i(p,_);let v=g(_);return i(_,v),h(()=>{a(v,t.value)}),c})},ae=[{prop:`direction / orientation`,description:`设置整体朝向；支持沿用 Rue 旧的 direction 写法，也支持更通用的 orientation 别名。`,type:`'horizontal' | 'vertical'`,defaultValue:`-`},{prop:`items`,description:`数据驱动模式，适合与 current、status、onChange 一起使用。`,type:`StepItem[]`,defaultValue:`-`},{prop:`current`,description:`当前进行中的步骤索引；前面的步骤自动推导为完成态，后面的步骤自动推导为等待态。`,type:`number`,defaultValue:`-`},{prop:`status`,description:`当前步骤的全局状态覆盖，仅作用于 current 命中的步骤。`,type:`'wait' | 'process' | 'finish' | 'error'`,defaultValue:`'process'`},{prop:`progressDot`,description:`切换为进度点模式，也支持自定义 dot 渲染函数。`,type:`boolean | (dot, info) => any`,defaultValue:`false`},{prop:`onChange`,description:`搭配 items 使用时启用点击切换，回传目标步骤索引。`,type:`(current: number) => void`,defaultValue:`-`}],oe=[{prop:`color`,description:`直接指定 Rue 语义色；未指定时会根据 status 自动映射。`,type:`'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'`,defaultValue:`按 status 推导`},{prop:`title`,description:`步骤主标题；在 children 写法中可与 description、subTitle、icon 组合为语义化内容区。`,type:`any`,defaultValue:`-`},{prop:`description / content`,description:`标题下方的补充说明文字；content 优先级高于 description。`,type:`any`,defaultValue:`-`},{prop:`subTitle`,description:`标题旁边的次级信息，适合展示倒计时、状态文案等。`,type:`any`,defaultValue:`-`},{prop:`icon`,description:`自定义步骤图标；继续支持旧的 <Steps.Icon /> 插槽写法。`,type:`any`,defaultValue:`-`},{prop:`status`,description:`单步状态，可覆盖根组件根据 current 推导的结果。`,type:`'wait' | 'process' | 'finish' | 'error'`,defaultValue:`-`},{prop:`dataContent / data-content`,description:`直接控制 daisyUI step 圆点中的字符，适合问号、勾号或自定义符号。`,type:`string`,defaultValue:`-`},{prop:`clickable / disabled`,description:`控制单步是否可交互，以及是否禁用点击切换。`,type:`boolean`,defaultValue:`false`}],I=()=>{let{tabs:u}=_(`useSetup:0:0:dup1`,()=>d(()=>({tabs:{horizontal:_(`ref:1:1`,()=>p(`preview`)),vertical:_(`ref:1:2`,()=>p(`preview`)),responsive:_(`ref:1:3`,()=>p(`preview`)),icons:_(`ref:1:4`,()=>p(`preview`)),dataContent:_(`ref:1:5`,()=>p(`preview`)),colors:_(`ref:1:6`,()=>p(`preview`)),scrollable:_(`ref:1:7`,()=>p(`preview`)),richStep:_(`ref:1:8`,()=>p(`preview`)),items:_(`ref:1:9`,()=>p(`preview`)),clickable:_(`ref:1:10`,()=>p(`preview`)),progressDot:_(`ref:1:11`,()=>p(`preview`))}})));return c(d=>{let p=t(),_=e(`rue:component:anchor`);return i(p,_),f(m(x,{children:c(()=>{let c=t(),d=r(`div`,c);i(c,d),n(d,`max-w-none prose prose-sm md:prose-base`);let p=r(`h1`,d);i(d,p),i(p,o(`Steps 步骤条`));let _=r(`p`,d);i(d,_),n(_,`text-sm mt-3 mb-3`),i(_,o(`Rue Steps 继续保留 daisyUI 的轻量视觉风格，同时补齐更贴近成熟业务组件的数据驱动 API： 支持`));let v=g(_);i(_,v),a(v,` `);let x=r(`code`,_);i(_,x),i(x,o(`items`)),i(_,o(`、`));let C=r(`code`,_);i(_,C),i(C,o(`current`)),i(_,o(`、`));let w=r(`code`,_);i(_,w),i(w,o(`status`)),i(_,o(`、`));let T=r(`code`,_);i(_,T),i(T,o(`progressDot`)),i(_,o(`、`));let E=r(`code`,_);i(_,E),i(E,o(`onChange`)),i(_,o(`，以及单步级别的`));let D=r(`code`,_);i(_,D),i(D,o(`title`)),i(_,o(`、`));let O=r(`code`,_);i(_,O),i(O,o(`description`)),i(_,o(`、`));let k=r(`code`,_);i(_,k),i(k,o(`subTitle`)),i(_,o(`和`));let A=r(`code`,_);i(_,A),i(A,o(`icon`)),i(_,o(`。`));let j=r(`div`,d);i(d,j),n(j,`text-sm`);let M=r(`a`,j);i(j,M),s(M,`href`,`https://daisyui.com/components/steps/`),s(M,`target`,`_blank`),i(M,o(`查看 Steps 静态样式基底`));let I=r(`div`,d);i(d,I),n(I,`not-prose mt-6 grid gap-4 md:grid-cols-3`);let L=r(`div`,I);i(I,L),n(L,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let R=r(`div`,L);i(L,R),n(R,`text-xs font-semibold uppercase tracking-wide text-primary`),i(R,o(`双模式`));let z=r(`div`,L);i(L,z),n(z,`mt-2 text-sm font-medium`),i(z,o(`children / items 都可用`));let B=r(`p`,L);i(L,B),n(B,`mt-2 text-sm opacity-70`),i(B,o(`老的`));let V=r(`code`,B);i(B,V),i(V,o(`Steps.Step`)),i(B,o(`和`));let H=r(`code`,B);i(B,H),i(H,o(`Steps.Icon`));let U=g(B);i(B,U),a(U,` `),i(B,o(`不变，新场景可直接传入数据数组。`));let W=r(`div`,I);i(I,W),n(W,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let G=r(`div`,W);i(W,G),n(G,`text-xs font-semibold uppercase tracking-wide text-secondary`),i(G,o(`状态推导`));let K=r(`div`,W);i(W,K),n(K,`mt-2 text-sm font-medium`),i(K,o(`current 自动推导完成/进行中/等待`));let q=r(`p`,W);i(W,q),n(q,`mt-2 text-sm opacity-70`),i(q,o(`不必手动给每一步都写颜色，只有例外项再单独覆盖即可。`));let J=r(`div`,I);i(I,J),n(J,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let Y=r(`div`,J);i(J,Y),n(Y,`text-xs font-semibold uppercase tracking-wide text-accent`),i(Y,o(`内容增强`));let X=r(`div`,J);i(J,X),n(X,`mt-2 text-sm font-medium`),i(X,o(`支持标题、副标题、描述和进度点`));let Z=r(`p`,J);i(J,Z),n(Z,`mt-2 text-sm opacity-70`),i(Z,o(`适合把原本只能写一行文本的步骤条，扩展成更完整的流程说明区。`));let se=r(`h2`,d);i(d,se),i(se,o(`基础布局`));let ce=r(`p`,d);i(d,ce),i(ce,o(`这一组示例保留 Rue 原有 demo，用来展示最基础的横向、纵向和响应式排列方式。`));let le=e(`rue:component:anchor`);i(d,le),h(()=>{let e=m(S,{title:`Horizontal`,tab:u.horizontal,preview:b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(N,{"data-testid":`steps-horizontal`,children:[b(N.Step,{color:`primary`,children:`Register`}),b(N.Step,{color:`primary`,children:`Choose plan`}),b(N.Step,{children:`Purchase`}),b(N.Step,{children:`Receive Product`})]})})}),code:`<Steps>
  <Steps.Step color="primary">Register</Steps.Step>
  <Steps.Step color="primary">Choose plan</Steps.Step>
  <Steps.Step>Purchase</Steps.Step>
  <Steps.Step>Receive Product</Steps.Step>
</Steps>`});l(()=>f(e,d,le))});let ue=e(`rue:component:anchor`);i(d,ue),h(()=>{let e=m(S,{title:`Vertical`,tab:u.vertical,preview:b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(N,{direction:`vertical`,children:[b(N.Step,{color:`primary`,children:`Register`}),b(N.Step,{color:`primary`,children:`Choose plan`}),b(N.Step,{children:`Purchase`}),b(N.Step,{children:`Receive Product`})]})})}),code:`<Steps direction="vertical">
  <Steps.Step color="primary">Register</Steps.Step>
  <Steps.Step color="primary">Choose plan</Steps.Step>
  <Steps.Step>Purchase</Steps.Step>
  <Steps.Step>Receive Product</Steps.Step>
</Steps>`});l(()=>f(e,d,ue))});let Q=e(`rue:component:anchor`);i(d,Q),h(()=>{let e=m(S,{title:`Responsive`,tab:u.responsive,preview:b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(N,{direction:`vertical`,className:`lg:steps-horizontal`,children:[b(N.Step,{color:`primary`,children:`Register`}),b(N.Step,{color:`primary`,children:`Choose plan`}),b(N.Step,{children:`Purchase`}),b(N.Step,{children:`Receive Product`})]})})}),code:`<Steps direction="vertical" className="lg:steps-horizontal">
  <Steps.Step color="primary">Register</Steps.Step>
  <Steps.Step color="primary">Choose plan</Steps.Step>
  <Steps.Step>Purchase</Steps.Step>
  <Steps.Step>Receive Product</Steps.Step>
</Steps>`});l(()=>f(e,d,Q))});let de=r(`h2`,d);i(d,de),i(de,o(`视觉定制`));let fe=r(`p`,d);i(d,fe),i(fe,o(`这一组仍然保留当前 Rue 的静态能力，包括自定义 icon、data-content、语义色和滚动容器。`));let pe=e(`rue:component:anchor`);i(d,pe),h(()=>{let e=m(S,{title:`With custom content in step-icon`,tab:u.icons,preview:b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(N,{"data-testid":`steps-icons`,children:[y(N.Step,{color:`neutral`,children:[b(N.Icon,{children:`1`}),`Step 1`]}),y(N.Step,{color:`neutral`,children:[b(N.Icon,{children:`2`}),`Step 2`]}),y(N.Step,{children:[b(N.Icon,{children:`3`}),`Step 3`]})]})})}),code:`<Steps>
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
</Steps>`});l(()=>f(e,d,pe))});let me=e(`rue:component:anchor`);i(d,me),h(()=>{let e=m(S,{title:`With data-content`,tab:u.dataContent,preview:b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(N,{children:[b(N.Step,{color:`neutral`,"data-content":`?`,children:`Step 1`}),b(N.Step,{color:`neutral`,"data-content":`!`,children:`Step 2`}),b(N.Step,{color:`neutral`,"data-content":`✓`,children:`Step 3`}),b(N.Step,{color:`neutral`,"data-content":`✕`,children:`Step 4`}),b(N.Step,{color:`neutral`,"data-content":`★`,children:`Step 5`})]})})}),code:`<Steps>
  <Steps.Step color="neutral" data-content="?">Step 1</Steps.Step>
  <Steps.Step color="neutral" data-content="!">Step 2</Steps.Step>
  <Steps.Step color="neutral" data-content="✓">Step 3</Steps.Step>
  <Steps.Step color="neutral" data-content="✕">Step 4</Steps.Step>
  <Steps.Step color="neutral" data-content="★">Step 5</Steps.Step>
</Steps>`});l(()=>f(e,d,me))});let he=e(`rue:component:anchor`);i(d,he),h(()=>{let e=m(S,{title:`Custom colors`,tab:u.colors,preview:b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(N,{children:[b(N.Step,{color:`info`,children:`Fly to moon`}),b(N.Step,{color:`info`,children:`Shrink the moon`}),b(N.Step,{color:`info`,children:`Grab the moon`}),b(N.Step,{color:`error`,"data-content":`?`,children:`Sit on toilet`})]})})}),code:`<Steps>
  <Steps.Step color="info">Fly to moon</Steps.Step>
  <Steps.Step color="info">Shrink the moon</Steps.Step>
  <Steps.Step color="info">Grab the moon</Steps.Step>
  <Steps.Step color="error" data-content="?">Sit on toilet</Steps.Step>
</Steps>`});l(()=>f(e,d,he))});let ge=e(`rue:component:anchor`);i(d,ge),h(()=>{let e=m(S,{title:`With scrollable wrapper`,tab:u.scrollable,preview:b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:b(re,{})})}),code:`<div className="grid gap-5">
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
</div>`});l(()=>f(e,d,ge))});let _e=r(`h2`,d);i(d,_e),i(_e,o(`增强 API`));let ve=r(`p`,d);i(d,ve),i(ve,o(`下面这些示例展示的是本次补齐的语义层能力，目标是让 Rue Steps 在不丢失现有风格的前提下更接近常见业务组件的使用体验。`));let ye=e(`rue:component:anchor`);i(d,ye),h(()=>{let e=m(S,{title:`Rich step content`,tab:u.richStep,preview:b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(N,{direction:`vertical`,children:[b(N.Step,{status:`finish`,title:`Connect repository`,description:`Link your GitHub repository and import the default build settings.`,icon:b(F,{})}),b(N.Step,{status:`process`,title:`Configure policies`,subTitle:`~ 2 mins`,description:`Set preview branches, branch protection, and deployment rules.`,icon:b(ee,{})}),b(N.Step,{status:`wait`,title:`Ship to production`,description:`Merge the release branch after the final smoke test passes.`})]})})}),code:`<Steps direction="vertical">
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
</Steps>`});l(()=>f(e,d,ye))});let be=e(`rue:component:anchor`);i(d,be),h(()=>{let e=m(S,{title:`Items + current + status`,tab:u.items,preview:b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-4`,children:[b(N,{current:1,status:`error`,items:[{title:`Account`,description:`Create workspace and invite collaborators.`,icon:b(F,{})},{title:`Verification`,subTitle:`Left 00:00:08`,description:`Waiting for security review and DNS validation.`,icon:b(ee,{})},{title:`Payment`,description:`Unlock the production environment after confirmation.`,icon:b(te,{})},{title:`Done`,description:`Your first deployment is ready.`,icon:b(ne,{})}]}),y(`div`,{className:`text-sm opacity-70`,children:[`当前索引为 `,b(`code`,{children:`1`}),`，所以第 0 步自动完成，第 1 步继承根节点的`,` `,b(`code`,{children:`error`}),` 状态。`]})]})}),code:`<Steps
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
/>`});l(()=>f(e,d,be))});let xe=e(`rue:component:anchor`);i(d,xe),h(()=>{let e=m(S,{title:`Clickable items`,tab:u.clickable,preview:b(ie,{}),code:`const ClickableStepsDemo: FC = () => {
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
}`});l(()=>f(e,d,xe))});let Se=e(`rue:component:anchor`);i(d,Se),h(()=>{let e=m(S,{title:`Progress dot`,tab:u.progressDot,preview:b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:b(N,{progressDot:(e,t)=>b(`span`,{className:`tooltip tooltip-bottom`,"data-tip":`${t.title}`,children:e}),items:[{title:`Collect requirements`,description:`Align scope with design and engineering.`},{title:`Build demo`,description:`Create a stakeholder-ready flow.`},{title:`Launch beta`,description:`Open access to pilot users.`}]})})}),code:`<Steps
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
/>`});l(()=>f(e,d,Se))});let Ce=r(`h2`,d);i(d,Ce),i(Ce,o(`API`));let $=r(`p`,d);i(d,$);let we=r(`code`,$);i($,we),i(we,o(`Steps`)),i($,o(`负责布局、状态推导与点击切换；`));let Te=r(`code`,$);i($,Te),i(Te,o(`Steps.Step`)),i($,o(`和`));let Ee=g($);i($,Ee),a(Ee,` `);let De=r(`code`,$);i($,De),i(De,o(`StepItem`)),i($,o(`共享同一组单步属性。`));let Oe=r(`h3`,d);i(d,Oe),i(Oe,o(`Steps`));let ke=e(`rue:component:anchor`);i(d,ke),h(()=>{let e=m(P,{rows:ae});l(()=>f(e,d,ke))});let Ae=r(`h3`,d);i(d,Ae),i(Ae,o(`Steps.Step / StepItem`));let je=e(`rue:component:anchor`);return i(d,je),h(()=>{let e=m(P,{rows:oe});l(()=>f(e,d,je))}),c})}),p,_),p})};export{I as default};