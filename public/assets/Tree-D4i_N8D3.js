import{Bt as e,Ct as t,Dt as n,F as r,H as i,Ht as a,I as o,Jt as s,Qt as c,St as l,Tt as u,U as d,Ut as f,V as p,Vt as m,Wt as h,Y as g,_n as _,_t as v,at as y,dt as b,en as x,f as S,fn as C,g as w,gn as T,gt as E,h as D,hn as O,in as k,it as A,m as j,mn as M,mt as N,p as ee,pn as P,q as F,qt as te,sn as I,st as L,tt as R,u as z,vn as B,vt as V,yn as H,yt as U,z as ne,zt as W}from"./rue-runtime-Cv6BZekS.js";import{r as re}from"./SidebarPlaygroundDesign-CoDFHXQl.js";import{t as G}from"./PreviewBlock-CeK_jzYH.js";var ie=H(`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m6 3.5 4 4.5-4 4.5"></path></svg>`),K=H(`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" class="size-4" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round"></path></svg>`),ae=H(`<div><!--rue:text-hole:0--><button type="button"><!--rue:text-hole:1--></button><!--rue:text-hole:2--><!--rue:opaque-hole:3--><!--rue:text-hole:4--><button type="button"><span class="min-w-0 truncate">rue:direct-text</span><!--rue:text-hole:6--></button><!--rue:text-hole:7--></div>`),oe=H(`<span>rue:direct-text</span>`),se=H(`<div><span class="h-[2px] flex-1 rounded-full bg-primary/60"></span><span class="rounded-full bg-primary/10 px-2 py-1 text-[10px]">插入到此处</span></div>`),ce=H(`<span class="inline-flex size-6 items-center justify-center text-base-content/60"><!--rue:text-hole:0--></span>`),le=H(`<span class="inline-flex size-6 shrink-0 items-center justify-center rounded-md bg-base-200/80 text-[10px] font-semibold text-base-content/60"><!--rue:text-hole:0--></span>`),ue=H(`<span hidden="" aria-hidden="true"></span>`),de=H(`<div aria-hidden="true"></div>`),fe=H(`<div><!--rue:text-hole:0--></div>`),pe=H(`<section data-rue-tree="true"><!--rue:text-hole:0--><div data-rue-tree-body="true"><!--rue:opaque-hole:1--></div></section>`),me=new WeakMap,q=new WeakMap,he=8,ge=e=>typeof e==`object`&&!!e||typeof e==`function`,_e=(e,t)=>e.length===t.length&&e.every((e,n)=>e===t[n]),ve=(e,t,n)=>e.treeDataSimpleMode===t&&e.fieldNames===n,ye=(e,t,n,r,i)=>(e.treeData===t||_e(e.treeDataRoots,n))&&ve(e,r,i),J=(e,t,n,r)=>{let i=[ge(e)?me.get(e):void 0],a=t[0];ge(a)&&a!==e&&i.push(q.get(a));for(let a of i){let i=a?.find(i=>ye(i,e,t,n,r));if(i)return i}},Y=(e,t,n)=>{if(!ge(t))return;let r=e.get(t);if(!r){e.set(t,[n]);return}let i=r.findIndex(e=>ye(e,n.treeData,n.treeDataRoots,n.treeDataSimpleMode,n.fieldNames));i>=0?r[i]=n:(r.push(n),r.length>he&&r.shift())},be=e=>{Y(me,e.treeData,e),Y(q,e.treeDataRoots[0],e)},X={title:`title`,key:`key`,children:`children`,disabled:`disabled`,selectable:`selectable`,checkable:`checkable`,disableCheckbox:`disableCheckbox`,isLeaf:`isLeaf`,icon:`icon`,className:`className`,id:`id`,pId:`pId`},xe=(...e)=>e.filter(Boolean).join(` `),Se=e=>typeof e==`object`&&!!e&&!Array.isArray(e),Ce=e=>typeof e==`string`||typeof e==`number`,Z=e=>`${typeof e}:${String(e)}`,we=e=>{let t=[],n=new Set;return(e??[]).forEach(e=>{let r=Z(e);n.has(r)||(n.add(r),t.push(e))}),t},Q=(e,t)=>e?t?`${e} ${t}`:e:t??``,Te=(e,t,n)=>U(e=>{let t=O(`span`,e);return t.setAttribute(`class`,`loading loading-spinner loading-xs`),t.setAttribute(`aria-hidden`,`true`),[t,t]}),Ee=(e,t,n)=>{let r=V(E(e,`expanded`)),i=V(E(e,`hidden`));return d(h(e=>{let t=ie().content.cloneNode(!0).firstChild,n=t;n.setAttribute(`viewBox`,`0 0 16 16`),n.setAttribute(`fill`,`none`),n.setAttribute(`stroke`,`currentColor`),n.setAttribute(`strokeWidth`,`1.8`);let a;return k(()=>{let e=Q(`size-4 transition-transform duration-200`,i.get()?`opacity-0`:r.get()?`rotate-90`:``),t=e===!1||e==null?``:String(e);Object.is(a,t)||(a=t,n.setAttribute(`class`,t))}),n.setAttribute(`aria-hidden`,`true`),[t,t]}),e=>x(()=>{r.set(e.expanded),i.set(e.hidden)}),()=>v(e))},De=(e,t,n)=>U(e=>{let t=O(`svg`,e);t.setAttribute(`viewBox`,`0 0 16 16`),t.setAttribute(`fill`,`currentColor`),t.setAttribute(`class`,`size-4`),t.setAttribute(`aria-hidden`,`true`);let n=O(`path`,t);return C(t,n),n.setAttribute(`d`,`M5 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM11 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM11 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM5 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM11 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z`),[t,t]}),Oe=(e,t,n)=>{let r=V(E(e,`expanded`));return d(h(e=>{let t=K().content.cloneNode(!0).firstChild,n=t.childNodes[0];n.setAttribute(`strokeLinecap`,`round`),n.setAttribute(`strokeLinejoin`,`round`);let i;return k(()=>{let e=r.get()?`M2.5 6.5h11l-1.2 6h-9.1l-1.2-6ZM2.5 5V3.5h4l1.2 1.5h5.8v1.5`:`M2.5 4.5h4l1.2 1.5h5.8v6.5h-11v-8Z`;Object.is(i,e)||(i=e,e==null||e===!1?n.removeAttribute(`d`):n.setAttribute(`d`,String(e)))}),[t,t]}),e=>x(()=>{r.set(e.expanded)}),()=>v(e))},ke=(e,t,n)=>U(e=>{let t=O(`svg`,e);t.setAttribute(`viewBox`,`0 0 16 16`),t.setAttribute(`fill`,`none`),t.setAttribute(`stroke`,`currentColor`),t.setAttribute(`strokeWidth`,`1.5`),t.setAttribute(`class`,`size-4`),t.setAttribute(`aria-hidden`,`true`);let n=O(`path`,t);C(t,n),n.setAttribute(`strokeLinecap`,`round`),n.setAttribute(`strokeLinejoin`,`round`),n.setAttribute(`d`,`M4 2.5h5l3 3v8H4v-11Z`);let r=O(`path`,t);return C(t,r),r.setAttribute(`strokeLinecap`,`round`),r.setAttribute(`strokeLinejoin`,`round`),r.setAttribute(`d`,`M9 2.5v3h3`),[t,t]}),Ae=(e,t,n)=>e[n?.[t]??X[t]],je=(e,t)=>Ae(e,`title`,t)??e.title??e.key,$=e=>new Set(we(e).map(Z)),Me=e=>e==null||typeof e==`boolean`?``:typeof e==`string`||typeof e==`number`?String(e):Array.isArray(e)?e.map(e=>Me(e)).filter(Boolean).join(` `):typeof e==`object`?[`title`,`label`,`name`,`text`,`description`,`children`].map(t=>Me(e[t])).filter(Boolean).join(` `):``,Ne=(e,t,n)=>{if(!t)return e;let r=Se(t)?t:void 0,i=r?.id??n?.id??X.id,a=r?.pId??n?.pId??X.pId,o=r?.rootPId??0,s=n?.children??X.children,c=new Map;e.forEach((e,t)=>{let n=e[i]??e.key??t;c.set(n,{...e,[s]:[]})});let l=[];return e.forEach((e,t)=>{let n=e[i]??e.key??t,r=e[a],u=c.get(n);if(!u)return;if(r==null||r===o||!c.has(r)){l.push(u);return}let d=c.get(r);if(!d){l.push(u);return}let f=d[s]??[];f.push(u),d[s]=f}),l},Pe=(e,t)=>{let n=[],r={},i=(e,a,o,s)=>{let c=Ae(e,`key`,t),l=Ce(c)?c:o,u=Z(l),d=Ae(e,`isLeaf`,t),f={key:l,keyText:u,title:je(e,t),depth:a,children:[],raw:e,disabled:!!Ae(e,`disabled`,t),selectable:Ae(e,`selectable`,t)!==!1,checkable:Ae(e,`checkable`,t)!==!1,disableCheckbox:!!Ae(e,`disableCheckbox`,t),isLeaf:!1,className:Ae(e,`className`,t),icon:Ae(e,`icon`,t),parentKeyText:s};n.push(f),r[u]=f;let p=Ae(e,`children`,t);return f.children=Array.isArray(p)?p.map((e,t)=>i(e,a+1,`${o}-${t}`,u)):[],f.isLeaf=d===!0||d!==!1&&f.children.length===0,f};return{roots:e.map((e,t)=>i(e,0,`node-${t}`)),flat:n,byKeyText:r}},Fe=e=>{let t=[],n=e=>{!e.disabled&&e.checkable&&!e.disableCheckbox&&t.push(e.keyText),e.children.forEach(e=>n(e))};return n(e),t},Ie=e=>{let t=[],n=e=>{t.push(e.key),e.children.forEach(e=>n(e))};return n(e),t},Le=(e,t,n)=>{let r=new Set,i=new Set,a={},o=e=>{let s=!e.disabled&&e.checkable&&!e.disableCheckbox,c=e.children.map(e=>o(e)).filter(e=>e.participates),l=t.has(e.keyText),u=l,d=!1;if(!n&&c.length>0){let e=c.every(e=>e.checked),t=c.some(e=>e.checked||e.halfChecked);u=l||e,d=!u&&t}let f={checked:u,halfChecked:d,participates:s||c.length>0};return a[e.keyText]=f,u&&s&&r.add(e.keyText),d&&s&&i.add(e.keyText),f};return e.forEach(e=>o(e)),{checkedKeys:r,halfCheckedKeys:i,stateMap:a}},Re=(e,t,n,r)=>{let i=new Set(e),a=new Set(t),o=n.filter(e=>i.has(e.keyText)).map(e=>e.key).filter(Ce);return r?{checked:o,halfChecked:n.filter(e=>a.has(e.keyText)).map(e=>e.key).filter(Ce)}:o},ze=(e,t,n,r)=>{if(!n){let n=[],r=e=>{n.push({node:e,matched:!1}),t.has(e.keyText)&&e.children.forEach(e=>r(e))};return e.forEach(e=>r(e)),n}let i=e=>{let t=r(e),n=e.children.flatMap(e=>i(e));if(!t&&n.length===0)return[];if(t){let t=[{node:e,matched:!0}],n=e=>{t.push({node:e,matched:!1}),e.children.forEach(e=>n(e))};return e.children.forEach(e=>n(e)),t}return[{node:e,matched:!1},...n]};return e.flatMap(e=>i(e))},Be=(e,t,n)=>t?typeof n==`function`?n(t,e):n===!1||Me(e.title).toLowerCase().includes(t.toLowerCase()):!0,Ve=(e,t,n)=>{let r=t.parentKeyText;for(;r;){if(r===e.keyText)return!0;r=n[r]?.parentKeyText}return!1},He=e=>{let t=!!e,n=Se(e)?e:void 0;return{enabled:t,icon:n?.icon,nodeDraggable:r=>t?typeof e==`function`?e(r):n&&typeof n.nodeDraggable==`function`?n.nodeDraggable(r):!0:!1}},Ue=(e,t,n,r,i)=>{if(!i||!n||!r)return{items:e,topSpacer:0,bottomSpacer:0};let a=r+2,o=Math.max(1,Math.ceil(n/a))+12,s=Math.max(0,e.length-o),c=Math.min(s,Math.max(0,Math.floor(t/a)-6)),l=Math.min(e.length,c+o);return{items:e.slice(c,l),topSpacer:c*a,bottomSpacer:Math.max(0,(e.length-l)*a)}},We=e=>{if(e===-1)return`before`;if(e===1)return`after`;if(e===0)return`inside`},Ge=(e,t)=>e.map(e=>t[e]?.key).filter(Ce),Ke=(e,t)=>{if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0},qe=e=>{switch(e){case`small`:case`sm`:return{headerPadding:`px-4 py-3`,bodyPadding:`px-3 py-3`,rowPadding:`py-1.5`,textClass:`text-sm`,rowMinHeight:36,rowEstimate:42};case`large`:case`lg`:return{headerPadding:`px-5 py-4`,bodyPadding:`px-4 py-4`,rowPadding:`py-2.5`,textClass:`text-[0.95rem]`,rowMinHeight:44,rowEstimate:50};default:return{headerPadding:`px-4 py-3.5`,bodyPadding:`px-3.5 py-3.5`,rowPadding:`py-2`,textClass:`text-sm`,rowMinHeight:40,rowEstimate:46}}},Je=e=>{switch(e){case`error`:return`border-error/55 shadow-[0_0_0_1px_rgba(248,113,113,0.14)]`;case`warning`:return`border-warning/55 shadow-[0_0_0_1px_rgba(251,191,36,0.14)]`;default:return``}},Ye=(t,n,i)=>{let u=V(E(t,`blockNode`)),g=V(E(t,`checkable`)),_=V(E(t,`classNames`)),y=V(E(t,`componentSize`)),b=V(E(t,`directoryMode`)),w=V(E(t,`disabled`)),A=V(E(t,`dragConfig`)),j=V(E(t,`emptyText`)),N=V(E(t,`fixedVirtualRowHeight`)),F=V(E(t,`handleCheck`)),L=V(E(t,`handleDragEndNode`)),z=V(E(t,`handleDragEnterNode`)),B=V(E(t,`handleDragLeaveNode`)),H=V(E(t,`handleDragMouseDown`)),ne=V(E(t,`handleDragOverNode`)),re=V(E(t,`handleDragStartNode`)),G=V(E(t,`handleDropNode`)),ie=V(E(t,`handleExpandToggle`)),K=V(E(t,`handleLabelActivate`)),pe=V(E(t,`handleLabelContextMenu`)),me=V(E(t,`handleLabelMouseDown`)),q=V(E(t,`hasLoadData`)),he=V(E(t,`icon`)),ge=V(E(t,`loadingKeyTexts`)),_e=V(E(t,`selectable`)),ve=V(E(t,`showIcon`)),ye=V(E(t,`showLine`)),J=V(E(t,`snapshot`)),Y=V(E(t,`styles`)),be=V(E(t,`switcherIcon`)),X=V(E(t,`titleFormatter`)),Se=V(E(t,`version`)),Ce=(t,n,r)=>{let i=V(E(t,`rowArg0`)),{node:o,state:c,expanded:b,selected:S,loading:D,canExpand:j,rowIsDragTarget:ee,canDragNode:te,dropIntent:H,labelText:oe}=s(`useSetup:0:0`,()=>{let e=R(()=>i.get().node),t=R(()=>J.get().checkState.stateMap[e.get().keyText]??{checked:!1,halfChecked:!1,participates:!0}),n=R(()=>J.get().searchValue?!0:J.get().expandedKeyTextSet.has(e.get().keyText)),r=R(()=>J.get().selectedKeyTextSet.has(e.get().keyText)),a=R(()=>ge.get().includes(e.get().keyText)),o=R(()=>!!q.get()||!!e.get().children.length||!e.get().isLeaf),s=R(()=>J.get().dragState.overKeyText===e.get().keyText);return{node:e,state:t,expanded:n,selected:r,loading:a,canExpand:o,rowIsDragTarget:s,canDragNode:R(()=>A.get().enabled&&A.get().nodeDraggable(e.get())&&!w.get()&&!e.get().disabled),dropIntent:R(()=>s.get()?We(J.get().dragState.dropPosition):void 0),labelText:R(()=>String(X.get()?X.get()({node:e.get(),expanded:n.get(),selected:r.get(),checked:t.get().checked,halfChecked:t.get().halfChecked,loading:a.get()}):e.get().title))}});return d((e=>e)(h(t=>{let n=ae().content.cloneNode(!0).firstChild,r=n,i=n.childNodes[1],s=n.childNodes[5],d=n.childNodes[0],v=d.parentNode,x=n.childNodes[1].childNodes[0],E=x.parentNode,A=n.childNodes[2],R=A.parentNode,V=n.childNodes[3],se=V.parentNode,ce=n.childNodes[4],le=ce.parentNode,ue=n.childNodes[5].childNodes[0].childNodes[0],de=ue.parentNode,fe=P(`rue:text-hole:5`);de.replaceChild(fe,ue);let q=n.childNodes[5].childNodes[1],ge=q.parentNode,X=n.childNodes[6],Se=X.parentNode,Ce;k(()=>{let e=Q(xe(`rue-tree-node group relative flex min-w-0 items-center gap-1 rounded-lg py-0.5 pr-2 text-base-content outline-none transition-colors duration-150`,w.get()||o.get().disabled?`opacity-55`:H.get()===`inside`?`bg-primary/10 ring-1 ring-primary/20`:H.get()?`bg-primary/5`:`hover:bg-base-200/65`,ye.get()&&o.get().depth>0&&`border-l border-base-300/60`,o.get().className),_.get()?.node),t=e===!1||e==null?``:String(e);Object.is(Ce,t)||(Ce=t,r.setAttribute(`class`,t))});let De;k(()=>{let e={paddingLeft:`${o.get().depth*18+8}px`,height:N.get()?`${N.get()}px`:void 0,minHeight:N.get()?void 0:`${y.get().rowMinHeight}px`,...Y.get()?.node},t=l(e);Object.is(De,t)||(De=t,r.style.cssText=t)});let Oe;k(()=>{let e=o.get().keyText;Object.is(Oe,e)||(Oe=e,e==null?r.removeAttribute(`data-rue-tree-node`):r.setAttribute(`data-rue-tree-node`,String(e)))});let ke;k(()=>{let e=H.get()??``;Object.is(ke,e)||(ke=e,e==null?r.removeAttribute(`data-rue-tree-drop-intent`):r.setAttribute(`data-rue-tree-drop-intent`,String(e)))});let je;k(()=>{let e=ee.get()?String(J.get().dragState.dropPosition??0):``;Object.is(je,e)||(je=e,e==null?r.removeAttribute(`data-rue-tree-drop-position`):r.setAttribute(`data-rue-tree-drop-position`,String(e)))});let $;k(()=>{let e=te.get();Object.is($,e)||($=e,e==null||e===!1?r.removeAttribute(`draggable`):r.setAttribute(`draggable`,String(e)))});let Me=e=>{let t=e=>re.get()(o.get(),e);typeof t==`function`&&t(e)};r.addEventListener(`dragstart`,Me),I(()=>r.removeEventListener(`dragstart`,Me));let Ne=e=>{let t=e=>z.get()(o.get(),e);typeof t==`function`&&t(e)};r.addEventListener(`dragenter`,Ne),I(()=>r.removeEventListener(`dragenter`,Ne));let Pe=e=>{let t=e=>ne.get()(o.get(),e);typeof t==`function`&&t(e)};r.addEventListener(`dragover`,Pe),I(()=>r.removeEventListener(`dragover`,Pe));let Fe=e=>{let t=e=>B.get()(o.get(),e);typeof t==`function`&&t(e)};r.addEventListener(`dragleave`,Fe),I(()=>r.removeEventListener(`dragleave`,Fe));let Ie=e=>{let t=e=>L.get()(o.get(),e);typeof t==`function`&&t(e)};r.addEventListener(`dragend`,Ie),I(()=>r.removeEventListener(`dragend`,Ie));let Le=e=>{let t=e=>G.get()(o.get(),e);typeof t==`function`&&t(e)};r.addEventListener(`drop`,Le),I(()=>r.removeEventListener(`drop`,Le)),i.setAttribute(`type`,`button`);let Re;k(()=>{let e=Q(xe(`inline-flex size-6 shrink-0 items-center justify-center rounded-md text-base-content/55 transition-colors duration-150 hover:bg-base-200 hover:text-base-content disabled:cursor-default disabled:opacity-30`,!j.get()&&`pointer-events-none`),_.get()?.switcher),t=e===!1||e==null?``:String(e);Object.is(Re,t)||(Re=t,i.setAttribute(`class`,t))});let ze;k(()=>{let e=Y.get()?.switcher,t=l(e);Object.is(ze,t)||(ze=t,i.style.cssText=t)});let Be;k(()=>{let e=!!(!j.get()||w.get()||o.get().disabled);Object.is(Be,e)||(Be=e,i.disabled=e)});let Ve;k(()=>{let e=b.get()?`折叠节点`:`展开节点`;Object.is(Ve,e)||(Ve=e,e==null?i.removeAttribute(`aria-label`):i.setAttribute(`aria-label`,String(e)))});let He=e=>{let t=e=>ie.get()(o.get(),e);typeof t==`function`&&t(e)};i.addEventListener(`click`,He),I(()=>i.removeEventListener(`click`,He)),s.setAttribute(`type`,`button`);let Ue;k(()=>{let e=Q(xe(`flex min-w-0 items-center gap-2 rounded-md px-2 text-left transition-colors duration-150`,y.get().rowPadding,u.get()?`flex-1 justify-between`:`max-w-full`,S.get()?`selected bg-primary/12 text-primary`:`text-base-content hover:bg-base-200/70`,(w.get()||o.get().disabled||!_e.get()||!o.get().selectable)&&`cursor-not-allowed opacity-55`),_.get()?.label),t=e===!1||e==null?``:String(e);Object.is(Ue,t)||(Ue=t,s.setAttribute(`class`,t))});let We;k(()=>{let e=Y.get()?.label,t=l(e);Object.is(We,t)||(We=t,s.style.cssText=t)});let Ge;k(()=>{let e=!!(w.get()||o.get().disabled||!_e.get()||!o.get().selectable);Object.is(Ge,e)||(Ge=e,s.disabled=e)});let Ke;k(()=>{let e=te.get();Object.is(Ke,e)||(Ke=e,e==null||e===!1?s.removeAttribute(`draggable`):s.setAttribute(`draggable`,String(e)))});let qe=e=>{let t=e=>{e.stopPropagation(),re.get()(o.get(),e)};typeof t==`function`&&t(e)};s.addEventListener(`dragstart`,qe),I(()=>s.removeEventListener(`dragstart`,qe));let Je=e=>{let t=e=>{e.stopPropagation(),z.get()(o.get(),e)};typeof t==`function`&&t(e)};s.addEventListener(`dragenter`,Je),I(()=>s.removeEventListener(`dragenter`,Je));let Ye=e=>{let t=e=>{e.stopPropagation(),ne.get()(o.get(),e)};typeof t==`function`&&t(e)};s.addEventListener(`dragover`,Ye),I(()=>s.removeEventListener(`dragover`,Ye));let Xe=e=>{let t=e=>{e.stopPropagation(),B.get()(o.get(),e)};typeof t==`function`&&t(e)};s.addEventListener(`dragleave`,Xe),I(()=>s.removeEventListener(`dragleave`,Xe));let Ze=e=>{let t=e=>{e.stopPropagation(),L.get()(o.get(),e)};typeof t==`function`&&t(e)};s.addEventListener(`dragend`,Ze),I(()=>s.removeEventListener(`dragend`,Ze));let Qe=e=>{let t=e=>{e.stopPropagation(),G.get()(o.get(),e)};typeof t==`function`&&t(e)};s.addEventListener(`drop`,Qe),I(()=>s.removeEventListener(`drop`,Qe));let $e=e=>{let t=e=>me.get()(o.get(),e);typeof t==`function`&&t(e)};s.addEventListener(`mousedown`,$e),I(()=>s.removeEventListener(`mousedown`,$e));let et=e=>{let t=e=>K.get()(o.get(),e,`click`);typeof t==`function`&&t(e)};s.addEventListener(`click`,et),I(()=>s.removeEventListener(`click`,et));let tt=e=>{let t=e=>K.get()(o.get(),e,`doubleClick`);typeof t==`function`&&t(e)};s.addEventListener(`dblclick`,tt),I(()=>s.removeEventListener(`dblclick`,tt));let nt=e=>{let t=e=>pe.get()(o.get(),e);typeof t==`function`&&t(e)};s.addEventListener(`contextmenu`,nt),I(()=>s.removeEventListener(`contextmenu`,nt)),f(v,d,()=>H.get()===`before`?{__rue_compiled_branch_key:!0,create:()=>p(we,()=>({arg0:o.get(),arg1:`before`}))}:{__rue_compiled_branch_key:!1,create:()=>U(e=>{let t=M();return[t.firstChild,t.lastChild]})}),f(E,x,()=>be.get()===void 0?{__rue_compiled_branch_key:!1,create:()=>a(()=>D.get()?{__rue_compiled_branch_key:!0,create:()=>p(Te,()=>({}))}:{__rue_compiled_branch_key:!1,create:()=>p(Ee,()=>({expanded:b.get(),hidden:o.get().isLeaf&&o.get().children.length===0}))})}:{__rue_compiled_branch_key:!0,create:()=>h(t=>{let n=O(`span`,t),r=P(`rue:compiled-slot`);return C(n,r),e({parent:n,before:r},()=>W(be.get()),()=>({})),[n,n]})}),f(R,A,()=>g.get()?{__rue_compiled_branch_key:!0,create:()=>h(e=>{let t=O(`button`,e);t.setAttribute(`type`,`button`),t.setAttribute(`role`,`checkbox`);let n;k(()=>{let e=c.get().halfChecked?`mixed`:c.get().checked?`true`:`false`;Object.is(n,e)||(n=e,e==null?t.removeAttribute(`aria-checked`):t.setAttribute(`aria-checked`,String(e)))});let r;k(()=>{let e=!!(w.get()||o.get().disabled||o.get().disableCheckbox||!o.get().checkable);Object.is(r,e)||(r=e,t.disabled=e)});let i;k(()=>{let e=Q(xe(`inline-flex size-4 shrink-0 items-center justify-center rounded border text-[11px] font-semibold leading-none transition-colors duration-150`,c.get().checked||c.get().halfChecked?`border-primary bg-primary text-primary-content`:`border-base-content/35 bg-base-100 text-transparent hover:border-primary/60`,(w.get()||o.get().disabled||o.get().disableCheckbox||!o.get().checkable)&&`cursor-not-allowed opacity-45`),_.get()?.checkbox),n=e===!1||e==null?``:String(e);Object.is(i,n)||(i=n,t.setAttribute(`class`,n))});let s;k(()=>{let e=Y.get()?.checkbox,n=l(e);Object.is(s,n)||(s=n,t.style.cssText=n)});let u=e=>{let t=e=>F.get()(o.get(),e);typeof t==`function`&&t(e)};return t.addEventListener(`click`,u),I(()=>t.removeEventListener(`click`,u)),a(()=>c.get().halfChecked?{__rue_compiled_branch_key:!0,create:()=>U(e=>{let t=T(`−`);return[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>a(()=>c.get().checked?{__rue_compiled_branch_key:!0,create:()=>U(e=>{let t=T(`✓`);return[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>U(e=>{let t=T(``);return[t,t]})})}).__rue_compiled_mount(t),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>U(e=>{let t=M();return[t.firstChild,t.lastChild]})});let rt=(e,t,n)=>{let r=()=>p(Z,()=>({arg0:o.get()}));return e==null?r():m(e,n,r)},it=V.nextSibling;return se.removeChild(V),e({parent:se,before:it},()=>rt,()=>({})),f(le,ce,()=>ve.get()||o.get().icon!==void 0||he.get()!==void 0?{__rue_compiled_branch_key:!0,create:()=>p(Ae,()=>({arg0:o.get(),arg1:b.get(),arg2:S.get(),arg3:c.get().checked,arg4:c.get().halfChecked,arg5:D.get()}))}:{__rue_compiled_branch_key:!1,create:()=>U(e=>{let t=M();return[t.firstChild,t.lastChild]})}),e({parent:de,before:fe},()=>W(oe.get()),()=>({})),f(ge,q,()=>H.get()?{__rue_compiled_branch_key:!0,create:()=>h(e=>{let t=O(`span`,e);t.setAttribute(`class`,`badge badge-primary badge-outline badge-xs shrink-0`);let n;return k(()=>{let e=H.get();Object.is(n,e)||(n=e,e==null?t.removeAttribute(`data-rue-tree-drop-placeholder`):t.setAttribute(`data-rue-tree-drop-placeholder`,String(e)))}),a(()=>H.get()===`inside`?{__rue_compiled_branch_key:!0,create:()=>U(e=>{let t=T(`放入`);return[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>a(()=>H.get()===`before`?{__rue_compiled_branch_key:!0,create:()=>U(e=>{let t=T(`插前`);return[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>U(e=>{let t=T(`插后`);return[t,t]})})}).__rue_compiled_mount(t),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>a(()=>S.get()?{__rue_compiled_branch_key:!0,create:()=>U(e=>{let t=O(`span`,e);return t.setAttribute(`class`,`badge badge-primary badge-xs shrink-0`),C(t,T(`选中`)),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>U(e=>{let t=M();return[t.firstChild,t.lastChild]})})}),f(Se,X,()=>H.get()===`after`?{__rue_compiled_branch_key:!0,create:()=>p(we,()=>({arg0:o.get(),arg1:`after`}))}:{__rue_compiled_branch_key:!1,create:()=>U(e=>{let t=M();return[t.firstChild,t.lastChild]})}),[n,n]}),o.get().keyText),e=>x(()=>{i.set(e.rowArg0)}),()=>v(t))},Z=(e,t,n)=>{let i=V(E(e,`arg0`));return d(a(()=>{let{canDragHandle:e,__rue_phase2_canDragHandle:t}=s(`useSetup:0:0`,()=>{let e=R(()=>A.get().enabled&&A.get().nodeDraggable(i.get())&&!w.get()&&!i.get().disabled);return e.get(),{canDragHandle:e,__rue_phase2_canDragHandle:e}});return!t.get()||A.get().icon===!1?{__rue_compiled_branch_key:0,create:()=>U(e=>{let t=M();return[t.firstChild,t.lastChild]})}:{__rue_compiled_branch_key:1,create:()=>h(e=>{let t=O(`span`,e);t.setAttribute(`aria-hidden`,`true`);let n;k(()=>{let e=Q(`inline-flex size-6 shrink-0 cursor-grab items-center justify-center rounded-lg text-base-content/35 transition group-hover:text-base-content/55`,_.get()?.dragHandle),r=e===!1||e==null?``:String(e);Object.is(n,r)||(n=r,t.setAttribute(`class`,r))});let s;k(()=>{let e=Y.get()?.dragHandle,n=l(e);Object.is(s,n)||(s=n,t.style.cssText=n)}),t.setAttribute(`data-rue-tree-drag-handle`,`true`);let c=e=>{let t=e=>H.get()(i.get(),e);typeof t==`function`&&t(e)};return t.addEventListener(`mousedown`,c),I(()=>t.removeEventListener(`mousedown`,c)),a(()=>A.get().icon?{__rue_compiled_branch_key:!0,create:()=>r(e=>{let t=oe().content.cloneNode(!0).firstChild,n=t.childNodes[0];return n.parentNode,o(n,()=>String(String(A.get().icon))),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>p(De,()=>({}))}).__rue_compiled_mount(t),[t,t]})}}),e=>x(()=>{i.set(e.arg0)}),()=>v(e))},we=(e,t,n)=>{let r=V(E(e,`arg0`)),i=V(E(e,`arg1`));return d(h(e=>{let t=se().content.cloneNode(!0).firstChild,n=t,a;k(()=>{let e=xe(`pointer-events-none absolute inset-x-0 z-10 flex items-center gap-2 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-primary/85`,i.get()===`before`?`-top-2.5`:`-bottom-2.5`),t=e===!1||e==null?``:String(e);Object.is(a,t)||(a=t,n.setAttribute(`class`,t))});let o;k(()=>{let e={paddingLeft:`${r.get().depth*18+20}px`},t=l(e);Object.is(o,t)||(o=t,n.style.cssText=t)});let s;return k(()=>{let e=i.get();Object.is(s,e)||(s=e,e==null?n.removeAttribute(`data-rue-tree-drop-placeholder`):n.setAttribute(`data-rue-tree-drop-placeholder`,String(e)))}),[t,t]}),e=>x(()=>{r.set(e.arg0),i.set(e.arg1)}),()=>v(e))},Ae=(e,t,n)=>{let i=V(E(e,`arg0`)),c=V(E(e,`arg1`)),l=V(E(e,`arg2`)),u=V(E(e,`arg3`)),m=V(E(e,`arg4`)),g=V(E(e,`arg5`));return d(a(()=>{let{renderProps:e}=s(`useSetup:0:0`,()=>({renderProps:{node:i.get(),expanded:c.get(),selected:l.get(),checked:u.get(),halfChecked:m.get(),loading:g.get()}}));return he.get()===void 0?i.get().icon===void 0?ve.get()?b.get()?{__rue_compiled_branch_key:3,create:()=>h(e=>{let t=ce().content.cloneNode(!0).firstChild,n=t.childNodes[0],r=n.parentNode;return f(r,n,()=>i.get().children.length>0||!i.get().isLeaf?{__rue_compiled_branch_key:!0,create:()=>p(Oe,()=>({expanded:c.get()}))}:{__rue_compiled_branch_key:!1,create:()=>p(ke,()=>({}))}),[t,t]})}:{__rue_compiled_branch_key:4,create:()=>h(e=>{let t=le().content.cloneNode(!0).firstChild,n=t.childNodes[0],r=n.parentNode;return f(r,n,()=>i.get().children.length>0||!i.get().isLeaf?{__rue_compiled_branch_key:!0,create:()=>U(e=>{let t=T(`DIR`);return[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>U(e=>{let t=T(`DOC`);return[t,t]})}),[t,t]})}:{__rue_compiled_branch_key:2,create:()=>U(e=>{let t=M();return[t.firstChild,t.lastChild]})}:{__rue_compiled_branch_key:1,create:()=>r(e=>{let t=oe().content.cloneNode(!0).firstChild,n=t.childNodes[0];return n.parentNode,o(n,()=>String(String(i.get().icon))),[t,t]})}:{__rue_compiled_branch_key:0,create:()=>r(e=>{let t=oe().content.cloneNode(!0).firstChild,n=t.childNodes[0];return n.parentNode,o(n,()=>String(String(he.get()))),[t,t]})}}),e=>x(()=>{i.set(e.arg0),c.set(e.arg1),l.set(e.arg2),u.set(e.arg3),m.set(e.arg4),g.set(e.arg5)}),()=>v(e))};return d(h(e=>{let t=M(),n=ue().content.cloneNode(!0),r=n.firstChild;t.appendChild(n),r.hidden=!0,r.setAttribute(`aria-hidden`,`true`);let i;k(()=>{let e=String(Se.get());Object.is(i,e)||(i=e,e==null?r.removeAttribute(`data-rue-tree-content-version`):r.setAttribute(`data-rue-tree-content-version`,String(e)))}),a(()=>J.get().virtualSlice.topSpacer>0?{__rue_compiled_branch_key:!0,create:()=>h(e=>{let t=de().content.cloneNode(!0).firstChild,n=t,r;return k(()=>{let e={height:`${J.get().virtualSlice.topSpacer}px`},t=l(e);Object.is(r,t)||(r=t,n.style.cssText=t)}),n.setAttribute(`aria-hidden`,`true`),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>U(e=>{let t=M();return[t.firstChild,t.lastChild]})}).__rue_compiled_mount(t);let o=P(`rue:list:end`);C(t,o);let s=[];te(()=>{let e=J.get().virtualSlice.items||[];s=D(o.parentNode,o,s,e,(e,t)=>e.node.keyText,(e,t)=>{let n=V(e);return ee((e,t,r)=>{let i=()=>p(Ce,()=>({rowArg0:n.get()}));return e==null?i():m(e,r,i)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),I(()=>S(s)),a(()=>J.get().virtualSlice.bottomSpacer>0?{__rue_compiled_branch_key:!0,create:()=>h(e=>{let t=de().content.cloneNode(!0).firstChild,n=t,r;return k(()=>{let e={height:`${J.get().virtualSlice.bottomSpacer}px`},t=l(e);Object.is(r,t)||(r=t,n.style.cssText=t)}),n.setAttribute(`aria-hidden`,`true`),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>U(e=>{let t=M();return[t.firstChild,t.lastChild]})}).__rue_compiled_mount(t),a(()=>J.get().visibleNodes.length?{__rue_compiled_branch_key:!1,create:()=>U(e=>{let t=M();return[t.firstChild,t.lastChild]})}:{__rue_compiled_branch_key:!0,create:()=>h(e=>{let t=fe().content.cloneNode(!0).firstChild,n=t,r=t.childNodes[0],i=r.parentNode,a;k(()=>{let e=Q(`rounded-lg px-3 py-8 text-center text-sm text-base-content/55`,_.get()?.empty),t=e===!1||e==null?``:String(e);Object.is(a,t)||(a=t,n.setAttribute(`class`,t))});let o;k(()=>{let e=Y.get()?.empty,t=l(e);Object.is(o,t)||(o=t,n.style.cssText=t)});let s=T(``);return i.insertBefore(s,r),i.removeChild(r),c(s,()=>String(String(j.get()))),[t,t]})}).__rue_compiled_mount(t);let u=T(``),d=T(``);return t.insertBefore(u,t.firstChild),t.appendChild(d),[t.firstChild,t.lastChild]}),e=>x(()=>{u.set(e.blockNode),g.set(e.checkable),_.set(e.classNames),y.set(e.componentSize),b.set(e.directoryMode),w.set(e.disabled),A.set(e.dragConfig),j.set(e.emptyText),N.set(e.fixedVirtualRowHeight),F.set(e.handleCheck),L.set(e.handleDragEndNode),z.set(e.handleDragEnterNode),B.set(e.handleDragLeaveNode),H.set(e.handleDragMouseDown),ne.set(e.handleDragOverNode),re.set(e.handleDragStartNode),G.set(e.handleDropNode),ie.set(e.handleExpandToggle),K.set(e.handleLabelActivate),pe.set(e.handleLabelContextMenu),me.set(e.handleLabelMouseDown),q.set(e.hasLoadData),he.set(e.icon),ge.set(e.loadingKeyTexts),_e.set(e.selectable),ve.set(e.showIcon),ye.set(e.showLine),J.set(e.snapshot),Y.set(e.styles),be.set(e.switcherIcon),X.set(e.titleFormatter),Se.set(e.version)}),()=>v(t))},Xe=(n,r,i)=>{let o=V(E(n,`allowDrop`)),c=V(E(n,`allowSearch`)),u=V(E(n,`blockNode`)),_=V(E(n,`checkStrictly`)),S=V(E(n,`checkable`)),w=V(E(n,`checkedKeys`)),T=V(E(n,`className`)),D=V(E(n,`classNames`)),j=V(E(n,`defaultCheckedKeys`)),ee=V(E(n,`defaultExpandAll`)),P=V(E(n,`defaultExpandedKeys`)),te=V(E(n,`defaultSearchValue`)),z=V(E(n,`defaultSelectedKeys`)),B=V(E(n,`directoryMode`)),H=V(E(n,`disabled`)),ne=V(E(n,`draggable`)),W=V(E(n,`emptyText`)),re=V(E(n,`expandAction`)),G=V(E(n,`expandedKeys`)),ie=V(E(n,`fieldNames`)),K=V(E(n,`filterTreeNode`)),ae=V(E(n,`height`)),oe=V(E(n,`icon`)),se=V(E(n,`itemHeight`)),ce=V(E(n,`loadData`)),le=V(E(n,`multiple`)),ue=V(E(n,`onCheck`)),de=V(E(n,`onDoubleClick`)),fe=V(E(n,`onDragEnd`)),he=V(E(n,`onDragEnter`)),_e=V(E(n,`onDragLeave`)),Y=V(E(n,`onDragOver`)),X=V(E(n,`onDragStart`)),Se=V(E(n,`onDrop`)),Te=V(E(n,`onExpand`)),Ee=V(E(n,`onScroll`)),De=V(E(n,`onSearch`)),Oe=V(E(n,`onSelect`)),ke=V(E(n,`rangeSelect`)),Ae=V(E(n,`searchPlaceholder`)),je=V(E(n,`searchValue`)),Me=V(E(n,`selectable`)),We=V(E(n,`selectedKeys`)),Xe=V(E(n,`showIcon`)),Ze=V(E(n,`showLine`)),Qe=V(E(n,`size`)),$e=V(E(n,`status`)),et=V(E(n,`style`)),tt=V(E(n,`styles`)),nt=V(E(n,`switcherIcon`)),rt=V(E(n,`titleFormatter`)),it=V(E(n,`toggleSelect`)),at=V(E(n,`treeData`)),ot=V(E(n,`treeDataSimpleMode`)),st=V(E(n,`virtual`)),ct=V(N(v(n),`allowDrop.allowSearch.blockNode.checkStrictly.checkable.checkedKeys.className.classNames.defaultCheckedKeys.defaultExpandAll.defaultExpandedKeys.defaultSearchValue.defaultSelectedKeys.directoryMode.disabled.draggable.emptyText.expandAction.expandedKeys.fieldNames.filterTreeNode.height.icon.itemHeight.loadData.multiple.onCheck.onDoubleClick.onDragEnd.onDragEnter.onDragLeave.onDragOver.onDragStart.onDrop.onExpand.onScroll.onSearch.onSelect.rangeSelect.searchPlaceholder.searchValue.selectable.selectedKeys.showIcon.showLine.size.status.style.styles.switcherIcon.titleFormatter.toggleSelect.treeData.treeDataSimpleMode.virtual`.split(`.`)));return g(()=>d(a(()=>{let{treeNormalizationCacheRef:n,persistedState:r,renderVersion:i,loadingKeyTextsRef:a,scrollTopRef:d,directoryLastSelectedKeyTextRef:g,directoryCachedSelectedKeyTextsRef:v,dragStateRef:E,dragHoverDepthRef:N,mouseDragStateRef:V,directorySuppressClickKeyTextRef:lt,directorySuppressClickCleanupRef:ut}=s(`TreeRoot:setup-region:0`,()=>{let e=F(`TreeRoot:hook:0`),t={};return{treeNormalizationCacheRef:e,persistedState:t,renderVersion:F(`TreeRoot:hook:1`,L(0)).current,loadingKeyTextsRef:F(`TreeRoot:hook:9`,L(t.loadingKeyTexts??[])).current,scrollTopRef:F(`TreeRoot:hook:10`,L(0)).current,directoryLastSelectedKeyTextRef:F(`TreeRoot:hook:11`,L(t.lastSelectedKeyText??null)).current,directoryCachedSelectedKeyTextsRef:F(`TreeRoot:hook:12`,L(t.cachedSelectedKeyTexts??[])).current,dragStateRef:F(`TreeRoot:hook:13`,L({})).current,dragHoverDepthRef:F(`TreeRoot:hook:14`,L({})).current,mouseDragStateRef:F(`TreeRoot:hook:15`,L(null)).current,directorySuppressClickKeyTextRef:F(`TreeRoot:hook:16`,L(t.suppressClickKeyText??null)).current,directorySuppressClickCleanupRef:F(`TreeRoot:hook:17`,null)}});function dt(){let e=n.current,t=at.get()===void 0?[]:at.get(),r=ot.get(),i=ie.get();if(e&&e.treeData===t&&ve(e,r,i))return e.normalizedTree;let a=Array.isArray(t)?t.slice():[];if(e&&ye(e,t,a,r,i))return e.normalizedTree;let o=J(t,a,r,i);if(o)return n.current=o,o.normalizedTree;let s=Pe(Ne(at.get()===void 0?[]:at.get(),ot.get(),ie.get()),ie.get()),c={treeData:t,treeDataRoots:a,treeDataSimpleMode:r,fieldNames:i,normalizedTree:s};return n.current=c,be(c),s}let ft=dt(),pt=ft,mt=R(()=>qe(Qe.get()));mt.get();let ht=mt,gt=R(()=>He(ne.get()));gt.get();let _t=gt,vt=ee.get()?ft.flat.filter(e=>e.children.length>0||!e.isLeaf).map(e=>e.key):P.get()??[],yt=F(`TreeRoot:hook:2`,L(we(z.get()??We.get()))).current,bt=F(`TreeRoot:hook:3`,L(we(j.get()))).current,xt=F(`TreeRoot:hook:4`,L(we(r.expandedKeys??vt))).current,St=F(`TreeRoot:hook:5`,L(we(We.get()))).current,Ct=F(`TreeRoot:hook:6`,L(we(G.get()))).current,wt=F(`TreeRoot:hook:7`,L(w.get()===void 0?new Set:Array.isArray(w.get())?$(w.get()):$(w.get().checked))).current,Tt=F(`TreeRoot:hook:8`,L(te.get()??``)).current;if(w.get()!==void 0){let e=Array.isArray(w.get())?$(w.get()):$(w.get().checked);Ke(wt.value,e)||(wt.value=e)}We.get()!==void 0&&!Ke($(St.value),$(We.get()))&&(St.value=we(We.get())),G.get()!==void 0&&!Ke($(Ct.value),$(G.get()))&&(Ct.value=we(G.get()));let{requestRender:Et}=s(`TreeRoot:setup-region:3`,()=>{function e(){i.value+=1}return{requestRender:e}}),Dt=R(()=>se.get()??ht.get().rowEstimate);Dt.get();let Ot=Dt,kt=R(()=>typeof ae.get()==`number`&&ae.get()>0?ae.get():void 0);kt.get();let At=kt,jt=R(()=>(st.get()===void 0||st.get())!==!1&&At.get()&&typeof se.get()==`number`&&se.get()>0?se.get():void 0);jt.get();let Mt=jt;function Nt(e=!1){if(e){let e=at.get()===void 0?[]:at.get(),t=Array.isArray(e)?e[0]:void 0;n.current=void 0,ge(e)&&me.delete(e),ge(t)&&q.delete(t)}let t=dt();return pt=t,t}function Pt(){return pt??Nt()}function Ft(){return We.get()===void 0?yt.value:St.value}function It(){return G.get()===void 0?xt.value:Ct.value}function Lt(){return je.get()===void 0?Tt.value:je.get()}function Rt(){return w.get()===void 0?$(bt.value):wt.value}function zt(){let e=Pt(),t=$(It()),n=Lt();return ze(e.roots,t,n,e=>Be(e,n,K.get()))}function Bt(){i.value;let e=Pt(),t=Lt(),n=$(Ft()),r=$(It()),a=Rt(),o=S.get()?Le(e.roots,a,!!_.get()):{checkedKeys:new Set,halfCheckedKeys:new Set,stateMap:{}},s=ze(e.roots,r,t,e=>Be(e,t,K.get()));return{searchValue:t,selectedKeyTextSet:n,expandedKeyTextSet:r,checkState:o,visibleNodes:s,virtualSlice:Ue(s,d.value,At.get(),Ot.get(),(st.get()===void 0||st.get())!==!1&&!!At.get()),dragState:E.value}}let Vt=(e,t,n,i=!0)=>{let a=we(e);return G.get()===void 0?xt.value=a:Ct.value=a,r.expandedKeys=a,Et(),i&&Te.get()&&Te.get()(a,{node:t,expanded:a.some(e=>Z(e)===t.keyText),nativeEvent:n}),a},Ht=(e,t,n,r=!0)=>{let i=Pt(),a=we(e).filter(e=>i.byKeyText[Z(e)]),o=a.map(e=>i.byKeyText[Z(e)]).filter(Boolean);return We.get()===void 0?yt.value=a:St.value=a,Et(),r&&Oe.get()&&Oe.get()(a,{node:t,nativeEvent:n,selected:a.some(e=>Z(e)===t.keyText),selectedNodes:o}),a},Ut=(e,t,n)=>{let r=Pt(),i=Le(r.roots,e,!!_.get()),a=Re(Array.from(i.checkedKeys),Array.from(i.halfCheckedKeys),r.flat,!!_.get());w.get()===void 0?bt.value=_.get()?a.checked:a:wt.value=new Set(i.checkedKeys),Et(),ue.get()&&ue.get()(a,{node:t,nativeEvent:n,checked:i.checkedKeys.has(t.keyText),checkedNodes:Array.from(i.checkedKeys).map(e=>r.byKeyText[e]).filter(Boolean),halfCheckedKeys:Array.from(i.halfCheckedKeys).map(e=>r.byKeyText[e]?.key).filter(Ce)})},Wt=async(e,t,n=!0)=>{let i=It(),o=$(i);if(H.get()||e.disabled)return i;let s=o.has(e.keyText),c=s?i.filter(t=>Z(t)!==e.keyText):[...i,e.key],l=!s&&!!ce.get()&&!e.isLeaf&&e.children.length===0&&!a.value.includes(e.keyText);l&&(a.value=[...a.value,e.keyText],r.loadingKeyTexts=a.value);let u=Vt(c,e,t,n);if(l&&ce.get())try{await ce.get()(e),Nt(!0)}finally{a.value=a.value.filter(t=>t!==e.keyText),r.loadingKeyTexts=a.value;let t=r.renderRequests;t?.size?t.forEach(e=>e()):Et()}return u},Gt=(e,t)=>{t.preventDefault(),t.stopPropagation(),Wt(e,t)},Kt=(e,t,n=!0)=>{if(H.get()||e.disabled||!(Me.get()===void 0||Me.get())||!e.selectable)return;let i=Ft(),a=$(i);if(le.get()&&(ke.get()===void 0?`append`:ke.get())!==!1&&t?.shiftKey){let a=zt().map(e=>e.node.keyText),o=g.value&&a.includes(g.value)?g.value:void 0,s=i.map(Z).filter(t=>t!==e.keyText&&a.includes(t)),c=s[s.length-1],l=o??c,u=l?a.indexOf(l):-1,d=a.indexOf(e.keyText);if(u>=0&&d>=0){let o=Math.min(u,d),s=Math.max(u,d),c=a.slice(o,s+1),f=(ke.get()===void 0?`append`:ke.get())===`append`?v.value.length?v.value:i.map(Z):[],p=Array.from(new Set([...f,...c]));g.value=l,v.value=p,r.lastSelectedKeyText=g.value,r.cachedSelectedKeyTexts=v.value;let m=Ht(Ge(p,Pt().byKeyText),e,t,n);return v.value=m.map(Z),r.cachedSelectedKeyTexts=v.value,m}}if(B.get()){let o=!!le.get()&&!!(it.get()===void 0||it.get())&&!!(t?.ctrlKey||t?.metaKey);if(le.get()&&o){let o=a.has(e.keyText)?i.filter(t=>Z(t)!==e.keyText):[...i,e.key];return g.value=e.keyText,v.value=o.map(Z),r.lastSelectedKeyText=g.value,r.cachedSelectedKeyTexts=v.value,Ht(o,e,t,n)}return g.value=e.keyText,v.value=[e.keyText],r.lastSelectedKeyText=g.value,r.cachedSelectedKeyTexts=v.value,Ht([e.key],e,t,n)}if(le.get()){let o=a.has(e.keyText)?i.filter(t=>Z(t)!==e.keyText):[...i,e.key];return g.value=e.keyText,v.value=o.map(Z),r.lastSelectedKeyText=g.value,r.cachedSelectedKeyTexts=v.value,Ht(o,e,t,n)}let o=a.has(e.keyText)?[]:[e.key];return g.value=e.keyText,v.value=o.map(Z),r.lastSelectedKeyText=g.value,r.cachedSelectedKeyTexts=v.value,Ht(o,e,t,n)},qt=(e,t)=>{if(t.preventDefault(),t.stopPropagation(),H.get()||e.disabled||!e.checkable||e.disableCheckbox)return;let n=Rt(),r=Le(Pt().roots,n,!!_.get()),i=new Set(n),a=r.checkedKeys.has(e.keyText);if(_.get())a?i.delete(e.keyText):i.add(e.keyText);else{let t=Fe(e);a?t.forEach(e=>i.delete(e)):t.forEach(e=>i.add(e))}Ut(i,e,t)},Jt=e=>{je.get()===void 0&&(Tt.value=e),Et(),De.get()&&De.get()(e)},Yt=e=>{d.value=e.currentTarget.scrollTop,Et(),Ee.get()&&Ee.get()(e)},Xt=e=>{!e||E.value.overKeyText!==e||(E.value={dragKeyText:E.value.dragKeyText},Et())},Zt=e=>{e&&lt.value!==e||(lt.value=null,r.suppressClickKeyText=null,ut.current?.(),ut.current=null)},Qt=e=>{if(ut.current?.(),ut.current=null,lt.value=e,r.suppressClickKeyText=e,typeof window>`u`)return;let t,n=()=>{t!==void 0&&window.clearTimeout(t),window.removeEventListener(`mouseup`,i,!0)},i=()=>{window.removeEventListener(`mouseup`,i,!0),t=window.setTimeout(()=>{lt.value===e&&(lt.value=null,r.suppressClickKeyText=null),ut.current===n&&(ut.current=null)},500)};ut.current=n,window.addEventListener(`mouseup`,i,!0)},$t=(e,t)=>{(E.value.overKeyText!==e||E.value.dropPosition!==t)&&(E.value={...E.value,overKeyText:e,dropPosition:t},queueMicrotask(Et))},en=(e,t)=>{let n={...N.value},r=n[e]??0,i=Math.max(r+t,0);return i>0?n[e]=i:delete n[e],N.value=n,queueMicrotask(Et),i},tn=()=>{N.value={},E.value={},queueMicrotask(Et)},nn=(e,t,n)=>{let r=Pt(),i=E.value.dragKeyText;if(!i)return null;let a=r.byKeyText[i];if(!a||a.keyText===e.keyText||Ve(a,e,r.byKeyText))return null;let s=n?.getBoundingClientRect?.(),c=`clientY`in t?t.clientY:void 0,l=0;s&&typeof c==`number`&&(c<s.top+s.height*.25?l=-1:c>s.bottom-s.height*.25&&(l=1));let u=l!==0;return o.get()&&!o.get()({dragNode:a,dropNode:e,dropPosition:l,dropToGap:u})?null:{dragNode:a,dropPosition:l}},rn=e=>typeof document>`u`||typeof document.elementFromPoint!=`function`?null:document.elementFromPoint(e.clientX,e.clientY)?.closest?.(`[data-rue-tree-node]`),an=e=>{let t=e?.getAttribute(`data-rue-tree-node`);return t?Pt().byKeyText[t]??null:null},on=()=>{typeof document>`u`||(document.removeEventListener(`mousemove`,ln),document.removeEventListener(`mouseup`,un))},sn=(e,t)=>{let n=He(ne.get());t.button!==0||!n.enabled||!n.nodeDraggable(e)||H.get()||e.disabled||typeof document>`u`||(V.value={keyText:e.keyText,startX:t.clientX,startY:t.clientY,active:!1},document.addEventListener(`mousemove`,ln),document.addEventListener(`mouseup`,un))},cn=(e,t)=>{let n=Pt().byKeyText[e.keyText];return n?(e.active=!0,V.value=e,Qt(e.keyText),N.value={},E.value={dragKeyText:e.keyText},queueMicrotask(Et),X.get()&&X.get()({event:t,node:n}),!0):!1};function ln(e){let t=V.value;if(!t)return;let n=Math.max(Math.abs(e.clientX-t.startX),Math.abs(e.clientY-t.startY));if(!t.active&&n<4||!t.active&&!cn(t,e))return;e.preventDefault();let r=rn(e),i=an(r);if(!i){Xt(E.value.overKeyText);return}let a=nn(i,e,r);if(!a){Xt(i.keyText);return}$t(i.keyText,a.dropPosition),Y.get()&&Y.get()({event:e,node:i})}function un(e){let t=V.value,n=E.value.dragKeyText,r=t?.active?t.keyText:n;if(V.value=null,on(),!r)return;e.preventDefault();let i=rn(e),a=an(i),o=a?nn(a,e,i):null;if(a&&o&&Se.get()){let t=E.value.overKeyText===a.keyText&&E.value.dropPosition!==void 0?E.value.dropPosition:o.dropPosition;Se.get()({event:e,node:a,dragNode:o.dragNode,dragNodesKeys:Ie(o.dragNode),dropPosition:t,dropToGap:t!==0})}let s=Pt().byKeyText[r];tn(),s&&fe.get()&&fe.get()({event:e,node:s})}let dn=(e,t)=>{t.stopPropagation();let n=He(ne.get());!n.enabled||!n.nodeDraggable(e)||H.get()||e.disabled||(t.dataTransfer&&(t.dataTransfer.effectAllowed=`move`,t.dataTransfer.setData(`text/plain`,e.keyText)),N.value={},E.value={dragKeyText:e.keyText},queueMicrotask(Et),X.get()&&X.get()({event:t,node:e}))},fn=(e,t)=>{if(!E.value.dragKeyText)return;en(e.keyText,1);let n=nn(e,t,t.currentTarget.closest(`[data-rue-tree-node]`));if(!n){Xt(e.keyText);return}t.preventDefault(),$t(e.keyText,n.dropPosition);let r=It(),i=$(r);n.dropPosition===0&&!i.has(e.keyText)&&(e.children.length>0||!e.isLeaf)&&(r=Vt([...r,e.key],e,t)),he.get()&&he.get()({event:t,node:e,expandedKeys:r})},pn=(e,t)=>{if(!E.value.dragKeyText)return;let n=nn(e,t,t.currentTarget.closest(`[data-rue-tree-node]`));if(!n){Xt(e.keyText);return}t.preventDefault(),t.dataTransfer&&(t.dataTransfer.dropEffect=`move`),$t(e.keyText,n.dropPosition),Y.get()&&Y.get()({event:t,node:e})},mn=(e,t)=>{en(e.keyText,-1)===0&&Xt(e.keyText),_e.get()&&_e.get()({event:t,node:e})},hn=(e,t)=>{tn(),fe.get()&&fe.get()({event:t,node:e})},gn=(e,t)=>{t.stopPropagation();let n=nn(e,t,t.currentTarget.closest(`[data-rue-tree-node]`));if(!n){tn();return}t.preventDefault();let r=E.value.overKeyText===e.keyText&&E.value.dropPosition!==void 0?E.value.dropPosition:n.dropPosition;Se.get()&&Se.get()({event:t,node:e,dragNode:n.dragNode,dragNodesKeys:Ie(n.dragNode),dropPosition:r,dropToGap:r!==0}),tn()},_n=(e,t)=>{sn(e,t)},vn=(e,t)=>{let n=!!le.get()&&(ke.get()===void 0?`append`:ke.get())!==!1&&t.shiftKey;if(B.get()&&le.get()&&(it.get()===void 0||it.get())&&(t.ctrlKey||t.metaKey)||n){t.preventDefault(),t.stopPropagation(),Qt(e.keyText),Kt(e,t);return}sn(e,t)},yn=(e,t,n)=>{if(t.preventDefault(),t.stopPropagation(),n===`click`&&lt.value===e.keyText){Zt(e.keyText);return}n===`doubleClick`&&de.get()&&de.get()(t,e);let r=B.get()&&(re.get()!==void 0&&re.get())===n&&(e.children.length>0||!e.isLeaf);if(n===`click`&&r){x(()=>{let n=It(),r=$(n).has(e.keyText),i=r?n.filter(t=>Z(t)!==e.keyText):[...n,e.key];Wt(e,t,!1);let a=Kt(e,t,!1)??Ft();Te.get()?.(we(i),{node:e,expanded:!r,nativeEvent:t}),Oe.get()?.(a,{node:e,nativeEvent:t,selected:a.some(t=>Z(t)===e.keyText),selectedNodes:a.map(e=>Pt().byKeyText[Z(e)]).filter(Boolean)})});return}r&&Wt(e,t),n===`click`&&Kt(e,t)},bn=(e,t)=>{if(lt.value===e.keyText){t.preventDefault(),t.stopPropagation();return}B.get()&&le.get()&&(it.get()===void 0||it.get())&&t.ctrlKey&&!t.metaKey&&(t.preventDefault(),t.stopPropagation(),Kt(e,t))},xn=R(()=>At.get()?(st.get()===void 0||st.get())===!1?{maxHeight:`${At.get()}px`,overflowY:`auto`}:{height:`${At.get()}px`,overflowY:`auto`}:{overflowY:`visible`});xn.get();let Sn=()=>({snapshot:Bt(),version:i.value,loadingKeyTexts:a.value,fixedVirtualRowHeight:Mt.get(),componentSize:ht.get(),classNames:D.get(),styles:tt.get(),emptyText:W.get()===void 0?`暂无节点`:W.get(),showLine:Ze.get(),disabled:H.get(),blockNode:u.get(),checkable:S.get(),showIcon:Xe.get(),selectable:Me.get()===void 0||Me.get(),hasLoadData:!!ce.get(),titleFormatter:rt.get(),switcherIcon:nt.get(),icon:oe.get(),directoryMode:B.get(),dragConfig:_t.get(),handleDragStartNode:dn,handleDragEnterNode:fn,handleDragOverNode:pn,handleDragLeaveNode:mn,handleDragEndNode:hn,handleDropNode:gn,handleExpandToggle:Gt,handleCheck:qt,handleDragMouseDown:_n,handleLabelMouseDown:vn,handleLabelActivate:yn,handleLabelContextMenu:bn}),Cn=()=>{a.value=r.loadingKeyTexts??[],Et()};return s(`TreeRoot:setup-effect:3:0`,()=>A(()=>{let e=r.renderRequests??new Set;e.add(Cn),r.renderRequests=e})),s(`TreeRoot:setup-effect:3:1`,()=>y(()=>{on(),ut.current?.(),ut.current=null,r.renderRequests?.delete(Cn)})),s(`TreeRoot:setup-effect:3:2`,()=>b(()=>[at.get()===void 0?[]:at.get(),ot.get(),ie.get(),We.get(),w.get(),G.get(),je.get()],()=>{Nt()})),{__rue_compiled_branch_key:0,create:()=>h(n=>{let r=pe().content.cloneNode(!0).firstChild,a=r,o=r.childNodes[1],s=r.childNodes[0],u=s.parentNode,d=r.childNodes[1].childNodes[0],g=d.parentNode;t(a,()=>ct.get(),[`className`,`style`,`data-rue-tree`,`data-rue-tree-version`,`__rue_static_template_id__`]);let _;k(()=>{let e=Q(Q(Q(`rue-tree rounded-box border border-base-300 bg-base-100 text-base-content shadow-sm`,Je($e.get())),D.get()?.root),T.get()),t=e===!1||e==null?``:String(e);Object.is(_,t)||(_=t,a.setAttribute(`class`,t))});let v;k(()=>{let e={...tt.get()?.root,...et.get()},t=l(e);Object.is(v,t)||(v=t,a.style.cssText=t)}),a.setAttribute(`data-rue-tree`,`true`);let y;k(()=>{let e=String(i.value);Object.is(y,e)||(y=e,e==null?a.removeAttribute(`data-rue-tree-version`):a.setAttribute(`data-rue-tree-version`,String(e)))});let b;k(()=>{let e=Q(xe(`grid gap-0.5`,mt.get().bodyPadding,mt.get().textClass),D.get()?.body),t=e===!1||e==null?``:String(e);Object.is(b,t)||(b=t,o.setAttribute(`class`,t))}),o.setAttribute(`data-rue-tree-body`,`true`);let x;k(()=>{let e={...xn.get(),...tt.get()?.body},t=l(e);Object.is(x,t)||(x=t,o.style.cssText=t)});let S=e=>{let t=Yt;typeof t==`function`&&t(e)};o.addEventListener(`scroll`,S),I(()=>o.removeEventListener(`scroll`,S)),f(u,s,()=>c.get()?{__rue_compiled_branch_key:!0,create:()=>h(e=>{let t=O(`div`,e),n;k(()=>{let e=Q(Q(xe(`border-b border-base-200/80`,mt.get().headerPadding),D.get()?.header),D.get()?.search),r=e===!1||e==null?``:String(e);Object.is(n,r)||(n=r,t.setAttribute(`class`,r))});let r;k(()=>{let e={...tt.get()?.header,...tt.get()?.search},n=l(e);Object.is(r,n)||(r=n,t.style.cssText=n)});let i=O(`input`,t);C(t,i),i.setAttribute(`type`,`text`),i.setAttribute(`class`,`input input-bordered input-sm w-full bg-base-100`);let a;k(()=>{let e=Bt().searchValue,t=e==null?``:String(e);Object.is(a,t)||(a=t,i.value=t)});let o;k(()=>{let e=Ae.get()===void 0?`搜索节点`:Ae.get();Object.is(o,e)||(o=e,e==null||e===!1?i.removeAttribute(`placeholder`):i.setAttribute(`placeholder`,String(e)))});let s=e=>{let t=e=>Jt(e.currentTarget.value);typeof t==`function`&&t(e)};return i.addEventListener(`input`,s),I(()=>i.removeEventListener(`input`,s)),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>U(e=>{let t=M();return[t.firstChild,t.lastChild]})});let w=(e,t,n)=>{let r=()=>p(Ye,()=>({...Sn()}));return e==null?r():m(e,n,r)},E=d.nextSibling;return g.removeChild(d),e({parent:g,before:E},()=>w,()=>({})),[r,r]})}}),e=>x(()=>{o.set(e.allowDrop),c.set(e.allowSearch),u.set(e.blockNode),_.set(e.checkStrictly),S.set(e.checkable),w.set(e.checkedKeys),T.set(e.className),D.set(e.classNames),j.set(e.defaultCheckedKeys),ee.set(e.defaultExpandAll),P.set(e.defaultExpandedKeys),te.set(e.defaultSearchValue),z.set(e.defaultSelectedKeys),B.set(e.directoryMode),H.set(e.disabled),ne.set(e.draggable),W.set(e.emptyText),re.set(e.expandAction),G.set(e.expandedKeys),ie.set(e.fieldNames),K.set(e.filterTreeNode),ae.set(e.height),oe.set(e.icon),se.set(e.itemHeight),ce.set(e.loadData),le.set(e.multiple),ue.set(e.onCheck),de.set(e.onDoubleClick),fe.set(e.onDragEnd),he.set(e.onDragEnter),_e.set(e.onDragLeave),Y.set(e.onDragOver),X.set(e.onDragStart),Se.set(e.onDrop),Te.set(e.onExpand),Ee.set(e.onScroll),De.set(e.onSearch),Oe.set(e.onSelect),ke.set(e.rangeSelect),Ae.set(e.searchPlaceholder),je.set(e.searchValue),Me.set(e.selectable),We.set(e.selectedKeys),Xe.set(e.showIcon),Ze.set(e.showLine),Qe.set(e.size),$e.set(e.status),et.set(e.style),tt.set(e.styles),nt.set(e.switcherIcon),rt.set(e.titleFormatter),it.set(e.toggleSelect),at.set(e.treeData),ot.set(e.treeDataSimpleMode),st.set(e.virtual),ct.set(N(e,`allowDrop.allowSearch.blockNode.checkStrictly.checkable.checkedKeys.className.classNames.defaultCheckedKeys.defaultExpandAll.defaultExpandedKeys.defaultSearchValue.defaultSelectedKeys.directoryMode.disabled.draggable.emptyText.expandAction.expandedKeys.fieldNames.filterTreeNode.height.icon.itemHeight.loadData.multiple.onCheck.onDoubleClick.onDragEnd.onDragEnter.onDragLeave.onDragOver.onDragStart.onDrop.onExpand.onScroll.onSearch.onSelect.rangeSelect.searchPlaceholder.searchValue.selectable.selectedKeys.showIcon.showLine.size.status.style.styles.switcherIcon.titleFormatter.toggleSelect.treeData.treeDataSimpleMode.virtual`.split(`.`)))}),()=>v(n)))},Ze=Object.assign(Xe,{DirectoryTree:(e,t,n)=>{let r=V(E(e,`blockNode`)),i=V(E(e,`className`)),a=V(E(e,`expandAction`)),o=V(E(e,`showIcon`)),s=V(N(v(e),[`blockNode`,`className`,`expandAction`,`showIcon`]));return d(p(Xe,()=>({...s.get(),className:Q(`rue-directory-tree`,i.get()),showIcon:o.get()===void 0||o.get(),blockNode:r.get()===void 0||r.get(),directoryMode:!0,expandAction:a.get()===void 0?`click`:a.get()})),e=>x(()=>{r.set(e.blockNode),i.set(e.className),a.set(e.expandAction),o.set(e.showIcon),s.set(N(e,[`blockNode`,`className`,`expandAction`,`showIcon`]))}),()=>v(e))}}),Qe=H(`<div class="flex min-w-0 items-center justify-between gap-3"><span class="truncate">rue:direct-text</span><span class="badge badge-ghost badge-xs"><!--rue:text-hole:1--></span></div>`),$e=H(`<div class="flex min-w-0 items-center justify-between gap-3"><span class="truncate">rue:direct-text</span><span><!--rue:text-hole:1--></span></div>`),et=H(`<div class="not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100"><table class="table table-zebra"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><!--rue:text-hole:0--></tbody></table></div>`),tt=H(`<li class="list-none"><button type="button"><span class="inline-flex size-5 items-center justify-center rounded-md bg-base-200/80 text-[11px] text-base-content/55"><!--rue:text-hole:0--></span><span>rue:direct-text</span></button><!--rue:text-hole:2--></li>`),nt=H(`<div class="max-w-none prose prose-sm md:prose-base"><h1>Tree 树控件</h1><p>Rue 的 Tree 补上了独立树组件这块空白：保持 TreeView 示例里递归数据直改的灵活性，同时把 树控件常用的展开、选中、勾选、简单模式、异步加载和自定义标题一次覆盖。 视觉上使用 Rue 当前的卡片、badge 和 base 色阶体系，不照搬其他组件库的外观。</p><div class="not-prose mt-6 grid gap-3 md:grid-cols-3"><div class="rounded-[1.4rem] border border-base-300 bg-gradient-to-br from-base-100 to-base-200/40 p-4 shadow-sm"><div class="text-xs uppercase tracking-[0.2em] text-base-content/45">Node Model</div><div class="mt-2 text-base font-semibold">选择、勾选、展开三条状态线</div><p class="mt-2 mb-0 text-sm text-base-content/68">目录树、权限树、发布树都能直接套进来。</p></div><div class="rounded-[1.4rem] border border-base-300 bg-gradient-to-br from-base-100 to-base-200/40 p-4 shadow-sm"><div class="text-xs uppercase tracking-[0.2em] text-base-content/45">DirectoryTree</div><div class="mt-2 text-base font-semibold">目录树快捷 API</div><p class="mt-2 mb-0 text-sm text-base-content/68">支持 click / doubleClick 展开，以及更接近文件浏览器的多选交互。</p></div><div class="rounded-[1.4rem] border border-base-300 bg-gradient-to-br from-base-100 to-base-200/40 p-4 shadow-sm"><div class="text-xs uppercase tracking-[0.2em] text-base-content/45">Heavy Interaction</div><div class="mt-2 text-base font-semibold">拖拽排序与虚拟滚动</div><p class="mt-2 mb-0 text-sm text-base-content/68">长列表和拖拽改序终于能落在同一个 Tree 上了。</p></div></div><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--><!--rue:opaque-hole:5--><!--rue:opaque-hole:6--><div class="not-prose mt-10 space-y-2"><h2 class="text-2xl font-semibold">更重交互</h2><p class="text-sm text-base-content/70">当 Tree 既要承载拖拽整理，又要承载超长数据时，draggable 和 virtual 就是两个最关键的控制面。</p></div><!--rue:opaque-hole:7--><!--rue:opaque-hole:8--><!--rue:opaque-hole:9--><!--rue:opaque-hole:10--><div class="not-prose mt-10 space-y-4"><h2 class="text-2xl font-semibold">API</h2><!--rue:opaque-hole:11--></div></div>`),rt=(e,t,n)=>{let r=V(E(e,`rows`));return d(h(e=>{let t=et().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[1].childNodes[0],i=n.parentNode,a=H(`<tr><td><code><!--rue:text-hole:0--></code></td><td>rue:row-text</td><td><code><!--rue:text-hole:2--></code></td><td><code><!--rue:text-hole:3--></code></td></tr>`),o=[];return te(()=>{let e=r.get()||[];o=w(i,n,o,e,(e,t)=>e.prop,(e,t,n)=>{let r=e,i;return j(e=>{let t=a().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0].childNodes[0],o=n.parentNode,s=t.childNodes[1].childNodes[0];s.parentNode;let c=t.childNodes[2].childNodes[0].childNodes[0],l=c.parentNode,u=t.childNodes[3].childNodes[0].childNodes[0],d=u.parentNode,f=T(``);o.insertBefore(f,n),o.removeChild(n);let p=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);f.textContent=p;let m=r.description==null||typeof r.description==`boolean`?``:String(r.description);s.textContent=m;let h=T(``);l.insertBefore(h,c),l.removeChild(c);let g=r.type==null||typeof r.type==`boolean`?``:String(r.type);h.textContent=g;let _=T(``);d.insertBefore(_,u),d.removeChild(u);let v=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);return _.textContent=v,i=()=>{{let e=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);Object.is(p,e)||(f.textContent=e,p=e)}{let e=r.description==null||typeof r.description==`boolean`?``:String(r.description);Object.is(m,e)||(s.textContent=e,m=e)}{let e=r.type==null||typeof r.type==`boolean`?``:String(r.type);Object.is(g,e)||(h.textContent=e,g=e)}{let e=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);Object.is(v,e)||(_.textContent=e,v=e)}},[t,t]},(n,a)=>{e=n,t=a,r=n,i()},void 0,n)},!1,!0)}),I(()=>S(o)),[t,t]}),e=>x(()=>{r.set(e.rows)}),()=>v(e))},it=[{title:`产品平台`,key:`platform`,children:[{title:`文档中心`,key:`docs-api`},{title:`组件市场`,key:`component-hub`},{title:`示例仓库`,key:`examples`}]},{title:`工程效率`,key:`engineering`,children:[{title:`构建链路`,key:`build-pipeline`},{title:`质量门禁`,key:`quality-gate`},{title:`发布管道`,key:`release-flow`}]},{title:`增长分析`,key:`growth`,children:[{title:`实验看板`,key:`experiment-board`},{title:`归因报表`,key:`attribution-report`},{title:`留存漏斗`,key:`retention-funnel`}]}],at=[{title:`发布总控`,key:`release-control`,children:[{title:`前台站点`,key:`release-site`,children:[{title:`首页编排`,key:`site-home`},{title:`价格页`,key:`site-pricing`}]},{title:`运营链路`,key:`release-ops`,children:[{title:`投放素材`,key:`ops-assets`},{title:`归因回传`,key:`ops-attribution`}]},{title:`合规审查`,key:`release-compliance`,children:[{title:`隐私条款`,key:`compliance-privacy`},{title:`审计记录`,key:`compliance-audit`}]}]}],ot=[{title:`权限控制`,key:`permission-disabled-root`,children:[{title:`只读目录`,key:`readonly-folder`,disabled:!0,children:[{title:`首页编排`,key:`readonly-home`},{title:`价格页`,key:`readonly-pricing`}]},{title:`可编辑目录`,key:`editable-folder`,children:[{title:`投放素材`,key:`editable-assets`},{title:`归因回传`,key:`editable-attribution`,disableCheckbox:!0}]},{title:`审计日志（仅禁用复选框）`,key:`audit-log`,disableCheckbox:!0}]}],st=[{nodeId:1,parentId:0,code:`workspace`,name:`Workspace`},{nodeId:2,parentId:1,code:`workflow`,name:`Workflow board`},{nodeId:3,parentId:1,code:`briefs`,name:`Briefs`},{nodeId:4,parentId:2,code:`review`,name:`Design review`},{nodeId:5,parentId:2,code:`release`,name:`Release checklist`},{nodeId:6,parentId:3,code:`content`,name:`Content drafts`}],ct=[{title:`app`,key:`dir-app`,children:[{title:`pages`,key:`dir-pages`,children:[{title:`Tree.tsx`,key:`file-tree-page`},{title:`Transfer.tsx`,key:`file-transfer-page`}]},{title:`site`,key:`dir-site`,children:[{title:`SidebarPlaygroundDesign.tsx`,key:`file-sidebar`}]}]},{title:`packages`,key:`dir-packages`,children:[{title:`runtime`,key:`dir-runtime`},{title:`rue-design`,key:`dir-rue-design`}]},{title:`README.md`,key:`file-readme`}],lt=[{title:`alpha.ts`,key:`range-alpha`},{title:`beta.ts`,key:`range-beta`},{title:`gamma.ts`,key:`range-gamma`},{title:`delta.ts`,key:`range-delta`},{title:`epsilon.ts`,key:`range-epsilon`}],ut=[{title:`src`,key:`drag-src`,kind:`folder`,children:[{title:`components`,key:`drag-components`,kind:`folder`,children:[{title:`Tree.tsx`,key:`drag-tree-file`,kind:`file`},{title:`Transfer.tsx`,key:`drag-transfer-file`,kind:`file`}]},{title:`main.ts`,key:`drag-main-file`,kind:`file`}]},{title:`docs`,key:`drag-docs`,kind:`folder`,children:[{title:`routing.md`,key:`drag-routing-file`,kind:`file`},{title:`installation.md`,key:`drag-install-file`,kind:`file`}]},{title:`package.json`,key:`drag-package-file`,kind:`file`}],dt=Array.from({length:120},(e,t)=>({title:`Page ${String(t+1).padStart(3,`0`)}`,key:`virtual-${t}`})),ft=Array.from({length:64},(e,t)=>({title:`Workspace ${String(t+1).padStart(2,`0`)}`,key:`async-virtual-root-${t}`,isLeaf:!1})),pt=`import { ref } from '@rue-js/rue'
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
</div>`,wt=[{prop:`treeData`,description:`树数据源，支持嵌套 children 和字段映射。`,type:`TreeDataNode[]`,defaultValue:`[]`},{prop:`selectedKeys / defaultSelectedKeys`,description:`受控与非受控的当前选中项，multiple 打开后允许多选。`,type:`TreeKey[]`,defaultValue:`[]`},{prop:`checkedKeys / defaultCheckedKeys`,description:`勾选模式下的选中集合，strict 模式会回传 checked / halfChecked 结构。`,type:`TreeKey[] | { checked: TreeKey[]; halfChecked: TreeKey[] }`,defaultValue:`[]`},{prop:`expandedKeys / defaultExpandedKeys / defaultExpandAll`,description:`控制展开态，适合目录树、权限树和异步加载场景。`,type:`TreeKey[] / boolean`,defaultValue:`[] / false`},{prop:`checkable / checkStrictly`,description:`切换勾选与父子联动模式；strict 会关闭级联。`,type:`boolean`,defaultValue:`false`},{prop:`treeDataSimpleMode / fieldNames`,description:`直接接入 id / pId 扁平数据，同时可映射 title、key、children 字段。`,type:`boolean | TreeSimpleModeConfig / TreeFieldNames`,defaultValue:`- / -`},{prop:`allowSearch / searchValue / filterTreeNode`,description:`提供内置搜索输入和过滤逻辑，命中后会保持祖先链路。`,type:`boolean / string / boolean | ((inputValue, node) => boolean)`,defaultValue:`false / - / true`},{prop:`loadData`,description:`展开未加载分支时触发异步加载，适合远端目录与超大树。`,type:`(node: TreeNode) => Promise<any> | void`,defaultValue:`-`},{prop:`rangeSelect / Tree.DirectoryTree / expandAction / toggleSelect`,description:`Tree 多选和目录树都支持 shift 区间选择；目录树额外提供展开动作和 ctrl/meta 追加选择开关。`,type:`false | "append" | "replace" / DirectoryTreeProps / false | "click" | "doubleClick" / boolean`,defaultValue:`"append" / blockNode=true / showIcon=true / "click" / true`},{prop:`draggable / allowDrop / onDrop`,description:`开启拖拽排序并控制是否允许落点；allowDrop 和 onDrop 都会拿到 dropToGap，UI 会同步显示插前、插后或放入占位态。`,type:`TreeDraggable / (info) => boolean / (info) => void`,defaultValue:`false / - / -`},{prop:`height / itemHeight / virtual`,description:`为长列表开启虚拟滚动；height 定义视口高度，itemHeight 用于估算渲染窗口，也能和 loadData 组合接超长懒加载树。`,type:`number / number / boolean`,defaultValue:`- / 自动按尺寸估算 / true`},{prop:`showLine / showIcon / blockNode`,description:`控制树线、节点图标和整行可点的布局表现。`,type:`boolean`,defaultValue:`false`},{prop:`titleRender / switcherIcon / icon`,description:`按节点态自定义标题、展开图标和节点图标。`,type:`render function | any`,defaultValue:`-`}],Tt=e=>Array.isArray(e)?e:e.checked,Et=(e,t)=>Array.isArray(e)?t?.halfCheckedKeys??[]:e.halfChecked,Dt=e=>`${typeof e}:${String(e)}`,Ot=e=>e.map(e=>({...e,children:Array.isArray(e.children)?Ot(e.children):e.children})),kt=(e,t)=>{let n=Dt(t);for(let r=0;r<e.length;r+=1){let i=e[r];if(Dt(i.key)===n){let[t]=e.splice(r,1);return t??null}if(Array.isArray(i.children)){let e=kt(i.children,t);if(e)return e}}return null},At=(e,t,n,r)=>{let i=Dt(n);for(let a=0;a<e.length;a+=1){let o=e[a];if(Dt(o.key)===i){if(r===0){let e=Array.isArray(o.children)?o.children.slice():[];e.push(t),o.children=e}else e.splice(r<0?a:a+1,0,t);return!0}if(Array.isArray(o.children)&&At(o.children,t,n,r))return!0}return!1},jt=(e,t)=>{let n=Ot(e),r=kt(n,t.dragNode.key);return r&&(At(n,r,t.node.key,t.dropPosition)||n.push(r)),n},Mt=(e,t,n)=>{let r=Dt(t);for(let i=0;i<e.length;i+=1){let a=e[i];if(Dt(a.key)===r){let t=n(a);if(t===a)return e;let r=e.slice();return r[i]=t,r}if(Array.isArray(a.children)&&a.children.length){let r=Mt(a.children,t,n);if(r===a.children)continue;let o=e.slice();return o[i]={...a,children:r},o}}return e},Nt=e=>e.reduce((e,t)=>!Array.isArray(t.children)||!t.children.length?e:e+1+Nt(t.children),0),Pt=(t,n,r)=>{let i=V(E(t,`model`)),a=V(E(t,`onChange`)),o=R(()=>!!i.get().open),s=R(()=>!!i.get().children&&i.get().children.length>0),c=e=>{e?.stopPropagation(),a.get()({...i.get(),open:!o.get()})},l=e=>{e?.stopPropagation(),a.get()({...i.get(),open:!0,children:[...i.get().children??[],{id:`${i.get().id}-new-${i.get().children?.length??0}`,name:`new stuff`}]})},u=e=>{e?.stopPropagation(),s.get()||l()};return g(()=>d(h(t=>{let n=M(),r=tt().content.cloneNode(!0),d=r.firstChild,g=d.childNodes[0],_=d.childNodes[0].childNodes[0].childNodes[0],v=_.parentNode,y=d.childNodes[0].childNodes[1].childNodes[0],b=y.parentNode,x=d.childNodes[1],w=x.parentNode,E=P(`rue:text-hole:1`);b.replaceChild(E,y),n.appendChild(r),g.setAttribute(`type`,`button`);let A;k(()=>{let e=`flex items-center gap-2 rounded-xl px-3 py-2 text-left text-sm transition `+(s.get()?`font-semibold text-base-content`:`text-base-content/80 hover:bg-base-200/70`),t=e===!1||e==null?``:String(e);Object.is(A,t)||(A=t,g.setAttribute(`class`,t))});let j=e=>{let t=e=>c(e);typeof t==`function`&&t(e)};g.addEventListener(`click`,j),I(()=>g.removeEventListener(`click`,j));let N=e=>{let t=e=>u(e);typeof t==`function`&&t(e)};g.addEventListener(`dblclick`,N),I(()=>g.removeEventListener(`dblclick`,N)),e({parent:v,before:_},()=>s.get()?o.get()?(e,t,n)=>{let r=()=>U(e=>{let t=T(`−`);return[t,t]});return e==null?r():m(e,n,r)}:(e,t,n)=>{let r=()=>U(e=>{let t=T(`+`);return[t,t]});return e==null?r():m(e,n,r)}:(e,t,n)=>{let r=()=>U(e=>{let t=T(`•`);return[t,t]});return e==null?r():m(e,n,r)},()=>({})),e({parent:b,before:E},()=>W(i.get().name),()=>({})),f(w,x,()=>s.get()&&o.get()?{__rue_compiled_branch_key:!0,create:()=>h(e=>{let t=O(`ul`,e);t.setAttribute(`class`,`mt-1 grid gap-1 pl-5`);let n=P(`rue:list:end`);C(t,n);let r=[];te(()=>{let e=i.get().children||[];r=D(n.parentNode,n,r,e,(e,t)=>e.id,(e,t)=>{let n=V(e);return ee((e,t,r)=>{let o=()=>p(Pt,()=>({model:n.get(),onChange:e=>a.get()({...i.get(),children:i.get().children.map(t=>t.id===n.get().id?e:t)})}));return e==null?o():m(e,r,o)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),I(()=>S(r));let o=O(`li`,t);C(t,o),o.setAttribute(`class`,`list-none`);let s=O(`button`,o);C(o,s),s.setAttribute(`type`,`button`),s.setAttribute(`class`,`btn btn-ghost btn-xs rounded-full text-emerald-600`);let c=e=>{let t=e=>l(e);typeof t==`function`&&t(e)};return s.addEventListener(`click`,c),I(()=>s.removeEventListener(`click`,c)),C(s,T(`+ add child`)),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>U(e=>{let t=M();return[t.firstChild,t.lastChild]})});let F=T(``),L=T(``);return n.insertBefore(F,n.firstChild),n.appendChild(L),[n.firstChild,n.lastChild]}),e=>x(()=>{i.set(e.model),a.set(e.onChange)}),()=>v(t)))},Ft=(t,s,l)=>{let d=L([`docs-api`]),v=L([`dir-app`]),y=L(`click`),b=L(!0),x=R(()=>b.value?`append`:!1),w=L([]),E=L([]),A=L(0),j=L([`release-control`]),N=L([`site-home`]),F=L([`release-control`,`release-site`]),H=L([`editable-assets`]),ie=L([`workflow`]),K=L([]),ae=L([]),oe=L(Ot(ut)),se=L(`folder 支持放入；file 只允许插前和插后，悬停时会显示明确占位态。`),ce=L([`virtual-3`]),le=L(Ot(ft)),ue=L([]),de=L([]),fe=R(()=>Nt(le.value)),pe=L([{title:`发布总线`,key:`release-bus`,isLeaf:!1}]),me=L({id:`root`,name:`My Tree`,open:!0,children:[{id:`hello`,name:`hello`},{id:`world`,name:`world`},{id:`branch`,name:`child folder`,open:!0,children:[{id:`branch-1`,name:`design review`},{id:`branch-2`,name:`release note`}]}]}),q={basic:L(`preview`),directory:L(`preview`),directoryRange:L(`preview`),checkable:L(`preview`),checkableDisabled:L(`preview`),simple:L(`preview`),async:L(`preview`),drag:L(`preview`),virtual:L(`preview`),virtualAsync:L(`preview`),legacy:L(`preview`)},he=async e=>{e.key===`release-bus`&&(pe.value=[{title:`发布总线`,key:`release-bus`,isLeaf:!1,children:[{title:`桌面端`,key:`desktop`,children:[{title:`Windows`,key:`desktop-win`},{title:`macOS`,key:`desktop-mac`}]},{title:`移动端`,key:`mobile`,children:[{title:`iOS`,key:`mobile-ios`},{title:`Android`,key:`mobile-android`}]}]}])},ge=async e=>{e.children.length||(le.value=Mt(le.value,e.key,e=>({...e,children:Array.from({length:8},(t,n)=>({title:`${String(e.title)} / Module ${n+1}`,key:`${String(e.key)}-child-${n}`,isLeaf:n%3!=0}))})))},_e=()=>{w.value=[],E.value=[],A.value+=1};return g(()=>p(re,()=>({children:(t,s,l)=>{let g=()=>h(t=>{let s=M(),l=nt().content.cloneNode(!0),g=l.firstChild,L=g.childNodes[3],R=L.parentNode,re=g.childNodes[4],ve=re.parentNode,ye=g.childNodes[5],J=ye.parentNode,Y=g.childNodes[6],be=Y.parentNode,X=g.childNodes[7],xe=X.parentNode,Se=g.childNodes[8],Ce=Se.parentNode,Z=g.childNodes[9],we=Z.parentNode,Q=g.childNodes[11],Te=Q.parentNode,Ee=g.childNodes[12],De=Ee.parentNode,Oe=g.childNodes[13],ke=Oe.parentNode,Ae=g.childNodes[14],je=Ae.parentNode,$=g.childNodes[15].childNodes[1],Me=$.parentNode;s.appendChild(l);let Ne=(e,t,n)=>{let s=()=>p(G,()=>({title:`基础选中与整行交互`,summary:`默认 Tree 就是一个纯浏览 + 选中容器；blockNode 和 showIcon 让它更像配置面板里的主导航。`,tab:q.basic,code:pt,preview:(e,t,n)=>{let s=()=>h(e=>{let t=O(`div`,e);t.setAttribute(`class`,`space-y-4 not-prose`),i(t,Ze,()=>({treeData:it,selectedKeys:d.value,defaultExpandAll:!0,showIcon:!0,blockNode:!0,onSelect:e=>{d.value=e}}));let n=O(`div`,t);C(t,n),n.setAttribute(`class`,`grid gap-3 md:grid-cols-3`);let s=O(`div`,n);C(n,s),s.setAttribute(`class`,`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`);let c=O(`div`,s);C(s,c),c.setAttribute(`class`,`text-xs text-base-content/45`),C(c,T(`当前选中`));let l=O(`div`,s);C(s,l),l.setAttribute(`class`,`mt-2 flex flex-wrap gap-2`),a(()=>d.value.length?{__rue_compiled_branch_key:!0,create:()=>h(e=>{let t=M(),n=P(`rue:list:end`);C(t,n);let i=[];te(()=>{let e=d.value||[];i=D(n.parentNode,n,i,e,(e,t)=>String(e),(e,t)=>{let n=V(e);return ee((e,t,i)=>{let a=()=>r(e=>{let t=O(`span`,e);t.setAttribute(`class`,`badge badge-outline badge-sm`);let r=T(``);return C(t,r),o(r,()=>String(n.get())),[t,t]});return e==null?a():m(e,i,a)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),I(()=>S(i));let a=T(``),s=T(``);return t.insertBefore(a,t.firstChild),t.appendChild(s),[t.firstChild,t.lastChild]})}:{__rue_compiled_branch_key:!1,create:()=>U(e=>{let t=O(`span`,e);return t.setAttribute(`class`,`text-sm text-base-content/55`),C(t,T(`未选择`)),[t,t]})}).__rue_compiled_mount(l);let u=O(`div`,n);C(n,u),u.setAttribute(`class`,`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`);let f=O(`div`,u);C(u,f),f.setAttribute(`class`,`text-xs text-base-content/45`),C(f,T(`推荐场景`));let p=O(`div`,u);C(u,p),p.setAttribute(`class`,`mt-2 text-sm text-base-content/75`),C(p,T(`组件目录、文档导航、资源分类`));let g=O(`div`,n);C(n,g),g.setAttribute(`class`,`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`);let _=O(`div`,g);C(g,_),_.setAttribute(`class`,`text-xs text-base-content/45`),C(_,T(`状态模型`));let v=O(`div`,g);return C(g,v),v.setAttribute(`class`,`mt-2 text-sm text-base-content/75`),C(v,T(`selectedKeys / expandedKeys 分离，便于受控更新。`)),[t,t]});return e==null?s():m(e,n,s)}}));return e==null?s():m(e,n,s)},Pe=L.nextSibling;R.removeChild(L),e({parent:R,before:Pe},()=>Ne,()=>({}));let Fe=(t,n,a)=>{let s=()=>p(G,()=>({title:`DirectoryTree 目录树快捷 API`,summary:`Tree.DirectoryTree 默认补上目录图标、整行可点和 click 展开；这里先只看 expandAction 和 toggleSelect 这两个基础交互开关。`,tab:q.directory,code:vt,preview:(t,n,a)=>{let s=()=>h(t=>{let n=O(`div`,t);n.setAttribute(`class`,`grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`),i(n,Ze.DirectoryTree,()=>({treeData:ct,selectedKeys:v.value,multiple:!0,expandAction:y.value,toggleSelect:b.value,rangeSelect:x.get(),onSelect:e=>{v.value=e}}));let a=O(`div`,n);C(n,a),a.setAttribute(`class`,`space-y-3`);let s=O(`div`,a);C(a,s),s.setAttribute(`class`,`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`);let l=O(`div`,s);C(s,l),l.setAttribute(`class`,`text-xs text-base-content/45`),C(l,T(`快捷属性`));let u=O(`div`,s);C(s,u),u.setAttribute(`class`,`mt-3 flex flex-wrap gap-2`);let d=O(`button`,u);C(u,d),d.setAttribute(`type`,`button`);let f;k(()=>{let e=y.value===`click`?`btn btn-primary btn-xs`:`btn btn-ghost btn-xs`,t=e===!1||e==null?``:String(e);Object.is(f,t)||(f=t,d.setAttribute(`class`,t))}),I(z(t,d,`click`,()=>()=>{y.value=`click`})),C(d,T(`click 展开`));let p=O(`button`,u);C(u,p),p.setAttribute(`type`,`button`);let h;k(()=>{let e=y.value===`doubleClick`?`btn btn-primary btn-xs`:`btn btn-ghost btn-xs`,t=e===!1||e==null?``:String(e);Object.is(h,t)||(h=t,p.setAttribute(`class`,t))}),I(z(t,p,`click`,()=>()=>{y.value=`doubleClick`})),C(p,T(`doubleClick 展开`));let g=O(`button`,u);C(u,g),g.setAttribute(`type`,`button`);let _;k(()=>{let e=y.value===!1?`btn btn-primary btn-xs`:`btn btn-ghost btn-xs`,t=e===!1||e==null?``:String(e);Object.is(_,t)||(_=t,g.setAttribute(`class`,t))}),I(z(t,g,`click`,()=>()=>{y.value=!1})),C(g,T(`只选中不展开`));let w=O(`div`,s);C(s,w),w.setAttribute(`class`,`mt-2 flex flex-wrap gap-2`);let E=O(`button`,w);C(w,E),E.setAttribute(`type`,`button`);let A;k(()=>{let e=b.value?`btn btn-primary btn-xs`:`btn btn-ghost btn-xs`,t=e===!1||e==null?``:String(e);Object.is(A,t)||(A=t,E.setAttribute(`class`,t))}),I(z(t,E,`click`,()=>()=>{b.value=!0})),C(E,T(`ctrl/meta 追加`));let j=O(`button`,w);C(w,j),j.setAttribute(`type`,`button`);let M;k(()=>{let e=b.value?`btn btn-ghost btn-xs`:`btn btn-primary btn-xs`,t=e===!1||e==null?``:String(e);Object.is(M,t)||(M=t,j.setAttribute(`class`,t))}),I(z(t,j,`click`,()=>()=>{b.value=!1})),C(j,T(`关闭追加选择`));let N=O(`div`,a);C(a,N),N.setAttribute(`class`,`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`);let F=O(`div`,N);C(N,F),F.setAttribute(`class`,`text-xs text-base-content/45`),C(F,T(`当前选择`));let L=O(`div`,N);C(N,L),L.setAttribute(`class`,`mt-2 flex flex-wrap gap-2`);let R=P(`rue:list:end`);C(L,R);let B=[];te(()=>{let e=v.value||[];B=D(L,R,B,e,(e,t)=>String(e),(e,t)=>{let n=V(e);return ee((e,t,i)=>{let a=()=>r(e=>{let t=O(`span`,e);t.setAttribute(`class`,`badge badge-outline badge-sm`);let r=T(``);return C(t,r),o(r,()=>String(n.get())),[t,t]});return e==null?a():m(e,i,a)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),I(()=>S(B));let H=O(`div`,a);C(a,H),H.setAttribute(`class`,`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`),C(H,T(`当前组合是 expandAction=`));let U=O(`strong`,H);C(H,U);let ne=T(``);C(U,ne),c(ne,()=>String(y.value)),C(H,T(` 、toggleSelect=`));let re=O(`strong`,H);C(H,re);let G=T(``);C(re,G),c(G,()=>String(b.value)),C(H,T(` 、rangeSelect=`));let ie=O(`strong`,H);C(H,ie);let K=P(`rue:compiled-slot`);C(ie,K),e({parent:ie,before:K},()=>W(x.get()),()=>({})),C(H,T(`。 `));let ae=O(`div`,H);return C(H,ae),ae.setAttribute(`class`,`mt-3`),C(ae,T(`普通点击会落成单选；打开追加后，meta / ctrl 会追加或移除选中，shift 也会启用区间选择。关闭追加时，这两类补充选择都会停用；append / replace 的差异放到下面的对照示例里单独演示。`)),[n,n]});return t==null?s():m(t,a,s)}}));return t==null?s():m(t,a,s)},Ie=re.nextSibling;ve.removeChild(re),e({parent:ve,before:Ie},()=>Fe,()=>({}));let Le=(t,i,s)=>{let c=()=>p(G,()=>({title:`shift append vs shift replace`,summary:`Shift 的基础语义是先选一个节点，再 Shift 选另一个节点，中间连续区间都会选中；append / replace 只决定当前额外选择是否保持。`,tab:q.directoryRange,code:yt,preview:(t,i,s)=>{let c=()=>h(t=>{let i=M(),s=O(`div`,i);C(i,s),n(s,`space-y-4 not-prose`);let c=O(`div`,s);C(s,c),n(c,`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`);let l=O(`div`,c);C(c,l),C(l,T(`基础行为：先单击 alpha.ts，再按住 Shift 单击 epsilon.ts，alpha.ts 到 epsilon.ts 都会选中。`));let d=O(`div`,c);C(c,d),n(d,`mt-2`),C(d,T(`append / replace 只影响当前额外非连续选择是否保持：重置后先单击 beta.ts，再按住 Cmd / Ctrl 单击 epsilon.ts，最后按住 Shift 单击 delta.ts。`));let f=O(`div`,c);C(c,f),n(f,`mt-2`),C(f,T(`append 会保持 beta.ts；replace 只保持 delta.ts 到 epsilon.ts 这一段。`));let p=O(`button`,c);C(c,p),u(p,`type`,`button`),n(p,`btn btn-ghost btn-xs mt-3`);let g=e=>{let t=_e;typeof t==`function`&&t(e)};p.addEventListener(`click`,g),I(()=>p.removeEventListener(`click`,g)),C(p,T(`重置两边示例`));let _=O(`div`,s);C(s,_),n(_,`grid gap-4 xl:grid-cols-2`);let v=O(`div`,_);C(_,v),n(v,`space-y-3 rounded-[1.4rem] border border-base-300 bg-base-100 p-4 shadow-sm`);let y=O(`div`,v);C(v,y),n(y,`flex items-center justify-between gap-3`);let b=O(`div`,y);C(y,b);let x=O(`div`,b);C(b,x),n(x,`text-sm font-semibold`),C(x,T(`rangeSelect="append"`));let k=O(`div`,b);C(b,k),n(k,`text-xs text-base-content/55`),C(k,T(`保持原先的非连续选择，再并入新的 shift 区间。`));let j=O(`span`,y);C(y,j),n(j,`badge badge-outline badge-sm`),C(j,T(`append`));let N=P(`rue:component:anchor`);C(v,N),e({parent:v,before:N},()=>(e,t,n)=>m(e,n,()=>ne(Ze.DirectoryTree,()=>({key:`append-${A.value}`,treeData:lt,selectedKeys:w.value,multiple:!0,toggleSelect:!0,rangeSelect:`append`,onSelect:e=>{w.value=e}}))),()=>({}));let F=O(`div`,v);C(v,F),n(F,`rounded-box border border-base-300 bg-base-100 px-4 py-3 text-sm text-base-content/70`);let L=O(`div`,F);C(F,L),n(L,`text-xs text-base-content/45`),C(L,T(`当前选择`));let R=O(`div`,F);C(F,R),n(R,`mt-2 flex flex-wrap gap-2`),a(()=>w.value.length?{__rue_compiled_branch_key:!0,create:()=>h(e=>{let t=M(),n=P(`rue:list:end`);C(t,n);let i=[];te(()=>{let e=w.value||[];i=D(n.parentNode,n,i,e,(e,t)=>String(e),(e,t)=>{let n=V(e);return ee((e,t,i)=>{let a=()=>r(e=>{let t=O(`span`,e);t.setAttribute(`class`,`badge badge-outline badge-sm`);let r=T(``);return C(t,r),o(r,()=>String(n.get())),[t,t]});return e==null?a():m(e,i,a)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),I(()=>S(i));let a=T(``),s=T(``);return t.insertBefore(a,t.firstChild),t.appendChild(s),[t.firstChild,t.lastChild]})}:{__rue_compiled_branch_key:!1,create:()=>U(e=>{let t=O(`span`,e);return t.setAttribute(`class`,`text-sm text-base-content/55`),C(t,T(`还没有选择`)),[t,t]})}).__rue_compiled_mount(R);let z=O(`div`,_);C(_,z),n(z,`space-y-3 rounded-[1.4rem] border border-base-300 bg-base-100 p-4 shadow-sm`);let B=O(`div`,z);C(z,B),n(B,`flex items-center justify-between gap-3`);let H=O(`div`,B);C(B,H);let W=O(`div`,H);C(H,W),n(W,`text-sm font-semibold`),C(W,T(`rangeSelect="replace"`));let re=O(`div`,H);C(H,re),n(re,`text-xs text-base-content/55`),C(re,T(`只保持新的 shift 区间，基础的非连续选择会被替换掉。`));let G=O(`span`,B);C(B,G),n(G,`badge badge-primary badge-outline badge-sm`),C(G,T(`replace`));let ie=P(`rue:component:anchor`);C(z,ie),e({parent:z,before:ie},()=>(e,t,n)=>m(e,n,()=>ne(Ze.DirectoryTree,()=>({key:`replace-${A.value}`,treeData:lt,selectedKeys:E.value,multiple:!0,toggleSelect:!0,rangeSelect:`replace`,onSelect:e=>{E.value=e}}))),()=>({}));let K=O(`div`,z);C(z,K),n(K,`rounded-box border border-base-300 bg-base-100 px-4 py-3 text-sm text-base-content/70`);let ae=O(`div`,K);C(K,ae),n(ae,`text-xs text-base-content/45`),C(ae,T(`当前选择`));let oe=O(`div`,K);C(K,oe),n(oe,`mt-2 flex flex-wrap gap-2`),a(()=>E.value.length?{__rue_compiled_branch_key:!0,create:()=>h(e=>{let t=M(),n=P(`rue:list:end`);C(t,n);let i=[];te(()=>{let e=E.value||[];i=D(n.parentNode,n,i,e,(e,t)=>String(e),(e,t)=>{let n=V(e);return ee((e,t,i)=>{let a=()=>r(e=>{let t=O(`span`,e);t.setAttribute(`class`,`badge badge-outline badge-sm`);let r=T(``);return C(t,r),o(r,()=>String(n.get())),[t,t]});return e==null?a():m(e,i,a)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),I(()=>S(i));let a=T(``),s=T(``);return t.insertBefore(a,t.firstChild),t.appendChild(s),[t.firstChild,t.lastChild]})}:{__rue_compiled_branch_key:!1,create:()=>U(e=>{let t=O(`span`,e);return t.setAttribute(`class`,`text-sm text-base-content/55`),C(t,T(`还没有选择`)),[t,t]})}).__rue_compiled_mount(oe);let se=T(``),ce=T(``);return i.insertBefore(se,i.firstChild),i.appendChild(ce),[i.firstChild,i.lastChild]});return t==null?c():m(t,s,c)}}));return t==null?c():m(t,s,c)},Re=ye.nextSibling;J.removeChild(ye),e({parent:J,before:Re},()=>Le,()=>({}));let ze=(e,t,n)=>{let s=()=>p(G,()=>({title:`父子联动与半选态`,summary:`这一块只看级联勾选和 halfChecked，不再混入 disabled / disableCheckbox，点击父节点时能直接看到整棵子树联动。`,tab:q.checkable,code:mt,preview:(e,t,n)=>{let s=()=>h(e=>{let t=O(`div`,e);t.setAttribute(`class`,`space-y-4 not-prose`),i(t,Ze,()=>({treeData:at,selectedKeys:j.value,checkedKeys:N.value,checkable:!0,defaultExpandAll:!0,showLine:!0,blockNode:!0,onSelect:e=>{j.value=e},onCheck:(e,t)=>{N.value=Tt(e),F.value=Et(e,t)}}));let n=O(`div`,t);C(t,n),n.setAttribute(`class`,`grid gap-3 md:grid-cols-3`);let s=O(`div`,n);C(n,s),s.setAttribute(`class`,`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`);let c=O(`div`,s);C(s,c),c.setAttribute(`class`,`text-xs text-base-content/45`),C(c,T(`selectedKeys`));let l=O(`div`,s);C(s,l),l.setAttribute(`class`,`mt-2 flex flex-wrap gap-2`),a(()=>j.value.length?{__rue_compiled_branch_key:!0,create:()=>h(e=>{let t=M(),n=P(`rue:list:end`);C(t,n);let i=[];te(()=>{let e=j.value||[];i=D(n.parentNode,n,i,e,(e,t)=>String(e),(e,t)=>{let n=V(e);return ee((e,t,i)=>{let a=()=>r(e=>{let t=O(`span`,e);t.setAttribute(`class`,`badge badge-outline badge-sm`);let r=T(``);return C(t,r),o(r,()=>String(n.get())),[t,t]});return e==null?a():m(e,i,a)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),I(()=>S(i));let a=T(``),s=T(``);return t.insertBefore(a,t.firstChild),t.appendChild(s),[t.firstChild,t.lastChild]})}:{__rue_compiled_branch_key:!1,create:()=>U(e=>{let t=O(`span`,e);return t.setAttribute(`class`,`text-sm text-base-content/55`),C(t,T(`当前没有选中节点`)),[t,t]})}).__rue_compiled_mount(l);let u=O(`div`,n);C(n,u),u.setAttribute(`class`,`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`);let d=O(`div`,u);C(u,d),d.setAttribute(`class`,`text-xs text-base-content/45`),C(d,T(`checkedKeys`));let f=O(`div`,u);C(u,f),f.setAttribute(`class`,`mt-2 flex flex-wrap gap-2`);let p=P(`rue:list:end`);C(f,p);let g=[];te(()=>{let e=N.value||[];g=D(f,p,g,e,(e,t)=>String(e),(e,t)=>{let n=V(e);return ee((e,t,i)=>{let a=()=>r(e=>{let t=O(`span`,e);t.setAttribute(`class`,`badge badge-primary badge-outline badge-sm`);let r=T(``);return C(t,r),o(r,()=>String(n.get())),[t,t]});return e==null?a():m(e,i,a)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),I(()=>S(g));let _=O(`div`,n);C(n,_),_.setAttribute(`class`,`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`);let v=O(`div`,_);C(_,v),v.setAttribute(`class`,`text-xs text-base-content/45`),C(v,T(`halfCheckedKeys`));let y=O(`div`,_);return C(_,y),y.setAttribute(`class`,`mt-2 flex flex-wrap gap-2`),a(()=>F.value.length?{__rue_compiled_branch_key:!0,create:()=>h(e=>{let t=M(),n=P(`rue:list:end`);C(t,n);let i=[];te(()=>{let e=F.value||[];i=D(n.parentNode,n,i,e,(e,t)=>String(e),(e,t)=>{let n=V(e);return ee((e,t,i)=>{let a=()=>r(e=>{let t=O(`span`,e);t.setAttribute(`class`,`badge badge-ghost badge-sm`);let r=T(``);return C(t,r),o(r,()=>String(n.get())),[t,t]});return e==null?a():m(e,i,a)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),I(()=>S(i));let a=T(``),s=T(``);return t.insertBefore(a,t.firstChild),t.appendChild(s),[t.firstChild,t.lastChild]})}:{__rue_compiled_branch_key:!1,create:()=>U(e=>{let t=O(`span`,e);return t.setAttribute(`class`,`text-sm text-base-content/55`),C(t,T(`当前没有半选`)),[t,t]})}).__rue_compiled_mount(y),[t,t]});return e==null?s():m(e,n,s)}}));return e==null?s():m(e,n,s)},Be=Y.nextSibling;be.removeChild(Y),e({parent:be,before:Be},()=>ze,()=>({}));let Ve=(e,t,n)=>{let s=()=>p(G,()=>({title:`禁用节点与禁用复选框`,summary:`把 disabled 和 disableCheckbox 单独拆出来看：前者整节点只读，后者只禁用勾选框，不再干扰联动示例。`,tab:q.checkableDisabled,code:ht,preview:(e,t,n)=>{let s=()=>h(e=>{let t=O(`div`,e);t.setAttribute(`class`,`grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`),i(t,Ze,()=>({treeData:ot,checkedKeys:H.value,checkable:!0,defaultExpandAll:!0,showLine:!0,blockNode:!0,onCheck:e=>{H.value=Tt(e)}}));let n=O(`div`,t);C(t,n),n.setAttribute(`class`,`space-y-3`);let s=O(`div`,n);C(n,s),s.setAttribute(`class`,`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`);let c=O(`div`,s);C(s,c),c.setAttribute(`class`,`text-xs text-base-content/45`),C(c,T(`当前勾选`));let l=O(`div`,s);C(s,l),l.setAttribute(`class`,`mt-2 flex flex-wrap gap-2`),a(()=>H.value.length?{__rue_compiled_branch_key:!0,create:()=>h(e=>{let t=M(),n=P(`rue:list:end`);C(t,n);let i=[];te(()=>{let e=H.value||[];i=D(n.parentNode,n,i,e,(e,t)=>String(e),(e,t)=>{let n=V(e);return ee((e,t,i)=>{let a=()=>r(e=>{let t=O(`span`,e);t.setAttribute(`class`,`badge badge-outline badge-sm`);let r=T(``);return C(t,r),o(r,()=>String(n.get())),[t,t]});return e==null?a():m(e,i,a)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),I(()=>S(i));let a=T(``),s=T(``);return t.insertBefore(a,t.firstChild),t.appendChild(s),[t.firstChild,t.lastChild]})}:{__rue_compiled_branch_key:!1,create:()=>U(e=>{let t=O(`span`,e);return t.setAttribute(`class`,`text-sm text-base-content/55`),C(t,T(`当前没有勾选`)),[t,t]})}).__rue_compiled_mount(l);let u=O(`div`,n);C(n,u),u.setAttribute(`class`,`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm text-sm text-base-content/75`);let d=O(`div`,u);C(u,d),d.setAttribute(`class`,`font-medium text-base-content`),C(d,T(`disabled`));let f=O(`div`,u);C(u,f),f.setAttribute(`class`,`mt-2`),C(f,T(`整节点不可展开、不可选中、不可勾选，适合只读目录或冻结配置。`));let p=O(`div`,n);C(n,p),p.setAttribute(`class`,`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm text-sm text-base-content/75`);let g=O(`div`,p);C(p,g),g.setAttribute(`class`,`font-medium text-base-content`),C(g,T(`disableCheckbox`));let _=O(`div`,p);return C(p,_),_.setAttribute(`class`,`mt-2`),C(_,T(`节点仍能展示和展开，但复选框不会参与交互，适合“只可浏览不可授权”的条目。`)),[t,t]});return e==null?s():m(e,n,s)}}));return e==null?s():m(e,n,s)},He=X.nextSibling;xe.removeChild(X),e({parent:xe,before:He},()=>Ve,()=>({}));let Ue=(e,t,r)=>{let a=()=>p(G,()=>({title:`Simple Mode + Search`,summary:`扁平数据直入后，内置搜索会保持命中节点的祖先链，不会把层级上下文切断。`,tab:q.simple,code:gt,preview:(e,t,r)=>{let a=()=>h(()=>{let e=M(),t=O(`div`,e);C(e,t),n(t,`grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`),i(t,Ze,()=>({treeData:st,treeDataSimpleMode:{id:`nodeId`,pId:`parentId`,rootPId:0},fieldNames:{title:`name`,key:`code`},selectedKeys:ie.value,allowSearch:!0,defaultExpandAll:!0,onSelect:e=>{ie.value=e}}));let r=O(`div`,t);C(t,r),n(r,`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`),C(r,T(`当前选中：`));let a=O(`code`,r);C(r,a);let o=_(a);C(a,o),k(()=>{B(o,JSON.stringify(ie.value))});let s=O(`div`,r);C(r,s),n(s,`mt-3`),C(s,T(`这类 simple mode 很适合后端直接给 id / pId 的菜单、流程节点和权限项，不需要再先做一遍树转换。`));let c=T(``),l=T(``);return e.insertBefore(c,e.firstChild),e.appendChild(l),[e.firstChild,e.lastChild]});return e==null?a():m(e,r,a)}}));return e==null?a():m(e,r,a)},We=Se.nextSibling;Ce.removeChild(Se),e({parent:Ce,before:We},()=>Ue,()=>({}));let Ge=(t,r,o)=>{let s=()=>p(G,()=>({title:`Async Load 与自定义标题`,summary:`第一次展开时再拉子节点，同时用 titleRender 和 icon 把状态信息塞回每一行。`,tab:q.async,code:_t,preview:(t,r,o)=>{let s=()=>h(()=>{let t=M(),r=O(`div`,t);C(t,r),n(r,`grid gap-4 not-prose lg:grid-cols-[minmax(0,26rem),1fr] lg:items-start`),i(r,Ze,()=>({treeData:pe.value,selectedKeys:K.value,expandedKeys:ae.value,loadData:he,showLine:!0,showIcon:!0,blockNode:!0,titleRender:({node:t,loading:n})=>h(r=>{let i=Qe().content.cloneNode(!0).firstChild,o=i.childNodes[0].childNodes[0],s=o.parentNode,c=i.childNodes[1].childNodes[0],l=c.parentNode,u=P(`rue:text-hole:0`);return s.replaceChild(u,o),e({parent:s,before:u},()=>W(t.title),()=>({})),f(l,c,()=>n?{__rue_compiled_branch_key:!0,create:()=>U(e=>{let t=T(`loading`);return[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>a(()=>t.children.length?{__rue_compiled_branch_key:!0,create:()=>U(e=>{let t=T(`branch`);return[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>U(e=>{let t=T(`leaf`);return[t,t]})})}),[i,i]}),onSelect:e=>{K.value=e},onExpand:e=>{ae.value=e}}));let o=O(`div`,r);C(r,o),n(o,`space-y-3`);let s=O(`div`,o);C(o,s),n(s,`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`);let c=O(`div`,s);C(s,c),n(c,`text-xs text-base-content/45`),C(c,T(`expandedKeys`));let l=O(`div`,s);C(s,l),n(l,`mt-2 text-sm text-base-content/75`);let u=_(l);C(l,u),k(()=>{B(u,JSON.stringify(ae.value))});let d=O(`div`,o);C(o,d),n(d,`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`);let p=O(`div`,d);C(d,p),n(p,`text-xs text-base-content/45`),C(p,T(`selectedKeys`));let m=O(`div`,d);C(d,m),n(m,`mt-2 text-sm text-base-content/75`);let g=_(m);C(m,g),k(()=>{B(g,JSON.stringify(K.value))});let v=O(`div`,o);C(o,v),n(v,`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`),C(v,T(`展开 release-bus 后才会注入桌面端和移动端节点，适合远端目录、超大权限树和发布范围配置。`));let y=T(``),b=T(``);return t.insertBefore(y,t.firstChild),t.appendChild(b),[t.firstChild,t.lastChild]});return t==null?s():m(t,o,s)}}));return t==null?s():m(t,o,s)},Ke=Z.nextSibling;we.removeChild(Z),e({parent:we,before:Ke},()=>Ge,()=>({}));let qe=(t,n,r)=>{let a=()=>p(G,()=>({title:`allowDrop 策略与拖拽占位`,summary:`allowDrop 可以把 folder / file 的落点规则写清楚；hover 时 Tree 会直接给出插前、插后或放入占位提示。`,tab:q.drag,code:bt,preview:(t,n,r)=>{let a=()=>h(t=>{let n=O(`div`,t);n.setAttribute(`class`,`grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`),i(n,Ze,()=>({treeData:oe.value,draggable:!0,blockNode:!0,defaultExpandAll:!0,allowDrop:({dropNode:e,dropToGap:t})=>t||e.raw.kind!==`file`,titleRender:({node:t})=>h(n=>{let r=$e().content.cloneNode(!0).firstChild,i=r.childNodes[1],a=r.childNodes[0].childNodes[0],o=a.parentNode,s=r.childNodes[1].childNodes[0],c=s.parentNode,l=P(`rue:text-hole:0`);o.replaceChild(l,a);let u;return k(()=>{let e=t.raw.kind===`folder`?`badge badge-ghost badge-xs`:`badge badge-outline badge-xs`,n=e===!1||e==null?``:String(e);Object.is(u,n)||(u=n,i.setAttribute(`class`,n))}),e({parent:o,before:l},()=>W(t.title),()=>({})),e({parent:c,before:s},()=>W(t.raw.kind),()=>({})),[r,r]}),onDrop:e=>{oe.value=jt(oe.value,e),se.value=`${String(e.dragNode.key)} -> ${String(e.node.key)} (${e.dropToGap?e.dropPosition<0?`before`:`after`:`inside`})`}}));let r=O(`div`,n);C(n,r),r.setAttribute(`class`,`space-y-3`);let a=O(`div`,r);C(r,a),a.setAttribute(`class`,`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`);let o=O(`div`,a);C(a,o),o.setAttribute(`class`,`text-xs text-base-content/45`),C(o,T(`最近一次拖拽`));let s=O(`div`,a);C(a,s),s.setAttribute(`class`,`mt-2 text-sm text-base-content/75`);let l=T(``);C(s,l),c(l,()=>se.value);let u=O(`div`,r);C(r,u),u.setAttribute(`class`,`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`);let d=O(`div`,u);C(u,d),d.setAttribute(`class`,`text-xs text-base-content/45`),C(d,T(`allowDrop 规则`));let f=O(`div`,u);C(u,f),f.setAttribute(`class`,`mt-2 grid gap-2 text-sm text-base-content/75`);let p=O(`div`,f);C(f,p),C(p,T(`folder：允许放入，也允许插前 / 插后。`));let m=O(`div`,f);C(f,m),C(m,T(`file：只允许插前 / 插后，不允许作为 inside 目标。`));let g=O(`div`,r);return C(r,g),g.setAttribute(`class`,`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`),C(g,T(`拖到 folder 正中央会看到“放入”，拖到行的上沿或下沿则会出现“插前 / 插后”；如果目标是 file，inside 落点会被 allowDrop 直接拦掉。`)),[n,n]});return t==null?a():m(t,r,a)}}));return t==null?a():m(t,r,a)},Je=Q.nextSibling;Te.removeChild(Q),e({parent:Te,before:Je},()=>qe,()=>({}));let Ye=(t,r,a)=>{let o=()=>p(G,()=>({title:`Virtual Scroll`,summary:`长列表下只渲染可见窗口，height 和 itemHeight 负责限定视口和估算切片范围。`,tab:q.virtual,code:xt,preview:(t,r,a)=>{let o=()=>h(()=>{let t=M(),r=O(`div`,t);C(t,r),n(r,`grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`),i(r,Ze,()=>({treeData:dt,selectedKeys:ce.value,height:320,itemHeight:42,virtual:!0,blockNode:!0,onSelect:e=>{ce.value=e}}));let a=O(`div`,r);C(r,a),n(a,`space-y-3`);let o=O(`div`,a);C(a,o),n(o,`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`);let s=O(`div`,o);C(o,s),n(s,`text-xs text-base-content/45`),C(s,T(`数据量`));let c=O(`div`,o);C(o,c),n(c,`mt-2 text-2xl font-semibold`);let l=P(`rue:slot:anchor`);C(c,l),e({parent:c,before:l},()=>W(dt.length),()=>({}));let u=O(`div`,a);C(a,u),n(u,`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`);let d=O(`div`,u);C(u,d),n(d,`text-xs text-base-content/45`),C(d,T(`当前选中`));let f=O(`div`,u);C(u,f),n(f,`mt-2 text-sm text-base-content/75`);let p=_(f);C(f,p),k(()=>{B(p,JSON.stringify(ce.value))});let m=O(`div`,a);C(a,m),n(m,`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`),C(m,T(`对文档页目录、埋点树、批量资源目录这种长列表场景，虚拟滚动能显著降低初始渲染压力。`));let h=T(``),g=T(``);return t.insertBefore(h,t.firstChild),t.appendChild(g),[t.firstChild,t.lastChild]});return t==null?o():m(t,a,o)}}));return t==null?o():m(t,a,o)},Xe=Ee.nextSibling;De.removeChild(Ee),e({parent:De,before:Xe},()=>Ye,()=>({}));let et=(t,r,o)=>{let s=()=>p(G,()=>({title:`Virtual + Async Load 场景页`,summary:`把 virtual、height、itemHeight 和 loadData 合在一起，就能接超长目录或资源树，只在展开分支时再注入子节点。`,tab:q.virtualAsync,code:St,preview:(t,r,o)=>{let s=()=>h(()=>{let t=M(),r=O(`div`,t);C(t,r),n(r,`grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`),i(r,Ze,()=>({treeData:le.value,selectedKeys:de.value,expandedKeys:ue.value,height:340,itemHeight:40,virtual:!0,showIcon:!0,blockNode:!0,loadData:ge,titleRender:({node:t,loading:n})=>h(r=>{let i=Qe().content.cloneNode(!0).firstChild,o=i.childNodes[0].childNodes[0],s=o.parentNode,c=i.childNodes[1].childNodes[0],l=c.parentNode,u=P(`rue:text-hole:0`);return s.replaceChild(u,o),e({parent:s,before:u},()=>W(t.title),()=>({})),f(l,c,()=>n?{__rue_compiled_branch_key:!0,create:()=>U(e=>{let t=T(`loading`);return[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>a(()=>t.children.length?{__rue_compiled_branch_key:!0,create:()=>U(e=>{let t=T(`loaded`);return[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>a(()=>t.isLeaf?{__rue_compiled_branch_key:!0,create:()=>U(e=>{let t=T(`leaf`);return[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>U(e=>{let t=T(`lazy`);return[t,t]})})})}),[i,i]}),onSelect:e=>{de.value=e},onExpand:e=>{ue.value=e}}));let o=O(`div`,r);C(r,o),n(o,`space-y-3`);let s=O(`div`,o);C(o,s),n(s,`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`);let c=O(`div`,s);C(s,c),n(c,`text-xs text-base-content/45`),C(c,T(`根节点数量`));let l=O(`div`,s);C(s,l),n(l,`mt-2 text-2xl font-semibold`);let u=P(`rue:slot:anchor`);C(l,u),e({parent:l,before:u},()=>W(le.value.length),()=>({}));let d=O(`div`,o);C(o,d),n(d,`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`);let p=O(`div`,d);C(d,p),n(p,`text-xs text-base-content/45`),C(p,T(`已加载分支`));let m=O(`div`,d);C(d,m),n(m,`mt-2 text-2xl font-semibold`);let g=P(`rue:slot:anchor`);C(m,g),e({parent:m,before:g},()=>W(fe.get()),()=>({}));let v=O(`div`,o);C(o,v),n(v,`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`);let y=O(`div`,v);C(v,y),n(y,`text-xs text-base-content/45`),C(y,T(`当前展开`));let b=O(`div`,v);C(v,b),n(b,`mt-2 text-sm text-base-content/75`);let x=_(b);C(b,x),k(()=>{B(x,JSON.stringify(ue.value))});let S=O(`div`,o);C(o,S),n(S,`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`),C(S,T(`先滚动到较深位置再展开节点也没问题：视口外的行不会真正渲染，只有命中的 branch 才会触发 loadData 注入子节点。`));let w=T(``),E=T(``);return t.insertBefore(w,t.firstChild),t.appendChild(E),[t.firstChild,t.lastChild]});return t==null?s():m(t,o,s)}}));return t==null?s():m(t,o,s)},tt=Oe.nextSibling;ke.removeChild(Oe),e({parent:ke,before:tt},()=>et,()=>({}));let ut=(e,t,n)=>{let r=()=>p(G,()=>({title:`展示基础递归 示例`,summary:`基础的 TreeView 行为没有删掉，只是并进 design 页面里，方便对比“直接改数据”这类递归写法。`,tab:q.legacy,code:Ct,preview:(e,t,n)=>{let r=()=>h(e=>{let t=O(`div`,e);t.setAttribute(`class`,`card border border-base-200/80 bg-base-100 shadow-sm not-prose`);let n=O(`div`,t);C(t,n),n.setAttribute(`class`,`card-body grid gap-4 lg:grid-cols-[minmax(0,1fr),18rem] lg:items-start`);let r=O(`ul`,n);C(n,r),r.setAttribute(`class`,`m-0 grid gap-1 p-0`),i(r,Pt,()=>({model:me.value,onChange:e=>{me.value=e}}));let a=O(`div`,n);return C(n,a),a.setAttribute(`class`,`rounded-box border border-base-300 bg-base-200/40 p-4 text-sm text-base-content/70`),C(a,T(`单击切换展开，双击叶子节点会把它转换成 folder，并在当前层直接追加一个新子节点。`)),[t,t]});return e==null?r():m(e,n,r)}}));return e==null?r():m(e,n,r)},ft=Ae.nextSibling;je.removeChild(Ae),e({parent:je,before:ft},()=>ut,()=>({}));let Dt=(e,t,n)=>{let r=()=>p(rt,()=>({rows:wt}));return e==null?r():m(e,n,r)},Ot=$.nextSibling;Me.removeChild($),e({parent:Me,before:Ot},()=>Dt,()=>({}));let kt=T(``),At=T(``);return s.insertBefore(kt,s.firstChild),s.appendChild(At),[s.firstChild,s.lastChild]});return t==null?g():m(t,l,g)}})))};export{Ft as default};