import{$ as e,Q as t,Qt as n,Wt as r,X as i,Xt as a,Y as o,Yt as s,dt as c,et as l,gt as u,ht as d,l as f,lt as p,mt as m,nt as h,o as g,pt as _,s as v,st as y,t as b,tt as x,vt as S,zt as C}from"./vapor-runtime-CXIalONM.js";import{a as w,n as T}from"./vapor-helpers-vapor-CoXKrGmY.js";import{a as E,i as D}from"./persistentSidebarPlayground-DBDp2zjv.js";import{t as O}from"./Code-BIscIyEp.js";import{t as k}from"./tabs-CZWMQq5i.js";import{t as A}from"./dropdown-BPMZiCw-.js";import{r as j}from"./SidebarPlaygroundDesign-CsC_YS7V.js";var M=0,N={emptyText:`No Data`,filterConfirm:`应用`,filterReset:`重置`,triggerAsc:`切换为升序`,triggerDesc:`切换为降序`,cancelSort:`取消排序`},P=(e,t)=>{if(t){if(Array.isArray(t)){let n=e;for(let e of t){if(n==null)return;n=n[e]}return n}return e?.[t]}},F=e=>e===`right`?`text-right`:e===`center`?`text-center`:`text-left`,I=(...e)=>e.filter(Boolean).join(` `).trim()||void 0,L=(...e)=>{let t;return e.forEach(e=>{e&&(t=t?{...t,...e}:{...e})}),t},R=e=>e==null||e===!1?[]:Array.isArray(e)?[...e]:typeof e!=`string`&&typeof e?.[Symbol.iterator]==`function`?Array.from(e):[e],ee=(e,t)=>e.key?e.key:typeof e.dataIndex==`string`?e.dataIndex:Array.isArray(e.dataIndex)&&e.dataIndex.length>0?e.dataIndex.join(`.`):`column-${t.join(`-`)}`,z=e=>(e.children??[]).filter(e=>!e.hidden),te=e=>e.reduce((e,t)=>{if(t.hidden)return e;let n=z(t);return n.length===0?e+1:e+te(n)},0),B=e=>{let t=1;return e.forEach(e=>{if(e.hidden)return;let n=z(e);n.length>0&&(t=Math.max(t,1+B(n)))}),t},ne=(e,t=[])=>{let n=[];return e.forEach((e,r)=>{if(e.hidden)return;let i=[...t,r],a=z(e);if(a.length>0){n.push(...ne(a,i));return}n.push({column:e,indexPath:i,key:ee(e,i)})}),n},re=e=>{let t=e.filter(e=>!e.hidden),n=B(t),r=Array.from({length:n},()=>[]),i=(e,t,a=[])=>{e.forEach((e,o)=>{if(e.hidden)return;let s=[...a,o],c=z(e),l=c.length>0?te(c):1,u=e.colSpan??l;if(u===0)return;let d=e.rowSpan??(c.length>0?1:n-t);r[t].push({column:e,index:o,key:ee(e,s),colSpan:u,rowSpan:d}),c.length>0&&i(c,t+1,s)})};return i(t,0),r},ie=e=>!!(e.fixedCol||e.fixed===!0||e.fixed===`left`||e.fixed===`start`),ae=e=>typeof e==`object`&&!!e,V=e=>{if(ae(e.sorter))return e.sorter.multiple},H=e=>e.filter(e=>!!e?.order).sort((e,t)=>{let n=e.multiple??0,r=t.multiple??0;return n===r?0:r-n}),oe=e=>{let t=H(e.filter(e=>e.column.sortOrder!==void 0).map(e=>({key:e.key,order:e.column.sortOrder,multiple:V(e.column)})));return t.length>0?t:H(e.filter(e=>!!e.column.defaultSortOrder).map(e=>({key:e.key,order:e.column.defaultSortOrder,multiple:V(e.column)})))},se=e=>{let t={};return e.forEach(({column:e,key:n})=>{if(e.filteredValue!==void 0){t[n]=R(e.filteredValue);return}e.defaultFilteredValue!==void 0&&(t[n]=R(e.defaultFilteredValue))}),t},ce=(e,t)=>e<=1?1:e>=t?t:e,le=e=>typeof e==`number`?`${e}px`:e,ue=e=>{switch(e){case`small`:return`table-sm`;case`middle`:return`table-md`;case`large`:return`table-lg`;case`xs`:case`sm`:case`md`:case`lg`:case`xl`:return`table-${e}`;default:return}},de=e=>({...N,...e}),fe=(e,t)=>typeof e==`function`?e({props:t})??{}:e??{},pe=e=>e?e===!0?!0:e.showTitle!==!1:!1,me=e=>{switch(e){case`topLeft`:return`topStart`;case`topCenter`:return`topCenter`;case`topRight`:return`topEnd`;case`bottomLeft`:return`bottomStart`;case`bottomCenter`:return`bottomCenter`;case`bottomRight`:return`bottomEnd`;default:return`none`}},he=e=>e==null||e===!1?[]:(e.placement?.length?e.placement:e.position?.length?e.position.map(me):[`bottomEnd`]).filter((e,t,n)=>e===`none`?n.length===1:n.indexOf(e)===t),ge=e=>{switch(e){case`topStart`:case`bottomStart`:return`justify-start`;case`topCenter`:case`bottomCenter`:return`justify-center`;default:return`justify-end`}},_e=(e,t)=>{let n=e?.[t];return Array.isArray(n)?n:[]},ve=({render:e,data:t})=>typeof e==`function`?e(t):null,ye=({render:e,record:t,index:n,indent:r,expanded:i})=>typeof e==`function`?e(t,n,r,i):null,be=e=>{let t=typeof e;return t===`string`||t===`number`},U=Object.assign(C=>{let O=w(`useSetup:0:0`,()=>s(()=>{let{size:e,zebra:t,pinRows:n,pinCols:r,bordered:i,className:a,classNames:o,styles:s,children:c,dataSource:l,columns:u,rowKey:d=`key`,showHeader:f=!0,onRow:p,onHeaderRow:m,onChange:h,rowSelection:g,pagination:_,expandable:v,rowClassName:y,summary:b,emptyText:x,locale:T,title:E,footer:D,loading:O,rowHoverable:k=!1,rowHoverClass:A,tableLayout:j,sortDirections:M,showSorterTooltip:N,scroll:P,sticky:F,height:I,onScroll:L}=C,R=de(T),ee=w(`computed:1:0`,()=>S(()=>fe(o,C))),z=ee,te=w(`computed:1:1`,()=>S(()=>fe(s,C))),B=typeof O==`object`?{spinning:O.spinning!==!1,tip:O.tip}:{spinning:!!O,tip:void 0},ne=v?.childrenColumnName??`children`,re=v?.indentSize??15,ie=(e,t)=>(typeof d==`function`?d(e):e?.[d])??t,ae=(e,t=[])=>e.flatMap((e,n)=>{let r=[...t,n],i=ie(e,`row-${r.join(`-`)}`),a=_e(e,ne);return a.length===0?[]:[i,...ae(a,r)]}),V=`table`,H=ue(e);return H&&(V+=` ${H}`),t&&(V+=` table-zebra`),(n||F)&&(V+=` table-pin-rows`),r&&(V+=` table-pin-cols`),i&&(V+=` border-separate border-spacing-0`),z.get().table&&(V+=` ${z.get().table}`),a&&(V+=` ${a}`),{size:e,zebra:t,pinRows:n,pinCols:r,bordered:i,className:a,classNames:o,styles:s,children:c,dataSource:l,columns:u,rowKey:d,showHeader:f,onRow:p,onHeaderRow:m,onChange:h,rowSelection:g,pagination:_,expandable:v,rowClassName:y,summary:b,emptyText:x,locale:T,titleRender:E,footerRender:D,loading:O,rowHoverable:k,rowHoverClass:A,tableLayout:j,sortDirections:M,showSorterTooltip:N,scroll:P,sticky:F,height:I,onScroll:L,localeText:R,semanticClasses:ee,semanticStyles:te,loadingConfig:B,childrenColumnName:ne,indentSize:re,getRecordKey:ie,collectExpandedKeys:ae,sizeClass:H,hasChildren:!(c==null||Array.isArray(c)&&c.length===0),cls:V}})),{size:k,zebra:j,pinRows:N,pinCols:ee,bordered:te,className:B,classNames:me,styles:U,children:W,dataSource:xe,columns:G,rowKey:Se,showHeader:Ce,onRow:we,onHeaderRow:Te,onChange:Ee,rowSelection:K,pagination:De,expandable:q,rowClassName:Oe,summary:ke,emptyText:Ae,locale:je,titleRender:Me,footerRender:Ne,loading:Pe,rowHoverable:Fe,rowHoverClass:Ie,tableLayout:Le,sortDirections:Re,showSorterTooltip:ze,scroll:Be,sticky:Ve,height:He,onScroll:Ue,localeText:We,semanticClasses:J,semanticStyles:Y,loadingConfig:Ge,childrenColumnName:Ke,indentSize:qe,getRecordKey:Je,collectExpandedKeys:Ye,sizeClass:X,hasChildren:Xe}=O,{cls:Ze}=O;if(Xe)return f(e=>{let a=l(`table`,e);n(()=>{p(a,Ze)}),n(()=>{let e=Y.get().table;_(a,e)});let o=t(`rue:slot:anchor`);return i(a,o),n(()=>{let e=W;r(()=>g(e,a,o))}),a});let Qe=Array.isArray(G)?ne(G):[],[$e]=w(`useState:1:2`,()=>a(`rue-table-${M++}`)),[et,tt]=w(`useState:1:3`,()=>a(oe(Qe),{kind:`ref`})),[nt,rt]=w(`useState:1:4`,()=>a(se(Qe),{kind:`ref`})),[it,at]=w(`useState:1:5`,()=>a({},{kind:`ref`})),[ot,st]=w(`useState:1:6`,()=>a({},{kind:`ref`})),[ct,lt]=w(`useState:1:7`,()=>a(null)),[ut,dt]=w(`useState:1:8`,()=>a(0)),[ft,pt]=w(`useState:1:9`,()=>a(K?.defaultSelectedRowKeys?[...K.defaultSelectedRowKeys]:[],{kind:`ref`})),Z=De!=null&&De!==!1?De:void 0,[mt,ht]=w(`useState:1:10`,()=>a(Z?Z.current??Z.defaultCurrent??1:1)),[gt]=w(`useState:1:11`,()=>a(Z?Z.pageSize??Z.defaultPageSize??10:Math.max(xe?.length??0,1))),[Q,_t]=w(`useState:1:12`,()=>a(q?.defaultExpandedRowKeys?[...q.defaultExpandedRowKeys]:q?.defaultExpandAllRows&&Array.isArray(xe)?xe.flatMap((e,t)=>{let n=Je(e,`row-${t}`),r=_e(e,Ke);return q?.expandedRowRender||r.length>0?[n,...Ye(r,[t])]:[]}):[],{kind:`ref`}));if(Array.isArray(G)&&Array.isArray(xe)){let a=re(G),C=ne(G),O=new Map(C.map(e=>[e.key,e])),k=()=>{dt(ut.value+1)},j=C.some(e=>e.column.sortOrder!==void 0),M=H(j?C.filter(e=>e.column.sortOrder!==void 0).map(e=>({key:e.key,order:e.column.sortOrder,multiple:V(e.column)})):et.value),N=new Map(M.map(e=>[e.key,e])),B=C.reduce((e,t)=>{let n=t.column.filteredValue;return n===void 0?(e[t.key]=R(nt.value[t.key]),e):(e[t.key]=R(n),e)},{}),oe=e=>{let t={};return Object.keys(e).forEach(n=>{Array.isArray(e[n])&&e[n].length>0&&(t[n]=[...e[n]])}),t},se=oe(B),ue=e=>typeof e.sorter==`function`?e.sorter:ae(e.sorter)&&typeof e.sorter.compare==`function`?e.sorter.compare:(t,n)=>{let r=P(t,e.dataIndex),i=P(n,e.dataIndex);return r==null&&i==null?0:r==null?-1:i==null||r>i?1:r<i?-1:0},de=(e,t,n)=>{for(let r of H(n)){let n=O.get(r.key);if(!n?.column.sorter)continue;let i=ue(n.column),a=r.order===`ascend`?i(e,t):-i(e,t);if(a!==0)return a}return 0},fe=(e,t)=>C.every(n=>{let r=t[n.key]??[];if(!Array.isArray(r)||r.length===0)return!0;let i=n.column.filterCombine??`or`;if(n.column.onFilter)return i===`and`?r.every(t=>n.column.onFilter(t,e)):r.some(t=>n.column.onFilter(t,e));let a=P(e,n.column.dataIndex);return i===`and`?r.every(e=>e===a):r.includes(a)}),me=(e,t)=>{let n=r=>{let i=r.flatMap(t=>{let r=_e(t,Ke),i=r.length>0?n(r):[];return!fe(t,e)&&i.length===0?[]:r.length>0?[{...t,[Ke]:i}]:[t]});return H(t).length>0&&(i=i.slice().sort((e,n)=>de(e,n,t))),i};return n(xe)},U=q?.expandedRowKeys?[...q.expandedRowKeys]:[...Q.value],W=new Set(U),Se=(e,t=0,n=[],r=!1)=>e.flatMap((e,i)=>{let a=[...n,i],o=Je(e,`row-${a.join(`-`)}`),s=_e(e,Ke),c={key:o,record:e,indent:t,hasTreeChildren:s.length>0};return s.length>0&&(r||W.has(o))?[c,...Se(s,t+1,a,r)]:[c]}),De=Se(xe,0,[],!0),je=De.some(e=>e.hasTreeChildren),Pe=Se(me(B,M)),Ye=Pe.length,X=Z!=null,Xe=X?Math.max(1,Z.pageSize??gt.value):Math.max(Ye,1),Qe=X?Math.max(1,Math.ceil(Ye/Xe)):1,$=X?ce(Z.current??mt.value,Qe):1,vt=X?Pe.slice(($-1)*Xe,$*Xe):Pe,yt=vt.map(e=>e.record),bt=K?.selectedRowKeys?[...K.selectedRowKeys]:[...ft.value],xt=new Set(bt),St=K?.align??`center`,Ct=!!K,wt=!!q?.expandedRowRender,Tt=(wt||je)&&q?.showExpandColumn!==!1,Et=+!!Ct+ +!!Tt,Dt=C.length+Et,Ot=L(Y.get().wrapper,Be?.y===void 0?void 0:{maxHeight:le(Be.y)},He===void 0?void 0:{height:le(He)},Ve&&typeof Ve==`object`&&Ve.offsetScroll!==void 0?{top:le(Ve.offsetScroll)}:void 0),kt=I(Be?.x?`overflow-x-auto`:void 0,Be?.y||He!==void 0?`overflow-y-auto`:void 0,J.get().wrapper),At=L(Y.get().table)??{},jt=C.some(({column:e})=>!!e.ellipsis);Le?At.tableLayout=Le:(jt||Be?.x)&&(At.tableLayout=`fixed`),Be?.x===!0?(At.width=`max-content`,At.minWidth=`100%`):Be?.x!==void 0&&(At.width=le(Be.x),At.minWidth=`100%`),(()=>{let e=globalThis,t=`__rue_table_outside_close_${$e.value}`;if(e[t])return;let n=e=>{let t=e?.target;t&&(t.closest(`[data-rue-table-root="${$e.value}"]`)||(lt(null),k()))};e?.addEventListener&&e.addEventListener(`pointerdown`,n),e[t]=n})();let Mt=()=>{if(!Be?.scrollToFirstRowOnChange)return;let e=document.querySelector(`[data-rue-table-scroll="${$e.value}"]`);e&&(e.scrollTop=0)},Nt=H(M).map(e=>{let t=O.get(e.key);return t?{column:t.column,columnKey:e.key,order:e.order}:null}).filter(Boolean),Pt=(e,t)=>{let n=e.title;return typeof n==`function`?n({sortOrder:N.get(t)?.order??null,filteredValue:B[t]??[],sortColumns:Nt,filters:se}):n},Ft=e=>{let t=H(e).map(e=>{let t=O.get(e.key);return t?{column:t.column,order:e.order,columnKey:e.key,field:t.column.dataIndex,multiple:e.multiple}:null}).filter(Boolean);return t.length===0?{column:null,order:null}:t.length===1?t[0]:t},It=(e,t,n,r,i)=>{if(!Ee)return;let a=Se(me(r,i)),o=X?Math.max(1,Math.ceil(a.length/n)):1,s=X?ce(t,o):1,c=X?a.slice((s-1)*n,s*n).map(e=>e.record):a.map(e=>e.record);Ee(X?{current:s,pageSize:n}:!1,oe(r),Ft(i),{action:e,currentDataSource:c})},Lt=(e,t)=>{let n=O.get(e)?.column;if(!n?.sorter)return;let r=V(n),i=(()=>{if(r!=null){let n=M.filter(t=>{let n=O.get(t.key)?.column;return V(n??{})!=null&&t.key!==e}).map(e=>({...e}));return t&&n.push({key:e,order:t,multiple:r}),H(n)}return t?[{key:e,order:t,multiple:r}]:[]})();j||tt(i),k(),X&&Z.current===void 0&&ht(1),Mt(),It(`sort`,X?1:$,Xe,B,i)},Rt=(e,t,n)=>{let r=R(t),i={...B,[e]:r};C.find(t=>t.key===e)?.column?.filteredValue===void 0&&rt(i),at({...it.value,[e]:r}),k(),X&&Z.current===void 0&&ht(1),n&&lt(null),Mt(),It(`filter`,X?1:$,Xe,i,M)},zt=e=>{let t=ce(e,Qe);X&&Z.current===void 0&&ht(t),k(),X&&Z.onChange&&Z.onChange(t,Xe),Mt(),It(`paginate`,t,Xe,B,M)},Bt=(e=>e.filter(e=>K?.disabled?!1:!(K?.getCheckboxProps?K.getCheckboxProps(e.record):{})?.disabled))(vt).map(e=>e.key),Vt=Bt.length>0&&Bt.every(e=>xt.has(e)),Ht=Bt.some(e=>xt.has(e))&&!Vt,Ut=(e,t,n,r,i)=>{K?.selectedRowKeys===void 0&&pt([...e]),k();let a=De.filter(t=>e.includes(t.key)).map(e=>e.record);n!==void 0&&K?.onSelect&&typeof r==`boolean`&&K.onSelect(n,r,a,i),K?.onChange&&K.onChange([...e],a,t)},Wt=e=>{if(!K||K.type===`radio`)return;let t=new Set(Bt),n=K.selectedRowKeys??ft.value,r=new Set(n);t.forEach(t=>{e?r.add(t):r.delete(t)});let i=Array.from(r);if(Ut(i,{type:`checkbox`}),K.onSelectAll){let t=De.filter(e=>i.includes(e.key)).map(e=>e.record);K.onSelectAll(e,t)}},Gt=(e,t)=>{let n=!!q?.expandedRowRender&&(q?.rowExpandable?q.rowExpandable(e.record):!0),r=e.hasTreeChildren||n;return{key:e.key,enabled:r,expanded:W.has(e.key),hasExpandedRowRender:n,indent:e.indent,rowIndex:t}},Kt=(e,t)=>{let n=Gt(e,t);if(!n.enabled)return;let r=new Set(U);n.expanded?r.delete(n.key):r.add(n.key);let i=Array.from(r);q?.expandedRowKeys===void 0&&_t(i),k(),q?.onExpand&&q.onExpand(!n.expanded,e.record),q?.onExpandedRowsChange&&q.onExpandedRowsChange(i)},qt=e=>[...e.sortDirections??Re??[`ascend`,`descend`],null],Jt=(e,t)=>{let n=qt(t),r=N.get(e)?.order??null;return n[(n.findIndex(e=>e===r)+1+n.length)%n.length]},Yt=(e,t)=>{let n=e.filterDropdownProps?.open??e.filterDropdownOpen;return n===void 0?ct.value===t:!!n},Xt=(e,t)=>(t?Yt(t,e):ct.value===e)||it.value[e]!==void 0?R(it.value[e]??B[e]):R(B[e]),Zt=(e,t)=>{at({...it.value,[e]:R(t)}),k()},Qt=(e,t,n)=>{let r=Yt(t,e);n&&(it.value={...it.value,[e]:R(B[e])}),!n&&t.filterDropdownProps?.open===void 0&&t.filterDropdownOpen===void 0&&lt(n?e:ct.value===e?null:ct.value),!n&&r!==n&&k(),t.filterDropdownProps?.onOpenChange?.(n),t.onFilterDropdownOpenChange?.(n)},$t=(e,t)=>{Qt(e,t,!1)},en=(e,t,n)=>{Rt(e,Xt(e,t),n?.closeDropdown??!0)},tn=(e,t,n)=>{let r=t.filterResetToDefaultFilteredValue?R(t.defaultFilteredValue):[];if(Zt(e,r),n?.confirm){Rt(e,r,n.closeDropdown??!0);return}n?.closeDropdown&&$t(e,t)},nn=(e,t)=>typeof e.filterIcon==`function`?e.filterIcon(t):e.filterIcon===void 0?`☰`:e.filterIcon,rn=(e,t)=>typeof e.sortIcon==`function`?e.sortIcon({sortOrder:t}):f(e=>{let r=l(`span`,e);n(()=>{p(r,I(`inline-flex flex-col leading-none`,t?`text-base-content`:`opacity-60`))});let a=l(`span`,r);i(r,a),n(()=>{p(a,I(t===`ascend`?`text-base-content`:`opacity-40`))}),i(a,x(`▲`));let o=l(`span`,r);return i(r,o),n(()=>{p(o,I(`-mt-0.5`,t===`descend`?`text-base-content`:`opacity-40`))}),i(o,x(`▼`)),r}),an=(e,t,n)=>t?e.map(e=>{let r=typeof n.filterSearch==`function`?n.filterSearch(t,e):String(e.text).toLowerCase().includes(t.toLowerCase()),i=Array.isArray(e.children)?an(e.children,t,n):void 0;return r||i&&i.length>0?i&&i.length>0?{...e,children:i}:e:null}).filter(Boolean):e,on=(e,t,n,r,i=0)=>e.flatMap(e=>{let a=r.includes(e.value),o=Array.isArray(e.children)&&e.children.length>0?on(e.children,t,n,r,i+1):[],s=E(`label`,{className:`flex items-center gap-2 text-sm`,style:i>0?{paddingLeft:`${i*12}px`}:void 0,children:[D(`input`,{type:t.filterMultiple===!1?`radio`:`checkbox`,name:`rue-table-filter-${$e.value}-${n}`,className:t.filterMultiple===!1?`radio radio-xs`:`checkbox checkbox-xs`,checked:a,onChange:i=>{let a=i.target,o;if(t.filterMultiple===!1)o=a.checked?[e.value]:[];else{let t=new Set(r);a.checked?t.add(e.value):t.delete(e.value),o=Array.from(t)}Zt(n,o),t.filterOnClose===!1&&Rt(n,o,!1)}}),D(`span`,{children:e.text})]},`${String(e.value)}-${i}`);return o.length>0?[s,...o]:[s]}),sn=(a,s,c,u,d)=>typeof s.filterDropdown==`function`?s.filterDropdown({setSelectedKeys:e=>Zt(a,e),selectedKeys:u,confirm:e=>en(a,s,e),clearFilters:e=>tn(a,s,e),filters:s.filters,close:()=>$t(a,s),visible:c}):s.filterDropdown===void 0?f(c=>{let h=l(`div`,c);p(h,`w-56 rounded-box border border-base-content/10 bg-base-100 p-3 shadow-xl`);let _=t(`rue:slot:anchor`);i(h,_),n(()=>{let t=s.filterSearch?f(()=>{let t=e(),r=l(`input`,t);return i(t,r),y(r,`type`,`text`),p(r,`input input-bordered input-xs mb-2 w-full`),y(r,`placeholder`,`搜索筛选项`),n(()=>{m(r,ot.value[a]??``)}),o(r,`input`,e=>{st({...ot.value,[a]:e.target.value}),k()}),t}):``;r(()=>g(t,h,_))});let v=l(`div`,h);i(h,v),p(v,`max-h-56 space-y-2 overflow-auto`);let b=t(`rue:slot:anchor`);i(v,b),n(()=>{let e=on(d,s,a,u);r(()=>g(e,v,b))}),i(v,x(` `));let S=t(`rue:slot:anchor`);i(v,S),n(()=>{let t=d.length===0?f(()=>{let t=e(),n=l(`div`,t);return i(t,n),p(n,`text-sm opacity-60`),i(n,x(`暂无匹配项`)),t}):``;r(()=>g(t,v,S))});let C=t(`rue:slot:anchor`);return i(h,C),n(()=>{let c=s.filterOnClose===!1?``:f(()=>{let c=e(),u=l(`div`,c);i(c,u),p(u,`mt-3 flex justify-end gap-2`);let d=l(`button`,u);i(u,d),p(d,`btn btn-ghost btn-xs`),o(d,`click`,()=>tn(a,s,{confirm:!0}));let f=t(`rue:slot:anchor`);i(d,f),n(()=>{let e=We.filterReset;r(()=>g(e,d,f))});let m=l(`button`,u);i(u,m),p(m,`btn btn-primary btn-xs`),o(m,`click`,()=>en(a,s));let h=t(`rue:slot:anchor`);return i(m,h),n(()=>{let e=We.filterConfirm;r(()=>g(e,m,h))}),c});r(()=>g(c,h,C))}),h}):s.filterDropdown,cn=(e,t)=>{let n=e.showSorterTooltip??ze;if(n===!1)return;if(typeof n==`object`&&n?.title!==void 0)return n.title;let r=Jt(t,e);return r===`ascend`?We.triggerAsc:r===`descend`?We.triggerDesc:We.cancelSort},ln=(a,c)=>{let{titleNode:u,filtered:d,sortOrder:m,draftValues:h,filterSearchValue:_,visible:v,menuItems:C,sorterTooltipTitle:T,_dropdownOpen:E,_dropdownOnOpenChange:D,_dropdownChildren:O,_dropdownContent:k,_dropdownOverlay:j,_dropdownItems:M,_dropdownMenu:P,_dropdownPopupRender:F,dropdownProps:L}=w(`useSetup:0:0:dup1`,()=>s(()=>{let e=w(`computed:1:13`,()=>S(()=>Pt(c,a))),t=w(`computed:1:14`,()=>S(()=>c.filtered??(B[a]??[]).length>0)),n=N.get(a)?.order??null,r=w(`computed:1:15`,()=>S(()=>Xt(a,c))),i=ot.value[a]??``,o=w(`computed:1:16`,()=>S(()=>Yt(c,a))),s=w(`computed:1:17`,()=>S(()=>an(c.filters??[],i,c))),l=w(`computed:1:18`,()=>S(()=>cn(c,a))),{open:u,onOpenChange:d,children:f,content:p,overlay:m,items:h,menu:g,popupRender:_,...v}=c.filterDropdownProps??{};return{titleNode:e,filtered:t,sortOrder:n,draftValues:r,filterSearchValue:i,visible:o,menuItems:s,sorterTooltipTitle:l,_dropdownOpen:u,_dropdownOnOpenChange:d,_dropdownChildren:f,_dropdownContent:p,_dropdownOverlay:m,_dropdownItems:h,_dropdownMenu:g,_dropdownPopupRender:_,dropdownProps:v}}));return f(s=>{let _=l(`div`,s);p(_,`relative flex items-center gap-2`);let S=l(`span`,_);i(_,S);let w=t(`rue:slot:anchor`);i(S,w),n(()=>{let e=u.get();r(()=>g(e,S,w))});let E=t(`rue:slot:anchor`);i(_,E),n(()=>{let s=c.sorter?f(()=>{let s=e(),u=l(`button`,s);i(s,u),y(u,`type`,`button`),n(()=>{y(u,`aria-label`,String(`sort-${a}`))}),n(()=>{y(u,`title`,String(T.get()))}),p(u,`btn btn-ghost btn-xs h-auto min-h-0 px-1 py-0.5`),o(u,`click`,e=>{e.stopPropagation(),Lt(a,Jt(a,c))});let d=t(`rue:slot:anchor`);return i(u,d),n(()=>{let e=rn(c,m);r(()=>g(e,u,d))}),s}):``;r(()=>g(s,_,E))}),i(_,x(` `));let D=t(`rue:slot:anchor`);return i(_,D),n(()=>{let o=Array.isArray(c.filters)&&c.filters.length>0||c.filterDropdown!==void 0?f(()=>{let o=e(),s=t(`rue:component:anchor`);i(o,s);let l=f(()=>{let o=e(),s=t(`rue:component:anchor`);i(o,s),n(()=>{let e=b(A.Trigger,{as:`button`,type:`button`,"aria-label":`filter-${a}`,className:I(`btn btn-ghost btn-xs h-auto min-h-0 px-1 py-0.5 select-none`,d.get()?`text-base-content`:`opacity-40`),children:nn(c,d.get())});r(()=>g(e,o,s))});let l=t(`rue:component:anchor`);return i(o,l),g(b(A.Content,{className:`dropdown-content z-50 mt-2 p-0`,onClick:e=>e.stopPropagation(),children:sn(a,c,v.get(),h.get(),C.get())}),o,l),o});return n(()=>{let e=b(A,{trigger:`click`,open:v.get(),closeOnClick:!1,align:`start`,...L,onOpenChange:e=>Qt(a,c,e),children:l});r(()=>g(e,o,s))}),o}):``;r(()=>g(o,_,D))}),_})},un=(e,a)=>{let{cellProps:o,children:c,isLeaf:d,leaf:m,key:h,colSpan:v,rowSpan:b}=w(`useSetup:0:0:dup2`,()=>s(()=>{let t=w(`computed:1:19`,()=>S(()=>e.column.onHeaderCell&&e.column.onHeaderCell(e.column,e.index)||{})),n=t,r=w(`computed:1:20`,()=>S(()=>z(e.column))),i=r,a=w(`computed:1:21`,()=>S(()=>i.get().length===0)),o=a,s=w(`computed:1:22`,()=>S(()=>o.get()?O.get(e.key)??null:null)),c=s;return{cellProps:t,children:r,isLeaf:a,leaf:s,key:w(`computed:1:23`,()=>S(()=>c.get()?.key??e.key)),colSpan:w(`computed:1:24`,()=>S(()=>n.get().colSpan??e.colSpan)),rowSpan:w(`computed:1:25`,()=>S(()=>n.get().rowSpan??e.rowSpan))}}));if(v.get()===0||b.get()===0)return null;let{className:x,style:C,...T}=o.get(),E=I(J.get().headerCell,F(e.column.align),e.column.className,x),D=L(Y.get().headerCell,e.column.width||e.column.minWidth?{...e.column.width?{width:e.column.width}:{},...e.column.minWidth?{minWidth:e.column.minWidth}:{}}:void 0,C),k=m.get()?ln(h.get(),e.column):Pt(e.column,e.key);return f(o=>{let s=l(`th`,o);n(()=>{y(s,`key`,String(`${a}-${e.key}`))}),n(()=>{y(s,`colSpan`,String(v.get()))}),n(()=>{y(s,`rowSpan`,String(b.get()))}),n(()=>{p(s,E)}),n(()=>{_(s,D)}),n(()=>{u(s,T)});let c=t(`rue:slot:anchor`);return i(s,c),n(()=>{let e=k;r(()=>g(e,s,c))}),s})},dn=(a,o)=>{if(!K)return null;let s=K.getCheckboxProps?{...K.getCheckboxProps(a.record)}:{};K.disabled&&(s.disabled=!0);let c=xt.has(a.key),l=K.type===`radio`?`radio`:`checkbox`,u=D(`label`,{onClick:e=>e.stopPropagation(),children:D(`input`,{type:K.type===`radio`?`radio`:`checkbox`,className:l,checked:c,onChange:e=>{let t=e.target;if(K.type===`radio`){Ut([a.key],{type:`radio`},a.record,!0,e);return}let n=K.selectedRowKeys??ft.value,r=new Set(n);t.checked?r.add(a.key):r.delete(a.key),Ut(Array.from(r),{type:`checkbox`},a.record,t.checked,e)},...s})}),d=K.renderCell?K.renderCell(c,a.record,o,u):u,p=ee&&K.fixed?`th`:`td`;return f(a=>{let o=e(),s=t(`rue:component:anchor`);return i(o,s),n(()=>{let e=b(p,{className:I(J.get().cell,F(St)),style:L(Y.get().cell,K.columnWidth?{width:K.columnWidth}:void 0),children:d});r(()=>g(e,o,s))}),o})},fn=(e,a,s)=>s.enabled?q?.expandIcon?q.expandIcon({expanded:s.expanded,expandable:s.enabled,record:e.record,onExpand:(t,n)=>{n?.stopPropagation?.(),Kt(e,a)}}):f(c=>{let u=l(`button`,c);p(u,`btn btn-ghost btn-xs`),o(u,`click`,t=>{t.stopPropagation(),Kt(e,a)});let d=t(`rue:slot:anchor`);return i(u,d),n(()=>{let e=s.expanded?`-`:`+`;r(()=>g(e,u,d))}),u}):null,pn={total:Ye,page:$,pageSize:Xe},mn=yt.slice();mn.total=Ye;let hn=typeof ke==`function`?ke(mn,pn):null,gn=Me?D(ve,{render:Me,data:yt}):null,_n=Ne?D(ve,{render:Ne,data:yt}):null,vn=he(Z),yn=X&&!(Z?.hideOnSinglePage&&Qe<=1)&&!(vn.length===1&&vn[0]===`none`),bn=r=>f(a=>{let s=l(`div`,a);n(()=>{y(s,`key`,String(`pager-${r}`))}),n(()=>{y(s,`data-rue-table-pager`,String(r))}),n(()=>{p(s,I(`flex items-center gap-2 p-2`,ge(r),J.get().pager))}),n(()=>{let e=Y.get().pager;_(s,e)});let u=l(`button`,s);i(s,u),p(u,`btn btn-ghost btn-xs`),n(()=>{c(u,$<=1)}),o(u,`click`,()=>zt($-1)),i(u,x(`Prev`));let m=t(`rue:list:start`),v=t(`rue:list:end`);i(s,m),i(s,v);let b=new Map;n(()=>{b=T({items:Array.from({length:Qe})||[],getKey:(e,t)=>`page-${r}-${t+1}`,elements:b,parent:m.parentNode,before:v,singleRoot:!0,start:m,renderItem:(t,a,s,c,u)=>{g(f(()=>{let t=e(),a=l(`button`,t);i(t,a),n(()=>{y(a,`key`,String(`page-${r}-${u+1}`))}),n(()=>{p(a,`btn btn-ghost btn-xs${$===u+1?` btn-active`:``}`)}),o(a,`click`,()=>zt(u+1));let s=h(a);return i(a,s),n(()=>{d(s,u+1)}),t}),a,s)}})});let S=l(`button`,s);return i(s,S),p(S,`btn btn-ghost btn-xs`),n(()=>{c(S,$>=Qe)}),o(S,`click`,()=>zt($+1)),i(S,x(`Next`)),s}),xn=K?.getTitleCheckboxProps?.()??{},Sn=K?.type===`radio`||K?.hideSelectAll?null:D(`label`,{children:D(`input`,{type:`checkbox`,className:`checkbox`,checked:Vt,"aria-checked":Ht?`mixed`:Vt?`true`:`false`,disabled:K?.disabled||Bt.length===0,onChange:e=>Wt(e.target.checked),...xn})}),Cn=K?.columnTitle===void 0?Sn:typeof K.columnTitle==`function`?K.columnTitle(Sn):K.columnTitle,wn=e=>{Ue&&Ue(e)};return f(s=>{let c=l(`div`,s);n(()=>{y(c,`data-rue-table-root`,String($e.value))}),n(()=>{y(c,`data-rue-table-scroll`,String($e.value))}),n(()=>{y(c,`data-rue-table-version`,String(ut.value))}),n(()=>{p(c,I(`relative`,te?`rounded-box border border-base-300 bg-base-100`:void 0,J.get().root,kt))}),n(()=>{_(c,L(Y.get().root,Ot))}),o(c,`scroll`,wn);let m=t(`rue:slot:anchor`);i(c,m),n(()=>{let e=yn?vn.filter(e=>e.startsWith(`top`)).map(bn):``;r(()=>g(e,c,m))}),i(c,x(` `));let S=t(`rue:slot:anchor`);i(c,S),n(()=>{let a=gn?f(()=>{let a=e(),o=l(`div`,a);i(a,o),n(()=>{p(o,I(`p-2`,J.get().title))}),n(()=>{let e=Y.get().title;_(o,e)});let s=t(`rue:slot:anchor`);return i(o,s),n(()=>{let e=gn;r(()=>g(e,o,s))}),a}):``;r(()=>g(a,c,S))});let w=l(`table`,c);i(c,w),n(()=>{p(w,Ze)}),n(()=>{_(w,At)}),n(()=>{y(w,`data-rue-table-id`,String($e.value))});let O=t(`rue:slot:anchor`);i(w,O),n(()=>{let o=Ce?f(()=>{let o=e(),s=l(`thead`,o);i(o,s),n(()=>{p(s,J.get().thead)}),n(()=>{let e=Y.get().thead;_(s,e)});let c=t(`rue:list:start`),m=t(`rue:list:end`);i(s,c),i(s,m);let b=new Map;return n(()=>{b=T({items:a||[],getKey:(e,t)=>`header-row-${t}`,elements:b,parent:s,before:m,singleRoot:!0,start:c,renderItem:(o,s,c,m,b)=>{g(f(()=>{let s=e(),{className:c,style:m,...S}=Te&&Te(o.map(e=>e.column),b)||{},C=l(`tr`,s);i(s,C),n(()=>{y(C,`key`,String(`header-row-${b}`))}),n(()=>{p(C,I(J.get().headerRow,c))}),n(()=>{_(C,L(Y.get().headerRow,m))}),n(()=>{u(C,S)});let w=t(`rue:slot:anchor`);i(C,w),n(()=>{let t=b===0&&Tt?f(()=>{let t=e(),r=l(`th`,t);i(t,r),n(()=>{y(r,`rowSpan`,String(a.length))}),n(()=>{p(r,I(J.get().headerCell,F(`center`)))}),n(()=>{_(r,L(Y.get().headerCell,q?.columnWidth?{width:q.columnWidth}:void 0))});let o=h(r);return i(r,o),n(()=>{d(o,q?.columnTitle)}),t}):``;r(()=>g(t,C,w))}),i(C,x(` `));let E=t(`rue:slot:anchor`);i(C,E),n(()=>{let o=b===0&&Ct?f(()=>{let o=e(),s=l(`th`,o);i(o,s),n(()=>{y(s,`rowSpan`,String(a.length))}),n(()=>{p(s,I(J.get().headerCell,F(St)))}),n(()=>{_(s,L(Y.get().headerCell,K?.columnWidth?{width:K.columnWidth}:void 0))});let c=t(`rue:slot:anchor`);return i(s,c),n(()=>{let e=Cn;r(()=>g(e,s,c))}),o}):``;r(()=>g(o,C,E))}),i(C,x(` `));let D=t(`rue:list:start`),O=t(`rue:list:end`);i(C,D),i(C,O);let k=new Map;return n(()=>{k=T({items:o||[],getKey:(e,t)=>t,elements:k,parent:C,before:O,start:D,renderItem:(e,t,n,r,i)=>{v(un(e,b),t,n,r)}})}),s}),s,c)}})}),o}):``;r(()=>g(o,w,O))});let k=l(`tbody`,w);i(w,k),n(()=>{y(k,`key`,String(`body-${ut.value}`))}),n(()=>{p(k,J.get().tbody)}),n(()=>{let e=Y.get().tbody;_(k,e)});let A=t(`rue:list:start`),j=t(`rue:list:end`);i(k,A),i(k,j);let M=new Map;n(()=>{M=T({items:vt||[],getKey:(e,t)=>`row-group-${String(e.key)}`,elements:M,parent:k,before:j,start:A,renderItem:(a,s,c,d,m)=>{let h=Gt(a,m),{className:S,style:w,onClick:O,...k}=we&&we(a.record,m)||{},A=typeof Oe==`function`?Oe(a.record,m):``,j=Fe?Ie||`hover:bg-base-200`:``,M=e=>{O&&O(e),!(!q?.expandRowByClick||!h.enabled)&&((e?.target)?.closest(`button, input, a, label`)||Kt(a,m))},N=wt&&h.hasExpandedRowRender&&h.expanded,R=N?typeof q?.expandedRowClassName==`function`?q.expandedRowClassName(a.record,m,a.indent):q?.expandedRowClassName:void 0;v(f(()=>{let s=e(),c=l(`tr`,s);i(s,c),n(()=>{y(c,`key`,String(`row-${String(a.key)}`))}),n(()=>{u(c,k)}),o(c,`click`,M),n(()=>{p(c,I(J.get().bodyRow,S,A,j))}),n(()=>{_(c,L(Y.get().bodyRow,w))});let d=t(`rue:slot:anchor`);i(c,d),n(()=>{let o=Tt?f(()=>{let o=e(),s=l(`td`,o);i(o,s),n(()=>{p(s,I(J.get().cell,F(`center`)))}),n(()=>{_(s,L(Y.get().cell,q?.columnWidth?{width:q.columnWidth}:void 0,a.indent>0?{paddingLeft:`${a.indent*qe}px`}:void 0))});let c=t(`rue:slot:anchor`);return i(s,c),n(()=>{let e=fn(a,m,h);r(()=>g(e,s,c))}),o}):``;r(()=>g(o,c,d))}),i(c,x(` `));let O=t(`rue:slot:anchor`);i(c,O),n(()=>{let e=Ct?dn(a,m):``;r(()=>g(e,c,O))}),i(c,x(` `));let z=t(`rue:list:start`),te=t(`rue:list:end`);i(c,z),i(c,te);let B=new Map;n(()=>{B=T({items:C||[],getKey:(e,t)=>`cell-${String(a.key)}-${e.key}-${t}`,elements:B,parent:c,before:te,start:z,renderItem:(e,t,n,r,i)=>{v((()=>{let t=P(a.record,e.column.dataIndex),n=e.column.render?e.column.render(t,a.record,m):t,r=e.column.onCell&&e.column.onCell(a.record,m)||{},{className:o,style:s,...c}=r,l=r.colSpan??1,u=r.rowSpan??1;if(l===0||u===0)return null;let d=!Tt&&i===0,f=e.column.rowScope||ee&&ie(e.column)?`th`:`td`,p=I(J.get().cell,F(e.column.align),e.column.className,e.column.ellipsis?`truncate`:void 0,o),g=L(Y.get().cell,e.column.width||e.column.minWidth?{...e.column.width?{width:e.column.width}:{},...e.column.minWidth?{minWidth:e.column.minWidth}:{}}:void 0,d&&a.indent>0?{paddingLeft:`${a.indent*qe}px`}:void 0,s),_=e.column.ellipsis&&pe(e.column.ellipsis)&&be(n)?String(n):void 0,v=d?E(`div`,{className:`flex items-center gap-2`,children:[fn(a,m,h),D(`span`,{className:e.column.ellipsis?`truncate`:void 0,children:n})]}):n;return D(f,{className:p,style:g,title:_,colSpan:l,rowSpan:u,scope:e.column.rowScope,"data-rue-table-indent":d&&a.indent>0?String(a.indent):void 0,...c,children:v},`cell-${String(a.key)}-${e.key}-${i}`)})(),t,n,r)}})});let ne=t(`rue:slot:anchor`);return i(s,ne),n(()=>{let o=N?f(()=>{let o=e(),s=l(`tr`,o);i(o,s),n(()=>{y(s,`key`,String(`expanded-${String(a.key)}`))}),n(()=>{p(s,R)});let c=l(`td`,s);i(s,c),n(()=>{y(c,`colSpan`,String(Dt))});let u=t(`rue:component:anchor`);return i(c,u),n(()=>{let e=b(ye,{render:q?.expandedRowRender,record:a.record,index:m,indent:a.indent,expanded:!0});r(()=>g(e,c,u))}),o}):``;r(()=>g(o,s,ne))}),s}),s,c,d)}})}),i(k,x(` `));let N=t(`rue:slot:anchor`);i(k,N),n(()=>{let a=vt.length===0?f(()=>{let a=e(),o=l(`tr`,a);i(a,o);let s=l(`td`,o);i(o,s),n(()=>{y(s,`colSpan`,String(Dt))}),n(()=>{p(s,I(J.get().empty,F(`center`)))}),n(()=>{let e=Y.get().empty;_(s,e)});let c=t(`rue:slot:anchor`);return i(s,c),n(()=>{let e=Ae===void 0?We.emptyText:Ae;r(()=>g(e,s,c))}),a}):``;r(()=>g(a,k,N))});let R=t(`rue:slot:anchor`);i(w,R),n(()=>{let a=hn||yn&&vn.some(e=>e.startsWith(`bottom`))?f(()=>{let a=e(),o=l(`tfoot`,a);i(a,o),n(()=>{p(o,J.get().tfoot)}),n(()=>{let e=Y.get().tfoot;_(o,e)});let s=t(`rue:slot:anchor`);i(o,s),n(()=>{let a=hn?f(()=>{let a=e(),o=l(`tr`,a);i(a,o),n(()=>{p(o,J.get().summary)}),n(()=>{let e=Y.get().summary;_(o,e)});let s=l(`td`,o);i(o,s),n(()=>{y(s,`colSpan`,String(Dt))});let c=t(`rue:slot:anchor`);return i(s,c),n(()=>{let e=hn;r(()=>g(e,s,c))}),a}):``;r(()=>g(a,o,s))}),i(o,x(` `));let c=t(`rue:slot:anchor`);return i(o,c),n(()=>{let a=yn?f(()=>{let a=e(),o=t(`rue:list:start`),s=t(`rue:list:end`);i(a,o),i(a,s);let c=new Map;return n(()=>{c=T({items:vn.filter(e=>e.startsWith(`bottom`))||[],getKey:(e,t)=>`pager-row-${e}`,elements:c,parent:o.parentNode,before:s,singleRoot:!0,trackIndex:!1,start:o,renderItem:(a,o,s,c,u)=>{g(f(()=>{let o=e(),s=l(`tr`,o);i(o,s),n(()=>{y(s,`key`,String(`pager-row-${a}`))});let c=l(`td`,s);i(s,c),n(()=>{y(c,`colSpan`,String(Dt))});let u=t(`rue:slot:anchor`);return i(c,u),n(()=>{let e=bn(a);r(()=>g(e,c,u))}),o}),o,s)}})}),a}):``;r(()=>g(a,o,c))}),a}):``;r(()=>g(a,w,R))});let z=t(`rue:slot:anchor`);i(c,z),n(()=>{let a=_n?f(()=>{let a=e(),o=l(`div`,a);i(a,o),n(()=>{p(o,I(`p-2`,J.get().footer))}),n(()=>{let e=Y.get().footer;_(o,e)});let s=t(`rue:slot:anchor`);return i(o,s),n(()=>{let e=_n;r(()=>g(e,o,s))}),a}):``;r(()=>g(a,c,z))}),i(c,x(` `));let B=t(`rue:slot:anchor`);return i(c,B),n(()=>{let a=Ge.spinning?f(()=>{let a=e(),o=l(`div`,a);i(a,o),n(()=>{p(o,I(`absolute inset-0 z-20 flex flex-col items-center justify-center gap-2 rounded-box bg-base-100/70`,J.get().loading))}),n(()=>{let e=Y.get().loading;_(o,e)});let s=l(`span`,o);i(o,s),p(s,`loading loading-spinner loading-md`);let c=t(`rue:slot:anchor`);return i(o,c),n(()=>{let a=Ge.tip?f(()=>{let a=e(),o=l(`div`,a);i(a,o),p(o,`text-sm opacity-70`);let s=t(`rue:slot:anchor`);return i(o,s),n(()=>{let e=Ge.tip;r(()=>g(e,o,s))}),a}):``;r(()=>g(a,o,c))}),a}):``;r(()=>g(a,c,B))}),c})}return f(e=>{let t=l(`table`,e);return n(()=>{p(t,Ze)}),n(()=>{let e=Y.get().table;_(t,e)}),t})},{Head:e=>f(a=>{let o=l(`thead`,a);n(()=>{p(o,e.className||void 0)});let s=t(`rue:children:anchor`);return i(o,s),n(()=>{let t=e.children;r(()=>g(t,o,s))}),o}),Body:e=>f(a=>{let o=l(`tbody`,a);n(()=>{p(o,e.className||void 0)});let s=t(`rue:children:anchor`);return i(o,s),n(()=>{let t=e.children;r(()=>g(t,o,s))}),o}),Foot:e=>f(a=>{let o=l(`tfoot`,a);n(()=>{p(o,e.className||void 0)});let s=t(`rue:children:anchor`);return i(o,s),n(()=>{let t=e.children;r(()=>g(t,o,s))}),o}),TR:e=>f(a=>{let o=l(`tr`,a);n(()=>{p(o,e.className||void 0)});let s=t(`rue:children:anchor`);return i(o,s),n(()=>{let t=e.children;r(()=>g(t,o,s))}),o}),TH:e=>f(a=>{let o=l(`th`,a);n(()=>{p(o,e.className||void 0)});let s=t(`rue:children:anchor`);return i(o,s),n(()=>{let t=e.children;r(()=>g(t,o,s))}),o}),TD:e=>f(a=>{let o=l(`td`,a);n(()=>{p(o,e.className||void 0)});let s=t(`rue:children:anchor`);return i(o,s),n(()=>{let t=e.children;r(()=>g(t,o,s))}),o})}),W=a=>f(o=>{let s=l(`div`,o);p(s,`component-preview not-prose text-base-content my-6 lg:my-12`);let c=l(`div`,s);i(s,c),p(c,`flex flex-wrap items-start justify-between gap-3`);let u=l(`div`,c);i(c,u);let d=l(`h2`,u);i(u,d),p(d,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(d,x(`# `));let m=t(`rue:slot:anchor`);i(d,m),n(()=>{let e=a.title;r(()=>g(e,d,m))});let h=t(`rue:slot:anchor`);i(u,h),n(()=>{let o=a.summary?f(()=>{let o=e(),s=l(`p`,o);i(o,s),p(s,`m-0 text-sm opacity-70`);let c=t(`rue:slot:anchor`);return i(s,c),n(()=>{let e=a.summary;r(()=>g(e,s,c))}),o}):``;r(()=>g(o,u,h))});let _=t(`rue:component:anchor`);i(s,_),n(()=>{let e=b(k,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:a.tab.value,onChange:e=>a.tab.value=e,className:`mb-3 mt-4`});r(()=>g(e,s,_))});let v=t(`rue:slot:anchor`);return i(s,v),n(()=>{let o=a.tab.value===`preview`?a.preview():f(()=>{let o=e(),s=t(`rue:component:anchor`);return i(o,s),n(()=>{let e=b(O,{className:`mt-2`,lang:`tsx`,code:a.code});r(()=>g(e,o,s))}),o});r(()=>g(o,s,v))}),s}),xe=a=>f(o=>{let s=l(`div`,o);p(s,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let c=l(`table`,s);i(s,c),p(c,`table table-zebra`);let u=l(`thead`,c);i(c,u);let d=l(`tr`,u);i(u,d);let m=l(`th`,d);i(d,m),i(m,x(`属性`));let h=l(`th`,d);i(d,h),i(h,x(`说明`));let _=l(`th`,d);i(d,_),i(_,x(`类型`));let v=l(`th`,d);i(d,v),i(v,x(`默认值`));let b=l(`tbody`,c);i(c,b);let S=t(`rue:list:start`),C=t(`rue:list:end`);i(b,S),i(b,C);let w=new Map;return n(()=>{w=T({items:a.rows||[],getKey:(e,t)=>e.prop,elements:w,parent:b,before:C,singleRoot:!0,trackIndex:!1,start:S,renderItem:(a,o,s,c,u)=>{g(f(()=>{let o=e(),s=l(`tr`,o);i(o,s),n(()=>{y(s,`key`,String(a.prop))});let c=l(`td`,s);i(s,c);let u=l(`code`,c);i(c,u);let d=t(`rue:slot:anchor`);i(u,d),n(()=>{let e=a.prop;r(()=>g(e,u,d))});let f=l(`td`,s);i(s,f);let p=t(`rue:slot:anchor`);i(f,p),n(()=>{let e=a.description;r(()=>g(e,f,p))});let m=l(`td`,s);i(s,m);let h=l(`code`,m);i(m,h);let _=t(`rue:slot:anchor`);i(h,_),n(()=>{let e=a.type;r(()=>g(e,h,_))});let v=l(`td`,s);i(s,v);let b=l(`code`,v);i(v,b);let x=t(`rue:slot:anchor`);return i(b,x),n(()=>{let e=a.defaultValue;r(()=>g(e,b,x))}),o}),o,s)}})}),s}),G=[{key:`1`,name:`林青`,age:28,city:`杭州`,role:`设计工程师`,team:`体验平台`,status:`active`,score:92,salary:26e3,visits:148,address:`云谷路 88 号`},{key:`2`,name:`周宁`,age:34,city:`上海`,role:`前端工程师`,team:`设计系统`,status:`active`,score:88,salary:31e3,visits:203,address:`武康路 12 号`},{key:`3`,name:`刘溪`,age:41,city:`深圳`,role:`产品经理`,team:`商业化`,status:`leave`,score:79,salary:35e3,visits:167,address:`深南大道 100 号`},{key:`4`,name:`陈默`,age:26,city:`成都`,role:`测试开发`,team:`质量平台`,status:`trial`,score:95,salary:22e3,visits:98,address:`天府三街 18 号`},{key:`5`,name:`顾安`,age:31,city:`北京`,role:`运营分析`,team:`增长`,status:`active`,score:83,salary:24500,visits:132,address:`望京 SOHO`}],Se=[{id:`1`,item:`套餐 A`,owner:`前台`,channel:`门店`,stock:42,price:`199`},{id:`2`,item:`套餐 B`,owner:`门店`,channel:`小程序`,stock:36,price:`299`},{id:`3`,item:`套餐 C`,owner:`线上`,channel:`官网`,stock:28,price:`399`},{id:`4`,item:`体验卡`,owner:`运营`,channel:`社群`,stock:86,price:`99`},{id:`5`,item:`企业版`,owner:`销售`,channel:`直销`,stock:12,price:`1299`},{id:`6`,item:`家庭版`,owner:`门店`,channel:`门店`,stock:25,price:`699`},{id:`7`,item:`增值包`,owner:`客服`,channel:`续费`,stock:57,price:`159`},{id:`8`,item:`旗舰包`,owner:`线上`,channel:`官网`,stock:18,price:`999`},{id:`9`,item:`季度包`,owner:`增长`,channel:`投放`,stock:64,price:`499`},{id:`10`,item:`年度包`,owner:`销售`,channel:`直销`,stock:21,price:`1599`}],Ce=[{key:`1`,name:`林青`,role:`设计工程师`,team:`体验平台`,city:`杭州`,score:92,visits:148,salary:26e3,address:`云谷路 88 号`},{key:`2`,name:`周宁`,role:`前端工程师`,team:`设计系统`,city:`上海`,score:88,visits:216,salary:31e3,address:`武康路 12 号`},{key:`3`,name:`刘溪`,role:`产品经理`,team:`商业化`,city:`深圳`,score:76,visits:174,salary:35e3,address:`深南大道 100 号`},{key:`4`,name:`陈默`,role:`测试开发`,team:`质量平台`,city:`成都`,score:95,visits:98,salary:22e3,address:`天府三街 18 号`},{key:`5`,name:`顾安`,role:`运营分析`,team:`增长`,city:`北京`,score:83,visits:132,salary:24500,address:`望京 SOHO`},{key:`6`,name:`许嘉`,role:`数据分析`,team:`策略`,city:`南京`,score:91,visits:121,salary:27e3,address:`软件大道 66 号`},{key:`7`,name:`何澈`,role:`客户成功`,team:`企业服务`,city:`苏州`,score:87,visits:154,salary:24e3,address:`金鸡湖大道 9 号`}],we=[{key:`1`,name:`John Brown`,age:32,address:`New York No. 1 Lake Park`},{key:`2`,name:`Jim Green`,age:42,address:`London No. 1 Lake Park`},{key:`3`,name:`Joe Black`,age:32,address:`Sydney No. 1 Lake Park`},{key:`4`,name:`Jim Red`,age:32,address:`London No. 2 Lake Park`}],Te=[{key:`name`,label:`姓名`},{key:`age`,label:`年龄`},{key:`address`,label:`地址`}],Ee=[{key:`1`,name:`John Brown`,chinese:98,math:60,english:70},{key:`2`,name:`Jim Green`,chinese:98,math:66,english:89},{key:`3`,name:`Joe Black`,chinese:98,math:90,english:70},{key:`4`,name:`Jim Red`,chinese:88,math:99,english:89}],K=[{key:`chinese`,label:`语文`,priority:3},{key:`math`,label:`数学`,priority:2},{key:`english`,label:`英语`,priority:1}],De=e=>K.some(t=>t.key===e),q=e=>e===`ascend`||e===`descend`,Oe=[{key:`1`,name:`Cy Ganderton`,team:`Design Ops`,city:`Hangzhou`,owner:`Hart Hagerty`,updatedAt:`2026-04-18`},{key:`2`,name:`Brice Swyre`,team:`Growth`,city:`Shanghai`,owner:`Yancy Tear`,updatedAt:`2026-04-19`},{key:`3`,name:`Marjy Ferencz`,team:`Infra`,city:`Shenzhen`,owner:`Maribeth Popping`,updatedAt:`2026-04-21`}],ke=[{key:`name`,label:`Name`},{key:`team`,label:`Team`},{key:`city`,label:`City`},{key:`owner`,label:`Owner`},{key:`updatedAt`,label:`Updated`}],Ae=e=>ke.map(t=>({key:t.key,title:t.label,dataIndex:t.key,hidden:!e.includes(t.key)})),je=[{prop:`columns`,description:`列配置，支持分组表头、排序、筛选、隐藏列与单元格属性。`,type:`ColumnItem[]`,defaultValue:`-`},{prop:`dataSource`,description:`数据数组。`,type:`any[]`,defaultValue:`-`},{prop:`rowKey`,description:`行主键，可传字段名或函数。`,type:`string | (record) => key`,defaultValue:"`key`"},{prop:`rowSelection`,description:`选择列配置，支持多选、单选、禁用项、表头标题。`,type:`object`,defaultValue:`-`},{prop:`expandable`,description:`展开行配置，支持按行点击展开与受控展开。`,type:`object`,defaultValue:`-`},{prop:`pagination`,description:"分页配置，设为 `false` 时关闭分页。",type:`object | false`,defaultValue:`-`},{prop:`scroll`,description:`横向 / 纵向滚动配置，可在变更后自动回到顶部。`,type:`object`,defaultValue:`-`},{prop:`summary`,description:`汇总栏渲染。`,type:`(currentData, info) => any`,defaultValue:`-`}],Me=[{prop:`title`,description:`列标题，支持传节点或函数。`,type:`any | (context) => any`,defaultValue:`-`},{prop:`dataIndex`,description:`字段路径，支持字符串和数组路径。`,type:`string | string[]`,defaultValue:`-`},{prop:`sorter / sortOrder`,description:`本地排序、受控排序与多列排序。`,type:`boolean | fn | { compare?: fn; multiple?: number } / SortOrder`,defaultValue:`-`},{prop:`filters / filterDropdown / filteredValue`,description:`默认筛选菜单、自定义筛选面板与受控筛选值。`,type:`FilterItem[] / render fn / any[]`,defaultValue:`-`},{prop:`filterSearch`,description:`筛选项搜索。`,type:`boolean | fn`,defaultValue:`false`},{prop:`children`,description:`分组表头子列。`,type:`ColumnItem[]`,defaultValue:`-`},{prop:`hidden`,description:`隐藏列但保留配置。`,type:`boolean`,defaultValue:`false`},{prop:`onCell / onHeaderCell`,description:`给单元格注入 className、style、colSpan、rowSpan 等属性。`,type:`fn`,defaultValue:`-`}],Ne=[{prop:`type`,description:`选择模式。`,type:"`checkbox` | `radio`",defaultValue:"`checkbox`"},{prop:`columnTitle`,description:`选择列表头内容。`,type:`any`,defaultValue:`-`},{prop:`hideSelectAll`,description:`隐藏全选框。`,type:`boolean`,defaultValue:`false`},{prop:`getCheckboxProps`,description:`为某一行注入 disabled 等状态。`,type:`(record) => object`,defaultValue:`-`},{prop:`onSelect / onSelectAll / onChange`,description:`选择行为回调。`,type:`fn`,defaultValue:`-`}],Pe=[{prop:`expandedRowRender`,description:`展开内容渲染函数。`,type:`(record, index) => any`,defaultValue:`-`},{prop:`expandRowByClick`,description:`点击行即可展开。`,type:`boolean`,defaultValue:`false`},{prop:`showExpandColumn`,description:`是否展示展开列。`,type:`boolean`,defaultValue:`true`},{prop:`rowExpandable`,description:`按行控制是否可展开。`,type:`(record) => boolean`,defaultValue:`-`},{prop:`defaultExpandedRowKeys / expandedRowKeys`,description:`默认展开 / 受控展开。`,type:`key[]`,defaultValue:`-`}],Fe=`import { Table } from '@rue-js/design'

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
}`,J=()=>{let{tabBasic:a,tabVisual:c,tabControlledSort:u,tabMultipleSorter:m,tabColumnToggle:_,tabSelection:v,tabExpand:S,tabLayout:T,tabGrouped:O,tabStatic:k,selectedKeys:A,selectedRadio:M,clickedName:N,controlledNameFilter:P,controlledAddressFilter:F,controlledSorter:I,multiSortOrders:L,visibleColumnKeys:R,columnToggleColumns:ee,hideSalary:z,expandedKeys:te,buildControlledSortColumns:B,controlledSortColumns:ne,syncControlledSortColumns:re,buildMultipleSorterColumns:ie,multipleSorterColumns:ae,syncMultipleSorterColumns:V,cycleControlledSort:H,getControlledSortButtonText:oe,getControlledSortFieldText:se,getControlledSortOrderText:ce,setMultiSortPreset:le,cycleMultiSort:ue,getMultiSortButtonText:de,getMultiSortSummary:fe,toggleColumnVisibility:pe,employeeColumns:me,buildGroupedColumns:he,groupedColumns:ge,toggleSalaryColumn:_e,scrollColumns:ve}=w(`useSetup:0:0`,()=>s(()=>{let e=w(`ref:1:0`,()=>C(`preview`)),t=w(`ref:1:1`,()=>C(`preview`)),n=w(`ref:1:2`,()=>C(`preview`)),r=w(`ref:1:3`,()=>C(`preview`)),a=w(`ref:1:4`,()=>C(`preview`)),s=w(`ref:1:5`,()=>C(`preview`)),c=w(`ref:1:6`,()=>C(`preview`)),u=w(`ref:1:7`,()=>C(`preview`)),d=w(`ref:1:8`,()=>C(`preview`)),m=w(`ref:1:9`,()=>C(`preview`)),h=w(`ref:1:10`,()=>C([`2`])),g=w(`ref:1:11`,()=>C([`2`])),_=w(`ref:1:12`,()=>C(`未点击`)),v=w(`ref:1:13`,()=>C([`Jim`])),y=w(`ref:1:14`,()=>C([`London`])),b=w(`ref:1:15`,()=>C({columnKey:`age`,order:`descend`})),S=w(`ref:1:16`,()=>C({chinese:`descend`,math:`descend`})),T=w(`ref:1:17`,()=>C([`name`,`team`,`city`,`owner`])),E=w(`ref:1:18`,()=>C(Ae(T.value))),D=w(`ref:1:19`,()=>C(!1)),O=w(`ref:1:20`,()=>C([`2`])),k=()=>[{key:`name`,title:`Name`,filters:[{text:`Jim`,value:`Jim`},{text:`Joe`,value:`Joe`},{text:`John`,value:`John`}],dataIndex:`name`,filteredValue:v.value,filterSearch:!0,onFilter:(e,t)=>t.name.includes(e),sorter:(e,t)=>e.name.length-t.name.length,sortDirections:[`descend`,`ascend`],sortOrder:b.value.columnKey===`name`?b.value.order:null},{key:`age`,title:`Age`,dataIndex:`age`,sorter:(e,t)=>e.age-t.age,sortDirections:[`descend`,`ascend`],sortOrder:b.value.columnKey===`age`?b.value.order:null},{key:`address`,title:`Address`,filters:[{text:`London`,value:`London`},{text:`New York`,value:`New York`},{text:`Sydney`,value:`Sydney`}],dataIndex:`address`,filteredValue:y.value,filterSearch:!0,onFilter:(e,t)=>t.address.includes(e),sorter:(e,t)=>e.address.length-t.address.length,sortDirections:[`descend`,`ascend`],sortOrder:b.value.columnKey===`address`?b.value.order:null,ellipsis:!0}],A=w(`ref:1:21`,()=>C(k())),j=()=>{A.value=k()},M=()=>[{title:`Name`,dataIndex:`name`},{key:`chinese`,title:`Chinese Score`,dataIndex:`chinese`,sortOrder:S.value.chinese??null,sorter:{compare:(e,t)=>e.chinese-t.chinese,multiple:3},sortDirections:[`descend`,`ascend`]},{key:`math`,title:`Math Score`,dataIndex:`math`,sortOrder:S.value.math??null,sorter:{compare:(e,t)=>e.math-t.math,multiple:2},sortDirections:[`descend`,`ascend`]},{key:`english`,title:`English Score`,dataIndex:`english`,sortOrder:S.value.english??null,sorter:{compare:(e,t)=>e.english-t.english,multiple:1},sortDirections:[`descend`,`ascend`]}],N=w(`ref:1:22`,()=>C(M())),P=()=>{N.value=M()},F=e=>{let t=b.value,n=t.columnKey===e?t.order===`descend`?`ascend`:t.order===`ascend`?null:`descend`:`descend`;b.value=n?{columnKey:e,order:n}:{columnKey:null,order:null},j()},I=(e,t)=>{let n=b.value.columnKey===e?b.value.order:null;return n===`descend`?`${t}降序`:n===`ascend`?`${t}升序`:`${t}排序`},L=()=>Te.find(e=>e.key===b.value.columnKey)?.label??`无`,R=()=>b.value.order===`descend`?`降序`:b.value.order===`ascend`?`升序`:`无`,ee=e=>{S.value={...e},P()},z=e=>{let t=S.value[e]??null,n=t===`descend`?`ascend`:t===`ascend`?null:`descend`,r={...S.value};n?r[e]=n:delete r[e],S.value=r,P()},te=e=>{let t=S.value[e.key];return t===`descend`?`${e.label}降序`:t===`ascend`?`${e.label}升序`:`${e.label}排序`},B=()=>K.filter(e=>S.value[e.key]).sort((e,t)=>t.priority-e.priority).map(e=>{let t=S.value[e.key]===`descend`?`降序`:`升序`;return`${e.label}${t} P${e.priority}`}).join(` / `)||`无`,ne=e=>{let t=T.value.includes(e)?T.value.filter(t=>t!==e):[...T.value,e];T.value=t,E.value=Ae(t)},re=[{title:`姓名`,dataIndex:`name`},{title:`城市`,dataIndex:`city`},{title:`岗位`,dataIndex:`role`},{title:`团队`,dataIndex:`team`}],ie=e=>[{title:`成员信息`,children:[{title:`姓名`,dataIndex:`name`,width:120},{title:`城市`,dataIndex:`city`,width:120}]},{title:`工作概览`,children:[{title:`岗位`,dataIndex:`role`,ellipsis:!0},{title:`团队`,dataIndex:`team`,ellipsis:!0},{title:`月薪`,dataIndex:`salary`,align:`right`,hidden:e}]},{title:`操作`,key:`action`,width:120,align:`center`,render:(e,t)=>f(e=>{let n=l(`button`,e);return p(n,`btn btn-ghost btn-xs`),o(n,`click`,()=>_.value=`操作 ${t.name}`),i(n,x(`查看`)),n}),onCell:(e,t)=>({className:t%2==0?`bg-base-100`:`bg-base-200/30`})}],ae=w(`ref:1:23`,()=>C(ie(D.value)));return{tabBasic:e,tabVisual:t,tabControlledSort:n,tabMultipleSorter:r,tabColumnToggle:a,tabSelection:s,tabExpand:c,tabLayout:u,tabGrouped:d,tabStatic:m,selectedKeys:h,selectedRadio:g,clickedName:_,controlledNameFilter:v,controlledAddressFilter:y,controlledSorter:b,multiSortOrders:S,visibleColumnKeys:T,columnToggleColumns:E,hideSalary:D,expandedKeys:O,buildControlledSortColumns:k,controlledSortColumns:A,syncControlledSortColumns:j,buildMultipleSorterColumns:M,multipleSorterColumns:N,syncMultipleSorterColumns:P,cycleControlledSort:F,getControlledSortButtonText:I,getControlledSortFieldText:L,getControlledSortOrderText:R,setMultiSortPreset:ee,cycleMultiSort:z,getMultiSortButtonText:te,getMultiSortSummary:B,toggleColumnVisibility:ne,employeeColumns:re,buildGroupedColumns:ie,groupedColumns:ae,toggleSalaryColumn:()=>{D.value=!D.value,ae.value=ie(D.value)},scrollColumns:[{title:`姓名`,dataIndex:`name`,width:120,fixedCol:!0},{title:`城市`,dataIndex:`city`,width:120},{title:`岗位`,dataIndex:`role`,width:180,ellipsis:!0},{title:`团队`,dataIndex:`team`,width:160},{title:`地址`,dataIndex:`address`,width:220,ellipsis:!0},{title:`访问量`,dataIndex:`visits`,width:120,align:`right`}]}}));return f(o=>{let s=e(),C=t(`rue:component:anchor`);return i(s,C),g(b(j,{children:f(()=>{let o=e(),s=l(`div`,o);i(o,s),p(s,`max-w-none prose prose-sm md:prose-base`);let f=l(`h1`,s);i(s,f),i(f,x(`Table 表格`));let C=l(`p`,s);i(s,C),i(C,x(`Rue Table 现在同时覆盖数据驱动表格和 daisyUI 风格的静态表格写法，保留 Rue 当前视觉风格，并补齐更完整的 排序、筛选、分页、选择、展开与分组表头能力。`));let w=l(`p`,s);i(s,w),i(w,x(`可以先从基础用法进入，再根据场景查看筛选排序、选择模式、滚动布局与分组表头。静态样式写法仍然保留，可继续 使用`));let j=l(`code`,w);i(w,j),i(j,x(`Table.Head`)),i(w,x(`、`));let B=l(`code`,w);i(w,B),i(B,x(`Table.Body`)),i(w,x(`等复合组件。`));let ie=l(`h2`,s);i(s,ie),i(ie,x(`何时使用`));let he=l(`ul`,s);i(s,he);let ye=l(`li`,he);i(he,ye),i(ye,x(`需要展示结构化列表数据，并同时提供排序、筛选、分页等交互。`));let be=l(`li`,he);i(he,be),i(be,x(`希望沿用 Rue / daisyUI 的表格视觉风格，但 API 更接近成熟数据表组件。`));let Ae=l(`li`,he);i(he,Ae),i(Ae,x(`既有简单静态表格，也有复杂后台表格，想统一在一个组件里处理。`));let J=t(`rue:component:anchor`);i(s,J),n(()=>{let e=b(W,{title:`基础数据表格`,summary:`最直接的 columns + dataSource 用法，适合作为大多数列表页的起点。`,tab:a,preview:()=>D(`div`,{className:`overflow-x-auto rounded-box border border-base-300 bg-base-100 p-4`,children:D(U,{className:`w-full`,columns:me,dataSource:G})}),code:Fe});r(()=>g(e,s,J))});let Y=t(`rue:component:anchor`);i(s,Y),n(()=>{let e=b(W,{title:`视觉风格与静态行态`,summary:`保留原有视觉类 demo：背景、激活行、hover、zebra 与尺寸示例。`,tab:c,preview:()=>E(`div`,{className:`grid gap-4 lg:grid-cols-2`,children:[E(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[D(`div`,{className:`mb-3 text-sm font-medium`,children:`带背景与激活行`}),E(U,{className:`w-full`,children:[D(U.Head,{children:E(U.TR,{children:[D(U.TH,{children:`姓名`}),D(U.TH,{children:`岗位`}),D(U.TH,{children:`城市`})]})}),E(U.Body,{children:[E(U.TR,{className:`bg-base-200`,children:[D(U.TD,{children:`林青`}),D(U.TD,{children:`设计工程师`}),D(U.TD,{children:`杭州`})]}),E(U.TR,{className:`active`,children:[D(U.TD,{children:`周宁`}),D(U.TD,{children:`前端工程师`}),D(U.TD,{children:`上海`})]})]})]})]}),E(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[D(`div`,{className:`mb-3 text-sm font-medium`,children:`hover / zebra / xs`}),D(U,{className:`w-full`,zebra:!0,size:`xs`,rowHoverable:!0,columns:me,dataSource:G.slice(0,3)})]})]}),code:Ie});r(()=>g(e,s,Y))});let Ge=t(`rue:component:anchor`);i(s,Ge),n(()=>{let e=b(W,{title:`可控筛选与排序`,summary:`恢复外部控制台式的筛选与排序示例，避免交互状态混在一起。`,tab:u,preview:()=>E(`div`,{className:`space-y-4 rounded-box border border-base-300 bg-base-100 p-4`,children:[E(`div`,{className:`flex flex-wrap items-center gap-2 text-sm`,children:[Te.map(e=>D(`button`,{className:`btn btn-xs ${I.value.columnKey===e.key?`btn-primary`:`btn-ghost`}`,onClick:()=>H(e.key),children:oe(e.key,e.label)},e.key)),D(`button`,{className:`btn btn-ghost btn-xs`,onClick:()=>{I.value={columnKey:null,order:null},re()},children:`清空排序`}),D(`button`,{className:`btn btn-xs ${P.value.length===1&&P.value[0]===`Jim`&&F.value.length===0?`btn-primary`:`btn-ghost`}`,onClick:()=>{P.value=[`Jim`],F.value=[],re()},children:`只看 Jim`}),D(`button`,{className:`btn btn-xs ${F.value.length===1&&F.value[0]===`London`&&P.value.length===0?`btn-primary`:`btn-ghost`}`,onClick:()=>{P.value=[],F.value=[`London`],re()},children:`只看 London`}),D(`button`,{className:`btn btn-xs ${P.value.length===1&&P.value[0]===`Jim`&&F.value.length===1&&F.value[0]===`London`?`btn-primary`:`btn-ghost`}`,onClick:()=>{P.value=[`Jim`],F.value=[`London`],re()},children:`Jim + London`}),D(`button`,{className:`btn btn-ghost btn-xs`,onClick:()=>{P.value=[],F.value=[],re()},children:`清空筛选`}),D(`button`,{className:`btn btn-ghost btn-xs`,onClick:()=>{P.value=[],F.value=[],I.value={columnKey:null,order:null},re()},children:`清空全部`}),E(`span`,{className:`opacity-70`,children:[`筛选：Name `,P.value.join(`, `)||`无`,` / Address`,` `,F.value.join(`, `)||`无`,`； 当前排序：`,se(),` / `,ce()]})]}),D(U,{className:`w-full`,columns:ne.value,dataSource:we,sortDirections:[`descend`,`ascend`],onChange:(e,t,n)=>{P.value=Array.isArray(t?.name)&&t.name.length>0?t.name:[],F.value=Array.isArray(t?.address)&&t.address.length>0?t.address:[];let r=Array.isArray(n)?n[0]:n;I.value={columnKey:r?.order?r?.columnKey??null:null,order:r?.order??null},re()}})]}),code:Le});r(()=>g(e,s,Ge))});let Ke=t(`rue:component:anchor`);i(s,Ke),n(()=>{let e=b(W,{title:`多列排序（优先级组合）`,summary:`补回多列优先级排序 demo，支持 { compare, multiple } 并按优先级组合排序。`,tab:m,preview:()=>E(`div`,{className:`space-y-4 rounded-box border border-base-300 bg-base-100 p-4`,children:[E(`div`,{className:`flex flex-wrap gap-2 text-sm`,children:[D(`button`,{className:`btn btn-ghost btn-xs`,onClick:()=>le({chinese:`descend`,math:`descend`}),children:`语文 + 数学降序`}),D(`button`,{className:`btn btn-ghost btn-xs`,onClick:()=>le({chinese:`descend`,math:`descend`,english:`descend`}),children:`三科降序`}),D(`button`,{className:`btn btn-ghost btn-xs`,onClick:()=>le({chinese:`ascend`,english:`descend`}),children:`语文升序 + 英语降序`}),D(`button`,{className:`btn btn-ghost btn-xs`,onClick:()=>le({}),children:`清空排序`})]}),E(`div`,{className:`flex flex-wrap items-center gap-2 text-sm`,children:[K.map(e=>D(`button`,{className:`btn btn-xs ${L.value[e.key]?`btn-primary`:`btn-ghost`}`,onClick:()=>ue(e.key),children:de(e)},e.key)),E(`span`,{className:`opacity-70`,children:[`当前优先级：`,fe()]})]}),D(U,{className:`w-full`,columns:ae.value,dataSource:Ee,sortDirections:[`descend`,`ascend`],onChange:(e,t,n)=>{L.value=(Array.isArray(n)?n:n?.order?[n]:[]).reduce((e,t)=>{let n=t?.columnKey,r=t?.order;return De(n)&&q(r)&&(e[n]=r),e},{}),V()}})]}),code:Re});r(()=>g(e,s,Ke))});let qe=t(`rue:component:anchor`);i(s,qe),n(()=>{let e=b(W,{title:`动态列显隐`,summary:`把旧的隐藏列 demo 补回来，并用外部开关控制列可见性。`,tab:_,preview:()=>E(`div`,{className:`space-y-4 rounded-box border border-base-300 bg-base-100 p-4`,children:[D(`div`,{className:`flex flex-wrap gap-2 text-sm`,children:ke.map(e=>{let t=R.value.includes(e.key);return D(`button`,{className:`btn btn-xs ${t?`btn-primary`:`btn-ghost`}`,onClick:()=>pe(e.key),children:t?`隐藏 ${e.label}`:`显示 ${e.label}`},e.key)})}),D(U,{className:`w-full`,columns:ee.value,dataSource:Oe})]}),code:ze});r(()=>g(e,s,qe))});let Je=t(`rue:component:anchor`);i(s,Je),n(()=>{let e=b(W,{title:`选择模式`,summary:`保留多选、单选、禁用项、部分禁用几类示例，并增加选择列表头与回调展示。`,tab:v,preview:()=>E(`div`,{className:`grid gap-4 lg:grid-cols-2`,children:[E(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[E(`div`,{className:`mb-3 text-sm`,children:[`多选：当前 `,A.value.join(`, `)||`空`]}),D(U,{className:`w-full`,columns:[{title:`姓名`,dataIndex:`name`},{title:`团队`,dataIndex:`team`},{title:`状态`,dataIndex:`status`}],dataSource:G,rowSelection:{columnTitle:`成员`,selectedRowKeys:A.value,getCheckboxProps:e=>({disabled:e.status===`leave`}),onChange:e=>A.value=[...e]}})]}),E(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[E(`div`,{className:`mb-3 text-sm`,children:[`单选：当前 `,M.value[0]??`空`]}),D(U,{className:`w-full`,columns:[{title:`姓名`,dataIndex:`name`},{title:`城市`,dataIndex:`city`}],dataSource:G.slice(0,4),rowSelection:{type:`radio`,hideSelectAll:!0,selectedRowKeys:M.value,onChange:e=>M.value=[...e]}})]})]}),code:Be});r(()=>g(e,s,Je))});let Ye=t(`rue:component:anchor`);i(s,Ye),n(()=>{let e=b(W,{title:`展开、摘要与空态`,summary:`把展开行、按行点击展开、summary 和 emptyText 放在同一个业务场景里。`,tab:S,preview:()=>E(`div`,{className:`grid gap-4 lg:grid-cols-2`,children:[D(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:D(U,{className:`w-full`,columns:[{title:`姓名`,dataIndex:`name`},{title:`绩效`,dataIndex:`score`,align:`right`}],dataSource:G,expandable:{expandedRowKeys:te.value,expandRowByClick:!0,onExpandedRowsChange:e=>te.value=[...e],expandedRowRender:e=>E(`div`,{className:`text-sm leading-6`,children:[E(`div`,{children:[`团队：`,e.team]}),E(`div`,{children:[`地址：`,e.address]})]})},summary:e=>E(`div`,{className:`flex justify-between text-sm`,children:[E(`span`,{children:[`当前行数：`,e.length]}),E(`span`,{children:[`平均绩效：`,Math.round(e.reduce((e,t)=>e+t.score,0)/e.length)]})]})})}),D(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:D(U,{className:`w-full`,columns:[{title:`姓名`,dataIndex:`name`},{title:`团队`,dataIndex:`team`}],dataSource:[],emptyText:D(`span`,{className:`text-sm opacity-60`,children:`暂无成员，请先创建数据。`})})})]}),code:Ve});r(()=>g(e,s,Ye))});let X=t(`rue:component:anchor`);i(s,X),n(()=>{let e=b(W,{title:`滚动、标题、尾部与省略`,summary:`保留滚动、title/footer、ellipsis 和滚动容器类 demo，并串成一个长表格布局场景。`,tab:T,preview:()=>D(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:D(U,{className:`w-full`,columns:ve,dataSource:G.concat(G).concat(G),scroll:{x:900,y:220,scrollToFirstRowOnChange:!0},title:e=>E(`div`,{className:`text-sm font-medium`,children:[`成员列表（当前页 `,e.length,` 行）`]}),footer:e=>D(`div`,{className:`text-sm opacity-70`,children:`展示了固定列、纵向滚动和 ellipsis。`})})}),code:He});r(()=>g(e,s,X))});let Xe=t(`rue:component:anchor`);i(s,Xe),n(()=>{let e=b(W,{title:`分组表头、隐藏列与单元格属性`,summary:`新增分组表头，同时把隐藏列、单元格 className/style/操作列示例合并到这里。`,tab:O,preview:()=>E(`div`,{className:`space-y-4 rounded-box border border-base-300 bg-base-100 p-4`,children:[E(`div`,{className:`flex flex-wrap gap-2 text-sm`,children:[D(`button`,{className:`btn btn-ghost btn-xs`,onClick:_e,children:z.value?`显示月薪列`:`隐藏月薪列`}),E(`span`,{children:[`最近操作：`,N.value]})]}),D(U,{className:`w-full`,columns:ge.value,dataSource:G,rowHoverable:!0,onRow:e=>({onClick:()=>N.value=`点击 ${e.name}`})})]}),code:Ue});r(()=>g(e,s,Xe))});let Ze=t(`rue:component:anchor`);i(s,Ze),n(()=>{let e=b(W,{title:`静态样式、Pinned Rows 与 Pinned Cols`,summary:`原有静态样式 demo 仍然保留，适合不需要 columns/dataSource 时直接写结构。`,tab:k,preview:()=>E(`div`,{className:`grid gap-4 xl:grid-cols-2`,children:[D(`div`,{className:`h-72 overflow-auto rounded-box border border-base-300 bg-base-100 p-4`,children:E(U,{zebra:!0,pinRows:!0,className:`w-full min-w-[640px]`,children:[D(U.Head,{children:E(U.TR,{children:[D(U.TH,{children:`商品`}),D(U.TH,{children:`负责人`}),D(U.TH,{children:`渠道`}),D(U.TH,{className:`text-right`,children:`库存`}),D(U.TH,{className:`text-right`,children:`价格`})]})}),D(U.Body,{children:Se.map(e=>E(U.TR,{children:[D(U.TD,{children:e.item}),D(U.TD,{children:e.owner}),D(U.TD,{children:e.channel}),D(U.TD,{className:`text-right`,children:e.stock}),D(U.TD,{className:`text-right`,children:e.price})]},e.id))})]})}),D(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4 overflow-x-auto`,children:E(U,{pinCols:!0,className:`w-[980px]`,children:[D(U.Head,{children:E(U.TR,{children:[D(U.TH,{className:`bg-base-100`,children:`姓名`}),D(U.TH,{children:`岗位`}),D(U.TH,{children:`团队`}),D(U.TH,{children:`城市`}),D(U.TH,{className:`text-right`,children:`绩效`}),D(U.TH,{className:`text-right`,children:`访问`}),D(U.TH,{className:`text-right`,children:`月薪`}),D(U.TH,{children:`地址`})]})}),D(U.Body,{children:Ce.map(e=>E(U.TR,{children:[D(U.TH,{className:`bg-base-100`,children:e.name}),D(U.TD,{children:e.role}),D(U.TD,{children:e.team}),D(U.TD,{children:e.city}),D(U.TD,{className:`text-right`,children:e.score}),D(U.TD,{className:`text-right`,children:e.visits}),D(U.TD,{className:`text-right`,children:e.salary}),D(U.TD,{children:e.address})]},e.key))})]})})]}),code:We});r(()=>g(e,s,Ze))});let Qe=l(`h2`,s);i(s,Qe),y(Qe,`id`,`table-api`),i(Qe,x(`API`));let $e=l(`p`,s);i(s,$e),i($e,x(`当前页面只列出 Rue Table 本次增强后最常用的配置项，优先对应实际使用场景。`));let et=l(`h3`,s);i(s,et),i(et,x(`Table`));let tt=t(`rue:component:anchor`);i(s,tt),n(()=>{let e=b(xe,{rows:je});r(()=>g(e,s,tt))});let nt=l(`h3`,s);i(s,nt),i(nt,x(`Column`));let rt=t(`rue:component:anchor`);i(s,rt),n(()=>{let e=b(xe,{rows:Me});r(()=>g(e,s,rt))});let it=l(`h3`,s);i(s,it),i(it,x(`rowSelection`));let at=t(`rue:component:anchor`);i(s,at),n(()=>{let e=b(xe,{rows:Ne});r(()=>g(e,s,at))});let ot=l(`h3`,s);i(s,ot),i(ot,x(`expandable`));let st=t(`rue:component:anchor`);i(s,st),n(()=>{let e=b(xe,{rows:Pe});r(()=>g(e,s,st))});let ct=l(`h2`,s);i(s,ct),i(ct,x(`FAQ`));let lt=l(`h3`,s);i(s,lt),i(lt,x(`数据驱动和静态结构怎么选？`));let ut=l(`p`,s);i(s,ut),i(ut,x(`需要排序、筛选、分页、选择、展开时优先使用`));let dt=l(`code`,ut);i(ut,dt),i(dt,x(`columns + dataSource`)),i(ut,x(`。只想快速输出结构化样式， 或需要完全手写表格结构时，继续使用复合组件写法即可。`));let ft=l(`h3`,s);i(s,ft),i(ft,x(`为什么筛选或排序后会回到第一页？`));let pt=l(`p`,s);i(s,pt),i(pt,x(`这是为了避免当前页在筛选后没有数据。如果你希望完全自行控制分页，把`));let Z=h(pt);i(pt,Z),d(Z,` `);let mt=l(`code`,pt);i(pt,mt),i(mt,x(`pagination.current`)),i(pt,x(`和`));let ht=l(`code`,pt);i(pt,ht),i(ht,x(`onChange`)),i(pt,x(`一起受控即可。`));let gt=l(`h3`,s);i(s,gt),i(gt,x(`固定列和 pinCols 的关系是什么？`));let Q=l(`p`,s);i(s,Q);let _t=l(`code`,Q);i(Q,_t),i(_t,x(`pinCols`)),i(Q,x(`负责启用 daisyUI 的固定列视觉能力，具体哪一列固定则由列上的`));let $=h(Q);i(Q,$),d($,` `);let vt=l(`code`,Q);i(Q,vt),i(vt,x(`fixedCol`)),i(Q,x(`或`));let yt=l(`code`,Q);i(Q,yt),i(yt,x(`fixed`)),i(Q,x(`控制。静态结构写法中，通常把固定列单元格写成`));let bt=h(Q);i(Q,bt),d(bt,` `);let xt=l(`code`,Q);return i(Q,xt),i(xt,x(`TH`)),i(Q,x(`会更自然。`)),o})}),s,C),s})};export{J as default};