import{Q as e,Vt as t,Xt as n,at as r,bt as i,dt as a,it as o,l as s,m as c,nt as l,o as u,on as d,pt as f,rt as p,t as m,tn as h,tt as g,wt as _,x as v}from"./vapor-runtime-x7F5M-49.js";import{a as y,n as b}from"./vapor-helpers-vapor-D1LP4JjK.js";import{n as x,t as S}from"./src-Dlanwp1X.js";import{r as C}from"./SidebarPlaygroundDesign-CK4W0Rsr.js";import{t as w}from"./PreviewBlock-CCAV1yb7.js";var T=(...e)=>e.filter(Boolean).join(` `),E=e=>Array.isArray(e)?e.flatMap(e=>E(e)):e==null||typeof e==`boolean`?[]:[e],D=(e,t)=>t?`${e} ${t}`:e,O=(e,t)=>t??e,k=(e,t)=>{if(t)return t;if(e===`error`)return`error`;if(e===`finish`||e===`process`)return`primary`},A=(e,t)=>{if(!t){if(e===`finish`)return`✓`;if(e===`error`)return`✕`}},j=e=>{typeof e.preventDefault==`function`&&e.preventDefault(),typeof e.stopPropagation==`function`&&e.stopPropagation()},M=e=>{let{cls:n}=y(`useSetup:0:0`,()=>d(()=>({cls:y(`computed:1:0`,()=>_(()=>e.status===`wait`?`inline-block size-2.5 rounded-full border border-base-300 bg-base-100`:`inline-block size-2.5 rounded-full bg-current`))})));return s(e=>{let r=p(`span`,e);return t(()=>{f(r,n.get())}),r})},N=(e,t)=>{if(!e)return;let n=S(M,{status:t.status});return typeof e==`function`?e(n,t):n},P=(e,t,n,r)=>e.status?e.status:typeof n==`number`?t<n?`finish`:t===n?r??`process`:`wait`:`wait`,F=(e,t,n)=>{let{nextChildren:r}=y(`useSetup:0:0:dup1`,()=>d(()=>({nextChildren:y(`computed:1:1`,()=>_(()=>E(n)))})));return v(e,t,...r.get())},I=({as:e=`li`,color:t,className:n,title:r,description:i,content:a,subTitle:o,icon:s,status:l,disabled:u,clickable:d,dataContent:f,children:p,index:m,onClick:h,onKeyDown:g,..._})=>{let v=e,y=a??i,b=r??p,C=d??!!h,w=k(l,t),T=f??_[`data-content`]??A(l,s!=null),E=r!=null||y!=null||o!=null||s!=null,O=_[`aria-current`]??(l===`process`?`step`:void 0),M=u?`true`:void 0,N=`step`;w&&(N+=` step-${w}`),C&&!u&&(N+=` cursor-pointer`),u&&(N+=` opacity-50`),C&&u&&(N+=` cursor-not-allowed`);let P=e=>{if(u){j(e);return}h&&h(e,m)},I=C?_.role??`button`:_.role,L=C?_.tabIndex??(u?-1:0):_.tabIndex,R=C?e=>{if(g&&g(e),e.defaultPrevented||u){u&&j(e);return}(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),P(e))}:_.onKeyDown,z=C?P:_.onClick,B=E?x(c,{children:[s==null?null:S(`span`,{className:D(`step-icon`,y==null?void 0:`mt-0.5`),"aria-hidden":`true`,children:s}),x(`span`,{className:`inline-flex min-w-0 flex-col gap-1 py-1 text-start`,children:[b!=null||o!=null?x(`span`,{className:`flex flex-wrap items-center gap-2 leading-tight`,children:[b==null?null:S(`span`,{className:`font-medium`,children:b}),o==null?null:S(`span`,{className:`text-xs opacity-60`,children:o})]}):null,y==null?null:S(`span`,{className:`text-xs leading-snug opacity-70`,children:y})]})]}):p;return F(v,{..._,className:D(N,n),...T==null?{}:{"data-content":T},role:I,tabIndex:L,onClick:z,onKeyDown:R,"aria-current":O,"aria-disabled":M},B)},L=Object.assign(({as:n=`ul`,direction:r,orientation:i,className:a,children:o,items:c,current:d,status:f,progressDot:p,onChange:_,...v})=>{let y=n,b=O(r,i),x=c&&c.length>0?c.map((n,r)=>{let i=P(n,r,d,f),a=n.icon??N(p,{index:r,status:i,title:n.title,description:n.description,content:n.content}),o=n.clickable??(!!_||!!n.onClick);return s(s=>{let c=l(),f=g(`rue:component:anchor`);return e(c,f),t(()=>{let e=m(I,{key:n.key??r,...n,index:r,status:i,color:k(i,n.color),icon:a,clickable:o,"aria-current":r===d?n[`aria-current`]??`step`:n[`aria-current`],onClick:(e,t)=>{n.disabled||(n.onClick&&typeof t==`number`&&n.onClick(e,t),_&&typeof t==`number`&&t!==d&&_(t))}});h(()=>u(e,c,f))}),c})}):o,S=`steps`;return b&&(S+=` steps-${b}`),F(y,{...v,className:T(S,a)},x)},{Step:I,Icon:({as:e=`span`,className:t,children:n,...r})=>F(e,{...r,className:D(`step-icon`,t)},n)}),R=n=>s(r=>{let i=p(`div`,r);f(i,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let c=p(`table`,i);e(i,c),f(c,`table table-zebra`);let d=p(`thead`,c);e(c,d);let m=p(`tr`,d);e(d,m);let _=p(`th`,m);e(m,_),e(_,o(`属性`));let v=p(`th`,m);e(m,v),e(v,o(`说明`));let y=p(`th`,m);e(m,y),e(y,o(`类型`));let x=p(`th`,m);e(m,x),e(x,o(`默认值`));let S=p(`tbody`,c);e(c,S);let C=g(`rue:list:start`),w=g(`rue:list:end`);e(S,C),e(S,w);let T=new Map;return t(()=>{T=b({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,r,i,o,c)=>{u(s(()=>{let r=l(),i=p(`tr`,r);e(r,i),t(()=>{a(i,`key`,String(n.prop))});let o=p(`td`,i);e(i,o);let s=p(`code`,o);e(o,s);let c=g(`rue:slot:anchor`);e(s,c),t(()=>{let e=n.prop;h(()=>u(e,s,c))});let d=p(`td`,i);e(i,d);let f=g(`rue:slot:anchor`);e(d,f),t(()=>{let e=n.description;h(()=>u(e,d,f))});let m=p(`td`,i);e(i,m);let _=p(`code`,m);e(m,_);let v=g(`rue:slot:anchor`);e(_,v),t(()=>{let e=n.type;h(()=>u(e,_,v))});let y=p(`td`,i);e(i,y);let b=p(`code`,y);e(y,b);let x=g(`rue:slot:anchor`);return e(b,x),t(()=>{let e=n.defaultValue;h(()=>u(e,b,x))}),r}),r,i)}})}),i}),z=()=>s(t=>{let n=p(`svg`,t);a(n,`xmlns`,`http://www.w3.org/2000/svg`),a(n,`viewBox`,`0 0 24 24`),a(n,`fill`,`none`),a(n,`stroke`,`currentColor`),a(n,`strokeWidth`,`2`),f(n,`size-[1.05em]`);let r=p(`path`,n);e(n,r),a(r,`strokeLinecap`,`round`),a(r,`strokeLinejoin`,`round`),a(r,`d`,`M6 20a6 6 0 0 1 12 0`);let i=p(`circle`,n);return e(n,i),a(i,`cx`,`12`),a(i,`cy`,`9`),a(i,`r`,`4`),n}),B=()=>s(t=>{let n=p(`svg`,t);a(n,`xmlns`,`http://www.w3.org/2000/svg`),a(n,`viewBox`,`0 0 24 24`),a(n,`fill`,`none`),a(n,`stroke`,`currentColor`),a(n,`strokeWidth`,`2`),f(n,`size-[1.05em]`);let r=p(`path`,n);e(n,r),a(r,`strokeLinecap`,`round`),a(r,`strokeLinejoin`,`round`),a(r,`d`,`m12 3 1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3Z`);let i=p(`path`,n);return e(n,i),a(i,`strokeLinecap`,`round`),a(i,`strokeLinejoin`,`round`),a(i,`d`,`M5 18h.01M19 18h.01M12 21h.01`),n}),ee=()=>s(t=>{let n=p(`svg`,t);a(n,`xmlns`,`http://www.w3.org/2000/svg`),a(n,`viewBox`,`0 0 24 24`),a(n,`fill`,`none`),a(n,`stroke`,`currentColor`),a(n,`strokeWidth`,`2`),f(n,`size-[1.05em]`);let r=p(`rect`,n);e(n,r),a(r,`x`,`3`),a(r,`y`,`5`),a(r,`width`,`18`),a(r,`height`,`14`),a(r,`rx`,`2`);let i=p(`path`,n);return e(n,i),a(i,`strokeLinecap`,`round`),a(i,`strokeLinejoin`,`round`),a(i,`d`,`M3 10h18`),n}),te=()=>s(t=>{let n=p(`svg`,t);a(n,`xmlns`,`http://www.w3.org/2000/svg`),a(n,`viewBox`,`0 0 24 24`),a(n,`fill`,`none`),a(n,`stroke`,`currentColor`),a(n,`strokeWidth`,`2`),f(n,`size-[1.05em]`);let r=p(`circle`,n);e(n,r),a(r,`cx`,`12`),a(r,`cy`,`12`),a(r,`r`,`9`);let i=p(`path`,n);e(n,i),a(i,`strokeLinecap`,`round`),a(i,`strokeLinejoin`,`round`),a(i,`d`,`M8 14s1.5 2 4 2 4-2 4-2`);let o=p(`path`,n);return e(n,o),a(o,`strokeLinecap`,`round`),a(o,`strokeLinejoin`,`round`),a(o,`d`,`M9 10h.01M15 10h.01`),n}),ne=()=>s(t=>{let n=p(`div`,t);f(n,`grid gap-5`);let r=p(`div`,n);e(n,r),f(r,`space-y-2`);let i=p(`div`,r);e(r,i),f(i,`text-sm font-medium`),e(i,o(`长标签交付流程`));let c=p(`div`,r);e(r,c),f(c,`max-w-xl overflow-x-auto pb-2`),a(c,`data-testid`,`steps-scroll-wrapper`);let d=g(`rue:component:anchor`);e(c,d),u(m(L,{className:`min-w-[1120px]`,children:s(()=>{let t=l(),n=g(`rue:component:anchor`);e(t,n),u(m(L.Step,{color:`primary`,children:`需求确认`}),t,n);let r=g(`rue:component:anchor`);e(t,r),u(m(L.Step,{color:`primary`,children:`设计评审与资源排期`}),t,r);let i=g(`rue:component:anchor`);e(t,i),u(m(L.Step,{color:`primary`,children:`前后端联调验收`}),t,i);let a=g(`rue:component:anchor`);e(t,a),u(m(L.Step,{color:`secondary`,children:`灰度发布到内部环境`}),t,a);let o=g(`rue:component:anchor`);e(t,o),u(m(L.Step,{color:`secondary`,children:`邀请试点客户体验`}),t,o);let s=g(`rue:component:anchor`);e(t,s),u(m(L.Step,{color:`accent`,children:`收集反馈并修复阻塞问题`}),t,s);let c=g(`rue:component:anchor`);e(t,c),u(m(L.Step,{color:`accent`,children:`准备正式发布说明`}),t,c);let d=g(`rue:component:anchor`);e(t,d),u(m(L.Step,{color:`warning`,children:`上线窗口审批`}),t,d);let f=g(`rue:component:anchor`);e(t,f),u(m(L.Step,{color:`warning`,children:`生产环境发布`}),t,f);let p=g(`rue:component:anchor`);e(t,p),u(m(L.Step,{color:`success`,children:`发布后巡检`}),t,p);let h=g(`rue:component:anchor`);return e(t,h),u(m(L.Step,{color:`neutral`,children:`归档复盘`}),t,h),t})}),c,d);let h=p(`div`,n);e(n,h),f(h,`space-y-2`);let _=p(`div`,h);e(h,_),f(_,`text-sm font-medium`),e(_,o(`编号里程碑`));let v=p(`div`,h);e(h,v),f(v,`max-w-md overflow-x-auto pb-2`);let y=g(`rue:component:anchor`);return e(v,y),u(m(L,{className:`min-w-[960px]`,children:s(()=>{let t=l(),n=g(`rue:component:anchor`);e(t,n),u(m(L.Step,{color:`neutral`,children:`Start`}),t,n);let r=g(`rue:component:anchor`);e(t,r),u(m(L.Step,{color:`secondary`,children:`02`}),t,r);let i=g(`rue:component:anchor`);e(t,i),u(m(L.Step,{color:`secondary`,children:`03`}),t,i);let a=g(`rue:component:anchor`);e(t,a),u(m(L.Step,{color:`secondary`,children:`04`}),t,a);let o=g(`rue:component:anchor`);e(t,o),u(m(L.Step,{children:`05`}),t,o);let s=g(`rue:component:anchor`);e(t,s),u(m(L.Step,{color:`accent`,children:`06`}),t,s);let c=g(`rue:component:anchor`);e(t,c),u(m(L.Step,{color:`accent`,children:`07`}),t,c);let d=g(`rue:component:anchor`);e(t,d),u(m(L.Step,{children:`08`}),t,d);let f=g(`rue:component:anchor`);e(t,f),u(m(L.Step,{color:`info`,children:`09`}),t,f);let p=g(`rue:component:anchor`);e(t,p),u(m(L.Step,{color:`info`,children:`10`}),t,p);let h=g(`rue:component:anchor`);e(t,h),u(m(L.Step,{color:`error`,children:`11`}),t,h);let _=g(`rue:component:anchor`);e(t,_),u(m(L.Step,{color:`warning`,children:`12`}),t,_);let v=g(`rue:component:anchor`);return e(t,v),u(m(L.Step,{color:`neutral`,children:`End`}),t,v),t})}),v,y),n}),re=()=>{let{current:a}=y(`useSetup:0:0`,()=>d(()=>({current:y(`ref:1:0`,()=>n(0))})));return s(n=>{let s=p(`div`,n);f(s,`card bg-base-100 shadow-sm`);let c=p(`div`,s);e(s,c),f(c,`card-body gap-4`);let l=g(`rue:component:anchor`);e(c,l),t(()=>{let e=m(L,{current:a.value,onChange:e=>a.value=e,items:[{title:`Draft`,description:`Prepare the release scope and changelog.`,clickable:!0},{title:`Review`,description:`QA and product approve the rollout plan.`,clickable:!0},{title:`Deploy`,description:`Promote the release to production.`,clickable:!0}]});h(()=>u(e,c,l))});let d=p(`div`,c);e(c,d),f(d,`rounded-box border border-dashed border-base-300 bg-base-200/50 px-4 py-3 text-sm`),e(d,o(`点击步骤可切换，当前选中步骤：`));let _=p(`code`,d);e(d,_);let v=r(_);return e(_,v),t(()=>{i(v,a.value)}),s})},ie=[{prop:`direction / orientation`,description:`设置整体朝向；支持使用 Rue 基础的 direction 写法，也支持更通用的 orientation 别名。`,type:`'horizontal' | 'vertical'`,defaultValue:`-`},{prop:`items`,description:`数据驱动模式，适合与 current、status、onChange 一起使用。`,type:`StepItem[]`,defaultValue:`-`},{prop:`current`,description:`当前进行中的步骤索引；前面的步骤自动推导为完成态，后面的步骤自动推导为等待态。`,type:`number`,defaultValue:`-`},{prop:`status`,description:`当前步骤的全局状态覆盖，仅作用于 current 命中的步骤。`,type:`'wait' | 'process' | 'finish' | 'error'`,defaultValue:`'process'`},{prop:`progressDot`,description:`切换为进度点模式，也支持自定义 dot 渲染函数。`,type:`boolean | (dot, info) => any`,defaultValue:`false`},{prop:`onChange`,description:`搭配 items 使用时启用点击切换，回传目标步骤索引。`,type:`(current: number) => void`,defaultValue:`-`}],ae=[{prop:`color`,description:`直接指定 Rue 语义色；未指定时会根据 status 自动映射。`,type:`'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'`,defaultValue:`按 status 推导`},{prop:`title`,description:`步骤主标题；在 children 写法中可与 description、subTitle、icon 组合为语义化内容区。`,type:`any`,defaultValue:`-`},{prop:`description / content`,description:`标题下方的补充说明文字；content 优先级高于 description。`,type:`any`,defaultValue:`-`},{prop:`subTitle`,description:`标题旁边的次级信息，适合展示倒计时、状态文案等。`,type:`any`,defaultValue:`-`},{prop:`icon`,description:`自定义步骤图标；支持基础的 <Steps.Icon /> 插槽写法。`,type:`any`,defaultValue:`-`},{prop:`status`,description:`单步状态，可覆盖根组件根据 current 推导的结果。`,type:`'wait' | 'process' | 'finish' | 'error'`,defaultValue:`-`},{prop:`dataContent / data-content`,description:`直接控制 daisyUI step 圆点中的字符，适合问号、勾号或自定义符号。`,type:`string`,defaultValue:`-`},{prop:`clickable / disabled`,description:`控制单步是否可交互，以及是否禁用点击切换。`,type:`boolean`,defaultValue:`false`}],V=()=>{let{tabs:a}=y(`useSetup:0:0:dup1`,()=>d(()=>({tabs:{horizontal:y(`ref:1:1`,()=>n(`preview`)),vertical:y(`ref:1:2`,()=>n(`preview`)),responsive:y(`ref:1:3`,()=>n(`preview`)),icons:y(`ref:1:4`,()=>n(`preview`)),dataContent:y(`ref:1:5`,()=>n(`preview`)),colors:y(`ref:1:6`,()=>n(`preview`)),scrollable:y(`ref:1:7`,()=>n(`preview`)),richStep:y(`ref:1:8`,()=>n(`preview`)),items:y(`ref:1:9`,()=>n(`preview`)),clickable:y(`ref:1:10`,()=>n(`preview`)),progressDot:y(`ref:1:11`,()=>n(`preview`))}})));return s(n=>{let c=l(),d=g(`rue:component:anchor`);return e(c,d),u(m(C,{children:s(()=>{let n=l(),s=p(`div`,n);e(n,s),f(s,`max-w-none prose prose-sm md:prose-base`);let c=p(`h1`,s);e(s,c),e(c,o(`Steps 步骤条`));let d=p(`p`,s);e(s,d),f(d,`text-sm mt-3 mb-3`),e(d,o(`Rue Steps 展示 daisyUI 的轻量视觉风格，同时补充更贴近成熟业务组件的数据驱动 API： 支持`));let _=r(d);e(d,_),i(_,` `);let v=p(`code`,d);e(d,v),e(v,o(`items`)),e(d,o(`、`));let y=p(`code`,d);e(d,y),e(y,o(`current`)),e(d,o(`、`));let b=p(`code`,d);e(d,b),e(b,o(`status`)),e(d,o(`、`));let C=p(`code`,d);e(d,C),e(C,o(`progressDot`)),e(d,o(`、`));let T=p(`code`,d);e(d,T),e(T,o(`onChange`)),e(d,o(`，以及单步级别的`));let E=p(`code`,d);e(d,E),e(E,o(`title`)),e(d,o(`、`));let D=p(`code`,d);e(d,D),e(D,o(`description`)),e(d,o(`、`));let O=p(`code`,d);e(d,O),e(O,o(`subTitle`)),e(d,o(`和`));let k=p(`code`,d);e(d,k),e(k,o(`icon`)),e(d,o(`。`));let A=p(`div`,s);e(s,A),f(A,`not-prose mt-6 grid gap-4 md:grid-cols-3`);let j=p(`div`,A);e(A,j),f(j,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let M=p(`div`,j);e(j,M),f(M,`text-xs font-semibold uppercase tracking-wide text-primary`),e(M,o(`双模式`));let N=p(`div`,j);e(j,N),f(N,`mt-2 text-sm font-medium`),e(N,o(`children / items 都可用`));let P=p(`p`,j);e(j,P),f(P,`mt-2 text-sm opacity-70`),e(P,o(`基础的`));let F=p(`code`,P);e(P,F),e(F,o(`Steps.Step`)),e(P,o(`和`));let I=p(`code`,P);e(P,I),e(I,o(`Steps.Icon`));let V=r(P);e(P,V),i(V,` `),e(P,o(`不变，新场景可直接传入数据数组。`));let H=p(`div`,A);e(A,H),f(H,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let U=p(`div`,H);e(H,U),f(U,`text-xs font-semibold uppercase tracking-wide text-secondary`),e(U,o(`状态推导`));let W=p(`div`,H);e(H,W),f(W,`mt-2 text-sm font-medium`),e(W,o(`current 自动推导完成/进行中/等待`));let G=p(`p`,H);e(H,G),f(G,`mt-2 text-sm opacity-70`),e(G,o(`不必手动给每一步都写颜色，只有例外项再单独覆盖即可。`));let K=p(`div`,A);e(A,K),f(K,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let q=p(`div`,K);e(K,q),f(q,`text-xs font-semibold uppercase tracking-wide text-accent`),e(q,o(`内容增强`));let J=p(`div`,K);e(K,J),f(J,`mt-2 text-sm font-medium`),e(J,o(`支持标题、副标题、描述和进度点`));let Y=p(`p`,K);e(K,Y),f(Y,`mt-2 text-sm opacity-70`),e(Y,o(`适合把基础只能写一行文本的步骤条，扩展成更完整的流程说明区。`));let X=p(`h2`,s);e(s,X),e(X,o(`基础布局`));let Z=p(`p`,s);e(s,Z),e(Z,o(`这组示例使用 Rue 基础示例，用来展示最基础的横向、纵向和响应式排列方式。`));let oe=g(`rue:component:anchor`);e(s,oe),t(()=>{let e=m(w,{title:`Horizontal`,tab:a.horizontal,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(L,{"data-testid":`steps-horizontal`,children:[S(L.Step,{color:`primary`,children:`Register`}),S(L.Step,{color:`primary`,children:`Choose plan`}),S(L.Step,{children:`Purchase`}),S(L.Step,{children:`Receive Product`})]})})}),code:`<Steps>
  <Steps.Step color="primary">Register</Steps.Step>
  <Steps.Step color="primary">Choose plan</Steps.Step>
  <Steps.Step>Purchase</Steps.Step>
  <Steps.Step>Receive Product</Steps.Step>
</Steps>`});h(()=>u(e,s,oe))});let se=g(`rue:component:anchor`);e(s,se),t(()=>{let e=m(w,{title:`Vertical`,tab:a.vertical,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(L,{direction:`vertical`,children:[S(L.Step,{color:`primary`,children:`Register`}),S(L.Step,{color:`primary`,children:`Choose plan`}),S(L.Step,{children:`Purchase`}),S(L.Step,{children:`Receive Product`})]})})}),code:`<Steps direction="vertical">
  <Steps.Step color="primary">Register</Steps.Step>
  <Steps.Step color="primary">Choose plan</Steps.Step>
  <Steps.Step>Purchase</Steps.Step>
  <Steps.Step>Receive Product</Steps.Step>
</Steps>`});h(()=>u(e,s,se))});let ce=g(`rue:component:anchor`);e(s,ce),t(()=>{let e=m(w,{title:`Responsive`,tab:a.responsive,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(L,{direction:`vertical`,className:`lg:steps-horizontal`,children:[S(L.Step,{color:`primary`,children:`Register`}),S(L.Step,{color:`primary`,children:`Choose plan`}),S(L.Step,{children:`Purchase`}),S(L.Step,{children:`Receive Product`})]})})}),code:`<Steps direction="vertical" className="lg:steps-horizontal">
  <Steps.Step color="primary">Register</Steps.Step>
  <Steps.Step color="primary">Choose plan</Steps.Step>
  <Steps.Step>Purchase</Steps.Step>
  <Steps.Step>Receive Product</Steps.Step>
</Steps>`});h(()=>u(e,s,ce))});let le=p(`h2`,s);e(s,le),e(le,o(`视觉定制`));let Q=p(`p`,s);e(s,Q),e(Q,o(`这组示例展示当前 Rue 的静态能力，包括自定义 icon、data-content、语义色和滚动容器。`));let ue=g(`rue:component:anchor`);e(s,ue),t(()=>{let e=m(w,{title:`With custom content in step-icon`,tab:a.icons,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(L,{"data-testid":`steps-icons`,children:[x(L.Step,{color:`neutral`,children:[S(L.Icon,{children:`1`}),`Step 1`]}),x(L.Step,{color:`neutral`,children:[S(L.Icon,{children:`2`}),`Step 2`]}),x(L.Step,{children:[S(L.Icon,{children:`3`}),`Step 3`]})]})})}),code:`<Steps>
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
</Steps>`});h(()=>u(e,s,ue))});let de=g(`rue:component:anchor`);e(s,de),t(()=>{let e=m(w,{title:`With data-content`,tab:a.dataContent,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(L,{children:[S(L.Step,{color:`neutral`,"data-content":`?`,children:`Step 1`}),S(L.Step,{color:`neutral`,"data-content":`!`,children:`Step 2`}),S(L.Step,{color:`neutral`,"data-content":`✓`,children:`Step 3`}),S(L.Step,{color:`neutral`,"data-content":`✕`,children:`Step 4`}),S(L.Step,{color:`neutral`,"data-content":`★`,children:`Step 5`})]})})}),code:`<Steps>
  <Steps.Step color="neutral" data-content="?">Step 1</Steps.Step>
  <Steps.Step color="neutral" data-content="!">Step 2</Steps.Step>
  <Steps.Step color="neutral" data-content="✓">Step 3</Steps.Step>
  <Steps.Step color="neutral" data-content="✕">Step 4</Steps.Step>
  <Steps.Step color="neutral" data-content="★">Step 5</Steps.Step>
</Steps>`});h(()=>u(e,s,de))});let fe=g(`rue:component:anchor`);e(s,fe),t(()=>{let e=m(w,{title:`Custom colors`,tab:a.colors,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(L,{children:[S(L.Step,{color:`info`,children:`Fly to moon`}),S(L.Step,{color:`info`,children:`Shrink the moon`}),S(L.Step,{color:`info`,children:`Grab the moon`}),S(L.Step,{color:`error`,"data-content":`?`,children:`Sit on toilet`})]})})}),code:`<Steps>
  <Steps.Step color="info">Fly to moon</Steps.Step>
  <Steps.Step color="info">Shrink the moon</Steps.Step>
  <Steps.Step color="info">Grab the moon</Steps.Step>
  <Steps.Step color="error" data-content="?">Sit on toilet</Steps.Step>
</Steps>`});h(()=>u(e,s,fe))});let pe=g(`rue:component:anchor`);e(s,pe),t(()=>{let e=m(w,{title:`With scrollable wrapper`,tab:a.scrollable,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:S(ne,{})})}),code:`<div className="grid gap-5">
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
</div>`});h(()=>u(e,s,pe))});let me=p(`h2`,s);e(s,me),e(me,o(`语义 API`));let he=p(`p`,s);e(s,he),e(he,o(`下面这些示例展示的是这些的语义层能力，目标是让 Rue Steps 在不丢失当前风格的前提下更接近常见业务组件的使用体验。`));let ge=g(`rue:component:anchor`);e(s,ge),t(()=>{let e=m(w,{title:`Rich step content`,tab:a.richStep,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(L,{direction:`vertical`,children:[S(L.Step,{status:`finish`,title:`Connect repository`,description:`Link your GitHub repository and import the default build settings.`,icon:S(z,{})}),S(L.Step,{status:`process`,title:`Configure policies`,subTitle:`~ 2 mins`,description:`Set preview branches, branch protection, and deployment rules.`,icon:S(B,{})}),S(L.Step,{status:`wait`,title:`Ship to production`,description:`Merge the release branch after the final smoke test passes.`})]})})}),code:`<Steps direction="vertical">
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
</Steps>`});h(()=>u(e,s,ge))});let _e=g(`rue:component:anchor`);e(s,_e),t(()=>{let e=m(w,{title:`Items + current + status`,tab:a.items,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body gap-4`,children:[S(L,{current:1,status:`error`,items:[{title:`Account`,description:`Create workspace and invite collaborators.`,icon:S(z,{})},{title:`Verification`,subTitle:`Left 00:00:08`,description:`Waiting for security review and DNS validation.`,icon:S(B,{})},{title:`Payment`,description:`Unlock the production environment after confirmation.`,icon:S(ee,{})},{title:`Done`,description:`Your first deployment is ready.`,icon:S(te,{})}]}),x(`div`,{className:`text-sm opacity-70`,children:[`当前索引为 `,S(`code`,{children:`1`}),`，所以第 0 步自动完成，第 1 步继承根节点的`,` `,S(`code`,{children:`error`}),` 状态。`]})]})}),code:`<Steps
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
/>`});h(()=>u(e,s,_e))});let ve=g(`rue:component:anchor`);e(s,ve),t(()=>{let e=m(w,{title:`Clickable items`,tab:a.clickable,preview:S(re,{}),code:`const ClickableStepsDemo: FC = () => {
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
}`});h(()=>u(e,s,ve))});let ye=g(`rue:component:anchor`);e(s,ye),t(()=>{let e=m(w,{title:`Progress dot`,tab:a.progressDot,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:S(L,{progressDot:(e,t)=>S(`span`,{className:`tooltip tooltip-bottom`,"data-tip":`${t.title}`,children:e}),items:[{title:`Collect requirements`,description:`Align scope with design and engineering.`},{title:`BuildDemo`,description:`Create a stakeholder-ready flow.`},{title:`Launch beta`,description:`Open access to pilot users.`}]})})}),code:`<Steps
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
/>`});h(()=>u(e,s,ye))});let be=p(`h2`,s);e(s,be),e(be,o(`API`));let $=p(`p`,s);e(s,$);let xe=p(`code`,$);e($,xe),e(xe,o(`Steps`)),e($,o(`负责布局、状态推导与点击切换；`));let Se=p(`code`,$);e($,Se),e(Se,o(`Steps.Step`)),e($,o(`和`));let Ce=r($);e($,Ce),i(Ce,` `);let we=p(`code`,$);e($,we),e(we,o(`StepItem`)),e($,o(`共享同一组单步属性。`));let Te=p(`h3`,s);e(s,Te),e(Te,o(`Steps`));let Ee=g(`rue:component:anchor`);e(s,Ee),t(()=>{let e=m(R,{rows:ie});h(()=>u(e,s,Ee))});let De=p(`h3`,s);e(s,De),e(De,o(`Steps.Step / StepItem`));let Oe=g(`rue:component:anchor`);return e(s,Oe),t(()=>{let e=m(R,{rows:ae});h(()=>u(e,s,Oe))}),n})}),c,d),c})};export{V as default};