import{F as e,I as t,J as n,K as r,L as i,M as a,N as o,Q as s,R as c,W as l,X as u,Z as d,d as f,dt as p,ht as m,l as h,nt as g,ot as _,rt as v,st as y,t as b,u as x,vt as S,z as C}from"./vapor-runtime-BuwLbCGk.js";import{a as w,n as T}from"./vapor-helpers-vapor-Bly5xJie.js";import{n as E,t as D}from"./src-BQwLQD8R.js";import{n as O}from"./SidebarPlaygroundDesign-SQXYHI-q.js";import{t as k}from"./PreviewBlock-Cks1b4IL.js";var ee=({render:e})=>e(),A={title:`title`,key:`key`,children:`children`,disabled:`disabled`,selectable:`selectable`,checkable:`checkable`,disableCheckbox:`disableCheckbox`,isLeaf:`isLeaf`,icon:`icon`,className:`className`,id:`id`,pId:`pId`},j=(...e)=>e.filter(Boolean).join(` `),M=e=>typeof e==`object`&&!!e&&!Array.isArray(e),N=e=>typeof e==`string`||typeof e==`number`,P=e=>`${typeof e}:${String(e)}`,F=e=>{let t=[],n=new Set;return(e??[]).forEach(e=>{let r=P(e);n.has(r)||(n.add(r),t.push(e))}),t},I=(e,t)=>e?t?`${e} ${t}`:e:t??``,L=(e,t,n)=>e[n?.[t]??A[t]],te=(e,t)=>L(e,`title`,t)??e.title??e.key,R=e=>new Set(F(e).map(P)),ne=e=>e==null||typeof e==`boolean`?``:typeof e==`string`||typeof e==`number`?String(e):Array.isArray(e)?e.map(e=>ne(e)).filter(Boolean).join(` `):typeof e==`object`?[`title`,`label`,`name`,`text`,`description`,`children`].map(t=>ne(e[t])).filter(Boolean).join(` `):``,re=(e,t,n)=>{if(!t)return e;let r=M(t)?t:void 0,i=r?.id??n?.id??A.id,a=r?.pId??n?.pId??A.pId,o=r?.rootPId??0,s=n?.children??A.children,c=new Map;e.forEach((e,t)=>{let n=e[i]??e.key??t;c.set(n,{...e,[s]:[]})});let l=[];return e.forEach((e,t)=>{let n=e[i]??e.key??t,r=e[a],u=c.get(n);if(!u)return;if(r==null||r===o||!c.has(r)){l.push(u);return}let d=c.get(r);if(!d){l.push(u);return}let f=d[s]??[];f.push(u),d[s]=f}),l},z=(e,t)=>{let n=[],r={},i=(e,a,o,s)=>{let c=L(e,`key`,t),l=N(c)?c:o,u=P(l),d=L(e,`isLeaf`,t),f={key:l,keyText:u,title:te(e,t),depth:a,children:[],raw:e,disabled:!!L(e,`disabled`,t),selectable:L(e,`selectable`,t)!==!1,checkable:L(e,`checkable`,t)!==!1,disableCheckbox:!!L(e,`disableCheckbox`,t),isLeaf:!1,className:L(e,`className`,t),icon:L(e,`icon`,t),parentKeyText:s};n.push(f),r[u]=f;let p=L(e,`children`,t);return f.children=Array.isArray(p)?p.map((e,t)=>i(e,a+1,`${o}-${t}`,u)):[],f.isLeaf=d===!0?!0:d===!1?!1:f.children.length===0,f};return{roots:e.map((e,t)=>i(e,0,`node-${t}`)),flat:n,byKeyText:r}},ie=e=>{let t=[],n=e=>{!e.disabled&&e.checkable&&!e.disableCheckbox&&t.push(e.keyText),e.children.forEach(e=>n(e))};return n(e),t},ae=e=>{let t=[],n=e=>{t.push(e.key),e.children.forEach(e=>n(e))};return n(e),t},oe=(e,t,n)=>{let r=new Set,i=new Set,a={},o=e=>{let s=!e.disabled&&e.checkable&&!e.disableCheckbox,c=e.children.map(e=>o(e)).filter(e=>e.participates),l=t.has(e.keyText),u=l,d=!1;if(!n&&c.length>0){let e=c.every(e=>e.checked),t=c.some(e=>e.checked||e.halfChecked);u=l||e,d=!u&&t}let f={checked:u,halfChecked:d,participates:s||c.length>0};return a[e.keyText]=f,u&&s&&r.add(e.keyText),d&&s&&i.add(e.keyText),f};return e.forEach(e=>o(e)),{checkedKeys:r,halfCheckedKeys:i,stateMap:a}},se=(e,t,n,r)=>{let i=new Set(e),a=new Set(t),o=n.filter(e=>i.has(e.keyText)).map(e=>e.key).filter(N);return r?{checked:o,halfChecked:n.filter(e=>a.has(e.keyText)).map(e=>e.key).filter(N)}:o},ce=(e,t,n,r)=>{if(!n){let n=[],r=e=>{n.push({node:e,matched:!1}),t.has(e.keyText)&&e.children.forEach(e=>r(e))};return e.forEach(e=>r(e)),n}let i=e=>{let t=r(e),n=e.children.flatMap(e=>i(e));if(!t&&n.length===0)return[];if(t){let t=[{node:e,matched:!0}],n=e=>{t.push({node:e,matched:!1}),e.children.forEach(e=>n(e))};return e.children.forEach(e=>n(e)),t}return[{node:e,matched:!1},...n]};return e.flatMap(e=>i(e))},B=(e,t,n)=>t?typeof n==`function`?n(t,e):n===!1?!0:ne(e.title).toLowerCase().includes(t.toLowerCase()):!0,le=(e,t,n)=>{let r=t.parentKeyText;for(;r;){if(r===e.keyText)return!0;r=n[r]?.parentKeyText}return!1},ue=e=>{let t=!!e,n=M(e)?e:void 0;return{enabled:t,icon:n?.icon,nodeDraggable:r=>t?typeof e==`function`?e(r):n&&typeof n.nodeDraggable==`function`?n.nodeDraggable(r):!0:!1}},de=(e,t,n,r,i)=>{if(!i||!n||!r)return{items:e,topSpacer:0,bottomSpacer:0};let a=r+4,o=Math.max(1,Math.ceil(n/a))+12,s=Math.max(0,e.length-o),c=Math.min(s,Math.max(0,Math.floor(t/a)-6)),l=Math.min(e.length,c+o);return{items:e.slice(c,l),topSpacer:c*a,bottomSpacer:Math.max(0,(e.length-l)*a)}},V=e=>{if(e===-1)return`before`;if(e===1)return`after`;if(e===0)return`inside`},fe=(e,t)=>e.map(e=>t[e]?.key).filter(N),pe=(e,t)=>{if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0},me=e=>{switch(e){case`small`:case`sm`:return{headerPadding:`px-4 py-3`,bodyPadding:`px-3 py-3`,rowPadding:`py-1.5`,textClass:`text-sm`,rowMinHeight:36,rowEstimate:42};case`large`:case`lg`:return{headerPadding:`px-5 py-4`,bodyPadding:`px-4 py-4`,rowPadding:`py-2.5`,textClass:`text-[0.95rem]`,rowMinHeight:44,rowEstimate:50};default:return{headerPadding:`px-4 py-3.5`,bodyPadding:`px-3.5 py-3.5`,rowPadding:`py-2`,textClass:`text-sm`,rowMinHeight:40,rowEstimate:46}}},he=e=>{switch(e){case`error`:return`border-error/55 shadow-[0_0_0_1px_rgba(248,113,113,0.14)]`;case`warning`:return`border-warning/55 shadow-[0_0_0_1px_rgba(251,191,36,0.14)]`;default:return``}},ge=e=>f(t=>{let n=i(`span`,t);l(n,`aria-hidden`,`true`),S(()=>{r(n,String(j(`inline-flex size-4 items-center justify-center text-base-content/55 transition-transform duration-150`,e.expanded&&`rotate-90`,e.hidden&&`opacity-0`)))});let a=i(`svg`,n);o(n,a),l(a,`viewBox`,`0 0 20 20`),l(a,`fill`,`none`),r(a,`size-4`);let s=i(`path`,a);return o(a,s),l(s,`d`,`M7.5 5.5L12.5 10L7.5 14.5`),l(s,`stroke`,`currentColor`),l(s,`strokeWidth`,`1.8`),l(s,`strokeLinecap`,`round`),l(s,`strokeLinejoin`,`round`),n}),_e=()=>f(e=>{let t=i(`span`,e);return r(t,`loading loading-spinner loading-xs text-base-content/55`),l(t,`aria-hidden`,`true`),t}),ve=()=>f(e=>{let t=i(`svg`,e);l(t,`viewBox`,`0 0 20 20`),l(t,`fill`,`currentColor`),r(t,`size-4`);let n=i(`circle`,t);o(t,n),l(n,`cx`,`6`),l(n,`cy`,`5`),l(n,`r`,`1.2`);let a=i(`circle`,t);o(t,a),l(a,`cx`,`6`),l(a,`cy`,`10`),l(a,`r`,`1.2`);let s=i(`circle`,t);o(t,s),l(s,`cx`,`6`),l(s,`cy`,`15`),l(s,`r`,`1.2`);let c=i(`circle`,t);o(t,c),l(c,`cx`,`13`),l(c,`cy`,`5`),l(c,`r`,`1.2`);let u=i(`circle`,t);o(t,u),l(u,`cx`,`13`),l(u,`cy`,`10`),l(u,`r`,`1.2`);let d=i(`circle`,t);return o(t,d),l(d,`cx`,`13`),l(d,`cy`,`15`),l(d,`r`,`1.2`),t}),ye=n=>f(a=>{let s=i(`svg`,a);l(s,`viewBox`,`0 0 24 24`),l(s,`fill`,`none`),r(s,`size-5`);let c=e(`rue:slot:anchor`);return o(s,c),S(()=>{let e=n.expanded?f(()=>{let e=t(),n=i(`path`,e);return o(e,n),l(n,`d`,`M3 8.5a2 2 0 0 1 2-2h4l1.4 1.5H19a2 2 0 0 1 1.9 2.6l-1.4 5A2 2 0 0 1 17.6 17H6a2 2 0 0 1-1.93-1.48L3 8.5Z`),l(n,`stroke`,`currentColor`),l(n,`strokeWidth`,`1.6`),l(n,`strokeLinejoin`,`round`),e}):f(()=>{let e=t(),n=i(`path`,e);return o(e,n),l(n,`d`,`M3 7.5a2 2 0 0 1 2-2h4l1.4 1.5H19a2 2 0 0 1 2 2V16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7.5Z`),l(n,`stroke`,`currentColor`),l(n,`strokeWidth`,`1.6`),l(n,`strokeLinejoin`,`round`),e});p(()=>h(e,s,c))}),s}),be=()=>f(e=>{let t=i(`svg`,e);l(t,`viewBox`,`0 0 24 24`),l(t,`fill`,`none`),r(t,`size-5`);let n=i(`path`,t);o(t,n),l(n,`d`,`M8 3.5h6l4 4V19a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5.5a2 2 0 0 1 2-2Z`),l(n,`stroke`,`currentColor`),l(n,`strokeWidth`,`1.6`),l(n,`strokeLinejoin`,`round`);let a=i(`path`,t);return o(t,a),l(a,`d`,`M14 3.5V8h4`),l(a,`stroke`,`currentColor`),l(a,`strokeWidth`,`1.6`),l(a,`strokeLinejoin`,`round`),t}),xe=_=>{let{__rue_rest_omit_0:x,__rue_rest_omit_1:E,__rue_rest_omit_2:O,__rue_rest_omit_3:k,__rue_rest_omit_4:A,__rue_rest_omit_5:M,__rue_rest_omit_6:L,__rue_rest_omit_7:te,__rue_rest_omit_8:ne,__rue_rest_omit_9:xe,__rue_rest_omit_10:H,__rue_rest_omit_11:U,__rue_rest_omit_12:Se,__rue_rest_omit_13:Ce,__rue_rest_omit_14:we,__rue_rest_omit_15:Te,__rue_rest_omit_16:Ee,__rue_rest_omit_17:De,__rue_rest_omit_18:Oe,__rue_rest_omit_19:ke,__rue_rest_omit_20:Ae,__rue_rest_omit_21:je,__rue_rest_omit_22:Me,__rue_rest_omit_23:Ne,__rue_rest_omit_24:Pe,__rue_rest_omit_25:Fe,__rue_rest_omit_26:Ie,__rue_rest_omit_27:Le,__rue_rest_omit_28:Re,__rue_rest_omit_29:ze,__rue_rest_omit_30:Be,__rue_rest_omit_31:Ve,__rue_rest_omit_32:He,__rue_rest_omit_33:Ue,__rue_rest_omit_34:We,__rue_rest_omit_35:Ge,__rue_rest_omit_36:W,__rue_rest_omit_37:G,__rue_rest_omit_38:Ke,__rue_rest_omit_39:qe,__rue_rest_omit_40:Je,__rue_rest_omit_41:K,__rue_rest_omit_42:Ye,__rue_rest_omit_43:Xe,__rue_rest_omit_44:Ze,__rue_rest_omit_45:Qe,__rue_rest_omit_46:$e,__rue_rest_omit_47:et,__rue_rest_omit_48:tt,__rue_rest_omit_49:nt,__rue_rest_omit_50:q,__rue_rest_omit_51:rt,__rue_rest_omit_52:it,__rue_rest_omit_53:at,__rue_rest_omit_54:ot,rest:st,sourceTreeData:ct,normalizedTree:lt,componentSize:J,dragConfig:ut,initialExpandedKeys:dt,uncontrolledSelectedKeysRef:ft,uncontrolledCheckedKeysRef:pt,uncontrolledExpandedKeysRef:mt,controlledCheckedKeyTextsRef:ht,searchValueRef:Y,loadingKeyTextsRef:X,scrollTopRef:gt,directoryLastSelectedKeyTextRef:_t,directoryCachedSelectedKeyTextsRef:vt,dragStateRef:Z,dragHoverDepthRef:yt,mergedSelectedKeys:bt,mergedExpandedKeys:xt,mergedSearchValue:St,mergedCheckedKeyTexts:Ct,selectedKeyTextSet:Q,expandedKeyTextSet:wt,checkState:$,visibleNodes:Tt,estimatedRowHeight:Et,viewportHeight:Dt,fixedVirtualRowHeight:Ot,virtualSlice:kt,emitExpand:At,commitSelectedKeys:jt,commitCheckedKeys:Mt,toggleExpanded:Nt,handleExpandToggle:Pt,selectTreeNode:Ft,handleCheck:It,handleSearchInput:Lt,handleBodyScroll:Rt,clearDragHoverState:zt,setDragHoverState:Bt,updateDragHoverDepth:Vt,resetDragState:Ht,resolveDropContext:Ut,handleDragStartNode:Wt,handleDragEnterNode:Gt,handleDragOverNode:Kt,handleDragLeaveNode:qt,handleDragEndNode:Jt,handleDropNode:Yt,renderSwitcher:Xt,renderDragHandle:Zt,renderGapPlaceholder:Qt,renderNodeIcon:$t,handleLabelActivate:en,bodyViewportStyle:tn}=w(`useSetup:0:0:dup2`,()=>m(()=>{let{className:n,style:a,treeData:s,fieldNames:d,treeDataSimpleMode:x,selectedKeys:C,defaultSelectedKeys:T,checkedKeys:E,defaultCheckedKeys:O,expandedKeys:k,defaultExpandedKeys:ee,defaultExpandAll:A,multiple:M,checkable:L,checkStrictly:te,showLine:ne,showIcon:V,blockNode:he,selectable:xe,disabled:H,size:U,status:Se,draggable:Ce,allowDrop:we,virtual:Te,height:Ee,itemHeight:De,titleRender:Oe,switcherIcon:ke,icon:Ae,filterTreeNode:je,searchValue:Me,defaultSearchValue:Ne,searchPlaceholder:Pe,allowSearch:Fe,loadData:Ie,emptyText:Le,onSelect:Re,onCheck:ze,onExpand:Be,onSearch:Ve,onDoubleClick:He,onDragStart:Ue,onDragEnter:We,onDragOver:Ge,onDragLeave:W,onDragEnd:G,onDrop:Ke,onScroll:qe,classNames:Je,styles:K,directoryMode:Ye,expandAction:Xe,toggleSelect:Ze,rangeSelect:Qe,...$e}=_,et=w(`computed:1:0`,()=>v(()=>re(_.treeData===void 0?[]:_.treeData,_.treeDataSimpleMode,_.fieldNames))),tt=et,nt=w(`computed:1:1`,()=>v(()=>z(tt.get(),_.fieldNames))),q=nt,rt=w(`computed:1:2`,()=>v(()=>me(_.size))),it=rt,at=w(`computed:1:3`,()=>v(()=>ue(_.draggable))),ot=at,st=_.defaultExpandAll?q.get().flat.filter(e=>e.children.length>0||!e.isLeaf).map(e=>e.key):_.defaultExpandedKeys??[],ct=w(`ref:1:4`,()=>y(F(_.defaultSelectedKeys??_.selectedKeys))),lt=w(`ref:1:5`,()=>y(F(_.defaultCheckedKeys))),J=w(`ref:1:6`,()=>y(F(st))),ut=w(`ref:1:7`,()=>y(_.checkedKeys===void 0?new Set:Array.isArray(_.checkedKeys)?R(_.checkedKeys):R(_.checkedKeys.checked))),dt=w(`ref:1:8`,()=>y(_.defaultSearchValue??``)),ft=w(`ref:1:9`,()=>y([])),pt=w(`ref:1:10`,()=>y(0)),mt=w(`ref:1:11`,()=>y(null)),ht=w(`ref:1:12`,()=>y([])),Y=w(`ref:1:13`,()=>y({})),X=w(`ref:1:14`,()=>y({}));if(_.checkedKeys!==void 0){let e=Array.isArray(_.checkedKeys)?R(_.checkedKeys):R(_.checkedKeys.checked);pe(ut.value,e)||(ut.value=e)}let gt=w(`computed:1:15`,()=>v(()=>_.selectedKeys===void 0?ct.value:F(_.selectedKeys))),_t=gt,vt=w(`computed:1:16`,()=>v(()=>_.expandedKeys===void 0?J.value:F(_.expandedKeys))),Z=vt,yt=w(`computed:1:17`,()=>v(()=>_.searchValue===void 0?dt.value:_.searchValue)),bt=yt,xt=_.checkedKeys===void 0?R(lt.value):ut.value,St=w(`computed:1:18`,()=>v(()=>R(_t.get()))),Ct=St,Q=w(`computed:1:19`,()=>v(()=>R(Z.get()))),wt=Q,$=w(`computed:1:20`,()=>v(()=>oe(q.get().roots,xt,!!_.checkStrictly))),Tt=$,Et=w(`computed:1:21`,()=>v(()=>ce(q.get().roots,wt.get(),bt.get(),e=>B(e,bt.get(),_.filterTreeNode)))),Dt=Et,Ot=w(`computed:1:22`,()=>v(()=>_.itemHeight??it.get().rowEstimate)),kt=Ot,At=w(`computed:1:23`,()=>v(()=>typeof _.height==`number`&&_.height>0?_.height:void 0)),jt=At,Mt=w(`computed:1:24`,()=>v(()=>(_.virtual===void 0?!0:_.virtual)!==!1&&jt.get()&&typeof _.itemHeight==`number`&&_.itemHeight>0?_.itemHeight:void 0)),Nt=w(`computed:1:25`,()=>v(()=>de(Dt.get(),pt.value,jt.get(),kt.get(),(_.virtual===void 0?!0:_.virtual)!==!1&&!!jt.get()))),Pt=(e,t,n)=>{let r=F(e);return _.expandedKeys===void 0&&(J.value=r),_.onExpand&&_.onExpand(r,{node:t,expanded:r.some(e=>P(e)===t.keyText),nativeEvent:n}),r},Ft=(e,t,n)=>{let r=F(e).filter(e=>q.get().byKeyText[P(e)]),i=r.map(e=>q.get().byKeyText[P(e)]).filter(Boolean);_.selectedKeys===void 0&&(ct.value=r),_.onSelect&&_.onSelect(r,{node:t,nativeEvent:n,selected:r.some(e=>P(e)===t.keyText),selectedNodes:i})},It=(e,t,n)=>{let r=oe(q.get().roots,e,!!_.checkStrictly),i=se(Array.from(r.checkedKeys),Array.from(r.halfCheckedKeys),q.get().flat,!!_.checkStrictly);_.checkedKeys===void 0?lt.value=_.checkStrictly?i.checked:i:ut.value=new Set(r.checkedKeys),_.onCheck&&_.onCheck(i,{node:t,nativeEvent:n,checked:r.checkedKeys.has(t.keyText),checkedNodes:Array.from(r.checkedKeys).map(e=>q.get().byKeyText[e]).filter(Boolean),halfCheckedKeys:Array.from(r.halfCheckedKeys).map(e=>q.get().byKeyText[e]?.key).filter(N)})},Lt=async(e,t)=>{if(_.disabled||e.disabled)return Z.get();let n=wt.get().has(e.keyText),r=n?Z.get().filter(t=>P(t)!==e.keyText):[...Z.get(),e.key];if(!n&&_.loadData&&!e.isLeaf&&e.children.length===0&&!ft.value.includes(e.keyText)){ft.value=[...ft.value,e.keyText];try{await _.loadData(e)}finally{ft.value=ft.value.filter(t=>t!==e.keyText)}}return Pt(r,e,t)},Rt=(e,t)=>{t.preventDefault(),t.stopPropagation(),Lt(e,t)},zt=(e,t)=>{if(!(_.disabled||e.disabled||!(_.selectable===void 0||_.selectable)||!e.selectable)){if(_.directoryMode){let n=!!_.multiple&&!!(_.toggleSelect===void 0||_.toggleSelect)&&!!(t?.ctrlKey||t?.metaKey),r=!!_.multiple&&(_.rangeSelect===void 0?`append`:_.rangeSelect)!==!1&&!!t?.shiftKey&&!!mt.value;if(_.multiple&&r){let n=Dt.get().map(e=>e.node.keyText),r=mt.value??e.keyText,i=n.indexOf(r),a=n.indexOf(e.keyText),o=Math.min(i,a),s=Math.max(i,a),c=n.slice(o,s+1),l=(_.rangeSelect===void 0?`append`:_.rangeSelect)===`append`?ht.value.length?ht.value:_t.get().map(P):[];Ft(fe(Array.from(new Set([...l,...c])),q.get().byKeyText),e,t);return}if(_.multiple&&n){let n=Ct.get().has(e.keyText)?_t.get().filter(t=>P(t)!==e.keyText):[..._t.get(),e.key];mt.value=e.keyText,ht.value=n.map(P),Ft(n,e,t);return}mt.value=e.keyText,ht.value=[e.keyText],Ft([e.key],e,t);return}if(_.multiple){Ft(Ct.get().has(e.keyText)?_t.get().filter(t=>P(t)!==e.keyText):[..._t.get(),e.key],e,t);return}Ft(Ct.get().has(e.keyText)?[]:[e.key],e,t)}},Bt=(e,t)=>{if(t.preventDefault(),t.stopPropagation(),_.disabled||e.disabled||!e.checkable||e.disableCheckbox)return;let n=new Set(xt),r=Tt.get().checkedKeys.has(e.keyText);if(_.checkStrictly)r?n.delete(e.keyText):n.add(e.keyText);else{let t=ie(e);r?t.forEach(e=>n.delete(e)):t.forEach(e=>n.add(e))}It(n,e,t)},Vt=e=>{_.searchValue===void 0&&(dt.value=e),_.onSearch&&_.onSearch(e)},Ht=e=>{pt.value=e.currentTarget.scrollTop,_.onScroll&&_.onScroll(e)},Ut=e=>{!e||Y.value.overKeyText!==e||(Y.value={dragKeyText:Y.value.dragKeyText})},Wt=(e,t)=>{Y.value.overKeyText===e&&Y.value.dropPosition===t||(Y.value={...Y.value,overKeyText:e,dropPosition:t})},Gt=(e,t)=>{let n={...X.value},r=n[e]??0,i=Math.max(r+t,0);return i>0?n[e]=i:delete n[e],X.value=n,i},Kt=()=>{X.value={},Y.value={}},qt=(e,t,n)=>{let r=Y.value.dragKeyText;if(!r)return null;let i=q.get().byKeyText[r];if(!i||i.keyText===e.keyText||le(i,e,q.get().byKeyText))return null;let a=n?.getBoundingClientRect?.(),o=`clientY`in t?t.clientY:void 0,s=0;a&&typeof o==`number`&&(o<a.top+a.height*.25?s=-1:o>a.bottom-a.height*.25&&(s=1));let c=s!==0;return _.allowDrop&&!_.allowDrop({dragNode:i,dropNode:e,dropPosition:s,dropToGap:c})?null:{dragNode:i,dropPosition:s}};return{__rue_rest_omit_0:n,__rue_rest_omit_1:a,__rue_rest_omit_2:s,__rue_rest_omit_3:d,__rue_rest_omit_4:x,__rue_rest_omit_5:C,__rue_rest_omit_6:T,__rue_rest_omit_7:E,__rue_rest_omit_8:O,__rue_rest_omit_9:k,__rue_rest_omit_10:ee,__rue_rest_omit_11:A,__rue_rest_omit_12:M,__rue_rest_omit_13:L,__rue_rest_omit_14:te,__rue_rest_omit_15:ne,__rue_rest_omit_16:V,__rue_rest_omit_17:he,__rue_rest_omit_18:xe,__rue_rest_omit_19:H,__rue_rest_omit_20:U,__rue_rest_omit_21:Se,__rue_rest_omit_22:Ce,__rue_rest_omit_23:we,__rue_rest_omit_24:Te,__rue_rest_omit_25:Ee,__rue_rest_omit_26:De,__rue_rest_omit_27:Oe,__rue_rest_omit_28:ke,__rue_rest_omit_29:Ae,__rue_rest_omit_30:je,__rue_rest_omit_31:Me,__rue_rest_omit_32:Ne,__rue_rest_omit_33:Pe,__rue_rest_omit_34:Fe,__rue_rest_omit_35:Ie,__rue_rest_omit_36:Le,__rue_rest_omit_37:Re,__rue_rest_omit_38:ze,__rue_rest_omit_39:Be,__rue_rest_omit_40:Ve,__rue_rest_omit_41:He,__rue_rest_omit_42:Ue,__rue_rest_omit_43:We,__rue_rest_omit_44:Ge,__rue_rest_omit_45:W,__rue_rest_omit_46:G,__rue_rest_omit_47:Ke,__rue_rest_omit_48:qe,__rue_rest_omit_49:Je,__rue_rest_omit_50:K,__rue_rest_omit_51:Ye,__rue_rest_omit_52:Xe,__rue_rest_omit_53:Ze,__rue_rest_omit_54:Qe,rest:$e,sourceTreeData:et,normalizedTree:nt,componentSize:rt,dragConfig:at,initialExpandedKeys:st,uncontrolledSelectedKeysRef:ct,uncontrolledCheckedKeysRef:lt,uncontrolledExpandedKeysRef:J,controlledCheckedKeyTextsRef:ut,searchValueRef:dt,loadingKeyTextsRef:ft,scrollTopRef:pt,directoryLastSelectedKeyTextRef:mt,directoryCachedSelectedKeyTextsRef:ht,dragStateRef:Y,dragHoverDepthRef:X,mergedSelectedKeys:gt,mergedExpandedKeys:vt,mergedSearchValue:yt,mergedCheckedKeyTexts:xt,selectedKeyTextSet:St,expandedKeyTextSet:Q,checkState:$,visibleNodes:Et,estimatedRowHeight:Ot,viewportHeight:At,fixedVirtualRowHeight:Mt,virtualSlice:Nt,emitExpand:Pt,commitSelectedKeys:Ft,commitCheckedKeys:It,toggleExpanded:Lt,handleExpandToggle:Rt,selectTreeNode:zt,handleCheck:Bt,handleSearchInput:Vt,handleBodyScroll:Ht,clearDragHoverState:Ut,setDragHoverState:Wt,updateDragHoverDepth:Gt,resetDragState:Kt,resolveDropContext:qt,handleDragStartNode:(e,t)=>{!ot.get().enabled||!ot.get().nodeDraggable(e)||_.disabled||e.disabled||(t.dataTransfer&&(t.dataTransfer.effectAllowed=`move`,t.dataTransfer.setData(`text/plain`,e.keyText)),X.value={},Y.value={dragKeyText:e.keyText},_.onDragStart&&_.onDragStart({event:t,node:e}))},handleDragEnterNode:(e,t)=>{if(!Y.value.dragKeyText)return;Gt(e.keyText,1);let n=qt(e,t,t.currentTarget);if(!n){Ut(e.keyText);return}t.preventDefault(),Wt(e.keyText,n.dropPosition);let r=Z.get();n.dropPosition===0&&!wt.get().has(e.keyText)&&(e.children.length>0||!e.isLeaf)&&(r=Pt([...Z.get(),e.key],e,t)),_.onDragEnter&&_.onDragEnter({event:t,node:e,expandedKeys:r})},handleDragOverNode:(e,t)=>{if(!Y.value.dragKeyText)return;let n=qt(e,t,t.currentTarget);if(!n){Ut(e.keyText);return}t.preventDefault(),t.dataTransfer&&(t.dataTransfer.dropEffect=`move`),Wt(e.keyText,n.dropPosition),_.onDragOver&&_.onDragOver({event:t,node:e})},handleDragLeaveNode:(e,t)=>{Gt(e.keyText,-1)===0&&Ut(e.keyText),_.onDragLeave&&_.onDragLeave({event:t,node:e})},handleDragEndNode:(e,t)=>{Kt(),_.onDragEnd&&_.onDragEnd({event:t,node:e})},handleDropNode:(e,t)=>{let n=qt(e,t,t.currentTarget);if(!n){Kt();return}t.preventDefault(),t.stopPropagation(),_.onDrop&&_.onDrop({event:t,node:e,dragNode:n.dragNode,dragNodesKeys:ae(n.dragNode),dropPosition:n.dropPosition,dropToGap:n.dropPosition!==0}),Kt()},renderSwitcher:(e,t,n,r,i,a)=>{let{renderProps:o}=w(`useSetup:0:0`,()=>m(()=>({renderProps:{node:e,expanded:t,selected:n,checked:r,halfChecked:i,loading:a}})));return typeof _.switcherIcon==`function`?_.switcherIcon(o):_.switcherIcon===void 0?a?D(_e,{}):D(ge,{expanded:t,hidden:e.isLeaf&&e.children.length===0}):_.switcherIcon},renderDragHandle:n=>!ot.get().enabled||ot.get().icon===!1||!ot.get().nodeDraggable(n)?null:f(n=>{let a=i(`span`,n);l(a,`aria-hidden`,`true`),S(()=>{r(a,String(I(`inline-flex size-6 shrink-0 cursor-grab items-center justify-center rounded-lg text-base-content/35 transition group-hover:text-base-content/55`,_.classNames?.dragHandle)))}),S(()=>{let e=_.styles?.dragHandle;u(a,e)}),l(a,`data-rue-tree-drag-handle`,`true`);let s=e(`rue:slot:anchor`);return o(a,s),S(()=>{let n=ot.get().icon??f(()=>{let n=t(),r=e(`rue:component:anchor`);return o(n,r),h(b(ve,{}),n,r),n});p(()=>h(n,a,s))}),a}),renderGapPlaceholder:(e,t)=>f(n=>{let a=i(`div`,n);S(()=>{r(a,String(j(`pointer-events-none absolute inset-x-0 z-10 flex items-center gap-2 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-primary/85`,t===`before`?`-top-2.5`:`-bottom-2.5`)))}),S(()=>{u(a,{paddingLeft:`${e.depth*18+20}px`})}),S(()=>{l(a,`data-rue-tree-drop-placeholder`,String(t))});let s=i(`span`,a);o(a,s),r(s,`h-[2px] flex-1 rounded-full bg-primary/60`);let d=i(`span`,a);return o(a,d),r(d,`rounded-full bg-primary/10 px-2 py-1 text-[10px]`),o(d,c(`插入到此处`)),a}),renderNodeIcon:(n,a,s,c,l,u)=>{let{renderProps:d}=w(`useSetup:0:0:dup1`,()=>m(()=>({renderProps:{node:n,expanded:a,selected:s,checked:c,halfChecked:l,loading:u}})));return typeof _.icon==`function`?_.icon(d):_.icon===void 0?n.icon===void 0?_.showIcon?_.directoryMode?f(s=>{let c=i(`span`,s);r(c,`inline-flex size-6 items-center justify-center text-base-content/60`);let l=e(`rue:slot:anchor`);return o(c,l),S(()=>{let r=n.children.length>0||!n.isLeaf?f(()=>{let n=t(),r=e(`rue:component:anchor`);return o(n,r),S(()=>{let e=b(ye,{expanded:a});p(()=>h(e,n,r))}),n}):f(()=>{let n=t(),r=e(`rue:component:anchor`);return o(n,r),h(b(be,{}),n,r),n});p(()=>h(r,c,l))}),c}):f(t=>{let a=i(`span`,t);r(a,`inline-flex size-6 items-center justify-center rounded-xl bg-base-200/80 text-[11px] text-base-content/60`);let s=e(`rue:slot:anchor`);return o(a,s),S(()=>{let e=n.children.length>0||!n.isLeaf?`DIR`:`DOC`;p(()=>h(e,a,s))}),a}):null:n.icon:_.icon},handleLabelActivate:(e,t,n)=>{t.preventDefault(),t.stopPropagation(),n===`doubleClick`&&_.onDoubleClick&&_.onDoubleClick(t,e);let r=_.directoryMode&&(_.expandAction===void 0?!1:_.expandAction)===n&&(e.children.length>0||!e.isLeaf);if(n===`click`&&r){g(()=>{Lt(e,t),zt(e,t)});return}r&&Lt(e,t),n===`click`&&zt(e,t)},bodyViewportStyle:w(`computed:1:26`,()=>v(()=>jt.get()?(_.virtual===void 0?!0:_.virtual)===!1?{maxHeight:`${jt.get()}px`,overflowY:`auto`}:{height:`${jt.get()}px`,overflowY:`auto`}:{overflowY:`visible`}))}}));return f(m=>{let g=i(`section`,m);S(()=>{r(g,String(I(I(I(j(`rue-tree overflow-hidden rounded-[1.35rem] border border-base-300/70 bg-gradient-to-b from-base-100 via-base-100 to-base-200/35 shadow-[0_18px_40px_-32px_rgba(15,23,42,0.35)]`,_.directoryMode&&`rue-directory-tree`),he(_.status)),_.classNames?.root),_.className)))}),S(()=>{u(g,{..._.styles?.root,..._.style})}),l(g,`data-rue-tree`,`true`);let v=e(`rue:slot:anchor`);o(g,v),S(()=>{let e=_.allowSearch?f(()=>{let e=t(),n=i(`div`,e);o(e,n),S(()=>{r(n,String(I(I(`border-b border-base-300/70 ${J.get().headerPadding}`,_.classNames?.header),_.classNames?.search)))}),S(()=>{u(n,{..._.styles?.header,..._.styles?.search})});let s=i(`label`,n);o(n,s),r(s,`input input-bordered flex w-full items-center gap-2 rounded-2xl border-base-300/80 bg-base-100/85 px-3 shadow-sm focus-within:border-primary/45 focus-within:outline-none`);let c=i(`svg`,s);o(s,c),l(c,`viewBox`,`0 0 24 24`),l(c,`fill`,`none`),l(c,`stroke`,`currentColor`),l(c,`strokeWidth`,`1.8`),r(c,`size-4 text-base-content/50`);let f=i(`circle`,c);o(c,f),l(f,`cx`,`11`),l(f,`cy`,`11`),l(f,`r`,`7`);let p=i(`path`,c);o(c,p),l(p,`strokeLinecap`,`round`),l(p,`d`,`m20 20-3.5-3.5`);let m=i(`input`,s);return o(s,m),l(m,`type`,`text`),S(()=>{d(m,St.get())}),S(()=>{l(m,`placeholder`,String(_.searchPlaceholder===void 0?`搜索节点`:_.searchPlaceholder))}),r(m,`grow border-none bg-transparent px-0 py-2 text-sm outline-none`),a(m,`input`,e=>Lt(e.currentTarget.value)),e}):``;p(()=>h(e,g,v))});let y=i(`div`,g);o(g,y),S(()=>{r(y,String(I(`flex flex-col ${J.get().bodyPadding}`,_.classNames?.body)))}),S(()=>{let e=_.styles?.body;u(y,e)});let x=i(`div`,y);o(y,x),S(()=>{r(x,String(Dt.get()?`overflow-auto`:`overflow-visible`))}),S(()=>{u(x,tn.get())}),a(x,`scroll`,e=>Rt(e)),l(x,`data-rue-tree-body`,`true`),o(x,c(` `));let w=e(`rue:slot:anchor`);o(x,w),S(()=>{let e=kt.get().topSpacer>0?f(()=>{let e=t(),n=i(`div`,e);return o(e,n),S(()=>{u(n,{height:`${kt.get().topSpacer}px`})}),l(n,`aria-hidden`,`true`),e}):``;p(()=>h(e,x,w))}),o(x,c(` `));let E=i(`div`,x);o(x,E),S(()=>{r(E,String(Tt.get().length?`space-y-1`:`hidden`))}),S(()=>{l(E,`aria-hidden`,String(Tt.get().length?void 0:`true`))});let D=e(`rue:list:start`),O=e(`rue:list:end`);o(E,D),o(E,O);let k=new Map;S(()=>{k=T({items:kt.get().items||[],getKey:(e,t)=>e.node.keyText,elements:k,parent:E,before:O,singleRoot:!0,trackIndex:!1,start:D,renderItem:(d,m,g,v,y)=>{h(f(()=>{let m=t(),g=i(`div`,m);o(m,g),S(()=>{l(g,`key`,String(d.node.keyText))}),r(g,`relative flex flex-col`);let v=e(`rue:slot:anchor`);o(g,v),S(()=>{let e=(Z.value.overKeyText===d.node.keyText?V(Z.value.dropPosition):void 0)===`before`?Qt(d.node,`before`):``;p(()=>h(e,g,v))});let y=i(`div`,g);o(g,y),S(()=>{r(y,String(I(I(j(`group flex items-center gap-2 rounded-2xl px-2.5 ${J.get().rowPadding} transition duration-200 ease-out`,d.matched&&`bg-primary/8`,Q.get().has(d.node.keyText)&&`bg-primary/18 ring-1 ring-primary/30 shadow-[0_18px_32px_-24px_rgba(37,99,235,0.85)]`,_.showLine&&d.node.depth>0&&`border-l border-base-300/60`,_.blockNode?`w-full`:``,Z.value.overKeyText===d.node.keyText&&Z.value.dropPosition===0?`ring-2 ring-primary/35 ring-inset`:``,d.node.className),_.classNames?.node),_.disabled||d.node.disabled?`opacity-55`:``)))}),S(()=>{u(y,{paddingLeft:`${d.node.depth*18+8}px`,minHeight:Ot.get()?void 0:`${J.get().rowMinHeight}px`,height:Ot.get()?`${Ot.get()}px`:void 0,boxSizing:Ot.get()?`border-box`:void 0,..._.styles?.node})}),S(()=>{l(y,`data-rue-tree-node`,String(d.node.keyText))}),S(()=>{l(y,`data-rue-tree-drop-position`,String(Z.value.overKeyText===d.node.keyText?String(Z.value.dropPosition??0):``))}),S(()=>{l(y,`data-rue-tree-drop-intent`,String((Z.value.overKeyText===d.node.keyText?V(Z.value.dropPosition):void 0)??``))}),S(()=>{l(y,`draggable`,String(ut.get().enabled&&ut.get().nodeDraggable(d.node)&&!_.disabled&&!d.node.disabled))}),a(y,`dragstart`,e=>Wt(d.node,e)),a(y,`dragenter`,e=>Gt(d.node,e)),a(y,`dragover`,e=>Kt(d.node,e)),a(y,`dragleave`,e=>qt(d.node,e)),a(y,`dragend`,e=>Jt(d.node,e)),a(y,`drop`,e=>Yt(d.node,e));let x=i(`button`,y);o(y,x),l(x,`type`,`button`),S(()=>{r(x,String(I(`inline-flex size-7 shrink-0 items-center justify-center rounded-xl hover:bg-base-200 disabled:cursor-not-allowed`,_.classNames?.switcher)))}),S(()=>{let e=_.styles?.switcher;u(x,e)}),S(()=>{n(x,!(_.loadData||d.node.children.length>0||!d.node.isLeaf)||_.disabled||d.node.disabled)}),S(()=>{l(x,`aria-label`,String(St.get()||wt.get().has(d.node.keyText)?`折叠节点`:`展开节点`))}),a(x,`click`,e=>Pt(d.node,e));let w=e(`rue:slot:anchor`);o(x,w),S(()=>{let e=Xt(d.node,St.get()?!0:wt.get().has(d.node.keyText),Q.get().has(d.node.keyText),($.get().stateMap[d.node.keyText]??{checked:!1,halfChecked:!1,participates:!0}).checked,($.get().stateMap[d.node.keyText]??{checked:!1,halfChecked:!1,participates:!0}).halfChecked,X.value.includes(d.node.keyText));p(()=>h(e,x,w))});let T=e(`rue:slot:anchor`);o(y,T),S(()=>{let e=_.checkable?f(()=>{let e=t(),c=i(`button`,e);o(e,c),S(()=>{l(c,`key`,String(`checkbox-${d.node.keyText}-${($.get().stateMap[d.node.keyText]??{checked:!1,halfChecked:!1,participates:!0}).checked?`checked`:($.get().stateMap[d.node.keyText]??{checked:!1,halfChecked:!1,participates:!0}).halfChecked?`mixed`:`unchecked`}`))}),l(c,`type`,`button`),l(c,`role`,`checkbox`),S(()=>{l(c,`aria-checked`,String(($.get().stateMap[d.node.keyText]??{checked:!1,halfChecked:!1,participates:!0}).halfChecked?`mixed`:($.get().stateMap[d.node.keyText]??{checked:!1,halfChecked:!1,participates:!0}).checked?`true`:`false`))}),S(()=>{r(c,String(I(I(j(`inline-flex size-[1.1rem] shrink-0 items-center justify-center rounded-[0.4rem] border text-[0.75rem] font-semibold shadow-sm transition-all duration-150`,($.get().stateMap[d.node.keyText]??{checked:!1,halfChecked:!1,participates:!0}).checked||($.get().stateMap[d.node.keyText]??{checked:!1,halfChecked:!1,participates:!0}).halfChecked?`border-primary/95 bg-primary text-primary-content shadow-[0_0_0_1px_rgba(37,99,235,0.22)]`:`border-base-content/30 bg-base-100 text-base-content/0 shadow-[0_0_0_1px_rgba(15,23,42,0.06)]`,(_.disabled||d.node.disabled||d.node.disableCheckbox||!d.node.checkable)&&`opacity-45`),_.classNames?.checkbox),_.disabled||d.node.disabled||d.node.disableCheckbox||!d.node.checkable?`cursor-not-allowed`:``)))}),S(()=>{let e=_.styles?.checkbox;u(c,e)}),S(()=>{n(c,_.disabled||d.node.disabled||d.node.disableCheckbox||!d.node.checkable)}),a(c,`click`,e=>It(d.node,e));let f=C(c);return o(c,f),S(()=>{s(f,($.get().stateMap[d.node.keyText]??{checked:!1,halfChecked:!1,participates:!0}).halfChecked?`−`:($.get().stateMap[d.node.keyText]??{checked:!1,halfChecked:!1,participates:!0}).checked?`✓`:``)}),e}):``;p(()=>h(e,y,T))}),o(y,c(` `));let E=e(`rue:slot:anchor`);o(y,E),S(()=>{let e=Zt(d.node);p(()=>h(e,y,E))}),o(y,c(` `));let D=e(`rue:slot:anchor`);o(y,D),S(()=>{let e=_.showIcon||d.node.icon!==void 0||_.icon!==void 0?$t(d.node,St.get()?!0:wt.get().has(d.node.keyText),Q.get().has(d.node.keyText),($.get().stateMap[d.node.keyText]??{checked:!1,halfChecked:!1,participates:!0}).checked,($.get().stateMap[d.node.keyText]??{checked:!1,halfChecked:!1,participates:!0}).halfChecked,X.value.includes(d.node.keyText)):``;p(()=>h(e,y,D))});let O=i(`button`,y);o(y,O),l(O,`type`,`button`),S(()=>{r(O,String(I(I(j(`flex min-w-0 flex-1 items-center gap-2 rounded-xl px-2.5 py-1.5 text-left ${J.get().textClass} transition-colors duration-150`,_.directoryMode?Q.get().has(d.node.keyText)?`bg-base-200/85 text-base-content`:`text-base-content hover:bg-base-200/70`:Q.get().has(d.node.keyText)?`bg-primary/10 font-semibold text-primary`:`text-base-content hover:bg-base-200/70`,_.disabled||d.node.disabled||!(_.selectable===void 0||_.selectable)||!d.node.selectable?`cursor-not-allowed opacity-55`:``),_.classNames?.label),_.blockNode?`w-full`:``)))}),S(()=>{let e=_.styles?.label;u(O,e)}),S(()=>{n(O,_.disabled||d.node.disabled||!(_.selectable===void 0||_.selectable)||!d.node.selectable)}),a(O,`click`,e=>en(d.node,e,`click`)),a(O,`dblclick`,e=>en(d.node,e,`doubleClick`));let k=e(`rue:slot:anchor`);o(O,k),S(()=>{let n=_.titleRender?f(()=>{let n=t(),a=i(`div`,n);o(n,a),r(a,`min-w-0 flex-1`);let s=e(`rue:component:anchor`);return o(a,s),h(b(ee,{render:()=>_.titleRender({node:d.node,expanded:St.get()?!0:wt.get().has(d.node.keyText),selected:Q.get().has(d.node.keyText),checked:($.get().stateMap[d.node.keyText]??{checked:!1,halfChecked:!1,participates:!0}).checked,halfChecked:($.get().stateMap[d.node.keyText]??{checked:!1,halfChecked:!1,participates:!0}).halfChecked,loading:X.value.includes(d.node.keyText)})}),a,s),n}):f(()=>{let n=t(),a=i(`span`,n);o(n,a),r(a,`min-w-0 flex-1 truncate`);let s=e(`rue:slot:anchor`);return o(a,s),S(()=>{let e=d.node.title;p(()=>h(e,a,s))}),n});p(()=>h(n,O,k))}),o(O,c(` `));let A=e(`rue:slot:anchor`);o(O,A),S(()=>{let e=Z.value.overKeyText===d.node.keyText&&V(Z.value.dropPosition)?f(()=>{let e=t(),n=i(`span`,e);o(e,n),r(n,`badge badge-primary badge-xs`),S(()=>{l(n,`data-rue-tree-drop-placeholder`,String(Z.value.overKeyText===d.node.keyText?V(Z.value.dropPosition):void 0))});let a=C(n);return o(n,a),S(()=>{s(a,(Z.value.overKeyText===d.node.keyText?V(Z.value.dropPosition):void 0)===`inside`?`放入`:(Z.value.overKeyText===d.node.keyText?V(Z.value.dropPosition):void 0)===`before`?`插前`:`插后`)}),e}):Q.get().has(d.node.keyText)?f(()=>{let e=t(),n=i(`span`,e);return o(e,n),r(n,`badge badge-primary badge-outline badge-xs`),o(n,c(`选中`)),e}):``;p(()=>h(e,O,A))});let M=e(`rue:slot:anchor`);return o(g,M),S(()=>{let e=(Z.value.overKeyText===d.node.keyText?V(Z.value.dropPosition):void 0)===`after`?Qt(d.node,`after`):``;p(()=>h(e,g,M))}),m}),m,g)}})}),o(x,c(` `));let A=e(`rue:slot:anchor`);o(x,A),S(()=>{let e=kt.get().bottomSpacer>0?f(()=>{let e=t(),n=i(`div`,e);return o(e,n),S(()=>{u(n,{height:`${kt.get().bottomSpacer}px`})}),l(n,`aria-hidden`,`true`),e}):``;p(()=>h(e,x,A))}),o(x,c(` `));let M=e(`rue:slot:anchor`);return o(x,M),S(()=>{let n=Tt.get().length?``:f(()=>{let n=t(),a=i(`div`,n);o(n,a),S(()=>{r(a,String(I(`grid min-h-40 place-items-center rounded-2xl border border-dashed border-base-300/70 bg-base-100/50 px-6 py-8 text-center text-sm text-base-content/55`,_.classNames?.empty)))}),S(()=>{let e=_.styles?.empty;u(a,e)});let s=i(`div`,a);o(a,s);let c=e(`rue:slot:anchor`);return o(s,c),S(()=>{let e=_.emptyText===void 0?`暂无节点`:_.emptyText;p(()=>h(e,s,c))}),n});p(()=>h(n,x,M))}),o(x,c(` `)),g})},H=n=>{let{__rue_rest_omit_0:r,__rue_rest_omit_1:i,__rue_rest_omit_2:a,__rue_rest_omit_3:s,rest:c}=w(`useSetup:0:0:dup3`,()=>m(()=>{let{className:e,showIcon:t,blockNode:r,expandAction:i,...a}=n;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:r,__rue_rest_omit_3:i,rest:a}}));return f(r=>{let i=t(),a=e(`rue:component:anchor`);return o(i,a),S(()=>{let e=b(xe,{...c,className:I(`rue-directory-tree`,n.className),showIcon:n.showIcon===void 0?!0:n.showIcon,blockNode:n.blockNode===void 0?!0:n.blockNode,directoryMode:!0,expandAction:n.expandAction===void 0?`click`:n.expandAction});p(()=>h(e,i,a))}),i})},U=xe;U.DirectoryTree=H;var Se=n=>f(a=>{let s=i(`div`,a);r(s,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let u=i(`table`,s);o(s,u),r(u,`table table-zebra`);let d=i(`thead`,u);o(u,d);let m=i(`tr`,d);o(d,m);let g=i(`th`,m);o(m,g),o(g,c(`属性`));let _=i(`th`,m);o(m,_),o(_,c(`说明`));let v=i(`th`,m);o(m,v),o(v,c(`类型`));let y=i(`th`,m);o(m,y),o(y,c(`默认值`));let b=i(`tbody`,u);o(u,b);let x=e(`rue:list:start`),C=e(`rue:list:end`);o(b,x),o(b,C);let w=new Map;return S(()=>{w=T({items:n.rows||[],getKey:(e,t)=>e.prop,elements:w,parent:b,before:C,singleRoot:!0,trackIndex:!1,start:x,renderItem:(n,r,a,s,c)=>{h(f(()=>{let r=t(),a=i(`tr`,r);o(r,a),S(()=>{l(a,`key`,String(n.prop))});let s=i(`td`,a);o(a,s);let c=i(`code`,s);o(s,c);let u=e(`rue:slot:anchor`);o(c,u),S(()=>{let e=n.prop;p(()=>h(e,c,u))});let d=i(`td`,a);o(a,d);let f=e(`rue:slot:anchor`);o(d,f),S(()=>{let e=n.description;p(()=>h(e,d,f))});let m=i(`td`,a);o(a,m);let g=i(`code`,m);o(m,g);let _=e(`rue:slot:anchor`);o(g,_),S(()=>{let e=n.type;p(()=>h(e,g,_))});let v=i(`td`,a);o(a,v);let y=i(`code`,v);o(v,y);let b=e(`rue:slot:anchor`);return o(y,b),S(()=>{let e=n.defaultValue;p(()=>h(e,y,b))}),r}),r,a)}})}),s}),Ce=[{title:`产品平台`,key:`platform`,children:[{title:`文档中心`,key:`docs-api`},{title:`组件市场`,key:`component-hub`},{title:`示例仓库`,key:`examples`}]},{title:`工程效率`,key:`engineering`,children:[{title:`构建链路`,key:`build-pipeline`},{title:`质量门禁`,key:`quality-gate`},{title:`发布管道`,key:`release-flow`}]},{title:`增长分析`,key:`growth`,children:[{title:`实验看板`,key:`experiment-board`},{title:`归因报表`,key:`attribution-report`},{title:`留存漏斗`,key:`retention-funnel`}]}],we=[{title:`发布总控`,key:`release-control`,children:[{title:`前台站点`,key:`release-site`,children:[{title:`首页编排`,key:`site-home`},{title:`价格页`,key:`site-pricing`}]},{title:`运营链路`,key:`release-ops`,children:[{title:`投放素材`,key:`ops-assets`},{title:`归因回传`,key:`ops-attribution`}]},{title:`合规审查`,key:`release-compliance`,children:[{title:`隐私条款`,key:`compliance-privacy`},{title:`审计记录`,key:`compliance-audit`}]}]}],Te=[{title:`权限控制`,key:`permission-disabled-root`,children:[{title:`只读目录`,key:`readonly-folder`,disabled:!0,children:[{title:`首页编排`,key:`readonly-home`},{title:`价格页`,key:`readonly-pricing`}]},{title:`可编辑目录`,key:`editable-folder`,children:[{title:`投放素材`,key:`editable-assets`},{title:`归因回传`,key:`editable-attribution`,disableCheckbox:!0}]},{title:`审计日志（仅禁用复选框）`,key:`audit-log`,disableCheckbox:!0}]}],Ee=[{nodeId:1,parentId:0,code:`workspace`,name:`Workspace`},{nodeId:2,parentId:1,code:`workflow`,name:`Workflow board`},{nodeId:3,parentId:1,code:`briefs`,name:`Briefs`},{nodeId:4,parentId:2,code:`review`,name:`Design review`},{nodeId:5,parentId:2,code:`release`,name:`Release checklist`},{nodeId:6,parentId:3,code:`content`,name:`Content drafts`}],De=[{title:`app`,key:`dir-app`,children:[{title:`pages`,key:`dir-pages`,children:[{title:`Tree.tsx`,key:`file-tree-page`},{title:`Transfer.tsx`,key:`file-transfer-page`}]},{title:`site`,key:`dir-site`,children:[{title:`SidebarPlaygroundDesign.tsx`,key:`file-sidebar`}]}]},{title:`packages`,key:`dir-packages`,children:[{title:`runtime`,key:`dir-runtime`},{title:`rue-design`,key:`dir-rue-design`}]},{title:`README.md`,key:`file-readme`}],Oe=[{title:`alpha.ts`,key:`range-alpha`},{title:`beta.ts`,key:`range-beta`},{title:`gamma.ts`,key:`range-gamma`},{title:`delta.ts`,key:`range-delta`},{title:`epsilon.ts`,key:`range-epsilon`}],ke=[{title:`src`,key:`drag-src`,kind:`folder`,children:[{title:`components`,key:`drag-components`,kind:`folder`,children:[{title:`Tree.tsx`,key:`drag-tree-file`,kind:`file`},{title:`Transfer.tsx`,key:`drag-transfer-file`,kind:`file`}]},{title:`main.ts`,key:`drag-main-file`,kind:`file`}]},{title:`docs`,key:`drag-docs`,kind:`folder`,children:[{title:`routing.md`,key:`drag-routing-file`,kind:`file`},{title:`installation.md`,key:`drag-install-file`,kind:`file`}]},{title:`package.json`,key:`drag-package-file`,kind:`file`}],Ae=Array.from({length:120},(e,t)=>({title:`Page ${String(t+1).padStart(3,`0`)}`,key:`virtual-${t}`})),je=Array.from({length:64},(e,t)=>({title:`Workspace ${String(t+1).padStart(2,`0`)}`,key:`async-virtual-root-${t}`,isLeaf:!1})),Me=`import { ref } from '@rue-js/rue'
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
</div>`,Ue=[{prop:`treeData`,description:`树数据源，支持嵌套 children 和字段映射。`,type:`TreeDataNode[]`,defaultValue:`[]`},{prop:`selectedKeys / defaultSelectedKeys`,description:`受控与非受控的当前选中项，multiple 打开后允许多选。`,type:`TreeKey[]`,defaultValue:`[]`},{prop:`checkedKeys / defaultCheckedKeys`,description:`勾选模式下的选中集合，strict 模式会回传 checked / halfChecked 结构。`,type:`TreeKey[] | { checked: TreeKey[]; halfChecked: TreeKey[] }`,defaultValue:`[]`},{prop:`expandedKeys / defaultExpandedKeys / defaultExpandAll`,description:`控制展开态，适合目录树、权限树和异步加载场景。`,type:`TreeKey[] / boolean`,defaultValue:`[] / false`},{prop:`checkable / checkStrictly`,description:`切换勾选与父子联动模式；strict 会关闭级联。`,type:`boolean`,defaultValue:`false`},{prop:`treeDataSimpleMode / fieldNames`,description:`直接接入 id / pId 扁平数据，同时可映射 title、key、children 字段。`,type:`boolean | TreeSimpleModeConfig / TreeFieldNames`,defaultValue:`- / -`},{prop:`allowSearch / searchValue / filterTreeNode`,description:`提供内置搜索输入和过滤逻辑，命中后会保留祖先链路。`,type:`boolean / string / boolean | ((inputValue, node) => boolean)`,defaultValue:`false / - / true`},{prop:`loadData`,description:`展开未加载分支时触发异步加载，适合远端目录与超大树。`,type:`(node: TreeNode) => Promise<any> | void`,defaultValue:`-`},{prop:`Tree.DirectoryTree / expandAction / toggleSelect / rangeSelect`,description:`目录树快捷 API；除了展开动作，还能细化 ctrl/meta 追加选择和 shift 区间选择是 append 还是 replace。`,type:`DirectoryTreeProps / false | "click" | "doubleClick" / boolean / false | "append" | "replace"`,defaultValue:`blockNode=true / showIcon=true / "click" / true / "append"`},{prop:`draggable / allowDrop / onDrop`,description:`开启拖拽排序并控制是否允许落点；allowDrop 和 onDrop 都会拿到 dropToGap，UI 会同步显示插前、插后或放入占位态。`,type:`TreeDraggable / (info) => boolean / (info) => void`,defaultValue:`false / - / -`},{prop:`height / itemHeight / virtual`,description:`为长列表开启虚拟滚动；height 定义视口高度，itemHeight 用于估算渲染窗口，也能和 loadData 组合接超长懒加载树。`,type:`number / number / boolean`,defaultValue:`- / 自动按尺寸估算 / true`},{prop:`showLine / showIcon / blockNode`,description:`控制树线、节点图标和整行可点的布局表现。`,type:`boolean`,defaultValue:`false`},{prop:`titleRender / switcherIcon / icon`,description:`按节点态自定义标题、展开图标和节点图标。`,type:`render function | any`,defaultValue:`-`}],We=e=>Array.isArray(e)?e:e.checked,Ge=(e,t)=>Array.isArray(e)?t?.halfCheckedKeys??[]:e.halfChecked,W=e=>`${typeof e}:${String(e)}`,G=e=>e.map(e=>({...e,children:Array.isArray(e.children)?G(e.children):e.children})),Ke=(e,t)=>{let n=W(t);for(let r=0;r<e.length;r+=1){let i=e[r];if(W(i.key)===n){let[t]=e.splice(r,1);return t??null}if(Array.isArray(i.children)){let e=Ke(i.children,t);if(e)return e}}return null},qe=(e,t,n,r)=>{let i=W(n);for(let a=0;a<e.length;a+=1){let o=e[a];if(W(o.key)===i){if(r===0){let e=Array.isArray(o.children)?[...o.children]:[];e.push(t),o.children=e}else e.splice(r<0?a:a+1,0,t);return!0}if(Array.isArray(o.children)&&qe(o.children,t,n,r))return!0}return!1},Je=(e,t)=>{let n=G(e),r=Ke(n,t.dragNode.key);return r&&(qe(n,r,t.node.key,t.dropPosition)||n.push(r)),n},K=(e,t,n)=>{let r=W(t);return e.map(e=>W(e.key)===r?n(e):Array.isArray(e.children)?{...e,children:K(e.children,t,n)}:e)},Ye=e=>e.reduce((e,t)=>!Array.isArray(t.children)||!t.children.length?e:e+1+Ye(t.children),0),Xe=n=>{let{isOpen:u,isFolder:d,toggle:g,addChild:_,changeType:y}=w(`useSetup:0:0`,()=>m(()=>{let e=w(`computed:1:0`,()=>v(()=>!!n.model.open)),t=w(`computed:1:1`,()=>v(()=>!!n.model.children&&n.model.children.length>0)),r=t=>{t?.stopPropagation(),n.model.open=!e.get()},i=e=>{e?.stopPropagation(),n.model.children||(n.model.children=[]),n.model.children.push({id:`${n.model.id}-new-${n.model.children.length}`,name:`new stuff`}),n.model.open=!0};return{isOpen:e,isFolder:t,toggle:r,addChild:i,changeType:e=>{e?.stopPropagation(),t.get()||(n.model.children=[],i(),n.model.open=!0)}}}));return f(m=>{let v=i(`li`,m);r(v,`list-none`);let w=i(`button`,v);o(v,w),l(w,`type`,`button`),S(()=>{r(w,String(`flex items-center gap-2 rounded-xl px-3 py-2 text-left text-sm transition `+(d.get()?`font-semibold text-base-content`:`text-base-content/80 hover:bg-base-200/70`)))}),a(w,`click`,e=>g(e)),a(w,`dblclick`,e=>y(e));let E=i(`span`,w);o(w,E),r(E,`inline-flex size-5 items-center justify-center rounded-md bg-base-200/80 text-[11px] text-base-content/55`);let D=C(E);o(E,D),S(()=>{s(D,d.get()?u.get()?`−`:`+`:`•`)});let O=i(`span`,w);o(w,O);let k=e(`rue:slot:anchor`);o(O,k),S(()=>{let e=n.model.name;p(()=>h(e,O,k))});let ee=e(`rue:slot:anchor`);return o(v,ee),S(()=>{let s=d.get()&&u.get()?f(()=>{let s=t(),u=i(`ul`,s);o(s,u),r(u,`mt-1 grid gap-1 pl-5`);let d=e(`rue:list:start`),f=e(`rue:list:end`);o(u,d),o(u,f);let p=new Map;S(()=>{p=T({items:n.model.children||[],getKey:(e,t)=>e.id,elements:p,parent:u,before:f,start:d,renderItem:(e,t,n,r,i)=>{x(b(Xe,{key:e.id,model:e}),t,n,r)}})});let m=i(`li`,u);o(u,m),r(m,`list-none`);let h=i(`button`,m);return o(m,h),l(h,`type`,`button`),r(h,`btn btn-ghost btn-xs rounded-full text-emerald-600`),a(h,`click`,e=>_(e)),o(h,c(`+ add child`)),s}):``;p(()=>h(s,v,ee))}),v})},Ze=()=>{let{basicSelectedKeys:n,directorySelectedKeys:a,directoryExpandAction:s,directoryToggleSelect:l,directoryRangeSelect:u,directoryRangeAppendSelectedKeys:d,directoryRangeReplaceSelectedKeys:g,directoryRangeTreeVersion:x,checkableSelectedKeys:C,checkedKeys:T,halfCheckedKeys:ee,disabledCheckedKeys:A,simpleSelectedKeys:j,asyncSelectedKeys:M,asyncExpandedKeys:N,dragTreeData:P,dragSummary:F,virtualSelectedKeys:I,asyncVirtualTreeData:L,asyncVirtualExpandedKeys:te,asyncVirtualSelectedKeys:R,asyncTreeData:ne,legacyTree:re,tabs:z,loadAsyncTree:ie,loadAsyncVirtualTree:ae,resetDirectoryRangeDemo:oe}=w(`useSetup:0:0:dup1`,()=>m(()=>{let e=w(`ref:1:2`,()=>y([`docs-api`])),t=w(`ref:1:3`,()=>y([`dir-app`])),n=w(`ref:1:4`,()=>y(`click`)),r=w(`ref:1:5`,()=>y(!0)),i=w(`computed:1:6`,()=>v(()=>r.value?`append`:!1)),a=w(`ref:1:7`,()=>y([])),o=w(`ref:1:8`,()=>y([])),s=w(`ref:1:9`,()=>y(0)),c=w(`ref:1:10`,()=>y([`release-control`])),l=w(`ref:1:11`,()=>y([`site-home`])),u=w(`ref:1:12`,()=>y([`release-control`,`release-site`])),d=w(`ref:1:13`,()=>y([`editable-assets`])),f=w(`ref:1:14`,()=>y([`workflow`])),p=w(`ref:1:15`,()=>y([])),m=w(`ref:1:16`,()=>y([])),h=w(`ref:1:17`,()=>y(G(ke))),g=w(`ref:1:18`,()=>y(`folder 支持放入；file 只允许插前和插后，悬停时会显示明确占位态。`)),b=w(`ref:1:19`,()=>y([`virtual-3`])),x=w(`ref:1:20`,()=>y(G(je))),S=w(`ref:1:21`,()=>y([])),C=w(`ref:1:22`,()=>y([])),T=w(`ref:1:23`,()=>y([{title:`发布总线`,key:`release-bus`,isLeaf:!1}]));return{basicSelectedKeys:e,directorySelectedKeys:t,directoryExpandAction:n,directoryToggleSelect:r,directoryRangeSelect:i,directoryRangeAppendSelectedKeys:a,directoryRangeReplaceSelectedKeys:o,directoryRangeTreeVersion:s,checkableSelectedKeys:c,checkedKeys:l,halfCheckedKeys:u,disabledCheckedKeys:d,simpleSelectedKeys:f,asyncSelectedKeys:p,asyncExpandedKeys:m,dragTreeData:h,dragSummary:g,virtualSelectedKeys:b,asyncVirtualTreeData:x,asyncVirtualExpandedKeys:S,asyncVirtualSelectedKeys:C,asyncTreeData:T,legacyTree:w(`reactive:1:24`,()=>_({id:`root`,name:`My Tree`,open:!0,children:[{id:`hello`,name:`hello`},{id:`world`,name:`world`},{id:`branch`,name:`child folder`,open:!0,children:[{id:`branch-1`,name:`design review`},{id:`branch-2`,name:`release note`}]}]})),tabs:{basic:w(`ref:1:25`,()=>y(`preview`)),directory:w(`ref:1:26`,()=>y(`preview`)),directoryRange:w(`ref:1:27`,()=>y(`preview`)),checkable:w(`ref:1:28`,()=>y(`preview`)),checkableDisabled:w(`ref:1:29`,()=>y(`preview`)),simple:w(`ref:1:30`,()=>y(`preview`)),async:w(`ref:1:31`,()=>y(`preview`)),drag:w(`ref:1:32`,()=>y(`preview`)),virtual:w(`ref:1:33`,()=>y(`preview`)),virtualAsync:w(`ref:1:34`,()=>y(`preview`)),legacy:w(`ref:1:35`,()=>y(`preview`))},loadAsyncTree:async e=>{e.key===`release-bus`&&(T.value=[{title:`发布总线`,key:`release-bus`,isLeaf:!1,children:[{title:`桌面端`,key:`desktop`,children:[{title:`Windows`,key:`desktop-win`},{title:`macOS`,key:`desktop-mac`}]},{title:`移动端`,key:`mobile`,children:[{title:`iOS`,key:`mobile-ios`},{title:`Android`,key:`mobile-android`}]}]}])},loadAsyncVirtualTree:async e=>{e.children.length||(x.value=K(x.value,e.key,e=>({...e,children:Array.from({length:8},(t,n)=>({title:`${String(e.title)} / Module ${n+1}`,key:`${String(e.key)}-child-${n}`,isLeaf:n%3!=0}))})))},resetDirectoryRangeDemo:()=>{a.value=[],o.value=[],s.value+=1}}}));return f(m=>{let _=t(),v=e(`rue:component:anchor`);return o(_,v),h(b(O,{children:f(()=>{let f=t(),m=i(`div`,f);o(f,m),r(m,`max-w-none prose prose-sm md:prose-base`);let _=i(`h1`,m);o(m,_),o(_,c(`Tree 树控件`));let v=i(`p`,m);o(m,v),o(v,c(`Rue 的 Tree 补上了独立树组件这块空白：保留 TreeView 示例里递归数据直改的灵活性，同时把 antd Tree 常用的展开、选中、勾选、简单模式、异步加载和自定义标题一次补齐。 视觉上继续沿用 Rue 现有的卡片、badge 和 base 色阶体系，不照搬 antd 的外观。`));let y=i(`div`,m);o(m,y),r(y,`not-prose mt-6 grid gap-3 md:grid-cols-3`);let w=i(`div`,y);o(y,w),r(w,`rounded-[1.4rem] border border-base-300 bg-gradient-to-br from-base-100 to-base-200/40 p-4 shadow-sm`);let O=i(`div`,w);o(w,O),r(O,`text-xs uppercase tracking-[0.2em] text-base-content/45`),o(O,c(`Node Model`));let se=i(`div`,w);o(w,se),r(se,`mt-2 text-base font-semibold`),o(se,c(`选择、勾选、展开三条状态线`));let ce=i(`p`,w);o(w,ce),r(ce,`mt-2 mb-0 text-sm text-base-content/68`),o(ce,c(`目录树、权限树、发布树都能直接套进来。`));let B=i(`div`,y);o(y,B),r(B,`rounded-[1.4rem] border border-base-300 bg-gradient-to-br from-base-100 to-base-200/40 p-4 shadow-sm`);let le=i(`div`,B);o(B,le),r(le,`text-xs uppercase tracking-[0.2em] text-base-content/45`),o(le,c(`DirectoryTree`));let ue=i(`div`,B);o(B,ue),r(ue,`mt-2 text-base font-semibold`),o(ue,c(`目录树快捷 API`));let de=i(`p`,B);o(B,de),r(de,`mt-2 mb-0 text-sm text-base-content/68`),o(de,c(`支持 click / doubleClick 展开，以及更接近文件浏览器的多选交互。`));let V=i(`div`,y);o(y,V),r(V,`rounded-[1.4rem] border border-base-300 bg-gradient-to-br from-base-100 to-base-200/40 p-4 shadow-sm`);let fe=i(`div`,V);o(V,fe),r(fe,`text-xs uppercase tracking-[0.2em] text-base-content/45`),o(fe,c(`Heavy Interaction`));let pe=i(`div`,V);o(V,pe),r(pe,`mt-2 text-base font-semibold`),o(pe,c(`拖拽排序与虚拟滚动`));let me=i(`p`,V);o(V,me),r(me,`mt-2 mb-0 text-sm text-base-content/68`),o(me,c(`长列表和拖拽改序终于能落在同一个 Tree 上了。`));let he=e(`rue:component:anchor`);o(m,he),S(()=>{let e=b(k,{title:`基础选中与整行交互`,summary:`默认 Tree 就是一个纯浏览 + 选中容器；blockNode 和 showIcon 让它更像配置面板里的主导航。`,tab:z.basic,code:Me,preview:E(`div`,{className:`space-y-4 not-prose`,children:[D(U,{treeData:Ce,selectedKeys:n.value,defaultExpandAll:!0,showIcon:!0,blockNode:!0,onSelect:e=>{n.value=e}}),E(`div`,{className:`grid gap-3 md:grid-cols-3`,children:[E(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[D(`div`,{className:`text-xs text-base-content/45`,children:`当前选中`}),D(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:n.value.length?n.value.map(e=>D(`span`,{className:`badge badge-outline badge-sm`,children:String(e)},String(e))):D(`span`,{className:`text-sm text-base-content/55`,children:`未选择`})})]}),E(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[D(`div`,{className:`text-xs text-base-content/45`,children:`推荐场景`}),D(`div`,{className:`mt-2 text-sm text-base-content/75`,children:`组件目录、文档导航、资源分类`})]}),E(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[D(`div`,{className:`text-xs text-base-content/45`,children:`状态模型`}),D(`div`,{className:`mt-2 text-sm text-base-content/75`,children:`selectedKeys / expandedKeys 分离，便于受控更新。`})]})]})]})});p(()=>h(e,m,he))});let ge=e(`rue:component:anchor`);o(m,ge),S(()=>{let e=b(k,{title:`DirectoryTree 目录树快捷 API`,summary:`Tree.DirectoryTree 默认补上目录图标、整行可点和 click 展开；这里先只看 expandAction 和 toggleSelect 这两个基础交互开关。`,tab:z.directory,code:Le,preview:E(`div`,{className:`grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`,children:[D(U.DirectoryTree,{treeData:De,selectedKeys:a.value,multiple:!0,expandAction:s.value,toggleSelect:l.value,rangeSelect:u.get(),onSelect:e=>{a.value=e}}),E(`div`,{className:`space-y-3`,children:[E(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[D(`div`,{className:`text-xs text-base-content/45`,children:`快捷属性`}),E(`div`,{className:`mt-3 flex flex-wrap gap-2`,children:[D(`button`,{type:`button`,className:s.value===`click`?`btn btn-primary btn-xs`:`btn btn-ghost btn-xs`,onClick:()=>{s.value=`click`},children:`click 展开`}),D(`button`,{type:`button`,className:s.value===`doubleClick`?`btn btn-primary btn-xs`:`btn btn-ghost btn-xs`,onClick:()=>{s.value=`doubleClick`},children:`doubleClick 展开`}),D(`button`,{type:`button`,className:s.value===!1?`btn btn-primary btn-xs`:`btn btn-ghost btn-xs`,onClick:()=>{s.value=!1},children:`只选中不展开`})]}),E(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:[D(`button`,{type:`button`,className:l.value?`btn btn-primary btn-xs`:`btn btn-ghost btn-xs`,onClick:()=>{l.value=!0},children:`ctrl/meta 追加`}),D(`button`,{type:`button`,className:l.value?`btn btn-ghost btn-xs`:`btn btn-primary btn-xs`,onClick:()=>{l.value=!1},children:`关闭追加选择`})]})]}),E(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[D(`div`,{className:`text-xs text-base-content/45`,children:`当前选择`}),D(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:a.value.map(e=>D(`span`,{className:`badge badge-outline badge-sm`,children:String(e)},String(e)))})]}),E(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`,children:[`当前组合是 expandAction=`,D(`strong`,{children:String(s.value)}),`、toggleSelect=`,D(`strong`,{children:String(l.value)}),`、rangeSelect=`,D(`strong`,{children:String(u.get())}),`。`,D(`div`,{className:`mt-3`,children:`普通点击会落成单选；打开追加后，meta / ctrl 会追加或移除选中，shift 也会启用区间选择。关闭追加时，这两类补充选择都会停用；append / replace 的差异放到下面的对照示例里单独演示。`})]})]})]})});p(()=>h(e,m,ge))});let _e=e(`rue:component:anchor`);o(m,_e),S(()=>{let e=b(k,{title:`shift append vs shift replace`,summary:`这两个模式只有在“先做一次非连续多选，再用 shift 选区间”时才会分出差异；左边保留旧选择，右边只保留新区间。`,tab:z.directoryRange,code:Re,preview:E(`div`,{className:`space-y-4 not-prose`,children:[E(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`,children:[D(`div`,{children:`操作顺序：先单击 beta.ts，再按住 Cmd / Ctrl 单击 epsilon.ts，最后按住 Shift 单击 delta.ts。`}),D(`div`,{className:`mt-2`,children:`append 会保留 beta.ts；replace 只保留 delta.ts 到 epsilon.ts 这一段。`}),D(`button`,{type:`button`,className:`btn btn-ghost btn-xs mt-3`,onClick:oe,children:`重置两边示例`})]}),E(`div`,{className:`grid gap-4 xl:grid-cols-2`,children:[E(`div`,{className:`space-y-3 rounded-[1.4rem] border border-base-300 bg-base-100 p-4 shadow-sm`,children:[E(`div`,{className:`flex items-center justify-between gap-3`,children:[E(`div`,{children:[D(`div`,{className:`text-sm font-semibold`,children:`rangeSelect="append"`}),D(`div`,{className:`text-xs text-base-content/55`,children:`保留原先的非连续选择，再并入新的 shift 区间。`})]}),D(`span`,{className:`badge badge-outline badge-sm`,children:`append`})]}),D(U.DirectoryTree,{treeData:Oe,selectedKeys:d.value,multiple:!0,toggleSelect:!0,rangeSelect:`append`,onSelect:e=>{d.value=e}},`append-${x.value}`),E(`div`,{className:`rounded-box border border-base-300 bg-base-100 px-4 py-3 text-sm text-base-content/70`,children:[D(`div`,{className:`text-xs text-base-content/45`,children:`当前选择`}),D(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:d.value.length?d.value.map(e=>D(`span`,{className:`badge badge-outline badge-sm`,children:String(e)},String(e))):D(`span`,{className:`text-sm text-base-content/55`,children:`还没有选择`})})]})]}),E(`div`,{className:`space-y-3 rounded-[1.4rem] border border-base-300 bg-base-100 p-4 shadow-sm`,children:[E(`div`,{className:`flex items-center justify-between gap-3`,children:[E(`div`,{children:[D(`div`,{className:`text-sm font-semibold`,children:`rangeSelect="replace"`}),D(`div`,{className:`text-xs text-base-content/55`,children:`只保留新的 shift 区间，旧的非连续选择会被替换掉。`})]}),D(`span`,{className:`badge badge-primary badge-outline badge-sm`,children:`replace`})]}),D(U.DirectoryTree,{treeData:Oe,selectedKeys:g.value,multiple:!0,toggleSelect:!0,rangeSelect:`replace`,onSelect:e=>{g.value=e}},`replace-${x.value}`),E(`div`,{className:`rounded-box border border-base-300 bg-base-100 px-4 py-3 text-sm text-base-content/70`,children:[D(`div`,{className:`text-xs text-base-content/45`,children:`当前选择`}),D(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:g.value.length?g.value.map(e=>D(`span`,{className:`badge badge-outline badge-sm`,children:String(e)},String(e))):D(`span`,{className:`text-sm text-base-content/55`,children:`还没有选择`})})]})]})]})]})});p(()=>h(e,m,_e))});let ve=e(`rue:component:anchor`);o(m,ve),S(()=>{let e=b(k,{title:`父子联动与半选态`,summary:`这一块只看级联勾选和 halfChecked，不再混入 disabled / disableCheckbox，点击父节点时能直接看到整棵子树联动。`,tab:z.checkable,code:Ne,preview:E(`div`,{className:`space-y-4 not-prose`,children:[D(U,{treeData:we,selectedKeys:C.value,checkedKeys:T.value,checkable:!0,defaultExpandAll:!0,showLine:!0,blockNode:!0,onSelect:e=>{C.value=e},onCheck:(e,t)=>{T.value=We(e),ee.value=Ge(e,t)}}),E(`div`,{className:`grid gap-3 md:grid-cols-3`,children:[E(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[D(`div`,{className:`text-xs text-base-content/45`,children:`selectedKeys`}),D(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:C.value.length?C.value.map(e=>D(`span`,{className:`badge badge-outline badge-sm`,children:String(e)},String(e))):D(`span`,{className:`text-sm text-base-content/55`,children:`当前没有选中节点`})})]}),E(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[D(`div`,{className:`text-xs text-base-content/45`,children:`checkedKeys`}),D(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:T.value.map(e=>D(`span`,{className:`badge badge-primary badge-outline badge-sm`,children:String(e)},String(e)))})]}),E(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[D(`div`,{className:`text-xs text-base-content/45`,children:`halfCheckedKeys`}),D(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:ee.value.length?ee.value.map(e=>D(`span`,{className:`badge badge-ghost badge-sm`,children:String(e)},String(e))):D(`span`,{className:`text-sm text-base-content/55`,children:`当前没有半选`})})]})]})]})});p(()=>h(e,m,ve))});let ye=e(`rue:component:anchor`);o(m,ye),S(()=>{let e=b(k,{title:`禁用节点与禁用复选框`,summary:`把 disabled 和 disableCheckbox 单独拆出来看：前者整节点只读，后者只禁用勾选框，不再干扰联动示例。`,tab:z.checkableDisabled,code:Pe,preview:E(`div`,{className:`grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`,children:[D(U,{treeData:Te,checkedKeys:A.value,checkable:!0,defaultExpandAll:!0,showLine:!0,blockNode:!0,onCheck:e=>{A.value=We(e)}}),E(`div`,{className:`space-y-3`,children:[E(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[D(`div`,{className:`text-xs text-base-content/45`,children:`当前勾选`}),D(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:A.value.length?A.value.map(e=>D(`span`,{className:`badge badge-outline badge-sm`,children:String(e)},String(e))):D(`span`,{className:`text-sm text-base-content/55`,children:`当前没有勾选`})})]}),E(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm text-sm text-base-content/75`,children:[D(`div`,{className:`font-medium text-base-content`,children:`disabled`}),D(`div`,{className:`mt-2`,children:`整节点不可展开、不可选中、不可勾选，适合只读目录或冻结配置。`})]}),E(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm text-sm text-base-content/75`,children:[D(`div`,{className:`font-medium text-base-content`,children:`disableCheckbox`}),D(`div`,{className:`mt-2`,children:`节点仍能展示和展开，但复选框不会参与交互，适合“只可浏览不可授权”的条目。`})]})]})]})});p(()=>h(e,m,ye))});let be=e(`rue:component:anchor`);o(m,be),S(()=>{let e=b(k,{title:`Simple Mode + Search`,summary:`扁平数据直入后，内置搜索会保留命中节点的祖先链，不会把层级上下文切断。`,tab:z.simple,code:Fe,preview:E(`div`,{className:`grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`,children:[D(U,{treeData:Ee,treeDataSimpleMode:{id:`nodeId`,pId:`parentId`,rootPId:0},fieldNames:{title:`name`,key:`code`},selectedKeys:j.value,allowSearch:!0,defaultExpandAll:!0,onSelect:e=>{j.value=e}}),E(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`,children:[`当前选中：`,D(`code`,{children:JSON.stringify(j.value)}),D(`div`,{className:`mt-3`,children:`这类 simple mode 很适合后端直接给 id / pId 的菜单、流程节点和权限项，不需要再先做一遍树转换。`})]})]})});p(()=>h(e,m,be))});let xe=e(`rue:component:anchor`);o(m,xe),S(()=>{let e=b(k,{title:`Async Load 与自定义标题`,summary:`第一次展开时再拉子节点，同时用 titleRender 和 icon 把状态信息塞回每一行。`,tab:z.async,code:Ie,preview:E(`div`,{className:`grid gap-4 not-prose lg:grid-cols-[minmax(0,26rem),1fr] lg:items-start`,children:[D(U,{treeData:ne.value,selectedKeys:M.value,expandedKeys:N.value,loadData:ie,showLine:!0,showIcon:!0,blockNode:!0,titleRender:({node:e,loading:t})=>E(`div`,{className:`flex min-w-0 items-center justify-between gap-3`,children:[D(`span`,{className:`truncate`,children:e.title}),D(`span`,{className:`badge badge-ghost badge-xs`,children:t?`loading`:e.children.length?`branch`:`leaf`})]}),onSelect:e=>{M.value=e},onExpand:e=>{N.value=e}}),E(`div`,{className:`space-y-3`,children:[E(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[D(`div`,{className:`text-xs text-base-content/45`,children:`expandedKeys`}),D(`div`,{className:`mt-2 text-sm text-base-content/75`,children:JSON.stringify(N.value)})]}),E(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[D(`div`,{className:`text-xs text-base-content/45`,children:`selectedKeys`}),D(`div`,{className:`mt-2 text-sm text-base-content/75`,children:JSON.stringify(M.value)})]}),D(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`,children:`展开 release-bus 后才会注入桌面端和移动端节点，适合远端目录、超大权限树和发布范围配置。`})]})]})});p(()=>h(e,m,xe))});let H=i(`div`,m);o(m,H),r(H,`not-prose mt-10 space-y-2`);let ke=i(`h2`,H);o(H,ke),r(ke,`text-2xl font-semibold`),o(ke,c(`更重交互`));let je=i(`p`,H);o(H,je),r(je,`text-sm text-base-content/70`),o(je,c(`当 Tree 既要承载拖拽整理，又要承载超长数据时，draggable 和 virtual 就是两个最关键的控制面。`));let W=e(`rue:component:anchor`);o(m,W),S(()=>{let e=b(k,{title:`allowDrop 策略与拖拽占位`,summary:`allowDrop 可以把 folder / file 的落点规则写清楚；hover 时 Tree 会直接给出插前、插后或放入占位提示。`,tab:z.drag,code:ze,preview:E(`div`,{className:`grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`,children:[D(U,{treeData:P.value,draggable:!0,blockNode:!0,defaultExpandAll:!0,allowDrop:({dropNode:e,dropToGap:t})=>t||e.raw.kind!==`file`,titleRender:({node:e})=>E(`div`,{className:`flex min-w-0 items-center justify-between gap-3`,children:[D(`span`,{className:`truncate`,children:e.title}),D(`span`,{className:e.raw.kind===`folder`?`badge badge-ghost badge-xs`:`badge badge-outline badge-xs`,children:e.raw.kind})]}),onDrop:e=>{P.value=Je(P.value,e),F.value=`${String(e.dragNode.key)} -> ${String(e.node.key)} (${e.dropToGap?e.dropPosition<0?`before`:`after`:`inside`})`}}),E(`div`,{className:`space-y-3`,children:[E(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[D(`div`,{className:`text-xs text-base-content/45`,children:`最近一次拖拽`}),D(`div`,{className:`mt-2 text-sm text-base-content/75`,children:F.value})]}),E(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[D(`div`,{className:`text-xs text-base-content/45`,children:`allowDrop 规则`}),E(`div`,{className:`mt-2 grid gap-2 text-sm text-base-content/75`,children:[D(`div`,{children:`folder：允许放入，也允许插前 / 插后。`}),D(`div`,{children:`file：只允许插前 / 插后，不允许作为 inside 目标。`})]})]}),D(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`,children:`拖到 folder 正中央会看到“放入”，拖到行的上沿或下沿则会出现“插前 / 插后”；如果目标是 file，inside 落点会被 allowDrop 直接拦掉。`})]})]})});p(()=>h(e,m,W))});let G=e(`rue:component:anchor`);o(m,G),S(()=>{let e=b(k,{title:`Virtual Scroll`,summary:`长列表下只渲染可见窗口，height 和 itemHeight 负责限定视口和估算切片范围。`,tab:z.virtual,code:Be,preview:E(`div`,{className:`grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`,children:[D(U,{treeData:Ae,selectedKeys:I.value,height:320,itemHeight:42,virtual:!0,blockNode:!0,onSelect:e=>{I.value=e}}),E(`div`,{className:`space-y-3`,children:[E(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[D(`div`,{className:`text-xs text-base-content/45`,children:`数据量`}),D(`div`,{className:`mt-2 text-2xl font-semibold`,children:Ae.length})]}),E(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[D(`div`,{className:`text-xs text-base-content/45`,children:`当前选中`}),D(`div`,{className:`mt-2 text-sm text-base-content/75`,children:JSON.stringify(I.value)})]}),D(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`,children:`对文档页目录、埋点树、批量资源目录这种长列表场景，虚拟滚动能显著降低初始渲染压力。`})]})]})});p(()=>h(e,m,G))});let Ke=e(`rue:component:anchor`);o(m,Ke),S(()=>{let e=b(k,{title:`Virtual + Async Load 场景页`,summary:`把 virtual、height、itemHeight 和 loadData 合在一起，就能接超长目录或资源树，只在展开分支时再注入子节点。`,tab:z.virtualAsync,code:Ve,preview:E(`div`,{className:`grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`,children:[D(U,{treeData:L.value,selectedKeys:R.value,expandedKeys:te.value,height:340,itemHeight:40,virtual:!0,showIcon:!0,blockNode:!0,loadData:ae,titleRender:({node:e,loading:t})=>E(`div`,{className:`flex min-w-0 items-center justify-between gap-3`,children:[D(`span`,{className:`truncate`,children:e.title}),D(`span`,{className:`badge badge-ghost badge-xs`,children:t?`loading`:e.children.length?`loaded`:e.isLeaf?`leaf`:`lazy`})]}),onSelect:e=>{R.value=e},onExpand:e=>{te.value=e}}),E(`div`,{className:`space-y-3`,children:[E(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[D(`div`,{className:`text-xs text-base-content/45`,children:`根节点数量`}),D(`div`,{className:`mt-2 text-2xl font-semibold`,children:L.value.length})]}),E(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[D(`div`,{className:`text-xs text-base-content/45`,children:`已加载分支`}),D(`div`,{className:`mt-2 text-2xl font-semibold`,children:Ye(L.value)})]}),E(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[D(`div`,{className:`text-xs text-base-content/45`,children:`当前展开`}),D(`div`,{className:`mt-2 text-sm text-base-content/75`,children:JSON.stringify(te.value)})]}),D(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`,children:`先滚动到较深位置再展开节点也没问题：视口外的行不会真正渲染，只有命中的 branch 才会触发 loadData 注入子节点。`})]})]})});p(()=>h(e,m,Ke))});let qe=e(`rue:component:anchor`);o(m,qe),S(()=>{let e=b(k,{title:`保留原始递归 Demo`,summary:`旧的 TreeView 行为没有删掉，只是并进 design 页面里，方便对比“直接改数据”这类递归写法。`,tab:z.legacy,code:He,preview:D(`div`,{className:`card border border-base-200/80 bg-base-100 shadow-sm not-prose`,children:E(`div`,{className:`card-body grid gap-4 lg:grid-cols-[minmax(0,1fr),18rem] lg:items-start`,children:[D(`ul`,{className:`m-0 grid gap-1 p-0`,children:D(Xe,{model:re})}),D(`div`,{className:`rounded-box border border-base-300 bg-base-200/40 p-4 text-sm text-base-content/70`,children:`单击切换展开，双击叶子节点会把它转换成 folder，并在当前层直接追加一个新子节点。`})]})})});p(()=>h(e,m,qe))});let K=i(`div`,m);o(m,K),r(K,`not-prose mt-10 space-y-4`);let Ze=i(`h2`,K);o(K,Ze),r(Ze,`text-2xl font-semibold`),o(Ze,c(`API`));let Qe=e(`rue:component:anchor`);return o(K,Qe),S(()=>{let e=b(Se,{rows:Ue});p(()=>h(e,K,Qe))}),f})}),_,v),_})};export{Ze as default};