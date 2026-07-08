import{Q as e,Vt as t,Xt as n,Z as r,dt as i,it as a,l as o,nt as s,o as c,on as l,pt as u,rt as d,t as f,tn as p,tt as m,wt as h,xt as g}from"./vapor-runtime-x7F5M-49.js";import{a as _,n as v}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as y}from"./Code-BoXKy3gJ.js";import{n as b,t as x}from"./src-Dlanwp1X.js";import{t as S}from"./tabs-C7cPs47_.js";import{r as C}from"./SidebarPlaygroundDesign-CK4W0Rsr.js";var w=0,T=(e,t)=>e?t?`${e} ${t}`:e:t??``,E=(e,t)=>{let n=t?.getRootNode?.(),r=n&&typeof n.querySelectorAll==`function`?n:typeof document<`u`?document:null;return r?Array.from(r.querySelectorAll(`[data-rue-collapse-group]`)).filter(t=>t.dataset.rueCollapseGroup===e):[]},D=e=>Array.from(e.children).find(e=>e instanceof HTMLElement&&e.classList.contains(`collapse-title`)),O=(e,t)=>t instanceof Node?!!D(e)?.contains(t):!1,k=e=>Array.from(e.children).find(e=>e instanceof HTMLInputElement&&(e.type===`checkbox`||e.type===`radio`)),A=(e,t)=>{if(!(e instanceof HTMLElement))return;e.classList.remove(`collapse-open`,`collapse-close`),e.classList.add(t?`collapse-open`:`collapse-close`);let n=D(e);n&&n.setAttribute(`aria-expanded`,t?`true`:`false`);let r=e.querySelector(`[data-rue-collapse-arrow-icon]`);r&&r.classList.toggle(`rotate-90`,t);let i=e.querySelector(`[data-rue-collapse-plus-vertical]`);i&&(i.classList.remove(`opacity-0`,`opacity-100`),i.classList.add(t?`opacity-0`:`opacity-100`));let a=e.querySelector(`[data-rue-collapse-icon-trigger]`);a&&a.setAttribute(`aria-label`,t?`收起`:`展开`)},j=(e,t)=>{e.classList.remove(`collapse-open`,`collapse-close`),e.classList.add(t?`collapse-open`:`collapse-close`);let n=D(e);n&&n.setAttribute(`aria-expanded`,t?`true`:`false`)},M=e=>{let t=[];return e.forEach(e=>{t.some(t=>t===e)||t.push(e)}),t},N=e=>{switch(e){case`small`:return`sm`;case`middle`:return`md`;case`large`:return`lg`;default:return e}},P=(e,t,n)=>{if(e)return e;if(n)return`plus`;if(t)return`arrow`},F=e=>Array.isArray(e)?e:e==null?[]:[e],I=(e,t)=>{let n=M(F(e));return t?n.slice(0,1):n},L=e=>{switch(N(e)){case`sm`:return`min-h-0 py-3 text-sm`;case`lg`:return`min-h-0 py-5 text-lg`;default:return``}},R=e=>{switch(N(e)){case`sm`:return`pt-0 pb-3 text-sm`;case`lg`:return`pt-0 pb-5 text-base`;default:return``}},z=(e,t,n)=>I(t===void 0?e.filter(e=>e.open).map(e=>e.key):t,n),B=(e,t,n,r)=>r?n?[t]:[]:n?M([...e,t]):e.filter(e=>e!==t),V=(e,t,n)=>{let r=e?`overflow-hidden rounded-box border border-base-300 bg-base-100 divide-y divide-base-300`:`space-y-3`;return t&&(r+=` bg-transparent`),T(r,n)},H=(e,t)=>e?``:t?`bg-transparent`:`rounded-box border border-base-300 bg-base-100`,U=n=>o(r=>{let a=d(`span`,r);i(a,`data-rue-collapse-arrow-icon`,`true`),i(a,`aria-hidden`,`true`),t(()=>{u(a,`inline-flex size-5 items-center justify-center transition-transform duration-200 ${n.open?`rotate-90`:``}`.trim())});let o=d(`svg`,a);e(a,o),i(o,`viewBox`,`0 0 20 20`),i(o,`fill`,`none`),i(o,`stroke`,`currentColor`),i(o,`strokeWidth`,`1.8`),u(o,`size-4`);let s=d(`path`,o);return e(o,s),i(s,`strokeLinecap`,`round`),i(s,`strokeLinejoin`,`round`),i(s,`d`,`m7 4 6 6-6 6`),a}),W=n=>o(r=>{let a=d(`span`,r);i(a,`aria-hidden`,`true`),u(a,`relative inline-flex size-5 items-center justify-center`);let o=d(`span`,a);e(a,o),u(o,`absolute h-0.5 w-3 rounded-full bg-current`);let s=d(`span`,a);return e(a,s),i(s,`data-rue-collapse-plus-vertical`,`true`),t(()=>{u(s,`absolute h-3 w-0.5 rounded-full bg-current transition-opacity duration-200 ${n.open?`opacity-0`:`opacity-100`}`.trim())}),a}),G=(e,t)=>x(e===`plus`?W:U,{open:t}),K=(n,i,a,l,f)=>i==null&&a==null?n:o(h=>{let g=d(`div`,h);u(g,`flex w-full items-start justify-between gap-3`);let _=d(`div`,g);e(g,_),u(_,`min-w-0 flex-1`);let v=d(`div`,_);e(_,v);let y=m(`rue:slot:anchor`);e(v,y),t(()=>{let e=n;p(()=>c(e,v,y))});let b=m(`rue:slot:anchor`);e(_,b),t(()=>{let n=i==null?``:o(()=>{let n=s(),r=d(`div`,n);e(n,r),t(()=>{u(r,T(`mt-1 text-xs opacity-70`,l))});let a=m(`rue:slot:anchor`);return e(r,a),t(()=>{let e=i;p(()=>c(e,r,a))}),n});p(()=>c(n,_,b))});let x=m(`rue:slot:anchor`);return e(g,x),t(()=>{let n=a==null?``:o(()=>{let n=s(),i=d(`div`,n);e(n,i),t(()=>{u(i,T(`shrink-0 text-xs opacity-70`,f))}),r(i,`click`,e=>e.stopPropagation()),r(i,`keydown`,e=>e.stopPropagation());let o=m(`rue:slot:anchor`);return e(i,o),t(()=>{let e=a;p(()=>c(e,i,o))}),n});p(()=>c(n,g,x))}),g}),q=Object.assign(a=>{let{normalizedItems:f,hasItems:y,resolvedBordered:b,resolvedIcon:x,hasManagedIcon:S,generatedGroupName:C,uncontrolledOpenKeys:D,getCurrentOpenKeys:M}=_(`useSetup:0:0`,()=>l(()=>{let e=a.items?.map((e,t)=>({...e,key:e.key??t,index:t,label:e.label??e.title,content:e.children??e.content}))??[],t=e.length>0,r=_(`computed:1:0`,()=>h(()=>a.bordered??t)),i=_(`computed:1:1`,()=>h(()=>P(a.icon,a.arrow,a.plus))),o=i,s=_(`computed:1:2`,()=>h(()=>a.showArrow===!1?!1:!!o.get())),c=_(`ref:1:3`,()=>n(`rue-collapse-${w++}`)),l=_(`ref:1:4`,()=>n(z(e,a.defaultActiveKey,a.accordion)));return{normalizedItems:e,hasItems:t,resolvedBordered:r,resolvedIcon:i,hasManagedIcon:s,generatedGroupName:c,uncontrolledOpenKeys:l,getCurrentOpenKeys:()=>{let e=a.activeKey===void 0?l.value:I(a.activeKey,a.accordion);return Array.isArray(e)?e:[]}}}));if(y){let n=C.value,l=(e,t)=>{E(n,t).forEach(t=>{let n=f[Number(t.dataset.rueCollapseIndex)];n&&A(t,e.some(e=>e===n.key))})},h=(e,t,n)=>{let r=B(M(),e.key,t,a.accordion),i=r.some(t=>t===e.key);a.activeKey===void 0&&(D.value=r,l(r,n)),a.onChange&&a.onChange(a.accordion?r[0]??null:r,{key:e.key,index:e.index,open:i,item:e})};return o(l=>{let _=d(`div`,l);t(()=>{u(_,V(b.get(),a.ghost,a.className))});let y=m(`rue:list:start`),C=m(`rue:list:end`);e(_,y),e(_,C);let w=new Map;return t(()=>{w=v({items:f||[],getKey:(e,t)=>e.key,elements:w,parent:y.parentNode,before:C,singleRoot:!0,trackIndex:!1,start:y,renderItem:(l,f,_,v,y)=>{c(o(()=>{let f=s(),_=d(`div`,f);e(f,_),t(()=>{u(_,T(T(T(`collapse`,M().some(e=>e===l.key)?`collapse-open`:`collapse-close`),H(b.get(),a.ghost)),l.className))}),t(()=>{i(_,`key`,String(l.key))}),t(()=>{i(_,`data-rue-collapse-group`,String(n))}),t(()=>{i(_,`data-rue-collapse-index`,String(String(l.index)))});let v=d(`div`,_);e(_,v),t(()=>{u(v,T(T(T(`collapse-title`,L(a.size)),T(a.titleClassName,l.titleClassName)),(a.disabled||l.disabled?`disabled`:l.collapsible??a.collapsible??`header`)===`header`?`cursor-pointer select-none`:``))}),t(()=>{i(v,`aria-expanded`,String(M().some(e=>e===l.key)?`true`:`false`))}),t(()=>{g(v,(a.disabled||l.disabled?`disabled`:l.collapsible??a.collapsible??`header`)===`header`?{role:`button`,tabIndex:0,onClick:e=>(e=>{(a.disabled||l.disabled?`disabled`:l.collapsible??a.collapsible??`header`)!==`disabled`&&h(l,!M().some(e=>e===l.key),e)})(e.currentTarget),onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),(e=>{(a.disabled||l.disabled?`disabled`:l.collapsible??a.collapsible??`header`)!==`disabled`&&h(l,!M().some(e=>e===l.key),e)})(e.currentTarget))}}:{})});let y=d(`div`,v);e(v,y),u(y,`flex w-full items-start gap-3`);let C=m(`rue:slot:anchor`);e(y,C),t(()=>{let n=(l.showArrow??S.get())&&(l.icon??x.get())&&(a.expandIconPlacement===void 0?`end`:a.expandIconPlacement)===`start`?(a.disabled||l.disabled?`disabled`:l.collapsible??a.collapsible??`header`)===`icon`?o(()=>{let n=s(),o=d(`button`,n);e(n,o),i(o,`data-rue-collapse-icon-trigger`,`true`),i(o,`type`,`button`),t(()=>{u(o,T(`inline-flex size-7 shrink-0 self-start items-center justify-center rounded-full border border-transparent transition-colors hover:bg-base-200/70`,l.description!=null||l.extra!=null?`pt-1`:`mt-0.5`))}),t(()=>{i(o,`aria-label`,String(M().some(e=>e===l.key)?`收起`:`展开`))}),r(o,`click`,e=>{e.stopPropagation(),(e=>{(a.disabled||l.disabled?`disabled`:l.collapsible??a.collapsible??`header`)!==`disabled`&&h(l,!M().some(e=>e===l.key),e)})(e.currentTarget)});let f=m(`rue:slot:anchor`);return e(o,f),t(()=>{let e=G(l.icon??x.get(),M().some(e=>e===l.key));p(()=>c(e,o,f))}),n}):o(()=>{let n=s(),r=d(`span`,n);e(n,r),t(()=>{u(r,T(`inline-flex size-7 shrink-0 self-start items-center justify-center`,l.description!=null||l.extra!=null?`pt-1`:`mt-0.5`))});let i=m(`rue:slot:anchor`);return e(r,i),t(()=>{let e=G(l.icon??x.get(),M().some(e=>e===l.key));p(()=>c(e,r,i))}),n}):``;p(()=>c(n,y,C))});let w=d(`div`,y);e(y,w),u(w,`min-w-0 flex-1`);let E=m(`rue:slot:anchor`);e(w,E),t(()=>{let e=K(l.label,l.description,l.extra,l.descriptionClassName,l.extraClassName);p(()=>c(e,w,E))});let D=m(`rue:slot:anchor`);e(y,D),t(()=>{let n=(l.showArrow??S.get())&&(l.icon??x.get())&&(a.expandIconPlacement===void 0?`end`:a.expandIconPlacement)===`end`?(a.disabled||l.disabled?`disabled`:l.collapsible??a.collapsible??`header`)===`icon`?o(()=>{let n=s(),o=d(`button`,n);e(n,o),i(o,`data-rue-collapse-icon-trigger`,`true`),i(o,`type`,`button`),t(()=>{u(o,T(`inline-flex size-7 shrink-0 self-start items-center justify-center rounded-full border border-transparent transition-colors hover:bg-base-200/70`,l.description!=null||l.extra!=null?`pt-1`:`mt-0.5`))}),t(()=>{i(o,`aria-label`,String(M().some(e=>e===l.key)?`收起`:`展开`))}),r(o,`click`,e=>{e.stopPropagation(),(e=>{(a.disabled||l.disabled?`disabled`:l.collapsible??a.collapsible??`header`)!==`disabled`&&h(l,!M().some(e=>e===l.key),e)})(e.currentTarget)});let f=m(`rue:slot:anchor`);return e(o,f),t(()=>{let e=G(l.icon??x.get(),M().some(e=>e===l.key));p(()=>c(e,o,f))}),n}):o(()=>{let n=s(),r=d(`span`,n);e(n,r),t(()=>{u(r,T(`inline-flex size-7 shrink-0 self-start items-center justify-center`,l.description!=null||l.extra!=null?`pt-1`:`mt-0.5`))});let i=m(`rue:slot:anchor`);return e(r,i),t(()=>{let e=G(l.icon??x.get(),M().some(e=>e===l.key));p(()=>c(e,r,i))}),n}):``;p(()=>c(n,y,D))});let O=d(`div`,_);e(_,O),t(()=>{u(O,T(T(`collapse-content`,R(a.size)),T(a.contentClassName,l.contentClassName)))});let k=m(`rue:slot:anchor`);return e(O,k),t(()=>{let e=l.content;p(()=>c(e,O,k))}),f}),f,_)}})}),_})}let N=`collapse`;a.showArrow!==!1&&(a.arrow||x.get()===`arrow`)&&(N+=` collapse-arrow`),a.showArrow!==!1&&(a.plus||x.get()===`plus`)&&(N+=` collapse-plus`),a.open&&(N+=` collapse-open`),a.close&&(N+=` collapse-close`),!a.open&&!a.close&&a.defaultOpen&&(N+=` collapse-open`),a.disabled&&(N+=` opacity-70`);let F=H(!!b.get(),a.ghost);if(F&&(N+=` ${F}`),a.className&&(N+=` ${a.className}`),(a.tag===void 0?`div`:a.tag)===`details`)return o(n=>{let r=d(`details`,n);t(()=>{u(r,N)}),t(()=>{i(r,`open`,String(a.open||!a.close&&a.defaultOpen?!0:void 0))});let o=m(`rue:children:anchor`);return e(r,o),t(()=>{let e=a.children;p(()=>c(e,r,o))}),r});let U=typeof a.tabIndex==`number`?a.tabIndex:void 0,W=!!a.open||!!a.close||!!a.defaultOpen;return o(n=>{let o=d(`div`,n);t(()=>{u(o,N)}),t(()=>{i(o,`tabindex`,String(U===void 0?void 0:String(U)))}),r(o,`mousedown`,e=>{let t=e.currentTarget;t.dataset.rueCollapsePointerDown=`true`}),r(o,`click`,e=>{let t=e.currentTarget,n=e.target,r=k(t),i=O(t,n),a=n instanceof HTMLInputElement&&n===r;if(!i&&!a){delete t.dataset.rueCollapsePointerDown;return}U!==void 0&&(t.tabIndex=U,t.setAttribute(`tabindex`,String(U)),t.focus()),W||(r?(a||(r.type===`checkbox`?r.checked=!r.checked:r.type===`radio`&&(r.checked=!0)),j(t,r.checked)):j(t,!t.classList.contains(`collapse-open`))),delete t.dataset.rueCollapsePointerDown}),r(o,`focus`,e=>{if(U===void 0||W)return;let t=e.currentTarget;t.dataset.rueCollapsePointerDown!==`true`&&j(t,!0)}),r(o,`blur`,e=>{delete e.currentTarget.dataset.rueCollapsePointerDown,!(U===void 0||W)&&j(e.currentTarget,!1)}),r(o,`keydown`,e=>{if(U===void 0||W||e.key!==`Enter`&&e.key!==` `||!O(e.currentTarget,e.target))return;e.preventDefault();let t=e.currentTarget;j(t,!t.classList.contains(`collapse-open`))}),r(o,`change`,e=>{if(W)return;let t=e.target;!t||t.type!==`checkbox`&&t.type!==`radio`||j(e.currentTarget,t.checked)});let s=m(`rue:children:anchor`);return e(o,s),t(()=>{let e=a.children;p(()=>c(e,o,s))}),o})},{Title:n=>{let{cls:r,body:i}=_(`useSetup:0:0:dup1`,()=>l(()=>({cls:_(`computed:1:5`,()=>h(()=>T(`collapse-title`,n.className))),body:_(`computed:1:6`,()=>h(()=>K(n.children,n.description,n.extra,n.descriptionClassName,n.extraClassName)))})));return(n.as===void 0?`div`:n.as)===`summary`?o(n=>{let a=d(`summary`,n);t(()=>{u(a,r.get())});let o=m(`rue:slot:anchor`);return e(a,o),t(()=>{let e=i.get();p(()=>c(e,a,o))}),a}):o(n=>{let a=d(`div`,n);t(()=>{u(a,r.get())});let o=m(`rue:slot:anchor`);return e(a,o),t(()=>{let e=i.get();p(()=>c(e,a,o))}),a})},Content:n=>o(r=>{let i=d(`div`,r);t(()=>{u(i,T(`collapse-content`,n.className))});let a=m(`rue:children:anchor`);return e(i,a),t(()=>{let e=n.children;p(()=>c(e,i,a))}),i})}),J=n=>o(r=>{let i=d(`div`,r);u(i,`component-preview not-prose text-base-content my-6 lg:my-12`);let l=d(`div`,i);e(i,l);let h=d(`h3`,l);e(l,h),u(h,`component-preview-title mt-2 mb-1 text-lg font-semibold`),e(h,a(`# `));let g=m(`rue:slot:anchor`);e(h,g),t(()=>{let e=n.title;p(()=>c(e,h,g))});let _=m(`rue:slot:anchor`);e(l,_),t(()=>{let r=n.summary?o(()=>{let r=s(),i=d(`p`,r);e(r,i),u(i,`m-0 text-sm opacity-70`);let a=m(`rue:slot:anchor`);return e(i,a),t(()=>{let e=n.summary;p(()=>c(e,i,a))}),r}):``;p(()=>c(r,l,_))});let v=m(`rue:component:anchor`);e(i,v),t(()=>{let e=f(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:n.tab.value,onChange:e=>n.tab.value=e,className:`mb-3 mt-4`});p(()=>c(e,i,v))});let b=m(`rue:slot:anchor`);return e(i,b),t(()=>{let r=n.tab.value===`preview`?n.preview():o(()=>{let r=s(),i=m(`rue:component:anchor`);return e(r,i),t(()=>{let e=f(y,{className:`mt-2`,lang:`tsx`,code:n.code});p(()=>c(e,r,i))}),r});p(()=>c(r,i,b))}),i}),Y=n=>o(r=>{let l=d(`div`,r);u(l,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=d(`table`,l);e(l,f),u(f,`table table-zebra`);let h=d(`thead`,f);e(f,h);let g=d(`tr`,h);e(h,g);let _=d(`th`,g);e(g,_),e(_,a(`属性`));let y=d(`th`,g);e(g,y),e(y,a(`说明`));let b=d(`th`,g);e(g,b),e(b,a(`类型`));let x=d(`th`,g);e(g,x),e(x,a(`默认值`));let S=d(`tbody`,f);e(f,S);let C=m(`rue:list:start`),w=m(`rue:list:end`);e(S,C),e(S,w);let T=new Map;return t(()=>{T=v({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,r,a,l,u)=>{c(o(()=>{let r=s(),a=d(`tr`,r);e(r,a),t(()=>{i(a,`key`,String(n.prop))});let o=d(`td`,a);e(a,o);let l=d(`code`,o);e(o,l);let u=m(`rue:slot:anchor`);e(l,u),t(()=>{let e=n.prop;p(()=>c(e,l,u))});let f=d(`td`,a);e(a,f);let h=m(`rue:slot:anchor`);e(f,h),t(()=>{let e=n.description;p(()=>c(e,f,h))});let g=d(`td`,a);e(a,g);let _=d(`code`,g);e(g,_);let v=m(`rue:slot:anchor`);e(_,v),t(()=>{let e=n.type;p(()=>c(e,_,v))});let y=d(`td`,a);e(a,y);let b=d(`code`,y);e(y,b);let x=m(`rue:slot:anchor`);return e(b,x),t(()=>{let e=n.defaultValue;p(()=>c(e,b,x))}),r}),r,a)}})}),l}),ee=[{prop:`items`,description:`数据驱动的折叠面板列表`,type:`CollapseItem[]`,defaultValue:`-`},{prop:`activeKey`,description:`受控展开项；accordion 模式下可传单值`,type:`string | number | Array<string | number>`,defaultValue:`-`},{prop:`defaultActiveKey`,description:`非受控默认展开项`,type:`string | number | Array<string | number>`,defaultValue:`-`},{prop:`accordion`,description:`是否只允许同时展开一项`,type:`boolean`,defaultValue:`false`},{prop:`bordered`,description:`是否使用分组边框容器`,type:`boolean`,defaultValue:`items 模式默认 true`},{prop:`ghost`,description:`是否使用透明背景`,type:`boolean`,defaultValue:`false`},{prop:`size`,description:`标题与内容尺寸`,type:`'sm' | 'md' | 'lg'`,defaultValue:`'md'`},{prop:`expandIconPlacement`,description:`展开图标位置`,type:`'start' | 'end'`,defaultValue:`'end'`},{prop:`onChange`,description:`items 模式切换时触发，返回下一个展开 key`,type:`(nextValue, context) => void`,defaultValue:`-`},{prop:`tag`,description:`支持基础写法的根标签切换`,type:`'div' | 'details'`,defaultValue:`'div'`}],te=[{prop:`key`,description:`面板唯一标识`,type:`string | number`,defaultValue:`索引值`},{prop:`label`,description:`标题内容，支持 title 别名`,type:`any`,defaultValue:`-`},{prop:`children`,description:`面板内容，支持 content 别名`,type:`any`,defaultValue:`-`},{prop:`description`,description:`标题下方的说明文案`,type:`any`,defaultValue:`-`},{prop:`extra`,description:`标题右侧附加区域，不触发展开`,type:`any`,defaultValue:`-`},{prop:`showArrow`,description:`是否显示展开图标`,type:`boolean`,defaultValue:`继承父级`},{prop:`collapsible`,description:`触发区域控制`,type:`'header' | 'icon' | 'disabled'`,defaultValue:`'header'`},{prop:`disabled`,description:`禁用当前项交互`,type:`boolean`,defaultValue:`false`},{prop:`open`,description:`非受控初始展开`,type:`boolean`,defaultValue:`false`}],X=()=>{let{tabItemsBasic:r,tabAccordion:i,tabMeta:h,tabPlacement:g,tabGhost:v,tabControlled:y,tabFocus:S,tabCheckbox:w,tabDetails:T,tabNoBorder:E,tabArrow:D,tabPlus:O,tabIconStart:k,tabOpen:A,tabClose:j,tabCustomFocus:M,tabCustomCheckbox:N,controlledKeys:P,accordionKey:F}=_(`useSetup:0:0`,()=>l(()=>({tabItemsBasic:_(`ref:1:0`,()=>n(`preview`)),tabAccordion:_(`ref:1:1`,()=>n(`preview`)),tabMeta:_(`ref:1:2`,()=>n(`preview`)),tabPlacement:_(`ref:1:3`,()=>n(`preview`)),tabGhost:_(`ref:1:4`,()=>n(`preview`)),tabControlled:_(`ref:1:5`,()=>n(`preview`)),tabFocus:_(`ref:1:6`,()=>n(`preview`)),tabCheckbox:_(`ref:1:7`,()=>n(`preview`)),tabDetails:_(`ref:1:8`,()=>n(`preview`)),tabNoBorder:_(`ref:1:9`,()=>n(`preview`)),tabArrow:_(`ref:1:10`,()=>n(`preview`)),tabPlus:_(`ref:1:11`,()=>n(`preview`)),tabIconStart:_(`ref:1:12`,()=>n(`preview`)),tabOpen:_(`ref:1:13`,()=>n(`preview`)),tabClose:_(`ref:1:14`,()=>n(`preview`)),tabCustomFocus:_(`ref:1:15`,()=>n(`preview`)),tabCustomCheckbox:_(`ref:1:16`,()=>n(`preview`)),controlledKeys:_(`ref:1:17`,()=>n([`release`])),accordionKey:_(`ref:1:18`,()=>n(`guide`))})));return o(n=>{let l=s(),_=m(`rue:component:anchor`);return e(l,_),c(f(C,{children:o(()=>{let n=s(),o=d(`div`,n);e(n,o),u(o,`max-w-none prose prose-sm md:prose-base`);let l=d(`h1`,o);e(o,l),e(l,a(`Collapse 折叠面板`));let _=d(`p`,o);e(o,_),u(_,`mt-3 mb-3 text-sm`),e(_,a("使用 Rue 基础基于 daisyUI 的视觉语言，并在此基础上补充 `items`、accordion、 `activeKey`、`extra`、`description`、尺寸与图标位置等增强能力。"));let C=d(`h2`,o);e(o,C),e(C,a(`语义 API`));let I=d(`p`,o);e(o,I),u(I,`text-sm opacity-80`),e(I,a("优先面向 `items` 数据驱动用法，组织方式贴近常见业务组件，但使用 Rue 视觉风格。"));let L=m(`rue:component:anchor`);e(o,L),t(()=>{let e=f(J,{title:`Items 基础用法`,summary:`直接通过 items 渲染多项折叠面板，并默认使用带边框的分组容器。`,tab:r,preview:()=>x(q,{arrow:!0,defaultActiveKey:[`overview`],items:[{key:`overview`,label:`Overview`,children:`汇总版本亮点、上线范围与回滚策略，适合用作页面最上方的信息概览。`},{key:`release`,label:`Release Checklist`,children:`确认灰度开关、日志埋点、告警阈值与发布窗口已经准备完毕。`},{key:`faq`,label:`FAQ`,children:`常见问题、风险提示和升级说明也可以继续放进同一个折叠组。`}]}),code:`<Collapse
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
/>`});p(()=>c(e,o,L))});let R=m(`rue:component:anchor`);e(o,R),t(()=>{let e=f(J,{title:`Accordion`,summary:`使用 accordion 改成一次只展开一项，并结合受控 key 管理当前面板。`,tab:i,preview:()=>b(`div`,{className:`space-y-4`,children:[b(`div`,{className:`flex flex-wrap gap-2`,children:[x(`button`,{className:`btn btn-sm`,onClick:()=>F.value=`guide`,children:`打开 Guide`}),x(`button`,{className:`btn btn-sm`,onClick:()=>F.value=`api`,children:`打开 API`}),x(`button`,{className:`btn btn-sm btn-ghost`,onClick:()=>F.value=null,children:`全部收起`})]}),x(q,{accordion:!0,plus:!0,activeKey:F.value,onChange:e=>F.value=e??null,items:[{key:`guide`,label:`Migration Guide`,children:`梳理 breaking changes、默认行为差异与升级建议。`},{key:`api`,label:`API Delta`,children:`列出属性变化与使用策略。`},{key:`qa`,label:`QA Notes`,children:`补充测试范围、回归清单和已知限制。`}]})]}),code:`const activeKey = ref<string | null>('guide')

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
/>`});p(()=>c(e,o,R))});let z=m(`rue:component:anchor`);e(o,z),t(()=>{let e=f(J,{title:`描述与额外操作`,summary:`每一项可带 description、extra 和独立禁用状态，extra 区域点击不会触发展开。`,tab:h,preview:()=>x(q,{arrow:!0,defaultActiveKey:[`ops`],items:[{key:`ops`,label:`Ops Console`,description:`控制发布节奏、灰度范围与告警阈值。`,extra:x(`span`,{className:`badge badge-soft badge-info`,children:`Beta`}),children:`适合放置运维策略、SLA 约束和异常回滚说明。`},{key:`billing`,label:`Billing Center`,description:`当前模块仍在整理，暂不开放编辑。`,extra:x(`span`,{className:`badge badge-soft`,children:`Read only`}),disabled:!0,children:`禁用项会保持信息展示，但不响应交互。`}]}),code:`<Collapse
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
/>`});p(()=>c(e,o,z))});let B=m(`rue:component:anchor`);e(o,B),t(()=>{let e=f(J,{title:`图标位置与触发区域`,summary:`支持把图标放在左侧，并限制只有图标本身可触发开合。`,tab:g,preview:()=>x(q,{arrow:!0,expandIconPlacement:`start`,items:[{key:`deployment`,label:`Deployment Window`,description:`只有左侧图标可点击，标题区更适合放长文本说明。`,collapsible:`icon`,children:`当标题里还有链接、状态或操作说明时，这个模式会更稳妥。`},{key:`security`,label:`Security Review`,description:`保持默认 header 触发，图标只是视觉反馈。`,children:`适合和 icon-only 模式混合使用。`}]}),code:`<Collapse
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
/>`});p(()=>c(e,o,B))});let V=m(`rue:component:anchor`);e(o,V),t(()=>{let e=f(J,{title:`Ghost 与无边框`,summary:`不想用分组边框时，可以关闭 bordered，再按需开启 ghost。`,tab:v,preview:()=>x(q,{arrow:!0,bordered:!1,ghost:!0,className:`space-y-3`,defaultActiveKey:[`design`],items:[{key:`design`,label:`Design Tokens`,children:`透明背景更适合嵌在卡片、侧栏或深色容器中。`},{key:`theme`,label:`Theme Sync`,children:`可继续叠加自定义类名，让容器完全交给外层布局控制。`}]}),code:`<Collapse
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
/>`});p(()=>c(e,o,V))});let H=m(`rue:component:anchor`);e(o,H),t(()=>{let e=f(J,{title:`尺寸与受控多开`,summary:`size 会统一影响标题和内容尺寸；非 accordion 模式可同时展开多项。`,tab:y,preview:()=>b(`div`,{className:`space-y-4`,children:[b(`div`,{className:`flex flex-wrap gap-2`,children:[x(`button`,{className:`btn btn-sm`,onClick:()=>P.value=[`release`],children:`仅展开 Release`}),x(`button`,{className:`btn btn-sm`,onClick:()=>P.value=[`release`,`notes`],children:`展开两项`}),x(`button`,{className:`btn btn-sm btn-ghost`,onClick:()=>P.value=[],children:`全部收起`})]}),x(q,{plus:!0,size:`lg`,activeKey:P.value,onChange:e=>P.value=e??[],items:[{key:`release`,label:`Release Plan`,children:`大尺寸适合在信息层级较重的管理页或文档页中使用。`},{key:`notes`,label:`Release Notes`,children:`多开模式下可以把相邻的几块信息一起展开对照查看。`},{key:`rollback`,label:`Rollback`,children:`受控模式更方便和 URL、筛选器或外部按钮联动。`}]})]}),code:`const openKeys = ref<string[]>(['release'])

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
/>`});p(()=>c(e,o,H))});let U=m(`rue:component:anchor`);e(o,U),t(()=>{let e=f(J,{title:`Collapse with focus`,summary:`聚焦时展开、失焦时关闭，同时也支持重复点击标题切换开合。`,tab:S,preview:()=>b(q,{tabIndex:0,className:`bg-base-100 border border-base-300`,children:[x(q.Title,{className:`font-semibold`,children:`How do I create an account?`}),x(q.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0} className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});p(()=>c(e,o,U))});let W=m(`rue:component:anchor`);e(o,W),t(()=>{let e=f(J,{title:`Collapse with checkbox`,summary:`使用复选框控制展开与关闭，并支持重复点击标题切换。`,tab:w,preview:()=>b(q,{className:`bg-base-100 border border-base-300`,children:[x(`input`,{type:`checkbox`}),x(q.Title,{className:`font-semibold`,children:`How do I create an account?`}),x(q.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse className="bg-base-100 border border-base-300">
  <input type="checkbox" />
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});p(()=>c(e,o,W))});let G=m(`rue:component:anchor`);e(o,G),t(()=>{let e=f(J,{title:`Collapse using details and summary tag`,summary:`使用 details/summary 标签。`,tab:T,preview:()=>b(q,{tag:`details`,className:`bg-base-100 border border-base-300`,children:[x(q.Title,{as:`summary`,className:`font-semibold`,children:`How do I create an account?`}),x(q.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tag="details" className="bg-base-100 border border-base-300">
  <Collapse.Title as="summary" className="font-semibold">
    How do I create an account?
  </Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});p(()=>c(e,o,G))});let K=m(`rue:component:anchor`);e(o,K),t(()=>{let e=f(J,{title:`Without border and background color`,tab:E,preview:()=>b(q,{tabIndex:0,children:[x(q.Title,{className:`font-semibold`,children:`How do I create an account?`}),x(q.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0}>
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});p(()=>c(e,o,K))});let X=m(`rue:component:anchor`);e(o,X),t(()=>{let e=f(J,{title:`With arrow icon`,tab:D,preview:()=>b(q,{tabIndex:0,arrow:!0,className:`bg-base-100 border border-base-300`,children:[x(q.Title,{className:`font-semibold`,children:`How do I create an account?`}),x(q.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0} arrow className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});p(()=>c(e,o,X))});let Z=m(`rue:component:anchor`);e(o,Z),t(()=>{let e=f(J,{title:`With plus/minus icon`,tab:O,preview:()=>b(q,{tabIndex:0,plus:!0,className:`bg-base-100 border border-base-300`,children:[x(q.Title,{className:`font-semibold`,children:`How do I create an account?`}),x(q.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0} plus className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});p(()=>c(e,o,Z))});let Q=m(`rue:component:anchor`);e(o,Q),t(()=>{let e=f(J,{title:`Moving collapse icon to the start`,summary:`通过 utility 类移动图标位置，并保持标题区重复点击切换能力。`,tab:k,preview:()=>b(q,{tabIndex:0,arrow:!0,className:`bg-base-100 border border-base-300`,children:[x(q.Title,{className:`font-semibold after:start-5 after:end-auto pe-4 ps-12`,children:`How do I create an account?`}),x(q.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0} arrow className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold after:start-5 after:end-auto pe-4 ps-12">
    How do I create an account?
  </Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});p(()=>c(e,o,Q))});let $=m(`rue:component:anchor`);e(o,$),t(()=>{let e=f(J,{title:`Force open`,tab:A,preview:()=>b(q,{tabIndex:0,open:!0,className:`bg-base-100 border border-base-300`,children:[x(q.Title,{className:`font-semibold`,children:`I have collapse-open class`}),x(q.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0} open className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold">I have collapse-open class</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});p(()=>c(e,o,$))});let ne=m(`rue:component:anchor`);e(o,ne),t(()=>{let e=f(J,{title:`Force close`,tab:j,preview:()=>b(q,{tabIndex:0,close:!0,className:`bg-base-100 border border-base-300`,children:[x(q.Title,{className:`font-semibold`,children:`I have collapse-close class`}),x(q.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0} close className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold">I have collapse-close class</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});p(()=>c(e,o,ne))});let re=m(`rue:component:anchor`);e(o,re),t(()=>{let e=f(J,{title:`Custom colors for collapse that works with focus`,summary:`通过 focus 触发颜色变化。`,tab:M,preview:()=>b(q,{tabIndex:0,className:`bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content`,children:[x(q.Title,{className:`font-semibold`,children:`How do I create an account?`}),x(q.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse
  tabIndex={0}
  className="bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content"
>
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});p(()=>c(e,o,re))});let ie=m(`rue:component:anchor`);e(o,ie),t(()=>{let e=f(J,{title:`Custom colors for collapse that works with checkbox`,summary:`通过 peer/peer-checked 触发颜色变化，并支持重复点击标题切换。`,tab:N,preview:()=>b(q,{className:`bg-base-100 border border-base-300`,children:[x(`input`,{type:`checkbox`,className:`peer`}),x(q.Title,{className:`bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content font-semibold`,children:`How do I create an account?`}),x(q.Content,{className:`bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse className="bg-base-100 border border-base-300">
  <input type="checkbox" className="peer" />
  <Collapse.Title className="bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content font-semibold">
    How do I create an account?
  </Collapse.Title>
  <Collapse.Content className="bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});p(()=>c(e,o,ie))});let ae=d(`h2`,o);e(o,ae),e(ae,a(`API`));let oe=d(`h3`,o);e(o,oe),e(oe,a(`Collapse`));let se=m(`rue:component:anchor`);e(o,se),t(()=>{let e=f(Y,{rows:ee});p(()=>c(e,o,se))});let ce=d(`h3`,o);e(o,ce),e(ce,a(`CollapseItem`));let le=m(`rue:component:anchor`);return e(o,le),t(()=>{let e=f(Y,{rows:te});p(()=>c(e,o,le))}),n})}),l,_),l})};export{X as default};