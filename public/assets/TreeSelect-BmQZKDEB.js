import{$ as e,Q as t,Qt as n,Wt as r,X as i,Y as a,Yt as o,dt as s,et as c,gt as l,ht as u,i as d,l as f,lt as p,mt as m,n as h,nt as g,o as _,pt as v,r as y,s as b,st as x,t as S,tt as C,vt as w,zt as T}from"./vapor-runtime-CXIalONM.js";import{a as E,n as D,t as O}from"./vapor-helpers-vapor-CoXKrGmY.js";import{a as k,i as A}from"./persistentSidebarPlayground-DBDp2zjv.js";import{r as ee}from"./SidebarPlaygroundDesign-CsC_YS7V.js";import{t as j}from"./PreviewBlock-RQJhyX9w.js";var M=`SHOW_ALL`,te=`SHOW_PARENT`,N=`SHOW_CHILD`,ne={xs:`input-xs`,sm:`input-sm`,md:``,lg:`input-lg`,xl:`input-xl`,small:`input-sm`,medium:``,middle:``,large:`input-lg`},P=0,F={label:`title`,value:`value`,children:`children`,key:`key`,disabled:`disabled`,selectable:`selectable`,checkable:`checkable`,disableCheckbox:`disableCheckbox`,isLeaf:`isLeaf`,className:`className`,icon:`icon`,id:`id`,pId:`pId`},I=(...e)=>e.filter(Boolean).join(` `),L=e=>typeof e==`object`&&!!e&&!Array.isArray(e),R=e=>typeof e==`string`||typeof e==`number`,re=e=>e==null?[]:Array.isArray(e)?e:[e],ie=e=>`${typeof e}:${String(e)}`,ae=e=>{if(R(e))return e;if(L(e)&&R(e.value))return e.value},z=e=>re(e).flatMap(e=>{let t=ae(e);return t===void 0?[]:[t]}),B=(e,t,n)=>e[n?.[t]??F[t]],oe=(e,t)=>B(e,`label`,t)??e.title??e.label??B(e,`value`,t)??B(e,`key`,t),se=e=>typeof e==`string`||typeof e==`number`?String(e):``,ce=(e,t,n)=>{if(!t)return e;let r=L(t)?t:void 0,i=r?.id??n?.id??F.id,a=r?.pId??n?.pId??F.pId,o=r?.rootPId??0,s=n?.children??F.children,c=new Map;e.forEach((e,t)=>{let n=e[i]??e.value??e.key??t;c.set(n,{...e,[s]:[]})});let l=[];return e.forEach((e,t)=>{let n=e[i]??e.value??e.key??t,r=e[a],u=c.get(n);if(!u)return;if(r==null||r===o||!c.has(r)){l.push(u);return}let d=c.get(r);if(!d){l.push(u);return}let f=d[s]??[];f.push(u),d[s]=f}),l},le=(e,t)=>{let n=[],r={},i=(e,a,o,s)=>{let c=B(e,`children`,t),l=B(e,`value`,t),u=B(e,`key`,t),d=B(e,`isLeaf`,t),f=R(l)?l:R(u)?u:o,p=oe(e,t),m=ie(f),h=Array.isArray(c)?c.map((e,t)=>i(e,a+1,`${o}-${t}`,m)):[],g={key:String(u??f),value:f,valueKey:m,label:p,labelText:se(p),depth:a,parentValueKey:s,children:h,raw:e,disabled:!!B(e,`disabled`,t),selectable:B(e,`selectable`,t)!==!1,checkable:B(e,`checkable`,t)!==!1,disableCheckbox:!!B(e,`disableCheckbox`,t),isLeaf:d===!0?!0:d===!1?!1:h.length===0,className:B(e,`className`,t),icon:B(e,`icon`,t)};return n.push(g),r[m]=g,g};return{roots:e.map((e,t)=>i(e,0,`node-${t}`)),flat:n,byValueKey:r}},ue=e=>{let t=[],n=e=>{!e.disabled&&e.checkable&&!e.disableCheckbox&&t.push(e.valueKey),e.children.forEach(e=>n(e))};return n(e),t},de=e=>{let t=[];return e.children.forEach(e=>{ue(e).forEach(e=>t.push(e))}),t},fe=(e,t,n)=>{let r=new Set;return e.forEach(e=>{let i=t[e];if(!i)return;if(n){r.add(e);return}let a=de(i);if(a.length>0){a.forEach(e=>r.add(e));return}!i.disabled&&i.checkable&&!i.disableCheckbox&&r.add(e)}),r},pe=(e,t,n)=>{let r=new Set,i=new Set,a={},o=e=>{let s=!e.disabled&&e.checkable&&!e.disableCheckbox,c=e.children.map(e=>o(e)).filter(e=>e.participates),l=t.has(e.valueKey),u=l,d=!1;if(!n&&c.length>0){let e=c.every(e=>e.checked),t=c.some(e=>e.checked||e.halfChecked);u=l||e,d=!u&&t}let f=s||c.length>0,p={checked:u,halfChecked:d,participates:f};return a[e.valueKey]=p,u&&s&&r.add(e.valueKey),d&&s&&i.add(e.valueKey),p};return e.forEach(e=>o(e)),{checkedKeys:r,halfCheckedKeys:i,stateMap:a}},me=(e,t,n)=>{let r=[],i=(e,a)=>{let o=t[e.valueKey];if(!o)return;let s=e.children.map(e=>t[e.valueKey]).filter(Boolean).some(e=>e.checked||e.halfChecked),c=!e.disabled&&e.checkable&&!e.disableCheckbox&&o.checked;if(n===`SHOW_ALL`){c&&r.push(e),e.children.forEach(e=>i(e,a));return}if(n===`SHOW_PARENT`){if(c&&s&&!a){r.push(e);return}if(c&&!s&&!a){r.push(e);return}e.children.forEach(e=>i(e,a||c));return}if(c&&!s){r.push(e);return}if(c&&e.children.length===0){r.push(e);return}e.children.forEach(e=>i(e,a))};return e.forEach(e=>i(e,!1)),r},V=(e,t)=>t&&e.raw[t]!==void 0?e.raw[t]:e.label,he=(e,t,n)=>({value:e.value,key:e.value,label:V(e,n),halfChecked:t,disabled:e.disabled}),ge=(e,t,n,r,i)=>{let a=n?e.map(e=>he(e,r.has(e.valueKey),i)):e.map(e=>e.value);return t?a:a[0]??null},_e=(e,t,n)=>{let r=e.map(e=>V(e,n));return t?r:r[0]??null},ve=(e,t,n)=>String(t===`title`||t===`label`?V(e,n)??``:t===`value`?e.value:e.raw[t]??``),ye=(e,t)=>[String(e.value??``),String(V(e,t)??``)],be=(e,t,n,r)=>{if(!n){let n=[],r=e=>{n.push({node:e,matched:!1}),t.has(e.valueKey)&&e.children.forEach(e=>r(e))};return e.forEach(e=>r(e)),n}let i=[],a=(e,t)=>{i.push({node:e,matched:t}),e.children.forEach(e=>a(e,!1))},o=e=>{let t=r(e),n=e.children.flatMap(e=>o(e));if(!t&&n.length===0)return[];if(t){let t=[{node:e,matched:!0}];return e.children.forEach(e=>{let n=[],r=(e,t)=>{n.push({node:e,matched:t}),e.children.forEach(e=>r(e,!1))};r(e,!1),t.push(...n)}),t}return[{node:e,matched:!1},...n]};return e.forEach(e=>{i.push(...o(e))}),i},xe=(e,t)=>{let n=e?.[t];if(typeof n==`string`)return n;if(L(n)&&typeof n.root==`string`)return n.root},Se=(e,t)=>{let n=e?.[t];if(L(n)&&!(`root`in n))return n;if(L(n?.root))return n.root},Ce=(e,t)=>{let n=typeof e==`string`||typeof e==`number`?String(e):e;return typeof n!=`string`||!t||n.length<=t?n:`${n.slice(0,t)}...`},we=e=>typeof e==`string`||typeof e==`number`?String(e):e==null||e===!1?``:String(e),Te=e=>f(t=>{let r=c(`span`,t);x(r,`aria-hidden`,`true`),n(()=>{p(r,I(`inline-flex h-4 w-4 items-center justify-center text-base-content/55 transition-transform duration-150`,e.expanded&&`rotate-90`,e.hidden&&`opacity-0`))});let a=c(`svg`,r);i(r,a),x(a,`viewBox`,`0 0 20 20`),x(a,`fill`,`none`),p(a,`h-4 w-4`);let o=c(`path`,a);return i(a,o),x(o,`d`,`M7.5 5.5L12.5 10L7.5 14.5`),x(o,`stroke`,`currentColor`),x(o,`stroke-width`,`1.8`),x(o,`stroke-linecap`,`round`),x(o,`stroke-linejoin`,`round`),r}),Ee=()=>f(e=>{let t=c(`span`,e);return p(t,`loading loading-spinner loading-xs text-base-content/55`),x(t,`aria-hidden`,`true`),t}),De=()=>f(e=>{let t=c(`svg`,e);x(t,`viewBox`,`0 0 20 20`),x(t,`fill`,`none`),p(t,`block h-4 w-4`);let n=c(`path`,t);return i(t,n),x(n,`d`,`M6 6L14 14M14 6L6 14`),x(n,`stroke`,`currentColor`),x(n,`stroke-width`,`1.8`),x(n,`stroke-linecap`,`round`),t}),Oe=n=>n.icon!==void 0&&n.icon!==null?n.icon:f(n=>{let r=e(),a=t(`rue:component:anchor`);return i(r,a),_(S(De,{}),r,a),r}),ke=s=>{let{handleClose:l}=E(`useSetup:0:0`,()=>o(()=>({handleClose:e=>{s.onRemove(s.node,e)}})));return s.tagRender?s.tagRender({label:s.label,value:s.node.value,disabled:s.node.disabled,closable:!s.disabled,node:s.node,onClose:l}):f(o=>{let u=c(`span`,o);n(()=>{x(u,`data-rue-tree-select-tag-value`,String(s.node.valueKey))}),n(()=>{p(u,I(`badge badge-outline inline-flex max-w-full items-center gap-1 rounded-md px-2 py-1 text-xs font-medium leading-none`,s.tagClassName))}),n(()=>{let e=s.tagStyle;v(u,e)});let d=c(`span`,u);i(u,d),p(d,`truncate`);let m=t(`rue:slot:anchor`);i(d,m),n(()=>{let e=s.label;r(()=>_(e,d,m))});let h=t(`rue:slot:anchor`);return i(u,h),n(()=>{let t=s.disabled?``:f(()=>{let t=e(),r=c(`button`,t);return i(t,r),x(r,`type`,`button`),p(r,`btn btn-ghost btn-xs inline-flex h-4 min-h-0 w-4 shrink-0 items-center justify-center rounded-full p-0 text-center leading-none`),n(()=>{x(r,`aria-label`,String(`移除 ${we(s.rawLabel??s.node.value)}`))}),a(r,`click`,l),i(r,C(`×`)),t});r(()=>_(t,u,h))}),u})},Ae=a=>a.loadingNode?f(n=>{let r=e(),a=t(`rue:component:anchor`);return i(r,a),_(S(Ee,{}),r,a),r}):typeof a.switcherIcon==`function`?a.switcherIcon({expanded:a.expanded,loading:a.loadingNode,selected:a.selected,checked:a.state.checked,halfChecked:a.halfChecked,node:a.node}):a.switcherIcon===void 0?f(o=>{let s=e(),c=t(`rue:component:anchor`);return i(s,c),n(()=>{let e=S(Te,{expanded:a.expanded,hidden:!a.canExpand});r(()=>_(e,s,c))}),s}):a.switcherIcon,je=o=>f(l=>{let d=c(`div`,l);n(()=>{x(d,`data-rue-tree-select-node`,String(o.node.valueKey))}),n(()=>{p(d,I(`group flex items-center gap-1 rounded-lg py-1.5 pr-2`,o.matched&&`bg-primary/8`,o.treeLine&&o.node.depth>0&&`border-l border-base-300/60`,o.node.className))}),n(()=>{v(d,{paddingLeft:`${o.node.depth*16+4}px`})});let m=c(`button`,d);i(d,m),x(m,`type`,`button`),p(m,`inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md hover:bg-base-200 disabled:cursor-not-allowed`),n(()=>{s(m,!o.canExpand||o.mergedDisabled||o.node.disabled)}),n(()=>{x(m,`aria-label`,String(o.expanded?`折叠节点`:`展开节点`))}),a(m,`click`,e=>{o.onExpand(o.node,e)});let h=t(`rue:component:anchor`);i(m,h),n(()=>{let e=S(Ae,{node:o.node,state:o.state,selected:o.selected,halfChecked:o.halfChecked,expanded:o.expanded,loadingNode:o.loadingNode,canExpand:o.canExpand,switcherIcon:o.switcherIcon});r(()=>_(e,m,h))});let y=t(`rue:slot:anchor`);i(d,y),n(()=>{let t=o.treeCheckable?f(()=>{let t=e(),r=c(`button`,t);i(t,r),x(r,`type`,`button`),x(r,`role`,`checkbox`),n(()=>{x(r,`aria-checked`,String(o.halfChecked?`mixed`:o.state.checked?`true`:`false`))}),n(()=>{s(r,o.checkboxDisabled)}),n(()=>{p(r,I(`inline-flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors duration-150`,o.state.checked||o.halfChecked?`border-primary bg-primary text-primary-content`:`border-base-content/40 bg-base-100 text-base-content/0`,o.checkboxDisabled&&`opacity-45`))}),a(r,`click`,e=>{o.onToggle(o.node,e)});let l=g(r);return i(r,l),n(()=>{u(l,o.halfChecked?`−`:o.state.checked?`✓`:``)}),t}):``;r(()=>_(t,d,y))});let b=c(`button`,d);i(d,b),x(b,`type`,`button`),n(()=>{p(b,I(`flex min-w-0 flex-1 items-center gap-1 rounded-md px-1.5 py-1 text-left text-sm transition-colors duration-150`,o.selected?`bg-primary/12 text-primary`:`text-base-content hover:bg-base-200/70`,(o.mergedDisabled||o.node.disabled||!o.node.selectable)&&`cursor-not-allowed opacity-55`))}),n(()=>{s(b,o.mergedDisabled||o.node.disabled||!o.node.selectable)}),a(b,`click`,e=>{o.onToggle(o.node,e)});let C=t(`rue:slot:anchor`);return i(b,C),n(()=>{let e=o.label;r(()=>_(e,b,C))}),d}),H=u=>{let{__rue_rest_omit_0:g,__rue_rest_omit_1:k,__rue_rest_omit_2:A,__rue_rest_omit_3:ee,__rue_rest_omit_4:j,__rue_rest_omit_5:M,__rue_rest_omit_6:te,__rue_rest_omit_7:F,__rue_rest_omit_8:re,__rue_rest_omit_9:ae,__rue_rest_omit_10:B,__rue_rest_omit_11:oe,__rue_rest_omit_12:se,__rue_rest_omit_13:de,__rue_rest_omit_14:Te,__rue_rest_omit_15:Ee,__rue_rest_omit_16:De,__rue_rest_omit_17:Ae,__rue_rest_omit_18:H,__rue_rest_omit_19:Me,__rue_rest_omit_20:U,__rue_rest_omit_21:Ne,__rue_rest_omit_22:Pe,__rue_rest_omit_23:Fe,__rue_rest_omit_24:Ie,__rue_rest_omit_25:Le,__rue_rest_omit_26:Re,__rue_rest_omit_27:ze,__rue_rest_omit_28:Be,__rue_rest_omit_29:Ve,__rue_rest_omit_30:He,__rue_rest_omit_31:Ue,__rue_rest_omit_32:We,__rue_rest_omit_33:Ge,__rue_rest_omit_34:Ke,__rue_rest_omit_35:qe,__rue_rest_omit_36:Je,__rue_rest_omit_37:Ye,__rue_rest_omit_38:Xe,__rue_rest_omit_39:Ze,__rue_rest_omit_40:W,__rue_rest_omit_41:Qe,__rue_rest_omit_42:$e,__rue_rest_omit_43:et,__rue_rest_omit_44:tt,__rue_rest_omit_45:nt,__rue_rest_omit_46:rt,__rue_rest_omit_47:it,__rue_rest_omit_48:at,__rue_rest_omit_49:ot,__rue_rest_omit_50:st,__rue_rest_omit_51:ct,__rue_rest_omit_52:G,__rue_rest_omit_53:K,__rue_rest_omit_54:lt,__rue_rest_omit_55:q,__rue_rest_omit_56:ut,__rue_rest_omit_57:dt,__rue_rest_omit_58:ft,__rue_rest_omit_59:pt,__rue_rest_omit_60:mt,__rue_rest_omit_61:ht,__rue_rest_omit_62:gt,__rue_rest_omit_63:_t,__rue_rest_omit_64:vt,rest:yt,rootRef:bt,instanceId:xt,renderVersion:St,uncontrolledValue:Ct,internalOpen:wt,initialTree:Tt,initialExpandedKeys:Et,uncontrolledExpandedKeys:Dt,uncontrolledLoadedKeys:J,internalSearch:Y,loadingNodeKeys:Ot,treeBodyScrollTop:kt,staleTreeNodeCleanupVersion:At,searchConfig:jt,mergedMultiple:Mt,mergedLabelInValue:Nt,mergedDisabled:X,allowClearConfig:Pt,mergedShowSearch:Ft,selectorSemanticClassName:It,selectorSemanticStyle:Lt,popupSemanticClassName:Rt,popupSemanticStyle:zt,treeSemanticClassName:Bt,treeSemanticStyle:Vt,searchSemanticClassName:Z,searchSemanticStyle:Q,tagSemanticClassName:Ht,tagSemanticStyle:Ut,rootSemanticClassName:Wt,rootSemanticStyle:Gt,getNormalizedTree:Kt,getMergedSearchValue:qt,getMergedOpen:Jt,getExpandedValueKeys:$,getExpandedKeySet:Yt,getLoadedValueKeys:Xt,getLoadedKeySet:Zt,getSelectionSnapshot:Qt,filterProp:$t,filterLogic:en,matchesNode:tn,visibleTagCount:nn,getVisibleNodes:rn,buildSelectionPreview:an,getClearButtonVisible:on,requestRender:sn,setMergedOpen:cn,prepareKeepMultiplePopupOpen:ln,setMergedSearchValue:un,setExpandedKeys:dn,setLoadedKeys:fn,canLoadNodeData:pn,canExpandNode:mn,emitSelectionCallbacks:hn,commitValue:gn,removeNodeFromSelection:_n,clearSelection:vn,handleNodeToggle:yn,handleExpandToggle:bn,handleRootMouseDown:xn,handleSelectorClick:Sn,rememberTreeBodyScroll:Cn,restoreTreeBodyScroll:wn,cleanupStaleTags:Tn,cleanupStaleTreeNodes:En,resolvedSizeClass:Dn,selectorClass:On,popupClass:kn,popupSizingStyle:An,selectionState:jn,displayNodes:Mn,tagDisplayNodes:Nn,hasValue:Pn,visibleTagNodes:Fn,omittedTagNodes:In,mergedOpenState:Ln,mergedSearchValueState:Rn,showSearchInput:zn,clearButtonVisible:Bn,visibleNodes:Vn,expandedKeySetState:Hn,loadedKeySetState:Un}=E(`useSetup:0:0:dup1`,()=>o(()=>{let{value:e,defaultValue:t,treeData:n,fieldNames:r,treeDataSimpleMode:i,multiple:a,treeCheckable:o,treeCheckStrictly:s,showCheckedStrategy:c,labelInValue:l,showSearch:f,searchValue:p,filterTreeNode:m,treeNodeFilterProp:h,placeholder:g,allowClear:_,clearLabel:v,notFoundContent:b,disabled:x,loading:S,open:C,defaultOpen:D,onOpenChange:O,treeDefaultExpandAll:k,treeDefaultExpandedKeys:A,treeExpandedKeys:ee,treeLoadedKeys:j,onTreeExpand:M,loadData:te,maxCount:F,maxTagCount:re,maxTagPlaceholder:ae,maxTagTextLength:B,listHeight:oe,placement:se,popupMatchSelectWidth:de,size:V,status:Ce,variant:we,prefix:Te,suffix:Ee,suffixIcon:De,showArrow:Oe,switcherIcon:ke,treeTitleRender:Ae,treeNodeLabelProp:je,treeLine:H,onSearch:Me,onChange:U,onSelect:Ne,onDeselect:Pe,onClear:Fe,onPopupScroll:Ie,className:Le,style:Re,selectorClassName:ze,selectorStyle:Be,popupClassName:Ve,popupStyle:He,dropdownClassName:Ue,dropdownStyle:We,classNames:Ge,styles:Ke,tagRender:qe,children:Je,...Ye}=u,Xe=E(`ref:1:0`,()=>T(void 0)),Ze=E(`ref:1:1`,()=>T(`rue-tree-select-${P++}`)),W=E(`ref:1:2`,()=>T(0)),Qe=E(`ref:1:3`,()=>T(u.defaultValue??(u.treeCheckable||u.multiple?[]:null))),$e=E(`ref:1:4`,()=>T(!!u.defaultOpen)),et=le(ce(u.treeData===void 0?[]:u.treeData,u.treeDataSimpleMode,u.fieldNames),u.fieldNames),tt=u.treeDefaultExpandAll?et.flat.filter(e=>e.children.length>0).map(e=>e.value):u.treeDefaultExpandedKeys??[],nt=E(`ref:1:5`,()=>T(tt)),rt=E(`ref:1:6`,()=>T([])),it=E(`ref:1:7`,()=>T(``)),at=E(`ref:1:8`,()=>T([])),ot=E(`ref:1:9`,()=>T(0)),st=E(`ref:1:10`,()=>T(0)),ct=E(`computed:1:11`,()=>w(()=>L(u.showSearch)?u.showSearch:void 0)),G=ct,K=!!u.multiple||!!u.treeCheckable,lt=!!u.labelInValue||!!u.treeCheckStrictly,q=!!u.disabled||!!u.loading,ut=E(`computed:1:12`,()=>w(()=>L(u.allowClear)?u.allowClear:u.allowClear?{}:null)),dt=ut,ft=E(`computed:1:13`,()=>w(()=>typeof u.showSearch==`boolean`?u.showSearch:u.showSearch===void 0?K:!0)),pt=ft,mt=E(`computed:1:14`,()=>w(()=>xe(u.classNames,`selector`))),ht=mt,gt=E(`computed:1:15`,()=>w(()=>Se(u.styles,`selector`))),_t=E(`computed:1:16`,()=>w(()=>xe(u.classNames,`popup`))),vt=_t,yt=E(`computed:1:17`,()=>w(()=>Se(u.styles,`popup`))),bt=E(`computed:1:18`,()=>w(()=>xe(u.classNames,`tree`))),xt=E(`computed:1:19`,()=>w(()=>Se(u.styles,`tree`))),St=E(`computed:1:20`,()=>w(()=>xe(u.classNames,`search`))),Ct=E(`computed:1:21`,()=>w(()=>Se(u.styles,`search`))),wt=E(`computed:1:22`,()=>w(()=>xe(u.classNames,`tag`))),Tt=E(`computed:1:23`,()=>w(()=>Se(u.styles,`tag`))),Et=E(`computed:1:24`,()=>w(()=>xe(u.classNames,`root`))),Dt=E(`computed:1:25`,()=>w(()=>Se(u.styles,`root`))),J=()=>le(ce(u.treeData===void 0?[]:u.treeData,u.treeDataSimpleMode,u.fieldNames),u.fieldNames),Y=()=>G.get()?.searchValue??u.searchValue??(pt.get()?it.value:``),Ot=()=>u.open??$e.value,kt=()=>z(u.treeExpandedKeys??nt.value),At=()=>new Set(kt().map(ie)),jt=()=>z(u.treeLoadedKeys??rt.value),Mt=()=>new Set(jt().map(ie)),Nt=()=>{let e=J(),t=z(u.value===void 0?Qe.value:u.value).map(ie),n=new Set(t),r=u.treeCheckable?fe(t,e.byValueKey,!!u.treeCheckStrictly):n,i=u.treeCheckable?pe(e.roots,r,!!u.treeCheckStrictly):{checkedKeys:n,halfCheckedKeys:new Set,stateMap:Object.fromEntries(e.flat.map(e=>[e.valueKey,{checked:n.has(e.valueKey),halfChecked:!1,participates:!0}]))},a=u.treeCheckable?me(e.roots,i.stateMap,u.showCheckedStrategy===void 0?N:u.showCheckedStrategy):t.map(t=>e.byValueKey[t]).filter(Boolean);return{currentValueKeys:t,currentValueKeySet:n,derivedCheckState:i,displayNodes:a,displayNodeKeySet:new Set(a.map(e=>e.valueKey))}},X=E(`computed:1:26`,()=>w(()=>G.get()?.treeNodeFilterProp??u.treeNodeFilterProp)),Pt=X,Ft=E(`computed:1:27`,()=>w(()=>G.get()?.filterTreeNode??u.filterTreeNode??!0)),It=Ft,Lt=(e,t)=>{if(!t)return!0;if(typeof It.get()==`function`)return It.get()(t,e);if(It.get()===!1)return!0;let n=t.toLowerCase();return(Pt.get()?[ve(e,Pt.get(),u.treeNodeLabelProp===void 0?`title`:u.treeNodeLabelProp)]:ye(e,u.treeNodeLabelProp===void 0?`title`:u.treeNodeLabelProp)).some(e=>e.toLowerCase().includes(n))},Rt=typeof u.maxTagCount==`number`&&u.maxTagCount>=0?Math.max(0,u.maxTagCount):void 0,zt=()=>{let e=J(),t=Y();return be(e.roots,At(),t,e=>Lt(e,t))},Bt=(e,t)=>{let n=new Set(e.map(e=>e.valueKey));return{currentValueKeySet:n,derivedCheckState:t??{checkedKeys:n,halfCheckedKeys:new Set,stateMap:Object.fromEntries(J().flat.map(e=>[e.valueKey,{checked:n.has(e.valueKey),halfChecked:!1,participates:!0}]))},displayNodes:e,displayNodeKeySet:new Set(e.map(e=>e.valueKey))}},Vt=e=>{let t=e?.length??Nt().displayNodes.length;return!!dt.get()&&!q&&t>0},Z=()=>{W.value+=1,nn()},Q=(e,t)=>{let n=Ot()!==e;u.open===void 0&&$e.value!==e&&($e.value=e,Z()),n&&u.onOpenChange&&u.onOpenChange(e)},Ht=()=>{u.open===void 0&&Q(!0)},Ut=(e,t)=>{let n=!1;if(G.get()?.searchValue===void 0&&u.searchValue===void 0){if(it.value===e)return;it.value=e,n=!0}G.get()?.onSearch&&G.get().onSearch(e),u.onSearch&&u.onSearch(e),n&&(Z(),an(zt().map(e=>e.node.valueKey)))},Wt=e=>{u.treeExpandedKeys===void 0&&(nt.value=e,Z()),u.onTreeExpand&&u.onTreeExpand(e)},Gt=e=>{u.treeLoadedKeys===void 0&&(rt.value=e,Z())},Kt=(e,t=Mt())=>!!u.loadData&&!e.isLeaf&&e.children.length===0&&!t.has(e.valueKey),qt=(e,t=Mt())=>e.children.length>0||Kt(e,t),Jt=(e,t,n,r)=>{let i=new Set(e.map(e=>e.valueKey)),a=new Set(t.map(e=>e.valueKey));u.onDeselect&&e.filter(e=>!a.has(e.valueKey)).forEach(e=>{u.onDeselect(lt?he(e,r.has(e.valueKey),u.treeNodeLabelProp===void 0?`title`:u.treeNodeLabelProp):e.value,e,{...n,selected:!1,checked:!1})}),u.onSelect&&t.filter(e=>!i.has(e.valueKey)).forEach(e=>{u.onSelect(lt?he(e,r.has(e.valueKey),u.treeNodeLabelProp===void 0?`title`:u.treeNodeLabelProp):e.value,e,{...n,selected:!0,checked:!0})})},$=(e,t,n)=>{let r=J(),i=Nt(),a=ge(e,K,lt,n,u.treeNodeLabelProp===void 0?`title`:u.treeNodeLabelProp),o=_e(e,K,u.treeNodeLabelProp===void 0?`title`:u.treeNodeLabelProp);u.value===void 0&&(Qe.value=a,Z()),Jt(i.displayNodes,e,{...t,displayNodes:e,halfCheckedKeys:Array.from(n).map(e=>r.byValueKey[e]?.value).filter(R)},n),u.onChange&&u.onChange(a,o,{...t,displayNodes:e,halfCheckedKeys:Array.from(n).map(e=>r.byValueKey[e]?.value).filter(R),checkedNodes:u.treeCheckable?r.flat.filter(t=>e.some(e=>e.valueKey===t.valueKey)):e}),Z(),rn(e.map(e=>e.valueKey))},Yt=(e,t)=>{tn(t),t.preventDefault(),t.stopPropagation();let n=Nt(),r=J();if(u.treeCheckable){let t=fe(n.currentValueKeys,r.byValueKey,!!u.treeCheckStrictly);u.treeCheckStrictly?t.delete(e.valueKey):ue(e).forEach(e=>t.delete(e));let i=pe(r.roots,t,!!u.treeCheckStrictly),a=me(r.roots,i.stateMap,u.showCheckedStrategy===void 0?N:u.showCheckedStrategy);return $(a,{triggerNode:e,triggerValue:e.value,checked:!1},i.halfCheckedKeys),Bt(a,i)}let i=n.displayNodes.filter(t=>t.valueKey!==e.valueKey);return $(i,{triggerNode:e,triggerValue:e.value,selected:!1},new Set),Bt(i)},Xt=e=>{tn(e),e.preventDefault(),e.stopPropagation(),u.onClear&&u.onClear(e),Y()&&Ut(``),$([],{clear:!0,selected:!1,checked:!1,triggerNode:null,triggerValue:null},new Set)},Zt=(e,t)=>{if(tn(t),t.preventDefault(),t.stopPropagation(),q||e.disabled)return null;if(!K&&!u.treeCheckable&&Kt(e))return Qt(e,t),Nt();let n=Nt(),r=J();if(u.treeCheckable){let t=fe(n.currentValueKeys,r.byValueKey,!!u.treeCheckStrictly),i=n.derivedCheckState.checkedKeys.has(e.valueKey);if(u.treeCheckStrictly)i?t.delete(e.valueKey):t.add(e.valueKey);else{let n=ue(e);i?n.forEach(e=>t.delete(e)):n.forEach(e=>t.add(e))}let a=pe(r.roots,t,!!u.treeCheckStrictly),o=me(r.roots,a.stateMap,u.showCheckedStrategy===void 0?N:u.showCheckedStrategy);return!i&&u.maxCount&&o.length>u.maxCount?null:(Ht(),$(o,{triggerNode:e,triggerValue:e.value,checked:!i,selected:!i},a.halfCheckedKeys),(G.get()?.autoClearSearchValue??!0)&&Y()&&Ut(``),Q(!0),Bt(o,a))}if(K){let t=n.displayNodes.some(t=>t.valueKey===e.valueKey)?n.displayNodes.filter(t=>t.valueKey!==e.valueKey):[...n.displayNodes,e];return!n.displayNodeKeySet.has(e.valueKey)&&u.maxCount&&t.length>u.maxCount?null:(Ht(),$(t,{triggerNode:e,triggerValue:e.value,selected:!n.displayNodeKeySet.has(e.valueKey)},new Set),(G.get()?.autoClearSearchValue??!0)&&Y()&&Ut(``),Q(!0),Bt(t))}return $([e],{triggerNode:e,triggerValue:e.value,selected:!0},new Set),Y()&&Ut(``),Q(!1,{selectionOverride:[e]}),Bt([e])},Qt=(e,t)=>{tn(t),t.preventDefault(),t.stopPropagation();let n=Mt();if(q||e.disabled||!qt(e,n))return;let r=At(),i=jt(),a=Y(),o=J(),s=new Set(r),c=!r.has(e.valueKey);c?s.add(e.valueKey):s.delete(e.valueKey),Wt(Array.from(s).map(e=>o.byValueKey[e]?.value).filter(R)),c&&u.loadData&&!a&&!n.has(e.valueKey)&&!at.value.includes(e.valueKey)&&!e.isLeaf&&e.children.length===0&&(at.value=[...at.value,e.valueKey],Z(),Promise.resolve(u.loadData(e)).then(()=>{Gt(Array.from(new Set([...i,e.value])))}).finally(()=>{at.value=at.value.filter(t=>t!==e.valueKey),Z()}))},$t=e=>{e.stopPropagation(),q&&e.preventDefault()},en=()=>{q||Q(!Ot())},tn=e=>{let t=e.currentTarget?.closest(`[role="tree"]`);t&&(ot.value=t.scrollTop)},nn=()=>{setTimeout(()=>{let e=document.querySelector(`[data-rue-tree-select-popup="true"] [role="tree"]`);e&&e.scrollTop!==ot.value&&(e.scrollTop=ot.value)},0)},rn=e=>{setTimeout(()=>{let t=new Set(e);document.querySelector(`[data-rue-tree-select-id="${Ze.value}"]`)?.querySelectorAll(`[data-rue-tree-select-tag-value]`).forEach(e=>{let n=e.getAttribute(`data-rue-tree-select-tag-value`);n&&!t.has(n)&&e.remove()})},0)},an=e=>{st.value+=1;let t=st.value;setTimeout(()=>{if(t!==st.value)return;let n=0;document.querySelector(`[data-rue-tree-select-id="${Ze.value}"]`)?.querySelectorAll(`[data-rue-tree-select-node]`).forEach(t=>{let r=t.getAttribute(`data-rue-tree-select-node`);if(r===e[n]){n+=1;return}r&&t.remove()})},0)};y(()=>{if(typeof document>`u`)return;let e=e=>{let t=e.target,n=Xe.value;n&&t&&n.contains(t)||Q(!1)},t=e=>{e.key===`Escape`&&Q(!1)};document.addEventListener(`mousedown`,e),document.addEventListener(`keydown`,t),d(()=>{document.removeEventListener(`mousedown`,e),document.removeEventListener(`keydown`,t)})});let on=ne[u.size===void 0?`md`:u.size]??``,sn=E(`computed:1:28`,()=>w(()=>I(`input relative flex w-full items-center gap-2 px-3 text-left transition-shadow duration-150`,on,u.status===`error`&&`input-error`,u.status===`warning`&&`input-warning`,(u.variant===void 0?`outlined`:u.variant)===`filled`&&`bg-base-200 border-base-300 shadow-none`,(u.variant===void 0?`outlined`:u.variant)===`borderless`&&`border-transparent bg-transparent px-0 shadow-none`,(u.variant===void 0?`outlined`:u.variant)===`underlined`&&`rounded-none border-x-0 border-t-0 bg-transparent px-0 shadow-none`,q?`cursor-not-allowed opacity-60`:`cursor-pointer`,ht.get(),u.selectorClassName))),cn=E(`computed:1:29`,()=>w(()=>I(`absolute z-40 overflow-hidden rounded-box border border-base-300 bg-base-100 shadow-[0_24px_70px_-36px_rgba(15,23,42,0.45)]`,(u.placement===void 0?`bottomLeft`:u.placement).startsWith(`top`)?`bottom-full mb-2`:`top-full mt-2`,(u.placement===void 0?`bottomLeft`:u.placement).endsWith(`Right`)?`right-0`:`left-0`,vt.get(),u.popupClassName,u.dropdownClassName))),ln=E(`computed:1:30`,()=>w(()=>(u.popupMatchSelectWidth===void 0?!0:u.popupMatchSelectWidth)===!1?{minWidth:`18rem`}:typeof(u.popupMatchSelectWidth===void 0?!0:u.popupMatchSelectWidth)==`number`?{width:`${u.popupMatchSelectWidth===void 0?!0:u.popupMatchSelectWidth}px`}:{minWidth:`100%`})),un=E(`computed:1:31`,()=>w(()=>(W.value,Nt()))),dn=E(`computed:1:32`,()=>w(()=>un.get().displayNodes)),fn=E(`computed:1:33`,()=>w(()=>K||u.treeCheckable?dn.get():[])),pn=E(`computed:1:34`,()=>w(()=>dn.get().length>0)),mn=E(`computed:1:35`,()=>w(()=>Rt===void 0?fn.get():fn.get().slice(0,Rt))),hn=E(`computed:1:36`,()=>w(()=>Rt===void 0?[]:fn.get().slice(Rt))),gn=E(`computed:1:37`,()=>w(()=>(W.value,Ot())));return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:n,__rue_rest_omit_3:r,__rue_rest_omit_4:i,__rue_rest_omit_5:a,__rue_rest_omit_6:o,__rue_rest_omit_7:s,__rue_rest_omit_8:c,__rue_rest_omit_9:l,__rue_rest_omit_10:f,__rue_rest_omit_11:p,__rue_rest_omit_12:m,__rue_rest_omit_13:h,__rue_rest_omit_14:g,__rue_rest_omit_15:_,__rue_rest_omit_16:v,__rue_rest_omit_17:b,__rue_rest_omit_18:x,__rue_rest_omit_19:S,__rue_rest_omit_20:C,__rue_rest_omit_21:D,__rue_rest_omit_22:O,__rue_rest_omit_23:k,__rue_rest_omit_24:A,__rue_rest_omit_25:ee,__rue_rest_omit_26:j,__rue_rest_omit_27:M,__rue_rest_omit_28:te,__rue_rest_omit_29:F,__rue_rest_omit_30:re,__rue_rest_omit_31:ae,__rue_rest_omit_32:B,__rue_rest_omit_33:oe,__rue_rest_omit_34:se,__rue_rest_omit_35:de,__rue_rest_omit_36:V,__rue_rest_omit_37:Ce,__rue_rest_omit_38:we,__rue_rest_omit_39:Te,__rue_rest_omit_40:Ee,__rue_rest_omit_41:De,__rue_rest_omit_42:Oe,__rue_rest_omit_43:ke,__rue_rest_omit_44:Ae,__rue_rest_omit_45:je,__rue_rest_omit_46:H,__rue_rest_omit_47:Me,__rue_rest_omit_48:U,__rue_rest_omit_49:Ne,__rue_rest_omit_50:Pe,__rue_rest_omit_51:Fe,__rue_rest_omit_52:Ie,__rue_rest_omit_53:Le,__rue_rest_omit_54:Re,__rue_rest_omit_55:ze,__rue_rest_omit_56:Be,__rue_rest_omit_57:Ve,__rue_rest_omit_58:He,__rue_rest_omit_59:Ue,__rue_rest_omit_60:We,__rue_rest_omit_61:Ge,__rue_rest_omit_62:Ke,__rue_rest_omit_63:qe,__rue_rest_omit_64:Je,rest:Ye,rootRef:Xe,instanceId:Ze,renderVersion:W,uncontrolledValue:Qe,internalOpen:$e,initialTree:et,initialExpandedKeys:tt,uncontrolledExpandedKeys:nt,uncontrolledLoadedKeys:rt,internalSearch:it,loadingNodeKeys:at,treeBodyScrollTop:ot,staleTreeNodeCleanupVersion:st,searchConfig:ct,mergedMultiple:K,mergedLabelInValue:lt,mergedDisabled:q,allowClearConfig:ut,mergedShowSearch:ft,selectorSemanticClassName:mt,selectorSemanticStyle:gt,popupSemanticClassName:_t,popupSemanticStyle:yt,treeSemanticClassName:bt,treeSemanticStyle:xt,searchSemanticClassName:St,searchSemanticStyle:Ct,tagSemanticClassName:wt,tagSemanticStyle:Tt,rootSemanticClassName:Et,rootSemanticStyle:Dt,getNormalizedTree:J,getMergedSearchValue:Y,getMergedOpen:Ot,getExpandedValueKeys:kt,getExpandedKeySet:At,getLoadedValueKeys:jt,getLoadedKeySet:Mt,getSelectionSnapshot:Nt,filterProp:X,filterLogic:Ft,matchesNode:Lt,visibleTagCount:Rt,getVisibleNodes:zt,buildSelectionPreview:Bt,getClearButtonVisible:Vt,requestRender:Z,setMergedOpen:Q,prepareKeepMultiplePopupOpen:Ht,setMergedSearchValue:Ut,setExpandedKeys:Wt,setLoadedKeys:Gt,canLoadNodeData:Kt,canExpandNode:qt,emitSelectionCallbacks:Jt,commitValue:$,removeNodeFromSelection:Yt,clearSelection:Xt,handleNodeToggle:Zt,handleExpandToggle:Qt,handleRootMouseDown:$t,handleSelectorClick:en,rememberTreeBodyScroll:tn,restoreTreeBodyScroll:nn,cleanupStaleTags:rn,cleanupStaleTreeNodes:an,resolvedSizeClass:on,selectorClass:sn,popupClass:cn,popupSizingStyle:ln,selectionState:un,displayNodes:dn,tagDisplayNodes:fn,hasValue:pn,visibleTagNodes:mn,omittedTagNodes:hn,mergedOpenState:gn,mergedSearchValueState:E(`computed:1:38`,()=>w(()=>(W.value,Y()))),showSearchInput:E(`computed:1:39`,()=>w(()=>pt.get()&&(K||u.treeCheckable||gn.get()||!pn.get()))),clearButtonVisible:E(`computed:1:40`,()=>w(()=>Vt(dn.get()))),visibleNodes:E(`computed:1:41`,()=>w(()=>(W.value,zt()))),expandedKeySetState:E(`computed:1:42`,()=>w(()=>(W.value,At()))),loadedKeySetState:E(`computed:1:43`,()=>w(()=>(W.value,Mt())))}}));return f(o=>{let d=c(`div`,o);n(()=>{l(d,yt)});let g=O(d,()=>e=>{bt.value=e??void 0});h(()=>{g()}),x(d,`data-rue-tree-select-root`,`true`),n(()=>{x(d,`data-rue-tree-select-id`,String(xt.value))}),n(()=>{p(d,I(`relative`,Wt.get(),u.className))}),n(()=>{v(d,{...Gt.get(),...u.style})}),a(d,`mousedown`,xn);let y=c(`div`,d);i(d,y),x(y,`data-rue-tree-select-selector`,`true`),n(()=>{p(y,On.get())}),n(()=>{v(y,{...Lt.get(),...u.selectorStyle})}),x(y,`role`,`combobox`),n(()=>{x(y,`aria-expanded`,String(Ln.get()))}),n(()=>{x(y,`aria-disabled`,String(X))}),x(y,`aria-haspopup`,`tree`),a(y,`click`,Sn);let w=t(`rue:slot:anchor`);i(y,w),n(()=>{let a=u.prefix===void 0?``:f(()=>{let a=e(),o=c(`span`,a);i(a,o),p(o,`flex shrink-0 items-center text-base-content/65`);let s=t(`rue:slot:anchor`);return i(o,s),n(()=>{let e=u.prefix;r(()=>_(e,o,s))}),a});r(()=>_(a,y,w))});let T=c(`div`,y);i(y,T),p(T,`flex min-w-0 flex-1 flex-wrap items-center gap-1.5 self-stretch py-1`);let E=t(`rue:list:start`),k=t(`rue:list:end`);i(T,E),i(T,k);let A=new Map;n(()=>{A=D({items:Fn.get()||[],getKey:(e,t)=>e.valueKey,elements:A,parent:T,before:k,start:E,renderItem:(e,t,n,r,i)=>{let a=V(e,u.treeNodeLabelProp===void 0?`title`:u.treeNodeLabelProp),o=Ce(a,u.maxTagTextLength);b(S(ke,{key:e.valueKey,node:e,rawLabel:a,label:o,disabled:X,tagRender:u.tagRender,tagClassName:Ht.get(),tagStyle:Ut.get(),onRemove:_n}),t,n,r)}})}),i(T,C(` `));let ee=t(`rue:slot:anchor`);i(T,ee),n(()=>{let a=In.get().length>0?f(()=>{let a=e(),o=c(`span`,a);i(a,o),p(o,`badge badge-ghost inline-flex max-w-full items-center rounded-md px-2 py-1 text-xs leading-none`);let s=t(`rue:slot:anchor`);return i(o,s),n(()=>{let e=typeof u.maxTagPlaceholder==`function`?u.maxTagPlaceholder(In.get()):u.maxTagPlaceholder??`+${In.get().length}`;r(()=>_(e,o,s))}),a}):``;r(()=>_(a,T,ee))}),i(T,C(` `));let j=t(`rue:slot:anchor`);i(T,j),n(()=>{let o=zn.get()?f(()=>{let t=e(),r=c(`input`,t);return i(t,r),x(r,`data-rue-tree-select-search`,`true`),n(()=>{m(r,Rn.get())}),n(()=>{s(r,X)}),n(()=>{x(r,`placeholder`,String(we(u.placeholder??`请选择`)))}),n(()=>{p(r,I(`min-w-[5rem] flex-1 border-0 bg-transparent px-0 py-0 text-sm leading-5 outline-none placeholder:text-base-content/40`,Z.get()))}),n(()=>{v(r,Q.get())}),a(r,`click`,e=>{e.stopPropagation(),X||cn(!0)}),a(r,`focus`,()=>{X||cn(!0)}),a(r,`input`,e=>{let t=e.target;cn(!0),un(t.value,{syncSelector:!1}),Promise.resolve().then(()=>{document.querySelector(`[data-rue-tree-select-search="true"]`)?.focus()})}),t}):f(()=>{let a=e(),o=c(`span`,a);i(a,o),n(()=>{p(o,Pn.get()&&!Mt&&!u.treeCheckable?`flex flex-1 items-center truncate text-sm leading-5`:`flex flex-1 items-center truncate text-sm leading-5 text-base-content/40`)});let s=t(`rue:slot:anchor`);return i(o,s),n(()=>{let e=Pn.get()&&!Mt&&!u.treeCheckable?V(Mn.get()[0],u.treeNodeLabelProp===void 0?`title`:u.treeNodeLabelProp):u.placeholder??`请选择`;r(()=>_(e,o,s))}),a});r(()=>_(o,T,j))});let M=c(`button`,y);i(y,M),x(M,`type`,`button`),n(()=>{p(M,I(`btn btn-ghost btn-xs btn-circle h-7 min-h-0 w-7 shrink-0 items-center justify-center self-center p-0 leading-none text-base-content/55 hover:text-base-content`,Bn.get()?`inline-flex`:`hidden`))}),n(()=>{x(M,`aria-label`,String(u.clearLabel===void 0?`清空选择`:u.clearLabel))}),n(()=>{s(M,!Bn.get())}),a(M,`click`,vn);let te=t(`rue:component:anchor`);i(M,te),n(()=>{let e=S(Oe,{icon:Pt.get()?.clearIcon});r(()=>_(e,M,te))});let N=t(`rue:slot:anchor`);i(y,N),n(()=>{let a=u.suffix===void 0?``:f(()=>{let a=e(),o=c(`span`,a);i(a,o),p(o,`flex shrink-0 items-center text-base-content/65`);let s=t(`rue:slot:anchor`);return i(o,s),n(()=>{let e=u.suffix;r(()=>_(e,o,s))}),a});r(()=>_(a,y,N))}),i(y,C(` `));let ne=t(`rue:slot:anchor`);i(y,ne),n(()=>{let a=u.showArrow===void 0||u.showArrow?f(()=>{let a=e(),o=c(`span`,a);i(a,o),p(o,`flex shrink-0 items-center`);let s=t(`rue:slot:anchor`);return i(o,s),n(()=>{let t=u.suffixIcon??f(()=>{let t=e(),r=c(`span`,t);i(t,r),x(r,`data-rue-tree-select-arrow`,`true`),x(r,`aria-hidden`,`true`),n(()=>{p(r,I(`inline-flex h-4 w-4 items-center justify-center text-base-content/55 transition-transform duration-150`,Ln.get()&&`rotate-180`))});let a=c(`svg`,r);i(r,a),x(a,`viewBox`,`0 0 20 20`),x(a,`fill`,`none`),p(a,`h-4 w-4`);let o=c(`path`,a);return i(a,o),x(o,`d`,`M5.5 7.5L10 12.5L14.5 7.5`),x(o,`stroke`,`currentColor`),x(o,`stroke-width`,`1.8`),x(o,`stroke-linecap`,`round`),x(o,`stroke-linejoin`,`round`),t});r(()=>_(t,o,s))}),a}):``;r(()=>_(a,y,ne))});let P=c(`div`,d);i(d,P),x(P,`data-rue-tree-select-popup`,`true`),n(()=>{x(P,`aria-hidden`,String(Ln.get()?`false`:`true`))}),n(()=>{l(P,{hidden:Ln.get()?void 0:!0})}),n(()=>{p(P,kn.get())}),n(()=>{v(P,{...An.get(),...zt.get(),...u.popupStyle,...u.dropdownStyle})});let F=c(`div`,P);i(P,F),x(F,`role`,`tree`),n(()=>{p(F,I(`overflow-auto p-2`,Bt.get()))}),n(()=>{v(F,{maxHeight:`${u.listHeight===void 0?320:u.listHeight}px`,...Vt.get()})}),a(F,`scroll`,e=>{kt.value=e.target.scrollTop,u.onPopupScroll&&u.onPopupScroll(e)});let L=t(`rue:slot:anchor`);i(F,L),n(()=>{let a=Vn.get().length?f(()=>{let r=e(),a=t(`rue:list:start`),o=t(`rue:list:end`);i(r,a),i(r,o);let s=new Map;return n(()=>{s=D({items:Vn.get()||[],getKey:(e,t)=>e.node.valueKey,elements:s,parent:a.parentNode,before:o,start:a,renderItem:(e,t,n,r,i)=>{b(S(je,{key:e.node.valueKey,node:e.node,matched:e.matched,state:jn.get().derivedCheckState.stateMap[e.node.valueKey]??{checked:!1,halfChecked:!1,participates:!0},selected:u.treeCheckable?(jn.get().derivedCheckState.stateMap[e.node.valueKey]??{checked:!1,halfChecked:!1,participates:!0}).checked:jn.get().currentValueKeySet.has(e.node.valueKey),halfChecked:u.treeCheckable?(jn.get().derivedCheckState.stateMap[e.node.valueKey]??{checked:!1,halfChecked:!1,participates:!0}).halfChecked:!1,expanded:Rn.get()?!0:Hn.get().has(e.node.valueKey),loadingNode:Ot.value.includes(e.node.valueKey),canExpand:mn(e.node,Un.get()),checkboxDisabled:X||e.node.disabled||e.node.disableCheckbox||!e.node.checkable,label:u.treeTitleRender?u.treeTitleRender(e.node):V(e.node,u.treeNodeLabelProp===void 0?`title`:u.treeNodeLabelProp),mergedDisabled:X,treeCheckable:u.treeCheckable,treeLine:u.treeLine,switcherIcon:u.switcherIcon,onExpand:bn,onToggle:yn}),t,n,r)}})}),r}):f(()=>{let a=e(),o=c(`div`,a);i(a,o),p(o,`rounded-md px-3 py-8 text-center text-sm text-base-content/55`);let s=t(`rue:slot:anchor`);return i(o,s),n(()=>{let e=u.notFoundContent??`暂无匹配项`;r(()=>_(e,o,s))}),a});r(()=>_(a,F,L))});let R=t(`rue:children:anchor`);return i(d,R),n(()=>{let e=u.children;r(()=>_(e,d,R))}),d})};H.SHOW_ALL=M,H.SHOW_PARENT=te,H.SHOW_CHILD=N;var Me=a=>f(o=>{let s=c(`div`,o);p(s,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let l=c(`table`,s);i(s,l),p(l,`table table-zebra`);let u=c(`thead`,l);i(l,u);let d=c(`tr`,u);i(u,d);let m=c(`th`,d);i(d,m),i(m,C(`属性`));let h=c(`th`,d);i(d,h),i(h,C(`说明`));let g=c(`th`,d);i(d,g),i(g,C(`类型`));let v=c(`th`,d);i(d,v),i(v,C(`默认值`));let y=c(`tbody`,l);i(l,y);let b=t(`rue:list:start`),S=t(`rue:list:end`);i(y,b),i(y,S);let w=new Map;return n(()=>{w=D({items:a.rows||[],getKey:(e,t)=>e.prop,elements:w,parent:y,before:S,singleRoot:!0,trackIndex:!1,start:b,renderItem:(a,o,s,l,u)=>{_(f(()=>{let o=e(),s=c(`tr`,o);i(o,s),n(()=>{x(s,`key`,String(a.prop))});let l=c(`td`,s);i(s,l);let u=c(`code`,l);i(l,u);let d=t(`rue:slot:anchor`);i(u,d),n(()=>{let e=a.prop;r(()=>_(e,u,d))});let f=c(`td`,s);i(s,f);let p=t(`rue:slot:anchor`);i(f,p),n(()=>{let e=a.description;r(()=>_(e,f,p))});let m=c(`td`,s);i(s,m);let h=c(`code`,m);i(m,h);let g=t(`rue:slot:anchor`);i(h,g),n(()=>{let e=a.type;r(()=>_(e,h,g))});let v=c(`td`,s);i(s,v);let y=c(`code`,v);i(v,y);let b=t(`rue:slot:anchor`);return i(y,b),n(()=>{let e=a.defaultValue;r(()=>_(e,y,b))}),o}),o,s)}})}),s}),U=e=>Array.isArray(e)?U(e[0]):e&&typeof e==`object`&&`value`in e?e.value:e??null,Ne=e=>{if(!Array.isArray(e)){let t=U(e);return t==null?[]:[t]}return e.map(e=>U(e)).filter(e=>e!=null)},Pe=[{title:`产品平台`,value:`platform`,children:[{title:`文档中心`,value:`docs`},{title:`资源目录`,value:`assets`},{title:`组件市场`,value:`components`}]},{title:`工程效率`,value:`engineering`,children:[{title:`构建链路`,value:`build`},{title:`质量门禁`,value:`quality`},{title:`发布管道`,value:`release`}]},{title:`增长分析`,value:`growth`,children:[{title:`实验看板`,value:`experiment`},{title:`归因报表`,value:`attribution`},{title:`留存漏斗`,value:`retention`}]}],Fe=[{title:`协作面板`,value:`workspace`,children:[{title:`日报汇总`,value:`daily`},{title:`设计交接`,value:`handoff`},{title:`会议纪要`,value:`minutes`}]},{title:`数据服务`,value:`data`,children:[{title:`分析订阅`,value:`analytics`},{title:`实验指标`,value:`metrics`},{title:`异常告警`,value:`alerts`}]}],Ie=[{title:`应用集群`,value:`apps`,children:[{title:`生产环境`,value:`prod`},{title:`预发环境`,value:`stage`},{title:`开发环境`,value:`dev`}]}],Le=[{nodeId:1,parentId:0,code:`workspace`,name:`Workspace`},{nodeId:2,parentId:1,code:`workflow`,name:`Workflow board`},{nodeId:3,parentId:1,code:`briefs`,name:`Briefs`},{nodeId:4,parentId:2,code:`review`,name:`Design review`},{nodeId:5,parentId:2,code:`release`,name:`Release checklist`}],Re=`import { ref } from '@rue-js/rue'
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
`,Ke=[{prop:`allowClear`,description:`追加清空按钮，适合单选、多选和勾选模式统一收敛到一个入口`,type:`boolean | { clearIcon?: any }`,defaultValue:`false`},{prop:`fieldNames`,description:`映射 label、value、children、key 与 simple mode 的 id / pId 字段`,type:`TreeSelectFieldNames`,defaultValue:`{ title, value, children, key }`},{prop:`labelInValue`,description:`把回填值升级为 { value, key, label, halfChecked } 结构`,type:`boolean`,defaultValue:`false`},{prop:`loadData`,description:`展开未加载节点时触发异步加载，适合目录、权限树、远端分类场景`,type:`(node) => Promise<any> | void`,defaultValue:`-`},{prop:`maxCount`,description:`限制多选 / 勾选模式下最多展示并回填多少个节点`,type:`number`,defaultValue:`-`},{prop:`multiple`,description:`多选模式，已选项会回填为标签列表`,type:`boolean`,defaultValue:`false`},{prop:`showCheckedStrategy`,description:`控制 treeCheckable 时的回填策略，支持 SHOW_ALL / SHOW_PARENT / SHOW_CHILD`,type:`TreeSelectShowCheckedStrategy`,defaultValue:`SHOW_CHILD`},{prop:`showSearch`,description:`开启搜索输入；对象模式可配置 autoClearSearchValue、filterTreeNode 与 onSearch`,type:`boolean | TreeSelectShowSearchConfig`,defaultValue:`单选 false / 多选 true`},{prop:`treeCheckable`,description:`把树节点切到 checkbox 模式，适合权限树、发布范围、分类选择`,type:`boolean`,defaultValue:`false`},{prop:`treeData`,description:`树数据源，title / value / children 为常用字段，value 在整棵树里需要唯一`,type:`TreeSelectDataNode[]`,defaultValue:`[]`},{prop:`treeDataSimpleMode`,description:`接收扁平结构树数据，并通过 id / pId 自动恢复层级`,type:`boolean | { id?: string; pId?: string; rootPId?: string | number | null }`,defaultValue:`false`},{prop:`treeDefaultExpandAll / treeExpandedKeys`,description:`控制树默认展开和受控展开，便于做大树分层浏览`,type:`boolean / TreeSelectValue[]`,defaultValue:`false / -`},{prop:`treeNodeFilterProp`,description:`搜索命中用的字段，常见设置是 title 或自定义 label 字段`,type:`string`,defaultValue:`value`},{prop:`variant / status`,description:`沿用 Rue 输入类组件的视觉语义，支持 filled、borderless、underlined 与 warning/error`,type:`'outlined' | 'filled' | 'borderless' | 'underlined' / 'warning' | 'error'`,defaultValue:`'outlined' / -`}],qe=()=>{let{basicValue:a,noClearValue:s,simpleValue:l,multipleValue:u,multipleOpen:d,checkableValue:m,checkableOpen:h,semanticValue:g,shellValue:v,asyncValue:y,asyncExpandedKeys:b,asyncTreeData:x,loadAsyncTree:w,tabs:D}=E(`useSetup:0:0`,()=>o(()=>{let e=E(`ref:1:0`,()=>T(`docs`)),t=E(`ref:1:1`,()=>T(`docs`)),n=E(`ref:1:2`,()=>T(`workflow`)),r=E(`ref:1:3`,()=>T([`analytics`,`minutes`])),i=E(`ref:1:4`,()=>T(!1)),a=E(`ref:1:5`,()=>T([`build`,`quality`])),o=E(`ref:1:6`,()=>T(!1)),s=E(`ref:1:7`,()=>T({value:`release`,key:`release`,label:`发布管道`})),c=E(`ref:1:8`,()=>T(`prod`)),l=E(`ref:1:9`,()=>T(null)),u=E(`ref:1:10`,()=>T([])),d=E(`ref:1:11`,()=>T([{title:`按需加载目录`,value:`async-root`,isLeaf:!1}]));return{basicValue:e,noClearValue:t,simpleValue:n,multipleValue:r,multipleOpen:i,checkableValue:a,checkableOpen:o,semanticValue:s,shellValue:c,asyncValue:l,asyncExpandedKeys:u,asyncTreeData:d,loadAsyncTree:async e=>{e.value===`async-root`&&(d.value=[{title:`按需加载目录`,value:`async-root`,isLeaf:!1,children:[{title:`实验看板`,value:`async-dashboard`},{title:`巡检报告`,value:`async-report`},{title:`回归清单`,value:`async-checklist`}]}])},tabs:{basic:E(`ref:1:12`,()=>T(`preview`)),noClear:E(`ref:1:13`,()=>T(`preview`)),simple:E(`ref:1:14`,()=>T(`preview`)),multiple:E(`ref:1:15`,()=>T(`preview`)),checkable:E(`ref:1:16`,()=>T(`preview`)),semantic:E(`ref:1:17`,()=>T(`preview`)),async:E(`ref:1:18`,()=>T(`preview`)),shell:E(`ref:1:19`,()=>T(`preview`))}}}));return f(o=>{let T=e(),E=t(`rue:component:anchor`);return i(T,E),_(S(ee,{children:f(()=>{let o=e(),f=c(`div`,o);i(o,f),p(f,`max-w-none prose prose-sm md:prose-base`);let T=c(`h1`,f);i(f,T),i(T,C(`TreeSelect 树选择`));let E=c(`p`,f);i(f,E),p(E,`text-sm mt-3 mb-3`),i(E,C(`TreeSelect 适合“下拉选择 + 树结构浏览”同时存在的输入场景，比如目录、组织架构、权限树、资源分类和发布范围。 这一版不照搬其他组件库的视觉，而是延续 Rue 的 input / badge / base 色阶体系，把 treeData、simple mode、多选、勾选、语义值、异步加载和 filled / warning 等核心面一次补齐。`));let O=c(`div`,f);i(f,O),p(O,`not-prose mt-8 space-y-2`);let ee=c(`h2`,O);i(O,ee),p(ee,`text-2xl font-semibold`),i(ee,C(`基础能力`));let M=c(`p`,O);i(O,M),p(M,`text-sm text-base-content/70`),i(M,C(`先把单选、搜索和清空打稳，再把 simple mode、多选与勾选这些更接近业务配置面的能力接进来。`));let te=t(`rue:component:anchor`);i(f,te),n(()=>{let e=S(j,{title:`Basic`,summary:`单选、搜索、默认展开与 allowClear 的组合，是目录选择最常见的入口。`,tab:D.basic,preview:A(`div`,{className:`card border border-base-200/80 bg-base-100 shadow-sm`,children:k(`div`,{className:`card-body gap-3`,children:[A(H,{value:a.value,treeData:Pe,treeDefaultExpandAll:!0,showSearch:!0,treeNodeFilterProp:`title`,allowClear:!0,placeholder:`选择一个树节点`,onChange:e=>{a.value=String(U(e)??``)}}),k(`div`,{className:`text-sm text-base-content/70`,children:[`当前节点：`,a.value||`未选择`]})]})}),code:Re});r(()=>_(e,f,te))});let N=t(`rue:component:anchor`);i(f,N),n(()=>{let e=S(j,{title:`Without allowClear`,summary:`未开启 allowClear 时，只保留选择交互，不显示 selector 右侧的清空入口。`,tab:D.noClear,preview:A(`div`,{className:`card border border-base-200/80 bg-base-100 shadow-sm`,children:k(`div`,{className:`card-body gap-3`,children:[A(H,{value:s.value,treeData:Pe,treeDefaultExpandAll:!0,onChange:e=>{s.value=String(U(e)??``)}}),k(`div`,{className:`text-sm text-base-content/70`,children:[`当前节点：`,s.value||`未选择`]})]})}),code:ze});r(()=>_(e,f,N))});let ne=t(`rue:component:anchor`);i(f,ne),n(()=>{let e=S(j,{title:`Simple Mode`,summary:`扁平树数据直接接入，适合后端给的是 id / pId 结构时减少前置整理成本。`,tab:D.simple,preview:A(`div`,{className:`card border border-base-200/80 bg-base-100 shadow-sm`,children:k(`div`,{className:`card-body grid gap-4 lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`,children:[k(`div`,{className:`grid gap-3`,children:[A(H,{value:l.value,treeData:Le,treeDataSimpleMode:{id:`nodeId`,pId:`parentId`,rootPId:0},fieldNames:{value:`code`,label:`name`,key:`code`},treeDefaultExpandAll:!0,showSearch:!0,treeNodeFilterProp:`title`,allowClear:!0,onChange:e=>{l.value=String(U(e)??``)}}),k(`div`,{className:`text-sm text-base-content/70`,children:[`当前目标：`,l.value||`未选择`]})]}),A(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`,children:`这类接口在 CMS、流程平台、低代码配置里很常见。只要给出 id / pId / value / title 映射，就能直接恢复成可搜索树。`})]})}),code:Be});r(()=>_(e,f,ne))});let P=t(`rue:component:anchor`);i(f,P),n(()=>{let e=S(j,{title:`Multiple`,summary:`多选模式默认以标签回填，适合通知订阅、面板订阅、资源批量绑定。`,tab:D.multiple,preview:A(`div`,{className:`card border border-base-200/80 bg-base-100 shadow-sm`,children:k(`div`,{className:`card-body gap-3`,children:[A(H,{value:u.value,open:d.value,treeData:Fe,multiple:!0,treeDefaultExpandAll:!0,allowClear:!0,maxTagCount:2,placeholder:`选择多个项目`,onOpenChange:e=>{d.value=e},onChange:(e,t,n)=>{u.value=Ne(e),n.clear||(d.value=!0)}}),k(`div`,{className:`text-sm text-base-content/70`,children:[`已选：`,u.value.join(` / `)||`未选择`]})]})}),code:Ve});r(()=>_(e,f,P))});let F=t(`rue:component:anchor`);i(f,F),n(()=>{let e=S(j,{title:`Checkable`,summary:`勾选树会把多选语义进一步贴近权限树和发布范围；默认 SHOW_CHILD 会直接回填实际勾选的子节点。`,tab:D.checkable,preview:A(`div`,{className:`card border border-base-200/80 bg-base-100 shadow-sm`,children:k(`div`,{className:`card-body grid gap-4 lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`,children:[k(`div`,{className:`grid gap-3`,children:[A(H,{value:m.value,open:h.value,treeData:Pe,treeCheckable:!0,maxTagCount:2,maxTagPlaceholder:`...`,allowClear:!0,treeDefaultExpandAll:!0,onOpenChange:e=>{h.value=e},onChange:(e,t,n)=>{m.value=Ne(e),n.clear||(h.value=!0)}}),k(`div`,{className:`text-sm text-base-content/70`,children:[`回填：`,m.value.join(` / `)||`未选择`]})]}),k(`ul`,{className:`list rounded-box border border-base-300 bg-base-200/40 p-4 text-sm`,children:[k(`li`,{className:`list-row`,children:[A(`span`,{className:`font-medium`,children:`策略`}),A(`span`,{className:`list-col-grow text-base-content/70`,children:`当前示例使用默认 SHOW_CHILD，选了哪些子节点就回填哪些子节点，更适合精确范围选择。`})]}),k(`li`,{className:`list-row`,children:[A(`span`,{className:`font-medium`,children:`切换`}),A(`span`,{className:`list-col-grow text-base-content/70`,children:`如果业务更想要紧凑展示，可以把 showCheckedStrategy 改成 TreeSelect.SHOW_PARENT，让完整分组选中时折叠成父标签。`})]}),k(`li`,{className:`list-row`,children:[A(`span`,{className:`font-medium`,children:`回填`}),A(`span`,{className:`list-col-grow text-base-content/70`,children:`当前示例最多展示两个标签，更多已选项会用 ... 收起，避免 selector 被撑成两排。`})]})]})]})}),code:He});r(()=>_(e,f,F))});let I=c(`div`,f);i(f,I),p(I,`not-prose mt-10 space-y-2`);let L=c(`h2`,I);i(I,L),p(L,`text-2xl font-semibold`),i(L,C(`高级能力`));let R=c(`p`,I);i(I,R),p(R,`text-sm text-base-content/70`),i(R,C(`语义值、异步加载和外观变体补到位之后，TreeSelect 就能覆盖绝大多数配置类面板的核心需求。`));let re=t(`rue:component:anchor`);i(f,re),n(()=>{let e=S(j,{title:`Label In Value`,summary:`当业务既要 value 也要 label 时，直接回填结构体会更顺手。`,tab:D.semantic,preview:A(`div`,{className:`card border border-base-200/80 bg-base-100 shadow-sm`,children:k(`div`,{className:`card-body grid gap-4 lg:grid-cols-[minmax(0,22rem),1fr] lg:items-start`,children:[A(`div`,{className:`grid gap-3`,children:A(H,{value:g.value,treeData:Pe,labelInValue:!0,treeDefaultExpandAll:!0,onChange:e=>{g.value=e??null}})}),k(`div`,{className:`rounded-box border border-base-300 bg-base-200/40 p-4 text-sm text-base-content/70`,children:[`当前结构：`,A(`code`,{children:JSON.stringify(g.value)})]})]})}),code:Ue});r(()=>_(e,f,re))});let ie=t(`rue:component:anchor`);i(f,ie),n(()=>{let e=S(j,{title:`Async Load`,summary:`展开未加载分支时触发 loadData，适合远端目录、权限树和超大分类树。`,tab:D.async,preview:A(`div`,{className:`card border border-base-200/80 bg-base-100 shadow-sm`,children:k(`div`,{className:`card-body grid gap-4 lg:grid-cols-[minmax(0,22rem),1fr] lg:items-start`,children:[k(`div`,{className:`grid gap-3`,children:[A(H,{value:y.value,treeExpandedKeys:b.value,treeData:x.value,allowClear:!0,loadData:w,onTreeExpand:e=>{b.value=e},onChange:e=>{y.value=String(U(e)??``)}}),k(`div`,{className:`text-sm text-base-content/70`,children:[`当前节点：`,y.value||`尚未选择`]})]}),A(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`,children:`第一次展开“按需加载目录”时会把子节点注入到 treeData，这个模式适合服务端分页目录和按需权限树。`})]})}),code:We});r(()=>_(e,f,ie))});let ae=t(`rue:component:anchor`);i(f,ae),n(()=>{let e=S(j,{title:`Variant and Status`,summary:`TreeSelect 也沿用 Rue 现有输入体系的 filled / warning 视觉语义。`,tab:D.shell,preview:A(`div`,{className:`card border border-base-200/80 bg-base-100 shadow-sm`,children:k(`div`,{className:`card-body grid gap-4 md:grid-cols-2`,children:[k(`div`,{className:`grid gap-3`,children:[A(H,{value:v.value,treeData:Ie,prefix:A(`span`,{className:`badge badge-neutral badge-sm`,children:`ENV`}),suffix:A(`span`,{className:`text-xs opacity-60`,children:`可清空`}),variant:`filled`,status:`warning`,allowClear:!0,treeDefaultExpandAll:!0,onChange:e=>{v.value=String(U(e)??``)}}),k(`div`,{className:`text-sm text-base-content/70`,children:[`当前环境：`,v.value||`未选择`]})]}),A(`div`,{className:`rounded-box border border-base-300 bg-base-200/40 p-4 text-sm text-base-content/70`,children:`prefix / suffix 让 TreeSelect 能自然落进环境切换、租户切换和带状态提醒的配置表单里。`})]})}),code:Ge});r(()=>_(e,f,ae))});let z=c(`div`,f);i(f,z),p(z,`not-prose mt-10 space-y-4`);let B=c(`h2`,z);i(z,B),p(B,`text-2xl font-semibold`),i(B,C(`API`));let oe=t(`rue:component:anchor`);return i(z,oe),n(()=>{let e=S(Me,{rows:Ke});r(()=>_(e,z,oe))}),o})}),T,E),T})};export{qe as default};