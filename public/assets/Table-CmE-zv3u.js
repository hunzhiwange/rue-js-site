import{Q as e,Vt as t,Xt as n,Z as r,at as i,bt as a,dt as o,ht as s,it as c,l,nt as u,o as d,on as f,pt as p,rt as m,s as h,sn as g,t as _,tn as v,tt as y,vt as b,wt as x,xt as S,yt as C}from"./vapor-runtime-x7F5M-49.js";import{a as w,n as T}from"./vapor-helpers-vapor-D1LP4JjK.js";import{a as E,o as D}from"./persistentSidebarPlayground-Cl_JMYk5.js";import{t as O}from"./Code-C5NjdoiC.js";import{t as k}from"./tabs-C4UF43sZ.js";import{t as A}from"./dropdown-CwHtCLRm.js";import{r as j}from"./SidebarPlaygroundDesign-Bmw9WJ3p.js";var M=0,N={emptyText:`No Data`,filterConfirm:`应用`,filterReset:`重置`,triggerAsc:`切换为升序`,triggerDesc:`切换为降序`,cancelSort:`取消排序`},P=(e,t)=>{if(t){if(Array.isArray(t)){let n=e;for(let e of t){if(n==null)return;n=n[e]}return n}return e?.[t]}},F=e=>e===`right`?`text-right`:e===`center`?`text-center`:`text-left`,I=(...e)=>e.filter(Boolean).join(` `).trim()||void 0,L=(...e)=>{let t;return e.forEach(e=>{e&&(t=t?{...t,...e}:{...e})}),t},R=e=>e==null||e===!1?[]:Array.isArray(e)?[...e]:typeof e!=`string`&&typeof e?.[Symbol.iterator]==`function`?Array.from(e):[e],ee=(e,t)=>e.key?e.key:typeof e.dataIndex==`string`?e.dataIndex:Array.isArray(e.dataIndex)&&e.dataIndex.length>0?e.dataIndex.join(`.`):`column-${t.join(`-`)}`,z=e=>(e.children??[]).filter(e=>!e.hidden),te=e=>e.reduce((e,t)=>{if(t.hidden)return e;let n=z(t);return n.length===0?e+1:e+te(n)},0),B=e=>{let t=1;return e.forEach(e=>{if(e.hidden)return;let n=z(e);n.length>0&&(t=Math.max(t,1+B(n)))}),t},ne=(e,t=[])=>{let n=[];return e.forEach((e,r)=>{if(e.hidden)return;let i=[...t,r],a=z(e);if(a.length>0){n.push(...ne(a,i));return}n.push({column:e,indexPath:i,key:ee(e,i)})}),n},re=e=>{let t=e.filter(e=>!e.hidden),n=B(t),r=Array.from({length:n},()=>[]),i=(e,t,a=[])=>{e.forEach((e,o)=>{if(e.hidden)return;let s=[...a,o],c=z(e),l=c.length>0?te(c):1,u=e.colSpan??l;if(u===0)return;let d=e.rowSpan??(c.length>0?1:n-t);r[t].push({column:e,index:o,key:ee(e,s),colSpan:u,rowSpan:d}),c.length>0&&i(c,t+1,s)})};return i(t,0),r},ie=e=>!!(e.fixedCol||e.fixed===!0||e.fixed===`left`||e.fixed===`start`),ae=e=>typeof e==`object`&&!!e,V=e=>{if(ae(e.sorter))return e.sorter.multiple},H=e=>e.filter(e=>!!e?.order).sort((e,t)=>{let n=e.multiple??0,r=t.multiple??0;return n===r?0:r-n}),oe=e=>{let t=H(e.filter(e=>e.column.sortOrder!==void 0).map(e=>({key:e.key,order:e.column.sortOrder,multiple:V(e.column)})));return t.length>0?t:H(e.filter(e=>!!e.column.defaultSortOrder).map(e=>({key:e.key,order:e.column.defaultSortOrder,multiple:V(e.column)})))},se=e=>{let t={};return e.forEach(({column:e,key:n})=>{if(e.filteredValue!==void 0){t[n]=R(e.filteredValue);return}e.defaultFilteredValue!==void 0&&(t[n]=R(e.defaultFilteredValue))}),t},ce=(e,t)=>e<=1?1:e>=t?t:e,le=e=>typeof e==`number`?`${e}px`:e,ue=e=>{switch(e){case`small`:return`table-sm`;case`middle`:return`table-md`;case`large`:return`table-lg`;case`xs`:case`sm`:case`md`:case`lg`:case`xl`:return`table-${e}`;default:return}},de=e=>({...N,...e}),fe=(e,t)=>typeof e==`function`?e({props:t})??{}:e??{},pe=e=>e?e===!0?!0:e.showTitle!==!1:!1,me=e=>{switch(e){case`topLeft`:return`topStart`;case`topCenter`:return`topCenter`;case`topRight`:return`topEnd`;case`bottomLeft`:return`bottomStart`;case`bottomCenter`:return`bottomCenter`;case`bottomRight`:return`bottomEnd`;default:return`none`}},he=e=>e==null||e===!1?[]:(e.placement?.length?e.placement:e.position?.length?e.position.map(me):[`bottomEnd`]).filter((e,t,n)=>e===`none`?n.length===1:n.indexOf(e)===t),ge=e=>{switch(e){case`topStart`:case`bottomStart`:return`justify-start`;case`topCenter`:case`bottomCenter`:return`justify-center`;default:return`justify-end`}},_e=(e,t)=>{let n=e?.[t];return Array.isArray(n)?n:[]},ve=({render:e,data:t})=>typeof e==`function`?e(t):null,ye=({render:e,record:t,index:n,indent:r,expanded:i})=>typeof e==`function`?e(t,n,r,i):null,be=e=>{let t=typeof e;return t===`string`||t===`number`},U=Object.assign(n=>{let O=w(`useSetup:0:0`,()=>f(()=>{let{size:e,zebra:t,pinRows:r,pinCols:i,bordered:a,className:o,classNames:s,styles:c,children:l,dataSource:u,columns:d,rowKey:f=`key`,showHeader:p=!0,onRow:m,onHeaderRow:h,onChange:g,rowSelection:_,pagination:v,expandable:y,rowClassName:b,summary:S,emptyText:C,locale:T,title:E,footer:D,loading:O,rowHoverable:k=!1,rowHoverClass:A,tableLayout:j,sortDirections:M,showSorterTooltip:N,scroll:P,sticky:F,height:I,onScroll:L}=n,R=de(T),ee=w(`computed:1:0`,()=>x(()=>fe(s,n))),z=ee,te=w(`computed:1:1`,()=>x(()=>fe(c,n))),B=typeof O==`object`?{spinning:O.spinning!==!1,tip:O.tip}:{spinning:!!O,tip:void 0},ne=y?.childrenColumnName??`children`,re=y?.indentSize??15,ie=(e,t)=>(typeof f==`function`?f(e):e?.[f])??t,ae=(e,t=[])=>e.flatMap((e,n)=>{let r=[...t,n],i=ie(e,`row-${r.join(`-`)}`),a=_e(e,ne);return a.length===0?[]:[i,...ae(a,r)]}),V=`table`,H=ue(e);return H&&(V+=` ${H}`),t&&(V+=` table-zebra`),(r||F)&&(V+=` table-pin-rows`),i&&(V+=` table-pin-cols`),a&&(V+=` border-separate border-spacing-0`),z.get().table&&(V+=` ${z.get().table}`),o&&(V+=` ${o}`),{size:e,zebra:t,pinRows:r,pinCols:i,bordered:a,className:o,classNames:s,styles:c,children:l,dataSource:u,columns:d,rowKey:f,showHeader:p,onRow:m,onHeaderRow:h,onChange:g,rowSelection:_,pagination:v,expandable:y,rowClassName:b,summary:S,emptyText:C,locale:T,titleRender:E,footerRender:D,loading:O,rowHoverable:k,rowHoverClass:A,tableLayout:j,sortDirections:M,showSorterTooltip:N,scroll:P,sticky:F,height:I,onScroll:L,localeText:R,semanticClasses:ee,semanticStyles:te,loadingConfig:B,childrenColumnName:ne,indentSize:re,getRecordKey:ie,collectExpandedKeys:ae,sizeClass:H,hasChildren:!(l==null||Array.isArray(l)&&l.length===0),cls:V}})),{size:k,zebra:j,pinRows:N,pinCols:ee,bordered:te,className:B,classNames:me,styles:U,children:W,dataSource:xe,columns:G,rowKey:Se,showHeader:Ce,onRow:we,onHeaderRow:Te,onChange:Ee,rowSelection:K,pagination:De,expandable:q,rowClassName:Oe,summary:ke,emptyText:Ae,locale:je,titleRender:Me,footerRender:Ne,loading:Pe,rowHoverable:Fe,rowHoverClass:Ie,tableLayout:Le,sortDirections:Re,showSorterTooltip:ze,scroll:Be,sticky:Ve,height:He,onScroll:Ue,localeText:We,semanticClasses:J,semanticStyles:Y,loadingConfig:Ge,childrenColumnName:Ke,indentSize:qe,getRecordKey:Je,collectExpandedKeys:Ye,sizeClass:X,hasChildren:Xe}=O,{cls:Ze}=O;if(Xe)return l(n=>{let r=m(`table`,n);t(()=>{p(r,Ze)}),t(()=>{let e=Y.get().table;b(r,e)});let i=y(`rue:slot:anchor`);return e(r,i),t(()=>{let e=W;v(()=>d(e,r,i))}),r});let Qe=Array.isArray(G)?ne(G):[],[$e]=w(`useState:1:2`,()=>g(`rue-table-${M++}`)),[et,tt]=w(`useState:1:3`,()=>g(oe(Qe),{kind:`ref`})),[nt,rt]=w(`useState:1:4`,()=>g(se(Qe),{kind:`ref`})),[it,at]=w(`useState:1:5`,()=>g({},{kind:`ref`})),[ot,st]=w(`useState:1:6`,()=>g({},{kind:`ref`})),[ct,lt]=w(`useState:1:7`,()=>g(null)),[ut,dt]=w(`useState:1:8`,()=>g(0)),[ft,pt]=w(`useState:1:9`,()=>g(K?.defaultSelectedRowKeys?[...K.defaultSelectedRowKeys]:[],{kind:`ref`})),Z=De!=null&&De!==!1?De:void 0,[mt,ht]=w(`useState:1:10`,()=>g(Z?Z.current??Z.defaultCurrent??1:1)),[gt]=w(`useState:1:11`,()=>g(Z?Z.pageSize??Z.defaultPageSize??10:Math.max(xe?.length??0,1))),[Q,_t]=w(`useState:1:12`,()=>g(q?.defaultExpandedRowKeys?[...q.defaultExpandedRowKeys]:q?.defaultExpandAllRows&&Array.isArray(xe)?xe.flatMap((e,t)=>{let n=Je(e,`row-${t}`),r=_e(e,Ke);return q?.expandedRowRender||r.length>0?[n,...Ye(r,[t])]:[]}):[],{kind:`ref`}));if(Array.isArray(G)&&Array.isArray(xe)){let n=re(G),g=ne(G),O=new Map(g.map(e=>[e.key,e])),k=()=>{dt(ut.value+1)},j=g.some(e=>e.column.sortOrder!==void 0),M=H(j?g.filter(e=>e.column.sortOrder!==void 0).map(e=>({key:e.key,order:e.column.sortOrder,multiple:V(e.column)})):et.value),N=new Map(M.map(e=>[e.key,e])),B=g.reduce((e,t)=>{let n=t.column.filteredValue;return n===void 0?(e[t.key]=R(nt.value[t.key]),e):(e[t.key]=R(n),e)},{}),oe=e=>{let t={};return Object.keys(e).forEach(n=>{Array.isArray(e[n])&&e[n].length>0&&(t[n]=[...e[n]])}),t},se=oe(B),ue=e=>typeof e.sorter==`function`?e.sorter:ae(e.sorter)&&typeof e.sorter.compare==`function`?e.sorter.compare:(t,n)=>{let r=P(t,e.dataIndex),i=P(n,e.dataIndex);return r==null&&i==null?0:r==null?-1:i==null||r>i?1:r<i?-1:0},de=(e,t,n)=>{for(let r of H(n)){let n=O.get(r.key);if(!n?.column.sorter)continue;let i=ue(n.column),a=r.order===`ascend`?i(e,t):-i(e,t);if(a!==0)return a}return 0},fe=(e,t)=>g.every(n=>{let r=t[n.key]??[];if(!Array.isArray(r)||r.length===0)return!0;let i=n.column.filterCombine??`or`;if(n.column.onFilter)return i===`and`?r.every(t=>n.column.onFilter(t,e)):r.some(t=>n.column.onFilter(t,e));let a=P(e,n.column.dataIndex);return i===`and`?r.every(e=>e===a):r.includes(a)}),me=(e,t)=>{let n=r=>{let i=r.flatMap(t=>{let r=_e(t,Ke),i=r.length>0?n(r):[];return!fe(t,e)&&i.length===0?[]:r.length>0?[{...t,[Ke]:i}]:[t]});return H(t).length>0&&(i=i.slice().sort((e,n)=>de(e,n,t))),i};return n(xe)},U=q?.expandedRowKeys?[...q.expandedRowKeys]:[...Q.value],W=new Set(U),Se=(e,t=0,n=[],r=!1)=>e.flatMap((e,i)=>{let a=[...n,i],o=Je(e,`row-${a.join(`-`)}`),s=_e(e,Ke),c={key:o,record:e,indent:t,hasTreeChildren:s.length>0};return s.length>0&&(r||W.has(o))?[c,...Se(s,t+1,a,r)]:[c]}),De=Se(xe,0,[],!0),je=De.some(e=>e.hasTreeChildren),Pe=Se(me(B,M)),Ye=Pe.length,X=Z!=null,Xe=X?Math.max(1,Z.pageSize??gt.value):Math.max(Ye,1),Qe=X?Math.max(1,Math.ceil(Ye/Xe)):1,$=X?ce(Z.current??mt.value,Qe):1,vt=X?Pe.slice(($-1)*Xe,$*Xe):Pe,yt=vt.map(e=>e.record),bt=K?.selectedRowKeys?[...K.selectedRowKeys]:[...ft.value],xt=new Set(bt),St=K?.align??`center`,Ct=!!K,wt=!!q?.expandedRowRender,Tt=(wt||je)&&q?.showExpandColumn!==!1,Et=+!!Ct+ +!!Tt,Dt=g.length+Et,Ot=L(Y.get().wrapper,Be?.y===void 0?void 0:{maxHeight:le(Be.y)},He===void 0?void 0:{height:le(He)},Ve&&typeof Ve==`object`&&Ve.offsetScroll!==void 0?{top:le(Ve.offsetScroll)}:void 0),kt=I(Be?.x?`overflow-x-auto`:void 0,Be?.y||He!==void 0?`overflow-y-auto`:void 0,J.get().wrapper),At=L(Y.get().table)??{},jt=g.some(({column:e})=>!!e.ellipsis);Le?At.tableLayout=Le:(jt||Be?.x)&&(At.tableLayout=`fixed`),Be?.x===!0?(At.width=`max-content`,At.minWidth=`100%`):Be?.x!==void 0&&(At.width=le(Be.x),At.minWidth=`100%`),(()=>{let e=globalThis,t=`__rue_table_outside_close_${$e.value}`;if(e[t])return;let n=e=>{let t=e?.target;t&&(t.closest(`[data-rue-table-root="${$e.value}"]`)||(lt(null),k()))};e?.addEventListener&&e.addEventListener(`pointerdown`,n),e[t]=n})();let Mt=()=>{if(!Be?.scrollToFirstRowOnChange)return;let e=document.querySelector(`[data-rue-table-scroll="${$e.value}"]`);e&&(e.scrollTop=0)},Nt=H(M).map(e=>{let t=O.get(e.key);return t?{column:t.column,columnKey:e.key,order:e.order}:null}).filter(Boolean),Pt=(e,t)=>{let n=e.title;return typeof n==`function`?n({sortOrder:N.get(t)?.order??null,filteredValue:B[t]??[],sortColumns:Nt,filters:se}):n},Ft=e=>{let t=H(e).map(e=>{let t=O.get(e.key);return t?{column:t.column,order:e.order,columnKey:e.key,field:t.column.dataIndex,multiple:e.multiple}:null}).filter(Boolean);return t.length===0?{column:null,order:null}:t.length===1?t[0]:t},It=(e,t,n,r,i)=>{if(!Ee)return;let a=Se(me(r,i)),o=X?Math.max(1,Math.ceil(a.length/n)):1,s=X?ce(t,o):1,c=X?a.slice((s-1)*n,s*n).map(e=>e.record):a.map(e=>e.record);Ee(X?{current:s,pageSize:n}:!1,oe(r),Ft(i),{action:e,currentDataSource:c})},Lt=(e,t)=>{let n=O.get(e)?.column;if(!n?.sorter)return;let r=V(n),i=(()=>{if(r!=null){let n=M.filter(t=>{let n=O.get(t.key)?.column;return V(n??{})!=null&&t.key!==e}).map(e=>({...e}));return t&&n.push({key:e,order:t,multiple:r}),H(n)}return t?[{key:e,order:t,multiple:r}]:[]})();j||tt(i),k(),X&&Z.current===void 0&&ht(1),Mt(),It(`sort`,X?1:$,Xe,B,i)},Rt=(e,t,n)=>{let r=R(t),i={...B,[e]:r};g.find(t=>t.key===e)?.column?.filteredValue===void 0&&rt(i),at({...it.value,[e]:r}),k(),X&&Z.current===void 0&&ht(1),n&&lt(null),Mt(),It(`filter`,X?1:$,Xe,i,M)},zt=e=>{let t=ce(e,Qe);X&&Z.current===void 0&&ht(t),k(),X&&Z.onChange&&Z.onChange(t,Xe),Mt(),It(`paginate`,t,Xe,B,M)},Bt=(e=>e.filter(e=>K?.disabled?!1:!(K?.getCheckboxProps?K.getCheckboxProps(e.record):{})?.disabled))(vt).map(e=>e.key),Vt=Bt.length>0&&Bt.every(e=>xt.has(e)),Ht=Bt.some(e=>xt.has(e))&&!Vt,Ut=(e,t,n,r,i)=>{K?.selectedRowKeys===void 0&&pt([...e]),k();let a=De.filter(t=>e.includes(t.key)).map(e=>e.record);n!==void 0&&K?.onSelect&&typeof r==`boolean`&&K.onSelect(n,r,a,i),K?.onChange&&K.onChange([...e],a,t)},Wt=e=>{if(!K||K.type===`radio`)return;let t=new Set(Bt),n=K.selectedRowKeys??ft.value,r=new Set(n);t.forEach(t=>{e?r.add(t):r.delete(t)});let i=Array.from(r);if(Ut(i,{type:`checkbox`}),K.onSelectAll){let t=De.filter(e=>i.includes(e.key)).map(e=>e.record);K.onSelectAll(e,t)}},Gt=(e,t)=>{let n=!!q?.expandedRowRender&&(q?.rowExpandable?q.rowExpandable(e.record):!0),r=e.hasTreeChildren||n;return{key:e.key,enabled:r,expanded:W.has(e.key),hasExpandedRowRender:n,indent:e.indent,rowIndex:t}},Kt=(e,t)=>{let n=Gt(e,t);if(!n.enabled)return;let r=new Set(U);n.expanded?r.delete(n.key):r.add(n.key);let i=Array.from(r);q?.expandedRowKeys===void 0&&_t(i),k(),q?.onExpand&&q.onExpand(!n.expanded,e.record),q?.onExpandedRowsChange&&q.onExpandedRowsChange(i)},qt=e=>[...e.sortDirections??Re??[`ascend`,`descend`],null],Jt=(e,t)=>{let n=qt(t),r=N.get(e)?.order??null;return n[(n.findIndex(e=>e===r)+1+n.length)%n.length]},Yt=(e,t)=>{let n=e.filterDropdownProps?.open??e.filterDropdownOpen;return n===void 0?ct.value===t:!!n},Xt=(e,t)=>(t?Yt(t,e):ct.value===e)||it.value[e]!==void 0?R(it.value[e]??B[e]):R(B[e]),Zt=(e,t)=>{at({...it.value,[e]:R(t)}),k()},Qt=(e,t,n)=>{let r=Yt(t,e);n&&(it.value={...it.value,[e]:R(B[e])}),!n&&t.filterDropdownProps?.open===void 0&&t.filterDropdownOpen===void 0&&lt(n?e:ct.value===e?null:ct.value),!n&&r!==n&&k(),t.filterDropdownProps?.onOpenChange?.(n),t.onFilterDropdownOpenChange?.(n)},$t=(e,t)=>{Qt(e,t,!1)},en=(e,t,n)=>{Rt(e,Xt(e,t),n?.closeDropdown??!0)},tn=(e,t,n)=>{let r=t.filterResetToDefaultFilteredValue?R(t.defaultFilteredValue):[];if(Zt(e,r),n?.confirm){Rt(e,r,n.closeDropdown??!0);return}n?.closeDropdown&&$t(e,t)},nn=(e,t)=>typeof e.filterIcon==`function`?e.filterIcon(t):e.filterIcon===void 0?`☰`:e.filterIcon,rn=(n,r)=>typeof n.sortIcon==`function`?n.sortIcon({sortOrder:r}):l(n=>{let i=m(`span`,n);t(()=>{p(i,I(`inline-flex flex-col leading-none`,r?`text-base-content`:`opacity-60`))});let a=m(`span`,i);e(i,a),t(()=>{p(a,I(r===`ascend`?`text-base-content`:`opacity-40`))}),e(a,c(`▲`));let o=m(`span`,i);return e(i,o),t(()=>{p(o,I(`-mt-0.5`,r===`descend`?`text-base-content`:`opacity-40`))}),e(o,c(`▼`)),i}),an=(e,t,n)=>t?e.map(e=>{let r=typeof n.filterSearch==`function`?n.filterSearch(t,e):String(e.text).toLowerCase().includes(t.toLowerCase()),i=Array.isArray(e.children)?an(e.children,t,n):void 0;return r||i&&i.length>0?i&&i.length>0?{...e,children:i}:e:null}).filter(Boolean):e,on=(e,t,n,r,i=0)=>{let a=Array.isArray(r)?r:[];return(Array.isArray(e)?e:[]).flatMap(e=>{let r=a.includes(e.value),o=Array.isArray(e.children)&&e.children.length>0?on(e.children,t,n,a,i+1):[],s=D(`label`,{className:`flex items-center gap-2 text-sm`,style:i>0?{paddingLeft:`${i*12}px`}:void 0,children:[E(`input`,{type:t.filterMultiple===!1?`radio`:`checkbox`,name:`rue-table-filter-${$e.value}-${n}`,className:t.filterMultiple===!1?`radio radio-xs`:`checkbox checkbox-xs`,checked:r,onChange:r=>{let i=r.target,o;if(t.filterMultiple===!1)o=i.checked?[e.value]:[];else{let t=new Set(a);i.checked?t.add(e.value):t.delete(e.value),o=Array.from(t)}Zt(n,o),t.filterOnClose===!1&&Rt(n,o,!1)}}),E(`span`,{children:e.text})]},`${String(e.value)}-${i}`);return o.length>0?[s,...o]:[s]})},sn=(n,i,a,s,h)=>{let{safeDraftValues:g,safeMenuItems:_}=w(`useSetup:0:0:dup1`,()=>f(()=>({safeDraftValues:w(`computed:1:13`,()=>x(()=>Array.isArray(s)?s:[])),safeMenuItems:w(`computed:1:14`,()=>x(()=>Array.isArray(h)?h:[]))})));return typeof i.filterDropdown==`function`?i.filterDropdown({setSelectedKeys:e=>Zt(n,e),selectedKeys:g.get(),confirm:e=>en(n,i,e),clearFilters:e=>tn(n,i,e),filters:i.filters,close:()=>$t(n,i),visible:a}):i.filterDropdown===void 0?l(a=>{let s=m(`div`,a);p(s,`w-56 rounded-box border border-base-content/10 bg-base-100 p-3 shadow-xl`);let f=y(`rue:slot:anchor`);e(s,f),t(()=>{let a=i.filterSearch?l(()=>{let i=u(),a=m(`input`,i);return e(i,a),o(a,`type`,`text`),p(a,`input input-bordered input-xs mb-2 w-full`),o(a,`placeholder`,`搜索筛选项`),t(()=>{C(a,ot.value[n]??``)}),r(a,`input`,e=>{st({...ot.value,[n]:e.target.value}),k()}),i}):``;v(()=>d(a,s,f))});let h=m(`div`,s);e(s,h),p(h,`max-h-56 space-y-2 overflow-auto`);let b=y(`rue:slot:anchor`);e(h,b),t(()=>{let e=on(_.get(),i,n,g.get());v(()=>d(e,h,b))}),e(h,c(` `));let x=y(`rue:slot:anchor`);e(h,x),t(()=>{let t=_.get().length===0?l(()=>{let t=u(),n=m(`div`,t);return e(t,n),p(n,`text-sm opacity-60`),e(n,c(`暂无匹配项`)),t}):``;v(()=>d(t,h,x))});let S=y(`rue:slot:anchor`);return e(s,S),t(()=>{let a=i.filterOnClose===!1?``:l(()=>{let a=u(),o=m(`div`,a);e(a,o),p(o,`mt-3 flex justify-end gap-2`);let s=m(`button`,o);e(o,s),p(s,`btn btn-ghost btn-xs`),r(s,`click`,()=>tn(n,i,{confirm:!0}));let c=y(`rue:slot:anchor`);e(s,c),t(()=>{let e=We.filterReset;v(()=>d(e,s,c))});let l=m(`button`,o);e(o,l),p(l,`btn btn-primary btn-xs`),r(l,`click`,()=>en(n,i));let f=y(`rue:slot:anchor`);return e(l,f),t(()=>{let e=We.filterConfirm;v(()=>d(e,l,f))}),a});v(()=>d(a,s,S))}),s}):i.filterDropdown},cn=(e,t)=>{let n=e.showSorterTooltip??ze;if(n===!1)return;if(typeof n==`object`&&n?.title!==void 0)return n.title;let r=Jt(t,e);return r===`ascend`?We.triggerAsc:r===`descend`?We.triggerDesc:We.cancelSort},ln=(n,i)=>{let{titleNode:a,filtered:s,sortOrder:h,draftValues:g,filterSearchValue:b,visible:S,menuItems:C,sorterTooltipTitle:T,_dropdownOpen:E,_dropdownOnOpenChange:D,_dropdownChildren:O,_dropdownContent:k,_dropdownOverlay:j,_dropdownItems:M,_dropdownMenu:P,_dropdownPopupRender:F,dropdownProps:L}=w(`useSetup:0:0:dup2`,()=>f(()=>{let e=w(`computed:1:15`,()=>x(()=>Pt(i,n))),t=w(`computed:1:16`,()=>x(()=>i.filtered??(B[n]??[]).length>0)),r=N.get(n)?.order??null,a=w(`computed:1:17`,()=>x(()=>Xt(n,i))),o=ot.value[n]??``,s=w(`computed:1:18`,()=>x(()=>Yt(i,n))),c=w(`computed:1:19`,()=>x(()=>an(i.filters??[],o,i))),l=w(`computed:1:20`,()=>x(()=>cn(i,n))),{open:u,onOpenChange:d,children:f,content:p,overlay:m,items:h,menu:g,popupRender:_,...v}=i.filterDropdownProps??{};return{titleNode:e,filtered:t,sortOrder:r,draftValues:a,filterSearchValue:o,visible:s,menuItems:c,sorterTooltipTitle:l,_dropdownOpen:u,_dropdownOnOpenChange:d,_dropdownChildren:f,_dropdownContent:p,_dropdownOverlay:m,_dropdownItems:h,_dropdownMenu:g,_dropdownPopupRender:_,dropdownProps:v}}));return l(f=>{let b=m(`div`,f);p(b,`relative flex items-center gap-2`);let x=m(`span`,b);e(b,x);let w=y(`rue:slot:anchor`);e(x,w),t(()=>{let e=a.get();v(()=>d(e,x,w))});let E=y(`rue:slot:anchor`);e(b,E),t(()=>{let a=i.sorter?l(()=>{let a=u(),s=m(`button`,a);e(a,s),o(s,`type`,`button`),t(()=>{o(s,`aria-label`,String(`sort-${n}`))}),t(()=>{o(s,`title`,String(T.get()))}),p(s,`btn btn-ghost btn-xs h-auto min-h-0 px-1 py-0.5`),r(s,`click`,e=>{e.stopPropagation(),Lt(n,Jt(n,i))});let c=y(`rue:slot:anchor`);return e(s,c),t(()=>{let e=rn(i,h);v(()=>d(e,s,c))}),a}):``;v(()=>d(a,b,E))}),e(b,c(` `));let D=y(`rue:slot:anchor`);return e(b,D),t(()=>{let r=Array.isArray(i.filters)&&i.filters.length>0||i.filterDropdown!==void 0?l(()=>{let r=u(),a=y(`rue:component:anchor`);e(r,a);let o=l(()=>{let r=u(),a=y(`rue:component:anchor`);e(r,a),t(()=>{let e=_(A.Trigger,{as:`button`,type:`button`,"aria-label":`filter-${n}`,className:I(`btn btn-ghost btn-xs h-auto min-h-0 px-1 py-0.5 select-none`,s.get()?`text-base-content`:`opacity-40`),children:nn(i,s.get())});v(()=>d(e,r,a))});let o=y(`rue:component:anchor`);return e(r,o),d(_(A.Content,{className:`dropdown-content z-50 mt-2 p-0`,onClick:e=>e.stopPropagation(),children:sn(n,i,S.get(),g.get(),C.get())}),r,o),r});return t(()=>{let e=_(A,{trigger:`click`,open:S.get(),closeOnClick:!1,align:`start`,...L,onOpenChange:e=>Qt(n,i,e),children:o});v(()=>d(e,r,a))}),r}):``;v(()=>d(r,b,D))}),b})},un=(n,r)=>{let{cellProps:i,children:a,isLeaf:s,leaf:c,key:u,colSpan:h,rowSpan:g}=w(`useSetup:0:0:dup3`,()=>f(()=>{let e=w(`computed:1:21`,()=>x(()=>n.column.onHeaderCell&&n.column.onHeaderCell(n.column,n.index)||{})),t=e,r=w(`computed:1:22`,()=>x(()=>z(n.column))),i=r,a=w(`computed:1:23`,()=>x(()=>i.get().length===0)),o=a,s=w(`computed:1:24`,()=>x(()=>o.get()?O.get(n.key)??null:null)),c=s;return{cellProps:e,children:r,isLeaf:a,leaf:s,key:w(`computed:1:25`,()=>x(()=>c.get()?.key??n.key)),colSpan:w(`computed:1:26`,()=>x(()=>t.get().colSpan??n.colSpan)),rowSpan:w(`computed:1:27`,()=>x(()=>t.get().rowSpan??n.rowSpan))}}));if(h.get()===0||g.get()===0)return null;let{className:_,style:C,...T}=i.get(),E=I(J.get().headerCell,F(n.column.align),n.column.className,_),D=L(Y.get().headerCell,n.column.width||n.column.minWidth?{...n.column.width?{width:n.column.width}:{},...n.column.minWidth?{minWidth:n.column.minWidth}:{}}:void 0,C),k=c.get()?ln(u.get(),n.column):Pt(n.column,n.key);return l(i=>{let a=m(`th`,i);t(()=>{o(a,`key`,String(`${r}-${n.key}`))}),t(()=>{o(a,`colSpan`,String(h.get()))}),t(()=>{o(a,`rowSpan`,String(g.get()))}),t(()=>{p(a,E)}),t(()=>{b(a,D)}),t(()=>{S(a,T)});let s=y(`rue:slot:anchor`);return e(a,s),t(()=>{let e=k;v(()=>d(e,a,s))}),a})},dn=(n,r)=>{if(!K)return null;let i=K.getCheckboxProps?{...K.getCheckboxProps(n.record)}:{};K.disabled&&(i.disabled=!0);let a=xt.has(n.key),o=K.type===`radio`?`radio`:`checkbox`,s=E(`label`,{onClick:e=>e.stopPropagation(),children:E(`input`,{type:K.type===`radio`?`radio`:`checkbox`,className:o,checked:a,onChange:e=>{let t=e.target;if(K.type===`radio`){Ut([n.key],{type:`radio`},n.record,!0,e);return}let r=K.selectedRowKeys??ft.value,i=new Set(r);t.checked?i.add(n.key):i.delete(n.key),Ut(Array.from(i),{type:`checkbox`},n.record,t.checked,e)},...i})}),c=K.renderCell?K.renderCell(a,n.record,r,s):s,f=ee&&K.fixed?`th`:`td`;return l(n=>{let r=u(),i=y(`rue:component:anchor`);return e(r,i),t(()=>{let e=_(f,{className:I(J.get().cell,F(St)),style:L(Y.get().cell,K.columnWidth?{width:K.columnWidth}:void 0),children:c});v(()=>d(e,r,i))}),r})},fn=(n,i,a)=>a.enabled?q?.expandIcon?q.expandIcon({expanded:a.expanded,expandable:a.enabled,record:n.record,onExpand:(e,t)=>{t?.stopPropagation?.(),Kt(n,i)}}):l(o=>{let s=m(`button`,o);p(s,`btn btn-ghost btn-xs`),r(s,`click`,e=>{e.stopPropagation(),Kt(n,i)});let c=y(`rue:slot:anchor`);return e(s,c),t(()=>{let e=a.expanded?`-`:`+`;v(()=>d(e,s,c))}),s}):null,pn={total:Ye,page:$,pageSize:Xe},mn=yt.slice();mn.total=Ye;let hn=typeof ke==`function`?ke(mn,pn):null,gn=Me?E(ve,{render:Me,data:yt}):null,_n=Ne?E(ve,{render:Ne,data:yt}):null,vn=he(Z),yn=X&&!(Z?.hideOnSinglePage&&Qe<=1)&&!(vn.length===1&&vn[0]===`none`),bn=n=>l(f=>{let h=m(`div`,f);t(()=>{o(h,`key`,String(`pager-${n}`))}),t(()=>{o(h,`data-rue-table-pager`,String(n))}),t(()=>{p(h,I(`flex items-center gap-2 p-2`,ge(n),J.get().pager))}),t(()=>{let e=Y.get().pager;b(h,e)});let g=m(`button`,h);e(h,g),p(g,`btn btn-ghost btn-xs`),t(()=>{s(g,$<=1)}),r(g,`click`,()=>zt($-1)),e(g,c(`Prev`));let _=y(`rue:list:start`),v=y(`rue:list:end`);e(h,_),e(h,v);let x=new Map;t(()=>{x=T({items:Array.from({length:Qe})||[],getKey:(e,t)=>`page-${n}-${t+1}`,elements:x,parent:_.parentNode,before:v,singleRoot:!0,start:_,renderItem:(s,c,f,h,g)=>{d(l(()=>{let s=u(),c=m(`button`,s);e(s,c),t(()=>{o(c,`key`,String(`page-${n}-${g+1}`))}),t(()=>{p(c,`btn btn-ghost btn-xs${$===g+1?` btn-active`:``}`)}),r(c,`click`,()=>zt(g+1));let l=i(c);return e(c,l),t(()=>{a(l,g+1)}),s}),c,f)}})});let S=m(`button`,h);return e(h,S),p(S,`btn btn-ghost btn-xs`),t(()=>{s(S,$>=Qe)}),r(S,`click`,()=>zt($+1)),e(S,c(`Next`)),h}),xn=K?.getTitleCheckboxProps?.()??{},Sn=K?.type===`radio`||K?.hideSelectAll?null:E(`label`,{children:E(`input`,{type:`checkbox`,className:`checkbox`,checked:Vt,"aria-checked":Ht?`mixed`:Vt?`true`:`false`,disabled:K?.disabled||Bt.length===0,onChange:e=>Wt(e.target.checked),...xn})}),Cn=K?.columnTitle===void 0?Sn:typeof K.columnTitle==`function`?K.columnTitle(Sn):K.columnTitle,wn=e=>{Ue&&Ue(e)};return l(s=>{let f=m(`div`,s);t(()=>{o(f,`data-rue-table-root`,String($e.value))}),t(()=>{o(f,`data-rue-table-scroll`,String($e.value))}),t(()=>{o(f,`data-rue-table-version`,String(ut.value))}),t(()=>{p(f,I(`relative`,te?`rounded-box border border-base-300 bg-base-100`:void 0,J.get().root,kt))}),t(()=>{b(f,L(Y.get().root,Ot))}),r(f,`scroll`,wn);let x=y(`rue:slot:anchor`);e(f,x),t(()=>{let e=yn?vn.filter(e=>e.startsWith(`top`)).map(bn):``;v(()=>d(e,f,x))}),e(f,c(` `));let C=y(`rue:slot:anchor`);e(f,C),t(()=>{let n=gn?l(()=>{let n=u(),r=m(`div`,n);e(n,r),t(()=>{p(r,I(`p-2`,J.get().title))}),t(()=>{let e=Y.get().title;b(r,e)});let i=y(`rue:slot:anchor`);return e(r,i),t(()=>{let e=gn;v(()=>d(e,r,i))}),n}):``;v(()=>d(n,f,C))});let w=m(`table`,f);e(f,w),t(()=>{p(w,Ze)}),t(()=>{b(w,At)}),t(()=>{o(w,`data-rue-table-id`,String($e.value))});let O=y(`rue:slot:anchor`);e(w,O),t(()=>{let r=Ce?l(()=>{let r=u(),s=m(`thead`,r);e(r,s),t(()=>{p(s,J.get().thead)}),t(()=>{let e=Y.get().thead;b(s,e)});let f=y(`rue:list:start`),g=y(`rue:list:end`);e(s,f),e(s,g);let _=new Map;return t(()=>{_=T({items:n||[],getKey:(e,t)=>`header-row-${t}`,elements:_,parent:s,before:g,singleRoot:!0,start:f,renderItem:(r,s,f,g,_)=>{d(l(()=>{let s=u(),{className:f,style:g,...x}=Te&&Te(r.map(e=>e.column),_)||{},C=m(`tr`,s);e(s,C),t(()=>{o(C,`key`,String(`header-row-${_}`))}),t(()=>{p(C,I(J.get().headerRow,f))}),t(()=>{b(C,L(Y.get().headerRow,g))}),t(()=>{S(C,x)});let w=y(`rue:slot:anchor`);e(C,w),t(()=>{let r=_===0&&Tt?l(()=>{let r=u(),s=m(`th`,r);e(r,s),t(()=>{o(s,`rowSpan`,String(n.length))}),t(()=>{p(s,I(J.get().headerCell,F(`center`)))}),t(()=>{b(s,L(Y.get().headerCell,q?.columnWidth?{width:q.columnWidth}:void 0))});let c=i(s);return e(s,c),t(()=>{a(c,q?.columnTitle)}),r}):``;v(()=>d(r,C,w))}),e(C,c(` `));let E=y(`rue:slot:anchor`);e(C,E),t(()=>{let r=_===0&&Ct?l(()=>{let r=u(),i=m(`th`,r);e(r,i),t(()=>{o(i,`rowSpan`,String(n.length))}),t(()=>{p(i,I(J.get().headerCell,F(St)))}),t(()=>{b(i,L(Y.get().headerCell,K?.columnWidth?{width:K.columnWidth}:void 0))});let a=y(`rue:slot:anchor`);return e(i,a),t(()=>{let e=Cn;v(()=>d(e,i,a))}),r}):``;v(()=>d(r,C,E))}),e(C,c(` `));let D=y(`rue:list:start`),O=y(`rue:list:end`);e(C,D),e(C,O);let k=new Map;return t(()=>{k=T({items:r||[],getKey:(e,t)=>t,elements:k,parent:C,before:O,start:D,renderItem:(e,t,n,r,i)=>{h(un(e,_),t,n,r)}})}),s}),s,f)}})}),r}):``;v(()=>d(r,w,O))});let k=m(`tbody`,w);e(w,k),t(()=>{o(k,`key`,String(`body-${ut.value}`))}),t(()=>{p(k,J.get().tbody)}),t(()=>{let e=Y.get().tbody;b(k,e)});let A=y(`rue:list:start`),j=y(`rue:list:end`);e(k,A),e(k,j);let M=new Map;t(()=>{M=T({items:vt||[],getKey:(e,t)=>`row-group-${String(e.key)}`,elements:M,parent:k,before:j,start:A,renderItem:(n,i,a,s,f)=>{let x=Gt(n,f),{className:C,style:w,onClick:O,...k}=we&&we(n.record,f)||{},A=typeof Oe==`function`?Oe(n.record,f):``,j=Fe?Ie||`hover:bg-base-200`:``,M=e=>{O&&O(e),!(!q?.expandRowByClick||!x.enabled)&&((e?.target)?.closest(`button, input, a, label`)||Kt(n,f))},N=wt&&x.hasExpandedRowRender&&x.expanded,R=N?typeof q?.expandedRowClassName==`function`?q.expandedRowClassName(n.record,f,n.indent):q?.expandedRowClassName:void 0;h(l(()=>{let i=u(),a=m(`tr`,i);e(i,a),t(()=>{o(a,`key`,String(`row-${String(n.key)}`))}),t(()=>{S(a,k)}),r(a,`click`,M),t(()=>{p(a,I(J.get().bodyRow,C,A,j))}),t(()=>{b(a,L(Y.get().bodyRow,w))});let s=y(`rue:slot:anchor`);e(a,s),t(()=>{let r=Tt?l(()=>{let r=u(),i=m(`td`,r);e(r,i),t(()=>{p(i,I(J.get().cell,F(`center`)))}),t(()=>{b(i,L(Y.get().cell,q?.columnWidth?{width:q.columnWidth}:void 0,n.indent>0?{paddingLeft:`${n.indent*qe}px`}:void 0))});let a=y(`rue:slot:anchor`);return e(i,a),t(()=>{let e=fn(n,f,x);v(()=>d(e,i,a))}),r}):``;v(()=>d(r,a,s))}),e(a,c(` `));let O=y(`rue:slot:anchor`);e(a,O),t(()=>{let e=Ct?dn(n,f):``;v(()=>d(e,a,O))}),e(a,c(` `));let z=y(`rue:list:start`),te=y(`rue:list:end`);e(a,z),e(a,te);let B=new Map;t(()=>{B=T({items:g||[],getKey:(e,t)=>`cell-${String(n.key)}-${e.key}-${t}`,elements:B,parent:a,before:te,start:z,renderItem:(e,t,r,i,a)=>{h((()=>{let t=P(n.record,e.column.dataIndex),r=e.column.render?e.column.render(t,n.record,f):t,i=e.column.onCell&&e.column.onCell(n.record,f)||{},{className:o,style:s,...c}=i,l=i.colSpan??1,u=i.rowSpan??1;if(l===0||u===0)return null;let d=!Tt&&a===0,p=e.column.rowScope||ee&&ie(e.column)?`th`:`td`,m=I(J.get().cell,F(e.column.align),e.column.className,e.column.ellipsis?`truncate`:void 0,o),h=L(Y.get().cell,e.column.width||e.column.minWidth?{...e.column.width?{width:e.column.width}:{},...e.column.minWidth?{minWidth:e.column.minWidth}:{}}:void 0,d&&n.indent>0?{paddingLeft:`${n.indent*qe}px`}:void 0,s),g=e.column.ellipsis&&pe(e.column.ellipsis)&&be(r)?String(r):void 0,_=d?D(`div`,{className:`flex items-center gap-2`,children:[fn(n,f,x),E(`span`,{className:e.column.ellipsis?`truncate`:void 0,children:r})]}):r;return E(p,{className:m,style:h,title:g,colSpan:l,rowSpan:u,scope:e.column.rowScope,"data-rue-table-indent":d&&n.indent>0?String(n.indent):void 0,...c,children:_},`cell-${String(n.key)}-${e.key}-${a}`)})(),t,r,i)}})});let ne=y(`rue:slot:anchor`);return e(i,ne),t(()=>{let r=N?l(()=>{let r=u(),i=m(`tr`,r);e(r,i),t(()=>{o(i,`key`,String(`expanded-${String(n.key)}`))}),t(()=>{p(i,R)});let a=m(`td`,i);e(i,a),t(()=>{o(a,`colSpan`,String(Dt))});let s=y(`rue:component:anchor`);return e(a,s),t(()=>{let e=_(ye,{render:q?.expandedRowRender,record:n.record,index:f,indent:n.indent,expanded:!0});v(()=>d(e,a,s))}),r}):``;v(()=>d(r,i,ne))}),i}),i,a,s)}})}),e(k,c(` `));let N=y(`rue:slot:anchor`);e(k,N),t(()=>{let n=vt.length===0?l(()=>{let n=u(),r=m(`tr`,n);e(n,r);let i=m(`td`,r);e(r,i),t(()=>{o(i,`colSpan`,String(Dt))}),t(()=>{p(i,I(J.get().empty,F(`center`)))}),t(()=>{let e=Y.get().empty;b(i,e)});let a=y(`rue:slot:anchor`);return e(i,a),t(()=>{let e=Ae===void 0?We.emptyText:Ae;v(()=>d(e,i,a))}),n}):``;v(()=>d(n,k,N))});let R=y(`rue:slot:anchor`);e(w,R),t(()=>{let n=hn||yn&&vn.some(e=>e.startsWith(`bottom`))?l(()=>{let n=u(),r=m(`tfoot`,n);e(n,r),t(()=>{p(r,J.get().tfoot)}),t(()=>{let e=Y.get().tfoot;b(r,e)});let i=y(`rue:slot:anchor`);e(r,i),t(()=>{let n=hn?l(()=>{let n=u(),r=m(`tr`,n);e(n,r),t(()=>{p(r,J.get().summary)}),t(()=>{let e=Y.get().summary;b(r,e)});let i=m(`td`,r);e(r,i),t(()=>{o(i,`colSpan`,String(Dt))});let a=y(`rue:slot:anchor`);return e(i,a),t(()=>{let e=hn;v(()=>d(e,i,a))}),n}):``;v(()=>d(n,r,i))}),e(r,c(` `));let a=y(`rue:slot:anchor`);return e(r,a),t(()=>{let n=yn?l(()=>{let n=u(),r=y(`rue:list:start`),i=y(`rue:list:end`);e(n,r),e(n,i);let a=new Map;return t(()=>{a=T({items:vn.filter(e=>e.startsWith(`bottom`))||[],getKey:(e,t)=>`pager-row-${e}`,elements:a,parent:r.parentNode,before:i,singleRoot:!0,trackIndex:!1,start:r,renderItem:(n,r,i,a,s)=>{d(l(()=>{let r=u(),i=m(`tr`,r);e(r,i),t(()=>{o(i,`key`,String(`pager-row-${n}`))});let a=m(`td`,i);e(i,a),t(()=>{o(a,`colSpan`,String(Dt))});let s=y(`rue:slot:anchor`);return e(a,s),t(()=>{let e=bn(n);v(()=>d(e,a,s))}),r}),r,i)}})}),n}):``;v(()=>d(n,r,a))}),n}):``;v(()=>d(n,w,R))});let z=y(`rue:slot:anchor`);e(f,z),t(()=>{let n=_n?l(()=>{let n=u(),r=m(`div`,n);e(n,r),t(()=>{p(r,I(`p-2`,J.get().footer))}),t(()=>{let e=Y.get().footer;b(r,e)});let i=y(`rue:slot:anchor`);return e(r,i),t(()=>{let e=_n;v(()=>d(e,r,i))}),n}):``;v(()=>d(n,f,z))}),e(f,c(` `));let B=y(`rue:slot:anchor`);return e(f,B),t(()=>{let n=Ge.spinning?l(()=>{let n=u(),r=m(`div`,n);e(n,r),t(()=>{p(r,I(`absolute inset-0 z-20 flex flex-col items-center justify-center gap-2 rounded-box bg-base-100/70`,J.get().loading))}),t(()=>{let e=Y.get().loading;b(r,e)});let i=m(`span`,r);e(r,i),p(i,`loading loading-spinner loading-md`);let a=y(`rue:slot:anchor`);return e(r,a),t(()=>{let n=Ge.tip?l(()=>{let n=u(),r=m(`div`,n);e(n,r),p(r,`text-sm opacity-70`);let i=y(`rue:slot:anchor`);return e(r,i),t(()=>{let e=Ge.tip;v(()=>d(e,r,i))}),n}):``;v(()=>d(n,r,a))}),n}):``;v(()=>d(n,f,B))}),f})}return l(e=>{let n=m(`table`,e);return t(()=>{p(n,Ze)}),t(()=>{let e=Y.get().table;b(n,e)}),n})},{Head:n=>l(r=>{let i=m(`thead`,r);t(()=>{p(i,n.className||void 0)});let a=y(`rue:children:anchor`);return e(i,a),t(()=>{let e=n.children;v(()=>d(e,i,a))}),i}),Body:n=>l(r=>{let i=m(`tbody`,r);t(()=>{p(i,n.className||void 0)});let a=y(`rue:children:anchor`);return e(i,a),t(()=>{let e=n.children;v(()=>d(e,i,a))}),i}),Foot:n=>l(r=>{let i=m(`tfoot`,r);t(()=>{p(i,n.className||void 0)});let a=y(`rue:children:anchor`);return e(i,a),t(()=>{let e=n.children;v(()=>d(e,i,a))}),i}),TR:n=>l(r=>{let i=m(`tr`,r);t(()=>{p(i,n.className||void 0)});let a=y(`rue:children:anchor`);return e(i,a),t(()=>{let e=n.children;v(()=>d(e,i,a))}),i}),TH:n=>l(r=>{let i=m(`th`,r);t(()=>{p(i,n.className||void 0)});let a=y(`rue:children:anchor`);return e(i,a),t(()=>{let e=n.children;v(()=>d(e,i,a))}),i}),TD:n=>l(r=>{let i=m(`td`,r);t(()=>{p(i,n.className||void 0)});let a=y(`rue:children:anchor`);return e(i,a),t(()=>{let e=n.children;v(()=>d(e,i,a))}),i})}),W=n=>l(r=>{let i=m(`div`,r);p(i,`component-preview not-prose text-base-content my-6 lg:my-12`);let a=m(`div`,i);e(i,a),p(a,`flex flex-wrap items-start justify-between gap-3`);let o=m(`div`,a);e(a,o);let s=m(`h2`,o);e(o,s),p(s,`component-preview-title mt-2 mb-1 text-lg font-semibold`),e(s,c(`# `));let f=y(`rue:slot:anchor`);e(s,f),t(()=>{let e=n.title;v(()=>d(e,s,f))});let h=y(`rue:slot:anchor`);e(o,h),t(()=>{let r=n.summary?l(()=>{let r=u(),i=m(`p`,r);e(r,i),p(i,`m-0 text-sm opacity-70`);let a=y(`rue:slot:anchor`);return e(i,a),t(()=>{let e=n.summary;v(()=>d(e,i,a))}),r}):``;v(()=>d(r,o,h))});let g=y(`rue:component:anchor`);e(i,g),t(()=>{let e=_(k,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:n.tab.value,onChange:e=>n.tab.value=e,className:`mb-3 mt-4`});v(()=>d(e,i,g))});let b=y(`rue:slot:anchor`);return e(i,b),t(()=>{let r=n.tab.value===`preview`?n.preview():l(()=>{let r=u(),i=y(`rue:component:anchor`);return e(r,i),t(()=>{let e=_(O,{className:`mt-2`,lang:`tsx`,code:n.code});v(()=>d(e,r,i))}),r});v(()=>d(r,i,b))}),i}),xe=n=>l(r=>{let i=m(`div`,r);p(i,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let a=m(`table`,i);e(i,a),p(a,`table table-zebra`);let s=m(`thead`,a);e(a,s);let f=m(`tr`,s);e(s,f);let h=m(`th`,f);e(f,h),e(h,c(`属性`));let g=m(`th`,f);e(f,g),e(g,c(`说明`));let _=m(`th`,f);e(f,_),e(_,c(`类型`));let b=m(`th`,f);e(f,b),e(b,c(`默认值`));let x=m(`tbody`,a);e(a,x);let S=y(`rue:list:start`),C=y(`rue:list:end`);e(x,S),e(x,C);let w=new Map;return t(()=>{w=T({items:n.rows||[],getKey:(e,t)=>e.prop,elements:w,parent:x,before:C,singleRoot:!0,trackIndex:!1,start:S,renderItem:(n,r,i,a,s)=>{d(l(()=>{let r=u(),i=m(`tr`,r);e(r,i),t(()=>{o(i,`key`,String(n.prop))});let a=m(`td`,i);e(i,a);let s=m(`code`,a);e(a,s);let c=y(`rue:slot:anchor`);e(s,c),t(()=>{let e=n.prop;v(()=>d(e,s,c))});let l=m(`td`,i);e(i,l);let f=y(`rue:slot:anchor`);e(l,f),t(()=>{let e=n.description;v(()=>d(e,l,f))});let p=m(`td`,i);e(i,p);let h=m(`code`,p);e(p,h);let g=y(`rue:slot:anchor`);e(h,g),t(()=>{let e=n.type;v(()=>d(e,h,g))});let _=m(`td`,i);e(i,_);let b=m(`code`,_);e(_,b);let x=y(`rue:slot:anchor`);return e(b,x),t(()=>{let e=n.defaultValue;v(()=>d(e,b,x))}),r}),r,i)}})}),i}),G=[{key:`1`,name:`林青`,age:28,city:`杭州`,role:`设计工程师`,team:`体验平台`,status:`active`,score:92,salary:26e3,visits:148,address:`云谷路 88 号`},{key:`2`,name:`周宁`,age:34,city:`上海`,role:`前端工程师`,team:`设计系统`,status:`active`,score:88,salary:31e3,visits:203,address:`武康路 12 号`},{key:`3`,name:`刘溪`,age:41,city:`深圳`,role:`产品经理`,team:`商业化`,status:`leave`,score:79,salary:35e3,visits:167,address:`深南大道 100 号`},{key:`4`,name:`陈默`,age:26,city:`成都`,role:`测试开发`,team:`质量平台`,status:`trial`,score:95,salary:22e3,visits:98,address:`天府三街 18 号`},{key:`5`,name:`顾安`,age:31,city:`北京`,role:`运营分析`,team:`增长`,status:`active`,score:83,salary:24500,visits:132,address:`望京 SOHO`}],Se=[{id:`1`,item:`套餐 A`,owner:`前台`,channel:`门店`,stock:42,price:`199`},{id:`2`,item:`套餐 B`,owner:`门店`,channel:`小程序`,stock:36,price:`299`},{id:`3`,item:`套餐 C`,owner:`线上`,channel:`官网`,stock:28,price:`399`},{id:`4`,item:`体验卡`,owner:`运营`,channel:`社群`,stock:86,price:`99`},{id:`5`,item:`企业版`,owner:`销售`,channel:`直销`,stock:12,price:`1299`},{id:`6`,item:`家庭版`,owner:`门店`,channel:`门店`,stock:25,price:`699`},{id:`7`,item:`增值包`,owner:`客服`,channel:`续费`,stock:57,price:`159`},{id:`8`,item:`旗舰包`,owner:`线上`,channel:`官网`,stock:18,price:`999`},{id:`9`,item:`季度包`,owner:`增长`,channel:`投放`,stock:64,price:`499`},{id:`10`,item:`年度包`,owner:`销售`,channel:`直销`,stock:21,price:`1599`}],Ce=[{key:`1`,name:`林青`,role:`设计工程师`,team:`体验平台`,city:`杭州`,score:92,visits:148,salary:26e3,address:`云谷路 88 号`},{key:`2`,name:`周宁`,role:`前端工程师`,team:`设计系统`,city:`上海`,score:88,visits:216,salary:31e3,address:`武康路 12 号`},{key:`3`,name:`刘溪`,role:`产品经理`,team:`商业化`,city:`深圳`,score:76,visits:174,salary:35e3,address:`深南大道 100 号`},{key:`4`,name:`陈默`,role:`测试开发`,team:`质量平台`,city:`成都`,score:95,visits:98,salary:22e3,address:`天府三街 18 号`},{key:`5`,name:`顾安`,role:`运营分析`,team:`增长`,city:`北京`,score:83,visits:132,salary:24500,address:`望京 SOHO`},{key:`6`,name:`许嘉`,role:`数据分析`,team:`策略`,city:`南京`,score:91,visits:121,salary:27e3,address:`软件大道 66 号`},{key:`7`,name:`何澈`,role:`客户成功`,team:`企业服务`,city:`苏州`,score:87,visits:154,salary:24e3,address:`金鸡湖大道 9 号`}],we=[{key:`1`,name:`John Brown`,age:32,address:`New York No. 1 Lake Park`},{key:`2`,name:`Jim Green`,age:42,address:`London No. 1 Lake Park`},{key:`3`,name:`Joe Black`,age:32,address:`Sydney No. 1 Lake Park`},{key:`4`,name:`Jim Red`,age:32,address:`London No. 2 Lake Park`}],Te=[{key:`name`,label:`姓名`},{key:`age`,label:`年龄`},{key:`address`,label:`地址`}],Ee=[{key:`1`,name:`John Brown`,chinese:98,math:60,english:70},{key:`2`,name:`Jim Green`,chinese:98,math:66,english:89},{key:`3`,name:`Joe Black`,chinese:98,math:90,english:70},{key:`4`,name:`Jim Red`,chinese:88,math:99,english:89}],K=[{key:`chinese`,label:`语文`,priority:3},{key:`math`,label:`数学`,priority:2},{key:`english`,label:`英语`,priority:1}],De=e=>K.some(t=>t.key===e),q=e=>e===`ascend`||e===`descend`,Oe=[{key:`1`,name:`Cy Ganderton`,team:`Design Ops`,city:`Hangzhou`,owner:`Hart Hagerty`,updatedAt:`2026-04-18`},{key:`2`,name:`Brice Swyre`,team:`Growth`,city:`Shanghai`,owner:`Yancy Tear`,updatedAt:`2026-04-19`},{key:`3`,name:`Marjy Ferencz`,team:`Infra`,city:`Shenzhen`,owner:`Maribeth Popping`,updatedAt:`2026-04-21`}],ke=[{key:`name`,label:`Name`},{key:`team`,label:`Team`},{key:`city`,label:`City`},{key:`owner`,label:`Owner`},{key:`updatedAt`,label:`Updated`}],Ae=e=>ke.map(t=>({key:t.key,title:t.label,dataIndex:t.key,hidden:!e.includes(t.key)})),je=[{prop:`columns`,description:`列配置，支持分组表头、排序、筛选、隐藏列与单元格属性。`,type:`ColumnItem[]`,defaultValue:`-`},{prop:`dataSource`,description:`数据数组。`,type:`any[]`,defaultValue:`-`},{prop:`rowKey`,description:`行主键，可传字段名或函数。`,type:`string | (record) => key`,defaultValue:"`key`"},{prop:`rowSelection`,description:`选择列配置，支持多选、单选、禁用项、表头标题。`,type:`object`,defaultValue:`-`},{prop:`expandable`,description:`展开行配置，支持按行点击展开与受控展开。`,type:`object`,defaultValue:`-`},{prop:`pagination`,description:"分页配置，设为 `false` 时关闭分页。",type:`object | false`,defaultValue:`-`},{prop:`scroll`,description:`横向 / 纵向滚动配置，可在变更后自动回到顶部。`,type:`object`,defaultValue:`-`},{prop:`summary`,description:`汇总栏渲染。`,type:`(currentData, info) => any`,defaultValue:`-`}],Me=[{prop:`title`,description:`列标题，支持传节点或函数。`,type:`any | (context) => any`,defaultValue:`-`},{prop:`dataIndex`,description:`字段路径，支持字符串和数组路径。`,type:`string | string[]`,defaultValue:`-`},{prop:`sorter / sortOrder`,description:`本地排序、受控排序与多列排序。`,type:`boolean | fn | { compare?: fn; multiple?: number } / SortOrder`,defaultValue:`-`},{prop:`filters / filterDropdown / filteredValue`,description:`默认筛选菜单、自定义筛选面板与受控筛选值。`,type:`FilterItem[] / render fn / any[]`,defaultValue:`-`},{prop:`filterSearch`,description:`筛选项搜索。`,type:`boolean | fn`,defaultValue:`false`},{prop:`children`,description:`分组表头子列。`,type:`ColumnItem[]`,defaultValue:`-`},{prop:`hidden`,description:`隐藏列但保持配置。`,type:`boolean`,defaultValue:`false`},{prop:`onCell / onHeaderCell`,description:`给单元格注入 className、style、colSpan、rowSpan 等属性。`,type:`fn`,defaultValue:`-`}],Ne=[{prop:`type`,description:`选择模式。`,type:"`checkbox` | `radio`",defaultValue:"`checkbox`"},{prop:`columnTitle`,description:`选择列表头内容。`,type:`any`,defaultValue:`-`},{prop:`hideSelectAll`,description:`隐藏全选框。`,type:`boolean`,defaultValue:`false`},{prop:`getCheckboxProps`,description:`为某一行注入 disabled 等状态。`,type:`(record) => object`,defaultValue:`-`},{prop:`onSelect / onSelectAll / onChange`,description:`选择行为回调。`,type:`fn`,defaultValue:`-`}],Pe=[{prop:`expandedRowRender`,description:`展开内容渲染函数。`,type:`(record, index) => any`,defaultValue:`-`},{prop:`expandRowByClick`,description:`点击行即可展开。`,type:`boolean`,defaultValue:`false`},{prop:`showExpandColumn`,description:`是否展示展开列。`,type:`boolean`,defaultValue:`true`},{prop:`rowExpandable`,description:`按行控制是否可展开。`,type:`(record) => boolean`,defaultValue:`-`},{prop:`defaultExpandedRowKeys / expandedRowKeys`,description:`默认展开 / 受控展开。`,type:`key[]`,defaultValue:`-`}],Fe=`import { Table } from '@rue-js/design'

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
}`,Ie=`import { Table } from '@rue-js/design'

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
}`,Le=`import { ref } from '@rue-js/rue'
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
}`,Re=`import { ref } from '@rue-js/rue'
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
}`,ze=`import { ref } from '@rue-js/rue'
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
}`,Be=`import { ref } from '@rue-js/rue'
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
}`,Ve=`import { ref } from '@rue-js/rue'
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
}`,He=`import { Table } from '@rue-js/design'

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
}`,Ue=`import { ref } from '@rue-js/rue'
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
}`,We=`import { Table } from '@rue-js/design'

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
}`,J=()=>{let{tabBasic:s,tabVisual:h,tabControlledSort:g,tabMultipleSorter:b,tabColumnToggle:x,tabSelection:S,tabExpand:C,tabLayout:T,tabGrouped:O,tabStatic:k,selectedKeys:A,selectedRadio:M,clickedName:N,controlledNameFilter:P,controlledAddressFilter:F,controlledSorter:I,multiSortOrders:L,visibleColumnKeys:R,columnToggleColumns:ee,hideSalary:z,expandedKeys:te,buildControlledSortColumns:B,controlledSortColumns:ne,syncControlledSortColumns:re,buildMultipleSorterColumns:ie,multipleSorterColumns:ae,syncMultipleSorterColumns:V,cycleControlledSort:H,getControlledSortButtonText:oe,getControlledSortFieldText:se,getControlledSortOrderText:ce,setMultiSortPreset:le,cycleMultiSort:ue,getMultiSortButtonText:de,getMultiSortSummary:fe,toggleColumnVisibility:pe,employeeColumns:me,buildGroupedColumns:he,groupedColumns:ge,toggleSalaryColumn:_e,scrollColumns:ve}=w(`useSetup:0:0`,()=>f(()=>{let t=w(`ref:1:0`,()=>n(`preview`)),i=w(`ref:1:1`,()=>n(`preview`)),a=w(`ref:1:2`,()=>n(`preview`)),o=w(`ref:1:3`,()=>n(`preview`)),s=w(`ref:1:4`,()=>n(`preview`)),u=w(`ref:1:5`,()=>n(`preview`)),d=w(`ref:1:6`,()=>n(`preview`)),f=w(`ref:1:7`,()=>n(`preview`)),h=w(`ref:1:8`,()=>n(`preview`)),g=w(`ref:1:9`,()=>n(`preview`)),_=w(`ref:1:10`,()=>n([`2`])),v=w(`ref:1:11`,()=>n([`2`])),y=w(`ref:1:12`,()=>n(`未点击`)),b=w(`ref:1:13`,()=>n([`Jim`])),x=w(`ref:1:14`,()=>n([`London`])),S=w(`ref:1:15`,()=>n({columnKey:`age`,order:`descend`})),C=w(`ref:1:16`,()=>n({chinese:`descend`,math:`descend`})),T=w(`ref:1:17`,()=>n([`name`,`team`,`city`,`owner`])),E=w(`ref:1:18`,()=>n(Ae(T.value))),D=w(`ref:1:19`,()=>n(!1)),O=w(`ref:1:20`,()=>n([`2`])),k=()=>[{key:`name`,title:`Name`,filters:[{text:`Jim`,value:`Jim`},{text:`Joe`,value:`Joe`},{text:`John`,value:`John`}],dataIndex:`name`,filteredValue:b.value,filterSearch:!0,onFilter:(e,t)=>t.name.includes(e),sorter:(e,t)=>e.name.length-t.name.length,sortDirections:[`descend`,`ascend`],sortOrder:S.value.columnKey===`name`?S.value.order:null},{key:`age`,title:`Age`,dataIndex:`age`,sorter:(e,t)=>e.age-t.age,sortDirections:[`descend`,`ascend`],sortOrder:S.value.columnKey===`age`?S.value.order:null},{key:`address`,title:`Address`,filters:[{text:`London`,value:`London`},{text:`New York`,value:`New York`},{text:`Sydney`,value:`Sydney`}],dataIndex:`address`,filteredValue:x.value,filterSearch:!0,onFilter:(e,t)=>t.address.includes(e),sorter:(e,t)=>e.address.length-t.address.length,sortDirections:[`descend`,`ascend`],sortOrder:S.value.columnKey===`address`?S.value.order:null,ellipsis:!0}],A=w(`ref:1:21`,()=>n(k())),j=()=>{A.value=k()},M=()=>[{title:`Name`,dataIndex:`name`},{key:`chinese`,title:`Chinese Score`,dataIndex:`chinese`,sortOrder:C.value.chinese??null,sorter:{compare:(e,t)=>e.chinese-t.chinese,multiple:3},sortDirections:[`descend`,`ascend`]},{key:`math`,title:`Math Score`,dataIndex:`math`,sortOrder:C.value.math??null,sorter:{compare:(e,t)=>e.math-t.math,multiple:2},sortDirections:[`descend`,`ascend`]},{key:`english`,title:`English Score`,dataIndex:`english`,sortOrder:C.value.english??null,sorter:{compare:(e,t)=>e.english-t.english,multiple:1},sortDirections:[`descend`,`ascend`]}],N=w(`ref:1:22`,()=>n(M())),P=()=>{N.value=M()},F=e=>{let t=S.value,n=t.columnKey===e?t.order===`descend`?`ascend`:t.order===`ascend`?null:`descend`:`descend`;S.value=n?{columnKey:e,order:n}:{columnKey:null,order:null},j()},I=(e,t)=>{let n=S.value.columnKey===e?S.value.order:null;return n===`descend`?`${t}降序`:n===`ascend`?`${t}升序`:`${t}排序`},L=()=>Te.find(e=>e.key===S.value.columnKey)?.label??`无`,R=()=>S.value.order===`descend`?`降序`:S.value.order===`ascend`?`升序`:`无`,ee=e=>{C.value={...e},P()},z=e=>{let t=C.value[e]??null,n=t===`descend`?`ascend`:t===`ascend`?null:`descend`,r={...C.value};n?r[e]=n:delete r[e],C.value=r,P()},te=e=>{let t=C.value[e.key];return t===`descend`?`${e.label}降序`:t===`ascend`?`${e.label}升序`:`${e.label}排序`},B=()=>K.filter(e=>C.value[e.key]).sort((e,t)=>t.priority-e.priority).map(e=>{let t=C.value[e.key]===`descend`?`降序`:`升序`;return`${e.label}${t} P${e.priority}`}).join(` / `)||`无`,ne=e=>{let t=T.value.includes(e)?T.value.filter(t=>t!==e):[...T.value,e];T.value=t,E.value=Ae(t)},re=[{title:`姓名`,dataIndex:`name`},{title:`城市`,dataIndex:`city`},{title:`岗位`,dataIndex:`role`},{title:`团队`,dataIndex:`team`}],ie=t=>[{title:`成员信息`,children:[{title:`姓名`,dataIndex:`name`,width:120},{title:`城市`,dataIndex:`city`,width:120}]},{title:`工作概览`,children:[{title:`岗位`,dataIndex:`role`,ellipsis:!0},{title:`团队`,dataIndex:`team`,ellipsis:!0},{title:`月薪`,dataIndex:`salary`,align:`right`,hidden:t}]},{title:`操作`,key:`action`,width:120,align:`center`,render:(t,n)=>l(t=>{let i=m(`button`,t);return p(i,`btn btn-ghost btn-xs`),r(i,`click`,()=>y.value=`操作 ${n.name}`),e(i,c(`查看`)),i}),onCell:(e,t)=>({className:t%2==0?`bg-base-100`:`bg-base-200/30`})}],ae=w(`ref:1:23`,()=>n(ie(D.value)));return{tabBasic:t,tabVisual:i,tabControlledSort:a,tabMultipleSorter:o,tabColumnToggle:s,tabSelection:u,tabExpand:d,tabLayout:f,tabGrouped:h,tabStatic:g,selectedKeys:_,selectedRadio:v,clickedName:y,controlledNameFilter:b,controlledAddressFilter:x,controlledSorter:S,multiSortOrders:C,visibleColumnKeys:T,columnToggleColumns:E,hideSalary:D,expandedKeys:O,buildControlledSortColumns:k,controlledSortColumns:A,syncControlledSortColumns:j,buildMultipleSorterColumns:M,multipleSorterColumns:N,syncMultipleSorterColumns:P,cycleControlledSort:F,getControlledSortButtonText:I,getControlledSortFieldText:L,getControlledSortOrderText:R,setMultiSortPreset:ee,cycleMultiSort:z,getMultiSortButtonText:te,getMultiSortSummary:B,toggleColumnVisibility:ne,employeeColumns:re,buildGroupedColumns:ie,groupedColumns:ae,toggleSalaryColumn:()=>{D.value=!D.value,ae.value=ie(D.value)},scrollColumns:[{title:`姓名`,dataIndex:`name`,width:120,fixedCol:!0},{title:`城市`,dataIndex:`city`,width:120},{title:`岗位`,dataIndex:`role`,width:180,ellipsis:!0},{title:`团队`,dataIndex:`team`,width:160},{title:`地址`,dataIndex:`address`,width:220,ellipsis:!0},{title:`访问量`,dataIndex:`visits`,width:120,align:`right`}]}}));return l(n=>{let r=u(),f=y(`rue:component:anchor`);return e(r,f),d(_(j,{children:l(()=>{let n=u(),r=m(`div`,n);e(n,r),p(r,`max-w-none prose prose-sm md:prose-base`);let l=m(`h1`,r);e(r,l),e(l,c(`Table 表格`));let f=m(`p`,r);e(r,f),e(f,c(`Rue Table 现在同时覆盖数据驱动表格和 daisyUI 风格的静态表格写法，使用 Rue 当前视觉风格，并补充更完整的 排序、筛选、分页、选择、展开与分组表头能力。`));let w=m(`p`,r);e(r,w),e(w,c(`可以先从基础用法进入，再根据场景查看筛选排序、选择模式、滚动布局与分组表头。静态样式写法仍然提供，可继续 使用`));let j=m(`code`,w);e(w,j),e(j,c(`Table.Head`)),e(w,c(`、`));let B=m(`code`,w);e(w,B),e(B,c(`Table.Body`)),e(w,c(`等复合组件。`));let ie=m(`h2`,r);e(r,ie),e(ie,c(`何时使用`));let he=m(`ul`,r);e(r,he);let ye=m(`li`,he);e(he,ye),e(ye,c(`需要展示结构化列表数据，并同时提供排序、筛选、分页等交互。`));let be=m(`li`,he);e(he,be),e(be,c(`适合使用 Rue / daisyUI 的表格视觉风格，同时使用数据表式 API。`));let Ae=m(`li`,he);e(he,Ae),e(Ae,c(`基础简单静态表格，也有复杂后台表格，想统一在一个组件里处理。`));let J=y(`rue:component:anchor`);e(r,J),t(()=>{let e=_(W,{title:`基础数据表格`,summary:`最直接的 columns + dataSource 用法，适合作为大多数列表页的起点。`,tab:s,preview:()=>E(`div`,{className:`overflow-x-auto rounded-box border border-base-300 bg-base-100 p-4`,children:E(U,{className:`w-full`,columns:me,dataSource:G})}),code:Fe});v(()=>d(e,r,J))});let Y=y(`rue:component:anchor`);e(r,Y),t(()=>{let e=_(W,{title:`视觉风格与静态行态`,summary:`使用当前视觉类示例：背景、激活行、hover、zebra 与尺寸示例。`,tab:h,preview:()=>D(`div`,{className:`grid gap-4 lg:grid-cols-2`,children:[D(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[E(`div`,{className:`mb-3 text-sm font-medium`,children:`带背景与激活行`}),D(U,{className:`w-full`,children:[E(U.Head,{children:D(U.TR,{children:[E(U.TH,{children:`姓名`}),E(U.TH,{children:`岗位`}),E(U.TH,{children:`城市`})]})}),D(U.Body,{children:[D(U.TR,{className:`bg-base-200`,children:[E(U.TD,{children:`林青`}),E(U.TD,{children:`设计工程师`}),E(U.TD,{children:`杭州`})]}),D(U.TR,{className:`active`,children:[E(U.TD,{children:`周宁`}),E(U.TD,{children:`前端工程师`}),E(U.TD,{children:`上海`})]})]})]})]}),D(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[E(`div`,{className:`mb-3 text-sm font-medium`,children:`hover / zebra / xs`}),E(U,{className:`w-full`,zebra:!0,size:`xs`,rowHoverable:!0,columns:me,dataSource:G.slice(0,3)})]})]}),code:Ie});v(()=>d(e,r,Y))});let Ge=y(`rue:component:anchor`);e(r,Ge),t(()=>{let e=_(W,{title:`可控筛选与排序`,summary:`恢复外部控制台式的筛选与排序示例，避免交互状态混在一起。`,tab:g,preview:()=>D(`div`,{className:`space-y-4 rounded-box border border-base-300 bg-base-100 p-4`,children:[D(`div`,{className:`flex flex-wrap items-center gap-2 text-sm`,children:[Te.map(e=>E(`button`,{className:`btn btn-xs ${I.value.columnKey===e.key?`btn-primary`:`btn-ghost`}`,onClick:()=>H(e.key),children:oe(e.key,e.label)},e.key)),E(`button`,{className:`btn btn-ghost btn-xs`,onClick:()=>{I.value={columnKey:null,order:null},re()},children:`清空排序`}),E(`button`,{className:`btn btn-xs ${P.value.length===1&&P.value[0]===`Jim`&&F.value.length===0?`btn-primary`:`btn-ghost`}`,onClick:()=>{P.value=[`Jim`],F.value=[],re()},children:`只看 Jim`}),E(`button`,{className:`btn btn-xs ${F.value.length===1&&F.value[0]===`London`&&P.value.length===0?`btn-primary`:`btn-ghost`}`,onClick:()=>{P.value=[],F.value=[`London`],re()},children:`只看 London`}),E(`button`,{className:`btn btn-xs ${P.value.length===1&&P.value[0]===`Jim`&&F.value.length===1&&F.value[0]===`London`?`btn-primary`:`btn-ghost`}`,onClick:()=>{P.value=[`Jim`],F.value=[`London`],re()},children:`Jim + London`}),E(`button`,{className:`btn btn-ghost btn-xs`,onClick:()=>{P.value=[],F.value=[],re()},children:`清空筛选`}),E(`button`,{className:`btn btn-ghost btn-xs`,onClick:()=>{P.value=[],F.value=[],I.value={columnKey:null,order:null},re()},children:`清空全部`}),D(`span`,{className:`opacity-70`,children:[`筛选：Name `,P.value.join(`, `)||`无`,` / Address`,` `,F.value.join(`, `)||`无`,`； 当前排序：`,se(),` / `,ce()]})]}),E(U,{className:`w-full`,columns:ne.value,dataSource:we,sortDirections:[`descend`,`ascend`],onChange:(e,t,n)=>{P.value=Array.isArray(t?.name)&&t.name.length>0?t.name:[],F.value=Array.isArray(t?.address)&&t.address.length>0?t.address:[];let r=Array.isArray(n)?n[0]:n;I.value={columnKey:r?.order?r?.columnKey??null:null,order:r?.order??null},re()}})]}),code:Le});v(()=>d(e,r,Ge))});let Ke=y(`rue:component:anchor`);e(r,Ke),t(()=>{let e=_(W,{title:`多列排序（优先级组合）`,summary:`补回多列优先级排序示例，支持 { compare, multiple } 并按优先级组合排序。`,tab:b,preview:()=>D(`div`,{className:`space-y-4 rounded-box border border-base-300 bg-base-100 p-4`,children:[D(`div`,{className:`flex flex-wrap gap-2 text-sm`,children:[E(`button`,{className:`btn btn-ghost btn-xs`,onClick:()=>le({chinese:`descend`,math:`descend`}),children:`语文 + 数学降序`}),E(`button`,{className:`btn btn-ghost btn-xs`,onClick:()=>le({chinese:`descend`,math:`descend`,english:`descend`}),children:`三科降序`}),E(`button`,{className:`btn btn-ghost btn-xs`,onClick:()=>le({chinese:`ascend`,english:`descend`}),children:`语文升序 + 英语降序`}),E(`button`,{className:`btn btn-ghost btn-xs`,onClick:()=>le({}),children:`清空排序`})]}),D(`div`,{className:`flex flex-wrap items-center gap-2 text-sm`,children:[K.map(e=>E(`button`,{className:`btn btn-xs ${L.value[e.key]?`btn-primary`:`btn-ghost`}`,onClick:()=>ue(e.key),children:de(e)},e.key)),D(`span`,{className:`opacity-70`,children:[`当前优先级：`,fe()]})]}),E(U,{className:`w-full`,columns:ae.value,dataSource:Ee,sortDirections:[`descend`,`ascend`],onChange:(e,t,n)=>{L.value=(Array.isArray(n)?n:n?.order?[n]:[]).reduce((e,t)=>{let n=t?.columnKey,r=t?.order;return De(n)&&q(r)&&(e[n]=r),e},{}),V()}})]}),code:Re});v(()=>d(e,r,Ke))});let qe=y(`rue:component:anchor`);e(r,qe),t(()=>{let e=_(W,{title:`动态列显隐`,summary:`把基础的隐藏列示例 补回来，并用外部开关控制列可见性。`,tab:x,preview:()=>D(`div`,{className:`space-y-4 rounded-box border border-base-300 bg-base-100 p-4`,children:[E(`div`,{className:`flex flex-wrap gap-2 text-sm`,children:ke.map(e=>{let t=R.value.includes(e.key);return E(`button`,{className:`btn btn-xs ${t?`btn-primary`:`btn-ghost`}`,onClick:()=>pe(e.key),children:t?`隐藏 ${e.label}`:`显示 ${e.label}`},e.key)})}),E(U,{className:`w-full`,columns:ee.value,dataSource:Oe})]}),code:ze});v(()=>d(e,r,qe))});let Je=y(`rue:component:anchor`);e(r,Je),t(()=>{let e=_(W,{title:`选择模式`,summary:`展示多选、单选、禁用项、部分禁用几类示例，并增加选择列表头与回调展示。`,tab:S,preview:()=>D(`div`,{className:`grid gap-4 lg:grid-cols-2`,children:[D(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[D(`div`,{className:`mb-3 text-sm`,children:[`多选：当前 `,A.value.join(`, `)||`空`]}),E(U,{className:`w-full`,columns:[{title:`姓名`,dataIndex:`name`},{title:`团队`,dataIndex:`team`},{title:`状态`,dataIndex:`status`}],dataSource:G,rowSelection:{columnTitle:`成员`,selectedRowKeys:A.value,getCheckboxProps:e=>({disabled:e.status===`leave`}),onChange:e=>A.value=[...e]}})]}),D(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[D(`div`,{className:`mb-3 text-sm`,children:[`单选：当前 `,M.value[0]??`空`]}),E(U,{className:`w-full`,columns:[{title:`姓名`,dataIndex:`name`},{title:`城市`,dataIndex:`city`}],dataSource:G.slice(0,4),rowSelection:{type:`radio`,hideSelectAll:!0,selectedRowKeys:M.value,onChange:e=>M.value=[...e]}})]})]}),code:Be});v(()=>d(e,r,Je))});let Ye=y(`rue:component:anchor`);e(r,Ye),t(()=>{let e=_(W,{title:`展开、摘要与空态`,summary:`把展开行、按行点击展开、summary 和 emptyText 放在同一个业务场景里。`,tab:C,preview:()=>D(`div`,{className:`grid gap-4 lg:grid-cols-2`,children:[E(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:E(U,{className:`w-full`,columns:[{title:`姓名`,dataIndex:`name`},{title:`绩效`,dataIndex:`score`,align:`right`}],dataSource:G,expandable:{expandedRowKeys:te.value,expandRowByClick:!0,onExpandedRowsChange:e=>te.value=[...e],expandedRowRender:e=>D(`div`,{className:`text-sm leading-6`,children:[D(`div`,{children:[`团队：`,e.team]}),D(`div`,{children:[`地址：`,e.address]})]})},summary:e=>D(`div`,{className:`flex justify-between text-sm`,children:[D(`span`,{children:[`当前行数：`,e.length]}),D(`span`,{children:[`平均绩效：`,Math.round(e.reduce((e,t)=>e+t.score,0)/e.length)]})]})})}),E(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:E(U,{className:`w-full`,columns:[{title:`姓名`,dataIndex:`name`},{title:`团队`,dataIndex:`team`}],dataSource:[],emptyText:E(`span`,{className:`text-sm opacity-60`,children:`暂无成员，请先创建数据。`})})})]}),code:Ve});v(()=>d(e,r,Ye))});let X=y(`rue:component:anchor`);e(r,X),t(()=>{let e=_(W,{title:`滚动、标题、尾部与省略`,summary:`展示滚动、title/footer、ellipsis 和滚动容器类示例，并串成一个长表格布局场景。`,tab:T,preview:()=>E(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:E(U,{className:`w-full`,columns:ve,dataSource:G.concat(G).concat(G),scroll:{x:900,y:220,scrollToFirstRowOnChange:!0},title:e=>D(`div`,{className:`text-sm font-medium`,children:[`成员列表（当前页 `,e.length,` 行）`]}),footer:e=>E(`div`,{className:`text-sm opacity-70`,children:`展示了固定列、纵向滚动和 ellipsis。`})})}),code:He});v(()=>d(e,r,X))});let Xe=y(`rue:component:anchor`);e(r,Xe),t(()=>{let e=_(W,{title:`分组表头、隐藏列与单元格属性`,summary:`分组表头示例同时覆盖隐藏列、单元格 className/style 和操作列。`,tab:O,preview:()=>D(`div`,{className:`space-y-4 rounded-box border border-base-300 bg-base-100 p-4`,children:[D(`div`,{className:`flex flex-wrap gap-2 text-sm`,children:[E(`button`,{className:`btn btn-ghost btn-xs`,onClick:_e,children:z.value?`显示月薪列`:`隐藏月薪列`}),D(`span`,{children:[`最近操作：`,N.value]})]}),E(U,{className:`w-full`,columns:ge.value,dataSource:G,rowHoverable:!0,onRow:e=>({onClick:()=>N.value=`点击 ${e.name}`})})]}),code:Ue});v(()=>d(e,r,Xe))});let Ze=y(`rue:component:anchor`);e(r,Ze),t(()=>{let e=_(W,{title:`静态样式、Pinned Rows 与 Pinned Cols`,summary:`基础静态样式示例 仍然提供，适合不需要 columns/dataSource 时直接写结构。`,tab:k,preview:()=>D(`div`,{className:`grid gap-4 xl:grid-cols-2`,children:[E(`div`,{className:`h-72 overflow-auto rounded-box border border-base-300 bg-base-100 p-4`,children:D(U,{zebra:!0,pinRows:!0,className:`w-full min-w-[640px]`,children:[E(U.Head,{children:D(U.TR,{children:[E(U.TH,{children:`商品`}),E(U.TH,{children:`负责人`}),E(U.TH,{children:`渠道`}),E(U.TH,{className:`text-right`,children:`库存`}),E(U.TH,{className:`text-right`,children:`价格`})]})}),E(U.Body,{children:Se.map(e=>D(U.TR,{children:[E(U.TD,{children:e.item}),E(U.TD,{children:e.owner}),E(U.TD,{children:e.channel}),E(U.TD,{className:`text-right`,children:e.stock}),E(U.TD,{className:`text-right`,children:e.price})]},e.id))})]})}),E(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4 overflow-x-auto`,children:D(U,{pinCols:!0,className:`w-[980px]`,children:[E(U.Head,{children:D(U.TR,{children:[E(U.TH,{className:`bg-base-100`,children:`姓名`}),E(U.TH,{children:`岗位`}),E(U.TH,{children:`团队`}),E(U.TH,{children:`城市`}),E(U.TH,{className:`text-right`,children:`绩效`}),E(U.TH,{className:`text-right`,children:`访问`}),E(U.TH,{className:`text-right`,children:`月薪`}),E(U.TH,{children:`地址`})]})}),E(U.Body,{children:Ce.map(e=>D(U.TR,{children:[E(U.TH,{className:`bg-base-100`,children:e.name}),E(U.TD,{children:e.role}),E(U.TD,{children:e.team}),E(U.TD,{children:e.city}),E(U.TD,{className:`text-right`,children:e.score}),E(U.TD,{className:`text-right`,children:e.visits}),E(U.TD,{className:`text-right`,children:e.salary}),E(U.TD,{children:e.address})]},e.key))})]})})]}),code:We});v(()=>d(e,r,Ze))});let Qe=m(`h2`,r);e(r,Qe),o(Qe,`id`,`table-api`),e(Qe,c(`API`));let $e=m(`p`,r);e(r,$e),e($e,c(`当前页面只列出 Rue Table 当前最常用的配置项，优先对应实际使用场景。`));let et=m(`h3`,r);e(r,et),e(et,c(`Table`));let tt=y(`rue:component:anchor`);e(r,tt),t(()=>{let e=_(xe,{rows:je});v(()=>d(e,r,tt))});let nt=m(`h3`,r);e(r,nt),e(nt,c(`Column`));let rt=y(`rue:component:anchor`);e(r,rt),t(()=>{let e=_(xe,{rows:Me});v(()=>d(e,r,rt))});let it=m(`h3`,r);e(r,it),e(it,c(`rowSelection`));let at=y(`rue:component:anchor`);e(r,at),t(()=>{let e=_(xe,{rows:Ne});v(()=>d(e,r,at))});let ot=m(`h3`,r);e(r,ot),e(ot,c(`expandable`));let st=y(`rue:component:anchor`);e(r,st),t(()=>{let e=_(xe,{rows:Pe});v(()=>d(e,r,st))});let ct=m(`h2`,r);e(r,ct),e(ct,c(`FAQ`));let lt=m(`h3`,r);e(r,lt),e(lt,c(`数据驱动和静态结构怎么选？`));let ut=m(`p`,r);e(r,ut),e(ut,c(`需要排序、筛选、分页、选择、展开时优先使用`));let dt=m(`code`,ut);e(ut,dt),e(dt,c(`columns + dataSource`)),e(ut,c(`。只想快速输出结构化样式， 或需要完全手写表格结构时，可以使用复合组件写法即可。`));let ft=m(`h3`,r);e(r,ft),e(ft,c(`为什么筛选或排序后会回到第一页？`));let pt=m(`p`,r);e(r,pt),e(pt,c(`这是为了避免当前页在筛选后没有数据。如果你希望完全自行控制分页，把`));let Z=i(pt);e(pt,Z),a(Z,` `);let mt=m(`code`,pt);e(pt,mt),e(mt,c(`pagination.current`)),e(pt,c(`和`));let ht=m(`code`,pt);e(pt,ht),e(ht,c(`onChange`)),e(pt,c(`一起受控即可。`));let gt=m(`h3`,r);e(r,gt),e(gt,c(`固定列和 pinCols 的关系是什么？`));let Q=m(`p`,r);e(r,Q);let _t=m(`code`,Q);e(Q,_t),e(_t,c(`pinCols`)),e(Q,c(`负责启用 daisyUI 的固定列视觉能力，具体哪一列固定则由列上的`));let $=i(Q);e(Q,$),a($,` `);let vt=m(`code`,Q);e(Q,vt),e(vt,c(`fixedCol`)),e(Q,c(`或`));let yt=m(`code`,Q);e(Q,yt),e(yt,c(`fixed`)),e(Q,c(`控制。静态结构写法中，通常把固定列单元格写成`));let bt=i(Q);e(Q,bt),a(bt,` `);let xt=m(`code`,Q);return e(Q,xt),e(xt,c(`TH`)),e(Q,c(`会更自然。`)),n})}),r,f),r})};export{J as default};