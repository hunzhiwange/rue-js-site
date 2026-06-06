import{$ as e,Kt as t,Lt as n,Q as r,Vt as i,Y as a,Yt as o,Z as s,c,ct as l,et as u,l as d,m as f,ot as p,s as m,t as h}from"./vapor-runtime-DHPuOjqh.js";import{a as g,n as _}from"./vapor-helpers-vapor-CJFAWine.js";import{a as v,i as y}from"./persistentSidebarPlayground-C_0jw6dq.js";import{t as b}from"./Code-Ds9lKLk6.js";import{t as x}from"./tabs-DSy0eY-V.js";import{n as S}from"./SidebarPlaygroundDesign-DMSFSCs3.js";var C=0,w=(e,t)=>e?t?`${e} ${t}`:e:t??``,T=e=>{let t=[];return e.forEach(e=>{t.some(t=>t===e)||t.push(e)}),t},E=(e,t)=>{let n=T(Array.isArray(e)?e:[]);return t?n:n.slice(0,1)},D=e=>e==null?[]:[e],O=(e,t,n,r,i,a)=>E(r===void 0?t===void 0?i===void 0?n===void 0?e.filter(e=>e.open).map(e=>e.key):D(n):i:D(t):r,a),k=(e,t,n)=>n===`open`?!0:n===`close`?!1:typeof e==`boolean`?e:typeof t==`boolean`?t:!1,A=(e,t)=>t===`open`?`collapse-open`:t===`close`?`collapse-close`:e?`collapse-open`:`collapse-close`,j=(e,t)=>{let n=t?.getRootNode?.(),r=n&&typeof n.querySelectorAll==`function`?n:typeof document<`u`?document:null;return r?Array.from(r.querySelectorAll(`[data-rue-accordion-group]`)).filter(t=>t.dataset.rueAccordionGroup===e):[]},M=e=>Array.from(e.children).find(e=>e instanceof HTMLInputElement&&(e.type===`checkbox`||e.type===`radio`)),N=e=>Array.from(e.children).find(e=>e instanceof HTMLElement&&e.classList.contains(`collapse-title`)),P=(e,t,n)=>{if(!(e instanceof HTMLElement))return;e.classList.remove(`collapse-open`,`collapse-close`),e.classList.add(A(t,n));let r=M(e);r&&r.checked!==t&&(r.checked=t),e instanceof HTMLDetailsElement&&e.open!==t&&(e.open=t);let i=N(e);i&&i.setAttribute(`aria-expanded`,t?`true`:`false`)},F=(e,t,n,r,i)=>r?n?T([...e,t]):e.filter(e=>e!==t):n?[t]:i?[]:e.some(e=>e===t)?[...e]:[t],I=e=>e?.type===`radio`,L=e=>e.description==null&&e.extra==null?e.title:v(`div`,{className:`flex w-full items-start justify-between gap-3`,children:[v(`div`,{className:`min-w-0 flex-1`,children:[y(`div`,{children:e.title}),e.description==null?null:y(`div`,{className:w(`mt-1 text-xs opacity-70`,e.descriptionClassName),children:e.description})]}),e.extra==null?null:y(`div`,{className:w(`shrink-0 text-xs opacity-70`,e.extraClassName),children:e.extra})]}),R=Object.assign(({icon:e,force:t,use:r=`radio`,name:i,open:a,defaultOpen:o,activeKey:s,defaultActiveKey:c,openKeys:l,defaultOpenKeys:u,multiple:d,collapsible:p,disabled:m,className:h,titleClassName:g,contentClassName:_,children:b,items:x,onChange:S,onToggle:T})=>{let N=x?.map((e,t)=>({...e,key:e.key??t,index:t}))??[],R=n(`rue-accordion-${C++}`),z=n(k(a,o,t)),B=n(O(N,s,c,l,u,d)),V=i??R.value,H=N.length>0,U=l!==void 0||s!==void 0,W=t===`open`?!0:t===`close`?!1:a===void 0?z.value:!!a,G=()=>l===void 0?s===void 0?B.value:E(D(s),d):E(l,d),K=(e,n)=>{j(V,n).forEach(n=>{let r=N[Number(n.dataset.rueAccordionIndex??-1)];if(!r)return;let i=r.force??t;P(n,i===`open`?!0:i===`close`?!1:e.some(e=>e===r.key),i)})},q=e=>{j(V,e).forEach(e=>{let n=e.dataset.rueAccordionForce??t,r=M(e);P(e,n===`open`?!0:n===`close`?!1:e instanceof HTMLDetailsElement?e.open:r?.checked===!0,n)})},J=(e,n,r)=>{let i=e.force??t;if(m||e.disabled||i)return;let a=F(G(),e.key,n,d,p),o=a.some(t=>t===e.key);U||(B.value=a,K(a,r)),S&&S(d?a:a[0]??null,{key:e.key,index:e.index,open:o,item:e})},Y=(e,n)=>{m||t||(a===void 0&&(z.value=e,q(n)),T&&T(e,{key:V,index:0,open:e}))};if(H)return y(f,{children:N.map(n=>{let i=n.use??r,a=n.icon??e,o=n.force??t,s=o===`open`?!0:o===`close`?!1:G().some(e=>e===n.key),c=w(`collapse`,A(s,o));a===`arrow`&&(c+=` collapse-arrow`),a===`plus`&&(c+=` collapse-plus`),h&&(c+=` ${h}`),n.className&&(c+=` ${n.className}`),(m||n.disabled)&&(c+=` opacity-70`);let l=a===`arrow`&&(n.description!=null||n.extra!=null)?`after:top-6`:void 0,u=w(w(`collapse-title`,g),w(n.titleClassName,l)),f=w(w(`collapse-content`,_),n.contentClassName);if(i===`details`)return v(`details`,{className:c,name:V,open:s,"data-rue-accordion-group":V,"data-rue-accordion-index":String(n.index),"data-rue-accordion-force":o,children:[y(`summary`,{className:u,"aria-expanded":s?`true`:`false`,onClick:e=>{e.preventDefault(),J(n,!s,e.currentTarget)},children:L(n)}),y(`div`,{className:f,children:n.content})]},n.key);let b=d?`checkbox`:`radio`;return v(`div`,{className:c,"data-rue-accordion-group":V,"data-rue-accordion-index":String(n.index),"data-rue-accordion-force":o,children:[y(`input`,{type:b,name:b===`radio`?V:void 0,checked:s,disabled:m||n.disabled||!!o,onClick:e=>{let t=e.currentTarget;!p||!s||!I(t)||(e.preventDefault(),t.checked=!1,J(n,!1,t))},onChange:e=>{let t=e.target.checked;J(n,t,e.currentTarget)}}),y(`div`,{className:u,"aria-expanded":s?`true`:`false`,children:L(n)}),y(`div`,{className:f,children:n.content})]},n.key)})});let X=w(`collapse`,A(W,t));if(e===`arrow`&&(X+=` collapse-arrow`),e===`plus`&&(X+=` collapse-plus`),h&&(X+=` ${h}`),m&&(X+=` opacity-70`),r===`details`)return y(`details`,{className:X,name:V,open:W,"data-rue-accordion-group":V,"data-rue-accordion-force":t,onToggle:e=>{let n=e.currentTarget.open;if(m||t){e.currentTarget.open!==W&&(e.currentTarget.open=W);return}Y(n,e.currentTarget)},children:b});let Z=`radio`;return v(`div`,{className:X,"data-rue-accordion-group":V,"data-rue-accordion-force":t,children:[y(`input`,{type:Z,name:Z===`radio`?V:void 0,checked:W,disabled:m||!!t,onClick:e=>{let t=e.currentTarget;!p||!W||!I(t)||(e.preventDefault(),t.checked=!1,Y(!1,t))},onChange:e=>{let t=e.target.checked;Y(t,e.currentTarget)}}),b]})},{Title:({className:e,children:t,as:n=`div`})=>{let r=w(`collapse-title`,e);return n===`summary`?y(`summary`,{className:r,children:t}):n===`button`?y(`button`,{type:`button`,className:r,children:t}):y(`div`,{className:r,children:t})},Content:({className:e,children:t})=>y(`div`,{className:w(`collapse-content`,e),children:t})}),z=t=>d(n=>{let c=e(`div`,n);l(c,`component-preview not-prose text-base-content my-6 lg:my-12`);let f=e(`div`,c);a(c,f),l(f,`flex flex-wrap items-start justify-between gap-3`);let p=e(`div`,f);a(f,p);let g=e(`h2`,p);a(p,g),l(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(g,u(`# `));let _=s(`rue:slot:anchor`);a(g,_),o(()=>{let e=t.title;i(()=>m(e,g,_))});let v=s(`rue:slot:anchor`);a(p,v),o(()=>{let n=t.summary?d(()=>{let n=r(),c=e(`p`,n);a(n,c),l(c,`m-0 text-sm opacity-70`);let u=s(`rue:slot:anchor`);return a(c,u),o(()=>{let e=t.summary;i(()=>m(e,c,u))}),n}):``;i(()=>m(n,p,v))});let y=s(`rue:component:anchor`);a(c,y),o(()=>{let e=h(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`TSX代码`}],activeKey:t.tab.value,onChange:e=>t.tab.value=e,className:`mb-3 mt-4`});i(()=>m(e,c,y))});let S=s(`rue:slot:anchor`);return a(c,S),o(()=>{let e=t.tab.value===`preview`?t.preview():d(()=>{let e=r(),n=s(`rue:component:anchor`);return a(e,n),o(()=>{let r=h(b,{className:`mt-2`,lang:`tsx`,code:t.code});i(()=>m(r,e,n))}),e});i(()=>m(e,c,S))}),c}),B=t=>d(n=>{let c=e(`div`,n);l(c,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=e(`table`,c);a(c,f),l(f,`table table-zebra`);let h=e(`thead`,f);a(f,h);let g=e(`tr`,h);a(h,g);let v=e(`th`,g);a(g,v),a(v,u(`属性`));let y=e(`th`,g);a(g,y),a(y,u(`说明`));let b=e(`th`,g);a(g,b),a(b,u(`类型`));let x=e(`th`,g);a(g,x),a(x,u(`默认值`));let S=e(`tbody`,f);a(f,S);let C=s(`rue:list:start`),w=s(`rue:list:end`);a(S,C),a(S,w);let T=new Map;return o(()=>{T=_({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,n,c,l,u)=>{m(d(()=>{let n=r(),c=e(`tr`,n);a(n,c),o(()=>{p(c,`key`,String(t.prop))});let l=e(`td`,c);a(c,l);let u=e(`code`,l);a(l,u);let d=s(`rue:slot:anchor`);a(u,d),o(()=>{let e=t.prop;i(()=>m(e,u,d))});let f=e(`td`,c);a(c,f);let h=s(`rue:slot:anchor`);a(f,h),o(()=>{let e=t.description;i(()=>m(e,f,h))});let g=e(`td`,c);a(c,g);let _=e(`code`,g);a(g,_);let v=s(`rue:slot:anchor`);a(_,v),o(()=>{let e=t.type;i(()=>m(e,_,v))});let y=e(`td`,c);a(c,y);let b=e(`code`,y);a(y,b);let x=s(`rue:slot:anchor`);return a(b,x),o(()=>{let e=t.defaultValue;i(()=>m(e,b,x))}),n}),n,c)}})}),c}),V=[{key:`account`,title:`How do I create an account?`,content:`Click the "Sign Up" button in the top right corner and follow the registration process.`},{key:`password`,title:`I forgot my password. What should I do?`,content:`Click on "Forgot Password" on the login page and follow the instructions sent to your email.`},{key:`profile`,title:`How do I update my profile information?`,content:`Go to "My Account" settings and select "Edit Profile" to make changes.`}],H=[{title:`Children 组合`,desc:`保留 Accordion.Title / Accordion.Content，用于局部定制标题和内容。`},{title:`Items 驱动`,desc:`直接用 items 写标题、描述、额外信息和禁用态，适合后台配置页。`},{title:`受控状态`,desc:`通过 activeKey、openKeys、onChange 接管当前展开项。`},{title:`两种语义`,desc:`默认 radio 风格适合单开；details 适合保留可搜索内容与原生语义。`}],U=[{prop:`activeKey`,description:`items 模式下的受控单开 key`,type:`string | number | null`,defaultValue:`-`},{prop:`className`,description:`追加到每个 Accordion 根节点的类名`,type:`string`,defaultValue:`-`},{prop:`collapsible`,description:`单开模式下允许把当前面板再次折叠`,type:`boolean`,defaultValue:`false`},{prop:`contentClassName`,description:`items 模式下统一追加到内容区域的类名`,type:`string`,defaultValue:`-`},{prop:`defaultActiveKey`,description:`items 模式下的非受控默认单开 key`,type:`string | number | null`,defaultValue:`-`},{prop:`defaultOpen`,description:`children 模式下的非受控默认展开状态`,type:`boolean`,defaultValue:`false`},{prop:`defaultOpenKeys`,description:`items 模式下的非受控默认多开 keys`,type:`Array<string | number>`,defaultValue:`-`},{prop:`disabled`,description:`禁用整个 Accordion 或当前 items 组的交互`,type:`boolean`,defaultValue:`false`},{prop:`force`,description:`强制视觉保持展开或收起，优先级高于 open 与 items 状态`,type:`'open' | 'close'`,defaultValue:`-`},{prop:`icon`,description:`标题右侧的内置指示样式`,type:`'arrow' | 'plus'`,defaultValue:`-`},{prop:`items`,description:`数据驱动渲染方式，适合 FAQ、配置面板和后台列表`,type:`AccordionDataItem[]`,defaultValue:`-`},{prop:`multiple`,description:`允许同时展开多个 items；radio 形态会切为 checkbox 行为`,type:`boolean`,defaultValue:`false`},{prop:`name`,description:`分组名；radio 与 details 语义都会复用这个名称`,type:`string`,defaultValue:`自动生成`},{prop:`onChange`,description:`items 模式下的开合回调；单开返回 key，多开返回 keys`,type:`(value, context) => void`,defaultValue:`-`},{prop:`onToggle`,description:`children 模式下的单项开合回调`,type:`(open, context) => void`,defaultValue:`-`},{prop:`open`,description:`children 模式下的受控展开状态`,type:`boolean`,defaultValue:`-`},{prop:`openKeys`,description:`items 模式下的受控多开 keys`,type:`Array<string | number>`,defaultValue:`-`},{prop:`titleClassName`,description:`items 模式下统一追加到标题区域的类名`,type:`string`,defaultValue:`-`},{prop:`use`,description:`切换 radio 或 details 两种结构输出`,type:`'radio' | 'details'`,defaultValue:`'radio'`}],W=[{prop:`className`,description:`追加到当前 item 根节点的类名`,type:`string`,defaultValue:`-`},{prop:`content`,description:`折叠区内容`,type:`any`,defaultValue:`-`},{prop:`contentClassName`,description:`内容区域类名`,type:`string`,defaultValue:`-`},{prop:`description`,description:`标题下的补充说明文字`,type:`any`,defaultValue:`-`},{prop:`descriptionClassName`,description:`说明文字类名`,type:`string`,defaultValue:`-`},{prop:`disabled`,description:`禁用当前 item 交互`,type:`boolean`,defaultValue:`false`},{prop:`extra`,description:`标题行右侧的补充信息，可用于状态标记或数字`,type:`any`,defaultValue:`-`},{prop:`extraClassName`,description:`额外信息区域类名`,type:`string`,defaultValue:`-`},{prop:`force`,description:`对单个 item 单独强制展开或收起`,type:`'open' | 'close'`,defaultValue:`-`},{prop:`icon`,description:`覆盖全局 icon 设置`,type:`'arrow' | 'plus'`,defaultValue:`-`},{prop:`key`,description:`推荐显式提供的稳定标识，用于 activeKey / openKeys 匹配`,type:`string | number`,defaultValue:`index`},{prop:`open`,description:`非受控模式下的默认展开状态`,type:`boolean`,defaultValue:`false`},{prop:`title`,description:`标题区域内容`,type:`any`,defaultValue:`-`},{prop:`titleClassName`,description:`标题区域类名`,type:`string`,defaultValue:`-`},{prop:`use`,description:`覆盖全局 use 设置`,type:`'radio' | 'details'`,defaultValue:`-`}],G=(t,n)=>d(u=>{let f=e(`div`,u);o(()=>{l(f,String(n?.containerClassName??`grid gap-3`))});let p=s(`rue:list:start`),g=s(`rue:list:end`);a(f,p),a(f,g);let v=new Map;return o(()=>{v=_({items:V||[],getKey:(e,n)=>`${t}-${e.key}`,elements:v,parent:p.parentNode,before:g,start:p,renderItem:(e,l,u,f,p)=>{let g=d(()=>{let t=r(),c=s(`rue:component:anchor`);a(t,c),o(()=>{let r=h(R.Title,{as:n?.use===`details`?`summary`:`div`,className:`font-semibold`,children:e.title});i(()=>m(r,t,c))});let l=s(`rue:component:anchor`);return a(t,l),m(h(R.Content,{className:`text-sm opacity-80`,children:e.content}),t,l),t});c(h(R,{key:`${t}-${e.key}`,name:t,use:n?.use,icon:n?.icon,collapsible:n?.collapsible,className:n?.itemClassName??`bg-base-100 border border-base-300`,defaultOpen:p===0,children:g}),l,u,f)}})}),f}),K=()=>{let{tabRadio:c,tabDetails:f,tabControlled:b,tabMultiple:x,tabRich:C,tabArrow:w,tabPlus:T,tabJoin:E,tabArrayRadio:D,tabArrayDetails:O,controlledKey:k,lastChanged:A,roadmapItems:j,faqItemsCode:M}=g(`useSetup:0:0`,()=>t(()=>({tabRadio:g(`ref:1:0`,()=>n(`preview`)),tabDetails:g(`ref:1:1`,()=>n(`preview`)),tabControlled:g(`ref:1:2`,()=>n(`preview`)),tabMultiple:g(`ref:1:3`,()=>n(`preview`)),tabRich:g(`ref:1:4`,()=>n(`preview`)),tabArrow:g(`ref:1:5`,()=>n(`preview`)),tabPlus:g(`ref:1:6`,()=>n(`preview`)),tabJoin:g(`ref:1:7`,()=>n(`preview`)),tabArrayRadio:g(`ref:1:8`,()=>n(`preview`)),tabArrayDetails:g(`ref:1:9`,()=>n(`preview`)),controlledKey:g(`ref:1:10`,()=>n(`build`)),lastChanged:g(`ref:1:11`,()=>n(`build`)),roadmapItems:[{key:`plan`,title:`Plan backlog`,description:`先确定优先级，再安排设计和开发`,extra:`Sprint 12`,content:`Collect the most urgent requirements, align on edge cases, and freeze the delivery order before implementation starts.`},{key:`build`,title:`Build feature slice`,description:`把 API、交互和回归验证收敛到同一轮里`,extra:`In progress`,content:`Ship the smallest useful slice first, then expand demos and tests around the verified behavior instead of guessing a broad design up front.`},{key:`ship`,title:`Ship and monitor`,description:`发布后持续看告警、埋点和反馈`,extra:`Ready`,content:`After release, keep an eye on error rate, support feedback and adoption signals so the next iteration has concrete evidence.`}],faqItemsCode:`const items = [
  {
    key: 'account',
    title: 'How do I create an account?',
    content: 'Click the "Sign Up" button in the top right corner and follow the registration process.',
    open: true,
  },
  {
    key: 'password',
    title: 'I forgot my password. What should I do?',
    content: 'Click on "Forgot Password" on the login page and follow the instructions sent to your email.',
  },
  {
    key: 'profile',
    title: 'How do I update my profile information?',
    content: 'Go to "My Account" settings and select "Edit Profile" to make changes.',
  },
]`})));return d(t=>{let n=r(),g=s(`rue:component:anchor`);return a(n,g),m(h(S,{children:d(()=>{let t=r(),n=e(`div`,t);a(t,n),l(n,`max-w-none prose prose-sm md:prose-base`);let g=e(`h1`,n);a(n,g),a(g,u(`Accordion 手风琴`));let S=e(`p`,n);a(n,S),l(S,`text-sm mt-3 mb-3`),a(S,u(`Accordion 现在保留 Rue 原本的轻量视觉风格，但 API 不再只是静态包装。你可以继续用`));let N=e(`code`,S);a(S,N),a(N,u(`Accordion.Title`)),a(S,u(`和`));let P=e(`code`,S);a(S,P),a(P,u(`Accordion.Content`)),a(S,u(`组合单个面板，也可以直接用`));let F=e(`code`,S);a(S,F),a(F,u(`items`)),a(S,u(`走数据驱动，接入受控 key、多开、禁用和富标题信息。`));let I=e(`h2`,n);a(n,I),a(I,u(`何时使用`));let L=e(`ul`,n);a(n,L);let K=e(`li`,L);a(L,K),a(K,u(`需要 FAQ、设置说明、任务面板这类“标题 + 可折叠内容”的信息组织方式。`));let q=e(`li`,L);a(L,q),a(q,u(`需要在单开和多开之间切换，或把当前展开项接到页面状态里。`));let J=e(`li`,L);a(L,J),a(J,u(`需要在标题里补充状态、说明、标签，而不想为每个面板手写结构。`));let Y=e(`li`,L);a(L,Y),a(Y,u(`需要让浏览器能搜索折叠内容时，使用`));let X=e(`code`,Y);a(Y,X),a(X,u(`use="details"`)),a(Y,u(`。`));let Z=e(`div`,n);a(n,Z),l(Z,`not-prose my-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4`);let ee=s(`rue:list:start`),te=s(`rue:list:end`);a(Z,ee),a(Z,te);let ne=new Map;o(()=>{ne=_({items:H||[],getKey:(e,t)=>e.title,elements:ne,parent:Z,before:te,singleRoot:!0,trackIndex:!1,start:ee,renderItem:(t,n,c,f,h)=>{m(d(()=>{let n=r(),c=e(`div`,n);a(n,c),o(()=>{p(c,`key`,String(t.title))}),l(c,`card border border-base-300 bg-base-100 shadow-sm`);let d=e(`div`,c);a(c,d),l(d,`card-body gap-2 p-4`);let f=e(`div`,d);a(d,f),l(f,`text-xs uppercase tracking-[0.2em] text-base-content/50`),a(f,u(`Capability`));let h=e(`div`,d);a(d,h),l(h,`text-sm font-semibold`);let g=s(`rue:slot:anchor`);a(h,g),o(()=>{let e=t.title;i(()=>m(e,h,g))});let _=e(`p`,d);a(d,_),l(_,`m-0 text-sm opacity-70`);let v=s(`rue:slot:anchor`);return a(_,v),o(()=>{let e=t.desc;i(()=>m(e,_,v))}),n}),n,c)}})});let re=s(`rue:component:anchor`);a(n,re),o(()=>{let e=h(z,{title:`Accordion using radio inputs`,summary:`保留单开分组，同时额外开启 collapsible，方便在文档页里反复点按查看开合状态。`,tab:c,preview:()=>G(`accordion-radio-demo`,{collapsible:!0}),code:`<Accordion className="bg-base-100 border border-base-300" name="accordion-radio-demo" defaultOpen collapsible>
  <Accordion.Title className="font-semibold">How do I create an account?</Accordion.Title>
  <Accordion.Content className="text-sm opacity-80">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Accordion.Content>
</Accordion>
<Accordion className="bg-base-100 border border-base-300" name="accordion-radio-demo" collapsible>
  <Accordion.Title className="font-semibold">I forgot my password. What should I do?</Accordion.Title>
  <Accordion.Content className="text-sm opacity-80">
    Click on "Forgot Password" on the login page and follow the instructions sent to your email.
  </Accordion.Content>
</Accordion>
<Accordion className="bg-base-100 border border-base-300" name="accordion-radio-demo" collapsible>
  <Accordion.Title className="font-semibold">How do I update my profile information?</Accordion.Title>
  <Accordion.Content className="text-sm opacity-80">
    Go to "My Account" settings and select "Edit Profile" to make changes.
  </Accordion.Content>
</Accordion>`});i(()=>m(e,n,re))});let ie=s(`rue:component:anchor`);a(n,ie),o(()=>{let e=h(z,{title:`Accordion using details`,summary:`保留 details 结构，适合需要原生语义和浏览器搜索能力的内容区。`,tab:f,preview:()=>G(`accordion-details-demo`,{use:`details`}),code:`<Accordion use="details" className="bg-base-100 border border-base-300" name="accordion-details-demo" defaultOpen>
  <Accordion.Title as="summary" className="font-semibold">How do I create an account?</Accordion.Title>
  <Accordion.Content className="text-sm opacity-80">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Accordion.Content>
</Accordion>
<Accordion use="details" className="bg-base-100 border border-base-300" name="accordion-details-demo">
  <Accordion.Title as="summary" className="font-semibold">I forgot my password. What should I do?</Accordion.Title>
  <Accordion.Content className="text-sm opacity-80">
    Click on "Forgot Password" on the login page and follow the instructions sent to your email.
  </Accordion.Content>
</Accordion>
<Accordion use="details" className="bg-base-100 border border-base-300" name="accordion-details-demo">
  <Accordion.Title as="summary" className="font-semibold">How do I update my profile information?</Accordion.Title>
  <Accordion.Content className="text-sm opacity-80">
    Go to "My Account" settings and select "Edit Profile" to make changes.
  </Accordion.Content>
</Accordion>`});i(()=>m(e,n,ie))});let ae=s(`rue:component:anchor`);a(n,ae),o(()=>{let e=h(z,{title:`Controlled active key`,summary:`受控模式同样支持 collapsible；点击已展开项时，activeKey 会回到 null。`,tab:b,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-4`,children:[y(`div`,{className:`flex flex-wrap gap-2`,children:j.map(e=>v(`button`,{className:`btn btn-sm ${k.value===e.key?`btn-primary`:`btn-ghost`}`,onClick:()=>{let t=k.value===e.key?null:e.key;k.value=t,A.value=t},children:[`切换 `,e.title]},e.key))}),v(`div`,{className:`grid gap-2 rounded-box border border-base-300 bg-base-200/40 p-3 text-sm`,children:[v(`div`,{children:[`当前 `,y(`code`,{children:`activeKey`}),`：`,y(`code`,{children:k.value??`null`})]}),v(`div`,{children:[`最近一次切换：`,y(`code`,{children:A.value??`null`})]})]}),y(R,{activeKey:k.value,collapsible:!0,icon:`arrow`,className:`bg-base-100 border border-base-300`,items:j,onChange:e=>{let t=Array.isArray(e)?e[0]:e;k.value=t??null,A.value=t??null}})]})}),code:`import { ref } from '@rue-js/rue'

type StageKey = 'plan' | 'build' | 'ship'

const controlledKey = ref<StageKey | null>('build')
const items = [
  {
    key: 'plan',
    title: 'Plan backlog',
    description: '先确定优先级，再安排设计和开发',
    extra: 'Sprint 12',
    content: 'Collect the most urgent requirements, align on edge cases, and freeze the delivery order before implementation starts.',
  },
  {
    key: 'build',
    title: 'Build feature slice',
    description: '把 API、交互和回归验证收敛到同一轮里',
    extra: 'In progress',
    content: 'Ship the smallest useful slice first, then expand demos and tests around the verified behavior instead of guessing a broad design up front.',
  },
  {
    key: 'ship',
    title: 'Ship and monitor',
    description: '发布后持续看告警、埋点和反馈',
    extra: 'Ready',
    content: 'After release, keep an eye on error rate, support feedback and adoption signals so the next iteration has concrete evidence.',
  },
]

<Accordion
  activeKey={controlledKey.value}
  collapsible
  icon="arrow"
  className="bg-base-100 border border-base-300"
  items={items}
  onChange={nextValue => {
    const nextKey = Array.isArray(nextValue)
      ? (nextValue[0] as StageKey | undefined)
      : (nextValue as StageKey | null)
    controlledKey.value = nextKey ?? null
  }}
/>`});i(()=>m(e,n,ae))});let oe=s(`rue:component:anchor`);a(n,oe),o(()=>{let e=h(z,{title:`Multiple open panels`,summary:`新增 multiple 与 defaultOpenKeys，可同时展开多个项；同一 API 也能配合 collapsible 做可收起单项。`,tab:x,preview:()=>v(`div`,{className:`grid gap-4 xl:grid-cols-[1.5fr_1fr]`,children:[y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-4`,children:[y(`div`,{className:`alert alert-soft`,children:y(`span`,{className:`text-sm`,children:`multiple 会把 radio 形态切到 checkbox 行为，适合筛选条件或调试面板。`})}),y(R,{multiple:!0,icon:`arrow`,className:`bg-base-100 border border-base-300`,defaultOpenKeys:[`latency`,`cache`],items:[{key:`latency`,title:`Latency budget`,description:`页面首屏与接口预算放在同一个地方追踪`,extra:`120ms`,content:`Track server timing, render budget and hydration cost together so regressions can be located quickly.`},{key:`cache`,title:`Cache strategy`,description:`缓存命中率和失效策略分开说明`,extra:`Warm`,content:`Document what can stay stale, what must be revalidated, and how to handle cache busting during deployments.`},{key:`rollback`,title:`Rollback checklist`,description:`保留快速回滚路径，避免线上排障时再找人`,extra:`Ops`,content:`Keep a minimal rollback playbook near the release notes so the on-call engineer can act without extra context switching.`}]})]})}),y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-4`,children:[v(`div`,{children:[y(`h3`,{className:`m-0 text-base font-semibold`,children:`Single but collapsible`}),v(`p`,{className:`mt-2 mb-0 text-sm opacity-70`,children:[`不想强制保留一个展开项时，可以给 children 模式加 `,y(`code`,{children:`collapsible`}),`。`]})]}),v(R,{collapsible:!0,defaultOpen:!0,className:`bg-base-100 border border-base-300`,icon:`plus`,children:[y(R.Title,{className:`font-semibold`,children:`Can I close the last open panel?`}),v(R.Content,{className:`text-sm opacity-80`,children:[`Yes. Set `,y(`code`,{children:`collapsible`}),` to allow toggling the current panel off instead of forcing one active item.`]})]})]})})]}),code:`<Accordion
  multiple
  icon="arrow"
  className="bg-base-100 border border-base-300"
  defaultOpenKeys={['latency', 'cache']}
  items={[
    {
      key: 'latency',
      title: 'Latency budget',
      description: '页面首屏与接口预算放在同一个地方追踪',
      extra: '120ms',
      content: 'Track server timing, render budget and hydration cost together so regressions can be located quickly.',
    },
    {
      key: 'cache',
      title: 'Cache strategy',
      description: '缓存命中率和失效策略分开说明',
      extra: 'Warm',
      content: 'Document what can stay stale, what must be revalidated, and how to handle cache busting during deployments.',
    },
    {
      key: 'rollback',
      title: 'Rollback checklist',
      description: '保留快速回滚路径，避免线上排障时再找人',
      extra: 'Ops',
      content: 'Keep a minimal rollback playbook near the release notes so the on-call engineer can act without extra context switching.',
    },
  ]}
/>

<Accordion collapsible defaultOpen className="bg-base-100 border border-base-300" icon="plus">
  <Accordion.Title className="font-semibold">Can I close the last open panel?</Accordion.Title>
  <Accordion.Content className="text-sm opacity-80">
    Yes. Set <code>collapsible</code> to allow toggling the current panel off instead of forcing one active item.
  </Accordion.Content>
</Accordion>`});i(()=>m(e,n,oe))});let se=s(`rue:component:anchor`);a(n,se),o(()=>{let e=h(z,{title:`Rich item metadata`,summary:`新增 description、extra 和 disabled，适合后台列表、规则说明和版本发布面板。`,tab:C,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-4`,children:y(R,{collapsible:!0,icon:`arrow`,className:`bg-base-100 border border-base-300`,items:[{key:`review`,title:`Review dependencies`,description:`上线前再核对一次依赖差异和风险说明`,extra:y(`span`,{className:`badge badge-warning badge-outline`,children:`Review`}),open:!0,content:`Compare the dependency diff with the last release baseline, and record whether each update changes runtime behavior or only build tooling.`},{key:`announce`,title:`Prepare release notes`,description:`把用户可感知的变化浓缩成 changelog 和公告文案`,extra:y(`span`,{className:`badge badge-success badge-outline`,children:`Ready`}),content:`Write the changelog from the user perspective first, then attach migration hints or rollout notes only when they affect adoption.`},{key:`ops`,title:`Ops handoff`,description:`值班同学确认回滚路径与观测指标后才能执行`,extra:y(`span`,{className:`badge badge-ghost`,children:`Waiting`}),disabled:!0,content:`This item is intentionally disabled to show how a non-interactive operational gate can still stay visible in the stack.`}]})})}),code:`<Accordion
          collapsible
  icon="arrow"
  className="bg-base-100 border border-base-300"
  items={[
    {
      key: 'review',
      title: 'Review dependencies',
      description: '上线前再核对一次依赖差异和风险说明',
      extra: <span className="badge badge-warning badge-outline">Review</span>,
      open: true,
      content: 'Compare the dependency diff with the last release baseline, and record whether each update changes runtime behavior or only build tooling.',
    },
    {
      key: 'announce',
      title: 'Prepare release notes',
      description: '把用户可感知的变化浓缩成 changelog 和公告文案',
      extra: <span className="badge badge-success badge-outline">Ready</span>,
      content: 'Write the changelog from the user perspective first, then attach migration hints or rollout notes only when they affect adoption.',
    },
    {
      key: 'ops',
      title: 'Ops handoff',
      description: '值班同学确认回滚路径与观测指标后才能执行',
      extra: <span className="badge badge-ghost">Waiting</span>,
      disabled: true,
      content: 'This item is intentionally disabled to show how a non-interactive operational gate can still stay visible in the stack.',
    },
  ]}
/>`});i(()=>m(e,n,se))});let ce=s(`rue:component:anchor`);a(n,ce),o(()=>{let e=h(z,{title:`Accordion with arrow icon`,summary:`保留 arrow 指示样式，并开启 collapsible，方便直接验证箭头开合反馈。`,tab:w,preview:()=>G(`accordion-arrow-demo`,{icon:`arrow`,collapsible:!0}),code:`<Accordion icon="arrow" className="bg-base-100 border border-base-300" name="accordion-arrow-demo" defaultOpen collapsible>
  <Accordion.Title className="font-semibold">How do I create an account?</Accordion.Title>
  <Accordion.Content className="text-sm opacity-80">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Accordion.Content>
</Accordion>
<Accordion icon="arrow" className="bg-base-100 border border-base-300" name="accordion-arrow-demo" collapsible>
  <Accordion.Title className="font-semibold">I forgot my password. What should I do?</Accordion.Title>
  <Accordion.Content className="text-sm opacity-80">
    Click on "Forgot Password" on the login page and follow the instructions sent to your email.
  </Accordion.Content>
</Accordion>
<Accordion icon="arrow" className="bg-base-100 border border-base-300" name="accordion-arrow-demo" collapsible>
  <Accordion.Title className="font-semibold">How do I update my profile information?</Accordion.Title>
  <Accordion.Content className="text-sm opacity-80">
    Go to "My Account" settings and select "Edit Profile" to make changes.
  </Accordion.Content>
</Accordion>`});i(()=>m(e,n,ce))});let le=s(`rue:component:anchor`);a(n,le),o(()=>{let e=h(z,{title:`Accordion with plus/minus icon`,summary:`保留 plus/minus 方案，并开启 collapsible，方便直接验证开合反馈。`,tab:T,preview:()=>G(`accordion-plus-demo`,{icon:`plus`,collapsible:!0}),code:`<Accordion icon="plus" className="bg-base-100 border border-base-300" name="accordion-plus-demo" defaultOpen collapsible>
  <Accordion.Title className="font-semibold">How do I create an account?</Accordion.Title>
  <Accordion.Content className="text-sm opacity-80">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Accordion.Content>
</Accordion>
<Accordion icon="plus" className="bg-base-100 border border-base-300" name="accordion-plus-demo" collapsible>
  <Accordion.Title className="font-semibold">I forgot my password. What should I do?</Accordion.Title>
  <Accordion.Content className="text-sm opacity-80">
    Click on "Forgot Password" on the login page and follow the instructions sent to your email.
  </Accordion.Content>
</Accordion>
<Accordion icon="plus" className="bg-base-100 border border-base-300" name="accordion-plus-demo" collapsible>
  <Accordion.Title className="font-semibold">How do I update my profile information?</Accordion.Title>
  <Accordion.Content className="text-sm opacity-80">
    Go to "My Account" settings and select "Edit Profile" to make changes.
  </Accordion.Content>
</Accordion>`});i(()=>m(e,n,le))});let ue=s(`rue:component:anchor`);a(n,ue),o(()=>{let e=h(z,{title:`Using Accordion and Join together`,summary:`保留 join 组合方式，并开启 collapsible，方便连续边框场景下反复验证开合。`,tab:E,preview:()=>y(`div`,{className:`join join-vertical bg-base-100`,children:V.map((e,t)=>v(R,{icon:`arrow`,collapsible:!0,className:`join-item border border-base-300`,name:`accordion-join-demo`,defaultOpen:t===0,children:[y(R.Title,{className:`font-semibold`,children:e.title}),y(R.Content,{className:`text-sm opacity-80`,children:e.content})]},`join-${e.key}`))}),code:`<div className="join join-vertical bg-base-100">
  <Accordion icon="arrow" className="join-item border border-base-300" name="accordion-join-demo" defaultOpen collapsible>
    <Accordion.Title className="font-semibold">How do I create an account?</Accordion.Title>
    <Accordion.Content className="text-sm opacity-80">
      Click the "Sign Up" button in the top right corner and follow the registration process.
    </Accordion.Content>
  </Accordion>
  <Accordion icon="arrow" className="join-item border border-base-300" name="accordion-join-demo" collapsible>
    <Accordion.Title className="font-semibold">I forgot my password. What should I do?</Accordion.Title>
    <Accordion.Content className="text-sm opacity-80">
      Click on "Forgot Password" on the login page and follow the instructions sent to your email.
    </Accordion.Content>
  </Accordion>
  <Accordion icon="arrow" className="join-item border border-base-300" name="accordion-join-demo" collapsible>
    <Accordion.Title className="font-semibold">How do I update my profile information?</Accordion.Title>
    <Accordion.Content className="text-sm opacity-80">
      Go to "My Account" settings and select "Edit Profile" to make changes.
    </Accordion.Content>
  </Accordion>
</div>`});i(()=>m(e,n,ue))});let de=s(`rue:component:anchor`);a(n,de),o(()=>{let e=h(z,{title:`Accordion using items array (radio)`,summary:`保留 items 数组写法，并开启 collapsible，方便直接验证数据驱动下的收起逻辑。`,tab:D,preview:()=>y(R,{collapsible:!0,className:`bg-base-100 border border-base-300`,name:`accordion-array-radio-demo`,items:V.map((e,t)=>({key:e.key,title:e.title,content:e.content,open:t===0}))}),code:`${M}

<Accordion
  collapsible
  className="bg-base-100 border border-base-300"
  name="accordion-array-radio-demo"
  items={items}
/>`});i(()=>m(e,n,de))});let fe=s(`rue:component:anchor`);a(n,fe),o(()=>{let e=h(z,{title:`Accordion using items array (details)`,summary:`保留原来的 details + items 组合；现在它也能继续叠加 description、extra 和 disabled。`,tab:O,preview:()=>y(R,{use:`details`,className:`bg-base-100 border border-base-300`,name:`accordion-array-details-demo`,items:V.map((e,t)=>({key:e.key,title:e.title,content:e.content,open:t===0}))}),code:`${M}

<Accordion
  use="details"
  className="bg-base-100 border border-base-300"
  name="accordion-array-details-demo"
  items={items}
/>`});i(()=>m(e,n,fe))});let Q=e(`h2`,n);a(n,Q),p(Q,`id`,`accordion-api`),a(Q,u(`API`));let pe=e(`p`,n);a(n,pe),a(pe,u(`Accordion 现在分成两套用法：children 模式适合局部排版，items 模式适合数据驱动和受控状态。 两套模式共用同一套视觉类名，因此迁移旧示例时通常只需要把结构收敛到更清晰的语义层。`));let me=e(`h3`,n);a(n,me),a(me,u(`Accordion Props`));let he=s(`rue:component:anchor`);a(n,he),o(()=>{let e=h(B,{rows:U});i(()=>m(e,n,he))});let $=e(`h3`,n);a(n,$),l($,`mt-6`),a($,u(`AccordionDataItem`));let ge=s(`rue:component:anchor`);return a(n,ge),o(()=>{let e=h(B,{rows:W});i(()=>m(e,n,ge))}),t})}),n,g),n})};export{K as default};