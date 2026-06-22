import{$t as e,A as t,Bt as n,D as r,M as i,Nt as a,Q as o,Vt as s,Wt as c,Xt as l,Z as u,an as d,at as f,bt as p,dt as m,it as h,l as g,m as _,nt as v,o as y,on as b,pt as x,rt as S,s as ee,t as C,tn as w,tt as T,wt as E}from"./vapor-runtime-x7F5M-49.js";import{a as D,n as O}from"./vapor-helpers-vapor-D1LP4JjK.js";import{a as k,o as A}from"./persistentSidebarPlayground-Cl_JMYk5.js";import{r as j}from"./SidebarPlaygroundDesign-Bmw9WJ3p.js";import{t as M}from"./PreviewBlock-CLB4jOfl.js";var te=new Map,ne=new WeakMap,re=new WeakMap,N=8,P=e=>typeof e==`object`&&!!e||typeof e==`function`,F=(e,t)=>e.length===t.length&&e.every((e,n)=>e===t[n]),ie=(e,t,n)=>e.treeDataSimpleMode===t&&e.fieldNames===n,I=(e,t,n,r,i)=>(e.treeData===t||F(e.treeDataRoots,n))&&ie(e,r,i),ae=(e,t,n,r)=>{let i=[P(e)?ne.get(e):void 0],a=t[0];P(a)&&a!==e&&i.push(re.get(a));for(let a of i){let i=a?.find(i=>I(i,e,t,n,r));if(i)return i}},oe=(e,t,n)=>{if(!P(t))return;let r=e.get(t);if(!r){e.set(t,[n]);return}let i=r.findIndex(e=>I(e,n.treeData,n.treeDataRoots,n.treeDataSimpleMode,n.fieldNames));i>=0?r[i]=n:(r.push(n),r.length>N&&r.shift())},L=e=>{oe(ne,e.treeData,e),oe(re,e.treeDataRoots[0],e)},se={title:`title`,key:`key`,children:`children`,disabled:`disabled`,selectable:`selectable`,checkable:`checkable`,disableCheckbox:`disableCheckbox`,isLeaf:`isLeaf`,icon:`icon`,className:`className`,id:`id`,pId:`pId`},R=(...e)=>e.filter(Boolean).join(` `),ce=e=>typeof e==`object`&&!!e&&!Array.isArray(e),z=e=>typeof e==`string`||typeof e==`number`,B=e=>`${typeof e}:${String(e)}`,V=e=>{let t=[],n=new Set;return(e??[]).forEach(e=>{let r=B(e);n.has(r)||(n.add(r),t.push(e))}),t},H=(e,t)=>e?t?`${e} ${t}`:e:t??``,le=()=>k(`span`,{className:`loading loading-spinner loading-xs`,"aria-hidden":`true`}),ue=({expanded:e,hidden:t})=>k(`svg`,{viewBox:`0 0 16 16`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,className:H(`size-4 transition-transform duration-200`,t?`opacity-0`:e?`rotate-90`:``),"aria-hidden":`true`,children:k(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`m6 3.5 4 4.5-4 4.5`})}),U=()=>k(`svg`,{viewBox:`0 0 16 16`,fill:`currentColor`,className:`size-4`,"aria-hidden":`true`,children:k(`path`,{d:`M5 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM11 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM11 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM5 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM11 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z`})}),de=({expanded:e})=>k(`svg`,{viewBox:`0 0 16 16`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,className:`size-4`,"aria-hidden":`true`,children:k(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:e?`M2.5 6.5h11l-1.2 6h-9.1l-1.2-6ZM2.5 5V3.5h4l1.2 1.5h5.8v1.5`:`M2.5 4.5h4l1.2 1.5h5.8v6.5h-11v-8Z`})}),fe=()=>A(`svg`,{viewBox:`0 0 16 16`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,className:`size-4`,"aria-hidden":`true`,children:[k(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M4 2.5h5l3 3v8H4v-11Z`}),k(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M9 2.5v3h3`})]}),W=(e,t,n)=>e[n?.[t]??se[t]],pe=(e,t)=>W(e,`title`,t)??e.title??e.key,G=e=>new Set(V(e).map(B)),me=(e,t)=>[e.flat.map(e=>`${e.parentKeyText??`root`}>${e.keyText}`).join(`|`),t.directoryMode?`directory`:`tree`,String(t.expandAction??!1),String(t.rangeSelect??!1)].join(`::`),he=e=>e==null||typeof e==`boolean`?``:typeof e==`string`||typeof e==`number`?String(e):Array.isArray(e)?e.map(e=>he(e)).filter(Boolean).join(` `):typeof e==`object`?[`title`,`label`,`name`,`text`,`description`,`children`].map(t=>he(e[t])).filter(Boolean).join(` `):``,ge=(e,t,n)=>{if(!t)return e;let r=ce(t)?t:void 0,i=r?.id??n?.id??se.id,a=r?.pId??n?.pId??se.pId,o=r?.rootPId??0,s=n?.children??se.children,c=new Map;e.forEach((e,t)=>{let n=e[i]??e.key??t;c.set(n,{...e,[s]:[]})});let l=[];return e.forEach((e,t)=>{let n=e[i]??e.key??t,r=e[a],u=c.get(n);if(!u)return;if(r==null||r===o||!c.has(r)){l.push(u);return}let d=c.get(r);if(!d){l.push(u);return}let f=d[s]??[];f.push(u),d[s]=f}),l},_e=(e,t)=>{let n=[],r={},i=(e,a,o,s)=>{let c=W(e,`key`,t),l=z(c)?c:o,u=B(l),d=W(e,`isLeaf`,t),f={key:l,keyText:u,title:pe(e,t),depth:a,children:[],raw:e,disabled:!!W(e,`disabled`,t),selectable:W(e,`selectable`,t)!==!1,checkable:W(e,`checkable`,t)!==!1,disableCheckbox:!!W(e,`disableCheckbox`,t),isLeaf:!1,className:W(e,`className`,t),icon:W(e,`icon`,t),parentKeyText:s};n.push(f),r[u]=f;let p=W(e,`children`,t);return f.children=Array.isArray(p)?p.map((e,t)=>i(e,a+1,`${o}-${t}`,u)):[],f.isLeaf=d===!0?!0:d===!1?!1:f.children.length===0,f};return{roots:e.map((e,t)=>i(e,0,`node-${t}`)),flat:n,byKeyText:r}},ve=e=>{let t=[],n=e=>{!e.disabled&&e.checkable&&!e.disableCheckbox&&t.push(e.keyText),e.children.forEach(e=>n(e))};return n(e),t},K=e=>{let t=[],n=e=>{t.push(e.key),e.children.forEach(e=>n(e))};return n(e),t},ye=(e,t,n)=>{let r=new Set,i=new Set,a={},o=e=>{let s=!e.disabled&&e.checkable&&!e.disableCheckbox,c=e.children.map(e=>o(e)).filter(e=>e.participates),l=t.has(e.keyText),u=l,d=!1;if(!n&&c.length>0){let e=c.every(e=>e.checked),t=c.some(e=>e.checked||e.halfChecked);u=l||e,d=!u&&t}let f={checked:u,halfChecked:d,participates:s||c.length>0};return a[e.keyText]=f,u&&s&&r.add(e.keyText),d&&s&&i.add(e.keyText),f};return e.forEach(e=>o(e)),{checkedKeys:r,halfCheckedKeys:i,stateMap:a}},be=(e,t,n,r)=>{let i=new Set(e),a=new Set(t),o=n.filter(e=>i.has(e.keyText)).map(e=>e.key).filter(z);return r?{checked:o,halfChecked:n.filter(e=>a.has(e.keyText)).map(e=>e.key).filter(z)}:o},xe=(e,t,n,r)=>{if(!n){let n=[],r=e=>{n.push({node:e,matched:!1}),t.has(e.keyText)&&e.children.forEach(e=>r(e))};return e.forEach(e=>r(e)),n}let i=e=>{let t=r(e),n=e.children.flatMap(e=>i(e));if(!t&&n.length===0)return[];if(t){let t=[{node:e,matched:!0}],n=e=>{t.push({node:e,matched:!1}),e.children.forEach(e=>n(e))};return e.children.forEach(e=>n(e)),t}return[{node:e,matched:!1},...n]};return e.flatMap(e=>i(e))},Se=(e,t,n)=>t?typeof n==`function`?n(t,e):n===!1?!0:he(e.title).toLowerCase().includes(t.toLowerCase()):!0,Ce=(e,t,n)=>{let r=t.parentKeyText;for(;r;){if(r===e.keyText)return!0;r=n[r]?.parentKeyText}return!1},we=e=>{let t=!!e,n=ce(e)?e:void 0;return{enabled:t,icon:n?.icon,nodeDraggable:r=>t?typeof e==`function`?e(r):n&&typeof n.nodeDraggable==`function`?n.nodeDraggable(r):!0:!1}},Te=(e,t,n,r,i)=>{if(!i||!n||!r)return{items:e,topSpacer:0,bottomSpacer:0};let a=r+2,o=Math.max(1,Math.ceil(n/a))+12,s=Math.max(0,e.length-o),c=Math.min(s,Math.max(0,Math.floor(t/a)-6)),l=Math.min(e.length,c+o);return{items:e.slice(c,l),topSpacer:c*a,bottomSpacer:Math.max(0,(e.length-l)*a)}},Ee=e=>{if(e===-1)return`before`;if(e===1)return`after`;if(e===0)return`inside`},De=(e,t)=>e.map(e=>t[e]?.key).filter(z),Oe=(e,t)=>{if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0},ke=e=>{switch(e){case`small`:case`sm`:return{headerPadding:`px-4 py-3`,bodyPadding:`px-3 py-3`,rowPadding:`py-1.5`,textClass:`text-sm`,rowMinHeight:36,rowEstimate:42};case`large`:case`lg`:return{headerPadding:`px-5 py-4`,bodyPadding:`px-4 py-4`,rowPadding:`py-2.5`,textClass:`text-[0.95rem]`,rowMinHeight:44,rowEstimate:50};default:return{headerPadding:`px-4 py-3.5`,bodyPadding:`px-3.5 py-3.5`,rowPadding:`py-2`,textClass:`text-sm`,rowMinHeight:40,rowEstimate:46}}},Ae=e=>{switch(e){case`error`:return`border-error/55 shadow-[0_0_0_1px_rgba(248,113,113,0.14)]`;case`warning`:return`border-warning/55 shadow-[0_0_0_1px_rgba(251,191,36,0.14)]`;default:return``}},je=({snapshot:e,version:t,loadingKeyTexts:n,fixedVirtualRowHeight:r,componentSize:i,classNames:a,styles:o,emptyText:s,showLine:c,disabled:l,blockNode:u,checkable:d,showIcon:f,selectable:p,hasLoadData:m,titleRender:h,switcherIcon:g,icon:v,directoryMode:y,dragConfig:b,handleDragStartNode:x,handleDragEnterNode:S,handleDragOverNode:ee,handleDragLeaveNode:C,handleDragEndNode:w,handleDropNode:T,handleExpandToggle:E,handleCheck:D,handleDragMouseDown:O,handleLabelMouseDown:j,handleLabelActivate:M,handleLabelContextMenu:te})=>{let ne=(e,t,n,r,i,a)=>typeof g==`function`?g({node:e,expanded:t,selected:n,checked:r,halfChecked:i,loading:a}):g===void 0?a?k(le,{}):k(ue,{expanded:t,hidden:e.isLeaf&&e.children.length===0}):g,re=e=>!(b.enabled&&b.nodeDraggable(e)&&!l&&!e.disabled)||b.icon===!1?null:k(`span`,{"aria-hidden":`true`,draggable:!0,className:H(`inline-flex size-6 shrink-0 cursor-grab items-center justify-center rounded-lg text-base-content/35 transition group-hover:text-base-content/55`,a?.dragHandle),style:o?.dragHandle,"data-rue-tree-drag-handle":`true`,onMouseDown:t=>O(e,t),children:b.icon??k(U,{})}),N=(e,t)=>A(`div`,{className:R(`pointer-events-none absolute inset-x-0 z-10 flex items-center gap-2 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-primary/85`,t===`before`?`-top-2.5`:`-bottom-2.5`),style:{paddingLeft:`${e.depth*18+20}px`},"data-rue-tree-drop-placeholder":t,children:[k(`span`,{className:`h-[2px] flex-1 rounded-full bg-primary/60`}),k(`span`,{className:`rounded-full bg-primary/10 px-2 py-1 text-[10px]`,children:`插入到此处`})]}),P=(e,t,n,r,i,a)=>typeof v==`function`?v({node:e,expanded:t,selected:n,checked:r,halfChecked:i,loading:a}):v===void 0?e.icon===void 0?f?y?k(`span`,{className:`inline-flex size-6 items-center justify-center text-base-content/60`,children:e.children.length>0||!e.isLeaf?k(de,{expanded:t}):k(fe,{})}):k(`span`,{className:`inline-flex size-6 shrink-0 items-center justify-center rounded-md bg-base-200/80 text-[10px] font-semibold text-base-content/60`,children:e.children.length>0||!e.isLeaf?`DIR`:`DOC`}):null:e.icon:v;return A(_,{children:[k(`span`,{hidden:!0,"aria-hidden":`true`,"data-rue-tree-content-version":String(t)}),e.virtualSlice.topSpacer>0?k(`div`,{style:{height:`${e.virtualSlice.topSpacer}px`},"aria-hidden":`true`}):null,e.virtualSlice.items.map(({node:t})=>{let s=e.checkState.stateMap[t.keyText]??{checked:!1,halfChecked:!1,participates:!0},g=e.searchValue?!0:e.expandedKeyTextSet.has(t.keyText),_=e.selectedKeyTextSet.has(t.keyText),y=n.includes(t.keyText),O=!!m||!!t.children.length||!t.isLeaf,F=e.dragState.overKeyText===t.keyText,ie=b.enabled&&b.nodeDraggable(t)&&!l&&!t.disabled,I=F?Ee(e.dragState.dropPosition):void 0,ae={node:t,expanded:g,selected:_,checked:s.checked,halfChecked:s.halfChecked,loading:y};return A(`div`,{className:H(R(`rue-tree-node group relative flex min-w-0 items-center gap-1 rounded-lg py-0.5 pr-2 text-base-content outline-none transition-colors duration-150`,l||t.disabled?`opacity-55`:I===`inside`?`bg-primary/10 ring-1 ring-primary/20`:I?`bg-primary/5`:`hover:bg-base-200/65`,c&&t.depth>0&&`border-l border-base-300/60`,t.className),a?.node),style:{paddingLeft:`${t.depth*18+8}px`,height:r?`${r}px`:void 0,minHeight:r?void 0:`${i.rowMinHeight}px`,...o?.node},"data-rue-tree-node":t.keyText,"data-rue-tree-drop-intent":I??``,"data-rue-tree-drop-position":F?String(e.dragState.dropPosition??0):``,draggable:ie,onDragStart:e=>x(t,e),onDragEnter:e=>S(t,e),onDragOver:e=>ee(t,e),onDragLeave:e=>C(t,e),onDragEnd:e=>w(t,e),onDrop:e=>T(t,e),children:[I===`before`?N(t,`before`):null,k(`button`,{type:`button`,className:H(R(`inline-flex size-6 shrink-0 items-center justify-center rounded-md text-base-content/55 transition-colors duration-150 hover:bg-base-200 hover:text-base-content disabled:cursor-default disabled:opacity-30`,!O&&`pointer-events-none`),a?.switcher),style:o?.switcher,disabled:!O||l||t.disabled,"aria-label":g?`折叠节点`:`展开节点`,onClick:e=>E(t,e),children:ne(t,g,_,s.checked,s.halfChecked,y)}),d?k(`button`,{type:`button`,role:`checkbox`,"aria-checked":s.halfChecked?`mixed`:s.checked?`true`:`false`,disabled:l||t.disabled||t.disableCheckbox||!t.checkable,className:H(R(`inline-flex size-4 shrink-0 items-center justify-center rounded border text-[11px] font-semibold leading-none transition-colors duration-150`,s.checked||s.halfChecked?`border-primary bg-primary text-primary-content`:`border-base-content/35 bg-base-100 text-transparent hover:border-primary/60`,(l||t.disabled||t.disableCheckbox||!t.checkable)&&`cursor-not-allowed opacity-45`),a?.checkbox),style:o?.checkbox,onClick:e=>D(t,e),children:s.halfChecked?`−`:s.checked?`✓`:``}):null,re(t),f||t.icon!==void 0||v!==void 0?P(t,g,_,s.checked,s.halfChecked,y):null,A(`button`,{type:`button`,className:H(R(`flex min-w-0 items-center gap-2 rounded-md px-2 text-left transition-colors duration-150`,i.rowPadding,u?`flex-1 justify-between`:`max-w-full`,_?`selected bg-primary/12 text-primary`:`text-base-content hover:bg-base-200/70`,(l||t.disabled||!p||!t.selectable)&&`cursor-not-allowed opacity-55`),a?.label),style:o?.label,disabled:l||t.disabled||!p||!t.selectable,draggable:ie,onMouseDown:e=>j(t,e),onClick:e=>M(t,e,`click`),onDblClick:e=>M(t,e,`doubleClick`),onContextMenu:e=>te(t,e),children:[h?h(ae):k(`span`,{className:`min-w-0 truncate`,children:t.title}),I?k(`span`,{className:`badge badge-primary badge-outline badge-xs shrink-0`,"data-rue-tree-drop-placeholder":I,children:I===`inside`?`放入`:I===`before`?`插前`:`插后`}):_?k(`span`,{className:`badge badge-primary badge-xs shrink-0`,children:`选中`}):null]}),I===`after`?N(t,`after`):null]},t.keyText)}),e.virtualSlice.bottomSpacer>0?k(`div`,{style:{height:`${e.virtualSlice.bottomSpacer}px`},"aria-hidden":`true`}):null,e.visibleNodes.length?null:k(`div`,{className:H(`rounded-lg px-3 py-8 text-center text-sm text-base-content/55`,a?.empty),style:o?.empty,children:s})]})},Me=({className:a,style:o,treeData:s=[],fieldNames:u,treeDataSimpleMode:f,selectedKeys:p,defaultSelectedKeys:m,checkedKeys:h,defaultCheckedKeys:g,expandedKeys:_,defaultExpandedKeys:v,defaultExpandAll:y,multiple:b,checkable:x,checkStrictly:S,showLine:ee,showIcon:C,blockNode:w,selectable:T=!0,disabled:E,size:D,status:O,draggable:j,allowDrop:M,virtual:N=!0,height:F,itemHeight:oe,titleRender:se,switcherIcon:ce,icon:le,filterTreeNode:ue,searchValue:U,defaultSearchValue:de,searchPlaceholder:fe=`搜索节点`,allowSearch:W,loadData:pe,emptyText:he=`暂无节点`,onSelect:Ee,onCheck:Me,onExpand:Ne,onSearch:q,onDoubleClick:Pe,onDragStart:Fe,onDragEnter:Ie,onDragOver:Le,onDragLeave:Re,onDragEnd:ze,onDrop:Be,onScroll:Ve,classNames:He,styles:Ue,directoryMode:J,expandAction:We=!1,toggleSelect:Ge=!0,rangeSelect:Ke=`append`,...qe})=>{let Je=d();function Ye(){let t=Je.current,n=e(s),r=e(f),i=e(u);if(t&&t.treeData===n&&ie(t,r,i))return t.normalizedTree;let a=Array.isArray(n)?n.slice():[];if(t&&I(t,n,a,r,i))return t.normalizedTree;let o=ae(n,a,r,i);if(o)return Je.current=o,o.normalizedTree;let c=_e(ge(s,f,u),u),l={treeData:n,treeDataRoots:a,treeDataSimpleMode:r,fieldNames:i,normalizedTree:c};return Je.current=l,L(l),c}let Xe=Ye(),Ze=Xe,Qe=me(Xe,{directoryMode:J,expandAction:We,rangeSelect:Ke}),$e=te.get(Qe)??(()=>{let e={};return te.set(Qe,e),e})(),et=d(null),tt=ke(D),nt=we(j),rt=y?Xe.flat.filter(e=>e.children.length>0||!e.isLeaf).map(e=>e.key):v??[],Y=d(l(0)).current,it=d(l(V(m??p))).current,at=d(l(V(g))).current,ot=d(l(V((J?$e.expandedKeys:void 0)??rt))).current,st=d(l(V(p))).current,ct=d(l(V(_))).current,lt=d(l(h===void 0?new Set:G(Array.isArray(h)?h:h.checked))).current,ut=d(l(de??``)).current,dt=d(l([])).current,ft=d(l(0)).current,X=d(l(null)).current,pt=d(l([])).current,Z=d(l({})).current,mt=d(l({})).current,ht=d(l(null)).current,gt=d(l(!1)).current,_t=d(l(null)).current,vt=d(null);if(h!==void 0){let e=G(Array.isArray(h)?h:h.checked);Oe(lt.value,e)||(lt.value=e)}p!==void 0&&!Oe(G(st.value),G(p))&&(st.value=V(p)),_!==void 0&&!Oe(G(ct.value),G(_))&&(ct.value=V(_));let yt=oe??tt.rowEstimate,bt=typeof F==`number`&&F>0?F:void 0,xt=N!==!1&&bt&&typeof oe==`number`&&oe>0?oe:void 0;function Q(){Y.value+=1,dn()}function St(t=!1){if(t){let t=e(s),n=Array.isArray(t)?t[0]:void 0;Je.current=void 0,P(t)&&ne.delete(t),P(n)&&re.delete(n)}let n=Ye();return Ze=n,n}function $(){return Ze??St()}function Ct(){return p===void 0?it.value:st.value}function wt(){return _===void 0?ot.value:ct.value}function Tt(){return U===void 0?ut.value:U}function Et(){return h===void 0?G(at.value):lt.value}function Dt(){let e=$(),t=G(wt()),n=Tt();return xe(e.roots,t,n,e=>Se(e,n,ue))}function Ot(){Y.value;let e=$(),t=Tt(),n=G(Ct()),r=G(wt()),i=Et(),a=x?ye(e.roots,i,!!S):{checkedKeys:new Set,halfCheckedKeys:new Set,stateMap:{}},o=xe(e.roots,r,t,e=>Se(e,t,ue));return{searchValue:t,selectedKeyTextSet:n,expandedKeyTextSet:r,checkState:a,visibleNodes:o,virtualSlice:Te(o,ft.value,bt,yt,N!==!1&&!!bt),dragState:Z.value}}let kt=(e,t,n)=>{let r=V(e);return _===void 0?(ot.value=r,J&&($e.expandedKeys=r)):ct.value=r,Q(),Ne&&Ne(r,{node:t,expanded:r.some(e=>B(e)===t.keyText),nativeEvent:n}),r},At=(e,t,n)=>{let r=$(),i=V(e).filter(e=>r.byKeyText[B(e)]),a=i.map(e=>r.byKeyText[B(e)]).filter(Boolean);return p===void 0?it.value=i:st.value=i,Q(),Ee&&Ee(i,{node:t,nativeEvent:n,selected:i.some(e=>B(e)===t.keyText),selectedNodes:a}),i},jt=(e,t,n)=>{let r=$(),i=ye(r.roots,e,!!S),a=be(Array.from(i.checkedKeys),Array.from(i.halfCheckedKeys),r.flat,!!S);h===void 0?at.value=S?a.checked:a:lt.value=new Set(i.checkedKeys),Q(),Me&&Me(a,{node:t,nativeEvent:n,checked:i.checkedKeys.has(t.keyText),checkedNodes:Array.from(i.checkedKeys).map(e=>r.byKeyText[e]).filter(Boolean),halfCheckedKeys:Array.from(i.halfCheckedKeys).map(e=>r.byKeyText[e]?.key).filter(z)})},Mt=async(e,t)=>{let n=wt(),r=G(n);if(E||e.disabled)return n;let i=r.has(e.keyText),a=i?n.filter(t=>B(t)!==e.keyText):[...n,e.key],o=!i&&!!pe&&!e.isLeaf&&e.children.length===0&&!dt.value.includes(e.keyText);o&&(dt.value=[...dt.value,e.keyText]);let s=kt(a,e,t);if(o&&pe)try{await pe(e),St(!0)}finally{dt.value=dt.value.filter(t=>t!==e.keyText),Q()}return s},Nt=(e,t)=>{t.preventDefault(),t.stopPropagation(),Mt(e,t)},Pt=(e,t)=>{if(E||e.disabled||!T||!e.selectable)return;let n=Ct(),r=G(n);if(b&&Ke!==!1&&t?.shiftKey){let r=Dt().map(e=>e.node.keyText),i=X.value&&r.includes(X.value)?X.value:void 0,a=n.map(B).filter(t=>t!==e.keyText&&r.includes(t)),o=a[a.length-1],s=i??o,c=s?r.indexOf(s):-1,l=r.indexOf(e.keyText);if(c>=0&&l>=0){let i=Math.min(c,l),a=Math.max(c,l),o=r.slice(i,a+1),u=Ke===`append`?pt.value.length?pt.value:n.map(B):[],d=At(De(Array.from(new Set([...u,...o])),$().byKeyText),e,t);X.value=s,pt.value=d.map(B);return}}if(J){let i=!!b&&!!Ge&&!!(t?.ctrlKey||t?.metaKey);if(b&&i){let i=r.has(e.keyText)?n.filter(t=>B(t)!==e.keyText):[...n,e.key];X.value=e.keyText,pt.value=i.map(B),At(i,e,t);return}X.value=e.keyText,pt.value=[e.keyText],At([e.key],e,t);return}if(b){let i=r.has(e.keyText)?n.filter(t=>B(t)!==e.keyText):[...n,e.key];X.value=e.keyText,pt.value=i.map(B),At(i,e,t);return}let i=r.has(e.keyText)?[]:[e.key];X.value=e.keyText,pt.value=i.map(B),At(i,e,t)},Ft=(e,t)=>{if(t.preventDefault(),t.stopPropagation(),E||e.disabled||!e.checkable||e.disableCheckbox)return;let n=Et(),r=ye($().roots,n,!!S),i=new Set(n),a=r.checkedKeys.has(e.keyText);if(S)a?i.delete(e.keyText):i.add(e.keyText);else{let t=ve(e);a?t.forEach(e=>i.delete(e)):t.forEach(e=>i.add(e))}jt(i,e,t)},It=e=>{U===void 0&&(ut.value=e),Q(),q&&q(e)},Lt=e=>{ft.value=e.currentTarget.scrollTop,Q(),Ve&&Ve(e)},Rt=e=>{!e||Z.value.overKeyText!==e||(Z.value={dragKeyText:Z.value.dragKeyText},Q())},zt=e=>{e&&_t.value!==e||(_t.value=null,vt.current?.(),vt.current=null)},Bt=e=>{if(vt.current?.(),vt.current=null,_t.value=e,typeof window>`u`)return;let t,n=()=>{t!==void 0&&window.clearTimeout(t),window.removeEventListener(`mouseup`,r,!0)},r=()=>{window.removeEventListener(`mouseup`,r,!0),t=window.setTimeout(()=>{_t.value===e&&(_t.value=null),vt.current===n&&(vt.current=null)},500)};vt.current=n,window.addEventListener(`mouseup`,r,!0)},Vt=(e,t)=>{Z.value.overKeyText===e&&Z.value.dropPosition===t||(Z.value={...Z.value,overKeyText:e,dropPosition:t},Q())},Ht=(e,t)=>{let n={...mt.value},r=n[e]??0,i=Math.max(r+t,0);return i>0?n[e]=i:delete n[e],mt.value=n,Q(),i},Ut=()=>{mt.value={},Z.value={},Q()},Wt=(e,t,n)=>{let r=$(),i=Z.value.dragKeyText;if(!i)return null;let a=r.byKeyText[i];if(!a||a.keyText===e.keyText||Ce(a,e,r.byKeyText))return null;let o=n?.getBoundingClientRect?.(),s=`clientY`in t?t.clientY:void 0,c=0;return o&&typeof s==`number`&&(s<o.top+o.height*.25?c=-1:s>o.bottom-o.height*.25&&(c=1)),M&&!M({dragNode:a,dropNode:e,dropPosition:c,dropToGap:c!==0})?null:{dragNode:a,dropPosition:c}},Gt=e=>typeof document>`u`||typeof document.elementFromPoint!=`function`?null:document.elementFromPoint(e.clientX,e.clientY)?.closest?.(`[data-rue-tree-node]`),Kt=e=>{let t=e?.getAttribute(`data-rue-tree-node`);return t?$().byKeyText[t]??null:null},qt=()=>{typeof document>`u`||(document.removeEventListener(`mousemove`,Xt),document.removeEventListener(`mouseup`,Zt))},Jt=(e,t)=>{let n=we(j);t.button!==0||!n.enabled||!n.nodeDraggable(e)||E||e.disabled||typeof document>`u`||(ht.value={keyText:e.keyText,startX:t.clientX,startY:t.clientY,active:!1},document.addEventListener(`mousemove`,Xt),document.addEventListener(`mouseup`,Zt))},Yt=(e,t)=>{let n=$().byKeyText[e.keyText];return n?(e.active=!0,ht.value=e,Bt(e.keyText),mt.value={},Z.value={dragKeyText:e.keyText},Q(),Fe&&Fe({event:t,node:n}),!0):!1};function Xt(e){let t=ht.value;if(!t)return;let n=Math.max(Math.abs(e.clientX-t.startX),Math.abs(e.clientY-t.startY));if(!t.active&&n<4||!t.active&&!Yt(t,e))return;e.preventDefault();let r=Gt(e),i=Kt(r);if(!i){Rt(Z.value.overKeyText);return}let a=Wt(i,e,r);if(!a){Rt(i.keyText);return}Vt(i.keyText,a.dropPosition),Le&&Le({event:e,node:i})}function Zt(e){let t=ht.value,n=Z.value.dragKeyText,r=t?.active?t.keyText:n;if(ht.value=null,qt(),!r)return;e.preventDefault();let i=Gt(e),a=Kt(i),o=a?Wt(a,e,i):null;if(a&&o&&Be){let t=Z.value.overKeyText===a.keyText&&Z.value.dropPosition!==void 0?Z.value.dropPosition:o.dropPosition;Be({event:e,node:a,dragNode:o.dragNode,dragNodesKeys:K(o.dragNode),dropPosition:t,dropToGap:t!==0})}let s=$().byKeyText[r];Ut(),s&&ze&&ze({event:e,node:s})}let Qt=(e,t)=>{let n=we(j);!n.enabled||!n.nodeDraggable(e)||E||e.disabled||(t.dataTransfer&&(t.dataTransfer.effectAllowed=`move`,t.dataTransfer.setData(`text/plain`,e.keyText)),mt.value={},Z.value={dragKeyText:e.keyText},Q(),Fe&&Fe({event:t,node:e}))},$t=(e,t)=>{if(!Z.value.dragKeyText)return;Ht(e.keyText,1);let n=Wt(e,t,t.currentTarget);if(!n){Rt(e.keyText);return}t.preventDefault(),Vt(e.keyText,n.dropPosition);let r=wt(),i=G(r);n.dropPosition===0&&!i.has(e.keyText)&&(e.children.length>0||!e.isLeaf)&&(r=kt([...r,e.key],e,t)),Ie&&Ie({event:t,node:e,expandedKeys:r})},en=(e,t)=>{if(!Z.value.dragKeyText)return;let n=Wt(e,t,t.currentTarget);if(!n){Rt(e.keyText);return}t.preventDefault(),t.dataTransfer&&(t.dataTransfer.dropEffect=`move`),Vt(e.keyText,n.dropPosition),Le&&Le({event:t,node:e})},tn=(e,t)=>{Ht(e.keyText,-1)===0&&Rt(e.keyText),Re&&Re({event:t,node:e})},nn=(e,t)=>{Ut(),ze&&ze({event:t,node:e})},rn=(e,t)=>{let n=Wt(e,t,t.currentTarget);if(!n){Ut();return}t.preventDefault(),t.stopPropagation();let r=Z.value.overKeyText===e.keyText&&Z.value.dropPosition!==void 0?Z.value.dropPosition:n.dropPosition;Be&&Be({event:t,node:e,dragNode:n.dragNode,dragNodesKeys:K(n.dragNode),dropPosition:r,dropToGap:r!==0}),Ut()},an=(e,t)=>{Jt(e,t)},on=(e,t)=>{let n=!!b&&Ke!==!1&&t.shiftKey;if(J&&b&&Ge&&(t.ctrlKey||t.metaKey)||n){t.preventDefault(),t.stopPropagation(),Bt(e.keyText),Pt(e,t);return}Jt(e,t)},sn=(e,t,n)=>{if(t.preventDefault(),t.stopPropagation(),n===`click`&&_t.value===e.keyText){zt(e.keyText);return}n===`doubleClick`&&Pe&&Pe(t,e);let r=J&&We===n&&(e.children.length>0||!e.isLeaf);if(n===`click`&&r){c(()=>{Mt(e,t),Pt(e,t)});return}r&&Mt(e,t),n===`click`&&Pt(e,t)},cn=(e,t)=>{if(_t.value===e.keyText){t.preventDefault(),t.stopPropagation();return}J&&b&&Ge&&t.ctrlKey&&!t.metaKey&&(t.preventDefault(),t.stopPropagation(),Pt(e,t))},ln=bt?N===!1?{maxHeight:`${bt}px`,overflowY:`auto`}:{height:`${bt}px`,overflowY:`auto`}:{overflowY:`visible`},un=()=>je({snapshot:Ot(),version:Y.value,loadingKeyTexts:dt.value,fixedVirtualRowHeight:xt,componentSize:tt,classNames:He,styles:Ue,emptyText:he,showLine:ee,disabled:E,blockNode:w,checkable:x,showIcon:C,selectable:T,hasLoadData:!!pe,titleRender:se,switcherIcon:ce,icon:le,directoryMode:J,dragConfig:nt,handleDragStartNode:Qt,handleDragEnterNode:$t,handleDragOverNode:en,handleDragLeaveNode:tn,handleDragEndNode:nn,handleDropNode:rn,handleExpandToggle:Nt,handleCheck:Ft,handleDragMouseDown:an,handleLabelMouseDown:on,handleLabelActivate:sn,handleLabelContextMenu:cn});function dn(){gt.value||(gt.value=!0,queueMicrotask(()=>{gt.value=!1,fn()}))}function fn(){let e=et.current;e&&i(un(),e)}function pn(e){et.current=e,e&&fn()}return r(fn),t(()=>{qt(),zt()}),n(()=>[s,f,u,p,h,_,U],()=>{St(),dn()}),dn(),A(`section`,{...qe,className:H(H(H(`rue-tree rounded-box border border-base-300 bg-base-100 text-base-content shadow-sm`,Ae(O)),He?.root),a),style:{...Ue?.root,...o},"data-rue-tree":`true`,"data-rue-tree-version":String(Y.value),children:[W?k(`div`,{className:H(H(R(`border-b border-base-200/80`,tt.headerPadding),He?.header),He?.search),style:{...Ue?.header,...Ue?.search},children:k(`input`,{type:`text`,className:`input input-bordered input-sm w-full bg-base-100`,value:Ot().searchValue,placeholder:fe,onInput:e=>It(e.currentTarget.value)})}):null,k(`div`,{className:H(R(`grid gap-0.5`,tt.bodyPadding,tt.textClass),He?.body),ref:pn,"data-rue-tree-body":`true`,style:{...ln,...Ue?.body},onScroll:Lt})]})},Ne=({className:e,showIcon:t=!0,blockNode:n=!0,expandAction:r=`click`,...i})=>k(Me,{...i,className:H(`rue-directory-tree`,e),showIcon:t,blockNode:n,directoryMode:!0,expandAction:r}),q=Me;q.DirectoryTree=Ne;var Pe=e=>g(t=>{let n=S(`div`,t);x(n,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let r=S(`table`,n);o(n,r),x(r,`table table-zebra`);let i=S(`thead`,r);o(r,i);let a=S(`tr`,i);o(i,a);let c=S(`th`,a);o(a,c),o(c,h(`属性`));let l=S(`th`,a);o(a,l),o(l,h(`说明`));let u=S(`th`,a);o(a,u),o(u,h(`类型`));let d=S(`th`,a);o(a,d),o(d,h(`默认值`));let f=S(`tbody`,r);o(r,f);let p=T(`rue:list:start`),_=T(`rue:list:end`);o(f,p),o(f,_);let b=new Map;return s(()=>{b=O({items:e.rows||[],getKey:(e,t)=>e.prop,elements:b,parent:f,before:_,singleRoot:!0,trackIndex:!1,start:p,renderItem:(e,t,n,r,i)=>{y(g(()=>{let t=v(),n=S(`tr`,t);o(t,n),s(()=>{m(n,`key`,String(e.prop))});let r=S(`td`,n);o(n,r);let i=S(`code`,r);o(r,i);let a=T(`rue:slot:anchor`);o(i,a),s(()=>{let t=e.prop;w(()=>y(t,i,a))});let c=S(`td`,n);o(n,c);let l=T(`rue:slot:anchor`);o(c,l),s(()=>{let t=e.description;w(()=>y(t,c,l))});let u=S(`td`,n);o(n,u);let d=S(`code`,u);o(u,d);let f=T(`rue:slot:anchor`);o(d,f),s(()=>{let t=e.type;w(()=>y(t,d,f))});let p=S(`td`,n);o(n,p);let h=S(`code`,p);o(p,h);let g=T(`rue:slot:anchor`);return o(h,g),s(()=>{let t=e.defaultValue;w(()=>y(t,h,g))}),t}),t,n)}})}),n}),Fe=[{title:`产品平台`,key:`platform`,children:[{title:`文档中心`,key:`docs-api`},{title:`组件市场`,key:`component-hub`},{title:`示例仓库`,key:`examples`}]},{title:`工程效率`,key:`engineering`,children:[{title:`构建链路`,key:`build-pipeline`},{title:`质量门禁`,key:`quality-gate`},{title:`发布管道`,key:`release-flow`}]},{title:`增长分析`,key:`growth`,children:[{title:`实验看板`,key:`experiment-board`},{title:`归因报表`,key:`attribution-report`},{title:`留存漏斗`,key:`retention-funnel`}]}],Ie=[{title:`发布总控`,key:`release-control`,children:[{title:`前台站点`,key:`release-site`,children:[{title:`首页编排`,key:`site-home`},{title:`价格页`,key:`site-pricing`}]},{title:`运营链路`,key:`release-ops`,children:[{title:`投放素材`,key:`ops-assets`},{title:`归因回传`,key:`ops-attribution`}]},{title:`合规审查`,key:`release-compliance`,children:[{title:`隐私条款`,key:`compliance-privacy`},{title:`审计记录`,key:`compliance-audit`}]}]}],Le=[{title:`权限控制`,key:`permission-disabled-root`,children:[{title:`只读目录`,key:`readonly-folder`,disabled:!0,children:[{title:`首页编排`,key:`readonly-home`},{title:`价格页`,key:`readonly-pricing`}]},{title:`可编辑目录`,key:`editable-folder`,children:[{title:`投放素材`,key:`editable-assets`},{title:`归因回传`,key:`editable-attribution`,disableCheckbox:!0}]},{title:`审计日志（仅禁用复选框）`,key:`audit-log`,disableCheckbox:!0}]}],Re=[{nodeId:1,parentId:0,code:`workspace`,name:`Workspace`},{nodeId:2,parentId:1,code:`workflow`,name:`Workflow board`},{nodeId:3,parentId:1,code:`briefs`,name:`Briefs`},{nodeId:4,parentId:2,code:`review`,name:`Design review`},{nodeId:5,parentId:2,code:`release`,name:`Release checklist`},{nodeId:6,parentId:3,code:`content`,name:`Content drafts`}],ze=[{title:`app`,key:`dir-app`,children:[{title:`pages`,key:`dir-pages`,children:[{title:`Tree.tsx`,key:`file-tree-page`},{title:`Transfer.tsx`,key:`file-transfer-page`}]},{title:`site`,key:`dir-site`,children:[{title:`SidebarPlaygroundDesign.tsx`,key:`file-sidebar`}]}]},{title:`packages`,key:`dir-packages`,children:[{title:`runtime`,key:`dir-runtime`},{title:`rue-design`,key:`dir-rue-design`}]},{title:`README.md`,key:`file-readme`}],Be=[{title:`alpha.ts`,key:`range-alpha`},{title:`beta.ts`,key:`range-beta`},{title:`gamma.ts`,key:`range-gamma`},{title:`delta.ts`,key:`range-delta`},{title:`epsilon.ts`,key:`range-epsilon`}],Ve=[{title:`src`,key:`drag-src`,kind:`folder`,children:[{title:`components`,key:`drag-components`,kind:`folder`,children:[{title:`Tree.tsx`,key:`drag-tree-file`,kind:`file`},{title:`Transfer.tsx`,key:`drag-transfer-file`,kind:`file`}]},{title:`main.ts`,key:`drag-main-file`,kind:`file`}]},{title:`docs`,key:`drag-docs`,kind:`folder`,children:[{title:`routing.md`,key:`drag-routing-file`,kind:`file`},{title:`installation.md`,key:`drag-install-file`,kind:`file`}]},{title:`package.json`,key:`drag-package-file`,kind:`file`}],He=Array.from({length:120},(e,t)=>({title:`Page ${String(t+1).padStart(3,`0`)}`,key:`virtual-${t}`})),Ue=Array.from({length:64},(e,t)=>({title:`Workspace ${String(t+1).padStart(2,`0`)}`,key:`async-virtual-root-${t}`,isLeaf:!1})),J=`import { ref } from '@rue-js/rue'
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
</div>`,et=[{prop:`treeData`,description:`树数据源，支持嵌套 children 和字段映射。`,type:`TreeDataNode[]`,defaultValue:`[]`},{prop:`selectedKeys / defaultSelectedKeys`,description:`受控与非受控的当前选中项，multiple 打开后允许多选。`,type:`TreeKey[]`,defaultValue:`[]`},{prop:`checkedKeys / defaultCheckedKeys`,description:`勾选模式下的选中集合，strict 模式会回传 checked / halfChecked 结构。`,type:`TreeKey[] | { checked: TreeKey[]; halfChecked: TreeKey[] }`,defaultValue:`[]`},{prop:`expandedKeys / defaultExpandedKeys / defaultExpandAll`,description:`控制展开态，适合目录树、权限树和异步加载场景。`,type:`TreeKey[] / boolean`,defaultValue:`[] / false`},{prop:`checkable / checkStrictly`,description:`切换勾选与父子联动模式；strict 会关闭级联。`,type:`boolean`,defaultValue:`false`},{prop:`treeDataSimpleMode / fieldNames`,description:`直接接入 id / pId 扁平数据，同时可映射 title、key、children 字段。`,type:`boolean | TreeSimpleModeConfig / TreeFieldNames`,defaultValue:`- / -`},{prop:`allowSearch / searchValue / filterTreeNode`,description:`提供内置搜索输入和过滤逻辑，命中后会保持祖先链路。`,type:`boolean / string / boolean | ((inputValue, node) => boolean)`,defaultValue:`false / - / true`},{prop:`loadData`,description:`展开未加载分支时触发异步加载，适合远端目录与超大树。`,type:`(node: TreeNode) => Promise<any> | void`,defaultValue:`-`},{prop:`rangeSelect / Tree.DirectoryTree / expandAction / toggleSelect`,description:`Tree 多选和目录树都支持 shift 区间选择；目录树额外提供展开动作和 ctrl/meta 追加选择开关。`,type:`false | "append" | "replace" / DirectoryTreeProps / false | "click" | "doubleClick" / boolean`,defaultValue:`"append" / blockNode=true / showIcon=true / "click" / true`},{prop:`draggable / allowDrop / onDrop`,description:`开启拖拽排序并控制是否允许落点；allowDrop 和 onDrop 都会拿到 dropToGap，UI 会同步显示插前、插后或放入占位态。`,type:`TreeDraggable / (info) => boolean / (info) => void`,defaultValue:`false / - / -`},{prop:`height / itemHeight / virtual`,description:`为长列表开启虚拟滚动；height 定义视口高度，itemHeight 用于估算渲染窗口，也能和 loadData 组合接超长懒加载树。`,type:`number / number / boolean`,defaultValue:`- / 自动按尺寸估算 / true`},{prop:`showLine / showIcon / blockNode`,description:`控制树线、节点图标和整行可点的布局表现。`,type:`boolean`,defaultValue:`false`},{prop:`titleRender / switcherIcon / icon`,description:`按节点态自定义标题、展开图标和节点图标。`,type:`render function | any`,defaultValue:`-`}],tt=e=>Array.isArray(e)?e:e.checked,nt=(e,t)=>Array.isArray(e)?t?.halfCheckedKeys??[]:e.halfChecked,rt=e=>`${typeof e}:${String(e)}`,Y=e=>e.map(e=>({...e,children:Array.isArray(e.children)?Y(e.children):e.children})),it=(e,t)=>{let n=rt(t);for(let r=0;r<e.length;r+=1){let i=e[r];if(rt(i.key)===n){let[t]=e.splice(r,1);return t??null}if(Array.isArray(i.children)){let e=it(i.children,t);if(e)return e}}return null},at=(e,t,n,r)=>{let i=rt(n);for(let a=0;a<e.length;a+=1){let o=e[a];if(rt(o.key)===i){if(r===0){let e=Array.isArray(o.children)?[...o.children]:[];e.push(t),o.children=e}else e.splice(r<0?a:a+1,0,t);return!0}if(Array.isArray(o.children)&&at(o.children,t,n,r))return!0}return!1},ot=(e,t)=>{let n=Y(e),r=it(n,t.dragNode.key);return r&&(at(n,r,t.node.key,t.dropPosition)||n.push(r)),n},st=(e,t,n)=>{let r=rt(t);for(let i=0;i<e.length;i+=1){let a=e[i];if(rt(a.key)===r){let t=n(a);if(t===a)return e;let r=e.slice();return r[i]=t,r}if(Array.isArray(a.children)&&a.children.length){let r=st(a.children,t,n);if(r===a.children)continue;let o=e.slice();return o[i]={...a,children:r},o}}return e},ct=e=>e.reduce((e,t)=>!Array.isArray(t.children)||!t.children.length?e:e+1+ct(t.children),0),lt=e=>{let{isOpen:t,isFolder:n,toggle:r,addChild:i,changeType:a}=D(`useSetup:0:0`,()=>b(()=>{let t=D(`computed:1:0`,()=>E(()=>!!e.model.open)),n=D(`computed:1:1`,()=>E(()=>!!e.model.children&&e.model.children.length>0)),r=n=>{n?.stopPropagation(),e.model.open=!t.get()},i=t=>{t?.stopPropagation(),e.model.children||(e.model.children=[]),e.model.children.push({id:`${e.model.id}-new-${e.model.children.length}`,name:`new stuff`}),e.model.open=!0};return{isOpen:t,isFolder:n,toggle:r,addChild:i,changeType:t=>{t?.stopPropagation(),n.get()||(e.model.children=[],i(),e.model.open=!0)}}}));return g(c=>{let l=S(`li`,c);x(l,`list-none`);let d=S(`button`,l);o(l,d),m(d,`type`,`button`),s(()=>{x(d,`flex items-center gap-2 rounded-xl px-3 py-2 text-left text-sm transition `+(n.get()?`font-semibold text-base-content`:`text-base-content/80 hover:bg-base-200/70`))}),u(d,`click`,e=>r(e)),u(d,`dblclick`,e=>a(e));let _=S(`span`,d);o(d,_),x(_,`inline-flex size-5 items-center justify-center rounded-md bg-base-200/80 text-[11px] text-base-content/55`);let b=f(_);o(_,b),s(()=>{p(b,n.get()?t.get()?`−`:`+`:`•`)});let E=S(`span`,d);o(d,E);let D=T(`rue:slot:anchor`);o(E,D),s(()=>{let t=e.model.name;w(()=>y(t,E,D))});let k=T(`rue:slot:anchor`);return o(l,k),s(()=>{let r=n.get()&&t.get()?g(()=>{let t=v(),n=S(`ul`,t);o(t,n),x(n,`mt-1 grid gap-1 pl-5`);let r=T(`rue:list:start`),a=T(`rue:list:end`);o(n,r),o(n,a);let c=new Map;s(()=>{c=O({items:e.model.children||[],getKey:(e,t)=>e.id,elements:c,parent:n,before:a,start:r,renderItem:(e,t,n,r,i)=>{ee(C(lt,{key:e.id,model:e}),t,n,r)}})});let l=S(`li`,n);o(n,l),x(l,`list-none`);let d=S(`button`,l);return o(l,d),m(d,`type`,`button`),x(d,`btn btn-ghost btn-xs rounded-full text-emerald-600`),u(d,`click`,e=>i(e)),o(d,h(`+ add child`)),t}):``;w(()=>y(r,l,k))}),l})},ut=()=>{let{basicSelectedKeys:e,directorySelectedKeys:t,directoryExpandAction:n,directoryToggleSelect:r,directoryRangeSelect:i,directoryRangeAppendSelectedKeys:c,directoryRangeReplaceSelectedKeys:u,directoryRangeTreeVersion:d,checkableSelectedKeys:f,checkedKeys:p,halfCheckedKeys:m,disabledCheckedKeys:_,simpleSelectedKeys:ee,asyncSelectedKeys:O,asyncExpandedKeys:te,dragTreeData:ne,dragSummary:re,virtualSelectedKeys:N,asyncVirtualTreeData:P,asyncVirtualExpandedKeys:F,asyncVirtualSelectedKeys:ie,asyncVirtualLoadedBranchCount:I,asyncTreeData:ae,legacyTree:oe,tabs:L,loadAsyncTree:se,loadAsyncVirtualTree:R,resetDirectoryRangeDemo:ce}=D(`useSetup:0:0:dup1`,()=>b(()=>{let e=D(`ref:1:2`,()=>l([`docs-api`])),t=D(`ref:1:3`,()=>l([`dir-app`])),n=D(`ref:1:4`,()=>l(`click`)),r=D(`ref:1:5`,()=>l(!0)),i=D(`computed:1:6`,()=>E(()=>r.value?`append`:!1)),o=D(`ref:1:7`,()=>l([])),s=D(`ref:1:8`,()=>l([])),c=D(`ref:1:9`,()=>l(0)),u=D(`ref:1:10`,()=>l([`release-control`])),d=D(`ref:1:11`,()=>l([`site-home`])),f=D(`ref:1:12`,()=>l([`release-control`,`release-site`])),p=D(`ref:1:13`,()=>l([`editable-assets`])),m=D(`ref:1:14`,()=>l([`workflow`])),h=D(`ref:1:15`,()=>l([])),g=D(`ref:1:16`,()=>l([])),_=D(`ref:1:17`,()=>l(Y(Ve))),v=D(`ref:1:18`,()=>l(`folder 支持放入；file 只允许插前和插后，悬停时会显示明确占位态。`)),y=D(`ref:1:19`,()=>l([`virtual-3`])),b=D(`ref:1:20`,()=>l(Y(Ue))),x=D(`ref:1:21`,()=>l([])),S=D(`ref:1:22`,()=>l([])),ee=D(`computed:1:23`,()=>E(()=>ct(b.value))),C=D(`ref:1:24`,()=>l([{title:`发布总线`,key:`release-bus`,isLeaf:!1}]));return{basicSelectedKeys:e,directorySelectedKeys:t,directoryExpandAction:n,directoryToggleSelect:r,directoryRangeSelect:i,directoryRangeAppendSelectedKeys:o,directoryRangeReplaceSelectedKeys:s,directoryRangeTreeVersion:c,checkableSelectedKeys:u,checkedKeys:d,halfCheckedKeys:f,disabledCheckedKeys:p,simpleSelectedKeys:m,asyncSelectedKeys:h,asyncExpandedKeys:g,dragTreeData:_,dragSummary:v,virtualSelectedKeys:y,asyncVirtualTreeData:b,asyncVirtualExpandedKeys:x,asyncVirtualSelectedKeys:S,asyncVirtualLoadedBranchCount:ee,asyncTreeData:C,legacyTree:D(`reactive:1:25`,()=>a({id:`root`,name:`My Tree`,open:!0,children:[{id:`hello`,name:`hello`},{id:`world`,name:`world`},{id:`branch`,name:`child folder`,open:!0,children:[{id:`branch-1`,name:`design review`},{id:`branch-2`,name:`release note`}]}]})),tabs:{basic:D(`ref:1:26`,()=>l(`preview`)),directory:D(`ref:1:27`,()=>l(`preview`)),directoryRange:D(`ref:1:28`,()=>l(`preview`)),checkable:D(`ref:1:29`,()=>l(`preview`)),checkableDisabled:D(`ref:1:30`,()=>l(`preview`)),simple:D(`ref:1:31`,()=>l(`preview`)),async:D(`ref:1:32`,()=>l(`preview`)),drag:D(`ref:1:33`,()=>l(`preview`)),virtual:D(`ref:1:34`,()=>l(`preview`)),virtualAsync:D(`ref:1:35`,()=>l(`preview`)),legacy:D(`ref:1:36`,()=>l(`preview`))},loadAsyncTree:async e=>{e.key===`release-bus`&&(C.value=[{title:`发布总线`,key:`release-bus`,isLeaf:!1,children:[{title:`桌面端`,key:`desktop`,children:[{title:`Windows`,key:`desktop-win`},{title:`macOS`,key:`desktop-mac`}]},{title:`移动端`,key:`mobile`,children:[{title:`iOS`,key:`mobile-ios`},{title:`Android`,key:`mobile-android`}]}]}])},loadAsyncVirtualTree:async e=>{e.children.length||(b.value=st(b.value,e.key,e=>({...e,children:Array.from({length:8},(t,n)=>({title:`${String(e.title)} / Module ${n+1}`,key:`${String(e.key)}-child-${n}`,isLeaf:n%3!=0}))})))},resetDirectoryRangeDemo:()=>{o.value=[],s.value=[],c.value+=1}}}));return g(a=>{let l=v(),b=T(`rue:component:anchor`);return o(l,b),y(C(j,{children:g(()=>{let a=v(),l=S(`div`,a);o(a,l),x(l,`max-w-none prose prose-sm md:prose-base`);let g=S(`h1`,l);o(l,g),o(g,h(`Tree 树控件`));let b=S(`p`,l);o(l,b),o(b,h(`Rue 的 Tree 补上了独立树组件这块空白：保持 TreeView 示例里递归数据直改的灵活性，同时把 树控件常用的展开、选中、勾选、简单模式、异步加载和自定义标题一次覆盖。 视觉上使用 Rue 当前的卡片、badge 和 base 色阶体系，不照搬其他组件库的外观。`));let E=S(`div`,l);o(l,E),x(E,`not-prose mt-6 grid gap-3 md:grid-cols-3`);let D=S(`div`,E);o(E,D),x(D,`rounded-[1.4rem] border border-base-300 bg-gradient-to-br from-base-100 to-base-200/40 p-4 shadow-sm`);let j=S(`div`,D);o(D,j),x(j,`text-xs uppercase tracking-[0.2em] text-base-content/45`),o(j,h(`Node Model`));let z=S(`div`,D);o(D,z),x(z,`mt-2 text-base font-semibold`),o(z,h(`选择、勾选、展开三条状态线`));let B=S(`p`,D);o(D,B),x(B,`mt-2 mb-0 text-sm text-base-content/68`),o(B,h(`目录树、权限树、发布树都能直接套进来。`));let V=S(`div`,E);o(E,V),x(V,`rounded-[1.4rem] border border-base-300 bg-gradient-to-br from-base-100 to-base-200/40 p-4 shadow-sm`);let H=S(`div`,V);o(V,H),x(H,`text-xs uppercase tracking-[0.2em] text-base-content/45`),o(H,h(`DirectoryTree`));let le=S(`div`,V);o(V,le),x(le,`mt-2 text-base font-semibold`),o(le,h(`目录树快捷 API`));let ue=S(`p`,V);o(V,ue),x(ue,`mt-2 mb-0 text-sm text-base-content/68`),o(ue,h(`支持 click / doubleClick 展开，以及更接近文件浏览器的多选交互。`));let U=S(`div`,E);o(E,U),x(U,`rounded-[1.4rem] border border-base-300 bg-gradient-to-br from-base-100 to-base-200/40 p-4 shadow-sm`);let de=S(`div`,U);o(U,de),x(de,`text-xs uppercase tracking-[0.2em] text-base-content/45`),o(de,h(`Heavy Interaction`));let fe=S(`div`,U);o(U,fe),x(fe,`mt-2 text-base font-semibold`),o(fe,h(`拖拽排序与虚拟滚动`));let W=S(`p`,U);o(U,W),x(W,`mt-2 mb-0 text-sm text-base-content/68`),o(W,h(`长列表和拖拽改序终于能落在同一个 Tree 上了。`));let pe=T(`rue:component:anchor`);o(l,pe),s(()=>{let t=C(M,{title:`基础选中与整行交互`,summary:`默认 Tree 就是一个纯浏览 + 选中容器；blockNode 和 showIcon 让它更像配置面板里的主导航。`,tab:L.basic,code:J,preview:A(`div`,{className:`space-y-4 not-prose`,children:[k(q,{treeData:Fe,selectedKeys:e.value,defaultExpandAll:!0,showIcon:!0,blockNode:!0,onSelect:t=>{e.value=t}}),A(`div`,{className:`grid gap-3 md:grid-cols-3`,children:[A(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[k(`div`,{className:`text-xs text-base-content/45`,children:`当前选中`}),k(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:e.value.length?e.value.map(e=>k(`span`,{className:`badge badge-outline badge-sm`,children:String(e)},String(e))):k(`span`,{className:`text-sm text-base-content/55`,children:`未选择`})})]}),A(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[k(`div`,{className:`text-xs text-base-content/45`,children:`推荐场景`}),k(`div`,{className:`mt-2 text-sm text-base-content/75`,children:`组件目录、文档导航、资源分类`})]}),A(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[k(`div`,{className:`text-xs text-base-content/45`,children:`状态模型`}),k(`div`,{className:`mt-2 text-sm text-base-content/75`,children:`selectedKeys / expandedKeys 分离，便于受控更新。`})]})]})]})});w(()=>y(t,l,pe))});let G=T(`rue:component:anchor`);o(l,G),s(()=>{let e=C(M,{title:`DirectoryTree 目录树快捷 API`,summary:`Tree.DirectoryTree 默认补上目录图标、整行可点和 click 展开；这里先只看 expandAction 和 toggleSelect 这两个基础交互开关。`,tab:L.directory,code:Je,preview:A(`div`,{className:`grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`,children:[k(q.DirectoryTree,{treeData:ze,selectedKeys:t.value,multiple:!0,expandAction:n.value,toggleSelect:r.value,rangeSelect:i.get(),onSelect:e=>{t.value=e}}),A(`div`,{className:`space-y-3`,children:[A(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[k(`div`,{className:`text-xs text-base-content/45`,children:`快捷属性`}),A(`div`,{className:`mt-3 flex flex-wrap gap-2`,children:[k(`button`,{type:`button`,className:n.value===`click`?`btn btn-primary btn-xs`:`btn btn-ghost btn-xs`,onClick:()=>{n.value=`click`},children:`click 展开`}),k(`button`,{type:`button`,className:n.value===`doubleClick`?`btn btn-primary btn-xs`:`btn btn-ghost btn-xs`,onClick:()=>{n.value=`doubleClick`},children:`doubleClick 展开`}),k(`button`,{type:`button`,className:n.value===!1?`btn btn-primary btn-xs`:`btn btn-ghost btn-xs`,onClick:()=>{n.value=!1},children:`只选中不展开`})]}),A(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:[k(`button`,{type:`button`,className:r.value?`btn btn-primary btn-xs`:`btn btn-ghost btn-xs`,onClick:()=>{r.value=!0},children:`ctrl/meta 追加`}),k(`button`,{type:`button`,className:r.value?`btn btn-ghost btn-xs`:`btn btn-primary btn-xs`,onClick:()=>{r.value=!1},children:`关闭追加选择`})]})]}),A(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[k(`div`,{className:`text-xs text-base-content/45`,children:`当前选择`}),k(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:t.value.map(e=>k(`span`,{className:`badge badge-outline badge-sm`,children:String(e)},String(e)))})]}),A(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`,children:[`当前组合是 expandAction=`,k(`strong`,{children:String(n.value)}),`、toggleSelect=`,k(`strong`,{children:String(r.value)}),`、rangeSelect=`,k(`strong`,{children:String(i.get())}),`。`,k(`div`,{className:`mt-3`,children:`普通点击会落成单选；打开追加后，meta / ctrl 会追加或移除选中，shift 也会启用区间选择。关闭追加时，这两类补充选择都会停用；append / replace 的差异放到下面的对照示例里单独演示。`})]})]})]})});w(()=>y(e,l,G))});let me=T(`rue:component:anchor`);o(l,me),s(()=>{let e=C(M,{title:`shift append vs shift replace`,summary:`Shift 的基础语义是先选一个节点，再 Shift 选另一个节点，中间连续区间都会选中；append / replace 只决定当前额外选择是否保持。`,tab:L.directoryRange,code:Ye,preview:A(`div`,{className:`space-y-4 not-prose`,children:[A(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`,children:[k(`div`,{children:`基础行为：先单击 alpha.ts，再按住 Shift 单击 epsilon.ts，alpha.ts 到 epsilon.ts 都会选中。`}),k(`div`,{className:`mt-2`,children:`append / replace 只影响当前额外非连续选择是否保持：重置后先单击 beta.ts，再按住 Cmd / Ctrl 单击 epsilon.ts，最后按住 Shift 单击 delta.ts。`}),k(`div`,{className:`mt-2`,children:`append 会保持 beta.ts；replace 只保持 delta.ts 到 epsilon.ts 这一段。`}),k(`button`,{type:`button`,className:`btn btn-ghost btn-xs mt-3`,onClick:ce,children:`重置两边示例`})]}),A(`div`,{className:`grid gap-4 xl:grid-cols-2`,children:[A(`div`,{className:`space-y-3 rounded-[1.4rem] border border-base-300 bg-base-100 p-4 shadow-sm`,children:[A(`div`,{className:`flex items-center justify-between gap-3`,children:[A(`div`,{children:[k(`div`,{className:`text-sm font-semibold`,children:`rangeSelect="append"`}),k(`div`,{className:`text-xs text-base-content/55`,children:`保持原先的非连续选择，再并入新的 shift 区间。`})]}),k(`span`,{className:`badge badge-outline badge-sm`,children:`append`})]}),k(q.DirectoryTree,{treeData:Be,selectedKeys:c.value,multiple:!0,toggleSelect:!0,rangeSelect:`append`,onSelect:e=>{c.value=e}},`append-${d.value}`),A(`div`,{className:`rounded-box border border-base-300 bg-base-100 px-4 py-3 text-sm text-base-content/70`,children:[k(`div`,{className:`text-xs text-base-content/45`,children:`当前选择`}),k(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:c.value.length?c.value.map(e=>k(`span`,{className:`badge badge-outline badge-sm`,children:String(e)},String(e))):k(`span`,{className:`text-sm text-base-content/55`,children:`还没有选择`})})]})]}),A(`div`,{className:`space-y-3 rounded-[1.4rem] border border-base-300 bg-base-100 p-4 shadow-sm`,children:[A(`div`,{className:`flex items-center justify-between gap-3`,children:[A(`div`,{children:[k(`div`,{className:`text-sm font-semibold`,children:`rangeSelect="replace"`}),k(`div`,{className:`text-xs text-base-content/55`,children:`只保持新的 shift 区间，基础的非连续选择会被替换掉。`})]}),k(`span`,{className:`badge badge-primary badge-outline badge-sm`,children:`replace`})]}),k(q.DirectoryTree,{treeData:Be,selectedKeys:u.value,multiple:!0,toggleSelect:!0,rangeSelect:`replace`,onSelect:e=>{u.value=e}},`replace-${d.value}`),A(`div`,{className:`rounded-box border border-base-300 bg-base-100 px-4 py-3 text-sm text-base-content/70`,children:[k(`div`,{className:`text-xs text-base-content/45`,children:`当前选择`}),k(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:u.value.length?u.value.map(e=>k(`span`,{className:`badge badge-outline badge-sm`,children:String(e)},String(e))):k(`span`,{className:`text-sm text-base-content/55`,children:`还没有选择`})})]})]})]})]})});w(()=>y(e,l,me))});let he=T(`rue:component:anchor`);o(l,he),s(()=>{let e=C(M,{title:`父子联动与半选态`,summary:`这一块只看级联勾选和 halfChecked，不再混入 disabled / disableCheckbox，点击父节点时能直接看到整棵子树联动。`,tab:L.checkable,code:We,preview:A(`div`,{className:`space-y-4 not-prose`,children:[k(q,{treeData:Ie,selectedKeys:f.value,checkedKeys:p.value,checkable:!0,defaultExpandAll:!0,showLine:!0,blockNode:!0,onSelect:e=>{f.value=e},onCheck:(e,t)=>{p.value=tt(e),m.value=nt(e,t)}}),A(`div`,{className:`grid gap-3 md:grid-cols-3`,children:[A(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[k(`div`,{className:`text-xs text-base-content/45`,children:`selectedKeys`}),k(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:f.value.length?f.value.map(e=>k(`span`,{className:`badge badge-outline badge-sm`,children:String(e)},String(e))):k(`span`,{className:`text-sm text-base-content/55`,children:`当前没有选中节点`})})]}),A(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[k(`div`,{className:`text-xs text-base-content/45`,children:`checkedKeys`}),k(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:p.value.map(e=>k(`span`,{className:`badge badge-primary badge-outline badge-sm`,children:String(e)},String(e)))})]}),A(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[k(`div`,{className:`text-xs text-base-content/45`,children:`halfCheckedKeys`}),k(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:m.value.length?m.value.map(e=>k(`span`,{className:`badge badge-ghost badge-sm`,children:String(e)},String(e))):k(`span`,{className:`text-sm text-base-content/55`,children:`当前没有半选`})})]})]})]})});w(()=>y(e,l,he))});let ge=T(`rue:component:anchor`);o(l,ge),s(()=>{let e=C(M,{title:`禁用节点与禁用复选框`,summary:`把 disabled 和 disableCheckbox 单独拆出来看：前者整节点只读，后者只禁用勾选框，不再干扰联动示例。`,tab:L.checkableDisabled,code:Ge,preview:A(`div`,{className:`grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`,children:[k(q,{treeData:Le,checkedKeys:_.value,checkable:!0,defaultExpandAll:!0,showLine:!0,blockNode:!0,onCheck:e=>{_.value=tt(e)}}),A(`div`,{className:`space-y-3`,children:[A(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[k(`div`,{className:`text-xs text-base-content/45`,children:`当前勾选`}),k(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:_.value.length?_.value.map(e=>k(`span`,{className:`badge badge-outline badge-sm`,children:String(e)},String(e))):k(`span`,{className:`text-sm text-base-content/55`,children:`当前没有勾选`})})]}),A(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm text-sm text-base-content/75`,children:[k(`div`,{className:`font-medium text-base-content`,children:`disabled`}),k(`div`,{className:`mt-2`,children:`整节点不可展开、不可选中、不可勾选，适合只读目录或冻结配置。`})]}),A(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm text-sm text-base-content/75`,children:[k(`div`,{className:`font-medium text-base-content`,children:`disableCheckbox`}),k(`div`,{className:`mt-2`,children:`节点仍能展示和展开，但复选框不会参与交互，适合“只可浏览不可授权”的条目。`})]})]})]})});w(()=>y(e,l,ge))});let _e=T(`rue:component:anchor`);o(l,_e),s(()=>{let e=C(M,{title:`Simple Mode + Search`,summary:`扁平数据直入后，内置搜索会保持命中节点的祖先链，不会把层级上下文切断。`,tab:L.simple,code:Ke,preview:A(`div`,{className:`grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`,children:[k(q,{treeData:Re,treeDataSimpleMode:{id:`nodeId`,pId:`parentId`,rootPId:0},fieldNames:{title:`name`,key:`code`},selectedKeys:ee.value,allowSearch:!0,defaultExpandAll:!0,onSelect:e=>{ee.value=e}}),A(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`,children:[`当前选中：`,k(`code`,{children:JSON.stringify(ee.value)}),k(`div`,{className:`mt-3`,children:`这类 simple mode 很适合后端直接给 id / pId 的菜单、流程节点和权限项，不需要再先做一遍树转换。`})]})]})});w(()=>y(e,l,_e))});let ve=T(`rue:component:anchor`);o(l,ve),s(()=>{let e=C(M,{title:`Async Load 与自定义标题`,summary:`第一次展开时再拉子节点，同时用 titleRender 和 icon 把状态信息塞回每一行。`,tab:L.async,code:qe,preview:A(`div`,{className:`grid gap-4 not-prose lg:grid-cols-[minmax(0,26rem),1fr] lg:items-start`,children:[k(q,{treeData:ae.value,selectedKeys:O.value,expandedKeys:te.value,loadData:se,showLine:!0,showIcon:!0,blockNode:!0,titleRender:({node:e,loading:t})=>A(`div`,{className:`flex min-w-0 items-center justify-between gap-3`,children:[k(`span`,{className:`truncate`,children:e.title}),k(`span`,{className:`badge badge-ghost badge-xs`,children:t?`loading`:e.children.length?`branch`:`leaf`})]}),onSelect:e=>{O.value=e},onExpand:e=>{te.value=e}}),A(`div`,{className:`space-y-3`,children:[A(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[k(`div`,{className:`text-xs text-base-content/45`,children:`expandedKeys`}),k(`div`,{className:`mt-2 text-sm text-base-content/75`,children:JSON.stringify(te.value)})]}),A(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[k(`div`,{className:`text-xs text-base-content/45`,children:`selectedKeys`}),k(`div`,{className:`mt-2 text-sm text-base-content/75`,children:JSON.stringify(O.value)})]}),k(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`,children:`展开 release-bus 后才会注入桌面端和移动端节点，适合远端目录、超大权限树和发布范围配置。`})]})]})});w(()=>y(e,l,ve))});let K=S(`div`,l);o(l,K),x(K,`not-prose mt-10 space-y-2`);let ye=S(`h2`,K);o(K,ye),x(ye,`text-2xl font-semibold`),o(ye,h(`更重交互`));let be=S(`p`,K);o(K,be),x(be,`text-sm text-base-content/70`),o(be,h(`当 Tree 既要承载拖拽整理，又要承载超长数据时，draggable 和 virtual 就是两个最关键的控制面。`));let xe=T(`rue:component:anchor`);o(l,xe),s(()=>{let e=C(M,{title:`allowDrop 策略与拖拽占位`,summary:`allowDrop 可以把 folder / file 的落点规则写清楚；hover 时 Tree 会直接给出插前、插后或放入占位提示。`,tab:L.drag,code:Xe,preview:A(`div`,{className:`grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`,children:[k(q,{treeData:ne.value,draggable:!0,blockNode:!0,defaultExpandAll:!0,allowDrop:({dropNode:e,dropToGap:t})=>t||e.raw.kind!==`file`,titleRender:({node:e})=>A(`div`,{className:`flex min-w-0 items-center justify-between gap-3`,children:[k(`span`,{className:`truncate`,children:e.title}),k(`span`,{className:e.raw.kind===`folder`?`badge badge-ghost badge-xs`:`badge badge-outline badge-xs`,children:e.raw.kind})]}),onDrop:e=>{ne.value=ot(ne.value,e),re.value=`${String(e.dragNode.key)} -> ${String(e.node.key)} (${e.dropToGap?e.dropPosition<0?`before`:`after`:`inside`})`}}),A(`div`,{className:`space-y-3`,children:[A(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[k(`div`,{className:`text-xs text-base-content/45`,children:`最近一次拖拽`}),k(`div`,{className:`mt-2 text-sm text-base-content/75`,children:re.value})]}),A(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[k(`div`,{className:`text-xs text-base-content/45`,children:`allowDrop 规则`}),A(`div`,{className:`mt-2 grid gap-2 text-sm text-base-content/75`,children:[k(`div`,{children:`folder：允许放入，也允许插前 / 插后。`}),k(`div`,{children:`file：只允许插前 / 插后，不允许作为 inside 目标。`})]})]}),k(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`,children:`拖到 folder 正中央会看到“放入”，拖到行的上沿或下沿则会出现“插前 / 插后”；如果目标是 file，inside 落点会被 allowDrop 直接拦掉。`})]})]})});w(()=>y(e,l,xe))});let Se=T(`rue:component:anchor`);o(l,Se),s(()=>{let e=C(M,{title:`Virtual Scroll`,summary:`长列表下只渲染可见窗口，height 和 itemHeight 负责限定视口和估算切片范围。`,tab:L.virtual,code:Ze,preview:A(`div`,{className:`grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`,children:[k(q,{treeData:He,selectedKeys:N.value,height:320,itemHeight:42,virtual:!0,blockNode:!0,onSelect:e=>{N.value=e}}),A(`div`,{className:`space-y-3`,children:[A(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[k(`div`,{className:`text-xs text-base-content/45`,children:`数据量`}),k(`div`,{className:`mt-2 text-2xl font-semibold`,children:He.length})]}),A(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[k(`div`,{className:`text-xs text-base-content/45`,children:`当前选中`}),k(`div`,{className:`mt-2 text-sm text-base-content/75`,children:JSON.stringify(N.value)})]}),k(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`,children:`对文档页目录、埋点树、批量资源目录这种长列表场景，虚拟滚动能显著降低初始渲染压力。`})]})]})});w(()=>y(e,l,Se))});let Ce=T(`rue:component:anchor`);o(l,Ce),s(()=>{let e=C(M,{title:`Virtual + Async Load 场景页`,summary:`把 virtual、height、itemHeight 和 loadData 合在一起，就能接超长目录或资源树，只在展开分支时再注入子节点。`,tab:L.virtualAsync,code:Qe,preview:A(`div`,{className:`grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`,children:[k(q,{treeData:P.value,selectedKeys:ie.value,expandedKeys:F.value,height:340,itemHeight:40,virtual:!0,showIcon:!0,blockNode:!0,loadData:R,titleRender:({node:e,loading:t})=>A(`div`,{className:`flex min-w-0 items-center justify-between gap-3`,children:[k(`span`,{className:`truncate`,children:e.title}),k(`span`,{className:`badge badge-ghost badge-xs`,children:t?`loading`:e.children.length?`loaded`:e.isLeaf?`leaf`:`lazy`})]}),onSelect:e=>{ie.value=e},onExpand:e=>{F.value=e}}),A(`div`,{className:`space-y-3`,children:[A(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[k(`div`,{className:`text-xs text-base-content/45`,children:`根节点数量`}),k(`div`,{className:`mt-2 text-2xl font-semibold`,children:P.value.length})]}),A(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[k(`div`,{className:`text-xs text-base-content/45`,children:`已加载分支`}),k(`div`,{className:`mt-2 text-2xl font-semibold`,children:I.get()})]}),A(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[k(`div`,{className:`text-xs text-base-content/45`,children:`当前展开`}),k(`div`,{className:`mt-2 text-sm text-base-content/75`,children:JSON.stringify(F.value)})]}),k(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`,children:`先滚动到较深位置再展开节点也没问题：视口外的行不会真正渲染，只有命中的 branch 才会触发 loadData 注入子节点。`})]})]})});w(()=>y(e,l,Ce))});let we=T(`rue:component:anchor`);o(l,we),s(()=>{let e=C(M,{title:`展示基础递归 示例`,summary:`基础的 TreeView 行为没有删掉，只是并进 design 页面里，方便对比“直接改数据”这类递归写法。`,tab:L.legacy,code:$e,preview:k(`div`,{className:`card border border-base-200/80 bg-base-100 shadow-sm not-prose`,children:A(`div`,{className:`card-body grid gap-4 lg:grid-cols-[minmax(0,1fr),18rem] lg:items-start`,children:[k(`ul`,{className:`m-0 grid gap-1 p-0`,children:k(lt,{model:oe})}),k(`div`,{className:`rounded-box border border-base-300 bg-base-200/40 p-4 text-sm text-base-content/70`,children:`单击切换展开，双击叶子节点会把它转换成 folder，并在当前层直接追加一个新子节点。`})]})})});w(()=>y(e,l,we))});let Te=S(`div`,l);o(l,Te),x(Te,`not-prose mt-10 space-y-4`);let Ee=S(`h2`,Te);o(Te,Ee),x(Ee,`text-2xl font-semibold`),o(Ee,h(`API`));let De=T(`rue:component:anchor`);return o(Te,De),s(()=>{let e=C(Pe,{rows:et});w(()=>y(e,Te,De))}),a})}),l,b),l})};export{ut as default};