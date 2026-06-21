import{$t as e,A as t,D as n,Ht as r,Jt as i,M as a,Q as o,Rt as s,St as c,Z as l,Zt as u,dt as d,et as f,in as p,it as m,jt as h,l as g,lt as _,m as v,nt as y,o as b,rn as x,rt as S,s as C,t as w,tt as T,vt as ee,zt as E}from"./vapor-runtime-DsQWl-IB.js";import{a as D,n as O}from"./vapor-helpers-vapor-Dg64FcpK.js";import{a as k,i as A}from"./persistentSidebarPlayground-6jqnvaEa.js";import{r as j}from"./SidebarPlaygroundDesign-EU389JDE.js";import{t as M}from"./PreviewBlock-wHSyDiek.js";var te=new Map,ne=new WeakMap,re=new WeakMap,N=8,P=e=>typeof e==`object`&&!!e||typeof e==`function`,F=(e,t)=>e.length===t.length&&e.every((e,n)=>e===t[n]),ie=(e,t,n)=>e.treeDataSimpleMode===t&&e.fieldNames===n,I=(e,t,n,r,i)=>(e.treeData===t||F(e.treeDataRoots,n))&&ie(e,r,i),ae=(e,t,n,r)=>{let i=[P(e)?ne.get(e):void 0],a=t[0];P(a)&&a!==e&&i.push(re.get(a));for(let a of i){let i=a?.find(i=>I(i,e,t,n,r));if(i)return i}},oe=(e,t,n)=>{if(!P(t))return;let r=e.get(t);if(!r){e.set(t,[n]);return}let i=r.findIndex(e=>I(e,n.treeData,n.treeDataRoots,n.treeDataSimpleMode,n.fieldNames));i>=0?r[i]=n:(r.push(n),r.length>N&&r.shift())},L=e=>{oe(ne,e.treeData,e),oe(re,e.treeDataRoots[0],e)},se={title:`title`,key:`key`,children:`children`,disabled:`disabled`,selectable:`selectable`,checkable:`checkable`,disableCheckbox:`disableCheckbox`,isLeaf:`isLeaf`,icon:`icon`,className:`className`,id:`id`,pId:`pId`},R=(...e)=>e.filter(Boolean).join(` `),ce=e=>typeof e==`object`&&!!e&&!Array.isArray(e),z=e=>typeof e==`string`||typeof e==`number`,B=e=>`${typeof e}:${String(e)}`,V=e=>{let t=[],n=new Set;return(e??[]).forEach(e=>{let r=B(e);n.has(r)||(n.add(r),t.push(e))}),t},H=(e,t)=>e?t?`${e} ${t}`:e:t??``,le=()=>A(`span`,{className:`loading loading-spinner loading-xs`,"aria-hidden":`true`}),ue=({expanded:e,hidden:t})=>A(`svg`,{viewBox:`0 0 16 16`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,className:H(`size-4 transition-transform duration-200`,t?`opacity-0`:e?`rotate-90`:``),"aria-hidden":`true`,children:A(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`m6 3.5 4 4.5-4 4.5`})}),U=()=>A(`svg`,{viewBox:`0 0 16 16`,fill:`currentColor`,className:`size-4`,"aria-hidden":`true`,children:A(`path`,{d:`M5 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM11 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM11 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM5 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM11 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z`})}),de=({expanded:e})=>A(`svg`,{viewBox:`0 0 16 16`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,className:`size-4`,"aria-hidden":`true`,children:A(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:e?`M2.5 6.5h11l-1.2 6h-9.1l-1.2-6ZM2.5 5V3.5h4l1.2 1.5h5.8v1.5`:`M2.5 4.5h4l1.2 1.5h5.8v6.5h-11v-8Z`})}),fe=()=>k(`svg`,{viewBox:`0 0 16 16`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,className:`size-4`,"aria-hidden":`true`,children:[A(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M4 2.5h5l3 3v8H4v-11Z`}),A(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M9 2.5v3h3`})]}),W=(e,t,n)=>e[n?.[t]??se[t]],pe=(e,t)=>W(e,`title`,t)??e.title??e.key,G=e=>new Set(V(e).map(B)),me=(e,t)=>[e.flat.map(e=>`${e.parentKeyText??`root`}>${e.keyText}`).join(`|`),t.directoryMode?`directory`:`tree`,String(t.expandAction??!1),String(t.rangeSelect??!1)].join(`::`),he=e=>e==null||typeof e==`boolean`?``:typeof e==`string`||typeof e==`number`?String(e):Array.isArray(e)?e.map(e=>he(e)).filter(Boolean).join(` `):typeof e==`object`?[`title`,`label`,`name`,`text`,`description`,`children`].map(t=>he(e[t])).filter(Boolean).join(` `):``,ge=(e,t,n)=>{if(!t)return e;let r=ce(t)?t:void 0,i=r?.id??n?.id??se.id,a=r?.pId??n?.pId??se.pId,o=r?.rootPId??0,s=n?.children??se.children,c=new Map;e.forEach((e,t)=>{let n=e[i]??e.key??t;c.set(n,{...e,[s]:[]})});let l=[];return e.forEach((e,t)=>{let n=e[i]??e.key??t,r=e[a],u=c.get(n);if(!u)return;if(r==null||r===o||!c.has(r)){l.push(u);return}let d=c.get(r);if(!d){l.push(u);return}let f=d[s]??[];f.push(u),d[s]=f}),l},_e=(e,t)=>{let n=[],r={},i=(e,a,o,s)=>{let c=W(e,`key`,t),l=z(c)?c:o,u=B(l),d=W(e,`isLeaf`,t),f={key:l,keyText:u,title:pe(e,t),depth:a,children:[],raw:e,disabled:!!W(e,`disabled`,t),selectable:W(e,`selectable`,t)!==!1,checkable:W(e,`checkable`,t)!==!1,disableCheckbox:!!W(e,`disableCheckbox`,t),isLeaf:!1,className:W(e,`className`,t),icon:W(e,`icon`,t),parentKeyText:s};n.push(f),r[u]=f;let p=W(e,`children`,t);return f.children=Array.isArray(p)?p.map((e,t)=>i(e,a+1,`${o}-${t}`,u)):[],f.isLeaf=d===!0?!0:d===!1?!1:f.children.length===0,f};return{roots:e.map((e,t)=>i(e,0,`node-${t}`)),flat:n,byKeyText:r}},ve=e=>{let t=[],n=e=>{!e.disabled&&e.checkable&&!e.disableCheckbox&&t.push(e.keyText),e.children.forEach(e=>n(e))};return n(e),t},K=e=>{let t=[],n=e=>{t.push(e.key),e.children.forEach(e=>n(e))};return n(e),t},ye=(e,t,n)=>{let r=new Set,i=new Set,a={},o=e=>{let s=!e.disabled&&e.checkable&&!e.disableCheckbox,c=e.children.map(e=>o(e)).filter(e=>e.participates),l=t.has(e.keyText),u=l,d=!1;if(!n&&c.length>0){let e=c.every(e=>e.checked),t=c.some(e=>e.checked||e.halfChecked);u=l||e,d=!u&&t}let f={checked:u,halfChecked:d,participates:s||c.length>0};return a[e.keyText]=f,u&&s&&r.add(e.keyText),d&&s&&i.add(e.keyText),f};return e.forEach(e=>o(e)),{checkedKeys:r,halfCheckedKeys:i,stateMap:a}},be=(e,t,n,r)=>{let i=new Set(e),a=new Set(t),o=n.filter(e=>i.has(e.keyText)).map(e=>e.key).filter(z);return r?{checked:o,halfChecked:n.filter(e=>a.has(e.keyText)).map(e=>e.key).filter(z)}:o},xe=(e,t,n,r)=>{if(!n){let n=[],r=e=>{n.push({node:e,matched:!1}),t.has(e.keyText)&&e.children.forEach(e=>r(e))};return e.forEach(e=>r(e)),n}let i=e=>{let t=r(e),n=e.children.flatMap(e=>i(e));if(!t&&n.length===0)return[];if(t){let t=[{node:e,matched:!0}],n=e=>{t.push({node:e,matched:!1}),e.children.forEach(e=>n(e))};return e.children.forEach(e=>n(e)),t}return[{node:e,matched:!1},...n]};return e.flatMap(e=>i(e))},Se=(e,t,n)=>t?typeof n==`function`?n(t,e):n===!1?!0:he(e.title).toLowerCase().includes(t.toLowerCase()):!0,Ce=(e,t,n)=>{let r=t.parentKeyText;for(;r;){if(r===e.keyText)return!0;r=n[r]?.parentKeyText}return!1},we=e=>{let t=!!e,n=ce(e)?e:void 0;return{enabled:t,icon:n?.icon,nodeDraggable:r=>t?typeof e==`function`?e(r):n&&typeof n.nodeDraggable==`function`?n.nodeDraggable(r):!0:!1}},Te=(e,t,n,r,i)=>{if(!i||!n||!r)return{items:e,topSpacer:0,bottomSpacer:0};let a=r+2,o=Math.max(1,Math.ceil(n/a))+12,s=Math.max(0,e.length-o),c=Math.min(s,Math.max(0,Math.floor(t/a)-6)),l=Math.min(e.length,c+o);return{items:e.slice(c,l),topSpacer:c*a,bottomSpacer:Math.max(0,(e.length-l)*a)}},Ee=e=>{if(e===-1)return`before`;if(e===1)return`after`;if(e===0)return`inside`},De=(e,t)=>e.map(e=>t[e]?.key).filter(z),Oe=(e,t)=>{if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0},ke=e=>{switch(e){case`small`:case`sm`:return{headerPadding:`px-4 py-3`,bodyPadding:`px-3 py-3`,rowPadding:`py-1.5`,textClass:`text-sm`,rowMinHeight:36,rowEstimate:42};case`large`:case`lg`:return{headerPadding:`px-5 py-4`,bodyPadding:`px-4 py-4`,rowPadding:`py-2.5`,textClass:`text-[0.95rem]`,rowMinHeight:44,rowEstimate:50};default:return{headerPadding:`px-4 py-3.5`,bodyPadding:`px-3.5 py-3.5`,rowPadding:`py-2`,textClass:`text-sm`,rowMinHeight:40,rowEstimate:46}}},Ae=e=>{switch(e){case`error`:return`border-error/55 shadow-[0_0_0_1px_rgba(248,113,113,0.14)]`;case`warning`:return`border-warning/55 shadow-[0_0_0_1px_rgba(251,191,36,0.14)]`;default:return``}},je=({snapshot:e,version:t,loadingKeyTexts:n,fixedVirtualRowHeight:r,componentSize:i,classNames:a,styles:o,emptyText:s,showLine:c,disabled:l,blockNode:u,checkable:d,showIcon:f,selectable:p,hasLoadData:m,titleRender:h,switcherIcon:g,icon:_,directoryMode:y,dragConfig:b,handleDragStartNode:x,handleDragEnterNode:S,handleDragOverNode:C,handleDragLeaveNode:w,handleDragEndNode:T,handleDropNode:ee,handleExpandToggle:E,handleCheck:D,handleDragMouseDown:O,handleLabelMouseDown:j,handleLabelActivate:M,handleLabelContextMenu:te})=>{let ne=(e,t,n,r,i,a)=>typeof g==`function`?g({node:e,expanded:t,selected:n,checked:r,halfChecked:i,loading:a}):g===void 0?a?A(le,{}):A(ue,{expanded:t,hidden:e.isLeaf&&e.children.length===0}):g,re=e=>!(b.enabled&&b.nodeDraggable(e)&&!l&&!e.disabled)||b.icon===!1?null:A(`span`,{"aria-hidden":`true`,draggable:!0,className:H(`inline-flex size-6 shrink-0 cursor-grab items-center justify-center rounded-lg text-base-content/35 transition group-hover:text-base-content/55`,a?.dragHandle),style:o?.dragHandle,"data-rue-tree-drag-handle":`true`,onMouseDown:t=>O(e,t),children:b.icon??A(U,{})}),N=(e,t)=>k(`div`,{className:R(`pointer-events-none absolute inset-x-0 z-10 flex items-center gap-2 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-primary/85`,t===`before`?`-top-2.5`:`-bottom-2.5`),style:{paddingLeft:`${e.depth*18+20}px`},"data-rue-tree-drop-placeholder":t,children:[A(`span`,{className:`h-[2px] flex-1 rounded-full bg-primary/60`}),A(`span`,{className:`rounded-full bg-primary/10 px-2 py-1 text-[10px]`,children:`插入到此处`})]}),P=(e,t,n,r,i,a)=>typeof _==`function`?_({node:e,expanded:t,selected:n,checked:r,halfChecked:i,loading:a}):_===void 0?e.icon===void 0?f?y?A(`span`,{className:`inline-flex size-6 items-center justify-center text-base-content/60`,children:e.children.length>0||!e.isLeaf?A(de,{expanded:t}):A(fe,{})}):A(`span`,{className:`inline-flex size-6 shrink-0 items-center justify-center rounded-md bg-base-200/80 text-[10px] font-semibold text-base-content/60`,children:e.children.length>0||!e.isLeaf?`DIR`:`DOC`}):null:e.icon:_;return k(v,{children:[A(`span`,{hidden:!0,"aria-hidden":`true`,"data-rue-tree-content-version":String(t)}),e.virtualSlice.topSpacer>0?A(`div`,{style:{height:`${e.virtualSlice.topSpacer}px`},"aria-hidden":`true`}):null,e.virtualSlice.items.map(({node:t})=>{let s=e.checkState.stateMap[t.keyText]??{checked:!1,halfChecked:!1,participates:!0},g=e.searchValue?!0:e.expandedKeyTextSet.has(t.keyText),v=e.selectedKeyTextSet.has(t.keyText),y=n.includes(t.keyText),O=!!m||!!t.children.length||!t.isLeaf,F=e.dragState.overKeyText===t.keyText,ie=b.enabled&&b.nodeDraggable(t)&&!l&&!t.disabled,I=F?Ee(e.dragState.dropPosition):void 0,ae={node:t,expanded:g,selected:v,checked:s.checked,halfChecked:s.halfChecked,loading:y};return k(`div`,{className:H(R(`rue-tree-node group relative flex min-w-0 items-center gap-1 rounded-lg py-0.5 pr-2 text-base-content outline-none transition-colors duration-150`,l||t.disabled?`opacity-55`:I===`inside`?`bg-primary/10 ring-1 ring-primary/20`:I?`bg-primary/5`:`hover:bg-base-200/65`,c&&t.depth>0&&`border-l border-base-300/60`,t.className),a?.node),style:{paddingLeft:`${t.depth*18+8}px`,height:r?`${r}px`:void 0,minHeight:r?void 0:`${i.rowMinHeight}px`,...o?.node},"data-rue-tree-node":t.keyText,"data-rue-tree-drop-intent":I??``,"data-rue-tree-drop-position":F?String(e.dragState.dropPosition??0):``,draggable:ie,onDragStart:e=>x(t,e),onDragEnter:e=>S(t,e),onDragOver:e=>C(t,e),onDragLeave:e=>w(t,e),onDragEnd:e=>T(t,e),onDrop:e=>ee(t,e),children:[I===`before`?N(t,`before`):null,A(`button`,{type:`button`,className:H(R(`inline-flex size-6 shrink-0 items-center justify-center rounded-md text-base-content/55 transition-colors duration-150 hover:bg-base-200 hover:text-base-content disabled:cursor-default disabled:opacity-30`,!O&&`pointer-events-none`),a?.switcher),style:o?.switcher,disabled:!O||l||t.disabled,"aria-label":g?`折叠节点`:`展开节点`,onClick:e=>E(t,e),children:ne(t,g,v,s.checked,s.halfChecked,y)}),d?A(`button`,{type:`button`,role:`checkbox`,"aria-checked":s.halfChecked?`mixed`:s.checked?`true`:`false`,disabled:l||t.disabled||t.disableCheckbox||!t.checkable,className:H(R(`inline-flex size-4 shrink-0 items-center justify-center rounded border text-[11px] font-semibold leading-none transition-colors duration-150`,s.checked||s.halfChecked?`border-primary bg-primary text-primary-content`:`border-base-content/35 bg-base-100 text-transparent hover:border-primary/60`,(l||t.disabled||t.disableCheckbox||!t.checkable)&&`cursor-not-allowed opacity-45`),a?.checkbox),style:o?.checkbox,onClick:e=>D(t,e),children:s.halfChecked?`−`:s.checked?`✓`:``}):null,re(t),f||t.icon!==void 0||_!==void 0?P(t,g,v,s.checked,s.halfChecked,y):null,k(`button`,{type:`button`,className:H(R(`flex min-w-0 items-center gap-2 rounded-md px-2 text-left transition-colors duration-150`,i.rowPadding,u?`flex-1 justify-between`:`max-w-full`,v?`selected bg-primary/12 text-primary`:`text-base-content hover:bg-base-200/70`,(l||t.disabled||!p||!t.selectable)&&`cursor-not-allowed opacity-55`),a?.label),style:o?.label,disabled:l||t.disabled||!p||!t.selectable,draggable:ie,onMouseDown:e=>j(t,e),onClick:e=>M(t,e,`click`),onDblClick:e=>M(t,e,`doubleClick`),onContextMenu:e=>te(t,e),children:[h?h(ae):A(`span`,{className:`min-w-0 truncate`,children:t.title}),I?A(`span`,{className:`badge badge-primary badge-outline badge-xs shrink-0`,"data-rue-tree-drop-placeholder":I,children:I===`inside`?`放入`:I===`before`?`插前`:`插后`}):v?A(`span`,{className:`badge badge-primary badge-xs shrink-0`,children:`选中`}):null]}),I===`after`?N(t,`after`):null]},t.keyText)}),e.virtualSlice.bottomSpacer>0?A(`div`,{style:{height:`${e.virtualSlice.bottomSpacer}px`},"aria-hidden":`true`}):null,e.visibleNodes.length?null:A(`div`,{className:H(`rounded-lg px-3 py-8 text-center text-sm text-base-content/55`,a?.empty),style:o?.empty,children:s})]})},Me=({className:e,style:o,treeData:c=[],fieldNames:l,treeDataSimpleMode:d,selectedKeys:f,defaultSelectedKeys:p,checkedKeys:m,defaultCheckedKeys:h,expandedKeys:g,defaultExpandedKeys:_,defaultExpandAll:v,multiple:y,checkable:b,checkStrictly:S,showLine:C,showIcon:w,blockNode:T,selectable:ee=!0,disabled:E,size:D,status:O,draggable:j,allowDrop:M,virtual:N=!0,height:F,itemHeight:oe,titleRender:se,switcherIcon:ce,icon:le,filterTreeNode:ue,searchValue:U,defaultSearchValue:de,searchPlaceholder:fe=`搜索节点`,allowSearch:W,loadData:pe,emptyText:he=`暂无节点`,onSelect:Ee,onCheck:Me,onExpand:Ne,onSearch:q,onDoubleClick:Pe,onDragStart:Fe,onDragEnter:Ie,onDragOver:Le,onDragLeave:Re,onDragEnd:ze,onDrop:Be,onScroll:Ve,classNames:He,styles:Ue,directoryMode:J,expandAction:We=!1,toggleSelect:Ge=!0,rangeSelect:Ke=`append`,...qe})=>{let Je=x();function Ye(){let e=Je.current,t=u(c),n=u(d),r=u(l);if(e&&e.treeData===t&&ie(e,n,r))return e.normalizedTree;let i=Array.isArray(t)?t.slice():[];if(e&&I(e,t,i,n,r))return e.normalizedTree;let a=ae(t,i,n,r);if(a)return Je.current=a,a.normalizedTree;let o=_e(ge(c,d,l),l),s={treeData:t,treeDataRoots:i,treeDataSimpleMode:n,fieldNames:r,normalizedTree:o};return Je.current=s,L(s),o}let Xe=Ye(),Ze=Xe,Qe=me(Xe,{directoryMode:J,expandAction:We,rangeSelect:Ke}),$e=te.get(Qe)??(()=>{let e={};return te.set(Qe,e),e})(),et=x(null),tt=ke(D),nt=we(j),rt=v?Xe.flat.filter(e=>e.children.length>0||!e.isLeaf).map(e=>e.key):_??[],Y=x(i(0)).current,it=x(i(V(p??f))).current,at=x(i(V(h))).current,ot=x(i(V((J?$e.expandedKeys:void 0)??rt))).current,st=x(i(V(f))).current,ct=x(i(V(g))).current,lt=x(i(m===void 0?new Set:G(Array.isArray(m)?m:m.checked))).current,ut=x(i(de??``)).current,dt=x(i([])).current,ft=x(i(0)).current,X=x(i(null)).current,pt=x(i([])).current,Z=x(i({})).current,mt=x(i({})).current,ht=x(i(null)).current,gt=x(i(!1)).current,_t=x(i(null)).current,vt=x(null);if(m!==void 0){let e=G(Array.isArray(m)?m:m.checked);Oe(lt.value,e)||(lt.value=e)}f!==void 0&&!Oe(G(st.value),G(f))&&(st.value=V(f)),g!==void 0&&!Oe(G(ct.value),G(g))&&(ct.value=V(g));let yt=oe??tt.rowEstimate,bt=typeof F==`number`&&F>0?F:void 0,xt=N!==!1&&bt&&typeof oe==`number`&&oe>0?oe:void 0;function Q(){Y.value+=1,dn()}function St(e=!1){if(e){let e=u(c),t=Array.isArray(e)?e[0]:void 0;Je.current=void 0,P(e)&&ne.delete(e),P(t)&&re.delete(t)}let t=Ye();return Ze=t,t}function $(){return Ze??St()}function Ct(){return f===void 0?it.value:st.value}function wt(){return g===void 0?ot.value:ct.value}function Tt(){return U===void 0?ut.value:U}function Et(){return m===void 0?G(at.value):lt.value}function Dt(){let e=$(),t=G(wt()),n=Tt();return xe(e.roots,t,n,e=>Se(e,n,ue))}function Ot(){Y.value;let e=$(),t=Tt(),n=G(Ct()),r=G(wt()),i=Et(),a=b?ye(e.roots,i,!!S):{checkedKeys:new Set,halfCheckedKeys:new Set,stateMap:{}},o=xe(e.roots,r,t,e=>Se(e,t,ue));return{searchValue:t,selectedKeyTextSet:n,expandedKeyTextSet:r,checkState:a,visibleNodes:o,virtualSlice:Te(o,ft.value,bt,yt,N!==!1&&!!bt),dragState:Z.value}}let kt=(e,t,n)=>{let r=V(e);return g===void 0?(ot.value=r,J&&($e.expandedKeys=r)):ct.value=r,Q(),Ne&&Ne(r,{node:t,expanded:r.some(e=>B(e)===t.keyText),nativeEvent:n}),r},At=(e,t,n)=>{let r=$(),i=V(e).filter(e=>r.byKeyText[B(e)]),a=i.map(e=>r.byKeyText[B(e)]).filter(Boolean);return f===void 0?it.value=i:st.value=i,Q(),Ee&&Ee(i,{node:t,nativeEvent:n,selected:i.some(e=>B(e)===t.keyText),selectedNodes:a}),i},jt=(e,t,n)=>{let r=$(),i=ye(r.roots,e,!!S),a=be(Array.from(i.checkedKeys),Array.from(i.halfCheckedKeys),r.flat,!!S);m===void 0?at.value=S?a.checked:a:lt.value=new Set(i.checkedKeys),Q(),Me&&Me(a,{node:t,nativeEvent:n,checked:i.checkedKeys.has(t.keyText),checkedNodes:Array.from(i.checkedKeys).map(e=>r.byKeyText[e]).filter(Boolean),halfCheckedKeys:Array.from(i.halfCheckedKeys).map(e=>r.byKeyText[e]?.key).filter(z)})},Mt=async(e,t)=>{let n=wt(),r=G(n);if(E||e.disabled)return n;let i=r.has(e.keyText),a=i?n.filter(t=>B(t)!==e.keyText):[...n,e.key],o=!i&&!!pe&&!e.isLeaf&&e.children.length===0&&!dt.value.includes(e.keyText);o&&(dt.value=[...dt.value,e.keyText]);let s=kt(a,e,t);if(o&&pe)try{await pe(e),St(!0)}finally{dt.value=dt.value.filter(t=>t!==e.keyText),Q()}return s},Nt=(e,t)=>{t.preventDefault(),t.stopPropagation(),Mt(e,t)},Pt=(e,t)=>{if(E||e.disabled||!ee||!e.selectable)return;let n=Ct(),r=G(n);if(y&&Ke!==!1&&t?.shiftKey){let r=Dt().map(e=>e.node.keyText),i=X.value&&r.includes(X.value)?X.value:void 0,a=n.map(B).filter(t=>t!==e.keyText&&r.includes(t)),o=a[a.length-1],s=i??o,c=s?r.indexOf(s):-1,l=r.indexOf(e.keyText);if(c>=0&&l>=0){let i=Math.min(c,l),a=Math.max(c,l),o=r.slice(i,a+1),u=Ke===`append`?pt.value.length?pt.value:n.map(B):[],d=At(De(Array.from(new Set([...u,...o])),$().byKeyText),e,t);X.value=s,pt.value=d.map(B);return}}if(J){let i=!!y&&!!Ge&&!!(t?.ctrlKey||t?.metaKey);if(y&&i){let i=r.has(e.keyText)?n.filter(t=>B(t)!==e.keyText):[...n,e.key];X.value=e.keyText,pt.value=i.map(B),At(i,e,t);return}X.value=e.keyText,pt.value=[e.keyText],At([e.key],e,t);return}if(y){let i=r.has(e.keyText)?n.filter(t=>B(t)!==e.keyText):[...n,e.key];X.value=e.keyText,pt.value=i.map(B),At(i,e,t);return}let i=r.has(e.keyText)?[]:[e.key];X.value=e.keyText,pt.value=i.map(B),At(i,e,t)},Ft=(e,t)=>{if(t.preventDefault(),t.stopPropagation(),E||e.disabled||!e.checkable||e.disableCheckbox)return;let n=Et(),r=ye($().roots,n,!!S),i=new Set(n),a=r.checkedKeys.has(e.keyText);if(S)a?i.delete(e.keyText):i.add(e.keyText);else{let t=ve(e);a?t.forEach(e=>i.delete(e)):t.forEach(e=>i.add(e))}jt(i,e,t)},It=e=>{U===void 0&&(ut.value=e),Q(),q&&q(e)},Lt=e=>{ft.value=e.currentTarget.scrollTop,Q(),Ve&&Ve(e)},Rt=e=>{!e||Z.value.overKeyText!==e||(Z.value={dragKeyText:Z.value.dragKeyText},Q())},zt=e=>{e&&_t.value!==e||(_t.value=null,vt.current?.(),vt.current=null)},Bt=e=>{if(vt.current?.(),vt.current=null,_t.value=e,typeof window>`u`)return;let t,n=()=>{t!==void 0&&window.clearTimeout(t),window.removeEventListener(`mouseup`,r,!0)},r=()=>{window.removeEventListener(`mouseup`,r,!0),t=window.setTimeout(()=>{_t.value===e&&(_t.value=null),vt.current===n&&(vt.current=null)},500)};vt.current=n,window.addEventListener(`mouseup`,r,!0)},Vt=(e,t)=>{Z.value.overKeyText===e&&Z.value.dropPosition===t||(Z.value={...Z.value,overKeyText:e,dropPosition:t},Q())},Ht=(e,t)=>{let n={...mt.value},r=n[e]??0,i=Math.max(r+t,0);return i>0?n[e]=i:delete n[e],mt.value=n,Q(),i},Ut=()=>{mt.value={},Z.value={},Q()},Wt=(e,t,n)=>{let r=$(),i=Z.value.dragKeyText;if(!i)return null;let a=r.byKeyText[i];if(!a||a.keyText===e.keyText||Ce(a,e,r.byKeyText))return null;let o=n?.getBoundingClientRect?.(),s=`clientY`in t?t.clientY:void 0,c=0;return o&&typeof s==`number`&&(s<o.top+o.height*.25?c=-1:s>o.bottom-o.height*.25&&(c=1)),M&&!M({dragNode:a,dropNode:e,dropPosition:c,dropToGap:c!==0})?null:{dragNode:a,dropPosition:c}},Gt=e=>typeof document>`u`||typeof document.elementFromPoint!=`function`?null:document.elementFromPoint(e.clientX,e.clientY)?.closest?.(`[data-rue-tree-node]`),Kt=e=>{let t=e?.getAttribute(`data-rue-tree-node`);return t?$().byKeyText[t]??null:null},qt=()=>{typeof document>`u`||(document.removeEventListener(`mousemove`,Xt),document.removeEventListener(`mouseup`,Zt))},Jt=(e,t)=>{let n=we(j);t.button!==0||!n.enabled||!n.nodeDraggable(e)||E||e.disabled||typeof document>`u`||(ht.value={keyText:e.keyText,startX:t.clientX,startY:t.clientY,active:!1},document.addEventListener(`mousemove`,Xt),document.addEventListener(`mouseup`,Zt))},Yt=(e,t)=>{let n=$().byKeyText[e.keyText];return n?(e.active=!0,ht.value=e,Bt(e.keyText),mt.value={},Z.value={dragKeyText:e.keyText},Q(),Fe&&Fe({event:t,node:n}),!0):!1};function Xt(e){let t=ht.value;if(!t)return;let n=Math.max(Math.abs(e.clientX-t.startX),Math.abs(e.clientY-t.startY));if(!t.active&&n<4||!t.active&&!Yt(t,e))return;e.preventDefault();let r=Gt(e),i=Kt(r);if(!i){Rt(Z.value.overKeyText);return}let a=Wt(i,e,r);if(!a){Rt(i.keyText);return}Vt(i.keyText,a.dropPosition),Le&&Le({event:e,node:i})}function Zt(e){let t=ht.value,n=Z.value.dragKeyText,r=t?.active?t.keyText:n;if(ht.value=null,qt(),!r)return;e.preventDefault();let i=Gt(e),a=Kt(i),o=a?Wt(a,e,i):null;if(a&&o&&Be){let t=Z.value.overKeyText===a.keyText&&Z.value.dropPosition!==void 0?Z.value.dropPosition:o.dropPosition;Be({event:e,node:a,dragNode:o.dragNode,dragNodesKeys:K(o.dragNode),dropPosition:t,dropToGap:t!==0})}let s=$().byKeyText[r];Ut(),s&&ze&&ze({event:e,node:s})}let Qt=(e,t)=>{let n=we(j);!n.enabled||!n.nodeDraggable(e)||E||e.disabled||(t.dataTransfer&&(t.dataTransfer.effectAllowed=`move`,t.dataTransfer.setData(`text/plain`,e.keyText)),mt.value={},Z.value={dragKeyText:e.keyText},Q(),Fe&&Fe({event:t,node:e}))},$t=(e,t)=>{if(!Z.value.dragKeyText)return;Ht(e.keyText,1);let n=Wt(e,t,t.currentTarget);if(!n){Rt(e.keyText);return}t.preventDefault(),Vt(e.keyText,n.dropPosition);let r=wt(),i=G(r);n.dropPosition===0&&!i.has(e.keyText)&&(e.children.length>0||!e.isLeaf)&&(r=kt([...r,e.key],e,t)),Ie&&Ie({event:t,node:e,expandedKeys:r})},en=(e,t)=>{if(!Z.value.dragKeyText)return;let n=Wt(e,t,t.currentTarget);if(!n){Rt(e.keyText);return}t.preventDefault(),t.dataTransfer&&(t.dataTransfer.dropEffect=`move`),Vt(e.keyText,n.dropPosition),Le&&Le({event:t,node:e})},tn=(e,t)=>{Ht(e.keyText,-1)===0&&Rt(e.keyText),Re&&Re({event:t,node:e})},nn=(e,t)=>{Ut(),ze&&ze({event:t,node:e})},rn=(e,t)=>{let n=Wt(e,t,t.currentTarget);if(!n){Ut();return}t.preventDefault(),t.stopPropagation();let r=Z.value.overKeyText===e.keyText&&Z.value.dropPosition!==void 0?Z.value.dropPosition:n.dropPosition;Be&&Be({event:t,node:e,dragNode:n.dragNode,dragNodesKeys:K(n.dragNode),dropPosition:r,dropToGap:r!==0}),Ut()},an=(e,t)=>{Jt(e,t)},on=(e,t)=>{let n=!!y&&Ke!==!1&&t.shiftKey;if(J&&y&&Ge&&(t.ctrlKey||t.metaKey)||n){t.preventDefault(),t.stopPropagation(),Bt(e.keyText),Pt(e,t);return}Jt(e,t)},sn=(e,t,n)=>{if(t.preventDefault(),t.stopPropagation(),n===`click`&&_t.value===e.keyText){zt(e.keyText);return}n===`doubleClick`&&Pe&&Pe(t,e);let i=J&&We===n&&(e.children.length>0||!e.isLeaf);if(n===`click`&&i){r(()=>{Mt(e,t),Pt(e,t)});return}i&&Mt(e,t),n===`click`&&Pt(e,t)},cn=(e,t)=>{if(_t.value===e.keyText){t.preventDefault(),t.stopPropagation();return}J&&y&&Ge&&t.ctrlKey&&!t.metaKey&&(t.preventDefault(),t.stopPropagation(),Pt(e,t))},ln=bt?N===!1?{maxHeight:`${bt}px`,overflowY:`auto`}:{height:`${bt}px`,overflowY:`auto`}:{overflowY:`visible`},un=()=>je({snapshot:Ot(),version:Y.value,loadingKeyTexts:dt.value,fixedVirtualRowHeight:xt,componentSize:tt,classNames:He,styles:Ue,emptyText:he,showLine:C,disabled:E,blockNode:T,checkable:b,showIcon:w,selectable:ee,hasLoadData:!!pe,titleRender:se,switcherIcon:ce,icon:le,directoryMode:J,dragConfig:nt,handleDragStartNode:Qt,handleDragEnterNode:$t,handleDragOverNode:en,handleDragLeaveNode:tn,handleDragEndNode:nn,handleDropNode:rn,handleExpandToggle:Nt,handleCheck:Ft,handleDragMouseDown:an,handleLabelMouseDown:on,handleLabelActivate:sn,handleLabelContextMenu:cn});function dn(){gt.value||(gt.value=!0,queueMicrotask(()=>{gt.value=!1,fn()}))}function fn(){let e=et.current;e&&a(un(),e)}function pn(e){et.current=e,e&&fn()}return n(fn),t(()=>{qt(),zt()}),s(()=>[c,d,l,f,m,g,U],()=>{St(),dn()}),dn(),k(`section`,{...qe,className:H(H(H(`rue-tree rounded-box border border-base-300 bg-base-100 text-base-content shadow-sm`,Ae(O)),He?.root),e),style:{...Ue?.root,...o},"data-rue-tree":`true`,"data-rue-tree-version":String(Y.value),children:[W?A(`div`,{className:H(H(R(`border-b border-base-200/80`,tt.headerPadding),He?.header),He?.search),style:{...Ue?.header,...Ue?.search},children:A(`input`,{type:`text`,className:`input input-bordered input-sm w-full bg-base-100`,value:Ot().searchValue,placeholder:fe,onInput:e=>It(e.currentTarget.value)})}):null,A(`div`,{className:H(R(`grid gap-0.5`,tt.bodyPadding,tt.textClass),He?.body),ref:pn,"data-rue-tree-body":`true`,style:{...ln,...Ue?.body},onScroll:Lt})]})},Ne=({className:e,showIcon:t=!0,blockNode:n=!0,expandAction:r=`click`,...i})=>A(Me,{...i,className:H(`rue-directory-tree`,e),showIcon:t,blockNode:n,directoryMode:!0,expandAction:r}),q=Me;q.DirectoryTree=Ne;var Pe=t=>g(n=>{let r=y(`div`,n);d(r,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let i=y(`table`,r);o(r,i),d(i,`table table-zebra`);let a=y(`thead`,i);o(i,a);let s=y(`tr`,a);o(a,s);let c=y(`th`,s);o(s,c),o(c,S(`属性`));let l=y(`th`,s);o(s,l),o(l,S(`说明`));let u=y(`th`,s);o(s,u),o(u,S(`类型`));let p=y(`th`,s);o(s,p),o(p,S(`默认值`));let m=y(`tbody`,i);o(i,m);let h=f(`rue:list:start`),v=f(`rue:list:end`);o(m,h),o(m,v);let x=new Map;return E(()=>{x=O({items:t.rows||[],getKey:(e,t)=>e.prop,elements:x,parent:m,before:v,singleRoot:!0,trackIndex:!1,start:h,renderItem:(t,n,r,i,a)=>{b(g(()=>{let n=T(),r=y(`tr`,n);o(n,r),E(()=>{_(r,`key`,String(t.prop))});let i=y(`td`,r);o(r,i);let a=y(`code`,i);o(i,a);let s=f(`rue:slot:anchor`);o(a,s),E(()=>{let n=t.prop;e(()=>b(n,a,s))});let c=y(`td`,r);o(r,c);let l=f(`rue:slot:anchor`);o(c,l),E(()=>{let n=t.description;e(()=>b(n,c,l))});let u=y(`td`,r);o(r,u);let d=y(`code`,u);o(u,d);let p=f(`rue:slot:anchor`);o(d,p),E(()=>{let n=t.type;e(()=>b(n,d,p))});let m=y(`td`,r);o(r,m);let h=y(`code`,m);o(m,h);let g=f(`rue:slot:anchor`);return o(h,g),E(()=>{let n=t.defaultValue;e(()=>b(n,h,g))}),n}),n,r)}})}),r}),Fe=[{title:`产品平台`,key:`platform`,children:[{title:`文档中心`,key:`docs-api`},{title:`组件市场`,key:`component-hub`},{title:`示例仓库`,key:`examples`}]},{title:`工程效率`,key:`engineering`,children:[{title:`构建链路`,key:`build-pipeline`},{title:`质量门禁`,key:`quality-gate`},{title:`发布管道`,key:`release-flow`}]},{title:`增长分析`,key:`growth`,children:[{title:`实验看板`,key:`experiment-board`},{title:`归因报表`,key:`attribution-report`},{title:`留存漏斗`,key:`retention-funnel`}]}],Ie=[{title:`发布总控`,key:`release-control`,children:[{title:`前台站点`,key:`release-site`,children:[{title:`首页编排`,key:`site-home`},{title:`价格页`,key:`site-pricing`}]},{title:`运营链路`,key:`release-ops`,children:[{title:`投放素材`,key:`ops-assets`},{title:`归因回传`,key:`ops-attribution`}]},{title:`合规审查`,key:`release-compliance`,children:[{title:`隐私条款`,key:`compliance-privacy`},{title:`审计记录`,key:`compliance-audit`}]}]}],Le=[{title:`权限控制`,key:`permission-disabled-root`,children:[{title:`只读目录`,key:`readonly-folder`,disabled:!0,children:[{title:`首页编排`,key:`readonly-home`},{title:`价格页`,key:`readonly-pricing`}]},{title:`可编辑目录`,key:`editable-folder`,children:[{title:`投放素材`,key:`editable-assets`},{title:`归因回传`,key:`editable-attribution`,disableCheckbox:!0}]},{title:`审计日志（仅禁用复选框）`,key:`audit-log`,disableCheckbox:!0}]}],Re=[{nodeId:1,parentId:0,code:`workspace`,name:`Workspace`},{nodeId:2,parentId:1,code:`workflow`,name:`Workflow board`},{nodeId:3,parentId:1,code:`briefs`,name:`Briefs`},{nodeId:4,parentId:2,code:`review`,name:`Design review`},{nodeId:5,parentId:2,code:`release`,name:`Release checklist`},{nodeId:6,parentId:3,code:`content`,name:`Content drafts`}],ze=[{title:`app`,key:`dir-app`,children:[{title:`pages`,key:`dir-pages`,children:[{title:`Tree.tsx`,key:`file-tree-page`},{title:`Transfer.tsx`,key:`file-transfer-page`}]},{title:`site`,key:`dir-site`,children:[{title:`SidebarPlaygroundDesign.tsx`,key:`file-sidebar`}]}]},{title:`packages`,key:`dir-packages`,children:[{title:`runtime`,key:`dir-runtime`},{title:`rue-design`,key:`dir-rue-design`}]},{title:`README.md`,key:`file-readme`}],Be=[{title:`alpha.ts`,key:`range-alpha`},{title:`beta.ts`,key:`range-beta`},{title:`gamma.ts`,key:`range-gamma`},{title:`delta.ts`,key:`range-delta`},{title:`epsilon.ts`,key:`range-epsilon`}],Ve=[{title:`src`,key:`drag-src`,kind:`folder`,children:[{title:`components`,key:`drag-components`,kind:`folder`,children:[{title:`Tree.tsx`,key:`drag-tree-file`,kind:`file`},{title:`Transfer.tsx`,key:`drag-transfer-file`,kind:`file`}]},{title:`main.ts`,key:`drag-main-file`,kind:`file`}]},{title:`docs`,key:`drag-docs`,kind:`folder`,children:[{title:`routing.md`,key:`drag-routing-file`,kind:`file`},{title:`installation.md`,key:`drag-install-file`,kind:`file`}]},{title:`package.json`,key:`drag-package-file`,kind:`file`}],He=Array.from({length:120},(e,t)=>({title:`Page ${String(t+1).padStart(3,`0`)}`,key:`virtual-${t}`})),Ue=Array.from({length:64},(e,t)=>({title:`Workspace ${String(t+1).padStart(2,`0`)}`,key:`async-virtual-root-${t}`,isLeaf:!1})),J=`import { ref } from '@rue-js/rue'
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
</div>`,et=[{prop:`treeData`,description:`树数据源，支持嵌套 children 和字段映射。`,type:`TreeDataNode[]`,defaultValue:`[]`},{prop:`selectedKeys / defaultSelectedKeys`,description:`受控与非受控的当前选中项，multiple 打开后允许多选。`,type:`TreeKey[]`,defaultValue:`[]`},{prop:`checkedKeys / defaultCheckedKeys`,description:`勾选模式下的选中集合，strict 模式会回传 checked / halfChecked 结构。`,type:`TreeKey[] | { checked: TreeKey[]; halfChecked: TreeKey[] }`,defaultValue:`[]`},{prop:`expandedKeys / defaultExpandedKeys / defaultExpandAll`,description:`控制展开态，适合目录树、权限树和异步加载场景。`,type:`TreeKey[] / boolean`,defaultValue:`[] / false`},{prop:`checkable / checkStrictly`,description:`切换勾选与父子联动模式；strict 会关闭级联。`,type:`boolean`,defaultValue:`false`},{prop:`treeDataSimpleMode / fieldNames`,description:`直接接入 id / pId 扁平数据，同时可映射 title、key、children 字段。`,type:`boolean | TreeSimpleModeConfig / TreeFieldNames`,defaultValue:`- / -`},{prop:`allowSearch / searchValue / filterTreeNode`,description:`提供内置搜索输入和过滤逻辑，命中后会保持祖先链路。`,type:`boolean / string / boolean | ((inputValue, node) => boolean)`,defaultValue:`false / - / true`},{prop:`loadData`,description:`展开未加载分支时触发异步加载，适合远端目录与超大树。`,type:`(node: TreeNode) => Promise<any> | void`,defaultValue:`-`},{prop:`rangeSelect / Tree.DirectoryTree / expandAction / toggleSelect`,description:`Tree 多选和目录树都支持 shift 区间选择；目录树额外提供展开动作和 ctrl/meta 追加选择开关。`,type:`false | "append" | "replace" / DirectoryTreeProps / false | "click" | "doubleClick" / boolean`,defaultValue:`"append" / blockNode=true / showIcon=true / "click" / true`},{prop:`draggable / allowDrop / onDrop`,description:`开启拖拽排序并控制是否允许落点；allowDrop 和 onDrop 都会拿到 dropToGap，UI 会同步显示插前、插后或放入占位态。`,type:`TreeDraggable / (info) => boolean / (info) => void`,defaultValue:`false / - / -`},{prop:`height / itemHeight / virtual`,description:`为长列表开启虚拟滚动；height 定义视口高度，itemHeight 用于估算渲染窗口，也能和 loadData 组合接超长懒加载树。`,type:`number / number / boolean`,defaultValue:`- / 自动按尺寸估算 / true`},{prop:`showLine / showIcon / blockNode`,description:`控制树线、节点图标和整行可点的布局表现。`,type:`boolean`,defaultValue:`false`},{prop:`titleRender / switcherIcon / icon`,description:`按节点态自定义标题、展开图标和节点图标。`,type:`render function | any`,defaultValue:`-`}],tt=e=>Array.isArray(e)?e:e.checked,nt=(e,t)=>Array.isArray(e)?t?.halfCheckedKeys??[]:e.halfChecked,rt=e=>`${typeof e}:${String(e)}`,Y=e=>e.map(e=>({...e,children:Array.isArray(e.children)?Y(e.children):e.children})),it=(e,t)=>{let n=rt(t);for(let r=0;r<e.length;r+=1){let i=e[r];if(rt(i.key)===n){let[t]=e.splice(r,1);return t??null}if(Array.isArray(i.children)){let e=it(i.children,t);if(e)return e}}return null},at=(e,t,n,r)=>{let i=rt(n);for(let a=0;a<e.length;a+=1){let o=e[a];if(rt(o.key)===i){if(r===0){let e=Array.isArray(o.children)?[...o.children]:[];e.push(t),o.children=e}else e.splice(r<0?a:a+1,0,t);return!0}if(Array.isArray(o.children)&&at(o.children,t,n,r))return!0}return!1},ot=(e,t)=>{let n=Y(e),r=it(n,t.dragNode.key);return r&&(at(n,r,t.node.key,t.dropPosition)||n.push(r)),n},st=(e,t,n)=>{let r=rt(t);for(let i=0;i<e.length;i+=1){let a=e[i];if(rt(a.key)===r){let t=n(a);if(t===a)return e;let r=e.slice();return r[i]=t,r}if(Array.isArray(a.children)&&a.children.length){let r=st(a.children,t,n);if(r===a.children)continue;let o=e.slice();return o[i]={...a,children:r},o}}return e},ct=e=>e.reduce((e,t)=>!Array.isArray(t.children)||!t.children.length?e:e+1+ct(t.children),0),lt=t=>{let{isOpen:n,isFolder:r,toggle:i,addChild:a,changeType:s}=D(`useSetup:0:0`,()=>p(()=>{let e=D(`computed:1:0`,()=>c(()=>!!t.model.open)),n=D(`computed:1:1`,()=>c(()=>!!t.model.children&&t.model.children.length>0)),r=n=>{n?.stopPropagation(),t.model.open=!e.get()},i=e=>{e?.stopPropagation(),t.model.children||(t.model.children=[]),t.model.children.push({id:`${t.model.id}-new-${t.model.children.length}`,name:`new stuff`}),t.model.open=!0};return{isOpen:e,isFolder:n,toggle:r,addChild:i,changeType:e=>{e?.stopPropagation(),n.get()||(t.model.children=[],i(),t.model.open=!0)}}}));return g(c=>{let u=y(`li`,c);d(u,`list-none`);let p=y(`button`,u);o(u,p),_(p,`type`,`button`),E(()=>{d(p,`flex items-center gap-2 rounded-xl px-3 py-2 text-left text-sm transition `+(r.get()?`font-semibold text-base-content`:`text-base-content/80 hover:bg-base-200/70`))}),l(p,`click`,e=>i(e)),l(p,`dblclick`,e=>s(e));let h=y(`span`,p);o(p,h),d(h,`inline-flex size-5 items-center justify-center rounded-md bg-base-200/80 text-[11px] text-base-content/55`);let v=m(h);o(h,v),E(()=>{ee(v,r.get()?n.get()?`−`:`+`:`•`)});let x=y(`span`,p);o(p,x);let D=f(`rue:slot:anchor`);o(x,D),E(()=>{let n=t.model.name;e(()=>b(n,x,D))});let k=f(`rue:slot:anchor`);return o(u,k),E(()=>{let i=r.get()&&n.get()?g(()=>{let e=T(),n=y(`ul`,e);o(e,n),d(n,`mt-1 grid gap-1 pl-5`);let r=f(`rue:list:start`),i=f(`rue:list:end`);o(n,r),o(n,i);let s=new Map;E(()=>{s=O({items:t.model.children||[],getKey:(e,t)=>e.id,elements:s,parent:n,before:i,start:r,renderItem:(e,t,n,r,i)=>{C(w(lt,{key:e.id,model:e}),t,n,r)}})});let c=y(`li`,n);o(n,c),d(c,`list-none`);let u=y(`button`,c);return o(c,u),_(u,`type`,`button`),d(u,`btn btn-ghost btn-xs rounded-full text-emerald-600`),l(u,`click`,e=>a(e)),o(u,S(`+ add child`)),e}):``;e(()=>b(i,u,k))}),u})},ut=()=>{let{basicSelectedKeys:t,directorySelectedKeys:n,directoryExpandAction:r,directoryToggleSelect:a,directoryRangeSelect:s,directoryRangeAppendSelectedKeys:l,directoryRangeReplaceSelectedKeys:u,directoryRangeTreeVersion:m,checkableSelectedKeys:_,checkedKeys:v,halfCheckedKeys:x,disabledCheckedKeys:C,simpleSelectedKeys:ee,asyncSelectedKeys:O,asyncExpandedKeys:te,dragTreeData:ne,dragSummary:re,virtualSelectedKeys:N,asyncVirtualTreeData:P,asyncVirtualExpandedKeys:F,asyncVirtualSelectedKeys:ie,asyncVirtualLoadedBranchCount:I,asyncTreeData:ae,legacyTree:oe,tabs:L,loadAsyncTree:se,loadAsyncVirtualTree:R,resetDirectoryRangeDemo:ce}=D(`useSetup:0:0:dup1`,()=>p(()=>{let e=D(`ref:1:2`,()=>i([`docs-api`])),t=D(`ref:1:3`,()=>i([`dir-app`])),n=D(`ref:1:4`,()=>i(`click`)),r=D(`ref:1:5`,()=>i(!0)),a=D(`computed:1:6`,()=>c(()=>r.value?`append`:!1)),o=D(`ref:1:7`,()=>i([])),s=D(`ref:1:8`,()=>i([])),l=D(`ref:1:9`,()=>i(0)),u=D(`ref:1:10`,()=>i([`release-control`])),d=D(`ref:1:11`,()=>i([`site-home`])),f=D(`ref:1:12`,()=>i([`release-control`,`release-site`])),p=D(`ref:1:13`,()=>i([`editable-assets`])),m=D(`ref:1:14`,()=>i([`workflow`])),g=D(`ref:1:15`,()=>i([])),_=D(`ref:1:16`,()=>i([])),v=D(`ref:1:17`,()=>i(Y(Ve))),y=D(`ref:1:18`,()=>i(`folder 支持放入；file 只允许插前和插后，悬停时会显示明确占位态。`)),b=D(`ref:1:19`,()=>i([`virtual-3`])),x=D(`ref:1:20`,()=>i(Y(Ue))),S=D(`ref:1:21`,()=>i([])),C=D(`ref:1:22`,()=>i([])),w=D(`computed:1:23`,()=>c(()=>ct(x.value))),T=D(`ref:1:24`,()=>i([{title:`发布总线`,key:`release-bus`,isLeaf:!1}]));return{basicSelectedKeys:e,directorySelectedKeys:t,directoryExpandAction:n,directoryToggleSelect:r,directoryRangeSelect:a,directoryRangeAppendSelectedKeys:o,directoryRangeReplaceSelectedKeys:s,directoryRangeTreeVersion:l,checkableSelectedKeys:u,checkedKeys:d,halfCheckedKeys:f,disabledCheckedKeys:p,simpleSelectedKeys:m,asyncSelectedKeys:g,asyncExpandedKeys:_,dragTreeData:v,dragSummary:y,virtualSelectedKeys:b,asyncVirtualTreeData:x,asyncVirtualExpandedKeys:S,asyncVirtualSelectedKeys:C,asyncVirtualLoadedBranchCount:w,asyncTreeData:T,legacyTree:D(`reactive:1:25`,()=>h({id:`root`,name:`My Tree`,open:!0,children:[{id:`hello`,name:`hello`},{id:`world`,name:`world`},{id:`branch`,name:`child folder`,open:!0,children:[{id:`branch-1`,name:`design review`},{id:`branch-2`,name:`release note`}]}]})),tabs:{basic:D(`ref:1:26`,()=>i(`preview`)),directory:D(`ref:1:27`,()=>i(`preview`)),directoryRange:D(`ref:1:28`,()=>i(`preview`)),checkable:D(`ref:1:29`,()=>i(`preview`)),checkableDisabled:D(`ref:1:30`,()=>i(`preview`)),simple:D(`ref:1:31`,()=>i(`preview`)),async:D(`ref:1:32`,()=>i(`preview`)),drag:D(`ref:1:33`,()=>i(`preview`)),virtual:D(`ref:1:34`,()=>i(`preview`)),virtualAsync:D(`ref:1:35`,()=>i(`preview`)),legacy:D(`ref:1:36`,()=>i(`preview`))},loadAsyncTree:async e=>{e.key===`release-bus`&&(T.value=[{title:`发布总线`,key:`release-bus`,isLeaf:!1,children:[{title:`桌面端`,key:`desktop`,children:[{title:`Windows`,key:`desktop-win`},{title:`macOS`,key:`desktop-mac`}]},{title:`移动端`,key:`mobile`,children:[{title:`iOS`,key:`mobile-ios`},{title:`Android`,key:`mobile-android`}]}]}])},loadAsyncVirtualTree:async e=>{e.children.length||(x.value=st(x.value,e.key,e=>({...e,children:Array.from({length:8},(t,n)=>({title:`${String(e.title)} / Module ${n+1}`,key:`${String(e.key)}-child-${n}`,isLeaf:n%3!=0}))})))},resetDirectoryRangeDemo:()=>{o.value=[],s.value=[],l.value+=1}}}));return g(i=>{let c=T(),p=f(`rue:component:anchor`);return o(c,p),b(w(j,{children:g(()=>{let i=T(),c=y(`div`,i);o(i,c),d(c,`max-w-none prose prose-sm md:prose-base`);let p=y(`h1`,c);o(c,p),o(p,S(`Tree 树控件`));let h=y(`p`,c);o(c,h),o(h,S(`Rue 的 Tree 补上了独立树组件这块空白：保持 TreeView 示例里递归数据直改的灵活性，同时把 树控件常用的展开、选中、勾选、简单模式、异步加载和自定义标题一次覆盖。 视觉上使用 Rue 当前的卡片、badge 和 base 色阶体系，不照搬其他组件库的外观。`));let g=y(`div`,c);o(c,g),d(g,`not-prose mt-6 grid gap-3 md:grid-cols-3`);let D=y(`div`,g);o(g,D),d(D,`rounded-[1.4rem] border border-base-300 bg-gradient-to-br from-base-100 to-base-200/40 p-4 shadow-sm`);let j=y(`div`,D);o(D,j),d(j,`text-xs uppercase tracking-[0.2em] text-base-content/45`),o(j,S(`Node Model`));let z=y(`div`,D);o(D,z),d(z,`mt-2 text-base font-semibold`),o(z,S(`选择、勾选、展开三条状态线`));let B=y(`p`,D);o(D,B),d(B,`mt-2 mb-0 text-sm text-base-content/68`),o(B,S(`目录树、权限树、发布树都能直接套进来。`));let V=y(`div`,g);o(g,V),d(V,`rounded-[1.4rem] border border-base-300 bg-gradient-to-br from-base-100 to-base-200/40 p-4 shadow-sm`);let H=y(`div`,V);o(V,H),d(H,`text-xs uppercase tracking-[0.2em] text-base-content/45`),o(H,S(`DirectoryTree`));let le=y(`div`,V);o(V,le),d(le,`mt-2 text-base font-semibold`),o(le,S(`目录树快捷 API`));let ue=y(`p`,V);o(V,ue),d(ue,`mt-2 mb-0 text-sm text-base-content/68`),o(ue,S(`支持 click / doubleClick 展开，以及更接近文件浏览器的多选交互。`));let U=y(`div`,g);o(g,U),d(U,`rounded-[1.4rem] border border-base-300 bg-gradient-to-br from-base-100 to-base-200/40 p-4 shadow-sm`);let de=y(`div`,U);o(U,de),d(de,`text-xs uppercase tracking-[0.2em] text-base-content/45`),o(de,S(`Heavy Interaction`));let fe=y(`div`,U);o(U,fe),d(fe,`mt-2 text-base font-semibold`),o(fe,S(`拖拽排序与虚拟滚动`));let W=y(`p`,U);o(U,W),d(W,`mt-2 mb-0 text-sm text-base-content/68`),o(W,S(`长列表和拖拽改序终于能落在同一个 Tree 上了。`));let pe=f(`rue:component:anchor`);o(c,pe),E(()=>{let n=w(M,{title:`基础选中与整行交互`,summary:`默认 Tree 就是一个纯浏览 + 选中容器；blockNode 和 showIcon 让它更像配置面板里的主导航。`,tab:L.basic,code:J,preview:k(`div`,{className:`space-y-4 not-prose`,children:[A(q,{treeData:Fe,selectedKeys:t.value,defaultExpandAll:!0,showIcon:!0,blockNode:!0,onSelect:e=>{t.value=e}}),k(`div`,{className:`grid gap-3 md:grid-cols-3`,children:[k(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[A(`div`,{className:`text-xs text-base-content/45`,children:`当前选中`}),A(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:t.value.length?t.value.map(e=>A(`span`,{className:`badge badge-outline badge-sm`,children:String(e)},String(e))):A(`span`,{className:`text-sm text-base-content/55`,children:`未选择`})})]}),k(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[A(`div`,{className:`text-xs text-base-content/45`,children:`推荐场景`}),A(`div`,{className:`mt-2 text-sm text-base-content/75`,children:`组件目录、文档导航、资源分类`})]}),k(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[A(`div`,{className:`text-xs text-base-content/45`,children:`状态模型`}),A(`div`,{className:`mt-2 text-sm text-base-content/75`,children:`selectedKeys / expandedKeys 分离，便于受控更新。`})]})]})]})});e(()=>b(n,c,pe))});let G=f(`rue:component:anchor`);o(c,G),E(()=>{let t=w(M,{title:`DirectoryTree 目录树快捷 API`,summary:`Tree.DirectoryTree 默认补上目录图标、整行可点和 click 展开；这里先只看 expandAction 和 toggleSelect 这两个基础交互开关。`,tab:L.directory,code:Je,preview:k(`div`,{className:`grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`,children:[A(q.DirectoryTree,{treeData:ze,selectedKeys:n.value,multiple:!0,expandAction:r.value,toggleSelect:a.value,rangeSelect:s.get(),onSelect:e=>{n.value=e}}),k(`div`,{className:`space-y-3`,children:[k(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[A(`div`,{className:`text-xs text-base-content/45`,children:`快捷属性`}),k(`div`,{className:`mt-3 flex flex-wrap gap-2`,children:[A(`button`,{type:`button`,className:r.value===`click`?`btn btn-primary btn-xs`:`btn btn-ghost btn-xs`,onClick:()=>{r.value=`click`},children:`click 展开`}),A(`button`,{type:`button`,className:r.value===`doubleClick`?`btn btn-primary btn-xs`:`btn btn-ghost btn-xs`,onClick:()=>{r.value=`doubleClick`},children:`doubleClick 展开`}),A(`button`,{type:`button`,className:r.value===!1?`btn btn-primary btn-xs`:`btn btn-ghost btn-xs`,onClick:()=>{r.value=!1},children:`只选中不展开`})]}),k(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:[A(`button`,{type:`button`,className:a.value?`btn btn-primary btn-xs`:`btn btn-ghost btn-xs`,onClick:()=>{a.value=!0},children:`ctrl/meta 追加`}),A(`button`,{type:`button`,className:a.value?`btn btn-ghost btn-xs`:`btn btn-primary btn-xs`,onClick:()=>{a.value=!1},children:`关闭追加选择`})]})]}),k(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[A(`div`,{className:`text-xs text-base-content/45`,children:`当前选择`}),A(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:n.value.map(e=>A(`span`,{className:`badge badge-outline badge-sm`,children:String(e)},String(e)))})]}),k(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`,children:[`当前组合是 expandAction=`,A(`strong`,{children:String(r.value)}),`、toggleSelect=`,A(`strong`,{children:String(a.value)}),`、rangeSelect=`,A(`strong`,{children:String(s.get())}),`。`,A(`div`,{className:`mt-3`,children:`普通点击会落成单选；打开追加后，meta / ctrl 会追加或移除选中，shift 也会启用区间选择。关闭追加时，这两类补充选择都会停用；append / replace 的差异放到下面的对照示例里单独演示。`})]})]})]})});e(()=>b(t,c,G))});let me=f(`rue:component:anchor`);o(c,me),E(()=>{let t=w(M,{title:`shift append vs shift replace`,summary:`Shift 的基础语义是先选一个节点，再 Shift 选另一个节点，中间连续区间都会选中；append / replace 只决定当前额外选择是否保持。`,tab:L.directoryRange,code:Ye,preview:k(`div`,{className:`space-y-4 not-prose`,children:[k(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`,children:[A(`div`,{children:`基础行为：先单击 alpha.ts，再按住 Shift 单击 epsilon.ts，alpha.ts 到 epsilon.ts 都会选中。`}),A(`div`,{className:`mt-2`,children:`append / replace 只影响当前额外非连续选择是否保持：重置后先单击 beta.ts，再按住 Cmd / Ctrl 单击 epsilon.ts，最后按住 Shift 单击 delta.ts。`}),A(`div`,{className:`mt-2`,children:`append 会保持 beta.ts；replace 只保持 delta.ts 到 epsilon.ts 这一段。`}),A(`button`,{type:`button`,className:`btn btn-ghost btn-xs mt-3`,onClick:ce,children:`重置两边示例`})]}),k(`div`,{className:`grid gap-4 xl:grid-cols-2`,children:[k(`div`,{className:`space-y-3 rounded-[1.4rem] border border-base-300 bg-base-100 p-4 shadow-sm`,children:[k(`div`,{className:`flex items-center justify-between gap-3`,children:[k(`div`,{children:[A(`div`,{className:`text-sm font-semibold`,children:`rangeSelect="append"`}),A(`div`,{className:`text-xs text-base-content/55`,children:`保持原先的非连续选择，再并入新的 shift 区间。`})]}),A(`span`,{className:`badge badge-outline badge-sm`,children:`append`})]}),A(q.DirectoryTree,{treeData:Be,selectedKeys:l.value,multiple:!0,toggleSelect:!0,rangeSelect:`append`,onSelect:e=>{l.value=e}},`append-${m.value}`),k(`div`,{className:`rounded-box border border-base-300 bg-base-100 px-4 py-3 text-sm text-base-content/70`,children:[A(`div`,{className:`text-xs text-base-content/45`,children:`当前选择`}),A(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:l.value.length?l.value.map(e=>A(`span`,{className:`badge badge-outline badge-sm`,children:String(e)},String(e))):A(`span`,{className:`text-sm text-base-content/55`,children:`还没有选择`})})]})]}),k(`div`,{className:`space-y-3 rounded-[1.4rem] border border-base-300 bg-base-100 p-4 shadow-sm`,children:[k(`div`,{className:`flex items-center justify-between gap-3`,children:[k(`div`,{children:[A(`div`,{className:`text-sm font-semibold`,children:`rangeSelect="replace"`}),A(`div`,{className:`text-xs text-base-content/55`,children:`只保持新的 shift 区间，基础的非连续选择会被替换掉。`})]}),A(`span`,{className:`badge badge-primary badge-outline badge-sm`,children:`replace`})]}),A(q.DirectoryTree,{treeData:Be,selectedKeys:u.value,multiple:!0,toggleSelect:!0,rangeSelect:`replace`,onSelect:e=>{u.value=e}},`replace-${m.value}`),k(`div`,{className:`rounded-box border border-base-300 bg-base-100 px-4 py-3 text-sm text-base-content/70`,children:[A(`div`,{className:`text-xs text-base-content/45`,children:`当前选择`}),A(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:u.value.length?u.value.map(e=>A(`span`,{className:`badge badge-outline badge-sm`,children:String(e)},String(e))):A(`span`,{className:`text-sm text-base-content/55`,children:`还没有选择`})})]})]})]})]})});e(()=>b(t,c,me))});let he=f(`rue:component:anchor`);o(c,he),E(()=>{let t=w(M,{title:`父子联动与半选态`,summary:`这一块只看级联勾选和 halfChecked，不再混入 disabled / disableCheckbox，点击父节点时能直接看到整棵子树联动。`,tab:L.checkable,code:We,preview:k(`div`,{className:`space-y-4 not-prose`,children:[A(q,{treeData:Ie,selectedKeys:_.value,checkedKeys:v.value,checkable:!0,defaultExpandAll:!0,showLine:!0,blockNode:!0,onSelect:e=>{_.value=e},onCheck:(e,t)=>{v.value=tt(e),x.value=nt(e,t)}}),k(`div`,{className:`grid gap-3 md:grid-cols-3`,children:[k(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[A(`div`,{className:`text-xs text-base-content/45`,children:`selectedKeys`}),A(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:_.value.length?_.value.map(e=>A(`span`,{className:`badge badge-outline badge-sm`,children:String(e)},String(e))):A(`span`,{className:`text-sm text-base-content/55`,children:`当前没有选中节点`})})]}),k(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[A(`div`,{className:`text-xs text-base-content/45`,children:`checkedKeys`}),A(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:v.value.map(e=>A(`span`,{className:`badge badge-primary badge-outline badge-sm`,children:String(e)},String(e)))})]}),k(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[A(`div`,{className:`text-xs text-base-content/45`,children:`halfCheckedKeys`}),A(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:x.value.length?x.value.map(e=>A(`span`,{className:`badge badge-ghost badge-sm`,children:String(e)},String(e))):A(`span`,{className:`text-sm text-base-content/55`,children:`当前没有半选`})})]})]})]})});e(()=>b(t,c,he))});let ge=f(`rue:component:anchor`);o(c,ge),E(()=>{let t=w(M,{title:`禁用节点与禁用复选框`,summary:`把 disabled 和 disableCheckbox 单独拆出来看：前者整节点只读，后者只禁用勾选框，不再干扰联动示例。`,tab:L.checkableDisabled,code:Ge,preview:k(`div`,{className:`grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`,children:[A(q,{treeData:Le,checkedKeys:C.value,checkable:!0,defaultExpandAll:!0,showLine:!0,blockNode:!0,onCheck:e=>{C.value=tt(e)}}),k(`div`,{className:`space-y-3`,children:[k(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[A(`div`,{className:`text-xs text-base-content/45`,children:`当前勾选`}),A(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:C.value.length?C.value.map(e=>A(`span`,{className:`badge badge-outline badge-sm`,children:String(e)},String(e))):A(`span`,{className:`text-sm text-base-content/55`,children:`当前没有勾选`})})]}),k(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm text-sm text-base-content/75`,children:[A(`div`,{className:`font-medium text-base-content`,children:`disabled`}),A(`div`,{className:`mt-2`,children:`整节点不可展开、不可选中、不可勾选，适合只读目录或冻结配置。`})]}),k(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm text-sm text-base-content/75`,children:[A(`div`,{className:`font-medium text-base-content`,children:`disableCheckbox`}),A(`div`,{className:`mt-2`,children:`节点仍能展示和展开，但复选框不会参与交互，适合“只可浏览不可授权”的条目。`})]})]})]})});e(()=>b(t,c,ge))});let _e=f(`rue:component:anchor`);o(c,_e),E(()=>{let t=w(M,{title:`Simple Mode + Search`,summary:`扁平数据直入后，内置搜索会保持命中节点的祖先链，不会把层级上下文切断。`,tab:L.simple,code:Ke,preview:k(`div`,{className:`grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`,children:[A(q,{treeData:Re,treeDataSimpleMode:{id:`nodeId`,pId:`parentId`,rootPId:0},fieldNames:{title:`name`,key:`code`},selectedKeys:ee.value,allowSearch:!0,defaultExpandAll:!0,onSelect:e=>{ee.value=e}}),k(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`,children:[`当前选中：`,A(`code`,{children:JSON.stringify(ee.value)}),A(`div`,{className:`mt-3`,children:`这类 simple mode 很适合后端直接给 id / pId 的菜单、流程节点和权限项，不需要再先做一遍树转换。`})]})]})});e(()=>b(t,c,_e))});let ve=f(`rue:component:anchor`);o(c,ve),E(()=>{let t=w(M,{title:`Async Load 与自定义标题`,summary:`第一次展开时再拉子节点，同时用 titleRender 和 icon 把状态信息塞回每一行。`,tab:L.async,code:qe,preview:k(`div`,{className:`grid gap-4 not-prose lg:grid-cols-[minmax(0,26rem),1fr] lg:items-start`,children:[A(q,{treeData:ae.value,selectedKeys:O.value,expandedKeys:te.value,loadData:se,showLine:!0,showIcon:!0,blockNode:!0,titleRender:({node:e,loading:t})=>k(`div`,{className:`flex min-w-0 items-center justify-between gap-3`,children:[A(`span`,{className:`truncate`,children:e.title}),A(`span`,{className:`badge badge-ghost badge-xs`,children:t?`loading`:e.children.length?`branch`:`leaf`})]}),onSelect:e=>{O.value=e},onExpand:e=>{te.value=e}}),k(`div`,{className:`space-y-3`,children:[k(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[A(`div`,{className:`text-xs text-base-content/45`,children:`expandedKeys`}),A(`div`,{className:`mt-2 text-sm text-base-content/75`,children:JSON.stringify(te.value)})]}),k(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[A(`div`,{className:`text-xs text-base-content/45`,children:`selectedKeys`}),A(`div`,{className:`mt-2 text-sm text-base-content/75`,children:JSON.stringify(O.value)})]}),A(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`,children:`展开 release-bus 后才会注入桌面端和移动端节点，适合远端目录、超大权限树和发布范围配置。`})]})]})});e(()=>b(t,c,ve))});let K=y(`div`,c);o(c,K),d(K,`not-prose mt-10 space-y-2`);let ye=y(`h2`,K);o(K,ye),d(ye,`text-2xl font-semibold`),o(ye,S(`更重交互`));let be=y(`p`,K);o(K,be),d(be,`text-sm text-base-content/70`),o(be,S(`当 Tree 既要承载拖拽整理，又要承载超长数据时，draggable 和 virtual 就是两个最关键的控制面。`));let xe=f(`rue:component:anchor`);o(c,xe),E(()=>{let t=w(M,{title:`allowDrop 策略与拖拽占位`,summary:`allowDrop 可以把 folder / file 的落点规则写清楚；hover 时 Tree 会直接给出插前、插后或放入占位提示。`,tab:L.drag,code:Xe,preview:k(`div`,{className:`grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`,children:[A(q,{treeData:ne.value,draggable:!0,blockNode:!0,defaultExpandAll:!0,allowDrop:({dropNode:e,dropToGap:t})=>t||e.raw.kind!==`file`,titleRender:({node:e})=>k(`div`,{className:`flex min-w-0 items-center justify-between gap-3`,children:[A(`span`,{className:`truncate`,children:e.title}),A(`span`,{className:e.raw.kind===`folder`?`badge badge-ghost badge-xs`:`badge badge-outline badge-xs`,children:e.raw.kind})]}),onDrop:e=>{ne.value=ot(ne.value,e),re.value=`${String(e.dragNode.key)} -> ${String(e.node.key)} (${e.dropToGap?e.dropPosition<0?`before`:`after`:`inside`})`}}),k(`div`,{className:`space-y-3`,children:[k(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[A(`div`,{className:`text-xs text-base-content/45`,children:`最近一次拖拽`}),A(`div`,{className:`mt-2 text-sm text-base-content/75`,children:re.value})]}),k(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[A(`div`,{className:`text-xs text-base-content/45`,children:`allowDrop 规则`}),k(`div`,{className:`mt-2 grid gap-2 text-sm text-base-content/75`,children:[A(`div`,{children:`folder：允许放入，也允许插前 / 插后。`}),A(`div`,{children:`file：只允许插前 / 插后，不允许作为 inside 目标。`})]})]}),A(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`,children:`拖到 folder 正中央会看到“放入”，拖到行的上沿或下沿则会出现“插前 / 插后”；如果目标是 file，inside 落点会被 allowDrop 直接拦掉。`})]})]})});e(()=>b(t,c,xe))});let Se=f(`rue:component:anchor`);o(c,Se),E(()=>{let t=w(M,{title:`Virtual Scroll`,summary:`长列表下只渲染可见窗口，height 和 itemHeight 负责限定视口和估算切片范围。`,tab:L.virtual,code:Ze,preview:k(`div`,{className:`grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`,children:[A(q,{treeData:He,selectedKeys:N.value,height:320,itemHeight:42,virtual:!0,blockNode:!0,onSelect:e=>{N.value=e}}),k(`div`,{className:`space-y-3`,children:[k(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[A(`div`,{className:`text-xs text-base-content/45`,children:`数据量`}),A(`div`,{className:`mt-2 text-2xl font-semibold`,children:He.length})]}),k(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[A(`div`,{className:`text-xs text-base-content/45`,children:`当前选中`}),A(`div`,{className:`mt-2 text-sm text-base-content/75`,children:JSON.stringify(N.value)})]}),A(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`,children:`对文档页目录、埋点树、批量资源目录这种长列表场景，虚拟滚动能显著降低初始渲染压力。`})]})]})});e(()=>b(t,c,Se))});let Ce=f(`rue:component:anchor`);o(c,Ce),E(()=>{let t=w(M,{title:`Virtual + Async Load 场景页`,summary:`把 virtual、height、itemHeight 和 loadData 合在一起，就能接超长目录或资源树，只在展开分支时再注入子节点。`,tab:L.virtualAsync,code:Qe,preview:k(`div`,{className:`grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`,children:[A(q,{treeData:P.value,selectedKeys:ie.value,expandedKeys:F.value,height:340,itemHeight:40,virtual:!0,showIcon:!0,blockNode:!0,loadData:R,titleRender:({node:e,loading:t})=>k(`div`,{className:`flex min-w-0 items-center justify-between gap-3`,children:[A(`span`,{className:`truncate`,children:e.title}),A(`span`,{className:`badge badge-ghost badge-xs`,children:t?`loading`:e.children.length?`loaded`:e.isLeaf?`leaf`:`lazy`})]}),onSelect:e=>{ie.value=e},onExpand:e=>{F.value=e}}),k(`div`,{className:`space-y-3`,children:[k(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[A(`div`,{className:`text-xs text-base-content/45`,children:`根节点数量`}),A(`div`,{className:`mt-2 text-2xl font-semibold`,children:P.value.length})]}),k(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[A(`div`,{className:`text-xs text-base-content/45`,children:`已加载分支`}),A(`div`,{className:`mt-2 text-2xl font-semibold`,children:I.get()})]}),k(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[A(`div`,{className:`text-xs text-base-content/45`,children:`当前展开`}),A(`div`,{className:`mt-2 text-sm text-base-content/75`,children:JSON.stringify(F.value)})]}),A(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`,children:`先滚动到较深位置再展开节点也没问题：视口外的行不会真正渲染，只有命中的 branch 才会触发 loadData 注入子节点。`})]})]})});e(()=>b(t,c,Ce))});let we=f(`rue:component:anchor`);o(c,we),E(()=>{let t=w(M,{title:`展示基础递归 示例`,summary:`基础的 TreeView 行为没有删掉，只是并进 design 页面里，方便对比“直接改数据”这类递归写法。`,tab:L.legacy,code:$e,preview:A(`div`,{className:`card border border-base-200/80 bg-base-100 shadow-sm not-prose`,children:k(`div`,{className:`card-body grid gap-4 lg:grid-cols-[minmax(0,1fr),18rem] lg:items-start`,children:[A(`ul`,{className:`m-0 grid gap-1 p-0`,children:A(lt,{model:oe})}),A(`div`,{className:`rounded-box border border-base-300 bg-base-200/40 p-4 text-sm text-base-content/70`,children:`单击切换展开，双击叶子节点会把它转换成 folder，并在当前层直接追加一个新子节点。`})]})})});e(()=>b(t,c,we))});let Te=y(`div`,c);o(c,Te),d(Te,`not-prose mt-10 space-y-4`);let Ee=y(`h2`,Te);o(Te,Ee),d(Ee,`text-2xl font-semibold`),o(Ee,S(`API`));let De=f(`rue:component:anchor`);return o(Te,De),E(()=>{let t=w(Pe,{rows:et});e(()=>b(t,Te,De))}),i})}),c,p),c})};export{ut as default};