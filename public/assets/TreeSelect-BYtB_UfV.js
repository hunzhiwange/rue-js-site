import{Q as e,Vt as t,Xt as n,Z as r,at as i,bt as a,dt as o,ht as s,i as c,it as l,l as u,n as d,nt as f,o as p,on as m,pt as h,r as g,rt as _,s as v,t as y,tn as b,tt as x,vt as S,wt as C,xt as ee,yt as te}from"./vapor-runtime-x7F5M-49.js";import{a as w,n as T,t as E}from"./vapor-helpers-vapor-D1LP4JjK.js";import{a as D,o as O}from"./persistentSidebarPlayground-Cl_JMYk5.js";import{r as k}from"./SidebarPlaygroundDesign-Bmw9WJ3p.js";import{t as A}from"./PreviewBlock-CLB4jOfl.js";var j=`SHOW_ALL`,ne=`SHOW_PARENT`,M=`SHOW_CHILD`,re={xs:`input-xs`,sm:`input-sm`,md:``,lg:`input-lg`,xl:`input-xl`,small:`input-sm`,medium:``,middle:``,large:`input-lg`},N=0,P={label:`title`,value:`value`,children:`children`,key:`key`,disabled:`disabled`,selectable:`selectable`,checkable:`checkable`,disableCheckbox:`disableCheckbox`,isLeaf:`isLeaf`,className:`className`,icon:`icon`,id:`id`,pId:`pId`},F=(...e)=>e.filter(Boolean).join(` `),I=e=>typeof e==`object`&&!!e&&!Array.isArray(e),L=e=>typeof e==`string`||typeof e==`number`,ie=e=>e==null?[]:Array.isArray(e)?e:[e],ae=e=>`${typeof e}:${String(e)}`,oe=e=>{if(L(e))return e;if(I(e)&&L(e.value))return e.value},R=e=>ie(e).flatMap(e=>{let t=oe(e);return t===void 0?[]:[t]}),z=(e,t,n)=>e[n?.[t]??P[t]],se=(e,t)=>z(e,`label`,t)??e.title??e.label??z(e,`value`,t)??z(e,`key`,t),ce=e=>typeof e==`string`||typeof e==`number`?String(e):``,le=(e,t,n)=>{if(!t)return e;let r=I(t)?t:void 0,i=r?.id??n?.id??P.id,a=r?.pId??n?.pId??P.pId,o=r?.rootPId??0,s=n?.children??P.children,c=new Map;e.forEach((e,t)=>{let n=e[i]??e.value??e.key??t;c.set(n,{...e,[s]:[]})});let l=[];return e.forEach((e,t)=>{let n=e[i]??e.value??e.key??t,r=e[a],u=c.get(n);if(!u)return;if(r==null||r===o||!c.has(r)){l.push(u);return}let d=c.get(r);if(!d){l.push(u);return}let f=d[s]??[];f.push(u),d[s]=f}),l},ue=(e,t)=>{let n=[],r={},i=(e,a,o,s)=>{let c=z(e,`children`,t),l=z(e,`value`,t),u=z(e,`key`,t),d=z(e,`isLeaf`,t),f=L(l)?l:L(u)?u:o,p=se(e,t),m=ae(f),h=Array.isArray(c)?c.map((e,t)=>i(e,a+1,`${o}-${t}`,m)):[],g={key:String(u??f),value:f,valueKey:m,label:p,labelText:ce(p),depth:a,parentValueKey:s,children:h,raw:e,disabled:!!z(e,`disabled`,t),selectable:z(e,`selectable`,t)!==!1,checkable:z(e,`checkable`,t)!==!1,disableCheckbox:!!z(e,`disableCheckbox`,t),isLeaf:d===!0?!0:d===!1?!1:h.length===0,className:z(e,`className`,t),icon:z(e,`icon`,t)};return n.push(g),r[m]=g,g};return{roots:e.map((e,t)=>i(e,0,`node-${t}`)),flat:n,byValueKey:r}},de=e=>{let t=[],n=e=>{!e.disabled&&e.checkable&&!e.disableCheckbox&&t.push(e.valueKey),e.children.forEach(e=>n(e))};return n(e),t},fe=e=>{let t=[];return e.children.forEach(e=>{de(e).forEach(e=>t.push(e))}),t},pe=(e,t,n)=>{let r=new Set;return e.forEach(e=>{let i=t[e];if(!i)return;if(n){r.add(e);return}let a=fe(i);if(a.length>0){a.forEach(e=>r.add(e));return}!i.disabled&&i.checkable&&!i.disableCheckbox&&r.add(e)}),r},me=(e,t,n)=>{let r=new Set,i=new Set,a={},o=e=>{let s=!e.disabled&&e.checkable&&!e.disableCheckbox,c=e.children.map(e=>o(e)).filter(e=>e.participates),l=t.has(e.valueKey),u=l,d=!1;if(!n&&c.length>0){let e=c.every(e=>e.checked),t=c.some(e=>e.checked||e.halfChecked);u=l||e,d=!u&&t}let f=s||c.length>0,p={checked:u,halfChecked:d,participates:f};return a[e.valueKey]=p,u&&s&&r.add(e.valueKey),d&&s&&i.add(e.valueKey),p};return e.forEach(e=>o(e)),{checkedKeys:r,halfCheckedKeys:i,stateMap:a}},he=(e,t,n)=>{let r=[],i=(e,a)=>{let o=t[e.valueKey];if(!o)return;let s=e.children.map(e=>t[e.valueKey]).filter(Boolean).some(e=>e.checked||e.halfChecked),c=!e.disabled&&e.checkable&&!e.disableCheckbox&&o.checked;if(n===`SHOW_ALL`){c&&r.push(e),e.children.forEach(e=>i(e,a));return}if(n===`SHOW_PARENT`){if(c&&s&&!a){r.push(e);return}if(c&&!s&&!a){r.push(e);return}e.children.forEach(e=>i(e,a||c));return}if(c&&!s){r.push(e);return}if(c&&e.children.length===0){r.push(e);return}e.children.forEach(e=>i(e,a))};return e.forEach(e=>i(e,!1)),r},B=(e,t)=>t&&e.raw[t]!==void 0?e.raw[t]:e.label,ge=(e,t,n)=>({value:e.value,key:e.value,label:B(e,n),halfChecked:t,disabled:e.disabled}),_e=(e,t,n,r,i)=>{let a=n?e.map(e=>ge(e,r.has(e.valueKey),i)):e.map(e=>e.value);return t?a:a[0]??null},ve=(e,t,n)=>{let r=e.map(e=>B(e,n));return t?r:r[0]??null},ye=(e,t,n)=>String(t===`title`||t===`label`?B(e,n)??``:t===`value`?e.value:e.raw[t]??``),be=(e,t)=>[String(e.value??``),String(B(e,t)??``)],xe=(e,t,n,r)=>{if(!n){let n=[],r=e=>{n.push({node:e,matched:!1}),t.has(e.valueKey)&&e.children.forEach(e=>r(e))};return e.forEach(e=>r(e)),n}let i=[],a=(e,t)=>{i.push({node:e,matched:t}),e.children.forEach(e=>a(e,!1))},o=e=>{let t=r(e),n=e.children.flatMap(e=>o(e));if(!t&&n.length===0)return[];if(t){let t=[{node:e,matched:!0}];return e.children.forEach(e=>{let n=[],r=(e,t)=>{n.push({node:e,matched:t}),e.children.forEach(e=>r(e,!1))};r(e,!1),t.push(...n)}),t}return[{node:e,matched:!1},...n]};return e.forEach(e=>{i.push(...o(e))}),i},Se=(e,t)=>{let n=e?.[t];if(typeof n==`string`)return n;if(I(n)&&typeof n.root==`string`)return n.root},Ce=(e,t)=>{let n=e?.[t];if(I(n)&&!(`root`in n))return n;if(I(n?.root))return n.root},we=(e,t)=>{let n=typeof e==`string`||typeof e==`number`?String(e):e;return typeof n!=`string`||!t||n.length<=t?n:`${n.slice(0,t)}...`},Te=e=>typeof e==`string`||typeof e==`number`?String(e):e==null||e===!1?``:String(e),Ee=n=>u(r=>{let i=_(`span`,r);o(i,`aria-hidden`,`true`),t(()=>{h(i,F(`inline-flex h-4 w-4 items-center justify-center text-base-content/55 transition-transform duration-150`,n.expanded&&`rotate-90`,n.hidden&&`opacity-0`))});let a=_(`svg`,i);e(i,a),o(a,`viewBox`,`0 0 20 20`),o(a,`fill`,`none`),h(a,`h-4 w-4`);let s=_(`path`,a);return e(a,s),o(s,`d`,`M7.5 5.5L12.5 10L7.5 14.5`),o(s,`stroke`,`currentColor`),o(s,`stroke-width`,`1.8`),o(s,`stroke-linecap`,`round`),o(s,`stroke-linejoin`,`round`),i}),De=()=>u(e=>{let t=_(`span`,e);return h(t,`loading loading-spinner loading-xs text-base-content/55`),o(t,`aria-hidden`,`true`),t}),Oe=()=>u(t=>{let n=_(`svg`,t);o(n,`viewBox`,`0 0 20 20`),o(n,`fill`,`none`),h(n,`block h-4 w-4`);let r=_(`path`,n);return e(n,r),o(r,`d`,`M6 6L14 14M14 6L6 14`),o(r,`stroke`,`currentColor`),o(r,`stroke-width`,`1.8`),o(r,`stroke-linecap`,`round`),n}),ke=t=>t.icon!==void 0&&t.icon!==null?t.icon:u(t=>{let n=f(),r=x(`rue:component:anchor`);return e(n,r),p(y(Oe,{}),n,r),n}),Ae=n=>{let{handleClose:i}=w(`useSetup:0:0`,()=>m(()=>({handleClose:e=>{n.onRemove(n.node,e)}})));return n.tagRender?n.tagRender({label:n.label,value:n.node.value,disabled:n.node.disabled,closable:!n.disabled,node:n.node,onClose:i}):u(a=>{let s=_(`span`,a);t(()=>{o(s,`data-rue-tree-select-tag-value`,String(n.node.valueKey))}),t(()=>{h(s,F(`badge badge-outline inline-flex max-w-full items-center gap-1 rounded-md px-2 py-1 text-xs font-medium leading-none`,n.tagClassName))}),t(()=>{let e=n.tagStyle;S(s,e)});let c=_(`span`,s);e(s,c),h(c,`truncate`);let d=x(`rue:slot:anchor`);e(c,d),t(()=>{let e=n.label;b(()=>p(e,c,d))});let m=x(`rue:slot:anchor`);return e(s,m),t(()=>{let a=n.disabled?``:u(()=>{let a=f(),s=_(`button`,a);return e(a,s),o(s,`type`,`button`),h(s,`btn btn-ghost btn-xs inline-flex h-4 min-h-0 w-4 shrink-0 items-center justify-center rounded-full p-0 text-center leading-none`),t(()=>{o(s,`aria-label`,String(`移除 ${Te(n.rawLabel??n.node.value)}`))}),r(s,`click`,i),e(s,l(`×`)),a});b(()=>p(a,s,m))}),s})},je=n=>n.loadingNode?u(t=>{let n=f(),r=x(`rue:component:anchor`);return e(n,r),p(y(De,{}),n,r),n}):typeof n.switcherIcon==`function`?n.switcherIcon({expanded:n.expanded,loading:n.loadingNode,selected:n.selected,checked:n.state.checked,halfChecked:n.halfChecked,node:n.node}):n.switcherIcon===void 0?u(r=>{let i=f(),a=x(`rue:component:anchor`);return e(i,a),t(()=>{let e=y(Ee,{expanded:n.expanded,hidden:!n.canExpand});b(()=>p(e,i,a))}),i}):n.switcherIcon,Me=n=>u(c=>{let l=_(`div`,c);t(()=>{o(l,`data-rue-tree-select-node`,String(n.node.valueKey))}),t(()=>{h(l,F(`group flex items-center gap-1 rounded-lg py-1.5 pr-2`,n.matched&&`bg-primary/8`,n.treeLine&&n.node.depth>0&&`border-l border-base-300/60`,n.node.className))}),t(()=>{S(l,{paddingLeft:`${n.node.depth*16+4}px`})});let d=_(`button`,l);e(l,d),o(d,`type`,`button`),h(d,`inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md hover:bg-base-200 disabled:cursor-not-allowed`),t(()=>{s(d,!n.canExpand||n.mergedDisabled||n.node.disabled)}),t(()=>{o(d,`aria-label`,String(n.expanded?`折叠节点`:`展开节点`))}),r(d,`click`,e=>{n.onExpand(n.node,e)});let m=x(`rue:component:anchor`);e(d,m),t(()=>{let e=y(je,{node:n.node,state:n.state,selected:n.selected,halfChecked:n.halfChecked,expanded:n.expanded,loadingNode:n.loadingNode,canExpand:n.canExpand,switcherIcon:n.switcherIcon});b(()=>p(e,d,m))});let g=x(`rue:slot:anchor`);e(l,g),t(()=>{let c=n.treeCheckable?u(()=>{let c=f(),l=_(`button`,c);e(c,l),o(l,`type`,`button`),o(l,`role`,`checkbox`),t(()=>{o(l,`aria-checked`,String(n.halfChecked?`mixed`:n.state.checked?`true`:`false`))}),t(()=>{s(l,n.checkboxDisabled)}),t(()=>{h(l,F(`inline-flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors duration-150`,n.state.checked||n.halfChecked?`border-primary bg-primary text-primary-content`:`border-base-content/40 bg-base-100 text-base-content/0`,n.checkboxDisabled&&`opacity-45`))}),r(l,`click`,e=>{n.onToggle(n.node,e)});let u=i(l);return e(l,u),t(()=>{a(u,n.halfChecked?`−`:n.state.checked?`✓`:``)}),c}):``;b(()=>p(c,l,g))});let v=_(`button`,l);e(l,v),o(v,`type`,`button`),t(()=>{h(v,F(`flex min-w-0 flex-1 items-center gap-1 rounded-md px-1.5 py-1 text-left text-sm transition-colors duration-150`,n.selected?`bg-primary/12 text-primary`:`text-base-content hover:bg-base-200/70`,(n.mergedDisabled||n.node.disabled||!n.node.selectable)&&`cursor-not-allowed opacity-55`))}),t(()=>{s(v,n.mergedDisabled||n.node.disabled||!n.node.selectable)}),r(v,`click`,e=>{n.onToggle(n.node,e)});let C=x(`rue:slot:anchor`);return e(v,C),t(()=>{let e=n.label;b(()=>p(e,v,C))}),l}),V=i=>{let{__rue_rest_omit_0:a,__rue_rest_omit_1:D,__rue_rest_omit_2:O,__rue_rest_omit_3:k,__rue_rest_omit_4:A,__rue_rest_omit_5:j,__rue_rest_omit_6:ne,__rue_rest_omit_7:P,__rue_rest_omit_8:ie,__rue_rest_omit_9:oe,__rue_rest_omit_10:z,__rue_rest_omit_11:se,__rue_rest_omit_12:ce,__rue_rest_omit_13:fe,__rue_rest_omit_14:Ee,__rue_rest_omit_15:De,__rue_rest_omit_16:Oe,__rue_rest_omit_17:je,__rue_rest_omit_18:V,__rue_rest_omit_19:Ne,__rue_rest_omit_20:H,__rue_rest_omit_21:Pe,__rue_rest_omit_22:Fe,__rue_rest_omit_23:Ie,__rue_rest_omit_24:Le,__rue_rest_omit_25:Re,__rue_rest_omit_26:ze,__rue_rest_omit_27:Be,__rue_rest_omit_28:Ve,__rue_rest_omit_29:He,__rue_rest_omit_30:Ue,__rue_rest_omit_31:We,__rue_rest_omit_32:Ge,__rue_rest_omit_33:Ke,__rue_rest_omit_34:qe,__rue_rest_omit_35:Je,__rue_rest_omit_36:Ye,__rue_rest_omit_37:Xe,__rue_rest_omit_38:Ze,__rue_rest_omit_39:Qe,__rue_rest_omit_40:U,__rue_rest_omit_41:$e,__rue_rest_omit_42:et,__rue_rest_omit_43:tt,__rue_rest_omit_44:nt,__rue_rest_omit_45:rt,__rue_rest_omit_46:it,__rue_rest_omit_47:at,__rue_rest_omit_48:ot,__rue_rest_omit_49:st,__rue_rest_omit_50:ct,__rue_rest_omit_51:lt,__rue_rest_omit_52:W,__rue_rest_omit_53:G,__rue_rest_omit_54:ut,__rue_rest_omit_55:K,__rue_rest_omit_56:dt,__rue_rest_omit_57:ft,__rue_rest_omit_58:pt,__rue_rest_omit_59:mt,__rue_rest_omit_60:ht,__rue_rest_omit_61:gt,__rue_rest_omit_62:_t,__rue_rest_omit_63:vt,__rue_rest_omit_64:yt,rest:bt,rootRef:xt,instanceId:St,renderVersion:Ct,uncontrolledValue:wt,internalOpen:Tt,initialTree:Et,initialExpandedKeys:Dt,uncontrolledExpandedKeys:Ot,uncontrolledLoadedKeys:q,internalSearch:J,loadingNodeKeys:kt,treeBodyScrollTop:At,staleTreeNodeCleanupVersion:jt,searchConfig:Mt,mergedMultiple:Nt,mergedLabelInValue:Y,mergedDisabled:X,allowClearConfig:Pt,mergedShowSearch:Ft,selectorSemanticClassName:It,selectorSemanticStyle:Lt,popupSemanticClassName:Rt,popupSemanticStyle:zt,treeSemanticClassName:Bt,treeSemanticStyle:Vt,searchSemanticClassName:Z,searchSemanticStyle:Q,tagSemanticClassName:Ht,tagSemanticStyle:Ut,rootSemanticClassName:Wt,rootSemanticStyle:Gt,getNormalizedTree:Kt,getMergedSearchValue:qt,getMergedOpen:Jt,getExpandedValueKeys:$,getExpandedKeySet:Yt,getLoadedValueKeys:Xt,getLoadedKeySet:Zt,getSelectionSnapshot:Qt,filterProp:$t,filterLogic:en,matchesNode:tn,visibleTagCount:nn,getVisibleNodes:rn,buildSelectionPreview:an,getClearButtonVisible:on,requestRender:sn,setMergedOpen:cn,prepareKeepMultiplePopupOpen:ln,setMergedSearchValue:un,setExpandedKeys:dn,setLoadedKeys:fn,canLoadNodeData:pn,canExpandNode:mn,emitSelectionCallbacks:hn,commitValue:gn,removeNodeFromSelection:_n,clearSelection:vn,handleNodeToggle:yn,handleExpandToggle:bn,handleRootMouseDown:xn,handleSelectorClick:Sn,rememberTreeBodyScroll:Cn,restoreTreeBodyScroll:wn,cleanupStaleTags:Tn,cleanupStaleTreeNodes:En,resolvedSizeClass:Dn,selectorClass:On,popupClass:kn,popupSizingStyle:An,selectionState:jn,displayNodes:Mn,tagDisplayNodes:Nn,hasValue:Pn,visibleTagNodes:Fn,omittedTagNodes:In,mergedOpenState:Ln,mergedSearchValueState:Rn,showSearchInput:zn,clearButtonVisible:Bn,visibleNodes:Vn,expandedKeySetState:Hn,loadedKeySetState:Un,readVisibleNodes:Wn,readSelectionState:Gn,readExpandedKeySet:Kn,readLoadedKeySet:qn}=w(`useSetup:0:0:dup1`,()=>m(()=>{let{value:e,defaultValue:t,treeData:r,fieldNames:a,treeDataSimpleMode:o,multiple:s,treeCheckable:l,treeCheckStrictly:u,showCheckedStrategy:d,labelInValue:f,showSearch:p,searchValue:m,filterTreeNode:h,treeNodeFilterProp:_,placeholder:v,allowClear:y,clearLabel:b,notFoundContent:x,disabled:S,loading:ee,open:te,defaultOpen:T,onOpenChange:E,treeDefaultExpandAll:D,treeDefaultExpandedKeys:O,treeExpandedKeys:k,treeLoadedKeys:A,onTreeExpand:j,loadData:ne,maxCount:P,maxTagCount:ie,maxTagPlaceholder:oe,maxTagTextLength:z,listHeight:se,placement:ce,popupMatchSelectWidth:fe,size:B,status:we,variant:Te,prefix:Ee,suffix:De,suffixIcon:Oe,showArrow:ke,switcherIcon:Ae,treeTitleRender:je,treeNodeLabelProp:Me,treeLine:V,onSearch:Ne,onChange:H,onSelect:Pe,onDeselect:Fe,onClear:Ie,onPopupScroll:Le,className:Re,style:ze,selectorClassName:Be,selectorStyle:Ve,popupClassName:He,popupStyle:Ue,dropdownClassName:We,dropdownStyle:Ge,classNames:Ke,styles:qe,tagRender:Je,children:Ye,...Xe}=i,Ze=w(`ref:1:0`,()=>n(void 0)),Qe=w(`ref:1:1`,()=>n(`rue-tree-select-${N++}`)),U=w(`ref:1:2`,()=>n(0)),$e=w(`ref:1:3`,()=>n(i.defaultValue??(i.treeCheckable||i.multiple?[]:null))),et=w(`ref:1:4`,()=>n(!!i.defaultOpen)),tt=ue(le(i.treeData===void 0?[]:i.treeData,i.treeDataSimpleMode,i.fieldNames),i.fieldNames),nt=i.treeDefaultExpandAll?tt.flat.filter(e=>e.children.length>0).map(e=>e.value):i.treeDefaultExpandedKeys??[],rt=w(`ref:1:5`,()=>n(nt)),it=w(`ref:1:6`,()=>n([])),at=w(`ref:1:7`,()=>n(``)),ot=w(`ref:1:8`,()=>n([])),st=w(`ref:1:9`,()=>n(0)),ct=w(`ref:1:10`,()=>n(0)),lt=w(`computed:1:11`,()=>C(()=>I(i.showSearch)?i.showSearch:void 0)),W=lt,G=!!i.multiple||!!i.treeCheckable,ut=!!i.labelInValue||!!i.treeCheckStrictly,K=!!i.disabled||!!i.loading,dt=w(`computed:1:12`,()=>C(()=>I(i.allowClear)?i.allowClear:i.allowClear?{}:null)),ft=dt,pt=w(`computed:1:13`,()=>C(()=>typeof i.showSearch==`boolean`?i.showSearch:i.showSearch===void 0?G:!0)),mt=pt,ht=w(`computed:1:14`,()=>C(()=>Se(i.classNames,`selector`))),gt=ht,_t=w(`computed:1:15`,()=>C(()=>Ce(i.styles,`selector`))),vt=w(`computed:1:16`,()=>C(()=>Se(i.classNames,`popup`))),yt=vt,bt=w(`computed:1:17`,()=>C(()=>Ce(i.styles,`popup`))),xt=w(`computed:1:18`,()=>C(()=>Se(i.classNames,`tree`))),St=w(`computed:1:19`,()=>C(()=>Ce(i.styles,`tree`))),Ct=w(`computed:1:20`,()=>C(()=>Se(i.classNames,`search`))),wt=w(`computed:1:21`,()=>C(()=>Ce(i.styles,`search`))),Tt=w(`computed:1:22`,()=>C(()=>Se(i.classNames,`tag`))),Et=w(`computed:1:23`,()=>C(()=>Ce(i.styles,`tag`))),Dt=w(`computed:1:24`,()=>C(()=>Se(i.classNames,`root`))),Ot=w(`computed:1:25`,()=>C(()=>Ce(i.styles,`root`))),q=()=>ue(le(i.treeData===void 0?[]:i.treeData,i.treeDataSimpleMode,i.fieldNames),i.fieldNames),J=()=>W.get()?.searchValue??i.searchValue??(mt.get()?at.value:``),kt=()=>i.open??et.value,At=()=>R(i.treeExpandedKeys??rt.value),jt=()=>new Set(At().map(ae)),Mt=()=>R(i.treeLoadedKeys??it.value),Nt=()=>new Set(Mt().map(ae)),Y=()=>{let e=q(),t=R(i.value===void 0?$e.value:i.value).map(ae),n=new Set(t),r=i.treeCheckable?pe(t,e.byValueKey,!!i.treeCheckStrictly):n,a=i.treeCheckable?me(e.roots,r,!!i.treeCheckStrictly):{checkedKeys:n,halfCheckedKeys:new Set,stateMap:Object.fromEntries(e.flat.map(e=>[e.valueKey,{checked:n.has(e.valueKey),halfChecked:!1,participates:!0}]))},o=i.treeCheckable?he(e.roots,a.stateMap,i.showCheckedStrategy===void 0?M:i.showCheckedStrategy):t.map(t=>e.byValueKey[t]).filter(Boolean);return{currentValueKeys:t,currentValueKeySet:n,derivedCheckState:a,displayNodes:o,displayNodeKeySet:new Set(o.map(e=>e.valueKey))}},X=w(`computed:1:26`,()=>C(()=>W.get()?.treeNodeFilterProp??i.treeNodeFilterProp)),Pt=X,Ft=w(`computed:1:27`,()=>C(()=>W.get()?.filterTreeNode??i.filterTreeNode??!0)),It=Ft,Lt=(e,t)=>{if(!t)return!0;if(typeof It.get()==`function`)return It.get()(t,e);if(It.get()===!1)return!0;let n=t.toLowerCase();return(Pt.get()?[ye(e,Pt.get(),i.treeNodeLabelProp===void 0?`title`:i.treeNodeLabelProp)]:be(e,i.treeNodeLabelProp===void 0?`title`:i.treeNodeLabelProp)).some(e=>e.toLowerCase().includes(n))},Rt=typeof i.maxTagCount==`number`&&i.maxTagCount>=0?Math.max(0,i.maxTagCount):void 0,zt=()=>{let e=q(),t=J();return xe(e.roots,jt(),t,e=>Lt(e,t))},Bt=(e,t)=>{let n=new Set(e.map(e=>e.valueKey));return{currentValueKeySet:n,derivedCheckState:t??{checkedKeys:n,halfCheckedKeys:new Set,stateMap:Object.fromEntries(q().flat.map(e=>[e.valueKey,{checked:n.has(e.valueKey),halfChecked:!1,participates:!0}]))},displayNodes:e,displayNodeKeySet:new Set(e.map(e=>e.valueKey))}},Vt=e=>{let t=e?.length??Y().displayNodes.length;return!!ft.get()&&!K&&t>0},Z=()=>{U.value+=1,nn()},Q=(e,t)=>{let n=kt()!==e;i.open===void 0&&et.value!==e&&(et.value=e,Z()),n&&i.onOpenChange&&i.onOpenChange(e)},Ht=()=>{i.open===void 0&&Q(!0)},Ut=(e,t)=>{let n=!1;if(W.get()?.searchValue===void 0&&i.searchValue===void 0){if(at.value===e)return;at.value=e,n=!0}W.get()?.onSearch&&W.get().onSearch(e),i.onSearch&&i.onSearch(e),n&&(Z(),an(zt().map(e=>e.node.valueKey)))},Wt=e=>{i.treeExpandedKeys===void 0&&(rt.value=e,Z()),i.onTreeExpand&&i.onTreeExpand(e)},Gt=e=>{i.treeLoadedKeys===void 0&&(it.value=e,Z())},Kt=(e,t=Nt())=>{let n=t&&typeof t.has==`function`?t:new Set;return!!i.loadData&&!e.isLeaf&&e.children.length===0&&!n.has(e.valueKey)},qt=(e,t=Nt())=>e.children.length>0||Kt(e,t),Jt=(e,t,n,r)=>{let a=new Set(e.map(e=>e.valueKey)),o=new Set(t.map(e=>e.valueKey));i.onDeselect&&e.filter(e=>!o.has(e.valueKey)).forEach(e=>{i.onDeselect(ut?ge(e,r.has(e.valueKey),i.treeNodeLabelProp===void 0?`title`:i.treeNodeLabelProp):e.value,e,{...n,selected:!1,checked:!1})}),i.onSelect&&t.filter(e=>!a.has(e.valueKey)).forEach(e=>{i.onSelect(ut?ge(e,r.has(e.valueKey),i.treeNodeLabelProp===void 0?`title`:i.treeNodeLabelProp):e.value,e,{...n,selected:!0,checked:!0})})},$=(e,t,n)=>{let r=q(),a=Y(),o=_e(e,G,ut,n,i.treeNodeLabelProp===void 0?`title`:i.treeNodeLabelProp),s=ve(e,G,i.treeNodeLabelProp===void 0?`title`:i.treeNodeLabelProp);i.value===void 0&&($e.value=o,Z()),Jt(a.displayNodes,e,{...t,displayNodes:e,halfCheckedKeys:Array.from(n).map(e=>r.byValueKey[e]?.value).filter(L)},n),i.onChange&&i.onChange(o,s,{...t,displayNodes:e,halfCheckedKeys:Array.from(n).map(e=>r.byValueKey[e]?.value).filter(L),checkedNodes:i.treeCheckable?r.flat.filter(t=>e.some(e=>e.valueKey===t.valueKey)):e}),Z(),rn(e.map(e=>e.valueKey))},Yt=(e,t)=>{tn(t),t.preventDefault(),t.stopPropagation();let n=Y(),r=q();if(i.treeCheckable){let t=pe(n.currentValueKeys,r.byValueKey,!!i.treeCheckStrictly);i.treeCheckStrictly?t.delete(e.valueKey):de(e).forEach(e=>t.delete(e));let a=me(r.roots,t,!!i.treeCheckStrictly),o=he(r.roots,a.stateMap,i.showCheckedStrategy===void 0?M:i.showCheckedStrategy);return $(o,{triggerNode:e,triggerValue:e.value,checked:!1},a.halfCheckedKeys),Bt(o,a)}let a=n.displayNodes.filter(t=>t.valueKey!==e.valueKey);return $(a,{triggerNode:e,triggerValue:e.value,selected:!1},new Set),Bt(a)},Xt=e=>{tn(e),e.preventDefault(),e.stopPropagation(),i.onClear&&i.onClear(e),J()&&Ut(``),$([],{clear:!0,selected:!1,checked:!1,triggerNode:null,triggerValue:null},new Set)},Zt=(e,t)=>{if(tn(t),t.preventDefault(),t.stopPropagation(),K||e.disabled)return null;if(!G&&!i.treeCheckable&&Kt(e))return Qt(e,t),Y();let n=Y(),r=q();if(i.treeCheckable){let t=pe(n.currentValueKeys,r.byValueKey,!!i.treeCheckStrictly),a=n.derivedCheckState.checkedKeys,o=a&&typeof a.has==`function`?a.has(e.valueKey):!1;if(i.treeCheckStrictly)o?t.delete(e.valueKey):t.add(e.valueKey);else{let n=de(e);o?n.forEach(e=>t.delete(e)):n.forEach(e=>t.add(e))}let s=me(r.roots,t,!!i.treeCheckStrictly),c=he(r.roots,s.stateMap,i.showCheckedStrategy===void 0?M:i.showCheckedStrategy);return!o&&i.maxCount&&c.length>i.maxCount?null:(Ht(),$(c,{triggerNode:e,triggerValue:e.value,checked:!o,selected:!o},s.halfCheckedKeys),(W.get()?.autoClearSearchValue??!0)&&J()&&Ut(``),Q(!0),Bt(c,s))}if(G){let t=n.displayNodes.some(t=>t.valueKey===e.valueKey)?n.displayNodes.filter(t=>t.valueKey!==e.valueKey):[...n.displayNodes,e];return!n.displayNodeKeySet.has(e.valueKey)&&i.maxCount&&t.length>i.maxCount?null:(Ht(),$(t,{triggerNode:e,triggerValue:e.value,selected:!n.displayNodeKeySet.has(e.valueKey)},new Set),(W.get()?.autoClearSearchValue??!0)&&J()&&Ut(``),Q(!0),Bt(t))}return $([e],{triggerNode:e,triggerValue:e.value,selected:!0},new Set),J()&&Ut(``),Q(!1,{selectionOverride:[e]}),Bt([e])},Qt=(e,t)=>{tn(t),t.preventDefault(),t.stopPropagation();let n=Nt();if(K||e.disabled||!qt(e,n))return;let r=jt(),a=Mt(),o=J(),s=q(),c=new Set(r),l=!r.has(e.valueKey);l?c.add(e.valueKey):c.delete(e.valueKey),Wt(Array.from(c).map(e=>s.byValueKey[e]?.value).filter(L)),l&&i.loadData&&!o&&!n.has(e.valueKey)&&!ot.value.includes(e.valueKey)&&!e.isLeaf&&e.children.length===0&&(ot.value=[...ot.value,e.valueKey],Z(),Promise.resolve(i.loadData(e)).then(()=>{Gt(Array.from(new Set([...a,e.value])))}).finally(()=>{ot.value=ot.value.filter(t=>t!==e.valueKey),Z()}))},$t=e=>{e.stopPropagation(),K&&e.preventDefault()},en=()=>{K||Q(!kt())},tn=e=>{let t=e.currentTarget?.closest(`[role="tree"]`);t&&(st.value=t.scrollTop)},nn=()=>{setTimeout(()=>{let e=document.querySelector(`[data-rue-tree-select-popup="true"] [role="tree"]`);e&&e.scrollTop!==st.value&&(e.scrollTop=st.value)},0)},rn=e=>{setTimeout(()=>{let t=new Set(e);document.querySelector(`[data-rue-tree-select-id="${Qe.value}"]`)?.querySelectorAll(`[data-rue-tree-select-tag-value]`).forEach(e=>{let n=e.getAttribute(`data-rue-tree-select-tag-value`);n&&!t.has(n)&&e.remove()})},0)},an=e=>{ct.value+=1;let t=ct.value;setTimeout(()=>{if(t!==ct.value)return;let n=0;document.querySelector(`[data-rue-tree-select-id="${Qe.value}"]`)?.querySelectorAll(`[data-rue-tree-select-node]`).forEach(t=>{let r=t.getAttribute(`data-rue-tree-select-node`);if(r===e[n]){n+=1;return}r&&t.remove()})},0)};g(()=>{if(typeof document>`u`)return;let e=e=>{let t=e.target,n=Ze.value;n&&t&&n.contains(t)||Q(!1)},t=e=>{e.key===`Escape`&&Q(!1)};document.addEventListener(`mousedown`,e),document.addEventListener(`keydown`,t),c(()=>{document.removeEventListener(`mousedown`,e),document.removeEventListener(`keydown`,t)})});let on=re[i.size===void 0?`md`:i.size]??``,sn=w(`computed:1:28`,()=>C(()=>F(`input relative flex w-full items-center gap-2 px-3 text-left transition-shadow duration-150`,on,i.status===`error`&&`input-error`,i.status===`warning`&&`input-warning`,(i.variant===void 0?`outlined`:i.variant)===`filled`&&`bg-base-200 border-base-300 shadow-none`,(i.variant===void 0?`outlined`:i.variant)===`borderless`&&`border-transparent bg-transparent px-0 shadow-none`,(i.variant===void 0?`outlined`:i.variant)===`underlined`&&`rounded-none border-x-0 border-t-0 bg-transparent px-0 shadow-none`,K?`cursor-not-allowed opacity-60`:`cursor-pointer`,gt.get(),i.selectorClassName))),cn=w(`computed:1:29`,()=>C(()=>F(`absolute z-40 overflow-hidden rounded-box border border-base-300 bg-base-100 shadow-[0_24px_70px_-36px_rgba(15,23,42,0.45)]`,(i.placement===void 0?`bottomLeft`:i.placement).startsWith(`top`)?`bottom-full mb-2`:`top-full mt-2`,(i.placement===void 0?`bottomLeft`:i.placement).endsWith(`Right`)?`right-0`:`left-0`,yt.get(),i.popupClassName,i.dropdownClassName))),ln=w(`computed:1:30`,()=>C(()=>(i.popupMatchSelectWidth===void 0?!0:i.popupMatchSelectWidth)===!1?{minWidth:`18rem`}:typeof(i.popupMatchSelectWidth===void 0?!0:i.popupMatchSelectWidth)==`number`?{width:`${i.popupMatchSelectWidth===void 0?!0:i.popupMatchSelectWidth}px`}:{minWidth:`100%`})),un=w(`computed:1:31`,()=>C(()=>(U.value,Y()))),dn=w(`computed:1:32`,()=>C(()=>un.get().displayNodes)),fn=w(`computed:1:33`,()=>C(()=>G||i.treeCheckable?dn.get():[])),pn=w(`computed:1:34`,()=>C(()=>dn.get().length>0)),mn=w(`computed:1:35`,()=>C(()=>Rt===void 0?fn.get():fn.get().slice(0,Rt))),hn=w(`computed:1:36`,()=>C(()=>Rt===void 0?[]:fn.get().slice(Rt))),gn=w(`computed:1:37`,()=>C(()=>(U.value,kt()))),_n=w(`computed:1:38`,()=>C(()=>(U.value,J()))),vn=w(`computed:1:39`,()=>C(()=>mt.get()&&(G||i.treeCheckable||gn.get()||!pn.get()))),yn=w(`computed:1:40`,()=>C(()=>Vt(dn.get()))),bn=w(`computed:1:41`,()=>C(()=>(U.value,zt()))),xn=w(`computed:1:42`,()=>C(()=>(U.value,jt()))),Sn=w(`computed:1:43`,()=>C(()=>(U.value,Nt())));return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:r,__rue_rest_omit_3:a,__rue_rest_omit_4:o,__rue_rest_omit_5:s,__rue_rest_omit_6:l,__rue_rest_omit_7:u,__rue_rest_omit_8:d,__rue_rest_omit_9:f,__rue_rest_omit_10:p,__rue_rest_omit_11:m,__rue_rest_omit_12:h,__rue_rest_omit_13:_,__rue_rest_omit_14:v,__rue_rest_omit_15:y,__rue_rest_omit_16:b,__rue_rest_omit_17:x,__rue_rest_omit_18:S,__rue_rest_omit_19:ee,__rue_rest_omit_20:te,__rue_rest_omit_21:T,__rue_rest_omit_22:E,__rue_rest_omit_23:D,__rue_rest_omit_24:O,__rue_rest_omit_25:k,__rue_rest_omit_26:A,__rue_rest_omit_27:j,__rue_rest_omit_28:ne,__rue_rest_omit_29:P,__rue_rest_omit_30:ie,__rue_rest_omit_31:oe,__rue_rest_omit_32:z,__rue_rest_omit_33:se,__rue_rest_omit_34:ce,__rue_rest_omit_35:fe,__rue_rest_omit_36:B,__rue_rest_omit_37:we,__rue_rest_omit_38:Te,__rue_rest_omit_39:Ee,__rue_rest_omit_40:De,__rue_rest_omit_41:Oe,__rue_rest_omit_42:ke,__rue_rest_omit_43:Ae,__rue_rest_omit_44:je,__rue_rest_omit_45:Me,__rue_rest_omit_46:V,__rue_rest_omit_47:Ne,__rue_rest_omit_48:H,__rue_rest_omit_49:Pe,__rue_rest_omit_50:Fe,__rue_rest_omit_51:Ie,__rue_rest_omit_52:Le,__rue_rest_omit_53:Re,__rue_rest_omit_54:ze,__rue_rest_omit_55:Be,__rue_rest_omit_56:Ve,__rue_rest_omit_57:He,__rue_rest_omit_58:Ue,__rue_rest_omit_59:We,__rue_rest_omit_60:Ge,__rue_rest_omit_61:Ke,__rue_rest_omit_62:qe,__rue_rest_omit_63:Je,__rue_rest_omit_64:Ye,rest:Xe,rootRef:Ze,instanceId:Qe,renderVersion:U,uncontrolledValue:$e,internalOpen:et,initialTree:tt,initialExpandedKeys:nt,uncontrolledExpandedKeys:rt,uncontrolledLoadedKeys:it,internalSearch:at,loadingNodeKeys:ot,treeBodyScrollTop:st,staleTreeNodeCleanupVersion:ct,searchConfig:lt,mergedMultiple:G,mergedLabelInValue:ut,mergedDisabled:K,allowClearConfig:dt,mergedShowSearch:pt,selectorSemanticClassName:ht,selectorSemanticStyle:_t,popupSemanticClassName:vt,popupSemanticStyle:bt,treeSemanticClassName:xt,treeSemanticStyle:St,searchSemanticClassName:Ct,searchSemanticStyle:wt,tagSemanticClassName:Tt,tagSemanticStyle:Et,rootSemanticClassName:Dt,rootSemanticStyle:Ot,getNormalizedTree:q,getMergedSearchValue:J,getMergedOpen:kt,getExpandedValueKeys:At,getExpandedKeySet:jt,getLoadedValueKeys:Mt,getLoadedKeySet:Nt,getSelectionSnapshot:Y,filterProp:X,filterLogic:Ft,matchesNode:Lt,visibleTagCount:Rt,getVisibleNodes:zt,buildSelectionPreview:Bt,getClearButtonVisible:Vt,requestRender:Z,setMergedOpen:Q,prepareKeepMultiplePopupOpen:Ht,setMergedSearchValue:Ut,setExpandedKeys:Wt,setLoadedKeys:Gt,canLoadNodeData:Kt,canExpandNode:qt,emitSelectionCallbacks:Jt,commitValue:$,removeNodeFromSelection:Yt,clearSelection:Xt,handleNodeToggle:Zt,handleExpandToggle:Qt,handleRootMouseDown:$t,handleSelectorClick:en,rememberTreeBodyScroll:tn,restoreTreeBodyScroll:nn,cleanupStaleTags:rn,cleanupStaleTreeNodes:an,resolvedSizeClass:on,selectorClass:sn,popupClass:cn,popupSizingStyle:ln,selectionState:un,displayNodes:dn,tagDisplayNodes:fn,hasValue:pn,visibleTagNodes:mn,omittedTagNodes:hn,mergedOpenState:gn,mergedSearchValueState:_n,showSearchInput:vn,clearButtonVisible:yn,visibleNodes:bn,expandedKeySetState:xn,loadedKeySetState:Sn,readVisibleNodes:()=>bn.get()??[],readSelectionState:()=>un.get()??Y(),readExpandedKeySet:()=>{let e=xn.get();return e&&typeof e.has==`function`?e:new Set},readLoadedKeySet:()=>{let e=Sn.get();return e&&typeof e.has==`function`?e:new Set}}}));return u(n=>{let a=_(`div`,n);t(()=>{ee(a,bt)});let c=E(a,()=>e=>{xt.value=e??void 0});d(()=>{c()}),o(a,`data-rue-tree-select-root`,`true`),t(()=>{o(a,`data-rue-tree-select-id`,String(St.value))}),t(()=>{h(a,F(`relative`,Wt.get(),i.className))}),t(()=>{S(a,{...Gt.get(),...i.style})}),r(a,`mousedown`,xn);let m=_(`div`,a);e(a,m),o(m,`data-rue-tree-select-selector`,`true`),t(()=>{h(m,On.get())}),t(()=>{S(m,{...Lt.get(),...i.selectorStyle})}),o(m,`role`,`combobox`),t(()=>{o(m,`aria-expanded`,String(Ln.get()))}),t(()=>{o(m,`aria-disabled`,String(X))}),o(m,`aria-haspopup`,`tree`),r(m,`click`,Sn);let g=x(`rue:slot:anchor`);e(m,g),t(()=>{let n=i.prefix===void 0?``:u(()=>{let n=f(),r=_(`span`,n);e(n,r),h(r,`flex shrink-0 items-center text-base-content/65`);let a=x(`rue:slot:anchor`);return e(r,a),t(()=>{let e=i.prefix;b(()=>p(e,r,a))}),n});b(()=>p(n,m,g))});let C=_(`div`,m);e(m,C),h(C,`flex min-w-0 flex-1 flex-wrap items-center gap-1.5 self-stretch py-1`);let w=x(`rue:list:start`),D=x(`rue:list:end`);e(C,w),e(C,D);let O=new Map;t(()=>{O=T({items:Fn.get()||[],getKey:(e,t)=>e.valueKey,elements:O,parent:C,before:D,start:w,renderItem:(e,t,n,r,a)=>{let o=B(e,i.treeNodeLabelProp===void 0?`title`:i.treeNodeLabelProp),s=we(o,i.maxTagTextLength);v(y(Ae,{key:e.valueKey,node:e,rawLabel:o,label:s,disabled:X,tagRender:i.tagRender,tagClassName:Ht.get(),tagStyle:Ut.get(),onRemove:_n}),t,n,r)}})}),e(C,l(` `));let k=x(`rue:slot:anchor`);e(C,k),t(()=>{let n=In.get().length>0?u(()=>{let n=f(),r=_(`span`,n);e(n,r),h(r,`badge badge-ghost inline-flex max-w-full items-center rounded-md px-2 py-1 text-xs leading-none`);let a=x(`rue:slot:anchor`);return e(r,a),t(()=>{let e=typeof i.maxTagPlaceholder==`function`?i.maxTagPlaceholder(In.get()):i.maxTagPlaceholder??`+${In.get().length}`;b(()=>p(e,r,a))}),n}):``;b(()=>p(n,C,k))}),e(C,l(` `));let A=x(`rue:slot:anchor`);e(C,A),t(()=>{let n=zn.get()?u(()=>{let n=f(),a=_(`input`,n);return e(n,a),o(a,`data-rue-tree-select-search`,`true`),t(()=>{te(a,Rn.get())}),t(()=>{s(a,X)}),t(()=>{o(a,`placeholder`,String(Te(i.placeholder??`请选择`)))}),t(()=>{h(a,F(`min-w-[5rem] flex-1 border-0 bg-transparent px-0 py-0 text-sm leading-5 outline-none placeholder:text-base-content/40`,Z.get()))}),t(()=>{S(a,Q.get())}),r(a,`click`,e=>{e.stopPropagation(),X||cn(!0)}),r(a,`focus`,()=>{X||cn(!0)}),r(a,`input`,e=>{let t=e.target;cn(!0),un(t.value,{syncSelector:!1}),Promise.resolve().then(()=>{document.querySelector(`[data-rue-tree-select-search="true"]`)?.focus()})}),n}):u(()=>{let n=f(),r=_(`span`,n);e(n,r),t(()=>{h(r,Pn.get()&&!Nt&&!i.treeCheckable?`flex flex-1 items-center truncate text-sm leading-5`:`flex flex-1 items-center truncate text-sm leading-5 text-base-content/40`)});let a=x(`rue:slot:anchor`);return e(r,a),t(()=>{let e=Pn.get()&&!Nt&&!i.treeCheckable?B(Mn.get()[0],i.treeNodeLabelProp===void 0?`title`:i.treeNodeLabelProp):i.placeholder??`请选择`;b(()=>p(e,r,a))}),n});b(()=>p(n,C,A))});let j=_(`button`,m);e(m,j),o(j,`type`,`button`),t(()=>{h(j,F(`btn btn-ghost btn-xs btn-circle h-7 min-h-0 w-7 shrink-0 items-center justify-center self-center p-0 leading-none text-base-content/55 hover:text-base-content`,Bn.get()?`inline-flex`:`hidden`))}),t(()=>{o(j,`aria-label`,String(i.clearLabel===void 0?`清空选择`:i.clearLabel))}),t(()=>{s(j,!Bn.get())}),r(j,`click`,vn);let ne=x(`rue:component:anchor`);e(j,ne),t(()=>{let e=y(ke,{icon:Pt.get()?.clearIcon});b(()=>p(e,j,ne))});let M=x(`rue:slot:anchor`);e(m,M),t(()=>{let n=i.suffix===void 0?``:u(()=>{let n=f(),r=_(`span`,n);e(n,r),h(r,`flex shrink-0 items-center text-base-content/65`);let a=x(`rue:slot:anchor`);return e(r,a),t(()=>{let e=i.suffix;b(()=>p(e,r,a))}),n});b(()=>p(n,m,M))}),e(m,l(` `));let re=x(`rue:slot:anchor`);e(m,re),t(()=>{let n=i.showArrow===void 0||i.showArrow?u(()=>{let n=f(),r=_(`span`,n);e(n,r),h(r,`flex shrink-0 items-center`);let a=x(`rue:slot:anchor`);return e(r,a),t(()=>{let n=i.suffixIcon??u(()=>{let n=f(),r=_(`span`,n);e(n,r),o(r,`data-rue-tree-select-arrow`,`true`),o(r,`aria-hidden`,`true`),t(()=>{h(r,F(`inline-flex h-4 w-4 items-center justify-center text-base-content/55 transition-transform duration-150`,Ln.get()&&`rotate-180`))});let i=_(`svg`,r);e(r,i),o(i,`viewBox`,`0 0 20 20`),o(i,`fill`,`none`),h(i,`h-4 w-4`);let a=_(`path`,i);return e(i,a),o(a,`d`,`M5.5 7.5L10 12.5L14.5 7.5`),o(a,`stroke`,`currentColor`),o(a,`stroke-width`,`1.8`),o(a,`stroke-linecap`,`round`),o(a,`stroke-linejoin`,`round`),n});b(()=>p(n,r,a))}),n}):``;b(()=>p(n,m,re))});let N=_(`div`,a);e(a,N),o(N,`data-rue-tree-select-popup`,`true`),t(()=>{o(N,`aria-hidden`,String(Ln.get()?`false`:`true`))}),t(()=>{ee(N,{hidden:Ln.get()?void 0:!0})}),t(()=>{h(N,kn.get())}),t(()=>{S(N,{...An.get(),...zt.get(),...i.popupStyle,...i.dropdownStyle})});let P=_(`div`,N);e(N,P),o(P,`role`,`tree`),t(()=>{h(P,F(`overflow-auto p-2`,Bt.get()))}),t(()=>{S(P,{maxHeight:`${i.listHeight===void 0?320:i.listHeight}px`,...Vt.get()})}),r(P,`scroll`,e=>{At.value=e.target.scrollTop,i.onPopupScroll&&i.onPopupScroll(e)});let I=x(`rue:slot:anchor`);e(P,I),t(()=>{let n=Wn().length?u(()=>{let n=f(),r=x(`rue:list:start`),a=x(`rue:list:end`);e(n,r),e(n,a);let o=new Map;return t(()=>{o=T({items:Wn()||[],getKey:(e,t)=>e.node.valueKey,elements:o,parent:r.parentNode,before:a,start:r,renderItem:(e,t,n,r,a)=>{v(y(Me,{key:e.node.valueKey,node:e.node,matched:e.matched,state:Gn().derivedCheckState.stateMap[e.node.valueKey]??{checked:!1,halfChecked:!1,participates:!0},selected:i.treeCheckable?(Gn().derivedCheckState.stateMap[e.node.valueKey]??{checked:!1,halfChecked:!1,participates:!0}).checked:Gn().currentValueKeySet.has(e.node.valueKey),halfChecked:i.treeCheckable?(Gn().derivedCheckState.stateMap[e.node.valueKey]??{checked:!1,halfChecked:!1,participates:!0}).halfChecked:!1,expanded:Rn.get()?!0:Kn().has(e.node.valueKey),loadingNode:kt.value.includes(e.node.valueKey),canExpand:mn(e.node,qn()),checkboxDisabled:X||e.node.disabled||e.node.disableCheckbox||!e.node.checkable,label:i.treeTitleRender?i.treeTitleRender(e.node):B(e.node,i.treeNodeLabelProp===void 0?`title`:i.treeNodeLabelProp),mergedDisabled:X,treeCheckable:i.treeCheckable,treeLine:i.treeLine,switcherIcon:i.switcherIcon,onExpand:bn,onToggle:yn}),t,n,r)}})}),n}):u(()=>{let n=f(),r=_(`div`,n);e(n,r),h(r,`rounded-md px-3 py-8 text-center text-sm text-base-content/55`);let a=x(`rue:slot:anchor`);return e(r,a),t(()=>{let e=i.notFoundContent??`暂无匹配项`;b(()=>p(e,r,a))}),n});b(()=>p(n,P,I))});let L=x(`rue:children:anchor`);return e(a,L),t(()=>{let e=i.children;b(()=>p(e,a,L))}),a})};V.SHOW_ALL=j,V.SHOW_PARENT=ne,V.SHOW_CHILD=M;var Ne=n=>u(r=>{let i=_(`div`,r);h(i,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let a=_(`table`,i);e(i,a),h(a,`table table-zebra`);let s=_(`thead`,a);e(a,s);let c=_(`tr`,s);e(s,c);let d=_(`th`,c);e(c,d),e(d,l(`属性`));let m=_(`th`,c);e(c,m),e(m,l(`说明`));let g=_(`th`,c);e(c,g),e(g,l(`类型`));let v=_(`th`,c);e(c,v),e(v,l(`默认值`));let y=_(`tbody`,a);e(a,y);let S=x(`rue:list:start`),C=x(`rue:list:end`);e(y,S),e(y,C);let ee=new Map;return t(()=>{ee=T({items:n.rows||[],getKey:(e,t)=>e.prop,elements:ee,parent:y,before:C,singleRoot:!0,trackIndex:!1,start:S,renderItem:(n,r,i,a,s)=>{p(u(()=>{let r=f(),i=_(`tr`,r);e(r,i),t(()=>{o(i,`key`,String(n.prop))});let a=_(`td`,i);e(i,a);let s=_(`code`,a);e(a,s);let c=x(`rue:slot:anchor`);e(s,c),t(()=>{let e=n.prop;b(()=>p(e,s,c))});let l=_(`td`,i);e(i,l);let u=x(`rue:slot:anchor`);e(l,u),t(()=>{let e=n.description;b(()=>p(e,l,u))});let d=_(`td`,i);e(i,d);let m=_(`code`,d);e(d,m);let h=x(`rue:slot:anchor`);e(m,h),t(()=>{let e=n.type;b(()=>p(e,m,h))});let g=_(`td`,i);e(i,g);let v=_(`code`,g);e(g,v);let y=x(`rue:slot:anchor`);return e(v,y),t(()=>{let e=n.defaultValue;b(()=>p(e,v,y))}),r}),r,i)}})}),i}),H=e=>Array.isArray(e)?H(e[0]):e&&typeof e==`object`&&`value`in e?e.value:e??null,Pe=e=>{if(!Array.isArray(e)){let t=H(e);return t==null?[]:[t]}return e.map(e=>H(e)).filter(e=>e!=null)},Fe=[{title:`产品平台`,value:`platform`,children:[{title:`文档中心`,value:`docs`},{title:`资源目录`,value:`assets`},{title:`组件市场`,value:`components`}]},{title:`工程效率`,value:`engineering`,children:[{title:`构建链路`,value:`build`},{title:`质量门禁`,value:`quality`},{title:`发布管道`,value:`release`}]},{title:`增长分析`,value:`growth`,children:[{title:`实验看板`,value:`experiment`},{title:`归因报表`,value:`attribution`},{title:`留存漏斗`,value:`retention`}]}],Ie=[{title:`协作面板`,value:`workspace`,children:[{title:`日报汇总`,value:`daily`},{title:`设计交接`,value:`handoff`},{title:`会议纪要`,value:`minutes`}]},{title:`数据服务`,value:`data`,children:[{title:`分析订阅`,value:`analytics`},{title:`实验指标`,value:`metrics`},{title:`异常告警`,value:`alerts`}]}],Le=[{title:`应用集群`,value:`apps`,children:[{title:`生产环境`,value:`prod`},{title:`预发环境`,value:`stage`},{title:`开发环境`,value:`dev`}]}],Re=[{nodeId:1,parentId:0,code:`workspace`,name:`Workspace`},{nodeId:2,parentId:1,code:`workflow`,name:`Workflow board`},{nodeId:3,parentId:1,code:`briefs`,name:`Briefs`},{nodeId:4,parentId:2,code:`review`,name:`Design review`},{nodeId:5,parentId:2,code:`release`,name:`Release checklist`}],ze=`import { ref } from '@rue-js/rue'
import TreeSelect, { type TreeSelectDataNode } from '@rue-js/design'

const treeData: TreeSelectDataNode[] = [
  {
    title: '产品平台',
    value: 'platform',
    children: [
      { title: '文档中心', value: 'docs' },
      { title: '资源目录', value: 'assets' },
      { title: '组件市场', value: 'components' },
    ],
  },
  {
    title: '工程效率',
    value: 'engineering',
    children: [
      { title: '构建链路', value: 'build' },
      { title: '质量门禁', value: 'quality' },
      { title: '发布管道', value: 'release' },
    ],
  },
]

const value = ref('docs')

<TreeSelect
  value={value.value}
  treeData={treeData}
  treeDefaultExpandAll
  showSearch
  treeNodeFilterProp="title"
  allowClear
  placeholder="选择一个树节点"
  onChange={nextValue => {
    value.value = String(nextValue ?? '')
  }}
/>
`,Be=`import { ref } from '@rue-js/rue'
import TreeSelect, { type TreeSelectDataNode } from '@rue-js/design'

const treeData: TreeSelectDataNode[] = [
  {
    title: '产品平台',
    value: 'platform',
    children: [
      { title: '文档中心', value: 'docs' },
      { title: '资源目录', value: 'assets' },
      { title: '组件市场', value: 'components' },
    ],
  },
]

const value = ref('docs')

<TreeSelect
  value={value.value}
  treeData={treeData}
  treeDefaultExpandAll
  onChange={nextValue => {
    value.value = String(nextValue ?? '')
  }}
/>
`,Ve=`import { ref } from '@rue-js/rue'
import TreeSelect from '@rue-js/design'

const treeData = [
  { nodeId: 1, parentId: 0, code: 'workspace', name: 'Workspace' },
  { nodeId: 2, parentId: 1, code: 'workflow', name: 'Workflow board' },
  { nodeId: 3, parentId: 1, code: 'briefs', name: 'Briefs' },
  { nodeId: 4, parentId: 2, code: 'review', name: 'Design review' },
  { nodeId: 5, parentId: 2, code: 'release', name: 'Release checklist' },
]

const value = ref('workflow')

<TreeSelect
  value={value.value}
  treeData={treeData}
  treeDataSimpleMode={{ id: 'nodeId', pId: 'parentId', rootPId: 0 }}
  fieldNames={{ value: 'code', label: 'name', key: 'code' }}
  treeDefaultExpandAll
  showSearch
  treeNodeFilterProp="title"
  allowClear
  onChange={nextValue => {
    value.value = String(nextValue ?? '')
  }}
/>
`,He=`import { ref } from '@rue-js/rue'
import TreeSelect, { type TreeSelectValue, type TreeSelectDataNode } from '@rue-js/design'

const treeData: TreeSelectDataNode[] = [
  {
    title: '协作面板',
    value: 'workspace',
    children: [
      { title: '日报汇总', value: 'daily' },
      { title: '设计交接', value: 'handoff' },
      { title: '会议纪要', value: 'minutes' },
    ],
  },
  {
    title: '数据服务',
    value: 'data',
    children: [
      { title: '分析订阅', value: 'analytics' },
      { title: '实验指标', value: 'metrics' },
      { title: '异常告警', value: 'alerts' },
    ],
  },
]

const values = ref<TreeSelectValue[]>(['analytics', 'minutes'])
const open = ref(false)

<TreeSelect
  value={values.value}
  open={open.value}
  treeData={treeData}
  multiple
  treeDefaultExpandAll
  allowClear
  maxTagCount={2}
  placeholder="选择多个项目"
  onOpenChange={nextOpen => {
    open.value = nextOpen
  }}
  onChange={(nextValue, _label, extra) => {
    values.value = Array.isArray(nextValue) ? nextValue.map(item => String(item)) : []
    if (!extra.clear) open.value = true
  }}
/>
`,Ue=`import { ref } from '@rue-js/rue'
import TreeSelect, { type TreeSelectValue, type TreeSelectDataNode } from '@rue-js/design'

const treeData: TreeSelectDataNode[] = [
  {
    title: '产品平台',
    value: 'platform',
    children: [
      { title: '文档中心', value: 'docs' },
      { title: '资源目录', value: 'assets' },
      { title: '组件市场', value: 'components' },
    ],
  },
  {
    title: '工程效率',
    value: 'engineering',
    children: [
      { title: '构建链路', value: 'build' },
      { title: '质量门禁', value: 'quality' },
      { title: '发布管道', value: 'release' },
    ],
  },
]

const values = ref<TreeSelectValue[]>(['build', 'quality'])
const open = ref(false)

<TreeSelect
  value={values.value}
  open={open.value}
  treeData={treeData}
  treeCheckable
  maxTagCount={2}
  maxTagPlaceholder="..."
  allowClear
  treeDefaultExpandAll
  onOpenChange={nextOpen => {
    open.value = nextOpen
  }}
  onChange={(nextValue, _label, extra) => {
    values.value = Array.isArray(nextValue) ? nextValue.map(item => String(item)) : []
    if (!extra.clear) open.value = true
  }}
/>
`,We=`import { ref } from '@rue-js/rue'
import TreeSelect, {
  type TreeSelectDataNode,
  type TreeSelectLabeledValue,
} from '@rue-js/design'

const treeData: TreeSelectDataNode[] = [
  {
    title: '产品平台',
    value: 'platform',
    children: [
      { title: '文档中心', value: 'docs' },
      { title: '资源目录', value: 'assets' },
      { title: '组件市场', value: 'components' },
    ],
  },
  {
    title: '工程效率',
    value: 'engineering',
    children: [
      { title: '构建链路', value: 'build' },
      { title: '质量门禁', value: 'quality' },
      { title: '发布管道', value: 'release' },
    ],
  },
]

const selected = ref<TreeSelectLabeledValue | null>({
  value: 'release',
  key: 'release',
  label: '发布管道',
})

<TreeSelect
  value={selected.value}
  treeData={treeData}
  labelInValue
  treeDefaultExpandAll
  onChange={nextValue => {
    selected.value = (nextValue as TreeSelectLabeledValue | null) ?? null
  }}
/>
`,Ge=`import { ref } from '@rue-js/rue'
import TreeSelect, { type TreeSelectDataNode, type TreeSelectValue } from '@rue-js/design'

const value = ref<string | null>(null)
const expandedKeys = ref<TreeSelectValue[]>([])
const treeData = ref<TreeSelectDataNode[]>([
  { title: '按需加载目录', value: 'async-root', isLeaf: false },
])

const loadData = async (node: TreeSelectDataNode) => {
  if (node.value !== 'async-root') return

  treeData.value = [
    {
      title: '按需加载目录',
      value: 'async-root',
      isLeaf: false,
      children: [
        { title: '实验看板', value: 'async-dashboard' },
        { title: '巡检报告', value: 'async-report' },
        { title: '回归清单', value: 'async-checklist' },
      ],
    },
  ]
}

<TreeSelect
  value={value.value}
  treeExpandedKeys={expandedKeys.value}
  treeData={treeData.value}
  allowClear
  loadData={loadData}
  onTreeExpand={nextKeys => {
    expandedKeys.value = nextKeys
  }}
  onChange={nextValue => {
    value.value = nextValue == null ? null : String(nextValue)
  }}
/>
`,Ke=`import { ref } from '@rue-js/rue'
import TreeSelect, { type TreeSelectDataNode } from '@rue-js/design'

const treeData: TreeSelectDataNode[] = [
  {
    title: '应用集群',
    value: 'apps',
    children: [
      { title: '生产环境', value: 'prod' },
      { title: '预发环境', value: 'stage' },
      { title: '开发环境', value: 'dev' },
    ],
  },
]

const value = ref('prod')

<TreeSelect
  value={value.value}
  treeData={treeData}
  prefix={<span className="badge badge-neutral badge-sm">ENV</span>}
  suffix={<span className="text-xs opacity-60">可清空</span>}
  variant="filled"
  status="warning"
  allowClear
  treeDefaultExpandAll
  onChange={nextValue => {
    value.value = String(nextValue ?? '')
  }}
/>
`,qe=[{prop:`allowClear`,description:`追加清空按钮，适合单选、多选和勾选模式统一收敛到一个入口`,type:`boolean | { clearIcon?: any }`,defaultValue:`false`},{prop:`fieldNames`,description:`映射 label、value、children、key 与 simple mode 的 id / pId 字段`,type:`TreeSelectFieldNames`,defaultValue:`{ title, value, children, key }`},{prop:`labelInValue`,description:`把回填值组织为 { value, key, label, halfChecked } 结构`,type:`boolean`,defaultValue:`false`},{prop:`loadData`,description:`展开未加载节点时触发异步加载，适合目录、权限树、远端分类场景`,type:`(node) => Promise<any> | void`,defaultValue:`-`},{prop:`maxCount`,description:`限制多选 / 勾选模式下最多展示并回填多少个节点`,type:`number`,defaultValue:`-`},{prop:`multiple`,description:`多选模式，已选项会回填为标签列表`,type:`boolean`,defaultValue:`false`},{prop:`showCheckedStrategy`,description:`控制 treeCheckable 时的回填策略，支持 SHOW_ALL / SHOW_PARENT / SHOW_CHILD`,type:`TreeSelectShowCheckedStrategy`,defaultValue:`SHOW_CHILD`},{prop:`showSearch`,description:`开启搜索输入；对象模式可配置 autoClearSearchValue、filterTreeNode 与 onSearch`,type:`boolean | TreeSelectShowSearchConfig`,defaultValue:`单选 false / 多选 true`},{prop:`treeCheckable`,description:`把树节点切到 checkbox 模式，适合权限树、发布范围、分类选择`,type:`boolean`,defaultValue:`false`},{prop:`treeData`,description:`树数据源，title / value / children 为常用字段，value 在整棵树里需要唯一`,type:`TreeSelectDataNode[]`,defaultValue:`[]`},{prop:`treeDataSimpleMode`,description:`接收扁平结构树数据，并通过 id / pId 自动恢复层级`,type:`boolean | { id?: string; pId?: string; rootPId?: string | number | null }`,defaultValue:`false`},{prop:`treeDefaultExpandAll / treeExpandedKeys`,description:`控制树默认展开和受控展开，便于做大树分层浏览`,type:`boolean / TreeSelectValue[]`,defaultValue:`false / -`},{prop:`treeNodeFilterProp`,description:`搜索命中用的字段，常见设置是 title 或自定义 label 字段`,type:`string`,defaultValue:`value`},{prop:`variant / status`,description:`使用 Rue 输入类组件的视觉语义，支持 filled、borderless、underlined 与 warning/error`,type:`'outlined' | 'filled' | 'borderless' | 'underlined' / 'warning' | 'error'`,defaultValue:`'outlined' / -`}],Je=()=>{let{basicValue:r,noClearValue:i,simpleValue:a,multipleValue:o,multipleOpen:s,checkableValue:c,checkableOpen:d,semanticValue:g,shellValue:v,asyncValue:S,asyncExpandedKeys:C,asyncTreeData:ee,loadAsyncTree:te,tabs:T}=w(`useSetup:0:0`,()=>m(()=>{let e=w(`ref:1:0`,()=>n(`docs`)),t=w(`ref:1:1`,()=>n(`docs`)),r=w(`ref:1:2`,()=>n(`workflow`)),i=w(`ref:1:3`,()=>n([`analytics`,`minutes`])),a=w(`ref:1:4`,()=>n(!1)),o=w(`ref:1:5`,()=>n([`build`,`quality`])),s=w(`ref:1:6`,()=>n(!1)),c=w(`ref:1:7`,()=>n({value:`release`,key:`release`,label:`发布管道`})),l=w(`ref:1:8`,()=>n(`prod`)),u=w(`ref:1:9`,()=>n(null)),d=w(`ref:1:10`,()=>n([])),f=w(`ref:1:11`,()=>n([{title:`按需加载目录`,value:`async-root`,isLeaf:!1}]));return{basicValue:e,noClearValue:t,simpleValue:r,multipleValue:i,multipleOpen:a,checkableValue:o,checkableOpen:s,semanticValue:c,shellValue:l,asyncValue:u,asyncExpandedKeys:d,asyncTreeData:f,loadAsyncTree:async e=>{e.value===`async-root`&&(f.value=[{title:`按需加载目录`,value:`async-root`,isLeaf:!1,children:[{title:`实验看板`,value:`async-dashboard`},{title:`巡检报告`,value:`async-report`},{title:`回归清单`,value:`async-checklist`}]}])},tabs:{basic:w(`ref:1:12`,()=>n(`preview`)),noClear:w(`ref:1:13`,()=>n(`preview`)),simple:w(`ref:1:14`,()=>n(`preview`)),multiple:w(`ref:1:15`,()=>n(`preview`)),checkable:w(`ref:1:16`,()=>n(`preview`)),semantic:w(`ref:1:17`,()=>n(`preview`)),async:w(`ref:1:18`,()=>n(`preview`)),shell:w(`ref:1:19`,()=>n(`preview`))}}}));return u(n=>{let m=f(),w=x(`rue:component:anchor`);return e(m,w),p(y(k,{children:u(()=>{let n=f(),u=_(`div`,n);e(n,u),h(u,`max-w-none prose prose-sm md:prose-base`);let m=_(`h1`,u);e(u,m),e(m,l(`TreeSelect 树选择`));let w=_(`p`,u);e(u,w),h(w,`text-sm mt-3 mb-3`),e(w,l(`TreeSelect 适合“下拉选择 + 树结构浏览”同时存在的输入场景，比如目录、组织架构、权限树、资源分类和发布范围。 视觉使用 Rue 的 input / badge / base 色阶体系，能力覆盖 treeData、simple mode、多选、 勾选、语义值、异步加载和 filled / warning 等核心场景。`));let E=_(`div`,u);e(u,E),h(E,`not-prose mt-8 space-y-2`);let k=_(`h2`,E);e(E,k),h(k,`text-2xl font-semibold`),e(k,l(`基础能力`));let j=_(`p`,E);e(E,j),h(j,`text-sm text-base-content/70`),e(j,l(`先把单选、搜索和清空打稳，再把 simple mode、多选与勾选这些更接近业务配置面的能力接进来。`));let ne=x(`rue:component:anchor`);e(u,ne),t(()=>{let e=y(A,{title:`Basic`,summary:`单选、搜索、默认展开与 allowClear 的组合，是目录选择最常见的入口。`,tab:T.basic,preview:D(`div`,{className:`card border border-base-200/80 bg-base-100 shadow-sm`,children:O(`div`,{className:`card-body gap-3`,children:[D(V,{value:r.value,treeData:Fe,treeDefaultExpandAll:!0,showSearch:!0,treeNodeFilterProp:`title`,allowClear:!0,placeholder:`选择一个树节点`,onChange:e=>{r.value=String(H(e)??``)}}),O(`div`,{className:`text-sm text-base-content/70`,children:[`当前节点：`,r.value||`未选择`]})]})}),code:ze});b(()=>p(e,u,ne))});let M=x(`rue:component:anchor`);e(u,M),t(()=>{let e=y(A,{title:`Without allowClear`,summary:`未开启 allowClear 时，只保持选择交互，不显示 selector 右侧的清空入口。`,tab:T.noClear,preview:D(`div`,{className:`card border border-base-200/80 bg-base-100 shadow-sm`,children:O(`div`,{className:`card-body gap-3`,children:[D(V,{value:i.value,treeData:Fe,treeDefaultExpandAll:!0,onChange:e=>{i.value=String(H(e)??``)}}),O(`div`,{className:`text-sm text-base-content/70`,children:[`当前节点：`,i.value||`未选择`]})]})}),code:Be});b(()=>p(e,u,M))});let re=x(`rue:component:anchor`);e(u,re),t(()=>{let e=y(A,{title:`Simple Mode`,summary:`扁平树数据直接接入，适合后端给的是 id / pId 结构时减少前置整理成本。`,tab:T.simple,preview:D(`div`,{className:`card border border-base-200/80 bg-base-100 shadow-sm`,children:O(`div`,{className:`card-body grid gap-4 lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`,children:[O(`div`,{className:`grid gap-3`,children:[D(V,{value:a.value,treeData:Re,treeDataSimpleMode:{id:`nodeId`,pId:`parentId`,rootPId:0},fieldNames:{value:`code`,label:`name`,key:`code`},treeDefaultExpandAll:!0,showSearch:!0,treeNodeFilterProp:`title`,allowClear:!0,onChange:e=>{a.value=String(H(e)??``)}}),O(`div`,{className:`text-sm text-base-content/70`,children:[`当前目标：`,a.value||`未选择`]})]}),D(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`,children:`这类接口在 CMS、流程平台、低代码配置里很常见。只要给出 id / pId / value / title 映射，就能直接恢复成可搜索树。`})]})}),code:Ve});b(()=>p(e,u,re))});let N=x(`rue:component:anchor`);e(u,N),t(()=>{let e=y(A,{title:`Multiple`,summary:`多选模式默认以标签回填，适合通知订阅、面板订阅、资源批量绑定。`,tab:T.multiple,preview:D(`div`,{className:`card border border-base-200/80 bg-base-100 shadow-sm`,children:O(`div`,{className:`card-body gap-3`,children:[D(V,{value:o.value,open:s.value,treeData:Ie,multiple:!0,treeDefaultExpandAll:!0,allowClear:!0,maxTagCount:2,placeholder:`选择多个项目`,onOpenChange:e=>{s.value=e},onChange:(e,t,n)=>{o.value=Pe(e),n.clear||(s.value=!0)}}),O(`div`,{className:`text-sm text-base-content/70`,children:[`已选：`,o.value.join(` / `)||`未选择`]})]})}),code:He});b(()=>p(e,u,N))});let P=x(`rue:component:anchor`);e(u,P),t(()=>{let e=y(A,{title:`Checkable`,summary:`勾选树会把多选语义进一步贴近权限树和发布范围；默认 SHOW_CHILD 会直接回填实际勾选的子节点。`,tab:T.checkable,preview:D(`div`,{className:`card border border-base-200/80 bg-base-100 shadow-sm`,children:O(`div`,{className:`card-body grid gap-4 lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`,children:[O(`div`,{className:`grid gap-3`,children:[D(V,{value:c.value,open:d.value,treeData:Fe,treeCheckable:!0,maxTagCount:2,maxTagPlaceholder:`...`,allowClear:!0,treeDefaultExpandAll:!0,onOpenChange:e=>{d.value=e},onChange:(e,t,n)=>{c.value=Pe(e),n.clear||(d.value=!0)}}),O(`div`,{className:`text-sm text-base-content/70`,children:[`回填：`,c.value.join(` / `)||`未选择`]})]}),O(`ul`,{className:`list rounded-box border border-base-300 bg-base-200/40 p-4 text-sm`,children:[O(`li`,{className:`list-row`,children:[D(`span`,{className:`font-medium`,children:`策略`}),D(`span`,{className:`list-col-grow text-base-content/70`,children:`当前示例使用默认 SHOW_CHILD，选了哪些子节点就回填哪些子节点，更适合精确范围选择。`})]}),O(`li`,{className:`list-row`,children:[D(`span`,{className:`font-medium`,children:`切换`}),D(`span`,{className:`list-col-grow text-base-content/70`,children:`如果业务更想要紧凑展示，可以把 showCheckedStrategy 改成 TreeSelect.SHOW_PARENT，让完整分组选中时折叠成父标签。`})]}),O(`li`,{className:`list-row`,children:[D(`span`,{className:`font-medium`,children:`回填`}),D(`span`,{className:`list-col-grow text-base-content/70`,children:`当前示例最多展示两个标签，更多已选项会用 ... 收起，避免 selector 被撑成两排。`})]})]})]})}),code:Ue});b(()=>p(e,u,P))});let F=_(`div`,u);e(u,F),h(F,`not-prose mt-10 space-y-2`);let I=_(`h2`,F);e(F,I),h(I,`text-2xl font-semibold`),e(I,l(`高级能力`));let L=_(`p`,F);e(F,L),h(L,`text-sm text-base-content/70`),e(L,l(`语义值、异步加载和外观变体覆盖配置类面板里的常见选择场景。`));let ie=x(`rue:component:anchor`);e(u,ie),t(()=>{let e=y(A,{title:`Label In Value`,summary:`当业务既要 value 也要 label 时，直接回填结构体会更顺手。`,tab:T.semantic,preview:D(`div`,{className:`card border border-base-200/80 bg-base-100 shadow-sm`,children:O(`div`,{className:`card-body grid gap-4 lg:grid-cols-[minmax(0,22rem),1fr] lg:items-start`,children:[D(`div`,{className:`grid gap-3`,children:D(V,{value:g.value,treeData:Fe,labelInValue:!0,treeDefaultExpandAll:!0,onChange:e=>{g.value=e??null}})}),O(`div`,{className:`rounded-box border border-base-300 bg-base-200/40 p-4 text-sm text-base-content/70`,children:[`当前结构：`,D(`code`,{children:JSON.stringify(g.value)})]})]})}),code:We});b(()=>p(e,u,ie))});let ae=x(`rue:component:anchor`);e(u,ae),t(()=>{let e=y(A,{title:`Async Load`,summary:`展开未加载分支时触发 loadData，适合远端目录、权限树和超大分类树。`,tab:T.async,preview:D(`div`,{className:`card border border-base-200/80 bg-base-100 shadow-sm`,children:O(`div`,{className:`card-body grid gap-4 lg:grid-cols-[minmax(0,22rem),1fr] lg:items-start`,children:[O(`div`,{className:`grid gap-3`,children:[D(V,{value:S.value,treeExpandedKeys:C.value,treeData:ee.value,allowClear:!0,loadData:te,onTreeExpand:e=>{C.value=e},onChange:e=>{S.value=String(H(e)??``)}}),O(`div`,{className:`text-sm text-base-content/70`,children:[`当前节点：`,S.value||`尚未选择`]})]}),D(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`,children:`第一次展开“按需加载目录”时会把子节点注入到 treeData，这个模式适合服务端分页目录和按需权限树。`})]})}),code:Ge});b(()=>p(e,u,ae))});let oe=x(`rue:component:anchor`);e(u,oe),t(()=>{let e=y(A,{title:`Variant and Status`,summary:`TreeSelect 也使用 Rue 当前输入体系的 filled / warning 视觉语义。`,tab:T.shell,preview:D(`div`,{className:`card border border-base-200/80 bg-base-100 shadow-sm`,children:O(`div`,{className:`card-body grid gap-4 md:grid-cols-2`,children:[O(`div`,{className:`grid gap-3`,children:[D(V,{value:v.value,treeData:Le,prefix:D(`span`,{className:`badge badge-neutral badge-sm`,children:`ENV`}),suffix:D(`span`,{className:`text-xs opacity-60`,children:`可清空`}),variant:`filled`,status:`warning`,allowClear:!0,treeDefaultExpandAll:!0,onChange:e=>{v.value=String(H(e)??``)}}),O(`div`,{className:`text-sm text-base-content/70`,children:[`当前环境：`,v.value||`未选择`]})]}),D(`div`,{className:`rounded-box border border-base-300 bg-base-200/40 p-4 text-sm text-base-content/70`,children:`prefix / suffix 让 TreeSelect 能自然落进环境切换、租户切换和带状态提醒的配置表单里。`})]})}),code:Ke});b(()=>p(e,u,oe))});let R=_(`div`,u);e(u,R),h(R,`not-prose mt-10 space-y-4`);let z=_(`h2`,R);e(R,z),h(z,`text-2xl font-semibold`),e(z,l(`API`));let se=x(`rue:component:anchor`);return e(R,se),t(()=>{let e=y(Ne,{rows:qe});b(()=>p(e,R,se))}),n})}),m,w),m})};export{Je as default};