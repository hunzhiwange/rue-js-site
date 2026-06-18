import{$ as e,Ht as t,J as n,Lt as r,Q as i,X as a,Xt as o,Z as s,at as c,gt as l,l as u,mt as d,q as f,qt as p,s as m,st as h,t as g}from"./vapor-runtime-iQZthBPQ.js";import{a as _,n as v}from"./vapor-helpers-vapor-BjKHCvOa.js";import{a as y,i as b}from"./persistentSidebarPlayground-BfF7yM0K.js";import{t as x}from"./Code-CZqShVUj.js";import{t as S}from"./tabs-BBuGEPV7.js";import{r as C}from"./SidebarPlaygroundDesign-BcHYLGe4.js";var w=0,T=(e,t)=>e?t?`${e} ${t}`:e:t??``,E=(e,t)=>{let n=t?.getRootNode?.(),r=n&&typeof n.querySelectorAll==`function`?n:typeof document<`u`?document:null;return r?Array.from(r.querySelectorAll(`[data-rue-collapse-group]`)).filter(t=>t.dataset.rueCollapseGroup===e):[]},D=e=>Array.from(e.children).find(e=>e instanceof HTMLElement&&e.classList.contains(`collapse-title`)),O=(e,t)=>t instanceof Node?!!D(e)?.contains(t):!1,k=e=>Array.from(e.children).find(e=>e instanceof HTMLInputElement&&(e.type===`checkbox`||e.type===`radio`)),A=(e,t)=>{if(!(e instanceof HTMLElement))return;e.classList.remove(`collapse-open`,`collapse-close`),e.classList.add(t?`collapse-open`:`collapse-close`);let n=D(e);n&&n.setAttribute(`aria-expanded`,t?`true`:`false`);let r=e.querySelector(`[data-rue-collapse-arrow-icon]`);r&&r.classList.toggle(`rotate-90`,t);let i=e.querySelector(`[data-rue-collapse-plus-vertical]`);i&&(i.classList.remove(`opacity-0`,`opacity-100`),i.classList.add(t?`opacity-0`:`opacity-100`));let a=e.querySelector(`[data-rue-collapse-icon-trigger]`);a&&a.setAttribute(`aria-label`,t?`收起`:`展开`)},j=(e,t)=>{e.classList.remove(`collapse-open`,`collapse-close`),e.classList.add(t?`collapse-open`:`collapse-close`);let n=D(e);n&&n.setAttribute(`aria-expanded`,t?`true`:`false`)},M=e=>{let t=[];return e.forEach(e=>{t.some(t=>t===e)||t.push(e)}),t},N=e=>{switch(e){case`small`:return`sm`;case`middle`:return`md`;case`large`:return`lg`;default:return e}},P=(e,t,n)=>{if(e)return e;if(n)return`plus`;if(t)return`arrow`},F=e=>Array.isArray(e)?e:e==null?[]:[e],I=(e,t)=>{let n=M(F(e));return t?n.slice(0,1):n},L=e=>{switch(N(e)){case`sm`:return`min-h-0 py-3 text-sm`;case`lg`:return`min-h-0 py-5 text-lg`;default:return``}},R=e=>{switch(N(e)){case`sm`:return`pt-0 pb-3 text-sm`;case`lg`:return`pt-0 pb-5 text-base`;default:return``}},z=(e,t,n)=>I(t===void 0?e.filter(e=>e.open).map(e=>e.key):t,n),B=(e,t,n,r)=>r?n?[t]:[]:n?M([...e,t]):e.filter(e=>e!==t),V=(e,t,n)=>{let r=e?`overflow-hidden rounded-box border border-base-300 bg-base-100 divide-y divide-base-300`:`space-y-3`;return t&&(r+=` bg-transparent`),T(r,n)},H=(e,t)=>e?``:t?`bg-transparent`:`rounded-box border border-base-300 bg-base-100`,U=e=>u(t=>{let r=i(`span`,t);c(r,`data-rue-collapse-arrow-icon`,`true`),c(r,`aria-hidden`,`true`),o(()=>{h(r,`inline-flex size-5 items-center justify-center transition-transform duration-200 ${e.open?`rotate-90`:``}`.trim())});let a=i(`svg`,r);n(r,a),c(a,`viewBox`,`0 0 20 20`),c(a,`fill`,`none`),c(a,`stroke`,`currentColor`),c(a,`strokeWidth`,`1.8`),h(a,`size-4`);let s=i(`path`,a);return n(a,s),c(s,`strokeLinecap`,`round`),c(s,`strokeLinejoin`,`round`),c(s,`d`,`m7 4 6 6-6 6`),r}),W=e=>u(t=>{let r=i(`span`,t);c(r,`aria-hidden`,`true`),h(r,`relative inline-flex size-5 items-center justify-center`);let a=i(`span`,r);n(r,a),h(a,`absolute h-0.5 w-3 rounded-full bg-current`);let s=i(`span`,r);return n(r,s),c(s,`data-rue-collapse-plus-vertical`,`true`),o(()=>{h(s,`absolute h-3 w-0.5 rounded-full bg-current transition-opacity duration-200 ${e.open?`opacity-0`:`opacity-100`}`.trim())}),r}),G=(e,t)=>b(e===`plus`?W:U,{open:t}),K=(e,r,c,l,d)=>r==null&&c==null?e:u(p=>{let g=i(`div`,p);h(g,`flex w-full items-start justify-between gap-3`);let _=i(`div`,g);n(g,_),h(_,`min-w-0 flex-1`);let v=i(`div`,_);n(_,v);let y=a(`rue:slot:anchor`);n(v,y),o(()=>{let n=e;t(()=>m(n,v,y))});let b=a(`rue:slot:anchor`);n(_,b),o(()=>{let e=r==null?``:u(()=>{let e=s(),c=i(`div`,e);n(e,c),o(()=>{h(c,T(`mt-1 text-xs opacity-70`,l))});let u=a(`rue:slot:anchor`);return n(c,u),o(()=>{let e=r;t(()=>m(e,c,u))}),e});t(()=>m(e,_,b))});let x=a(`rue:slot:anchor`);return n(g,x),o(()=>{let e=c==null?``:u(()=>{let e=s(),r=i(`div`,e);n(e,r),o(()=>{h(r,T(`shrink-0 text-xs opacity-70`,d))}),f(r,`click`,e=>e.stopPropagation()),f(r,`keydown`,e=>e.stopPropagation());let l=a(`rue:slot:anchor`);return n(r,l),o(()=>{let e=c;t(()=>m(e,r,l))}),e});t(()=>m(e,g,x))}),g}),q=Object.assign(e=>{let{normalizedItems:g,hasItems:y,resolvedBordered:b,resolvedIcon:x,hasManagedIcon:S,generatedGroupName:C,uncontrolledOpenKeys:D,getCurrentOpenKeys:M,currentOpenKeys:N}=_(`useSetup:0:0`,()=>p(()=>{let t=e.items?.map((e,t)=>({...e,key:e.key??t,index:t,label:e.label??e.title,content:e.children??e.content}))??[],n=t.length>0,i=_(`computed:1:0`,()=>l(()=>e.bordered??n)),a=_(`computed:1:1`,()=>l(()=>P(e.icon,e.arrow,e.plus))),o=a,s=_(`computed:1:2`,()=>l(()=>e.showArrow===!1?!1:!!o.get())),c=_(`ref:1:3`,()=>r(`rue-collapse-${w++}`)),u=_(`ref:1:4`,()=>r(z(t,e.defaultActiveKey,e.accordion))),d=()=>e.activeKey===void 0?u.value:I(e.activeKey,e.accordion);return{normalizedItems:t,hasItems:n,resolvedBordered:i,resolvedIcon:a,hasManagedIcon:s,generatedGroupName:c,uncontrolledOpenKeys:u,getCurrentOpenKeys:d,currentOpenKeys:_(`computed:1:5`,()=>l(()=>d()))}}));if(y){let r=C.value,l=(e,t)=>{E(r,t).forEach(t=>{let n=g[Number(t.dataset.rueCollapseIndex)];n&&A(t,e.some(e=>e===n.key))})},p=(t,n,r)=>{let i=B(M(),t.key,n,e.accordion),a=i.some(e=>e===t.key);e.activeKey===void 0&&(D.value=i,l(i,r)),e.onChange&&e.onChange(e.accordion?i[0]??null:i,{key:t.key,index:t.index,open:a,item:t})};return u(l=>{let _=i(`div`,l);o(()=>{h(_,V(b.get(),e.ghost,e.className))});let y=a(`rue:list:start`),C=a(`rue:list:end`);n(_,y),n(_,C);let w=new Map;return o(()=>{w=v({items:g||[],getKey:(e,t)=>e.key,elements:w,parent:y.parentNode,before:C,singleRoot:!0,trackIndex:!1,start:y,renderItem:(l,g,_,v,y)=>{m(u(()=>{let g=s(),_=i(`div`,g);n(g,_),o(()=>{h(_,T(T(T(`collapse`,N.get().some(e=>e===l.key)?`collapse-open`:`collapse-close`),H(b.get(),e.ghost)),l.className))}),o(()=>{c(_,`key`,String(l.key))}),o(()=>{c(_,`data-rue-collapse-group`,String(r))}),o(()=>{c(_,`data-rue-collapse-index`,String(String(l.index)))});let v=i(`div`,_);n(_,v),o(()=>{h(v,T(T(T(`collapse-title`,L(e.size)),T(e.titleClassName,l.titleClassName)),(e.disabled||l.disabled?`disabled`:l.collapsible??e.collapsible??`header`)===`header`?`cursor-pointer select-none`:``))}),o(()=>{c(v,`aria-expanded`,String(N.get().some(e=>e===l.key)?`true`:`false`))}),o(()=>{d(v,(e.disabled||l.disabled?`disabled`:l.collapsible??e.collapsible??`header`)===`header`?{role:`button`,tabIndex:0,onClick:t=>(t=>{(e.disabled||l.disabled?`disabled`:l.collapsible??e.collapsible??`header`)!==`disabled`&&p(l,!M().some(e=>e===l.key),t)})(t.currentTarget),onKeyDown:t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),(t=>{(e.disabled||l.disabled?`disabled`:l.collapsible??e.collapsible??`header`)!==`disabled`&&p(l,!M().some(e=>e===l.key),t)})(t.currentTarget))}}:{})});let y=i(`div`,v);n(v,y),h(y,`flex w-full items-start gap-3`);let C=a(`rue:slot:anchor`);n(y,C),o(()=>{let r=(l.showArrow??S.get())&&(l.icon??x.get())&&(e.expandIconPlacement===void 0?`end`:e.expandIconPlacement)===`start`?(e.disabled||l.disabled?`disabled`:l.collapsible??e.collapsible??`header`)===`icon`?u(()=>{let r=s(),u=i(`button`,r);n(r,u),c(u,`data-rue-collapse-icon-trigger`,`true`),c(u,`type`,`button`),o(()=>{h(u,T(`inline-flex size-7 shrink-0 self-start items-center justify-center rounded-full border border-transparent transition-colors hover:bg-base-200/70`,l.description!=null||l.extra!=null?`pt-1`:`mt-0.5`))}),o(()=>{c(u,`aria-label`,String(N.get().some(e=>e===l.key)?`收起`:`展开`))}),f(u,`click`,t=>{t.stopPropagation(),(t=>{(e.disabled||l.disabled?`disabled`:l.collapsible??e.collapsible??`header`)!==`disabled`&&p(l,!M().some(e=>e===l.key),t)})(t.currentTarget)});let d=a(`rue:slot:anchor`);return n(u,d),o(()=>{let e=G(l.icon??x.get(),N.get().some(e=>e===l.key));t(()=>m(e,u,d))}),r}):u(()=>{let e=s(),r=i(`span`,e);n(e,r),o(()=>{h(r,T(`inline-flex size-7 shrink-0 self-start items-center justify-center`,l.description!=null||l.extra!=null?`pt-1`:`mt-0.5`))});let c=a(`rue:slot:anchor`);return n(r,c),o(()=>{let e=G(l.icon??x.get(),N.get().some(e=>e===l.key));t(()=>m(e,r,c))}),e}):``;t(()=>m(r,y,C))});let w=i(`div`,y);n(y,w),h(w,`min-w-0 flex-1`);let E=a(`rue:slot:anchor`);n(w,E),o(()=>{let e=K(l.label,l.description,l.extra,l.descriptionClassName,l.extraClassName);t(()=>m(e,w,E))});let D=a(`rue:slot:anchor`);n(y,D),o(()=>{let r=(l.showArrow??S.get())&&(l.icon??x.get())&&(e.expandIconPlacement===void 0?`end`:e.expandIconPlacement)===`end`?(e.disabled||l.disabled?`disabled`:l.collapsible??e.collapsible??`header`)===`icon`?u(()=>{let r=s(),u=i(`button`,r);n(r,u),c(u,`data-rue-collapse-icon-trigger`,`true`),c(u,`type`,`button`),o(()=>{h(u,T(`inline-flex size-7 shrink-0 self-start items-center justify-center rounded-full border border-transparent transition-colors hover:bg-base-200/70`,l.description!=null||l.extra!=null?`pt-1`:`mt-0.5`))}),o(()=>{c(u,`aria-label`,String(N.get().some(e=>e===l.key)?`收起`:`展开`))}),f(u,`click`,t=>{t.stopPropagation(),(t=>{(e.disabled||l.disabled?`disabled`:l.collapsible??e.collapsible??`header`)!==`disabled`&&p(l,!M().some(e=>e===l.key),t)})(t.currentTarget)});let d=a(`rue:slot:anchor`);return n(u,d),o(()=>{let e=G(l.icon??x.get(),N.get().some(e=>e===l.key));t(()=>m(e,u,d))}),r}):u(()=>{let e=s(),r=i(`span`,e);n(e,r),o(()=>{h(r,T(`inline-flex size-7 shrink-0 self-start items-center justify-center`,l.description!=null||l.extra!=null?`pt-1`:`mt-0.5`))});let c=a(`rue:slot:anchor`);return n(r,c),o(()=>{let e=G(l.icon??x.get(),N.get().some(e=>e===l.key));t(()=>m(e,r,c))}),e}):``;t(()=>m(r,y,D))});let O=i(`div`,_);n(_,O),o(()=>{h(O,T(T(`collapse-content`,R(e.size)),T(e.contentClassName,l.contentClassName)))});let k=a(`rue:slot:anchor`);return n(O,k),o(()=>{let e=l.content;t(()=>m(e,O,k))}),g}),g,_)}})}),_})}let F=`collapse`;e.showArrow!==!1&&(e.arrow||x.get()===`arrow`)&&(F+=` collapse-arrow`),e.showArrow!==!1&&(e.plus||x.get()===`plus`)&&(F+=` collapse-plus`),e.open&&(F+=` collapse-open`),e.close&&(F+=` collapse-close`),!e.open&&!e.close&&e.defaultOpen&&(F+=` collapse-open`),e.disabled&&(F+=` opacity-70`);let U=H(!!b.get(),e.ghost);if(U&&(F+=` ${U}`),e.className&&(F+=` ${e.className}`),(e.tag===void 0?`div`:e.tag)===`details`)return u(r=>{let s=i(`details`,r);o(()=>{h(s,F)}),o(()=>{c(s,`open`,String(e.open||!e.close&&e.defaultOpen?!0:void 0))});let l=a(`rue:children:anchor`);return n(s,l),o(()=>{let n=e.children;t(()=>m(n,s,l))}),s});let W=typeof e.tabIndex==`number`?e.tabIndex:void 0,q=!!e.open||!!e.close||!!e.defaultOpen;return u(r=>{let s=i(`div`,r);o(()=>{h(s,F)}),o(()=>{c(s,`tabindex`,String(W===void 0?void 0:String(W)))}),f(s,`mousedown`,e=>{let t=e.currentTarget;t.dataset.rueCollapsePointerDown=`true`}),f(s,`click`,e=>{let t=e.currentTarget,n=e.target,r=k(t),i=O(t,n),a=n instanceof HTMLInputElement&&n===r;if(!i&&!a){delete t.dataset.rueCollapsePointerDown;return}W!==void 0&&(t.tabIndex=W,t.setAttribute(`tabindex`,String(W)),t.focus()),q||(r?(a||(r.type===`checkbox`?r.checked=!r.checked:r.type===`radio`&&(r.checked=!0)),j(t,r.checked)):j(t,!t.classList.contains(`collapse-open`))),delete t.dataset.rueCollapsePointerDown}),f(s,`focus`,e=>{if(W===void 0||q)return;let t=e.currentTarget;t.dataset.rueCollapsePointerDown!==`true`&&j(t,!0)}),f(s,`blur`,e=>{delete e.currentTarget.dataset.rueCollapsePointerDown,!(W===void 0||q)&&j(e.currentTarget,!1)}),f(s,`keydown`,e=>{if(W===void 0||q||e.key!==`Enter`&&e.key!==` `||!O(e.currentTarget,e.target))return;e.preventDefault();let t=e.currentTarget;j(t,!t.classList.contains(`collapse-open`))}),f(s,`change`,e=>{if(q)return;let t=e.target;!t||t.type!==`checkbox`&&t.type!==`radio`||j(e.currentTarget,t.checked)});let l=a(`rue:children:anchor`);return n(s,l),o(()=>{let n=e.children;t(()=>m(n,s,l))}),s})},{Title:e=>{let{cls:r,body:s}=_(`useSetup:0:0:dup1`,()=>p(()=>({cls:_(`computed:1:6`,()=>l(()=>T(`collapse-title`,e.className))),body:_(`computed:1:7`,()=>l(()=>K(e.children,e.description,e.extra,e.descriptionClassName,e.extraClassName)))})));return(e.as===void 0?`div`:e.as)===`summary`?u(e=>{let c=i(`summary`,e);o(()=>{h(c,r.get())});let l=a(`rue:slot:anchor`);return n(c,l),o(()=>{let e=s.get();t(()=>m(e,c,l))}),c}):u(e=>{let c=i(`div`,e);o(()=>{h(c,r.get())});let l=a(`rue:slot:anchor`);return n(c,l),o(()=>{let e=s.get();t(()=>m(e,c,l))}),c})},Content:e=>u(r=>{let s=i(`div`,r);o(()=>{h(s,T(`collapse-content`,e.className))});let c=a(`rue:children:anchor`);return n(s,c),o(()=>{let n=e.children;t(()=>m(n,s,c))}),s})}),J=r=>u(c=>{let l=i(`div`,c);h(l,`component-preview not-prose text-base-content my-6 lg:my-12`);let d=i(`div`,l);n(l,d);let f=i(`h3`,d);n(d,f),h(f,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(f,e(`# `));let p=a(`rue:slot:anchor`);n(f,p),o(()=>{let e=r.title;t(()=>m(e,f,p))});let _=a(`rue:slot:anchor`);n(d,_),o(()=>{let e=r.summary?u(()=>{let e=s(),c=i(`p`,e);n(e,c),h(c,`m-0 text-sm opacity-70`);let l=a(`rue:slot:anchor`);return n(c,l),o(()=>{let e=r.summary;t(()=>m(e,c,l))}),e}):``;t(()=>m(e,d,_))});let v=a(`rue:component:anchor`);n(l,v),o(()=>{let e=g(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:r.tab.value,onChange:e=>r.tab.value=e,className:`mb-3 mt-4`});t(()=>m(e,l,v))});let y=a(`rue:slot:anchor`);return n(l,y),o(()=>{let e=r.tab.value===`preview`?r.preview():u(()=>{let e=s(),i=a(`rue:component:anchor`);return n(e,i),o(()=>{let n=g(x,{className:`mt-2`,lang:`tsx`,code:r.code});t(()=>m(n,e,i))}),e});t(()=>m(e,l,y))}),l}),Y=r=>u(l=>{let d=i(`div`,l);h(d,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=i(`table`,d);n(d,f),h(f,`table table-zebra`);let p=i(`thead`,f);n(f,p);let g=i(`tr`,p);n(p,g);let _=i(`th`,g);n(g,_),n(_,e(`属性`));let y=i(`th`,g);n(g,y),n(y,e(`说明`));let b=i(`th`,g);n(g,b),n(b,e(`类型`));let x=i(`th`,g);n(g,x),n(x,e(`默认值`));let S=i(`tbody`,f);n(f,S);let C=a(`rue:list:start`),w=a(`rue:list:end`);n(S,C),n(S,w);let T=new Map;return o(()=>{T=v({items:r.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,r,l,d,f)=>{m(u(()=>{let r=s(),l=i(`tr`,r);n(r,l),o(()=>{c(l,`key`,String(e.prop))});let u=i(`td`,l);n(l,u);let d=i(`code`,u);n(u,d);let f=a(`rue:slot:anchor`);n(d,f),o(()=>{let n=e.prop;t(()=>m(n,d,f))});let p=i(`td`,l);n(l,p);let h=a(`rue:slot:anchor`);n(p,h),o(()=>{let n=e.description;t(()=>m(n,p,h))});let g=i(`td`,l);n(l,g);let _=i(`code`,g);n(g,_);let v=a(`rue:slot:anchor`);n(_,v),o(()=>{let n=e.type;t(()=>m(n,_,v))});let y=i(`td`,l);n(l,y);let b=i(`code`,y);n(y,b);let x=a(`rue:slot:anchor`);return n(b,x),o(()=>{let n=e.defaultValue;t(()=>m(n,b,x))}),r}),r,l)}})}),d}),ee=[{prop:`items`,description:`数据驱动的折叠面板列表`,type:`CollapseItem[]`,defaultValue:`-`},{prop:`activeKey`,description:`受控展开项；accordion 模式下可传单值`,type:`string | number | Array<string | number>`,defaultValue:`-`},{prop:`defaultActiveKey`,description:`非受控默认展开项`,type:`string | number | Array<string | number>`,defaultValue:`-`},{prop:`accordion`,description:`是否只允许同时展开一项`,type:`boolean`,defaultValue:`false`},{prop:`bordered`,description:`是否使用分组边框容器`,type:`boolean`,defaultValue:`items 模式默认 true`},{prop:`ghost`,description:`是否使用透明背景`,type:`boolean`,defaultValue:`false`},{prop:`size`,description:`标题与内容尺寸`,type:`'sm' | 'md' | 'lg'`,defaultValue:`'md'`},{prop:`expandIconPlacement`,description:`展开图标位置`,type:`'start' | 'end'`,defaultValue:`'end'`},{prop:`onChange`,description:`items 模式切换时触发，返回下一个展开 key`,type:`(nextValue, context) => void`,defaultValue:`-`},{prop:`tag`,description:`兼容旧写法的根标签切换`,type:`'div' | 'details'`,defaultValue:`'div'`}],te=[{prop:`key`,description:`面板唯一标识`,type:`string | number`,defaultValue:`索引值`},{prop:`label`,description:`标题内容，兼容 title 别名`,type:`any`,defaultValue:`-`},{prop:`children`,description:`面板内容，兼容 content 别名`,type:`any`,defaultValue:`-`},{prop:`description`,description:`标题下方的说明文案`,type:`any`,defaultValue:`-`},{prop:`extra`,description:`标题右侧附加区域，不触发展开`,type:`any`,defaultValue:`-`},{prop:`showArrow`,description:`是否显示展开图标`,type:`boolean`,defaultValue:`继承父级`},{prop:`collapsible`,description:`触发区域控制`,type:`'header' | 'icon' | 'disabled'`,defaultValue:`'header'`},{prop:`disabled`,description:`禁用当前项交互`,type:`boolean`,defaultValue:`false`},{prop:`open`,description:`非受控初始展开`,type:`boolean`,defaultValue:`false`}],X=()=>{let{tabItemsBasic:c,tabAccordion:l,tabMeta:d,tabPlacement:f,tabGhost:v,tabControlled:x,tabFocus:S,tabCheckbox:w,tabDetails:T,tabNoBorder:E,tabArrow:D,tabPlus:O,tabIconStart:k,tabOpen:A,tabClose:j,tabCustomFocus:M,tabCustomCheckbox:N,controlledKeys:P,accordionKey:F}=_(`useSetup:0:0`,()=>p(()=>({tabItemsBasic:_(`ref:1:0`,()=>r(`preview`)),tabAccordion:_(`ref:1:1`,()=>r(`preview`)),tabMeta:_(`ref:1:2`,()=>r(`preview`)),tabPlacement:_(`ref:1:3`,()=>r(`preview`)),tabGhost:_(`ref:1:4`,()=>r(`preview`)),tabControlled:_(`ref:1:5`,()=>r(`preview`)),tabFocus:_(`ref:1:6`,()=>r(`preview`)),tabCheckbox:_(`ref:1:7`,()=>r(`preview`)),tabDetails:_(`ref:1:8`,()=>r(`preview`)),tabNoBorder:_(`ref:1:9`,()=>r(`preview`)),tabArrow:_(`ref:1:10`,()=>r(`preview`)),tabPlus:_(`ref:1:11`,()=>r(`preview`)),tabIconStart:_(`ref:1:12`,()=>r(`preview`)),tabOpen:_(`ref:1:13`,()=>r(`preview`)),tabClose:_(`ref:1:14`,()=>r(`preview`)),tabCustomFocus:_(`ref:1:15`,()=>r(`preview`)),tabCustomCheckbox:_(`ref:1:16`,()=>r(`preview`)),controlledKeys:_(`ref:1:17`,()=>r([`release`])),accordionKey:_(`ref:1:18`,()=>r(`guide`))})));return u(r=>{let p=s(),_=a(`rue:component:anchor`);return n(p,_),m(g(C,{children:u(()=>{let r=s(),u=i(`div`,r);n(r,u),h(u,`max-w-none prose prose-sm md:prose-base`);let p=i(`h1`,u);n(u,p),n(p,e(`Collapse 折叠面板`));let _=i(`p`,u);n(u,_),h(_,`mt-3 mb-3 text-sm`),n(_,e("保留 Rue 原本基于 daisyUI 的视觉语言，并在此基础上补齐 `items`、accordion、 `activeKey`、`extra`、`description`、尺寸与图标位置等增强能力。"));let C=i(`h2`,u);n(u,C),n(C,e(`增强 API`));let I=i(`p`,u);n(u,I),h(I,`text-sm opacity-80`),n(I,e("优先面向 `items` 数据驱动用法，组织方式贴近常见业务组件，但保留 Rue 视觉风格。"));let L=a(`rue:component:anchor`);n(u,L),o(()=>{let e=g(J,{title:`Items 基础用法`,summary:`直接通过 items 渲染多项折叠面板，并默认使用带边框的分组容器。`,tab:c,preview:()=>b(q,{arrow:!0,defaultActiveKey:[`overview`],items:[{key:`overview`,label:`Overview`,children:`汇总版本亮点、上线范围与回滚策略，适合用作页面最上方的信息概览。`},{key:`release`,label:`Release Checklist`,children:`确认灰度开关、日志埋点、告警阈值与发布窗口已经准备完毕。`},{key:`faq`,label:`FAQ`,children:`常见问题、风险提示和升级说明也可以继续放进同一个折叠组。`}]}),code:`<Collapse
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
/>`});t(()=>m(e,u,L))});let R=a(`rue:component:anchor`);n(u,R),o(()=>{let e=g(J,{title:`Accordion`,summary:`使用 accordion 改成一次只展开一项，并结合受控 key 管理当前面板。`,tab:l,preview:()=>y(`div`,{className:`space-y-4`,children:[y(`div`,{className:`flex flex-wrap gap-2`,children:[b(`button`,{className:`btn btn-sm`,onClick:()=>F.value=`guide`,children:`打开 Guide`}),b(`button`,{className:`btn btn-sm`,onClick:()=>F.value=`api`,children:`打开 API`}),b(`button`,{className:`btn btn-sm btn-ghost`,onClick:()=>F.value=null,children:`全部收起`})]}),b(q,{accordion:!0,plus:!0,activeKey:F.value,onChange:e=>F.value=e??null,items:[{key:`guide`,label:`Migration Guide`,children:`梳理 breaking changes、默认行为差异与升级建议。`},{key:`api`,label:`API Delta`,children:`列出新增属性、弃用写法与向后兼容策略。`},{key:`qa`,label:`QA Notes`,children:`补充测试范围、回归清单和已知限制。`}]})]}),code:`const activeKey = ref<string | null>('guide')

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
      children: '列出新增属性、弃用写法与向后兼容策略。',
    },
    {
      key: 'qa',
      label: 'QA Notes',
      children: '补充测试范围、回归清单和已知限制。',
    },
  ]}
/>`});t(()=>m(e,u,R))});let z=a(`rue:component:anchor`);n(u,z),o(()=>{let e=g(J,{title:`描述与额外操作`,summary:`每一项可带 description、extra 和独立禁用状态，extra 区域点击不会触发展开。`,tab:d,preview:()=>b(q,{arrow:!0,defaultActiveKey:[`ops`],items:[{key:`ops`,label:`Ops Console`,description:`控制发布节奏、灰度范围与告警阈值。`,extra:b(`span`,{className:`badge badge-soft badge-info`,children:`Beta`}),children:`适合放置运维策略、SLA 约束和异常回滚说明。`},{key:`billing`,label:`Billing Center`,description:`当前模块仍在迁移，暂不开放编辑。`,extra:b(`span`,{className:`badge badge-soft`,children:`Read only`}),disabled:!0,children:`禁用项会保留信息展示，但不响应交互。`}]}),code:`<Collapse
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
      description: '当前模块仍在迁移，暂不开放编辑。',
      extra: <span className="badge badge-soft">Read only</span>,
      disabled: true,
      children: '禁用项会保留信息展示，但不响应交互。',
    },
  ]}
/>`});t(()=>m(e,u,z))});let B=a(`rue:component:anchor`);n(u,B),o(()=>{let e=g(J,{title:`图标位置与触发区域`,summary:`支持把图标放在左侧，并限制只有图标本身可触发开合。`,tab:f,preview:()=>b(q,{arrow:!0,expandIconPlacement:`start`,items:[{key:`deployment`,label:`Deployment Window`,description:`只有左侧图标可点击，标题区更适合放长文本说明。`,collapsible:`icon`,children:`当标题里还有链接、状态或操作说明时，这个模式会更稳妥。`},{key:`security`,label:`Security Review`,description:`保持默认 header 触发，图标只是视觉反馈。`,children:`适合和 icon-only 模式混合使用。`}]}),code:`<Collapse
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
/>`});t(()=>m(e,u,B))});let V=a(`rue:component:anchor`);n(u,V),o(()=>{let e=g(J,{title:`Ghost 与无边框`,summary:`不想用分组边框时，可以关闭 bordered，再按需开启 ghost。`,tab:v,preview:()=>b(q,{arrow:!0,bordered:!1,ghost:!0,className:`space-y-3`,defaultActiveKey:[`design`],items:[{key:`design`,label:`Design Tokens`,children:`透明背景更适合嵌在卡片、侧栏或深色容器中。`},{key:`theme`,label:`Theme Sync`,children:`可继续叠加自定义类名，让容器完全交给外层布局控制。`}]}),code:`<Collapse
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
/>`});t(()=>m(e,u,V))});let H=a(`rue:component:anchor`);n(u,H),o(()=>{let e=g(J,{title:`尺寸与受控多开`,summary:`size 会统一影响标题和内容尺寸；非 accordion 模式可同时展开多项。`,tab:x,preview:()=>y(`div`,{className:`space-y-4`,children:[y(`div`,{className:`flex flex-wrap gap-2`,children:[b(`button`,{className:`btn btn-sm`,onClick:()=>P.value=[`release`],children:`仅展开 Release`}),b(`button`,{className:`btn btn-sm`,onClick:()=>P.value=[`release`,`notes`],children:`展开两项`}),b(`button`,{className:`btn btn-sm btn-ghost`,onClick:()=>P.value=[],children:`全部收起`})]}),b(q,{plus:!0,size:`lg`,activeKey:P.value,onChange:e=>P.value=e??[],items:[{key:`release`,label:`Release Plan`,children:`大尺寸适合在信息层级较重的管理页或文档页中使用。`},{key:`notes`,label:`Release Notes`,children:`多开模式下可以把相邻的几块信息一起展开对照查看。`},{key:`rollback`,label:`Rollback`,children:`受控模式更方便和 URL、筛选器或外部按钮联动。`}]})]}),code:`const openKeys = ref<string[]>(['release'])

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
/>`});t(()=>m(e,u,H))});let U=a(`rue:component:anchor`);n(u,U),o(()=>{let e=g(J,{title:`Collapse with focus`,summary:`聚焦时展开、失焦时关闭，同时也支持重复点击标题切换开合。`,tab:S,preview:()=>y(q,{tabIndex:0,className:`bg-base-100 border border-base-300`,children:[b(q.Title,{className:`font-semibold`,children:`How do I create an account?`}),b(q.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0} className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});t(()=>m(e,u,U))});let W=a(`rue:component:anchor`);n(u,W),o(()=>{let e=g(J,{title:`Collapse with checkbox`,summary:`使用复选框控制展开与关闭，并支持重复点击标题切换。`,tab:w,preview:()=>y(q,{className:`bg-base-100 border border-base-300`,children:[b(`input`,{type:`checkbox`}),b(q.Title,{className:`font-semibold`,children:`How do I create an account?`}),b(q.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse className="bg-base-100 border border-base-300">
  <input type="checkbox" />
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});t(()=>m(e,u,W))});let G=a(`rue:component:anchor`);n(u,G),o(()=>{let e=g(J,{title:`Collapse using details and summary tag`,summary:`使用 details/summary 标签。`,tab:T,preview:()=>y(q,{tag:`details`,className:`bg-base-100 border border-base-300`,children:[b(q.Title,{as:`summary`,className:`font-semibold`,children:`How do I create an account?`}),b(q.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tag="details" className="bg-base-100 border border-base-300">
  <Collapse.Title as="summary" className="font-semibold">
    How do I create an account?
  </Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});t(()=>m(e,u,G))});let K=a(`rue:component:anchor`);n(u,K),o(()=>{let e=g(J,{title:`Without border and background color`,tab:E,preview:()=>y(q,{tabIndex:0,children:[b(q.Title,{className:`font-semibold`,children:`How do I create an account?`}),b(q.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0}>
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});t(()=>m(e,u,K))});let X=a(`rue:component:anchor`);n(u,X),o(()=>{let e=g(J,{title:`With arrow icon`,tab:D,preview:()=>y(q,{tabIndex:0,arrow:!0,className:`bg-base-100 border border-base-300`,children:[b(q.Title,{className:`font-semibold`,children:`How do I create an account?`}),b(q.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0} arrow className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});t(()=>m(e,u,X))});let Z=a(`rue:component:anchor`);n(u,Z),o(()=>{let e=g(J,{title:`With plus/minus icon`,tab:O,preview:()=>y(q,{tabIndex:0,plus:!0,className:`bg-base-100 border border-base-300`,children:[b(q.Title,{className:`font-semibold`,children:`How do I create an account?`}),b(q.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0} plus className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});t(()=>m(e,u,Z))});let Q=a(`rue:component:anchor`);n(u,Q),o(()=>{let e=g(J,{title:`Moving collapse icon to the start`,summary:`通过 utility 类移动图标位置，并保留标题区重复点击切换能力。`,tab:k,preview:()=>y(q,{tabIndex:0,arrow:!0,className:`bg-base-100 border border-base-300`,children:[b(q.Title,{className:`font-semibold after:start-5 after:end-auto pe-4 ps-12`,children:`How do I create an account?`}),b(q.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0} arrow className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold after:start-5 after:end-auto pe-4 ps-12">
    How do I create an account?
  </Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});t(()=>m(e,u,Q))});let $=a(`rue:component:anchor`);n(u,$),o(()=>{let e=g(J,{title:`Force open`,tab:A,preview:()=>y(q,{tabIndex:0,open:!0,className:`bg-base-100 border border-base-300`,children:[b(q.Title,{className:`font-semibold`,children:`I have collapse-open class`}),b(q.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0} open className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold">I have collapse-open class</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});t(()=>m(e,u,$))});let ne=a(`rue:component:anchor`);n(u,ne),o(()=>{let e=g(J,{title:`Force close`,tab:j,preview:()=>y(q,{tabIndex:0,close:!0,className:`bg-base-100 border border-base-300`,children:[b(q.Title,{className:`font-semibold`,children:`I have collapse-close class`}),b(q.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0} close className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold">I have collapse-close class</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});t(()=>m(e,u,ne))});let re=a(`rue:component:anchor`);n(u,re),o(()=>{let e=g(J,{title:`Custom colors for collapse that works with focus`,summary:`通过 focus 触发颜色变化。`,tab:M,preview:()=>y(q,{tabIndex:0,className:`bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content`,children:[b(q.Title,{className:`font-semibold`,children:`How do I create an account?`}),b(q.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse
  tabIndex={0}
  className="bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content"
>
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});t(()=>m(e,u,re))});let ie=a(`rue:component:anchor`);n(u,ie),o(()=>{let e=g(J,{title:`Custom colors for collapse that works with checkbox`,summary:`通过 peer/peer-checked 触发颜色变化，并支持重复点击标题切换。`,tab:N,preview:()=>y(q,{className:`bg-base-100 border border-base-300`,children:[b(`input`,{type:`checkbox`,className:`peer`}),b(q.Title,{className:`bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content font-semibold`,children:`How do I create an account?`}),b(q.Content,{className:`bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse className="bg-base-100 border border-base-300">
  <input type="checkbox" className="peer" />
  <Collapse.Title className="bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content font-semibold">
    How do I create an account?
  </Collapse.Title>
  <Collapse.Content className="bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});t(()=>m(e,u,ie))});let ae=i(`h2`,u);n(u,ae),n(ae,e(`API`));let oe=i(`h3`,u);n(u,oe),n(oe,e(`Collapse`));let se=a(`rue:component:anchor`);n(u,se),o(()=>{let e=g(Y,{rows:ee});t(()=>m(e,u,se))});let ce=i(`h3`,u);n(u,ce),n(ce,e(`CollapseItem`));let le=a(`rue:component:anchor`);return n(u,le),o(()=>{let e=g(Y,{rows:te});t(()=>m(e,u,le))}),r})}),p,_),p})};export{X as default};