import{$ as e,Dt as t,Et as n,G as r,H as i,J as a,K as o,Ot as s,Tt as c,V as l,W as u,_t as d,d as f,dt as p,gt as m,j as h,k as g,kt as _,l as v,q as y,st as b,t as x,tt as S,u as C,ut as w,xt as T,y as E}from"./vapor-runtime-ACs_OvwU.js";import{a as D,n as ee}from"./vapor-helpers-vapor-BFB_fGs4.js";import{n as O,t as k}from"./src-B0RvnZVV.js";import{n as te}from"./SidebarPlaygroundDesign-fKTv1NQ3.js";import{t as A}from"./PreviewBlock-BkL9wNXA.js";var ne=({render:e})=>e(),j={title:`title`,key:`key`,children:`children`,disabled:`disabled`,selectable:`selectable`,checkable:`checkable`,disableCheckbox:`disableCheckbox`,isLeaf:`isLeaf`,icon:`icon`,className:`className`,id:`id`,pId:`pId`},M=(...e)=>e.filter(Boolean).join(` `),N=e=>typeof e==`object`&&!!e&&!Array.isArray(e),P=e=>typeof e==`string`||typeof e==`number`,F=e=>`${typeof e}:${String(e)}`,I=e=>{let t=[],n=new Set;return(e??[]).forEach(e=>{let r=F(e);n.has(r)||(n.add(r),t.push(e))}),t},L=(e,t)=>e?t?`${e} ${t}`:e:t??``,R=(e,t,n)=>e[n?.[t]??j[t]],re=(e,t)=>R(e,`title`,t)??e.title??e.key,z=e=>new Set(I(e).map(F)),B=e=>e==null||typeof e==`boolean`?``:typeof e==`string`||typeof e==`number`?String(e):Array.isArray(e)?e.map(e=>B(e)).filter(Boolean).join(` `):typeof e==`object`?[`title`,`label`,`name`,`text`,`description`,`children`].map(t=>B(e[t])).filter(Boolean).join(` `):``,ie=(e,t,n)=>{if(!t)return e;let r=N(t)?t:void 0,i=r?.id??n?.id??j.id,a=r?.pId??n?.pId??j.pId,o=r?.rootPId??0,s=n?.children??j.children,c=new Map;e.forEach((e,t)=>{let n=e[i]??e.key??t;c.set(n,{...e,[s]:[]})});let l=[];return e.forEach((e,t)=>{let n=e[i]??e.key??t,r=e[a],u=c.get(n);if(!u)return;if(r==null||r===o||!c.has(r)){l.push(u);return}let d=c.get(r);if(!d){l.push(u);return}let f=d[s]??[];f.push(u),d[s]=f}),l},ae=(e,t)=>{let n=[],r={},i=(e,a,o,s)=>{let c=R(e,`key`,t),l=P(c)?c:o,u=F(l),d=R(e,`isLeaf`,t),f={key:l,keyText:u,title:re(e,t),depth:a,children:[],raw:e,disabled:!!R(e,`disabled`,t),selectable:R(e,`selectable`,t)!==!1,checkable:R(e,`checkable`,t)!==!1,disableCheckbox:!!R(e,`disableCheckbox`,t),isLeaf:!1,className:R(e,`className`,t),icon:R(e,`icon`,t),parentKeyText:s};n.push(f),r[u]=f;let p=R(e,`children`,t);return f.children=Array.isArray(p)?p.map((e,t)=>i(e,a+1,`${o}-${t}`,u)):[],f.isLeaf=d===!0?!0:d===!1?!1:f.children.length===0,f};return{roots:e.map((e,t)=>i(e,0,`node-${t}`)),flat:n,byKeyText:r}},oe=e=>{let t=[],n=e=>{!e.disabled&&e.checkable&&!e.disableCheckbox&&t.push(e.keyText),e.children.forEach(e=>n(e))};return n(e),t},se=e=>{let t=[],n=e=>{t.push(e.key),e.children.forEach(e=>n(e))};return n(e),t},V=(e,t,n)=>{let r=new Set,i=new Set,a={},o=e=>{let s=!e.disabled&&e.checkable&&!e.disableCheckbox,c=e.children.map(e=>o(e)).filter(e=>e.participates),l=t.has(e.keyText),u=l,d=!1;if(!n&&c.length>0){let e=c.every(e=>e.checked),t=c.some(e=>e.checked||e.halfChecked);u=l||e,d=!u&&t}let f={checked:u,halfChecked:d,participates:s||c.length>0};return a[e.keyText]=f,u&&s&&r.add(e.keyText),d&&s&&i.add(e.keyText),f};return e.forEach(e=>o(e)),{checkedKeys:r,halfCheckedKeys:i,stateMap:a}},ce=(e,t,n,r)=>{let i=new Set(e),a=new Set(t),o=n.filter(e=>i.has(e.keyText)).map(e=>e.key).filter(P);return r?{checked:o,halfChecked:n.filter(e=>a.has(e.keyText)).map(e=>e.key).filter(P)}:o},le=(e,t,n,r)=>{if(!n){let n=[],r=e=>{n.push({node:e,matched:!1}),t.has(e.keyText)&&e.children.forEach(e=>r(e))};return e.forEach(e=>r(e)),n}let i=e=>{let t=r(e),n=e.children.flatMap(e=>i(e));if(!t&&n.length===0)return[];if(t){let t=[{node:e,matched:!0}],n=e=>{t.push({node:e,matched:!1}),e.children.forEach(e=>n(e))};return e.children.forEach(e=>n(e)),t}return[{node:e,matched:!1},...n]};return e.flatMap(e=>i(e))},ue=(e,t,n)=>t?typeof n==`function`?n(t,e):n===!1?!0:B(e.title).toLowerCase().includes(t.toLowerCase()):!0,H=(e,t,n)=>{let r=t.parentKeyText;for(;r;){if(r===e.keyText)return!0;r=n[r]?.parentKeyText}return!1},de=e=>{let t=!!e,n=N(e)?e:void 0;return{enabled:t,icon:n?.icon,nodeDraggable:r=>t?typeof e==`function`?e(r):n&&typeof n.nodeDraggable==`function`?n.nodeDraggable(r):!0:!1}},fe=(e,t,n,r,i)=>{if(!i||!n||!r)return{items:e,topSpacer:0,bottomSpacer:0};let a=r+4,o=Math.max(1,Math.ceil(n/a))+12,s=Math.max(0,e.length-o),c=Math.min(s,Math.max(0,Math.floor(t/a)-6)),l=Math.min(e.length,c+o);return{items:e.slice(c,l),topSpacer:c*a,bottomSpacer:Math.max(0,(e.length-l)*a)}},pe=e=>{if(e===-1)return`before`;if(e===1)return`after`;if(e===0)return`inside`},me=(e,t)=>e.map(e=>t[e]?.key).filter(P),he=(e,t)=>{if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0},ge=e=>{switch(e){case`small`:case`sm`:return{headerPadding:`px-4 py-3`,bodyPadding:`px-3 py-3`,rowPadding:`py-1.5`,textClass:`text-sm`,rowMinHeight:36,rowEstimate:42};case`large`:case`lg`:return{headerPadding:`px-5 py-4`,bodyPadding:`px-4 py-4`,rowPadding:`py-2.5`,textClass:`text-[0.95rem]`,rowMinHeight:44,rowEstimate:50};default:return{headerPadding:`px-4 py-3.5`,bodyPadding:`px-3.5 py-3.5`,rowPadding:`py-2`,textClass:`text-sm`,rowMinHeight:40,rowEstimate:46}}},_e=e=>{switch(e){case`error`:return`border-error/55 shadow-[0_0_0_1px_rgba(248,113,113,0.14)]`;case`warning`:return`border-warning/55 shadow-[0_0_0_1px_rgba(251,191,36,0.14)]`;default:return``}},ve=({expanded:e,hidden:t})=>k(`span`,{"aria-hidden":`true`,className:M(`inline-flex size-4 items-center justify-center text-base-content/55 transition-transform duration-150`,e&&`rotate-90`,t&&`opacity-0`),children:k(`svg`,{viewBox:`0 0 20 20`,fill:`none`,className:`size-4`,children:k(`path`,{d:`M7.5 5.5L12.5 10L7.5 14.5`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`})})}),ye=()=>k(`span`,{className:`loading loading-spinner loading-xs text-base-content/55`,"aria-hidden":`true`}),be=()=>O(`svg`,{viewBox:`0 0 20 20`,fill:`currentColor`,className:`size-4`,children:[k(`circle`,{cx:`6`,cy:`5`,r:`1.2`}),k(`circle`,{cx:`6`,cy:`10`,r:`1.2`}),k(`circle`,{cx:`6`,cy:`15`,r:`1.2`}),k(`circle`,{cx:`13`,cy:`5`,r:`1.2`}),k(`circle`,{cx:`13`,cy:`10`,r:`1.2`}),k(`circle`,{cx:`13`,cy:`15`,r:`1.2`})]}),U=({expanded:e})=>k(`svg`,{viewBox:`0 0 24 24`,fill:`none`,className:`size-5`,children:e?k(`path`,{d:`M3 8.5a2 2 0 0 1 2-2h4l1.4 1.5H19a2 2 0 0 1 1.9 2.6l-1.4 5A2 2 0 0 1 17.6 17H6a2 2 0 0 1-1.93-1.48L3 8.5Z`,stroke:`currentColor`,strokeWidth:`1.6`,strokeLinejoin:`round`}):k(`path`,{d:`M3 7.5a2 2 0 0 1 2-2h4l1.4 1.5H19a2 2 0 0 1 2 2V16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7.5Z`,stroke:`currentColor`,strokeWidth:`1.6`,strokeLinejoin:`round`})}),xe=()=>O(`svg`,{viewBox:`0 0 24 24`,fill:`none`,className:`size-5`,children:[k(`path`,{d:`M8 3.5h6l4 4V19a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5.5a2 2 0 0 1 2-2Z`,stroke:`currentColor`,strokeWidth:`1.6`,strokeLinejoin:`round`}),k(`path`,{d:`M14 3.5V8h4`,stroke:`currentColor`,strokeWidth:`1.6`,strokeLinejoin:`round`})]}),W=({className:e,style:n,treeData:r=[],fieldNames:i,treeDataSimpleMode:a,selectedKeys:o,defaultSelectedKeys:l,checkedKeys:u,defaultCheckedKeys:d,expandedKeys:f,defaultExpandedKeys:p,defaultExpandAll:m,multiple:_,checkable:v,checkStrictly:y,showLine:b,showIcon:x,blockNode:S,selectable:C=!0,disabled:T,size:D,status:ee,draggable:te,allowDrop:A,virtual:j=!0,height:N,itemHeight:R,titleRender:re,switcherIcon:B,icon:W,filterTreeNode:Se,searchValue:G,defaultSearchValue:Ce,searchPlaceholder:we=`搜索节点`,allowSearch:Te,loadData:Ee,emptyText:De=`暂无节点`,onSelect:Oe,onCheck:ke,onExpand:Ae,onSearch:je,onDoubleClick:Me,onDragStart:Ne,onDragEnter:Pe,onDragOver:Fe,onDragLeave:Ie,onDragEnd:Le,onDrop:Re,onScroll:ze,classNames:K,styles:q,directoryMode:Be,expandAction:Ve=!1,toggleSelect:He=!0,rangeSelect:Ue=`append`,...We})=>{let J=ae(ie(r,a,i),i),Y=c();Y.current=J;let X=ge(D),Z=de(te),Ge=m?J.flat.filter(e=>e.children.length>0||!e.isLeaf).map(e=>e.key):p??[],[Ke,qe]=t(I(l??o),{kind:`ref`}),[Je,Ye]=t(I(d),{kind:`ref`}),[Xe,Ze]=t(I(Ge),{kind:`ref`}),[Qe,$e]=t(I(o),{kind:`ref`}),[et,tt]=t(I(f),{kind:`ref`}),[nt,rt]=t(u===void 0?new Set:z(Array.isArray(u)?u:u.checked),{kind:`ref`}),[it,at]=t(Ce??``,{kind:`ref`}),[ot,st]=t([],{kind:`ref`}),[ct,lt]=t(0,{kind:`ref`}),ut=c(null),dt=c([]),ft=c(),[Q,pt]=t({},{kind:`ref`}),[mt,ht]=t({},{kind:`ref`});if(u!==void 0){let e=z(Array.isArray(u)?u:u.checked);he(nt.value,e)||rt(e)}o!==void 0&&!he(z(Qe.value),z(o))&&$e(I(o)),f!==void 0&&!he(z(et.value),z(f))&&tt(I(f));let gt=R??X.rowEstimate,_t=typeof N==`number`&&N>0?N:void 0,vt=j!==!1&&_t&&typeof R==`number`&&R>0?R:void 0,yt=()=>{let e=ae(ie(r,a,i),i);return Y.current=e,e},bt=()=>Y.current??J,xt=()=>o===void 0?Ke.value:Qe.value,St=()=>f===void 0?Xe.value:et.value,Ct=()=>G===void 0?it.value:G,wt=()=>u===void 0?z(Je.value):nt.value,Tt=()=>{let e=bt(),t=xt(),n=St(),r=Ct(),i=wt(),a=z(t),o=z(n),s=V(e.roots,i,!!y),c=le(e.roots,o,r,e=>ue(e,r,Se));return{normalizedTree:e,mergedSelectedKeys:t,mergedExpandedKeys:n,mergedSearchValue:r,selectedKeyTextSet:a,expandedKeyTextSet:o,checkState:s,visibleNodes:c,virtualSlice:fe(c,ct.value,_t,gt,j!==!1&&!!_t)}},Et=(e,t,n)=>{let r=I(e);return f===void 0?Ze(r):tt(r),$(),Ae&&Ae(r,{node:t,expanded:r.some(e=>F(e)===t.keyText),nativeEvent:n}),r},Dt=(e,t,n)=>{let r=bt(),i=I(e).filter(e=>r.byKeyText[F(e)]),a=i.map(e=>r.byKeyText[F(e)]).filter(Boolean);o===void 0?qe(i):$e(i),$(),Oe&&Oe(i,{node:t,nativeEvent:n,selected:i.some(e=>F(e)===t.keyText),selectedNodes:a})},Ot=(e,t,n)=>{let r=bt(),i=V(r.roots,e,!!y),a=ce(Array.from(i.checkedKeys),Array.from(i.halfCheckedKeys),r.flat,!!y);u===void 0?Ye(y?a.checked:a):rt(new Set(i.checkedKeys)),$(),ke&&ke(a,{node:t,nativeEvent:n,checked:i.checkedKeys.has(t.keyText),checkedNodes:Array.from(i.checkedKeys).map(e=>r.byKeyText[e]).filter(Boolean),halfCheckedKeys:Array.from(i.halfCheckedKeys).map(e=>r.byKeyText[e]?.key).filter(P)})},kt=async(e,t)=>{let n=Tt();if(T||e.disabled)return n.mergedExpandedKeys;let r=n.expandedKeyTextSet.has(e.keyText),i=r?n.mergedExpandedKeys.filter(t=>F(t)!==e.keyText):[...n.mergedExpandedKeys,e.key];if(!r&&Ee&&!e.isLeaf&&e.children.length===0&&!ot.value.includes(e.keyText)){st([...ot.value,e.keyText]),$();try{await Ee(e),yt()}finally{st(ot.value.filter(t=>t!==e.keyText)),yt(),$()}}return Et(i,e,t)},At=(e,t)=>{t.preventDefault(),t.stopPropagation(),kt(e,t)},jt=(e,t)=>{if(T||e.disabled||!C||!e.selectable)return;let n=Tt();if(Be){let r=!!_&&!!He&&!!(t?.ctrlKey||t?.metaKey),i=!!_&&Ue!==!1&&!!t?.shiftKey&&!!ut.current;if(_&&i){let r=n.visibleNodes.map(e=>e.node.keyText),i=ut.current??e.keyText,a=r.indexOf(i),o=r.indexOf(e.keyText),s=Math.min(a,o),c=Math.max(a,o),l=r.slice(s,c+1),u=dt.current??[],d=Ue===`append`?u.length?u:n.mergedSelectedKeys.map(F):[];Dt(me(Array.from(new Set([...d,...l])),n.normalizedTree.byKeyText),e,t);return}if(_&&r){let r=n.selectedKeyTextSet.has(e.keyText)?n.mergedSelectedKeys.filter(t=>F(t)!==e.keyText):[...n.mergedSelectedKeys,e.key];ut.current=e.keyText,dt.current=r.map(F),Dt(r,e,t);return}ut.current=e.keyText,dt.current=[e.keyText],Dt([e.key],e,t);return}if(_){Dt(n.selectedKeyTextSet.has(e.keyText)?n.mergedSelectedKeys.filter(t=>F(t)!==e.keyText):[...n.mergedSelectedKeys,e.key],e,t);return}Dt(n.selectedKeyTextSet.has(e.keyText)?[]:[e.key],e,t)},Mt=(e,t)=>{if(t.preventDefault(),t.stopPropagation(),T||e.disabled||!e.checkable||e.disableCheckbox)return;let n=Tt(),r=new Set(wt()),i=n.checkState.checkedKeys.has(e.keyText);if(y)i?r.delete(e.keyText):r.add(e.keyText);else{let t=oe(e);i?t.forEach(e=>r.delete(e)):t.forEach(e=>r.add(e))}Ot(r,e,t)},Nt=e=>{G===void 0&&at(e),$(),je&&je(e)},Pt=e=>{lt(e.currentTarget.scrollTop),$(),ze&&ze(e)},Ft=e=>{!e||Q.value.overKeyText!==e||(pt({dragKeyText:Q.value.dragKeyText}),$())},It=(e,t)=>{Q.value.overKeyText===e&&Q.value.dropPosition===t||(pt({...Q.value,overKeyText:e,dropPosition:t}),$())},Lt=(e,t)=>{let n={...mt.value},r=n[e]??0,i=Math.max(r+t,0);return i>0?n[e]=i:delete n[e],ht(n),$(),i},Rt=()=>{ht({}),pt({}),$()},zt=(e,t,n)=>{let r=Q.value.dragKeyText;if(!r)return null;let i=bt(),a=i.byKeyText[r];if(!a||a.keyText===e.keyText||H(a,e,i.byKeyText))return null;let o=n?.getBoundingClientRect?.(),s=`clientY`in t?t.clientY:void 0,c=0;return o&&typeof s==`number`&&(s<o.top+o.height*.25?c=-1:s>o.bottom-o.height*.25&&(c=1)),A&&!A({dragNode:a,dropNode:e,dropPosition:c,dropToGap:c!==0})?null:{dragNode:a,dropPosition:c}},Bt=(e,t)=>{!Z.enabled||!Z.nodeDraggable(e)||T||e.disabled||(t.dataTransfer&&(t.dataTransfer.effectAllowed=`move`,t.dataTransfer.setData(`text/plain`,e.keyText)),ht({}),pt({dragKeyText:e.keyText}),$(),Ne&&Ne({event:t,node:e}))},Vt=(e,t)=>{if(!Q.value.dragKeyText)return;Lt(e.keyText,1);let n=zt(e,t,t.currentTarget);if(!n){Ft(e.keyText);return}t.preventDefault(),It(e.keyText,n.dropPosition);let r=Tt(),i=r.mergedExpandedKeys;n.dropPosition===0&&!r.expandedKeyTextSet.has(e.keyText)&&(e.children.length>0||!e.isLeaf)&&(i=Et([...r.mergedExpandedKeys,e.key],e,t)),Pe&&Pe({event:t,node:e,expandedKeys:i})},Ht=(e,t)=>{if(!Q.value.dragKeyText)return;let n=zt(e,t,t.currentTarget);if(!n){Ft(e.keyText);return}t.preventDefault(),t.dataTransfer&&(t.dataTransfer.dropEffect=`move`),It(e.keyText,n.dropPosition),Fe&&Fe({event:t,node:e})},Ut=(e,t)=>{Lt(e.keyText,-1)===0&&Ft(e.keyText),Ie&&Ie({event:t,node:e})},Wt=(e,t)=>{Rt(),Le&&Le({event:t,node:e})},Gt=(e,t)=>{let n=zt(e,t,t.currentTarget);if(!n){Rt();return}t.preventDefault(),t.stopPropagation();let r=Q.value.overKeyText===e.keyText&&Q.value.dropPosition!==void 0?Q.value.dropPosition:n.dropPosition;Re&&Re({event:t,node:e,dragNode:n.dragNode,dragNodesKeys:se(n.dragNode),dropPosition:r,dropToGap:r!==0}),Rt()},Kt=(e,t,n,r,i,a)=>typeof B==`function`?B({node:e,expanded:t,selected:n,checked:r,halfChecked:i,loading:a}):B===void 0?a?k(ye,{}):k(ve,{expanded:t,hidden:e.isLeaf&&e.children.length===0}):B,qt=e=>!Z.enabled||Z.icon===!1||!Z.nodeDraggable(e)?null:k(`span`,{"aria-hidden":`true`,className:L(`inline-flex size-6 shrink-0 cursor-grab items-center justify-center rounded-lg text-base-content/35 transition group-hover:text-base-content/55`,K?.dragHandle),style:q?.dragHandle,"data-rue-tree-drag-handle":`true`,children:Z.icon??k(be,{})}),Jt=(e,t)=>O(`div`,{className:M(`pointer-events-none absolute inset-x-0 z-10 flex items-center gap-2 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-primary/85`,t===`before`?`-top-2.5`:`-bottom-2.5`),style:{paddingLeft:`${e.depth*18+20}px`},"data-rue-tree-drop-placeholder":t,children:[k(`span`,{className:`h-[2px] flex-1 rounded-full bg-primary/60`}),k(`span`,{className:`rounded-full bg-primary/10 px-2 py-1 text-[10px]`,children:`插入到此处`})]}),Yt=(e,t,n,r,i,a)=>typeof W==`function`?W({node:e,expanded:t,selected:n,checked:r,halfChecked:i,loading:a}):W===void 0?e.icon===void 0?x?Be?k(`span`,{className:`inline-flex size-6 items-center justify-center text-base-content/60`,children:e.children.length>0||!e.isLeaf?k(U,{expanded:t}):k(xe,{})}):k(`span`,{className:`inline-flex size-6 items-center justify-center rounded-xl bg-base-200/80 text-[11px] text-base-content/60`,children:e.children.length>0||!e.isLeaf?`DIR`:`DOC`}):null:e.icon:W,Xt=(e,t,n)=>{t.preventDefault(),t.stopPropagation(),n===`doubleClick`&&Me&&Me(t,e);let r=Be&&Ve===n&&(e.children.length>0||!e.isLeaf);if(n===`click`&&r){w(()=>{kt(e,t),jt(e,t)});return}r&&kt(e,t),n===`click`&&jt(e,t)},Zt=()=>{let{mergedSearchValue:e,selectedKeyTextSet:t,expandedKeyTextSet:n,checkState:r,visibleNodes:i,virtualSlice:a}=Tt();return O(E,{children:[a.topSpacer>0?k(`div`,{style:{height:`${a.topSpacer}px`},"aria-hidden":`true`}):null,k(`div`,{className:i.length?`space-y-1`:`hidden`,"aria-hidden":i.length?void 0:`true`,children:a.items.map(({node:i,matched:a})=>{let o=r.stateMap[i.keyText]??{checked:!1,halfChecked:!1,participates:!0},s=e?!0:n.has(i.keyText),c=t.has(i.keyText),l=ot.value.includes(i.keyText),u=!!Ee||i.children.length>0||!i.isLeaf,d=Q.value.overKeyText===i.keyText,f=Z.enabled&&Z.nodeDraggable(i)&&!T&&!i.disabled,p=d?pe(Q.value.dropPosition):void 0,m=d&&Q.value.dropPosition===0?`ring-2 ring-primary/35 ring-inset`:``,h={node:i,expanded:s,selected:c,checked:o.checked,halfChecked:o.halfChecked,loading:l};return O(`div`,{className:`relative flex flex-col`,children:[p===`before`?Jt(i,`before`):null,O(`div`,{className:L(L(M(`group flex items-center gap-2 rounded-2xl px-2.5 ${X.rowPadding} transition duration-200 ease-out`,a&&`bg-primary/8`,c&&`bg-primary/18 ring-1 ring-primary/30 shadow-[0_18px_32px_-24px_rgba(37,99,235,0.85)]`,b&&i.depth>0&&`border-l border-base-300/60`,S?`w-full`:``,m,i.className),K?.node),T||i.disabled?`opacity-55`:``),style:{paddingLeft:`${i.depth*18+8}px`,minHeight:vt?void 0:`${X.rowMinHeight}px`,height:vt?`${vt}px`:void 0,boxSizing:vt?`border-box`:void 0,...q?.node},"data-rue-tree-node":i.keyText,"data-rue-tree-drop-position":d?String(Q.value.dropPosition??0):``,"data-rue-tree-drop-intent":p??``,draggable:f,onDragStart:e=>Bt(i,e),onDragEnter:e=>Vt(i,e),onDragOver:e=>Ht(i,e),onDragLeave:e=>Ut(i,e),onDragEnd:e=>Wt(i,e),onDrop:e=>Gt(i,e),children:[k(`button`,{type:`button`,className:L(`inline-flex size-7 shrink-0 items-center justify-center rounded-xl hover:bg-base-200 disabled:cursor-not-allowed`,K?.switcher),style:q?.switcher,disabled:!u||T||i.disabled,"aria-label":s?`折叠节点`:`展开节点`,onClick:e=>At(i,e),children:Kt(i,s,c,o.checked,o.halfChecked,l)}),v?k(`button`,{type:`button`,role:`checkbox`,"aria-checked":o.halfChecked?`mixed`:o.checked?`true`:`false`,className:L(L(M(`inline-flex size-[1.1rem] shrink-0 items-center justify-center rounded-[0.4rem] border text-[0.75rem] font-semibold shadow-sm transition-all duration-150`,o.checked||o.halfChecked?`border-primary/95 bg-primary text-primary-content shadow-[0_0_0_1px_rgba(37,99,235,0.22)]`:`border-base-content/30 bg-base-100 text-base-content/0 shadow-[0_0_0_1px_rgba(15,23,42,0.06)]`,(T||i.disabled||i.disableCheckbox||!i.checkable)&&`opacity-45`),K?.checkbox),T||i.disabled||i.disableCheckbox||!i.checkable?`cursor-not-allowed`:``),style:q?.checkbox,disabled:T||i.disabled||i.disableCheckbox||!i.checkable,onClick:e=>Mt(i,e),children:o.halfChecked?`−`:o.checked?`✓`:``},`checkbox-${i.keyText}-${o.checked?`checked`:o.halfChecked?`mixed`:`unchecked`}`):null,qt(i),x||i.icon!==void 0||W!==void 0?Yt(i,s,c,o.checked,o.halfChecked,l):null,O(`button`,{type:`button`,className:L(L(M(`flex min-w-0 flex-1 items-center gap-2 rounded-xl px-2.5 py-1.5 text-left ${X.textClass} transition-colors duration-150`,Be?c?`bg-base-200/85 text-base-content`:`text-base-content hover:bg-base-200/70`:c?`bg-primary/10 font-semibold text-primary`:`text-base-content hover:bg-base-200/70`,T||i.disabled||!C||!i.selectable?`cursor-not-allowed opacity-55`:``),K?.label),S?`w-full`:``),style:q?.label,disabled:T||i.disabled||!C||!i.selectable,onClick:e=>Xt(i,e,`click`),onDblClick:e=>Xt(i,e,`doubleClick`),children:[re?k(`div`,{className:`min-w-0 flex-1`,children:k(ne,{render:()=>re(h)})}):k(`span`,{className:`min-w-0 flex-1 truncate`,children:i.title}),p?k(`span`,{className:`badge badge-primary badge-xs`,"data-rue-tree-drop-placeholder":p,children:p===`inside`?`放入`:p===`before`?`插前`:`插后`}):c?k(`span`,{className:`badge badge-primary badge-outline badge-xs`,children:`选中`}):null]})]}),p===`after`?Jt(i,`after`):null]},i.keyText)})}),a.bottomSpacer>0?k(`div`,{style:{height:`${a.bottomSpacer}px`},"aria-hidden":`true`}):null,i.length?null:k(`div`,{className:L(`grid min-h-40 place-items-center rounded-2xl border border-dashed border-base-300/70 bg-base-100/50 px-6 py-8 text-center text-sm text-base-content/55`,K?.empty),style:q?.empty,children:k(`div`,{children:De})})]})};function $(){let e=ft.current;if(!e)return;let t=(e,t)=>{let n=e=>{let t=e.cloneNode(!0);return t.removeAttribute(`style`),t.querySelectorAll(`[style]`).forEach(e=>e.removeAttribute(`style`)),t};return n(e).isEqualNode(n(t))},n=new Map(Array.from(e.querySelectorAll(`[data-rue-tree-node]`)).map(e=>[e.getAttribute(`data-rue-tree-node`)??``,e]));h(Zt(),e),e.querySelectorAll(`[data-rue-tree-node]`).forEach(e=>{let r=e.getAttribute(`data-rue-tree-node`)??``,i=n.get(r);i&&i!==e&&t(i,e)&&e.replaceWith(i)})}g($),s(()=>[r,o,u,f,G],()=>{yt(),$()});let Qt=_t?j===!1?{maxHeight:`${_t}px`,overflowY:`auto`}:{height:`${_t}px`,overflowY:`auto`}:{overflowY:`visible`};return O(`section`,{...We,className:L(L(L(M(`rue-tree overflow-hidden rounded-[1.35rem] border border-base-300/70 bg-gradient-to-b from-base-100 via-base-100 to-base-200/35 shadow-[0_18px_40px_-32px_rgba(15,23,42,0.35)]`,Be&&`rue-directory-tree`),_e(ee)),K?.root),e),style:{...q?.root,...n},"data-rue-tree":`true`,children:[Te?k(`div`,{className:L(L(`border-b border-base-300/70 ${X.headerPadding}`,K?.header),K?.search),style:{...q?.header,...q?.search},children:O(`label`,{className:`input input-bordered flex w-full items-center gap-2 rounded-2xl border-base-300/80 bg-base-100/85 px-3 shadow-sm focus-within:border-primary/45 focus-within:outline-none`,children:[O(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,className:`size-4 text-base-content/50`,children:[k(`circle`,{cx:`11`,cy:`11`,r:`7`}),k(`path`,{strokeLinecap:`round`,d:`m20 20-3.5-3.5`})]}),k(`input`,{type:`text`,value:Ct(),placeholder:we,className:`grow border-none bg-transparent px-0 py-2 text-sm outline-none`,onInput:e=>Nt(e.currentTarget.value)})]})}):null,k(`div`,{className:L(`flex flex-col ${X.bodyPadding}`,K?.body),style:q?.body,children:k(`div`,{ref:ft,className:_t?`overflow-auto`:`overflow-visible`,style:Qt,onScroll:e=>Pt(e),"data-rue-tree-body":`true`})})]})},Se=({className:e,showIcon:t=!0,blockNode:n=!0,expandAction:r=`click`,...i})=>k(W,{...i,className:L(`rue-directory-tree`,e),showIcon:t,blockNode:n,directoryMode:!0,expandAction:r}),G=W;G.DirectoryTree=Se;var Ce=t=>f(n=>{let a=o(`div`,n);S(a,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let s=o(`table`,a);i(a,s),S(s,`table table-zebra`);let c=o(`thead`,s);i(s,c);let l=o(`tr`,c);i(c,l);let d=o(`th`,l);i(l,d),i(d,y(`属性`));let p=o(`th`,l);i(l,p),i(p,y(`说明`));let m=o(`th`,l);i(l,m),i(m,y(`类型`));let h=o(`th`,l);i(l,h),i(h,y(`默认值`));let g=o(`tbody`,s);i(s,g);let b=u(`rue:list:start`),x=u(`rue:list:end`);i(g,b),i(g,x);let C=new Map;return _(()=>{C=ee({items:t.rows||[],getKey:(e,t)=>e.prop,elements:C,parent:g,before:x,singleRoot:!0,trackIndex:!1,start:b,renderItem:(t,n,a,s,c)=>{v(f(()=>{let n=r(),a=o(`tr`,n);i(n,a),_(()=>{e(a,`key`,String(t.prop))});let s=o(`td`,a);i(a,s);let c=o(`code`,s);i(s,c);let l=u(`rue:slot:anchor`);i(c,l),_(()=>{let e=t.prop;T(()=>v(e,c,l))});let d=o(`td`,a);i(a,d);let f=u(`rue:slot:anchor`);i(d,f),_(()=>{let e=t.description;T(()=>v(e,d,f))});let p=o(`td`,a);i(a,p);let m=o(`code`,p);i(p,m);let h=u(`rue:slot:anchor`);i(m,h),_(()=>{let e=t.type;T(()=>v(e,m,h))});let g=o(`td`,a);i(a,g);let y=o(`code`,g);i(g,y);let b=u(`rue:slot:anchor`);return i(y,b),_(()=>{let e=t.defaultValue;T(()=>v(e,y,b))}),n}),n,a)}})}),a}),we=[{title:`产品平台`,key:`platform`,children:[{title:`文档中心`,key:`docs-api`},{title:`组件市场`,key:`component-hub`},{title:`示例仓库`,key:`examples`}]},{title:`工程效率`,key:`engineering`,children:[{title:`构建链路`,key:`build-pipeline`},{title:`质量门禁`,key:`quality-gate`},{title:`发布管道`,key:`release-flow`}]},{title:`增长分析`,key:`growth`,children:[{title:`实验看板`,key:`experiment-board`},{title:`归因报表`,key:`attribution-report`},{title:`留存漏斗`,key:`retention-funnel`}]}],Te=[{title:`发布总控`,key:`release-control`,children:[{title:`前台站点`,key:`release-site`,children:[{title:`首页编排`,key:`site-home`},{title:`价格页`,key:`site-pricing`}]},{title:`运营链路`,key:`release-ops`,children:[{title:`投放素材`,key:`ops-assets`},{title:`归因回传`,key:`ops-attribution`}]},{title:`合规审查`,key:`release-compliance`,children:[{title:`隐私条款`,key:`compliance-privacy`},{title:`审计记录`,key:`compliance-audit`}]}]}],Ee=[{title:`权限控制`,key:`permission-disabled-root`,children:[{title:`只读目录`,key:`readonly-folder`,disabled:!0,children:[{title:`首页编排`,key:`readonly-home`},{title:`价格页`,key:`readonly-pricing`}]},{title:`可编辑目录`,key:`editable-folder`,children:[{title:`投放素材`,key:`editable-assets`},{title:`归因回传`,key:`editable-attribution`,disableCheckbox:!0}]},{title:`审计日志（仅禁用复选框）`,key:`audit-log`,disableCheckbox:!0}]}],De=[{nodeId:1,parentId:0,code:`workspace`,name:`Workspace`},{nodeId:2,parentId:1,code:`workflow`,name:`Workflow board`},{nodeId:3,parentId:1,code:`briefs`,name:`Briefs`},{nodeId:4,parentId:2,code:`review`,name:`Design review`},{nodeId:5,parentId:2,code:`release`,name:`Release checklist`},{nodeId:6,parentId:3,code:`content`,name:`Content drafts`}],Oe=[{title:`app`,key:`dir-app`,children:[{title:`pages`,key:`dir-pages`,children:[{title:`Tree.tsx`,key:`file-tree-page`},{title:`Transfer.tsx`,key:`file-transfer-page`}]},{title:`site`,key:`dir-site`,children:[{title:`SidebarPlaygroundDesign.tsx`,key:`file-sidebar`}]}]},{title:`packages`,key:`dir-packages`,children:[{title:`runtime`,key:`dir-runtime`},{title:`rue-design`,key:`dir-rue-design`}]},{title:`README.md`,key:`file-readme`}],ke=[{title:`alpha.ts`,key:`range-alpha`},{title:`beta.ts`,key:`range-beta`},{title:`gamma.ts`,key:`range-gamma`},{title:`delta.ts`,key:`range-delta`},{title:`epsilon.ts`,key:`range-epsilon`}],Ae=[{title:`src`,key:`drag-src`,kind:`folder`,children:[{title:`components`,key:`drag-components`,kind:`folder`,children:[{title:`Tree.tsx`,key:`drag-tree-file`,kind:`file`},{title:`Transfer.tsx`,key:`drag-transfer-file`,kind:`file`}]},{title:`main.ts`,key:`drag-main-file`,kind:`file`}]},{title:`docs`,key:`drag-docs`,kind:`folder`,children:[{title:`routing.md`,key:`drag-routing-file`,kind:`file`},{title:`installation.md`,key:`drag-install-file`,kind:`file`}]},{title:`package.json`,key:`drag-package-file`,kind:`file`}],je=Array.from({length:120},(e,t)=>({title:`Page ${String(t+1).padStart(3,`0`)}`,key:`virtual-${t}`})),Me=Array.from({length:64},(e,t)=>({title:`Workspace ${String(t+1).padStart(2,`0`)}`,key:`async-virtual-root-${t}`,isLeaf:!1})),Ne=`import { ref } from '@rue-js/rue'
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
</div>`,Pe=`import { ref } from '@rue-js/rue'
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
</div>`,Fe=`import { ref } from '@rue-js/rue'
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
</div>`,Ie=`import { ref } from '@rue-js/rue'
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
</div>`,Le=`import { ref } from '@rue-js/rue'
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
</div>`,Re=`import { computed, ref } from '@rue-js/rue'
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
</div>`,ze=`import { ref } from '@rue-js/rue'
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
</div>`,K=`import { ref } from '@rue-js/rue'
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
</div>`,q=`import { ref } from '@rue-js/rue'
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
</div>`,Be=`import { ref } from '@rue-js/rue'
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
</div>`,Ve=`import { computed, reactive } from '@rue-js/rue'

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
</div>`,He=[{prop:`treeData`,description:`树数据源，支持嵌套 children 和字段映射。`,type:`TreeDataNode[]`,defaultValue:`[]`},{prop:`selectedKeys / defaultSelectedKeys`,description:`受控与非受控的当前选中项，multiple 打开后允许多选。`,type:`TreeKey[]`,defaultValue:`[]`},{prop:`checkedKeys / defaultCheckedKeys`,description:`勾选模式下的选中集合，strict 模式会回传 checked / halfChecked 结构。`,type:`TreeKey[] | { checked: TreeKey[]; halfChecked: TreeKey[] }`,defaultValue:`[]`},{prop:`expandedKeys / defaultExpandedKeys / defaultExpandAll`,description:`控制展开态，适合目录树、权限树和异步加载场景。`,type:`TreeKey[] / boolean`,defaultValue:`[] / false`},{prop:`checkable / checkStrictly`,description:`切换勾选与父子联动模式；strict 会关闭级联。`,type:`boolean`,defaultValue:`false`},{prop:`treeDataSimpleMode / fieldNames`,description:`直接接入 id / pId 扁平数据，同时可映射 title、key、children 字段。`,type:`boolean | TreeSimpleModeConfig / TreeFieldNames`,defaultValue:`- / -`},{prop:`allowSearch / searchValue / filterTreeNode`,description:`提供内置搜索输入和过滤逻辑，命中后会保留祖先链路。`,type:`boolean / string / boolean | ((inputValue, node) => boolean)`,defaultValue:`false / - / true`},{prop:`loadData`,description:`展开未加载分支时触发异步加载，适合远端目录与超大树。`,type:`(node: TreeNode) => Promise<any> | void`,defaultValue:`-`},{prop:`Tree.DirectoryTree / expandAction / toggleSelect / rangeSelect`,description:`目录树快捷 API；除了展开动作，还能细化 ctrl/meta 追加选择和 shift 区间选择是 append 还是 replace。`,type:`DirectoryTreeProps / false | "click" | "doubleClick" / boolean / false | "append" | "replace"`,defaultValue:`blockNode=true / showIcon=true / "click" / true / "append"`},{prop:`draggable / allowDrop / onDrop`,description:`开启拖拽排序并控制是否允许落点；allowDrop 和 onDrop 都会拿到 dropToGap，UI 会同步显示插前、插后或放入占位态。`,type:`TreeDraggable / (info) => boolean / (info) => void`,defaultValue:`false / - / -`},{prop:`height / itemHeight / virtual`,description:`为长列表开启虚拟滚动；height 定义视口高度，itemHeight 用于估算渲染窗口，也能和 loadData 组合接超长懒加载树。`,type:`number / number / boolean`,defaultValue:`- / 自动按尺寸估算 / true`},{prop:`showLine / showIcon / blockNode`,description:`控制树线、节点图标和整行可点的布局表现。`,type:`boolean`,defaultValue:`false`},{prop:`titleRender / switcherIcon / icon`,description:`按节点态自定义标题、展开图标和节点图标。`,type:`render function | any`,defaultValue:`-`}],Ue=e=>Array.isArray(e)?e:e.checked,We=(e,t)=>Array.isArray(e)?t?.halfCheckedKeys??[]:e.halfChecked,J=e=>`${typeof e}:${String(e)}`,Y=e=>e.map(e=>({...e,children:Array.isArray(e.children)?Y(e.children):e.children})),X=(e,t)=>{let n=J(t);for(let r=0;r<e.length;r+=1){let i=e[r];if(J(i.key)===n){let[t]=e.splice(r,1);return t??null}if(Array.isArray(i.children)){let e=X(i.children,t);if(e)return e}}return null},Z=(e,t,n,r)=>{let i=J(n);for(let a=0;a<e.length;a+=1){let o=e[a];if(J(o.key)===i){if(r===0){let e=Array.isArray(o.children)?[...o.children]:[];e.push(t),o.children=e}else e.splice(r<0?a:a+1,0,t);return!0}if(Array.isArray(o.children)&&Z(o.children,t,n,r))return!0}return!1},Ge=(e,t)=>{let n=Y(e),r=X(n,t.dragNode.key);return r&&(Z(n,r,t.node.key,t.dropPosition)||n.push(r)),n},Ke=(e,t,n)=>{let r=J(t);return e.map(e=>J(e.key)===r?n(e):Array.isArray(e.children)?{...e,children:Ke(e.children,t,n)}:e)},qe=e=>e.reduce((e,t)=>!Array.isArray(t.children)||!t.children.length?e:e+1+qe(t.children),0),Je=t=>{let{isOpen:s,isFolder:c,toggle:d,addChild:m,changeType:h}=D(`useSetup:0:0`,()=>n(()=>{let e=D(`computed:1:0`,()=>p(()=>!!t.model.open)),n=D(`computed:1:1`,()=>p(()=>!!t.model.children&&t.model.children.length>0)),r=n=>{n?.stopPropagation(),t.model.open=!e.get()},i=e=>{e?.stopPropagation(),t.model.children||(t.model.children=[]),t.model.children.push({id:`${t.model.id}-new-${t.model.children.length}`,name:`new stuff`}),t.model.open=!0};return{isOpen:e,isFolder:n,toggle:r,addChild:i,changeType:e=>{e?.stopPropagation(),n.get()||(t.model.children=[],i(),t.model.open=!0)}}}));return f(n=>{let p=o(`li`,n);S(p,`list-none`);let g=o(`button`,p);i(p,g),e(g,`type`,`button`),_(()=>{S(g,String(`flex items-center gap-2 rounded-xl px-3 py-2 text-left text-sm transition `+(c.get()?`font-semibold text-base-content`:`text-base-content/80 hover:bg-base-200/70`)))}),l(g,`click`,e=>d(e)),l(g,`dblclick`,e=>h(e));let w=o(`span`,g);i(g,w),S(w,`inline-flex size-5 items-center justify-center rounded-md bg-base-200/80 text-[11px] text-base-content/55`);let E=a(w);i(w,E),_(()=>{b(E,c.get()?s.get()?`−`:`+`:`•`)});let D=o(`span`,g);i(g,D);let O=u(`rue:slot:anchor`);i(D,O),_(()=>{let e=t.model.name;T(()=>v(e,D,O))});let k=u(`rue:slot:anchor`);return i(p,k),_(()=>{let n=c.get()&&s.get()?f(()=>{let n=r(),a=o(`ul`,n);i(n,a),S(a,`mt-1 grid gap-1 pl-5`);let s=u(`rue:list:start`),c=u(`rue:list:end`);i(a,s),i(a,c);let d=new Map;_(()=>{d=ee({items:t.model.children||[],getKey:(e,t)=>e.id,elements:d,parent:a,before:c,start:s,renderItem:(e,t,n,r,i)=>{C(x(Je,{key:e.id,model:e}),t,n,r)}})});let f=o(`li`,a);i(a,f),S(f,`list-none`);let p=o(`button`,f);return i(f,p),e(p,`type`,`button`),S(p,`btn btn-ghost btn-xs rounded-full text-emerald-600`),l(p,`click`,e=>m(e)),i(p,y(`+ add child`)),n}):``;T(()=>v(n,p,k))}),p})},Ye=()=>{let{basicSelectedKeys:e,directorySelectedKeys:t,directoryExpandAction:a,directoryToggleSelect:s,directoryRangeSelect:c,directoryRangeAppendSelectedKeys:l,directoryRangeReplaceSelectedKeys:h,directoryRangeTreeVersion:g,checkableSelectedKeys:b,checkedKeys:C,halfCheckedKeys:w,disabledCheckedKeys:E,simpleSelectedKeys:ee,asyncSelectedKeys:ne,asyncExpandedKeys:j,dragTreeData:M,dragSummary:N,virtualSelectedKeys:P,asyncVirtualTreeData:F,asyncVirtualExpandedKeys:I,asyncVirtualSelectedKeys:L,asyncTreeData:R,legacyTree:re,tabs:z,loadAsyncTree:B,loadAsyncVirtualTree:ie,resetDirectoryRangeDemo:ae}=D(`useSetup:0:0:dup1`,()=>n(()=>{let e=D(`ref:1:2`,()=>d([`docs-api`])),t=D(`ref:1:3`,()=>d([`dir-app`])),n=D(`ref:1:4`,()=>d(`click`)),r=D(`ref:1:5`,()=>d(!0)),i=D(`computed:1:6`,()=>p(()=>r.value?`append`:!1)),a=D(`ref:1:7`,()=>d([])),o=D(`ref:1:8`,()=>d([])),s=D(`ref:1:9`,()=>d(0)),c=D(`ref:1:10`,()=>d([`release-control`])),l=D(`ref:1:11`,()=>d([`site-home`])),u=D(`ref:1:12`,()=>d([`release-control`,`release-site`])),f=D(`ref:1:13`,()=>d([`editable-assets`])),h=D(`ref:1:14`,()=>d([`workflow`])),g=D(`ref:1:15`,()=>d([])),_=D(`ref:1:16`,()=>d([])),v=D(`ref:1:17`,()=>d(Y(Ae))),y=D(`ref:1:18`,()=>d(`folder 支持放入；file 只允许插前和插后，悬停时会显示明确占位态。`)),b=D(`ref:1:19`,()=>d([`virtual-3`])),x=D(`ref:1:20`,()=>d(Y(Me))),S=D(`ref:1:21`,()=>d([])),C=D(`ref:1:22`,()=>d([])),w=D(`ref:1:23`,()=>d([{title:`发布总线`,key:`release-bus`,isLeaf:!1}]));return{basicSelectedKeys:e,directorySelectedKeys:t,directoryExpandAction:n,directoryToggleSelect:r,directoryRangeSelect:i,directoryRangeAppendSelectedKeys:a,directoryRangeReplaceSelectedKeys:o,directoryRangeTreeVersion:s,checkableSelectedKeys:c,checkedKeys:l,halfCheckedKeys:u,disabledCheckedKeys:f,simpleSelectedKeys:h,asyncSelectedKeys:g,asyncExpandedKeys:_,dragTreeData:v,dragSummary:y,virtualSelectedKeys:b,asyncVirtualTreeData:x,asyncVirtualExpandedKeys:S,asyncVirtualSelectedKeys:C,asyncTreeData:w,legacyTree:D(`reactive:1:24`,()=>m({id:`root`,name:`My Tree`,open:!0,children:[{id:`hello`,name:`hello`},{id:`world`,name:`world`},{id:`branch`,name:`child folder`,open:!0,children:[{id:`branch-1`,name:`design review`},{id:`branch-2`,name:`release note`}]}]})),tabs:{basic:D(`ref:1:25`,()=>d(`preview`)),directory:D(`ref:1:26`,()=>d(`preview`)),directoryRange:D(`ref:1:27`,()=>d(`preview`)),checkable:D(`ref:1:28`,()=>d(`preview`)),checkableDisabled:D(`ref:1:29`,()=>d(`preview`)),simple:D(`ref:1:30`,()=>d(`preview`)),async:D(`ref:1:31`,()=>d(`preview`)),drag:D(`ref:1:32`,()=>d(`preview`)),virtual:D(`ref:1:33`,()=>d(`preview`)),virtualAsync:D(`ref:1:34`,()=>d(`preview`)),legacy:D(`ref:1:35`,()=>d(`preview`))},loadAsyncTree:async e=>{e.key===`release-bus`&&(w.value=[{title:`发布总线`,key:`release-bus`,isLeaf:!1,children:[{title:`桌面端`,key:`desktop`,children:[{title:`Windows`,key:`desktop-win`},{title:`macOS`,key:`desktop-mac`}]},{title:`移动端`,key:`mobile`,children:[{title:`iOS`,key:`mobile-ios`},{title:`Android`,key:`mobile-android`}]}]}])},loadAsyncVirtualTree:async e=>{e.children.length||(x.value=Ke(x.value,e.key,e=>({...e,children:Array.from({length:8},(t,n)=>({title:`${String(e.title)} / Module ${n+1}`,key:`${String(e.key)}-child-${n}`,isLeaf:n%3!=0}))})))},resetDirectoryRangeDemo:()=>{a.value=[],o.value=[],s.value+=1}}}));return f(n=>{let d=r(),p=u(`rue:component:anchor`);return i(d,p),v(x(te,{children:f(()=>{let n=r(),d=o(`div`,n);i(n,d),S(d,`max-w-none prose prose-sm md:prose-base`);let f=o(`h1`,d);i(d,f),i(f,y(`Tree 树控件`));let p=o(`p`,d);i(d,p),i(p,y(`Rue 的 Tree 补上了独立树组件这块空白：保留 TreeView 示例里递归数据直改的灵活性，同时把 树控件常用的展开、选中、勾选、简单模式、异步加载和自定义标题一次补齐。 视觉上继续沿用 Rue 现有的卡片、badge 和 base 色阶体系，不照搬其他组件库的外观。`));let m=o(`div`,d);i(d,m),S(m,`not-prose mt-6 grid gap-3 md:grid-cols-3`);let D=o(`div`,m);i(m,D),S(D,`rounded-[1.4rem] border border-base-300 bg-gradient-to-br from-base-100 to-base-200/40 p-4 shadow-sm`);let te=o(`div`,D);i(D,te),S(te,`text-xs uppercase tracking-[0.2em] text-base-content/45`),i(te,y(`Node Model`));let oe=o(`div`,D);i(D,oe),S(oe,`mt-2 text-base font-semibold`),i(oe,y(`选择、勾选、展开三条状态线`));let se=o(`p`,D);i(D,se),S(se,`mt-2 mb-0 text-sm text-base-content/68`),i(se,y(`目录树、权限树、发布树都能直接套进来。`));let V=o(`div`,m);i(m,V),S(V,`rounded-[1.4rem] border border-base-300 bg-gradient-to-br from-base-100 to-base-200/40 p-4 shadow-sm`);let ce=o(`div`,V);i(V,ce),S(ce,`text-xs uppercase tracking-[0.2em] text-base-content/45`),i(ce,y(`DirectoryTree`));let le=o(`div`,V);i(V,le),S(le,`mt-2 text-base font-semibold`),i(le,y(`目录树快捷 API`));let ue=o(`p`,V);i(V,ue),S(ue,`mt-2 mb-0 text-sm text-base-content/68`),i(ue,y(`支持 click / doubleClick 展开，以及更接近文件浏览器的多选交互。`));let H=o(`div`,m);i(m,H),S(H,`rounded-[1.4rem] border border-base-300 bg-gradient-to-br from-base-100 to-base-200/40 p-4 shadow-sm`);let de=o(`div`,H);i(H,de),S(de,`text-xs uppercase tracking-[0.2em] text-base-content/45`),i(de,y(`Heavy Interaction`));let fe=o(`div`,H);i(H,fe),S(fe,`mt-2 text-base font-semibold`),i(fe,y(`拖拽排序与虚拟滚动`));let pe=o(`p`,H);i(H,pe),S(pe,`mt-2 mb-0 text-sm text-base-content/68`),i(pe,y(`长列表和拖拽改序终于能落在同一个 Tree 上了。`));let me=u(`rue:component:anchor`);i(d,me),_(()=>{let t=x(A,{title:`基础选中与整行交互`,summary:`默认 Tree 就是一个纯浏览 + 选中容器；blockNode 和 showIcon 让它更像配置面板里的主导航。`,tab:z.basic,code:Ne,preview:O(`div`,{className:`space-y-4 not-prose`,children:[k(G,{treeData:we,selectedKeys:e.value,defaultExpandAll:!0,showIcon:!0,blockNode:!0,onSelect:t=>{e.value=t}}),O(`div`,{className:`grid gap-3 md:grid-cols-3`,children:[O(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[k(`div`,{className:`text-xs text-base-content/45`,children:`当前选中`}),k(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:e.value.length?e.value.map(e=>k(`span`,{className:`badge badge-outline badge-sm`,children:String(e)},String(e))):k(`span`,{className:`text-sm text-base-content/55`,children:`未选择`})})]}),O(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[k(`div`,{className:`text-xs text-base-content/45`,children:`推荐场景`}),k(`div`,{className:`mt-2 text-sm text-base-content/75`,children:`组件目录、文档导航、资源分类`})]}),O(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[k(`div`,{className:`text-xs text-base-content/45`,children:`状态模型`}),k(`div`,{className:`mt-2 text-sm text-base-content/75`,children:`selectedKeys / expandedKeys 分离，便于受控更新。`})]})]})]})});T(()=>v(t,d,me))});let he=u(`rue:component:anchor`);i(d,he),_(()=>{let e=x(A,{title:`DirectoryTree 目录树快捷 API`,summary:`Tree.DirectoryTree 默认补上目录图标、整行可点和 click 展开；这里先只看 expandAction 和 toggleSelect 这两个基础交互开关。`,tab:z.directory,code:Re,preview:O(`div`,{className:`grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`,children:[k(G.DirectoryTree,{treeData:Oe,selectedKeys:t.value,multiple:!0,expandAction:a.value,toggleSelect:s.value,rangeSelect:c.get(),onSelect:e=>{t.value=e}}),O(`div`,{className:`space-y-3`,children:[O(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[k(`div`,{className:`text-xs text-base-content/45`,children:`快捷属性`}),O(`div`,{className:`mt-3 flex flex-wrap gap-2`,children:[k(`button`,{type:`button`,className:a.value===`click`?`btn btn-primary btn-xs`:`btn btn-ghost btn-xs`,onClick:()=>{a.value=`click`},children:`click 展开`}),k(`button`,{type:`button`,className:a.value===`doubleClick`?`btn btn-primary btn-xs`:`btn btn-ghost btn-xs`,onClick:()=>{a.value=`doubleClick`},children:`doubleClick 展开`}),k(`button`,{type:`button`,className:a.value===!1?`btn btn-primary btn-xs`:`btn btn-ghost btn-xs`,onClick:()=>{a.value=!1},children:`只选中不展开`})]}),O(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:[k(`button`,{type:`button`,className:s.value?`btn btn-primary btn-xs`:`btn btn-ghost btn-xs`,onClick:()=>{s.value=!0},children:`ctrl/meta 追加`}),k(`button`,{type:`button`,className:s.value?`btn btn-ghost btn-xs`:`btn btn-primary btn-xs`,onClick:()=>{s.value=!1},children:`关闭追加选择`})]})]}),O(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[k(`div`,{className:`text-xs text-base-content/45`,children:`当前选择`}),k(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:t.value.map(e=>k(`span`,{className:`badge badge-outline badge-sm`,children:String(e)},String(e)))})]}),O(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`,children:[`当前组合是 expandAction=`,k(`strong`,{children:String(a.value)}),`、toggleSelect=`,k(`strong`,{children:String(s.value)}),`、rangeSelect=`,k(`strong`,{children:String(c.get())}),`。`,k(`div`,{className:`mt-3`,children:`普通点击会落成单选；打开追加后，meta / ctrl 会追加或移除选中，shift 也会启用区间选择。关闭追加时，这两类补充选择都会停用；append / replace 的差异放到下面的对照示例里单独演示。`})]})]})]})});T(()=>v(e,d,he))});let ge=u(`rue:component:anchor`);i(d,ge),_(()=>{let e=x(A,{title:`shift append vs shift replace`,summary:`这两个模式只有在“先做一次非连续多选，再用 shift 选区间”时才会分出差异；左边保留旧选择，右边只保留新区间。`,tab:z.directoryRange,code:ze,preview:O(`div`,{className:`space-y-4 not-prose`,children:[O(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`,children:[k(`div`,{children:`操作顺序：先单击 beta.ts，再按住 Cmd / Ctrl 单击 epsilon.ts，最后按住 Shift 单击 delta.ts。`}),k(`div`,{className:`mt-2`,children:`append 会保留 beta.ts；replace 只保留 delta.ts 到 epsilon.ts 这一段。`}),k(`button`,{type:`button`,className:`btn btn-ghost btn-xs mt-3`,onClick:ae,children:`重置两边示例`})]}),O(`div`,{className:`grid gap-4 xl:grid-cols-2`,children:[O(`div`,{className:`space-y-3 rounded-[1.4rem] border border-base-300 bg-base-100 p-4 shadow-sm`,children:[O(`div`,{className:`flex items-center justify-between gap-3`,children:[O(`div`,{children:[k(`div`,{className:`text-sm font-semibold`,children:`rangeSelect="append"`}),k(`div`,{className:`text-xs text-base-content/55`,children:`保留原先的非连续选择，再并入新的 shift 区间。`})]}),k(`span`,{className:`badge badge-outline badge-sm`,children:`append`})]}),k(G.DirectoryTree,{treeData:ke,selectedKeys:l.value,multiple:!0,toggleSelect:!0,rangeSelect:`append`,onSelect:e=>{l.value=e}},`append-${g.value}`),O(`div`,{className:`rounded-box border border-base-300 bg-base-100 px-4 py-3 text-sm text-base-content/70`,children:[k(`div`,{className:`text-xs text-base-content/45`,children:`当前选择`}),k(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:l.value.length?l.value.map(e=>k(`span`,{className:`badge badge-outline badge-sm`,children:String(e)},String(e))):k(`span`,{className:`text-sm text-base-content/55`,children:`还没有选择`})})]})]}),O(`div`,{className:`space-y-3 rounded-[1.4rem] border border-base-300 bg-base-100 p-4 shadow-sm`,children:[O(`div`,{className:`flex items-center justify-between gap-3`,children:[O(`div`,{children:[k(`div`,{className:`text-sm font-semibold`,children:`rangeSelect="replace"`}),k(`div`,{className:`text-xs text-base-content/55`,children:`只保留新的 shift 区间，旧的非连续选择会被替换掉。`})]}),k(`span`,{className:`badge badge-primary badge-outline badge-sm`,children:`replace`})]}),k(G.DirectoryTree,{treeData:ke,selectedKeys:h.value,multiple:!0,toggleSelect:!0,rangeSelect:`replace`,onSelect:e=>{h.value=e}},`replace-${g.value}`),O(`div`,{className:`rounded-box border border-base-300 bg-base-100 px-4 py-3 text-sm text-base-content/70`,children:[k(`div`,{className:`text-xs text-base-content/45`,children:`当前选择`}),k(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:h.value.length?h.value.map(e=>k(`span`,{className:`badge badge-outline badge-sm`,children:String(e)},String(e))):k(`span`,{className:`text-sm text-base-content/55`,children:`还没有选择`})})]})]})]})]})});T(()=>v(e,d,ge))});let _e=u(`rue:component:anchor`);i(d,_e),_(()=>{let e=x(A,{title:`父子联动与半选态`,summary:`这一块只看级联勾选和 halfChecked，不再混入 disabled / disableCheckbox，点击父节点时能直接看到整棵子树联动。`,tab:z.checkable,code:Pe,preview:O(`div`,{className:`space-y-4 not-prose`,children:[k(G,{treeData:Te,selectedKeys:b.value,checkedKeys:C.value,checkable:!0,defaultExpandAll:!0,showLine:!0,blockNode:!0,onSelect:e=>{b.value=e},onCheck:(e,t)=>{C.value=Ue(e),w.value=We(e,t)}}),O(`div`,{className:`grid gap-3 md:grid-cols-3`,children:[O(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[k(`div`,{className:`text-xs text-base-content/45`,children:`selectedKeys`}),k(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:b.value.length?b.value.map(e=>k(`span`,{className:`badge badge-outline badge-sm`,children:String(e)},String(e))):k(`span`,{className:`text-sm text-base-content/55`,children:`当前没有选中节点`})})]}),O(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[k(`div`,{className:`text-xs text-base-content/45`,children:`checkedKeys`}),k(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:C.value.map(e=>k(`span`,{className:`badge badge-primary badge-outline badge-sm`,children:String(e)},String(e)))})]}),O(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[k(`div`,{className:`text-xs text-base-content/45`,children:`halfCheckedKeys`}),k(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:w.value.length?w.value.map(e=>k(`span`,{className:`badge badge-ghost badge-sm`,children:String(e)},String(e))):k(`span`,{className:`text-sm text-base-content/55`,children:`当前没有半选`})})]})]})]})});T(()=>v(e,d,_e))});let ve=u(`rue:component:anchor`);i(d,ve),_(()=>{let e=x(A,{title:`禁用节点与禁用复选框`,summary:`把 disabled 和 disableCheckbox 单独拆出来看：前者整节点只读，后者只禁用勾选框，不再干扰联动示例。`,tab:z.checkableDisabled,code:Fe,preview:O(`div`,{className:`grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`,children:[k(G,{treeData:Ee,checkedKeys:E.value,checkable:!0,defaultExpandAll:!0,showLine:!0,blockNode:!0,onCheck:e=>{E.value=Ue(e)}}),O(`div`,{className:`space-y-3`,children:[O(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[k(`div`,{className:`text-xs text-base-content/45`,children:`当前勾选`}),k(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:E.value.length?E.value.map(e=>k(`span`,{className:`badge badge-outline badge-sm`,children:String(e)},String(e))):k(`span`,{className:`text-sm text-base-content/55`,children:`当前没有勾选`})})]}),O(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm text-sm text-base-content/75`,children:[k(`div`,{className:`font-medium text-base-content`,children:`disabled`}),k(`div`,{className:`mt-2`,children:`整节点不可展开、不可选中、不可勾选，适合只读目录或冻结配置。`})]}),O(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm text-sm text-base-content/75`,children:[k(`div`,{className:`font-medium text-base-content`,children:`disableCheckbox`}),k(`div`,{className:`mt-2`,children:`节点仍能展示和展开，但复选框不会参与交互，适合“只可浏览不可授权”的条目。`})]})]})]})});T(()=>v(e,d,ve))});let ye=u(`rue:component:anchor`);i(d,ye),_(()=>{let e=x(A,{title:`Simple Mode + Search`,summary:`扁平数据直入后，内置搜索会保留命中节点的祖先链，不会把层级上下文切断。`,tab:z.simple,code:Ie,preview:O(`div`,{className:`grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`,children:[k(G,{treeData:De,treeDataSimpleMode:{id:`nodeId`,pId:`parentId`,rootPId:0},fieldNames:{title:`name`,key:`code`},selectedKeys:ee.value,allowSearch:!0,defaultExpandAll:!0,onSelect:e=>{ee.value=e}}),O(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`,children:[`当前选中：`,k(`code`,{children:JSON.stringify(ee.value)}),k(`div`,{className:`mt-3`,children:`这类 simple mode 很适合后端直接给 id / pId 的菜单、流程节点和权限项，不需要再先做一遍树转换。`})]})]})});T(()=>v(e,d,ye))});let be=u(`rue:component:anchor`);i(d,be),_(()=>{let e=x(A,{title:`Async Load 与自定义标题`,summary:`第一次展开时再拉子节点，同时用 titleRender 和 icon 把状态信息塞回每一行。`,tab:z.async,code:Le,preview:O(`div`,{className:`grid gap-4 not-prose lg:grid-cols-[minmax(0,26rem),1fr] lg:items-start`,children:[k(G,{treeData:R.value,selectedKeys:ne.value,expandedKeys:j.value,loadData:B,showLine:!0,showIcon:!0,blockNode:!0,titleRender:({node:e,loading:t})=>O(`div`,{className:`flex min-w-0 items-center justify-between gap-3`,children:[k(`span`,{className:`truncate`,children:e.title}),k(`span`,{className:`badge badge-ghost badge-xs`,children:t?`loading`:e.children.length?`branch`:`leaf`})]}),onSelect:e=>{ne.value=e},onExpand:e=>{j.value=e}}),O(`div`,{className:`space-y-3`,children:[O(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[k(`div`,{className:`text-xs text-base-content/45`,children:`expandedKeys`}),k(`div`,{className:`mt-2 text-sm text-base-content/75`,children:JSON.stringify(j.value)})]}),O(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[k(`div`,{className:`text-xs text-base-content/45`,children:`selectedKeys`}),k(`div`,{className:`mt-2 text-sm text-base-content/75`,children:JSON.stringify(ne.value)})]}),k(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`,children:`展开 release-bus 后才会注入桌面端和移动端节点，适合远端目录、超大权限树和发布范围配置。`})]})]})});T(()=>v(e,d,be))});let U=o(`div`,d);i(d,U),S(U,`not-prose mt-10 space-y-2`);let xe=o(`h2`,U);i(U,xe),S(xe,`text-2xl font-semibold`),i(xe,y(`更重交互`));let W=o(`p`,U);i(U,W),S(W,`text-sm text-base-content/70`),i(W,y(`当 Tree 既要承载拖拽整理，又要承载超长数据时，draggable 和 virtual 就是两个最关键的控制面。`));let Se=u(`rue:component:anchor`);i(d,Se),_(()=>{let e=x(A,{title:`allowDrop 策略与拖拽占位`,summary:`allowDrop 可以把 folder / file 的落点规则写清楚；hover 时 Tree 会直接给出插前、插后或放入占位提示。`,tab:z.drag,code:K,preview:O(`div`,{className:`grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`,children:[k(G,{treeData:M.value,draggable:!0,blockNode:!0,defaultExpandAll:!0,allowDrop:({dropNode:e,dropToGap:t})=>t||e.raw.kind!==`file`,titleRender:({node:e})=>O(`div`,{className:`flex min-w-0 items-center justify-between gap-3`,children:[k(`span`,{className:`truncate`,children:e.title}),k(`span`,{className:e.raw.kind===`folder`?`badge badge-ghost badge-xs`:`badge badge-outline badge-xs`,children:e.raw.kind})]}),onDrop:e=>{M.value=Ge(M.value,e),N.value=`${String(e.dragNode.key)} -> ${String(e.node.key)} (${e.dropToGap?e.dropPosition<0?`before`:`after`:`inside`})`}}),O(`div`,{className:`space-y-3`,children:[O(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[k(`div`,{className:`text-xs text-base-content/45`,children:`最近一次拖拽`}),k(`div`,{className:`mt-2 text-sm text-base-content/75`,children:N.value})]}),O(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[k(`div`,{className:`text-xs text-base-content/45`,children:`allowDrop 规则`}),O(`div`,{className:`mt-2 grid gap-2 text-sm text-base-content/75`,children:[k(`div`,{children:`folder：允许放入，也允许插前 / 插后。`}),k(`div`,{children:`file：只允许插前 / 插后，不允许作为 inside 目标。`})]})]}),k(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`,children:`拖到 folder 正中央会看到“放入”，拖到行的上沿或下沿则会出现“插前 / 插后”；如果目标是 file，inside 落点会被 allowDrop 直接拦掉。`})]})]})});T(()=>v(e,d,Se))});let Ae=u(`rue:component:anchor`);i(d,Ae),_(()=>{let e=x(A,{title:`Virtual Scroll`,summary:`长列表下只渲染可见窗口，height 和 itemHeight 负责限定视口和估算切片范围。`,tab:z.virtual,code:q,preview:O(`div`,{className:`grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`,children:[k(G,{treeData:je,selectedKeys:P.value,height:320,itemHeight:42,virtual:!0,blockNode:!0,onSelect:e=>{P.value=e}}),O(`div`,{className:`space-y-3`,children:[O(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[k(`div`,{className:`text-xs text-base-content/45`,children:`数据量`}),k(`div`,{className:`mt-2 text-2xl font-semibold`,children:je.length})]}),O(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[k(`div`,{className:`text-xs text-base-content/45`,children:`当前选中`}),k(`div`,{className:`mt-2 text-sm text-base-content/75`,children:JSON.stringify(P.value)})]}),k(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`,children:`对文档页目录、埋点树、批量资源目录这种长列表场景，虚拟滚动能显著降低初始渲染压力。`})]})]})});T(()=>v(e,d,Ae))});let Me=u(`rue:component:anchor`);i(d,Me),_(()=>{let e=x(A,{title:`Virtual + Async Load 场景页`,summary:`把 virtual、height、itemHeight 和 loadData 合在一起，就能接超长目录或资源树，只在展开分支时再注入子节点。`,tab:z.virtualAsync,code:Be,preview:O(`div`,{className:`grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`,children:[k(G,{treeData:F.value,selectedKeys:L.value,expandedKeys:I.value,height:340,itemHeight:40,virtual:!0,showIcon:!0,blockNode:!0,loadData:ie,titleRender:({node:e,loading:t})=>O(`div`,{className:`flex min-w-0 items-center justify-between gap-3`,children:[k(`span`,{className:`truncate`,children:e.title}),k(`span`,{className:`badge badge-ghost badge-xs`,children:t?`loading`:e.children.length?`loaded`:e.isLeaf?`leaf`:`lazy`})]}),onSelect:e=>{L.value=e},onExpand:e=>{I.value=e}}),O(`div`,{className:`space-y-3`,children:[O(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[k(`div`,{className:`text-xs text-base-content/45`,children:`根节点数量`}),k(`div`,{className:`mt-2 text-2xl font-semibold`,children:F.value.length})]}),O(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[k(`div`,{className:`text-xs text-base-content/45`,children:`已加载分支`}),k(`div`,{className:`mt-2 text-2xl font-semibold`,children:qe(F.value)})]}),O(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[k(`div`,{className:`text-xs text-base-content/45`,children:`当前展开`}),k(`div`,{className:`mt-2 text-sm text-base-content/75`,children:JSON.stringify(I.value)})]}),k(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`,children:`先滚动到较深位置再展开节点也没问题：视口外的行不会真正渲染，只有命中的 branch 才会触发 loadData 注入子节点。`})]})]})});T(()=>v(e,d,Me))});let J=u(`rue:component:anchor`);i(d,J),_(()=>{let e=x(A,{title:`保留原始递归 Demo`,summary:`旧的 TreeView 行为没有删掉，只是并进 design 页面里，方便对比“直接改数据”这类递归写法。`,tab:z.legacy,code:Ve,preview:k(`div`,{className:`card border border-base-200/80 bg-base-100 shadow-sm not-prose`,children:O(`div`,{className:`card-body grid gap-4 lg:grid-cols-[minmax(0,1fr),18rem] lg:items-start`,children:[k(`ul`,{className:`m-0 grid gap-1 p-0`,children:k(Je,{model:re})}),k(`div`,{className:`rounded-box border border-base-300 bg-base-200/40 p-4 text-sm text-base-content/70`,children:`单击切换展开，双击叶子节点会把它转换成 folder，并在当前层直接追加一个新子节点。`})]})})});T(()=>v(e,d,J))});let Y=o(`div`,d);i(d,Y),S(Y,`not-prose mt-10 space-y-4`);let X=o(`h2`,Y);i(Y,X),S(X,`text-2xl font-semibold`),i(X,y(`API`));let Z=u(`rue:component:anchor`);return i(Y,Z),_(()=>{let e=x(Ce,{rows:He});T(()=>v(e,Y,Z))}),n})}),d,p),d})};export{Ye as default};