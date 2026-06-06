import{$ as e,B as t,Dt as n,G as r,H as i,U as a,W as o,Z as s,_ as c,c as l,ht as u,l as d,s as f,t as p,wt as m,yt as h}from"./vapor-runtime-C1rlwc61.js";import{a as g,n as _}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as v}from"./Code-BCLFq1E3.js";import{n as y,t as b}from"./src-BLzF0BqW.js";import{n as x}from"./SidebarPlaygroundDesign-DmoUIYgb.js";import{t as S}from"./tabs-BOxm6iIN.js";var C=0,w=(e,t)=>e?t?`${e} ${t}`:e:t??``,T=e=>{let t=[];return e.forEach(e=>{t.some(t=>t===e)||t.push(e)}),t},E=(e,t)=>{let n=T(Array.isArray(e)?e:[]);return t?n:n.slice(0,1)},D=e=>e==null?[]:[e],O=(e,t,n,r,i,a)=>E(r===void 0?t===void 0?i===void 0?n===void 0?e.filter(e=>e.open).map(e=>e.key):D(n):i:D(t):r,a),k=(e,t,n)=>n===`open`?!0:n===`close`?!1:typeof e==`boolean`?e:typeof t==`boolean`?t:!1,A=(e,t)=>t===`open`?`collapse-open`:t===`close`?`collapse-close`:e?`collapse-open`:`collapse-close`,j=(e,t)=>{let n=t?.getRootNode?.(),r=n&&typeof n.querySelectorAll==`function`?n:typeof document<`u`?document:null;return r?Array.from(r.querySelectorAll(`[data-rue-accordion-group]`)).filter(t=>t.dataset.rueAccordionGroup===e):[]},M=e=>Array.from(e.children).find(e=>e instanceof HTMLInputElement&&(e.type===`checkbox`||e.type===`radio`)),N=e=>Array.from(e.children).find(e=>e instanceof HTMLElement&&e.classList.contains(`collapse-title`)),P=(e,t,n)=>{if(!(e instanceof HTMLElement))return;e.classList.remove(`collapse-open`,`collapse-close`),e.classList.add(A(t,n));let r=M(e);r&&r.checked!==t&&(r.checked=t),e instanceof HTMLDetailsElement&&e.open!==t&&(e.open=t);let i=N(e);i&&i.setAttribute(`aria-expanded`,t?`true`:`false`)},F=(e,t,n,r,i)=>r?n?T([...e,t]):e.filter(e=>e!==t):n?[t]:i?[]:e.some(e=>e===t)?[...e]:[t],I=e=>e?.type===`radio`,L=e=>e.description==null&&e.extra==null?e.title:y(`div`,{className:`flex w-full items-start justify-between gap-3`,children:[y(`div`,{className:`min-w-0 flex-1`,children:[b(`div`,{children:e.title}),e.description==null?null:b(`div`,{className:w(`mt-1 text-xs opacity-70`,e.descriptionClassName),children:e.description})]}),e.extra==null?null:b(`div`,{className:w(`shrink-0 text-xs opacity-70`,e.extraClassName),children:e.extra})]}),R=Object.assign(({icon:e,force:t,use:n=`radio`,name:r,open:i,defaultOpen:a,activeKey:o,defaultActiveKey:s,openKeys:l,defaultOpenKeys:d,multiple:f,collapsible:p,disabled:m,className:h,titleClassName:g,contentClassName:_,children:v,items:x,onChange:S,onToggle:T})=>{let N=x?.map((e,t)=>({...e,key:e.key??t,index:t}))??[],R=u(`rue-accordion-${C++}`),z=u(k(i,a,t)),B=u(O(N,o,s,l,d,f)),V=r??R.value,H=N.length>0,U=l!==void 0||o!==void 0,W=t===`open`?!0:t===`close`?!1:i===void 0?z.value:!!i,G=()=>l===void 0?o===void 0?B.value:E(D(o),f):E(l,f),K=(e,n)=>{j(V,n).forEach(n=>{let r=N[Number(n.dataset.rueAccordionIndex??-1)];if(!r)return;let i=r.force??t;P(n,i===`open`?!0:i===`close`?!1:e.some(e=>e===r.key),i)})},q=e=>{j(V,e).forEach(e=>{let n=e.dataset.rueAccordionForce??t,r=M(e);P(e,n===`open`?!0:n===`close`?!1:e instanceof HTMLDetailsElement?e.open:r?.checked===!0,n)})},J=(e,n,r)=>{let i=e.force??t;if(m||e.disabled||i)return;let a=F(G(),e.key,n,f,p),o=a.some(t=>t===e.key);U||(B.value=a,K(a,r)),S&&S(f?a:a[0]??null,{key:e.key,index:e.index,open:o,item:e})},Y=(e,n)=>{m||t||(i===void 0&&(z.value=e,q(n)),T&&T(e,{key:V,index:0,open:e}))};if(H)return b(c,{children:N.map(r=>{let i=r.use??n,a=r.icon??e,o=r.force??t,s=o===`open`?!0:o===`close`?!1:G().some(e=>e===r.key),c=w(`collapse`,A(s,o));a===`arrow`&&(c+=` collapse-arrow`),a===`plus`&&(c+=` collapse-plus`),h&&(c+=` ${h}`),r.className&&(c+=` ${r.className}`),(m||r.disabled)&&(c+=` opacity-70`);let l=a===`arrow`&&(r.description!=null||r.extra!=null)?`after:top-6`:void 0,u=w(w(`collapse-title`,g),w(r.titleClassName,l)),d=w(w(`collapse-content`,_),r.contentClassName);if(i===`details`)return y(`details`,{className:c,name:V,open:s,"data-rue-accordion-group":V,"data-rue-accordion-index":String(r.index),"data-rue-accordion-force":o,children:[b(`summary`,{className:u,"aria-expanded":s?`true`:`false`,onClick:e=>{e.preventDefault(),J(r,!s,e.currentTarget)},children:L(r)}),b(`div`,{className:d,children:r.content})]},r.key);let v=f?`checkbox`:`radio`;return y(`div`,{className:c,"data-rue-accordion-group":V,"data-rue-accordion-index":String(r.index),"data-rue-accordion-force":o,children:[b(`input`,{type:v,name:v===`radio`?V:void 0,checked:s,disabled:m||r.disabled||!!o,onClick:e=>{let t=e.currentTarget;!p||!s||!I(t)||(e.preventDefault(),t.checked=!1,J(r,!1,t))},onChange:e=>{let t=e.target.checked;J(r,t,e.currentTarget)}}),b(`div`,{className:u,"aria-expanded":s?`true`:`false`,children:L(r)}),b(`div`,{className:d,children:r.content})]},r.key)})});let X=w(`collapse`,A(W,t));if(e===`arrow`&&(X+=` collapse-arrow`),e===`plus`&&(X+=` collapse-plus`),h&&(X+=` ${h}`),m&&(X+=` opacity-70`),n===`details`)return b(`details`,{className:X,name:V,open:W,"data-rue-accordion-group":V,"data-rue-accordion-force":t,onToggle:e=>{let n=e.currentTarget.open;if(m||t){e.currentTarget.open!==W&&(e.currentTarget.open=W);return}Y(n,e.currentTarget)},children:v});let Z=`radio`;return y(`div`,{className:X,"data-rue-accordion-group":V,"data-rue-accordion-force":t,children:[b(`input`,{type:Z,name:Z===`radio`?V:void 0,checked:W,disabled:m||!!t,onClick:e=>{let t=e.currentTarget;!p||!W||!I(t)||(e.preventDefault(),t.checked=!1,Y(!1,t))},onChange:e=>{let t=e.target.checked;Y(t,e.currentTarget)}}),v]})},{Title:({className:e,children:t,as:n=`div`})=>{let r=w(`collapse-title`,e);return n===`summary`?b(`summary`,{className:r,children:t}):n===`button`?b(`button`,{type:`button`,className:r,children:t}):b(`div`,{className:r,children:t})},Content:({className:e,children:t})=>b(`div`,{className:w(`collapse-content`,e),children:t})}),z=s=>d(c=>{let l=o(`div`,c);e(l,`component-preview not-prose text-base-content my-6 lg:my-12`);let u=o(`div`,l);t(l,u),e(u,`flex flex-wrap items-start justify-between gap-3`);let m=o(`div`,u);t(u,m);let g=o(`h2`,m);t(m,g),e(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),t(g,r(`# `));let _=i(`rue:slot:anchor`);t(g,_),n(()=>{let e=s.title;h(()=>f(e,g,_))});let y=i(`rue:slot:anchor`);t(m,y),n(()=>{let r=s.summary?d(()=>{let r=a(),c=o(`p`,r);t(r,c),e(c,`m-0 text-sm opacity-70`);let l=i(`rue:slot:anchor`);return t(c,l),n(()=>{let e=s.summary;h(()=>f(e,c,l))}),r}):``;h(()=>f(r,m,y))});let b=i(`rue:component:anchor`);t(l,b),n(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`TSX代码`}],activeKey:s.tab.value,onChange:e=>s.tab.value=e,className:`mb-3 mt-4`});h(()=>f(e,l,b))});let x=i(`rue:slot:anchor`);return t(l,x),n(()=>{let e=s.tab.value===`preview`?s.preview():d(()=>{let e=a(),r=i(`rue:component:anchor`);return t(e,r),n(()=>{let t=p(v,{className:`mt-2`,lang:`tsx`,code:s.code});h(()=>f(t,e,r))}),e});h(()=>f(e,l,x))}),l}),B=c=>d(l=>{let u=o(`div`,l);e(u,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let p=o(`table`,u);t(u,p),e(p,`table table-zebra`);let m=o(`thead`,p);t(p,m);let g=o(`tr`,m);t(m,g);let v=o(`th`,g);t(g,v),t(v,r(`属性`));let y=o(`th`,g);t(g,y),t(y,r(`说明`));let b=o(`th`,g);t(g,b),t(b,r(`类型`));let x=o(`th`,g);t(g,x),t(x,r(`默认值`));let S=o(`tbody`,p);t(p,S);let C=i(`rue:list:start`),w=i(`rue:list:end`);t(S,C),t(S,w);let T=new Map;return n(()=>{T=_({items:c.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,r,c,l,u)=>{f(d(()=>{let r=a(),c=o(`tr`,r);t(r,c),n(()=>{s(c,`key`,String(e.prop))});let l=o(`td`,c);t(c,l);let u=o(`code`,l);t(l,u);let d=i(`rue:slot:anchor`);t(u,d),n(()=>{let t=e.prop;h(()=>f(t,u,d))});let p=o(`td`,c);t(c,p);let m=i(`rue:slot:anchor`);t(p,m),n(()=>{let t=e.description;h(()=>f(t,p,m))});let g=o(`td`,c);t(c,g);let _=o(`code`,g);t(g,_);let v=i(`rue:slot:anchor`);t(_,v),n(()=>{let t=e.type;h(()=>f(t,_,v))});let y=o(`td`,c);t(c,y);let b=o(`code`,y);t(y,b);let x=i(`rue:slot:anchor`);return t(b,x),n(()=>{let t=e.defaultValue;h(()=>f(t,b,x))}),r}),r,c)}})}),u}),V=[{key:`account`,title:`How do I create an account?`,content:`Click the "Sign Up" button in the top right corner and follow the registration process.`},{key:`password`,title:`I forgot my password. What should I do?`,content:`Click on "Forgot Password" on the login page and follow the instructions sent to your email.`},{key:`profile`,title:`How do I update my profile information?`,content:`Go to "My Account" settings and select "Edit Profile" to make changes.`}],H=[{title:`Children 组合`,desc:`保留 Accordion.Title / Accordion.Content，用于局部定制标题和内容。`},{title:`Items 驱动`,desc:`直接用 items 写标题、描述、额外信息和禁用态，适合后台配置页。`},{title:`受控状态`,desc:`通过 activeKey、openKeys、onChange 接管当前展开项。`},{title:`两种语义`,desc:`默认 radio 风格适合单开；details 适合保留可搜索内容与原生语义。`}],U=[{prop:`activeKey`,description:`items 模式下的受控单开 key`,type:`string | number | null`,defaultValue:`-`},{prop:`className`,description:`追加到每个 Accordion 根节点的类名`,type:`string`,defaultValue:`-`},{prop:`collapsible`,description:`单开模式下允许把当前面板再次折叠`,type:`boolean`,defaultValue:`false`},{prop:`contentClassName`,description:`items 模式下统一追加到内容区域的类名`,type:`string`,defaultValue:`-`},{prop:`defaultActiveKey`,description:`items 模式下的非受控默认单开 key`,type:`string | number | null`,defaultValue:`-`},{prop:`defaultOpen`,description:`children 模式下的非受控默认展开状态`,type:`boolean`,defaultValue:`false`},{prop:`defaultOpenKeys`,description:`items 模式下的非受控默认多开 keys`,type:`Array<string | number>`,defaultValue:`-`},{prop:`disabled`,description:`禁用整个 Accordion 或当前 items 组的交互`,type:`boolean`,defaultValue:`false`},{prop:`force`,description:`强制视觉保持展开或收起，优先级高于 open 与 items 状态`,type:`'open' | 'close'`,defaultValue:`-`},{prop:`icon`,description:`标题右侧的内置指示样式`,type:`'arrow' | 'plus'`,defaultValue:`-`},{prop:`items`,description:`数据驱动渲染方式，适合 FAQ、配置面板和后台列表`,type:`AccordionDataItem[]`,defaultValue:`-`},{prop:`multiple`,description:`允许同时展开多个 items；radio 形态会切为 checkbox 行为`,type:`boolean`,defaultValue:`false`},{prop:`name`,description:`分组名；radio 与 details 语义都会复用这个名称`,type:`string`,defaultValue:`自动生成`},{prop:`onChange`,description:`items 模式下的开合回调；单开返回 key，多开返回 keys`,type:`(value, context) => void`,defaultValue:`-`},{prop:`onToggle`,description:`children 模式下的单项开合回调`,type:`(open, context) => void`,defaultValue:`-`},{prop:`open`,description:`children 模式下的受控展开状态`,type:`boolean`,defaultValue:`-`},{prop:`openKeys`,description:`items 模式下的受控多开 keys`,type:`Array<string | number>`,defaultValue:`-`},{prop:`titleClassName`,description:`items 模式下统一追加到标题区域的类名`,type:`string`,defaultValue:`-`},{prop:`use`,description:`切换 radio 或 details 两种结构输出`,type:`'radio' | 'details'`,defaultValue:`'radio'`}],W=[{prop:`className`,description:`追加到当前 item 根节点的类名`,type:`string`,defaultValue:`-`},{prop:`content`,description:`折叠区内容`,type:`any`,defaultValue:`-`},{prop:`contentClassName`,description:`内容区域类名`,type:`string`,defaultValue:`-`},{prop:`description`,description:`标题下的补充说明文字`,type:`any`,defaultValue:`-`},{prop:`descriptionClassName`,description:`说明文字类名`,type:`string`,defaultValue:`-`},{prop:`disabled`,description:`禁用当前 item 交互`,type:`boolean`,defaultValue:`false`},{prop:`extra`,description:`标题行右侧的补充信息，可用于状态标记或数字`,type:`any`,defaultValue:`-`},{prop:`extraClassName`,description:`额外信息区域类名`,type:`string`,defaultValue:`-`},{prop:`force`,description:`对单个 item 单独强制展开或收起`,type:`'open' | 'close'`,defaultValue:`-`},{prop:`icon`,description:`覆盖全局 icon 设置`,type:`'arrow' | 'plus'`,defaultValue:`-`},{prop:`key`,description:`推荐显式提供的稳定标识，用于 activeKey / openKeys 匹配`,type:`string | number`,defaultValue:`index`},{prop:`open`,description:`非受控模式下的默认展开状态`,type:`boolean`,defaultValue:`false`},{prop:`title`,description:`标题区域内容`,type:`any`,defaultValue:`-`},{prop:`titleClassName`,description:`标题区域类名`,type:`string`,defaultValue:`-`},{prop:`use`,description:`覆盖全局 use 设置`,type:`'radio' | 'details'`,defaultValue:`-`}],G=(r,s)=>d(c=>{let u=o(`div`,c);n(()=>{e(u,String(s?.containerClassName??`grid gap-3`))});let m=i(`rue:list:start`),g=i(`rue:list:end`);t(u,m),t(u,g);let v=new Map;return n(()=>{v=_({items:V||[],getKey:(e,t)=>`${r}-${e.key}`,elements:v,parent:m.parentNode,before:g,start:m,renderItem:(e,o,c,u,m)=>{let g=d(()=>{let r=a(),o=i(`rue:component:anchor`);t(r,o),n(()=>{let t=p(R.Title,{as:s?.use===`details`?`summary`:`div`,className:`font-semibold`,children:e.title});h(()=>f(t,r,o))});let c=i(`rue:component:anchor`);return t(r,c),f(p(R.Content,{className:`text-sm opacity-80`,children:e.content}),r,c),r});l(p(R,{key:`${r}-${e.key}`,name:r,use:s?.use,icon:s?.icon,collapsible:s?.collapsible,className:s?.itemClassName??`bg-base-100 border border-base-300`,defaultOpen:m===0,children:g}),o,c,u)}})}),u}),K=()=>{let{tabRadio:c,tabDetails:l,tabControlled:v,tabMultiple:S,tabRich:C,tabArrow:w,tabPlus:T,tabJoin:E,tabArrayRadio:D,tabArrayDetails:O,controlledKey:k,lastChanged:A,roadmapItems:j,faqItemsCode:M}=g(`useSetup:0:0`,()=>m(()=>({tabRadio:g(`ref:1:0`,()=>u(`preview`)),tabDetails:g(`ref:1:1`,()=>u(`preview`)),tabControlled:g(`ref:1:2`,()=>u(`preview`)),tabMultiple:g(`ref:1:3`,()=>u(`preview`)),tabRich:g(`ref:1:4`,()=>u(`preview`)),tabArrow:g(`ref:1:5`,()=>u(`preview`)),tabPlus:g(`ref:1:6`,()=>u(`preview`)),tabJoin:g(`ref:1:7`,()=>u(`preview`)),tabArrayRadio:g(`ref:1:8`,()=>u(`preview`)),tabArrayDetails:g(`ref:1:9`,()=>u(`preview`)),controlledKey:g(`ref:1:10`,()=>u(`build`)),lastChanged:g(`ref:1:11`,()=>u(`build`)),roadmapItems:[{key:`plan`,title:`Plan backlog`,description:`先确定优先级，再安排设计和开发`,extra:`Sprint 12`,content:`Collect the most urgent requirements, align on edge cases, and freeze the delivery order before implementation starts.`},{key:`build`,title:`Build feature slice`,description:`把 API、交互和回归验证收敛到同一轮里`,extra:`In progress`,content:`Ship the smallest useful slice first, then expand demos and tests around the verified behavior instead of guessing a broad design up front.`},{key:`ship`,title:`Ship and monitor`,description:`发布后持续看告警、埋点和反馈`,extra:`Ready`,content:`After release, keep an eye on error rate, support feedback and adoption signals so the next iteration has concrete evidence.`}],faqItemsCode:`const items = [
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
]`})));return d(u=>{let m=a(),g=i(`rue:component:anchor`);return t(m,g),f(p(x,{children:d(()=>{let u=a(),m=o(`div`,u);t(u,m),e(m,`max-w-none prose prose-sm md:prose-base`);let g=o(`h1`,m);t(m,g),t(g,r(`Accordion 手风琴`));let x=o(`p`,m);t(m,x),e(x,`text-sm mt-3 mb-3`),t(x,r(`Accordion 现在保留 Rue 原本的轻量视觉风格，但 API 不再只是静态包装。你可以继续用`));let N=o(`code`,x);t(x,N),t(N,r(`Accordion.Title`)),t(x,r(`和`));let P=o(`code`,x);t(x,P),t(P,r(`Accordion.Content`)),t(x,r(`组合单个面板，也可以直接用`));let F=o(`code`,x);t(x,F),t(F,r(`items`)),t(x,r(`走数据驱动，接入受控 key、多开、禁用和富标题信息。`));let I=o(`h2`,m);t(m,I),t(I,r(`何时使用`));let L=o(`ul`,m);t(m,L);let K=o(`li`,L);t(L,K),t(K,r(`需要 FAQ、设置说明、任务面板这类“标题 + 可折叠内容”的信息组织方式。`));let q=o(`li`,L);t(L,q),t(q,r(`需要在单开和多开之间切换，或把当前展开项接到页面状态里。`));let J=o(`li`,L);t(L,J),t(J,r(`需要在标题里补充状态、说明、标签，而不想为每个面板手写结构。`));let Y=o(`li`,L);t(L,Y),t(Y,r(`需要让浏览器能搜索折叠内容时，使用`));let X=o(`code`,Y);t(Y,X),t(X,r(`use="details"`)),t(Y,r(`。`));let Z=o(`div`,m);t(m,Z),e(Z,`not-prose my-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4`);let ee=i(`rue:list:start`),te=i(`rue:list:end`);t(Z,ee),t(Z,te);let ne=new Map;n(()=>{ne=_({items:H||[],getKey:(e,t)=>e.title,elements:ne,parent:Z,before:te,singleRoot:!0,trackIndex:!1,start:ee,renderItem:(c,l,u,p,m)=>{f(d(()=>{let l=a(),u=o(`div`,l);t(l,u),n(()=>{s(u,`key`,String(c.title))}),e(u,`card border border-base-300 bg-base-100 shadow-sm`);let d=o(`div`,u);t(u,d),e(d,`card-body gap-2 p-4`);let p=o(`div`,d);t(d,p),e(p,`text-xs uppercase tracking-[0.2em] text-base-content/50`),t(p,r(`Capability`));let m=o(`div`,d);t(d,m),e(m,`text-sm font-semibold`);let g=i(`rue:slot:anchor`);t(m,g),n(()=>{let e=c.title;h(()=>f(e,m,g))});let _=o(`p`,d);t(d,_),e(_,`m-0 text-sm opacity-70`);let v=i(`rue:slot:anchor`);return t(_,v),n(()=>{let e=c.desc;h(()=>f(e,_,v))}),l}),l,u)}})});let re=i(`rue:component:anchor`);t(m,re),n(()=>{let e=p(z,{title:`Accordion using radio inputs`,summary:`保留单开分组，同时额外开启 collapsible，方便在文档页里反复点按查看开合状态。`,tab:c,preview:()=>G(`accordion-radio-demo`,{collapsible:!0}),code:`<Accordion className="bg-base-100 border border-base-300" name="accordion-radio-demo" defaultOpen collapsible>
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
</Accordion>`});h(()=>f(e,m,re))});let ie=i(`rue:component:anchor`);t(m,ie),n(()=>{let e=p(z,{title:`Accordion using details`,summary:`保留 details 结构，适合需要原生语义和浏览器搜索能力的内容区。`,tab:l,preview:()=>G(`accordion-details-demo`,{use:`details`}),code:`<Accordion use="details" className="bg-base-100 border border-base-300" name="accordion-details-demo" defaultOpen>
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
</Accordion>`});h(()=>f(e,m,ie))});let ae=i(`rue:component:anchor`);t(m,ae),n(()=>{let e=p(z,{title:`Controlled active key`,summary:`受控模式同样支持 collapsible；点击已展开项时，activeKey 会回到 null。`,tab:v,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-4`,children:[b(`div`,{className:`flex flex-wrap gap-2`,children:j.map(e=>y(`button`,{className:`btn btn-sm ${k.value===e.key?`btn-primary`:`btn-ghost`}`,onClick:()=>{let t=k.value===e.key?null:e.key;k.value=t,A.value=t},children:[`切换 `,e.title]},e.key))}),y(`div`,{className:`grid gap-2 rounded-box border border-base-300 bg-base-200/40 p-3 text-sm`,children:[y(`div`,{children:[`当前 `,b(`code`,{children:`activeKey`}),`：`,b(`code`,{children:k.value??`null`})]}),y(`div`,{children:[`最近一次切换：`,b(`code`,{children:A.value??`null`})]})]}),b(R,{activeKey:k.value,collapsible:!0,icon:`arrow`,className:`bg-base-100 border border-base-300`,items:j,onChange:e=>{let t=Array.isArray(e)?e[0]:e;k.value=t??null,A.value=t??null}})]})}),code:`import { ref } from '@rue-js/rue'

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
/>`});h(()=>f(e,m,ae))});let oe=i(`rue:component:anchor`);t(m,oe),n(()=>{let e=p(z,{title:`Multiple open panels`,summary:`新增 multiple 与 defaultOpenKeys，可同时展开多个项；同一 API 也能配合 collapsible 做可收起单项。`,tab:S,preview:()=>y(`div`,{className:`grid gap-4 xl:grid-cols-[1.5fr_1fr]`,children:[b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-4`,children:[b(`div`,{className:`alert alert-soft`,children:b(`span`,{className:`text-sm`,children:`multiple 会把 radio 形态切到 checkbox 行为，适合筛选条件或调试面板。`})}),b(R,{multiple:!0,icon:`arrow`,className:`bg-base-100 border border-base-300`,defaultOpenKeys:[`latency`,`cache`],items:[{key:`latency`,title:`Latency budget`,description:`页面首屏与接口预算放在同一个地方追踪`,extra:`120ms`,content:`Track server timing, render budget and hydration cost together so regressions can be located quickly.`},{key:`cache`,title:`Cache strategy`,description:`缓存命中率和失效策略分开说明`,extra:`Warm`,content:`Document what can stay stale, what must be revalidated, and how to handle cache busting during deployments.`},{key:`rollback`,title:`Rollback checklist`,description:`保留快速回滚路径，避免线上排障时再找人`,extra:`Ops`,content:`Keep a minimal rollback playbook near the release notes so the on-call engineer can act without extra context switching.`}]})]})}),b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-4`,children:[y(`div`,{children:[b(`h3`,{className:`m-0 text-base font-semibold`,children:`Single but collapsible`}),y(`p`,{className:`mt-2 mb-0 text-sm opacity-70`,children:[`不想强制保留一个展开项时，可以给 children 模式加 `,b(`code`,{children:`collapsible`}),`。`]})]}),y(R,{collapsible:!0,defaultOpen:!0,className:`bg-base-100 border border-base-300`,icon:`plus`,children:[b(R.Title,{className:`font-semibold`,children:`Can I close the last open panel?`}),y(R.Content,{className:`text-sm opacity-80`,children:[`Yes. Set `,b(`code`,{children:`collapsible`}),` to allow toggling the current panel off instead of forcing one active item.`]})]})]})})]}),code:`<Accordion
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
</Accordion>`});h(()=>f(e,m,oe))});let se=i(`rue:component:anchor`);t(m,se),n(()=>{let e=p(z,{title:`Rich item metadata`,summary:`新增 description、extra 和 disabled，适合后台列表、规则说明和版本发布面板。`,tab:C,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body gap-4`,children:b(R,{collapsible:!0,icon:`arrow`,className:`bg-base-100 border border-base-300`,items:[{key:`review`,title:`Review dependencies`,description:`上线前再核对一次依赖差异和风险说明`,extra:b(`span`,{className:`badge badge-warning badge-outline`,children:`Review`}),open:!0,content:`Compare the dependency diff with the last release baseline, and record whether each update changes runtime behavior or only build tooling.`},{key:`announce`,title:`Prepare release notes`,description:`把用户可感知的变化浓缩成 changelog 和公告文案`,extra:b(`span`,{className:`badge badge-success badge-outline`,children:`Ready`}),content:`Write the changelog from the user perspective first, then attach migration hints or rollout notes only when they affect adoption.`},{key:`ops`,title:`Ops handoff`,description:`值班同学确认回滚路径与观测指标后才能执行`,extra:b(`span`,{className:`badge badge-ghost`,children:`Waiting`}),disabled:!0,content:`This item is intentionally disabled to show how a non-interactive operational gate can still stay visible in the stack.`}]})})}),code:`<Accordion
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
/>`});h(()=>f(e,m,se))});let ce=i(`rue:component:anchor`);t(m,ce),n(()=>{let e=p(z,{title:`Accordion with arrow icon`,summary:`保留 arrow 指示样式，并开启 collapsible，方便直接验证箭头开合反馈。`,tab:w,preview:()=>G(`accordion-arrow-demo`,{icon:`arrow`,collapsible:!0}),code:`<Accordion icon="arrow" className="bg-base-100 border border-base-300" name="accordion-arrow-demo" defaultOpen collapsible>
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
</Accordion>`});h(()=>f(e,m,ce))});let le=i(`rue:component:anchor`);t(m,le),n(()=>{let e=p(z,{title:`Accordion with plus/minus icon`,summary:`保留 plus/minus 方案，并开启 collapsible，方便直接验证开合反馈。`,tab:T,preview:()=>G(`accordion-plus-demo`,{icon:`plus`,collapsible:!0}),code:`<Accordion icon="plus" className="bg-base-100 border border-base-300" name="accordion-plus-demo" defaultOpen collapsible>
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
</Accordion>`});h(()=>f(e,m,le))});let ue=i(`rue:component:anchor`);t(m,ue),n(()=>{let e=p(z,{title:`Using Accordion and Join together`,summary:`保留 join 组合方式，并开启 collapsible，方便连续边框场景下反复验证开合。`,tab:E,preview:()=>b(`div`,{className:`join join-vertical bg-base-100`,children:V.map((e,t)=>y(R,{icon:`arrow`,collapsible:!0,className:`join-item border border-base-300`,name:`accordion-join-demo`,defaultOpen:t===0,children:[b(R.Title,{className:`font-semibold`,children:e.title}),b(R.Content,{className:`text-sm opacity-80`,children:e.content})]},`join-${e.key}`))}),code:`<div className="join join-vertical bg-base-100">
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
</div>`});h(()=>f(e,m,ue))});let de=i(`rue:component:anchor`);t(m,de),n(()=>{let e=p(z,{title:`Accordion using items array (radio)`,summary:`保留 items 数组写法，并开启 collapsible，方便直接验证数据驱动下的收起逻辑。`,tab:D,preview:()=>b(R,{collapsible:!0,className:`bg-base-100 border border-base-300`,name:`accordion-array-radio-demo`,items:V.map((e,t)=>({key:e.key,title:e.title,content:e.content,open:t===0}))}),code:`${M}

<Accordion
  collapsible
  className="bg-base-100 border border-base-300"
  name="accordion-array-radio-demo"
  items={items}
/>`});h(()=>f(e,m,de))});let fe=i(`rue:component:anchor`);t(m,fe),n(()=>{let e=p(z,{title:`Accordion using items array (details)`,summary:`保留原来的 details + items 组合；现在它也能继续叠加 description、extra 和 disabled。`,tab:O,preview:()=>b(R,{use:`details`,className:`bg-base-100 border border-base-300`,name:`accordion-array-details-demo`,items:V.map((e,t)=>({key:e.key,title:e.title,content:e.content,open:t===0}))}),code:`${M}

<Accordion
  use="details"
  className="bg-base-100 border border-base-300"
  name="accordion-array-details-demo"
  items={items}
/>`});h(()=>f(e,m,fe))});let Q=o(`h2`,m);t(m,Q),s(Q,`id`,`accordion-api`),t(Q,r(`API`));let pe=o(`p`,m);t(m,pe),t(pe,r(`Accordion 现在分成两套用法：children 模式适合局部排版，items 模式适合数据驱动和受控状态。 两套模式共用同一套视觉类名，因此迁移旧示例时通常只需要把结构收敛到更清晰的语义层。`));let me=o(`h3`,m);t(m,me),t(me,r(`Accordion Props`));let he=i(`rue:component:anchor`);t(m,he),n(()=>{let e=p(B,{rows:U});h(()=>f(e,m,he))});let $=o(`h3`,m);t(m,$),e($,`mt-6`),t($,r(`AccordionDataItem`));let ge=i(`rue:component:anchor`);return t(m,ge),n(()=>{let e=p(B,{rows:W});h(()=>f(e,m,ge))}),u})}),m,g),m})};export{K as default};