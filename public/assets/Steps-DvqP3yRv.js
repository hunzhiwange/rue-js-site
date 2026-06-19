import{$ as e,Q as t,Qt as n,Wt as r,X as i,Yt as a,b as o,et as s,ht as c,l,lt as u,nt as d,o as f,p,st as m,t as h,tt as g,vt as _,zt as v}from"./vapor-runtime-CXIalONM.js";import{a as y,n as b}from"./vapor-helpers-vapor-CoXKrGmY.js";import{a as x,i as S}from"./persistentSidebarPlayground-DBDp2zjv.js";import{r as C}from"./SidebarPlaygroundDesign-CsC_YS7V.js";import{t as w}from"./PreviewBlock-RQJhyX9w.js";var T=(...e)=>e.filter(Boolean).join(` `),E=e=>Array.isArray(e)?e.flatMap(e=>E(e)):e==null||typeof e==`boolean`?[]:[e],D=(e,t)=>t?`${e} ${t}`:e,O=(e,t)=>t??e,k=(e,t)=>{if(t)return t;if(e===`error`)return`error`;if(e===`finish`||e===`process`)return`primary`},A=(e,t)=>{if(!t){if(e===`finish`)return`✓`;if(e===`error`)return`✕`}},j=e=>{typeof e.preventDefault==`function`&&e.preventDefault(),typeof e.stopPropagation==`function`&&e.stopPropagation()},M=e=>{let{cls:t}=y(`useSetup:0:0`,()=>a(()=>({cls:y(`computed:1:0`,()=>_(()=>e.status===`wait`?`inline-block size-2.5 rounded-full border border-base-300 bg-base-100`:`inline-block size-2.5 rounded-full bg-current`))})));return l(e=>{let r=s(`span`,e);return n(()=>{u(r,t.get())}),r})},N=(e,t)=>{if(!e)return;let n=S(M,{status:t.status});return typeof e==`function`?e(n,t):n},P=(e,t,n,r)=>e.status?e.status:typeof n==`number`?t<n?`finish`:t===n?r??`process`:`wait`:`wait`,F=(e,t,n)=>{let{nextChildren:r}=y(`useSetup:0:0:dup1`,()=>a(()=>({nextChildren:y(`computed:1:1`,()=>_(()=>E(n)))})));return o(e,t,...r.get())},I=({as:e=`li`,color:t,className:n,title:r,description:i,content:a,subTitle:o,icon:s,status:c,disabled:l,clickable:u,dataContent:d,children:f,index:m,onClick:h,onKeyDown:g,..._})=>{let v=e,y=a??i,b=r??f,C=u??!!h,w=k(c,t),T=d??_[`data-content`]??A(c,s!=null),E=r!=null||y!=null||o!=null||s!=null,O=_[`aria-current`]??(c===`process`?`step`:void 0),M=l?`true`:void 0,N=`step`;w&&(N+=` step-${w}`),C&&!l&&(N+=` cursor-pointer`),l&&(N+=` opacity-50`),C&&l&&(N+=` cursor-not-allowed`);let P=e=>{if(l){j(e);return}h&&h(e,m)},I=C?_.role??`button`:_.role,L=C?_.tabIndex??(l?-1:0):_.tabIndex,R=C?e=>{if(g&&g(e),e.defaultPrevented||l){l&&j(e);return}(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),P(e))}:_.onKeyDown,z=C?P:_.onClick,B=E?x(p,{children:[s==null?null:S(`span`,{className:D(`step-icon`,y==null?void 0:`mt-0.5`),"aria-hidden":`true`,children:s}),x(`span`,{className:`inline-flex min-w-0 flex-col gap-1 py-1 text-start`,children:[b!=null||o!=null?x(`span`,{className:`flex flex-wrap items-center gap-2 leading-tight`,children:[b==null?null:S(`span`,{className:`font-medium`,children:b}),o==null?null:S(`span`,{className:`text-xs opacity-60`,children:o})]}):null,y==null?null:S(`span`,{className:`text-xs leading-snug opacity-70`,children:y})]})]}):f;return F(v,{..._,className:D(N,n),...T==null?{}:{"data-content":T},role:I,tabIndex:L,onClick:z,onKeyDown:R,"aria-current":O,"aria-disabled":M},B)},L=Object.assign(({as:a=`ul`,direction:o,orientation:s,className:c,children:u,items:d,current:p,status:m,progressDot:g,onChange:_,...v})=>{let y=a,b=O(o,s),x=d&&d.length>0?d.map((a,o)=>{let s=P(a,o,p,m),c=a.icon??N(g,{index:o,status:s,title:a.title,description:a.description,content:a.content}),u=a.clickable??(!!_||!!a.onClick);return l(l=>{let d=e(),m=t(`rue:component:anchor`);return i(d,m),n(()=>{let e=h(I,{key:a.key??o,...a,index:o,status:s,color:k(s,a.color),icon:c,clickable:u,"aria-current":o===p?a[`aria-current`]??`step`:a[`aria-current`],onClick:(e,t)=>{a.disabled||(a.onClick&&typeof t==`number`&&a.onClick(e,t),_&&typeof t==`number`&&t!==p&&_(t))}});r(()=>f(e,d,m))}),d})}):u,S=`steps`;return b&&(S+=` steps-${b}`),F(y,{...v,className:T(S,c)},x)},{Step:I,Icon:({as:e=`span`,className:t,children:n,...r})=>F(e,{...r,className:D(`step-icon`,t)},n)}),R=a=>l(o=>{let c=s(`div`,o);u(c,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let d=s(`table`,c);i(c,d),u(d,`table table-zebra`);let p=s(`thead`,d);i(d,p);let h=s(`tr`,p);i(p,h);let _=s(`th`,h);i(h,_),i(_,g(`属性`));let v=s(`th`,h);i(h,v),i(v,g(`说明`));let y=s(`th`,h);i(h,y),i(y,g(`类型`));let x=s(`th`,h);i(h,x),i(x,g(`默认值`));let S=s(`tbody`,d);i(d,S);let C=t(`rue:list:start`),w=t(`rue:list:end`);i(S,C),i(S,w);let T=new Map;return n(()=>{T=b({items:a.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(a,o,c,u,d)=>{f(l(()=>{let o=e(),c=s(`tr`,o);i(o,c),n(()=>{m(c,`key`,String(a.prop))});let l=s(`td`,c);i(c,l);let u=s(`code`,l);i(l,u);let d=t(`rue:slot:anchor`);i(u,d),n(()=>{let e=a.prop;r(()=>f(e,u,d))});let p=s(`td`,c);i(c,p);let h=t(`rue:slot:anchor`);i(p,h),n(()=>{let e=a.description;r(()=>f(e,p,h))});let g=s(`td`,c);i(c,g);let _=s(`code`,g);i(g,_);let v=t(`rue:slot:anchor`);i(_,v),n(()=>{let e=a.type;r(()=>f(e,_,v))});let y=s(`td`,c);i(c,y);let b=s(`code`,y);i(y,b);let x=t(`rue:slot:anchor`);return i(b,x),n(()=>{let e=a.defaultValue;r(()=>f(e,b,x))}),o}),o,c)}})}),c}),z=()=>l(e=>{let t=s(`svg`,e);m(t,`xmlns`,`http://www.w3.org/2000/svg`),m(t,`viewBox`,`0 0 24 24`),m(t,`fill`,`none`),m(t,`stroke`,`currentColor`),m(t,`strokeWidth`,`2`),u(t,`size-[1.05em]`);let n=s(`path`,t);i(t,n),m(n,`strokeLinecap`,`round`),m(n,`strokeLinejoin`,`round`),m(n,`d`,`M6 20a6 6 0 0 1 12 0`);let r=s(`circle`,t);return i(t,r),m(r,`cx`,`12`),m(r,`cy`,`9`),m(r,`r`,`4`),t}),B=()=>l(e=>{let t=s(`svg`,e);m(t,`xmlns`,`http://www.w3.org/2000/svg`),m(t,`viewBox`,`0 0 24 24`),m(t,`fill`,`none`),m(t,`stroke`,`currentColor`),m(t,`strokeWidth`,`2`),u(t,`size-[1.05em]`);let n=s(`path`,t);i(t,n),m(n,`strokeLinecap`,`round`),m(n,`strokeLinejoin`,`round`),m(n,`d`,`m12 3 1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3Z`);let r=s(`path`,t);return i(t,r),m(r,`strokeLinecap`,`round`),m(r,`strokeLinejoin`,`round`),m(r,`d`,`M5 18h.01M19 18h.01M12 21h.01`),t}),ee=()=>l(e=>{let t=s(`svg`,e);m(t,`xmlns`,`http://www.w3.org/2000/svg`),m(t,`viewBox`,`0 0 24 24`),m(t,`fill`,`none`),m(t,`stroke`,`currentColor`),m(t,`strokeWidth`,`2`),u(t,`size-[1.05em]`);let n=s(`rect`,t);i(t,n),m(n,`x`,`3`),m(n,`y`,`5`),m(n,`width`,`18`),m(n,`height`,`14`),m(n,`rx`,`2`);let r=s(`path`,t);return i(t,r),m(r,`strokeLinecap`,`round`),m(r,`strokeLinejoin`,`round`),m(r,`d`,`M3 10h18`),t}),te=()=>l(e=>{let t=s(`svg`,e);m(t,`xmlns`,`http://www.w3.org/2000/svg`),m(t,`viewBox`,`0 0 24 24`),m(t,`fill`,`none`),m(t,`stroke`,`currentColor`),m(t,`strokeWidth`,`2`),u(t,`size-[1.05em]`);let n=s(`circle`,t);i(t,n),m(n,`cx`,`12`),m(n,`cy`,`12`),m(n,`r`,`9`);let r=s(`path`,t);i(t,r),m(r,`strokeLinecap`,`round`),m(r,`strokeLinejoin`,`round`),m(r,`d`,`M8 14s1.5 2 4 2 4-2 4-2`);let a=s(`path`,t);return i(t,a),m(a,`strokeLinecap`,`round`),m(a,`strokeLinejoin`,`round`),m(a,`d`,`M9 10h.01M15 10h.01`),t}),ne=()=>l(n=>{let r=s(`div`,n);u(r,`grid gap-5`);let a=s(`div`,r);i(r,a),u(a,`space-y-2`);let o=s(`div`,a);i(a,o),u(o,`text-sm font-medium`),i(o,g(`长标签交付流程`));let c=s(`div`,a);i(a,c),u(c,`max-w-xl overflow-x-auto pb-2`),m(c,`data-testid`,`steps-scroll-wrapper`);let d=t(`rue:component:anchor`);i(c,d),f(h(L,{className:`min-w-[1120px]`,children:l(()=>{let n=e(),r=t(`rue:component:anchor`);i(n,r),f(h(L.Step,{color:`primary`,children:`需求确认`}),n,r);let a=t(`rue:component:anchor`);i(n,a),f(h(L.Step,{color:`primary`,children:`设计评审与资源排期`}),n,a);let o=t(`rue:component:anchor`);i(n,o),f(h(L.Step,{color:`primary`,children:`前后端联调验收`}),n,o);let s=t(`rue:component:anchor`);i(n,s),f(h(L.Step,{color:`secondary`,children:`灰度发布到内部环境`}),n,s);let c=t(`rue:component:anchor`);i(n,c),f(h(L.Step,{color:`secondary`,children:`邀请试点客户体验`}),n,c);let l=t(`rue:component:anchor`);i(n,l),f(h(L.Step,{color:`accent`,children:`收集反馈并修复阻塞问题`}),n,l);let u=t(`rue:component:anchor`);i(n,u),f(h(L.Step,{color:`accent`,children:`准备正式发布说明`}),n,u);let d=t(`rue:component:anchor`);i(n,d),f(h(L.Step,{color:`warning`,children:`上线窗口审批`}),n,d);let p=t(`rue:component:anchor`);i(n,p),f(h(L.Step,{color:`warning`,children:`生产环境发布`}),n,p);let m=t(`rue:component:anchor`);i(n,m),f(h(L.Step,{color:`success`,children:`发布后巡检`}),n,m);let g=t(`rue:component:anchor`);return i(n,g),f(h(L.Step,{color:`neutral`,children:`归档复盘`}),n,g),n})}),c,d);let p=s(`div`,r);i(r,p),u(p,`space-y-2`);let _=s(`div`,p);i(p,_),u(_,`text-sm font-medium`),i(_,g(`编号里程碑`));let v=s(`div`,p);i(p,v),u(v,`max-w-md overflow-x-auto pb-2`);let y=t(`rue:component:anchor`);return i(v,y),f(h(L,{className:`min-w-[960px]`,children:l(()=>{let n=e(),r=t(`rue:component:anchor`);i(n,r),f(h(L.Step,{color:`neutral`,children:`Start`}),n,r);let a=t(`rue:component:anchor`);i(n,a),f(h(L.Step,{color:`secondary`,children:`02`}),n,a);let o=t(`rue:component:anchor`);i(n,o),f(h(L.Step,{color:`secondary`,children:`03`}),n,o);let s=t(`rue:component:anchor`);i(n,s),f(h(L.Step,{color:`secondary`,children:`04`}),n,s);let c=t(`rue:component:anchor`);i(n,c),f(h(L.Step,{children:`05`}),n,c);let l=t(`rue:component:anchor`);i(n,l),f(h(L.Step,{color:`accent`,children:`06`}),n,l);let u=t(`rue:component:anchor`);i(n,u),f(h(L.Step,{color:`accent`,children:`07`}),n,u);let d=t(`rue:component:anchor`);i(n,d),f(h(L.Step,{children:`08`}),n,d);let p=t(`rue:component:anchor`);i(n,p),f(h(L.Step,{color:`info`,children:`09`}),n,p);let m=t(`rue:component:anchor`);i(n,m),f(h(L.Step,{color:`info`,children:`10`}),n,m);let g=t(`rue:component:anchor`);i(n,g),f(h(L.Step,{color:`error`,children:`11`}),n,g);let _=t(`rue:component:anchor`);i(n,_),f(h(L.Step,{color:`warning`,children:`12`}),n,_);let v=t(`rue:component:anchor`);return i(n,v),f(h(L.Step,{color:`neutral`,children:`End`}),n,v),n})}),v,y),r}),re=()=>{let{current:e}=y(`useSetup:0:0`,()=>a(()=>({current:y(`ref:1:0`,()=>v(0))})));return l(a=>{let o=s(`div`,a);u(o,`card bg-base-100 shadow-sm`);let l=s(`div`,o);i(o,l),u(l,`card-body gap-4`);let p=t(`rue:component:anchor`);i(l,p),n(()=>{let t=h(L,{current:e.value,onChange:t=>e.value=t,items:[{title:`Draft`,description:`Prepare the release scope and changelog.`,clickable:!0},{title:`Review`,description:`QA and product approve the rollout plan.`,clickable:!0},{title:`Deploy`,description:`Promote the release to production.`,clickable:!0}]});r(()=>f(t,l,p))});let m=s(`div`,l);i(l,m),u(m,`rounded-box border border-dashed border-base-300 bg-base-200/50 px-4 py-3 text-sm`),i(m,g(`点击步骤可切换，当前选中步骤：`));let _=s(`code`,m);i(m,_);let v=d(_);return i(_,v),n(()=>{c(v,e.value)}),o})},ie=[{prop:`direction / orientation`,description:`设置整体朝向；支持沿用 Rue 旧的 direction 写法，也支持更通用的 orientation 别名。`,type:`'horizontal' | 'vertical'`,defaultValue:`-`},{prop:`items`,description:`数据驱动模式，适合与 current、status、onChange 一起使用。`,type:`StepItem[]`,defaultValue:`-`},{prop:`current`,description:`当前进行中的步骤索引；前面的步骤自动推导为完成态，后面的步骤自动推导为等待态。`,type:`number`,defaultValue:`-`},{prop:`status`,description:`当前步骤的全局状态覆盖，仅作用于 current 命中的步骤。`,type:`'wait' | 'process' | 'finish' | 'error'`,defaultValue:`'process'`},{prop:`progressDot`,description:`切换为进度点模式，也支持自定义 dot 渲染函数。`,type:`boolean | (dot, info) => any`,defaultValue:`false`},{prop:`onChange`,description:`搭配 items 使用时启用点击切换，回传目标步骤索引。`,type:`(current: number) => void`,defaultValue:`-`}],ae=[{prop:`color`,description:`直接指定 Rue 语义色；未指定时会根据 status 自动映射。`,type:`'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'`,defaultValue:`按 status 推导`},{prop:`title`,description:`步骤主标题；在 children 写法中可与 description、subTitle、icon 组合为语义化内容区。`,type:`any`,defaultValue:`-`},{prop:`description / content`,description:`标题下方的补充说明文字；content 优先级高于 description。`,type:`any`,defaultValue:`-`},{prop:`subTitle`,description:`标题旁边的次级信息，适合展示倒计时、状态文案等。`,type:`any`,defaultValue:`-`},{prop:`icon`,description:`自定义步骤图标；继续支持旧的 <Steps.Icon /> 插槽写法。`,type:`any`,defaultValue:`-`},{prop:`status`,description:`单步状态，可覆盖根组件根据 current 推导的结果。`,type:`'wait' | 'process' | 'finish' | 'error'`,defaultValue:`-`},{prop:`dataContent / data-content`,description:`直接控制 daisyUI step 圆点中的字符，适合问号、勾号或自定义符号。`,type:`string`,defaultValue:`-`},{prop:`clickable / disabled`,description:`控制单步是否可交互，以及是否禁用点击切换。`,type:`boolean`,defaultValue:`false`}],V=()=>{let{tabs:o}=y(`useSetup:0:0:dup1`,()=>a(()=>({tabs:{horizontal:y(`ref:1:1`,()=>v(`preview`)),vertical:y(`ref:1:2`,()=>v(`preview`)),responsive:y(`ref:1:3`,()=>v(`preview`)),icons:y(`ref:1:4`,()=>v(`preview`)),dataContent:y(`ref:1:5`,()=>v(`preview`)),colors:y(`ref:1:6`,()=>v(`preview`)),scrollable:y(`ref:1:7`,()=>v(`preview`)),richStep:y(`ref:1:8`,()=>v(`preview`)),items:y(`ref:1:9`,()=>v(`preview`)),clickable:y(`ref:1:10`,()=>v(`preview`)),progressDot:y(`ref:1:11`,()=>v(`preview`))}})));return l(a=>{let p=e(),m=t(`rue:component:anchor`);return i(p,m),f(h(C,{children:l(()=>{let a=e(),l=s(`div`,a);i(a,l),u(l,`max-w-none prose prose-sm md:prose-base`);let p=s(`h1`,l);i(l,p),i(p,g(`Steps 步骤条`));let m=s(`p`,l);i(l,m),u(m,`text-sm mt-3 mb-3`),i(m,g(`Rue Steps 继续保留 daisyUI 的轻量视觉风格，同时补齐更贴近成熟业务组件的数据驱动 API： 支持`));let _=d(m);i(m,_),c(_,` `);let v=s(`code`,m);i(m,v),i(v,g(`items`)),i(m,g(`、`));let y=s(`code`,m);i(m,y),i(y,g(`current`)),i(m,g(`、`));let b=s(`code`,m);i(m,b),i(b,g(`status`)),i(m,g(`、`));let C=s(`code`,m);i(m,C),i(C,g(`progressDot`)),i(m,g(`、`));let T=s(`code`,m);i(m,T),i(T,g(`onChange`)),i(m,g(`，以及单步级别的`));let E=s(`code`,m);i(m,E),i(E,g(`title`)),i(m,g(`、`));let D=s(`code`,m);i(m,D),i(D,g(`description`)),i(m,g(`、`));let O=s(`code`,m);i(m,O),i(O,g(`subTitle`)),i(m,g(`和`));let k=s(`code`,m);i(m,k),i(k,g(`icon`)),i(m,g(`。`));let A=s(`div`,l);i(l,A),u(A,`not-prose mt-6 grid gap-4 md:grid-cols-3`);let j=s(`div`,A);i(A,j),u(j,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let M=s(`div`,j);i(j,M),u(M,`text-xs font-semibold uppercase tracking-wide text-primary`),i(M,g(`双模式`));let N=s(`div`,j);i(j,N),u(N,`mt-2 text-sm font-medium`),i(N,g(`children / items 都可用`));let P=s(`p`,j);i(j,P),u(P,`mt-2 text-sm opacity-70`),i(P,g(`老的`));let F=s(`code`,P);i(P,F),i(F,g(`Steps.Step`)),i(P,g(`和`));let I=s(`code`,P);i(P,I),i(I,g(`Steps.Icon`));let V=d(P);i(P,V),c(V,` `),i(P,g(`不变，新场景可直接传入数据数组。`));let H=s(`div`,A);i(A,H),u(H,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let U=s(`div`,H);i(H,U),u(U,`text-xs font-semibold uppercase tracking-wide text-secondary`),i(U,g(`状态推导`));let W=s(`div`,H);i(H,W),u(W,`mt-2 text-sm font-medium`),i(W,g(`current 自动推导完成/进行中/等待`));let G=s(`p`,H);i(H,G),u(G,`mt-2 text-sm opacity-70`),i(G,g(`不必手动给每一步都写颜色，只有例外项再单独覆盖即可。`));let K=s(`div`,A);i(A,K),u(K,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let q=s(`div`,K);i(K,q),u(q,`text-xs font-semibold uppercase tracking-wide text-accent`),i(q,g(`内容增强`));let J=s(`div`,K);i(K,J),u(J,`mt-2 text-sm font-medium`),i(J,g(`支持标题、副标题、描述和进度点`));let Y=s(`p`,K);i(K,Y),u(Y,`mt-2 text-sm opacity-70`),i(Y,g(`适合把原本只能写一行文本的步骤条，扩展成更完整的流程说明区。`));let X=s(`h2`,l);i(l,X),i(X,g(`基础布局`));let Z=s(`p`,l);i(l,Z),i(Z,g(`这一组示例保留 Rue 原有 demo，用来展示最基础的横向、纵向和响应式排列方式。`));let oe=t(`rue:component:anchor`);i(l,oe),n(()=>{let e=h(w,{title:`Horizontal`,tab:o.horizontal,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(L,{"data-testid":`steps-horizontal`,children:[S(L.Step,{color:`primary`,children:`Register`}),S(L.Step,{color:`primary`,children:`Choose plan`}),S(L.Step,{children:`Purchase`}),S(L.Step,{children:`Receive Product`})]})})}),code:`<Steps>
  <Steps.Step color="primary">Register</Steps.Step>
  <Steps.Step color="primary">Choose plan</Steps.Step>
  <Steps.Step>Purchase</Steps.Step>
  <Steps.Step>Receive Product</Steps.Step>
</Steps>`});r(()=>f(e,l,oe))});let se=t(`rue:component:anchor`);i(l,se),n(()=>{let e=h(w,{title:`Vertical`,tab:o.vertical,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(L,{direction:`vertical`,children:[S(L.Step,{color:`primary`,children:`Register`}),S(L.Step,{color:`primary`,children:`Choose plan`}),S(L.Step,{children:`Purchase`}),S(L.Step,{children:`Receive Product`})]})})}),code:`<Steps direction="vertical">
  <Steps.Step color="primary">Register</Steps.Step>
  <Steps.Step color="primary">Choose plan</Steps.Step>
  <Steps.Step>Purchase</Steps.Step>
  <Steps.Step>Receive Product</Steps.Step>
</Steps>`});r(()=>f(e,l,se))});let ce=t(`rue:component:anchor`);i(l,ce),n(()=>{let e=h(w,{title:`Responsive`,tab:o.responsive,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(L,{direction:`vertical`,className:`lg:steps-horizontal`,children:[S(L.Step,{color:`primary`,children:`Register`}),S(L.Step,{color:`primary`,children:`Choose plan`}),S(L.Step,{children:`Purchase`}),S(L.Step,{children:`Receive Product`})]})})}),code:`<Steps direction="vertical" className="lg:steps-horizontal">
  <Steps.Step color="primary">Register</Steps.Step>
  <Steps.Step color="primary">Choose plan</Steps.Step>
  <Steps.Step>Purchase</Steps.Step>
  <Steps.Step>Receive Product</Steps.Step>
</Steps>`});r(()=>f(e,l,ce))});let le=s(`h2`,l);i(l,le),i(le,g(`视觉定制`));let Q=s(`p`,l);i(l,Q),i(Q,g(`这一组仍然保留当前 Rue 的静态能力，包括自定义 icon、data-content、语义色和滚动容器。`));let ue=t(`rue:component:anchor`);i(l,ue),n(()=>{let e=h(w,{title:`With custom content in step-icon`,tab:o.icons,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(L,{"data-testid":`steps-icons`,children:[x(L.Step,{color:`neutral`,children:[S(L.Icon,{children:`1`}),`Step 1`]}),x(L.Step,{color:`neutral`,children:[S(L.Icon,{children:`2`}),`Step 2`]}),x(L.Step,{children:[S(L.Icon,{children:`3`}),`Step 3`]})]})})}),code:`<Steps>
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
</Steps>`});r(()=>f(e,l,ue))});let de=t(`rue:component:anchor`);i(l,de),n(()=>{let e=h(w,{title:`With data-content`,tab:o.dataContent,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(L,{children:[S(L.Step,{color:`neutral`,"data-content":`?`,children:`Step 1`}),S(L.Step,{color:`neutral`,"data-content":`!`,children:`Step 2`}),S(L.Step,{color:`neutral`,"data-content":`✓`,children:`Step 3`}),S(L.Step,{color:`neutral`,"data-content":`✕`,children:`Step 4`}),S(L.Step,{color:`neutral`,"data-content":`★`,children:`Step 5`})]})})}),code:`<Steps>
  <Steps.Step color="neutral" data-content="?">Step 1</Steps.Step>
  <Steps.Step color="neutral" data-content="!">Step 2</Steps.Step>
  <Steps.Step color="neutral" data-content="✓">Step 3</Steps.Step>
  <Steps.Step color="neutral" data-content="✕">Step 4</Steps.Step>
  <Steps.Step color="neutral" data-content="★">Step 5</Steps.Step>
</Steps>`});r(()=>f(e,l,de))});let fe=t(`rue:component:anchor`);i(l,fe),n(()=>{let e=h(w,{title:`Custom colors`,tab:o.colors,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(L,{children:[S(L.Step,{color:`info`,children:`Fly to moon`}),S(L.Step,{color:`info`,children:`Shrink the moon`}),S(L.Step,{color:`info`,children:`Grab the moon`}),S(L.Step,{color:`error`,"data-content":`?`,children:`Sit on toilet`})]})})}),code:`<Steps>
  <Steps.Step color="info">Fly to moon</Steps.Step>
  <Steps.Step color="info">Shrink the moon</Steps.Step>
  <Steps.Step color="info">Grab the moon</Steps.Step>
  <Steps.Step color="error" data-content="?">Sit on toilet</Steps.Step>
</Steps>`});r(()=>f(e,l,fe))});let pe=t(`rue:component:anchor`);i(l,pe),n(()=>{let e=h(w,{title:`With scrollable wrapper`,tab:o.scrollable,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:S(ne,{})})}),code:`<div className="grid gap-5">
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
</div>`});r(()=>f(e,l,pe))});let me=s(`h2`,l);i(l,me),i(me,g(`增强 API`));let he=s(`p`,l);i(l,he),i(he,g(`下面这些示例展示的是本次补齐的语义层能力，目标是让 Rue Steps 在不丢失现有风格的前提下更接近常见业务组件的使用体验。`));let ge=t(`rue:component:anchor`);i(l,ge),n(()=>{let e=h(w,{title:`Rich step content`,tab:o.richStep,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(L,{direction:`vertical`,children:[S(L.Step,{status:`finish`,title:`Connect repository`,description:`Link your GitHub repository and import the default build settings.`,icon:S(z,{})}),S(L.Step,{status:`process`,title:`Configure policies`,subTitle:`~ 2 mins`,description:`Set preview branches, branch protection, and deployment rules.`,icon:S(B,{})}),S(L.Step,{status:`wait`,title:`Ship to production`,description:`Merge the release branch after the final smoke test passes.`})]})})}),code:`<Steps direction="vertical">
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
</Steps>`});r(()=>f(e,l,ge))});let _e=t(`rue:component:anchor`);i(l,_e),n(()=>{let e=h(w,{title:`Items + current + status`,tab:o.items,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body gap-4`,children:[S(L,{current:1,status:`error`,items:[{title:`Account`,description:`Create workspace and invite collaborators.`,icon:S(z,{})},{title:`Verification`,subTitle:`Left 00:00:08`,description:`Waiting for security review and DNS validation.`,icon:S(B,{})},{title:`Payment`,description:`Unlock the production environment after confirmation.`,icon:S(ee,{})},{title:`Done`,description:`Your first deployment is ready.`,icon:S(te,{})}]}),x(`div`,{className:`text-sm opacity-70`,children:[`当前索引为 `,S(`code`,{children:`1`}),`，所以第 0 步自动完成，第 1 步继承根节点的`,` `,S(`code`,{children:`error`}),` 状态。`]})]})}),code:`<Steps
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
/>`});r(()=>f(e,l,_e))});let ve=t(`rue:component:anchor`);i(l,ve),n(()=>{let e=h(w,{title:`Clickable items`,tab:o.clickable,preview:S(re,{}),code:`const ClickableStepsDemo: FC = () => {
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
}`});r(()=>f(e,l,ve))});let ye=t(`rue:component:anchor`);i(l,ye),n(()=>{let e=h(w,{title:`Progress dot`,tab:o.progressDot,preview:S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:S(L,{progressDot:(e,t)=>S(`span`,{className:`tooltip tooltip-bottom`,"data-tip":`${t.title}`,children:e}),items:[{title:`Collect requirements`,description:`Align scope with design and engineering.`},{title:`Build demo`,description:`Create a stakeholder-ready flow.`},{title:`Launch beta`,description:`Open access to pilot users.`}]})})}),code:`<Steps
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
/>`});r(()=>f(e,l,ye))});let be=s(`h2`,l);i(l,be),i(be,g(`API`));let $=s(`p`,l);i(l,$);let xe=s(`code`,$);i($,xe),i(xe,g(`Steps`)),i($,g(`负责布局、状态推导与点击切换；`));let Se=s(`code`,$);i($,Se),i(Se,g(`Steps.Step`)),i($,g(`和`));let Ce=d($);i($,Ce),c(Ce,` `);let we=s(`code`,$);i($,we),i(we,g(`StepItem`)),i($,g(`共享同一组单步属性。`));let Te=s(`h3`,l);i(l,Te),i(Te,g(`Steps`));let Ee=t(`rue:component:anchor`);i(l,Ee),n(()=>{let e=h(R,{rows:ie});r(()=>f(e,l,Ee))});let De=s(`h3`,l);i(l,De),i(De,g(`Steps.Step / StepItem`));let Oe=t(`rue:component:anchor`);return i(l,Oe),n(()=>{let e=h(R,{rows:ae});r(()=>f(e,l,Oe))}),a})}),p,m),p})};export{V as default};