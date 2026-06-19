import{$ as e,Q as t,Qt as n,Wt as r,X as i,Y as a,Yt as o,et as s,gt as c,l,lt as u,o as d,st as f,t as p,tt as m,vt as h,zt as g}from"./vapor-runtime-CXIalONM.js";import{a as _,n as v}from"./vapor-helpers-vapor-CoXKrGmY.js";import{a as y,i as b}from"./persistentSidebarPlayground-DBDp2zjv.js";import{t as x}from"./Code-BIscIyEp.js";import{t as S}from"./tabs-CZWMQq5i.js";import{r as C}from"./SidebarPlaygroundDesign-CsC_YS7V.js";var w=0,T=(e,t)=>e?t?`${e} ${t}`:e:t??``,E=(e,t)=>{let n=t?.getRootNode?.(),r=n&&typeof n.querySelectorAll==`function`?n:typeof document<`u`?document:null;return r?Array.from(r.querySelectorAll(`[data-rue-collapse-group]`)).filter(t=>t.dataset.rueCollapseGroup===e):[]},D=e=>Array.from(e.children).find(e=>e instanceof HTMLElement&&e.classList.contains(`collapse-title`)),O=(e,t)=>t instanceof Node?!!D(e)?.contains(t):!1,k=e=>Array.from(e.children).find(e=>e instanceof HTMLInputElement&&(e.type===`checkbox`||e.type===`radio`)),A=(e,t)=>{if(!(e instanceof HTMLElement))return;e.classList.remove(`collapse-open`,`collapse-close`),e.classList.add(t?`collapse-open`:`collapse-close`);let n=D(e);n&&n.setAttribute(`aria-expanded`,t?`true`:`false`);let r=e.querySelector(`[data-rue-collapse-arrow-icon]`);r&&r.classList.toggle(`rotate-90`,t);let i=e.querySelector(`[data-rue-collapse-plus-vertical]`);i&&(i.classList.remove(`opacity-0`,`opacity-100`),i.classList.add(t?`opacity-0`:`opacity-100`));let a=e.querySelector(`[data-rue-collapse-icon-trigger]`);a&&a.setAttribute(`aria-label`,t?`收起`:`展开`)},j=(e,t)=>{e.classList.remove(`collapse-open`,`collapse-close`),e.classList.add(t?`collapse-open`:`collapse-close`);let n=D(e);n&&n.setAttribute(`aria-expanded`,t?`true`:`false`)},M=e=>{let t=[];return e.forEach(e=>{t.some(t=>t===e)||t.push(e)}),t},N=e=>{switch(e){case`small`:return`sm`;case`middle`:return`md`;case`large`:return`lg`;default:return e}},P=(e,t,n)=>{if(e)return e;if(n)return`plus`;if(t)return`arrow`},F=e=>Array.isArray(e)?e:e==null?[]:[e],I=(e,t)=>{let n=M(F(e));return t?n.slice(0,1):n},L=e=>{switch(N(e)){case`sm`:return`min-h-0 py-3 text-sm`;case`lg`:return`min-h-0 py-5 text-lg`;default:return``}},R=e=>{switch(N(e)){case`sm`:return`pt-0 pb-3 text-sm`;case`lg`:return`pt-0 pb-5 text-base`;default:return``}},z=(e,t,n)=>I(t===void 0?e.filter(e=>e.open).map(e=>e.key):t,n),B=(e,t,n,r)=>r?n?[t]:[]:n?M([...e,t]):e.filter(e=>e!==t),V=(e,t,n)=>{let r=e?`overflow-hidden rounded-box border border-base-300 bg-base-100 divide-y divide-base-300`:`space-y-3`;return t&&(r+=` bg-transparent`),T(r,n)},H=(e,t)=>e?``:t?`bg-transparent`:`rounded-box border border-base-300 bg-base-100`,U=e=>l(t=>{let r=s(`span`,t);f(r,`data-rue-collapse-arrow-icon`,`true`),f(r,`aria-hidden`,`true`),n(()=>{u(r,`inline-flex size-5 items-center justify-center transition-transform duration-200 ${e.open?`rotate-90`:``}`.trim())});let a=s(`svg`,r);i(r,a),f(a,`viewBox`,`0 0 20 20`),f(a,`fill`,`none`),f(a,`stroke`,`currentColor`),f(a,`strokeWidth`,`1.8`),u(a,`size-4`);let o=s(`path`,a);return i(a,o),f(o,`strokeLinecap`,`round`),f(o,`strokeLinejoin`,`round`),f(o,`d`,`m7 4 6 6-6 6`),r}),W=e=>l(t=>{let r=s(`span`,t);f(r,`aria-hidden`,`true`),u(r,`relative inline-flex size-5 items-center justify-center`);let a=s(`span`,r);i(r,a),u(a,`absolute h-0.5 w-3 rounded-full bg-current`);let o=s(`span`,r);return i(r,o),f(o,`data-rue-collapse-plus-vertical`,`true`),n(()=>{u(o,`absolute h-3 w-0.5 rounded-full bg-current transition-opacity duration-200 ${e.open?`opacity-0`:`opacity-100`}`.trim())}),r}),G=(e,t)=>b(e===`plus`?W:U,{open:t}),K=(o,c,f,p,m)=>c==null&&f==null?o:l(h=>{let g=s(`div`,h);u(g,`flex w-full items-start justify-between gap-3`);let _=s(`div`,g);i(g,_),u(_,`min-w-0 flex-1`);let v=s(`div`,_);i(_,v);let y=t(`rue:slot:anchor`);i(v,y),n(()=>{let e=o;r(()=>d(e,v,y))});let b=t(`rue:slot:anchor`);i(_,b),n(()=>{let a=c==null?``:l(()=>{let a=e(),o=s(`div`,a);i(a,o),n(()=>{u(o,T(`mt-1 text-xs opacity-70`,p))});let l=t(`rue:slot:anchor`);return i(o,l),n(()=>{let e=c;r(()=>d(e,o,l))}),a});r(()=>d(a,_,b))});let x=t(`rue:slot:anchor`);return i(g,x),n(()=>{let o=f==null?``:l(()=>{let o=e(),c=s(`div`,o);i(o,c),n(()=>{u(c,T(`shrink-0 text-xs opacity-70`,m))}),a(c,`click`,e=>e.stopPropagation()),a(c,`keydown`,e=>e.stopPropagation());let l=t(`rue:slot:anchor`);return i(c,l),n(()=>{let e=f;r(()=>d(e,c,l))}),o});r(()=>d(o,g,x))}),g}),q=Object.assign(p=>{let{normalizedItems:m,hasItems:y,resolvedBordered:b,resolvedIcon:x,hasManagedIcon:S,generatedGroupName:C,uncontrolledOpenKeys:D,getCurrentOpenKeys:M,currentOpenKeys:N}=_(`useSetup:0:0`,()=>o(()=>{let e=p.items?.map((e,t)=>({...e,key:e.key??t,index:t,label:e.label??e.title,content:e.children??e.content}))??[],t=e.length>0,n=_(`computed:1:0`,()=>h(()=>p.bordered??t)),r=_(`computed:1:1`,()=>h(()=>P(p.icon,p.arrow,p.plus))),i=r,a=_(`computed:1:2`,()=>h(()=>p.showArrow===!1?!1:!!i.get())),o=_(`ref:1:3`,()=>g(`rue-collapse-${w++}`)),s=_(`ref:1:4`,()=>g(z(e,p.defaultActiveKey,p.accordion))),c=()=>p.activeKey===void 0?s.value:I(p.activeKey,p.accordion);return{normalizedItems:e,hasItems:t,resolvedBordered:n,resolvedIcon:r,hasManagedIcon:a,generatedGroupName:o,uncontrolledOpenKeys:s,getCurrentOpenKeys:c,currentOpenKeys:_(`computed:1:5`,()=>h(()=>c()))}}));if(y){let o=C.value,h=(e,t)=>{E(o,t).forEach(t=>{let n=m[Number(t.dataset.rueCollapseIndex)];n&&A(t,e.some(e=>e===n.key))})},g=(e,t,n)=>{let r=B(M(),e.key,t,p.accordion),i=r.some(t=>t===e.key);p.activeKey===void 0&&(D.value=r,h(r,n)),p.onChange&&p.onChange(p.accordion?r[0]??null:r,{key:e.key,index:e.index,open:i,item:e})};return l(h=>{let _=s(`div`,h);n(()=>{u(_,V(b.get(),p.ghost,p.className))});let y=t(`rue:list:start`),C=t(`rue:list:end`);i(_,y),i(_,C);let w=new Map;return n(()=>{w=v({items:m||[],getKey:(e,t)=>e.key,elements:w,parent:y.parentNode,before:C,singleRoot:!0,trackIndex:!1,start:y,renderItem:(m,h,_,v,y)=>{d(l(()=>{let h=e(),_=s(`div`,h);i(h,_),n(()=>{u(_,T(T(T(`collapse`,N.get().some(e=>e===m.key)?`collapse-open`:`collapse-close`),H(b.get(),p.ghost)),m.className))}),n(()=>{f(_,`key`,String(m.key))}),n(()=>{f(_,`data-rue-collapse-group`,String(o))}),n(()=>{f(_,`data-rue-collapse-index`,String(String(m.index)))});let v=s(`div`,_);i(_,v),n(()=>{u(v,T(T(T(`collapse-title`,L(p.size)),T(p.titleClassName,m.titleClassName)),(p.disabled||m.disabled?`disabled`:m.collapsible??p.collapsible??`header`)===`header`?`cursor-pointer select-none`:``))}),n(()=>{f(v,`aria-expanded`,String(N.get().some(e=>e===m.key)?`true`:`false`))}),n(()=>{c(v,(p.disabled||m.disabled?`disabled`:m.collapsible??p.collapsible??`header`)===`header`?{role:`button`,tabIndex:0,onClick:e=>(e=>{(p.disabled||m.disabled?`disabled`:m.collapsible??p.collapsible??`header`)!==`disabled`&&g(m,!M().some(e=>e===m.key),e)})(e.currentTarget),onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),(e=>{(p.disabled||m.disabled?`disabled`:m.collapsible??p.collapsible??`header`)!==`disabled`&&g(m,!M().some(e=>e===m.key),e)})(e.currentTarget))}}:{})});let y=s(`div`,v);i(v,y),u(y,`flex w-full items-start gap-3`);let C=t(`rue:slot:anchor`);i(y,C),n(()=>{let o=(m.showArrow??S.get())&&(m.icon??x.get())&&(p.expandIconPlacement===void 0?`end`:p.expandIconPlacement)===`start`?(p.disabled||m.disabled?`disabled`:m.collapsible??p.collapsible??`header`)===`icon`?l(()=>{let o=e(),c=s(`button`,o);i(o,c),f(c,`data-rue-collapse-icon-trigger`,`true`),f(c,`type`,`button`),n(()=>{u(c,T(`inline-flex size-7 shrink-0 self-start items-center justify-center rounded-full border border-transparent transition-colors hover:bg-base-200/70`,m.description!=null||m.extra!=null?`pt-1`:`mt-0.5`))}),n(()=>{f(c,`aria-label`,String(N.get().some(e=>e===m.key)?`收起`:`展开`))}),a(c,`click`,e=>{e.stopPropagation(),(e=>{(p.disabled||m.disabled?`disabled`:m.collapsible??p.collapsible??`header`)!==`disabled`&&g(m,!M().some(e=>e===m.key),e)})(e.currentTarget)});let l=t(`rue:slot:anchor`);return i(c,l),n(()=>{let e=G(m.icon??x.get(),N.get().some(e=>e===m.key));r(()=>d(e,c,l))}),o}):l(()=>{let a=e(),o=s(`span`,a);i(a,o),n(()=>{u(o,T(`inline-flex size-7 shrink-0 self-start items-center justify-center`,m.description!=null||m.extra!=null?`pt-1`:`mt-0.5`))});let c=t(`rue:slot:anchor`);return i(o,c),n(()=>{let e=G(m.icon??x.get(),N.get().some(e=>e===m.key));r(()=>d(e,o,c))}),a}):``;r(()=>d(o,y,C))});let w=s(`div`,y);i(y,w),u(w,`min-w-0 flex-1`);let E=t(`rue:slot:anchor`);i(w,E),n(()=>{let e=K(m.label,m.description,m.extra,m.descriptionClassName,m.extraClassName);r(()=>d(e,w,E))});let D=t(`rue:slot:anchor`);i(y,D),n(()=>{let o=(m.showArrow??S.get())&&(m.icon??x.get())&&(p.expandIconPlacement===void 0?`end`:p.expandIconPlacement)===`end`?(p.disabled||m.disabled?`disabled`:m.collapsible??p.collapsible??`header`)===`icon`?l(()=>{let o=e(),c=s(`button`,o);i(o,c),f(c,`data-rue-collapse-icon-trigger`,`true`),f(c,`type`,`button`),n(()=>{u(c,T(`inline-flex size-7 shrink-0 self-start items-center justify-center rounded-full border border-transparent transition-colors hover:bg-base-200/70`,m.description!=null||m.extra!=null?`pt-1`:`mt-0.5`))}),n(()=>{f(c,`aria-label`,String(N.get().some(e=>e===m.key)?`收起`:`展开`))}),a(c,`click`,e=>{e.stopPropagation(),(e=>{(p.disabled||m.disabled?`disabled`:m.collapsible??p.collapsible??`header`)!==`disabled`&&g(m,!M().some(e=>e===m.key),e)})(e.currentTarget)});let l=t(`rue:slot:anchor`);return i(c,l),n(()=>{let e=G(m.icon??x.get(),N.get().some(e=>e===m.key));r(()=>d(e,c,l))}),o}):l(()=>{let a=e(),o=s(`span`,a);i(a,o),n(()=>{u(o,T(`inline-flex size-7 shrink-0 self-start items-center justify-center`,m.description!=null||m.extra!=null?`pt-1`:`mt-0.5`))});let c=t(`rue:slot:anchor`);return i(o,c),n(()=>{let e=G(m.icon??x.get(),N.get().some(e=>e===m.key));r(()=>d(e,o,c))}),a}):``;r(()=>d(o,y,D))});let O=s(`div`,_);i(_,O),n(()=>{u(O,T(T(`collapse-content`,R(p.size)),T(p.contentClassName,m.contentClassName)))});let k=t(`rue:slot:anchor`);return i(O,k),n(()=>{let e=m.content;r(()=>d(e,O,k))}),h}),h,_)}})}),_})}let F=`collapse`;p.showArrow!==!1&&(p.arrow||x.get()===`arrow`)&&(F+=` collapse-arrow`),p.showArrow!==!1&&(p.plus||x.get()===`plus`)&&(F+=` collapse-plus`),p.open&&(F+=` collapse-open`),p.close&&(F+=` collapse-close`),!p.open&&!p.close&&p.defaultOpen&&(F+=` collapse-open`),p.disabled&&(F+=` opacity-70`);let U=H(!!b.get(),p.ghost);if(U&&(F+=` ${U}`),p.className&&(F+=` ${p.className}`),(p.tag===void 0?`div`:p.tag)===`details`)return l(e=>{let a=s(`details`,e);n(()=>{u(a,F)}),n(()=>{f(a,`open`,String(p.open||!p.close&&p.defaultOpen?!0:void 0))});let o=t(`rue:children:anchor`);return i(a,o),n(()=>{let e=p.children;r(()=>d(e,a,o))}),a});let W=typeof p.tabIndex==`number`?p.tabIndex:void 0,q=!!p.open||!!p.close||!!p.defaultOpen;return l(e=>{let o=s(`div`,e);n(()=>{u(o,F)}),n(()=>{f(o,`tabindex`,String(W===void 0?void 0:String(W)))}),a(o,`mousedown`,e=>{let t=e.currentTarget;t.dataset.rueCollapsePointerDown=`true`}),a(o,`click`,e=>{let t=e.currentTarget,n=e.target,r=k(t),i=O(t,n),a=n instanceof HTMLInputElement&&n===r;if(!i&&!a){delete t.dataset.rueCollapsePointerDown;return}W!==void 0&&(t.tabIndex=W,t.setAttribute(`tabindex`,String(W)),t.focus()),q||(r?(a||(r.type===`checkbox`?r.checked=!r.checked:r.type===`radio`&&(r.checked=!0)),j(t,r.checked)):j(t,!t.classList.contains(`collapse-open`))),delete t.dataset.rueCollapsePointerDown}),a(o,`focus`,e=>{if(W===void 0||q)return;let t=e.currentTarget;t.dataset.rueCollapsePointerDown!==`true`&&j(t,!0)}),a(o,`blur`,e=>{delete e.currentTarget.dataset.rueCollapsePointerDown,!(W===void 0||q)&&j(e.currentTarget,!1)}),a(o,`keydown`,e=>{if(W===void 0||q||e.key!==`Enter`&&e.key!==` `||!O(e.currentTarget,e.target))return;e.preventDefault();let t=e.currentTarget;j(t,!t.classList.contains(`collapse-open`))}),a(o,`change`,e=>{if(q)return;let t=e.target;!t||t.type!==`checkbox`&&t.type!==`radio`||j(e.currentTarget,t.checked)});let c=t(`rue:children:anchor`);return i(o,c),n(()=>{let e=p.children;r(()=>d(e,o,c))}),o})},{Title:e=>{let{cls:a,body:c}=_(`useSetup:0:0:dup1`,()=>o(()=>({cls:_(`computed:1:6`,()=>h(()=>T(`collapse-title`,e.className))),body:_(`computed:1:7`,()=>h(()=>K(e.children,e.description,e.extra,e.descriptionClassName,e.extraClassName)))})));return(e.as===void 0?`div`:e.as)===`summary`?l(e=>{let o=s(`summary`,e);n(()=>{u(o,a.get())});let l=t(`rue:slot:anchor`);return i(o,l),n(()=>{let e=c.get();r(()=>d(e,o,l))}),o}):l(e=>{let o=s(`div`,e);n(()=>{u(o,a.get())});let l=t(`rue:slot:anchor`);return i(o,l),n(()=>{let e=c.get();r(()=>d(e,o,l))}),o})},Content:e=>l(a=>{let o=s(`div`,a);n(()=>{u(o,T(`collapse-content`,e.className))});let c=t(`rue:children:anchor`);return i(o,c),n(()=>{let t=e.children;r(()=>d(t,o,c))}),o})}),J=a=>l(o=>{let c=s(`div`,o);u(c,`component-preview not-prose text-base-content my-6 lg:my-12`);let f=s(`div`,c);i(c,f);let h=s(`h3`,f);i(f,h),u(h,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(h,m(`# `));let g=t(`rue:slot:anchor`);i(h,g),n(()=>{let e=a.title;r(()=>d(e,h,g))});let _=t(`rue:slot:anchor`);i(f,_),n(()=>{let o=a.summary?l(()=>{let o=e(),c=s(`p`,o);i(o,c),u(c,`m-0 text-sm opacity-70`);let l=t(`rue:slot:anchor`);return i(c,l),n(()=>{let e=a.summary;r(()=>d(e,c,l))}),o}):``;r(()=>d(o,f,_))});let v=t(`rue:component:anchor`);i(c,v),n(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:a.tab.value,onChange:e=>a.tab.value=e,className:`mb-3 mt-4`});r(()=>d(e,c,v))});let y=t(`rue:slot:anchor`);return i(c,y),n(()=>{let o=a.tab.value===`preview`?a.preview():l(()=>{let o=e(),s=t(`rue:component:anchor`);return i(o,s),n(()=>{let e=p(x,{className:`mt-2`,lang:`tsx`,code:a.code});r(()=>d(e,o,s))}),o});r(()=>d(o,c,y))}),c}),Y=a=>l(o=>{let c=s(`div`,o);u(c,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let p=s(`table`,c);i(c,p),u(p,`table table-zebra`);let h=s(`thead`,p);i(p,h);let g=s(`tr`,h);i(h,g);let _=s(`th`,g);i(g,_),i(_,m(`属性`));let y=s(`th`,g);i(g,y),i(y,m(`说明`));let b=s(`th`,g);i(g,b),i(b,m(`类型`));let x=s(`th`,g);i(g,x),i(x,m(`默认值`));let S=s(`tbody`,p);i(p,S);let C=t(`rue:list:start`),w=t(`rue:list:end`);i(S,C),i(S,w);let T=new Map;return n(()=>{T=v({items:a.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(a,o,c,u,p)=>{d(l(()=>{let o=e(),c=s(`tr`,o);i(o,c),n(()=>{f(c,`key`,String(a.prop))});let l=s(`td`,c);i(c,l);let u=s(`code`,l);i(l,u);let p=t(`rue:slot:anchor`);i(u,p),n(()=>{let e=a.prop;r(()=>d(e,u,p))});let m=s(`td`,c);i(c,m);let h=t(`rue:slot:anchor`);i(m,h),n(()=>{let e=a.description;r(()=>d(e,m,h))});let g=s(`td`,c);i(c,g);let _=s(`code`,g);i(g,_);let v=t(`rue:slot:anchor`);i(_,v),n(()=>{let e=a.type;r(()=>d(e,_,v))});let y=s(`td`,c);i(c,y);let b=s(`code`,y);i(y,b);let x=t(`rue:slot:anchor`);return i(b,x),n(()=>{let e=a.defaultValue;r(()=>d(e,b,x))}),o}),o,c)}})}),c}),ee=[{prop:`items`,description:`数据驱动的折叠面板列表`,type:`CollapseItem[]`,defaultValue:`-`},{prop:`activeKey`,description:`受控展开项；accordion 模式下可传单值`,type:`string | number | Array<string | number>`,defaultValue:`-`},{prop:`defaultActiveKey`,description:`非受控默认展开项`,type:`string | number | Array<string | number>`,defaultValue:`-`},{prop:`accordion`,description:`是否只允许同时展开一项`,type:`boolean`,defaultValue:`false`},{prop:`bordered`,description:`是否使用分组边框容器`,type:`boolean`,defaultValue:`items 模式默认 true`},{prop:`ghost`,description:`是否使用透明背景`,type:`boolean`,defaultValue:`false`},{prop:`size`,description:`标题与内容尺寸`,type:`'sm' | 'md' | 'lg'`,defaultValue:`'md'`},{prop:`expandIconPlacement`,description:`展开图标位置`,type:`'start' | 'end'`,defaultValue:`'end'`},{prop:`onChange`,description:`items 模式切换时触发，返回下一个展开 key`,type:`(nextValue, context) => void`,defaultValue:`-`},{prop:`tag`,description:`兼容旧写法的根标签切换`,type:`'div' | 'details'`,defaultValue:`'div'`}],te=[{prop:`key`,description:`面板唯一标识`,type:`string | number`,defaultValue:`索引值`},{prop:`label`,description:`标题内容，兼容 title 别名`,type:`any`,defaultValue:`-`},{prop:`children`,description:`面板内容，兼容 content 别名`,type:`any`,defaultValue:`-`},{prop:`description`,description:`标题下方的说明文案`,type:`any`,defaultValue:`-`},{prop:`extra`,description:`标题右侧附加区域，不触发展开`,type:`any`,defaultValue:`-`},{prop:`showArrow`,description:`是否显示展开图标`,type:`boolean`,defaultValue:`继承父级`},{prop:`collapsible`,description:`触发区域控制`,type:`'header' | 'icon' | 'disabled'`,defaultValue:`'header'`},{prop:`disabled`,description:`禁用当前项交互`,type:`boolean`,defaultValue:`false`},{prop:`open`,description:`非受控初始展开`,type:`boolean`,defaultValue:`false`}],X=()=>{let{tabItemsBasic:a,tabAccordion:c,tabMeta:f,tabPlacement:h,tabGhost:v,tabControlled:x,tabFocus:S,tabCheckbox:w,tabDetails:T,tabNoBorder:E,tabArrow:D,tabPlus:O,tabIconStart:k,tabOpen:A,tabClose:j,tabCustomFocus:M,tabCustomCheckbox:N,controlledKeys:P,accordionKey:F}=_(`useSetup:0:0`,()=>o(()=>({tabItemsBasic:_(`ref:1:0`,()=>g(`preview`)),tabAccordion:_(`ref:1:1`,()=>g(`preview`)),tabMeta:_(`ref:1:2`,()=>g(`preview`)),tabPlacement:_(`ref:1:3`,()=>g(`preview`)),tabGhost:_(`ref:1:4`,()=>g(`preview`)),tabControlled:_(`ref:1:5`,()=>g(`preview`)),tabFocus:_(`ref:1:6`,()=>g(`preview`)),tabCheckbox:_(`ref:1:7`,()=>g(`preview`)),tabDetails:_(`ref:1:8`,()=>g(`preview`)),tabNoBorder:_(`ref:1:9`,()=>g(`preview`)),tabArrow:_(`ref:1:10`,()=>g(`preview`)),tabPlus:_(`ref:1:11`,()=>g(`preview`)),tabIconStart:_(`ref:1:12`,()=>g(`preview`)),tabOpen:_(`ref:1:13`,()=>g(`preview`)),tabClose:_(`ref:1:14`,()=>g(`preview`)),tabCustomFocus:_(`ref:1:15`,()=>g(`preview`)),tabCustomCheckbox:_(`ref:1:16`,()=>g(`preview`)),controlledKeys:_(`ref:1:17`,()=>g([`release`])),accordionKey:_(`ref:1:18`,()=>g(`guide`))})));return l(o=>{let g=e(),_=t(`rue:component:anchor`);return i(g,_),d(p(C,{children:l(()=>{let o=e(),l=s(`div`,o);i(o,l),u(l,`max-w-none prose prose-sm md:prose-base`);let g=s(`h1`,l);i(l,g),i(g,m(`Collapse 折叠面板`));let _=s(`p`,l);i(l,_),u(_,`mt-3 mb-3 text-sm`),i(_,m("保留 Rue 原本基于 daisyUI 的视觉语言，并在此基础上补齐 `items`、accordion、 `activeKey`、`extra`、`description`、尺寸与图标位置等增强能力。"));let C=s(`h2`,l);i(l,C),i(C,m(`增强 API`));let I=s(`p`,l);i(l,I),u(I,`text-sm opacity-80`),i(I,m("优先面向 `items` 数据驱动用法，组织方式贴近常见业务组件，但保留 Rue 视觉风格。"));let L=t(`rue:component:anchor`);i(l,L),n(()=>{let e=p(J,{title:`Items 基础用法`,summary:`直接通过 items 渲染多项折叠面板，并默认使用带边框的分组容器。`,tab:a,preview:()=>b(q,{arrow:!0,defaultActiveKey:[`overview`],items:[{key:`overview`,label:`Overview`,children:`汇总版本亮点、上线范围与回滚策略，适合用作页面最上方的信息概览。`},{key:`release`,label:`Release Checklist`,children:`确认灰度开关、日志埋点、告警阈值与发布窗口已经准备完毕。`},{key:`faq`,label:`FAQ`,children:`常见问题、风险提示和升级说明也可以继续放进同一个折叠组。`}]}),code:`<Collapse
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
/>`});r(()=>d(e,l,L))});let R=t(`rue:component:anchor`);i(l,R),n(()=>{let e=p(J,{title:`Accordion`,summary:`使用 accordion 改成一次只展开一项，并结合受控 key 管理当前面板。`,tab:c,preview:()=>y(`div`,{className:`space-y-4`,children:[y(`div`,{className:`flex flex-wrap gap-2`,children:[b(`button`,{className:`btn btn-sm`,onClick:()=>F.value=`guide`,children:`打开 Guide`}),b(`button`,{className:`btn btn-sm`,onClick:()=>F.value=`api`,children:`打开 API`}),b(`button`,{className:`btn btn-sm btn-ghost`,onClick:()=>F.value=null,children:`全部收起`})]}),b(q,{accordion:!0,plus:!0,activeKey:F.value,onChange:e=>F.value=e??null,items:[{key:`guide`,label:`Migration Guide`,children:`梳理 breaking changes、默认行为差异与升级建议。`},{key:`api`,label:`API Delta`,children:`列出新增属性、弃用写法与向后兼容策略。`},{key:`qa`,label:`QA Notes`,children:`补充测试范围、回归清单和已知限制。`}]})]}),code:`const activeKey = ref<string | null>('guide')

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
/>`});r(()=>d(e,l,R))});let z=t(`rue:component:anchor`);i(l,z),n(()=>{let e=p(J,{title:`描述与额外操作`,summary:`每一项可带 description、extra 和独立禁用状态，extra 区域点击不会触发展开。`,tab:f,preview:()=>b(q,{arrow:!0,defaultActiveKey:[`ops`],items:[{key:`ops`,label:`Ops Console`,description:`控制发布节奏、灰度范围与告警阈值。`,extra:b(`span`,{className:`badge badge-soft badge-info`,children:`Beta`}),children:`适合放置运维策略、SLA 约束和异常回滚说明。`},{key:`billing`,label:`Billing Center`,description:`当前模块仍在迁移，暂不开放编辑。`,extra:b(`span`,{className:`badge badge-soft`,children:`Read only`}),disabled:!0,children:`禁用项会保留信息展示，但不响应交互。`}]}),code:`<Collapse
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
/>`});r(()=>d(e,l,z))});let B=t(`rue:component:anchor`);i(l,B),n(()=>{let e=p(J,{title:`图标位置与触发区域`,summary:`支持把图标放在左侧，并限制只有图标本身可触发开合。`,tab:h,preview:()=>b(q,{arrow:!0,expandIconPlacement:`start`,items:[{key:`deployment`,label:`Deployment Window`,description:`只有左侧图标可点击，标题区更适合放长文本说明。`,collapsible:`icon`,children:`当标题里还有链接、状态或操作说明时，这个模式会更稳妥。`},{key:`security`,label:`Security Review`,description:`保持默认 header 触发，图标只是视觉反馈。`,children:`适合和 icon-only 模式混合使用。`}]}),code:`<Collapse
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
/>`});r(()=>d(e,l,B))});let V=t(`rue:component:anchor`);i(l,V),n(()=>{let e=p(J,{title:`Ghost 与无边框`,summary:`不想用分组边框时，可以关闭 bordered，再按需开启 ghost。`,tab:v,preview:()=>b(q,{arrow:!0,bordered:!1,ghost:!0,className:`space-y-3`,defaultActiveKey:[`design`],items:[{key:`design`,label:`Design Tokens`,children:`透明背景更适合嵌在卡片、侧栏或深色容器中。`},{key:`theme`,label:`Theme Sync`,children:`可继续叠加自定义类名，让容器完全交给外层布局控制。`}]}),code:`<Collapse
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
/>`});r(()=>d(e,l,V))});let H=t(`rue:component:anchor`);i(l,H),n(()=>{let e=p(J,{title:`尺寸与受控多开`,summary:`size 会统一影响标题和内容尺寸；非 accordion 模式可同时展开多项。`,tab:x,preview:()=>y(`div`,{className:`space-y-4`,children:[y(`div`,{className:`flex flex-wrap gap-2`,children:[b(`button`,{className:`btn btn-sm`,onClick:()=>P.value=[`release`],children:`仅展开 Release`}),b(`button`,{className:`btn btn-sm`,onClick:()=>P.value=[`release`,`notes`],children:`展开两项`}),b(`button`,{className:`btn btn-sm btn-ghost`,onClick:()=>P.value=[],children:`全部收起`})]}),b(q,{plus:!0,size:`lg`,activeKey:P.value,onChange:e=>P.value=e??[],items:[{key:`release`,label:`Release Plan`,children:`大尺寸适合在信息层级较重的管理页或文档页中使用。`},{key:`notes`,label:`Release Notes`,children:`多开模式下可以把相邻的几块信息一起展开对照查看。`},{key:`rollback`,label:`Rollback`,children:`受控模式更方便和 URL、筛选器或外部按钮联动。`}]})]}),code:`const openKeys = ref<string[]>(['release'])

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
/>`});r(()=>d(e,l,H))});let U=t(`rue:component:anchor`);i(l,U),n(()=>{let e=p(J,{title:`Collapse with focus`,summary:`聚焦时展开、失焦时关闭，同时也支持重复点击标题切换开合。`,tab:S,preview:()=>y(q,{tabIndex:0,className:`bg-base-100 border border-base-300`,children:[b(q.Title,{className:`font-semibold`,children:`How do I create an account?`}),b(q.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0} className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});r(()=>d(e,l,U))});let W=t(`rue:component:anchor`);i(l,W),n(()=>{let e=p(J,{title:`Collapse with checkbox`,summary:`使用复选框控制展开与关闭，并支持重复点击标题切换。`,tab:w,preview:()=>y(q,{className:`bg-base-100 border border-base-300`,children:[b(`input`,{type:`checkbox`}),b(q.Title,{className:`font-semibold`,children:`How do I create an account?`}),b(q.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse className="bg-base-100 border border-base-300">
  <input type="checkbox" />
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});r(()=>d(e,l,W))});let G=t(`rue:component:anchor`);i(l,G),n(()=>{let e=p(J,{title:`Collapse using details and summary tag`,summary:`使用 details/summary 标签。`,tab:T,preview:()=>y(q,{tag:`details`,className:`bg-base-100 border border-base-300`,children:[b(q.Title,{as:`summary`,className:`font-semibold`,children:`How do I create an account?`}),b(q.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tag="details" className="bg-base-100 border border-base-300">
  <Collapse.Title as="summary" className="font-semibold">
    How do I create an account?
  </Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});r(()=>d(e,l,G))});let K=t(`rue:component:anchor`);i(l,K),n(()=>{let e=p(J,{title:`Without border and background color`,tab:E,preview:()=>y(q,{tabIndex:0,children:[b(q.Title,{className:`font-semibold`,children:`How do I create an account?`}),b(q.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0}>
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});r(()=>d(e,l,K))});let X=t(`rue:component:anchor`);i(l,X),n(()=>{let e=p(J,{title:`With arrow icon`,tab:D,preview:()=>y(q,{tabIndex:0,arrow:!0,className:`bg-base-100 border border-base-300`,children:[b(q.Title,{className:`font-semibold`,children:`How do I create an account?`}),b(q.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0} arrow className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});r(()=>d(e,l,X))});let Z=t(`rue:component:anchor`);i(l,Z),n(()=>{let e=p(J,{title:`With plus/minus icon`,tab:O,preview:()=>y(q,{tabIndex:0,plus:!0,className:`bg-base-100 border border-base-300`,children:[b(q.Title,{className:`font-semibold`,children:`How do I create an account?`}),b(q.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0} plus className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});r(()=>d(e,l,Z))});let Q=t(`rue:component:anchor`);i(l,Q),n(()=>{let e=p(J,{title:`Moving collapse icon to the start`,summary:`通过 utility 类移动图标位置，并保留标题区重复点击切换能力。`,tab:k,preview:()=>y(q,{tabIndex:0,arrow:!0,className:`bg-base-100 border border-base-300`,children:[b(q.Title,{className:`font-semibold after:start-5 after:end-auto pe-4 ps-12`,children:`How do I create an account?`}),b(q.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0} arrow className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold after:start-5 after:end-auto pe-4 ps-12">
    How do I create an account?
  </Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});r(()=>d(e,l,Q))});let $=t(`rue:component:anchor`);i(l,$),n(()=>{let e=p(J,{title:`Force open`,tab:A,preview:()=>y(q,{tabIndex:0,open:!0,className:`bg-base-100 border border-base-300`,children:[b(q.Title,{className:`font-semibold`,children:`I have collapse-open class`}),b(q.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0} open className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold">I have collapse-open class</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});r(()=>d(e,l,$))});let ne=t(`rue:component:anchor`);i(l,ne),n(()=>{let e=p(J,{title:`Force close`,tab:j,preview:()=>y(q,{tabIndex:0,close:!0,className:`bg-base-100 border border-base-300`,children:[b(q.Title,{className:`font-semibold`,children:`I have collapse-close class`}),b(q.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0} close className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold">I have collapse-close class</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});r(()=>d(e,l,ne))});let re=t(`rue:component:anchor`);i(l,re),n(()=>{let e=p(J,{title:`Custom colors for collapse that works with focus`,summary:`通过 focus 触发颜色变化。`,tab:M,preview:()=>y(q,{tabIndex:0,className:`bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content`,children:[b(q.Title,{className:`font-semibold`,children:`How do I create an account?`}),b(q.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse
  tabIndex={0}
  className="bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content"
>
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});r(()=>d(e,l,re))});let ie=t(`rue:component:anchor`);i(l,ie),n(()=>{let e=p(J,{title:`Custom colors for collapse that works with checkbox`,summary:`通过 peer/peer-checked 触发颜色变化，并支持重复点击标题切换。`,tab:N,preview:()=>y(q,{className:`bg-base-100 border border-base-300`,children:[b(`input`,{type:`checkbox`,className:`peer`}),b(q.Title,{className:`bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content font-semibold`,children:`How do I create an account?`}),b(q.Content,{className:`bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse className="bg-base-100 border border-base-300">
  <input type="checkbox" className="peer" />
  <Collapse.Title className="bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content font-semibold">
    How do I create an account?
  </Collapse.Title>
  <Collapse.Content className="bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});r(()=>d(e,l,ie))});let ae=s(`h2`,l);i(l,ae),i(ae,m(`API`));let oe=s(`h3`,l);i(l,oe),i(oe,m(`Collapse`));let se=t(`rue:component:anchor`);i(l,se),n(()=>{let e=p(Y,{rows:ee});r(()=>d(e,l,se))});let ce=s(`h3`,l);i(l,ce),i(ce,m(`CollapseItem`));let le=t(`rue:component:anchor`);return i(l,le),n(()=>{let e=p(Y,{rows:te});r(()=>d(e,l,le))}),o})}),g,_),g})};export{X as default};