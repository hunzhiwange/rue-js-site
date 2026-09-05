import{B as e,Bt as t,C as n,Dn as r,Et as i,Gt as a,H as o,K as s,Kt as c,L as l,Lt as u,Mt as d,S as f,Sn as p,V as m,W as h,Wt as g,X as _,Y as v,Z as y,_n as b,_t as x,at as ee,b as S,bn as C,dt as w,et as T,fn as E,ft as te,gn as D,hn as O,ht as k,kn as A,mn as j,mt as ne,nt as M,ot as N,pn as re,pt as P,q as F,qt as I,rt as L,st as R,tt as z,wn as B,x as ie,yn as V,yt as ae,z as H}from"./rue-runtime-CwEGJ854.js";import{t as oe}from"./Code-B3jCYMAr.js";import{t as se}from"./tabs-DUviBzjL.js";import{t as U}from"./dropdown-B1QEBvqC.js";import{r as ce}from"./SidebarPlaygroundDesign-CwCJwf8H.js";var le=b(`<table><!--rue:text-hole:0--></table>`),ue=b(`<span><span>▲</span><span>▼</span></span>`),de=b(`<label class="flex items-center gap-2 text-sm"><input><span><!--rue:text-hole:0--></span></label>`),fe=b(`<div class="w-56 rounded-box border border-base-content/10 bg-base-100 p-3 shadow-xl"><!--rue:text-hole:0--><div class="max-h-56 space-y-2 overflow-auto"><!--rue:text-hole:1--><!--rue:text-hole:2--></div><!--rue:text-hole:3--></div>`),pe=b(`<div class="relative flex items-center gap-2"><span><!--rue:text-hole:0--></span><!--rue:text-hole:1--><!--rue:text-hole:2--></div>`),me=b(`<th><!--rue:text-hole:0--></th>`),he=b(`<label><input></label>`),ge=b(`<button class="btn btn-ghost btn-xs"><!--rue:text-hole:0--></button>`),_e=b(`<div><button class="btn btn-ghost btn-xs">Prev</button><!--rue:text-hole:0--><button class="btn btn-ghost btn-xs">Next</button></div>`),ve=b(`<label><input type="checkbox" class="checkbox"></label>`),ye=b(`<div><!--rue:text-hole:0--><!--rue:text-hole:1--><table><!--rue:text-hole:2--><tbody><!--rue:text-hole:3--><!--rue:text-hole:4--></tbody><!--rue:text-hole:5--></table><!--rue:text-hole:6--><!--rue:text-hole:7--></div>`),be=b(`<table></table>`),xe=b(`<thead><!--rue:text-hole:0--></thead>`),Se=b(`<tbody><!--rue:text-hole:0--></tbody>`),Ce=b(`<tfoot><!--rue:text-hole:0--></tfoot>`),we=b(`<tr><!--rue:text-hole:0--></tr>`),W=b(`<td><!--rue:text-hole:0--></td>`),Te=0,Ee={emptyText:`No Data`,filterConfirm:`应用`,filterReset:`重置`,triggerAsc:`切换为升序`,triggerDesc:`切换为降序`,cancelSort:`取消排序`},De=(e,t)=>{if(t){if(Array.isArray(t)){let n=e;for(let e of t){if(n==null)return;n=n[e]}return n}return e?.[t]}},Oe=e=>e===`right`?`text-right`:e===`center`?`text-center`:`text-left`,G=(...e)=>e.filter(Boolean).join(` `).trim()||void 0,K=(...e)=>{let t;return e.forEach(e=>{e&&(t=t?{...t,...e}:{...e})}),t},ke=e=>e==null||e===!1?[]:Array.isArray(e)?[...e]:typeof e!=`string`&&typeof e?.[Symbol.iterator]==`function`?Array.from(e):[e],q=(e,t)=>e.key?e.key:typeof e.dataIndex==`string`?e.dataIndex:Array.isArray(e.dataIndex)&&e.dataIndex.length>0?e.dataIndex.join(`.`):`column-${t.join(`-`)}`,Ae=e=>(e.children??[]).filter(e=>!e.hidden),je=e=>e.reduce((e,t)=>{if(t.hidden)return e;let n=Ae(t);return n.length===0?e+1:e+je(n)},0),Me=e=>{let t=1;return e.forEach(e=>{if(e.hidden)return;let n=Ae(e);n.length>0&&(t=Math.max(t,1+Me(n)))}),t},Ne=(e,t=[])=>{let n=[];return e.forEach((e,r)=>{if(e.hidden)return;let i=[...t,r],a=Ae(e);if(a.length>0){n.push(...Ne(a,i));return}n.push({column:e,indexPath:i,key:q(e,i)})}),n},Pe=e=>{let t=e.filter(e=>!e.hidden),n=Me(t),r=Array.from({length:n},()=>[]),i=(e,t,a=[])=>{e.forEach((e,o)=>{if(e.hidden)return;let s=[...a,o],c=Ae(e),l=c.length>0?je(c):1,u=e.colSpan??l;if(u===0)return;let d=e.rowSpan??(c.length>0?1:n-t);r[t].push({column:e,index:o,key:q(e,s),colSpan:u,rowSpan:d}),c.length>0&&i(c,t+1,s)})};return i(t,0),r},Fe=e=>!!(e.fixedCol||e.fixed===!0||e.fixed===`left`||e.fixed===`start`),Ie=e=>typeof e==`object`&&!!e,Le=e=>{if(Ie(e.sorter))return e.sorter.multiple},Re=e=>(Array.isArray(e)?e:typeof e?.get==`function`?e.get():[]).filter(e=>!!e?.order).sort((e,t)=>{let n=e.multiple??0,r=t.multiple??0;return n===r?0:r-n}),ze=e=>{let t=Re(e.filter(e=>e.column.sortOrder!==void 0).map(e=>({key:e.key,order:e.column.sortOrder,multiple:Le(e.column)})));return t.length>0?t:Re(e.filter(e=>!!e.column.defaultSortOrder).map(e=>({key:e.key,order:e.column.defaultSortOrder,multiple:Le(e.column)})))},Be=e=>{let t={};return e.forEach(({column:e,key:n})=>{if(e.filteredValue!==void 0){t[n]=ke(e.filteredValue);return}e.defaultFilteredValue!==void 0&&(t[n]=ke(e.defaultFilteredValue))}),t},Ve=(e,t)=>e<=1?1:e>=t?t:e,He=e=>typeof e==`number`?`${e}px`:e,Ue=e=>{switch(e){case`small`:return`table-sm`;case`middle`:return`table-md`;case`large`:return`table-lg`;case`xs`:case`sm`:case`md`:case`lg`:case`xl`:return`table-${e}`;default:return}},We=e=>({...Ee,...e}),Ge=(e,t)=>typeof e==`function`?e({props:t})??{}:e??{},Ke=e=>e?e===!0||e.showTitle!==!1:!1,qe=e=>{switch(e){case`topLeft`:return`topStart`;case`topCenter`:return`topCenter`;case`topRight`:return`topEnd`;case`bottomLeft`:return`bottomStart`;case`bottomCenter`:return`bottomCenter`;case`bottomRight`:return`bottomEnd`;default:return`none`}},Je=e=>e==null||e===!1?[]:(e.placement?.length?e.placement:e.position?.length?e.position.map(qe):[`bottomEnd`]).filter((e,t,n)=>e===`none`?n.length===1:n.indexOf(e)===t),Ye=e=>{switch(e){case`topStart`:case`bottomStart`:return`justify-start`;case`topCenter`:case`bottomCenter`:return`justify-center`;default:return`justify-end`}},Xe=(e,t)=>{let n=e?.[t];return Array.isArray(n)?n:[]},Ze=({render:e,data:t})=>typeof e==`function`?e(t):null,Qe=({render:e,record:t,index:n,indent:r,expanded:i})=>typeof e==`function`?e(t,n,r,i):null,$e=e=>{let t=typeof e;return t===`string`||t===`number`},J=c(t=>{let o=I(`useSetup:0:0`,()=>g(()=>{let{size:e,zebra:n,pinRows:r,pinCols:i,bordered:a,className:o,classNames:s,styles:c,children:l,dataSource:u,rowKey:d=`key`,showHeader:f=!0,onRow:m,onHeaderRow:h,onChange:g,rowSelection:_,pagination:v,expandable:y,rowClassName:b,summary:x,emptyText:ee,locale:S,title:C,footer:w,loading:T,rowHoverable:E=!1,rowHoverClass:te,tableLayout:D,sortDirections:O,showSorterTooltip:k,scroll:A,sticky:j,height:ne,onScroll:M}=t,N=We(S),re=p(()=>Ge(s,t));re.get();let P=re,F=p(()=>Ge(c,t));F.get();let I=F,L=typeof T==`object`?{spinning:T.spinning!==!1,tip:T.tip}:{spinning:!!T,tip:void 0},R=y?.childrenColumnName??`children`,z=y?.indentSize??15,B=(e,t)=>(typeof d==`function`?d(e):e?.[d])??t,ie=(e,t=[])=>e.flatMap((e,n)=>{let r=[...t,n],i=B(e,`row-${r.join(`-`)}`),a=Xe(e,R);return a.length===0?[]:[i,...ie(a,r)]}),V=`table`,ae=Ue(e);return ae&&(V+=` ${ae}`),n&&(V+=` table-zebra`),(r||j)&&(V+=` table-pin-rows`),i&&(V+=` table-pin-cols`),a&&(V+=` border-separate border-spacing-0`),P.get().table&&(V+=` ${P.get().table}`),o&&(V+=` ${o}`),{size:e,zebra:n,pinRows:r,pinCols:i,bordered:a,className:o,classNames:s,styles:c,children:l,dataSource:u,rowKey:d,showHeader:f,onRow:m,onHeaderRow:h,onChange:g,rowSelection:_,pagination:v,expandable:y,rowClassName:b,summary:x,emptyText:ee,locale:S,titleRender:C,footerRender:w,loading:T,rowHoverable:E,rowHoverClass:te,tableLayout:D,sortDirections:O,showSorterTooltip:k,scroll:A,sticky:j,height:ne,onScroll:M,localeText:N,semanticClasses:re,__rue_phase2_semanticClasses:P,semanticStyles:F,__rue_phase2_semanticStyles:I,loadingConfig:L,childrenColumnName:R,indentSize:z,getRecordKey:B,collectExpandedKeys:ie,sizeClass:ae,hasChildren:!(l==null||Array.isArray(l)&&l.length===0),cls:V}})),{size:s,zebra:c,pinRows:d,pinCols:b,bordered:S,className:j,classNames:F,styles:H,children:oe,dataSource:se,rowKey:ce,showHeader:xe,onRow:Se,onHeaderRow:Ce,onChange:we,rowSelection:W,pagination:Ee,expandable:q,rowClassName:je,summary:Me,emptyText:qe,locale:J,titleRender:Y,footerRender:et,loading:tt,rowHoverable:nt,rowHoverClass:rt,tableLayout:it,sortDirections:at,showSorterTooltip:ot,scroll:st,sticky:ct,height:lt,onScroll:ut,localeText:dt,semanticClasses:X,__rue_phase2_semanticClasses:ft,semanticStyles:Z,__rue_phase2_semanticStyles:pt,loadingConfig:mt,childrenColumnName:Q,indentSize:ht,getRecordKey:gt,collectExpandedKeys:_t,sizeClass:vt,hasChildren:yt}=o,{cls:bt}=o;if(yt)return k(e=>{let t=le().content.cloneNode(!0).firstChild,n=t,r=t.childNodes[0],i=r.parentNode;return B(()=>{l(n,bt)}),B(()=>{let e=Z.get().table;w(n,e)}),B(()=>{let e=oe;A(()=>v(e,i,r))}),t});let xt=Array.isArray(t.columns)?Ne(t.columns):[],[St]=I(`useState:1:2`,()=>a(`rue-table-${Te++}`)),[Ct]=I(`useState:1:3`,()=>a(ze(xt),{kind:`ref`})),[wt,Tt]=I(`useState:1:4`,()=>a(Be(xt),{kind:`ref`})),[Et,Dt]=I(`useState:1:5`,()=>a({},{kind:`ref`})),[Ot,kt]=I(`useState:1:6`,()=>a({},{kind:`ref`})),At={value:null},jt={value:null},[Mt,Nt]=I(`useState:1:7`,()=>a(0)),[Pt,Ft]=I(`useState:1:8`,()=>a(W?.defaultSelectedRowKeys?[...W.defaultSelectedRowKeys]:[],{kind:`ref`})),$=Ee!=null&&Ee!==!1?Ee:void 0,[It,Lt]=I(`useState:1:9`,()=>a($?$.current??$.defaultCurrent??1:1)),[Rt]=I(`useState:1:10`,()=>a($?$.pageSize??$.defaultPageSize??10:Math.max(se?.length??0,1))),[zt,Bt]=I(`useState:1:11`,()=>a(q?.defaultExpandedRowKeys?[...q.defaultExpandedRowKeys]:q?.defaultExpandAllRows&&Array.isArray(se)?se.flatMap((e,t)=>{let n=gt(e,`row-${t}`),r=Xe(e,Q);return q?.expandedRowRender||r.length>0?[n,..._t(r,[t])]:[]}):[],{kind:`ref`}));if(Array.isArray(t.columns)&&Array.isArray(se)){let a=Pe(t.columns),o=Ne(t.columns),s=new Map(o.map(e=>[e.key,e])),c=()=>{Nt(Mt.value+1)},d=o.some(e=>e.column.sortOrder!==void 0)?ze(o):Re(Ct.value),g=new Map(d.map(e=>[e.key,e])),j=o.reduce((e,t)=>{let n=t.column.filteredValue;return n===void 0?(e[t.key]=ke(wt.value[t.key]),e):(e[t.key]=ke(n),e)},{}),F=e=>{let t={};return Object.keys(e).forEach(n=>{Array.isArray(e[n])&&e[n].length>0&&(t[n]=[...e[n]])}),t},I=F(j),H=e=>typeof e.sorter==`function`?e.sorter:Ie(e.sorter)&&typeof e.sorter.compare==`function`?e.sorter.compare:(t,n)=>{let r=De(t,e.dataIndex),i=De(n,e.dataIndex);return r==null&&i==null?0:r==null?-1:i==null||r>i?1:r<i?-1:0},oe=(e,t,n)=>{for(let r of Re(n)){let n=s.get(r.key);if(!n?.column.sorter)continue;let i=H(n.column),a=r.order===`ascend`?i(e,t):-i(e,t);if(a!==0)return a}return 0},ce=(e,t)=>o.every(n=>{let r=t[n.key]??[];if(!Array.isArray(r)||r.length===0)return!0;let i=n.column.filterCombine??`or`;if(n.column.onFilter)return i===`and`?r.every(t=>n.column.onFilter(t,e)):r.some(t=>n.column.onFilter(t,e));let a=De(e,n.column.dataIndex);return i===`and`?r.every(e=>e===a):r.includes(a)}),le=(e,t)=>{let n=r=>{let i=r.flatMap(t=>{let r=Xe(t,Q),i=r.length>0?n(r):[];return!ce(t,e)&&i.length===0?[]:r.length>0?[{...t,[Q]:i}]:[t]});return Re(t).length>0&&(i=i.slice().sort((e,n)=>oe(e,n,t))),i};return n(se)},be=q?.expandedRowKeys?[...q.expandedRowKeys]:[...zt.value],Te=new Set(be),Ee=(e,t=0,n=[],r=!1)=>e.flatMap((e,i)=>{let a=[...n,i],o=gt(e,`row-${a.join(`-`)}`),s=Xe(e,Q),c={key:o,record:e,indent:t,hasTreeChildren:s.length>0};return s.length>0&&(r||Te.has(o))?[c,...Ee(s,t+1,a,r)]:[c]}),Be=Ee(se,0,[],!0),Ue=Be.some(e=>e.hasTreeChildren),We=Ee(le(j,d)),Ge=We.length,J=$!=null,tt=J?Math.max(1,$.pageSize??Rt.value):Math.max(Ge,1),ft=J?Math.max(1,Math.ceil(Ge/tt)):1,pt=J?Ve($.current??It.value,ft):1,_t=J?We.slice((pt-1)*tt,pt*tt):We,vt=_t.map(e=>e.record),yt=W?.selectedRowKeys?[...W.selectedRowKeys]:[...Pt.value],xt=new Set(yt),Vt=W?.align??`center`,Ht=!!W,Ut=!!q?.expandedRowRender,Wt=(Ut||Ue)&&q?.showExpandColumn!==!1,Gt=+!!Ht+ +!!Wt,Kt=o.length+Gt,qt=K(Z.get().wrapper,st?.y===void 0?void 0:{maxHeight:He(st.y)},lt===void 0?void 0:{height:He(lt)},ct&&typeof ct==`object`&&ct.offsetScroll!==void 0?{top:He(ct.offsetScroll)}:void 0),Jt=G(st?.x?`overflow-x-auto`:void 0,st?.y||lt!==void 0?`overflow-y-auto`:void 0,X.get().wrapper),Yt=K(Z.get().table)??{},Xt=o.some(({column:e})=>!!e.ellipsis);it?Yt.tableLayout=it:(Xt||st?.x)&&(Yt.tableLayout=`fixed`),st?.x===!0?(Yt.width=`max-content`,Yt.minWidth=`100%`):st?.x!==void 0&&(Yt.width=He(st.x),Yt.minWidth=`100%`),(()=>{let e=globalThis,t=`__rue_table_outside_close_${St.value}`;if(e[t])return;let n=e=>{let t=e?.target;t&&(t.closest(`[data-rue-table-root="${St.value}"]`)||(At.value=null,c()))};e?.addEventListener&&e.addEventListener(`pointerdown`,n),e[t]=n})();let Zt=()=>{if(!st?.scrollToFirstRowOnChange)return;let e=jt.value;e&&(e.scrollTop=0)},Qt=Re(d).map(e=>{let t=s.get(e.key);return t?{column:t.column,columnKey:e.key,order:e.order}:null}).filter(Boolean),$t=(e,t)=>{let n=e.title;return typeof n==`function`?n({sortOrder:g.get(t)?.order??null,filteredValue:j[t]??[],sortColumns:Qt,filters:I}):n},en=e=>{let t=Re(e).map(e=>{let t=s.get(e.key);return t?{column:t.column,order:e.order,columnKey:e.key,field:t.column.dataIndex,multiple:e.multiple}:null}).filter(Boolean);return t.length===0?{column:null,order:null}:t.length===1?t[0]:t},tn=(e,t,n,r,i)=>{if(!we)return;let a=le(r,i),o=Ee(a),s=J?Math.max(1,Math.ceil(o.length/n)):1,c=J?Ve(t,s):1,l=J?o.slice((c-1)*n,c*n).map(e=>e.record):o.map(e=>e.record);we(J?{current:c,pageSize:n}:!1,F(r),en(i),{action:e,currentDataSource:l})},nn=(e,t)=>{let n=s.get(e)?.column;if(!n?.sorter)return;let r=Le(n),i=(()=>{if(r!=null){let n=d.filter(t=>{let n=s.get(t.key)?.column;return Le(n??{})!=null&&t.key!==e}).map(e=>({...e}));return t&&n.push({key:e,order:t,multiple:r}),Re(n)}return t?[{key:e,order:t,multiple:r}]:[]})();Ct.value=i,c(),J&&$.current===void 0&&Lt(1),Zt(),tn(`sort`,J?1:pt,tt,j,i),setTimeout(()=>{setTimeout(()=>{let t=document.querySelector(`button[aria-label="sort-${e}"]`)?.closest(`table`)?.querySelector(`tbody`);if(!t)return;let n=new Map(Array.from(t.querySelectorAll(`tr[data-rue-table-row-key]`)).map(e=>[e.dataset.rueTableRowKey,e]));Ee(le(j,i)).forEach(e=>{let r=n.get(String(e.key));r&&t.appendChild(r)})},0)},0)},rn=(e,t,n)=>{let r=ke(t),i={...j,[e]:r};o.find(t=>t.key===e)?.column?.filteredValue===void 0&&Tt(i),Dt({...Et.value,[e]:r}),c(),J&&$.current===void 0&&Lt(1),n&&(At.value=null),Zt(),tn(`filter`,J?1:pt,tt,i,d)},an=e=>{let t=Ve(e,ft);J&&$.current===void 0&&Lt(t),c(),J&&$.onChange&&$.onChange(t,tt),Zt(),tn(`paginate`,t,tt,j,d)},on=(e=>e.filter(e=>!W?.disabled&&!(W?.getCheckboxProps?W.getCheckboxProps(e.record):{})?.disabled))(_t).map(e=>e.key),sn=on.length>0&&on.every(e=>xt.has(e)),cn=on.some(e=>xt.has(e))&&!sn,ln=(e,t,n,r,i)=>{W?.selectedRowKeys===void 0&&Ft([...e]),c();let a=Be.filter(t=>e.includes(t.key)).map(e=>e.record);n!==void 0&&W?.onSelect&&typeof r==`boolean`&&W.onSelect(n,r,a,i),W?.onChange&&W.onChange([...e],a,t)},un=e=>{if(!W||W.type===`radio`)return;let t=new Set(on),n=W.selectedRowKeys??Pt.value,r=new Set(n);t.forEach(t=>{e?r.add(t):r.delete(t)});let i=Array.from(r);if(ln(i,{type:`checkbox`}),W.onSelectAll){let t=Be.filter(e=>i.includes(e.key)).map(e=>e.record);W.onSelectAll(e,t)}},dn=(e,t)=>{let n=!!q?.expandedRowRender&&(!q?.rowExpandable||q.rowExpandable(e.record)),r=e.hasTreeChildren||n;return{key:e.key,enabled:r,expanded:Te.has(e.key),hasExpandedRowRender:n,indent:e.indent,rowIndex:t}},fn=(e,t)=>{let n=dn(e,t);if(!n.enabled)return;let r=new Set(be);n.expanded?r.delete(n.key):r.add(n.key);let i=Array.from(r);q?.expandedRowKeys===void 0&&Bt(i),c(),q?.onExpand&&q.onExpand(!n.expanded,e.record),q?.onExpandedRowsChange&&q.onExpandedRowsChange(i)},pn=e=>[...e.sortDirections??at??[`ascend`,`descend`],null],mn=(e,t)=>{let n=pn(t),r=new Map(Re(Ct.value).map(e=>[e.key,e])).get(e)?.order??null;return n[(n.findIndex(e=>e===r)+1+n.length)%n.length]},hn=(e,t)=>{let n=e.filterDropdownProps?.open??e.filterDropdownOpen;return n===void 0?At.value===t:!!n},gn=(e,t)=>(t?hn(t,e):At.value===e)||Et.value[e]!==void 0?ke(Et.value[e]??j[e]):ke(j[e]),_n=(e,t)=>{Dt({...Et.value,[e]:ke(t)}),c()},vn=(e,t,n)=>{let r=hn(t,e);t.filterDropdownProps?.open===void 0&&t.filterDropdownOpen===void 0&&(n?At.value=e:At.value===e&&(At.value=null)),!n&&r!==n&&c(),t.filterDropdownProps?.onOpenChange?.(n),t.onFilterDropdownOpenChange?.(n)},yn=(e,t)=>{vn(e,t,!1)},bn=(e,t,n)=>{rn(e,gn(e,t),n?.closeDropdown??!0)},xn=(e,t,n)=>{let r=t.filterResetToDefaultFilteredValue?ke(t.defaultFilteredValue):[];if(_n(e,r),n?.confirm){rn(e,r,n.closeDropdown??!0);return}n?.closeDropdown&&yn(e,t)},Sn=(e,t)=>typeof e.filterIcon==`function`?e.filterIcon(t):e.filterIcon===void 0?`☰`:e.filterIcon,Cn=(e,t)=>typeof e.sortIcon==`function`?e.sortIcon({sortOrder:t}):i(Object.assign(e=>{let n=ue().content.cloneNode(!0).firstChild,r=n,i=n.childNodes[0],a=n.childNodes[1],o;B(()=>{let e=G(`inline-flex flex-col leading-none`,t?`text-base-content`:`opacity-60`),n=e==null?``:String(e);Object.is(o,n)||(o=n,r.className=n)});let s;B(()=>{let e=G(t===`ascend`?`text-base-content`:`opacity-40`),n=e==null?``:String(e);Object.is(s,n)||(s=n,i.className=n)});let c;return B(()=>{let e=G(`-mt-0.5`,t===`descend`?`text-base-content`:`opacity-40`),n=e==null?``:String(e);Object.is(c,n)||(c=n,a.className=n)}),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})),wn=(e,t,n)=>t?e.map(e=>{let r=typeof n.filterSearch==`function`?n.filterSearch(t,e):String(e.text).toLowerCase().includes(t.toLowerCase()),i=Array.isArray(e.children)?wn(e.children,t,n):void 0;return r||i&&i.length>0?i&&i.length>0?{...e,children:i}:e:null}).filter(Boolean):e,Tn=(e,t,n,r,i=0)=>{let a=Array.isArray(r)?r:[];return(Array.isArray(e)?e:[]).flatMap(e=>{let r=a.includes(e.value),o=Array.isArray(e.children)&&e.children.length>0?Tn(e.children,t,n,a,i+1):[],s=T(k(()=>{let o=M(),s=de().content.cloneNode(!0),c=s.firstChild,d=c,f=c.childNodes[0],p=c.childNodes[1].childNodes[0],m=p.parentNode;o.appendChild(s),l(d,`flex items-center gap-2 text-sm`),B(()=>{let e=i>0?{paddingLeft:`${i*12}px`}:void 0;w(d,e)}),B(()=>{N(f,`type`,String(t.filterMultiple===!1?`radio`:`checkbox`))}),B(()=>{N(f,`name`,String(`rue-table-filter-${St.value}-${n}`))}),B(()=>{l(f,t.filterMultiple===!1?`radio radio-xs`:`checkbox checkbox-xs`)}),B(()=>{R(f,!!r)});let h=r=>{let i=r=>{let i=r.target,o;if(t.filterMultiple===!1)o=i.checked?[e.value]:[];else{let t=new Set(a);i.checked?t.add(e.value):t.delete(e.value),o=Array.from(t)}_n(n,o),t.filterOnClose===!1&&rn(n,o,!1)};typeof i==`function`&&i(r)};return f.addEventListener(`change`,h),u(()=>f.removeEventListener(`change`,h)),B(()=>{let t=e.text;A(()=>v(t,m,p))}),o},!0),`${String(e.value)}-${i}`);return o.length>0?[s,...o]:[s]})},En=(e,t,n,a,o)=>{let{safeDraftValues:s,__rue_phase2_safeDraftValues:d,safeMenuItems:f,__rue_phase2_safeMenuItems:h}=V(`useSetup:0:0`,()=>{let e=p(()=>Array.isArray(a)?a:[]);e.get();let t=e,n=p(()=>Array.isArray(o)?o:[]);return n.get(),{safeDraftValues:e,__rue_phase2_safeDraftValues:t,safeMenuItems:n,__rue_phase2_safeMenuItems:n}});return typeof t.filterDropdown==`function`?t.filterDropdown({setSelectedKeys:t=>_n(e,t),selectedKeys:s.get(),confirm:n=>bn(e,t,n),clearFilters:n=>xn(e,t,n),filters:t.filters,close:()=>yn(e,t),visible:n}):t.filterDropdown===void 0?k(n=>{let a=fe().content.cloneNode(!0).firstChild,o=a.childNodes[0],d=o.parentNode,p=a.childNodes[1].childNodes[0],h=p.parentNode,g=a.childNodes[1].childNodes[1],y=g.parentNode,b=a.childNodes[2],x=b.parentNode;return m(d,o,()=>t.filterSearch?{__rue_compiled_branch_key:!0,create:()=>i(Object.assign(t=>{let n=O(`input`,t);n.setAttribute(`type`,`text`),n.className=`input input-bordered input-xs mb-2 w-full`,n.setAttribute(`placeholder`,`搜索筛选项`);let i;B(()=>{let t=Ot.value[e]??``,r=t==null?``:String(t);Object.is(i,r)||(i=r,te(n,r))});let a=t=>{let n=t=>{kt({...Ot.value,[e]:t.target.value}),c()};typeof n==`function`&&n(t)};return n.addEventListener(`input`,a),r(()=>n.removeEventListener(`input`,a)),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>i(Object.assign(e=>{let t=M();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),B(()=>{let n=Tn(f.get(),t,e,s.get());A(()=>v(n,h,p))}),m(y,g,()=>f.get().length===0?{__rue_compiled_branch_key:!0,create:()=>i(Object.assign(e=>{let t=O(`div`,e);return t.className=`text-sm opacity-60`,E(t,D(`暂无匹配项`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>i(Object.assign(e=>{let t=M();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),B(()=>{let n=t.filterOnClose===!1?``:k(()=>{let n=M(),r=L(`div`,n);_(n,r),l(r,`mt-3 flex justify-end gap-2`);let i=L(`button`,r);_(r,i),l(i,`btn btn-ghost btn-xs`);let a=n=>{let r=()=>xn(e,t,{confirm:!0});typeof r==`function`&&r(n)};i.addEventListener(`click`,a),u(()=>i.removeEventListener(`click`,a));let o=z(`rue:slot:anchor`);_(i,o),B(()=>{let e=dt.filterReset;A(()=>v(e,i,o))});let s=L(`button`,r);_(r,s),l(s,`btn btn-primary btn-xs`);let c=n=>{let r=()=>bn(e,t);typeof r==`function`&&r(n)};s.addEventListener(`click`,c),u(()=>s.removeEventListener(`click`,c));let d=z(`rue:slot:anchor`);return _(s,d),B(()=>{let e=dt.filterConfirm;A(()=>v(e,s,d))}),n},!0);A(()=>v(n,x,b))}),a}):t.filterDropdown},Dn=(e,t)=>{let n=e.showSorterTooltip??ot;if(n===!1)return;if(typeof n==`object`&&n?.title!==void 0)return n.title;let r=mn(t,e);return r===`ascend`?dt.triggerAsc:r===`descend`?dt.triggerDesc:dt.cancelSort},On=(e,t)=>{let{titleNode:n,__rue_phase2_titleNode:r,filtered:i,__rue_phase2_filtered:a,sortOrder:o,draftValues:s,__rue_phase2_draftValues:c,filterSearchValue:d,visible:f,__rue_phase2_visible:m,menuItems:h,__rue_phase2_menuItems:y,sorterTooltipTitle:b,__rue_phase2_sorterTooltipTitle:ee,_dropdownOpen:S,_dropdownOnOpenChange:C,_dropdownChildren:w,_dropdownContent:T,_dropdownOverlay:E,_dropdownItems:te,_dropdownMenu:D,_dropdownPopupRender:O,dropdownProps:ne}=V(`useSetup:0:0`,()=>{let n=p(()=>$t(t,e));n.get();let r=n,i=p(()=>t.filtered??(j[e]??[]).length>0);i.get();let a=i,o=g.get(e)?.order??null,s=p(()=>gn(e,t));s.get();let c=s,l=Ot.value[e]??``,u=p(()=>hn(t,e));u.get();let d=u,f=p(()=>wn(t.filters??[],l,t));f.get();let m=f,h=p(()=>Dn(t,e));h.get();let _=h,{open:v,onOpenChange:y,children:b,content:x,overlay:ee,items:S,menu:C,popupRender:w,...T}=t.filterDropdownProps??{};return{titleNode:n,__rue_phase2_titleNode:r,filtered:i,__rue_phase2_filtered:a,sortOrder:o,draftValues:s,__rue_phase2_draftValues:c,filterSearchValue:l,visible:u,__rue_phase2_visible:d,menuItems:f,__rue_phase2_menuItems:m,sorterTooltipTitle:h,__rue_phase2_sorterTooltipTitle:_,_dropdownOpen:v,_dropdownOnOpenChange:y,_dropdownChildren:b,_dropdownContent:x,_dropdownOverlay:ee,_dropdownItems:S,_dropdownMenu:C,_dropdownPopupRender:w,dropdownProps:T}});return k(r=>{let a=pe().content.cloneNode(!0).firstChild,c=a.childNodes[0].childNodes[0],d=c.parentNode,p=a.childNodes[1],m=p.parentNode,g=a.childNodes[2],y=g.parentNode;return B(()=>{let e=n.get();A(()=>v(e,d,c))}),B(()=>{let n=t.sorter?k(()=>{let n=M(),r=L(`button`,n);_(n,r),N(r,`type`,`button`),B(()=>{N(r,`aria-label`,String(`sort-${e}`))}),B(()=>{N(r,`title`,String(b.get()))}),l(r,`btn btn-ghost btn-xs h-auto min-h-0 px-1 py-0.5`);let i=n=>{let r=n=>{n.stopPropagation(),nn(e,mn(e,t))};typeof r==`function`&&r(n)};r.addEventListener(`click`,i),u(()=>r.removeEventListener(`click`,i));let a=z(`rue:slot:anchor`);return _(r,a),B(()=>{let e=Cn(t,o);A(()=>v(e,r,a))}),n},!0):``;A(()=>v(n,m,p))}),B(()=>{let n=Array.isArray(t.filters)&&t.filters.length>0||t.filterDropdown!==void 0?(()=>{let n=x(U.Trigger,()=>({as:`button`,type:`button`,"aria-label":`filter-${e}`,className:G(`btn btn-ghost btn-xs h-auto min-h-0 px-1 py-0.5 select-none`,i.get()?`text-base-content`:`opacity-40`),children:Sn(t,i.get())})),r=x(U.Content,()=>({className:`dropdown-content z-50 mt-2 p-0`,onClick:e=>e.stopPropagation(),children:En(e,t,f.get(),s.get(),h.get())}));return x(U,()=>({trigger:`click`,open:f.get(),closeOnClick:!1,align:`start`,...ne,onOpenChange:n=>vn(e,t,n),children:[n,r]}))})():``;A(()=>v(n,y,g))}),a})},kn=e=>{let{cellProps:t,__rue_phase2_cellProps:n,children:r,__rue_phase2_children:i,isLeaf:a,__rue_phase2_isLeaf:o,leaf:c,__rue_phase2_leaf:u,key:d,__rue_phase2_key:f,colSpan:m,__rue_phase2_colSpan:h,rowSpan:g,__rue_phase2_rowSpan:_}=V(`useSetup:0:0`,()=>{let t=p(()=>e.meta.column.onHeaderCell&&e.meta.column.onHeaderCell(e.meta.column,e.meta.index)||{});t.get();let n=t,r=p(()=>Ae(e.meta.column));r.get();let i=r,a=p(()=>i.get().length===0);a.get();let o=a,c=p(()=>o.get()?s.get(e.meta.key)??null:null);c.get();let l=c,u=p(()=>l.get()?.key??e.meta.key);u.get();let d=u,f=p(()=>n.get().colSpan??e.meta.colSpan);f.get();let m=f,h=p(()=>n.get().rowSpan??e.meta.rowSpan);return h.get(),{cellProps:t,__rue_phase2_cellProps:n,children:r,__rue_phase2_children:i,isLeaf:a,__rue_phase2_isLeaf:o,leaf:c,__rue_phase2_leaf:l,key:u,__rue_phase2_key:d,colSpan:f,__rue_phase2_colSpan:m,rowSpan:h,__rue_phase2_rowSpan:h}});if(m.get()===0||g.get()===0)return null;let{className:y,style:b,...x}=t.get(),ee=G(X.get().headerCell,Oe(e.meta.column.align),e.meta.column.className,y),S=K(Z.get().headerCell,e.meta.column.width||e.meta.column.minWidth?{...e.meta.column.width?{width:e.meta.column.width}:{},...e.meta.column.minWidth?{minWidth:e.meta.column.minWidth}:{}}:void 0,b),C=c.get()?On(d.get(),e.meta.column):$t(e.meta.column,e.meta.key);return k(e=>{let t=me().content.cloneNode(!0).firstChild,n=t,r=t.childNodes[0],i=r.parentNode;return B(()=>{N(n,`colSpan`,String(m.get()))}),B(()=>{N(n,`rowSpan`,String(g.get()))}),B(()=>{l(n,ee)}),B(()=>{w(n,S)}),B(()=>{ne(n,x,[])}),B(()=>{let e=C;A(()=>v(e,i,r))}),t})},An=(e,t)=>{if(!W)return null;let n=W.getCheckboxProps?{...W.getCheckboxProps(e.record)}:{};W.disabled&&(n.disabled=!0);let a=xt.has(e.key),o=W.type===`radio`?`radio`:`checkbox`,s=t=>{let n=t.target;if(W.type===`radio`){ln([e.key],{type:`radio`},e.record,!0,t);return}let r=W.selectedRowKeys??Pt.value,i=new Set(r);n.checked?i.add(e.key):i.delete(e.key),ln(Array.from(i),{type:`checkbox`},e.record,n.checked,t)},c=i(Object.assign(e=>{let t=he().content.cloneNode(!0).firstChild,i=t,c=t.childNodes[0],l=e=>{let t=e=>e.stopPropagation();typeof t==`function`&&t(e)};i.addEventListener(`click`,l),r(()=>i.removeEventListener(`click`,l));let u;B(()=>{let e=W.type===`radio`?`radio`:`checkbox`;Object.is(u,e)||(u=e,e==null||e===!1?c.removeAttribute(`type`):c.setAttribute(`type`,String(e)))});let d;B(()=>{let e=o,t=e==null?``:String(e);Object.is(d,t)||(d=t,c.className=t)});let f;B(()=>{let e=!!a;Object.is(f,e)||(f=e,c.checked=e)});let p=e=>{let t=s;typeof t==`function`&&t(e)};return c.addEventListener(`change`,p),r(()=>c.removeEventListener(`change`,p)),ae(c,()=>n,[]),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),l=W.renderCell?W.renderCell(a,e.record,t,c):c,u=b&&W.fixed?`th`:`td`;return x(u,()=>({className:G(X.get().cell,Oe(Vt)),style:K(Z.get().cell,W.columnWidth?{width:W.columnWidth}:void 0),children:l}))},jn=(e,t,n)=>n.enabled?q?.expandIcon?q.expandIcon({expanded:n.expanded,expandable:n.enabled,record:e.record,onExpand:(n,r)=>{r?.stopPropagation?.(),fn(e,t)}}):i(Object.assign(a=>{let o=ge().content.cloneNode(!0).firstChild,s=o,c=o.childNodes[0],l=c.parentNode;s.className=`btn btn-ghost btn-xs`;let u=n=>{let r=n=>{n.stopPropagation(),fn(e,t)};typeof r==`function`&&r(n)};return s.addEventListener(`click`,u),r(()=>s.removeEventListener(`click`,u)),m(l,c,()=>n.expanded?{__rue_compiled_branch_key:!0,create:()=>i(Object.assign(e=>{let t=D(`-`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>i(Object.assign(e=>{let t=D(`+`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),{__rue_compiled_host:o,__rue_compiled_roots:[o]}},{__rue_compiled_explicit_roots:!0})):null,Mn={total:Ge,page:pt,pageSize:tt},Nn=vt.slice();Nn.total=Ge;let Pn=Y?x(Ze,()=>({render:Y,data:vt})):null,Fn=et?x(Ze,()=>({render:et,data:vt})):null,In=Je($),Ln=J&&!($?.hideOnSinglePage&&ft<=1)&&(In.length!==1||In[0]!==`none`),Rn=e=>i(Object.assign(t=>{let a=_e().content.cloneNode(!0).firstChild,o=a,s=a.childNodes[0],c=a.childNodes[2],l=a.childNodes[1],u=l.parentNode,d;B(()=>{let t=e;Object.is(d,t)||(d=t,t==null||t===!1?o.removeAttribute(`data-rue-table-pager`):o.setAttribute(`data-rue-table-pager`,String(t)))});let p;B(()=>{let t=G(`flex items-center gap-2 p-2`,Ye(e),X.get().pager),n=t==null?``:String(t);Object.is(p,n)||(p=n,o.className=n)});let m;B(()=>{let e=Z.get().pager;Object.is(m,e)||(m=e,w(o,e))}),s.className=`btn btn-ghost btn-xs`;let g;B(()=>{let e=pt<=1;Object.is(g,e)||(g=e,s.disabled=e)});let _=e=>{let t=()=>an(pt-1);typeof t==`function`&&t(e)};s.addEventListener(`click`,_),r(()=>s.removeEventListener(`click`,_)),c.className=`btn btn-ghost btn-xs`;let v;B(()=>{let e=pt>=ft;Object.is(v,e)||(v=e,c.disabled=e)});let y=e=>{let t=()=>an(pt+1);typeof t==`function`&&t(e)};c.addEventListener(`click`,y),r(()=>c.removeEventListener(`click`,y));let b=[];return B(()=>{let t=Array.from({length:ft})||[];b=n(u,l,b,t,(t,n)=>`page-${e}-${n+1}`,(e,t)=>{let n=h(e),a=h(t);return f((e,t,n)=>ie(e,n,()=>i(Object.assign(e=>{let t=O(`button`,e),n;B(()=>{let e=`btn btn-ghost btn-xs${pt===a.get()+1?` btn-active`:``}`,r=e==null?``:String(e);Object.is(n,r)||(n=r,t.className=r)});let i=e=>{let t=()=>an(a.get()+1);typeof t==`function`&&t(e)};t.addEventListener(`click`,i),r(()=>t.removeEventListener(`click`,i));let o=D(``);return E(t,o),C(o,()=>a.get()+1),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(r,i)=>{e=r,t=i,n.set(r),a.set(i)})})}),{__rue_compiled_host:a,__rue_compiled_roots:[a]}},{__rue_compiled_explicit_roots:!0})),zn=W?.getTitleCheckboxProps?.()??{},Bn=W?.type===`radio`||W?.hideSelectAll?null:i(Object.assign(e=>{let t=ve().content.cloneNode(!0).firstChild,n=t.childNodes[0];n.setAttribute(`type`,`checkbox`),n.className=`checkbox`;let i;B(()=>{let e=!!sn;Object.is(i,e)||(i=e,n.checked=e)});let a;B(()=>{let e=cn?`mixed`:sn?`true`:`false`;Object.is(a,e)||(a=e,e==null||e===!1?n.removeAttribute(`aria-checked`):n.setAttribute(`aria-checked`,String(e)))});let o;B(()=>{let e=!!(W?.disabled||on.length===0);Object.is(o,e)||(o=e,n.disabled=e)});let s=e=>{let t=e=>un(e.target.checked);typeof t==`function`&&t(e)};return n.addEventListener(`change`,s),r(()=>n.removeEventListener(`change`,s)),ae(n,()=>zn,[]),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),Vn=W?.columnTitle===void 0?Bn:typeof W.columnTitle==`function`?W.columnTitle(Bn):W.columnTitle,Hn=e=>{ut&&ut(e)};return k(t=>{let r=ye().content.cloneNode(!0).firstChild,s=r,c=r.childNodes[2],d=r.childNodes[2].childNodes[1],p=r.childNodes[0],m=p.parentNode,g=r.childNodes[1],C=g.parentNode,T=r.childNodes[2].childNodes[0],te=T.parentNode,D=r.childNodes[2].childNodes[1].childNodes[0],j=D.parentNode,F=r.childNodes[2].childNodes[1].childNodes[1],I=F.parentNode,R=r.childNodes[2].childNodes[2],V=R.parentNode,ae=r.childNodes[3],H=ae.parentNode,oe=r.childNodes[4],se=oe.parentNode;y(s,()=>e=>{jt.value=e}),B(()=>{N(s,`data-rue-table-root`,String(St.value))}),B(()=>{N(s,`data-rue-table-scroll`,String(St.value))}),B(()=>{N(s,`data-rue-table-version`,String(Mt.value))}),B(()=>{l(s,G(`relative`,S?`rounded-box border border-base-300 bg-base-100`:void 0,X.get().root,Jt))}),B(()=>{let e=K(Z.get().root,qt);w(s,e)});let U=e=>{let t=Hn;typeof t==`function`&&t(e)};return s.addEventListener(`scroll`,U),u(()=>s.removeEventListener(`scroll`,U)),B(()=>{l(c,bt)}),B(()=>{w(c,Yt)}),B(()=>{N(c,`data-rue-table-id`,String(St.value))}),B(()=>{l(d,X.get().tbody)}),B(()=>{let e=Z.get().tbody;w(d,e)}),B(()=>{let e=Ln?In.filter(e=>e.startsWith(`top`)).map(Rn):``;A(()=>v(e,m,p))}),B(()=>{let e=Pn?k(()=>{let e=M(),t=L(`div`,e);_(e,t),B(()=>{l(t,G(`p-2`,X.get().title))}),B(()=>{let e=Z.get().title;w(t,e)});let n=z(`rue:slot:anchor`);return _(t,n),B(()=>{let e=Pn;A(()=>v(e,t,n))}),e},!0):``;A(()=>v(e,C,g))}),B(()=>{let e=xe?k(()=>{let e=M(),t=L(`thead`,e);_(e,t),B(()=>{l(t,X.get().thead)}),B(()=>{let e=Z.get().thead;w(t,e)});let n=z(`rue:slot:anchor`);return _(t,n),B(()=>{let e=a.map((e,t)=>{let{className:n,style:r,...i}=Ce&&Ce(e.map(e=>e.column),t)||{},o=[];return e.forEach(e=>{o.push(x(kn,()=>({meta:e,level:t})))}),k(e=>{let s=L(`tr`,e);B(()=>{l(s,G(X.get().headerRow,n))}),B(()=>{let e=K(Z.get().headerRow,r);w(s,e)}),B(()=>{ne(s,i,[])});let c=z(`rue:slot:anchor`);_(s,c),B(()=>{let e=t===0&&Wt?k(()=>{let e=M(),t=L(`th`,e);_(e,t),B(()=>{N(t,`rowSpan`,String(a.length))}),B(()=>{l(t,G(X.get().headerCell,Oe(`center`)))}),B(()=>{let e=K(Z.get().headerCell,q?.columnWidth?{width:q.columnWidth}:void 0);w(t,e)});let n=ee(t);return _(t,n),B(()=>{P(n,q?.columnTitle)}),e},!0):``;A(()=>v(e,s,c))});let u=z(`rue:slot:anchor`);_(s,u),B(()=>{let e=t===0&&Ht?k(()=>{let e=M(),t=L(`th`,e);_(e,t),B(()=>{N(t,`rowSpan`,String(a.length))}),B(()=>{l(t,G(X.get().headerCell,Oe(Vt)))}),B(()=>{let e=K(Z.get().headerCell,W?.columnWidth?{width:W.columnWidth}:void 0);w(t,e)});let n=z(`rue:slot:anchor`);return _(t,n),B(()=>{let e=Vn;A(()=>v(e,t,n))}),e},!0):``;A(()=>v(e,s,u))});let d=z(`rue:slot:anchor`);return _(s,d),B(()=>{let e=o;A(()=>v(e,s,d))}),s})});A(()=>v(e,t,n))}),e},!0):``;A(()=>v(e,te,T))}),B(()=>{let e=_t.map((e,t)=>{let n=dn(e,t),{className:r,style:i,onClick:a,...s}=Se&&Se(e.record,t)||{},c=typeof je==`function`?je(e.record,t):``,d=nt?rt||`hover:bg-base-200`:``,f=r=>{a&&a(r),!(!q?.expandRowByClick||!n.enabled)&&((r?.target)?.closest(`button, input, a, label`)||fn(e,t))},p=Ut&&n.hasExpandedRowRender&&n.expanded,m=p?typeof q?.expandedRowClassName==`function`?q.expandedRowClassName(e.record,t,e.indent):q?.expandedRowClassName:void 0;return(()=>{let a=k(()=>{let a=M(),p=L(`tr`,a);_(a,p),B(()=>{N(p,`data-rue-table-row-key`,String(String(e.key)))}),B(()=>{ne(p,s,[`onClick`,`className`,`style`])});let m=e=>{let t=f;typeof t==`function`&&t(e)};p.addEventListener(`click`,m),u(()=>p.removeEventListener(`click`,m)),B(()=>{l(p,G(X.get().bodyRow,r,c,d))}),B(()=>{let e=K(Z.get().bodyRow,i);w(p,e)});let h=z(`rue:slot:anchor`);_(p,h),B(()=>{let r=Wt?k(()=>{let r=M(),i=L(`td`,r);_(r,i),B(()=>{l(i,G(X.get().cell,Oe(`center`)))}),B(()=>{let t=K(Z.get().cell,q?.columnWidth?{width:q.columnWidth}:void 0,e.indent>0?{paddingLeft:`${e.indent*ht}px`}:void 0);w(i,t)});let a=z(`rue:slot:anchor`);return _(i,a),B(()=>{let r=jn(e,t,n);A(()=>v(r,i,a))}),r},!0):``;A(()=>v(r,p,h))});let g=z(`rue:slot:anchor`);_(p,g),B(()=>{let n=Ht?An(e,t):``;A(()=>v(n,p,g))});let y=z(`rue:slot:anchor`);return _(p,y),B(()=>{let r=o.map((r,i)=>{let a=De(e.record,r.column.dataIndex),o=r.column.render?r.column.render(a,e.record,t):a,s=r.column.onCell&&r.column.onCell(e.record,t)||{},{className:c,style:u,...d}=s,f=s.colSpan??1,p=s.rowSpan??1;if(f===0||p===0)return null;let m=!Wt&&i===0,h=r.column.rowScope||b&&Fe(r.column)?`th`:`td`,g=G(X.get().cell,Oe(r.column.align),r.column.className,r.column.ellipsis?`truncate`:void 0,c),y=K(Z.get().cell,r.column.width||r.column.minWidth?{...r.column.width?{width:r.column.width}:{},...r.column.minWidth?{minWidth:r.column.minWidth}:{}}:void 0,m&&e.indent>0?{paddingLeft:`${e.indent*ht}px`}:void 0,u),ee=r.column.ellipsis&&Ke(r.column.ellipsis)&&$e(o)?String(o):void 0,S=m?k(()=>{let i=M(),a=L(`div`,i);_(i,a),l(a,`flex items-center gap-2`);let s=z(`rue:slot:anchor`);_(a,s),B(()=>{let r=jn(e,t,n);A(()=>v(r,a,s))});let c=L(`span`,a);_(a,c),B(()=>{l(c,r.column.ellipsis?`truncate`:void 0)});let u=z(`rue:slot:anchor`);return _(c,u),B(()=>{let e=o;A(()=>v(e,c,u))}),i},!0):o;return x(h,()=>({key:`cell-${String(e.key)}-${r.key}-${i}`,className:g,style:y,title:ee,colSpan:f,rowSpan:p,scope:r.column.rowScope,"data-rue-table-indent":m&&e.indent>0?String(e.indent):void 0,...d,children:S}))});A(()=>v(r,p,y))}),a}),h=k(()=>{let n=M(),r=L(`tr`,n);_(n,r),B(()=>{l(r,m)});let i=L(`td`,r);_(r,i),B(()=>{N(i,`colSpan`,String(Kt))});let a=z(`rue:component:anchor`);return _(i,a),B(()=>{let n=x(Qe,()=>({render:q?.expandedRowRender,record:e.record,index:t,indent:e.indent,expanded:!0}));A(()=>v(n,i,a))}),n});return[a,p?h:void 0]})()});A(()=>v(e,j,D))}),B(()=>{let e=_t.length===0?k(()=>{let e=M(),t=L(`tr`,e);_(e,t);let n=L(`td`,t);_(t,n),B(()=>{N(n,`colSpan`,String(Kt))}),B(()=>{l(n,G(X.get().empty,Oe(`center`)))}),B(()=>{let e=Z.get().empty;w(n,e)});let r=z(`rue:slot:anchor`);return _(n,r),B(()=>{let e=qe===void 0?dt.emptyText:qe;A(()=>v(e,n,r))}),e},!0):``;A(()=>v(e,I,F))}),B(()=>{let t=typeof Me==`function`||Ln&&In.some(e=>e.startsWith(`bottom`))?k(()=>{let t=M(),r=L(`tfoot`,t);_(t,r),B(()=>{l(r,X.get().tfoot)}),B(()=>{let e=Z.get().tfoot;w(r,e)});let a=z(`rue:slot:anchor`);return _(r,a),B(()=>{let e=typeof Me==`function`?k(()=>{let e=M(),t=L(`tr`,e);_(e,t),B(()=>{l(t,X.get().summary)}),B(()=>{let e=Z.get().summary;w(t,e)});let n=L(`td`,t);_(t,n),B(()=>{N(n,`colSpan`,String(Kt))});let r=z(`rue:slot:anchor`);return _(n,r),B(()=>{let e=Me(Nn,Mn);A(()=>v(e,n,r))}),e},!0):``;A(()=>v(e,r,a))}),e(()=>Ln?{__rue_compiled_branch_key:!0,create:()=>i(Object.assign(e=>{let t=M(),r=re(`rue:list:end`);E(t,r);let a=[];return B(()=>{let e=In.filter(e=>e.startsWith(`bottom`))||[];a=n(r.parentNode,r,a,e,(e,t)=>`pager-row-${e}`,(e,t)=>{let n=h(e),r=h(t);return f((e,t,r)=>ie(e,r,()=>i(Object.assign(e=>{let t=O(`tr`,e),r=O(`td`,t);E(t,r);let i;B(()=>{let e=Kt;Object.is(i,e)||(i=e,e==null||e===!1?r.removeAttribute(`colSpan`):r.setAttribute(`colSpan`,String(e)))});let a=re(`rue:compiled-slot`);return E(r,a),B(()=>{let e=Rn(n.get());A(()=>v(e,r,a))}),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(i,a)=>{e=i,t=a,n.set(i),r.set(a)})})}),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>i(Object.assign(e=>{let t=M();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}).__rue_compiled_mount(r),t},!0):``;A(()=>v(t,V,R))}),B(()=>{let e=Fn?k(()=>{let e=M(),t=L(`div`,e);_(e,t),B(()=>{l(t,G(`p-2`,X.get().footer))}),B(()=>{let e=Z.get().footer;w(t,e)});let n=z(`rue:slot:anchor`);return _(t,n),B(()=>{let e=Fn;A(()=>v(e,t,n))}),e},!0):``;A(()=>v(e,H,ae))}),B(()=>{let e=mt.spinning?k(()=>{let e=M(),t=L(`div`,e);_(e,t),B(()=>{l(t,G(`absolute inset-0 z-20 flex flex-col items-center justify-center gap-2 rounded-box bg-base-100/70`,X.get().loading))}),B(()=>{let e=Z.get().loading;w(t,e)});let n=L(`span`,t);_(t,n),l(n,`loading loading-spinner loading-md`);let r=z(`rue:slot:anchor`);return _(t,r),B(()=>{let e=mt.tip?k(()=>{let e=M(),t=L(`div`,e);_(e,t),l(t,`text-sm opacity-70`);let n=z(`rue:slot:anchor`);return _(t,n),B(()=>{let e=mt.tip;A(()=>v(e,t,n))}),e},!0):``;A(()=>v(e,t,r))}),e},!0):``;A(()=>v(e,se,oe))}),r})}return i(Object.assign(e=>{let t=be().content.cloneNode(!0).firstChild,n=t,r;B(()=>{let e=bt,t=e==null?``:String(e);Object.is(r,t)||(r=t,n.className=t)});let i;return B(()=>{let e=Z.get().table;Object.is(i,e)||(i=e,w(n,e))}),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),Y=Object.assign(J,{Head:e=>{let t=h(e.children),n=h(e.className);return F(i(Object.assign(e=>{let r=xe().content.cloneNode(!0).firstChild,i=r,a=r.childNodes[0],o=a.parentNode,s;return B(()=>{let e=n.get()||void 0,t=e==null?``:String(e);Object.is(s,t)||(s=t,i.className=t)}),S({parent:o,before:a},()=>t.get(),()=>({})),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})),e=>H(()=>{t.set(e.children),n.set(e.className)}),()=>e)},Body:e=>{let t=h(e.children),n=h(e.className);return F(i(Object.assign(e=>{let r=Se().content.cloneNode(!0).firstChild,i=r,a=r.childNodes[0],o=a.parentNode,s;return B(()=>{let e=n.get()||void 0,t=e==null?``:String(e);Object.is(s,t)||(s=t,i.className=t)}),S({parent:o,before:a},()=>t.get(),()=>({})),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})),e=>H(()=>{t.set(e.children),n.set(e.className)}),()=>e)},Foot:e=>{let t=h(e.children),n=h(e.className);return F(i(Object.assign(e=>{let r=Ce().content.cloneNode(!0).firstChild,i=r,a=r.childNodes[0],o=a.parentNode,s;return B(()=>{let e=n.get()||void 0,t=e==null?``:String(e);Object.is(s,t)||(s=t,i.className=t)}),S({parent:o,before:a},()=>t.get(),()=>({})),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})),e=>H(()=>{t.set(e.children),n.set(e.className)}),()=>e)},TR:e=>{let t=h(e.children),n=h(e.className);return F(i(Object.assign(e=>{let r=we().content.cloneNode(!0).firstChild,i=r,a=r.childNodes[0],o=a.parentNode,s;return B(()=>{let e=n.get()||void 0,t=e==null?``:String(e);Object.is(s,t)||(s=t,i.className=t)}),S({parent:o,before:a},()=>t.get(),()=>({})),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})),e=>H(()=>{t.set(e.children),n.set(e.className)}),()=>e)},TH:e=>{let t=h(e.children),n=h(e.className);return F(i(Object.assign(e=>{let r=me().content.cloneNode(!0).firstChild,i=r,a=r.childNodes[0],o=a.parentNode,s;return B(()=>{let e=n.get()||void 0,t=e==null?``:String(e);Object.is(s,t)||(s=t,i.className=t)}),S({parent:o,before:a},()=>t.get(),()=>({})),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})),e=>H(()=>{t.set(e.children),n.set(e.className)}),()=>e)},TD:e=>{let t=h(e.children),n=h(e.className);return F(i(Object.assign(e=>{let r=W().content.cloneNode(!0).firstChild,i=r,a=r.childNodes[0],o=a.parentNode,s;return B(()=>{let e=n.get()||void 0,t=e==null?``:String(e);Object.is(s,t)||(s=t,i.className=t)}),S({parent:o,before:a},()=>t.get(),()=>({})),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})),e=>H(()=>{t.set(e.children),n.set(e.className)}),()=>e)}}),et=b(`<div class="text-sm leading-6"><div>团队：<!--rue:text-hole:0--></div><div>地址：<!--rue:text-hole:1--></div></div>`),tt=b(`<div class="flex justify-between text-sm"><span>当前行数：<!--rue:text-hole:0--></span><span>平均绩效： <!--rue:text-hole:1--></span></div>`),nt=b(`<div class="text-sm font-medium">成员列表（当前页 <!--rue:text-hole:0--> 行）</div>`),rt=b(`<div class="overflow-x-auto rounded-box border border-base-300 bg-base-100 p-4"><!--rue:opaque-hole:0--></div>`),it=b(`<div class="grid gap-4 lg:grid-cols-2"><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="mb-3 text-sm font-medium">带背景与激活行</div><!--rue:opaque-hole:0--></div><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="mb-3 text-sm font-medium">hover / zebra / xs</div><!--rue:opaque-hole:1--></div></div>`),at=b(`<div class="space-y-4 rounded-box border border-base-300 bg-base-100 p-4"><div class="flex flex-wrap items-center gap-2 text-sm"><!--rue:text-hole:0--><button class="btn btn-ghost btn-xs">清空排序</button><button>只看 Jim</button><button>只看 London</button><button>Jim + London</button><button class="btn btn-ghost btn-xs">清空筛选</button><button class="btn btn-ghost btn-xs">清空全部</button><span class="opacity-70">筛选：Name <!--rue:text-hole:1--> / Address <!--rue:text-hole:2-->； 当前排序： <!--rue:text-hole:3--> / <!--rue:text-hole:4--></span></div><!--rue:opaque-hole:5--></div>`),ot=b(`<div class="space-y-4 rounded-box border border-base-300 bg-base-100 p-4"><div class="flex flex-wrap gap-2 text-sm"><button class="btn btn-ghost btn-xs">语文 + 数学降序</button><button class="btn btn-ghost btn-xs">三科降序</button><button class="btn btn-ghost btn-xs">语文升序 + 英语降序</button><button class="btn btn-ghost btn-xs">清空排序</button></div><div class="flex flex-wrap items-center gap-2 text-sm"><!--rue:text-hole:0--><span class="opacity-70">当前优先级：<!--rue:text-hole:1--></span></div><!--rue:opaque-hole:2--></div>`),st=b(`<div class="space-y-4 rounded-box border border-base-300 bg-base-100 p-4"><div class="flex flex-wrap gap-2 text-sm"><!--rue:text-hole:0--></div><!--rue:opaque-hole:1--></div>`),ct=b(`<div class="grid gap-4 lg:grid-cols-2"><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="mb-3 text-sm">多选：当前 <!--rue:text-hole:0--></div><!--rue:opaque-hole:1--></div><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="mb-3 text-sm">单选：当前 <!--rue:text-hole:2--></div><!--rue:opaque-hole:3--></div></div>`),lt=b(`<div class="grid gap-4 lg:grid-cols-2"><div class="rounded-box border border-base-300 bg-base-100 p-4"><!--rue:opaque-hole:0--></div><div class="rounded-box border border-base-300 bg-base-100 p-4"><!--rue:opaque-hole:1--></div></div>`),ut=b(`<div class="rounded-box border border-base-300 bg-base-100 p-4"><!--rue:opaque-hole:0--></div>`),dt=b(`<div class="space-y-4 rounded-box border border-base-300 bg-base-100 p-4"><div class="flex flex-wrap gap-2 text-sm"><button class="btn btn-ghost btn-xs"><!--rue:text-hole:0--></button><span>最近操作：<!--rue:text-hole:1--></span></div><!--rue:opaque-hole:2--></div>`),X=b(`<div class="grid gap-4 xl:grid-cols-2"><div class="h-72 overflow-auto rounded-box border border-base-300 bg-base-100 p-4"><!--rue:opaque-hole:0--></div><div class="rounded-box border border-base-300 bg-base-100 p-4 overflow-x-auto"><!--rue:opaque-hole:1--></div></div>`),ft=b(`<div class="component-preview not-prose text-base-content my-6 lg:my-12"><div class="flex flex-wrap items-start justify-between gap-3"><div><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># <!--rue:text-hole:0--></h2><!--rue:text-hole:1--></div></div><!--rue:opaque-hole:2--><!--rue:text-hole:3--></div>`),Z=b(`<div class="not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100"><table class="table table-zebra"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><!--rue:text-hole:0--></tbody></table></div>`),pt=b(`<button class="btn btn-ghost btn-xs">查看</button>`),mt=b(`<div class="max-w-none prose prose-sm md:prose-base"><h1>Table 表格</h1><p>Rue Table 现在同时覆盖数据驱动表格和 daisyUI 风格的静态表格写法，使用 Rue 当前视觉风格，并补充更完整的 排序、筛选、分页、选择、展开与分组表头能力。</p><p>可以先从基础用法进入，再根据场景查看筛选排序、选择模式、滚动布局与分组表头。静态样式写法仍然提供，可继续 使用 <code>Table.Head</code>、<code>Table.Body</code> 等复合组件。</p><h2>何时使用</h2><ul><li>需要展示结构化列表数据，并同时提供排序、筛选、分页等交互。</li><li>适合使用 Rue / daisyUI 的表格视觉风格，同时使用数据表式 API。</li><li>基础简单静态表格，也有复杂后台表格，想统一在一个组件里处理。</li></ul><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--><!--rue:opaque-hole:5--><!--rue:opaque-hole:6--><!--rue:opaque-hole:7--><!--rue:opaque-hole:8--><!--rue:opaque-hole:9--><h2 id="table-api">API</h2><p>当前页面只列出 Rue Table 当前最常用的配置项，优先对应实际使用场景。</p><h3>Table</h3><!--rue:opaque-hole:10--><h3>Column</h3><!--rue:opaque-hole:11--><h3>rowSelection</h3><!--rue:opaque-hole:12--><h3>expandable</h3><!--rue:opaque-hole:13--><h2>FAQ</h2><h3>数据驱动和静态结构怎么选？</h3><p>需要排序、筛选、分页、选择、展开时优先使用 <code>columns + dataSource</code> 。只想快速输出结构化样式， 或需要完全手写表格结构时，可以使用复合组件写法即可。</p><h3>为什么筛选或排序后会回到第一页？</h3><p>这是为了避免当前页在筛选后没有数据。如果你希望完全自行控制分页，把 <code>pagination.current</code> 和<code>onChange</code> 一起受控即可。</p><h3>固定列和 pinCols 的关系是什么？</h3><p><code>pinCols</code> 负责启用 daisyUI 的固定列视觉能力，具体哪一列固定则由列上的 <code>fixedCol</code> 或 <code>fixed</code> 控制。静态结构写法中，通常把固定列单元格写成 <code>TH</code> 会更自然。</p></div>`),Q=e=>k(t=>{let n=ft().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[0].childNodes[0].childNodes[1],a=r.parentNode,c=n.childNodes[0].childNodes[0].childNodes[1],l=c.parentNode,u=n.childNodes[1],d=u.parentNode,f=n.childNodes[2],p=f.parentNode;S({parent:a,before:r},()=>e.title,()=>({})),m(l,c,()=>e.summary?{__rue_compiled_branch_key:!0,create:()=>i(Object.assign(t=>{let n=O(`p`,t);n.className=`m-0 text-sm opacity-70`;let r=re(`rue:compiled-slot`);return E(n,r),S({parent:n,before:r},()=>e.summary,()=>({})),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>i(Object.assign(e=>{let t=M();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))});let h=j(d);return s(h,se,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`})),d.insertBefore(h,u),B(()=>{let t=e.tab.value===`preview`?e.preview():o(oe,()=>({className:`mt-2`,lang:`tsx`,code:e.code}));A(()=>v(t,p,f))}),n}),ht=e=>{let t=h(e.rows);return F(i(Object.assign(e=>{let r=Z().content.cloneNode(!0).firstChild,a=r.childNodes[0].childNodes[1].childNodes[0],o=a.parentNode,s=[];return B(()=>{let e=t.get()||[];s=n(o,a,s,e,(e,t)=>e.prop,(e,t)=>{let n=h(e),r=h(t);return f((e,t,r)=>ie(e,r,()=>i(Object.assign(e=>{let t=O(`tr`,e),r=O(`td`,t);E(t,r);let i=O(`code`,r);E(r,i);let a=D(``);E(i,a),C(a,()=>n.get().prop);let o=O(`td`,t);E(t,o);let s=D(``);E(o,s),C(s,()=>n.get().description);let c=O(`td`,t);E(t,c);let l=O(`code`,c);E(c,l);let u=D(``);E(l,u),C(u,()=>n.get().type);let d=O(`td`,t);E(t,d);let f=O(`code`,d);E(d,f);let p=D(``);return E(f,p),C(p,()=>n.get().defaultValue),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(i,a)=>{e=i,t=a,n.set(i),r.set(a)})})}),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})),e=>H(()=>{t.set(e.rows)}),()=>e)},gt=[{key:`1`,name:`林青`,age:28,city:`杭州`,role:`设计工程师`,team:`体验平台`,status:`active`,score:92,salary:26e3,visits:148,address:`云谷路 88 号`},{key:`2`,name:`周宁`,age:34,city:`上海`,role:`前端工程师`,team:`设计系统`,status:`active`,score:88,salary:31e3,visits:203,address:`武康路 12 号`},{key:`3`,name:`刘溪`,age:41,city:`深圳`,role:`产品经理`,team:`商业化`,status:`leave`,score:79,salary:35e3,visits:167,address:`深南大道 100 号`},{key:`4`,name:`陈默`,age:26,city:`成都`,role:`测试开发`,team:`质量平台`,status:`trial`,score:95,salary:22e3,visits:98,address:`天府三街 18 号`},{key:`5`,name:`顾安`,age:31,city:`北京`,role:`运营分析`,team:`增长`,status:`active`,score:83,salary:24500,visits:132,address:`望京 SOHO`}],_t=[{id:`1`,item:`套餐 A`,owner:`前台`,channel:`门店`,stock:42,price:`199`},{id:`2`,item:`套餐 B`,owner:`门店`,channel:`小程序`,stock:36,price:`299`},{id:`3`,item:`套餐 C`,owner:`线上`,channel:`官网`,stock:28,price:`399`},{id:`4`,item:`体验卡`,owner:`运营`,channel:`社群`,stock:86,price:`99`},{id:`5`,item:`企业版`,owner:`销售`,channel:`直销`,stock:12,price:`1299`},{id:`6`,item:`家庭版`,owner:`门店`,channel:`门店`,stock:25,price:`699`},{id:`7`,item:`增值包`,owner:`客服`,channel:`续费`,stock:57,price:`159`},{id:`8`,item:`旗舰包`,owner:`线上`,channel:`官网`,stock:18,price:`999`},{id:`9`,item:`季度包`,owner:`增长`,channel:`投放`,stock:64,price:`499`},{id:`10`,item:`年度包`,owner:`销售`,channel:`直销`,stock:21,price:`1599`}],vt=[{key:`1`,name:`林青`,role:`设计工程师`,team:`体验平台`,city:`杭州`,score:92,visits:148,salary:26e3,address:`云谷路 88 号`},{key:`2`,name:`周宁`,role:`前端工程师`,team:`设计系统`,city:`上海`,score:88,visits:216,salary:31e3,address:`武康路 12 号`},{key:`3`,name:`刘溪`,role:`产品经理`,team:`商业化`,city:`深圳`,score:76,visits:174,salary:35e3,address:`深南大道 100 号`},{key:`4`,name:`陈默`,role:`测试开发`,team:`质量平台`,city:`成都`,score:95,visits:98,salary:22e3,address:`天府三街 18 号`},{key:`5`,name:`顾安`,role:`运营分析`,team:`增长`,city:`北京`,score:83,visits:132,salary:24500,address:`望京 SOHO`},{key:`6`,name:`许嘉`,role:`数据分析`,team:`策略`,city:`南京`,score:91,visits:121,salary:27e3,address:`软件大道 66 号`},{key:`7`,name:`何澈`,role:`客户成功`,team:`企业服务`,city:`苏州`,score:87,visits:154,salary:24e3,address:`金鸡湖大道 9 号`}],yt=[{key:`1`,name:`John Brown`,age:32,address:`New York No. 1 Lake Park`},{key:`2`,name:`Jim Green`,age:42,address:`London No. 1 Lake Park`},{key:`3`,name:`Joe Black`,age:32,address:`Sydney No. 1 Lake Park`},{key:`4`,name:`Jim Red`,age:32,address:`London No. 2 Lake Park`}],bt=[{key:`name`,label:`姓名`},{key:`age`,label:`年龄`},{key:`address`,label:`地址`}],xt=[{key:`1`,name:`John Brown`,chinese:98,math:60,english:70},{key:`2`,name:`Jim Green`,chinese:98,math:66,english:89},{key:`3`,name:`Joe Black`,chinese:98,math:90,english:70},{key:`4`,name:`Jim Red`,chinese:88,math:99,english:89}],St=[{key:`chinese`,label:`语文`,priority:3},{key:`math`,label:`数学`,priority:2},{key:`english`,label:`英语`,priority:1}],Ct=e=>St.some(t=>t.key===e),wt=e=>e===`ascend`||e===`descend`,Tt=[{key:`1`,name:`Cy Ganderton`,team:`Design Ops`,city:`Hangzhou`,owner:`Hart Hagerty`,updatedAt:`2026-04-18`},{key:`2`,name:`Brice Swyre`,team:`Growth`,city:`Shanghai`,owner:`Yancy Tear`,updatedAt:`2026-04-19`},{key:`3`,name:`Marjy Ferencz`,team:`Infra`,city:`Shenzhen`,owner:`Maribeth Popping`,updatedAt:`2026-04-21`}],Et=[{key:`name`,label:`Name`},{key:`team`,label:`Team`},{key:`city`,label:`City`},{key:`owner`,label:`Owner`},{key:`updatedAt`,label:`Updated`}],Dt=e=>Et.map(t=>({key:t.key,title:t.label,dataIndex:t.key,hidden:!e.includes(t.key)})),Ot=[{prop:`columns`,description:`列配置，支持分组表头、排序、筛选、隐藏列与单元格属性。`,type:`ColumnItem[]`,defaultValue:`-`},{prop:`dataSource`,description:`数据数组。`,type:`any[]`,defaultValue:`-`},{prop:`rowKey`,description:`行主键，可传字段名或函数。`,type:`string | (record) => key`,defaultValue:"`key`"},{prop:`rowSelection`,description:`选择列配置，支持多选、单选、禁用项、表头标题。`,type:`object`,defaultValue:`-`},{prop:`expandable`,description:`展开行配置，支持按行点击展开与受控展开。`,type:`object`,defaultValue:`-`},{prop:`pagination`,description:"分页配置，设为 `false` 时关闭分页。",type:`object | false`,defaultValue:`-`},{prop:`scroll`,description:`横向 / 纵向滚动配置，可在变更后自动回到顶部。`,type:`object`,defaultValue:`-`},{prop:`summary`,description:`汇总栏渲染。`,type:`(currentData, info) => any`,defaultValue:`-`}],kt=[{prop:`title`,description:`列标题，支持传节点或函数。`,type:`any | (context) => any`,defaultValue:`-`},{prop:`dataIndex`,description:`字段路径，支持字符串和数组路径。`,type:`string | string[]`,defaultValue:`-`},{prop:`sorter / sortOrder`,description:`本地排序、受控排序与多列排序。`,type:`boolean | fn | { compare?: fn; multiple?: number } / SortOrder`,defaultValue:`-`},{prop:`filters / filterDropdown / filteredValue`,description:`默认筛选菜单、自定义筛选面板与受控筛选值。`,type:`FilterItem[] / render fn / any[]`,defaultValue:`-`},{prop:`filterSearch`,description:`筛选项搜索。`,type:`boolean | fn`,defaultValue:`false`},{prop:`children`,description:`分组表头子列。`,type:`ColumnItem[]`,defaultValue:`-`},{prop:`hidden`,description:`隐藏列但保持配置。`,type:`boolean`,defaultValue:`false`},{prop:`onCell / onHeaderCell`,description:`给单元格注入 className、style、colSpan、rowSpan 等属性。`,type:`fn`,defaultValue:`-`}],At=[{prop:`type`,description:`选择模式。`,type:"`checkbox` | `radio`",defaultValue:"`checkbox`"},{prop:`columnTitle`,description:`选择列表头内容。`,type:`any`,defaultValue:`-`},{prop:`hideSelectAll`,description:`隐藏全选框。`,type:`boolean`,defaultValue:`false`},{prop:`getCheckboxProps`,description:`为某一行注入 disabled 等状态。`,type:`(record) => object`,defaultValue:`-`},{prop:`onSelect / onSelectAll / onChange`,description:`选择行为回调。`,type:`fn`,defaultValue:`-`}],jt=[{prop:`expandedRowRender`,description:`展开内容渲染函数。`,type:`(record, index) => any`,defaultValue:`-`},{prop:`expandRowByClick`,description:`点击行即可展开。`,type:`boolean`,defaultValue:`false`},{prop:`showExpandColumn`,description:`是否展示展开列。`,type:`boolean`,defaultValue:`true`},{prop:`rowExpandable`,description:`按行控制是否可展开。`,type:`(record) => boolean`,defaultValue:`-`},{prop:`defaultExpandedRowKeys / expandedRowKeys`,description:`默认展开 / 受控展开。`,type:`key[]`,defaultValue:`-`}],Mt=`import { Table } from '@rue-js/design'

const data = [
  { key: '1', name: '林青', city: '杭州', role: '设计工程师', team: '体验平台' },
  { key: '2', name: '周宁', city: '上海', role: '前端工程师', team: '设计系统' },
  { key: '3', name: '刘溪', city: '深圳', role: '产品经理', team: '商业化' },
  { key: '4', name: '陈默', city: '成都', role: '测试开发', team: '质量平台' },
  { key: '5', name: '顾安', city: '北京', role: '运营分析', team: '增长' },
]

const columns = [
  { title: '姓名', dataIndex: 'name' },
  { title: '城市', dataIndex: 'city' },
  { title: '岗位', dataIndex: 'role' },
  { title: '团队', dataIndex: 'team' },
]

export default function Demo() {
  return (
    <div className="overflow-x-auto rounded-box border border-base-300 bg-base-100 p-4">
      <Table className="w-full" columns={columns} dataSource={data} />
    </div>
  )
}`,Nt=`import { Table } from '@rue-js/design'

const data = [
  { key: '1', name: '林青', city: '杭州', role: '设计工程师', team: '体验平台' },
  { key: '2', name: '周宁', city: '上海', role: '前端工程师', team: '设计系统' },
  { key: '3', name: '刘溪', city: '深圳', role: '产品经理', team: '商业化' },
]

const columns = [
  { title: '姓名', dataIndex: 'name' },
  { title: '城市', dataIndex: 'city' },
  { title: '岗位', dataIndex: 'role' },
  { title: '团队', dataIndex: 'team' },
]

export default function Demo() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="rounded-box border border-base-300 bg-base-100 p-4">
        <div className="mb-3 text-sm font-medium">带背景与激活行</div>
        <Table className="w-full">
          <Table.Head>
            <Table.TR>
              <Table.TH>姓名</Table.TH>
              <Table.TH>岗位</Table.TH>
              <Table.TH>城市</Table.TH>
            </Table.TR>
          </Table.Head>
          <Table.Body>
            <Table.TR className="bg-base-200">
              <Table.TD>林青</Table.TD>
              <Table.TD>设计工程师</Table.TD>
              <Table.TD>杭州</Table.TD>
            </Table.TR>
            <Table.TR className="active">
              <Table.TD>周宁</Table.TD>
              <Table.TD>前端工程师</Table.TD>
              <Table.TD>上海</Table.TD>
            </Table.TR>
          </Table.Body>
        </Table>
      </div>

      <div className="rounded-box border border-base-300 bg-base-100 p-4">
        <div className="mb-3 text-sm font-medium">hover / zebra / xs</div>
        <Table
          className="w-full"
          zebra
          size="xs"
          rowHoverable
          columns={columns}
          dataSource={data}
        />
      </div>
    </div>
  )
}`,Pt=`import { ref } from '@rue-js/rue'
import { Table } from '@rue-js/design'

type SortOrder = 'ascend' | 'descend' | null
type ControlledSorter = { columnKey: string | null; order: SortOrder }

const data = [
  { key: '1', name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park' },
  { key: '2', name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park' },
  { key: '3', name: 'Joe Black', age: 32, address: 'Sydney No. 1 Lake Park' },
  { key: '4', name: 'Jim Red', age: 32, address: 'London No. 2 Lake Park' },
]

const sortOptions = [
  { key: 'name', label: '姓名' },
  { key: 'age', label: '年龄' },
  { key: 'address', label: '地址' },
] as const

export default function Demo() {
  const controlledNameFilter = ref<any[]>(['Jim'])
  const controlledAddressFilter = ref<any[]>(['London'])
  const controlledSorter = ref<ControlledSorter>({ columnKey: 'age', order: 'descend' })

  const cycleSort = (columnKey: string) => {
    const current = controlledSorter.value
    const nextOrder =
      current.columnKey !== columnKey
        ? 'descend'
        : current.order === 'descend'
          ? 'ascend'
          : current.order === 'ascend'
            ? null
            : 'descend'

    controlledSorter.value = nextOrder ? { columnKey, order: nextOrder } : { columnKey: null, order: null }
    syncColumns()
  }

  const getSortButtonText = (columnKey: string, label: string) => {
    const order = controlledSorter.value.columnKey === columnKey ? controlledSorter.value.order : null
    if (order === 'descend') return label + '降序'
    if (order === 'ascend') return label + '升序'
    return label + '排序'
  }

  const getSortFieldText = () =>
    sortOptions.find(option => option.key === controlledSorter.value.columnKey)?.label ?? '无'

  const getSortOrderText = () => {
    if (controlledSorter.value.order === 'descend') return '降序'
    if (controlledSorter.value.order === 'ascend') return '升序'
    return '无'
  }

  const buildColumns = () => [
    {
      key: 'name',
      title: 'Name',
      dataIndex: 'name',
      filters: [
        { text: 'Jim', value: 'Jim' },
        { text: 'Joe', value: 'Joe' },
        { text: 'John', value: 'John' },
      ],
      filteredValue: controlledNameFilter.value,
      filterSearch: true,
      onFilter: (value: any, record: any) => record.name.includes(value as string),
      sorter: (a: any, b: any) => a.name.length - b.name.length,
      sortDirections: ['descend' as const, 'ascend' as const],
      sortOrder: controlledSorter.value.columnKey === 'name' ? controlledSorter.value.order : null,
    },
    {
      key: 'age',
      title: 'Age',
      dataIndex: 'age',
      sorter: (a: any, b: any) => a.age - b.age,
      sortDirections: ['descend' as const, 'ascend' as const],
      sortOrder: controlledSorter.value.columnKey === 'age' ? controlledSorter.value.order : null,
    },
    {
      key: 'address',
      title: 'Address',
      dataIndex: 'address',
      filters: [
        { text: 'London', value: 'London' },
        { text: 'New York', value: 'New York' },
        { text: 'Sydney', value: 'Sydney' },
      ],
      filteredValue: controlledAddressFilter.value,
      filterSearch: true,
      onFilter: (value: any, record: any) => record.address.includes(value as string),
      sorter: (a: any, b: any) => a.address.length - b.address.length,
      sortDirections: ['descend' as const, 'ascend' as const],
      sortOrder: controlledSorter.value.columnKey === 'address' ? controlledSorter.value.order : null,
      ellipsis: true,
    },
  ]

  const columns = ref(buildColumns())

  const syncColumns = () => {
    columns.value = buildColumns()
  }

  return (
    <div className="space-y-4 rounded-box border border-base-300 bg-base-100 p-4">
      <div className="flex flex-wrap items-center gap-2 text-sm">
        {sortOptions.map(option => (
          <button
            key={option.key}
            className={
              controlledSorter.value.columnKey === option.key
                ? 'btn btn-primary btn-xs'
                : 'btn btn-ghost btn-xs'
            }
            onClick={() => cycleSort(option.key)}
          >
            {getSortButtonText(option.key, option.label)}
          </button>
        ))}
        <button
          className="btn btn-ghost btn-xs"
          onClick={() => {
            controlledSorter.value = { columnKey: null, order: null }
            syncColumns()
          }}
        >
          清空排序
        </button>
        <button
          className="btn btn-ghost btn-xs"
          onClick={() => {
            controlledNameFilter.value = ['Jim']
            controlledAddressFilter.value = []
            syncColumns()
          }}
        >
          只看 Jim
        </button>
        <button
          className="btn btn-ghost btn-xs"
          onClick={() => {
            controlledNameFilter.value = []
            controlledAddressFilter.value = ['London']
            syncColumns()
          }}
        >
          只看 London
        </button>
        <button
          className="btn btn-ghost btn-xs"
          onClick={() => {
            controlledNameFilter.value = ['Jim']
            controlledAddressFilter.value = ['London']
            syncColumns()
          }}
        >
          Jim + London
        </button>
        <button
          className="btn btn-ghost btn-xs"
          onClick={() => {
            controlledNameFilter.value = []
            controlledAddressFilter.value = []
            syncColumns()
          }}
        >
          清空筛选
        </button>
        <button
          className="btn btn-ghost btn-xs"
          onClick={() => {
            controlledNameFilter.value = []
            controlledAddressFilter.value = []
            controlledSorter.value = { columnKey: null, order: null }
            syncColumns()
          }}
        >
          清空全部
        </button>
        <span className="opacity-70">
          筛选：Name {controlledNameFilter.value.join(', ') || '无'} / Address {controlledAddressFilter.value.join(', ') || '无'}；
          当前排序：{getSortFieldText()} / {getSortOrderText()}
        </span>
      </div>

      <Table
        className="w-full"
        columns={columns.value}
        dataSource={data}
        sortDirections={['descend', 'ascend']}
        onChange={(_, filters, sorter) => {
          controlledNameFilter.value =
            Array.isArray(filters?.name) && filters.name.length > 0 ? filters.name : []
          controlledAddressFilter.value =
            Array.isArray(filters?.address) && filters.address.length > 0 ? filters.address : []
          const nextSorter = Array.isArray(sorter) ? sorter[0] : sorter
          controlledSorter.value = {
            columnKey: nextSorter?.order ? (nextSorter?.columnKey ?? null) : null,
            order: nextSorter?.order ?? null,
          }
          syncColumns()
        }}
      />
    </div>
  )
}`,Ft=`import { ref } from '@rue-js/rue'
import { Table } from '@rue-js/design'

type SortOrder = 'ascend' | 'descend'
type SortKey = 'chinese' | 'math' | 'english'
type SortOrderMap = Partial<Record<SortKey, SortOrder>>

const data = [
  { key: '1', name: 'John Brown', chinese: 98, math: 60, english: 70 },
  { key: '2', name: 'Jim Green', chinese: 98, math: 66, english: 89 },
  { key: '3', name: 'Joe Black', chinese: 98, math: 90, english: 70 },
  { key: '4', name: 'Jim Red', chinese: 88, math: 99, english: 89 },
]

const sortOptions: Array<{ key: SortKey; label: string; priority: number }> = [
  { key: 'chinese', label: '语文', priority: 3 },
  { key: 'math', label: '数学', priority: 2 },
  { key: 'english', label: '英语', priority: 1 },
]

const isSortKey = (value: any): value is SortKey =>
  sortOptions.some(option => option.key === value)

const isSortOrder = (value: any): value is SortOrder => value === 'ascend' || value === 'descend'

export default function Demo() {
  const multiSortOrders = ref<SortOrderMap>({
    chinese: 'descend',
    math: 'descend',
  })

  const setSortPreset = (orders: SortOrderMap) => {
    multiSortOrders.value = { ...orders }
    syncColumns()
  }

  const cycleSort = (columnKey: SortKey) => {
    const current = multiSortOrders.value[columnKey] ?? null
    const nextOrder = current === 'descend' ? 'ascend' : current === 'ascend' ? null : 'descend'
    const nextOrders = { ...multiSortOrders.value }

    if (nextOrder) nextOrders[columnKey] = nextOrder
    else delete nextOrders[columnKey]

    multiSortOrders.value = nextOrders
    syncColumns()
  }

  const getSortButtonText = (option: { key: SortKey; label: string }) => {
    const order = multiSortOrders.value[option.key]
    if (order === 'descend') return option.label + '降序'
    if (order === 'ascend') return option.label + '升序'
    return option.label + '排序'
  }

  const getSortSummary = () => {
    const activeItems = sortOptions
      .filter(option => multiSortOrders.value[option.key])
      .sort((a, b) => b.priority - a.priority)
      .map(option => {
        const order = multiSortOrders.value[option.key] === 'descend' ? '降序' : '升序'
        return option.label + order + ' P' + option.priority
      })

    return activeItems.join(' / ') || '无'
  }

  const buildColumns = () => [
    { title: 'Name', dataIndex: 'name' },
    {
      key: 'chinese',
      title: 'Chinese Score',
      dataIndex: 'chinese',
      sortOrder: multiSortOrders.value.chinese ?? null,
      sortDirections: ['descend' as const, 'ascend' as const],
      sorter: { compare: (a: any, b: any) => a.chinese - b.chinese, multiple: 3 },
    },
    {
      key: 'math',
      title: 'Math Score',
      dataIndex: 'math',
      sortOrder: multiSortOrders.value.math ?? null,
      sortDirections: ['descend' as const, 'ascend' as const],
      sorter: { compare: (a: any, b: any) => a.math - b.math, multiple: 2 },
    },
    {
      key: 'english',
      title: 'English Score',
      dataIndex: 'english',
      sortOrder: multiSortOrders.value.english ?? null,
      sortDirections: ['descend' as const, 'ascend' as const],
      sorter: { compare: (a: any, b: any) => a.english - b.english, multiple: 1 },
    },
  ]

  const columns = ref(buildColumns())

  const syncColumns = () => {
    columns.value = buildColumns()
  }

  return (
    <div className="space-y-4 rounded-box border border-base-300 bg-base-100 p-4">
      <div className="flex flex-wrap gap-2 text-sm">
        <button
          className="btn btn-ghost btn-xs"
          onClick={() => setSortPreset({ chinese: 'descend', math: 'descend' })}
        >
          语文 + 数学降序
        </button>
        <button
          className="btn btn-ghost btn-xs"
          onClick={() =>
            setSortPreset({ chinese: 'descend', math: 'descend', english: 'descend' })
          }
        >
          三科降序
        </button>
        <button
          className="btn btn-ghost btn-xs"
          onClick={() => setSortPreset({ chinese: 'ascend', english: 'descend' })}
        >
          语文升序 + 英语降序
        </button>
        <button className="btn btn-ghost btn-xs" onClick={() => setSortPreset({})}>
          清空排序
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-2 text-sm">
        {sortOptions.map(option => (
          <button
            key={option.key}
            className={
              multiSortOrders.value[option.key] ? 'btn btn-primary btn-xs' : 'btn btn-ghost btn-xs'
            }
            onClick={() => cycleSort(option.key)}
          >
            {getSortButtonText(option)}
          </button>
        ))}
        <span className="opacity-70">当前优先级：{getSortSummary()}</span>
      </div>

      <Table
        className="w-full"
        columns={columns.value}
        dataSource={data}
        sortDirections={['descend', 'ascend']}
        onChange={(_, __, sorter) => {
          const sorters = Array.isArray(sorter) ? sorter : sorter?.order ? [sorter] : []
          multiSortOrders.value = sorters.reduce((acc: SortOrderMap, item: any) => {
            if (isSortKey(item?.columnKey) && isSortOrder(item?.order)) {
              acc[item.columnKey] = item.order
            }
            return acc
          }, {})
          syncColumns()
        }}
      />
    </div>
  )
}`,$=`import { ref } from '@rue-js/rue'
import { Table } from '@rue-js/design'

const data = [
  { key: '1', name: 'Cy Ganderton', team: 'Design Ops', city: 'Hangzhou', owner: 'Hart Hagerty', updatedAt: '2026-04-18' },
  { key: '2', name: 'Brice Swyre', team: 'Growth', city: 'Shanghai', owner: 'Yancy Tear', updatedAt: '2026-04-19' },
  { key: '3', name: 'Marjy Ferencz', team: 'Infra', city: 'Shenzhen', owner: 'Maribeth Popping', updatedAt: '2026-04-21' },
]

const columnOptions = [
  { key: 'name', label: 'Name' },
  { key: 'team', label: 'Team' },
  { key: 'city', label: 'City' },
  { key: 'owner', label: 'Owner' },
  { key: 'updatedAt', label: 'Updated' },
]

export default function Demo() {
  const visibleColumnKeys = ref(['name', 'team', 'city', 'owner'])

  const buildColumns = (visibleKeys: string[]) =>
    columnOptions.map(option => ({
      key: option.key,
      title: option.label,
      dataIndex: option.key,
      hidden: !visibleKeys.includes(option.key),
    }))

  const columns = ref(buildColumns(visibleColumnKeys.value))

  const toggleColumn = (key: string) => {
    const active = visibleColumnKeys.value.includes(key)
    const nextVisibleKeys = active
      ? visibleColumnKeys.value.filter(item => item !== key)
      : [...visibleColumnKeys.value, key]

    visibleColumnKeys.value = nextVisibleKeys
    columns.value = buildColumns(nextVisibleKeys)
  }

  return (
    <div className="space-y-4 rounded-box border border-base-300 bg-base-100 p-4">
      <div className="flex flex-wrap gap-2 text-sm">
        {columnOptions.map(option => {
          const active = visibleColumnKeys.value.includes(option.key)
          return (
            <button
              key={option.key}
              className={active ? 'btn btn-primary btn-xs' : 'btn btn-ghost btn-xs'}
              onClick={() => toggleColumn(option.key)}
            >
              {active ? '隐藏 ' + option.label : '显示 ' + option.label}
            </button>
          )
        })}
      </div>

      <Table className="w-full" columns={columns.value} dataSource={data} />
    </div>
  )
}`,It=`import { ref } from '@rue-js/rue'
import { Table } from '@rue-js/design'

const data = [
  { key: '1', name: '林青', city: '杭州', team: '体验平台', status: 'active' },
  { key: '2', name: '周宁', city: '上海', team: '设计系统', status: 'active' },
  { key: '3', name: '刘溪', city: '深圳', team: '商业化', status: 'leave' },
  { key: '4', name: '陈默', city: '成都', team: '质量平台', status: 'trial' },
]

export default function Demo() {
  const selectedKeys = ref<Array<string | number>>(['2'])
  const selectedRadio = ref<Array<string | number>>(['2'])

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="rounded-box border border-base-300 bg-base-100 p-4">
        <div className="mb-3 text-sm">多选：当前 {selectedKeys.value.join(', ') || '空'}</div>
        <Table
          className="w-full"
          columns={[
            { title: '姓名', dataIndex: 'name' },
            { title: '团队', dataIndex: 'team' },
            { title: '状态', dataIndex: 'status' },
          ]}
          dataSource={data}
          rowSelection={{
            columnTitle: '成员',
            selectedRowKeys: selectedKeys.value,
            getCheckboxProps: record => ({ disabled: record.status === 'leave' }),
            onChange: keys => (selectedKeys.value = [...keys]),
          }}
        />
      </div>

      <div className="rounded-box border border-base-300 bg-base-100 p-4">
        <div className="mb-3 text-sm">单选：当前 {selectedRadio.value[0] ?? '空'}</div>
        <Table
          className="w-full"
          columns={[
            { title: '姓名', dataIndex: 'name' },
            { title: '城市', dataIndex: 'city' },
          ]}
          dataSource={data}
          rowSelection={{
            type: 'radio',
            hideSelectAll: true,
            selectedRowKeys: selectedRadio.value,
            onChange: keys => (selectedRadio.value = [...keys]),
          }}
        />
      </div>
    </div>
  )
}`,Lt=`import { ref } from '@rue-js/rue'
import { Table } from '@rue-js/design'

const data = [
  { key: '1', name: '林青', team: '体验平台', score: 92, address: '云谷路 88 号' },
  { key: '2', name: '周宁', team: '设计系统', score: 88, address: '武康路 12 号' },
  { key: '3', name: '刘溪', team: '商业化', score: 79, address: '深南大道 100 号' },
  { key: '4', name: '陈默', team: '质量平台', score: 95, address: '天府三街 18 号' },
]

export default function Demo() {
  const expandedKeys = ref<Array<string | number>>(['2'])

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="rounded-box border border-base-300 bg-base-100 p-4">
        <Table
          className="w-full"
          columns={[
            { title: '姓名', dataIndex: 'name' },
            { title: '绩效', dataIndex: 'score', align: 'right' as const },
          ]}
          dataSource={data}
          expandable={{
            expandedRowKeys: expandedKeys.value,
            expandRowByClick: true,
            onExpandedRowsChange: keys => (expandedKeys.value = [...keys]),
            expandedRowRender: record => (
              <div className="text-sm leading-6">
                <div>团队：{record.team}</div>
                <div>地址：{record.address}</div>
              </div>
            ),
          }}
          summary={rows => (
            <div className="flex justify-between text-sm">
              <span>当前行数：{rows.length}</span>
              <span>平均绩效：{Math.round(rows.reduce((sum, row) => sum + row.score, 0) / rows.length)}</span>
            </div>
          )}
        />
      </div>

      <div className="rounded-box border border-base-300 bg-base-100 p-4">
        <Table
          className="w-full"
          columns={[
            { title: '姓名', dataIndex: 'name' },
            { title: '团队', dataIndex: 'team' },
          ]}
          dataSource={[]}
          emptyText={<span className="text-sm opacity-60">暂无成员，请先创建数据。</span>}
        />
      </div>
    </div>
  )
}`,Rt=`import { Table } from '@rue-js/design'

const data = [
  { key: '1', name: '林青', city: '杭州', role: '设计工程师', team: '体验平台', address: '云谷路 88 号', visits: 148 },
  { key: '2', name: '周宁', city: '上海', role: '前端工程师', team: '设计系统', address: '武康路 12 号', visits: 203 },
  { key: '3', name: '刘溪', city: '深圳', role: '产品经理', team: '商业化', address: '深南大道 100 号', visits: 167 },
  { key: '4', name: '陈默', city: '成都', role: '测试开发', team: '质量平台', address: '天府三街 18 号', visits: 98 },
  { key: '5', name: '顾安', city: '北京', role: '运营分析', team: '增长', address: '望京 SOHO', visits: 132 },
]

const columns = [
  { title: '姓名', dataIndex: 'name', width: 120, fixedCol: true },
  { title: '城市', dataIndex: 'city', width: 120 },
  { title: '岗位', dataIndex: 'role', width: 180, ellipsis: true },
  { title: '团队', dataIndex: 'team', width: 160 },
  { title: '地址', dataIndex: 'address', width: 220, ellipsis: true },
  { title: '访问量', dataIndex: 'visits', width: 120, align: 'right' as const },
]

export default function Demo() {
  const longData = data.concat(data).concat(data)

  return (
    <div className="rounded-box border border-base-300 bg-base-100 p-4">
      <Table
        className="w-full"
        columns={columns}
        dataSource={longData}
        scroll={{ x: 900, y: 220, scrollToFirstRowOnChange: true }}
        title={rows => <div className="text-sm font-medium">成员列表（当前页 {rows.length} 行）</div>}
        footer={() => <div className="text-sm opacity-70">展示了固定列、纵向滚动和 ellipsis。</div>}
      />
    </div>
  )
}`,zt=`import { ref } from '@rue-js/rue'
import { Table } from '@rue-js/design'

const data = [
  { key: '1', name: '林青', age: 28, city: '杭州', role: '设计工程师', team: '体验平台', salary: 26000 },
  { key: '2', name: '周宁', age: 34, city: '上海', role: '前端工程师', team: '设计系统', salary: 31000 },
  { key: '3', name: '刘溪', age: 41, city: '深圳', role: '产品经理', team: '商业化', salary: 35000 },
  { key: '4', name: '陈默', age: 26, city: '成都', role: '测试开发', team: '质量平台', salary: 22000 },
]

export default function Demo() {
  const hideSalary = ref(false)
  const clickedName = ref('未点击')

  const buildColumns = (salaryHidden: boolean) => [
    {
      title: '成员信息',
      children: [
        { title: '姓名', dataIndex: 'name', width: 120 },
        { title: '城市', dataIndex: 'city', width: 120 },
      ],
    },
    {
      title: '工作概览',
      children: [
        { title: '岗位', dataIndex: 'role', ellipsis: true },
        { title: '团队', dataIndex: 'team', ellipsis: true },
        { title: '月薪', dataIndex: 'salary', align: 'right' as const, hidden: salaryHidden },
      ],
    },
    {
      title: '操作',
      key: 'action',
      width: 120,
      align: 'center' as const,
      render: (_: any, record: any) => (
        <button
          className="btn btn-ghost btn-xs"
          onClick={() => (clickedName.value = '操作 ' + record.name)}
        >
          查看
        </button>
      ),
      onCell: (_record: any, rowIndex: number) => ({
        className: rowIndex % 2 === 0 ? 'bg-base-100' : 'bg-base-200/30',
      }),
    },
  ]

  const columns = ref(buildColumns(hideSalary.value))

  const toggleSalaryColumn = () => {
    hideSalary.value = !hideSalary.value
    columns.value = buildColumns(hideSalary.value)
  }

  return (
    <div className="space-y-4 rounded-box border border-base-300 bg-base-100 p-4">
      <div className="flex flex-wrap gap-2 text-sm">
        <button className="btn btn-ghost btn-xs" onClick={toggleSalaryColumn}>
          {hideSalary.value ? '显示月薪列' : '隐藏月薪列'}
        </button>
        <span>最近操作：{clickedName.value}</span>
      </div>
      <Table
        className="w-full"
        columns={columns.value}
        dataSource={data}
        rowHoverable
        onRow={(record: any) => ({
          onClick: () => (clickedName.value = '点击 ' + record.name),
        })}
      />
    </div>
  )
}`,Bt=`import { Table } from '@rue-js/design'

const pinnedRows = [
  { id: '1', item: '套餐 A', owner: '前台', channel: '门店', stock: 42, price: '199' },
  { id: '2', item: '套餐 B', owner: '门店', channel: '小程序', stock: 36, price: '299' },
  { id: '3', item: '套餐 C', owner: '线上', channel: '官网', stock: 28, price: '399' },
  { id: '4', item: '体验卡', owner: '运营', channel: '社群', stock: 86, price: '99' },
  { id: '5', item: '企业版', owner: '销售', channel: '直销', stock: 12, price: '1299' },
  { id: '6', item: '家庭版', owner: '门店', channel: '门店', stock: 25, price: '699' },
  { id: '7', item: '增值包', owner: '客服', channel: '续费', stock: 57, price: '159' },
  { id: '8', item: '旗舰包', owner: '线上', channel: '官网', stock: 18, price: '999' },
  { id: '9', item: '季度包', owner: '增长', channel: '投放', stock: 64, price: '499' },
  { id: '10', item: '年度包', owner: '销售', channel: '直销', stock: 21, price: '1599' },
]

const users = [
  { key: '1', name: '林青', role: '设计工程师', team: '体验平台', city: '杭州', score: 92, visits: 148, salary: 26000, address: '云谷路 88 号' },
  { key: '2', name: '周宁', role: '前端工程师', team: '设计系统', city: '上海', score: 88, visits: 216, salary: 31000, address: '武康路 12 号' },
  { key: '3', name: '刘溪', role: '产品经理', team: '商业化', city: '深圳', score: 76, visits: 174, salary: 35000, address: '深南大道 100 号' },
  { key: '4', name: '陈默', role: '测试开发', team: '质量平台', city: '成都', score: 95, visits: 98, salary: 22000, address: '天府三街 18 号' },
  { key: '5', name: '顾安', role: '运营分析', team: '增长', city: '北京', score: 83, visits: 132, salary: 24500, address: '望京 SOHO' },
  { key: '6', name: '许嘉', role: '数据分析', team: '策略', city: '南京', score: 91, visits: 121, salary: 27000, address: '软件大道 66 号' },
  { key: '7', name: '何澈', role: '客户成功', team: '企业服务', city: '苏州', score: 87, visits: 154, salary: 24000, address: '金鸡湖大道 9 号' },
]

export default function Demo() {
  return (
    <div className="grid gap-4 xl:grid-cols-2">
      <div className="h-72 overflow-auto rounded-box border border-base-300 bg-base-100 p-4">
        <Table zebra pinRows className="w-full min-w-[640px]">
          <Table.Head>
            <Table.TR>
              <Table.TH>商品</Table.TH>
              <Table.TH>负责人</Table.TH>
              <Table.TH>渠道</Table.TH>
              <Table.TH className="text-right">库存</Table.TH>
              <Table.TH className="text-right">价格</Table.TH>
            </Table.TR>
          </Table.Head>
          <Table.Body>
            {pinnedRows.map(row => (
              <Table.TR key={row.id}>
                <Table.TD>{row.item}</Table.TD>
                <Table.TD>{row.owner}</Table.TD>
                <Table.TD>{row.channel}</Table.TD>
                <Table.TD className="text-right">{row.stock}</Table.TD>
                <Table.TD className="text-right">{row.price}</Table.TD>
              </Table.TR>
            ))}
          </Table.Body>
        </Table>
      </div>

      <div className="overflow-x-auto rounded-box border border-base-300 bg-base-100 p-4">
        <Table pinCols className="w-[980px]">
          <Table.Head>
            <Table.TR>
              <Table.TH className="bg-base-100">姓名</Table.TH>
              <Table.TH>岗位</Table.TH>
              <Table.TH>团队</Table.TH>
              <Table.TH>城市</Table.TH>
              <Table.TH className="text-right">绩效</Table.TH>
              <Table.TH className="text-right">访问</Table.TH>
              <Table.TH className="text-right">月薪</Table.TH>
              <Table.TH>地址</Table.TH>
            </Table.TR>
          </Table.Head>
          <Table.Body>
            {users.map(row => (
              <Table.TR key={row.key}>
                <Table.TH className="bg-base-100">{row.name}</Table.TH>
                <Table.TD>{row.role}</Table.TD>
                <Table.TD>{row.team}</Table.TD>
                <Table.TD>{row.city}</Table.TD>
                <Table.TD className="text-right">{row.score}</Table.TD>
                <Table.TD className="text-right">{row.visits}</Table.TD>
                <Table.TD className="text-right">{row.salary}</Table.TD>
                <Table.TD>{row.address}</Table.TD>
              </Table.TR>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  )
}`,Vt=()=>{let a=t(`preview`),o=t(`preview`),p=t(`preview`),g=t(`preview`),_=t(`preview`),y=t(`preview`),b=t(`preview`),ee=t(`preview`),S=t(`preview`),w=t(`preview`),T=t([`2`]),te=t([`2`]),ne=t(`未点击`),N=t([`Jim`]),P=t([`London`]),I=t({columnKey:`age`,order:`descend`}),L=t({chinese:`descend`,math:`descend`}),R=t([`name`,`team`,`city`,`owner`]),z=t(Dt(R.value)),V=t(!1),ae=t([`2`]),oe=()=>[{key:`name`,title:`Name`,filters:[{text:`Jim`,value:`Jim`},{text:`Joe`,value:`Joe`},{text:`John`,value:`John`}],dataIndex:`name`,filteredValue:N.value,filterSearch:!0,onFilter:(e,t)=>t.name.includes(e),sorter:(e,t)=>e.name.length-t.name.length,sortDirections:[`descend`,`ascend`],sortOrder:I.value.columnKey===`name`?I.value.order:null},{key:`age`,title:`Age`,dataIndex:`age`,sorter:(e,t)=>e.age-t.age,sortDirections:[`descend`,`ascend`],sortOrder:I.value.columnKey===`age`?I.value.order:null},{key:`address`,title:`Address`,filters:[{text:`London`,value:`London`},{text:`New York`,value:`New York`},{text:`Sydney`,value:`Sydney`}],dataIndex:`address`,filteredValue:P.value,filterSearch:!0,onFilter:(e,t)=>t.address.includes(e),sorter:(e,t)=>e.address.length-t.address.length,sortDirections:[`descend`,`ascend`],sortOrder:I.value.columnKey===`address`?I.value.order:null,ellipsis:!0}],se=t(oe()),U=()=>{se.value=oe()},le=()=>[{title:`Name`,dataIndex:`name`},{key:`chinese`,title:`Chinese Score`,dataIndex:`chinese`,sortOrder:L.value.chinese??null,sorter:{compare:(e,t)=>e.chinese-t.chinese,multiple:3},sortDirections:[`descend`,`ascend`]},{key:`math`,title:`Math Score`,dataIndex:`math`,sortOrder:L.value.math??null,sorter:{compare:(e,t)=>e.math-t.math,multiple:2},sortDirections:[`descend`,`ascend`]},{key:`english`,title:`English Score`,dataIndex:`english`,sortOrder:L.value.english??null,sorter:{compare:(e,t)=>e.english-t.english,multiple:1},sortDirections:[`descend`,`ascend`]}],ue=t(le()),de=()=>{ue.value=le()},fe=e=>{let t=I.value,n=t.columnKey===e?t.order===`descend`?`ascend`:t.order===`ascend`?null:`descend`:`descend`;I.value=n?{columnKey:e,order:n}:{columnKey:null,order:null},U()},pe=(e,t)=>{let n=I.value.columnKey===e?I.value.order:null;return n===`descend`?`${t}降序`:n===`ascend`?`${t}升序`:`${t}排序`},me=()=>bt.find(e=>e.key===I.value.columnKey)?.label??`无`,he=()=>I.value.order===`descend`?`降序`:I.value.order===`ascend`?`升序`:`无`,ge=e=>{L.value={...e},de()},_e=e=>{let t=L.value[e]??null,n=t===`descend`?`ascend`:t===`ascend`?null:`descend`,r={...L.value};n?r[e]=n:delete r[e],L.value=r,de()},ve=e=>{let t=L.value[e.key];return t===`descend`?`${e.label}降序`:t===`ascend`?`${e.label}升序`:`${e.label}排序`},ye=()=>St.filter(e=>L.value[e.key]).sort((e,t)=>t.priority-e.priority).map(e=>{let t=L.value[e.key]===`descend`?`降序`:`升序`;return`${e.label}${t} P${e.priority}`}).join(` / `)||`无`,be=e=>{let t=R.value.includes(e)?R.value.filter(t=>t!==e):[...R.value,e];R.value=t,z.value=Dt(t)},xe=[{title:`姓名`,dataIndex:`name`},{title:`城市`,dataIndex:`city`},{title:`岗位`,dataIndex:`role`},{title:`团队`,dataIndex:`team`}],Se=e=>[{title:`成员信息`,children:[{title:`姓名`,dataIndex:`name`,width:120},{title:`城市`,dataIndex:`city`,width:120}]},{title:`工作概览`,children:[{title:`岗位`,dataIndex:`role`,ellipsis:!0},{title:`团队`,dataIndex:`team`,ellipsis:!0},{title:`月薪`,dataIndex:`salary`,align:`right`,hidden:e}]},{title:`操作`,key:`action`,width:120,align:`center`,render:(e,t)=>i(Object.assign(e=>{let n=pt().content.cloneNode(!0).firstChild,i=n;i.className=`btn btn-ghost btn-xs`;let a=e=>{let n=()=>ne.value=`操作 ${t.name}`;typeof n==`function`&&n(e)};return i.addEventListener(`click`,a),r(()=>i.removeEventListener(`click`,a)),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})),onCell:(e,t)=>({className:t%2==0?`bg-base-100`:`bg-base-200/30`})}],Ce=t(Se(V.value)),we=()=>{V.value=!V.value,Ce.value=Se(V.value)},W=[{title:`姓名`,dataIndex:`name`,width:120,fixedCol:!0},{title:`城市`,dataIndex:`city`,width:120},{title:`岗位`,dataIndex:`role`,width:180,ellipsis:!0},{title:`团队`,dataIndex:`team`,width:160},{title:`地址`,dataIndex:`address`,width:220,ellipsis:!0},{title:`访问量`,dataIndex:`visits`,width:120,align:`right`}];return d(()=>F((()=>{let t=k(()=>{let t=M(),d=mt().content.cloneNode(!0),F=d.firstChild,H=F.childNodes[5],oe=H.parentNode,ce=F.childNodes[6],le=ce.parentNode,Se=F.childNodes[7],Te=Se.parentNode,Ee=F.childNodes[8],De=Ee.parentNode,Oe=F.childNodes[9],G=Oe.parentNode,K=F.childNodes[10],ke=K.parentNode,q=F.childNodes[11],Ae=q.parentNode,je=F.childNodes[12],Me=je.parentNode,Ne=F.childNodes[13],Pe=Ne.parentNode,Fe=F.childNodes[14],Ie=Fe.parentNode,Le=F.childNodes[18],Re=Le.parentNode,ze=F.childNodes[20],Be=ze.parentNode,Ve=F.childNodes[22],He=Ve.parentNode,Ue=F.childNodes[24],We=Ue.parentNode;t.appendChild(d),B(()=>{let e=x(Q,()=>({title:`基础数据表格`,summary:`最直接的 columns + dataSource 用法，适合作为大多数列表页的起点。`,tab:a,preview:c(()=>i(Object.assign(e=>{let t=rt().content.cloneNode(!0).firstChild,n=t.childNodes[0],r=n.parentNode,i=j(r);return s(i,Y,()=>({className:`w-full`,columns:xe,dataSource:gt})),r.insertBefore(i,n),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),code:Mt}));A(()=>v(e,oe,H))}),B(()=>{let e=x(Q,()=>({title:`视觉风格与静态行态`,summary:`使用当前视觉类示例：背景、激活行、hover、zebra 与尺寸示例。`,tab:o,preview:c(()=>k(e=>{let t=it().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[1],r=n.parentNode,i=t.childNodes[1].childNodes[1],a=i.parentNode;B(()=>{let e=x(Y.TH,()=>({children:`姓名`})),t=x(Y.TH,()=>({children:`岗位`})),i=x(Y.TH,()=>({children:`城市`})),a=x(Y.TR,()=>({children:[e,t,i]})),o=x(Y.Head,()=>({children:a})),s=x(Y.TD,()=>({children:`林青`})),c=x(Y.TD,()=>({children:`设计工程师`})),l=x(Y.TD,()=>({children:`杭州`})),u=x(Y.TR,()=>({className:`bg-base-200`,children:[s,c,l]})),d=x(Y.TD,()=>({children:`周宁`})),f=x(Y.TD,()=>({children:`前端工程师`})),p=x(Y.TD,()=>({children:`上海`})),m=x(Y.TR,()=>({className:`active`,children:[d,f,p]})),h=x(Y.Body,()=>({children:[u,m]})),g=x(Y,()=>({className:`w-full`,children:[o,h]}));A(()=>v(g,r,n))});let o=j(a);return s(o,Y,()=>({className:`w-full`,zebra:!0,size:`xs`,rowHoverable:!0,columns:xe,dataSource:gt.slice(0,3)})),a.insertBefore(o,i),t})),code:Nt}));A(()=>v(e,le,ce))}),B(()=>{let e=x(Q,()=>({title:`可控筛选与排序`,summary:`恢复外部控制台式的筛选与排序示例，避免交互状态混在一起。`,tab:p,preview:c(()=>k(e=>{let t=at().content.cloneNode(!0).firstChild,a=t.childNodes[0].childNodes[1],o=t.childNodes[0].childNodes[2],c=t.childNodes[0].childNodes[3],d=t.childNodes[0].childNodes[4],p=t.childNodes[0].childNodes[5],g=t.childNodes[0].childNodes[6],_=t.childNodes[0].childNodes[0],y=_.parentNode,b=t.childNodes[0].childNodes[7].childNodes[1],x=b.parentNode,ee=t.childNodes[0].childNodes[7].childNodes[3],S=ee.parentNode,C=t.childNodes[0].childNodes[7].childNodes[5],w=C.parentNode,T=t.childNodes[0].childNodes[7].childNodes[7],te=T.parentNode,k=t.childNodes[1],ne=k.parentNode;l(a,`btn btn-ghost btn-xs`);let M=e=>{let t=()=>{I.value={columnKey:null,order:null},U()};typeof t==`function`&&t(e)};a.addEventListener(`click`,M),u(()=>a.removeEventListener(`click`,M)),B(()=>{l(o,`btn btn-xs ${N.value.length===1&&N.value[0]===`Jim`&&P.value.length===0?`btn-primary`:`btn-ghost`}`)});let F=e=>{let t=()=>{N.value=[`Jim`],P.value=[],U()};typeof t==`function`&&t(e)};o.addEventListener(`click`,F),u(()=>o.removeEventListener(`click`,F)),B(()=>{l(c,`btn btn-xs ${P.value.length===1&&P.value[0]===`London`&&N.value.length===0?`btn-primary`:`btn-ghost`}`)});let L=e=>{let t=()=>{N.value=[],P.value=[`London`],U()};typeof t==`function`&&t(e)};c.addEventListener(`click`,L),u(()=>c.removeEventListener(`click`,L)),B(()=>{l(d,`btn btn-xs ${N.value.length===1&&N.value[0]===`Jim`&&P.value.length===1&&P.value[0]===`London`?`btn-primary`:`btn-ghost`}`)});let R=e=>{let t=()=>{N.value=[`Jim`],P.value=[`London`],U()};typeof t==`function`&&t(e)};d.addEventListener(`click`,R),u(()=>d.removeEventListener(`click`,R)),l(p,`btn btn-ghost btn-xs`);let z=e=>{let t=()=>{N.value=[],P.value=[],U()};typeof t==`function`&&t(e)};p.addEventListener(`click`,z),u(()=>p.removeEventListener(`click`,z)),l(g,`btn btn-ghost btn-xs`);let V=e=>{let t=()=>{N.value=[],P.value=[],I.value={columnKey:null,order:null},U()};typeof t==`function`&&t(e)};g.addEventListener(`click`,V),u(()=>g.removeEventListener(`click`,V));let ae=[];B(()=>{ae=n(y,_,ae,bt||[],(e,t)=>e.key,(e,t)=>{let n=h(e),a=h(t);return f((e,t,a)=>ie(e,a,()=>i(Object.assign(e=>{let t=O(`button`,e),i;B(()=>{let e=`btn btn-xs ${I.value.columnKey===n.get().key?`btn-primary`:`btn-ghost`}`,r=e==null?``:String(e);Object.is(i,r)||(i=r,t.className=r)});let a=e=>{let t=()=>fe(n.get().key);typeof t==`function`&&t(e)};t.addEventListener(`click`,a),r(()=>t.removeEventListener(`click`,a));let o=re(`rue:compiled-slot`);return E(t,o),B(()=>{let e=pe(n.get().key,n.get().label);A(()=>v(e,t,o))}),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(r,i)=>{e=r,t=i,n.set(r),a.set(i)})})}),m(x,b,()=>{let e=N.value.join(`, `);return e?{__rue_compiled_branch_key:e,create:()=>i(Object.assign(t=>{let n=D(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>i(Object.assign(e=>{let t=D(`无`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),m(S,ee,()=>{let e=P.value.join(`, `);return e?{__rue_compiled_branch_key:e,create:()=>i(Object.assign(t=>{let n=D(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>i(Object.assign(e=>{let t=D(`无`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),B(()=>{let e=me();A(()=>v(e,w,C))}),B(()=>{let e=he();A(()=>v(e,te,T))});let H=j(ne);return s(H,Y,()=>({className:`w-full`,columns:se.value,dataSource:yt,sortDirections:[`descend`,`ascend`],onChange:(e,t,n)=>{N.value=Array.isArray(t?.name)&&t.name.length>0?t.name:[],P.value=Array.isArray(t?.address)&&t.address.length>0?t.address:[];let r=Array.isArray(n)?n[0]:n;I.value={columnKey:r?.order?r?.columnKey??null:null,order:r?.order??null},U()}})),ne.insertBefore(H,k),t})),code:Pt}));A(()=>v(e,Te,Se))}),B(()=>{let e=x(Q,()=>({title:`多列排序（优先级组合）`,summary:`补回多列优先级排序示例，支持 { compare, multiple } 并按优先级组合排序。`,tab:g,preview:c(()=>k(e=>{let t=ot().content.cloneNode(!0).firstChild,a=t.childNodes[0].childNodes[0],o=t.childNodes[0].childNodes[1],c=t.childNodes[0].childNodes[2],d=t.childNodes[0].childNodes[3],p=t.childNodes[1].childNodes[0],m=p.parentNode,g=t.childNodes[1].childNodes[1].childNodes[1],_=g.parentNode,y=t.childNodes[2],b=y.parentNode;l(a,`btn btn-ghost btn-xs`);let x=e=>{let t=()=>ge({chinese:`descend`,math:`descend`});typeof t==`function`&&t(e)};a.addEventListener(`click`,x),u(()=>a.removeEventListener(`click`,x)),l(o,`btn btn-ghost btn-xs`);let ee=e=>{let t=()=>ge({chinese:`descend`,math:`descend`,english:`descend`});typeof t==`function`&&t(e)};o.addEventListener(`click`,ee),u(()=>o.removeEventListener(`click`,ee)),l(c,`btn btn-ghost btn-xs`);let S=e=>{let t=()=>ge({chinese:`ascend`,english:`descend`});typeof t==`function`&&t(e)};c.addEventListener(`click`,S),u(()=>c.removeEventListener(`click`,S)),l(d,`btn btn-ghost btn-xs`);let C=e=>{let t=()=>ge({});typeof t==`function`&&t(e)};d.addEventListener(`click`,C),u(()=>d.removeEventListener(`click`,C));let w=[];B(()=>{w=n(m,p,w,St||[],(e,t)=>e.key,(e,t)=>{let n=h(e),a=h(t);return f((e,t,a)=>ie(e,a,()=>i(Object.assign(e=>{let t=O(`button`,e),i;B(()=>{let e=`btn btn-xs ${L.value[n.get().key]?`btn-primary`:`btn-ghost`}`,r=e==null?``:String(e);Object.is(i,r)||(i=r,t.className=r)});let a=e=>{let t=()=>_e(n.get().key);typeof t==`function`&&t(e)};t.addEventListener(`click`,a),r(()=>t.removeEventListener(`click`,a));let o=re(`rue:compiled-slot`);return E(t,o),B(()=>{let e=ve(n.get());A(()=>v(e,t,o))}),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(r,i)=>{e=r,t=i,n.set(r),a.set(i)})})}),B(()=>{let e=ye();A(()=>v(e,_,g))});let T=j(b);return s(T,Y,()=>({className:`w-full`,columns:ue.value,dataSource:xt,sortDirections:[`descend`,`ascend`],onChange:(e,t,n)=>{let r=Array.isArray(n)?n:n?.order?[n]:[];L.value=r.reduce((e,t)=>{let n=t?.columnKey,r=t?.order;return Ct(n)&&wt(r)&&(e[n]=r),e},{}),de()}})),b.insertBefore(T,y),t})),code:Ft}));A(()=>v(e,De,Ee))}),B(()=>{let t=x(Q,()=>({title:`动态列显隐`,summary:`把基础的隐藏列示例 补回来，并用外部开关控制列可见性。`,tab:_,preview:c(()=>i(Object.assign(t=>{let a=st().content.cloneNode(!0).firstChild,o=a.childNodes[0].childNodes[0],c=o.parentNode,l=a.childNodes[1],u=l.parentNode,d=[];B(()=>{d=n(c,o,d,Et||[],(e,t)=>e.key,(t,n)=>{let a=h(t),o=h(n);return f((t,n,o)=>ie(t,o,()=>i(Object.assign(t=>{let n=O(`button`,t),o;B(()=>{let e=`btn btn-xs ${R.value.includes(a.get().key)?`btn-primary`:`btn-ghost`}`,t=e==null?``:String(e);Object.is(o,t)||(o=t,n.className=t)});let s=e=>{let t=()=>be(a.get().key);typeof t==`function`&&t(e)};return n.addEventListener(`click`,s),r(()=>n.removeEventListener(`click`,s)),e(()=>R.value.includes(a.get().key)?{__rue_compiled_branch_key:!0,create:()=>i(Object.assign(e=>{let t=D(typeof`隐藏 ${a.get().label}`==`string`||typeof`隐藏 ${a.get().label}`==`number`||typeof`隐藏 ${a.get().label}`==`bigint`?`隐藏 ${a.get().label}`:``);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>i(Object.assign(e=>{let t=D(typeof`显示 ${a.get().label}`==`string`||typeof`显示 ${a.get().label}`==`number`||typeof`显示 ${a.get().label}`==`bigint`?`显示 ${a.get().label}`:``);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}).__rue_compiled_mount(n),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))),(e,r)=>{t=e,n=r,a.set(e),o.set(r)})})});let p=j(u);return s(p,Y,()=>({className:`w-full`,columns:z.value,dataSource:Tt})),u.insertBefore(p,l),{__rue_compiled_host:a,__rue_compiled_roots:[a]}},{__rue_compiled_explicit_roots:!0}))),code:$}));A(()=>v(t,G,Oe))}),B(()=>{let e=x(Q,()=>({title:`选择模式`,summary:`展示多选、单选、禁用项、部分禁用几类示例，并增加选择列表头与回调展示。`,tab:y,preview:c(()=>i(Object.assign(e=>{let t=ct().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0].childNodes[1],r=n.parentNode,a=t.childNodes[0].childNodes[1],o=a.parentNode,c=t.childNodes[1].childNodes[0].childNodes[1],l=c.parentNode,u=t.childNodes[1].childNodes[1],d=u.parentNode;m(r,n,()=>{let e=T.value.join(`, `);return e?{__rue_compiled_branch_key:e,create:()=>i(Object.assign(t=>{let n=D(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>i(Object.assign(e=>{let t=D(`空`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}});let f=j(o);s(f,Y,()=>({className:`w-full`,columns:[{title:`姓名`,dataIndex:`name`},{title:`团队`,dataIndex:`team`},{title:`状态`,dataIndex:`status`}],dataSource:gt,rowSelection:{columnTitle:`成员`,selectedRowKeys:T.value,getCheckboxProps:e=>({disabled:e.status===`leave`}),onChange:e=>T.value=[...e]}})),o.insertBefore(f,a);let p=D(``);l.insertBefore(p,c),l.removeChild(c),C(p,()=>te.value[0]??`空`);let h=j(d);return s(h,Y,()=>({className:`w-full`,columns:[{title:`姓名`,dataIndex:`name`},{title:`城市`,dataIndex:`city`}],dataSource:gt.slice(0,4),rowSelection:{type:`radio`,hideSelectAll:!0,selectedRowKeys:te.value,onChange:e=>te.value=[...e]}})),d.insertBefore(h,u),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),code:It}));A(()=>v(e,ke,K))}),B(()=>{let e=x(Q,()=>({title:`展开、摘要与空态`,summary:`把展开行、按行点击展开、summary 和 emptyText 放在同一个业务场景里。`,tab:b,preview:c(()=>i(Object.assign(e=>{let t=lt().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0],r=n.parentNode,a=t.childNodes[1].childNodes[0],o=a.parentNode,c=j(r);s(c,Y,()=>({className:`w-full`,columns:[{title:`姓名`,dataIndex:`name`},{title:`绩效`,dataIndex:`score`,align:`right`}],dataSource:gt,expandable:{expandedRowKeys:ae.value,expandRowByClick:!0,onExpandedRowsChange:e=>ae.value=[...e],expandedRowRender:e=>k(t=>{let n=et().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[1],i=r.parentNode,a=n.childNodes[1].childNodes[1],o=a.parentNode;return B(()=>{let t=e.team;A(()=>v(t,i,r))}),B(()=>{let t=e.address;A(()=>v(t,o,a))}),n})},summary:e=>k(t=>{let n=tt().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[1],i=r.parentNode,a=n.childNodes[1].childNodes[1],o=a.parentNode;return B(()=>{let t=e.length;A(()=>v(t,i,r))}),B(()=>{let t=Math.round(e.reduce((e,t)=>e+t.score,0)/e.length);A(()=>v(t,o,a))}),n})})),r.insertBefore(c,n);let l=j(o);return s(l,Y,()=>({className:`w-full`,columns:[{title:`姓名`,dataIndex:`name`},{title:`团队`,dataIndex:`team`}],dataSource:[],emptyText:i(Object.assign(e=>{let t=O(`span`,e);return t.className=`text-sm opacity-60`,E(t,D(`暂无成员，请先创建数据。`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))})),o.insertBefore(l,a),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),code:Lt}));A(()=>v(e,Ae,q))}),B(()=>{let e=x(Q,()=>({title:`滚动、标题、尾部与省略`,summary:`展示滚动、title/footer、ellipsis 和滚动容器类示例，并串成一个长表格布局场景。`,tab:ee,preview:c(()=>i(Object.assign(e=>{let t=ut().content.cloneNode(!0).firstChild,n=t.childNodes[0],r=n.parentNode,a=j(r);return s(a,Y,()=>({className:`w-full`,columns:W,dataSource:gt.concat(gt).concat(gt),scroll:{x:900,y:220,scrollToFirstRowOnChange:!0},title:e=>k(t=>{let n=nt().content.cloneNode(!0).firstChild,r=n.childNodes[1],i=r.parentNode;return B(()=>{let t=e.length;A(()=>v(t,i,r))}),n}),footer:e=>i(Object.assign(e=>{let t=O(`div`,e);return t.className=`text-sm opacity-70`,E(t,D(`展示了固定列、纵向滚动和 ellipsis。`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))})),r.insertBefore(a,n),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),code:Rt}));A(()=>v(e,Me,je))}),B(()=>{let e=x(Q,()=>({title:`分组表头、隐藏列与单元格属性`,summary:`分组表头示例同时覆盖隐藏列、单元格 className/style 和操作列。`,tab:S,preview:c(()=>i(Object.assign(e=>{let t=dt().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0],i=t.childNodes[0].childNodes[0].childNodes[0],a=i.parentNode,o=t.childNodes[0].childNodes[1].childNodes[1],c=o.parentNode,l=t.childNodes[1],u=l.parentNode;n.className=`btn btn-ghost btn-xs`;let d=e=>{let t=we;typeof t==`function`&&t(e)};n.addEventListener(`click`,d),r(()=>n.removeEventListener(`click`,d));let f=D(``);a.insertBefore(f,i),a.removeChild(i),C(f,()=>V.value?`显示月薪列`:`隐藏月薪列`);let p=D(``);c.insertBefore(p,o),c.removeChild(o),C(p,()=>ne.value);let m=j(u);return s(m,Y,()=>({className:`w-full`,columns:Ce.value,dataSource:gt,rowHoverable:!0,onRow:e=>({onClick:()=>ne.value=`点击 ${e.name}`})})),u.insertBefore(m,l),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),code:zt}));A(()=>v(e,Pe,Ne))}),B(()=>{let e=x(Q,()=>({title:`静态样式、Pinned Rows 与 Pinned Cols`,summary:`基础静态样式示例 仍然提供，适合不需要 columns/dataSource 时直接写结构。`,tab:w,preview:c(()=>k(e=>{let t=X().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0],r=n.parentNode,i=t.childNodes[1].childNodes[0],a=i.parentNode;return B(()=>{let e=x(Y.TH,()=>({children:`商品`})),t=x(Y.TH,()=>({children:`负责人`})),i=x(Y.TH,()=>({children:`渠道`})),a=x(Y.TH,()=>({className:`text-right`,children:`库存`})),o=x(Y.TH,()=>({className:`text-right`,children:`价格`})),s=x(Y.TR,()=>({children:[e,t,i,a,o]})),c=x(Y.Head,()=>({children:s})),l=x(Y.Body,()=>({children:_t.map(e=>(()=>{let t=x(Y.TD,()=>({children:e.item})),n=x(Y.TD,()=>({children:e.owner})),r=x(Y.TD,()=>({children:e.channel})),i=x(Y.TD,()=>({className:`text-right`,children:e.stock})),a=x(Y.TD,()=>({className:`text-right`,children:e.price}));return x(Y.TR,()=>({key:e.id,children:[t,n,r,i,a]}))})())})),u=x(Y,()=>({zebra:!0,pinRows:!0,className:`w-full min-w-[640px]`,children:[c,l]}));A(()=>v(u,r,n))}),B(()=>{let e=x(Y.TH,()=>({className:`bg-base-100`,children:`姓名`})),t=x(Y.TH,()=>({children:`岗位`})),n=x(Y.TH,()=>({children:`团队`})),r=x(Y.TH,()=>({children:`城市`})),o=x(Y.TH,()=>({className:`text-right`,children:`绩效`})),s=x(Y.TH,()=>({className:`text-right`,children:`访问`})),c=x(Y.TH,()=>({className:`text-right`,children:`月薪`})),l=x(Y.TH,()=>({children:`地址`})),u=x(Y.TR,()=>({children:[e,t,n,r,o,s,c,l]})),d=x(Y.Head,()=>({children:u})),f=x(Y.Body,()=>({children:vt.map(e=>(()=>{let t=x(Y.TH,()=>({className:`bg-base-100`,children:e.name})),n=x(Y.TD,()=>({children:e.role})),r=x(Y.TD,()=>({children:e.team})),i=x(Y.TD,()=>({children:e.city})),a=x(Y.TD,()=>({className:`text-right`,children:e.score})),o=x(Y.TD,()=>({className:`text-right`,children:e.visits})),s=x(Y.TD,()=>({className:`text-right`,children:e.salary})),c=x(Y.TD,()=>({children:e.address}));return x(Y.TR,()=>({key:e.key,children:[t,n,r,i,a,o,s,c]}))})())})),p=x(Y,()=>({pinCols:!0,className:`w-[980px]`,children:[d,f]}));A(()=>v(p,a,i))}),t})),code:Bt}));A(()=>v(e,Ie,Fe))});let Ge=j(Re);s(Ge,ht,()=>({rows:Ot})),Re.insertBefore(Ge,Le);let Ke=j(Be);s(Ke,ht,()=>({rows:kt})),Be.insertBefore(Ke,ze);let qe=j(He);s(qe,ht,()=>({rows:At})),He.insertBefore(qe,Ve);let Je=j(We);return s(Je,ht,()=>({rows:jt})),We.insertBefore(Je,Ue),t});return x(ce,()=>({children:t}))})(),e=>H(()=>{})))};export{Vt as default};