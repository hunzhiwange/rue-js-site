import{$ as e,E as t,Et as n,Ht as r,Jt as i,Pt as a,Q as o,Qt as s,Wt as c,X as l,Y as u,Yt as d,Zt as f,et as p,ht as m,j as h,k as g,l as _,lt as v,nt as y,o as b,p as x,s as S,st as C,t as w,tt as T,vt as E,zt as D}from"./vapor-runtime-CXIalONM.js";import{a as O,n as k}from"./vapor-helpers-vapor-CoXKrGmY.js";import{a as A,i as j}from"./persistentSidebarPlayground-DBDp2zjv.js";import{r as ee}from"./SidebarPlaygroundDesign-CsC_YS7V.js";import{t as M}from"./PreviewBlock-RQJhyX9w.js";var te=new Map,ne=new WeakMap,re=new WeakMap,N=8,P=e=>typeof e==`object`&&!!e||typeof e==`function`,F=(e,t)=>e.length===t.length&&e.every((e,n)=>e===t[n]),ie=(e,t,n)=>e.treeDataSimpleMode===t&&e.fieldNames===n,I=(e,t,n,r,i)=>(e.treeData===t||F(e.treeDataRoots,n))&&ie(e,r,i),ae=(e,t,n,r)=>{let i=[P(e)?ne.get(e):void 0],a=t[0];P(a)&&a!==e&&i.push(re.get(a));for(let a of i){let i=a?.find(i=>I(i,e,t,n,r));if(i)return i}},oe=(e,t,n)=>{if(!P(t))return;let r=e.get(t);if(!r){e.set(t,[n]);return}let i=r.findIndex(e=>I(e,n.treeData,n.treeDataRoots,n.treeDataSimpleMode,n.fieldNames));i>=0?r[i]=n:(r.push(n),r.length>N&&r.shift())},L=e=>{oe(ne,e.treeData,e),oe(re,e.treeDataRoots[0],e)},se={title:`title`,key:`key`,children:`children`,disabled:`disabled`,selectable:`selectable`,checkable:`checkable`,disableCheckbox:`disableCheckbox`,isLeaf:`isLeaf`,icon:`icon`,className:`className`,id:`id`,pId:`pId`},R=(...e)=>e.filter(Boolean).join(` `),ce=e=>typeof e==`object`&&!!e&&!Array.isArray(e),z=e=>typeof e==`string`||typeof e==`number`,B=e=>`${typeof e}:${String(e)}`,V=e=>{let t=[],n=new Set;return(e??[]).forEach(e=>{let r=B(e);n.has(r)||(n.add(r),t.push(e))}),t},H=(e,t)=>e?t?`${e} ${t}`:e:t??``,le=()=>j(`span`,{className:`loading loading-spinner loading-xs`,"aria-hidden":`true`}),ue=({expanded:e,hidden:t})=>j(`svg`,{viewBox:`0 0 16 16`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,className:H(`size-4 transition-transform duration-200`,t?`opacity-0`:e?`rotate-90`:``),"aria-hidden":`true`,children:j(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`m6 3.5 4 4.5-4 4.5`})}),U=()=>j(`svg`,{viewBox:`0 0 16 16`,fill:`currentColor`,className:`size-4`,"aria-hidden":`true`,children:j(`path`,{d:`M5 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM11 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM11 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM5 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM11 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z`})}),de=({expanded:e})=>j(`svg`,{viewBox:`0 0 16 16`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,className:`size-4`,"aria-hidden":`true`,children:j(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:e?`M2.5 6.5h11l-1.2 6h-9.1l-1.2-6ZM2.5 5V3.5h4l1.2 1.5h5.8v1.5`:`M2.5 4.5h4l1.2 1.5h5.8v6.5h-11v-8Z`})}),fe=()=>A(`svg`,{viewBox:`0 0 16 16`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,className:`size-4`,"aria-hidden":`true`,children:[j(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M4 2.5h5l3 3v8H4v-11Z`}),j(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M9 2.5v3h3`})]}),W=(e,t,n)=>e[n?.[t]??se[t]],pe=(e,t)=>W(e,`title`,t)??e.title??e.key,G=e=>new Set(V(e).map(B)),me=(e,t)=>[e.flat.map(e=>`${e.parentKeyText??`root`}>${e.keyText}`).join(`|`),t.directoryMode?`directory`:`tree`,String(t.expandAction??!1),String(t.rangeSelect??!1)].join(`::`),he=e=>e==null||typeof e==`boolean`?``:typeof e==`string`||typeof e==`number`?String(e):Array.isArray(e)?e.map(e=>he(e)).filter(Boolean).join(` `):typeof e==`object`?[`title`,`label`,`name`,`text`,`description`,`children`].map(t=>he(e[t])).filter(Boolean).join(` `):``,ge=(e,t,n)=>{if(!t)return e;let r=ce(t)?t:void 0,i=r?.id??n?.id??se.id,a=r?.pId??n?.pId??se.pId,o=r?.rootPId??0,s=n?.children??se.children,c=new Map;e.forEach((e,t)=>{let n=e[i]??e.key??t;c.set(n,{...e,[s]:[]})});let l=[];return e.forEach((e,t)=>{let n=e[i]??e.key??t,r=e[a],u=c.get(n);if(!u)return;if(r==null||r===o||!c.has(r)){l.push(u);return}let d=c.get(r);if(!d){l.push(u);return}let f=d[s]??[];f.push(u),d[s]=f}),l},_e=(e,t)=>{let n=[],r={},i=(e,a,o,s)=>{let c=W(e,`key`,t),l=z(c)?c:o,u=B(l),d=W(e,`isLeaf`,t),f={key:l,keyText:u,title:pe(e,t),depth:a,children:[],raw:e,disabled:!!W(e,`disabled`,t),selectable:W(e,`selectable`,t)!==!1,checkable:W(e,`checkable`,t)!==!1,disableCheckbox:!!W(e,`disableCheckbox`,t),isLeaf:!1,className:W(e,`className`,t),icon:W(e,`icon`,t),parentKeyText:s};n.push(f),r[u]=f;let p=W(e,`children`,t);return f.children=Array.isArray(p)?p.map((e,t)=>i(e,a+1,`${o}-${t}`,u)):[],f.isLeaf=d===!0?!0:d===!1?!1:f.children.length===0,f};return{roots:e.map((e,t)=>i(e,0,`node-${t}`)),flat:n,byKeyText:r}},ve=e=>{let t=[],n=e=>{!e.disabled&&e.checkable&&!e.disableCheckbox&&t.push(e.keyText),e.children.forEach(e=>n(e))};return n(e),t},K=e=>{let t=[],n=e=>{t.push(e.key),e.children.forEach(e=>n(e))};return n(e),t},ye=(e,t,n)=>{let r=new Set,i=new Set,a={},o=e=>{let s=!e.disabled&&e.checkable&&!e.disableCheckbox,c=e.children.map(e=>o(e)).filter(e=>e.participates),l=t.has(e.keyText),u=l,d=!1;if(!n&&c.length>0){let e=c.every(e=>e.checked),t=c.some(e=>e.checked||e.halfChecked);u=l||e,d=!u&&t}let f={checked:u,halfChecked:d,participates:s||c.length>0};return a[e.keyText]=f,u&&s&&r.add(e.keyText),d&&s&&i.add(e.keyText),f};return e.forEach(e=>o(e)),{checkedKeys:r,halfCheckedKeys:i,stateMap:a}},be=(e,t,n,r)=>{let i=new Set(e),a=new Set(t),o=n.filter(e=>i.has(e.keyText)).map(e=>e.key).filter(z);return r?{checked:o,halfChecked:n.filter(e=>a.has(e.keyText)).map(e=>e.key).filter(z)}:o},xe=(e,t,n,r)=>{if(!n){let n=[],r=e=>{n.push({node:e,matched:!1}),t.has(e.keyText)&&e.children.forEach(e=>r(e))};return e.forEach(e=>r(e)),n}let i=e=>{let t=r(e),n=e.children.flatMap(e=>i(e));if(!t&&n.length===0)return[];if(t){let t=[{node:e,matched:!0}],n=e=>{t.push({node:e,matched:!1}),e.children.forEach(e=>n(e))};return e.children.forEach(e=>n(e)),t}return[{node:e,matched:!1},...n]};return e.flatMap(e=>i(e))},Se=(e,t,n)=>t?typeof n==`function`?n(t,e):n===!1?!0:he(e.title).toLowerCase().includes(t.toLowerCase()):!0,Ce=(e,t,n)=>{let r=t.parentKeyText;for(;r;){if(r===e.keyText)return!0;r=n[r]?.parentKeyText}return!1},we=e=>{let t=!!e,n=ce(e)?e:void 0;return{enabled:t,icon:n?.icon,nodeDraggable:r=>t?typeof e==`function`?e(r):n&&typeof n.nodeDraggable==`function`?n.nodeDraggable(r):!0:!1}},Te=(e,t,n,r,i)=>{if(!i||!n||!r)return{items:e,topSpacer:0,bottomSpacer:0};let a=r+2,o=Math.max(1,Math.ceil(n/a))+12,s=Math.max(0,e.length-o),c=Math.min(s,Math.max(0,Math.floor(t/a)-6)),l=Math.min(e.length,c+o);return{items:e.slice(c,l),topSpacer:c*a,bottomSpacer:Math.max(0,(e.length-l)*a)}},Ee=e=>{if(e===-1)return`before`;if(e===1)return`after`;if(e===0)return`inside`},De=(e,t)=>e.map(e=>t[e]?.key).filter(z),Oe=(e,t)=>{if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0},ke=e=>{switch(e){case`small`:case`sm`:return{headerPadding:`px-4 py-3`,bodyPadding:`px-3 py-3`,rowPadding:`py-1.5`,textClass:`text-sm`,rowMinHeight:36,rowEstimate:42};case`large`:case`lg`:return{headerPadding:`px-5 py-4`,bodyPadding:`px-4 py-4`,rowPadding:`py-2.5`,textClass:`text-[0.95rem]`,rowMinHeight:44,rowEstimate:50};default:return{headerPadding:`px-4 py-3.5`,bodyPadding:`px-3.5 py-3.5`,rowPadding:`py-2`,textClass:`text-sm`,rowMinHeight:40,rowEstimate:46}}},Ae=e=>{switch(e){case`error`:return`border-error/55 shadow-[0_0_0_1px_rgba(248,113,113,0.14)]`;case`warning`:return`border-warning/55 shadow-[0_0_0_1px_rgba(251,191,36,0.14)]`;default:return``}},je=({snapshot:e,version:t,loadingKeyTexts:n,fixedVirtualRowHeight:r,componentSize:i,classNames:a,styles:o,emptyText:s,showLine:c,disabled:l,blockNode:u,checkable:d,showIcon:f,selectable:p,hasLoadData:m,titleRender:h,switcherIcon:g,icon:_,directoryMode:v,dragConfig:y,handleDragStartNode:b,handleDragEnterNode:S,handleDragOverNode:C,handleDragLeaveNode:w,handleDragEndNode:T,handleDropNode:E,handleExpandToggle:D,handleCheck:O,handleDragMouseDown:k,handleLabelMouseDown:ee,handleLabelActivate:M,handleLabelContextMenu:te})=>{let ne=(e,t,n,r,i,a)=>typeof g==`function`?g({node:e,expanded:t,selected:n,checked:r,halfChecked:i,loading:a}):g===void 0?a?j(le,{}):j(ue,{expanded:t,hidden:e.isLeaf&&e.children.length===0}):g,re=e=>!(y.enabled&&y.nodeDraggable(e)&&!l&&!e.disabled)||y.icon===!1?null:j(`span`,{"aria-hidden":`true`,draggable:!0,className:H(`inline-flex size-6 shrink-0 cursor-grab items-center justify-center rounded-lg text-base-content/35 transition group-hover:text-base-content/55`,a?.dragHandle),style:o?.dragHandle,"data-rue-tree-drag-handle":`true`,onMouseDown:t=>k(e,t),children:y.icon??j(U,{})}),N=(e,t)=>A(`div`,{className:R(`pointer-events-none absolute inset-x-0 z-10 flex items-center gap-2 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-primary/85`,t===`before`?`-top-2.5`:`-bottom-2.5`),style:{paddingLeft:`${e.depth*18+20}px`},"data-rue-tree-drop-placeholder":t,children:[j(`span`,{className:`h-[2px] flex-1 rounded-full bg-primary/60`}),j(`span`,{className:`rounded-full bg-primary/10 px-2 py-1 text-[10px]`,children:`插入到此处`})]}),P=(e,t,n,r,i,a)=>typeof _==`function`?_({node:e,expanded:t,selected:n,checked:r,halfChecked:i,loading:a}):_===void 0?e.icon===void 0?f?v?j(`span`,{className:`inline-flex size-6 items-center justify-center text-base-content/60`,children:e.children.length>0||!e.isLeaf?j(de,{expanded:t}):j(fe,{})}):j(`span`,{className:`inline-flex size-6 shrink-0 items-center justify-center rounded-md bg-base-200/80 text-[10px] font-semibold text-base-content/60`,children:e.children.length>0||!e.isLeaf?`DIR`:`DOC`}):null:e.icon:_;return A(x,{children:[j(`span`,{hidden:!0,"aria-hidden":`true`,"data-rue-tree-content-version":String(t)}),e.virtualSlice.topSpacer>0?j(`div`,{style:{height:`${e.virtualSlice.topSpacer}px`},"aria-hidden":`true`}):null,e.virtualSlice.items.map(({node:t})=>{let s=e.checkState.stateMap[t.keyText]??{checked:!1,halfChecked:!1,participates:!0},g=e.searchValue?!0:e.expandedKeyTextSet.has(t.keyText),v=e.selectedKeyTextSet.has(t.keyText),x=n.includes(t.keyText),k=!!m||!!t.children.length||!t.isLeaf,F=e.dragState.overKeyText===t.keyText,ie=y.enabled&&y.nodeDraggable(t)&&!l&&!t.disabled,I=F?Ee(e.dragState.dropPosition):void 0,ae={node:t,expanded:g,selected:v,checked:s.checked,halfChecked:s.halfChecked,loading:x};return A(`div`,{className:H(R(`rue-tree-node group relative flex min-w-0 items-center gap-1 rounded-lg py-0.5 pr-2 text-base-content outline-none transition-colors duration-150`,l||t.disabled?`opacity-55`:I===`inside`?`bg-primary/10 ring-1 ring-primary/20`:I?`bg-primary/5`:`hover:bg-base-200/65`,c&&t.depth>0&&`border-l border-base-300/60`,t.className),a?.node),style:{paddingLeft:`${t.depth*18+8}px`,height:r?`${r}px`:void 0,minHeight:r?void 0:`${i.rowMinHeight}px`,...o?.node},"data-rue-tree-node":t.keyText,"data-rue-tree-drop-intent":I??``,"data-rue-tree-drop-position":F?String(e.dragState.dropPosition??0):``,draggable:ie,onDragStart:e=>b(t,e),onDragEnter:e=>S(t,e),onDragOver:e=>C(t,e),onDragLeave:e=>w(t,e),onDragEnd:e=>T(t,e),onDrop:e=>E(t,e),children:[I===`before`?N(t,`before`):null,j(`button`,{type:`button`,className:H(R(`inline-flex size-6 shrink-0 items-center justify-center rounded-md text-base-content/55 transition-colors duration-150 hover:bg-base-200 hover:text-base-content disabled:cursor-default disabled:opacity-30`,!k&&`pointer-events-none`),a?.switcher),style:o?.switcher,disabled:!k||l||t.disabled,"aria-label":g?`折叠节点`:`展开节点`,onClick:e=>D(t,e),children:ne(t,g,v,s.checked,s.halfChecked,x)}),d?j(`button`,{type:`button`,role:`checkbox`,"aria-checked":s.halfChecked?`mixed`:s.checked?`true`:`false`,disabled:l||t.disabled||t.disableCheckbox||!t.checkable,className:H(R(`inline-flex size-4 shrink-0 items-center justify-center rounded border text-[11px] font-semibold leading-none transition-colors duration-150`,s.checked||s.halfChecked?`border-primary bg-primary text-primary-content`:`border-base-content/35 bg-base-100 text-transparent hover:border-primary/60`,(l||t.disabled||t.disableCheckbox||!t.checkable)&&`cursor-not-allowed opacity-45`),a?.checkbox),style:o?.checkbox,onClick:e=>O(t,e),children:s.halfChecked?`−`:s.checked?`✓`:``}):null,re(t),f||t.icon!==void 0||_!==void 0?P(t,g,v,s.checked,s.halfChecked,x):null,A(`button`,{type:`button`,className:H(R(`flex min-w-0 items-center gap-2 rounded-md px-2 text-left transition-colors duration-150`,i.rowPadding,u?`flex-1 justify-between`:`max-w-full`,v?`selected bg-primary/12 text-primary`:`text-base-content hover:bg-base-200/70`,(l||t.disabled||!p||!t.selectable)&&`cursor-not-allowed opacity-55`),a?.label),style:o?.label,disabled:l||t.disabled||!p||!t.selectable,draggable:ie,onMouseDown:e=>ee(t,e),onClick:e=>M(t,e,`click`),onDblClick:e=>M(t,e,`doubleClick`),onContextMenu:e=>te(t,e),children:[h?h(ae):j(`span`,{className:`min-w-0 truncate`,children:t.title}),I?j(`span`,{className:`badge badge-primary badge-outline badge-xs shrink-0`,"data-rue-tree-drop-placeholder":I,children:I===`inside`?`放入`:I===`before`?`插前`:`插后`}):v?j(`span`,{className:`badge badge-primary badge-xs shrink-0`,children:`选中`}):null]}),I===`after`?N(t,`after`):null]},t.keyText)}),e.virtualSlice.bottomSpacer>0?j(`div`,{style:{height:`${e.virtualSlice.bottomSpacer}px`},"aria-hidden":`true`}):null,e.visibleNodes.length?null:j(`div`,{className:H(`rounded-lg px-3 py-8 text-center text-sm text-base-content/55`,a?.empty),style:o?.empty,children:s})]})},Me=({className:e,style:n,treeData:o=[],fieldNames:s,treeDataSimpleMode:c,selectedKeys:l,defaultSelectedKeys:u,checkedKeys:d,defaultCheckedKeys:p,expandedKeys:m,defaultExpandedKeys:_,defaultExpandAll:v,multiple:y,checkable:b,checkStrictly:x,showLine:S,showIcon:C,blockNode:w,selectable:T=!0,disabled:E,size:O,status:k,draggable:ee,allowDrop:M,virtual:N=!0,height:F,itemHeight:oe,titleRender:se,switcherIcon:ce,icon:le,filterTreeNode:ue,searchValue:U,defaultSearchValue:de,searchPlaceholder:fe=`搜索节点`,allowSearch:W,loadData:pe,emptyText:he=`暂无节点`,onSelect:Ee,onCheck:Me,onExpand:Ne,onSearch:q,onDoubleClick:Pe,onDragStart:Fe,onDragEnter:Ie,onDragOver:Le,onDragLeave:Re,onDragEnd:ze,onDrop:Be,onScroll:Ve,classNames:He,styles:Ue,directoryMode:J,expandAction:We=!1,toggleSelect:Ge=!0,rangeSelect:Ke=`append`,...qe})=>{let Je=i();function Ye(){let e=Je.current,t=r(o),n=r(c),i=r(s);if(e&&e.treeData===t&&ie(e,n,i))return e.normalizedTree;let a=Array.isArray(t)?t.slice():[];if(e&&I(e,t,a,n,i))return e.normalizedTree;let l=ae(t,a,n,i);if(l)return Je.current=l,l.normalizedTree;let u=_e(ge(o,c,s),s),d={treeData:t,treeDataRoots:a,treeDataSimpleMode:n,fieldNames:i,normalizedTree:u};return Je.current=d,L(d),u}let Xe=Ye(),Ze=Xe,Qe=me(Xe,{directoryMode:J,expandAction:We,rangeSelect:Ke}),$e=te.get(Qe)??(()=>{let e={};return te.set(Qe,e),e})(),et=i(null),tt=ke(O),nt=we(ee),rt=v?Xe.flat.filter(e=>e.children.length>0||!e.isLeaf).map(e=>e.key):_??[],Y=i(D(0)).current,it=i(D(V(u??l))).current,at=i(D(V(p))).current,ot=i(D(V((J?$e.expandedKeys:void 0)??rt))).current,st=i(D(V(l))).current,ct=i(D(V(m))).current,lt=i(D(d===void 0?new Set:G(Array.isArray(d)?d:d.checked))).current,ut=i(D(de??``)).current,dt=i(D([])).current,ft=i(D(0)).current,X=i(D(null)).current,pt=i(D([])).current,Z=i(D({})).current,mt=i(D({})).current,ht=i(D(null)).current,gt=i(D(!1)).current,_t=i(D(null)).current,vt=i(null);if(d!==void 0){let e=G(Array.isArray(d)?d:d.checked);Oe(lt.value,e)||(lt.value=e)}l!==void 0&&!Oe(G(st.value),G(l))&&(st.value=V(l)),m!==void 0&&!Oe(G(ct.value),G(m))&&(ct.value=V(m));let yt=oe??tt.rowEstimate,bt=typeof F==`number`&&F>0?F:void 0,xt=N!==!1&&bt&&typeof oe==`number`&&oe>0?oe:void 0;function Q(){Y.value+=1,dn()}function St(e=!1){if(e){let e=r(o),t=Array.isArray(e)?e[0]:void 0;Je.current=void 0,P(e)&&ne.delete(e),P(t)&&re.delete(t)}let t=Ye();return Ze=t,t}function $(){return Ze??St()}function Ct(){return l===void 0?it.value:st.value}function wt(){return m===void 0?ot.value:ct.value}function Tt(){return U===void 0?ut.value:U}function Et(){return d===void 0?G(at.value):lt.value}function Dt(){let e=$(),t=G(wt()),n=Tt();return xe(e.roots,t,n,e=>Se(e,n,ue))}function Ot(){Y.value;let e=$(),t=Tt(),n=G(Ct()),r=G(wt()),i=Et(),a=b?ye(e.roots,i,!!x):{checkedKeys:new Set,halfCheckedKeys:new Set,stateMap:{}},o=xe(e.roots,r,t,e=>Se(e,t,ue));return{searchValue:t,selectedKeyTextSet:n,expandedKeyTextSet:r,checkState:a,visibleNodes:o,virtualSlice:Te(o,ft.value,bt,yt,N!==!1&&!!bt),dragState:Z.value}}let kt=(e,t,n)=>{let r=V(e);return m===void 0?(ot.value=r,J&&($e.expandedKeys=r)):ct.value=r,Q(),Ne&&Ne(r,{node:t,expanded:r.some(e=>B(e)===t.keyText),nativeEvent:n}),r},At=(e,t,n)=>{let r=$(),i=V(e).filter(e=>r.byKeyText[B(e)]),a=i.map(e=>r.byKeyText[B(e)]).filter(Boolean);return l===void 0?it.value=i:st.value=i,Q(),Ee&&Ee(i,{node:t,nativeEvent:n,selected:i.some(e=>B(e)===t.keyText),selectedNodes:a}),i},jt=(e,t,n)=>{let r=$(),i=ye(r.roots,e,!!x),a=be(Array.from(i.checkedKeys),Array.from(i.halfCheckedKeys),r.flat,!!x);d===void 0?at.value=x?a.checked:a:lt.value=new Set(i.checkedKeys),Q(),Me&&Me(a,{node:t,nativeEvent:n,checked:i.checkedKeys.has(t.keyText),checkedNodes:Array.from(i.checkedKeys).map(e=>r.byKeyText[e]).filter(Boolean),halfCheckedKeys:Array.from(i.halfCheckedKeys).map(e=>r.byKeyText[e]?.key).filter(z)})},Mt=async(e,t)=>{let n=wt(),r=G(n);if(E||e.disabled)return n;let i=r.has(e.keyText),a=i?n.filter(t=>B(t)!==e.keyText):[...n,e.key],o=!i&&!!pe&&!e.isLeaf&&e.children.length===0&&!dt.value.includes(e.keyText);o&&(dt.value=[...dt.value,e.keyText]);let s=kt(a,e,t);if(o&&pe)try{await pe(e),St(!0)}finally{dt.value=dt.value.filter(t=>t!==e.keyText),Q()}return s},Nt=(e,t)=>{t.preventDefault(),t.stopPropagation(),Mt(e,t)},Pt=(e,t)=>{if(E||e.disabled||!T||!e.selectable)return;let n=Ct(),r=G(n);if(y&&Ke!==!1&&t?.shiftKey){let r=Dt().map(e=>e.node.keyText),i=X.value&&r.includes(X.value)?X.value:void 0,a=n.map(B).filter(t=>t!==e.keyText&&r.includes(t)),o=a[a.length-1],s=i??o,c=s?r.indexOf(s):-1,l=r.indexOf(e.keyText);if(c>=0&&l>=0){let i=Math.min(c,l),a=Math.max(c,l),o=r.slice(i,a+1),u=Ke===`append`?pt.value.length?pt.value:n.map(B):[],d=At(De(Array.from(new Set([...u,...o])),$().byKeyText),e,t);X.value=s,pt.value=d.map(B);return}}if(J){let i=!!y&&!!Ge&&!!(t?.ctrlKey||t?.metaKey);if(y&&i){let i=r.has(e.keyText)?n.filter(t=>B(t)!==e.keyText):[...n,e.key];X.value=e.keyText,pt.value=i.map(B),At(i,e,t);return}X.value=e.keyText,pt.value=[e.keyText],At([e.key],e,t);return}if(y){let i=r.has(e.keyText)?n.filter(t=>B(t)!==e.keyText):[...n,e.key];X.value=e.keyText,pt.value=i.map(B),At(i,e,t);return}let i=r.has(e.keyText)?[]:[e.key];X.value=e.keyText,pt.value=i.map(B),At(i,e,t)},Ft=(e,t)=>{if(t.preventDefault(),t.stopPropagation(),E||e.disabled||!e.checkable||e.disableCheckbox)return;let n=Et(),r=ye($().roots,n,!!x),i=new Set(n),a=r.checkedKeys.has(e.keyText);if(x)a?i.delete(e.keyText):i.add(e.keyText);else{let t=ve(e);a?t.forEach(e=>i.delete(e)):t.forEach(e=>i.add(e))}jt(i,e,t)},It=e=>{U===void 0&&(ut.value=e),Q(),q&&q(e)},Lt=e=>{ft.value=e.currentTarget.scrollTop,Q(),Ve&&Ve(e)},Rt=e=>{!e||Z.value.overKeyText!==e||(Z.value={dragKeyText:Z.value.dragKeyText},Q())},zt=e=>{e&&_t.value!==e||(_t.value=null,vt.current?.(),vt.current=null)},Bt=e=>{if(vt.current?.(),vt.current=null,_t.value=e,typeof window>`u`)return;let t,n=()=>{t!==void 0&&window.clearTimeout(t),window.removeEventListener(`mouseup`,r,!0)},r=()=>{window.removeEventListener(`mouseup`,r,!0),t=window.setTimeout(()=>{_t.value===e&&(_t.value=null),vt.current===n&&(vt.current=null)},500)};vt.current=n,window.addEventListener(`mouseup`,r,!0)},Vt=(e,t)=>{Z.value.overKeyText===e&&Z.value.dropPosition===t||(Z.value={...Z.value,overKeyText:e,dropPosition:t},Q())},Ht=(e,t)=>{let n={...mt.value},r=n[e]??0,i=Math.max(r+t,0);return i>0?n[e]=i:delete n[e],mt.value=n,Q(),i},Ut=()=>{mt.value={},Z.value={},Q()},Wt=(e,t,n)=>{let r=$(),i=Z.value.dragKeyText;if(!i)return null;let a=r.byKeyText[i];if(!a||a.keyText===e.keyText||Ce(a,e,r.byKeyText))return null;let o=n?.getBoundingClientRect?.(),s=`clientY`in t?t.clientY:void 0,c=0;return o&&typeof s==`number`&&(s<o.top+o.height*.25?c=-1:s>o.bottom-o.height*.25&&(c=1)),M&&!M({dragNode:a,dropNode:e,dropPosition:c,dropToGap:c!==0})?null:{dragNode:a,dropPosition:c}},Gt=e=>typeof document>`u`||typeof document.elementFromPoint!=`function`?null:document.elementFromPoint(e.clientX,e.clientY)?.closest?.(`[data-rue-tree-node]`),Kt=e=>{let t=e?.getAttribute(`data-rue-tree-node`);return t?$().byKeyText[t]??null:null},qt=()=>{typeof document>`u`||(document.removeEventListener(`mousemove`,Xt),document.removeEventListener(`mouseup`,Zt))},Jt=(e,t)=>{let n=we(ee);t.button!==0||!n.enabled||!n.nodeDraggable(e)||E||e.disabled||typeof document>`u`||(ht.value={keyText:e.keyText,startX:t.clientX,startY:t.clientY,active:!1},document.addEventListener(`mousemove`,Xt),document.addEventListener(`mouseup`,Zt))},Yt=(e,t)=>{let n=$().byKeyText[e.keyText];return n?(e.active=!0,ht.value=e,Bt(e.keyText),mt.value={},Z.value={dragKeyText:e.keyText},Q(),Fe&&Fe({event:t,node:n}),!0):!1};function Xt(e){let t=ht.value;if(!t)return;let n=Math.max(Math.abs(e.clientX-t.startX),Math.abs(e.clientY-t.startY));if(!t.active&&n<4||!t.active&&!Yt(t,e))return;e.preventDefault();let r=Gt(e),i=Kt(r);if(!i){Rt(Z.value.overKeyText);return}let a=Wt(i,e,r);if(!a){Rt(i.keyText);return}Vt(i.keyText,a.dropPosition),Le&&Le({event:e,node:i})}function Zt(e){let t=ht.value,n=Z.value.dragKeyText,r=t?.active?t.keyText:n;if(ht.value=null,qt(),!r)return;e.preventDefault();let i=Gt(e),a=Kt(i),o=a?Wt(a,e,i):null;if(a&&o&&Be){let t=Z.value.overKeyText===a.keyText&&Z.value.dropPosition!==void 0?Z.value.dropPosition:o.dropPosition;Be({event:e,node:a,dragNode:o.dragNode,dragNodesKeys:K(o.dragNode),dropPosition:t,dropToGap:t!==0})}let s=$().byKeyText[r];Ut(),s&&ze&&ze({event:e,node:s})}let Qt=(e,t)=>{let n=we(ee);!n.enabled||!n.nodeDraggable(e)||E||e.disabled||(t.dataTransfer&&(t.dataTransfer.effectAllowed=`move`,t.dataTransfer.setData(`text/plain`,e.keyText)),mt.value={},Z.value={dragKeyText:e.keyText},Q(),Fe&&Fe({event:t,node:e}))},$t=(e,t)=>{if(!Z.value.dragKeyText)return;Ht(e.keyText,1);let n=Wt(e,t,t.currentTarget);if(!n){Rt(e.keyText);return}t.preventDefault(),Vt(e.keyText,n.dropPosition);let r=wt(),i=G(r);n.dropPosition===0&&!i.has(e.keyText)&&(e.children.length>0||!e.isLeaf)&&(r=kt([...r,e.key],e,t)),Ie&&Ie({event:t,node:e,expandedKeys:r})},en=(e,t)=>{if(!Z.value.dragKeyText)return;let n=Wt(e,t,t.currentTarget);if(!n){Rt(e.keyText);return}t.preventDefault(),t.dataTransfer&&(t.dataTransfer.dropEffect=`move`),Vt(e.keyText,n.dropPosition),Le&&Le({event:t,node:e})},tn=(e,t)=>{Ht(e.keyText,-1)===0&&Rt(e.keyText),Re&&Re({event:t,node:e})},nn=(e,t)=>{Ut(),ze&&ze({event:t,node:e})},rn=(e,t)=>{let n=Wt(e,t,t.currentTarget);if(!n){Ut();return}t.preventDefault(),t.stopPropagation();let r=Z.value.overKeyText===e.keyText&&Z.value.dropPosition!==void 0?Z.value.dropPosition:n.dropPosition;Be&&Be({event:t,node:e,dragNode:n.dragNode,dragNodesKeys:K(n.dragNode),dropPosition:r,dropToGap:r!==0}),Ut()},an=(e,t)=>{Jt(e,t)},on=(e,t)=>{let n=!!y&&Ke!==!1&&t.shiftKey;if(J&&y&&Ge&&(t.ctrlKey||t.metaKey)||n){t.preventDefault(),t.stopPropagation(),Bt(e.keyText),Pt(e,t);return}Jt(e,t)},sn=(e,t,n)=>{if(t.preventDefault(),t.stopPropagation(),n===`click`&&_t.value===e.keyText){zt(e.keyText);return}n===`doubleClick`&&Pe&&Pe(t,e);let r=J&&We===n&&(e.children.length>0||!e.isLeaf);if(n===`click`&&r){a(()=>{Mt(e,t),Pt(e,t)});return}r&&Mt(e,t),n===`click`&&Pt(e,t)},cn=(e,t)=>{if(_t.value===e.keyText){t.preventDefault(),t.stopPropagation();return}J&&y&&Ge&&t.ctrlKey&&!t.metaKey&&(t.preventDefault(),t.stopPropagation(),Pt(e,t))},ln=bt?N===!1?{maxHeight:`${bt}px`,overflowY:`auto`}:{height:`${bt}px`,overflowY:`auto`}:{overflowY:`visible`},un=()=>je({snapshot:Ot(),version:Y.value,loadingKeyTexts:dt.value,fixedVirtualRowHeight:xt,componentSize:tt,classNames:He,styles:Ue,emptyText:he,showLine:S,disabled:E,blockNode:w,checkable:b,showIcon:C,selectable:T,hasLoadData:!!pe,titleRender:se,switcherIcon:ce,icon:le,directoryMode:J,dragConfig:nt,handleDragStartNode:Qt,handleDragEnterNode:$t,handleDragOverNode:en,handleDragLeaveNode:tn,handleDragEndNode:nn,handleDropNode:rn,handleExpandToggle:Nt,handleCheck:Ft,handleDragMouseDown:an,handleLabelMouseDown:on,handleLabelActivate:sn,handleLabelContextMenu:cn});function dn(){gt.value||(gt.value=!0,queueMicrotask(()=>{gt.value=!1,fn()}))}function fn(){let e=et.current;e&&h(un(),e)}function pn(e){et.current=e,e&&fn()}return t(fn),g(()=>{qt(),zt()}),f(()=>[o,c,s,l,d,m,U],()=>{St(),dn()}),dn(),A(`section`,{...qe,className:H(H(H(`rue-tree rounded-box border border-base-300 bg-base-100 text-base-content shadow-sm`,Ae(k)),He?.root),e),style:{...Ue?.root,...n},"data-rue-tree":`true`,"data-rue-tree-version":String(Y.value),children:[W?j(`div`,{className:H(H(R(`border-b border-base-200/80`,tt.headerPadding),He?.header),He?.search),style:{...Ue?.header,...Ue?.search},children:j(`input`,{type:`text`,className:`input input-bordered input-sm w-full bg-base-100`,value:Ot().searchValue,placeholder:fe,onInput:e=>It(e.currentTarget.value)})}):null,j(`div`,{className:H(R(`grid gap-0.5`,tt.bodyPadding,tt.textClass),He?.body),ref:pn,"data-rue-tree-body":`true`,style:{...ln,...Ue?.body},onScroll:Lt})]})},Ne=({className:e,showIcon:t=!0,blockNode:n=!0,expandAction:r=`click`,...i})=>j(Me,{...i,className:H(`rue-directory-tree`,e),showIcon:t,blockNode:n,directoryMode:!0,expandAction:r}),q=Me;q.DirectoryTree=Ne;var Pe=t=>_(n=>{let r=p(`div`,n);v(r,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let i=p(`table`,r);l(r,i),v(i,`table table-zebra`);let a=p(`thead`,i);l(i,a);let u=p(`tr`,a);l(a,u);let d=p(`th`,u);l(u,d),l(d,T(`属性`));let f=p(`th`,u);l(u,f),l(f,T(`说明`));let m=p(`th`,u);l(u,m),l(m,T(`类型`));let h=p(`th`,u);l(u,h),l(h,T(`默认值`));let g=p(`tbody`,i);l(i,g);let y=o(`rue:list:start`),x=o(`rue:list:end`);l(g,y),l(g,x);let S=new Map;return s(()=>{S=k({items:t.rows||[],getKey:(e,t)=>e.prop,elements:S,parent:g,before:x,singleRoot:!0,trackIndex:!1,start:y,renderItem:(t,n,r,i,a)=>{b(_(()=>{let n=e(),r=p(`tr`,n);l(n,r),s(()=>{C(r,`key`,String(t.prop))});let i=p(`td`,r);l(r,i);let a=p(`code`,i);l(i,a);let u=o(`rue:slot:anchor`);l(a,u),s(()=>{let e=t.prop;c(()=>b(e,a,u))});let d=p(`td`,r);l(r,d);let f=o(`rue:slot:anchor`);l(d,f),s(()=>{let e=t.description;c(()=>b(e,d,f))});let m=p(`td`,r);l(r,m);let h=p(`code`,m);l(m,h);let g=o(`rue:slot:anchor`);l(h,g),s(()=>{let e=t.type;c(()=>b(e,h,g))});let _=p(`td`,r);l(r,_);let v=p(`code`,_);l(_,v);let y=o(`rue:slot:anchor`);return l(v,y),s(()=>{let e=t.defaultValue;c(()=>b(e,v,y))}),n}),n,r)}})}),r}),Fe=[{title:`产品平台`,key:`platform`,children:[{title:`文档中心`,key:`docs-api`},{title:`组件市场`,key:`component-hub`},{title:`示例仓库`,key:`examples`}]},{title:`工程效率`,key:`engineering`,children:[{title:`构建链路`,key:`build-pipeline`},{title:`质量门禁`,key:`quality-gate`},{title:`发布管道`,key:`release-flow`}]},{title:`增长分析`,key:`growth`,children:[{title:`实验看板`,key:`experiment-board`},{title:`归因报表`,key:`attribution-report`},{title:`留存漏斗`,key:`retention-funnel`}]}],Ie=[{title:`发布总控`,key:`release-control`,children:[{title:`前台站点`,key:`release-site`,children:[{title:`首页编排`,key:`site-home`},{title:`价格页`,key:`site-pricing`}]},{title:`运营链路`,key:`release-ops`,children:[{title:`投放素材`,key:`ops-assets`},{title:`归因回传`,key:`ops-attribution`}]},{title:`合规审查`,key:`release-compliance`,children:[{title:`隐私条款`,key:`compliance-privacy`},{title:`审计记录`,key:`compliance-audit`}]}]}],Le=[{title:`权限控制`,key:`permission-disabled-root`,children:[{title:`只读目录`,key:`readonly-folder`,disabled:!0,children:[{title:`首页编排`,key:`readonly-home`},{title:`价格页`,key:`readonly-pricing`}]},{title:`可编辑目录`,key:`editable-folder`,children:[{title:`投放素材`,key:`editable-assets`},{title:`归因回传`,key:`editable-attribution`,disableCheckbox:!0}]},{title:`审计日志（仅禁用复选框）`,key:`audit-log`,disableCheckbox:!0}]}],Re=[{nodeId:1,parentId:0,code:`workspace`,name:`Workspace`},{nodeId:2,parentId:1,code:`workflow`,name:`Workflow board`},{nodeId:3,parentId:1,code:`briefs`,name:`Briefs`},{nodeId:4,parentId:2,code:`review`,name:`Design review`},{nodeId:5,parentId:2,code:`release`,name:`Release checklist`},{nodeId:6,parentId:3,code:`content`,name:`Content drafts`}],ze=[{title:`app`,key:`dir-app`,children:[{title:`pages`,key:`dir-pages`,children:[{title:`Tree.tsx`,key:`file-tree-page`},{title:`Transfer.tsx`,key:`file-transfer-page`}]},{title:`site`,key:`dir-site`,children:[{title:`SidebarPlaygroundDesign.tsx`,key:`file-sidebar`}]}]},{title:`packages`,key:`dir-packages`,children:[{title:`runtime`,key:`dir-runtime`},{title:`rue-design`,key:`dir-rue-design`}]},{title:`README.md`,key:`file-readme`}],Be=[{title:`alpha.ts`,key:`range-alpha`},{title:`beta.ts`,key:`range-beta`},{title:`gamma.ts`,key:`range-gamma`},{title:`delta.ts`,key:`range-delta`},{title:`epsilon.ts`,key:`range-epsilon`}],Ve=[{title:`src`,key:`drag-src`,kind:`folder`,children:[{title:`components`,key:`drag-components`,kind:`folder`,children:[{title:`Tree.tsx`,key:`drag-tree-file`,kind:`file`},{title:`Transfer.tsx`,key:`drag-transfer-file`,kind:`file`}]},{title:`main.ts`,key:`drag-main-file`,kind:`file`}]},{title:`docs`,key:`drag-docs`,kind:`folder`,children:[{title:`routing.md`,key:`drag-routing-file`,kind:`file`},{title:`installation.md`,key:`drag-install-file`,kind:`file`}]},{title:`package.json`,key:`drag-package-file`,kind:`file`}],He=Array.from({length:120},(e,t)=>({title:`Page ${String(t+1).padStart(3,`0`)}`,key:`virtual-${t}`})),Ue=Array.from({length:64},(e,t)=>({title:`Workspace ${String(t+1).padStart(2,`0`)}`,key:`async-virtual-root-${t}`,isLeaf:!1})),J=`import { ref } from '@rue-js/rue'
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
</div>`,We=`import { ref } from '@rue-js/rue'
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
</div>`,Ge=`import { ref } from '@rue-js/rue'
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
</div>`,Ke=`import { ref } from '@rue-js/rue'
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
</div>`,qe=`import { ref } from '@rue-js/rue'
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
</div>`,Je=`import { computed, ref } from '@rue-js/rue'
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
</div>`,Ye=`import { ref } from '@rue-js/rue'
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
      append / replace 只影响已有额外非连续选择是否保留：先单击 beta.ts，再按住 Cmd / Ctrl 单击 epsilon.ts，最后按住 Shift 单击 delta.ts。
    </div>
    <div className="mt-2">append 会保留 beta.ts；replace 只保留 delta.ts 到 epsilon.ts 这一段。</div>
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
</div>`,Xe=`import { ref } from '@rue-js/rue'
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
</div>`,Ze=`import { ref } from '@rue-js/rue'
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
</div>`,Qe=`import { ref } from '@rue-js/rue'
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
</div>`,$e=`import { computed, reactive } from '@rue-js/rue'

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
</div>`,et=[{prop:`treeData`,description:`树数据源，支持嵌套 children 和字段映射。`,type:`TreeDataNode[]`,defaultValue:`[]`},{prop:`selectedKeys / defaultSelectedKeys`,description:`受控与非受控的当前选中项，multiple 打开后允许多选。`,type:`TreeKey[]`,defaultValue:`[]`},{prop:`checkedKeys / defaultCheckedKeys`,description:`勾选模式下的选中集合，strict 模式会回传 checked / halfChecked 结构。`,type:`TreeKey[] | { checked: TreeKey[]; halfChecked: TreeKey[] }`,defaultValue:`[]`},{prop:`expandedKeys / defaultExpandedKeys / defaultExpandAll`,description:`控制展开态，适合目录树、权限树和异步加载场景。`,type:`TreeKey[] / boolean`,defaultValue:`[] / false`},{prop:`checkable / checkStrictly`,description:`切换勾选与父子联动模式；strict 会关闭级联。`,type:`boolean`,defaultValue:`false`},{prop:`treeDataSimpleMode / fieldNames`,description:`直接接入 id / pId 扁平数据，同时可映射 title、key、children 字段。`,type:`boolean | TreeSimpleModeConfig / TreeFieldNames`,defaultValue:`- / -`},{prop:`allowSearch / searchValue / filterTreeNode`,description:`提供内置搜索输入和过滤逻辑，命中后会保留祖先链路。`,type:`boolean / string / boolean | ((inputValue, node) => boolean)`,defaultValue:`false / - / true`},{prop:`loadData`,description:`展开未加载分支时触发异步加载，适合远端目录与超大树。`,type:`(node: TreeNode) => Promise<any> | void`,defaultValue:`-`},{prop:`rangeSelect / Tree.DirectoryTree / expandAction / toggleSelect`,description:`Tree 多选和目录树都支持 shift 区间选择；目录树额外提供展开动作和 ctrl/meta 追加选择开关。`,type:`false | "append" | "replace" / DirectoryTreeProps / false | "click" | "doubleClick" / boolean`,defaultValue:`"append" / blockNode=true / showIcon=true / "click" / true`},{prop:`draggable / allowDrop / onDrop`,description:`开启拖拽排序并控制是否允许落点；allowDrop 和 onDrop 都会拿到 dropToGap，UI 会同步显示插前、插后或放入占位态。`,type:`TreeDraggable / (info) => boolean / (info) => void`,defaultValue:`false / - / -`},{prop:`height / itemHeight / virtual`,description:`为长列表开启虚拟滚动；height 定义视口高度，itemHeight 用于估算渲染窗口，也能和 loadData 组合接超长懒加载树。`,type:`number / number / boolean`,defaultValue:`- / 自动按尺寸估算 / true`},{prop:`showLine / showIcon / blockNode`,description:`控制树线、节点图标和整行可点的布局表现。`,type:`boolean`,defaultValue:`false`},{prop:`titleRender / switcherIcon / icon`,description:`按节点态自定义标题、展开图标和节点图标。`,type:`render function | any`,defaultValue:`-`}],tt=e=>Array.isArray(e)?e:e.checked,nt=(e,t)=>Array.isArray(e)?t?.halfCheckedKeys??[]:e.halfChecked,rt=e=>`${typeof e}:${String(e)}`,Y=e=>e.map(e=>({...e,children:Array.isArray(e.children)?Y(e.children):e.children})),it=(e,t)=>{let n=rt(t);for(let r=0;r<e.length;r+=1){let i=e[r];if(rt(i.key)===n){let[t]=e.splice(r,1);return t??null}if(Array.isArray(i.children)){let e=it(i.children,t);if(e)return e}}return null},at=(e,t,n,r)=>{let i=rt(n);for(let a=0;a<e.length;a+=1){let o=e[a];if(rt(o.key)===i){if(r===0){let e=Array.isArray(o.children)?[...o.children]:[];e.push(t),o.children=e}else e.splice(r<0?a:a+1,0,t);return!0}if(Array.isArray(o.children)&&at(o.children,t,n,r))return!0}return!1},ot=(e,t)=>{let n=Y(e),r=it(n,t.dragNode.key);return r&&(at(n,r,t.node.key,t.dropPosition)||n.push(r)),n},st=(e,t,n)=>{let r=rt(t);for(let i=0;i<e.length;i+=1){let a=e[i];if(rt(a.key)===r){let t=n(a);if(t===a)return e;let r=e.slice();return r[i]=t,r}if(Array.isArray(a.children)&&a.children.length){let r=st(a.children,t,n);if(r===a.children)continue;let o=e.slice();return o[i]={...a,children:r},o}}return e},ct=e=>e.reduce((e,t)=>!Array.isArray(t.children)||!t.children.length?e:e+1+ct(t.children),0),lt=t=>{let{isOpen:n,isFolder:r,toggle:i,addChild:a,changeType:f}=O(`useSetup:0:0`,()=>d(()=>{let e=O(`computed:1:0`,()=>E(()=>!!t.model.open)),n=O(`computed:1:1`,()=>E(()=>!!t.model.children&&t.model.children.length>0)),r=n=>{n?.stopPropagation(),t.model.open=!e.get()},i=e=>{e?.stopPropagation(),t.model.children||(t.model.children=[]),t.model.children.push({id:`${t.model.id}-new-${t.model.children.length}`,name:`new stuff`}),t.model.open=!0};return{isOpen:e,isFolder:n,toggle:r,addChild:i,changeType:e=>{e?.stopPropagation(),n.get()||(t.model.children=[],i(),t.model.open=!0)}}}));return _(d=>{let h=p(`li`,d);v(h,`list-none`);let g=p(`button`,h);l(h,g),C(g,`type`,`button`),s(()=>{v(g,`flex items-center gap-2 rounded-xl px-3 py-2 text-left text-sm transition `+(r.get()?`font-semibold text-base-content`:`text-base-content/80 hover:bg-base-200/70`))}),u(g,`click`,e=>i(e)),u(g,`dblclick`,e=>f(e));let x=p(`span`,g);l(g,x),v(x,`inline-flex size-5 items-center justify-center rounded-md bg-base-200/80 text-[11px] text-base-content/55`);let E=y(x);l(x,E),s(()=>{m(E,r.get()?n.get()?`−`:`+`:`•`)});let D=p(`span`,g);l(g,D);let O=o(`rue:slot:anchor`);l(D,O),s(()=>{let e=t.model.name;c(()=>b(e,D,O))});let A=o(`rue:slot:anchor`);return l(h,A),s(()=>{let i=r.get()&&n.get()?_(()=>{let n=e(),r=p(`ul`,n);l(n,r),v(r,`mt-1 grid gap-1 pl-5`);let i=o(`rue:list:start`),c=o(`rue:list:end`);l(r,i),l(r,c);let d=new Map;s(()=>{d=k({items:t.model.children||[],getKey:(e,t)=>e.id,elements:d,parent:r,before:c,start:i,renderItem:(e,t,n,r,i)=>{S(w(lt,{key:e.id,model:e}),t,n,r)}})});let f=p(`li`,r);l(r,f),v(f,`list-none`);let m=p(`button`,f);return l(f,m),C(m,`type`,`button`),v(m,`btn btn-ghost btn-xs rounded-full text-emerald-600`),u(m,`click`,e=>a(e)),l(m,T(`+ add child`)),n}):``;c(()=>b(i,h,A))}),h})},ut=()=>{let{basicSelectedKeys:t,directorySelectedKeys:r,directoryExpandAction:i,directoryToggleSelect:a,directoryRangeSelect:u,directoryRangeAppendSelectedKeys:f,directoryRangeReplaceSelectedKeys:m,directoryRangeTreeVersion:h,checkableSelectedKeys:g,checkedKeys:y,halfCheckedKeys:x,disabledCheckedKeys:S,simpleSelectedKeys:C,asyncSelectedKeys:k,asyncExpandedKeys:te,dragTreeData:ne,dragSummary:re,virtualSelectedKeys:N,asyncVirtualTreeData:P,asyncVirtualExpandedKeys:F,asyncVirtualSelectedKeys:ie,asyncVirtualLoadedBranchCount:I,asyncTreeData:ae,legacyTree:oe,tabs:L,loadAsyncTree:se,loadAsyncVirtualTree:R,resetDirectoryRangeDemo:ce}=O(`useSetup:0:0:dup1`,()=>d(()=>{let e=O(`ref:1:2`,()=>D([`docs-api`])),t=O(`ref:1:3`,()=>D([`dir-app`])),r=O(`ref:1:4`,()=>D(`click`)),i=O(`ref:1:5`,()=>D(!0)),a=O(`computed:1:6`,()=>E(()=>i.value?`append`:!1)),o=O(`ref:1:7`,()=>D([])),s=O(`ref:1:8`,()=>D([])),c=O(`ref:1:9`,()=>D(0)),l=O(`ref:1:10`,()=>D([`release-control`])),u=O(`ref:1:11`,()=>D([`site-home`])),d=O(`ref:1:12`,()=>D([`release-control`,`release-site`])),f=O(`ref:1:13`,()=>D([`editable-assets`])),p=O(`ref:1:14`,()=>D([`workflow`])),m=O(`ref:1:15`,()=>D([])),h=O(`ref:1:16`,()=>D([])),g=O(`ref:1:17`,()=>D(Y(Ve))),_=O(`ref:1:18`,()=>D(`folder 支持放入；file 只允许插前和插后，悬停时会显示明确占位态。`)),v=O(`ref:1:19`,()=>D([`virtual-3`])),y=O(`ref:1:20`,()=>D(Y(Ue))),b=O(`ref:1:21`,()=>D([])),x=O(`ref:1:22`,()=>D([])),S=O(`computed:1:23`,()=>E(()=>ct(y.value))),C=O(`ref:1:24`,()=>D([{title:`发布总线`,key:`release-bus`,isLeaf:!1}]));return{basicSelectedKeys:e,directorySelectedKeys:t,directoryExpandAction:r,directoryToggleSelect:i,directoryRangeSelect:a,directoryRangeAppendSelectedKeys:o,directoryRangeReplaceSelectedKeys:s,directoryRangeTreeVersion:c,checkableSelectedKeys:l,checkedKeys:u,halfCheckedKeys:d,disabledCheckedKeys:f,simpleSelectedKeys:p,asyncSelectedKeys:m,asyncExpandedKeys:h,dragTreeData:g,dragSummary:_,virtualSelectedKeys:v,asyncVirtualTreeData:y,asyncVirtualExpandedKeys:b,asyncVirtualSelectedKeys:x,asyncVirtualLoadedBranchCount:S,asyncTreeData:C,legacyTree:O(`reactive:1:25`,()=>n({id:`root`,name:`My Tree`,open:!0,children:[{id:`hello`,name:`hello`},{id:`world`,name:`world`},{id:`branch`,name:`child folder`,open:!0,children:[{id:`branch-1`,name:`design review`},{id:`branch-2`,name:`release note`}]}]})),tabs:{basic:O(`ref:1:26`,()=>D(`preview`)),directory:O(`ref:1:27`,()=>D(`preview`)),directoryRange:O(`ref:1:28`,()=>D(`preview`)),checkable:O(`ref:1:29`,()=>D(`preview`)),checkableDisabled:O(`ref:1:30`,()=>D(`preview`)),simple:O(`ref:1:31`,()=>D(`preview`)),async:O(`ref:1:32`,()=>D(`preview`)),drag:O(`ref:1:33`,()=>D(`preview`)),virtual:O(`ref:1:34`,()=>D(`preview`)),virtualAsync:O(`ref:1:35`,()=>D(`preview`)),legacy:O(`ref:1:36`,()=>D(`preview`))},loadAsyncTree:async e=>{e.key===`release-bus`&&(C.value=[{title:`发布总线`,key:`release-bus`,isLeaf:!1,children:[{title:`桌面端`,key:`desktop`,children:[{title:`Windows`,key:`desktop-win`},{title:`macOS`,key:`desktop-mac`}]},{title:`移动端`,key:`mobile`,children:[{title:`iOS`,key:`mobile-ios`},{title:`Android`,key:`mobile-android`}]}]}])},loadAsyncVirtualTree:async e=>{e.children.length||(y.value=st(y.value,e.key,e=>({...e,children:Array.from({length:8},(t,n)=>({title:`${String(e.title)} / Module ${n+1}`,key:`${String(e.key)}-child-${n}`,isLeaf:n%3!=0}))})))},resetDirectoryRangeDemo:()=>{o.value=[],s.value=[],c.value+=1}}}));return _(n=>{let d=e(),E=o(`rue:component:anchor`);return l(d,E),b(w(ee,{children:_(()=>{let n=e(),d=p(`div`,n);l(n,d),v(d,`max-w-none prose prose-sm md:prose-base`);let _=p(`h1`,d);l(d,_),l(_,T(`Tree 树控件`));let E=p(`p`,d);l(d,E),l(E,T(`Rue 的 Tree 补上了独立树组件这块空白：保留 TreeView 示例里递归数据直改的灵活性，同时把 树控件常用的展开、选中、勾选、简单模式、异步加载和自定义标题一次补齐。 视觉上继续沿用 Rue 现有的卡片、badge 和 base 色阶体系，不照搬其他组件库的外观。`));let D=p(`div`,d);l(d,D),v(D,`not-prose mt-6 grid gap-3 md:grid-cols-3`);let O=p(`div`,D);l(D,O),v(O,`rounded-[1.4rem] border border-base-300 bg-gradient-to-br from-base-100 to-base-200/40 p-4 shadow-sm`);let ee=p(`div`,O);l(O,ee),v(ee,`text-xs uppercase tracking-[0.2em] text-base-content/45`),l(ee,T(`Node Model`));let z=p(`div`,O);l(O,z),v(z,`mt-2 text-base font-semibold`),l(z,T(`选择、勾选、展开三条状态线`));let B=p(`p`,O);l(O,B),v(B,`mt-2 mb-0 text-sm text-base-content/68`),l(B,T(`目录树、权限树、发布树都能直接套进来。`));let V=p(`div`,D);l(D,V),v(V,`rounded-[1.4rem] border border-base-300 bg-gradient-to-br from-base-100 to-base-200/40 p-4 shadow-sm`);let H=p(`div`,V);l(V,H),v(H,`text-xs uppercase tracking-[0.2em] text-base-content/45`),l(H,T(`DirectoryTree`));let le=p(`div`,V);l(V,le),v(le,`mt-2 text-base font-semibold`),l(le,T(`目录树快捷 API`));let ue=p(`p`,V);l(V,ue),v(ue,`mt-2 mb-0 text-sm text-base-content/68`),l(ue,T(`支持 click / doubleClick 展开，以及更接近文件浏览器的多选交互。`));let U=p(`div`,D);l(D,U),v(U,`rounded-[1.4rem] border border-base-300 bg-gradient-to-br from-base-100 to-base-200/40 p-4 shadow-sm`);let de=p(`div`,U);l(U,de),v(de,`text-xs uppercase tracking-[0.2em] text-base-content/45`),l(de,T(`Heavy Interaction`));let fe=p(`div`,U);l(U,fe),v(fe,`mt-2 text-base font-semibold`),l(fe,T(`拖拽排序与虚拟滚动`));let W=p(`p`,U);l(U,W),v(W,`mt-2 mb-0 text-sm text-base-content/68`),l(W,T(`长列表和拖拽改序终于能落在同一个 Tree 上了。`));let pe=o(`rue:component:anchor`);l(d,pe),s(()=>{let e=w(M,{title:`基础选中与整行交互`,summary:`默认 Tree 就是一个纯浏览 + 选中容器；blockNode 和 showIcon 让它更像配置面板里的主导航。`,tab:L.basic,code:J,preview:A(`div`,{className:`space-y-4 not-prose`,children:[j(q,{treeData:Fe,selectedKeys:t.value,defaultExpandAll:!0,showIcon:!0,blockNode:!0,onSelect:e=>{t.value=e}}),A(`div`,{className:`grid gap-3 md:grid-cols-3`,children:[A(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[j(`div`,{className:`text-xs text-base-content/45`,children:`当前选中`}),j(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:t.value.length?t.value.map(e=>j(`span`,{className:`badge badge-outline badge-sm`,children:String(e)},String(e))):j(`span`,{className:`text-sm text-base-content/55`,children:`未选择`})})]}),A(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[j(`div`,{className:`text-xs text-base-content/45`,children:`推荐场景`}),j(`div`,{className:`mt-2 text-sm text-base-content/75`,children:`组件目录、文档导航、资源分类`})]}),A(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[j(`div`,{className:`text-xs text-base-content/45`,children:`状态模型`}),j(`div`,{className:`mt-2 text-sm text-base-content/75`,children:`selectedKeys / expandedKeys 分离，便于受控更新。`})]})]})]})});c(()=>b(e,d,pe))});let G=o(`rue:component:anchor`);l(d,G),s(()=>{let e=w(M,{title:`DirectoryTree 目录树快捷 API`,summary:`Tree.DirectoryTree 默认补上目录图标、整行可点和 click 展开；这里先只看 expandAction 和 toggleSelect 这两个基础交互开关。`,tab:L.directory,code:Je,preview:A(`div`,{className:`grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`,children:[j(q.DirectoryTree,{treeData:ze,selectedKeys:r.value,multiple:!0,expandAction:i.value,toggleSelect:a.value,rangeSelect:u.get(),onSelect:e=>{r.value=e}}),A(`div`,{className:`space-y-3`,children:[A(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[j(`div`,{className:`text-xs text-base-content/45`,children:`快捷属性`}),A(`div`,{className:`mt-3 flex flex-wrap gap-2`,children:[j(`button`,{type:`button`,className:i.value===`click`?`btn btn-primary btn-xs`:`btn btn-ghost btn-xs`,onClick:()=>{i.value=`click`},children:`click 展开`}),j(`button`,{type:`button`,className:i.value===`doubleClick`?`btn btn-primary btn-xs`:`btn btn-ghost btn-xs`,onClick:()=>{i.value=`doubleClick`},children:`doubleClick 展开`}),j(`button`,{type:`button`,className:i.value===!1?`btn btn-primary btn-xs`:`btn btn-ghost btn-xs`,onClick:()=>{i.value=!1},children:`只选中不展开`})]}),A(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:[j(`button`,{type:`button`,className:a.value?`btn btn-primary btn-xs`:`btn btn-ghost btn-xs`,onClick:()=>{a.value=!0},children:`ctrl/meta 追加`}),j(`button`,{type:`button`,className:a.value?`btn btn-ghost btn-xs`:`btn btn-primary btn-xs`,onClick:()=>{a.value=!1},children:`关闭追加选择`})]})]}),A(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[j(`div`,{className:`text-xs text-base-content/45`,children:`当前选择`}),j(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:r.value.map(e=>j(`span`,{className:`badge badge-outline badge-sm`,children:String(e)},String(e)))})]}),A(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`,children:[`当前组合是 expandAction=`,j(`strong`,{children:String(i.value)}),`、toggleSelect=`,j(`strong`,{children:String(a.value)}),`、rangeSelect=`,j(`strong`,{children:String(u.get())}),`。`,j(`div`,{className:`mt-3`,children:`普通点击会落成单选；打开追加后，meta / ctrl 会追加或移除选中，shift 也会启用区间选择。关闭追加时，这两类补充选择都会停用；append / replace 的差异放到下面的对照示例里单独演示。`})]})]})]})});c(()=>b(e,d,G))});let me=o(`rue:component:anchor`);l(d,me),s(()=>{let e=w(M,{title:`shift append vs shift replace`,summary:`Shift 的基础语义是先选一个节点，再 Shift 选另一个节点，中间连续区间都会选中；append / replace 只决定已有额外选择是否保留。`,tab:L.directoryRange,code:Ye,preview:A(`div`,{className:`space-y-4 not-prose`,children:[A(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`,children:[j(`div`,{children:`基础行为：先单击 alpha.ts，再按住 Shift 单击 epsilon.ts，alpha.ts 到 epsilon.ts 都会选中。`}),j(`div`,{className:`mt-2`,children:`append / replace 只影响已有额外非连续选择是否保留：重置后先单击 beta.ts，再按住 Cmd / Ctrl 单击 epsilon.ts，最后按住 Shift 单击 delta.ts。`}),j(`div`,{className:`mt-2`,children:`append 会保留 beta.ts；replace 只保留 delta.ts 到 epsilon.ts 这一段。`}),j(`button`,{type:`button`,className:`btn btn-ghost btn-xs mt-3`,onClick:ce,children:`重置两边示例`})]}),A(`div`,{className:`grid gap-4 xl:grid-cols-2`,children:[A(`div`,{className:`space-y-3 rounded-[1.4rem] border border-base-300 bg-base-100 p-4 shadow-sm`,children:[A(`div`,{className:`flex items-center justify-between gap-3`,children:[A(`div`,{children:[j(`div`,{className:`text-sm font-semibold`,children:`rangeSelect="append"`}),j(`div`,{className:`text-xs text-base-content/55`,children:`保留原先的非连续选择，再并入新的 shift 区间。`})]}),j(`span`,{className:`badge badge-outline badge-sm`,children:`append`})]}),j(q.DirectoryTree,{treeData:Be,selectedKeys:f.value,multiple:!0,toggleSelect:!0,rangeSelect:`append`,onSelect:e=>{f.value=e}},`append-${h.value}`),A(`div`,{className:`rounded-box border border-base-300 bg-base-100 px-4 py-3 text-sm text-base-content/70`,children:[j(`div`,{className:`text-xs text-base-content/45`,children:`当前选择`}),j(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:f.value.length?f.value.map(e=>j(`span`,{className:`badge badge-outline badge-sm`,children:String(e)},String(e))):j(`span`,{className:`text-sm text-base-content/55`,children:`还没有选择`})})]})]}),A(`div`,{className:`space-y-3 rounded-[1.4rem] border border-base-300 bg-base-100 p-4 shadow-sm`,children:[A(`div`,{className:`flex items-center justify-between gap-3`,children:[A(`div`,{children:[j(`div`,{className:`text-sm font-semibold`,children:`rangeSelect="replace"`}),j(`div`,{className:`text-xs text-base-content/55`,children:`只保留新的 shift 区间，旧的非连续选择会被替换掉。`})]}),j(`span`,{className:`badge badge-primary badge-outline badge-sm`,children:`replace`})]}),j(q.DirectoryTree,{treeData:Be,selectedKeys:m.value,multiple:!0,toggleSelect:!0,rangeSelect:`replace`,onSelect:e=>{m.value=e}},`replace-${h.value}`),A(`div`,{className:`rounded-box border border-base-300 bg-base-100 px-4 py-3 text-sm text-base-content/70`,children:[j(`div`,{className:`text-xs text-base-content/45`,children:`当前选择`}),j(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:m.value.length?m.value.map(e=>j(`span`,{className:`badge badge-outline badge-sm`,children:String(e)},String(e))):j(`span`,{className:`text-sm text-base-content/55`,children:`还没有选择`})})]})]})]})]})});c(()=>b(e,d,me))});let he=o(`rue:component:anchor`);l(d,he),s(()=>{let e=w(M,{title:`父子联动与半选态`,summary:`这一块只看级联勾选和 halfChecked，不再混入 disabled / disableCheckbox，点击父节点时能直接看到整棵子树联动。`,tab:L.checkable,code:We,preview:A(`div`,{className:`space-y-4 not-prose`,children:[j(q,{treeData:Ie,selectedKeys:g.value,checkedKeys:y.value,checkable:!0,defaultExpandAll:!0,showLine:!0,blockNode:!0,onSelect:e=>{g.value=e},onCheck:(e,t)=>{y.value=tt(e),x.value=nt(e,t)}}),A(`div`,{className:`grid gap-3 md:grid-cols-3`,children:[A(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[j(`div`,{className:`text-xs text-base-content/45`,children:`selectedKeys`}),j(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:g.value.length?g.value.map(e=>j(`span`,{className:`badge badge-outline badge-sm`,children:String(e)},String(e))):j(`span`,{className:`text-sm text-base-content/55`,children:`当前没有选中节点`})})]}),A(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[j(`div`,{className:`text-xs text-base-content/45`,children:`checkedKeys`}),j(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:y.value.map(e=>j(`span`,{className:`badge badge-primary badge-outline badge-sm`,children:String(e)},String(e)))})]}),A(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[j(`div`,{className:`text-xs text-base-content/45`,children:`halfCheckedKeys`}),j(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:x.value.length?x.value.map(e=>j(`span`,{className:`badge badge-ghost badge-sm`,children:String(e)},String(e))):j(`span`,{className:`text-sm text-base-content/55`,children:`当前没有半选`})})]})]})]})});c(()=>b(e,d,he))});let ge=o(`rue:component:anchor`);l(d,ge),s(()=>{let e=w(M,{title:`禁用节点与禁用复选框`,summary:`把 disabled 和 disableCheckbox 单独拆出来看：前者整节点只读，后者只禁用勾选框，不再干扰联动示例。`,tab:L.checkableDisabled,code:Ge,preview:A(`div`,{className:`grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`,children:[j(q,{treeData:Le,checkedKeys:S.value,checkable:!0,defaultExpandAll:!0,showLine:!0,blockNode:!0,onCheck:e=>{S.value=tt(e)}}),A(`div`,{className:`space-y-3`,children:[A(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[j(`div`,{className:`text-xs text-base-content/45`,children:`当前勾选`}),j(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:S.value.length?S.value.map(e=>j(`span`,{className:`badge badge-outline badge-sm`,children:String(e)},String(e))):j(`span`,{className:`text-sm text-base-content/55`,children:`当前没有勾选`})})]}),A(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm text-sm text-base-content/75`,children:[j(`div`,{className:`font-medium text-base-content`,children:`disabled`}),j(`div`,{className:`mt-2`,children:`整节点不可展开、不可选中、不可勾选，适合只读目录或冻结配置。`})]}),A(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm text-sm text-base-content/75`,children:[j(`div`,{className:`font-medium text-base-content`,children:`disableCheckbox`}),j(`div`,{className:`mt-2`,children:`节点仍能展示和展开，但复选框不会参与交互，适合“只可浏览不可授权”的条目。`})]})]})]})});c(()=>b(e,d,ge))});let _e=o(`rue:component:anchor`);l(d,_e),s(()=>{let e=w(M,{title:`Simple Mode + Search`,summary:`扁平数据直入后，内置搜索会保留命中节点的祖先链，不会把层级上下文切断。`,tab:L.simple,code:Ke,preview:A(`div`,{className:`grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`,children:[j(q,{treeData:Re,treeDataSimpleMode:{id:`nodeId`,pId:`parentId`,rootPId:0},fieldNames:{title:`name`,key:`code`},selectedKeys:C.value,allowSearch:!0,defaultExpandAll:!0,onSelect:e=>{C.value=e}}),A(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`,children:[`当前选中：`,j(`code`,{children:JSON.stringify(C.value)}),j(`div`,{className:`mt-3`,children:`这类 simple mode 很适合后端直接给 id / pId 的菜单、流程节点和权限项，不需要再先做一遍树转换。`})]})]})});c(()=>b(e,d,_e))});let ve=o(`rue:component:anchor`);l(d,ve),s(()=>{let e=w(M,{title:`Async Load 与自定义标题`,summary:`第一次展开时再拉子节点，同时用 titleRender 和 icon 把状态信息塞回每一行。`,tab:L.async,code:qe,preview:A(`div`,{className:`grid gap-4 not-prose lg:grid-cols-[minmax(0,26rem),1fr] lg:items-start`,children:[j(q,{treeData:ae.value,selectedKeys:k.value,expandedKeys:te.value,loadData:se,showLine:!0,showIcon:!0,blockNode:!0,titleRender:({node:e,loading:t})=>A(`div`,{className:`flex min-w-0 items-center justify-between gap-3`,children:[j(`span`,{className:`truncate`,children:e.title}),j(`span`,{className:`badge badge-ghost badge-xs`,children:t?`loading`:e.children.length?`branch`:`leaf`})]}),onSelect:e=>{k.value=e},onExpand:e=>{te.value=e}}),A(`div`,{className:`space-y-3`,children:[A(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[j(`div`,{className:`text-xs text-base-content/45`,children:`expandedKeys`}),j(`div`,{className:`mt-2 text-sm text-base-content/75`,children:JSON.stringify(te.value)})]}),A(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[j(`div`,{className:`text-xs text-base-content/45`,children:`selectedKeys`}),j(`div`,{className:`mt-2 text-sm text-base-content/75`,children:JSON.stringify(k.value)})]}),j(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`,children:`展开 release-bus 后才会注入桌面端和移动端节点，适合远端目录、超大权限树和发布范围配置。`})]})]})});c(()=>b(e,d,ve))});let K=p(`div`,d);l(d,K),v(K,`not-prose mt-10 space-y-2`);let ye=p(`h2`,K);l(K,ye),v(ye,`text-2xl font-semibold`),l(ye,T(`更重交互`));let be=p(`p`,K);l(K,be),v(be,`text-sm text-base-content/70`),l(be,T(`当 Tree 既要承载拖拽整理，又要承载超长数据时，draggable 和 virtual 就是两个最关键的控制面。`));let xe=o(`rue:component:anchor`);l(d,xe),s(()=>{let e=w(M,{title:`allowDrop 策略与拖拽占位`,summary:`allowDrop 可以把 folder / file 的落点规则写清楚；hover 时 Tree 会直接给出插前、插后或放入占位提示。`,tab:L.drag,code:Xe,preview:A(`div`,{className:`grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`,children:[j(q,{treeData:ne.value,draggable:!0,blockNode:!0,defaultExpandAll:!0,allowDrop:({dropNode:e,dropToGap:t})=>t||e.raw.kind!==`file`,titleRender:({node:e})=>A(`div`,{className:`flex min-w-0 items-center justify-between gap-3`,children:[j(`span`,{className:`truncate`,children:e.title}),j(`span`,{className:e.raw.kind===`folder`?`badge badge-ghost badge-xs`:`badge badge-outline badge-xs`,children:e.raw.kind})]}),onDrop:e=>{ne.value=ot(ne.value,e),re.value=`${String(e.dragNode.key)} -> ${String(e.node.key)} (${e.dropToGap?e.dropPosition<0?`before`:`after`:`inside`})`}}),A(`div`,{className:`space-y-3`,children:[A(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[j(`div`,{className:`text-xs text-base-content/45`,children:`最近一次拖拽`}),j(`div`,{className:`mt-2 text-sm text-base-content/75`,children:re.value})]}),A(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[j(`div`,{className:`text-xs text-base-content/45`,children:`allowDrop 规则`}),A(`div`,{className:`mt-2 grid gap-2 text-sm text-base-content/75`,children:[j(`div`,{children:`folder：允许放入，也允许插前 / 插后。`}),j(`div`,{children:`file：只允许插前 / 插后，不允许作为 inside 目标。`})]})]}),j(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`,children:`拖到 folder 正中央会看到“放入”，拖到行的上沿或下沿则会出现“插前 / 插后”；如果目标是 file，inside 落点会被 allowDrop 直接拦掉。`})]})]})});c(()=>b(e,d,xe))});let Se=o(`rue:component:anchor`);l(d,Se),s(()=>{let e=w(M,{title:`Virtual Scroll`,summary:`长列表下只渲染可见窗口，height 和 itemHeight 负责限定视口和估算切片范围。`,tab:L.virtual,code:Ze,preview:A(`div`,{className:`grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`,children:[j(q,{treeData:He,selectedKeys:N.value,height:320,itemHeight:42,virtual:!0,blockNode:!0,onSelect:e=>{N.value=e}}),A(`div`,{className:`space-y-3`,children:[A(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[j(`div`,{className:`text-xs text-base-content/45`,children:`数据量`}),j(`div`,{className:`mt-2 text-2xl font-semibold`,children:He.length})]}),A(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[j(`div`,{className:`text-xs text-base-content/45`,children:`当前选中`}),j(`div`,{className:`mt-2 text-sm text-base-content/75`,children:JSON.stringify(N.value)})]}),j(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`,children:`对文档页目录、埋点树、批量资源目录这种长列表场景，虚拟滚动能显著降低初始渲染压力。`})]})]})});c(()=>b(e,d,Se))});let Ce=o(`rue:component:anchor`);l(d,Ce),s(()=>{let e=w(M,{title:`Virtual + Async Load 场景页`,summary:`把 virtual、height、itemHeight 和 loadData 合在一起，就能接超长目录或资源树，只在展开分支时再注入子节点。`,tab:L.virtualAsync,code:Qe,preview:A(`div`,{className:`grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`,children:[j(q,{treeData:P.value,selectedKeys:ie.value,expandedKeys:F.value,height:340,itemHeight:40,virtual:!0,showIcon:!0,blockNode:!0,loadData:R,titleRender:({node:e,loading:t})=>A(`div`,{className:`flex min-w-0 items-center justify-between gap-3`,children:[j(`span`,{className:`truncate`,children:e.title}),j(`span`,{className:`badge badge-ghost badge-xs`,children:t?`loading`:e.children.length?`loaded`:e.isLeaf?`leaf`:`lazy`})]}),onSelect:e=>{ie.value=e},onExpand:e=>{F.value=e}}),A(`div`,{className:`space-y-3`,children:[A(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[j(`div`,{className:`text-xs text-base-content/45`,children:`根节点数量`}),j(`div`,{className:`mt-2 text-2xl font-semibold`,children:P.value.length})]}),A(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[j(`div`,{className:`text-xs text-base-content/45`,children:`已加载分支`}),j(`div`,{className:`mt-2 text-2xl font-semibold`,children:I.get()})]}),A(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[j(`div`,{className:`text-xs text-base-content/45`,children:`当前展开`}),j(`div`,{className:`mt-2 text-sm text-base-content/75`,children:JSON.stringify(F.value)})]}),j(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`,children:`先滚动到较深位置再展开节点也没问题：视口外的行不会真正渲染，只有命中的 branch 才会触发 loadData 注入子节点。`})]})]})});c(()=>b(e,d,Ce))});let we=o(`rue:component:anchor`);l(d,we),s(()=>{let e=w(M,{title:`保留原始递归 Demo`,summary:`旧的 TreeView 行为没有删掉，只是并进 design 页面里，方便对比“直接改数据”这类递归写法。`,tab:L.legacy,code:$e,preview:j(`div`,{className:`card border border-base-200/80 bg-base-100 shadow-sm not-prose`,children:A(`div`,{className:`card-body grid gap-4 lg:grid-cols-[minmax(0,1fr),18rem] lg:items-start`,children:[j(`ul`,{className:`m-0 grid gap-1 p-0`,children:j(lt,{model:oe})}),j(`div`,{className:`rounded-box border border-base-300 bg-base-200/40 p-4 text-sm text-base-content/70`,children:`单击切换展开，双击叶子节点会把它转换成 folder，并在当前层直接追加一个新子节点。`})]})})});c(()=>b(e,d,we))});let Te=p(`div`,d);l(d,Te),v(Te,`not-prose mt-10 space-y-4`);let Ee=p(`h2`,Te);l(Te,Ee),v(Ee,`text-2xl font-semibold`),l(Ee,T(`API`));let De=o(`rue:component:anchor`);return l(Te,De),s(()=>{let e=w(Pe,{rows:et});c(()=>b(e,Te,De))}),n})}),d,E),d})};export{ut as default};