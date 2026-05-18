import{F as e,I as t,K as n,L as r,N as i,R as a,W as o,d as s,dt as c,f as l,ht as u,l as d,st as f,t as p,u as m,vt as h}from"./vapor-runtime-BuwLbCGk.js";import{a as g,n as _}from"./vapor-helpers-vapor-Bly5xJie.js";import{n as v,t as y}from"./src-BQwLQD8R.js";import{n as b}from"./SidebarPlaygroundDesign-SQXYHI-q.js";import{t as x}from"./Code-DQxnq0in.js";import{t as S}from"./tabs-DqfJzZfa.js";var C=0,w=(e,t)=>e?t?`${e} ${t}`:e:t??``,T=e=>{let t=[];return e.forEach(e=>{t.some(t=>t===e)||t.push(e)}),t},E=(e,t)=>{let n=T(Array.isArray(e)?e:[]);return t?n:n.slice(0,1)},D=e=>e==null?[]:[e],ee=(e,t,n,r,i,a)=>E(r===void 0?t===void 0?i===void 0?n===void 0?e.filter(e=>e.open).map(e=>e.key):D(n):i:D(t):r,a),O=(e,t,n)=>n===`open`?!0:n===`close`?!1:typeof e==`boolean`?e:typeof t==`boolean`?t:!1,k=(e,t)=>t===`open`?`collapse-open`:t===`close`?`collapse-close`:e?`collapse-open`:`collapse-close`,A=(e,t)=>{let n=t?.getRootNode?.(),r=n&&typeof n.querySelectorAll==`function`?n:typeof document<`u`?document:null;return r?Array.from(r.querySelectorAll(`[data-rue-accordion-group]`)).filter(t=>t.dataset.rueAccordionGroup===e):[]},j=e=>Array.from(e.children).find(e=>e instanceof HTMLInputElement&&(e.type===`checkbox`||e.type===`radio`)),M=e=>Array.from(e.children).find(e=>e instanceof HTMLElement&&e.classList.contains(`collapse-title`)),N=(e,t,n)=>{if(!(e instanceof HTMLElement))return;e.classList.remove(`collapse-open`,`collapse-close`),e.classList.add(k(t,n));let r=j(e);r&&r.checked!==t&&(r.checked=t),e instanceof HTMLDetailsElement&&e.open!==t&&(e.open=t);let i=M(e);i&&i.setAttribute(`aria-expanded`,t?`true`:`false`)},P=(e,t,n,r,i)=>r?n?T([...e,t]):e.filter(e=>e!==t):n?[t]:i?[]:e.some(e=>e===t)?[...e]:[t],F=e=>e?.type===`radio`,I=e=>e.description==null&&e.extra==null?e.title:v(`div`,{className:`flex w-full items-start justify-between gap-3`,children:[v(`div`,{className:`min-w-0 flex-1`,children:[y(`div`,{children:e.title}),e.description==null?null:y(`div`,{className:w(`mt-1 text-xs opacity-70`,e.descriptionClassName),children:e.description})]}),e.extra==null?null:y(`div`,{className:w(`shrink-0 text-xs opacity-70`,e.extraClassName),children:e.extra})]}),L=Object.assign(({icon:e,force:t,use:n=`radio`,name:r,open:i,defaultOpen:a,activeKey:o,defaultActiveKey:s,openKeys:c,defaultOpenKeys:u,multiple:d,collapsible:p,disabled:m,className:h,titleClassName:g,contentClassName:_,children:b,items:x,onChange:S,onToggle:T})=>{let M=x?.map((e,t)=>({...e,key:e.key??t,index:t}))??[],L=f(`rue-accordion-${C++}`),R=f(O(i,a,t)),z=f(ee(M,o,s,c,u,d)),B=r??L.value,V=M.length>0,H=c!==void 0||o!==void 0,U=t===`open`?!0:t===`close`?!1:i===void 0?R.value:!!i,W=()=>c===void 0?o===void 0?z.value:E(D(o),d):E(c,d),G=(e,n)=>{A(B,n).forEach(n=>{let r=M[Number(n.dataset.rueAccordionIndex??-1)];if(!r)return;let i=r.force??t;N(n,i===`open`?!0:i===`close`?!1:e.some(e=>e===r.key),i)})},K=e=>{A(B,e).forEach(e=>{let n=e.dataset.rueAccordionForce??t,r=j(e);N(e,n===`open`?!0:n===`close`?!1:e instanceof HTMLDetailsElement?e.open:r?.checked===!0,n)})},q=(e,n,r)=>{let i=e.force??t;if(m||e.disabled||i)return;let a=P(W(),e.key,n,d,p),o=a.some(t=>t===e.key);H||(z.value=a,G(a,r)),S&&S(d?a:a[0]??null,{key:e.key,index:e.index,open:o,item:e})},J=(e,n)=>{m||t||(i===void 0&&(R.value=e,K(n)),T&&T(e,{key:B,index:0,open:e}))};if(V)return y(l,{children:M.map(r=>{let i=r.use??n,a=r.icon??e,o=r.force??t,s=o===`open`?!0:o===`close`?!1:W().some(e=>e===r.key),c=w(`collapse`,k(s,o));a===`arrow`&&(c+=` collapse-arrow`),a===`plus`&&(c+=` collapse-plus`),h&&(c+=` ${h}`),r.className&&(c+=` ${r.className}`),(m||r.disabled)&&(c+=` opacity-70`);let l=a===`arrow`&&(r.description!=null||r.extra!=null)?`after:top-6`:void 0,u=w(w(`collapse-title`,g),w(r.titleClassName,l)),f=w(w(`collapse-content`,_),r.contentClassName);if(i===`details`)return v(`details`,{className:c,name:B,open:s,"data-rue-accordion-group":B,"data-rue-accordion-index":String(r.index),"data-rue-accordion-force":o,children:[y(`summary`,{className:u,"aria-expanded":s?`true`:`false`,onClick:e=>{e.preventDefault(),q(r,!s,e.currentTarget)},children:I(r)}),y(`div`,{className:f,children:r.content})]},r.key);let b=d?`checkbox`:`radio`;return v(`div`,{className:c,"data-rue-accordion-group":B,"data-rue-accordion-index":String(r.index),"data-rue-accordion-force":o,children:[y(`input`,{type:b,name:b===`radio`?B:void 0,checked:s,disabled:m||r.disabled||!!o,onClick:e=>{let t=e.currentTarget;!p||!s||!F(t)||(e.preventDefault(),t.checked=!1,q(r,!1,t))},onChange:e=>{let t=e.target.checked;q(r,t,e.currentTarget)}}),y(`div`,{className:u,"aria-expanded":s?`true`:`false`,children:I(r)}),y(`div`,{className:f,children:r.content})]},r.key)})});let Y=w(`collapse`,k(U,t));if(e===`arrow`&&(Y+=` collapse-arrow`),e===`plus`&&(Y+=` collapse-plus`),h&&(Y+=` ${h}`),m&&(Y+=` opacity-70`),n===`details`)return y(`details`,{className:Y,name:B,open:U,"data-rue-accordion-group":B,"data-rue-accordion-force":t,onToggle:e=>{let n=e.currentTarget.open;if(m||t){e.currentTarget.open!==U&&(e.currentTarget.open=U);return}J(n,e.currentTarget)},children:b});let X=`radio`;return v(`div`,{className:Y,"data-rue-accordion-group":B,"data-rue-accordion-force":t,children:[y(`input`,{type:X,name:X===`radio`?B:void 0,checked:U,disabled:m||!!t,onClick:e=>{let t=e.currentTarget;!p||!U||!F(t)||(e.preventDefault(),t.checked=!1,J(!1,t))},onChange:e=>{let t=e.target.checked;J(t,e.currentTarget)}}),b]})},{Title:({className:e,children:t,as:n=`div`})=>{let r=w(`collapse-title`,e);return n===`summary`?y(`summary`,{className:r,children:t}):n===`button`?y(`button`,{type:`button`,className:r,children:t}):y(`div`,{className:r,children:t})},Content:({className:e,children:t})=>y(`div`,{className:w(`collapse-content`,e),children:t})}),R=o=>s(l=>{let u=r(`div`,l);n(u,`component-preview not-prose text-base-content my-6 lg:my-12`);let f=r(`div`,u);i(u,f),n(f,`flex flex-wrap items-start justify-between gap-3`);let m=r(`div`,f);i(f,m);let g=r(`h2`,m);i(m,g),n(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(g,a(`# `));let _=e(`rue:slot:anchor`);i(g,_),h(()=>{let e=o.title;c(()=>d(e,g,_))});let v=e(`rue:slot:anchor`);i(m,v),h(()=>{let a=o.summary?s(()=>{let a=t(),s=r(`p`,a);i(a,s),n(s,`m-0 text-sm opacity-70`);let l=e(`rue:slot:anchor`);return i(s,l),h(()=>{let e=o.summary;c(()=>d(e,s,l))}),a}):``;c(()=>d(a,m,v))});let y=e(`rue:component:anchor`);i(u,y),h(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`TSX代码`}],activeKey:o.tab.value,onChange:e=>o.tab.value=e,className:`mb-3 mt-4`});c(()=>d(e,u,y))});let b=e(`rue:slot:anchor`);return i(u,b),h(()=>{let n=o.tab.value===`preview`?o.preview():s(()=>{let n=t(),r=e(`rue:component:anchor`);return i(n,r),h(()=>{let e=p(x,{className:`mt-2`,lang:`tsx`,code:o.code});c(()=>d(e,n,r))}),n});c(()=>d(n,u,b))}),u}),z=l=>s(u=>{let f=r(`div`,u);n(f,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let p=r(`table`,f);i(f,p),n(p,`table table-zebra`);let m=r(`thead`,p);i(p,m);let g=r(`tr`,m);i(m,g);let v=r(`th`,g);i(g,v),i(v,a(`属性`));let y=r(`th`,g);i(g,y),i(y,a(`说明`));let b=r(`th`,g);i(g,b),i(b,a(`类型`));let x=r(`th`,g);i(g,x),i(x,a(`默认值`));let S=r(`tbody`,p);i(p,S);let C=e(`rue:list:start`),w=e(`rue:list:end`);i(S,C),i(S,w);let T=new Map;return h(()=>{T=_({items:l.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,a,l,u,f)=>{d(s(()=>{let a=t(),s=r(`tr`,a);i(a,s),h(()=>{o(s,`key`,String(n.prop))});let l=r(`td`,s);i(s,l);let u=r(`code`,l);i(l,u);let f=e(`rue:slot:anchor`);i(u,f),h(()=>{let e=n.prop;c(()=>d(e,u,f))});let p=r(`td`,s);i(s,p);let m=e(`rue:slot:anchor`);i(p,m),h(()=>{let e=n.description;c(()=>d(e,p,m))});let g=r(`td`,s);i(s,g);let _=r(`code`,g);i(g,_);let v=e(`rue:slot:anchor`);i(_,v),h(()=>{let e=n.type;c(()=>d(e,_,v))});let y=r(`td`,s);i(s,y);let b=r(`code`,y);i(y,b);let x=e(`rue:slot:anchor`);return i(b,x),h(()=>{let e=n.defaultValue;c(()=>d(e,b,x))}),a}),a,l)}})}),f}),B=[{key:`account`,title:`How do I create an account?`,content:`Click the "Sign Up" button in the top right corner and follow the registration process.`},{key:`password`,title:`I forgot my password. What should I do?`,content:`Click on "Forgot Password" on the login page and follow the instructions sent to your email.`},{key:`profile`,title:`How do I update my profile information?`,content:`Go to "My Account" settings and select "Edit Profile" to make changes.`}],V=[{title:`Children 组合`,desc:`保留 Accordion.Title / Accordion.Content，用于局部定制标题和内容。`},{title:`Items 驱动`,desc:`直接用 items 写标题、描述、额外信息和禁用态，适合后台配置页。`},{title:`受控状态`,desc:`通过 activeKey、openKeys、onChange 接管当前展开项。`},{title:`两种语义`,desc:`默认 radio 风格适合单开；details 适合保留可搜索内容与原生语义。`}],H=[{prop:`activeKey`,description:`items 模式下的受控单开 key`,type:`string | number | null`,defaultValue:`-`},{prop:`className`,description:`追加到每个 Accordion 根节点的类名`,type:`string`,defaultValue:`-`},{prop:`collapsible`,description:`单开模式下允许把当前面板再次折叠`,type:`boolean`,defaultValue:`false`},{prop:`contentClassName`,description:`items 模式下统一追加到内容区域的类名`,type:`string`,defaultValue:`-`},{prop:`defaultActiveKey`,description:`items 模式下的非受控默认单开 key`,type:`string | number | null`,defaultValue:`-`},{prop:`defaultOpen`,description:`children 模式下的非受控默认展开状态`,type:`boolean`,defaultValue:`false`},{prop:`defaultOpenKeys`,description:`items 模式下的非受控默认多开 keys`,type:`Array<string | number>`,defaultValue:`-`},{prop:`disabled`,description:`禁用整个 Accordion 或当前 items 组的交互`,type:`boolean`,defaultValue:`false`},{prop:`force`,description:`强制视觉保持展开或收起，优先级高于 open 与 items 状态`,type:`'open' | 'close'`,defaultValue:`-`},{prop:`icon`,description:`标题右侧的内置指示样式`,type:`'arrow' | 'plus'`,defaultValue:`-`},{prop:`items`,description:`数据驱动渲染方式，适合 FAQ、配置面板和后台列表`,type:`AccordionDataItem[]`,defaultValue:`-`},{prop:`multiple`,description:`允许同时展开多个 items；radio 形态会切为 checkbox 行为`,type:`boolean`,defaultValue:`false`},{prop:`name`,description:`分组名；radio 与 details 语义都会复用这个名称`,type:`string`,defaultValue:`自动生成`},{prop:`onChange`,description:`items 模式下的开合回调；单开返回 key，多开返回 keys`,type:`(value, context) => void`,defaultValue:`-`},{prop:`onToggle`,description:`children 模式下的单项开合回调`,type:`(open, context) => void`,defaultValue:`-`},{prop:`open`,description:`children 模式下的受控展开状态`,type:`boolean`,defaultValue:`-`},{prop:`openKeys`,description:`items 模式下的受控多开 keys`,type:`Array<string | number>`,defaultValue:`-`},{prop:`titleClassName`,description:`items 模式下统一追加到标题区域的类名`,type:`string`,defaultValue:`-`},{prop:`use`,description:`切换 radio 或 details 两种结构输出`,type:`'radio' | 'details'`,defaultValue:`'radio'`}],U=[{prop:`className`,description:`追加到当前 item 根节点的类名`,type:`string`,defaultValue:`-`},{prop:`content`,description:`折叠区内容`,type:`any`,defaultValue:`-`},{prop:`contentClassName`,description:`内容区域类名`,type:`string`,defaultValue:`-`},{prop:`description`,description:`标题下的补充说明文字`,type:`any`,defaultValue:`-`},{prop:`descriptionClassName`,description:`说明文字类名`,type:`string`,defaultValue:`-`},{prop:`disabled`,description:`禁用当前 item 交互`,type:`boolean`,defaultValue:`false`},{prop:`extra`,description:`标题行右侧的补充信息，可用于状态标记或数字`,type:`any`,defaultValue:`-`},{prop:`extraClassName`,description:`额外信息区域类名`,type:`string`,defaultValue:`-`},{prop:`force`,description:`对单个 item 单独强制展开或收起`,type:`'open' | 'close'`,defaultValue:`-`},{prop:`icon`,description:`覆盖全局 icon 设置`,type:`'arrow' | 'plus'`,defaultValue:`-`},{prop:`key`,description:`推荐显式提供的稳定标识，用于 activeKey / openKeys 匹配`,type:`string | number`,defaultValue:`index`},{prop:`open`,description:`非受控模式下的默认展开状态`,type:`boolean`,defaultValue:`false`},{prop:`title`,description:`标题区域内容`,type:`any`,defaultValue:`-`},{prop:`titleClassName`,description:`标题区域类名`,type:`string`,defaultValue:`-`},{prop:`use`,description:`覆盖全局 use 设置`,type:`'radio' | 'details'`,defaultValue:`-`}],W=(a,o)=>s(l=>{let u=r(`div`,l);h(()=>{n(u,String(o?.containerClassName??`grid gap-3`))});let f=e(`rue:list:start`),g=e(`rue:list:end`);i(u,f),i(u,g);let v=new Map;return h(()=>{v=_({items:B||[],getKey:(e,t)=>`${a}-${e.key}`,elements:v,parent:f.parentNode,before:g,start:f,renderItem:(n,r,l,u,f)=>{let g=s(()=>{let r=t(),a=e(`rue:component:anchor`);i(r,a),h(()=>{let e=p(L.Title,{as:o?.use===`details`?`summary`:`div`,className:`font-semibold`,children:n.title});c(()=>d(e,r,a))});let s=e(`rue:component:anchor`);return i(r,s),d(p(L.Content,{className:`text-sm opacity-80`,children:n.content}),r,s),r});m(p(L,{key:`${a}-${n.key}`,name:a,use:o?.use,icon:o?.icon,collapsible:o?.collapsible,className:o?.itemClassName??`bg-base-100 border border-base-300`,defaultOpen:f===0,children:g}),r,l,u)}})}),u}),G=()=>{let{tabRadio:l,tabDetails:m,tabControlled:x,tabMultiple:S,tabRich:C,tabArrow:w,tabPlus:T,tabJoin:E,tabArrayRadio:D,tabArrayDetails:ee,controlledKey:O,lastChanged:k,roadmapItems:A,faqItemsCode:j}=g(`useSetup:0:0`,()=>u(()=>({tabRadio:g(`ref:1:0`,()=>f(`preview`)),tabDetails:g(`ref:1:1`,()=>f(`preview`)),tabControlled:g(`ref:1:2`,()=>f(`preview`)),tabMultiple:g(`ref:1:3`,()=>f(`preview`)),tabRich:g(`ref:1:4`,()=>f(`preview`)),tabArrow:g(`ref:1:5`,()=>f(`preview`)),tabPlus:g(`ref:1:6`,()=>f(`preview`)),tabJoin:g(`ref:1:7`,()=>f(`preview`)),tabArrayRadio:g(`ref:1:8`,()=>f(`preview`)),tabArrayDetails:g(`ref:1:9`,()=>f(`preview`)),controlledKey:g(`ref:1:10`,()=>f(`build`)),lastChanged:g(`ref:1:11`,()=>f(`build`)),roadmapItems:[{key:`plan`,title:`Plan backlog`,description:`先确定优先级，再安排设计和开发`,extra:`Sprint 12`,content:`Collect the most urgent requirements, align on edge cases, and freeze the delivery order before implementation starts.`},{key:`build`,title:`Build feature slice`,description:`把 API、交互和回归验证收敛到同一轮里`,extra:`In progress`,content:`Ship the smallest useful slice first, then expand demos and tests around the verified behavior instead of guessing a broad design up front.`},{key:`ship`,title:`Ship and monitor`,description:`发布后持续看告警、埋点和反馈`,extra:`Ready`,content:`After release, keep an eye on error rate, support feedback and adoption signals so the next iteration has concrete evidence.`}],faqItemsCode:`const items = [
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
]`})));return s(u=>{let f=t(),g=e(`rue:component:anchor`);return i(f,g),d(p(b,{children:s(()=>{let u=t(),f=r(`div`,u);i(u,f),n(f,`max-w-none prose prose-sm md:prose-base`);let g=r(`h1`,f);i(f,g),i(g,a(`Accordion 手风琴`));let b=r(`p`,f);i(f,b),n(b,`text-sm mt-3 mb-3`),i(b,a(`Accordion 现在保留 Rue 原本的轻量视觉风格，但 API 不再只是静态包装。你可以继续用`));let M=r(`code`,b);i(b,M),i(M,a(`Accordion.Title`)),i(b,a(`和`));let N=r(`code`,b);i(b,N),i(N,a(`Accordion.Content`)),i(b,a(`组合单个面板，也可以直接用`));let P=r(`code`,b);i(b,P),i(P,a(`items`)),i(b,a(`走数据驱动，接入受控 key、多开、禁用和富标题信息。`));let F=r(`div`,f);i(f,F),n(F,`text-sm flex flex-wrap gap-4`);let I=r(`a`,F);i(F,I),o(I,`href`,`https://daisyui.com/components/accordion/`),o(I,`target`,`_blank`),i(I,a(`查看 Accordion 静态样式`));let G=r(`h2`,f);i(f,G),i(G,a(`何时使用`));let K=r(`ul`,f);i(f,K);let q=r(`li`,K);i(K,q),i(q,a(`需要 FAQ、设置说明、任务面板这类“标题 + 可折叠内容”的信息组织方式。`));let J=r(`li`,K);i(K,J),i(J,a(`需要在单开和多开之间切换，或把当前展开项接到页面状态里。`));let Y=r(`li`,K);i(K,Y),i(Y,a(`需要在标题里补充状态、说明、标签，而不想为每个面板手写结构。`));let X=r(`li`,K);i(K,X),i(X,a(`需要让浏览器能搜索折叠内容时，使用`));let te=r(`code`,X);i(X,te),i(te,a(`use="details"`)),i(X,a(`。`));let Z=r(`div`,f);i(f,Z),n(Z,`not-prose my-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4`);let ne=e(`rue:list:start`),re=e(`rue:list:end`);i(Z,ne),i(Z,re);let ie=new Map;h(()=>{ie=_({items:V||[],getKey:(e,t)=>e.title,elements:ie,parent:Z,before:re,singleRoot:!0,trackIndex:!1,start:ne,renderItem:(l,u,f,p,m)=>{d(s(()=>{let s=t(),u=r(`div`,s);i(s,u),h(()=>{o(u,`key`,String(l.title))}),n(u,`card border border-base-300 bg-base-100 shadow-sm`);let f=r(`div`,u);i(u,f),n(f,`card-body gap-2 p-4`);let p=r(`div`,f);i(f,p),n(p,`text-xs uppercase tracking-[0.2em] text-base-content/50`),i(p,a(`Capability`));let m=r(`div`,f);i(f,m),n(m,`text-sm font-semibold`);let g=e(`rue:slot:anchor`);i(m,g),h(()=>{let e=l.title;c(()=>d(e,m,g))});let _=r(`p`,f);i(f,_),n(_,`m-0 text-sm opacity-70`);let v=e(`rue:slot:anchor`);return i(_,v),h(()=>{let e=l.desc;c(()=>d(e,_,v))}),s}),u,f)}})});let ae=e(`rue:component:anchor`);i(f,ae),h(()=>{let e=p(R,{title:`Accordion using radio inputs`,summary:`保留单开分组，同时额外开启 collapsible，方便在文档页里反复点按查看开合状态。`,tab:l,preview:()=>W(`accordion-radio-demo`,{collapsible:!0}),code:`<Accordion className="bg-base-100 border border-base-300" name="accordion-radio-demo" defaultOpen collapsible>
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
</Accordion>`});c(()=>d(e,f,ae))});let oe=e(`rue:component:anchor`);i(f,oe),h(()=>{let e=p(R,{title:`Accordion using details`,summary:`保留 details 结构，适合需要原生语义和浏览器搜索能力的内容区。`,tab:m,preview:()=>W(`accordion-details-demo`,{use:`details`}),code:`<Accordion use="details" className="bg-base-100 border border-base-300" name="accordion-details-demo" defaultOpen>
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
</Accordion>`});c(()=>d(e,f,oe))});let se=e(`rue:component:anchor`);i(f,se),h(()=>{let e=p(R,{title:`Controlled active key`,summary:`受控模式同样支持 collapsible；点击已展开项时，activeKey 会回到 null。`,tab:x,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-4`,children:[y(`div`,{className:`flex flex-wrap gap-2`,children:A.map(e=>v(`button`,{className:`btn btn-sm ${O.value===e.key?`btn-primary`:`btn-ghost`}`,onClick:()=>{let t=O.value===e.key?null:e.key;O.value=t,k.value=t},children:[`切换 `,e.title]},e.key))}),v(`div`,{className:`grid gap-2 rounded-box border border-base-300 bg-base-200/40 p-3 text-sm`,children:[v(`div`,{children:[`当前 `,y(`code`,{children:`activeKey`}),`：`,y(`code`,{children:O.value??`null`})]}),v(`div`,{children:[`最近一次切换：`,y(`code`,{children:k.value??`null`})]})]}),y(L,{activeKey:O.value,collapsible:!0,icon:`arrow`,className:`bg-base-100 border border-base-300`,items:A,onChange:e=>{let t=Array.isArray(e)?e[0]:e;O.value=t??null,k.value=t??null}})]})}),code:`import { ref } from '@rue-js/rue'

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
/>`});c(()=>d(e,f,se))});let ce=e(`rue:component:anchor`);i(f,ce),h(()=>{let e=p(R,{title:`Multiple open panels`,summary:`新增 multiple 与 defaultOpenKeys，可同时展开多个项；同一 API 也能配合 collapsible 做可收起单项。`,tab:S,preview:()=>v(`div`,{className:`grid gap-4 xl:grid-cols-[1.5fr_1fr]`,children:[y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-4`,children:[y(`div`,{className:`alert alert-soft`,children:y(`span`,{className:`text-sm`,children:`multiple 会把 radio 形态切到 checkbox 行为，适合筛选条件或调试面板。`})}),y(L,{multiple:!0,icon:`arrow`,className:`bg-base-100 border border-base-300`,defaultOpenKeys:[`latency`,`cache`],items:[{key:`latency`,title:`Latency budget`,description:`页面首屏与接口预算放在同一个地方追踪`,extra:`120ms`,content:`Track server timing, render budget and hydration cost together so regressions can be located quickly.`},{key:`cache`,title:`Cache strategy`,description:`缓存命中率和失效策略分开说明`,extra:`Warm`,content:`Document what can stay stale, what must be revalidated, and how to handle cache busting during deployments.`},{key:`rollback`,title:`Rollback checklist`,description:`保留快速回滚路径，避免线上排障时再找人`,extra:`Ops`,content:`Keep a minimal rollback playbook near the release notes so the on-call engineer can act without extra context switching.`}]})]})}),y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-4`,children:[v(`div`,{children:[y(`h3`,{className:`m-0 text-base font-semibold`,children:`Single but collapsible`}),v(`p`,{className:`mt-2 mb-0 text-sm opacity-70`,children:[`不想强制保留一个展开项时，可以给 children 模式加 `,y(`code`,{children:`collapsible`}),`。`]})]}),v(L,{collapsible:!0,defaultOpen:!0,className:`bg-base-100 border border-base-300`,icon:`plus`,children:[y(L.Title,{className:`font-semibold`,children:`Can I close the last open panel?`}),v(L.Content,{className:`text-sm opacity-80`,children:[`Yes. Set `,y(`code`,{children:`collapsible`}),` to allow toggling the current panel off instead of forcing one active item.`]})]})]})})]}),code:`<Accordion
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
</Accordion>`});c(()=>d(e,f,ce))});let le=e(`rue:component:anchor`);i(f,le),h(()=>{let e=p(R,{title:`Rich item metadata`,summary:`新增 description、extra 和 disabled，适合后台列表、规则说明和版本发布面板。`,tab:C,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-4`,children:y(L,{collapsible:!0,icon:`arrow`,className:`bg-base-100 border border-base-300`,items:[{key:`review`,title:`Review dependencies`,description:`上线前再核对一次依赖差异和风险说明`,extra:y(`span`,{className:`badge badge-warning badge-outline`,children:`Review`}),open:!0,content:`Compare the dependency diff with the last release baseline, and record whether each update changes runtime behavior or only build tooling.`},{key:`announce`,title:`Prepare release notes`,description:`把用户可感知的变化浓缩成 changelog 和公告文案`,extra:y(`span`,{className:`badge badge-success badge-outline`,children:`Ready`}),content:`Write the changelog from the user perspective first, then attach migration hints or rollout notes only when they affect adoption.`},{key:`ops`,title:`Ops handoff`,description:`值班同学确认回滚路径与观测指标后才能执行`,extra:y(`span`,{className:`badge badge-ghost`,children:`Waiting`}),disabled:!0,content:`This item is intentionally disabled to show how a non-interactive operational gate can still stay visible in the stack.`}]})})}),code:`<Accordion
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
/>`});c(()=>d(e,f,le))});let ue=e(`rue:component:anchor`);i(f,ue),h(()=>{let e=p(R,{title:`Accordion with arrow icon`,summary:`保留 arrow 指示样式，并开启 collapsible，方便直接验证箭头开合反馈。`,tab:w,preview:()=>W(`accordion-arrow-demo`,{icon:`arrow`,collapsible:!0}),code:`<Accordion icon="arrow" className="bg-base-100 border border-base-300" name="accordion-arrow-demo" defaultOpen collapsible>
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
</Accordion>`});c(()=>d(e,f,ue))});let de=e(`rue:component:anchor`);i(f,de),h(()=>{let e=p(R,{title:`Accordion with plus/minus icon`,summary:`保留 plus/minus 方案，并开启 collapsible，方便直接验证开合反馈。`,tab:T,preview:()=>W(`accordion-plus-demo`,{icon:`plus`,collapsible:!0}),code:`<Accordion icon="plus" className="bg-base-100 border border-base-300" name="accordion-plus-demo" defaultOpen collapsible>
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
</Accordion>`});c(()=>d(e,f,de))});let fe=e(`rue:component:anchor`);i(f,fe),h(()=>{let e=p(R,{title:`Using Accordion and Join together`,summary:`保留 join 组合方式，并开启 collapsible，方便连续边框场景下反复验证开合。`,tab:E,preview:()=>y(`div`,{className:`join join-vertical bg-base-100`,children:B.map((e,t)=>v(L,{icon:`arrow`,collapsible:!0,className:`join-item border border-base-300`,name:`accordion-join-demo`,defaultOpen:t===0,children:[y(L.Title,{className:`font-semibold`,children:e.title}),y(L.Content,{className:`text-sm opacity-80`,children:e.content})]},`join-${e.key}`))}),code:`<div className="join join-vertical bg-base-100">
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
</div>`});c(()=>d(e,f,fe))});let pe=e(`rue:component:anchor`);i(f,pe),h(()=>{let e=p(R,{title:`Accordion using items array (radio)`,summary:`保留 items 数组写法，并开启 collapsible，方便直接验证数据驱动下的收起逻辑。`,tab:D,preview:()=>y(L,{collapsible:!0,className:`bg-base-100 border border-base-300`,name:`accordion-array-radio-demo`,items:B.map((e,t)=>({key:e.key,title:e.title,content:e.content,open:t===0}))}),code:`${j}

<Accordion
  collapsible
  className="bg-base-100 border border-base-300"
  name="accordion-array-radio-demo"
  items={items}
/>`});c(()=>d(e,f,pe))});let me=e(`rue:component:anchor`);i(f,me),h(()=>{let e=p(R,{title:`Accordion using items array (details)`,summary:`保留原来的 details + items 组合；现在它也能继续叠加 description、extra 和 disabled。`,tab:ee,preview:()=>y(L,{use:`details`,className:`bg-base-100 border border-base-300`,name:`accordion-array-details-demo`,items:B.map((e,t)=>({key:e.key,title:e.title,content:e.content,open:t===0}))}),code:`${j}

<Accordion
  use="details"
  className="bg-base-100 border border-base-300"
  name="accordion-array-details-demo"
  items={items}
/>`});c(()=>d(e,f,me))});let Q=r(`h2`,f);i(f,Q),o(Q,`id`,`accordion-api`),i(Q,a(`API`));let he=r(`p`,f);i(f,he),i(he,a(`Accordion 现在分成两套用法：children 模式适合局部排版，items 模式适合数据驱动和受控状态。 两套模式共用同一套视觉类名，因此迁移旧示例时通常只需要把结构收敛到更清晰的语义层。`));let ge=r(`h3`,f);i(f,ge),i(ge,a(`Accordion Props`));let _e=e(`rue:component:anchor`);i(f,_e),h(()=>{let e=p(z,{rows:H});c(()=>d(e,f,_e))});let $=r(`h3`,f);i(f,$),n($,`mt-6`),i($,a(`AccordionDataItem`));let ve=e(`rue:component:anchor`);return i(f,ve),h(()=>{let e=p(z,{rows:U});c(()=>d(e,f,ve))}),u})}),f,g),f})};export{G as default};