import{A as e,B as t,Bt as n,C as r,Dn as i,E as a,Et as o,H as s,It as c,K as l,L as u,Lt as d,Mt as f,Rt as p,S as m,Sn as h,Ut as g,V as _,W as v,Wt as y,X as b,Y as x,_n as S,_t as ee,b as C,bn as w,ct as te,dn as T,dt as E,fn as D,ft as O,gn as k,hn as A,ht as j,kn as M,mn as N,nn as ne,nt as P,on as re,ot as F,pn as ie,q as I,qt as L,rt as R,tt as ae,vn as oe,wn as z,x as se,yn as ce,yt as le,z as B}from"./rue-runtime-CwEGJ854.js";import{r as ue}from"./SidebarPlaygroundDesign-CwCJwf8H.js";import{t as V}from"./PreviewBlock-Daz-jANt.js";var de=S(`<div><span class="h-[2px] flex-1 rounded-full bg-primary/60"></span><span class="rounded-full bg-primary/10 px-2 py-1 text-[10px]">插入到此处</span></div>`),fe=S(`<span class="inline-flex size-6 items-center justify-center text-base-content/60"><!--rue:text-hole:0--></span>`),pe=S(`<span class="inline-flex size-6 shrink-0 items-center justify-center rounded-md bg-base-200/80 text-[10px] font-semibold text-base-content/60"><!--rue:text-hole:0--></span>`),H=S(`<span hidden="" aria-hidden="true"></span>`),me=S(`<div aria-hidden="true"></div>`),he=S(`<div><!--rue:text-hole:0--><button type="button"><!--rue:text-hole:1--></button><!--rue:text-hole:2--><!--rue:text-hole:3--><!--rue:text-hole:4--><button type="button"><!--rue:text-hole:5--><!--rue:text-hole:6--></button><!--rue:text-hole:7--></div>`),ge=S(`<div><!--rue:text-hole:0--></div>`),_e=S(`<section data-rue-tree="true"><!--rue:text-hole:0--><div data-rue-tree-body="true"></div></section>`),ve=new Map,ye=new WeakMap,be=new WeakMap,xe=8,Se=e=>typeof e==`object`&&!!e||typeof e==`function`,Ce=(e,t)=>e.length===t.length&&e.every((e,n)=>e===t[n]),we=(e,t,n)=>e.treeDataSimpleMode===t&&e.fieldNames===n,Te=(e,t,n,r,i)=>(e.treeData===t||Ce(e.treeDataRoots,n))&&we(e,r,i),Ee=(e,t,n,r)=>{let i=[Se(e)?ye.get(e):void 0],a=t[0];Se(a)&&a!==e&&i.push(be.get(a));for(let a of i){let i=a?.find(i=>Te(i,e,t,n,r));if(i)return i}},De=(e,t,n)=>{if(!Se(t))return;let r=e.get(t);if(!r){e.set(t,[n]);return}let i=r.findIndex(e=>Te(e,n.treeData,n.treeDataRoots,n.treeDataSimpleMode,n.fieldNames));i>=0?r[i]=n:(r.push(n),r.length>xe&&r.shift())},Oe=e=>{De(ye,e.treeData,e),De(be,e.treeDataRoots[0],e)},ke={title:`title`,key:`key`,children:`children`,disabled:`disabled`,selectable:`selectable`,checkable:`checkable`,disableCheckbox:`disableCheckbox`,isLeaf:`isLeaf`,icon:`icon`,className:`className`,id:`id`,pId:`pId`},Ae=(...e)=>e.filter(Boolean).join(` `),je=e=>typeof e==`object`&&!!e&&!Array.isArray(e),Me=e=>typeof e==`string`||typeof e==`number`,U=e=>`${typeof e}:${String(e)}`,W=e=>{let t=[],n=new Set;return(e??[]).forEach(e=>{let r=U(e);n.has(r)||(n.add(r),t.push(e))}),t},G=(e,t)=>e?t?`${e} ${t}`:e:t??``,Ne=()=>I(o(Object.assign(e=>{let t=A(`span`,e);return t.className=`loading loading-spinner loading-xs`,t.setAttribute(`aria-hidden`,`true`),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),e=>B(()=>{})),Pe=e=>{let t=v(e.expanded),n=v(e.hidden);return I(j(()=>{let e=P(),r=R(`svg`,e);b(e,r),F(r,`viewBox`,`0 0 16 16`),F(r,`fill`,`none`),F(r,`stroke`,`currentColor`),F(r,`strokeWidth`,`1.8`),z(()=>{u(r,G(`size-4 transition-transform duration-200`,n.get()?`opacity-0`:t.get()?`rotate-90`:``))}),F(r,`aria-hidden`,`true`);let i=R(`path`,r);return b(r,i),F(i,`strokeLinecap`,`round`),F(i,`strokeLinejoin`,`round`),F(i,`d`,`m6 3.5 4 4.5-4 4.5`),e},!0),e=>B(()=>{t.set(e.expanded),n.set(e.hidden)}),()=>e)},Fe=()=>I(j(()=>{let e=P(),t=R(`svg`,e);b(e,t),F(t,`viewBox`,`0 0 16 16`),F(t,`fill`,`currentColor`),u(t,`size-4`),F(t,`aria-hidden`,`true`);let n=R(`path`,t);return b(t,n),F(n,`d`,`M5 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM11 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM11 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM5 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM11 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z`),e},!0),e=>B(()=>{})),Ie=e=>{let t=v(e.expanded);return I(j(()=>{let e=P(),n=R(`svg`,e);b(e,n),F(n,`viewBox`,`0 0 16 16`),F(n,`fill`,`none`),F(n,`stroke`,`currentColor`),F(n,`strokeWidth`,`1.5`),u(n,`size-4`),F(n,`aria-hidden`,`true`);let r=R(`path`,n);return b(n,r),F(r,`strokeLinecap`,`round`),F(r,`strokeLinejoin`,`round`),z(()=>{F(r,`d`,String(t.get()?`M2.5 6.5h11l-1.2 6h-9.1l-1.2-6ZM2.5 5V3.5h4l1.2 1.5h5.8v1.5`:`M2.5 4.5h4l1.2 1.5h5.8v6.5h-11v-8Z`))}),e},!0),e=>B(()=>{t.set(e.expanded)}),()=>e)},Le=()=>I(j(()=>{let e=P(),t=R(`svg`,e);b(e,t),F(t,`viewBox`,`0 0 16 16`),F(t,`fill`,`none`),F(t,`stroke`,`currentColor`),F(t,`strokeWidth`,`1.5`),u(t,`size-4`),F(t,`aria-hidden`,`true`);let n=R(`path`,t);b(t,n),F(n,`strokeLinecap`,`round`),F(n,`strokeLinejoin`,`round`),F(n,`d`,`M4 2.5h5l3 3v8H4v-11Z`);let r=R(`path`,t);return b(t,r),F(r,`strokeLinecap`,`round`),F(r,`strokeLinejoin`,`round`),F(r,`d`,`M9 2.5v3h3`),e},!0),e=>B(()=>{})),K=(e,t,n)=>e[n?.[t]??ke[t]],Re=(e,t)=>K(e,`title`,t)??e.title??e.key,q=e=>new Set(W(e).map(U)),ze=(e,t)=>[e.roots.map(e=>e.keyText).join(`|`),t.directoryMode?`directory`:`tree`,String(t.expandAction??!1),String(t.rangeSelect??!1)].join(`::`),Be=e=>e==null||typeof e==`boolean`?``:typeof e==`string`||typeof e==`number`?String(e):Array.isArray(e)?e.map(e=>Be(e)).filter(Boolean).join(` `):typeof e==`object`?[`title`,`label`,`name`,`text`,`description`,`children`].map(t=>Be(e[t])).filter(Boolean).join(` `):``,Ve=(e,t,n)=>{if(!t)return e;let r=je(t)?t:void 0,i=r?.id??n?.id??ke.id,a=r?.pId??n?.pId??ke.pId,o=r?.rootPId??0,s=n?.children??ke.children,c=new Map;e.forEach((e,t)=>{let n=e[i]??e.key??t;c.set(n,{...e,[s]:[]})});let l=[];return e.forEach((e,t)=>{let n=e[i]??e.key??t,r=e[a],u=c.get(n);if(!u)return;if(r==null||r===o||!c.has(r)){l.push(u);return}let d=c.get(r);if(!d){l.push(u);return}let f=d[s]??[];f.push(u),d[s]=f}),l},He=(e,t)=>{let n=[],r={},i=(e,a,o,s)=>{let c=K(e,`key`,t),l=Me(c)?c:o,u=U(l),d=K(e,`isLeaf`,t),f={key:l,keyText:u,title:Re(e,t),depth:a,children:[],raw:e,disabled:!!K(e,`disabled`,t),selectable:K(e,`selectable`,t)!==!1,checkable:K(e,`checkable`,t)!==!1,disableCheckbox:!!K(e,`disableCheckbox`,t),isLeaf:!1,className:K(e,`className`,t),icon:K(e,`icon`,t),parentKeyText:s};n.push(f),r[u]=f;let p=K(e,`children`,t);return f.children=Array.isArray(p)?p.map((e,t)=>i(e,a+1,`${o}-${t}`,u)):[],f.isLeaf=d===!0||d!==!1&&f.children.length===0,f};return{roots:e.map((e,t)=>i(e,0,`node-${t}`)),flat:n,byKeyText:r}},Ue=e=>{let t=[],n=e=>{!e.disabled&&e.checkable&&!e.disableCheckbox&&t.push(e.keyText),e.children.forEach(e=>n(e))};return n(e),t},We=e=>{let t=[],n=e=>{t.push(e.key),e.children.forEach(e=>n(e))};return n(e),t},Ge=(e,t,n)=>{let r=new Set,i=new Set,a={},o=e=>{let s=!e.disabled&&e.checkable&&!e.disableCheckbox,c=e.children.map(e=>o(e)).filter(e=>e.participates),l=t.has(e.keyText),u=l,d=!1;if(!n&&c.length>0){let e=c.every(e=>e.checked),t=c.some(e=>e.checked||e.halfChecked);u=l||e,d=!u&&t}let f={checked:u,halfChecked:d,participates:s||c.length>0};return a[e.keyText]=f,u&&s&&r.add(e.keyText),d&&s&&i.add(e.keyText),f};return e.forEach(e=>o(e)),{checkedKeys:r,halfCheckedKeys:i,stateMap:a}},Ke=(e,t,n,r)=>{let i=new Set(e),a=new Set(t),o=n.filter(e=>i.has(e.keyText)).map(e=>e.key).filter(Me);return r?{checked:o,halfChecked:n.filter(e=>a.has(e.keyText)).map(e=>e.key).filter(Me)}:o},qe=(e,t,n,r)=>{if(!n){let n=[],r=e=>{n.push({node:e,matched:!1}),t.has(e.keyText)&&e.children.forEach(e=>r(e))};return e.forEach(e=>r(e)),n}let i=e=>{let t=r(e),n=e.children.flatMap(e=>i(e));if(!t&&n.length===0)return[];if(t){let t=[{node:e,matched:!0}],n=e=>{t.push({node:e,matched:!1}),e.children.forEach(e=>n(e))};return e.children.forEach(e=>n(e)),t}return[{node:e,matched:!1},...n]};return e.flatMap(e=>i(e))},Je=(e,t,n)=>t?typeof n==`function`?n(t,e):n===!1||Be(e.title).toLowerCase().includes(t.toLowerCase()):!0,Ye=(e,t,n)=>{let r=t.parentKeyText;for(;r;){if(r===e.keyText)return!0;r=n[r]?.parentKeyText}return!1},Xe=e=>{let t=!!e,n=je(e)?e:void 0;return{enabled:t,icon:n?.icon,nodeDraggable:r=>t?typeof e==`function`?e(r):n&&typeof n.nodeDraggable==`function`?n.nodeDraggable(r):!0:!1}},Ze=(e,t,n,r,i)=>{if(!i||!n||!r)return{items:e,topSpacer:0,bottomSpacer:0};let a=r+2,o=Math.max(1,Math.ceil(n/a))+12,s=Math.max(0,e.length-o),c=Math.min(s,Math.max(0,Math.floor(t/a)-6)),l=Math.min(e.length,c+o);return{items:e.slice(c,l),topSpacer:c*a,bottomSpacer:Math.max(0,(e.length-l)*a)}},Qe=e=>{if(e===-1)return`before`;if(e===1)return`after`;if(e===0)return`inside`},$e=(e,t)=>e.map(e=>t[e]?.key).filter(Me),et=(e,t)=>{if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0},tt=e=>{switch(e){case`small`:case`sm`:return{headerPadding:`px-4 py-3`,bodyPadding:`px-3 py-3`,rowPadding:`py-1.5`,textClass:`text-sm`,rowMinHeight:36,rowEstimate:42};case`large`:case`lg`:return{headerPadding:`px-5 py-4`,bodyPadding:`px-4 py-4`,rowPadding:`py-2.5`,textClass:`text-[0.95rem]`,rowMinHeight:44,rowEstimate:50};default:return{headerPadding:`px-4 py-3.5`,bodyPadding:`px-3.5 py-3.5`,rowPadding:`py-2`,textClass:`text-sm`,rowMinHeight:40,rowEstimate:46}}},nt=e=>{switch(e){case`error`:return`border-error/55 shadow-[0_0_0_1px_rgba(248,113,113,0.14)]`;case`warning`:return`border-warning/55 shadow-[0_0_0_1px_rgba(251,191,36,0.14)]`;default:return``}},rt=e=>{let{renderSwitcher:n,renderDragHandle:r,renderGapPlaceholder:a,renderNodeIcon:c}=ce(`useSetup:0:0`,()=>({renderSwitcher:(t,n,r,i,a,o)=>{let{renderProps:c}=ce(`useSetup:0:0`,()=>({renderProps:{node:t,expanded:n,selected:r,checked:i,halfChecked:a,loading:o}}));return typeof e.switcherIcon==`function`?e.switcherIcon(c):e.switcherIcon===void 0?o?s(Ne,()=>({})):s(Pe,()=>({expanded:n,hidden:t.isLeaf&&t.children.length===0})):e.switcherIcon},renderDragHandle:n=>{let{canDragHandle:r,__rue_phase2_canDragHandle:a}=ce(`useSetup:0:0`,()=>{let t=h(()=>e.dragConfig.enabled&&e.dragConfig.nodeDraggable(n)&&!e.disabled&&!n.disabled);return t.get(),{canDragHandle:t,__rue_phase2_canDragHandle:t}});return!r.get()||e.dragConfig.icon===!1?null:o(Object.assign(r=>{let a=A(`span`,r);a.setAttribute(`aria-hidden`,`true`);let c;z(()=>{let t=G(`inline-flex size-6 shrink-0 cursor-grab items-center justify-center rounded-lg text-base-content/35 transition group-hover:text-base-content/55`,e.classNames?.dragHandle),n=t==null?``:String(t);Object.is(c,n)||(c=n,a.className=n)});let l;z(()=>{let t=e.styles?.dragHandle;Object.is(l,t)||(l=t,E(a,t))}),a.setAttribute(`data-rue-tree-drag-handle`,`true`);let u=t=>{let r=t=>e.handleDragMouseDown(n,t);typeof r==`function`&&r(t)};return a.addEventListener(`mousedown`,u),i(()=>a.removeEventListener(`mousedown`,u)),t(()=>{let t=e.dragConfig.icon;return t==null?{__rue_compiled_branch_key:null,create:()=>s(Fe,()=>({}))}:{__rue_compiled_branch_key:t,create:()=>o(Object.assign(e=>{let n=k(typeof t==`string`||typeof t==`number`||typeof t==`bigint`?t:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}}).__rue_compiled_mount(a),{__rue_compiled_host:a,__rue_compiled_roots:[a]}},{__rue_compiled_explicit_roots:!0}))},renderGapPlaceholder:(e,t)=>o(Object.assign(n=>{let r=de().content.cloneNode(!0).firstChild,i=r,a;z(()=>{let e=Ae(`pointer-events-none absolute inset-x-0 z-10 flex items-center gap-2 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-primary/85`,t===`before`?`-top-2.5`:`-bottom-2.5`),n=e==null?``:String(e);Object.is(a,n)||(a=n,i.className=n)});let o;z(()=>{let t={paddingLeft:`${e.depth*18+20}px`};Object.is(o,t)||(o=t,E(i,t))});let s;return z(()=>{let e=t;Object.is(s,e)||(s=e,e==null||e===!1?i.removeAttribute(`data-rue-tree-drop-placeholder`):i.setAttribute(`data-rue-tree-drop-placeholder`,String(e)))}),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})),renderNodeIcon:(t,n,r,i,a,c)=>{let{renderProps:l}=ce(`useSetup:0:0`,()=>({renderProps:{node:t,expanded:n,selected:r,checked:i,halfChecked:a,loading:c}}));return typeof e.icon==`function`?e.icon(l):e.icon===void 0?t.icon===void 0?e.showIcon?e.directoryMode?o(Object.assign(e=>{let r=fe().content.cloneNode(!0).firstChild,i=r.childNodes[0],a=i.parentNode;return _(a,i,()=>t.children.length>0||!t.isLeaf?{__rue_compiled_branch_key:!0,create:()=>s(Ie,()=>({expanded:n}))}:{__rue_compiled_branch_key:!1,create:()=>s(Le,()=>({}))}),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})):o(Object.assign(e=>{let n=pe().content.cloneNode(!0).firstChild,r=n.childNodes[0],i=r.parentNode;return _(i,r,()=>t.children.length>0||!t.isLeaf?{__rue_compiled_branch_key:!0,create:()=>o(Object.assign(e=>{let t=k(`DIR`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>o(Object.assign(e=>{let t=k(`DOC`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})):null:t.icon:e.icon}}));return j(s=>{let l=P(),f=H().content.cloneNode(!0),p=f.firstChild;l.appendChild(f),F(p,`aria-hidden`,`true`),z(()=>{F(p,`data-rue-tree-content-version`,String(String(e.version)))});let m=ae(`rue:slot:anchor`);b(l,m),z(()=>{let t=e.snapshot.virtualSlice.topSpacer>0?o(Object.assign(t=>{let n=me().content.cloneNode(!0).firstChild,r=n,i;return z(()=>{let t=`${e.snapshot.virtualSlice.topSpacer}px`,n=t==null?``:String(t);Object.is(i,n)||(i=n,r.style.height=n)}),r.setAttribute(`aria-hidden`,`true`),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})):``;M(()=>x(t,l,m))});let h=ae(`rue:slot:anchor`);b(l,h),z(()=>{let s=j(()=>{let s=P(),l=ae(`rue:slot:anchor`);return b(s,l),z(()=>{let f=e.snapshot.virtualSlice.items.map(({node:s})=>{let l=e.snapshot.checkState.stateMap[s.keyText]??{checked:!1,halfChecked:!1,participates:!0},f=e.snapshot.searchValue?!0:e.snapshot.expandedKeyTextSet.has(s.keyText),p=e.snapshot.selectedKeyTextSet.has(s.keyText),m=e.loadingKeyTexts.includes(s.keyText),h=!!e.hasLoadData||!!s.children.length||!s.isLeaf,g=e.snapshot.dragState.overKeyText===s.keyText,v=e.dragConfig.enabled&&e.dragConfig.nodeDraggable(s)&&!e.disabled&&!s.disabled,y=g?Qe(e.snapshot.dragState.dropPosition):void 0,S={node:s,expanded:f,selected:p,checked:l.checked,halfChecked:l.halfChecked,loading:m},ee=e.titleRender?.(S);return j(S=>{let C=he().content.cloneNode(!0).firstChild,w=C,T=C.childNodes[1],O=C.childNodes[5],N=C.childNodes[0],ne=N.parentNode,re=C.childNodes[1].childNodes[0],ie=re.parentNode,I=C.childNodes[2],L=I.parentNode,oe=C.childNodes[3],se=oe.parentNode,ce=C.childNodes[4],le=ce.parentNode,B=C.childNodes[5].childNodes[0],ue=B.parentNode,V=C.childNodes[5].childNodes[1],de=V.parentNode,fe=C.childNodes[6],pe=fe.parentNode;z(()=>{u(w,G(Ae(`rue-tree-node group relative flex min-w-0 items-center gap-1 rounded-lg py-0.5 pr-2 text-base-content outline-none transition-colors duration-150`,e.disabled||s.disabled?`opacity-55`:y===`inside`?`bg-primary/10 ring-1 ring-primary/20`:y?`bg-primary/5`:`hover:bg-base-200/65`,e.showLine&&s.depth>0&&`border-l border-base-300/60`,s.className),e.classNames?.node))}),z(()=>{let t={paddingLeft:`${s.depth*18+8}px`,height:e.fixedVirtualRowHeight?`${e.fixedVirtualRowHeight}px`:void 0,minHeight:e.fixedVirtualRowHeight?void 0:`${e.componentSize.rowMinHeight}px`,...e.styles?.node};E(w,t)}),z(()=>{F(w,`data-rue-tree-node`,String(s.keyText))}),z(()=>{F(w,`data-rue-tree-drop-intent`,String(y??``))}),z(()=>{F(w,`data-rue-tree-drop-position`,String(g?String(e.snapshot.dragState.dropPosition??0):``))}),z(()=>{F(w,`draggable`,String(v))});let H=t=>{let n=t=>e.handleDragStartNode(s,t);typeof n==`function`&&n(t)};w.addEventListener(`dragstart`,H),d(()=>w.removeEventListener(`dragstart`,H));let me=t=>{let n=t=>e.handleDragEnterNode(s,t);typeof n==`function`&&n(t)};w.addEventListener(`dragenter`,me),d(()=>w.removeEventListener(`dragenter`,me));let ge=t=>{let n=t=>e.handleDragOverNode(s,t);typeof n==`function`&&n(t)};w.addEventListener(`dragover`,ge),d(()=>w.removeEventListener(`dragover`,ge));let _e=t=>{let n=t=>e.handleDragLeaveNode(s,t);typeof n==`function`&&n(t)};w.addEventListener(`dragleave`,_e),d(()=>w.removeEventListener(`dragleave`,_e));let ve=t=>{let n=t=>e.handleDragEndNode(s,t);typeof n==`function`&&n(t)};w.addEventListener(`dragend`,ve),d(()=>w.removeEventListener(`dragend`,ve));let ye=t=>{let n=t=>e.handleDropNode(s,t);typeof n==`function`&&n(t)};w.addEventListener(`drop`,ye),d(()=>w.removeEventListener(`drop`,ye)),F(T,`type`,`button`),z(()=>{u(T,G(Ae(`inline-flex size-6 shrink-0 items-center justify-center rounded-md text-base-content/55 transition-colors duration-150 hover:bg-base-200 hover:text-base-content disabled:cursor-default disabled:opacity-30`,!h&&`pointer-events-none`),e.classNames?.switcher))}),z(()=>{let t=e.styles?.switcher;E(T,t)}),z(()=>{te(T,!h||e.disabled||s.disabled)}),z(()=>{F(T,`aria-label`,String(f?`折叠节点`:`展开节点`))});let be=t=>{let n=t=>e.handleExpandToggle(s,t);typeof n==`function`&&n(t)};T.addEventListener(`click`,be),d(()=>T.removeEventListener(`click`,be)),F(O,`type`,`button`),z(()=>{u(O,G(Ae(`flex min-w-0 items-center gap-2 rounded-md px-2 text-left transition-colors duration-150`,e.componentSize.rowPadding,e.blockNode?`flex-1 justify-between`:`max-w-full`,p?`selected bg-primary/12 text-primary`:`text-base-content hover:bg-base-200/70`,(e.disabled||s.disabled||!e.selectable||!s.selectable)&&`cursor-not-allowed opacity-55`),e.classNames?.label))}),z(()=>{let t=e.styles?.label;E(O,t)}),z(()=>{te(O,e.disabled||s.disabled||!e.selectable||!s.selectable)}),z(()=>{F(O,`draggable`,String(v))});let xe=t=>{let n=t=>e.handleLabelMouseDown(s,t);typeof n==`function`&&n(t)};O.addEventListener(`mousedown`,xe),d(()=>O.removeEventListener(`mousedown`,xe));let Se=t=>{let n=t=>e.handleLabelActivate(s,t,`click`);typeof n==`function`&&n(t)};O.addEventListener(`click`,Se),d(()=>O.removeEventListener(`click`,Se));let Ce=t=>{let n=t=>e.handleLabelActivate(s,t,`doubleClick`);typeof n==`function`&&n(t)};O.addEventListener(`dblclick`,Ce),d(()=>O.removeEventListener(`dblclick`,Ce));let we=t=>{let n=t=>e.handleLabelContextMenu(s,t);typeof n==`function`&&n(t)};return O.addEventListener(`contextmenu`,we),d(()=>O.removeEventListener(`contextmenu`,we)),z(()=>{let e=y===`before`?a(s,`before`):``;M(()=>x(e,ne,N))}),z(()=>{let e=n(s,f,p,l.checked,l.halfChecked,m);M(()=>x(e,ie,re))}),_(L,I,()=>e.checkable?{__rue_compiled_branch_key:!0,create:()=>o(Object.assign(n=>{let r=A(`button`,n);r.setAttribute(`type`,`button`),r.setAttribute(`role`,`checkbox`);let a;z(()=>{let e=l.halfChecked?`mixed`:l.checked?`true`:`false`;Object.is(a,e)||(a=e,e==null||e===!1?r.removeAttribute(`aria-checked`):r.setAttribute(`aria-checked`,String(e)))});let c;z(()=>{let t=!!(e.disabled||s.disabled||s.disableCheckbox||!s.checkable);Object.is(c,t)||(c=t,r.disabled=t)});let u;z(()=>{let t=G(Ae(`inline-flex size-4 shrink-0 items-center justify-center rounded border text-[11px] font-semibold leading-none transition-colors duration-150`,l.checked||l.halfChecked?`border-primary bg-primary text-primary-content`:`border-base-content/35 bg-base-100 text-transparent hover:border-primary/60`,(e.disabled||s.disabled||s.disableCheckbox||!s.checkable)&&`cursor-not-allowed opacity-45`),e.classNames?.checkbox),n=t==null?``:String(t);Object.is(u,n)||(u=n,r.className=n)});let d;z(()=>{let t=e.styles?.checkbox;Object.is(d,t)||(d=t,E(r,t))});let f=t=>{let n=t=>e.handleCheck(s,t);typeof n==`function`&&n(t)};return r.addEventListener(`click`,f),i(()=>r.removeEventListener(`click`,f)),t(()=>l.halfChecked?{__rue_compiled_branch_key:!0,create:()=>o(Object.assign(e=>{let t=k(`−`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>t(()=>l.checked?{__rue_compiled_branch_key:!0,create:()=>o(Object.assign(e=>{let t=k(`✓`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>o(Object.assign(e=>{let t=k(``);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))})}).__rue_compiled_mount(r),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>o(Object.assign(e=>{let t=P();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),z(()=>{let e=r(s);M(()=>x(e,se,oe))}),z(()=>{let t=e.showIcon||s.icon!==void 0||e.icon!==void 0?c(s,f,p,l.checked,l.halfChecked,m):``;M(()=>x(t,le,ce))}),z(()=>{let t=e.titleRender?ee:j(()=>{let e=P(),t=R(`span`,e);b(e,t),u(t,`min-w-0 truncate`);let n=ae(`rue:slot:anchor`);return b(t,n),z(()=>{let e=s.title;M(()=>x(e,t,n))}),e},!0);M(()=>x(t,ue,B))}),_(de,V,()=>y?{__rue_compiled_branch_key:!0,create:()=>o(Object.assign(e=>{let n=A(`span`,e);n.className=`badge badge-primary badge-outline badge-xs shrink-0`;let r;return z(()=>{let e=y;Object.is(r,e)||(r=e,e==null||e===!1?n.removeAttribute(`data-rue-tree-drop-placeholder`):n.setAttribute(`data-rue-tree-drop-placeholder`,String(e)))}),t(()=>y===`inside`?{__rue_compiled_branch_key:!0,create:()=>o(Object.assign(e=>{let t=k(`放入`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>t(()=>y===`before`?{__rue_compiled_branch_key:!0,create:()=>o(Object.assign(e=>{let t=k(`插前`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>o(Object.assign(e=>{let t=k(`插后`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))})}).__rue_compiled_mount(n),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>t(()=>p?{__rue_compiled_branch_key:!0,create:()=>o(Object.assign(e=>{let t=A(`span`,e);return t.className=`badge badge-primary badge-xs shrink-0`,D(t,k(`选中`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>o(Object.assign(e=>{let t=P();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))})}),z(()=>{let e=y===`after`?a(s,`after`):``;M(()=>x(e,pe,fe))}),C})});M(()=>x(f,s,l))}),s},!0);M(()=>x(s,l,h))});let g=ae(`rue:slot:anchor`);b(l,g),z(()=>{let t=e.snapshot.virtualSlice.bottomSpacer>0?o(Object.assign(t=>{let n=me().content.cloneNode(!0).firstChild,r=n,i;return z(()=>{let t=`${e.snapshot.virtualSlice.bottomSpacer}px`,n=t==null?``:String(t);Object.is(i,n)||(i=n,r.style.height=n)}),r.setAttribute(`aria-hidden`,`true`),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})):``;M(()=>x(t,l,g))});let v=ae(`rue:slot:anchor`);return b(l,v),z(()=>{let t=e.snapshot.visibleNodes.length?``:o(Object.assign(t=>{let n=ge().content.cloneNode(!0).firstChild,r=n,i=n.childNodes[0],a=i.parentNode,o;z(()=>{let t=G(`rounded-lg px-3 py-8 text-center text-sm text-base-content/55`,e.classNames?.empty),n=t==null?``:String(t);Object.is(o,n)||(o=n,r.className=n)});let s;return z(()=>{let t=e.styles?.empty;Object.is(s,t)||(s=t,E(r,t))}),C({parent:a,before:i},()=>e.emptyText,()=>({})),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}));M(()=>x(t,l,v))}),l})},it=t=>{let r=L(`useSetup:0:0`,()=>y(()=>{let{className:e,style:r,treeData:i,fieldNames:a,treeDataSimpleMode:o,selectedKeys:s,defaultSelectedKeys:c,checkedKeys:l,defaultCheckedKeys:u,expandedKeys:d,defaultExpandedKeys:f,defaultExpandAll:p,multiple:m,checkable:_,checkStrictly:v,showLine:y,showIcon:b,blockNode:x,selectable:S,disabled:ee,size:C,status:w,draggable:te,allowDrop:T,virtual:E,height:D,itemHeight:O,titleRender:k,switcherIcon:A,icon:j,filterTreeNode:M,searchValue:N,defaultSearchValue:ne,searchPlaceholder:P,allowSearch:F,loadData:ie,emptyText:I,onSelect:R,onCheck:ae,onExpand:oe,onSearch:z,onDoubleClick:se,onDragStart:ce,onDragEnter:le,onDragOver:B,onDragLeave:ue,onDragEnd:V,onDrop:de,onScroll:fe,classNames:pe,styles:H,directoryMode:me,expandAction:he,toggleSelect:ge,rangeSelect:_e,...xe}=t,Ce=g();function De(){let e=Ce.current,n=re(t.treeData===void 0?[]:t.treeData),r=re(t.treeDataSimpleMode),i=re(t.fieldNames);if(e&&e.treeData===n&&we(e,r,i))return e.normalizedTree;let a=Array.isArray(n)?n.slice():[];if(e&&Te(e,n,a,r,i))return e.normalizedTree;let o=Ee(n,a,r,i);if(o)return Ce.current=o,o.normalizedTree;let s=He(Ve(t.treeData===void 0?[]:t.treeData,t.treeDataSimpleMode,t.fieldNames),t.fieldNames),c={treeData:n,treeDataRoots:a,treeDataSimpleMode:r,fieldNames:i,normalizedTree:s};return Ce.current=c,Oe(c),s}let ke=De(),Ae=ke,je=ze(ke,{directoryMode:t.directoryMode,expandAction:t.expandAction!==void 0&&t.expandAction,rangeSelect:t.rangeSelect===void 0?`append`:t.rangeSelect}),G=ve.get(je)??(()=>{let e={};return ve.set(je,e),e})(),Ne=g(null),Pe=h(()=>tt(t.size));Pe.get();let Fe=Pe,Ie=h(()=>Xe(t.draggable));Ie.get();let Le=Ie,K=t.defaultExpandAll?ke.flat.filter(e=>e.children.length>0||!e.isLeaf).map(e=>e.key):t.defaultExpandedKeys??[],Re=L(`useRef:1:6`,()=>g(L(`ref:1:5`,()=>n(0)))).current,Be=L(`useRef:1:8`,()=>g(L(`ref:1:7`,()=>n(W(t.defaultSelectedKeys??t.selectedKeys))))).current,Ue=L(`useRef:1:10`,()=>g(L(`ref:1:9`,()=>n(W(t.defaultCheckedKeys))))).current,We=L(`useRef:1:12`,()=>g(L(`ref:1:11`,()=>n(W(G.expandedKeys??K))))).current,Ye=L(`useRef:1:14`,()=>g(L(`ref:1:13`,()=>n(W(t.selectedKeys))))).current,Qe=L(`useRef:1:16`,()=>g(L(`ref:1:15`,()=>n(W(t.expandedKeys))))).current,$e=L(`useRef:1:18`,()=>g(L(`ref:1:17`,()=>n(t.checkedKeys===void 0?new Set:Array.isArray(t.checkedKeys)?q(t.checkedKeys):q(t.checkedKeys.checked))))).current,nt=L(`useRef:1:20`,()=>g(L(`ref:1:19`,()=>n(t.defaultSearchValue??``)))).current,rt=L(`useRef:1:22`,()=>g(L(`ref:1:21`,()=>n(G.loadingKeyTexts??[])))).current,it=L(`useRef:1:24`,()=>g(L(`ref:1:23`,()=>n(0)))).current,at=L(`useRef:1:26`,()=>g(L(`ref:1:25`,()=>n(G.lastSelectedKeyText??null)))).current,ot=L(`useRef:1:28`,()=>g(L(`ref:1:27`,()=>n(G.cachedSelectedKeyTexts??[])))).current,st=L(`useRef:1:30`,()=>g(L(`ref:1:29`,()=>n({})))).current,ct=L(`useRef:1:32`,()=>g(L(`ref:1:31`,()=>n({})))).current,lt=L(`useRef:1:34`,()=>g(L(`ref:1:33`,()=>n(null)))).current,ut=L(`useRef:1:36`,()=>g(L(`ref:1:35`,()=>n(!1)))).current,dt=L(`useRef:1:38`,()=>g(L(`ref:1:37`,()=>n(G.suppressClickKeyText??null)))).current,ft=g(null);if(t.checkedKeys!==void 0){let e=Array.isArray(t.checkedKeys)?q(t.checkedKeys):q(t.checkedKeys.checked);et($e.value,e)||($e.value=e)}t.selectedKeys!==void 0&&!et(q(Ye.value),q(t.selectedKeys))&&(Ye.value=W(t.selectedKeys)),t.expandedKeys!==void 0&&!et(q(Qe.value),q(t.expandedKeys))&&(Qe.value=W(t.expandedKeys));let J=h(()=>t.itemHeight??Fe.get().rowEstimate);J.get();let pt=J,mt=h(()=>typeof t.height==`number`&&t.height>0?t.height:void 0);mt.get();let ht=mt,gt=h(()=>(t.virtual===void 0||t.virtual)!==!1&&ht.get()&&typeof t.itemHeight==`number`&&t.itemHeight>0?t.itemHeight:void 0);gt.get();let _t=gt;function vt(){Re.value+=1,An()}function yt(e=!1){if(e){let e=re(t.treeData===void 0?[]:t.treeData),n=Array.isArray(e)?e[0]:void 0;Ce.current=void 0,Se(e)&&ye.delete(e),Se(n)&&be.delete(n)}let n=De();return Ae=n,n}function bt(){return Ae??yt()}function xt(){return t.selectedKeys===void 0?Be.value:Ye.value}function St(){return t.expandedKeys===void 0?We.value:Qe.value}function Ct(){return t.searchValue===void 0?nt.value:t.searchValue}function wt(){return t.checkedKeys===void 0?q(Ue.value):$e.value}function Tt(){let e=bt(),n=q(St()),r=Ct();return qe(e.roots,n,r,e=>Je(e,r,t.filterTreeNode))}function Et(){Re.value;let e=bt(),n=Ct(),r=q(xt()),i=q(St()),a=wt(),o=t.checkable?Ge(e.roots,a,!!t.checkStrictly):{checkedKeys:new Set,halfCheckedKeys:new Set,stateMap:{}},s=qe(e.roots,i,n,e=>Je(e,n,t.filterTreeNode));return{searchValue:n,selectedKeyTextSet:r,expandedKeyTextSet:i,checkState:o,visibleNodes:s,virtualSlice:Ze(s,it.value,ht.get(),pt.get(),(t.virtual===void 0||t.virtual)!==!1&&!!ht.get()),dragState:st.value}}return{__rue_rest_omit_0:e,__rue_rest_omit_1:r,__rue_rest_omit_2:i,__rue_rest_omit_3:a,__rue_rest_omit_4:o,__rue_rest_omit_5:s,__rue_rest_omit_6:c,__rue_rest_omit_7:l,__rue_rest_omit_8:u,__rue_rest_omit_9:d,__rue_rest_omit_10:f,__rue_rest_omit_11:p,__rue_rest_omit_12:m,__rue_rest_omit_13:_,__rue_rest_omit_14:v,__rue_rest_omit_15:y,__rue_rest_omit_16:b,__rue_rest_omit_17:x,__rue_rest_omit_18:S,__rue_rest_omit_19:ee,__rue_rest_omit_20:C,__rue_rest_omit_21:w,__rue_rest_omit_22:te,__rue_rest_omit_23:T,__rue_rest_omit_24:E,__rue_rest_omit_25:D,__rue_rest_omit_26:O,__rue_rest_omit_27:k,__rue_rest_omit_28:A,__rue_rest_omit_29:j,__rue_rest_omit_30:M,__rue_rest_omit_31:N,__rue_rest_omit_32:ne,__rue_rest_omit_33:P,__rue_rest_omit_34:F,__rue_rest_omit_35:ie,__rue_rest_omit_36:I,__rue_rest_omit_37:R,__rue_rest_omit_38:ae,__rue_rest_omit_39:oe,__rue_rest_omit_40:z,__rue_rest_omit_41:se,__rue_rest_omit_42:ce,__rue_rest_omit_43:le,__rue_rest_omit_44:B,__rue_rest_omit_45:ue,__rue_rest_omit_46:V,__rue_rest_omit_47:de,__rue_rest_omit_48:fe,__rue_rest_omit_49:pe,__rue_rest_omit_50:H,__rue_rest_omit_51:me,__rue_rest_omit_52:he,__rue_rest_omit_53:ge,__rue_rest_omit_54:_e,rest:xe,treeNormalizationCacheRef:Ce,readNormalizedTreeFromProps:De,normalizedTree:ke,treeStateSignature:je,persistedState:G,bodyHostRef:Ne,componentSize:Pe,__rue_phase2_componentSize:Fe,dragConfig:Ie,__rue_phase2_dragConfig:Le,initialExpandedKeys:K,renderVersion:Re,uncontrolledSelectedKeysRef:Be,uncontrolledCheckedKeysRef:Ue,uncontrolledExpandedKeysRef:We,controlledSelectedKeysRef:Ye,controlledExpandedKeysRef:Qe,controlledCheckedKeyTextsRef:$e,searchValueRef:nt,loadingKeyTextsRef:rt,scrollTopRef:it,directoryLastSelectedKeyTextRef:at,directoryCachedSelectedKeyTextsRef:ot,dragStateRef:st,dragHoverDepthRef:ct,mouseDragStateRef:lt,renderScheduledRef:ut,directorySuppressClickKeyTextRef:dt,directorySuppressClickCleanupRef:ft,estimatedRowHeight:J,__rue_phase2_estimatedRowHeight:pt,viewportHeight:mt,__rue_phase2_viewportHeight:ht,fixedVirtualRowHeight:gt,__rue_phase2_fixedVirtualRowHeight:_t,requestRender:vt,rebuildNormalizedTree:yt,getNormalizedTree:bt,readMergedSelectedKeys:xt,readMergedExpandedKeys:St,readMergedSearchValue:Ct,readMergedCheckedKeyTexts:wt,readVisibleNodes:Tt,readRenderSnapshot:Et,emitExpand:(e,n,r,i=!0)=>{let a=W(e);return t.expandedKeys===void 0?We.value=a:Qe.value=a,G.expandedKeys=a,vt(),i&&t.onExpand&&t.onExpand(a,{node:n,expanded:a.some(e=>U(e)===n.keyText),nativeEvent:r}),a},commitSelectedKeys:(e,n,r,i=!0)=>{let a=bt(),o=W(e).filter(e=>a.byKeyText[U(e)]),s=o.map(e=>a.byKeyText[U(e)]).filter(Boolean);return t.selectedKeys===void 0?Be.value=o:Ye.value=o,vt(),i&&t.onSelect&&t.onSelect(o,{node:n,nativeEvent:r,selected:o.some(e=>U(e)===n.keyText),selectedNodes:s}),o},commitCheckedKeys:(e,n,r)=>{let i=bt(),a=Ge(i.roots,e,!!t.checkStrictly),o=Ke(Array.from(a.checkedKeys),Array.from(a.halfCheckedKeys),i.flat,!!t.checkStrictly);t.checkedKeys===void 0?Ue.value=t.checkStrictly?o.checked:o:$e.value=new Set(a.checkedKeys),vt(),t.onCheck&&t.onCheck(o,{node:n,nativeEvent:r,checked:a.checkedKeys.has(n.keyText),checkedNodes:Array.from(a.checkedKeys).map(e=>i.byKeyText[e]).filter(Boolean),halfCheckedKeys:Array.from(a.halfCheckedKeys).map(e=>i.byKeyText[e]?.key).filter(Me)})},normalizedTreeCache:Ae}})),{__rue_rest_omit_0:s,__rue_rest_omit_1:l,__rue_rest_omit_2:u,__rue_rest_omit_3:d,__rue_rest_omit_4:f,__rue_rest_omit_5:m,__rue_rest_omit_6:v,__rue_rest_omit_7:b,__rue_rest_omit_8:x,__rue_rest_omit_9:S,__rue_rest_omit_10:ee,__rue_rest_omit_11:C,__rue_rest_omit_12:w,__rue_rest_omit_13:te,__rue_rest_omit_14:k,__rue_rest_omit_15:j,__rue_rest_omit_16:M,__rue_rest_omit_17:N,__rue_rest_omit_18:ne,__rue_rest_omit_19:F,__rue_rest_omit_20:ie,__rue_rest_omit_21:I,__rue_rest_omit_22:R,__rue_rest_omit_23:ae,__rue_rest_omit_24:oe,__rue_rest_omit_25:se,__rue_rest_omit_26:ce,__rue_rest_omit_27:B,__rue_rest_omit_28:ue,__rue_rest_omit_29:V,__rue_rest_omit_30:de,__rue_rest_omit_31:fe,__rue_rest_omit_32:pe,__rue_rest_omit_33:H,__rue_rest_omit_34:me,__rue_rest_omit_35:he,__rue_rest_omit_36:ge,__rue_rest_omit_37:xe,__rue_rest_omit_38:Ce,__rue_rest_omit_39:De,__rue_rest_omit_40:ke,__rue_rest_omit_41:je,__rue_rest_omit_42:Ne,__rue_rest_omit_43:Pe,__rue_rest_omit_44:Fe,__rue_rest_omit_45:Ie,__rue_rest_omit_46:Le,__rue_rest_omit_47:K,__rue_rest_omit_48:Re,__rue_rest_omit_49:Be,__rue_rest_omit_50:Qe,__rue_rest_omit_51:it,__rue_rest_omit_52:at,__rue_rest_omit_53:ot,__rue_rest_omit_54:st,rest:ct,treeNormalizationCacheRef:lt,readNormalizedTreeFromProps:ut,normalizedTree:dt,treeStateSignature:ft,persistedState:J,bodyHostRef:pt,componentSize:mt,__rue_phase2_componentSize:ht,dragConfig:gt,__rue_phase2_dragConfig:_t,initialExpandedKeys:vt,renderVersion:yt,uncontrolledSelectedKeysRef:bt,uncontrolledCheckedKeysRef:xt,uncontrolledExpandedKeysRef:St,controlledSelectedKeysRef:Ct,controlledExpandedKeysRef:wt,controlledCheckedKeyTextsRef:Tt,searchValueRef:Et,loadingKeyTextsRef:Dt,scrollTopRef:Ot,directoryLastSelectedKeyTextRef:Y,directoryCachedSelectedKeyTextsRef:X,dragStateRef:Z,dragHoverDepthRef:kt,mouseDragStateRef:At,renderScheduledRef:jt,directorySuppressClickKeyTextRef:Mt,directorySuppressClickCleanupRef:Nt,estimatedRowHeight:Pt,__rue_phase2_estimatedRowHeight:Ft,viewportHeight:It,__rue_phase2_viewportHeight:Lt,fixedVirtualRowHeight:Rt,__rue_phase2_fixedVirtualRowHeight:zt,requestRender:Q,rebuildNormalizedTree:Bt,getNormalizedTree:$,readMergedSelectedKeys:Vt,readMergedExpandedKeys:Ht,readMergedSearchValue:Ut,readMergedCheckedKeyTexts:Wt,readVisibleNodes:Gt,readRenderSnapshot:Kt,emitExpand:qt,commitSelectedKeys:Jt,commitCheckedKeys:Yt}=r,{normalizedTreeCache:Xt}=r,Zt=async(e,n,r=!0)=>{let i=Ht(),a=q(i);if(t.disabled||e.disabled)return i;let o=a.has(e.keyText),s=o?i.filter(t=>U(t)!==e.keyText):[...i,e.key],c=!o&&!!t.loadData&&!e.isLeaf&&e.children.length===0&&!Dt.value.includes(e.keyText);c&&(Dt.value=[...Dt.value,e.keyText],J.loadingKeyTexts=Dt.value);let l=qt(s,e,n,r);if(c&&t.loadData)try{await t.loadData(e),Bt(!0)}finally{Dt.value=Dt.value.filter(t=>t!==e.keyText),J.loadingKeyTexts=Dt.value;let t=J.renderRequests;t?.size?t.forEach(e=>e()):Q(),queueMicrotask(()=>{let t=J.renderRequests;t?.size?t.forEach(e=>e()):Q();let n=Array.from(document.querySelectorAll(`[data-rue-tree-node]`)).find(t=>t.getAttribute(`data-rue-tree-node`)===e.keyText);if(n?.querySelectorAll(`.loading`).forEach(e=>e.remove()),n&&typeof document<`u`){let e=document.createTreeWalker(n,NodeFilter.SHOW_TEXT),t=e.nextNode();for(;t;)t.data=t.data.replace(/\s+loading\b/g,``),t=e.nextNode()}})}return l},Qt=(e,t)=>{t.preventDefault(),t.stopPropagation(),Zt(e,t)},$t=(e,n,r=!0)=>{if(t.disabled||e.disabled||!(t.selectable===void 0||t.selectable)||!e.selectable)return;let i=Vt(),a=q(i);if(t.multiple&&(t.rangeSelect===void 0?`append`:t.rangeSelect)!==!1&&n?.shiftKey){let a=Gt().map(e=>e.node.keyText),o=Y.value&&a.includes(Y.value)?Y.value:void 0,s=i.map(U).filter(t=>t!==e.keyText&&a.includes(t)),c=s[s.length-1],l=o??c,u=l?a.indexOf(l):-1,d=a.indexOf(e.keyText);if(u>=0&&d>=0){let o=Math.min(u,d),s=Math.max(u,d),c=a.slice(o,s+1),f=(t.rangeSelect===void 0?`append`:t.rangeSelect)===`append`?X.value.length?X.value:i.map(U):[],p=Array.from(new Set([...f,...c]));Y.value=l,X.value=p,J.lastSelectedKeyText=Y.value,J.cachedSelectedKeyTexts=X.value;let m=Jt($e(p,$().byKeyText),e,n,r);return X.value=m.map(U),J.cachedSelectedKeyTexts=X.value,m}}if(t.directoryMode){let o=!!t.multiple&&!!(t.toggleSelect===void 0||t.toggleSelect)&&!!(n?.ctrlKey||n?.metaKey);if(t.multiple&&o){let t=a.has(e.keyText)?i.filter(t=>U(t)!==e.keyText):[...i,e.key];return Y.value=e.keyText,X.value=t.map(U),J.lastSelectedKeyText=Y.value,J.cachedSelectedKeyTexts=X.value,Jt(t,e,n,r)}return Y.value=e.keyText,X.value=[e.keyText],J.lastSelectedKeyText=Y.value,J.cachedSelectedKeyTexts=X.value,Jt([e.key],e,n,r)}if(t.multiple){let t=a.has(e.keyText)?i.filter(t=>U(t)!==e.keyText):[...i,e.key];return Y.value=e.keyText,X.value=t.map(U),J.lastSelectedKeyText=Y.value,J.cachedSelectedKeyTexts=X.value,Jt(t,e,n,r)}let o=a.has(e.keyText)?[]:[e.key];return Y.value=e.keyText,X.value=o.map(U),J.lastSelectedKeyText=Y.value,J.cachedSelectedKeyTexts=X.value,Jt(o,e,n,r)},en=(e,n)=>{if(n.preventDefault(),n.stopPropagation(),t.disabled||e.disabled||!e.checkable||e.disableCheckbox)return;let r=Wt(),i=Ge($().roots,r,!!t.checkStrictly),a=new Set(r),o=i.checkedKeys.has(e.keyText);if(t.checkStrictly)o?a.delete(e.keyText):a.add(e.keyText);else{let t=Ue(e);o?t.forEach(e=>a.delete(e)):t.forEach(e=>a.add(e))}Yt(a,e,n)},tn=e=>{t.searchValue===void 0&&(Et.value=e),Q(),t.onSearch&&t.onSearch(e)},nn=e=>{Ot.value=e.currentTarget.scrollTop,Q(),t.onScroll&&t.onScroll(e)},rn=e=>{!e||Z.value.overKeyText!==e||(Z.value={dragKeyText:Z.value.dragKeyText},Q())},an=e=>{e&&Mt.value!==e||(Mt.value=null,J.suppressClickKeyText=null,Nt.current?.(),Nt.current=null)},on=e=>{if(Nt.current?.(),Nt.current=null,Mt.value=e,J.suppressClickKeyText=e,typeof window>`u`)return;let t,n=()=>{t!==void 0&&window.clearTimeout(t),window.removeEventListener(`mouseup`,r,!0)},r=()=>{window.removeEventListener(`mouseup`,r,!0),t=window.setTimeout(()=>{Mt.value===e&&(Mt.value=null,J.suppressClickKeyText=null),Nt.current===n&&(Nt.current=null)},500)};Nt.current=n,window.addEventListener(`mouseup`,r,!0)},sn=(e,t)=>{(Z.value.overKeyText!==e||Z.value.dropPosition!==t)&&(Z.value={...Z.value,overKeyText:e,dropPosition:t},Q())},cn=(e,t)=>{let n={...kt.value},r=n[e]??0,i=Math.max(r+t,0);return i>0?n[e]=i:delete n[e],kt.value=n,Q(),i},ln=()=>{kt.value={},Z.value={},Q()},un=(e,n,r)=>{let i=$(),a=Z.value.dragKeyText;if(!a)return null;let o=i.byKeyText[a];if(!o||o.keyText===e.keyText||Ye(o,e,i.byKeyText))return null;let s=r?.getBoundingClientRect?.(),c=`clientY`in n?n.clientY:void 0,l=0;s&&typeof c==`number`&&(c<s.top+s.height*.25?l=-1:c>s.bottom-s.height*.25&&(l=1));let u=l!==0;return t.allowDrop&&!t.allowDrop({dragNode:o,dropNode:e,dropPosition:l,dropToGap:u})?null:{dragNode:o,dropPosition:l}},dn=e=>typeof document>`u`||typeof document.elementFromPoint!=`function`?null:document.elementFromPoint(e.clientX,e.clientY)?.closest?.(`[data-rue-tree-node]`),fn=e=>{let t=e?.getAttribute(`data-rue-tree-node`);return t?$().byKeyText[t]??null:null},pn=()=>{typeof document>`u`||(document.removeEventListener(`mousemove`,gn),document.removeEventListener(`mouseup`,_n))},mn=(e,n)=>{let r=Xe(t.draggable);n.button!==0||!r.enabled||!r.nodeDraggable(e)||t.disabled||e.disabled||typeof document>`u`||(At.value={keyText:e.keyText,startX:n.clientX,startY:n.clientY,active:!1},document.addEventListener(`mousemove`,gn),document.addEventListener(`mouseup`,_n))},hn=(e,n)=>{let r=$().byKeyText[e.keyText];return r?(e.active=!0,At.value=e,on(e.keyText),kt.value={},Z.value={dragKeyText:e.keyText},Q(),t.onDragStart&&t.onDragStart({event:n,node:r}),!0):!1};function gn(e){let n=At.value;if(!n)return;let r=Math.max(Math.abs(e.clientX-n.startX),Math.abs(e.clientY-n.startY));if(!n.active&&r<4||!n.active&&!hn(n,e))return;e.preventDefault();let i=dn(e),a=fn(i);if(!a){rn(Z.value.overKeyText);return}let o=un(a,e,i);if(!o){rn(a.keyText);return}sn(a.keyText,o.dropPosition),t.onDragOver&&t.onDragOver({event:e,node:a})}function _n(e){let n=At.value,r=Z.value.dragKeyText,i=n?.active?n.keyText:r;if(At.value=null,pn(),!i)return;e.preventDefault();let a=dn(e),o=fn(a),s=o?un(o,e,a):null;if(o&&s&&t.onDrop){let n=Z.value.overKeyText===o.keyText&&Z.value.dropPosition!==void 0?Z.value.dropPosition:s.dropPosition;t.onDrop({event:e,node:o,dragNode:s.dragNode,dragNodesKeys:We(s.dragNode),dropPosition:n,dropToGap:n!==0})}let c=$().byKeyText[i];ln(),c&&t.onDragEnd&&t.onDragEnd({event:e,node:c})}let vn=(e,n)=>{let r=Xe(t.draggable);!r.enabled||!r.nodeDraggable(e)||t.disabled||e.disabled||(n.dataTransfer&&(n.dataTransfer.effectAllowed=`move`,n.dataTransfer.setData(`text/plain`,e.keyText)),kt.value={},Z.value={dragKeyText:e.keyText},Q(),t.onDragStart&&t.onDragStart({event:n,node:e}))},yn=(e,n)=>{if(!Z.value.dragKeyText)return;cn(e.keyText,1);let r=un(e,n,n.currentTarget);if(!r){rn(e.keyText);return}n.preventDefault(),sn(e.keyText,r.dropPosition);let i=Ht(),a=q(i);r.dropPosition===0&&!a.has(e.keyText)&&(e.children.length>0||!e.isLeaf)&&(i=qt([...i,e.key],e,n)),t.onDragEnter&&t.onDragEnter({event:n,node:e,expandedKeys:i})},bn=(e,n)=>{if(!Z.value.dragKeyText)return;let r=un(e,n,n.currentTarget);if(!r){rn(e.keyText);return}n.preventDefault(),n.dataTransfer&&(n.dataTransfer.dropEffect=`move`),sn(e.keyText,r.dropPosition),t.onDragOver&&t.onDragOver({event:n,node:e})},xn=(e,n)=>{cn(e.keyText,-1)===0&&rn(e.keyText),t.onDragLeave&&t.onDragLeave({event:n,node:e})},Sn=(e,n)=>{ln(),t.onDragEnd&&t.onDragEnd({event:n,node:e})},Cn=(e,n)=>{let r=un(e,n,n.currentTarget);if(!r){ln();return}n.preventDefault(),n.stopPropagation();let i=Z.value.overKeyText===e.keyText&&Z.value.dropPosition!==void 0?Z.value.dropPosition:r.dropPosition;t.onDrop&&t.onDrop({event:n,node:e,dragNode:r.dragNode,dragNodesKeys:We(r.dragNode),dropPosition:i,dropToGap:i!==0}),ln()},wn=(e,t)=>{mn(e,t)},Tn=(e,n)=>{let r=!!t.multiple&&(t.rangeSelect===void 0?`append`:t.rangeSelect)!==!1&&n.shiftKey;if(t.directoryMode&&t.multiple&&(t.toggleSelect===void 0||t.toggleSelect)&&(n.ctrlKey||n.metaKey)||r){n.preventDefault(),n.stopPropagation(),on(e.keyText),$t(e,n);return}mn(e,n)},En=(n,r,i)=>{if(r.preventDefault(),r.stopPropagation(),i===`click`&&Mt.value===n.keyText){an(n.keyText);return}i===`doubleClick`&&t.onDoubleClick&&t.onDoubleClick(r,n);let a=t.directoryMode&&(t.expandAction!==void 0&&t.expandAction)===i&&(n.children.length>0||!n.isLeaf);if(i===`click`&&a){e(()=>{let e=Ht(),i=q(e).has(n.keyText),a=i?e.filter(e=>U(e)!==n.keyText):[...e,n.key];Zt(n,r,!1);let o=$t(n,r,!1)??Vt();t.onExpand?.(W(a),{node:n,expanded:!i,nativeEvent:r}),t.onSelect?.(o,{node:n,nativeEvent:r,selected:o.some(e=>U(e)===n.keyText),selectedNodes:o.map(e=>$().byKeyText[U(e)]).filter(Boolean)})});return}a&&Zt(n,r),i===`click`&&$t(n,r)},Dn=(e,n)=>{if(Mt.value===e.keyText){n.preventDefault(),n.stopPropagation();return}t.directoryMode&&t.multiple&&(t.toggleSelect===void 0||t.toggleSelect)&&n.ctrlKey&&!n.metaKey&&(n.preventDefault(),n.stopPropagation(),$t(e,n))},On=L(`computed:1:43`,()=>h(()=>Lt.get()?(t.virtual===void 0||t.virtual)===!1?{maxHeight:`${Lt.get()}px`,overflowY:`auto`}:{height:`${Lt.get()}px`,overflowY:`auto`}:{overflowY:`visible`}));On.get();let kn=()=>rt({snapshot:Kt(),version:yt.value,loadingKeyTexts:Dt.value,fixedVirtualRowHeight:zt.get(),componentSize:ht.get(),classNames:t.classNames,styles:t.styles,emptyText:t.emptyText===void 0?`暂无节点`:t.emptyText,showLine:t.showLine,disabled:t.disabled,blockNode:t.blockNode,checkable:t.checkable,showIcon:t.showIcon,selectable:t.selectable===void 0||t.selectable,hasLoadData:!!t.loadData,titleRender:t.titleRender,switcherIcon:t.switcherIcon,icon:t.icon,directoryMode:t.directoryMode,dragConfig:_t.get(),handleDragStartNode:vn,handleDragEnterNode:yn,handleDragOverNode:bn,handleDragLeaveNode:xn,handleDragEndNode:Sn,handleDropNode:Cn,handleExpandToggle:Qt,handleCheck:en,handleDragMouseDown:wn,handleLabelMouseDown:Tn,handleLabelActivate:En,handleLabelContextMenu:Dn});function An(){jt.value||(jt.value=!0,queueMicrotask(()=>{jt.value=!1,jn()}))}function jn(){let e=pt.current;e&&a(kn(),e)}function Mn(e){pt.current=e,e&&jn()}let Nn=()=>{Dt.value=J.loadingKeyTexts??[],Q()};return c(()=>{jn();let e=J.renderRequests??new Set;e.add(Nn),J.renderRequests=e}),p(()=>{pn(),Nt.current?.(),Nt.current=null,J.renderRequests?.delete(Nn)}),L(`watch:1:44`,()=>T(()=>[t.treeData===void 0?[]:t.treeData,t.treeDataSimpleMode,t.fieldNames,t.selectedKeys,t.checkedKeys,t.expandedKeys,t.searchValue],()=>{Bt(),An()})),An(),o(Object.assign(e=>{let n=_e().content.cloneNode(!0).firstChild,r=n,a=n.childNodes[1],s=n.childNodes[0],c=s.parentNode;le(r,()=>ct,[`className`,`style`,`data-rue-tree`,`data-rue-tree-version`,`__rue_static_template_id__`]);let l;z(()=>{let e=G(G(G(`rue-tree rounded-box border border-base-300 bg-base-100 text-base-content shadow-sm`,nt(t.status)),t.classNames?.root),t.className),n=e==null?``:String(e);Object.is(l,n)||(l=n,r.className=n)});let u;z(()=>{let e={...t.styles?.root,...t.style};Object.is(u,e)||(u=e,E(r,e))}),r.setAttribute(`data-rue-tree`,`true`);let d;z(()=>{let e=String(yt.value);Object.is(d,e)||(d=e,e==null||e===!1?r.removeAttribute(`data-rue-tree-version`):r.setAttribute(`data-rue-tree-version`,String(e)))});let f;z(()=>{let e=G(Ae(`grid gap-0.5`,mt.get().bodyPadding,mt.get().textClass),t.classNames?.body),n=e==null?``:String(e);Object.is(f,n)||(f=n,a.className=n)});let p=Mn;typeof p==`function`?p(a):p&&typeof p==`object`&&`current`in p&&(p.current=a),i(()=>{typeof p==`function`?p(null):p&&typeof p==`object`&&`current`in p&&(p.current=null)}),a.setAttribute(`data-rue-tree-body`,`true`);let m;z(()=>{let e={...On.get(),...t.styles?.body};Object.is(m,e)||(m=e,E(a,e))});let h=e=>{let t=nn;typeof t==`function`&&t(e)};return a.addEventListener(`scroll`,h),i(()=>a.removeEventListener(`scroll`,h)),_(c,s,()=>t.allowSearch?{__rue_compiled_branch_key:!0,create:()=>o(Object.assign(e=>{let n=A(`div`,e),r;z(()=>{let e=G(G(Ae(`border-b border-base-200/80`,mt.get().headerPadding),t.classNames?.header),t.classNames?.search),i=e==null?``:String(e);Object.is(r,i)||(r=i,n.className=i)});let a;z(()=>{let e={...t.styles?.header,...t.styles?.search};Object.is(a,e)||(a=e,E(n,e))});let o=A(`input`,n);D(n,o),o.setAttribute(`type`,`text`),o.className=`input input-bordered input-sm w-full bg-base-100`;let s;z(()=>{let e=Kt().searchValue,t=e==null?``:String(e);Object.is(s,t)||(s=t,O(o,t))});let c;z(()=>{let e=t.searchPlaceholder===void 0?`搜索节点`:t.searchPlaceholder;Object.is(c,e)||(c=e,e==null||e===!1?o.removeAttribute(`placeholder`):o.setAttribute(`placeholder`,String(e)))});let l=e=>{let t=e=>tn(e.currentTarget.value);typeof t==`function`&&t(e)};return o.addEventListener(`input`,l),i(()=>o.removeEventListener(`input`,l)),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>o(Object.assign(e=>{let t=P();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))},at=Object.assign(it,{DirectoryTree:e=>{let t=v(e.blockNode),n=v(e.className),r=v(e.expandAction),i=v(e.showIcon),a=v(oe(e,[`blockNode`,`className`,`expandAction`,`showIcon`]));return I(ee(it,()=>({...a.get(),className:G(`rue-directory-tree`,n.get()),showIcon:i.get()===void 0||i.get(),blockNode:t.get()===void 0||t.get(),directoryMode:!0,expandAction:r.get()===void 0?`click`:r.get()})),e=>B(()=>{t.set(e.blockNode),n.set(e.className),r.set(e.expandAction),i.set(e.showIcon),a.set(oe(e,[`blockNode`,`className`,`expandAction`,`showIcon`]))}),()=>e)}}),ot=S(`<div class="flex min-w-0 items-center justify-between gap-3"><span class="truncate"><!--rue:text-hole:0--></span><span class="badge badge-ghost badge-xs"><!--rue:text-hole:1--></span></div>`),st=S(`<div class="flex min-w-0 items-center justify-between gap-3"><span class="truncate"><!--rue:text-hole:0--></span><span><!--rue:text-hole:1--></span></div>`),ct=S(`<div class="space-y-4 not-prose"><!--rue:opaque-hole:0--><div class="grid gap-3 md:grid-cols-3"><div class="rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm"><div class="text-xs text-base-content/45">当前选中</div><div class="mt-2 flex flex-wrap gap-2"><!--rue:text-hole:1--></div></div><div class="rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm"><div class="text-xs text-base-content/45">推荐场景</div><div class="mt-2 text-sm text-base-content/75">组件目录、文档导航、资源分类</div></div><div class="rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm"><div class="text-xs text-base-content/45">状态模型</div><div class="mt-2 text-sm text-base-content/75">selectedKeys / expandedKeys 分离，便于受控更新。</div></div></div></div>`),lt=S(`<div class="grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start"><!--rue:opaque-hole:0--><div class="space-y-3"><div class="rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm"><div class="text-xs text-base-content/45">快捷属性</div><div class="mt-3 flex flex-wrap gap-2"><button type="button">click 展开</button><button type="button">doubleClick 展开</button><button type="button">只选中不展开</button></div><div class="mt-2 flex flex-wrap gap-2"><button type="button">ctrl/meta 追加</button><button type="button">关闭追加选择</button></div></div><div class="rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm"><div class="text-xs text-base-content/45">当前选择</div><div class="mt-2 flex flex-wrap gap-2"><!--rue:text-hole:1--></div></div><div class="rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70">当前组合是 expandAction=<strong><!--rue:text-hole:2--></strong> 、toggleSelect=<strong><!--rue:text-hole:3--></strong> 、rangeSelect=<strong><!--rue:text-hole:4--></strong>。 <div class="mt-3">普通点击会落成单选；打开追加后，meta / ctrl 会追加或移除选中，shift 也会启用区间选择。关闭追加时，这两类补充选择都会停用；append / replace 的差异放到下面的对照示例里单独演示。</div></div></div></div>`),ut=S(`<div class="space-y-4 not-prose"><div class="rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70"><div>基础行为：先单击 alpha.ts，再按住 Shift 单击 epsilon.ts，alpha.ts 到 epsilon.ts 都会选中。</div><div class="mt-2">append / replace 只影响当前额外非连续选择是否保持：重置后先单击 beta.ts，再按住 Cmd / Ctrl 单击 epsilon.ts，最后按住 Shift 单击 delta.ts。</div><div class="mt-2">append 会保持 beta.ts；replace 只保持 delta.ts 到 epsilon.ts 这一段。</div><button type="button" class="btn btn-ghost btn-xs mt-3">重置两边示例</button></div><div class="grid gap-4 xl:grid-cols-2"><div class="space-y-3 rounded-[1.4rem] border border-base-300 bg-base-100 p-4 shadow-sm"><div class="flex items-center justify-between gap-3"><div><div class="text-sm font-semibold">rangeSelect="append"</div><div class="text-xs text-base-content/55">保持原先的非连续选择，再并入新的 shift 区间。</div></div><span class="badge badge-outline badge-sm">append</span></div><!--rue:opaque-hole:0--><div class="rounded-box border border-base-300 bg-base-100 px-4 py-3 text-sm text-base-content/70"><div class="text-xs text-base-content/45">当前选择</div><div class="mt-2 flex flex-wrap gap-2"><!--rue:text-hole:1--></div></div></div><div class="space-y-3 rounded-[1.4rem] border border-base-300 bg-base-100 p-4 shadow-sm"><div class="flex items-center justify-between gap-3"><div><div class="text-sm font-semibold">rangeSelect="replace"</div><div class="text-xs text-base-content/55">只保持新的 shift 区间，基础的非连续选择会被替换掉。</div></div><span class="badge badge-primary badge-outline badge-sm">replace</span></div><!--rue:opaque-hole:2--><div class="rounded-box border border-base-300 bg-base-100 px-4 py-3 text-sm text-base-content/70"><div class="text-xs text-base-content/45">当前选择</div><div class="mt-2 flex flex-wrap gap-2"><!--rue:text-hole:3--></div></div></div></div></div>`),dt=S(`<div class="space-y-4 not-prose"><!--rue:opaque-hole:0--><div class="grid gap-3 md:grid-cols-3"><div class="rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm"><div class="text-xs text-base-content/45">selectedKeys</div><div class="mt-2 flex flex-wrap gap-2"><!--rue:text-hole:1--></div></div><div class="rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm"><div class="text-xs text-base-content/45">checkedKeys</div><div class="mt-2 flex flex-wrap gap-2"><!--rue:text-hole:2--></div></div><div class="rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm"><div class="text-xs text-base-content/45">halfCheckedKeys</div><div class="mt-2 flex flex-wrap gap-2"><!--rue:text-hole:3--></div></div></div></div>`),ft=S(`<div class="grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start"><!--rue:opaque-hole:0--><div class="space-y-3"><div class="rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm"><div class="text-xs text-base-content/45">当前勾选</div><div class="mt-2 flex flex-wrap gap-2"><!--rue:text-hole:1--></div></div><div class="rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm text-sm text-base-content/75"><div class="font-medium text-base-content">disabled</div><div class="mt-2">整节点不可展开、不可选中、不可勾选，适合只读目录或冻结配置。</div></div><div class="rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm text-sm text-base-content/75"><div class="font-medium text-base-content">disableCheckbox</div><div class="mt-2">节点仍能展示和展开，但复选框不会参与交互，适合“只可浏览不可授权”的条目。</div></div></div></div>`),J=S(`<div class="grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start"><!--rue:opaque-hole:0--><div class="rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70">当前选中：<code><!--rue:text-hole:1--></code><div class="mt-3">这类 simple mode 很适合后端直接给 id / pId 的菜单、流程节点和权限项，不需要再先做一遍树转换。</div></div></div>`),pt=S(`<div class="grid gap-4 not-prose lg:grid-cols-[minmax(0,26rem),1fr] lg:items-start"><!--rue:opaque-hole:0--><div class="space-y-3"><div class="rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm"><div class="text-xs text-base-content/45">expandedKeys</div><div class="mt-2 text-sm text-base-content/75"><!--rue:text-hole:1--></div></div><div class="rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm"><div class="text-xs text-base-content/45">selectedKeys</div><div class="mt-2 text-sm text-base-content/75"><!--rue:text-hole:2--></div></div><div class="rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70">展开 release-bus 后才会注入桌面端和移动端节点，适合远端目录、超大权限树和发布范围配置。</div></div></div>`),mt=S(`<div class="grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start"><!--rue:opaque-hole:0--><div class="space-y-3"><div class="rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm"><div class="text-xs text-base-content/45">最近一次拖拽</div><div class="mt-2 text-sm text-base-content/75"><!--rue:text-hole:1--></div></div><div class="rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm"><div class="text-xs text-base-content/45">allowDrop 规则</div><div class="mt-2 grid gap-2 text-sm text-base-content/75"><div>folder：允许放入，也允许插前 / 插后。</div><div>file：只允许插前 / 插后，不允许作为 inside 目标。</div></div></div><div class="rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70">拖到 folder 正中央会看到“放入”，拖到行的上沿或下沿则会出现“插前 / 插后”；如果目标是 file，inside 落点会被 allowDrop 直接拦掉。</div></div></div>`),ht=S(`<div class="grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start"><!--rue:opaque-hole:0--><div class="space-y-3"><div class="rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm"><div class="text-xs text-base-content/45">数据量</div><div class="mt-2 text-2xl font-semibold"><!--rue:text-hole:1--></div></div><div class="rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm"><div class="text-xs text-base-content/45">当前选中</div><div class="mt-2 text-sm text-base-content/75"><!--rue:text-hole:2--></div></div><div class="rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70">对文档页目录、埋点树、批量资源目录这种长列表场景，虚拟滚动能显著降低初始渲染压力。</div></div></div>`),gt=S(`<div class="grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start"><!--rue:opaque-hole:0--><div class="space-y-3"><div class="rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm"><div class="text-xs text-base-content/45">根节点数量</div><div class="mt-2 text-2xl font-semibold"><!--rue:text-hole:1--></div></div><div class="rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm"><div class="text-xs text-base-content/45">已加载分支</div><div class="mt-2 text-2xl font-semibold"><!--rue:text-hole:2--></div></div><div class="rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm"><div class="text-xs text-base-content/45">当前展开</div><div class="mt-2 text-sm text-base-content/75"><!--rue:text-hole:3--></div></div><div class="rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70">先滚动到较深位置再展开节点也没问题：视口外的行不会真正渲染，只有命中的 branch 才会触发 loadData 注入子节点。</div></div></div>`),_t=S(`<div class="card border border-base-200/80 bg-base-100 shadow-sm not-prose"><div class="card-body grid gap-4 lg:grid-cols-[minmax(0,1fr),18rem] lg:items-start"><ul class="m-0 grid gap-1 p-0"><!--rue:opaque-hole:0--></ul><div class="rounded-box border border-base-300 bg-base-200/40 p-4 text-sm text-base-content/70">单击切换展开，双击叶子节点会把它转换成 folder，并在当前层直接追加一个新子节点。</div></div></div>`),vt=S(`<div class="not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100"><table class="table table-zebra"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><!--rue:text-hole:0--></tbody></table></div>`),yt=S(`<li class="list-none"><button type="button"><span class="inline-flex size-5 items-center justify-center rounded-md bg-base-200/80 text-[11px] text-base-content/55"><!--rue:text-hole:0--></span><span><!--rue:text-hole:1--></span></button><!--rue:text-hole:2--></li>`),bt=S(`<div class="max-w-none prose prose-sm md:prose-base"><h1>Tree 树控件</h1><p>Rue 的 Tree 补上了独立树组件这块空白：保持 TreeView 示例里递归数据直改的灵活性，同时把 树控件常用的展开、选中、勾选、简单模式、异步加载和自定义标题一次覆盖。 视觉上使用 Rue 当前的卡片、badge 和 base 色阶体系，不照搬其他组件库的外观。</p><div class="not-prose mt-6 grid gap-3 md:grid-cols-3"><div class="rounded-[1.4rem] border border-base-300 bg-gradient-to-br from-base-100 to-base-200/40 p-4 shadow-sm"><div class="text-xs uppercase tracking-[0.2em] text-base-content/45">Node Model</div><div class="mt-2 text-base font-semibold">选择、勾选、展开三条状态线</div><p class="mt-2 mb-0 text-sm text-base-content/68">目录树、权限树、发布树都能直接套进来。</p></div><div class="rounded-[1.4rem] border border-base-300 bg-gradient-to-br from-base-100 to-base-200/40 p-4 shadow-sm"><div class="text-xs uppercase tracking-[0.2em] text-base-content/45">DirectoryTree</div><div class="mt-2 text-base font-semibold">目录树快捷 API</div><p class="mt-2 mb-0 text-sm text-base-content/68">支持 click / doubleClick 展开，以及更接近文件浏览器的多选交互。</p></div><div class="rounded-[1.4rem] border border-base-300 bg-gradient-to-br from-base-100 to-base-200/40 p-4 shadow-sm"><div class="text-xs uppercase tracking-[0.2em] text-base-content/45">Heavy Interaction</div><div class="mt-2 text-base font-semibold">拖拽排序与虚拟滚动</div><p class="mt-2 mb-0 text-sm text-base-content/68">长列表和拖拽改序终于能落在同一个 Tree 上了。</p></div></div><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--><!--rue:opaque-hole:5--><!--rue:opaque-hole:6--><div class="not-prose mt-10 space-y-2"><h2 class="text-2xl font-semibold">更重交互</h2><p class="text-sm text-base-content/70">当 Tree 既要承载拖拽整理，又要承载超长数据时，draggable 和 virtual 就是两个最关键的控制面。</p></div><!--rue:opaque-hole:7--><!--rue:opaque-hole:8--><!--rue:opaque-hole:9--><!--rue:opaque-hole:10--><div class="not-prose mt-10 space-y-4"><h2 class="text-2xl font-semibold">API</h2><!--rue:opaque-hole:11--></div></div>`),xt=e=>{let t=v(e.rows);return I(o(Object.assign(e=>{let n=vt().content.cloneNode(!0).firstChild,i=n.childNodes[0].childNodes[1].childNodes[0],a=i.parentNode,s=[];return z(()=>{let e=t.get()||[];s=r(a,i,s,e,(e,t)=>e.prop,(e,t)=>{let n=v(e),r=v(t);return m((e,t,r)=>se(e,r,()=>o(Object.assign(e=>{let t=A(`tr`,e),r=A(`td`,t);D(t,r);let i=A(`code`,r);D(r,i);let a=k(``);D(i,a),w(a,()=>n.get().prop);let o=A(`td`,t);D(t,o);let s=k(``);D(o,s),w(s,()=>n.get().description);let c=A(`td`,t);D(t,c);let l=A(`code`,c);D(c,l);let u=k(``);D(l,u),w(u,()=>n.get().type);let d=A(`td`,t);D(t,d);let f=A(`code`,d);D(d,f);let p=k(``);return D(f,p),w(p,()=>n.get().defaultValue),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(i,a)=>{e=i,t=a,n.set(i),r.set(a)})})}),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})),e=>B(()=>{t.set(e.rows)}),()=>e)},St=[{title:`产品平台`,key:`platform`,children:[{title:`文档中心`,key:`docs-api`},{title:`组件市场`,key:`component-hub`},{title:`示例仓库`,key:`examples`}]},{title:`工程效率`,key:`engineering`,children:[{title:`构建链路`,key:`build-pipeline`},{title:`质量门禁`,key:`quality-gate`},{title:`发布管道`,key:`release-flow`}]},{title:`增长分析`,key:`growth`,children:[{title:`实验看板`,key:`experiment-board`},{title:`归因报表`,key:`attribution-report`},{title:`留存漏斗`,key:`retention-funnel`}]}],Ct=[{title:`发布总控`,key:`release-control`,children:[{title:`前台站点`,key:`release-site`,children:[{title:`首页编排`,key:`site-home`},{title:`价格页`,key:`site-pricing`}]},{title:`运营链路`,key:`release-ops`,children:[{title:`投放素材`,key:`ops-assets`},{title:`归因回传`,key:`ops-attribution`}]},{title:`合规审查`,key:`release-compliance`,children:[{title:`隐私条款`,key:`compliance-privacy`},{title:`审计记录`,key:`compliance-audit`}]}]}],wt=[{title:`权限控制`,key:`permission-disabled-root`,children:[{title:`只读目录`,key:`readonly-folder`,disabled:!0,children:[{title:`首页编排`,key:`readonly-home`},{title:`价格页`,key:`readonly-pricing`}]},{title:`可编辑目录`,key:`editable-folder`,children:[{title:`投放素材`,key:`editable-assets`},{title:`归因回传`,key:`editable-attribution`,disableCheckbox:!0}]},{title:`审计日志（仅禁用复选框）`,key:`audit-log`,disableCheckbox:!0}]}],Tt=[{nodeId:1,parentId:0,code:`workspace`,name:`Workspace`},{nodeId:2,parentId:1,code:`workflow`,name:`Workflow board`},{nodeId:3,parentId:1,code:`briefs`,name:`Briefs`},{nodeId:4,parentId:2,code:`review`,name:`Design review`},{nodeId:5,parentId:2,code:`release`,name:`Release checklist`},{nodeId:6,parentId:3,code:`content`,name:`Content drafts`}],Et=[{title:`app`,key:`dir-app`,children:[{title:`pages`,key:`dir-pages`,children:[{title:`Tree.tsx`,key:`file-tree-page`},{title:`Transfer.tsx`,key:`file-transfer-page`}]},{title:`site`,key:`dir-site`,children:[{title:`SidebarPlaygroundDesign.tsx`,key:`file-sidebar`}]}]},{title:`packages`,key:`dir-packages`,children:[{title:`runtime`,key:`dir-runtime`},{title:`rue-design`,key:`dir-rue-design`}]},{title:`README.md`,key:`file-readme`}],Dt=[{title:`alpha.ts`,key:`range-alpha`},{title:`beta.ts`,key:`range-beta`},{title:`gamma.ts`,key:`range-gamma`},{title:`delta.ts`,key:`range-delta`},{title:`epsilon.ts`,key:`range-epsilon`}],Ot=[{title:`src`,key:`drag-src`,kind:`folder`,children:[{title:`components`,key:`drag-components`,kind:`folder`,children:[{title:`Tree.tsx`,key:`drag-tree-file`,kind:`file`},{title:`Transfer.tsx`,key:`drag-transfer-file`,kind:`file`}]},{title:`main.ts`,key:`drag-main-file`,kind:`file`}]},{title:`docs`,key:`drag-docs`,kind:`folder`,children:[{title:`routing.md`,key:`drag-routing-file`,kind:`file`},{title:`installation.md`,key:`drag-install-file`,kind:`file`}]},{title:`package.json`,key:`drag-package-file`,kind:`file`}],Y=Array.from({length:120},(e,t)=>({title:`Page ${String(t+1).padStart(3,`0`)}`,key:`virtual-${t}`})),X=Array.from({length:64},(e,t)=>({title:`Workspace ${String(t+1).padStart(2,`0`)}`,key:`async-virtual-root-${t}`,isLeaf:!1})),Z=`import { ref } from '@rue-js/rue'
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
</div>`,kt=`import { ref } from '@rue-js/rue'
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
</div>`,At=`import { ref } from '@rue-js/rue'
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
</div>`,jt=`import { ref } from '@rue-js/rue'
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
</div>`,Mt=`import { ref } from '@rue-js/rue'
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
</div>`,Nt=`import { computed, ref } from '@rue-js/rue'
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
</div>`,Pt=`import { ref } from '@rue-js/rue'
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
</div>`,Ft=`import { ref } from '@rue-js/rue'
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
</div>`,It=`import { ref } from '@rue-js/rue'
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
</div>`,Lt=`import { ref } from '@rue-js/rue'
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
</div>`,Rt=`import { computed, reactive } from '@rue-js/rue'

type Node = { id: string; name: string; open?: boolean; children?: Node[] }

const treeData = reactive<Node>({
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

const TreeItem = ({ model }: { model: Node }) => {
  const isOpen = computed(() => !!model.open)
  const isFolder = computed(() => !!model.children && model.children.length > 0)

  const toggle = () => {
    model.open = !isOpen.get()
  }

  const addChild = () => {
    model.children = model.children ?? []
    model.children.push({ id: model.id + '-new', name: 'new stuff' })
    model.open = true
  }

  return (
    <li>
      <div onClick={toggle} onDblClick={addChild}>{model.name}</div>
      {isFolder.get() && isOpen.get() ? (
        <ul>{model.children!.map(child => <TreeItem key={child.id} model={child} />)}</ul>
      ) : null}
    </li>
  )
}

<div className="card border border-base-200/80 bg-base-100 shadow-sm">
  <div className="card-body grid gap-4 lg:grid-cols-[minmax(0,1fr),18rem] lg:items-start">
    <ul className="m-0 grid gap-1 p-0">
      <TreeItem model={treeData} />
    </ul>
    <div className="rounded-box border border-base-300 bg-base-200/40 p-4 text-sm text-base-content/70">
      单击切换展开，双击叶子节点会把它转换成 folder，并在当前层直接追加一个新子节点。
    </div>
  </div>
</div>`,zt=[{prop:`treeData`,description:`树数据源，支持嵌套 children 和字段映射。`,type:`TreeDataNode[]`,defaultValue:`[]`},{prop:`selectedKeys / defaultSelectedKeys`,description:`受控与非受控的当前选中项，multiple 打开后允许多选。`,type:`TreeKey[]`,defaultValue:`[]`},{prop:`checkedKeys / defaultCheckedKeys`,description:`勾选模式下的选中集合，strict 模式会回传 checked / halfChecked 结构。`,type:`TreeKey[] | { checked: TreeKey[]; halfChecked: TreeKey[] }`,defaultValue:`[]`},{prop:`expandedKeys / defaultExpandedKeys / defaultExpandAll`,description:`控制展开态，适合目录树、权限树和异步加载场景。`,type:`TreeKey[] / boolean`,defaultValue:`[] / false`},{prop:`checkable / checkStrictly`,description:`切换勾选与父子联动模式；strict 会关闭级联。`,type:`boolean`,defaultValue:`false`},{prop:`treeDataSimpleMode / fieldNames`,description:`直接接入 id / pId 扁平数据，同时可映射 title、key、children 字段。`,type:`boolean | TreeSimpleModeConfig / TreeFieldNames`,defaultValue:`- / -`},{prop:`allowSearch / searchValue / filterTreeNode`,description:`提供内置搜索输入和过滤逻辑，命中后会保持祖先链路。`,type:`boolean / string / boolean | ((inputValue, node) => boolean)`,defaultValue:`false / - / true`},{prop:`loadData`,description:`展开未加载分支时触发异步加载，适合远端目录与超大树。`,type:`(node: TreeNode) => Promise<any> | void`,defaultValue:`-`},{prop:`rangeSelect / Tree.DirectoryTree / expandAction / toggleSelect`,description:`Tree 多选和目录树都支持 shift 区间选择；目录树额外提供展开动作和 ctrl/meta 追加选择开关。`,type:`false | "append" | "replace" / DirectoryTreeProps / false | "click" | "doubleClick" / boolean`,defaultValue:`"append" / blockNode=true / showIcon=true / "click" / true`},{prop:`draggable / allowDrop / onDrop`,description:`开启拖拽排序并控制是否允许落点；allowDrop 和 onDrop 都会拿到 dropToGap，UI 会同步显示插前、插后或放入占位态。`,type:`TreeDraggable / (info) => boolean / (info) => void`,defaultValue:`false / - / -`},{prop:`height / itemHeight / virtual`,description:`为长列表开启虚拟滚动；height 定义视口高度，itemHeight 用于估算渲染窗口，也能和 loadData 组合接超长懒加载树。`,type:`number / number / boolean`,defaultValue:`- / 自动按尺寸估算 / true`},{prop:`showLine / showIcon / blockNode`,description:`控制树线、节点图标和整行可点的布局表现。`,type:`boolean`,defaultValue:`false`},{prop:`titleRender / switcherIcon / icon`,description:`按节点态自定义标题、展开图标和节点图标。`,type:`render function | any`,defaultValue:`-`}],Q=e=>Array.isArray(e)?e:e.checked,Bt=(e,t)=>Array.isArray(e)?t?.halfCheckedKeys??[]:e.halfChecked,$=e=>`${typeof e}:${String(e)}`,Vt=e=>e.map(e=>({...e,children:Array.isArray(e.children)?Vt(e.children):e.children})),Ht=(e,t)=>{let n=$(t);for(let r=0;r<e.length;r+=1){let i=e[r];if($(i.key)===n){let[t]=e.splice(r,1);return t??null}if(Array.isArray(i.children)){let e=Ht(i.children,t);if(e)return e}}return null},Ut=(e,t,n,r)=>{let i=$(n);for(let a=0;a<e.length;a+=1){let o=e[a];if($(o.key)===i){if(r===0){let e=Array.isArray(o.children)?[...o.children]:[];e.push(t),o.children=e}else e.splice(r<0?a:a+1,0,t);return!0}if(Array.isArray(o.children)&&Ut(o.children,t,n,r))return!0}return!1},Wt=(e,t)=>{let n=Vt(e),r=Ht(n,t.dragNode.key);return r&&(Ut(n,r,t.node.key,t.dropPosition)||n.push(r)),n},Gt=(e,t,n)=>{let r=$(t);for(let i=0;i<e.length;i+=1){let a=e[i];if($(a.key)===r){let t=n(a);if(t===a)return e;let r=e.slice();return r[i]=t,r}if(Array.isArray(a.children)&&a.children.length){let r=Gt(a.children,t,n);if(r===a.children)continue;let o=e.slice();return o[i]={...a,children:r},o}}return e},Kt=e=>e.reduce((e,t)=>!Array.isArray(t.children)||!t.children.length?e:e+1+Kt(t.children),0),qt=e=>{let t=v(e.model),n=h(()=>!!t.get().open),a=h(()=>!!t.get().children&&t.get().children.length>0),c=e=>{e?.stopPropagation(),t.get().open=!n.get()},l=e=>{e?.stopPropagation(),t.get().children||(t.get().children=[]),t.get().children.push({id:`${t.get().id}-new-${t.get().children.length}`,name:`new stuff`}),t.get().open=!0},u=e=>{e?.stopPropagation(),a.get()||(t.get().children=[],l(),t.get().open=!0)};return f(()=>I(o(Object.assign(e=>{let d=yt().content.cloneNode(!0).firstChild,f=d.childNodes[0],p=d.childNodes[0].childNodes[0].childNodes[0],h=p.parentNode,g=d.childNodes[0].childNodes[1].childNodes[0],y=g.parentNode,b=d.childNodes[1],x=b.parentNode;f.setAttribute(`type`,`button`);let S;z(()=>{let e=`flex items-center gap-2 rounded-xl px-3 py-2 text-left text-sm transition `+(a.get()?`font-semibold text-base-content`:`text-base-content/80 hover:bg-base-200/70`),t=e==null?``:String(e);Object.is(S,t)||(S=t,f.className=t)});let ee=e=>{let t=e=>c(e);typeof t==`function`&&t(e)};f.addEventListener(`click`,ee),i(()=>f.removeEventListener(`click`,ee));let C=e=>{let t=e=>u(e);typeof t==`function`&&t(e)};f.addEventListener(`dblclick`,C),i(()=>f.removeEventListener(`dblclick`,C));let te=k(``);h.insertBefore(te,p),h.removeChild(p),w(te,()=>a.get()?n.get()?`−`:`+`:`•`);let T=k(``);return y.insertBefore(T,g),y.removeChild(g),w(T,()=>t.get().name),_(x,b,()=>a.get()&&n.get()?{__rue_compiled_branch_key:!0,create:()=>o(Object.assign(e=>{let n=A(`ul`,e);n.className=`mt-1 grid gap-1 pl-5`;let a=ie(`rue:list:end`);D(n,a);let o=[];z(()=>{let e=t.get().children||[];o=r(a.parentNode,a,o,e,(e,t)=>e.id,(e,t)=>{let n=v(e),r=v(t);return m((e,t,r)=>se(e,r,()=>s(qt,()=>({model:n.get()}))),(i,a)=>{e=i,t=a,n.set(i),r.set(a)})})});let c=A(`li`,n);D(n,c),c.className=`list-none`;let u=A(`button`,c);D(c,u),u.setAttribute(`type`,`button`),u.className=`btn btn-ghost btn-xs rounded-full text-emerald-600`;let d=e=>{let t=e=>l(e);typeof t==`function`&&t(e)};return u.addEventListener(`click`,d),i(()=>u.removeEventListener(`click`,d)),D(u,k(`+ add child`)),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>o(Object.assign(e=>{let t=P();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),{__rue_compiled_host:d,__rue_compiled_roots:[d]}},{__rue_compiled_explicit_roots:!0})),e=>B(()=>{t.set(e.model)}),()=>e))},Jt=()=>{let e=n([`docs-api`]),i=n([`dir-app`]),a=n(`click`),c=n(!0),p=h(()=>c.value?`append`:!1),g=n([]),y=n([]),b=n(0),S=n([`release-control`]),C=n([`site-home`]),te=n([`release-control`,`release-site`]),T=n([`editable-assets`]),E=n([`workflow`]),O=n([]),re=n([]),L=n(Vt(Ot)),R=n(`folder 支持放入；file 只允许插前和插后，悬停时会显示明确占位态。`),ae=n([`virtual-3`]),oe=n(Vt(X)),ce=n([]),le=n([]),de=h(()=>Kt(oe.value)),fe=n([{title:`发布总线`,key:`release-bus`,isLeaf:!1}]),pe=ne({id:`root`,name:`My Tree`,open:!0,children:[{id:`hello`,name:`hello`},{id:`world`,name:`world`},{id:`branch`,name:`child folder`,open:!0,children:[{id:`branch-1`,name:`design review`},{id:`branch-2`,name:`release note`}]}]}),H={basic:n(`preview`),directory:n(`preview`),directoryRange:n(`preview`),checkable:n(`preview`),checkableDisabled:n(`preview`),simple:n(`preview`),async:n(`preview`),drag:n(`preview`),virtual:n(`preview`),virtualAsync:n(`preview`),legacy:n(`preview`)},me=async e=>{e.key===`release-bus`&&(fe.value=[{title:`发布总线`,key:`release-bus`,isLeaf:!1,children:[{title:`桌面端`,key:`desktop`,children:[{title:`Windows`,key:`desktop-win`},{title:`macOS`,key:`desktop-mac`}]},{title:`移动端`,key:`mobile`,children:[{title:`iOS`,key:`mobile-ios`},{title:`Android`,key:`mobile-android`}]}]}])},he=async e=>{e.children.length||(oe.value=Gt(oe.value,e.key,e=>({...e,children:Array.from({length:8},(t,n)=>({title:`${String(e.title)} / Module ${n+1}`,key:`${String(e.key)}-child-${n}`,isLeaf:n%3!=0}))})))},ge=()=>{g.value=[],y.value=[],b.value+=1};return f(()=>I(s(ue,()=>({children:(n,s,f)=>se(n,f,()=>o(Object.assign(n=>{let s=P(),f=bt().content.cloneNode(!0),h=f.firstChild,ne=h.childNodes[3],I=ne.parentNode,B=h.childNodes[4],ue=B.parentNode,_e=h.childNodes[5],ve=_e.parentNode,ye=h.childNodes[6],be=ye.parentNode,xe=h.childNodes[7],Se=xe.parentNode,Ce=h.childNodes[8],we=Ce.parentNode,Te=h.childNodes[9],Ee=Te.parentNode,De=h.childNodes[11],Oe=De.parentNode,ke=h.childNodes[12],Ae=ke.parentNode,je=h.childNodes[13],Me=je.parentNode,U=h.childNodes[14],W=U.parentNode,G=h.childNodes[15].childNodes[1],Ne=G.parentNode;s.appendChild(f);let Pe=N(I);l(Pe,V,()=>({title:`基础选中与整行交互`,summary:`默认 Tree 就是一个纯浏览 + 选中容器；blockNode 和 showIcon 让它更像配置面板里的主导航。`,tab:H.basic,code:Z,preview:o(Object.assign(t=>{let n=ct().content.cloneNode(!0).firstChild,i=n.childNodes[0],a=i.parentNode,s=n.childNodes[1].childNodes[0].childNodes[1].childNodes[0],c=s.parentNode,u=N(a);return l(u,at,()=>({treeData:St,selectedKeys:e.value,defaultExpandAll:!0,showIcon:!0,blockNode:!0,onSelect:t=>{e.value=t}})),a.insertBefore(u,i),_(c,s,()=>e.value.length?{__rue_compiled_branch_key:!0,create:()=>o(Object.assign(t=>{let n=P(),i=ie(`rue:list:end`);D(n,i);let a=[];return z(()=>{let t=e.value||[];a=r(i.parentNode,i,a,t,(e,t)=>String(e),(e,t)=>{let n=v(e),r=v(t);return m((e,t,r)=>se(e,r,()=>o(Object.assign(e=>{let t=A(`span`,e);t.className=`badge badge-outline badge-sm`;let r=k(``);return D(t,r),w(r,()=>String(n.get())),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(i,a)=>{e=i,t=a,n.set(i),r.set(a)})})}),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>o(Object.assign(e=>{let t=A(`span`,e);return t.className=`text-sm text-base-content/55`,D(t,k(`未选择`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))})),I.insertBefore(Pe,ne);let Fe=N(ue);l(Fe,V,()=>({title:`DirectoryTree 目录树快捷 API`,summary:`Tree.DirectoryTree 默认补上目录图标、整行可点和 click 展开；这里先只看 expandAction 和 toggleSelect 这两个基础交互开关。`,tab:H.directory,code:Nt,preview:j(()=>{let e=P(),t=lt().content.cloneNode(!0),n=t.firstChild,s=n.childNodes[1].childNodes[0].childNodes[1].childNodes[0],l=n.childNodes[1].childNodes[0].childNodes[1].childNodes[1],f=n.childNodes[1].childNodes[0].childNodes[1].childNodes[2],h=n.childNodes[1].childNodes[0].childNodes[2].childNodes[0],g=n.childNodes[1].childNodes[0].childNodes[2].childNodes[1],_=n.childNodes[0],y=_.parentNode,b=n.childNodes[1].childNodes[1].childNodes[1].childNodes[0],S=b.parentNode,C=n.childNodes[1].childNodes[2].childNodes[1].childNodes[0],te=C.parentNode,T=n.childNodes[1].childNodes[2].childNodes[3].childNodes[0],E=T.parentNode,O=n.childNodes[1].childNodes[2].childNodes[5].childNodes[0],j=O.parentNode;e.appendChild(t),F(s,`type`,`button`),z(()=>{u(s,a.value===`click`?`btn btn-primary btn-xs`:`btn btn-ghost btn-xs`)});let N=e=>{let t=()=>{a.value=`click`};typeof t==`function`&&t(e)};s.addEventListener(`click`,N),d(()=>s.removeEventListener(`click`,N)),F(l,`type`,`button`),z(()=>{u(l,a.value===`doubleClick`?`btn btn-primary btn-xs`:`btn btn-ghost btn-xs`)});let ne=e=>{let t=()=>{a.value=`doubleClick`};typeof t==`function`&&t(e)};l.addEventListener(`click`,ne),d(()=>l.removeEventListener(`click`,ne)),F(f,`type`,`button`),z(()=>{u(f,a.value===!1?`btn btn-primary btn-xs`:`btn btn-ghost btn-xs`)});let re=e=>{let t=()=>{a.value=!1};typeof t==`function`&&t(e)};f.addEventListener(`click`,re),d(()=>f.removeEventListener(`click`,re)),F(h,`type`,`button`),z(()=>{u(h,c.value?`btn btn-primary btn-xs`:`btn btn-ghost btn-xs`)});let ie=e=>{let t=()=>{c.value=!0};typeof t==`function`&&t(e)};h.addEventListener(`click`,ie),d(()=>h.removeEventListener(`click`,ie)),F(g,`type`,`button`),z(()=>{u(g,c.value?`btn btn-ghost btn-xs`:`btn btn-primary btn-xs`)});let I=e=>{let t=()=>{c.value=!1};typeof t==`function`&&t(e)};g.addEventListener(`click`,I),d(()=>g.removeEventListener(`click`,I)),z(()=>{let e=ee(at.DirectoryTree,()=>({treeData:Et,selectedKeys:i.value,multiple:!0,expandAction:a.value,toggleSelect:c.value,rangeSelect:p.get(),onSelect:e=>{i.value=e}}));M(()=>x(e,y,_))});let L=[];return z(()=>{let e=i.value||[];L=r(S,b,L,e,(e,t)=>String(e),(e,t)=>{let n=v(e),r=v(t);return m((e,t,r)=>se(e,r,()=>o(Object.assign(e=>{let t=A(`span`,e);t.className=`badge badge-outline badge-sm`;let r=k(``);return D(t,r),w(r,()=>String(n.get())),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(i,a)=>{e=i,t=a,n.set(i),r.set(a)})})}),z(()=>{let e=String(a.value);M(()=>x(e,te,C))}),z(()=>{let e=String(c.value);M(()=>x(e,E,T))}),z(()=>{let e=String(p.get());M(()=>x(e,j,O))}),e},!0)})),ue.insertBefore(Fe,B);let Ie=N(ve);l(Ie,V,()=>({title:`shift append vs shift replace`,summary:`Shift 的基础语义是先选一个节点，再 Shift 选另一个节点，中间连续区间都会选中；append / replace 只决定当前额外选择是否保持。`,tab:H.directoryRange,code:Pt,preview:j(()=>{let e=P(),t=ut().content.cloneNode(!0),n=t.firstChild,i=n.childNodes[0].childNodes[3],a=n.childNodes[1].childNodes[0].childNodes[1],s=a.parentNode,c=n.childNodes[1].childNodes[0].childNodes[2].childNodes[1].childNodes[0],l=c.parentNode,f=n.childNodes[1].childNodes[1].childNodes[1],p=f.parentNode,h=n.childNodes[1].childNodes[1].childNodes[2].childNodes[1].childNodes[0],S=h.parentNode;e.appendChild(t),F(i,`type`,`button`),u(i,`btn btn-ghost btn-xs mt-3`);let C=e=>{let t=ge;typeof t==`function`&&t(e)};return i.addEventListener(`click`,C),d(()=>i.removeEventListener(`click`,C)),z(()=>{let e=ee(at.DirectoryTree,()=>({key:`append-${b.value}`,treeData:Dt,selectedKeys:g.value,multiple:!0,toggleSelect:!0,rangeSelect:`append`,onSelect:e=>{g.value=e}}));M(()=>x(e,s,a))}),_(l,c,()=>g.value.length?{__rue_compiled_branch_key:!0,create:()=>o(Object.assign(e=>{let t=P(),n=ie(`rue:list:end`);D(t,n);let i=[];return z(()=>{let e=g.value||[];i=r(n.parentNode,n,i,e,(e,t)=>String(e),(e,t)=>{let n=v(e),r=v(t);return m((e,t,r)=>se(e,r,()=>o(Object.assign(e=>{let t=A(`span`,e);t.className=`badge badge-outline badge-sm`;let r=k(``);return D(t,r),w(r,()=>String(n.get())),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(i,a)=>{e=i,t=a,n.set(i),r.set(a)})})}),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>o(Object.assign(e=>{let t=A(`span`,e);return t.className=`text-sm text-base-content/55`,D(t,k(`还没有选择`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),z(()=>{let e=ee(at.DirectoryTree,()=>({key:`replace-${b.value}`,treeData:Dt,selectedKeys:y.value,multiple:!0,toggleSelect:!0,rangeSelect:`replace`,onSelect:e=>{y.value=e}}));M(()=>x(e,p,f))}),_(S,h,()=>y.value.length?{__rue_compiled_branch_key:!0,create:()=>o(Object.assign(e=>{let t=P(),n=ie(`rue:list:end`);D(t,n);let i=[];return z(()=>{let e=y.value||[];i=r(n.parentNode,n,i,e,(e,t)=>String(e),(e,t)=>{let n=v(e),r=v(t);return m((e,t,r)=>se(e,r,()=>o(Object.assign(e=>{let t=A(`span`,e);t.className=`badge badge-outline badge-sm`;let r=k(``);return D(t,r),w(r,()=>String(n.get())),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(i,a)=>{e=i,t=a,n.set(i),r.set(a)})})}),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>o(Object.assign(e=>{let t=A(`span`,e);return t.className=`text-sm text-base-content/55`,D(t,k(`还没有选择`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),e},!0)})),ve.insertBefore(Ie,_e);let Le=N(be);l(Le,V,()=>({title:`父子联动与半选态`,summary:`这一块只看级联勾选和 halfChecked，不再混入 disabled / disableCheckbox，点击父节点时能直接看到整棵子树联动。`,tab:H.checkable,code:kt,preview:o(Object.assign(e=>{let t=dt().content.cloneNode(!0).firstChild,n=t.childNodes[0],i=n.parentNode,a=t.childNodes[1].childNodes[0].childNodes[1].childNodes[0],s=a.parentNode,c=t.childNodes[1].childNodes[1].childNodes[1].childNodes[0],u=c.parentNode,d=t.childNodes[1].childNodes[2].childNodes[1].childNodes[0],f=d.parentNode,p=N(i);l(p,at,()=>({treeData:Ct,selectedKeys:S.value,checkedKeys:C.value,checkable:!0,defaultExpandAll:!0,showLine:!0,blockNode:!0,onSelect:e=>{S.value=e},onCheck:(e,t)=>{C.value=Q(e),te.value=Bt(e,t)}})),i.insertBefore(p,n),_(s,a,()=>S.value.length?{__rue_compiled_branch_key:!0,create:()=>o(Object.assign(e=>{let t=P(),n=ie(`rue:list:end`);D(t,n);let i=[];return z(()=>{let e=S.value||[];i=r(n.parentNode,n,i,e,(e,t)=>String(e),(e,t)=>{let n=v(e),r=v(t);return m((e,t,r)=>se(e,r,()=>o(Object.assign(e=>{let t=A(`span`,e);t.className=`badge badge-outline badge-sm`;let r=k(``);return D(t,r),w(r,()=>String(n.get())),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(i,a)=>{e=i,t=a,n.set(i),r.set(a)})})}),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>o(Object.assign(e=>{let t=A(`span`,e);return t.className=`text-sm text-base-content/55`,D(t,k(`当前没有选中节点`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))});let h=[];return z(()=>{let e=C.value||[];h=r(u,c,h,e,(e,t)=>String(e),(e,t)=>{let n=v(e),r=v(t);return m((e,t,r)=>se(e,r,()=>o(Object.assign(e=>{let t=A(`span`,e);t.className=`badge badge-primary badge-outline badge-sm`;let r=k(``);return D(t,r),w(r,()=>String(n.get())),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(i,a)=>{e=i,t=a,n.set(i),r.set(a)})})}),_(f,d,()=>te.value.length?{__rue_compiled_branch_key:!0,create:()=>o(Object.assign(e=>{let t=P(),n=ie(`rue:list:end`);D(t,n);let i=[];return z(()=>{let e=te.value||[];i=r(n.parentNode,n,i,e,(e,t)=>String(e),(e,t)=>{let n=v(e),r=v(t);return m((e,t,r)=>se(e,r,()=>o(Object.assign(e=>{let t=A(`span`,e);t.className=`badge badge-ghost badge-sm`;let r=k(``);return D(t,r),w(r,()=>String(n.get())),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(i,a)=>{e=i,t=a,n.set(i),r.set(a)})})}),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>o(Object.assign(e=>{let t=A(`span`,e);return t.className=`text-sm text-base-content/55`,D(t,k(`当前没有半选`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))})),be.insertBefore(Le,ye);let K=N(Se);l(K,V,()=>({title:`禁用节点与禁用复选框`,summary:`把 disabled 和 disableCheckbox 单独拆出来看：前者整节点只读，后者只禁用勾选框，不再干扰联动示例。`,tab:H.checkableDisabled,code:At,preview:o(Object.assign(e=>{let t=ft().content.cloneNode(!0).firstChild,n=t.childNodes[0],i=n.parentNode,a=t.childNodes[1].childNodes[0].childNodes[1].childNodes[0],s=a.parentNode,c=N(i);return l(c,at,()=>({treeData:wt,checkedKeys:T.value,checkable:!0,defaultExpandAll:!0,showLine:!0,blockNode:!0,onCheck:e=>{T.value=Q(e)}})),i.insertBefore(c,n),_(s,a,()=>T.value.length?{__rue_compiled_branch_key:!0,create:()=>o(Object.assign(e=>{let t=P(),n=ie(`rue:list:end`);D(t,n);let i=[];return z(()=>{let e=T.value||[];i=r(n.parentNode,n,i,e,(e,t)=>String(e),(e,t)=>{let n=v(e),r=v(t);return m((e,t,r)=>se(e,r,()=>o(Object.assign(e=>{let t=A(`span`,e);t.className=`badge badge-outline badge-sm`;let r=k(``);return D(t,r),w(r,()=>String(n.get())),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(i,a)=>{e=i,t=a,n.set(i),r.set(a)})})}),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>o(Object.assign(e=>{let t=A(`span`,e);return t.className=`text-sm text-base-content/55`,D(t,k(`当前没有勾选`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))})),Se.insertBefore(K,xe);let Re=N(we);l(Re,V,()=>({title:`Simple Mode + Search`,summary:`扁平数据直入后，内置搜索会保持命中节点的祖先链，不会把层级上下文切断。`,tab:H.simple,code:jt,preview:j(()=>{let e=P(),t=J().content.cloneNode(!0),n=t.firstChild,r=n.childNodes[0],i=r.parentNode,a=n.childNodes[1].childNodes[1].childNodes[0],o=a.parentNode;e.appendChild(t);let s=N(i);return l(s,at,()=>({treeData:Tt,treeDataSimpleMode:{id:`nodeId`,pId:`parentId`,rootPId:0},fieldNames:{title:`name`,key:`code`},selectedKeys:E.value,allowSearch:!0,defaultExpandAll:!0,onSelect:e=>{E.value=e}})),i.insertBefore(s,r),z(()=>{let e=JSON.stringify(E.value);M(()=>x(e,o,a))}),e},!0)})),we.insertBefore(Re,Ce);let q=N(Ee);l(q,V,()=>({title:`Async Load 与自定义标题`,summary:`第一次展开时再拉子节点，同时用 titleRender 和 icon 把状态信息塞回每一行。`,tab:H.async,code:Mt,preview:j(()=>{let e=P(),n=pt().content.cloneNode(!0),r=n.firstChild,i=r.childNodes[0],a=i.parentNode,s=r.childNodes[1].childNodes[0].childNodes[1].childNodes[0],c=s.parentNode,u=r.childNodes[1].childNodes[1].childNodes[1].childNodes[0],d=u.parentNode;e.appendChild(n);let f=N(a);return l(f,at,()=>({treeData:fe.value,selectedKeys:O.value,expandedKeys:re.value,loadData:me,showLine:!0,showIcon:!0,blockNode:!0,titleRender:({node:e,loading:n})=>j(r=>{let i=ot().content.cloneNode(!0).firstChild,a=i.childNodes[0].childNodes[0],s=a.parentNode,c=i.childNodes[1].childNodes[0],l=c.parentNode;return z(()=>{let t=e.title;M(()=>x(t,s,a))}),_(l,c,()=>n?{__rue_compiled_branch_key:!0,create:()=>o(Object.assign(e=>{let t=k(`loading`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>t(()=>e.children.length?{__rue_compiled_branch_key:!0,create:()=>o(Object.assign(e=>{let t=k(`branch`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>o(Object.assign(e=>{let t=k(`leaf`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))})}),i}),onSelect:e=>{O.value=e},onExpand:e=>{re.value=e}})),a.insertBefore(f,i),z(()=>{let e=JSON.stringify(re.value);M(()=>x(e,c,s))}),z(()=>{let e=JSON.stringify(O.value);M(()=>x(e,d,u))}),e},!0)})),Ee.insertBefore(q,Te);let ze=N(Oe);l(ze,V,()=>({title:`allowDrop 策略与拖拽占位`,summary:`allowDrop 可以把 folder / file 的落点规则写清楚；hover 时 Tree 会直接给出插前、插后或放入占位提示。`,tab:H.drag,code:Ft,preview:o(Object.assign(e=>{let t=mt().content.cloneNode(!0).firstChild,n=t.childNodes[0],r=n.parentNode,i=t.childNodes[1].childNodes[0].childNodes[1].childNodes[0],a=i.parentNode,o=N(r);l(o,at,()=>({treeData:L.value,draggable:!0,blockNode:!0,defaultExpandAll:!0,allowDrop:({dropNode:e,dropToGap:t})=>t||e.raw.kind!==`file`,titleRender:({node:e})=>j(t=>{let n=st().content.cloneNode(!0).firstChild,r=n.childNodes[1],i=n.childNodes[0].childNodes[0],a=i.parentNode,o=n.childNodes[1].childNodes[0],s=o.parentNode;return z(()=>{u(r,e.raw.kind===`folder`?`badge badge-ghost badge-xs`:`badge badge-outline badge-xs`)}),z(()=>{let t=e.title;M(()=>x(t,a,i))}),z(()=>{let t=e.raw.kind;M(()=>x(t,s,o))}),n}),onDrop:e=>{L.value=Wt(L.value,e),R.value=`${String(e.dragNode.key)} -> ${String(e.node.key)} (${e.dropToGap?e.dropPosition<0?`before`:`after`:`inside`})`}})),r.insertBefore(o,n);let s=k(``);return a.insertBefore(s,i),a.removeChild(i),w(s,()=>R.value),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))})),Oe.insertBefore(ze,De);let Be=N(Ae);l(Be,V,()=>({title:`Virtual Scroll`,summary:`长列表下只渲染可见窗口，height 和 itemHeight 负责限定视口和估算切片范围。`,tab:H.virtual,code:It,preview:j(()=>{let e=P(),t=ht().content.cloneNode(!0),n=t.firstChild,r=n.childNodes[0],i=r.parentNode,a=n.childNodes[1].childNodes[0].childNodes[1].childNodes[0],o=a.parentNode,s=n.childNodes[1].childNodes[1].childNodes[1].childNodes[0],c=s.parentNode;e.appendChild(t);let u=N(i);return l(u,at,()=>({treeData:Y,selectedKeys:ae.value,height:320,itemHeight:42,virtual:!0,blockNode:!0,onSelect:e=>{ae.value=e}})),i.insertBefore(u,r),z(()=>{let e=Y.length;M(()=>x(e,o,a))}),z(()=>{let e=JSON.stringify(ae.value);M(()=>x(e,c,s))}),e},!0)})),Ae.insertBefore(Be,ke);let Ve=N(Me);l(Ve,V,()=>({title:`Virtual + Async Load 场景页`,summary:`把 virtual、height、itemHeight 和 loadData 合在一起，就能接超长目录或资源树，只在展开分支时再注入子节点。`,tab:H.virtualAsync,code:Lt,preview:j(()=>{let e=P(),n=gt().content.cloneNode(!0),r=n.firstChild,i=r.childNodes[0],a=i.parentNode,s=r.childNodes[1].childNodes[0].childNodes[1].childNodes[0],c=s.parentNode,u=r.childNodes[1].childNodes[1].childNodes[1].childNodes[0],d=u.parentNode,f=r.childNodes[1].childNodes[2].childNodes[1].childNodes[0],p=f.parentNode;e.appendChild(n);let m=N(a);return l(m,at,()=>({treeData:oe.value,selectedKeys:le.value,expandedKeys:ce.value,height:340,itemHeight:40,virtual:!0,showIcon:!0,blockNode:!0,loadData:he,titleRender:({node:e,loading:n})=>j(r=>{let i=ot().content.cloneNode(!0).firstChild,a=i.childNodes[0].childNodes[0],s=a.parentNode,c=i.childNodes[1].childNodes[0],l=c.parentNode;return z(()=>{let t=e.title;M(()=>x(t,s,a))}),_(l,c,()=>n?{__rue_compiled_branch_key:!0,create:()=>o(Object.assign(e=>{let t=k(`loading`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>t(()=>e.children.length?{__rue_compiled_branch_key:!0,create:()=>o(Object.assign(e=>{let t=k(`loaded`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>t(()=>e.isLeaf?{__rue_compiled_branch_key:!0,create:()=>o(Object.assign(e=>{let t=k(`leaf`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>o(Object.assign(e=>{let t=k(`lazy`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))})})}),i}),onSelect:e=>{le.value=e},onExpand:e=>{ce.value=e}})),a.insertBefore(m,i),z(()=>{let e=oe.value.length;M(()=>x(e,c,s))}),z(()=>{let e=de.get();M(()=>x(e,d,u))}),z(()=>{let e=JSON.stringify(ce.value);M(()=>x(e,p,f))}),e},!0)})),Me.insertBefore(Ve,je);let He=N(W);l(He,V,()=>({title:`展示基础递归 示例`,summary:`基础的 TreeView 行为没有删掉，只是并进 design 页面里，方便对比“直接改数据”这类递归写法。`,tab:H.legacy,code:Rt,preview:o(Object.assign(e=>{let t=_t().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0].childNodes[0],r=n.parentNode,i=N(r);return l(i,qt,()=>({model:pe})),r.insertBefore(i,n),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))})),W.insertBefore(He,U);let Ue=N(Ne);return l(Ue,xt,()=>({rows:zt})),Ne.insertBefore(Ue,G),{__rue_compiled_host:s,__rue_compiled_roots:[s]}},{__rue_compiled_explicit_roots:!0})))})),e=>B(()=>{})))};export{Jt as default};