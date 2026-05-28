import{$ as e,Ct as t,J as n,Kt as r,Lt as i,Q as a,Vt as o,Y as s,Yt as c,Z as l,ct as u,d,et as f,ft as p,gt as m,jt as h,l as g,mt as _,ot as v,pt as y,t as b,tt as x,u as S,ut as C}from"./vapor-runtime-BR_2rwNk.js";import{a as w,n as T}from"./vapor-helpers-vapor-DkadWylb.js";import{i as E,r as D}from"./persistentSidebarPlayground-BLfmxcKI.js";import{n as O}from"./SidebarPlaygroundDesign-BScNtO2r.js";import{t as k}from"./PreviewBlock-DNT1sEzZ.js";var ee=({render:e})=>e(),A={title:`title`,key:`key`,children:`children`,disabled:`disabled`,selectable:`selectable`,checkable:`checkable`,disableCheckbox:`disableCheckbox`,isLeaf:`isLeaf`,icon:`icon`,className:`className`,id:`id`,pId:`pId`},j=(...e)=>e.filter(Boolean).join(` `),M=e=>typeof e==`object`&&!!e&&!Array.isArray(e),N=e=>typeof e==`string`||typeof e==`number`,P=e=>`${typeof e}:${String(e)}`,F=e=>{let t=[],n=new Set;return(e??[]).forEach(e=>{let r=P(e);n.has(r)||(n.add(r),t.push(e))}),t},I=(e,t)=>e?t?`${e} ${t}`:e:t??``,L=(e,t,n)=>e[n?.[t]??A[t]],te=(e,t)=>L(e,`title`,t)??e.title??e.key,R=e=>new Set(F(e).map(P)),ne=e=>e==null||typeof e==`boolean`?``:typeof e==`string`||typeof e==`number`?String(e):Array.isArray(e)?e.map(e=>ne(e)).filter(Boolean).join(` `):typeof e==`object`?[`title`,`label`,`name`,`text`,`description`,`children`].map(t=>ne(e[t])).filter(Boolean).join(` `):``,re=(e,t,n)=>{if(!t)return e;let r=M(t)?t:void 0,i=r?.id??n?.id??A.id,a=r?.pId??n?.pId??A.pId,o=r?.rootPId??0,s=n?.children??A.children,c=new Map;e.forEach((e,t)=>{let n=e[i]??e.key??t;c.set(n,{...e,[s]:[]})});let l=[];return e.forEach((e,t)=>{let n=e[i]??e.key??t,r=e[a],u=c.get(n);if(!u)return;if(r==null||r===o||!c.has(r)){l.push(u);return}let d=c.get(r);if(!d){l.push(u);return}let f=d[s]??[];f.push(u),d[s]=f}),l},z=(e,t)=>{let n=[],r={},i=(e,a,o,s)=>{let c=L(e,`key`,t),l=N(c)?c:o,u=P(l),d=L(e,`isLeaf`,t),f={key:l,keyText:u,title:te(e,t),depth:a,children:[],raw:e,disabled:!!L(e,`disabled`,t),selectable:L(e,`selectable`,t)!==!1,checkable:L(e,`checkable`,t)!==!1,disableCheckbox:!!L(e,`disableCheckbox`,t),isLeaf:!1,className:L(e,`className`,t),icon:L(e,`icon`,t),parentKeyText:s};n.push(f),r[u]=f;let p=L(e,`children`,t);return f.children=Array.isArray(p)?p.map((e,t)=>i(e,a+1,`${o}-${t}`,u)):[],f.isLeaf=d===!0?!0:d===!1?!1:f.children.length===0,f};return{roots:e.map((e,t)=>i(e,0,`node-${t}`)),flat:n,byKeyText:r}},ie=e=>{let t=[],n=e=>{!e.disabled&&e.checkable&&!e.disableCheckbox&&t.push(e.keyText),e.children.forEach(e=>n(e))};return n(e),t},ae=e=>{let t=[],n=e=>{t.push(e.key),e.children.forEach(e=>n(e))};return n(e),t},oe=(e,t,n)=>{let r=new Set,i=new Set,a={},o=e=>{let s=!e.disabled&&e.checkable&&!e.disableCheckbox,c=e.children.map(e=>o(e)).filter(e=>e.participates),l=t.has(e.keyText),u=l,d=!1;if(!n&&c.length>0){let e=c.every(e=>e.checked),t=c.some(e=>e.checked||e.halfChecked);u=l||e,d=!u&&t}let f={checked:u,halfChecked:d,participates:s||c.length>0};return a[e.keyText]=f,u&&s&&r.add(e.keyText),d&&s&&i.add(e.keyText),f};return e.forEach(e=>o(e)),{checkedKeys:r,halfCheckedKeys:i,stateMap:a}},se=(e,t,n,r)=>{let i=new Set(e),a=new Set(t),o=n.filter(e=>i.has(e.keyText)).map(e=>e.key).filter(N);return r?{checked:o,halfChecked:n.filter(e=>a.has(e.keyText)).map(e=>e.key).filter(N)}:o},ce=(e,t,n,r)=>{if(!n){let n=[],r=e=>{n.push({node:e,matched:!1}),t.has(e.keyText)&&e.children.forEach(e=>r(e))};return e.forEach(e=>r(e)),n}let i=e=>{let t=r(e),n=e.children.flatMap(e=>i(e));if(!t&&n.length===0)return[];if(t){let t=[{node:e,matched:!0}],n=e=>{t.push({node:e,matched:!1}),e.children.forEach(e=>n(e))};return e.children.forEach(e=>n(e)),t}return[{node:e,matched:!1},...n]};return e.flatMap(e=>i(e))},B=(e,t,n)=>t?typeof n==`function`?n(t,e):n===!1?!0:ne(e.title).toLowerCase().includes(t.toLowerCase()):!0,le=(e,t,n)=>{let r=t.parentKeyText;for(;r;){if(r===e.keyText)return!0;r=n[r]?.parentKeyText}return!1},ue=e=>{let t=!!e,n=M(e)?e:void 0;return{enabled:t,icon:n?.icon,nodeDraggable:r=>t?typeof e==`function`?e(r):n&&typeof n.nodeDraggable==`function`?n.nodeDraggable(r):!0:!1}},de=(e,t,n,r,i)=>{if(!i||!n||!r)return{items:e,topSpacer:0,bottomSpacer:0};let a=r+4,o=Math.max(1,Math.ceil(n/a))+12,s=Math.max(0,e.length-o),c=Math.min(s,Math.max(0,Math.floor(t/a)-6)),l=Math.min(e.length,c+o);return{items:e.slice(c,l),topSpacer:c*a,bottomSpacer:Math.max(0,(e.length-l)*a)}},V=e=>{if(e===-1)return`before`;if(e===1)return`after`;if(e===0)return`inside`},fe=(e,t)=>e.map(e=>t[e]?.key).filter(N),pe=(e,t)=>{if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0},me=e=>{switch(e){case`small`:case`sm`:return{headerPadding:`px-4 py-3`,bodyPadding:`px-3 py-3`,rowPadding:`py-1.5`,textClass:`text-sm`,rowMinHeight:36,rowEstimate:42};case`large`:case`lg`:return{headerPadding:`px-5 py-4`,bodyPadding:`px-4 py-4`,rowPadding:`py-2.5`,textClass:`text-[0.95rem]`,rowMinHeight:44,rowEstimate:50};default:return{headerPadding:`px-4 py-3.5`,bodyPadding:`px-3.5 py-3.5`,rowPadding:`py-2`,textClass:`text-sm`,rowMinHeight:40,rowEstimate:46}}},he=e=>{switch(e){case`error`:return`border-error/55 shadow-[0_0_0_1px_rgba(248,113,113,0.14)]`;case`warning`:return`border-warning/55 shadow-[0_0_0_1px_rgba(251,191,36,0.14)]`;default:return``}},ge=t=>d(n=>{let r=e(`span`,n);v(r,`aria-hidden`,`true`),c(()=>{u(r,String(j(`inline-flex size-4 items-center justify-center text-base-content/55 transition-transform duration-150`,t.expanded&&`rotate-90`,t.hidden&&`opacity-0`)))});let i=e(`svg`,r);s(r,i),v(i,`viewBox`,`0 0 20 20`),v(i,`fill`,`none`),u(i,`size-4`);let a=e(`path`,i);return s(i,a),v(a,`d`,`M7.5 5.5L12.5 10L7.5 14.5`),v(a,`stroke`,`currentColor`),v(a,`strokeWidth`,`1.8`),v(a,`strokeLinecap`,`round`),v(a,`strokeLinejoin`,`round`),r}),_e=()=>d(t=>{let n=e(`span`,t);return u(n,`loading loading-spinner loading-xs text-base-content/55`),v(n,`aria-hidden`,`true`),n}),ve=()=>d(t=>{let n=e(`svg`,t);v(n,`viewBox`,`0 0 20 20`),v(n,`fill`,`currentColor`),u(n,`size-4`);let r=e(`circle`,n);s(n,r),v(r,`cx`,`6`),v(r,`cy`,`5`),v(r,`r`,`1.2`);let i=e(`circle`,n);s(n,i),v(i,`cx`,`6`),v(i,`cy`,`10`),v(i,`r`,`1.2`);let a=e(`circle`,n);s(n,a),v(a,`cx`,`6`),v(a,`cy`,`15`),v(a,`r`,`1.2`);let o=e(`circle`,n);s(n,o),v(o,`cx`,`13`),v(o,`cy`,`5`),v(o,`r`,`1.2`);let c=e(`circle`,n);s(n,c),v(c,`cx`,`13`),v(c,`cy`,`10`),v(c,`r`,`1.2`);let l=e(`circle`,n);return s(n,l),v(l,`cx`,`13`),v(l,`cy`,`15`),v(l,`r`,`1.2`),n}),ye=t=>d(n=>{let r=e(`svg`,n);v(r,`viewBox`,`0 0 24 24`),v(r,`fill`,`none`),u(r,`size-5`);let i=l(`rue:slot:anchor`);return s(r,i),c(()=>{let n=t.expanded?d(()=>{let t=a(),n=e(`path`,t);return s(t,n),v(n,`d`,`M3 8.5a2 2 0 0 1 2-2h4l1.4 1.5H19a2 2 0 0 1 1.9 2.6l-1.4 5A2 2 0 0 1 17.6 17H6a2 2 0 0 1-1.93-1.48L3 8.5Z`),v(n,`stroke`,`currentColor`),v(n,`strokeWidth`,`1.6`),v(n,`strokeLinejoin`,`round`),t}):d(()=>{let t=a(),n=e(`path`,t);return s(t,n),v(n,`d`,`M3 7.5a2 2 0 0 1 2-2h4l1.4 1.5H19a2 2 0 0 1 2 2V16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7.5Z`),v(n,`stroke`,`currentColor`),v(n,`strokeWidth`,`1.6`),v(n,`strokeLinejoin`,`round`),t});o(()=>g(n,r,i))}),r}),be=()=>d(t=>{let n=e(`svg`,t);v(n,`viewBox`,`0 0 24 24`),v(n,`fill`,`none`),u(n,`size-5`);let r=e(`path`,n);s(n,r),v(r,`d`,`M8 3.5h6l4 4V19a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5.5a2 2 0 0 1 2-2Z`),v(r,`stroke`,`currentColor`),v(r,`strokeWidth`,`1.6`),v(r,`strokeLinejoin`,`round`);let i=e(`path`,n);return s(n,i),v(i,`d`,`M14 3.5V8h4`),v(i,`stroke`,`currentColor`),v(i,`strokeWidth`,`1.6`),v(i,`strokeLinejoin`,`round`),n}),xe=t=>{let{__rue_rest_omit_0:S,__rue_rest_omit_1:E,__rue_rest_omit_2:O,__rue_rest_omit_3:k,__rue_rest_omit_4:A,__rue_rest_omit_5:M,__rue_rest_omit_6:L,__rue_rest_omit_7:te,__rue_rest_omit_8:ne,__rue_rest_omit_9:xe,__rue_rest_omit_10:H,__rue_rest_omit_11:U,__rue_rest_omit_12:Se,__rue_rest_omit_13:Ce,__rue_rest_omit_14:we,__rue_rest_omit_15:Te,__rue_rest_omit_16:Ee,__rue_rest_omit_17:De,__rue_rest_omit_18:Oe,__rue_rest_omit_19:ke,__rue_rest_omit_20:Ae,__rue_rest_omit_21:je,__rue_rest_omit_22:Me,__rue_rest_omit_23:Ne,__rue_rest_omit_24:Pe,__rue_rest_omit_25:Fe,__rue_rest_omit_26:Ie,__rue_rest_omit_27:Le,__rue_rest_omit_28:Re,__rue_rest_omit_29:ze,__rue_rest_omit_30:Be,__rue_rest_omit_31:Ve,__rue_rest_omit_32:He,__rue_rest_omit_33:Ue,__rue_rest_omit_34:We,__rue_rest_omit_35:Ge,__rue_rest_omit_36:W,__rue_rest_omit_37:G,__rue_rest_omit_38:Ke,__rue_rest_omit_39:qe,__rue_rest_omit_40:Je,__rue_rest_omit_41:K,__rue_rest_omit_42:Ye,__rue_rest_omit_43:Xe,__rue_rest_omit_44:Ze,__rue_rest_omit_45:Qe,__rue_rest_omit_46:$e,__rue_rest_omit_47:et,__rue_rest_omit_48:tt,__rue_rest_omit_49:nt,__rue_rest_omit_50:q,__rue_rest_omit_51:rt,__rue_rest_omit_52:it,__rue_rest_omit_53:at,__rue_rest_omit_54:ot,rest:st,sourceTreeData:ct,normalizedTree:lt,componentSize:J,dragConfig:ut,initialExpandedKeys:dt,uncontrolledSelectedKeysRef:ft,uncontrolledCheckedKeysRef:pt,uncontrolledExpandedKeysRef:mt,controlledCheckedKeyTextsRef:ht,searchValueRef:Y,loadingKeyTextsRef:X,scrollTopRef:gt,directoryLastSelectedKeyTextRef:_t,directoryCachedSelectedKeyTextsRef:vt,dragStateRef:Z,dragHoverDepthRef:yt,mergedSelectedKeys:bt,mergedExpandedKeys:xt,mergedSearchValue:St,mergedCheckedKeyTexts:Ct,selectedKeyTextSet:Q,expandedKeyTextSet:wt,checkState:$,visibleNodes:Tt,estimatedRowHeight:Et,viewportHeight:Dt,fixedVirtualRowHeight:Ot,virtualSlice:kt,emitExpand:At,commitSelectedKeys:jt,commitCheckedKeys:Mt,toggleExpanded:Nt,handleExpandToggle:Pt,selectTreeNode:Ft,handleCheck:It,handleSearchInput:Lt,handleBodyScroll:Rt,clearDragHoverState:zt,setDragHoverState:Bt,updateDragHoverDepth:Vt,resetDragState:Ht,resolveDropContext:Ut,handleDragStartNode:Wt,handleDragEnterNode:Gt,handleDragOverNode:Kt,handleDragLeaveNode:qt,handleDragEndNode:Jt,handleDropNode:Yt,renderSwitcher:Xt,renderDragHandle:Zt,renderGapPlaceholder:Qt,renderNodeIcon:$t,handleLabelActivate:en,bodyViewportStyle:tn}=w(`useSetup:0:0:dup2`,()=>r(()=>{let{className:n,style:_,treeData:y,fieldNames:x,treeDataSimpleMode:S,selectedKeys:C,defaultSelectedKeys:T,checkedKeys:E,defaultCheckedKeys:O,expandedKeys:k,defaultExpandedKeys:ee,defaultExpandAll:A,multiple:M,checkable:L,checkStrictly:te,showLine:ne,showIcon:V,blockNode:he,selectable:xe,disabled:H,size:U,status:Se,draggable:Ce,allowDrop:we,virtual:Te,height:Ee,itemHeight:De,titleRender:Oe,switcherIcon:ke,icon:Ae,filterTreeNode:je,searchValue:Me,defaultSearchValue:Ne,searchPlaceholder:Pe,allowSearch:Fe,loadData:Ie,emptyText:Le,onSelect:Re,onCheck:ze,onExpand:Be,onSearch:Ve,onDoubleClick:He,onDragStart:Ue,onDragEnter:We,onDragOver:Ge,onDragLeave:W,onDragEnd:G,onDrop:Ke,onScroll:qe,classNames:Je,styles:K,directoryMode:Ye,expandAction:Xe,toggleSelect:Ze,rangeSelect:Qe,...$e}=t,et=w(`computed:1:0`,()=>m(()=>re(t.treeData===void 0?[]:t.treeData,t.treeDataSimpleMode,t.fieldNames))),tt=et,nt=w(`computed:1:1`,()=>m(()=>z(tt.get(),t.fieldNames))),q=nt,rt=w(`computed:1:2`,()=>m(()=>me(t.size))),it=rt,at=w(`computed:1:3`,()=>m(()=>ue(t.draggable))),ot=at,st=t.defaultExpandAll?q.get().flat.filter(e=>e.children.length>0||!e.isLeaf).map(e=>e.key):t.defaultExpandedKeys??[],ct=w(`ref:1:4`,()=>i(F(t.defaultSelectedKeys??t.selectedKeys))),lt=w(`ref:1:5`,()=>i(F(t.defaultCheckedKeys))),J=w(`ref:1:6`,()=>i(F(st))),ut=w(`ref:1:7`,()=>i(t.checkedKeys===void 0?new Set:Array.isArray(t.checkedKeys)?R(t.checkedKeys):R(t.checkedKeys.checked))),dt=w(`ref:1:8`,()=>i(t.defaultSearchValue??``)),ft=w(`ref:1:9`,()=>i([])),pt=w(`ref:1:10`,()=>i(0)),mt=w(`ref:1:11`,()=>i(null)),ht=w(`ref:1:12`,()=>i([])),Y=w(`ref:1:13`,()=>i({})),X=w(`ref:1:14`,()=>i({}));if(t.checkedKeys!==void 0){let e=Array.isArray(t.checkedKeys)?R(t.checkedKeys):R(t.checkedKeys.checked);pe(ut.value,e)||(ut.value=e)}let gt=w(`computed:1:15`,()=>m(()=>t.selectedKeys===void 0?ct.value:F(t.selectedKeys))),_t=gt,vt=w(`computed:1:16`,()=>m(()=>t.expandedKeys===void 0?J.value:F(t.expandedKeys))),Z=vt,yt=w(`computed:1:17`,()=>m(()=>t.searchValue===void 0?dt.value:t.searchValue)),bt=yt,xt=t.checkedKeys===void 0?R(lt.value):ut.value,St=w(`computed:1:18`,()=>m(()=>R(_t.get()))),Ct=St,Q=w(`computed:1:19`,()=>m(()=>R(Z.get()))),wt=Q,$=w(`computed:1:20`,()=>m(()=>oe(q.get().roots,xt,!!t.checkStrictly))),Tt=$,Et=w(`computed:1:21`,()=>m(()=>ce(q.get().roots,wt.get(),bt.get(),e=>B(e,bt.get(),t.filterTreeNode)))),Dt=Et,Ot=w(`computed:1:22`,()=>m(()=>t.itemHeight??it.get().rowEstimate)),kt=Ot,At=w(`computed:1:23`,()=>m(()=>typeof t.height==`number`&&t.height>0?t.height:void 0)),jt=At,Mt=w(`computed:1:24`,()=>m(()=>(t.virtual===void 0?!0:t.virtual)!==!1&&jt.get()&&typeof t.itemHeight==`number`&&t.itemHeight>0?t.itemHeight:void 0)),Nt=w(`computed:1:25`,()=>m(()=>de(Dt.get(),pt.value,jt.get(),kt.get(),(t.virtual===void 0?!0:t.virtual)!==!1&&!!jt.get()))),Pt=(e,n,r)=>{let i=F(e);return t.expandedKeys===void 0&&(J.value=i),t.onExpand&&t.onExpand(i,{node:n,expanded:i.some(e=>P(e)===n.keyText),nativeEvent:r}),i},Ft=(e,n,r)=>{let i=F(e).filter(e=>q.get().byKeyText[P(e)]),a=i.map(e=>q.get().byKeyText[P(e)]).filter(Boolean);t.selectedKeys===void 0&&(ct.value=i),t.onSelect&&t.onSelect(i,{node:n,nativeEvent:r,selected:i.some(e=>P(e)===n.keyText),selectedNodes:a})},It=(e,n,r)=>{let i=oe(q.get().roots,e,!!t.checkStrictly),a=se(Array.from(i.checkedKeys),Array.from(i.halfCheckedKeys),q.get().flat,!!t.checkStrictly);t.checkedKeys===void 0?lt.value=t.checkStrictly?a.checked:a:ut.value=new Set(i.checkedKeys),t.onCheck&&t.onCheck(a,{node:n,nativeEvent:r,checked:i.checkedKeys.has(n.keyText),checkedNodes:Array.from(i.checkedKeys).map(e=>q.get().byKeyText[e]).filter(Boolean),halfCheckedKeys:Array.from(i.halfCheckedKeys).map(e=>q.get().byKeyText[e]?.key).filter(N)})},Lt=async(e,n)=>{if(t.disabled||e.disabled)return Z.get();let r=wt.get().has(e.keyText),i=r?Z.get().filter(t=>P(t)!==e.keyText):[...Z.get(),e.key];if(!r&&t.loadData&&!e.isLeaf&&e.children.length===0&&!ft.value.includes(e.keyText)){ft.value=[...ft.value,e.keyText];try{await t.loadData(e)}finally{ft.value=ft.value.filter(t=>t!==e.keyText)}}return Pt(i,e,n)},Rt=(e,t)=>{t.preventDefault(),t.stopPropagation(),Lt(e,t)},zt=(e,n)=>{if(!(t.disabled||e.disabled||!(t.selectable===void 0||t.selectable)||!e.selectable)){if(t.directoryMode){let r=!!t.multiple&&!!(t.toggleSelect===void 0||t.toggleSelect)&&!!(n?.ctrlKey||n?.metaKey),i=!!t.multiple&&(t.rangeSelect===void 0?`append`:t.rangeSelect)!==!1&&!!n?.shiftKey&&!!mt.value;if(t.multiple&&i){let r=Dt.get().map(e=>e.node.keyText),i=mt.value??e.keyText,a=r.indexOf(i),o=r.indexOf(e.keyText),s=Math.min(a,o),c=Math.max(a,o),l=r.slice(s,c+1),u=(t.rangeSelect===void 0?`append`:t.rangeSelect)===`append`?ht.value.length?ht.value:_t.get().map(P):[];Ft(fe(Array.from(new Set([...u,...l])),q.get().byKeyText),e,n);return}if(t.multiple&&r){let t=Ct.get().has(e.keyText)?_t.get().filter(t=>P(t)!==e.keyText):[..._t.get(),e.key];mt.value=e.keyText,ht.value=t.map(P),Ft(t,e,n);return}mt.value=e.keyText,ht.value=[e.keyText],Ft([e.key],e,n);return}if(t.multiple){Ft(Ct.get().has(e.keyText)?_t.get().filter(t=>P(t)!==e.keyText):[..._t.get(),e.key],e,n);return}Ft(Ct.get().has(e.keyText)?[]:[e.key],e,n)}},Bt=(e,n)=>{if(n.preventDefault(),n.stopPropagation(),t.disabled||e.disabled||!e.checkable||e.disableCheckbox)return;let r=new Set(xt),i=Tt.get().checkedKeys.has(e.keyText);if(t.checkStrictly)i?r.delete(e.keyText):r.add(e.keyText);else{let t=ie(e);i?t.forEach(e=>r.delete(e)):t.forEach(e=>r.add(e))}It(r,e,n)},Vt=e=>{t.searchValue===void 0&&(dt.value=e),t.onSearch&&t.onSearch(e)},Ht=e=>{pt.value=e.currentTarget.scrollTop,t.onScroll&&t.onScroll(e)},Ut=e=>{!e||Y.value.overKeyText!==e||(Y.value={dragKeyText:Y.value.dragKeyText})},Wt=(e,t)=>{Y.value.overKeyText===e&&Y.value.dropPosition===t||(Y.value={...Y.value,overKeyText:e,dropPosition:t})},Gt=(e,t)=>{let n={...X.value},r=n[e]??0,i=Math.max(r+t,0);return i>0?n[e]=i:delete n[e],X.value=n,i},Kt=()=>{X.value={},Y.value={}},qt=(e,n,r)=>{let i=Y.value.dragKeyText;if(!i)return null;let a=q.get().byKeyText[i];if(!a||a.keyText===e.keyText||le(a,e,q.get().byKeyText))return null;let o=r?.getBoundingClientRect?.(),s=`clientY`in n?n.clientY:void 0,c=0;o&&typeof s==`number`&&(s<o.top+o.height*.25?c=-1:s>o.bottom-o.height*.25&&(c=1));let l=c!==0;return t.allowDrop&&!t.allowDrop({dragNode:a,dropNode:e,dropPosition:c,dropToGap:l})?null:{dragNode:a,dropPosition:c}};return{__rue_rest_omit_0:n,__rue_rest_omit_1:_,__rue_rest_omit_2:y,__rue_rest_omit_3:x,__rue_rest_omit_4:S,__rue_rest_omit_5:C,__rue_rest_omit_6:T,__rue_rest_omit_7:E,__rue_rest_omit_8:O,__rue_rest_omit_9:k,__rue_rest_omit_10:ee,__rue_rest_omit_11:A,__rue_rest_omit_12:M,__rue_rest_omit_13:L,__rue_rest_omit_14:te,__rue_rest_omit_15:ne,__rue_rest_omit_16:V,__rue_rest_omit_17:he,__rue_rest_omit_18:xe,__rue_rest_omit_19:H,__rue_rest_omit_20:U,__rue_rest_omit_21:Se,__rue_rest_omit_22:Ce,__rue_rest_omit_23:we,__rue_rest_omit_24:Te,__rue_rest_omit_25:Ee,__rue_rest_omit_26:De,__rue_rest_omit_27:Oe,__rue_rest_omit_28:ke,__rue_rest_omit_29:Ae,__rue_rest_omit_30:je,__rue_rest_omit_31:Me,__rue_rest_omit_32:Ne,__rue_rest_omit_33:Pe,__rue_rest_omit_34:Fe,__rue_rest_omit_35:Ie,__rue_rest_omit_36:Le,__rue_rest_omit_37:Re,__rue_rest_omit_38:ze,__rue_rest_omit_39:Be,__rue_rest_omit_40:Ve,__rue_rest_omit_41:He,__rue_rest_omit_42:Ue,__rue_rest_omit_43:We,__rue_rest_omit_44:Ge,__rue_rest_omit_45:W,__rue_rest_omit_46:G,__rue_rest_omit_47:Ke,__rue_rest_omit_48:qe,__rue_rest_omit_49:Je,__rue_rest_omit_50:K,__rue_rest_omit_51:Ye,__rue_rest_omit_52:Xe,__rue_rest_omit_53:Ze,__rue_rest_omit_54:Qe,rest:$e,sourceTreeData:et,normalizedTree:nt,componentSize:rt,dragConfig:at,initialExpandedKeys:st,uncontrolledSelectedKeysRef:ct,uncontrolledCheckedKeysRef:lt,uncontrolledExpandedKeysRef:J,controlledCheckedKeyTextsRef:ut,searchValueRef:dt,loadingKeyTextsRef:ft,scrollTopRef:pt,directoryLastSelectedKeyTextRef:mt,directoryCachedSelectedKeyTextsRef:ht,dragStateRef:Y,dragHoverDepthRef:X,mergedSelectedKeys:gt,mergedExpandedKeys:vt,mergedSearchValue:yt,mergedCheckedKeyTexts:xt,selectedKeyTextSet:St,expandedKeyTextSet:Q,checkState:$,visibleNodes:Et,estimatedRowHeight:Ot,viewportHeight:At,fixedVirtualRowHeight:Mt,virtualSlice:Nt,emitExpand:Pt,commitSelectedKeys:Ft,commitCheckedKeys:It,toggleExpanded:Lt,handleExpandToggle:Rt,selectTreeNode:zt,handleCheck:Bt,handleSearchInput:Vt,handleBodyScroll:Ht,clearDragHoverState:Ut,setDragHoverState:Wt,updateDragHoverDepth:Gt,resetDragState:Kt,resolveDropContext:qt,handleDragStartNode:(e,n)=>{!ot.get().enabled||!ot.get().nodeDraggable(e)||t.disabled||e.disabled||(n.dataTransfer&&(n.dataTransfer.effectAllowed=`move`,n.dataTransfer.setData(`text/plain`,e.keyText)),X.value={},Y.value={dragKeyText:e.keyText},t.onDragStart&&t.onDragStart({event:n,node:e}))},handleDragEnterNode:(e,n)=>{if(!Y.value.dragKeyText)return;Gt(e.keyText,1);let r=qt(e,n,n.currentTarget);if(!r){Ut(e.keyText);return}n.preventDefault(),Wt(e.keyText,r.dropPosition);let i=Z.get();r.dropPosition===0&&!wt.get().has(e.keyText)&&(e.children.length>0||!e.isLeaf)&&(i=Pt([...Z.get(),e.key],e,n)),t.onDragEnter&&t.onDragEnter({event:n,node:e,expandedKeys:i})},handleDragOverNode:(e,n)=>{if(!Y.value.dragKeyText)return;let r=qt(e,n,n.currentTarget);if(!r){Ut(e.keyText);return}n.preventDefault(),n.dataTransfer&&(n.dataTransfer.dropEffect=`move`),Wt(e.keyText,r.dropPosition),t.onDragOver&&t.onDragOver({event:n,node:e})},handleDragLeaveNode:(e,n)=>{Gt(e.keyText,-1)===0&&Ut(e.keyText),t.onDragLeave&&t.onDragLeave({event:n,node:e})},handleDragEndNode:(e,n)=>{Kt(),t.onDragEnd&&t.onDragEnd({event:n,node:e})},handleDropNode:(e,n)=>{let r=qt(e,n,n.currentTarget);if(!r){Kt();return}n.preventDefault(),n.stopPropagation(),t.onDrop&&t.onDrop({event:n,node:e,dragNode:r.dragNode,dragNodesKeys:ae(r.dragNode),dropPosition:r.dropPosition,dropToGap:r.dropPosition!==0}),Kt()},renderSwitcher:(e,n,i,a,o,s)=>{let{renderProps:c}=w(`useSetup:0:0`,()=>r(()=>({renderProps:{node:e,expanded:n,selected:i,checked:a,halfChecked:o,loading:s}})));return typeof t.switcherIcon==`function`?t.switcherIcon(c):t.switcherIcon===void 0?s?D(_e,{}):D(ge,{expanded:n,hidden:e.isLeaf&&e.children.length===0}):t.switcherIcon},renderDragHandle:n=>!ot.get().enabled||ot.get().icon===!1||!ot.get().nodeDraggable(n)?null:d(n=>{let r=e(`span`,n);v(r,`aria-hidden`,`true`),c(()=>{u(r,String(I(`inline-flex size-6 shrink-0 cursor-grab items-center justify-center rounded-lg text-base-content/35 transition group-hover:text-base-content/55`,t.classNames?.dragHandle)))}),c(()=>{let e=t.styles?.dragHandle;p(r,e)}),v(r,`data-rue-tree-drag-handle`,`true`);let i=l(`rue:slot:anchor`);return s(r,i),c(()=>{let e=ot.get().icon??d(()=>{let e=a(),t=l(`rue:component:anchor`);return s(e,t),g(b(ve,{}),e,t),e});o(()=>g(e,r,i))}),r}),renderGapPlaceholder:(t,n)=>d(r=>{let i=e(`div`,r);c(()=>{u(i,String(j(`pointer-events-none absolute inset-x-0 z-10 flex items-center gap-2 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-primary/85`,n===`before`?`-top-2.5`:`-bottom-2.5`)))}),c(()=>{p(i,{paddingLeft:`${t.depth*18+20}px`})}),c(()=>{v(i,`data-rue-tree-drop-placeholder`,String(n))});let a=e(`span`,i);s(i,a),u(a,`h-[2px] flex-1 rounded-full bg-primary/60`);let o=e(`span`,i);return s(i,o),u(o,`rounded-full bg-primary/10 px-2 py-1 text-[10px]`),s(o,f(`插入到此处`)),i}),renderNodeIcon:(n,i,f,p,m,h)=>{let{renderProps:_}=w(`useSetup:0:0:dup1`,()=>r(()=>({renderProps:{node:n,expanded:i,selected:f,checked:p,halfChecked:m,loading:h}})));return typeof t.icon==`function`?t.icon(_):t.icon===void 0?n.icon===void 0?t.showIcon?t.directoryMode?d(t=>{let r=e(`span`,t);u(r,`inline-flex size-6 items-center justify-center text-base-content/60`);let f=l(`rue:slot:anchor`);return s(r,f),c(()=>{let e=n.children.length>0||!n.isLeaf?d(()=>{let e=a(),t=l(`rue:component:anchor`);return s(e,t),c(()=>{let n=b(ye,{expanded:i});o(()=>g(n,e,t))}),e}):d(()=>{let e=a(),t=l(`rue:component:anchor`);return s(e,t),g(b(be,{}),e,t),e});o(()=>g(e,r,f))}),r}):d(t=>{let r=e(`span`,t);u(r,`inline-flex size-6 items-center justify-center rounded-xl bg-base-200/80 text-[11px] text-base-content/60`);let i=l(`rue:slot:anchor`);return s(r,i),c(()=>{let e=n.children.length>0||!n.isLeaf?`DIR`:`DOC`;o(()=>g(e,r,i))}),r}):null:n.icon:t.icon},handleLabelActivate:(e,n,r)=>{n.preventDefault(),n.stopPropagation(),r===`doubleClick`&&t.onDoubleClick&&t.onDoubleClick(n,e);let i=t.directoryMode&&(t.expandAction===void 0?!1:t.expandAction)===r&&(e.children.length>0||!e.isLeaf);if(r===`click`&&i){h(()=>{Lt(e,n),zt(e,n)});return}i&&Lt(e,n),r===`click`&&zt(e,n)},bodyViewportStyle:w(`computed:1:26`,()=>m(()=>jt.get()?(t.virtual===void 0?!0:t.virtual)===!1?{maxHeight:`${jt.get()}px`,overflowY:`auto`}:{height:`${jt.get()}px`,overflowY:`auto`}:{overflowY:`visible`}))}}));return d(r=>{let i=e(`section`,r);c(()=>{u(i,String(I(I(I(j(`rue-tree overflow-hidden rounded-[1.35rem] border border-base-300/70 bg-gradient-to-b from-base-100 via-base-100 to-base-200/35 shadow-[0_18px_40px_-32px_rgba(15,23,42,0.35)]`,t.directoryMode&&`rue-directory-tree`),he(t.status)),t.classNames?.root),t.className)))}),c(()=>{p(i,{...t.styles?.root,...t.style})}),v(i,`data-rue-tree`,`true`);let m=l(`rue:slot:anchor`);s(i,m),c(()=>{let r=t.allowSearch?d(()=>{let r=a(),i=e(`div`,r);s(r,i),c(()=>{u(i,String(I(I(`border-b border-base-300/70 ${J.get().headerPadding}`,t.classNames?.header),t.classNames?.search)))}),c(()=>{p(i,{...t.styles?.header,...t.styles?.search})});let o=e(`label`,i);s(i,o),u(o,`input input-bordered flex w-full items-center gap-2 rounded-2xl border-base-300/80 bg-base-100/85 px-3 shadow-sm focus-within:border-primary/45 focus-within:outline-none`);let l=e(`svg`,o);s(o,l),v(l,`viewBox`,`0 0 24 24`),v(l,`fill`,`none`),v(l,`stroke`,`currentColor`),v(l,`strokeWidth`,`1.8`),u(l,`size-4 text-base-content/50`);let d=e(`circle`,l);s(l,d),v(d,`cx`,`11`),v(d,`cy`,`11`),v(d,`r`,`7`);let f=e(`path`,l);s(l,f),v(f,`strokeLinecap`,`round`),v(f,`d`,`m20 20-3.5-3.5`);let m=e(`input`,o);return s(o,m),v(m,`type`,`text`),c(()=>{y(m,St.get())}),c(()=>{v(m,`placeholder`,String(t.searchPlaceholder===void 0?`搜索节点`:t.searchPlaceholder))}),u(m,`grow border-none bg-transparent px-0 py-2 text-sm outline-none`),n(m,`input`,e=>Lt(e.currentTarget.value)),r}):``;o(()=>g(r,i,m))});let h=e(`div`,i);s(i,h),c(()=>{u(h,String(I(`flex flex-col ${J.get().bodyPadding}`,t.classNames?.body)))}),c(()=>{let e=t.styles?.body;p(h,e)});let S=e(`div`,h);s(h,S),c(()=>{u(S,String(Dt.get()?`overflow-auto`:`overflow-visible`))}),c(()=>{p(S,tn.get())}),n(S,`scroll`,e=>Rt(e)),v(S,`data-rue-tree-body`,`true`),s(S,f(` `));let w=l(`rue:slot:anchor`);s(S,w),c(()=>{let t=kt.get().topSpacer>0?d(()=>{let t=a(),n=e(`div`,t);return s(t,n),c(()=>{p(n,{height:`${kt.get().topSpacer}px`})}),v(n,`aria-hidden`,`true`),t}):``;o(()=>g(t,S,w))}),s(S,f(` `));let E=e(`div`,S);s(S,E),c(()=>{u(E,String(Tt.get().length?`space-y-1`:`hidden`))}),c(()=>{v(E,`aria-hidden`,String(Tt.get().length?void 0:`true`))});let D=l(`rue:list:start`),O=l(`rue:list:end`);s(E,D),s(E,O);let k=new Map;c(()=>{k=T({items:kt.get().items||[],getKey:(e,t)=>e.node.keyText,elements:k,parent:E,before:O,singleRoot:!0,trackIndex:!1,start:D,renderItem:(r,i,m,h,y)=>{g(d(()=>{let i=a(),m=e(`div`,i);s(i,m),c(()=>{v(m,`key`,String(r.node.keyText))}),u(m,`relative flex flex-col`);let h=l(`rue:slot:anchor`);s(m,h),c(()=>{let e=(Z.value.overKeyText===r.node.keyText?V(Z.value.dropPosition):void 0)===`before`?Qt(r.node,`before`):``;o(()=>g(e,m,h))});let y=e(`div`,m);s(m,y),c(()=>{u(y,String(I(I(j(`group flex items-center gap-2 rounded-2xl px-2.5 ${J.get().rowPadding} transition duration-200 ease-out`,r.matched&&`bg-primary/8`,Q.get().has(r.node.keyText)&&`bg-primary/18 ring-1 ring-primary/30 shadow-[0_18px_32px_-24px_rgba(37,99,235,0.85)]`,t.showLine&&r.node.depth>0&&`border-l border-base-300/60`,t.blockNode?`w-full`:``,Z.value.overKeyText===r.node.keyText&&Z.value.dropPosition===0?`ring-2 ring-primary/35 ring-inset`:``,r.node.className),t.classNames?.node),t.disabled||r.node.disabled?`opacity-55`:``)))}),c(()=>{p(y,{paddingLeft:`${r.node.depth*18+8}px`,minHeight:Ot.get()?void 0:`${J.get().rowMinHeight}px`,height:Ot.get()?`${Ot.get()}px`:void 0,boxSizing:Ot.get()?`border-box`:void 0,...t.styles?.node})}),c(()=>{v(y,`data-rue-tree-node`,String(r.node.keyText))}),c(()=>{v(y,`data-rue-tree-drop-position`,String(Z.value.overKeyText===r.node.keyText?String(Z.value.dropPosition??0):``))}),c(()=>{v(y,`data-rue-tree-drop-intent`,String((Z.value.overKeyText===r.node.keyText?V(Z.value.dropPosition):void 0)??``))}),c(()=>{v(y,`draggable`,String(ut.get().enabled&&ut.get().nodeDraggable(r.node)&&!t.disabled&&!r.node.disabled))}),n(y,`dragstart`,e=>Wt(r.node,e)),n(y,`dragenter`,e=>Gt(r.node,e)),n(y,`dragover`,e=>Kt(r.node,e)),n(y,`dragleave`,e=>qt(r.node,e)),n(y,`dragend`,e=>Jt(r.node,e)),n(y,`drop`,e=>Yt(r.node,e));let S=e(`button`,y);s(y,S),v(S,`type`,`button`),c(()=>{u(S,String(I(`inline-flex size-7 shrink-0 items-center justify-center rounded-xl hover:bg-base-200 disabled:cursor-not-allowed`,t.classNames?.switcher)))}),c(()=>{let e=t.styles?.switcher;p(S,e)}),c(()=>{C(S,!(t.loadData||r.node.children.length>0||!r.node.isLeaf)||t.disabled||r.node.disabled)}),c(()=>{v(S,`aria-label`,String(St.get()||wt.get().has(r.node.keyText)?`折叠节点`:`展开节点`))}),n(S,`click`,e=>Pt(r.node,e));let w=l(`rue:slot:anchor`);s(S,w),c(()=>{let e=Xt(r.node,St.get()?!0:wt.get().has(r.node.keyText),Q.get().has(r.node.keyText),($.get().stateMap[r.node.keyText]??{checked:!1,halfChecked:!1,participates:!0}).checked,($.get().stateMap[r.node.keyText]??{checked:!1,halfChecked:!1,participates:!0}).halfChecked,X.value.includes(r.node.keyText));o(()=>g(e,S,w))});let T=l(`rue:slot:anchor`);s(y,T),c(()=>{let i=t.checkable?d(()=>{let i=a(),o=e(`button`,i);s(i,o),c(()=>{v(o,`key`,String(`checkbox-${r.node.keyText}-${($.get().stateMap[r.node.keyText]??{checked:!1,halfChecked:!1,participates:!0}).checked?`checked`:($.get().stateMap[r.node.keyText]??{checked:!1,halfChecked:!1,participates:!0}).halfChecked?`mixed`:`unchecked`}`))}),v(o,`type`,`button`),v(o,`role`,`checkbox`),c(()=>{v(o,`aria-checked`,String(($.get().stateMap[r.node.keyText]??{checked:!1,halfChecked:!1,participates:!0}).halfChecked?`mixed`:($.get().stateMap[r.node.keyText]??{checked:!1,halfChecked:!1,participates:!0}).checked?`true`:`false`))}),c(()=>{u(o,String(I(I(j(`inline-flex size-[1.1rem] shrink-0 items-center justify-center rounded-[0.4rem] border text-[0.75rem] font-semibold shadow-sm transition-all duration-150`,($.get().stateMap[r.node.keyText]??{checked:!1,halfChecked:!1,participates:!0}).checked||($.get().stateMap[r.node.keyText]??{checked:!1,halfChecked:!1,participates:!0}).halfChecked?`border-primary/95 bg-primary text-primary-content shadow-[0_0_0_1px_rgba(37,99,235,0.22)]`:`border-base-content/30 bg-base-100 text-base-content/0 shadow-[0_0_0_1px_rgba(15,23,42,0.06)]`,(t.disabled||r.node.disabled||r.node.disableCheckbox||!r.node.checkable)&&`opacity-45`),t.classNames?.checkbox),t.disabled||r.node.disabled||r.node.disableCheckbox||!r.node.checkable?`cursor-not-allowed`:``)))}),c(()=>{let e=t.styles?.checkbox;p(o,e)}),c(()=>{C(o,t.disabled||r.node.disabled||r.node.disableCheckbox||!r.node.checkable)}),n(o,`click`,e=>It(r.node,e));let l=x(o);return s(o,l),c(()=>{_(l,($.get().stateMap[r.node.keyText]??{checked:!1,halfChecked:!1,participates:!0}).halfChecked?`−`:($.get().stateMap[r.node.keyText]??{checked:!1,halfChecked:!1,participates:!0}).checked?`✓`:``)}),i}):``;o(()=>g(i,y,T))}),s(y,f(` `));let E=l(`rue:slot:anchor`);s(y,E),c(()=>{let e=Zt(r.node);o(()=>g(e,y,E))}),s(y,f(` `));let D=l(`rue:slot:anchor`);s(y,D),c(()=>{let e=t.showIcon||r.node.icon!==void 0||t.icon!==void 0?$t(r.node,St.get()?!0:wt.get().has(r.node.keyText),Q.get().has(r.node.keyText),($.get().stateMap[r.node.keyText]??{checked:!1,halfChecked:!1,participates:!0}).checked,($.get().stateMap[r.node.keyText]??{checked:!1,halfChecked:!1,participates:!0}).halfChecked,X.value.includes(r.node.keyText)):``;o(()=>g(e,y,D))});let O=e(`button`,y);s(y,O),v(O,`type`,`button`),c(()=>{u(O,String(I(I(j(`flex min-w-0 flex-1 items-center gap-2 rounded-xl px-2.5 py-1.5 text-left ${J.get().textClass} transition-colors duration-150`,t.directoryMode?Q.get().has(r.node.keyText)?`bg-base-200/85 text-base-content`:`text-base-content hover:bg-base-200/70`:Q.get().has(r.node.keyText)?`bg-primary/10 font-semibold text-primary`:`text-base-content hover:bg-base-200/70`,t.disabled||r.node.disabled||!(t.selectable===void 0||t.selectable)||!r.node.selectable?`cursor-not-allowed opacity-55`:``),t.classNames?.label),t.blockNode?`w-full`:``)))}),c(()=>{let e=t.styles?.label;p(O,e)}),c(()=>{C(O,t.disabled||r.node.disabled||!(t.selectable===void 0||t.selectable)||!r.node.selectable)}),n(O,`click`,e=>en(r.node,e,`click`)),n(O,`dblclick`,e=>en(r.node,e,`doubleClick`));let k=l(`rue:slot:anchor`);s(O,k),c(()=>{let n=t.titleRender?d(()=>{let n=a(),i=e(`div`,n);s(n,i),u(i,`min-w-0 flex-1`);let o=l(`rue:component:anchor`);return s(i,o),g(b(ee,{render:()=>t.titleRender({node:r.node,expanded:St.get()?!0:wt.get().has(r.node.keyText),selected:Q.get().has(r.node.keyText),checked:($.get().stateMap[r.node.keyText]??{checked:!1,halfChecked:!1,participates:!0}).checked,halfChecked:($.get().stateMap[r.node.keyText]??{checked:!1,halfChecked:!1,participates:!0}).halfChecked,loading:X.value.includes(r.node.keyText)})}),i,o),n}):d(()=>{let t=a(),n=e(`span`,t);s(t,n),u(n,`min-w-0 flex-1 truncate`);let i=l(`rue:slot:anchor`);return s(n,i),c(()=>{let e=r.node.title;o(()=>g(e,n,i))}),t});o(()=>g(n,O,k))}),s(O,f(` `));let A=l(`rue:slot:anchor`);s(O,A),c(()=>{let t=Z.value.overKeyText===r.node.keyText&&V(Z.value.dropPosition)?d(()=>{let t=a(),n=e(`span`,t);s(t,n),u(n,`badge badge-primary badge-xs`),c(()=>{v(n,`data-rue-tree-drop-placeholder`,String(Z.value.overKeyText===r.node.keyText?V(Z.value.dropPosition):void 0))});let i=x(n);return s(n,i),c(()=>{_(i,(Z.value.overKeyText===r.node.keyText?V(Z.value.dropPosition):void 0)===`inside`?`放入`:(Z.value.overKeyText===r.node.keyText?V(Z.value.dropPosition):void 0)===`before`?`插前`:`插后`)}),t}):Q.get().has(r.node.keyText)?d(()=>{let t=a(),n=e(`span`,t);return s(t,n),u(n,`badge badge-primary badge-outline badge-xs`),s(n,f(`选中`)),t}):``;o(()=>g(t,O,A))});let M=l(`rue:slot:anchor`);return s(m,M),c(()=>{let e=(Z.value.overKeyText===r.node.keyText?V(Z.value.dropPosition):void 0)===`after`?Qt(r.node,`after`):``;o(()=>g(e,m,M))}),i}),i,m)}})}),s(S,f(` `));let A=l(`rue:slot:anchor`);s(S,A),c(()=>{let t=kt.get().bottomSpacer>0?d(()=>{let t=a(),n=e(`div`,t);return s(t,n),c(()=>{p(n,{height:`${kt.get().bottomSpacer}px`})}),v(n,`aria-hidden`,`true`),t}):``;o(()=>g(t,S,A))}),s(S,f(` `));let M=l(`rue:slot:anchor`);return s(S,M),c(()=>{let n=Tt.get().length?``:d(()=>{let n=a(),r=e(`div`,n);s(n,r),c(()=>{u(r,String(I(`grid min-h-40 place-items-center rounded-2xl border border-dashed border-base-300/70 bg-base-100/50 px-6 py-8 text-center text-sm text-base-content/55`,t.classNames?.empty)))}),c(()=>{let e=t.styles?.empty;p(r,e)});let i=e(`div`,r);s(r,i);let d=l(`rue:slot:anchor`);return s(i,d),c(()=>{let e=t.emptyText===void 0?`暂无节点`:t.emptyText;o(()=>g(e,i,d))}),n});o(()=>g(n,S,M))}),s(S,f(` `)),i})},H=e=>{let{__rue_rest_omit_0:t,__rue_rest_omit_1:n,__rue_rest_omit_2:i,__rue_rest_omit_3:u,rest:f}=w(`useSetup:0:0:dup3`,()=>r(()=>{let{className:t,showIcon:n,blockNode:r,expandAction:i,...a}=e;return{__rue_rest_omit_0:t,__rue_rest_omit_1:n,__rue_rest_omit_2:r,__rue_rest_omit_3:i,rest:a}}));return d(t=>{let n=a(),r=l(`rue:component:anchor`);return s(n,r),c(()=>{let t=b(xe,{...f,className:I(`rue-directory-tree`,e.className),showIcon:e.showIcon===void 0?!0:e.showIcon,blockNode:e.blockNode===void 0?!0:e.blockNode,directoryMode:!0,expandAction:e.expandAction===void 0?`click`:e.expandAction});o(()=>g(t,n,r))}),n})},U=xe;U.DirectoryTree=H;var Se=t=>d(n=>{let r=e(`div`,n);u(r,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let i=e(`table`,r);s(r,i),u(i,`table table-zebra`);let p=e(`thead`,i);s(i,p);let m=e(`tr`,p);s(p,m);let h=e(`th`,m);s(m,h),s(h,f(`属性`));let _=e(`th`,m);s(m,_),s(_,f(`说明`));let y=e(`th`,m);s(m,y),s(y,f(`类型`));let b=e(`th`,m);s(m,b),s(b,f(`默认值`));let x=e(`tbody`,i);s(i,x);let S=l(`rue:list:start`),C=l(`rue:list:end`);s(x,S),s(x,C);let w=new Map;return c(()=>{w=T({items:t.rows||[],getKey:(e,t)=>e.prop,elements:w,parent:x,before:C,singleRoot:!0,trackIndex:!1,start:S,renderItem:(t,n,r,i,u)=>{g(d(()=>{let n=a(),r=e(`tr`,n);s(n,r),c(()=>{v(r,`key`,String(t.prop))});let i=e(`td`,r);s(r,i);let u=e(`code`,i);s(i,u);let d=l(`rue:slot:anchor`);s(u,d),c(()=>{let e=t.prop;o(()=>g(e,u,d))});let f=e(`td`,r);s(r,f);let p=l(`rue:slot:anchor`);s(f,p),c(()=>{let e=t.description;o(()=>g(e,f,p))});let m=e(`td`,r);s(r,m);let h=e(`code`,m);s(m,h);let _=l(`rue:slot:anchor`);s(h,_),c(()=>{let e=t.type;o(()=>g(e,h,_))});let y=e(`td`,r);s(r,y);let b=e(`code`,y);s(y,b);let x=l(`rue:slot:anchor`);return s(b,x),c(()=>{let e=t.defaultValue;o(()=>g(e,b,x))}),n}),n,r)}})}),r}),Ce=[{title:`产品平台`,key:`platform`,children:[{title:`文档中心`,key:`docs-api`},{title:`组件市场`,key:`component-hub`},{title:`示例仓库`,key:`examples`}]},{title:`工程效率`,key:`engineering`,children:[{title:`构建链路`,key:`build-pipeline`},{title:`质量门禁`,key:`quality-gate`},{title:`发布管道`,key:`release-flow`}]},{title:`增长分析`,key:`growth`,children:[{title:`实验看板`,key:`experiment-board`},{title:`归因报表`,key:`attribution-report`},{title:`留存漏斗`,key:`retention-funnel`}]}],we=[{title:`发布总控`,key:`release-control`,children:[{title:`前台站点`,key:`release-site`,children:[{title:`首页编排`,key:`site-home`},{title:`价格页`,key:`site-pricing`}]},{title:`运营链路`,key:`release-ops`,children:[{title:`投放素材`,key:`ops-assets`},{title:`归因回传`,key:`ops-attribution`}]},{title:`合规审查`,key:`release-compliance`,children:[{title:`隐私条款`,key:`compliance-privacy`},{title:`审计记录`,key:`compliance-audit`}]}]}],Te=[{title:`权限控制`,key:`permission-disabled-root`,children:[{title:`只读目录`,key:`readonly-folder`,disabled:!0,children:[{title:`首页编排`,key:`readonly-home`},{title:`价格页`,key:`readonly-pricing`}]},{title:`可编辑目录`,key:`editable-folder`,children:[{title:`投放素材`,key:`editable-assets`},{title:`归因回传`,key:`editable-attribution`,disableCheckbox:!0}]},{title:`审计日志（仅禁用复选框）`,key:`audit-log`,disableCheckbox:!0}]}],Ee=[{nodeId:1,parentId:0,code:`workspace`,name:`Workspace`},{nodeId:2,parentId:1,code:`workflow`,name:`Workflow board`},{nodeId:3,parentId:1,code:`briefs`,name:`Briefs`},{nodeId:4,parentId:2,code:`review`,name:`Design review`},{nodeId:5,parentId:2,code:`release`,name:`Release checklist`},{nodeId:6,parentId:3,code:`content`,name:`Content drafts`}],De=[{title:`app`,key:`dir-app`,children:[{title:`pages`,key:`dir-pages`,children:[{title:`Tree.tsx`,key:`file-tree-page`},{title:`Transfer.tsx`,key:`file-transfer-page`}]},{title:`site`,key:`dir-site`,children:[{title:`SidebarPlaygroundDesign.tsx`,key:`file-sidebar`}]}]},{title:`packages`,key:`dir-packages`,children:[{title:`runtime`,key:`dir-runtime`},{title:`rue-design`,key:`dir-rue-design`}]},{title:`README.md`,key:`file-readme`}],Oe=[{title:`alpha.ts`,key:`range-alpha`},{title:`beta.ts`,key:`range-beta`},{title:`gamma.ts`,key:`range-gamma`},{title:`delta.ts`,key:`range-delta`},{title:`epsilon.ts`,key:`range-epsilon`}],ke=[{title:`src`,key:`drag-src`,kind:`folder`,children:[{title:`components`,key:`drag-components`,kind:`folder`,children:[{title:`Tree.tsx`,key:`drag-tree-file`,kind:`file`},{title:`Transfer.tsx`,key:`drag-transfer-file`,kind:`file`}]},{title:`main.ts`,key:`drag-main-file`,kind:`file`}]},{title:`docs`,key:`drag-docs`,kind:`folder`,children:[{title:`routing.md`,key:`drag-routing-file`,kind:`file`},{title:`installation.md`,key:`drag-install-file`,kind:`file`}]},{title:`package.json`,key:`drag-package-file`,kind:`file`}],Ae=Array.from({length:120},(e,t)=>({title:`Page ${String(t+1).padStart(3,`0`)}`,key:`virtual-${t}`})),je=Array.from({length:64},(e,t)=>({title:`Workspace ${String(t+1).padStart(2,`0`)}`,key:`async-virtual-root-${t}`,isLeaf:!1})),Me=`import { ref } from '@rue-js/rue'
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
</div>`,Ue=[{prop:`treeData`,description:`树数据源，支持嵌套 children 和字段映射。`,type:`TreeDataNode[]`,defaultValue:`[]`},{prop:`selectedKeys / defaultSelectedKeys`,description:`受控与非受控的当前选中项，multiple 打开后允许多选。`,type:`TreeKey[]`,defaultValue:`[]`},{prop:`checkedKeys / defaultCheckedKeys`,description:`勾选模式下的选中集合，strict 模式会回传 checked / halfChecked 结构。`,type:`TreeKey[] | { checked: TreeKey[]; halfChecked: TreeKey[] }`,defaultValue:`[]`},{prop:`expandedKeys / defaultExpandedKeys / defaultExpandAll`,description:`控制展开态，适合目录树、权限树和异步加载场景。`,type:`TreeKey[] / boolean`,defaultValue:`[] / false`},{prop:`checkable / checkStrictly`,description:`切换勾选与父子联动模式；strict 会关闭级联。`,type:`boolean`,defaultValue:`false`},{prop:`treeDataSimpleMode / fieldNames`,description:`直接接入 id / pId 扁平数据，同时可映射 title、key、children 字段。`,type:`boolean | TreeSimpleModeConfig / TreeFieldNames`,defaultValue:`- / -`},{prop:`allowSearch / searchValue / filterTreeNode`,description:`提供内置搜索输入和过滤逻辑，命中后会保留祖先链路。`,type:`boolean / string / boolean | ((inputValue, node) => boolean)`,defaultValue:`false / - / true`},{prop:`loadData`,description:`展开未加载分支时触发异步加载，适合远端目录与超大树。`,type:`(node: TreeNode) => Promise<any> | void`,defaultValue:`-`},{prop:`Tree.DirectoryTree / expandAction / toggleSelect / rangeSelect`,description:`目录树快捷 API；除了展开动作，还能细化 ctrl/meta 追加选择和 shift 区间选择是 append 还是 replace。`,type:`DirectoryTreeProps / false | "click" | "doubleClick" / boolean / false | "append" | "replace"`,defaultValue:`blockNode=true / showIcon=true / "click" / true / "append"`},{prop:`draggable / allowDrop / onDrop`,description:`开启拖拽排序并控制是否允许落点；allowDrop 和 onDrop 都会拿到 dropToGap，UI 会同步显示插前、插后或放入占位态。`,type:`TreeDraggable / (info) => boolean / (info) => void`,defaultValue:`false / - / -`},{prop:`height / itemHeight / virtual`,description:`为长列表开启虚拟滚动；height 定义视口高度，itemHeight 用于估算渲染窗口，也能和 loadData 组合接超长懒加载树。`,type:`number / number / boolean`,defaultValue:`- / 自动按尺寸估算 / true`},{prop:`showLine / showIcon / blockNode`,description:`控制树线、节点图标和整行可点的布局表现。`,type:`boolean`,defaultValue:`false`},{prop:`titleRender / switcherIcon / icon`,description:`按节点态自定义标题、展开图标和节点图标。`,type:`render function | any`,defaultValue:`-`}],We=e=>Array.isArray(e)?e:e.checked,Ge=(e,t)=>Array.isArray(e)?t?.halfCheckedKeys??[]:e.halfChecked,W=e=>`${typeof e}:${String(e)}`,G=e=>e.map(e=>({...e,children:Array.isArray(e.children)?G(e.children):e.children})),Ke=(e,t)=>{let n=W(t);for(let r=0;r<e.length;r+=1){let i=e[r];if(W(i.key)===n){let[t]=e.splice(r,1);return t??null}if(Array.isArray(i.children)){let e=Ke(i.children,t);if(e)return e}}return null},qe=(e,t,n,r)=>{let i=W(n);for(let a=0;a<e.length;a+=1){let o=e[a];if(W(o.key)===i){if(r===0){let e=Array.isArray(o.children)?[...o.children]:[];e.push(t),o.children=e}else e.splice(r<0?a:a+1,0,t);return!0}if(Array.isArray(o.children)&&qe(o.children,t,n,r))return!0}return!1},Je=(e,t)=>{let n=G(e),r=Ke(n,t.dragNode.key);return r&&(qe(n,r,t.node.key,t.dropPosition)||n.push(r)),n},K=(e,t,n)=>{let r=W(t);return e.map(e=>W(e.key)===r?n(e):Array.isArray(e.children)?{...e,children:K(e.children,t,n)}:e)},Ye=e=>e.reduce((e,t)=>!Array.isArray(t.children)||!t.children.length?e:e+1+Ye(t.children),0),Xe=t=>{let{isOpen:i,isFolder:p,toggle:h,addChild:y,changeType:C}=w(`useSetup:0:0`,()=>r(()=>{let e=w(`computed:1:0`,()=>m(()=>!!t.model.open)),n=w(`computed:1:1`,()=>m(()=>!!t.model.children&&t.model.children.length>0)),r=n=>{n?.stopPropagation(),t.model.open=!e.get()},i=e=>{e?.stopPropagation(),t.model.children||(t.model.children=[]),t.model.children.push({id:`${t.model.id}-new-${t.model.children.length}`,name:`new stuff`}),t.model.open=!0};return{isOpen:e,isFolder:n,toggle:r,addChild:i,changeType:e=>{e?.stopPropagation(),n.get()||(t.model.children=[],i(),t.model.open=!0)}}}));return d(r=>{let m=e(`li`,r);u(m,`list-none`);let w=e(`button`,m);s(m,w),v(w,`type`,`button`),c(()=>{u(w,String(`flex items-center gap-2 rounded-xl px-3 py-2 text-left text-sm transition `+(p.get()?`font-semibold text-base-content`:`text-base-content/80 hover:bg-base-200/70`)))}),n(w,`click`,e=>h(e)),n(w,`dblclick`,e=>C(e));let E=e(`span`,w);s(w,E),u(E,`inline-flex size-5 items-center justify-center rounded-md bg-base-200/80 text-[11px] text-base-content/55`);let D=x(E);s(E,D),c(()=>{_(D,p.get()?i.get()?`−`:`+`:`•`)});let O=e(`span`,w);s(w,O);let k=l(`rue:slot:anchor`);s(O,k),c(()=>{let e=t.model.name;o(()=>g(e,O,k))});let ee=l(`rue:slot:anchor`);return s(m,ee),c(()=>{let r=p.get()&&i.get()?d(()=>{let r=a(),i=e(`ul`,r);s(r,i),u(i,`mt-1 grid gap-1 pl-5`);let o=l(`rue:list:start`),d=l(`rue:list:end`);s(i,o),s(i,d);let p=new Map;c(()=>{p=T({items:t.model.children||[],getKey:(e,t)=>e.id,elements:p,parent:i,before:d,start:o,renderItem:(e,t,n,r,i)=>{S(b(Xe,{key:e.id,model:e}),t,n,r)}})});let m=e(`li`,i);s(i,m),u(m,`list-none`);let h=e(`button`,m);return s(m,h),v(h,`type`,`button`),u(h,`btn btn-ghost btn-xs rounded-full text-emerald-600`),n(h,`click`,e=>y(e)),s(h,f(`+ add child`)),r}):``;o(()=>g(r,m,ee))}),m})},Ze=()=>{let{basicSelectedKeys:n,directorySelectedKeys:p,directoryExpandAction:h,directoryToggleSelect:_,directoryRangeSelect:v,directoryRangeAppendSelectedKeys:y,directoryRangeReplaceSelectedKeys:x,directoryRangeTreeVersion:S,checkableSelectedKeys:C,checkedKeys:T,halfCheckedKeys:ee,disabledCheckedKeys:A,simpleSelectedKeys:j,asyncSelectedKeys:M,asyncExpandedKeys:N,dragTreeData:P,dragSummary:F,virtualSelectedKeys:I,asyncVirtualTreeData:L,asyncVirtualExpandedKeys:te,asyncVirtualSelectedKeys:R,asyncTreeData:ne,legacyTree:re,tabs:z,loadAsyncTree:ie,loadAsyncVirtualTree:ae,resetDirectoryRangeDemo:oe}=w(`useSetup:0:0:dup1`,()=>r(()=>{let e=w(`ref:1:2`,()=>i([`docs-api`])),n=w(`ref:1:3`,()=>i([`dir-app`])),r=w(`ref:1:4`,()=>i(`click`)),a=w(`ref:1:5`,()=>i(!0)),o=w(`computed:1:6`,()=>m(()=>a.value?`append`:!1)),s=w(`ref:1:7`,()=>i([])),c=w(`ref:1:8`,()=>i([])),l=w(`ref:1:9`,()=>i(0)),u=w(`ref:1:10`,()=>i([`release-control`])),d=w(`ref:1:11`,()=>i([`site-home`])),f=w(`ref:1:12`,()=>i([`release-control`,`release-site`])),p=w(`ref:1:13`,()=>i([`editable-assets`])),h=w(`ref:1:14`,()=>i([`workflow`])),g=w(`ref:1:15`,()=>i([])),_=w(`ref:1:16`,()=>i([])),v=w(`ref:1:17`,()=>i(G(ke))),y=w(`ref:1:18`,()=>i(`folder 支持放入；file 只允许插前和插后，悬停时会显示明确占位态。`)),b=w(`ref:1:19`,()=>i([`virtual-3`])),x=w(`ref:1:20`,()=>i(G(je))),S=w(`ref:1:21`,()=>i([])),C=w(`ref:1:22`,()=>i([])),T=w(`ref:1:23`,()=>i([{title:`发布总线`,key:`release-bus`,isLeaf:!1}]));return{basicSelectedKeys:e,directorySelectedKeys:n,directoryExpandAction:r,directoryToggleSelect:a,directoryRangeSelect:o,directoryRangeAppendSelectedKeys:s,directoryRangeReplaceSelectedKeys:c,directoryRangeTreeVersion:l,checkableSelectedKeys:u,checkedKeys:d,halfCheckedKeys:f,disabledCheckedKeys:p,simpleSelectedKeys:h,asyncSelectedKeys:g,asyncExpandedKeys:_,dragTreeData:v,dragSummary:y,virtualSelectedKeys:b,asyncVirtualTreeData:x,asyncVirtualExpandedKeys:S,asyncVirtualSelectedKeys:C,asyncTreeData:T,legacyTree:w(`reactive:1:24`,()=>t({id:`root`,name:`My Tree`,open:!0,children:[{id:`hello`,name:`hello`},{id:`world`,name:`world`},{id:`branch`,name:`child folder`,open:!0,children:[{id:`branch-1`,name:`design review`},{id:`branch-2`,name:`release note`}]}]})),tabs:{basic:w(`ref:1:25`,()=>i(`preview`)),directory:w(`ref:1:26`,()=>i(`preview`)),directoryRange:w(`ref:1:27`,()=>i(`preview`)),checkable:w(`ref:1:28`,()=>i(`preview`)),checkableDisabled:w(`ref:1:29`,()=>i(`preview`)),simple:w(`ref:1:30`,()=>i(`preview`)),async:w(`ref:1:31`,()=>i(`preview`)),drag:w(`ref:1:32`,()=>i(`preview`)),virtual:w(`ref:1:33`,()=>i(`preview`)),virtualAsync:w(`ref:1:34`,()=>i(`preview`)),legacy:w(`ref:1:35`,()=>i(`preview`))},loadAsyncTree:async e=>{e.key===`release-bus`&&(T.value=[{title:`发布总线`,key:`release-bus`,isLeaf:!1,children:[{title:`桌面端`,key:`desktop`,children:[{title:`Windows`,key:`desktop-win`},{title:`macOS`,key:`desktop-mac`}]},{title:`移动端`,key:`mobile`,children:[{title:`iOS`,key:`mobile-ios`},{title:`Android`,key:`mobile-android`}]}]}])},loadAsyncVirtualTree:async e=>{e.children.length||(x.value=K(x.value,e.key,e=>({...e,children:Array.from({length:8},(t,n)=>({title:`${String(e.title)} / Module ${n+1}`,key:`${String(e.key)}-child-${n}`,isLeaf:n%3!=0}))})))},resetDirectoryRangeDemo:()=>{s.value=[],c.value=[],l.value+=1}}}));return d(t=>{let r=a(),i=l(`rue:component:anchor`);return s(r,i),g(b(O,{children:d(()=>{let t=a(),r=e(`div`,t);s(t,r),u(r,`max-w-none prose prose-sm md:prose-base`);let i=e(`h1`,r);s(r,i),s(i,f(`Tree 树控件`));let d=e(`p`,r);s(r,d),s(d,f(`Rue 的 Tree 补上了独立树组件这块空白：保留 TreeView 示例里递归数据直改的灵活性，同时把 树控件常用的展开、选中、勾选、简单模式、异步加载和自定义标题一次补齐。 视觉上继续沿用 Rue 现有的卡片、badge 和 base 色阶体系，不照搬其他组件库的外观。`));let m=e(`div`,r);s(r,m),u(m,`not-prose mt-6 grid gap-3 md:grid-cols-3`);let w=e(`div`,m);s(m,w),u(w,`rounded-[1.4rem] border border-base-300 bg-gradient-to-br from-base-100 to-base-200/40 p-4 shadow-sm`);let O=e(`div`,w);s(w,O),u(O,`text-xs uppercase tracking-[0.2em] text-base-content/45`),s(O,f(`Node Model`));let se=e(`div`,w);s(w,se),u(se,`mt-2 text-base font-semibold`),s(se,f(`选择、勾选、展开三条状态线`));let ce=e(`p`,w);s(w,ce),u(ce,`mt-2 mb-0 text-sm text-base-content/68`),s(ce,f(`目录树、权限树、发布树都能直接套进来。`));let B=e(`div`,m);s(m,B),u(B,`rounded-[1.4rem] border border-base-300 bg-gradient-to-br from-base-100 to-base-200/40 p-4 shadow-sm`);let le=e(`div`,B);s(B,le),u(le,`text-xs uppercase tracking-[0.2em] text-base-content/45`),s(le,f(`DirectoryTree`));let ue=e(`div`,B);s(B,ue),u(ue,`mt-2 text-base font-semibold`),s(ue,f(`目录树快捷 API`));let de=e(`p`,B);s(B,de),u(de,`mt-2 mb-0 text-sm text-base-content/68`),s(de,f(`支持 click / doubleClick 展开，以及更接近文件浏览器的多选交互。`));let V=e(`div`,m);s(m,V),u(V,`rounded-[1.4rem] border border-base-300 bg-gradient-to-br from-base-100 to-base-200/40 p-4 shadow-sm`);let fe=e(`div`,V);s(V,fe),u(fe,`text-xs uppercase tracking-[0.2em] text-base-content/45`),s(fe,f(`Heavy Interaction`));let pe=e(`div`,V);s(V,pe),u(pe,`mt-2 text-base font-semibold`),s(pe,f(`拖拽排序与虚拟滚动`));let me=e(`p`,V);s(V,me),u(me,`mt-2 mb-0 text-sm text-base-content/68`),s(me,f(`长列表和拖拽改序终于能落在同一个 Tree 上了。`));let he=l(`rue:component:anchor`);s(r,he),c(()=>{let e=b(k,{title:`基础选中与整行交互`,summary:`默认 Tree 就是一个纯浏览 + 选中容器；blockNode 和 showIcon 让它更像配置面板里的主导航。`,tab:z.basic,code:Me,preview:E(`div`,{className:`space-y-4 not-prose`,children:[D(U,{treeData:Ce,selectedKeys:n.value,defaultExpandAll:!0,showIcon:!0,blockNode:!0,onSelect:e=>{n.value=e}}),E(`div`,{className:`grid gap-3 md:grid-cols-3`,children:[E(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[D(`div`,{className:`text-xs text-base-content/45`,children:`当前选中`}),D(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:n.value.length?n.value.map(e=>D(`span`,{className:`badge badge-outline badge-sm`,children:String(e)},String(e))):D(`span`,{className:`text-sm text-base-content/55`,children:`未选择`})})]}),E(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[D(`div`,{className:`text-xs text-base-content/45`,children:`推荐场景`}),D(`div`,{className:`mt-2 text-sm text-base-content/75`,children:`组件目录、文档导航、资源分类`})]}),E(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[D(`div`,{className:`text-xs text-base-content/45`,children:`状态模型`}),D(`div`,{className:`mt-2 text-sm text-base-content/75`,children:`selectedKeys / expandedKeys 分离，便于受控更新。`})]})]})]})});o(()=>g(e,r,he))});let ge=l(`rue:component:anchor`);s(r,ge),c(()=>{let e=b(k,{title:`DirectoryTree 目录树快捷 API`,summary:`Tree.DirectoryTree 默认补上目录图标、整行可点和 click 展开；这里先只看 expandAction 和 toggleSelect 这两个基础交互开关。`,tab:z.directory,code:Le,preview:E(`div`,{className:`grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`,children:[D(U.DirectoryTree,{treeData:De,selectedKeys:p.value,multiple:!0,expandAction:h.value,toggleSelect:_.value,rangeSelect:v.get(),onSelect:e=>{p.value=e}}),E(`div`,{className:`space-y-3`,children:[E(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[D(`div`,{className:`text-xs text-base-content/45`,children:`快捷属性`}),E(`div`,{className:`mt-3 flex flex-wrap gap-2`,children:[D(`button`,{type:`button`,className:h.value===`click`?`btn btn-primary btn-xs`:`btn btn-ghost btn-xs`,onClick:()=>{h.value=`click`},children:`click 展开`}),D(`button`,{type:`button`,className:h.value===`doubleClick`?`btn btn-primary btn-xs`:`btn btn-ghost btn-xs`,onClick:()=>{h.value=`doubleClick`},children:`doubleClick 展开`}),D(`button`,{type:`button`,className:h.value===!1?`btn btn-primary btn-xs`:`btn btn-ghost btn-xs`,onClick:()=>{h.value=!1},children:`只选中不展开`})]}),E(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:[D(`button`,{type:`button`,className:_.value?`btn btn-primary btn-xs`:`btn btn-ghost btn-xs`,onClick:()=>{_.value=!0},children:`ctrl/meta 追加`}),D(`button`,{type:`button`,className:_.value?`btn btn-ghost btn-xs`:`btn btn-primary btn-xs`,onClick:()=>{_.value=!1},children:`关闭追加选择`})]})]}),E(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[D(`div`,{className:`text-xs text-base-content/45`,children:`当前选择`}),D(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:p.value.map(e=>D(`span`,{className:`badge badge-outline badge-sm`,children:String(e)},String(e)))})]}),E(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`,children:[`当前组合是 expandAction=`,D(`strong`,{children:String(h.value)}),`、toggleSelect=`,D(`strong`,{children:String(_.value)}),`、rangeSelect=`,D(`strong`,{children:String(v.get())}),`。`,D(`div`,{className:`mt-3`,children:`普通点击会落成单选；打开追加后，meta / ctrl 会追加或移除选中，shift 也会启用区间选择。关闭追加时，这两类补充选择都会停用；append / replace 的差异放到下面的对照示例里单独演示。`})]})]})]})});o(()=>g(e,r,ge))});let _e=l(`rue:component:anchor`);s(r,_e),c(()=>{let e=b(k,{title:`shift append vs shift replace`,summary:`这两个模式只有在“先做一次非连续多选，再用 shift 选区间”时才会分出差异；左边保留旧选择，右边只保留新区间。`,tab:z.directoryRange,code:Re,preview:E(`div`,{className:`space-y-4 not-prose`,children:[E(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`,children:[D(`div`,{children:`操作顺序：先单击 beta.ts，再按住 Cmd / Ctrl 单击 epsilon.ts，最后按住 Shift 单击 delta.ts。`}),D(`div`,{className:`mt-2`,children:`append 会保留 beta.ts；replace 只保留 delta.ts 到 epsilon.ts 这一段。`}),D(`button`,{type:`button`,className:`btn btn-ghost btn-xs mt-3`,onClick:oe,children:`重置两边示例`})]}),E(`div`,{className:`grid gap-4 xl:grid-cols-2`,children:[E(`div`,{className:`space-y-3 rounded-[1.4rem] border border-base-300 bg-base-100 p-4 shadow-sm`,children:[E(`div`,{className:`flex items-center justify-between gap-3`,children:[E(`div`,{children:[D(`div`,{className:`text-sm font-semibold`,children:`rangeSelect="append"`}),D(`div`,{className:`text-xs text-base-content/55`,children:`保留原先的非连续选择，再并入新的 shift 区间。`})]}),D(`span`,{className:`badge badge-outline badge-sm`,children:`append`})]}),D(U.DirectoryTree,{treeData:Oe,selectedKeys:y.value,multiple:!0,toggleSelect:!0,rangeSelect:`append`,onSelect:e=>{y.value=e}},`append-${S.value}`),E(`div`,{className:`rounded-box border border-base-300 bg-base-100 px-4 py-3 text-sm text-base-content/70`,children:[D(`div`,{className:`text-xs text-base-content/45`,children:`当前选择`}),D(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:y.value.length?y.value.map(e=>D(`span`,{className:`badge badge-outline badge-sm`,children:String(e)},String(e))):D(`span`,{className:`text-sm text-base-content/55`,children:`还没有选择`})})]})]}),E(`div`,{className:`space-y-3 rounded-[1.4rem] border border-base-300 bg-base-100 p-4 shadow-sm`,children:[E(`div`,{className:`flex items-center justify-between gap-3`,children:[E(`div`,{children:[D(`div`,{className:`text-sm font-semibold`,children:`rangeSelect="replace"`}),D(`div`,{className:`text-xs text-base-content/55`,children:`只保留新的 shift 区间，旧的非连续选择会被替换掉。`})]}),D(`span`,{className:`badge badge-primary badge-outline badge-sm`,children:`replace`})]}),D(U.DirectoryTree,{treeData:Oe,selectedKeys:x.value,multiple:!0,toggleSelect:!0,rangeSelect:`replace`,onSelect:e=>{x.value=e}},`replace-${S.value}`),E(`div`,{className:`rounded-box border border-base-300 bg-base-100 px-4 py-3 text-sm text-base-content/70`,children:[D(`div`,{className:`text-xs text-base-content/45`,children:`当前选择`}),D(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:x.value.length?x.value.map(e=>D(`span`,{className:`badge badge-outline badge-sm`,children:String(e)},String(e))):D(`span`,{className:`text-sm text-base-content/55`,children:`还没有选择`})})]})]})]})]})});o(()=>g(e,r,_e))});let ve=l(`rue:component:anchor`);s(r,ve),c(()=>{let e=b(k,{title:`父子联动与半选态`,summary:`这一块只看级联勾选和 halfChecked，不再混入 disabled / disableCheckbox，点击父节点时能直接看到整棵子树联动。`,tab:z.checkable,code:Ne,preview:E(`div`,{className:`space-y-4 not-prose`,children:[D(U,{treeData:we,selectedKeys:C.value,checkedKeys:T.value,checkable:!0,defaultExpandAll:!0,showLine:!0,blockNode:!0,onSelect:e=>{C.value=e},onCheck:(e,t)=>{T.value=We(e),ee.value=Ge(e,t)}}),E(`div`,{className:`grid gap-3 md:grid-cols-3`,children:[E(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[D(`div`,{className:`text-xs text-base-content/45`,children:`selectedKeys`}),D(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:C.value.length?C.value.map(e=>D(`span`,{className:`badge badge-outline badge-sm`,children:String(e)},String(e))):D(`span`,{className:`text-sm text-base-content/55`,children:`当前没有选中节点`})})]}),E(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[D(`div`,{className:`text-xs text-base-content/45`,children:`checkedKeys`}),D(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:T.value.map(e=>D(`span`,{className:`badge badge-primary badge-outline badge-sm`,children:String(e)},String(e)))})]}),E(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[D(`div`,{className:`text-xs text-base-content/45`,children:`halfCheckedKeys`}),D(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:ee.value.length?ee.value.map(e=>D(`span`,{className:`badge badge-ghost badge-sm`,children:String(e)},String(e))):D(`span`,{className:`text-sm text-base-content/55`,children:`当前没有半选`})})]})]})]})});o(()=>g(e,r,ve))});let ye=l(`rue:component:anchor`);s(r,ye),c(()=>{let e=b(k,{title:`禁用节点与禁用复选框`,summary:`把 disabled 和 disableCheckbox 单独拆出来看：前者整节点只读，后者只禁用勾选框，不再干扰联动示例。`,tab:z.checkableDisabled,code:Pe,preview:E(`div`,{className:`grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`,children:[D(U,{treeData:Te,checkedKeys:A.value,checkable:!0,defaultExpandAll:!0,showLine:!0,blockNode:!0,onCheck:e=>{A.value=We(e)}}),E(`div`,{className:`space-y-3`,children:[E(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[D(`div`,{className:`text-xs text-base-content/45`,children:`当前勾选`}),D(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:A.value.length?A.value.map(e=>D(`span`,{className:`badge badge-outline badge-sm`,children:String(e)},String(e))):D(`span`,{className:`text-sm text-base-content/55`,children:`当前没有勾选`})})]}),E(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm text-sm text-base-content/75`,children:[D(`div`,{className:`font-medium text-base-content`,children:`disabled`}),D(`div`,{className:`mt-2`,children:`整节点不可展开、不可选中、不可勾选，适合只读目录或冻结配置。`})]}),E(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm text-sm text-base-content/75`,children:[D(`div`,{className:`font-medium text-base-content`,children:`disableCheckbox`}),D(`div`,{className:`mt-2`,children:`节点仍能展示和展开，但复选框不会参与交互，适合“只可浏览不可授权”的条目。`})]})]})]})});o(()=>g(e,r,ye))});let be=l(`rue:component:anchor`);s(r,be),c(()=>{let e=b(k,{title:`Simple Mode + Search`,summary:`扁平数据直入后，内置搜索会保留命中节点的祖先链，不会把层级上下文切断。`,tab:z.simple,code:Fe,preview:E(`div`,{className:`grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`,children:[D(U,{treeData:Ee,treeDataSimpleMode:{id:`nodeId`,pId:`parentId`,rootPId:0},fieldNames:{title:`name`,key:`code`},selectedKeys:j.value,allowSearch:!0,defaultExpandAll:!0,onSelect:e=>{j.value=e}}),E(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`,children:[`当前选中：`,D(`code`,{children:JSON.stringify(j.value)}),D(`div`,{className:`mt-3`,children:`这类 simple mode 很适合后端直接给 id / pId 的菜单、流程节点和权限项，不需要再先做一遍树转换。`})]})]})});o(()=>g(e,r,be))});let xe=l(`rue:component:anchor`);s(r,xe),c(()=>{let e=b(k,{title:`Async Load 与自定义标题`,summary:`第一次展开时再拉子节点，同时用 titleRender 和 icon 把状态信息塞回每一行。`,tab:z.async,code:Ie,preview:E(`div`,{className:`grid gap-4 not-prose lg:grid-cols-[minmax(0,26rem),1fr] lg:items-start`,children:[D(U,{treeData:ne.value,selectedKeys:M.value,expandedKeys:N.value,loadData:ie,showLine:!0,showIcon:!0,blockNode:!0,titleRender:({node:e,loading:t})=>E(`div`,{className:`flex min-w-0 items-center justify-between gap-3`,children:[D(`span`,{className:`truncate`,children:e.title}),D(`span`,{className:`badge badge-ghost badge-xs`,children:t?`loading`:e.children.length?`branch`:`leaf`})]}),onSelect:e=>{M.value=e},onExpand:e=>{N.value=e}}),E(`div`,{className:`space-y-3`,children:[E(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[D(`div`,{className:`text-xs text-base-content/45`,children:`expandedKeys`}),D(`div`,{className:`mt-2 text-sm text-base-content/75`,children:JSON.stringify(N.value)})]}),E(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[D(`div`,{className:`text-xs text-base-content/45`,children:`selectedKeys`}),D(`div`,{className:`mt-2 text-sm text-base-content/75`,children:JSON.stringify(M.value)})]}),D(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`,children:`展开 release-bus 后才会注入桌面端和移动端节点，适合远端目录、超大权限树和发布范围配置。`})]})]})});o(()=>g(e,r,xe))});let H=e(`div`,r);s(r,H),u(H,`not-prose mt-10 space-y-2`);let ke=e(`h2`,H);s(H,ke),u(ke,`text-2xl font-semibold`),s(ke,f(`更重交互`));let je=e(`p`,H);s(H,je),u(je,`text-sm text-base-content/70`),s(je,f(`当 Tree 既要承载拖拽整理，又要承载超长数据时，draggable 和 virtual 就是两个最关键的控制面。`));let W=l(`rue:component:anchor`);s(r,W),c(()=>{let e=b(k,{title:`allowDrop 策略与拖拽占位`,summary:`allowDrop 可以把 folder / file 的落点规则写清楚；hover 时 Tree 会直接给出插前、插后或放入占位提示。`,tab:z.drag,code:ze,preview:E(`div`,{className:`grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`,children:[D(U,{treeData:P.value,draggable:!0,blockNode:!0,defaultExpandAll:!0,allowDrop:({dropNode:e,dropToGap:t})=>t||e.raw.kind!==`file`,titleRender:({node:e})=>E(`div`,{className:`flex min-w-0 items-center justify-between gap-3`,children:[D(`span`,{className:`truncate`,children:e.title}),D(`span`,{className:e.raw.kind===`folder`?`badge badge-ghost badge-xs`:`badge badge-outline badge-xs`,children:e.raw.kind})]}),onDrop:e=>{P.value=Je(P.value,e),F.value=`${String(e.dragNode.key)} -> ${String(e.node.key)} (${e.dropToGap?e.dropPosition<0?`before`:`after`:`inside`})`}}),E(`div`,{className:`space-y-3`,children:[E(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[D(`div`,{className:`text-xs text-base-content/45`,children:`最近一次拖拽`}),D(`div`,{className:`mt-2 text-sm text-base-content/75`,children:F.value})]}),E(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[D(`div`,{className:`text-xs text-base-content/45`,children:`allowDrop 规则`}),E(`div`,{className:`mt-2 grid gap-2 text-sm text-base-content/75`,children:[D(`div`,{children:`folder：允许放入，也允许插前 / 插后。`}),D(`div`,{children:`file：只允许插前 / 插后，不允许作为 inside 目标。`})]})]}),D(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`,children:`拖到 folder 正中央会看到“放入”，拖到行的上沿或下沿则会出现“插前 / 插后”；如果目标是 file，inside 落点会被 allowDrop 直接拦掉。`})]})]})});o(()=>g(e,r,W))});let G=l(`rue:component:anchor`);s(r,G),c(()=>{let e=b(k,{title:`Virtual Scroll`,summary:`长列表下只渲染可见窗口，height 和 itemHeight 负责限定视口和估算切片范围。`,tab:z.virtual,code:Be,preview:E(`div`,{className:`grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`,children:[D(U,{treeData:Ae,selectedKeys:I.value,height:320,itemHeight:42,virtual:!0,blockNode:!0,onSelect:e=>{I.value=e}}),E(`div`,{className:`space-y-3`,children:[E(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[D(`div`,{className:`text-xs text-base-content/45`,children:`数据量`}),D(`div`,{className:`mt-2 text-2xl font-semibold`,children:Ae.length})]}),E(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[D(`div`,{className:`text-xs text-base-content/45`,children:`当前选中`}),D(`div`,{className:`mt-2 text-sm text-base-content/75`,children:JSON.stringify(I.value)})]}),D(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`,children:`对文档页目录、埋点树、批量资源目录这种长列表场景，虚拟滚动能显著降低初始渲染压力。`})]})]})});o(()=>g(e,r,G))});let Ke=l(`rue:component:anchor`);s(r,Ke),c(()=>{let e=b(k,{title:`Virtual + Async Load 场景页`,summary:`把 virtual、height、itemHeight 和 loadData 合在一起，就能接超长目录或资源树，只在展开分支时再注入子节点。`,tab:z.virtualAsync,code:Ve,preview:E(`div`,{className:`grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`,children:[D(U,{treeData:L.value,selectedKeys:R.value,expandedKeys:te.value,height:340,itemHeight:40,virtual:!0,showIcon:!0,blockNode:!0,loadData:ae,titleRender:({node:e,loading:t})=>E(`div`,{className:`flex min-w-0 items-center justify-between gap-3`,children:[D(`span`,{className:`truncate`,children:e.title}),D(`span`,{className:`badge badge-ghost badge-xs`,children:t?`loading`:e.children.length?`loaded`:e.isLeaf?`leaf`:`lazy`})]}),onSelect:e=>{R.value=e},onExpand:e=>{te.value=e}}),E(`div`,{className:`space-y-3`,children:[E(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[D(`div`,{className:`text-xs text-base-content/45`,children:`根节点数量`}),D(`div`,{className:`mt-2 text-2xl font-semibold`,children:L.value.length})]}),E(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[D(`div`,{className:`text-xs text-base-content/45`,children:`已加载分支`}),D(`div`,{className:`mt-2 text-2xl font-semibold`,children:Ye(L.value)})]}),E(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[D(`div`,{className:`text-xs text-base-content/45`,children:`当前展开`}),D(`div`,{className:`mt-2 text-sm text-base-content/75`,children:JSON.stringify(te.value)})]}),D(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`,children:`先滚动到较深位置再展开节点也没问题：视口外的行不会真正渲染，只有命中的 branch 才会触发 loadData 注入子节点。`})]})]})});o(()=>g(e,r,Ke))});let qe=l(`rue:component:anchor`);s(r,qe),c(()=>{let e=b(k,{title:`保留原始递归 Demo`,summary:`旧的 TreeView 行为没有删掉，只是并进 design 页面里，方便对比“直接改数据”这类递归写法。`,tab:z.legacy,code:He,preview:D(`div`,{className:`card border border-base-200/80 bg-base-100 shadow-sm not-prose`,children:E(`div`,{className:`card-body grid gap-4 lg:grid-cols-[minmax(0,1fr),18rem] lg:items-start`,children:[D(`ul`,{className:`m-0 grid gap-1 p-0`,children:D(Xe,{model:re})}),D(`div`,{className:`rounded-box border border-base-300 bg-base-200/40 p-4 text-sm text-base-content/70`,children:`单击切换展开，双击叶子节点会把它转换成 folder，并在当前层直接追加一个新子节点。`})]})})});o(()=>g(e,r,qe))});let K=e(`div`,r);s(r,K),u(K,`not-prose mt-10 space-y-4`);let Ze=e(`h2`,K);s(K,Ze),u(Ze,`text-2xl font-semibold`),s(Ze,f(`API`));let Qe=l(`rue:component:anchor`);return s(K,Qe),c(()=>{let e=b(Se,{rows:Ue});o(()=>g(e,K,Qe))}),t})}),r,i),r})};export{Ze as default};