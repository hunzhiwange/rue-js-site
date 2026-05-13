import{F as e,G as t,I as n,L as r,M as i,P as a,R as o,U as s,Z as c,_t as l,bt as u,c as d,d as f,lt as p,pt as m,t as h,u as g}from"./vapor-runtime-D3a-68js.js";import{a as _,n as v}from"./vapor-helpers-vapor-DGjYaAZX.js";import{n as y,t as b}from"./src-BfQKH6_d.js";import{n as x}from"./SidebarPlaygroundDesign-vpnUkFCM.js";import{t as S}from"./PreviewBlock-DZ28sFI7.js";var C=(...e)=>e.filter(Boolean).join(` `),w=(e,t)=>t?`${e} ${t}`:e,T=(e,t)=>t??e,E=(e,t)=>{if(t)return t;if(e===`error`)return`error`;if(e===`finish`||e===`process`)return`primary`},D=(e,t)=>{if(!t){if(e===`finish`)return`✓`;if(e===`error`)return`✕`}},O=e=>{typeof e.preventDefault==`function`&&e.preventDefault(),typeof e.stopPropagation==`function`&&e.stopPropagation()},k=({status:e})=>b(`span`,{className:e===`wait`?`inline-block size-2.5 rounded-full border border-base-300 bg-base-100`:`inline-block size-2.5 rounded-full bg-current`}),A=(e,t)=>{if(!e)return;let n=b(k,{status:t.status});return typeof e==`function`?e(n,t):n},j=(e,t,n,r)=>e.status?e.status:typeof n==`number`?t<n?`finish`:t===n?r??`process`:`wait`:`wait`,M=({as:e=`li`,color:t,className:n,title:r,description:i,content:a,subTitle:o,icon:s,status:c,disabled:l,clickable:u,dataContent:d,children:p,index:m,onClick:h,onKeyDown:g,..._})=>{let v=e,x=a??i,S=r??p,C=u??!!h,T=E(c,t),k=d??_[`data-content`]??D(c,s!=null),A=r!=null||x!=null||o!=null||s!=null,j=_[`aria-current`]??(c===`process`?`step`:void 0),M=l?`true`:void 0,N=`step`;T&&(N+=` step-${T}`),C&&!l&&(N+=` cursor-pointer`),l&&(N+=` opacity-50`),C&&l&&(N+=` cursor-not-allowed`);let P={..._,className:w(N,n)};k!==void 0&&(P[`data-content`]=k);let F=e=>{if(l){O(e);return}h&&h(e,m)};return C&&(P.role=_.role??`button`,P.tabIndex=_.tabIndex??(l?-1:0),P.onClick=F,P.onKeyDown=e=>{if(g&&g(e),e.defaultPrevented||l){l&&O(e);return}(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),F(e))}),b(v,{...P,"aria-current":j,"aria-disabled":M,children:A?y(f,{children:[s==null?null:b(`span`,{className:w(`step-icon`,x==null?void 0:`mt-0.5`),"aria-hidden":`true`,children:s}),y(`span`,{className:`inline-flex min-w-0 flex-col gap-1 py-1 text-start`,children:[S!=null||o!=null?y(`span`,{className:`flex flex-wrap items-center gap-2 leading-tight`,children:[S==null?null:b(`span`,{className:`font-medium`,children:S}),o==null?null:b(`span`,{className:`text-xs opacity-60`,children:o})]}):null,x==null?null:b(`span`,{className:`text-xs leading-snug opacity-70`,children:x})]})]}):p})},N=Object.assign(({as:e=`ul`,direction:t,orientation:n,className:r,children:i,items:a,current:o,status:s,progressDot:c,onChange:l,...u})=>{let d=e,f=T(t,n),p=a&&a.length>0?a.map((e,t)=>{let n=j(e,t,o,s),r=e.icon??A(c,{index:t,status:n,title:e.title,description:e.description,content:e.content}),i=e.clickable??(!!l||!!e.onClick);return b(M,{...e,index:t,status:n,color:E(n,e.color),icon:r,clickable:i,onClick:(t,n)=>{e.disabled||(e.onClick&&typeof n==`number`&&e.onClick(t,n),l&&typeof n==`number`&&n!==o&&l(n))}},e.key??t)}):i,m=`steps`;return f&&(m+=` steps-${f}`),b(d,{...u,className:C(m,r),children:p})},{Step:M,Icon:({as:e=`span`,className:t,children:n,...r})=>b(e,{...r,className:w(`step-icon`,t),children:n})}),P=o=>g(()=>{let c=n(`div`);t(c,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let l=n(`table`);i(c,l),t(l,`table table-zebra`);let f=n(`thead`);i(l,f);let p=n(`tr`);i(f,p);let h=n(`th`);i(p,h),i(h,r(`属性`));let _=n(`th`);i(p,_),i(_,r(`说明`));let y=n(`th`);i(p,y),i(y,r(`类型`));let b=n(`th`);i(p,b),i(b,r(`默认值`));let x=n(`tbody`);i(l,x);let S=a(`rue:list:start`),C=a(`rue:list:end`);i(x,S),i(x,C);let w=new Map;return u(()=>{w=v({items:o.rows||[],getKey:(e,t)=>e.prop,elements:w,parent:x,before:C,singleRoot:!0,trackIndex:!1,start:S,renderItem:(t,r,o,c,l)=>{d(g(()=>{let r=e(),o=n(`tr`);i(r,o),u(()=>{s(o,`key`,String(t.prop))});let c=n(`td`);i(o,c);let l=n(`code`);i(c,l);let f=a(`rue:slot:anchor`);i(l,f),u(()=>{let e=t.prop;m(()=>d(e,l,f))});let p=n(`td`);i(o,p);let h=a(`rue:slot:anchor`);i(p,h),u(()=>{let e=t.description;m(()=>d(e,p,h))});let g=n(`td`);i(o,g);let _=n(`code`);i(g,_);let v=a(`rue:slot:anchor`);i(_,v),u(()=>{let e=t.type;m(()=>d(e,_,v))});let y=n(`td`);i(o,y);let b=n(`code`);i(y,b);let x=a(`rue:slot:anchor`);return i(b,x),u(()=>{let e=t.defaultValue;m(()=>d(e,b,x))}),r}),r,o)}})}),c}),F=()=>g(()=>{let e=n(`svg`);s(e,`xmlns`,`http://www.w3.org/2000/svg`),s(e,`viewBox`,`0 0 24 24`),s(e,`fill`,`none`),s(e,`stroke`,`currentColor`),s(e,`strokeWidth`,`2`),t(e,`size-[1.05em]`);let r=n(`path`);i(e,r),s(r,`strokeLinecap`,`round`),s(r,`strokeLinejoin`,`round`),s(r,`d`,`M6 20a6 6 0 0 1 12 0`);let a=n(`circle`);return i(e,a),s(a,`cx`,`12`),s(a,`cy`,`9`),s(a,`r`,`4`),e}),I=()=>g(()=>{let e=n(`svg`);s(e,`xmlns`,`http://www.w3.org/2000/svg`),s(e,`viewBox`,`0 0 24 24`),s(e,`fill`,`none`),s(e,`stroke`,`currentColor`),s(e,`strokeWidth`,`2`),t(e,`size-[1.05em]`);let r=n(`path`);i(e,r),s(r,`strokeLinecap`,`round`),s(r,`strokeLinejoin`,`round`),s(r,`d`,`m12 3 1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3Z`);let a=n(`path`);return i(e,a),s(a,`strokeLinecap`,`round`),s(a,`strokeLinejoin`,`round`),s(a,`d`,`M5 18h.01M19 18h.01M12 21h.01`),e}),ee=()=>g(()=>{let e=n(`svg`);s(e,`xmlns`,`http://www.w3.org/2000/svg`),s(e,`viewBox`,`0 0 24 24`),s(e,`fill`,`none`),s(e,`stroke`,`currentColor`),s(e,`strokeWidth`,`2`),t(e,`size-[1.05em]`);let r=n(`rect`);i(e,r),s(r,`x`,`3`),s(r,`y`,`5`),s(r,`width`,`18`),s(r,`height`,`14`),s(r,`rx`,`2`);let a=n(`path`);return i(e,a),s(a,`strokeLinecap`,`round`),s(a,`strokeLinejoin`,`round`),s(a,`d`,`M3 10h18`),e}),te=()=>g(()=>{let e=n(`svg`);s(e,`xmlns`,`http://www.w3.org/2000/svg`),s(e,`viewBox`,`0 0 24 24`),s(e,`fill`,`none`),s(e,`stroke`,`currentColor`),s(e,`strokeWidth`,`2`),t(e,`size-[1.05em]`);let r=n(`circle`);i(e,r),s(r,`cx`,`12`),s(r,`cy`,`12`),s(r,`r`,`9`);let a=n(`path`);i(e,a),s(a,`strokeLinecap`,`round`),s(a,`strokeLinejoin`,`round`),s(a,`d`,`M8 14s1.5 2 4 2 4-2 4-2`);let o=n(`path`);return i(e,o),s(o,`strokeLinecap`,`round`),s(o,`strokeLinejoin`,`round`),s(o,`d`,`M9 10h.01M15 10h.01`),e}),ne=()=>g(()=>{let o=n(`div`);t(o,`grid gap-5`);let c=n(`div`);i(o,c),t(c,`space-y-2`);let l=n(`div`);i(c,l),t(l,`text-sm font-medium`),i(l,r(`长标签交付流程`));let u=n(`div`);i(c,u),t(u,`max-w-xl overflow-x-auto pb-2`),s(u,`data-testid`,`steps-scroll-wrapper`);let f=a(`rue:component:anchor`);i(u,f),d(h(N,{className:`min-w-[1120px]`,children:g(()=>{let t=e(),n=a(`rue:component:anchor`);i(t,n),d(h(N.Step,{color:`primary`,children:`需求确认`}),t,n);let r=a(`rue:component:anchor`);i(t,r),d(h(N.Step,{color:`primary`,children:`设计评审与资源排期`}),t,r);let o=a(`rue:component:anchor`);i(t,o),d(h(N.Step,{color:`primary`,children:`前后端联调验收`}),t,o);let s=a(`rue:component:anchor`);i(t,s),d(h(N.Step,{color:`secondary`,children:`灰度发布到内部环境`}),t,s);let c=a(`rue:component:anchor`);i(t,c),d(h(N.Step,{color:`secondary`,children:`邀请试点客户体验`}),t,c);let l=a(`rue:component:anchor`);i(t,l),d(h(N.Step,{color:`accent`,children:`收集反馈并修复阻塞问题`}),t,l);let u=a(`rue:component:anchor`);i(t,u),d(h(N.Step,{color:`accent`,children:`准备正式发布说明`}),t,u);let f=a(`rue:component:anchor`);i(t,f),d(h(N.Step,{color:`warning`,children:`上线窗口审批`}),t,f);let p=a(`rue:component:anchor`);i(t,p),d(h(N.Step,{color:`warning`,children:`生产环境发布`}),t,p);let m=a(`rue:component:anchor`);i(t,m),d(h(N.Step,{color:`success`,children:`发布后巡检`}),t,m);let g=a(`rue:component:anchor`);return i(t,g),d(h(N.Step,{color:`neutral`,children:`归档复盘`}),t,g),t})}),u,f);let p=n(`div`);i(o,p),t(p,`space-y-2`);let m=n(`div`);i(p,m),t(m,`text-sm font-medium`),i(m,r(`编号里程碑`));let _=n(`div`);i(p,_),t(_,`max-w-md overflow-x-auto pb-2`);let v=a(`rue:component:anchor`);return i(_,v),d(h(N,{className:`min-w-[960px]`,children:g(()=>{let t=e(),n=a(`rue:component:anchor`);i(t,n),d(h(N.Step,{color:`neutral`,children:`Start`}),t,n);let r=a(`rue:component:anchor`);i(t,r),d(h(N.Step,{color:`secondary`,children:`02`}),t,r);let o=a(`rue:component:anchor`);i(t,o),d(h(N.Step,{color:`secondary`,children:`03`}),t,o);let s=a(`rue:component:anchor`);i(t,s),d(h(N.Step,{color:`secondary`,children:`04`}),t,s);let c=a(`rue:component:anchor`);i(t,c),d(h(N.Step,{children:`05`}),t,c);let l=a(`rue:component:anchor`);i(t,l),d(h(N.Step,{color:`accent`,children:`06`}),t,l);let u=a(`rue:component:anchor`);i(t,u),d(h(N.Step,{color:`accent`,children:`07`}),t,u);let f=a(`rue:component:anchor`);i(t,f),d(h(N.Step,{children:`08`}),t,f);let p=a(`rue:component:anchor`);i(t,p),d(h(N.Step,{color:`info`,children:`09`}),t,p);let m=a(`rue:component:anchor`);i(t,m),d(h(N.Step,{color:`info`,children:`10`}),t,m);let g=a(`rue:component:anchor`);i(t,g),d(h(N.Step,{color:`error`,children:`11`}),t,g);let _=a(`rue:component:anchor`);i(t,_),d(h(N.Step,{color:`warning`,children:`12`}),t,_);let v=a(`rue:component:anchor`);return i(t,v),d(h(N.Step,{color:`neutral`,children:`End`}),t,v),t})}),_,v),o}),re=()=>{let{current:e}=_(`useSetup:0:0`,()=>l(()=>({current:_(`ref:1:0`,()=>p(0))})));return g(()=>{let s=n(`div`);t(s,`card bg-base-100 shadow-sm`);let l=n(`div`);i(s,l),t(l,`card-body gap-4`);let f=a(`rue:component:anchor`);i(l,f),u(()=>{let t=h(N,{current:e.value,onChange:t=>e.value=t,items:[{title:`Draft`,description:`Prepare the release scope and changelog.`,clickable:!0},{title:`Review`,description:`QA and product approve the rollout plan.`,clickable:!0},{title:`Deploy`,description:`Promote the release to production.`,clickable:!0}]});m(()=>d(t,l,f))});let p=n(`div`);i(l,p),t(p,`rounded-box border border-dashed border-base-300 bg-base-200/50 px-4 py-3 text-sm`),i(p,r(`点击步骤可切换，当前选中步骤：`));let g=n(`code`);i(p,g);let _=o(g);return i(g,_),u(()=>{c(_,e.value)}),s})},ie=[{prop:`direction / orientation`,description:`设置整体朝向；支持沿用 Rue 旧的 direction 写法，也支持更通用的 orientation 别名。`,type:`'horizontal' | 'vertical'`,defaultValue:`-`},{prop:`items`,description:`数据驱动模式，适合与 current、status、onChange 一起使用。`,type:`StepItem[]`,defaultValue:`-`},{prop:`current`,description:`当前进行中的步骤索引；前面的步骤自动推导为完成态，后面的步骤自动推导为等待态。`,type:`number`,defaultValue:`-`},{prop:`status`,description:`当前步骤的全局状态覆盖，仅作用于 current 命中的步骤。`,type:`'wait' | 'process' | 'finish' | 'error'`,defaultValue:`'process'`},{prop:`progressDot`,description:`切换为进度点模式，也支持自定义 dot 渲染函数。`,type:`boolean | (dot, info) => any`,defaultValue:`false`},{prop:`onChange`,description:`搭配 items 使用时启用点击切换，回传目标步骤索引。`,type:`(current: number) => void`,defaultValue:`-`}],ae=[{prop:`color`,description:`直接指定 Rue 语义色；未指定时会根据 status 自动映射。`,type:`'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'`,defaultValue:`按 status 推导`},{prop:`title`,description:`步骤主标题；在 children 写法中可与 description、subTitle、icon 组合为语义化内容区。`,type:`any`,defaultValue:`-`},{prop:`description / content`,description:`标题下方的补充说明文字；content 优先级高于 description。`,type:`any`,defaultValue:`-`},{prop:`subTitle`,description:`标题旁边的次级信息，适合展示倒计时、状态文案等。`,type:`any`,defaultValue:`-`},{prop:`icon`,description:`自定义步骤图标；继续支持旧的 <Steps.Icon /> 插槽写法。`,type:`any`,defaultValue:`-`},{prop:`status`,description:`单步状态，可覆盖根组件根据 current 推导的结果。`,type:`'wait' | 'process' | 'finish' | 'error'`,defaultValue:`-`},{prop:`dataContent / data-content`,description:`直接控制 daisyUI step 圆点中的字符，适合问号、勾号或自定义符号。`,type:`string`,defaultValue:`-`},{prop:`clickable / disabled`,description:`控制单步是否可交互，以及是否禁用点击切换。`,type:`boolean`,defaultValue:`false`}],L=()=>{let{tabs:f}=_(`useSetup:0:0:dup1`,()=>l(()=>({tabs:{horizontal:_(`ref:1:1`,()=>p(`preview`)),vertical:_(`ref:1:2`,()=>p(`preview`)),responsive:_(`ref:1:3`,()=>p(`preview`)),icons:_(`ref:1:4`,()=>p(`preview`)),dataContent:_(`ref:1:5`,()=>p(`preview`)),colors:_(`ref:1:6`,()=>p(`preview`)),scrollable:_(`ref:1:7`,()=>p(`preview`)),richStep:_(`ref:1:8`,()=>p(`preview`)),items:_(`ref:1:9`,()=>p(`preview`)),clickable:_(`ref:1:10`,()=>p(`preview`)),progressDot:_(`ref:1:11`,()=>p(`preview`))}})));return g(()=>{let l=e(),p=a(`rue:component:anchor`);return i(l,p),d(h(x,{children:g(()=>{let l=e(),p=n(`div`);i(l,p),t(p,`max-w-none prose prose-sm md:prose-base`);let g=n(`h1`);i(p,g),i(g,r(`Steps 步骤条`));let _=n(`p`);i(p,_),t(_,`text-sm mt-3 mb-3`),i(_,r(`Rue Steps 继续保留 daisyUI 的轻量视觉风格，同时补齐更贴近成熟业务组件的数据驱动 API： 支持`));let v=o(_);i(_,v),c(v,` `);let x=n(`code`);i(_,x),i(x,r(`items`)),i(_,r(`、`));let C=n(`code`);i(_,C),i(C,r(`current`)),i(_,r(`、`));let w=n(`code`);i(_,w),i(w,r(`status`)),i(_,r(`、`));let T=n(`code`);i(_,T),i(T,r(`progressDot`)),i(_,r(`、`));let E=n(`code`);i(_,E),i(E,r(`onChange`)),i(_,r(`，以及单步级别的`));let D=n(`code`);i(_,D),i(D,r(`title`)),i(_,r(`、`));let O=n(`code`);i(_,O),i(O,r(`description`)),i(_,r(`、`));let k=n(`code`);i(_,k),i(k,r(`subTitle`)),i(_,r(`和`));let A=n(`code`);i(_,A),i(A,r(`icon`)),i(_,r(`。`));let j=n(`div`);i(p,j),t(j,`text-sm`);let M=n(`a`);i(j,M),s(M,`href`,`https://daisyui.com/components/steps/`),s(M,`target`,`_blank`),i(M,r(`查看 Steps 静态样式基底`));let L=n(`div`);i(p,L),t(L,`not-prose mt-6 grid gap-4 md:grid-cols-3`);let R=n(`div`);i(L,R),t(R,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let z=n(`div`);i(R,z),t(z,`text-xs font-semibold uppercase tracking-wide text-primary`),i(z,r(`双模式`));let B=n(`div`);i(R,B),t(B,`mt-2 text-sm font-medium`),i(B,r(`children / items 都可用`));let V=n(`p`);i(R,V),t(V,`mt-2 text-sm opacity-70`),i(V,r(`老的`));let H=n(`code`);i(V,H),i(H,r(`Steps.Step`)),i(V,r(`和`));let U=n(`code`);i(V,U),i(U,r(`Steps.Icon`));let oe=o(V);i(V,oe),c(oe,` `),i(V,r(`不变，新场景可直接传入数据数组。`));let W=n(`div`);i(L,W),t(W,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let G=n(`div`);i(W,G),t(G,`text-xs font-semibold uppercase tracking-wide text-secondary`),i(G,r(`状态推导`));let K=n(`div`);i(W,K),t(K,`mt-2 text-sm font-medium`),i(K,r(`current 自动推导完成/进行中/等待`));let q=n(`p`);i(W,q),t(q,`mt-2 text-sm opacity-70`),i(q,r(`不必手动给每一步都写颜色，只有例外项再单独覆盖即可。`));let J=n(`div`);i(L,J),t(J,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let Y=n(`div`);i(J,Y),t(Y,`text-xs font-semibold uppercase tracking-wide text-accent`),i(Y,r(`内容增强`));let X=n(`div`);i(J,X),t(X,`mt-2 text-sm font-medium`),i(X,r(`支持标题、副标题、描述和进度点`));let Z=n(`p`);i(J,Z),t(Z,`mt-2 text-sm opacity-70`),i(Z,r(`适合把原本只能写一行文本的步骤条，扩展成更完整的流程说明区。`));let se=n(`h2`);i(p,se),i(se,r(`基础布局`));let ce=n(`p`);i(p,ce),i(ce,r(`这一组示例保留 Rue 原有 demo，用来展示最基础的横向、纵向和响应式排列方式。`));let le=a(`rue:component:anchor`);i(p,le),u(()=>{let e=h(S,{title:`Horizontal`,tab:f.horizontal,preview:b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(N,{"data-testid":`steps-horizontal`,children:[b(N.Step,{color:`primary`,children:`Register`}),b(N.Step,{color:`primary`,children:`Choose plan`}),b(N.Step,{children:`Purchase`}),b(N.Step,{children:`Receive Product`})]})})}),code:`<Steps>
  <Steps.Step color="primary">Register</Steps.Step>
  <Steps.Step color="primary">Choose plan</Steps.Step>
  <Steps.Step>Purchase</Steps.Step>
  <Steps.Step>Receive Product</Steps.Step>
</Steps>`});m(()=>d(e,p,le))});let ue=a(`rue:component:anchor`);i(p,ue),u(()=>{let e=h(S,{title:`Vertical`,tab:f.vertical,preview:b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(N,{direction:`vertical`,children:[b(N.Step,{color:`primary`,children:`Register`}),b(N.Step,{color:`primary`,children:`Choose plan`}),b(N.Step,{children:`Purchase`}),b(N.Step,{children:`Receive Product`})]})})}),code:`<Steps direction="vertical">
  <Steps.Step color="primary">Register</Steps.Step>
  <Steps.Step color="primary">Choose plan</Steps.Step>
  <Steps.Step>Purchase</Steps.Step>
  <Steps.Step>Receive Product</Steps.Step>
</Steps>`});m(()=>d(e,p,ue))});let de=a(`rue:component:anchor`);i(p,de),u(()=>{let e=h(S,{title:`Responsive`,tab:f.responsive,preview:b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(N,{direction:`vertical`,className:`lg:steps-horizontal`,children:[b(N.Step,{color:`primary`,children:`Register`}),b(N.Step,{color:`primary`,children:`Choose plan`}),b(N.Step,{children:`Purchase`}),b(N.Step,{children:`Receive Product`})]})})}),code:`<Steps direction="vertical" className="lg:steps-horizontal">
  <Steps.Step color="primary">Register</Steps.Step>
  <Steps.Step color="primary">Choose plan</Steps.Step>
  <Steps.Step>Purchase</Steps.Step>
  <Steps.Step>Receive Product</Steps.Step>
</Steps>`});m(()=>d(e,p,de))});let fe=n(`h2`);i(p,fe),i(fe,r(`视觉定制`));let pe=n(`p`);i(p,pe),i(pe,r(`这一组仍然保留当前 Rue 的静态能力，包括自定义 icon、data-content、语义色和滚动容器。`));let me=a(`rue:component:anchor`);i(p,me),u(()=>{let e=h(S,{title:`With custom content in step-icon`,tab:f.icons,preview:b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(N,{"data-testid":`steps-icons`,children:[y(N.Step,{color:`neutral`,children:[b(N.Icon,{children:`1`}),`Step 1`]}),y(N.Step,{color:`neutral`,children:[b(N.Icon,{children:`2`}),`Step 2`]}),y(N.Step,{children:[b(N.Icon,{children:`3`}),`Step 3`]})]})})}),code:`<Steps>
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
</Steps>`});m(()=>d(e,p,me))});let he=a(`rue:component:anchor`);i(p,he),u(()=>{let e=h(S,{title:`With data-content`,tab:f.dataContent,preview:b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(N,{children:[b(N.Step,{color:`neutral`,"data-content":`?`,children:`Step 1`}),b(N.Step,{color:`neutral`,"data-content":`!`,children:`Step 2`}),b(N.Step,{color:`neutral`,"data-content":`✓`,children:`Step 3`}),b(N.Step,{color:`neutral`,"data-content":`✕`,children:`Step 4`}),b(N.Step,{color:`neutral`,"data-content":`★`,children:`Step 5`})]})})}),code:`<Steps>
  <Steps.Step color="neutral" data-content="?">Step 1</Steps.Step>
  <Steps.Step color="neutral" data-content="!">Step 2</Steps.Step>
  <Steps.Step color="neutral" data-content="✓">Step 3</Steps.Step>
  <Steps.Step color="neutral" data-content="✕">Step 4</Steps.Step>
  <Steps.Step color="neutral" data-content="★">Step 5</Steps.Step>
</Steps>`});m(()=>d(e,p,he))});let ge=a(`rue:component:anchor`);i(p,ge),u(()=>{let e=h(S,{title:`Custom colors`,tab:f.colors,preview:b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(N,{children:[b(N.Step,{color:`info`,children:`Fly to moon`}),b(N.Step,{color:`info`,children:`Shrink the moon`}),b(N.Step,{color:`info`,children:`Grab the moon`}),b(N.Step,{color:`error`,"data-content":`?`,children:`Sit on toilet`})]})})}),code:`<Steps>
  <Steps.Step color="info">Fly to moon</Steps.Step>
  <Steps.Step color="info">Shrink the moon</Steps.Step>
  <Steps.Step color="info">Grab the moon</Steps.Step>
  <Steps.Step color="error" data-content="?">Sit on toilet</Steps.Step>
</Steps>`});m(()=>d(e,p,ge))});let _e=a(`rue:component:anchor`);i(p,_e),u(()=>{let e=h(S,{title:`With scrollable wrapper`,tab:f.scrollable,preview:b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:b(ne,{})})}),code:`<div className="grid gap-5">
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
</div>`});m(()=>d(e,p,_e))});let ve=n(`h2`);i(p,ve),i(ve,r(`增强 API`));let ye=n(`p`);i(p,ye),i(ye,r(`下面这些示例展示的是本次补齐的语义层能力，目标是让 Rue Steps 在不丢失现有风格的前提下更接近常见业务组件的使用体验。`));let be=a(`rue:component:anchor`);i(p,be),u(()=>{let e=h(S,{title:`Rich step content`,tab:f.richStep,preview:b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(N,{direction:`vertical`,children:[b(N.Step,{status:`finish`,title:`Connect repository`,description:`Link your GitHub repository and import the default build settings.`,icon:b(F,{})}),b(N.Step,{status:`process`,title:`Configure policies`,subTitle:`~ 2 mins`,description:`Set preview branches, branch protection, and deployment rules.`,icon:b(I,{})}),b(N.Step,{status:`wait`,title:`Ship to production`,description:`Merge the release branch after the final smoke test passes.`})]})})}),code:`<Steps direction="vertical">
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
</Steps>`});m(()=>d(e,p,be))});let xe=a(`rue:component:anchor`);i(p,xe),u(()=>{let e=h(S,{title:`Items + current + status`,tab:f.items,preview:b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-4`,children:[b(N,{current:1,status:`error`,items:[{title:`Account`,description:`Create workspace and invite collaborators.`,icon:b(F,{})},{title:`Verification`,subTitle:`Left 00:00:08`,description:`Waiting for security review and DNS validation.`,icon:b(I,{})},{title:`Payment`,description:`Unlock the production environment after confirmation.`,icon:b(ee,{})},{title:`Done`,description:`Your first deployment is ready.`,icon:b(te,{})}]}),y(`div`,{className:`text-sm opacity-70`,children:[`当前索引为 `,b(`code`,{children:`1`}),`，所以第 0 步自动完成，第 1 步继承根节点的`,` `,b(`code`,{children:`error`}),` 状态。`]})]})}),code:`<Steps
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
/>`});m(()=>d(e,p,xe))});let Se=a(`rue:component:anchor`);i(p,Se),u(()=>{let e=h(S,{title:`Clickable items`,tab:f.clickable,preview:b(re,{}),code:`const ClickableStepsDemo: FC = () => {
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
}`});m(()=>d(e,p,Se))});let Q=a(`rue:component:anchor`);i(p,Q),u(()=>{let e=h(S,{title:`Progress dot`,tab:f.progressDot,preview:b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:b(N,{progressDot:(e,t)=>b(`span`,{className:`tooltip tooltip-bottom`,"data-tip":`${t.title}`,children:e}),items:[{title:`Collect requirements`,description:`Align scope with design and engineering.`},{title:`Build demo`,description:`Create a stakeholder-ready flow.`},{title:`Launch beta`,description:`Open access to pilot users.`}]})})}),code:`<Steps
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
/>`});m(()=>d(e,p,Q))});let Ce=n(`h2`);i(p,Ce),i(Ce,r(`API`));let $=n(`p`);i(p,$);let we=n(`code`);i($,we),i(we,r(`Steps`)),i($,r(`负责布局、状态推导与点击切换；`));let Te=n(`code`);i($,Te),i(Te,r(`Steps.Step`)),i($,r(`和`));let Ee=o($);i($,Ee),c(Ee,` `);let De=n(`code`);i($,De),i(De,r(`StepItem`)),i($,r(`共享同一组单步属性。`));let Oe=n(`h3`);i(p,Oe),i(Oe,r(`Steps`));let ke=a(`rue:component:anchor`);i(p,ke),u(()=>{let e=h(P,{rows:ie});m(()=>d(e,p,ke))});let Ae=n(`h3`);i(p,Ae),i(Ae,r(`Steps.Step / StepItem`));let je=a(`rue:component:anchor`);return i(p,je),u(()=>{let e=h(P,{rows:ae});m(()=>d(e,p,je))}),l})}),l,p),l})};export{L as default};