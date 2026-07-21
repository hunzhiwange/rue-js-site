import{Cn as e,Ct as t,Dt as n,Lt as r,Tt as i,dt as a,ft as o,mt as s,ot as c,pn as l,pt as u,st as d,tn as f,vn as p,wt as m}from"./context-8lXZvIn-.js";import{l as h,o as g,s as _,t as v}from"./vapor-runtime-ygJWVcNn.js";import{a as y,n as b}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as x}from"./Code-DhoWkRkB.js";import{n as S,t as C}from"./src-CCTNpCXV.js";import{t as w}from"./tabs-B1XdBEJF.js";import{r as T}from"./SidebarPlaygroundDesign-BbUFY3mM.js";var E=0,D=(e,t)=>e?t?`${e} ${t}`:e:t??``,O=e=>{let t=[];return e.forEach(e=>{t.some(t=>t===e)||t.push(e)}),t},k=(e,t)=>{let n=O(Array.isArray(e)?e:[]);return t?n:n.slice(0,1)},A=e=>e==null?[]:[e],j=(e,t)=>e.length===t.length&&e.every((e,n)=>e===t[n]),M=(e,t,n,r,i,a)=>k(r===void 0?t===void 0?i===void 0?n===void 0?e.filter(e=>e.open).map(e=>e.key):A(n):i:A(t):r,a),N=(e,t,n)=>n===`open`?!0:n===`close`?!1:typeof e==`boolean`?e:typeof t==`boolean`&&t,P=(e,t)=>t===`open`?`collapse-open`:t===`close`?`collapse-close`:e?`collapse-open`:`collapse-close`,F=(e,t)=>{let n=t?.getRootNode?.(),r=n&&typeof n.querySelectorAll==`function`?n:typeof document<`u`?document:null;return r?Array.from(r.querySelectorAll(`[data-rue-accordion-group]`)).filter(t=>t.dataset.rueAccordionGroup===e):[]},I=e=>Array.from(e.children).find(e=>e instanceof HTMLInputElement&&(e.type===`checkbox`||e.type===`radio`)),L=e=>Array.from(e.children).find(e=>e instanceof HTMLElement&&e.classList.contains(`collapse-title`)),R=(e,t,n)=>{if(!(e instanceof HTMLElement))return;e.classList.remove(`collapse-open`,`collapse-close`),e.classList.add(P(t,n));let r=I(e);r&&r.checked!==t&&(r.checked=t);let i=L(e);i&&i.setAttribute(`aria-expanded`,t?`true`:`false`)},z=(e,t,n,r,i)=>r?n?O([...e,t]):e.filter(e=>e!==t):n?[t]:i?[]:e.some(e=>e===t)?[...e]:[t],B=e=>e?.type===`radio`,V=e=>e.description==null&&e.extra==null?e.title:h(t=>{let n=u(`div`,t);i(n,`flex w-full items-start justify-between gap-3`);let r=u(`div`,n);d(n,r),i(r,`min-w-0 flex-1`);let s=u(`div`,r);d(r,s);let c=a(`rue:slot:anchor`);d(s,c),f(()=>{let t=e.title;p(()=>g(t,s,c))});let l=a(`rue:slot:anchor`);d(r,l),f(()=>{let t=e.description==null?``:h(()=>{let t=o(),n=u(`div`,t);d(t,n),f(()=>{i(n,D(`mt-1 text-xs opacity-70`,e.descriptionClassName))});let r=a(`rue:slot:anchor`);return d(n,r),f(()=>{let t=e.description;p(()=>g(t,n,r))}),t});p(()=>g(t,r,l))});let m=a(`rue:slot:anchor`);return d(n,m),f(()=>{let t=e.extra==null?``:h(()=>{let t=o(),n=u(`div`,t);d(t,n),f(()=>{i(n,D(`shrink-0 text-xs opacity-70`,e.extraClassName))});let r=a(`rue:slot:anchor`);return d(n,r),f(()=>{let t=e.extra;p(()=>g(t,n,r))}),t});p(()=>g(t,n,m))}),n}),H=Object.assign(s=>{let{normalizedItems:v,generatedName:x,uncontrolledSingleOpen:w,uncontrolledGroupOpenKeys:T,groupName:O,hasItems:L,isGroupControlled:H,getCurrentSingleOpen:U,getCurrentGroupOpenKeys:ee,getItemOpen:W,buildItemClassName:G,buildWrapperClassName:K,buildStaticWrapperClassName:q,syncItemsDom:J,syncSingleDom:Y,commitGroupChange:X,commitSingleChange:Z}=y(`useSetup:0:0`,()=>e(()=>{let e=s.items?.map((e,t)=>({...e,key:e.key??t,index:t}))??[],t=`rue-accordion-${E++}`,n=y(`ref:1:0`,()=>l(N(s.open,s.defaultOpen,s.force))),i=y(`ref:1:1`,()=>l(M(e,s.activeKey,s.defaultActiveKey,s.openKeys,s.defaultOpenKeys,s.multiple))),a=y(`computed:1:2`,()=>r(()=>s.name??t)),o=a,c=e.length>0,u=y(`computed:1:3`,()=>r(()=>s.openKeys!==void 0||s.activeKey!==void 0)),d=u,f=()=>s.force===`open`?!0:s.force===`close`?!1:s.open===void 0?n.value:!!s.open,p=()=>s.openKeys===void 0?s.activeKey===void 0?i.value:k(A(s.activeKey),s.multiple):k(s.openKeys,s.multiple),m=e=>{let t=e.force??s.force;return t===`open`||t!==`close`&&p().some(t=>t===e.key)},h=e=>{let t=e.icon??s.icon,n=e.force??s.force,r=D(`collapse`,P(m(e),n));return t===`arrow`&&(r+=` collapse-arrow`),t===`plus`&&(r+=` collapse-plus`),s.className&&(r+=` ${s.className}`),e.className&&(r+=` ${e.className}`),(s.disabled||e.disabled)&&(r+=` opacity-70`),r},g=()=>{let e=D(`collapse`,P(f(),s.force));return s.icon===`arrow`&&(e+=` collapse-arrow`),s.icon===`plus`&&(e+=` collapse-plus`),s.className&&(e+=` ${s.className}`),s.disabled&&(e+=` opacity-70`),e},_=()=>{let e=`collapse`;return s.icon===`arrow`&&(e+=` collapse-arrow`),s.icon===`plus`&&(e+=` collapse-plus`),s.className&&(e+=` ${s.className}`),s.disabled&&(e+=` opacity-70`),e},v=(t,n)=>{F(o.get(),n).forEach(n=>{let r=Number(n.dataset.rueAccordionIndex??-1),i=e[r];if(!i)return;let a=i.force??s.force,o=a===`open`||a!==`close`&&t.some(e=>e===i.key);n instanceof HTMLDetailsElement&&n.open!==o&&(n.open=o),R(n,o,a)})},b=e=>{F(o.get(),e).forEach(e=>{let t=e.dataset.rueAccordionForce??s.force,n=I(e);R(e,t===`open`?!0:t===`close`?!1:e instanceof HTMLDetailsElement?e.open:n?.checked===!0,t)})};return{normalizedItems:e,generatedName:t,uncontrolledSingleOpen:n,uncontrolledGroupOpenKeys:i,groupName:a,hasItems:c,isGroupControlled:u,getCurrentSingleOpen:f,getCurrentGroupOpenKeys:p,getItemOpen:m,buildItemClassName:h,buildWrapperClassName:g,buildStaticWrapperClassName:_,syncItemsDom:v,syncSingleDom:b,commitGroupChange:(e,t,n)=>{let r=e.force??s.force;if(s.disabled||e.disabled||r)return;let a=z(p(),e.key,t,s.multiple,s.collapsible),o=a.some(t=>t===e.key);d.get()||(j(i.value,a)||(i.value=a),v(a,n)),s.onChange&&s.onChange(s.multiple?a:a[0]??null,{key:e.key,index:e.index,open:o,item:e})},commitSingleChange:(e,t)=>{s.disabled||s.force||(s.open===void 0&&(n.value!==e&&(n.value=e),b(t)),s.onToggle&&s.onToggle(e,{key:o.get(),index:0,open:e}))}}}));if(L)return h(e=>{let t=o(),n=a(`rue:list:start`),r=a(`rue:list:end`);d(t,n),d(t,r);let i=new Map;return f(()=>{i=b({items:v||[],getKey:(e,t)=>e.key,elements:i,parent:n.parentNode,before:r,start:n,renderItem:(e,t,n,r,i)=>{_((()=>{let t=e.use??(s.use===void 0?`radio`:s.use),n=e.icon??s.icon,r=e.force??s.force,i=n===`arrow`&&(e.description!=null||e.extra!=null)?`after:top-6`:void 0,a=D(D(`collapse-title`,s.titleClassName),D(e.titleClassName,i)),o=D(D(`collapse-content`,s.contentClassName),e.contentClassName);if(t===`details`)return S(`details`,{className:G(e),open:W(e)?!0:void 0,"data-rue-accordion-group":O.get(),"data-rue-accordion-index":String(e.index),"data-rue-accordion-force":r,children:[C(`summary`,{className:a,"aria-expanded":W(e)?`true`:`false`,onClick:t=>{t.preventDefault(),X(e,!W(e),t.currentTarget)},children:V(e)}),C(`div`,{className:o,children:e.content})]},e.key);let c=s.multiple?`checkbox`:`radio`;return S(`div`,{className:G(e),"data-rue-accordion-group":O.get(),"data-rue-accordion-index":String(e.index),"data-rue-accordion-force":r,children:[C(`input`,{type:c,name:c===`radio`?O.get():void 0,checked:W(e),disabled:s.disabled||e.disabled||!!r,onClick:t=>{let n=t.currentTarget;!s.collapsible||!W(e)||!B(n)||(t.preventDefault(),n.checked=!1,X(e,!1,n))},onChange:t=>{let n=t.target.checked;X(e,n,t.currentTarget)}}),C(`div`,{className:a,"aria-expanded":W(e)?`true`:`false`,children:V(e)}),C(`div`,{className:o,children:e.content})]},e.key)})(),t,n,r)}})}),t});if((s.use===void 0?`radio`:s.use)===`details`){let e=s.open!==void 0||s.force!==void 0,n=N(s.open,s.defaultOpen,s.force);return h(r=>{let o=u(`details`,r);f(()=>{i(o,e?K():q())}),f(()=>{t(o,`name`,String(O.get()))}),f(()=>{t(o,`open`,String((e?U():n)?!0:void 0))}),f(()=>{t(o,`data-rue-accordion-group`,String(O.get()))}),f(()=>{t(o,`data-rue-accordion-force`,String(s.force))}),c(o,`toggle`,e=>{let t=e.currentTarget,n=t.open;if(s.disabled||s.force||s.open!==void 0){let e=U();t.open!==e&&(t.open=e),s.onToggle&&s.onToggle(e,{key:O.get(),index:0,open:e});return}s.onToggle&&s.onToggle(n,{key:O.get(),index:0,open:n})});let l=a(`rue:children:anchor`);return d(o,l),f(()=>{let e=s.children;p(()=>g(e,o,l))}),o})}return h(e=>{let r=u(`div`,e);f(()=>{i(r,K())}),f(()=>{t(r,`data-rue-accordion-group`,String(O.get()))}),f(()=>{t(r,`data-rue-accordion-force`,String(s.force))});let o=u(`input`,r);d(r,o),f(()=>{t(o,`type`,`radio`)}),f(()=>{t(o,`name`,String(O.get()))}),f(()=>{m(o,!!U())}),f(()=>{n(o,s.disabled||!!s.force)}),c(o,`click`,e=>{let t=e.currentTarget;!s.collapsible||!U()||!B(t)||(e.preventDefault(),t.checked=!1,Z(!1,t))}),c(o,`change`,e=>{let t=e.target.checked;Z(t,e.currentTarget)});let l=a(`rue:children:anchor`);return d(r,l),f(()=>{let e=s.children;p(()=>g(e,r,l))}),r})},{Title:n=>{let{mergedClassName:o}=y(`useSetup:0:0:dup1`,()=>e(()=>({mergedClassName:y(`computed:1:4`,()=>r(()=>D(`collapse-title`,n.className)))})));return(n.as===void 0?`div`:n.as)===`summary`?h(e=>{let t=u(`summary`,e);f(()=>{i(t,o.get())});let r=a(`rue:children:anchor`);return d(t,r),f(()=>{let e=n.children;p(()=>g(e,t,r))}),t}):(n.as===void 0?`div`:n.as)===`button`?h(e=>{let r=u(`button`,e);t(r,`type`,`button`),f(()=>{i(r,o.get())});let s=a(`rue:children:anchor`);return d(r,s),f(()=>{let e=n.children;p(()=>g(e,r,s))}),r}):h(e=>{let t=u(`div`,e);f(()=>{i(t,o.get())});let r=a(`rue:children:anchor`);return d(t,r),f(()=>{let e=n.children;p(()=>g(e,t,r))}),t})},Content:e=>h(t=>{let n=u(`div`,t);f(()=>{i(n,D(`collapse-content`,e.className))});let r=a(`rue:children:anchor`);return d(n,r),f(()=>{let t=e.children;p(()=>g(t,n,r))}),n})}),U=e=>h(t=>{let n=u(`div`,t);i(n,`component-preview not-prose text-base-content my-6 lg:my-12`);let r=u(`div`,n);d(n,r),i(r,`flex flex-wrap items-start justify-between gap-3`);let c=u(`div`,r);d(r,c);let l=u(`h2`,c);d(c,l),i(l,`component-preview-title mt-2 mb-1 text-lg font-semibold`),d(l,s(`# `));let m=a(`rue:slot:anchor`);d(l,m),f(()=>{let t=e.title;p(()=>g(t,l,m))});let _=a(`rue:slot:anchor`);d(c,_),f(()=>{let t=e.summary?h(()=>{let t=o(),n=u(`p`,t);d(t,n),i(n,`m-0 text-sm opacity-70`);let r=a(`rue:slot:anchor`);return d(n,r),f(()=>{let t=e.summary;p(()=>g(t,n,r))}),t}):``;p(()=>g(t,c,_))});let y=a(`rue:component:anchor`);d(n,y),f(()=>{let t=v(w,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`TSX代码`}],activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`});p(()=>g(t,n,y))});let b=a(`rue:slot:anchor`);return d(n,b),f(()=>{let t=e.tab.value===`preview`?e.preview():h(()=>{let t=o(),n=a(`rue:component:anchor`);return d(t,n),f(()=>{let r=v(x,{className:`mt-2`,lang:`tsx`,code:e.code});p(()=>g(r,t,n))}),t});p(()=>g(t,n,b))}),n}),ee=e=>h(n=>{let r=u(`div`,n);i(r,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let c=u(`table`,r);d(r,c),i(c,`table table-zebra`);let l=u(`thead`,c);d(c,l);let m=u(`tr`,l);d(l,m);let _=u(`th`,m);d(m,_),d(_,s(`属性`));let v=u(`th`,m);d(m,v),d(v,s(`说明`));let y=u(`th`,m);d(m,y),d(y,s(`类型`));let x=u(`th`,m);d(m,x),d(x,s(`默认值`));let S=u(`tbody`,c);d(c,S);let C=a(`rue:list:start`),w=a(`rue:list:end`);d(S,C),d(S,w);let T=new Map;return f(()=>{T=b({items:e.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,n,r,i,s)=>{g(h(()=>{let n=o(),r=u(`tr`,n);d(n,r),f(()=>{t(r,`key`,String(e.prop))});let i=u(`td`,r);d(r,i);let s=u(`code`,i);d(i,s);let c=a(`rue:slot:anchor`);d(s,c),f(()=>{let t=e.prop;p(()=>g(t,s,c))});let l=u(`td`,r);d(r,l);let m=a(`rue:slot:anchor`);d(l,m),f(()=>{let t=e.description;p(()=>g(t,l,m))});let h=u(`td`,r);d(r,h);let _=u(`code`,h);d(h,_);let v=a(`rue:slot:anchor`);d(_,v),f(()=>{let t=e.type;p(()=>g(t,_,v))});let y=u(`td`,r);d(r,y);let b=u(`code`,y);d(y,b);let x=a(`rue:slot:anchor`);return d(b,x),f(()=>{let t=e.defaultValue;p(()=>g(t,b,x))}),n}),n,r)}})}),r}),W=[{key:`account`,title:`How do I create an account?`,content:`Click the "Sign Up" button in the top right corner and follow the registration process.`},{key:`password`,title:`I forgot my password. What should I do?`,content:`Click on "Forgot Password" on the login page and follow the instructions sent to your email.`},{key:`profile`,title:`How do I update my profile information?`,content:`Go to "My Account" settings and select "Edit Profile" to make changes.`}],G=[{title:`Children 组合`,desc:`保持 Accordion.Title / Accordion.Content，用于局部定制标题和内容。`},{title:`Items 驱动`,desc:`直接用 items 写标题、描述、额外信息和禁用态，适合后台配置页。`},{title:`受控状态`,desc:`通过 activeKey、openKeys、onChange 接管当前展开项。`},{title:`两种语义`,desc:`默认 radio 风格适合单开；details 适合保持可搜索内容与原生语义。`}],K=[{prop:`activeKey`,description:`items 模式下的受控单开 key`,type:`string | number | null`,defaultValue:`-`},{prop:`className`,description:`追加到每个 Accordion 根节点的类名`,type:`string`,defaultValue:`-`},{prop:`collapsible`,description:`单开模式下允许把当前面板再次折叠`,type:`boolean`,defaultValue:`false`},{prop:`contentClassName`,description:`items 模式下统一追加到内容区域的类名`,type:`string`,defaultValue:`-`},{prop:`defaultActiveKey`,description:`items 模式下的非受控默认单开 key`,type:`string | number | null`,defaultValue:`-`},{prop:`defaultOpen`,description:`children 模式下的非受控默认展开状态`,type:`boolean`,defaultValue:`false`},{prop:`defaultOpenKeys`,description:`items 模式下的非受控默认多开 keys`,type:`Array<string | number>`,defaultValue:`-`},{prop:`disabled`,description:`禁用整个 Accordion 或当前 items 组的交互`,type:`boolean`,defaultValue:`false`},{prop:`force`,description:`强制视觉保持展开或收起，优先级高于 open 与 items 状态`,type:`'open' | 'close'`,defaultValue:`-`},{prop:`icon`,description:`标题右侧的内置指示样式`,type:`'arrow' | 'plus'`,defaultValue:`-`},{prop:`items`,description:`数据驱动渲染方式，适合 FAQ、配置面板和后台列表`,type:`AccordionDataItem[]`,defaultValue:`-`},{prop:`multiple`,description:`允许同时展开多个 items；radio 形态会切为 checkbox 行为`,type:`boolean`,defaultValue:`false`},{prop:`name`,description:`分组名；radio 与 details 语义都会复用这个名称`,type:`string`,defaultValue:`自动生成`},{prop:`onChange`,description:`items 模式下的开合回调；单开返回 key，多开返回 keys`,type:`(value, context) => void`,defaultValue:`-`},{prop:`onToggle`,description:`children 模式下的单项开合回调`,type:`(open, context) => void`,defaultValue:`-`},{prop:`open`,description:`children 模式下的受控展开状态`,type:`boolean`,defaultValue:`-`},{prop:`openKeys`,description:`items 模式下的受控多开 keys`,type:`Array<string | number>`,defaultValue:`-`},{prop:`titleClassName`,description:`items 模式下统一追加到标题区域的类名`,type:`string`,defaultValue:`-`},{prop:`use`,description:`切换 radio 或 details 两种结构输出`,type:`'radio' | 'details'`,defaultValue:`'radio'`}],q=[{prop:`className`,description:`追加到当前 item 根节点的类名`,type:`string`,defaultValue:`-`},{prop:`content`,description:`折叠区内容`,type:`any`,defaultValue:`-`},{prop:`contentClassName`,description:`内容区域类名`,type:`string`,defaultValue:`-`},{prop:`description`,description:`标题下的补充说明文字`,type:`any`,defaultValue:`-`},{prop:`descriptionClassName`,description:`说明文字类名`,type:`string`,defaultValue:`-`},{prop:`disabled`,description:`禁用当前 item 交互`,type:`boolean`,defaultValue:`false`},{prop:`extra`,description:`标题行右侧的补充信息，可用于状态标记或数字`,type:`any`,defaultValue:`-`},{prop:`extraClassName`,description:`额外信息区域类名`,type:`string`,defaultValue:`-`},{prop:`force`,description:`对单个 item 单独强制展开或收起`,type:`'open' | 'close'`,defaultValue:`-`},{prop:`icon`,description:`覆盖全局 icon 设置`,type:`'arrow' | 'plus'`,defaultValue:`-`},{prop:`key`,description:`推荐显式提供的稳定标识，用于 activeKey / openKeys 匹配`,type:`string | number`,defaultValue:`index`},{prop:`open`,description:`非受控模式下的默认展开状态`,type:`boolean`,defaultValue:`false`},{prop:`title`,description:`标题区域内容`,type:`any`,defaultValue:`-`},{prop:`titleClassName`,description:`标题区域类名`,type:`string`,defaultValue:`-`},{prop:`use`,description:`覆盖全局 use 设置`,type:`'radio' | 'details'`,defaultValue:`-`}],J=(e,t)=>h(n=>{let r=u(`div`,n);f(()=>{i(r,t?.containerClassName??`grid gap-3`)});let s=a(`rue:list:start`),c=a(`rue:list:end`);d(r,s),d(r,c);let l=new Map;return f(()=>{l=b({items:W||[],getKey:(t,n)=>`${e}-${t.key}`,elements:l,parent:s.parentNode,before:c,start:s,renderItem:(n,r,i,s,c)=>{let l=h(()=>{let e=o(),r=a(`rue:component:anchor`);d(e,r),f(()=>{let i=v(H.Title,{as:t?.use===`details`?`summary`:`div`,className:`font-semibold`,children:n.title});p(()=>g(i,e,r))});let i=a(`rue:component:anchor`);return d(e,i),g(v(H.Content,{className:`text-sm opacity-80`,children:n.content}),e,i),e});_(v(H,{key:`${e}-${n.key}`,name:e,use:t?.use,icon:t?.icon,collapsible:t?.collapsible,className:t?.itemClassName??`bg-base-100 border border-base-300`,defaultOpen:c===0,children:l}),r,i,s)}})}),r}),Y=()=>{let{tabRadio:n,tabDetails:r,tabControlled:c,tabMultiple:m,tabRich:_,tabArrow:x,tabPlus:w,tabJoin:E,tabArrayRadio:D,tabArrayDetails:O,controlledKey:k,lastChanged:A,roadmapItems:j,faqItemsCode:M}=y(`useSetup:0:0`,()=>e(()=>({tabRadio:y(`ref:1:0`,()=>l(`preview`)),tabDetails:y(`ref:1:1`,()=>l(`preview`)),tabControlled:y(`ref:1:2`,()=>l(`preview`)),tabMultiple:y(`ref:1:3`,()=>l(`preview`)),tabRich:y(`ref:1:4`,()=>l(`preview`)),tabArrow:y(`ref:1:5`,()=>l(`preview`)),tabPlus:y(`ref:1:6`,()=>l(`preview`)),tabJoin:y(`ref:1:7`,()=>l(`preview`)),tabArrayRadio:y(`ref:1:8`,()=>l(`preview`)),tabArrayDetails:y(`ref:1:9`,()=>l(`preview`)),controlledKey:y(`ref:1:10`,()=>l(`build`)),lastChanged:y(`ref:1:11`,()=>l(`build`)),roadmapItems:[{key:`plan`,title:`Plan backlog`,description:`先确定优先级，再安排设计和开发`,extra:`Sprint 12`,content:`Collect the most urgent requirements, align on edge cases, and freeze the delivery order before implementation starts.`},{key:`build`,title:`Build feature slice`,description:`把 API、交互和回归验证收敛到同一轮里`,extra:`In progress`,content:`Ship the smallest useful slice first, then expandDemos and tests around the verified behavior instead of guessing a broad design up front.`},{key:`ship`,title:`Ship and monitor`,description:`发布后持续看告警、埋点和反馈`,extra:`Ready`,content:`After release, keep an eye on error rate, support feedback and adoption signals so the next iteration has concrete evidence.`}],faqItemsCode:`const items = [
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
]`})));return h(e=>{let l=o(),y=a(`rue:component:anchor`);return d(l,y),g(v(T,{children:h(()=>{let e=o(),l=u(`div`,e);d(e,l),i(l,`max-w-none prose prose-sm md:prose-base`);let y=u(`h1`,l);d(l,y),d(y,s(`Accordion 手风琴`));let T=u(`p`,l);d(l,T),i(T,`text-sm mt-3 mb-3`),d(T,s(`Accordion 现在使用 Rue 基础的轻量视觉风格，但 API 不再只是静态包装。你可以用`));let N=u(`code`,T);d(T,N),d(N,s(`Accordion.Title`)),d(T,s(`和`));let P=u(`code`,T);d(T,P),d(P,s(`Accordion.Content`)),d(T,s(`组合单个面板，也可以直接用`));let F=u(`code`,T);d(T,F),d(F,s(`items`)),d(T,s(`走数据驱动，接入受控 key、多开、禁用和富标题信息。`));let I=u(`h2`,l);d(l,I),d(I,s(`何时使用`));let L=u(`ul`,l);d(l,L);let R=u(`li`,L);d(L,R),d(R,s(`需要 FAQ、设置说明、任务面板这类“标题 + 可折叠内容”的信息组织方式。`));let z=u(`li`,L);d(L,z),d(z,s(`需要在单开和多开之间切换，或把当前展开项接到页面状态里。`));let B=u(`li`,L);d(L,B),d(B,s(`需要在标题里补充状态、说明、标签，而不想为每个面板手写结构。`));let V=u(`li`,L);d(L,V),d(V,s(`需要让浏览器能搜索折叠内容时，使用`));let Y=u(`code`,V);d(V,Y),d(Y,s(`use="details"`)),d(V,s(`。`));let X=u(`div`,l);d(l,X),i(X,`not-prose my-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4`);let Z=a(`rue:list:start`),te=a(`rue:list:end`);d(X,Z),d(X,te);let ne=new Map;f(()=>{ne=b({items:G||[],getKey:(e,t)=>e.title,elements:ne,parent:X,before:te,singleRoot:!0,trackIndex:!1,start:Z,renderItem:(e,n,r,c,l)=>{g(h(()=>{let n=o(),r=u(`div`,n);d(n,r),f(()=>{t(r,`key`,String(e.title))}),i(r,`card border border-base-300 bg-base-100 shadow-sm`);let c=u(`div`,r);d(r,c),i(c,`card-body gap-2 p-4`);let l=u(`div`,c);d(c,l),i(l,`text-xs uppercase tracking-[0.2em] text-base-content/50`),d(l,s(`Capability`));let m=u(`div`,c);d(c,m),i(m,`text-sm font-semibold`);let h=a(`rue:slot:anchor`);d(m,h),f(()=>{let t=e.title;p(()=>g(t,m,h))});let _=u(`p`,c);d(c,_),i(_,`m-0 text-sm opacity-70`);let v=a(`rue:slot:anchor`);return d(_,v),f(()=>{let t=e.desc;p(()=>g(t,_,v))}),n}),n,r)}})});let re=a(`rue:component:anchor`);d(l,re),f(()=>{let e=v(U,{title:`Accordion using radio inputs`,summary:`展示单开分组，同时额外开启 collapsible，方便在文档页里反复点按查看开合状态。`,tab:n,preview:()=>J(`accordion-radio-demo`,{collapsible:!0}),code:`<Accordion className="bg-base-100 border border-base-300" name="accordion-radio-demo" defaultOpen collapsible>
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
</Accordion>`});p(()=>g(e,l,re))});let ie=a(`rue:component:anchor`);d(l,ie),f(()=>{let e=v(U,{title:`Accordion using details`,summary:`展示 details 结构，适合需要原生语义和浏览器搜索能力的内容区。`,tab:r,preview:()=>J(`accordion-details-demo`,{use:`details`}),code:`<Accordion use="details" className="bg-base-100 border border-base-300" name="accordion-details-demo" defaultOpen>
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
</Accordion>`});p(()=>g(e,l,ie))});let ae=a(`rue:component:anchor`);d(l,ae),f(()=>{let e=v(U,{title:`Controlled active key`,summary:`受控模式同样支持 collapsible；点击已展开项时，activeKey 会回到 null。`,tab:c,preview:()=>C(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body gap-4`,children:[C(`div`,{className:`flex flex-wrap gap-2`,children:j.map(e=>S(`button`,{className:`btn btn-sm ${k.value===e.key?`btn-primary`:`btn-ghost`}`,onClick:()=>{let t=k.value===e.key?null:e.key;k.value=t,A.value=t},children:[`切换 `,e.title]},e.key))}),S(`div`,{className:`grid gap-2 rounded-box border border-base-300 bg-base-200/40 p-3 text-sm`,children:[S(`div`,{children:[`当前 `,C(`code`,{children:`activeKey`}),`：`,C(`code`,{children:k.value??`null`})]}),S(`div`,{children:[`最近一次切换：`,C(`code`,{children:A.value??`null`})]})]}),C(H,{activeKey:k.value,collapsible:!0,icon:`arrow`,className:`bg-base-100 border border-base-300`,items:j,onChange:e=>{let t=Array.isArray(e)?e[0]:e;k.value=t??null,A.value=t??null}})]})}),code:`import { ref } from '@rue-js/rue'

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
    content: 'Ship the smallest useful slice first, then expandDemos and tests around the verified behavior instead of guessing a broad design up front.',
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
/>`});p(()=>g(e,l,ae))});let oe=a(`rue:component:anchor`);d(l,oe),f(()=>{let e=v(U,{title:`Multiple open panels`,summary:`multiple 与 defaultOpenKeys 可同时展开多个项；同一 API 也能配合 collapsible 做可收起单项。`,tab:m,preview:()=>S(`div`,{className:`grid gap-4 xl:grid-cols-[1.5fr_1fr]`,children:[C(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body gap-4`,children:[C(`div`,{className:`alert alert-soft`,children:C(`span`,{className:`text-sm`,children:`multiple 会把 radio 形态切到 checkbox 行为，适合筛选条件或调试面板。`})}),C(H,{multiple:!0,icon:`arrow`,className:`bg-base-100 border border-base-300`,defaultOpenKeys:[`latency`,`cache`],items:[{key:`latency`,title:`Latency budget`,description:`页面首屏与接口预算放在同一个地方追踪`,extra:`120ms`,content:`Track server timing, render budget and hydration cost together so regressions can be located quickly.`},{key:`cache`,title:`Cache strategy`,description:`缓存命中率和失效策略分开说明`,extra:`Warm`,content:`Document what can stay stale, what must be revalidated, and how to handle cache busting during deployments.`},{key:`rollback`,title:`Rollback checklist`,description:`提供快速回滚路径，避免线上排障时再找人`,extra:`Ops`,content:`Keep a minimal rollback playbook near the release notes so the on-call engineer can act without extra context switching.`}]})]})}),C(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body gap-4`,children:[S(`div`,{children:[C(`h3`,{className:`m-0 text-base font-semibold`,children:`Single but collapsible`}),S(`p`,{className:`mt-2 mb-0 text-sm opacity-70`,children:[`不想强制保持一个展开项时，可以给 children 模式加 `,C(`code`,{children:`collapsible`}),`。`]})]}),S(H,{collapsible:!0,defaultOpen:!0,className:`bg-base-100 border border-base-300`,icon:`plus`,children:[C(H.Title,{className:`font-semibold`,children:`Can I close the last open panel?`}),S(H.Content,{className:`text-sm opacity-80`,children:[`Yes. Set `,C(`code`,{children:`collapsible`}),` to allow toggling the current panel off instead of forcing one active item.`]})]})]})})]}),code:`<Accordion
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
      description: '提供快速回滚路径，避免线上排障时再找人',
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
</Accordion>`});p(()=>g(e,l,oe))});let se=a(`rue:component:anchor`);d(l,se),f(()=>{let e=v(U,{title:`Rich item metadata`,summary:`description、extra 和 disabled 适合后台列表、规则说明和版本发布面板。`,tab:_,preview:()=>C(`div`,{className:`card bg-base-100 shadow-sm`,children:C(`div`,{className:`card-body gap-4`,children:C(H,{collapsible:!0,icon:`arrow`,className:`bg-base-100 border border-base-300`,items:[{key:`review`,title:`Review dependencies`,description:`上线前再核对一次依赖差异和风险说明`,extra:C(`span`,{className:`badge badge-warning badge-outline`,children:`Review`}),open:!0,content:`Compare the dependency diff with the last release baseline, and record whether each update changes runtime behavior or only build tooling.`},{key:`announce`,title:`Prepare release notes`,description:`把用户可感知的变化浓缩成 changelog 和公告文案`,extra:C(`span`,{className:`badge badge-success badge-outline`,children:`Ready`}),content:`Write the changelog from the user perspective first, then attach migration hints or rollout notes only when they affect adoption.`},{key:`ops`,title:`Ops handoff`,description:`值班同学确认回滚路径与观测指标后才能执行`,extra:C(`span`,{className:`badge badge-ghost`,children:`Waiting`}),disabled:!0,content:`This item is intentionally disabled to show how a non-interactive operational gate can still stay visible in the stack.`}]})})}),code:`<Accordion
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
/>`});p(()=>g(e,l,se))});let ce=a(`rue:component:anchor`);d(l,ce),f(()=>{let e=v(U,{title:`Accordion with arrow icon`,summary:`展示 arrow 指示样式，并开启 collapsible，方便直接验证箭头开合反馈。`,tab:x,preview:()=>J(`accordion-arrow-demo`,{icon:`arrow`,collapsible:!0}),code:`<Accordion icon="arrow" className="bg-base-100 border border-base-300" name="accordion-arrow-demo" defaultOpen collapsible>
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
</Accordion>`});p(()=>g(e,l,ce))});let le=a(`rue:component:anchor`);d(l,le),f(()=>{let e=v(U,{title:`Accordion with plus/minus icon`,summary:`展示 plus/minus 方案，并开启 collapsible，方便直接验证开合反馈。`,tab:w,preview:()=>J(`accordion-plus-demo`,{icon:`plus`,collapsible:!0}),code:`<Accordion icon="plus" className="bg-base-100 border border-base-300" name="accordion-plus-demo" defaultOpen collapsible>
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
</Accordion>`});p(()=>g(e,l,le))});let ue=a(`rue:component:anchor`);d(l,ue),f(()=>{let e=v(U,{title:`Using Accordion and Join together`,summary:`展示 join 组合方式，并开启 collapsible，方便连续边框场景下反复验证开合。`,tab:E,preview:()=>C(`div`,{className:`join join-vertical bg-base-100`,children:W.map((e,t)=>S(H,{icon:`arrow`,collapsible:!0,className:`join-item border border-base-300`,name:`accordion-join-demo`,defaultOpen:t===0,children:[C(H.Title,{className:`font-semibold`,children:e.title}),C(H.Content,{className:`text-sm opacity-80`,children:e.content})]},`join-${e.key}`))}),code:`<div className="join join-vertical bg-base-100">
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
</div>`});p(()=>g(e,l,ue))});let de=a(`rue:component:anchor`);d(l,de),f(()=>{let e=v(U,{title:`Accordion using items array (radio)`,summary:`展示 items 数组写法，并开启 collapsible，方便直接验证数据驱动下的收起逻辑。`,tab:D,preview:()=>C(H,{collapsible:!0,className:`bg-base-100 border border-base-300`,name:`accordion-array-radio-demo`,items:W.map((e,t)=>({key:e.key,title:e.title,content:e.content,open:t===0}))}),code:`${M}

<Accordion
  collapsible
  className="bg-base-100 border border-base-300"
  name="accordion-array-radio-demo"
  items={items}
/>`});p(()=>g(e,l,de))});let fe=a(`rue:component:anchor`);d(l,fe),f(()=>{let e=v(U,{title:`Accordion using items array (details)`,summary:`展示 details + items 组合；现在它也能继续叠加 description、extra 和 disabled。`,tab:O,preview:()=>C(H,{use:`details`,className:`bg-base-100 border border-base-300`,name:`accordion-array-details-demo`,items:W.map((e,t)=>({key:e.key,title:e.title,content:e.content,open:t===0}))}),code:`${M}

<Accordion
  use="details"
  className="bg-base-100 border border-base-300"
  name="accordion-array-details-demo"
  items={items}
/>`});p(()=>g(e,l,fe))});let Q=u(`h2`,l);d(l,Q),t(Q,`id`,`accordion-api`),d(Q,s(`API`));let pe=u(`p`,l);d(l,pe),d(pe,s(`Accordion 现在分成两套用法：children 模式适合局部排版，items 模式适合数据驱动和受控状态。 两套模式共用同一套视觉类名，因此重组示例时通常只需要把结构收敛到更清晰的语义层。`));let me=u(`h3`,l);d(l,me),d(me,s(`Accordion Props`));let he=a(`rue:component:anchor`);d(l,he),f(()=>{let e=v(ee,{rows:K});p(()=>g(e,l,he))});let $=u(`h3`,l);d(l,$),i($,`mt-6`),d($,s(`AccordionDataItem`));let ge=a(`rue:component:anchor`);return d(l,ge),f(()=>{let e=v(ee,{rows:q});p(()=>g(e,l,ge))}),e})}),l,y),l})};export{Y as default};