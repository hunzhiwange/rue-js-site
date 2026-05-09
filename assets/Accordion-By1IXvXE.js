import{F as e,H as t,I as n,L as r,N as i,P as a,W as o,Y as s,c,d as l,j as u,l as d,pt as f,rt as p,t as m,u as h,ut as g}from"./vapor-runtime-BZZbPG7x.js";import{a as _,n as v}from"./vapor-helpers-vapor-DuGQh50d.js";import{n as y,t as b}from"./src-DP0sEeZS.js";import{n as x}from"./SidebarPlaygroundDesign-DJfSSlM7.js";import{t as S}from"./Code-C8wy38VS.js";import{t as C}from"./tabs-B-QPmbH8.js";var w=0,T=(e,t)=>e?t?`${e} ${t}`:e:t??``,E=e=>{let t=[];return e.forEach(e=>{t.some(t=>t===e)||t.push(e)}),t},D=(e,t)=>{let n=E(Array.isArray(e)?e:[]);return t?n:n.slice(0,1)},O=e=>e==null?[]:[e],k=(e,t,n,r,i,a)=>D(r===void 0?t===void 0?i===void 0?n===void 0?e.filter(e=>e.open).map(e=>e.key):O(n):i:O(t):r,a),A=(e,t,n)=>n===`open`?!0:n===`close`?!1:typeof e==`boolean`?e:typeof t==`boolean`?t:!1,j=(e,t)=>t===`open`?`collapse-open`:t===`close`?`collapse-close`:e?`collapse-open`:`collapse-close`,M=(e,t)=>{let n=t?.getRootNode?.(),r=n&&typeof n.querySelectorAll==`function`?n:typeof document<`u`?document:null;return r?Array.from(r.querySelectorAll(`[data-rue-accordion-group]`)).filter(t=>t.dataset.rueAccordionGroup===e):[]},N=e=>Array.from(e.children).find(e=>e instanceof HTMLInputElement&&(e.type===`checkbox`||e.type===`radio`)),P=e=>Array.from(e.children).find(e=>e instanceof HTMLElement&&e.classList.contains(`collapse-title`)),F=(e,t,n)=>{if(!(e instanceof HTMLElement))return;e.classList.remove(`collapse-open`,`collapse-close`),e.classList.add(j(t,n));let r=N(e);r&&r.checked!==t&&(r.checked=t),e instanceof HTMLDetailsElement&&e.open!==t&&(e.open=t);let i=P(e);i&&i.setAttribute(`aria-expanded`,t?`true`:`false`)},I=(e,t,n,r,i)=>r?n?E([...e,t]):e.filter(e=>e!==t):n?[t]:i?[]:e.some(e=>e===t)?[...e]:[t],L=e=>e?.type===`radio`,R=e=>e.description==null&&e.extra==null?e.title:y(`div`,{className:`flex w-full items-start justify-between gap-3`,children:[y(`div`,{className:`min-w-0 flex-1`,children:[b(`div`,{children:e.title}),e.description==null?null:b(`div`,{className:T(`mt-1 text-xs opacity-70`,e.descriptionClassName),children:e.description})]}),e.extra==null?null:b(`div`,{className:T(`shrink-0 text-xs opacity-70`,e.extraClassName),children:e.extra})]}),z=Object.assign(({icon:e,force:t,use:n=`radio`,name:r,open:i,defaultOpen:a,activeKey:o,defaultActiveKey:s,openKeys:c,defaultOpenKeys:u,multiple:d,collapsible:f,disabled:m,className:h,titleClassName:g,contentClassName:_,children:v,items:x,onChange:S,onToggle:C})=>{let E=x?.map((e,t)=>({...e,key:e.key??t,index:t}))??[],P=p(`rue-accordion-${w++}`),z=p(A(i,a,t)),B=p(k(E,o,s,c,u,d)),V=r??P.value,H=E.length>0,ee=c!==void 0||o!==void 0,U=t===`open`?!0:t===`close`?!1:i===void 0?z.value:!!i,W=()=>c===void 0?o===void 0?B.value:D(O(o),d):D(c,d),G=(e,n)=>{M(V,n).forEach(n=>{let r=E[Number(n.dataset.rueAccordionIndex??-1)];if(!r)return;let i=r.force??t;F(n,i===`open`?!0:i===`close`?!1:e.some(e=>e===r.key),i)})},K=e=>{M(V,e).forEach(e=>{let n=e.dataset.rueAccordionForce??t,r=N(e);F(e,n===`open`?!0:n===`close`?!1:e instanceof HTMLDetailsElement?e.open:r?.checked===!0,n)})},q=(e,n,r)=>{let i=e.force??t;if(m||e.disabled||i)return;let a=I(W(),e.key,n,d,f),o=a.some(t=>t===e.key);ee||(B.value=a,G(a,r)),S&&S(d?a:a[0]??null,{key:e.key,index:e.index,open:o,item:e})},J=(e,n)=>{m||t||(i===void 0&&(z.value=e,K(n)),C&&C(e,{key:V,index:0,open:e}))};if(H)return b(l,{children:E.map(r=>{let i=r.use??n,a=r.icon??e,o=r.force??t,s=o===`open`?!0:o===`close`?!1:W().some(e=>e===r.key),c=T(`collapse`,j(s,o));a===`arrow`&&(c+=` collapse-arrow`),a===`plus`&&(c+=` collapse-plus`),h&&(c+=` ${h}`),r.className&&(c+=` ${r.className}`),(m||r.disabled)&&(c+=` opacity-70`);let l=a===`arrow`&&(r.description!=null||r.extra!=null)?`after:top-6`:void 0,u=T(T(`collapse-title`,g),T(r.titleClassName,l)),p=T(T(`collapse-content`,_),r.contentClassName);if(i===`details`)return y(`details`,{className:c,name:V,open:s,"data-rue-accordion-group":V,"data-rue-accordion-index":String(r.index),"data-rue-accordion-force":o,children:[b(`summary`,{className:u,"aria-expanded":s?`true`:`false`,onClick:e=>{e.preventDefault(),q(r,!s,e.currentTarget)},children:R(r)}),b(`div`,{className:p,children:r.content})]},r.key);let v=d?`checkbox`:`radio`;return y(`div`,{className:c,"data-rue-accordion-group":V,"data-rue-accordion-index":String(r.index),"data-rue-accordion-force":o,children:[b(`input`,{type:v,name:v===`radio`?V:void 0,checked:s,disabled:m||r.disabled||!!o,onClick:e=>{let t=e.currentTarget;!f||!s||!L(t)||(e.preventDefault(),t.checked=!1,q(r,!1,t))},onChange:e=>{let t=e.target.checked;q(r,t,e.currentTarget)}}),b(`div`,{className:u,"aria-expanded":s?`true`:`false`,children:R(r)}),b(`div`,{className:p,children:r.content})]},r.key)})});let Y=T(`collapse`,j(U,t));if(e===`arrow`&&(Y+=` collapse-arrow`),e===`plus`&&(Y+=` collapse-plus`),h&&(Y+=` ${h}`),m&&(Y+=` opacity-70`),n===`details`)return b(`details`,{className:Y,name:V,open:U,"data-rue-accordion-group":V,"data-rue-accordion-force":t,onToggle:e=>{let n=e.currentTarget.open;if(m||t){e.currentTarget.open!==U&&(e.currentTarget.open=U);return}J(n,e.currentTarget)},children:v});let X=`radio`;return y(`div`,{className:Y,"data-rue-accordion-group":V,"data-rue-accordion-force":t,children:[b(`input`,{type:X,name:X===`radio`?V:void 0,checked:U,disabled:m||!!t,onClick:e=>{let t=e.currentTarget;!f||!U||!L(t)||(e.preventDefault(),t.checked=!1,J(!1,t))},onChange:e=>{let t=e.target.checked;J(t,e.currentTarget)}}),v]})},{Title:({className:e,children:t,as:n=`div`})=>{let r=T(`collapse-title`,e);return n===`summary`?b(`summary`,{className:r,children:t}):n===`button`?b(`button`,{type:`button`,className:r,children:t}):b(`div`,{className:r,children:t})},Content:({className:e,children:t})=>b(`div`,{className:T(`collapse-content`,e),children:t})}),B=({title:t,summary:l,tab:d,preview:p,code:g})=>h(()=>{let _=e(`div`);o(_,`component-preview not-prose text-base-content my-6 lg:my-12`);let v=e(`div`);u(_,v),o(v,`flex flex-wrap items-start justify-between gap-3`);let y=e(`div`);u(v,y);let b=e(`h2`);u(y,b),o(b,`component-preview-title mt-2 mb-1 text-lg font-semibold`),u(b,n(`# `));let x=r(b);u(b,x),f(()=>{s(x,t)});let w=i(`rue:slot:anchor`);u(y,w),f(()=>{c(l?h(()=>{let t=a(),n=e(`p`);u(t,n),o(n,`m-0 text-sm opacity-70`);let i=r(n);return u(n,i),f(()=>{s(i,l)}),t}):``,y,w)});let T=i(`rue:component:anchor`);u(_,T),f(()=>{c(m(C,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`TSX代码`}],activeKey:d.value,onChange:e=>d.value=e,className:`mb-3 mt-4`}),_,T)});let E=i(`rue:slot:anchor`);return u(_,E),f(()=>{c(d.value===`preview`?p():h(()=>{let e=a(),t=i(`rue:component:anchor`);return u(e,t),f(()=>{c(m(S,{className:`mt-2`,lang:`tsx`,code:g}),e,t)}),e}),_,E)}),_}),V=({rows:r})=>h(()=>{let s=e(`div`);o(s,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let l=e(`table`);u(s,l),o(l,`table table-zebra`);let d=e(`thead`);u(l,d);let p=e(`tr`);u(d,p);let m=e(`th`);u(p,m),u(m,n(`属性`));let g=e(`th`);u(p,g),u(g,n(`说明`));let _=e(`th`);u(p,_),u(_,n(`类型`));let y=e(`th`);u(p,y),u(y,n(`默认值`));let b=e(`tbody`);u(l,b);let x=i(`rue:list:start`),S=i(`rue:list:end`);u(b,x),u(b,S);let C=new Map;return f(()=>{C=v({items:r||[],getKey:(e,t)=>e.prop,elements:C,parent:b,before:S,singleRoot:!0,start:x,renderItem:(n,r,o,s,l)=>{c(h(()=>{let r=a(),o=e(`tr`);u(r,o),f(()=>{t(o,`key`,String(n.prop))});let s=e(`td`);u(o,s);let l=e(`code`);u(s,l);let d=i(`rue:slot:anchor`);u(l,d),f(()=>{let e=n.prop;c(e,l,d)});let p=e(`td`);u(o,p);let m=i(`rue:slot:anchor`);u(p,m),f(()=>{let e=n.description;c(e,p,m)});let h=e(`td`);u(o,h);let g=e(`code`);u(h,g);let _=i(`rue:slot:anchor`);u(g,_),f(()=>{let e=n.type;c(e,g,_)});let v=e(`td`);u(o,v);let y=e(`code`);u(v,y);let b=i(`rue:slot:anchor`);return u(y,b),f(()=>{let e=n.defaultValue;c(e,y,b)}),r}),r,o)}})}),s}),H=[{key:`account`,title:`How do I create an account?`,content:`Click the "Sign Up" button in the top right corner and follow the registration process.`},{key:`password`,title:`I forgot my password. What should I do?`,content:`Click on "Forgot Password" on the login page and follow the instructions sent to your email.`},{key:`profile`,title:`How do I update my profile information?`,content:`Go to "My Account" settings and select "Edit Profile" to make changes.`}],ee=[{title:`Children 组合`,desc:`保留 Accordion.Title / Accordion.Content，用于局部定制标题和内容。`},{title:`Items 驱动`,desc:`直接用 items 写标题、描述、额外信息和禁用态，适合后台配置页。`},{title:`受控状态`,desc:`通过 activeKey、openKeys、onChange 接管当前展开项。`},{title:`两种语义`,desc:`默认 radio 风格适合单开；details 适合保留可搜索内容与原生语义。`}],U=[{prop:`activeKey`,description:`items 模式下的受控单开 key`,type:`string | number | null`,defaultValue:`-`},{prop:`className`,description:`追加到每个 Accordion 根节点的类名`,type:`string`,defaultValue:`-`},{prop:`collapsible`,description:`单开模式下允许把当前面板再次折叠`,type:`boolean`,defaultValue:`false`},{prop:`contentClassName`,description:`items 模式下统一追加到内容区域的类名`,type:`string`,defaultValue:`-`},{prop:`defaultActiveKey`,description:`items 模式下的非受控默认单开 key`,type:`string | number | null`,defaultValue:`-`},{prop:`defaultOpen`,description:`children 模式下的非受控默认展开状态`,type:`boolean`,defaultValue:`false`},{prop:`defaultOpenKeys`,description:`items 模式下的非受控默认多开 keys`,type:`Array<string | number>`,defaultValue:`-`},{prop:`disabled`,description:`禁用整个 Accordion 或当前 items 组的交互`,type:`boolean`,defaultValue:`false`},{prop:`force`,description:`强制视觉保持展开或收起，优先级高于 open 与 items 状态`,type:`'open' | 'close'`,defaultValue:`-`},{prop:`icon`,description:`标题右侧的内置指示样式`,type:`'arrow' | 'plus'`,defaultValue:`-`},{prop:`items`,description:`数据驱动渲染方式，适合 FAQ、配置面板和后台列表`,type:`AccordionDataItem[]`,defaultValue:`-`},{prop:`multiple`,description:`允许同时展开多个 items；radio 形态会切为 checkbox 行为`,type:`boolean`,defaultValue:`false`},{prop:`name`,description:`分组名；radio 与 details 语义都会复用这个名称`,type:`string`,defaultValue:`自动生成`},{prop:`onChange`,description:`items 模式下的开合回调；单开返回 key，多开返回 keys`,type:`(value, context) => void`,defaultValue:`-`},{prop:`onToggle`,description:`children 模式下的单项开合回调`,type:`(open, context) => void`,defaultValue:`-`},{prop:`open`,description:`children 模式下的受控展开状态`,type:`boolean`,defaultValue:`-`},{prop:`openKeys`,description:`items 模式下的受控多开 keys`,type:`Array<string | number>`,defaultValue:`-`},{prop:`titleClassName`,description:`items 模式下统一追加到标题区域的类名`,type:`string`,defaultValue:`-`},{prop:`use`,description:`切换 radio 或 details 两种结构输出`,type:`'radio' | 'details'`,defaultValue:`'radio'`}],W=[{prop:`className`,description:`追加到当前 item 根节点的类名`,type:`string`,defaultValue:`-`},{prop:`content`,description:`折叠区内容`,type:`any`,defaultValue:`-`},{prop:`contentClassName`,description:`内容区域类名`,type:`string`,defaultValue:`-`},{prop:`description`,description:`标题下的补充说明文字`,type:`any`,defaultValue:`-`},{prop:`descriptionClassName`,description:`说明文字类名`,type:`string`,defaultValue:`-`},{prop:`disabled`,description:`禁用当前 item 交互`,type:`boolean`,defaultValue:`false`},{prop:`extra`,description:`标题行右侧的补充信息，可用于状态标记或数字`,type:`any`,defaultValue:`-`},{prop:`extraClassName`,description:`额外信息区域类名`,type:`string`,defaultValue:`-`},{prop:`force`,description:`对单个 item 单独强制展开或收起`,type:`'open' | 'close'`,defaultValue:`-`},{prop:`icon`,description:`覆盖全局 icon 设置`,type:`'arrow' | 'plus'`,defaultValue:`-`},{prop:`key`,description:`推荐显式提供的稳定标识，用于 activeKey / openKeys 匹配`,type:`string | number`,defaultValue:`index`},{prop:`open`,description:`非受控模式下的默认展开状态`,type:`boolean`,defaultValue:`false`},{prop:`title`,description:`标题区域内容`,type:`any`,defaultValue:`-`},{prop:`titleClassName`,description:`标题区域类名`,type:`string`,defaultValue:`-`},{prop:`use`,description:`覆盖全局 use 设置`,type:`'radio' | 'details'`,defaultValue:`-`}],G=(t,n)=>h(()=>{let r=e(`div`);f(()=>{o(r,String(n?.containerClassName??`grid gap-3`))});let s=i(`rue:list:start`),l=i(`rue:list:end`);u(r,s),u(r,l);let p=new Map;return f(()=>{p=v({items:H||[],getKey:(e,n)=>`${t}-${e.key}`,elements:p,parent:s.parentNode,before:l,start:s,renderItem:(e,r,o,s,l)=>{let p=h(()=>{let t=a(),r=i(`rue:component:anchor`);u(t,r),f(()=>{c(m(z.Title,{as:n?.use===`details`?`summary`:`div`,className:`font-semibold`,children:e.title}),t,r)});let o=i(`rue:component:anchor`);return u(t,o),c(m(z.Content,{className:`text-sm opacity-80`,children:e.content}),t,o),t});d(m(z,{key:`${t}-${e.key}`,name:t,use:n?.use,icon:n?.icon,collapsible:n?.collapsible,className:n?.itemClassName??`bg-base-100 border border-base-300`,defaultOpen:l===0,children:p}),r,o,s)}})}),r}),K=()=>{let{tabRadio:r,tabDetails:s,tabControlled:l,tabMultiple:d,tabRich:S,tabArrow:C,tabPlus:w,tabJoin:T,tabArrayRadio:E,tabArrayDetails:D,controlledKey:O,lastChanged:k,roadmapItems:A,faqItemsCode:j}=_(`useSetup:0:0`,()=>g(()=>({tabRadio:_(`ref:1:0`,()=>p(`preview`)),tabDetails:_(`ref:1:1`,()=>p(`preview`)),tabControlled:_(`ref:1:2`,()=>p(`preview`)),tabMultiple:_(`ref:1:3`,()=>p(`preview`)),tabRich:_(`ref:1:4`,()=>p(`preview`)),tabArrow:_(`ref:1:5`,()=>p(`preview`)),tabPlus:_(`ref:1:6`,()=>p(`preview`)),tabJoin:_(`ref:1:7`,()=>p(`preview`)),tabArrayRadio:_(`ref:1:8`,()=>p(`preview`)),tabArrayDetails:_(`ref:1:9`,()=>p(`preview`)),controlledKey:_(`ref:1:10`,()=>p(`build`)),lastChanged:_(`ref:1:11`,()=>p(`build`)),roadmapItems:[{key:`plan`,title:`Plan backlog`,description:`先确定优先级，再安排设计和开发`,extra:`Sprint 12`,content:`Collect the most urgent requirements, align on edge cases, and freeze the delivery order before implementation starts.`},{key:`build`,title:`Build feature slice`,description:`把 API、交互和回归验证收敛到同一轮里`,extra:`In progress`,content:`Ship the smallest useful slice first, then expand demos and tests around the verified behavior instead of guessing a broad design up front.`},{key:`ship`,title:`Ship and monitor`,description:`发布后持续看告警、埋点和反馈`,extra:`Ready`,content:`After release, keep an eye on error rate, support feedback and adoption signals so the next iteration has concrete evidence.`}],faqItemsCode:`const items = [
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
]`})));return h(()=>{let p=a(),g=i(`rue:component:anchor`);return u(p,g),c(m(x,{children:h(()=>{let p=a(),g=e(`div`);u(p,g),o(g,`max-w-none prose prose-sm md:prose-base`);let _=e(`h1`);u(g,_),u(_,n(`Accordion 手风琴`));let x=e(`p`);u(g,x),o(x,`text-sm mt-3 mb-3`),u(x,n(`Accordion 现在保留 Rue 原本的轻量视觉风格，但 API 不再只是静态包装。你可以继续用`));let M=e(`code`);u(x,M),u(M,n(`Accordion.Title`)),u(x,n(`和`));let N=e(`code`);u(x,N),u(N,n(`Accordion.Content`)),u(x,n(`组合单个面板，也可以直接用`));let P=e(`code`);u(x,P),u(P,n(`items`)),u(x,n(`走数据驱动，接入受控 key、多开、禁用和富标题信息。`));let F=e(`div`);u(g,F),o(F,`text-sm flex flex-wrap gap-4`);let I=e(`a`);u(F,I),t(I,`href`,`https://daisyui.com/components/accordion/`),t(I,`target`,`_blank`),u(I,n(`查看 Accordion 静态样式`));let L=e(`h2`);u(g,L),u(L,n(`何时使用`));let R=e(`ul`);u(g,R);let K=e(`li`);u(R,K),u(K,n(`需要 FAQ、设置说明、任务面板这类“标题 + 可折叠内容”的信息组织方式。`));let q=e(`li`);u(R,q),u(q,n(`需要在单开和多开之间切换，或把当前展开项接到页面状态里。`));let J=e(`li`);u(R,J),u(J,n(`需要在标题里补充状态、说明、标签，而不想为每个面板手写结构。`));let Y=e(`li`);u(R,Y),u(Y,n(`需要让浏览器能搜索折叠内容时，使用`));let X=e(`code`);u(Y,X),u(X,n(`use="details"`)),u(Y,n(`。`));let Z=e(`div`);u(g,Z),o(Z,`not-prose my-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4`);let te=i(`rue:list:start`),ne=i(`rue:list:end`);u(Z,te),u(Z,ne);let re=new Map;f(()=>{re=v({items:ee||[],getKey:(e,t)=>e.title,elements:re,parent:Z,before:ne,singleRoot:!0,start:te,renderItem:(r,s,l,d,p)=>{c(h(()=>{let s=a(),l=e(`div`);u(s,l),f(()=>{t(l,`key`,String(r.title))}),o(l,`card border border-base-300 bg-base-100 shadow-sm`);let d=e(`div`);u(l,d),o(d,`card-body gap-2 p-4`);let p=e(`div`);u(d,p),o(p,`text-xs uppercase tracking-[0.2em] text-base-content/50`),u(p,n(`Capability`));let m=e(`div`);u(d,m),o(m,`text-sm font-semibold`);let h=i(`rue:slot:anchor`);u(m,h),f(()=>{let e=r.title;c(e,m,h)});let g=e(`p`);u(d,g),o(g,`m-0 text-sm opacity-70`);let _=i(`rue:slot:anchor`);return u(g,_),f(()=>{let e=r.desc;c(e,g,_)}),s}),s,l)}})});let ie=i(`rue:component:anchor`);u(g,ie),f(()=>{c(m(B,{title:`Accordion using radio inputs`,summary:`保留单开分组，同时额外开启 collapsible，方便在文档页里反复点按查看开合状态。`,tab:r,preview:()=>G(`accordion-radio-demo`,{collapsible:!0}),code:`<Accordion className="bg-base-100 border border-base-300" name="accordion-radio-demo" defaultOpen collapsible>
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
</Accordion>`}),g,ie)});let ae=i(`rue:component:anchor`);u(g,ae),f(()=>{c(m(B,{title:`Accordion using details`,summary:`保留 details 结构，适合需要原生语义和浏览器搜索能力的内容区。`,tab:s,preview:()=>G(`accordion-details-demo`,{use:`details`}),code:`<Accordion use="details" className="bg-base-100 border border-base-300" name="accordion-details-demo" defaultOpen>
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
</Accordion>`}),g,ae)});let oe=i(`rue:component:anchor`);u(g,oe),f(()=>{c(m(B,{title:`Controlled active key`,summary:`受控模式同样支持 collapsible；点击已展开项时，activeKey 会回到 null。`,tab:l,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-4`,children:[b(`div`,{className:`flex flex-wrap gap-2`,children:A.map(e=>y(`button`,{className:`btn btn-sm ${O.value===e.key?`btn-primary`:`btn-ghost`}`,onClick:()=>{let t=O.value===e.key?null:e.key;O.value=t,k.value=t},children:[`切换 `,e.title]},e.key))}),y(`div`,{className:`grid gap-2 rounded-box border border-base-300 bg-base-200/40 p-3 text-sm`,children:[y(`div`,{children:[`当前 `,b(`code`,{children:`activeKey`}),`：`,b(`code`,{children:O.value??`null`})]}),y(`div`,{children:[`最近一次切换：`,b(`code`,{children:k.value??`null`})]})]}),b(z,{activeKey:O.value,collapsible:!0,icon:`arrow`,className:`bg-base-100 border border-base-300`,items:A,onChange:e=>{let t=Array.isArray(e)?e[0]:e;O.value=t??null,k.value=t??null}})]})}),code:`import { ref } from '@rue-js/rue'

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
/>`}),g,oe)});let se=i(`rue:component:anchor`);u(g,se),f(()=>{c(m(B,{title:`Multiple open panels`,summary:`新增 multiple 与 defaultOpenKeys，可同时展开多个项；同一 API 也能配合 collapsible 做可收起单项。`,tab:d,preview:()=>y(`div`,{className:`grid gap-4 xl:grid-cols-[1.5fr_1fr]`,children:[b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-4`,children:[b(`div`,{className:`alert alert-soft`,children:b(`span`,{className:`text-sm`,children:`multiple 会把 radio 形态切到 checkbox 行为，适合筛选条件或调试面板。`})}),b(z,{multiple:!0,icon:`arrow`,className:`bg-base-100 border border-base-300`,defaultOpenKeys:[`latency`,`cache`],items:[{key:`latency`,title:`Latency budget`,description:`页面首屏与接口预算放在同一个地方追踪`,extra:`120ms`,content:`Track server timing, render budget and hydration cost together so regressions can be located quickly.`},{key:`cache`,title:`Cache strategy`,description:`缓存命中率和失效策略分开说明`,extra:`Warm`,content:`Document what can stay stale, what must be revalidated, and how to handle cache busting during deployments.`},{key:`rollback`,title:`Rollback checklist`,description:`保留快速回滚路径，避免线上排障时再找人`,extra:`Ops`,content:`Keep a minimal rollback playbook near the release notes so the on-call engineer can act without extra context switching.`}]})]})}),b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-4`,children:[y(`div`,{children:[b(`h3`,{className:`m-0 text-base font-semibold`,children:`Single but collapsible`}),y(`p`,{className:`mt-2 mb-0 text-sm opacity-70`,children:[`不想强制保留一个展开项时，可以给 children 模式加 `,b(`code`,{children:`collapsible`}),`。`]})]}),y(z,{collapsible:!0,defaultOpen:!0,className:`bg-base-100 border border-base-300`,icon:`plus`,children:[b(z.Title,{className:`font-semibold`,children:`Can I close the last open panel?`}),y(z.Content,{className:`text-sm opacity-80`,children:[`Yes. Set `,b(`code`,{children:`collapsible`}),` to allow toggling the current panel off instead of forcing one active item.`]})]})]})})]}),code:`<Accordion
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
</Accordion>`}),g,se)});let ce=i(`rue:component:anchor`);u(g,ce),f(()=>{c(m(B,{title:`Rich item metadata`,summary:`新增 description、extra 和 disabled，适合后台列表、规则说明和版本发布面板。`,tab:S,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body gap-4`,children:b(z,{collapsible:!0,icon:`arrow`,className:`bg-base-100 border border-base-300`,items:[{key:`review`,title:`Review dependencies`,description:`上线前再核对一次依赖差异和风险说明`,extra:b(`span`,{className:`badge badge-warning badge-outline`,children:`Review`}),open:!0,content:`Compare the dependency diff with the last release baseline, and record whether each update changes runtime behavior or only build tooling.`},{key:`announce`,title:`Prepare release notes`,description:`把用户可感知的变化浓缩成 changelog 和公告文案`,extra:b(`span`,{className:`badge badge-success badge-outline`,children:`Ready`}),content:`Write the changelog from the user perspective first, then attach migration hints or rollout notes only when they affect adoption.`},{key:`ops`,title:`Ops handoff`,description:`值班同学确认回滚路径与观测指标后才能执行`,extra:b(`span`,{className:`badge badge-ghost`,children:`Waiting`}),disabled:!0,content:`This item is intentionally disabled to show how a non-interactive operational gate can still stay visible in the stack.`}]})})}),code:`<Accordion
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
/>`}),g,ce)});let le=i(`rue:component:anchor`);u(g,le),f(()=>{c(m(B,{title:`Accordion with arrow icon`,summary:`保留 arrow 指示样式，并开启 collapsible，方便直接验证箭头开合反馈。`,tab:C,preview:()=>G(`accordion-arrow-demo`,{icon:`arrow`,collapsible:!0}),code:`<Accordion icon="arrow" className="bg-base-100 border border-base-300" name="accordion-arrow-demo" defaultOpen collapsible>
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
</Accordion>`}),g,le)});let ue=i(`rue:component:anchor`);u(g,ue),f(()=>{c(m(B,{title:`Accordion with plus/minus icon`,summary:`保留 plus/minus 方案，并开启 collapsible，方便直接验证开合反馈。`,tab:w,preview:()=>G(`accordion-plus-demo`,{icon:`plus`,collapsible:!0}),code:`<Accordion icon="plus" className="bg-base-100 border border-base-300" name="accordion-plus-demo" defaultOpen collapsible>
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
</Accordion>`}),g,ue)});let de=i(`rue:component:anchor`);u(g,de),f(()=>{c(m(B,{title:`Using Accordion and Join together`,summary:`保留 join 组合方式，并开启 collapsible，方便连续边框场景下反复验证开合。`,tab:T,preview:()=>b(`div`,{className:`join join-vertical bg-base-100`,children:H.map((e,t)=>y(z,{icon:`arrow`,collapsible:!0,className:`join-item border border-base-300`,name:`accordion-join-demo`,defaultOpen:t===0,children:[b(z.Title,{className:`font-semibold`,children:e.title}),b(z.Content,{className:`text-sm opacity-80`,children:e.content})]},`join-${e.key}`))}),code:`<div className="join join-vertical bg-base-100">
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
</div>`}),g,de)});let fe=i(`rue:component:anchor`);u(g,fe),f(()=>{c(m(B,{title:`Accordion using items array (radio)`,summary:`保留 items 数组写法，并开启 collapsible，方便直接验证数据驱动下的收起逻辑。`,tab:E,preview:()=>b(z,{collapsible:!0,className:`bg-base-100 border border-base-300`,name:`accordion-array-radio-demo`,items:H.map((e,t)=>({key:e.key,title:e.title,content:e.content,open:t===0}))}),code:`${j}

<Accordion
  collapsible
  className="bg-base-100 border border-base-300"
  name="accordion-array-radio-demo"
  items={items}
/>`}),g,fe)});let pe=i(`rue:component:anchor`);u(g,pe),f(()=>{c(m(B,{title:`Accordion using items array (details)`,summary:`保留原来的 details + items 组合；现在它也能继续叠加 description、extra 和 disabled。`,tab:D,preview:()=>b(z,{use:`details`,className:`bg-base-100 border border-base-300`,name:`accordion-array-details-demo`,items:H.map((e,t)=>({key:e.key,title:e.title,content:e.content,open:t===0}))}),code:`${j}

<Accordion
  use="details"
  className="bg-base-100 border border-base-300"
  name="accordion-array-details-demo"
  items={items}
/>`}),g,pe)});let Q=e(`h2`);u(g,Q),t(Q,`id`,`accordion-api`),u(Q,n(`API`));let me=e(`p`);u(g,me),u(me,n(`Accordion 现在分成两套用法：children 模式适合局部排版，items 模式适合数据驱动和受控状态。 两套模式共用同一套视觉类名，因此迁移旧示例时通常只需要把结构收敛到更清晰的语义层。`));let he=e(`h3`);u(g,he),u(he,n(`Accordion Props`));let ge=i(`rue:component:anchor`);u(g,ge),f(()=>{c(m(V,{rows:U}),g,ge)});let $=e(`h3`);u(g,$),o($,`mt-6`),u($,n(`AccordionDataItem`));let _e=i(`rue:component:anchor`);return u(g,_e),f(()=>{c(m(V,{rows:W}),g,_e)}),p})}),p,g),p})};export{K as default};