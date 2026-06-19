import{$ as e,$t as t,Bt as n,Gt as r,X as i,Xt as a,Z as o,_t as s,ct as c,et as l,l as u,nt as d,o as f,t as p,tt as m,ut as h,yt as g}from"./vapor-runtime-CKrmRMZX.js";import{a as _,n as v}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{a as y,i as b}from"./persistentSidebarPlayground-CKHFGglU.js";import{t as x}from"./Code-D5UqTwV6.js";import{t as S}from"./tabs-DRfs918f.js";import{r as C}from"./SidebarPlaygroundDesign-CWudvLqE.js";var w=0,T=(e,t)=>e?t?`${e} ${t}`:e:t??``,E=(e,t)=>{let n=t?.getRootNode?.(),r=n&&typeof n.querySelectorAll==`function`?n:typeof document<`u`?document:null;return r?Array.from(r.querySelectorAll(`[data-rue-collapse-group]`)).filter(t=>t.dataset.rueCollapseGroup===e):[]},D=e=>Array.from(e.children).find(e=>e instanceof HTMLElement&&e.classList.contains(`collapse-title`)),O=(e,t)=>t instanceof Node?!!D(e)?.contains(t):!1,k=e=>Array.from(e.children).find(e=>e instanceof HTMLInputElement&&(e.type===`checkbox`||e.type===`radio`)),A=(e,t)=>{if(!(e instanceof HTMLElement))return;e.classList.remove(`collapse-open`,`collapse-close`),e.classList.add(t?`collapse-open`:`collapse-close`);let n=D(e);n&&n.setAttribute(`aria-expanded`,t?`true`:`false`);let r=e.querySelector(`[data-rue-collapse-arrow-icon]`);r&&r.classList.toggle(`rotate-90`,t);let i=e.querySelector(`[data-rue-collapse-plus-vertical]`);i&&(i.classList.remove(`opacity-0`,`opacity-100`),i.classList.add(t?`opacity-0`:`opacity-100`));let a=e.querySelector(`[data-rue-collapse-icon-trigger]`);a&&a.setAttribute(`aria-label`,t?`收起`:`展开`)},j=(e,t)=>{e.classList.remove(`collapse-open`,`collapse-close`),e.classList.add(t?`collapse-open`:`collapse-close`);let n=D(e);n&&n.setAttribute(`aria-expanded`,t?`true`:`false`)},M=e=>{let t=[];return e.forEach(e=>{t.some(t=>t===e)||t.push(e)}),t},N=e=>{switch(e){case`small`:return`sm`;case`middle`:return`md`;case`large`:return`lg`;default:return e}},P=(e,t,n)=>{if(e)return e;if(n)return`plus`;if(t)return`arrow`},F=e=>Array.isArray(e)?e:e==null?[]:[e],I=(e,t)=>{let n=M(F(e));return t?n.slice(0,1):n},L=e=>{switch(N(e)){case`sm`:return`min-h-0 py-3 text-sm`;case`lg`:return`min-h-0 py-5 text-lg`;default:return``}},R=e=>{switch(N(e)){case`sm`:return`pt-0 pb-3 text-sm`;case`lg`:return`pt-0 pb-5 text-base`;default:return``}},z=(e,t,n)=>I(t===void 0?e.filter(e=>e.open).map(e=>e.key):t,n),B=(e,t,n,r)=>r?n?[t]:[]:n?M([...e,t]):e.filter(e=>e!==t),V=(e,t,n)=>{let r=e?`overflow-hidden rounded-box border border-base-300 bg-base-100 divide-y divide-base-300`:`space-y-3`;return t&&(r+=` bg-transparent`),T(r,n)},H=(e,t)=>e?``:t?`bg-transparent`:`rounded-box border border-base-300 bg-base-100`,U=e=>u(n=>{let r=m(`span`,n);c(r,`data-rue-collapse-arrow-icon`,`true`),c(r,`aria-hidden`,`true`),t(()=>{h(r,`inline-flex size-5 items-center justify-center transition-transform duration-200 ${e.open?`rotate-90`:``}`.trim())});let i=m(`svg`,r);o(r,i),c(i,`viewBox`,`0 0 20 20`),c(i,`fill`,`none`),c(i,`stroke`,`currentColor`),c(i,`strokeWidth`,`1.8`),h(i,`size-4`);let a=m(`path`,i);return o(i,a),c(a,`strokeLinecap`,`round`),c(a,`strokeLinejoin`,`round`),c(a,`d`,`m7 4 6 6-6 6`),r}),W=e=>u(n=>{let r=m(`span`,n);c(r,`aria-hidden`,`true`),h(r,`relative inline-flex size-5 items-center justify-center`);let i=m(`span`,r);o(r,i),h(i,`absolute h-0.5 w-3 rounded-full bg-current`);let a=m(`span`,r);return o(r,a),c(a,`data-rue-collapse-plus-vertical`,`true`),t(()=>{h(a,`absolute h-3 w-0.5 rounded-full bg-current transition-opacity duration-200 ${e.open?`opacity-0`:`opacity-100`}`.trim())}),r}),G=(e,t)=>b(e===`plus`?W:U,{open:t}),K=(n,a,s,c,d)=>a==null&&s==null?n:u(p=>{let g=m(`div`,p);h(g,`flex w-full items-start justify-between gap-3`);let _=m(`div`,g);o(g,_),h(_,`min-w-0 flex-1`);let v=m(`div`,_);o(_,v);let y=e(`rue:slot:anchor`);o(v,y),t(()=>{let e=n;r(()=>f(e,v,y))});let b=e(`rue:slot:anchor`);o(_,b),t(()=>{let n=a==null?``:u(()=>{let n=l(),i=m(`div`,n);o(n,i),t(()=>{h(i,T(`mt-1 text-xs opacity-70`,c))});let s=e(`rue:slot:anchor`);return o(i,s),t(()=>{let e=a;r(()=>f(e,i,s))}),n});r(()=>f(n,_,b))});let x=e(`rue:slot:anchor`);return o(g,x),t(()=>{let n=s==null?``:u(()=>{let n=l(),a=m(`div`,n);o(n,a),t(()=>{h(a,T(`shrink-0 text-xs opacity-70`,d))}),i(a,`click`,e=>e.stopPropagation()),i(a,`keydown`,e=>e.stopPropagation());let c=e(`rue:slot:anchor`);return o(a,c),t(()=>{let e=s;r(()=>f(e,a,c))}),n});r(()=>f(n,g,x))}),g}),q=Object.assign(d=>{let{normalizedItems:p,hasItems:y,resolvedBordered:b,resolvedIcon:x,hasManagedIcon:S,generatedGroupName:C,uncontrolledOpenKeys:D,getCurrentOpenKeys:M,currentOpenKeys:N}=_(`useSetup:0:0`,()=>a(()=>{let e=d.items?.map((e,t)=>({...e,key:e.key??t,index:t,label:e.label??e.title,content:e.children??e.content}))??[],t=e.length>0,r=_(`computed:1:0`,()=>g(()=>d.bordered??t)),i=_(`computed:1:1`,()=>g(()=>P(d.icon,d.arrow,d.plus))),a=i,o=_(`computed:1:2`,()=>g(()=>d.showArrow===!1?!1:!!a.get())),s=_(`ref:1:3`,()=>n(`rue-collapse-${w++}`)),c=_(`ref:1:4`,()=>n(z(e,d.defaultActiveKey,d.accordion))),l=()=>d.activeKey===void 0?c.value:I(d.activeKey,d.accordion);return{normalizedItems:e,hasItems:t,resolvedBordered:r,resolvedIcon:i,hasManagedIcon:o,generatedGroupName:s,uncontrolledOpenKeys:c,getCurrentOpenKeys:l,currentOpenKeys:_(`computed:1:5`,()=>g(()=>l()))}}));if(y){let n=C.value,a=(e,t)=>{E(n,t).forEach(t=>{let n=p[Number(t.dataset.rueCollapseIndex)];n&&A(t,e.some(e=>e===n.key))})},g=(e,t,n)=>{let r=B(M(),e.key,t,d.accordion),i=r.some(t=>t===e.key);d.activeKey===void 0&&(D.value=r,a(r,n)),d.onChange&&d.onChange(d.accordion?r[0]??null:r,{key:e.key,index:e.index,open:i,item:e})};return u(a=>{let _=m(`div`,a);t(()=>{h(_,V(b.get(),d.ghost,d.className))});let y=e(`rue:list:start`),C=e(`rue:list:end`);o(_,y),o(_,C);let w=new Map;return t(()=>{w=v({items:p||[],getKey:(e,t)=>e.key,elements:w,parent:y.parentNode,before:C,singleRoot:!0,trackIndex:!1,start:y,renderItem:(a,p,_,v,y)=>{f(u(()=>{let p=l(),_=m(`div`,p);o(p,_),t(()=>{h(_,T(T(T(`collapse`,N.get().some(e=>e===a.key)?`collapse-open`:`collapse-close`),H(b.get(),d.ghost)),a.className))}),t(()=>{c(_,`key`,String(a.key))}),t(()=>{c(_,`data-rue-collapse-group`,String(n))}),t(()=>{c(_,`data-rue-collapse-index`,String(String(a.index)))});let v=m(`div`,_);o(_,v),t(()=>{h(v,T(T(T(`collapse-title`,L(d.size)),T(d.titleClassName,a.titleClassName)),(d.disabled||a.disabled?`disabled`:a.collapsible??d.collapsible??`header`)===`header`?`cursor-pointer select-none`:``))}),t(()=>{c(v,`aria-expanded`,String(N.get().some(e=>e===a.key)?`true`:`false`))}),t(()=>{s(v,(d.disabled||a.disabled?`disabled`:a.collapsible??d.collapsible??`header`)===`header`?{role:`button`,tabIndex:0,onClick:e=>(e=>{(d.disabled||a.disabled?`disabled`:a.collapsible??d.collapsible??`header`)!==`disabled`&&g(a,!M().some(e=>e===a.key),e)})(e.currentTarget),onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),(e=>{(d.disabled||a.disabled?`disabled`:a.collapsible??d.collapsible??`header`)!==`disabled`&&g(a,!M().some(e=>e===a.key),e)})(e.currentTarget))}}:{})});let y=m(`div`,v);o(v,y),h(y,`flex w-full items-start gap-3`);let C=e(`rue:slot:anchor`);o(y,C),t(()=>{let n=(a.showArrow??S.get())&&(a.icon??x.get())&&(d.expandIconPlacement===void 0?`end`:d.expandIconPlacement)===`start`?(d.disabled||a.disabled?`disabled`:a.collapsible??d.collapsible??`header`)===`icon`?u(()=>{let n=l(),s=m(`button`,n);o(n,s),c(s,`data-rue-collapse-icon-trigger`,`true`),c(s,`type`,`button`),t(()=>{h(s,T(`inline-flex size-7 shrink-0 self-start items-center justify-center rounded-full border border-transparent transition-colors hover:bg-base-200/70`,a.description!=null||a.extra!=null?`pt-1`:`mt-0.5`))}),t(()=>{c(s,`aria-label`,String(N.get().some(e=>e===a.key)?`收起`:`展开`))}),i(s,`click`,e=>{e.stopPropagation(),(e=>{(d.disabled||a.disabled?`disabled`:a.collapsible??d.collapsible??`header`)!==`disabled`&&g(a,!M().some(e=>e===a.key),e)})(e.currentTarget)});let u=e(`rue:slot:anchor`);return o(s,u),t(()=>{let e=G(a.icon??x.get(),N.get().some(e=>e===a.key));r(()=>f(e,s,u))}),n}):u(()=>{let n=l(),i=m(`span`,n);o(n,i),t(()=>{h(i,T(`inline-flex size-7 shrink-0 self-start items-center justify-center`,a.description!=null||a.extra!=null?`pt-1`:`mt-0.5`))});let s=e(`rue:slot:anchor`);return o(i,s),t(()=>{let e=G(a.icon??x.get(),N.get().some(e=>e===a.key));r(()=>f(e,i,s))}),n}):``;r(()=>f(n,y,C))});let w=m(`div`,y);o(y,w),h(w,`min-w-0 flex-1`);let E=e(`rue:slot:anchor`);o(w,E),t(()=>{let e=K(a.label,a.description,a.extra,a.descriptionClassName,a.extraClassName);r(()=>f(e,w,E))});let D=e(`rue:slot:anchor`);o(y,D),t(()=>{let n=(a.showArrow??S.get())&&(a.icon??x.get())&&(d.expandIconPlacement===void 0?`end`:d.expandIconPlacement)===`end`?(d.disabled||a.disabled?`disabled`:a.collapsible??d.collapsible??`header`)===`icon`?u(()=>{let n=l(),s=m(`button`,n);o(n,s),c(s,`data-rue-collapse-icon-trigger`,`true`),c(s,`type`,`button`),t(()=>{h(s,T(`inline-flex size-7 shrink-0 self-start items-center justify-center rounded-full border border-transparent transition-colors hover:bg-base-200/70`,a.description!=null||a.extra!=null?`pt-1`:`mt-0.5`))}),t(()=>{c(s,`aria-label`,String(N.get().some(e=>e===a.key)?`收起`:`展开`))}),i(s,`click`,e=>{e.stopPropagation(),(e=>{(d.disabled||a.disabled?`disabled`:a.collapsible??d.collapsible??`header`)!==`disabled`&&g(a,!M().some(e=>e===a.key),e)})(e.currentTarget)});let u=e(`rue:slot:anchor`);return o(s,u),t(()=>{let e=G(a.icon??x.get(),N.get().some(e=>e===a.key));r(()=>f(e,s,u))}),n}):u(()=>{let n=l(),i=m(`span`,n);o(n,i),t(()=>{h(i,T(`inline-flex size-7 shrink-0 self-start items-center justify-center`,a.description!=null||a.extra!=null?`pt-1`:`mt-0.5`))});let s=e(`rue:slot:anchor`);return o(i,s),t(()=>{let e=G(a.icon??x.get(),N.get().some(e=>e===a.key));r(()=>f(e,i,s))}),n}):``;r(()=>f(n,y,D))});let O=m(`div`,_);o(_,O),t(()=>{h(O,T(T(`collapse-content`,R(d.size)),T(d.contentClassName,a.contentClassName)))});let k=e(`rue:slot:anchor`);return o(O,k),t(()=>{let e=a.content;r(()=>f(e,O,k))}),p}),p,_)}})}),_})}let F=`collapse`;d.showArrow!==!1&&(d.arrow||x.get()===`arrow`)&&(F+=` collapse-arrow`),d.showArrow!==!1&&(d.plus||x.get()===`plus`)&&(F+=` collapse-plus`),d.open&&(F+=` collapse-open`),d.close&&(F+=` collapse-close`),!d.open&&!d.close&&d.defaultOpen&&(F+=` collapse-open`),d.disabled&&(F+=` opacity-70`);let U=H(!!b.get(),d.ghost);if(U&&(F+=` ${U}`),d.className&&(F+=` ${d.className}`),(d.tag===void 0?`div`:d.tag)===`details`)return u(n=>{let i=m(`details`,n);t(()=>{h(i,F)}),t(()=>{c(i,`open`,String(d.open||!d.close&&d.defaultOpen?!0:void 0))});let a=e(`rue:children:anchor`);return o(i,a),t(()=>{let e=d.children;r(()=>f(e,i,a))}),i});let W=typeof d.tabIndex==`number`?d.tabIndex:void 0,q=!!d.open||!!d.close||!!d.defaultOpen;return u(n=>{let a=m(`div`,n);t(()=>{h(a,F)}),t(()=>{c(a,`tabindex`,String(W===void 0?void 0:String(W)))}),i(a,`mousedown`,e=>{let t=e.currentTarget;t.dataset.rueCollapsePointerDown=`true`}),i(a,`click`,e=>{let t=e.currentTarget,n=e.target,r=k(t),i=O(t,n),a=n instanceof HTMLInputElement&&n===r;if(!i&&!a){delete t.dataset.rueCollapsePointerDown;return}W!==void 0&&(t.tabIndex=W,t.setAttribute(`tabindex`,String(W)),t.focus()),q||(r?(a||(r.type===`checkbox`?r.checked=!r.checked:r.type===`radio`&&(r.checked=!0)),j(t,r.checked)):j(t,!t.classList.contains(`collapse-open`))),delete t.dataset.rueCollapsePointerDown}),i(a,`focus`,e=>{if(W===void 0||q)return;let t=e.currentTarget;t.dataset.rueCollapsePointerDown!==`true`&&j(t,!0)}),i(a,`blur`,e=>{delete e.currentTarget.dataset.rueCollapsePointerDown,!(W===void 0||q)&&j(e.currentTarget,!1)}),i(a,`keydown`,e=>{if(W===void 0||q||e.key!==`Enter`&&e.key!==` `||!O(e.currentTarget,e.target))return;e.preventDefault();let t=e.currentTarget;j(t,!t.classList.contains(`collapse-open`))}),i(a,`change`,e=>{if(q)return;let t=e.target;!t||t.type!==`checkbox`&&t.type!==`radio`||j(e.currentTarget,t.checked)});let s=e(`rue:children:anchor`);return o(a,s),t(()=>{let e=d.children;r(()=>f(e,a,s))}),a})},{Title:n=>{let{cls:i,body:s}=_(`useSetup:0:0:dup1`,()=>a(()=>({cls:_(`computed:1:6`,()=>g(()=>T(`collapse-title`,n.className))),body:_(`computed:1:7`,()=>g(()=>K(n.children,n.description,n.extra,n.descriptionClassName,n.extraClassName)))})));return(n.as===void 0?`div`:n.as)===`summary`?u(n=>{let a=m(`summary`,n);t(()=>{h(a,i.get())});let c=e(`rue:slot:anchor`);return o(a,c),t(()=>{let e=s.get();r(()=>f(e,a,c))}),a}):u(n=>{let a=m(`div`,n);t(()=>{h(a,i.get())});let c=e(`rue:slot:anchor`);return o(a,c),t(()=>{let e=s.get();r(()=>f(e,a,c))}),a})},Content:n=>u(i=>{let a=m(`div`,i);t(()=>{h(a,T(`collapse-content`,n.className))});let s=e(`rue:children:anchor`);return o(a,s),t(()=>{let e=n.children;r(()=>f(e,a,s))}),a})}),J=n=>u(i=>{let a=m(`div`,i);h(a,`component-preview not-prose text-base-content my-6 lg:my-12`);let s=m(`div`,a);o(a,s);let c=m(`h3`,s);o(s,c),h(c,`component-preview-title mt-2 mb-1 text-lg font-semibold`),o(c,d(`# `));let g=e(`rue:slot:anchor`);o(c,g),t(()=>{let e=n.title;r(()=>f(e,c,g))});let _=e(`rue:slot:anchor`);o(s,_),t(()=>{let i=n.summary?u(()=>{let i=l(),a=m(`p`,i);o(i,a),h(a,`m-0 text-sm opacity-70`);let s=e(`rue:slot:anchor`);return o(a,s),t(()=>{let e=n.summary;r(()=>f(e,a,s))}),i}):``;r(()=>f(i,s,_))});let v=e(`rue:component:anchor`);o(a,v),t(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:n.tab.value,onChange:e=>n.tab.value=e,className:`mb-3 mt-4`});r(()=>f(e,a,v))});let y=e(`rue:slot:anchor`);return o(a,y),t(()=>{let i=n.tab.value===`preview`?n.preview():u(()=>{let i=l(),a=e(`rue:component:anchor`);return o(i,a),t(()=>{let e=p(x,{className:`mt-2`,lang:`tsx`,code:n.code});r(()=>f(e,i,a))}),i});r(()=>f(i,a,y))}),a}),Y=n=>u(i=>{let a=m(`div`,i);h(a,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let s=m(`table`,a);o(a,s),h(s,`table table-zebra`);let p=m(`thead`,s);o(s,p);let g=m(`tr`,p);o(p,g);let _=m(`th`,g);o(g,_),o(_,d(`属性`));let y=m(`th`,g);o(g,y),o(y,d(`说明`));let b=m(`th`,g);o(g,b),o(b,d(`类型`));let x=m(`th`,g);o(g,x),o(x,d(`默认值`));let S=m(`tbody`,s);o(s,S);let C=e(`rue:list:start`),w=e(`rue:list:end`);o(S,C),o(S,w);let T=new Map;return t(()=>{T=v({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,i,a,s,d)=>{f(u(()=>{let i=l(),a=m(`tr`,i);o(i,a),t(()=>{c(a,`key`,String(n.prop))});let s=m(`td`,a);o(a,s);let u=m(`code`,s);o(s,u);let d=e(`rue:slot:anchor`);o(u,d),t(()=>{let e=n.prop;r(()=>f(e,u,d))});let p=m(`td`,a);o(a,p);let h=e(`rue:slot:anchor`);o(p,h),t(()=>{let e=n.description;r(()=>f(e,p,h))});let g=m(`td`,a);o(a,g);let _=m(`code`,g);o(g,_);let v=e(`rue:slot:anchor`);o(_,v),t(()=>{let e=n.type;r(()=>f(e,_,v))});let y=m(`td`,a);o(a,y);let b=m(`code`,y);o(y,b);let x=e(`rue:slot:anchor`);return o(b,x),t(()=>{let e=n.defaultValue;r(()=>f(e,b,x))}),i}),i,a)}})}),a}),ee=[{prop:`items`,description:`数据驱动的折叠面板列表`,type:`CollapseItem[]`,defaultValue:`-`},{prop:`activeKey`,description:`受控展开项；accordion 模式下可传单值`,type:`string | number | Array<string | number>`,defaultValue:`-`},{prop:`defaultActiveKey`,description:`非受控默认展开项`,type:`string | number | Array<string | number>`,defaultValue:`-`},{prop:`accordion`,description:`是否只允许同时展开一项`,type:`boolean`,defaultValue:`false`},{prop:`bordered`,description:`是否使用分组边框容器`,type:`boolean`,defaultValue:`items 模式默认 true`},{prop:`ghost`,description:`是否使用透明背景`,type:`boolean`,defaultValue:`false`},{prop:`size`,description:`标题与内容尺寸`,type:`'sm' | 'md' | 'lg'`,defaultValue:`'md'`},{prop:`expandIconPlacement`,description:`展开图标位置`,type:`'start' | 'end'`,defaultValue:`'end'`},{prop:`onChange`,description:`items 模式切换时触发，返回下一个展开 key`,type:`(nextValue, context) => void`,defaultValue:`-`},{prop:`tag`,description:`兼容旧写法的根标签切换`,type:`'div' | 'details'`,defaultValue:`'div'`}],te=[{prop:`key`,description:`面板唯一标识`,type:`string | number`,defaultValue:`索引值`},{prop:`label`,description:`标题内容，兼容 title 别名`,type:`any`,defaultValue:`-`},{prop:`children`,description:`面板内容，兼容 content 别名`,type:`any`,defaultValue:`-`},{prop:`description`,description:`标题下方的说明文案`,type:`any`,defaultValue:`-`},{prop:`extra`,description:`标题右侧附加区域，不触发展开`,type:`any`,defaultValue:`-`},{prop:`showArrow`,description:`是否显示展开图标`,type:`boolean`,defaultValue:`继承父级`},{prop:`collapsible`,description:`触发区域控制`,type:`'header' | 'icon' | 'disabled'`,defaultValue:`'header'`},{prop:`disabled`,description:`禁用当前项交互`,type:`boolean`,defaultValue:`false`},{prop:`open`,description:`非受控初始展开`,type:`boolean`,defaultValue:`false`}],X=()=>{let{tabItemsBasic:i,tabAccordion:s,tabMeta:c,tabPlacement:g,tabGhost:v,tabControlled:x,tabFocus:S,tabCheckbox:w,tabDetails:T,tabNoBorder:E,tabArrow:D,tabPlus:O,tabIconStart:k,tabOpen:A,tabClose:j,tabCustomFocus:M,tabCustomCheckbox:N,controlledKeys:P,accordionKey:F}=_(`useSetup:0:0`,()=>a(()=>({tabItemsBasic:_(`ref:1:0`,()=>n(`preview`)),tabAccordion:_(`ref:1:1`,()=>n(`preview`)),tabMeta:_(`ref:1:2`,()=>n(`preview`)),tabPlacement:_(`ref:1:3`,()=>n(`preview`)),tabGhost:_(`ref:1:4`,()=>n(`preview`)),tabControlled:_(`ref:1:5`,()=>n(`preview`)),tabFocus:_(`ref:1:6`,()=>n(`preview`)),tabCheckbox:_(`ref:1:7`,()=>n(`preview`)),tabDetails:_(`ref:1:8`,()=>n(`preview`)),tabNoBorder:_(`ref:1:9`,()=>n(`preview`)),tabArrow:_(`ref:1:10`,()=>n(`preview`)),tabPlus:_(`ref:1:11`,()=>n(`preview`)),tabIconStart:_(`ref:1:12`,()=>n(`preview`)),tabOpen:_(`ref:1:13`,()=>n(`preview`)),tabClose:_(`ref:1:14`,()=>n(`preview`)),tabCustomFocus:_(`ref:1:15`,()=>n(`preview`)),tabCustomCheckbox:_(`ref:1:16`,()=>n(`preview`)),controlledKeys:_(`ref:1:17`,()=>n([`release`])),accordionKey:_(`ref:1:18`,()=>n(`guide`))})));return u(n=>{let a=l(),_=e(`rue:component:anchor`);return o(a,_),f(p(C,{children:u(()=>{let n=l(),a=m(`div`,n);o(n,a),h(a,`max-w-none prose prose-sm md:prose-base`);let u=m(`h1`,a);o(a,u),o(u,d(`Collapse 折叠面板`));let _=m(`p`,a);o(a,_),h(_,`mt-3 mb-3 text-sm`),o(_,d("保留 Rue 原本基于 daisyUI 的视觉语言，并在此基础上补齐 `items`、accordion、 `activeKey`、`extra`、`description`、尺寸与图标位置等增强能力。"));let C=m(`h2`,a);o(a,C),o(C,d(`增强 API`));let I=m(`p`,a);o(a,I),h(I,`text-sm opacity-80`),o(I,d("优先面向 `items` 数据驱动用法，组织方式贴近常见业务组件，但保留 Rue 视觉风格。"));let L=e(`rue:component:anchor`);o(a,L),t(()=>{let e=p(J,{title:`Items 基础用法`,summary:`直接通过 items 渲染多项折叠面板，并默认使用带边框的分组容器。`,tab:i,preview:()=>b(q,{arrow:!0,defaultActiveKey:[`overview`],items:[{key:`overview`,label:`Overview`,children:`汇总版本亮点、上线范围与回滚策略，适合用作页面最上方的信息概览。`},{key:`release`,label:`Release Checklist`,children:`确认灰度开关、日志埋点、告警阈值与发布窗口已经准备完毕。`},{key:`faq`,label:`FAQ`,children:`常见问题、风险提示和升级说明也可以继续放进同一个折叠组。`}]}),code:`<Collapse
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
/>`});r(()=>f(e,a,L))});let R=e(`rue:component:anchor`);o(a,R),t(()=>{let e=p(J,{title:`Accordion`,summary:`使用 accordion 改成一次只展开一项，并结合受控 key 管理当前面板。`,tab:s,preview:()=>y(`div`,{className:`space-y-4`,children:[y(`div`,{className:`flex flex-wrap gap-2`,children:[b(`button`,{className:`btn btn-sm`,onClick:()=>F.value=`guide`,children:`打开 Guide`}),b(`button`,{className:`btn btn-sm`,onClick:()=>F.value=`api`,children:`打开 API`}),b(`button`,{className:`btn btn-sm btn-ghost`,onClick:()=>F.value=null,children:`全部收起`})]}),b(q,{accordion:!0,plus:!0,activeKey:F.value,onChange:e=>F.value=e??null,items:[{key:`guide`,label:`Migration Guide`,children:`梳理 breaking changes、默认行为差异与升级建议。`},{key:`api`,label:`API Delta`,children:`列出新增属性、弃用写法与向后兼容策略。`},{key:`qa`,label:`QA Notes`,children:`补充测试范围、回归清单和已知限制。`}]})]}),code:`const activeKey = ref<string | null>('guide')

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
/>`});r(()=>f(e,a,R))});let z=e(`rue:component:anchor`);o(a,z),t(()=>{let e=p(J,{title:`描述与额外操作`,summary:`每一项可带 description、extra 和独立禁用状态，extra 区域点击不会触发展开。`,tab:c,preview:()=>b(q,{arrow:!0,defaultActiveKey:[`ops`],items:[{key:`ops`,label:`Ops Console`,description:`控制发布节奏、灰度范围与告警阈值。`,extra:b(`span`,{className:`badge badge-soft badge-info`,children:`Beta`}),children:`适合放置运维策略、SLA 约束和异常回滚说明。`},{key:`billing`,label:`Billing Center`,description:`当前模块仍在迁移，暂不开放编辑。`,extra:b(`span`,{className:`badge badge-soft`,children:`Read only`}),disabled:!0,children:`禁用项会保留信息展示，但不响应交互。`}]}),code:`<Collapse
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
/>`});r(()=>f(e,a,z))});let B=e(`rue:component:anchor`);o(a,B),t(()=>{let e=p(J,{title:`图标位置与触发区域`,summary:`支持把图标放在左侧，并限制只有图标本身可触发开合。`,tab:g,preview:()=>b(q,{arrow:!0,expandIconPlacement:`start`,items:[{key:`deployment`,label:`Deployment Window`,description:`只有左侧图标可点击，标题区更适合放长文本说明。`,collapsible:`icon`,children:`当标题里还有链接、状态或操作说明时，这个模式会更稳妥。`},{key:`security`,label:`Security Review`,description:`保持默认 header 触发，图标只是视觉反馈。`,children:`适合和 icon-only 模式混合使用。`}]}),code:`<Collapse
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
/>`});r(()=>f(e,a,B))});let V=e(`rue:component:anchor`);o(a,V),t(()=>{let e=p(J,{title:`Ghost 与无边框`,summary:`不想用分组边框时，可以关闭 bordered，再按需开启 ghost。`,tab:v,preview:()=>b(q,{arrow:!0,bordered:!1,ghost:!0,className:`space-y-3`,defaultActiveKey:[`design`],items:[{key:`design`,label:`Design Tokens`,children:`透明背景更适合嵌在卡片、侧栏或深色容器中。`},{key:`theme`,label:`Theme Sync`,children:`可继续叠加自定义类名，让容器完全交给外层布局控制。`}]}),code:`<Collapse
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
/>`});r(()=>f(e,a,V))});let H=e(`rue:component:anchor`);o(a,H),t(()=>{let e=p(J,{title:`尺寸与受控多开`,summary:`size 会统一影响标题和内容尺寸；非 accordion 模式可同时展开多项。`,tab:x,preview:()=>y(`div`,{className:`space-y-4`,children:[y(`div`,{className:`flex flex-wrap gap-2`,children:[b(`button`,{className:`btn btn-sm`,onClick:()=>P.value=[`release`],children:`仅展开 Release`}),b(`button`,{className:`btn btn-sm`,onClick:()=>P.value=[`release`,`notes`],children:`展开两项`}),b(`button`,{className:`btn btn-sm btn-ghost`,onClick:()=>P.value=[],children:`全部收起`})]}),b(q,{plus:!0,size:`lg`,activeKey:P.value,onChange:e=>P.value=e??[],items:[{key:`release`,label:`Release Plan`,children:`大尺寸适合在信息层级较重的管理页或文档页中使用。`},{key:`notes`,label:`Release Notes`,children:`多开模式下可以把相邻的几块信息一起展开对照查看。`},{key:`rollback`,label:`Rollback`,children:`受控模式更方便和 URL、筛选器或外部按钮联动。`}]})]}),code:`const openKeys = ref<string[]>(['release'])

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
/>`});r(()=>f(e,a,H))});let U=e(`rue:component:anchor`);o(a,U),t(()=>{let e=p(J,{title:`Collapse with focus`,summary:`聚焦时展开、失焦时关闭，同时也支持重复点击标题切换开合。`,tab:S,preview:()=>y(q,{tabIndex:0,className:`bg-base-100 border border-base-300`,children:[b(q.Title,{className:`font-semibold`,children:`How do I create an account?`}),b(q.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0} className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});r(()=>f(e,a,U))});let W=e(`rue:component:anchor`);o(a,W),t(()=>{let e=p(J,{title:`Collapse with checkbox`,summary:`使用复选框控制展开与关闭，并支持重复点击标题切换。`,tab:w,preview:()=>y(q,{className:`bg-base-100 border border-base-300`,children:[b(`input`,{type:`checkbox`}),b(q.Title,{className:`font-semibold`,children:`How do I create an account?`}),b(q.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse className="bg-base-100 border border-base-300">
  <input type="checkbox" />
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});r(()=>f(e,a,W))});let G=e(`rue:component:anchor`);o(a,G),t(()=>{let e=p(J,{title:`Collapse using details and summary tag`,summary:`使用 details/summary 标签。`,tab:T,preview:()=>y(q,{tag:`details`,className:`bg-base-100 border border-base-300`,children:[b(q.Title,{as:`summary`,className:`font-semibold`,children:`How do I create an account?`}),b(q.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tag="details" className="bg-base-100 border border-base-300">
  <Collapse.Title as="summary" className="font-semibold">
    How do I create an account?
  </Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});r(()=>f(e,a,G))});let K=e(`rue:component:anchor`);o(a,K),t(()=>{let e=p(J,{title:`Without border and background color`,tab:E,preview:()=>y(q,{tabIndex:0,children:[b(q.Title,{className:`font-semibold`,children:`How do I create an account?`}),b(q.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0}>
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});r(()=>f(e,a,K))});let X=e(`rue:component:anchor`);o(a,X),t(()=>{let e=p(J,{title:`With arrow icon`,tab:D,preview:()=>y(q,{tabIndex:0,arrow:!0,className:`bg-base-100 border border-base-300`,children:[b(q.Title,{className:`font-semibold`,children:`How do I create an account?`}),b(q.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0} arrow className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});r(()=>f(e,a,X))});let Z=e(`rue:component:anchor`);o(a,Z),t(()=>{let e=p(J,{title:`With plus/minus icon`,tab:O,preview:()=>y(q,{tabIndex:0,plus:!0,className:`bg-base-100 border border-base-300`,children:[b(q.Title,{className:`font-semibold`,children:`How do I create an account?`}),b(q.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0} plus className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});r(()=>f(e,a,Z))});let Q=e(`rue:component:anchor`);o(a,Q),t(()=>{let e=p(J,{title:`Moving collapse icon to the start`,summary:`通过 utility 类移动图标位置，并保留标题区重复点击切换能力。`,tab:k,preview:()=>y(q,{tabIndex:0,arrow:!0,className:`bg-base-100 border border-base-300`,children:[b(q.Title,{className:`font-semibold after:start-5 after:end-auto pe-4 ps-12`,children:`How do I create an account?`}),b(q.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0} arrow className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold after:start-5 after:end-auto pe-4 ps-12">
    How do I create an account?
  </Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});r(()=>f(e,a,Q))});let $=e(`rue:component:anchor`);o(a,$),t(()=>{let e=p(J,{title:`Force open`,tab:A,preview:()=>y(q,{tabIndex:0,open:!0,className:`bg-base-100 border border-base-300`,children:[b(q.Title,{className:`font-semibold`,children:`I have collapse-open class`}),b(q.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0} open className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold">I have collapse-open class</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});r(()=>f(e,a,$))});let ne=e(`rue:component:anchor`);o(a,ne),t(()=>{let e=p(J,{title:`Force close`,tab:j,preview:()=>y(q,{tabIndex:0,close:!0,className:`bg-base-100 border border-base-300`,children:[b(q.Title,{className:`font-semibold`,children:`I have collapse-close class`}),b(q.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0} close className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold">I have collapse-close class</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});r(()=>f(e,a,ne))});let re=e(`rue:component:anchor`);o(a,re),t(()=>{let e=p(J,{title:`Custom colors for collapse that works with focus`,summary:`通过 focus 触发颜色变化。`,tab:M,preview:()=>y(q,{tabIndex:0,className:`bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content`,children:[b(q.Title,{className:`font-semibold`,children:`How do I create an account?`}),b(q.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse
  tabIndex={0}
  className="bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content"
>
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});r(()=>f(e,a,re))});let ie=e(`rue:component:anchor`);o(a,ie),t(()=>{let e=p(J,{title:`Custom colors for collapse that works with checkbox`,summary:`通过 peer/peer-checked 触发颜色变化，并支持重复点击标题切换。`,tab:N,preview:()=>y(q,{className:`bg-base-100 border border-base-300`,children:[b(`input`,{type:`checkbox`,className:`peer`}),b(q.Title,{className:`bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content font-semibold`,children:`How do I create an account?`}),b(q.Content,{className:`bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse className="bg-base-100 border border-base-300">
  <input type="checkbox" className="peer" />
  <Collapse.Title className="bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content font-semibold">
    How do I create an account?
  </Collapse.Title>
  <Collapse.Content className="bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});r(()=>f(e,a,ie))});let ae=m(`h2`,a);o(a,ae),o(ae,d(`API`));let oe=m(`h3`,a);o(a,oe),o(oe,d(`Collapse`));let se=e(`rue:component:anchor`);o(a,se),t(()=>{let e=p(Y,{rows:ee});r(()=>f(e,a,se))});let ce=m(`h3`,a);o(a,ce),o(ce,d(`CollapseItem`));let le=e(`rue:component:anchor`);return o(a,le),t(()=>{let e=p(Y,{rows:te});r(()=>f(e,a,le))}),n})}),a,_),a})};export{X as default};