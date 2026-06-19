import{$ as e,$t as t,Bt as n,Gt as r,X as i,Xt as a,Z as o,ct as s,et as c,ft as l,l as u,lt as d,nt as f,o as p,s as m,t as h,tt as g,ut as _,yt as v}from"./vapor-runtime-CKrmRMZX.js";import{a as y,n as b}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{a as x,i as S}from"./persistentSidebarPlayground-CKHFGglU.js";import{t as C}from"./Code-D5UqTwV6.js";import{t as w}from"./tabs-DRfs918f.js";import{r as T}from"./SidebarPlaygroundDesign-CWudvLqE.js";var E=0,D=(e,t)=>e?t?`${e} ${t}`:e:t??``,O=e=>{let t=[];return e.forEach(e=>{t.some(t=>t===e)||t.push(e)}),t},k=(e,t)=>{let n=O(Array.isArray(e)?e:[]);return t?n:n.slice(0,1)},A=e=>e==null?[]:[e],j=(e,t)=>e.length===t.length?e.every((e,n)=>e===t[n]):!1,M=(e,t,n,r,i,a)=>k(r===void 0?t===void 0?i===void 0?n===void 0?e.filter(e=>e.open).map(e=>e.key):A(n):i:A(t):r,a),N=(e,t,n)=>n===`open`?!0:n===`close`?!1:typeof e==`boolean`?e:typeof t==`boolean`?t:!1,P=(e,t)=>t===`open`?`collapse-open`:t===`close`?`collapse-close`:e?`collapse-open`:`collapse-close`,F=(e,t)=>{let n=t?.getRootNode?.(),r=n&&typeof n.querySelectorAll==`function`?n:typeof document<`u`?document:null;return r?Array.from(r.querySelectorAll(`[data-rue-accordion-group]`)).filter(t=>t.dataset.rueAccordionGroup===e):[]},I=e=>Array.from(e.children).find(e=>e instanceof HTMLInputElement&&(e.type===`checkbox`||e.type===`radio`)),L=e=>Array.from(e.children).find(e=>e instanceof HTMLElement&&e.classList.contains(`collapse-title`)),R=(e,t,n)=>{if(!(e instanceof HTMLElement))return;e.classList.remove(`collapse-open`,`collapse-close`),e.classList.add(P(t,n));let r=I(e);r&&r.checked!==t&&(r.checked=t);let i=L(e);i&&i.setAttribute(`aria-expanded`,t?`true`:`false`)},z=(e,t,n,r,i)=>r?n?O([...e,t]):e.filter(e=>e!==t):n?[t]:i?[]:e.some(e=>e===t)?[...e]:[t],B=e=>e?.type===`radio`,V=n=>n.description==null&&n.extra==null?n.title:u(i=>{let a=g(`div`,i);_(a,`flex w-full items-start justify-between gap-3`);let s=g(`div`,a);o(a,s),_(s,`min-w-0 flex-1`);let l=g(`div`,s);o(s,l);let d=e(`rue:slot:anchor`);o(l,d),t(()=>{let e=n.title;r(()=>p(e,l,d))});let f=e(`rue:slot:anchor`);o(s,f),t(()=>{let i=n.description==null?``:u(()=>{let i=c(),a=g(`div`,i);o(i,a),t(()=>{_(a,D(`mt-1 text-xs opacity-70`,n.descriptionClassName))});let s=e(`rue:slot:anchor`);return o(a,s),t(()=>{let e=n.description;r(()=>p(e,a,s))}),i});r(()=>p(i,s,f))});let m=e(`rue:slot:anchor`);return o(a,m),t(()=>{let i=n.extra==null?``:u(()=>{let i=c(),a=g(`div`,i);o(i,a),t(()=>{_(a,D(`shrink-0 text-xs opacity-70`,n.extraClassName))});let s=e(`rue:slot:anchor`);return o(a,s),t(()=>{let e=n.extra;r(()=>p(e,a,s))}),i});r(()=>p(i,a,m))}),a}),H=Object.assign(f=>{let{normalizedItems:h,generatedName:C,uncontrolledSingleOpen:w,uncontrolledGroupOpenKeys:T,groupName:O,hasItems:L,isGroupControlled:H,getCurrentSingleOpen:U,getCurrentGroupOpenKeys:ee,getItemOpen:W,buildItemClassName:G,buildWrapperClassName:K,buildStaticWrapperClassName:q,syncItemsDom:J,syncSingleDom:Y,commitGroupChange:X,commitSingleChange:Z}=y(`useSetup:0:0`,()=>a(()=>{let e=f.items?.map((e,t)=>({...e,key:e.key??t,index:t}))??[],t=`rue-accordion-${E++}`,r=y(`ref:1:0`,()=>n(N(f.open,f.defaultOpen,f.force))),i=y(`ref:1:1`,()=>n(M(e,f.activeKey,f.defaultActiveKey,f.openKeys,f.defaultOpenKeys,f.multiple))),a=y(`computed:1:2`,()=>v(()=>f.name??t)),o=a,s=e.length>0,c=y(`computed:1:3`,()=>v(()=>f.openKeys!==void 0||f.activeKey!==void 0)),l=c,u=()=>f.force===`open`?!0:f.force===`close`?!1:f.open===void 0?r.value:!!f.open,d=()=>f.openKeys===void 0?f.activeKey===void 0?i.value:k(A(f.activeKey),f.multiple):k(f.openKeys,f.multiple),p=e=>{let t=e.force??f.force;return t===`open`?!0:t===`close`?!1:d().some(t=>t===e.key)},m=e=>{let t=e.icon??f.icon,n=e.force??f.force,r=D(`collapse`,P(p(e),n));return t===`arrow`&&(r+=` collapse-arrow`),t===`plus`&&(r+=` collapse-plus`),f.className&&(r+=` ${f.className}`),e.className&&(r+=` ${e.className}`),(f.disabled||e.disabled)&&(r+=` opacity-70`),r},h=()=>{let e=D(`collapse`,P(u(),f.force));return f.icon===`arrow`&&(e+=` collapse-arrow`),f.icon===`plus`&&(e+=` collapse-plus`),f.className&&(e+=` ${f.className}`),f.disabled&&(e+=` opacity-70`),e},g=()=>{let e=`collapse`;return f.icon===`arrow`&&(e+=` collapse-arrow`),f.icon===`plus`&&(e+=` collapse-plus`),f.className&&(e+=` ${f.className}`),f.disabled&&(e+=` opacity-70`),e},_=(t,n)=>{F(o.get(),n).forEach(n=>{let r=e[Number(n.dataset.rueAccordionIndex??-1)];if(!r)return;let i=r.force??f.force,a=i===`open`?!0:i===`close`?!1:t.some(e=>e===r.key);n instanceof HTMLDetailsElement&&n.open!==a&&(n.open=a),R(n,a,i)})},b=e=>{F(o.get(),e).forEach(e=>{let t=e.dataset.rueAccordionForce??f.force,n=I(e);R(e,t===`open`?!0:t===`close`?!1:e instanceof HTMLDetailsElement?e.open:n?.checked===!0,t)})};return{normalizedItems:e,generatedName:t,uncontrolledSingleOpen:r,uncontrolledGroupOpenKeys:i,groupName:a,hasItems:s,isGroupControlled:c,getCurrentSingleOpen:u,getCurrentGroupOpenKeys:d,getItemOpen:p,buildItemClassName:m,buildWrapperClassName:h,buildStaticWrapperClassName:g,syncItemsDom:_,syncSingleDom:b,commitGroupChange:(e,t,n)=>{let r=e.force??f.force;if(f.disabled||e.disabled||r)return;let a=z(d(),e.key,t,f.multiple,f.collapsible),o=a.some(t=>t===e.key);l.get()||(j(i.value,a)||(i.value=a),_(a,n)),f.onChange&&f.onChange(f.multiple?a:a[0]??null,{key:e.key,index:e.index,open:o,item:e})},commitSingleChange:(e,t)=>{f.disabled||f.force||(f.open===void 0&&(r.value!==e&&(r.value=e),b(t)),f.onToggle&&f.onToggle(e,{key:o.get(),index:0,open:e}))}}}));if(L)return u(n=>{let r=c(),i=e(`rue:list:start`),a=e(`rue:list:end`);o(r,i),o(r,a);let s=new Map;return t(()=>{s=b({items:h||[],getKey:(e,t)=>e.key,elements:s,parent:i.parentNode,before:a,start:i,renderItem:(e,t,n,r,i)=>{m((()=>{let t=e.use??(f.use===void 0?`radio`:f.use),n=e.icon??f.icon,r=e.force??f.force,i=n===`arrow`&&(e.description!=null||e.extra!=null)?`after:top-6`:void 0,a=D(D(`collapse-title`,f.titleClassName),D(e.titleClassName,i)),o=D(D(`collapse-content`,f.contentClassName),e.contentClassName);if(t===`details`)return x(`details`,{className:G(e),open:W(e)?!0:void 0,"data-rue-accordion-group":O.get(),"data-rue-accordion-index":String(e.index),"data-rue-accordion-force":r,children:[S(`summary`,{className:a,"aria-expanded":W(e)?`true`:`false`,onClick:t=>{t.preventDefault(),X(e,!W(e),t.currentTarget)},children:V(e)}),S(`div`,{className:o,children:e.content})]},e.key);let s=f.multiple?`checkbox`:`radio`;return x(`div`,{className:G(e),"data-rue-accordion-group":O.get(),"data-rue-accordion-index":String(e.index),"data-rue-accordion-force":r,children:[S(`input`,{type:s,name:s===`radio`?O.get():void 0,checked:W(e),disabled:f.disabled||e.disabled||!!r,onClick:t=>{let n=t.currentTarget;!f.collapsible||!W(e)||!B(n)||(t.preventDefault(),n.checked=!1,X(e,!1,n))},onChange:t=>{let n=t.target.checked;X(e,n,t.currentTarget)}}),S(`div`,{className:a,"aria-expanded":W(e)?`true`:`false`,children:V(e)}),S(`div`,{className:o,children:e.content})]},e.key)})(),t,n,r)}})}),r});if((f.use===void 0?`radio`:f.use)===`details`){let n=f.open!==void 0||f.force!==void 0,a=N(f.open,f.defaultOpen,f.force);return u(c=>{let l=g(`details`,c);t(()=>{_(l,n?K():q())}),t(()=>{s(l,`name`,String(O.get()))}),t(()=>{s(l,`open`,String((n?U():a)?!0:void 0))}),t(()=>{s(l,`data-rue-accordion-group`,String(O.get()))}),t(()=>{s(l,`data-rue-accordion-force`,String(f.force))}),i(l,`toggle`,e=>{let t=e.currentTarget,n=t.open;if(f.disabled||f.force||f.open!==void 0){let e=U();t.open!==e&&(t.open=e),f.onToggle&&f.onToggle(e,{key:O.get(),index:0,open:e});return}f.onToggle&&f.onToggle(n,{key:O.get(),index:0,open:n})});let u=e(`rue:children:anchor`);return o(l,u),t(()=>{let e=f.children;r(()=>p(e,l,u))}),l})}return u(n=>{let a=g(`div`,n);t(()=>{_(a,K())}),t(()=>{s(a,`data-rue-accordion-group`,String(O.get()))}),t(()=>{s(a,`data-rue-accordion-force`,String(f.force))});let c=g(`input`,a);o(a,c),t(()=>{s(c,`type`,`radio`)}),t(()=>{s(c,`name`,String(O.get()))}),t(()=>{d(c,!!U())}),t(()=>{l(c,f.disabled||!!f.force)}),i(c,`click`,e=>{let t=e.currentTarget;!f.collapsible||!U()||!B(t)||(e.preventDefault(),t.checked=!1,Z(!1,t))}),i(c,`change`,e=>{let t=e.target.checked;Z(t,e.currentTarget)});let u=e(`rue:children:anchor`);return o(a,u),t(()=>{let e=f.children;r(()=>p(e,a,u))}),a})},{Title:n=>{let{mergedClassName:i}=y(`useSetup:0:0:dup1`,()=>a(()=>({mergedClassName:y(`computed:1:4`,()=>v(()=>D(`collapse-title`,n.className)))})));return(n.as===void 0?`div`:n.as)===`summary`?u(a=>{let s=g(`summary`,a);t(()=>{_(s,i.get())});let c=e(`rue:children:anchor`);return o(s,c),t(()=>{let e=n.children;r(()=>p(e,s,c))}),s}):(n.as===void 0?`div`:n.as)===`button`?u(a=>{let c=g(`button`,a);s(c,`type`,`button`),t(()=>{_(c,i.get())});let l=e(`rue:children:anchor`);return o(c,l),t(()=>{let e=n.children;r(()=>p(e,c,l))}),c}):u(a=>{let s=g(`div`,a);t(()=>{_(s,i.get())});let c=e(`rue:children:anchor`);return o(s,c),t(()=>{let e=n.children;r(()=>p(e,s,c))}),s})},Content:n=>u(i=>{let a=g(`div`,i);t(()=>{_(a,D(`collapse-content`,n.className))});let s=e(`rue:children:anchor`);return o(a,s),t(()=>{let e=n.children;r(()=>p(e,a,s))}),a})}),U=n=>u(i=>{let a=g(`div`,i);_(a,`component-preview not-prose text-base-content my-6 lg:my-12`);let s=g(`div`,a);o(a,s),_(s,`flex flex-wrap items-start justify-between gap-3`);let l=g(`div`,s);o(s,l);let d=g(`h2`,l);o(l,d),_(d,`component-preview-title mt-2 mb-1 text-lg font-semibold`),o(d,f(`# `));let m=e(`rue:slot:anchor`);o(d,m),t(()=>{let e=n.title;r(()=>p(e,d,m))});let v=e(`rue:slot:anchor`);o(l,v),t(()=>{let i=n.summary?u(()=>{let i=c(),a=g(`p`,i);o(i,a),_(a,`m-0 text-sm opacity-70`);let s=e(`rue:slot:anchor`);return o(a,s),t(()=>{let e=n.summary;r(()=>p(e,a,s))}),i}):``;r(()=>p(i,l,v))});let y=e(`rue:component:anchor`);o(a,y),t(()=>{let e=h(w,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`TSX代码`}],activeKey:n.tab.value,onChange:e=>n.tab.value=e,className:`mb-3 mt-4`});r(()=>p(e,a,y))});let b=e(`rue:slot:anchor`);return o(a,b),t(()=>{let i=n.tab.value===`preview`?n.preview():u(()=>{let i=c(),a=e(`rue:component:anchor`);return o(i,a),t(()=>{let e=h(C,{className:`mt-2`,lang:`tsx`,code:n.code});r(()=>p(e,i,a))}),i});r(()=>p(i,a,b))}),a}),ee=n=>u(i=>{let a=g(`div`,i);_(a,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let l=g(`table`,a);o(a,l),_(l,`table table-zebra`);let d=g(`thead`,l);o(l,d);let m=g(`tr`,d);o(d,m);let h=g(`th`,m);o(m,h),o(h,f(`属性`));let v=g(`th`,m);o(m,v),o(v,f(`说明`));let y=g(`th`,m);o(m,y),o(y,f(`类型`));let x=g(`th`,m);o(m,x),o(x,f(`默认值`));let S=g(`tbody`,l);o(l,S);let C=e(`rue:list:start`),w=e(`rue:list:end`);o(S,C),o(S,w);let T=new Map;return t(()=>{T=b({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,i,a,l,d)=>{p(u(()=>{let i=c(),a=g(`tr`,i);o(i,a),t(()=>{s(a,`key`,String(n.prop))});let l=g(`td`,a);o(a,l);let u=g(`code`,l);o(l,u);let d=e(`rue:slot:anchor`);o(u,d),t(()=>{let e=n.prop;r(()=>p(e,u,d))});let f=g(`td`,a);o(a,f);let m=e(`rue:slot:anchor`);o(f,m),t(()=>{let e=n.description;r(()=>p(e,f,m))});let h=g(`td`,a);o(a,h);let _=g(`code`,h);o(h,_);let v=e(`rue:slot:anchor`);o(_,v),t(()=>{let e=n.type;r(()=>p(e,_,v))});let y=g(`td`,a);o(a,y);let b=g(`code`,y);o(y,b);let x=e(`rue:slot:anchor`);return o(b,x),t(()=>{let e=n.defaultValue;r(()=>p(e,b,x))}),i}),i,a)}})}),a}),W=[{key:`account`,title:`How do I create an account?`,content:`Click the "Sign Up" button in the top right corner and follow the registration process.`},{key:`password`,title:`I forgot my password. What should I do?`,content:`Click on "Forgot Password" on the login page and follow the instructions sent to your email.`},{key:`profile`,title:`How do I update my profile information?`,content:`Go to "My Account" settings and select "Edit Profile" to make changes.`}],G=[{title:`Children 组合`,desc:`保留 Accordion.Title / Accordion.Content，用于局部定制标题和内容。`},{title:`Items 驱动`,desc:`直接用 items 写标题、描述、额外信息和禁用态，适合后台配置页。`},{title:`受控状态`,desc:`通过 activeKey、openKeys、onChange 接管当前展开项。`},{title:`两种语义`,desc:`默认 radio 风格适合单开；details 适合保留可搜索内容与原生语义。`}],K=[{prop:`activeKey`,description:`items 模式下的受控单开 key`,type:`string | number | null`,defaultValue:`-`},{prop:`className`,description:`追加到每个 Accordion 根节点的类名`,type:`string`,defaultValue:`-`},{prop:`collapsible`,description:`单开模式下允许把当前面板再次折叠`,type:`boolean`,defaultValue:`false`},{prop:`contentClassName`,description:`items 模式下统一追加到内容区域的类名`,type:`string`,defaultValue:`-`},{prop:`defaultActiveKey`,description:`items 模式下的非受控默认单开 key`,type:`string | number | null`,defaultValue:`-`},{prop:`defaultOpen`,description:`children 模式下的非受控默认展开状态`,type:`boolean`,defaultValue:`false`},{prop:`defaultOpenKeys`,description:`items 模式下的非受控默认多开 keys`,type:`Array<string | number>`,defaultValue:`-`},{prop:`disabled`,description:`禁用整个 Accordion 或当前 items 组的交互`,type:`boolean`,defaultValue:`false`},{prop:`force`,description:`强制视觉保持展开或收起，优先级高于 open 与 items 状态`,type:`'open' | 'close'`,defaultValue:`-`},{prop:`icon`,description:`标题右侧的内置指示样式`,type:`'arrow' | 'plus'`,defaultValue:`-`},{prop:`items`,description:`数据驱动渲染方式，适合 FAQ、配置面板和后台列表`,type:`AccordionDataItem[]`,defaultValue:`-`},{prop:`multiple`,description:`允许同时展开多个 items；radio 形态会切为 checkbox 行为`,type:`boolean`,defaultValue:`false`},{prop:`name`,description:`分组名；radio 与 details 语义都会复用这个名称`,type:`string`,defaultValue:`自动生成`},{prop:`onChange`,description:`items 模式下的开合回调；单开返回 key，多开返回 keys`,type:`(value, context) => void`,defaultValue:`-`},{prop:`onToggle`,description:`children 模式下的单项开合回调`,type:`(open, context) => void`,defaultValue:`-`},{prop:`open`,description:`children 模式下的受控展开状态`,type:`boolean`,defaultValue:`-`},{prop:`openKeys`,description:`items 模式下的受控多开 keys`,type:`Array<string | number>`,defaultValue:`-`},{prop:`titleClassName`,description:`items 模式下统一追加到标题区域的类名`,type:`string`,defaultValue:`-`},{prop:`use`,description:`切换 radio 或 details 两种结构输出`,type:`'radio' | 'details'`,defaultValue:`'radio'`}],q=[{prop:`className`,description:`追加到当前 item 根节点的类名`,type:`string`,defaultValue:`-`},{prop:`content`,description:`折叠区内容`,type:`any`,defaultValue:`-`},{prop:`contentClassName`,description:`内容区域类名`,type:`string`,defaultValue:`-`},{prop:`description`,description:`标题下的补充说明文字`,type:`any`,defaultValue:`-`},{prop:`descriptionClassName`,description:`说明文字类名`,type:`string`,defaultValue:`-`},{prop:`disabled`,description:`禁用当前 item 交互`,type:`boolean`,defaultValue:`false`},{prop:`extra`,description:`标题行右侧的补充信息，可用于状态标记或数字`,type:`any`,defaultValue:`-`},{prop:`extraClassName`,description:`额外信息区域类名`,type:`string`,defaultValue:`-`},{prop:`force`,description:`对单个 item 单独强制展开或收起`,type:`'open' | 'close'`,defaultValue:`-`},{prop:`icon`,description:`覆盖全局 icon 设置`,type:`'arrow' | 'plus'`,defaultValue:`-`},{prop:`key`,description:`推荐显式提供的稳定标识，用于 activeKey / openKeys 匹配`,type:`string | number`,defaultValue:`index`},{prop:`open`,description:`非受控模式下的默认展开状态`,type:`boolean`,defaultValue:`false`},{prop:`title`,description:`标题区域内容`,type:`any`,defaultValue:`-`},{prop:`titleClassName`,description:`标题区域类名`,type:`string`,defaultValue:`-`},{prop:`use`,description:`覆盖全局 use 设置`,type:`'radio' | 'details'`,defaultValue:`-`}],J=(n,i)=>u(a=>{let s=g(`div`,a);t(()=>{_(s,i?.containerClassName??`grid gap-3`)});let l=e(`rue:list:start`),d=e(`rue:list:end`);o(s,l),o(s,d);let f=new Map;return t(()=>{f=b({items:W||[],getKey:(e,t)=>`${n}-${e.key}`,elements:f,parent:l.parentNode,before:d,start:l,renderItem:(a,s,l,d,f)=>{let g=u(()=>{let n=c(),s=e(`rue:component:anchor`);o(n,s),t(()=>{let e=h(H.Title,{as:i?.use===`details`?`summary`:`div`,className:`font-semibold`,children:a.title});r(()=>p(e,n,s))});let l=e(`rue:component:anchor`);return o(n,l),p(h(H.Content,{className:`text-sm opacity-80`,children:a.content}),n,l),n});m(h(H,{key:`${n}-${a.key}`,name:n,use:i?.use,icon:i?.icon,collapsible:i?.collapsible,className:i?.itemClassName??`bg-base-100 border border-base-300`,defaultOpen:f===0,children:g}),s,l,d)}})}),s}),Y=()=>{let{tabRadio:i,tabDetails:l,tabControlled:d,tabMultiple:m,tabRich:v,tabArrow:C,tabPlus:w,tabJoin:E,tabArrayRadio:D,tabArrayDetails:O,controlledKey:k,lastChanged:A,roadmapItems:j,faqItemsCode:M}=y(`useSetup:0:0`,()=>a(()=>({tabRadio:y(`ref:1:0`,()=>n(`preview`)),tabDetails:y(`ref:1:1`,()=>n(`preview`)),tabControlled:y(`ref:1:2`,()=>n(`preview`)),tabMultiple:y(`ref:1:3`,()=>n(`preview`)),tabRich:y(`ref:1:4`,()=>n(`preview`)),tabArrow:y(`ref:1:5`,()=>n(`preview`)),tabPlus:y(`ref:1:6`,()=>n(`preview`)),tabJoin:y(`ref:1:7`,()=>n(`preview`)),tabArrayRadio:y(`ref:1:8`,()=>n(`preview`)),tabArrayDetails:y(`ref:1:9`,()=>n(`preview`)),controlledKey:y(`ref:1:10`,()=>n(`build`)),lastChanged:y(`ref:1:11`,()=>n(`build`)),roadmapItems:[{key:`plan`,title:`Plan backlog`,description:`先确定优先级，再安排设计和开发`,extra:`Sprint 12`,content:`Collect the most urgent requirements, align on edge cases, and freeze the delivery order before implementation starts.`},{key:`build`,title:`Build feature slice`,description:`把 API、交互和回归验证收敛到同一轮里`,extra:`In progress`,content:`Ship the smallest useful slice first, then expand demos and tests around the verified behavior instead of guessing a broad design up front.`},{key:`ship`,title:`Ship and monitor`,description:`发布后持续看告警、埋点和反馈`,extra:`Ready`,content:`After release, keep an eye on error rate, support feedback and adoption signals so the next iteration has concrete evidence.`}],faqItemsCode:`const items = [
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
]`})));return u(n=>{let a=c(),y=e(`rue:component:anchor`);return o(a,y),p(h(T,{children:u(()=>{let n=c(),a=g(`div`,n);o(n,a),_(a,`max-w-none prose prose-sm md:prose-base`);let y=g(`h1`,a);o(a,y),o(y,f(`Accordion 手风琴`));let T=g(`p`,a);o(a,T),_(T,`text-sm mt-3 mb-3`),o(T,f(`Accordion 现在保留 Rue 原本的轻量视觉风格，但 API 不再只是静态包装。你可以继续用`));let N=g(`code`,T);o(T,N),o(N,f(`Accordion.Title`)),o(T,f(`和`));let P=g(`code`,T);o(T,P),o(P,f(`Accordion.Content`)),o(T,f(`组合单个面板，也可以直接用`));let F=g(`code`,T);o(T,F),o(F,f(`items`)),o(T,f(`走数据驱动，接入受控 key、多开、禁用和富标题信息。`));let I=g(`h2`,a);o(a,I),o(I,f(`何时使用`));let L=g(`ul`,a);o(a,L);let R=g(`li`,L);o(L,R),o(R,f(`需要 FAQ、设置说明、任务面板这类“标题 + 可折叠内容”的信息组织方式。`));let z=g(`li`,L);o(L,z),o(z,f(`需要在单开和多开之间切换，或把当前展开项接到页面状态里。`));let B=g(`li`,L);o(L,B),o(B,f(`需要在标题里补充状态、说明、标签，而不想为每个面板手写结构。`));let V=g(`li`,L);o(L,V),o(V,f(`需要让浏览器能搜索折叠内容时，使用`));let Y=g(`code`,V);o(V,Y),o(Y,f(`use="details"`)),o(V,f(`。`));let X=g(`div`,a);o(a,X),_(X,`not-prose my-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4`);let Z=e(`rue:list:start`),te=e(`rue:list:end`);o(X,Z),o(X,te);let ne=new Map;t(()=>{ne=b({items:G||[],getKey:(e,t)=>e.title,elements:ne,parent:X,before:te,singleRoot:!0,trackIndex:!1,start:Z,renderItem:(n,i,a,l,d)=>{p(u(()=>{let i=c(),a=g(`div`,i);o(i,a),t(()=>{s(a,`key`,String(n.title))}),_(a,`card border border-base-300 bg-base-100 shadow-sm`);let l=g(`div`,a);o(a,l),_(l,`card-body gap-2 p-4`);let u=g(`div`,l);o(l,u),_(u,`text-xs uppercase tracking-[0.2em] text-base-content/50`),o(u,f(`Capability`));let d=g(`div`,l);o(l,d),_(d,`text-sm font-semibold`);let m=e(`rue:slot:anchor`);o(d,m),t(()=>{let e=n.title;r(()=>p(e,d,m))});let h=g(`p`,l);o(l,h),_(h,`m-0 text-sm opacity-70`);let v=e(`rue:slot:anchor`);return o(h,v),t(()=>{let e=n.desc;r(()=>p(e,h,v))}),i}),i,a)}})});let re=e(`rue:component:anchor`);o(a,re),t(()=>{let e=h(U,{title:`Accordion using radio inputs`,summary:`保留单开分组，同时额外开启 collapsible，方便在文档页里反复点按查看开合状态。`,tab:i,preview:()=>J(`accordion-radio-demo`,{collapsible:!0}),code:`<Accordion className="bg-base-100 border border-base-300" name="accordion-radio-demo" defaultOpen collapsible>
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
</Accordion>`});r(()=>p(e,a,re))});let ie=e(`rue:component:anchor`);o(a,ie),t(()=>{let e=h(U,{title:`Accordion using details`,summary:`保留 details 结构，适合需要原生语义和浏览器搜索能力的内容区。`,tab:l,preview:()=>J(`accordion-details-demo`,{use:`details`}),code:`<Accordion use="details" className="bg-base-100 border border-base-300" name="accordion-details-demo" defaultOpen>
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
</Accordion>`});r(()=>p(e,a,ie))});let ae=e(`rue:component:anchor`);o(a,ae),t(()=>{let e=h(U,{title:`Controlled active key`,summary:`受控模式同样支持 collapsible；点击已展开项时，activeKey 会回到 null。`,tab:d,preview:()=>S(`div`,{className:`card bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body gap-4`,children:[S(`div`,{className:`flex flex-wrap gap-2`,children:j.map(e=>x(`button`,{className:`btn btn-sm ${k.value===e.key?`btn-primary`:`btn-ghost`}`,onClick:()=>{let t=k.value===e.key?null:e.key;k.value=t,A.value=t},children:[`切换 `,e.title]},e.key))}),x(`div`,{className:`grid gap-2 rounded-box border border-base-300 bg-base-200/40 p-3 text-sm`,children:[x(`div`,{children:[`当前 `,S(`code`,{children:`activeKey`}),`：`,S(`code`,{children:k.value??`null`})]}),x(`div`,{children:[`最近一次切换：`,S(`code`,{children:A.value??`null`})]})]}),S(H,{activeKey:k.value,collapsible:!0,icon:`arrow`,className:`bg-base-100 border border-base-300`,items:j,onChange:e=>{let t=Array.isArray(e)?e[0]:e;k.value=t??null,A.value=t??null}})]})}),code:`import { ref } from '@rue-js/rue'

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
/>`});r(()=>p(e,a,ae))});let oe=e(`rue:component:anchor`);o(a,oe),t(()=>{let e=h(U,{title:`Multiple open panels`,summary:`新增 multiple 与 defaultOpenKeys，可同时展开多个项；同一 API 也能配合 collapsible 做可收起单项。`,tab:m,preview:()=>x(`div`,{className:`grid gap-4 xl:grid-cols-[1.5fr_1fr]`,children:[S(`div`,{className:`card bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body gap-4`,children:[S(`div`,{className:`alert alert-soft`,children:S(`span`,{className:`text-sm`,children:`multiple 会把 radio 形态切到 checkbox 行为，适合筛选条件或调试面板。`})}),S(H,{multiple:!0,icon:`arrow`,className:`bg-base-100 border border-base-300`,defaultOpenKeys:[`latency`,`cache`],items:[{key:`latency`,title:`Latency budget`,description:`页面首屏与接口预算放在同一个地方追踪`,extra:`120ms`,content:`Track server timing, render budget and hydration cost together so regressions can be located quickly.`},{key:`cache`,title:`Cache strategy`,description:`缓存命中率和失效策略分开说明`,extra:`Warm`,content:`Document what can stay stale, what must be revalidated, and how to handle cache busting during deployments.`},{key:`rollback`,title:`Rollback checklist`,description:`保留快速回滚路径，避免线上排障时再找人`,extra:`Ops`,content:`Keep a minimal rollback playbook near the release notes so the on-call engineer can act without extra context switching.`}]})]})}),S(`div`,{className:`card bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body gap-4`,children:[x(`div`,{children:[S(`h3`,{className:`m-0 text-base font-semibold`,children:`Single but collapsible`}),x(`p`,{className:`mt-2 mb-0 text-sm opacity-70`,children:[`不想强制保留一个展开项时，可以给 children 模式加 `,S(`code`,{children:`collapsible`}),`。`]})]}),x(H,{collapsible:!0,defaultOpen:!0,className:`bg-base-100 border border-base-300`,icon:`plus`,children:[S(H.Title,{className:`font-semibold`,children:`Can I close the last open panel?`}),x(H.Content,{className:`text-sm opacity-80`,children:[`Yes. Set `,S(`code`,{children:`collapsible`}),` to allow toggling the current panel off instead of forcing one active item.`]})]})]})})]}),code:`<Accordion
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
</Accordion>`});r(()=>p(e,a,oe))});let se=e(`rue:component:anchor`);o(a,se),t(()=>{let e=h(U,{title:`Rich item metadata`,summary:`新增 description、extra 和 disabled，适合后台列表、规则说明和版本发布面板。`,tab:v,preview:()=>S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body gap-4`,children:S(H,{collapsible:!0,icon:`arrow`,className:`bg-base-100 border border-base-300`,items:[{key:`review`,title:`Review dependencies`,description:`上线前再核对一次依赖差异和风险说明`,extra:S(`span`,{className:`badge badge-warning badge-outline`,children:`Review`}),open:!0,content:`Compare the dependency diff with the last release baseline, and record whether each update changes runtime behavior or only build tooling.`},{key:`announce`,title:`Prepare release notes`,description:`把用户可感知的变化浓缩成 changelog 和公告文案`,extra:S(`span`,{className:`badge badge-success badge-outline`,children:`Ready`}),content:`Write the changelog from the user perspective first, then attach migration hints or rollout notes only when they affect adoption.`},{key:`ops`,title:`Ops handoff`,description:`值班同学确认回滚路径与观测指标后才能执行`,extra:S(`span`,{className:`badge badge-ghost`,children:`Waiting`}),disabled:!0,content:`This item is intentionally disabled to show how a non-interactive operational gate can still stay visible in the stack.`}]})})}),code:`<Accordion
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
/>`});r(()=>p(e,a,se))});let ce=e(`rue:component:anchor`);o(a,ce),t(()=>{let e=h(U,{title:`Accordion with arrow icon`,summary:`保留 arrow 指示样式，并开启 collapsible，方便直接验证箭头开合反馈。`,tab:C,preview:()=>J(`accordion-arrow-demo`,{icon:`arrow`,collapsible:!0}),code:`<Accordion icon="arrow" className="bg-base-100 border border-base-300" name="accordion-arrow-demo" defaultOpen collapsible>
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
</Accordion>`});r(()=>p(e,a,ce))});let le=e(`rue:component:anchor`);o(a,le),t(()=>{let e=h(U,{title:`Accordion with plus/minus icon`,summary:`保留 plus/minus 方案，并开启 collapsible，方便直接验证开合反馈。`,tab:w,preview:()=>J(`accordion-plus-demo`,{icon:`plus`,collapsible:!0}),code:`<Accordion icon="plus" className="bg-base-100 border border-base-300" name="accordion-plus-demo" defaultOpen collapsible>
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
</Accordion>`});r(()=>p(e,a,le))});let ue=e(`rue:component:anchor`);o(a,ue),t(()=>{let e=h(U,{title:`Using Accordion and Join together`,summary:`保留 join 组合方式，并开启 collapsible，方便连续边框场景下反复验证开合。`,tab:E,preview:()=>S(`div`,{className:`join join-vertical bg-base-100`,children:W.map((e,t)=>x(H,{icon:`arrow`,collapsible:!0,className:`join-item border border-base-300`,name:`accordion-join-demo`,defaultOpen:t===0,children:[S(H.Title,{className:`font-semibold`,children:e.title}),S(H.Content,{className:`text-sm opacity-80`,children:e.content})]},`join-${e.key}`))}),code:`<div className="join join-vertical bg-base-100">
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
</div>`});r(()=>p(e,a,ue))});let de=e(`rue:component:anchor`);o(a,de),t(()=>{let e=h(U,{title:`Accordion using items array (radio)`,summary:`保留 items 数组写法，并开启 collapsible，方便直接验证数据驱动下的收起逻辑。`,tab:D,preview:()=>S(H,{collapsible:!0,className:`bg-base-100 border border-base-300`,name:`accordion-array-radio-demo`,items:W.map((e,t)=>({key:e.key,title:e.title,content:e.content,open:t===0}))}),code:`${M}

<Accordion
  collapsible
  className="bg-base-100 border border-base-300"
  name="accordion-array-radio-demo"
  items={items}
/>`});r(()=>p(e,a,de))});let fe=e(`rue:component:anchor`);o(a,fe),t(()=>{let e=h(U,{title:`Accordion using items array (details)`,summary:`保留原来的 details + items 组合；现在它也能继续叠加 description、extra 和 disabled。`,tab:O,preview:()=>S(H,{use:`details`,className:`bg-base-100 border border-base-300`,name:`accordion-array-details-demo`,items:W.map((e,t)=>({key:e.key,title:e.title,content:e.content,open:t===0}))}),code:`${M}

<Accordion
  use="details"
  className="bg-base-100 border border-base-300"
  name="accordion-array-details-demo"
  items={items}
/>`});r(()=>p(e,a,fe))});let Q=g(`h2`,a);o(a,Q),s(Q,`id`,`accordion-api`),o(Q,f(`API`));let pe=g(`p`,a);o(a,pe),o(pe,f(`Accordion 现在分成两套用法：children 模式适合局部排版，items 模式适合数据驱动和受控状态。 两套模式共用同一套视觉类名，因此迁移旧示例时通常只需要把结构收敛到更清晰的语义层。`));let me=g(`h3`,a);o(a,me),o(me,f(`Accordion Props`));let he=e(`rue:component:anchor`);o(a,he),t(()=>{let e=h(ee,{rows:K});r(()=>p(e,a,he))});let $=g(`h3`,a);o(a,$),_($,`mt-6`),o($,f(`AccordionDataItem`));let ge=e(`rue:component:anchor`);return o(a,ge),t(()=>{let e=h(ee,{rows:q});r(()=>p(e,a,ge))}),n})}),a,y),a})};export{Y as default};