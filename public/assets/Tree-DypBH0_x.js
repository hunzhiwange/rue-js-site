import{$t as e,At as t,C as n,Ct as r,Dn as i,Dt as a,E as o,Et as s,Mt as c,N as l,P as u,Pt as d,Q as f,Qt as p,T as m,Vt as h,W as g,Y as _,Zt as v,_n as y,_t as b,at as x,b as S,bn as ee,ct as C,dt as w,et as T,gn as E,gt as te,hn as D,in as O,k,kn as A,mn as ne,nt as j,pn as M,qt as N,rn as P,rt as re,sn as F,st as I,tn as L,tt as ie,ut as R,vn as z,vt as B,w as ae,wn as V,x as oe,xn as se,xt as H,yn as ce,z as le}from"./rue-runtime-HIMg8Lz8.js";import{r as ue}from"./SidebarPlaygroundDesign-Cj7sFoQ4.js";import{t as U}from"./PreviewBlock-Dc0KnPUP.js";var de=z(`<div><span class="h-[2px] flex-1 rounded-full bg-primary/60"></span><span class="rounded-full bg-primary/10 px-2 py-1 text-[10px]">插入到此处</span></div>`),fe=z(`<span class="inline-flex size-6 items-center justify-center text-base-content/60"><!--rue:text-hole:0--></span>`),pe=z(`<span class="inline-flex size-6 shrink-0 items-center justify-center rounded-md bg-base-200/80 text-[10px] font-semibold text-base-content/60"><!--rue:text-hole:0--></span>`),W=z(`<span hidden="" aria-hidden="true"></span>`),me=z(`<div aria-hidden="true"></div>`),he=z(`<div><!--rue:text-hole:0--><button type="button"><!--rue:text-hole:1--></button><!--rue:text-hole:2--><!--rue:text-hole:3--><!--rue:text-hole:4--><button type="button"><!--rue:text-hole:5--><!--rue:text-hole:6--></button><!--rue:text-hole:7--></div>`),ge=z(`<div><!--rue:text-hole:0--></div>`),_e=z(`<section data-rue-tree="true"><!--rue:text-hole:0--><div data-rue-tree-body="true"></div></section>`),ve=new Map,ye=new WeakMap,be=new WeakMap,xe=8,Se=e=>typeof e==`object`&&!!e||typeof e==`function`,Ce=(e,t)=>e.length===t.length&&e.every((e,n)=>e===t[n]),we=(e,t,n)=>e.treeDataSimpleMode===t&&e.fieldNames===n,Te=(e,t,n,r,i)=>(e.treeData===t||Ce(e.treeDataRoots,n))&&we(e,r,i),Ee=(e,t,n,r)=>{let i=[Se(e)?ye.get(e):void 0],a=t[0];Se(a)&&a!==e&&i.push(be.get(a));for(let a of i){let i=a?.find(i=>Te(i,e,t,n,r));if(i)return i}},De=(e,t,n)=>{if(!Se(t))return;let r=e.get(t);if(!r){e.set(t,[n]);return}let i=r.findIndex(e=>Te(e,n.treeData,n.treeDataRoots,n.treeDataSimpleMode,n.fieldNames));i>=0?r[i]=n:(r.push(n),r.length>xe&&r.shift())},Oe=e=>{De(ye,e.treeData,e),De(be,e.treeDataRoots[0],e)},ke={title:`title`,key:`key`,children:`children`,disabled:`disabled`,selectable:`selectable`,checkable:`checkable`,disableCheckbox:`disableCheckbox`,isLeaf:`isLeaf`,icon:`icon`,className:`className`,id:`id`,pId:`pId`},G=(...e)=>e.filter(Boolean).join(` `),Ae=e=>typeof e==`object`&&!!e&&!Array.isArray(e),je=e=>typeof e==`string`||typeof e==`number`,K=e=>`${typeof e}:${String(e)}`,Me=e=>{let t=[],n=new Set;return(e??[]).forEach(e=>{let r=K(e);n.has(r)||(n.add(r),t.push(e))}),t},q=(e,t)=>e?t?`${e} ${t}`:e:t??``,Ne=()=>C(h(Object.assign(e=>{let t=E(`span`,e);return t.className=`loading loading-spinner loading-xs`,t.setAttribute(`aria-hidden`,`true`),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),e=>T(()=>{})),Pe=e=>{let n=x(e.expanded),r=x(e.hidden);return C(t(()=>{let e=b(),t=B(`svg`,e);w(e,t),H(t,`viewBox`,`0 0 16 16`),H(t,`fill`,`none`),H(t,`stroke`,`currentColor`),H(t,`strokeWidth`,`1.8`),V(()=>{f(t,q(`size-4 transition-transform duration-200`,r.get()?`opacity-0`:n.get()?`rotate-90`:``))}),H(t,`aria-hidden`,`true`);let i=B(`path`,t);return w(t,i),H(i,`strokeLinecap`,`round`),H(i,`strokeLinejoin`,`round`),H(i,`d`,`m6 3.5 4 4.5-4 4.5`),e},!0),e=>T(()=>{n.set(e.expanded),r.set(e.hidden)}),()=>e)},Fe=()=>C(t(()=>{let e=b(),t=B(`svg`,e);w(e,t),H(t,`viewBox`,`0 0 16 16`),H(t,`fill`,`currentColor`),f(t,`size-4`),H(t,`aria-hidden`,`true`);let n=B(`path`,t);return w(t,n),H(n,`d`,`M5 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM11 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM11 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM5 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM11 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z`),e},!0),e=>T(()=>{})),Ie=e=>{let n=x(e.expanded);return C(t(()=>{let e=b(),t=B(`svg`,e);w(e,t),H(t,`viewBox`,`0 0 16 16`),H(t,`fill`,`none`),H(t,`stroke`,`currentColor`),H(t,`strokeWidth`,`1.5`),f(t,`size-4`),H(t,`aria-hidden`,`true`);let r=B(`path`,t);return w(t,r),H(r,`strokeLinecap`,`round`),H(r,`strokeLinejoin`,`round`),V(()=>{H(r,`d`,String(n.get()?`M2.5 6.5h11l-1.2 6h-9.1l-1.2-6ZM2.5 5V3.5h4l1.2 1.5h5.8v1.5`:`M2.5 4.5h4l1.2 1.5h5.8v6.5h-11v-8Z`))}),e},!0),e=>T(()=>{n.set(e.expanded)}),()=>e)},Le=()=>C(t(()=>{let e=b(),t=B(`svg`,e);w(e,t),H(t,`viewBox`,`0 0 16 16`),H(t,`fill`,`none`),H(t,`stroke`,`currentColor`),H(t,`strokeWidth`,`1.5`),f(t,`size-4`),H(t,`aria-hidden`,`true`);let n=B(`path`,t);w(t,n),H(n,`strokeLinecap`,`round`),H(n,`strokeLinejoin`,`round`),H(n,`d`,`M4 2.5h5l3 3v8H4v-11Z`);let r=B(`path`,t);return w(t,r),H(r,`strokeLinecap`,`round`),H(r,`strokeLinejoin`,`round`),H(r,`d`,`M9 2.5v3h3`),e},!0),e=>T(()=>{})),J=(e,t,n)=>e[n?.[t]??ke[t]],Re=(e,t)=>J(e,`title`,t)??e.title??e.key,Y=e=>new Set(Me(e).map(K)),ze=(e,t)=>[e.roots.map(e=>e.keyText).join(`|`),t.directoryMode?`directory`:`tree`,String(t.expandAction??!1),String(t.rangeSelect??!1)].join(`::`),Be=e=>e==null||typeof e==`boolean`?``:typeof e==`string`||typeof e==`number`?String(e):Array.isArray(e)?e.map(e=>Be(e)).filter(Boolean).join(` `):typeof e==`object`?[`title`,`label`,`name`,`text`,`description`,`children`].map(t=>Be(e[t])).filter(Boolean).join(` `):``,Ve=(e,t,n)=>{if(!t)return e;let r=Ae(t)?t:void 0,i=r?.id??n?.id??ke.id,a=r?.pId??n?.pId??ke.pId,o=r?.rootPId??0,s=n?.children??ke.children,c=new Map;e.forEach((e,t)=>{let n=e[i]??e.key??t;c.set(n,{...e,[s]:[]})});let l=[];return e.forEach((e,t)=>{let n=e[i]??e.key??t,r=e[a],u=c.get(n);if(!u)return;if(r==null||r===o||!c.has(r)){l.push(u);return}let d=c.get(r);if(!d){l.push(u);return}let f=d[s]??[];f.push(u),d[s]=f}),l},He=(e,t)=>{let n=[],r={},i=(e,a,o,s)=>{let c=J(e,`key`,t),l=je(c)?c:o,u=K(l),d=J(e,`isLeaf`,t),f={key:l,keyText:u,title:Re(e,t),depth:a,children:[],raw:e,disabled:!!J(e,`disabled`,t),selectable:J(e,`selectable`,t)!==!1,checkable:J(e,`checkable`,t)!==!1,disableCheckbox:!!J(e,`disableCheckbox`,t),isLeaf:!1,className:J(e,`className`,t),icon:J(e,`icon`,t),parentKeyText:s};n.push(f),r[u]=f;let p=J(e,`children`,t);return f.children=Array.isArray(p)?p.map((e,t)=>i(e,a+1,`${o}-${t}`,u)):[],f.isLeaf=d===!0||d!==!1&&f.children.length===0,f};return{roots:e.map((e,t)=>i(e,0,`node-${t}`)),flat:n,byKeyText:r}},Ue=e=>{let t=[],n=e=>{!e.disabled&&e.checkable&&!e.disableCheckbox&&t.push(e.keyText),e.children.forEach(e=>n(e))};return n(e),t},We=e=>{let t=[],n=e=>{t.push(e.key),e.children.forEach(e=>n(e))};return n(e),t},Ge=(e,t,n)=>{let r=new Set,i=new Set,a={},o=e=>{let s=!e.disabled&&e.checkable&&!e.disableCheckbox,c=e.children.map(e=>o(e)).filter(e=>e.participates),l=t.has(e.keyText),u=l,d=!1;if(!n&&c.length>0){let e=c.every(e=>e.checked),t=c.some(e=>e.checked||e.halfChecked);u=l||e,d=!u&&t}let f={checked:u,halfChecked:d,participates:s||c.length>0};return a[e.keyText]=f,u&&s&&r.add(e.keyText),d&&s&&i.add(e.keyText),f};return e.forEach(e=>o(e)),{checkedKeys:r,halfCheckedKeys:i,stateMap:a}},Ke=(e,t,n,r)=>{let i=new Set(e),a=new Set(t),o=n.filter(e=>i.has(e.keyText)).map(e=>e.key).filter(je);return r?{checked:o,halfChecked:n.filter(e=>a.has(e.keyText)).map(e=>e.key).filter(je)}:o},qe=(e,t,n,r)=>{if(!n){let n=[],r=e=>{n.push({node:e,matched:!1}),t.has(e.keyText)&&e.children.forEach(e=>r(e))};return e.forEach(e=>r(e)),n}let i=e=>{let t=r(e),n=e.children.flatMap(e=>i(e));if(!t&&n.length===0)return[];if(t){let t=[{node:e,matched:!0}],n=e=>{t.push({node:e,matched:!1}),e.children.forEach(e=>n(e))};return e.children.forEach(e=>n(e)),t}return[{node:e,matched:!1},...n]};return e.flatMap(e=>i(e))},Je=(e,t,n)=>t?typeof n==`function`?n(t,e):n===!1||Be(e.title).toLowerCase().includes(t.toLowerCase()):!0,Ye=(e,t,n)=>{let r=t.parentKeyText;for(;r;){if(r===e.keyText)return!0;r=n[r]?.parentKeyText}return!1},Xe=e=>{let t=!!e,n=Ae(e)?e:void 0;return{enabled:t,icon:n?.icon,nodeDraggable:r=>t?typeof e==`function`?e(r):n&&typeof n.nodeDraggable==`function`?n.nodeDraggable(r):!0:!1}},Ze=(e,t,n,r,i)=>{if(!i||!n||!r)return{items:e,topSpacer:0,bottomSpacer:0};let a=r+2,o=Math.max(1,Math.ceil(n/a))+12,s=Math.max(0,e.length-o),c=Math.min(s,Math.max(0,Math.floor(t/a)-6)),l=Math.min(e.length,c+o);return{items:e.slice(c,l),topSpacer:c*a,bottomSpacer:Math.max(0,(e.length-l)*a)}},Qe=e=>{if(e===-1)return`before`;if(e===1)return`after`;if(e===0)return`inside`},$e=(e,t)=>e.map(e=>t[e]?.key).filter(je),et=(e,t)=>{if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0},tt=e=>{switch(e){case`small`:case`sm`:return{headerPadding:`px-4 py-3`,bodyPadding:`px-3 py-3`,rowPadding:`py-1.5`,textClass:`text-sm`,rowMinHeight:36,rowEstimate:42};case`large`:case`lg`:return{headerPadding:`px-5 py-4`,bodyPadding:`px-4 py-4`,rowPadding:`py-2.5`,textClass:`text-[0.95rem]`,rowMinHeight:44,rowEstimate:50};default:return{headerPadding:`px-4 py-3.5`,bodyPadding:`px-3.5 py-3.5`,rowPadding:`py-2`,textClass:`text-sm`,rowMinHeight:40,rowEstimate:46}}},nt=e=>{switch(e){case`error`:return`border-error/55 shadow-[0_0_0_1px_rgba(248,113,113,0.14)]`;case`warning`:return`border-warning/55 shadow-[0_0_0_1px_rgba(251,191,36,0.14)]`;default:return``}},rt=e=>{let{renderSwitcher:n,renderDragHandle:a,renderGapPlaceholder:o,renderNodeIcon:c}=ee(`useSetup:0:0`,()=>({renderSwitcher:(t,n,r,i,a,o)=>{let{renderProps:s}=ee(`useSetup:0:0`,()=>({renderProps:{node:t,expanded:n,selected:r,checked:i,halfChecked:a,loading:o}}));return typeof e.switcherIcon==`function`?e.switcherIcon(s):e.switcherIcon===void 0?o?re(Ne,()=>({})):re(Pe,()=>({expanded:n,hidden:t.isLeaf&&t.children.length===0})):e.switcherIcon},renderDragHandle:t=>{let{canDragHandle:n,__rue_phase2_canDragHandle:r}=ee(`useSetup:0:0`,()=>{let n=u(()=>e.dragConfig.enabled&&e.dragConfig.nodeDraggable(t)&&!e.disabled&&!t.disabled);return n.get(),{canDragHandle:n,__rue_phase2_canDragHandle:n}});return!n.get()||e.dragConfig.icon===!1?null:h(Object.assign(n=>{let r=E(`span`,n);r.setAttribute(`aria-hidden`,`true`);let a;V(()=>{let t=q(`inline-flex size-6 shrink-0 cursor-grab items-center justify-center rounded-lg text-base-content/35 transition group-hover:text-base-content/55`,e.classNames?.dragHandle),n=t==null?``:String(t);Object.is(a,n)||(a=n,r.className=n)});let o;V(()=>{let t=e.styles?.dragHandle;Object.is(o,t)||(o=t,s(r,t))}),r.setAttribute(`data-rue-tree-drag-handle`,`true`);let c=n=>{let r=n=>e.handleDragMouseDown(t,n);typeof r==`function`&&r(n)};return r.addEventListener(`mousedown`,c),i(()=>r.removeEventListener(`mousedown`,c)),ie(()=>{let t=e.dragConfig.icon;return t==null?{__rue_compiled_branch_key:null,create:()=>re(Fe,()=>({}))}:{__rue_compiled_branch_key:t,create:()=>h(Object.assign(e=>{let n=y(typeof t==`string`||typeof t==`number`||typeof t==`bigint`?t:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}}).__rue_compiled_mount(r),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0}))},renderGapPlaceholder:(e,t)=>h(Object.assign(n=>{let r=de().content.cloneNode(!0).firstChild,i=r,a;V(()=>{let e=G(`pointer-events-none absolute inset-x-0 z-10 flex items-center gap-2 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-primary/85`,t===`before`?`-top-2.5`:`-bottom-2.5`),n=e==null?``:String(e);Object.is(a,n)||(a=n,i.className=n)});let o;V(()=>{let t={paddingLeft:`${e.depth*18+20}px`};Object.is(o,t)||(o=t,s(i,t))});let c;return V(()=>{let e=t;Object.is(c,e)||(c=e,e==null||e===!1?i.removeAttribute(`data-rue-tree-drop-placeholder`):i.setAttribute(`data-rue-tree-drop-placeholder`,String(e)))}),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})),renderNodeIcon:(t,n,r,i,a,o)=>{let{renderProps:s}=ee(`useSetup:0:0`,()=>({renderProps:{node:t,expanded:n,selected:r,checked:i,halfChecked:a,loading:o}}));return typeof e.icon==`function`?e.icon(s):e.icon===void 0?t.icon===void 0?e.showIcon?e.directoryMode?h(Object.assign(e=>{let r=fe().content.cloneNode(!0).firstChild,i=r.childNodes[0],a=i.parentNode;return j(a,i,()=>t.children.length>0||!t.isLeaf?{__rue_compiled_branch_key:!0,create:()=>re(Ie,()=>({expanded:n}))}:{__rue_compiled_branch_key:!1,create:()=>re(Le,()=>({}))}),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})):h(Object.assign(e=>{let n=pe().content.cloneNode(!0).firstChild,r=n.childNodes[0],i=r.parentNode;return j(i,r,()=>t.children.length>0||!t.isLeaf?{__rue_compiled_branch_key:!0,create:()=>h(Object.assign(e=>{let t=y(`DIR`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>h(Object.assign(e=>{let t=y(`DOC`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})):null:t.icon:e.icon}}));return t(l=>{let u=b(),d=W().content.cloneNode(!0),g=d.firstChild;u.appendChild(d),H(g,`aria-hidden`,`true`),V(()=>{H(g,`data-rue-tree-content-version`,String(String(e.version)))});let _=te(`rue:slot:anchor`);w(u,_),V(()=>{let t=e.snapshot.virtualSlice.topSpacer>0?h(Object.assign(t=>{let n=me().content.cloneNode(!0).firstChild,r=n,i;return V(()=>{let t=`${e.snapshot.virtualSlice.topSpacer}px`,n=t==null?``:String(t);Object.is(i,n)||(i=n,r.style.height=n)}),r.setAttribute(`aria-hidden`,`true`),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})):``;A(()=>R(t,u,_))});let v=te(`rue:slot:anchor`);w(u,v),V(()=>{let l=t(()=>{let l=b(),u=te(`rue:slot:anchor`);return w(l,u),V(()=>{let d=e.snapshot.virtualSlice.items.map(({node:l})=>{let u=e.snapshot.checkState.stateMap[l.keyText]??{checked:!1,halfChecked:!1,participates:!0},d=e.snapshot.searchValue?!0:e.snapshot.expandedKeyTextSet.has(l.keyText),m=e.snapshot.selectedKeyTextSet.has(l.keyText),g=e.loadingKeyTexts.includes(l.keyText),_=!!e.hasLoadData||!!l.children.length||!l.isLeaf,v=e.snapshot.dragState.overKeyText===l.keyText,x=e.dragConfig.enabled&&e.dragConfig.nodeDraggable(l)&&!e.disabled&&!l.disabled,S=v?Qe(e.snapshot.dragState.dropPosition):void 0,ee={node:l,expanded:d,selected:m,checked:u.checked,halfChecked:u.halfChecked,loading:g},C=e.titleRender?.(ee);return t(ee=>{let T=he().content.cloneNode(!0).firstChild,D=T,O=T.childNodes[1],k=T.childNodes[5],ne=T.childNodes[0],N=ne.parentNode,P=T.childNodes[1].childNodes[0],re=P.parentNode,F=T.childNodes[2],I=F.parentNode,L=T.childNodes[3],z=L.parentNode,ae=T.childNodes[4],oe=ae.parentNode,se=T.childNodes[5].childNodes[0],ce=se.parentNode,le=T.childNodes[5].childNodes[1],ue=le.parentNode,U=T.childNodes[6],de=U.parentNode;V(()=>{f(D,q(G(`rue-tree-node group relative flex min-w-0 items-center gap-1 rounded-lg py-0.5 pr-2 text-base-content outline-none transition-colors duration-150`,e.disabled||l.disabled?`opacity-55`:S===`inside`?`bg-primary/10 ring-1 ring-primary/20`:S?`bg-primary/5`:`hover:bg-base-200/65`,e.showLine&&l.depth>0&&`border-l border-base-300/60`,l.className),e.classNames?.node))}),V(()=>{let t={paddingLeft:`${l.depth*18+8}px`,height:e.fixedVirtualRowHeight?`${e.fixedVirtualRowHeight}px`:void 0,minHeight:e.fixedVirtualRowHeight?void 0:`${e.componentSize.rowMinHeight}px`,...e.styles?.node};s(D,t)}),V(()=>{H(D,`data-rue-tree-node`,String(l.keyText))}),V(()=>{H(D,`data-rue-tree-drop-intent`,String(S??``))}),V(()=>{H(D,`data-rue-tree-drop-position`,String(v?String(e.snapshot.dragState.dropPosition??0):``))}),V(()=>{H(D,`draggable`,String(x))});let fe=t=>{let n=t=>e.handleDragStartNode(l,t);typeof n==`function`&&n(t)};D.addEventListener(`dragstart`,fe),p(()=>D.removeEventListener(`dragstart`,fe));let pe=t=>{let n=t=>e.handleDragEnterNode(l,t);typeof n==`function`&&n(t)};D.addEventListener(`dragenter`,pe),p(()=>D.removeEventListener(`dragenter`,pe));let W=t=>{let n=t=>e.handleDragOverNode(l,t);typeof n==`function`&&n(t)};D.addEventListener(`dragover`,W),p(()=>D.removeEventListener(`dragover`,W));let me=t=>{let n=t=>e.handleDragLeaveNode(l,t);typeof n==`function`&&n(t)};D.addEventListener(`dragleave`,me),p(()=>D.removeEventListener(`dragleave`,me));let ge=t=>{let n=t=>e.handleDragEndNode(l,t);typeof n==`function`&&n(t)};D.addEventListener(`dragend`,ge),p(()=>D.removeEventListener(`dragend`,ge));let _e=t=>{let n=t=>e.handleDropNode(l,t);typeof n==`function`&&n(t)};D.addEventListener(`drop`,_e),p(()=>D.removeEventListener(`drop`,_e)),H(O,`type`,`button`),V(()=>{f(O,q(G(`inline-flex size-6 shrink-0 items-center justify-center rounded-md text-base-content/55 transition-colors duration-150 hover:bg-base-200 hover:text-base-content disabled:cursor-default disabled:opacity-30`,!_&&`pointer-events-none`),e.classNames?.switcher))}),V(()=>{let t=e.styles?.switcher;s(O,t)}),V(()=>{r(O,!_||e.disabled||l.disabled)}),V(()=>{H(O,`aria-label`,String(d?`折叠节点`:`展开节点`))});let ve=t=>{let n=t=>e.handleExpandToggle(l,t);typeof n==`function`&&n(t)};O.addEventListener(`click`,ve),p(()=>O.removeEventListener(`click`,ve)),H(k,`type`,`button`),V(()=>{f(k,q(G(`flex min-w-0 items-center gap-2 rounded-md px-2 text-left transition-colors duration-150`,e.componentSize.rowPadding,e.blockNode?`flex-1 justify-between`:`max-w-full`,m?`selected bg-primary/12 text-primary`:`text-base-content hover:bg-base-200/70`,(e.disabled||l.disabled||!e.selectable||!l.selectable)&&`cursor-not-allowed opacity-55`),e.classNames?.label))}),V(()=>{let t=e.styles?.label;s(k,t)}),V(()=>{r(k,e.disabled||l.disabled||!e.selectable||!l.selectable)}),V(()=>{H(k,`draggable`,String(x))});let ye=t=>{let n=t=>{t.stopPropagation(),e.handleDragStartNode(l,t)};typeof n==`function`&&n(t)};k.addEventListener(`dragstart`,ye),p(()=>k.removeEventListener(`dragstart`,ye));let be=t=>{let n=t=>{t.stopPropagation(),e.handleDragEnterNode(l,t)};typeof n==`function`&&n(t)};k.addEventListener(`dragenter`,be),p(()=>k.removeEventListener(`dragenter`,be));let xe=t=>{let n=t=>{t.stopPropagation(),e.handleDragOverNode(l,t)};typeof n==`function`&&n(t)};k.addEventListener(`dragover`,xe),p(()=>k.removeEventListener(`dragover`,xe));let Se=t=>{let n=t=>{t.stopPropagation(),e.handleDragLeaveNode(l,t)};typeof n==`function`&&n(t)};k.addEventListener(`dragleave`,Se),p(()=>k.removeEventListener(`dragleave`,Se));let Ce=t=>{let n=t=>{t.stopPropagation(),e.handleDragEndNode(l,t)};typeof n==`function`&&n(t)};k.addEventListener(`dragend`,Ce),p(()=>k.removeEventListener(`dragend`,Ce));let we=t=>{let n=t=>{t.stopPropagation(),e.handleDropNode(l,t)};typeof n==`function`&&n(t)};k.addEventListener(`drop`,we),p(()=>k.removeEventListener(`drop`,we));let Te=t=>{let n=t=>e.handleLabelMouseDown(l,t);typeof n==`function`&&n(t)};k.addEventListener(`mousedown`,Te),p(()=>k.removeEventListener(`mousedown`,Te));let Ee=t=>{let n=t=>e.handleLabelActivate(l,t,`click`);typeof n==`function`&&n(t)};k.addEventListener(`click`,Ee),p(()=>k.removeEventListener(`click`,Ee));let De=t=>{let n=t=>e.handleLabelActivate(l,t,`doubleClick`);typeof n==`function`&&n(t)};k.addEventListener(`dblclick`,De),p(()=>k.removeEventListener(`dblclick`,De));let Oe=t=>{let n=t=>e.handleLabelContextMenu(l,t);typeof n==`function`&&n(t)};return k.addEventListener(`contextmenu`,Oe),p(()=>k.removeEventListener(`contextmenu`,Oe)),V(()=>{let e=S===`before`?o(l,`before`):``;A(()=>R(e,N,ne))}),V(()=>{let e=n(l,d,m,u.checked,u.halfChecked,g);A(()=>R(e,re,P))}),j(I,F,()=>e.checkable?{__rue_compiled_branch_key:!0,create:()=>h(Object.assign(t=>{let n=E(`button`,t);n.setAttribute(`type`,`button`),n.setAttribute(`role`,`checkbox`);let r;V(()=>{let e=u.halfChecked?`mixed`:u.checked?`true`:`false`;Object.is(r,e)||(r=e,e==null||e===!1?n.removeAttribute(`aria-checked`):n.setAttribute(`aria-checked`,String(e)))});let a;V(()=>{let t=!!(e.disabled||l.disabled||l.disableCheckbox||!l.checkable);Object.is(a,t)||(a=t,n.disabled=t)});let o;V(()=>{let t=q(G(`inline-flex size-4 shrink-0 items-center justify-center rounded border text-[11px] font-semibold leading-none transition-colors duration-150`,u.checked||u.halfChecked?`border-primary bg-primary text-primary-content`:`border-base-content/35 bg-base-100 text-transparent hover:border-primary/60`,(e.disabled||l.disabled||l.disableCheckbox||!l.checkable)&&`cursor-not-allowed opacity-45`),e.classNames?.checkbox),r=t==null?``:String(t);Object.is(o,r)||(o=r,n.className=r)});let c;V(()=>{let t=e.styles?.checkbox;Object.is(c,t)||(c=t,s(n,t))});let d=t=>{let n=t=>e.handleCheck(l,t);typeof n==`function`&&n(t)};return n.addEventListener(`click`,d),i(()=>n.removeEventListener(`click`,d)),ie(()=>u.halfChecked?{__rue_compiled_branch_key:!0,create:()=>h(Object.assign(e=>{let t=y(`−`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>ie(()=>u.checked?{__rue_compiled_branch_key:!0,create:()=>h(Object.assign(e=>{let t=y(`✓`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>h(Object.assign(e=>{let t=y(``);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))})}).__rue_compiled_mount(n),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>h(Object.assign(e=>{let t=b();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),V(()=>{let e=a(l);A(()=>R(e,z,L))}),V(()=>{let t=e.showIcon||l.icon!==void 0||e.icon!==void 0?c(l,d,m,u.checked,u.halfChecked,g):``;A(()=>R(t,oe,ae))}),V(()=>{let n=e.titleRender?C:t(()=>{let e=b(),t=B(`span`,e);w(e,t),f(t,`min-w-0 truncate`);let n=te(`rue:slot:anchor`);return w(t,n),V(()=>{let e=l.title;A(()=>R(e,t,n))}),e},!0);A(()=>R(n,ce,se))}),j(ue,le,()=>S?{__rue_compiled_branch_key:!0,create:()=>h(Object.assign(e=>{let t=E(`span`,e);t.className=`badge badge-primary badge-outline badge-xs shrink-0`;let n;return V(()=>{let e=S;Object.is(n,e)||(n=e,e==null||e===!1?t.removeAttribute(`data-rue-tree-drop-placeholder`):t.setAttribute(`data-rue-tree-drop-placeholder`,String(e)))}),ie(()=>S===`inside`?{__rue_compiled_branch_key:!0,create:()=>h(Object.assign(e=>{let t=y(`放入`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>ie(()=>S===`before`?{__rue_compiled_branch_key:!0,create:()=>h(Object.assign(e=>{let t=y(`插前`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>h(Object.assign(e=>{let t=y(`插后`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))})}).__rue_compiled_mount(t),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>ie(()=>m?{__rue_compiled_branch_key:!0,create:()=>h(Object.assign(e=>{let t=E(`span`,e);return t.className=`badge badge-primary badge-xs shrink-0`,M(t,y(`选中`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>h(Object.assign(e=>{let t=b();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))})}),V(()=>{let e=S===`after`?o(l,`after`):``;A(()=>R(e,de,U))}),T})});A(()=>R(d,l,u))}),l},!0);A(()=>R(l,u,v))});let x=te(`rue:slot:anchor`);w(u,x),V(()=>{let t=e.snapshot.virtualSlice.bottomSpacer>0?h(Object.assign(t=>{let n=me().content.cloneNode(!0).firstChild,r=n,i;return V(()=>{let t=`${e.snapshot.virtualSlice.bottomSpacer}px`,n=t==null?``:String(t);Object.is(i,n)||(i=n,r.style.height=n)}),r.setAttribute(`aria-hidden`,`true`),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})):``;A(()=>R(t,u,x))});let S=te(`rue:slot:anchor`);return w(u,S),V(()=>{let t=e.snapshot.visibleNodes.length?``:h(Object.assign(t=>{let n=ge().content.cloneNode(!0).firstChild,r=n,i=n.childNodes[0],a=i.parentNode,o;V(()=>{let t=q(`rounded-lg px-3 py-8 text-center text-sm text-base-content/55`,e.classNames?.empty),n=t==null?``:String(t);Object.is(o,n)||(o=n,r.className=n)});let c;return V(()=>{let t=e.styles?.empty;Object.is(c,t)||(c=t,s(r,t))}),m({parent:a,before:i},()=>e.emptyText,()=>({})),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}));A(()=>R(t,u,S))}),u})},it=t=>{let n=F(`useSetup:0:0`,()=>O(()=>{let{className:e,style:n,treeData:r,fieldNames:i,treeDataSimpleMode:a,selectedKeys:o,defaultSelectedKeys:s,checkedKeys:c,defaultCheckedKeys:l,expandedKeys:d,defaultExpandedKeys:f,defaultExpandAll:p,multiple:m,checkable:h,checkStrictly:_,showLine:v,showIcon:y,blockNode:b,selectable:x,disabled:S,size:ee,status:C,draggable:w,allowDrop:T,virtual:E,height:te,itemHeight:D,titleRender:O,switcherIcon:k,icon:A,filterTreeNode:ne,searchValue:j,defaultSearchValue:M,searchPlaceholder:N,allowSearch:re,loadData:I,emptyText:ie,onSelect:R,onCheck:z,onExpand:B,onSearch:ae,onDoubleClick:V,onDragStart:oe,onDragEnter:se,onDragOver:H,onDragLeave:ce,onDragEnd:le,onDrop:ue,onScroll:U,classNames:de,styles:fe,directoryMode:pe,expandAction:W,toggleSelect:me,rangeSelect:he,...ge}=t,_e=P();function xe(){let e=_e.current,n=g(t.treeData===void 0?[]:t.treeData),r=g(t.treeDataSimpleMode),i=g(t.fieldNames);if(e&&e.treeData===n&&we(e,r,i))return e.normalizedTree;let a=Array.isArray(n)?n.slice():[];if(e&&Te(e,n,a,r,i))return e.normalizedTree;let o=Ee(n,a,r,i);if(o)return _e.current=o,o.normalizedTree;let s=He(Ve(t.treeData===void 0?[]:t.treeData,t.treeDataSimpleMode,t.fieldNames),t.fieldNames),c={treeData:n,treeDataRoots:a,treeDataSimpleMode:r,fieldNames:i,normalizedTree:s};return _e.current=c,Oe(c),s}let Ce=xe(),De=Ce,ke=ze(Ce,{directoryMode:t.directoryMode,expandAction:t.expandAction!==void 0&&t.expandAction,rangeSelect:t.rangeSelect===void 0?`append`:t.rangeSelect}),G=ve.get(ke)??(()=>{let e={};return ve.set(ke,e),e})(),Ae=P(null),q=u(()=>tt(t.size));q.get();let Ne=q,Pe=u(()=>Xe(t.draggable));Pe.get();let Fe=Pe,Ie=t.defaultExpandAll?Ce.flat.filter(e=>e.children.length>0||!e.isLeaf).map(e=>e.key):t.defaultExpandedKeys??[],Le=F(`useRef:1:6`,()=>P(F(`ref:1:5`,()=>L(0)))).current,J=F(`useRef:1:8`,()=>P(F(`ref:1:7`,()=>L(Me(t.defaultSelectedKeys??t.selectedKeys))))).current,Re=F(`useRef:1:10`,()=>P(F(`ref:1:9`,()=>L(Me(t.defaultCheckedKeys))))).current,Be=F(`useRef:1:12`,()=>P(F(`ref:1:11`,()=>L(Me(G.expandedKeys??Ie))))).current,Ue=F(`useRef:1:14`,()=>P(F(`ref:1:13`,()=>L(Me(t.selectedKeys))))).current,We=F(`useRef:1:16`,()=>P(F(`ref:1:15`,()=>L(Me(t.expandedKeys))))).current,Ye=F(`useRef:1:18`,()=>P(F(`ref:1:17`,()=>L(t.checkedKeys===void 0?new Set:Array.isArray(t.checkedKeys)?Y(t.checkedKeys):Y(t.checkedKeys.checked))))).current,Qe=F(`useRef:1:20`,()=>P(F(`ref:1:19`,()=>L(t.defaultSearchValue??``)))).current,$e=F(`useRef:1:22`,()=>P(F(`ref:1:21`,()=>L(G.loadingKeyTexts??[])))).current,nt=F(`useRef:1:24`,()=>P(F(`ref:1:23`,()=>L(0)))).current,rt=F(`useRef:1:26`,()=>P(F(`ref:1:25`,()=>L(G.lastSelectedKeyText??null)))).current,it=F(`useRef:1:28`,()=>P(F(`ref:1:27`,()=>L(G.cachedSelectedKeyTexts??[])))).current,at=F(`useRef:1:30`,()=>P(F(`ref:1:29`,()=>L({})))).current,ot=F(`useRef:1:32`,()=>P(F(`ref:1:31`,()=>L({})))).current,st=F(`useRef:1:34`,()=>P(F(`ref:1:33`,()=>L(null)))).current,ct=F(`useRef:1:36`,()=>P(F(`ref:1:35`,()=>L(!1)))).current,lt=F(`useRef:1:38`,()=>P(F(`ref:1:37`,()=>L(G.suppressClickKeyText??null)))).current,ut=P(null);if(t.checkedKeys!==void 0){let e=Array.isArray(t.checkedKeys)?Y(t.checkedKeys):Y(t.checkedKeys.checked);et(Ye.value,e)||(Ye.value=e)}t.selectedKeys!==void 0&&!et(Y(Ue.value),Y(t.selectedKeys))&&(Ue.value=Me(t.selectedKeys)),t.expandedKeys!==void 0&&!et(Y(We.value),Y(t.expandedKeys))&&(We.value=Me(t.expandedKeys));let X=u(()=>t.itemHeight??Ne.get().rowEstimate);X.get();let dt=X,ft=u(()=>typeof t.height==`number`&&t.height>0?t.height:void 0);ft.get();let pt=ft,mt=u(()=>(t.virtual===void 0||t.virtual)!==!1&&pt.get()&&typeof t.itemHeight==`number`&&t.itemHeight>0?t.itemHeight:void 0);mt.get();let ht=mt;function gt(){Le.value+=1,An()}function _t(e=!1){if(e){let e=g(t.treeData===void 0?[]:t.treeData),n=Array.isArray(e)?e[0]:void 0;_e.current=void 0,Se(e)&&ye.delete(e),Se(n)&&be.delete(n)}let n=xe();return De=n,n}function vt(){return De??_t()}function yt(){return t.selectedKeys===void 0?J.value:Ue.value}function bt(){return t.expandedKeys===void 0?Be.value:We.value}function xt(){return t.searchValue===void 0?Qe.value:t.searchValue}function St(){return t.checkedKeys===void 0?Y(Re.value):Ye.value}function Ct(){let e=vt(),n=Y(bt()),r=xt();return qe(e.roots,n,r,e=>Je(e,r,t.filterTreeNode))}function wt(){Le.value;let e=vt(),n=xt(),r=Y(yt()),i=Y(bt()),a=St(),o=t.checkable?Ge(e.roots,a,!!t.checkStrictly):{checkedKeys:new Set,halfCheckedKeys:new Set,stateMap:{}},s=qe(e.roots,i,n,e=>Je(e,n,t.filterTreeNode));return{searchValue:n,selectedKeyTextSet:r,expandedKeyTextSet:i,checkState:o,visibleNodes:s,virtualSlice:Ze(s,nt.value,pt.get(),dt.get(),(t.virtual===void 0||t.virtual)!==!1&&!!pt.get()),dragState:at.value}}return{__rue_rest_omit_0:e,__rue_rest_omit_1:n,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,__rue_rest_omit_6:s,__rue_rest_omit_7:c,__rue_rest_omit_8:l,__rue_rest_omit_9:d,__rue_rest_omit_10:f,__rue_rest_omit_11:p,__rue_rest_omit_12:m,__rue_rest_omit_13:h,__rue_rest_omit_14:_,__rue_rest_omit_15:v,__rue_rest_omit_16:y,__rue_rest_omit_17:b,__rue_rest_omit_18:x,__rue_rest_omit_19:S,__rue_rest_omit_20:ee,__rue_rest_omit_21:C,__rue_rest_omit_22:w,__rue_rest_omit_23:T,__rue_rest_omit_24:E,__rue_rest_omit_25:te,__rue_rest_omit_26:D,__rue_rest_omit_27:O,__rue_rest_omit_28:k,__rue_rest_omit_29:A,__rue_rest_omit_30:ne,__rue_rest_omit_31:j,__rue_rest_omit_32:M,__rue_rest_omit_33:N,__rue_rest_omit_34:re,__rue_rest_omit_35:I,__rue_rest_omit_36:ie,__rue_rest_omit_37:R,__rue_rest_omit_38:z,__rue_rest_omit_39:B,__rue_rest_omit_40:ae,__rue_rest_omit_41:V,__rue_rest_omit_42:oe,__rue_rest_omit_43:se,__rue_rest_omit_44:H,__rue_rest_omit_45:ce,__rue_rest_omit_46:le,__rue_rest_omit_47:ue,__rue_rest_omit_48:U,__rue_rest_omit_49:de,__rue_rest_omit_50:fe,__rue_rest_omit_51:pe,__rue_rest_omit_52:W,__rue_rest_omit_53:me,__rue_rest_omit_54:he,rest:ge,treeNormalizationCacheRef:_e,readNormalizedTreeFromProps:xe,normalizedTree:Ce,treeStateSignature:ke,persistedState:G,bodyHostRef:Ae,componentSize:q,__rue_phase2_componentSize:Ne,dragConfig:Pe,__rue_phase2_dragConfig:Fe,initialExpandedKeys:Ie,renderVersion:Le,uncontrolledSelectedKeysRef:J,uncontrolledCheckedKeysRef:Re,uncontrolledExpandedKeysRef:Be,controlledSelectedKeysRef:Ue,controlledExpandedKeysRef:We,controlledCheckedKeyTextsRef:Ye,searchValueRef:Qe,loadingKeyTextsRef:$e,scrollTopRef:nt,directoryLastSelectedKeyTextRef:rt,directoryCachedSelectedKeyTextsRef:it,dragStateRef:at,dragHoverDepthRef:ot,mouseDragStateRef:st,renderScheduledRef:ct,directorySuppressClickKeyTextRef:lt,directorySuppressClickCleanupRef:ut,estimatedRowHeight:X,__rue_phase2_estimatedRowHeight:dt,viewportHeight:ft,__rue_phase2_viewportHeight:pt,fixedVirtualRowHeight:mt,__rue_phase2_fixedVirtualRowHeight:ht,requestRender:gt,rebuildNormalizedTree:_t,getNormalizedTree:vt,readMergedSelectedKeys:yt,readMergedExpandedKeys:bt,readMergedSearchValue:xt,readMergedCheckedKeyTexts:St,readVisibleNodes:Ct,readRenderSnapshot:wt,emitExpand:(e,n,r,i=!0)=>{let a=Me(e);return t.expandedKeys===void 0?Be.value=a:We.value=a,G.expandedKeys=a,gt(),i&&t.onExpand&&t.onExpand(a,{node:n,expanded:a.some(e=>K(e)===n.keyText),nativeEvent:r}),a},commitSelectedKeys:(e,n,r,i=!0)=>{let a=vt(),o=Me(e).filter(e=>a.byKeyText[K(e)]),s=o.map(e=>a.byKeyText[K(e)]).filter(Boolean);return t.selectedKeys===void 0?J.value=o:Ue.value=o,gt(),i&&t.onSelect&&t.onSelect(o,{node:n,nativeEvent:r,selected:o.some(e=>K(e)===n.keyText),selectedNodes:s}),o},commitCheckedKeys:(e,n,r)=>{let i=vt(),a=Ge(i.roots,e,!!t.checkStrictly),o=Ke(Array.from(a.checkedKeys),Array.from(a.halfCheckedKeys),i.flat,!!t.checkStrictly);t.checkedKeys===void 0?Re.value=t.checkStrictly?o.checked:o:Ye.value=new Set(a.checkedKeys),gt(),t.onCheck&&t.onCheck(o,{node:n,nativeEvent:r,checked:a.checkedKeys.has(n.keyText),checkedNodes:Array.from(a.checkedKeys).map(e=>i.byKeyText[e]).filter(Boolean),halfCheckedKeys:Array.from(a.halfCheckedKeys).map(e=>i.byKeyText[e]?.key).filter(je)})},normalizedTreeCache:De}})),{__rue_rest_omit_0:r,__rue_rest_omit_1:o,__rue_rest_omit_2:c,__rue_rest_omit_3:f,__rue_rest_omit_4:p,__rue_rest_omit_5:m,__rue_rest_omit_6:y,__rue_rest_omit_7:x,__rue_rest_omit_8:S,__rue_rest_omit_9:ee,__rue_rest_omit_10:C,__rue_rest_omit_11:w,__rue_rest_omit_12:T,__rue_rest_omit_13:te,__rue_rest_omit_14:D,__rue_rest_omit_15:A,__rue_rest_omit_16:ne,__rue_rest_omit_17:N,__rue_rest_omit_18:re,__rue_rest_omit_19:I,__rue_rest_omit_20:ie,__rue_rest_omit_21:R,__rue_rest_omit_22:z,__rue_rest_omit_23:B,__rue_rest_omit_24:ae,__rue_rest_omit_25:oe,__rue_rest_omit_26:se,__rue_rest_omit_27:H,__rue_rest_omit_28:ce,__rue_rest_omit_29:le,__rue_rest_omit_30:ue,__rue_rest_omit_31:U,__rue_rest_omit_32:de,__rue_rest_omit_33:fe,__rue_rest_omit_34:pe,__rue_rest_omit_35:W,__rue_rest_omit_36:me,__rue_rest_omit_37:he,__rue_rest_omit_38:ge,__rue_rest_omit_39:xe,__rue_rest_omit_40:Ce,__rue_rest_omit_41:De,__rue_rest_omit_42:ke,__rue_rest_omit_43:Ae,__rue_rest_omit_44:Ne,__rue_rest_omit_45:Pe,__rue_rest_omit_46:Fe,__rue_rest_omit_47:Ie,__rue_rest_omit_48:Le,__rue_rest_omit_49:J,__rue_rest_omit_50:Re,__rue_rest_omit_51:Be,__rue_rest_omit_52:Qe,__rue_rest_omit_53:it,__rue_rest_omit_54:at,rest:ot,treeNormalizationCacheRef:st,readNormalizedTreeFromProps:ct,normalizedTree:lt,treeStateSignature:ut,persistedState:X,bodyHostRef:dt,componentSize:ft,__rue_phase2_componentSize:pt,dragConfig:mt,__rue_phase2_dragConfig:ht,initialExpandedKeys:gt,renderVersion:_t,uncontrolledSelectedKeysRef:vt,uncontrolledCheckedKeysRef:yt,uncontrolledExpandedKeysRef:bt,controlledSelectedKeysRef:xt,controlledExpandedKeysRef:St,controlledCheckedKeyTextsRef:Ct,searchValueRef:wt,loadingKeyTextsRef:Tt,scrollTopRef:Et,directoryLastSelectedKeyTextRef:Z,directoryCachedSelectedKeyTextsRef:Q,dragStateRef:$,dragHoverDepthRef:Dt,mouseDragStateRef:Ot,renderScheduledRef:kt,directorySuppressClickKeyTextRef:At,directorySuppressClickCleanupRef:jt,estimatedRowHeight:Mt,__rue_phase2_estimatedRowHeight:Nt,viewportHeight:Pt,__rue_phase2_viewportHeight:Ft,fixedVirtualRowHeight:It,__rue_phase2_fixedVirtualRowHeight:Lt,requestRender:Rt,rebuildNormalizedTree:zt,getNormalizedTree:Bt,readMergedSelectedKeys:Vt,readMergedExpandedKeys:Ht,readMergedSearchValue:Ut,readMergedCheckedKeyTexts:Wt,readVisibleNodes:Gt,readRenderSnapshot:Kt,emitExpand:qt,commitSelectedKeys:Jt,commitCheckedKeys:Yt}=n,{normalizedTreeCache:Xt}=n,Zt=async(e,n,r=!0)=>{let i=Ht(),a=Y(i);if(t.disabled||e.disabled)return i;let o=a.has(e.keyText),s=o?i.filter(t=>K(t)!==e.keyText):[...i,e.key],c=!o&&!!t.loadData&&!e.isLeaf&&e.children.length===0&&!Tt.value.includes(e.keyText);c&&(Tt.value=[...Tt.value,e.keyText],X.loadingKeyTexts=Tt.value);let l=qt(s,e,n,r);if(c&&t.loadData)try{await t.loadData(e),zt(!0)}finally{Tt.value=Tt.value.filter(t=>t!==e.keyText),X.loadingKeyTexts=Tt.value;let t=X.renderRequests;t?.size?t.forEach(e=>e()):Rt(),queueMicrotask(()=>{let t=X.renderRequests;t?.size?t.forEach(e=>e()):Rt();let n=Array.from(document.querySelectorAll(`[data-rue-tree-node]`)).find(t=>t.getAttribute(`data-rue-tree-node`)===e.keyText);if(n?.querySelectorAll(`.loading`).forEach(e=>e.remove()),n&&typeof document<`u`){let e=document.createTreeWalker(n,NodeFilter.SHOW_TEXT),t=e.nextNode();for(;t;)t.data=t.data.replace(/\s+loading\b/g,``),t=e.nextNode()}})}return l},Qt=(e,t)=>{t.preventDefault(),t.stopPropagation(),Zt(e,t)},$t=(e,n,r=!0)=>{if(t.disabled||e.disabled||!(t.selectable===void 0||t.selectable)||!e.selectable)return;let i=Vt(),a=Y(i);if(t.multiple&&(t.rangeSelect===void 0?`append`:t.rangeSelect)!==!1&&n?.shiftKey){let a=Gt().map(e=>e.node.keyText),o=Z.value&&a.includes(Z.value)?Z.value:void 0,s=i.map(K).filter(t=>t!==e.keyText&&a.includes(t)),c=s[s.length-1],l=o??c,u=l?a.indexOf(l):-1,d=a.indexOf(e.keyText);if(u>=0&&d>=0){let o=Math.min(u,d),s=Math.max(u,d),c=a.slice(o,s+1),f=(t.rangeSelect===void 0?`append`:t.rangeSelect)===`append`?Q.value.length?Q.value:i.map(K):[],p=Array.from(new Set([...f,...c]));Z.value=l,Q.value=p,X.lastSelectedKeyText=Z.value,X.cachedSelectedKeyTexts=Q.value;let m=Jt($e(p,Bt().byKeyText),e,n,r);return Q.value=m.map(K),X.cachedSelectedKeyTexts=Q.value,m}}if(t.directoryMode){let o=!!t.multiple&&!!(t.toggleSelect===void 0||t.toggleSelect)&&!!(n?.ctrlKey||n?.metaKey);if(t.multiple&&o){let t=a.has(e.keyText)?i.filter(t=>K(t)!==e.keyText):[...i,e.key];return Z.value=e.keyText,Q.value=t.map(K),X.lastSelectedKeyText=Z.value,X.cachedSelectedKeyTexts=Q.value,Jt(t,e,n,r)}return Z.value=e.keyText,Q.value=[e.keyText],X.lastSelectedKeyText=Z.value,X.cachedSelectedKeyTexts=Q.value,Jt([e.key],e,n,r)}if(t.multiple){let t=a.has(e.keyText)?i.filter(t=>K(t)!==e.keyText):[...i,e.key];return Z.value=e.keyText,Q.value=t.map(K),X.lastSelectedKeyText=Z.value,X.cachedSelectedKeyTexts=Q.value,Jt(t,e,n,r)}let o=a.has(e.keyText)?[]:[e.key];return Z.value=e.keyText,Q.value=o.map(K),X.lastSelectedKeyText=Z.value,X.cachedSelectedKeyTexts=Q.value,Jt(o,e,n,r)},en=(e,n)=>{if(n.preventDefault(),n.stopPropagation(),t.disabled||e.disabled||!e.checkable||e.disableCheckbox)return;let r=Wt(),i=Ge(Bt().roots,r,!!t.checkStrictly),a=new Set(r),o=i.checkedKeys.has(e.keyText);if(t.checkStrictly)o?a.delete(e.keyText):a.add(e.keyText);else{let t=Ue(e);o?t.forEach(e=>a.delete(e)):t.forEach(e=>a.add(e))}Yt(a,e,n)},tn=e=>{t.searchValue===void 0&&(wt.value=e),Rt(),t.onSearch&&t.onSearch(e)},nn=e=>{Et.value=e.currentTarget.scrollTop,Rt(),t.onScroll&&t.onScroll(e)},rn=e=>{!e||$.value.overKeyText!==e||($.value={dragKeyText:$.value.dragKeyText},Rt())},an=e=>{e&&At.value!==e||(At.value=null,X.suppressClickKeyText=null,jt.current?.(),jt.current=null)},on=e=>{if(jt.current?.(),jt.current=null,At.value=e,X.suppressClickKeyText=e,typeof window>`u`)return;let t,n=()=>{t!==void 0&&window.clearTimeout(t),window.removeEventListener(`mouseup`,r,!0)},r=()=>{window.removeEventListener(`mouseup`,r,!0),t=window.setTimeout(()=>{At.value===e&&(At.value=null,X.suppressClickKeyText=null),jt.current===n&&(jt.current=null)},500)};jt.current=n,window.addEventListener(`mouseup`,r,!0)},sn=(e,t)=>{($.value.overKeyText!==e||$.value.dropPosition!==t)&&($.value={...$.value,overKeyText:e,dropPosition:t},queueMicrotask(Rt))},cn=(e,t)=>{let n={...Dt.value},r=n[e]??0,i=Math.max(r+t,0);return i>0?n[e]=i:delete n[e],Dt.value=n,queueMicrotask(Rt),i},ln=()=>{Dt.value={},$.value={},queueMicrotask(Rt)},un=(e,n,r)=>{let i=Bt(),a=$.value.dragKeyText;if(!a)return null;let o=i.byKeyText[a];if(!o||o.keyText===e.keyText||Ye(o,e,i.byKeyText))return null;let s=r?.getBoundingClientRect?.(),c=`clientY`in n?n.clientY:void 0,l=0;s&&typeof c==`number`&&(c<s.top+s.height*.25?l=-1:c>s.bottom-s.height*.25&&(l=1));let u=l!==0;return t.allowDrop&&!t.allowDrop({dragNode:o,dropNode:e,dropPosition:l,dropToGap:u})?null:{dragNode:o,dropPosition:l}},dn=e=>typeof document>`u`||typeof document.elementFromPoint!=`function`?null:document.elementFromPoint(e.clientX,e.clientY)?.closest?.(`[data-rue-tree-node]`),fn=e=>{let t=e?.getAttribute(`data-rue-tree-node`);return t?Bt().byKeyText[t]??null:null},pn=()=>{typeof document>`u`||(document.removeEventListener(`mousemove`,gn),document.removeEventListener(`mouseup`,_n))},mn=(e,n)=>{let r=Xe(t.draggable);n.button!==0||!r.enabled||!r.nodeDraggable(e)||t.disabled||e.disabled||typeof document>`u`||(Ot.value={keyText:e.keyText,startX:n.clientX,startY:n.clientY,active:!1},document.addEventListener(`mousemove`,gn),document.addEventListener(`mouseup`,_n))},hn=(e,n)=>{let r=Bt().byKeyText[e.keyText];return r?(e.active=!0,Ot.value=e,on(e.keyText),Dt.value={},$.value={dragKeyText:e.keyText},queueMicrotask(Rt),t.onDragStart&&t.onDragStart({event:n,node:r}),!0):!1};function gn(e){let n=Ot.value;if(!n)return;let r=Math.max(Math.abs(e.clientX-n.startX),Math.abs(e.clientY-n.startY));if(!n.active&&r<4||!n.active&&!hn(n,e))return;e.preventDefault();let i=dn(e),a=fn(i);if(!a){rn($.value.overKeyText);return}let o=un(a,e,i);if(!o){rn(a.keyText);return}sn(a.keyText,o.dropPosition),t.onDragOver&&t.onDragOver({event:e,node:a})}function _n(e){let n=Ot.value,r=$.value.dragKeyText,i=n?.active?n.keyText:r;if(Ot.value=null,pn(),!i)return;e.preventDefault();let a=dn(e),o=fn(a),s=o?un(o,e,a):null;if(o&&s&&t.onDrop){let n=$.value.overKeyText===o.keyText&&$.value.dropPosition!==void 0?$.value.dropPosition:s.dropPosition;t.onDrop({event:e,node:o,dragNode:s.dragNode,dragNodesKeys:We(s.dragNode),dropPosition:n,dropToGap:n!==0})}let c=Bt().byKeyText[i];ln(),c&&t.onDragEnd&&t.onDragEnd({event:e,node:c})}let vn=(e,n)=>{n.stopPropagation();let r=Xe(t.draggable);!r.enabled||!r.nodeDraggable(e)||t.disabled||e.disabled||(n.dataTransfer&&(n.dataTransfer.effectAllowed=`move`,n.dataTransfer.setData(`text/plain`,e.keyText)),Dt.value={},$.value={dragKeyText:e.keyText},queueMicrotask(Rt),t.onDragStart&&t.onDragStart({event:n,node:e}))},yn=(e,n)=>{if(!$.value.dragKeyText)return;cn(e.keyText,1);let r=un(e,n,n.currentTarget);if(!r){rn(e.keyText);return}n.preventDefault(),sn(e.keyText,r.dropPosition);let i=Ht(),a=Y(i);r.dropPosition===0&&!a.has(e.keyText)&&(e.children.length>0||!e.isLeaf)&&(i=qt([...i,e.key],e,n)),t.onDragEnter&&t.onDragEnter({event:n,node:e,expandedKeys:i})},bn=(e,n)=>{if(!$.value.dragKeyText)return;let r=un(e,n,n.currentTarget);if(!r){rn(e.keyText);return}n.preventDefault(),n.dataTransfer&&(n.dataTransfer.dropEffect=`move`),sn(e.keyText,r.dropPosition),t.onDragOver&&t.onDragOver({event:n,node:e})},xn=(e,n)=>{cn(e.keyText,-1)===0&&rn(e.keyText),t.onDragLeave&&t.onDragLeave({event:n,node:e})},Sn=(e,n)=>{ln(),t.onDragEnd&&t.onDragEnd({event:n,node:e})},Cn=(e,n)=>{n.stopPropagation();let r=un(e,n,n.currentTarget);if(!r){ln();return}n.preventDefault();let i=$.value.overKeyText===e.keyText&&$.value.dropPosition!==void 0?$.value.dropPosition:r.dropPosition;t.onDrop&&t.onDrop({event:n,node:e,dragNode:r.dragNode,dragNodesKeys:We(r.dragNode),dropPosition:i,dropToGap:i!==0}),ln()},wn=(e,t)=>{mn(e,t)},Tn=(e,n)=>{let r=!!t.multiple&&(t.rangeSelect===void 0?`append`:t.rangeSelect)!==!1&&n.shiftKey;if(t.directoryMode&&t.multiple&&(t.toggleSelect===void 0||t.toggleSelect)&&(n.ctrlKey||n.metaKey)||r){n.preventDefault(),n.stopPropagation(),on(e.keyText),$t(e,n);return}mn(e,n)},En=(e,n,r)=>{if(n.preventDefault(),n.stopPropagation(),r===`click`&&At.value===e.keyText){an(e.keyText);return}r===`doubleClick`&&t.onDoubleClick&&t.onDoubleClick(n,e);let i=t.directoryMode&&(t.expandAction!==void 0&&t.expandAction)===r&&(e.children.length>0||!e.isLeaf);if(r===`click`&&i){l(()=>{let r=Ht(),i=Y(r).has(e.keyText),a=i?r.filter(t=>K(t)!==e.keyText):[...r,e.key];Zt(e,n,!1);let o=$t(e,n,!1)??Vt();t.onExpand?.(Me(a),{node:e,expanded:!i,nativeEvent:n}),t.onSelect?.(o,{node:e,nativeEvent:n,selected:o.some(t=>K(t)===e.keyText),selectedNodes:o.map(e=>Bt().byKeyText[K(e)]).filter(Boolean)})});return}i&&Zt(e,n),r===`click`&&$t(e,n)},Dn=(e,n)=>{if(At.value===e.keyText){n.preventDefault(),n.stopPropagation();return}t.directoryMode&&t.multiple&&(t.toggleSelect===void 0||t.toggleSelect)&&n.ctrlKey&&!n.metaKey&&(n.preventDefault(),n.stopPropagation(),$t(e,n))},On=F(`computed:1:43`,()=>u(()=>Ft.get()?(t.virtual===void 0||t.virtual)===!1?{maxHeight:`${Ft.get()}px`,overflowY:`auto`}:{height:`${Ft.get()}px`,overflowY:`auto`}:{overflowY:`visible`}));On.get();let kn=()=>rt({snapshot:Kt(),version:_t.value,loadingKeyTexts:Tt.value,fixedVirtualRowHeight:Lt.get(),componentSize:pt.get(),classNames:t.classNames,styles:t.styles,emptyText:t.emptyText===void 0?`暂无节点`:t.emptyText,showLine:t.showLine,disabled:t.disabled,blockNode:t.blockNode,checkable:t.checkable,showIcon:t.showIcon,selectable:t.selectable===void 0||t.selectable,hasLoadData:!!t.loadData,titleRender:t.titleRender,switcherIcon:t.switcherIcon,icon:t.icon,directoryMode:t.directoryMode,dragConfig:ht.get(),handleDragStartNode:vn,handleDragEnterNode:yn,handleDragOverNode:bn,handleDragLeaveNode:xn,handleDragEndNode:Sn,handleDropNode:Cn,handleExpandToggle:Qt,handleCheck:en,handleDragMouseDown:wn,handleLabelMouseDown:Tn,handleLabelActivate:En,handleLabelContextMenu:Dn});function An(){kt.value||(kt.value=!0,queueMicrotask(()=>{kt.value=!1,jn()}))}function jn(){let e=dt.current;e&&k(kn(),e)}function Mn(e){dt.current=e,e&&jn()}let Nn=()=>{Tt.value=X.loadingKeyTexts??[],Rt()};return v(()=>{jn();let e=X.renderRequests??new Set;e.add(Nn),X.renderRequests=e}),e(()=>{pn(),jt.current?.(),jt.current=null,X.renderRequests?.delete(Nn)}),F(`watch:1:44`,()=>_(()=>[t.treeData===void 0?[]:t.treeData,t.treeDataSimpleMode,t.fieldNames,t.selectedKeys,t.checkedKeys,t.expandedKeys,t.searchValue],()=>{zt(),An()})),An(),h(Object.assign(e=>{let n=_e().content.cloneNode(!0).firstChild,r=n,o=n.childNodes[1],c=n.childNodes[0],l=c.parentNode;d(r,()=>ot,[`className`,`style`,`data-rue-tree`,`data-rue-tree-version`,`__rue_static_template_id__`]);let u;V(()=>{let e=q(q(q(`rue-tree rounded-box border border-base-300 bg-base-100 text-base-content shadow-sm`,nt(t.status)),t.classNames?.root),t.className),n=e==null?``:String(e);Object.is(u,n)||(u=n,r.className=n)});let f;V(()=>{let e={...t.styles?.root,...t.style};Object.is(f,e)||(f=e,s(r,e))}),r.setAttribute(`data-rue-tree`,`true`);let p;V(()=>{let e=String(_t.value);Object.is(p,e)||(p=e,e==null||e===!1?r.removeAttribute(`data-rue-tree-version`):r.setAttribute(`data-rue-tree-version`,String(e)))});let m;V(()=>{let e=q(G(`grid gap-0.5`,ft.get().bodyPadding,ft.get().textClass),t.classNames?.body),n=e==null?``:String(e);Object.is(m,n)||(m=n,o.className=n)});let g=Mn;typeof g==`function`?g(o):g&&typeof g==`object`&&`current`in g&&(g.current=o),i(()=>{typeof g==`function`?g(null):g&&typeof g==`object`&&`current`in g&&(g.current=null)}),o.setAttribute(`data-rue-tree-body`,`true`);let _;V(()=>{let e={...On.get(),...t.styles?.body};Object.is(_,e)||(_=e,s(o,e))});let v=e=>{let t=nn;typeof t==`function`&&t(e)};return o.addEventListener(`scroll`,v),i(()=>o.removeEventListener(`scroll`,v)),j(l,c,()=>t.allowSearch?{__rue_compiled_branch_key:!0,create:()=>h(Object.assign(e=>{let n=E(`div`,e),r;V(()=>{let e=q(q(G(`border-b border-base-200/80`,ft.get().headerPadding),t.classNames?.header),t.classNames?.search),i=e==null?``:String(e);Object.is(r,i)||(r=i,n.className=i)});let o;V(()=>{let e={...t.styles?.header,...t.styles?.search};Object.is(o,e)||(o=e,s(n,e))});let c=E(`input`,n);M(n,c),c.setAttribute(`type`,`text`),c.className=`input input-bordered input-sm w-full bg-base-100`;let l;V(()=>{let e=Kt().searchValue,t=e==null?``:String(e);Object.is(l,t)||(l=t,a(c,t))});let u;V(()=>{let e=t.searchPlaceholder===void 0?`搜索节点`:t.searchPlaceholder;Object.is(u,e)||(u=e,e==null||e===!1?c.removeAttribute(`placeholder`):c.setAttribute(`placeholder`,String(e)))});let d=e=>{let t=e=>tn(e.currentTarget.value);typeof t==`function`&&t(e)};return c.addEventListener(`input`,d),i(()=>c.removeEventListener(`input`,d)),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>h(Object.assign(e=>{let t=b();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))},at=Object.assign(it,{DirectoryTree:e=>{let t=x(e.blockNode),n=x(e.className),r=x(e.expandAction),i=x(e.showIcon),a=x(ce(e,[`blockNode`,`className`,`expandAction`,`showIcon`]));return C(c(it,()=>({...a.get(),className:q(`rue-directory-tree`,n.get()),showIcon:i.get()===void 0||i.get(),blockNode:t.get()===void 0||t.get(),directoryMode:!0,expandAction:r.get()===void 0?`click`:r.get()})),e=>T(()=>{t.set(e.blockNode),n.set(e.className),r.set(e.expandAction),i.set(e.showIcon),a.set(ce(e,[`blockNode`,`className`,`expandAction`,`showIcon`]))}),()=>e)}}),ot=z(`<div class="flex min-w-0 items-center justify-between gap-3"><span class="truncate"><!--rue:text-hole:0--></span><span class="badge badge-ghost badge-xs"><!--rue:text-hole:1--></span></div>`),st=z(`<div class="flex min-w-0 items-center justify-between gap-3"><span class="truncate"><!--rue:text-hole:0--></span><span><!--rue:text-hole:1--></span></div>`),ct=z(`<div class="space-y-4 not-prose"><!--rue:opaque-hole:0--><div class="grid gap-3 md:grid-cols-3"><div class="rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm"><div class="text-xs text-base-content/45">当前选中</div><div class="mt-2 flex flex-wrap gap-2"><!--rue:text-hole:1--></div></div><div class="rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm"><div class="text-xs text-base-content/45">推荐场景</div><div class="mt-2 text-sm text-base-content/75">组件目录、文档导航、资源分类</div></div><div class="rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm"><div class="text-xs text-base-content/45">状态模型</div><div class="mt-2 text-sm text-base-content/75">selectedKeys / expandedKeys 分离，便于受控更新。</div></div></div></div>`),lt=z(`<div class="grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start"><!--rue:opaque-hole:0--><div class="space-y-3"><div class="rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm"><div class="text-xs text-base-content/45">快捷属性</div><div class="mt-3 flex flex-wrap gap-2"><button type="button">click 展开</button><button type="button">doubleClick 展开</button><button type="button">只选中不展开</button></div><div class="mt-2 flex flex-wrap gap-2"><button type="button">ctrl/meta 追加</button><button type="button">关闭追加选择</button></div></div><div class="rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm"><div class="text-xs text-base-content/45">当前选择</div><div class="mt-2 flex flex-wrap gap-2"><!--rue:text-hole:1--></div></div><div class="rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70">当前组合是 expandAction=<strong><!--rue:text-hole:2--></strong> 、toggleSelect=<strong><!--rue:text-hole:3--></strong> 、rangeSelect=<strong><!--rue:text-hole:4--></strong>。 <div class="mt-3">普通点击会落成单选；打开追加后，meta / ctrl 会追加或移除选中，shift 也会启用区间选择。关闭追加时，这两类补充选择都会停用；append / replace 的差异放到下面的对照示例里单独演示。</div></div></div></div>`),ut=z(`<div class="space-y-4 not-prose"><div class="rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70"><div>基础行为：先单击 alpha.ts，再按住 Shift 单击 epsilon.ts，alpha.ts 到 epsilon.ts 都会选中。</div><div class="mt-2">append / replace 只影响当前额外非连续选择是否保持：重置后先单击 beta.ts，再按住 Cmd / Ctrl 单击 epsilon.ts，最后按住 Shift 单击 delta.ts。</div><div class="mt-2">append 会保持 beta.ts；replace 只保持 delta.ts 到 epsilon.ts 这一段。</div><button type="button" class="btn btn-ghost btn-xs mt-3">重置两边示例</button></div><div class="grid gap-4 xl:grid-cols-2"><div class="space-y-3 rounded-[1.4rem] border border-base-300 bg-base-100 p-4 shadow-sm"><div class="flex items-center justify-between gap-3"><div><div class="text-sm font-semibold">rangeSelect="append"</div><div class="text-xs text-base-content/55">保持原先的非连续选择，再并入新的 shift 区间。</div></div><span class="badge badge-outline badge-sm">append</span></div><!--rue:opaque-hole:0--><div class="rounded-box border border-base-300 bg-base-100 px-4 py-3 text-sm text-base-content/70"><div class="text-xs text-base-content/45">当前选择</div><div class="mt-2 flex flex-wrap gap-2"><!--rue:text-hole:1--></div></div></div><div class="space-y-3 rounded-[1.4rem] border border-base-300 bg-base-100 p-4 shadow-sm"><div class="flex items-center justify-between gap-3"><div><div class="text-sm font-semibold">rangeSelect="replace"</div><div class="text-xs text-base-content/55">只保持新的 shift 区间，基础的非连续选择会被替换掉。</div></div><span class="badge badge-primary badge-outline badge-sm">replace</span></div><!--rue:opaque-hole:2--><div class="rounded-box border border-base-300 bg-base-100 px-4 py-3 text-sm text-base-content/70"><div class="text-xs text-base-content/45">当前选择</div><div class="mt-2 flex flex-wrap gap-2"><!--rue:text-hole:3--></div></div></div></div></div>`),X=z(`<div class="space-y-4 not-prose"><!--rue:opaque-hole:0--><div class="grid gap-3 md:grid-cols-3"><div class="rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm"><div class="text-xs text-base-content/45">selectedKeys</div><div class="mt-2 flex flex-wrap gap-2"><!--rue:text-hole:1--></div></div><div class="rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm"><div class="text-xs text-base-content/45">checkedKeys</div><div class="mt-2 flex flex-wrap gap-2"><!--rue:text-hole:2--></div></div><div class="rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm"><div class="text-xs text-base-content/45">halfCheckedKeys</div><div class="mt-2 flex flex-wrap gap-2"><!--rue:text-hole:3--></div></div></div></div>`),dt=z(`<div class="grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start"><!--rue:opaque-hole:0--><div class="space-y-3"><div class="rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm"><div class="text-xs text-base-content/45">当前勾选</div><div class="mt-2 flex flex-wrap gap-2"><!--rue:text-hole:1--></div></div><div class="rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm text-sm text-base-content/75"><div class="font-medium text-base-content">disabled</div><div class="mt-2">整节点不可展开、不可选中、不可勾选，适合只读目录或冻结配置。</div></div><div class="rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm text-sm text-base-content/75"><div class="font-medium text-base-content">disableCheckbox</div><div class="mt-2">节点仍能展示和展开，但复选框不会参与交互，适合“只可浏览不可授权”的条目。</div></div></div></div>`),ft=z(`<div class="grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start"><!--rue:opaque-hole:0--><div class="rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70">当前选中：<code><!--rue:text-hole:1--></code><div class="mt-3">这类 simple mode 很适合后端直接给 id / pId 的菜单、流程节点和权限项，不需要再先做一遍树转换。</div></div></div>`),pt=z(`<div class="grid gap-4 not-prose lg:grid-cols-[minmax(0,26rem),1fr] lg:items-start"><!--rue:opaque-hole:0--><div class="space-y-3"><div class="rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm"><div class="text-xs text-base-content/45">expandedKeys</div><div class="mt-2 text-sm text-base-content/75"><!--rue:text-hole:1--></div></div><div class="rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm"><div class="text-xs text-base-content/45">selectedKeys</div><div class="mt-2 text-sm text-base-content/75"><!--rue:text-hole:2--></div></div><div class="rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70">展开 release-bus 后才会注入桌面端和移动端节点，适合远端目录、超大权限树和发布范围配置。</div></div></div>`),mt=z(`<div class="grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start"><!--rue:opaque-hole:0--><div class="space-y-3"><div class="rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm"><div class="text-xs text-base-content/45">最近一次拖拽</div><div class="mt-2 text-sm text-base-content/75"><!--rue:text-hole:1--></div></div><div class="rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm"><div class="text-xs text-base-content/45">allowDrop 规则</div><div class="mt-2 grid gap-2 text-sm text-base-content/75"><div>folder：允许放入，也允许插前 / 插后。</div><div>file：只允许插前 / 插后，不允许作为 inside 目标。</div></div></div><div class="rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70">拖到 folder 正中央会看到“放入”，拖到行的上沿或下沿则会出现“插前 / 插后”；如果目标是 file，inside 落点会被 allowDrop 直接拦掉。</div></div></div>`),ht=z(`<div class="grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start"><!--rue:opaque-hole:0--><div class="space-y-3"><div class="rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm"><div class="text-xs text-base-content/45">数据量</div><div class="mt-2 text-2xl font-semibold"><!--rue:text-hole:1--></div></div><div class="rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm"><div class="text-xs text-base-content/45">当前选中</div><div class="mt-2 text-sm text-base-content/75"><!--rue:text-hole:2--></div></div><div class="rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70">对文档页目录、埋点树、批量资源目录这种长列表场景，虚拟滚动能显著降低初始渲染压力。</div></div></div>`),gt=z(`<div class="grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start"><!--rue:opaque-hole:0--><div class="space-y-3"><div class="rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm"><div class="text-xs text-base-content/45">根节点数量</div><div class="mt-2 text-2xl font-semibold"><!--rue:text-hole:1--></div></div><div class="rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm"><div class="text-xs text-base-content/45">已加载分支</div><div class="mt-2 text-2xl font-semibold"><!--rue:text-hole:2--></div></div><div class="rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm"><div class="text-xs text-base-content/45">当前展开</div><div class="mt-2 text-sm text-base-content/75"><!--rue:text-hole:3--></div></div><div class="rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70">先滚动到较深位置再展开节点也没问题：视口外的行不会真正渲染，只有命中的 branch 才会触发 loadData 注入子节点。</div></div></div>`),_t=z(`<div class="card border border-base-200/80 bg-base-100 shadow-sm not-prose"><div class="card-body grid gap-4 lg:grid-cols-[minmax(0,1fr),18rem] lg:items-start"><ul class="m-0 grid gap-1 p-0"><!--rue:opaque-hole:0--></ul><div class="rounded-box border border-base-300 bg-base-200/40 p-4 text-sm text-base-content/70">单击切换展开，双击叶子节点会把它转换成 folder，并在当前层直接追加一个新子节点。</div></div></div>`),vt=z(`<div class="not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100"><table class="table table-zebra"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><!--rue:text-hole:0--></tbody></table></div>`),yt=z(`<li class="list-none"><button type="button"><span class="inline-flex size-5 items-center justify-center rounded-md bg-base-200/80 text-[11px] text-base-content/55"><!--rue:text-hole:0--></span><span><!--rue:text-hole:1--></span></button><!--rue:text-hole:2--></li>`),bt=z(`<div class="max-w-none prose prose-sm md:prose-base"><h1>Tree 树控件</h1><p>Rue 的 Tree 补上了独立树组件这块空白：保持 TreeView 示例里递归数据直改的灵活性，同时把 树控件常用的展开、选中、勾选、简单模式、异步加载和自定义标题一次覆盖。 视觉上使用 Rue 当前的卡片、badge 和 base 色阶体系，不照搬其他组件库的外观。</p><div class="not-prose mt-6 grid gap-3 md:grid-cols-3"><div class="rounded-[1.4rem] border border-base-300 bg-gradient-to-br from-base-100 to-base-200/40 p-4 shadow-sm"><div class="text-xs uppercase tracking-[0.2em] text-base-content/45">Node Model</div><div class="mt-2 text-base font-semibold">选择、勾选、展开三条状态线</div><p class="mt-2 mb-0 text-sm text-base-content/68">目录树、权限树、发布树都能直接套进来。</p></div><div class="rounded-[1.4rem] border border-base-300 bg-gradient-to-br from-base-100 to-base-200/40 p-4 shadow-sm"><div class="text-xs uppercase tracking-[0.2em] text-base-content/45">DirectoryTree</div><div class="mt-2 text-base font-semibold">目录树快捷 API</div><p class="mt-2 mb-0 text-sm text-base-content/68">支持 click / doubleClick 展开，以及更接近文件浏览器的多选交互。</p></div><div class="rounded-[1.4rem] border border-base-300 bg-gradient-to-br from-base-100 to-base-200/40 p-4 shadow-sm"><div class="text-xs uppercase tracking-[0.2em] text-base-content/45">Heavy Interaction</div><div class="mt-2 text-base font-semibold">拖拽排序与虚拟滚动</div><p class="mt-2 mb-0 text-sm text-base-content/68">长列表和拖拽改序终于能落在同一个 Tree 上了。</p></div></div><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--><!--rue:opaque-hole:5--><!--rue:opaque-hole:6--><div class="not-prose mt-10 space-y-2"><h2 class="text-2xl font-semibold">更重交互</h2><p class="text-sm text-base-content/70">当 Tree 既要承载拖拽整理，又要承载超长数据时，draggable 和 virtual 就是两个最关键的控制面。</p></div><!--rue:opaque-hole:7--><!--rue:opaque-hole:8--><!--rue:opaque-hole:9--><!--rue:opaque-hole:10--><div class="not-prose mt-10 space-y-4"><h2 class="text-2xl font-semibold">API</h2><!--rue:opaque-hole:11--></div></div>`),xt=e=>{let t=x(e.rows);return C(h(Object.assign(e=>{let n=vt().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[1].childNodes[0],a=r.parentNode,o=z(`<tr><td><code><!--rue:text-hole:0--></code></td><td>rue:row-text</td><td><code><!--rue:text-hole:2--></code></td><td><code><!--rue:text-hole:3--></code></td></tr>`),s=[];return V(()=>{let e=t.get()||[];s=ae(a,r,s,e,(e,t)=>e.prop,(e,t,n)=>{let r=e,i;return oe(e=>{let t=o().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0].childNodes[0],a=n.parentNode,s=t.childNodes[1].childNodes[0];s.data=``,s.parentNode;let c=t.childNodes[2].childNodes[0].childNodes[0],l=c.parentNode,u=t.childNodes[3].childNodes[0].childNodes[0],d=u.parentNode,f=y(``);a.insertBefore(f,n),a.removeChild(n);let p;{let e=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);Object.is(p,e)||(f.textContent=e,p=e)}let m;{let e=r.description==null||typeof r.description==`boolean`?``:String(r.description);Object.is(m,e)||(s.textContent=e,m=e)}let h=y(``);l.insertBefore(h,c),l.removeChild(c);let g;{let e=r.type==null||typeof r.type==`boolean`?``:String(r.type);Object.is(g,e)||(h.textContent=e,g=e)}let _=y(``);d.insertBefore(_,u),d.removeChild(u);let v;{let e=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);Object.is(v,e)||(_.textContent=e,v=e)}return i=()=>{{let e=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);Object.is(p,e)||(f.textContent=e,p=e)}{let e=r.description==null||typeof r.description==`boolean`?``:String(r.description);Object.is(m,e)||(s.textContent=e,m=e)}{let e=r.type==null||typeof r.type==`boolean`?``:String(r.type);Object.is(g,e)||(h.textContent=e,g=e)}{let e=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);Object.is(v,e)||(_.textContent=e,v=e)}},{__rue_compiled_host:t,__rue_compiled_roots:[t]}},(n,a)=>{e=n,t=a,r=n,i()},n)})}),i(()=>S(s)),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})),e=>T(()=>{t.set(e.rows)}),()=>e)},St=[{title:`产品平台`,key:`platform`,children:[{title:`文档中心`,key:`docs-api`},{title:`组件市场`,key:`component-hub`},{title:`示例仓库`,key:`examples`}]},{title:`工程效率`,key:`engineering`,children:[{title:`构建链路`,key:`build-pipeline`},{title:`质量门禁`,key:`quality-gate`},{title:`发布管道`,key:`release-flow`}]},{title:`增长分析`,key:`growth`,children:[{title:`实验看板`,key:`experiment-board`},{title:`归因报表`,key:`attribution-report`},{title:`留存漏斗`,key:`retention-funnel`}]}],Ct=[{title:`发布总控`,key:`release-control`,children:[{title:`前台站点`,key:`release-site`,children:[{title:`首页编排`,key:`site-home`},{title:`价格页`,key:`site-pricing`}]},{title:`运营链路`,key:`release-ops`,children:[{title:`投放素材`,key:`ops-assets`},{title:`归因回传`,key:`ops-attribution`}]},{title:`合规审查`,key:`release-compliance`,children:[{title:`隐私条款`,key:`compliance-privacy`},{title:`审计记录`,key:`compliance-audit`}]}]}],wt=[{title:`权限控制`,key:`permission-disabled-root`,children:[{title:`只读目录`,key:`readonly-folder`,disabled:!0,children:[{title:`首页编排`,key:`readonly-home`},{title:`价格页`,key:`readonly-pricing`}]},{title:`可编辑目录`,key:`editable-folder`,children:[{title:`投放素材`,key:`editable-assets`},{title:`归因回传`,key:`editable-attribution`,disableCheckbox:!0}]},{title:`审计日志（仅禁用复选框）`,key:`audit-log`,disableCheckbox:!0}]}],Tt=[{nodeId:1,parentId:0,code:`workspace`,name:`Workspace`},{nodeId:2,parentId:1,code:`workflow`,name:`Workflow board`},{nodeId:3,parentId:1,code:`briefs`,name:`Briefs`},{nodeId:4,parentId:2,code:`review`,name:`Design review`},{nodeId:5,parentId:2,code:`release`,name:`Release checklist`},{nodeId:6,parentId:3,code:`content`,name:`Content drafts`}],Et=[{title:`app`,key:`dir-app`,children:[{title:`pages`,key:`dir-pages`,children:[{title:`Tree.tsx`,key:`file-tree-page`},{title:`Transfer.tsx`,key:`file-transfer-page`}]},{title:`site`,key:`dir-site`,children:[{title:`SidebarPlaygroundDesign.tsx`,key:`file-sidebar`}]}]},{title:`packages`,key:`dir-packages`,children:[{title:`runtime`,key:`dir-runtime`},{title:`rue-design`,key:`dir-rue-design`}]},{title:`README.md`,key:`file-readme`}],Z=[{title:`alpha.ts`,key:`range-alpha`},{title:`beta.ts`,key:`range-beta`},{title:`gamma.ts`,key:`range-gamma`},{title:`delta.ts`,key:`range-delta`},{title:`epsilon.ts`,key:`range-epsilon`}],Q=[{title:`src`,key:`drag-src`,kind:`folder`,children:[{title:`components`,key:`drag-components`,kind:`folder`,children:[{title:`Tree.tsx`,key:`drag-tree-file`,kind:`file`},{title:`Transfer.tsx`,key:`drag-transfer-file`,kind:`file`}]},{title:`main.ts`,key:`drag-main-file`,kind:`file`}]},{title:`docs`,key:`drag-docs`,kind:`folder`,children:[{title:`routing.md`,key:`drag-routing-file`,kind:`file`},{title:`installation.md`,key:`drag-install-file`,kind:`file`}]},{title:`package.json`,key:`drag-package-file`,kind:`file`}],$=Array.from({length:120},(e,t)=>({title:`Page ${String(t+1).padStart(3,`0`)}`,key:`virtual-${t}`})),Dt=Array.from({length:64},(e,t)=>({title:`Workspace ${String(t+1).padStart(2,`0`)}`,key:`async-virtual-root-${t}`,isLeaf:!1})),Ot=`import { ref } from '@rue-js/rue'
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
</div>`,zt=[{prop:`treeData`,description:`树数据源，支持嵌套 children 和字段映射。`,type:`TreeDataNode[]`,defaultValue:`[]`},{prop:`selectedKeys / defaultSelectedKeys`,description:`受控与非受控的当前选中项，multiple 打开后允许多选。`,type:`TreeKey[]`,defaultValue:`[]`},{prop:`checkedKeys / defaultCheckedKeys`,description:`勾选模式下的选中集合，strict 模式会回传 checked / halfChecked 结构。`,type:`TreeKey[] | { checked: TreeKey[]; halfChecked: TreeKey[] }`,defaultValue:`[]`},{prop:`expandedKeys / defaultExpandedKeys / defaultExpandAll`,description:`控制展开态，适合目录树、权限树和异步加载场景。`,type:`TreeKey[] / boolean`,defaultValue:`[] / false`},{prop:`checkable / checkStrictly`,description:`切换勾选与父子联动模式；strict 会关闭级联。`,type:`boolean`,defaultValue:`false`},{prop:`treeDataSimpleMode / fieldNames`,description:`直接接入 id / pId 扁平数据，同时可映射 title、key、children 字段。`,type:`boolean | TreeSimpleModeConfig / TreeFieldNames`,defaultValue:`- / -`},{prop:`allowSearch / searchValue / filterTreeNode`,description:`提供内置搜索输入和过滤逻辑，命中后会保持祖先链路。`,type:`boolean / string / boolean | ((inputValue, node) => boolean)`,defaultValue:`false / - / true`},{prop:`loadData`,description:`展开未加载分支时触发异步加载，适合远端目录与超大树。`,type:`(node: TreeNode) => Promise<any> | void`,defaultValue:`-`},{prop:`rangeSelect / Tree.DirectoryTree / expandAction / toggleSelect`,description:`Tree 多选和目录树都支持 shift 区间选择；目录树额外提供展开动作和 ctrl/meta 追加选择开关。`,type:`false | "append" | "replace" / DirectoryTreeProps / false | "click" | "doubleClick" / boolean`,defaultValue:`"append" / blockNode=true / showIcon=true / "click" / true`},{prop:`draggable / allowDrop / onDrop`,description:`开启拖拽排序并控制是否允许落点；allowDrop 和 onDrop 都会拿到 dropToGap，UI 会同步显示插前、插后或放入占位态。`,type:`TreeDraggable / (info) => boolean / (info) => void`,defaultValue:`false / - / -`},{prop:`height / itemHeight / virtual`,description:`为长列表开启虚拟滚动；height 定义视口高度，itemHeight 用于估算渲染窗口，也能和 loadData 组合接超长懒加载树。`,type:`number / number / boolean`,defaultValue:`- / 自动按尺寸估算 / true`},{prop:`showLine / showIcon / blockNode`,description:`控制树线、节点图标和整行可点的布局表现。`,type:`boolean`,defaultValue:`false`},{prop:`titleRender / switcherIcon / icon`,description:`按节点态自定义标题、展开图标和节点图标。`,type:`render function | any`,defaultValue:`-`}],Bt=e=>Array.isArray(e)?e:e.checked,Vt=(e,t)=>Array.isArray(e)?t?.halfCheckedKeys??[]:e.halfChecked,Ht=e=>`${typeof e}:${String(e)}`,Ut=e=>e.map(e=>({...e,children:Array.isArray(e.children)?Ut(e.children):e.children})),Wt=(e,t)=>{let n=Ht(t);for(let r=0;r<e.length;r+=1){let i=e[r];if(Ht(i.key)===n){let[t]=e.splice(r,1);return t??null}if(Array.isArray(i.children)){let e=Wt(i.children,t);if(e)return e}}return null},Gt=(e,t,n,r)=>{let i=Ht(n);for(let a=0;a<e.length;a+=1){let o=e[a];if(Ht(o.key)===i){if(r===0){let e=Array.isArray(o.children)?[...o.children]:[];e.push(t),o.children=e}else e.splice(r<0?a:a+1,0,t);return!0}if(Array.isArray(o.children)&&Gt(o.children,t,n,r))return!0}return!1},Kt=(e,t)=>{let n=Ut(e),r=Wt(n,t.dragNode.key);return r&&(Gt(n,r,t.node.key,t.dropPosition)||n.push(r)),n},qt=(e,t,n)=>{let r=Ht(t);for(let i=0;i<e.length;i+=1){let a=e[i];if(Ht(a.key)===r){let t=n(a);if(t===a)return e;let r=e.slice();return r[i]=t,r}if(Array.isArray(a.children)&&a.children.length){let r=qt(a.children,t,n);if(r===a.children)continue;let o=e.slice();return o[i]={...a,children:r},o}}return e},Jt=e=>e.reduce((e,t)=>!Array.isArray(t.children)||!t.children.length?e:e+1+Jt(t.children),0),Yt=e=>{let t=x(e.model),r=u(()=>!!t.get().open),a=u(()=>!!t.get().children&&t.get().children.length>0),s=e=>{e?.stopPropagation(),t.get().open=!r.get()},c=e=>{e?.stopPropagation(),t.get().children||(t.get().children=[]),t.get().children.push({id:`${t.get().id}-new-${t.get().children.length}`,name:`new stuff`}),t.get().open=!0},l=e=>{e?.stopPropagation(),a.get()||(t.get().children=[],c(),t.get().open=!0)};return N(()=>C(h(Object.assign(e=>{let u=yt().content.cloneNode(!0).firstChild,d=u.childNodes[0],f=u.childNodes[0].childNodes[0].childNodes[0],p=f.parentNode,m=u.childNodes[0].childNodes[1].childNodes[0],g=m.parentNode,_=u.childNodes[1],v=_.parentNode;d.setAttribute(`type`,`button`);let ee;V(()=>{let e=`flex items-center gap-2 rounded-xl px-3 py-2 text-left text-sm transition `+(a.get()?`font-semibold text-base-content`:`text-base-content/80 hover:bg-base-200/70`),t=e==null?``:String(e);Object.is(ee,t)||(ee=t,d.className=t)});let C=e=>{let t=e=>s(e);typeof t==`function`&&t(e)};d.addEventListener(`click`,C),i(()=>d.removeEventListener(`click`,C));let w=e=>{let t=e=>l(e);typeof t==`function`&&t(e)};d.addEventListener(`dblclick`,w),i(()=>d.removeEventListener(`dblclick`,w));let T=y(``);p.insertBefore(T,f),p.removeChild(f),se(T,()=>a.get()?r.get()?`−`:`+`:`•`);let te=y(``);return g.insertBefore(te,m),g.removeChild(m),se(te,()=>t.get().name),j(v,_,()=>a.get()&&r.get()?{__rue_compiled_branch_key:!0,create:()=>h(Object.assign(e=>{let r=E(`ul`,e);r.className=`mt-1 grid gap-1 pl-5`;let a=ne(`rue:list:end`);M(r,a);let s=[];V(()=>{let e=t.get().children||[];s=ae(a.parentNode,a,s,e,(e,t)=>e.id,(e,t)=>{let r=x(e);return n((e,t,n)=>o(e,n,()=>re(Yt,()=>({model:r.get()}))),(n,i)=>{e=n,t=i,r.set(n)})})}),i(()=>S(s));let l=E(`li`,r);M(r,l),l.className=`list-none`;let u=E(`button`,l);M(l,u),u.setAttribute(`type`,`button`),u.className=`btn btn-ghost btn-xs rounded-full text-emerald-600`;let d=e=>{let t=e=>c(e);typeof t==`function`&&t(e)};return u.addEventListener(`click`,d),i(()=>u.removeEventListener(`click`,d)),M(u,y(`+ add child`)),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>h(Object.assign(e=>{let t=b();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),{__rue_compiled_host:u,__rue_compiled_roots:[u]}},{__rue_compiled_explicit_roots:!0})),e=>T(()=>{t.set(e.model)}),()=>e))},Xt=()=>{let e=L([`docs-api`]),r=L([`dir-app`]),a=L(`click`),s=L(!0),l=u(()=>s.value?`append`:!1),d=L([]),m=L([]),g=L(0),_=L([`release-control`]),v=L([`site-home`]),ee=L([`release-control`,`release-site`]),w=L([`editable-assets`]),te=L([`workflow`]),O=L([]),k=L([]),P=L(Ut(Q)),F=L(`folder 支持放入；file 只允许插前和插后，悬停时会显示明确占位态。`),z=L([`virtual-3`]),B=L(Ut(Dt)),oe=L([]),ce=L([]),de=u(()=>Jt(B.value)),fe=L([{title:`发布总线`,key:`release-bus`,isLeaf:!1}]),pe=le({id:`root`,name:`My Tree`,open:!0,children:[{id:`hello`,name:`hello`},{id:`world`,name:`world`},{id:`branch`,name:`child folder`,open:!0,children:[{id:`branch-1`,name:`design review`},{id:`branch-2`,name:`release note`}]}]}),W={basic:L(`preview`),directory:L(`preview`),directoryRange:L(`preview`),checkable:L(`preview`),checkableDisabled:L(`preview`),simple:L(`preview`),async:L(`preview`),drag:L(`preview`),virtual:L(`preview`),virtualAsync:L(`preview`),legacy:L(`preview`)},me=async e=>{e.key===`release-bus`&&(fe.value=[{title:`发布总线`,key:`release-bus`,isLeaf:!1,children:[{title:`桌面端`,key:`desktop`,children:[{title:`Windows`,key:`desktop-win`},{title:`macOS`,key:`desktop-mac`}]},{title:`移动端`,key:`mobile`,children:[{title:`iOS`,key:`mobile-ios`},{title:`Android`,key:`mobile-android`}]}]}])},he=async e=>{e.children.length||(B.value=qt(B.value,e.key,e=>({...e,children:Array.from({length:8},(t,n)=>({title:`${String(e.title)} / Module ${n+1}`,key:`${String(e.key)}-child-${n}`,isLeaf:n%3!=0}))})))},ge=()=>{d.value=[],m.value=[],g.value+=1};return N(()=>C(re(ue,()=>({children:(u,C,T)=>o(u,T,()=>h(Object.assign(u=>{let C=b(),T=bt().content.cloneNode(!0),N=T.firstChild,re=N.childNodes[3],L=re.parentNode,le=N.childNodes[4],ue=le.parentNode,_e=N.childNodes[5],ve=_e.parentNode,ye=N.childNodes[6],be=ye.parentNode,xe=N.childNodes[7],Se=xe.parentNode,Ce=N.childNodes[8],we=Ce.parentNode,Te=N.childNodes[9],Ee=Te.parentNode,De=N.childNodes[11],Oe=De.parentNode,ke=N.childNodes[12],G=ke.parentNode,Ae=N.childNodes[13],je=Ae.parentNode,K=N.childNodes[14],Me=K.parentNode,q=N.childNodes[15].childNodes[1],Ne=q.parentNode;C.appendChild(T);let Pe=D(L);I(Pe,U,()=>({title:`基础选中与整行交互`,summary:`默认 Tree 就是一个纯浏览 + 选中容器；blockNode 和 showIcon 让它更像配置面板里的主导航。`,tab:W.basic,code:Ot,preview:h(Object.assign(t=>{let r=ct().content.cloneNode(!0).firstChild,a=r.childNodes[0],s=a.parentNode,c=r.childNodes[1].childNodes[0].childNodes[1].childNodes[0],l=c.parentNode,u=D(s);return I(u,at,()=>({treeData:St,selectedKeys:e.value,defaultExpandAll:!0,showIcon:!0,blockNode:!0,onSelect:t=>{e.value=t}})),s.insertBefore(u,a),j(l,c,()=>e.value.length?{__rue_compiled_branch_key:!0,create:()=>h(Object.assign(t=>{let r=b(),a=ne(`rue:list:end`);M(r,a);let s=[];return V(()=>{let t=e.value||[];s=ae(a.parentNode,a,s,t,(e,t)=>String(e),(e,t)=>{let r=x(e);return n((e,t,n)=>o(e,n,()=>h(Object.assign(e=>{let t=E(`span`,e);t.className=`badge badge-outline badge-sm`;let n=y(``);return M(t,n),se(n,()=>String(r.get())),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(n,i)=>{e=n,t=i,r.set(n)})})}),i(()=>S(s)),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>h(Object.assign(e=>{let t=E(`span`,e);return t.className=`text-sm text-base-content/55`,M(t,y(`未选择`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0}))})),L.insertBefore(Pe,re);let Fe=D(ue);I(Fe,U,()=>({title:`DirectoryTree 目录树快捷 API`,summary:`Tree.DirectoryTree 默认补上目录图标、整行可点和 click 展开；这里先只看 expandAction 和 toggleSelect 这两个基础交互开关。`,tab:W.directory,code:Nt,preview:t(()=>{let e=b(),t=lt().content.cloneNode(!0),u=t.firstChild,d=u.childNodes[1].childNodes[0].childNodes[1].childNodes[0],m=u.childNodes[1].childNodes[0].childNodes[1].childNodes[1],g=u.childNodes[1].childNodes[0].childNodes[1].childNodes[2],_=u.childNodes[1].childNodes[0].childNodes[2].childNodes[0],v=u.childNodes[1].childNodes[0].childNodes[2].childNodes[1],ee=u.childNodes[0],C=ee.parentNode,w=u.childNodes[1].childNodes[1].childNodes[1].childNodes[0],T=w.parentNode,te=u.childNodes[1].childNodes[2].childNodes[1].childNodes[0],D=te.parentNode,O=u.childNodes[1].childNodes[2].childNodes[3].childNodes[0],k=O.parentNode,ne=u.childNodes[1].childNodes[2].childNodes[5].childNodes[0],j=ne.parentNode;e.appendChild(t),H(d,`type`,`button`),V(()=>{f(d,a.value===`click`?`btn btn-primary btn-xs`:`btn btn-ghost btn-xs`)});let N=e=>{let t=()=>{a.value=`click`};typeof t==`function`&&t(e)};d.addEventListener(`click`,N),p(()=>d.removeEventListener(`click`,N)),H(m,`type`,`button`),V(()=>{f(m,a.value===`doubleClick`?`btn btn-primary btn-xs`:`btn btn-ghost btn-xs`)});let P=e=>{let t=()=>{a.value=`doubleClick`};typeof t==`function`&&t(e)};m.addEventListener(`click`,P),p(()=>m.removeEventListener(`click`,P)),H(g,`type`,`button`),V(()=>{f(g,a.value===!1?`btn btn-primary btn-xs`:`btn btn-ghost btn-xs`)});let re=e=>{let t=()=>{a.value=!1};typeof t==`function`&&t(e)};g.addEventListener(`click`,re),p(()=>g.removeEventListener(`click`,re)),H(_,`type`,`button`),V(()=>{f(_,s.value?`btn btn-primary btn-xs`:`btn btn-ghost btn-xs`)});let F=e=>{let t=()=>{s.value=!0};typeof t==`function`&&t(e)};_.addEventListener(`click`,F),p(()=>_.removeEventListener(`click`,F)),H(v,`type`,`button`),V(()=>{f(v,s.value?`btn btn-ghost btn-xs`:`btn btn-primary btn-xs`)});let I=e=>{let t=()=>{s.value=!1};typeof t==`function`&&t(e)};v.addEventListener(`click`,I),p(()=>v.removeEventListener(`click`,I)),V(()=>{let e=c(at.DirectoryTree,()=>({treeData:Et,selectedKeys:r.value,multiple:!0,expandAction:a.value,toggleSelect:s.value,rangeSelect:l.get(),onSelect:e=>{r.value=e}}));A(()=>R(e,C,ee))});let L=[];return V(()=>{let e=r.value||[];L=ae(T,w,L,e,(e,t)=>String(e),(e,t)=>{let r=x(e);return n((e,t,n)=>o(e,n,()=>h(Object.assign(e=>{let t=E(`span`,e);t.className=`badge badge-outline badge-sm`;let n=y(``);return M(t,n),se(n,()=>String(r.get())),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(n,i)=>{e=n,t=i,r.set(n)})})}),i(()=>S(L)),V(()=>{let e=String(a.value);A(()=>R(e,D,te))}),V(()=>{let e=String(s.value);A(()=>R(e,k,O))}),V(()=>{let e=String(l.get());A(()=>R(e,j,ne))}),e},!0)})),ue.insertBefore(Fe,le);let Ie=D(ve);I(Ie,U,()=>({title:`shift append vs shift replace`,summary:`Shift 的基础语义是先选一个节点，再 Shift 选另一个节点，中间连续区间都会选中；append / replace 只决定当前额外选择是否保持。`,tab:W.directoryRange,code:Pt,preview:t(()=>{let e=b(),t=ut().content.cloneNode(!0),r=t.firstChild,a=r.childNodes[0].childNodes[3],s=r.childNodes[1].childNodes[0].childNodes[1],l=s.parentNode,u=r.childNodes[1].childNodes[0].childNodes[2].childNodes[1].childNodes[0],_=u.parentNode,v=r.childNodes[1].childNodes[1].childNodes[1],ee=v.parentNode,C=r.childNodes[1].childNodes[1].childNodes[2].childNodes[1].childNodes[0],w=C.parentNode;e.appendChild(t),H(a,`type`,`button`),f(a,`btn btn-ghost btn-xs mt-3`);let T=e=>{let t=ge;typeof t==`function`&&t(e)};return a.addEventListener(`click`,T),p(()=>a.removeEventListener(`click`,T)),V(()=>{let e=c(at.DirectoryTree,()=>({key:`append-${g.value}`,treeData:Z,selectedKeys:d.value,multiple:!0,toggleSelect:!0,rangeSelect:`append`,onSelect:e=>{d.value=e}}));A(()=>R(e,l,s))}),j(_,u,()=>d.value.length?{__rue_compiled_branch_key:!0,create:()=>h(Object.assign(e=>{let t=b(),r=ne(`rue:list:end`);M(t,r);let a=[];return V(()=>{let e=d.value||[];a=ae(r.parentNode,r,a,e,(e,t)=>String(e),(e,t)=>{let r=x(e);return n((e,t,n)=>o(e,n,()=>h(Object.assign(e=>{let t=E(`span`,e);t.className=`badge badge-outline badge-sm`;let n=y(``);return M(t,n),se(n,()=>String(r.get())),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(n,i)=>{e=n,t=i,r.set(n)})})}),i(()=>S(a)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>h(Object.assign(e=>{let t=E(`span`,e);return t.className=`text-sm text-base-content/55`,M(t,y(`还没有选择`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),V(()=>{let e=c(at.DirectoryTree,()=>({key:`replace-${g.value}`,treeData:Z,selectedKeys:m.value,multiple:!0,toggleSelect:!0,rangeSelect:`replace`,onSelect:e=>{m.value=e}}));A(()=>R(e,ee,v))}),j(w,C,()=>m.value.length?{__rue_compiled_branch_key:!0,create:()=>h(Object.assign(e=>{let t=b(),r=ne(`rue:list:end`);M(t,r);let a=[];return V(()=>{let e=m.value||[];a=ae(r.parentNode,r,a,e,(e,t)=>String(e),(e,t)=>{let r=x(e);return n((e,t,n)=>o(e,n,()=>h(Object.assign(e=>{let t=E(`span`,e);t.className=`badge badge-outline badge-sm`;let n=y(``);return M(t,n),se(n,()=>String(r.get())),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(n,i)=>{e=n,t=i,r.set(n)})})}),i(()=>S(a)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>h(Object.assign(e=>{let t=E(`span`,e);return t.className=`text-sm text-base-content/55`,M(t,y(`还没有选择`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),e},!0)})),ve.insertBefore(Ie,_e);let Le=D(be);I(Le,U,()=>({title:`父子联动与半选态`,summary:`这一块只看级联勾选和 halfChecked，不再混入 disabled / disableCheckbox，点击父节点时能直接看到整棵子树联动。`,tab:W.checkable,code:kt,preview:h(Object.assign(e=>{let t=X().content.cloneNode(!0).firstChild,r=t.childNodes[0],a=r.parentNode,s=t.childNodes[1].childNodes[0].childNodes[1].childNodes[0],c=s.parentNode,l=t.childNodes[1].childNodes[1].childNodes[1].childNodes[0],u=l.parentNode,d=t.childNodes[1].childNodes[2].childNodes[1].childNodes[0],f=d.parentNode,p=D(a);I(p,at,()=>({treeData:Ct,selectedKeys:_.value,checkedKeys:v.value,checkable:!0,defaultExpandAll:!0,showLine:!0,blockNode:!0,onSelect:e=>{_.value=e},onCheck:(e,t)=>{v.value=Bt(e),ee.value=Vt(e,t)}})),a.insertBefore(p,r),j(c,s,()=>_.value.length?{__rue_compiled_branch_key:!0,create:()=>h(Object.assign(e=>{let t=b(),r=ne(`rue:list:end`);M(t,r);let a=[];return V(()=>{let e=_.value||[];a=ae(r.parentNode,r,a,e,(e,t)=>String(e),(e,t)=>{let r=x(e);return n((e,t,n)=>o(e,n,()=>h(Object.assign(e=>{let t=E(`span`,e);t.className=`badge badge-outline badge-sm`;let n=y(``);return M(t,n),se(n,()=>String(r.get())),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(n,i)=>{e=n,t=i,r.set(n)})})}),i(()=>S(a)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>h(Object.assign(e=>{let t=E(`span`,e);return t.className=`text-sm text-base-content/55`,M(t,y(`当前没有选中节点`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))});let m=[];return V(()=>{let e=v.value||[];m=ae(u,l,m,e,(e,t)=>String(e),(e,t)=>{let r=x(e);return n((e,t,n)=>o(e,n,()=>h(Object.assign(e=>{let t=E(`span`,e);t.className=`badge badge-primary badge-outline badge-sm`;let n=y(``);return M(t,n),se(n,()=>String(r.get())),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(n,i)=>{e=n,t=i,r.set(n)})})}),i(()=>S(m)),j(f,d,()=>ee.value.length?{__rue_compiled_branch_key:!0,create:()=>h(Object.assign(e=>{let t=b(),r=ne(`rue:list:end`);M(t,r);let a=[];return V(()=>{let e=ee.value||[];a=ae(r.parentNode,r,a,e,(e,t)=>String(e),(e,t)=>{let r=x(e);return n((e,t,n)=>o(e,n,()=>h(Object.assign(e=>{let t=E(`span`,e);t.className=`badge badge-ghost badge-sm`;let n=y(``);return M(t,n),se(n,()=>String(r.get())),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(n,i)=>{e=n,t=i,r.set(n)})})}),i(()=>S(a)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>h(Object.assign(e=>{let t=E(`span`,e);return t.className=`text-sm text-base-content/55`,M(t,y(`当前没有半选`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))})),be.insertBefore(Le,ye);let J=D(Se);I(J,U,()=>({title:`禁用节点与禁用复选框`,summary:`把 disabled 和 disableCheckbox 单独拆出来看：前者整节点只读，后者只禁用勾选框，不再干扰联动示例。`,tab:W.checkableDisabled,code:At,preview:h(Object.assign(e=>{let t=dt().content.cloneNode(!0).firstChild,r=t.childNodes[0],a=r.parentNode,s=t.childNodes[1].childNodes[0].childNodes[1].childNodes[0],c=s.parentNode,l=D(a);return I(l,at,()=>({treeData:wt,checkedKeys:w.value,checkable:!0,defaultExpandAll:!0,showLine:!0,blockNode:!0,onCheck:e=>{w.value=Bt(e)}})),a.insertBefore(l,r),j(c,s,()=>w.value.length?{__rue_compiled_branch_key:!0,create:()=>h(Object.assign(e=>{let t=b(),r=ne(`rue:list:end`);M(t,r);let a=[];return V(()=>{let e=w.value||[];a=ae(r.parentNode,r,a,e,(e,t)=>String(e),(e,t)=>{let r=x(e);return n((e,t,n)=>o(e,n,()=>h(Object.assign(e=>{let t=E(`span`,e);t.className=`badge badge-outline badge-sm`;let n=y(``);return M(t,n),se(n,()=>String(r.get())),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(n,i)=>{e=n,t=i,r.set(n)})})}),i(()=>S(a)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>h(Object.assign(e=>{let t=E(`span`,e);return t.className=`text-sm text-base-content/55`,M(t,y(`当前没有勾选`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))})),Se.insertBefore(J,xe);let Re=D(we);I(Re,U,()=>({title:`Simple Mode + Search`,summary:`扁平数据直入后，内置搜索会保持命中节点的祖先链，不会把层级上下文切断。`,tab:W.simple,code:jt,preview:t(()=>{let e=b(),t=ft().content.cloneNode(!0),n=t.firstChild,r=n.childNodes[0],i=r.parentNode,a=n.childNodes[1].childNodes[1].childNodes[0],o=a.parentNode;e.appendChild(t);let s=D(i);return I(s,at,()=>({treeData:Tt,treeDataSimpleMode:{id:`nodeId`,pId:`parentId`,rootPId:0},fieldNames:{title:`name`,key:`code`},selectedKeys:te.value,allowSearch:!0,defaultExpandAll:!0,onSelect:e=>{te.value=e}})),i.insertBefore(s,r),V(()=>{let e=JSON.stringify(te.value);A(()=>R(e,o,a))}),e},!0)})),we.insertBefore(Re,Ce);let Y=D(Ee);I(Y,U,()=>({title:`Async Load 与自定义标题`,summary:`第一次展开时再拉子节点，同时用 titleRender 和 icon 把状态信息塞回每一行。`,tab:W.async,code:Mt,preview:t(()=>{let e=b(),n=pt().content.cloneNode(!0),r=n.firstChild,i=r.childNodes[0],a=i.parentNode,o=r.childNodes[1].childNodes[0].childNodes[1].childNodes[0],s=o.parentNode,c=r.childNodes[1].childNodes[1].childNodes[1].childNodes[0],l=c.parentNode;e.appendChild(n);let u=D(a);return I(u,at,()=>({treeData:fe.value,selectedKeys:O.value,expandedKeys:k.value,loadData:me,showLine:!0,showIcon:!0,blockNode:!0,titleRender:({node:e,loading:n})=>t(t=>{let r=ot().content.cloneNode(!0).firstChild,i=r.childNodes[0].childNodes[0],a=i.parentNode,o=r.childNodes[1].childNodes[0],s=o.parentNode;return V(()=>{let t=e.title;A(()=>R(t,a,i))}),j(s,o,()=>n?{__rue_compiled_branch_key:!0,create:()=>h(Object.assign(e=>{let t=y(`loading`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>ie(()=>e.children.length?{__rue_compiled_branch_key:!0,create:()=>h(Object.assign(e=>{let t=y(`branch`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>h(Object.assign(e=>{let t=y(`leaf`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))})}),r}),onSelect:e=>{O.value=e},onExpand:e=>{k.value=e}})),a.insertBefore(u,i),V(()=>{let e=JSON.stringify(k.value);A(()=>R(e,s,o))}),V(()=>{let e=JSON.stringify(O.value);A(()=>R(e,l,c))}),e},!0)})),Ee.insertBefore(Y,Te);let ze=D(Oe);I(ze,U,()=>({title:`allowDrop 策略与拖拽占位`,summary:`allowDrop 可以把 folder / file 的落点规则写清楚；hover 时 Tree 会直接给出插前、插后或放入占位提示。`,tab:W.drag,code:Ft,preview:t(()=>{let e=b(),n=mt().content.cloneNode(!0),r=n.firstChild,i=r.childNodes[0],a=i.parentNode,o=r.childNodes[1].childNodes[0].childNodes[1].childNodes[0],s=o.parentNode;e.appendChild(n);let c=D(a);return I(c,at,()=>({treeData:P.value,draggable:!0,blockNode:!0,defaultExpandAll:!0,allowDrop:({dropNode:e,dropToGap:t})=>t||e.raw.kind!==`file`,titleRender:({node:e})=>t(t=>{let n=st().content.cloneNode(!0).firstChild,r=n.childNodes[1],i=n.childNodes[0].childNodes[0],a=i.parentNode,o=n.childNodes[1].childNodes[0],s=o.parentNode;return V(()=>{f(r,e.raw.kind===`folder`?`badge badge-ghost badge-xs`:`badge badge-outline badge-xs`)}),V(()=>{let t=e.title;A(()=>R(t,a,i))}),V(()=>{let t=e.raw.kind;A(()=>R(t,s,o))}),n}),onDrop:e=>{P.value=Kt(P.value,e),F.value=`${String(e.dragNode.key)} -> ${String(e.node.key)} (${e.dropToGap?e.dropPosition<0?`before`:`after`:`inside`})`}})),a.insertBefore(c,i),V(()=>{let e=F.value;A(()=>R(e,s,o))}),e},!0)})),Oe.insertBefore(ze,De);let Be=D(G);I(Be,U,()=>({title:`Virtual Scroll`,summary:`长列表下只渲染可见窗口，height 和 itemHeight 负责限定视口和估算切片范围。`,tab:W.virtual,code:It,preview:t(()=>{let e=b(),t=ht().content.cloneNode(!0),n=t.firstChild,r=n.childNodes[0],i=r.parentNode,a=n.childNodes[1].childNodes[0].childNodes[1].childNodes[0],o=a.parentNode,s=n.childNodes[1].childNodes[1].childNodes[1].childNodes[0],c=s.parentNode;e.appendChild(t);let l=D(i);return I(l,at,()=>({treeData:$,selectedKeys:z.value,height:320,itemHeight:42,virtual:!0,blockNode:!0,onSelect:e=>{z.value=e}})),i.insertBefore(l,r),V(()=>{let e=$.length;A(()=>R(e,o,a))}),V(()=>{let e=JSON.stringify(z.value);A(()=>R(e,c,s))}),e},!0)})),G.insertBefore(Be,ke);let Ve=D(je);I(Ve,U,()=>({title:`Virtual + Async Load 场景页`,summary:`把 virtual、height、itemHeight 和 loadData 合在一起，就能接超长目录或资源树，只在展开分支时再注入子节点。`,tab:W.virtualAsync,code:Lt,preview:t(()=>{let e=b(),n=gt().content.cloneNode(!0),r=n.firstChild,i=r.childNodes[0],a=i.parentNode,o=r.childNodes[1].childNodes[0].childNodes[1].childNodes[0],s=o.parentNode,c=r.childNodes[1].childNodes[1].childNodes[1].childNodes[0],l=c.parentNode,u=r.childNodes[1].childNodes[2].childNodes[1].childNodes[0],d=u.parentNode;e.appendChild(n);let f=D(a);return I(f,at,()=>({treeData:B.value,selectedKeys:ce.value,expandedKeys:oe.value,height:340,itemHeight:40,virtual:!0,showIcon:!0,blockNode:!0,loadData:he,titleRender:({node:e,loading:n})=>t(t=>{let r=ot().content.cloneNode(!0).firstChild,i=r.childNodes[0].childNodes[0],a=i.parentNode,o=r.childNodes[1].childNodes[0],s=o.parentNode;return V(()=>{let t=e.title;A(()=>R(t,a,i))}),j(s,o,()=>n?{__rue_compiled_branch_key:!0,create:()=>h(Object.assign(e=>{let t=y(`loading`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>ie(()=>e.children.length?{__rue_compiled_branch_key:!0,create:()=>h(Object.assign(e=>{let t=y(`loaded`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>ie(()=>e.isLeaf?{__rue_compiled_branch_key:!0,create:()=>h(Object.assign(e=>{let t=y(`leaf`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>h(Object.assign(e=>{let t=y(`lazy`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))})})}),r}),onSelect:e=>{ce.value=e},onExpand:e=>{oe.value=e}})),a.insertBefore(f,i),V(()=>{let e=B.value.length;A(()=>R(e,s,o))}),V(()=>{let e=de.get();A(()=>R(e,l,c))}),V(()=>{let e=JSON.stringify(oe.value);A(()=>R(e,d,u))}),e},!0)})),je.insertBefore(Ve,Ae);let He=D(Me);I(He,U,()=>({title:`展示基础递归 示例`,summary:`基础的 TreeView 行为没有删掉，只是并进 design 页面里，方便对比“直接改数据”这类递归写法。`,tab:W.legacy,code:Rt,preview:h(Object.assign(e=>{let t=_t().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0].childNodes[0],r=n.parentNode,i=D(r);return I(i,Yt,()=>({model:pe})),r.insertBefore(i,n),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))})),Me.insertBefore(He,K);let Ue=D(Ne);return I(Ue,xt,()=>({rows:zt})),Ne.insertBefore(Ue,q),{__rue_compiled_host:C,__rue_compiled_roots:[C]}},{__rue_compiled_explicit_roots:!0})))})),e=>T(()=>{})))};export{Xt as default};