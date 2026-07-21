import{At as e,Cn as t,Ct as n,Dt as r,Lt as i,Mt as a,Nt as o,Tt as s,dt as c,ft as l,ht as u,jt as d,mt as f,ot as p,pn as m,pt as h,st as g,tn as _,vn as v,wn as y}from"./context-8lXZvIn-.js";import{l as b,o as x,s as S,t as C}from"./vapor-runtime-ygJWVcNn.js";import{a as w,n as T}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as E}from"./Code-DhoWkRkB.js";import{n as D,t as O}from"./src-CCTNpCXV.js";import{t as k}from"./tabs-B1XdBEJF.js";import{t as A}from"./dropdown-DerWX1J1.js";import{r as j}from"./SidebarPlaygroundDesign-BbUFY3mM.js";var M=0,N={emptyText:`No Data`,filterConfirm:`应用`,filterReset:`重置`,triggerAsc:`切换为升序`,triggerDesc:`切换为降序`,cancelSort:`取消排序`},P=(e,t)=>{if(t){if(Array.isArray(t)){let n=e;for(let e of t){if(n==null)return;n=n[e]}return n}return e?.[t]}},F=e=>e===`right`?`text-right`:e===`center`?`text-center`:`text-left`,I=(...e)=>e.filter(Boolean).join(` `).trim()||void 0,L=(...e)=>{let t;return e.forEach(e=>{e&&(t=t?{...t,...e}:{...e})}),t},R=e=>e==null||e===!1?[]:Array.isArray(e)?[...e]:typeof e!=`string`&&typeof e?.[Symbol.iterator]==`function`?Array.from(e):[e],ee=(e,t)=>e.key?e.key:typeof e.dataIndex==`string`?e.dataIndex:Array.isArray(e.dataIndex)&&e.dataIndex.length>0?e.dataIndex.join(`.`):`column-${t.join(`-`)}`,z=e=>(e.children??[]).filter(e=>!e.hidden),te=e=>e.reduce((e,t)=>{if(t.hidden)return e;let n=z(t);return n.length===0?e+1:e+te(n)},0),B=e=>{let t=1;return e.forEach(e=>{if(e.hidden)return;let n=z(e);n.length>0&&(t=Math.max(t,1+B(n)))}),t},ne=(e,t=[])=>{let n=[];return e.forEach((e,r)=>{if(e.hidden)return;let i=[...t,r],a=z(e);if(a.length>0){n.push(...ne(a,i));return}n.push({column:e,indexPath:i,key:ee(e,i)})}),n},re=e=>{let t=e.filter(e=>!e.hidden),n=B(t),r=Array.from({length:n},()=>[]),i=(e,t,a=[])=>{e.forEach((e,o)=>{if(e.hidden)return;let s=[...a,o],c=z(e),l=c.length>0?te(c):1,u=e.colSpan??l;if(u===0)return;let d=e.rowSpan??(c.length>0?1:n-t);r[t].push({column:e,index:o,key:ee(e,s),colSpan:u,rowSpan:d}),c.length>0&&i(c,t+1,s)})};return i(t,0),r},ie=e=>!!(e.fixedCol||e.fixed===!0||e.fixed===`left`||e.fixed===`start`),ae=e=>typeof e==`object`&&!!e,V=e=>{if(ae(e.sorter))return e.sorter.multiple},H=e=>e.filter(e=>!!e?.order).sort((e,t)=>{let n=e.multiple??0,r=t.multiple??0;return n===r?0:r-n}),oe=e=>{let t=H(e.filter(e=>e.column.sortOrder!==void 0).map(e=>({key:e.key,order:e.column.sortOrder,multiple:V(e.column)})));return t.length>0?t:H(e.filter(e=>!!e.column.defaultSortOrder).map(e=>({key:e.key,order:e.column.defaultSortOrder,multiple:V(e.column)})))},se=e=>{let t={};return e.forEach(({column:e,key:n})=>{if(e.filteredValue!==void 0){t[n]=R(e.filteredValue);return}e.defaultFilteredValue!==void 0&&(t[n]=R(e.defaultFilteredValue))}),t},ce=(e,t)=>e<=1?1:e>=t?t:e,le=e=>typeof e==`number`?`${e}px`:e,ue=e=>{switch(e){case`small`:return`table-sm`;case`middle`:return`table-md`;case`large`:return`table-lg`;case`xs`:case`sm`:case`md`:case`lg`:case`xl`:return`table-${e}`;default:return}},de=e=>({...N,...e}),fe=(e,t)=>typeof e==`function`?e({props:t})??{}:e??{},pe=e=>e?e===!0||e.showTitle!==!1:!1,me=e=>{switch(e){case`topLeft`:return`topStart`;case`topCenter`:return`topCenter`;case`topRight`:return`topEnd`;case`bottomLeft`:return`bottomStart`;case`bottomCenter`:return`bottomCenter`;case`bottomRight`:return`bottomEnd`;default:return`none`}},he=e=>e==null||e===!1?[]:(e.placement?.length?e.placement:e.position?.length?e.position.map(me):[`bottomEnd`]).filter((e,t,n)=>e===`none`?n.length===1:n.indexOf(e)===t),ge=e=>{switch(e){case`topStart`:case`bottomStart`:return`justify-start`;case`topCenter`:case`bottomCenter`:return`justify-center`;default:return`justify-end`}},_e=(e,t)=>{let n=e?.[t];return Array.isArray(n)?n:[]},ve=({render:e,data:t})=>typeof e==`function`?e(t):null,ye=({render:e,record:t,index:n,indent:r,expanded:i})=>typeof e==`function`?e(t,n,r,i):null,be=e=>{let t=typeof e;return t===`string`||t===`number`},U=Object.assign(m=>{let E=w(`useSetup:0:0`,()=>t(()=>{let{size:e,zebra:t,pinRows:n,pinCols:r,bordered:a,className:o,classNames:s,styles:c,children:l,dataSource:u,columns:d,rowKey:f=`key`,showHeader:p=!0,onRow:h,onHeaderRow:g,onChange:_,rowSelection:v,pagination:y,expandable:b,rowClassName:x,summary:S,emptyText:C,locale:T,title:E,footer:D,loading:O,rowHoverable:k=!1,rowHoverClass:A,tableLayout:j,sortDirections:M,showSorterTooltip:N,scroll:P,sticky:F,height:I,onScroll:L}=m,R=de(T),ee=w(`computed:1:0`,()=>i(()=>fe(s,m))),z=ee,te=w(`computed:1:1`,()=>i(()=>fe(c,m))),B=typeof O==`object`?{spinning:O.spinning!==!1,tip:O.tip}:{spinning:!!O,tip:void 0},ne=b?.childrenColumnName??`children`,re=b?.indentSize??15,ie=(e,t)=>(typeof f==`function`?f(e):e?.[f])??t,ae=(e,t=[])=>e.flatMap((e,n)=>{let r=[...t,n],i=ie(e,`row-${r.join(`-`)}`),a=_e(e,ne);return a.length===0?[]:[i,...ae(a,r)]}),V=`table`,H=ue(e);return H&&(V+=` ${H}`),t&&(V+=` table-zebra`),(n||F)&&(V+=` table-pin-rows`),r&&(V+=` table-pin-cols`),a&&(V+=` border-separate border-spacing-0`),z.get().table&&(V+=` ${z.get().table}`),o&&(V+=` ${o}`),{size:e,zebra:t,pinRows:n,pinCols:r,bordered:a,className:o,classNames:s,styles:c,children:l,dataSource:u,columns:d,rowKey:f,showHeader:p,onRow:h,onHeaderRow:g,onChange:_,rowSelection:v,pagination:y,expandable:b,rowClassName:x,summary:S,emptyText:C,locale:T,titleRender:E,footerRender:D,loading:O,rowHoverable:k,rowHoverClass:A,tableLayout:j,sortDirections:M,showSorterTooltip:N,scroll:P,sticky:F,height:I,onScroll:L,localeText:R,semanticClasses:ee,semanticStyles:te,loadingConfig:B,childrenColumnName:ne,indentSize:re,getRecordKey:ie,collectExpandedKeys:ae,sizeClass:H,hasChildren:!(l==null||Array.isArray(l)&&l.length===0),cls:V}})),{size:k,zebra:j,pinRows:N,pinCols:ee,bordered:te,className:B,classNames:me,styles:U,children:W,dataSource:xe,columns:G,rowKey:Se,showHeader:Ce,onRow:we,onHeaderRow:Te,onChange:Ee,rowSelection:K,pagination:De,expandable:q,rowClassName:Oe,summary:ke,emptyText:Ae,locale:je,titleRender:Me,footerRender:Ne,loading:Pe,rowHoverable:Fe,rowHoverClass:Ie,tableLayout:Le,sortDirections:Re,showSorterTooltip:ze,scroll:Be,sticky:Ve,height:He,onScroll:Ue,localeText:We,semanticClasses:J,semanticStyles:Y,loadingConfig:Ge,childrenColumnName:Ke,indentSize:qe,getRecordKey:Je,collectExpandedKeys:Ye,sizeClass:X,hasChildren:Xe}=E,{cls:Ze}=E;if(Xe)return b(t=>{let n=h(`table`,t);_(()=>{s(n,Ze)}),_(()=>{let t=Y.get().table;e(n,t)});let r=c(`rue:slot:anchor`);return g(n,r),_(()=>{let e=W;v(()=>x(e,n,r))}),n});let Qe=Array.isArray(G)?ne(G):[],[$e]=w(`useState:1:2`,()=>y(`rue-table-${M++}`)),[et,tt]=w(`useState:1:3`,()=>y(oe(Qe),{kind:`ref`})),[nt,rt]=w(`useState:1:4`,()=>y(se(Qe),{kind:`ref`})),[it,at]=w(`useState:1:5`,()=>y({},{kind:`ref`})),[ot,st]=w(`useState:1:6`,()=>y({},{kind:`ref`})),[ct,lt]=w(`useState:1:7`,()=>y(null)),[ut,dt]=w(`useState:1:8`,()=>y(0)),[ft,pt]=w(`useState:1:9`,()=>y(K?.defaultSelectedRowKeys?[...K.defaultSelectedRowKeys]:[],{kind:`ref`})),Z=De!=null&&De!==!1?De:void 0,[mt,ht]=w(`useState:1:10`,()=>y(Z?Z.current??Z.defaultCurrent??1:1)),[gt]=w(`useState:1:11`,()=>y(Z?Z.pageSize??Z.defaultPageSize??10:Math.max(xe?.length??0,1))),[Q,_t]=w(`useState:1:12`,()=>y(q?.defaultExpandedRowKeys?[...q.defaultExpandedRowKeys]:q?.defaultExpandAllRows&&Array.isArray(xe)?xe.flatMap((e,t)=>{let n=Je(e,`row-${t}`),r=_e(e,Ke);return q?.expandedRowRender||r.length>0?[n,...Ye(r,[t])]:[]}):[],{kind:`ref`}));if(Array.isArray(G)&&Array.isArray(xe)){let m=re(G),y=ne(G),E=new Map(y.map(e=>[e.key,e])),k=()=>{dt(ut.value+1)},j=y.some(e=>e.column.sortOrder!==void 0),M=H(j?y.filter(e=>e.column.sortOrder!==void 0).map(e=>({key:e.key,order:e.column.sortOrder,multiple:V(e.column)})):et.value),N=new Map(M.map(e=>[e.key,e])),B=y.reduce((e,t)=>{let n=t.column.filteredValue;return n===void 0?(e[t.key]=R(nt.value[t.key]),e):(e[t.key]=R(n),e)},{}),oe=e=>{let t={};return Object.keys(e).forEach(n=>{Array.isArray(e[n])&&e[n].length>0&&(t[n]=[...e[n]])}),t},se=oe(B),ue=e=>typeof e.sorter==`function`?e.sorter:ae(e.sorter)&&typeof e.sorter.compare==`function`?e.sorter.compare:(t,n)=>{let r=P(t,e.dataIndex),i=P(n,e.dataIndex);return r==null&&i==null?0:r==null?-1:i==null||r>i?1:r<i?-1:0},de=(e,t,n)=>{for(let r of H(n)){let n=E.get(r.key);if(!n?.column.sorter)continue;let i=ue(n.column),a=r.order===`ascend`?i(e,t):-i(e,t);if(a!==0)return a}return 0},fe=(e,t)=>y.every(n=>{let r=t[n.key]??[];if(!Array.isArray(r)||r.length===0)return!0;let i=n.column.filterCombine??`or`;if(n.column.onFilter)return i===`and`?r.every(t=>n.column.onFilter(t,e)):r.some(t=>n.column.onFilter(t,e));let a=P(e,n.column.dataIndex);return i===`and`?r.every(e=>e===a):r.includes(a)}),me=(e,t)=>{let n=r=>{let i=r.flatMap(t=>{let r=_e(t,Ke),i=r.length>0?n(r):[];return!fe(t,e)&&i.length===0?[]:r.length>0?[{...t,[Ke]:i}]:[t]});return H(t).length>0&&(i=i.slice().sort((e,n)=>de(e,n,t))),i};return n(xe)},U=q?.expandedRowKeys?[...q.expandedRowKeys]:[...Q.value],W=new Set(U),Se=(e,t=0,n=[],r=!1)=>e.flatMap((e,i)=>{let a=[...n,i],o=Je(e,`row-${a.join(`-`)}`),s=_e(e,Ke),c={key:o,record:e,indent:t,hasTreeChildren:s.length>0};return s.length>0&&(r||W.has(o))?[c,...Se(s,t+1,a,r)]:[c]}),De=Se(xe,0,[],!0),je=De.some(e=>e.hasTreeChildren),Pe=Se(me(B,M)),Ye=Pe.length,X=Z!=null,Xe=X?Math.max(1,Z.pageSize??gt.value):Math.max(Ye,1),Qe=X?Math.max(1,Math.ceil(Ye/Xe)):1,$=X?ce(Z.current??mt.value,Qe):1,vt=X?Pe.slice(($-1)*Xe,$*Xe):Pe,yt=vt.map(e=>e.record),bt=K?.selectedRowKeys?[...K.selectedRowKeys]:[...ft.value],xt=new Set(bt),St=K?.align??`center`,Ct=!!K,wt=!!q?.expandedRowRender,Tt=(wt||je)&&q?.showExpandColumn!==!1,Et=+!!Ct+ +!!Tt,Dt=y.length+Et,Ot=L(Y.get().wrapper,Be?.y===void 0?void 0:{maxHeight:le(Be.y)},He===void 0?void 0:{height:le(He)},Ve&&typeof Ve==`object`&&Ve.offsetScroll!==void 0?{top:le(Ve.offsetScroll)}:void 0),kt=I(Be?.x?`overflow-x-auto`:void 0,Be?.y||He!==void 0?`overflow-y-auto`:void 0,J.get().wrapper),At=L(Y.get().table)??{},jt=y.some(({column:e})=>!!e.ellipsis);Le?At.tableLayout=Le:(jt||Be?.x)&&(At.tableLayout=`fixed`),Be?.x===!0?(At.width=`max-content`,At.minWidth=`100%`):Be?.x!==void 0&&(At.width=le(Be.x),At.minWidth=`100%`),(()=>{let e=globalThis,t=`__rue_table_outside_close_${$e.value}`;if(e[t])return;let n=e=>{let t=e?.target;t&&(t.closest(`[data-rue-table-root="${$e.value}"]`)||(lt(null),k()))};e?.addEventListener&&e.addEventListener(`pointerdown`,n),e[t]=n})();let Mt=()=>{if(!Be?.scrollToFirstRowOnChange)return;let e=document.querySelector(`[data-rue-table-scroll="${$e.value}"]`);e&&(e.scrollTop=0)},Nt=H(M).map(e=>{let t=E.get(e.key);return t?{column:t.column,columnKey:e.key,order:e.order}:null}).filter(Boolean),Pt=(e,t)=>{let n=e.title;return typeof n==`function`?n({sortOrder:N.get(t)?.order??null,filteredValue:B[t]??[],sortColumns:Nt,filters:se}):n},Ft=e=>{let t=H(e).map(e=>{let t=E.get(e.key);return t?{column:t.column,order:e.order,columnKey:e.key,field:t.column.dataIndex,multiple:e.multiple}:null}).filter(Boolean);return t.length===0?{column:null,order:null}:t.length===1?t[0]:t},It=(e,t,n,r,i)=>{if(!Ee)return;let a=me(r,i),o=Se(a),s=X?Math.max(1,Math.ceil(o.length/n)):1,c=X?ce(t,s):1,l=X?o.slice((c-1)*n,c*n).map(e=>e.record):o.map(e=>e.record);Ee(X?{current:c,pageSize:n}:!1,oe(r),Ft(i),{action:e,currentDataSource:l})},Lt=(e,t)=>{let n=E.get(e)?.column;if(!n?.sorter)return;let r=V(n),i=(()=>{if(r!=null){let n=M.filter(t=>{let n=E.get(t.key)?.column;return V(n??{})!=null&&t.key!==e}).map(e=>({...e}));return t&&n.push({key:e,order:t,multiple:r}),H(n)}return t?[{key:e,order:t,multiple:r}]:[]})();j||tt(i),k(),X&&Z.current===void 0&&ht(1),Mt(),It(`sort`,X?1:$,Xe,B,i)},Rt=(e,t,n)=>{let r=R(t),i={...B,[e]:r};y.find(t=>t.key===e)?.column?.filteredValue===void 0&&rt(i),at({...it.value,[e]:r}),k(),X&&Z.current===void 0&&ht(1),n&&lt(null),Mt(),It(`filter`,X?1:$,Xe,i,M)},zt=e=>{let t=ce(e,Qe);X&&Z.current===void 0&&ht(t),k(),X&&Z.onChange&&Z.onChange(t,Xe),Mt(),It(`paginate`,t,Xe,B,M)},Bt=(e=>e.filter(e=>!K?.disabled&&!(K?.getCheckboxProps?K.getCheckboxProps(e.record):{})?.disabled))(vt).map(e=>e.key),Vt=Bt.length>0&&Bt.every(e=>xt.has(e)),Ht=Bt.some(e=>xt.has(e))&&!Vt,Ut=(e,t,n,r,i)=>{K?.selectedRowKeys===void 0&&pt([...e]),k();let a=De.filter(t=>e.includes(t.key)).map(e=>e.record);n!==void 0&&K?.onSelect&&typeof r==`boolean`&&K.onSelect(n,r,a,i),K?.onChange&&K.onChange([...e],a,t)},Wt=e=>{if(!K||K.type===`radio`)return;let t=new Set(Bt),n=K.selectedRowKeys??ft.value,r=new Set(n);t.forEach(t=>{e?r.add(t):r.delete(t)});let i=Array.from(r);if(Ut(i,{type:`checkbox`}),K.onSelectAll){let t=De.filter(e=>i.includes(e.key)).map(e=>e.record);K.onSelectAll(e,t)}},Gt=(e,t)=>{let n=!!q?.expandedRowRender&&(!q?.rowExpandable||q.rowExpandable(e.record)),r=e.hasTreeChildren||n;return{key:e.key,enabled:r,expanded:W.has(e.key),hasExpandedRowRender:n,indent:e.indent,rowIndex:t}},Kt=(e,t)=>{let n=Gt(e,t);if(!n.enabled)return;let r=new Set(U);n.expanded?r.delete(n.key):r.add(n.key);let i=Array.from(r);q?.expandedRowKeys===void 0&&_t(i),k(),q?.onExpand&&q.onExpand(!n.expanded,e.record),q?.onExpandedRowsChange&&q.onExpandedRowsChange(i)},qt=e=>[...e.sortDirections??Re??[`ascend`,`descend`],null],Jt=(e,t)=>{let n=qt(t),r=N.get(e)?.order??null;return n[(n.findIndex(e=>e===r)+1+n.length)%n.length]},Yt=(e,t)=>{let n=e.filterDropdownProps?.open??e.filterDropdownOpen;return n===void 0?ct.value===t:!!n},Xt=(e,t)=>(t?Yt(t,e):ct.value===e)||it.value[e]!==void 0?R(it.value[e]??B[e]):R(B[e]),Zt=(e,t)=>{at({...it.value,[e]:R(t)}),k()},Qt=(e,t,n)=>{let r=Yt(t,e);n&&(it.value={...it.value,[e]:R(B[e])}),!n&&t.filterDropdownProps?.open===void 0&&t.filterDropdownOpen===void 0&&lt(n?e:ct.value===e?null:ct.value),!n&&r!==n&&k(),t.filterDropdownProps?.onOpenChange?.(n),t.onFilterDropdownOpenChange?.(n)},$t=(e,t)=>{Qt(e,t,!1)},en=(e,t,n)=>{Rt(e,Xt(e,t),n?.closeDropdown??!0)},tn=(e,t,n)=>{let r=t.filterResetToDefaultFilteredValue?R(t.defaultFilteredValue):[];if(Zt(e,r),n?.confirm){Rt(e,r,n.closeDropdown??!0);return}n?.closeDropdown&&$t(e,t)},nn=(e,t)=>typeof e.filterIcon==`function`?e.filterIcon(t):e.filterIcon===void 0?`☰`:e.filterIcon,rn=(e,t)=>typeof e.sortIcon==`function`?e.sortIcon({sortOrder:t}):b(e=>{let n=h(`span`,e);_(()=>{s(n,I(`inline-flex flex-col leading-none`,t?`text-base-content`:`opacity-60`))});let r=h(`span`,n);g(n,r),_(()=>{s(r,I(t===`ascend`?`text-base-content`:`opacity-40`))}),g(r,f(`▲`));let i=h(`span`,n);return g(n,i),_(()=>{s(i,I(`-mt-0.5`,t===`descend`?`text-base-content`:`opacity-40`))}),g(i,f(`▼`)),n}),an=(e,t,n)=>t?e.map(e=>{let r=typeof n.filterSearch==`function`?n.filterSearch(t,e):String(e.text).toLowerCase().includes(t.toLowerCase()),i=Array.isArray(e.children)?an(e.children,t,n):void 0;return r||i&&i.length>0?i&&i.length>0?{...e,children:i}:e:null}).filter(Boolean):e,on=(e,t,n,r,i=0)=>{let a=Array.isArray(r)?r:[];return(Array.isArray(e)?e:[]).flatMap(e=>{let r=a.includes(e.value),o=Array.isArray(e.children)&&e.children.length>0?on(e.children,t,n,a,i+1):[],s=D(`label`,{className:`flex items-center gap-2 text-sm`,style:i>0?{paddingLeft:`${i*12}px`}:void 0,children:[O(`input`,{type:t.filterMultiple===!1?`radio`:`checkbox`,name:`rue-table-filter-${$e.value}-${n}`,className:t.filterMultiple===!1?`radio radio-xs`:`checkbox checkbox-xs`,checked:r,onChange:r=>{let i=r.target,o;if(t.filterMultiple===!1)o=i.checked?[e.value]:[];else{let t=new Set(a);i.checked?t.add(e.value):t.delete(e.value),o=Array.from(t)}Zt(n,o),t.filterOnClose===!1&&Rt(n,o,!1)}}),O(`span`,{children:e.text})]},`${String(e.value)}-${i}`);return o.length>0?[s,...o]:[s]})},sn=(e,r,a,o,u)=>{let{safeDraftValues:m,safeMenuItems:y}=w(`useSetup:0:0:dup1`,()=>t(()=>({safeDraftValues:w(`computed:1:13`,()=>i(()=>Array.isArray(o)?o:[])),safeMenuItems:w(`computed:1:14`,()=>i(()=>Array.isArray(u)?u:[]))})));return typeof r.filterDropdown==`function`?r.filterDropdown({setSelectedKeys:t=>Zt(e,t),selectedKeys:m.get(),confirm:t=>en(e,r,t),clearFilters:t=>tn(e,r,t),filters:r.filters,close:()=>$t(e,r),visible:a}):r.filterDropdown===void 0?b(t=>{let i=h(`div`,t);s(i,`w-56 rounded-box border border-base-content/10 bg-base-100 p-3 shadow-xl`);let a=c(`rue:slot:anchor`);g(i,a),_(()=>{let t=r.filterSearch?b(()=>{let t=l(),r=h(`input`,t);return g(t,r),n(r,`type`,`text`),s(r,`input input-bordered input-xs mb-2 w-full`),n(r,`placeholder`,`搜索筛选项`),_(()=>{d(r,ot.value[e]??``)}),p(r,`input`,t=>{st({...ot.value,[e]:t.target.value}),k()}),t}):``;v(()=>x(t,i,a))});let o=h(`div`,i);g(i,o),s(o,`max-h-56 space-y-2 overflow-auto`);let u=c(`rue:slot:anchor`);g(o,u),_(()=>{let t=on(y.get(),r,e,m.get());v(()=>x(t,o,u))}),g(o,f(` `));let S=c(`rue:slot:anchor`);g(o,S),_(()=>{let e=y.get().length===0?b(()=>{let e=l(),t=h(`div`,e);return g(e,t),s(t,`text-sm opacity-60`),g(t,f(`暂无匹配项`)),e}):``;v(()=>x(e,o,S))});let C=c(`rue:slot:anchor`);return g(i,C),_(()=>{let t=r.filterOnClose===!1?``:b(()=>{let t=l(),n=h(`div`,t);g(t,n),s(n,`mt-3 flex justify-end gap-2`);let i=h(`button`,n);g(n,i),s(i,`btn btn-ghost btn-xs`),p(i,`click`,()=>tn(e,r,{confirm:!0}));let a=c(`rue:slot:anchor`);g(i,a),_(()=>{let e=We.filterReset;v(()=>x(e,i,a))});let o=h(`button`,n);g(n,o),s(o,`btn btn-primary btn-xs`),p(o,`click`,()=>en(e,r));let u=c(`rue:slot:anchor`);return g(o,u),_(()=>{let e=We.filterConfirm;v(()=>x(e,o,u))}),t});v(()=>x(t,i,C))}),i}):r.filterDropdown},cn=(e,t)=>{let n=e.showSorterTooltip??ze;if(n===!1)return;if(typeof n==`object`&&n?.title!==void 0)return n.title;let r=Jt(t,e);return r===`ascend`?We.triggerAsc:r===`descend`?We.triggerDesc:We.cancelSort},ln=(e,r)=>{let{titleNode:a,filtered:o,sortOrder:u,draftValues:d,filterSearchValue:m,visible:y,menuItems:S,sorterTooltipTitle:T,_dropdownOpen:E,_dropdownOnOpenChange:D,_dropdownChildren:O,_dropdownContent:k,_dropdownOverlay:j,_dropdownItems:M,_dropdownMenu:P,_dropdownPopupRender:F,dropdownProps:L}=w(`useSetup:0:0:dup2`,()=>t(()=>{let t=w(`computed:1:15`,()=>i(()=>Pt(r,e))),n=w(`computed:1:16`,()=>i(()=>r.filtered??(B[e]??[]).length>0)),a=N.get(e)?.order??null,o=w(`computed:1:17`,()=>i(()=>Xt(e,r))),s=ot.value[e]??``,c=w(`computed:1:18`,()=>i(()=>Yt(r,e))),l=w(`computed:1:19`,()=>i(()=>an(r.filters??[],s,r))),u=w(`computed:1:20`,()=>i(()=>cn(r,e))),{open:d,onOpenChange:f,children:p,content:m,overlay:h,items:g,menu:_,popupRender:v,...y}=r.filterDropdownProps??{};return{titleNode:t,filtered:n,sortOrder:a,draftValues:o,filterSearchValue:s,visible:c,menuItems:l,sorterTooltipTitle:u,_dropdownOpen:d,_dropdownOnOpenChange:f,_dropdownChildren:p,_dropdownContent:m,_dropdownOverlay:h,_dropdownItems:g,_dropdownMenu:_,_dropdownPopupRender:v,dropdownProps:y}}));return b(t=>{let i=h(`div`,t);s(i,`relative flex items-center gap-2`);let m=h(`span`,i);g(i,m);let w=c(`rue:slot:anchor`);g(m,w),_(()=>{let e=a.get();v(()=>x(e,m,w))});let E=c(`rue:slot:anchor`);g(i,E),_(()=>{let t=r.sorter?b(()=>{let t=l(),i=h(`button`,t);g(t,i),n(i,`type`,`button`),_(()=>{n(i,`aria-label`,String(`sort-${e}`))}),_(()=>{n(i,`title`,String(T.get()))}),s(i,`btn btn-ghost btn-xs h-auto min-h-0 px-1 py-0.5`),p(i,`click`,t=>{t.stopPropagation(),Lt(e,Jt(e,r))});let a=c(`rue:slot:anchor`);return g(i,a),_(()=>{let e=rn(r,u);v(()=>x(e,i,a))}),t}):``;v(()=>x(t,i,E))}),g(i,f(` `));let D=c(`rue:slot:anchor`);return g(i,D),_(()=>{let t=Array.isArray(r.filters)&&r.filters.length>0||r.filterDropdown!==void 0?b(()=>{let t=l(),n=c(`rue:component:anchor`);g(t,n);let i=b(()=>{let t=l(),n=c(`rue:component:anchor`);g(t,n),_(()=>{let i=C(A.Trigger,{as:`button`,type:`button`,"aria-label":`filter-${e}`,className:I(`btn btn-ghost btn-xs h-auto min-h-0 px-1 py-0.5 select-none`,o.get()?`text-base-content`:`opacity-40`),children:nn(r,o.get())});v(()=>x(i,t,n))});let i=c(`rue:component:anchor`);return g(t,i),x(C(A.Content,{className:`dropdown-content z-50 mt-2 p-0`,onClick:e=>e.stopPropagation(),children:sn(e,r,y.get(),d.get(),S.get())}),t,i),t});return _(()=>{let a=C(A,{trigger:`click`,open:y.get(),closeOnClick:!1,align:`start`,...L,onOpenChange:t=>Qt(e,r,t),children:i});v(()=>x(a,t,n))}),t}):``;v(()=>x(t,i,D))}),i})},un=(r,a)=>{let{cellProps:l,children:u,isLeaf:d,leaf:f,key:p,colSpan:m,rowSpan:y}=w(`useSetup:0:0:dup3`,()=>t(()=>{let e=w(`computed:1:21`,()=>i(()=>r.column.onHeaderCell&&r.column.onHeaderCell(r.column,r.index)||{})),t=e,n=w(`computed:1:22`,()=>i(()=>z(r.column))),a=n,o=w(`computed:1:23`,()=>i(()=>a.get().length===0)),s=o,c=w(`computed:1:24`,()=>i(()=>s.get()?E.get(r.key)??null:null)),l=c;return{cellProps:e,children:n,isLeaf:o,leaf:c,key:w(`computed:1:25`,()=>i(()=>l.get()?.key??r.key)),colSpan:w(`computed:1:26`,()=>i(()=>t.get().colSpan??r.colSpan)),rowSpan:w(`computed:1:27`,()=>i(()=>t.get().rowSpan??r.rowSpan))}}));if(m.get()===0||y.get()===0)return null;let{className:S,style:C,...T}=l.get(),D=I(J.get().headerCell,F(r.column.align),r.column.className,S),O=L(Y.get().headerCell,r.column.width||r.column.minWidth?{...r.column.width?{width:r.column.width}:{},...r.column.minWidth?{minWidth:r.column.minWidth}:{}}:void 0,C),k=f.get()?ln(p.get(),r.column):Pt(r.column,r.key);return b(t=>{let i=h(`th`,t);_(()=>{n(i,`key`,String(`${a}-${r.key}`))}),_(()=>{n(i,`colSpan`,String(m.get()))}),_(()=>{n(i,`rowSpan`,String(y.get()))}),_(()=>{s(i,D)}),_(()=>{e(i,O)}),_(()=>{o(i,T)});let l=c(`rue:slot:anchor`);return g(i,l),_(()=>{let e=k;v(()=>x(e,i,l))}),i})},dn=(e,t)=>{if(!K)return null;let n=K.getCheckboxProps?{...K.getCheckboxProps(e.record)}:{};K.disabled&&(n.disabled=!0);let r=xt.has(e.key),i=K.type===`radio`?`radio`:`checkbox`,a=O(`label`,{onClick:e=>e.stopPropagation(),children:O(`input`,{type:K.type===`radio`?`radio`:`checkbox`,className:i,checked:r,onChange:t=>{let n=t.target;if(K.type===`radio`){Ut([e.key],{type:`radio`},e.record,!0,t);return}let r=K.selectedRowKeys??ft.value,i=new Set(r);n.checked?i.add(e.key):i.delete(e.key),Ut(Array.from(i),{type:`checkbox`},e.record,n.checked,t)},...n})}),o=K.renderCell?K.renderCell(r,e.record,t,a):a,s=ee&&K.fixed?`th`:`td`;return b(e=>{let t=l(),n=c(`rue:component:anchor`);return g(t,n),_(()=>{let e=C(s,{className:I(J.get().cell,F(St)),style:L(Y.get().cell,K.columnWidth?{width:K.columnWidth}:void 0),children:o});v(()=>x(e,t,n))}),t})},fn=(e,t,n)=>n.enabled?q?.expandIcon?q.expandIcon({expanded:n.expanded,expandable:n.enabled,record:e.record,onExpand:(n,r)=>{r?.stopPropagation?.(),Kt(e,t)}}):b(r=>{let i=h(`button`,r);s(i,`btn btn-ghost btn-xs`),p(i,`click`,n=>{n.stopPropagation(),Kt(e,t)});let a=c(`rue:slot:anchor`);return g(i,a),_(()=>{let e=n.expanded?`-`:`+`;v(()=>x(e,i,a))}),i}):null,pn={total:Ye,page:$,pageSize:Xe},mn=yt.slice();mn.total=Ye;let hn=typeof ke==`function`?ke(mn,pn):null,gn=Me?O(ve,{render:Me,data:yt}):null,_n=Ne?O(ve,{render:Ne,data:yt}):null,vn=he(Z),yn=X&&!(Z?.hideOnSinglePage&&Qe<=1)&&!(vn.length===1&&vn[0]===`none`),bn=t=>b(i=>{let o=h(`div`,i);_(()=>{n(o,`key`,String(`pager-${t}`))}),_(()=>{n(o,`data-rue-table-pager`,String(t))}),_(()=>{s(o,I(`flex items-center gap-2 p-2`,ge(t),J.get().pager))}),_(()=>{let t=Y.get().pager;e(o,t)});let d=h(`button`,o);g(o,d),s(d,`btn btn-ghost btn-xs`),_(()=>{r(d,$<=1)}),p(d,`click`,()=>zt($-1)),g(d,f(`Prev`));let m=c(`rue:list:start`),v=c(`rue:list:end`);g(o,m),g(o,v);let y=new Map;_(()=>{y=T({items:Array.from({length:Qe})||[],getKey:(e,n)=>`page-${t}-${n+1}`,elements:y,parent:m.parentNode,before:v,singleRoot:!0,start:m,renderItem:(e,r,i,o,c)=>{x(b(()=>{let e=l(),r=h(`button`,e);g(e,r),_(()=>{n(r,`key`,String(`page-${t}-${c+1}`))}),_(()=>{s(r,`btn btn-ghost btn-xs${$===c+1?` btn-active`:``}`)}),p(r,`click`,()=>zt(c+1));let i=u(r);return g(r,i),_(()=>{a(i,c+1)}),e}),r,i)}})});let S=h(`button`,o);return g(o,S),s(S,`btn btn-ghost btn-xs`),_(()=>{r(S,$>=Qe)}),p(S,`click`,()=>zt($+1)),g(S,f(`Next`)),o}),xn=K?.getTitleCheckboxProps?.()??{},Sn=K?.type===`radio`||K?.hideSelectAll?null:O(`label`,{children:O(`input`,{type:`checkbox`,className:`checkbox`,checked:Vt,"aria-checked":Ht?`mixed`:Vt?`true`:`false`,disabled:K?.disabled||Bt.length===0,onChange:e=>Wt(e.target.checked),...xn})}),Cn=K?.columnTitle===void 0?Sn:typeof K.columnTitle==`function`?K.columnTitle(Sn):K.columnTitle,wn=e=>{Ue&&Ue(e)};return b(t=>{let r=h(`div`,t);_(()=>{n(r,`data-rue-table-root`,String($e.value))}),_(()=>{n(r,`data-rue-table-scroll`,String($e.value))}),_(()=>{n(r,`data-rue-table-version`,String(ut.value))}),_(()=>{s(r,I(`relative`,te?`rounded-box border border-base-300 bg-base-100`:void 0,J.get().root,kt))}),_(()=>{let t=L(Y.get().root,Ot);e(r,t)}),p(r,`scroll`,wn);let i=c(`rue:slot:anchor`);g(r,i),_(()=>{let e=yn?vn.filter(e=>e.startsWith(`top`)).map(bn):``;v(()=>x(e,r,i))}),g(r,f(` `));let d=c(`rue:slot:anchor`);g(r,d),_(()=>{let t=gn?b(()=>{let t=l(),n=h(`div`,t);g(t,n),_(()=>{s(n,I(`p-2`,J.get().title))}),_(()=>{let t=Y.get().title;e(n,t)});let r=c(`rue:slot:anchor`);return g(n,r),_(()=>{let e=gn;v(()=>x(e,n,r))}),t}):``;v(()=>x(t,r,d))});let w=h(`table`,r);g(r,w),_(()=>{s(w,Ze)}),_(()=>{e(w,At)}),_(()=>{n(w,`data-rue-table-id`,String($e.value))});let E=c(`rue:slot:anchor`);g(w,E),_(()=>{let t=Ce?b(()=>{let t=l(),r=h(`thead`,t);g(t,r),_(()=>{s(r,J.get().thead)}),_(()=>{let t=Y.get().thead;e(r,t)});let i=c(`rue:list:start`),d=c(`rue:list:end`);g(r,i),g(r,d);let p=new Map;return _(()=>{p=T({items:m||[],getKey:(e,t)=>`header-row-${t}`,elements:p,parent:r,before:d,singleRoot:!0,start:i,renderItem:(t,r,i,d,p)=>{x(b(()=>{let r=l(),{className:i,style:d,...y}=Te&&Te(t.map(e=>e.column),p)||{},C=h(`tr`,r);g(r,C),_(()=>{n(C,`key`,String(`header-row-${p}`))}),_(()=>{s(C,I(J.get().headerRow,i))}),_(()=>{let t=L(Y.get().headerRow,d);e(C,t)}),_(()=>{o(C,y)});let w=c(`rue:slot:anchor`);g(C,w),_(()=>{let t=p===0&&Tt?b(()=>{let t=l(),r=h(`th`,t);g(t,r),_(()=>{n(r,`rowSpan`,String(m.length))}),_(()=>{s(r,I(J.get().headerCell,F(`center`)))}),_(()=>{let t=L(Y.get().headerCell,q?.columnWidth?{width:q.columnWidth}:void 0);e(r,t)});let i=u(r);return g(r,i),_(()=>{a(i,q?.columnTitle)}),t}):``;v(()=>x(t,C,w))}),g(C,f(` `));let E=c(`rue:slot:anchor`);g(C,E),_(()=>{let t=p===0&&Ct?b(()=>{let t=l(),r=h(`th`,t);g(t,r),_(()=>{n(r,`rowSpan`,String(m.length))}),_(()=>{s(r,I(J.get().headerCell,F(St)))}),_(()=>{let t=L(Y.get().headerCell,K?.columnWidth?{width:K.columnWidth}:void 0);e(r,t)});let i=c(`rue:slot:anchor`);return g(r,i),_(()=>{let e=Cn;v(()=>x(e,r,i))}),t}):``;v(()=>x(t,C,E))}),g(C,f(` `));let D=c(`rue:list:start`),O=c(`rue:list:end`);g(C,D),g(C,O);let k=new Map;return _(()=>{k=T({items:t||[],getKey:(e,t)=>t,elements:k,parent:C,before:O,start:D,renderItem:(e,t,n,r,i)=>{S(un(e,p),t,n,r)}})}),r}),r,i)}})}),t}):``;v(()=>x(t,w,E))});let k=h(`tbody`,w);g(w,k),_(()=>{n(k,`key`,String(`body-${ut.value}`))}),_(()=>{s(k,J.get().tbody)}),_(()=>{let t=Y.get().tbody;e(k,t)});let A=c(`rue:list:start`),j=c(`rue:list:end`);g(k,A),g(k,j);let M=new Map;_(()=>{M=T({items:vt||[],getKey:(e,t)=>`row-group-${String(e.key)}`,elements:M,parent:k,before:j,start:A,renderItem:(t,r,i,a,u)=>{let d=Gt(t,u),{className:m,style:w,onClick:E,...k}=we&&we(t.record,u)||{},A=typeof Oe==`function`?Oe(t.record,u):``,j=Fe?Ie||`hover:bg-base-200`:``,M=e=>{E&&E(e),!(!q?.expandRowByClick||!d.enabled)&&((e?.target)?.closest(`button, input, a, label`)||Kt(t,u))},N=wt&&d.hasExpandedRowRender&&d.expanded,R=N?typeof q?.expandedRowClassName==`function`?q.expandedRowClassName(t.record,u,t.indent):q?.expandedRowClassName:void 0;S(b(()=>{let r=l(),i=h(`tr`,r);g(r,i),_(()=>{n(i,`key`,String(`row-${String(t.key)}`))}),_(()=>{o(i,k)}),p(i,`click`,M),_(()=>{s(i,I(J.get().bodyRow,m,A,j))}),_(()=>{let t=L(Y.get().bodyRow,w);e(i,t)});let a=c(`rue:slot:anchor`);g(i,a),_(()=>{let n=Tt?b(()=>{let n=l(),r=h(`td`,n);g(n,r),_(()=>{s(r,I(J.get().cell,F(`center`)))}),_(()=>{let n=L(Y.get().cell,q?.columnWidth?{width:q.columnWidth}:void 0,t.indent>0?{paddingLeft:`${t.indent*qe}px`}:void 0);e(r,n)});let i=c(`rue:slot:anchor`);return g(r,i),_(()=>{let e=fn(t,u,d);v(()=>x(e,r,i))}),n}):``;v(()=>x(n,i,a))}),g(i,f(` `));let E=c(`rue:slot:anchor`);g(i,E),_(()=>{let e=Ct?dn(t,u):``;v(()=>x(e,i,E))}),g(i,f(` `));let z=c(`rue:list:start`),te=c(`rue:list:end`);g(i,z),g(i,te);let B=new Map;_(()=>{B=T({items:y||[],getKey:(e,n)=>`cell-${String(t.key)}-${e.key}-${n}`,elements:B,parent:i,before:te,start:z,renderItem:(e,n,r,i,a)=>{S((()=>{let n=P(t.record,e.column.dataIndex),r=e.column.render?e.column.render(n,t.record,u):n,i=e.column.onCell&&e.column.onCell(t.record,u)||{},{className:o,style:s,...c}=i,l=i.colSpan??1,f=i.rowSpan??1;if(l===0||f===0)return null;let p=!Tt&&a===0,m=e.column.rowScope||ee&&ie(e.column)?`th`:`td`,h=I(J.get().cell,F(e.column.align),e.column.className,e.column.ellipsis?`truncate`:void 0,o),g=L(Y.get().cell,e.column.width||e.column.minWidth?{...e.column.width?{width:e.column.width}:{},...e.column.minWidth?{minWidth:e.column.minWidth}:{}}:void 0,p&&t.indent>0?{paddingLeft:`${t.indent*qe}px`}:void 0,s),_=e.column.ellipsis&&pe(e.column.ellipsis)&&be(r)?String(r):void 0,v=p?D(`div`,{className:`flex items-center gap-2`,children:[fn(t,u,d),O(`span`,{className:e.column.ellipsis?`truncate`:void 0,children:r})]}):r;return O(m,{className:h,style:g,title:_,colSpan:l,rowSpan:f,scope:e.column.rowScope,"data-rue-table-indent":p&&t.indent>0?String(t.indent):void 0,...c,children:v},`cell-${String(t.key)}-${e.key}-${a}`)})(),n,r,i)}})});let ne=c(`rue:slot:anchor`);return g(r,ne),_(()=>{let e=N?b(()=>{let e=l(),r=h(`tr`,e);g(e,r),_(()=>{n(r,`key`,String(`expanded-${String(t.key)}`))}),_(()=>{s(r,R)});let i=h(`td`,r);g(r,i),_(()=>{n(i,`colSpan`,String(Dt))});let a=c(`rue:component:anchor`);return g(i,a),_(()=>{let e=C(ye,{render:q?.expandedRowRender,record:t.record,index:u,indent:t.indent,expanded:!0});v(()=>x(e,i,a))}),e}):``;v(()=>x(e,r,ne))}),r}),r,i,a)}})}),g(k,f(` `));let N=c(`rue:slot:anchor`);g(k,N),_(()=>{let t=vt.length===0?b(()=>{let t=l(),r=h(`tr`,t);g(t,r);let i=h(`td`,r);g(r,i),_(()=>{n(i,`colSpan`,String(Dt))}),_(()=>{s(i,I(J.get().empty,F(`center`)))}),_(()=>{let t=Y.get().empty;e(i,t)});let a=c(`rue:slot:anchor`);return g(i,a),_(()=>{let e=Ae===void 0?We.emptyText:Ae;v(()=>x(e,i,a))}),t}):``;v(()=>x(t,k,N))});let R=c(`rue:slot:anchor`);g(w,R),_(()=>{let t=hn||yn&&vn.some(e=>e.startsWith(`bottom`))?b(()=>{let t=l(),r=h(`tfoot`,t);g(t,r),_(()=>{s(r,J.get().tfoot)}),_(()=>{let t=Y.get().tfoot;e(r,t)});let i=c(`rue:slot:anchor`);g(r,i),_(()=>{let t=hn?b(()=>{let t=l(),r=h(`tr`,t);g(t,r),_(()=>{s(r,J.get().summary)}),_(()=>{let t=Y.get().summary;e(r,t)});let i=h(`td`,r);g(r,i),_(()=>{n(i,`colSpan`,String(Dt))});let a=c(`rue:slot:anchor`);return g(i,a),_(()=>{let e=hn;v(()=>x(e,i,a))}),t}):``;v(()=>x(t,r,i))}),g(r,f(` `));let a=c(`rue:slot:anchor`);return g(r,a),_(()=>{let e=yn?b(()=>{let e=l(),t=c(`rue:list:start`),r=c(`rue:list:end`);g(e,t),g(e,r);let i=new Map;return _(()=>{i=T({items:vn.filter(e=>e.startsWith(`bottom`))||[],getKey:(e,t)=>`pager-row-${e}`,elements:i,parent:t.parentNode,before:r,singleRoot:!0,trackIndex:!1,start:t,renderItem:(e,t,r,i,a)=>{x(b(()=>{let t=l(),r=h(`tr`,t);g(t,r),_(()=>{n(r,`key`,String(`pager-row-${e}`))});let i=h(`td`,r);g(r,i),_(()=>{n(i,`colSpan`,String(Dt))});let a=c(`rue:slot:anchor`);return g(i,a),_(()=>{let t=bn(e);v(()=>x(t,i,a))}),t}),t,r)}})}),e}):``;v(()=>x(e,r,a))}),t}):``;v(()=>x(t,w,R))});let z=c(`rue:slot:anchor`);g(r,z),_(()=>{let t=_n?b(()=>{let t=l(),n=h(`div`,t);g(t,n),_(()=>{s(n,I(`p-2`,J.get().footer))}),_(()=>{let t=Y.get().footer;e(n,t)});let r=c(`rue:slot:anchor`);return g(n,r),_(()=>{let e=_n;v(()=>x(e,n,r))}),t}):``;v(()=>x(t,r,z))}),g(r,f(` `));let B=c(`rue:slot:anchor`);return g(r,B),_(()=>{let t=Ge.spinning?b(()=>{let t=l(),n=h(`div`,t);g(t,n),_(()=>{s(n,I(`absolute inset-0 z-20 flex flex-col items-center justify-center gap-2 rounded-box bg-base-100/70`,J.get().loading))}),_(()=>{let t=Y.get().loading;e(n,t)});let r=h(`span`,n);g(n,r),s(r,`loading loading-spinner loading-md`);let i=c(`rue:slot:anchor`);return g(n,i),_(()=>{let e=Ge.tip?b(()=>{let e=l(),t=h(`div`,e);g(e,t),s(t,`text-sm opacity-70`);let n=c(`rue:slot:anchor`);return g(t,n),_(()=>{let e=Ge.tip;v(()=>x(e,t,n))}),e}):``;v(()=>x(e,n,i))}),t}):``;v(()=>x(t,r,B))}),r})}return b(t=>{let n=h(`table`,t);return _(()=>{s(n,Ze)}),_(()=>{let t=Y.get().table;e(n,t)}),n})},{Head:e=>b(t=>{let n=h(`thead`,t);_(()=>{s(n,e.className||void 0)});let r=c(`rue:children:anchor`);return g(n,r),_(()=>{let t=e.children;v(()=>x(t,n,r))}),n}),Body:e=>b(t=>{let n=h(`tbody`,t);_(()=>{s(n,e.className||void 0)});let r=c(`rue:children:anchor`);return g(n,r),_(()=>{let t=e.children;v(()=>x(t,n,r))}),n}),Foot:e=>b(t=>{let n=h(`tfoot`,t);_(()=>{s(n,e.className||void 0)});let r=c(`rue:children:anchor`);return g(n,r),_(()=>{let t=e.children;v(()=>x(t,n,r))}),n}),TR:e=>b(t=>{let n=h(`tr`,t);_(()=>{s(n,e.className||void 0)});let r=c(`rue:children:anchor`);return g(n,r),_(()=>{let t=e.children;v(()=>x(t,n,r))}),n}),TH:e=>b(t=>{let n=h(`th`,t);_(()=>{s(n,e.className||void 0)});let r=c(`rue:children:anchor`);return g(n,r),_(()=>{let t=e.children;v(()=>x(t,n,r))}),n}),TD:e=>b(t=>{let n=h(`td`,t);_(()=>{s(n,e.className||void 0)});let r=c(`rue:children:anchor`);return g(n,r),_(()=>{let t=e.children;v(()=>x(t,n,r))}),n})}),W=e=>b(t=>{let n=h(`div`,t);s(n,`component-preview not-prose text-base-content my-6 lg:my-12`);let r=h(`div`,n);g(n,r),s(r,`flex flex-wrap items-start justify-between gap-3`);let i=h(`div`,r);g(r,i);let a=h(`h2`,i);g(i,a),s(a,`component-preview-title mt-2 mb-1 text-lg font-semibold`),g(a,f(`# `));let o=c(`rue:slot:anchor`);g(a,o),_(()=>{let t=e.title;v(()=>x(t,a,o))});let u=c(`rue:slot:anchor`);g(i,u),_(()=>{let t=e.summary?b(()=>{let t=l(),n=h(`p`,t);g(t,n),s(n,`m-0 text-sm opacity-70`);let r=c(`rue:slot:anchor`);return g(n,r),_(()=>{let t=e.summary;v(()=>x(t,n,r))}),t}):``;v(()=>x(t,i,u))});let d=c(`rue:component:anchor`);g(n,d),_(()=>{let t=C(k,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`});v(()=>x(t,n,d))});let p=c(`rue:slot:anchor`);return g(n,p),_(()=>{let t=e.tab.value===`preview`?e.preview():b(()=>{let t=l(),n=c(`rue:component:anchor`);return g(t,n),_(()=>{let r=C(E,{className:`mt-2`,lang:`tsx`,code:e.code});v(()=>x(r,t,n))}),t});v(()=>x(t,n,p))}),n}),xe=e=>b(t=>{let r=h(`div`,t);s(r,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let i=h(`table`,r);g(r,i),s(i,`table table-zebra`);let a=h(`thead`,i);g(i,a);let o=h(`tr`,a);g(a,o);let u=h(`th`,o);g(o,u),g(u,f(`属性`));let d=h(`th`,o);g(o,d),g(d,f(`说明`));let p=h(`th`,o);g(o,p),g(p,f(`类型`));let m=h(`th`,o);g(o,m),g(m,f(`默认值`));let y=h(`tbody`,i);g(i,y);let S=c(`rue:list:start`),C=c(`rue:list:end`);g(y,S),g(y,C);let w=new Map;return _(()=>{w=T({items:e.rows||[],getKey:(e,t)=>e.prop,elements:w,parent:y,before:C,singleRoot:!0,trackIndex:!1,start:S,renderItem:(e,t,r,i,a)=>{x(b(()=>{let t=l(),r=h(`tr`,t);g(t,r),_(()=>{n(r,`key`,String(e.prop))});let i=h(`td`,r);g(r,i);let a=h(`code`,i);g(i,a);let o=c(`rue:slot:anchor`);g(a,o),_(()=>{let t=e.prop;v(()=>x(t,a,o))});let s=h(`td`,r);g(r,s);let u=c(`rue:slot:anchor`);g(s,u),_(()=>{let t=e.description;v(()=>x(t,s,u))});let d=h(`td`,r);g(r,d);let f=h(`code`,d);g(d,f);let p=c(`rue:slot:anchor`);g(f,p),_(()=>{let t=e.type;v(()=>x(t,f,p))});let m=h(`td`,r);g(r,m);let y=h(`code`,m);g(m,y);let b=c(`rue:slot:anchor`);return g(y,b),_(()=>{let t=e.defaultValue;v(()=>x(t,y,b))}),t}),t,r)}})}),r}),G=[{key:`1`,name:`林青`,age:28,city:`杭州`,role:`设计工程师`,team:`体验平台`,status:`active`,score:92,salary:26e3,visits:148,address:`云谷路 88 号`},{key:`2`,name:`周宁`,age:34,city:`上海`,role:`前端工程师`,team:`设计系统`,status:`active`,score:88,salary:31e3,visits:203,address:`武康路 12 号`},{key:`3`,name:`刘溪`,age:41,city:`深圳`,role:`产品经理`,team:`商业化`,status:`leave`,score:79,salary:35e3,visits:167,address:`深南大道 100 号`},{key:`4`,name:`陈默`,age:26,city:`成都`,role:`测试开发`,team:`质量平台`,status:`trial`,score:95,salary:22e3,visits:98,address:`天府三街 18 号`},{key:`5`,name:`顾安`,age:31,city:`北京`,role:`运营分析`,team:`增长`,status:`active`,score:83,salary:24500,visits:132,address:`望京 SOHO`}],Se=[{id:`1`,item:`套餐 A`,owner:`前台`,channel:`门店`,stock:42,price:`199`},{id:`2`,item:`套餐 B`,owner:`门店`,channel:`小程序`,stock:36,price:`299`},{id:`3`,item:`套餐 C`,owner:`线上`,channel:`官网`,stock:28,price:`399`},{id:`4`,item:`体验卡`,owner:`运营`,channel:`社群`,stock:86,price:`99`},{id:`5`,item:`企业版`,owner:`销售`,channel:`直销`,stock:12,price:`1299`},{id:`6`,item:`家庭版`,owner:`门店`,channel:`门店`,stock:25,price:`699`},{id:`7`,item:`增值包`,owner:`客服`,channel:`续费`,stock:57,price:`159`},{id:`8`,item:`旗舰包`,owner:`线上`,channel:`官网`,stock:18,price:`999`},{id:`9`,item:`季度包`,owner:`增长`,channel:`投放`,stock:64,price:`499`},{id:`10`,item:`年度包`,owner:`销售`,channel:`直销`,stock:21,price:`1599`}],Ce=[{key:`1`,name:`林青`,role:`设计工程师`,team:`体验平台`,city:`杭州`,score:92,visits:148,salary:26e3,address:`云谷路 88 号`},{key:`2`,name:`周宁`,role:`前端工程师`,team:`设计系统`,city:`上海`,score:88,visits:216,salary:31e3,address:`武康路 12 号`},{key:`3`,name:`刘溪`,role:`产品经理`,team:`商业化`,city:`深圳`,score:76,visits:174,salary:35e3,address:`深南大道 100 号`},{key:`4`,name:`陈默`,role:`测试开发`,team:`质量平台`,city:`成都`,score:95,visits:98,salary:22e3,address:`天府三街 18 号`},{key:`5`,name:`顾安`,role:`运营分析`,team:`增长`,city:`北京`,score:83,visits:132,salary:24500,address:`望京 SOHO`},{key:`6`,name:`许嘉`,role:`数据分析`,team:`策略`,city:`南京`,score:91,visits:121,salary:27e3,address:`软件大道 66 号`},{key:`7`,name:`何澈`,role:`客户成功`,team:`企业服务`,city:`苏州`,score:87,visits:154,salary:24e3,address:`金鸡湖大道 9 号`}],we=[{key:`1`,name:`John Brown`,age:32,address:`New York No. 1 Lake Park`},{key:`2`,name:`Jim Green`,age:42,address:`London No. 1 Lake Park`},{key:`3`,name:`Joe Black`,age:32,address:`Sydney No. 1 Lake Park`},{key:`4`,name:`Jim Red`,age:32,address:`London No. 2 Lake Park`}],Te=[{key:`name`,label:`姓名`},{key:`age`,label:`年龄`},{key:`address`,label:`地址`}],Ee=[{key:`1`,name:`John Brown`,chinese:98,math:60,english:70},{key:`2`,name:`Jim Green`,chinese:98,math:66,english:89},{key:`3`,name:`Joe Black`,chinese:98,math:90,english:70},{key:`4`,name:`Jim Red`,chinese:88,math:99,english:89}],K=[{key:`chinese`,label:`语文`,priority:3},{key:`math`,label:`数学`,priority:2},{key:`english`,label:`英语`,priority:1}],De=e=>K.some(t=>t.key===e),q=e=>e===`ascend`||e===`descend`,Oe=[{key:`1`,name:`Cy Ganderton`,team:`Design Ops`,city:`Hangzhou`,owner:`Hart Hagerty`,updatedAt:`2026-04-18`},{key:`2`,name:`Brice Swyre`,team:`Growth`,city:`Shanghai`,owner:`Yancy Tear`,updatedAt:`2026-04-19`},{key:`3`,name:`Marjy Ferencz`,team:`Infra`,city:`Shenzhen`,owner:`Maribeth Popping`,updatedAt:`2026-04-21`}],ke=[{key:`name`,label:`Name`},{key:`team`,label:`Team`},{key:`city`,label:`City`},{key:`owner`,label:`Owner`},{key:`updatedAt`,label:`Updated`}],Ae=e=>ke.map(t=>({key:t.key,title:t.label,dataIndex:t.key,hidden:!e.includes(t.key)})),je=[{prop:`columns`,description:`列配置，支持分组表头、排序、筛选、隐藏列与单元格属性。`,type:`ColumnItem[]`,defaultValue:`-`},{prop:`dataSource`,description:`数据数组。`,type:`any[]`,defaultValue:`-`},{prop:`rowKey`,description:`行主键，可传字段名或函数。`,type:`string | (record) => key`,defaultValue:"`key`"},{prop:`rowSelection`,description:`选择列配置，支持多选、单选、禁用项、表头标题。`,type:`object`,defaultValue:`-`},{prop:`expandable`,description:`展开行配置，支持按行点击展开与受控展开。`,type:`object`,defaultValue:`-`},{prop:`pagination`,description:"分页配置，设为 `false` 时关闭分页。",type:`object | false`,defaultValue:`-`},{prop:`scroll`,description:`横向 / 纵向滚动配置，可在变更后自动回到顶部。`,type:`object`,defaultValue:`-`},{prop:`summary`,description:`汇总栏渲染。`,type:`(currentData, info) => any`,defaultValue:`-`}],Me=[{prop:`title`,description:`列标题，支持传节点或函数。`,type:`any | (context) => any`,defaultValue:`-`},{prop:`dataIndex`,description:`字段路径，支持字符串和数组路径。`,type:`string | string[]`,defaultValue:`-`},{prop:`sorter / sortOrder`,description:`本地排序、受控排序与多列排序。`,type:`boolean | fn | { compare?: fn; multiple?: number } / SortOrder`,defaultValue:`-`},{prop:`filters / filterDropdown / filteredValue`,description:`默认筛选菜单、自定义筛选面板与受控筛选值。`,type:`FilterItem[] / render fn / any[]`,defaultValue:`-`},{prop:`filterSearch`,description:`筛选项搜索。`,type:`boolean | fn`,defaultValue:`false`},{prop:`children`,description:`分组表头子列。`,type:`ColumnItem[]`,defaultValue:`-`},{prop:`hidden`,description:`隐藏列但保持配置。`,type:`boolean`,defaultValue:`false`},{prop:`onCell / onHeaderCell`,description:`给单元格注入 className、style、colSpan、rowSpan 等属性。`,type:`fn`,defaultValue:`-`}],Ne=[{prop:`type`,description:`选择模式。`,type:"`checkbox` | `radio`",defaultValue:"`checkbox`"},{prop:`columnTitle`,description:`选择列表头内容。`,type:`any`,defaultValue:`-`},{prop:`hideSelectAll`,description:`隐藏全选框。`,type:`boolean`,defaultValue:`false`},{prop:`getCheckboxProps`,description:`为某一行注入 disabled 等状态。`,type:`(record) => object`,defaultValue:`-`},{prop:`onSelect / onSelectAll / onChange`,description:`选择行为回调。`,type:`fn`,defaultValue:`-`}],Pe=[{prop:`expandedRowRender`,description:`展开内容渲染函数。`,type:`(record, index) => any`,defaultValue:`-`},{prop:`expandRowByClick`,description:`点击行即可展开。`,type:`boolean`,defaultValue:`false`},{prop:`showExpandColumn`,description:`是否展示展开列。`,type:`boolean`,defaultValue:`true`},{prop:`rowExpandable`,description:`按行控制是否可展开。`,type:`(record) => boolean`,defaultValue:`-`},{prop:`defaultExpandedRowKeys / expandedRowKeys`,description:`默认展开 / 受控展开。`,type:`key[]`,defaultValue:`-`}],Fe=`import { Table } from '@rue-js/design'

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
}`,J=()=>{let{tabBasic:e,tabVisual:r,tabControlledSort:i,tabMultipleSorter:o,tabColumnToggle:d,tabSelection:y,tabExpand:S,tabLayout:T,tabGrouped:E,tabStatic:k,selectedKeys:A,selectedRadio:M,clickedName:N,controlledNameFilter:P,controlledAddressFilter:F,controlledSorter:I,multiSortOrders:L,visibleColumnKeys:R,columnToggleColumns:ee,hideSalary:z,expandedKeys:te,buildControlledSortColumns:B,controlledSortColumns:ne,syncControlledSortColumns:re,buildMultipleSorterColumns:ie,multipleSorterColumns:ae,syncMultipleSorterColumns:V,cycleControlledSort:H,getControlledSortButtonText:oe,getControlledSortFieldText:se,getControlledSortOrderText:ce,setMultiSortPreset:le,cycleMultiSort:ue,getMultiSortButtonText:de,getMultiSortSummary:fe,toggleColumnVisibility:pe,employeeColumns:me,buildGroupedColumns:he,groupedColumns:ge,toggleSalaryColumn:_e,scrollColumns:ve}=w(`useSetup:0:0`,()=>t(()=>{let e=w(`ref:1:0`,()=>m(`preview`)),t=w(`ref:1:1`,()=>m(`preview`)),n=w(`ref:1:2`,()=>m(`preview`)),r=w(`ref:1:3`,()=>m(`preview`)),i=w(`ref:1:4`,()=>m(`preview`)),a=w(`ref:1:5`,()=>m(`preview`)),o=w(`ref:1:6`,()=>m(`preview`)),c=w(`ref:1:7`,()=>m(`preview`)),l=w(`ref:1:8`,()=>m(`preview`)),u=w(`ref:1:9`,()=>m(`preview`)),d=w(`ref:1:10`,()=>m([`2`])),_=w(`ref:1:11`,()=>m([`2`])),v=w(`ref:1:12`,()=>m(`未点击`)),y=w(`ref:1:13`,()=>m([`Jim`])),x=w(`ref:1:14`,()=>m([`London`])),S=w(`ref:1:15`,()=>m({columnKey:`age`,order:`descend`})),C=w(`ref:1:16`,()=>m({chinese:`descend`,math:`descend`})),T=w(`ref:1:17`,()=>m([`name`,`team`,`city`,`owner`])),E=w(`ref:1:18`,()=>m(Ae(T.value))),D=w(`ref:1:19`,()=>m(!1)),O=w(`ref:1:20`,()=>m([`2`])),k=()=>[{key:`name`,title:`Name`,filters:[{text:`Jim`,value:`Jim`},{text:`Joe`,value:`Joe`},{text:`John`,value:`John`}],dataIndex:`name`,filteredValue:y.value,filterSearch:!0,onFilter:(e,t)=>t.name.includes(e),sorter:(e,t)=>e.name.length-t.name.length,sortDirections:[`descend`,`ascend`],sortOrder:S.value.columnKey===`name`?S.value.order:null},{key:`age`,title:`Age`,dataIndex:`age`,sorter:(e,t)=>e.age-t.age,sortDirections:[`descend`,`ascend`],sortOrder:S.value.columnKey===`age`?S.value.order:null},{key:`address`,title:`Address`,filters:[{text:`London`,value:`London`},{text:`New York`,value:`New York`},{text:`Sydney`,value:`Sydney`}],dataIndex:`address`,filteredValue:x.value,filterSearch:!0,onFilter:(e,t)=>t.address.includes(e),sorter:(e,t)=>e.address.length-t.address.length,sortDirections:[`descend`,`ascend`],sortOrder:S.value.columnKey===`address`?S.value.order:null,ellipsis:!0}],A=w(`ref:1:21`,()=>m(k())),j=()=>{A.value=k()},M=()=>[{title:`Name`,dataIndex:`name`},{key:`chinese`,title:`Chinese Score`,dataIndex:`chinese`,sortOrder:C.value.chinese??null,sorter:{compare:(e,t)=>e.chinese-t.chinese,multiple:3},sortDirections:[`descend`,`ascend`]},{key:`math`,title:`Math Score`,dataIndex:`math`,sortOrder:C.value.math??null,sorter:{compare:(e,t)=>e.math-t.math,multiple:2},sortDirections:[`descend`,`ascend`]},{key:`english`,title:`English Score`,dataIndex:`english`,sortOrder:C.value.english??null,sorter:{compare:(e,t)=>e.english-t.english,multiple:1},sortDirections:[`descend`,`ascend`]}],N=w(`ref:1:22`,()=>m(M())),P=()=>{N.value=M()},F=e=>{let t=S.value,n=t.columnKey===e?t.order===`descend`?`ascend`:t.order===`ascend`?null:`descend`:`descend`;S.value=n?{columnKey:e,order:n}:{columnKey:null,order:null},j()},I=(e,t)=>{let n=S.value.columnKey===e?S.value.order:null;return n===`descend`?`${t}降序`:n===`ascend`?`${t}升序`:`${t}排序`},L=()=>Te.find(e=>e.key===S.value.columnKey)?.label??`无`,R=()=>S.value.order===`descend`?`降序`:S.value.order===`ascend`?`升序`:`无`,ee=e=>{C.value={...e},P()},z=e=>{let t=C.value[e]??null,n=t===`descend`?`ascend`:t===`ascend`?null:`descend`,r={...C.value};n?r[e]=n:delete r[e],C.value=r,P()},te=e=>{let t=C.value[e.key];return t===`descend`?`${e.label}降序`:t===`ascend`?`${e.label}升序`:`${e.label}排序`},B=()=>K.filter(e=>C.value[e.key]).sort((e,t)=>t.priority-e.priority).map(e=>{let t=C.value[e.key]===`descend`?`降序`:`升序`;return`${e.label}${t} P${e.priority}`}).join(` / `)||`无`,ne=e=>{let t=T.value.includes(e)?T.value.filter(t=>t!==e):[...T.value,e];T.value=t,E.value=Ae(t)},re=[{title:`姓名`,dataIndex:`name`},{title:`城市`,dataIndex:`city`},{title:`岗位`,dataIndex:`role`},{title:`团队`,dataIndex:`team`}],ie=e=>[{title:`成员信息`,children:[{title:`姓名`,dataIndex:`name`,width:120},{title:`城市`,dataIndex:`city`,width:120}]},{title:`工作概览`,children:[{title:`岗位`,dataIndex:`role`,ellipsis:!0},{title:`团队`,dataIndex:`team`,ellipsis:!0},{title:`月薪`,dataIndex:`salary`,align:`right`,hidden:e}]},{title:`操作`,key:`action`,width:120,align:`center`,render:(e,t)=>b(e=>{let n=h(`button`,e);return s(n,`btn btn-ghost btn-xs`),p(n,`click`,()=>v.value=`操作 ${t.name}`),g(n,f(`查看`)),n}),onCell:(e,t)=>({className:t%2==0?`bg-base-100`:`bg-base-200/30`})}],ae=w(`ref:1:23`,()=>m(ie(D.value)));return{tabBasic:e,tabVisual:t,tabControlledSort:n,tabMultipleSorter:r,tabColumnToggle:i,tabSelection:a,tabExpand:o,tabLayout:c,tabGrouped:l,tabStatic:u,selectedKeys:d,selectedRadio:_,clickedName:v,controlledNameFilter:y,controlledAddressFilter:x,controlledSorter:S,multiSortOrders:C,visibleColumnKeys:T,columnToggleColumns:E,hideSalary:D,expandedKeys:O,buildControlledSortColumns:k,controlledSortColumns:A,syncControlledSortColumns:j,buildMultipleSorterColumns:M,multipleSorterColumns:N,syncMultipleSorterColumns:P,cycleControlledSort:F,getControlledSortButtonText:I,getControlledSortFieldText:L,getControlledSortOrderText:R,setMultiSortPreset:ee,cycleMultiSort:z,getMultiSortButtonText:te,getMultiSortSummary:B,toggleColumnVisibility:ne,employeeColumns:re,buildGroupedColumns:ie,groupedColumns:ae,toggleSalaryColumn:()=>{D.value=!D.value,ae.value=ie(D.value)},scrollColumns:[{title:`姓名`,dataIndex:`name`,width:120,fixedCol:!0},{title:`城市`,dataIndex:`city`,width:120},{title:`岗位`,dataIndex:`role`,width:180,ellipsis:!0},{title:`团队`,dataIndex:`team`,width:160},{title:`地址`,dataIndex:`address`,width:220,ellipsis:!0},{title:`访问量`,dataIndex:`visits`,width:120,align:`right`}]}}));return b(t=>{let p=l(),m=c(`rue:component:anchor`);return g(p,m),x(C(j,{children:b(()=>{let t=l(),p=h(`div`,t);g(t,p),s(p,`max-w-none prose prose-sm md:prose-base`);let m=h(`h1`,p);g(p,m),g(m,f(`Table 表格`));let b=h(`p`,p);g(p,b),g(b,f(`Rue Table 现在同时覆盖数据驱动表格和 daisyUI 风格的静态表格写法，使用 Rue 当前视觉风格，并补充更完整的 排序、筛选、分页、选择、展开与分组表头能力。`));let w=h(`p`,p);g(p,w),g(w,f(`可以先从基础用法进入，再根据场景查看筛选排序、选择模式、滚动布局与分组表头。静态样式写法仍然提供，可继续 使用`));let j=h(`code`,w);g(w,j),g(j,f(`Table.Head`)),g(w,f(`、`));let B=h(`code`,w);g(w,B),g(B,f(`Table.Body`)),g(w,f(`等复合组件。`));let ie=h(`h2`,p);g(p,ie),g(ie,f(`何时使用`));let he=h(`ul`,p);g(p,he);let ye=h(`li`,he);g(he,ye),g(ye,f(`需要展示结构化列表数据，并同时提供排序、筛选、分页等交互。`));let be=h(`li`,he);g(he,be),g(be,f(`适合使用 Rue / daisyUI 的表格视觉风格，同时使用数据表式 API。`));let Ae=h(`li`,he);g(he,Ae),g(Ae,f(`基础简单静态表格，也有复杂后台表格，想统一在一个组件里处理。`));let J=c(`rue:component:anchor`);g(p,J),_(()=>{let t=C(W,{title:`基础数据表格`,summary:`最直接的 columns + dataSource 用法，适合作为大多数列表页的起点。`,tab:e,preview:()=>O(`div`,{className:`overflow-x-auto rounded-box border border-base-300 bg-base-100 p-4`,children:O(U,{className:`w-full`,columns:me,dataSource:G})}),code:Fe});v(()=>x(t,p,J))});let Y=c(`rue:component:anchor`);g(p,Y),_(()=>{let e=C(W,{title:`视觉风格与静态行态`,summary:`使用当前视觉类示例：背景、激活行、hover、zebra 与尺寸示例。`,tab:r,preview:()=>D(`div`,{className:`grid gap-4 lg:grid-cols-2`,children:[D(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[O(`div`,{className:`mb-3 text-sm font-medium`,children:`带背景与激活行`}),D(U,{className:`w-full`,children:[O(U.Head,{children:D(U.TR,{children:[O(U.TH,{children:`姓名`}),O(U.TH,{children:`岗位`}),O(U.TH,{children:`城市`})]})}),D(U.Body,{children:[D(U.TR,{className:`bg-base-200`,children:[O(U.TD,{children:`林青`}),O(U.TD,{children:`设计工程师`}),O(U.TD,{children:`杭州`})]}),D(U.TR,{className:`active`,children:[O(U.TD,{children:`周宁`}),O(U.TD,{children:`前端工程师`}),O(U.TD,{children:`上海`})]})]})]})]}),D(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[O(`div`,{className:`mb-3 text-sm font-medium`,children:`hover / zebra / xs`}),O(U,{className:`w-full`,zebra:!0,size:`xs`,rowHoverable:!0,columns:me,dataSource:G.slice(0,3)})]})]}),code:Ie});v(()=>x(e,p,Y))});let Ge=c(`rue:component:anchor`);g(p,Ge),_(()=>{let e=C(W,{title:`可控筛选与排序`,summary:`恢复外部控制台式的筛选与排序示例，避免交互状态混在一起。`,tab:i,preview:()=>D(`div`,{className:`space-y-4 rounded-box border border-base-300 bg-base-100 p-4`,children:[D(`div`,{className:`flex flex-wrap items-center gap-2 text-sm`,children:[Te.map(e=>O(`button`,{className:`btn btn-xs ${I.value.columnKey===e.key?`btn-primary`:`btn-ghost`}`,onClick:()=>H(e.key),children:oe(e.key,e.label)},e.key)),O(`button`,{className:`btn btn-ghost btn-xs`,onClick:()=>{I.value={columnKey:null,order:null},re()},children:`清空排序`}),O(`button`,{className:`btn btn-xs ${P.value.length===1&&P.value[0]===`Jim`&&F.value.length===0?`btn-primary`:`btn-ghost`}`,onClick:()=>{P.value=[`Jim`],F.value=[],re()},children:`只看 Jim`}),O(`button`,{className:`btn btn-xs ${F.value.length===1&&F.value[0]===`London`&&P.value.length===0?`btn-primary`:`btn-ghost`}`,onClick:()=>{P.value=[],F.value=[`London`],re()},children:`只看 London`}),O(`button`,{className:`btn btn-xs ${P.value.length===1&&P.value[0]===`Jim`&&F.value.length===1&&F.value[0]===`London`?`btn-primary`:`btn-ghost`}`,onClick:()=>{P.value=[`Jim`],F.value=[`London`],re()},children:`Jim + London`}),O(`button`,{className:`btn btn-ghost btn-xs`,onClick:()=>{P.value=[],F.value=[],re()},children:`清空筛选`}),O(`button`,{className:`btn btn-ghost btn-xs`,onClick:()=>{P.value=[],F.value=[],I.value={columnKey:null,order:null},re()},children:`清空全部`}),D(`span`,{className:`opacity-70`,children:[`筛选：Name `,P.value.join(`, `)||`无`,` / Address`,` `,F.value.join(`, `)||`无`,`； 当前排序：`,se(),` / `,ce()]})]}),O(U,{className:`w-full`,columns:ne.value,dataSource:we,sortDirections:[`descend`,`ascend`],onChange:(e,t,n)=>{P.value=Array.isArray(t?.name)&&t.name.length>0?t.name:[],F.value=Array.isArray(t?.address)&&t.address.length>0?t.address:[];let r=Array.isArray(n)?n[0]:n;I.value={columnKey:r?.order?r?.columnKey??null:null,order:r?.order??null},re()}})]}),code:Le});v(()=>x(e,p,Ge))});let Ke=c(`rue:component:anchor`);g(p,Ke),_(()=>{let e=C(W,{title:`多列排序（优先级组合）`,summary:`补回多列优先级排序示例，支持 { compare, multiple } 并按优先级组合排序。`,tab:o,preview:()=>D(`div`,{className:`space-y-4 rounded-box border border-base-300 bg-base-100 p-4`,children:[D(`div`,{className:`flex flex-wrap gap-2 text-sm`,children:[O(`button`,{className:`btn btn-ghost btn-xs`,onClick:()=>le({chinese:`descend`,math:`descend`}),children:`语文 + 数学降序`}),O(`button`,{className:`btn btn-ghost btn-xs`,onClick:()=>le({chinese:`descend`,math:`descend`,english:`descend`}),children:`三科降序`}),O(`button`,{className:`btn btn-ghost btn-xs`,onClick:()=>le({chinese:`ascend`,english:`descend`}),children:`语文升序 + 英语降序`}),O(`button`,{className:`btn btn-ghost btn-xs`,onClick:()=>le({}),children:`清空排序`})]}),D(`div`,{className:`flex flex-wrap items-center gap-2 text-sm`,children:[K.map(e=>O(`button`,{className:`btn btn-xs ${L.value[e.key]?`btn-primary`:`btn-ghost`}`,onClick:()=>ue(e.key),children:de(e)},e.key)),D(`span`,{className:`opacity-70`,children:[`当前优先级：`,fe()]})]}),O(U,{className:`w-full`,columns:ae.value,dataSource:Ee,sortDirections:[`descend`,`ascend`],onChange:(e,t,n)=>{let r=Array.isArray(n)?n:n?.order?[n]:[];L.value=r.reduce((e,t)=>{let n=t?.columnKey,r=t?.order;return De(n)&&q(r)&&(e[n]=r),e},{}),V()}})]}),code:Re});v(()=>x(e,p,Ke))});let qe=c(`rue:component:anchor`);g(p,qe),_(()=>{let e=C(W,{title:`动态列显隐`,summary:`把基础的隐藏列示例 补回来，并用外部开关控制列可见性。`,tab:d,preview:()=>D(`div`,{className:`space-y-4 rounded-box border border-base-300 bg-base-100 p-4`,children:[O(`div`,{className:`flex flex-wrap gap-2 text-sm`,children:ke.map(e=>{let t=R.value.includes(e.key);return O(`button`,{className:`btn btn-xs ${t?`btn-primary`:`btn-ghost`}`,onClick:()=>pe(e.key),children:t?`隐藏 ${e.label}`:`显示 ${e.label}`},e.key)})}),O(U,{className:`w-full`,columns:ee.value,dataSource:Oe})]}),code:ze});v(()=>x(e,p,qe))});let Je=c(`rue:component:anchor`);g(p,Je),_(()=>{let e=C(W,{title:`选择模式`,summary:`展示多选、单选、禁用项、部分禁用几类示例，并增加选择列表头与回调展示。`,tab:y,preview:()=>D(`div`,{className:`grid gap-4 lg:grid-cols-2`,children:[D(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[D(`div`,{className:`mb-3 text-sm`,children:[`多选：当前 `,A.value.join(`, `)||`空`]}),O(U,{className:`w-full`,columns:[{title:`姓名`,dataIndex:`name`},{title:`团队`,dataIndex:`team`},{title:`状态`,dataIndex:`status`}],dataSource:G,rowSelection:{columnTitle:`成员`,selectedRowKeys:A.value,getCheckboxProps:e=>({disabled:e.status===`leave`}),onChange:e=>A.value=[...e]}})]}),D(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[D(`div`,{className:`mb-3 text-sm`,children:[`单选：当前 `,M.value[0]??`空`]}),O(U,{className:`w-full`,columns:[{title:`姓名`,dataIndex:`name`},{title:`城市`,dataIndex:`city`}],dataSource:G.slice(0,4),rowSelection:{type:`radio`,hideSelectAll:!0,selectedRowKeys:M.value,onChange:e=>M.value=[...e]}})]})]}),code:Be});v(()=>x(e,p,Je))});let Ye=c(`rue:component:anchor`);g(p,Ye),_(()=>{let e=C(W,{title:`展开、摘要与空态`,summary:`把展开行、按行点击展开、summary 和 emptyText 放在同一个业务场景里。`,tab:S,preview:()=>D(`div`,{className:`grid gap-4 lg:grid-cols-2`,children:[O(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:O(U,{className:`w-full`,columns:[{title:`姓名`,dataIndex:`name`},{title:`绩效`,dataIndex:`score`,align:`right`}],dataSource:G,expandable:{expandedRowKeys:te.value,expandRowByClick:!0,onExpandedRowsChange:e=>te.value=[...e],expandedRowRender:e=>D(`div`,{className:`text-sm leading-6`,children:[D(`div`,{children:[`团队：`,e.team]}),D(`div`,{children:[`地址：`,e.address]})]})},summary:e=>D(`div`,{className:`flex justify-between text-sm`,children:[D(`span`,{children:[`当前行数：`,e.length]}),D(`span`,{children:[`平均绩效：`,Math.round(e.reduce((e,t)=>e+t.score,0)/e.length)]})]})})}),O(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:O(U,{className:`w-full`,columns:[{title:`姓名`,dataIndex:`name`},{title:`团队`,dataIndex:`team`}],dataSource:[],emptyText:O(`span`,{className:`text-sm opacity-60`,children:`暂无成员，请先创建数据。`})})})]}),code:Ve});v(()=>x(e,p,Ye))});let X=c(`rue:component:anchor`);g(p,X),_(()=>{let e=C(W,{title:`滚动、标题、尾部与省略`,summary:`展示滚动、title/footer、ellipsis 和滚动容器类示例，并串成一个长表格布局场景。`,tab:T,preview:()=>O(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:O(U,{className:`w-full`,columns:ve,dataSource:G.concat(G).concat(G),scroll:{x:900,y:220,scrollToFirstRowOnChange:!0},title:e=>D(`div`,{className:`text-sm font-medium`,children:[`成员列表（当前页 `,e.length,` 行）`]}),footer:e=>O(`div`,{className:`text-sm opacity-70`,children:`展示了固定列、纵向滚动和 ellipsis。`})})}),code:He});v(()=>x(e,p,X))});let Xe=c(`rue:component:anchor`);g(p,Xe),_(()=>{let e=C(W,{title:`分组表头、隐藏列与单元格属性`,summary:`分组表头示例同时覆盖隐藏列、单元格 className/style 和操作列。`,tab:E,preview:()=>D(`div`,{className:`space-y-4 rounded-box border border-base-300 bg-base-100 p-4`,children:[D(`div`,{className:`flex flex-wrap gap-2 text-sm`,children:[O(`button`,{className:`btn btn-ghost btn-xs`,onClick:_e,children:z.value?`显示月薪列`:`隐藏月薪列`}),D(`span`,{children:[`最近操作：`,N.value]})]}),O(U,{className:`w-full`,columns:ge.value,dataSource:G,rowHoverable:!0,onRow:e=>({onClick:()=>N.value=`点击 ${e.name}`})})]}),code:Ue});v(()=>x(e,p,Xe))});let Ze=c(`rue:component:anchor`);g(p,Ze),_(()=>{let e=C(W,{title:`静态样式、Pinned Rows 与 Pinned Cols`,summary:`基础静态样式示例 仍然提供，适合不需要 columns/dataSource 时直接写结构。`,tab:k,preview:()=>D(`div`,{className:`grid gap-4 xl:grid-cols-2`,children:[O(`div`,{className:`h-72 overflow-auto rounded-box border border-base-300 bg-base-100 p-4`,children:D(U,{zebra:!0,pinRows:!0,className:`w-full min-w-[640px]`,children:[O(U.Head,{children:D(U.TR,{children:[O(U.TH,{children:`商品`}),O(U.TH,{children:`负责人`}),O(U.TH,{children:`渠道`}),O(U.TH,{className:`text-right`,children:`库存`}),O(U.TH,{className:`text-right`,children:`价格`})]})}),O(U.Body,{children:Se.map(e=>D(U.TR,{children:[O(U.TD,{children:e.item}),O(U.TD,{children:e.owner}),O(U.TD,{children:e.channel}),O(U.TD,{className:`text-right`,children:e.stock}),O(U.TD,{className:`text-right`,children:e.price})]},e.id))})]})}),O(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4 overflow-x-auto`,children:D(U,{pinCols:!0,className:`w-[980px]`,children:[O(U.Head,{children:D(U.TR,{children:[O(U.TH,{className:`bg-base-100`,children:`姓名`}),O(U.TH,{children:`岗位`}),O(U.TH,{children:`团队`}),O(U.TH,{children:`城市`}),O(U.TH,{className:`text-right`,children:`绩效`}),O(U.TH,{className:`text-right`,children:`访问`}),O(U.TH,{className:`text-right`,children:`月薪`}),O(U.TH,{children:`地址`})]})}),O(U.Body,{children:Ce.map(e=>D(U.TR,{children:[O(U.TH,{className:`bg-base-100`,children:e.name}),O(U.TD,{children:e.role}),O(U.TD,{children:e.team}),O(U.TD,{children:e.city}),O(U.TD,{className:`text-right`,children:e.score}),O(U.TD,{className:`text-right`,children:e.visits}),O(U.TD,{className:`text-right`,children:e.salary}),O(U.TD,{children:e.address})]},e.key))})]})})]}),code:We});v(()=>x(e,p,Ze))});let Qe=h(`h2`,p);g(p,Qe),n(Qe,`id`,`table-api`),g(Qe,f(`API`));let $e=h(`p`,p);g(p,$e),g($e,f(`当前页面只列出 Rue Table 当前最常用的配置项，优先对应实际使用场景。`));let et=h(`h3`,p);g(p,et),g(et,f(`Table`));let tt=c(`rue:component:anchor`);g(p,tt),_(()=>{let e=C(xe,{rows:je});v(()=>x(e,p,tt))});let nt=h(`h3`,p);g(p,nt),g(nt,f(`Column`));let rt=c(`rue:component:anchor`);g(p,rt),_(()=>{let e=C(xe,{rows:Me});v(()=>x(e,p,rt))});let it=h(`h3`,p);g(p,it),g(it,f(`rowSelection`));let at=c(`rue:component:anchor`);g(p,at),_(()=>{let e=C(xe,{rows:Ne});v(()=>x(e,p,at))});let ot=h(`h3`,p);g(p,ot),g(ot,f(`expandable`));let st=c(`rue:component:anchor`);g(p,st),_(()=>{let e=C(xe,{rows:Pe});v(()=>x(e,p,st))});let ct=h(`h2`,p);g(p,ct),g(ct,f(`FAQ`));let lt=h(`h3`,p);g(p,lt),g(lt,f(`数据驱动和静态结构怎么选？`));let ut=h(`p`,p);g(p,ut),g(ut,f(`需要排序、筛选、分页、选择、展开时优先使用`));let dt=h(`code`,ut);g(ut,dt),g(dt,f(`columns + dataSource`)),g(ut,f(`。只想快速输出结构化样式， 或需要完全手写表格结构时，可以使用复合组件写法即可。`));let ft=h(`h3`,p);g(p,ft),g(ft,f(`为什么筛选或排序后会回到第一页？`));let pt=h(`p`,p);g(p,pt),g(pt,f(`这是为了避免当前页在筛选后没有数据。如果你希望完全自行控制分页，把`));let Z=u(pt);g(pt,Z),a(Z,` `);let mt=h(`code`,pt);g(pt,mt),g(mt,f(`pagination.current`)),g(pt,f(`和`));let ht=h(`code`,pt);g(pt,ht),g(ht,f(`onChange`)),g(pt,f(`一起受控即可。`));let gt=h(`h3`,p);g(p,gt),g(gt,f(`固定列和 pinCols 的关系是什么？`));let Q=h(`p`,p);g(p,Q);let _t=h(`code`,Q);g(Q,_t),g(_t,f(`pinCols`)),g(Q,f(`负责启用 daisyUI 的固定列视觉能力，具体哪一列固定则由列上的`));let $=u(Q);g(Q,$),a($,` `);let vt=h(`code`,Q);g(Q,vt),g(vt,f(`fixedCol`)),g(Q,f(`或`));let yt=h(`code`,Q);g(Q,yt),g(yt,f(`fixed`)),g(Q,f(`控制。静态结构写法中，通常把固定列单元格写成`));let bt=u(Q);g(Q,bt),a(bt,` `);let xt=h(`code`,Q);return g(Q,xt),g(xt,f(`TH`)),g(Q,f(`会更自然。`)),t})}),p,m),p})};export{J as default};