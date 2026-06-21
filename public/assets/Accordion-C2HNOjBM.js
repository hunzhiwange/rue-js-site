import{$t as e,Jt as t,Q as n,St as r,Z as i,dt as a,et as o,in as s,l as c,lt as l,nt as u,o as d,pt as f,rt as p,s as m,t as h,tt as g,ut as _,zt as v}from"./vapor-runtime-DsQWl-IB.js";import{a as y,n as b}from"./vapor-helpers-vapor-Dg64FcpK.js";import{a as x,i as S}from"./persistentSidebarPlayground-6jqnvaEa.js";import{t as C}from"./Code-4SUSUwRg.js";import{t as w}from"./tabs-Duzh3URW.js";import{r as T}from"./SidebarPlaygroundDesign-EU389JDE.js";var E=0,D=(e,t)=>e?t?`${e} ${t}`:e:t??``,O=e=>{let t=[];return e.forEach(e=>{t.some(t=>t===e)||t.push(e)}),t},k=(e,t)=>{let n=O(Array.isArray(e)?e:[]);return t?n:n.slice(0,1)},A=e=>e==null?[]:[e],j=(e,t)=>e.length===t.length?e.every((e,n)=>e===t[n]):!1,M=(e,t,n,r,i,a)=>k(r===void 0?t===void 0?i===void 0?n===void 0?e.filter(e=>e.open).map(e=>e.key):A(n):i:A(t):r,a),N=(e,t,n)=>n===`open`?!0:n===`close`?!1:typeof e==`boolean`?e:typeof t==`boolean`?t:!1,P=(e,t)=>t===`open`?`collapse-open`:t===`close`?`collapse-close`:e?`collapse-open`:`collapse-close`,F=(e,t)=>{let n=t?.getRootNode?.(),r=n&&typeof n.querySelectorAll==`function`?n:typeof document<`u`?document:null;return r?Array.from(r.querySelectorAll(`[data-rue-accordion-group]`)).filter(t=>t.dataset.rueAccordionGroup===e):[]},I=e=>Array.from(e.children).find(e=>e instanceof HTMLInputElement&&(e.type===`checkbox`||e.type===`radio`)),L=e=>Array.from(e.children).find(e=>e instanceof HTMLElement&&e.classList.contains(`collapse-title`)),R=(e,t,n)=>{if(!(e instanceof HTMLElement))return;e.classList.remove(`collapse-open`,`collapse-close`),e.classList.add(P(t,n));let r=I(e);r&&r.checked!==t&&(r.checked=t);let i=L(e);i&&i.setAttribute(`aria-expanded`,t?`true`:`false`)},z=(e,t,n,r,i)=>r?n?O([...e,t]):e.filter(e=>e!==t):n?[t]:i?[]:e.some(e=>e===t)?[...e]:[t],B=e=>e?.type===`radio`,V=t=>t.description==null&&t.extra==null?t.title:c(r=>{let i=u(`div`,r);a(i,`flex w-full items-start justify-between gap-3`);let s=u(`div`,i);n(i,s),a(s,`min-w-0 flex-1`);let l=u(`div`,s);n(s,l);let f=o(`rue:slot:anchor`);n(l,f),v(()=>{let n=t.title;e(()=>d(n,l,f))});let p=o(`rue:slot:anchor`);n(s,p),v(()=>{let r=t.description==null?``:c(()=>{let r=g(),i=u(`div`,r);n(r,i),v(()=>{a(i,D(`mt-1 text-xs opacity-70`,t.descriptionClassName))});let s=o(`rue:slot:anchor`);return n(i,s),v(()=>{let n=t.description;e(()=>d(n,i,s))}),r});e(()=>d(r,s,p))});let m=o(`rue:slot:anchor`);return n(i,m),v(()=>{let r=t.extra==null?``:c(()=>{let r=g(),i=u(`div`,r);n(r,i),v(()=>{a(i,D(`shrink-0 text-xs opacity-70`,t.extraClassName))});let s=o(`rue:slot:anchor`);return n(i,s),v(()=>{let n=t.extra;e(()=>d(n,i,s))}),r});e(()=>d(r,i,m))}),i}),H=Object.assign(p=>{let{normalizedItems:h,generatedName:C,uncontrolledSingleOpen:w,uncontrolledGroupOpenKeys:T,groupName:O,hasItems:L,isGroupControlled:H,getCurrentSingleOpen:U,getCurrentGroupOpenKeys:ee,getItemOpen:W,buildItemClassName:G,buildWrapperClassName:K,buildStaticWrapperClassName:q,syncItemsDom:J,syncSingleDom:Y,commitGroupChange:X,commitSingleChange:Z}=y(`useSetup:0:0`,()=>s(()=>{let e=p.items?.map((e,t)=>({...e,key:e.key??t,index:t}))??[],n=`rue-accordion-${E++}`,i=y(`ref:1:0`,()=>t(N(p.open,p.defaultOpen,p.force))),a=y(`ref:1:1`,()=>t(M(e,p.activeKey,p.defaultActiveKey,p.openKeys,p.defaultOpenKeys,p.multiple))),o=y(`computed:1:2`,()=>r(()=>p.name??n)),s=o,c=e.length>0,l=y(`computed:1:3`,()=>r(()=>p.openKeys!==void 0||p.activeKey!==void 0)),u=l,d=()=>p.force===`open`?!0:p.force===`close`?!1:p.open===void 0?i.value:!!p.open,f=()=>p.openKeys===void 0?p.activeKey===void 0?a.value:k(A(p.activeKey),p.multiple):k(p.openKeys,p.multiple),m=e=>{let t=e.force??p.force;return t===`open`?!0:t===`close`?!1:f().some(t=>t===e.key)},h=e=>{let t=e.icon??p.icon,n=e.force??p.force,r=D(`collapse`,P(m(e),n));return t===`arrow`&&(r+=` collapse-arrow`),t===`plus`&&(r+=` collapse-plus`),p.className&&(r+=` ${p.className}`),e.className&&(r+=` ${e.className}`),(p.disabled||e.disabled)&&(r+=` opacity-70`),r},g=()=>{let e=D(`collapse`,P(d(),p.force));return p.icon===`arrow`&&(e+=` collapse-arrow`),p.icon===`plus`&&(e+=` collapse-plus`),p.className&&(e+=` ${p.className}`),p.disabled&&(e+=` opacity-70`),e},_=()=>{let e=`collapse`;return p.icon===`arrow`&&(e+=` collapse-arrow`),p.icon===`plus`&&(e+=` collapse-plus`),p.className&&(e+=` ${p.className}`),p.disabled&&(e+=` opacity-70`),e},v=(t,n)=>{F(s.get(),n).forEach(n=>{let r=e[Number(n.dataset.rueAccordionIndex??-1)];if(!r)return;let i=r.force??p.force,a=i===`open`?!0:i===`close`?!1:t.some(e=>e===r.key);n instanceof HTMLDetailsElement&&n.open!==a&&(n.open=a),R(n,a,i)})},b=e=>{F(s.get(),e).forEach(e=>{let t=e.dataset.rueAccordionForce??p.force,n=I(e);R(e,t===`open`?!0:t===`close`?!1:e instanceof HTMLDetailsElement?e.open:n?.checked===!0,t)})};return{normalizedItems:e,generatedName:n,uncontrolledSingleOpen:i,uncontrolledGroupOpenKeys:a,groupName:o,hasItems:c,isGroupControlled:l,getCurrentSingleOpen:d,getCurrentGroupOpenKeys:f,getItemOpen:m,buildItemClassName:h,buildWrapperClassName:g,buildStaticWrapperClassName:_,syncItemsDom:v,syncSingleDom:b,commitGroupChange:(e,t,n)=>{let r=e.force??p.force;if(p.disabled||e.disabled||r)return;let i=z(f(),e.key,t,p.multiple,p.collapsible),o=i.some(t=>t===e.key);u.get()||(j(a.value,i)||(a.value=i),v(i,n)),p.onChange&&p.onChange(p.multiple?i:i[0]??null,{key:e.key,index:e.index,open:o,item:e})},commitSingleChange:(e,t)=>{p.disabled||p.force||(p.open===void 0&&(i.value!==e&&(i.value=e),b(t)),p.onToggle&&p.onToggle(e,{key:s.get(),index:0,open:e}))}}}));if(L)return c(e=>{let t=g(),r=o(`rue:list:start`),i=o(`rue:list:end`);n(t,r),n(t,i);let a=new Map;return v(()=>{a=b({items:h||[],getKey:(e,t)=>e.key,elements:a,parent:r.parentNode,before:i,start:r,renderItem:(e,t,n,r,i)=>{m((()=>{let t=e.use??(p.use===void 0?`radio`:p.use),n=e.icon??p.icon,r=e.force??p.force,i=n===`arrow`&&(e.description!=null||e.extra!=null)?`after:top-6`:void 0,a=D(D(`collapse-title`,p.titleClassName),D(e.titleClassName,i)),o=D(D(`collapse-content`,p.contentClassName),e.contentClassName);if(t===`details`)return x(`details`,{className:G(e),open:W(e)?!0:void 0,"data-rue-accordion-group":O.get(),"data-rue-accordion-index":String(e.index),"data-rue-accordion-force":r,children:[S(`summary`,{className:a,"aria-expanded":W(e)?`true`:`false`,onClick:t=>{t.preventDefault(),X(e,!W(e),t.currentTarget)},children:V(e)}),S(`div`,{className:o,children:e.content})]},e.key);let s=p.multiple?`checkbox`:`radio`;return x(`div`,{className:G(e),"data-rue-accordion-group":O.get(),"data-rue-accordion-index":String(e.index),"data-rue-accordion-force":r,children:[S(`input`,{type:s,name:s===`radio`?O.get():void 0,checked:W(e),disabled:p.disabled||e.disabled||!!r,onClick:t=>{let n=t.currentTarget;!p.collapsible||!W(e)||!B(n)||(t.preventDefault(),n.checked=!1,X(e,!1,n))},onChange:t=>{let n=t.target.checked;X(e,n,t.currentTarget)}}),S(`div`,{className:a,"aria-expanded":W(e)?`true`:`false`,children:V(e)}),S(`div`,{className:o,children:e.content})]},e.key)})(),t,n,r)}})}),t});if((p.use===void 0?`radio`:p.use)===`details`){let t=p.open!==void 0||p.force!==void 0,r=N(p.open,p.defaultOpen,p.force);return c(s=>{let c=u(`details`,s);v(()=>{a(c,t?K():q())}),v(()=>{l(c,`name`,String(O.get()))}),v(()=>{l(c,`open`,String((t?U():r)?!0:void 0))}),v(()=>{l(c,`data-rue-accordion-group`,String(O.get()))}),v(()=>{l(c,`data-rue-accordion-force`,String(p.force))}),i(c,`toggle`,e=>{let t=e.currentTarget,n=t.open;if(p.disabled||p.force||p.open!==void 0){let e=U();t.open!==e&&(t.open=e),p.onToggle&&p.onToggle(e,{key:O.get(),index:0,open:e});return}p.onToggle&&p.onToggle(n,{key:O.get(),index:0,open:n})});let f=o(`rue:children:anchor`);return n(c,f),v(()=>{let t=p.children;e(()=>d(t,c,f))}),c})}return c(t=>{let r=u(`div`,t);v(()=>{a(r,K())}),v(()=>{l(r,`data-rue-accordion-group`,String(O.get()))}),v(()=>{l(r,`data-rue-accordion-force`,String(p.force))});let s=u(`input`,r);n(r,s),v(()=>{l(s,`type`,`radio`)}),v(()=>{l(s,`name`,String(O.get()))}),v(()=>{_(s,!!U())}),v(()=>{f(s,p.disabled||!!p.force)}),i(s,`click`,e=>{let t=e.currentTarget;!p.collapsible||!U()||!B(t)||(e.preventDefault(),t.checked=!1,Z(!1,t))}),i(s,`change`,e=>{let t=e.target.checked;Z(t,e.currentTarget)});let c=o(`rue:children:anchor`);return n(r,c),v(()=>{let t=p.children;e(()=>d(t,r,c))}),r})},{Title:t=>{let{mergedClassName:i}=y(`useSetup:0:0:dup1`,()=>s(()=>({mergedClassName:y(`computed:1:4`,()=>r(()=>D(`collapse-title`,t.className)))})));return(t.as===void 0?`div`:t.as)===`summary`?c(r=>{let s=u(`summary`,r);v(()=>{a(s,i.get())});let c=o(`rue:children:anchor`);return n(s,c),v(()=>{let n=t.children;e(()=>d(n,s,c))}),s}):(t.as===void 0?`div`:t.as)===`button`?c(r=>{let s=u(`button`,r);l(s,`type`,`button`),v(()=>{a(s,i.get())});let c=o(`rue:children:anchor`);return n(s,c),v(()=>{let n=t.children;e(()=>d(n,s,c))}),s}):c(r=>{let s=u(`div`,r);v(()=>{a(s,i.get())});let c=o(`rue:children:anchor`);return n(s,c),v(()=>{let n=t.children;e(()=>d(n,s,c))}),s})},Content:t=>c(r=>{let i=u(`div`,r);v(()=>{a(i,D(`collapse-content`,t.className))});let s=o(`rue:children:anchor`);return n(i,s),v(()=>{let n=t.children;e(()=>d(n,i,s))}),i})}),U=t=>c(r=>{let i=u(`div`,r);a(i,`component-preview not-prose text-base-content my-6 lg:my-12`);let s=u(`div`,i);n(i,s),a(s,`flex flex-wrap items-start justify-between gap-3`);let l=u(`div`,s);n(s,l);let f=u(`h2`,l);n(l,f),a(f,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(f,p(`# `));let m=o(`rue:slot:anchor`);n(f,m),v(()=>{let n=t.title;e(()=>d(n,f,m))});let _=o(`rue:slot:anchor`);n(l,_),v(()=>{let r=t.summary?c(()=>{let r=g(),i=u(`p`,r);n(r,i),a(i,`m-0 text-sm opacity-70`);let s=o(`rue:slot:anchor`);return n(i,s),v(()=>{let n=t.summary;e(()=>d(n,i,s))}),r}):``;e(()=>d(r,l,_))});let y=o(`rue:component:anchor`);n(i,y),v(()=>{let n=h(w,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`TSX代码`}],activeKey:t.tab.value,onChange:e=>t.tab.value=e,className:`mb-3 mt-4`});e(()=>d(n,i,y))});let b=o(`rue:slot:anchor`);return n(i,b),v(()=>{let r=t.tab.value===`preview`?t.preview():c(()=>{let r=g(),i=o(`rue:component:anchor`);return n(r,i),v(()=>{let n=h(C,{className:`mt-2`,lang:`tsx`,code:t.code});e(()=>d(n,r,i))}),r});e(()=>d(r,i,b))}),i}),ee=t=>c(r=>{let i=u(`div`,r);a(i,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let s=u(`table`,i);n(i,s),a(s,`table table-zebra`);let f=u(`thead`,s);n(s,f);let m=u(`tr`,f);n(f,m);let h=u(`th`,m);n(m,h),n(h,p(`属性`));let _=u(`th`,m);n(m,_),n(_,p(`说明`));let y=u(`th`,m);n(m,y),n(y,p(`类型`));let x=u(`th`,m);n(m,x),n(x,p(`默认值`));let S=u(`tbody`,s);n(s,S);let C=o(`rue:list:start`),w=o(`rue:list:end`);n(S,C),n(S,w);let T=new Map;return v(()=>{T=b({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,r,i,a,s)=>{d(c(()=>{let r=g(),i=u(`tr`,r);n(r,i),v(()=>{l(i,`key`,String(t.prop))});let a=u(`td`,i);n(i,a);let s=u(`code`,a);n(a,s);let c=o(`rue:slot:anchor`);n(s,c),v(()=>{let n=t.prop;e(()=>d(n,s,c))});let f=u(`td`,i);n(i,f);let p=o(`rue:slot:anchor`);n(f,p),v(()=>{let n=t.description;e(()=>d(n,f,p))});let m=u(`td`,i);n(i,m);let h=u(`code`,m);n(m,h);let _=o(`rue:slot:anchor`);n(h,_),v(()=>{let n=t.type;e(()=>d(n,h,_))});let y=u(`td`,i);n(i,y);let b=u(`code`,y);n(y,b);let x=o(`rue:slot:anchor`);return n(b,x),v(()=>{let n=t.defaultValue;e(()=>d(n,b,x))}),r}),r,i)}})}),i}),W=[{key:`account`,title:`How do I create an account?`,content:`Click the "Sign Up" button in the top right corner and follow the registration process.`},{key:`password`,title:`I forgot my password. What should I do?`,content:`Click on "Forgot Password" on the login page and follow the instructions sent to your email.`},{key:`profile`,title:`How do I update my profile information?`,content:`Go to "My Account" settings and select "Edit Profile" to make changes.`}],G=[{title:`Children 组合`,desc:`保持 Accordion.Title / Accordion.Content，用于局部定制标题和内容。`},{title:`Items 驱动`,desc:`直接用 items 写标题、描述、额外信息和禁用态，适合后台配置页。`},{title:`受控状态`,desc:`通过 activeKey、openKeys、onChange 接管当前展开项。`},{title:`两种语义`,desc:`默认 radio 风格适合单开；details 适合保持可搜索内容与原生语义。`}],K=[{prop:`activeKey`,description:`items 模式下的受控单开 key`,type:`string | number | null`,defaultValue:`-`},{prop:`className`,description:`追加到每个 Accordion 根节点的类名`,type:`string`,defaultValue:`-`},{prop:`collapsible`,description:`单开模式下允许把当前面板再次折叠`,type:`boolean`,defaultValue:`false`},{prop:`contentClassName`,description:`items 模式下统一追加到内容区域的类名`,type:`string`,defaultValue:`-`},{prop:`defaultActiveKey`,description:`items 模式下的非受控默认单开 key`,type:`string | number | null`,defaultValue:`-`},{prop:`defaultOpen`,description:`children 模式下的非受控默认展开状态`,type:`boolean`,defaultValue:`false`},{prop:`defaultOpenKeys`,description:`items 模式下的非受控默认多开 keys`,type:`Array<string | number>`,defaultValue:`-`},{prop:`disabled`,description:`禁用整个 Accordion 或当前 items 组的交互`,type:`boolean`,defaultValue:`false`},{prop:`force`,description:`强制视觉保持展开或收起，优先级高于 open 与 items 状态`,type:`'open' | 'close'`,defaultValue:`-`},{prop:`icon`,description:`标题右侧的内置指示样式`,type:`'arrow' | 'plus'`,defaultValue:`-`},{prop:`items`,description:`数据驱动渲染方式，适合 FAQ、配置面板和后台列表`,type:`AccordionDataItem[]`,defaultValue:`-`},{prop:`multiple`,description:`允许同时展开多个 items；radio 形态会切为 checkbox 行为`,type:`boolean`,defaultValue:`false`},{prop:`name`,description:`分组名；radio 与 details 语义都会复用这个名称`,type:`string`,defaultValue:`自动生成`},{prop:`onChange`,description:`items 模式下的开合回调；单开返回 key，多开返回 keys`,type:`(value, context) => void`,defaultValue:`-`},{prop:`onToggle`,description:`children 模式下的单项开合回调`,type:`(open, context) => void`,defaultValue:`-`},{prop:`open`,description:`children 模式下的受控展开状态`,type:`boolean`,defaultValue:`-`},{prop:`openKeys`,description:`items 模式下的受控多开 keys`,type:`Array<string | number>`,defaultValue:`-`},{prop:`titleClassName`,description:`items 模式下统一追加到标题区域的类名`,type:`string`,defaultValue:`-`},{prop:`use`,description:`切换 radio 或 details 两种结构输出`,type:`'radio' | 'details'`,defaultValue:`'radio'`}],q=[{prop:`className`,description:`追加到当前 item 根节点的类名`,type:`string`,defaultValue:`-`},{prop:`content`,description:`折叠区内容`,type:`any`,defaultValue:`-`},{prop:`contentClassName`,description:`内容区域类名`,type:`string`,defaultValue:`-`},{prop:`description`,description:`标题下的补充说明文字`,type:`any`,defaultValue:`-`},{prop:`descriptionClassName`,description:`说明文字类名`,type:`string`,defaultValue:`-`},{prop:`disabled`,description:`禁用当前 item 交互`,type:`boolean`,defaultValue:`false`},{prop:`extra`,description:`标题行右侧的补充信息，可用于状态标记或数字`,type:`any`,defaultValue:`-`},{prop:`extraClassName`,description:`额外信息区域类名`,type:`string`,defaultValue:`-`},{prop:`force`,description:`对单个 item 单独强制展开或收起`,type:`'open' | 'close'`,defaultValue:`-`},{prop:`icon`,description:`覆盖全局 icon 设置`,type:`'arrow' | 'plus'`,defaultValue:`-`},{prop:`key`,description:`推荐显式提供的稳定标识，用于 activeKey / openKeys 匹配`,type:`string | number`,defaultValue:`index`},{prop:`open`,description:`非受控模式下的默认展开状态`,type:`boolean`,defaultValue:`false`},{prop:`title`,description:`标题区域内容`,type:`any`,defaultValue:`-`},{prop:`titleClassName`,description:`标题区域类名`,type:`string`,defaultValue:`-`},{prop:`use`,description:`覆盖全局 use 设置`,type:`'radio' | 'details'`,defaultValue:`-`}],J=(t,r)=>c(i=>{let s=u(`div`,i);v(()=>{a(s,r?.containerClassName??`grid gap-3`)});let l=o(`rue:list:start`),f=o(`rue:list:end`);n(s,l),n(s,f);let p=new Map;return v(()=>{p=b({items:W||[],getKey:(e,n)=>`${t}-${e.key}`,elements:p,parent:l.parentNode,before:f,start:l,renderItem:(i,a,s,l,u)=>{let f=c(()=>{let t=g(),a=o(`rue:component:anchor`);n(t,a),v(()=>{let n=h(H.Title,{as:r?.use===`details`?`summary`:`div`,className:`font-semibold`,children:i.title});e(()=>d(n,t,a))});let s=o(`rue:component:anchor`);return n(t,s),d(h(H.Content,{className:`text-sm opacity-80`,children:i.content}),t,s),t});m(h(H,{key:`${t}-${i.key}`,name:t,use:r?.use,icon:r?.icon,collapsible:r?.collapsible,className:r?.itemClassName??`bg-base-100 border border-base-300`,defaultOpen:u===0,children:f}),a,s,l)}})}),s}),Y=()=>{let{tabRadio:r,tabDetails:i,tabControlled:f,tabMultiple:m,tabRich:_,tabArrow:C,tabPlus:w,tabJoin:E,tabArrayRadio:D,tabArrayDetails:O,controlledKey:k,lastChanged:A,roadmapItems:j,faqItemsCode:M}=y(`useSetup:0:0`,()=>s(()=>({tabRadio:y(`ref:1:0`,()=>t(`preview`)),tabDetails:y(`ref:1:1`,()=>t(`preview`)),tabControlled:y(`ref:1:2`,()=>t(`preview`)),tabMultiple:y(`ref:1:3`,()=>t(`preview`)),tabRich:y(`ref:1:4`,()=>t(`preview`)),tabArrow:y(`ref:1:5`,()=>t(`preview`)),tabPlus:y(`ref:1:6`,()=>t(`preview`)),tabJoin:y(`ref:1:7`,()=>t(`preview`)),tabArrayRadio:y(`ref:1:8`,()=>t(`preview`)),tabArrayDetails:y(`ref:1:9`,()=>t(`preview`)),controlledKey:y(`ref:1:10`,()=>t(`build`)),lastChanged:y(`ref:1:11`,()=>t(`build`)),roadmapItems:[{key:`plan`,title:`Plan backlog`,description:`先确定优先级，再安排设计和开发`,extra:`Sprint 12`,content:`Collect the most urgent requirements, align on edge cases, and freeze the delivery order before implementation starts.`},{key:`build`,title:`Build feature slice`,description:`把 API、交互和回归验证收敛到同一轮里`,extra:`In progress`,content:`Ship the smallest useful slice first, then expandDemos and tests around the verified behavior instead of guessing a broad design up front.`},{key:`ship`,title:`Ship and monitor`,description:`发布后持续看告警、埋点和反馈`,extra:`Ready`,content:`After release, keep an eye on error rate, support feedback and adoption signals so the next iteration has concrete evidence.`}],faqItemsCode:`const items = [
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
]`})));return c(t=>{let s=g(),y=o(`rue:component:anchor`);return n(s,y),d(h(T,{children:c(()=>{let t=g(),s=u(`div`,t);n(t,s),a(s,`max-w-none prose prose-sm md:prose-base`);let y=u(`h1`,s);n(s,y),n(y,p(`Accordion 手风琴`));let T=u(`p`,s);n(s,T),a(T,`text-sm mt-3 mb-3`),n(T,p(`Accordion 现在使用 Rue 基础的轻量视觉风格，但 API 不再只是静态包装。你可以用`));let N=u(`code`,T);n(T,N),n(N,p(`Accordion.Title`)),n(T,p(`和`));let P=u(`code`,T);n(T,P),n(P,p(`Accordion.Content`)),n(T,p(`组合单个面板，也可以直接用`));let F=u(`code`,T);n(T,F),n(F,p(`items`)),n(T,p(`走数据驱动，接入受控 key、多开、禁用和富标题信息。`));let I=u(`h2`,s);n(s,I),n(I,p(`何时使用`));let L=u(`ul`,s);n(s,L);let R=u(`li`,L);n(L,R),n(R,p(`需要 FAQ、设置说明、任务面板这类“标题 + 可折叠内容”的信息组织方式。`));let z=u(`li`,L);n(L,z),n(z,p(`需要在单开和多开之间切换，或把当前展开项接到页面状态里。`));let B=u(`li`,L);n(L,B),n(B,p(`需要在标题里补充状态、说明、标签，而不想为每个面板手写结构。`));let V=u(`li`,L);n(L,V),n(V,p(`需要让浏览器能搜索折叠内容时，使用`));let Y=u(`code`,V);n(V,Y),n(Y,p(`use="details"`)),n(V,p(`。`));let X=u(`div`,s);n(s,X),a(X,`not-prose my-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4`);let Z=o(`rue:list:start`),te=o(`rue:list:end`);n(X,Z),n(X,te);let ne=new Map;v(()=>{ne=b({items:G||[],getKey:(e,t)=>e.title,elements:ne,parent:X,before:te,singleRoot:!0,trackIndex:!1,start:Z,renderItem:(t,r,i,s,f)=>{d(c(()=>{let r=g(),i=u(`div`,r);n(r,i),v(()=>{l(i,`key`,String(t.title))}),a(i,`card border border-base-300 bg-base-100 shadow-sm`);let s=u(`div`,i);n(i,s),a(s,`card-body gap-2 p-4`);let c=u(`div`,s);n(s,c),a(c,`text-xs uppercase tracking-[0.2em] text-base-content/50`),n(c,p(`Capability`));let f=u(`div`,s);n(s,f),a(f,`text-sm font-semibold`);let m=o(`rue:slot:anchor`);n(f,m),v(()=>{let n=t.title;e(()=>d(n,f,m))});let h=u(`p`,s);n(s,h),a(h,`m-0 text-sm opacity-70`);let _=o(`rue:slot:anchor`);return n(h,_),v(()=>{let n=t.desc;e(()=>d(n,h,_))}),r}),r,i)}})});let re=o(`rue:component:anchor`);n(s,re),v(()=>{let t=h(U,{title:`Accordion using radio inputs`,summary:`展示单开分组，同时额外开启 collapsible，方便在文档页里反复点按查看开合状态。`,tab:r,preview:()=>J(`accordion-radio-demo`,{collapsible:!0}),code:`<Accordion className="bg-base-100 border border-base-300" name="accordion-radio-demo" defaultOpen collapsible>
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
</Accordion>`});e(()=>d(t,s,re))});let ie=o(`rue:component:anchor`);n(s,ie),v(()=>{let t=h(U,{title:`Accordion using details`,summary:`展示 details 结构，适合需要原生语义和浏览器搜索能力的内容区。`,tab:i,preview:()=>J(`accordion-details-demo`,{use:`details`}),code:`<Accordion use="details" className="bg-base-100 border border-base-300" name="accordion-details-demo" defaultOpen>
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
</Accordion>`});e(()=>d(t,s,ie))});let ae=o(`rue:component:anchor`);n(s,ae),v(()=>{let t=h(U,{title:`Controlled active key`,summary:`受控模式同样支持 collapsible；点击已展开项时，activeKey 会回到 null。`,tab:f,preview:()=>S(`div`,{className:`card bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body gap-4`,children:[S(`div`,{className:`flex flex-wrap gap-2`,children:j.map(e=>x(`button`,{className:`btn btn-sm ${k.value===e.key?`btn-primary`:`btn-ghost`}`,onClick:()=>{let t=k.value===e.key?null:e.key;k.value=t,A.value=t},children:[`切换 `,e.title]},e.key))}),x(`div`,{className:`grid gap-2 rounded-box border border-base-300 bg-base-200/40 p-3 text-sm`,children:[x(`div`,{children:[`当前 `,S(`code`,{children:`activeKey`}),`：`,S(`code`,{children:k.value??`null`})]}),x(`div`,{children:[`最近一次切换：`,S(`code`,{children:A.value??`null`})]})]}),S(H,{activeKey:k.value,collapsible:!0,icon:`arrow`,className:`bg-base-100 border border-base-300`,items:j,onChange:e=>{let t=Array.isArray(e)?e[0]:e;k.value=t??null,A.value=t??null}})]})}),code:`import { ref } from '@rue-js/rue'

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
/>`});e(()=>d(t,s,ae))});let oe=o(`rue:component:anchor`);n(s,oe),v(()=>{let t=h(U,{title:`Multiple open panels`,summary:`multiple 与 defaultOpenKeys 可同时展开多个项；同一 API 也能配合 collapsible 做可收起单项。`,tab:m,preview:()=>x(`div`,{className:`grid gap-4 xl:grid-cols-[1.5fr_1fr]`,children:[S(`div`,{className:`card bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body gap-4`,children:[S(`div`,{className:`alert alert-soft`,children:S(`span`,{className:`text-sm`,children:`multiple 会把 radio 形态切到 checkbox 行为，适合筛选条件或调试面板。`})}),S(H,{multiple:!0,icon:`arrow`,className:`bg-base-100 border border-base-300`,defaultOpenKeys:[`latency`,`cache`],items:[{key:`latency`,title:`Latency budget`,description:`页面首屏与接口预算放在同一个地方追踪`,extra:`120ms`,content:`Track server timing, render budget and hydration cost together so regressions can be located quickly.`},{key:`cache`,title:`Cache strategy`,description:`缓存命中率和失效策略分开说明`,extra:`Warm`,content:`Document what can stay stale, what must be revalidated, and how to handle cache busting during deployments.`},{key:`rollback`,title:`Rollback checklist`,description:`提供快速回滚路径，避免线上排障时再找人`,extra:`Ops`,content:`Keep a minimal rollback playbook near the release notes so the on-call engineer can act without extra context switching.`}]})]})}),S(`div`,{className:`card bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body gap-4`,children:[x(`div`,{children:[S(`h3`,{className:`m-0 text-base font-semibold`,children:`Single but collapsible`}),x(`p`,{className:`mt-2 mb-0 text-sm opacity-70`,children:[`不想强制保持一个展开项时，可以给 children 模式加 `,S(`code`,{children:`collapsible`}),`。`]})]}),x(H,{collapsible:!0,defaultOpen:!0,className:`bg-base-100 border border-base-300`,icon:`plus`,children:[S(H.Title,{className:`font-semibold`,children:`Can I close the last open panel?`}),x(H.Content,{className:`text-sm opacity-80`,children:[`Yes. Set `,S(`code`,{children:`collapsible`}),` to allow toggling the current panel off instead of forcing one active item.`]})]})]})})]}),code:`<Accordion
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
</Accordion>`});e(()=>d(t,s,oe))});let se=o(`rue:component:anchor`);n(s,se),v(()=>{let t=h(U,{title:`Rich item metadata`,summary:`description、extra 和 disabled 适合后台列表、规则说明和版本发布面板。`,tab:_,preview:()=>S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body gap-4`,children:S(H,{collapsible:!0,icon:`arrow`,className:`bg-base-100 border border-base-300`,items:[{key:`review`,title:`Review dependencies`,description:`上线前再核对一次依赖差异和风险说明`,extra:S(`span`,{className:`badge badge-warning badge-outline`,children:`Review`}),open:!0,content:`Compare the dependency diff with the last release baseline, and record whether each update changes runtime behavior or only build tooling.`},{key:`announce`,title:`Prepare release notes`,description:`把用户可感知的变化浓缩成 changelog 和公告文案`,extra:S(`span`,{className:`badge badge-success badge-outline`,children:`Ready`}),content:`Write the changelog from the user perspective first, then attach migration hints or rollout notes only when they affect adoption.`},{key:`ops`,title:`Ops handoff`,description:`值班同学确认回滚路径与观测指标后才能执行`,extra:S(`span`,{className:`badge badge-ghost`,children:`Waiting`}),disabled:!0,content:`This item is intentionally disabled to show how a non-interactive operational gate can still stay visible in the stack.`}]})})}),code:`<Accordion
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
/>`});e(()=>d(t,s,se))});let ce=o(`rue:component:anchor`);n(s,ce),v(()=>{let t=h(U,{title:`Accordion with arrow icon`,summary:`展示 arrow 指示样式，并开启 collapsible，方便直接验证箭头开合反馈。`,tab:C,preview:()=>J(`accordion-arrow-demo`,{icon:`arrow`,collapsible:!0}),code:`<Accordion icon="arrow" className="bg-base-100 border border-base-300" name="accordion-arrow-demo" defaultOpen collapsible>
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
</Accordion>`});e(()=>d(t,s,ce))});let le=o(`rue:component:anchor`);n(s,le),v(()=>{let t=h(U,{title:`Accordion with plus/minus icon`,summary:`展示 plus/minus 方案，并开启 collapsible，方便直接验证开合反馈。`,tab:w,preview:()=>J(`accordion-plus-demo`,{icon:`plus`,collapsible:!0}),code:`<Accordion icon="plus" className="bg-base-100 border border-base-300" name="accordion-plus-demo" defaultOpen collapsible>
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
</Accordion>`});e(()=>d(t,s,le))});let ue=o(`rue:component:anchor`);n(s,ue),v(()=>{let t=h(U,{title:`Using Accordion and Join together`,summary:`展示 join 组合方式，并开启 collapsible，方便连续边框场景下反复验证开合。`,tab:E,preview:()=>S(`div`,{className:`join join-vertical bg-base-100`,children:W.map((e,t)=>x(H,{icon:`arrow`,collapsible:!0,className:`join-item border border-base-300`,name:`accordion-join-demo`,defaultOpen:t===0,children:[S(H.Title,{className:`font-semibold`,children:e.title}),S(H.Content,{className:`text-sm opacity-80`,children:e.content})]},`join-${e.key}`))}),code:`<div className="join join-vertical bg-base-100">
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
</div>`});e(()=>d(t,s,ue))});let de=o(`rue:component:anchor`);n(s,de),v(()=>{let t=h(U,{title:`Accordion using items array (radio)`,summary:`展示 items 数组写法，并开启 collapsible，方便直接验证数据驱动下的收起逻辑。`,tab:D,preview:()=>S(H,{collapsible:!0,className:`bg-base-100 border border-base-300`,name:`accordion-array-radio-demo`,items:W.map((e,t)=>({key:e.key,title:e.title,content:e.content,open:t===0}))}),code:`${M}

<Accordion
  collapsible
  className="bg-base-100 border border-base-300"
  name="accordion-array-radio-demo"
  items={items}
/>`});e(()=>d(t,s,de))});let fe=o(`rue:component:anchor`);n(s,fe),v(()=>{let t=h(U,{title:`Accordion using items array (details)`,summary:`展示 details + items 组合；现在它也能继续叠加 description、extra 和 disabled。`,tab:O,preview:()=>S(H,{use:`details`,className:`bg-base-100 border border-base-300`,name:`accordion-array-details-demo`,items:W.map((e,t)=>({key:e.key,title:e.title,content:e.content,open:t===0}))}),code:`${M}

<Accordion
  use="details"
  className="bg-base-100 border border-base-300"
  name="accordion-array-details-demo"
  items={items}
/>`});e(()=>d(t,s,fe))});let Q=u(`h2`,s);n(s,Q),l(Q,`id`,`accordion-api`),n(Q,p(`API`));let pe=u(`p`,s);n(s,pe),n(pe,p(`Accordion 现在分成两套用法：children 模式适合局部排版，items 模式适合数据驱动和受控状态。 两套模式共用同一套视觉类名，因此重组示例时通常只需要把结构收敛到更清晰的语义层。`));let me=u(`h3`,s);n(s,me),n(me,p(`Accordion Props`));let he=o(`rue:component:anchor`);n(s,he),v(()=>{let t=h(ee,{rows:K});e(()=>d(t,s,he))});let $=u(`h3`,s);n(s,$),a($,`mt-6`),n($,p(`AccordionDataItem`));let ge=o(`rue:component:anchor`);return n(s,ge),v(()=>{let t=h(ee,{rows:q});e(()=>d(t,s,ge))}),t})}),s,y),s})};export{Y as default};