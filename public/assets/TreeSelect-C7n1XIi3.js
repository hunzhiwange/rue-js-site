import{$t as e,Jt as t,Q as n,St as r,Z as i,_t as a,dt as o,et as s,gt as c,i as l,in as u,it as d,l as f,lt as p,n as m,nt as h,o as g,pt as _,r as v,rt as y,s as b,t as x,tt as S,vt as C,yt as ee,zt as w}from"./vapor-runtime-DsQWl-IB.js";import{a as T,n as E,t as D}from"./vapor-helpers-vapor-Dg64FcpK.js";import{a as O,i as k}from"./persistentSidebarPlayground-6jqnvaEa.js";import{r as A}from"./SidebarPlaygroundDesign-EU389JDE.js";import{t as j}from"./PreviewBlock-wHSyDiek.js";var M=`SHOW_ALL`,te=`SHOW_PARENT`,N=`SHOW_CHILD`,ne={xs:`input-xs`,sm:`input-sm`,md:``,lg:`input-lg`,xl:`input-xl`,small:`input-sm`,medium:``,middle:``,large:`input-lg`},P=0,F={label:`title`,value:`value`,children:`children`,key:`key`,disabled:`disabled`,selectable:`selectable`,checkable:`checkable`,disableCheckbox:`disableCheckbox`,isLeaf:`isLeaf`,className:`className`,icon:`icon`,id:`id`,pId:`pId`},I=(...e)=>e.filter(Boolean).join(` `),L=e=>typeof e==`object`&&!!e&&!Array.isArray(e),R=e=>typeof e==`string`||typeof e==`number`,re=e=>e==null?[]:Array.isArray(e)?e:[e],ie=e=>`${typeof e}:${String(e)}`,ae=e=>{if(R(e))return e;if(L(e)&&R(e.value))return e.value},z=e=>re(e).flatMap(e=>{let t=ae(e);return t===void 0?[]:[t]}),B=(e,t,n)=>e[n?.[t]??F[t]],oe=(e,t)=>B(e,`label`,t)??e.title??e.label??B(e,`value`,t)??B(e,`key`,t),se=e=>typeof e==`string`||typeof e==`number`?String(e):``,ce=(e,t,n)=>{if(!t)return e;let r=L(t)?t:void 0,i=r?.id??n?.id??F.id,a=r?.pId??n?.pId??F.pId,o=r?.rootPId??0,s=n?.children??F.children,c=new Map;e.forEach((e,t)=>{let n=e[i]??e.value??e.key??t;c.set(n,{...e,[s]:[]})});let l=[];return e.forEach((e,t)=>{let n=e[i]??e.value??e.key??t,r=e[a],u=c.get(n);if(!u)return;if(r==null||r===o||!c.has(r)){l.push(u);return}let d=c.get(r);if(!d){l.push(u);return}let f=d[s]??[];f.push(u),d[s]=f}),l},le=(e,t)=>{let n=[],r={},i=(e,a,o,s)=>{let c=B(e,`children`,t),l=B(e,`value`,t),u=B(e,`key`,t),d=B(e,`isLeaf`,t),f=R(l)?l:R(u)?u:o,p=oe(e,t),m=ie(f),h=Array.isArray(c)?c.map((e,t)=>i(e,a+1,`${o}-${t}`,m)):[],g={key:String(u??f),value:f,valueKey:m,label:p,labelText:se(p),depth:a,parentValueKey:s,children:h,raw:e,disabled:!!B(e,`disabled`,t),selectable:B(e,`selectable`,t)!==!1,checkable:B(e,`checkable`,t)!==!1,disableCheckbox:!!B(e,`disableCheckbox`,t),isLeaf:d===!0?!0:d===!1?!1:h.length===0,className:B(e,`className`,t),icon:B(e,`icon`,t)};return n.push(g),r[m]=g,g};return{roots:e.map((e,t)=>i(e,0,`node-${t}`)),flat:n,byValueKey:r}},ue=e=>{let t=[],n=e=>{!e.disabled&&e.checkable&&!e.disableCheckbox&&t.push(e.valueKey),e.children.forEach(e=>n(e))};return n(e),t},de=e=>{let t=[];return e.children.forEach(e=>{ue(e).forEach(e=>t.push(e))}),t},fe=(e,t,n)=>{let r=new Set;return e.forEach(e=>{let i=t[e];if(!i)return;if(n){r.add(e);return}let a=de(i);if(a.length>0){a.forEach(e=>r.add(e));return}!i.disabled&&i.checkable&&!i.disableCheckbox&&r.add(e)}),r},pe=(e,t,n)=>{let r=new Set,i=new Set,a={},o=e=>{let s=!e.disabled&&e.checkable&&!e.disableCheckbox,c=e.children.map(e=>o(e)).filter(e=>e.participates),l=t.has(e.valueKey),u=l,d=!1;if(!n&&c.length>0){let e=c.every(e=>e.checked),t=c.some(e=>e.checked||e.halfChecked);u=l||e,d=!u&&t}let f=s||c.length>0,p={checked:u,halfChecked:d,participates:f};return a[e.valueKey]=p,u&&s&&r.add(e.valueKey),d&&s&&i.add(e.valueKey),p};return e.forEach(e=>o(e)),{checkedKeys:r,halfCheckedKeys:i,stateMap:a}},me=(e,t,n)=>{let r=[],i=(e,a)=>{let o=t[e.valueKey];if(!o)return;let s=e.children.map(e=>t[e.valueKey]).filter(Boolean).some(e=>e.checked||e.halfChecked),c=!e.disabled&&e.checkable&&!e.disableCheckbox&&o.checked;if(n===`SHOW_ALL`){c&&r.push(e),e.children.forEach(e=>i(e,a));return}if(n===`SHOW_PARENT`){if(c&&s&&!a){r.push(e);return}if(c&&!s&&!a){r.push(e);return}e.children.forEach(e=>i(e,a||c));return}if(c&&!s){r.push(e);return}if(c&&e.children.length===0){r.push(e);return}e.children.forEach(e=>i(e,a))};return e.forEach(e=>i(e,!1)),r},V=(e,t)=>t&&e.raw[t]!==void 0?e.raw[t]:e.label,he=(e,t,n)=>({value:e.value,key:e.value,label:V(e,n),halfChecked:t,disabled:e.disabled}),ge=(e,t,n,r,i)=>{let a=n?e.map(e=>he(e,r.has(e.valueKey),i)):e.map(e=>e.value);return t?a:a[0]??null},_e=(e,t,n)=>{let r=e.map(e=>V(e,n));return t?r:r[0]??null},ve=(e,t,n)=>String(t===`title`||t===`label`?V(e,n)??``:t===`value`?e.value:e.raw[t]??``),ye=(e,t)=>[String(e.value??``),String(V(e,t)??``)],be=(e,t,n,r)=>{if(!n){let n=[],r=e=>{n.push({node:e,matched:!1}),t.has(e.valueKey)&&e.children.forEach(e=>r(e))};return e.forEach(e=>r(e)),n}let i=[],a=(e,t)=>{i.push({node:e,matched:t}),e.children.forEach(e=>a(e,!1))},o=e=>{let t=r(e),n=e.children.flatMap(e=>o(e));if(!t&&n.length===0)return[];if(t){let t=[{node:e,matched:!0}];return e.children.forEach(e=>{let n=[],r=(e,t)=>{n.push({node:e,matched:t}),e.children.forEach(e=>r(e,!1))};r(e,!1),t.push(...n)}),t}return[{node:e,matched:!1},...n]};return e.forEach(e=>{i.push(...o(e))}),i},xe=(e,t)=>{let n=e?.[t];if(typeof n==`string`)return n;if(L(n)&&typeof n.root==`string`)return n.root},Se=(e,t)=>{let n=e?.[t];if(L(n)&&!(`root`in n))return n;if(L(n?.root))return n.root},Ce=(e,t)=>{let n=typeof e==`string`||typeof e==`number`?String(e):e;return typeof n!=`string`||!t||n.length<=t?n:`${n.slice(0,t)}...`},we=e=>typeof e==`string`||typeof e==`number`?String(e):e==null||e===!1?``:String(e),Te=e=>f(t=>{let r=h(`span`,t);p(r,`aria-hidden`,`true`),w(()=>{o(r,I(`inline-flex h-4 w-4 items-center justify-center text-base-content/55 transition-transform duration-150`,e.expanded&&`rotate-90`,e.hidden&&`opacity-0`))});let i=h(`svg`,r);n(r,i),p(i,`viewBox`,`0 0 20 20`),p(i,`fill`,`none`),o(i,`h-4 w-4`);let a=h(`path`,i);return n(i,a),p(a,`d`,`M7.5 5.5L12.5 10L7.5 14.5`),p(a,`stroke`,`currentColor`),p(a,`stroke-width`,`1.8`),p(a,`stroke-linecap`,`round`),p(a,`stroke-linejoin`,`round`),r}),Ee=()=>f(e=>{let t=h(`span`,e);return o(t,`loading loading-spinner loading-xs text-base-content/55`),p(t,`aria-hidden`,`true`),t}),De=()=>f(e=>{let t=h(`svg`,e);p(t,`viewBox`,`0 0 20 20`),p(t,`fill`,`none`),o(t,`block h-4 w-4`);let r=h(`path`,t);return n(t,r),p(r,`d`,`M6 6L14 14M14 6L6 14`),p(r,`stroke`,`currentColor`),p(r,`stroke-width`,`1.8`),p(r,`stroke-linecap`,`round`),t}),Oe=e=>e.icon!==void 0&&e.icon!==null?e.icon:f(e=>{let t=S(),r=s(`rue:component:anchor`);return n(t,r),g(x(De,{}),t,r),t}),ke=t=>{let{handleClose:r}=T(`useSetup:0:0`,()=>u(()=>({handleClose:e=>{t.onRemove(t.node,e)}})));return t.tagRender?t.tagRender({label:t.label,value:t.node.value,disabled:t.node.disabled,closable:!t.disabled,node:t.node,onClose:r}):f(a=>{let l=h(`span`,a);w(()=>{p(l,`data-rue-tree-select-tag-value`,String(t.node.valueKey))}),w(()=>{o(l,I(`badge badge-outline inline-flex max-w-full items-center gap-1 rounded-md px-2 py-1 text-xs font-medium leading-none`,t.tagClassName))}),w(()=>{let e=t.tagStyle;c(l,e)});let u=h(`span`,l);n(l,u),o(u,`truncate`);let d=s(`rue:slot:anchor`);n(u,d),w(()=>{let n=t.label;e(()=>g(n,u,d))});let m=s(`rue:slot:anchor`);return n(l,m),w(()=>{let a=t.disabled?``:f(()=>{let e=S(),a=h(`button`,e);return n(e,a),p(a,`type`,`button`),o(a,`btn btn-ghost btn-xs inline-flex h-4 min-h-0 w-4 shrink-0 items-center justify-center rounded-full p-0 text-center leading-none`),w(()=>{p(a,`aria-label`,String(`移除 ${we(t.rawLabel??t.node.value)}`))}),i(a,`click`,r),n(a,y(`×`)),e});e(()=>g(a,l,m))}),l})},Ae=t=>t.loadingNode?f(e=>{let t=S(),r=s(`rue:component:anchor`);return n(t,r),g(x(Ee,{}),t,r),t}):typeof t.switcherIcon==`function`?t.switcherIcon({expanded:t.expanded,loading:t.loadingNode,selected:t.selected,checked:t.state.checked,halfChecked:t.halfChecked,node:t.node}):t.switcherIcon===void 0?f(r=>{let i=S(),a=s(`rue:component:anchor`);return n(i,a),w(()=>{let n=x(Te,{expanded:t.expanded,hidden:!t.canExpand});e(()=>g(n,i,a))}),i}):t.switcherIcon,je=t=>f(r=>{let a=h(`div`,r);w(()=>{p(a,`data-rue-tree-select-node`,String(t.node.valueKey))}),w(()=>{o(a,I(`group flex items-center gap-1 rounded-lg py-1.5 pr-2`,t.matched&&`bg-primary/8`,t.treeLine&&t.node.depth>0&&`border-l border-base-300/60`,t.node.className))}),w(()=>{c(a,{paddingLeft:`${t.node.depth*16+4}px`})});let l=h(`button`,a);n(a,l),p(l,`type`,`button`),o(l,`inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md hover:bg-base-200 disabled:cursor-not-allowed`),w(()=>{_(l,!t.canExpand||t.mergedDisabled||t.node.disabled)}),w(()=>{p(l,`aria-label`,String(t.expanded?`折叠节点`:`展开节点`))}),i(l,`click`,e=>{t.onExpand(t.node,e)});let u=s(`rue:component:anchor`);n(l,u),w(()=>{let n=x(Ae,{node:t.node,state:t.state,selected:t.selected,halfChecked:t.halfChecked,expanded:t.expanded,loadingNode:t.loadingNode,canExpand:t.canExpand,switcherIcon:t.switcherIcon});e(()=>g(n,l,u))});let m=s(`rue:slot:anchor`);n(a,m),w(()=>{let r=t.treeCheckable?f(()=>{let e=S(),r=h(`button`,e);n(e,r),p(r,`type`,`button`),p(r,`role`,`checkbox`),w(()=>{p(r,`aria-checked`,String(t.halfChecked?`mixed`:t.state.checked?`true`:`false`))}),w(()=>{_(r,t.checkboxDisabled)}),w(()=>{o(r,I(`inline-flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors duration-150`,t.state.checked||t.halfChecked?`border-primary bg-primary text-primary-content`:`border-base-content/40 bg-base-100 text-base-content/0`,t.checkboxDisabled&&`opacity-45`))}),i(r,`click`,e=>{t.onToggle(t.node,e)});let a=d(r);return n(r,a),w(()=>{C(a,t.halfChecked?`−`:t.state.checked?`✓`:``)}),e}):``;e(()=>g(r,a,m))});let v=h(`button`,a);n(a,v),p(v,`type`,`button`),w(()=>{o(v,I(`flex min-w-0 flex-1 items-center gap-1 rounded-md px-1.5 py-1 text-left text-sm transition-colors duration-150`,t.selected?`bg-primary/12 text-primary`:`text-base-content hover:bg-base-200/70`,(t.mergedDisabled||t.node.disabled||!t.node.selectable)&&`cursor-not-allowed opacity-55`))}),w(()=>{_(v,t.mergedDisabled||t.node.disabled||!t.node.selectable)}),i(v,`click`,e=>{t.onToggle(t.node,e)});let y=s(`rue:slot:anchor`);return n(v,y),w(()=>{let n=t.label;e(()=>g(n,v,y))}),a}),H=d=>{let{__rue_rest_omit_0:C,__rue_rest_omit_1:O,__rue_rest_omit_2:k,__rue_rest_omit_3:A,__rue_rest_omit_4:j,__rue_rest_omit_5:M,__rue_rest_omit_6:te,__rue_rest_omit_7:F,__rue_rest_omit_8:re,__rue_rest_omit_9:ae,__rue_rest_omit_10:B,__rue_rest_omit_11:oe,__rue_rest_omit_12:se,__rue_rest_omit_13:de,__rue_rest_omit_14:Te,__rue_rest_omit_15:Ee,__rue_rest_omit_16:De,__rue_rest_omit_17:Ae,__rue_rest_omit_18:H,__rue_rest_omit_19:Me,__rue_rest_omit_20:U,__rue_rest_omit_21:Ne,__rue_rest_omit_22:Pe,__rue_rest_omit_23:Fe,__rue_rest_omit_24:Ie,__rue_rest_omit_25:Le,__rue_rest_omit_26:Re,__rue_rest_omit_27:ze,__rue_rest_omit_28:Be,__rue_rest_omit_29:Ve,__rue_rest_omit_30:He,__rue_rest_omit_31:Ue,__rue_rest_omit_32:We,__rue_rest_omit_33:Ge,__rue_rest_omit_34:Ke,__rue_rest_omit_35:qe,__rue_rest_omit_36:Je,__rue_rest_omit_37:Ye,__rue_rest_omit_38:Xe,__rue_rest_omit_39:Ze,__rue_rest_omit_40:W,__rue_rest_omit_41:Qe,__rue_rest_omit_42:$e,__rue_rest_omit_43:et,__rue_rest_omit_44:tt,__rue_rest_omit_45:nt,__rue_rest_omit_46:rt,__rue_rest_omit_47:it,__rue_rest_omit_48:at,__rue_rest_omit_49:ot,__rue_rest_omit_50:st,__rue_rest_omit_51:ct,__rue_rest_omit_52:G,__rue_rest_omit_53:K,__rue_rest_omit_54:lt,__rue_rest_omit_55:q,__rue_rest_omit_56:ut,__rue_rest_omit_57:dt,__rue_rest_omit_58:ft,__rue_rest_omit_59:pt,__rue_rest_omit_60:mt,__rue_rest_omit_61:ht,__rue_rest_omit_62:gt,__rue_rest_omit_63:_t,__rue_rest_omit_64:vt,rest:yt,rootRef:bt,instanceId:xt,renderVersion:St,uncontrolledValue:Ct,internalOpen:wt,initialTree:Tt,initialExpandedKeys:Et,uncontrolledExpandedKeys:Dt,uncontrolledLoadedKeys:J,internalSearch:Y,loadingNodeKeys:Ot,treeBodyScrollTop:kt,staleTreeNodeCleanupVersion:At,searchConfig:jt,mergedMultiple:Mt,mergedLabelInValue:Nt,mergedDisabled:X,allowClearConfig:Pt,mergedShowSearch:Ft,selectorSemanticClassName:It,selectorSemanticStyle:Lt,popupSemanticClassName:Rt,popupSemanticStyle:zt,treeSemanticClassName:Bt,treeSemanticStyle:Vt,searchSemanticClassName:Z,searchSemanticStyle:Q,tagSemanticClassName:Ht,tagSemanticStyle:Ut,rootSemanticClassName:Wt,rootSemanticStyle:Gt,getNormalizedTree:Kt,getMergedSearchValue:qt,getMergedOpen:Jt,getExpandedValueKeys:$,getExpandedKeySet:Yt,getLoadedValueKeys:Xt,getLoadedKeySet:Zt,getSelectionSnapshot:Qt,filterProp:$t,filterLogic:en,matchesNode:tn,visibleTagCount:nn,getVisibleNodes:rn,buildSelectionPreview:an,getClearButtonVisible:on,requestRender:sn,setMergedOpen:cn,prepareKeepMultiplePopupOpen:ln,setMergedSearchValue:un,setExpandedKeys:dn,setLoadedKeys:fn,canLoadNodeData:pn,canExpandNode:mn,emitSelectionCallbacks:hn,commitValue:gn,removeNodeFromSelection:_n,clearSelection:vn,handleNodeToggle:yn,handleExpandToggle:bn,handleRootMouseDown:xn,handleSelectorClick:Sn,rememberTreeBodyScroll:Cn,restoreTreeBodyScroll:wn,cleanupStaleTags:Tn,cleanupStaleTreeNodes:En,resolvedSizeClass:Dn,selectorClass:On,popupClass:kn,popupSizingStyle:An,selectionState:jn,displayNodes:Mn,tagDisplayNodes:Nn,hasValue:Pn,visibleTagNodes:Fn,omittedTagNodes:In,mergedOpenState:Ln,mergedSearchValueState:Rn,showSearchInput:zn,clearButtonVisible:Bn,visibleNodes:Vn,expandedKeySetState:Hn,loadedKeySetState:Un}=T(`useSetup:0:0:dup1`,()=>u(()=>{let{value:e,defaultValue:n,treeData:i,fieldNames:a,treeDataSimpleMode:o,multiple:s,treeCheckable:c,treeCheckStrictly:u,showCheckedStrategy:f,labelInValue:p,showSearch:m,searchValue:h,filterTreeNode:g,treeNodeFilterProp:_,placeholder:y,allowClear:b,clearLabel:x,notFoundContent:S,disabled:C,loading:ee,open:w,defaultOpen:E,onOpenChange:D,treeDefaultExpandAll:O,treeDefaultExpandedKeys:k,treeExpandedKeys:A,treeLoadedKeys:j,onTreeExpand:M,loadData:te,maxCount:F,maxTagCount:re,maxTagPlaceholder:ae,maxTagTextLength:B,listHeight:oe,placement:se,popupMatchSelectWidth:de,size:V,status:Ce,variant:we,prefix:Te,suffix:Ee,suffixIcon:De,showArrow:Oe,switcherIcon:ke,treeTitleRender:Ae,treeNodeLabelProp:je,treeLine:H,onSearch:Me,onChange:U,onSelect:Ne,onDeselect:Pe,onClear:Fe,onPopupScroll:Ie,className:Le,style:Re,selectorClassName:ze,selectorStyle:Be,popupClassName:Ve,popupStyle:He,dropdownClassName:Ue,dropdownStyle:We,classNames:Ge,styles:Ke,tagRender:qe,children:Je,...Ye}=d,Xe=T(`ref:1:0`,()=>t(void 0)),Ze=T(`ref:1:1`,()=>t(`rue-tree-select-${P++}`)),W=T(`ref:1:2`,()=>t(0)),Qe=T(`ref:1:3`,()=>t(d.defaultValue??(d.treeCheckable||d.multiple?[]:null))),$e=T(`ref:1:4`,()=>t(!!d.defaultOpen)),et=le(ce(d.treeData===void 0?[]:d.treeData,d.treeDataSimpleMode,d.fieldNames),d.fieldNames),tt=d.treeDefaultExpandAll?et.flat.filter(e=>e.children.length>0).map(e=>e.value):d.treeDefaultExpandedKeys??[],nt=T(`ref:1:5`,()=>t(tt)),rt=T(`ref:1:6`,()=>t([])),it=T(`ref:1:7`,()=>t(``)),at=T(`ref:1:8`,()=>t([])),ot=T(`ref:1:9`,()=>t(0)),st=T(`ref:1:10`,()=>t(0)),ct=T(`computed:1:11`,()=>r(()=>L(d.showSearch)?d.showSearch:void 0)),G=ct,K=!!d.multiple||!!d.treeCheckable,lt=!!d.labelInValue||!!d.treeCheckStrictly,q=!!d.disabled||!!d.loading,ut=T(`computed:1:12`,()=>r(()=>L(d.allowClear)?d.allowClear:d.allowClear?{}:null)),dt=ut,ft=T(`computed:1:13`,()=>r(()=>typeof d.showSearch==`boolean`?d.showSearch:d.showSearch===void 0?K:!0)),pt=ft,mt=T(`computed:1:14`,()=>r(()=>xe(d.classNames,`selector`))),ht=mt,gt=T(`computed:1:15`,()=>r(()=>Se(d.styles,`selector`))),_t=T(`computed:1:16`,()=>r(()=>xe(d.classNames,`popup`))),vt=_t,yt=T(`computed:1:17`,()=>r(()=>Se(d.styles,`popup`))),bt=T(`computed:1:18`,()=>r(()=>xe(d.classNames,`tree`))),xt=T(`computed:1:19`,()=>r(()=>Se(d.styles,`tree`))),St=T(`computed:1:20`,()=>r(()=>xe(d.classNames,`search`))),Ct=T(`computed:1:21`,()=>r(()=>Se(d.styles,`search`))),wt=T(`computed:1:22`,()=>r(()=>xe(d.classNames,`tag`))),Tt=T(`computed:1:23`,()=>r(()=>Se(d.styles,`tag`))),Et=T(`computed:1:24`,()=>r(()=>xe(d.classNames,`root`))),Dt=T(`computed:1:25`,()=>r(()=>Se(d.styles,`root`))),J=()=>le(ce(d.treeData===void 0?[]:d.treeData,d.treeDataSimpleMode,d.fieldNames),d.fieldNames),Y=()=>G.get()?.searchValue??d.searchValue??(pt.get()?it.value:``),Ot=()=>d.open??$e.value,kt=()=>z(d.treeExpandedKeys??nt.value),At=()=>new Set(kt().map(ie)),jt=()=>z(d.treeLoadedKeys??rt.value),Mt=()=>new Set(jt().map(ie)),Nt=()=>{let e=J(),t=z(d.value===void 0?Qe.value:d.value).map(ie),n=new Set(t),r=d.treeCheckable?fe(t,e.byValueKey,!!d.treeCheckStrictly):n,i=d.treeCheckable?pe(e.roots,r,!!d.treeCheckStrictly):{checkedKeys:n,halfCheckedKeys:new Set,stateMap:Object.fromEntries(e.flat.map(e=>[e.valueKey,{checked:n.has(e.valueKey),halfChecked:!1,participates:!0}]))},a=d.treeCheckable?me(e.roots,i.stateMap,d.showCheckedStrategy===void 0?N:d.showCheckedStrategy):t.map(t=>e.byValueKey[t]).filter(Boolean);return{currentValueKeys:t,currentValueKeySet:n,derivedCheckState:i,displayNodes:a,displayNodeKeySet:new Set(a.map(e=>e.valueKey))}},X=T(`computed:1:26`,()=>r(()=>G.get()?.treeNodeFilterProp??d.treeNodeFilterProp)),Pt=X,Ft=T(`computed:1:27`,()=>r(()=>G.get()?.filterTreeNode??d.filterTreeNode??!0)),It=Ft,Lt=(e,t)=>{if(!t)return!0;if(typeof It.get()==`function`)return It.get()(t,e);if(It.get()===!1)return!0;let n=t.toLowerCase();return(Pt.get()?[ve(e,Pt.get(),d.treeNodeLabelProp===void 0?`title`:d.treeNodeLabelProp)]:ye(e,d.treeNodeLabelProp===void 0?`title`:d.treeNodeLabelProp)).some(e=>e.toLowerCase().includes(n))},Rt=typeof d.maxTagCount==`number`&&d.maxTagCount>=0?Math.max(0,d.maxTagCount):void 0,zt=()=>{let e=J(),t=Y();return be(e.roots,At(),t,e=>Lt(e,t))},Bt=(e,t)=>{let n=new Set(e.map(e=>e.valueKey));return{currentValueKeySet:n,derivedCheckState:t??{checkedKeys:n,halfCheckedKeys:new Set,stateMap:Object.fromEntries(J().flat.map(e=>[e.valueKey,{checked:n.has(e.valueKey),halfChecked:!1,participates:!0}]))},displayNodes:e,displayNodeKeySet:new Set(e.map(e=>e.valueKey))}},Vt=e=>{let t=e?.length??Nt().displayNodes.length;return!!dt.get()&&!q&&t>0},Z=()=>{W.value+=1,nn()},Q=(e,t)=>{let n=Ot()!==e;d.open===void 0&&$e.value!==e&&($e.value=e,Z()),n&&d.onOpenChange&&d.onOpenChange(e)},Ht=()=>{d.open===void 0&&Q(!0)},Ut=(e,t)=>{let n=!1;if(G.get()?.searchValue===void 0&&d.searchValue===void 0){if(it.value===e)return;it.value=e,n=!0}G.get()?.onSearch&&G.get().onSearch(e),d.onSearch&&d.onSearch(e),n&&(Z(),an(zt().map(e=>e.node.valueKey)))},Wt=e=>{d.treeExpandedKeys===void 0&&(nt.value=e,Z()),d.onTreeExpand&&d.onTreeExpand(e)},Gt=e=>{d.treeLoadedKeys===void 0&&(rt.value=e,Z())},Kt=(e,t=Mt())=>!!d.loadData&&!e.isLeaf&&e.children.length===0&&!t.has(e.valueKey),qt=(e,t=Mt())=>e.children.length>0||Kt(e,t),Jt=(e,t,n,r)=>{let i=new Set(e.map(e=>e.valueKey)),a=new Set(t.map(e=>e.valueKey));d.onDeselect&&e.filter(e=>!a.has(e.valueKey)).forEach(e=>{d.onDeselect(lt?he(e,r.has(e.valueKey),d.treeNodeLabelProp===void 0?`title`:d.treeNodeLabelProp):e.value,e,{...n,selected:!1,checked:!1})}),d.onSelect&&t.filter(e=>!i.has(e.valueKey)).forEach(e=>{d.onSelect(lt?he(e,r.has(e.valueKey),d.treeNodeLabelProp===void 0?`title`:d.treeNodeLabelProp):e.value,e,{...n,selected:!0,checked:!0})})},$=(e,t,n)=>{let r=J(),i=Nt(),a=ge(e,K,lt,n,d.treeNodeLabelProp===void 0?`title`:d.treeNodeLabelProp),o=_e(e,K,d.treeNodeLabelProp===void 0?`title`:d.treeNodeLabelProp);d.value===void 0&&(Qe.value=a,Z()),Jt(i.displayNodes,e,{...t,displayNodes:e,halfCheckedKeys:Array.from(n).map(e=>r.byValueKey[e]?.value).filter(R)},n),d.onChange&&d.onChange(a,o,{...t,displayNodes:e,halfCheckedKeys:Array.from(n).map(e=>r.byValueKey[e]?.value).filter(R),checkedNodes:d.treeCheckable?r.flat.filter(t=>e.some(e=>e.valueKey===t.valueKey)):e}),Z(),rn(e.map(e=>e.valueKey))},Yt=(e,t)=>{tn(t),t.preventDefault(),t.stopPropagation();let n=Nt(),r=J();if(d.treeCheckable){let t=fe(n.currentValueKeys,r.byValueKey,!!d.treeCheckStrictly);d.treeCheckStrictly?t.delete(e.valueKey):ue(e).forEach(e=>t.delete(e));let i=pe(r.roots,t,!!d.treeCheckStrictly),a=me(r.roots,i.stateMap,d.showCheckedStrategy===void 0?N:d.showCheckedStrategy);return $(a,{triggerNode:e,triggerValue:e.value,checked:!1},i.halfCheckedKeys),Bt(a,i)}let i=n.displayNodes.filter(t=>t.valueKey!==e.valueKey);return $(i,{triggerNode:e,triggerValue:e.value,selected:!1},new Set),Bt(i)},Xt=e=>{tn(e),e.preventDefault(),e.stopPropagation(),d.onClear&&d.onClear(e),Y()&&Ut(``),$([],{clear:!0,selected:!1,checked:!1,triggerNode:null,triggerValue:null},new Set)},Zt=(e,t)=>{if(tn(t),t.preventDefault(),t.stopPropagation(),q||e.disabled)return null;if(!K&&!d.treeCheckable&&Kt(e))return Qt(e,t),Nt();let n=Nt(),r=J();if(d.treeCheckable){let t=fe(n.currentValueKeys,r.byValueKey,!!d.treeCheckStrictly),i=n.derivedCheckState.checkedKeys.has(e.valueKey);if(d.treeCheckStrictly)i?t.delete(e.valueKey):t.add(e.valueKey);else{let n=ue(e);i?n.forEach(e=>t.delete(e)):n.forEach(e=>t.add(e))}let a=pe(r.roots,t,!!d.treeCheckStrictly),o=me(r.roots,a.stateMap,d.showCheckedStrategy===void 0?N:d.showCheckedStrategy);return!i&&d.maxCount&&o.length>d.maxCount?null:(Ht(),$(o,{triggerNode:e,triggerValue:e.value,checked:!i,selected:!i},a.halfCheckedKeys),(G.get()?.autoClearSearchValue??!0)&&Y()&&Ut(``),Q(!0),Bt(o,a))}if(K){let t=n.displayNodes.some(t=>t.valueKey===e.valueKey)?n.displayNodes.filter(t=>t.valueKey!==e.valueKey):[...n.displayNodes,e];return!n.displayNodeKeySet.has(e.valueKey)&&d.maxCount&&t.length>d.maxCount?null:(Ht(),$(t,{triggerNode:e,triggerValue:e.value,selected:!n.displayNodeKeySet.has(e.valueKey)},new Set),(G.get()?.autoClearSearchValue??!0)&&Y()&&Ut(``),Q(!0),Bt(t))}return $([e],{triggerNode:e,triggerValue:e.value,selected:!0},new Set),Y()&&Ut(``),Q(!1,{selectionOverride:[e]}),Bt([e])},Qt=(e,t)=>{tn(t),t.preventDefault(),t.stopPropagation();let n=Mt();if(q||e.disabled||!qt(e,n))return;let r=At(),i=jt(),a=Y(),o=J(),s=new Set(r),c=!r.has(e.valueKey);c?s.add(e.valueKey):s.delete(e.valueKey),Wt(Array.from(s).map(e=>o.byValueKey[e]?.value).filter(R)),c&&d.loadData&&!a&&!n.has(e.valueKey)&&!at.value.includes(e.valueKey)&&!e.isLeaf&&e.children.length===0&&(at.value=[...at.value,e.valueKey],Z(),Promise.resolve(d.loadData(e)).then(()=>{Gt(Array.from(new Set([...i,e.value])))}).finally(()=>{at.value=at.value.filter(t=>t!==e.valueKey),Z()}))},$t=e=>{e.stopPropagation(),q&&e.preventDefault()},en=()=>{q||Q(!Ot())},tn=e=>{let t=e.currentTarget?.closest(`[role="tree"]`);t&&(ot.value=t.scrollTop)},nn=()=>{setTimeout(()=>{let e=document.querySelector(`[data-rue-tree-select-popup="true"] [role="tree"]`);e&&e.scrollTop!==ot.value&&(e.scrollTop=ot.value)},0)},rn=e=>{setTimeout(()=>{let t=new Set(e);document.querySelector(`[data-rue-tree-select-id="${Ze.value}"]`)?.querySelectorAll(`[data-rue-tree-select-tag-value]`).forEach(e=>{let n=e.getAttribute(`data-rue-tree-select-tag-value`);n&&!t.has(n)&&e.remove()})},0)},an=e=>{st.value+=1;let t=st.value;setTimeout(()=>{if(t!==st.value)return;let n=0;document.querySelector(`[data-rue-tree-select-id="${Ze.value}"]`)?.querySelectorAll(`[data-rue-tree-select-node]`).forEach(t=>{let r=t.getAttribute(`data-rue-tree-select-node`);if(r===e[n]){n+=1;return}r&&t.remove()})},0)};v(()=>{if(typeof document>`u`)return;let e=e=>{let t=e.target,n=Xe.value;n&&t&&n.contains(t)||Q(!1)},t=e=>{e.key===`Escape`&&Q(!1)};document.addEventListener(`mousedown`,e),document.addEventListener(`keydown`,t),l(()=>{document.removeEventListener(`mousedown`,e),document.removeEventListener(`keydown`,t)})});let on=ne[d.size===void 0?`md`:d.size]??``,sn=T(`computed:1:28`,()=>r(()=>I(`input relative flex w-full items-center gap-2 px-3 text-left transition-shadow duration-150`,on,d.status===`error`&&`input-error`,d.status===`warning`&&`input-warning`,(d.variant===void 0?`outlined`:d.variant)===`filled`&&`bg-base-200 border-base-300 shadow-none`,(d.variant===void 0?`outlined`:d.variant)===`borderless`&&`border-transparent bg-transparent px-0 shadow-none`,(d.variant===void 0?`outlined`:d.variant)===`underlined`&&`rounded-none border-x-0 border-t-0 bg-transparent px-0 shadow-none`,q?`cursor-not-allowed opacity-60`:`cursor-pointer`,ht.get(),d.selectorClassName))),cn=T(`computed:1:29`,()=>r(()=>I(`absolute z-40 overflow-hidden rounded-box border border-base-300 bg-base-100 shadow-[0_24px_70px_-36px_rgba(15,23,42,0.45)]`,(d.placement===void 0?`bottomLeft`:d.placement).startsWith(`top`)?`bottom-full mb-2`:`top-full mt-2`,(d.placement===void 0?`bottomLeft`:d.placement).endsWith(`Right`)?`right-0`:`left-0`,vt.get(),d.popupClassName,d.dropdownClassName))),ln=T(`computed:1:30`,()=>r(()=>(d.popupMatchSelectWidth===void 0?!0:d.popupMatchSelectWidth)===!1?{minWidth:`18rem`}:typeof(d.popupMatchSelectWidth===void 0?!0:d.popupMatchSelectWidth)==`number`?{width:`${d.popupMatchSelectWidth===void 0?!0:d.popupMatchSelectWidth}px`}:{minWidth:`100%`})),un=T(`computed:1:31`,()=>r(()=>(W.value,Nt()))),dn=T(`computed:1:32`,()=>r(()=>un.get().displayNodes)),fn=T(`computed:1:33`,()=>r(()=>K||d.treeCheckable?dn.get():[])),pn=T(`computed:1:34`,()=>r(()=>dn.get().length>0)),mn=T(`computed:1:35`,()=>r(()=>Rt===void 0?fn.get():fn.get().slice(0,Rt))),hn=T(`computed:1:36`,()=>r(()=>Rt===void 0?[]:fn.get().slice(Rt))),gn=T(`computed:1:37`,()=>r(()=>(W.value,Ot())));return{__rue_rest_omit_0:e,__rue_rest_omit_1:n,__rue_rest_omit_2:i,__rue_rest_omit_3:a,__rue_rest_omit_4:o,__rue_rest_omit_5:s,__rue_rest_omit_6:c,__rue_rest_omit_7:u,__rue_rest_omit_8:f,__rue_rest_omit_9:p,__rue_rest_omit_10:m,__rue_rest_omit_11:h,__rue_rest_omit_12:g,__rue_rest_omit_13:_,__rue_rest_omit_14:y,__rue_rest_omit_15:b,__rue_rest_omit_16:x,__rue_rest_omit_17:S,__rue_rest_omit_18:C,__rue_rest_omit_19:ee,__rue_rest_omit_20:w,__rue_rest_omit_21:E,__rue_rest_omit_22:D,__rue_rest_omit_23:O,__rue_rest_omit_24:k,__rue_rest_omit_25:A,__rue_rest_omit_26:j,__rue_rest_omit_27:M,__rue_rest_omit_28:te,__rue_rest_omit_29:F,__rue_rest_omit_30:re,__rue_rest_omit_31:ae,__rue_rest_omit_32:B,__rue_rest_omit_33:oe,__rue_rest_omit_34:se,__rue_rest_omit_35:de,__rue_rest_omit_36:V,__rue_rest_omit_37:Ce,__rue_rest_omit_38:we,__rue_rest_omit_39:Te,__rue_rest_omit_40:Ee,__rue_rest_omit_41:De,__rue_rest_omit_42:Oe,__rue_rest_omit_43:ke,__rue_rest_omit_44:Ae,__rue_rest_omit_45:je,__rue_rest_omit_46:H,__rue_rest_omit_47:Me,__rue_rest_omit_48:U,__rue_rest_omit_49:Ne,__rue_rest_omit_50:Pe,__rue_rest_omit_51:Fe,__rue_rest_omit_52:Ie,__rue_rest_omit_53:Le,__rue_rest_omit_54:Re,__rue_rest_omit_55:ze,__rue_rest_omit_56:Be,__rue_rest_omit_57:Ve,__rue_rest_omit_58:He,__rue_rest_omit_59:Ue,__rue_rest_omit_60:We,__rue_rest_omit_61:Ge,__rue_rest_omit_62:Ke,__rue_rest_omit_63:qe,__rue_rest_omit_64:Je,rest:Ye,rootRef:Xe,instanceId:Ze,renderVersion:W,uncontrolledValue:Qe,internalOpen:$e,initialTree:et,initialExpandedKeys:tt,uncontrolledExpandedKeys:nt,uncontrolledLoadedKeys:rt,internalSearch:it,loadingNodeKeys:at,treeBodyScrollTop:ot,staleTreeNodeCleanupVersion:st,searchConfig:ct,mergedMultiple:K,mergedLabelInValue:lt,mergedDisabled:q,allowClearConfig:ut,mergedShowSearch:ft,selectorSemanticClassName:mt,selectorSemanticStyle:gt,popupSemanticClassName:_t,popupSemanticStyle:yt,treeSemanticClassName:bt,treeSemanticStyle:xt,searchSemanticClassName:St,searchSemanticStyle:Ct,tagSemanticClassName:wt,tagSemanticStyle:Tt,rootSemanticClassName:Et,rootSemanticStyle:Dt,getNormalizedTree:J,getMergedSearchValue:Y,getMergedOpen:Ot,getExpandedValueKeys:kt,getExpandedKeySet:At,getLoadedValueKeys:jt,getLoadedKeySet:Mt,getSelectionSnapshot:Nt,filterProp:X,filterLogic:Ft,matchesNode:Lt,visibleTagCount:Rt,getVisibleNodes:zt,buildSelectionPreview:Bt,getClearButtonVisible:Vt,requestRender:Z,setMergedOpen:Q,prepareKeepMultiplePopupOpen:Ht,setMergedSearchValue:Ut,setExpandedKeys:Wt,setLoadedKeys:Gt,canLoadNodeData:Kt,canExpandNode:qt,emitSelectionCallbacks:Jt,commitValue:$,removeNodeFromSelection:Yt,clearSelection:Xt,handleNodeToggle:Zt,handleExpandToggle:Qt,handleRootMouseDown:$t,handleSelectorClick:en,rememberTreeBodyScroll:tn,restoreTreeBodyScroll:nn,cleanupStaleTags:rn,cleanupStaleTreeNodes:an,resolvedSizeClass:on,selectorClass:sn,popupClass:cn,popupSizingStyle:ln,selectionState:un,displayNodes:dn,tagDisplayNodes:fn,hasValue:pn,visibleTagNodes:mn,omittedTagNodes:hn,mergedOpenState:gn,mergedSearchValueState:T(`computed:1:38`,()=>r(()=>(W.value,Y()))),showSearchInput:T(`computed:1:39`,()=>r(()=>pt.get()&&(K||d.treeCheckable||gn.get()||!pn.get()))),clearButtonVisible:T(`computed:1:40`,()=>r(()=>Vt(dn.get()))),visibleNodes:T(`computed:1:41`,()=>r(()=>(W.value,zt()))),expandedKeySetState:T(`computed:1:42`,()=>r(()=>(W.value,At()))),loadedKeySetState:T(`computed:1:43`,()=>r(()=>(W.value,Mt())))}}));return f(t=>{let r=h(`div`,t);w(()=>{ee(r,yt)});let l=D(r,()=>e=>{bt.value=e??void 0});m(()=>{l()}),p(r,`data-rue-tree-select-root`,`true`),w(()=>{p(r,`data-rue-tree-select-id`,String(xt.value))}),w(()=>{o(r,I(`relative`,Wt.get(),d.className))}),w(()=>{c(r,{...Gt.get(),...d.style})}),i(r,`mousedown`,xn);let u=h(`div`,r);n(r,u),p(u,`data-rue-tree-select-selector`,`true`),w(()=>{o(u,On.get())}),w(()=>{c(u,{...Lt.get(),...d.selectorStyle})}),p(u,`role`,`combobox`),w(()=>{p(u,`aria-expanded`,String(Ln.get()))}),w(()=>{p(u,`aria-disabled`,String(X))}),p(u,`aria-haspopup`,`tree`),i(u,`click`,Sn);let v=s(`rue:slot:anchor`);n(u,v),w(()=>{let t=d.prefix===void 0?``:f(()=>{let t=S(),r=h(`span`,t);n(t,r),o(r,`flex shrink-0 items-center text-base-content/65`);let i=s(`rue:slot:anchor`);return n(r,i),w(()=>{let t=d.prefix;e(()=>g(t,r,i))}),t});e(()=>g(t,u,v))});let C=h(`div`,u);n(u,C),o(C,`flex min-w-0 flex-1 flex-wrap items-center gap-1.5 self-stretch py-1`);let T=s(`rue:list:start`),O=s(`rue:list:end`);n(C,T),n(C,O);let k=new Map;w(()=>{k=E({items:Fn.get()||[],getKey:(e,t)=>e.valueKey,elements:k,parent:C,before:O,start:T,renderItem:(e,t,n,r,i)=>{let a=V(e,d.treeNodeLabelProp===void 0?`title`:d.treeNodeLabelProp),o=Ce(a,d.maxTagTextLength);b(x(ke,{key:e.valueKey,node:e,rawLabel:a,label:o,disabled:X,tagRender:d.tagRender,tagClassName:Ht.get(),tagStyle:Ut.get(),onRemove:_n}),t,n,r)}})}),n(C,y(` `));let A=s(`rue:slot:anchor`);n(C,A),w(()=>{let t=In.get().length>0?f(()=>{let t=S(),r=h(`span`,t);n(t,r),o(r,`badge badge-ghost inline-flex max-w-full items-center rounded-md px-2 py-1 text-xs leading-none`);let i=s(`rue:slot:anchor`);return n(r,i),w(()=>{let t=typeof d.maxTagPlaceholder==`function`?d.maxTagPlaceholder(In.get()):d.maxTagPlaceholder??`+${In.get().length}`;e(()=>g(t,r,i))}),t}):``;e(()=>g(t,C,A))}),n(C,y(` `));let j=s(`rue:slot:anchor`);n(C,j),w(()=>{let t=zn.get()?f(()=>{let e=S(),t=h(`input`,e);return n(e,t),p(t,`data-rue-tree-select-search`,`true`),w(()=>{a(t,Rn.get())}),w(()=>{_(t,X)}),w(()=>{p(t,`placeholder`,String(we(d.placeholder??`请选择`)))}),w(()=>{o(t,I(`min-w-[5rem] flex-1 border-0 bg-transparent px-0 py-0 text-sm leading-5 outline-none placeholder:text-base-content/40`,Z.get()))}),w(()=>{c(t,Q.get())}),i(t,`click`,e=>{e.stopPropagation(),X||cn(!0)}),i(t,`focus`,()=>{X||cn(!0)}),i(t,`input`,e=>{let t=e.target;cn(!0),un(t.value,{syncSelector:!1}),Promise.resolve().then(()=>{document.querySelector(`[data-rue-tree-select-search="true"]`)?.focus()})}),e}):f(()=>{let t=S(),r=h(`span`,t);n(t,r),w(()=>{o(r,Pn.get()&&!Mt&&!d.treeCheckable?`flex flex-1 items-center truncate text-sm leading-5`:`flex flex-1 items-center truncate text-sm leading-5 text-base-content/40`)});let i=s(`rue:slot:anchor`);return n(r,i),w(()=>{let t=Pn.get()&&!Mt&&!d.treeCheckable?V(Mn.get()[0],d.treeNodeLabelProp===void 0?`title`:d.treeNodeLabelProp):d.placeholder??`请选择`;e(()=>g(t,r,i))}),t});e(()=>g(t,C,j))});let M=h(`button`,u);n(u,M),p(M,`type`,`button`),w(()=>{o(M,I(`btn btn-ghost btn-xs btn-circle h-7 min-h-0 w-7 shrink-0 items-center justify-center self-center p-0 leading-none text-base-content/55 hover:text-base-content`,Bn.get()?`inline-flex`:`hidden`))}),w(()=>{p(M,`aria-label`,String(d.clearLabel===void 0?`清空选择`:d.clearLabel))}),w(()=>{_(M,!Bn.get())}),i(M,`click`,vn);let te=s(`rue:component:anchor`);n(M,te),w(()=>{let t=x(Oe,{icon:Pt.get()?.clearIcon});e(()=>g(t,M,te))});let N=s(`rue:slot:anchor`);n(u,N),w(()=>{let t=d.suffix===void 0?``:f(()=>{let t=S(),r=h(`span`,t);n(t,r),o(r,`flex shrink-0 items-center text-base-content/65`);let i=s(`rue:slot:anchor`);return n(r,i),w(()=>{let t=d.suffix;e(()=>g(t,r,i))}),t});e(()=>g(t,u,N))}),n(u,y(` `));let ne=s(`rue:slot:anchor`);n(u,ne),w(()=>{let t=d.showArrow===void 0||d.showArrow?f(()=>{let t=S(),r=h(`span`,t);n(t,r),o(r,`flex shrink-0 items-center`);let i=s(`rue:slot:anchor`);return n(r,i),w(()=>{let t=d.suffixIcon??f(()=>{let e=S(),t=h(`span`,e);n(e,t),p(t,`data-rue-tree-select-arrow`,`true`),p(t,`aria-hidden`,`true`),w(()=>{o(t,I(`inline-flex h-4 w-4 items-center justify-center text-base-content/55 transition-transform duration-150`,Ln.get()&&`rotate-180`))});let r=h(`svg`,t);n(t,r),p(r,`viewBox`,`0 0 20 20`),p(r,`fill`,`none`),o(r,`h-4 w-4`);let i=h(`path`,r);return n(r,i),p(i,`d`,`M5.5 7.5L10 12.5L14.5 7.5`),p(i,`stroke`,`currentColor`),p(i,`stroke-width`,`1.8`),p(i,`stroke-linecap`,`round`),p(i,`stroke-linejoin`,`round`),e});e(()=>g(t,r,i))}),t}):``;e(()=>g(t,u,ne))});let P=h(`div`,r);n(r,P),p(P,`data-rue-tree-select-popup`,`true`),w(()=>{p(P,`aria-hidden`,String(Ln.get()?`false`:`true`))}),w(()=>{ee(P,{hidden:Ln.get()?void 0:!0})}),w(()=>{o(P,kn.get())}),w(()=>{c(P,{...An.get(),...zt.get(),...d.popupStyle,...d.dropdownStyle})});let F=h(`div`,P);n(P,F),p(F,`role`,`tree`),w(()=>{o(F,I(`overflow-auto p-2`,Bt.get()))}),w(()=>{c(F,{maxHeight:`${d.listHeight===void 0?320:d.listHeight}px`,...Vt.get()})}),i(F,`scroll`,e=>{kt.value=e.target.scrollTop,d.onPopupScroll&&d.onPopupScroll(e)});let L=s(`rue:slot:anchor`);n(F,L),w(()=>{let t=Vn.get().length?f(()=>{let e=S(),t=s(`rue:list:start`),r=s(`rue:list:end`);n(e,t),n(e,r);let i=new Map;return w(()=>{i=E({items:Vn.get()||[],getKey:(e,t)=>e.node.valueKey,elements:i,parent:t.parentNode,before:r,start:t,renderItem:(e,t,n,r,i)=>{b(x(je,{key:e.node.valueKey,node:e.node,matched:e.matched,state:jn.get().derivedCheckState.stateMap[e.node.valueKey]??{checked:!1,halfChecked:!1,participates:!0},selected:d.treeCheckable?(jn.get().derivedCheckState.stateMap[e.node.valueKey]??{checked:!1,halfChecked:!1,participates:!0}).checked:jn.get().currentValueKeySet.has(e.node.valueKey),halfChecked:d.treeCheckable?(jn.get().derivedCheckState.stateMap[e.node.valueKey]??{checked:!1,halfChecked:!1,participates:!0}).halfChecked:!1,expanded:Rn.get()?!0:Hn.get().has(e.node.valueKey),loadingNode:Ot.value.includes(e.node.valueKey),canExpand:mn(e.node,Un.get()),checkboxDisabled:X||e.node.disabled||e.node.disableCheckbox||!e.node.checkable,label:d.treeTitleRender?d.treeTitleRender(e.node):V(e.node,d.treeNodeLabelProp===void 0?`title`:d.treeNodeLabelProp),mergedDisabled:X,treeCheckable:d.treeCheckable,treeLine:d.treeLine,switcherIcon:d.switcherIcon,onExpand:bn,onToggle:yn}),t,n,r)}})}),e}):f(()=>{let t=S(),r=h(`div`,t);n(t,r),o(r,`rounded-md px-3 py-8 text-center text-sm text-base-content/55`);let i=s(`rue:slot:anchor`);return n(r,i),w(()=>{let t=d.notFoundContent??`暂无匹配项`;e(()=>g(t,r,i))}),t});e(()=>g(t,F,L))});let R=s(`rue:children:anchor`);return n(r,R),w(()=>{let t=d.children;e(()=>g(t,r,R))}),r})};H.SHOW_ALL=M,H.SHOW_PARENT=te,H.SHOW_CHILD=N;var Me=t=>f(r=>{let i=h(`div`,r);o(i,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let a=h(`table`,i);n(i,a),o(a,`table table-zebra`);let c=h(`thead`,a);n(a,c);let l=h(`tr`,c);n(c,l);let u=h(`th`,l);n(l,u),n(u,y(`属性`));let d=h(`th`,l);n(l,d),n(d,y(`说明`));let m=h(`th`,l);n(l,m),n(m,y(`类型`));let _=h(`th`,l);n(l,_),n(_,y(`默认值`));let v=h(`tbody`,a);n(a,v);let b=s(`rue:list:start`),x=s(`rue:list:end`);n(v,b),n(v,x);let C=new Map;return w(()=>{C=E({items:t.rows||[],getKey:(e,t)=>e.prop,elements:C,parent:v,before:x,singleRoot:!0,trackIndex:!1,start:b,renderItem:(t,r,i,a,o)=>{g(f(()=>{let r=S(),i=h(`tr`,r);n(r,i),w(()=>{p(i,`key`,String(t.prop))});let a=h(`td`,i);n(i,a);let o=h(`code`,a);n(a,o);let c=s(`rue:slot:anchor`);n(o,c),w(()=>{let n=t.prop;e(()=>g(n,o,c))});let l=h(`td`,i);n(i,l);let u=s(`rue:slot:anchor`);n(l,u),w(()=>{let n=t.description;e(()=>g(n,l,u))});let d=h(`td`,i);n(i,d);let f=h(`code`,d);n(d,f);let m=s(`rue:slot:anchor`);n(f,m),w(()=>{let n=t.type;e(()=>g(n,f,m))});let _=h(`td`,i);n(i,_);let v=h(`code`,_);n(_,v);let y=s(`rue:slot:anchor`);return n(v,y),w(()=>{let n=t.defaultValue;e(()=>g(n,v,y))}),r}),r,i)}})}),i}),U=e=>Array.isArray(e)?U(e[0]):e&&typeof e==`object`&&`value`in e?e.value:e??null,Ne=e=>{if(!Array.isArray(e)){let t=U(e);return t==null?[]:[t]}return e.map(e=>U(e)).filter(e=>e!=null)},Pe=[{title:`产品平台`,value:`platform`,children:[{title:`文档中心`,value:`docs`},{title:`资源目录`,value:`assets`},{title:`组件市场`,value:`components`}]},{title:`工程效率`,value:`engineering`,children:[{title:`构建链路`,value:`build`},{title:`质量门禁`,value:`quality`},{title:`发布管道`,value:`release`}]},{title:`增长分析`,value:`growth`,children:[{title:`实验看板`,value:`experiment`},{title:`归因报表`,value:`attribution`},{title:`留存漏斗`,value:`retention`}]}],Fe=[{title:`协作面板`,value:`workspace`,children:[{title:`日报汇总`,value:`daily`},{title:`设计交接`,value:`handoff`},{title:`会议纪要`,value:`minutes`}]},{title:`数据服务`,value:`data`,children:[{title:`分析订阅`,value:`analytics`},{title:`实验指标`,value:`metrics`},{title:`异常告警`,value:`alerts`}]}],Ie=[{title:`应用集群`,value:`apps`,children:[{title:`生产环境`,value:`prod`},{title:`预发环境`,value:`stage`},{title:`开发环境`,value:`dev`}]}],Le=[{nodeId:1,parentId:0,code:`workspace`,name:`Workspace`},{nodeId:2,parentId:1,code:`workflow`,name:`Workflow board`},{nodeId:3,parentId:1,code:`briefs`,name:`Briefs`},{nodeId:4,parentId:2,code:`review`,name:`Design review`},{nodeId:5,parentId:2,code:`release`,name:`Release checklist`}],Re=`import { ref } from '@rue-js/rue'
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
`,Ke=[{prop:`allowClear`,description:`追加清空按钮，适合单选、多选和勾选模式统一收敛到一个入口`,type:`boolean | { clearIcon?: any }`,defaultValue:`false`},{prop:`fieldNames`,description:`映射 label、value、children、key 与 simple mode 的 id / pId 字段`,type:`TreeSelectFieldNames`,defaultValue:`{ title, value, children, key }`},{prop:`labelInValue`,description:`把回填值组织为 { value, key, label, halfChecked } 结构`,type:`boolean`,defaultValue:`false`},{prop:`loadData`,description:`展开未加载节点时触发异步加载，适合目录、权限树、远端分类场景`,type:`(node) => Promise<any> | void`,defaultValue:`-`},{prop:`maxCount`,description:`限制多选 / 勾选模式下最多展示并回填多少个节点`,type:`number`,defaultValue:`-`},{prop:`multiple`,description:`多选模式，已选项会回填为标签列表`,type:`boolean`,defaultValue:`false`},{prop:`showCheckedStrategy`,description:`控制 treeCheckable 时的回填策略，支持 SHOW_ALL / SHOW_PARENT / SHOW_CHILD`,type:`TreeSelectShowCheckedStrategy`,defaultValue:`SHOW_CHILD`},{prop:`showSearch`,description:`开启搜索输入；对象模式可配置 autoClearSearchValue、filterTreeNode 与 onSearch`,type:`boolean | TreeSelectShowSearchConfig`,defaultValue:`单选 false / 多选 true`},{prop:`treeCheckable`,description:`把树节点切到 checkbox 模式，适合权限树、发布范围、分类选择`,type:`boolean`,defaultValue:`false`},{prop:`treeData`,description:`树数据源，title / value / children 为常用字段，value 在整棵树里需要唯一`,type:`TreeSelectDataNode[]`,defaultValue:`[]`},{prop:`treeDataSimpleMode`,description:`接收扁平结构树数据，并通过 id / pId 自动恢复层级`,type:`boolean | { id?: string; pId?: string; rootPId?: string | number | null }`,defaultValue:`false`},{prop:`treeDefaultExpandAll / treeExpandedKeys`,description:`控制树默认展开和受控展开，便于做大树分层浏览`,type:`boolean / TreeSelectValue[]`,defaultValue:`false / -`},{prop:`treeNodeFilterProp`,description:`搜索命中用的字段，常见设置是 title 或自定义 label 字段`,type:`string`,defaultValue:`value`},{prop:`variant / status`,description:`使用 Rue 输入类组件的视觉语义，支持 filled、borderless、underlined 与 warning/error`,type:`'outlined' | 'filled' | 'borderless' | 'underlined' / 'warning' | 'error'`,defaultValue:`'outlined' / -`}],qe=()=>{let{basicValue:r,noClearValue:i,simpleValue:a,multipleValue:c,multipleOpen:l,checkableValue:d,checkableOpen:p,semanticValue:m,shellValue:_,asyncValue:v,asyncExpandedKeys:b,asyncTreeData:C,loadAsyncTree:ee,tabs:E}=T(`useSetup:0:0`,()=>u(()=>{let e=T(`ref:1:0`,()=>t(`docs`)),n=T(`ref:1:1`,()=>t(`docs`)),r=T(`ref:1:2`,()=>t(`workflow`)),i=T(`ref:1:3`,()=>t([`analytics`,`minutes`])),a=T(`ref:1:4`,()=>t(!1)),o=T(`ref:1:5`,()=>t([`build`,`quality`])),s=T(`ref:1:6`,()=>t(!1)),c=T(`ref:1:7`,()=>t({value:`release`,key:`release`,label:`发布管道`})),l=T(`ref:1:8`,()=>t(`prod`)),u=T(`ref:1:9`,()=>t(null)),d=T(`ref:1:10`,()=>t([])),f=T(`ref:1:11`,()=>t([{title:`按需加载目录`,value:`async-root`,isLeaf:!1}]));return{basicValue:e,noClearValue:n,simpleValue:r,multipleValue:i,multipleOpen:a,checkableValue:o,checkableOpen:s,semanticValue:c,shellValue:l,asyncValue:u,asyncExpandedKeys:d,asyncTreeData:f,loadAsyncTree:async e=>{e.value===`async-root`&&(f.value=[{title:`按需加载目录`,value:`async-root`,isLeaf:!1,children:[{title:`实验看板`,value:`async-dashboard`},{title:`巡检报告`,value:`async-report`},{title:`回归清单`,value:`async-checklist`}]}])},tabs:{basic:T(`ref:1:12`,()=>t(`preview`)),noClear:T(`ref:1:13`,()=>t(`preview`)),simple:T(`ref:1:14`,()=>t(`preview`)),multiple:T(`ref:1:15`,()=>t(`preview`)),checkable:T(`ref:1:16`,()=>t(`preview`)),semantic:T(`ref:1:17`,()=>t(`preview`)),async:T(`ref:1:18`,()=>t(`preview`)),shell:T(`ref:1:19`,()=>t(`preview`))}}}));return f(t=>{let u=S(),T=s(`rue:component:anchor`);return n(u,T),g(x(A,{children:f(()=>{let t=S(),u=h(`div`,t);n(t,u),o(u,`max-w-none prose prose-sm md:prose-base`);let f=h(`h1`,u);n(u,f),n(f,y(`TreeSelect 树选择`));let T=h(`p`,u);n(u,T),o(T,`text-sm mt-3 mb-3`),n(T,y(`TreeSelect 适合“下拉选择 + 树结构浏览”同时存在的输入场景，比如目录、组织架构、权限树、资源分类和发布范围。 视觉使用 Rue 的 input / badge / base 色阶体系，能力覆盖 treeData、simple mode、多选、 勾选、语义值、异步加载和 filled / warning 等核心场景。`));let D=h(`div`,u);n(u,D),o(D,`not-prose mt-8 space-y-2`);let A=h(`h2`,D);n(D,A),o(A,`text-2xl font-semibold`),n(A,y(`基础能力`));let M=h(`p`,D);n(D,M),o(M,`text-sm text-base-content/70`),n(M,y(`先把单选、搜索和清空打稳，再把 simple mode、多选与勾选这些更接近业务配置面的能力接进来。`));let te=s(`rue:component:anchor`);n(u,te),w(()=>{let t=x(j,{title:`Basic`,summary:`单选、搜索、默认展开与 allowClear 的组合，是目录选择最常见的入口。`,tab:E.basic,preview:k(`div`,{className:`card border border-base-200/80 bg-base-100 shadow-sm`,children:O(`div`,{className:`card-body gap-3`,children:[k(H,{value:r.value,treeData:Pe,treeDefaultExpandAll:!0,showSearch:!0,treeNodeFilterProp:`title`,allowClear:!0,placeholder:`选择一个树节点`,onChange:e=>{r.value=String(U(e)??``)}}),O(`div`,{className:`text-sm text-base-content/70`,children:[`当前节点：`,r.value||`未选择`]})]})}),code:Re});e(()=>g(t,u,te))});let N=s(`rue:component:anchor`);n(u,N),w(()=>{let t=x(j,{title:`Without allowClear`,summary:`未开启 allowClear 时，只保持选择交互，不显示 selector 右侧的清空入口。`,tab:E.noClear,preview:k(`div`,{className:`card border border-base-200/80 bg-base-100 shadow-sm`,children:O(`div`,{className:`card-body gap-3`,children:[k(H,{value:i.value,treeData:Pe,treeDefaultExpandAll:!0,onChange:e=>{i.value=String(U(e)??``)}}),O(`div`,{className:`text-sm text-base-content/70`,children:[`当前节点：`,i.value||`未选择`]})]})}),code:ze});e(()=>g(t,u,N))});let ne=s(`rue:component:anchor`);n(u,ne),w(()=>{let t=x(j,{title:`Simple Mode`,summary:`扁平树数据直接接入，适合后端给的是 id / pId 结构时减少前置整理成本。`,tab:E.simple,preview:k(`div`,{className:`card border border-base-200/80 bg-base-100 shadow-sm`,children:O(`div`,{className:`card-body grid gap-4 lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`,children:[O(`div`,{className:`grid gap-3`,children:[k(H,{value:a.value,treeData:Le,treeDataSimpleMode:{id:`nodeId`,pId:`parentId`,rootPId:0},fieldNames:{value:`code`,label:`name`,key:`code`},treeDefaultExpandAll:!0,showSearch:!0,treeNodeFilterProp:`title`,allowClear:!0,onChange:e=>{a.value=String(U(e)??``)}}),O(`div`,{className:`text-sm text-base-content/70`,children:[`当前目标：`,a.value||`未选择`]})]}),k(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`,children:`这类接口在 CMS、流程平台、低代码配置里很常见。只要给出 id / pId / value / title 映射，就能直接恢复成可搜索树。`})]})}),code:Be});e(()=>g(t,u,ne))});let P=s(`rue:component:anchor`);n(u,P),w(()=>{let t=x(j,{title:`Multiple`,summary:`多选模式默认以标签回填，适合通知订阅、面板订阅、资源批量绑定。`,tab:E.multiple,preview:k(`div`,{className:`card border border-base-200/80 bg-base-100 shadow-sm`,children:O(`div`,{className:`card-body gap-3`,children:[k(H,{value:c.value,open:l.value,treeData:Fe,multiple:!0,treeDefaultExpandAll:!0,allowClear:!0,maxTagCount:2,placeholder:`选择多个项目`,onOpenChange:e=>{l.value=e},onChange:(e,t,n)=>{c.value=Ne(e),n.clear||(l.value=!0)}}),O(`div`,{className:`text-sm text-base-content/70`,children:[`已选：`,c.value.join(` / `)||`未选择`]})]})}),code:Ve});e(()=>g(t,u,P))});let F=s(`rue:component:anchor`);n(u,F),w(()=>{let t=x(j,{title:`Checkable`,summary:`勾选树会把多选语义进一步贴近权限树和发布范围；默认 SHOW_CHILD 会直接回填实际勾选的子节点。`,tab:E.checkable,preview:k(`div`,{className:`card border border-base-200/80 bg-base-100 shadow-sm`,children:O(`div`,{className:`card-body grid gap-4 lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`,children:[O(`div`,{className:`grid gap-3`,children:[k(H,{value:d.value,open:p.value,treeData:Pe,treeCheckable:!0,maxTagCount:2,maxTagPlaceholder:`...`,allowClear:!0,treeDefaultExpandAll:!0,onOpenChange:e=>{p.value=e},onChange:(e,t,n)=>{d.value=Ne(e),n.clear||(p.value=!0)}}),O(`div`,{className:`text-sm text-base-content/70`,children:[`回填：`,d.value.join(` / `)||`未选择`]})]}),O(`ul`,{className:`list rounded-box border border-base-300 bg-base-200/40 p-4 text-sm`,children:[O(`li`,{className:`list-row`,children:[k(`span`,{className:`font-medium`,children:`策略`}),k(`span`,{className:`list-col-grow text-base-content/70`,children:`当前示例使用默认 SHOW_CHILD，选了哪些子节点就回填哪些子节点，更适合精确范围选择。`})]}),O(`li`,{className:`list-row`,children:[k(`span`,{className:`font-medium`,children:`切换`}),k(`span`,{className:`list-col-grow text-base-content/70`,children:`如果业务更想要紧凑展示，可以把 showCheckedStrategy 改成 TreeSelect.SHOW_PARENT，让完整分组选中时折叠成父标签。`})]}),O(`li`,{className:`list-row`,children:[k(`span`,{className:`font-medium`,children:`回填`}),k(`span`,{className:`list-col-grow text-base-content/70`,children:`当前示例最多展示两个标签，更多已选项会用 ... 收起，避免 selector 被撑成两排。`})]})]})]})}),code:He});e(()=>g(t,u,F))});let I=h(`div`,u);n(u,I),o(I,`not-prose mt-10 space-y-2`);let L=h(`h2`,I);n(I,L),o(L,`text-2xl font-semibold`),n(L,y(`高级能力`));let R=h(`p`,I);n(I,R),o(R,`text-sm text-base-content/70`),n(R,y(`语义值、异步加载和外观变体覆盖配置类面板里的常见选择场景。`));let re=s(`rue:component:anchor`);n(u,re),w(()=>{let t=x(j,{title:`Label In Value`,summary:`当业务既要 value 也要 label 时，直接回填结构体会更顺手。`,tab:E.semantic,preview:k(`div`,{className:`card border border-base-200/80 bg-base-100 shadow-sm`,children:O(`div`,{className:`card-body grid gap-4 lg:grid-cols-[minmax(0,22rem),1fr] lg:items-start`,children:[k(`div`,{className:`grid gap-3`,children:k(H,{value:m.value,treeData:Pe,labelInValue:!0,treeDefaultExpandAll:!0,onChange:e=>{m.value=e??null}})}),O(`div`,{className:`rounded-box border border-base-300 bg-base-200/40 p-4 text-sm text-base-content/70`,children:[`当前结构：`,k(`code`,{children:JSON.stringify(m.value)})]})]})}),code:Ue});e(()=>g(t,u,re))});let ie=s(`rue:component:anchor`);n(u,ie),w(()=>{let t=x(j,{title:`Async Load`,summary:`展开未加载分支时触发 loadData，适合远端目录、权限树和超大分类树。`,tab:E.async,preview:k(`div`,{className:`card border border-base-200/80 bg-base-100 shadow-sm`,children:O(`div`,{className:`card-body grid gap-4 lg:grid-cols-[minmax(0,22rem),1fr] lg:items-start`,children:[O(`div`,{className:`grid gap-3`,children:[k(H,{value:v.value,treeExpandedKeys:b.value,treeData:C.value,allowClear:!0,loadData:ee,onTreeExpand:e=>{b.value=e},onChange:e=>{v.value=String(U(e)??``)}}),O(`div`,{className:`text-sm text-base-content/70`,children:[`当前节点：`,v.value||`尚未选择`]})]}),k(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`,children:`第一次展开“按需加载目录”时会把子节点注入到 treeData，这个模式适合服务端分页目录和按需权限树。`})]})}),code:We});e(()=>g(t,u,ie))});let ae=s(`rue:component:anchor`);n(u,ae),w(()=>{let t=x(j,{title:`Variant and Status`,summary:`TreeSelect 也使用 Rue 当前输入体系的 filled / warning 视觉语义。`,tab:E.shell,preview:k(`div`,{className:`card border border-base-200/80 bg-base-100 shadow-sm`,children:O(`div`,{className:`card-body grid gap-4 md:grid-cols-2`,children:[O(`div`,{className:`grid gap-3`,children:[k(H,{value:_.value,treeData:Ie,prefix:k(`span`,{className:`badge badge-neutral badge-sm`,children:`ENV`}),suffix:k(`span`,{className:`text-xs opacity-60`,children:`可清空`}),variant:`filled`,status:`warning`,allowClear:!0,treeDefaultExpandAll:!0,onChange:e=>{_.value=String(U(e)??``)}}),O(`div`,{className:`text-sm text-base-content/70`,children:[`当前环境：`,_.value||`未选择`]})]}),k(`div`,{className:`rounded-box border border-base-300 bg-base-200/40 p-4 text-sm text-base-content/70`,children:`prefix / suffix 让 TreeSelect 能自然落进环境切换、租户切换和带状态提醒的配置表单里。`})]})}),code:Ge});e(()=>g(t,u,ae))});let z=h(`div`,u);n(u,z),o(z,`not-prose mt-10 space-y-4`);let B=h(`h2`,z);n(z,B),o(B,`text-2xl font-semibold`),n(B,y(`API`));let oe=s(`rue:component:anchor`);return n(z,oe),w(()=>{let t=x(Me,{rows:Ke});e(()=>g(t,z,oe))}),t})}),u,T),u})};export{qe as default};