import{At as e,C as t,Dn as n,Dt as r,E as i,Et as a,Mt as o,Ot as s,P as c,Pt as l,Q as u,Qt as d,St as f,T as p,Vt as m,_n as h,_t as g,an as _,at as v,b as y,bn as b,bt as x,ct as S,dt as C,et as w,ft as ee,gn as T,gt as E,hn as D,ht as O,in as k,kn as A,kt as j,mn as te,nt as ne,on as M,pn as re,qt as N,rt as P,sn as F,st as I,tn as L,tt as ie,ut as R,vn as z,vt as B,w as V,wn as H,x as ae,xn as oe,xt as U}from"./rue-runtime-HIMg8Lz8.js";import{t as W}from"./Code-DpH7u0gk.js";import{t as se}from"./tabs-C020zIXs.js";import{t as ce}from"./dropdown-BOXTjvCc.js";import{r as le}from"./SidebarPlaygroundDesign-Cj7sFoQ4.js";var ue=z(`<table><!--rue:text-hole:0--></table>`),de=z(`<span><span>▲</span><span>▼</span></span>`),fe=z(`<label class="flex items-center gap-2 text-sm"><input><span><!--rue:text-hole:0--></span></label>`),pe=z(`<div class="w-56 rounded-box border border-base-content/10 bg-base-100 p-3 shadow-xl"><!--rue:text-hole:0--><div class="max-h-56 space-y-2 overflow-auto"><!--rue:text-hole:1--><!--rue:text-hole:2--></div><!--rue:text-hole:3--></div>`),me=z(`<div class="relative flex items-center gap-2"><span><!--rue:text-hole:0--></span><!--rue:text-hole:1--><!--rue:text-hole:2--></div>`),he=z(`<th><!--rue:text-hole:0--></th>`),ge=z(`<label><input></label>`),_e=z(`<button class="btn btn-ghost btn-xs"><!--rue:text-hole:0--></button>`),ve=z(`<div><button class="btn btn-ghost btn-xs">Prev</button><!--rue:text-hole:0--><button class="btn btn-ghost btn-xs">Next</button></div>`),ye=z(`<label><input type="checkbox" class="checkbox"></label>`),be=z(`<div><!--rue:text-hole:0--><!--rue:text-hole:1--><table><!--rue:text-hole:2--><tbody><!--rue:text-hole:3--><!--rue:text-hole:4--></tbody><!--rue:text-hole:5--></table><!--rue:text-hole:6--><!--rue:text-hole:7--></div>`),xe=z(`<table></table>`),Se=z(`<thead><!--rue:text-hole:0--></thead>`),Ce=z(`<tbody><!--rue:text-hole:0--></tbody>`),we=z(`<tfoot><!--rue:text-hole:0--></tfoot>`),G=z(`<tr><!--rue:text-hole:0--></tr>`),Te=z(`<td><!--rue:text-hole:0--></td>`),Ee=0,K={emptyText:`No Data`,filterConfirm:`应用`,filterReset:`重置`,triggerAsc:`切换为升序`,triggerDesc:`切换为降序`,cancelSort:`取消排序`},De=(e,t)=>{if(t){if(Array.isArray(t)){let n=e;for(let e of t){if(n==null)return;n=n[e]}return n}return e?.[t]}},Oe=e=>e===`right`?`text-right`:e===`center`?`text-center`:`text-left`,q=(...e)=>e.filter(Boolean).join(` `).trim()||void 0,ke=(...e)=>{let t;return e.forEach(e=>{e&&(t=t?{...t,...e}:{...e})}),t},Ae=e=>e==null||e===!1?[]:Array.isArray(e)?[...e]:typeof e!=`string`&&typeof e?.[Symbol.iterator]==`function`?Array.from(e):[e],je=(e,t)=>e.key?e.key:typeof e.dataIndex==`string`?e.dataIndex:Array.isArray(e.dataIndex)&&e.dataIndex.length>0?e.dataIndex.join(`.`):`column-${t.join(`-`)}`,Me=e=>(e.children??[]).filter(e=>!e.hidden),Ne=e=>e.reduce((e,t)=>{if(t.hidden)return e;let n=Me(t);return n.length===0?e+1:e+Ne(n)},0),Pe=e=>{let t=1;return e.forEach(e=>{if(e.hidden)return;let n=Me(e);n.length>0&&(t=Math.max(t,1+Pe(n)))}),t},Fe=(e,t=[])=>{let n=[];return e.forEach((e,r)=>{if(e.hidden)return;let i=[...t,r],a=Me(e);if(a.length>0){n.push(...Fe(a,i));return}n.push({column:e,indexPath:i,key:je(e,i)})}),n},Ie=e=>{let t=e.filter(e=>!e.hidden),n=Pe(t),r=Array.from({length:n},()=>[]),i=(e,t,a=[])=>{e.forEach((e,o)=>{if(e.hidden)return;let s=[...a,o],c=Me(e),l=c.length>0?Ne(c):1,u=e.colSpan??l;if(u===0)return;let d=e.rowSpan??(c.length>0?1:n-t);r[t].push({column:e,index:o,key:je(e,s),colSpan:u,rowSpan:d}),c.length>0&&i(c,t+1,s)})};return i(t,0),r},Le=e=>!!(e.fixedCol||e.fixed===!0||e.fixed===`left`||e.fixed===`start`),Re=e=>typeof e==`object`&&!!e,ze=e=>{if(Re(e.sorter))return e.sorter.multiple},Be=e=>(Array.isArray(e)?e:typeof e?.get==`function`?e.get():[]).filter(e=>!!e?.order).sort((e,t)=>{let n=e.multiple??0,r=t.multiple??0;return n===r?0:r-n}),Ve=e=>{let t=Be(e.filter(e=>e.column.sortOrder!==void 0).map(e=>({key:e.key,order:e.column.sortOrder,multiple:ze(e.column)})));return t.length>0?t:Be(e.filter(e=>!!e.column.defaultSortOrder).map(e=>({key:e.key,order:e.column.defaultSortOrder,multiple:ze(e.column)})))},He=e=>{let t={};return e.forEach(({column:e,key:n})=>{if(e.filteredValue!==void 0){t[n]=Ae(e.filteredValue);return}e.defaultFilteredValue!==void 0&&(t[n]=Ae(e.defaultFilteredValue))}),t},Ue=(e,t)=>e<=1?1:e>=t?t:e,We=e=>typeof e==`number`?`${e}px`:e,Ge=e=>{switch(e){case`small`:return`table-sm`;case`middle`:return`table-md`;case`large`:return`table-lg`;case`xs`:case`sm`:case`md`:case`lg`:case`xl`:return`table-${e}`;default:return}},Ke=e=>({...K,...e}),qe=(e,t)=>typeof e==`function`?e({props:t})??{}:e??{},Je=e=>e?e===!0||e.showTitle!==!1:!1,J=e=>{switch(e){case`topLeft`:return`topStart`;case`topCenter`:return`topCenter`;case`topRight`:return`topEnd`;case`bottomLeft`:return`bottomStart`;case`bottomCenter`:return`bottomCenter`;case`bottomRight`:return`bottomEnd`;default:return`none`}},Ye=e=>e==null||e===!1?[]:(e.placement?.length?e.placement:e.position?.length?e.position.map(J):[`bottomEnd`]).filter((e,t,n)=>e===`none`?n.length===1:n.indexOf(e)===t),Xe=e=>{switch(e){case`topStart`:case`bottomStart`:return`justify-start`;case`topCenter`:case`bottomCenter`:return`justify-center`;default:return`justify-end`}},Ze=(e,t)=>{let n=e?.[t];return Array.isArray(n)?n:[]},Qe=({render:e,data:t})=>typeof e==`function`?e(t):null,$e=({render:e,record:t,index:n,indent:r,expanded:i})=>typeof e==`function`?e(t,n,r,i):null,et=e=>{let t=typeof e;return t===`string`||t===`number`},tt=M(p=>{let S=F(`useSetup:0:0`,()=>k(()=>{let{size:e,zebra:t,pinRows:n,pinCols:r,bordered:i,className:a,classNames:o,styles:s,children:l,dataSource:u,rowKey:d=`key`,showHeader:f=!0,onRow:m,onHeaderRow:h,onChange:g,rowSelection:_,pagination:v,expandable:y,rowClassName:b,summary:x,emptyText:S,locale:C,title:w,footer:ee,loading:T,rowHoverable:E=!1,rowHoverClass:D,tableLayout:O,sortDirections:k,showSorterTooltip:A,scroll:j,sticky:te,height:ne,onScroll:M}=p,re=Ke(C),N=c(()=>qe(o,p));N.get();let P=N,F=c(()=>qe(s,p));F.get();let I=F,L=typeof T==`object`?{spinning:T.spinning!==!1,tip:T.tip}:{spinning:!!T,tip:void 0},ie=y?.childrenColumnName??`children`,R=y?.indentSize??15,z=(e,t)=>(typeof d==`function`?d(e):e?.[d])??t,B=(e,t=[])=>e.flatMap((e,n)=>{let r=[...t,n],i=z(e,`row-${r.join(`-`)}`),a=Ze(e,ie);return a.length===0?[]:[i,...B(a,r)]}),V=`table`,H=Ge(e);return H&&(V+=` ${H}`),t&&(V+=` table-zebra`),(n||te)&&(V+=` table-pin-rows`),r&&(V+=` table-pin-cols`),i&&(V+=` border-separate border-spacing-0`),P.get().table&&(V+=` ${P.get().table}`),a&&(V+=` ${a}`),{size:e,zebra:t,pinRows:n,pinCols:r,bordered:i,className:a,classNames:o,styles:s,children:l,dataSource:u,rowKey:d,showHeader:f,onRow:m,onHeaderRow:h,onChange:g,rowSelection:_,pagination:v,expandable:y,rowClassName:b,summary:x,emptyText:S,locale:C,titleRender:w,footerRender:ee,loading:T,rowHoverable:E,rowHoverClass:D,tableLayout:O,sortDirections:k,showSorterTooltip:A,scroll:j,sticky:te,height:ne,onScroll:M,localeText:re,semanticClasses:N,__rue_phase2_semanticClasses:P,semanticStyles:F,__rue_phase2_semanticStyles:I,loadingConfig:L,childrenColumnName:ie,indentSize:R,getRecordKey:z,collectExpandedKeys:B,sizeClass:H,hasChildren:!(l==null||Array.isArray(l)&&l.length===0),cls:V}})),{size:w,zebra:D,pinRows:M,pinCols:N,bordered:P,className:I,classNames:L,styles:z,children:ae,dataSource:W,rowKey:se,showHeader:le,onRow:Se,onHeaderRow:Ce,onChange:we,rowSelection:G,pagination:Te,expandable:K,rowClassName:je,summary:Ne,emptyText:Pe,locale:J,titleRender:tt,footerRender:Y,loading:nt,rowHoverable:rt,rowHoverClass:it,tableLayout:at,sortDirections:ot,showSorterTooltip:st,scroll:ct,sticky:lt,height:ut,onScroll:dt,localeText:ft,semanticClasses:X,__rue_phase2_semanticClasses:pt,semanticStyles:Z,__rue_phase2_semanticStyles:mt,loadingConfig:ht,childrenColumnName:gt,indentSize:_t,getRecordKey:vt,collectExpandedKeys:Q,sizeClass:yt,hasChildren:bt}=S,{cls:xt}=S;if(bt)return e(e=>{let t=ue().content.cloneNode(!0).firstChild,n=t,r=t.childNodes[0],i=r.parentNode;return H(()=>{u(n,xt)}),H(()=>{let e=Z.get().table;a(n,e)}),H(()=>{let e=ae;A(()=>R(e,i,r))}),t});let St=Array.isArray(p.columns)?Fe(p.columns):[],[Ct]=F(`useState:1:2`,()=>_(()=>`rue-table-${Ee++}`)),[wt,Tt]=F(`useState:1:3`,()=>_(Ve(St))),[Et,Dt]=F(`useState:1:4`,()=>_(He(St))),[Ot,kt]=F(`useState:1:5`,()=>_({})),[At,jt]=F(`useState:1:6`,()=>_({})),Mt={value:null},Nt={value:null},[Pt,Ft]=F(`useState:1:7`,()=>_(0)),[It,Lt]=F(`useState:1:8`,()=>_(G?.defaultSelectedRowKeys?[...G.defaultSelectedRowKeys]:[])),$=Te!=null&&Te!==!1?Te:void 0,[Rt,zt]=F(`useState:1:9`,()=>_($?$.current??$.defaultCurrent??1:1)),[Bt]=F(`useState:1:10`,()=>_($?$.pageSize??$.defaultPageSize??10:Math.max(W?.length??0,1))),[Vt,Ht]=F(`useState:1:11`,()=>_(K?.defaultExpandedRowKeys?[...K.defaultExpandedRowKeys]:K?.defaultExpandAllRows&&Array.isArray(W)?W.flatMap((e,t)=>{let n=vt(e,`row-${t}`),r=Ze(e,gt);return K?.expandedRowRender||r.length>0?[n,...Q(r,[t])]:[]}):[]));if(Array.isArray(p.columns)&&Array.isArray(W)){let _=Ie(p.columns),S=Fe(p.columns),w=new Map(S.map(e=>[e.key,e])),D=()=>{Ft(e=>e+1)},k=S.some(e=>e.column.sortOrder!==void 0)?Ve(S):Be(wt),M=new Map(k.map(e=>[e.key,e])),F=S.reduce((e,t)=>{let n=t.column.filteredValue;return n===void 0?(e[t.key]=Ae(Et[t.key]),e):(e[t.key]=Ae(n),e)},{}),I=e=>{let t={};return Object.keys(e).forEach(n=>{Array.isArray(e[n])&&e[n].length>0&&(t[n]=[...e[n]])}),t},L=I(F),z=e=>typeof e.sorter==`function`?e.sorter:Re(e.sorter)&&typeof e.sorter.compare==`function`?e.sorter.compare:(t,n)=>{let r=De(t,e.dataIndex),i=De(n,e.dataIndex);return r==null&&i==null?0:r==null?-1:i==null||r>i?1:r<i?-1:0},ae=(e,t,n)=>{for(let r of Be(n)){let n=w.get(r.key);if(!n?.column.sorter)continue;let i=z(n.column),a=r.order===`ascend`?i(e,t):-i(e,t);if(a!==0)return a}return 0},se=(e,t)=>S.every(n=>{let r=t[n.key]??[];if(!Array.isArray(r)||r.length===0)return!0;let i=n.column.filterCombine??`or`;if(n.column.onFilter)return i===`and`?r.every(t=>n.column.onFilter(t,e)):r.some(t=>n.column.onFilter(t,e));let a=De(e,n.column.dataIndex);return i===`and`?r.every(e=>e===a):r.includes(a)}),ue=(e,t)=>{let n=r=>{let i=r.flatMap(t=>{let r=Ze(t,gt),i=r.length>0?n(r):[];return!se(t,e)&&i.length===0?[]:r.length>0?[{...t,[gt]:i}]:[t]});return Be(t).length>0&&(i=i.slice().sort((e,n)=>ae(e,n,t))),i};return n(W)},xe=K?.expandedRowKeys?[...K.expandedRowKeys]:[...Vt],Te=new Set(xe),Ee=(e,t=0,n=[],r=!1)=>e.flatMap((e,i)=>{let a=[...n,i],o=vt(e,`row-${a.join(`-`)}`),s=Ze(e,gt),c={key:o,record:e,indent:t,hasTreeChildren:s.length>0};return s.length>0&&(r||Te.has(o))?[c,...Ee(s,t+1,a,r)]:[c]}),He=Ee(W,0,[],!0),Ge=He.some(e=>e.hasTreeChildren),Ke=Ee(ue(F,k)),qe=Ke.length,J=$!=null,nt=J?Math.max(1,$.pageSize??Bt):Math.max(qe,1),pt=J?Math.max(1,Math.ceil(qe/nt)):1,mt=J?Ue($.current??Rt,pt):1,Q=J?Ke.slice((mt-1)*nt,mt*nt):Ke,yt=Q.map(e=>e.record),bt=G?.selectedRowKeys?[...G.selectedRowKeys]:[...It],St=new Set(bt),Ut=G?.align??`center`,Wt=!!G,Gt=!!K?.expandedRowRender,Kt=(Gt||Ge)&&K?.showExpandColumn!==!1,qt=+!!Wt+ +!!Kt,Jt=S.length+qt,Yt=ke(Z.get().wrapper,ct?.y===void 0?void 0:{maxHeight:We(ct.y)},ut===void 0?void 0:{height:We(ut)},lt&&typeof lt==`object`&&lt.offsetScroll!==void 0?{top:We(lt.offsetScroll)}:void 0),Xt=q(ct?.x?`overflow-x-auto`:void 0,ct?.y||ut!==void 0?`overflow-y-auto`:void 0,X.get().wrapper),Zt=ke(Z.get().table)??{},Qt=S.some(({column:e})=>!!e.ellipsis);at?Zt.tableLayout=at:(Qt||ct?.x)&&(Zt.tableLayout=`fixed`),ct?.x===!0?(Zt.width=`max-content`,Zt.minWidth=`100%`):ct?.x!==void 0&&(Zt.width=We(ct.x),Zt.minWidth=`100%`),(()=>{let e=globalThis,t=`__rue_table_outside_close_${Ct}`;if(e[t])return;let n=e=>{let t=e?.target;t&&(t.closest(`[data-rue-table-root="${Ct}"]`)||(Mt.value=null,D()))};e?.addEventListener&&e.addEventListener(`pointerdown`,n),e[t]=n})();let $t=()=>{if(!ct?.scrollToFirstRowOnChange)return;let e=Nt.value;e&&(e.scrollTop=0)},en=Be(k).map(e=>{let t=w.get(e.key);return t?{column:t.column,columnKey:e.key,order:e.order}:null}).filter(Boolean),tn=(e,t)=>{let n=e.title;return typeof n==`function`?n({sortOrder:M.get(t)?.order??null,filteredValue:F[t]??[],sortColumns:en,filters:L}):n},nn=e=>{let t=Be(e).map(e=>{let t=w.get(e.key);return t?{column:t.column,order:e.order,columnKey:e.key,field:t.column.dataIndex,multiple:e.multiple}:null}).filter(Boolean);return t.length===0?{column:null,order:null}:t.length===1?t[0]:t},rn=(e,t,n,r,i)=>{if(!we)return;let a=ue(r,i),o=Ee(a),s=J?Math.max(1,Math.ceil(o.length/n)):1,c=J?Ue(t,s):1,l=J?o.slice((c-1)*n,c*n).map(e=>e.record):o.map(e=>e.record);we(J?{current:c,pageSize:n}:!1,I(r),nn(i),{action:e,currentDataSource:l})},an=(e,t)=>{let n=w.get(e)?.column;if(!n?.sorter)return;let r=ze(n),i=(()=>{if(r!=null){let n=k.filter(t=>{let n=w.get(t.key)?.column;return ze(n??{})!=null&&t.key!==e}).map(e=>({...e}));return t&&n.push({key:e,order:t,multiple:r}),Be(n)}return t?[{key:e,order:t,multiple:r}]:[]})();Tt(i),D(),J&&$.current===void 0&&zt(1),$t(),rn(`sort`,J?1:mt,nt,F,i),setTimeout(()=>{setTimeout(()=>{let t=document.querySelector(`button[aria-label="sort-${e}"]`)?.closest(`table`)?.querySelector(`tbody`);if(!t)return;let n=new Map(Array.from(t.querySelectorAll(`tr[data-rue-table-row-key]`)).map(e=>[e.dataset.rueTableRowKey,e]));Ee(ue(F,i)).forEach(e=>{let r=n.get(String(e.key));r&&t.appendChild(r)})},0)},0)},on=(e,t,n)=>{let r=Ae(t),i={...F,[e]:r};S.find(t=>t.key===e)?.column?.filteredValue===void 0&&Dt(i),kt(t=>({...t,[e]:r})),D(),J&&$.current===void 0&&zt(1),n&&(Mt.value=null),$t(),rn(`filter`,J?1:mt,nt,i,k)},sn=e=>{let t=Ue(e,pt);J&&$.current===void 0&&zt(t),D(),J&&$.onChange&&$.onChange(t,nt),$t(),rn(`paginate`,t,nt,F,k)},cn=(e=>e.filter(e=>!G?.disabled&&!(G?.getCheckboxProps?G.getCheckboxProps(e.record):{})?.disabled))(Q).map(e=>e.key),ln=cn.length>0&&cn.every(e=>St.has(e)),un=cn.some(e=>St.has(e))&&!ln,dn=(e,t,n,r,i)=>{G?.selectedRowKeys===void 0&&Lt([...e]),D();let a=He.filter(t=>e.includes(t.key)).map(e=>e.record);n!==void 0&&G?.onSelect&&typeof r==`boolean`&&G.onSelect(n,r,a,i),G?.onChange&&G.onChange([...e],a,t)},fn=e=>{if(!G||G.type===`radio`)return;let t=new Set(cn),n=G.selectedRowKeys??It,r=new Set(n);t.forEach(t=>{e?r.add(t):r.delete(t)});let i=Array.from(r);if(dn(i,{type:`checkbox`}),G.onSelectAll){let t=He.filter(e=>i.includes(e.key)).map(e=>e.record);G.onSelectAll(e,t)}},pn=(e,t)=>{let n=!!K?.expandedRowRender&&(!K?.rowExpandable||K.rowExpandable(e.record)),r=e.hasTreeChildren||n;return{key:e.key,enabled:r,expanded:Te.has(e.key),hasExpandedRowRender:n,indent:e.indent,rowIndex:t}},mn=(e,t)=>{let n=pn(e,t);if(!n.enabled)return;let r=new Set(xe);n.expanded?r.delete(n.key):r.add(n.key);let i=Array.from(r);K?.expandedRowKeys===void 0&&Ht(i),D(),K?.onExpand&&K.onExpand(!n.expanded,e.record),K?.onExpandedRowsChange&&K.onExpandedRowsChange(i)},hn=e=>[...e.sortDirections??ot??[`ascend`,`descend`],null],gn=(e,t)=>{let n=hn(t),r=new Map(Be(wt).map(e=>[e.key,e])).get(e)?.order??null;return n[(n.findIndex(e=>e===r)+1+n.length)%n.length]},_n=(e,t)=>{let n=e.filterDropdownProps?.open??e.filterDropdownOpen;return n===void 0?Mt.value===t:!!n},vn=(e,t)=>(t?_n(t,e):Mt.value===e)||Ot[e]!==void 0?Ae(Ot[e]??F[e]):Ae(F[e]),yn=(e,t)=>{kt(n=>({...n,[e]:Ae(t)})),D()},bn=(e,t,n)=>{let r=_n(t,e);t.filterDropdownProps?.open===void 0&&t.filterDropdownOpen===void 0&&(n?Mt.value=e:Mt.value===e&&(Mt.value=null)),!n&&r!==n&&D(),t.filterDropdownProps?.onOpenChange?.(n),t.onFilterDropdownOpenChange?.(n)},xn=(e,t)=>{bn(e,t,!1)},Sn=(e,t,n)=>{on(e,vn(e,t),n?.closeDropdown??!0)},Cn=(e,t,n)=>{let r=t.filterResetToDefaultFilteredValue?Ae(t.defaultFilteredValue):[];if(yn(e,r),n?.confirm){on(e,r,n.closeDropdown??!0);return}n?.closeDropdown&&xn(e,t)},wn=(e,t)=>typeof e.filterIcon==`function`?e.filterIcon(t):e.filterIcon===void 0?`☰`:e.filterIcon,Tn=(e,t)=>typeof e.sortIcon==`function`?e.sortIcon({sortOrder:t}):m(Object.assign(e=>{let n=de().content.cloneNode(!0).firstChild,r=n,i=n.childNodes[0],a=n.childNodes[1],o;H(()=>{let e=q(`inline-flex flex-col leading-none`,t?`text-base-content`:`opacity-60`),n=e==null?``:String(e);Object.is(o,n)||(o=n,r.className=n)});let s;H(()=>{let e=q(t===`ascend`?`text-base-content`:`opacity-40`),n=e==null?``:String(e);Object.is(s,n)||(s=n,i.className=n)});let c;return H(()=>{let e=q(`-mt-0.5`,t===`descend`?`text-base-content`:`opacity-40`),n=e==null?``:String(e);Object.is(c,n)||(c=n,a.className=n)}),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})),En=(e,t,n)=>t?e.map(e=>{let r=typeof n.filterSearch==`function`?n.filterSearch(t,e):String(e.text).toLowerCase().includes(t.toLowerCase()),i=Array.isArray(e.children)?En(e.children,t,n):void 0;return r||i&&i.length>0?i&&i.length>0?{...e,children:i}:e:null}).filter(Boolean):e,Dn=(t,n,r,i,o=0)=>{let s=Array.isArray(i)?i:[];return(Array.isArray(t)?t:[]).flatMap(t=>{let i=s.includes(t.value),c=Array.isArray(t.children)&&t.children.length>0?Dn(t.children,n,r,s,o+1):[],l=O(e(()=>{let e=g(),c=fe().content.cloneNode(!0),l=c.firstChild,p=l,m=l.childNodes[0],h=l.childNodes[1].childNodes[0],_=h.parentNode;e.appendChild(c),u(p,`flex items-center gap-2 text-sm`),H(()=>{let e=o>0?{paddingLeft:`${o*12}px`}:void 0;a(p,e)}),H(()=>{U(m,`type`,String(n.filterMultiple===!1?`radio`:`checkbox`))}),H(()=>{U(m,`name`,String(`rue-table-filter-${Ct}-${r}`))}),H(()=>{u(m,n.filterMultiple===!1?`radio radio-xs`:`checkbox checkbox-xs`)}),H(()=>{f(m,!!i)});let v=e=>{let i=e=>{let i=e.target,a;if(n.filterMultiple===!1)a=i.checked?[t.value]:[];else{let e=new Set(s);i.checked?e.add(t.value):e.delete(t.value),a=Array.from(e)}yn(r,a),n.filterOnClose===!1&&on(r,a,!1)};typeof i==`function`&&i(e)};return m.addEventListener(`change`,v),d(()=>m.removeEventListener(`change`,v)),H(()=>{let e=t.text;A(()=>R(e,_,h))}),e},!0),`${String(t.value)}-${o}`);return c.length>0?[l,...c]:[l]})},On=(t,i,a,o,s)=>{let{safeDraftValues:l,__rue_phase2_safeDraftValues:f,safeMenuItems:p,__rue_phase2_safeMenuItems:_}=b(`useSetup:0:0`,()=>{let e=c(()=>Array.isArray(o)?o:[]);e.get();let t=e,n=c(()=>Array.isArray(s)?s:[]);return n.get(),{safeDraftValues:e,__rue_phase2_safeDraftValues:t,safeMenuItems:n,__rue_phase2_safeMenuItems:n}});return typeof i.filterDropdown==`function`?i.filterDropdown({setSelectedKeys:e=>yn(t,e),selectedKeys:l.get(),confirm:e=>Sn(t,i,e),clearFilters:e=>Cn(t,i,e),filters:i.filters,close:()=>xn(t,i),visible:a}):i.filterDropdown===void 0?e(a=>{let o=pe().content.cloneNode(!0).firstChild,s=o.childNodes[0],c=s.parentNode,f=o.childNodes[1].childNodes[0],_=f.parentNode,v=o.childNodes[1].childNodes[1],y=v.parentNode,b=o.childNodes[2],x=b.parentNode;return ne(c,s,()=>i.filterSearch?{__rue_compiled_branch_key:!0,create:()=>m(Object.assign(e=>{let i=T(`input`,e);i.setAttribute(`type`,`text`),i.className=`input input-bordered input-xs mb-2 w-full`,i.setAttribute(`placeholder`,`搜索筛选项`);let a;H(()=>{let e=At[t]??``,n=e==null?``:String(e);Object.is(a,n)||(a=n,r(i,n))});let o=e=>{let n=e=>{jt(n=>({...n,[t]:e.target.value})),D()};typeof n==`function`&&n(e)};return i.addEventListener(`input`,o),n(()=>i.removeEventListener(`input`,o)),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>m(Object.assign(e=>{let t=g();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),H(()=>{let e=Dn(p.get(),i,t,l.get());A(()=>R(e,_,f))}),ne(y,v,()=>p.get().length===0?{__rue_compiled_branch_key:!0,create:()=>m(Object.assign(e=>{let t=T(`div`,e);return t.className=`text-sm opacity-60`,re(t,h(`暂无匹配项`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>m(Object.assign(e=>{let t=g();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),H(()=>{let n=i.filterOnClose===!1?``:e(()=>{let e=g(),n=B(`div`,e);C(e,n),u(n,`mt-3 flex justify-end gap-2`);let r=B(`button`,n);C(n,r),u(r,`btn btn-ghost btn-xs`);let a=e=>{let n=()=>Cn(t,i,{confirm:!0});typeof n==`function`&&n(e)};r.addEventListener(`click`,a),d(()=>r.removeEventListener(`click`,a));let o=E(`rue:slot:anchor`);C(r,o),H(()=>{let e=ft.filterReset;A(()=>R(e,r,o))});let s=B(`button`,n);C(n,s),u(s,`btn btn-primary btn-xs`);let c=e=>{let n=()=>Sn(t,i);typeof n==`function`&&n(e)};s.addEventListener(`click`,c),d(()=>s.removeEventListener(`click`,c));let l=E(`rue:slot:anchor`);return C(s,l),H(()=>{let e=ft.filterConfirm;A(()=>R(e,s,l))}),e},!0);A(()=>R(n,x,b))}),o}):i.filterDropdown},kn=(e,t)=>{let n=e.showSorterTooltip??st;if(n===!1)return;if(typeof n==`object`&&n?.title!==void 0)return n.title;let r=gn(t,e);return r===`ascend`?ft.triggerAsc:r===`descend`?ft.triggerDesc:ft.cancelSort},An=(t,n)=>{let{titleNode:r,__rue_phase2_titleNode:i,filtered:a,__rue_phase2_filtered:s,sortOrder:l,draftValues:f,__rue_phase2_draftValues:p,filterSearchValue:m,visible:h,__rue_phase2_visible:_,menuItems:v,__rue_phase2_menuItems:y,sorterTooltipTitle:x,__rue_phase2_sorterTooltipTitle:S,_dropdownOpen:w,_dropdownOnOpenChange:ee,_dropdownChildren:T,_dropdownContent:D,_dropdownOverlay:O,_dropdownItems:k,_dropdownMenu:j,_dropdownPopupRender:te,dropdownProps:ne}=b(`useSetup:0:0`,()=>{let e=c(()=>tn(n,t));e.get();let r=e,i=c(()=>n.filtered??(F[t]??[]).length>0);i.get();let a=i,o=M.get(t)?.order??null,s=c(()=>vn(t,n));s.get();let l=s,u=At[t]??``,d=c(()=>_n(n,t));d.get();let f=d,p=c(()=>En(n.filters??[],u,n));p.get();let m=p,h=c(()=>kn(n,t));h.get();let g=h,{open:_,onOpenChange:v,children:y,content:b,overlay:x,items:S,menu:C,popupRender:w,...ee}=n.filterDropdownProps??{};return{titleNode:e,__rue_phase2_titleNode:r,filtered:i,__rue_phase2_filtered:a,sortOrder:o,draftValues:s,__rue_phase2_draftValues:l,filterSearchValue:u,visible:d,__rue_phase2_visible:f,menuItems:p,__rue_phase2_menuItems:m,sorterTooltipTitle:h,__rue_phase2_sorterTooltipTitle:g,_dropdownOpen:_,_dropdownOnOpenChange:v,_dropdownChildren:y,_dropdownContent:b,_dropdownOverlay:x,_dropdownItems:S,_dropdownMenu:C,_dropdownPopupRender:w,dropdownProps:ee}});return e(i=>{let s=me().content.cloneNode(!0).firstChild,c=s.childNodes[0].childNodes[0],p=c.parentNode,m=s.childNodes[1],_=m.parentNode,y=s.childNodes[2],b=y.parentNode;return H(()=>{let e=r.get();A(()=>R(e,p,c))}),H(()=>{let r=n.sorter?e(()=>{let e=g(),r=B(`button`,e);C(e,r),U(r,`type`,`button`),H(()=>{U(r,`aria-label`,String(`sort-${t}`))}),H(()=>{U(r,`title`,String(x.get()))}),u(r,`btn btn-ghost btn-xs h-auto min-h-0 px-1 py-0.5`);let i=e=>{let r=e=>{e.stopPropagation(),an(t,gn(t,n))};typeof r==`function`&&r(e)};r.addEventListener(`click`,i),d(()=>r.removeEventListener(`click`,i));let a=E(`rue:slot:anchor`);return C(r,a),H(()=>{let e=Tn(n,l);A(()=>R(e,r,a))}),e},!0):``;A(()=>R(r,_,m))}),H(()=>{let e=Array.isArray(n.filters)&&n.filters.length>0||n.filterDropdown!==void 0?(()=>{let e=o(ce.Trigger,()=>({as:`button`,type:`button`,"aria-label":`filter-${t}`,className:q(`btn btn-ghost btn-xs h-auto min-h-0 px-1 py-0.5 select-none`,a.get()?`text-base-content`:`opacity-40`),children:wn(n,a.get())})),r=o(ce.Content,()=>({className:`dropdown-content z-50 mt-2 p-0`,onClick:e=>e.stopPropagation(),children:On(t,n,h.get(),f.get(),v.get())}));return o(ce,()=>({trigger:`click`,open:h.get(),closeOnClick:!1,align:`start`,...ne,onOpenChange:e=>bn(t,n,e),children:[e,r]}))})():``;A(()=>R(e,b,y))}),s})},jn=t=>{let{cellProps:n,__rue_phase2_cellProps:r,children:i,__rue_phase2_children:o,isLeaf:s,__rue_phase2_isLeaf:l,leaf:d,__rue_phase2_leaf:f,key:p,__rue_phase2_key:m,colSpan:h,__rue_phase2_colSpan:g,rowSpan:_,__rue_phase2_rowSpan:v}=b(`useSetup:0:0`,()=>{let e=c(()=>t.meta.column.onHeaderCell&&t.meta.column.onHeaderCell(t.meta.column,t.meta.index)||{});e.get();let n=e,r=c(()=>Me(t.meta.column));r.get();let i=r,a=c(()=>i.get().length===0);a.get();let o=a,s=c(()=>o.get()?w.get(t.meta.key)??null:null);s.get();let l=s,u=c(()=>l.get()?.key??t.meta.key);u.get();let d=u,f=c(()=>n.get().colSpan??t.meta.colSpan);f.get();let p=f,m=c(()=>n.get().rowSpan??t.meta.rowSpan);return m.get(),{cellProps:e,__rue_phase2_cellProps:n,children:r,__rue_phase2_children:i,isLeaf:a,__rue_phase2_isLeaf:o,leaf:s,__rue_phase2_leaf:l,key:u,__rue_phase2_key:d,colSpan:f,__rue_phase2_colSpan:p,rowSpan:m,__rue_phase2_rowSpan:m}});if(h.get()===0||_.get()===0)return null;let{className:y,style:x,...S}=n.get(),C=q(X.get().headerCell,Oe(t.meta.column.align),t.meta.column.className,y),ee=ke(Z.get().headerCell,t.meta.column.width||t.meta.column.minWidth?{...t.meta.column.width?{width:t.meta.column.width}:{},...t.meta.column.minWidth?{minWidth:t.meta.column.minWidth}:{}}:void 0,x),T=d.get()?An(p.get(),t.meta.column):tn(t.meta.column,t.meta.key);return e(e=>{let t=he().content.cloneNode(!0).firstChild,n=t,r=t.childNodes[0],i=r.parentNode;return H(()=>{U(n,`colSpan`,String(h.get()))}),H(()=>{U(n,`rowSpan`,String(_.get()))}),H(()=>{u(n,C)}),H(()=>{a(n,ee)}),H(()=>{j(n,S,[])}),H(()=>{let e=T;A(()=>R(e,i,r))}),t})},Mn=(e,t)=>{if(!G)return null;let r=G.getCheckboxProps?{...G.getCheckboxProps(e.record)}:{};G.disabled&&(r.disabled=!0);let i=St.has(e.key),a=G.type===`radio`?`radio`:`checkbox`,s=t=>{let n=t.target;if(G.type===`radio`){dn([e.key],{type:`radio`},e.record,!0,t);return}let r=G.selectedRowKeys??It,i=new Set(r);n.checked?i.add(e.key):i.delete(e.key),dn(Array.from(i),{type:`checkbox`},e.record,n.checked,t)},c=m(Object.assign(e=>{let t=ge().content.cloneNode(!0).firstChild,o=t,c=t.childNodes[0],u=e=>{let t=e=>e.stopPropagation();typeof t==`function`&&t(e)};o.addEventListener(`click`,u),n(()=>o.removeEventListener(`click`,u));let d;H(()=>{let e=G.type===`radio`?`radio`:`checkbox`;Object.is(d,e)||(d=e,e==null||e===!1?c.removeAttribute(`type`):c.setAttribute(`type`,String(e)))});let f;H(()=>{let e=a,t=e==null?``:String(e);Object.is(f,t)||(f=t,c.className=t)});let p;H(()=>{let e=!!i;Object.is(p,e)||(p=e,c.checked=e)});let m=e=>{let t=s;typeof t==`function`&&t(e)};return c.addEventListener(`change`,m),n(()=>c.removeEventListener(`change`,m)),l(c,()=>r,[]),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),u=G.renderCell?G.renderCell(i,e.record,t,c):c,d=N&&G.fixed?`th`:`td`;return o(d,()=>({className:q(X.get().cell,Oe(Ut)),style:ke(Z.get().cell,G.columnWidth?{width:G.columnWidth}:void 0),children:u}))},Nn=(e,t,r)=>r.enabled?K?.expandIcon?K.expandIcon({expanded:r.expanded,expandable:r.enabled,record:e.record,onExpand:(n,r)=>{r?.stopPropagation?.(),mn(e,t)}}):m(Object.assign(i=>{let a=_e().content.cloneNode(!0).firstChild,o=a,s=a.childNodes[0],c=s.parentNode;o.className=`btn btn-ghost btn-xs`;let l=n=>{let r=n=>{n.stopPropagation(),mn(e,t)};typeof r==`function`&&r(n)};return o.addEventListener(`click`,l),n(()=>o.removeEventListener(`click`,l)),ne(c,s,()=>r.expanded?{__rue_compiled_branch_key:!0,create:()=>m(Object.assign(e=>{let t=h(`-`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>m(Object.assign(e=>{let t=h(`+`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),{__rue_compiled_host:a,__rue_compiled_roots:[a]}},{__rue_compiled_explicit_roots:!0})):null,Pn={total:qe,page:mt,pageSize:nt},Fn=yt.slice();Fn.total=qe;let In=tt?o(Qe,()=>({render:tt,data:yt})):null,Ln=Y?o(Qe,()=>({render:Y,data:yt})):null,Rn=Ye($),zn=J&&!($?.hideOnSinglePage&&pt<=1)&&(Rn.length!==1||Rn[0]!==`none`),Bn=e=>m(Object.assign(r=>{let o=ve().content.cloneNode(!0).firstChild,s=o,c=o.childNodes[0],l=o.childNodes[2],u=o.childNodes[1],d=u.parentNode,f;H(()=>{let t=e;Object.is(f,t)||(f=t,t==null||t===!1?s.removeAttribute(`data-rue-table-pager`):s.setAttribute(`data-rue-table-pager`,String(t)))});let p;H(()=>{let t=q(`flex items-center gap-2 p-2`,Xe(e),X.get().pager),n=t==null?``:String(t);Object.is(p,n)||(p=n,s.className=n)});let g;H(()=>{let e=Z.get().pager;Object.is(g,e)||(g=e,a(s,e))}),c.className=`btn btn-ghost btn-xs`;let _;H(()=>{let e=mt<=1;Object.is(_,e)||(_=e,c.disabled=e)});let b=e=>{let t=()=>sn(mt-1);typeof t==`function`&&t(e)};c.addEventListener(`click`,b),n(()=>c.removeEventListener(`click`,b)),l.className=`btn btn-ghost btn-xs`;let x;H(()=>{let e=mt>=pt;Object.is(x,e)||(x=e,l.disabled=e)});let S=e=>{let t=()=>sn(mt+1);typeof t==`function`&&t(e)};l.addEventListener(`click`,S),n(()=>l.removeEventListener(`click`,S));let C=[];return H(()=>{let r=Array.from({length:pt})||[];C=V(d,u,C,r,(t,n)=>`page-${e}-${n+1}`,(e,r)=>{let a=v(e),o=v(r);return t((e,t,r)=>i(e,r,()=>m(Object.assign(e=>{let t=T(`button`,e),r;H(()=>{let e=`btn btn-ghost btn-xs${mt===o.get()+1?` btn-active`:``}`,n=e==null?``:String(e);Object.is(r,n)||(r=n,t.className=n)});let i=e=>{let t=()=>sn(o.get()+1);typeof t==`function`&&t(e)};t.addEventListener(`click`,i),n(()=>t.removeEventListener(`click`,i));let a=h(``);return re(t,a),oe(a,()=>o.get()+1),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,n)=>{e=t,r=n,a.set(t),o.set(n)})})}),n(()=>y(C)),{__rue_compiled_host:o,__rue_compiled_roots:[o]}},{__rue_compiled_explicit_roots:!0})),Vn=G?.getTitleCheckboxProps?.()??{},Hn=G?.type===`radio`||G?.hideSelectAll?null:m(Object.assign(e=>{let t=ye().content.cloneNode(!0).firstChild,r=t.childNodes[0];r.setAttribute(`type`,`checkbox`),r.className=`checkbox`;let i;H(()=>{let e=!!ln;Object.is(i,e)||(i=e,r.checked=e)});let a;H(()=>{let e=un?`mixed`:ln?`true`:`false`;Object.is(a,e)||(a=e,e==null||e===!1?r.removeAttribute(`aria-checked`):r.setAttribute(`aria-checked`,String(e)))});let o;H(()=>{let e=!!(G?.disabled||cn.length===0);Object.is(o,e)||(o=e,r.disabled=e)});let s=e=>{let t=e=>fn(e.target.checked);typeof t==`function`&&t(e)};return r.addEventListener(`change`,s),n(()=>r.removeEventListener(`change`,s)),l(r,()=>Vn,[]),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),Un=G?.columnTitle===void 0?Hn:typeof G.columnTitle==`function`?G.columnTitle(Hn):G.columnTitle,Wn=e=>{dt&&dt(e)};return e(r=>{let c=be().content.cloneNode(!0).firstChild,l=c,f=c.childNodes[2],p=c.childNodes[2].childNodes[1],h=c.childNodes[0],b=h.parentNode,w=c.childNodes[1],D=w.parentNode,O=c.childNodes[2].childNodes[0],k=O.parentNode,ne=c.childNodes[2].childNodes[1].childNodes[0],M=ne.parentNode,F=c.childNodes[2].childNodes[1].childNodes[1],I=F.parentNode,L=c.childNodes[2].childNodes[2],z=L.parentNode,ae=c.childNodes[3],oe=ae.parentNode,W=c.childNodes[4],se=W.parentNode;ee(l,()=>e=>{Nt.value=e}),H(()=>{U(l,`data-rue-table-root`,String(Ct))}),H(()=>{U(l,`data-rue-table-scroll`,String(Ct))}),H(()=>{U(l,`data-rue-table-version`,String(Pt))}),H(()=>{u(l,q(`relative`,P?`rounded-box border border-base-300 bg-base-100`:void 0,X.get().root,Xt))}),H(()=>{let e=ke(Z.get().root,Yt);a(l,e)});let ce=e=>{let t=Wn;typeof t==`function`&&t(e)};return l.addEventListener(`scroll`,ce),d(()=>l.removeEventListener(`scroll`,ce)),H(()=>{u(f,xt)}),H(()=>{a(f,Zt)}),H(()=>{U(f,`data-rue-table-id`,String(Ct))}),H(()=>{u(p,X.get().tbody)}),H(()=>{let e=Z.get().tbody;a(p,e)}),H(()=>{let e=zn?Rn.filter(e=>e.startsWith(`top`)).map(Bn):``;A(()=>R(e,b,h))}),H(()=>{let t=In?e(()=>{let e=g(),t=B(`div`,e);C(e,t),H(()=>{u(t,q(`p-2`,X.get().title))}),H(()=>{let e=Z.get().title;a(t,e)});let n=E(`rue:slot:anchor`);return C(t,n),H(()=>{let e=In;A(()=>R(e,t,n))}),e},!0):``;A(()=>R(t,D,w))}),H(()=>{let t=le?e(()=>{let t=g(),n=B(`thead`,t);C(t,n),H(()=>{u(n,X.get().thead)}),H(()=>{let e=Z.get().thead;a(n,e)});let r=E(`rue:slot:anchor`);return C(n,r),H(()=>{let t=_.map((t,n)=>{let{className:r,style:i,...c}=Ce&&Ce(t.map(e=>e.column),n)||{},l=[];return t.forEach(e=>{l.push(o(jn,()=>({meta:e,level:n})))}),e(t=>{let o=B(`tr`,t);H(()=>{u(o,q(X.get().headerRow,r))}),H(()=>{let e=ke(Z.get().headerRow,i);a(o,e)}),H(()=>{j(o,c,[])});let d=E(`rue:slot:anchor`);C(o,d),H(()=>{let t=n===0&&Kt?e(()=>{let e=g(),t=B(`th`,e);C(e,t),H(()=>{U(t,`rowSpan`,String(_.length))}),H(()=>{u(t,q(X.get().headerCell,Oe(`center`)))}),H(()=>{let e=ke(Z.get().headerCell,K?.columnWidth?{width:K.columnWidth}:void 0);a(t,e)});let n=x(t);return C(t,n),H(()=>{s(n,K?.columnTitle)}),e},!0):``;A(()=>R(t,o,d))});let f=E(`rue:slot:anchor`);C(o,f),H(()=>{let t=n===0&&Wt?e(()=>{let e=g(),t=B(`th`,e);C(e,t),H(()=>{U(t,`rowSpan`,String(_.length))}),H(()=>{u(t,q(X.get().headerCell,Oe(Ut)))}),H(()=>{let e=ke(Z.get().headerCell,G?.columnWidth?{width:G.columnWidth}:void 0);a(t,e)});let n=E(`rue:slot:anchor`);return C(t,n),H(()=>{let e=Un;A(()=>R(e,t,n))}),e},!0):``;A(()=>R(t,o,f))});let p=E(`rue:slot:anchor`);return C(o,p),H(()=>{let e=l;A(()=>R(e,o,p))}),o})});A(()=>R(t,n,r))}),t},!0):``;A(()=>R(t,k,O))}),H(()=>{let t=Q.map((t,n)=>{let r=pn(t,n),{className:i,style:s,onClick:c,...l}=Se&&Se(t.record,n)||{},f=typeof je==`function`?je(t.record,n):``,p=rt?it||`hover:bg-base-200`:``,m=e=>{c&&c(e),!(!K?.expandRowByClick||!r.enabled)&&((e?.target)?.closest(`button, input, a, label`)||mn(t,n))},h=Gt&&r.hasExpandedRowRender&&r.expanded,_=h?typeof K?.expandedRowClassName==`function`?K.expandedRowClassName(t.record,n,t.indent):K?.expandedRowClassName:void 0;return(()=>{let c=e(()=>{let c=g(),h=B(`tr`,c);C(c,h),H(()=>{U(h,`data-rue-table-row-key`,String(String(t.key)))}),H(()=>{j(h,l,[`onClick`,`className`,`style`])});let _=e=>{let t=m;typeof t==`function`&&t(e)};h.addEventListener(`click`,_),d(()=>h.removeEventListener(`click`,_)),H(()=>{u(h,q(X.get().bodyRow,i,f,p))}),H(()=>{let e=ke(Z.get().bodyRow,s);a(h,e)});let v=E(`rue:slot:anchor`);C(h,v),H(()=>{let i=Kt?e(()=>{let e=g(),i=B(`td`,e);C(e,i),H(()=>{u(i,q(X.get().cell,Oe(`center`)))}),H(()=>{let e=ke(Z.get().cell,K?.columnWidth?{width:K.columnWidth}:void 0,t.indent>0?{paddingLeft:`${t.indent*_t}px`}:void 0);a(i,e)});let o=E(`rue:slot:anchor`);return C(i,o),H(()=>{let e=Nn(t,n,r);A(()=>R(e,i,o))}),e},!0):``;A(()=>R(i,h,v))});let y=E(`rue:slot:anchor`);C(h,y),H(()=>{let e=Wt?Mn(t,n):``;A(()=>R(e,h,y))});let b=E(`rue:slot:anchor`);return C(h,b),H(()=>{let i=S.map((i,a)=>{let s=De(t.record,i.column.dataIndex),c=i.column.render?i.column.render(s,t.record,n):s,l=i.column.onCell&&i.column.onCell(t.record,n)||{},{className:d,style:f,...p}=l,m=l.colSpan??1,h=l.rowSpan??1;if(m===0||h===0)return null;let _=!Kt&&a===0,v=i.column.rowScope||N&&Le(i.column)?`th`:`td`,y=q(X.get().cell,Oe(i.column.align),i.column.className,i.column.ellipsis?`truncate`:void 0,d),b=ke(Z.get().cell,i.column.width||i.column.minWidth?{...i.column.width?{width:i.column.width}:{},...i.column.minWidth?{minWidth:i.column.minWidth}:{}}:void 0,_&&t.indent>0?{paddingLeft:`${t.indent*_t}px`}:void 0,f),x=i.column.ellipsis&&Je(i.column.ellipsis)&&et(c)?String(c):void 0,S=_?e(()=>{let e=g(),a=B(`div`,e);C(e,a),u(a,`flex items-center gap-2`);let o=E(`rue:slot:anchor`);C(a,o),H(()=>{let e=Nn(t,n,r);A(()=>R(e,a,o))});let s=B(`span`,a);C(a,s),H(()=>{u(s,i.column.ellipsis?`truncate`:void 0)});let l=E(`rue:slot:anchor`);return C(s,l),H(()=>{let e=c;A(()=>R(e,s,l))}),e},!0):c;return o(v,()=>({key:`cell-${String(t.key)}-${i.key}-${a}`,className:y,style:b,title:x,colSpan:m,rowSpan:h,scope:i.column.rowScope,"data-rue-table-indent":_&&t.indent>0?String(t.indent):void 0,...p,children:S}))});A(()=>R(i,h,b))}),c}),v=e(()=>{let e=g(),r=B(`tr`,e);C(e,r),H(()=>{u(r,_)});let i=B(`td`,r);C(r,i),H(()=>{U(i,`colSpan`,String(Jt))});let a=E(`rue:component:anchor`);return C(i,a),H(()=>{let e=o($e,()=>({render:K?.expandedRowRender,record:t.record,index:n,indent:t.indent,expanded:!0}));A(()=>R(e,i,a))}),e});return[c,h?v:void 0]})()});A(()=>R(t,M,ne))}),H(()=>{let t=Q.length===0?e(()=>{let e=g(),t=B(`tr`,e);C(e,t);let n=B(`td`,t);C(t,n),H(()=>{U(n,`colSpan`,String(Jt))}),H(()=>{u(n,q(X.get().empty,Oe(`center`)))}),H(()=>{let e=Z.get().empty;a(n,e)});let r=E(`rue:slot:anchor`);return C(n,r),H(()=>{let e=Pe===void 0?ft.emptyText:Pe;A(()=>R(e,n,r))}),e},!0):``;A(()=>R(t,I,F))}),H(()=>{let r=typeof Ne==`function`||zn&&Rn.some(e=>e.startsWith(`bottom`))?e(()=>{let r=g(),o=B(`tfoot`,r);C(r,o),H(()=>{u(o,X.get().tfoot)}),H(()=>{let e=Z.get().tfoot;a(o,e)});let s=E(`rue:slot:anchor`);return C(o,s),H(()=>{let t=typeof Ne==`function`?e(()=>{let e=g(),t=B(`tr`,e);C(e,t),H(()=>{u(t,X.get().summary)}),H(()=>{let e=Z.get().summary;a(t,e)});let n=B(`td`,t);C(t,n),H(()=>{U(n,`colSpan`,String(Jt))});let r=E(`rue:slot:anchor`);return C(n,r),H(()=>{let e=Ne(Fn,Pn);A(()=>R(e,n,r))}),e},!0):``;A(()=>R(t,o,s))}),ie(()=>zn?{__rue_compiled_branch_key:!0,create:()=>m(Object.assign(e=>{let r=g(),a=te(`rue:list:end`);re(r,a);let o=[];return H(()=>{let e=Rn.filter(e=>e.startsWith(`bottom`))||[];o=V(a.parentNode,a,o,e,(e,t)=>`pager-row-${e}`,(e,n)=>{let r=v(e);return t((e,t,n)=>i(e,n,()=>m(Object.assign(e=>{let t=T(`tr`,e),n=T(`td`,t);re(t,n);let i;H(()=>{let e=Jt;Object.is(i,e)||(i=e,e==null||e===!1?n.removeAttribute(`colSpan`):n.setAttribute(`colSpan`,String(e)))});let a=te(`rue:compiled-slot`);return re(n,a),H(()=>{let e=Bn(r.get());A(()=>R(e,n,a))}),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,i)=>{e=t,n=i,r.set(t)})})}),n(()=>y(o)),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>m(Object.assign(e=>{let t=g();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}).__rue_compiled_mount(o),r},!0):``;A(()=>R(r,z,L))}),H(()=>{let t=Ln?e(()=>{let e=g(),t=B(`div`,e);C(e,t),H(()=>{u(t,q(`p-2`,X.get().footer))}),H(()=>{let e=Z.get().footer;a(t,e)});let n=E(`rue:slot:anchor`);return C(t,n),H(()=>{let e=Ln;A(()=>R(e,t,n))}),e},!0):``;A(()=>R(t,oe,ae))}),H(()=>{let t=ht.spinning?e(()=>{let t=g(),n=B(`div`,t);C(t,n),H(()=>{u(n,q(`absolute inset-0 z-20 flex flex-col items-center justify-center gap-2 rounded-box bg-base-100/70`,X.get().loading))}),H(()=>{let e=Z.get().loading;a(n,e)});let r=B(`span`,n);C(n,r),u(r,`loading loading-spinner loading-md`);let i=E(`rue:slot:anchor`);return C(n,i),H(()=>{let t=ht.tip?e(()=>{let e=g(),t=B(`div`,e);C(e,t),u(t,`text-sm opacity-70`);let n=E(`rue:slot:anchor`);return C(t,n),H(()=>{let e=ht.tip;A(()=>R(e,t,n))}),e},!0):``;A(()=>R(t,n,i))}),t},!0):``;A(()=>R(t,se,W))}),c})}return m(Object.assign(e=>{let t=xe().content.cloneNode(!0).firstChild,n=t,r;H(()=>{let e=xt,t=e==null?``:String(e);Object.is(r,t)||(r=t,n.className=t)});let i;return H(()=>{let e=Z.get().table;Object.is(i,e)||(i=e,a(n,e))}),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),Y=Object.assign(tt,{Head:e=>{let t=v(e.children),n=v(e.className);return S(m(Object.assign(e=>{let r=Se().content.cloneNode(!0).firstChild,i=r,a=r.childNodes[0],o=a.parentNode,s;return H(()=>{let e=n.get()||void 0,t=e==null?``:String(e);Object.is(s,t)||(s=t,i.className=t)}),p({parent:o,before:a},()=>t.get(),()=>({})),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})),e=>w(()=>{t.set(e.children),n.set(e.className)}),()=>e)},Body:e=>{let t=v(e.children),n=v(e.className);return S(m(Object.assign(e=>{let r=Ce().content.cloneNode(!0).firstChild,i=r,a=r.childNodes[0],o=a.parentNode,s;return H(()=>{let e=n.get()||void 0,t=e==null?``:String(e);Object.is(s,t)||(s=t,i.className=t)}),p({parent:o,before:a},()=>t.get(),()=>({})),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})),e=>w(()=>{t.set(e.children),n.set(e.className)}),()=>e)},Foot:e=>{let t=v(e.children),n=v(e.className);return S(m(Object.assign(e=>{let r=we().content.cloneNode(!0).firstChild,i=r,a=r.childNodes[0],o=a.parentNode,s;return H(()=>{let e=n.get()||void 0,t=e==null?``:String(e);Object.is(s,t)||(s=t,i.className=t)}),p({parent:o,before:a},()=>t.get(),()=>({})),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})),e=>w(()=>{t.set(e.children),n.set(e.className)}),()=>e)},TR:e=>{let t=v(e.children),n=v(e.className);return S(m(Object.assign(e=>{let r=G().content.cloneNode(!0).firstChild,i=r,a=r.childNodes[0],o=a.parentNode,s;return H(()=>{let e=n.get()||void 0,t=e==null?``:String(e);Object.is(s,t)||(s=t,i.className=t)}),p({parent:o,before:a},()=>t.get(),()=>({})),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})),e=>w(()=>{t.set(e.children),n.set(e.className)}),()=>e)},TH:e=>{let t=v(e.children),n=v(e.className);return S(m(Object.assign(e=>{let r=he().content.cloneNode(!0).firstChild,i=r,a=r.childNodes[0],o=a.parentNode,s;return H(()=>{let e=n.get()||void 0,t=e==null?``:String(e);Object.is(s,t)||(s=t,i.className=t)}),p({parent:o,before:a},()=>t.get(),()=>({})),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})),e=>w(()=>{t.set(e.children),n.set(e.className)}),()=>e)},TD:e=>{let t=v(e.children),n=v(e.className);return S(m(Object.assign(e=>{let r=Te().content.cloneNode(!0).firstChild,i=r,a=r.childNodes[0],o=a.parentNode,s;return H(()=>{let e=n.get()||void 0,t=e==null?``:String(e);Object.is(s,t)||(s=t,i.className=t)}),p({parent:o,before:a},()=>t.get(),()=>({})),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})),e=>w(()=>{t.set(e.children),n.set(e.className)}),()=>e)}}),nt=z(`<div class="text-sm leading-6"><div>团队：<!--rue:text-hole:0--></div><div>地址：<!--rue:text-hole:1--></div></div>`),rt=z(`<div class="flex justify-between text-sm"><span>当前行数：<!--rue:text-hole:0--></span><span>平均绩效： <!--rue:text-hole:1--></span></div>`),it=z(`<div class="text-sm font-medium">成员列表（当前页 <!--rue:text-hole:0--> 行）</div>`),at=z(`<div class="overflow-x-auto rounded-box border border-base-300 bg-base-100 p-4"><!--rue:opaque-hole:0--></div>`),ot=z(`<div class="grid gap-4 lg:grid-cols-2"><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="mb-3 text-sm font-medium">带背景与激活行</div><!--rue:opaque-hole:0--></div><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="mb-3 text-sm font-medium">hover / zebra / xs</div><!--rue:opaque-hole:1--></div></div>`),st=z(`<div class="space-y-4 rounded-box border border-base-300 bg-base-100 p-4"><div class="flex flex-wrap items-center gap-2 text-sm"><!--rue:text-hole:0--><button class="btn btn-ghost btn-xs">清空排序</button><button>只看 Jim</button><button>只看 London</button><button>Jim + London</button><button class="btn btn-ghost btn-xs">清空筛选</button><button class="btn btn-ghost btn-xs">清空全部</button><span class="opacity-70">筛选：Name <!--rue:text-hole:1--> / Address <!--rue:text-hole:2-->； 当前排序： <!--rue:text-hole:3--> / <!--rue:text-hole:4--></span></div><!--rue:opaque-hole:5--></div>`),ct=z(`<div class="space-y-4 rounded-box border border-base-300 bg-base-100 p-4"><div class="flex flex-wrap gap-2 text-sm"><button class="btn btn-ghost btn-xs">语文 + 数学降序</button><button class="btn btn-ghost btn-xs">三科降序</button><button class="btn btn-ghost btn-xs">语文升序 + 英语降序</button><button class="btn btn-ghost btn-xs">清空排序</button></div><div class="flex flex-wrap items-center gap-2 text-sm"><!--rue:text-hole:0--><span class="opacity-70">当前优先级：<!--rue:text-hole:1--></span></div><!--rue:opaque-hole:2--></div>`),lt=z(`<div class="space-y-4 rounded-box border border-base-300 bg-base-100 p-4"><div class="flex flex-wrap gap-2 text-sm"><!--rue:text-hole:0--></div><!--rue:opaque-hole:1--></div>`),ut=z(`<div class="grid gap-4 lg:grid-cols-2"><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="mb-3 text-sm">多选：当前 <!--rue:text-hole:0--></div><!--rue:opaque-hole:1--></div><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="mb-3 text-sm">单选：当前 <!--rue:text-hole:2--></div><!--rue:opaque-hole:3--></div></div>`),dt=z(`<div class="grid gap-4 lg:grid-cols-2"><div class="rounded-box border border-base-300 bg-base-100 p-4"><!--rue:opaque-hole:0--></div><div class="rounded-box border border-base-300 bg-base-100 p-4"><!--rue:opaque-hole:1--></div></div>`),ft=z(`<div class="rounded-box border border-base-300 bg-base-100 p-4"><!--rue:opaque-hole:0--></div>`),X=z(`<div class="space-y-4 rounded-box border border-base-300 bg-base-100 p-4"><div class="flex flex-wrap gap-2 text-sm"><button class="btn btn-ghost btn-xs"><!--rue:text-hole:0--></button><span>最近操作：<!--rue:text-hole:1--></span></div><!--rue:opaque-hole:2--></div>`),pt=z(`<div class="grid gap-4 xl:grid-cols-2"><div class="h-72 overflow-auto rounded-box border border-base-300 bg-base-100 p-4"><!--rue:opaque-hole:0--></div><div class="rounded-box border border-base-300 bg-base-100 p-4 overflow-x-auto"><!--rue:opaque-hole:1--></div></div>`),Z=z(`<div class="component-preview not-prose text-base-content my-6 lg:my-12"><div class="flex flex-wrap items-start justify-between gap-3"><div><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># <!--rue:text-hole:0--></h2><!--rue:text-hole:1--></div></div><!--rue:opaque-hole:2--><!--rue:text-hole:3--></div>`),mt=z(`<div class="not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100"><table class="table table-zebra"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><!--rue:text-hole:0--></tbody></table></div>`),ht=z(`<button class="btn btn-ghost btn-xs">查看</button>`),gt=z(`<div class="max-w-none prose prose-sm md:prose-base"><h1>Table 表格</h1><p>Rue Table 现在同时覆盖数据驱动表格和 daisyUI 风格的静态表格写法，使用 Rue 当前视觉风格，并补充更完整的 排序、筛选、分页、选择、展开与分组表头能力。</p><p>可以先从基础用法进入，再根据场景查看筛选排序、选择模式、滚动布局与分组表头。静态样式写法仍然提供，可继续 使用 <code>Table.Head</code>、<code>Table.Body</code> 等复合组件。</p><h2>何时使用</h2><ul><li>需要展示结构化列表数据，并同时提供排序、筛选、分页等交互。</li><li>适合使用 Rue / daisyUI 的表格视觉风格，同时使用数据表式 API。</li><li>基础简单静态表格，也有复杂后台表格，想统一在一个组件里处理。</li></ul><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--><!--rue:opaque-hole:5--><!--rue:opaque-hole:6--><!--rue:opaque-hole:7--><!--rue:opaque-hole:8--><!--rue:opaque-hole:9--><h2 id="table-api">API</h2><p>当前页面只列出 Rue Table 当前最常用的配置项，优先对应实际使用场景。</p><h3>Table</h3><!--rue:opaque-hole:10--><h3>Column</h3><!--rue:opaque-hole:11--><h3>rowSelection</h3><!--rue:opaque-hole:12--><h3>expandable</h3><!--rue:opaque-hole:13--><h2>FAQ</h2><h3>数据驱动和静态结构怎么选？</h3><p>需要排序、筛选、分页、选择、展开时优先使用 <code>columns + dataSource</code> 。只想快速输出结构化样式， 或需要完全手写表格结构时，可以使用复合组件写法即可。</p><h3>为什么筛选或排序后会回到第一页？</h3><p>这是为了避免当前页在筛选后没有数据。如果你希望完全自行控制分页，把 <code>pagination.current</code> 和<code>onChange</code> 一起受控即可。</p><h3>固定列和 pinCols 的关系是什么？</h3><p><code>pinCols</code> 负责启用 daisyUI 的固定列视觉能力，具体哪一列固定则由列上的 <code>fixedCol</code> 或 <code>fixed</code> 控制。静态结构写法中，通常把固定列单元格写成 <code>TH</code> 会更自然。</p></div>`),_t=t=>e(e=>{let n=Z().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[0].childNodes[0].childNodes[1],i=r.parentNode,a=n.childNodes[0].childNodes[0].childNodes[1],o=a.parentNode,s=n.childNodes[1],c=s.parentNode,l=n.childNodes[2],u=l.parentNode;p({parent:i,before:r},()=>t.title,()=>({})),ne(o,a,()=>t.summary?{__rue_compiled_branch_key:!0,create:()=>m(Object.assign(e=>{let n=T(`p`,e);n.className=`m-0 text-sm opacity-70`;let r=te(`rue:compiled-slot`);return re(n,r),p({parent:n,before:r},()=>t.summary,()=>({})),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>m(Object.assign(e=>{let t=g();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))});let d=D(c);return I(d,se,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:t.tab.value,onChange:e=>t.tab.value=e,className:`mb-3 mt-4`})),c.insertBefore(d,s),H(()=>{let e=t.tab.value===`preview`?t.preview():P(W,()=>({className:`mt-2`,lang:`tsx`,code:t.code}));A(()=>R(e,u,l))}),n}),vt=e=>{let t=v(e.rows);return S(m(Object.assign(e=>{let r=mt().content.cloneNode(!0).firstChild,i=r.childNodes[0].childNodes[1].childNodes[0],a=i.parentNode,o=z(`<tr><td><code><!--rue:text-hole:0--></code></td><td>rue:row-text</td><td><code><!--rue:text-hole:2--></code></td><td><code><!--rue:text-hole:3--></code></td></tr>`),s=[];return H(()=>{let e=t.get()||[];s=V(a,i,s,e,(e,t)=>e.prop,(e,t,n)=>{let r=e,i;return ae(e=>{let t=o().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0].childNodes[0],a=n.parentNode,s=t.childNodes[1].childNodes[0];s.data=``,s.parentNode;let c=t.childNodes[2].childNodes[0].childNodes[0],l=c.parentNode,u=t.childNodes[3].childNodes[0].childNodes[0],d=u.parentNode,f=h(``);a.insertBefore(f,n),a.removeChild(n);let p;{let e=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);Object.is(p,e)||(f.textContent=e,p=e)}let m;{let e=r.description==null||typeof r.description==`boolean`?``:String(r.description);Object.is(m,e)||(s.textContent=e,m=e)}let g=h(``);l.insertBefore(g,c),l.removeChild(c);let _;{let e=r.type==null||typeof r.type==`boolean`?``:String(r.type);Object.is(_,e)||(g.textContent=e,_=e)}let v=h(``);d.insertBefore(v,u),d.removeChild(u);let y;{let e=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);Object.is(y,e)||(v.textContent=e,y=e)}return i=()=>{{let e=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);Object.is(p,e)||(f.textContent=e,p=e)}{let e=r.description==null||typeof r.description==`boolean`?``:String(r.description);Object.is(m,e)||(s.textContent=e,m=e)}{let e=r.type==null||typeof r.type==`boolean`?``:String(r.type);Object.is(_,e)||(g.textContent=e,_=e)}{let e=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);Object.is(y,e)||(v.textContent=e,y=e)}},{__rue_compiled_host:t,__rue_compiled_roots:[t]}},(n,a)=>{e=n,t=a,r=n,i()},n)})}),n(()=>y(s)),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})),e=>w(()=>{t.set(e.rows)}),()=>e)},Q=[{key:`1`,name:`林青`,age:28,city:`杭州`,role:`设计工程师`,team:`体验平台`,status:`active`,score:92,salary:26e3,visits:148,address:`云谷路 88 号`},{key:`2`,name:`周宁`,age:34,city:`上海`,role:`前端工程师`,team:`设计系统`,status:`active`,score:88,salary:31e3,visits:203,address:`武康路 12 号`},{key:`3`,name:`刘溪`,age:41,city:`深圳`,role:`产品经理`,team:`商业化`,status:`leave`,score:79,salary:35e3,visits:167,address:`深南大道 100 号`},{key:`4`,name:`陈默`,age:26,city:`成都`,role:`测试开发`,team:`质量平台`,status:`trial`,score:95,salary:22e3,visits:98,address:`天府三街 18 号`},{key:`5`,name:`顾安`,age:31,city:`北京`,role:`运营分析`,team:`增长`,status:`active`,score:83,salary:24500,visits:132,address:`望京 SOHO`}],yt=[{id:`1`,item:`套餐 A`,owner:`前台`,channel:`门店`,stock:42,price:`199`},{id:`2`,item:`套餐 B`,owner:`门店`,channel:`小程序`,stock:36,price:`299`},{id:`3`,item:`套餐 C`,owner:`线上`,channel:`官网`,stock:28,price:`399`},{id:`4`,item:`体验卡`,owner:`运营`,channel:`社群`,stock:86,price:`99`},{id:`5`,item:`企业版`,owner:`销售`,channel:`直销`,stock:12,price:`1299`},{id:`6`,item:`家庭版`,owner:`门店`,channel:`门店`,stock:25,price:`699`},{id:`7`,item:`增值包`,owner:`客服`,channel:`续费`,stock:57,price:`159`},{id:`8`,item:`旗舰包`,owner:`线上`,channel:`官网`,stock:18,price:`999`},{id:`9`,item:`季度包`,owner:`增长`,channel:`投放`,stock:64,price:`499`},{id:`10`,item:`年度包`,owner:`销售`,channel:`直销`,stock:21,price:`1599`}],bt=[{key:`1`,name:`林青`,role:`设计工程师`,team:`体验平台`,city:`杭州`,score:92,visits:148,salary:26e3,address:`云谷路 88 号`},{key:`2`,name:`周宁`,role:`前端工程师`,team:`设计系统`,city:`上海`,score:88,visits:216,salary:31e3,address:`武康路 12 号`},{key:`3`,name:`刘溪`,role:`产品经理`,team:`商业化`,city:`深圳`,score:76,visits:174,salary:35e3,address:`深南大道 100 号`},{key:`4`,name:`陈默`,role:`测试开发`,team:`质量平台`,city:`成都`,score:95,visits:98,salary:22e3,address:`天府三街 18 号`},{key:`5`,name:`顾安`,role:`运营分析`,team:`增长`,city:`北京`,score:83,visits:132,salary:24500,address:`望京 SOHO`},{key:`6`,name:`许嘉`,role:`数据分析`,team:`策略`,city:`南京`,score:91,visits:121,salary:27e3,address:`软件大道 66 号`},{key:`7`,name:`何澈`,role:`客户成功`,team:`企业服务`,city:`苏州`,score:87,visits:154,salary:24e3,address:`金鸡湖大道 9 号`}],xt=[{key:`1`,name:`John Brown`,age:32,address:`New York No. 1 Lake Park`},{key:`2`,name:`Jim Green`,age:42,address:`London No. 1 Lake Park`},{key:`3`,name:`Joe Black`,age:32,address:`Sydney No. 1 Lake Park`},{key:`4`,name:`Jim Red`,age:32,address:`London No. 2 Lake Park`}],St=[{key:`name`,label:`姓名`},{key:`age`,label:`年龄`},{key:`address`,label:`地址`}],Ct=[{key:`1`,name:`John Brown`,chinese:98,math:60,english:70},{key:`2`,name:`Jim Green`,chinese:98,math:66,english:89},{key:`3`,name:`Joe Black`,chinese:98,math:90,english:70},{key:`4`,name:`Jim Red`,chinese:88,math:99,english:89}],wt=[{key:`chinese`,label:`语文`,priority:3},{key:`math`,label:`数学`,priority:2},{key:`english`,label:`英语`,priority:1}],Tt=e=>wt.some(t=>t.key===e),Et=e=>e===`ascend`||e===`descend`,Dt=[{key:`1`,name:`Cy Ganderton`,team:`Design Ops`,city:`Hangzhou`,owner:`Hart Hagerty`,updatedAt:`2026-04-18`},{key:`2`,name:`Brice Swyre`,team:`Growth`,city:`Shanghai`,owner:`Yancy Tear`,updatedAt:`2026-04-19`},{key:`3`,name:`Marjy Ferencz`,team:`Infra`,city:`Shenzhen`,owner:`Maribeth Popping`,updatedAt:`2026-04-21`}],Ot=[{key:`name`,label:`Name`},{key:`team`,label:`Team`},{key:`city`,label:`City`},{key:`owner`,label:`Owner`},{key:`updatedAt`,label:`Updated`}],kt=e=>Ot.map(t=>({key:t.key,title:t.label,dataIndex:t.key,hidden:!e.includes(t.key)})),At=[{prop:`columns`,description:`列配置，支持分组表头、排序、筛选、隐藏列与单元格属性。`,type:`ColumnItem[]`,defaultValue:`-`},{prop:`dataSource`,description:`数据数组。`,type:`any[]`,defaultValue:`-`},{prop:`rowKey`,description:`行主键，可传字段名或函数。`,type:`string | (record) => key`,defaultValue:"`key`"},{prop:`rowSelection`,description:`选择列配置，支持多选、单选、禁用项、表头标题。`,type:`object`,defaultValue:`-`},{prop:`expandable`,description:`展开行配置，支持按行点击展开与受控展开。`,type:`object`,defaultValue:`-`},{prop:`pagination`,description:"分页配置，设为 `false` 时关闭分页。",type:`object | false`,defaultValue:`-`},{prop:`scroll`,description:`横向 / 纵向滚动配置，可在变更后自动回到顶部。`,type:`object`,defaultValue:`-`},{prop:`summary`,description:`汇总栏渲染。`,type:`(currentData, info) => any`,defaultValue:`-`}],jt=[{prop:`title`,description:`列标题，支持传节点或函数。`,type:`any | (context) => any`,defaultValue:`-`},{prop:`dataIndex`,description:`字段路径，支持字符串和数组路径。`,type:`string | string[]`,defaultValue:`-`},{prop:`sorter / sortOrder`,description:`本地排序、受控排序与多列排序。`,type:`boolean | fn | { compare?: fn; multiple?: number } / SortOrder`,defaultValue:`-`},{prop:`filters / filterDropdown / filteredValue`,description:`默认筛选菜单、自定义筛选面板与受控筛选值。`,type:`FilterItem[] / render fn / any[]`,defaultValue:`-`},{prop:`filterSearch`,description:`筛选项搜索。`,type:`boolean | fn`,defaultValue:`false`},{prop:`children`,description:`分组表头子列。`,type:`ColumnItem[]`,defaultValue:`-`},{prop:`hidden`,description:`隐藏列但保持配置。`,type:`boolean`,defaultValue:`false`},{prop:`onCell / onHeaderCell`,description:`给单元格注入 className、style、colSpan、rowSpan 等属性。`,type:`fn`,defaultValue:`-`}],Mt=[{prop:`type`,description:`选择模式。`,type:"`checkbox` | `radio`",defaultValue:"`checkbox`"},{prop:`columnTitle`,description:`选择列表头内容。`,type:`any`,defaultValue:`-`},{prop:`hideSelectAll`,description:`隐藏全选框。`,type:`boolean`,defaultValue:`false`},{prop:`getCheckboxProps`,description:`为某一行注入 disabled 等状态。`,type:`(record) => object`,defaultValue:`-`},{prop:`onSelect / onSelectAll / onChange`,description:`选择行为回调。`,type:`fn`,defaultValue:`-`}],Nt=[{prop:`expandedRowRender`,description:`展开内容渲染函数。`,type:`(record, index) => any`,defaultValue:`-`},{prop:`expandRowByClick`,description:`点击行即可展开。`,type:`boolean`,defaultValue:`false`},{prop:`showExpandColumn`,description:`是否展示展开列。`,type:`boolean`,defaultValue:`true`},{prop:`rowExpandable`,description:`按行控制是否可展开。`,type:`(record) => boolean`,defaultValue:`-`},{prop:`defaultExpandedRowKeys / expandedRowKeys`,description:`默认展开 / 受控展开。`,type:`key[]`,defaultValue:`-`}],Pt=`import { Table } from '@rue-js/design'

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
}`,Ft=`import { Table } from '@rue-js/design'

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
}`,It=`import { ref } from '@rue-js/rue'
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
}`,Lt=`import { ref } from '@rue-js/rue'
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
}`,Rt=`import { ref } from '@rue-js/rue'
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
}`,zt=`import { ref } from '@rue-js/rue'
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
}`,Bt=`import { Table } from '@rue-js/design'

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
}`,Vt=`import { ref } from '@rue-js/rue'
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
}`,Ht=`import { Table } from '@rue-js/design'

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
}`,Ut=()=>{let r=L(`preview`),a=L(`preview`),s=L(`preview`),c=L(`preview`),l=L(`preview`),f=L(`preview`),p=L(`preview`),_=L(`preview`),b=L(`preview`),x=L(`preview`),C=L([`2`]),ee=L([`2`]),E=L(`未点击`),O=L([`Jim`]),k=L([`London`]),j=L({columnKey:`age`,order:`descend`}),P=L({chinese:`descend`,math:`descend`}),F=L([`name`,`team`,`city`,`owner`]),z=L(kt(F.value)),B=L(!1),ae=L([`2`]),oe=()=>[{key:`name`,title:`Name`,filters:[{text:`Jim`,value:`Jim`},{text:`Joe`,value:`Joe`},{text:`John`,value:`John`}],dataIndex:`name`,filteredValue:O.value,filterSearch:!0,onFilter:(e,t)=>t.name.includes(e),sorter:(e,t)=>e.name.length-t.name.length,sortDirections:[`descend`,`ascend`],sortOrder:j.value.columnKey===`name`?j.value.order:null},{key:`age`,title:`Age`,dataIndex:`age`,sorter:(e,t)=>e.age-t.age,sortDirections:[`descend`,`ascend`],sortOrder:j.value.columnKey===`age`?j.value.order:null},{key:`address`,title:`Address`,filters:[{text:`London`,value:`London`},{text:`New York`,value:`New York`},{text:`Sydney`,value:`Sydney`}],dataIndex:`address`,filteredValue:k.value,filterSearch:!0,onFilter:(e,t)=>t.address.includes(e),sorter:(e,t)=>e.address.length-t.address.length,sortDirections:[`descend`,`ascend`],sortOrder:j.value.columnKey===`address`?j.value.order:null,ellipsis:!0}],U=L(oe()),W=()=>{U.value=oe()},se=()=>[{title:`Name`,dataIndex:`name`},{key:`chinese`,title:`Chinese Score`,dataIndex:`chinese`,sortOrder:P.value.chinese??null,sorter:{compare:(e,t)=>e.chinese-t.chinese,multiple:3},sortDirections:[`descend`,`ascend`]},{key:`math`,title:`Math Score`,dataIndex:`math`,sortOrder:P.value.math??null,sorter:{compare:(e,t)=>e.math-t.math,multiple:2},sortDirections:[`descend`,`ascend`]},{key:`english`,title:`English Score`,dataIndex:`english`,sortOrder:P.value.english??null,sorter:{compare:(e,t)=>e.english-t.english,multiple:1},sortDirections:[`descend`,`ascend`]}],ce=L(se()),ue=()=>{ce.value=se()},de=e=>{let t=j.value,n=t.columnKey===e?t.order===`descend`?`ascend`:t.order===`ascend`?null:`descend`:`descend`;j.value=n?{columnKey:e,order:n}:{columnKey:null,order:null},W()},fe=(e,t)=>{let n=j.value.columnKey===e?j.value.order:null;return n===`descend`?`${t}降序`:n===`ascend`?`${t}升序`:`${t}排序`},pe=()=>St.find(e=>e.key===j.value.columnKey)?.label??`无`,me=()=>j.value.order===`descend`?`降序`:j.value.order===`ascend`?`升序`:`无`,he=e=>{P.value={...e},ue()},ge=e=>{let t=P.value[e]??null,n=t===`descend`?`ascend`:t===`ascend`?null:`descend`,r={...P.value};n?r[e]=n:delete r[e],P.value=r,ue()},_e=e=>{let t=P.value[e.key];return t===`descend`?`${e.label}降序`:t===`ascend`?`${e.label}升序`:`${e.label}排序`},ve=()=>wt.filter(e=>P.value[e.key]).sort((e,t)=>t.priority-e.priority).map(e=>{let t=P.value[e.key]===`descend`?`降序`:`升序`;return`${e.label}${t} P${e.priority}`}).join(` / `)||`无`,ye=e=>{let t=F.value.includes(e)?F.value.filter(t=>t!==e):[...F.value,e];F.value=t,z.value=kt(t)},be=[{title:`姓名`,dataIndex:`name`},{title:`城市`,dataIndex:`city`},{title:`岗位`,dataIndex:`role`},{title:`团队`,dataIndex:`team`}],xe=e=>[{title:`成员信息`,children:[{title:`姓名`,dataIndex:`name`,width:120},{title:`城市`,dataIndex:`city`,width:120}]},{title:`工作概览`,children:[{title:`岗位`,dataIndex:`role`,ellipsis:!0},{title:`团队`,dataIndex:`team`,ellipsis:!0},{title:`月薪`,dataIndex:`salary`,align:`right`,hidden:e}]},{title:`操作`,key:`action`,width:120,align:`center`,render:(e,t)=>m(Object.assign(e=>{let r=ht().content.cloneNode(!0).firstChild,i=r;i.className=`btn btn-ghost btn-xs`;let a=e=>{let n=()=>E.value=`操作 ${t.name}`;typeof n==`function`&&n(e)};return i.addEventListener(`click`,a),n(()=>i.removeEventListener(`click`,a)),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})),onCell:(e,t)=>({className:t%2==0?`bg-base-100`:`bg-base-200/30`})}],Se=L(xe(B.value)),Ce=()=>{B.value=!B.value,Se.value=xe(B.value)},we=[{title:`姓名`,dataIndex:`name`,width:120,fixedCol:!0},{title:`城市`,dataIndex:`city`,width:120},{title:`岗位`,dataIndex:`role`,width:180,ellipsis:!0},{title:`团队`,dataIndex:`team`,width:160},{title:`地址`,dataIndex:`address`,width:220,ellipsis:!0},{title:`访问量`,dataIndex:`visits`,width:120,align:`right`}];return N(()=>S((()=>{let S=e(()=>{let S=g(),w=gt().content.cloneNode(!0),N=w.firstChild,L=N.childNodes[5],oe=L.parentNode,se=N.childNodes[6],le=se.parentNode,xe=N.childNodes[7],G=xe.parentNode,Te=N.childNodes[8],Ee=Te.parentNode,K=N.childNodes[9],De=K.parentNode,Oe=N.childNodes[10],q=Oe.parentNode,ke=N.childNodes[11],Ae=ke.parentNode,je=N.childNodes[12],Me=je.parentNode,Ne=N.childNodes[13],Pe=Ne.parentNode,Fe=N.childNodes[14],Ie=Fe.parentNode,Le=N.childNodes[18],Re=Le.parentNode,ze=N.childNodes[20],Be=ze.parentNode,Ve=N.childNodes[22],He=Ve.parentNode,Ue=N.childNodes[24],We=Ue.parentNode;S.appendChild(w),H(()=>{let e=o(_t,()=>({title:`基础数据表格`,summary:`最直接的 columns + dataSource 用法，适合作为大多数列表页的起点。`,tab:r,preview:M(()=>m(Object.assign(e=>{let t=at().content.cloneNode(!0).firstChild,n=t.childNodes[0],r=n.parentNode,i=D(r);return I(i,Y,()=>({className:`w-full`,columns:be,dataSource:Q})),r.insertBefore(i,n),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),code:Pt}));A(()=>R(e,oe,L))}),H(()=>{let t=o(_t,()=>({title:`视觉风格与静态行态`,summary:`使用当前视觉类示例：背景、激活行、hover、zebra 与尺寸示例。`,tab:a,preview:M(()=>e(e=>{let t=ot().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[1],r=n.parentNode,i=t.childNodes[1].childNodes[1],a=i.parentNode;H(()=>{let e=o(Y.TH,()=>({children:`姓名`})),t=o(Y.TH,()=>({children:`岗位`})),i=o(Y.TH,()=>({children:`城市`})),a=o(Y.TR,()=>({children:[e,t,i]})),s=o(Y.Head,()=>({children:a})),c=o(Y.TD,()=>({children:`林青`})),l=o(Y.TD,()=>({children:`设计工程师`})),u=o(Y.TD,()=>({children:`杭州`})),d=o(Y.TR,()=>({className:`bg-base-200`,children:[c,l,u]})),f=o(Y.TD,()=>({children:`周宁`})),p=o(Y.TD,()=>({children:`前端工程师`})),m=o(Y.TD,()=>({children:`上海`})),h=o(Y.TR,()=>({className:`active`,children:[f,p,m]})),g=o(Y.Body,()=>({children:[d,h]})),_=o(Y,()=>({className:`w-full`,children:[s,g]}));A(()=>R(_,r,n))});let s=D(a);return I(s,Y,()=>({className:`w-full`,zebra:!0,size:`xs`,rowHoverable:!0,columns:be,dataSource:Q.slice(0,3)})),a.insertBefore(s,i),t})),code:Ft}));A(()=>R(t,le,se))}),H(()=>{let r=o(_t,()=>({title:`可控筛选与排序`,summary:`恢复外部控制台式的筛选与排序示例，避免交互状态混在一起。`,tab:s,preview:M(()=>e(e=>{let r=st().content.cloneNode(!0).firstChild,a=r.childNodes[0].childNodes[1],o=r.childNodes[0].childNodes[2],s=r.childNodes[0].childNodes[3],c=r.childNodes[0].childNodes[4],l=r.childNodes[0].childNodes[5],f=r.childNodes[0].childNodes[6],p=r.childNodes[0].childNodes[0],g=p.parentNode,_=r.childNodes[0].childNodes[7].childNodes[1],b=_.parentNode,x=r.childNodes[0].childNodes[7].childNodes[3],S=x.parentNode,C=r.childNodes[0].childNodes[7].childNodes[5],w=C.parentNode,ee=r.childNodes[0].childNodes[7].childNodes[7],E=ee.parentNode,M=r.childNodes[1],N=M.parentNode;u(a,`btn btn-ghost btn-xs`);let P=e=>{let t=()=>{j.value={columnKey:null,order:null},W()};typeof t==`function`&&t(e)};a.addEventListener(`click`,P),d(()=>a.removeEventListener(`click`,P)),H(()=>{u(o,`btn btn-xs ${O.value.length===1&&O.value[0]===`Jim`&&k.value.length===0?`btn-primary`:`btn-ghost`}`)});let F=e=>{let t=()=>{O.value=[`Jim`],k.value=[],W()};typeof t==`function`&&t(e)};o.addEventListener(`click`,F),d(()=>o.removeEventListener(`click`,F)),H(()=>{u(s,`btn btn-xs ${k.value.length===1&&k.value[0]===`London`&&O.value.length===0?`btn-primary`:`btn-ghost`}`)});let L=e=>{let t=()=>{O.value=[],k.value=[`London`],W()};typeof t==`function`&&t(e)};s.addEventListener(`click`,L),d(()=>s.removeEventListener(`click`,L)),H(()=>{u(c,`btn btn-xs ${O.value.length===1&&O.value[0]===`Jim`&&k.value.length===1&&k.value[0]===`London`?`btn-primary`:`btn-ghost`}`)});let ie=e=>{let t=()=>{O.value=[`Jim`],k.value=[`London`],W()};typeof t==`function`&&t(e)};c.addEventListener(`click`,ie),d(()=>c.removeEventListener(`click`,ie)),u(l,`btn btn-ghost btn-xs`);let z=e=>{let t=()=>{O.value=[],k.value=[],W()};typeof t==`function`&&t(e)};l.addEventListener(`click`,z),d(()=>l.removeEventListener(`click`,z)),u(f,`btn btn-ghost btn-xs`);let B=e=>{let t=()=>{O.value=[],k.value=[],j.value={columnKey:null,order:null},W()};typeof t==`function`&&t(e)};f.addEventListener(`click`,B),d(()=>f.removeEventListener(`click`,B));let ae=[];H(()=>{ae=V(g,p,ae,St||[],(e,t)=>e.key,(e,r)=>{let a=v(e);return t((e,t,r)=>i(e,r,()=>m(Object.assign(e=>{let t=T(`button`,e),r;H(()=>{let e=`btn btn-xs ${j.value.columnKey===a.get().key?`btn-primary`:`btn-ghost`}`,n=e==null?``:String(e);Object.is(r,n)||(r=n,t.className=n)});let i=e=>{let t=()=>de(a.get().key);typeof t==`function`&&t(e)};t.addEventListener(`click`,i),n(()=>t.removeEventListener(`click`,i));let o=te(`rue:compiled-slot`);return re(t,o),H(()=>{let e=fe(a.get().key,a.get().label);A(()=>R(e,t,o))}),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,n)=>{e=t,r=n,a.set(t)})})}),n(()=>y(ae)),ne(b,_,()=>{let e=O.value.join(`, `);return e?{__rue_compiled_branch_key:e,create:()=>m(Object.assign(t=>{let n=h(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>m(Object.assign(e=>{let t=h(`无`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),ne(S,x,()=>{let e=k.value.join(`, `);return e?{__rue_compiled_branch_key:e,create:()=>m(Object.assign(t=>{let n=h(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>m(Object.assign(e=>{let t=h(`无`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),H(()=>{let e=pe();A(()=>R(e,w,C))}),H(()=>{let e=me();A(()=>R(e,E,ee))});let oe=D(N);return I(oe,Y,()=>({className:`w-full`,columns:U.value,dataSource:xt,sortDirections:[`descend`,`ascend`],onChange:(e,t,n)=>{O.value=Array.isArray(t?.name)&&t.name.length>0?t.name:[],k.value=Array.isArray(t?.address)&&t.address.length>0?t.address:[];let r=Array.isArray(n)?n[0]:n;j.value={columnKey:r?.order?r?.columnKey??null:null,order:r?.order??null},W()}})),N.insertBefore(oe,M),r})),code:It}));A(()=>R(r,G,xe))}),H(()=>{let r=o(_t,()=>({title:`多列排序（优先级组合）`,summary:`补回多列优先级排序示例，支持 { compare, multiple } 并按优先级组合排序。`,tab:c,preview:M(()=>e(e=>{let r=ct().content.cloneNode(!0).firstChild,a=r.childNodes[0].childNodes[0],o=r.childNodes[0].childNodes[1],s=r.childNodes[0].childNodes[2],c=r.childNodes[0].childNodes[3],l=r.childNodes[1].childNodes[0],f=l.parentNode,p=r.childNodes[1].childNodes[1].childNodes[1],h=p.parentNode,g=r.childNodes[2],_=g.parentNode;u(a,`btn btn-ghost btn-xs`);let b=e=>{let t=()=>he({chinese:`descend`,math:`descend`});typeof t==`function`&&t(e)};a.addEventListener(`click`,b),d(()=>a.removeEventListener(`click`,b)),u(o,`btn btn-ghost btn-xs`);let x=e=>{let t=()=>he({chinese:`descend`,math:`descend`,english:`descend`});typeof t==`function`&&t(e)};o.addEventListener(`click`,x),d(()=>o.removeEventListener(`click`,x)),u(s,`btn btn-ghost btn-xs`);let S=e=>{let t=()=>he({chinese:`ascend`,english:`descend`});typeof t==`function`&&t(e)};s.addEventListener(`click`,S),d(()=>s.removeEventListener(`click`,S)),u(c,`btn btn-ghost btn-xs`);let C=e=>{let t=()=>he({});typeof t==`function`&&t(e)};c.addEventListener(`click`,C),d(()=>c.removeEventListener(`click`,C));let w=[];H(()=>{w=V(f,l,w,wt||[],(e,t)=>e.key,(e,r)=>{let a=v(e);return t((e,t,r)=>i(e,r,()=>m(Object.assign(e=>{let t=T(`button`,e),r;H(()=>{let e=`btn btn-xs ${P.value[a.get().key]?`btn-primary`:`btn-ghost`}`,n=e==null?``:String(e);Object.is(r,n)||(r=n,t.className=n)});let i=e=>{let t=()=>ge(a.get().key);typeof t==`function`&&t(e)};t.addEventListener(`click`,i),n(()=>t.removeEventListener(`click`,i));let o=te(`rue:compiled-slot`);return re(t,o),H(()=>{let e=_e(a.get());A(()=>R(e,t,o))}),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,n)=>{e=t,r=n,a.set(t)})})}),n(()=>y(w)),H(()=>{let e=ve();A(()=>R(e,h,p))});let ee=D(_);return I(ee,Y,()=>({className:`w-full`,columns:ce.value,dataSource:Ct,sortDirections:[`descend`,`ascend`],onChange:(e,t,n)=>{let r=Array.isArray(n)?n:n?.order?[n]:[];P.value=r.reduce((e,t)=>{let n=t?.columnKey,r=t?.order;return Tt(n)&&Et(r)&&(e[n]=r),e},{}),ue()}})),_.insertBefore(ee,g),r})),code:Lt}));A(()=>R(r,Ee,Te))}),H(()=>{let e=o(_t,()=>({title:`动态列显隐`,summary:`把基础的隐藏列示例 补回来，并用外部开关控制列可见性。`,tab:l,preview:M(()=>m(Object.assign(e=>{let r=lt().content.cloneNode(!0).firstChild,a=r.childNodes[0].childNodes[0],o=a.parentNode,s=r.childNodes[1],c=s.parentNode,l=[];H(()=>{l=V(o,a,l,Ot||[],(e,t)=>e.key,(e,r)=>{let a=v(e);return t((e,t,r)=>i(e,r,()=>m(Object.assign(e=>{let t=T(`button`,e),r;H(()=>{let e=`btn btn-xs ${F.value.includes(a.get().key)?`btn-primary`:`btn-ghost`}`,n=e==null?``:String(e);Object.is(r,n)||(r=n,t.className=n)});let i=e=>{let t=()=>ye(a.get().key);typeof t==`function`&&t(e)};return t.addEventListener(`click`,i),n(()=>t.removeEventListener(`click`,i)),ie(()=>F.value.includes(a.get().key)?{__rue_compiled_branch_key:!0,create:()=>m(Object.assign(e=>{let t=h(typeof`隐藏 ${a.get().label}`==`string`||typeof`隐藏 ${a.get().label}`==`number`||typeof`隐藏 ${a.get().label}`==`bigint`?`隐藏 ${a.get().label}`:``);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>m(Object.assign(e=>{let t=h(typeof`显示 ${a.get().label}`==`string`||typeof`显示 ${a.get().label}`==`number`||typeof`显示 ${a.get().label}`==`bigint`?`显示 ${a.get().label}`:``);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}).__rue_compiled_mount(t),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,n)=>{e=t,r=n,a.set(t)})})}),n(()=>y(l));let u=D(c);return I(u,Y,()=>({className:`w-full`,columns:z.value,dataSource:Dt})),c.insertBefore(u,s),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0}))),code:$}));A(()=>R(e,De,K))}),H(()=>{let e=o(_t,()=>({title:`选择模式`,summary:`展示多选、单选、禁用项、部分禁用几类示例，并增加选择列表头与回调展示。`,tab:f,preview:M(()=>m(Object.assign(e=>{let t=ut().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0].childNodes[1],r=n.parentNode,i=t.childNodes[0].childNodes[1],a=i.parentNode,o=t.childNodes[1].childNodes[0].childNodes[1],s=o.parentNode,c=t.childNodes[1].childNodes[1],l=c.parentNode;ne(r,n,()=>{let e=C.value.join(`, `);return e?{__rue_compiled_branch_key:e,create:()=>m(Object.assign(t=>{let n=h(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>m(Object.assign(e=>{let t=h(`空`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}});let u=D(a);I(u,Y,()=>({className:`w-full`,columns:[{title:`姓名`,dataIndex:`name`},{title:`团队`,dataIndex:`team`},{title:`状态`,dataIndex:`status`}],dataSource:Q,rowSelection:{columnTitle:`成员`,selectedRowKeys:C.value,getCheckboxProps:e=>({disabled:e.status===`leave`}),onChange:e=>C.value=[...e]}})),a.insertBefore(u,i),ne(s,o,()=>{let e=ee.value[0];return e==null?{__rue_compiled_branch_key:null,create:()=>m(Object.assign(e=>{let t=h(`空`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:e,create:()=>m(Object.assign(t=>{let n=h(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}});let d=D(l);return I(d,Y,()=>({className:`w-full`,columns:[{title:`姓名`,dataIndex:`name`},{title:`城市`,dataIndex:`city`}],dataSource:Q.slice(0,4),rowSelection:{type:`radio`,hideSelectAll:!0,selectedRowKeys:ee.value,onChange:e=>ee.value=[...e]}})),l.insertBefore(d,c),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),code:Rt}));A(()=>R(e,q,Oe))}),H(()=>{let t=o(_t,()=>({title:`展开、摘要与空态`,summary:`把展开行、按行点击展开、summary 和 emptyText 放在同一个业务场景里。`,tab:p,preview:M(()=>m(Object.assign(t=>{let n=dt().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[0],i=r.parentNode,a=n.childNodes[1].childNodes[0],o=a.parentNode,s=D(i);I(s,Y,()=>({className:`w-full`,columns:[{title:`姓名`,dataIndex:`name`},{title:`绩效`,dataIndex:`score`,align:`right`}],dataSource:Q,expandable:{expandedRowKeys:ae.value,expandRowByClick:!0,onExpandedRowsChange:e=>ae.value=[...e],expandedRowRender:t=>e(e=>{let n=nt().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[1],i=r.parentNode,a=n.childNodes[1].childNodes[1],o=a.parentNode;return H(()=>{let e=t.team;A(()=>R(e,i,r))}),H(()=>{let e=t.address;A(()=>R(e,o,a))}),n})},summary:t=>e(e=>{let n=rt().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[1],i=r.parentNode,a=n.childNodes[1].childNodes[1],o=a.parentNode;return H(()=>{let e=t.length;A(()=>R(e,i,r))}),H(()=>{let e=Math.round(t.reduce((e,t)=>e+t.score,0)/t.length);A(()=>R(e,o,a))}),n})})),i.insertBefore(s,r);let c=D(o);return I(c,Y,()=>({className:`w-full`,columns:[{title:`姓名`,dataIndex:`name`},{title:`团队`,dataIndex:`team`}],dataSource:[],emptyText:m(Object.assign(e=>{let t=T(`span`,e);return t.className=`text-sm opacity-60`,re(t,h(`暂无成员，请先创建数据。`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))})),o.insertBefore(c,a),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))),code:zt}));A(()=>R(t,Ae,ke))}),H(()=>{let t=o(_t,()=>({title:`滚动、标题、尾部与省略`,summary:`展示滚动、title/footer、ellipsis 和滚动容器类示例，并串成一个长表格布局场景。`,tab:_,preview:M(()=>m(Object.assign(t=>{let n=ft().content.cloneNode(!0).firstChild,r=n.childNodes[0],i=r.parentNode,a=D(i);return I(a,Y,()=>({className:`w-full`,columns:we,dataSource:Q.concat(Q).concat(Q),scroll:{x:900,y:220,scrollToFirstRowOnChange:!0},title:t=>e(e=>{let n=it().content.cloneNode(!0).firstChild,r=n.childNodes[1],i=r.parentNode;return H(()=>{let e=t.length;A(()=>R(e,i,r))}),n}),footer:e=>m(Object.assign(e=>{let t=T(`div`,e);return t.className=`text-sm opacity-70`,re(t,h(`展示了固定列、纵向滚动和 ellipsis。`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))})),i.insertBefore(a,r),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))),code:Bt}));A(()=>R(t,Me,je))}),H(()=>{let t=o(_t,()=>({title:`分组表头、隐藏列与单元格属性`,summary:`分组表头示例同时覆盖隐藏列、单元格 className/style 和操作列。`,tab:b,preview:M(()=>e(e=>{let t=X().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0],r=t.childNodes[0].childNodes[0].childNodes[0],i=r.parentNode,a=t.childNodes[0].childNodes[1].childNodes[1],o=a.parentNode,s=t.childNodes[1],c=s.parentNode;u(n,`btn btn-ghost btn-xs`);let l=e=>{let t=Ce;typeof t==`function`&&t(e)};n.addEventListener(`click`,l),d(()=>n.removeEventListener(`click`,l)),ne(i,r,()=>B.value?{__rue_compiled_branch_key:!0,create:()=>m(Object.assign(e=>{let t=h(`显示月薪列`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>m(Object.assign(e=>{let t=h(`隐藏月薪列`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),H(()=>{let e=E.value;A(()=>R(e,o,a))});let f=D(c);return I(f,Y,()=>({className:`w-full`,columns:Se.value,dataSource:Q,rowHoverable:!0,onRow:e=>({onClick:()=>E.value=`点击 ${e.name}`})})),c.insertBefore(f,s),t})),code:Vt}));A(()=>R(t,Pe,Ne))}),H(()=>{let t=o(_t,()=>({title:`静态样式、Pinned Rows 与 Pinned Cols`,summary:`基础静态样式示例 仍然提供，适合不需要 columns/dataSource 时直接写结构。`,tab:x,preview:M(()=>e(e=>{let t=pt().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0],r=n.parentNode,i=t.childNodes[1].childNodes[0],a=i.parentNode;return H(()=>{let e=o(Y.TH,()=>({children:`商品`})),t=o(Y.TH,()=>({children:`负责人`})),i=o(Y.TH,()=>({children:`渠道`})),a=o(Y.TH,()=>({className:`text-right`,children:`库存`})),s=o(Y.TH,()=>({className:`text-right`,children:`价格`})),c=o(Y.TR,()=>({children:[e,t,i,a,s]})),l=o(Y.Head,()=>({children:c})),u=o(Y.Body,()=>({children:yt.map(e=>(()=>{let t=o(Y.TD,()=>({children:e.item})),n=o(Y.TD,()=>({children:e.owner})),r=o(Y.TD,()=>({children:e.channel})),i=o(Y.TD,()=>({className:`text-right`,children:e.stock})),a=o(Y.TD,()=>({className:`text-right`,children:e.price}));return o(Y.TR,()=>({key:e.id,children:[t,n,r,i,a]}))})())})),d=o(Y,()=>({zebra:!0,pinRows:!0,className:`w-full min-w-[640px]`,children:[l,u]}));A(()=>R(d,r,n))}),H(()=>{let e=o(Y.TH,()=>({className:`bg-base-100`,children:`姓名`})),t=o(Y.TH,()=>({children:`岗位`})),n=o(Y.TH,()=>({children:`团队`})),r=o(Y.TH,()=>({children:`城市`})),s=o(Y.TH,()=>({className:`text-right`,children:`绩效`})),c=o(Y.TH,()=>({className:`text-right`,children:`访问`})),l=o(Y.TH,()=>({className:`text-right`,children:`月薪`})),u=o(Y.TH,()=>({children:`地址`})),d=o(Y.TR,()=>({children:[e,t,n,r,s,c,l,u]})),f=o(Y.Head,()=>({children:d})),p=o(Y.Body,()=>({children:bt.map(e=>(()=>{let t=o(Y.TH,()=>({className:`bg-base-100`,children:e.name})),n=o(Y.TD,()=>({children:e.role})),r=o(Y.TD,()=>({children:e.team})),i=o(Y.TD,()=>({children:e.city})),a=o(Y.TD,()=>({className:`text-right`,children:e.score})),s=o(Y.TD,()=>({className:`text-right`,children:e.visits})),c=o(Y.TD,()=>({className:`text-right`,children:e.salary})),l=o(Y.TD,()=>({children:e.address}));return o(Y.TR,()=>({key:e.key,children:[t,n,r,i,a,s,c,l]}))})())})),m=o(Y,()=>({pinCols:!0,className:`w-[980px]`,children:[f,p]}));A(()=>R(m,a,i))}),t})),code:Ht}));A(()=>R(t,Ie,Fe))});let Ge=D(Re);I(Ge,vt,()=>({rows:At})),Re.insertBefore(Ge,Le);let Ke=D(Be);I(Ke,vt,()=>({rows:jt})),Be.insertBefore(Ke,ze);let qe=D(He);I(qe,vt,()=>({rows:Mt})),He.insertBefore(qe,Ve);let Je=D(We);return I(Je,vt,()=>({rows:Nt})),We.insertBefore(Je,Ue),S});return o(le,()=>({children:S}))})(),e=>w(()=>{})))};export{Ut as default};