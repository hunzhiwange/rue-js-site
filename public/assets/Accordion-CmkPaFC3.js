import{$ as e,Ht as t,J as n,Lt as r,Q as i,X as a,Xt as o,Z as s,at as c,c as l,gt as u,l as d,lt as f,ot as p,q as m,qt as h,s as g,st as _,t as v}from"./vapor-runtime-iQZthBPQ.js";import{a as y,n as b}from"./vapor-helpers-vapor-BjKHCvOa.js";import{a as x,i as S}from"./persistentSidebarPlayground-BfF7yM0K.js";import{t as C}from"./Code-CZqShVUj.js";import{t as w}from"./tabs-BBuGEPV7.js";import{r as T}from"./SidebarPlaygroundDesign-BcHYLGe4.js";var E=0,D=(e,t)=>e?t?`${e} ${t}`:e:t??``,O=e=>{let t=[];return e.forEach(e=>{t.some(t=>t===e)||t.push(e)}),t},k=(e,t)=>{let n=O(Array.isArray(e)?e:[]);return t?n:n.slice(0,1)},A=e=>e==null?[]:[e],j=(e,t)=>e.length===t.length?e.every((e,n)=>e===t[n]):!1,M=(e,t,n,r,i,a)=>k(r===void 0?t===void 0?i===void 0?n===void 0?e.filter(e=>e.open).map(e=>e.key):A(n):i:A(t):r,a),N=(e,t,n)=>n===`open`?!0:n===`close`?!1:typeof e==`boolean`?e:typeof t==`boolean`?t:!1,P=(e,t)=>t===`open`?`collapse-open`:t===`close`?`collapse-close`:e?`collapse-open`:`collapse-close`,F=(e,t)=>{let n=t?.getRootNode?.(),r=n&&typeof n.querySelectorAll==`function`?n:typeof document<`u`?document:null;return r?Array.from(r.querySelectorAll(`[data-rue-accordion-group]`)).filter(t=>t.dataset.rueAccordionGroup===e):[]},I=e=>Array.from(e.children).find(e=>e instanceof HTMLInputElement&&(e.type===`checkbox`||e.type===`radio`)),L=e=>Array.from(e.children).find(e=>e instanceof HTMLElement&&e.classList.contains(`collapse-title`)),R=(e,t,n)=>{if(!(e instanceof HTMLElement))return;e.classList.remove(`collapse-open`,`collapse-close`),e.classList.add(P(t,n));let r=I(e);r&&r.checked!==t&&(r.checked=t);let i=L(e);i&&i.setAttribute(`aria-expanded`,t?`true`:`false`)},z=(e,t,n,r,i)=>r?n?O([...e,t]):e.filter(e=>e!==t):n?[t]:i?[]:e.some(e=>e===t)?[...e]:[t],B=e=>e?.type===`radio`,V=e=>e.description==null&&e.extra==null?e.title:d(r=>{let c=i(`div`,r);_(c,`flex w-full items-start justify-between gap-3`);let l=i(`div`,c);n(c,l),_(l,`min-w-0 flex-1`);let u=i(`div`,l);n(l,u);let f=a(`rue:slot:anchor`);n(u,f),o(()=>{let n=e.title;t(()=>g(n,u,f))});let p=a(`rue:slot:anchor`);n(l,p),o(()=>{let r=e.description==null?``:d(()=>{let r=s(),c=i(`div`,r);n(r,c),o(()=>{_(c,D(`mt-1 text-xs opacity-70`,e.descriptionClassName))});let l=a(`rue:slot:anchor`);return n(c,l),o(()=>{let n=e.description;t(()=>g(n,c,l))}),r});t(()=>g(r,l,p))});let m=a(`rue:slot:anchor`);return n(c,m),o(()=>{let r=e.extra==null?``:d(()=>{let r=s(),c=i(`div`,r);n(r,c),o(()=>{_(c,D(`shrink-0 text-xs opacity-70`,e.extraClassName))});let l=a(`rue:slot:anchor`);return n(c,l),o(()=>{let n=e.extra;t(()=>g(n,c,l))}),r});t(()=>g(r,c,m))}),c}),H=Object.assign(e=>{let{normalizedItems:v,generatedName:C,uncontrolledSingleOpen:w,uncontrolledGroupOpenKeys:T,groupName:O,hasItems:L,isGroupControlled:H,getCurrentSingleOpen:U,getCurrentGroupOpenKeys:ee,getItemOpen:W,buildItemClassName:G,buildWrapperClassName:K,buildStaticWrapperClassName:q,syncItemsDom:J,syncSingleDom:Y,commitGroupChange:X,commitSingleChange:Z}=y(`useSetup:0:0`,()=>h(()=>{let t=e.items?.map((e,t)=>({...e,key:e.key??t,index:t}))??[],n=`rue-accordion-${E++}`,i=y(`ref:1:0`,()=>r(N(e.open,e.defaultOpen,e.force))),a=y(`ref:1:1`,()=>r(M(t,e.activeKey,e.defaultActiveKey,e.openKeys,e.defaultOpenKeys,e.multiple))),o=y(`computed:1:2`,()=>u(()=>e.name??n)),s=o,c=t.length>0,l=y(`computed:1:3`,()=>u(()=>e.openKeys!==void 0||e.activeKey!==void 0)),d=l,f=()=>e.force===`open`?!0:e.force===`close`?!1:e.open===void 0?i.value:!!e.open,p=()=>e.openKeys===void 0?e.activeKey===void 0?a.value:k(A(e.activeKey),e.multiple):k(e.openKeys,e.multiple),m=t=>{let n=t.force??e.force;return n===`open`?!0:n===`close`?!1:p().some(e=>e===t.key)},h=t=>{let n=t.icon??e.icon,r=t.force??e.force,i=D(`collapse`,P(m(t),r));return n===`arrow`&&(i+=` collapse-arrow`),n===`plus`&&(i+=` collapse-plus`),e.className&&(i+=` ${e.className}`),t.className&&(i+=` ${t.className}`),(e.disabled||t.disabled)&&(i+=` opacity-70`),i},g=()=>{let t=D(`collapse`,P(f(),e.force));return e.icon===`arrow`&&(t+=` collapse-arrow`),e.icon===`plus`&&(t+=` collapse-plus`),e.className&&(t+=` ${e.className}`),e.disabled&&(t+=` opacity-70`),t},_=()=>{let t=`collapse`;return e.icon===`arrow`&&(t+=` collapse-arrow`),e.icon===`plus`&&(t+=` collapse-plus`),e.className&&(t+=` ${e.className}`),e.disabled&&(t+=` opacity-70`),t},v=(n,r)=>{F(s.get(),r).forEach(r=>{let i=t[Number(r.dataset.rueAccordionIndex??-1)];if(!i)return;let a=i.force??e.force,o=a===`open`?!0:a===`close`?!1:n.some(e=>e===i.key);r instanceof HTMLDetailsElement&&r.open!==o&&(r.open=o),R(r,o,a)})},b=t=>{F(s.get(),t).forEach(t=>{let n=t.dataset.rueAccordionForce??e.force,r=I(t);R(t,n===`open`?!0:n===`close`?!1:t instanceof HTMLDetailsElement?t.open:r?.checked===!0,n)})};return{normalizedItems:t,generatedName:n,uncontrolledSingleOpen:i,uncontrolledGroupOpenKeys:a,groupName:o,hasItems:c,isGroupControlled:l,getCurrentSingleOpen:f,getCurrentGroupOpenKeys:p,getItemOpen:m,buildItemClassName:h,buildWrapperClassName:g,buildStaticWrapperClassName:_,syncItemsDom:v,syncSingleDom:b,commitGroupChange:(t,n,r)=>{let i=t.force??e.force;if(e.disabled||t.disabled||i)return;let o=z(p(),t.key,n,e.multiple,e.collapsible),s=o.some(e=>e===t.key);d.get()||(j(a.value,o)||(a.value=o),v(o,r)),e.onChange&&e.onChange(e.multiple?o:o[0]??null,{key:t.key,index:t.index,open:s,item:t})},commitSingleChange:(t,n)=>{e.disabled||e.force||(e.open===void 0&&(i.value!==t&&(i.value=t),b(n)),e.onToggle&&e.onToggle(t,{key:s.get(),index:0,open:t}))}}}));if(L)return d(t=>{let r=s(),i=a(`rue:list:start`),c=a(`rue:list:end`);n(r,i),n(r,c);let u=new Map;return o(()=>{u=b({items:v||[],getKey:(e,t)=>e.key,elements:u,parent:i.parentNode,before:c,start:i,renderItem:(t,n,r,i,a)=>{l((()=>{let n=t.use??(e.use===void 0?`radio`:e.use),r=t.icon??e.icon,i=t.force??e.force,a=r===`arrow`&&(t.description!=null||t.extra!=null)?`after:top-6`:void 0,o=D(D(`collapse-title`,e.titleClassName),D(t.titleClassName,a)),s=D(D(`collapse-content`,e.contentClassName),t.contentClassName);if(n===`details`)return x(`details`,{className:G(t),open:W(t)?!0:void 0,"data-rue-accordion-group":O.get(),"data-rue-accordion-index":String(t.index),"data-rue-accordion-force":i,children:[S(`summary`,{className:o,"aria-expanded":W(t)?`true`:`false`,onClick:e=>{e.preventDefault(),X(t,!W(t),e.currentTarget)},children:V(t)}),S(`div`,{className:s,children:t.content})]},t.key);let c=e.multiple?`checkbox`:`radio`;return x(`div`,{className:G(t),"data-rue-accordion-group":O.get(),"data-rue-accordion-index":String(t.index),"data-rue-accordion-force":i,children:[S(`input`,{type:c,name:c===`radio`?O.get():void 0,checked:W(t),disabled:e.disabled||t.disabled||!!i,onClick:n=>{let r=n.currentTarget;!e.collapsible||!W(t)||!B(r)||(n.preventDefault(),r.checked=!1,X(t,!1,r))},onChange:e=>{let n=e.target.checked;X(t,n,e.currentTarget)}}),S(`div`,{className:o,"aria-expanded":W(t)?`true`:`false`,children:V(t)}),S(`div`,{className:s,children:t.content})]},t.key)})(),n,r,i)}})}),r});if((e.use===void 0?`radio`:e.use)===`details`){let r=e.open!==void 0||e.force!==void 0,s=N(e.open,e.defaultOpen,e.force);return d(l=>{let u=i(`details`,l);o(()=>{_(u,r?K():q())}),o(()=>{c(u,`name`,String(O.get()))}),o(()=>{c(u,`open`,String((r?U():s)?!0:void 0))}),o(()=>{c(u,`data-rue-accordion-group`,String(O.get()))}),o(()=>{c(u,`data-rue-accordion-force`,String(e.force))}),m(u,`toggle`,t=>{let n=t.currentTarget,r=n.open;if(e.disabled||e.force||e.open!==void 0){let t=U();n.open!==t&&(n.open=t),e.onToggle&&e.onToggle(t,{key:O.get(),index:0,open:t});return}e.onToggle&&e.onToggle(r,{key:O.get(),index:0,open:r})});let d=a(`rue:children:anchor`);return n(u,d),o(()=>{let n=e.children;t(()=>g(n,u,d))}),u})}return d(r=>{let s=i(`div`,r);o(()=>{_(s,K())}),o(()=>{c(s,`data-rue-accordion-group`,String(O.get()))}),o(()=>{c(s,`data-rue-accordion-force`,String(e.force))});let l=i(`input`,s);n(s,l),o(()=>{c(l,`type`,`radio`)}),o(()=>{c(l,`name`,String(O.get()))}),o(()=>{p(l,!!U())}),o(()=>{f(l,e.disabled||!!e.force)}),m(l,`click`,t=>{let n=t.currentTarget;!e.collapsible||!U()||!B(n)||(t.preventDefault(),n.checked=!1,Z(!1,n))}),m(l,`change`,e=>{let t=e.target.checked;Z(t,e.currentTarget)});let u=a(`rue:children:anchor`);return n(s,u),o(()=>{let n=e.children;t(()=>g(n,s,u))}),s})},{Title:e=>{let{mergedClassName:r}=y(`useSetup:0:0:dup1`,()=>h(()=>({mergedClassName:y(`computed:1:4`,()=>u(()=>D(`collapse-title`,e.className)))})));return(e.as===void 0?`div`:e.as)===`summary`?d(s=>{let c=i(`summary`,s);o(()=>{_(c,r.get())});let l=a(`rue:children:anchor`);return n(c,l),o(()=>{let n=e.children;t(()=>g(n,c,l))}),c}):(e.as===void 0?`div`:e.as)===`button`?d(s=>{let l=i(`button`,s);c(l,`type`,`button`),o(()=>{_(l,r.get())});let u=a(`rue:children:anchor`);return n(l,u),o(()=>{let n=e.children;t(()=>g(n,l,u))}),l}):d(s=>{let c=i(`div`,s);o(()=>{_(c,r.get())});let l=a(`rue:children:anchor`);return n(c,l),o(()=>{let n=e.children;t(()=>g(n,c,l))}),c})},Content:e=>d(r=>{let s=i(`div`,r);o(()=>{_(s,D(`collapse-content`,e.className))});let c=a(`rue:children:anchor`);return n(s,c),o(()=>{let n=e.children;t(()=>g(n,s,c))}),s})}),U=r=>d(c=>{let l=i(`div`,c);_(l,`component-preview not-prose text-base-content my-6 lg:my-12`);let u=i(`div`,l);n(l,u),_(u,`flex flex-wrap items-start justify-between gap-3`);let f=i(`div`,u);n(u,f);let p=i(`h2`,f);n(f,p),_(p,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(p,e(`# `));let m=a(`rue:slot:anchor`);n(p,m),o(()=>{let e=r.title;t(()=>g(e,p,m))});let h=a(`rue:slot:anchor`);n(f,h),o(()=>{let e=r.summary?d(()=>{let e=s(),c=i(`p`,e);n(e,c),_(c,`m-0 text-sm opacity-70`);let l=a(`rue:slot:anchor`);return n(c,l),o(()=>{let e=r.summary;t(()=>g(e,c,l))}),e}):``;t(()=>g(e,f,h))});let y=a(`rue:component:anchor`);n(l,y),o(()=>{let e=v(w,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`TSX代码`}],activeKey:r.tab.value,onChange:e=>r.tab.value=e,className:`mb-3 mt-4`});t(()=>g(e,l,y))});let b=a(`rue:slot:anchor`);return n(l,b),o(()=>{let e=r.tab.value===`preview`?r.preview():d(()=>{let e=s(),i=a(`rue:component:anchor`);return n(e,i),o(()=>{let n=v(C,{className:`mt-2`,lang:`tsx`,code:r.code});t(()=>g(n,e,i))}),e});t(()=>g(e,l,b))}),l}),ee=r=>d(l=>{let u=i(`div`,l);_(u,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=i(`table`,u);n(u,f),_(f,`table table-zebra`);let p=i(`thead`,f);n(f,p);let m=i(`tr`,p);n(p,m);let h=i(`th`,m);n(m,h),n(h,e(`属性`));let v=i(`th`,m);n(m,v),n(v,e(`说明`));let y=i(`th`,m);n(m,y),n(y,e(`类型`));let x=i(`th`,m);n(m,x),n(x,e(`默认值`));let S=i(`tbody`,f);n(f,S);let C=a(`rue:list:start`),w=a(`rue:list:end`);n(S,C),n(S,w);let T=new Map;return o(()=>{T=b({items:r.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,r,l,u,f)=>{g(d(()=>{let r=s(),l=i(`tr`,r);n(r,l),o(()=>{c(l,`key`,String(e.prop))});let u=i(`td`,l);n(l,u);let d=i(`code`,u);n(u,d);let f=a(`rue:slot:anchor`);n(d,f),o(()=>{let n=e.prop;t(()=>g(n,d,f))});let p=i(`td`,l);n(l,p);let m=a(`rue:slot:anchor`);n(p,m),o(()=>{let n=e.description;t(()=>g(n,p,m))});let h=i(`td`,l);n(l,h);let _=i(`code`,h);n(h,_);let v=a(`rue:slot:anchor`);n(_,v),o(()=>{let n=e.type;t(()=>g(n,_,v))});let y=i(`td`,l);n(l,y);let b=i(`code`,y);n(y,b);let x=a(`rue:slot:anchor`);return n(b,x),o(()=>{let n=e.defaultValue;t(()=>g(n,b,x))}),r}),r,l)}})}),u}),W=[{key:`account`,title:`How do I create an account?`,content:`Click the "Sign Up" button in the top right corner and follow the registration process.`},{key:`password`,title:`I forgot my password. What should I do?`,content:`Click on "Forgot Password" on the login page and follow the instructions sent to your email.`},{key:`profile`,title:`How do I update my profile information?`,content:`Go to "My Account" settings and select "Edit Profile" to make changes.`}],G=[{title:`Children 组合`,desc:`保留 Accordion.Title / Accordion.Content，用于局部定制标题和内容。`},{title:`Items 驱动`,desc:`直接用 items 写标题、描述、额外信息和禁用态，适合后台配置页。`},{title:`受控状态`,desc:`通过 activeKey、openKeys、onChange 接管当前展开项。`},{title:`两种语义`,desc:`默认 radio 风格适合单开；details 适合保留可搜索内容与原生语义。`}],K=[{prop:`activeKey`,description:`items 模式下的受控单开 key`,type:`string | number | null`,defaultValue:`-`},{prop:`className`,description:`追加到每个 Accordion 根节点的类名`,type:`string`,defaultValue:`-`},{prop:`collapsible`,description:`单开模式下允许把当前面板再次折叠`,type:`boolean`,defaultValue:`false`},{prop:`contentClassName`,description:`items 模式下统一追加到内容区域的类名`,type:`string`,defaultValue:`-`},{prop:`defaultActiveKey`,description:`items 模式下的非受控默认单开 key`,type:`string | number | null`,defaultValue:`-`},{prop:`defaultOpen`,description:`children 模式下的非受控默认展开状态`,type:`boolean`,defaultValue:`false`},{prop:`defaultOpenKeys`,description:`items 模式下的非受控默认多开 keys`,type:`Array<string | number>`,defaultValue:`-`},{prop:`disabled`,description:`禁用整个 Accordion 或当前 items 组的交互`,type:`boolean`,defaultValue:`false`},{prop:`force`,description:`强制视觉保持展开或收起，优先级高于 open 与 items 状态`,type:`'open' | 'close'`,defaultValue:`-`},{prop:`icon`,description:`标题右侧的内置指示样式`,type:`'arrow' | 'plus'`,defaultValue:`-`},{prop:`items`,description:`数据驱动渲染方式，适合 FAQ、配置面板和后台列表`,type:`AccordionDataItem[]`,defaultValue:`-`},{prop:`multiple`,description:`允许同时展开多个 items；radio 形态会切为 checkbox 行为`,type:`boolean`,defaultValue:`false`},{prop:`name`,description:`分组名；radio 与 details 语义都会复用这个名称`,type:`string`,defaultValue:`自动生成`},{prop:`onChange`,description:`items 模式下的开合回调；单开返回 key，多开返回 keys`,type:`(value, context) => void`,defaultValue:`-`},{prop:`onToggle`,description:`children 模式下的单项开合回调`,type:`(open, context) => void`,defaultValue:`-`},{prop:`open`,description:`children 模式下的受控展开状态`,type:`boolean`,defaultValue:`-`},{prop:`openKeys`,description:`items 模式下的受控多开 keys`,type:`Array<string | number>`,defaultValue:`-`},{prop:`titleClassName`,description:`items 模式下统一追加到标题区域的类名`,type:`string`,defaultValue:`-`},{prop:`use`,description:`切换 radio 或 details 两种结构输出`,type:`'radio' | 'details'`,defaultValue:`'radio'`}],q=[{prop:`className`,description:`追加到当前 item 根节点的类名`,type:`string`,defaultValue:`-`},{prop:`content`,description:`折叠区内容`,type:`any`,defaultValue:`-`},{prop:`contentClassName`,description:`内容区域类名`,type:`string`,defaultValue:`-`},{prop:`description`,description:`标题下的补充说明文字`,type:`any`,defaultValue:`-`},{prop:`descriptionClassName`,description:`说明文字类名`,type:`string`,defaultValue:`-`},{prop:`disabled`,description:`禁用当前 item 交互`,type:`boolean`,defaultValue:`false`},{prop:`extra`,description:`标题行右侧的补充信息，可用于状态标记或数字`,type:`any`,defaultValue:`-`},{prop:`extraClassName`,description:`额外信息区域类名`,type:`string`,defaultValue:`-`},{prop:`force`,description:`对单个 item 单独强制展开或收起`,type:`'open' | 'close'`,defaultValue:`-`},{prop:`icon`,description:`覆盖全局 icon 设置`,type:`'arrow' | 'plus'`,defaultValue:`-`},{prop:`key`,description:`推荐显式提供的稳定标识，用于 activeKey / openKeys 匹配`,type:`string | number`,defaultValue:`index`},{prop:`open`,description:`非受控模式下的默认展开状态`,type:`boolean`,defaultValue:`false`},{prop:`title`,description:`标题区域内容`,type:`any`,defaultValue:`-`},{prop:`titleClassName`,description:`标题区域类名`,type:`string`,defaultValue:`-`},{prop:`use`,description:`覆盖全局 use 设置`,type:`'radio' | 'details'`,defaultValue:`-`}],J=(e,r)=>d(c=>{let u=i(`div`,c);o(()=>{_(u,r?.containerClassName??`grid gap-3`)});let f=a(`rue:list:start`),p=a(`rue:list:end`);n(u,f),n(u,p);let m=new Map;return o(()=>{m=b({items:W||[],getKey:(t,n)=>`${e}-${t.key}`,elements:m,parent:f.parentNode,before:p,start:f,renderItem:(i,c,u,f,p)=>{let m=d(()=>{let e=s(),c=a(`rue:component:anchor`);n(e,c),o(()=>{let n=v(H.Title,{as:r?.use===`details`?`summary`:`div`,className:`font-semibold`,children:i.title});t(()=>g(n,e,c))});let l=a(`rue:component:anchor`);return n(e,l),g(v(H.Content,{className:`text-sm opacity-80`,children:i.content}),e,l),e});l(v(H,{key:`${e}-${i.key}`,name:e,use:r?.use,icon:r?.icon,collapsible:r?.collapsible,className:r?.itemClassName??`bg-base-100 border border-base-300`,defaultOpen:p===0,children:m}),c,u,f)}})}),u}),Y=()=>{let{tabRadio:l,tabDetails:u,tabControlled:f,tabMultiple:p,tabRich:m,tabArrow:C,tabPlus:w,tabJoin:E,tabArrayRadio:D,tabArrayDetails:O,controlledKey:k,lastChanged:A,roadmapItems:j,faqItemsCode:M}=y(`useSetup:0:0`,()=>h(()=>({tabRadio:y(`ref:1:0`,()=>r(`preview`)),tabDetails:y(`ref:1:1`,()=>r(`preview`)),tabControlled:y(`ref:1:2`,()=>r(`preview`)),tabMultiple:y(`ref:1:3`,()=>r(`preview`)),tabRich:y(`ref:1:4`,()=>r(`preview`)),tabArrow:y(`ref:1:5`,()=>r(`preview`)),tabPlus:y(`ref:1:6`,()=>r(`preview`)),tabJoin:y(`ref:1:7`,()=>r(`preview`)),tabArrayRadio:y(`ref:1:8`,()=>r(`preview`)),tabArrayDetails:y(`ref:1:9`,()=>r(`preview`)),controlledKey:y(`ref:1:10`,()=>r(`build`)),lastChanged:y(`ref:1:11`,()=>r(`build`)),roadmapItems:[{key:`plan`,title:`Plan backlog`,description:`先确定优先级，再安排设计和开发`,extra:`Sprint 12`,content:`Collect the most urgent requirements, align on edge cases, and freeze the delivery order before implementation starts.`},{key:`build`,title:`Build feature slice`,description:`把 API、交互和回归验证收敛到同一轮里`,extra:`In progress`,content:`Ship the smallest useful slice first, then expand demos and tests around the verified behavior instead of guessing a broad design up front.`},{key:`ship`,title:`Ship and monitor`,description:`发布后持续看告警、埋点和反馈`,extra:`Ready`,content:`After release, keep an eye on error rate, support feedback and adoption signals so the next iteration has concrete evidence.`}],faqItemsCode:`const items = [
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
]`})));return d(r=>{let h=s(),y=a(`rue:component:anchor`);return n(h,y),g(v(T,{children:d(()=>{let r=s(),h=i(`div`,r);n(r,h),_(h,`max-w-none prose prose-sm md:prose-base`);let y=i(`h1`,h);n(h,y),n(y,e(`Accordion 手风琴`));let T=i(`p`,h);n(h,T),_(T,`text-sm mt-3 mb-3`),n(T,e(`Accordion 现在保留 Rue 原本的轻量视觉风格，但 API 不再只是静态包装。你可以继续用`));let N=i(`code`,T);n(T,N),n(N,e(`Accordion.Title`)),n(T,e(`和`));let P=i(`code`,T);n(T,P),n(P,e(`Accordion.Content`)),n(T,e(`组合单个面板，也可以直接用`));let F=i(`code`,T);n(T,F),n(F,e(`items`)),n(T,e(`走数据驱动，接入受控 key、多开、禁用和富标题信息。`));let I=i(`h2`,h);n(h,I),n(I,e(`何时使用`));let L=i(`ul`,h);n(h,L);let R=i(`li`,L);n(L,R),n(R,e(`需要 FAQ、设置说明、任务面板这类“标题 + 可折叠内容”的信息组织方式。`));let z=i(`li`,L);n(L,z),n(z,e(`需要在单开和多开之间切换，或把当前展开项接到页面状态里。`));let B=i(`li`,L);n(L,B),n(B,e(`需要在标题里补充状态、说明、标签，而不想为每个面板手写结构。`));let V=i(`li`,L);n(L,V),n(V,e(`需要让浏览器能搜索折叠内容时，使用`));let Y=i(`code`,V);n(V,Y),n(Y,e(`use="details"`)),n(V,e(`。`));let X=i(`div`,h);n(h,X),_(X,`not-prose my-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4`);let Z=a(`rue:list:start`),te=a(`rue:list:end`);n(X,Z),n(X,te);let ne=new Map;o(()=>{ne=b({items:G||[],getKey:(e,t)=>e.title,elements:ne,parent:X,before:te,singleRoot:!0,trackIndex:!1,start:Z,renderItem:(r,l,u,f,p)=>{g(d(()=>{let l=s(),u=i(`div`,l);n(l,u),o(()=>{c(u,`key`,String(r.title))}),_(u,`card border border-base-300 bg-base-100 shadow-sm`);let d=i(`div`,u);n(u,d),_(d,`card-body gap-2 p-4`);let f=i(`div`,d);n(d,f),_(f,`text-xs uppercase tracking-[0.2em] text-base-content/50`),n(f,e(`Capability`));let p=i(`div`,d);n(d,p),_(p,`text-sm font-semibold`);let m=a(`rue:slot:anchor`);n(p,m),o(()=>{let e=r.title;t(()=>g(e,p,m))});let h=i(`p`,d);n(d,h),_(h,`m-0 text-sm opacity-70`);let v=a(`rue:slot:anchor`);return n(h,v),o(()=>{let e=r.desc;t(()=>g(e,h,v))}),l}),l,u)}})});let re=a(`rue:component:anchor`);n(h,re),o(()=>{let e=v(U,{title:`Accordion using radio inputs`,summary:`保留单开分组，同时额外开启 collapsible，方便在文档页里反复点按查看开合状态。`,tab:l,preview:()=>J(`accordion-radio-demo`,{collapsible:!0}),code:`<Accordion className="bg-base-100 border border-base-300" name="accordion-radio-demo" defaultOpen collapsible>
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
</Accordion>`});t(()=>g(e,h,re))});let ie=a(`rue:component:anchor`);n(h,ie),o(()=>{let e=v(U,{title:`Accordion using details`,summary:`保留 details 结构，适合需要原生语义和浏览器搜索能力的内容区。`,tab:u,preview:()=>J(`accordion-details-demo`,{use:`details`}),code:`<Accordion use="details" className="bg-base-100 border border-base-300" name="accordion-details-demo" defaultOpen>
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
</Accordion>`});t(()=>g(e,h,ie))});let ae=a(`rue:component:anchor`);n(h,ae),o(()=>{let e=v(U,{title:`Controlled active key`,summary:`受控模式同样支持 collapsible；点击已展开项时，activeKey 会回到 null。`,tab:f,preview:()=>S(`div`,{className:`card bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body gap-4`,children:[S(`div`,{className:`flex flex-wrap gap-2`,children:j.map(e=>x(`button`,{className:`btn btn-sm ${k.value===e.key?`btn-primary`:`btn-ghost`}`,onClick:()=>{let t=k.value===e.key?null:e.key;k.value=t,A.value=t},children:[`切换 `,e.title]},e.key))}),x(`div`,{className:`grid gap-2 rounded-box border border-base-300 bg-base-200/40 p-3 text-sm`,children:[x(`div`,{children:[`当前 `,S(`code`,{children:`activeKey`}),`：`,S(`code`,{children:k.value??`null`})]}),x(`div`,{children:[`最近一次切换：`,S(`code`,{children:A.value??`null`})]})]}),S(H,{activeKey:k.value,collapsible:!0,icon:`arrow`,className:`bg-base-100 border border-base-300`,items:j,onChange:e=>{let t=Array.isArray(e)?e[0]:e;k.value=t??null,A.value=t??null}})]})}),code:`import { ref } from '@rue-js/rue'

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
/>`});t(()=>g(e,h,ae))});let oe=a(`rue:component:anchor`);n(h,oe),o(()=>{let e=v(U,{title:`Multiple open panels`,summary:`新增 multiple 与 defaultOpenKeys，可同时展开多个项；同一 API 也能配合 collapsible 做可收起单项。`,tab:p,preview:()=>x(`div`,{className:`grid gap-4 xl:grid-cols-[1.5fr_1fr]`,children:[S(`div`,{className:`card bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body gap-4`,children:[S(`div`,{className:`alert alert-soft`,children:S(`span`,{className:`text-sm`,children:`multiple 会把 radio 形态切到 checkbox 行为，适合筛选条件或调试面板。`})}),S(H,{multiple:!0,icon:`arrow`,className:`bg-base-100 border border-base-300`,defaultOpenKeys:[`latency`,`cache`],items:[{key:`latency`,title:`Latency budget`,description:`页面首屏与接口预算放在同一个地方追踪`,extra:`120ms`,content:`Track server timing, render budget and hydration cost together so regressions can be located quickly.`},{key:`cache`,title:`Cache strategy`,description:`缓存命中率和失效策略分开说明`,extra:`Warm`,content:`Document what can stay stale, what must be revalidated, and how to handle cache busting during deployments.`},{key:`rollback`,title:`Rollback checklist`,description:`保留快速回滚路径，避免线上排障时再找人`,extra:`Ops`,content:`Keep a minimal rollback playbook near the release notes so the on-call engineer can act without extra context switching.`}]})]})}),S(`div`,{className:`card bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body gap-4`,children:[x(`div`,{children:[S(`h3`,{className:`m-0 text-base font-semibold`,children:`Single but collapsible`}),x(`p`,{className:`mt-2 mb-0 text-sm opacity-70`,children:[`不想强制保留一个展开项时，可以给 children 模式加 `,S(`code`,{children:`collapsible`}),`。`]})]}),x(H,{collapsible:!0,defaultOpen:!0,className:`bg-base-100 border border-base-300`,icon:`plus`,children:[S(H.Title,{className:`font-semibold`,children:`Can I close the last open panel?`}),x(H.Content,{className:`text-sm opacity-80`,children:[`Yes. Set `,S(`code`,{children:`collapsible`}),` to allow toggling the current panel off instead of forcing one active item.`]})]})]})})]}),code:`<Accordion
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
</Accordion>`});t(()=>g(e,h,oe))});let se=a(`rue:component:anchor`);n(h,se),o(()=>{let e=v(U,{title:`Rich item metadata`,summary:`新增 description、extra 和 disabled，适合后台列表、规则说明和版本发布面板。`,tab:m,preview:()=>S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body gap-4`,children:S(H,{collapsible:!0,icon:`arrow`,className:`bg-base-100 border border-base-300`,items:[{key:`review`,title:`Review dependencies`,description:`上线前再核对一次依赖差异和风险说明`,extra:S(`span`,{className:`badge badge-warning badge-outline`,children:`Review`}),open:!0,content:`Compare the dependency diff with the last release baseline, and record whether each update changes runtime behavior or only build tooling.`},{key:`announce`,title:`Prepare release notes`,description:`把用户可感知的变化浓缩成 changelog 和公告文案`,extra:S(`span`,{className:`badge badge-success badge-outline`,children:`Ready`}),content:`Write the changelog from the user perspective first, then attach migration hints or rollout notes only when they affect adoption.`},{key:`ops`,title:`Ops handoff`,description:`值班同学确认回滚路径与观测指标后才能执行`,extra:S(`span`,{className:`badge badge-ghost`,children:`Waiting`}),disabled:!0,content:`This item is intentionally disabled to show how a non-interactive operational gate can still stay visible in the stack.`}]})})}),code:`<Accordion
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
/>`});t(()=>g(e,h,se))});let ce=a(`rue:component:anchor`);n(h,ce),o(()=>{let e=v(U,{title:`Accordion with arrow icon`,summary:`保留 arrow 指示样式，并开启 collapsible，方便直接验证箭头开合反馈。`,tab:C,preview:()=>J(`accordion-arrow-demo`,{icon:`arrow`,collapsible:!0}),code:`<Accordion icon="arrow" className="bg-base-100 border border-base-300" name="accordion-arrow-demo" defaultOpen collapsible>
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
</Accordion>`});t(()=>g(e,h,ce))});let le=a(`rue:component:anchor`);n(h,le),o(()=>{let e=v(U,{title:`Accordion with plus/minus icon`,summary:`保留 plus/minus 方案，并开启 collapsible，方便直接验证开合反馈。`,tab:w,preview:()=>J(`accordion-plus-demo`,{icon:`plus`,collapsible:!0}),code:`<Accordion icon="plus" className="bg-base-100 border border-base-300" name="accordion-plus-demo" defaultOpen collapsible>
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
</Accordion>`});t(()=>g(e,h,le))});let ue=a(`rue:component:anchor`);n(h,ue),o(()=>{let e=v(U,{title:`Using Accordion and Join together`,summary:`保留 join 组合方式，并开启 collapsible，方便连续边框场景下反复验证开合。`,tab:E,preview:()=>S(`div`,{className:`join join-vertical bg-base-100`,children:W.map((e,t)=>x(H,{icon:`arrow`,collapsible:!0,className:`join-item border border-base-300`,name:`accordion-join-demo`,defaultOpen:t===0,children:[S(H.Title,{className:`font-semibold`,children:e.title}),S(H.Content,{className:`text-sm opacity-80`,children:e.content})]},`join-${e.key}`))}),code:`<div className="join join-vertical bg-base-100">
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
</div>`});t(()=>g(e,h,ue))});let de=a(`rue:component:anchor`);n(h,de),o(()=>{let e=v(U,{title:`Accordion using items array (radio)`,summary:`保留 items 数组写法，并开启 collapsible，方便直接验证数据驱动下的收起逻辑。`,tab:D,preview:()=>S(H,{collapsible:!0,className:`bg-base-100 border border-base-300`,name:`accordion-array-radio-demo`,items:W.map((e,t)=>({key:e.key,title:e.title,content:e.content,open:t===0}))}),code:`${M}

<Accordion
  collapsible
  className="bg-base-100 border border-base-300"
  name="accordion-array-radio-demo"
  items={items}
/>`});t(()=>g(e,h,de))});let fe=a(`rue:component:anchor`);n(h,fe),o(()=>{let e=v(U,{title:`Accordion using items array (details)`,summary:`保留原来的 details + items 组合；现在它也能继续叠加 description、extra 和 disabled。`,tab:O,preview:()=>S(H,{use:`details`,className:`bg-base-100 border border-base-300`,name:`accordion-array-details-demo`,items:W.map((e,t)=>({key:e.key,title:e.title,content:e.content,open:t===0}))}),code:`${M}

<Accordion
  use="details"
  className="bg-base-100 border border-base-300"
  name="accordion-array-details-demo"
  items={items}
/>`});t(()=>g(e,h,fe))});let Q=i(`h2`,h);n(h,Q),c(Q,`id`,`accordion-api`),n(Q,e(`API`));let pe=i(`p`,h);n(h,pe),n(pe,e(`Accordion 现在分成两套用法：children 模式适合局部排版，items 模式适合数据驱动和受控状态。 两套模式共用同一套视觉类名，因此迁移旧示例时通常只需要把结构收敛到更清晰的语义层。`));let me=i(`h3`,h);n(h,me),n(me,e(`Accordion Props`));let he=a(`rue:component:anchor`);n(h,he),o(()=>{let e=v(ee,{rows:K});t(()=>g(e,h,he))});let $=i(`h3`,h);n(h,$),_($,`mt-6`),n($,e(`AccordionDataItem`));let ge=a(`rue:component:anchor`);return n(h,ge),o(()=>{let e=v(ee,{rows:q});t(()=>g(e,h,ge))}),r})}),h,y),h})};export{Y as default};