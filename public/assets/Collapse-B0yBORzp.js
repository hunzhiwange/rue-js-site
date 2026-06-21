import{$t as e,Jt as t,Q as n,St as r,Z as i,dt as a,et as o,in as s,l as c,lt as l,nt as u,o as d,rt as f,t as p,tt as m,yt as h,zt as g}from"./vapor-runtime-DsQWl-IB.js";import{a as _,n as v}from"./vapor-helpers-vapor-Dg64FcpK.js";import{a as y,i as b}from"./persistentSidebarPlayground-6jqnvaEa.js";import{t as x}from"./Code-4SUSUwRg.js";import{t as S}from"./tabs-Duzh3URW.js";import{r as C}from"./SidebarPlaygroundDesign-EU389JDE.js";var w=0,T=(e,t)=>e?t?`${e} ${t}`:e:t??``,E=(e,t)=>{let n=t?.getRootNode?.(),r=n&&typeof n.querySelectorAll==`function`?n:typeof document<`u`?document:null;return r?Array.from(r.querySelectorAll(`[data-rue-collapse-group]`)).filter(t=>t.dataset.rueCollapseGroup===e):[]},D=e=>Array.from(e.children).find(e=>e instanceof HTMLElement&&e.classList.contains(`collapse-title`)),O=(e,t)=>t instanceof Node?!!D(e)?.contains(t):!1,k=e=>Array.from(e.children).find(e=>e instanceof HTMLInputElement&&(e.type===`checkbox`||e.type===`radio`)),A=(e,t)=>{if(!(e instanceof HTMLElement))return;e.classList.remove(`collapse-open`,`collapse-close`),e.classList.add(t?`collapse-open`:`collapse-close`);let n=D(e);n&&n.setAttribute(`aria-expanded`,t?`true`:`false`);let r=e.querySelector(`[data-rue-collapse-arrow-icon]`);r&&r.classList.toggle(`rotate-90`,t);let i=e.querySelector(`[data-rue-collapse-plus-vertical]`);i&&(i.classList.remove(`opacity-0`,`opacity-100`),i.classList.add(t?`opacity-0`:`opacity-100`));let a=e.querySelector(`[data-rue-collapse-icon-trigger]`);a&&a.setAttribute(`aria-label`,t?`收起`:`展开`)},j=(e,t)=>{e.classList.remove(`collapse-open`,`collapse-close`),e.classList.add(t?`collapse-open`:`collapse-close`);let n=D(e);n&&n.setAttribute(`aria-expanded`,t?`true`:`false`)},M=e=>{let t=[];return e.forEach(e=>{t.some(t=>t===e)||t.push(e)}),t},N=e=>{switch(e){case`small`:return`sm`;case`middle`:return`md`;case`large`:return`lg`;default:return e}},P=(e,t,n)=>{if(e)return e;if(n)return`plus`;if(t)return`arrow`},F=e=>Array.isArray(e)?e:e==null?[]:[e],I=(e,t)=>{let n=M(F(e));return t?n.slice(0,1):n},L=e=>{switch(N(e)){case`sm`:return`min-h-0 py-3 text-sm`;case`lg`:return`min-h-0 py-5 text-lg`;default:return``}},R=e=>{switch(N(e)){case`sm`:return`pt-0 pb-3 text-sm`;case`lg`:return`pt-0 pb-5 text-base`;default:return``}},z=(e,t,n)=>I(t===void 0?e.filter(e=>e.open).map(e=>e.key):t,n),B=(e,t,n,r)=>r?n?[t]:[]:n?M([...e,t]):e.filter(e=>e!==t),V=(e,t,n)=>{let r=e?`overflow-hidden rounded-box border border-base-300 bg-base-100 divide-y divide-base-300`:`space-y-3`;return t&&(r+=` bg-transparent`),T(r,n)},H=(e,t)=>e?``:t?`bg-transparent`:`rounded-box border border-base-300 bg-base-100`,U=e=>c(t=>{let r=u(`span`,t);l(r,`data-rue-collapse-arrow-icon`,`true`),l(r,`aria-hidden`,`true`),g(()=>{a(r,`inline-flex size-5 items-center justify-center transition-transform duration-200 ${e.open?`rotate-90`:``}`.trim())});let i=u(`svg`,r);n(r,i),l(i,`viewBox`,`0 0 20 20`),l(i,`fill`,`none`),l(i,`stroke`,`currentColor`),l(i,`strokeWidth`,`1.8`),a(i,`size-4`);let o=u(`path`,i);return n(i,o),l(o,`strokeLinecap`,`round`),l(o,`strokeLinejoin`,`round`),l(o,`d`,`m7 4 6 6-6 6`),r}),W=e=>c(t=>{let r=u(`span`,t);l(r,`aria-hidden`,`true`),a(r,`relative inline-flex size-5 items-center justify-center`);let i=u(`span`,r);n(r,i),a(i,`absolute h-0.5 w-3 rounded-full bg-current`);let o=u(`span`,r);return n(r,o),l(o,`data-rue-collapse-plus-vertical`,`true`),g(()=>{a(o,`absolute h-3 w-0.5 rounded-full bg-current transition-opacity duration-200 ${e.open?`opacity-0`:`opacity-100`}`.trim())}),r}),G=(e,t)=>b(e===`plus`?W:U,{open:t}),K=(t,r,s,l,f)=>r==null&&s==null?t:c(p=>{let h=u(`div`,p);a(h,`flex w-full items-start justify-between gap-3`);let _=u(`div`,h);n(h,_),a(_,`min-w-0 flex-1`);let v=u(`div`,_);n(_,v);let y=o(`rue:slot:anchor`);n(v,y),g(()=>{let n=t;e(()=>d(n,v,y))});let b=o(`rue:slot:anchor`);n(_,b),g(()=>{let t=r==null?``:c(()=>{let t=m(),i=u(`div`,t);n(t,i),g(()=>{a(i,T(`mt-1 text-xs opacity-70`,l))});let s=o(`rue:slot:anchor`);return n(i,s),g(()=>{let t=r;e(()=>d(t,i,s))}),t});e(()=>d(t,_,b))});let x=o(`rue:slot:anchor`);return n(h,x),g(()=>{let t=s==null?``:c(()=>{let t=m(),r=u(`div`,t);n(t,r),g(()=>{a(r,T(`shrink-0 text-xs opacity-70`,f))}),i(r,`click`,e=>e.stopPropagation()),i(r,`keydown`,e=>e.stopPropagation());let c=o(`rue:slot:anchor`);return n(r,c),g(()=>{let t=s;e(()=>d(t,r,c))}),t});e(()=>d(t,h,x))}),h}),q=Object.assign(f=>{let{normalizedItems:p,hasItems:y,resolvedBordered:b,resolvedIcon:x,hasManagedIcon:S,generatedGroupName:C,uncontrolledOpenKeys:D,getCurrentOpenKeys:M,currentOpenKeys:N}=_(`useSetup:0:0`,()=>s(()=>{let e=f.items?.map((e,t)=>({...e,key:e.key??t,index:t,label:e.label??e.title,content:e.children??e.content}))??[],n=e.length>0,i=_(`computed:1:0`,()=>r(()=>f.bordered??n)),a=_(`computed:1:1`,()=>r(()=>P(f.icon,f.arrow,f.plus))),o=a,s=_(`computed:1:2`,()=>r(()=>f.showArrow===!1?!1:!!o.get())),c=_(`ref:1:3`,()=>t(`rue-collapse-${w++}`)),l=_(`ref:1:4`,()=>t(z(e,f.defaultActiveKey,f.accordion))),u=()=>f.activeKey===void 0?l.value:I(f.activeKey,f.accordion);return{normalizedItems:e,hasItems:n,resolvedBordered:i,resolvedIcon:a,hasManagedIcon:s,generatedGroupName:c,uncontrolledOpenKeys:l,getCurrentOpenKeys:u,currentOpenKeys:_(`computed:1:5`,()=>r(()=>u()))}}));if(y){let t=C.value,r=(e,n)=>{E(t,n).forEach(t=>{let n=p[Number(t.dataset.rueCollapseIndex)];n&&A(t,e.some(e=>e===n.key))})},s=(e,t,n)=>{let i=B(M(),e.key,t,f.accordion),a=i.some(t=>t===e.key);f.activeKey===void 0&&(D.value=i,r(i,n)),f.onChange&&f.onChange(f.accordion?i[0]??null:i,{key:e.key,index:e.index,open:a,item:e})};return c(r=>{let _=u(`div`,r);g(()=>{a(_,V(b.get(),f.ghost,f.className))});let y=o(`rue:list:start`),C=o(`rue:list:end`);n(_,y),n(_,C);let w=new Map;return g(()=>{w=v({items:p||[],getKey:(e,t)=>e.key,elements:w,parent:y.parentNode,before:C,singleRoot:!0,trackIndex:!1,start:y,renderItem:(r,p,_,v,y)=>{d(c(()=>{let p=m(),_=u(`div`,p);n(p,_),g(()=>{a(_,T(T(T(`collapse`,N.get().some(e=>e===r.key)?`collapse-open`:`collapse-close`),H(b.get(),f.ghost)),r.className))}),g(()=>{l(_,`key`,String(r.key))}),g(()=>{l(_,`data-rue-collapse-group`,String(t))}),g(()=>{l(_,`data-rue-collapse-index`,String(String(r.index)))});let v=u(`div`,_);n(_,v),g(()=>{a(v,T(T(T(`collapse-title`,L(f.size)),T(f.titleClassName,r.titleClassName)),(f.disabled||r.disabled?`disabled`:r.collapsible??f.collapsible??`header`)===`header`?`cursor-pointer select-none`:``))}),g(()=>{l(v,`aria-expanded`,String(N.get().some(e=>e===r.key)?`true`:`false`))}),g(()=>{h(v,(f.disabled||r.disabled?`disabled`:r.collapsible??f.collapsible??`header`)===`header`?{role:`button`,tabIndex:0,onClick:e=>(e=>{(f.disabled||r.disabled?`disabled`:r.collapsible??f.collapsible??`header`)!==`disabled`&&s(r,!M().some(e=>e===r.key),e)})(e.currentTarget),onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),(e=>{(f.disabled||r.disabled?`disabled`:r.collapsible??f.collapsible??`header`)!==`disabled`&&s(r,!M().some(e=>e===r.key),e)})(e.currentTarget))}}:{})});let y=u(`div`,v);n(v,y),a(y,`flex w-full items-start gap-3`);let C=o(`rue:slot:anchor`);n(y,C),g(()=>{let t=(r.showArrow??S.get())&&(r.icon??x.get())&&(f.expandIconPlacement===void 0?`end`:f.expandIconPlacement)===`start`?(f.disabled||r.disabled?`disabled`:r.collapsible??f.collapsible??`header`)===`icon`?c(()=>{let t=m(),c=u(`button`,t);n(t,c),l(c,`data-rue-collapse-icon-trigger`,`true`),l(c,`type`,`button`),g(()=>{a(c,T(`inline-flex size-7 shrink-0 self-start items-center justify-center rounded-full border border-transparent transition-colors hover:bg-base-200/70`,r.description!=null||r.extra!=null?`pt-1`:`mt-0.5`))}),g(()=>{l(c,`aria-label`,String(N.get().some(e=>e===r.key)?`收起`:`展开`))}),i(c,`click`,e=>{e.stopPropagation(),(e=>{(f.disabled||r.disabled?`disabled`:r.collapsible??f.collapsible??`header`)!==`disabled`&&s(r,!M().some(e=>e===r.key),e)})(e.currentTarget)});let p=o(`rue:slot:anchor`);return n(c,p),g(()=>{let t=G(r.icon??x.get(),N.get().some(e=>e===r.key));e(()=>d(t,c,p))}),t}):c(()=>{let t=m(),i=u(`span`,t);n(t,i),g(()=>{a(i,T(`inline-flex size-7 shrink-0 self-start items-center justify-center`,r.description!=null||r.extra!=null?`pt-1`:`mt-0.5`))});let s=o(`rue:slot:anchor`);return n(i,s),g(()=>{let t=G(r.icon??x.get(),N.get().some(e=>e===r.key));e(()=>d(t,i,s))}),t}):``;e(()=>d(t,y,C))});let w=u(`div`,y);n(y,w),a(w,`min-w-0 flex-1`);let E=o(`rue:slot:anchor`);n(w,E),g(()=>{let t=K(r.label,r.description,r.extra,r.descriptionClassName,r.extraClassName);e(()=>d(t,w,E))});let D=o(`rue:slot:anchor`);n(y,D),g(()=>{let t=(r.showArrow??S.get())&&(r.icon??x.get())&&(f.expandIconPlacement===void 0?`end`:f.expandIconPlacement)===`end`?(f.disabled||r.disabled?`disabled`:r.collapsible??f.collapsible??`header`)===`icon`?c(()=>{let t=m(),c=u(`button`,t);n(t,c),l(c,`data-rue-collapse-icon-trigger`,`true`),l(c,`type`,`button`),g(()=>{a(c,T(`inline-flex size-7 shrink-0 self-start items-center justify-center rounded-full border border-transparent transition-colors hover:bg-base-200/70`,r.description!=null||r.extra!=null?`pt-1`:`mt-0.5`))}),g(()=>{l(c,`aria-label`,String(N.get().some(e=>e===r.key)?`收起`:`展开`))}),i(c,`click`,e=>{e.stopPropagation(),(e=>{(f.disabled||r.disabled?`disabled`:r.collapsible??f.collapsible??`header`)!==`disabled`&&s(r,!M().some(e=>e===r.key),e)})(e.currentTarget)});let p=o(`rue:slot:anchor`);return n(c,p),g(()=>{let t=G(r.icon??x.get(),N.get().some(e=>e===r.key));e(()=>d(t,c,p))}),t}):c(()=>{let t=m(),i=u(`span`,t);n(t,i),g(()=>{a(i,T(`inline-flex size-7 shrink-0 self-start items-center justify-center`,r.description!=null||r.extra!=null?`pt-1`:`mt-0.5`))});let s=o(`rue:slot:anchor`);return n(i,s),g(()=>{let t=G(r.icon??x.get(),N.get().some(e=>e===r.key));e(()=>d(t,i,s))}),t}):``;e(()=>d(t,y,D))});let O=u(`div`,_);n(_,O),g(()=>{a(O,T(T(`collapse-content`,R(f.size)),T(f.contentClassName,r.contentClassName)))});let k=o(`rue:slot:anchor`);return n(O,k),g(()=>{let t=r.content;e(()=>d(t,O,k))}),p}),p,_)}})}),_})}let F=`collapse`;f.showArrow!==!1&&(f.arrow||x.get()===`arrow`)&&(F+=` collapse-arrow`),f.showArrow!==!1&&(f.plus||x.get()===`plus`)&&(F+=` collapse-plus`),f.open&&(F+=` collapse-open`),f.close&&(F+=` collapse-close`),!f.open&&!f.close&&f.defaultOpen&&(F+=` collapse-open`),f.disabled&&(F+=` opacity-70`);let U=H(!!b.get(),f.ghost);if(U&&(F+=` ${U}`),f.className&&(F+=` ${f.className}`),(f.tag===void 0?`div`:f.tag)===`details`)return c(t=>{let r=u(`details`,t);g(()=>{a(r,F)}),g(()=>{l(r,`open`,String(f.open||!f.close&&f.defaultOpen?!0:void 0))});let i=o(`rue:children:anchor`);return n(r,i),g(()=>{let t=f.children;e(()=>d(t,r,i))}),r});let W=typeof f.tabIndex==`number`?f.tabIndex:void 0,q=!!f.open||!!f.close||!!f.defaultOpen;return c(t=>{let r=u(`div`,t);g(()=>{a(r,F)}),g(()=>{l(r,`tabindex`,String(W===void 0?void 0:String(W)))}),i(r,`mousedown`,e=>{let t=e.currentTarget;t.dataset.rueCollapsePointerDown=`true`}),i(r,`click`,e=>{let t=e.currentTarget,n=e.target,r=k(t),i=O(t,n),a=n instanceof HTMLInputElement&&n===r;if(!i&&!a){delete t.dataset.rueCollapsePointerDown;return}W!==void 0&&(t.tabIndex=W,t.setAttribute(`tabindex`,String(W)),t.focus()),q||(r?(a||(r.type===`checkbox`?r.checked=!r.checked:r.type===`radio`&&(r.checked=!0)),j(t,r.checked)):j(t,!t.classList.contains(`collapse-open`))),delete t.dataset.rueCollapsePointerDown}),i(r,`focus`,e=>{if(W===void 0||q)return;let t=e.currentTarget;t.dataset.rueCollapsePointerDown!==`true`&&j(t,!0)}),i(r,`blur`,e=>{delete e.currentTarget.dataset.rueCollapsePointerDown,!(W===void 0||q)&&j(e.currentTarget,!1)}),i(r,`keydown`,e=>{if(W===void 0||q||e.key!==`Enter`&&e.key!==` `||!O(e.currentTarget,e.target))return;e.preventDefault();let t=e.currentTarget;j(t,!t.classList.contains(`collapse-open`))}),i(r,`change`,e=>{if(q)return;let t=e.target;!t||t.type!==`checkbox`&&t.type!==`radio`||j(e.currentTarget,t.checked)});let s=o(`rue:children:anchor`);return n(r,s),g(()=>{let t=f.children;e(()=>d(t,r,s))}),r})},{Title:t=>{let{cls:i,body:l}=_(`useSetup:0:0:dup1`,()=>s(()=>({cls:_(`computed:1:6`,()=>r(()=>T(`collapse-title`,t.className))),body:_(`computed:1:7`,()=>r(()=>K(t.children,t.description,t.extra,t.descriptionClassName,t.extraClassName)))})));return(t.as===void 0?`div`:t.as)===`summary`?c(t=>{let r=u(`summary`,t);g(()=>{a(r,i.get())});let s=o(`rue:slot:anchor`);return n(r,s),g(()=>{let t=l.get();e(()=>d(t,r,s))}),r}):c(t=>{let r=u(`div`,t);g(()=>{a(r,i.get())});let s=o(`rue:slot:anchor`);return n(r,s),g(()=>{let t=l.get();e(()=>d(t,r,s))}),r})},Content:t=>c(r=>{let i=u(`div`,r);g(()=>{a(i,T(`collapse-content`,t.className))});let s=o(`rue:children:anchor`);return n(i,s),g(()=>{let n=t.children;e(()=>d(n,i,s))}),i})}),J=t=>c(r=>{let i=u(`div`,r);a(i,`component-preview not-prose text-base-content my-6 lg:my-12`);let s=u(`div`,i);n(i,s);let l=u(`h3`,s);n(s,l),a(l,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(l,f(`# `));let h=o(`rue:slot:anchor`);n(l,h),g(()=>{let n=t.title;e(()=>d(n,l,h))});let _=o(`rue:slot:anchor`);n(s,_),g(()=>{let r=t.summary?c(()=>{let r=m(),i=u(`p`,r);n(r,i),a(i,`m-0 text-sm opacity-70`);let s=o(`rue:slot:anchor`);return n(i,s),g(()=>{let n=t.summary;e(()=>d(n,i,s))}),r}):``;e(()=>d(r,s,_))});let v=o(`rue:component:anchor`);n(i,v),g(()=>{let n=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:t.tab.value,onChange:e=>t.tab.value=e,className:`mb-3 mt-4`});e(()=>d(n,i,v))});let y=o(`rue:slot:anchor`);return n(i,y),g(()=>{let r=t.tab.value===`preview`?t.preview():c(()=>{let r=m(),i=o(`rue:component:anchor`);return n(r,i),g(()=>{let n=p(x,{className:`mt-2`,lang:`tsx`,code:t.code});e(()=>d(n,r,i))}),r});e(()=>d(r,i,y))}),i}),Y=t=>c(r=>{let i=u(`div`,r);a(i,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let s=u(`table`,i);n(i,s),a(s,`table table-zebra`);let p=u(`thead`,s);n(s,p);let h=u(`tr`,p);n(p,h);let _=u(`th`,h);n(h,_),n(_,f(`属性`));let y=u(`th`,h);n(h,y),n(y,f(`说明`));let b=u(`th`,h);n(h,b),n(b,f(`类型`));let x=u(`th`,h);n(h,x),n(x,f(`默认值`));let S=u(`tbody`,s);n(s,S);let C=o(`rue:list:start`),w=o(`rue:list:end`);n(S,C),n(S,w);let T=new Map;return g(()=>{T=v({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,r,i,a,s)=>{d(c(()=>{let r=m(),i=u(`tr`,r);n(r,i),g(()=>{l(i,`key`,String(t.prop))});let a=u(`td`,i);n(i,a);let s=u(`code`,a);n(a,s);let c=o(`rue:slot:anchor`);n(s,c),g(()=>{let n=t.prop;e(()=>d(n,s,c))});let f=u(`td`,i);n(i,f);let p=o(`rue:slot:anchor`);n(f,p),g(()=>{let n=t.description;e(()=>d(n,f,p))});let h=u(`td`,i);n(i,h);let _=u(`code`,h);n(h,_);let v=o(`rue:slot:anchor`);n(_,v),g(()=>{let n=t.type;e(()=>d(n,_,v))});let y=u(`td`,i);n(i,y);let b=u(`code`,y);n(y,b);let x=o(`rue:slot:anchor`);return n(b,x),g(()=>{let n=t.defaultValue;e(()=>d(n,b,x))}),r}),r,i)}})}),i}),ee=[{prop:`items`,description:`数据驱动的折叠面板列表`,type:`CollapseItem[]`,defaultValue:`-`},{prop:`activeKey`,description:`受控展开项；accordion 模式下可传单值`,type:`string | number | Array<string | number>`,defaultValue:`-`},{prop:`defaultActiveKey`,description:`非受控默认展开项`,type:`string | number | Array<string | number>`,defaultValue:`-`},{prop:`accordion`,description:`是否只允许同时展开一项`,type:`boolean`,defaultValue:`false`},{prop:`bordered`,description:`是否使用分组边框容器`,type:`boolean`,defaultValue:`items 模式默认 true`},{prop:`ghost`,description:`是否使用透明背景`,type:`boolean`,defaultValue:`false`},{prop:`size`,description:`标题与内容尺寸`,type:`'sm' | 'md' | 'lg'`,defaultValue:`'md'`},{prop:`expandIconPlacement`,description:`展开图标位置`,type:`'start' | 'end'`,defaultValue:`'end'`},{prop:`onChange`,description:`items 模式切换时触发，返回下一个展开 key`,type:`(nextValue, context) => void`,defaultValue:`-`},{prop:`tag`,description:`支持基础写法的根标签切换`,type:`'div' | 'details'`,defaultValue:`'div'`}],te=[{prop:`key`,description:`面板唯一标识`,type:`string | number`,defaultValue:`索引值`},{prop:`label`,description:`标题内容，支持 title 别名`,type:`any`,defaultValue:`-`},{prop:`children`,description:`面板内容，支持 content 别名`,type:`any`,defaultValue:`-`},{prop:`description`,description:`标题下方的说明文案`,type:`any`,defaultValue:`-`},{prop:`extra`,description:`标题右侧附加区域，不触发展开`,type:`any`,defaultValue:`-`},{prop:`showArrow`,description:`是否显示展开图标`,type:`boolean`,defaultValue:`继承父级`},{prop:`collapsible`,description:`触发区域控制`,type:`'header' | 'icon' | 'disabled'`,defaultValue:`'header'`},{prop:`disabled`,description:`禁用当前项交互`,type:`boolean`,defaultValue:`false`},{prop:`open`,description:`非受控初始展开`,type:`boolean`,defaultValue:`false`}],X=()=>{let{tabItemsBasic:r,tabAccordion:i,tabMeta:l,tabPlacement:h,tabGhost:v,tabControlled:x,tabFocus:S,tabCheckbox:w,tabDetails:T,tabNoBorder:E,tabArrow:D,tabPlus:O,tabIconStart:k,tabOpen:A,tabClose:j,tabCustomFocus:M,tabCustomCheckbox:N,controlledKeys:P,accordionKey:F}=_(`useSetup:0:0`,()=>s(()=>({tabItemsBasic:_(`ref:1:0`,()=>t(`preview`)),tabAccordion:_(`ref:1:1`,()=>t(`preview`)),tabMeta:_(`ref:1:2`,()=>t(`preview`)),tabPlacement:_(`ref:1:3`,()=>t(`preview`)),tabGhost:_(`ref:1:4`,()=>t(`preview`)),tabControlled:_(`ref:1:5`,()=>t(`preview`)),tabFocus:_(`ref:1:6`,()=>t(`preview`)),tabCheckbox:_(`ref:1:7`,()=>t(`preview`)),tabDetails:_(`ref:1:8`,()=>t(`preview`)),tabNoBorder:_(`ref:1:9`,()=>t(`preview`)),tabArrow:_(`ref:1:10`,()=>t(`preview`)),tabPlus:_(`ref:1:11`,()=>t(`preview`)),tabIconStart:_(`ref:1:12`,()=>t(`preview`)),tabOpen:_(`ref:1:13`,()=>t(`preview`)),tabClose:_(`ref:1:14`,()=>t(`preview`)),tabCustomFocus:_(`ref:1:15`,()=>t(`preview`)),tabCustomCheckbox:_(`ref:1:16`,()=>t(`preview`)),controlledKeys:_(`ref:1:17`,()=>t([`release`])),accordionKey:_(`ref:1:18`,()=>t(`guide`))})));return c(t=>{let s=m(),_=o(`rue:component:anchor`);return n(s,_),d(p(C,{children:c(()=>{let t=m(),s=u(`div`,t);n(t,s),a(s,`max-w-none prose prose-sm md:prose-base`);let c=u(`h1`,s);n(s,c),n(c,f(`Collapse 折叠面板`));let _=u(`p`,s);n(s,_),a(_,`mt-3 mb-3 text-sm`),n(_,f("使用 Rue 基础基于 daisyUI 的视觉语言，并在此基础上补充 `items`、accordion、 `activeKey`、`extra`、`description`、尺寸与图标位置等增强能力。"));let C=u(`h2`,s);n(s,C),n(C,f(`语义 API`));let I=u(`p`,s);n(s,I),a(I,`text-sm opacity-80`),n(I,f("优先面向 `items` 数据驱动用法，组织方式贴近常见业务组件，但使用 Rue 视觉风格。"));let L=o(`rue:component:anchor`);n(s,L),g(()=>{let t=p(J,{title:`Items 基础用法`,summary:`直接通过 items 渲染多项折叠面板，并默认使用带边框的分组容器。`,tab:r,preview:()=>b(q,{arrow:!0,defaultActiveKey:[`overview`],items:[{key:`overview`,label:`Overview`,children:`汇总版本亮点、上线范围与回滚策略，适合用作页面最上方的信息概览。`},{key:`release`,label:`Release Checklist`,children:`确认灰度开关、日志埋点、告警阈值与发布窗口已经准备完毕。`},{key:`faq`,label:`FAQ`,children:`常见问题、风险提示和升级说明也可以继续放进同一个折叠组。`}]}),code:`<Collapse
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
/>`});e(()=>d(t,s,L))});let R=o(`rue:component:anchor`);n(s,R),g(()=>{let t=p(J,{title:`Accordion`,summary:`使用 accordion 改成一次只展开一项，并结合受控 key 管理当前面板。`,tab:i,preview:()=>y(`div`,{className:`space-y-4`,children:[y(`div`,{className:`flex flex-wrap gap-2`,children:[b(`button`,{className:`btn btn-sm`,onClick:()=>F.value=`guide`,children:`打开 Guide`}),b(`button`,{className:`btn btn-sm`,onClick:()=>F.value=`api`,children:`打开 API`}),b(`button`,{className:`btn btn-sm btn-ghost`,onClick:()=>F.value=null,children:`全部收起`})]}),b(q,{accordion:!0,plus:!0,activeKey:F.value,onChange:e=>F.value=e??null,items:[{key:`guide`,label:`Migration Guide`,children:`梳理 breaking changes、默认行为差异与升级建议。`},{key:`api`,label:`API Delta`,children:`列出属性变化与使用策略。`},{key:`qa`,label:`QA Notes`,children:`补充测试范围、回归清单和已知限制。`}]})]}),code:`const activeKey = ref<string | null>('guide')

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
/>`});e(()=>d(t,s,R))});let z=o(`rue:component:anchor`);n(s,z),g(()=>{let t=p(J,{title:`描述与额外操作`,summary:`每一项可带 description、extra 和独立禁用状态，extra 区域点击不会触发展开。`,tab:l,preview:()=>b(q,{arrow:!0,defaultActiveKey:[`ops`],items:[{key:`ops`,label:`Ops Console`,description:`控制发布节奏、灰度范围与告警阈值。`,extra:b(`span`,{className:`badge badge-soft badge-info`,children:`Beta`}),children:`适合放置运维策略、SLA 约束和异常回滚说明。`},{key:`billing`,label:`Billing Center`,description:`当前模块仍在整理，暂不开放编辑。`,extra:b(`span`,{className:`badge badge-soft`,children:`Read only`}),disabled:!0,children:`禁用项会保持信息展示，但不响应交互。`}]}),code:`<Collapse
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
/>`});e(()=>d(t,s,z))});let B=o(`rue:component:anchor`);n(s,B),g(()=>{let t=p(J,{title:`图标位置与触发区域`,summary:`支持把图标放在左侧，并限制只有图标本身可触发开合。`,tab:h,preview:()=>b(q,{arrow:!0,expandIconPlacement:`start`,items:[{key:`deployment`,label:`Deployment Window`,description:`只有左侧图标可点击，标题区更适合放长文本说明。`,collapsible:`icon`,children:`当标题里还有链接、状态或操作说明时，这个模式会更稳妥。`},{key:`security`,label:`Security Review`,description:`保持默认 header 触发，图标只是视觉反馈。`,children:`适合和 icon-only 模式混合使用。`}]}),code:`<Collapse
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
/>`});e(()=>d(t,s,B))});let V=o(`rue:component:anchor`);n(s,V),g(()=>{let t=p(J,{title:`Ghost 与无边框`,summary:`不想用分组边框时，可以关闭 bordered，再按需开启 ghost。`,tab:v,preview:()=>b(q,{arrow:!0,bordered:!1,ghost:!0,className:`space-y-3`,defaultActiveKey:[`design`],items:[{key:`design`,label:`Design Tokens`,children:`透明背景更适合嵌在卡片、侧栏或深色容器中。`},{key:`theme`,label:`Theme Sync`,children:`可继续叠加自定义类名，让容器完全交给外层布局控制。`}]}),code:`<Collapse
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
/>`});e(()=>d(t,s,V))});let H=o(`rue:component:anchor`);n(s,H),g(()=>{let t=p(J,{title:`尺寸与受控多开`,summary:`size 会统一影响标题和内容尺寸；非 accordion 模式可同时展开多项。`,tab:x,preview:()=>y(`div`,{className:`space-y-4`,children:[y(`div`,{className:`flex flex-wrap gap-2`,children:[b(`button`,{className:`btn btn-sm`,onClick:()=>P.value=[`release`],children:`仅展开 Release`}),b(`button`,{className:`btn btn-sm`,onClick:()=>P.value=[`release`,`notes`],children:`展开两项`}),b(`button`,{className:`btn btn-sm btn-ghost`,onClick:()=>P.value=[],children:`全部收起`})]}),b(q,{plus:!0,size:`lg`,activeKey:P.value,onChange:e=>P.value=e??[],items:[{key:`release`,label:`Release Plan`,children:`大尺寸适合在信息层级较重的管理页或文档页中使用。`},{key:`notes`,label:`Release Notes`,children:`多开模式下可以把相邻的几块信息一起展开对照查看。`},{key:`rollback`,label:`Rollback`,children:`受控模式更方便和 URL、筛选器或外部按钮联动。`}]})]}),code:`const openKeys = ref<string[]>(['release'])

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
/>`});e(()=>d(t,s,H))});let U=o(`rue:component:anchor`);n(s,U),g(()=>{let t=p(J,{title:`Collapse with focus`,summary:`聚焦时展开、失焦时关闭，同时也支持重复点击标题切换开合。`,tab:S,preview:()=>y(q,{tabIndex:0,className:`bg-base-100 border border-base-300`,children:[b(q.Title,{className:`font-semibold`,children:`How do I create an account?`}),b(q.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0} className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});e(()=>d(t,s,U))});let W=o(`rue:component:anchor`);n(s,W),g(()=>{let t=p(J,{title:`Collapse with checkbox`,summary:`使用复选框控制展开与关闭，并支持重复点击标题切换。`,tab:w,preview:()=>y(q,{className:`bg-base-100 border border-base-300`,children:[b(`input`,{type:`checkbox`}),b(q.Title,{className:`font-semibold`,children:`How do I create an account?`}),b(q.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse className="bg-base-100 border border-base-300">
  <input type="checkbox" />
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});e(()=>d(t,s,W))});let G=o(`rue:component:anchor`);n(s,G),g(()=>{let t=p(J,{title:`Collapse using details and summary tag`,summary:`使用 details/summary 标签。`,tab:T,preview:()=>y(q,{tag:`details`,className:`bg-base-100 border border-base-300`,children:[b(q.Title,{as:`summary`,className:`font-semibold`,children:`How do I create an account?`}),b(q.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tag="details" className="bg-base-100 border border-base-300">
  <Collapse.Title as="summary" className="font-semibold">
    How do I create an account?
  </Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});e(()=>d(t,s,G))});let K=o(`rue:component:anchor`);n(s,K),g(()=>{let t=p(J,{title:`Without border and background color`,tab:E,preview:()=>y(q,{tabIndex:0,children:[b(q.Title,{className:`font-semibold`,children:`How do I create an account?`}),b(q.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0}>
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});e(()=>d(t,s,K))});let X=o(`rue:component:anchor`);n(s,X),g(()=>{let t=p(J,{title:`With arrow icon`,tab:D,preview:()=>y(q,{tabIndex:0,arrow:!0,className:`bg-base-100 border border-base-300`,children:[b(q.Title,{className:`font-semibold`,children:`How do I create an account?`}),b(q.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0} arrow className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});e(()=>d(t,s,X))});let Z=o(`rue:component:anchor`);n(s,Z),g(()=>{let t=p(J,{title:`With plus/minus icon`,tab:O,preview:()=>y(q,{tabIndex:0,plus:!0,className:`bg-base-100 border border-base-300`,children:[b(q.Title,{className:`font-semibold`,children:`How do I create an account?`}),b(q.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0} plus className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});e(()=>d(t,s,Z))});let Q=o(`rue:component:anchor`);n(s,Q),g(()=>{let t=p(J,{title:`Moving collapse icon to the start`,summary:`通过 utility 类移动图标位置，并保持标题区重复点击切换能力。`,tab:k,preview:()=>y(q,{tabIndex:0,arrow:!0,className:`bg-base-100 border border-base-300`,children:[b(q.Title,{className:`font-semibold after:start-5 after:end-auto pe-4 ps-12`,children:`How do I create an account?`}),b(q.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0} arrow className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold after:start-5 after:end-auto pe-4 ps-12">
    How do I create an account?
  </Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});e(()=>d(t,s,Q))});let $=o(`rue:component:anchor`);n(s,$),g(()=>{let t=p(J,{title:`Force open`,tab:A,preview:()=>y(q,{tabIndex:0,open:!0,className:`bg-base-100 border border-base-300`,children:[b(q.Title,{className:`font-semibold`,children:`I have collapse-open class`}),b(q.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0} open className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold">I have collapse-open class</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});e(()=>d(t,s,$))});let ne=o(`rue:component:anchor`);n(s,ne),g(()=>{let t=p(J,{title:`Force close`,tab:j,preview:()=>y(q,{tabIndex:0,close:!0,className:`bg-base-100 border border-base-300`,children:[b(q.Title,{className:`font-semibold`,children:`I have collapse-close class`}),b(q.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0} close className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold">I have collapse-close class</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});e(()=>d(t,s,ne))});let re=o(`rue:component:anchor`);n(s,re),g(()=>{let t=p(J,{title:`Custom colors for collapse that works with focus`,summary:`通过 focus 触发颜色变化。`,tab:M,preview:()=>y(q,{tabIndex:0,className:`bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content`,children:[b(q.Title,{className:`font-semibold`,children:`How do I create an account?`}),b(q.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse
  tabIndex={0}
  className="bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content"
>
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});e(()=>d(t,s,re))});let ie=o(`rue:component:anchor`);n(s,ie),g(()=>{let t=p(J,{title:`Custom colors for collapse that works with checkbox`,summary:`通过 peer/peer-checked 触发颜色变化，并支持重复点击标题切换。`,tab:N,preview:()=>y(q,{className:`bg-base-100 border border-base-300`,children:[b(`input`,{type:`checkbox`,className:`peer`}),b(q.Title,{className:`bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content font-semibold`,children:`How do I create an account?`}),b(q.Content,{className:`bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse className="bg-base-100 border border-base-300">
  <input type="checkbox" className="peer" />
  <Collapse.Title className="bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content font-semibold">
    How do I create an account?
  </Collapse.Title>
  <Collapse.Content className="bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});e(()=>d(t,s,ie))});let ae=u(`h2`,s);n(s,ae),n(ae,f(`API`));let oe=u(`h3`,s);n(s,oe),n(oe,f(`Collapse`));let se=o(`rue:component:anchor`);n(s,se),g(()=>{let t=p(Y,{rows:ee});e(()=>d(t,s,se))});let ce=u(`h3`,s);n(s,ce),n(ce,f(`CollapseItem`));let le=o(`rue:component:anchor`);return n(s,le),g(()=>{let t=p(Y,{rows:te});e(()=>d(t,s,le))}),t})}),s,_),s})};export{X as default};