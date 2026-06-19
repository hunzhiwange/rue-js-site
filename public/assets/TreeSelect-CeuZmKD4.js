import{$ as e,$t as t,Bt as n,Gt as r,X as i,Xt as a,Z as o,_t as s,ct as c,et as l,ft as u,gt as d,ht as f,i as p,l as m,mt as h,n as g,nt as _,o as v,r as y,rt as b,s as ee,t as x,tt as S,ut as C,yt as w}from"./vapor-runtime-CKrmRMZX.js";import{a as T,n as E,t as D}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{a as O,i as k}from"./persistentSidebarPlayground-CKHFGglU.js";import{r as A}from"./SidebarPlaygroundDesign-CWudvLqE.js";import{t as j}from"./PreviewBlock-xsXk-Jrr.js";var M=`SHOW_ALL`,te=`SHOW_PARENT`,N=`SHOW_CHILD`,ne={xs:`input-xs`,sm:`input-sm`,md:``,lg:`input-lg`,xl:`input-xl`,small:`input-sm`,medium:``,middle:``,large:`input-lg`},P=0,F={label:`title`,value:`value`,children:`children`,key:`key`,disabled:`disabled`,selectable:`selectable`,checkable:`checkable`,disableCheckbox:`disableCheckbox`,isLeaf:`isLeaf`,className:`className`,icon:`icon`,id:`id`,pId:`pId`},I=(...e)=>e.filter(Boolean).join(` `),L=e=>typeof e==`object`&&!!e&&!Array.isArray(e),R=e=>typeof e==`string`||typeof e==`number`,re=e=>e==null?[]:Array.isArray(e)?e:[e],ie=e=>`${typeof e}:${String(e)}`,ae=e=>{if(R(e))return e;if(L(e)&&R(e.value))return e.value},z=e=>re(e).flatMap(e=>{let t=ae(e);return t===void 0?[]:[t]}),B=(e,t,n)=>e[n?.[t]??F[t]],oe=(e,t)=>B(e,`label`,t)??e.title??e.label??B(e,`value`,t)??B(e,`key`,t),se=e=>typeof e==`string`||typeof e==`number`?String(e):``,ce=(e,t,n)=>{if(!t)return e;let r=L(t)?t:void 0,i=r?.id??n?.id??F.id,a=r?.pId??n?.pId??F.pId,o=r?.rootPId??0,s=n?.children??F.children,c=new Map;e.forEach((e,t)=>{let n=e[i]??e.value??e.key??t;c.set(n,{...e,[s]:[]})});let l=[];return e.forEach((e,t)=>{let n=e[i]??e.value??e.key??t,r=e[a],u=c.get(n);if(!u)return;if(r==null||r===o||!c.has(r)){l.push(u);return}let d=c.get(r);if(!d){l.push(u);return}let f=d[s]??[];f.push(u),d[s]=f}),l},le=(e,t)=>{let n=[],r={},i=(e,a,o,s)=>{let c=B(e,`children`,t),l=B(e,`value`,t),u=B(e,`key`,t),d=B(e,`isLeaf`,t),f=R(l)?l:R(u)?u:o,p=oe(e,t),m=ie(f),h=Array.isArray(c)?c.map((e,t)=>i(e,a+1,`${o}-${t}`,m)):[],g={key:String(u??f),value:f,valueKey:m,label:p,labelText:se(p),depth:a,parentValueKey:s,children:h,raw:e,disabled:!!B(e,`disabled`,t),selectable:B(e,`selectable`,t)!==!1,checkable:B(e,`checkable`,t)!==!1,disableCheckbox:!!B(e,`disableCheckbox`,t),isLeaf:d===!0?!0:d===!1?!1:h.length===0,className:B(e,`className`,t),icon:B(e,`icon`,t)};return n.push(g),r[m]=g,g};return{roots:e.map((e,t)=>i(e,0,`node-${t}`)),flat:n,byValueKey:r}},ue=e=>{let t=[],n=e=>{!e.disabled&&e.checkable&&!e.disableCheckbox&&t.push(e.valueKey),e.children.forEach(e=>n(e))};return n(e),t},de=e=>{let t=[];return e.children.forEach(e=>{ue(e).forEach(e=>t.push(e))}),t},fe=(e,t,n)=>{let r=new Set;return e.forEach(e=>{let i=t[e];if(!i)return;if(n){r.add(e);return}let a=de(i);if(a.length>0){a.forEach(e=>r.add(e));return}!i.disabled&&i.checkable&&!i.disableCheckbox&&r.add(e)}),r},pe=(e,t,n)=>{let r=new Set,i=new Set,a={},o=e=>{let s=!e.disabled&&e.checkable&&!e.disableCheckbox,c=e.children.map(e=>o(e)).filter(e=>e.participates),l=t.has(e.valueKey),u=l,d=!1;if(!n&&c.length>0){let e=c.every(e=>e.checked),t=c.some(e=>e.checked||e.halfChecked);u=l||e,d=!u&&t}let f=s||c.length>0,p={checked:u,halfChecked:d,participates:f};return a[e.valueKey]=p,u&&s&&r.add(e.valueKey),d&&s&&i.add(e.valueKey),p};return e.forEach(e=>o(e)),{checkedKeys:r,halfCheckedKeys:i,stateMap:a}},me=(e,t,n)=>{let r=[],i=(e,a)=>{let o=t[e.valueKey];if(!o)return;let s=e.children.map(e=>t[e.valueKey]).filter(Boolean).some(e=>e.checked||e.halfChecked),c=!e.disabled&&e.checkable&&!e.disableCheckbox&&o.checked;if(n===`SHOW_ALL`){c&&r.push(e),e.children.forEach(e=>i(e,a));return}if(n===`SHOW_PARENT`){if(c&&s&&!a){r.push(e);return}if(c&&!s&&!a){r.push(e);return}e.children.forEach(e=>i(e,a||c));return}if(c&&!s){r.push(e);return}if(c&&e.children.length===0){r.push(e);return}e.children.forEach(e=>i(e,a))};return e.forEach(e=>i(e,!1)),r},V=(e,t)=>t&&e.raw[t]!==void 0?e.raw[t]:e.label,he=(e,t,n)=>({value:e.value,key:e.value,label:V(e,n),halfChecked:t,disabled:e.disabled}),ge=(e,t,n,r,i)=>{let a=n?e.map(e=>he(e,r.has(e.valueKey),i)):e.map(e=>e.value);return t?a:a[0]??null},_e=(e,t,n)=>{let r=e.map(e=>V(e,n));return t?r:r[0]??null},ve=(e,t,n)=>String(t===`title`||t===`label`?V(e,n)??``:t===`value`?e.value:e.raw[t]??``),ye=(e,t)=>[String(e.value??``),String(V(e,t)??``)],be=(e,t,n,r)=>{if(!n){let n=[],r=e=>{n.push({node:e,matched:!1}),t.has(e.valueKey)&&e.children.forEach(e=>r(e))};return e.forEach(e=>r(e)),n}let i=[],a=(e,t)=>{i.push({node:e,matched:t}),e.children.forEach(e=>a(e,!1))},o=e=>{let t=r(e),n=e.children.flatMap(e=>o(e));if(!t&&n.length===0)return[];if(t){let t=[{node:e,matched:!0}];return e.children.forEach(e=>{let n=[],r=(e,t)=>{n.push({node:e,matched:t}),e.children.forEach(e=>r(e,!1))};r(e,!1),t.push(...n)}),t}return[{node:e,matched:!1},...n]};return e.forEach(e=>{i.push(...o(e))}),i},xe=(e,t)=>{let n=e?.[t];if(typeof n==`string`)return n;if(L(n)&&typeof n.root==`string`)return n.root},Se=(e,t)=>{let n=e?.[t];if(L(n)&&!(`root`in n))return n;if(L(n?.root))return n.root},Ce=(e,t)=>{let n=typeof e==`string`||typeof e==`number`?String(e):e;return typeof n!=`string`||!t||n.length<=t?n:`${n.slice(0,t)}...`},we=e=>typeof e==`string`||typeof e==`number`?String(e):e==null||e===!1?``:String(e),Te=e=>m(n=>{let r=S(`span`,n);c(r,`aria-hidden`,`true`),t(()=>{C(r,I(`inline-flex h-4 w-4 items-center justify-center text-base-content/55 transition-transform duration-150`,e.expanded&&`rotate-90`,e.hidden&&`opacity-0`))});let i=S(`svg`,r);o(r,i),c(i,`viewBox`,`0 0 20 20`),c(i,`fill`,`none`),C(i,`h-4 w-4`);let a=S(`path`,i);return o(i,a),c(a,`d`,`M7.5 5.5L12.5 10L7.5 14.5`),c(a,`stroke`,`currentColor`),c(a,`stroke-width`,`1.8`),c(a,`stroke-linecap`,`round`),c(a,`stroke-linejoin`,`round`),r}),Ee=()=>m(e=>{let t=S(`span`,e);return C(t,`loading loading-spinner loading-xs text-base-content/55`),c(t,`aria-hidden`,`true`),t}),De=()=>m(e=>{let t=S(`svg`,e);c(t,`viewBox`,`0 0 20 20`),c(t,`fill`,`none`),C(t,`block h-4 w-4`);let n=S(`path`,t);return o(t,n),c(n,`d`,`M6 6L14 14M14 6L6 14`),c(n,`stroke`,`currentColor`),c(n,`stroke-width`,`1.8`),c(n,`stroke-linecap`,`round`),t}),Oe=t=>t.icon!==void 0&&t.icon!==null?t.icon:m(t=>{let n=l(),r=e(`rue:component:anchor`);return o(n,r),v(x(De,{}),n,r),n}),ke=n=>{let{handleClose:s}=T(`useSetup:0:0`,()=>a(()=>({handleClose:e=>{n.onRemove(n.node,e)}})));return n.tagRender?n.tagRender({label:n.label,value:n.node.value,disabled:n.node.disabled,closable:!n.disabled,node:n.node,onClose:s}):m(a=>{let u=S(`span`,a);t(()=>{c(u,`data-rue-tree-select-tag-value`,String(n.node.valueKey))}),t(()=>{C(u,I(`badge badge-outline inline-flex max-w-full items-center gap-1 rounded-md px-2 py-1 text-xs font-medium leading-none`,n.tagClassName))}),t(()=>{let e=n.tagStyle;h(u,e)});let d=S(`span`,u);o(u,d),C(d,`truncate`);let f=e(`rue:slot:anchor`);o(d,f),t(()=>{let e=n.label;r(()=>v(e,d,f))});let p=e(`rue:slot:anchor`);return o(u,p),t(()=>{let e=n.disabled?``:m(()=>{let e=l(),r=S(`button`,e);return o(e,r),c(r,`type`,`button`),C(r,`btn btn-ghost btn-xs inline-flex h-4 min-h-0 w-4 shrink-0 items-center justify-center rounded-full p-0 text-center leading-none`),t(()=>{c(r,`aria-label`,String(`移除 ${we(n.rawLabel??n.node.value)}`))}),i(r,`click`,s),o(r,_(`×`)),e});r(()=>v(e,u,p))}),u})},Ae=n=>n.loadingNode?m(t=>{let n=l(),r=e(`rue:component:anchor`);return o(n,r),v(x(Ee,{}),n,r),n}):typeof n.switcherIcon==`function`?n.switcherIcon({expanded:n.expanded,loading:n.loadingNode,selected:n.selected,checked:n.state.checked,halfChecked:n.halfChecked,node:n.node}):n.switcherIcon===void 0?m(i=>{let a=l(),s=e(`rue:component:anchor`);return o(a,s),t(()=>{let e=x(Te,{expanded:n.expanded,hidden:!n.canExpand});r(()=>v(e,a,s))}),a}):n.switcherIcon,je=n=>m(a=>{let s=S(`div`,a);t(()=>{c(s,`data-rue-tree-select-node`,String(n.node.valueKey))}),t(()=>{C(s,I(`group flex items-center gap-1 rounded-lg py-1.5 pr-2`,n.matched&&`bg-primary/8`,n.treeLine&&n.node.depth>0&&`border-l border-base-300/60`,n.node.className))}),t(()=>{h(s,{paddingLeft:`${n.node.depth*16+4}px`})});let f=S(`button`,s);o(s,f),c(f,`type`,`button`),C(f,`inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md hover:bg-base-200 disabled:cursor-not-allowed`),t(()=>{u(f,!n.canExpand||n.mergedDisabled||n.node.disabled)}),t(()=>{c(f,`aria-label`,String(n.expanded?`折叠节点`:`展开节点`))}),i(f,`click`,e=>{n.onExpand(n.node,e)});let p=e(`rue:component:anchor`);o(f,p),t(()=>{let e=x(Ae,{node:n.node,state:n.state,selected:n.selected,halfChecked:n.halfChecked,expanded:n.expanded,loadingNode:n.loadingNode,canExpand:n.canExpand,switcherIcon:n.switcherIcon});r(()=>v(e,f,p))});let g=e(`rue:slot:anchor`);o(s,g),t(()=>{let e=n.treeCheckable?m(()=>{let e=l(),r=S(`button`,e);o(e,r),c(r,`type`,`button`),c(r,`role`,`checkbox`),t(()=>{c(r,`aria-checked`,String(n.halfChecked?`mixed`:n.state.checked?`true`:`false`))}),t(()=>{u(r,n.checkboxDisabled)}),t(()=>{C(r,I(`inline-flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors duration-150`,n.state.checked||n.halfChecked?`border-primary bg-primary text-primary-content`:`border-base-content/40 bg-base-100 text-base-content/0`,n.checkboxDisabled&&`opacity-45`))}),i(r,`click`,e=>{n.onToggle(n.node,e)});let a=b(r);return o(r,a),t(()=>{d(a,n.halfChecked?`−`:n.state.checked?`✓`:``)}),e}):``;r(()=>v(e,s,g))});let _=S(`button`,s);o(s,_),c(_,`type`,`button`),t(()=>{C(_,I(`flex min-w-0 flex-1 items-center gap-1 rounded-md px-1.5 py-1 text-left text-sm transition-colors duration-150`,n.selected?`bg-primary/12 text-primary`:`text-base-content hover:bg-base-200/70`,(n.mergedDisabled||n.node.disabled||!n.node.selectable)&&`cursor-not-allowed opacity-55`))}),t(()=>{u(_,n.mergedDisabled||n.node.disabled||!n.node.selectable)}),i(_,`click`,e=>{n.onToggle(n.node,e)});let y=e(`rue:slot:anchor`);return o(_,y),t(()=>{let e=n.label;r(()=>v(e,_,y))}),s}),H=d=>{let{__rue_rest_omit_0:b,__rue_rest_omit_1:O,__rue_rest_omit_2:k,__rue_rest_omit_3:A,__rue_rest_omit_4:j,__rue_rest_omit_5:M,__rue_rest_omit_6:te,__rue_rest_omit_7:F,__rue_rest_omit_8:re,__rue_rest_omit_9:ae,__rue_rest_omit_10:B,__rue_rest_omit_11:oe,__rue_rest_omit_12:se,__rue_rest_omit_13:de,__rue_rest_omit_14:Te,__rue_rest_omit_15:Ee,__rue_rest_omit_16:De,__rue_rest_omit_17:Ae,__rue_rest_omit_18:H,__rue_rest_omit_19:Me,__rue_rest_omit_20:U,__rue_rest_omit_21:Ne,__rue_rest_omit_22:Pe,__rue_rest_omit_23:Fe,__rue_rest_omit_24:Ie,__rue_rest_omit_25:Le,__rue_rest_omit_26:Re,__rue_rest_omit_27:ze,__rue_rest_omit_28:Be,__rue_rest_omit_29:Ve,__rue_rest_omit_30:He,__rue_rest_omit_31:Ue,__rue_rest_omit_32:We,__rue_rest_omit_33:Ge,__rue_rest_omit_34:Ke,__rue_rest_omit_35:qe,__rue_rest_omit_36:Je,__rue_rest_omit_37:Ye,__rue_rest_omit_38:Xe,__rue_rest_omit_39:Ze,__rue_rest_omit_40:W,__rue_rest_omit_41:Qe,__rue_rest_omit_42:$e,__rue_rest_omit_43:et,__rue_rest_omit_44:tt,__rue_rest_omit_45:nt,__rue_rest_omit_46:rt,__rue_rest_omit_47:it,__rue_rest_omit_48:at,__rue_rest_omit_49:ot,__rue_rest_omit_50:st,__rue_rest_omit_51:ct,__rue_rest_omit_52:G,__rue_rest_omit_53:K,__rue_rest_omit_54:lt,__rue_rest_omit_55:q,__rue_rest_omit_56:ut,__rue_rest_omit_57:dt,__rue_rest_omit_58:ft,__rue_rest_omit_59:pt,__rue_rest_omit_60:mt,__rue_rest_omit_61:ht,__rue_rest_omit_62:gt,__rue_rest_omit_63:_t,__rue_rest_omit_64:vt,rest:yt,rootRef:bt,instanceId:xt,renderVersion:St,uncontrolledValue:Ct,internalOpen:wt,initialTree:Tt,initialExpandedKeys:Et,uncontrolledExpandedKeys:Dt,uncontrolledLoadedKeys:J,internalSearch:Y,loadingNodeKeys:Ot,treeBodyScrollTop:kt,staleTreeNodeCleanupVersion:At,searchConfig:jt,mergedMultiple:Mt,mergedLabelInValue:Nt,mergedDisabled:X,allowClearConfig:Pt,mergedShowSearch:Ft,selectorSemanticClassName:It,selectorSemanticStyle:Lt,popupSemanticClassName:Rt,popupSemanticStyle:zt,treeSemanticClassName:Bt,treeSemanticStyle:Vt,searchSemanticClassName:Z,searchSemanticStyle:Q,tagSemanticClassName:Ht,tagSemanticStyle:Ut,rootSemanticClassName:Wt,rootSemanticStyle:Gt,getNormalizedTree:Kt,getMergedSearchValue:qt,getMergedOpen:Jt,getExpandedValueKeys:$,getExpandedKeySet:Yt,getLoadedValueKeys:Xt,getLoadedKeySet:Zt,getSelectionSnapshot:Qt,filterProp:$t,filterLogic:en,matchesNode:tn,visibleTagCount:nn,getVisibleNodes:rn,buildSelectionPreview:an,getClearButtonVisible:on,requestRender:sn,setMergedOpen:cn,prepareKeepMultiplePopupOpen:ln,setMergedSearchValue:un,setExpandedKeys:dn,setLoadedKeys:fn,canLoadNodeData:pn,canExpandNode:mn,emitSelectionCallbacks:hn,commitValue:gn,removeNodeFromSelection:_n,clearSelection:vn,handleNodeToggle:yn,handleExpandToggle:bn,handleRootMouseDown:xn,handleSelectorClick:Sn,rememberTreeBodyScroll:Cn,restoreTreeBodyScroll:wn,cleanupStaleTags:Tn,cleanupStaleTreeNodes:En,resolvedSizeClass:Dn,selectorClass:On,popupClass:kn,popupSizingStyle:An,selectionState:jn,displayNodes:Mn,tagDisplayNodes:Nn,hasValue:Pn,visibleTagNodes:Fn,omittedTagNodes:In,mergedOpenState:Ln,mergedSearchValueState:Rn,showSearchInput:zn,clearButtonVisible:Bn,visibleNodes:Vn,expandedKeySetState:Hn,loadedKeySetState:Un}=T(`useSetup:0:0:dup1`,()=>a(()=>{let{value:e,defaultValue:t,treeData:r,fieldNames:i,treeDataSimpleMode:a,multiple:o,treeCheckable:s,treeCheckStrictly:c,showCheckedStrategy:l,labelInValue:u,showSearch:f,searchValue:m,filterTreeNode:h,treeNodeFilterProp:g,placeholder:_,allowClear:v,clearLabel:b,notFoundContent:ee,disabled:x,loading:S,open:C,defaultOpen:E,onOpenChange:D,treeDefaultExpandAll:O,treeDefaultExpandedKeys:k,treeExpandedKeys:A,treeLoadedKeys:j,onTreeExpand:M,loadData:te,maxCount:F,maxTagCount:re,maxTagPlaceholder:ae,maxTagTextLength:B,listHeight:oe,placement:se,popupMatchSelectWidth:de,size:V,status:Ce,variant:we,prefix:Te,suffix:Ee,suffixIcon:De,showArrow:Oe,switcherIcon:ke,treeTitleRender:Ae,treeNodeLabelProp:je,treeLine:H,onSearch:Me,onChange:U,onSelect:Ne,onDeselect:Pe,onClear:Fe,onPopupScroll:Ie,className:Le,style:Re,selectorClassName:ze,selectorStyle:Be,popupClassName:Ve,popupStyle:He,dropdownClassName:Ue,dropdownStyle:We,classNames:Ge,styles:Ke,tagRender:qe,children:Je,...Ye}=d,Xe=T(`ref:1:0`,()=>n(void 0)),Ze=T(`ref:1:1`,()=>n(`rue-tree-select-${P++}`)),W=T(`ref:1:2`,()=>n(0)),Qe=T(`ref:1:3`,()=>n(d.defaultValue??(d.treeCheckable||d.multiple?[]:null))),$e=T(`ref:1:4`,()=>n(!!d.defaultOpen)),et=le(ce(d.treeData===void 0?[]:d.treeData,d.treeDataSimpleMode,d.fieldNames),d.fieldNames),tt=d.treeDefaultExpandAll?et.flat.filter(e=>e.children.length>0).map(e=>e.value):d.treeDefaultExpandedKeys??[],nt=T(`ref:1:5`,()=>n(tt)),rt=T(`ref:1:6`,()=>n([])),it=T(`ref:1:7`,()=>n(``)),at=T(`ref:1:8`,()=>n([])),ot=T(`ref:1:9`,()=>n(0)),st=T(`ref:1:10`,()=>n(0)),ct=T(`computed:1:11`,()=>w(()=>L(d.showSearch)?d.showSearch:void 0)),G=ct,K=!!d.multiple||!!d.treeCheckable,lt=!!d.labelInValue||!!d.treeCheckStrictly,q=!!d.disabled||!!d.loading,ut=T(`computed:1:12`,()=>w(()=>L(d.allowClear)?d.allowClear:d.allowClear?{}:null)),dt=ut,ft=T(`computed:1:13`,()=>w(()=>typeof d.showSearch==`boolean`?d.showSearch:d.showSearch===void 0?K:!0)),pt=ft,mt=T(`computed:1:14`,()=>w(()=>xe(d.classNames,`selector`))),ht=mt,gt=T(`computed:1:15`,()=>w(()=>Se(d.styles,`selector`))),_t=T(`computed:1:16`,()=>w(()=>xe(d.classNames,`popup`))),vt=_t,yt=T(`computed:1:17`,()=>w(()=>Se(d.styles,`popup`))),bt=T(`computed:1:18`,()=>w(()=>xe(d.classNames,`tree`))),xt=T(`computed:1:19`,()=>w(()=>Se(d.styles,`tree`))),St=T(`computed:1:20`,()=>w(()=>xe(d.classNames,`search`))),Ct=T(`computed:1:21`,()=>w(()=>Se(d.styles,`search`))),wt=T(`computed:1:22`,()=>w(()=>xe(d.classNames,`tag`))),Tt=T(`computed:1:23`,()=>w(()=>Se(d.styles,`tag`))),Et=T(`computed:1:24`,()=>w(()=>xe(d.classNames,`root`))),Dt=T(`computed:1:25`,()=>w(()=>Se(d.styles,`root`))),J=()=>le(ce(d.treeData===void 0?[]:d.treeData,d.treeDataSimpleMode,d.fieldNames),d.fieldNames),Y=()=>G.get()?.searchValue??d.searchValue??(pt.get()?it.value:``),Ot=()=>d.open??$e.value,kt=()=>z(d.treeExpandedKeys??nt.value),At=()=>new Set(kt().map(ie)),jt=()=>z(d.treeLoadedKeys??rt.value),Mt=()=>new Set(jt().map(ie)),Nt=()=>{let e=J(),t=z(d.value===void 0?Qe.value:d.value).map(ie),n=new Set(t),r=d.treeCheckable?fe(t,e.byValueKey,!!d.treeCheckStrictly):n,i=d.treeCheckable?pe(e.roots,r,!!d.treeCheckStrictly):{checkedKeys:n,halfCheckedKeys:new Set,stateMap:Object.fromEntries(e.flat.map(e=>[e.valueKey,{checked:n.has(e.valueKey),halfChecked:!1,participates:!0}]))},a=d.treeCheckable?me(e.roots,i.stateMap,d.showCheckedStrategy===void 0?N:d.showCheckedStrategy):t.map(t=>e.byValueKey[t]).filter(Boolean);return{currentValueKeys:t,currentValueKeySet:n,derivedCheckState:i,displayNodes:a,displayNodeKeySet:new Set(a.map(e=>e.valueKey))}},X=T(`computed:1:26`,()=>w(()=>G.get()?.treeNodeFilterProp??d.treeNodeFilterProp)),Pt=X,Ft=T(`computed:1:27`,()=>w(()=>G.get()?.filterTreeNode??d.filterTreeNode??!0)),It=Ft,Lt=(e,t)=>{if(!t)return!0;if(typeof It.get()==`function`)return It.get()(t,e);if(It.get()===!1)return!0;let n=t.toLowerCase();return(Pt.get()?[ve(e,Pt.get(),d.treeNodeLabelProp===void 0?`title`:d.treeNodeLabelProp)]:ye(e,d.treeNodeLabelProp===void 0?`title`:d.treeNodeLabelProp)).some(e=>e.toLowerCase().includes(n))},Rt=typeof d.maxTagCount==`number`&&d.maxTagCount>=0?Math.max(0,d.maxTagCount):void 0,zt=()=>{let e=J(),t=Y();return be(e.roots,At(),t,e=>Lt(e,t))},Bt=(e,t)=>{let n=new Set(e.map(e=>e.valueKey));return{currentValueKeySet:n,derivedCheckState:t??{checkedKeys:n,halfCheckedKeys:new Set,stateMap:Object.fromEntries(J().flat.map(e=>[e.valueKey,{checked:n.has(e.valueKey),halfChecked:!1,participates:!0}]))},displayNodes:e,displayNodeKeySet:new Set(e.map(e=>e.valueKey))}},Vt=e=>{let t=e?.length??Nt().displayNodes.length;return!!dt.get()&&!q&&t>0},Z=()=>{W.value+=1,nn()},Q=(e,t)=>{let n=Ot()!==e;d.open===void 0&&$e.value!==e&&($e.value=e,Z()),n&&d.onOpenChange&&d.onOpenChange(e)},Ht=()=>{d.open===void 0&&Q(!0)},Ut=(e,t)=>{let n=!1;if(G.get()?.searchValue===void 0&&d.searchValue===void 0){if(it.value===e)return;it.value=e,n=!0}G.get()?.onSearch&&G.get().onSearch(e),d.onSearch&&d.onSearch(e),n&&(Z(),an(zt().map(e=>e.node.valueKey)))},Wt=e=>{d.treeExpandedKeys===void 0&&(nt.value=e,Z()),d.onTreeExpand&&d.onTreeExpand(e)},Gt=e=>{d.treeLoadedKeys===void 0&&(rt.value=e,Z())},Kt=(e,t=Mt())=>!!d.loadData&&!e.isLeaf&&e.children.length===0&&!t.has(e.valueKey),qt=(e,t=Mt())=>e.children.length>0||Kt(e,t),Jt=(e,t,n,r)=>{let i=new Set(e.map(e=>e.valueKey)),a=new Set(t.map(e=>e.valueKey));d.onDeselect&&e.filter(e=>!a.has(e.valueKey)).forEach(e=>{d.onDeselect(lt?he(e,r.has(e.valueKey),d.treeNodeLabelProp===void 0?`title`:d.treeNodeLabelProp):e.value,e,{...n,selected:!1,checked:!1})}),d.onSelect&&t.filter(e=>!i.has(e.valueKey)).forEach(e=>{d.onSelect(lt?he(e,r.has(e.valueKey),d.treeNodeLabelProp===void 0?`title`:d.treeNodeLabelProp):e.value,e,{...n,selected:!0,checked:!0})})},$=(e,t,n)=>{let r=J(),i=Nt(),a=ge(e,K,lt,n,d.treeNodeLabelProp===void 0?`title`:d.treeNodeLabelProp),o=_e(e,K,d.treeNodeLabelProp===void 0?`title`:d.treeNodeLabelProp);d.value===void 0&&(Qe.value=a,Z()),Jt(i.displayNodes,e,{...t,displayNodes:e,halfCheckedKeys:Array.from(n).map(e=>r.byValueKey[e]?.value).filter(R)},n),d.onChange&&d.onChange(a,o,{...t,displayNodes:e,halfCheckedKeys:Array.from(n).map(e=>r.byValueKey[e]?.value).filter(R),checkedNodes:d.treeCheckable?r.flat.filter(t=>e.some(e=>e.valueKey===t.valueKey)):e}),Z(),rn(e.map(e=>e.valueKey))},Yt=(e,t)=>{tn(t),t.preventDefault(),t.stopPropagation();let n=Nt(),r=J();if(d.treeCheckable){let t=fe(n.currentValueKeys,r.byValueKey,!!d.treeCheckStrictly);d.treeCheckStrictly?t.delete(e.valueKey):ue(e).forEach(e=>t.delete(e));let i=pe(r.roots,t,!!d.treeCheckStrictly),a=me(r.roots,i.stateMap,d.showCheckedStrategy===void 0?N:d.showCheckedStrategy);return $(a,{triggerNode:e,triggerValue:e.value,checked:!1},i.halfCheckedKeys),Bt(a,i)}let i=n.displayNodes.filter(t=>t.valueKey!==e.valueKey);return $(i,{triggerNode:e,triggerValue:e.value,selected:!1},new Set),Bt(i)},Xt=e=>{tn(e),e.preventDefault(),e.stopPropagation(),d.onClear&&d.onClear(e),Y()&&Ut(``),$([],{clear:!0,selected:!1,checked:!1,triggerNode:null,triggerValue:null},new Set)},Zt=(e,t)=>{if(tn(t),t.preventDefault(),t.stopPropagation(),q||e.disabled)return null;if(!K&&!d.treeCheckable&&Kt(e))return Qt(e,t),Nt();let n=Nt(),r=J();if(d.treeCheckable){let t=fe(n.currentValueKeys,r.byValueKey,!!d.treeCheckStrictly),i=n.derivedCheckState.checkedKeys.has(e.valueKey);if(d.treeCheckStrictly)i?t.delete(e.valueKey):t.add(e.valueKey);else{let n=ue(e);i?n.forEach(e=>t.delete(e)):n.forEach(e=>t.add(e))}let a=pe(r.roots,t,!!d.treeCheckStrictly),o=me(r.roots,a.stateMap,d.showCheckedStrategy===void 0?N:d.showCheckedStrategy);return!i&&d.maxCount&&o.length>d.maxCount?null:(Ht(),$(o,{triggerNode:e,triggerValue:e.value,checked:!i,selected:!i},a.halfCheckedKeys),(G.get()?.autoClearSearchValue??!0)&&Y()&&Ut(``),Q(!0),Bt(o,a))}if(K){let t=n.displayNodes.some(t=>t.valueKey===e.valueKey)?n.displayNodes.filter(t=>t.valueKey!==e.valueKey):[...n.displayNodes,e];return!n.displayNodeKeySet.has(e.valueKey)&&d.maxCount&&t.length>d.maxCount?null:(Ht(),$(t,{triggerNode:e,triggerValue:e.value,selected:!n.displayNodeKeySet.has(e.valueKey)},new Set),(G.get()?.autoClearSearchValue??!0)&&Y()&&Ut(``),Q(!0),Bt(t))}return $([e],{triggerNode:e,triggerValue:e.value,selected:!0},new Set),Y()&&Ut(``),Q(!1,{selectionOverride:[e]}),Bt([e])},Qt=(e,t)=>{tn(t),t.preventDefault(),t.stopPropagation();let n=Mt();if(q||e.disabled||!qt(e,n))return;let r=At(),i=jt(),a=Y(),o=J(),s=new Set(r),c=!r.has(e.valueKey);c?s.add(e.valueKey):s.delete(e.valueKey),Wt(Array.from(s).map(e=>o.byValueKey[e]?.value).filter(R)),c&&d.loadData&&!a&&!n.has(e.valueKey)&&!at.value.includes(e.valueKey)&&!e.isLeaf&&e.children.length===0&&(at.value=[...at.value,e.valueKey],Z(),Promise.resolve(d.loadData(e)).then(()=>{Gt(Array.from(new Set([...i,e.value])))}).finally(()=>{at.value=at.value.filter(t=>t!==e.valueKey),Z()}))},$t=e=>{e.stopPropagation(),q&&e.preventDefault()},en=()=>{q||Q(!Ot())},tn=e=>{let t=e.currentTarget?.closest(`[role="tree"]`);t&&(ot.value=t.scrollTop)},nn=()=>{setTimeout(()=>{let e=document.querySelector(`[data-rue-tree-select-popup="true"] [role="tree"]`);e&&e.scrollTop!==ot.value&&(e.scrollTop=ot.value)},0)},rn=e=>{setTimeout(()=>{let t=new Set(e);document.querySelector(`[data-rue-tree-select-id="${Ze.value}"]`)?.querySelectorAll(`[data-rue-tree-select-tag-value]`).forEach(e=>{let n=e.getAttribute(`data-rue-tree-select-tag-value`);n&&!t.has(n)&&e.remove()})},0)},an=e=>{st.value+=1;let t=st.value;setTimeout(()=>{if(t!==st.value)return;let n=0;document.querySelector(`[data-rue-tree-select-id="${Ze.value}"]`)?.querySelectorAll(`[data-rue-tree-select-node]`).forEach(t=>{let r=t.getAttribute(`data-rue-tree-select-node`);if(r===e[n]){n+=1;return}r&&t.remove()})},0)};y(()=>{if(typeof document>`u`)return;let e=e=>{let t=e.target,n=Xe.value;n&&t&&n.contains(t)||Q(!1)},t=e=>{e.key===`Escape`&&Q(!1)};document.addEventListener(`mousedown`,e),document.addEventListener(`keydown`,t),p(()=>{document.removeEventListener(`mousedown`,e),document.removeEventListener(`keydown`,t)})});let on=ne[d.size===void 0?`md`:d.size]??``,sn=T(`computed:1:28`,()=>w(()=>I(`input relative flex w-full items-center gap-2 px-3 text-left transition-shadow duration-150`,on,d.status===`error`&&`input-error`,d.status===`warning`&&`input-warning`,(d.variant===void 0?`outlined`:d.variant)===`filled`&&`bg-base-200 border-base-300 shadow-none`,(d.variant===void 0?`outlined`:d.variant)===`borderless`&&`border-transparent bg-transparent px-0 shadow-none`,(d.variant===void 0?`outlined`:d.variant)===`underlined`&&`rounded-none border-x-0 border-t-0 bg-transparent px-0 shadow-none`,q?`cursor-not-allowed opacity-60`:`cursor-pointer`,ht.get(),d.selectorClassName))),cn=T(`computed:1:29`,()=>w(()=>I(`absolute z-40 overflow-hidden rounded-box border border-base-300 bg-base-100 shadow-[0_24px_70px_-36px_rgba(15,23,42,0.45)]`,(d.placement===void 0?`bottomLeft`:d.placement).startsWith(`top`)?`bottom-full mb-2`:`top-full mt-2`,(d.placement===void 0?`bottomLeft`:d.placement).endsWith(`Right`)?`right-0`:`left-0`,vt.get(),d.popupClassName,d.dropdownClassName))),ln=T(`computed:1:30`,()=>w(()=>(d.popupMatchSelectWidth===void 0?!0:d.popupMatchSelectWidth)===!1?{minWidth:`18rem`}:typeof(d.popupMatchSelectWidth===void 0?!0:d.popupMatchSelectWidth)==`number`?{width:`${d.popupMatchSelectWidth===void 0?!0:d.popupMatchSelectWidth}px`}:{minWidth:`100%`})),un=T(`computed:1:31`,()=>w(()=>(W.value,Nt()))),dn=T(`computed:1:32`,()=>w(()=>un.get().displayNodes)),fn=T(`computed:1:33`,()=>w(()=>K||d.treeCheckable?dn.get():[])),pn=T(`computed:1:34`,()=>w(()=>dn.get().length>0)),mn=T(`computed:1:35`,()=>w(()=>Rt===void 0?fn.get():fn.get().slice(0,Rt))),hn=T(`computed:1:36`,()=>w(()=>Rt===void 0?[]:fn.get().slice(Rt))),gn=T(`computed:1:37`,()=>w(()=>(W.value,Ot())));return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,__rue_rest_omit_6:s,__rue_rest_omit_7:c,__rue_rest_omit_8:l,__rue_rest_omit_9:u,__rue_rest_omit_10:f,__rue_rest_omit_11:m,__rue_rest_omit_12:h,__rue_rest_omit_13:g,__rue_rest_omit_14:_,__rue_rest_omit_15:v,__rue_rest_omit_16:b,__rue_rest_omit_17:ee,__rue_rest_omit_18:x,__rue_rest_omit_19:S,__rue_rest_omit_20:C,__rue_rest_omit_21:E,__rue_rest_omit_22:D,__rue_rest_omit_23:O,__rue_rest_omit_24:k,__rue_rest_omit_25:A,__rue_rest_omit_26:j,__rue_rest_omit_27:M,__rue_rest_omit_28:te,__rue_rest_omit_29:F,__rue_rest_omit_30:re,__rue_rest_omit_31:ae,__rue_rest_omit_32:B,__rue_rest_omit_33:oe,__rue_rest_omit_34:se,__rue_rest_omit_35:de,__rue_rest_omit_36:V,__rue_rest_omit_37:Ce,__rue_rest_omit_38:we,__rue_rest_omit_39:Te,__rue_rest_omit_40:Ee,__rue_rest_omit_41:De,__rue_rest_omit_42:Oe,__rue_rest_omit_43:ke,__rue_rest_omit_44:Ae,__rue_rest_omit_45:je,__rue_rest_omit_46:H,__rue_rest_omit_47:Me,__rue_rest_omit_48:U,__rue_rest_omit_49:Ne,__rue_rest_omit_50:Pe,__rue_rest_omit_51:Fe,__rue_rest_omit_52:Ie,__rue_rest_omit_53:Le,__rue_rest_omit_54:Re,__rue_rest_omit_55:ze,__rue_rest_omit_56:Be,__rue_rest_omit_57:Ve,__rue_rest_omit_58:He,__rue_rest_omit_59:Ue,__rue_rest_omit_60:We,__rue_rest_omit_61:Ge,__rue_rest_omit_62:Ke,__rue_rest_omit_63:qe,__rue_rest_omit_64:Je,rest:Ye,rootRef:Xe,instanceId:Ze,renderVersion:W,uncontrolledValue:Qe,internalOpen:$e,initialTree:et,initialExpandedKeys:tt,uncontrolledExpandedKeys:nt,uncontrolledLoadedKeys:rt,internalSearch:it,loadingNodeKeys:at,treeBodyScrollTop:ot,staleTreeNodeCleanupVersion:st,searchConfig:ct,mergedMultiple:K,mergedLabelInValue:lt,mergedDisabled:q,allowClearConfig:ut,mergedShowSearch:ft,selectorSemanticClassName:mt,selectorSemanticStyle:gt,popupSemanticClassName:_t,popupSemanticStyle:yt,treeSemanticClassName:bt,treeSemanticStyle:xt,searchSemanticClassName:St,searchSemanticStyle:Ct,tagSemanticClassName:wt,tagSemanticStyle:Tt,rootSemanticClassName:Et,rootSemanticStyle:Dt,getNormalizedTree:J,getMergedSearchValue:Y,getMergedOpen:Ot,getExpandedValueKeys:kt,getExpandedKeySet:At,getLoadedValueKeys:jt,getLoadedKeySet:Mt,getSelectionSnapshot:Nt,filterProp:X,filterLogic:Ft,matchesNode:Lt,visibleTagCount:Rt,getVisibleNodes:zt,buildSelectionPreview:Bt,getClearButtonVisible:Vt,requestRender:Z,setMergedOpen:Q,prepareKeepMultiplePopupOpen:Ht,setMergedSearchValue:Ut,setExpandedKeys:Wt,setLoadedKeys:Gt,canLoadNodeData:Kt,canExpandNode:qt,emitSelectionCallbacks:Jt,commitValue:$,removeNodeFromSelection:Yt,clearSelection:Xt,handleNodeToggle:Zt,handleExpandToggle:Qt,handleRootMouseDown:$t,handleSelectorClick:en,rememberTreeBodyScroll:tn,restoreTreeBodyScroll:nn,cleanupStaleTags:rn,cleanupStaleTreeNodes:an,resolvedSizeClass:on,selectorClass:sn,popupClass:cn,popupSizingStyle:ln,selectionState:un,displayNodes:dn,tagDisplayNodes:fn,hasValue:pn,visibleTagNodes:mn,omittedTagNodes:hn,mergedOpenState:gn,mergedSearchValueState:T(`computed:1:38`,()=>w(()=>(W.value,Y()))),showSearchInput:T(`computed:1:39`,()=>w(()=>pt.get()&&(K||d.treeCheckable||gn.get()||!pn.get()))),clearButtonVisible:T(`computed:1:40`,()=>w(()=>Vt(dn.get()))),visibleNodes:T(`computed:1:41`,()=>w(()=>(W.value,zt()))),expandedKeySetState:T(`computed:1:42`,()=>w(()=>(W.value,At()))),loadedKeySetState:T(`computed:1:43`,()=>w(()=>(W.value,Mt())))}}));return m(n=>{let a=S(`div`,n);t(()=>{s(a,yt)});let p=D(a,()=>e=>{bt.value=e??void 0});g(()=>{p()}),c(a,`data-rue-tree-select-root`,`true`),t(()=>{c(a,`data-rue-tree-select-id`,String(xt.value))}),t(()=>{C(a,I(`relative`,Wt.get(),d.className))}),t(()=>{h(a,{...Gt.get(),...d.style})}),i(a,`mousedown`,xn);let y=S(`div`,a);o(a,y),c(y,`data-rue-tree-select-selector`,`true`),t(()=>{C(y,On.get())}),t(()=>{h(y,{...Lt.get(),...d.selectorStyle})}),c(y,`role`,`combobox`),t(()=>{c(y,`aria-expanded`,String(Ln.get()))}),t(()=>{c(y,`aria-disabled`,String(X))}),c(y,`aria-haspopup`,`tree`),i(y,`click`,Sn);let b=e(`rue:slot:anchor`);o(y,b),t(()=>{let n=d.prefix===void 0?``:m(()=>{let n=l(),i=S(`span`,n);o(n,i),C(i,`flex shrink-0 items-center text-base-content/65`);let a=e(`rue:slot:anchor`);return o(i,a),t(()=>{let e=d.prefix;r(()=>v(e,i,a))}),n});r(()=>v(n,y,b))});let w=S(`div`,y);o(y,w),C(w,`flex min-w-0 flex-1 flex-wrap items-center gap-1.5 self-stretch py-1`);let T=e(`rue:list:start`),O=e(`rue:list:end`);o(w,T),o(w,O);let k=new Map;t(()=>{k=E({items:Fn.get()||[],getKey:(e,t)=>e.valueKey,elements:k,parent:w,before:O,start:T,renderItem:(e,t,n,r,i)=>{let a=V(e,d.treeNodeLabelProp===void 0?`title`:d.treeNodeLabelProp),o=Ce(a,d.maxTagTextLength);ee(x(ke,{key:e.valueKey,node:e,rawLabel:a,label:o,disabled:X,tagRender:d.tagRender,tagClassName:Ht.get(),tagStyle:Ut.get(),onRemove:_n}),t,n,r)}})}),o(w,_(` `));let A=e(`rue:slot:anchor`);o(w,A),t(()=>{let n=In.get().length>0?m(()=>{let n=l(),i=S(`span`,n);o(n,i),C(i,`badge badge-ghost inline-flex max-w-full items-center rounded-md px-2 py-1 text-xs leading-none`);let a=e(`rue:slot:anchor`);return o(i,a),t(()=>{let e=typeof d.maxTagPlaceholder==`function`?d.maxTagPlaceholder(In.get()):d.maxTagPlaceholder??`+${In.get().length}`;r(()=>v(e,i,a))}),n}):``;r(()=>v(n,w,A))}),o(w,_(` `));let j=e(`rue:slot:anchor`);o(w,j),t(()=>{let n=zn.get()?m(()=>{let e=l(),n=S(`input`,e);return o(e,n),c(n,`data-rue-tree-select-search`,`true`),t(()=>{f(n,Rn.get())}),t(()=>{u(n,X)}),t(()=>{c(n,`placeholder`,String(we(d.placeholder??`请选择`)))}),t(()=>{C(n,I(`min-w-[5rem] flex-1 border-0 bg-transparent px-0 py-0 text-sm leading-5 outline-none placeholder:text-base-content/40`,Z.get()))}),t(()=>{h(n,Q.get())}),i(n,`click`,e=>{e.stopPropagation(),X||cn(!0)}),i(n,`focus`,()=>{X||cn(!0)}),i(n,`input`,e=>{let t=e.target;cn(!0),un(t.value,{syncSelector:!1}),Promise.resolve().then(()=>{document.querySelector(`[data-rue-tree-select-search="true"]`)?.focus()})}),e}):m(()=>{let n=l(),i=S(`span`,n);o(n,i),t(()=>{C(i,Pn.get()&&!Mt&&!d.treeCheckable?`flex flex-1 items-center truncate text-sm leading-5`:`flex flex-1 items-center truncate text-sm leading-5 text-base-content/40`)});let a=e(`rue:slot:anchor`);return o(i,a),t(()=>{let e=Pn.get()&&!Mt&&!d.treeCheckable?V(Mn.get()[0],d.treeNodeLabelProp===void 0?`title`:d.treeNodeLabelProp):d.placeholder??`请选择`;r(()=>v(e,i,a))}),n});r(()=>v(n,w,j))});let M=S(`button`,y);o(y,M),c(M,`type`,`button`),t(()=>{C(M,I(`btn btn-ghost btn-xs btn-circle h-7 min-h-0 w-7 shrink-0 items-center justify-center self-center p-0 leading-none text-base-content/55 hover:text-base-content`,Bn.get()?`inline-flex`:`hidden`))}),t(()=>{c(M,`aria-label`,String(d.clearLabel===void 0?`清空选择`:d.clearLabel))}),t(()=>{u(M,!Bn.get())}),i(M,`click`,vn);let te=e(`rue:component:anchor`);o(M,te),t(()=>{let e=x(Oe,{icon:Pt.get()?.clearIcon});r(()=>v(e,M,te))});let N=e(`rue:slot:anchor`);o(y,N),t(()=>{let n=d.suffix===void 0?``:m(()=>{let n=l(),i=S(`span`,n);o(n,i),C(i,`flex shrink-0 items-center text-base-content/65`);let a=e(`rue:slot:anchor`);return o(i,a),t(()=>{let e=d.suffix;r(()=>v(e,i,a))}),n});r(()=>v(n,y,N))}),o(y,_(` `));let ne=e(`rue:slot:anchor`);o(y,ne),t(()=>{let n=d.showArrow===void 0||d.showArrow?m(()=>{let n=l(),i=S(`span`,n);o(n,i),C(i,`flex shrink-0 items-center`);let a=e(`rue:slot:anchor`);return o(i,a),t(()=>{let e=d.suffixIcon??m(()=>{let e=l(),n=S(`span`,e);o(e,n),c(n,`data-rue-tree-select-arrow`,`true`),c(n,`aria-hidden`,`true`),t(()=>{C(n,I(`inline-flex h-4 w-4 items-center justify-center text-base-content/55 transition-transform duration-150`,Ln.get()&&`rotate-180`))});let r=S(`svg`,n);o(n,r),c(r,`viewBox`,`0 0 20 20`),c(r,`fill`,`none`),C(r,`h-4 w-4`);let i=S(`path`,r);return o(r,i),c(i,`d`,`M5.5 7.5L10 12.5L14.5 7.5`),c(i,`stroke`,`currentColor`),c(i,`stroke-width`,`1.8`),c(i,`stroke-linecap`,`round`),c(i,`stroke-linejoin`,`round`),e});r(()=>v(e,i,a))}),n}):``;r(()=>v(n,y,ne))});let P=S(`div`,a);o(a,P),c(P,`data-rue-tree-select-popup`,`true`),t(()=>{c(P,`aria-hidden`,String(Ln.get()?`false`:`true`))}),t(()=>{s(P,{hidden:Ln.get()?void 0:!0})}),t(()=>{C(P,kn.get())}),t(()=>{h(P,{...An.get(),...zt.get(),...d.popupStyle,...d.dropdownStyle})});let F=S(`div`,P);o(P,F),c(F,`role`,`tree`),t(()=>{C(F,I(`overflow-auto p-2`,Bt.get()))}),t(()=>{h(F,{maxHeight:`${d.listHeight===void 0?320:d.listHeight}px`,...Vt.get()})}),i(F,`scroll`,e=>{kt.value=e.target.scrollTop,d.onPopupScroll&&d.onPopupScroll(e)});let L=e(`rue:slot:anchor`);o(F,L),t(()=>{let n=Vn.get().length?m(()=>{let n=l(),r=e(`rue:list:start`),i=e(`rue:list:end`);o(n,r),o(n,i);let a=new Map;return t(()=>{a=E({items:Vn.get()||[],getKey:(e,t)=>e.node.valueKey,elements:a,parent:r.parentNode,before:i,start:r,renderItem:(e,t,n,r,i)=>{ee(x(je,{key:e.node.valueKey,node:e.node,matched:e.matched,state:jn.get().derivedCheckState.stateMap[e.node.valueKey]??{checked:!1,halfChecked:!1,participates:!0},selected:d.treeCheckable?(jn.get().derivedCheckState.stateMap[e.node.valueKey]??{checked:!1,halfChecked:!1,participates:!0}).checked:jn.get().currentValueKeySet.has(e.node.valueKey),halfChecked:d.treeCheckable?(jn.get().derivedCheckState.stateMap[e.node.valueKey]??{checked:!1,halfChecked:!1,participates:!0}).halfChecked:!1,expanded:Rn.get()?!0:Hn.get().has(e.node.valueKey),loadingNode:Ot.value.includes(e.node.valueKey),canExpand:mn(e.node,Un.get()),checkboxDisabled:X||e.node.disabled||e.node.disableCheckbox||!e.node.checkable,label:d.treeTitleRender?d.treeTitleRender(e.node):V(e.node,d.treeNodeLabelProp===void 0?`title`:d.treeNodeLabelProp),mergedDisabled:X,treeCheckable:d.treeCheckable,treeLine:d.treeLine,switcherIcon:d.switcherIcon,onExpand:bn,onToggle:yn}),t,n,r)}})}),n}):m(()=>{let n=l(),i=S(`div`,n);o(n,i),C(i,`rounded-md px-3 py-8 text-center text-sm text-base-content/55`);let a=e(`rue:slot:anchor`);return o(i,a),t(()=>{let e=d.notFoundContent??`暂无匹配项`;r(()=>v(e,i,a))}),n});r(()=>v(n,F,L))});let R=e(`rue:children:anchor`);return o(a,R),t(()=>{let e=d.children;r(()=>v(e,a,R))}),a})};H.SHOW_ALL=M,H.SHOW_PARENT=te,H.SHOW_CHILD=N;var Me=n=>m(i=>{let a=S(`div`,i);C(a,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let s=S(`table`,a);o(a,s),C(s,`table table-zebra`);let u=S(`thead`,s);o(s,u);let d=S(`tr`,u);o(u,d);let f=S(`th`,d);o(d,f),o(f,_(`属性`));let p=S(`th`,d);o(d,p),o(p,_(`说明`));let h=S(`th`,d);o(d,h),o(h,_(`类型`));let g=S(`th`,d);o(d,g),o(g,_(`默认值`));let y=S(`tbody`,s);o(s,y);let b=e(`rue:list:start`),ee=e(`rue:list:end`);o(y,b),o(y,ee);let x=new Map;return t(()=>{x=E({items:n.rows||[],getKey:(e,t)=>e.prop,elements:x,parent:y,before:ee,singleRoot:!0,trackIndex:!1,start:b,renderItem:(n,i,a,s,u)=>{v(m(()=>{let i=l(),a=S(`tr`,i);o(i,a),t(()=>{c(a,`key`,String(n.prop))});let s=S(`td`,a);o(a,s);let u=S(`code`,s);o(s,u);let d=e(`rue:slot:anchor`);o(u,d),t(()=>{let e=n.prop;r(()=>v(e,u,d))});let f=S(`td`,a);o(a,f);let p=e(`rue:slot:anchor`);o(f,p),t(()=>{let e=n.description;r(()=>v(e,f,p))});let m=S(`td`,a);o(a,m);let h=S(`code`,m);o(m,h);let g=e(`rue:slot:anchor`);o(h,g),t(()=>{let e=n.type;r(()=>v(e,h,g))});let _=S(`td`,a);o(a,_);let y=S(`code`,_);o(_,y);let b=e(`rue:slot:anchor`);return o(y,b),t(()=>{let e=n.defaultValue;r(()=>v(e,y,b))}),i}),i,a)}})}),a}),U=e=>Array.isArray(e)?U(e[0]):e&&typeof e==`object`&&`value`in e?e.value:e??null,Ne=e=>{if(!Array.isArray(e)){let t=U(e);return t==null?[]:[t]}return e.map(e=>U(e)).filter(e=>e!=null)},Pe=[{title:`产品平台`,value:`platform`,children:[{title:`文档中心`,value:`docs`},{title:`资源目录`,value:`assets`},{title:`组件市场`,value:`components`}]},{title:`工程效率`,value:`engineering`,children:[{title:`构建链路`,value:`build`},{title:`质量门禁`,value:`quality`},{title:`发布管道`,value:`release`}]},{title:`增长分析`,value:`growth`,children:[{title:`实验看板`,value:`experiment`},{title:`归因报表`,value:`attribution`},{title:`留存漏斗`,value:`retention`}]}],Fe=[{title:`协作面板`,value:`workspace`,children:[{title:`日报汇总`,value:`daily`},{title:`设计交接`,value:`handoff`},{title:`会议纪要`,value:`minutes`}]},{title:`数据服务`,value:`data`,children:[{title:`分析订阅`,value:`analytics`},{title:`实验指标`,value:`metrics`},{title:`异常告警`,value:`alerts`}]}],Ie=[{title:`应用集群`,value:`apps`,children:[{title:`生产环境`,value:`prod`},{title:`预发环境`,value:`stage`},{title:`开发环境`,value:`dev`}]}],Le=[{nodeId:1,parentId:0,code:`workspace`,name:`Workspace`},{nodeId:2,parentId:1,code:`workflow`,name:`Workflow board`},{nodeId:3,parentId:1,code:`briefs`,name:`Briefs`},{nodeId:4,parentId:2,code:`review`,name:`Design review`},{nodeId:5,parentId:2,code:`release`,name:`Release checklist`}],Re=`import { ref } from '@rue-js/rue'
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
`,Ke=[{prop:`allowClear`,description:`追加清空按钮，适合单选、多选和勾选模式统一收敛到一个入口`,type:`boolean | { clearIcon?: any }`,defaultValue:`false`},{prop:`fieldNames`,description:`映射 label、value、children、key 与 simple mode 的 id / pId 字段`,type:`TreeSelectFieldNames`,defaultValue:`{ title, value, children, key }`},{prop:`labelInValue`,description:`把回填值升级为 { value, key, label, halfChecked } 结构`,type:`boolean`,defaultValue:`false`},{prop:`loadData`,description:`展开未加载节点时触发异步加载，适合目录、权限树、远端分类场景`,type:`(node) => Promise<any> | void`,defaultValue:`-`},{prop:`maxCount`,description:`限制多选 / 勾选模式下最多展示并回填多少个节点`,type:`number`,defaultValue:`-`},{prop:`multiple`,description:`多选模式，已选项会回填为标签列表`,type:`boolean`,defaultValue:`false`},{prop:`showCheckedStrategy`,description:`控制 treeCheckable 时的回填策略，支持 SHOW_ALL / SHOW_PARENT / SHOW_CHILD`,type:`TreeSelectShowCheckedStrategy`,defaultValue:`SHOW_CHILD`},{prop:`showSearch`,description:`开启搜索输入；对象模式可配置 autoClearSearchValue、filterTreeNode 与 onSearch`,type:`boolean | TreeSelectShowSearchConfig`,defaultValue:`单选 false / 多选 true`},{prop:`treeCheckable`,description:`把树节点切到 checkbox 模式，适合权限树、发布范围、分类选择`,type:`boolean`,defaultValue:`false`},{prop:`treeData`,description:`树数据源，title / value / children 为常用字段，value 在整棵树里需要唯一`,type:`TreeSelectDataNode[]`,defaultValue:`[]`},{prop:`treeDataSimpleMode`,description:`接收扁平结构树数据，并通过 id / pId 自动恢复层级`,type:`boolean | { id?: string; pId?: string; rootPId?: string | number | null }`,defaultValue:`false`},{prop:`treeDefaultExpandAll / treeExpandedKeys`,description:`控制树默认展开和受控展开，便于做大树分层浏览`,type:`boolean / TreeSelectValue[]`,defaultValue:`false / -`},{prop:`treeNodeFilterProp`,description:`搜索命中用的字段，常见设置是 title 或自定义 label 字段`,type:`string`,defaultValue:`value`},{prop:`variant / status`,description:`沿用 Rue 输入类组件的视觉语义，支持 filled、borderless、underlined 与 warning/error`,type:`'outlined' | 'filled' | 'borderless' | 'underlined' / 'warning' | 'error'`,defaultValue:`'outlined' / -`}],qe=()=>{let{basicValue:i,noClearValue:s,simpleValue:c,multipleValue:u,multipleOpen:d,checkableValue:f,checkableOpen:p,semanticValue:h,shellValue:g,asyncValue:y,asyncExpandedKeys:b,asyncTreeData:ee,loadAsyncTree:w,tabs:E}=T(`useSetup:0:0`,()=>a(()=>{let e=T(`ref:1:0`,()=>n(`docs`)),t=T(`ref:1:1`,()=>n(`docs`)),r=T(`ref:1:2`,()=>n(`workflow`)),i=T(`ref:1:3`,()=>n([`analytics`,`minutes`])),a=T(`ref:1:4`,()=>n(!1)),o=T(`ref:1:5`,()=>n([`build`,`quality`])),s=T(`ref:1:6`,()=>n(!1)),c=T(`ref:1:7`,()=>n({value:`release`,key:`release`,label:`发布管道`})),l=T(`ref:1:8`,()=>n(`prod`)),u=T(`ref:1:9`,()=>n(null)),d=T(`ref:1:10`,()=>n([])),f=T(`ref:1:11`,()=>n([{title:`按需加载目录`,value:`async-root`,isLeaf:!1}]));return{basicValue:e,noClearValue:t,simpleValue:r,multipleValue:i,multipleOpen:a,checkableValue:o,checkableOpen:s,semanticValue:c,shellValue:l,asyncValue:u,asyncExpandedKeys:d,asyncTreeData:f,loadAsyncTree:async e=>{e.value===`async-root`&&(f.value=[{title:`按需加载目录`,value:`async-root`,isLeaf:!1,children:[{title:`实验看板`,value:`async-dashboard`},{title:`巡检报告`,value:`async-report`},{title:`回归清单`,value:`async-checklist`}]}])},tabs:{basic:T(`ref:1:12`,()=>n(`preview`)),noClear:T(`ref:1:13`,()=>n(`preview`)),simple:T(`ref:1:14`,()=>n(`preview`)),multiple:T(`ref:1:15`,()=>n(`preview`)),checkable:T(`ref:1:16`,()=>n(`preview`)),semantic:T(`ref:1:17`,()=>n(`preview`)),async:T(`ref:1:18`,()=>n(`preview`)),shell:T(`ref:1:19`,()=>n(`preview`))}}}));return m(n=>{let a=l(),T=e(`rue:component:anchor`);return o(a,T),v(x(A,{children:m(()=>{let n=l(),a=S(`div`,n);o(n,a),C(a,`max-w-none prose prose-sm md:prose-base`);let m=S(`h1`,a);o(a,m),o(m,_(`TreeSelect 树选择`));let T=S(`p`,a);o(a,T),C(T,`text-sm mt-3 mb-3`),o(T,_(`TreeSelect 适合“下拉选择 + 树结构浏览”同时存在的输入场景，比如目录、组织架构、权限树、资源分类和发布范围。 这一版不照搬其他组件库的视觉，而是延续 Rue 的 input / badge / base 色阶体系，把 treeData、simple mode、多选、勾选、语义值、异步加载和 filled / warning 等核心面一次补齐。`));let D=S(`div`,a);o(a,D),C(D,`not-prose mt-8 space-y-2`);let A=S(`h2`,D);o(D,A),C(A,`text-2xl font-semibold`),o(A,_(`基础能力`));let M=S(`p`,D);o(D,M),C(M,`text-sm text-base-content/70`),o(M,_(`先把单选、搜索和清空打稳，再把 simple mode、多选与勾选这些更接近业务配置面的能力接进来。`));let te=e(`rue:component:anchor`);o(a,te),t(()=>{let e=x(j,{title:`Basic`,summary:`单选、搜索、默认展开与 allowClear 的组合，是目录选择最常见的入口。`,tab:E.basic,preview:k(`div`,{className:`card border border-base-200/80 bg-base-100 shadow-sm`,children:O(`div`,{className:`card-body gap-3`,children:[k(H,{value:i.value,treeData:Pe,treeDefaultExpandAll:!0,showSearch:!0,treeNodeFilterProp:`title`,allowClear:!0,placeholder:`选择一个树节点`,onChange:e=>{i.value=String(U(e)??``)}}),O(`div`,{className:`text-sm text-base-content/70`,children:[`当前节点：`,i.value||`未选择`]})]})}),code:Re});r(()=>v(e,a,te))});let N=e(`rue:component:anchor`);o(a,N),t(()=>{let e=x(j,{title:`Without allowClear`,summary:`未开启 allowClear 时，只保留选择交互，不显示 selector 右侧的清空入口。`,tab:E.noClear,preview:k(`div`,{className:`card border border-base-200/80 bg-base-100 shadow-sm`,children:O(`div`,{className:`card-body gap-3`,children:[k(H,{value:s.value,treeData:Pe,treeDefaultExpandAll:!0,onChange:e=>{s.value=String(U(e)??``)}}),O(`div`,{className:`text-sm text-base-content/70`,children:[`当前节点：`,s.value||`未选择`]})]})}),code:ze});r(()=>v(e,a,N))});let ne=e(`rue:component:anchor`);o(a,ne),t(()=>{let e=x(j,{title:`Simple Mode`,summary:`扁平树数据直接接入，适合后端给的是 id / pId 结构时减少前置整理成本。`,tab:E.simple,preview:k(`div`,{className:`card border border-base-200/80 bg-base-100 shadow-sm`,children:O(`div`,{className:`card-body grid gap-4 lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`,children:[O(`div`,{className:`grid gap-3`,children:[k(H,{value:c.value,treeData:Le,treeDataSimpleMode:{id:`nodeId`,pId:`parentId`,rootPId:0},fieldNames:{value:`code`,label:`name`,key:`code`},treeDefaultExpandAll:!0,showSearch:!0,treeNodeFilterProp:`title`,allowClear:!0,onChange:e=>{c.value=String(U(e)??``)}}),O(`div`,{className:`text-sm text-base-content/70`,children:[`当前目标：`,c.value||`未选择`]})]}),k(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`,children:`这类接口在 CMS、流程平台、低代码配置里很常见。只要给出 id / pId / value / title 映射，就能直接恢复成可搜索树。`})]})}),code:Be});r(()=>v(e,a,ne))});let P=e(`rue:component:anchor`);o(a,P),t(()=>{let e=x(j,{title:`Multiple`,summary:`多选模式默认以标签回填，适合通知订阅、面板订阅、资源批量绑定。`,tab:E.multiple,preview:k(`div`,{className:`card border border-base-200/80 bg-base-100 shadow-sm`,children:O(`div`,{className:`card-body gap-3`,children:[k(H,{value:u.value,open:d.value,treeData:Fe,multiple:!0,treeDefaultExpandAll:!0,allowClear:!0,maxTagCount:2,placeholder:`选择多个项目`,onOpenChange:e=>{d.value=e},onChange:(e,t,n)=>{u.value=Ne(e),n.clear||(d.value=!0)}}),O(`div`,{className:`text-sm text-base-content/70`,children:[`已选：`,u.value.join(` / `)||`未选择`]})]})}),code:Ve});r(()=>v(e,a,P))});let F=e(`rue:component:anchor`);o(a,F),t(()=>{let e=x(j,{title:`Checkable`,summary:`勾选树会把多选语义进一步贴近权限树和发布范围；默认 SHOW_CHILD 会直接回填实际勾选的子节点。`,tab:E.checkable,preview:k(`div`,{className:`card border border-base-200/80 bg-base-100 shadow-sm`,children:O(`div`,{className:`card-body grid gap-4 lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`,children:[O(`div`,{className:`grid gap-3`,children:[k(H,{value:f.value,open:p.value,treeData:Pe,treeCheckable:!0,maxTagCount:2,maxTagPlaceholder:`...`,allowClear:!0,treeDefaultExpandAll:!0,onOpenChange:e=>{p.value=e},onChange:(e,t,n)=>{f.value=Ne(e),n.clear||(p.value=!0)}}),O(`div`,{className:`text-sm text-base-content/70`,children:[`回填：`,f.value.join(` / `)||`未选择`]})]}),O(`ul`,{className:`list rounded-box border border-base-300 bg-base-200/40 p-4 text-sm`,children:[O(`li`,{className:`list-row`,children:[k(`span`,{className:`font-medium`,children:`策略`}),k(`span`,{className:`list-col-grow text-base-content/70`,children:`当前示例使用默认 SHOW_CHILD，选了哪些子节点就回填哪些子节点，更适合精确范围选择。`})]}),O(`li`,{className:`list-row`,children:[k(`span`,{className:`font-medium`,children:`切换`}),k(`span`,{className:`list-col-grow text-base-content/70`,children:`如果业务更想要紧凑展示，可以把 showCheckedStrategy 改成 TreeSelect.SHOW_PARENT，让完整分组选中时折叠成父标签。`})]}),O(`li`,{className:`list-row`,children:[k(`span`,{className:`font-medium`,children:`回填`}),k(`span`,{className:`list-col-grow text-base-content/70`,children:`当前示例最多展示两个标签，更多已选项会用 ... 收起，避免 selector 被撑成两排。`})]})]})]})}),code:He});r(()=>v(e,a,F))});let I=S(`div`,a);o(a,I),C(I,`not-prose mt-10 space-y-2`);let L=S(`h2`,I);o(I,L),C(L,`text-2xl font-semibold`),o(L,_(`高级能力`));let R=S(`p`,I);o(I,R),C(R,`text-sm text-base-content/70`),o(R,_(`语义值、异步加载和外观变体补到位之后，TreeSelect 就能覆盖绝大多数配置类面板的核心需求。`));let re=e(`rue:component:anchor`);o(a,re),t(()=>{let e=x(j,{title:`Label In Value`,summary:`当业务既要 value 也要 label 时，直接回填结构体会更顺手。`,tab:E.semantic,preview:k(`div`,{className:`card border border-base-200/80 bg-base-100 shadow-sm`,children:O(`div`,{className:`card-body grid gap-4 lg:grid-cols-[minmax(0,22rem),1fr] lg:items-start`,children:[k(`div`,{className:`grid gap-3`,children:k(H,{value:h.value,treeData:Pe,labelInValue:!0,treeDefaultExpandAll:!0,onChange:e=>{h.value=e??null}})}),O(`div`,{className:`rounded-box border border-base-300 bg-base-200/40 p-4 text-sm text-base-content/70`,children:[`当前结构：`,k(`code`,{children:JSON.stringify(h.value)})]})]})}),code:Ue});r(()=>v(e,a,re))});let ie=e(`rue:component:anchor`);o(a,ie),t(()=>{let e=x(j,{title:`Async Load`,summary:`展开未加载分支时触发 loadData，适合远端目录、权限树和超大分类树。`,tab:E.async,preview:k(`div`,{className:`card border border-base-200/80 bg-base-100 shadow-sm`,children:O(`div`,{className:`card-body grid gap-4 lg:grid-cols-[minmax(0,22rem),1fr] lg:items-start`,children:[O(`div`,{className:`grid gap-3`,children:[k(H,{value:y.value,treeExpandedKeys:b.value,treeData:ee.value,allowClear:!0,loadData:w,onTreeExpand:e=>{b.value=e},onChange:e=>{y.value=String(U(e)??``)}}),O(`div`,{className:`text-sm text-base-content/70`,children:[`当前节点：`,y.value||`尚未选择`]})]}),k(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`,children:`第一次展开“按需加载目录”时会把子节点注入到 treeData，这个模式适合服务端分页目录和按需权限树。`})]})}),code:We});r(()=>v(e,a,ie))});let ae=e(`rue:component:anchor`);o(a,ae),t(()=>{let e=x(j,{title:`Variant and Status`,summary:`TreeSelect 也沿用 Rue 现有输入体系的 filled / warning 视觉语义。`,tab:E.shell,preview:k(`div`,{className:`card border border-base-200/80 bg-base-100 shadow-sm`,children:O(`div`,{className:`card-body grid gap-4 md:grid-cols-2`,children:[O(`div`,{className:`grid gap-3`,children:[k(H,{value:g.value,treeData:Ie,prefix:k(`span`,{className:`badge badge-neutral badge-sm`,children:`ENV`}),suffix:k(`span`,{className:`text-xs opacity-60`,children:`可清空`}),variant:`filled`,status:`warning`,allowClear:!0,treeDefaultExpandAll:!0,onChange:e=>{g.value=String(U(e)??``)}}),O(`div`,{className:`text-sm text-base-content/70`,children:[`当前环境：`,g.value||`未选择`]})]}),k(`div`,{className:`rounded-box border border-base-300 bg-base-200/40 p-4 text-sm text-base-content/70`,children:`prefix / suffix 让 TreeSelect 能自然落进环境切换、租户切换和带状态提醒的配置表单里。`})]})}),code:Ge});r(()=>v(e,a,ae))});let z=S(`div`,a);o(a,z),C(z,`not-prose mt-10 space-y-4`);let B=S(`h2`,z);o(z,B),C(B,`text-2xl font-semibold`),o(B,_(`API`));let oe=e(`rue:component:anchor`);return o(z,oe),t(()=>{let e=x(Me,{rows:Ke});r(()=>v(e,z,oe))}),n})}),a,T),a})};export{qe as default};