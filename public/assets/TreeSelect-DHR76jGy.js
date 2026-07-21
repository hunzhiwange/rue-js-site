import{At as e,Cn as t,Ct as n,Dt as r,Lt as i,Mt as a,Nt as o,Tt as s,dt as c,ft as l,ht as u,jt as d,mt as f,ot as p,pn as m,pt as h,st as g,tn as _,vn as v}from"./context-8lXZvIn-.js";import{i as y,l as b,n as x,o as S,r as C,s as ee,t as w}from"./vapor-runtime-ygJWVcNn.js";import{a as T,n as E,t as D}from"./vapor-helpers-vapor-CMwHgsXf.js";import{n as O,t as k}from"./src-CCTNpCXV.js";import{r as te}from"./SidebarPlaygroundDesign-BbUFY3mM.js";import{t as A}from"./PreviewBlock-ARp---67.js";var j=`SHOW_ALL`,ne=`SHOW_PARENT`,M=`SHOW_CHILD`,re={xs:`input-xs`,sm:`input-sm`,md:``,lg:`input-lg`,xl:`input-xl`,small:`input-sm`,medium:``,middle:``,large:`input-lg`},N=0,P={label:`title`,value:`value`,children:`children`,key:`key`,disabled:`disabled`,selectable:`selectable`,checkable:`checkable`,disableCheckbox:`disableCheckbox`,isLeaf:`isLeaf`,className:`className`,icon:`icon`,id:`id`,pId:`pId`},F=(...e)=>e.filter(Boolean).join(` `),I=e=>typeof e==`object`&&!!e&&!Array.isArray(e),L=e=>typeof e==`string`||typeof e==`number`,ie=e=>e==null?[]:Array.isArray(e)?e:[e],ae=e=>`${typeof e}:${String(e)}`,oe=e=>{if(L(e))return e;if(I(e)&&L(e.value))return e.value},R=e=>ie(e).flatMap(e=>{let t=oe(e);return t===void 0?[]:[t]}),z=(e,t,n)=>e[n?.[t]??P[t]],se=(e,t)=>z(e,`label`,t)??e.title??e.label??z(e,`value`,t)??z(e,`key`,t),ce=e=>typeof e==`string`||typeof e==`number`?String(e):``,le=(e,t,n)=>{if(!t)return e;let r=I(t)?t:void 0,i=r?.id??n?.id??P.id,a=r?.pId??n?.pId??P.pId,o=r?.rootPId??0,s=n?.children??P.children,c=new Map;e.forEach((e,t)=>{let n=e[i]??e.value??e.key??t;c.set(n,{...e,[s]:[]})});let l=[];return e.forEach((e,t)=>{let n=e[i]??e.value??e.key??t,r=e[a],u=c.get(n);if(!u)return;if(r==null||r===o||!c.has(r)){l.push(u);return}let d=c.get(r);if(!d){l.push(u);return}let f=d[s]??[];f.push(u),d[s]=f}),l},ue=(e,t)=>{let n=[],r={},i=(e,a,o,s)=>{let c=z(e,`children`,t),l=z(e,`value`,t),u=z(e,`key`,t),d=z(e,`isLeaf`,t),f=L(l)?l:L(u)?u:o,p=se(e,t),m=ae(f),h=Array.isArray(c)?c.map((e,t)=>i(e,a+1,`${o}-${t}`,m)):[],g={key:String(u??f),value:f,valueKey:m,label:p,labelText:ce(p),depth:a,parentValueKey:s,children:h,raw:e,disabled:!!z(e,`disabled`,t),selectable:z(e,`selectable`,t)!==!1,checkable:z(e,`checkable`,t)!==!1,disableCheckbox:!!z(e,`disableCheckbox`,t),isLeaf:d===!0||d!==!1&&h.length===0,className:z(e,`className`,t),icon:z(e,`icon`,t)};return n.push(g),r[m]=g,g};return{roots:e.map((e,t)=>i(e,0,`node-${t}`)),flat:n,byValueKey:r}},de=e=>{let t=[],n=e=>{!e.disabled&&e.checkable&&!e.disableCheckbox&&t.push(e.valueKey),e.children.forEach(e=>n(e))};return n(e),t},fe=e=>{let t=[];return e.children.forEach(e=>{de(e).forEach(e=>t.push(e))}),t},pe=(e,t,n)=>{let r=new Set;return e.forEach(e=>{let i=t[e];if(!i)return;if(n){r.add(e);return}let a=fe(i);if(a.length>0){a.forEach(e=>r.add(e));return}!i.disabled&&i.checkable&&!i.disableCheckbox&&r.add(e)}),r},me=(e,t,n)=>{let r=new Set,i=new Set,a={},o=e=>{let s=!e.disabled&&e.checkable&&!e.disableCheckbox,c=e.children.map(e=>o(e)).filter(e=>e.participates),l=t.has(e.valueKey),u=l,d=!1;if(!n&&c.length>0){let e=c.every(e=>e.checked),t=c.some(e=>e.checked||e.halfChecked);u=l||e,d=!u&&t}let f=s||c.length>0,p={checked:u,halfChecked:d,participates:f};return a[e.valueKey]=p,u&&s&&r.add(e.valueKey),d&&s&&i.add(e.valueKey),p};return e.forEach(e=>o(e)),{checkedKeys:r,halfCheckedKeys:i,stateMap:a}},he=(e,t,n)=>{let r=[],i=(e,a)=>{let o=t[e.valueKey];if(!o)return;let s=e.children.map(e=>t[e.valueKey]).filter(Boolean).some(e=>e.checked||e.halfChecked),c=!e.disabled&&e.checkable&&!e.disableCheckbox&&o.checked;if(n===`SHOW_ALL`){c&&r.push(e),e.children.forEach(e=>i(e,a));return}if(n===`SHOW_PARENT`){if(c&&s&&!a){r.push(e);return}if(c&&!s&&!a){r.push(e);return}e.children.forEach(e=>i(e,a||c));return}if(c&&!s){r.push(e);return}if(c&&e.children.length===0){r.push(e);return}e.children.forEach(e=>i(e,a))};return e.forEach(e=>i(e,!1)),r},B=(e,t)=>t&&e.raw[t]!==void 0?e.raw[t]:e.label,ge=(e,t,n)=>({value:e.value,key:e.value,label:B(e,n),halfChecked:t,disabled:e.disabled}),_e=(e,t,n,r,i)=>{let a=n?e.map(e=>ge(e,r.has(e.valueKey),i)):e.map(e=>e.value);return t?a:a[0]??null},ve=(e,t,n)=>{let r=e.map(e=>B(e,n));return t?r:r[0]??null},ye=(e,t,n)=>String(t===`title`||t===`label`?B(e,n)??``:t===`value`?e.value:e.raw[t]??``),be=(e,t)=>[String(e.value??``),String(B(e,t)??``)],xe=(e,t,n,r)=>{if(!n){let n=[],r=e=>{n.push({node:e,matched:!1}),t.has(e.valueKey)&&e.children.forEach(e=>r(e))};return e.forEach(e=>r(e)),n}let i=[],a=(e,t)=>{i.push({node:e,matched:t}),e.children.forEach(e=>a(e,!1))},o=e=>{let t=r(e),n=e.children.flatMap(e=>o(e));if(!t&&n.length===0)return[];if(t){let t=[{node:e,matched:!0}];return e.children.forEach(e=>{let n=[],r=(e,t)=>{n.push({node:e,matched:t}),e.children.forEach(e=>r(e,!1))};r(e,!1),t.push(...n)}),t}return[{node:e,matched:!1},...n]};return e.forEach(e=>{i.push(...o(e))}),i},Se=(e,t)=>{let n=e?.[t];if(typeof n==`string`)return n;if(I(n)&&typeof n.root==`string`)return n.root},Ce=(e,t)=>{let n=e?.[t];if(I(n)&&!(`root`in n))return n;if(I(n?.root))return n.root},we=(e,t)=>{let n=typeof e==`string`||typeof e==`number`?String(e):e;return typeof n!=`string`||!t||n.length<=t?n:`${n.slice(0,t)}...`},Te=e=>typeof e==`string`||typeof e==`number`?String(e):e==null||e===!1?``:String(e),Ee=e=>b(t=>{let r=h(`span`,t);n(r,`aria-hidden`,`true`),_(()=>{s(r,F(`inline-flex h-4 w-4 items-center justify-center text-base-content/55 transition-transform duration-150`,e.expanded&&`rotate-90`,e.hidden&&`opacity-0`))});let i=h(`svg`,r);g(r,i),n(i,`viewBox`,`0 0 20 20`),n(i,`fill`,`none`),s(i,`h-4 w-4`);let a=h(`path`,i);return g(i,a),n(a,`d`,`M7.5 5.5L12.5 10L7.5 14.5`),n(a,`stroke`,`currentColor`),n(a,`stroke-width`,`1.8`),n(a,`stroke-linecap`,`round`),n(a,`stroke-linejoin`,`round`),r}),De=()=>b(e=>{let t=h(`span`,e);return s(t,`loading loading-spinner loading-xs text-base-content/55`),n(t,`aria-hidden`,`true`),t}),Oe=()=>b(e=>{let t=h(`svg`,e);n(t,`viewBox`,`0 0 20 20`),n(t,`fill`,`none`),s(t,`block h-4 w-4`);let r=h(`path`,t);return g(t,r),n(r,`d`,`M6 6L14 14M14 6L6 14`),n(r,`stroke`,`currentColor`),n(r,`stroke-width`,`1.8`),n(r,`stroke-linecap`,`round`),t}),ke=e=>e.icon!==void 0&&e.icon!==null?e.icon:b(e=>{let t=l(),n=c(`rue:component:anchor`);return g(t,n),S(w(Oe,{}),t,n),t}),Ae=r=>{let{handleClose:i}=T(`useSetup:0:0`,()=>t(()=>({handleClose:e=>{r.onRemove(r.node,e)}})));return r.tagRender?r.tagRender({label:r.label,value:r.node.value,disabled:r.node.disabled,closable:!r.disabled,node:r.node,onClose:i}):b(t=>{let a=h(`span`,t);_(()=>{n(a,`data-rue-tree-select-tag-value`,String(r.node.valueKey))}),_(()=>{s(a,F(`badge badge-outline inline-flex max-w-full items-center gap-1 rounded-md px-2 py-1 text-xs font-medium leading-none`,r.tagClassName))}),_(()=>{let t=r.tagStyle;e(a,t)});let o=h(`span`,a);g(a,o),s(o,`truncate`);let u=c(`rue:slot:anchor`);g(o,u),_(()=>{let e=r.label;v(()=>S(e,o,u))});let d=c(`rue:slot:anchor`);return g(a,d),_(()=>{let e=r.disabled?``:b(()=>{let e=l(),t=h(`button`,e);return g(e,t),n(t,`type`,`button`),s(t,`btn btn-ghost btn-xs inline-flex h-4 min-h-0 w-4 shrink-0 items-center justify-center rounded-full p-0 text-center leading-none`),_(()=>{n(t,`aria-label`,String(`移除 ${Te(r.rawLabel??r.node.value)}`))}),p(t,`click`,i),g(t,f(`×`)),e});v(()=>S(e,a,d))}),a})},je=e=>e.loadingNode?b(e=>{let t=l(),n=c(`rue:component:anchor`);return g(t,n),S(w(De,{}),t,n),t}):typeof e.switcherIcon==`function`?e.switcherIcon({expanded:e.expanded,loading:e.loadingNode,selected:e.selected,checked:e.state.checked,halfChecked:e.halfChecked,node:e.node}):e.switcherIcon===void 0?b(t=>{let n=l(),r=c(`rue:component:anchor`);return g(n,r),_(()=>{let t=w(Ee,{expanded:e.expanded,hidden:!e.canExpand});v(()=>S(t,n,r))}),n}):e.switcherIcon,Me=t=>b(i=>{let o=h(`div`,i);_(()=>{n(o,`data-rue-tree-select-node`,String(t.node.valueKey))}),_(()=>{s(o,F(`group flex items-center gap-1 rounded-lg py-1.5 pr-2`,t.matched&&`bg-primary/8`,t.treeLine&&t.node.depth>0&&`border-l border-base-300/60`,t.node.className))}),_(()=>{let n={paddingLeft:`${t.node.depth*16+4}px`};e(o,n)});let d=h(`button`,o);g(o,d),n(d,`type`,`button`),s(d,`inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md hover:bg-base-200 disabled:cursor-not-allowed`),_(()=>{r(d,!t.canExpand||t.mergedDisabled||t.node.disabled)}),_(()=>{n(d,`aria-label`,String(t.expanded?`折叠节点`:`展开节点`))}),p(d,`click`,e=>{t.onExpand(t.node,e)});let f=c(`rue:component:anchor`);g(d,f),_(()=>{let e=w(je,{node:t.node,state:t.state,selected:t.selected,halfChecked:t.halfChecked,expanded:t.expanded,loadingNode:t.loadingNode,canExpand:t.canExpand,switcherIcon:t.switcherIcon});v(()=>S(e,d,f))});let m=c(`rue:slot:anchor`);g(o,m),_(()=>{let e=t.treeCheckable?b(()=>{let e=l(),i=h(`button`,e);g(e,i),n(i,`type`,`button`),n(i,`role`,`checkbox`),_(()=>{n(i,`aria-checked`,String(t.halfChecked?`mixed`:t.state.checked?`true`:`false`))}),_(()=>{r(i,t.checkboxDisabled)}),_(()=>{s(i,F(`inline-flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors duration-150`,t.state.checked||t.halfChecked?`border-primary bg-primary text-primary-content`:`border-base-content/40 bg-base-100 text-base-content/0`,t.checkboxDisabled&&`opacity-45`))}),p(i,`click`,e=>{t.onToggle(t.node,e)});let o=u(i);return g(i,o),_(()=>{a(o,t.halfChecked?`−`:t.state.checked?`✓`:``)}),e}):``;v(()=>S(e,o,m))});let y=h(`button`,o);g(o,y),n(y,`type`,`button`),_(()=>{s(y,F(`flex min-w-0 flex-1 items-center gap-1 rounded-md px-1.5 py-1 text-left text-sm transition-colors duration-150`,t.selected?`bg-primary/12 text-primary`:`text-base-content hover:bg-base-200/70`,(t.mergedDisabled||t.node.disabled||!t.node.selectable)&&`cursor-not-allowed opacity-55`))}),_(()=>{r(y,t.mergedDisabled||t.node.disabled||!t.node.selectable)}),p(y,`click`,e=>{t.onToggle(t.node,e)});let x=c(`rue:slot:anchor`);return g(y,x),_(()=>{let e=t.label;v(()=>S(e,y,x))}),o}),V=a=>{let{__rue_rest_omit_0:u,__rue_rest_omit_1:O,__rue_rest_omit_2:k,__rue_rest_omit_3:te,__rue_rest_omit_4:A,__rue_rest_omit_5:j,__rue_rest_omit_6:ne,__rue_rest_omit_7:P,__rue_rest_omit_8:ie,__rue_rest_omit_9:oe,__rue_rest_omit_10:z,__rue_rest_omit_11:se,__rue_rest_omit_12:ce,__rue_rest_omit_13:fe,__rue_rest_omit_14:Ee,__rue_rest_omit_15:De,__rue_rest_omit_16:Oe,__rue_rest_omit_17:je,__rue_rest_omit_18:V,__rue_rest_omit_19:Ne,__rue_rest_omit_20:H,__rue_rest_omit_21:Pe,__rue_rest_omit_22:Fe,__rue_rest_omit_23:Ie,__rue_rest_omit_24:Le,__rue_rest_omit_25:Re,__rue_rest_omit_26:ze,__rue_rest_omit_27:Be,__rue_rest_omit_28:Ve,__rue_rest_omit_29:He,__rue_rest_omit_30:Ue,__rue_rest_omit_31:We,__rue_rest_omit_32:Ge,__rue_rest_omit_33:Ke,__rue_rest_omit_34:qe,__rue_rest_omit_35:Je,__rue_rest_omit_36:Ye,__rue_rest_omit_37:Xe,__rue_rest_omit_38:Ze,__rue_rest_omit_39:Qe,__rue_rest_omit_40:U,__rue_rest_omit_41:$e,__rue_rest_omit_42:et,__rue_rest_omit_43:tt,__rue_rest_omit_44:nt,__rue_rest_omit_45:rt,__rue_rest_omit_46:it,__rue_rest_omit_47:at,__rue_rest_omit_48:ot,__rue_rest_omit_49:st,__rue_rest_omit_50:ct,__rue_rest_omit_51:lt,__rue_rest_omit_52:W,__rue_rest_omit_53:G,__rue_rest_omit_54:ut,__rue_rest_omit_55:dt,__rue_rest_omit_56:ft,__rue_rest_omit_57:pt,__rue_rest_omit_58:mt,__rue_rest_omit_59:ht,__rue_rest_omit_60:gt,__rue_rest_omit_61:_t,__rue_rest_omit_62:vt,__rue_rest_omit_63:yt,__rue_rest_omit_64:bt,rest:xt,rootRef:St,instanceId:Ct,renderVersion:wt,uncontrolledValue:Tt,internalOpen:Et,initialTree:Dt,initialExpandedKeys:Ot,uncontrolledExpandedKeys:kt,uncontrolledLoadedKeys:K,internalSearch:q,loadingNodeKeys:At,treeBodyScrollTop:jt,staleTreeNodeCleanupVersion:Mt,searchConfig:Nt,mergedMultiple:Pt,mergedLabelInValue:J,mergedDisabled:Y,allowClearConfig:Ft,mergedShowSearch:It,selectorSemanticClassName:Lt,selectorSemanticStyle:Rt,popupSemanticClassName:zt,popupSemanticStyle:Bt,treeSemanticClassName:X,treeSemanticStyle:Vt,searchSemanticClassName:Z,searchSemanticStyle:Q,tagSemanticClassName:Ht,tagSemanticStyle:Ut,rootSemanticClassName:Wt,rootSemanticStyle:Gt,getNormalizedTree:Kt,getMergedSearchValue:qt,getMergedOpen:Jt,getExpandedValueKeys:$,getExpandedKeySet:Yt,getLoadedValueKeys:Xt,getLoadedKeySet:Zt,getSelectionSnapshot:Qt,filterProp:$t,filterLogic:en,matchesNode:tn,visibleTagCount:nn,getVisibleNodes:rn,buildSelectionPreview:an,getClearButtonVisible:on,requestRender:sn,setMergedOpen:cn,prepareKeepMultiplePopupOpen:ln,setMergedSearchValue:un,setExpandedKeys:dn,setLoadedKeys:fn,canLoadNodeData:pn,canExpandNode:mn,emitSelectionCallbacks:hn,commitValue:gn,removeNodeFromSelection:_n,clearSelection:vn,handleNodeToggle:yn,handleExpandToggle:bn,handleRootMouseDown:xn,handleSelectorClick:Sn,rememberTreeBodyScroll:Cn,restoreTreeBodyScroll:wn,cleanupStaleTags:Tn,cleanupStaleTreeNodes:En,resolvedSizeClass:Dn,selectorClass:On,popupClass:kn,popupSizingStyle:An,selectionState:jn,displayNodes:Mn,tagDisplayNodes:Nn,hasValue:Pn,visibleTagNodes:Fn,omittedTagNodes:In,mergedOpenState:Ln,mergedSearchValueState:Rn,showSearchInput:zn,clearButtonVisible:Bn,visibleNodes:Vn,expandedKeySetState:Hn,loadedKeySetState:Un,readVisibleNodes:Wn,readSelectionState:Gn,readExpandedKeySet:Kn,readLoadedKeySet:qn}=T(`useSetup:0:0:dup1`,()=>t(()=>{let{value:e,defaultValue:t,treeData:n,fieldNames:r,treeDataSimpleMode:o,multiple:s,treeCheckable:c,treeCheckStrictly:l,showCheckedStrategy:u,labelInValue:d,showSearch:f,searchValue:p,filterTreeNode:h,treeNodeFilterProp:g,placeholder:_,allowClear:v,clearLabel:b,notFoundContent:x,disabled:S,loading:ee,open:w,defaultOpen:E,onOpenChange:D,treeDefaultExpandAll:O,treeDefaultExpandedKeys:k,treeExpandedKeys:te,treeLoadedKeys:A,onTreeExpand:j,loadData:ne,maxCount:P,maxTagCount:ie,maxTagPlaceholder:oe,maxTagTextLength:z,listHeight:se,placement:ce,popupMatchSelectWidth:fe,size:B,status:we,variant:Te,prefix:Ee,suffix:De,suffixIcon:Oe,showArrow:ke,switcherIcon:Ae,treeTitleRender:je,treeNodeLabelProp:Me,treeLine:V,onSearch:Ne,onChange:H,onSelect:Pe,onDeselect:Fe,onClear:Ie,onPopupScroll:Le,className:Re,style:ze,selectorClassName:Be,selectorStyle:Ve,popupClassName:He,popupStyle:Ue,dropdownClassName:We,dropdownStyle:Ge,classNames:Ke,styles:qe,tagRender:Je,children:Ye,...Xe}=a,Ze=T(`ref:1:0`,()=>m(void 0)),Qe=T(`ref:1:1`,()=>m(`rue-tree-select-${N++}`)),U=T(`ref:1:2`,()=>m(0)),$e=T(`ref:1:3`,()=>m(a.defaultValue??(a.treeCheckable||a.multiple?[]:null))),et=T(`ref:1:4`,()=>m(!!a.defaultOpen)),tt=ue(le(a.treeData===void 0?[]:a.treeData,a.treeDataSimpleMode,a.fieldNames),a.fieldNames),nt=a.treeDefaultExpandAll?tt.flat.filter(e=>e.children.length>0).map(e=>e.value):a.treeDefaultExpandedKeys??[],rt=T(`ref:1:5`,()=>m(nt)),it=T(`ref:1:6`,()=>m([])),at=T(`ref:1:7`,()=>m(``)),ot=T(`ref:1:8`,()=>m([])),st=T(`ref:1:9`,()=>m(0)),ct=T(`ref:1:10`,()=>m(0)),lt=T(`computed:1:11`,()=>i(()=>I(a.showSearch)?a.showSearch:void 0)),W=lt,G=!!a.multiple||!!a.treeCheckable,ut=!!a.labelInValue||!!a.treeCheckStrictly,dt=!!a.disabled||!!a.loading,ft=T(`computed:1:12`,()=>i(()=>I(a.allowClear)?a.allowClear:a.allowClear?{}:null)),pt=ft,mt=T(`computed:1:13`,()=>i(()=>typeof a.showSearch==`boolean`?a.showSearch:a.showSearch!==void 0||G)),ht=mt,gt=T(`computed:1:14`,()=>i(()=>Se(a.classNames,`selector`))),_t=gt,vt=T(`computed:1:15`,()=>i(()=>Ce(a.styles,`selector`))),yt=T(`computed:1:16`,()=>i(()=>Se(a.classNames,`popup`))),bt=yt,xt=T(`computed:1:17`,()=>i(()=>Ce(a.styles,`popup`))),St=T(`computed:1:18`,()=>i(()=>Se(a.classNames,`tree`))),Ct=T(`computed:1:19`,()=>i(()=>Ce(a.styles,`tree`))),wt=T(`computed:1:20`,()=>i(()=>Se(a.classNames,`search`))),Tt=T(`computed:1:21`,()=>i(()=>Ce(a.styles,`search`))),Et=T(`computed:1:22`,()=>i(()=>Se(a.classNames,`tag`))),Dt=T(`computed:1:23`,()=>i(()=>Ce(a.styles,`tag`))),Ot=T(`computed:1:24`,()=>i(()=>Se(a.classNames,`root`))),kt=T(`computed:1:25`,()=>i(()=>Ce(a.styles,`root`))),K=()=>ue(le(a.treeData===void 0?[]:a.treeData,a.treeDataSimpleMode,a.fieldNames),a.fieldNames),q=()=>W.get()?.searchValue??a.searchValue??(ht.get()?at.value:``),At=()=>a.open??et.value,jt=()=>R(a.treeExpandedKeys??rt.value),Mt=()=>new Set(jt().map(ae)),Nt=()=>R(a.treeLoadedKeys??it.value),Pt=()=>new Set(Nt().map(ae)),J=()=>{let e=K(),t=R(a.value===void 0?$e.value:a.value).map(ae),n=new Set(t),r=a.treeCheckable?pe(t,e.byValueKey,!!a.treeCheckStrictly):n,i=a.treeCheckable?me(e.roots,r,!!a.treeCheckStrictly):{checkedKeys:n,halfCheckedKeys:new Set,stateMap:Object.fromEntries(e.flat.map(e=>[e.valueKey,{checked:n.has(e.valueKey),halfChecked:!1,participates:!0}]))},o=a.treeCheckable?he(e.roots,i.stateMap,a.showCheckedStrategy===void 0?M:a.showCheckedStrategy):t.map(t=>e.byValueKey[t]).filter(Boolean);return{currentValueKeys:t,currentValueKeySet:n,derivedCheckState:i,displayNodes:o,displayNodeKeySet:new Set(o.map(e=>e.valueKey))}},Y=T(`computed:1:26`,()=>i(()=>W.get()?.treeNodeFilterProp??a.treeNodeFilterProp)),Ft=Y,It=T(`computed:1:27`,()=>i(()=>W.get()?.filterTreeNode??a.filterTreeNode??!0)),Lt=It,Rt=(e,t)=>{if(!t)return!0;if(typeof Lt.get()==`function`)return Lt.get()(t,e);if(Lt.get()===!1)return!0;let n=t.toLowerCase();return(Ft.get()?[ye(e,Ft.get(),a.treeNodeLabelProp===void 0?`title`:a.treeNodeLabelProp)]:be(e,a.treeNodeLabelProp===void 0?`title`:a.treeNodeLabelProp)).some(e=>e.toLowerCase().includes(n))},zt=typeof a.maxTagCount==`number`&&a.maxTagCount>=0?Math.max(0,a.maxTagCount):void 0,Bt=()=>{let e=K(),t=q();return xe(e.roots,Mt(),t,e=>Rt(e,t))},X=(e,t)=>{let n=new Set(e.map(e=>e.valueKey));return{currentValueKeySet:n,derivedCheckState:t??{checkedKeys:n,halfCheckedKeys:new Set,stateMap:Object.fromEntries(K().flat.map(e=>[e.valueKey,{checked:n.has(e.valueKey),halfChecked:!1,participates:!0}]))},displayNodes:e,displayNodeKeySet:new Set(e.map(e=>e.valueKey))}},Vt=e=>{let t=e?.length??J().displayNodes.length;return!!pt.get()&&!dt&&t>0},Z=()=>{U.value+=1,nn()},Q=(e,t)=>{let n=At()!==e;a.open===void 0&&et.value!==e&&(et.value=e,Z()),n&&a.onOpenChange&&a.onOpenChange(e)},Ht=()=>{a.open===void 0&&Q(!0)},Ut=(e,t)=>{let n=!1;if(W.get()?.searchValue===void 0&&a.searchValue===void 0){if(at.value===e)return;at.value=e,n=!0}W.get()?.onSearch&&W.get().onSearch(e),a.onSearch&&a.onSearch(e),n&&(Z(),an(Bt().map(e=>e.node.valueKey)))},Wt=e=>{a.treeExpandedKeys===void 0&&(rt.value=e,Z()),a.onTreeExpand&&a.onTreeExpand(e)},Gt=e=>{a.treeLoadedKeys===void 0&&(it.value=e,Z())},Kt=(e,t=Pt())=>{let n=t&&typeof t.has==`function`?t:new Set;return!!a.loadData&&!e.isLeaf&&e.children.length===0&&!n.has(e.valueKey)},qt=(e,t=Pt())=>e.children.length>0||Kt(e,t),Jt=(e,t,n,r)=>{let i=new Set(e.map(e=>e.valueKey)),o=new Set(t.map(e=>e.valueKey));a.onDeselect&&e.filter(e=>!o.has(e.valueKey)).forEach(e=>{a.onDeselect(ut?ge(e,r.has(e.valueKey),a.treeNodeLabelProp===void 0?`title`:a.treeNodeLabelProp):e.value,e,{...n,selected:!1,checked:!1})}),a.onSelect&&t.filter(e=>!i.has(e.valueKey)).forEach(e=>{a.onSelect(ut?ge(e,r.has(e.valueKey),a.treeNodeLabelProp===void 0?`title`:a.treeNodeLabelProp):e.value,e,{...n,selected:!0,checked:!0})})},$=(e,t,n)=>{let r=K(),i=J(),o=_e(e,G,ut,n,a.treeNodeLabelProp===void 0?`title`:a.treeNodeLabelProp),s=ve(e,G,a.treeNodeLabelProp===void 0?`title`:a.treeNodeLabelProp);a.value===void 0&&($e.value=o,Z()),Jt(i.displayNodes,e,{...t,displayNodes:e,halfCheckedKeys:Array.from(n).map(e=>r.byValueKey[e]?.value).filter(L)},n),a.onChange&&a.onChange(o,s,{...t,displayNodes:e,halfCheckedKeys:Array.from(n).map(e=>r.byValueKey[e]?.value).filter(L),checkedNodes:a.treeCheckable?r.flat.filter(t=>e.some(e=>e.valueKey===t.valueKey)):e}),Z(),rn(e.map(e=>e.valueKey))},Yt=(e,t)=>{tn(t),t.preventDefault(),t.stopPropagation();let n=J(),r=K();if(a.treeCheckable){let t=pe(n.currentValueKeys,r.byValueKey,!!a.treeCheckStrictly);a.treeCheckStrictly?t.delete(e.valueKey):de(e).forEach(e=>t.delete(e));let i=me(r.roots,t,!!a.treeCheckStrictly),o=he(r.roots,i.stateMap,a.showCheckedStrategy===void 0?M:a.showCheckedStrategy);return $(o,{triggerNode:e,triggerValue:e.value,checked:!1},i.halfCheckedKeys),X(o,i)}let i=n.displayNodes.filter(t=>t.valueKey!==e.valueKey);return $(i,{triggerNode:e,triggerValue:e.value,selected:!1},new Set),X(i)},Xt=e=>{tn(e),e.preventDefault(),e.stopPropagation(),a.onClear&&a.onClear(e),q()&&Ut(``),$([],{clear:!0,selected:!1,checked:!1,triggerNode:null,triggerValue:null},new Set)},Zt=(e,t)=>{if(tn(t),t.preventDefault(),t.stopPropagation(),dt||e.disabled)return null;if(!G&&!a.treeCheckable&&Kt(e))return Qt(e,t),J();let n=J(),r=K();if(a.treeCheckable){let t=pe(n.currentValueKeys,r.byValueKey,!!a.treeCheckStrictly),i=n.derivedCheckState.checkedKeys,o=i&&typeof i.has==`function`?i.has(e.valueKey):!1;if(a.treeCheckStrictly)o?t.delete(e.valueKey):t.add(e.valueKey);else{let n=de(e);o?n.forEach(e=>t.delete(e)):n.forEach(e=>t.add(e))}let s=me(r.roots,t,!!a.treeCheckStrictly),c=he(r.roots,s.stateMap,a.showCheckedStrategy===void 0?M:a.showCheckedStrategy);return!o&&a.maxCount&&c.length>a.maxCount?null:(Ht(),$(c,{triggerNode:e,triggerValue:e.value,checked:!o,selected:!o},s.halfCheckedKeys),(W.get()?.autoClearSearchValue??!0)&&q()&&Ut(``),Q(!0),X(c,s))}if(G){let t=n.displayNodes.some(t=>t.valueKey===e.valueKey)?n.displayNodes.filter(t=>t.valueKey!==e.valueKey):[...n.displayNodes,e];return!n.displayNodeKeySet.has(e.valueKey)&&a.maxCount&&t.length>a.maxCount?null:(Ht(),$(t,{triggerNode:e,triggerValue:e.value,selected:!n.displayNodeKeySet.has(e.valueKey)},new Set),(W.get()?.autoClearSearchValue??!0)&&q()&&Ut(``),Q(!0),X(t))}return $([e],{triggerNode:e,triggerValue:e.value,selected:!0},new Set),q()&&Ut(``),Q(!1,{selectionOverride:[e]}),X([e])},Qt=(e,t)=>{tn(t),t.preventDefault(),t.stopPropagation();let n=Pt();if(dt||e.disabled||!qt(e,n))return;let r=Mt(),i=Nt(),o=q(),s=K(),c=new Set(r),l=!r.has(e.valueKey);l?c.add(e.valueKey):c.delete(e.valueKey),Wt(Array.from(c).map(e=>s.byValueKey[e]?.value).filter(L)),l&&a.loadData&&!o&&!n.has(e.valueKey)&&!ot.value.includes(e.valueKey)&&!e.isLeaf&&e.children.length===0&&(ot.value=[...ot.value,e.valueKey],Z(),Promise.resolve(a.loadData(e)).then(()=>{let t=Array.from(new Set([...i,e.value]));Gt(t)}).finally(()=>{ot.value=ot.value.filter(t=>t!==e.valueKey),Z()}))},$t=e=>{e.stopPropagation(),dt&&e.preventDefault()},en=()=>{dt||Q(!At())},tn=e=>{let t=e.currentTarget?.closest(`[role="tree"]`);t&&(st.value=t.scrollTop)},nn=()=>{setTimeout(()=>{let e=document.querySelector(`[data-rue-tree-select-popup="true"] [role="tree"]`);e&&e.scrollTop!==st.value&&(e.scrollTop=st.value)},0)},rn=e=>{setTimeout(()=>{let t=new Set(e);document.querySelector(`[data-rue-tree-select-id="${Qe.value}"]`)?.querySelectorAll(`[data-rue-tree-select-tag-value]`).forEach(e=>{let n=e.getAttribute(`data-rue-tree-select-tag-value`);n&&!t.has(n)&&e.remove()})},0)},an=e=>{ct.value+=1;let t=ct.value;setTimeout(()=>{if(t!==ct.value)return;let n=0;document.querySelector(`[data-rue-tree-select-id="${Qe.value}"]`)?.querySelectorAll(`[data-rue-tree-select-node]`).forEach(t=>{let r=t.getAttribute(`data-rue-tree-select-node`);if(r===e[n]){n+=1;return}r&&t.remove()})},0)};C(()=>{if(typeof document>`u`)return;let e=e=>{let t=e.target,n=Ze.value;n&&t&&n.contains(t)||Q(!1)},t=e=>{e.key===`Escape`&&Q(!1)};document.addEventListener(`mousedown`,e),document.addEventListener(`keydown`,t),y(()=>{document.removeEventListener(`mousedown`,e),document.removeEventListener(`keydown`,t)})});let on=re[a.size===void 0?`md`:a.size]??``,sn=T(`computed:1:28`,()=>i(()=>F(`input relative flex w-full items-center gap-2 px-3 text-left transition-shadow duration-150`,on,a.status===`error`&&`input-error`,a.status===`warning`&&`input-warning`,(a.variant===void 0?`outlined`:a.variant)===`filled`&&`bg-base-200 border-base-300 shadow-none`,(a.variant===void 0?`outlined`:a.variant)===`borderless`&&`border-transparent bg-transparent px-0 shadow-none`,(a.variant===void 0?`outlined`:a.variant)===`underlined`&&`rounded-none border-x-0 border-t-0 bg-transparent px-0 shadow-none`,dt?`cursor-not-allowed opacity-60`:`cursor-pointer`,_t.get(),a.selectorClassName))),cn=T(`computed:1:29`,()=>i(()=>F(`absolute z-40 overflow-hidden rounded-box border border-base-300 bg-base-100 shadow-[0_24px_70px_-36px_rgba(15,23,42,0.45)]`,(a.placement===void 0?`bottomLeft`:a.placement).startsWith(`top`)?`bottom-full mb-2`:`top-full mt-2`,(a.placement===void 0?`bottomLeft`:a.placement).endsWith(`Right`)?`right-0`:`left-0`,bt.get(),a.popupClassName,a.dropdownClassName))),ln=T(`computed:1:30`,()=>i(()=>(a.popupMatchSelectWidth===void 0||a.popupMatchSelectWidth)===!1?{minWidth:`18rem`}:typeof(a.popupMatchSelectWidth===void 0||a.popupMatchSelectWidth)==`number`?{width:`${a.popupMatchSelectWidth===void 0||a.popupMatchSelectWidth}px`}:{minWidth:`100%`})),un=T(`computed:1:31`,()=>i(()=>(U.value,J()))),dn=T(`computed:1:32`,()=>i(()=>un.get().displayNodes)),fn=T(`computed:1:33`,()=>i(()=>G||a.treeCheckable?dn.get():[])),pn=T(`computed:1:34`,()=>i(()=>dn.get().length>0)),mn=T(`computed:1:35`,()=>i(()=>zt===void 0?fn.get():fn.get().slice(0,zt))),hn=T(`computed:1:36`,()=>i(()=>zt===void 0?[]:fn.get().slice(zt))),gn=T(`computed:1:37`,()=>i(()=>(U.value,At()))),_n=T(`computed:1:38`,()=>i(()=>(U.value,q()))),vn=T(`computed:1:39`,()=>i(()=>ht.get()&&(G||a.treeCheckable||gn.get()||!pn.get()))),yn=T(`computed:1:40`,()=>i(()=>Vt(dn.get()))),bn=T(`computed:1:41`,()=>i(()=>(U.value,Bt()))),xn=T(`computed:1:42`,()=>i(()=>(U.value,Mt()))),Sn=T(`computed:1:43`,()=>i(()=>(U.value,Pt())));return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:n,__rue_rest_omit_3:r,__rue_rest_omit_4:o,__rue_rest_omit_5:s,__rue_rest_omit_6:c,__rue_rest_omit_7:l,__rue_rest_omit_8:u,__rue_rest_omit_9:d,__rue_rest_omit_10:f,__rue_rest_omit_11:p,__rue_rest_omit_12:h,__rue_rest_omit_13:g,__rue_rest_omit_14:_,__rue_rest_omit_15:v,__rue_rest_omit_16:b,__rue_rest_omit_17:x,__rue_rest_omit_18:S,__rue_rest_omit_19:ee,__rue_rest_omit_20:w,__rue_rest_omit_21:E,__rue_rest_omit_22:D,__rue_rest_omit_23:O,__rue_rest_omit_24:k,__rue_rest_omit_25:te,__rue_rest_omit_26:A,__rue_rest_omit_27:j,__rue_rest_omit_28:ne,__rue_rest_omit_29:P,__rue_rest_omit_30:ie,__rue_rest_omit_31:oe,__rue_rest_omit_32:z,__rue_rest_omit_33:se,__rue_rest_omit_34:ce,__rue_rest_omit_35:fe,__rue_rest_omit_36:B,__rue_rest_omit_37:we,__rue_rest_omit_38:Te,__rue_rest_omit_39:Ee,__rue_rest_omit_40:De,__rue_rest_omit_41:Oe,__rue_rest_omit_42:ke,__rue_rest_omit_43:Ae,__rue_rest_omit_44:je,__rue_rest_omit_45:Me,__rue_rest_omit_46:V,__rue_rest_omit_47:Ne,__rue_rest_omit_48:H,__rue_rest_omit_49:Pe,__rue_rest_omit_50:Fe,__rue_rest_omit_51:Ie,__rue_rest_omit_52:Le,__rue_rest_omit_53:Re,__rue_rest_omit_54:ze,__rue_rest_omit_55:Be,__rue_rest_omit_56:Ve,__rue_rest_omit_57:He,__rue_rest_omit_58:Ue,__rue_rest_omit_59:We,__rue_rest_omit_60:Ge,__rue_rest_omit_61:Ke,__rue_rest_omit_62:qe,__rue_rest_omit_63:Je,__rue_rest_omit_64:Ye,rest:Xe,rootRef:Ze,instanceId:Qe,renderVersion:U,uncontrolledValue:$e,internalOpen:et,initialTree:tt,initialExpandedKeys:nt,uncontrolledExpandedKeys:rt,uncontrolledLoadedKeys:it,internalSearch:at,loadingNodeKeys:ot,treeBodyScrollTop:st,staleTreeNodeCleanupVersion:ct,searchConfig:lt,mergedMultiple:G,mergedLabelInValue:ut,mergedDisabled:dt,allowClearConfig:ft,mergedShowSearch:mt,selectorSemanticClassName:gt,selectorSemanticStyle:vt,popupSemanticClassName:yt,popupSemanticStyle:xt,treeSemanticClassName:St,treeSemanticStyle:Ct,searchSemanticClassName:wt,searchSemanticStyle:Tt,tagSemanticClassName:Et,tagSemanticStyle:Dt,rootSemanticClassName:Ot,rootSemanticStyle:kt,getNormalizedTree:K,getMergedSearchValue:q,getMergedOpen:At,getExpandedValueKeys:jt,getExpandedKeySet:Mt,getLoadedValueKeys:Nt,getLoadedKeySet:Pt,getSelectionSnapshot:J,filterProp:Y,filterLogic:It,matchesNode:Rt,visibleTagCount:zt,getVisibleNodes:Bt,buildSelectionPreview:X,getClearButtonVisible:Vt,requestRender:Z,setMergedOpen:Q,prepareKeepMultiplePopupOpen:Ht,setMergedSearchValue:Ut,setExpandedKeys:Wt,setLoadedKeys:Gt,canLoadNodeData:Kt,canExpandNode:qt,emitSelectionCallbacks:Jt,commitValue:$,removeNodeFromSelection:Yt,clearSelection:Xt,handleNodeToggle:Zt,handleExpandToggle:Qt,handleRootMouseDown:$t,handleSelectorClick:en,rememberTreeBodyScroll:tn,restoreTreeBodyScroll:nn,cleanupStaleTags:rn,cleanupStaleTreeNodes:an,resolvedSizeClass:on,selectorClass:sn,popupClass:cn,popupSizingStyle:ln,selectionState:un,displayNodes:dn,tagDisplayNodes:fn,hasValue:pn,visibleTagNodes:mn,omittedTagNodes:hn,mergedOpenState:gn,mergedSearchValueState:_n,showSearchInput:vn,clearButtonVisible:yn,visibleNodes:bn,expandedKeySetState:xn,loadedKeySetState:Sn,readVisibleNodes:()=>bn.get()??[],readSelectionState:()=>un.get()??J(),readExpandedKeySet:()=>{let e=xn.get();return e&&typeof e.has==`function`?e:new Set},readLoadedKeySet:()=>{let e=Sn.get();return e&&typeof e.has==`function`?e:new Set}}}));return b(t=>{let i=h(`div`,t);_(()=>{o(i,xt)});let u=D(i,()=>e=>{St.value=e??void 0});x(()=>{u()}),n(i,`data-rue-tree-select-root`,`true`),_(()=>{n(i,`data-rue-tree-select-id`,String(Ct.value))}),_(()=>{s(i,F(`relative`,Wt.get(),a.className))}),_(()=>{let t={...Gt.get(),...a.style};e(i,t)}),p(i,`mousedown`,xn);let m=h(`div`,i);g(i,m),n(m,`data-rue-tree-select-selector`,`true`),_(()=>{s(m,On.get())}),_(()=>{let t={...Rt.get(),...a.selectorStyle};e(m,t)}),n(m,`role`,`combobox`),_(()=>{n(m,`aria-expanded`,String(Ln.get()))}),_(()=>{n(m,`aria-disabled`,String(Y))}),n(m,`aria-haspopup`,`tree`),p(m,`click`,Sn);let y=c(`rue:slot:anchor`);g(m,y),_(()=>{let e=a.prefix===void 0?``:b(()=>{let e=l(),t=h(`span`,e);g(e,t),s(t,`flex shrink-0 items-center text-base-content/65`);let n=c(`rue:slot:anchor`);return g(t,n),_(()=>{let e=a.prefix;v(()=>S(e,t,n))}),e});v(()=>S(e,m,y))});let C=h(`div`,m);g(m,C),s(C,`flex min-w-0 flex-1 flex-wrap items-center gap-1.5 self-stretch py-1`);let T=c(`rue:list:start`),O=c(`rue:list:end`);g(C,T),g(C,O);let k=new Map;_(()=>{k=E({items:Fn.get()||[],getKey:(e,t)=>e.valueKey,elements:k,parent:C,before:O,start:T,renderItem:(e,t,n,r,i)=>{let o=B(e,a.treeNodeLabelProp===void 0?`title`:a.treeNodeLabelProp),s=we(o,a.maxTagTextLength);ee(w(Ae,{key:e.valueKey,node:e,rawLabel:o,label:s,disabled:Y,tagRender:a.tagRender,tagClassName:Ht.get(),tagStyle:Ut.get(),onRemove:_n}),t,n,r)}})}),g(C,f(` `));let te=c(`rue:slot:anchor`);g(C,te),_(()=>{let e=In.get().length>0?b(()=>{let e=l(),t=h(`span`,e);g(e,t),s(t,`badge badge-ghost inline-flex max-w-full items-center rounded-md px-2 py-1 text-xs leading-none`);let n=c(`rue:slot:anchor`);return g(t,n),_(()=>{let e=typeof a.maxTagPlaceholder==`function`?a.maxTagPlaceholder(In.get()):a.maxTagPlaceholder??`+${In.get().length}`;v(()=>S(e,t,n))}),e}):``;v(()=>S(e,C,te))}),g(C,f(` `));let A=c(`rue:slot:anchor`);g(C,A),_(()=>{let t=zn.get()?b(()=>{let t=l(),i=h(`input`,t);return g(t,i),n(i,`data-rue-tree-select-search`,`true`),_(()=>{d(i,Rn.get())}),_(()=>{r(i,Y)}),_(()=>{n(i,`placeholder`,String(Te(a.placeholder??`请选择`)))}),_(()=>{s(i,F(`min-w-[5rem] flex-1 border-0 bg-transparent px-0 py-0 text-sm leading-5 outline-none placeholder:text-base-content/40`,Z.get()))}),_(()=>{let t=Q.get();e(i,t)}),p(i,`click`,e=>{e.stopPropagation(),Y||cn(!0)}),p(i,`focus`,()=>{Y||cn(!0)}),p(i,`input`,e=>{let t=e.target;cn(!0),un(t.value,{syncSelector:!1}),Promise.resolve().then(()=>{document.querySelector(`[data-rue-tree-select-search="true"]`)?.focus()})}),t}):b(()=>{let e=l(),t=h(`span`,e);g(e,t),_(()=>{s(t,Pn.get()&&!Pt&&!a.treeCheckable?`flex flex-1 items-center truncate text-sm leading-5`:`flex flex-1 items-center truncate text-sm leading-5 text-base-content/40`)});let n=c(`rue:slot:anchor`);return g(t,n),_(()=>{let e=Pn.get()&&!Pt&&!a.treeCheckable?B(Mn.get()[0],a.treeNodeLabelProp===void 0?`title`:a.treeNodeLabelProp):a.placeholder??`请选择`;v(()=>S(e,t,n))}),e});v(()=>S(t,C,A))});let j=h(`button`,m);g(m,j),n(j,`type`,`button`),_(()=>{s(j,F(`btn btn-ghost btn-xs btn-circle h-7 min-h-0 w-7 shrink-0 items-center justify-center self-center p-0 leading-none text-base-content/55 hover:text-base-content`,Bn.get()?`inline-flex`:`hidden`))}),_(()=>{n(j,`aria-label`,String(a.clearLabel===void 0?`清空选择`:a.clearLabel))}),_(()=>{r(j,!Bn.get())}),p(j,`click`,vn);let ne=c(`rue:component:anchor`);g(j,ne),_(()=>{let e=w(ke,{icon:Ft.get()?.clearIcon});v(()=>S(e,j,ne))});let M=c(`rue:slot:anchor`);g(m,M),_(()=>{let e=a.suffix===void 0?``:b(()=>{let e=l(),t=h(`span`,e);g(e,t),s(t,`flex shrink-0 items-center text-base-content/65`);let n=c(`rue:slot:anchor`);return g(t,n),_(()=>{let e=a.suffix;v(()=>S(e,t,n))}),e});v(()=>S(e,m,M))}),g(m,f(` `));let re=c(`rue:slot:anchor`);g(m,re),_(()=>{let e=a.showArrow===void 0||a.showArrow?b(()=>{let e=l(),t=h(`span`,e);g(e,t),s(t,`flex shrink-0 items-center`);let r=c(`rue:slot:anchor`);return g(t,r),_(()=>{let e=a.suffixIcon??b(()=>{let e=l(),t=h(`span`,e);g(e,t),n(t,`data-rue-tree-select-arrow`,`true`),n(t,`aria-hidden`,`true`),_(()=>{s(t,F(`inline-flex h-4 w-4 items-center justify-center text-base-content/55 transition-transform duration-150`,Ln.get()&&`rotate-180`))});let r=h(`svg`,t);g(t,r),n(r,`viewBox`,`0 0 20 20`),n(r,`fill`,`none`),s(r,`h-4 w-4`);let i=h(`path`,r);return g(r,i),n(i,`d`,`M5.5 7.5L10 12.5L14.5 7.5`),n(i,`stroke`,`currentColor`),n(i,`stroke-width`,`1.8`),n(i,`stroke-linecap`,`round`),n(i,`stroke-linejoin`,`round`),e});v(()=>S(e,t,r))}),e}):``;v(()=>S(e,m,re))});let N=h(`div`,i);g(i,N),n(N,`data-rue-tree-select-popup`,`true`),_(()=>{n(N,`aria-hidden`,String(Ln.get()?`false`:`true`))}),_(()=>{o(N,{hidden:!Ln.get()||void 0})}),_(()=>{s(N,kn.get())}),_(()=>{let t={...An.get(),...Bt.get(),...a.popupStyle,...a.dropdownStyle};e(N,t)});let P=h(`div`,N);g(N,P),n(P,`role`,`tree`),_(()=>{s(P,F(`overflow-auto p-2`,X.get()))}),_(()=>{let t={maxHeight:`${a.listHeight===void 0?320:a.listHeight}px`,...Vt.get()};e(P,t)}),p(P,`scroll`,e=>{jt.value=e.target.scrollTop,a.onPopupScroll&&a.onPopupScroll(e)});let I=c(`rue:slot:anchor`);g(P,I),_(()=>{let e=Wn().length?b(()=>{let e=l(),t=c(`rue:list:start`),n=c(`rue:list:end`);g(e,t),g(e,n);let r=new Map;return _(()=>{r=E({items:Wn()||[],getKey:(e,t)=>e.node.valueKey,elements:r,parent:t.parentNode,before:n,start:t,renderItem:(e,t,n,r,i)=>{ee(w(Me,{key:e.node.valueKey,node:e.node,matched:e.matched,state:Gn().derivedCheckState.stateMap[e.node.valueKey]??{checked:!1,halfChecked:!1,participates:!0},selected:a.treeCheckable?(Gn().derivedCheckState.stateMap[e.node.valueKey]??{checked:!1,halfChecked:!1,participates:!0}).checked:Gn().currentValueKeySet.has(e.node.valueKey),halfChecked:a.treeCheckable?(Gn().derivedCheckState.stateMap[e.node.valueKey]??{checked:!1,halfChecked:!1,participates:!0}).halfChecked:!1,expanded:Rn.get()?!0:Kn().has(e.node.valueKey),loadingNode:At.value.includes(e.node.valueKey),canExpand:mn(e.node,qn()),checkboxDisabled:Y||e.node.disabled||e.node.disableCheckbox||!e.node.checkable,label:a.treeTitleRender?a.treeTitleRender(e.node):B(e.node,a.treeNodeLabelProp===void 0?`title`:a.treeNodeLabelProp),mergedDisabled:Y,treeCheckable:a.treeCheckable,treeLine:a.treeLine,switcherIcon:a.switcherIcon,onExpand:bn,onToggle:yn}),t,n,r)}})}),e}):b(()=>{let e=l(),t=h(`div`,e);g(e,t),s(t,`rounded-md px-3 py-8 text-center text-sm text-base-content/55`);let n=c(`rue:slot:anchor`);return g(t,n),_(()=>{let e=a.notFoundContent??`暂无匹配项`;v(()=>S(e,t,n))}),e});v(()=>S(e,P,I))});let L=c(`rue:children:anchor`);return g(i,L),_(()=>{let e=a.children;v(()=>S(e,i,L))}),i})};V.SHOW_ALL=j,V.SHOW_PARENT=ne,V.SHOW_CHILD=M;var Ne=e=>b(t=>{let r=h(`div`,t);s(r,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let i=h(`table`,r);g(r,i),s(i,`table table-zebra`);let a=h(`thead`,i);g(i,a);let o=h(`tr`,a);g(a,o);let u=h(`th`,o);g(o,u),g(u,f(`属性`));let d=h(`th`,o);g(o,d),g(d,f(`说明`));let p=h(`th`,o);g(o,p),g(p,f(`类型`));let m=h(`th`,o);g(o,m),g(m,f(`默认值`));let y=h(`tbody`,i);g(i,y);let x=c(`rue:list:start`),C=c(`rue:list:end`);g(y,x),g(y,C);let ee=new Map;return _(()=>{ee=E({items:e.rows||[],getKey:(e,t)=>e.prop,elements:ee,parent:y,before:C,singleRoot:!0,trackIndex:!1,start:x,renderItem:(e,t,r,i,a)=>{S(b(()=>{let t=l(),r=h(`tr`,t);g(t,r),_(()=>{n(r,`key`,String(e.prop))});let i=h(`td`,r);g(r,i);let a=h(`code`,i);g(i,a);let o=c(`rue:slot:anchor`);g(a,o),_(()=>{let t=e.prop;v(()=>S(t,a,o))});let s=h(`td`,r);g(r,s);let u=c(`rue:slot:anchor`);g(s,u),_(()=>{let t=e.description;v(()=>S(t,s,u))});let d=h(`td`,r);g(r,d);let f=h(`code`,d);g(d,f);let p=c(`rue:slot:anchor`);g(f,p),_(()=>{let t=e.type;v(()=>S(t,f,p))});let m=h(`td`,r);g(r,m);let y=h(`code`,m);g(m,y);let b=c(`rue:slot:anchor`);return g(y,b),_(()=>{let t=e.defaultValue;v(()=>S(t,y,b))}),t}),t,r)}})}),r}),H=e=>Array.isArray(e)?H(e[0]):e&&typeof e==`object`&&`value`in e?e.value:e??null,Pe=e=>{if(!Array.isArray(e)){let t=H(e);return t==null?[]:[t]}return e.map(e=>H(e)).filter(e=>e!=null)},Fe=[{title:`产品平台`,value:`platform`,children:[{title:`文档中心`,value:`docs`},{title:`资源目录`,value:`assets`},{title:`组件市场`,value:`components`}]},{title:`工程效率`,value:`engineering`,children:[{title:`构建链路`,value:`build`},{title:`质量门禁`,value:`quality`},{title:`发布管道`,value:`release`}]},{title:`增长分析`,value:`growth`,children:[{title:`实验看板`,value:`experiment`},{title:`归因报表`,value:`attribution`},{title:`留存漏斗`,value:`retention`}]}],Ie=[{title:`协作面板`,value:`workspace`,children:[{title:`日报汇总`,value:`daily`},{title:`设计交接`,value:`handoff`},{title:`会议纪要`,value:`minutes`}]},{title:`数据服务`,value:`data`,children:[{title:`分析订阅`,value:`analytics`},{title:`实验指标`,value:`metrics`},{title:`异常告警`,value:`alerts`}]}],Le=[{title:`应用集群`,value:`apps`,children:[{title:`生产环境`,value:`prod`},{title:`预发环境`,value:`stage`},{title:`开发环境`,value:`dev`}]}],Re=[{nodeId:1,parentId:0,code:`workspace`,name:`Workspace`},{nodeId:2,parentId:1,code:`workflow`,name:`Workflow board`},{nodeId:3,parentId:1,code:`briefs`,name:`Briefs`},{nodeId:4,parentId:2,code:`review`,name:`Design review`},{nodeId:5,parentId:2,code:`release`,name:`Release checklist`}],ze=`import { ref } from '@rue-js/rue'
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
`,qe=[{prop:`allowClear`,description:`追加清空按钮，适合单选、多选和勾选模式统一收敛到一个入口`,type:`boolean | { clearIcon?: any }`,defaultValue:`false`},{prop:`fieldNames`,description:`映射 label、value、children、key 与 simple mode 的 id / pId 字段`,type:`TreeSelectFieldNames`,defaultValue:`{ title, value, children, key }`},{prop:`labelInValue`,description:`把回填值组织为 { value, key, label, halfChecked } 结构`,type:`boolean`,defaultValue:`false`},{prop:`loadData`,description:`展开未加载节点时触发异步加载，适合目录、权限树、远端分类场景`,type:`(node) => Promise<any> | void`,defaultValue:`-`},{prop:`maxCount`,description:`限制多选 / 勾选模式下最多展示并回填多少个节点`,type:`number`,defaultValue:`-`},{prop:`multiple`,description:`多选模式，已选项会回填为标签列表`,type:`boolean`,defaultValue:`false`},{prop:`showCheckedStrategy`,description:`控制 treeCheckable 时的回填策略，支持 SHOW_ALL / SHOW_PARENT / SHOW_CHILD`,type:`TreeSelectShowCheckedStrategy`,defaultValue:`SHOW_CHILD`},{prop:`showSearch`,description:`开启搜索输入；对象模式可配置 autoClearSearchValue、filterTreeNode 与 onSearch`,type:`boolean | TreeSelectShowSearchConfig`,defaultValue:`单选 false / 多选 true`},{prop:`treeCheckable`,description:`把树节点切到 checkbox 模式，适合权限树、发布范围、分类选择`,type:`boolean`,defaultValue:`false`},{prop:`treeData`,description:`树数据源，title / value / children 为常用字段，value 在整棵树里需要唯一`,type:`TreeSelectDataNode[]`,defaultValue:`[]`},{prop:`treeDataSimpleMode`,description:`接收扁平结构树数据，并通过 id / pId 自动恢复层级`,type:`boolean | { id?: string; pId?: string; rootPId?: string | number | null }`,defaultValue:`false`},{prop:`treeDefaultExpandAll / treeExpandedKeys`,description:`控制树默认展开和受控展开，便于做大树分层浏览`,type:`boolean / TreeSelectValue[]`,defaultValue:`false / -`},{prop:`treeNodeFilterProp`,description:`搜索命中用的字段，常见设置是 title 或自定义 label 字段`,type:`string`,defaultValue:`value`},{prop:`variant / status`,description:`使用 Rue 输入类组件的视觉语义，支持 filled、borderless、underlined 与 warning/error`,type:`'outlined' | 'filled' | 'borderless' | 'underlined' / 'warning' | 'error'`,defaultValue:`'outlined' / -`}],Je=()=>{let{basicValue:e,noClearValue:n,simpleValue:r,multipleValue:i,multipleOpen:a,checkableValue:o,checkableOpen:u,semanticValue:d,shellValue:p,asyncValue:y,asyncExpandedKeys:x,asyncTreeData:C,loadAsyncTree:ee,tabs:E}=T(`useSetup:0:0`,()=>t(()=>{let e=T(`ref:1:0`,()=>m(`docs`)),t=T(`ref:1:1`,()=>m(`docs`)),n=T(`ref:1:2`,()=>m(`workflow`)),r=T(`ref:1:3`,()=>m([`analytics`,`minutes`])),i=T(`ref:1:4`,()=>m(!1)),a=T(`ref:1:5`,()=>m([`build`,`quality`])),o=T(`ref:1:6`,()=>m(!1)),s=T(`ref:1:7`,()=>m({value:`release`,key:`release`,label:`发布管道`})),c=T(`ref:1:8`,()=>m(`prod`)),l=T(`ref:1:9`,()=>m(null)),u=T(`ref:1:10`,()=>m([])),d=T(`ref:1:11`,()=>m([{title:`按需加载目录`,value:`async-root`,isLeaf:!1}]));return{basicValue:e,noClearValue:t,simpleValue:n,multipleValue:r,multipleOpen:i,checkableValue:a,checkableOpen:o,semanticValue:s,shellValue:c,asyncValue:l,asyncExpandedKeys:u,asyncTreeData:d,loadAsyncTree:async e=>{e.value===`async-root`&&(d.value=[{title:`按需加载目录`,value:`async-root`,isLeaf:!1,children:[{title:`实验看板`,value:`async-dashboard`},{title:`巡检报告`,value:`async-report`},{title:`回归清单`,value:`async-checklist`}]}])},tabs:{basic:T(`ref:1:12`,()=>m(`preview`)),noClear:T(`ref:1:13`,()=>m(`preview`)),simple:T(`ref:1:14`,()=>m(`preview`)),multiple:T(`ref:1:15`,()=>m(`preview`)),checkable:T(`ref:1:16`,()=>m(`preview`)),semantic:T(`ref:1:17`,()=>m(`preview`)),async:T(`ref:1:18`,()=>m(`preview`)),shell:T(`ref:1:19`,()=>m(`preview`))}}}));return b(t=>{let m=l(),T=c(`rue:component:anchor`);return g(m,T),S(w(te,{children:b(()=>{let t=l(),m=h(`div`,t);g(t,m),s(m,`max-w-none prose prose-sm md:prose-base`);let b=h(`h1`,m);g(m,b),g(b,f(`TreeSelect 树选择`));let T=h(`p`,m);g(m,T),s(T,`text-sm mt-3 mb-3`),g(T,f(`TreeSelect 适合“下拉选择 + 树结构浏览”同时存在的输入场景，比如目录、组织架构、权限树、资源分类和发布范围。 视觉使用 Rue 的 input / badge / base 色阶体系，能力覆盖 treeData、simple mode、多选、 勾选、语义值、异步加载和 filled / warning 等核心场景。`));let D=h(`div`,m);g(m,D),s(D,`not-prose mt-8 space-y-2`);let te=h(`h2`,D);g(D,te),s(te,`text-2xl font-semibold`),g(te,f(`基础能力`));let j=h(`p`,D);g(D,j),s(j,`text-sm text-base-content/70`),g(j,f(`先把单选、搜索和清空打稳，再把 simple mode、多选与勾选这些更接近业务配置面的能力接进来。`));let ne=c(`rue:component:anchor`);g(m,ne),_(()=>{let t=w(A,{title:`Basic`,summary:`单选、搜索、默认展开与 allowClear 的组合，是目录选择最常见的入口。`,tab:E.basic,preview:k(`div`,{className:`card border border-base-200/80 bg-base-100 shadow-sm`,children:O(`div`,{className:`card-body gap-3`,children:[k(V,{value:e.value,treeData:Fe,treeDefaultExpandAll:!0,showSearch:!0,treeNodeFilterProp:`title`,allowClear:!0,placeholder:`选择一个树节点`,onChange:t=>{e.value=String(H(t)??``)}}),O(`div`,{className:`text-sm text-base-content/70`,children:[`当前节点：`,e.value||`未选择`]})]})}),code:ze});v(()=>S(t,m,ne))});let M=c(`rue:component:anchor`);g(m,M),_(()=>{let e=w(A,{title:`Without allowClear`,summary:`未开启 allowClear 时，只保持选择交互，不显示 selector 右侧的清空入口。`,tab:E.noClear,preview:k(`div`,{className:`card border border-base-200/80 bg-base-100 shadow-sm`,children:O(`div`,{className:`card-body gap-3`,children:[k(V,{value:n.value,treeData:Fe,treeDefaultExpandAll:!0,onChange:e=>{n.value=String(H(e)??``)}}),O(`div`,{className:`text-sm text-base-content/70`,children:[`当前节点：`,n.value||`未选择`]})]})}),code:Be});v(()=>S(e,m,M))});let re=c(`rue:component:anchor`);g(m,re),_(()=>{let e=w(A,{title:`Simple Mode`,summary:`扁平树数据直接接入，适合后端给的是 id / pId 结构时减少前置整理成本。`,tab:E.simple,preview:k(`div`,{className:`card border border-base-200/80 bg-base-100 shadow-sm`,children:O(`div`,{className:`card-body grid gap-4 lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`,children:[O(`div`,{className:`grid gap-3`,children:[k(V,{value:r.value,treeData:Re,treeDataSimpleMode:{id:`nodeId`,pId:`parentId`,rootPId:0},fieldNames:{value:`code`,label:`name`,key:`code`},treeDefaultExpandAll:!0,showSearch:!0,treeNodeFilterProp:`title`,allowClear:!0,onChange:e=>{r.value=String(H(e)??``)}}),O(`div`,{className:`text-sm text-base-content/70`,children:[`当前目标：`,r.value||`未选择`]})]}),k(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`,children:`这类接口在 CMS、流程平台、低代码配置里很常见。只要给出 id / pId / value / title 映射，就能直接恢复成可搜索树。`})]})}),code:Ve});v(()=>S(e,m,re))});let N=c(`rue:component:anchor`);g(m,N),_(()=>{let e=w(A,{title:`Multiple`,summary:`多选模式默认以标签回填，适合通知订阅、面板订阅、资源批量绑定。`,tab:E.multiple,preview:k(`div`,{className:`card border border-base-200/80 bg-base-100 shadow-sm`,children:O(`div`,{className:`card-body gap-3`,children:[k(V,{value:i.value,open:a.value,treeData:Ie,multiple:!0,treeDefaultExpandAll:!0,allowClear:!0,maxTagCount:2,placeholder:`选择多个项目`,onOpenChange:e=>{a.value=e},onChange:(e,t,n)=>{i.value=Pe(e),n.clear||(a.value=!0)}}),O(`div`,{className:`text-sm text-base-content/70`,children:[`已选：`,i.value.join(` / `)||`未选择`]})]})}),code:He});v(()=>S(e,m,N))});let P=c(`rue:component:anchor`);g(m,P),_(()=>{let e=w(A,{title:`Checkable`,summary:`勾选树会把多选语义进一步贴近权限树和发布范围；默认 SHOW_CHILD 会直接回填实际勾选的子节点。`,tab:E.checkable,preview:k(`div`,{className:`card border border-base-200/80 bg-base-100 shadow-sm`,children:O(`div`,{className:`card-body grid gap-4 lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`,children:[O(`div`,{className:`grid gap-3`,children:[k(V,{value:o.value,open:u.value,treeData:Fe,treeCheckable:!0,maxTagCount:2,maxTagPlaceholder:`...`,allowClear:!0,treeDefaultExpandAll:!0,onOpenChange:e=>{u.value=e},onChange:(e,t,n)=>{o.value=Pe(e),n.clear||(u.value=!0)}}),O(`div`,{className:`text-sm text-base-content/70`,children:[`回填：`,o.value.join(` / `)||`未选择`]})]}),O(`ul`,{className:`list rounded-box border border-base-300 bg-base-200/40 p-4 text-sm`,children:[O(`li`,{className:`list-row`,children:[k(`span`,{className:`font-medium`,children:`策略`}),k(`span`,{className:`list-col-grow text-base-content/70`,children:`当前示例使用默认 SHOW_CHILD，选了哪些子节点就回填哪些子节点，更适合精确范围选择。`})]}),O(`li`,{className:`list-row`,children:[k(`span`,{className:`font-medium`,children:`切换`}),k(`span`,{className:`list-col-grow text-base-content/70`,children:`如果业务更想要紧凑展示，可以把 showCheckedStrategy 改成 TreeSelect.SHOW_PARENT，让完整分组选中时折叠成父标签。`})]}),O(`li`,{className:`list-row`,children:[k(`span`,{className:`font-medium`,children:`回填`}),k(`span`,{className:`list-col-grow text-base-content/70`,children:`当前示例最多展示两个标签，更多已选项会用 ... 收起，避免 selector 被撑成两排。`})]})]})]})}),code:Ue});v(()=>S(e,m,P))});let F=h(`div`,m);g(m,F),s(F,`not-prose mt-10 space-y-2`);let I=h(`h2`,F);g(F,I),s(I,`text-2xl font-semibold`),g(I,f(`高级能力`));let L=h(`p`,F);g(F,L),s(L,`text-sm text-base-content/70`),g(L,f(`语义值、异步加载和外观变体覆盖配置类面板里的常见选择场景。`));let ie=c(`rue:component:anchor`);g(m,ie),_(()=>{let e=w(A,{title:`Label In Value`,summary:`当业务既要 value 也要 label 时，直接回填结构体会更顺手。`,tab:E.semantic,preview:k(`div`,{className:`card border border-base-200/80 bg-base-100 shadow-sm`,children:O(`div`,{className:`card-body grid gap-4 lg:grid-cols-[minmax(0,22rem),1fr] lg:items-start`,children:[k(`div`,{className:`grid gap-3`,children:k(V,{value:d.value,treeData:Fe,labelInValue:!0,treeDefaultExpandAll:!0,onChange:e=>{d.value=e??null}})}),O(`div`,{className:`rounded-box border border-base-300 bg-base-200/40 p-4 text-sm text-base-content/70`,children:[`当前结构：`,k(`code`,{children:JSON.stringify(d.value)})]})]})}),code:We});v(()=>S(e,m,ie))});let ae=c(`rue:component:anchor`);g(m,ae),_(()=>{let e=w(A,{title:`Async Load`,summary:`展开未加载分支时触发 loadData，适合远端目录、权限树和超大分类树。`,tab:E.async,preview:k(`div`,{className:`card border border-base-200/80 bg-base-100 shadow-sm`,children:O(`div`,{className:`card-body grid gap-4 lg:grid-cols-[minmax(0,22rem),1fr] lg:items-start`,children:[O(`div`,{className:`grid gap-3`,children:[k(V,{value:y.value,treeExpandedKeys:x.value,treeData:C.value,allowClear:!0,loadData:ee,onTreeExpand:e=>{x.value=e},onChange:e=>{y.value=String(H(e)??``)}}),O(`div`,{className:`text-sm text-base-content/70`,children:[`当前节点：`,y.value||`尚未选择`]})]}),k(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`,children:`第一次展开“按需加载目录”时会把子节点注入到 treeData，这个模式适合服务端分页目录和按需权限树。`})]})}),code:Ge});v(()=>S(e,m,ae))});let oe=c(`rue:component:anchor`);g(m,oe),_(()=>{let e=w(A,{title:`Variant and Status`,summary:`TreeSelect 也使用 Rue 当前输入体系的 filled / warning 视觉语义。`,tab:E.shell,preview:k(`div`,{className:`card border border-base-200/80 bg-base-100 shadow-sm`,children:O(`div`,{className:`card-body grid gap-4 md:grid-cols-2`,children:[O(`div`,{className:`grid gap-3`,children:[k(V,{value:p.value,treeData:Le,prefix:k(`span`,{className:`badge badge-neutral badge-sm`,children:`ENV`}),suffix:k(`span`,{className:`text-xs opacity-60`,children:`可清空`}),variant:`filled`,status:`warning`,allowClear:!0,treeDefaultExpandAll:!0,onChange:e=>{p.value=String(H(e)??``)}}),O(`div`,{className:`text-sm text-base-content/70`,children:[`当前环境：`,p.value||`未选择`]})]}),k(`div`,{className:`rounded-box border border-base-300 bg-base-200/40 p-4 text-sm text-base-content/70`,children:`prefix / suffix 让 TreeSelect 能自然落进环境切换、租户切换和带状态提醒的配置表单里。`})]})}),code:Ke});v(()=>S(e,m,oe))});let R=h(`div`,m);g(m,R),s(R,`not-prose mt-10 space-y-4`);let z=h(`h2`,R);g(R,z),s(z,`text-2xl font-semibold`),g(z,f(`API`));let se=c(`rue:component:anchor`);return g(R,se),_(()=>{let e=w(Ne,{rows:qe});v(()=>S(e,R,se))}),t})}),m,T),m})};export{Je as default};