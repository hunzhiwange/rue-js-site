import{Cn as e,Ct as t,Lt as n,Nt as r,Tt as i,dt as a,ft as o,mt as s,ot as c,pn as l,pt as u,st as d,tn as f,vn as p}from"./context-8lXZvIn-.js";import{l as m,o as h,t as g}from"./vapor-runtime-ygJWVcNn.js";import{a as _,n as v}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as y}from"./Code-DhoWkRkB.js";import{n as b,t as x}from"./src-CCTNpCXV.js";import{t as S}from"./tabs-B1XdBEJF.js";import{r as C}from"./SidebarPlaygroundDesign-BbUFY3mM.js";var w=0,T=(e,t)=>e?t?`${e} ${t}`:e:t??``,E=(e,t)=>{let n=t?.getRootNode?.(),r=n&&typeof n.querySelectorAll==`function`?n:typeof document<`u`?document:null;return r?Array.from(r.querySelectorAll(`[data-rue-collapse-group]`)).filter(t=>t.dataset.rueCollapseGroup===e):[]},D=e=>Array.from(e.children).find(e=>e instanceof HTMLElement&&e.classList.contains(`collapse-title`)),O=(e,t)=>t instanceof Node&&!!D(e)?.contains(t),k=e=>Array.from(e.children).find(e=>e instanceof HTMLInputElement&&(e.type===`checkbox`||e.type===`radio`)),A=(e,t)=>{if(!(e instanceof HTMLElement))return;e.classList.remove(`collapse-open`,`collapse-close`),e.classList.add(t?`collapse-open`:`collapse-close`);let n=D(e);n&&n.setAttribute(`aria-expanded`,t?`true`:`false`);let r=e.querySelector(`[data-rue-collapse-arrow-icon]`);r&&r.classList.toggle(`rotate-90`,t);let i=e.querySelector(`[data-rue-collapse-plus-vertical]`);i&&(i.classList.remove(`opacity-0`,`opacity-100`),i.classList.add(t?`opacity-0`:`opacity-100`));let a=e.querySelector(`[data-rue-collapse-icon-trigger]`);a&&a.setAttribute(`aria-label`,t?`收起`:`展开`)},j=(e,t)=>{e.classList.remove(`collapse-open`,`collapse-close`),e.classList.add(t?`collapse-open`:`collapse-close`);let n=D(e);n&&n.setAttribute(`aria-expanded`,t?`true`:`false`)},M=e=>{let t=[];return e.forEach(e=>{t.some(t=>t===e)||t.push(e)}),t},N=e=>{switch(e){case`small`:return`sm`;case`middle`:return`md`;case`large`:return`lg`;default:return e}},P=(e,t,n)=>{if(e)return e;if(n)return`plus`;if(t)return`arrow`},F=e=>Array.isArray(e)?e:e==null?[]:[e],I=(e,t)=>{let n=M(F(e));return t?n.slice(0,1):n},L=e=>{switch(N(e)){case`sm`:return`min-h-0 py-3 text-sm`;case`lg`:return`min-h-0 py-5 text-lg`;default:return``}},R=e=>{switch(N(e)){case`sm`:return`pt-0 pb-3 text-sm`;case`lg`:return`pt-0 pb-5 text-base`;default:return``}},z=(e,t,n)=>I(t===void 0?e.filter(e=>e.open).map(e=>e.key):t,n),B=(e,t,n,r)=>r?n?[t]:[]:n?M([...e,t]):e.filter(e=>e!==t),V=(e,t,n)=>{let r=e?`overflow-hidden rounded-box border border-base-300 bg-base-100 divide-y divide-base-300`:`space-y-3`;return t&&(r+=` bg-transparent`),T(r,n)},H=(e,t)=>e?``:t?`bg-transparent`:`rounded-box border border-base-300 bg-base-100`,U=e=>m(n=>{let r=u(`span`,n);t(r,`data-rue-collapse-arrow-icon`,`true`),t(r,`aria-hidden`,`true`),f(()=>{i(r,`inline-flex size-5 items-center justify-center transition-transform duration-200 ${e.open?`rotate-90`:``}`.trim())});let a=u(`svg`,r);d(r,a),t(a,`viewBox`,`0 0 20 20`),t(a,`fill`,`none`),t(a,`stroke`,`currentColor`),t(a,`strokeWidth`,`1.8`),i(a,`size-4`);let o=u(`path`,a);return d(a,o),t(o,`strokeLinecap`,`round`),t(o,`strokeLinejoin`,`round`),t(o,`d`,`m7 4 6 6-6 6`),r}),W=e=>m(n=>{let r=u(`span`,n);t(r,`aria-hidden`,`true`),i(r,`relative inline-flex size-5 items-center justify-center`);let a=u(`span`,r);d(r,a),i(a,`absolute h-0.5 w-3 rounded-full bg-current`);let o=u(`span`,r);return d(r,o),t(o,`data-rue-collapse-plus-vertical`,`true`),f(()=>{i(o,`absolute h-3 w-0.5 rounded-full bg-current transition-opacity duration-200 ${e.open?`opacity-0`:`opacity-100`}`.trim())}),r}),G=(e,t)=>x(e===`plus`?W:U,{open:t}),K=(e,t,n,r,s)=>t==null&&n==null?e:m(l=>{let g=u(`div`,l);i(g,`flex w-full items-start justify-between gap-3`);let _=u(`div`,g);d(g,_),i(_,`min-w-0 flex-1`);let v=u(`div`,_);d(_,v);let y=a(`rue:slot:anchor`);d(v,y),f(()=>{let t=e;p(()=>h(t,v,y))});let b=a(`rue:slot:anchor`);d(_,b),f(()=>{let e=t==null?``:m(()=>{let e=o(),n=u(`div`,e);d(e,n),f(()=>{i(n,T(`mt-1 text-xs opacity-70`,r))});let s=a(`rue:slot:anchor`);return d(n,s),f(()=>{let e=t;p(()=>h(e,n,s))}),e});p(()=>h(e,_,b))});let x=a(`rue:slot:anchor`);return d(g,x),f(()=>{let e=n==null?``:m(()=>{let e=o(),t=u(`div`,e);d(e,t),f(()=>{i(t,T(`shrink-0 text-xs opacity-70`,s))}),c(t,`click`,e=>e.stopPropagation()),c(t,`keydown`,e=>e.stopPropagation());let r=a(`rue:slot:anchor`);return d(t,r),f(()=>{let e=n;p(()=>h(e,t,r))}),e});p(()=>h(e,g,x))}),g}),q=Object.assign(s=>{let{normalizedItems:g,hasItems:y,resolvedBordered:b,resolvedIcon:x,hasManagedIcon:S,generatedGroupName:C,uncontrolledOpenKeys:D,getCurrentOpenKeys:M}=_(`useSetup:0:0`,()=>e(()=>{let e=s.items?.map((e,t)=>({...e,key:e.key??t,index:t,label:e.label??e.title,content:e.children??e.content}))??[],t=e.length>0,r=_(`computed:1:0`,()=>n(()=>s.bordered??t)),i=_(`computed:1:1`,()=>n(()=>P(s.icon,s.arrow,s.plus))),a=i,o=_(`computed:1:2`,()=>n(()=>s.showArrow!==!1&&!!a.get())),c=_(`ref:1:3`,()=>l(`rue-collapse-${w++}`)),u=_(`ref:1:4`,()=>l(z(e,s.defaultActiveKey,s.accordion)));return{normalizedItems:e,hasItems:t,resolvedBordered:r,resolvedIcon:i,hasManagedIcon:o,generatedGroupName:c,uncontrolledOpenKeys:u,getCurrentOpenKeys:()=>{let e=s.activeKey===void 0?u.value:I(s.activeKey,s.accordion);return Array.isArray(e)?e:[]}}}));if(y){let e=C.value,n=(t,n)=>{E(e,n).forEach(e=>{let n=Number(e.dataset.rueCollapseIndex),r=g[n];r&&A(e,t.some(e=>e===r.key))})},l=(e,t,r)=>{let i=B(M(),e.key,t,s.accordion),a=i.some(t=>t===e.key);s.activeKey===void 0&&(D.value=i,n(i,r)),s.onChange&&s.onChange(s.accordion?i[0]??null:i,{key:e.key,index:e.index,open:a,item:e})};return m(n=>{let _=u(`div`,n);f(()=>{i(_,V(b.get(),s.ghost,s.className))});let y=a(`rue:list:start`),C=a(`rue:list:end`);d(_,y),d(_,C);let w=new Map;return f(()=>{w=v({items:g||[],getKey:(e,t)=>e.key,elements:w,parent:y.parentNode,before:C,singleRoot:!0,trackIndex:!1,start:y,renderItem:(n,g,_,v,y)=>{h(m(()=>{let g=o(),_=u(`div`,g);d(g,_),f(()=>{i(_,T(T(T(`collapse`,M().some(e=>e===n.key)?`collapse-open`:`collapse-close`),H(b.get(),s.ghost)),n.className))}),f(()=>{t(_,`key`,String(n.key))}),f(()=>{t(_,`data-rue-collapse-group`,String(e))}),f(()=>{t(_,`data-rue-collapse-index`,String(String(n.index)))});let v=u(`div`,_);d(_,v),f(()=>{i(v,T(T(T(`collapse-title`,L(s.size)),T(s.titleClassName,n.titleClassName)),(s.disabled||n.disabled?`disabled`:n.collapsible??s.collapsible??`header`)===`header`?`cursor-pointer select-none`:``))}),f(()=>{t(v,`aria-expanded`,String(M().some(e=>e===n.key)?`true`:`false`))}),f(()=>{r(v,(s.disabled||n.disabled?`disabled`:n.collapsible??s.collapsible??`header`)===`header`?{role:`button`,tabIndex:0,onClick:e=>(e=>{if((s.disabled||n.disabled?`disabled`:n.collapsible??s.collapsible??`header`)===`disabled`)return;let t=!M().some(e=>e===n.key);l(n,t,e)})(e.currentTarget),onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),(e=>{if((s.disabled||n.disabled?`disabled`:n.collapsible??s.collapsible??`header`)===`disabled`)return;let t=!M().some(e=>e===n.key);l(n,t,e)})(e.currentTarget))}}:{})});let y=u(`div`,v);d(v,y),i(y,`flex w-full items-start gap-3`);let C=a(`rue:slot:anchor`);d(y,C),f(()=>{let e=(n.showArrow??S.get())&&(n.icon??x.get())&&(s.expandIconPlacement===void 0?`end`:s.expandIconPlacement)===`start`?(s.disabled||n.disabled?`disabled`:n.collapsible??s.collapsible??`header`)===`icon`?m(()=>{let e=o(),r=u(`button`,e);d(e,r),t(r,`data-rue-collapse-icon-trigger`,`true`),t(r,`type`,`button`),f(()=>{i(r,T(`inline-flex size-7 shrink-0 self-start items-center justify-center rounded-full border border-transparent transition-colors hover:bg-base-200/70`,n.description!=null||n.extra!=null?`pt-1`:`mt-0.5`))}),f(()=>{t(r,`aria-label`,String(M().some(e=>e===n.key)?`收起`:`展开`))}),c(r,`click`,e=>{e.stopPropagation(),(e=>{if((s.disabled||n.disabled?`disabled`:n.collapsible??s.collapsible??`header`)===`disabled`)return;let t=!M().some(e=>e===n.key);l(n,t,e)})(e.currentTarget)});let m=a(`rue:slot:anchor`);return d(r,m),f(()=>{let e=G(n.icon??x.get(),M().some(e=>e===n.key));p(()=>h(e,r,m))}),e}):m(()=>{let e=o(),t=u(`span`,e);d(e,t),f(()=>{i(t,T(`inline-flex size-7 shrink-0 self-start items-center justify-center`,n.description!=null||n.extra!=null?`pt-1`:`mt-0.5`))});let r=a(`rue:slot:anchor`);return d(t,r),f(()=>{let e=G(n.icon??x.get(),M().some(e=>e===n.key));p(()=>h(e,t,r))}),e}):``;p(()=>h(e,y,C))});let w=u(`div`,y);d(y,w),i(w,`min-w-0 flex-1`);let E=a(`rue:slot:anchor`);d(w,E),f(()=>{let e=K(n.label,n.description,n.extra,n.descriptionClassName,n.extraClassName);p(()=>h(e,w,E))});let D=a(`rue:slot:anchor`);d(y,D),f(()=>{let e=(n.showArrow??S.get())&&(n.icon??x.get())&&(s.expandIconPlacement===void 0?`end`:s.expandIconPlacement)===`end`?(s.disabled||n.disabled?`disabled`:n.collapsible??s.collapsible??`header`)===`icon`?m(()=>{let e=o(),r=u(`button`,e);d(e,r),t(r,`data-rue-collapse-icon-trigger`,`true`),t(r,`type`,`button`),f(()=>{i(r,T(`inline-flex size-7 shrink-0 self-start items-center justify-center rounded-full border border-transparent transition-colors hover:bg-base-200/70`,n.description!=null||n.extra!=null?`pt-1`:`mt-0.5`))}),f(()=>{t(r,`aria-label`,String(M().some(e=>e===n.key)?`收起`:`展开`))}),c(r,`click`,e=>{e.stopPropagation(),(e=>{if((s.disabled||n.disabled?`disabled`:n.collapsible??s.collapsible??`header`)===`disabled`)return;let t=!M().some(e=>e===n.key);l(n,t,e)})(e.currentTarget)});let m=a(`rue:slot:anchor`);return d(r,m),f(()=>{let e=G(n.icon??x.get(),M().some(e=>e===n.key));p(()=>h(e,r,m))}),e}):m(()=>{let e=o(),t=u(`span`,e);d(e,t),f(()=>{i(t,T(`inline-flex size-7 shrink-0 self-start items-center justify-center`,n.description!=null||n.extra!=null?`pt-1`:`mt-0.5`))});let r=a(`rue:slot:anchor`);return d(t,r),f(()=>{let e=G(n.icon??x.get(),M().some(e=>e===n.key));p(()=>h(e,t,r))}),e}):``;p(()=>h(e,y,D))});let O=u(`div`,_);d(_,O),f(()=>{i(O,T(T(`collapse-content`,R(s.size)),T(s.contentClassName,n.contentClassName)))});let k=a(`rue:slot:anchor`);return d(O,k),f(()=>{let e=n.content;p(()=>h(e,O,k))}),g}),g,_)}})}),_})}let N=`collapse`;s.showArrow!==!1&&(s.arrow||x.get()===`arrow`)&&(N+=` collapse-arrow`),s.showArrow!==!1&&(s.plus||x.get()===`plus`)&&(N+=` collapse-plus`),s.open&&(N+=` collapse-open`),s.close&&(N+=` collapse-close`),!s.open&&!s.close&&s.defaultOpen&&(N+=` collapse-open`),s.disabled&&(N+=` opacity-70`);let F=H(!!b.get(),s.ghost);if(F&&(N+=` ${F}`),s.className&&(N+=` ${s.className}`),(s.tag===void 0?`div`:s.tag)===`details`)return m(e=>{let n=u(`details`,e);f(()=>{i(n,N)}),f(()=>{t(n,`open`,String(s.open||!s.close&&s.defaultOpen?!0:void 0))});let r=a(`rue:children:anchor`);return d(n,r),f(()=>{let e=s.children;p(()=>h(e,n,r))}),n});let U=typeof s.tabIndex==`number`?s.tabIndex:void 0,W=!!s.open||!!s.close||!!s.defaultOpen;return m(e=>{let n=u(`div`,e);f(()=>{i(n,N)}),f(()=>{t(n,`tabindex`,String(U===void 0?void 0:String(U)))}),c(n,`mousedown`,e=>{let t=e.currentTarget;t.dataset.rueCollapsePointerDown=`true`}),c(n,`click`,e=>{let t=e.currentTarget,n=e.target,r=k(t),i=O(t,n),a=n instanceof HTMLInputElement&&n===r;if(!i&&!a){delete t.dataset.rueCollapsePointerDown;return}U!==void 0&&(t.tabIndex=U,t.setAttribute(`tabindex`,String(U)),t.focus()),W||(r?(a||(r.type===`checkbox`?r.checked=!r.checked:r.type===`radio`&&(r.checked=!0)),j(t,r.checked)):j(t,!t.classList.contains(`collapse-open`))),delete t.dataset.rueCollapsePointerDown}),c(n,`focus`,e=>{if(U===void 0||W)return;let t=e.currentTarget;t.dataset.rueCollapsePointerDown!==`true`&&j(t,!0)}),c(n,`blur`,e=>{delete e.currentTarget.dataset.rueCollapsePointerDown,!(U===void 0||W)&&j(e.currentTarget,!1)}),c(n,`keydown`,e=>{if(U===void 0||W||e.key!==`Enter`&&e.key!==` `||!O(e.currentTarget,e.target))return;e.preventDefault();let t=e.currentTarget;j(t,!t.classList.contains(`collapse-open`))}),c(n,`change`,e=>{if(W)return;let t=e.target;!t||t.type!==`checkbox`&&t.type!==`radio`||j(e.currentTarget,t.checked)});let r=a(`rue:children:anchor`);return d(n,r),f(()=>{let e=s.children;p(()=>h(e,n,r))}),n})},{Title:t=>{let{cls:r,body:o}=_(`useSetup:0:0:dup1`,()=>e(()=>({cls:_(`computed:1:5`,()=>n(()=>T(`collapse-title`,t.className))),body:_(`computed:1:6`,()=>n(()=>K(t.children,t.description,t.extra,t.descriptionClassName,t.extraClassName)))})));return(t.as===void 0?`div`:t.as)===`summary`?m(e=>{let t=u(`summary`,e);f(()=>{i(t,r.get())});let n=a(`rue:slot:anchor`);return d(t,n),f(()=>{let e=o.get();p(()=>h(e,t,n))}),t}):m(e=>{let t=u(`div`,e);f(()=>{i(t,r.get())});let n=a(`rue:slot:anchor`);return d(t,n),f(()=>{let e=o.get();p(()=>h(e,t,n))}),t})},Content:e=>m(t=>{let n=u(`div`,t);f(()=>{i(n,T(`collapse-content`,e.className))});let r=a(`rue:children:anchor`);return d(n,r),f(()=>{let t=e.children;p(()=>h(t,n,r))}),n})}),J=e=>m(t=>{let n=u(`div`,t);i(n,`component-preview not-prose text-base-content my-6 lg:my-12`);let r=u(`div`,n);d(n,r);let c=u(`h3`,r);d(r,c),i(c,`component-preview-title mt-2 mb-1 text-lg font-semibold`),d(c,s(`# `));let l=a(`rue:slot:anchor`);d(c,l),f(()=>{let t=e.title;p(()=>h(t,c,l))});let _=a(`rue:slot:anchor`);d(r,_),f(()=>{let t=e.summary?m(()=>{let t=o(),n=u(`p`,t);d(t,n),i(n,`m-0 text-sm opacity-70`);let r=a(`rue:slot:anchor`);return d(n,r),f(()=>{let t=e.summary;p(()=>h(t,n,r))}),t}):``;p(()=>h(t,r,_))});let v=a(`rue:component:anchor`);d(n,v),f(()=>{let t=g(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`});p(()=>h(t,n,v))});let b=a(`rue:slot:anchor`);return d(n,b),f(()=>{let t=e.tab.value===`preview`?e.preview():m(()=>{let t=o(),n=a(`rue:component:anchor`);return d(t,n),f(()=>{let r=g(y,{className:`mt-2`,lang:`tsx`,code:e.code});p(()=>h(r,t,n))}),t});p(()=>h(t,n,b))}),n}),Y=e=>m(n=>{let r=u(`div`,n);i(r,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let c=u(`table`,r);d(r,c),i(c,`table table-zebra`);let l=u(`thead`,c);d(c,l);let g=u(`tr`,l);d(l,g);let _=u(`th`,g);d(g,_),d(_,s(`属性`));let y=u(`th`,g);d(g,y),d(y,s(`说明`));let b=u(`th`,g);d(g,b),d(b,s(`类型`));let x=u(`th`,g);d(g,x),d(x,s(`默认值`));let S=u(`tbody`,c);d(c,S);let C=a(`rue:list:start`),w=a(`rue:list:end`);d(S,C),d(S,w);let T=new Map;return f(()=>{T=v({items:e.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,n,r,i,s)=>{h(m(()=>{let n=o(),r=u(`tr`,n);d(n,r),f(()=>{t(r,`key`,String(e.prop))});let i=u(`td`,r);d(r,i);let s=u(`code`,i);d(i,s);let c=a(`rue:slot:anchor`);d(s,c),f(()=>{let t=e.prop;p(()=>h(t,s,c))});let l=u(`td`,r);d(r,l);let m=a(`rue:slot:anchor`);d(l,m),f(()=>{let t=e.description;p(()=>h(t,l,m))});let g=u(`td`,r);d(r,g);let _=u(`code`,g);d(g,_);let v=a(`rue:slot:anchor`);d(_,v),f(()=>{let t=e.type;p(()=>h(t,_,v))});let y=u(`td`,r);d(r,y);let b=u(`code`,y);d(y,b);let x=a(`rue:slot:anchor`);return d(b,x),f(()=>{let t=e.defaultValue;p(()=>h(t,b,x))}),n}),n,r)}})}),r}),ee=[{prop:`items`,description:`数据驱动的折叠面板列表`,type:`CollapseItem[]`,defaultValue:`-`},{prop:`activeKey`,description:`受控展开项；accordion 模式下可传单值`,type:`string | number | Array<string | number>`,defaultValue:`-`},{prop:`defaultActiveKey`,description:`非受控默认展开项`,type:`string | number | Array<string | number>`,defaultValue:`-`},{prop:`accordion`,description:`是否只允许同时展开一项`,type:`boolean`,defaultValue:`false`},{prop:`bordered`,description:`是否使用分组边框容器`,type:`boolean`,defaultValue:`items 模式默认 true`},{prop:`ghost`,description:`是否使用透明背景`,type:`boolean`,defaultValue:`false`},{prop:`size`,description:`标题与内容尺寸`,type:`'sm' | 'md' | 'lg'`,defaultValue:`'md'`},{prop:`expandIconPlacement`,description:`展开图标位置`,type:`'start' | 'end'`,defaultValue:`'end'`},{prop:`onChange`,description:`items 模式切换时触发，返回下一个展开 key`,type:`(nextValue, context) => void`,defaultValue:`-`},{prop:`tag`,description:`支持基础写法的根标签切换`,type:`'div' | 'details'`,defaultValue:`'div'`}],te=[{prop:`key`,description:`面板唯一标识`,type:`string | number`,defaultValue:`索引值`},{prop:`label`,description:`标题内容，支持 title 别名`,type:`any`,defaultValue:`-`},{prop:`children`,description:`面板内容，支持 content 别名`,type:`any`,defaultValue:`-`},{prop:`description`,description:`标题下方的说明文案`,type:`any`,defaultValue:`-`},{prop:`extra`,description:`标题右侧附加区域，不触发展开`,type:`any`,defaultValue:`-`},{prop:`showArrow`,description:`是否显示展开图标`,type:`boolean`,defaultValue:`继承父级`},{prop:`collapsible`,description:`触发区域控制`,type:`'header' | 'icon' | 'disabled'`,defaultValue:`'header'`},{prop:`disabled`,description:`禁用当前项交互`,type:`boolean`,defaultValue:`false`},{prop:`open`,description:`非受控初始展开`,type:`boolean`,defaultValue:`false`}],X=()=>{let{tabItemsBasic:t,tabAccordion:n,tabMeta:r,tabPlacement:c,tabGhost:v,tabControlled:y,tabFocus:S,tabCheckbox:w,tabDetails:T,tabNoBorder:E,tabArrow:D,tabPlus:O,tabIconStart:k,tabOpen:A,tabClose:j,tabCustomFocus:M,tabCustomCheckbox:N,controlledKeys:P,accordionKey:F}=_(`useSetup:0:0`,()=>e(()=>({tabItemsBasic:_(`ref:1:0`,()=>l(`preview`)),tabAccordion:_(`ref:1:1`,()=>l(`preview`)),tabMeta:_(`ref:1:2`,()=>l(`preview`)),tabPlacement:_(`ref:1:3`,()=>l(`preview`)),tabGhost:_(`ref:1:4`,()=>l(`preview`)),tabControlled:_(`ref:1:5`,()=>l(`preview`)),tabFocus:_(`ref:1:6`,()=>l(`preview`)),tabCheckbox:_(`ref:1:7`,()=>l(`preview`)),tabDetails:_(`ref:1:8`,()=>l(`preview`)),tabNoBorder:_(`ref:1:9`,()=>l(`preview`)),tabArrow:_(`ref:1:10`,()=>l(`preview`)),tabPlus:_(`ref:1:11`,()=>l(`preview`)),tabIconStart:_(`ref:1:12`,()=>l(`preview`)),tabOpen:_(`ref:1:13`,()=>l(`preview`)),tabClose:_(`ref:1:14`,()=>l(`preview`)),tabCustomFocus:_(`ref:1:15`,()=>l(`preview`)),tabCustomCheckbox:_(`ref:1:16`,()=>l(`preview`)),controlledKeys:_(`ref:1:17`,()=>l([`release`])),accordionKey:_(`ref:1:18`,()=>l(`guide`))})));return m(e=>{let l=o(),_=a(`rue:component:anchor`);return d(l,_),h(g(C,{children:m(()=>{let e=o(),l=u(`div`,e);d(e,l),i(l,`max-w-none prose prose-sm md:prose-base`);let m=u(`h1`,l);d(l,m),d(m,s(`Collapse 折叠面板`));let _=u(`p`,l);d(l,_),i(_,`mt-3 mb-3 text-sm`),d(_,s("使用 Rue 基础基于 daisyUI 的视觉语言，并在此基础上补充 `items`、accordion、 `activeKey`、`extra`、`description`、尺寸与图标位置等增强能力。"));let C=u(`h2`,l);d(l,C),d(C,s(`语义 API`));let I=u(`p`,l);d(l,I),i(I,`text-sm opacity-80`),d(I,s("优先面向 `items` 数据驱动用法，组织方式贴近常见业务组件，但使用 Rue 视觉风格。"));let L=a(`rue:component:anchor`);d(l,L),f(()=>{let e=g(J,{title:`Items 基础用法`,summary:`直接通过 items 渲染多项折叠面板，并默认使用带边框的分组容器。`,tab:t,preview:()=>x(q,{arrow:!0,defaultActiveKey:[`overview`],items:[{key:`overview`,label:`Overview`,children:`汇总版本亮点、上线范围与回滚策略，适合用作页面最上方的信息概览。`},{key:`release`,label:`Release Checklist`,children:`确认灰度开关、日志埋点、告警阈值与发布窗口已经准备完毕。`},{key:`faq`,label:`FAQ`,children:`常见问题、风险提示和升级说明也可以继续放进同一个折叠组。`}]}),code:`<Collapse
  arrow
  defaultActiveKey={['overview']}
  items={[
    {
      key: 'overview',
      label: 'Overview',
      children: '汇总版本亮点、上线范围与回滚策略，适合用作页面最上方的信息概览。',
    },
    {
      key: 'release',
      label: 'Release Checklist',
      children: '确认灰度开关、日志埋点、告警阈值与发布窗口已经准备完毕。',
    },
    {
      key: 'faq',
      label: 'FAQ',
      children: '常见问题、风险提示和升级说明也可以继续放进同一个折叠组。',
    },
  ]}
/>`});p(()=>h(e,l,L))});let R=a(`rue:component:anchor`);d(l,R),f(()=>{let e=g(J,{title:`Accordion`,summary:`使用 accordion 改成一次只展开一项，并结合受控 key 管理当前面板。`,tab:n,preview:()=>b(`div`,{className:`space-y-4`,children:[b(`div`,{className:`flex flex-wrap gap-2`,children:[x(`button`,{className:`btn btn-sm`,onClick:()=>F.value=`guide`,children:`打开 Guide`}),x(`button`,{className:`btn btn-sm`,onClick:()=>F.value=`api`,children:`打开 API`}),x(`button`,{className:`btn btn-sm btn-ghost`,onClick:()=>F.value=null,children:`全部收起`})]}),x(q,{accordion:!0,plus:!0,activeKey:F.value,onChange:e=>F.value=e??null,items:[{key:`guide`,label:`Migration Guide`,children:`梳理 breaking changes、默认行为差异与升级建议。`},{key:`api`,label:`API Delta`,children:`列出属性变化与使用策略。`},{key:`qa`,label:`QA Notes`,children:`补充测试范围、回归清单和已知限制。`}]})]}),code:`const activeKey = ref<string | null>('guide')

<Collapse
  accordion
  plus
  activeKey={activeKey.value}
  onChange={nextValue => (activeKey.value = (nextValue as string | null) ?? null)}
  items={[
    {
      key: 'guide',
      label: 'Migration Guide',
      children: '梳理 breaking changes、默认行为差异与升级建议。',
    },
    {
      key: 'api',
      label: 'API Delta',
      children: '列出属性变化与使用策略。',
    },
    {
      key: 'qa',
      label: 'QA Notes',
      children: '补充测试范围、回归清单和已知限制。',
    },
  ]}
/>`});p(()=>h(e,l,R))});let z=a(`rue:component:anchor`);d(l,z),f(()=>{let e=g(J,{title:`描述与额外操作`,summary:`每一项可带 description、extra 和独立禁用状态，extra 区域点击不会触发展开。`,tab:r,preview:()=>x(q,{arrow:!0,defaultActiveKey:[`ops`],items:[{key:`ops`,label:`Ops Console`,description:`控制发布节奏、灰度范围与告警阈值。`,extra:x(`span`,{className:`badge badge-soft badge-info`,children:`Beta`}),children:`适合放置运维策略、SLA 约束和异常回滚说明。`},{key:`billing`,label:`Billing Center`,description:`当前模块仍在整理，暂不开放编辑。`,extra:x(`span`,{className:`badge badge-soft`,children:`Read only`}),disabled:!0,children:`禁用项会保持信息展示，但不响应交互。`}]}),code:`<Collapse
  arrow
  defaultActiveKey={['ops']}
  items={[
    {
      key: 'ops',
      label: 'Ops Console',
      description: '控制发布节奏、灰度范围与告警阈值。',
      extra: <span className="badge badge-soft badge-info">Beta</span>,
      children: '适合放置运维策略、SLA 约束和异常回滚说明。',
    },
    {
      key: 'billing',
      label: 'Billing Center',
      description: '当前模块仍在整理，暂不开放编辑。',
      extra: <span className="badge badge-soft">Read only</span>,
      disabled: true,
      children: '禁用项会保持信息展示，但不响应交互。',
    },
  ]}
/>`});p(()=>h(e,l,z))});let B=a(`rue:component:anchor`);d(l,B),f(()=>{let e=g(J,{title:`图标位置与触发区域`,summary:`支持把图标放在左侧，并限制只有图标本身可触发开合。`,tab:c,preview:()=>x(q,{arrow:!0,expandIconPlacement:`start`,items:[{key:`deployment`,label:`Deployment Window`,description:`只有左侧图标可点击，标题区更适合放长文本说明。`,collapsible:`icon`,children:`当标题里还有链接、状态或操作说明时，这个模式会更稳妥。`},{key:`security`,label:`Security Review`,description:`保持默认 header 触发，图标只是视觉反馈。`,children:`适合和 icon-only 模式混合使用。`}]}),code:`<Collapse
  arrow
  expandIconPlacement="start"
  items={[
    {
      key: 'deployment',
      label: 'Deployment Window',
      description: '只有左侧图标可点击，标题区更适合放长文本说明。',
      collapsible: 'icon',
      children: '当标题里还有链接、状态或操作说明时，这个模式会更稳妥。',
    },
    {
      key: 'security',
      label: 'Security Review',
      description: '保持默认 header 触发，图标只是视觉反馈。',
      children: '适合和 icon-only 模式混合使用。',
    },
  ]}
/>`});p(()=>h(e,l,B))});let V=a(`rue:component:anchor`);d(l,V),f(()=>{let e=g(J,{title:`Ghost 与无边框`,summary:`不想用分组边框时，可以关闭 bordered，再按需开启 ghost。`,tab:v,preview:()=>x(q,{arrow:!0,bordered:!1,ghost:!0,className:`space-y-3`,defaultActiveKey:[`design`],items:[{key:`design`,label:`Design Tokens`,children:`透明背景更适合嵌在卡片、侧栏或深色容器中。`},{key:`theme`,label:`Theme Sync`,children:`可继续叠加自定义类名，让容器完全交给外层布局控制。`}]}),code:`<Collapse
  arrow
  bordered={false}
  ghost
  className="space-y-3"
  defaultActiveKey={['design']}
  items={[
    {
      key: 'design',
      label: 'Design Tokens',
      children: '透明背景更适合嵌在卡片、侧栏或深色容器中。',
    },
    {
      key: 'theme',
      label: 'Theme Sync',
      children: '可继续叠加自定义类名，让容器完全交给外层布局控制。',
    },
  ]}
/>`});p(()=>h(e,l,V))});let H=a(`rue:component:anchor`);d(l,H),f(()=>{let e=g(J,{title:`尺寸与受控多开`,summary:`size 会统一影响标题和内容尺寸；非 accordion 模式可同时展开多项。`,tab:y,preview:()=>b(`div`,{className:`space-y-4`,children:[b(`div`,{className:`flex flex-wrap gap-2`,children:[x(`button`,{className:`btn btn-sm`,onClick:()=>P.value=[`release`],children:`仅展开 Release`}),x(`button`,{className:`btn btn-sm`,onClick:()=>P.value=[`release`,`notes`],children:`展开两项`}),x(`button`,{className:`btn btn-sm btn-ghost`,onClick:()=>P.value=[],children:`全部收起`})]}),x(q,{plus:!0,size:`lg`,activeKey:P.value,onChange:e=>P.value=e??[],items:[{key:`release`,label:`Release Plan`,children:`大尺寸适合在信息层级较重的管理页或文档页中使用。`},{key:`notes`,label:`Release Notes`,children:`多开模式下可以把相邻的几块信息一起展开对照查看。`},{key:`rollback`,label:`Rollback`,children:`受控模式更方便和 URL、筛选器或外部按钮联动。`}]})]}),code:`const openKeys = ref<string[]>(['release'])

<Collapse
  plus
  size="lg"
  activeKey={openKeys.value}
  onChange={nextValue => (openKeys.value = (nextValue as string[]) ?? [])}
  items={[
    {
      key: 'release',
      label: 'Release Plan',
      children: '大尺寸适合在信息层级较重的管理页或文档页中使用。',
    },
    {
      key: 'notes',
      label: 'Release Notes',
      children: '多开模式下可以把相邻的几块信息一起展开对照查看。',
    },
    {
      key: 'rollback',
      label: 'Rollback',
      children: '受控模式更方便和 URL、筛选器或外部按钮联动。',
    },
  ]}
/>`});p(()=>h(e,l,H))});let U=a(`rue:component:anchor`);d(l,U),f(()=>{let e=g(J,{title:`Collapse with focus`,summary:`聚焦时展开、失焦时关闭，同时也支持重复点击标题切换开合。`,tab:S,preview:()=>b(q,{tabIndex:0,className:`bg-base-100 border border-base-300`,children:[x(q.Title,{className:`font-semibold`,children:`How do I create an account?`}),x(q.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0} className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});p(()=>h(e,l,U))});let W=a(`rue:component:anchor`);d(l,W),f(()=>{let e=g(J,{title:`Collapse with checkbox`,summary:`使用复选框控制展开与关闭，并支持重复点击标题切换。`,tab:w,preview:()=>b(q,{className:`bg-base-100 border border-base-300`,children:[x(`input`,{type:`checkbox`}),x(q.Title,{className:`font-semibold`,children:`How do I create an account?`}),x(q.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse className="bg-base-100 border border-base-300">
  <input type="checkbox" />
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});p(()=>h(e,l,W))});let G=a(`rue:component:anchor`);d(l,G),f(()=>{let e=g(J,{title:`Collapse using details and summary tag`,summary:`使用 details/summary 标签。`,tab:T,preview:()=>b(q,{tag:`details`,className:`bg-base-100 border border-base-300`,children:[x(q.Title,{as:`summary`,className:`font-semibold`,children:`How do I create an account?`}),x(q.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tag="details" className="bg-base-100 border border-base-300">
  <Collapse.Title as="summary" className="font-semibold">
    How do I create an account?
  </Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});p(()=>h(e,l,G))});let K=a(`rue:component:anchor`);d(l,K),f(()=>{let e=g(J,{title:`Without border and background color`,tab:E,preview:()=>b(q,{tabIndex:0,children:[x(q.Title,{className:`font-semibold`,children:`How do I create an account?`}),x(q.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0}>
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});p(()=>h(e,l,K))});let X=a(`rue:component:anchor`);d(l,X),f(()=>{let e=g(J,{title:`With arrow icon`,tab:D,preview:()=>b(q,{tabIndex:0,arrow:!0,className:`bg-base-100 border border-base-300`,children:[x(q.Title,{className:`font-semibold`,children:`How do I create an account?`}),x(q.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0} arrow className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});p(()=>h(e,l,X))});let Z=a(`rue:component:anchor`);d(l,Z),f(()=>{let e=g(J,{title:`With plus/minus icon`,tab:O,preview:()=>b(q,{tabIndex:0,plus:!0,className:`bg-base-100 border border-base-300`,children:[x(q.Title,{className:`font-semibold`,children:`How do I create an account?`}),x(q.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0} plus className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});p(()=>h(e,l,Z))});let Q=a(`rue:component:anchor`);d(l,Q),f(()=>{let e=g(J,{title:`Moving collapse icon to the start`,summary:`通过 utility 类移动图标位置，并保持标题区重复点击切换能力。`,tab:k,preview:()=>b(q,{tabIndex:0,arrow:!0,className:`bg-base-100 border border-base-300`,children:[x(q.Title,{className:`font-semibold after:start-5 after:end-auto pe-4 ps-12`,children:`How do I create an account?`}),x(q.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0} arrow className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold after:start-5 after:end-auto pe-4 ps-12">
    How do I create an account?
  </Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});p(()=>h(e,l,Q))});let $=a(`rue:component:anchor`);d(l,$),f(()=>{let e=g(J,{title:`Force open`,tab:A,preview:()=>b(q,{tabIndex:0,open:!0,className:`bg-base-100 border border-base-300`,children:[x(q.Title,{className:`font-semibold`,children:`I have collapse-open class`}),x(q.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0} open className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold">I have collapse-open class</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});p(()=>h(e,l,$))});let ne=a(`rue:component:anchor`);d(l,ne),f(()=>{let e=g(J,{title:`Force close`,tab:j,preview:()=>b(q,{tabIndex:0,close:!0,className:`bg-base-100 border border-base-300`,children:[x(q.Title,{className:`font-semibold`,children:`I have collapse-close class`}),x(q.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0} close className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold">I have collapse-close class</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});p(()=>h(e,l,ne))});let re=a(`rue:component:anchor`);d(l,re),f(()=>{let e=g(J,{title:`Custom colors for collapse that works with focus`,summary:`通过 focus 触发颜色变化。`,tab:M,preview:()=>b(q,{tabIndex:0,className:`bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content`,children:[x(q.Title,{className:`font-semibold`,children:`How do I create an account?`}),x(q.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse
  tabIndex={0}
  className="bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content"
>
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});p(()=>h(e,l,re))});let ie=a(`rue:component:anchor`);d(l,ie),f(()=>{let e=g(J,{title:`Custom colors for collapse that works with checkbox`,summary:`通过 peer/peer-checked 触发颜色变化，并支持重复点击标题切换。`,tab:N,preview:()=>b(q,{className:`bg-base-100 border border-base-300`,children:[x(`input`,{type:`checkbox`,className:`peer`}),x(q.Title,{className:`bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content font-semibold`,children:`How do I create an account?`}),x(q.Content,{className:`bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse className="bg-base-100 border border-base-300">
  <input type="checkbox" className="peer" />
  <Collapse.Title className="bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content font-semibold">
    How do I create an account?
  </Collapse.Title>
  <Collapse.Content className="bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});p(()=>h(e,l,ie))});let ae=u(`h2`,l);d(l,ae),d(ae,s(`API`));let oe=u(`h3`,l);d(l,oe),d(oe,s(`Collapse`));let se=a(`rue:component:anchor`);d(l,se),f(()=>{let e=g(Y,{rows:ee});p(()=>h(e,l,se))});let ce=u(`h3`,l);d(l,ce),d(ce,s(`CollapseItem`));let le=a(`rue:component:anchor`);return d(l,le),f(()=>{let e=g(Y,{rows:te});p(()=>h(e,l,le))}),e})}),l,_),l})};export{X as default};