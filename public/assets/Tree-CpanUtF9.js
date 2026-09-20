import{B as e,Bt as t,Ct as n,Dt as r,F as i,Ht as a,I as o,Jt as s,L as c,M as l,P as u,Qt as d,St as f,Tt as p,Ut as m,V as h,Vt as g,W as _,Wt as v,X as y,Y as b,_n as x,ct as S,dt as C,en as w,et as T,f as E,fn as D,ft as O,g as ee,gn as k,h as te,hn as A,in as j,m as M,mn as N,mt as P,nt as F,p as ne,pn as I,qt as re,sn as L,u as R,vn as z,vt as B,yn as V,z as H,zt as U}from"./rue-runtime-BWbIfNT8.js";import{r as ie}from"./SidebarPlaygroundDesign-DS4naa5t.js";import{t as W}from"./PreviewBlock-CEz3T383.js";var ae=V(`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m6 3.5 4 4.5-4 4.5"></path></svg>`),G=V(`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" class="size-4" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round"></path></svg>`),oe=V(`<div><!--rue:text-hole:0--><button type="button"><!--rue:text-hole:1--></button><!--rue:text-hole:2--><!--rue:opaque-hole:3--><!--rue:text-hole:4--><button type="button"><span class="min-w-0 truncate">rue:direct-text</span><!--rue:text-hole:6--></button><!--rue:text-hole:7--></div>`),se=V(`<span>rue:direct-text</span>`),ce=V(`<div><span class="h-[2px] flex-1 rounded-full bg-primary/60"></span><span class="rounded-full bg-primary/10 px-2 py-1 text-[10px]">插入到此处</span></div>`),le=V(`<span class="inline-flex size-6 items-center justify-center text-base-content/60"><!--rue:text-hole:0--></span>`),ue=V(`<span class="inline-flex size-6 shrink-0 items-center justify-center rounded-md bg-base-200/80 text-[10px] font-semibold text-base-content/60"><!--rue:text-hole:0--></span>`),de=V(`<span hidden="" aria-hidden="true"></span>`),fe=V(`<div aria-hidden="true"></div>`),pe=V(`<div><!--rue:text-hole:0--></div>`),me=V(`<section data-rue-tree="true"><!--rue:text-hole:0--><div data-rue-tree-body="true"><!--rue:opaque-hole:1--></div></section>`),he=new WeakMap,K=new WeakMap,ge=8,_e=e=>typeof e==`object`&&!!e||typeof e==`function`,ve=(e,t)=>e.length===t.length&&e.every((e,n)=>e===t[n]),ye=(e,t,n)=>e.treeDataSimpleMode===t&&e.fieldNames===n,be=(e,t,n,r,i)=>(e.treeData===t||ve(e.treeDataRoots,n))&&ye(e,r,i),q=(e,t,n,r)=>{let i=[_e(e)?he.get(e):void 0],a=t[0];_e(a)&&a!==e&&i.push(K.get(a));for(let a of i){let i=a?.find(i=>be(i,e,t,n,r));if(i)return i}},J=(e,t,n)=>{if(!_e(t))return;let r=e.get(t);if(!r){e.set(t,[n]);return}let i=r.findIndex(e=>be(e,n.treeData,n.treeDataRoots,n.treeDataSimpleMode,n.fieldNames));i>=0?r[i]=n:(r.push(n),r.length>ge&&r.shift())},xe=e=>{J(he,e.treeData,e),J(K,e.treeDataRoots[0],e)},Y={title:`title`,key:`key`,children:`children`,disabled:`disabled`,selectable:`selectable`,checkable:`checkable`,disableCheckbox:`disableCheckbox`,isLeaf:`isLeaf`,icon:`icon`,className:`className`,id:`id`,pId:`pId`},Se=(...e)=>e.filter(Boolean).join(` `),Ce=e=>typeof e==`object`&&!!e&&!Array.isArray(e),we=e=>typeof e==`string`||typeof e==`number`,X=e=>`${typeof e}:${String(e)}`,Te=e=>{let t=[],n=new Set;return(e??[]).forEach(e=>{let r=X(e);n.has(r)||(n.add(r),t.push(e))}),t},Z=(e,t)=>e?t?`${e} ${t}`:e:t??``,Ee=(e,t,n)=>h(e=>{let t=A(`span`,e);return t.setAttribute(`class`,`loading loading-spinner loading-xs`),t.setAttribute(`aria-hidden`,`true`),[t,t]}),De=(t,n,r)=>{let i=_(H(t,`expanded`)),a=_(H(t,`hidden`));return o(v(e=>{let t=ae().content.cloneNode(!0).firstChild,n=t;n.setAttribute(`viewBox`,`0 0 16 16`),n.setAttribute(`fill`,`none`),n.setAttribute(`stroke`,`currentColor`),n.setAttribute(`strokeWidth`,`1.8`);let r;return j(()=>{let e=Z(`size-4 transition-transform duration-200`,a.get()?`opacity-0`:i.get()?`rotate-90`:``),t=e===!1||e==null?``:String(e);Object.is(r,t)||(r=t,n.setAttribute(`class`,t))}),n.setAttribute(`aria-hidden`,`true`),[t,t]}),e=>w(()=>{i.set(e.expanded),a.set(e.hidden)}),()=>e(t))},Oe=(e,t,n)=>h(e=>{let t=A(`svg`,e);t.setAttribute(`viewBox`,`0 0 16 16`),t.setAttribute(`fill`,`currentColor`),t.setAttribute(`class`,`size-4`),t.setAttribute(`aria-hidden`,`true`);let n=A(`path`,t);return D(t,n),n.setAttribute(`d`,`M5 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM11 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM11 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM5 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM11 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z`),[t,t]}),ke=(t,n,r)=>{let i=_(H(t,`expanded`));return o(v(e=>{let t=G().content.cloneNode(!0).firstChild,n=t.childNodes[0];n.setAttribute(`strokeLinecap`,`round`),n.setAttribute(`strokeLinejoin`,`round`);let r;return j(()=>{let e=i.get()?`M2.5 6.5h11l-1.2 6h-9.1l-1.2-6ZM2.5 5V3.5h4l1.2 1.5h5.8v1.5`:`M2.5 4.5h4l1.2 1.5h5.8v6.5h-11v-8Z`;Object.is(r,e)||(r=e,e==null||e===!1?n.removeAttribute(`d`):n.setAttribute(`d`,String(e)))}),[t,t]}),e=>w(()=>{i.set(e.expanded)}),()=>e(t))},Ae=(e,t,n)=>h(e=>{let t=A(`svg`,e);t.setAttribute(`viewBox`,`0 0 16 16`),t.setAttribute(`fill`,`none`),t.setAttribute(`stroke`,`currentColor`),t.setAttribute(`strokeWidth`,`1.5`),t.setAttribute(`class`,`size-4`),t.setAttribute(`aria-hidden`,`true`);let n=A(`path`,t);D(t,n),n.setAttribute(`strokeLinecap`,`round`),n.setAttribute(`strokeLinejoin`,`round`),n.setAttribute(`d`,`M4 2.5h5l3 3v8H4v-11Z`);let r=A(`path`,t);return D(t,r),r.setAttribute(`strokeLinecap`,`round`),r.setAttribute(`strokeLinejoin`,`round`),r.setAttribute(`d`,`M9 2.5v3h3`),[t,t]}),Q=(e,t,n)=>e[n?.[t]??Y[t]],je=(e,t)=>Q(e,`title`,t)??e.title??e.key,$=e=>new Set(Te(e).map(X)),Me=e=>e==null||typeof e==`boolean`?``:typeof e==`string`||typeof e==`number`?String(e):Array.isArray(e)?e.map(e=>Me(e)).filter(Boolean).join(` `):typeof e==`object`?[`title`,`label`,`name`,`text`,`description`,`children`].map(t=>Me(e[t])).filter(Boolean).join(` `):``,Ne=(e,t,n)=>{if(!t)return e;let r=Ce(t)?t:void 0,i=r?.id??n?.id??Y.id,a=r?.pId??n?.pId??Y.pId,o=r?.rootPId??0,s=n?.children??Y.children,c=new Map;e.forEach((e,t)=>{let n=e[i]??e.key??t;c.set(n,{...e,[s]:[]})});let l=[];return e.forEach((e,t)=>{let n=e[i]??e.key??t,r=e[a],u=c.get(n);if(!u)return;if(r==null||r===o||!c.has(r)){l.push(u);return}let d=c.get(r);if(!d){l.push(u);return}let f=d[s]??[];f.push(u),d[s]=f}),l},Pe=(e,t)=>{let n=[],r={},i=(e,a,o,s)=>{let c=Q(e,`key`,t),l=we(c)?c:o,u=X(l),d=Q(e,`isLeaf`,t),f={key:l,keyText:u,title:je(e,t),depth:a,children:[],raw:e,disabled:!!Q(e,`disabled`,t),selectable:Q(e,`selectable`,t)!==!1,checkable:Q(e,`checkable`,t)!==!1,disableCheckbox:!!Q(e,`disableCheckbox`,t),isLeaf:!1,className:Q(e,`className`,t),icon:Q(e,`icon`,t),parentKeyText:s};n.push(f),r[u]=f;let p=Q(e,`children`,t);return f.children=Array.isArray(p)?p.map((e,t)=>i(e,a+1,`${o}-${t}`,u)):[],f.isLeaf=d===!0||d!==!1&&f.children.length===0,f};return{roots:e.map((e,t)=>i(e,0,`node-${t}`)),flat:n,byKeyText:r}},Fe=e=>{let t=[],n=e=>{!e.disabled&&e.checkable&&!e.disableCheckbox&&t.push(e.keyText),e.children.forEach(e=>n(e))};return n(e),t},Ie=e=>{let t=[],n=e=>{t.push(e.key),e.children.forEach(e=>n(e))};return n(e),t},Le=(e,t,n)=>{let r=new Set,i=new Set,a={},o=e=>{let s=!e.disabled&&e.checkable&&!e.disableCheckbox,c=e.children.map(e=>o(e)).filter(e=>e.participates),l=t.has(e.keyText),u=l,d=!1;if(!n&&c.length>0){let e=c.every(e=>e.checked),t=c.some(e=>e.checked||e.halfChecked);u=l||e,d=!u&&t}let f={checked:u,halfChecked:d,participates:s||c.length>0};return a[e.keyText]=f,u&&s&&r.add(e.keyText),d&&s&&i.add(e.keyText),f};return e.forEach(e=>o(e)),{checkedKeys:r,halfCheckedKeys:i,stateMap:a}},Re=(e,t,n,r)=>{let i=new Set(e),a=new Set(t),o=n.filter(e=>i.has(e.keyText)).map(e=>e.key).filter(we);return r?{checked:o,halfChecked:n.filter(e=>a.has(e.keyText)).map(e=>e.key).filter(we)}:o},ze=(e,t,n,r)=>{if(!n){let n=[],r=e=>{n.push({node:e,matched:!1}),t.has(e.keyText)&&e.children.forEach(e=>r(e))};return e.forEach(e=>r(e)),n}let i=e=>{let t=r(e),n=e.children.flatMap(e=>i(e));if(!t&&n.length===0)return[];if(t){let t=[{node:e,matched:!0}],n=e=>{t.push({node:e,matched:!1}),e.children.forEach(e=>n(e))};return e.children.forEach(e=>n(e)),t}return[{node:e,matched:!1},...n]};return e.flatMap(e=>i(e))},Be=(e,t,n)=>t?typeof n==`function`?n(t,e):n===!1||Me(e.title).toLowerCase().includes(t.toLowerCase()):!0,Ve=(e,t,n)=>{let r=t.parentKeyText;for(;r;){if(r===e.keyText)return!0;r=n[r]?.parentKeyText}return!1},He=e=>{let t=!!e,n=Ce(e)?e:void 0;return{enabled:t,icon:n?.icon,nodeDraggable:r=>t?typeof e==`function`?e(r):n&&typeof n.nodeDraggable==`function`?n.nodeDraggable(r):!0:!1}},Ue=(e,t,n,r,i)=>{if(!i||!n||!r)return{items:e,topSpacer:0,bottomSpacer:0};let a=r+2,o=Math.max(1,Math.ceil(n/a))+12,s=Math.max(0,e.length-o),c=Math.min(s,Math.max(0,Math.floor(t/a)-6)),l=Math.min(e.length,c+o);return{items:e.slice(c,l),topSpacer:c*a,bottomSpacer:Math.max(0,(e.length-l)*a)}},We=e=>{if(e===-1)return`before`;if(e===1)return`after`;if(e===0)return`inside`},Ge=(e,t)=>e.map(e=>t[e]?.key).filter(we),Ke=(e,t)=>{if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0},qe=e=>{switch(e){case`small`:case`sm`:return{headerPadding:`px-4 py-3`,bodyPadding:`px-3 py-3`,rowPadding:`py-1.5`,textClass:`text-sm`,rowMinHeight:36,rowEstimate:42};case`large`:case`lg`:return{headerPadding:`px-5 py-4`,bodyPadding:`px-4 py-4`,rowPadding:`py-2.5`,textClass:`text-[0.95rem]`,rowMinHeight:44,rowEstimate:50};default:return{headerPadding:`px-4 py-3.5`,bodyPadding:`px-3.5 py-3.5`,rowPadding:`py-2`,textClass:`text-sm`,rowMinHeight:40,rowEstimate:46}}},Je=e=>{switch(e){case`error`:return`border-error/55 shadow-[0_0_0_1px_rgba(248,113,113,0.14)]`;case`warning`:return`border-warning/55 shadow-[0_0_0_1px_rgba(251,191,36,0.14)]`;default:return``}},Ye=(n,r,i)=>{let c=_(H(n,`blockNode`)),l=_(H(n,`checkable`)),p=_(H(n,`classNames`)),x=_(H(n,`componentSize`)),C=_(H(n,`directoryMode`)),T=_(H(n,`disabled`)),O=_(H(n,`dragConfig`)),ee=_(H(n,`emptyText`)),M=_(H(n,`fixedVirtualRowHeight`)),P=_(H(n,`handleCheck`)),F=_(H(n,`handleDragEndNode`)),R=_(H(n,`handleDragEnterNode`)),z=_(H(n,`handleDragLeaveNode`)),B=_(H(n,`handleDragMouseDown`)),V=_(H(n,`handleDragOverNode`)),ie=_(H(n,`handleDragStartNode`)),W=_(H(n,`handleDropNode`)),ae=_(H(n,`handleExpandToggle`)),G=_(H(n,`handleLabelActivate`)),me=_(H(n,`handleLabelContextMenu`)),he=_(H(n,`handleLabelMouseDown`)),K=_(H(n,`hasLoadData`)),ge=_(H(n,`icon`)),_e=_(H(n,`loadingKeyTexts`)),ve=_(H(n,`selectable`)),ye=_(H(n,`showIcon`)),be=_(H(n,`showLine`)),q=_(H(n,`snapshot`)),J=_(H(n,`styles`)),xe=_(H(n,`switcherIcon`)),Y=_(H(n,`titleFormatter`)),Ce=_(H(n,`version`)),we=(n,r,i)=>{let d=_(H(n,`rowArg0`)),{node:y,state:b,expanded:C,selected:E,loading:ee,canExpand:te,rowIsDragTarget:ne,canDragNode:re,dropIntent:B,labelText:se}=s(`useSetup:0:0`,()=>{let e=S(()=>d.get().node),t=S(()=>q.get().checkState.stateMap[e.get().keyText]??{checked:!1,halfChecked:!1,participates:!0}),n=S(()=>q.get().searchValue?!0:q.get().expandedKeyTextSet.has(e.get().keyText)),r=S(()=>q.get().selectedKeyTextSet.has(e.get().keyText)),i=S(()=>_e.get().includes(e.get().keyText)),a=S(()=>!!K.get()||!!e.get().children.length||!e.get().isLeaf),o=S(()=>q.get().dragState.overKeyText===e.get().keyText);return{node:e,state:t,expanded:n,selected:r,loading:i,canExpand:a,rowIsDragTarget:o,canDragNode:S(()=>O.get().enabled&&O.get().nodeDraggable(e.get())&&!T.get()&&!e.get().disabled),dropIntent:S(()=>o.get()?We(q.get().dragState.dropPosition):void 0),labelText:S(()=>String(Y.get()?Y.get()({node:e.get(),expanded:n.get(),selected:r.get(),checked:t.get().checked,halfChecked:t.get().halfChecked,loading:i.get()}):e.get().title))}});return o((e=>e)(v(e=>{let n=oe().content.cloneNode(!0).firstChild,r=n,i=n.childNodes[1],o=n.childNodes[5],s=n.childNodes[0],d=s.parentNode,_=n.childNodes[1].childNodes[0],S=_.parentNode,w=n.childNodes[2],O=w.parentNode,H=n.childNodes[3],ce=H.parentNode,le=n.childNodes[4],ue=le.parentNode,de=n.childNodes[5].childNodes[0].childNodes[0],fe=de.parentNode,pe=I(`rue:text-hole:5`);fe.replaceChild(pe,de);let K=n.childNodes[5].childNodes[1],_e=K.parentNode,Y=n.childNodes[6],Ce=Y.parentNode,we;j(()=>{let e=Z(Se(`rue-tree-node group relative flex min-w-0 items-center gap-1 rounded-lg py-0.5 pr-2 text-base-content outline-none transition-colors duration-150`,T.get()||y.get().disabled?`opacity-55`:B.get()===`inside`?`bg-primary/10 ring-1 ring-primary/20`:B.get()?`bg-primary/5`:`hover:bg-base-200/65`,be.get()&&y.get().depth>0&&`border-l border-base-300/60`,y.get().className),p.get()?.node),t=e===!1||e==null?``:String(e);Object.is(we,t)||(we=t,r.setAttribute(`class`,t))});let Oe;j(()=>{let e={paddingLeft:`${y.get().depth*18+8}px`,height:M.get()?`${M.get()}px`:void 0,minHeight:M.get()?void 0:`${x.get().rowMinHeight}px`,...J.get()?.node},t=f(e);Object.is(Oe,t)||(Oe=t,r.style.cssText=t)});let ke;j(()=>{let e=y.get().keyText;Object.is(ke,e)||(ke=e,e==null?r.removeAttribute(`data-rue-tree-node`):r.setAttribute(`data-rue-tree-node`,String(e)))});let Ae;j(()=>{let e=B.get()??``;Object.is(Ae,e)||(Ae=e,e==null?r.removeAttribute(`data-rue-tree-drop-intent`):r.setAttribute(`data-rue-tree-drop-intent`,String(e)))});let je;j(()=>{let e=ne.get()?String(q.get().dragState.dropPosition??0):``;Object.is(je,e)||(je=e,e==null?r.removeAttribute(`data-rue-tree-drop-position`):r.setAttribute(`data-rue-tree-drop-position`,String(e)))});let $;j(()=>{let e=re.get();Object.is($,e)||($=e,e==null||e===!1?r.removeAttribute(`draggable`):r.setAttribute(`draggable`,String(e)))});let Me=e=>{let t=e=>ie.get()(y.get(),e);typeof t==`function`&&t(e)};r.addEventListener(`dragstart`,Me),L(()=>r.removeEventListener(`dragstart`,Me));let Ne=e=>{let t=e=>R.get()(y.get(),e);typeof t==`function`&&t(e)};r.addEventListener(`dragenter`,Ne),L(()=>r.removeEventListener(`dragenter`,Ne));let Pe=e=>{let t=e=>V.get()(y.get(),e);typeof t==`function`&&t(e)};r.addEventListener(`dragover`,Pe),L(()=>r.removeEventListener(`dragover`,Pe));let Fe=e=>{let t=e=>z.get()(y.get(),e);typeof t==`function`&&t(e)};r.addEventListener(`dragleave`,Fe),L(()=>r.removeEventListener(`dragleave`,Fe));let Ie=e=>{let t=e=>F.get()(y.get(),e);typeof t==`function`&&t(e)};r.addEventListener(`dragend`,Ie),L(()=>r.removeEventListener(`dragend`,Ie));let Le=e=>{let t=e=>W.get()(y.get(),e);typeof t==`function`&&t(e)};r.addEventListener(`drop`,Le),L(()=>r.removeEventListener(`drop`,Le)),i.setAttribute(`type`,`button`);let Re;j(()=>{let e=Z(Se(`inline-flex size-6 shrink-0 items-center justify-center rounded-md text-base-content/55 transition-colors duration-150 hover:bg-base-200 hover:text-base-content disabled:cursor-default disabled:opacity-30`,!te.get()&&`pointer-events-none`),p.get()?.switcher),t=e===!1||e==null?``:String(e);Object.is(Re,t)||(Re=t,i.setAttribute(`class`,t))});let ze;j(()=>{let e=J.get()?.switcher,t=f(e);Object.is(ze,t)||(ze=t,i.style.cssText=t)});let Be;j(()=>{let e=!!(!te.get()||T.get()||y.get().disabled);Object.is(Be,e)||(Be=e,i.disabled=e)});let Ve;j(()=>{let e=C.get()?`折叠节点`:`展开节点`;Object.is(Ve,e)||(Ve=e,e==null?i.removeAttribute(`aria-label`):i.setAttribute(`aria-label`,String(e)))});let He=e=>{let t=e=>ae.get()(y.get(),e);typeof t==`function`&&t(e)};i.addEventListener(`click`,He),L(()=>i.removeEventListener(`click`,He)),o.setAttribute(`type`,`button`);let Ue;j(()=>{let e=Z(Se(`flex min-w-0 items-center gap-2 rounded-md px-2 text-left transition-colors duration-150`,x.get().rowPadding,c.get()?`flex-1 justify-between`:`max-w-full`,E.get()?`selected bg-primary/12 text-primary`:`text-base-content hover:bg-base-200/70`,(T.get()||y.get().disabled||!ve.get()||!y.get().selectable)&&`cursor-not-allowed opacity-55`),p.get()?.label),t=e===!1||e==null?``:String(e);Object.is(Ue,t)||(Ue=t,o.setAttribute(`class`,t))});let We;j(()=>{let e=J.get()?.label,t=f(e);Object.is(We,t)||(We=t,o.style.cssText=t)});let Ge;j(()=>{let e=!!(T.get()||y.get().disabled||!ve.get()||!y.get().selectable);Object.is(Ge,e)||(Ge=e,o.disabled=e)});let Ke;j(()=>{let e=re.get();Object.is(Ke,e)||(Ke=e,e==null||e===!1?o.removeAttribute(`draggable`):o.setAttribute(`draggable`,String(e)))});let qe=e=>{let t=e=>{e.stopPropagation(),ie.get()(y.get(),e)};typeof t==`function`&&t(e)};o.addEventListener(`dragstart`,qe),L(()=>o.removeEventListener(`dragstart`,qe));let Je=e=>{let t=e=>{e.stopPropagation(),R.get()(y.get(),e)};typeof t==`function`&&t(e)};o.addEventListener(`dragenter`,Je),L(()=>o.removeEventListener(`dragenter`,Je));let Ye=e=>{let t=e=>{e.stopPropagation(),V.get()(y.get(),e)};typeof t==`function`&&t(e)};o.addEventListener(`dragover`,Ye),L(()=>o.removeEventListener(`dragover`,Ye));let Xe=e=>{let t=e=>{e.stopPropagation(),z.get()(y.get(),e)};typeof t==`function`&&t(e)};o.addEventListener(`dragleave`,Xe),L(()=>o.removeEventListener(`dragleave`,Xe));let Ze=e=>{let t=e=>{e.stopPropagation(),F.get()(y.get(),e)};typeof t==`function`&&t(e)};o.addEventListener(`dragend`,Ze),L(()=>o.removeEventListener(`dragend`,Ze));let Qe=e=>{let t=e=>{e.stopPropagation(),W.get()(y.get(),e)};typeof t==`function`&&t(e)};o.addEventListener(`drop`,Qe),L(()=>o.removeEventListener(`drop`,Qe));let $e=e=>{let t=e=>he.get()(y.get(),e);typeof t==`function`&&t(e)};o.addEventListener(`mousedown`,$e),L(()=>o.removeEventListener(`mousedown`,$e));let et=e=>{let t=e=>G.get()(y.get(),e,`click`);typeof t==`function`&&t(e)};o.addEventListener(`click`,et),L(()=>o.removeEventListener(`click`,et));let tt=e=>{let t=e=>G.get()(y.get(),e,`doubleClick`);typeof t==`function`&&t(e)};o.addEventListener(`dblclick`,tt),L(()=>o.removeEventListener(`dblclick`,tt));let nt=e=>{let t=e=>me.get()(y.get(),e);typeof t==`function`&&t(e)};o.addEventListener(`contextmenu`,nt),L(()=>o.removeEventListener(`contextmenu`,nt)),m(d,s,()=>B.get()===`before`?{__rue_compiled_branch_key:!0,create:()=>u(Te,()=>({arg0:y.get(),arg1:`before`}))}:{__rue_compiled_branch_key:!1,create:()=>h(e=>{let t=N();return[t.firstChild,t.lastChild]})}),m(S,_,()=>xe.get()===void 0?{__rue_compiled_branch_key:!1,create:()=>a(()=>ee.get()?{__rue_compiled_branch_key:!0,create:()=>u(Ee,()=>({}))}:{__rue_compiled_branch_key:!1,create:()=>u(De,()=>({expanded:C.get(),hidden:y.get().isLeaf&&y.get().children.length===0}))})}:{__rue_compiled_branch_key:!0,create:()=>v(e=>{let n=A(`span`,e),r=I(`rue:compiled-slot`);return D(n,r),t({parent:n,before:r},()=>U(xe.get()),()=>({})),[n,n]})}),m(O,w,()=>l.get()?{__rue_compiled_branch_key:!0,create:()=>v(e=>{let t=A(`button`,e);t.setAttribute(`type`,`button`),t.setAttribute(`role`,`checkbox`);let n;j(()=>{let e=b.get().halfChecked?`mixed`:b.get().checked?`true`:`false`;Object.is(n,e)||(n=e,e==null?t.removeAttribute(`aria-checked`):t.setAttribute(`aria-checked`,String(e)))});let r;j(()=>{let e=!!(T.get()||y.get().disabled||y.get().disableCheckbox||!y.get().checkable);Object.is(r,e)||(r=e,t.disabled=e)});let i;j(()=>{let e=Z(Se(`inline-flex size-4 shrink-0 items-center justify-center rounded border text-[11px] font-semibold leading-none transition-colors duration-150`,b.get().checked||b.get().halfChecked?`border-primary bg-primary text-primary-content`:`border-base-content/35 bg-base-100 text-transparent hover:border-primary/60`,(T.get()||y.get().disabled||y.get().disableCheckbox||!y.get().checkable)&&`cursor-not-allowed opacity-45`),p.get()?.checkbox),n=e===!1||e==null?``:String(e);Object.is(i,n)||(i=n,t.setAttribute(`class`,n))});let o;j(()=>{let e=J.get()?.checkbox,n=f(e);Object.is(o,n)||(o=n,t.style.cssText=n)});let s=e=>{let t=e=>P.get()(y.get(),e);typeof t==`function`&&t(e)};return t.addEventListener(`click`,s),L(()=>t.removeEventListener(`click`,s)),a(()=>b.get().halfChecked?{__rue_compiled_branch_key:!0,create:()=>h(e=>{let t=k(`−`);return[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>a(()=>b.get().checked?{__rue_compiled_branch_key:!0,create:()=>h(e=>{let t=k(`✓`);return[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>h(e=>{let t=k(``);return[t,t]})})}).__rue_compiled_mount(t),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>h(e=>{let t=N();return[t.firstChild,t.lastChild]})});let rt=(e,t,n)=>{let r=()=>u(X,()=>({arg0:y.get()}));return e==null?r():g(e,n,r)},it=H.nextSibling;return ce.removeChild(H),t({parent:ce,before:it},()=>rt,()=>({})),m(ue,le,()=>ye.get()||y.get().icon!==void 0||ge.get()!==void 0?{__rue_compiled_branch_key:!0,create:()=>u(Q,()=>({arg0:y.get(),arg1:C.get(),arg2:E.get(),arg3:b.get().checked,arg4:b.get().halfChecked,arg5:ee.get()}))}:{__rue_compiled_branch_key:!1,create:()=>h(e=>{let t=N();return[t.firstChild,t.lastChild]})}),t({parent:fe,before:pe},()=>U(se.get()),()=>({})),m(_e,K,()=>B.get()?{__rue_compiled_branch_key:!0,create:()=>v(e=>{let t=A(`span`,e);t.setAttribute(`class`,`badge badge-primary badge-outline badge-xs shrink-0`);let n;return j(()=>{let e=B.get();Object.is(n,e)||(n=e,e==null?t.removeAttribute(`data-rue-tree-drop-placeholder`):t.setAttribute(`data-rue-tree-drop-placeholder`,String(e)))}),a(()=>B.get()===`inside`?{__rue_compiled_branch_key:!0,create:()=>h(e=>{let t=k(`放入`);return[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>a(()=>B.get()===`before`?{__rue_compiled_branch_key:!0,create:()=>h(e=>{let t=k(`插前`);return[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>h(e=>{let t=k(`插后`);return[t,t]})})}).__rue_compiled_mount(t),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>a(()=>E.get()?{__rue_compiled_branch_key:!0,create:()=>h(e=>{let t=A(`span`,e);return t.setAttribute(`class`,`badge badge-primary badge-xs shrink-0`),D(t,k(`选中`)),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>h(e=>{let t=N();return[t.firstChild,t.lastChild]})})}),m(Ce,Y,()=>B.get()===`after`?{__rue_compiled_branch_key:!0,create:()=>u(Te,()=>({arg0:y.get(),arg1:`after`}))}:{__rue_compiled_branch_key:!1,create:()=>h(e=>{let t=N();return[t.firstChild,t.lastChild]})}),[n,n]}),y.get().keyText),e=>w(()=>{d.set(e.rowArg0)}),()=>e(n))},X=(t,n,r)=>{let i=_(H(t,`arg0`));return o(a(()=>{let{canDragHandle:e,__rue_phase2_canDragHandle:t}=s(`useSetup:0:0`,()=>{let e=S(()=>O.get().enabled&&O.get().nodeDraggable(i.get())&&!T.get()&&!i.get().disabled);return e.get(),{canDragHandle:e,__rue_phase2_canDragHandle:e}});return!t.get()||O.get().icon===!1?{__rue_compiled_branch_key:0,create:()=>h(e=>{let t=N();return[t.firstChild,t.lastChild]})}:{__rue_compiled_branch_key:1,create:()=>v(e=>{let t=A(`span`,e);t.setAttribute(`aria-hidden`,`true`);let n;j(()=>{let e=Z(`inline-flex size-6 shrink-0 cursor-grab items-center justify-center rounded-lg text-base-content/35 transition group-hover:text-base-content/55`,p.get()?.dragHandle),r=e===!1||e==null?``:String(e);Object.is(n,r)||(n=r,t.setAttribute(`class`,r))});let r;j(()=>{let e=J.get()?.dragHandle,n=f(e);Object.is(r,n)||(r=n,t.style.cssText=n)}),t.setAttribute(`data-rue-tree-drag-handle`,`true`);let o=e=>{let t=e=>B.get()(i.get(),e);typeof t==`function`&&t(e)};return t.addEventListener(`mousedown`,o),L(()=>t.removeEventListener(`mousedown`,o)),a(()=>O.get().icon?{__rue_compiled_branch_key:!0,create:()=>b(e=>{let t=se().content.cloneNode(!0).firstChild,n=t.childNodes[0];return n.parentNode,y(n,()=>String(String(O.get().icon))),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>u(Oe,()=>({}))}).__rue_compiled_mount(t),[t,t]})}}),e=>w(()=>{i.set(e.arg0)}),()=>e(t))},Te=(t,n,r)=>{let i=_(H(t,`arg0`)),a=_(H(t,`arg1`));return o(v(e=>{let t=ce().content.cloneNode(!0).firstChild,n=t,r;j(()=>{let e=Se(`pointer-events-none absolute inset-x-0 z-10 flex items-center gap-2 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-primary/85`,a.get()===`before`?`-top-2.5`:`-bottom-2.5`),t=e===!1||e==null?``:String(e);Object.is(r,t)||(r=t,n.setAttribute(`class`,t))});let o;j(()=>{let e={paddingLeft:`${i.get().depth*18+20}px`},t=f(e);Object.is(o,t)||(o=t,n.style.cssText=t)});let s;return j(()=>{let e=a.get();Object.is(s,e)||(s=e,e==null?n.removeAttribute(`data-rue-tree-drop-placeholder`):n.setAttribute(`data-rue-tree-drop-placeholder`,String(e)))}),[t,t]}),e=>w(()=>{i.set(e.arg0),a.set(e.arg1)}),()=>e(t))},Q=(t,n,r)=>{let i=_(H(t,`arg0`)),c=_(H(t,`arg1`)),l=_(H(t,`arg2`)),d=_(H(t,`arg3`)),f=_(H(t,`arg4`)),p=_(H(t,`arg5`));return o(a(()=>{let{renderProps:e}=s(`useSetup:0:0`,()=>({renderProps:{node:i.get(),expanded:c.get(),selected:l.get(),checked:d.get(),halfChecked:f.get(),loading:p.get()}}));return ge.get()===void 0?i.get().icon===void 0?ye.get()?C.get()?{__rue_compiled_branch_key:3,create:()=>v(e=>{let t=le().content.cloneNode(!0).firstChild,n=t.childNodes[0],r=n.parentNode;return m(r,n,()=>i.get().children.length>0||!i.get().isLeaf?{__rue_compiled_branch_key:!0,create:()=>u(ke,()=>({expanded:c.get()}))}:{__rue_compiled_branch_key:!1,create:()=>u(Ae,()=>({}))}),[t,t]})}:{__rue_compiled_branch_key:4,create:()=>v(e=>{let t=ue().content.cloneNode(!0).firstChild,n=t.childNodes[0],r=n.parentNode;return m(r,n,()=>i.get().children.length>0||!i.get().isLeaf?{__rue_compiled_branch_key:!0,create:()=>h(e=>{let t=k(`DIR`);return[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>h(e=>{let t=k(`DOC`);return[t,t]})}),[t,t]})}:{__rue_compiled_branch_key:2,create:()=>h(e=>{let t=N();return[t.firstChild,t.lastChild]})}:{__rue_compiled_branch_key:1,create:()=>b(e=>{let t=se().content.cloneNode(!0).firstChild,n=t.childNodes[0];return n.parentNode,y(n,()=>String(String(i.get().icon))),[t,t]})}:{__rue_compiled_branch_key:0,create:()=>b(e=>{let t=se().content.cloneNode(!0).firstChild,n=t.childNodes[0];return n.parentNode,y(n,()=>String(String(ge.get()))),[t,t]})}}),e=>w(()=>{i.set(e.arg0),c.set(e.arg1),l.set(e.arg2),d.set(e.arg3),f.set(e.arg4),p.set(e.arg5)}),()=>e(t))};return o(v(e=>{let t=N(),n=de().content.cloneNode(!0),r=n.firstChild;t.appendChild(n),r.hidden=!0,r.setAttribute(`aria-hidden`,`true`);let i;j(()=>{let e=String(Ce.get());Object.is(i,e)||(i=e,e==null?r.removeAttribute(`data-rue-tree-content-version`):r.setAttribute(`data-rue-tree-content-version`,String(e)))}),a(()=>q.get().virtualSlice.topSpacer>0?{__rue_compiled_branch_key:!0,create:()=>v(e=>{let t=fe().content.cloneNode(!0).firstChild,n=t,r;return j(()=>{let e={height:`${q.get().virtualSlice.topSpacer}px`},t=f(e);Object.is(r,t)||(r=t,n.style.cssText=t)}),n.setAttribute(`aria-hidden`,`true`),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>h(e=>{let t=N();return[t.firstChild,t.lastChild]})}).__rue_compiled_mount(t);let o=I(`rue:list:end`);D(t,o);let s=[];re(()=>{let e=q.get().virtualSlice.items||[];s=te(o.parentNode,o,s,e,(e,t)=>e.node.keyText,(e,t)=>{let n=_(e);return ne((e,t,r)=>{let i=()=>u(we,()=>({rowArg0:n.get()}));return e==null?i():g(e,r,i)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),L(()=>E(s)),a(()=>q.get().virtualSlice.bottomSpacer>0?{__rue_compiled_branch_key:!0,create:()=>v(e=>{let t=fe().content.cloneNode(!0).firstChild,n=t,r;return j(()=>{let e={height:`${q.get().virtualSlice.bottomSpacer}px`},t=f(e);Object.is(r,t)||(r=t,n.style.cssText=t)}),n.setAttribute(`aria-hidden`,`true`),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>h(e=>{let t=N();return[t.firstChild,t.lastChild]})}).__rue_compiled_mount(t),a(()=>q.get().visibleNodes.length?{__rue_compiled_branch_key:!1,create:()=>h(e=>{let t=N();return[t.firstChild,t.lastChild]})}:{__rue_compiled_branch_key:!0,create:()=>v(e=>{let t=pe().content.cloneNode(!0).firstChild,n=t,r=t.childNodes[0],i=r.parentNode,a;j(()=>{let e=Z(`rounded-lg px-3 py-8 text-center text-sm text-base-content/55`,p.get()?.empty),t=e===!1||e==null?``:String(e);Object.is(a,t)||(a=t,n.setAttribute(`class`,t))});let o;j(()=>{let e=J.get()?.empty,t=f(e);Object.is(o,t)||(o=t,n.style.cssText=t)});let s=k(``);return i.insertBefore(s,r),i.removeChild(r),d(s,()=>String(String(ee.get()))),[t,t]})}).__rue_compiled_mount(t);let c=k(``),l=k(``);return t.insertBefore(c,t.firstChild),t.appendChild(l),[t.firstChild,t.lastChild]}),e=>w(()=>{c.set(e.blockNode),l.set(e.checkable),p.set(e.classNames),x.set(e.componentSize),C.set(e.directoryMode),T.set(e.disabled),O.set(e.dragConfig),ee.set(e.emptyText),M.set(e.fixedVirtualRowHeight),P.set(e.handleCheck),F.set(e.handleDragEndNode),R.set(e.handleDragEnterNode),z.set(e.handleDragLeaveNode),B.set(e.handleDragMouseDown),V.set(e.handleDragOverNode),ie.set(e.handleDragStartNode),W.set(e.handleDropNode),ae.set(e.handleExpandToggle),G.set(e.handleLabelActivate),me.set(e.handleLabelContextMenu),he.set(e.handleLabelMouseDown),K.set(e.hasLoadData),ge.set(e.icon),_e.set(e.loadingKeyTexts),ve.set(e.selectable),ye.set(e.showIcon),be.set(e.showLine),q.set(e.snapshot),J.set(e.styles),xe.set(e.switcherIcon),Y.set(e.titleFormatter),Ce.set(e.version)}),()=>e(n))},Xe=(r,i,l)=>{let d=_(H(r,`allowDrop`)),p=_(H(r,`allowSearch`)),y=_(H(r,`blockNode`)),b=_(H(r,`checkStrictly`)),x=_(H(r,`checkable`)),E=_(H(r,`checkedKeys`)),ee=_(H(r,`className`)),k=_(H(r,`classNames`)),te=_(H(r,`defaultCheckedKeys`)),M=_(H(r,`defaultExpandAll`)),ne=_(H(r,`defaultExpandedKeys`)),I=_(H(r,`defaultSearchValue`)),re=_(H(r,`defaultSelectedKeys`)),R=_(H(r,`directoryMode`)),z=_(H(r,`disabled`)),V=_(H(r,`draggable`)),U=_(H(r,`emptyText`)),ie=_(H(r,`expandAction`)),W=_(H(r,`expandedKeys`)),ae=_(H(r,`fieldNames`)),G=_(H(r,`filterTreeNode`)),oe=_(H(r,`height`)),se=_(H(r,`icon`)),ce=_(H(r,`itemHeight`)),le=_(H(r,`loadData`)),ue=_(H(r,`multiple`)),de=_(H(r,`onCheck`)),fe=_(H(r,`onDoubleClick`)),pe=_(H(r,`onDragEnd`)),ge=_(H(r,`onDragEnter`)),ve=_(H(r,`onDragLeave`)),J=_(H(r,`onDragOver`)),Y=_(H(r,`onDragStart`)),Ce=_(H(r,`onDrop`)),Ee=_(H(r,`onExpand`)),De=_(H(r,`onScroll`)),Oe=_(H(r,`onSearch`)),ke=_(H(r,`onSelect`)),Ae=_(H(r,`rangeSelect`)),Q=_(H(r,`searchPlaceholder`)),je=_(H(r,`searchValue`)),Me=_(H(r,`selectable`)),We=_(H(r,`selectedKeys`)),Xe=_(H(r,`showIcon`)),Ze=_(H(r,`showLine`)),Qe=_(H(r,`size`)),$e=_(H(r,`status`)),et=_(H(r,`style`)),tt=_(H(r,`styles`)),nt=_(H(r,`switcherIcon`)),rt=_(H(r,`titleFormatter`)),it=_(H(r,`toggleSelect`)),at=_(H(r,`treeData`)),ot=_(H(r,`treeDataSimpleMode`)),st=_(H(r,`virtual`)),ct=_(c(e(r),`allowDrop.allowSearch.blockNode.checkStrictly.checkable.checkedKeys.className.classNames.defaultCheckedKeys.defaultExpandAll.defaultExpandedKeys.defaultSearchValue.defaultSelectedKeys.directoryMode.disabled.draggable.emptyText.expandAction.expandedKeys.fieldNames.filterTreeNode.height.icon.itemHeight.loadData.multiple.onCheck.onDoubleClick.onDragEnd.onDragEnter.onDragLeave.onDragOver.onDragStart.onDrop.onExpand.onScroll.onSearch.onSelect.rangeSelect.searchPlaceholder.searchValue.selectable.selectedKeys.showIcon.showLine.size.status.style.styles.switcherIcon.titleFormatter.toggleSelect.treeData.treeDataSimpleMode.virtual`.split(`.`)));return F(()=>o(a(()=>{let{treeNormalizationCacheRef:e,persistedState:r,renderVersion:i,loadingKeyTextsRef:a,scrollTopRef:o,directoryLastSelectedKeyTextRef:c,directoryCachedSelectedKeyTextsRef:l,dragStateRef:_,dragHoverDepthRef:F,mouseDragStateRef:H,directorySuppressClickKeyTextRef:lt,directorySuppressClickCleanupRef:ut}=s(`TreeRoot:setup-region:0`,()=>{let e=T(`TreeRoot:hook:0`),t={};return{treeNormalizationCacheRef:e,persistedState:t,renderVersion:T(`TreeRoot:hook:1`,P(0)).current,loadingKeyTextsRef:T(`TreeRoot:hook:9`,P(t.loadingKeyTexts??[])).current,scrollTopRef:T(`TreeRoot:hook:10`,P(0)).current,directoryLastSelectedKeyTextRef:T(`TreeRoot:hook:11`,P(t.lastSelectedKeyText??null)).current,directoryCachedSelectedKeyTextsRef:T(`TreeRoot:hook:12`,P(t.cachedSelectedKeyTexts??[])).current,dragStateRef:T(`TreeRoot:hook:13`,P({})).current,dragHoverDepthRef:T(`TreeRoot:hook:14`,P({})).current,mouseDragStateRef:T(`TreeRoot:hook:15`,P(null)).current,directorySuppressClickKeyTextRef:T(`TreeRoot:hook:16`,P(t.suppressClickKeyText??null)).current,directorySuppressClickCleanupRef:T(`TreeRoot:hook:17`,null)}});function dt(){let t=e.current,n=at.get()===void 0?[]:at.get(),r=ot.get(),i=ae.get();if(t&&t.treeData===n&&ye(t,r,i))return t.normalizedTree;let a=Array.isArray(n)?n.slice():[];if(t&&be(t,n,a,r,i))return t.normalizedTree;let o=q(n,a,r,i);if(o)return e.current=o,o.normalizedTree;let s=Pe(Ne(at.get()===void 0?[]:at.get(),ot.get(),ae.get()),ae.get()),c={treeData:n,treeDataRoots:a,treeDataSimpleMode:r,fieldNames:i,normalizedTree:s};return e.current=c,xe(c),s}let ft=dt(),pt=ft,mt=S(()=>qe(Qe.get()));mt.get();let ht=mt,gt=S(()=>He(V.get()));gt.get();let _t=gt,vt=M.get()?ft.flat.filter(e=>e.children.length>0||!e.isLeaf).map(e=>e.key):ne.get()??[],yt=T(`TreeRoot:hook:2`,P(Te(re.get()??We.get()))).current,bt=T(`TreeRoot:hook:3`,P(Te(te.get()))).current,xt=T(`TreeRoot:hook:4`,P(Te(r.expandedKeys??vt))).current,St=T(`TreeRoot:hook:5`,P(Te(We.get()))).current,Ct=T(`TreeRoot:hook:6`,P(Te(W.get()))).current,wt=T(`TreeRoot:hook:7`,P(E.get()===void 0?new Set:Array.isArray(E.get())?$(E.get()):$(E.get().checked))).current,Tt=T(`TreeRoot:hook:8`,P(I.get()??``)).current;if(E.get()!==void 0){let e=Array.isArray(E.get())?$(E.get()):$(E.get().checked);Ke(wt.value,e)||(wt.value=e)}We.get()!==void 0&&!Ke($(St.value),$(We.get()))&&(St.value=Te(We.get())),W.get()!==void 0&&!Ke($(Ct.value),$(W.get()))&&(Ct.value=Te(W.get()));let{requestRender:Et}=s(`TreeRoot:setup-region:3`,()=>{function e(){i.value+=1}return{requestRender:e}}),Dt=S(()=>ce.get()??ht.get().rowEstimate);Dt.get();let Ot=Dt,kt=S(()=>typeof oe.get()==`number`&&oe.get()>0?oe.get():void 0);kt.get();let At=kt,jt=S(()=>(st.get()===void 0||st.get())!==!1&&At.get()&&typeof ce.get()==`number`&&ce.get()>0?ce.get():void 0);jt.get();let Mt=jt;function Nt(t=!1){if(t){let t=at.get()===void 0?[]:at.get(),n=Array.isArray(t)?t[0]:void 0;e.current=void 0,_e(t)&&he.delete(t),_e(n)&&K.delete(n)}let n=dt();return pt=n,n}function Pt(){return pt??Nt()}function Ft(){return We.get()===void 0?yt.value:St.value}function It(){return W.get()===void 0?xt.value:Ct.value}function Lt(){return je.get()===void 0?Tt.value:je.get()}function Rt(){return E.get()===void 0?$(bt.value):wt.value}function zt(){let e=Pt(),t=$(It()),n=Lt();return ze(e.roots,t,n,e=>Be(e,n,G.get()))}function Bt(){i.value;let e=Pt(),t=Lt(),n=$(Ft()),r=$(It()),a=Rt(),s=x.get()?Le(e.roots,a,!!b.get()):{checkedKeys:new Set,halfCheckedKeys:new Set,stateMap:{}},c=ze(e.roots,r,t,e=>Be(e,t,G.get()));return{searchValue:t,selectedKeyTextSet:n,expandedKeyTextSet:r,checkState:s,visibleNodes:c,virtualSlice:Ue(c,o.value,At.get(),Ot.get(),(st.get()===void 0||st.get())!==!1&&!!At.get()),dragState:_.value}}let Vt=(e,t,n,i=!0)=>{let a=Te(e);return W.get()===void 0?xt.value=a:Ct.value=a,r.expandedKeys=a,Et(),i&&Ee.get()&&Ee.get()(a,{node:t,expanded:a.some(e=>X(e)===t.keyText),nativeEvent:n}),a},Ht=(e,t,n,r=!0)=>{let i=Pt(),a=Te(e).filter(e=>i.byKeyText[X(e)]),o=a.map(e=>i.byKeyText[X(e)]).filter(Boolean);return We.get()===void 0?yt.value=a:St.value=a,Et(),r&&ke.get()&&ke.get()(a,{node:t,nativeEvent:n,selected:a.some(e=>X(e)===t.keyText),selectedNodes:o}),a},Ut=(e,t,n)=>{let r=Pt(),i=Le(r.roots,e,!!b.get()),a=Re(Array.from(i.checkedKeys),Array.from(i.halfCheckedKeys),r.flat,!!b.get());E.get()===void 0?bt.value=b.get()?a.checked:a:wt.value=new Set(i.checkedKeys),Et(),de.get()&&de.get()(a,{node:t,nativeEvent:n,checked:i.checkedKeys.has(t.keyText),checkedNodes:Array.from(i.checkedKeys).map(e=>r.byKeyText[e]).filter(Boolean),halfCheckedKeys:Array.from(i.halfCheckedKeys).map(e=>r.byKeyText[e]?.key).filter(we)})},Wt=async(e,t,n=!0)=>{let i=It(),o=$(i);if(z.get()||e.disabled)return i;let s=o.has(e.keyText),c=s?i.filter(t=>X(t)!==e.keyText):[...i,e.key],l=!s&&!!le.get()&&!e.isLeaf&&e.children.length===0&&!a.value.includes(e.keyText);l&&(a.value=[...a.value,e.keyText],r.loadingKeyTexts=a.value);let u=Vt(c,e,t,n);if(l&&le.get())try{await le.get()(e),Nt(!0)}finally{a.value=a.value.filter(t=>t!==e.keyText),r.loadingKeyTexts=a.value;let t=r.renderRequests;t?.size?t.forEach(e=>e()):Et()}return u},Gt=(e,t)=>{t.preventDefault(),t.stopPropagation(),Wt(e,t)},Kt=(e,t,n=!0)=>{if(z.get()||e.disabled||!(Me.get()===void 0||Me.get())||!e.selectable)return;let i=Ft(),a=$(i);if(ue.get()&&(Ae.get()===void 0?`append`:Ae.get())!==!1&&t?.shiftKey){let a=zt().map(e=>e.node.keyText),o=c.value&&a.includes(c.value)?c.value:void 0,s=i.map(X).filter(t=>t!==e.keyText&&a.includes(t)),u=s[s.length-1],d=o??u,f=d?a.indexOf(d):-1,p=a.indexOf(e.keyText);if(f>=0&&p>=0){let o=Math.min(f,p),s=Math.max(f,p),u=a.slice(o,s+1),m=(Ae.get()===void 0?`append`:Ae.get())===`append`?l.value.length?l.value:i.map(X):[],h=Array.from(new Set([...m,...u]));c.value=d,l.value=h,r.lastSelectedKeyText=c.value,r.cachedSelectedKeyTexts=l.value;let g=Ht(Ge(h,Pt().byKeyText),e,t,n);return l.value=g.map(X),r.cachedSelectedKeyTexts=l.value,g}}if(R.get()){let o=!!ue.get()&&!!(it.get()===void 0||it.get())&&!!(t?.ctrlKey||t?.metaKey);if(ue.get()&&o){let o=a.has(e.keyText)?i.filter(t=>X(t)!==e.keyText):[...i,e.key];return c.value=e.keyText,l.value=o.map(X),r.lastSelectedKeyText=c.value,r.cachedSelectedKeyTexts=l.value,Ht(o,e,t,n)}return c.value=e.keyText,l.value=[e.keyText],r.lastSelectedKeyText=c.value,r.cachedSelectedKeyTexts=l.value,Ht([e.key],e,t,n)}if(ue.get()){let o=a.has(e.keyText)?i.filter(t=>X(t)!==e.keyText):[...i,e.key];return c.value=e.keyText,l.value=o.map(X),r.lastSelectedKeyText=c.value,r.cachedSelectedKeyTexts=l.value,Ht(o,e,t,n)}let o=a.has(e.keyText)?[]:[e.key];return c.value=e.keyText,l.value=o.map(X),r.lastSelectedKeyText=c.value,r.cachedSelectedKeyTexts=l.value,Ht(o,e,t,n)},qt=(e,t)=>{if(t.preventDefault(),t.stopPropagation(),z.get()||e.disabled||!e.checkable||e.disableCheckbox)return;let n=Rt(),r=Le(Pt().roots,n,!!b.get()),i=new Set(n),a=r.checkedKeys.has(e.keyText);if(b.get())a?i.delete(e.keyText):i.add(e.keyText);else{let t=Fe(e);a?t.forEach(e=>i.delete(e)):t.forEach(e=>i.add(e))}Ut(i,e,t)},Jt=e=>{je.get()===void 0&&(Tt.value=e),Et(),Oe.get()&&Oe.get()(e)},Yt=e=>{o.value=e.currentTarget.scrollTop,Et(),De.get()&&De.get()(e)},Xt=e=>{!e||_.value.overKeyText!==e||(_.value={dragKeyText:_.value.dragKeyText},Et())},Zt=e=>{e&&lt.value!==e||(lt.value=null,r.suppressClickKeyText=null,ut.current?.(),ut.current=null)},Qt=e=>{if(ut.current?.(),ut.current=null,lt.value=e,r.suppressClickKeyText=e,typeof window>`u`)return;let t,n=()=>{t!==void 0&&window.clearTimeout(t),window.removeEventListener(`mouseup`,i,!0)},i=()=>{window.removeEventListener(`mouseup`,i,!0),t=window.setTimeout(()=>{lt.value===e&&(lt.value=null,r.suppressClickKeyText=null),ut.current===n&&(ut.current=null)},500)};ut.current=n,window.addEventListener(`mouseup`,i,!0)},$t=(e,t)=>{(_.value.overKeyText!==e||_.value.dropPosition!==t)&&(_.value={..._.value,overKeyText:e,dropPosition:t},queueMicrotask(Et))},en=(e,t)=>{let n={...F.value},r=n[e]??0,i=Math.max(r+t,0);return i>0?n[e]=i:delete n[e],F.value=n,queueMicrotask(Et),i},tn=()=>{F.value={},_.value={},queueMicrotask(Et)},nn=(e,t,n)=>{let r=Pt(),i=_.value.dragKeyText;if(!i)return null;let a=r.byKeyText[i];if(!a||a.keyText===e.keyText||Ve(a,e,r.byKeyText))return null;let o=n?.getBoundingClientRect?.(),s=`clientY`in t?t.clientY:void 0,c=0;o&&typeof s==`number`&&(s<o.top+o.height*.25?c=-1:s>o.bottom-o.height*.25&&(c=1));let l=c!==0;return d.get()&&!d.get()({dragNode:a,dropNode:e,dropPosition:c,dropToGap:l})?null:{dragNode:a,dropPosition:c}},rn=e=>typeof document>`u`||typeof document.elementFromPoint!=`function`?null:document.elementFromPoint(e.clientX,e.clientY)?.closest?.(`[data-rue-tree-node]`),an=e=>{let t=e?.getAttribute(`data-rue-tree-node`);return t?Pt().byKeyText[t]??null:null},on=()=>{typeof document>`u`||(document.removeEventListener(`mousemove`,ln),document.removeEventListener(`mouseup`,un))},sn=(e,t)=>{let n=He(V.get());t.button!==0||!n.enabled||!n.nodeDraggable(e)||z.get()||e.disabled||typeof document>`u`||(H.value={keyText:e.keyText,startX:t.clientX,startY:t.clientY,active:!1},document.addEventListener(`mousemove`,ln),document.addEventListener(`mouseup`,un))},cn=(e,t)=>{let n=Pt().byKeyText[e.keyText];return n?(e.active=!0,H.value=e,Qt(e.keyText),F.value={},_.value={dragKeyText:e.keyText},queueMicrotask(Et),Y.get()&&Y.get()({event:t,node:n}),!0):!1};function ln(e){let t=H.value;if(!t)return;let n=Math.max(Math.abs(e.clientX-t.startX),Math.abs(e.clientY-t.startY));if(!t.active&&n<4||!t.active&&!cn(t,e))return;e.preventDefault();let r=rn(e),i=an(r);if(!i){Xt(_.value.overKeyText);return}let a=nn(i,e,r);if(!a){Xt(i.keyText);return}$t(i.keyText,a.dropPosition),J.get()&&J.get()({event:e,node:i})}function un(e){let t=H.value,n=_.value.dragKeyText,r=t?.active?t.keyText:n;if(H.value=null,on(),!r)return;e.preventDefault();let i=rn(e),a=an(i),o=a?nn(a,e,i):null;if(a&&o&&Ce.get()){let t=_.value.overKeyText===a.keyText&&_.value.dropPosition!==void 0?_.value.dropPosition:o.dropPosition;Ce.get()({event:e,node:a,dragNode:o.dragNode,dragNodesKeys:Ie(o.dragNode),dropPosition:t,dropToGap:t!==0})}let s=Pt().byKeyText[r];tn(),s&&pe.get()&&pe.get()({event:e,node:s})}let dn=(e,t)=>{t.stopPropagation();let n=He(V.get());!n.enabled||!n.nodeDraggable(e)||z.get()||e.disabled||(t.dataTransfer&&(t.dataTransfer.effectAllowed=`move`,t.dataTransfer.setData(`text/plain`,e.keyText)),F.value={},_.value={dragKeyText:e.keyText},queueMicrotask(Et),Y.get()&&Y.get()({event:t,node:e}))},fn=(e,t)=>{if(!_.value.dragKeyText)return;en(e.keyText,1);let n=nn(e,t,t.currentTarget.closest(`[data-rue-tree-node]`));if(!n){Xt(e.keyText);return}t.preventDefault(),$t(e.keyText,n.dropPosition);let r=It(),i=$(r);n.dropPosition===0&&!i.has(e.keyText)&&(e.children.length>0||!e.isLeaf)&&(r=Vt([...r,e.key],e,t)),ge.get()&&ge.get()({event:t,node:e,expandedKeys:r})},pn=(e,t)=>{if(!_.value.dragKeyText)return;let n=nn(e,t,t.currentTarget.closest(`[data-rue-tree-node]`));if(!n){Xt(e.keyText);return}t.preventDefault(),t.dataTransfer&&(t.dataTransfer.dropEffect=`move`),$t(e.keyText,n.dropPosition),J.get()&&J.get()({event:t,node:e})},mn=(e,t)=>{en(e.keyText,-1)===0&&Xt(e.keyText),ve.get()&&ve.get()({event:t,node:e})},hn=(e,t)=>{tn(),pe.get()&&pe.get()({event:t,node:e})},gn=(e,t)=>{t.stopPropagation();let n=nn(e,t,t.currentTarget.closest(`[data-rue-tree-node]`));if(!n){tn();return}t.preventDefault();let r=_.value.overKeyText===e.keyText&&_.value.dropPosition!==void 0?_.value.dropPosition:n.dropPosition;Ce.get()&&Ce.get()({event:t,node:e,dragNode:n.dragNode,dragNodesKeys:Ie(n.dragNode),dropPosition:r,dropToGap:r!==0}),tn()},_n=(e,t)=>{sn(e,t)},vn=(e,t)=>{let n=!!ue.get()&&(Ae.get()===void 0?`append`:Ae.get())!==!1&&t.shiftKey;if(R.get()&&ue.get()&&(it.get()===void 0||it.get())&&(t.ctrlKey||t.metaKey)||n){t.preventDefault(),t.stopPropagation(),Qt(e.keyText),Kt(e,t);return}sn(e,t)},yn=(e,t,n)=>{if(t.preventDefault(),t.stopPropagation(),n===`click`&&lt.value===e.keyText){Zt(e.keyText);return}n===`doubleClick`&&fe.get()&&fe.get()(t,e);let r=R.get()&&(ie.get()!==void 0&&ie.get())===n&&(e.children.length>0||!e.isLeaf);if(n===`click`&&r){w(()=>{let n=It(),r=$(n).has(e.keyText),i=r?n.filter(t=>X(t)!==e.keyText):[...n,e.key];Wt(e,t,!1);let a=Kt(e,t,!1)??Ft();Ee.get()?.(Te(i),{node:e,expanded:!r,nativeEvent:t}),ke.get()?.(a,{node:e,nativeEvent:t,selected:a.some(t=>X(t)===e.keyText),selectedNodes:a.map(e=>Pt().byKeyText[X(e)]).filter(Boolean)})});return}r&&Wt(e,t),n===`click`&&Kt(e,t)},bn=(e,t)=>{if(lt.value===e.keyText){t.preventDefault(),t.stopPropagation();return}R.get()&&ue.get()&&(it.get()===void 0||it.get())&&t.ctrlKey&&!t.metaKey&&(t.preventDefault(),t.stopPropagation(),Kt(e,t))},xn=S(()=>At.get()?(st.get()===void 0||st.get())===!1?{maxHeight:`${At.get()}px`,overflowY:`auto`}:{height:`${At.get()}px`,overflowY:`auto`}:{overflowY:`visible`});xn.get();let Sn=()=>({snapshot:Bt(),version:i.value,loadingKeyTexts:a.value,fixedVirtualRowHeight:Mt.get(),componentSize:ht.get(),classNames:k.get(),styles:tt.get(),emptyText:U.get()===void 0?`暂无节点`:U.get(),showLine:Ze.get(),disabled:z.get(),blockNode:y.get(),checkable:x.get(),showIcon:Xe.get(),selectable:Me.get()===void 0||Me.get(),hasLoadData:!!le.get(),titleFormatter:rt.get(),switcherIcon:nt.get(),icon:se.get(),directoryMode:R.get(),dragConfig:_t.get(),handleDragStartNode:dn,handleDragEnterNode:fn,handleDragOverNode:pn,handleDragLeaveNode:mn,handleDragEndNode:hn,handleDropNode:gn,handleExpandToggle:Gt,handleCheck:qt,handleDragMouseDown:_n,handleLabelMouseDown:vn,handleLabelActivate:yn,handleLabelContextMenu:bn}),Cn=()=>{a.value=r.loadingKeyTexts??[],Et()};return s(`TreeRoot:setup-effect:3:0`,()=>C(()=>{let e=r.renderRequests??new Set;e.add(Cn),r.renderRequests=e})),s(`TreeRoot:setup-effect:3:1`,()=>O(()=>{on(),ut.current?.(),ut.current=null,r.renderRequests?.delete(Cn)})),s(`TreeRoot:setup-effect:3:2`,()=>B(()=>[at.get()===void 0?[]:at.get(),ot.get(),ae.get(),We.get(),E.get(),W.get(),je.get()],()=>{Nt()})),{__rue_compiled_branch_key:0,create:()=>v(e=>{let r=me().content.cloneNode(!0).firstChild,a=r,o=r.childNodes[1],s=r.childNodes[0],c=s.parentNode,l=r.childNodes[1].childNodes[0],d=l.parentNode;n(a,()=>ct.get(),[`className`,`style`,`data-rue-tree`,`data-rue-tree-version`,`__rue_static_template_id__`]);let _;j(()=>{let e=Z(Z(Z(`rue-tree rounded-box border border-base-300 bg-base-100 text-base-content shadow-sm`,Je($e.get())),k.get()?.root),ee.get()),t=e===!1||e==null?``:String(e);Object.is(_,t)||(_=t,a.setAttribute(`class`,t))});let y;j(()=>{let e={...tt.get()?.root,...et.get()},t=f(e);Object.is(y,t)||(y=t,a.style.cssText=t)}),a.setAttribute(`data-rue-tree`,`true`);let b;j(()=>{let e=String(i.value);Object.is(b,e)||(b=e,e==null?a.removeAttribute(`data-rue-tree-version`):a.setAttribute(`data-rue-tree-version`,String(e)))});let x;j(()=>{let e=Z(Se(`grid gap-0.5`,mt.get().bodyPadding,mt.get().textClass),k.get()?.body),t=e===!1||e==null?``:String(e);Object.is(x,t)||(x=t,o.setAttribute(`class`,t))}),o.setAttribute(`data-rue-tree-body`,`true`);let S;j(()=>{let e={...xn.get(),...tt.get()?.body},t=f(e);Object.is(S,t)||(S=t,o.style.cssText=t)});let C=e=>{let t=Yt;typeof t==`function`&&t(e)};o.addEventListener(`scroll`,C),L(()=>o.removeEventListener(`scroll`,C)),m(c,s,()=>p.get()?{__rue_compiled_branch_key:!0,create:()=>v(e=>{let t=A(`div`,e),n;j(()=>{let e=Z(Z(Se(`border-b border-base-200/80`,mt.get().headerPadding),k.get()?.header),k.get()?.search),r=e===!1||e==null?``:String(e);Object.is(n,r)||(n=r,t.setAttribute(`class`,r))});let r;j(()=>{let e={...tt.get()?.header,...tt.get()?.search},n=f(e);Object.is(r,n)||(r=n,t.style.cssText=n)});let i=A(`input`,t);D(t,i),i.setAttribute(`type`,`text`),i.setAttribute(`class`,`input input-bordered input-sm w-full bg-base-100`);let a;j(()=>{let e=Bt().searchValue,t=e==null?``:String(e);Object.is(a,t)||(a=t,i.value=t)});let o;j(()=>{let e=Q.get()===void 0?`搜索节点`:Q.get();Object.is(o,e)||(o=e,e==null||e===!1?i.removeAttribute(`placeholder`):i.setAttribute(`placeholder`,String(e)))});let s=e=>{let t=e=>Jt(e.currentTarget.value);typeof t==`function`&&t(e)};return i.addEventListener(`input`,s),L(()=>i.removeEventListener(`input`,s)),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>h(e=>{let t=N();return[t.firstChild,t.lastChild]})});let w=(e,t,n)=>{let r=()=>u(Ye,()=>({...Sn()}));return e==null?r():g(e,n,r)},T=l.nextSibling;return d.removeChild(l),t({parent:d,before:T},()=>w,()=>({})),[r,r]})}}),e=>w(()=>{d.set(e.allowDrop),p.set(e.allowSearch),y.set(e.blockNode),b.set(e.checkStrictly),x.set(e.checkable),E.set(e.checkedKeys),ee.set(e.className),k.set(e.classNames),te.set(e.defaultCheckedKeys),M.set(e.defaultExpandAll),ne.set(e.defaultExpandedKeys),I.set(e.defaultSearchValue),re.set(e.defaultSelectedKeys),R.set(e.directoryMode),z.set(e.disabled),V.set(e.draggable),U.set(e.emptyText),ie.set(e.expandAction),W.set(e.expandedKeys),ae.set(e.fieldNames),G.set(e.filterTreeNode),oe.set(e.height),se.set(e.icon),ce.set(e.itemHeight),le.set(e.loadData),ue.set(e.multiple),de.set(e.onCheck),fe.set(e.onDoubleClick),pe.set(e.onDragEnd),ge.set(e.onDragEnter),ve.set(e.onDragLeave),J.set(e.onDragOver),Y.set(e.onDragStart),Ce.set(e.onDrop),Ee.set(e.onExpand),De.set(e.onScroll),Oe.set(e.onSearch),ke.set(e.onSelect),Ae.set(e.rangeSelect),Q.set(e.searchPlaceholder),je.set(e.searchValue),Me.set(e.selectable),We.set(e.selectedKeys),Xe.set(e.showIcon),Ze.set(e.showLine),Qe.set(e.size),$e.set(e.status),et.set(e.style),tt.set(e.styles),nt.set(e.switcherIcon),rt.set(e.titleFormatter),it.set(e.toggleSelect),at.set(e.treeData),ot.set(e.treeDataSimpleMode),st.set(e.virtual),ct.set(c(e,`allowDrop.allowSearch.blockNode.checkStrictly.checkable.checkedKeys.className.classNames.defaultCheckedKeys.defaultExpandAll.defaultExpandedKeys.defaultSearchValue.defaultSelectedKeys.directoryMode.disabled.draggable.emptyText.expandAction.expandedKeys.fieldNames.filterTreeNode.height.icon.itemHeight.loadData.multiple.onCheck.onDoubleClick.onDragEnd.onDragEnter.onDragLeave.onDragOver.onDragStart.onDrop.onExpand.onScroll.onSearch.onSelect.rangeSelect.searchPlaceholder.searchValue.selectable.selectedKeys.showIcon.showLine.size.status.style.styles.switcherIcon.titleFormatter.toggleSelect.treeData.treeDataSimpleMode.virtual`.split(`.`)))}),()=>e(r)))},Ze=Object.assign(Xe,{DirectoryTree:(t,n,r)=>{let i=_(H(t,`blockNode`)),a=_(H(t,`className`)),s=_(H(t,`expandAction`)),l=_(H(t,`showIcon`)),d=_(c(e(t),[`blockNode`,`className`,`expandAction`,`showIcon`]));return o(u(Xe,()=>({...d.get(),className:Z(`rue-directory-tree`,a.get()),showIcon:l.get()===void 0||l.get(),blockNode:i.get()===void 0||i.get(),directoryMode:!0,expandAction:s.get()===void 0?`click`:s.get()})),e=>w(()=>{i.set(e.blockNode),a.set(e.className),s.set(e.expandAction),l.set(e.showIcon),d.set(c(e,[`blockNode`,`className`,`expandAction`,`showIcon`]))}),()=>e(t))}}),Qe=V(`<div class="flex min-w-0 items-center justify-between gap-3"><span class="truncate">rue:direct-text</span><span class="badge badge-ghost badge-xs"><!--rue:text-hole:1--></span></div>`),$e=V(`<div class="flex min-w-0 items-center justify-between gap-3"><span class="truncate">rue:direct-text</span><span><!--rue:text-hole:1--></span></div>`),et=V(`<div class="not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100"><table class="table table-zebra"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><!--rue:text-hole:0--></tbody></table></div>`),tt=V(`<li class="list-none"><button type="button"><span class="inline-flex size-5 items-center justify-center rounded-md bg-base-200/80 text-[11px] text-base-content/55"><!--rue:text-hole:0--></span><span>rue:direct-text</span></button><!--rue:text-hole:2--></li>`),nt=V(`<div class="max-w-none prose prose-sm md:prose-base"><h1>Tree 树控件</h1><p>Rue 的 Tree 补上了独立树组件这块空白：保持 TreeView 示例里递归数据直改的灵活性，同时把 树控件常用的展开、选中、勾选、简单模式、异步加载和自定义标题一次覆盖。 视觉上使用 Rue 当前的卡片、badge 和 base 色阶体系，不照搬其他组件库的外观。</p><div class="not-prose mt-6 grid gap-3 md:grid-cols-3"><div class="rounded-[1.4rem] border border-base-300 bg-gradient-to-br from-base-100 to-base-200/40 p-4 shadow-sm"><div class="text-xs uppercase tracking-[0.2em] text-base-content/45">Node Model</div><div class="mt-2 text-base font-semibold">选择、勾选、展开三条状态线</div><p class="mt-2 mb-0 text-sm text-base-content/68">目录树、权限树、发布树都能直接套进来。</p></div><div class="rounded-[1.4rem] border border-base-300 bg-gradient-to-br from-base-100 to-base-200/40 p-4 shadow-sm"><div class="text-xs uppercase tracking-[0.2em] text-base-content/45">DirectoryTree</div><div class="mt-2 text-base font-semibold">目录树快捷 API</div><p class="mt-2 mb-0 text-sm text-base-content/68">支持 click / doubleClick 展开，以及更接近文件浏览器的多选交互。</p></div><div class="rounded-[1.4rem] border border-base-300 bg-gradient-to-br from-base-100 to-base-200/40 p-4 shadow-sm"><div class="text-xs uppercase tracking-[0.2em] text-base-content/45">Heavy Interaction</div><div class="mt-2 text-base font-semibold">拖拽排序与虚拟滚动</div><p class="mt-2 mb-0 text-sm text-base-content/68">长列表和拖拽改序终于能落在同一个 Tree 上了。</p></div></div><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--><!--rue:opaque-hole:5--><!--rue:opaque-hole:6--><div class="not-prose mt-10 space-y-2"><h2 class="text-2xl font-semibold">更重交互</h2><p class="text-sm text-base-content/70">当 Tree 既要承载拖拽整理，又要承载超长数据时，draggable 和 virtual 就是两个最关键的控制面。</p></div><!--rue:opaque-hole:7--><!--rue:opaque-hole:8--><!--rue:opaque-hole:9--><!--rue:opaque-hole:10--><div class="not-prose mt-10 space-y-4"><h2 class="text-2xl font-semibold">API</h2><!--rue:opaque-hole:11--></div></div>`),rt=(t,n,r)=>{let i=_(H(t,`rows`));return o(v(e=>{let t=et().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[1].childNodes[0],r=n.parentNode,a=V(`<tr><td><code><!--rue:text-hole:0--></code></td><td>rue:row-text</td><td><code><!--rue:text-hole:2--></code></td><td><code><!--rue:text-hole:3--></code></td></tr>`),o=[];return re(()=>{let e=i.get()||[];o=ee(r,n,o,e,(e,t)=>e.prop,(e,t,n)=>{let r=e,i;return M(e=>{let t=a().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0].childNodes[0],o=n.parentNode,s=t.childNodes[1].childNodes[0];s.parentNode;let c=t.childNodes[2].childNodes[0].childNodes[0],l=c.parentNode,u=t.childNodes[3].childNodes[0].childNodes[0],d=u.parentNode,f=k(``);o.insertBefore(f,n),o.removeChild(n);let p=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);f.textContent=p;let m=r.description==null||typeof r.description==`boolean`?``:String(r.description);s.textContent=m;let h=k(``);l.insertBefore(h,c),l.removeChild(c);let g=r.type==null||typeof r.type==`boolean`?``:String(r.type);h.textContent=g;let _=k(``);d.insertBefore(_,u),d.removeChild(u);let v=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);return _.textContent=v,i=()=>{{let e=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);Object.is(p,e)||(f.textContent=e,p=e)}{let e=r.description==null||typeof r.description==`boolean`?``:String(r.description);Object.is(m,e)||(s.textContent=e,m=e)}{let e=r.type==null||typeof r.type==`boolean`?``:String(r.type);Object.is(g,e)||(h.textContent=e,g=e)}{let e=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);Object.is(v,e)||(_.textContent=e,v=e)}},[t,t]},(n,a)=>{e=n,t=a,r=n,i()},void 0,n)},!1,!0)}),L(()=>E(o)),[t,t]}),e=>w(()=>{i.set(e.rows)}),()=>e(t))},it=[{title:`产品平台`,key:`platform`,children:[{title:`文档中心`,key:`docs-api`},{title:`组件市场`,key:`component-hub`},{title:`示例仓库`,key:`examples`}]},{title:`工程效率`,key:`engineering`,children:[{title:`构建链路`,key:`build-pipeline`},{title:`质量门禁`,key:`quality-gate`},{title:`发布管道`,key:`release-flow`}]},{title:`增长分析`,key:`growth`,children:[{title:`实验看板`,key:`experiment-board`},{title:`归因报表`,key:`attribution-report`},{title:`留存漏斗`,key:`retention-funnel`}]}],at=[{title:`发布总控`,key:`release-control`,children:[{title:`前台站点`,key:`release-site`,children:[{title:`首页编排`,key:`site-home`},{title:`价格页`,key:`site-pricing`}]},{title:`运营链路`,key:`release-ops`,children:[{title:`投放素材`,key:`ops-assets`},{title:`归因回传`,key:`ops-attribution`}]},{title:`合规审查`,key:`release-compliance`,children:[{title:`隐私条款`,key:`compliance-privacy`},{title:`审计记录`,key:`compliance-audit`}]}]}],ot=[{title:`权限控制`,key:`permission-disabled-root`,children:[{title:`只读目录`,key:`readonly-folder`,disabled:!0,children:[{title:`首页编排`,key:`readonly-home`},{title:`价格页`,key:`readonly-pricing`}]},{title:`可编辑目录`,key:`editable-folder`,children:[{title:`投放素材`,key:`editable-assets`},{title:`归因回传`,key:`editable-attribution`,disableCheckbox:!0}]},{title:`审计日志（仅禁用复选框）`,key:`audit-log`,disableCheckbox:!0}]}],st=[{nodeId:1,parentId:0,code:`workspace`,name:`Workspace`},{nodeId:2,parentId:1,code:`workflow`,name:`Workflow board`},{nodeId:3,parentId:1,code:`briefs`,name:`Briefs`},{nodeId:4,parentId:2,code:`review`,name:`Design review`},{nodeId:5,parentId:2,code:`release`,name:`Release checklist`},{nodeId:6,parentId:3,code:`content`,name:`Content drafts`}],ct=[{title:`app`,key:`dir-app`,children:[{title:`pages`,key:`dir-pages`,children:[{title:`Tree.tsx`,key:`file-tree-page`},{title:`Transfer.tsx`,key:`file-transfer-page`}]},{title:`site`,key:`dir-site`,children:[{title:`SidebarPlaygroundDesign.tsx`,key:`file-sidebar`}]}]},{title:`packages`,key:`dir-packages`,children:[{title:`runtime`,key:`dir-runtime`},{title:`rue-design`,key:`dir-rue-design`}]},{title:`README.md`,key:`file-readme`}],lt=[{title:`alpha.ts`,key:`range-alpha`},{title:`beta.ts`,key:`range-beta`},{title:`gamma.ts`,key:`range-gamma`},{title:`delta.ts`,key:`range-delta`},{title:`epsilon.ts`,key:`range-epsilon`}],ut=[{title:`src`,key:`drag-src`,kind:`folder`,children:[{title:`components`,key:`drag-components`,kind:`folder`,children:[{title:`Tree.tsx`,key:`drag-tree-file`,kind:`file`},{title:`Transfer.tsx`,key:`drag-transfer-file`,kind:`file`}]},{title:`main.ts`,key:`drag-main-file`,kind:`file`}]},{title:`docs`,key:`drag-docs`,kind:`folder`,children:[{title:`routing.md`,key:`drag-routing-file`,kind:`file`},{title:`installation.md`,key:`drag-install-file`,kind:`file`}]},{title:`package.json`,key:`drag-package-file`,kind:`file`}],dt=Array.from({length:120},(e,t)=>({title:`Page ${String(t+1).padStart(3,`0`)}`,key:`virtual-${t}`})),ft=Array.from({length:64},(e,t)=>({title:`Workspace ${String(t+1).padStart(2,`0`)}`,key:`async-virtual-root-${t}`,isLeaf:!1})),pt=`import { ref } from '@rue-js/rue'
import { Tree } from '@rue-js/design'
const selectedKeys = ref(['docs-api'])

<div className="space-y-4">
  <Tree
    treeData={organizationTree}
    selectedKeys={selectedKeys.value}
    defaultExpandAll
    showIcon
    blockNode
    onSelect={nextKeys => {
      selectedKeys.value = nextKeys as string[]
    }}
  />

  <div className="grid gap-3 md:grid-cols-3">
    <div className="rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm">
      <div className="text-xs text-base-content/45">当前选中</div>
      <div className="mt-2 flex flex-wrap gap-2">
        {selectedKeys.value.length ? (
          selectedKeys.value.map(key => (
            <span key={String(key)} className="badge badge-outline badge-sm">
              {String(key)}
            </span>
          ))
        ) : (
          <span className="text-sm text-base-content/55">未选择</span>
        )}
      </div>
    </div>
    <div className="rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm">
      <div className="text-xs text-base-content/45">推荐场景</div>
      <div className="mt-2 text-sm text-base-content/75">组件目录、文档导航、资源分类</div>
    </div>
    <div className="rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm">
      <div className="text-xs text-base-content/45">状态模型</div>
      <div className="mt-2 text-sm text-base-content/75">selectedKeys / expandedKeys 分离，便于受控更新。</div>
    </div>
  </div>
</div>`,mt=`import { ref } from '@rue-js/rue'
import { Tree } from '@rue-js/design'
const selectedKeys = ref<string[]>(['release-control'])
const checkedKeys = ref<string[]>(['site-home'])
const halfCheckedKeys = ref<string[]>(['release-control', 'release-site'])

const extractCheckedKeys = value => {
  return Array.isArray(value) ? value.map(String) : value.checked.map(String)
}

const extractHalfCheckedKeys = (value, info) => {
  if (Array.isArray(value)) {
    return info?.halfCheckedKeys?.map(String) ?? []
  }
  return value.halfChecked.map(String)
}

<div className="space-y-4">
  <Tree
    treeData={permissionTree}
    selectedKeys={selectedKeys.value}
    checkedKeys={checkedKeys.value}
    checkable
    defaultExpandAll
    showLine
    blockNode
    onSelect={nextKeys => {
      selectedKeys.value = nextKeys as string[]
    }}
    onCheck={(nextKeys, info) => {
      checkedKeys.value = extractCheckedKeys(nextKeys)
      halfCheckedKeys.value = extractHalfCheckedKeys(nextKeys, info)
    }}
  />

  <div className="grid gap-3 md:grid-cols-3">
    <div className="rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm">
      <div className="text-xs text-base-content/45">selectedKeys</div>
      <div className="mt-2 flex flex-wrap gap-2">
        {selectedKeys.value.length ? (
          selectedKeys.value.map(key => (
            <span key={String(key)} className="badge badge-outline badge-sm">
              {String(key)}
            </span>
          ))
        ) : (
          <span className="text-sm text-base-content/55">当前没有选中节点</span>
        )}
      </div>
    </div>
    <div className="rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm">
      <div className="text-xs text-base-content/45">checkedKeys</div>
      <div className="mt-2 flex flex-wrap gap-2">
        {checkedKeys.value.map(key => (
          <span key={String(key)} className="badge badge-primary badge-outline badge-sm">
            {String(key)}
          </span>
        ))}
      </div>
    </div>
    <div className="rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm">
      <div className="text-xs text-base-content/45">halfCheckedKeys</div>
      <div className="mt-2 flex flex-wrap gap-2">
        {halfCheckedKeys.value.length ? (
          halfCheckedKeys.value.map(key => (
            <span key={String(key)} className="badge badge-ghost badge-sm">
              {String(key)}
            </span>
          ))
        ) : (
          <span className="text-sm text-base-content/55">当前没有半选</span>
        )}
      </div>
    </div>
  </div>
</div>`,ht=`import { ref } from '@rue-js/rue'
import { Tree } from '@rue-js/design'
const checkedKeys = ref<string[]>(['editable-assets'])

<div className="grid gap-4 lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start">
  <Tree
    treeData={permissionDisabledTree}
    checkedKeys={checkedKeys.value}
    checkable
    defaultExpandAll
    showLine
    blockNode
    onCheck={nextKeys => {
      checkedKeys.value = Array.isArray(nextKeys) ? nextKeys.map(String) : nextKeys.checked.map(String)
    }}
  />

  <div className="space-y-3">
    <div className="rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm">
      <div className="text-xs text-base-content/45">当前勾选</div>
      <div className="mt-2 flex flex-wrap gap-2">
        {checkedKeys.value.map(key => (
          <span key={String(key)} className="badge badge-outline badge-sm">
            {String(key)}
          </span>
        ))}
      </div>
    </div>
    <div className="rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70">
      <div>disabled：整节点不可展开、不可选中、不可勾选。</div>
      <div className="mt-2">disableCheckbox：节点仍可浏览，但复选框不参与交互。</div>
    </div>
  </div>
</div>`,gt=`import { ref } from '@rue-js/rue'
import { Tree } from '@rue-js/design'
const selectedKeys = ref(['workflow'])

<div className="grid gap-4 lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start">
  <Tree
    treeData={simpleModeTree}
    treeDataSimpleMode={{ id: 'nodeId', pId: 'parentId', rootPId: 0 }}
    fieldNames={{ title: 'name', key: 'code' }}
    selectedKeys={selectedKeys.value}
    allowSearch
    defaultExpandAll
    onSelect={nextKeys => {
      selectedKeys.value = nextKeys as string[]
    }}
  />
  <div className="rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70">
    当前选中：<code>{JSON.stringify(selectedKeys.value)}</code>
    <div className="mt-3">
      这类 simple mode 很适合后端直接给 id / pId 的菜单、流程节点和权限项，不需要再先做一遍树转换。
    </div>
  </div>
</div>`,_t=`import { ref } from '@rue-js/rue'
import { Tree } from '@rue-js/design'
const treeData = ref([{ title: '发布总线', key: 'release-bus', isLeaf: false }])
const selectedKeys = ref<string[]>([])
const expandedKeys = ref<string[]>([])

const loadData = async node => {
  if (node.key !== 'release-bus') return
  treeData.value = [
    {
      title: '发布总线',
      key: 'release-bus',
      isLeaf: false,
      children: [
        {
          title: '桌面端',
          key: 'desktop',
          children: [
            { title: 'Windows', key: 'desktop-win' },
            { title: 'macOS', key: 'desktop-mac' },
          ],
        },
        {
          title: '移动端',
          key: 'mobile',
          children: [
            { title: 'iOS', key: 'mobile-ios' },
            { title: 'Android', key: 'mobile-android' },
          ],
        },
      ],
    },
  ]
}

<div className="grid gap-4 lg:grid-cols-[minmax(0,26rem),1fr] lg:items-start">
  <Tree
    treeData={treeData.value}
    selectedKeys={selectedKeys.value}
    expandedKeys={expandedKeys.value}
    loadData={loadData}
    showLine
    showIcon
    blockNode
    titleRender={({ node, loading }) => (
      <div className="flex min-w-0 items-center justify-between gap-3">
        <span className="truncate">{node.title}</span>
        <span className="badge badge-ghost badge-xs">{loading ? 'loading' : node.children.length ? 'branch' : 'leaf'}</span>
      </div>
    )}
    onSelect={nextKeys => {
      selectedKeys.value = nextKeys as string[]
    }}
    onExpand={nextKeys => {
      expandedKeys.value = nextKeys as string[]
    }}
  />
  <div className="space-y-3">
    <div className="rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm">
      <div className="text-xs text-base-content/45">expandedKeys</div>
      <div className="mt-2 text-sm text-base-content/75">{JSON.stringify(expandedKeys.value)}</div>
    </div>
    <div className="rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm">
      <div className="text-xs text-base-content/45">selectedKeys</div>
      <div className="mt-2 text-sm text-base-content/75">{JSON.stringify(selectedKeys.value)}</div>
    </div>
    <div className="rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70">
      展开 release-bus 后才会注入桌面端和移动端节点，适合远端目录、超大权限树和发布范围配置。
    </div>
  </div>
</div>`,vt=`import { computed, ref } from '@rue-js/rue'
import { Tree } from '@rue-js/design'
const selectedKeys = ref(['dir-app'])
const expandAction = ref('click')
const toggleSelect = ref(true)
const rangeSelect = computed(() => (toggleSelect.value ? 'append' : false))

<div className="grid gap-4 lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start">
  <Tree.DirectoryTree
    treeData={directoryTree}
    selectedKeys={selectedKeys.value}
    multiple
    expandAction={expandAction.value}
    toggleSelect={toggleSelect.value}
    rangeSelect={rangeSelect.get()}
    onSelect={nextKeys => {
      selectedKeys.value = nextKeys as string[]
    }}
  />
  <div className="space-y-3">
    <div className="rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm">
      <div className="text-xs text-base-content/45">快捷属性</div>
      <div className="mt-3 flex flex-wrap gap-2">
        <button
          type="button"
          className={expandAction.value === 'click' ? 'btn btn-primary btn-xs' : 'btn btn-ghost btn-xs'}
          onClick={() => {
            expandAction.value = 'click'
          }}
        >
          click 展开
        </button>
        <button
          type="button"
          className={expandAction.value === 'doubleClick' ? 'btn btn-primary btn-xs' : 'btn btn-ghost btn-xs'}
          onClick={() => {
            expandAction.value = 'doubleClick'
          }}
        >
          doubleClick 展开
        </button>
        <button
          type="button"
          className={expandAction.value === false ? 'btn btn-primary btn-xs' : 'btn btn-ghost btn-xs'}
          onClick={() => {
            expandAction.value = false
          }}
        >
          只选中不展开
        </button>
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        <button
          type="button"
          className={toggleSelect.value ? 'btn btn-primary btn-xs' : 'btn btn-ghost btn-xs'}
          onClick={() => {
            toggleSelect.value = true
          }}
        >
          ctrl/meta 追加
        </button>
        <button
          type="button"
          className={!toggleSelect.value ? 'btn btn-primary btn-xs' : 'btn btn-ghost btn-xs'}
          onClick={() => {
            toggleSelect.value = false
          }}
        >
          关闭追加选择
        </button>
      </div>
    </div>
    <div className="rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm">
      <div className="text-xs text-base-content/45">当前选择</div>
      <div className="mt-2 flex flex-wrap gap-2">
        {selectedKeys.value.map(key => (
          <span key={String(key)} className="badge badge-outline badge-sm">
            {String(key)}
          </span>
        ))}
      </div>
    </div>
    <div className="rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70">
      当前组合是 expandAction=<strong>{String(expandAction.value)}</strong>、toggleSelect=<strong>{String(toggleSelect.value)}</strong>、rangeSelect=<strong>{String(rangeSelect.get())}</strong>。
      <div className="mt-3">
        这里专注看目录树的展开动作和“是否允许追加选择”：关闭后会一起停用 ctrl / meta 追加和 shift 区间选择；append / replace 的差异放到下一块对照示例里单独展示。
      </div>
    </div>
  </div>
</div>`,yt=`import { ref } from '@rue-js/rue'
import { Tree } from '@rue-js/design'
const appendSelectedKeys = ref<string[]>([])
const replaceSelectedKeys = ref<string[]>([])
const treeVersion = ref(0)

const reset = () => {
  appendSelectedKeys.value = []
  replaceSelectedKeys.value = []
  treeVersion.value += 1
}

<div className="space-y-4">
  <div className="rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70">
    基础行为：先单击 alpha.ts，再按住 Shift 单击 epsilon.ts，alpha.ts 到 epsilon.ts 都会选中。
    <div className="mt-2">
      append / replace 只影响当前额外非连续选择是否保持：先单击 beta.ts，再按住 Cmd / Ctrl 单击 epsilon.ts，最后按住 Shift 单击 delta.ts。
    </div>
    <div className="mt-2">append 会保持 beta.ts；replace 只保持 delta.ts 到 epsilon.ts 这一段。</div>
  </div>

  <div className="grid gap-4 xl:grid-cols-2">
    <div className="space-y-3">
      <div className="text-sm font-semibold">rangeSelect=&quot;append&quot;</div>
      <Tree.DirectoryTree
        key={\`append-\${treeVersion.value}\`}
        treeData={directoryRangeTree}
        multiple
        toggleSelect
        rangeSelect="append"
        selectedKeys={appendSelectedKeys.value}
        onSelect={nextKeys => {
          appendSelectedKeys.value = nextKeys as string[]
        }}
      />
    </div>

    <div className="space-y-3">
      <div className="text-sm font-semibold">rangeSelect=&quot;replace&quot;</div>
      <Tree.DirectoryTree
        key={\`replace-\${treeVersion.value}\`}
        treeData={directoryRangeTree}
        multiple
        toggleSelect
        rangeSelect="replace"
        selectedKeys={replaceSelectedKeys.value}
        onSelect={nextKeys => {
          replaceSelectedKeys.value = nextKeys as string[]
        }}
      />
    </div>
  </div>
</div>`,bt=`import { ref } from '@rue-js/rue'
import { Tree } from '@rue-js/design'
const treeData = ref(dragTreeSeed)
const dragSummary = ref('folder 支持放入；file 只允许插前和插后，悬停时会显示明确占位态。')

const allowDrop = ({ dropNode, dropToGap }) => {
  return dropToGap || dropNode.raw.kind !== 'file'
}

const handleDrop = info => {
  treeData.value = applyTreeDrop(treeData.value, info)
  dragSummary.value = \`\${String(info.dragNode.key)} -> \${String(info.node.key)} (\${
    info.dropToGap ? (info.dropPosition < 0 ? 'before' : 'after') : 'inside'
  })\`
}

<div className="grid gap-4 lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start">
  <Tree
    treeData={treeData.value}
    draggable
    blockNode
    defaultExpandAll
    allowDrop={allowDrop}
    titleRender={({ node }) => (
      <div className="flex min-w-0 items-center justify-between gap-3">
        <span className="truncate">{node.title}</span>
        <span className={node.raw.kind === 'folder' ? 'badge badge-ghost badge-xs' : 'badge badge-outline badge-xs'}>
          {node.raw.kind}
        </span>
      </div>
    )}
    onDrop={handleDrop}
  />
  <div className="space-y-3">
    <div className="rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm">
      <div className="text-xs text-base-content/45">最近一次拖拽</div>
      <div className="mt-2 text-sm text-base-content/75">{dragSummary.value}</div>
    </div>
    <div className="rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm">
      <div className="text-xs text-base-content/45">allowDrop 规则</div>
      <div className="mt-2 grid gap-2 text-sm text-base-content/75">
        <div>folder：允许放入，也允许插前 / 插后。</div>
        <div>file：只允许插前 / 插后，不允许作为 inside 目标。</div>
      </div>
    </div>
    <div className="rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70">
      拖到 folder 正中央会看到“放入”，拖到行的上沿或下沿则会出现“插前 / 插后”；如果目标是 file，inside 落点会被 allowDrop 直接拦掉。
    </div>
  </div>
</div>`,xt=`import { ref } from '@rue-js/rue'
import { Tree } from '@rue-js/design'
const treeData = Array.from({ length: 120 }, (_, index) => ({
  title: 'Page ' + String(index + 1).padStart(3, '0'),
  key: 'page-' + index,
}))
const selectedKeys = ref(['page-3'])

<div className="grid gap-4 lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start">
  <Tree
    treeData={treeData}
    selectedKeys={selectedKeys.value}
    height={320}
    itemHeight={42}
    virtual
    blockNode
    onSelect={nextKeys => {
      selectedKeys.value = nextKeys as string[]
    }}
  />
  <div className="space-y-3">
    <div className="rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm">
      <div className="text-xs text-base-content/45">数据量</div>
      <div className="mt-2 text-2xl font-semibold">{treeData.length}</div>
    </div>
    <div className="rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm">
      <div className="text-xs text-base-content/45">当前选中</div>
      <div className="mt-2 text-sm text-base-content/75">{JSON.stringify(selectedKeys.value)}</div>
    </div>
    <div className="rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70">
      对文档页目录、埋点树、批量资源目录这种长列表场景，虚拟滚动能显著降低初始渲染压力。
    </div>
  </div>
</div>`,St=`import { ref } from '@rue-js/rue'
import { Tree } from '@rue-js/design'
const treeData = ref(asyncVirtualTreeSeed)
const selectedKeys = ref<string[]>([])
const expandedKeys = ref<string[]>([])

const loadData = async node => {
  if (node.children.length) return
  treeData.value = patchTreeNode(treeData.value, node.key, current => ({
    ...current,
    children: Array.from({ length: 8 }, (_, index) => ({
      title: current.title + ' / Module ' + (index + 1),
      key: String(current.key) + '-child-' + index,
      isLeaf: index % 3 !== 0,
    })),
  }))
}

<div className="grid gap-4 lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start">
  <Tree
    treeData={treeData.value}
    selectedKeys={selectedKeys.value}
    expandedKeys={expandedKeys.value}
    height={340}
    itemHeight={40}
    virtual
    showIcon
    blockNode
    loadData={loadData}
    titleRender={({ node, loading }) => (
      <div className="flex min-w-0 items-center justify-between gap-3">
        <span className="truncate">{node.title}</span>
        <span className="badge badge-ghost badge-xs">
          {loading ? 'loading' : node.children.length ? 'loaded' : node.isLeaf ? 'leaf' : 'lazy'}
        </span>
      </div>
    )}
    onSelect={nextKeys => {
      selectedKeys.value = nextKeys as string[]
    }}
    onExpand={nextKeys => {
      expandedKeys.value = nextKeys as string[]
    }}
  />
  <div className="space-y-3">
    <div className="rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm">
      <div className="text-xs text-base-content/45">根节点数量</div>
      <div className="mt-2 text-2xl font-semibold">{treeData.value.length}</div>
    </div>
    <div className="rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm">
      <div className="text-xs text-base-content/45">已加载分支</div>
      <div className="mt-2 text-2xl font-semibold">{countLoadedBranches(treeData.value)}</div>
    </div>
    <div className="rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm">
      <div className="text-xs text-base-content/45">当前展开</div>
      <div className="mt-2 text-sm text-base-content/75">{JSON.stringify(expandedKeys.value)}</div>
    </div>
    <div className="rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70">
      先滚动到较深位置再展开节点也没问题：视口外的行不会真正渲染，只有命中的 branch 才会触发 loadData 注入子节点。
    </div>
  </div>
</div>`,Ct=`import { computed, ref } from '@rue-js/rue'

type Node = { id: string; name: string; open?: boolean; children?: Node[] }

const treeData = ref<Node>({
  id: 'root',
  name: 'My Tree',
  open: true,
  children: [
    { id: 'hello', name: 'hello' },
    { id: 'world', name: 'world' },
    {
      id: 'branch',
      name: 'child folder',
      open: true,
      children: [
        { id: 'branch-1', name: 'design review' },
        { id: 'branch-2', name: 'release note' },
      ],
    },
  ],
})

const TreeItem = ({ model, onChange }: { model: Node; onChange: (node: Node) => void }) => {
  const isOpen = computed(() => !!model.open)
  const isFolder = computed(() => !!model.children && model.children.length > 0)

  const toggle = () => {
    onChange({ ...model, open: !isOpen.get() })
  }

  const addChild = () => {
    onChange({ ...model, open: true, children: [...(model.children ?? []), { id: model.id + '-new', name: 'new stuff' }] })
  }

  return (
    <li>
      <div onClick={toggle} onDblClick={addChild}>{model.name}</div>
      {isFolder.get() && isOpen.get() ? (
        <ul>{model.children!.map(child => <TreeItem key={child.id} model={child} onChange={next => onChange({ ...model, children: model.children!.map(item => item.id === child.id ? next : item) })} />)}</ul>
      ) : null}
    </li>
  )
}

<div className="card border border-base-200/80 bg-base-100 shadow-sm">
  <div className="card-body grid gap-4 lg:grid-cols-[minmax(0,1fr),18rem] lg:items-start">
    <ul className="m-0 grid gap-1 p-0">
      <TreeItem model={treeData.value} onChange={next => { treeData.value = next }} />
    </ul>
    <div className="rounded-box border border-base-300 bg-base-200/40 p-4 text-sm text-base-content/70">
      单击切换展开，双击叶子节点会把它转换成 folder，并在当前层直接追加一个新子节点。
    </div>
  </div>
</div>`,wt=[{prop:`treeData`,description:`树数据源，支持嵌套 children 和字段映射。`,type:`TreeDataNode[]`,defaultValue:`[]`},{prop:`selectedKeys / defaultSelectedKeys`,description:`受控与非受控的当前选中项，multiple 打开后允许多选。`,type:`TreeKey[]`,defaultValue:`[]`},{prop:`checkedKeys / defaultCheckedKeys`,description:`勾选模式下的选中集合，strict 模式会回传 checked / halfChecked 结构。`,type:`TreeKey[] | { checked: TreeKey[]; halfChecked: TreeKey[] }`,defaultValue:`[]`},{prop:`expandedKeys / defaultExpandedKeys / defaultExpandAll`,description:`控制展开态，适合目录树、权限树和异步加载场景。`,type:`TreeKey[] / boolean`,defaultValue:`[] / false`},{prop:`checkable / checkStrictly`,description:`切换勾选与父子联动模式；strict 会关闭级联。`,type:`boolean`,defaultValue:`false`},{prop:`treeDataSimpleMode / fieldNames`,description:`直接接入 id / pId 扁平数据，同时可映射 title、key、children 字段。`,type:`boolean | TreeSimpleModeConfig / TreeFieldNames`,defaultValue:`- / -`},{prop:`allowSearch / searchValue / filterTreeNode`,description:`提供内置搜索输入和过滤逻辑，命中后会保持祖先链路。`,type:`boolean / string / boolean | ((inputValue, node) => boolean)`,defaultValue:`false / - / true`},{prop:`loadData`,description:`展开未加载分支时触发异步加载，适合远端目录与超大树。`,type:`(node: TreeNode) => Promise<any> | void`,defaultValue:`-`},{prop:`rangeSelect / Tree.DirectoryTree / expandAction / toggleSelect`,description:`Tree 多选和目录树都支持 shift 区间选择；目录树额外提供展开动作和 ctrl/meta 追加选择开关。`,type:`false | "append" | "replace" / DirectoryTreeProps / false | "click" | "doubleClick" / boolean`,defaultValue:`"append" / blockNode=true / showIcon=true / "click" / true`},{prop:`draggable / allowDrop / onDrop`,description:`开启拖拽排序并控制是否允许落点；allowDrop 和 onDrop 都会拿到 dropToGap，UI 会同步显示插前、插后或放入占位态。`,type:`TreeDraggable / (info) => boolean / (info) => void`,defaultValue:`false / - / -`},{prop:`height / itemHeight / virtual`,description:`为长列表开启虚拟滚动；height 定义视口高度，itemHeight 用于估算渲染窗口，也能和 loadData 组合接超长懒加载树。`,type:`number / number / boolean`,defaultValue:`- / 自动按尺寸估算 / true`},{prop:`showLine / showIcon / blockNode`,description:`控制树线、节点图标和整行可点的布局表现。`,type:`boolean`,defaultValue:`false`},{prop:`titleRender / switcherIcon / icon`,description:`按节点态自定义标题、展开图标和节点图标。`,type:`render function | any`,defaultValue:`-`}],Tt=e=>Array.isArray(e)?e:e.checked,Et=(e,t)=>Array.isArray(e)?t?.halfCheckedKeys??[]:e.halfChecked,Dt=e=>`${typeof e}:${String(e)}`,Ot=e=>e.map(e=>({...e,children:Array.isArray(e.children)?Ot(e.children):e.children})),kt=(e,t)=>{let n=Dt(t);for(let r=0;r<e.length;r+=1){let i=e[r];if(Dt(i.key)===n){let[t]=e.splice(r,1);return t??null}if(Array.isArray(i.children)){let e=kt(i.children,t);if(e)return e}}return null},At=(e,t,n,r)=>{let i=Dt(n);for(let a=0;a<e.length;a+=1){let o=e[a];if(Dt(o.key)===i){if(r===0){let e=Array.isArray(o.children)?o.children.slice():[];e.push(t),o.children=e}else e.splice(r<0?a:a+1,0,t);return!0}if(Array.isArray(o.children)&&At(o.children,t,n,r))return!0}return!1},jt=(e,t)=>{let n=Ot(e),r=kt(n,t.dragNode.key);return r&&(At(n,r,t.node.key,t.dropPosition)||n.push(r)),n},Mt=(e,t,n)=>{let r=Dt(t);for(let i=0;i<e.length;i+=1){let a=e[i];if(Dt(a.key)===r){let t=n(a);if(t===a)return e;let r=e.slice();return r[i]=t,r}if(Array.isArray(a.children)&&a.children.length){let r=Mt(a.children,t,n);if(r===a.children)continue;let o=e.slice();return o[i]={...a,children:r},o}}return e},Nt=e=>e.reduce((e,t)=>!Array.isArray(t.children)||!t.children.length?e:e+1+Nt(t.children),0),Pt=(n,r,i)=>{let a=_(H(n,`model`)),s=_(H(n,`onChange`)),c=S(()=>!!a.get().open),l=S(()=>!!a.get().children&&a.get().children.length>0),d=e=>{e?.stopPropagation(),s.get()({...a.get(),open:!c.get()})},f=e=>{e?.stopPropagation(),s.get()({...a.get(),open:!0,children:[...a.get().children??[],{id:`${a.get().id}-new-${a.get().children?.length??0}`,name:`new stuff`}]})},p=e=>{e?.stopPropagation(),l.get()||f()};return F(()=>o(v(e=>{let n=N(),r=tt().content.cloneNode(!0),i=r.firstChild,o=i.childNodes[0],y=i.childNodes[0].childNodes[0].childNodes[0],b=y.parentNode,x=i.childNodes[0].childNodes[1].childNodes[0],S=x.parentNode,C=i.childNodes[1],w=C.parentNode,T=I(`rue:text-hole:1`);S.replaceChild(T,x),n.appendChild(r),o.setAttribute(`type`,`button`);let O;j(()=>{let e=`flex items-center gap-2 rounded-xl px-3 py-2 text-left text-sm transition `+(l.get()?`font-semibold text-base-content`:`text-base-content/80 hover:bg-base-200/70`),t=e===!1||e==null?``:String(e);Object.is(O,t)||(O=t,o.setAttribute(`class`,t))});let ee=e=>{let t=e=>d(e);typeof t==`function`&&t(e)};o.addEventListener(`click`,ee),L(()=>o.removeEventListener(`click`,ee));let M=e=>{let t=e=>p(e);typeof t==`function`&&t(e)};o.addEventListener(`dblclick`,M),L(()=>o.removeEventListener(`dblclick`,M)),t({parent:b,before:y},()=>l.get()?c.get()?(e,t,n)=>{let r=()=>h(e=>{let t=k(`−`);return[t,t]});return e==null?r():g(e,n,r)}:(e,t,n)=>{let r=()=>h(e=>{let t=k(`+`);return[t,t]});return e==null?r():g(e,n,r)}:(e,t,n)=>{let r=()=>h(e=>{let t=k(`•`);return[t,t]});return e==null?r():g(e,n,r)},()=>({})),t({parent:S,before:T},()=>U(a.get().name),()=>({})),m(w,C,()=>l.get()&&c.get()?{__rue_compiled_branch_key:!0,create:()=>v(e=>{let t=A(`ul`,e);t.setAttribute(`class`,`mt-1 grid gap-1 pl-5`);let n=I(`rue:list:end`);D(t,n);let r=[];re(()=>{let e=a.get().children||[];r=te(n.parentNode,n,r,e,(e,t)=>e.id,(e,t)=>{let n=_(e);return ne((e,t,r)=>{let i=()=>u(Pt,()=>({model:n.get(),onChange:e=>s.get()({...a.get(),children:a.get().children.map(t=>t.id===n.get().id?e:t)})}));return e==null?i():g(e,r,i)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),L(()=>E(r));let i=A(`li`,t);D(t,i),i.setAttribute(`class`,`list-none`);let o=A(`button`,i);D(i,o),o.setAttribute(`type`,`button`),o.setAttribute(`class`,`btn btn-ghost btn-xs rounded-full text-emerald-600`);let c=e=>{let t=e=>f(e);typeof t==`function`&&t(e)};return o.addEventListener(`click`,c),L(()=>o.removeEventListener(`click`,c)),D(o,k(`+ add child`)),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>h(e=>{let t=N();return[t.firstChild,t.lastChild]})});let P=k(``),F=k(``);return n.insertBefore(P,n.firstChild),n.appendChild(F),[n.firstChild,n.lastChild]}),e=>w(()=>{a.set(e.model),s.set(e.onChange)}),()=>e(n)))},Ft=(e,n,o)=>{let s=P([`docs-api`]),c=P([`dir-app`]),f=P(`click`),C=P(!0),w=S(()=>C.value?`append`:!1),T=P([]),O=P([]),ee=P(0),M=P([`release-control`]),B=P([`site-home`]),V=P([`release-control`,`release-site`]),H=P([`editable-assets`]),ae=P([`workflow`]),G=P([]),oe=P([]),se=P(Ot(ut)),ce=P(`folder 支持放入；file 只允许插前和插后，悬停时会显示明确占位态。`),le=P([`virtual-3`]),ue=P(Ot(ft)),de=P([]),fe=P([]),pe=S(()=>Nt(ue.value)),me=P([{title:`发布总线`,key:`release-bus`,isLeaf:!1}]),he=P({id:`root`,name:`My Tree`,open:!0,children:[{id:`hello`,name:`hello`},{id:`world`,name:`world`},{id:`branch`,name:`child folder`,open:!0,children:[{id:`branch-1`,name:`design review`},{id:`branch-2`,name:`release note`}]}]}),K={basic:P(`preview`),directory:P(`preview`),directoryRange:P(`preview`),checkable:P(`preview`),checkableDisabled:P(`preview`),simple:P(`preview`),async:P(`preview`),drag:P(`preview`),virtual:P(`preview`),virtualAsync:P(`preview`),legacy:P(`preview`)},ge=async e=>{e.key===`release-bus`&&(me.value=[{title:`发布总线`,key:`release-bus`,isLeaf:!1,children:[{title:`桌面端`,key:`desktop`,children:[{title:`Windows`,key:`desktop-win`},{title:`macOS`,key:`desktop-mac`}]},{title:`移动端`,key:`mobile`,children:[{title:`iOS`,key:`mobile-ios`},{title:`Android`,key:`mobile-android`}]}]}])},_e=async e=>{e.children.length||(ue.value=Mt(ue.value,e.key,e=>({...e,children:Array.from({length:8},(t,n)=>({title:`${String(e.title)} / Module ${n+1}`,key:`${String(e.key)}-child-${n}`,isLeaf:n%3!=0}))})))},ve=()=>{T.value=[],O.value=[],ee.value+=1};return F(()=>u(ie,()=>({children:(e,n,o)=>{let S=()=>v(e=>{let n=N(),o=nt().content.cloneNode(!0),S=o.firstChild,P=S.childNodes[3],F=P.parentNode,ie=S.childNodes[4],ye=ie.parentNode,be=S.childNodes[5],q=be.parentNode,J=S.childNodes[6],xe=J.parentNode,Y=S.childNodes[7],Se=Y.parentNode,Ce=S.childNodes[8],we=Ce.parentNode,X=S.childNodes[9],Te=X.parentNode,Z=S.childNodes[11],Ee=Z.parentNode,De=S.childNodes[12],Oe=De.parentNode,ke=S.childNodes[13],Ae=ke.parentNode,Q=S.childNodes[14],je=Q.parentNode,$=S.childNodes[15].childNodes[1],Me=$.parentNode;n.appendChild(o);let Ne=(e,t,n)=>{let r=()=>u(W,()=>({title:`基础选中与整行交互`,summary:`默认 Tree 就是一个纯浏览 + 选中容器；blockNode 和 showIcon 让它更像配置面板里的主导航。`,tab:K.basic,code:pt,preview:(e,t,n)=>{let r=()=>v(e=>{let t=A(`div`,e);t.setAttribute(`class`,`space-y-4 not-prose`),i(t,Ze,()=>({treeData:it,selectedKeys:s.value,defaultExpandAll:!0,showIcon:!0,blockNode:!0,onSelect:e=>{s.value=e}}));let n=A(`div`,t);D(t,n),n.setAttribute(`class`,`grid gap-3 md:grid-cols-3`);let r=A(`div`,n);D(n,r),r.setAttribute(`class`,`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`);let o=A(`div`,r);D(r,o),o.setAttribute(`class`,`text-xs text-base-content/45`),D(o,k(`当前选中`));let c=A(`div`,r);D(r,c),c.setAttribute(`class`,`mt-2 flex flex-wrap gap-2`),a(()=>s.value.length?{__rue_compiled_branch_key:!0,create:()=>v(e=>{let t=N(),n=I(`rue:list:end`);D(t,n);let r=[];re(()=>{let e=s.value||[];r=te(n.parentNode,n,r,e,(e,t)=>String(e),(e,t)=>{let n=_(e);return ne((e,t,r)=>{let i=()=>b(e=>{let t=A(`span`,e);t.setAttribute(`class`,`badge badge-outline badge-sm`);let r=k(``);return D(t,r),y(r,()=>String(n.get())),[t,t]});return e==null?i():g(e,r,i)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),L(()=>E(r));let i=k(``),a=k(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]})}:{__rue_compiled_branch_key:!1,create:()=>h(e=>{let t=A(`span`,e);return t.setAttribute(`class`,`text-sm text-base-content/55`),D(t,k(`未选择`)),[t,t]})}).__rue_compiled_mount(c);let l=A(`div`,n);D(n,l),l.setAttribute(`class`,`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`);let u=A(`div`,l);D(l,u),u.setAttribute(`class`,`text-xs text-base-content/45`),D(u,k(`推荐场景`));let d=A(`div`,l);D(l,d),d.setAttribute(`class`,`mt-2 text-sm text-base-content/75`),D(d,k(`组件目录、文档导航、资源分类`));let f=A(`div`,n);D(n,f),f.setAttribute(`class`,`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`);let p=A(`div`,f);D(f,p),p.setAttribute(`class`,`text-xs text-base-content/45`),D(p,k(`状态模型`));let m=A(`div`,f);return D(f,m),m.setAttribute(`class`,`mt-2 text-sm text-base-content/75`),D(m,k(`selectedKeys / expandedKeys 分离，便于受控更新。`)),[t,t]});return e==null?r():g(e,n,r)}}));return e==null?r():g(e,n,r)},Pe=P.nextSibling;F.removeChild(P),t({parent:F,before:Pe},()=>Ne,()=>({}));let Fe=(e,n,r)=>{let a=()=>u(W,()=>({title:`DirectoryTree 目录树快捷 API`,summary:`Tree.DirectoryTree 默认补上目录图标、整行可点和 click 展开；这里先只看 expandAction 和 toggleSelect 这两个基础交互开关。`,tab:K.directory,code:vt,preview:(e,n,r)=>{let a=()=>v(e=>{let n=A(`div`,e);n.setAttribute(`class`,`grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`),i(n,Ze.DirectoryTree,()=>({treeData:ct,selectedKeys:c.value,multiple:!0,expandAction:f.value,toggleSelect:C.value,rangeSelect:w.get(),onSelect:e=>{c.value=e}}));let r=A(`div`,n);D(n,r),r.setAttribute(`class`,`space-y-3`);let a=A(`div`,r);D(r,a),a.setAttribute(`class`,`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`);let o=A(`div`,a);D(a,o),o.setAttribute(`class`,`text-xs text-base-content/45`),D(o,k(`快捷属性`));let s=A(`div`,a);D(a,s),s.setAttribute(`class`,`mt-3 flex flex-wrap gap-2`);let l=A(`button`,s);D(s,l),l.setAttribute(`type`,`button`);let u;j(()=>{let e=f.value===`click`?`btn btn-primary btn-xs`:`btn btn-ghost btn-xs`,t=e===!1||e==null?``:String(e);Object.is(u,t)||(u=t,l.setAttribute(`class`,t))}),L(R(e,l,`click`,()=>()=>{f.value=`click`})),D(l,k(`click 展开`));let p=A(`button`,s);D(s,p),p.setAttribute(`type`,`button`);let m;j(()=>{let e=f.value===`doubleClick`?`btn btn-primary btn-xs`:`btn btn-ghost btn-xs`,t=e===!1||e==null?``:String(e);Object.is(m,t)||(m=t,p.setAttribute(`class`,t))}),L(R(e,p,`click`,()=>()=>{f.value=`doubleClick`})),D(p,k(`doubleClick 展开`));let h=A(`button`,s);D(s,h),h.setAttribute(`type`,`button`);let v;j(()=>{let e=f.value===!1?`btn btn-primary btn-xs`:`btn btn-ghost btn-xs`,t=e===!1||e==null?``:String(e);Object.is(v,t)||(v=t,h.setAttribute(`class`,t))}),L(R(e,h,`click`,()=>()=>{f.value=!1})),D(h,k(`只选中不展开`));let x=A(`div`,a);D(a,x),x.setAttribute(`class`,`mt-2 flex flex-wrap gap-2`);let S=A(`button`,x);D(x,S),S.setAttribute(`type`,`button`);let T;j(()=>{let e=C.value?`btn btn-primary btn-xs`:`btn btn-ghost btn-xs`,t=e===!1||e==null?``:String(e);Object.is(T,t)||(T=t,S.setAttribute(`class`,t))}),L(R(e,S,`click`,()=>()=>{C.value=!0})),D(S,k(`ctrl/meta 追加`));let O=A(`button`,x);D(x,O),O.setAttribute(`type`,`button`);let ee;j(()=>{let e=C.value?`btn btn-ghost btn-xs`:`btn btn-primary btn-xs`,t=e===!1||e==null?``:String(e);Object.is(ee,t)||(ee=t,O.setAttribute(`class`,t))}),L(R(e,O,`click`,()=>()=>{C.value=!1})),D(O,k(`关闭追加选择`));let M=A(`div`,r);D(r,M),M.setAttribute(`class`,`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`);let N=A(`div`,M);D(M,N),N.setAttribute(`class`,`text-xs text-base-content/45`),D(N,k(`当前选择`));let P=A(`div`,M);D(M,P),P.setAttribute(`class`,`mt-2 flex flex-wrap gap-2`);let F=I(`rue:list:end`);D(P,F);let z=[];re(()=>{let e=c.value||[];z=te(P,F,z,e,(e,t)=>String(e),(e,t)=>{let n=_(e);return ne((e,t,r)=>{let i=()=>b(e=>{let t=A(`span`,e);t.setAttribute(`class`,`badge badge-outline badge-sm`);let r=k(``);return D(t,r),y(r,()=>String(n.get())),[t,t]});return e==null?i():g(e,r,i)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),L(()=>E(z));let B=A(`div`,r);D(r,B),B.setAttribute(`class`,`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`),D(B,k(`当前组合是 expandAction=`));let V=A(`strong`,B);D(B,V);let H=k(``);D(V,H),d(H,()=>String(f.value)),D(B,k(` 、toggleSelect=`));let ie=A(`strong`,B);D(B,ie);let W=k(``);D(ie,W),d(W,()=>String(C.value)),D(B,k(` 、rangeSelect=`));let ae=A(`strong`,B);D(B,ae);let G=I(`rue:compiled-slot`);D(ae,G),t({parent:ae,before:G},()=>U(w.get()),()=>({})),D(B,k(`。 `));let oe=A(`div`,B);return D(B,oe),oe.setAttribute(`class`,`mt-3`),D(oe,k(`普通点击会落成单选；打开追加后，meta / ctrl 会追加或移除选中，shift 也会启用区间选择。关闭追加时，这两类补充选择都会停用；append / replace 的差异放到下面的对照示例里单独演示。`)),[n,n]});return e==null?a():g(e,r,a)}}));return e==null?a():g(e,r,a)},Ie=ie.nextSibling;ye.removeChild(ie),t({parent:ye,before:Ie},()=>Fe,()=>({}));let Le=(e,n,i)=>{let o=()=>u(W,()=>({title:`shift append vs shift replace`,summary:`Shift 的基础语义是先选一个节点，再 Shift 选另一个节点，中间连续区间都会选中；append / replace 只决定当前额外选择是否保持。`,tab:K.directoryRange,code:yt,preview:(e,n,i)=>{let o=()=>v(e=>{let n=N(),i=A(`div`,n);D(n,i),r(i,`space-y-4 not-prose`);let o=A(`div`,i);D(i,o),r(o,`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`);let s=A(`div`,o);D(o,s),D(s,k(`基础行为：先单击 alpha.ts，再按住 Shift 单击 epsilon.ts，alpha.ts 到 epsilon.ts 都会选中。`));let c=A(`div`,o);D(o,c),r(c,`mt-2`),D(c,k(`append / replace 只影响当前额外非连续选择是否保持：重置后先单击 beta.ts，再按住 Cmd / Ctrl 单击 epsilon.ts，最后按住 Shift 单击 delta.ts。`));let u=A(`div`,o);D(o,u),r(u,`mt-2`),D(u,k(`append 会保持 beta.ts；replace 只保持 delta.ts 到 epsilon.ts 这一段。`));let d=A(`button`,o);D(o,d),p(d,`type`,`button`),r(d,`btn btn-ghost btn-xs mt-3`);let f=e=>{let t=ve;typeof t==`function`&&t(e)};d.addEventListener(`click`,f),L(()=>d.removeEventListener(`click`,f)),D(d,k(`重置两边示例`));let m=A(`div`,i);D(i,m),r(m,`grid gap-4 xl:grid-cols-2`);let x=A(`div`,m);D(m,x),r(x,`space-y-3 rounded-[1.4rem] border border-base-300 bg-base-100 p-4 shadow-sm`);let S=A(`div`,x);D(x,S),r(S,`flex items-center justify-between gap-3`);let C=A(`div`,S);D(S,C);let w=A(`div`,C);D(C,w),r(w,`text-sm font-semibold`),D(w,k(`rangeSelect="append"`));let j=A(`div`,C);D(C,j),r(j,`text-xs text-base-content/55`),D(j,k(`保持原先的非连续选择，再并入新的 shift 区间。`));let M=A(`span`,S);D(S,M),r(M,`badge badge-outline badge-sm`),D(M,k(`append`));let P=I(`rue:component:anchor`);D(x,P),t({parent:x,before:P},()=>(e,t,n)=>g(e,n,()=>l(Ze.DirectoryTree,()=>({key:`append-${ee.value}`,treeData:lt,selectedKeys:T.value,multiple:!0,toggleSelect:!0,rangeSelect:`append`,onSelect:e=>{T.value=e}}))),()=>({}));let F=A(`div`,x);D(x,F),r(F,`rounded-box border border-base-300 bg-base-100 px-4 py-3 text-sm text-base-content/70`);let R=A(`div`,F);D(F,R),r(R,`text-xs text-base-content/45`),D(R,k(`当前选择`));let z=A(`div`,F);D(F,z),r(z,`mt-2 flex flex-wrap gap-2`),a(()=>T.value.length?{__rue_compiled_branch_key:!0,create:()=>v(e=>{let t=N(),n=I(`rue:list:end`);D(t,n);let r=[];re(()=>{let e=T.value||[];r=te(n.parentNode,n,r,e,(e,t)=>String(e),(e,t)=>{let n=_(e);return ne((e,t,r)=>{let i=()=>b(e=>{let t=A(`span`,e);t.setAttribute(`class`,`badge badge-outline badge-sm`);let r=k(``);return D(t,r),y(r,()=>String(n.get())),[t,t]});return e==null?i():g(e,r,i)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),L(()=>E(r));let i=k(``),a=k(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]})}:{__rue_compiled_branch_key:!1,create:()=>h(e=>{let t=A(`span`,e);return t.setAttribute(`class`,`text-sm text-base-content/55`),D(t,k(`还没有选择`)),[t,t]})}).__rue_compiled_mount(z);let B=A(`div`,m);D(m,B),r(B,`space-y-3 rounded-[1.4rem] border border-base-300 bg-base-100 p-4 shadow-sm`);let V=A(`div`,B);D(B,V),r(V,`flex items-center justify-between gap-3`);let H=A(`div`,V);D(V,H);let U=A(`div`,H);D(H,U),r(U,`text-sm font-semibold`),D(U,k(`rangeSelect="replace"`));let ie=A(`div`,H);D(H,ie),r(ie,`text-xs text-base-content/55`),D(ie,k(`只保持新的 shift 区间，基础的非连续选择会被替换掉。`));let W=A(`span`,V);D(V,W),r(W,`badge badge-primary badge-outline badge-sm`),D(W,k(`replace`));let ae=I(`rue:component:anchor`);D(B,ae),t({parent:B,before:ae},()=>(e,t,n)=>g(e,n,()=>l(Ze.DirectoryTree,()=>({key:`replace-${ee.value}`,treeData:lt,selectedKeys:O.value,multiple:!0,toggleSelect:!0,rangeSelect:`replace`,onSelect:e=>{O.value=e}}))),()=>({}));let G=A(`div`,B);D(B,G),r(G,`rounded-box border border-base-300 bg-base-100 px-4 py-3 text-sm text-base-content/70`);let oe=A(`div`,G);D(G,oe),r(oe,`text-xs text-base-content/45`),D(oe,k(`当前选择`));let se=A(`div`,G);D(G,se),r(se,`mt-2 flex flex-wrap gap-2`),a(()=>O.value.length?{__rue_compiled_branch_key:!0,create:()=>v(e=>{let t=N(),n=I(`rue:list:end`);D(t,n);let r=[];re(()=>{let e=O.value||[];r=te(n.parentNode,n,r,e,(e,t)=>String(e),(e,t)=>{let n=_(e);return ne((e,t,r)=>{let i=()=>b(e=>{let t=A(`span`,e);t.setAttribute(`class`,`badge badge-outline badge-sm`);let r=k(``);return D(t,r),y(r,()=>String(n.get())),[t,t]});return e==null?i():g(e,r,i)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),L(()=>E(r));let i=k(``),a=k(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]})}:{__rue_compiled_branch_key:!1,create:()=>h(e=>{let t=A(`span`,e);return t.setAttribute(`class`,`text-sm text-base-content/55`),D(t,k(`还没有选择`)),[t,t]})}).__rue_compiled_mount(se);let ce=k(``),le=k(``);return n.insertBefore(ce,n.firstChild),n.appendChild(le),[n.firstChild,n.lastChild]});return e==null?o():g(e,i,o)}}));return e==null?o():g(e,i,o)},Re=be.nextSibling;q.removeChild(be),t({parent:q,before:Re},()=>Le,()=>({}));let ze=(e,t,n)=>{let r=()=>u(W,()=>({title:`父子联动与半选态`,summary:`这一块只看级联勾选和 halfChecked，不再混入 disabled / disableCheckbox，点击父节点时能直接看到整棵子树联动。`,tab:K.checkable,code:mt,preview:(e,t,n)=>{let r=()=>v(e=>{let t=A(`div`,e);t.setAttribute(`class`,`space-y-4 not-prose`),i(t,Ze,()=>({treeData:at,selectedKeys:M.value,checkedKeys:B.value,checkable:!0,defaultExpandAll:!0,showLine:!0,blockNode:!0,onSelect:e=>{M.value=e},onCheck:(e,t)=>{B.value=Tt(e),V.value=Et(e,t)}}));let n=A(`div`,t);D(t,n),n.setAttribute(`class`,`grid gap-3 md:grid-cols-3`);let r=A(`div`,n);D(n,r),r.setAttribute(`class`,`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`);let o=A(`div`,r);D(r,o),o.setAttribute(`class`,`text-xs text-base-content/45`),D(o,k(`selectedKeys`));let s=A(`div`,r);D(r,s),s.setAttribute(`class`,`mt-2 flex flex-wrap gap-2`),a(()=>M.value.length?{__rue_compiled_branch_key:!0,create:()=>v(e=>{let t=N(),n=I(`rue:list:end`);D(t,n);let r=[];re(()=>{let e=M.value||[];r=te(n.parentNode,n,r,e,(e,t)=>String(e),(e,t)=>{let n=_(e);return ne((e,t,r)=>{let i=()=>b(e=>{let t=A(`span`,e);t.setAttribute(`class`,`badge badge-outline badge-sm`);let r=k(``);return D(t,r),y(r,()=>String(n.get())),[t,t]});return e==null?i():g(e,r,i)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),L(()=>E(r));let i=k(``),a=k(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]})}:{__rue_compiled_branch_key:!1,create:()=>h(e=>{let t=A(`span`,e);return t.setAttribute(`class`,`text-sm text-base-content/55`),D(t,k(`当前没有选中节点`)),[t,t]})}).__rue_compiled_mount(s);let c=A(`div`,n);D(n,c),c.setAttribute(`class`,`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`);let l=A(`div`,c);D(c,l),l.setAttribute(`class`,`text-xs text-base-content/45`),D(l,k(`checkedKeys`));let u=A(`div`,c);D(c,u),u.setAttribute(`class`,`mt-2 flex flex-wrap gap-2`);let d=I(`rue:list:end`);D(u,d);let f=[];re(()=>{let e=B.value||[];f=te(u,d,f,e,(e,t)=>String(e),(e,t)=>{let n=_(e);return ne((e,t,r)=>{let i=()=>b(e=>{let t=A(`span`,e);t.setAttribute(`class`,`badge badge-primary badge-outline badge-sm`);let r=k(``);return D(t,r),y(r,()=>String(n.get())),[t,t]});return e==null?i():g(e,r,i)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),L(()=>E(f));let p=A(`div`,n);D(n,p),p.setAttribute(`class`,`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`);let m=A(`div`,p);D(p,m),m.setAttribute(`class`,`text-xs text-base-content/45`),D(m,k(`halfCheckedKeys`));let x=A(`div`,p);return D(p,x),x.setAttribute(`class`,`mt-2 flex flex-wrap gap-2`),a(()=>V.value.length?{__rue_compiled_branch_key:!0,create:()=>v(e=>{let t=N(),n=I(`rue:list:end`);D(t,n);let r=[];re(()=>{let e=V.value||[];r=te(n.parentNode,n,r,e,(e,t)=>String(e),(e,t)=>{let n=_(e);return ne((e,t,r)=>{let i=()=>b(e=>{let t=A(`span`,e);t.setAttribute(`class`,`badge badge-ghost badge-sm`);let r=k(``);return D(t,r),y(r,()=>String(n.get())),[t,t]});return e==null?i():g(e,r,i)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),L(()=>E(r));let i=k(``),a=k(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]})}:{__rue_compiled_branch_key:!1,create:()=>h(e=>{let t=A(`span`,e);return t.setAttribute(`class`,`text-sm text-base-content/55`),D(t,k(`当前没有半选`)),[t,t]})}).__rue_compiled_mount(x),[t,t]});return e==null?r():g(e,n,r)}}));return e==null?r():g(e,n,r)},Be=J.nextSibling;xe.removeChild(J),t({parent:xe,before:Be},()=>ze,()=>({}));let Ve=(e,t,n)=>{let r=()=>u(W,()=>({title:`禁用节点与禁用复选框`,summary:`把 disabled 和 disableCheckbox 单独拆出来看：前者整节点只读，后者只禁用勾选框，不再干扰联动示例。`,tab:K.checkableDisabled,code:ht,preview:(e,t,n)=>{let r=()=>v(e=>{let t=A(`div`,e);t.setAttribute(`class`,`grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`),i(t,Ze,()=>({treeData:ot,checkedKeys:H.value,checkable:!0,defaultExpandAll:!0,showLine:!0,blockNode:!0,onCheck:e=>{H.value=Tt(e)}}));let n=A(`div`,t);D(t,n),n.setAttribute(`class`,`space-y-3`);let r=A(`div`,n);D(n,r),r.setAttribute(`class`,`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`);let o=A(`div`,r);D(r,o),o.setAttribute(`class`,`text-xs text-base-content/45`),D(o,k(`当前勾选`));let s=A(`div`,r);D(r,s),s.setAttribute(`class`,`mt-2 flex flex-wrap gap-2`),a(()=>H.value.length?{__rue_compiled_branch_key:!0,create:()=>v(e=>{let t=N(),n=I(`rue:list:end`);D(t,n);let r=[];re(()=>{let e=H.value||[];r=te(n.parentNode,n,r,e,(e,t)=>String(e),(e,t)=>{let n=_(e);return ne((e,t,r)=>{let i=()=>b(e=>{let t=A(`span`,e);t.setAttribute(`class`,`badge badge-outline badge-sm`);let r=k(``);return D(t,r),y(r,()=>String(n.get())),[t,t]});return e==null?i():g(e,r,i)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),L(()=>E(r));let i=k(``),a=k(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]})}:{__rue_compiled_branch_key:!1,create:()=>h(e=>{let t=A(`span`,e);return t.setAttribute(`class`,`text-sm text-base-content/55`),D(t,k(`当前没有勾选`)),[t,t]})}).__rue_compiled_mount(s);let c=A(`div`,n);D(n,c),c.setAttribute(`class`,`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm text-sm text-base-content/75`);let l=A(`div`,c);D(c,l),l.setAttribute(`class`,`font-medium text-base-content`),D(l,k(`disabled`));let u=A(`div`,c);D(c,u),u.setAttribute(`class`,`mt-2`),D(u,k(`整节点不可展开、不可选中、不可勾选，适合只读目录或冻结配置。`));let d=A(`div`,n);D(n,d),d.setAttribute(`class`,`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm text-sm text-base-content/75`);let f=A(`div`,d);D(d,f),f.setAttribute(`class`,`font-medium text-base-content`),D(f,k(`disableCheckbox`));let p=A(`div`,d);return D(d,p),p.setAttribute(`class`,`mt-2`),D(p,k(`节点仍能展示和展开，但复选框不会参与交互，适合“只可浏览不可授权”的条目。`)),[t,t]});return e==null?r():g(e,n,r)}}));return e==null?r():g(e,n,r)},He=Y.nextSibling;Se.removeChild(Y),t({parent:Se,before:He},()=>Ve,()=>({}));let Ue=(e,t,n)=>{let a=()=>u(W,()=>({title:`Simple Mode + Search`,summary:`扁平数据直入后，内置搜索会保持命中节点的祖先链，不会把层级上下文切断。`,tab:K.simple,code:gt,preview:(e,t,n)=>{let a=()=>v(()=>{let e=N(),t=A(`div`,e);D(e,t),r(t,`grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`),i(t,Ze,()=>({treeData:st,treeDataSimpleMode:{id:`nodeId`,pId:`parentId`,rootPId:0},fieldNames:{title:`name`,key:`code`},selectedKeys:ae.value,allowSearch:!0,defaultExpandAll:!0,onSelect:e=>{ae.value=e}}));let n=A(`div`,t);D(t,n),r(n,`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`),D(n,k(`当前选中：`));let a=A(`code`,n);D(n,a);let o=x(a);D(a,o),j(()=>{z(o,JSON.stringify(ae.value))});let s=A(`div`,n);D(n,s),r(s,`mt-3`),D(s,k(`这类 simple mode 很适合后端直接给 id / pId 的菜单、流程节点和权限项，不需要再先做一遍树转换。`));let c=k(``),l=k(``);return e.insertBefore(c,e.firstChild),e.appendChild(l),[e.firstChild,e.lastChild]});return e==null?a():g(e,n,a)}}));return e==null?a():g(e,n,a)},We=Ce.nextSibling;we.removeChild(Ce),t({parent:we,before:We},()=>Ue,()=>({}));let Ge=(e,n,o)=>{let s=()=>u(W,()=>({title:`Async Load 与自定义标题`,summary:`第一次展开时再拉子节点，同时用 titleRender 和 icon 把状态信息塞回每一行。`,tab:K.async,code:_t,preview:(e,n,o)=>{let s=()=>v(()=>{let e=N(),n=A(`div`,e);D(e,n),r(n,`grid gap-4 not-prose lg:grid-cols-[minmax(0,26rem),1fr] lg:items-start`),i(n,Ze,()=>({treeData:me.value,selectedKeys:G.value,expandedKeys:oe.value,loadData:ge,showLine:!0,showIcon:!0,blockNode:!0,titleRender:({node:e,loading:n})=>v(r=>{let i=Qe().content.cloneNode(!0).firstChild,o=i.childNodes[0].childNodes[0],s=o.parentNode,c=i.childNodes[1].childNodes[0],l=c.parentNode,u=I(`rue:text-hole:0`);return s.replaceChild(u,o),t({parent:s,before:u},()=>U(e.title),()=>({})),m(l,c,()=>n?{__rue_compiled_branch_key:!0,create:()=>h(e=>{let t=k(`loading`);return[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>a(()=>e.children.length?{__rue_compiled_branch_key:!0,create:()=>h(e=>{let t=k(`branch`);return[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>h(e=>{let t=k(`leaf`);return[t,t]})})}),[i,i]}),onSelect:e=>{G.value=e},onExpand:e=>{oe.value=e}}));let o=A(`div`,n);D(n,o),r(o,`space-y-3`);let s=A(`div`,o);D(o,s),r(s,`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`);let c=A(`div`,s);D(s,c),r(c,`text-xs text-base-content/45`),D(c,k(`expandedKeys`));let l=A(`div`,s);D(s,l),r(l,`mt-2 text-sm text-base-content/75`);let u=x(l);D(l,u),j(()=>{z(u,JSON.stringify(oe.value))});let d=A(`div`,o);D(o,d),r(d,`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`);let f=A(`div`,d);D(d,f),r(f,`text-xs text-base-content/45`),D(f,k(`selectedKeys`));let p=A(`div`,d);D(d,p),r(p,`mt-2 text-sm text-base-content/75`);let g=x(p);D(p,g),j(()=>{z(g,JSON.stringify(G.value))});let _=A(`div`,o);D(o,_),r(_,`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`),D(_,k(`展开 release-bus 后才会注入桌面端和移动端节点，适合远端目录、超大权限树和发布范围配置。`));let y=k(``),b=k(``);return e.insertBefore(y,e.firstChild),e.appendChild(b),[e.firstChild,e.lastChild]});return e==null?s():g(e,o,s)}}));return e==null?s():g(e,o,s)},Ke=X.nextSibling;Te.removeChild(X),t({parent:Te,before:Ke},()=>Ge,()=>({}));let qe=(e,n,r)=>{let a=()=>u(W,()=>({title:`allowDrop 策略与拖拽占位`,summary:`allowDrop 可以把 folder / file 的落点规则写清楚；hover 时 Tree 会直接给出插前、插后或放入占位提示。`,tab:K.drag,code:bt,preview:(e,n,r)=>{let a=()=>v(e=>{let n=A(`div`,e);n.setAttribute(`class`,`grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`),i(n,Ze,()=>({treeData:se.value,draggable:!0,blockNode:!0,defaultExpandAll:!0,allowDrop:({dropNode:e,dropToGap:t})=>t||e.raw.kind!==`file`,titleRender:({node:e})=>v(n=>{let r=$e().content.cloneNode(!0).firstChild,i=r.childNodes[1],a=r.childNodes[0].childNodes[0],o=a.parentNode,s=r.childNodes[1].childNodes[0],c=s.parentNode,l=I(`rue:text-hole:0`);o.replaceChild(l,a);let u;return j(()=>{let t=e.raw.kind===`folder`?`badge badge-ghost badge-xs`:`badge badge-outline badge-xs`,n=t===!1||t==null?``:String(t);Object.is(u,n)||(u=n,i.setAttribute(`class`,n))}),t({parent:o,before:l},()=>U(e.title),()=>({})),t({parent:c,before:s},()=>U(e.raw.kind),()=>({})),[r,r]}),onDrop:e=>{se.value=jt(se.value,e),ce.value=`${String(e.dragNode.key)} -> ${String(e.node.key)} (${e.dropToGap?e.dropPosition<0?`before`:`after`:`inside`})`}}));let r=A(`div`,n);D(n,r),r.setAttribute(`class`,`space-y-3`);let a=A(`div`,r);D(r,a),a.setAttribute(`class`,`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`);let o=A(`div`,a);D(a,o),o.setAttribute(`class`,`text-xs text-base-content/45`),D(o,k(`最近一次拖拽`));let s=A(`div`,a);D(a,s),s.setAttribute(`class`,`mt-2 text-sm text-base-content/75`);let c=k(``);D(s,c),d(c,()=>ce.value);let l=A(`div`,r);D(r,l),l.setAttribute(`class`,`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`);let u=A(`div`,l);D(l,u),u.setAttribute(`class`,`text-xs text-base-content/45`),D(u,k(`allowDrop 规则`));let f=A(`div`,l);D(l,f),f.setAttribute(`class`,`mt-2 grid gap-2 text-sm text-base-content/75`);let p=A(`div`,f);D(f,p),D(p,k(`folder：允许放入，也允许插前 / 插后。`));let m=A(`div`,f);D(f,m),D(m,k(`file：只允许插前 / 插后，不允许作为 inside 目标。`));let h=A(`div`,r);return D(r,h),h.setAttribute(`class`,`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`),D(h,k(`拖到 folder 正中央会看到“放入”，拖到行的上沿或下沿则会出现“插前 / 插后”；如果目标是 file，inside 落点会被 allowDrop 直接拦掉。`)),[n,n]});return e==null?a():g(e,r,a)}}));return e==null?a():g(e,r,a)},Je=Z.nextSibling;Ee.removeChild(Z),t({parent:Ee,before:Je},()=>qe,()=>({}));let Ye=(e,n,a)=>{let o=()=>u(W,()=>({title:`Virtual Scroll`,summary:`长列表下只渲染可见窗口，height 和 itemHeight 负责限定视口和估算切片范围。`,tab:K.virtual,code:xt,preview:(e,n,a)=>{let o=()=>v(()=>{let e=N(),n=A(`div`,e);D(e,n),r(n,`grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`),i(n,Ze,()=>({treeData:dt,selectedKeys:le.value,height:320,itemHeight:42,virtual:!0,blockNode:!0,onSelect:e=>{le.value=e}}));let a=A(`div`,n);D(n,a),r(a,`space-y-3`);let o=A(`div`,a);D(a,o),r(o,`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`);let s=A(`div`,o);D(o,s),r(s,`text-xs text-base-content/45`),D(s,k(`数据量`));let c=A(`div`,o);D(o,c),r(c,`mt-2 text-2xl font-semibold`);let l=I(`rue:slot:anchor`);D(c,l),t({parent:c,before:l},()=>U(dt.length),()=>({}));let u=A(`div`,a);D(a,u),r(u,`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`);let d=A(`div`,u);D(u,d),r(d,`text-xs text-base-content/45`),D(d,k(`当前选中`));let f=A(`div`,u);D(u,f),r(f,`mt-2 text-sm text-base-content/75`);let p=x(f);D(f,p),j(()=>{z(p,JSON.stringify(le.value))});let m=A(`div`,a);D(a,m),r(m,`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`),D(m,k(`对文档页目录、埋点树、批量资源目录这种长列表场景，虚拟滚动能显著降低初始渲染压力。`));let h=k(``),g=k(``);return e.insertBefore(h,e.firstChild),e.appendChild(g),[e.firstChild,e.lastChild]});return e==null?o():g(e,a,o)}}));return e==null?o():g(e,a,o)},Xe=De.nextSibling;Oe.removeChild(De),t({parent:Oe,before:Xe},()=>Ye,()=>({}));let et=(e,n,o)=>{let s=()=>u(W,()=>({title:`Virtual + Async Load 场景页`,summary:`把 virtual、height、itemHeight 和 loadData 合在一起，就能接超长目录或资源树，只在展开分支时再注入子节点。`,tab:K.virtualAsync,code:St,preview:(e,n,o)=>{let s=()=>v(()=>{let e=N(),n=A(`div`,e);D(e,n),r(n,`grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`),i(n,Ze,()=>({treeData:ue.value,selectedKeys:fe.value,expandedKeys:de.value,height:340,itemHeight:40,virtual:!0,showIcon:!0,blockNode:!0,loadData:_e,titleRender:({node:e,loading:n})=>v(r=>{let i=Qe().content.cloneNode(!0).firstChild,o=i.childNodes[0].childNodes[0],s=o.parentNode,c=i.childNodes[1].childNodes[0],l=c.parentNode,u=I(`rue:text-hole:0`);return s.replaceChild(u,o),t({parent:s,before:u},()=>U(e.title),()=>({})),m(l,c,()=>n?{__rue_compiled_branch_key:!0,create:()=>h(e=>{let t=k(`loading`);return[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>a(()=>e.children.length?{__rue_compiled_branch_key:!0,create:()=>h(e=>{let t=k(`loaded`);return[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>a(()=>e.isLeaf?{__rue_compiled_branch_key:!0,create:()=>h(e=>{let t=k(`leaf`);return[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>h(e=>{let t=k(`lazy`);return[t,t]})})})}),[i,i]}),onSelect:e=>{fe.value=e},onExpand:e=>{de.value=e}}));let o=A(`div`,n);D(n,o),r(o,`space-y-3`);let s=A(`div`,o);D(o,s),r(s,`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`);let c=A(`div`,s);D(s,c),r(c,`text-xs text-base-content/45`),D(c,k(`根节点数量`));let l=A(`div`,s);D(s,l),r(l,`mt-2 text-2xl font-semibold`);let u=I(`rue:slot:anchor`);D(l,u),t({parent:l,before:u},()=>U(ue.value.length),()=>({}));let d=A(`div`,o);D(o,d),r(d,`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`);let f=A(`div`,d);D(d,f),r(f,`text-xs text-base-content/45`),D(f,k(`已加载分支`));let p=A(`div`,d);D(d,p),r(p,`mt-2 text-2xl font-semibold`);let g=I(`rue:slot:anchor`);D(p,g),t({parent:p,before:g},()=>U(pe.get()),()=>({}));let _=A(`div`,o);D(o,_),r(_,`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`);let y=A(`div`,_);D(_,y),r(y,`text-xs text-base-content/45`),D(y,k(`当前展开`));let b=A(`div`,_);D(_,b),r(b,`mt-2 text-sm text-base-content/75`);let S=x(b);D(b,S),j(()=>{z(S,JSON.stringify(de.value))});let C=A(`div`,o);D(o,C),r(C,`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`),D(C,k(`先滚动到较深位置再展开节点也没问题：视口外的行不会真正渲染，只有命中的 branch 才会触发 loadData 注入子节点。`));let w=k(``),T=k(``);return e.insertBefore(w,e.firstChild),e.appendChild(T),[e.firstChild,e.lastChild]});return e==null?s():g(e,o,s)}}));return e==null?s():g(e,o,s)},tt=ke.nextSibling;Ae.removeChild(ke),t({parent:Ae,before:tt},()=>et,()=>({}));let ut=(e,t,n)=>{let r=()=>u(W,()=>({title:`展示基础递归 示例`,summary:`基础的 TreeView 行为没有删掉，只是并进 design 页面里，方便对比“直接改数据”这类递归写法。`,tab:K.legacy,code:Ct,preview:(e,t,n)=>{let r=()=>v(e=>{let t=A(`div`,e);t.setAttribute(`class`,`card border border-base-200/80 bg-base-100 shadow-sm not-prose`);let n=A(`div`,t);D(t,n),n.setAttribute(`class`,`card-body grid gap-4 lg:grid-cols-[minmax(0,1fr),18rem] lg:items-start`);let r=A(`ul`,n);D(n,r),r.setAttribute(`class`,`m-0 grid gap-1 p-0`),i(r,Pt,()=>({model:he.value,onChange:e=>{he.value=e}}));let a=A(`div`,n);return D(n,a),a.setAttribute(`class`,`rounded-box border border-base-300 bg-base-200/40 p-4 text-sm text-base-content/70`),D(a,k(`单击切换展开，双击叶子节点会把它转换成 folder，并在当前层直接追加一个新子节点。`)),[t,t]});return e==null?r():g(e,n,r)}}));return e==null?r():g(e,n,r)},ft=Q.nextSibling;je.removeChild(Q),t({parent:je,before:ft},()=>ut,()=>({}));let Dt=(e,t,n)=>{let r=()=>u(rt,()=>({rows:wt}));return e==null?r():g(e,n,r)},Ot=$.nextSibling;Me.removeChild($),t({parent:Me,before:Ot},()=>Dt,()=>({}));let kt=k(``),At=k(``);return n.insertBefore(kt,n.firstChild),n.appendChild(At),[n.firstChild,n.lastChild]});return e==null?S():g(e,o,S)}})))};export{Ft as default};