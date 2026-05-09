import{F as e,H as t,I as n,L as r,N as i,P as a,W as o,Y as s,c,d as l,j as u,pt as d,rt as f,t as p,u as m,ut as h}from"./vapor-runtime-CKndxKFn.js";import{a as g,n as _}from"./vapor-helpers-vapor-yxlhW-_4.js";import{n as v,t as y}from"./src-CqIWk1va.js";import{n as b}from"./SidebarPlaygroundDesign-CBV-3y9s.js";import{t as x}from"./PreviewBlock-mLH0898c.js";var S=(...e)=>e.filter(Boolean).join(` `),C=(e,t)=>t?`${e} ${t}`:e,w=(e,t)=>t??e,T=(e,t)=>{if(t)return t;if(e===`error`)return`error`;if(e===`finish`||e===`process`)return`primary`},E=(e,t)=>{if(!t){if(e===`finish`)return`✓`;if(e===`error`)return`✕`}},D=e=>{typeof e.preventDefault==`function`&&e.preventDefault(),typeof e.stopPropagation==`function`&&e.stopPropagation()},O=({status:e})=>y(`span`,{className:e===`wait`?`inline-block size-2.5 rounded-full border border-base-300 bg-base-100`:`inline-block size-2.5 rounded-full bg-current`}),k=(e,t)=>{if(!e)return;let n=y(O,{status:t.status});return typeof e==`function`?e(n,t):n},A=(e,t,n,r)=>e.status?e.status:typeof n==`number`?t<n?`finish`:t===n?r??`process`:`wait`:`wait`,j=({as:e=`li`,color:t,className:n,title:r,description:i,content:a,subTitle:o,icon:s,status:c,disabled:u,clickable:d,dataContent:f,children:p,index:m,onClick:h,onKeyDown:g,..._})=>{let b=e,x=a??i,S=r??p,w=d??!!h,O=T(c,t),k=f??_[`data-content`]??E(c,s!=null),A=r!=null||x!=null||o!=null||s!=null,j=_[`aria-current`]??(c===`process`?`step`:void 0),M=u?`true`:void 0,N=`step`;O&&(N+=` step-${O}`),w&&!u&&(N+=` cursor-pointer`),u&&(N+=` opacity-50`),w&&u&&(N+=` cursor-not-allowed`);let P={..._,className:C(N,n)};k!==void 0&&(P[`data-content`]=k);let F=e=>{if(u){D(e);return}h&&h(e,m)};return w&&(P.role=_.role??`button`,P.tabIndex=_.tabIndex??(u?-1:0),P.onClick=F,P.onKeyDown=e=>{if(g&&g(e),e.defaultPrevented||u){u&&D(e);return}(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),F(e))}),y(b,{...P,"aria-current":j,"aria-disabled":M,children:A?v(l,{children:[s==null?null:y(`span`,{className:C(`step-icon`,x==null?void 0:`mt-0.5`),"aria-hidden":`true`,children:s}),v(`span`,{className:`inline-flex min-w-0 flex-col gap-1 py-1 text-start`,children:[S!=null||o!=null?v(`span`,{className:`flex flex-wrap items-center gap-2 leading-tight`,children:[S==null?null:y(`span`,{className:`font-medium`,children:S}),o==null?null:y(`span`,{className:`text-xs opacity-60`,children:o})]}):null,x==null?null:y(`span`,{className:`text-xs leading-snug opacity-70`,children:x})]})]}):p})},M=Object.assign(({as:e=`ul`,direction:t,orientation:n,className:r,children:i,items:a,current:o,status:s,progressDot:c,onChange:l,...u})=>{let d=e,f=w(t,n),p=a&&a.length>0?a.map((e,t)=>{let n=A(e,t,o,s),r=e.icon??k(c,{index:t,status:n,title:e.title,description:e.description,content:e.content}),i=e.clickable??(!!l||!!e.onClick);return y(j,{...e,index:t,status:n,color:T(n,e.color),icon:r,clickable:i,onClick:(t,n)=>{e.disabled||(e.onClick&&typeof n==`number`&&e.onClick(t,n),l&&typeof n==`number`&&n!==o&&l(n))}},e.key??t)}):i,m=`steps`;return f&&(m+=` steps-${f}`),y(d,{...u,className:S(m,r),children:p})},{Step:j,Icon:({as:e=`span`,className:t,children:n,...r})=>y(e,{...r,className:C(`step-icon`,t),children:n})}),N=({rows:r})=>m(()=>{let s=e(`div`);o(s,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let l=e(`table`);u(s,l),o(l,`table table-zebra`);let f=e(`thead`);u(l,f);let p=e(`tr`);u(f,p);let h=e(`th`);u(p,h),u(h,n(`属性`));let g=e(`th`);u(p,g),u(g,n(`说明`));let v=e(`th`);u(p,v),u(v,n(`类型`));let y=e(`th`);u(p,y),u(y,n(`默认值`));let b=e(`tbody`);u(l,b);let x=i(`rue:list:start`),S=i(`rue:list:end`);u(b,x),u(b,S);let C=new Map;return d(()=>{C=_({items:r||[],getKey:(e,t)=>e.prop,elements:C,parent:b,before:S,singleRoot:!0,start:x,renderItem:(n,r,o,s,l)=>{c(m(()=>{let r=a(),o=e(`tr`);u(r,o),d(()=>{t(o,`key`,String(n.prop))});let s=e(`td`);u(o,s);let l=e(`code`);u(s,l);let f=i(`rue:slot:anchor`);u(l,f),d(()=>{let e=n.prop;c(e,l,f)});let p=e(`td`);u(o,p);let m=i(`rue:slot:anchor`);u(p,m),d(()=>{let e=n.description;c(e,p,m)});let h=e(`td`);u(o,h);let g=e(`code`);u(h,g);let _=i(`rue:slot:anchor`);u(g,_),d(()=>{let e=n.type;c(e,g,_)});let v=e(`td`);u(o,v);let y=e(`code`);u(v,y);let b=i(`rue:slot:anchor`);return u(y,b),d(()=>{let e=n.defaultValue;c(e,y,b)}),r}),r,o)}})}),s}),P=()=>m(()=>{let n=e(`svg`);t(n,`xmlns`,`http://www.w3.org/2000/svg`),t(n,`viewBox`,`0 0 24 24`),t(n,`fill`,`none`),t(n,`stroke`,`currentColor`),t(n,`strokeWidth`,`2`),o(n,`size-[1.05em]`);let r=e(`path`);u(n,r),t(r,`strokeLinecap`,`round`),t(r,`strokeLinejoin`,`round`),t(r,`d`,`M6 20a6 6 0 0 1 12 0`);let i=e(`circle`);return u(n,i),t(i,`cx`,`12`),t(i,`cy`,`9`),t(i,`r`,`4`),n}),F=()=>m(()=>{let n=e(`svg`);t(n,`xmlns`,`http://www.w3.org/2000/svg`),t(n,`viewBox`,`0 0 24 24`),t(n,`fill`,`none`),t(n,`stroke`,`currentColor`),t(n,`strokeWidth`,`2`),o(n,`size-[1.05em]`);let r=e(`path`);u(n,r),t(r,`strokeLinecap`,`round`),t(r,`strokeLinejoin`,`round`),t(r,`d`,`m12 3 1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3Z`);let i=e(`path`);return u(n,i),t(i,`strokeLinecap`,`round`),t(i,`strokeLinejoin`,`round`),t(i,`d`,`M5 18h.01M19 18h.01M12 21h.01`),n}),ee=()=>m(()=>{let n=e(`svg`);t(n,`xmlns`,`http://www.w3.org/2000/svg`),t(n,`viewBox`,`0 0 24 24`),t(n,`fill`,`none`),t(n,`stroke`,`currentColor`),t(n,`strokeWidth`,`2`),o(n,`size-[1.05em]`);let r=e(`rect`);u(n,r),t(r,`x`,`3`),t(r,`y`,`5`),t(r,`width`,`18`),t(r,`height`,`14`),t(r,`rx`,`2`);let i=e(`path`);return u(n,i),t(i,`strokeLinecap`,`round`),t(i,`strokeLinejoin`,`round`),t(i,`d`,`M3 10h18`),n}),te=()=>m(()=>{let n=e(`svg`);t(n,`xmlns`,`http://www.w3.org/2000/svg`),t(n,`viewBox`,`0 0 24 24`),t(n,`fill`,`none`),t(n,`stroke`,`currentColor`),t(n,`strokeWidth`,`2`),o(n,`size-[1.05em]`);let r=e(`circle`);u(n,r),t(r,`cx`,`12`),t(r,`cy`,`12`),t(r,`r`,`9`);let i=e(`path`);u(n,i),t(i,`strokeLinecap`,`round`),t(i,`strokeLinejoin`,`round`),t(i,`d`,`M8 14s1.5 2 4 2 4-2 4-2`);let a=e(`path`);return u(n,a),t(a,`strokeLinecap`,`round`),t(a,`strokeLinejoin`,`round`),t(a,`d`,`M9 10h.01M15 10h.01`),n}),ne=()=>m(()=>{let r=e(`div`);o(r,`grid gap-5`);let s=e(`div`);u(r,s),o(s,`space-y-2`);let l=e(`div`);u(s,l),o(l,`text-sm font-medium`),u(l,n(`长标签交付流程`));let d=e(`div`);u(s,d),o(d,`max-w-xl overflow-x-auto pb-2`),t(d,`data-testid`,`steps-scroll-wrapper`);let f=i(`rue:component:anchor`);u(d,f),c(p(M,{className:`min-w-[1120px]`,children:m(()=>{let e=a(),t=i(`rue:component:anchor`);u(e,t),c(p(M.Step,{color:`primary`,children:`需求确认`}),e,t);let n=i(`rue:component:anchor`);u(e,n),c(p(M.Step,{color:`primary`,children:`设计评审与资源排期`}),e,n);let r=i(`rue:component:anchor`);u(e,r),c(p(M.Step,{color:`primary`,children:`前后端联调验收`}),e,r);let o=i(`rue:component:anchor`);u(e,o),c(p(M.Step,{color:`secondary`,children:`灰度发布到内部环境`}),e,o);let s=i(`rue:component:anchor`);u(e,s),c(p(M.Step,{color:`secondary`,children:`邀请试点客户体验`}),e,s);let l=i(`rue:component:anchor`);u(e,l),c(p(M.Step,{color:`accent`,children:`收集反馈并修复阻塞问题`}),e,l);let d=i(`rue:component:anchor`);u(e,d),c(p(M.Step,{color:`accent`,children:`准备正式发布说明`}),e,d);let f=i(`rue:component:anchor`);u(e,f),c(p(M.Step,{color:`warning`,children:`上线窗口审批`}),e,f);let m=i(`rue:component:anchor`);u(e,m),c(p(M.Step,{color:`warning`,children:`生产环境发布`}),e,m);let h=i(`rue:component:anchor`);u(e,h),c(p(M.Step,{color:`success`,children:`发布后巡检`}),e,h);let g=i(`rue:component:anchor`);return u(e,g),c(p(M.Step,{color:`neutral`,children:`归档复盘`}),e,g),e})}),d,f);let h=e(`div`);u(r,h),o(h,`space-y-2`);let g=e(`div`);u(h,g),o(g,`text-sm font-medium`),u(g,n(`编号里程碑`));let _=e(`div`);u(h,_),o(_,`max-w-md overflow-x-auto pb-2`);let v=i(`rue:component:anchor`);return u(_,v),c(p(M,{className:`min-w-[960px]`,children:m(()=>{let e=a(),t=i(`rue:component:anchor`);u(e,t),c(p(M.Step,{color:`neutral`,children:`Start`}),e,t);let n=i(`rue:component:anchor`);u(e,n),c(p(M.Step,{color:`secondary`,children:`02`}),e,n);let r=i(`rue:component:anchor`);u(e,r),c(p(M.Step,{color:`secondary`,children:`03`}),e,r);let o=i(`rue:component:anchor`);u(e,o),c(p(M.Step,{color:`secondary`,children:`04`}),e,o);let s=i(`rue:component:anchor`);u(e,s),c(p(M.Step,{children:`05`}),e,s);let l=i(`rue:component:anchor`);u(e,l),c(p(M.Step,{color:`accent`,children:`06`}),e,l);let d=i(`rue:component:anchor`);u(e,d),c(p(M.Step,{color:`accent`,children:`07`}),e,d);let f=i(`rue:component:anchor`);u(e,f),c(p(M.Step,{children:`08`}),e,f);let m=i(`rue:component:anchor`);u(e,m),c(p(M.Step,{color:`info`,children:`09`}),e,m);let h=i(`rue:component:anchor`);u(e,h),c(p(M.Step,{color:`info`,children:`10`}),e,h);let g=i(`rue:component:anchor`);u(e,g),c(p(M.Step,{color:`error`,children:`11`}),e,g);let _=i(`rue:component:anchor`);u(e,_),c(p(M.Step,{color:`warning`,children:`12`}),e,_);let v=i(`rue:component:anchor`);return u(e,v),c(p(M.Step,{color:`neutral`,children:`End`}),e,v),e})}),_,v),r}),re=()=>{let{current:t}=g(`useSetup:0:0`,()=>h(()=>({current:g(`ref:1:0`,()=>f(0))})));return m(()=>{let a=e(`div`);o(a,`card bg-base-100 shadow-sm`);let l=e(`div`);u(a,l),o(l,`card-body gap-4`);let f=i(`rue:component:anchor`);u(l,f),d(()=>{c(p(M,{current:t.value,onChange:e=>t.value=e,items:[{title:`Draft`,description:`Prepare the release scope and changelog.`,clickable:!0},{title:`Review`,description:`QA and product approve the rollout plan.`,clickable:!0},{title:`Deploy`,description:`Promote the release to production.`,clickable:!0}]}),l,f)});let m=e(`div`);u(l,m),o(m,`rounded-box border border-dashed border-base-300 bg-base-200/50 px-4 py-3 text-sm`),u(m,n(`点击步骤可切换，当前选中步骤：`));let h=e(`code`);u(m,h);let g=r(h);return u(h,g),d(()=>{s(g,t.value)}),a})},ie=[{prop:`direction / orientation`,description:`设置整体朝向；支持沿用 Rue 旧的 direction 写法，也支持 ant-design 风格的 orientation 别名。`,type:`'horizontal' | 'vertical'`,defaultValue:`-`},{prop:`items`,description:`数据驱动模式，适合与 current、status、onChange 一起使用。`,type:`StepItem[]`,defaultValue:`-`},{prop:`current`,description:`当前进行中的步骤索引；前面的步骤自动推导为完成态，后面的步骤自动推导为等待态。`,type:`number`,defaultValue:`-`},{prop:`status`,description:`当前步骤的全局状态覆盖，仅作用于 current 命中的步骤。`,type:`'wait' | 'process' | 'finish' | 'error'`,defaultValue:`'process'`},{prop:`progressDot`,description:`切换为进度点模式，也支持自定义 dot 渲染函数。`,type:`boolean | (dot, info) => any`,defaultValue:`false`},{prop:`onChange`,description:`搭配 items 使用时启用点击切换，回传目标步骤索引。`,type:`(current: number) => void`,defaultValue:`-`}],ae=[{prop:`color`,description:`直接指定 Rue 语义色；未指定时会根据 status 自动映射。`,type:`'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'`,defaultValue:`按 status 推导`},{prop:`title`,description:`步骤主标题；在 children 写法中可与 description、subTitle、icon 组合为语义化内容区。`,type:`any`,defaultValue:`-`},{prop:`description / content`,description:`标题下方的补充说明文字；content 优先级高于 description。`,type:`any`,defaultValue:`-`},{prop:`subTitle`,description:`标题旁边的次级信息，适合展示倒计时、状态文案等。`,type:`any`,defaultValue:`-`},{prop:`icon`,description:`自定义步骤图标；继续支持旧的 <Steps.Icon /> 插槽写法。`,type:`any`,defaultValue:`-`},{prop:`status`,description:`单步状态，可覆盖根组件根据 current 推导的结果。`,type:`'wait' | 'process' | 'finish' | 'error'`,defaultValue:`-`},{prop:`dataContent / data-content`,description:`直接控制 daisyUI step 圆点中的字符，适合问号、勾号或自定义符号。`,type:`string`,defaultValue:`-`},{prop:`clickable / disabled`,description:`控制单步是否可交互，以及是否禁用点击切换。`,type:`boolean`,defaultValue:`false`}],I=()=>{let{tabs:l}=g(`useSetup:0:0`,()=>h(()=>({tabs:{horizontal:g(`ref:1:1`,()=>f(`preview`)),vertical:g(`ref:1:2`,()=>f(`preview`)),responsive:g(`ref:1:3`,()=>f(`preview`)),icons:g(`ref:1:4`,()=>f(`preview`)),dataContent:g(`ref:1:5`,()=>f(`preview`)),colors:g(`ref:1:6`,()=>f(`preview`)),scrollable:g(`ref:1:7`,()=>f(`preview`)),richStep:g(`ref:1:8`,()=>f(`preview`)),items:g(`ref:1:9`,()=>f(`preview`)),clickable:g(`ref:1:10`,()=>f(`preview`)),progressDot:g(`ref:1:11`,()=>f(`preview`))}})));return m(()=>{let f=a(),h=i(`rue:component:anchor`);return u(f,h),c(p(b,{children:m(()=>{let f=a(),m=e(`div`);u(f,m),o(m,`max-w-none prose prose-sm md:prose-base`);let h=e(`h1`);u(m,h),u(h,n(`Steps 步骤条`));let g=e(`p`);u(m,g),o(g,`text-sm mt-3 mb-3`),u(g,n(`Rue Steps 继续保留 daisyUI 的轻量视觉风格，同时补齐更接近 ant-design 的数据驱动 API： 支持`));let _=r(g);u(g,_),s(_,` `);let b=e(`code`);u(g,b),u(b,n(`items`)),u(g,n(`、`));let S=e(`code`);u(g,S),u(S,n(`current`)),u(g,n(`、`));let C=e(`code`);u(g,C),u(C,n(`status`)),u(g,n(`、`));let w=e(`code`);u(g,w),u(w,n(`progressDot`)),u(g,n(`、`));let T=e(`code`);u(g,T),u(T,n(`onChange`)),u(g,n(`，以及单步级别的`));let E=e(`code`);u(g,E),u(E,n(`title`)),u(g,n(`、`));let D=e(`code`);u(g,D),u(D,n(`description`)),u(g,n(`、`));let O=e(`code`);u(g,O),u(O,n(`subTitle`)),u(g,n(`和`));let k=e(`code`);u(g,k),u(k,n(`icon`)),u(g,n(`。`));let A=e(`div`);u(m,A),o(A,`text-sm`);let j=e(`a`);u(A,j),t(j,`href`,`https://daisyui.com/components/steps/`),t(j,`target`,`_blank`),u(j,n(`查看 Steps 静态样式基底`));let I=e(`div`);u(m,I),o(I,`not-prose mt-6 grid gap-4 md:grid-cols-3`);let L=e(`div`);u(I,L),o(L,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let R=e(`div`);u(L,R),o(R,`text-xs font-semibold uppercase tracking-wide text-primary`),u(R,n(`双模式`));let z=e(`div`);u(L,z),o(z,`mt-2 text-sm font-medium`),u(z,n(`children / items 都可用`));let B=e(`p`);u(L,B),o(B,`mt-2 text-sm opacity-70`),u(B,n(`老的`));let V=e(`code`);u(B,V),u(V,n(`Steps.Step`)),u(B,n(`和`));let H=e(`code`);u(B,H),u(H,n(`Steps.Icon`));let oe=r(B);u(B,oe),s(oe,` `),u(B,n(`不变，新场景可直接传入数据数组。`));let U=e(`div`);u(I,U),o(U,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let W=e(`div`);u(U,W),o(W,`text-xs font-semibold uppercase tracking-wide text-secondary`),u(W,n(`状态推导`));let G=e(`div`);u(U,G),o(G,`mt-2 text-sm font-medium`),u(G,n(`current 自动推导完成/进行中/等待`));let K=e(`p`);u(U,K),o(K,`mt-2 text-sm opacity-70`),u(K,n(`不必手动给每一步都写颜色，只有例外项再单独覆盖即可。`));let q=e(`div`);u(I,q),o(q,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let J=e(`div`);u(q,J),o(J,`text-xs font-semibold uppercase tracking-wide text-accent`),u(J,n(`内容增强`));let Y=e(`div`);u(q,Y),o(Y,`mt-2 text-sm font-medium`),u(Y,n(`支持标题、副标题、描述和进度点`));let X=e(`p`);u(q,X),o(X,`mt-2 text-sm opacity-70`),u(X,n(`适合把原本只能写一行文本的步骤条，扩展成更完整的流程说明区。`));let se=e(`h2`);u(m,se),u(se,n(`基础布局`));let ce=e(`p`);u(m,ce),u(ce,n(`这一组示例保留 Rue 原有 demo，用来展示最基础的横向、纵向和响应式排列方式。`));let le=i(`rue:component:anchor`);u(m,le),d(()=>{c(p(x,{title:`Horizontal`,tab:l.horizontal,preview:y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body`,children:v(M,{"data-testid":`steps-horizontal`,children:[y(M.Step,{color:`primary`,children:`Register`}),y(M.Step,{color:`primary`,children:`Choose plan`}),y(M.Step,{children:`Purchase`}),y(M.Step,{children:`Receive Product`})]})})}),code:`<Steps>
  <Steps.Step color="primary">Register</Steps.Step>
  <Steps.Step color="primary">Choose plan</Steps.Step>
  <Steps.Step>Purchase</Steps.Step>
  <Steps.Step>Receive Product</Steps.Step>
</Steps>`}),m,le)});let ue=i(`rue:component:anchor`);u(m,ue),d(()=>{c(p(x,{title:`Vertical`,tab:l.vertical,preview:y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body`,children:v(M,{direction:`vertical`,children:[y(M.Step,{color:`primary`,children:`Register`}),y(M.Step,{color:`primary`,children:`Choose plan`}),y(M.Step,{children:`Purchase`}),y(M.Step,{children:`Receive Product`})]})})}),code:`<Steps direction="vertical">
  <Steps.Step color="primary">Register</Steps.Step>
  <Steps.Step color="primary">Choose plan</Steps.Step>
  <Steps.Step>Purchase</Steps.Step>
  <Steps.Step>Receive Product</Steps.Step>
</Steps>`}),m,ue)});let de=i(`rue:component:anchor`);u(m,de),d(()=>{c(p(x,{title:`Responsive`,tab:l.responsive,preview:y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body`,children:v(M,{direction:`vertical`,className:`lg:steps-horizontal`,children:[y(M.Step,{color:`primary`,children:`Register`}),y(M.Step,{color:`primary`,children:`Choose plan`}),y(M.Step,{children:`Purchase`}),y(M.Step,{children:`Receive Product`})]})})}),code:`<Steps direction="vertical" className="lg:steps-horizontal">
  <Steps.Step color="primary">Register</Steps.Step>
  <Steps.Step color="primary">Choose plan</Steps.Step>
  <Steps.Step>Purchase</Steps.Step>
  <Steps.Step>Receive Product</Steps.Step>
</Steps>`}),m,de)});let fe=e(`h2`);u(m,fe),u(fe,n(`视觉定制`));let pe=e(`p`);u(m,pe),u(pe,n(`这一组仍然保留当前 Rue 的静态能力，包括自定义 icon、data-content、语义色和滚动容器。`));let me=i(`rue:component:anchor`);u(m,me),d(()=>{c(p(x,{title:`With custom content in step-icon`,tab:l.icons,preview:y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body`,children:v(M,{"data-testid":`steps-icons`,children:[v(M.Step,{color:`neutral`,children:[y(M.Icon,{children:`1`}),`Step 1`]}),v(M.Step,{color:`neutral`,children:[y(M.Icon,{children:`2`}),`Step 2`]}),v(M.Step,{children:[y(M.Icon,{children:`3`}),`Step 3`]})]})})}),code:`<Steps>
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
</Steps>`}),m,me)});let he=i(`rue:component:anchor`);u(m,he),d(()=>{c(p(x,{title:`With data-content`,tab:l.dataContent,preview:y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body`,children:v(M,{children:[y(M.Step,{color:`neutral`,"data-content":`?`,children:`Step 1`}),y(M.Step,{color:`neutral`,"data-content":`!`,children:`Step 2`}),y(M.Step,{color:`neutral`,"data-content":`✓`,children:`Step 3`}),y(M.Step,{color:`neutral`,"data-content":`✕`,children:`Step 4`}),y(M.Step,{color:`neutral`,"data-content":`★`,children:`Step 5`})]})})}),code:`<Steps>
  <Steps.Step color="neutral" data-content="?">Step 1</Steps.Step>
  <Steps.Step color="neutral" data-content="!">Step 2</Steps.Step>
  <Steps.Step color="neutral" data-content="✓">Step 3</Steps.Step>
  <Steps.Step color="neutral" data-content="✕">Step 4</Steps.Step>
  <Steps.Step color="neutral" data-content="★">Step 5</Steps.Step>
</Steps>`}),m,he)});let ge=i(`rue:component:anchor`);u(m,ge),d(()=>{c(p(x,{title:`Custom colors`,tab:l.colors,preview:y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body`,children:v(M,{children:[y(M.Step,{color:`info`,children:`Fly to moon`}),y(M.Step,{color:`info`,children:`Shrink the moon`}),y(M.Step,{color:`info`,children:`Grab the moon`}),y(M.Step,{color:`error`,"data-content":`?`,children:`Sit on toilet`})]})})}),code:`<Steps>
  <Steps.Step color="info">Fly to moon</Steps.Step>
  <Steps.Step color="info">Shrink the moon</Steps.Step>
  <Steps.Step color="info">Grab the moon</Steps.Step>
  <Steps.Step color="error" data-content="?">Sit on toilet</Steps.Step>
</Steps>`}),m,ge)});let _e=i(`rue:component:anchor`);u(m,_e),d(()=>{c(p(x,{title:`With scrollable wrapper`,tab:l.scrollable,preview:y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body`,children:y(ne,{})})}),code:`<div className="grid gap-5">
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
</div>`}),m,_e)});let ve=e(`h2`);u(m,ve),u(ve,n(`增强 API`));let ye=e(`p`);u(m,ye),u(ye,n(`下面这些示例展示的是本次补齐的语义层能力，目标是让 Rue Steps 在不丢失现有风格的前提下更接近 ant-design 的使用体验。`));let be=i(`rue:component:anchor`);u(m,be),d(()=>{c(p(x,{title:`Rich step content`,tab:l.richStep,preview:y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body`,children:v(M,{direction:`vertical`,children:[y(M.Step,{status:`finish`,title:`Connect repository`,description:`Link your GitHub repository and import the default build settings.`,icon:y(P,{})}),y(M.Step,{status:`process`,title:`Configure policies`,subTitle:`~ 2 mins`,description:`Set preview branches, branch protection, and deployment rules.`,icon:y(F,{})}),y(M.Step,{status:`wait`,title:`Ship to production`,description:`Merge the release branch after the final smoke test passes.`})]})})}),code:`<Steps direction="vertical">
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
</Steps>`}),m,be)});let xe=i(`rue:component:anchor`);u(m,xe),d(()=>{c(p(x,{title:`Items + current + status`,tab:l.items,preview:y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-4`,children:[y(M,{current:1,status:`error`,items:[{title:`Account`,description:`Create workspace and invite collaborators.`,icon:y(P,{})},{title:`Verification`,subTitle:`Left 00:00:08`,description:`Waiting for security review and DNS validation.`,icon:y(F,{})},{title:`Payment`,description:`Unlock the production environment after confirmation.`,icon:y(ee,{})},{title:`Done`,description:`Your first deployment is ready.`,icon:y(te,{})}]}),v(`div`,{className:`text-sm opacity-70`,children:[`当前索引为 `,y(`code`,{children:`1`}),`，所以第 0 步自动完成，第 1 步继承根节点的`,` `,y(`code`,{children:`error`}),` 状态。`]})]})}),code:`<Steps
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
/>`}),m,xe)});let Se=i(`rue:component:anchor`);u(m,Se),d(()=>{c(p(x,{title:`Clickable items`,tab:l.clickable,preview:y(re,{}),code:`const ClickableStepsDemo: FC = () => {
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
}`}),m,Se)});let Z=i(`rue:component:anchor`);u(m,Z),d(()=>{c(p(x,{title:`Progress dot`,tab:l.progressDot,preview:y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body`,children:y(M,{progressDot:(e,t)=>y(`span`,{className:`tooltip tooltip-bottom`,"data-tip":`${t.title}`,children:e}),items:[{title:`Collect requirements`,description:`Align scope with design and engineering.`},{title:`Build demo`,description:`Create a stakeholder-ready flow.`},{title:`Launch beta`,description:`Open access to pilot users.`}]})})}),code:`<Steps
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
/>`}),m,Z)});let Ce=e(`h2`);u(m,Ce),u(Ce,n(`API`));let Q=e(`p`);u(m,Q);let we=e(`code`);u(Q,we),u(we,n(`Steps`)),u(Q,n(`负责布局、状态推导与点击切换；`));let Te=e(`code`);u(Q,Te),u(Te,n(`Steps.Step`)),u(Q,n(`和`));let Ee=r(Q);u(Q,Ee),s(Ee,` `);let De=e(`code`);u(Q,De),u(De,n(`StepItem`)),u(Q,n(`共享同一组单步属性。`));let Oe=e(`h3`);u(m,Oe),u(Oe,n(`Steps`));let ke=i(`rue:component:anchor`);u(m,ke),d(()=>{c(p(N,{rows:ie}),m,ke)});let Ae=e(`h3`);u(m,Ae),u(Ae,n(`Steps.Step / StepItem`));let $=i(`rue:component:anchor`);return u(m,$),d(()=>{c(p(N,{rows:ae}),m,$)}),f})}),f,h),f})};export{I as default};