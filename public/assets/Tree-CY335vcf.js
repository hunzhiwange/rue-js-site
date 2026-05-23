import{$ as e,Et as t,G as n,H as r,J as i,K as a,V as o,W as s,_t as c,at as l,d as u,dt as d,gt as f,kt as p,l as m,ot as h,q as g,rt as _,st as v,t as y,tt as b,u as x,ut as S,xt as C}from"./vapor-runtime-EUvELKQT.js";import{a as w,n as T}from"./vapor-helpers-vapor-C_FztvJU.js";import{n as E,t as D}from"./src-BI4ToZNE.js";import{n as O}from"./SidebarPlaygroundDesign-BhpZ4x80.js";import{t as k}from"./PreviewBlock-DMzC-yBe.js";var ee=({render:e})=>e(),A={title:`title`,key:`key`,children:`children`,disabled:`disabled`,selectable:`selectable`,checkable:`checkable`,disableCheckbox:`disableCheckbox`,isLeaf:`isLeaf`,icon:`icon`,className:`className`,id:`id`,pId:`pId`},j=(...e)=>e.filter(Boolean).join(` `),M=e=>typeof e==`object`&&!!e&&!Array.isArray(e),N=e=>typeof e==`string`||typeof e==`number`,P=e=>`${typeof e}:${String(e)}`,F=e=>{let t=[],n=new Set;return(e??[]).forEach(e=>{let r=P(e);n.has(r)||(n.add(r),t.push(e))}),t},I=(e,t)=>e?t?`${e} ${t}`:e:t??``,L=(e,t,n)=>e[n?.[t]??A[t]],te=(e,t)=>L(e,`title`,t)??e.title??e.key,R=e=>new Set(F(e).map(P)),ne=e=>e==null||typeof e==`boolean`?``:typeof e==`string`||typeof e==`number`?String(e):Array.isArray(e)?e.map(e=>ne(e)).filter(Boolean).join(` `):typeof e==`object`?[`title`,`label`,`name`,`text`,`description`,`children`].map(t=>ne(e[t])).filter(Boolean).join(` `):``,re=(e,t,n)=>{if(!t)return e;let r=M(t)?t:void 0,i=r?.id??n?.id??A.id,a=r?.pId??n?.pId??A.pId,o=r?.rootPId??0,s=n?.children??A.children,c=new Map;e.forEach((e,t)=>{let n=e[i]??e.key??t;c.set(n,{...e,[s]:[]})});let l=[];return e.forEach((e,t)=>{let n=e[i]??e.key??t,r=e[a],u=c.get(n);if(!u)return;if(r==null||r===o||!c.has(r)){l.push(u);return}let d=c.get(r);if(!d){l.push(u);return}let f=d[s]??[];f.push(u),d[s]=f}),l},z=(e,t)=>{let n=[],r={},i=(e,a,o,s)=>{let c=L(e,`key`,t),l=N(c)?c:o,u=P(l),d=L(e,`isLeaf`,t),f={key:l,keyText:u,title:te(e,t),depth:a,children:[],raw:e,disabled:!!L(e,`disabled`,t),selectable:L(e,`selectable`,t)!==!1,checkable:L(e,`checkable`,t)!==!1,disableCheckbox:!!L(e,`disableCheckbox`,t),isLeaf:!1,className:L(e,`className`,t),icon:L(e,`icon`,t),parentKeyText:s};n.push(f),r[u]=f;let p=L(e,`children`,t);return f.children=Array.isArray(p)?p.map((e,t)=>i(e,a+1,`${o}-${t}`,u)):[],f.isLeaf=d===!0?!0:d===!1?!1:f.children.length===0,f};return{roots:e.map((e,t)=>i(e,0,`node-${t}`)),flat:n,byKeyText:r}},ie=e=>{let t=[],n=e=>{!e.disabled&&e.checkable&&!e.disableCheckbox&&t.push(e.keyText),e.children.forEach(e=>n(e))};return n(e),t},ae=e=>{let t=[],n=e=>{t.push(e.key),e.children.forEach(e=>n(e))};return n(e),t},oe=(e,t,n)=>{let r=new Set,i=new Set,a={},o=e=>{let s=!e.disabled&&e.checkable&&!e.disableCheckbox,c=e.children.map(e=>o(e)).filter(e=>e.participates),l=t.has(e.keyText),u=l,d=!1;if(!n&&c.length>0){let e=c.every(e=>e.checked),t=c.some(e=>e.checked||e.halfChecked);u=l||e,d=!u&&t}let f={checked:u,halfChecked:d,participates:s||c.length>0};return a[e.keyText]=f,u&&s&&r.add(e.keyText),d&&s&&i.add(e.keyText),f};return e.forEach(e=>o(e)),{checkedKeys:r,halfCheckedKeys:i,stateMap:a}},se=(e,t,n,r)=>{let i=new Set(e),a=new Set(t),o=n.filter(e=>i.has(e.keyText)).map(e=>e.key).filter(N);return r?{checked:o,halfChecked:n.filter(e=>a.has(e.keyText)).map(e=>e.key).filter(N)}:o},ce=(e,t,n,r)=>{if(!n){let n=[],r=e=>{n.push({node:e,matched:!1}),t.has(e.keyText)&&e.children.forEach(e=>r(e))};return e.forEach(e=>r(e)),n}let i=e=>{let t=r(e),n=e.children.flatMap(e=>i(e));if(!t&&n.length===0)return[];if(t){let t=[{node:e,matched:!0}],n=e=>{t.push({node:e,matched:!1}),e.children.forEach(e=>n(e))};return e.children.forEach(e=>n(e)),t}return[{node:e,matched:!1},...n]};return e.flatMap(e=>i(e))},B=(e,t,n)=>t?typeof n==`function`?n(t,e):n===!1?!0:ne(e.title).toLowerCase().includes(t.toLowerCase()):!0,le=(e,t,n)=>{let r=t.parentKeyText;for(;r;){if(r===e.keyText)return!0;r=n[r]?.parentKeyText}return!1},ue=e=>{let t=!!e,n=M(e)?e:void 0;return{enabled:t,icon:n?.icon,nodeDraggable:r=>t?typeof e==`function`?e(r):n&&typeof n.nodeDraggable==`function`?n.nodeDraggable(r):!0:!1}},de=(e,t,n,r,i)=>{if(!i||!n||!r)return{items:e,topSpacer:0,bottomSpacer:0};let a=r+4,o=Math.max(1,Math.ceil(n/a))+12,s=Math.max(0,e.length-o),c=Math.min(s,Math.max(0,Math.floor(t/a)-6)),l=Math.min(e.length,c+o);return{items:e.slice(c,l),topSpacer:c*a,bottomSpacer:Math.max(0,(e.length-l)*a)}},V=e=>{if(e===-1)return`before`;if(e===1)return`after`;if(e===0)return`inside`},fe=(e,t)=>e.map(e=>t[e]?.key).filter(N),pe=(e,t)=>{if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0},me=e=>{switch(e){case`small`:case`sm`:return{headerPadding:`px-4 py-3`,bodyPadding:`px-3 py-3`,rowPadding:`py-1.5`,textClass:`text-sm`,rowMinHeight:36,rowEstimate:42};case`large`:case`lg`:return{headerPadding:`px-5 py-4`,bodyPadding:`px-4 py-4`,rowPadding:`py-2.5`,textClass:`text-[0.95rem]`,rowMinHeight:44,rowEstimate:50};default:return{headerPadding:`px-4 py-3.5`,bodyPadding:`px-3.5 py-3.5`,rowPadding:`py-2`,textClass:`text-sm`,rowMinHeight:40,rowEstimate:46}}},he=e=>{switch(e){case`error`:return`border-error/55 shadow-[0_0_0_1px_rgba(248,113,113,0.14)]`;case`warning`:return`border-warning/55 shadow-[0_0_0_1px_rgba(251,191,36,0.14)]`;default:return``}},ge=t=>u(n=>{let i=a(`span`,n);e(i,`aria-hidden`,`true`),p(()=>{b(i,String(j(`inline-flex size-4 items-center justify-center text-base-content/55 transition-transform duration-150`,t.expanded&&`rotate-90`,t.hidden&&`opacity-0`)))});let o=a(`svg`,i);r(i,o),e(o,`viewBox`,`0 0 20 20`),e(o,`fill`,`none`),b(o,`size-4`);let s=a(`path`,o);return r(o,s),e(s,`d`,`M7.5 5.5L12.5 10L7.5 14.5`),e(s,`stroke`,`currentColor`),e(s,`strokeWidth`,`1.8`),e(s,`strokeLinecap`,`round`),e(s,`strokeLinejoin`,`round`),i}),_e=()=>u(t=>{let n=a(`span`,t);return b(n,`loading loading-spinner loading-xs text-base-content/55`),e(n,`aria-hidden`,`true`),n}),ve=()=>u(t=>{let n=a(`svg`,t);e(n,`viewBox`,`0 0 20 20`),e(n,`fill`,`currentColor`),b(n,`size-4`);let i=a(`circle`,n);r(n,i),e(i,`cx`,`6`),e(i,`cy`,`5`),e(i,`r`,`1.2`);let o=a(`circle`,n);r(n,o),e(o,`cx`,`6`),e(o,`cy`,`10`),e(o,`r`,`1.2`);let s=a(`circle`,n);r(n,s),e(s,`cx`,`6`),e(s,`cy`,`15`),e(s,`r`,`1.2`);let c=a(`circle`,n);r(n,c),e(c,`cx`,`13`),e(c,`cy`,`5`),e(c,`r`,`1.2`);let l=a(`circle`,n);r(n,l),e(l,`cx`,`13`),e(l,`cy`,`10`),e(l,`r`,`1.2`);let u=a(`circle`,n);return r(n,u),e(u,`cx`,`13`),e(u,`cy`,`15`),e(u,`r`,`1.2`),n}),ye=t=>u(i=>{let o=a(`svg`,i);e(o,`viewBox`,`0 0 24 24`),e(o,`fill`,`none`),b(o,`size-5`);let c=s(`rue:slot:anchor`);return r(o,c),p(()=>{let i=t.expanded?u(()=>{let t=n(),i=a(`path`,t);return r(t,i),e(i,`d`,`M3 8.5a2 2 0 0 1 2-2h4l1.4 1.5H19a2 2 0 0 1 1.9 2.6l-1.4 5A2 2 0 0 1 17.6 17H6a2 2 0 0 1-1.93-1.48L3 8.5Z`),e(i,`stroke`,`currentColor`),e(i,`strokeWidth`,`1.6`),e(i,`strokeLinejoin`,`round`),t}):u(()=>{let t=n(),i=a(`path`,t);return r(t,i),e(i,`d`,`M3 7.5a2 2 0 0 1 2-2h4l1.4 1.5H19a2 2 0 0 1 2 2V16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7.5Z`),e(i,`stroke`,`currentColor`),e(i,`strokeWidth`,`1.6`),e(i,`strokeLinejoin`,`round`),t});C(()=>m(i,o,c))}),o}),be=()=>u(t=>{let n=a(`svg`,t);e(n,`viewBox`,`0 0 24 24`),e(n,`fill`,`none`),b(n,`size-5`);let i=a(`path`,n);r(n,i),e(i,`d`,`M8 3.5h6l4 4V19a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5.5a2 2 0 0 1 2-2Z`),e(i,`stroke`,`currentColor`),e(i,`strokeWidth`,`1.6`),e(i,`strokeLinejoin`,`round`);let o=a(`path`,n);return r(n,o),e(o,`d`,`M14 3.5V8h4`),e(o,`stroke`,`currentColor`),e(o,`strokeWidth`,`1.6`),e(o,`strokeLinejoin`,`round`),n}),xe=f=>{let{__rue_rest_omit_0:x,__rue_rest_omit_1:E,__rue_rest_omit_2:O,__rue_rest_omit_3:k,__rue_rest_omit_4:A,__rue_rest_omit_5:M,__rue_rest_omit_6:L,__rue_rest_omit_7:te,__rue_rest_omit_8:ne,__rue_rest_omit_9:xe,__rue_rest_omit_10:H,__rue_rest_omit_11:U,__rue_rest_omit_12:Se,__rue_rest_omit_13:Ce,__rue_rest_omit_14:we,__rue_rest_omit_15:Te,__rue_rest_omit_16:Ee,__rue_rest_omit_17:De,__rue_rest_omit_18:Oe,__rue_rest_omit_19:ke,__rue_rest_omit_20:Ae,__rue_rest_omit_21:je,__rue_rest_omit_22:Me,__rue_rest_omit_23:Ne,__rue_rest_omit_24:Pe,__rue_rest_omit_25:Fe,__rue_rest_omit_26:Ie,__rue_rest_omit_27:Le,__rue_rest_omit_28:Re,__rue_rest_omit_29:ze,__rue_rest_omit_30:Be,__rue_rest_omit_31:Ve,__rue_rest_omit_32:He,__rue_rest_omit_33:Ue,__rue_rest_omit_34:We,__rue_rest_omit_35:Ge,__rue_rest_omit_36:W,__rue_rest_omit_37:Ke,__rue_rest_omit_38:qe,__rue_rest_omit_39:Je,__rue_rest_omit_40:Ye,__rue_rest_omit_41:G,__rue_rest_omit_42:Xe,__rue_rest_omit_43:Ze,__rue_rest_omit_44:Qe,__rue_rest_omit_45:$e,__rue_rest_omit_46:et,__rue_rest_omit_47:tt,__rue_rest_omit_48:nt,__rue_rest_omit_49:rt,__rue_rest_omit_50:K,__rue_rest_omit_51:it,__rue_rest_omit_52:at,__rue_rest_omit_53:ot,__rue_rest_omit_54:st,rest:ct,sourceTreeData:lt,normalizedTree:ut,componentSize:q,dragConfig:dt,initialExpandedKeys:ft,uncontrolledSelectedKeysRef:pt,uncontrolledCheckedKeysRef:mt,uncontrolledExpandedKeysRef:ht,controlledCheckedKeyTextsRef:gt,searchValueRef:J,loadingKeyTextsRef:Y,scrollTopRef:_t,directoryLastSelectedKeyTextRef:vt,directoryCachedSelectedKeyTextsRef:yt,dragStateRef:X,dragHoverDepthRef:bt,mergedSelectedKeys:xt,mergedExpandedKeys:St,mergedSearchValue:Z,mergedCheckedKeyTexts:Ct,selectedKeyTextSet:Q,expandedKeyTextSet:wt,checkState:$,visibleNodes:Tt,estimatedRowHeight:Et,viewportHeight:Dt,fixedVirtualRowHeight:Ot,virtualSlice:kt,emitExpand:At,commitSelectedKeys:jt,commitCheckedKeys:Mt,toggleExpanded:Nt,handleExpandToggle:Pt,selectTreeNode:Ft,handleCheck:It,handleSearchInput:Lt,handleBodyScroll:Rt,clearDragHoverState:zt,setDragHoverState:Bt,updateDragHoverDepth:Vt,resetDragState:Ht,resolveDropContext:Ut,handleDragStartNode:Wt,handleDragEnterNode:Gt,handleDragOverNode:Kt,handleDragLeaveNode:qt,handleDragEndNode:Jt,handleDropNode:Yt,renderSwitcher:Xt,renderDragHandle:Zt,renderGapPlaceholder:Qt,renderNodeIcon:$t,handleLabelActivate:en,bodyViewportStyle:tn}=w(`useSetup:0:0:dup2`,()=>t(()=>{let{className:i,style:o,treeData:h,fieldNames:_,treeDataSimpleMode:v,selectedKeys:x,defaultSelectedKeys:T,checkedKeys:E,defaultCheckedKeys:O,expandedKeys:k,defaultExpandedKeys:ee,defaultExpandAll:A,multiple:M,checkable:L,checkStrictly:te,showLine:ne,showIcon:V,blockNode:he,selectable:xe,disabled:H,size:U,status:Se,draggable:Ce,allowDrop:we,virtual:Te,height:Ee,itemHeight:De,titleRender:Oe,switcherIcon:ke,icon:Ae,filterTreeNode:je,searchValue:Me,defaultSearchValue:Ne,searchPlaceholder:Pe,allowSearch:Fe,loadData:Ie,emptyText:Le,onSelect:Re,onCheck:ze,onExpand:Be,onSearch:Ve,onDoubleClick:He,onDragStart:Ue,onDragEnter:We,onDragOver:Ge,onDragLeave:W,onDragEnd:Ke,onDrop:qe,onScroll:Je,classNames:Ye,styles:G,directoryMode:Xe,expandAction:Ze,toggleSelect:Qe,rangeSelect:$e,...et}=f,tt=w(`computed:1:0`,()=>d(()=>re(f.treeData===void 0?[]:f.treeData,f.treeDataSimpleMode,f.fieldNames))),nt=tt,rt=w(`computed:1:1`,()=>d(()=>z(nt.get(),f.fieldNames))),K=rt,it=w(`computed:1:2`,()=>d(()=>me(f.size))),at=it,ot=w(`computed:1:3`,()=>d(()=>ue(f.draggable))),st=ot,ct=f.defaultExpandAll?K.get().flat.filter(e=>e.children.length>0||!e.isLeaf).map(e=>e.key):f.defaultExpandedKeys??[],lt=w(`ref:1:4`,()=>c(F(f.defaultSelectedKeys??f.selectedKeys))),ut=w(`ref:1:5`,()=>c(F(f.defaultCheckedKeys))),q=w(`ref:1:6`,()=>c(F(ct))),dt=w(`ref:1:7`,()=>c(f.checkedKeys===void 0?new Set:Array.isArray(f.checkedKeys)?R(f.checkedKeys):R(f.checkedKeys.checked))),ft=w(`ref:1:8`,()=>c(f.defaultSearchValue??``)),pt=w(`ref:1:9`,()=>c([])),mt=w(`ref:1:10`,()=>c(0)),ht=w(`ref:1:11`,()=>c(null)),gt=w(`ref:1:12`,()=>c([])),J=w(`ref:1:13`,()=>c({})),Y=w(`ref:1:14`,()=>c({}));if(f.checkedKeys!==void 0){let e=Array.isArray(f.checkedKeys)?R(f.checkedKeys):R(f.checkedKeys.checked);pe(dt.value,e)||(dt.value=e)}let _t=w(`computed:1:15`,()=>d(()=>f.selectedKeys===void 0?lt.value:F(f.selectedKeys))),vt=_t,yt=w(`computed:1:16`,()=>d(()=>f.expandedKeys===void 0?q.value:F(f.expandedKeys))),X=yt,bt=w(`computed:1:17`,()=>d(()=>f.searchValue===void 0?ft.value:f.searchValue)),xt=bt,St=f.checkedKeys===void 0?R(ut.value):dt.value,Z=w(`computed:1:18`,()=>d(()=>R(vt.get()))),Ct=Z,Q=w(`computed:1:19`,()=>d(()=>R(X.get()))),wt=Q,$=w(`computed:1:20`,()=>d(()=>oe(K.get().roots,St,!!f.checkStrictly))),Tt=$,Et=w(`computed:1:21`,()=>d(()=>ce(K.get().roots,wt.get(),xt.get(),e=>B(e,xt.get(),f.filterTreeNode)))),Dt=Et,Ot=w(`computed:1:22`,()=>d(()=>f.itemHeight??at.get().rowEstimate)),kt=Ot,At=w(`computed:1:23`,()=>d(()=>typeof f.height==`number`&&f.height>0?f.height:void 0)),jt=At,Mt=w(`computed:1:24`,()=>d(()=>(f.virtual===void 0?!0:f.virtual)!==!1&&jt.get()&&typeof f.itemHeight==`number`&&f.itemHeight>0?f.itemHeight:void 0)),Nt=w(`computed:1:25`,()=>d(()=>de(Dt.get(),mt.value,jt.get(),kt.get(),(f.virtual===void 0?!0:f.virtual)!==!1&&!!jt.get()))),Pt=(e,t,n)=>{let r=F(e);return f.expandedKeys===void 0&&(q.value=r),f.onExpand&&f.onExpand(r,{node:t,expanded:r.some(e=>P(e)===t.keyText),nativeEvent:n}),r},Ft=(e,t,n)=>{let r=F(e).filter(e=>K.get().byKeyText[P(e)]),i=r.map(e=>K.get().byKeyText[P(e)]).filter(Boolean);f.selectedKeys===void 0&&(lt.value=r),f.onSelect&&f.onSelect(r,{node:t,nativeEvent:n,selected:r.some(e=>P(e)===t.keyText),selectedNodes:i})},It=(e,t,n)=>{let r=oe(K.get().roots,e,!!f.checkStrictly),i=se(Array.from(r.checkedKeys),Array.from(r.halfCheckedKeys),K.get().flat,!!f.checkStrictly);f.checkedKeys===void 0?ut.value=f.checkStrictly?i.checked:i:dt.value=new Set(r.checkedKeys),f.onCheck&&f.onCheck(i,{node:t,nativeEvent:n,checked:r.checkedKeys.has(t.keyText),checkedNodes:Array.from(r.checkedKeys).map(e=>K.get().byKeyText[e]).filter(Boolean),halfCheckedKeys:Array.from(r.halfCheckedKeys).map(e=>K.get().byKeyText[e]?.key).filter(N)})},Lt=async(e,t)=>{if(f.disabled||e.disabled)return X.get();let n=wt.get().has(e.keyText),r=n?X.get().filter(t=>P(t)!==e.keyText):[...X.get(),e.key];if(!n&&f.loadData&&!e.isLeaf&&e.children.length===0&&!pt.value.includes(e.keyText)){pt.value=[...pt.value,e.keyText];try{await f.loadData(e)}finally{pt.value=pt.value.filter(t=>t!==e.keyText)}}return Pt(r,e,t)},Rt=(e,t)=>{t.preventDefault(),t.stopPropagation(),Lt(e,t)},zt=(e,t)=>{if(!(f.disabled||e.disabled||!(f.selectable===void 0||f.selectable)||!e.selectable)){if(f.directoryMode){let n=!!f.multiple&&!!(f.toggleSelect===void 0||f.toggleSelect)&&!!(t?.ctrlKey||t?.metaKey),r=!!f.multiple&&(f.rangeSelect===void 0?`append`:f.rangeSelect)!==!1&&!!t?.shiftKey&&!!ht.value;if(f.multiple&&r){let n=Dt.get().map(e=>e.node.keyText),r=ht.value??e.keyText,i=n.indexOf(r),a=n.indexOf(e.keyText),o=Math.min(i,a),s=Math.max(i,a),c=n.slice(o,s+1),l=(f.rangeSelect===void 0?`append`:f.rangeSelect)===`append`?gt.value.length?gt.value:vt.get().map(P):[];Ft(fe(Array.from(new Set([...l,...c])),K.get().byKeyText),e,t);return}if(f.multiple&&n){let n=Ct.get().has(e.keyText)?vt.get().filter(t=>P(t)!==e.keyText):[...vt.get(),e.key];ht.value=e.keyText,gt.value=n.map(P),Ft(n,e,t);return}ht.value=e.keyText,gt.value=[e.keyText],Ft([e.key],e,t);return}if(f.multiple){Ft(Ct.get().has(e.keyText)?vt.get().filter(t=>P(t)!==e.keyText):[...vt.get(),e.key],e,t);return}Ft(Ct.get().has(e.keyText)?[]:[e.key],e,t)}},Bt=(e,t)=>{if(t.preventDefault(),t.stopPropagation(),f.disabled||e.disabled||!e.checkable||e.disableCheckbox)return;let n=new Set(St),r=Tt.get().checkedKeys.has(e.keyText);if(f.checkStrictly)r?n.delete(e.keyText):n.add(e.keyText);else{let t=ie(e);r?t.forEach(e=>n.delete(e)):t.forEach(e=>n.add(e))}It(n,e,t)},Vt=e=>{f.searchValue===void 0&&(ft.value=e),f.onSearch&&f.onSearch(e)},Ht=e=>{mt.value=e.currentTarget.scrollTop,f.onScroll&&f.onScroll(e)},Ut=e=>{!e||J.value.overKeyText!==e||(J.value={dragKeyText:J.value.dragKeyText})},Wt=(e,t)=>{J.value.overKeyText===e&&J.value.dropPosition===t||(J.value={...J.value,overKeyText:e,dropPosition:t})},Gt=(e,t)=>{let n={...Y.value},r=n[e]??0,i=Math.max(r+t,0);return i>0?n[e]=i:delete n[e],Y.value=n,i},Kt=()=>{Y.value={},J.value={}},qt=(e,t,n)=>{let r=J.value.dragKeyText;if(!r)return null;let i=K.get().byKeyText[r];if(!i||i.keyText===e.keyText||le(i,e,K.get().byKeyText))return null;let a=n?.getBoundingClientRect?.(),o=`clientY`in t?t.clientY:void 0,s=0;a&&typeof o==`number`&&(o<a.top+a.height*.25?s=-1:o>a.bottom-a.height*.25&&(s=1));let c=s!==0;return f.allowDrop&&!f.allowDrop({dragNode:i,dropNode:e,dropPosition:s,dropToGap:c})?null:{dragNode:i,dropPosition:s}};return{__rue_rest_omit_0:i,__rue_rest_omit_1:o,__rue_rest_omit_2:h,__rue_rest_omit_3:_,__rue_rest_omit_4:v,__rue_rest_omit_5:x,__rue_rest_omit_6:T,__rue_rest_omit_7:E,__rue_rest_omit_8:O,__rue_rest_omit_9:k,__rue_rest_omit_10:ee,__rue_rest_omit_11:A,__rue_rest_omit_12:M,__rue_rest_omit_13:L,__rue_rest_omit_14:te,__rue_rest_omit_15:ne,__rue_rest_omit_16:V,__rue_rest_omit_17:he,__rue_rest_omit_18:xe,__rue_rest_omit_19:H,__rue_rest_omit_20:U,__rue_rest_omit_21:Se,__rue_rest_omit_22:Ce,__rue_rest_omit_23:we,__rue_rest_omit_24:Te,__rue_rest_omit_25:Ee,__rue_rest_omit_26:De,__rue_rest_omit_27:Oe,__rue_rest_omit_28:ke,__rue_rest_omit_29:Ae,__rue_rest_omit_30:je,__rue_rest_omit_31:Me,__rue_rest_omit_32:Ne,__rue_rest_omit_33:Pe,__rue_rest_omit_34:Fe,__rue_rest_omit_35:Ie,__rue_rest_omit_36:Le,__rue_rest_omit_37:Re,__rue_rest_omit_38:ze,__rue_rest_omit_39:Be,__rue_rest_omit_40:Ve,__rue_rest_omit_41:He,__rue_rest_omit_42:Ue,__rue_rest_omit_43:We,__rue_rest_omit_44:Ge,__rue_rest_omit_45:W,__rue_rest_omit_46:Ke,__rue_rest_omit_47:qe,__rue_rest_omit_48:Je,__rue_rest_omit_49:Ye,__rue_rest_omit_50:G,__rue_rest_omit_51:Xe,__rue_rest_omit_52:Ze,__rue_rest_omit_53:Qe,__rue_rest_omit_54:$e,rest:et,sourceTreeData:tt,normalizedTree:rt,componentSize:it,dragConfig:ot,initialExpandedKeys:ct,uncontrolledSelectedKeysRef:lt,uncontrolledCheckedKeysRef:ut,uncontrolledExpandedKeysRef:q,controlledCheckedKeyTextsRef:dt,searchValueRef:ft,loadingKeyTextsRef:pt,scrollTopRef:mt,directoryLastSelectedKeyTextRef:ht,directoryCachedSelectedKeyTextsRef:gt,dragStateRef:J,dragHoverDepthRef:Y,mergedSelectedKeys:_t,mergedExpandedKeys:yt,mergedSearchValue:bt,mergedCheckedKeyTexts:St,selectedKeyTextSet:Z,expandedKeyTextSet:Q,checkState:$,visibleNodes:Et,estimatedRowHeight:Ot,viewportHeight:At,fixedVirtualRowHeight:Mt,virtualSlice:Nt,emitExpand:Pt,commitSelectedKeys:Ft,commitCheckedKeys:It,toggleExpanded:Lt,handleExpandToggle:Rt,selectTreeNode:zt,handleCheck:Bt,handleSearchInput:Vt,handleBodyScroll:Ht,clearDragHoverState:Ut,setDragHoverState:Wt,updateDragHoverDepth:Gt,resetDragState:Kt,resolveDropContext:qt,handleDragStartNode:(e,t)=>{!st.get().enabled||!st.get().nodeDraggable(e)||f.disabled||e.disabled||(t.dataTransfer&&(t.dataTransfer.effectAllowed=`move`,t.dataTransfer.setData(`text/plain`,e.keyText)),Y.value={},J.value={dragKeyText:e.keyText},f.onDragStart&&f.onDragStart({event:t,node:e}))},handleDragEnterNode:(e,t)=>{if(!J.value.dragKeyText)return;Gt(e.keyText,1);let n=qt(e,t,t.currentTarget);if(!n){Ut(e.keyText);return}t.preventDefault(),Wt(e.keyText,n.dropPosition);let r=X.get();n.dropPosition===0&&!wt.get().has(e.keyText)&&(e.children.length>0||!e.isLeaf)&&(r=Pt([...X.get(),e.key],e,t)),f.onDragEnter&&f.onDragEnter({event:t,node:e,expandedKeys:r})},handleDragOverNode:(e,t)=>{if(!J.value.dragKeyText)return;let n=qt(e,t,t.currentTarget);if(!n){Ut(e.keyText);return}t.preventDefault(),t.dataTransfer&&(t.dataTransfer.dropEffect=`move`),Wt(e.keyText,n.dropPosition),f.onDragOver&&f.onDragOver({event:t,node:e})},handleDragLeaveNode:(e,t)=>{Gt(e.keyText,-1)===0&&Ut(e.keyText),f.onDragLeave&&f.onDragLeave({event:t,node:e})},handleDragEndNode:(e,t)=>{Kt(),f.onDragEnd&&f.onDragEnd({event:t,node:e})},handleDropNode:(e,t)=>{let n=qt(e,t,t.currentTarget);if(!n){Kt();return}t.preventDefault(),t.stopPropagation(),f.onDrop&&f.onDrop({event:t,node:e,dragNode:n.dragNode,dragNodesKeys:ae(n.dragNode),dropPosition:n.dropPosition,dropToGap:n.dropPosition!==0}),Kt()},renderSwitcher:(e,n,r,i,a,o)=>{let{renderProps:s}=w(`useSetup:0:0`,()=>t(()=>({renderProps:{node:e,expanded:n,selected:r,checked:i,halfChecked:a,loading:o}})));return typeof f.switcherIcon==`function`?f.switcherIcon(s):f.switcherIcon===void 0?o?D(_e,{}):D(ge,{expanded:n,hidden:e.isLeaf&&e.children.length===0}):f.switcherIcon},renderDragHandle:t=>!st.get().enabled||st.get().icon===!1||!st.get().nodeDraggable(t)?null:u(t=>{let i=a(`span`,t);e(i,`aria-hidden`,`true`),p(()=>{b(i,String(I(`inline-flex size-6 shrink-0 cursor-grab items-center justify-center rounded-lg text-base-content/35 transition group-hover:text-base-content/55`,f.classNames?.dragHandle)))}),p(()=>{let e=f.styles?.dragHandle;l(i,e)}),e(i,`data-rue-tree-drag-handle`,`true`);let o=s(`rue:slot:anchor`);return r(i,o),p(()=>{let e=st.get().icon??u(()=>{let e=n(),t=s(`rue:component:anchor`);return r(e,t),m(y(ve,{}),e,t),e});C(()=>m(e,i,o))}),i}),renderGapPlaceholder:(t,n)=>u(i=>{let o=a(`div`,i);p(()=>{b(o,String(j(`pointer-events-none absolute inset-x-0 z-10 flex items-center gap-2 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-primary/85`,n===`before`?`-top-2.5`:`-bottom-2.5`)))}),p(()=>{l(o,{paddingLeft:`${t.depth*18+20}px`})}),p(()=>{e(o,`data-rue-tree-drop-placeholder`,String(n))});let s=a(`span`,o);r(o,s),b(s,`h-[2px] flex-1 rounded-full bg-primary/60`);let c=a(`span`,o);return r(o,c),b(c,`rounded-full bg-primary/10 px-2 py-1 text-[10px]`),r(c,g(`插入到此处`)),o}),renderNodeIcon:(e,i,o,c,l,d)=>{let{renderProps:h}=w(`useSetup:0:0:dup1`,()=>t(()=>({renderProps:{node:e,expanded:i,selected:o,checked:c,halfChecked:l,loading:d}})));return typeof f.icon==`function`?f.icon(h):f.icon===void 0?e.icon===void 0?f.showIcon?f.directoryMode?u(t=>{let o=a(`span`,t);b(o,`inline-flex size-6 items-center justify-center text-base-content/60`);let c=s(`rue:slot:anchor`);return r(o,c),p(()=>{let t=e.children.length>0||!e.isLeaf?u(()=>{let e=n(),t=s(`rue:component:anchor`);return r(e,t),p(()=>{let n=y(ye,{expanded:i});C(()=>m(n,e,t))}),e}):u(()=>{let e=n(),t=s(`rue:component:anchor`);return r(e,t),m(y(be,{}),e,t),e});C(()=>m(t,o,c))}),o}):u(t=>{let n=a(`span`,t);b(n,`inline-flex size-6 items-center justify-center rounded-xl bg-base-200/80 text-[11px] text-base-content/60`);let i=s(`rue:slot:anchor`);return r(n,i),p(()=>{let t=e.children.length>0||!e.isLeaf?`DIR`:`DOC`;C(()=>m(t,n,i))}),n}):null:e.icon:f.icon},handleLabelActivate:(e,t,n)=>{t.preventDefault(),t.stopPropagation(),n===`doubleClick`&&f.onDoubleClick&&f.onDoubleClick(t,e);let r=f.directoryMode&&(f.expandAction===void 0?!1:f.expandAction)===n&&(e.children.length>0||!e.isLeaf);if(n===`click`&&r){S(()=>{Lt(e,t),zt(e,t)});return}r&&Lt(e,t),n===`click`&&zt(e,t)},bodyViewportStyle:w(`computed:1:26`,()=>d(()=>jt.get()?(f.virtual===void 0?!0:f.virtual)===!1?{maxHeight:`${jt.get()}px`,overflowY:`auto`}:{height:`${jt.get()}px`,overflowY:`auto`}:{overflowY:`visible`}))}}));return u(t=>{let c=a(`section`,t);p(()=>{b(c,String(I(I(I(j(`rue-tree overflow-hidden rounded-[1.35rem] border border-base-300/70 bg-gradient-to-b from-base-100 via-base-100 to-base-200/35 shadow-[0_18px_40px_-32px_rgba(15,23,42,0.35)]`,f.directoryMode&&`rue-directory-tree`),he(f.status)),f.classNames?.root),f.className)))}),p(()=>{l(c,{...f.styles?.root,...f.style})}),e(c,`data-rue-tree`,`true`);let d=s(`rue:slot:anchor`);r(c,d),p(()=>{let t=f.allowSearch?u(()=>{let t=n(),i=a(`div`,t);r(t,i),p(()=>{b(i,String(I(I(`border-b border-base-300/70 ${q.get().headerPadding}`,f.classNames?.header),f.classNames?.search)))}),p(()=>{l(i,{...f.styles?.header,...f.styles?.search})});let s=a(`label`,i);r(i,s),b(s,`input input-bordered flex w-full items-center gap-2 rounded-2xl border-base-300/80 bg-base-100/85 px-3 shadow-sm focus-within:border-primary/45 focus-within:outline-none`);let c=a(`svg`,s);r(s,c),e(c,`viewBox`,`0 0 24 24`),e(c,`fill`,`none`),e(c,`stroke`,`currentColor`),e(c,`strokeWidth`,`1.8`),b(c,`size-4 text-base-content/50`);let u=a(`circle`,c);r(c,u),e(u,`cx`,`11`),e(u,`cy`,`11`),e(u,`r`,`7`);let d=a(`path`,c);r(c,d),e(d,`strokeLinecap`,`round`),e(d,`d`,`m20 20-3.5-3.5`);let m=a(`input`,s);return r(s,m),e(m,`type`,`text`),p(()=>{h(m,Z.get())}),p(()=>{e(m,`placeholder`,String(f.searchPlaceholder===void 0?`搜索节点`:f.searchPlaceholder))}),b(m,`grow border-none bg-transparent px-0 py-2 text-sm outline-none`),o(m,`input`,e=>Lt(e.currentTarget.value)),t}):``;C(()=>m(t,c,d))});let x=a(`div`,c);r(c,x),p(()=>{b(x,String(I(`flex flex-col ${q.get().bodyPadding}`,f.classNames?.body)))}),p(()=>{let e=f.styles?.body;l(x,e)});let S=a(`div`,x);r(x,S),p(()=>{b(S,String(Dt.get()?`overflow-auto`:`overflow-visible`))}),p(()=>{l(S,tn.get())}),o(S,`scroll`,e=>Rt(e)),e(S,`data-rue-tree-body`,`true`),r(S,g(` `));let w=s(`rue:slot:anchor`);r(S,w),p(()=>{let t=kt.get().topSpacer>0?u(()=>{let t=n(),i=a(`div`,t);return r(t,i),p(()=>{l(i,{height:`${kt.get().topSpacer}px`})}),e(i,`aria-hidden`,`true`),t}):``;C(()=>m(t,S,w))}),r(S,g(` `));let E=a(`div`,S);r(S,E),p(()=>{b(E,String(Tt.get().length?`space-y-1`:`hidden`))}),p(()=>{e(E,`aria-hidden`,String(Tt.get().length?void 0:`true`))});let D=s(`rue:list:start`),O=s(`rue:list:end`);r(E,D),r(E,O);let k=new Map;p(()=>{k=T({items:kt.get().items||[],getKey:(e,t)=>e.node.keyText,elements:k,parent:E,before:O,singleRoot:!0,trackIndex:!1,start:D,renderItem:(t,c,d,h,x)=>{m(u(()=>{let c=n(),d=a(`div`,c);r(c,d),p(()=>{e(d,`key`,String(t.node.keyText))}),b(d,`relative flex flex-col`);let h=s(`rue:slot:anchor`);r(d,h),p(()=>{let e=(X.value.overKeyText===t.node.keyText?V(X.value.dropPosition):void 0)===`before`?Qt(t.node,`before`):``;C(()=>m(e,d,h))});let x=a(`div`,d);r(d,x),p(()=>{b(x,String(I(I(j(`group flex items-center gap-2 rounded-2xl px-2.5 ${q.get().rowPadding} transition duration-200 ease-out`,t.matched&&`bg-primary/8`,Q.get().has(t.node.keyText)&&`bg-primary/18 ring-1 ring-primary/30 shadow-[0_18px_32px_-24px_rgba(37,99,235,0.85)]`,f.showLine&&t.node.depth>0&&`border-l border-base-300/60`,f.blockNode?`w-full`:``,X.value.overKeyText===t.node.keyText&&X.value.dropPosition===0?`ring-2 ring-primary/35 ring-inset`:``,t.node.className),f.classNames?.node),f.disabled||t.node.disabled?`opacity-55`:``)))}),p(()=>{l(x,{paddingLeft:`${t.node.depth*18+8}px`,minHeight:Ot.get()?void 0:`${q.get().rowMinHeight}px`,height:Ot.get()?`${Ot.get()}px`:void 0,boxSizing:Ot.get()?`border-box`:void 0,...f.styles?.node})}),p(()=>{e(x,`data-rue-tree-node`,String(t.node.keyText))}),p(()=>{e(x,`data-rue-tree-drop-position`,String(X.value.overKeyText===t.node.keyText?String(X.value.dropPosition??0):``))}),p(()=>{e(x,`data-rue-tree-drop-intent`,String((X.value.overKeyText===t.node.keyText?V(X.value.dropPosition):void 0)??``))}),p(()=>{e(x,`draggable`,String(dt.get().enabled&&dt.get().nodeDraggable(t.node)&&!f.disabled&&!t.node.disabled))}),o(x,`dragstart`,e=>Wt(t.node,e)),o(x,`dragenter`,e=>Gt(t.node,e)),o(x,`dragover`,e=>Kt(t.node,e)),o(x,`dragleave`,e=>qt(t.node,e)),o(x,`dragend`,e=>Jt(t.node,e)),o(x,`drop`,e=>Yt(t.node,e));let S=a(`button`,x);r(x,S),e(S,`type`,`button`),p(()=>{b(S,String(I(`inline-flex size-7 shrink-0 items-center justify-center rounded-xl hover:bg-base-200 disabled:cursor-not-allowed`,f.classNames?.switcher)))}),p(()=>{let e=f.styles?.switcher;l(S,e)}),p(()=>{_(S,!(f.loadData||t.node.children.length>0||!t.node.isLeaf)||f.disabled||t.node.disabled)}),p(()=>{e(S,`aria-label`,String(Z.get()||wt.get().has(t.node.keyText)?`折叠节点`:`展开节点`))}),o(S,`click`,e=>Pt(t.node,e));let w=s(`rue:slot:anchor`);r(S,w),p(()=>{let e=Xt(t.node,Z.get()?!0:wt.get().has(t.node.keyText),Q.get().has(t.node.keyText),($.get().stateMap[t.node.keyText]??{checked:!1,halfChecked:!1,participates:!0}).checked,($.get().stateMap[t.node.keyText]??{checked:!1,halfChecked:!1,participates:!0}).halfChecked,Y.value.includes(t.node.keyText));C(()=>m(e,S,w))});let T=s(`rue:slot:anchor`);r(x,T),p(()=>{let s=f.checkable?u(()=>{let s=n(),c=a(`button`,s);r(s,c),p(()=>{e(c,`key`,String(`checkbox-${t.node.keyText}-${($.get().stateMap[t.node.keyText]??{checked:!1,halfChecked:!1,participates:!0}).checked?`checked`:($.get().stateMap[t.node.keyText]??{checked:!1,halfChecked:!1,participates:!0}).halfChecked?`mixed`:`unchecked`}`))}),e(c,`type`,`button`),e(c,`role`,`checkbox`),p(()=>{e(c,`aria-checked`,String(($.get().stateMap[t.node.keyText]??{checked:!1,halfChecked:!1,participates:!0}).halfChecked?`mixed`:($.get().stateMap[t.node.keyText]??{checked:!1,halfChecked:!1,participates:!0}).checked?`true`:`false`))}),p(()=>{b(c,String(I(I(j(`inline-flex size-[1.1rem] shrink-0 items-center justify-center rounded-[0.4rem] border text-[0.75rem] font-semibold shadow-sm transition-all duration-150`,($.get().stateMap[t.node.keyText]??{checked:!1,halfChecked:!1,participates:!0}).checked||($.get().stateMap[t.node.keyText]??{checked:!1,halfChecked:!1,participates:!0}).halfChecked?`border-primary/95 bg-primary text-primary-content shadow-[0_0_0_1px_rgba(37,99,235,0.22)]`:`border-base-content/30 bg-base-100 text-base-content/0 shadow-[0_0_0_1px_rgba(15,23,42,0.06)]`,(f.disabled||t.node.disabled||t.node.disableCheckbox||!t.node.checkable)&&`opacity-45`),f.classNames?.checkbox),f.disabled||t.node.disabled||t.node.disableCheckbox||!t.node.checkable?`cursor-not-allowed`:``)))}),p(()=>{let e=f.styles?.checkbox;l(c,e)}),p(()=>{_(c,f.disabled||t.node.disabled||t.node.disableCheckbox||!t.node.checkable)}),o(c,`click`,e=>It(t.node,e));let u=i(c);return r(c,u),p(()=>{v(u,($.get().stateMap[t.node.keyText]??{checked:!1,halfChecked:!1,participates:!0}).halfChecked?`−`:($.get().stateMap[t.node.keyText]??{checked:!1,halfChecked:!1,participates:!0}).checked?`✓`:``)}),s}):``;C(()=>m(s,x,T))}),r(x,g(` `));let E=s(`rue:slot:anchor`);r(x,E),p(()=>{let e=Zt(t.node);C(()=>m(e,x,E))}),r(x,g(` `));let D=s(`rue:slot:anchor`);r(x,D),p(()=>{let e=f.showIcon||t.node.icon!==void 0||f.icon!==void 0?$t(t.node,Z.get()?!0:wt.get().has(t.node.keyText),Q.get().has(t.node.keyText),($.get().stateMap[t.node.keyText]??{checked:!1,halfChecked:!1,participates:!0}).checked,($.get().stateMap[t.node.keyText]??{checked:!1,halfChecked:!1,participates:!0}).halfChecked,Y.value.includes(t.node.keyText)):``;C(()=>m(e,x,D))});let O=a(`button`,x);r(x,O),e(O,`type`,`button`),p(()=>{b(O,String(I(I(j(`flex min-w-0 flex-1 items-center gap-2 rounded-xl px-2.5 py-1.5 text-left ${q.get().textClass} transition-colors duration-150`,f.directoryMode?Q.get().has(t.node.keyText)?`bg-base-200/85 text-base-content`:`text-base-content hover:bg-base-200/70`:Q.get().has(t.node.keyText)?`bg-primary/10 font-semibold text-primary`:`text-base-content hover:bg-base-200/70`,f.disabled||t.node.disabled||!(f.selectable===void 0||f.selectable)||!t.node.selectable?`cursor-not-allowed opacity-55`:``),f.classNames?.label),f.blockNode?`w-full`:``)))}),p(()=>{let e=f.styles?.label;l(O,e)}),p(()=>{_(O,f.disabled||t.node.disabled||!(f.selectable===void 0||f.selectable)||!t.node.selectable)}),o(O,`click`,e=>en(t.node,e,`click`)),o(O,`dblclick`,e=>en(t.node,e,`doubleClick`));let k=s(`rue:slot:anchor`);r(O,k),p(()=>{let e=f.titleRender?u(()=>{let e=n(),i=a(`div`,e);r(e,i),b(i,`min-w-0 flex-1`);let o=s(`rue:component:anchor`);return r(i,o),m(y(ee,{render:()=>f.titleRender({node:t.node,expanded:Z.get()?!0:wt.get().has(t.node.keyText),selected:Q.get().has(t.node.keyText),checked:($.get().stateMap[t.node.keyText]??{checked:!1,halfChecked:!1,participates:!0}).checked,halfChecked:($.get().stateMap[t.node.keyText]??{checked:!1,halfChecked:!1,participates:!0}).halfChecked,loading:Y.value.includes(t.node.keyText)})}),i,o),e}):u(()=>{let e=n(),i=a(`span`,e);r(e,i),b(i,`min-w-0 flex-1 truncate`);let o=s(`rue:slot:anchor`);return r(i,o),p(()=>{let e=t.node.title;C(()=>m(e,i,o))}),e});C(()=>m(e,O,k))}),r(O,g(` `));let A=s(`rue:slot:anchor`);r(O,A),p(()=>{let o=X.value.overKeyText===t.node.keyText&&V(X.value.dropPosition)?u(()=>{let o=n(),s=a(`span`,o);r(o,s),b(s,`badge badge-primary badge-xs`),p(()=>{e(s,`data-rue-tree-drop-placeholder`,String(X.value.overKeyText===t.node.keyText?V(X.value.dropPosition):void 0))});let c=i(s);return r(s,c),p(()=>{v(c,(X.value.overKeyText===t.node.keyText?V(X.value.dropPosition):void 0)===`inside`?`放入`:(X.value.overKeyText===t.node.keyText?V(X.value.dropPosition):void 0)===`before`?`插前`:`插后`)}),o}):Q.get().has(t.node.keyText)?u(()=>{let e=n(),t=a(`span`,e);return r(e,t),b(t,`badge badge-primary badge-outline badge-xs`),r(t,g(`选中`)),e}):``;C(()=>m(o,O,A))});let M=s(`rue:slot:anchor`);return r(d,M),p(()=>{let e=(X.value.overKeyText===t.node.keyText?V(X.value.dropPosition):void 0)===`after`?Qt(t.node,`after`):``;C(()=>m(e,d,M))}),c}),c,d)}})}),r(S,g(` `));let A=s(`rue:slot:anchor`);r(S,A),p(()=>{let t=kt.get().bottomSpacer>0?u(()=>{let t=n(),i=a(`div`,t);return r(t,i),p(()=>{l(i,{height:`${kt.get().bottomSpacer}px`})}),e(i,`aria-hidden`,`true`),t}):``;C(()=>m(t,S,A))}),r(S,g(` `));let M=s(`rue:slot:anchor`);return r(S,M),p(()=>{let e=Tt.get().length?``:u(()=>{let e=n(),t=a(`div`,e);r(e,t),p(()=>{b(t,String(I(`grid min-h-40 place-items-center rounded-2xl border border-dashed border-base-300/70 bg-base-100/50 px-6 py-8 text-center text-sm text-base-content/55`,f.classNames?.empty)))}),p(()=>{let e=f.styles?.empty;l(t,e)});let i=a(`div`,t);r(t,i);let o=s(`rue:slot:anchor`);return r(i,o),p(()=>{let e=f.emptyText===void 0?`暂无节点`:f.emptyText;C(()=>m(e,i,o))}),e});C(()=>m(e,S,M))}),r(S,g(` `)),c})},H=e=>{let{__rue_rest_omit_0:i,__rue_rest_omit_1:a,__rue_rest_omit_2:o,__rue_rest_omit_3:c,rest:l}=w(`useSetup:0:0:dup3`,()=>t(()=>{let{className:t,showIcon:n,blockNode:r,expandAction:i,...a}=e;return{__rue_rest_omit_0:t,__rue_rest_omit_1:n,__rue_rest_omit_2:r,__rue_rest_omit_3:i,rest:a}}));return u(t=>{let i=n(),a=s(`rue:component:anchor`);return r(i,a),p(()=>{let t=y(xe,{...l,className:I(`rue-directory-tree`,e.className),showIcon:e.showIcon===void 0?!0:e.showIcon,blockNode:e.blockNode===void 0?!0:e.blockNode,directoryMode:!0,expandAction:e.expandAction===void 0?`click`:e.expandAction});C(()=>m(t,i,a))}),i})},U=xe;U.DirectoryTree=H;var Se=t=>u(i=>{let o=a(`div`,i);b(o,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let c=a(`table`,o);r(o,c),b(c,`table table-zebra`);let l=a(`thead`,c);r(c,l);let d=a(`tr`,l);r(l,d);let f=a(`th`,d);r(d,f),r(f,g(`属性`));let h=a(`th`,d);r(d,h),r(h,g(`说明`));let _=a(`th`,d);r(d,_),r(_,g(`类型`));let v=a(`th`,d);r(d,v),r(v,g(`默认值`));let y=a(`tbody`,c);r(c,y);let x=s(`rue:list:start`),S=s(`rue:list:end`);r(y,x),r(y,S);let w=new Map;return p(()=>{w=T({items:t.rows||[],getKey:(e,t)=>e.prop,elements:w,parent:y,before:S,singleRoot:!0,trackIndex:!1,start:x,renderItem:(t,i,o,c,l)=>{m(u(()=>{let i=n(),o=a(`tr`,i);r(i,o),p(()=>{e(o,`key`,String(t.prop))});let c=a(`td`,o);r(o,c);let l=a(`code`,c);r(c,l);let u=s(`rue:slot:anchor`);r(l,u),p(()=>{let e=t.prop;C(()=>m(e,l,u))});let d=a(`td`,o);r(o,d);let f=s(`rue:slot:anchor`);r(d,f),p(()=>{let e=t.description;C(()=>m(e,d,f))});let h=a(`td`,o);r(o,h);let g=a(`code`,h);r(h,g);let _=s(`rue:slot:anchor`);r(g,_),p(()=>{let e=t.type;C(()=>m(e,g,_))});let v=a(`td`,o);r(o,v);let y=a(`code`,v);r(v,y);let b=s(`rue:slot:anchor`);return r(y,b),p(()=>{let e=t.defaultValue;C(()=>m(e,y,b))}),i}),i,o)}})}),o}),Ce=[{title:`产品平台`,key:`platform`,children:[{title:`文档中心`,key:`docs-api`},{title:`组件市场`,key:`component-hub`},{title:`示例仓库`,key:`examples`}]},{title:`工程效率`,key:`engineering`,children:[{title:`构建链路`,key:`build-pipeline`},{title:`质量门禁`,key:`quality-gate`},{title:`发布管道`,key:`release-flow`}]},{title:`增长分析`,key:`growth`,children:[{title:`实验看板`,key:`experiment-board`},{title:`归因报表`,key:`attribution-report`},{title:`留存漏斗`,key:`retention-funnel`}]}],we=[{title:`发布总控`,key:`release-control`,children:[{title:`前台站点`,key:`release-site`,children:[{title:`首页编排`,key:`site-home`},{title:`价格页`,key:`site-pricing`}]},{title:`运营链路`,key:`release-ops`,children:[{title:`投放素材`,key:`ops-assets`},{title:`归因回传`,key:`ops-attribution`}]},{title:`合规审查`,key:`release-compliance`,children:[{title:`隐私条款`,key:`compliance-privacy`},{title:`审计记录`,key:`compliance-audit`}]}]}],Te=[{title:`权限控制`,key:`permission-disabled-root`,children:[{title:`只读目录`,key:`readonly-folder`,disabled:!0,children:[{title:`首页编排`,key:`readonly-home`},{title:`价格页`,key:`readonly-pricing`}]},{title:`可编辑目录`,key:`editable-folder`,children:[{title:`投放素材`,key:`editable-assets`},{title:`归因回传`,key:`editable-attribution`,disableCheckbox:!0}]},{title:`审计日志（仅禁用复选框）`,key:`audit-log`,disableCheckbox:!0}]}],Ee=[{nodeId:1,parentId:0,code:`workspace`,name:`Workspace`},{nodeId:2,parentId:1,code:`workflow`,name:`Workflow board`},{nodeId:3,parentId:1,code:`briefs`,name:`Briefs`},{nodeId:4,parentId:2,code:`review`,name:`Design review`},{nodeId:5,parentId:2,code:`release`,name:`Release checklist`},{nodeId:6,parentId:3,code:`content`,name:`Content drafts`}],De=[{title:`app`,key:`dir-app`,children:[{title:`pages`,key:`dir-pages`,children:[{title:`Tree.tsx`,key:`file-tree-page`},{title:`Transfer.tsx`,key:`file-transfer-page`}]},{title:`site`,key:`dir-site`,children:[{title:`SidebarPlaygroundDesign.tsx`,key:`file-sidebar`}]}]},{title:`packages`,key:`dir-packages`,children:[{title:`runtime`,key:`dir-runtime`},{title:`rue-design`,key:`dir-rue-design`}]},{title:`README.md`,key:`file-readme`}],Oe=[{title:`alpha.ts`,key:`range-alpha`},{title:`beta.ts`,key:`range-beta`},{title:`gamma.ts`,key:`range-gamma`},{title:`delta.ts`,key:`range-delta`},{title:`epsilon.ts`,key:`range-epsilon`}],ke=[{title:`src`,key:`drag-src`,kind:`folder`,children:[{title:`components`,key:`drag-components`,kind:`folder`,children:[{title:`Tree.tsx`,key:`drag-tree-file`,kind:`file`},{title:`Transfer.tsx`,key:`drag-transfer-file`,kind:`file`}]},{title:`main.ts`,key:`drag-main-file`,kind:`file`}]},{title:`docs`,key:`drag-docs`,kind:`folder`,children:[{title:`routing.md`,key:`drag-routing-file`,kind:`file`},{title:`installation.md`,key:`drag-install-file`,kind:`file`}]},{title:`package.json`,key:`drag-package-file`,kind:`file`}],Ae=Array.from({length:120},(e,t)=>({title:`Page ${String(t+1).padStart(3,`0`)}`,key:`virtual-${t}`})),je=Array.from({length:64},(e,t)=>({title:`Workspace ${String(t+1).padStart(2,`0`)}`,key:`async-virtual-root-${t}`,isLeaf:!1})),Me=`import { ref } from '@rue-js/rue'
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
</div>`,Ne=`import { ref } from '@rue-js/rue'
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
</div>`,Pe=`import { ref } from '@rue-js/rue'
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
</div>`,Fe=`import { ref } from '@rue-js/rue'
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
</div>`,Ie=`import { ref } from '@rue-js/rue'
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
</div>`,Le=`import { computed, ref } from '@rue-js/rue'
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
</div>`,Re=`import { ref } from '@rue-js/rue'
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
    操作顺序：先单击 beta.ts，再按住 Cmd / Ctrl 单击 epsilon.ts，最后按住 Shift 单击 delta.ts。
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
</div>`,ze=`import { ref } from '@rue-js/rue'
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
</div>`,Be=`import { ref } from '@rue-js/rue'
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
</div>`,Ve=`import { ref } from '@rue-js/rue'
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
</div>`,He=`import { computed, reactive } from '@rue-js/rue'

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
</div>`,Ue=[{prop:`treeData`,description:`树数据源，支持嵌套 children 和字段映射。`,type:`TreeDataNode[]`,defaultValue:`[]`},{prop:`selectedKeys / defaultSelectedKeys`,description:`受控与非受控的当前选中项，multiple 打开后允许多选。`,type:`TreeKey[]`,defaultValue:`[]`},{prop:`checkedKeys / defaultCheckedKeys`,description:`勾选模式下的选中集合，strict 模式会回传 checked / halfChecked 结构。`,type:`TreeKey[] | { checked: TreeKey[]; halfChecked: TreeKey[] }`,defaultValue:`[]`},{prop:`expandedKeys / defaultExpandedKeys / defaultExpandAll`,description:`控制展开态，适合目录树、权限树和异步加载场景。`,type:`TreeKey[] / boolean`,defaultValue:`[] / false`},{prop:`checkable / checkStrictly`,description:`切换勾选与父子联动模式；strict 会关闭级联。`,type:`boolean`,defaultValue:`false`},{prop:`treeDataSimpleMode / fieldNames`,description:`直接接入 id / pId 扁平数据，同时可映射 title、key、children 字段。`,type:`boolean | TreeSimpleModeConfig / TreeFieldNames`,defaultValue:`- / -`},{prop:`allowSearch / searchValue / filterTreeNode`,description:`提供内置搜索输入和过滤逻辑，命中后会保留祖先链路。`,type:`boolean / string / boolean | ((inputValue, node) => boolean)`,defaultValue:`false / - / true`},{prop:`loadData`,description:`展开未加载分支时触发异步加载，适合远端目录与超大树。`,type:`(node: TreeNode) => Promise<any> | void`,defaultValue:`-`},{prop:`Tree.DirectoryTree / expandAction / toggleSelect / rangeSelect`,description:`目录树快捷 API；除了展开动作，还能细化 ctrl/meta 追加选择和 shift 区间选择是 append 还是 replace。`,type:`DirectoryTreeProps / false | "click" | "doubleClick" / boolean / false | "append" | "replace"`,defaultValue:`blockNode=true / showIcon=true / "click" / true / "append"`},{prop:`draggable / allowDrop / onDrop`,description:`开启拖拽排序并控制是否允许落点；allowDrop 和 onDrop 都会拿到 dropToGap，UI 会同步显示插前、插后或放入占位态。`,type:`TreeDraggable / (info) => boolean / (info) => void`,defaultValue:`false / - / -`},{prop:`height / itemHeight / virtual`,description:`为长列表开启虚拟滚动；height 定义视口高度，itemHeight 用于估算渲染窗口，也能和 loadData 组合接超长懒加载树。`,type:`number / number / boolean`,defaultValue:`- / 自动按尺寸估算 / true`},{prop:`showLine / showIcon / blockNode`,description:`控制树线、节点图标和整行可点的布局表现。`,type:`boolean`,defaultValue:`false`},{prop:`titleRender / switcherIcon / icon`,description:`按节点态自定义标题、展开图标和节点图标。`,type:`render function | any`,defaultValue:`-`}],We=e=>Array.isArray(e)?e:e.checked,Ge=(e,t)=>Array.isArray(e)?t?.halfCheckedKeys??[]:e.halfChecked,W=e=>`${typeof e}:${String(e)}`,Ke=e=>e.map(e=>({...e,children:Array.isArray(e.children)?Ke(e.children):e.children})),qe=(e,t)=>{let n=W(t);for(let r=0;r<e.length;r+=1){let i=e[r];if(W(i.key)===n){let[t]=e.splice(r,1);return t??null}if(Array.isArray(i.children)){let e=qe(i.children,t);if(e)return e}}return null},Je=(e,t,n,r)=>{let i=W(n);for(let a=0;a<e.length;a+=1){let o=e[a];if(W(o.key)===i){if(r===0){let e=Array.isArray(o.children)?[...o.children]:[];e.push(t),o.children=e}else e.splice(r<0?a:a+1,0,t);return!0}if(Array.isArray(o.children)&&Je(o.children,t,n,r))return!0}return!1},Ye=(e,t)=>{let n=Ke(e),r=qe(n,t.dragNode.key);return r&&(Je(n,r,t.node.key,t.dropPosition)||n.push(r)),n},G=(e,t,n)=>{let r=W(t);return e.map(e=>W(e.key)===r?n(e):Array.isArray(e.children)?{...e,children:G(e.children,t,n)}:e)},Xe=e=>e.reduce((e,t)=>!Array.isArray(t.children)||!t.children.length?e:e+1+Xe(t.children),0),Ze=c=>{let{isOpen:l,isFolder:f,toggle:h,addChild:_,changeType:S}=w(`useSetup:0:0`,()=>t(()=>{let e=w(`computed:1:0`,()=>d(()=>!!c.model.open)),t=w(`computed:1:1`,()=>d(()=>!!c.model.children&&c.model.children.length>0)),n=t=>{t?.stopPropagation(),c.model.open=!e.get()},r=e=>{e?.stopPropagation(),c.model.children||(c.model.children=[]),c.model.children.push({id:`${c.model.id}-new-${c.model.children.length}`,name:`new stuff`}),c.model.open=!0};return{isOpen:e,isFolder:t,toggle:n,addChild:r,changeType:e=>{e?.stopPropagation(),t.get()||(c.model.children=[],r(),c.model.open=!0)}}}));return u(t=>{let d=a(`li`,t);b(d,`list-none`);let w=a(`button`,d);r(d,w),e(w,`type`,`button`),p(()=>{b(w,String(`flex items-center gap-2 rounded-xl px-3 py-2 text-left text-sm transition `+(f.get()?`font-semibold text-base-content`:`text-base-content/80 hover:bg-base-200/70`)))}),o(w,`click`,e=>h(e)),o(w,`dblclick`,e=>S(e));let E=a(`span`,w);r(w,E),b(E,`inline-flex size-5 items-center justify-center rounded-md bg-base-200/80 text-[11px] text-base-content/55`);let D=i(E);r(E,D),p(()=>{v(D,f.get()?l.get()?`−`:`+`:`•`)});let O=a(`span`,w);r(w,O);let k=s(`rue:slot:anchor`);r(O,k),p(()=>{let e=c.model.name;C(()=>m(e,O,k))});let ee=s(`rue:slot:anchor`);return r(d,ee),p(()=>{let t=f.get()&&l.get()?u(()=>{let t=n(),i=a(`ul`,t);r(t,i),b(i,`mt-1 grid gap-1 pl-5`);let l=s(`rue:list:start`),u=s(`rue:list:end`);r(i,l),r(i,u);let d=new Map;p(()=>{d=T({items:c.model.children||[],getKey:(e,t)=>e.id,elements:d,parent:i,before:u,start:l,renderItem:(e,t,n,r,i)=>{x(y(Ze,{key:e.id,model:e}),t,n,r)}})});let f=a(`li`,i);r(i,f),b(f,`list-none`);let m=a(`button`,f);return r(f,m),e(m,`type`,`button`),b(m,`btn btn-ghost btn-xs rounded-full text-emerald-600`),o(m,`click`,e=>_(e)),r(m,g(`+ add child`)),t}):``;C(()=>m(t,d,ee))}),d})},Qe=()=>{let{basicSelectedKeys:e,directorySelectedKeys:i,directoryExpandAction:o,directoryToggleSelect:l,directoryRangeSelect:h,directoryRangeAppendSelectedKeys:_,directoryRangeReplaceSelectedKeys:v,directoryRangeTreeVersion:x,checkableSelectedKeys:S,checkedKeys:T,halfCheckedKeys:ee,disabledCheckedKeys:A,simpleSelectedKeys:j,asyncSelectedKeys:M,asyncExpandedKeys:N,dragTreeData:P,dragSummary:F,virtualSelectedKeys:I,asyncVirtualTreeData:L,asyncVirtualExpandedKeys:te,asyncVirtualSelectedKeys:R,asyncTreeData:ne,legacyTree:re,tabs:z,loadAsyncTree:ie,loadAsyncVirtualTree:ae,resetDirectoryRangeDemo:oe}=w(`useSetup:0:0:dup1`,()=>t(()=>{let e=w(`ref:1:2`,()=>c([`docs-api`])),t=w(`ref:1:3`,()=>c([`dir-app`])),n=w(`ref:1:4`,()=>c(`click`)),r=w(`ref:1:5`,()=>c(!0)),i=w(`computed:1:6`,()=>d(()=>r.value?`append`:!1)),a=w(`ref:1:7`,()=>c([])),o=w(`ref:1:8`,()=>c([])),s=w(`ref:1:9`,()=>c(0)),l=w(`ref:1:10`,()=>c([`release-control`])),u=w(`ref:1:11`,()=>c([`site-home`])),p=w(`ref:1:12`,()=>c([`release-control`,`release-site`])),m=w(`ref:1:13`,()=>c([`editable-assets`])),h=w(`ref:1:14`,()=>c([`workflow`])),g=w(`ref:1:15`,()=>c([])),_=w(`ref:1:16`,()=>c([])),v=w(`ref:1:17`,()=>c(Ke(ke))),y=w(`ref:1:18`,()=>c(`folder 支持放入；file 只允许插前和插后，悬停时会显示明确占位态。`)),b=w(`ref:1:19`,()=>c([`virtual-3`])),x=w(`ref:1:20`,()=>c(Ke(je))),S=w(`ref:1:21`,()=>c([])),C=w(`ref:1:22`,()=>c([])),T=w(`ref:1:23`,()=>c([{title:`发布总线`,key:`release-bus`,isLeaf:!1}]));return{basicSelectedKeys:e,directorySelectedKeys:t,directoryExpandAction:n,directoryToggleSelect:r,directoryRangeSelect:i,directoryRangeAppendSelectedKeys:a,directoryRangeReplaceSelectedKeys:o,directoryRangeTreeVersion:s,checkableSelectedKeys:l,checkedKeys:u,halfCheckedKeys:p,disabledCheckedKeys:m,simpleSelectedKeys:h,asyncSelectedKeys:g,asyncExpandedKeys:_,dragTreeData:v,dragSummary:y,virtualSelectedKeys:b,asyncVirtualTreeData:x,asyncVirtualExpandedKeys:S,asyncVirtualSelectedKeys:C,asyncTreeData:T,legacyTree:w(`reactive:1:24`,()=>f({id:`root`,name:`My Tree`,open:!0,children:[{id:`hello`,name:`hello`},{id:`world`,name:`world`},{id:`branch`,name:`child folder`,open:!0,children:[{id:`branch-1`,name:`design review`},{id:`branch-2`,name:`release note`}]}]})),tabs:{basic:w(`ref:1:25`,()=>c(`preview`)),directory:w(`ref:1:26`,()=>c(`preview`)),directoryRange:w(`ref:1:27`,()=>c(`preview`)),checkable:w(`ref:1:28`,()=>c(`preview`)),checkableDisabled:w(`ref:1:29`,()=>c(`preview`)),simple:w(`ref:1:30`,()=>c(`preview`)),async:w(`ref:1:31`,()=>c(`preview`)),drag:w(`ref:1:32`,()=>c(`preview`)),virtual:w(`ref:1:33`,()=>c(`preview`)),virtualAsync:w(`ref:1:34`,()=>c(`preview`)),legacy:w(`ref:1:35`,()=>c(`preview`))},loadAsyncTree:async e=>{e.key===`release-bus`&&(T.value=[{title:`发布总线`,key:`release-bus`,isLeaf:!1,children:[{title:`桌面端`,key:`desktop`,children:[{title:`Windows`,key:`desktop-win`},{title:`macOS`,key:`desktop-mac`}]},{title:`移动端`,key:`mobile`,children:[{title:`iOS`,key:`mobile-ios`},{title:`Android`,key:`mobile-android`}]}]}])},loadAsyncVirtualTree:async e=>{e.children.length||(x.value=G(x.value,e.key,e=>({...e,children:Array.from({length:8},(t,n)=>({title:`${String(e.title)} / Module ${n+1}`,key:`${String(e.key)}-child-${n}`,isLeaf:n%3!=0}))})))},resetDirectoryRangeDemo:()=>{a.value=[],o.value=[],s.value+=1}}}));return u(t=>{let c=n(),d=s(`rue:component:anchor`);return r(c,d),m(y(O,{children:u(()=>{let t=n(),c=a(`div`,t);r(t,c),b(c,`max-w-none prose prose-sm md:prose-base`);let u=a(`h1`,c);r(c,u),r(u,g(`Tree 树控件`));let d=a(`p`,c);r(c,d),r(d,g(`Rue 的 Tree 补上了独立树组件这块空白：保留 TreeView 示例里递归数据直改的灵活性，同时把 树控件常用的展开、选中、勾选、简单模式、异步加载和自定义标题一次补齐。 视觉上继续沿用 Rue 现有的卡片、badge 和 base 色阶体系，不照搬其他组件库的外观。`));let f=a(`div`,c);r(c,f),b(f,`not-prose mt-6 grid gap-3 md:grid-cols-3`);let w=a(`div`,f);r(f,w),b(w,`rounded-[1.4rem] border border-base-300 bg-gradient-to-br from-base-100 to-base-200/40 p-4 shadow-sm`);let O=a(`div`,w);r(w,O),b(O,`text-xs uppercase tracking-[0.2em] text-base-content/45`),r(O,g(`Node Model`));let se=a(`div`,w);r(w,se),b(se,`mt-2 text-base font-semibold`),r(se,g(`选择、勾选、展开三条状态线`));let ce=a(`p`,w);r(w,ce),b(ce,`mt-2 mb-0 text-sm text-base-content/68`),r(ce,g(`目录树、权限树、发布树都能直接套进来。`));let B=a(`div`,f);r(f,B),b(B,`rounded-[1.4rem] border border-base-300 bg-gradient-to-br from-base-100 to-base-200/40 p-4 shadow-sm`);let le=a(`div`,B);r(B,le),b(le,`text-xs uppercase tracking-[0.2em] text-base-content/45`),r(le,g(`DirectoryTree`));let ue=a(`div`,B);r(B,ue),b(ue,`mt-2 text-base font-semibold`),r(ue,g(`目录树快捷 API`));let de=a(`p`,B);r(B,de),b(de,`mt-2 mb-0 text-sm text-base-content/68`),r(de,g(`支持 click / doubleClick 展开，以及更接近文件浏览器的多选交互。`));let V=a(`div`,f);r(f,V),b(V,`rounded-[1.4rem] border border-base-300 bg-gradient-to-br from-base-100 to-base-200/40 p-4 shadow-sm`);let fe=a(`div`,V);r(V,fe),b(fe,`text-xs uppercase tracking-[0.2em] text-base-content/45`),r(fe,g(`Heavy Interaction`));let pe=a(`div`,V);r(V,pe),b(pe,`mt-2 text-base font-semibold`),r(pe,g(`拖拽排序与虚拟滚动`));let me=a(`p`,V);r(V,me),b(me,`mt-2 mb-0 text-sm text-base-content/68`),r(me,g(`长列表和拖拽改序终于能落在同一个 Tree 上了。`));let he=s(`rue:component:anchor`);r(c,he),p(()=>{let t=y(k,{title:`基础选中与整行交互`,summary:`默认 Tree 就是一个纯浏览 + 选中容器；blockNode 和 showIcon 让它更像配置面板里的主导航。`,tab:z.basic,code:Me,preview:E(`div`,{className:`space-y-4 not-prose`,children:[D(U,{treeData:Ce,selectedKeys:e.value,defaultExpandAll:!0,showIcon:!0,blockNode:!0,onSelect:t=>{e.value=t}}),E(`div`,{className:`grid gap-3 md:grid-cols-3`,children:[E(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[D(`div`,{className:`text-xs text-base-content/45`,children:`当前选中`}),D(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:e.value.length?e.value.map(e=>D(`span`,{className:`badge badge-outline badge-sm`,children:String(e)},String(e))):D(`span`,{className:`text-sm text-base-content/55`,children:`未选择`})})]}),E(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[D(`div`,{className:`text-xs text-base-content/45`,children:`推荐场景`}),D(`div`,{className:`mt-2 text-sm text-base-content/75`,children:`组件目录、文档导航、资源分类`})]}),E(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[D(`div`,{className:`text-xs text-base-content/45`,children:`状态模型`}),D(`div`,{className:`mt-2 text-sm text-base-content/75`,children:`selectedKeys / expandedKeys 分离，便于受控更新。`})]})]})]})});C(()=>m(t,c,he))});let ge=s(`rue:component:anchor`);r(c,ge),p(()=>{let e=y(k,{title:`DirectoryTree 目录树快捷 API`,summary:`Tree.DirectoryTree 默认补上目录图标、整行可点和 click 展开；这里先只看 expandAction 和 toggleSelect 这两个基础交互开关。`,tab:z.directory,code:Le,preview:E(`div`,{className:`grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`,children:[D(U.DirectoryTree,{treeData:De,selectedKeys:i.value,multiple:!0,expandAction:o.value,toggleSelect:l.value,rangeSelect:h.get(),onSelect:e=>{i.value=e}}),E(`div`,{className:`space-y-3`,children:[E(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[D(`div`,{className:`text-xs text-base-content/45`,children:`快捷属性`}),E(`div`,{className:`mt-3 flex flex-wrap gap-2`,children:[D(`button`,{type:`button`,className:o.value===`click`?`btn btn-primary btn-xs`:`btn btn-ghost btn-xs`,onClick:()=>{o.value=`click`},children:`click 展开`}),D(`button`,{type:`button`,className:o.value===`doubleClick`?`btn btn-primary btn-xs`:`btn btn-ghost btn-xs`,onClick:()=>{o.value=`doubleClick`},children:`doubleClick 展开`}),D(`button`,{type:`button`,className:o.value===!1?`btn btn-primary btn-xs`:`btn btn-ghost btn-xs`,onClick:()=>{o.value=!1},children:`只选中不展开`})]}),E(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:[D(`button`,{type:`button`,className:l.value?`btn btn-primary btn-xs`:`btn btn-ghost btn-xs`,onClick:()=>{l.value=!0},children:`ctrl/meta 追加`}),D(`button`,{type:`button`,className:l.value?`btn btn-ghost btn-xs`:`btn btn-primary btn-xs`,onClick:()=>{l.value=!1},children:`关闭追加选择`})]})]}),E(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[D(`div`,{className:`text-xs text-base-content/45`,children:`当前选择`}),D(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:i.value.map(e=>D(`span`,{className:`badge badge-outline badge-sm`,children:String(e)},String(e)))})]}),E(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`,children:[`当前组合是 expandAction=`,D(`strong`,{children:String(o.value)}),`、toggleSelect=`,D(`strong`,{children:String(l.value)}),`、rangeSelect=`,D(`strong`,{children:String(h.get())}),`。`,D(`div`,{className:`mt-3`,children:`普通点击会落成单选；打开追加后，meta / ctrl 会追加或移除选中，shift 也会启用区间选择。关闭追加时，这两类补充选择都会停用；append / replace 的差异放到下面的对照示例里单独演示。`})]})]})]})});C(()=>m(e,c,ge))});let _e=s(`rue:component:anchor`);r(c,_e),p(()=>{let e=y(k,{title:`shift append vs shift replace`,summary:`这两个模式只有在“先做一次非连续多选，再用 shift 选区间”时才会分出差异；左边保留旧选择，右边只保留新区间。`,tab:z.directoryRange,code:Re,preview:E(`div`,{className:`space-y-4 not-prose`,children:[E(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`,children:[D(`div`,{children:`操作顺序：先单击 beta.ts，再按住 Cmd / Ctrl 单击 epsilon.ts，最后按住 Shift 单击 delta.ts。`}),D(`div`,{className:`mt-2`,children:`append 会保留 beta.ts；replace 只保留 delta.ts 到 epsilon.ts 这一段。`}),D(`button`,{type:`button`,className:`btn btn-ghost btn-xs mt-3`,onClick:oe,children:`重置两边示例`})]}),E(`div`,{className:`grid gap-4 xl:grid-cols-2`,children:[E(`div`,{className:`space-y-3 rounded-[1.4rem] border border-base-300 bg-base-100 p-4 shadow-sm`,children:[E(`div`,{className:`flex items-center justify-between gap-3`,children:[E(`div`,{children:[D(`div`,{className:`text-sm font-semibold`,children:`rangeSelect="append"`}),D(`div`,{className:`text-xs text-base-content/55`,children:`保留原先的非连续选择，再并入新的 shift 区间。`})]}),D(`span`,{className:`badge badge-outline badge-sm`,children:`append`})]}),D(U.DirectoryTree,{treeData:Oe,selectedKeys:_.value,multiple:!0,toggleSelect:!0,rangeSelect:`append`,onSelect:e=>{_.value=e}},`append-${x.value}`),E(`div`,{className:`rounded-box border border-base-300 bg-base-100 px-4 py-3 text-sm text-base-content/70`,children:[D(`div`,{className:`text-xs text-base-content/45`,children:`当前选择`}),D(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:_.value.length?_.value.map(e=>D(`span`,{className:`badge badge-outline badge-sm`,children:String(e)},String(e))):D(`span`,{className:`text-sm text-base-content/55`,children:`还没有选择`})})]})]}),E(`div`,{className:`space-y-3 rounded-[1.4rem] border border-base-300 bg-base-100 p-4 shadow-sm`,children:[E(`div`,{className:`flex items-center justify-between gap-3`,children:[E(`div`,{children:[D(`div`,{className:`text-sm font-semibold`,children:`rangeSelect="replace"`}),D(`div`,{className:`text-xs text-base-content/55`,children:`只保留新的 shift 区间，旧的非连续选择会被替换掉。`})]}),D(`span`,{className:`badge badge-primary badge-outline badge-sm`,children:`replace`})]}),D(U.DirectoryTree,{treeData:Oe,selectedKeys:v.value,multiple:!0,toggleSelect:!0,rangeSelect:`replace`,onSelect:e=>{v.value=e}},`replace-${x.value}`),E(`div`,{className:`rounded-box border border-base-300 bg-base-100 px-4 py-3 text-sm text-base-content/70`,children:[D(`div`,{className:`text-xs text-base-content/45`,children:`当前选择`}),D(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:v.value.length?v.value.map(e=>D(`span`,{className:`badge badge-outline badge-sm`,children:String(e)},String(e))):D(`span`,{className:`text-sm text-base-content/55`,children:`还没有选择`})})]})]})]})]})});C(()=>m(e,c,_e))});let ve=s(`rue:component:anchor`);r(c,ve),p(()=>{let e=y(k,{title:`父子联动与半选态`,summary:`这一块只看级联勾选和 halfChecked，不再混入 disabled / disableCheckbox，点击父节点时能直接看到整棵子树联动。`,tab:z.checkable,code:Ne,preview:E(`div`,{className:`space-y-4 not-prose`,children:[D(U,{treeData:we,selectedKeys:S.value,checkedKeys:T.value,checkable:!0,defaultExpandAll:!0,showLine:!0,blockNode:!0,onSelect:e=>{S.value=e},onCheck:(e,t)=>{T.value=We(e),ee.value=Ge(e,t)}}),E(`div`,{className:`grid gap-3 md:grid-cols-3`,children:[E(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[D(`div`,{className:`text-xs text-base-content/45`,children:`selectedKeys`}),D(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:S.value.length?S.value.map(e=>D(`span`,{className:`badge badge-outline badge-sm`,children:String(e)},String(e))):D(`span`,{className:`text-sm text-base-content/55`,children:`当前没有选中节点`})})]}),E(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[D(`div`,{className:`text-xs text-base-content/45`,children:`checkedKeys`}),D(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:T.value.map(e=>D(`span`,{className:`badge badge-primary badge-outline badge-sm`,children:String(e)},String(e)))})]}),E(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[D(`div`,{className:`text-xs text-base-content/45`,children:`halfCheckedKeys`}),D(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:ee.value.length?ee.value.map(e=>D(`span`,{className:`badge badge-ghost badge-sm`,children:String(e)},String(e))):D(`span`,{className:`text-sm text-base-content/55`,children:`当前没有半选`})})]})]})]})});C(()=>m(e,c,ve))});let ye=s(`rue:component:anchor`);r(c,ye),p(()=>{let e=y(k,{title:`禁用节点与禁用复选框`,summary:`把 disabled 和 disableCheckbox 单独拆出来看：前者整节点只读，后者只禁用勾选框，不再干扰联动示例。`,tab:z.checkableDisabled,code:Pe,preview:E(`div`,{className:`grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`,children:[D(U,{treeData:Te,checkedKeys:A.value,checkable:!0,defaultExpandAll:!0,showLine:!0,blockNode:!0,onCheck:e=>{A.value=We(e)}}),E(`div`,{className:`space-y-3`,children:[E(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[D(`div`,{className:`text-xs text-base-content/45`,children:`当前勾选`}),D(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:A.value.length?A.value.map(e=>D(`span`,{className:`badge badge-outline badge-sm`,children:String(e)},String(e))):D(`span`,{className:`text-sm text-base-content/55`,children:`当前没有勾选`})})]}),E(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm text-sm text-base-content/75`,children:[D(`div`,{className:`font-medium text-base-content`,children:`disabled`}),D(`div`,{className:`mt-2`,children:`整节点不可展开、不可选中、不可勾选，适合只读目录或冻结配置。`})]}),E(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm text-sm text-base-content/75`,children:[D(`div`,{className:`font-medium text-base-content`,children:`disableCheckbox`}),D(`div`,{className:`mt-2`,children:`节点仍能展示和展开，但复选框不会参与交互，适合“只可浏览不可授权”的条目。`})]})]})]})});C(()=>m(e,c,ye))});let be=s(`rue:component:anchor`);r(c,be),p(()=>{let e=y(k,{title:`Simple Mode + Search`,summary:`扁平数据直入后，内置搜索会保留命中节点的祖先链，不会把层级上下文切断。`,tab:z.simple,code:Fe,preview:E(`div`,{className:`grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`,children:[D(U,{treeData:Ee,treeDataSimpleMode:{id:`nodeId`,pId:`parentId`,rootPId:0},fieldNames:{title:`name`,key:`code`},selectedKeys:j.value,allowSearch:!0,defaultExpandAll:!0,onSelect:e=>{j.value=e}}),E(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`,children:[`当前选中：`,D(`code`,{children:JSON.stringify(j.value)}),D(`div`,{className:`mt-3`,children:`这类 simple mode 很适合后端直接给 id / pId 的菜单、流程节点和权限项，不需要再先做一遍树转换。`})]})]})});C(()=>m(e,c,be))});let xe=s(`rue:component:anchor`);r(c,xe),p(()=>{let e=y(k,{title:`Async Load 与自定义标题`,summary:`第一次展开时再拉子节点，同时用 titleRender 和 icon 把状态信息塞回每一行。`,tab:z.async,code:Ie,preview:E(`div`,{className:`grid gap-4 not-prose lg:grid-cols-[minmax(0,26rem),1fr] lg:items-start`,children:[D(U,{treeData:ne.value,selectedKeys:M.value,expandedKeys:N.value,loadData:ie,showLine:!0,showIcon:!0,blockNode:!0,titleRender:({node:e,loading:t})=>E(`div`,{className:`flex min-w-0 items-center justify-between gap-3`,children:[D(`span`,{className:`truncate`,children:e.title}),D(`span`,{className:`badge badge-ghost badge-xs`,children:t?`loading`:e.children.length?`branch`:`leaf`})]}),onSelect:e=>{M.value=e},onExpand:e=>{N.value=e}}),E(`div`,{className:`space-y-3`,children:[E(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[D(`div`,{className:`text-xs text-base-content/45`,children:`expandedKeys`}),D(`div`,{className:`mt-2 text-sm text-base-content/75`,children:JSON.stringify(N.value)})]}),E(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[D(`div`,{className:`text-xs text-base-content/45`,children:`selectedKeys`}),D(`div`,{className:`mt-2 text-sm text-base-content/75`,children:JSON.stringify(M.value)})]}),D(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`,children:`展开 release-bus 后才会注入桌面端和移动端节点，适合远端目录、超大权限树和发布范围配置。`})]})]})});C(()=>m(e,c,xe))});let H=a(`div`,c);r(c,H),b(H,`not-prose mt-10 space-y-2`);let ke=a(`h2`,H);r(H,ke),b(ke,`text-2xl font-semibold`),r(ke,g(`更重交互`));let je=a(`p`,H);r(H,je),b(je,`text-sm text-base-content/70`),r(je,g(`当 Tree 既要承载拖拽整理，又要承载超长数据时，draggable 和 virtual 就是两个最关键的控制面。`));let W=s(`rue:component:anchor`);r(c,W),p(()=>{let e=y(k,{title:`allowDrop 策略与拖拽占位`,summary:`allowDrop 可以把 folder / file 的落点规则写清楚；hover 时 Tree 会直接给出插前、插后或放入占位提示。`,tab:z.drag,code:ze,preview:E(`div`,{className:`grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`,children:[D(U,{treeData:P.value,draggable:!0,blockNode:!0,defaultExpandAll:!0,allowDrop:({dropNode:e,dropToGap:t})=>t||e.raw.kind!==`file`,titleRender:({node:e})=>E(`div`,{className:`flex min-w-0 items-center justify-between gap-3`,children:[D(`span`,{className:`truncate`,children:e.title}),D(`span`,{className:e.raw.kind===`folder`?`badge badge-ghost badge-xs`:`badge badge-outline badge-xs`,children:e.raw.kind})]}),onDrop:e=>{P.value=Ye(P.value,e),F.value=`${String(e.dragNode.key)} -> ${String(e.node.key)} (${e.dropToGap?e.dropPosition<0?`before`:`after`:`inside`})`}}),E(`div`,{className:`space-y-3`,children:[E(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[D(`div`,{className:`text-xs text-base-content/45`,children:`最近一次拖拽`}),D(`div`,{className:`mt-2 text-sm text-base-content/75`,children:F.value})]}),E(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[D(`div`,{className:`text-xs text-base-content/45`,children:`allowDrop 规则`}),E(`div`,{className:`mt-2 grid gap-2 text-sm text-base-content/75`,children:[D(`div`,{children:`folder：允许放入，也允许插前 / 插后。`}),D(`div`,{children:`file：只允许插前 / 插后，不允许作为 inside 目标。`})]})]}),D(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`,children:`拖到 folder 正中央会看到“放入”，拖到行的上沿或下沿则会出现“插前 / 插后”；如果目标是 file，inside 落点会被 allowDrop 直接拦掉。`})]})]})});C(()=>m(e,c,W))});let Ke=s(`rue:component:anchor`);r(c,Ke),p(()=>{let e=y(k,{title:`Virtual Scroll`,summary:`长列表下只渲染可见窗口，height 和 itemHeight 负责限定视口和估算切片范围。`,tab:z.virtual,code:Be,preview:E(`div`,{className:`grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`,children:[D(U,{treeData:Ae,selectedKeys:I.value,height:320,itemHeight:42,virtual:!0,blockNode:!0,onSelect:e=>{I.value=e}}),E(`div`,{className:`space-y-3`,children:[E(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[D(`div`,{className:`text-xs text-base-content/45`,children:`数据量`}),D(`div`,{className:`mt-2 text-2xl font-semibold`,children:Ae.length})]}),E(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[D(`div`,{className:`text-xs text-base-content/45`,children:`当前选中`}),D(`div`,{className:`mt-2 text-sm text-base-content/75`,children:JSON.stringify(I.value)})]}),D(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`,children:`对文档页目录、埋点树、批量资源目录这种长列表场景，虚拟滚动能显著降低初始渲染压力。`})]})]})});C(()=>m(e,c,Ke))});let qe=s(`rue:component:anchor`);r(c,qe),p(()=>{let e=y(k,{title:`Virtual + Async Load 场景页`,summary:`把 virtual、height、itemHeight 和 loadData 合在一起，就能接超长目录或资源树，只在展开分支时再注入子节点。`,tab:z.virtualAsync,code:Ve,preview:E(`div`,{className:`grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`,children:[D(U,{treeData:L.value,selectedKeys:R.value,expandedKeys:te.value,height:340,itemHeight:40,virtual:!0,showIcon:!0,blockNode:!0,loadData:ae,titleRender:({node:e,loading:t})=>E(`div`,{className:`flex min-w-0 items-center justify-between gap-3`,children:[D(`span`,{className:`truncate`,children:e.title}),D(`span`,{className:`badge badge-ghost badge-xs`,children:t?`loading`:e.children.length?`loaded`:e.isLeaf?`leaf`:`lazy`})]}),onSelect:e=>{R.value=e},onExpand:e=>{te.value=e}}),E(`div`,{className:`space-y-3`,children:[E(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[D(`div`,{className:`text-xs text-base-content/45`,children:`根节点数量`}),D(`div`,{className:`mt-2 text-2xl font-semibold`,children:L.value.length})]}),E(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[D(`div`,{className:`text-xs text-base-content/45`,children:`已加载分支`}),D(`div`,{className:`mt-2 text-2xl font-semibold`,children:Xe(L.value)})]}),E(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[D(`div`,{className:`text-xs text-base-content/45`,children:`当前展开`}),D(`div`,{className:`mt-2 text-sm text-base-content/75`,children:JSON.stringify(te.value)})]}),D(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`,children:`先滚动到较深位置再展开节点也没问题：视口外的行不会真正渲染，只有命中的 branch 才会触发 loadData 注入子节点。`})]})]})});C(()=>m(e,c,qe))});let Je=s(`rue:component:anchor`);r(c,Je),p(()=>{let e=y(k,{title:`保留原始递归 Demo`,summary:`旧的 TreeView 行为没有删掉，只是并进 design 页面里，方便对比“直接改数据”这类递归写法。`,tab:z.legacy,code:He,preview:D(`div`,{className:`card border border-base-200/80 bg-base-100 shadow-sm not-prose`,children:E(`div`,{className:`card-body grid gap-4 lg:grid-cols-[minmax(0,1fr),18rem] lg:items-start`,children:[D(`ul`,{className:`m-0 grid gap-1 p-0`,children:D(Ze,{model:re})}),D(`div`,{className:`rounded-box border border-base-300 bg-base-200/40 p-4 text-sm text-base-content/70`,children:`单击切换展开，双击叶子节点会把它转换成 folder，并在当前层直接追加一个新子节点。`})]})})});C(()=>m(e,c,Je))});let G=a(`div`,c);r(c,G),b(G,`not-prose mt-10 space-y-4`);let Qe=a(`h2`,G);r(G,Qe),b(Qe,`text-2xl font-semibold`),r(Qe,g(`API`));let $e=s(`rue:component:anchor`);return r(G,$e),p(()=>{let e=y(Se,{rows:Ue});C(()=>m(e,G,$e))}),t})}),c,d),c})};export{Qe as default};