import{$ as e,Ct as t,Gt as n,J as r,Jt as i,Kt as a,Lt as o,M as s,O as c,Q as l,Vt as u,Y as d,Yt as f,Z as p,c as m,ct as h,et as g,gt as _,jt as v,l as y,m as b,mt as x,ot as S,s as C,t as w,tt as ee}from"./vapor-runtime-DHPuOjqh.js";import{a as T,n as E}from"./vapor-helpers-vapor-CJFAWine.js";import{a as D,i as O}from"./persistentSidebarPlayground-C_0jw6dq.js";import{n as k}from"./SidebarPlaygroundDesign-DMSFSCs3.js";import{t as A}from"./PreviewBlock-BYaG1RFO.js";var j={title:`title`,key:`key`,children:`children`,disabled:`disabled`,selectable:`selectable`,checkable:`checkable`,disableCheckbox:`disableCheckbox`,isLeaf:`isLeaf`,icon:`icon`,className:`className`,id:`id`,pId:`pId`},te=(...e)=>e.filter(Boolean).join(` `),M=e=>typeof e==`object`&&!!e&&!Array.isArray(e),N=e=>typeof e==`string`||typeof e==`number`,P=e=>`${typeof e}:${String(e)}`,F=e=>{let t=[],n=new Set;return(e??[]).forEach(e=>{let r=P(e);n.has(r)||(n.add(r),t.push(e))}),t},I=(e,t)=>e?t?`${e} ${t}`:e:t??``,ne=()=>O(`span`,{className:`loading loading-spinner loading-xs`,"aria-hidden":`true`}),re=({expanded:e,hidden:t})=>O(`svg`,{viewBox:`0 0 16 16`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,className:I(`size-4 transition-transform duration-200`,t?`opacity-0`:e?`rotate-90`:``),"aria-hidden":`true`,children:O(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`m6 3.5 4 4.5-4 4.5`})}),ie=()=>O(`svg`,{viewBox:`0 0 16 16`,fill:`currentColor`,className:`size-4`,"aria-hidden":`true`,children:O(`path`,{d:`M5 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM11 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM11 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM5 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM11 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z`})}),ae=({expanded:e})=>O(`svg`,{viewBox:`0 0 16 16`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,className:`size-4`,"aria-hidden":`true`,children:O(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:e?`M2.5 6.5h11l-1.2 6h-9.1l-1.2-6ZM2.5 5V3.5h4l1.2 1.5h5.8v1.5`:`M2.5 4.5h4l1.2 1.5h5.8v6.5h-11v-8Z`})}),L=()=>D(`svg`,{viewBox:`0 0 16 16`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,className:`size-4`,"aria-hidden":`true`,children:[O(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M4 2.5h5l3 3v8H4v-11Z`}),O(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M9 2.5v3h3`})]}),R=(e,t,n)=>e[n?.[t]??j[t]],oe=(e,t)=>R(e,`title`,t)??e.title??e.key,z=e=>new Set(F(e).map(P)),B=e=>e==null||typeof e==`boolean`?``:typeof e==`string`||typeof e==`number`?String(e):Array.isArray(e)?e.map(e=>B(e)).filter(Boolean).join(` `):typeof e==`object`?[`title`,`label`,`name`,`text`,`description`,`children`].map(t=>B(e[t])).filter(Boolean).join(` `):``,se=(e,t,n)=>{if(!t)return e;let r=M(t)?t:void 0,i=r?.id??n?.id??j.id,a=r?.pId??n?.pId??j.pId,o=r?.rootPId??0,s=n?.children??j.children,c=new Map;e.forEach((e,t)=>{let n=e[i]??e.key??t;c.set(n,{...e,[s]:[]})});let l=[];return e.forEach((e,t)=>{let n=e[i]??e.key??t,r=e[a],u=c.get(n);if(!u)return;if(r==null||r===o||!c.has(r)){l.push(u);return}let d=c.get(r);if(!d){l.push(u);return}let f=d[s]??[];f.push(u),d[s]=f}),l},V=(e,t)=>{let n=[],r={},i=(e,a,o,s)=>{let c=R(e,`key`,t),l=N(c)?c:o,u=P(l),d=R(e,`isLeaf`,t),f={key:l,keyText:u,title:oe(e,t),depth:a,children:[],raw:e,disabled:!!R(e,`disabled`,t),selectable:R(e,`selectable`,t)!==!1,checkable:R(e,`checkable`,t)!==!1,disableCheckbox:!!R(e,`disableCheckbox`,t),isLeaf:!1,className:R(e,`className`,t),icon:R(e,`icon`,t),parentKeyText:s};n.push(f),r[u]=f;let p=R(e,`children`,t);return f.children=Array.isArray(p)?p.map((e,t)=>i(e,a+1,`${o}-${t}`,u)):[],f.isLeaf=d===!0?!0:d===!1?!1:f.children.length===0,f};return{roots:e.map((e,t)=>i(e,0,`node-${t}`)),flat:n,byKeyText:r}},ce=e=>{let t=[],n=e=>{!e.disabled&&e.checkable&&!e.disableCheckbox&&t.push(e.keyText),e.children.forEach(e=>n(e))};return n(e),t},le=e=>{let t=[],n=e=>{t.push(e.key),e.children.forEach(e=>n(e))};return n(e),t},ue=(e,t,n)=>{let r=new Set,i=new Set,a={},o=e=>{let s=!e.disabled&&e.checkable&&!e.disableCheckbox,c=e.children.map(e=>o(e)).filter(e=>e.participates),l=t.has(e.keyText),u=l,d=!1;if(!n&&c.length>0){let e=c.every(e=>e.checked),t=c.some(e=>e.checked||e.halfChecked);u=l||e,d=!u&&t}let f={checked:u,halfChecked:d,participates:s||c.length>0};return a[e.keyText]=f,u&&s&&r.add(e.keyText),d&&s&&i.add(e.keyText),f};return e.forEach(e=>o(e)),{checkedKeys:r,halfCheckedKeys:i,stateMap:a}},H=(e,t,n,r)=>{let i=new Set(e),a=new Set(t),o=n.filter(e=>i.has(e.keyText)).map(e=>e.key).filter(N);return r?{checked:o,halfChecked:n.filter(e=>a.has(e.keyText)).map(e=>e.key).filter(N)}:o},de=(e,t,n,r)=>{if(!n){let n=[],r=e=>{n.push({node:e,matched:!1}),t.has(e.keyText)&&e.children.forEach(e=>r(e))};return e.forEach(e=>r(e)),n}let i=e=>{let t=r(e),n=e.children.flatMap(e=>i(e));if(!t&&n.length===0)return[];if(t){let t=[{node:e,matched:!0}],n=e=>{t.push({node:e,matched:!1}),e.children.forEach(e=>n(e))};return e.children.forEach(e=>n(e)),t}return[{node:e,matched:!1},...n]};return e.flatMap(e=>i(e))},fe=(e,t,n)=>t?typeof n==`function`?n(t,e):n===!1?!0:B(e.title).toLowerCase().includes(t.toLowerCase()):!0,pe=(e,t,n)=>{let r=t.parentKeyText;for(;r;){if(r===e.keyText)return!0;r=n[r]?.parentKeyText}return!1},me=e=>{let t=!!e,n=M(e)?e:void 0;return{enabled:t,icon:n?.icon,nodeDraggable:r=>t?typeof e==`function`?e(r):n&&typeof n.nodeDraggable==`function`?n.nodeDraggable(r):!0:!1}},he=(e,t,n,r,i)=>{if(!i||!n||!r)return{items:e,topSpacer:0,bottomSpacer:0};let a=r+4,o=Math.max(1,Math.ceil(n/a))+12,s=Math.max(0,e.length-o),c=Math.min(s,Math.max(0,Math.floor(t/a)-6)),l=Math.min(e.length,c+o);return{items:e.slice(c,l),topSpacer:c*a,bottomSpacer:Math.max(0,(e.length-l)*a)}},ge=e=>{if(e===-1)return`before`;if(e===1)return`after`;if(e===0)return`inside`},_e=(e,t)=>e.map(e=>t[e]?.key).filter(N),ve=(e,t)=>{if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0},ye=e=>{switch(e){case`small`:case`sm`:return{headerPadding:`px-4 py-3`,bodyPadding:`px-3 py-3`,rowPadding:`py-1.5`,textClass:`text-sm`,rowMinHeight:36,rowEstimate:42};case`large`:case`lg`:return{headerPadding:`px-5 py-4`,bodyPadding:`px-4 py-4`,rowPadding:`py-2.5`,textClass:`text-[0.95rem]`,rowMinHeight:44,rowEstimate:50};default:return{headerPadding:`px-4 py-3.5`,bodyPadding:`px-3.5 py-3.5`,rowPadding:`py-2`,textClass:`text-sm`,rowMinHeight:40,rowEstimate:46}}},be=e=>{switch(e){case`error`:return`border-error/55 shadow-[0_0_0_1px_rgba(248,113,113,0.14)]`;case`warning`:return`border-warning/55 shadow-[0_0_0_1px_rgba(251,191,36,0.14)]`;default:return``}},U=({className:e,style:t,treeData:r=[],fieldNames:a,treeDataSimpleMode:l,selectedKeys:u,defaultSelectedKeys:d,checkedKeys:f,defaultCheckedKeys:p,expandedKeys:m,defaultExpandedKeys:h,defaultExpandAll:g,multiple:_,checkable:y,checkStrictly:x,showLine:S,showIcon:C,blockNode:w,selectable:ee=!0,disabled:T,size:E,status:k,draggable:A,allowDrop:j,virtual:M=!0,height:R,itemHeight:oe,titleRender:B,switcherIcon:U,icon:W,filterTreeNode:G,searchValue:xe,defaultSearchValue:Se,searchPlaceholder:Ce=`搜索节点`,allowSearch:we,loadData:Te,emptyText:Ee=`暂无节点`,onSelect:De,onCheck:Oe,onExpand:ke,onSearch:Ae,onDoubleClick:je,onDragStart:Me,onDragEnter:Ne,onDragOver:Pe,onDragLeave:Fe,onDragEnd:Ie,onDrop:Le,onScroll:Re,classNames:K,styles:ze,directoryMode:Be,expandAction:Ve=!1,toggleSelect:He=!0,rangeSelect:Ue=`append`,...q})=>{let J=V(se(r,l,a),a),Y=n();Y.current=J;let X=ye(E),Z=me(A),We=g?J.flat.filter(e=>e.children.length>0||!e.isLeaf).map(e=>e.key):h??[],Ge=o(0),Ke=o(F(d??u)),qe=o(F(p)),Je=o(F(We)),Ye=o(F(u)),Xe=o(F(m)),Ze=o(f===void 0?new Set:z(Array.isArray(f)?f:f.checked)),Qe=o(Se??``),$e=o([]),et=o(0),tt=o(null),nt=o([]),rt=n(),Q=o({}),it=o({});if(f!==void 0){let e=z(Array.isArray(f)?f:f.checked);ve(Ze.value,e)||(Ze.value=e)}u!==void 0&&!ve(z(Ye.value),z(u))&&(Ye.value=F(u)),m!==void 0&&!ve(z(Xe.value),z(m))&&(Xe.value=F(m));let at=oe??X.rowEstimate,ot=typeof R==`number`&&R>0?R:void 0,st=M!==!1&&ot&&typeof oe==`number`&&oe>0?oe:void 0;function $(){Ge.value+=1,Ht()}function ct(){let e=V(se(r,l,a),a);return Y.current=e,e}function lt(){return Y.current??ct()}function ut(){return u===void 0?Ke.value:Ye.value}function dt(){return m===void 0?Je.value:Xe.value}function ft(){return xe===void 0?Qe.value:xe}function pt(){return f===void 0?z(qe.value):Ze.value}function mt(){let e=ct(),t=z(dt()),n=ft();return de(e.roots,t,n,e=>fe(e,n,G))}function ht(){Ge.value;let e=ct(),t=ft(),n=z(ut()),r=z(dt()),i=pt(),a=ue(e.roots,i,!!x),o=de(e.roots,r,t,e=>fe(e,t,G));return{searchValue:t,selectedKeyTextSet:n,expandedKeyTextSet:r,checkState:a,visibleNodes:o,virtualSlice:he(o,et.value,ot,at,M!==!1&&!!ot),dragState:Q.value}}let gt=(e,t,n)=>{let r=F(e);return m===void 0?Je.value=r:Xe.value=r,$(),ke&&ke(r,{node:t,expanded:r.some(e=>P(e)===t.keyText),nativeEvent:n}),r},_t=(e,t,n)=>{let r=lt(),i=F(e).filter(e=>r.byKeyText[P(e)]),a=i.map(e=>r.byKeyText[P(e)]).filter(Boolean);u===void 0?Ke.value=i:Ye.value=i,$(),De&&De(i,{node:t,nativeEvent:n,selected:i.some(e=>P(e)===t.keyText),selectedNodes:a})},vt=(e,t,n)=>{let r=lt(),i=ue(r.roots,e,!!x),a=H(Array.from(i.checkedKeys),Array.from(i.halfCheckedKeys),r.flat,!!x);f===void 0?qe.value=x?a.checked:a:Ze.value=new Set(i.checkedKeys),$(),Oe&&Oe(a,{node:t,nativeEvent:n,checked:i.checkedKeys.has(t.keyText),checkedNodes:Array.from(i.checkedKeys).map(e=>r.byKeyText[e]).filter(Boolean),halfCheckedKeys:Array.from(i.halfCheckedKeys).map(e=>r.byKeyText[e]?.key).filter(N)})},yt=async(e,t)=>{let n=dt(),r=z(n);if(T||e.disabled)return n;let i=r.has(e.keyText),a=gt(i?n.filter(t=>P(t)!==e.keyText):[...n,e.key],e,t);if(!i&&Te&&!e.isLeaf&&e.children.length===0&&!$e.value.includes(e.keyText)){$e.value=[...$e.value,e.keyText],$();try{await Te(e),ct(),$()}finally{$e.value=$e.value.filter(t=>t!==e.keyText)}}return a},bt=(e,t)=>{t.preventDefault(),t.stopPropagation(),yt(e,t)},xt=(e,t)=>{if(T||e.disabled||!ee||!e.selectable)return;let n=ut(),r=z(n);if(Be){let i=!!_&&!!He&&!!(t?.ctrlKey||t?.metaKey),a=!!_&&Ue!==!1&&!!t?.shiftKey&&!!tt.value;if(_&&a){let r=mt().map(e=>e.node.keyText),i=tt.value??e.keyText,a=r.indexOf(i),o=r.indexOf(e.keyText),s=Math.min(a,o),c=Math.max(a,o),l=r.slice(s,c+1),u=Ue===`append`?nt.value.length?nt.value:n.map(P):[];_t(_e(Array.from(new Set([...u,...l])),lt().byKeyText),e,t);return}if(_&&i){let i=r.has(e.keyText)?n.filter(t=>P(t)!==e.keyText):[...n,e.key];tt.value=e.keyText,nt.value=i.map(P),_t(i,e,t);return}tt.value=e.keyText,nt.value=[e.keyText],_t([e.key],e,t);return}if(_){_t(r.has(e.keyText)?n.filter(t=>P(t)!==e.keyText):[...n,e.key],e,t);return}_t(r.has(e.keyText)?[]:[e.key],e,t)},St=(e,t)=>{if(t.preventDefault(),t.stopPropagation(),T||e.disabled||!e.checkable||e.disableCheckbox)return;let n=pt(),r=ue(lt().roots,n,!!x),i=new Set(n),a=r.checkedKeys.has(e.keyText);if(x)a?i.delete(e.keyText):i.add(e.keyText);else{let t=ce(e);a?t.forEach(e=>i.delete(e)):t.forEach(e=>i.add(e))}vt(i,e,t)},Ct=e=>{xe===void 0&&(Qe.value=e),$(),Ae&&Ae(e)},wt=e=>{et.value=e.currentTarget.scrollTop,$(),Re&&Re(e)},Tt=e=>{!e||Q.value.overKeyText!==e||(Q.value={dragKeyText:Q.value.dragKeyText},$())},Et=(e,t)=>{Q.value.overKeyText===e&&Q.value.dropPosition===t||(Q.value={...Q.value,overKeyText:e,dropPosition:t},$())},Dt=(e,t)=>{let n={...it.value},r=n[e]??0,i=Math.max(r+t,0);return i>0?n[e]=i:delete n[e],it.value=n,$(),i},Ot=()=>{it.value={},Q.value={},$()},kt=(e,t,n)=>{let r=lt(),i=Q.value.dragKeyText;if(!i)return null;let a=r.byKeyText[i];if(!a||a.keyText===e.keyText||pe(a,e,r.byKeyText))return null;let o=n?.getBoundingClientRect?.(),s=`clientY`in t?t.clientY:void 0,c=0;return o&&typeof s==`number`&&(s<o.top+o.height*.25?c=-1:s>o.bottom-o.height*.25&&(c=1)),j&&!j({dragNode:a,dropNode:e,dropPosition:c,dropToGap:c!==0})?null:{dragNode:a,dropPosition:c}},At=(e,t)=>{let n=me(A);!n.enabled||!n.nodeDraggable(e)||T||e.disabled||(t.dataTransfer&&(t.dataTransfer.effectAllowed=`move`,t.dataTransfer.setData(`text/plain`,e.keyText)),it.value={},Q.value={dragKeyText:e.keyText},$(),Me&&Me({event:t,node:e}))},jt=(e,t)=>{if(!Q.value.dragKeyText)return;Dt(e.keyText,1);let n=kt(e,t,t.currentTarget);if(!n){Tt(e.keyText);return}t.preventDefault(),Et(e.keyText,n.dropPosition);let r=dt(),i=z(r);n.dropPosition===0&&!i.has(e.keyText)&&(e.children.length>0||!e.isLeaf)&&(r=gt([...r,e.key],e,t)),Ne&&Ne({event:t,node:e,expandedKeys:r})},Mt=(e,t)=>{if(!Q.value.dragKeyText)return;let n=kt(e,t,t.currentTarget);if(!n){Tt(e.keyText);return}t.preventDefault(),t.dataTransfer&&(t.dataTransfer.dropEffect=`move`),Et(e.keyText,n.dropPosition),Pe&&Pe({event:t,node:e})},Nt=(e,t)=>{Dt(e.keyText,-1)===0&&Tt(e.keyText),Fe&&Fe({event:t,node:e})},Pt=(e,t)=>{Ot(),Ie&&Ie({event:t,node:e})},Ft=(e,t)=>{let n=kt(e,t,t.currentTarget);if(!n){Ot();return}t.preventDefault(),t.stopPropagation();let r=Q.value.overKeyText===e.keyText&&Q.value.dropPosition!==void 0?Q.value.dropPosition:n.dropPosition;Le&&Le({event:t,node:e,dragNode:n.dragNode,dragNodesKeys:le(n.dragNode),dropPosition:r,dropToGap:r!==0}),Ot()},It=(e,t,n,r,i,a)=>typeof U==`function`?U({node:e,expanded:t,selected:n,checked:r,halfChecked:i,loading:a}):U===void 0?a?O(ne,{}):O(re,{expanded:t,hidden:e.isLeaf&&e.children.length===0}):U,Lt=e=>!Z.enabled||Z.icon===!1||!Z.nodeDraggable(e)?null:O(`span`,{"aria-hidden":`true`,className:I(`inline-flex size-6 shrink-0 cursor-grab items-center justify-center rounded-lg text-base-content/35 transition group-hover:text-base-content/55`,K?.dragHandle),style:ze?.dragHandle,"data-rue-tree-drag-handle":`true`,children:Z.icon??O(ie,{})}),Rt=(e,t)=>D(`div`,{className:te(`pointer-events-none absolute inset-x-0 z-10 flex items-center gap-2 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-primary/85`,t===`before`?`-top-2.5`:`-bottom-2.5`),style:{paddingLeft:`${e.depth*18+20}px`},"data-rue-tree-drop-placeholder":t,children:[O(`span`,{className:`h-[2px] flex-1 rounded-full bg-primary/60`}),O(`span`,{className:`rounded-full bg-primary/10 px-2 py-1 text-[10px]`,children:`插入到此处`})]}),zt=(e,t,n,r,i,a)=>typeof W==`function`?W({node:e,expanded:t,selected:n,checked:r,halfChecked:i,loading:a}):W===void 0?e.icon===void 0?C?Be?O(`span`,{className:`inline-flex size-6 items-center justify-center text-base-content/60`,children:e.children.length>0||!e.isLeaf?O(ae,{expanded:t}):O(L,{})}):O(`span`,{className:`inline-flex size-6 items-center justify-center rounded-xl bg-base-200/80 text-[11px] text-base-content/60`,children:e.children.length>0||!e.isLeaf?`DIR`:`DOC`}):null:e.icon:W,Bt=(e,t,n)=>{t.preventDefault(),t.stopPropagation(),n===`doubleClick`&&je&&je(t,e);let r=Be&&Ve===n&&(e.children.length>0||!e.isLeaf);if(n===`click`&&r){v(()=>{yt(e,t),xt(e,t)});return}r&&yt(e,t),n===`click`&&xt(e,t)},Vt=()=>{let e=ht();return D(b,{children:[e.virtualSlice.topSpacer>0?O(`div`,{style:{height:`${e.virtualSlice.topSpacer}px`},"aria-hidden":`true`}):null,e.virtualSlice.items.map(({node:t})=>{let n=e.checkState.stateMap[t.keyText]??{checked:!1,halfChecked:!1,participates:!0},r=e.searchValue?!0:e.expandedKeyTextSet.has(t.keyText),i=e.selectedKeyTextSet.has(t.keyText),a=$e.value.includes(t.keyText),o=!!Te||t.children.length>0||!t.isLeaf,s=e.dragState.overKeyText===t.keyText,c=Z.enabled&&Z.nodeDraggable(t)&&!T&&!t.disabled,l=s?ge(e.dragState.dropPosition):void 0,u={node:t,expanded:r,selected:i,checked:n.checked,halfChecked:n.halfChecked,loading:a};return D(`div`,{className:I(te(`rue-tree-node`,S&&t.depth>0&&`border-l border-base-300/60`,t.className),K?.node),style:{paddingLeft:`${t.depth*18+8}px`,height:st?`${st}px`:void 0,minHeight:st?void 0:`${X.rowMinHeight}px`,...ze?.node},"data-rue-tree-node":t.keyText,"data-rue-tree-drop-intent":l??``,"data-rue-tree-drop-position":s?String(e.dragState.dropPosition??0):``,draggable:c,onDragStart:e=>At(t,e),onDragEnter:e=>jt(t,e),onDragOver:e=>Mt(t,e),onDragLeave:e=>Nt(t,e),onDragEnd:e=>Pt(t,e),onDrop:e=>Ft(t,e),children:[l===`before`?Rt(t,`before`):null,O(`button`,{type:`button`,disabled:!o||T||t.disabled,"aria-label":r?`折叠节点`:`展开节点`,onClick:e=>bt(t,e),children:It(t,r,i,n.checked,n.halfChecked,a)}),y?O(`button`,{type:`button`,role:`checkbox`,"aria-checked":n.halfChecked?`mixed`:n.checked?`true`:`false`,disabled:T||t.disabled||t.disableCheckbox||!t.checkable,onClick:e=>St(t,e),children:n.halfChecked?`−`:n.checked?`✓`:``}):null,Lt(t),C||t.icon!==void 0||W!==void 0?zt(t,r,i,n.checked,n.halfChecked,a):null,D(`button`,{type:`button`,className:I(te(i?`selected`:``,w?`w-full`:``),K?.label),style:ze?.label,disabled:T||t.disabled||!ee||!t.selectable,onClick:e=>Bt(t,e,`click`),onDblClick:e=>Bt(t,e,`doubleClick`),children:[B?B(u):O(`span`,{children:t.title}),l?O(`span`,{"data-rue-tree-drop-placeholder":l,children:l===`inside`?`放入`:l===`before`?`插前`:`插后`}):i?O(`span`,{children:`选中`}):null]}),l===`after`?Rt(t,`after`):null]},t.keyText)}),e.virtualSlice.bottomSpacer>0?O(`div`,{style:{height:`${e.virtualSlice.bottomSpacer}px`},"aria-hidden":`true`}):null,e.visibleNodes.length?null:O(`div`,{className:K?.empty,children:Ee})]})};function Ht(){let e=rt.current;if(!e)return;let t=(e,t)=>{let n=e=>{let t=e.cloneNode(!0);return t.removeAttribute(`style`),t.querySelectorAll(`[style]`).forEach(e=>e.removeAttribute(`style`)),t};return n(e).isEqualNode(n(t))},n=new Map(Array.from(e.querySelectorAll(`[data-rue-tree-node]`)).map(e=>[e.getAttribute(`data-rue-tree-node`)??``,e]));s(Vt(),e),e.querySelectorAll(`[data-rue-tree-node]`).forEach(e=>{let r=e.getAttribute(`data-rue-tree-node`)??``,i=n.get(r);i&&i!==e&&t(i,e)&&e.replaceWith(i)})}c(Ht),i(()=>[r,u,f,m,xe],()=>{ct(),Ht()});let Ut=ot?M===!1?{maxHeight:`${ot}px`,overflowY:`auto`}:{height:`${ot}px`,overflowY:`auto`}:{overflowY:`visible`};return D(`section`,{...q,className:I(I(I(`rue-tree rounded-box border border-base-300 bg-base-100`,be(k)),K?.root),e),style:{...ze?.root,...t},"data-rue-tree":`true`,"data-rue-tree-version":String(Ge.value),children:[we?O(`div`,{className:K?.search,style:ze?.search,children:O(`input`,{type:`text`,value:ht().searchValue,placeholder:Ce,onInput:e=>Ct(e.currentTarget.value)})}):null,O(`div`,{ref:rt,"data-rue-tree-body":`true`,style:Ut,onScroll:wt})]})},W=({className:e,showIcon:t=!0,blockNode:n=!0,expandAction:r=`click`,...i})=>O(U,{...i,className:I(`rue-directory-tree`,e),showIcon:t,blockNode:n,directoryMode:!0,expandAction:r}),G=U;G.DirectoryTree=W;var xe=t=>y(n=>{let r=e(`div`,n);h(r,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let i=e(`table`,r);d(r,i),h(i,`table table-zebra`);let a=e(`thead`,i);d(i,a);let o=e(`tr`,a);d(a,o);let s=e(`th`,o);d(o,s),d(s,g(`属性`));let c=e(`th`,o);d(o,c),d(c,g(`说明`));let m=e(`th`,o);d(o,m),d(m,g(`类型`));let _=e(`th`,o);d(o,_),d(_,g(`默认值`));let v=e(`tbody`,i);d(i,v);let b=p(`rue:list:start`),x=p(`rue:list:end`);d(v,b),d(v,x);let w=new Map;return f(()=>{w=E({items:t.rows||[],getKey:(e,t)=>e.prop,elements:w,parent:v,before:x,singleRoot:!0,trackIndex:!1,start:b,renderItem:(t,n,r,i,a)=>{C(y(()=>{let n=l(),r=e(`tr`,n);d(n,r),f(()=>{S(r,`key`,String(t.prop))});let i=e(`td`,r);d(r,i);let a=e(`code`,i);d(i,a);let o=p(`rue:slot:anchor`);d(a,o),f(()=>{let e=t.prop;u(()=>C(e,a,o))});let s=e(`td`,r);d(r,s);let c=p(`rue:slot:anchor`);d(s,c),f(()=>{let e=t.description;u(()=>C(e,s,c))});let m=e(`td`,r);d(r,m);let h=e(`code`,m);d(m,h);let g=p(`rue:slot:anchor`);d(h,g),f(()=>{let e=t.type;u(()=>C(e,h,g))});let _=e(`td`,r);d(r,_);let v=e(`code`,_);d(_,v);let y=p(`rue:slot:anchor`);return d(v,y),f(()=>{let e=t.defaultValue;u(()=>C(e,v,y))}),n}),n,r)}})}),r}),Se=[{title:`产品平台`,key:`platform`,children:[{title:`文档中心`,key:`docs-api`},{title:`组件市场`,key:`component-hub`},{title:`示例仓库`,key:`examples`}]},{title:`工程效率`,key:`engineering`,children:[{title:`构建链路`,key:`build-pipeline`},{title:`质量门禁`,key:`quality-gate`},{title:`发布管道`,key:`release-flow`}]},{title:`增长分析`,key:`growth`,children:[{title:`实验看板`,key:`experiment-board`},{title:`归因报表`,key:`attribution-report`},{title:`留存漏斗`,key:`retention-funnel`}]}],Ce=[{title:`发布总控`,key:`release-control`,children:[{title:`前台站点`,key:`release-site`,children:[{title:`首页编排`,key:`site-home`},{title:`价格页`,key:`site-pricing`}]},{title:`运营链路`,key:`release-ops`,children:[{title:`投放素材`,key:`ops-assets`},{title:`归因回传`,key:`ops-attribution`}]},{title:`合规审查`,key:`release-compliance`,children:[{title:`隐私条款`,key:`compliance-privacy`},{title:`审计记录`,key:`compliance-audit`}]}]}],we=[{title:`权限控制`,key:`permission-disabled-root`,children:[{title:`只读目录`,key:`readonly-folder`,disabled:!0,children:[{title:`首页编排`,key:`readonly-home`},{title:`价格页`,key:`readonly-pricing`}]},{title:`可编辑目录`,key:`editable-folder`,children:[{title:`投放素材`,key:`editable-assets`},{title:`归因回传`,key:`editable-attribution`,disableCheckbox:!0}]},{title:`审计日志（仅禁用复选框）`,key:`audit-log`,disableCheckbox:!0}]}],Te=[{nodeId:1,parentId:0,code:`workspace`,name:`Workspace`},{nodeId:2,parentId:1,code:`workflow`,name:`Workflow board`},{nodeId:3,parentId:1,code:`briefs`,name:`Briefs`},{nodeId:4,parentId:2,code:`review`,name:`Design review`},{nodeId:5,parentId:2,code:`release`,name:`Release checklist`},{nodeId:6,parentId:3,code:`content`,name:`Content drafts`}],Ee=[{title:`app`,key:`dir-app`,children:[{title:`pages`,key:`dir-pages`,children:[{title:`Tree.tsx`,key:`file-tree-page`},{title:`Transfer.tsx`,key:`file-transfer-page`}]},{title:`site`,key:`dir-site`,children:[{title:`SidebarPlaygroundDesign.tsx`,key:`file-sidebar`}]}]},{title:`packages`,key:`dir-packages`,children:[{title:`runtime`,key:`dir-runtime`},{title:`rue-design`,key:`dir-rue-design`}]},{title:`README.md`,key:`file-readme`}],De=[{title:`alpha.ts`,key:`range-alpha`},{title:`beta.ts`,key:`range-beta`},{title:`gamma.ts`,key:`range-gamma`},{title:`delta.ts`,key:`range-delta`},{title:`epsilon.ts`,key:`range-epsilon`}],Oe=[{title:`src`,key:`drag-src`,kind:`folder`,children:[{title:`components`,key:`drag-components`,kind:`folder`,children:[{title:`Tree.tsx`,key:`drag-tree-file`,kind:`file`},{title:`Transfer.tsx`,key:`drag-transfer-file`,kind:`file`}]},{title:`main.ts`,key:`drag-main-file`,kind:`file`}]},{title:`docs`,key:`drag-docs`,kind:`folder`,children:[{title:`routing.md`,key:`drag-routing-file`,kind:`file`},{title:`installation.md`,key:`drag-install-file`,kind:`file`}]},{title:`package.json`,key:`drag-package-file`,kind:`file`}],ke=Array.from({length:120},(e,t)=>({title:`Page ${String(t+1).padStart(3,`0`)}`,key:`virtual-${t}`})),Ae=Array.from({length:64},(e,t)=>({title:`Workspace ${String(t+1).padStart(2,`0`)}`,key:`async-virtual-root-${t}`,isLeaf:!1})),je=`import { ref } from '@rue-js/rue'
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
</div>`,Me=`import { ref } from '@rue-js/rue'
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
</div>`,Ne=`import { ref } from '@rue-js/rue'
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
</div>`,Pe=`import { ref } from '@rue-js/rue'
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
</div>`,Fe=`import { ref } from '@rue-js/rue'
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
</div>`,Ie=`import { computed, ref } from '@rue-js/rue'
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
</div>`,Le=`import { ref } from '@rue-js/rue'
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
</div>`,Re=`import { ref } from '@rue-js/rue'
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
</div>`,K=`import { ref } from '@rue-js/rue'
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
</div>`,ze=`import { ref } from '@rue-js/rue'
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
</div>`,Be=`import { computed, reactive } from '@rue-js/rue'

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
</div>`,Ve=[{prop:`treeData`,description:`树数据源，支持嵌套 children 和字段映射。`,type:`TreeDataNode[]`,defaultValue:`[]`},{prop:`selectedKeys / defaultSelectedKeys`,description:`受控与非受控的当前选中项，multiple 打开后允许多选。`,type:`TreeKey[]`,defaultValue:`[]`},{prop:`checkedKeys / defaultCheckedKeys`,description:`勾选模式下的选中集合，strict 模式会回传 checked / halfChecked 结构。`,type:`TreeKey[] | { checked: TreeKey[]; halfChecked: TreeKey[] }`,defaultValue:`[]`},{prop:`expandedKeys / defaultExpandedKeys / defaultExpandAll`,description:`控制展开态，适合目录树、权限树和异步加载场景。`,type:`TreeKey[] / boolean`,defaultValue:`[] / false`},{prop:`checkable / checkStrictly`,description:`切换勾选与父子联动模式；strict 会关闭级联。`,type:`boolean`,defaultValue:`false`},{prop:`treeDataSimpleMode / fieldNames`,description:`直接接入 id / pId 扁平数据，同时可映射 title、key、children 字段。`,type:`boolean | TreeSimpleModeConfig / TreeFieldNames`,defaultValue:`- / -`},{prop:`allowSearch / searchValue / filterTreeNode`,description:`提供内置搜索输入和过滤逻辑，命中后会保留祖先链路。`,type:`boolean / string / boolean | ((inputValue, node) => boolean)`,defaultValue:`false / - / true`},{prop:`loadData`,description:`展开未加载分支时触发异步加载，适合远端目录与超大树。`,type:`(node: TreeNode) => Promise<any> | void`,defaultValue:`-`},{prop:`Tree.DirectoryTree / expandAction / toggleSelect / rangeSelect`,description:`目录树快捷 API；除了展开动作，还能细化 ctrl/meta 追加选择和 shift 区间选择是 append 还是 replace。`,type:`DirectoryTreeProps / false | "click" | "doubleClick" / boolean / false | "append" | "replace"`,defaultValue:`blockNode=true / showIcon=true / "click" / true / "append"`},{prop:`draggable / allowDrop / onDrop`,description:`开启拖拽排序并控制是否允许落点；allowDrop 和 onDrop 都会拿到 dropToGap，UI 会同步显示插前、插后或放入占位态。`,type:`TreeDraggable / (info) => boolean / (info) => void`,defaultValue:`false / - / -`},{prop:`height / itemHeight / virtual`,description:`为长列表开启虚拟滚动；height 定义视口高度，itemHeight 用于估算渲染窗口，也能和 loadData 组合接超长懒加载树。`,type:`number / number / boolean`,defaultValue:`- / 自动按尺寸估算 / true`},{prop:`showLine / showIcon / blockNode`,description:`控制树线、节点图标和整行可点的布局表现。`,type:`boolean`,defaultValue:`false`},{prop:`titleRender / switcherIcon / icon`,description:`按节点态自定义标题、展开图标和节点图标。`,type:`render function | any`,defaultValue:`-`}],He=e=>Array.isArray(e)?e:e.checked,Ue=(e,t)=>Array.isArray(e)?t?.halfCheckedKeys??[]:e.halfChecked,q=e=>`${typeof e}:${String(e)}`,J=e=>e.map(e=>({...e,children:Array.isArray(e.children)?J(e.children):e.children})),Y=(e,t)=>{let n=q(t);for(let r=0;r<e.length;r+=1){let i=e[r];if(q(i.key)===n){let[t]=e.splice(r,1);return t??null}if(Array.isArray(i.children)){let e=Y(i.children,t);if(e)return e}}return null},X=(e,t,n,r)=>{let i=q(n);for(let a=0;a<e.length;a+=1){let o=e[a];if(q(o.key)===i){if(r===0){let e=Array.isArray(o.children)?[...o.children]:[];e.push(t),o.children=e}else e.splice(r<0?a:a+1,0,t);return!0}if(Array.isArray(o.children)&&X(o.children,t,n,r))return!0}return!1},Z=(e,t)=>{let n=J(e),r=Y(n,t.dragNode.key);return r&&(X(n,r,t.node.key,t.dropPosition)||n.push(r)),n},We=(e,t,n)=>{let r=q(t);return e.map(e=>q(e.key)===r?n(e):Array.isArray(e.children)?{...e,children:We(e.children,t,n)}:e)},Ge=e=>e.reduce((e,t)=>!Array.isArray(t.children)||!t.children.length?e:e+1+Ge(t.children),0),Ke=t=>{let{isOpen:n,isFolder:i,toggle:o,addChild:s,changeType:c}=T(`useSetup:0:0`,()=>a(()=>{let e=T(`computed:1:0`,()=>_(()=>!!t.model.open)),n=T(`computed:1:1`,()=>_(()=>!!t.model.children&&t.model.children.length>0)),r=n=>{n?.stopPropagation(),t.model.open=!e.get()},i=e=>{e?.stopPropagation(),t.model.children||(t.model.children=[]),t.model.children.push({id:`${t.model.id}-new-${t.model.children.length}`,name:`new stuff`}),t.model.open=!0};return{isOpen:e,isFolder:n,toggle:r,addChild:i,changeType:e=>{e?.stopPropagation(),n.get()||(t.model.children=[],i(),t.model.open=!0)}}}));return y(a=>{let _=e(`li`,a);h(_,`list-none`);let v=e(`button`,_);d(_,v),S(v,`type`,`button`),f(()=>{h(v,String(`flex items-center gap-2 rounded-xl px-3 py-2 text-left text-sm transition `+(i.get()?`font-semibold text-base-content`:`text-base-content/80 hover:bg-base-200/70`)))}),r(v,`click`,e=>o(e)),r(v,`dblclick`,e=>c(e));let b=e(`span`,v);d(v,b),h(b,`inline-flex size-5 items-center justify-center rounded-md bg-base-200/80 text-[11px] text-base-content/55`);let T=ee(b);d(b,T),f(()=>{x(T,i.get()?n.get()?`−`:`+`:`•`)});let D=e(`span`,v);d(v,D);let O=p(`rue:slot:anchor`);d(D,O),f(()=>{let e=t.model.name;u(()=>C(e,D,O))});let k=p(`rue:slot:anchor`);return d(_,k),f(()=>{let a=i.get()&&n.get()?y(()=>{let n=l(),i=e(`ul`,n);d(n,i),h(i,`mt-1 grid gap-1 pl-5`);let a=p(`rue:list:start`),o=p(`rue:list:end`);d(i,a),d(i,o);let c=new Map;f(()=>{c=E({items:t.model.children||[],getKey:(e,t)=>e.id,elements:c,parent:i,before:o,start:a,renderItem:(e,t,n,r,i)=>{m(w(Ke,{key:e.id,model:e}),t,n,r)}})});let u=e(`li`,i);d(i,u),h(u,`list-none`);let _=e(`button`,u);return d(u,_),S(_,`type`,`button`),h(_,`btn btn-ghost btn-xs rounded-full text-emerald-600`),r(_,`click`,e=>s(e)),d(_,g(`+ add child`)),n}):``;u(()=>C(a,_,k))}),_})},qe=()=>{let{basicSelectedKeys:n,directorySelectedKeys:r,directoryExpandAction:i,directoryToggleSelect:s,directoryRangeSelect:c,directoryRangeAppendSelectedKeys:m,directoryRangeReplaceSelectedKeys:v,directoryRangeTreeVersion:b,checkableSelectedKeys:x,checkedKeys:S,halfCheckedKeys:ee,disabledCheckedKeys:E,simpleSelectedKeys:j,asyncSelectedKeys:te,asyncExpandedKeys:M,dragTreeData:N,dragSummary:P,virtualSelectedKeys:F,asyncVirtualTreeData:I,asyncVirtualExpandedKeys:ne,asyncVirtualSelectedKeys:re,asyncTreeData:ie,legacyTree:ae,tabs:L,loadAsyncTree:R,loadAsyncVirtualTree:oe,resetDirectoryRangeDemo:z}=T(`useSetup:0:0:dup1`,()=>a(()=>{let e=T(`ref:1:2`,()=>o([`docs-api`])),n=T(`ref:1:3`,()=>o([`dir-app`])),r=T(`ref:1:4`,()=>o(`click`)),i=T(`ref:1:5`,()=>o(!0)),a=T(`computed:1:6`,()=>_(()=>i.value?`append`:!1)),s=T(`ref:1:7`,()=>o([])),c=T(`ref:1:8`,()=>o([])),l=T(`ref:1:9`,()=>o(0)),u=T(`ref:1:10`,()=>o([`release-control`])),d=T(`ref:1:11`,()=>o([`site-home`])),f=T(`ref:1:12`,()=>o([`release-control`,`release-site`])),p=T(`ref:1:13`,()=>o([`editable-assets`])),m=T(`ref:1:14`,()=>o([`workflow`])),h=T(`ref:1:15`,()=>o([])),g=T(`ref:1:16`,()=>o([])),v=T(`ref:1:17`,()=>o(J(Oe))),y=T(`ref:1:18`,()=>o(`folder 支持放入；file 只允许插前和插后，悬停时会显示明确占位态。`)),b=T(`ref:1:19`,()=>o([`virtual-3`])),x=T(`ref:1:20`,()=>o(J(Ae))),S=T(`ref:1:21`,()=>o([])),C=T(`ref:1:22`,()=>o([])),w=T(`ref:1:23`,()=>o([{title:`发布总线`,key:`release-bus`,isLeaf:!1}]));return{basicSelectedKeys:e,directorySelectedKeys:n,directoryExpandAction:r,directoryToggleSelect:i,directoryRangeSelect:a,directoryRangeAppendSelectedKeys:s,directoryRangeReplaceSelectedKeys:c,directoryRangeTreeVersion:l,checkableSelectedKeys:u,checkedKeys:d,halfCheckedKeys:f,disabledCheckedKeys:p,simpleSelectedKeys:m,asyncSelectedKeys:h,asyncExpandedKeys:g,dragTreeData:v,dragSummary:y,virtualSelectedKeys:b,asyncVirtualTreeData:x,asyncVirtualExpandedKeys:S,asyncVirtualSelectedKeys:C,asyncTreeData:w,legacyTree:T(`reactive:1:24`,()=>t({id:`root`,name:`My Tree`,open:!0,children:[{id:`hello`,name:`hello`},{id:`world`,name:`world`},{id:`branch`,name:`child folder`,open:!0,children:[{id:`branch-1`,name:`design review`},{id:`branch-2`,name:`release note`}]}]})),tabs:{basic:T(`ref:1:25`,()=>o(`preview`)),directory:T(`ref:1:26`,()=>o(`preview`)),directoryRange:T(`ref:1:27`,()=>o(`preview`)),checkable:T(`ref:1:28`,()=>o(`preview`)),checkableDisabled:T(`ref:1:29`,()=>o(`preview`)),simple:T(`ref:1:30`,()=>o(`preview`)),async:T(`ref:1:31`,()=>o(`preview`)),drag:T(`ref:1:32`,()=>o(`preview`)),virtual:T(`ref:1:33`,()=>o(`preview`)),virtualAsync:T(`ref:1:34`,()=>o(`preview`)),legacy:T(`ref:1:35`,()=>o(`preview`))},loadAsyncTree:async e=>{e.key===`release-bus`&&(w.value=[{title:`发布总线`,key:`release-bus`,isLeaf:!1,children:[{title:`桌面端`,key:`desktop`,children:[{title:`Windows`,key:`desktop-win`},{title:`macOS`,key:`desktop-mac`}]},{title:`移动端`,key:`mobile`,children:[{title:`iOS`,key:`mobile-ios`},{title:`Android`,key:`mobile-android`}]}]}])},loadAsyncVirtualTree:async e=>{e.children.length||(x.value=We(x.value,e.key,e=>({...e,children:Array.from({length:8},(t,n)=>({title:`${String(e.title)} / Module ${n+1}`,key:`${String(e.key)}-child-${n}`,isLeaf:n%3!=0}))})))},resetDirectoryRangeDemo:()=>{s.value=[],c.value=[],l.value+=1}}}));return y(t=>{let a=l(),o=p(`rue:component:anchor`);return d(a,o),C(w(k,{children:y(()=>{let t=l(),a=e(`div`,t);d(t,a),h(a,`max-w-none prose prose-sm md:prose-base`);let o=e(`h1`,a);d(a,o),d(o,g(`Tree 树控件`));let _=e(`p`,a);d(a,_),d(_,g(`Rue 的 Tree 补上了独立树组件这块空白：保留 TreeView 示例里递归数据直改的灵活性，同时把 树控件常用的展开、选中、勾选、简单模式、异步加载和自定义标题一次补齐。 视觉上继续沿用 Rue 现有的卡片、badge 和 base 色阶体系，不照搬其他组件库的外观。`));let y=e(`div`,a);d(a,y),h(y,`not-prose mt-6 grid gap-3 md:grid-cols-3`);let T=e(`div`,y);d(y,T),h(T,`rounded-[1.4rem] border border-base-300 bg-gradient-to-br from-base-100 to-base-200/40 p-4 shadow-sm`);let k=e(`div`,T);d(T,k),h(k,`text-xs uppercase tracking-[0.2em] text-base-content/45`),d(k,g(`Node Model`));let B=e(`div`,T);d(T,B),h(B,`mt-2 text-base font-semibold`),d(B,g(`选择、勾选、展开三条状态线`));let se=e(`p`,T);d(T,se),h(se,`mt-2 mb-0 text-sm text-base-content/68`),d(se,g(`目录树、权限树、发布树都能直接套进来。`));let V=e(`div`,y);d(y,V),h(V,`rounded-[1.4rem] border border-base-300 bg-gradient-to-br from-base-100 to-base-200/40 p-4 shadow-sm`);let ce=e(`div`,V);d(V,ce),h(ce,`text-xs uppercase tracking-[0.2em] text-base-content/45`),d(ce,g(`DirectoryTree`));let le=e(`div`,V);d(V,le),h(le,`mt-2 text-base font-semibold`),d(le,g(`目录树快捷 API`));let ue=e(`p`,V);d(V,ue),h(ue,`mt-2 mb-0 text-sm text-base-content/68`),d(ue,g(`支持 click / doubleClick 展开，以及更接近文件浏览器的多选交互。`));let H=e(`div`,y);d(y,H),h(H,`rounded-[1.4rem] border border-base-300 bg-gradient-to-br from-base-100 to-base-200/40 p-4 shadow-sm`);let de=e(`div`,H);d(H,de),h(de,`text-xs uppercase tracking-[0.2em] text-base-content/45`),d(de,g(`Heavy Interaction`));let fe=e(`div`,H);d(H,fe),h(fe,`mt-2 text-base font-semibold`),d(fe,g(`拖拽排序与虚拟滚动`));let pe=e(`p`,H);d(H,pe),h(pe,`mt-2 mb-0 text-sm text-base-content/68`),d(pe,g(`长列表和拖拽改序终于能落在同一个 Tree 上了。`));let me=p(`rue:component:anchor`);d(a,me),f(()=>{let e=w(A,{title:`基础选中与整行交互`,summary:`默认 Tree 就是一个纯浏览 + 选中容器；blockNode 和 showIcon 让它更像配置面板里的主导航。`,tab:L.basic,code:je,preview:D(`div`,{className:`space-y-4 not-prose`,children:[O(G,{treeData:Se,selectedKeys:n.value,defaultExpandAll:!0,showIcon:!0,blockNode:!0,onSelect:e=>{n.value=e}}),D(`div`,{className:`grid gap-3 md:grid-cols-3`,children:[D(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[O(`div`,{className:`text-xs text-base-content/45`,children:`当前选中`}),O(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:n.value.length?n.value.map(e=>O(`span`,{className:`badge badge-outline badge-sm`,children:String(e)},String(e))):O(`span`,{className:`text-sm text-base-content/55`,children:`未选择`})})]}),D(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[O(`div`,{className:`text-xs text-base-content/45`,children:`推荐场景`}),O(`div`,{className:`mt-2 text-sm text-base-content/75`,children:`组件目录、文档导航、资源分类`})]}),D(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[O(`div`,{className:`text-xs text-base-content/45`,children:`状态模型`}),O(`div`,{className:`mt-2 text-sm text-base-content/75`,children:`selectedKeys / expandedKeys 分离，便于受控更新。`})]})]})]})});u(()=>C(e,a,me))});let he=p(`rue:component:anchor`);d(a,he),f(()=>{let e=w(A,{title:`DirectoryTree 目录树快捷 API`,summary:`Tree.DirectoryTree 默认补上目录图标、整行可点和 click 展开；这里先只看 expandAction 和 toggleSelect 这两个基础交互开关。`,tab:L.directory,code:Ie,preview:D(`div`,{className:`grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`,children:[O(G.DirectoryTree,{treeData:Ee,selectedKeys:r.value,multiple:!0,expandAction:i.value,toggleSelect:s.value,rangeSelect:c.get(),onSelect:e=>{r.value=e}}),D(`div`,{className:`space-y-3`,children:[D(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[O(`div`,{className:`text-xs text-base-content/45`,children:`快捷属性`}),D(`div`,{className:`mt-3 flex flex-wrap gap-2`,children:[O(`button`,{type:`button`,className:i.value===`click`?`btn btn-primary btn-xs`:`btn btn-ghost btn-xs`,onClick:()=>{i.value=`click`},children:`click 展开`}),O(`button`,{type:`button`,className:i.value===`doubleClick`?`btn btn-primary btn-xs`:`btn btn-ghost btn-xs`,onClick:()=>{i.value=`doubleClick`},children:`doubleClick 展开`}),O(`button`,{type:`button`,className:i.value===!1?`btn btn-primary btn-xs`:`btn btn-ghost btn-xs`,onClick:()=>{i.value=!1},children:`只选中不展开`})]}),D(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:[O(`button`,{type:`button`,className:s.value?`btn btn-primary btn-xs`:`btn btn-ghost btn-xs`,onClick:()=>{s.value=!0},children:`ctrl/meta 追加`}),O(`button`,{type:`button`,className:s.value?`btn btn-ghost btn-xs`:`btn btn-primary btn-xs`,onClick:()=>{s.value=!1},children:`关闭追加选择`})]})]}),D(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[O(`div`,{className:`text-xs text-base-content/45`,children:`当前选择`}),O(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:r.value.map(e=>O(`span`,{className:`badge badge-outline badge-sm`,children:String(e)},String(e)))})]}),D(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`,children:[`当前组合是 expandAction=`,O(`strong`,{children:String(i.value)}),`、toggleSelect=`,O(`strong`,{children:String(s.value)}),`、rangeSelect=`,O(`strong`,{children:String(c.get())}),`。`,O(`div`,{className:`mt-3`,children:`普通点击会落成单选；打开追加后，meta / ctrl 会追加或移除选中，shift 也会启用区间选择。关闭追加时，这两类补充选择都会停用；append / replace 的差异放到下面的对照示例里单独演示。`})]})]})]})});u(()=>C(e,a,he))});let ge=p(`rue:component:anchor`);d(a,ge),f(()=>{let e=w(A,{title:`shift append vs shift replace`,summary:`这两个模式只有在“先做一次非连续多选，再用 shift 选区间”时才会分出差异；左边保留旧选择，右边只保留新区间。`,tab:L.directoryRange,code:Le,preview:D(`div`,{className:`space-y-4 not-prose`,children:[D(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`,children:[O(`div`,{children:`操作顺序：先单击 beta.ts，再按住 Cmd / Ctrl 单击 epsilon.ts，最后按住 Shift 单击 delta.ts。`}),O(`div`,{className:`mt-2`,children:`append 会保留 beta.ts；replace 只保留 delta.ts 到 epsilon.ts 这一段。`}),O(`button`,{type:`button`,className:`btn btn-ghost btn-xs mt-3`,onClick:z,children:`重置两边示例`})]}),D(`div`,{className:`grid gap-4 xl:grid-cols-2`,children:[D(`div`,{className:`space-y-3 rounded-[1.4rem] border border-base-300 bg-base-100 p-4 shadow-sm`,children:[D(`div`,{className:`flex items-center justify-between gap-3`,children:[D(`div`,{children:[O(`div`,{className:`text-sm font-semibold`,children:`rangeSelect="append"`}),O(`div`,{className:`text-xs text-base-content/55`,children:`保留原先的非连续选择，再并入新的 shift 区间。`})]}),O(`span`,{className:`badge badge-outline badge-sm`,children:`append`})]}),O(G.DirectoryTree,{treeData:De,selectedKeys:m.value,multiple:!0,toggleSelect:!0,rangeSelect:`append`,onSelect:e=>{m.value=e}},`append-${b.value}`),D(`div`,{className:`rounded-box border border-base-300 bg-base-100 px-4 py-3 text-sm text-base-content/70`,children:[O(`div`,{className:`text-xs text-base-content/45`,children:`当前选择`}),O(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:m.value.length?m.value.map(e=>O(`span`,{className:`badge badge-outline badge-sm`,children:String(e)},String(e))):O(`span`,{className:`text-sm text-base-content/55`,children:`还没有选择`})})]})]}),D(`div`,{className:`space-y-3 rounded-[1.4rem] border border-base-300 bg-base-100 p-4 shadow-sm`,children:[D(`div`,{className:`flex items-center justify-between gap-3`,children:[D(`div`,{children:[O(`div`,{className:`text-sm font-semibold`,children:`rangeSelect="replace"`}),O(`div`,{className:`text-xs text-base-content/55`,children:`只保留新的 shift 区间，旧的非连续选择会被替换掉。`})]}),O(`span`,{className:`badge badge-primary badge-outline badge-sm`,children:`replace`})]}),O(G.DirectoryTree,{treeData:De,selectedKeys:v.value,multiple:!0,toggleSelect:!0,rangeSelect:`replace`,onSelect:e=>{v.value=e}},`replace-${b.value}`),D(`div`,{className:`rounded-box border border-base-300 bg-base-100 px-4 py-3 text-sm text-base-content/70`,children:[O(`div`,{className:`text-xs text-base-content/45`,children:`当前选择`}),O(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:v.value.length?v.value.map(e=>O(`span`,{className:`badge badge-outline badge-sm`,children:String(e)},String(e))):O(`span`,{className:`text-sm text-base-content/55`,children:`还没有选择`})})]})]})]})]})});u(()=>C(e,a,ge))});let _e=p(`rue:component:anchor`);d(a,_e),f(()=>{let e=w(A,{title:`父子联动与半选态`,summary:`这一块只看级联勾选和 halfChecked，不再混入 disabled / disableCheckbox，点击父节点时能直接看到整棵子树联动。`,tab:L.checkable,code:Me,preview:D(`div`,{className:`space-y-4 not-prose`,children:[O(G,{treeData:Ce,selectedKeys:x.value,checkedKeys:S.value,checkable:!0,defaultExpandAll:!0,showLine:!0,blockNode:!0,onSelect:e=>{x.value=e},onCheck:(e,t)=>{S.value=He(e),ee.value=Ue(e,t)}}),D(`div`,{className:`grid gap-3 md:grid-cols-3`,children:[D(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[O(`div`,{className:`text-xs text-base-content/45`,children:`selectedKeys`}),O(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:x.value.length?x.value.map(e=>O(`span`,{className:`badge badge-outline badge-sm`,children:String(e)},String(e))):O(`span`,{className:`text-sm text-base-content/55`,children:`当前没有选中节点`})})]}),D(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[O(`div`,{className:`text-xs text-base-content/45`,children:`checkedKeys`}),O(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:S.value.map(e=>O(`span`,{className:`badge badge-primary badge-outline badge-sm`,children:String(e)},String(e)))})]}),D(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[O(`div`,{className:`text-xs text-base-content/45`,children:`halfCheckedKeys`}),O(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:ee.value.length?ee.value.map(e=>O(`span`,{className:`badge badge-ghost badge-sm`,children:String(e)},String(e))):O(`span`,{className:`text-sm text-base-content/55`,children:`当前没有半选`})})]})]})]})});u(()=>C(e,a,_e))});let ve=p(`rue:component:anchor`);d(a,ve),f(()=>{let e=w(A,{title:`禁用节点与禁用复选框`,summary:`把 disabled 和 disableCheckbox 单独拆出来看：前者整节点只读，后者只禁用勾选框，不再干扰联动示例。`,tab:L.checkableDisabled,code:Ne,preview:D(`div`,{className:`grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`,children:[O(G,{treeData:we,checkedKeys:E.value,checkable:!0,defaultExpandAll:!0,showLine:!0,blockNode:!0,onCheck:e=>{E.value=He(e)}}),D(`div`,{className:`space-y-3`,children:[D(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[O(`div`,{className:`text-xs text-base-content/45`,children:`当前勾选`}),O(`div`,{className:`mt-2 flex flex-wrap gap-2`,children:E.value.length?E.value.map(e=>O(`span`,{className:`badge badge-outline badge-sm`,children:String(e)},String(e))):O(`span`,{className:`text-sm text-base-content/55`,children:`当前没有勾选`})})]}),D(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm text-sm text-base-content/75`,children:[O(`div`,{className:`font-medium text-base-content`,children:`disabled`}),O(`div`,{className:`mt-2`,children:`整节点不可展开、不可选中、不可勾选，适合只读目录或冻结配置。`})]}),D(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm text-sm text-base-content/75`,children:[O(`div`,{className:`font-medium text-base-content`,children:`disableCheckbox`}),O(`div`,{className:`mt-2`,children:`节点仍能展示和展开，但复选框不会参与交互，适合“只可浏览不可授权”的条目。`})]})]})]})});u(()=>C(e,a,ve))});let ye=p(`rue:component:anchor`);d(a,ye),f(()=>{let e=w(A,{title:`Simple Mode + Search`,summary:`扁平数据直入后，内置搜索会保留命中节点的祖先链，不会把层级上下文切断。`,tab:L.simple,code:Pe,preview:D(`div`,{className:`grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`,children:[O(G,{treeData:Te,treeDataSimpleMode:{id:`nodeId`,pId:`parentId`,rootPId:0},fieldNames:{title:`name`,key:`code`},selectedKeys:j.value,allowSearch:!0,defaultExpandAll:!0,onSelect:e=>{j.value=e}}),D(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`,children:[`当前选中：`,O(`code`,{children:JSON.stringify(j.value)}),O(`div`,{className:`mt-3`,children:`这类 simple mode 很适合后端直接给 id / pId 的菜单、流程节点和权限项，不需要再先做一遍树转换。`})]})]})});u(()=>C(e,a,ye))});let be=p(`rue:component:anchor`);d(a,be),f(()=>{let e=w(A,{title:`Async Load 与自定义标题`,summary:`第一次展开时再拉子节点，同时用 titleRender 和 icon 把状态信息塞回每一行。`,tab:L.async,code:Fe,preview:D(`div`,{className:`grid gap-4 not-prose lg:grid-cols-[minmax(0,26rem),1fr] lg:items-start`,children:[O(G,{treeData:ie.value,selectedKeys:te.value,expandedKeys:M.value,loadData:R,showLine:!0,showIcon:!0,blockNode:!0,titleRender:({node:e,loading:t})=>D(`div`,{className:`flex min-w-0 items-center justify-between gap-3`,children:[O(`span`,{className:`truncate`,children:e.title}),O(`span`,{className:`badge badge-ghost badge-xs`,children:t?`loading`:e.children.length?`branch`:`leaf`})]}),onSelect:e=>{te.value=e},onExpand:e=>{M.value=e}}),D(`div`,{className:`space-y-3`,children:[D(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[O(`div`,{className:`text-xs text-base-content/45`,children:`expandedKeys`}),O(`div`,{className:`mt-2 text-sm text-base-content/75`,children:JSON.stringify(M.value)})]}),D(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[O(`div`,{className:`text-xs text-base-content/45`,children:`selectedKeys`}),O(`div`,{className:`mt-2 text-sm text-base-content/75`,children:JSON.stringify(te.value)})]}),O(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`,children:`展开 release-bus 后才会注入桌面端和移动端节点，适合远端目录、超大权限树和发布范围配置。`})]})]})});u(()=>C(e,a,be))});let U=e(`div`,a);d(a,U),h(U,`not-prose mt-10 space-y-2`);let W=e(`h2`,U);d(U,W),h(W,`text-2xl font-semibold`),d(W,g(`更重交互`));let Oe=e(`p`,U);d(U,Oe),h(Oe,`text-sm text-base-content/70`),d(Oe,g(`当 Tree 既要承载拖拽整理，又要承载超长数据时，draggable 和 virtual 就是两个最关键的控制面。`));let Ae=p(`rue:component:anchor`);d(a,Ae),f(()=>{let e=w(A,{title:`allowDrop 策略与拖拽占位`,summary:`allowDrop 可以把 folder / file 的落点规则写清楚；hover 时 Tree 会直接给出插前、插后或放入占位提示。`,tab:L.drag,code:Re,preview:D(`div`,{className:`grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`,children:[O(G,{treeData:N.value,draggable:!0,blockNode:!0,defaultExpandAll:!0,allowDrop:({dropNode:e,dropToGap:t})=>t||e.raw.kind!==`file`,titleRender:({node:e})=>D(`div`,{className:`flex min-w-0 items-center justify-between gap-3`,children:[O(`span`,{className:`truncate`,children:e.title}),O(`span`,{className:e.raw.kind===`folder`?`badge badge-ghost badge-xs`:`badge badge-outline badge-xs`,children:e.raw.kind})]}),onDrop:e=>{N.value=Z(N.value,e),P.value=`${String(e.dragNode.key)} -> ${String(e.node.key)} (${e.dropToGap?e.dropPosition<0?`before`:`after`:`inside`})`}}),D(`div`,{className:`space-y-3`,children:[D(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[O(`div`,{className:`text-xs text-base-content/45`,children:`最近一次拖拽`}),O(`div`,{className:`mt-2 text-sm text-base-content/75`,children:P.value})]}),D(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[O(`div`,{className:`text-xs text-base-content/45`,children:`allowDrop 规则`}),D(`div`,{className:`mt-2 grid gap-2 text-sm text-base-content/75`,children:[O(`div`,{children:`folder：允许放入，也允许插前 / 插后。`}),O(`div`,{children:`file：只允许插前 / 插后，不允许作为 inside 目标。`})]})]}),O(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`,children:`拖到 folder 正中央会看到“放入”，拖到行的上沿或下沿则会出现“插前 / 插后”；如果目标是 file，inside 落点会被 allowDrop 直接拦掉。`})]})]})});u(()=>C(e,a,Ae))});let q=p(`rue:component:anchor`);d(a,q),f(()=>{let e=w(A,{title:`Virtual Scroll`,summary:`长列表下只渲染可见窗口，height 和 itemHeight 负责限定视口和估算切片范围。`,tab:L.virtual,code:K,preview:D(`div`,{className:`grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`,children:[O(G,{treeData:ke,selectedKeys:F.value,height:320,itemHeight:42,virtual:!0,blockNode:!0,onSelect:e=>{F.value=e}}),D(`div`,{className:`space-y-3`,children:[D(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[O(`div`,{className:`text-xs text-base-content/45`,children:`数据量`}),O(`div`,{className:`mt-2 text-2xl font-semibold`,children:ke.length})]}),D(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[O(`div`,{className:`text-xs text-base-content/45`,children:`当前选中`}),O(`div`,{className:`mt-2 text-sm text-base-content/75`,children:JSON.stringify(F.value)})]}),O(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`,children:`对文档页目录、埋点树、批量资源目录这种长列表场景，虚拟滚动能显著降低初始渲染压力。`})]})]})});u(()=>C(e,a,q))});let J=p(`rue:component:anchor`);d(a,J),f(()=>{let e=w(A,{title:`Virtual + Async Load 场景页`,summary:`把 virtual、height、itemHeight 和 loadData 合在一起，就能接超长目录或资源树，只在展开分支时再注入子节点。`,tab:L.virtualAsync,code:ze,preview:D(`div`,{className:`grid gap-4 not-prose lg:grid-cols-[minmax(0,24rem),1fr] lg:items-start`,children:[O(G,{treeData:I.value,selectedKeys:re.value,expandedKeys:ne.value,height:340,itemHeight:40,virtual:!0,showIcon:!0,blockNode:!0,loadData:oe,titleRender:({node:e,loading:t})=>D(`div`,{className:`flex min-w-0 items-center justify-between gap-3`,children:[O(`span`,{className:`truncate`,children:e.title}),O(`span`,{className:`badge badge-ghost badge-xs`,children:t?`loading`:e.children.length?`loaded`:e.isLeaf?`leaf`:`lazy`})]}),onSelect:e=>{re.value=e},onExpand:e=>{ne.value=e}}),D(`div`,{className:`space-y-3`,children:[D(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[O(`div`,{className:`text-xs text-base-content/45`,children:`根节点数量`}),O(`div`,{className:`mt-2 text-2xl font-semibold`,children:I.value.length})]}),D(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[O(`div`,{className:`text-xs text-base-content/45`,children:`已加载分支`}),O(`div`,{className:`mt-2 text-2xl font-semibold`,children:Ge(I.value)})]}),D(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm`,children:[O(`div`,{className:`text-xs text-base-content/45`,children:`当前展开`}),O(`div`,{className:`mt-2 text-sm text-base-content/75`,children:JSON.stringify(ne.value)})]}),O(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-100/80 p-4 text-sm text-base-content/70`,children:`先滚动到较深位置再展开节点也没问题：视口外的行不会真正渲染，只有命中的 branch 才会触发 loadData 注入子节点。`})]})]})});u(()=>C(e,a,J))});let Y=p(`rue:component:anchor`);d(a,Y),f(()=>{let e=w(A,{title:`保留原始递归 Demo`,summary:`旧的 TreeView 行为没有删掉，只是并进 design 页面里，方便对比“直接改数据”这类递归写法。`,tab:L.legacy,code:Be,preview:O(`div`,{className:`card border border-base-200/80 bg-base-100 shadow-sm not-prose`,children:D(`div`,{className:`card-body grid gap-4 lg:grid-cols-[minmax(0,1fr),18rem] lg:items-start`,children:[O(`ul`,{className:`m-0 grid gap-1 p-0`,children:O(Ke,{model:ae})}),O(`div`,{className:`rounded-box border border-base-300 bg-base-200/40 p-4 text-sm text-base-content/70`,children:`单击切换展开，双击叶子节点会把它转换成 folder，并在当前层直接追加一个新子节点。`})]})})});u(()=>C(e,a,Y))});let X=e(`div`,a);d(a,X),h(X,`not-prose mt-10 space-y-4`);let We=e(`h2`,X);d(X,We),h(We,`text-2xl font-semibold`),d(We,g(`API`));let qe=p(`rue:component:anchor`);return d(X,qe),f(()=>{let e=w(xe,{rows:Ve});u(()=>C(e,X,qe))}),t})}),a,o),a})};export{qe as default};