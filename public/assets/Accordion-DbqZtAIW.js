import{Q as e,Vt as t,Xt as n,Z as r,dt as i,ft as a,ht as o,it as s,l as c,nt as l,o as u,on as d,pt as f,rt as p,s as m,t as h,tn as g,tt as _,wt as v}from"./vapor-runtime-x7F5M-49.js";import{a as y,n as b}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as x}from"./Code-BoXKy3gJ.js";import{n as S,t as C}from"./src-Dlanwp1X.js";import{t as w}from"./tabs-C7cPs47_.js";import{r as T}from"./SidebarPlaygroundDesign-CK4W0Rsr.js";var E=0,D=(e,t)=>e?t?`${e} ${t}`:e:t??``,O=e=>{let t=[];return e.forEach(e=>{t.some(t=>t===e)||t.push(e)}),t},k=(e,t)=>{let n=O(Array.isArray(e)?e:[]);return t?n:n.slice(0,1)},A=e=>e==null?[]:[e],j=(e,t)=>e.length===t.length?e.every((e,n)=>e===t[n]):!1,M=(e,t,n,r,i,a)=>k(r===void 0?t===void 0?i===void 0?n===void 0?e.filter(e=>e.open).map(e=>e.key):A(n):i:A(t):r,a),N=(e,t,n)=>n===`open`?!0:n===`close`?!1:typeof e==`boolean`?e:typeof t==`boolean`?t:!1,P=(e,t)=>t===`open`?`collapse-open`:t===`close`?`collapse-close`:e?`collapse-open`:`collapse-close`,F=(e,t)=>{let n=t?.getRootNode?.(),r=n&&typeof n.querySelectorAll==`function`?n:typeof document<`u`?document:null;return r?Array.from(r.querySelectorAll(`[data-rue-accordion-group]`)).filter(t=>t.dataset.rueAccordionGroup===e):[]},I=e=>Array.from(e.children).find(e=>e instanceof HTMLInputElement&&(e.type===`checkbox`||e.type===`radio`)),L=e=>Array.from(e.children).find(e=>e instanceof HTMLElement&&e.classList.contains(`collapse-title`)),R=(e,t,n)=>{if(!(e instanceof HTMLElement))return;e.classList.remove(`collapse-open`,`collapse-close`),e.classList.add(P(t,n));let r=I(e);r&&r.checked!==t&&(r.checked=t);let i=L(e);i&&i.setAttribute(`aria-expanded`,t?`true`:`false`)},z=(e,t,n,r,i)=>r?n?O([...e,t]):e.filter(e=>e!==t):n?[t]:i?[]:e.some(e=>e===t)?[...e]:[t],B=e=>e?.type===`radio`,V=n=>n.description==null&&n.extra==null?n.title:c(r=>{let i=p(`div`,r);f(i,`flex w-full items-start justify-between gap-3`);let a=p(`div`,i);e(i,a),f(a,`min-w-0 flex-1`);let o=p(`div`,a);e(a,o);let s=_(`rue:slot:anchor`);e(o,s),t(()=>{let e=n.title;g(()=>u(e,o,s))});let d=_(`rue:slot:anchor`);e(a,d),t(()=>{let r=n.description==null?``:c(()=>{let r=l(),i=p(`div`,r);e(r,i),t(()=>{f(i,D(`mt-1 text-xs opacity-70`,n.descriptionClassName))});let a=_(`rue:slot:anchor`);return e(i,a),t(()=>{let e=n.description;g(()=>u(e,i,a))}),r});g(()=>u(r,a,d))});let m=_(`rue:slot:anchor`);return e(i,m),t(()=>{let r=n.extra==null?``:c(()=>{let r=l(),i=p(`div`,r);e(r,i),t(()=>{f(i,D(`shrink-0 text-xs opacity-70`,n.extraClassName))});let a=_(`rue:slot:anchor`);return e(i,a),t(()=>{let e=n.extra;g(()=>u(e,i,a))}),r});g(()=>u(r,i,m))}),i}),H=Object.assign(s=>{let{normalizedItems:h,generatedName:x,uncontrolledSingleOpen:w,uncontrolledGroupOpenKeys:T,groupName:O,hasItems:L,isGroupControlled:H,getCurrentSingleOpen:U,getCurrentGroupOpenKeys:ee,getItemOpen:W,buildItemClassName:G,buildWrapperClassName:K,buildStaticWrapperClassName:q,syncItemsDom:J,syncSingleDom:Y,commitGroupChange:X,commitSingleChange:Z}=y(`useSetup:0:0`,()=>d(()=>{let e=s.items?.map((e,t)=>({...e,key:e.key??t,index:t}))??[],t=`rue-accordion-${E++}`,r=y(`ref:1:0`,()=>n(N(s.open,s.defaultOpen,s.force))),i=y(`ref:1:1`,()=>n(M(e,s.activeKey,s.defaultActiveKey,s.openKeys,s.defaultOpenKeys,s.multiple))),a=y(`computed:1:2`,()=>v(()=>s.name??t)),o=a,c=e.length>0,l=y(`computed:1:3`,()=>v(()=>s.openKeys!==void 0||s.activeKey!==void 0)),u=l,d=()=>s.force===`open`?!0:s.force===`close`?!1:s.open===void 0?r.value:!!s.open,f=()=>s.openKeys===void 0?s.activeKey===void 0?i.value:k(A(s.activeKey),s.multiple):k(s.openKeys,s.multiple),p=e=>{let t=e.force??s.force;return t===`open`?!0:t===`close`?!1:f().some(t=>t===e.key)},m=e=>{let t=e.icon??s.icon,n=e.force??s.force,r=D(`collapse`,P(p(e),n));return t===`arrow`&&(r+=` collapse-arrow`),t===`plus`&&(r+=` collapse-plus`),s.className&&(r+=` ${s.className}`),e.className&&(r+=` ${e.className}`),(s.disabled||e.disabled)&&(r+=` opacity-70`),r},h=()=>{let e=D(`collapse`,P(d(),s.force));return s.icon===`arrow`&&(e+=` collapse-arrow`),s.icon===`plus`&&(e+=` collapse-plus`),s.className&&(e+=` ${s.className}`),s.disabled&&(e+=` opacity-70`),e},g=()=>{let e=`collapse`;return s.icon===`arrow`&&(e+=` collapse-arrow`),s.icon===`plus`&&(e+=` collapse-plus`),s.className&&(e+=` ${s.className}`),s.disabled&&(e+=` opacity-70`),e},_=(t,n)=>{F(o.get(),n).forEach(n=>{let r=e[Number(n.dataset.rueAccordionIndex??-1)];if(!r)return;let i=r.force??s.force,a=i===`open`?!0:i===`close`?!1:t.some(e=>e===r.key);n instanceof HTMLDetailsElement&&n.open!==a&&(n.open=a),R(n,a,i)})},b=e=>{F(o.get(),e).forEach(e=>{let t=e.dataset.rueAccordionForce??s.force,n=I(e);R(e,t===`open`?!0:t===`close`?!1:e instanceof HTMLDetailsElement?e.open:n?.checked===!0,t)})};return{normalizedItems:e,generatedName:t,uncontrolledSingleOpen:r,uncontrolledGroupOpenKeys:i,groupName:a,hasItems:c,isGroupControlled:l,getCurrentSingleOpen:d,getCurrentGroupOpenKeys:f,getItemOpen:p,buildItemClassName:m,buildWrapperClassName:h,buildStaticWrapperClassName:g,syncItemsDom:_,syncSingleDom:b,commitGroupChange:(e,t,n)=>{let r=e.force??s.force;if(s.disabled||e.disabled||r)return;let a=z(f(),e.key,t,s.multiple,s.collapsible),o=a.some(t=>t===e.key);u.get()||(j(i.value,a)||(i.value=a),_(a,n)),s.onChange&&s.onChange(s.multiple?a:a[0]??null,{key:e.key,index:e.index,open:o,item:e})},commitSingleChange:(e,t)=>{s.disabled||s.force||(s.open===void 0&&(r.value!==e&&(r.value=e),b(t)),s.onToggle&&s.onToggle(e,{key:o.get(),index:0,open:e}))}}}));if(L)return c(n=>{let r=l(),i=_(`rue:list:start`),a=_(`rue:list:end`);e(r,i),e(r,a);let o=new Map;return t(()=>{o=b({items:h||[],getKey:(e,t)=>e.key,elements:o,parent:i.parentNode,before:a,start:i,renderItem:(e,t,n,r,i)=>{m((()=>{let t=e.use??(s.use===void 0?`radio`:s.use),n=e.icon??s.icon,r=e.force??s.force,i=n===`arrow`&&(e.description!=null||e.extra!=null)?`after:top-6`:void 0,a=D(D(`collapse-title`,s.titleClassName),D(e.titleClassName,i)),o=D(D(`collapse-content`,s.contentClassName),e.contentClassName);if(t===`details`)return S(`details`,{className:G(e),open:W(e)?!0:void 0,"data-rue-accordion-group":O.get(),"data-rue-accordion-index":String(e.index),"data-rue-accordion-force":r,children:[C(`summary`,{className:a,"aria-expanded":W(e)?`true`:`false`,onClick:t=>{t.preventDefault(),X(e,!W(e),t.currentTarget)},children:V(e)}),C(`div`,{className:o,children:e.content})]},e.key);let c=s.multiple?`checkbox`:`radio`;return S(`div`,{className:G(e),"data-rue-accordion-group":O.get(),"data-rue-accordion-index":String(e.index),"data-rue-accordion-force":r,children:[C(`input`,{type:c,name:c===`radio`?O.get():void 0,checked:W(e),disabled:s.disabled||e.disabled||!!r,onClick:t=>{let n=t.currentTarget;!s.collapsible||!W(e)||!B(n)||(t.preventDefault(),n.checked=!1,X(e,!1,n))},onChange:t=>{let n=t.target.checked;X(e,n,t.currentTarget)}}),C(`div`,{className:a,"aria-expanded":W(e)?`true`:`false`,children:V(e)}),C(`div`,{className:o,children:e.content})]},e.key)})(),t,n,r)}})}),r});if((s.use===void 0?`radio`:s.use)===`details`){let n=s.open!==void 0||s.force!==void 0,a=N(s.open,s.defaultOpen,s.force);return c(o=>{let c=p(`details`,o);t(()=>{f(c,n?K():q())}),t(()=>{i(c,`name`,String(O.get()))}),t(()=>{i(c,`open`,String((n?U():a)?!0:void 0))}),t(()=>{i(c,`data-rue-accordion-group`,String(O.get()))}),t(()=>{i(c,`data-rue-accordion-force`,String(s.force))}),r(c,`toggle`,e=>{let t=e.currentTarget,n=t.open;if(s.disabled||s.force||s.open!==void 0){let e=U();t.open!==e&&(t.open=e),s.onToggle&&s.onToggle(e,{key:O.get(),index:0,open:e});return}s.onToggle&&s.onToggle(n,{key:O.get(),index:0,open:n})});let l=_(`rue:children:anchor`);return e(c,l),t(()=>{let e=s.children;g(()=>u(e,c,l))}),c})}return c(n=>{let c=p(`div`,n);t(()=>{f(c,K())}),t(()=>{i(c,`data-rue-accordion-group`,String(O.get()))}),t(()=>{i(c,`data-rue-accordion-force`,String(s.force))});let l=p(`input`,c);e(c,l),t(()=>{i(l,`type`,`radio`)}),t(()=>{i(l,`name`,String(O.get()))}),t(()=>{a(l,!!U())}),t(()=>{o(l,s.disabled||!!s.force)}),r(l,`click`,e=>{let t=e.currentTarget;!s.collapsible||!U()||!B(t)||(e.preventDefault(),t.checked=!1,Z(!1,t))}),r(l,`change`,e=>{let t=e.target.checked;Z(t,e.currentTarget)});let d=_(`rue:children:anchor`);return e(c,d),t(()=>{let e=s.children;g(()=>u(e,c,d))}),c})},{Title:n=>{let{mergedClassName:r}=y(`useSetup:0:0:dup1`,()=>d(()=>({mergedClassName:y(`computed:1:4`,()=>v(()=>D(`collapse-title`,n.className)))})));return(n.as===void 0?`div`:n.as)===`summary`?c(i=>{let a=p(`summary`,i);t(()=>{f(a,r.get())});let o=_(`rue:children:anchor`);return e(a,o),t(()=>{let e=n.children;g(()=>u(e,a,o))}),a}):(n.as===void 0?`div`:n.as)===`button`?c(a=>{let o=p(`button`,a);i(o,`type`,`button`),t(()=>{f(o,r.get())});let s=_(`rue:children:anchor`);return e(o,s),t(()=>{let e=n.children;g(()=>u(e,o,s))}),o}):c(i=>{let a=p(`div`,i);t(()=>{f(a,r.get())});let o=_(`rue:children:anchor`);return e(a,o),t(()=>{let e=n.children;g(()=>u(e,a,o))}),a})},Content:n=>c(r=>{let i=p(`div`,r);t(()=>{f(i,D(`collapse-content`,n.className))});let a=_(`rue:children:anchor`);return e(i,a),t(()=>{let e=n.children;g(()=>u(e,i,a))}),i})}),U=n=>c(r=>{let i=p(`div`,r);f(i,`component-preview not-prose text-base-content my-6 lg:my-12`);let a=p(`div`,i);e(i,a),f(a,`flex flex-wrap items-start justify-between gap-3`);let o=p(`div`,a);e(a,o);let d=p(`h2`,o);e(o,d),f(d,`component-preview-title mt-2 mb-1 text-lg font-semibold`),e(d,s(`# `));let m=_(`rue:slot:anchor`);e(d,m),t(()=>{let e=n.title;g(()=>u(e,d,m))});let v=_(`rue:slot:anchor`);e(o,v),t(()=>{let r=n.summary?c(()=>{let r=l(),i=p(`p`,r);e(r,i),f(i,`m-0 text-sm opacity-70`);let a=_(`rue:slot:anchor`);return e(i,a),t(()=>{let e=n.summary;g(()=>u(e,i,a))}),r}):``;g(()=>u(r,o,v))});let y=_(`rue:component:anchor`);e(i,y),t(()=>{let e=h(w,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`TSX代码`}],activeKey:n.tab.value,onChange:e=>n.tab.value=e,className:`mb-3 mt-4`});g(()=>u(e,i,y))});let b=_(`rue:slot:anchor`);return e(i,b),t(()=>{let r=n.tab.value===`preview`?n.preview():c(()=>{let r=l(),i=_(`rue:component:anchor`);return e(r,i),t(()=>{let e=h(x,{className:`mt-2`,lang:`tsx`,code:n.code});g(()=>u(e,r,i))}),r});g(()=>u(r,i,b))}),i}),ee=n=>c(r=>{let a=p(`div`,r);f(a,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let o=p(`table`,a);e(a,o),f(o,`table table-zebra`);let d=p(`thead`,o);e(o,d);let m=p(`tr`,d);e(d,m);let h=p(`th`,m);e(m,h),e(h,s(`属性`));let v=p(`th`,m);e(m,v),e(v,s(`说明`));let y=p(`th`,m);e(m,y),e(y,s(`类型`));let x=p(`th`,m);e(m,x),e(x,s(`默认值`));let S=p(`tbody`,o);e(o,S);let C=_(`rue:list:start`),w=_(`rue:list:end`);e(S,C),e(S,w);let T=new Map;return t(()=>{T=b({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,r,a,o,s)=>{u(c(()=>{let r=l(),a=p(`tr`,r);e(r,a),t(()=>{i(a,`key`,String(n.prop))});let o=p(`td`,a);e(a,o);let s=p(`code`,o);e(o,s);let c=_(`rue:slot:anchor`);e(s,c),t(()=>{let e=n.prop;g(()=>u(e,s,c))});let d=p(`td`,a);e(a,d);let f=_(`rue:slot:anchor`);e(d,f),t(()=>{let e=n.description;g(()=>u(e,d,f))});let m=p(`td`,a);e(a,m);let h=p(`code`,m);e(m,h);let v=_(`rue:slot:anchor`);e(h,v),t(()=>{let e=n.type;g(()=>u(e,h,v))});let y=p(`td`,a);e(a,y);let b=p(`code`,y);e(y,b);let x=_(`rue:slot:anchor`);return e(b,x),t(()=>{let e=n.defaultValue;g(()=>u(e,b,x))}),r}),r,a)}})}),a}),W=[{key:`account`,title:`How do I create an account?`,content:`Click the "Sign Up" button in the top right corner and follow the registration process.`},{key:`password`,title:`I forgot my password. What should I do?`,content:`Click on "Forgot Password" on the login page and follow the instructions sent to your email.`},{key:`profile`,title:`How do I update my profile information?`,content:`Go to "My Account" settings and select "Edit Profile" to make changes.`}],G=[{title:`Children 组合`,desc:`保持 Accordion.Title / Accordion.Content，用于局部定制标题和内容。`},{title:`Items 驱动`,desc:`直接用 items 写标题、描述、额外信息和禁用态，适合后台配置页。`},{title:`受控状态`,desc:`通过 activeKey、openKeys、onChange 接管当前展开项。`},{title:`两种语义`,desc:`默认 radio 风格适合单开；details 适合保持可搜索内容与原生语义。`}],K=[{prop:`activeKey`,description:`items 模式下的受控单开 key`,type:`string | number | null`,defaultValue:`-`},{prop:`className`,description:`追加到每个 Accordion 根节点的类名`,type:`string`,defaultValue:`-`},{prop:`collapsible`,description:`单开模式下允许把当前面板再次折叠`,type:`boolean`,defaultValue:`false`},{prop:`contentClassName`,description:`items 模式下统一追加到内容区域的类名`,type:`string`,defaultValue:`-`},{prop:`defaultActiveKey`,description:`items 模式下的非受控默认单开 key`,type:`string | number | null`,defaultValue:`-`},{prop:`defaultOpen`,description:`children 模式下的非受控默认展开状态`,type:`boolean`,defaultValue:`false`},{prop:`defaultOpenKeys`,description:`items 模式下的非受控默认多开 keys`,type:`Array<string | number>`,defaultValue:`-`},{prop:`disabled`,description:`禁用整个 Accordion 或当前 items 组的交互`,type:`boolean`,defaultValue:`false`},{prop:`force`,description:`强制视觉保持展开或收起，优先级高于 open 与 items 状态`,type:`'open' | 'close'`,defaultValue:`-`},{prop:`icon`,description:`标题右侧的内置指示样式`,type:`'arrow' | 'plus'`,defaultValue:`-`},{prop:`items`,description:`数据驱动渲染方式，适合 FAQ、配置面板和后台列表`,type:`AccordionDataItem[]`,defaultValue:`-`},{prop:`multiple`,description:`允许同时展开多个 items；radio 形态会切为 checkbox 行为`,type:`boolean`,defaultValue:`false`},{prop:`name`,description:`分组名；radio 与 details 语义都会复用这个名称`,type:`string`,defaultValue:`自动生成`},{prop:`onChange`,description:`items 模式下的开合回调；单开返回 key，多开返回 keys`,type:`(value, context) => void`,defaultValue:`-`},{prop:`onToggle`,description:`children 模式下的单项开合回调`,type:`(open, context) => void`,defaultValue:`-`},{prop:`open`,description:`children 模式下的受控展开状态`,type:`boolean`,defaultValue:`-`},{prop:`openKeys`,description:`items 模式下的受控多开 keys`,type:`Array<string | number>`,defaultValue:`-`},{prop:`titleClassName`,description:`items 模式下统一追加到标题区域的类名`,type:`string`,defaultValue:`-`},{prop:`use`,description:`切换 radio 或 details 两种结构输出`,type:`'radio' | 'details'`,defaultValue:`'radio'`}],q=[{prop:`className`,description:`追加到当前 item 根节点的类名`,type:`string`,defaultValue:`-`},{prop:`content`,description:`折叠区内容`,type:`any`,defaultValue:`-`},{prop:`contentClassName`,description:`内容区域类名`,type:`string`,defaultValue:`-`},{prop:`description`,description:`标题下的补充说明文字`,type:`any`,defaultValue:`-`},{prop:`descriptionClassName`,description:`说明文字类名`,type:`string`,defaultValue:`-`},{prop:`disabled`,description:`禁用当前 item 交互`,type:`boolean`,defaultValue:`false`},{prop:`extra`,description:`标题行右侧的补充信息，可用于状态标记或数字`,type:`any`,defaultValue:`-`},{prop:`extraClassName`,description:`额外信息区域类名`,type:`string`,defaultValue:`-`},{prop:`force`,description:`对单个 item 单独强制展开或收起`,type:`'open' | 'close'`,defaultValue:`-`},{prop:`icon`,description:`覆盖全局 icon 设置`,type:`'arrow' | 'plus'`,defaultValue:`-`},{prop:`key`,description:`推荐显式提供的稳定标识，用于 activeKey / openKeys 匹配`,type:`string | number`,defaultValue:`index`},{prop:`open`,description:`非受控模式下的默认展开状态`,type:`boolean`,defaultValue:`false`},{prop:`title`,description:`标题区域内容`,type:`any`,defaultValue:`-`},{prop:`titleClassName`,description:`标题区域类名`,type:`string`,defaultValue:`-`},{prop:`use`,description:`覆盖全局 use 设置`,type:`'radio' | 'details'`,defaultValue:`-`}],J=(n,r)=>c(i=>{let a=p(`div`,i);t(()=>{f(a,r?.containerClassName??`grid gap-3`)});let o=_(`rue:list:start`),s=_(`rue:list:end`);e(a,o),e(a,s);let d=new Map;return t(()=>{d=b({items:W||[],getKey:(e,t)=>`${n}-${e.key}`,elements:d,parent:o.parentNode,before:s,start:o,renderItem:(i,a,o,s,d)=>{let f=c(()=>{let n=l(),a=_(`rue:component:anchor`);e(n,a),t(()=>{let e=h(H.Title,{as:r?.use===`details`?`summary`:`div`,className:`font-semibold`,children:i.title});g(()=>u(e,n,a))});let o=_(`rue:component:anchor`);return e(n,o),u(h(H.Content,{className:`text-sm opacity-80`,children:i.content}),n,o),n});m(h(H,{key:`${n}-${i.key}`,name:n,use:r?.use,icon:r?.icon,collapsible:r?.collapsible,className:r?.itemClassName??`bg-base-100 border border-base-300`,defaultOpen:d===0,children:f}),a,o,s)}})}),a}),Y=()=>{let{tabRadio:r,tabDetails:a,tabControlled:o,tabMultiple:m,tabRich:v,tabArrow:x,tabPlus:w,tabJoin:E,tabArrayRadio:D,tabArrayDetails:O,controlledKey:k,lastChanged:A,roadmapItems:j,faqItemsCode:M}=y(`useSetup:0:0`,()=>d(()=>({tabRadio:y(`ref:1:0`,()=>n(`preview`)),tabDetails:y(`ref:1:1`,()=>n(`preview`)),tabControlled:y(`ref:1:2`,()=>n(`preview`)),tabMultiple:y(`ref:1:3`,()=>n(`preview`)),tabRich:y(`ref:1:4`,()=>n(`preview`)),tabArrow:y(`ref:1:5`,()=>n(`preview`)),tabPlus:y(`ref:1:6`,()=>n(`preview`)),tabJoin:y(`ref:1:7`,()=>n(`preview`)),tabArrayRadio:y(`ref:1:8`,()=>n(`preview`)),tabArrayDetails:y(`ref:1:9`,()=>n(`preview`)),controlledKey:y(`ref:1:10`,()=>n(`build`)),lastChanged:y(`ref:1:11`,()=>n(`build`)),roadmapItems:[{key:`plan`,title:`Plan backlog`,description:`先确定优先级，再安排设计和开发`,extra:`Sprint 12`,content:`Collect the most urgent requirements, align on edge cases, and freeze the delivery order before implementation starts.`},{key:`build`,title:`Build feature slice`,description:`把 API、交互和回归验证收敛到同一轮里`,extra:`In progress`,content:`Ship the smallest useful slice first, then expandDemos and tests around the verified behavior instead of guessing a broad design up front.`},{key:`ship`,title:`Ship and monitor`,description:`发布后持续看告警、埋点和反馈`,extra:`Ready`,content:`After release, keep an eye on error rate, support feedback and adoption signals so the next iteration has concrete evidence.`}],faqItemsCode:`const items = [
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
]`})));return c(n=>{let d=l(),y=_(`rue:component:anchor`);return e(d,y),u(h(T,{children:c(()=>{let n=l(),d=p(`div`,n);e(n,d),f(d,`max-w-none prose prose-sm md:prose-base`);let y=p(`h1`,d);e(d,y),e(y,s(`Accordion 手风琴`));let T=p(`p`,d);e(d,T),f(T,`text-sm mt-3 mb-3`),e(T,s(`Accordion 现在使用 Rue 基础的轻量视觉风格，但 API 不再只是静态包装。你可以用`));let N=p(`code`,T);e(T,N),e(N,s(`Accordion.Title`)),e(T,s(`和`));let P=p(`code`,T);e(T,P),e(P,s(`Accordion.Content`)),e(T,s(`组合单个面板，也可以直接用`));let F=p(`code`,T);e(T,F),e(F,s(`items`)),e(T,s(`走数据驱动，接入受控 key、多开、禁用和富标题信息。`));let I=p(`h2`,d);e(d,I),e(I,s(`何时使用`));let L=p(`ul`,d);e(d,L);let R=p(`li`,L);e(L,R),e(R,s(`需要 FAQ、设置说明、任务面板这类“标题 + 可折叠内容”的信息组织方式。`));let z=p(`li`,L);e(L,z),e(z,s(`需要在单开和多开之间切换，或把当前展开项接到页面状态里。`));let B=p(`li`,L);e(L,B),e(B,s(`需要在标题里补充状态、说明、标签，而不想为每个面板手写结构。`));let V=p(`li`,L);e(L,V),e(V,s(`需要让浏览器能搜索折叠内容时，使用`));let Y=p(`code`,V);e(V,Y),e(Y,s(`use="details"`)),e(V,s(`。`));let X=p(`div`,d);e(d,X),f(X,`not-prose my-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4`);let Z=_(`rue:list:start`),te=_(`rue:list:end`);e(X,Z),e(X,te);let ne=new Map;t(()=>{ne=b({items:G||[],getKey:(e,t)=>e.title,elements:ne,parent:X,before:te,singleRoot:!0,trackIndex:!1,start:Z,renderItem:(n,r,a,o,d)=>{u(c(()=>{let r=l(),a=p(`div`,r);e(r,a),t(()=>{i(a,`key`,String(n.title))}),f(a,`card border border-base-300 bg-base-100 shadow-sm`);let o=p(`div`,a);e(a,o),f(o,`card-body gap-2 p-4`);let c=p(`div`,o);e(o,c),f(c,`text-xs uppercase tracking-[0.2em] text-base-content/50`),e(c,s(`Capability`));let d=p(`div`,o);e(o,d),f(d,`text-sm font-semibold`);let m=_(`rue:slot:anchor`);e(d,m),t(()=>{let e=n.title;g(()=>u(e,d,m))});let h=p(`p`,o);e(o,h),f(h,`m-0 text-sm opacity-70`);let v=_(`rue:slot:anchor`);return e(h,v),t(()=>{let e=n.desc;g(()=>u(e,h,v))}),r}),r,a)}})});let re=_(`rue:component:anchor`);e(d,re),t(()=>{let e=h(U,{title:`Accordion using radio inputs`,summary:`展示单开分组，同时额外开启 collapsible，方便在文档页里反复点按查看开合状态。`,tab:r,preview:()=>J(`accordion-radio-demo`,{collapsible:!0}),code:`<Accordion className="bg-base-100 border border-base-300" name="accordion-radio-demo" defaultOpen collapsible>
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
</Accordion>`});g(()=>u(e,d,re))});let ie=_(`rue:component:anchor`);e(d,ie),t(()=>{let e=h(U,{title:`Accordion using details`,summary:`展示 details 结构，适合需要原生语义和浏览器搜索能力的内容区。`,tab:a,preview:()=>J(`accordion-details-demo`,{use:`details`}),code:`<Accordion use="details" className="bg-base-100 border border-base-300" name="accordion-details-demo" defaultOpen>
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
</Accordion>`});g(()=>u(e,d,ie))});let ae=_(`rue:component:anchor`);e(d,ae),t(()=>{let e=h(U,{title:`Controlled active key`,summary:`受控模式同样支持 collapsible；点击已展开项时，activeKey 会回到 null。`,tab:o,preview:()=>C(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body gap-4`,children:[C(`div`,{className:`flex flex-wrap gap-2`,children:j.map(e=>S(`button`,{className:`btn btn-sm ${k.value===e.key?`btn-primary`:`btn-ghost`}`,onClick:()=>{let t=k.value===e.key?null:e.key;k.value=t,A.value=t},children:[`切换 `,e.title]},e.key))}),S(`div`,{className:`grid gap-2 rounded-box border border-base-300 bg-base-200/40 p-3 text-sm`,children:[S(`div`,{children:[`当前 `,C(`code`,{children:`activeKey`}),`：`,C(`code`,{children:k.value??`null`})]}),S(`div`,{children:[`最近一次切换：`,C(`code`,{children:A.value??`null`})]})]}),C(H,{activeKey:k.value,collapsible:!0,icon:`arrow`,className:`bg-base-100 border border-base-300`,items:j,onChange:e=>{let t=Array.isArray(e)?e[0]:e;k.value=t??null,A.value=t??null}})]})}),code:`import { ref } from '@rue-js/rue'

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
/>`});g(()=>u(e,d,ae))});let oe=_(`rue:component:anchor`);e(d,oe),t(()=>{let e=h(U,{title:`Multiple open panels`,summary:`multiple 与 defaultOpenKeys 可同时展开多个项；同一 API 也能配合 collapsible 做可收起单项。`,tab:m,preview:()=>S(`div`,{className:`grid gap-4 xl:grid-cols-[1.5fr_1fr]`,children:[C(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body gap-4`,children:[C(`div`,{className:`alert alert-soft`,children:C(`span`,{className:`text-sm`,children:`multiple 会把 radio 形态切到 checkbox 行为，适合筛选条件或调试面板。`})}),C(H,{multiple:!0,icon:`arrow`,className:`bg-base-100 border border-base-300`,defaultOpenKeys:[`latency`,`cache`],items:[{key:`latency`,title:`Latency budget`,description:`页面首屏与接口预算放在同一个地方追踪`,extra:`120ms`,content:`Track server timing, render budget and hydration cost together so regressions can be located quickly.`},{key:`cache`,title:`Cache strategy`,description:`缓存命中率和失效策略分开说明`,extra:`Warm`,content:`Document what can stay stale, what must be revalidated, and how to handle cache busting during deployments.`},{key:`rollback`,title:`Rollback checklist`,description:`提供快速回滚路径，避免线上排障时再找人`,extra:`Ops`,content:`Keep a minimal rollback playbook near the release notes so the on-call engineer can act without extra context switching.`}]})]})}),C(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body gap-4`,children:[S(`div`,{children:[C(`h3`,{className:`m-0 text-base font-semibold`,children:`Single but collapsible`}),S(`p`,{className:`mt-2 mb-0 text-sm opacity-70`,children:[`不想强制保持一个展开项时，可以给 children 模式加 `,C(`code`,{children:`collapsible`}),`。`]})]}),S(H,{collapsible:!0,defaultOpen:!0,className:`bg-base-100 border border-base-300`,icon:`plus`,children:[C(H.Title,{className:`font-semibold`,children:`Can I close the last open panel?`}),S(H.Content,{className:`text-sm opacity-80`,children:[`Yes. Set `,C(`code`,{children:`collapsible`}),` to allow toggling the current panel off instead of forcing one active item.`]})]})]})})]}),code:`<Accordion
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
</Accordion>`});g(()=>u(e,d,oe))});let se=_(`rue:component:anchor`);e(d,se),t(()=>{let e=h(U,{title:`Rich item metadata`,summary:`description、extra 和 disabled 适合后台列表、规则说明和版本发布面板。`,tab:v,preview:()=>C(`div`,{className:`card bg-base-100 shadow-sm`,children:C(`div`,{className:`card-body gap-4`,children:C(H,{collapsible:!0,icon:`arrow`,className:`bg-base-100 border border-base-300`,items:[{key:`review`,title:`Review dependencies`,description:`上线前再核对一次依赖差异和风险说明`,extra:C(`span`,{className:`badge badge-warning badge-outline`,children:`Review`}),open:!0,content:`Compare the dependency diff with the last release baseline, and record whether each update changes runtime behavior or only build tooling.`},{key:`announce`,title:`Prepare release notes`,description:`把用户可感知的变化浓缩成 changelog 和公告文案`,extra:C(`span`,{className:`badge badge-success badge-outline`,children:`Ready`}),content:`Write the changelog from the user perspective first, then attach migration hints or rollout notes only when they affect adoption.`},{key:`ops`,title:`Ops handoff`,description:`值班同学确认回滚路径与观测指标后才能执行`,extra:C(`span`,{className:`badge badge-ghost`,children:`Waiting`}),disabled:!0,content:`This item is intentionally disabled to show how a non-interactive operational gate can still stay visible in the stack.`}]})})}),code:`<Accordion
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
/>`});g(()=>u(e,d,se))});let ce=_(`rue:component:anchor`);e(d,ce),t(()=>{let e=h(U,{title:`Accordion with arrow icon`,summary:`展示 arrow 指示样式，并开启 collapsible，方便直接验证箭头开合反馈。`,tab:x,preview:()=>J(`accordion-arrow-demo`,{icon:`arrow`,collapsible:!0}),code:`<Accordion icon="arrow" className="bg-base-100 border border-base-300" name="accordion-arrow-demo" defaultOpen collapsible>
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
</Accordion>`});g(()=>u(e,d,ce))});let le=_(`rue:component:anchor`);e(d,le),t(()=>{let e=h(U,{title:`Accordion with plus/minus icon`,summary:`展示 plus/minus 方案，并开启 collapsible，方便直接验证开合反馈。`,tab:w,preview:()=>J(`accordion-plus-demo`,{icon:`plus`,collapsible:!0}),code:`<Accordion icon="plus" className="bg-base-100 border border-base-300" name="accordion-plus-demo" defaultOpen collapsible>
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
</Accordion>`});g(()=>u(e,d,le))});let ue=_(`rue:component:anchor`);e(d,ue),t(()=>{let e=h(U,{title:`Using Accordion and Join together`,summary:`展示 join 组合方式，并开启 collapsible，方便连续边框场景下反复验证开合。`,tab:E,preview:()=>C(`div`,{className:`join join-vertical bg-base-100`,children:W.map((e,t)=>S(H,{icon:`arrow`,collapsible:!0,className:`join-item border border-base-300`,name:`accordion-join-demo`,defaultOpen:t===0,children:[C(H.Title,{className:`font-semibold`,children:e.title}),C(H.Content,{className:`text-sm opacity-80`,children:e.content})]},`join-${e.key}`))}),code:`<div className="join join-vertical bg-base-100">
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
</div>`});g(()=>u(e,d,ue))});let de=_(`rue:component:anchor`);e(d,de),t(()=>{let e=h(U,{title:`Accordion using items array (radio)`,summary:`展示 items 数组写法，并开启 collapsible，方便直接验证数据驱动下的收起逻辑。`,tab:D,preview:()=>C(H,{collapsible:!0,className:`bg-base-100 border border-base-300`,name:`accordion-array-radio-demo`,items:W.map((e,t)=>({key:e.key,title:e.title,content:e.content,open:t===0}))}),code:`${M}

<Accordion
  collapsible
  className="bg-base-100 border border-base-300"
  name="accordion-array-radio-demo"
  items={items}
/>`});g(()=>u(e,d,de))});let fe=_(`rue:component:anchor`);e(d,fe),t(()=>{let e=h(U,{title:`Accordion using items array (details)`,summary:`展示 details + items 组合；现在它也能继续叠加 description、extra 和 disabled。`,tab:O,preview:()=>C(H,{use:`details`,className:`bg-base-100 border border-base-300`,name:`accordion-array-details-demo`,items:W.map((e,t)=>({key:e.key,title:e.title,content:e.content,open:t===0}))}),code:`${M}

<Accordion
  use="details"
  className="bg-base-100 border border-base-300"
  name="accordion-array-details-demo"
  items={items}
/>`});g(()=>u(e,d,fe))});let Q=p(`h2`,d);e(d,Q),i(Q,`id`,`accordion-api`),e(Q,s(`API`));let pe=p(`p`,d);e(d,pe),e(pe,s(`Accordion 现在分成两套用法：children 模式适合局部排版，items 模式适合数据驱动和受控状态。 两套模式共用同一套视觉类名，因此重组示例时通常只需要把结构收敛到更清晰的语义层。`));let me=p(`h3`,d);e(d,me),e(me,s(`Accordion Props`));let he=_(`rue:component:anchor`);e(d,he),t(()=>{let e=h(ee,{rows:K});g(()=>u(e,d,he))});let $=p(`h3`,d);e(d,$),f($,`mt-6`),e($,s(`AccordionDataItem`));let ge=_(`rue:component:anchor`);return e(d,ge),t(()=>{let e=h(ee,{rows:q});g(()=>u(e,d,ge))}),n})}),d,y),d})};export{Y as default};