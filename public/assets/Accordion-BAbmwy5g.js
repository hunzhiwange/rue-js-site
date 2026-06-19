import{$ as e,Q as t,Qt as n,Wt as r,X as i,Y as a,Yt as o,ct as s,dt as c,et as l,l as u,lt as d,o as f,s as p,st as m,t as h,tt as g,vt as _,zt as v}from"./vapor-runtime-CXIalONM.js";import{a as y,n as b}from"./vapor-helpers-vapor-CoXKrGmY.js";import{a as x,i as S}from"./persistentSidebarPlayground-DBDp2zjv.js";import{t as C}from"./Code-BIscIyEp.js";import{t as w}from"./tabs-CZWMQq5i.js";import{r as T}from"./SidebarPlaygroundDesign-CsC_YS7V.js";var E=0,D=(e,t)=>e?t?`${e} ${t}`:e:t??``,O=e=>{let t=[];return e.forEach(e=>{t.some(t=>t===e)||t.push(e)}),t},k=(e,t)=>{let n=O(Array.isArray(e)?e:[]);return t?n:n.slice(0,1)},A=e=>e==null?[]:[e],j=(e,t)=>e.length===t.length?e.every((e,n)=>e===t[n]):!1,M=(e,t,n,r,i,a)=>k(r===void 0?t===void 0?i===void 0?n===void 0?e.filter(e=>e.open).map(e=>e.key):A(n):i:A(t):r,a),N=(e,t,n)=>n===`open`?!0:n===`close`?!1:typeof e==`boolean`?e:typeof t==`boolean`?t:!1,P=(e,t)=>t===`open`?`collapse-open`:t===`close`?`collapse-close`:e?`collapse-open`:`collapse-close`,F=(e,t)=>{let n=t?.getRootNode?.(),r=n&&typeof n.querySelectorAll==`function`?n:typeof document<`u`?document:null;return r?Array.from(r.querySelectorAll(`[data-rue-accordion-group]`)).filter(t=>t.dataset.rueAccordionGroup===e):[]},I=e=>Array.from(e.children).find(e=>e instanceof HTMLInputElement&&(e.type===`checkbox`||e.type===`radio`)),L=e=>Array.from(e.children).find(e=>e instanceof HTMLElement&&e.classList.contains(`collapse-title`)),R=(e,t,n)=>{if(!(e instanceof HTMLElement))return;e.classList.remove(`collapse-open`,`collapse-close`),e.classList.add(P(t,n));let r=I(e);r&&r.checked!==t&&(r.checked=t);let i=L(e);i&&i.setAttribute(`aria-expanded`,t?`true`:`false`)},z=(e,t,n,r,i)=>r?n?O([...e,t]):e.filter(e=>e!==t):n?[t]:i?[]:e.some(e=>e===t)?[...e]:[t],B=e=>e?.type===`radio`,V=a=>a.description==null&&a.extra==null?a.title:u(o=>{let s=l(`div`,o);d(s,`flex w-full items-start justify-between gap-3`);let c=l(`div`,s);i(s,c),d(c,`min-w-0 flex-1`);let p=l(`div`,c);i(c,p);let m=t(`rue:slot:anchor`);i(p,m),n(()=>{let e=a.title;r(()=>f(e,p,m))});let h=t(`rue:slot:anchor`);i(c,h),n(()=>{let o=a.description==null?``:u(()=>{let o=e(),s=l(`div`,o);i(o,s),n(()=>{d(s,D(`mt-1 text-xs opacity-70`,a.descriptionClassName))});let c=t(`rue:slot:anchor`);return i(s,c),n(()=>{let e=a.description;r(()=>f(e,s,c))}),o});r(()=>f(o,c,h))});let g=t(`rue:slot:anchor`);return i(s,g),n(()=>{let o=a.extra==null?``:u(()=>{let o=e(),s=l(`div`,o);i(o,s),n(()=>{d(s,D(`shrink-0 text-xs opacity-70`,a.extraClassName))});let c=t(`rue:slot:anchor`);return i(s,c),n(()=>{let e=a.extra;r(()=>f(e,s,c))}),o});r(()=>f(o,s,g))}),s}),H=Object.assign(h=>{let{normalizedItems:g,generatedName:C,uncontrolledSingleOpen:w,uncontrolledGroupOpenKeys:T,groupName:O,hasItems:L,isGroupControlled:H,getCurrentSingleOpen:U,getCurrentGroupOpenKeys:ee,getItemOpen:W,buildItemClassName:G,buildWrapperClassName:K,buildStaticWrapperClassName:q,syncItemsDom:J,syncSingleDom:Y,commitGroupChange:X,commitSingleChange:Z}=y(`useSetup:0:0`,()=>o(()=>{let e=h.items?.map((e,t)=>({...e,key:e.key??t,index:t}))??[],t=`rue-accordion-${E++}`,n=y(`ref:1:0`,()=>v(N(h.open,h.defaultOpen,h.force))),r=y(`ref:1:1`,()=>v(M(e,h.activeKey,h.defaultActiveKey,h.openKeys,h.defaultOpenKeys,h.multiple))),i=y(`computed:1:2`,()=>_(()=>h.name??t)),a=i,o=e.length>0,s=y(`computed:1:3`,()=>_(()=>h.openKeys!==void 0||h.activeKey!==void 0)),c=s,l=()=>h.force===`open`?!0:h.force===`close`?!1:h.open===void 0?n.value:!!h.open,u=()=>h.openKeys===void 0?h.activeKey===void 0?r.value:k(A(h.activeKey),h.multiple):k(h.openKeys,h.multiple),d=e=>{let t=e.force??h.force;return t===`open`?!0:t===`close`?!1:u().some(t=>t===e.key)},f=e=>{let t=e.icon??h.icon,n=e.force??h.force,r=D(`collapse`,P(d(e),n));return t===`arrow`&&(r+=` collapse-arrow`),t===`plus`&&(r+=` collapse-plus`),h.className&&(r+=` ${h.className}`),e.className&&(r+=` ${e.className}`),(h.disabled||e.disabled)&&(r+=` opacity-70`),r},p=()=>{let e=D(`collapse`,P(l(),h.force));return h.icon===`arrow`&&(e+=` collapse-arrow`),h.icon===`plus`&&(e+=` collapse-plus`),h.className&&(e+=` ${h.className}`),h.disabled&&(e+=` opacity-70`),e},m=()=>{let e=`collapse`;return h.icon===`arrow`&&(e+=` collapse-arrow`),h.icon===`plus`&&(e+=` collapse-plus`),h.className&&(e+=` ${h.className}`),h.disabled&&(e+=` opacity-70`),e},g=(t,n)=>{F(a.get(),n).forEach(n=>{let r=e[Number(n.dataset.rueAccordionIndex??-1)];if(!r)return;let i=r.force??h.force,a=i===`open`?!0:i===`close`?!1:t.some(e=>e===r.key);n instanceof HTMLDetailsElement&&n.open!==a&&(n.open=a),R(n,a,i)})},b=e=>{F(a.get(),e).forEach(e=>{let t=e.dataset.rueAccordionForce??h.force,n=I(e);R(e,t===`open`?!0:t===`close`?!1:e instanceof HTMLDetailsElement?e.open:n?.checked===!0,t)})};return{normalizedItems:e,generatedName:t,uncontrolledSingleOpen:n,uncontrolledGroupOpenKeys:r,groupName:i,hasItems:o,isGroupControlled:s,getCurrentSingleOpen:l,getCurrentGroupOpenKeys:u,getItemOpen:d,buildItemClassName:f,buildWrapperClassName:p,buildStaticWrapperClassName:m,syncItemsDom:g,syncSingleDom:b,commitGroupChange:(e,t,n)=>{let i=e.force??h.force;if(h.disabled||e.disabled||i)return;let a=z(u(),e.key,t,h.multiple,h.collapsible),o=a.some(t=>t===e.key);c.get()||(j(r.value,a)||(r.value=a),g(a,n)),h.onChange&&h.onChange(h.multiple?a:a[0]??null,{key:e.key,index:e.index,open:o,item:e})},commitSingleChange:(e,t)=>{h.disabled||h.force||(h.open===void 0&&(n.value!==e&&(n.value=e),b(t)),h.onToggle&&h.onToggle(e,{key:a.get(),index:0,open:e}))}}}));if(L)return u(r=>{let a=e(),o=t(`rue:list:start`),s=t(`rue:list:end`);i(a,o),i(a,s);let c=new Map;return n(()=>{c=b({items:g||[],getKey:(e,t)=>e.key,elements:c,parent:o.parentNode,before:s,start:o,renderItem:(e,t,n,r,i)=>{p((()=>{let t=e.use??(h.use===void 0?`radio`:h.use),n=e.icon??h.icon,r=e.force??h.force,i=n===`arrow`&&(e.description!=null||e.extra!=null)?`after:top-6`:void 0,a=D(D(`collapse-title`,h.titleClassName),D(e.titleClassName,i)),o=D(D(`collapse-content`,h.contentClassName),e.contentClassName);if(t===`details`)return x(`details`,{className:G(e),open:W(e)?!0:void 0,"data-rue-accordion-group":O.get(),"data-rue-accordion-index":String(e.index),"data-rue-accordion-force":r,children:[S(`summary`,{className:a,"aria-expanded":W(e)?`true`:`false`,onClick:t=>{t.preventDefault(),X(e,!W(e),t.currentTarget)},children:V(e)}),S(`div`,{className:o,children:e.content})]},e.key);let s=h.multiple?`checkbox`:`radio`;return x(`div`,{className:G(e),"data-rue-accordion-group":O.get(),"data-rue-accordion-index":String(e.index),"data-rue-accordion-force":r,children:[S(`input`,{type:s,name:s===`radio`?O.get():void 0,checked:W(e),disabled:h.disabled||e.disabled||!!r,onClick:t=>{let n=t.currentTarget;!h.collapsible||!W(e)||!B(n)||(t.preventDefault(),n.checked=!1,X(e,!1,n))},onChange:t=>{let n=t.target.checked;X(e,n,t.currentTarget)}}),S(`div`,{className:a,"aria-expanded":W(e)?`true`:`false`,children:V(e)}),S(`div`,{className:o,children:e.content})]},e.key)})(),t,n,r)}})}),a});if((h.use===void 0?`radio`:h.use)===`details`){let e=h.open!==void 0||h.force!==void 0,o=N(h.open,h.defaultOpen,h.force);return u(s=>{let c=l(`details`,s);n(()=>{d(c,e?K():q())}),n(()=>{m(c,`name`,String(O.get()))}),n(()=>{m(c,`open`,String((e?U():o)?!0:void 0))}),n(()=>{m(c,`data-rue-accordion-group`,String(O.get()))}),n(()=>{m(c,`data-rue-accordion-force`,String(h.force))}),a(c,`toggle`,e=>{let t=e.currentTarget,n=t.open;if(h.disabled||h.force||h.open!==void 0){let e=U();t.open!==e&&(t.open=e),h.onToggle&&h.onToggle(e,{key:O.get(),index:0,open:e});return}h.onToggle&&h.onToggle(n,{key:O.get(),index:0,open:n})});let u=t(`rue:children:anchor`);return i(c,u),n(()=>{let e=h.children;r(()=>f(e,c,u))}),c})}return u(e=>{let o=l(`div`,e);n(()=>{d(o,K())}),n(()=>{m(o,`data-rue-accordion-group`,String(O.get()))}),n(()=>{m(o,`data-rue-accordion-force`,String(h.force))});let u=l(`input`,o);i(o,u),n(()=>{m(u,`type`,`radio`)}),n(()=>{m(u,`name`,String(O.get()))}),n(()=>{s(u,!!U())}),n(()=>{c(u,h.disabled||!!h.force)}),a(u,`click`,e=>{let t=e.currentTarget;!h.collapsible||!U()||!B(t)||(e.preventDefault(),t.checked=!1,Z(!1,t))}),a(u,`change`,e=>{let t=e.target.checked;Z(t,e.currentTarget)});let p=t(`rue:children:anchor`);return i(o,p),n(()=>{let e=h.children;r(()=>f(e,o,p))}),o})},{Title:e=>{let{mergedClassName:a}=y(`useSetup:0:0:dup1`,()=>o(()=>({mergedClassName:y(`computed:1:4`,()=>_(()=>D(`collapse-title`,e.className)))})));return(e.as===void 0?`div`:e.as)===`summary`?u(o=>{let s=l(`summary`,o);n(()=>{d(s,a.get())});let c=t(`rue:children:anchor`);return i(s,c),n(()=>{let t=e.children;r(()=>f(t,s,c))}),s}):(e.as===void 0?`div`:e.as)===`button`?u(o=>{let s=l(`button`,o);m(s,`type`,`button`),n(()=>{d(s,a.get())});let c=t(`rue:children:anchor`);return i(s,c),n(()=>{let t=e.children;r(()=>f(t,s,c))}),s}):u(o=>{let s=l(`div`,o);n(()=>{d(s,a.get())});let c=t(`rue:children:anchor`);return i(s,c),n(()=>{let t=e.children;r(()=>f(t,s,c))}),s})},Content:e=>u(a=>{let o=l(`div`,a);n(()=>{d(o,D(`collapse-content`,e.className))});let s=t(`rue:children:anchor`);return i(o,s),n(()=>{let t=e.children;r(()=>f(t,o,s))}),o})}),U=a=>u(o=>{let s=l(`div`,o);d(s,`component-preview not-prose text-base-content my-6 lg:my-12`);let c=l(`div`,s);i(s,c),d(c,`flex flex-wrap items-start justify-between gap-3`);let p=l(`div`,c);i(c,p);let m=l(`h2`,p);i(p,m),d(m,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(m,g(`# `));let _=t(`rue:slot:anchor`);i(m,_),n(()=>{let e=a.title;r(()=>f(e,m,_))});let v=t(`rue:slot:anchor`);i(p,v),n(()=>{let o=a.summary?u(()=>{let o=e(),s=l(`p`,o);i(o,s),d(s,`m-0 text-sm opacity-70`);let c=t(`rue:slot:anchor`);return i(s,c),n(()=>{let e=a.summary;r(()=>f(e,s,c))}),o}):``;r(()=>f(o,p,v))});let y=t(`rue:component:anchor`);i(s,y),n(()=>{let e=h(w,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`TSX代码`}],activeKey:a.tab.value,onChange:e=>a.tab.value=e,className:`mb-3 mt-4`});r(()=>f(e,s,y))});let b=t(`rue:slot:anchor`);return i(s,b),n(()=>{let o=a.tab.value===`preview`?a.preview():u(()=>{let o=e(),s=t(`rue:component:anchor`);return i(o,s),n(()=>{let e=h(C,{className:`mt-2`,lang:`tsx`,code:a.code});r(()=>f(e,o,s))}),o});r(()=>f(o,s,b))}),s}),ee=a=>u(o=>{let s=l(`div`,o);d(s,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let c=l(`table`,s);i(s,c),d(c,`table table-zebra`);let p=l(`thead`,c);i(c,p);let h=l(`tr`,p);i(p,h);let _=l(`th`,h);i(h,_),i(_,g(`属性`));let v=l(`th`,h);i(h,v),i(v,g(`说明`));let y=l(`th`,h);i(h,y),i(y,g(`类型`));let x=l(`th`,h);i(h,x),i(x,g(`默认值`));let S=l(`tbody`,c);i(c,S);let C=t(`rue:list:start`),w=t(`rue:list:end`);i(S,C),i(S,w);let T=new Map;return n(()=>{T=b({items:a.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(a,o,s,c,d)=>{f(u(()=>{let o=e(),s=l(`tr`,o);i(o,s),n(()=>{m(s,`key`,String(a.prop))});let c=l(`td`,s);i(s,c);let u=l(`code`,c);i(c,u);let d=t(`rue:slot:anchor`);i(u,d),n(()=>{let e=a.prop;r(()=>f(e,u,d))});let p=l(`td`,s);i(s,p);let h=t(`rue:slot:anchor`);i(p,h),n(()=>{let e=a.description;r(()=>f(e,p,h))});let g=l(`td`,s);i(s,g);let _=l(`code`,g);i(g,_);let v=t(`rue:slot:anchor`);i(_,v),n(()=>{let e=a.type;r(()=>f(e,_,v))});let y=l(`td`,s);i(s,y);let b=l(`code`,y);i(y,b);let x=t(`rue:slot:anchor`);return i(b,x),n(()=>{let e=a.defaultValue;r(()=>f(e,b,x))}),o}),o,s)}})}),s}),W=[{key:`account`,title:`How do I create an account?`,content:`Click the "Sign Up" button in the top right corner and follow the registration process.`},{key:`password`,title:`I forgot my password. What should I do?`,content:`Click on "Forgot Password" on the login page and follow the instructions sent to your email.`},{key:`profile`,title:`How do I update my profile information?`,content:`Go to "My Account" settings and select "Edit Profile" to make changes.`}],G=[{title:`Children 组合`,desc:`保留 Accordion.Title / Accordion.Content，用于局部定制标题和内容。`},{title:`Items 驱动`,desc:`直接用 items 写标题、描述、额外信息和禁用态，适合后台配置页。`},{title:`受控状态`,desc:`通过 activeKey、openKeys、onChange 接管当前展开项。`},{title:`两种语义`,desc:`默认 radio 风格适合单开；details 适合保留可搜索内容与原生语义。`}],K=[{prop:`activeKey`,description:`items 模式下的受控单开 key`,type:`string | number | null`,defaultValue:`-`},{prop:`className`,description:`追加到每个 Accordion 根节点的类名`,type:`string`,defaultValue:`-`},{prop:`collapsible`,description:`单开模式下允许把当前面板再次折叠`,type:`boolean`,defaultValue:`false`},{prop:`contentClassName`,description:`items 模式下统一追加到内容区域的类名`,type:`string`,defaultValue:`-`},{prop:`defaultActiveKey`,description:`items 模式下的非受控默认单开 key`,type:`string | number | null`,defaultValue:`-`},{prop:`defaultOpen`,description:`children 模式下的非受控默认展开状态`,type:`boolean`,defaultValue:`false`},{prop:`defaultOpenKeys`,description:`items 模式下的非受控默认多开 keys`,type:`Array<string | number>`,defaultValue:`-`},{prop:`disabled`,description:`禁用整个 Accordion 或当前 items 组的交互`,type:`boolean`,defaultValue:`false`},{prop:`force`,description:`强制视觉保持展开或收起，优先级高于 open 与 items 状态`,type:`'open' | 'close'`,defaultValue:`-`},{prop:`icon`,description:`标题右侧的内置指示样式`,type:`'arrow' | 'plus'`,defaultValue:`-`},{prop:`items`,description:`数据驱动渲染方式，适合 FAQ、配置面板和后台列表`,type:`AccordionDataItem[]`,defaultValue:`-`},{prop:`multiple`,description:`允许同时展开多个 items；radio 形态会切为 checkbox 行为`,type:`boolean`,defaultValue:`false`},{prop:`name`,description:`分组名；radio 与 details 语义都会复用这个名称`,type:`string`,defaultValue:`自动生成`},{prop:`onChange`,description:`items 模式下的开合回调；单开返回 key，多开返回 keys`,type:`(value, context) => void`,defaultValue:`-`},{prop:`onToggle`,description:`children 模式下的单项开合回调`,type:`(open, context) => void`,defaultValue:`-`},{prop:`open`,description:`children 模式下的受控展开状态`,type:`boolean`,defaultValue:`-`},{prop:`openKeys`,description:`items 模式下的受控多开 keys`,type:`Array<string | number>`,defaultValue:`-`},{prop:`titleClassName`,description:`items 模式下统一追加到标题区域的类名`,type:`string`,defaultValue:`-`},{prop:`use`,description:`切换 radio 或 details 两种结构输出`,type:`'radio' | 'details'`,defaultValue:`'radio'`}],q=[{prop:`className`,description:`追加到当前 item 根节点的类名`,type:`string`,defaultValue:`-`},{prop:`content`,description:`折叠区内容`,type:`any`,defaultValue:`-`},{prop:`contentClassName`,description:`内容区域类名`,type:`string`,defaultValue:`-`},{prop:`description`,description:`标题下的补充说明文字`,type:`any`,defaultValue:`-`},{prop:`descriptionClassName`,description:`说明文字类名`,type:`string`,defaultValue:`-`},{prop:`disabled`,description:`禁用当前 item 交互`,type:`boolean`,defaultValue:`false`},{prop:`extra`,description:`标题行右侧的补充信息，可用于状态标记或数字`,type:`any`,defaultValue:`-`},{prop:`extraClassName`,description:`额外信息区域类名`,type:`string`,defaultValue:`-`},{prop:`force`,description:`对单个 item 单独强制展开或收起`,type:`'open' | 'close'`,defaultValue:`-`},{prop:`icon`,description:`覆盖全局 icon 设置`,type:`'arrow' | 'plus'`,defaultValue:`-`},{prop:`key`,description:`推荐显式提供的稳定标识，用于 activeKey / openKeys 匹配`,type:`string | number`,defaultValue:`index`},{prop:`open`,description:`非受控模式下的默认展开状态`,type:`boolean`,defaultValue:`false`},{prop:`title`,description:`标题区域内容`,type:`any`,defaultValue:`-`},{prop:`titleClassName`,description:`标题区域类名`,type:`string`,defaultValue:`-`},{prop:`use`,description:`覆盖全局 use 设置`,type:`'radio' | 'details'`,defaultValue:`-`}],J=(a,o)=>u(s=>{let c=l(`div`,s);n(()=>{d(c,o?.containerClassName??`grid gap-3`)});let m=t(`rue:list:start`),g=t(`rue:list:end`);i(c,m),i(c,g);let _=new Map;return n(()=>{_=b({items:W||[],getKey:(e,t)=>`${a}-${e.key}`,elements:_,parent:m.parentNode,before:g,start:m,renderItem:(s,c,l,d,m)=>{let g=u(()=>{let a=e(),c=t(`rue:component:anchor`);i(a,c),n(()=>{let e=h(H.Title,{as:o?.use===`details`?`summary`:`div`,className:`font-semibold`,children:s.title});r(()=>f(e,a,c))});let l=t(`rue:component:anchor`);return i(a,l),f(h(H.Content,{className:`text-sm opacity-80`,children:s.content}),a,l),a});p(h(H,{key:`${a}-${s.key}`,name:a,use:o?.use,icon:o?.icon,collapsible:o?.collapsible,className:o?.itemClassName??`bg-base-100 border border-base-300`,defaultOpen:m===0,children:g}),c,l,d)}})}),c}),Y=()=>{let{tabRadio:a,tabDetails:s,tabControlled:c,tabMultiple:p,tabRich:_,tabArrow:C,tabPlus:w,tabJoin:E,tabArrayRadio:D,tabArrayDetails:O,controlledKey:k,lastChanged:A,roadmapItems:j,faqItemsCode:M}=y(`useSetup:0:0`,()=>o(()=>({tabRadio:y(`ref:1:0`,()=>v(`preview`)),tabDetails:y(`ref:1:1`,()=>v(`preview`)),tabControlled:y(`ref:1:2`,()=>v(`preview`)),tabMultiple:y(`ref:1:3`,()=>v(`preview`)),tabRich:y(`ref:1:4`,()=>v(`preview`)),tabArrow:y(`ref:1:5`,()=>v(`preview`)),tabPlus:y(`ref:1:6`,()=>v(`preview`)),tabJoin:y(`ref:1:7`,()=>v(`preview`)),tabArrayRadio:y(`ref:1:8`,()=>v(`preview`)),tabArrayDetails:y(`ref:1:9`,()=>v(`preview`)),controlledKey:y(`ref:1:10`,()=>v(`build`)),lastChanged:y(`ref:1:11`,()=>v(`build`)),roadmapItems:[{key:`plan`,title:`Plan backlog`,description:`先确定优先级，再安排设计和开发`,extra:`Sprint 12`,content:`Collect the most urgent requirements, align on edge cases, and freeze the delivery order before implementation starts.`},{key:`build`,title:`Build feature slice`,description:`把 API、交互和回归验证收敛到同一轮里`,extra:`In progress`,content:`Ship the smallest useful slice first, then expand demos and tests around the verified behavior instead of guessing a broad design up front.`},{key:`ship`,title:`Ship and monitor`,description:`发布后持续看告警、埋点和反馈`,extra:`Ready`,content:`After release, keep an eye on error rate, support feedback and adoption signals so the next iteration has concrete evidence.`}],faqItemsCode:`const items = [
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
]`})));return u(o=>{let v=e(),y=t(`rue:component:anchor`);return i(v,y),f(h(T,{children:u(()=>{let o=e(),v=l(`div`,o);i(o,v),d(v,`max-w-none prose prose-sm md:prose-base`);let y=l(`h1`,v);i(v,y),i(y,g(`Accordion 手风琴`));let T=l(`p`,v);i(v,T),d(T,`text-sm mt-3 mb-3`),i(T,g(`Accordion 现在保留 Rue 原本的轻量视觉风格，但 API 不再只是静态包装。你可以继续用`));let N=l(`code`,T);i(T,N),i(N,g(`Accordion.Title`)),i(T,g(`和`));let P=l(`code`,T);i(T,P),i(P,g(`Accordion.Content`)),i(T,g(`组合单个面板，也可以直接用`));let F=l(`code`,T);i(T,F),i(F,g(`items`)),i(T,g(`走数据驱动，接入受控 key、多开、禁用和富标题信息。`));let I=l(`h2`,v);i(v,I),i(I,g(`何时使用`));let L=l(`ul`,v);i(v,L);let R=l(`li`,L);i(L,R),i(R,g(`需要 FAQ、设置说明、任务面板这类“标题 + 可折叠内容”的信息组织方式。`));let z=l(`li`,L);i(L,z),i(z,g(`需要在单开和多开之间切换，或把当前展开项接到页面状态里。`));let B=l(`li`,L);i(L,B),i(B,g(`需要在标题里补充状态、说明、标签，而不想为每个面板手写结构。`));let V=l(`li`,L);i(L,V),i(V,g(`需要让浏览器能搜索折叠内容时，使用`));let Y=l(`code`,V);i(V,Y),i(Y,g(`use="details"`)),i(V,g(`。`));let X=l(`div`,v);i(v,X),d(X,`not-prose my-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4`);let Z=t(`rue:list:start`),te=t(`rue:list:end`);i(X,Z),i(X,te);let ne=new Map;n(()=>{ne=b({items:G||[],getKey:(e,t)=>e.title,elements:ne,parent:X,before:te,singleRoot:!0,trackIndex:!1,start:Z,renderItem:(a,o,s,c,p)=>{f(u(()=>{let o=e(),s=l(`div`,o);i(o,s),n(()=>{m(s,`key`,String(a.title))}),d(s,`card border border-base-300 bg-base-100 shadow-sm`);let c=l(`div`,s);i(s,c),d(c,`card-body gap-2 p-4`);let u=l(`div`,c);i(c,u),d(u,`text-xs uppercase tracking-[0.2em] text-base-content/50`),i(u,g(`Capability`));let p=l(`div`,c);i(c,p),d(p,`text-sm font-semibold`);let h=t(`rue:slot:anchor`);i(p,h),n(()=>{let e=a.title;r(()=>f(e,p,h))});let _=l(`p`,c);i(c,_),d(_,`m-0 text-sm opacity-70`);let v=t(`rue:slot:anchor`);return i(_,v),n(()=>{let e=a.desc;r(()=>f(e,_,v))}),o}),o,s)}})});let re=t(`rue:component:anchor`);i(v,re),n(()=>{let e=h(U,{title:`Accordion using radio inputs`,summary:`保留单开分组，同时额外开启 collapsible，方便在文档页里反复点按查看开合状态。`,tab:a,preview:()=>J(`accordion-radio-demo`,{collapsible:!0}),code:`<Accordion className="bg-base-100 border border-base-300" name="accordion-radio-demo" defaultOpen collapsible>
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
</Accordion>`});r(()=>f(e,v,re))});let ie=t(`rue:component:anchor`);i(v,ie),n(()=>{let e=h(U,{title:`Accordion using details`,summary:`保留 details 结构，适合需要原生语义和浏览器搜索能力的内容区。`,tab:s,preview:()=>J(`accordion-details-demo`,{use:`details`}),code:`<Accordion use="details" className="bg-base-100 border border-base-300" name="accordion-details-demo" defaultOpen>
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
</Accordion>`});r(()=>f(e,v,ie))});let ae=t(`rue:component:anchor`);i(v,ae),n(()=>{let e=h(U,{title:`Controlled active key`,summary:`受控模式同样支持 collapsible；点击已展开项时，activeKey 会回到 null。`,tab:c,preview:()=>S(`div`,{className:`card bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body gap-4`,children:[S(`div`,{className:`flex flex-wrap gap-2`,children:j.map(e=>x(`button`,{className:`btn btn-sm ${k.value===e.key?`btn-primary`:`btn-ghost`}`,onClick:()=>{let t=k.value===e.key?null:e.key;k.value=t,A.value=t},children:[`切换 `,e.title]},e.key))}),x(`div`,{className:`grid gap-2 rounded-box border border-base-300 bg-base-200/40 p-3 text-sm`,children:[x(`div`,{children:[`当前 `,S(`code`,{children:`activeKey`}),`：`,S(`code`,{children:k.value??`null`})]}),x(`div`,{children:[`最近一次切换：`,S(`code`,{children:A.value??`null`})]})]}),S(H,{activeKey:k.value,collapsible:!0,icon:`arrow`,className:`bg-base-100 border border-base-300`,items:j,onChange:e=>{let t=Array.isArray(e)?e[0]:e;k.value=t??null,A.value=t??null}})]})}),code:`import { ref } from '@rue-js/rue'

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
/>`});r(()=>f(e,v,ae))});let oe=t(`rue:component:anchor`);i(v,oe),n(()=>{let e=h(U,{title:`Multiple open panels`,summary:`新增 multiple 与 defaultOpenKeys，可同时展开多个项；同一 API 也能配合 collapsible 做可收起单项。`,tab:p,preview:()=>x(`div`,{className:`grid gap-4 xl:grid-cols-[1.5fr_1fr]`,children:[S(`div`,{className:`card bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body gap-4`,children:[S(`div`,{className:`alert alert-soft`,children:S(`span`,{className:`text-sm`,children:`multiple 会把 radio 形态切到 checkbox 行为，适合筛选条件或调试面板。`})}),S(H,{multiple:!0,icon:`arrow`,className:`bg-base-100 border border-base-300`,defaultOpenKeys:[`latency`,`cache`],items:[{key:`latency`,title:`Latency budget`,description:`页面首屏与接口预算放在同一个地方追踪`,extra:`120ms`,content:`Track server timing, render budget and hydration cost together so regressions can be located quickly.`},{key:`cache`,title:`Cache strategy`,description:`缓存命中率和失效策略分开说明`,extra:`Warm`,content:`Document what can stay stale, what must be revalidated, and how to handle cache busting during deployments.`},{key:`rollback`,title:`Rollback checklist`,description:`保留快速回滚路径，避免线上排障时再找人`,extra:`Ops`,content:`Keep a minimal rollback playbook near the release notes so the on-call engineer can act without extra context switching.`}]})]})}),S(`div`,{className:`card bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body gap-4`,children:[x(`div`,{children:[S(`h3`,{className:`m-0 text-base font-semibold`,children:`Single but collapsible`}),x(`p`,{className:`mt-2 mb-0 text-sm opacity-70`,children:[`不想强制保留一个展开项时，可以给 children 模式加 `,S(`code`,{children:`collapsible`}),`。`]})]}),x(H,{collapsible:!0,defaultOpen:!0,className:`bg-base-100 border border-base-300`,icon:`plus`,children:[S(H.Title,{className:`font-semibold`,children:`Can I close the last open panel?`}),x(H.Content,{className:`text-sm opacity-80`,children:[`Yes. Set `,S(`code`,{children:`collapsible`}),` to allow toggling the current panel off instead of forcing one active item.`]})]})]})})]}),code:`<Accordion
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
</Accordion>`});r(()=>f(e,v,oe))});let se=t(`rue:component:anchor`);i(v,se),n(()=>{let e=h(U,{title:`Rich item metadata`,summary:`新增 description、extra 和 disabled，适合后台列表、规则说明和版本发布面板。`,tab:_,preview:()=>S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body gap-4`,children:S(H,{collapsible:!0,icon:`arrow`,className:`bg-base-100 border border-base-300`,items:[{key:`review`,title:`Review dependencies`,description:`上线前再核对一次依赖差异和风险说明`,extra:S(`span`,{className:`badge badge-warning badge-outline`,children:`Review`}),open:!0,content:`Compare the dependency diff with the last release baseline, and record whether each update changes runtime behavior or only build tooling.`},{key:`announce`,title:`Prepare release notes`,description:`把用户可感知的变化浓缩成 changelog 和公告文案`,extra:S(`span`,{className:`badge badge-success badge-outline`,children:`Ready`}),content:`Write the changelog from the user perspective first, then attach migration hints or rollout notes only when they affect adoption.`},{key:`ops`,title:`Ops handoff`,description:`值班同学确认回滚路径与观测指标后才能执行`,extra:S(`span`,{className:`badge badge-ghost`,children:`Waiting`}),disabled:!0,content:`This item is intentionally disabled to show how a non-interactive operational gate can still stay visible in the stack.`}]})})}),code:`<Accordion
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
/>`});r(()=>f(e,v,se))});let ce=t(`rue:component:anchor`);i(v,ce),n(()=>{let e=h(U,{title:`Accordion with arrow icon`,summary:`保留 arrow 指示样式，并开启 collapsible，方便直接验证箭头开合反馈。`,tab:C,preview:()=>J(`accordion-arrow-demo`,{icon:`arrow`,collapsible:!0}),code:`<Accordion icon="arrow" className="bg-base-100 border border-base-300" name="accordion-arrow-demo" defaultOpen collapsible>
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
</Accordion>`});r(()=>f(e,v,ce))});let le=t(`rue:component:anchor`);i(v,le),n(()=>{let e=h(U,{title:`Accordion with plus/minus icon`,summary:`保留 plus/minus 方案，并开启 collapsible，方便直接验证开合反馈。`,tab:w,preview:()=>J(`accordion-plus-demo`,{icon:`plus`,collapsible:!0}),code:`<Accordion icon="plus" className="bg-base-100 border border-base-300" name="accordion-plus-demo" defaultOpen collapsible>
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
</Accordion>`});r(()=>f(e,v,le))});let ue=t(`rue:component:anchor`);i(v,ue),n(()=>{let e=h(U,{title:`Using Accordion and Join together`,summary:`保留 join 组合方式，并开启 collapsible，方便连续边框场景下反复验证开合。`,tab:E,preview:()=>S(`div`,{className:`join join-vertical bg-base-100`,children:W.map((e,t)=>x(H,{icon:`arrow`,collapsible:!0,className:`join-item border border-base-300`,name:`accordion-join-demo`,defaultOpen:t===0,children:[S(H.Title,{className:`font-semibold`,children:e.title}),S(H.Content,{className:`text-sm opacity-80`,children:e.content})]},`join-${e.key}`))}),code:`<div className="join join-vertical bg-base-100">
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
</div>`});r(()=>f(e,v,ue))});let de=t(`rue:component:anchor`);i(v,de),n(()=>{let e=h(U,{title:`Accordion using items array (radio)`,summary:`保留 items 数组写法，并开启 collapsible，方便直接验证数据驱动下的收起逻辑。`,tab:D,preview:()=>S(H,{collapsible:!0,className:`bg-base-100 border border-base-300`,name:`accordion-array-radio-demo`,items:W.map((e,t)=>({key:e.key,title:e.title,content:e.content,open:t===0}))}),code:`${M}

<Accordion
  collapsible
  className="bg-base-100 border border-base-300"
  name="accordion-array-radio-demo"
  items={items}
/>`});r(()=>f(e,v,de))});let fe=t(`rue:component:anchor`);i(v,fe),n(()=>{let e=h(U,{title:`Accordion using items array (details)`,summary:`保留原来的 details + items 组合；现在它也能继续叠加 description、extra 和 disabled。`,tab:O,preview:()=>S(H,{use:`details`,className:`bg-base-100 border border-base-300`,name:`accordion-array-details-demo`,items:W.map((e,t)=>({key:e.key,title:e.title,content:e.content,open:t===0}))}),code:`${M}

<Accordion
  use="details"
  className="bg-base-100 border border-base-300"
  name="accordion-array-details-demo"
  items={items}
/>`});r(()=>f(e,v,fe))});let Q=l(`h2`,v);i(v,Q),m(Q,`id`,`accordion-api`),i(Q,g(`API`));let pe=l(`p`,v);i(v,pe),i(pe,g(`Accordion 现在分成两套用法：children 模式适合局部排版，items 模式适合数据驱动和受控状态。 两套模式共用同一套视觉类名，因此迁移旧示例时通常只需要把结构收敛到更清晰的语义层。`));let me=l(`h3`,v);i(v,me),i(me,g(`Accordion Props`));let he=t(`rue:component:anchor`);i(v,he),n(()=>{let e=h(ee,{rows:K});r(()=>f(e,v,he))});let $=l(`h3`,v);i(v,$),d($,`mt-6`),i($,g(`AccordionDataItem`));let ge=t(`rue:component:anchor`);return i(v,ge),n(()=>{let e=h(ee,{rows:q});r(()=>f(e,v,ge))}),o})}),v,y),v})};export{Y as default};