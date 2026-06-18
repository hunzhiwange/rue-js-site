import{$ as e,Ht as t,J as n,Lt as r,Q as i,X as a,Xt as o,Z as s,a as c,at as l,c as u,dt as d,et as f,ft as p,gt as m,i as h,l as g,lt as _,mt as v,pt as y,q as b,qt as x,r as ee,s as S,st as C,t as w}from"./vapor-runtime-iQZthBPQ.js";import{a as T,n as E,t as D}from"./vapor-helpers-vapor-BjKHCvOa.js";import{a as O,i as k}from"./persistentSidebarPlayground-BfF7yM0K.js";import{r as A}from"./SidebarPlaygroundDesign-BcHYLGe4.js";import{t as j}from"./PreviewBlock-DJFn4Hia.js";var M=`SHOW_ALL`,te=`SHOW_PARENT`,N=`SHOW_CHILD`,ne={xs:`input-xs`,sm:`input-sm`,md:``,lg:`input-lg`,xl:`input-xl`,small:`input-sm`,medium:``,middle:``,large:`input-lg`},P=0,F={label:`title`,value:`value`,children:`children`,key:`key`,disabled:`disabled`,selectable:`selectable`,checkable:`checkable`,disableCheckbox:`disableCheckbox`,isLeaf:`isLeaf`,className:`className`,icon:`icon`,id:`id`,pId:`pId`},I=(...e)=>e.filter(Boolean).join(` `),L=e=>typeof e==`object`&&!!e&&!Array.isArray(e),R=e=>typeof e==`string`||typeof e==`number`,re=e=>e==null?[]:Array.isArray(e)?e:[e],ie=e=>`${typeof e}:${String(e)}`,ae=e=>{if(R(e))return e;if(L(e)&&R(e.value))return e.value},z=e=>re(e).flatMap(e=>{let t=ae(e);return t===void 0?[]:[t]}),B=(e,t,n)=>e[n?.[t]??F[t]],oe=(e,t)=>B(e,`label`,t)??e.title??e.label??B(e,`value`,t)??B(e,`key`,t),se=e=>typeof e==`string`||typeof e==`number`?String(e):``,ce=(e,t,n)=>{if(!t)return e;let r=L(t)?t:void 0,i=r?.id??n?.id??F.id,a=r?.pId??n?.pId??F.pId,o=r?.rootPId??0,s=n?.children??F.children,c=new Map;e.forEach((e,t)=>{let n=e[i]??e.value??e.key??t;c.set(n,{...e,[s]:[]})});let l=[];return e.forEach((e,t)=>{let n=e[i]??e.value??e.key??t,r=e[a],u=c.get(n);if(!u)return;if(r==null||r===o||!c.has(r)){l.push(u);return}let d=c.get(r);if(!d){l.push(u);return}let f=d[s]??[];f.push(u),d[s]=f}),l},le=(e,t)=>{let n=[],r={},i=(e,a,o,s)=>{let c=B(e,`children`,t),l=B(e,`value`,t),u=B(e,`key`,t),d=B(e,`isLeaf`,t),f=R(l)?l:R(u)?u:o,p=oe(e,t),m=ie(f),h=Array.isArray(c)?c.map((e,t)=>i(e,a+1,`${o}-${t}`,m)):[],g={key:String(u??f),value:f,valueKey:m,label:p,labelText:se(p),depth:a,parentValueKey:s,children:h,raw:e,disabled:!!B(e,`disabled`,t),selectable:B(e,`selectable`,t)!==!1,checkable:B(e,`checkable`,t)!==!1,disableCheckbox:!!B(e,`disableCheckbox`,t),isLeaf:d===!0?!0:d===!1?!1:h.length===0,className:B(e,`className`,t),icon:B(e,`icon`,t)};return n.push(g),r[m]=g,g};return{roots:e.map((e,t)=>i(e,0,`node-${t}`)),flat:n,byValueKey:r}},ue=e=>{let t=[],n=e=>{!e.disabled&&e.checkable&&!e.disableCheckbox&&t.push(e.valueKey),e.children.forEach(e=>n(e))};return n(e),t},de=e=>{let t=[];return e.children.forEach(e=>{ue(e).forEach(e=>t.push(e))}),t},fe=(e,t,n)=>{let r=new Set;return e.forEach(e=>{let i=t[e];if(!i)return;if(n){r.add(e);return}let a=de(i);if(a.length>0){a.forEach(e=>r.add(e));return}!i.disabled&&i.checkable&&!i.disableCheckbox&&r.add(e)}),r},pe=(e,t,n)=>{let r=new Set,i=new Set,a={},o=e=>{let s=!e.disabled&&e.checkable&&!e.disableCheckbox,c=e.children.map(e=>o(e)).filter(e=>e.participates),l=t.has(e.valueKey),u=l,d=!1;if(!n&&c.length>0){let e=c.every(e=>e.checked),t=c.some(e=>e.checked||e.halfChecked);u=l||e,d=!u&&t}let f=s||c.length>0,p={checked:u,halfChecked:d,participates:f};return a[e.valueKey]=p,u&&s&&r.add(e.valueKey),d&&s&&i.add(e.valueKey),p};return e.forEach(e=>o(e)),{checkedKeys:r,halfCheckedKeys:i,stateMap:a}},me=(e,t,n)=>{let r=[],i=(e,a)=>{let o=t[e.valueKey];if(!o)return;let s=e.children.map(e=>t[e.valueKey]).filter(Boolean).some(e=>e.checked||e.halfChecked),c=!e.disabled&&e.checkable&&!e.disableCheckbox&&o.checked;if(n===`SHOW_ALL`){c&&r.push(e),e.children.forEach(e=>i(e,a));return}if(n===`SHOW_PARENT`){if(c&&s&&!a){r.push(e);return}if(c&&!s&&!a){r.push(e);return}e.children.forEach(e=>i(e,a||c));return}if(c&&!s){r.push(e);return}if(c&&e.children.length===0){r.push(e);return}e.children.forEach(e=>i(e,a))};return e.forEach(e=>i(e,!1)),r},V=(e,t)=>t&&e.raw[t]!==void 0?e.raw[t]:e.label,he=(e,t,n)=>({value:e.value,key:e.value,label:V(e,n),halfChecked:t,disabled:e.disabled}),ge=(e,t,n,r,i)=>{let a=n?e.map(e=>he(e,r.has(e.valueKey),i)):e.map(e=>e.value);return t?a:a[0]??null},_e=(e,t,n)=>{let r=e.map(e=>V(e,n));return t?r:r[0]??null},ve=(e,t,n)=>String(t===`title`||t===`label`?V(e,n)??``:t===`value`?e.value:e.raw[t]??``),ye=(e,t)=>[String(e.value??``),String(V(e,t)??``)],be=(e,t,n,r)=>{if(!n){let n=[],r=e=>{n.push({node:e,matched:!1}),t.has(e.valueKey)&&e.children.forEach(e=>r(e))};return e.forEach(e=>r(e)),n}let i=[],a=(e,t)=>{i.push({node:e,matched:t}),e.children.forEach(e=>a(e,!1))},o=e=>{let t=r(e),n=e.children.flatMap(e=>o(e));if(!t&&n.length===0)return[];if(t){let t=[{node:e,matched:!0}];return e.children.forEach(e=>{let n=[],r=(e,t)=>{n.push({node:e,matched:t}),e.children.forEach(e=>r(e,!1))};r(e,!1),t.push(...n)}),t}return[{node:e,matched:!1},...n]};return e.forEach(e=>{i.push(...o(e))}),i},xe=(e,t)=>{let n=e?.[t];if(typeof n==`string`)return n;if(L(n)&&typeof n.root==`string`)return n.root},Se=(e,t)=>{let n=e?.[t];if(L(n)&&!(`root`in n))return n;if(L(n?.root))return n.root},Ce=(e,t)=>{let n=typeof e==`string`||typeof e==`number`?String(e):e;return typeof n!=`string`||!t||n.length<=t?n:`${n.slice(0,t)}...`},we=e=>typeof e==`string`||typeof e==`number`?String(e):e==null||e===!1?``:String(e),Te=e=>g(t=>{let r=i(`span`,t);l(r,`aria-hidden`,`true`),o(()=>{C(r,I(`inline-flex h-4 w-4 items-center justify-center text-base-content/55 transition-transform duration-150`,e.expanded&&`rotate-90`,e.hidden&&`opacity-0`))});let a=i(`svg`,r);n(r,a),l(a,`viewBox`,`0 0 20 20`),l(a,`fill`,`none`),C(a,`h-4 w-4`);let s=i(`path`,a);return n(a,s),l(s,`d`,`M7.5 5.5L12.5 10L7.5 14.5`),l(s,`stroke`,`currentColor`),l(s,`stroke-width`,`1.8`),l(s,`stroke-linecap`,`round`),l(s,`stroke-linejoin`,`round`),r}),Ee=()=>g(e=>{let t=i(`span`,e);return C(t,`loading loading-spinner loading-xs text-base-content/55`),l(t,`aria-hidden`,`true`),t}),De=()=>g(e=>{let t=i(`svg`,e);l(t,`viewBox`,`0 0 20 20`),l(t,`fill`,`none`),C(t,`block h-4 w-4`);let r=i(`path`,t);return n(t,r),l(r,`d`,`M6 6L14 14M14 6L6 14`),l(r,`stroke`,`currentColor`),l(r,`stroke-width`,`1.8`),l(r,`stroke-linecap`,`round`),t}),Oe=e=>e.icon!==void 0&&e.icon!==null?e.icon:g(e=>{let t=s(),r=a(`rue:component:anchor`);return n(t,r),S(w(De,{}),t,r),t}),ke=r=>{let{handleClose:c}=T(`useSetup:0:0`,()=>x(()=>({handleClose:e=>{r.onRemove(r.node,e)}})));return r.tagRender?r.tagRender({label:r.label,value:r.node.value,disabled:r.node.disabled,closable:!r.disabled,node:r.node,onClose:c}):g(u=>{let f=i(`span`,u);o(()=>{l(f,`data-rue-tree-select-tag-value`,String(r.node.valueKey))}),o(()=>{C(f,I(`badge badge-outline inline-flex max-w-full items-center gap-1 rounded-md px-2 py-1 text-xs font-medium leading-none`,r.tagClassName))}),o(()=>{let e=r.tagStyle;d(f,e)});let p=i(`span`,f);n(f,p),C(p,`truncate`);let m=a(`rue:slot:anchor`);n(p,m),o(()=>{let e=r.label;t(()=>S(e,p,m))});let h=a(`rue:slot:anchor`);return n(f,h),o(()=>{let a=r.disabled?``:g(()=>{let t=s(),a=i(`button`,t);return n(t,a),l(a,`type`,`button`),C(a,`btn btn-ghost btn-xs inline-flex h-4 min-h-0 w-4 shrink-0 items-center justify-center rounded-full p-0 text-center leading-none`),o(()=>{l(a,`aria-label`,String(`移除 ${we(r.rawLabel??r.node.value)}`))}),b(a,`click`,c),n(a,e(`×`)),t});t(()=>S(a,f,h))}),f})},Ae=e=>e.loadingNode?g(e=>{let t=s(),r=a(`rue:component:anchor`);return n(t,r),S(w(Ee,{}),t,r),t}):typeof e.switcherIcon==`function`?e.switcherIcon({expanded:e.expanded,loading:e.loadingNode,selected:e.selected,checked:e.state.checked,halfChecked:e.halfChecked,node:e.node}):e.switcherIcon===void 0?g(r=>{let i=s(),c=a(`rue:component:anchor`);return n(i,c),o(()=>{let n=w(Te,{expanded:e.expanded,hidden:!e.canExpand});t(()=>S(n,i,c))}),i}):e.switcherIcon,je=e=>g(r=>{let c=i(`div`,r);o(()=>{l(c,`data-rue-tree-select-node`,String(e.node.valueKey))}),o(()=>{C(c,I(`group flex items-center gap-1 rounded-lg py-1.5 pr-2`,e.matched&&`bg-primary/8`,e.treeLine&&e.node.depth>0&&`border-l border-base-300/60`,e.node.className))}),o(()=>{d(c,{paddingLeft:`${e.node.depth*16+4}px`})});let u=i(`button`,c);n(c,u),l(u,`type`,`button`),C(u,`inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md hover:bg-base-200 disabled:cursor-not-allowed`),o(()=>{_(u,!e.canExpand||e.mergedDisabled||e.node.disabled)}),o(()=>{l(u,`aria-label`,String(e.expanded?`折叠节点`:`展开节点`))}),b(u,`click`,t=>{e.onExpand(e.node,t)});let p=a(`rue:component:anchor`);n(u,p),o(()=>{let n=w(Ae,{node:e.node,state:e.state,selected:e.selected,halfChecked:e.halfChecked,expanded:e.expanded,loadingNode:e.loadingNode,canExpand:e.canExpand,switcherIcon:e.switcherIcon});t(()=>S(n,u,p))});let m=a(`rue:slot:anchor`);n(c,m),o(()=>{let r=e.treeCheckable?g(()=>{let t=s(),r=i(`button`,t);n(t,r),l(r,`type`,`button`),l(r,`role`,`checkbox`),o(()=>{l(r,`aria-checked`,String(e.halfChecked?`mixed`:e.state.checked?`true`:`false`))}),o(()=>{_(r,e.checkboxDisabled)}),o(()=>{C(r,I(`inline-flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors duration-150`,e.state.checked||e.halfChecked?`border-primary bg-primary text-primary-content`:`border-base-content/40 bg-base-100 text-base-content/0`,e.checkboxDisabled&&`opacity-45`))}),b(r,`click`,t=>{e.onToggle(e.node,t)});let a=f(r);return n(r,a),o(()=>{y(a,e.halfChecked?`−`:e.state.checked?`✓`:``)}),t}):``;t(()=>S(r,c,m))});let h=i(`button`,c);n(c,h),l(h,`type`,`button`),o(()=>{C(h,I(`flex min-w-0 flex-1 items-center gap-1 rounded-md px-1.5 py-1 text-left text-sm transition-colors duration-150`,e.selected?`bg-primary/12 text-primary`:`text-base-content hover:bg-base-200/70`,(e.mergedDisabled||e.node.disabled||!e.node.selectable)&&`cursor-not-allowed opacity-55`))}),o(()=>{_(h,e.mergedDisabled||e.node.disabled||!e.node.selectable)}),b(h,`click`,t=>{e.onToggle(e.node,t)});let v=a(`rue:slot:anchor`);return n(h,v),o(()=>{let n=e.label;t(()=>S(n,h,v))}),c}),H=f=>{let{__rue_rest_omit_0:y,__rue_rest_omit_1:O,__rue_rest_omit_2:k,__rue_rest_omit_3:A,__rue_rest_omit_4:j,__rue_rest_omit_5:M,__rue_rest_omit_6:te,__rue_rest_omit_7:F,__rue_rest_omit_8:re,__rue_rest_omit_9:ae,__rue_rest_omit_10:B,__rue_rest_omit_11:oe,__rue_rest_omit_12:se,__rue_rest_omit_13:de,__rue_rest_omit_14:Te,__rue_rest_omit_15:Ee,__rue_rest_omit_16:De,__rue_rest_omit_17:Ae,__rue_rest_omit_18:H,__rue_rest_omit_19:Me,__rue_rest_omit_20:U,__rue_rest_omit_21:Ne,__rue_rest_omit_22:Pe,__rue_rest_omit_23:Fe,__rue_rest_omit_24:Ie,__rue_rest_omit_25:Le,__rue_rest_omit_26:Re,__rue_rest_omit_27:ze,__rue_rest_omit_28:Be,__rue_rest_omit_29:Ve,__rue_rest_omit_30:He,__rue_rest_omit_31:Ue,__rue_rest_omit_32:We,__rue_rest_omit_33:Ge,__rue_rest_omit_34:Ke,__rue_rest_omit_35:qe,__rue_rest_omit_36:Je,__rue_rest_omit_37:Ye,__rue_rest_omit_38:Xe,__rue_rest_omit_39:Ze,__rue_rest_omit_40:W,__rue_rest_omit_41:Qe,__rue_rest_omit_42:$e,__rue_rest_omit_43:et,__rue_rest_omit_44:tt,__rue_rest_omit_45:nt,__rue_rest_omit_46:rt,__rue_rest_omit_47:it,__rue_rest_omit_48:at,__rue_rest_omit_49:ot,__rue_rest_omit_50:st,__rue_rest_omit_51:ct,__rue_rest_omit_52:G,__rue_rest_omit_53:K,__rue_rest_omit_54:lt,__rue_rest_omit_55:q,__rue_rest_omit_56:ut,__rue_rest_omit_57:dt,__rue_rest_omit_58:ft,__rue_rest_omit_59:pt,__rue_rest_omit_60:mt,__rue_rest_omit_61:ht,__rue_rest_omit_62:gt,__rue_rest_omit_63:_t,__rue_rest_omit_64:vt,rest:yt,rootRef:bt,instanceId:xt,renderVersion:St,uncontrolledValue:Ct,internalOpen:wt,initialTree:Tt,initialExpandedKeys:Et,uncontrolledExpandedKeys:Dt,uncontrolledLoadedKeys:J,internalSearch:Y,loadingNodeKeys:Ot,treeBodyScrollTop:kt,staleTreeNodeCleanupVersion:At,searchConfig:jt,mergedMultiple:Mt,mergedLabelInValue:Nt,mergedDisabled:X,allowClearConfig:Pt,mergedShowSearch:Ft,selectorSemanticClassName:It,selectorSemanticStyle:Lt,popupSemanticClassName:Rt,popupSemanticStyle:zt,treeSemanticClassName:Bt,treeSemanticStyle:Vt,searchSemanticClassName:Z,searchSemanticStyle:Q,tagSemanticClassName:Ht,tagSemanticStyle:Ut,rootSemanticClassName:Wt,rootSemanticStyle:Gt,getNormalizedTree:Kt,getMergedSearchValue:qt,getMergedOpen:Jt,getExpandedValueKeys:$,getExpandedKeySet:Yt,getLoadedValueKeys:Xt,getLoadedKeySet:Zt,getSelectionSnapshot:Qt,filterProp:$t,filterLogic:en,matchesNode:tn,visibleTagCount:nn,getVisibleNodes:rn,buildSelectionPreview:an,getClearButtonVisible:on,requestRender:sn,setMergedOpen:cn,prepareKeepMultiplePopupOpen:ln,setMergedSearchValue:un,setExpandedKeys:dn,setLoadedKeys:fn,canLoadNodeData:pn,canExpandNode:mn,emitSelectionCallbacks:hn,commitValue:gn,removeNodeFromSelection:_n,clearSelection:vn,handleNodeToggle:yn,handleExpandToggle:bn,handleRootMouseDown:xn,handleSelectorClick:Sn,rememberTreeBodyScroll:Cn,restoreTreeBodyScroll:wn,cleanupStaleTags:Tn,cleanupStaleTreeNodes:En,resolvedSizeClass:Dn,selectorClass:On,popupClass:kn,popupSizingStyle:An,selectionState:jn,displayNodes:Mn,tagDisplayNodes:Nn,hasValue:Pn,visibleTagNodes:Fn,omittedTagNodes:In,mergedOpenState:Ln,mergedSearchValueState:Rn,showSearchInput:zn,clearButtonVisible:Bn,visibleNodes:Vn,expandedKeySetState:Hn,loadedKeySetState:Un}=T(`useSetup:0:0:dup1`,()=>x(()=>{let{value:e,defaultValue:t,treeData:n,fieldNames:i,treeDataSimpleMode:a,multiple:o,treeCheckable:s,treeCheckStrictly:l,showCheckedStrategy:u,labelInValue:d,showSearch:p,searchValue:g,filterTreeNode:_,treeNodeFilterProp:v,placeholder:y,allowClear:b,clearLabel:x,notFoundContent:ee,disabled:S,loading:C,open:w,defaultOpen:E,onOpenChange:D,treeDefaultExpandAll:O,treeDefaultExpandedKeys:k,treeExpandedKeys:A,treeLoadedKeys:j,onTreeExpand:M,loadData:te,maxCount:F,maxTagCount:re,maxTagPlaceholder:ae,maxTagTextLength:B,listHeight:oe,placement:se,popupMatchSelectWidth:de,size:V,status:Ce,variant:we,prefix:Te,suffix:Ee,suffixIcon:De,showArrow:Oe,switcherIcon:ke,treeTitleRender:Ae,treeNodeLabelProp:je,treeLine:H,onSearch:Me,onChange:U,onSelect:Ne,onDeselect:Pe,onClear:Fe,onPopupScroll:Ie,className:Le,style:Re,selectorClassName:ze,selectorStyle:Be,popupClassName:Ve,popupStyle:He,dropdownClassName:Ue,dropdownStyle:We,classNames:Ge,styles:Ke,tagRender:qe,children:Je,...Ye}=f,Xe=T(`ref:1:0`,()=>r(void 0)),Ze=T(`ref:1:1`,()=>r(`rue-tree-select-${P++}`)),W=T(`ref:1:2`,()=>r(0)),Qe=T(`ref:1:3`,()=>r(f.defaultValue??(f.treeCheckable||f.multiple?[]:null))),$e=T(`ref:1:4`,()=>r(!!f.defaultOpen)),et=le(ce(f.treeData===void 0?[]:f.treeData,f.treeDataSimpleMode,f.fieldNames),f.fieldNames),tt=f.treeDefaultExpandAll?et.flat.filter(e=>e.children.length>0).map(e=>e.value):f.treeDefaultExpandedKeys??[],nt=T(`ref:1:5`,()=>r(tt)),rt=T(`ref:1:6`,()=>r([])),it=T(`ref:1:7`,()=>r(``)),at=T(`ref:1:8`,()=>r([])),ot=T(`ref:1:9`,()=>r(0)),st=T(`ref:1:10`,()=>r(0)),ct=T(`computed:1:11`,()=>m(()=>L(f.showSearch)?f.showSearch:void 0)),G=ct,K=!!f.multiple||!!f.treeCheckable,lt=!!f.labelInValue||!!f.treeCheckStrictly,q=!!f.disabled||!!f.loading,ut=T(`computed:1:12`,()=>m(()=>L(f.allowClear)?f.allowClear:f.allowClear?{}:null)),dt=ut,ft=T(`computed:1:13`,()=>m(()=>typeof f.showSearch==`boolean`?f.showSearch:f.showSearch===void 0?K:!0)),pt=ft,mt=T(`computed:1:14`,()=>m(()=>xe(f.classNames,`selector`))),ht=mt,gt=T(`computed:1:15`,()=>m(()=>Se(f.styles,`selector`))),_t=T(`computed:1:16`,()=>m(()=>xe(f.classNames,`popup`))),vt=_t,yt=T(`computed:1:17`,()=>m(()=>Se(f.styles,`popup`))),bt=T(`computed:1:18`,()=>m(()=>xe(f.classNames,`tree`))),xt=T(`computed:1:19`,()=>m(()=>Se(f.styles,`tree`))),St=T(`computed:1:20`,()=>m(()=>xe(f.classNames,`search`))),Ct=T(`computed:1:21`,()=>m(()=>Se(f.styles,`search`))),wt=T(`computed:1:22`,()=>m(()=>xe(f.classNames,`tag`))),Tt=T(`computed:1:23`,()=>m(()=>Se(f.styles,`tag`))),Et=T(`computed:1:24`,()=>m(()=>xe(f.classNames,`root`))),Dt=T(`computed:1:25`,()=>m(()=>Se(f.styles,`root`))),J=()=>le(ce(f.treeData===void 0?[]:f.treeData,f.treeDataSimpleMode,f.fieldNames),f.fieldNames),Y=()=>G.get()?.searchValue??f.searchValue??(pt.get()?it.value:``),Ot=()=>f.open??$e.value,kt=()=>z(f.treeExpandedKeys??nt.value),At=()=>new Set(kt().map(ie)),jt=()=>z(f.treeLoadedKeys??rt.value),Mt=()=>new Set(jt().map(ie)),Nt=()=>{let e=J(),t=z(f.value===void 0?Qe.value:f.value).map(ie),n=new Set(t),r=f.treeCheckable?fe(t,e.byValueKey,!!f.treeCheckStrictly):n,i=f.treeCheckable?pe(e.roots,r,!!f.treeCheckStrictly):{checkedKeys:n,halfCheckedKeys:new Set,stateMap:Object.fromEntries(e.flat.map(e=>[e.valueKey,{checked:n.has(e.valueKey),halfChecked:!1,participates:!0}]))},a=f.treeCheckable?me(e.roots,i.stateMap,f.showCheckedStrategy===void 0?N:f.showCheckedStrategy):t.map(t=>e.byValueKey[t]).filter(Boolean);return{currentValueKeys:t,currentValueKeySet:n,derivedCheckState:i,displayNodes:a,displayNodeKeySet:new Set(a.map(e=>e.valueKey))}},X=T(`computed:1:26`,()=>m(()=>G.get()?.treeNodeFilterProp??f.treeNodeFilterProp)),Pt=X,Ft=T(`computed:1:27`,()=>m(()=>G.get()?.filterTreeNode??f.filterTreeNode??!0)),It=Ft,Lt=(e,t)=>{if(!t)return!0;if(typeof It.get()==`function`)return It.get()(t,e);if(It.get()===!1)return!0;let n=t.toLowerCase();return(Pt.get()?[ve(e,Pt.get(),f.treeNodeLabelProp===void 0?`title`:f.treeNodeLabelProp)]:ye(e,f.treeNodeLabelProp===void 0?`title`:f.treeNodeLabelProp)).some(e=>e.toLowerCase().includes(n))},Rt=typeof f.maxTagCount==`number`&&f.maxTagCount>=0?Math.max(0,f.maxTagCount):void 0,zt=()=>{let e=J(),t=Y();return be(e.roots,At(),t,e=>Lt(e,t))},Bt=(e,t)=>{let n=new Set(e.map(e=>e.valueKey));return{currentValueKeySet:n,derivedCheckState:t??{checkedKeys:n,halfCheckedKeys:new Set,stateMap:Object.fromEntries(J().flat.map(e=>[e.valueKey,{checked:n.has(e.valueKey),halfChecked:!1,participates:!0}]))},displayNodes:e,displayNodeKeySet:new Set(e.map(e=>e.valueKey))}},Vt=e=>{let t=e?.length??Nt().displayNodes.length;return!!dt.get()&&!q&&t>0},Z=()=>{W.value+=1,nn()},Q=(e,t)=>{let n=Ot()!==e;f.open===void 0&&$e.value!==e&&($e.value=e,Z()),n&&f.onOpenChange&&f.onOpenChange(e)},Ht=()=>{f.open===void 0&&Q(!0)},Ut=(e,t)=>{let n=!1;if(G.get()?.searchValue===void 0&&f.searchValue===void 0){if(it.value===e)return;it.value=e,n=!0}G.get()?.onSearch&&G.get().onSearch(e),f.onSearch&&f.onSearch(e),n&&(Z(),an(zt().map(e=>e.node.valueKey)))},Wt=e=>{f.treeExpandedKeys===void 0&&(nt.value=e,Z()),f.onTreeExpand&&f.onTreeExpand(e)},Gt=e=>{f.treeLoadedKeys===void 0&&(rt.value=e,Z())},Kt=(e,t=Mt())=>!!f.loadData&&!e.isLeaf&&e.children.length===0&&!t.has(e.valueKey),qt=(e,t=Mt())=>e.children.length>0||Kt(e,t),Jt=(e,t,n,r)=>{let i=new Set(e.map(e=>e.valueKey)),a=new Set(t.map(e=>e.valueKey));f.onDeselect&&e.filter(e=>!a.has(e.valueKey)).forEach(e=>{f.onDeselect(lt?he(e,r.has(e.valueKey),f.treeNodeLabelProp===void 0?`title`:f.treeNodeLabelProp):e.value,e,{...n,selected:!1,checked:!1})}),f.onSelect&&t.filter(e=>!i.has(e.valueKey)).forEach(e=>{f.onSelect(lt?he(e,r.has(e.valueKey),f.treeNodeLabelProp===void 0?`title`:f.treeNodeLabelProp):e.value,e,{...n,selected:!0,checked:!0})})},$=(e,t,n)=>{let r=J(),i=Nt(),a=ge(e,K,lt,n,f.treeNodeLabelProp===void 0?`title`:f.treeNodeLabelProp),o=_e(e,K,f.treeNodeLabelProp===void 0?`title`:f.treeNodeLabelProp);f.value===void 0&&(Qe.value=a,Z()),Jt(i.displayNodes,e,{...t,displayNodes:e,halfCheckedKeys:Array.from(n).map(e=>r.byValueKey[e]?.value).filter(R)},n),f.onChange&&f.onChange(a,o,{...t,displayNodes:e,halfCheckedKeys:Array.from(n).map(e=>r.byValueKey[e]?.value).filter(R),checkedNodes:f.treeCheckable?r.flat.filter(t=>e.some(e=>e.valueKey===t.valueKey)):e}),Z(),rn(e.map(e=>e.valueKey))},Yt=(e,t)=>{tn(t),t.preventDefault(),t.stopPropagation();let n=Nt(),r=J();if(f.treeCheckable){let t=fe(n.currentValueKeys,r.byValueKey,!!f.treeCheckStrictly);f.treeCheckStrictly?t.delete(e.valueKey):ue(e).forEach(e=>t.delete(e));let i=pe(r.roots,t,!!f.treeCheckStrictly),a=me(r.roots,i.stateMap,f.showCheckedStrategy===void 0?N:f.showCheckedStrategy);return $(a,{triggerNode:e,triggerValue:e.value,checked:!1},i.halfCheckedKeys),Bt(a,i)}let i=n.displayNodes.filter(t=>t.valueKey!==e.valueKey);return $(i,{triggerNode:e,triggerValue:e.value,selected:!1},new Set),Bt(i)},Xt=e=>{tn(e),e.preventDefault(),e.stopPropagation(),f.onClear&&f.onClear(e),Y()&&Ut(``),$([],{clear:!0,selected:!1,checked:!1,triggerNode:null,triggerValue:null},new Set)},Zt=(e,t)=>{if(tn(t),t.preventDefault(),t.stopPropagation(),q||e.disabled)return null;if(!K&&!f.treeCheckable&&Kt(e))return Qt(e,t),Nt();let n=Nt(),r=J();if(f.treeCheckable){let t=fe(n.currentValueKeys,r.byValueKey,!!f.treeCheckStrictly),i=n.derivedCheckState.checkedKeys.has(e.valueKey);if(f.treeCheckStrictly)i?t.delete(e.valueKey):t.add(e.valueKey);else{let n=ue(e);i?n.forEach(e=>t.delete(e)):n.forEach(e=>t.add(e))}let a=pe(r.roots,t,!!f.treeCheckStrictly),o=me(r.roots,a.stateMap,f.showCheckedStrategy===void 0?N:f.showCheckedStrategy);return!i&&f.maxCount&&o.length>f.maxCount?null:(Ht(),$(o,{triggerNode:e,triggerValue:e.value,checked:!i,selected:!i},a.halfCheckedKeys),(G.get()?.autoClearSearchValue??!0)&&Y()&&Ut(``),Q(!0),Bt(o,a))}if(K){let t=n.displayNodes.some(t=>t.valueKey===e.valueKey)?n.displayNodes.filter(t=>t.valueKey!==e.valueKey):[...n.displayNodes,e];return!n.displayNodeKeySet.has(e.valueKey)&&f.maxCount&&t.length>f.maxCount?null:(Ht(),$(t,{triggerNode:e,triggerValue:e.value,selected:!n.displayNodeKeySet.has(e.valueKey)},new Set),(G.get()?.autoClearSearchValue??!0)&&Y()&&Ut(``),Q(!0),Bt(t))}return $([e],{triggerNode:e,triggerValue:e.value,selected:!0},new Set),Y()&&Ut(``),Q(!1,{selectionOverride:[e]}),Bt([e])},Qt=(e,t)=>{tn(t),t.preventDefault(),t.stopPropagation();let n=Mt();if(q||e.disabled||!qt(e,n))return;let r=At(),i=jt(),a=Y(),o=J(),s=new Set(r),c=!r.has(e.valueKey);c?s.add(e.valueKey):s.delete(e.valueKey),Wt(Array.from(s).map(e=>o.byValueKey[e]?.value).filter(R)),c&&f.loadData&&!a&&!n.has(e.valueKey)&&!at.value.includes(e.valueKey)&&!e.isLeaf&&e.children.length===0&&(at.value=[...at.value,e.valueKey],Z(),Promise.resolve(f.loadData(e)).then(()=>{Gt(Array.from(new Set([...i,e.value])))}).finally(()=>{at.value=at.value.filter(t=>t!==e.valueKey),Z()}))},$t=e=>{e.stopPropagation(),q&&e.preventDefault()},en=()=>{q||Q(!Ot())},tn=e=>{let t=e.currentTarget?.closest(`[role="tree"]`);t&&(ot.value=t.scrollTop)},nn=()=>{setTimeout(()=>{let e=document.querySelector(`[data-rue-tree-select-popup="true"] [role="tree"]`);e&&e.scrollTop!==ot.value&&(e.scrollTop=ot.value)},0)},rn=e=>{setTimeout(()=>{let t=new Set(e);document.querySelector(`[data-rue-tree-select-id="${Ze.value}"]`)?.querySelectorAll(`[data-rue-tree-select-tag-value]`).forEach(e=>{let n=e.getAttribute(`data-rue-tree-select-tag-value`);n&&!t.has(n)&&e.remove()})},0)},an=e=>{st.value+=1;let t=st.value;setTimeout(()=>{if(t!==st.value)return;let n=0;document.querySelector(`[data-rue-tree-select-id="${Ze.value}"]`)?.querySelectorAll(`[data-rue-tree-select-node]`).forEach(t=>{let r=t.getAttribute(`data-rue-tree-select-node`);if(r===e[n]){n+=1;return}r&&t.remove()})},0)};h(()=>{if(typeof document>`u`)return;let e=e=>{let t=e.target,n=Xe.value;n&&t&&n.contains(t)||Q(!1)},t=e=>{e.key===`Escape`&&Q(!1)};document.addEventListener(`mousedown`,e),document.addEventListener(`keydown`,t),c(()=>{document.removeEventListener(`mousedown`,e),document.removeEventListener(`keydown`,t)})});let on=ne[f.size===void 0?`md`:f.size]??``,sn=T(`computed:1:28`,()=>m(()=>I(`input relative flex w-full items-center gap-2 px-3 text-left transition-shadow duration-150`,on,f.status===`error`&&`input-error`,f.status===`warning`&&`input-warning`,(f.variant===void 0?`outlined`:f.variant)===`filled`&&`bg-base-200 border-base-300 shadow-none`,(f.variant===void 0?`outlined`:f.variant)===`borderless`&&`border-transparent bg-transparent px-0 shadow-none`,(f.variant===void 0?`outlined`:f.variant)===`underlined`&&`rounded-none border-x-0 border-t-0 bg-transparent px-0 shadow-none`,q?`cursor-not-allowed opacity-60`:`cursor-pointer`,ht.get(),f.selectorClassName))),cn=T(`computed:1:29`,()=>m(()=>I(`absolute z-40 overflow-hidden rounded-box border border-base-300 bg-base-100 shadow-[0_24px_70px_-36px_rgba(15,23,42,0.45)]`,(f.placement===void 0?`bottomLeft`:f.placement).startsWith(`top`)?`bottom-full mb-2`:`top-full mt-2`,(f.placement===void 0?`bottomLeft`:f.placement).endsWith(`Right`)?`right-0`:`left-0`,vt.get(),f.popupClassName,f.dropdownClassName))),ln=T(`computed:1:30`,()=>m(()=>(f.popupMatchSelectWidth===void 0?!0:f.popupMatchSelectWidth)===!1?{minWidth:`18rem`}:typeof(f.popupMatchSelectWidth===void 0?!0:f.popupMatchSelectWidth)==`number`?{width:`${f.popupMatchSelectWidth===void 0?!0:f.popupMatchSelectWidth}px`}:{minWidth:`100%`})),un=T(`computed:1:31`,()=>m(()=>(W.value,Nt()))),dn=T(`computed:1:32`,()=>m(()=>un.get().displayNodes)),fn=T(`computed:1:33`,()=>m(()=>K||f.treeCheckable?dn.get():[])),pn=T(`computed:1:34`,()=>m(()=>dn.get().length>0)),mn=T(`computed:1:35`,()=>m(()=>Rt===void 0?fn.get():fn.get().slice(0,Rt))),hn=T(`computed:1:36`,()=>m(()=>Rt===void 0?[]:fn.get().slice(Rt))),gn=T(`computed:1:37`,()=>m(()=>(W.value,Ot())));return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:n,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,__rue_rest_omit_6:s,__rue_rest_omit_7:l,__rue_rest_omit_8:u,__rue_rest_omit_9:d,__rue_rest_omit_10:p,__rue_rest_omit_11:g,__rue_rest_omit_12:_,__rue_rest_omit_13:v,__rue_rest_omit_14:y,__rue_rest_omit_15:b,__rue_rest_omit_16:x,__rue_rest_omit_17:ee,__rue_rest_omit_18:S,__rue_rest_omit_19:C,__rue_rest_omit_20:w,__rue_rest_omit_21:E,__rue_rest_omit_22:D,__rue_rest_omit_23:O,__rue_rest_omit_24:k,__rue_rest_omit_25:A,__rue_rest_omit_26:j,__rue_rest_omit_27:M,__rue_rest_omit_28:te,__rue_rest_omit_29:F,__rue_rest_omit_30:re,__rue_rest_omit_31:ae,__rue_rest_omit_32:B,__rue_rest_omit_33:oe,__rue_rest_omit_34:se,__rue_rest_omit_35:de,__rue_rest_omit_36:V,__rue_rest_omit_37:Ce,__rue_rest_omit_38:we,__rue_rest_omit_39:Te,__rue_rest_omit_40:Ee,__rue_rest_omit_41:De,__rue_rest_omit_42:Oe,__rue_rest_omit_43:ke,__rue_rest_omit_44:Ae,__rue_rest_omit_45:je,__rue_rest_omit_46:H,__rue_rest_omit_47:Me,__rue_rest_omit_48:U,__rue_rest_omit_49:Ne,__rue_rest_omit_50:Pe,__rue_rest_omit_51:Fe,__rue_rest_omit_52:Ie,__rue_rest_omit_53:Le,__rue_rest_omit_54:Re,__rue_rest_omit_55:ze,__rue_rest_omit_56:Be,__rue_rest_omit_57:Ve,__rue_rest_omit_58:He,__rue_rest_omit_59:Ue,__rue_rest_omit_60:We,__rue_rest_omit_61:Ge,__rue_rest_omit_62:Ke,__rue_rest_omit_63:qe,__rue_rest_omit_64:Je,rest:Ye,rootRef:Xe,instanceId:Ze,renderVersion:W,uncontrolledValue:Qe,internalOpen:$e,initialTree:et,initialExpandedKeys:tt,uncontrolledExpandedKeys:nt,uncontrolledLoadedKeys:rt,internalSearch:it,loadingNodeKeys:at,treeBodyScrollTop:ot,staleTreeNodeCleanupVersion:st,searchConfig:ct,mergedMultiple:K,mergedLabelInValue:lt,mergedDisabled:q,allowClearConfig:ut,mergedShowSearch:ft,selectorSemanticClassName:mt,selectorSemanticStyle:gt,popupSemanticClassName:_t,popupSemanticStyle:yt,treeSemanticClassName:bt,treeSemanticStyle:xt,searchSemanticClassName:St,searchSemanticStyle:Ct,tagSemanticClassName:wt,tagSemanticStyle:Tt,rootSemanticClassName:Et,rootSemanticStyle:Dt,getNormalizedTree:J,getMergedSearchValue:Y,getMergedOpen:Ot,getExpandedValueKeys:kt,getExpandedKeySet:At,getLoadedValueKeys:jt,getLoadedKeySet:Mt,getSelectionSnapshot:Nt,filterProp:X,filterLogic:Ft,matchesNode:Lt,visibleTagCount:Rt,getVisibleNodes:zt,buildSelectionPreview:Bt,getClearButtonVisible:Vt,requestRender:Z,setMergedOpen:Q,prepareKeepMultiplePopupOpen:Ht,setMergedSearchValue:Ut,setExpandedKeys:Wt,setLoadedKeys:Gt,canLoadNodeData:Kt,canExpandNode:qt,emitSelectionCallbacks:Jt,commitValue:$,removeNodeFromSelection:Yt,clearSelection:Xt,handleNodeToggle:Zt,handleExpandToggle:Qt,handleRootMouseDown:$t,handleSelectorClick:en,rememberTreeBodyScroll:tn,restoreTreeBodyScroll:nn,cleanupStaleTags:rn,cleanupStaleTreeNodes:an,resolvedSizeClass:on,selectorClass:sn,popupClass:cn,popupSizingStyle:ln,selectionState:un,displayNodes:dn,tagDisplayNodes:fn,hasValue:pn,visibleTagNodes:mn,omittedTagNodes:hn,mergedOpenState:gn,mergedSearchValueState:T(`computed:1:38`,()=>m(()=>(W.value,Y()))),showSearchInput:T(`computed:1:39`,()=>m(()=>pt.get()&&(K||f.treeCheckable||gn.get()||!pn.get()))),clearButtonVisible:T(`computed:1:40`,()=>m(()=>Vt(dn.get()))),visibleNodes:T(`computed:1:41`,()=>m(()=>(W.value,zt()))),expandedKeySetState:T(`computed:1:42`,()=>m(()=>(W.value,At()))),loadedKeySetState:T(`computed:1:43`,()=>m(()=>(W.value,Mt())))}}));return g(r=>{let c=i(`div`,r);o(()=>{v(c,yt)});let m=D(c,()=>e=>{bt.value=e??void 0});ee(()=>{m()}),l(c,`data-rue-tree-select-root`,`true`),o(()=>{l(c,`data-rue-tree-select-id`,String(xt.value))}),o(()=>{C(c,I(`relative`,Wt.get(),f.className))}),o(()=>{d(c,{...Gt.get(),...f.style})}),b(c,`mousedown`,xn);let h=i(`div`,c);n(c,h),l(h,`data-rue-tree-select-selector`,`true`),o(()=>{C(h,On.get())}),o(()=>{d(h,{...Lt.get(),...f.selectorStyle})}),l(h,`role`,`combobox`),o(()=>{l(h,`aria-expanded`,String(Ln.get()))}),o(()=>{l(h,`aria-disabled`,String(X))}),l(h,`aria-haspopup`,`tree`),b(h,`click`,Sn);let y=a(`rue:slot:anchor`);n(h,y),o(()=>{let e=f.prefix===void 0?``:g(()=>{let e=s(),r=i(`span`,e);n(e,r),C(r,`flex shrink-0 items-center text-base-content/65`);let c=a(`rue:slot:anchor`);return n(r,c),o(()=>{let e=f.prefix;t(()=>S(e,r,c))}),e});t(()=>S(e,h,y))});let x=i(`div`,h);n(h,x),C(x,`flex min-w-0 flex-1 flex-wrap items-center gap-1.5 self-stretch py-1`);let T=a(`rue:list:start`),O=a(`rue:list:end`);n(x,T),n(x,O);let k=new Map;o(()=>{k=E({items:Fn.get()||[],getKey:(e,t)=>e.valueKey,elements:k,parent:x,before:O,start:T,renderItem:(e,t,n,r,i)=>{let a=V(e,f.treeNodeLabelProp===void 0?`title`:f.treeNodeLabelProp),o=Ce(a,f.maxTagTextLength);u(w(ke,{key:e.valueKey,node:e,rawLabel:a,label:o,disabled:X,tagRender:f.tagRender,tagClassName:Ht.get(),tagStyle:Ut.get(),onRemove:_n}),t,n,r)}})}),n(x,e(` `));let A=a(`rue:slot:anchor`);n(x,A),o(()=>{let e=In.get().length>0?g(()=>{let e=s(),r=i(`span`,e);n(e,r),C(r,`badge badge-ghost inline-flex max-w-full items-center rounded-md px-2 py-1 text-xs leading-none`);let c=a(`rue:slot:anchor`);return n(r,c),o(()=>{let e=typeof f.maxTagPlaceholder==`function`?f.maxTagPlaceholder(In.get()):f.maxTagPlaceholder??`+${In.get().length}`;t(()=>S(e,r,c))}),e}):``;t(()=>S(e,x,A))}),n(x,e(` `));let j=a(`rue:slot:anchor`);n(x,j),o(()=>{let e=zn.get()?g(()=>{let e=s(),t=i(`input`,e);return n(e,t),l(t,`data-rue-tree-select-search`,`true`),o(()=>{p(t,Rn.get())}),o(()=>{_(t,X)}),o(()=>{l(t,`placeholder`,String(we(f.placeholder??`请选择`)))}),o(()=>{C(t,I(`min-w-[5rem] flex-1 border-0 bg-transparent px-0 py-0 text-sm leading-5 outline-none placeholder:text-base-content/40`,Z.get()))}),o(()=>{d(t,Q.get())}),b(t,`click`,e=>{e.stopPropagation(),X||cn(!0)}),b(t,`focus`,()=>{X||cn(!0)}),b(t,`input`,e=>{let t=e.target;cn(!0),un(t.value,{syncSelector:!1}),Promise.resolve().then(()=>{document.querySelector(`[data-rue-tree-select-search="true"]`)?.focus()})}),e}):g(()=>{let e=s(),r=i(`span`,e);n(e,r),o(()=>{C(r,Pn.get()&&!Mt&&!f.treeCheckable?`flex flex-1 items-center truncate text-sm leading-5`:`flex flex-1 items-center truncate text-sm leading-5 text-base-content/40`)});let c=a(`rue:slot:anchor`);return n(r,c),o(()=>{let e=Pn.get()&&!Mt&&!f.treeCheckable?V(Mn.get()[0],f.treeNodeLabelProp===void 0?`title`:f.treeNodeLabelProp):f.placeholder??`请选择`;t(()=>S(e,r,c))}),e});t(()=>S(e,x,j))});let M=i(`button`,h);n(h,M),l(M,`type`,`button`),o(()=>{C(M,I(`btn btn-ghost btn-xs btn-circle h-7 min-h-0 w-7 shrink-0 items-center justify-center self-center p-0 leading-none text-base-content/55 hover:text-base-content`,Bn.get()?`inline-flex`:`hidden`))}),o(()=>{l(M,`aria-label`,String(f.clearLabel===void 0?`清空选择`:f.clearLabel))}),o(()=>{_(M,!Bn.get())}),b(M,`click`,vn);let te=a(`rue:component:anchor`);n(M,te),o(()=>{let e=w(Oe,{icon:Pt.get()?.clearIcon});t(()=>S(e,M,te))});let N=a(`rue:slot:anchor`);n(h,N),o(()=>{let e=f.suffix===void 0?``:g(()=>{let e=s(),r=i(`span`,e);n(e,r),C(r,`flex shrink-0 items-center text-base-content/65`);let c=a(`rue:slot:anchor`);return n(r,c),o(()=>{let e=f.suffix;t(()=>S(e,r,c))}),e});t(()=>S(e,h,N))}),n(h,e(` `));let ne=a(`rue:slot:anchor`);n(h,ne),o(()=>{let e=f.showArrow===void 0||f.showArrow?g(()=>{let e=s(),r=i(`span`,e);n(e,r),C(r,`flex shrink-0 items-center`);let c=a(`rue:slot:anchor`);return n(r,c),o(()=>{let e=f.suffixIcon??g(()=>{let e=s(),t=i(`span`,e);n(e,t),l(t,`data-rue-tree-select-arrow`,`true`),l(t,`aria-hidden`,`true`),o(()=>{C(t,I(`inline-flex h-4 w-4 items-center justify-center text-base-content/55 transition-transform duration-150`,Ln.get()&&`rotate-180`))});let r=i(`svg`,t);n(t,r),l(r,`viewBox`,`0 0 20 20`),l(r,`fill`,`none`),C(r,`h-4 w-4`);let a=i(`path`,r);return n(r,a),l(a,`d`,`M5.5 7.5L10 12.5L14.5 7.5`),l(a,`stroke`,`currentColor`),l(a,`stroke-width`,`1.8`),l(a,`stroke-linecap`,`round`),l(a,`stroke-linejoin`,`round`),e});t(()=>S(e,r,c))}),e}):``;t(()=>S(e,h,ne))});let P=i(`div`,c);n(c,P),l(P,`data-rue-tree-select-popup`,`true`),o(()=>{l(P,`aria-hidden`,String(Ln.get()?`false`:`true`))}),o(()=>{v(P,{hidden:Ln.get()?void 0:!0})}),o(()=>{C(P,kn.get())}),o(()=>{d(P,{...An.get(),...zt.get(),...f.popupStyle,...f.dropdownStyle})});let F=i(`div`,P);n(P,F),l(F,`role`,`tree`),o(()=>{C(F,I(`overflow-auto p-2`,Bt.get()))}),o(()=>{d(F,{maxHeight:`${f.listHeight===void 0?320:f.listHeight}px`,...Vt.get()})}),b(F,`scroll`,e=>{kt.value=e.target.scrollTop,f.onPopupScroll&&f.onPopupScroll(e)});let L=a(`rue:slot:anchor`);n(F,L),o(()=>{let e=Vn.get().length?g(()=>{let e=s(),t=a(`rue:list:start`),r=a(`rue:list:end`);n(e,t),n(e,r);let i=new Map;return o(()=>{i=E({items:Vn.get()||[],getKey:(e,t)=>e.node.valueKey,elements:i,parent:t.parentNode,before:r,start:t,renderItem:(e,t,n,r,i)=>{u(w(je,{key:e.node.valueKey,node:e.node,matched:e.matched,state:jn.get().derivedCheckState.stateMap[e.node.valueKey]??{checked:!1,halfChecked:!1,participates:!0},selected:f.treeCheckable?(jn.get().derivedCheckState.stateMap[e.node.valueKey]??{checked:!1,halfChecked:!1,participates:!0}).checked:jn.get().currentValueKeySet.has(e.node.valueKey),halfChecked:f.treeCheckable?(jn.get().derivedCheckState.stateMap[e.node.valueKey]??{checked:!1,halfChecked:!1,participates:!0}).halfChecked:!1,expanded:Rn.get()?!0:Hn.get().has(e.node.valueKey),loadingNode:Ot.value.includes(e.node.valueKey),canExpand:mn(e.node,Un.get()),checkboxDisabled:X||e.node.disabled||e.node.disableCheckbox||!e.node.checkable,label:f.treeTitleRender?f.treeTitleRender(e.node):V(e.node,f.treeNodeLabelProp===void 0?`title`:f.treeNodeLabelProp),mergedDisabled:X,treeCheckable:f.treeCheckable,treeLine:f.treeLine,switcherIcon:f.switcherIcon,onExpand:bn,onToggle:yn}),t,n,r)}})}),e}):g(()=>{let e=s(),r=i(`div`,e);n(e,r),C(r,`rounded-md px-3 py-8 text-center text-sm text-base-content/55`);let c=a(`rue:slot:anchor`);return n(r,c),o(()=>{let e=f.notFoundContent??`暂无匹配项`;t(()=>S(e,r,c))}),e});t(()=>S(e,F,L))});let R=a(`rue:children:anchor`);return n(c,R),o(()=>{let e=f.children;t(()=>S(e,c,R))}),c})};H.SHOW_ALL=M,H.SHOW_PARENT=te,H.SHOW_CHILD=N;var Me=r=>g(c=>{let u=i(`div`,c);C(u,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let d=i(`table`,u);n(u,d),C(d,`table table-zebra`);let f=i(`thead`,d);n(d,f);let p=i(`tr`,f);n(f,p);let m=i(`th`,p);n(p,m),n(m,e(`属性`));let h=i(`th`,p);n(p,h),n(h,e(`说明`));let _=i(`th`,p);n(p,_),n(_,e(`类型`));let v=i(`th`,p);n(p,v),n(v,e(`默认值`));let y=i(`tbody`,d);n(d,y);let b=a(`rue:list:start`),x=a(`rue:list:end`);n(y,b),n(y,x);let ee=new Map;return o(()=>{ee=E({items:r.rows||[],getKey:(e,t)=>e.prop,elements:ee,parent:y,before:x,singleRoot:!0,trackIndex:!1,start:b,renderItem:(e,r,c,u,d)=>{S(g(()=>{let r=s(),c=i(`tr`,r);n(r,c),o(()=>{l(c,`key`,String(e.prop))});let u=i(`td`,c);n(c,u);let d=i(`code`,u);n(u,d);let f=a(`rue:slot:anchor`);n(d,f),o(()=>{let n=e.prop;t(()=>S(n,d,f))});let p=i(`td`,c);n(c,p);let m=a(`rue:slot:anchor`);n(p,m),o(()=>{let n=e.description;t(()=>S(n,p,m))});let h=i(`td`,c);n(c,h);let g=i(`code`,h);n(h,g);let _=a(`rue:slot:anchor`);n(g,_),o(()=>{let n=e.type;t(()=>S(n,g,_))});let v=i(`td`,c);n(c,v);let y=i(`code`,v);n(v,y);let b=a(`rue:slot:anchor`);return n(y,b),o(()=>{let n=e.defaultValue;t(()=>S(n,y,b))}),r}),r,c)}})}),u}),U=e=>Array.isArray(e)?U(e[0]):e&&typeof e==`object`&&`value`in e?e.value:e??null,Ne=e=>{if(!Array.isArray(e)){let t=U(e);return t==null?[]:[t]}return e.map(e=>U(e)).filter(e=>e!=null)},Pe=[{title:`产品平台`,value:`platform`,children:[{title:`文档中心`,value:`docs`},{title:`资源目录`,value:`assets`},{title:`组件市场`,value:`components`}]},{title:`工程效率`,value:`engineering`,children:[{title:`构建链路`,value:`build`},{title:`质量门禁`,value:`quality`},{title:`发布管道`,value:`release`}]},{title:`增长分析`,value:`growth`,children:[{title:`实验看板`,value:`experiment`},{title:`归因报表`,value:`attribution`},{title:`留存漏斗`,value:`retention`}]}],Fe=[{title:`协作面板`,value:`workspace`,children:[{title:`日报汇总`,value:`daily`},{title:`设计交接`,value:`handoff`},{title:`会议纪要`,value:`minutes`}]},{title:`数据服务`,value:`data`,children:[{title:`分析订阅`,value:`analytics`},{title:`实验指标`,value:`metrics`},{title:`异常告警`,value:`alerts`}]}],Ie=[{title:`应用集群`,value:`apps`,children:[{title:`生产环境`,value:`prod`},{title:`预发环境`,value:`stage`},{title:`开发环境`,value:`dev`}]}],Le=[{nodeId:1,parentId:0,code:`workspace`,name:`Workspace`},{nodeId:2,parentId:1,code:`workflow`,name:`Workflow board`},{nodeId:3,parentId:1,code:`briefs`,name:`Briefs`},{nodeId:4,parentId:2,code:`review`,name:`Design review`},{nodeId:5,parentId:2,code:`release`,name:`Release checklist`}],Re=`import { ref } from '@rue-js/rue'
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
`,ze=`import { ref } from '@rue-js/rue'
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
`,Be=`import { ref } from '@rue-js/rue'
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
`,Ve=`import { ref } from '@rue-js/rue'
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
`,He=`import { ref } from '@rue-js/rue'
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
`,Ue=`import { ref } from '@rue-js/rue'
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
`,We=`import { ref } from '@rue-js/rue'
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
`,Ge=`import { ref } from '@rue-js/rue'
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
`,Ke=[{prop:`allowClear`,description:`追加清空按钮，适合单选、多选和勾选模式统一收敛到一个入口`,type:`boolean | { clearIcon?: any }`,defaultValue:`false`},{prop:`fieldNames`,description:`映射 label、value、children、key 与 simple mode 的 id / pId 字段`,type:`TreeSelectFieldNames`,defaultValue:`{ title, value, children, key }`},{prop:`labelInValue`,description:`把回填值升级为 { value, key, label, halfChecked } 结构`,type:`boolean`,defaultValue:`false`},{prop:`loadData`,description:`展开未加载节点时触发异步加载，适合目录、权限树、远端分类场景`,type:`(node) => Promise<any> | void`,defaultValue:`-`},{prop:`maxCount`,description:`限制多选 / 勾选模式下最多展示并回填多少个节点`,type:`number`,defaultValue:`-`},{prop:`multiple`,description:`多选模式，已选项会回填为标签列表`,type:`boolean`,defaultValue:`false`},{prop:`showCheckedStrategy`,description:`控制 treeCheckable 时的回填策略，支持 SHOW_ALL / SHOW_PARENT / SHOW_CHILD`,type:`TreeSelectShowCheckedStrategy`,defaultValue:`SHOW_CHILD`},{prop:`showSearch`,description:`开启搜索输入；对象模式可配置 autoClearSearchValue、filterTreeNode 与 onSearch`,type:`boolean | TreeSelectShowSearchConfig`,defaultValue:`单选 false / 多选 true`},{prop:`treeCheckable`,description:`把树节点切到 checkbox 模式，适合权限树、发布范围、分类选择`,type:`boolean`,defaultValue:`false`},{prop:`treeData`,description:`树数据源，title / value / children 为常用字段，value 在整棵树里需要唯一`,type:`TreeSelectDataNode[]`,defaultValue:`[]`},{prop:`treeDataSimpleMode`,description:`接收扁平结构树数据，并通过 id / pId 自动恢复层级`,type:`boolean | { id?: string; pId?: string; rootPId?: string | number | null }`,defaultValue:`false`},{prop:`treeDefaultExpandAll / treeExpandedKeys`,description:`控制树默认展开和受控展开，便于做大树分层浏览`,type:`boolean / TreeSelectValue[]`,defaultValue:`false / -`},{prop:`treeNodeFilterProp`,description:`搜索命中用的字段，常见设置是 title 或自定义 label 字段`,type:`string`,defaultValue:`value`},{prop:`variant / status`,description:`沿用 Rue 输入类组件的视觉语义，支持 filled、borderless、underlined 与 warning/error`,type:`'outlined' | 'filled' | 'borderless' | 'underlined' / 'warning' | 'error'`,defaultValue:`'outlined' / -`}],qe=()=>{let{basicValue:c,noClearValue:l,simpleValue:u,multipleValue:d,multipleOpen:f,checkableValue:p,checkableOpen:m,semanticValue:h,shellValue:_,asyncValue:v,asyncExpandedKeys:y,asyncTreeData:b,loadAsyncTree:ee,tabs:E}=T(`useSetup:0:0`,()=>x(()=>{let e=T(`ref:1:0`,()=>r(`docs`)),t=T(`ref:1:1`,()=>r(`docs`)),n=T(`ref:1:2`,()=>r(`workflow`)),i=T(`ref:1:3`,()=>r([`analytics`,`minutes`])),a=T(`ref:1:4`,()=>r(!1)),o=T(`ref:1:5`,()=>r([`build`,`quality`])),s=T(`ref:1:6`,()=>r(!1)),c=T(`ref:1:7`,()=>r({value:`release`,key:`release`,label:`发布管道`})),l=T(`ref:1:8`,()=>r(`prod`)),u=T(`ref:1:9`,()=>r(null)),d=T(`ref:1:10`,()=>r([])),f=T(`ref:1:11`,()=>r([{title:`按需加载目录`,value:`async-root`,isLeaf:!1}]));return{basicValue:e,noClearValue:t,simpleValue:n,multipleValue:i,multipleOpen:a,checkableValue:o,checkableOpen:s,semanticValue:c,shellValue:l,asyncValue:u,asyncExpandedKeys:d,asyncTreeData:f,loadAsyncTree:async e=>{e.value===`async-root`&&(f.value=[{title:`按需加载目录`,value:`async-root`,isLeaf:!1,children:[{title:`实验看板`,value:`async-dashboard`},{title:`巡检报告`,value:`async-report`},{title:`回归清单`,value:`async-checklist`}]}])},tabs:{basic:T(`ref:1:12`,()=>r(`preview`)),noClear:T(`ref:1:13`,()=>r(`preview`)),simple:T(`ref:1:14`,()=>r(`preview`)),multiple:T(`ref:1:15`,()=>r(`preview`)),checkable:T(`ref:1:16`,()=>r(`preview`)),semantic:T(`ref:1:17`,()=>r(`preview`)),async:T(`ref:1:18`,()=>r(`preview`)),shell:T(`ref:1:19`,()=>r(`preview`))}}}));return g(r=>{let x=s(),T=a(`rue:component:anchor`);return n(x,T),S(w(A,{children:g(()=>{let r=s(),g=i(`div`,r);n(r,g),C(g,`max-w-none prose prose-sm md:prose-base`);let x=i(`h1`,g);n(g,x),n(x,e(`TreeSelect 树选择`));let T=i(`p`,g);n(g,T),C(T,`text-sm mt-3 mb-3`),n(T,e(`TreeSelect 适合“下拉选择 + 树结构浏览”同时存在的输入场景，比如目录、组织架构、权限树、资源分类和发布范围。 这一版不照搬其他组件库的视觉，而是延续 Rue 的 input / badge / base 色阶体系，把 treeData、simple mode、多选、勾选、语义值、异步加载和 filled / warning 等核心面一次补齐。`));let D=i(`div`,g);n(g,D),C(D,`not-prose mt-8 space-y-2`);let A=i(`h2`,D);n(D,A),C(A,`text-2xl font-semibold`),n(A,e(`基础能力`));let M=i(`p`,D);n(D,M),C(M,`text-sm text-base-content/70`),n(M,e(`先把单选、搜索和清空打稳，再把 simple mode、多选与勾选这些更接近业务配置面的能力接进来。`));let te=a(`rue:component:anchor`);n(g,te),o(()=>{let e=w(j,{title:`Basic`,summary:`单选、搜索、默认展开与 allowClear 的组合，是目录选择最常见的入口。`,tab:E.basic,preview:k(`div`,{className:`card border border-base-200/80 bg-base-100 shadow-sm`,children:O(`div`,{className:`card-body gap-3`,children:[k(H,{value:c.value,treeData:Pe,treeDefaultExpandAll:!0,showSearch:!0,treeNodeFilterProp:`title`,allowClear:!0,placeholder:`选择一个树节点`,onChange:e=>{c.value=String(U(e)??``)}}),O(`div`,{className:`text-sm text-base-content/70`,children:[`当前节点：`,c.value||`未选择`]})]})}),code:Re});t(()=>S(e,g,te))});let N=a(`rue:component:anchor`);n(g,N),o(()=>{let e=w(j,{title:`Without allowClear`,summary:`未开启 allowClear 时，只保留选择交互，不显示 selector 右侧的清空入口。`,tab:E.noClear,preview:k(`div`,{className:`card border border-base-200/80 bg-base-100 shadow-sm`,children:O(`div`,{className:`card-body gap-3`,children:[k(H,{value:l.value,treeData:Pe,treeDefaultExpandAll:!0,onChange:e=>{l.value=String(U(e)??``)}}),O(`div`,{className:`text-sm text-base-content/70`,children:[`当前节点：`,l.value||`未选择`]})]})}),code:ze});t(()=>S(e,g,N))});let ne=a(`rue:component:anchor`);n(g,ne),o(()=>{let e=w(j,{title:`Simple Mode`,summary:`扁平树数据直接接入，适合后端给的是 id / pId 结构时减少前置整理成本。`,tab:E.simple,preview:k(`div`,{className:`card border border-base-200/80 bg-base-100 shadow-sm`,children:O(`div`,{className:`card-body grid gap-4 lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`,children:[O(`div`,{className:`grid gap-3`,children:[k(H,{value:u.value,treeData:Le,treeDataSimpleMode:{id:`nodeId`,pId:`parentId`,rootPId:0},fieldNames:{value:`code`,label:`name`,key:`code`},treeDefaultExpandAll:!0,showSearch:!0,treeNodeFilterProp:`title`,allowClear:!0,onChange:e=>{u.value=String(U(e)??``)}}),O(`div`,{className:`text-sm text-base-content/70`,children:[`当前目标：`,u.value||`未选择`]})]}),k(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`,children:`这类接口在 CMS、流程平台、低代码配置里很常见。只要给出 id / pId / value / title 映射，就能直接恢复成可搜索树。`})]})}),code:Be});t(()=>S(e,g,ne))});let P=a(`rue:component:anchor`);n(g,P),o(()=>{let e=w(j,{title:`Multiple`,summary:`多选模式默认以标签回填，适合通知订阅、面板订阅、资源批量绑定。`,tab:E.multiple,preview:k(`div`,{className:`card border border-base-200/80 bg-base-100 shadow-sm`,children:O(`div`,{className:`card-body gap-3`,children:[k(H,{value:d.value,open:f.value,treeData:Fe,multiple:!0,treeDefaultExpandAll:!0,allowClear:!0,maxTagCount:2,placeholder:`选择多个项目`,onOpenChange:e=>{f.value=e},onChange:(e,t,n)=>{d.value=Ne(e),n.clear||(f.value=!0)}}),O(`div`,{className:`text-sm text-base-content/70`,children:[`已选：`,d.value.join(` / `)||`未选择`]})]})}),code:Ve});t(()=>S(e,g,P))});let F=a(`rue:component:anchor`);n(g,F),o(()=>{let e=w(j,{title:`Checkable`,summary:`勾选树会把多选语义进一步贴近权限树和发布范围；默认 SHOW_CHILD 会直接回填实际勾选的子节点。`,tab:E.checkable,preview:k(`div`,{className:`card border border-base-200/80 bg-base-100 shadow-sm`,children:O(`div`,{className:`card-body grid gap-4 lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`,children:[O(`div`,{className:`grid gap-3`,children:[k(H,{value:p.value,open:m.value,treeData:Pe,treeCheckable:!0,maxTagCount:2,maxTagPlaceholder:`...`,allowClear:!0,treeDefaultExpandAll:!0,onOpenChange:e=>{m.value=e},onChange:(e,t,n)=>{p.value=Ne(e),n.clear||(m.value=!0)}}),O(`div`,{className:`text-sm text-base-content/70`,children:[`回填：`,p.value.join(` / `)||`未选择`]})]}),O(`ul`,{className:`list rounded-box border border-base-300 bg-base-200/40 p-4 text-sm`,children:[O(`li`,{className:`list-row`,children:[k(`span`,{className:`font-medium`,children:`策略`}),k(`span`,{className:`list-col-grow text-base-content/70`,children:`当前示例使用默认 SHOW_CHILD，选了哪些子节点就回填哪些子节点，更适合精确范围选择。`})]}),O(`li`,{className:`list-row`,children:[k(`span`,{className:`font-medium`,children:`切换`}),k(`span`,{className:`list-col-grow text-base-content/70`,children:`如果业务更想要紧凑展示，可以把 showCheckedStrategy 改成 TreeSelect.SHOW_PARENT，让完整分组选中时折叠成父标签。`})]}),O(`li`,{className:`list-row`,children:[k(`span`,{className:`font-medium`,children:`回填`}),k(`span`,{className:`list-col-grow text-base-content/70`,children:`当前示例最多展示两个标签，更多已选项会用 ... 收起，避免 selector 被撑成两排。`})]})]})]})}),code:He});t(()=>S(e,g,F))});let I=i(`div`,g);n(g,I),C(I,`not-prose mt-10 space-y-2`);let L=i(`h2`,I);n(I,L),C(L,`text-2xl font-semibold`),n(L,e(`高级能力`));let R=i(`p`,I);n(I,R),C(R,`text-sm text-base-content/70`),n(R,e(`语义值、异步加载和外观变体补到位之后，TreeSelect 就能覆盖绝大多数配置类面板的核心需求。`));let re=a(`rue:component:anchor`);n(g,re),o(()=>{let e=w(j,{title:`Label In Value`,summary:`当业务既要 value 也要 label 时，直接回填结构体会更顺手。`,tab:E.semantic,preview:k(`div`,{className:`card border border-base-200/80 bg-base-100 shadow-sm`,children:O(`div`,{className:`card-body grid gap-4 lg:grid-cols-[minmax(0,22rem),1fr] lg:items-start`,children:[k(`div`,{className:`grid gap-3`,children:k(H,{value:h.value,treeData:Pe,labelInValue:!0,treeDefaultExpandAll:!0,onChange:e=>{h.value=e??null}})}),O(`div`,{className:`rounded-box border border-base-300 bg-base-200/40 p-4 text-sm text-base-content/70`,children:[`当前结构：`,k(`code`,{children:JSON.stringify(h.value)})]})]})}),code:Ue});t(()=>S(e,g,re))});let ie=a(`rue:component:anchor`);n(g,ie),o(()=>{let e=w(j,{title:`Async Load`,summary:`展开未加载分支时触发 loadData，适合远端目录、权限树和超大分类树。`,tab:E.async,preview:k(`div`,{className:`card border border-base-200/80 bg-base-100 shadow-sm`,children:O(`div`,{className:`card-body grid gap-4 lg:grid-cols-[minmax(0,22rem),1fr] lg:items-start`,children:[O(`div`,{className:`grid gap-3`,children:[k(H,{value:v.value,treeExpandedKeys:y.value,treeData:b.value,allowClear:!0,loadData:ee,onTreeExpand:e=>{y.value=e},onChange:e=>{v.value=String(U(e)??``)}}),O(`div`,{className:`text-sm text-base-content/70`,children:[`当前节点：`,v.value||`尚未选择`]})]}),k(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`,children:`第一次展开“按需加载目录”时会把子节点注入到 treeData，这个模式适合服务端分页目录和按需权限树。`})]})}),code:We});t(()=>S(e,g,ie))});let ae=a(`rue:component:anchor`);n(g,ae),o(()=>{let e=w(j,{title:`Variant and Status`,summary:`TreeSelect 也沿用 Rue 现有输入体系的 filled / warning 视觉语义。`,tab:E.shell,preview:k(`div`,{className:`card border border-base-200/80 bg-base-100 shadow-sm`,children:O(`div`,{className:`card-body grid gap-4 md:grid-cols-2`,children:[O(`div`,{className:`grid gap-3`,children:[k(H,{value:_.value,treeData:Ie,prefix:k(`span`,{className:`badge badge-neutral badge-sm`,children:`ENV`}),suffix:k(`span`,{className:`text-xs opacity-60`,children:`可清空`}),variant:`filled`,status:`warning`,allowClear:!0,treeDefaultExpandAll:!0,onChange:e=>{_.value=String(U(e)??``)}}),O(`div`,{className:`text-sm text-base-content/70`,children:[`当前环境：`,_.value||`未选择`]})]}),k(`div`,{className:`rounded-box border border-base-300 bg-base-200/40 p-4 text-sm text-base-content/70`,children:`prefix / suffix 让 TreeSelect 能自然落进环境切换、租户切换和带状态提醒的配置表单里。`})]})}),code:Ge});t(()=>S(e,g,ae))});let z=i(`div`,g);n(g,z),C(z,`not-prose mt-10 space-y-4`);let B=i(`h2`,z);n(z,B),C(B,`text-2xl font-semibold`),n(B,e(`API`));let oe=a(`rue:component:anchor`);return n(z,oe),o(()=>{let e=w(Me,{rows:Ke});t(()=>S(e,z,oe))}),r})}),x,T),x})};export{qe as default};