import{Bt as e,Ct as t,Dt as n,E as r,F as i,H as a,Ht as o,I as s,Jt as c,Qt as l,St as u,U as d,Ut as f,V as p,Vt as m,Wt as h,Y as g,_n as _,_t as v,en as y,f as b,fn as x,g as S,gn as C,gt as w,h as T,hn as E,ht as D,in as O,m as k,mn as A,p as j,pn as M,qt as N,sn as P,st as F,tt as I,u as L,vn as R,vt as z,yn as B,yt as V,zt as H}from"./rue-runtime-Cv6BZekS.js";import{t as U}from"./Code-BzFVdc3U.js";import{t as W}from"./tabs-vLOp20OU.js";import{t as G}from"./dropdown-iNF98Oz4.js";import{r as ee}from"./SidebarPlaygroundDesign-CoDFHXQl.js";var K=B(`<table><!--rue:text-hole:0--></table>`),te=B(`<div class="flex items-center gap-2"><!--rue:opaque-hole:0--><span><!--rue:text-hole:1--></span></div>`),ne=B(`<span>rue:direct-text</span>`),re=B(`<th><!--rue:opaque-hole:0--></th>`),q=B(`<td><!--rue:opaque-hole:0--></td>`),ie=B(`<tr><!--rue:text-hole:0--><!--rue:text-hole:1--><!--rue:text-hole:2--></tr>`),ae=B(`<tr><td><!--rue:opaque-hole:0--></td></tr>`),oe=B(`<span><span>▲</span><span>▼</span></span>`),se=B(`<div class="w-56 rounded-box border border-base-content/10 bg-base-100 p-3 shadow-xl"><!--rue:text-hole:0--><!--rue:text-hole:1--><div class="max-h-56 space-y-2 overflow-auto"><!--rue:text-hole:2--><!--rue:text-hole:3--></div><!--rue:text-hole:4--></div>`),ce=B(`<div class="relative flex items-center gap-2"><span>rue:direct-text</span><!--rue:text-hole:1--><!--rue:text-hole:2--></div>`),le=B(`<th><!--rue:text-hole:0--></th>`),ue=B(`<label><input></label>`),de=B(`<th><div><!--rue:opaque-hole:0--><!--rue:text-hole:1--></div></th>`),fe=B(`<td><div><!--rue:opaque-hole:0--><!--rue:text-hole:1--></div></td>`),pe=B(`<button><!--rue:text-hole:0--></button>`),me=B(`<div><button class="btn btn-ghost btn-xs">Prev</button><!--rue:text-hole:0--><button class="btn btn-ghost btn-xs">Next</button></div>`),he=B(`<label><input type="checkbox" class="checkbox"></label>`),ge=B(`<div><!--rue:text-hole:0--><!--rue:text-hole:1--><table><!--rue:text-hole:2--><tbody><!--rue:text-hole:3--><!--rue:text-hole:4--></tbody><!--rue:text-hole:5--></table><!--rue:text-hole:6--><!--rue:text-hole:7--></div>`),_e=B(`<table></table>`),ve=B(`<thead><!--rue:text-hole:0--></thead>`),ye=B(`<tbody><!--rue:text-hole:0--></tbody>`),be=B(`<tfoot><!--rue:text-hole:0--></tfoot>`),xe=B(`<tr><!--rue:text-hole:0--></tr>`),Se=B(`<td><!--rue:text-hole:0--></td>`),Ce=0,we={emptyText:`No Data`,filterConfirm:`应用`,filterReset:`重置`,triggerAsc:`切换为升序`,triggerDesc:`切换为降序`,cancelSort:`取消排序`},Te=(e,t)=>{if(t){if(Array.isArray(t)){let n=e;for(let e of t){if(n==null)return;n=n[e]}return n}return e?.[t]}},Ee=e=>e===`right`?`text-right`:e===`center`?`text-center`:`text-left`,J=(...e)=>e.filter(Boolean).join(` `).trim()||void 0,Y=(...e)=>{let t;return e.forEach(e=>{e&&(t=t?{...t,...e}:{...e})}),t},De=e=>e==null||e===!1?[]:Array.isArray(e)?[...e]:typeof e!=`string`&&typeof e?.[Symbol.iterator]==`function`?Array.from(e):[e],Oe=(e,t)=>e.key?e.key:typeof e.dataIndex==`string`?e.dataIndex:Array.isArray(e.dataIndex)&&e.dataIndex.length>0?e.dataIndex.join(`.`):`column-${t.join(`-`)}`,ke=e=>(e.children??[]).filter(e=>!e.hidden),Ae=e=>e.reduce((e,t)=>{if(t.hidden)return e;let n=ke(t);return n.length===0?e+1:e+Ae(n)},0),je=e=>{let t=1;return e.forEach(e=>{if(e.hidden)return;let n=ke(e);n.length>0&&(t=Math.max(t,1+je(n)))}),t},Me=(e,t=[])=>{let n=[];return e.forEach((e,r)=>{if(e.hidden)return;let i=[...t,r],a=ke(e);if(a.length>0){n.push(...Me(a,i));return}n.push({column:e,indexPath:i,key:Oe(e,i)})}),n},Ne=e=>{let t=e.filter(e=>!e.hidden),n=je(t),r=Array.from({length:n},()=>[]),i=(e,t,a=[])=>{e.forEach((e,o)=>{if(e.hidden)return;let s=[...a,o],c=ke(e),l=c.length>0?Ae(c):1,u=e.colSpan??l;if(u===0)return;let d=e.rowSpan??(c.length>0?1:n-t);r[t].push({column:e,index:o,key:Oe(e,s),colSpan:u,rowSpan:d}),c.length>0&&i(c,t+1,s)})};return i(t,0),r},Pe=e=>!!(e.fixedCol||e.fixed===!0||e.fixed===`left`||e.fixed===`start`),Fe=e=>typeof e==`object`&&!!e,Ie=e=>{if(Fe(e.sorter))return e.sorter.multiple},Le=e=>(Array.isArray(e)?e:typeof e?.get==`function`?e.get():[]).filter(e=>!!e?.order).sort((e,t)=>{let n=e.multiple??0,r=t.multiple??0;return n===r?0:r-n}),Re=e=>{let t=Le(e.filter(e=>e.column.sortOrder!==void 0).map(e=>({key:e.key,order:e.column.sortOrder,multiple:Ie(e.column)})));return t.length>0?t:Le(e.filter(e=>!!e.column.defaultSortOrder).map(e=>({key:e.key,order:e.column.defaultSortOrder,multiple:Ie(e.column)})))},ze=e=>{let t={};return e.forEach(({column:e,key:n})=>{if(e.filteredValue!==void 0){t[n]=De(e.filteredValue);return}e.defaultFilteredValue!==void 0&&(t[n]=De(e.defaultFilteredValue))}),t},Be=(e,t)=>e<=1?1:e>=t?t:e,Ve=e=>typeof e==`number`?`${e}px`:e,He=e=>{switch(e){case`small`:return`table-sm`;case`middle`:return`table-md`;case`large`:return`table-lg`;case`xs`:case`sm`:case`md`:case`lg`:case`xl`:return`table-${e}`;default:return}},Ue=e=>({...we,...e}),We=(e,t)=>typeof e==`function`?e({props:t})??{}:e??{},Ge=e=>e?e===!0||e.showTitle!==!1:!1,Ke=e=>{switch(e){case`topLeft`:return`topStart`;case`topCenter`:return`topCenter`;case`topRight`:return`topEnd`;case`bottomLeft`:return`bottomStart`;case`bottomCenter`:return`bottomCenter`;case`bottomRight`:return`bottomEnd`;default:return`none`}},qe=e=>e==null||e===!1?[]:(e.placement?.length?e.placement:e.position?.length?e.position.map(Ke):[`bottomEnd`]).filter((e,t,n)=>e===`none`?n.length===1:n.indexOf(e)===t),Je=e=>{switch(e){case`topStart`:case`bottomStart`:return`justify-start`;case`topCenter`:case`bottomCenter`:return`justify-center`;default:return`justify-end`}},Ye=(e,t)=>{let n=e?.[t];return Array.isArray(n)?n:[]},Xe=e=>typeof e==`function`&&(e.kind===`block-factory`||e.length===3),Ze=(t,n,i)=>{let a=z(w(t,`data`)),s=z(w(t,`render`));return d(o(()=>typeof s.get()==`function`?Xe(s.get())?{__rue_compiled_branch_key:1,create:()=>p(r,()=>({source:{children:s.get()},props:a.get()}))}:{__rue_compiled_branch_key:2,create:()=>h(t=>{let n=A(),r=M(`rue:slot:anchor`);x(n,r),e({parent:n,before:r},()=>H(s.get()(a.get())),()=>({}));let i=C(``),o=C(``);return n.insertBefore(i,n.firstChild),n.appendChild(o),[n.firstChild,n.lastChild]})}:{__rue_compiled_branch_key:0,create:()=>V(e=>{let t=A();return[t.firstChild,t.lastChild]})}),e=>y(()=>{a.set(e.data),s.set(e.render)}),()=>v(t))},Qe=(t,n,i)=>{let a=z(w(t,`expanded`)),s=z(w(t,`indent`)),c=z(w(t,`index`)),l=z(w(t,`record`)),u=z(w(t,`render`));return d(o(()=>typeof u.get()==`function`?Xe(u.get())?{__rue_compiled_branch_key:1,create:()=>p(r,()=>({source:{children:u.get()},props:l.get()}))}:{__rue_compiled_branch_key:2,create:()=>h(t=>{let n=A(),r=M(`rue:slot:anchor`);x(n,r),e({parent:n,before:r},()=>H(u.get()(l.get(),c.get(),s.get(),a.get())),()=>({}));let i=C(``),o=C(``);return n.insertBefore(i,n.firstChild),n.appendChild(o),[n.firstChild,n.lastChild]})}:{__rue_compiled_branch_key:0,create:()=>V(e=>{let t=A();return[t.firstChild,t.lastChild]})}),e=>y(()=>{a.set(e.expanded),s.set(e.indent),c.set(e.index),l.set(e.record),u.set(e.render)}),()=>v(t))},$e=(t,n,i)=>{let a=z(w(t,`value`));return d(o(()=>Xe(a.get())?{__rue_compiled_branch_key:0,create:()=>p(r,()=>({source:{children:a.get()}}))}:{__rue_compiled_branch_key:1,create:()=>h(t=>{let n=A(),r=M(`rue:compiled-slot`);x(n,r),e({parent:n,before:r},()=>H(a.get()),()=>({}));let i=C(``),o=C(``);return n.insertBefore(i,n.firstChild),n.appendChild(o),[n.firstChild,n.lastChild]})}),e=>y(()=>{a.set(e.value)}),()=>v(t))},et=(t,n,i)=>{let a=z(w(t,`data`)),s=z(w(t,`info`)),c=z(w(t,`render`));return d(o(()=>Xe(c.get())?{__rue_compiled_branch_key:0,create:()=>p(r,()=>({source:{children:c.get()},props:a.get()}))}:{__rue_compiled_branch_key:1,create:()=>h(t=>{let n=A(),r=M(`rue:slot:anchor`);x(n,r),e({parent:n,before:r},()=>H(c.get()(a.get(),s.get())),()=>({}));let i=C(``),o=C(``);return n.insertBefore(i,n.firstChild),n.appendChild(o),[n.firstChild,n.lastChild]})}),e=>y(()=>{a.set(e.data),s.set(e.info),c.set(e.render)}),()=>v(t))},tt=e=>{let t=typeof e;return t===`string`||t===`number`},X=Object.assign((n,r,g)=>{let _=c(`useSetup:0:0`,()=>{let e=I(()=>Ue(w(v(n),`locale`)));e.get();let t=e,r=I(()=>We(w(v(n),`classNames`),v(n)));r.get();let i=r,a=I(()=>We(w(v(n),`styles`),v(n)));a.get();let o=a,s=I(()=>typeof w(v(n),`loading`)==`object`?{spinning:w(v(n),`loading`).spinning!==!1,tip:w(v(n),`loading`).tip}:{spinning:!!w(v(n),`loading`),tip:void 0});s.get();let c=s,l=w(v(n),`expandable`)?.childrenColumnName??`children`,u=w(v(n),`expandable`)?.indentSize??15,d=w(v(n),`expandable`)?.expandedRowFormatter??w(v(n),`expandable`)?.expandedRowRender,f=(e,t)=>(typeof(w(v(n),`rowKey`)??`key`)==`function`?(w(v(n),`rowKey`)??`key`)(e):e?.[w(v(n),`rowKey`)??`key`])??t,p=(e,t=[])=>e.flatMap((e,n)=>{let r=[...t,n],i=f(e,`row-${r.join(`-`)}`),a=Ye(e,l);return a.length===0?[]:[i,...p(a,r)]}),m=`table`,h=I(()=>He(w(v(n),`size`)));h.get();let g=h;g.get()&&(m+=` ${g.get()}`),w(v(n),`zebra`)&&(m+=` table-zebra`),(w(v(n),`pinRows`)||w(v(n),`sticky`))&&(m+=` table-pin-rows`),w(v(n),`pinCols`)&&(m+=` table-pin-cols`),w(v(n),`bordered`)&&(m+=` border-separate border-spacing-0`),i.get().table&&(m+=` ${i.get().table}`),w(v(n),`className`)&&(m+=` ${w(v(n),`className`)}`);let _=I(()=>w(v(n),`children`)!=null);return _.get(),{localeText:e,__rue_phase2_localeText:t,semanticClasses:r,__rue_phase2_semanticClasses:i,semanticStyles:a,__rue_phase2_semanticStyles:o,loadingConfig:s,__rue_phase2_loadingConfig:c,childrenColumnName:l,indentSize:u,expandedRowRender:d,getRecordKey:f,collectExpandedKeys:p,sizeClass:h,__rue_phase2_sizeClass:g,hasChildren:_,__rue_phase2_hasChildren:_,cls:m}}),{localeText:S,__rue_phase2_localeText:k,semanticClasses:R,__rue_phase2_semanticClasses:B,semanticStyles:U,__rue_phase2_semanticStyles:W,loadingConfig:ee,__rue_phase2_loadingConfig:ve,childrenColumnName:ye,indentSize:be,expandedRowRender:xe,getRecordKey:Se,collectExpandedKeys:we,sizeClass:Oe,__rue_phase2_sizeClass:Ae,hasChildren:je,__rue_phase2_hasChildren:Ke}=_,{cls:Xe}=_;if(Ke.get())return h(t=>{let r=K().content.cloneNode(!0).firstChild,i=r,a=r.childNodes[0],o=a.parentNode,s;O(()=>{let e=Xe,t=e===!1||e==null?``:String(e);Object.is(s,t)||(s=t,i.setAttribute(`class`,t))});let c;return O(()=>{let e=W.get().table,t=u(e);Object.is(c,t)||(c=t,i.style.cssText=t)}),e({parent:o,before:a},()=>((e,t)=>(n,r,i)=>H(w(e,t))(n,r,i))(v(n),`children`),()=>({})),[r,r]});let X=Array.isArray(w(n,`columns`))?Me(w(n,`columns`)??[]):[],nt=F(`rue-table-${Ce++}`),rt=F(Re(X)),it=e=>{rt.value=typeof e==`function`?e(rt.value):e},at=F(ze(X)),ot=e=>{at.value=typeof e==`function`?e(at.value):e},st=F({}),ct=e=>{st.value=typeof e==`function`?e(st.value):e},lt=F({}),ut=e=>{lt.value=typeof e==`function`?e(lt.value):e},dt={value:null},ft={value:null},pt=F(0),mt=e=>{pt.value=typeof e==`function`?e(pt.value):e},ht=F(w(v(n),`rowSelection`)?.defaultSelectedRowKeys?[...w(v(n),`rowSelection`).defaultSelectedRowKeys]:[]),gt=e=>{ht.value=typeof e==`function`?e(ht.value):e},_t=I(()=>w(v(n),`pagination`)!=null&&w(v(n),`pagination`)!==!1?w(v(n),`pagination`):void 0);_t.get();let Z=_t,vt=F(Z.get()?Z.get().current??Z.get().defaultCurrent??1:1),yt=e=>{vt.value=typeof e==`function`?e(vt.value):e},bt=F(Z.get()?Z.get().pageSize??Z.get().defaultPageSize??10:Math.max(w(v(n),`dataSource`)?.length??0,1)),xt=F(w(v(n),`expandable`)?.defaultExpandedRowKeys?[...w(v(n),`expandable`).defaultExpandedRowKeys]:w(v(n),`expandable`)?.defaultExpandAllRows&&Array.isArray(w(v(n),`dataSource`))?w(v(n),`dataSource`).flatMap((e,t)=>{let n=Se(e,`row-${t}`),r=Ye(e,ye);return xe||r.length>0?[n,...we(r,[t])]:[]}):[]),St=e=>{xt.value=typeof e==`function`?e(xt.value):e};if(Array.isArray(w(n,`columns`))&&Array.isArray(w(v(n),`dataSource`))){let r=(r,d,g)=>{let{renderBodyCell:_,expandableState:y,__rue_phase2_expandableState:D,rowProps:k,rowPropClassName:F,rowPropStyle:L,rowClickHandler:R,restRowProps:U,baseRowClassName:G,__rue_phase2_baseRowClassName:ee,hoverClassName:K,mergedRowClick:oe,showExpandedRow:se,__rue_phase2_showExpandedRow:ce,expandedRowClassName:le,__rue_phase2_expandedRowClassName:ue}=c(`useSetup:0:0`,()=>{let a=(a,f,_)=>{let{value:y,__rue_phase2_value:b,rendered:x,__rue_phase2_rendered:S,cellProps:T,__rue_phase2_cellProps:E,cellPropClassName:D,cellPropStyle:k,restCellProps:j,colSpan:M,__rue_phase2_colSpan:N,rowSpan:P,__rue_phase2_rowSpan:F}=c(`useSetup:0:0`,()=>{let e=I(()=>Te(w(r,`record`),w(a,`column`).dataIndex));e.get();let t=e,n=I(()=>w(a,`column`).formatter?w(a,`column`).formatter(t.get(),w(r,`record`),v(d)):t.get());n.get();let i=n,o=I(()=>w(a,`column`).onCell&&w(a,`column`).onCell(w(r,`record`),v(d))||{});o.get();let s=o,{className:c,style:l,...u}=s.get(),f=I(()=>s.get().colSpan??1);f.get();let p=f,m=I(()=>s.get().rowSpan??1);return m.get(),{value:e,__rue_phase2_value:t,rendered:n,__rue_phase2_rendered:i,cellProps:o,__rue_phase2_cellProps:s,cellPropClassName:c,cellPropStyle:l,restCellProps:u,colSpan:f,__rue_phase2_colSpan:p,rowSpan:m,__rue_phase2_rowSpan:m}});if(N.get()===0||F.get()===0)return V(e=>{let t=A();return[t.firstChild,t.lastChild]});let L=I(()=>!Ot&&v(f)===0);L.get();let R=L,z=I(()=>w(a,`column`).rowScope||w(v(n),`pinCols`)&&Pe(w(a,`column`))?`th`:`td`);z.get();let H=I(()=>J(B.get().cell,Ee(w(a,`column`).align),w(a,`column`).className,w(a,`column`).ellipsis?`truncate`:void 0,D));H.get();let U=I(()=>Y(W.get().cell,w(a,`column`).width||w(a,`column`).minWidth?{...w(a,`column`).width?{width:w(a,`column`).width}:{},...w(a,`column`).minWidth?{minWidth:w(a,`column`).minWidth}:{}}:void 0,R.get()&&w(r,`indent`)>0?{paddingLeft:`${w(r,`indent`)*be}px`}:void 0,k));U.get();let G=I(()=>w(a,`column`).ellipsis&&Ge(w(a,`column`).ellipsis)&&tt(S.get())?String(S.get()):void 0);G.get();let ee=(t,n,c)=>o(()=>R.get()?{__rue_compiled_branch_key:0,create:()=>h(t=>{let n=te().content.cloneNode(!0).firstChild,i=n.childNodes[1],o=n.childNodes[0],s=o.parentNode,c=n.childNodes[1].childNodes[0],u=c.parentNode,f;O(()=>{let e=w(a,`column`).ellipsis?`truncate`:void 0,t=e===!1||e==null?``:String(e);Object.is(f,t)||(f=t,i.setAttribute(`class`,t))});let h=(e,t,n)=>{let i=()=>p(_n,()=>({arg0:v(r),arg1:v(d),arg2:g.get()}));return e==null?i():m(e,n,i)},_=o.nextSibling;s.removeChild(o),e({parent:s,before:_},()=>h,()=>({}));let y=C(``);return u.insertBefore(y,c),u.removeChild(c),l(y,()=>String(S.get()??``)),[n,n]})}:{__rue_compiled_branch_key:1,create:()=>i(e=>{let t=ne().content.cloneNode(!0).firstChild,n=t.childNodes[0];return n.parentNode,s(n,()=>String(S.get()??``)),[t,t]})});return z.get()===`th`?h(n=>{let i=re().content.cloneNode(!0).firstChild,o=i,s=i.childNodes[0],c=s.parentNode,l;O(()=>{let e=H.get(),t=e===!1||e==null?``:String(e);Object.is(l,t)||(l=t,o.setAttribute(`class`,t))});let d;O(()=>{let e=U.get(),t=u(e);Object.is(d,t)||(d=t,o.style.cssText=t)});let f;O(()=>{let e=G.get();Object.is(f,e)||(f=e,e==null||e===!1?o.removeAttribute(`title`):o.setAttribute(`title`,String(e)))});let h;O(()=>{let e=M.get();Object.is(h,e)||(h=e,e==null||e===!1?o.removeAttribute(`colSpan`):o.setAttribute(`colSpan`,String(e)))});let g;O(()=>{let e=P.get();Object.is(g,e)||(g=e,e==null||e===!1?o.removeAttribute(`rowSpan`):o.setAttribute(`rowSpan`,String(e)))});let _;O(()=>{let e=w(a,`column`).rowScope;Object.is(_,e)||(_=e,e==null||e===!1?o.removeAttribute(`scope`):o.setAttribute(`scope`,String(e)))});let v;O(()=>{let e=L.get()&&w(r,`indent`)>0?String(w(r,`indent`)):void 0;Object.is(v,e)||(v=e,e==null?o.removeAttribute(`data-rue-table-indent`):o.setAttribute(`data-rue-table-indent`,String(e)))}),t(o,()=>j,[`__rue_static_template_id__`]);let y=(e,t,n)=>{let r=()=>p(ee,()=>({}));return e==null?r():m(e,n,r)},b=s.nextSibling;return c.removeChild(s),e({parent:c,before:b},()=>y,()=>({})),[i,i]}):h(n=>{let i=q().content.cloneNode(!0).firstChild,o=i,s=i.childNodes[0],c=s.parentNode,l;O(()=>{let e=H.get(),t=e===!1||e==null?``:String(e);Object.is(l,t)||(l=t,o.setAttribute(`class`,t))});let d;O(()=>{let e=U.get(),t=u(e);Object.is(d,t)||(d=t,o.style.cssText=t)});let f;O(()=>{let e=G.get();Object.is(f,e)||(f=e,e==null||e===!1?o.removeAttribute(`title`):o.setAttribute(`title`,String(e)))});let h;O(()=>{let e=M.get();Object.is(h,e)||(h=e,e==null||e===!1?o.removeAttribute(`colSpan`):o.setAttribute(`colSpan`,String(e)))});let g;O(()=>{let e=P.get();Object.is(g,e)||(g=e,e==null||e===!1?o.removeAttribute(`rowSpan`):o.setAttribute(`rowSpan`,String(e)))});let _;O(()=>{let e=w(a,`column`).rowScope;Object.is(_,e)||(_=e,e==null||e===!1?o.removeAttribute(`scope`):o.setAttribute(`scope`,String(e)))});let v;O(()=>{let e=L.get()&&w(r,`indent`)>0?String(w(r,`indent`)):void 0;Object.is(v,e)||(v=e,e==null?o.removeAttribute(`data-rue-table-indent`):o.setAttribute(`data-rue-table-indent`,String(e)))}),t(o,()=>j,[`__rue_static_template_id__`]);let y=(e,t,n)=>{let r=()=>p(ee,()=>({}));return e==null?r():m(e,n,r)},b=s.nextSibling;return c.removeChild(s),e({parent:c,before:b},()=>y,()=>({})),[i,i]})},f=I(()=>Xt(v(r),v(d)));f.get();let g=f,_=w(v(n),`onRow`)&&w(v(n),`onRow`)(w(r,`record`),v(d))||{},{className:y,style:b,onClick:x,...S}=_,T=I(()=>typeof w(v(n),`rowClassName`)==`function`?w(v(n),`rowClassName`)(w(r,`record`),v(d)):``);T.get();let E=T,D=w(v(n),`rowHoverable`)??!1?w(v(n),`rowHoverClass`)||`hover:bg-base-200`:``,k=e=>{x&&x(e),!(!w(v(n),`expandable`)?.expandRowByClick||!g.get().enabled)&&((e?.target)?.closest(`button, input, a, label`)||Zt(v(r),v(d)))},j=I(()=>Dt&&g.get().hasExpandedRowRender&&g.get().expanded);j.get();let M=j,N=I(()=>M.get()?typeof w(v(n),`expandable`)?.expandedRowClassName==`function`?w(v(n),`expandable`).expandedRowClassName(w(r,`record`),v(d),w(r,`indent`)):w(v(n),`expandable`)?.expandedRowClassName:void 0);return N.get(),{renderBodyCell:a,expandableState:f,__rue_phase2_expandableState:g,rowProps:_,rowPropClassName:y,rowPropStyle:b,rowClickHandler:x,restRowProps:S,baseRowClassName:T,__rue_phase2_baseRowClassName:E,hoverClassName:D,mergedRowClick:k,showExpandedRow:j,__rue_phase2_showExpandedRow:M,expandedRowClassName:N,__rue_phase2_expandedRowClassName:N}});return h(i=>{let s=A(),c=ie().content.cloneNode(!0),l=c.firstChild,g=l,D=l.childNodes[0],k=D.parentNode,I=l.childNodes[1],R=I.parentNode,ee=l.childNodes[2],te=ee.parentNode;s.appendChild(c);let ne;O(()=>{let e=String(w(r,`key`));Object.is(ne,e)||(ne=e,e==null?g.removeAttribute(`data-rue-table-row-key`):g.setAttribute(`data-rue-table-row-key`,String(e)))}),t(g,()=>U,[`onClick`,`className`,`style`,`__rue_static_template_id__`]);let re=e=>{let t=oe;typeof t==`function`&&t(e)};g.addEventListener(`click`,re),P(()=>g.removeEventListener(`click`,re));let q;O(()=>{let e=J(B.get().bodyRow,F,G.get(),K),t=e===!1||e==null?``:String(e);Object.is(q,t)||(q=t,g.setAttribute(`class`,t))});let ce;O(()=>{let e=Y(W.get().bodyRow,L),t=u(e);Object.is(ce,t)||(ce=t,g.style.cssText=t)}),f(k,D,()=>Ot?{__rue_compiled_branch_key:!0,create:()=>h(e=>{let t=E(`td`,e),i;O(()=>{let e=J(B.get().cell,Ee(`center`)),n=e===!1||e==null?``:String(e);Object.is(i,n)||(i=n,t.setAttribute(`class`,n))});let o;return O(()=>{let e=Y(W.get().cell,w(v(n),`expandable`)?.columnWidth?{width:w(v(n),`expandable`).columnWidth}:void 0,w(r,`indent`)>0?{paddingLeft:`${w(r,`indent`)*be}px`}:void 0),i=u(e);Object.is(o,i)||(o=i,t.style.cssText=i)}),a(t,_n,()=>({arg0:v(r),arg1:v(d),arg2:y.get()})),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>V(e=>{let t=A();return[t.firstChild,t.lastChild]})}),f(R,I,()=>Et?{__rue_compiled_branch_key:!0,create:()=>p(gn,()=>({arg0:v(r),arg1:v(d)}))}:{__rue_compiled_branch_key:!1,create:()=>V(e=>{let t=A();return[t.firstChild,t.lastChild]})});let ue=[];N(()=>{let t=S.get()||[];ue=T(te,ee,ue,t,(e,t)=>t,(t,n)=>{let r=z(t),i=z(n);return j((t,n,a)=>m(t,a,()=>h(t=>{let n=A(),a=M(`rue:row-call`);x(n,a),e({parent:n,before:a},()=>((e,t)=>(n,r,i)=>H(_(e,t))(n,r,i))(r.get(),i.get()),()=>({}));let o=C(``),s=C(``);return n.insertBefore(o,n.firstChild),n.appendChild(s),[n.firstChild,n.lastChild]})),(e,a)=>{t=e,n=a,r.set(e),i.set(a)},void 0)},!0,!1)}),P(()=>b(ue)),o(()=>se.get()?{__rue_compiled_branch_key:!0,create:()=>h(t=>{let n=ae().content.cloneNode(!0).firstChild,i=n,a=n.childNodes[0],o=n.childNodes[0].childNodes[0],s=o.parentNode,c;O(()=>{let e=le.get(),t=e===!1||e==null?``:String(e);Object.is(c,t)||(c=t,i.setAttribute(`class`,t))});let l;O(()=>{let e=At;Object.is(l,e)||(l=e,e==null||e===!1?a.removeAttribute(`colSpan`):a.setAttribute(`colSpan`,String(e)))});let u=(e,t,n)=>{let i=()=>p(Qe,()=>({render:xe,record:w(r,`record`),index:v(d),indent:w(r,`indent`),expanded:!0}));return e==null?i():m(e,n,i)},f=o.nextSibling;return s.removeChild(o),e({parent:s,before:f},()=>u,()=>({})),[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>V(e=>{let t=A();return[t.firstChild,t.lastChild]})}).__rue_compiled_mount(s);let de=C(``),fe=C(``);return s.insertBefore(de,s.firstChild),s.appendChild(fe),[s.firstChild,s.lastChild]})},g=(r,i,s)=>{let{headerRowProps:l,headerRowClassName:d,headerRowStyle:g,restHeaderRowProps:y}=c(`useSetup:0:0`,()=>{let e=w(v(n),`onHeaderRow`)&&w(v(n),`onHeaderRow`)(D(w(r,`map`),r,[e=>e.column]),v(i))||{},{className:t,style:a,...o}=e;return{headerRowProps:e,headerRowClassName:t,headerRowStyle:a,restHeaderRowProps:o}});return h(s=>{let c=ie().content.cloneNode(!0).firstChild,l=c,S=c.childNodes[0],C=S.parentNode,D=c.childNodes[1],k=D.parentNode,F=c.childNodes[2],I=F.parentNode,L;O(()=>{let e=J(B.get().headerRow,d),t=e===!1||e==null?``:String(e);Object.is(L,t)||(L=t,l.setAttribute(`class`,t))});let R;O(()=>{let e=Y(W.get().headerRow,g),t=u(e);Object.is(R,t)||(R=t,l.style.cssText=t)}),t(l,()=>y,[`__rue_static_template_id__`]),f(C,S,()=>v(i)===0&&Ot?{__rue_compiled_branch_key:!0,create:()=>h(t=>{let r=E(`th`,t),i;O(()=>{let e=_.get().length;Object.is(i,e)||(i=e,e==null||e===!1?r.removeAttribute(`rowSpan`):r.setAttribute(`rowSpan`,String(e)))});let a;O(()=>{let e=J(B.get().headerCell,Ee(`center`)),t=e===!1||e==null?``:String(e);Object.is(a,t)||(a=t,r.setAttribute(`class`,t))});let o;O(()=>{let e=Y(W.get().headerCell,w(v(n),`expandable`)?.columnWidth?{width:w(v(n),`expandable`).columnWidth}:void 0),t=u(e);Object.is(o,t)||(o=t,r.style.cssText=t)});let s=M(`rue:compiled-slot`);return x(r,s),e({parent:r,before:s},()=>H(w(v(n),`expandable`)?.columnTitle??``),()=>({})),[r,r]})}:{__rue_compiled_branch_key:!1,create:()=>V(e=>{let t=A();return[t.firstChild,t.lastChild]})}),f(k,D,()=>v(i)===0&&Et?{__rue_compiled_branch_key:!0,create:()=>h(t=>{let r=E(`th`,t),i;O(()=>{let e=_.get().length;Object.is(i,e)||(i=e,e==null||e===!1?r.removeAttribute(`rowSpan`):r.setAttribute(`rowSpan`,String(e)))});let s;O(()=>{let e=J(B.get().headerCell,Ee(Tt)),t=e===!1||e==null?``:String(e);Object.is(s,t)||(s=t,r.setAttribute(`class`,t))});let c;O(()=>{let e=Y(W.get().headerCell,w(v(n),`rowSelection`)?.columnWidth?{width:w(v(n),`rowSelection`).columnWidth}:void 0),t=u(e);Object.is(c,t)||(c=t,r.style.cssText=t)});let l=E(`div`,r);x(r,l);let d;return O(()=>{let e=J(`inline-flex items-center gap-2`,w(v(n),`rowSelection`)?.titleClassName),t=e===!1||e==null?``:String(e);Object.is(d,t)||(d=t,l.setAttribute(`class`,t))}),a(l,En,()=>({})),o(()=>w(v(n),`rowSelection`)?.columnTitle?{__rue_compiled_branch_key:!0,create:()=>h(t=>{let r=E(`span`,t),i=M(`rue:compiled-slot`);return x(r,i),e({parent:r,before:i},()=>H(w(v(n),`rowSelection`).columnTitle),()=>({})),[r,r]})}:{__rue_compiled_branch_key:!1,create:()=>V(e=>{let t=A();return[t.firstChild,t.lastChild]})}).__rue_compiled_mount(l),[r,r]})}:{__rue_compiled_branch_key:!1,create:()=>V(e=>{let t=A();return[t.firstChild,t.lastChild]})});let U=[];return N(()=>{let e=v(r)||[];U=T(I,F,U,e,(e,t)=>e.key,(e,t)=>{let n=z(e);return j((e,t,r)=>{let a=()=>p(hn,()=>({meta:n.get(),level:v(i)}));return e==null?a():m(e,r,a)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),P(()=>b(U)),[c,c]})},_=I(()=>Ne(w(n,`columns`)??[])),S=I(()=>Me(w(n,`columns`)??[])),F=I(()=>new Map(S.get().map(e=>[e.key,e]))),R=()=>{mt(e=>e+1)},U=I(()=>{let e=S.get();return e.some(e=>e.column.sortOrder!==void 0)?Re(e):Le([...rt.value])}),ee=I(()=>new Map(U.get().map(e=>[e.key,e]))),K=I(()=>S.get().reduce((e,t)=>{let n=t.column.filteredValue;return n===void 0?(e[t.key]=De(at.value[t.key]),e):(e[t.key]=De(n),e)},{})),_e=e=>{let t={};return Object.keys(e).forEach(n=>{Array.isArray(e[n])&&e[n].length>0&&(t[n]=[...e[n]])}),t},Ce=I(()=>_e(K.get())),we=e=>typeof e.sorter==`function`?e.sorter:Fe(e.sorter)&&typeof e.sorter.compare==`function`?e.sorter.compare:(t,n)=>{let r=Te(t,e.dataIndex),i=Te(n,e.dataIndex);return r==null&&i==null?0:r==null?-1:i==null||r>i?1:r<i?-1:0},Oe=(e,t,n)=>{for(let r of Le(n)){let n=F.get().get(r.key);if(!n?.column.sorter)continue;let i=we(n.column),a=r.order===`ascend`?i(e,t):-i(e,t);if(a!==0)return a}return 0},Ae=(e,t)=>S.get().every(n=>{let r=t[n.key]??[];if(!Array.isArray(r)||r.length===0)return!0;let i=n.column.filterCombine??`or`;if(n.column.onFilter)return i===`and`?r.every(t=>n.column.onFilter(t,e)):r.some(t=>n.column.onFilter(t,e));let a=Te(e,n.column.dataIndex);return i===`and`?r.every(e=>e===a):r.includes(a)}),je=(e,t)=>{let r=n=>{let i=n.flatMap(t=>{let n=Ye(t,ye),i=n.length>0?r(n):[];return!Ae(t,e)&&i.length===0?[]:n.length>0?[{...t,[ye]:i}]:[t]});return Le(t).length>0&&(i=i.slice().sort((e,n)=>Oe(e,n,t))),i};return r(w(v(n),`dataSource`))},ze=I(()=>w(v(n),`expandable`)?.expandedRowKeys?[...w(v(n),`expandable`).expandedRowKeys]:[...xt.value]),He=I(()=>new Set(ze.get())),Ue=(e,t=0,n=[],r=!1)=>e.flatMap((e,i)=>{let a=[...n,i],o=Se(e,`row-${a.join(`-`)}`),s=Ye(e,ye),c={key:o,renderKey:`${typeof o}:${String(o)}@${a.join(`-`)}`,record:e,indent:t,hasTreeChildren:s.length>0};return s.length>0&&(r||He.get().has(o))?[c,...Ue(s,t+1,a,r)]:[c]}),We=Ue(w(v(n),`dataSource`),0,[],!0),Ke=We.some(e=>e.hasTreeChildren),X=I(()=>je(K.get(),U.get())),_t=I(()=>Ue(X.get())),Q=Z.get()!=null,$=I(()=>{let e=_t.get(),t=e.length,n=Q?Math.max(1,Z.get().pageSize??bt.value):Math.max(t,1),r=Q?Math.max(1,Math.ceil(t/n)):1,i=Q?Be(Z.get().current??vt.value,r):1;return{total:t,pageSize:n,pageCount:r,currentPage:i,pageRows:Q?e.slice((i-1)*n,i*n):e}}),Ct=I(()=>w(v(n),`rowSelection`)?.selectedRowKeys?[...w(v(n),`rowSelection`).selectedRowKeys]:[...ht.value]),wt=I(()=>new Set(Ct.get())),Tt=w(v(n),`rowSelection`)?.align??`center`,Et=!!w(v(n),`rowSelection`),Dt=!!xe,Ot=(Dt||Ke)&&w(v(n),`expandable`)?.showExpandColumn!==!1,kt=+!!Et+ +!!Ot,At=S.get().length+kt,jt=Y(W.get().wrapper,w(v(n),`scroll`)?.y===void 0?void 0:{maxHeight:Ve(w(v(n),`scroll`).y)},w(v(n),`height`)===void 0?void 0:{height:Ve(w(v(n),`height`))},w(v(n),`sticky`)&&typeof w(v(n),`sticky`)==`object`&&w(v(n),`sticky`).offsetScroll!==void 0?{top:Ve(w(v(n),`sticky`).offsetScroll)}:void 0),Mt=J(w(v(n),`scroll`)?.x?`overflow-x-auto`:void 0,w(v(n),`scroll`)?.y||w(v(n),`height`)!==void 0?`overflow-y-auto`:void 0,B.get().wrapper),Nt=Y(W.get().table)??{},Pt=S.get().some(({column:e})=>!!e.ellipsis);w(v(n),`tableLayout`)?Nt.tableLayout=w(v(n),`tableLayout`):(Pt||w(v(n),`scroll`)?.x)&&(Nt.tableLayout=`fixed`),w(v(n),`scroll`)?.x===!0?(Nt.width=`max-content`,Nt.minWidth=`100%`):w(v(n),`scroll`)?.x!==void 0&&(Nt.width=Ve(w(v(n),`scroll`).x),Nt.minWidth=`100%`),(()=>{let e=globalThis,t=`__rue_table_outside_close_${nt.value}`;if(e[t])return;let n=e=>{let t=e?.target;t&&(t.closest(`[data-rue-table-root="${nt.value}"]`)||(dt.value=null,R()))};e?.addEventListener&&e.addEventListener(`pointerdown`,n),e[t]=n})();let Ft=()=>{if(!w(v(n),`scroll`)?.scrollToFirstRowOnChange)return;let e=ft.value;e&&(e.scrollTop=0)},It=I(()=>Le(U.get()).map(e=>{let t=F.get().get(e.key);return t?{column:t.column,columnKey:e.key,order:e.order}:null}).filter(Boolean)),Lt=(e,t)=>{let n=e.title;return typeof n==`function`?n({sortOrder:ee.get().get(t)?.order??null,filteredValue:K.get()[t]??[],sortColumns:It.get(),filters:Ce.get()}):n},Rt=e=>{let t=Le(e).map(e=>{let t=F.get().get(e.key);return t?{column:t.column,order:e.order,columnKey:e.key,field:t.column.dataIndex,multiple:e.multiple}:null}).filter(Boolean);return t.length===0?{column:null,order:null}:t.length===1?t[0]:t},zt=(e,t,r,i,a)=>{if(!w(v(n),`onChange`))return;let o=je(i,a),s=Ue(o),c=Q?Math.max(1,Math.ceil(s.length/r)):1,l=Q?Be(t,c):1,u=Q?s.slice((l-1)*r,l*r).map(e=>e.record):s.map(e=>e.record);w(v(n),`onChange`)(Q?{current:l,pageSize:r}:!1,_e(i),Rt(a),{action:e,currentDataSource:u})},Bt=(e,t)=>{let n=F.get().get(e)?.column;if(!n?.sorter)return;let r=Ie(n),i=(()=>{if(r!=null){let n=U.get().filter(t=>{let n=F.get().get(t.key)?.column;return Ie(n??{})!=null&&t.key!==e}).map(e=>({...e}));return t&&n.push({key:e,order:t,multiple:r}),Le(n)}return t?[{key:e,order:t,multiple:r}]:[]})();it(i),R(),Q&&Z.get().current===void 0&&yt(1),Ft(),zt(`sort`,Q?1:$.get().currentPage,$.get().pageSize,K.get(),i),setTimeout(()=>{setTimeout(()=>{let t=document.querySelector(`button[aria-label="sort-${e}"]`)?.closest(`table`)?.querySelector(`tbody`);if(!t)return;let n=new Map(Array.from(t.querySelectorAll(`tr[data-rue-table-row-key]`)).map(e=>[e.dataset.rueTableRowKey,e]));Ue(je(K.get(),i)).forEach(e=>{let r=n.get(String(e.key));r&&t.appendChild(r)})},0)},0)},Vt=(e,t,n)=>{let r=De(t),i={...K.get(),[e]:r};S.get().find(t=>t.key===e)?.column?.filteredValue===void 0&&ot(i),ct(t=>({...t,[e]:r})),R(),Q&&Z.get().current===void 0&&yt(1),n&&(dt.value=null),Ft(),zt(`filter`,Q?1:$.get().currentPage,$.get().pageSize,i,U.get())},Ht=e=>{let t=Be(e,$.get().pageCount);Q&&Z.get().current===void 0&&yt(t),R(),Q&&Z.get().onChange&&Z.get().onChange(t,$.get().pageSize),Ft(),zt(`paginate`,t,$.get().pageSize,K.get(),U.get())},Ut=e=>e.filter(e=>!w(v(n),`rowSelection`)?.disabled&&!(w(v(n),`rowSelection`)?.getCheckboxProps?w(v(n),`rowSelection`).getCheckboxProps(e.record):{})?.disabled),Wt=I(()=>Ut($.get().pageRows)),Gt=I(()=>Wt.get().map(e=>e.key)),Kt=I(()=>Gt.get().length>0&&Gt.get().every(e=>wt.get().has(e))),qt=I(()=>Gt.get().some(e=>wt.get().has(e))&&!Kt.get()),Jt=(e,t,r,i,a)=>{w(v(n),`rowSelection`)?.selectedRowKeys===void 0&&gt([...e]);let o=We.filter(t=>e.includes(t.key)).map(e=>e.record);r!==void 0&&w(v(n),`rowSelection`)?.onSelect&&typeof i==`boolean`&&w(v(n),`rowSelection`).onSelect(r,i,o,a),w(v(n),`rowSelection`)?.onChange&&w(v(n),`rowSelection`).onChange([...e],o,t)},Yt=e=>{if(!w(v(n),`rowSelection`)||w(v(n),`rowSelection`).type===`radio`)return;let t=new Set(Gt.get()),r=w(v(n),`rowSelection`).selectedRowKeys??ht.value,i=new Set(r);t.forEach(t=>{e?i.add(t):i.delete(t)});let a=Array.from(i);if(Jt(a,{type:`checkbox`}),w(v(n),`rowSelection`).onSelectAll){let t=We.filter(e=>a.includes(e.key)).map(e=>e.record);w(v(n),`rowSelection`).onSelectAll(e,t)}},Xt=(e,t)=>{let r=!!xe&&(!w(v(n),`expandable`)?.rowExpandable||w(v(n),`expandable`).rowExpandable(e.record)),i=e.hasTreeChildren||r;return{key:e.key,enabled:i,expanded:He.get().has(e.key),hasExpandedRowRender:r,indent:e.indent,rowIndex:t}},Zt=(e,t)=>{let r=Xt(e,t);if(!r.enabled)return;let i=new Set(ze.get());r.expanded?i.delete(r.key):i.add(r.key);let a=Array.from(i);w(v(n),`expandable`)?.expandedRowKeys===void 0&&St(a),R(),w(v(n),`expandable`)?.onExpand&&w(v(n),`expandable`).onExpand(!r.expanded,e.record),w(v(n),`expandable`)?.onExpandedRowsChange&&w(v(n),`expandable`).onExpandedRowsChange(a)},Qt=e=>[...e.sortDirections??w(v(n),`sortDirections`)??[`ascend`,`descend`],null],$t=(e,t)=>{let n=Qt(t),r=new Map(Le([...rt.value]).map(e=>[e.key,e])).get(e)?.order??null;return n[(n.findIndex(e=>e===r)+1+n.length)%n.length]},en=(e,t)=>{let n=e.filterDropdownProps?.open??e.filterDropdownOpen;return n===void 0?dt.value===t:!!n},tn=(e,t)=>(t?en(t,e):dt.value===e)||st.value[e]!==void 0?De(st.value[e]??K.get()[e]):De(K.get()[e]),nn=(e,t)=>{ct(n=>({...n,[e]:De(t)})),R()},rn=(e,t,n)=>{let r=en(t,e);t.filterDropdownProps?.open===void 0&&t.filterDropdownOpen===void 0&&(n?dt.value=e:dt.value===e&&(dt.value=null)),!n&&r!==n&&R(),t.filterDropdownProps?.onOpenChange?.(n),t.onFilterDropdownOpenChange?.(n)},an=(e,t)=>{rn(e,t,!1)},on=(e,t,n)=>{Vt(e,tn(e,t),n?.closeDropdown??!0)},sn=(e,t,n)=>{let r=t.filterResetToDefaultFilteredValue?De(t.defaultFilteredValue):[];if(nn(e,r),n?.confirm){Vt(e,r,n.closeDropdown??!0);return}n?.closeDropdown&&an(e,t)},cn=(e,t)=>typeof e.filterIcon==`function`?e.filterIcon(t):e.filterIcon===void 0?`☰`:e.filterIcon,ln=(e,t,n)=>{let r=z(w(e,`arg0`)),a=z(w(e,`arg1`));return d(o(()=>typeof r.get().sortIcon==`function`?{__rue_compiled_branch_key:0,create:()=>i(e=>{let t=ne().content.cloneNode(!0).firstChild,n=t.childNodes[0];return n.parentNode,s(n,()=>String(String(r.get().sortIcon({sortOrder:a.get()})))),[t,t]})}:{__rue_compiled_branch_key:1,create:()=>h(e=>{let t=oe().content.cloneNode(!0).firstChild,n=t,r=t.childNodes[0],i=t.childNodes[1],o;O(()=>{let e=J(`inline-flex flex-col leading-none`,a.get()?`text-base-content`:`opacity-60`),t=e===!1||e==null?``:String(e);Object.is(o,t)||(o=t,n.setAttribute(`class`,t))});let s;O(()=>{let e=J(a.get()===`ascend`?`text-base-content`:`opacity-40`),t=e===!1||e==null?``:String(e);Object.is(s,t)||(s=t,r.setAttribute(`class`,t))});let c;return O(()=>{let e=J(`-mt-0.5`,a.get()===`descend`?`text-base-content`:`opacity-40`),t=e===!1||e==null?``:String(e);Object.is(c,t)||(c=t,i.setAttribute(`class`,t))}),[t,t]})}),e=>y(()=>{r.set(e.arg0),a.set(e.arg1)}),()=>v(e))},un=(e,t,n)=>t?e.map(e=>{let r=typeof n.filterSearch==`function`?n.filterSearch(t,e):String(e.text).toLowerCase().includes(t.toLowerCase()),i=Array.isArray(e.children)?un(e.children,t,n):void 0;return r||i&&i.length>0?i&&i.length>0?{...e,children:i}:e:null}).filter(Boolean):e,dn=(e,t,n,r,i=0)=>e.flatMap(e=>[{key:`${String(e.value)}-${i}`,text:String(e.text),depth:i,type:t.filterMultiple===!1?`radio`:`checkbox`,name:`rue-table-filter-${nt.value}-${n}`,checked:r.includes(e.value),onChange:r=>{let i=r.target.checked,a=tn(n,t),o=new Set(a);i?o.add(e.value):o.delete(e.value);let s=t.filterMultiple===!1?i?[e.value]:[]:[...o];nn(n,s),t.filterOnClose===!1&&Vt(n,s,!1)}},...dn(e.children??[],t,n,r,i+1)]),fn=(t,n,r)=>{let i=z(w(t,`arg0`)),a=z(w(t,`arg1`)),o=z(w(t,`arg3`)),s=z(w(t,`arg4`)),{safeDraftValues:p,__rue_phase2_safeDraftValues:g,safeMenuItems:_,__rue_phase2_safeMenuItems:S,presetRows:D,__rue_phase2_presetRows:F}=c(`useSetup:0:0`,()=>{let e=I(()=>Array.isArray(o.get())?o.get():[]);e.get();let t=e,n=I(()=>Array.isArray(s.get())?s.get():[]);n.get();let r=n,c=I(()=>(a.get().filterPresets??[]).map(e=>({...e,onClick:()=>nn(i.get(),e.values)})));return c.get(),{safeDraftValues:e,__rue_phase2_safeDraftValues:t,safeMenuItems:n,__rue_phase2_safeMenuItems:r,presetRows:c,__rue_phase2_presetRows:c}});return d(h(t=>{let n=se().content.cloneNode(!0).firstChild,r=n.childNodes[0],o=r.parentNode,s=n.childNodes[1],c=s.parentNode,d=n.childNodes[2].childNodes[0],g=d.parentNode,v=n.childNodes[2].childNodes[1],y=v.parentNode,S=n.childNodes[3],w=S.parentNode,F=[];N(()=>{let e=D.get()||[];F=T(o,r,F,e,(e,t)=>t,(e,t)=>{let n=z(e);return j((e,t,r)=>{let i=()=>h(e=>{let t=E(`button`,e);t.setAttribute(`type`,`button`);let r;O(()=>{let e=n.get().className,i=e===!1||e==null?``:String(e);Object.is(r,i)||(r=i,t.setAttribute(`class`,i))});let i=e=>{let t=n.get().onClick;typeof t==`function`&&t(e)};t.addEventListener(`click`,i),P(()=>t.removeEventListener(`click`,i));let a=C(``);return x(t,a),l(a,()=>String(n.get().label)),[t,t]});return e==null?i():m(e,r,i)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),P(()=>b(F)),f(c,s,()=>a.get().filterSearch?{__rue_compiled_branch_key:!0,create:()=>h(e=>{let t=E(`input`,e);t.setAttribute(`type`,`text`),t.setAttribute(`class`,`input input-bordered input-xs mb-2 w-full`),t.setAttribute(`placeholder`,`搜索筛选项`);let n;O(()=>{let e=lt.value[i.get()]??``,r=e==null?``:String(e);Object.is(n,r)||(n=r,t.value=r)});let r=e=>{let t=e=>{ut(t=>({...t,[i.get()]:e.target.value})),R()};typeof t==`function`&&t(e)};return t.addEventListener(`input`,r),P(()=>t.removeEventListener(`input`,r)),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>V(e=>{let t=A();return[t.firstChild,t.lastChild]})});let I=[];return N(()=>{let e=dn(_.get(),a.get(),i.get(),p.get())||[];I=T(g,d,I,e,(e,t)=>e.key,(e,t)=>{let n=z(e);return j((e,t,r)=>{let i=()=>h(e=>{let t=E(`label`,e);t.setAttribute(`class`,`flex items-center gap-2 text-sm`);let r;O(()=>{let e={paddingLeft:`${n.get().depth*12}px`},i=u(e);Object.is(r,i)||(r=i,t.style.cssText=i)});let i=E(`input`,t);x(t,i);let a;O(()=>{let e=n.get().type;Object.is(a,e)||(a=e,e==null||e===!1?i.removeAttribute(`type`):i.setAttribute(`type`,String(e)))});let o;O(()=>{let e=n.get().name;Object.is(o,e)||(o=e,e==null||e===!1?i.removeAttribute(`name`):i.setAttribute(`name`,String(e)))});let s;O(()=>{let e=n.get().type===`radio`?`radio radio-xs`:`checkbox checkbox-xs`,t=e===!1||e==null?``:String(e);Object.is(s,t)||(s=t,i.setAttribute(`class`,t))});let c;O(()=>{let e=!!n.get().checked;Object.is(c,e)||(c=e,i.checked=e)});let d=e=>{let t=n.get().onChange;typeof t==`function`&&t(e)};i.addEventListener(`change`,d),P(()=>i.removeEventListener(`change`,d));let f=E(`span`,t);x(t,f);let p=C(``);return x(f,p),l(p,()=>String(n.get().text)),[t,t]});return e==null?i():m(e,r,i)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),P(()=>b(I)),f(y,v,()=>_.get().length===0?{__rue_compiled_branch_key:!0,create:()=>V(e=>{let t=E(`div`,e);return t.setAttribute(`class`,`text-sm opacity-60`),x(t,C(`暂无匹配项`)),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>V(e=>{let t=A();return[t.firstChild,t.lastChild]})}),f(w,S,()=>a.get().filterOnClose===!1?{__rue_compiled_branch_key:!0,create:()=>V(e=>{let t=A();return[t.firstChild,t.lastChild]})}:{__rue_compiled_branch_key:!1,create:()=>h(t=>{let n=E(`div`,t);n.setAttribute(`class`,`mt-3 flex justify-end gap-2`);let r=E(`button`,n);x(n,r),r.setAttribute(`class`,`btn btn-ghost btn-xs`),P(L(t,r,`click`,()=>()=>sn(i.get(),a.get(),{confirm:!0})));let o=M(`rue:compiled-slot`);x(r,o),e({parent:r,before:o},()=>H(k.get().filterReset),()=>({}));let s=E(`button`,n);x(n,s);let c;O(()=>{let e=J(`btn btn-primary btn-xs`,a.get().filterConfirmClassName),t=e===!1||e==null?``:String(e);Object.is(c,t)||(c=t,s.setAttribute(`class`,t))}),P(L(t,s,`click`,()=>()=>on(i.get(),a.get())));let l=M(`rue:compiled-slot`);return x(s,l),e({parent:s,before:l},()=>H(k.get().filterConfirm),()=>({})),[n,n]})}),[n,n]}),e=>y(()=>{i.set(e.arg0),a.set(e.arg1),o.set(e.arg3),s.set(e.arg4)}),()=>v(t))},pn=(e,t)=>{let r=e.showSorterTooltip??w(v(n),`showSorterTooltip`);if(r===!1)return;if(typeof r==`object`&&r?.title!==void 0)return r.title;let i=$t(t,e);return i===`ascend`?k.get().triggerAsc:i===`descend`?k.get().triggerDesc:k.get().cancelSort},mn=(t,n,r)=>{let i=z(w(t,`arg0`)),o=z(w(t,`arg1`)),{titleNode:s,__rue_phase2_titleNode:l,filtered:u,__rue_phase2_filtered:g,sortOrder:_,draftValues:b,__rue_phase2_draftValues:S,filterSearchValue:T,visible:D,__rue_phase2_visible:k,menuItems:j,__rue_phase2_menuItems:N,sorterTooltipTitle:F,__rue_phase2_sorterTooltipTitle:L,_dropdownOpen:R,_dropdownOnOpenChange:B,_dropdownChildren:U,_dropdownContent:W,_dropdownOverlay:te,_dropdownItems:ne,_dropdownMenu:re,_dropdownPopupRender:q,dropdownProps:ie}=c(`useSetup:0:0`,()=>{let e=I(()=>Lt(o.get(),i.get()));e.get();let t=e,n=I(()=>o.get().filtered??(K.get()[i.get()]??[]).length>0);n.get();let r=n,a=ee.get().get(i.get())?.order??null,s=I(()=>tn(i.get(),o.get()));s.get();let c=s,l=lt.value[i.get()]??``,u=I(()=>en(o.get(),i.get()));u.get();let d=u,f=I(()=>un(o.get().filters??[],l,o.get()));f.get();let p=f,m=I(()=>pn(o.get(),i.get()));m.get();let h=m,{open:g,onOpenChange:_,children:v,content:y,overlay:b,items:x,menu:S,popupRender:C,...w}=o.get().filterDropdownProps??{};return{titleNode:e,__rue_phase2_titleNode:t,filtered:n,__rue_phase2_filtered:r,sortOrder:a,draftValues:s,__rue_phase2_draftValues:c,filterSearchValue:l,visible:u,__rue_phase2_visible:d,menuItems:f,__rue_phase2_menuItems:p,sorterTooltipTitle:m,__rue_phase2_sorterTooltipTitle:h,_dropdownOpen:g,_dropdownOnOpenChange:_,_dropdownChildren:v,_dropdownContent:y,_dropdownOverlay:b,_dropdownItems:x,_dropdownMenu:S,_dropdownPopupRender:C,dropdownProps:w}});return d(h(t=>{let n=ce().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[0],c=r.parentNode,l=M(`rue:text-hole:0`);c.replaceChild(l,r);let d=n.childNodes[1],g=d.parentNode,v=n.childNodes[2],y=v.parentNode;return e({parent:c,before:l},()=>H(s.get()??``),()=>({})),f(g,d,()=>o.get().sorter?{__rue_compiled_branch_key:!0,create:()=>h(e=>{let t=E(`button`,e);t.setAttribute(`type`,`button`);let n;O(()=>{let e=`sort-${i.get()}`;Object.is(n,e)||(n=e,e==null?t.removeAttribute(`aria-label`):t.setAttribute(`aria-label`,String(e)))});let r;O(()=>{let e=F.get();Object.is(r,e)||(r=e,e==null||e===!1?t.removeAttribute(`title`):t.setAttribute(`title`,String(e)))}),t.setAttribute(`class`,`btn btn-ghost btn-xs h-auto min-h-0 px-1 py-0.5`);let s=e=>{let t=e=>{e.stopPropagation(),Bt(i.get(),$t(i.get(),o.get()))};typeof t==`function`&&t(e)};return t.addEventListener(`click`,s),P(()=>t.removeEventListener(`click`,s)),a(t,ln,()=>({arg0:o.get(),arg1:_})),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>V(e=>{let t=A();return[t.firstChild,t.lastChild]})}),f(y,v,()=>Array.isArray(o.get().filters)&&o.get().filters.length>0||o.get().filterPresets!==void 0?{__rue_compiled_branch_key:!0,create:()=>p(G,()=>({trigger:`click`,open:D.get(),closeOnClick:!1,align:`start`,...ie,onOpenChange:e=>rn(i.get(),o.get(),e),children:(t,n,r)=>{let s=()=>h(t=>{let n=A();a(n,G.Trigger,()=>({as:`button`,type:`button`,"aria-label":`filter-${i.get()}`,className:J(`btn btn-ghost btn-xs h-auto min-h-0 px-1 py-0.5 select-none`,u.get()?`text-base-content`:`opacity-40`),children:(t,n,r)=>{let i=()=>h(t=>{let n=A(),r=E(`span`,n);x(n,r);let i=M(`rue:compiled-slot`);x(r,i),e({parent:r,before:i},()=>H(cn(o.get(),u.get())),()=>({}));let a=C(``),s=C(``);return n.insertBefore(a,n.firstChild),n.appendChild(s),[n.firstChild,n.lastChild]});return t==null?i():m(t,r,i)}})),a(n,G.Content,()=>({className:`dropdown-content z-50 mt-2 p-0`,onClick:e=>e.stopPropagation(),children:(e,t,n)=>{let r=()=>h(e=>{let t=A();a(t,fn,()=>({arg0:i.get(),arg1:o.get(),arg2:D.get(),arg3:b.get(),arg4:j.get()}));let n=C(``),r=C(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():m(e,n,r)}}));let r=C(``),s=C(``);return n.insertBefore(r,n.firstChild),n.appendChild(s),[n.firstChild,n.lastChild]});return t==null?s():m(t,r,s)}}))}:{__rue_compiled_branch_key:!1,create:()=>V(e=>{let t=A();return[t.firstChild,t.lastChild]})}),[n,n]}),e=>y(()=>{i.set(e.arg0),o.set(e.arg1)}),()=>v(t))},hn=(n,r,i)=>{let a=z(w(n,`level`)),s=z(w(n,`meta`));return d(o(()=>{let{cellProps:n,__rue_phase2_cellProps:r,children:i,__rue_phase2_children:a,isLeaf:o,__rue_phase2_isLeaf:l,leaf:d,__rue_phase2_leaf:m,key:g,__rue_phase2_key:_,colSpan:v,__rue_phase2_colSpan:y,rowSpan:b,__rue_phase2_rowSpan:S}=c(`useSetup:0:0`,()=>{let e=I(()=>s.get().column.onHeaderCell&&s.get().column.onHeaderCell(s.get().column,s.get().index)||{});e.get();let t=e,n=I(()=>ke(s.get().column));n.get();let r=n,i=I(()=>r.get().length===0);i.get();let a=i,o=I(()=>a.get()?F.get().get(s.get().key)??null:null);o.get();let c=o,l=I(()=>c.get()?.key??s.get().key);l.get();let u=l,d=I(()=>t.get().colSpan??s.get().colSpan);d.get();let f=d,p=I(()=>t.get().rowSpan??s.get().rowSpan);return p.get(),{cellProps:e,__rue_phase2_cellProps:t,children:n,__rue_phase2_children:r,isLeaf:i,__rue_phase2_isLeaf:a,leaf:o,__rue_phase2_leaf:c,key:l,__rue_phase2_key:u,colSpan:d,__rue_phase2_colSpan:f,rowSpan:p,__rue_phase2_rowSpan:p}});if(y.get()===0||S.get()===0)return{__rue_compiled_branch_key:0,create:()=>V(e=>{let t=A();return[t.firstChild,t.lastChild]})};let{className:C,style:w,...T}=r.get(),D=I(()=>J(B.get().headerCell,Ee(s.get().column.align),s.get().column.className,C));D.get();let k=I(()=>Y(W.get().headerCell,s.get().column.width||s.get().column.minWidth?{...s.get().column.width?{width:s.get().column.width}:{},...s.get().column.minWidth?{minWidth:s.get().column.minWidth}:{}}:void 0,w));return k.get(),{__rue_compiled_branch_key:1,__rue_compiled_branch_refresh:!0,create:()=>h(n=>{let r=le().content.cloneNode(!0).firstChild,i=r,a=r.childNodes[0],o=a.parentNode,c;O(()=>{let e=v.get();Object.is(c,e)||(c=e,e==null||e===!1?i.removeAttribute(`colSpan`):i.setAttribute(`colSpan`,String(e)))});let l;O(()=>{let e=b.get();Object.is(l,e)||(l=e,e==null||e===!1?i.removeAttribute(`rowSpan`):i.setAttribute(`rowSpan`,String(e)))});let m;O(()=>{let e=D.get(),t=e===!1||e==null?``:String(e);Object.is(m,t)||(m=t,i.setAttribute(`class`,t))});let _;return O(()=>{let e=k.get(),t=u(e);Object.is(_,t)||(_=t,i.style.cssText=t)}),t(i,()=>T,[`__rue_static_template_id__`]),f(o,a,()=>d.get()?{__rue_compiled_branch_key:!0,create:()=>p(mn,()=>({arg0:g.get(),arg1:s.get().column}))}:{__rue_compiled_branch_key:!1,create:()=>h(t=>{let n=E(`span`,t),r=M(`rue:compiled-slot`);return x(n,r),e({parent:n,before:r},()=>H(Lt(s.get().column,s.get().key)??``),()=>({})),[n,n]})}),[r,r]})}}),e=>y(()=>{a.set(e.level),s.set(e.meta)}),()=>v(n))},gn=(r,i,a)=>{let s=z(w(r,`arg0`)),l=z(w(r,`arg1`));return d(o(()=>{if(!w(v(n),`rowSelection`))return{__rue_compiled_branch_key:0,create:()=>V(e=>{let t=A();return[t.firstChild,t.lastChild]})};let r=w(v(n),`rowSelection`).getCheckboxProps?{...w(v(n),`rowSelection`).getCheckboxProps(s.get().record)}:{};w(v(n),`rowSelection`).disabled&&(r.disabled=!0);let{inputClassName:i,SelectionCellTag:a}=c(`RenderSelectionCell:setup-region:2`,()=>({inputClassName:w(v(n),`rowSelection`).type===`radio`?`radio`:`checkbox`,SelectionCellTag:w(v(n),`pinCols`)&&w(v(n),`rowSelection`).fixed?`th`:`td`})),o=I(()=>wt.get().has(s.get().key));o.get();let d=o,g=e=>{let t=e.target;if(w(v(n),`rowSelection`).type===`radio`){Jt([s.get().key],{type:`radio`},s.get().record,!0,e);return}let r=w(v(n),`rowSelection`).selectedRowKeys??ht.value,i=new Set(r);t.checked?i.add(s.get().key):i.delete(s.get().key),Jt(Array.from(i),{type:`checkbox`},s.get().record,t.checked,e)},_=(e,a,o)=>h(e=>{let a=ue().content.cloneNode(!0).firstChild,o=a,s=a.childNodes[0],c=e=>{let t=e=>e.stopPropagation();typeof t==`function`&&t(e)};o.addEventListener(`click`,c),P(()=>o.removeEventListener(`click`,c));let l;O(()=>{let e=w(v(n),`rowSelection`).type===`radio`?`radio`:`checkbox`;Object.is(l,e)||(l=e,e==null||e===!1?s.removeAttribute(`type`):s.setAttribute(`type`,String(e)))});let u;O(()=>{let e=w(v(n),`rowSelection`).type===`radio`?`${nt.value}-selection`:void 0;Object.is(u,e)||(u=e,e==null||e===!1?s.removeAttribute(`name`):s.setAttribute(`name`,String(e)))});let f;O(()=>{let e=i,t=e===!1||e==null?``:String(e);Object.is(f,t)||(f=t,s.setAttribute(`class`,t))});let p;O(()=>{let e=!!d.get();Object.is(p,e)||(p=e,s.checked=e)});let m=e=>{let t=g;typeof t==`function`&&t(e)};return s.addEventListener(`change`,m),P(()=>s.removeEventListener(`change`,m)),t(s,()=>r,[]),[a,a]});return a===`th`?{__rue_compiled_branch_key:1,__rue_compiled_branch_refresh:!0,create:()=>h(t=>{let r=de().content.cloneNode(!0).firstChild,i=r,a=r.childNodes[0],c=r.childNodes[0].childNodes[0],d=c.parentNode,g=r.childNodes[0].childNodes[1],y=g.parentNode,b;O(()=>{let e=J(B.get().cell,Ee(Tt)),t=e===!1||e==null?``:String(e);Object.is(b,t)||(b=t,i.setAttribute(`class`,t))});let S;O(()=>{let e=Y(W.get().cell,w(v(n),`rowSelection`).columnWidth?{width:w(v(n),`rowSelection`).columnWidth}:void 0),t=u(e);Object.is(S,t)||(S=t,i.style.cssText=t)});let C;O(()=>{let e=J(`inline-flex items-center gap-2`,w(v(n),`rowSelection`).cellClassName),t=e===!1||e==null?``:String(e);Object.is(C,t)||(C=t,a.setAttribute(`class`,t))});let T;O(()=>{let e=String(o.get());Object.is(T,e)||(T=e,e==null?a.removeAttribute(`data-checked`):a.setAttribute(`data-checked`,String(e)))});let D=(e,t,n)=>{let r=()=>p(_,()=>({}));return e==null?r():m(e,n,r)},k=c.nextSibling;return d.removeChild(c),e({parent:d,before:k},()=>D,()=>({})),f(y,g,()=>w(v(n),`rowSelection`).cellLabelFormatter?{__rue_compiled_branch_key:!0,create:()=>h(t=>{let r=E(`span`,t),i=M(`rue:compiled-slot`);return x(r,i),e({parent:r,before:i},()=>H(w(v(n),`rowSelection`).cellLabelFormatter(o.get(),s.get().record,l.get())),()=>({})),[r,r]})}:{__rue_compiled_branch_key:!1,create:()=>V(e=>{let t=A();return[t.firstChild,t.lastChild]})}),[r,r]})}:{__rue_compiled_branch_key:2,__rue_compiled_branch_refresh:!0,create:()=>h(t=>{let r=fe().content.cloneNode(!0).firstChild,i=r,a=r.childNodes[0],c=r.childNodes[0].childNodes[0],d=c.parentNode,g=r.childNodes[0].childNodes[1],y=g.parentNode,b;O(()=>{let e=J(B.get().cell,Ee(Tt)),t=e===!1||e==null?``:String(e);Object.is(b,t)||(b=t,i.setAttribute(`class`,t))});let S;O(()=>{let e=Y(W.get().cell,w(v(n),`rowSelection`).columnWidth?{width:w(v(n),`rowSelection`).columnWidth}:void 0),t=u(e);Object.is(S,t)||(S=t,i.style.cssText=t)});let C;O(()=>{let e=J(`inline-flex items-center gap-2`,w(v(n),`rowSelection`).cellClassName),t=e===!1||e==null?``:String(e);Object.is(C,t)||(C=t,a.setAttribute(`class`,t))});let T;O(()=>{let e=String(o.get());Object.is(T,e)||(T=e,e==null?a.removeAttribute(`data-checked`):a.setAttribute(`data-checked`,String(e)))});let D=(e,t,n)=>{let r=()=>p(_,()=>({}));return e==null?r():m(e,n,r)},k=c.nextSibling;return d.removeChild(c),e({parent:d,before:k},()=>D,()=>({})),f(y,g,()=>w(v(n),`rowSelection`).cellLabelFormatter?{__rue_compiled_branch_key:!0,create:()=>h(t=>{let r=E(`span`,t),i=M(`rue:compiled-slot`);return x(r,i),e({parent:r,before:i},()=>H(w(v(n),`rowSelection`).cellLabelFormatter(o.get(),s.get().record,l.get())),()=>({})),[r,r]})}:{__rue_compiled_branch_key:!1,create:()=>V(e=>{let t=A();return[t.firstChild,t.lastChild]})}),[r,r]})}}),e=>y(()=>{s.set(e.arg0),l.set(e.arg1)}),()=>v(r))},_n=(e,t,r)=>{let i=z(w(e,`arg0`)),a=z(w(e,`arg1`)),s=z(w(e,`arg2`));return d(o(()=>s.get().enabled?{__rue_compiled_branch_key:1,create:()=>h(e=>{let t=pe().content.cloneNode(!0).firstChild,r=t,o=t.childNodes[0],c=o.parentNode,u;O(()=>{let e=J(`btn btn-ghost btn-xs`,w(v(n),`expandable`)?.expandButtonClassName),t=e===!1||e==null?``:String(e);Object.is(u,t)||(u=t,r.setAttribute(`class`,t))});let d=e=>{let t=e=>{e.stopPropagation(),Zt(i.get(),a.get())};typeof t==`function`&&t(e)};r.addEventListener(`click`,d),P(()=>r.removeEventListener(`click`,d));let f=C(``);return c.insertBefore(f,o),c.removeChild(o),l(f,()=>String(String(w(v(n),`expandable`)?.expandLabelFormatter?w(v(n),`expandable`).expandLabelFormatter(s.get().expanded,i.get().record):s.get().expanded?`-`:`+`))),[t,t]})}:{__rue_compiled_branch_key:0,create:()=>V(e=>{let t=A();return[t.firstChild,t.lastChild]})}),e=>y(()=>{i.set(e.arg0),a.set(e.arg1),s.set(e.arg2)}),()=>v(e))},vn=({arg0:e,arg1:t})=>r(e,t),yn=I(()=>$.get().pageRows.map(e=>e.record)),bn=I(()=>({total:$.get().total,page:$.get().currentPage,pageSize:$.get().pageSize})),xn=I(()=>{let e=yn.get().slice();return e.total=$.get().total,e}),Sn=qe(Z.get()),Cn=Q&&!(Z.get()?.hideOnSinglePage&&$.get().pageCount<=1)&&(Sn.length!==1||Sn[0]!==`none`),wn=(e,t,n)=>{let r=z(w(e,`arg0`));return d((e=>e)(h(e=>{let t=me().content.cloneNode(!0).firstChild,n=t,i=t.childNodes[0],a=t.childNodes[2],o=t.childNodes[1],s=o.parentNode,c;O(()=>{let e=r.get();Object.is(c,e)||(c=e,e==null?n.removeAttribute(`data-rue-table-pager`):n.setAttribute(`data-rue-table-pager`,String(e)))});let d;O(()=>{let e=J(`flex items-center gap-2 p-2`,Je(r.get()),B.get().pager),t=e===!1||e==null?``:String(e);Object.is(d,t)||(d=t,n.setAttribute(`class`,t))});let f;O(()=>{let e=W.get().pager,t=u(e);Object.is(f,t)||(f=t,n.style.cssText=t)}),i.setAttribute(`class`,`btn btn-ghost btn-xs`);let p;O(()=>{let e=$.get().currentPage<=1;Object.is(p,e)||(p=e,i.disabled=e)}),P(L(e,i,`click`,()=>()=>Ht($.get().currentPage-1))),a.setAttribute(`class`,`btn btn-ghost btn-xs`);let g;O(()=>{let e=$.get().currentPage>=$.get().pageCount;Object.is(g,e)||(g=e,a.disabled=e)}),P(L(e,a,`click`,()=>()=>Ht($.get().currentPage+1)));let _=[];return N(()=>{let e=Array.from({length:$.get().pageCount})||[];_=T(s,o,_,e,(e,t)=>`page-${r.get()}-${t+1}`,(e,t)=>{let n=z(e),r=z(t);return j((e,t,n)=>{let i=()=>h(e=>{let t=E(`button`,e),n;O(()=>{let e=`btn btn-ghost btn-xs${$.get().currentPage===r.get()+1?` btn-active`:``}`,i=e===!1||e==null?``:String(e);Object.is(n,i)||(n=i,t.setAttribute(`class`,i))}),P(L(e,t,`click`,()=>()=>Ht(r.get()+1)));let i=C(``);return x(t,i),l(i,()=>r.get()+1),[t,t]});return e==null?i():m(e,n,i)},(i,a)=>{e=i,t=a,n.set(i),r.set(a)},void 0)},!0,!1)}),P(()=>b(_)),[t,t]}),`pager-${r.get()}`),e=>y(()=>{r.set(e.arg0)}),()=>v(e))},Tn=w(v(n),`rowSelection`)?.getTitleCheckboxProps?.()??{},En=(e,r,i)=>o(()=>w(v(n),`rowSelection`)?.type===`radio`||w(v(n),`rowSelection`)?.hideSelectAll?{__rue_compiled_branch_key:0,create:()=>V(e=>{let t=A();return[t.firstChild,t.lastChild]})}:{__rue_compiled_branch_key:1,create:()=>h(e=>{let r=he().content.cloneNode(!0).firstChild,i=r.childNodes[0];i.setAttribute(`type`,`checkbox`),i.setAttribute(`class`,`checkbox`);let a;O(()=>{let e=!!Kt.get();Object.is(a,e)||(a=e,i.checked=e)});let o;O(()=>{let e=qt.get()?`mixed`:Kt.get()?`true`:`false`;Object.is(o,e)||(o=e,e==null?i.removeAttribute(`aria-checked`):i.setAttribute(`aria-checked`,String(e)))});let s;O(()=>{let e=!!(w(v(n),`rowSelection`)?.disabled||Gt.get().length===0);Object.is(s,e)||(s=e,i.disabled=e)});let c=e=>{let t=e=>Yt(e.target.checked);typeof t==`function`&&t(e)};return i.addEventListener(`change`,c),P(()=>i.removeEventListener(`change`,c)),t(i,()=>Tn,[]),[r,r]})}),Dn=e=>{w(v(n),`onScroll`)&&w(v(n),`onScroll`)(e)};return h(t=>{let r=ge().content.cloneNode(!0).firstChild,i=r,s=r.childNodes[2],c=r.childNodes[2].childNodes[1],l=r.childNodes[0],d=l.parentNode,y=r.childNodes[1],S=y.parentNode,D=r.childNodes[2].childNodes[0],F=D.parentNode,I=r.childNodes[2].childNodes[1].childNodes[0],L=I.parentNode,R=r.childNodes[2].childNodes[1].childNodes[1],U=R.parentNode,G=r.childNodes[2].childNodes[2],ee=G.parentNode,K=r.childNodes[3],te=K.parentNode,ne=r.childNodes[4],re=ne.parentNode,q=e=>{ft.value=e};typeof q==`function`?q(i):q&&typeof q==`object`&&`current`in q&&(q.current=i),P(()=>{typeof q==`function`?q(null):q&&typeof q==`object`&&`current`in q&&(q.current=null)});let ie;O(()=>{let e=nt.value;Object.is(ie,e)||(ie=e,e==null?i.removeAttribute(`data-rue-table-root`):i.setAttribute(`data-rue-table-root`,String(e)))});let ae;O(()=>{let e=nt.value;Object.is(ae,e)||(ae=e,e==null?i.removeAttribute(`data-rue-table-scroll`):i.setAttribute(`data-rue-table-scroll`,String(e)))});let oe;O(()=>{let e=pt.value;Object.is(oe,e)||(oe=e,e==null?i.removeAttribute(`data-rue-table-version`):i.setAttribute(`data-rue-table-version`,String(e)))});let se;O(()=>{let e=J(`relative`,w(v(n),`bordered`)?`rounded-box border border-base-300 bg-base-100`:void 0,B.get().root,Mt),t=e===!1||e==null?``:String(e);Object.is(se,t)||(se=t,i.setAttribute(`class`,t))});let ce;O(()=>{let e=Y(W.get().root,jt),t=u(e);Object.is(ce,t)||(ce=t,i.style.cssText=t)});let le=e=>{let t=Dn;typeof t==`function`&&t(e)};i.addEventListener(`scroll`,le),P(()=>i.removeEventListener(`scroll`,le));let ue;O(()=>{let e=Xe,t=e===!1||e==null?``:String(e);Object.is(ue,t)||(ue=t,s.setAttribute(`class`,t))});let de;O(()=>{let e=u(Nt);Object.is(de,e)||(de=e,s.style.cssText=e)});let fe;O(()=>{let e=nt.value;Object.is(fe,e)||(fe=e,e==null?s.removeAttribute(`data-rue-table-id`):s.setAttribute(`data-rue-table-id`,String(e)))});let pe;O(()=>{let e=B.get().tbody,t=e===!1||e==null?``:String(e);Object.is(pe,t)||(pe=t,c.setAttribute(`class`,t))});let me;O(()=>{let e=W.get().tbody,t=u(e);Object.is(me,t)||(me=t,c.style.cssText=t)}),f(d,l,()=>Cn?{__rue_compiled_branch_key:!0,create:()=>h(e=>{let t=A();x(t,C(` `));let n=M(`rue:list:end`);x(t,n);let r=[];N(()=>{let e=Sn.filter(e=>e.startsWith(`top`))||[];r=T(n.parentNode,n,r,e,(e,t)=>e,(e,t)=>{let n=z(e);return j((e,t,r)=>{let i=()=>p(wn,()=>({arg0:n.get()}));return e==null?i():m(e,r,i)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),P(()=>b(r)),x(t,C(` `));let i=C(``),a=C(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]})}:{__rue_compiled_branch_key:!1,create:()=>V(e=>{let t=A();return[t.firstChild,t.lastChild]})}),f(S,y,()=>w(v(n),`titleFormatter`)?{__rue_compiled_branch_key:!0,create:()=>h(e=>{let t=E(`div`,e),r;O(()=>{let e=J(`p-2`,B.get().title),n=e===!1||e==null?``:String(e);Object.is(r,n)||(r=n,t.setAttribute(`class`,n))});let i;return O(()=>{let e=W.get().title,n=u(e);Object.is(i,n)||(i=n,t.style.cssText=n)}),a(t,Ze,()=>({render:w(v(n),`titleFormatter`),data:yn.get()})),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>V(e=>{let t=A();return[t.firstChild,t.lastChild]})}),f(F,D,()=>w(v(n),`showHeader`)??!0?{__rue_compiled_branch_key:!0,create:()=>h(t=>{let n=E(`thead`,t),r;O(()=>{let e=B.get().thead,t=e===!1||e==null?``:String(e);Object.is(r,t)||(r=t,n.setAttribute(`class`,t))});let i;O(()=>{let e=W.get().thead,t=u(e);Object.is(i,t)||(i=t,n.style.cssText=t)});let a=M(`rue:list:end`);x(n,a);let o=[];return N(()=>{let t=_.get()||[];o=T(a.parentNode,a,o,t,(e,t)=>t,(t,n)=>{let r=z(t),i=z(n);return j((t,n,a)=>m(t,a,()=>h(t=>{let n=A(),a=M(`rue:row-call`);x(n,a),e({parent:n,before:a},()=>((e,t)=>(n,r,i)=>H(g(e,t))(n,r,i))(r.get(),i.get()),()=>({}));let o=C(``),s=C(``);return n.insertBefore(o,n.firstChild),n.appendChild(s),[n.firstChild,n.lastChild]})),(e,a)=>{t=e,n=a,r.set(e),i.set(a)},void 0)},!0,!1)}),P(()=>b(o)),[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>V(e=>{let t=A();return[t.firstChild,t.lastChild]})});let he=[];return N(()=>{let e=$.get().pageRows||[];he=T(L,I,he,e,(e,t)=>e.renderKey,(e,t)=>{let n=z(e),r=z(t);return j((e,t,i)=>{let a=()=>p(vn,()=>({arg0:n.get(),arg1:r.get()}));return e==null?a():m(e,i,a)},(i,a)=>{e=i,t=a,n.set(i),r.set(a)},void 0)},!0,!1)}),P(()=>b(he)),f(U,R,()=>$.get().pageRows.length===0?{__rue_compiled_branch_key:!0,create:()=>h(e=>{let t=E(`tr`,e),r=E(`td`,t);x(t,r);let i;O(()=>{let e=At;Object.is(i,e)||(i=e,e==null||e===!1?r.removeAttribute(`colSpan`):r.setAttribute(`colSpan`,String(e)))});let o;O(()=>{let e=J(B.get().empty,Ee(`center`)),t=e===!1||e==null?``:String(e);Object.is(o,t)||(o=t,r.setAttribute(`class`,t))});let s;return O(()=>{let e=W.get().empty,t=u(e);Object.is(s,t)||(s=t,r.style.cssText=t)}),a(r,$e,()=>({value:w(v(n),`emptyText`)===void 0?k.get().emptyText:w(v(n),`emptyText`)})),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>V(e=>{let t=A();return[t.firstChild,t.lastChild]})}),f(ee,G,()=>typeof w(v(n),`summary`)==`function`||Cn&&Sn.some(e=>e.startsWith(`bottom`))?{__rue_compiled_branch_key:!0,create:()=>h(e=>{let t=E(`tfoot`,e),r;O(()=>{let e=B.get().tfoot,n=e===!1||e==null?``:String(e);Object.is(r,n)||(r=n,t.setAttribute(`class`,n))});let i;return O(()=>{let e=W.get().tfoot,n=u(e);Object.is(i,n)||(i=n,t.style.cssText=n)}),o(()=>typeof w(v(n),`summary`)==`function`?{__rue_compiled_branch_key:!0,create:()=>h(e=>{let t=E(`tr`,e),r;O(()=>{let e=B.get().summary,n=e===!1||e==null?``:String(e);Object.is(r,n)||(r=n,t.setAttribute(`class`,n))});let i;O(()=>{let e=W.get().summary,n=u(e);Object.is(i,n)||(i=n,t.style.cssText=n)});let o=E(`td`,t);x(t,o);let s;return O(()=>{let e=At;Object.is(s,e)||(s=e,e==null||e===!1?o.removeAttribute(`colSpan`):o.setAttribute(`colSpan`,String(e)))}),a(o,et,()=>({render:w(v(n),`summary`),data:xn.get(),info:bn.get()})),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>V(e=>{let t=A();return[t.firstChild,t.lastChild]})}).__rue_compiled_mount(t),o(()=>Cn?{__rue_compiled_branch_key:!0,create:()=>h(e=>{let t=A();x(t,C(` `));let n=M(`rue:list:end`);x(t,n);let r=[];N(()=>{let e=Sn.filter(e=>e.startsWith(`bottom`))||[];r=T(n.parentNode,n,r,e,(e,t)=>`pager-row-${e}`,(e,t)=>{let n=z(e);return j((e,t,r)=>{let i=()=>h(e=>{let t=E(`tr`,e),r=E(`td`,t);x(t,r);let i;return O(()=>{let e=At;Object.is(i,e)||(i=e,e==null||e===!1?r.removeAttribute(`colSpan`):r.setAttribute(`colSpan`,String(e)))}),a(r,wn,()=>({arg0:n.get()})),[t,t]});return e==null?i():m(e,r,i)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),P(()=>b(r)),x(t,C(` `));let i=C(``),o=C(``);return t.insertBefore(i,t.firstChild),t.appendChild(o),[t.firstChild,t.lastChild]})}:{__rue_compiled_branch_key:!1,create:()=>V(e=>{let t=A();return[t.firstChild,t.lastChild]})}).__rue_compiled_mount(t),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>V(e=>{let t=A();return[t.firstChild,t.lastChild]})}),f(te,K,()=>w(v(n),`footerFormatter`)?{__rue_compiled_branch_key:!0,create:()=>h(e=>{let t=E(`div`,e),r;O(()=>{let e=J(`p-2`,B.get().footer),n=e===!1||e==null?``:String(e);Object.is(r,n)||(r=n,t.setAttribute(`class`,n))});let i;return O(()=>{let e=W.get().footer,n=u(e);Object.is(i,n)||(i=n,t.style.cssText=n)}),a(t,Ze,()=>({render:w(v(n),`footerFormatter`),data:yn.get()})),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>V(e=>{let t=A();return[t.firstChild,t.lastChild]})}),f(re,ne,()=>ve.get().spinning?{__rue_compiled_branch_key:!0,create:()=>h(t=>{let n=E(`div`,t),r;O(()=>{let e=J(`absolute inset-0 z-20 flex flex-col items-center justify-center gap-2 rounded-box bg-base-100/70`,B.get().loading),t=e===!1||e==null?``:String(e);Object.is(r,t)||(r=t,n.setAttribute(`class`,t))});let i;O(()=>{let e=W.get().loading,t=u(e);Object.is(i,t)||(i=t,n.style.cssText=t)});let a=E(`span`,n);return x(n,a),a.setAttribute(`class`,`loading loading-spinner loading-md`),o(()=>ve.get().tip?{__rue_compiled_branch_key:!0,create:()=>h(t=>{let n=E(`div`,t);n.setAttribute(`class`,`text-sm opacity-70`);let r=M(`rue:compiled-slot`);return x(n,r),e({parent:n,before:r},()=>H(ve.get().tip),()=>({})),[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>V(e=>{let t=A();return[t.firstChild,t.lastChild]})}).__rue_compiled_mount(n),[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>V(e=>{let t=A();return[t.firstChild,t.lastChild]})}),[r,r]})}return h(e=>{let t=_e().content.cloneNode(!0).firstChild,n=t,r;O(()=>{let e=Xe,t=e===!1||e==null?``:String(e);Object.is(r,t)||(r=t,n.setAttribute(`class`,t))});let i;return O(()=>{let e=U.get().table,t=u(e);Object.is(i,t)||(i=t,n.style.cssText=t)}),[t,t]})},{Head:(t,n,r)=>{let i=z(w(t,`children`)),a=z(w(t,`className`));return d(h(t=>{let n=ve().content.cloneNode(!0).firstChild,r=n,o=n.childNodes[0],s=o.parentNode,c;return O(()=>{let e=a.get()||void 0,t=e===!1||e==null?``:String(e);Object.is(c,t)||(c=t,r.setAttribute(`class`,t))}),e({parent:s,before:o},()=>i.get(),()=>({})),[n,n]}),e=>y(()=>{i.set(e.children),a.set(e.className)}),()=>v(t))},Body:(t,n,r)=>{let i=z(w(t,`children`)),a=z(w(t,`className`));return d(h(t=>{let n=ye().content.cloneNode(!0).firstChild,r=n,o=n.childNodes[0],s=o.parentNode,c;return O(()=>{let e=a.get()||void 0,t=e===!1||e==null?``:String(e);Object.is(c,t)||(c=t,r.setAttribute(`class`,t))}),e({parent:s,before:o},()=>i.get(),()=>({})),[n,n]}),e=>y(()=>{i.set(e.children),a.set(e.className)}),()=>v(t))},Foot:(t,n,r)=>{let i=z(w(t,`children`)),a=z(w(t,`className`));return d(h(t=>{let n=be().content.cloneNode(!0).firstChild,r=n,o=n.childNodes[0],s=o.parentNode,c;return O(()=>{let e=a.get()||void 0,t=e===!1||e==null?``:String(e);Object.is(c,t)||(c=t,r.setAttribute(`class`,t))}),e({parent:s,before:o},()=>i.get(),()=>({})),[n,n]}),e=>y(()=>{i.set(e.children),a.set(e.className)}),()=>v(t))},TR:(t,n,r)=>{let i=z(w(t,`children`)),a=z(w(t,`className`));return d(h(t=>{let n=xe().content.cloneNode(!0).firstChild,r=n,o=n.childNodes[0],s=o.parentNode,c;return O(()=>{let e=a.get()||void 0,t=e===!1||e==null?``:String(e);Object.is(c,t)||(c=t,r.setAttribute(`class`,t))}),e({parent:s,before:o},()=>i.get(),()=>({})),[n,n]}),e=>y(()=>{i.set(e.children),a.set(e.className)}),()=>v(t))},TH:(t,n,r)=>{let i=z(w(t,`children`)),a=z(w(t,`className`));return d(h(t=>{let n=le().content.cloneNode(!0).firstChild,r=n,o=n.childNodes[0],s=o.parentNode,c;return O(()=>{let e=a.get()||void 0,t=e===!1||e==null?``:String(e);Object.is(c,t)||(c=t,r.setAttribute(`class`,t))}),e({parent:s,before:o},()=>i.get(),()=>({})),[n,n]}),e=>y(()=>{i.set(e.children),a.set(e.className)}),()=>v(t))},TD:(t,n,r)=>{let i=z(w(t,`children`)),a=z(w(t,`className`));return d(h(t=>{let n=Se().content.cloneNode(!0).firstChild,r=n,o=n.childNodes[0],s=o.parentNode,c;return O(()=>{let e=a.get()||void 0,t=e===!1||e==null?``:String(e);Object.is(c,t)||(c=t,r.setAttribute(`class`,t))}),e({parent:s,before:o},()=>i.get(),()=>({})),[n,n]}),e=>y(()=>{i.set(e.children),a.set(e.className)}),()=>v(t))}}),nt=B(`<div class="text-sm leading-6"><div>团队：<!--rue:text-hole:0--></div><div>地址：<!--rue:text-hole:1--></div></div>`),rt=B(`<div class="flex justify-between text-sm"><span>当前行数：<!--rue:text-hole:0--></span><span>平均绩效： <!--rue:text-hole:1--></span></div>`),it=B(`<div class="text-sm font-medium">成员列表（当前页 <!--rue:text-hole:0--> 行）</div>`),at=B(`<div class="overflow-x-auto rounded-box border border-base-300 bg-base-100 p-4"><!--rue:opaque-hole:0--></div>`),ot=B(`<div class="grid gap-4 lg:grid-cols-2"><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="mb-3 text-sm font-medium">带背景与激活行</div><!--rue:opaque-hole:0--></div><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="mb-3 text-sm font-medium">hover / zebra / xs</div><!--rue:opaque-hole:1--></div></div>`),st=B(`<div class="space-y-4 rounded-box border border-base-300 bg-base-100 p-4"><div class="flex flex-wrap items-center gap-2 text-sm"><!--rue:text-hole:0--><button class="btn btn-ghost btn-xs">清空排序</button><button>只看 Jim</button><button>只看 London</button><button>Jim + London</button><button class="btn btn-ghost btn-xs">清空筛选</button><button class="btn btn-ghost btn-xs">清空全部</button><span class="opacity-70">筛选：Name <!--rue:text-hole:1--> / Address <!--rue:text-hole:2-->； 当前排序： <!--rue:text-hole:3--> / <!--rue:text-hole:4--></span></div><!--rue:opaque-hole:5--></div>`),ct=B(`<div class="space-y-4 rounded-box border border-base-300 bg-base-100 p-4"><div class="flex flex-wrap gap-2 text-sm"><button class="btn btn-ghost btn-xs">语文 + 数学降序</button><button class="btn btn-ghost btn-xs">三科降序</button><button class="btn btn-ghost btn-xs">语文升序 + 英语降序</button><button class="btn btn-ghost btn-xs">清空排序</button></div><div class="flex flex-wrap items-center gap-2 text-sm"><!--rue:text-hole:0--><span class="opacity-70">当前优先级：<!--rue:text-hole:1--></span></div><!--rue:opaque-hole:2--></div>`),lt=B(`<div class="space-y-4 rounded-box border border-base-300 bg-base-100 p-4"><div class="flex flex-wrap gap-2 text-sm"><!--rue:text-hole:0--></div><!--rue:opaque-hole:1--></div>`),ut=B(`<div class="grid gap-4 lg:grid-cols-2"><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="mb-3 text-sm">多选：当前 <!--rue:text-hole:0--></div><!--rue:opaque-hole:1--></div><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="mb-3 text-sm">单选：当前 <!--rue:text-hole:2--></div><!--rue:opaque-hole:3--></div></div>`),dt=B(`<div class="grid gap-4 lg:grid-cols-2"><div class="rounded-box border border-base-300 bg-base-100 p-4"><!--rue:opaque-hole:0--></div><div class="rounded-box border border-base-300 bg-base-100 p-4"><!--rue:opaque-hole:1--></div></div>`),ft=B(`<div class="rounded-box border border-base-300 bg-base-100 p-4"><!--rue:opaque-hole:0--></div>`),pt=B(`<div class="space-y-4 rounded-box border border-base-300 bg-base-100 p-4"><div class="flex flex-wrap gap-2 text-sm"><button class="btn btn-ghost btn-xs"><!--rue:text-hole:0--></button><span>最近操作：<!--rue:text-hole:1--></span></div><!--rue:opaque-hole:2--></div>`),mt=B(`<div class="grid gap-4 xl:grid-cols-2"><div class="h-72 overflow-auto rounded-box border border-base-300 bg-base-100 p-4"><!--rue:opaque-hole:0--></div><div class="rounded-box border border-base-300 bg-base-100 p-4 overflow-x-auto"><!--rue:opaque-hole:1--></div></div>`),ht=B(`<div class="component-preview not-prose text-base-content my-6 lg:my-12"><div class="flex flex-wrap items-start justify-between gap-3"><div><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># <!--rue:text-hole:0--></h2><!--rue:text-hole:1--></div></div><!--rue:opaque-hole:2--><!--rue:text-hole:3--></div>`),gt=B(`<div class="not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100"><table class="table table-zebra"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><!--rue:text-hole:0--></tbody></table></div>`),_t=B(`<button class="btn btn-ghost btn-xs">查看</button>`),Z=B(`<div class="max-w-none prose prose-sm md:prose-base"><h1>Table 表格</h1><p>Rue Table 现在同时覆盖数据驱动表格和 daisyUI 风格的静态表格写法，使用 Rue 当前视觉风格，并补充更完整的 排序、筛选、分页、选择、展开与分组表头能力。</p><p>可以先从基础用法进入，再根据场景查看筛选排序、选择模式、滚动布局与分组表头。静态样式写法仍然提供，可继续 使用 <code>Table.Head</code>、<code>Table.Body</code> 等复合组件。</p><h2>何时使用</h2><ul><li>需要展示结构化列表数据，并同时提供排序、筛选、分页等交互。</li><li>适合使用 Rue / daisyUI 的表格视觉风格，同时使用数据表式 API。</li><li>基础简单静态表格，也有复杂后台表格，想统一在一个组件里处理。</li></ul><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--><!--rue:opaque-hole:5--><!--rue:opaque-hole:6--><!--rue:opaque-hole:7--><!--rue:opaque-hole:8--><!--rue:opaque-hole:9--><h2 id="table-api">API</h2><p>当前页面只列出 Rue Table 当前最常用的配置项，优先对应实际使用场景。</p><h3>Table</h3><!--rue:opaque-hole:10--><h3>Column</h3><!--rue:opaque-hole:11--><h3>rowSelection</h3><!--rue:opaque-hole:12--><h3>expandable</h3><!--rue:opaque-hole:13--><h2>FAQ</h2><h3>数据驱动和静态结构怎么选？</h3><p>需要排序、筛选、分页、选择、展开时优先使用 <code>columns + dataSource</code> 。只想快速输出结构化样式， 或需要完全手写表格结构时，可以使用复合组件写法即可。</p><h3>为什么筛选或排序后会回到第一页？</h3><p>这是为了避免当前页在筛选后没有数据。如果你希望完全自行控制分页，把 <code>pagination.current</code> 和<code>onChange</code> 一起受控即可。</p><h3>固定列和 pinCols 的关系是什么？</h3><p><code>pinCols</code> 负责启用 daisyUI 的固定列视觉能力，具体哪一列固定则由列上的 <code>fixedCol</code> 或 <code>fixed</code> 控制。静态结构写法中，通常把固定列单元格写成 <code>TH</code> 会更自然。</p></div>`),vt=(t,r,i)=>h(r=>{let i=ht().content.cloneNode(!0).firstChild,a=i.childNodes[0].childNodes[0].childNodes[0].childNodes[1],o=a.parentNode,s=i.childNodes[0].childNodes[0].childNodes[1],c=s.parentNode,l=i.childNodes[1],u=l.parentNode,d=i.childNodes[2],f=d.parentNode;e({parent:o,before:a},()=>H(w(t,`title`)),()=>({})),e({parent:c,before:s},()=>w(t,`summary`)?(r,i,a)=>m(r,a,()=>h(()=>{let r=A(),i=E(`p`,r);x(r,i),n(i,`m-0 text-sm opacity-70`);let a=M(`rue:slot:anchor`);x(i,a),e({parent:i,before:a},()=>H(w(t,`summary`)),()=>({}));let o=C(``),s=C(``);return r.insertBefore(o,r.firstChild),r.appendChild(s),[r.firstChild,r.lastChild]})):(e,t,n)=>{let r=()=>V(e=>{let t=C(``);return[t,t]});return e==null?r():m(e,n,r)},()=>({}));let g=(e,n,r)=>{let i=()=>p(W,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:w(t,`tab`).value,onChange:e=>w(t,`tab`).value=e,className:`mb-3 mt-4`}));return e==null?i():m(e,r,i)},_=l.nextSibling;return u.removeChild(l),e({parent:u,before:_},()=>g,()=>({})),e({parent:f,before:d},()=>w(t,`tab`).value===`preview`?H(D(w(t,`preview`),t,[])):(e,n,r)=>m(e,r,()=>p(U,()=>({className:`mt-2`,lang:`tsx`,code:w(t,`code`)}))),()=>({})),[i,i]}),yt=(e,t,n)=>{let r=z(w(e,`rows`));return d(h(e=>{let t=gt().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[1].childNodes[0],i=n.parentNode,a=B(`<tr><td><code><!--rue:text-hole:0--></code></td><td>rue:row-text</td><td><code><!--rue:text-hole:2--></code></td><td><code><!--rue:text-hole:3--></code></td></tr>`),o=[];return N(()=>{let e=r.get()||[];o=S(i,n,o,e,(e,t)=>e.prop,(e,t,n)=>{let r=e,i;return k(e=>{let t=a().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0].childNodes[0],o=n.parentNode,s=t.childNodes[1].childNodes[0];s.parentNode;let c=t.childNodes[2].childNodes[0].childNodes[0],l=c.parentNode,u=t.childNodes[3].childNodes[0].childNodes[0],d=u.parentNode,f=C(``);o.insertBefore(f,n),o.removeChild(n);let p=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);f.textContent=p;let m=r.description==null||typeof r.description==`boolean`?``:String(r.description);s.textContent=m;let h=C(``);l.insertBefore(h,c),l.removeChild(c);let g=r.type==null||typeof r.type==`boolean`?``:String(r.type);h.textContent=g;let _=C(``);d.insertBefore(_,u),d.removeChild(u);let v=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);return _.textContent=v,i=()=>{{let e=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);Object.is(p,e)||(f.textContent=e,p=e)}{let e=r.description==null||typeof r.description==`boolean`?``:String(r.description);Object.is(m,e)||(s.textContent=e,m=e)}{let e=r.type==null||typeof r.type==`boolean`?``:String(r.type);Object.is(g,e)||(h.textContent=e,g=e)}{let e=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);Object.is(v,e)||(_.textContent=e,v=e)}},[t,t]},(n,a)=>{e=n,t=a,r=n,i()},void 0,n)},!1,!0)}),P(()=>b(o)),[t,t]}),e=>y(()=>{r.set(e.rows)}),()=>v(e))},bt=[{key:`1`,name:`林青`,age:28,city:`杭州`,role:`设计工程师`,team:`体验平台`,status:`active`,score:92,salary:26e3,visits:148,address:`云谷路 88 号`},{key:`2`,name:`周宁`,age:34,city:`上海`,role:`前端工程师`,team:`设计系统`,status:`active`,score:88,salary:31e3,visits:203,address:`武康路 12 号`},{key:`3`,name:`刘溪`,age:41,city:`深圳`,role:`产品经理`,team:`商业化`,status:`leave`,score:79,salary:35e3,visits:167,address:`深南大道 100 号`},{key:`4`,name:`陈默`,age:26,city:`成都`,role:`测试开发`,team:`质量平台`,status:`trial`,score:95,salary:22e3,visits:98,address:`天府三街 18 号`},{key:`5`,name:`顾安`,age:31,city:`北京`,role:`运营分析`,team:`增长`,status:`active`,score:83,salary:24500,visits:132,address:`望京 SOHO`}],xt=[{id:`1`,item:`套餐 A`,owner:`前台`,channel:`门店`,stock:42,price:`199`},{id:`2`,item:`套餐 B`,owner:`门店`,channel:`小程序`,stock:36,price:`299`},{id:`3`,item:`套餐 C`,owner:`线上`,channel:`官网`,stock:28,price:`399`},{id:`4`,item:`体验卡`,owner:`运营`,channel:`社群`,stock:86,price:`99`},{id:`5`,item:`企业版`,owner:`销售`,channel:`直销`,stock:12,price:`1299`},{id:`6`,item:`家庭版`,owner:`门店`,channel:`门店`,stock:25,price:`699`},{id:`7`,item:`增值包`,owner:`客服`,channel:`续费`,stock:57,price:`159`},{id:`8`,item:`旗舰包`,owner:`线上`,channel:`官网`,stock:18,price:`999`},{id:`9`,item:`季度包`,owner:`增长`,channel:`投放`,stock:64,price:`499`},{id:`10`,item:`年度包`,owner:`销售`,channel:`直销`,stock:21,price:`1599`}],St=[{key:`1`,name:`林青`,role:`设计工程师`,team:`体验平台`,city:`杭州`,score:92,visits:148,salary:26e3,address:`云谷路 88 号`},{key:`2`,name:`周宁`,role:`前端工程师`,team:`设计系统`,city:`上海`,score:88,visits:216,salary:31e3,address:`武康路 12 号`},{key:`3`,name:`刘溪`,role:`产品经理`,team:`商业化`,city:`深圳`,score:76,visits:174,salary:35e3,address:`深南大道 100 号`},{key:`4`,name:`陈默`,role:`测试开发`,team:`质量平台`,city:`成都`,score:95,visits:98,salary:22e3,address:`天府三街 18 号`},{key:`5`,name:`顾安`,role:`运营分析`,team:`增长`,city:`北京`,score:83,visits:132,salary:24500,address:`望京 SOHO`},{key:`6`,name:`许嘉`,role:`数据分析`,team:`策略`,city:`南京`,score:91,visits:121,salary:27e3,address:`软件大道 66 号`},{key:`7`,name:`何澈`,role:`客户成功`,team:`企业服务`,city:`苏州`,score:87,visits:154,salary:24e3,address:`金鸡湖大道 9 号`}],Q=[{key:`1`,name:`John Brown`,age:32,address:`New York No. 1 Lake Park`},{key:`2`,name:`Jim Green`,age:42,address:`London No. 1 Lake Park`},{key:`3`,name:`Joe Black`,age:32,address:`Sydney No. 1 Lake Park`},{key:`4`,name:`Jim Red`,age:32,address:`London No. 2 Lake Park`}],$=[{key:`name`,label:`姓名`},{key:`age`,label:`年龄`},{key:`address`,label:`地址`}],Ct=[{key:`1`,name:`John Brown`,chinese:98,math:60,english:70},{key:`2`,name:`Jim Green`,chinese:98,math:66,english:89},{key:`3`,name:`Joe Black`,chinese:98,math:90,english:70},{key:`4`,name:`Jim Red`,chinese:88,math:99,english:89}],wt=[{key:`chinese`,label:`语文`,priority:3},{key:`math`,label:`数学`,priority:2},{key:`english`,label:`英语`,priority:1}],Tt=e=>wt.some(t=>t.key===e),Et=e=>e===`ascend`||e===`descend`,Dt=[{key:`1`,name:`Cy Ganderton`,team:`Design Ops`,city:`Hangzhou`,owner:`Hart Hagerty`,updatedAt:`2026-04-18`},{key:`2`,name:`Brice Swyre`,team:`Growth`,city:`Shanghai`,owner:`Yancy Tear`,updatedAt:`2026-04-19`},{key:`3`,name:`Marjy Ferencz`,team:`Infra`,city:`Shenzhen`,owner:`Maribeth Popping`,updatedAt:`2026-04-21`}],Ot=[{key:`name`,label:`Name`},{key:`team`,label:`Team`},{key:`city`,label:`City`},{key:`owner`,label:`Owner`},{key:`updatedAt`,label:`Updated`}],kt=e=>Ot.map(t=>({key:t.key,title:t.label,dataIndex:t.key,hidden:!e.includes(t.key)})),At=[{prop:`columns`,description:`列配置，支持分组表头、排序、筛选、隐藏列与单元格属性。`,type:`ColumnItem[]`,defaultValue:`-`},{prop:`dataSource`,description:`数据数组。`,type:`any[]`,defaultValue:`-`},{prop:`rowKey`,description:`行主键，可传字段名或函数。`,type:`string | (record) => key`,defaultValue:"`key`"},{prop:`rowSelection`,description:`选择列配置，支持多选、单选、禁用项、表头标题。`,type:`object`,defaultValue:`-`},{prop:`expandable`,description:`展开行配置，支持按行点击展开与受控展开。`,type:`object`,defaultValue:`-`},{prop:`pagination`,description:"分页配置，设为 `false` 时关闭分页。",type:`object | false`,defaultValue:`-`},{prop:`scroll`,description:`横向 / 纵向滚动配置，可在变更后自动回到顶部。`,type:`object`,defaultValue:`-`},{prop:`summary`,description:`汇总栏渲染。`,type:`(currentData, info) => any`,defaultValue:`-`}],jt=[{prop:`title`,description:`列标题，支持传节点或函数。`,type:`any | (context) => any`,defaultValue:`-`},{prop:`dataIndex`,description:`字段路径，支持字符串和数组路径。`,type:`string | string[]`,defaultValue:`-`},{prop:`sorter / sortOrder`,description:`本地排序、受控排序与多列排序。`,type:`boolean | fn | { compare?: fn; multiple?: number } / SortOrder`,defaultValue:`-`},{prop:`filters / filterDropdown / filteredValue`,description:`默认筛选菜单、自定义筛选面板与受控筛选值。`,type:`Filter.Item[] / render fn / any[]`,defaultValue:`-`},{prop:`filterSearch`,description:`筛选项搜索。`,type:`boolean | fn`,defaultValue:`false`},{prop:`children`,description:`分组表头子列。`,type:`ColumnItem[]`,defaultValue:`-`},{prop:`hidden`,description:`隐藏列但保持配置。`,type:`boolean`,defaultValue:`false`},{prop:`onCell / onHeaderCell`,description:`给单元格注入 className、style、colSpan、rowSpan 等属性。`,type:`fn`,defaultValue:`-`}],Mt=[{prop:`type`,description:`选择模式。`,type:"`checkbox` | `radio`",defaultValue:"`checkbox`"},{prop:`columnTitle`,description:`选择列表头内容。`,type:`any`,defaultValue:`-`},{prop:`hideSelectAll`,description:`隐藏全选框。`,type:`boolean`,defaultValue:`false`},{prop:`getCheckboxProps`,description:`为某一行注入 disabled 等状态。`,type:`(record) => object`,defaultValue:`-`},{prop:`onSelect / onSelectAll / onChange`,description:`选择行为回调。`,type:`fn`,defaultValue:`-`}],Nt=[{prop:`expandedRowRender`,description:`展开内容渲染函数。`,type:`(record, index) => any`,defaultValue:`-`},{prop:`expandRowByClick`,description:`点击行即可展开。`,type:`boolean`,defaultValue:`false`},{prop:`showExpandColumn`,description:`是否展示展开列。`,type:`boolean`,defaultValue:`true`},{prop:`rowExpandable`,description:`按行控制是否可展开。`,type:`(record) => boolean`,defaultValue:`-`},{prop:`defaultExpandedRowKeys / expandedRowKeys`,description:`默认展开 / 受控展开。`,type:`key[]`,defaultValue:`-`}],Pt=`import { Table } from '@rue-js/design'
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
}`,Rt=`import { ref } from '@rue-js/rue'
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
}`,zt=`import { ref } from '@rue-js/rue'
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
}`,Bt=`import { ref } from '@rue-js/rue'
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
}`,Vt=`import { Table } from '@rue-js/design'
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
}`,Ht=`import { ref } from '@rue-js/rue'
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
}`,Ut=`import { Table } from '@rue-js/design'
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
}`,Wt=(t,r,i)=>{let o=F(`preview`),s=F(`preview`),c=F(`preview`),u=F(`preview`),d=F(`preview`),f=F(`preview`),v=F(`preview`),y=F(`preview`),S=F(`preview`),w=F(`preview`),D=F([`2`]),k=F([`2`]),I=F(`未点击`),B=F([`Jim`]),U=F([`London`]),W=F({columnKey:`age`,order:`descend`}),G=F({chinese:`descend`,math:`descend`}),K=F([`name`,`team`,`city`,`owner`]),te=F(kt(K.value)),ne=F(!1),re=F([`2`]),q=()=>[{key:`name`,title:`Name`,filters:[{text:`Jim`,value:`Jim`},{text:`Joe`,value:`Joe`},{text:`John`,value:`John`}],dataIndex:`name`,filteredValue:B.value,filterSearch:!0,onFilter:(e,t)=>t.name.includes(e),sorter:(e,t)=>e.name.length-t.name.length,sortDirections:[`descend`,`ascend`],sortOrder:W.value.columnKey===`name`?W.value.order:null},{key:`age`,title:`Age`,dataIndex:`age`,sorter:(e,t)=>e.age-t.age,sortDirections:[`descend`,`ascend`],sortOrder:W.value.columnKey===`age`?W.value.order:null},{key:`address`,title:`Address`,filters:[{text:`London`,value:`London`},{text:`New York`,value:`New York`},{text:`Sydney`,value:`Sydney`}],dataIndex:`address`,filteredValue:U.value,filterSearch:!0,onFilter:(e,t)=>t.address.includes(e),sorter:(e,t)=>e.address.length-t.address.length,sortDirections:[`descend`,`ascend`],sortOrder:W.value.columnKey===`address`?W.value.order:null,ellipsis:!0}],ie=F(q()),ae=()=>{ie.value=q()},oe=()=>[{title:`Name`,dataIndex:`name`},{key:`chinese`,title:`Chinese Score`,dataIndex:`chinese`,sortOrder:G.value.chinese??null,sorter:{compare:(e,t)=>e.chinese-t.chinese,multiple:3},sortDirections:[`descend`,`ascend`]},{key:`math`,title:`Math Score`,dataIndex:`math`,sortOrder:G.value.math??null,sorter:{compare:(e,t)=>e.math-t.math,multiple:2},sortDirections:[`descend`,`ascend`]},{key:`english`,title:`English Score`,dataIndex:`english`,sortOrder:G.value.english??null,sorter:{compare:(e,t)=>e.english-t.english,multiple:1},sortDirections:[`descend`,`ascend`]}],se=F(oe()),ce=()=>{se.value=oe()},le=e=>{let t=W.value,n=t.columnKey===e?t.order===`descend`?`ascend`:t.order===`ascend`?null:`descend`:`descend`;W.value=n?{columnKey:e,order:n}:{columnKey:null,order:null},ae()},ue=(e,t)=>{let n=W.value.columnKey===e?W.value.order:null;return n===`descend`?`${t}降序`:n===`ascend`?`${t}升序`:`${t}排序`},de=()=>$.find(e=>e.key===W.value.columnKey)?.label??`无`,fe=()=>W.value.order===`descend`?`降序`:W.value.order===`ascend`?`升序`:`无`,pe=e=>{G.value={...e},ce()},me=e=>{let t=G.value[e]??null,n=t===`descend`?`ascend`:t===`ascend`?null:`descend`,r={...G.value};n?r[e]=n:delete r[e],G.value=r,ce()},he=e=>{let t=G.value[e.key];return t===`descend`?`${e.label}降序`:t===`ascend`?`${e.label}升序`:`${e.label}排序`},ge=()=>wt.filter(e=>G.value[e.key]).sort((e,t)=>t.priority-e.priority).map(e=>{let t=G.value[e.key]===`descend`?`降序`:`升序`;return`${e.label}${t} P${e.priority}`}).join(` / `)||`无`,_e=e=>{let t=K.value.includes(e)?K.value.filter(t=>t!==e):[...K.value,e];K.value=t,te.value=kt(t)},ve=[{title:`姓名`,dataIndex:`name`},{title:`城市`,dataIndex:`city`},{title:`岗位`,dataIndex:`role`},{title:`团队`,dataIndex:`team`}],ye=e=>[{title:`成员信息`,children:[{title:`姓名`,dataIndex:`name`,width:120},{title:`城市`,dataIndex:`city`,width:120}]},{title:`工作概览`,children:[{title:`岗位`,dataIndex:`role`,ellipsis:!0},{title:`团队`,dataIndex:`team`,ellipsis:!0},{title:`月薪`,dataIndex:`salary`,align:`right`,hidden:e}]},{title:`操作`,key:`action`,width:120,align:`center`,render:(e,t)=>h(e=>{let n=_t().content.cloneNode(!0).firstChild,r=n;return r.setAttribute(`class`,`btn btn-ghost btn-xs`),P(L(e,r,`click`,()=>()=>I.value=`操作 ${t.name}`)),[n,n]}),onCell:(e,t)=>({className:t%2==0?`bg-base-100`:`bg-base-200/30`})}],be=F(ye(ne.value)),xe=()=>{ne.value=!ne.value,be.value=ye(ne.value)},Se=[{title:`姓名`,dataIndex:`name`,width:120,fixedCol:!0},{title:`城市`,dataIndex:`city`,width:120},{title:`岗位`,dataIndex:`role`,width:180,ellipsis:!0},{title:`团队`,dataIndex:`team`,width:160},{title:`地址`,dataIndex:`address`,width:220,ellipsis:!0},{title:`访问量`,dataIndex:`visits`,width:120,align:`right`}];return g(()=>p(ee,()=>({children:(t,r,i)=>{let g=()=>h(t=>{let r=A(),i=Z().content.cloneNode(!0),g=i.firstChild,F=g.childNodes[5],ee=F.parentNode,q=g.childNodes[6],oe=q.parentNode,ye=g.childNodes[7],Ce=ye.parentNode,we=g.childNodes[8],Te=we.parentNode,Ee=g.childNodes[9],J=Ee.parentNode,Y=g.childNodes[10],De=Y.parentNode,Oe=g.childNodes[11],ke=Oe.parentNode,Ae=g.childNodes[12],je=Ae.parentNode,Me=g.childNodes[13],Ne=Me.parentNode,Pe=g.childNodes[14],Fe=Pe.parentNode,Ie=g.childNodes[18],Le=Ie.parentNode,Re=g.childNodes[20],ze=Re.parentNode,Be=g.childNodes[22],Ve=Be.parentNode,He=g.childNodes[24],Ue=He.parentNode;r.appendChild(i);let We=(t,n,r)=>{let i=()=>p(vt,()=>({title:`基础数据表格`,summary:`最直接的 columns + dataSource 用法，适合作为大多数列表页的起点。`,tab:o,preview:()=>h(t=>{let n=at().content.cloneNode(!0).firstChild,r=n.childNodes[0],i=r.parentNode,a=(e,t,n)=>{let r=()=>p(X,()=>({className:`w-full`,columns:ve,dataSource:bt}));return e==null?r():m(e,n,r)},o=r.nextSibling;return i.removeChild(r),e({parent:i,before:o},()=>a,()=>({})),[n,n]}),code:Pt}));return t==null?i():m(t,r,i)},Ge=F.nextSibling;ee.removeChild(F),e({parent:ee,before:Ge},()=>We,()=>({}));let Ke=(t,n,r)=>{let i=()=>p(vt,()=>({title:`视觉风格与静态行态`,summary:`使用当前视觉类示例：背景、激活行、hover、zebra 与尺寸示例。`,tab:s,preview:()=>h(t=>{let n=ot().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[1],i=r.parentNode,o=n.childNodes[1].childNodes[1],s=o.parentNode,c=(e,t,n)=>{let r=()=>p(X,()=>({className:`w-full`,children:(e,t,n)=>{let r=()=>h(e=>{let t=A();a(t,X.Head,()=>({children:(e,t,n)=>{let r=()=>h(e=>{let t=A();a(t,X.TR,()=>({children:(e,t,n)=>{let r=()=>h(e=>{let t=A();a(t,X.TH,()=>({children:(e,t,n)=>{let r=()=>V(e=>{let t=A();x(t,C(`姓名`));let n=C(``),r=C(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():m(e,n,r)}})),a(t,X.TH,()=>({children:(e,t,n)=>{let r=()=>V(e=>{let t=A();x(t,C(`岗位`));let n=C(``),r=C(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():m(e,n,r)}})),a(t,X.TH,()=>({children:(e,t,n)=>{let r=()=>V(e=>{let t=A();x(t,C(`城市`));let n=C(``),r=C(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():m(e,n,r)}}));let n=C(``),r=C(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():m(e,n,r)}}));let n=C(``),r=C(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():m(e,n,r)}})),a(t,X.Body,()=>({children:(e,t,n)=>{let r=()=>h(e=>{let t=A();a(t,X.TR,()=>({className:`bg-base-200`,children:(e,t,n)=>{let r=()=>h(e=>{let t=A();a(t,X.TD,()=>({children:(e,t,n)=>{let r=()=>V(e=>{let t=A();x(t,C(`林青`));let n=C(``),r=C(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():m(e,n,r)}})),a(t,X.TD,()=>({children:(e,t,n)=>{let r=()=>V(e=>{let t=A();x(t,C(`设计工程师`));let n=C(``),r=C(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():m(e,n,r)}})),a(t,X.TD,()=>({children:(e,t,n)=>{let r=()=>V(e=>{let t=A();x(t,C(`杭州`));let n=C(``),r=C(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():m(e,n,r)}}));let n=C(``),r=C(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():m(e,n,r)}})),a(t,X.TR,()=>({className:`active`,children:(e,t,n)=>{let r=()=>h(e=>{let t=A();a(t,X.TD,()=>({children:(e,t,n)=>{let r=()=>V(e=>{let t=A();x(t,C(`周宁`));let n=C(``),r=C(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():m(e,n,r)}})),a(t,X.TD,()=>({children:(e,t,n)=>{let r=()=>V(e=>{let t=A();x(t,C(`前端工程师`));let n=C(``),r=C(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():m(e,n,r)}})),a(t,X.TD,()=>({children:(e,t,n)=>{let r=()=>V(e=>{let t=A();x(t,C(`上海`));let n=C(``),r=C(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():m(e,n,r)}}));let n=C(``),r=C(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():m(e,n,r)}}));let n=C(``),r=C(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():m(e,n,r)}}));let n=C(``),r=C(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():m(e,n,r)}}));return e==null?r():m(e,n,r)},l=r.nextSibling;i.removeChild(r),e({parent:i,before:l},()=>c,()=>({}));let u=(e,t,n)=>{let r=()=>p(X,()=>({className:`w-full`,zebra:!0,size:`xs`,rowHoverable:!0,columns:ve,dataSource:bt.slice(0,3)}));return e==null?r():m(e,n,r)},d=o.nextSibling;return s.removeChild(o),e({parent:s,before:d},()=>u,()=>({})),[n,n]}),code:Ft}));return t==null?i():m(t,r,i)},qe=q.nextSibling;oe.removeChild(q),e({parent:oe,before:qe},()=>Ke,()=>({}));let Je=(t,n,r)=>{let i=()=>p(vt,()=>({title:`可控筛选与排序`,summary:`恢复外部控制台式的筛选与排序示例，避免交互状态混在一起。`,tab:c,preview:()=>h(t=>{let n=st().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[1],i=n.childNodes[0].childNodes[2],a=n.childNodes[0].childNodes[3],o=n.childNodes[0].childNodes[4],s=n.childNodes[0].childNodes[5],c=n.childNodes[0].childNodes[6],u=n.childNodes[0].childNodes[0],d=u.parentNode,f=n.childNodes[0].childNodes[7].childNodes[1],g=f.parentNode,_=n.childNodes[0].childNodes[7].childNodes[3],v=_.parentNode,y=n.childNodes[0].childNodes[7].childNodes[5],S=y.parentNode,w=n.childNodes[0].childNodes[7].childNodes[7],D=w.parentNode,k=n.childNodes[1],A=k.parentNode;r.setAttribute(`class`,`btn btn-ghost btn-xs`),P(L(t,r,`click`,()=>()=>{W.value={columnKey:null,order:null},ae()}));let F;O(()=>{let e=`btn btn-xs ${B.value.length===1&&B.value[0]===`Jim`&&U.value.length===0?`btn-primary`:`btn-ghost`}`,t=e===!1||e==null?``:String(e);Object.is(F,t)||(F=t,i.setAttribute(`class`,t))}),P(L(t,i,`click`,()=>()=>{B.value=[`Jim`],U.value=[],ae()}));let I;O(()=>{let e=`btn btn-xs ${U.value.length===1&&U.value[0]===`London`&&B.value.length===0?`btn-primary`:`btn-ghost`}`,t=e===!1||e==null?``:String(e);Object.is(I,t)||(I=t,a.setAttribute(`class`,t))}),P(L(t,a,`click`,()=>()=>{B.value=[],U.value=[`London`],ae()}));let R;O(()=>{let e=`btn btn-xs ${B.value.length===1&&B.value[0]===`Jim`&&U.value.length===1&&U.value[0]===`London`?`btn-primary`:`btn-ghost`}`,t=e===!1||e==null?``:String(e);Object.is(R,t)||(R=t,o.setAttribute(`class`,t))}),P(L(t,o,`click`,()=>()=>{B.value=[`Jim`],U.value=[`London`],ae()})),s.setAttribute(`class`,`btn btn-ghost btn-xs`),P(L(t,s,`click`,()=>()=>{B.value=[],U.value=[],ae()})),c.setAttribute(`class`,`btn btn-ghost btn-xs`),P(L(t,c,`click`,()=>()=>{B.value=[],U.value=[],W.value={columnKey:null,order:null},ae()}));let V=[];N(()=>{V=T(d,u,V,$||[],(e,t)=>e.key,(t,n)=>{let r=z(t);return j((t,n,i)=>{let a=()=>h(t=>{let n=E(`button`,t),i;O(()=>{let e=`btn btn-xs ${W.value.columnKey===r.get().key?`btn-primary`:`btn-ghost`}`,t=e===!1||e==null?``:String(e);Object.is(i,t)||(i=t,n.setAttribute(`class`,t))}),P(L(t,n,`click`,()=>()=>le(r.get().key)));let a=M(`rue:compiled-slot`);return x(n,a),e({parent:n,before:a},()=>((e,t)=>(n,r,i)=>H(ue(e,t))(n,r,i))(r.get().key,r.get().label),()=>({})),[n,n]});return t==null?a():m(t,i,a)},(e,i)=>{t=e,n=i,r.set(e)},void 0)},!1,!1)}),P(()=>b(V)),e({parent:g,before:f},()=>H(B.value.join(`, `)||`无`),()=>({})),e({parent:v,before:_},()=>H(U.value.join(`, `)||`无`),()=>({}));let G=C(``);S.insertBefore(G,y),S.removeChild(y),l(G,()=>de());let ee=C(``);D.insertBefore(ee,w),D.removeChild(w),l(ee,()=>fe());let K=(e,t,n)=>{let r=()=>p(X,()=>({className:`w-full`,columns:ie.value,dataSource:Q,sortDirections:[`descend`,`ascend`],onChange:(e,t,n)=>{B.value=Array.isArray(t?.name)&&t.name.length>0?t.name:[],U.value=Array.isArray(t?.address)&&t.address.length>0?t.address:[];let r=Array.isArray(n)?n[0]:n;W.value={columnKey:r?.order?r?.columnKey??null:null,order:r?.order??null},ae()}}));return e==null?r():m(e,n,r)},te=k.nextSibling;return A.removeChild(k),e({parent:A,before:te},()=>K,()=>({})),[n,n]}),code:It}));return t==null?i():m(t,r,i)},Ye=ye.nextSibling;Ce.removeChild(ye),e({parent:Ce,before:Ye},()=>Je,()=>({}));let Xe=(t,n,r)=>{let i=()=>p(vt,()=>({title:`多列排序（优先级组合）`,summary:`补回多列优先级排序示例，支持 { compare, multiple } 并按优先级组合排序。`,tab:u,preview:()=>h(t=>{let n=ct().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[0],i=n.childNodes[0].childNodes[1],a=n.childNodes[0].childNodes[2],o=n.childNodes[0].childNodes[3],s=n.childNodes[1].childNodes[0],c=s.parentNode,u=n.childNodes[1].childNodes[1].childNodes[1],d=u.parentNode,f=n.childNodes[2],g=f.parentNode;r.setAttribute(`class`,`btn btn-ghost btn-xs`),P(L(t,r,`click`,()=>()=>pe({chinese:`descend`,math:`descend`}))),i.setAttribute(`class`,`btn btn-ghost btn-xs`),P(L(t,i,`click`,()=>()=>pe({chinese:`descend`,math:`descend`,english:`descend`}))),a.setAttribute(`class`,`btn btn-ghost btn-xs`),P(L(t,a,`click`,()=>()=>pe({chinese:`ascend`,english:`descend`}))),o.setAttribute(`class`,`btn btn-ghost btn-xs`),P(L(t,o,`click`,()=>()=>pe({})));let _=[];N(()=>{_=T(c,s,_,wt||[],(e,t)=>e.key,(e,t)=>{let n=z(e);return j((e,t,r)=>{let i=()=>h(e=>{let t=E(`button`,e),r;O(()=>{let e=`btn btn-xs ${G.value[n.get().key]?`btn-primary`:`btn-ghost`}`,i=e===!1||e==null?``:String(e);Object.is(r,i)||(r=i,t.setAttribute(`class`,i))}),P(L(e,t,`click`,()=>()=>me(n.get().key)));let i=C(``);return x(t,i),l(i,()=>he(n.get())),[t,t]});return e==null?i():m(e,r,i)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),P(()=>b(_)),e({parent:d,before:u},()=>(e,t,n)=>H(ge())(e,t,n),()=>({}));let v=(e,t,n)=>{let r=()=>p(X,()=>({className:`w-full`,columns:se.value,dataSource:Ct,sortDirections:[`descend`,`ascend`],onChange:(e,t,n)=>{let r=Array.isArray(n)?n:n?.order?[n]:[];G.value=r.reduce((e,t)=>{let n=t?.columnKey,r=t?.order;return Tt(n)&&Et(r)&&(e[n]=r),e},{}),ce()}}));return e==null?r():m(e,n,r)},y=f.nextSibling;return g.removeChild(f),e({parent:g,before:y},()=>v,()=>({})),[n,n]}),code:Lt}));return t==null?i():m(t,r,i)},Ze=we.nextSibling;Te.removeChild(we),e({parent:Te,before:Ze},()=>Xe,()=>({}));let Qe=(t,r,i)=>{let a=()=>p(vt,()=>({title:`动态列显隐`,summary:`把基础的隐藏列示例 补回来，并用外部开关控制列可见性。`,tab:d,preview:()=>h(t=>{let r=lt().content.cloneNode(!0).firstChild,i=r.childNodes[0].childNodes[0],a=i.parentNode,o=r.childNodes[1],s=o.parentNode,c=[];N(()=>{c=T(a,i,c,Ot||[],(e,t)=>e.key,(e,t)=>{let r=z(e);return j((e,t,i)=>{let a=()=>h(()=>{let e=A(),t=E(`button`,e);x(e,t),O(()=>{n(t,`btn btn-xs ${K.value.includes(r.get().key)?`btn-primary`:`btn-ghost`}`)});let i=e=>{let t=()=>_e(r.get().key);typeof t==`function`&&t(e)};t.addEventListener(`click`,i),P(()=>t.removeEventListener(`click`,i));let a=_(t);x(t,a),O(()=>{R(a,K.value.includes(r.get().key)?`隐藏 ${r.get().label}`:`显示 ${r.get().label}`)});let o=C(``),s=C(``);return e.insertBefore(o,e.firstChild),e.appendChild(s),[e.firstChild,e.lastChild]});return e==null?a():m(e,i,a)},(n,i)=>{e=n,t=i,r.set(n)},void 0)},!1,!1)}),P(()=>b(c));let l=(e,t,n)=>{let r=()=>p(X,()=>({className:`w-full`,columns:te.value,dataSource:Dt}));return e==null?r():m(e,n,r)},u=o.nextSibling;return s.removeChild(o),e({parent:s,before:u},()=>l,()=>({})),[r,r]}),code:Rt}));return t==null?a():m(t,i,a)},$e=Ee.nextSibling;J.removeChild(Ee),e({parent:J,before:$e},()=>Qe,()=>({}));let et=(t,n,r)=>{let i=()=>p(vt,()=>({title:`选择模式`,summary:`展示多选、单选、禁用项、部分禁用几类示例，并增加选择列表头与回调展示。`,tab:f,preview:()=>h(t=>{let n=ut().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[0].childNodes[1],i=r.parentNode,a=n.childNodes[0].childNodes[1],o=a.parentNode,s=n.childNodes[1].childNodes[0].childNodes[1],c=s.parentNode,l=n.childNodes[1].childNodes[1],u=l.parentNode;e({parent:i,before:r},()=>H(D.value.join(`, `)||`空`),()=>({}));let d=(e,t,n)=>{let r=()=>p(X,()=>({className:`w-full`,columns:[{title:`姓名`,dataIndex:`name`},{title:`团队`,dataIndex:`team`},{title:`状态`,dataIndex:`status`}],dataSource:bt,rowSelection:{columnTitle:`成员`,selectedRowKeys:D.value,getCheckboxProps:e=>({disabled:e.status===`leave`}),onChange:e=>D.value=[...e]}}));return e==null?r():m(e,n,r)},f=a.nextSibling;o.removeChild(a),e({parent:o,before:f},()=>d,()=>({})),e({parent:c,before:s},()=>H(k.value[0]??`空`),()=>({}));let h=(e,t,n)=>{let r=()=>p(X,()=>({className:`w-full`,columns:[{title:`姓名`,dataIndex:`name`},{title:`城市`,dataIndex:`city`}],dataSource:bt.slice(0,4),rowSelection:{type:`radio`,hideSelectAll:!0,selectedRowKeys:k.value,onChange:e=>k.value=[...e]}}));return e==null?r():m(e,n,r)},g=l.nextSibling;return u.removeChild(l),e({parent:u,before:g},()=>h,()=>({})),[n,n]}),code:zt}));return t==null?i():m(t,r,i)},tt=Y.nextSibling;De.removeChild(Y),e({parent:De,before:tt},()=>et,()=>({}));let ht=(t,n,r)=>{let i=()=>p(vt,()=>({title:`展开、摘要与空态`,summary:`把展开行、按行点击展开、summary 和 emptyText 放在同一个业务场景里。`,tab:v,preview:()=>h(t=>{let n=dt().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[0],i=r.parentNode,a=n.childNodes[1].childNodes[0],o=a.parentNode,s=(t,n,r)=>{let i=()=>p(X,()=>({className:`w-full`,columns:[{title:`姓名`,dataIndex:`name`},{title:`绩效`,dataIndex:`score`,align:`right`}],dataSource:bt,expandable:{expandedRowKeys:re.value,expandRowByClick:!0,onExpandedRowsChange:e=>re.value=[...e],expandedRowRender:t=>h(n=>{let r=nt().content.cloneNode(!0).firstChild,i=r.childNodes[0].childNodes[1],a=i.parentNode,o=r.childNodes[1].childNodes[1],s=o.parentNode;return e({parent:a,before:i},()=>H(t.team),()=>({})),e({parent:s,before:o},()=>H(t.address),()=>({})),[r,r]})},summary:t=>h(n=>{let r=rt().content.cloneNode(!0).firstChild,i=r.childNodes[0].childNodes[1],a=i.parentNode,o=r.childNodes[1].childNodes[1],s=o.parentNode;return e({parent:a,before:i},()=>H(t.length),()=>({})),e({parent:s,before:o},()=>H(Math.round(t.reduce((e,t)=>e+t.score,0)/t.length)),()=>({})),[r,r]})}));return t==null?i():m(t,r,i)},c=r.nextSibling;i.removeChild(r),e({parent:i,before:c},()=>s,()=>({}));let l=(e,t,n)=>{let r=()=>p(X,()=>({className:`w-full`,columns:[{title:`姓名`,dataIndex:`name`},{title:`团队`,dataIndex:`team`}],dataSource:[],emptyText:(e,t,n)=>{let r=()=>V(e=>{let t=E(`span`,e);return t.setAttribute(`class`,`text-sm opacity-60`),x(t,C(`暂无成员，请先创建数据。`)),[t,t]});return e==null?r():m(e,n,r)}}));return e==null?r():m(e,n,r)},u=a.nextSibling;return o.removeChild(a),e({parent:o,before:u},()=>l,()=>({})),[n,n]}),code:Bt}));return t==null?i():m(t,r,i)},gt=Oe.nextSibling;ke.removeChild(Oe),e({parent:ke,before:gt},()=>ht,()=>({}));let _t=(t,n,r)=>{let i=()=>p(vt,()=>({title:`滚动、标题、尾部与省略`,summary:`展示滚动、title/footer、ellipsis 和滚动容器类示例，并串成一个长表格布局场景。`,tab:y,preview:()=>h(t=>{let n=ft().content.cloneNode(!0).firstChild,r=n.childNodes[0],i=r.parentNode,a=(t,n,r)=>{let i=()=>p(X,()=>({className:`w-full`,columns:Se,dataSource:bt.concat(bt).concat(bt),scroll:{x:900,y:220,scrollToFirstRowOnChange:!0},title:t=>h(n=>{let r=it().content.cloneNode(!0).firstChild,i=r.childNodes[1],a=i.parentNode;return e({parent:a,before:i},()=>H(t.length),()=>({})),[r,r]}),footer:e=>V(e=>{let t=E(`div`,e);return t.setAttribute(`class`,`text-sm opacity-70`),x(t,C(`展示了固定列、纵向滚动和 ellipsis。`)),[t,t]})}));return t==null?i():m(t,r,i)},o=r.nextSibling;return i.removeChild(r),e({parent:i,before:o},()=>a,()=>({})),[n,n]}),code:Vt}));return t==null?i():m(t,r,i)},kt=Ae.nextSibling;je.removeChild(Ae),e({parent:je,before:kt},()=>_t,()=>({}));let Wt=(t,n,r)=>{let i=()=>p(vt,()=>({title:`分组表头、隐藏列与单元格属性`,summary:`分组表头示例同时覆盖隐藏列、单元格 className/style 和操作列。`,tab:S,preview:()=>h(t=>{let n=pt().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[0],i=n.childNodes[0].childNodes[0].childNodes[0],a=i.parentNode,o=n.childNodes[0].childNodes[1].childNodes[1],s=o.parentNode,c=n.childNodes[1],u=c.parentNode;r.setAttribute(`class`,`btn btn-ghost btn-xs`);let d=e=>{let t=xe;typeof t==`function`&&t(e)};r.addEventListener(`click`,d),P(()=>r.removeEventListener(`click`,d));let f=C(``);a.insertBefore(f,i),a.removeChild(i),l(f,()=>ne.value?`显示月薪列`:`隐藏月薪列`);let h=C(``);s.insertBefore(h,o),s.removeChild(o),l(h,()=>I.value);let g=(e,t,n)=>{let r=()=>p(X,()=>({className:`w-full`,columns:be.value,dataSource:bt,rowHoverable:!0,onRow:e=>({onClick:()=>I.value=`点击 ${e.name}`})}));return e==null?r():m(e,n,r)},_=c.nextSibling;return u.removeChild(c),e({parent:u,before:_},()=>g,()=>({})),[n,n]}),code:Ht}));return t==null?i():m(t,r,i)},Gt=Me.nextSibling;Ne.removeChild(Me),e({parent:Ne,before:Gt},()=>Wt,()=>({}));let Kt=(t,n,r)=>{let i=()=>p(vt,()=>({title:`静态样式、Pinned Rows 与 Pinned Cols`,summary:`基础静态样式示例 仍然提供，适合不需要 columns/dataSource 时直接写结构。`,tab:w,preview:()=>h(t=>{let n=mt().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[0],i=r.parentNode,o=n.childNodes[1].childNodes[0],s=o.parentNode,c=(t,n,r)=>{let i=()=>p(X,()=>({zebra:!0,pinRows:!0,className:`w-full min-w-[640px]`,children:(t,n,r)=>{let i=()=>h(t=>{let n=A();a(n,X.Head,()=>({children:(e,t,n)=>{let r=()=>h(e=>{let t=A();a(t,X.TR,()=>({children:(e,t,n)=>{let r=()=>h(e=>{let t=A();a(t,X.TH,()=>({children:(e,t,n)=>{let r=()=>V(e=>{let t=A();x(t,C(`商品`));let n=C(``),r=C(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():m(e,n,r)}})),a(t,X.TH,()=>({children:(e,t,n)=>{let r=()=>V(e=>{let t=A();x(t,C(`负责人`));let n=C(``),r=C(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():m(e,n,r)}})),a(t,X.TH,()=>({children:(e,t,n)=>{let r=()=>V(e=>{let t=A();x(t,C(`渠道`));let n=C(``),r=C(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():m(e,n,r)}})),a(t,X.TH,()=>({className:`text-right`,children:(e,t,n)=>{let r=()=>V(e=>{let t=A();x(t,C(`库存`));let n=C(``),r=C(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():m(e,n,r)}})),a(t,X.TH,()=>({className:`text-right`,children:(e,t,n)=>{let r=()=>V(e=>{let t=A();x(t,C(`价格`));let n=C(``),r=C(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():m(e,n,r)}}));let n=C(``),r=C(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():m(e,n,r)}}));let n=C(``),r=C(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():m(e,n,r)}})),a(n,X.Body,()=>({children:(t,n,r)=>{let i=()=>h(t=>{let n=A(),r=M(`rue:list:end`);x(n,r);let i=[];N(()=>{let t=xt||[];i=T(r.parentNode,r,i,t,(e,t)=>e.id,(t,n)=>{let r=z(t);return j((t,n,i)=>{let o=()=>p(X.TR,()=>({children:(t,n,i)=>{let o=()=>h(t=>{let n=A();a(n,X.TD,()=>({children:(t,n,i)=>{let a=()=>h(t=>{let n=A(),i=M(`rue:compiled-slot`);x(n,i),e({parent:n,before:i},()=>H(r.get().item),()=>({}));let a=C(``),o=C(``);return n.insertBefore(a,n.firstChild),n.appendChild(o),[n.firstChild,n.lastChild]});return t==null?a():m(t,i,a)}})),a(n,X.TD,()=>({children:(t,n,i)=>{let a=()=>h(t=>{let n=A(),i=M(`rue:compiled-slot`);x(n,i),e({parent:n,before:i},()=>H(r.get().owner),()=>({}));let a=C(``),o=C(``);return n.insertBefore(a,n.firstChild),n.appendChild(o),[n.firstChild,n.lastChild]});return t==null?a():m(t,i,a)}})),a(n,X.TD,()=>({children:(t,n,i)=>{let a=()=>h(t=>{let n=A(),i=M(`rue:compiled-slot`);x(n,i),e({parent:n,before:i},()=>H(r.get().channel),()=>({}));let a=C(``),o=C(``);return n.insertBefore(a,n.firstChild),n.appendChild(o),[n.firstChild,n.lastChild]});return t==null?a():m(t,i,a)}})),a(n,X.TD,()=>({className:`text-right`,children:(t,n,i)=>{let a=()=>h(t=>{let n=A(),i=M(`rue:compiled-slot`);x(n,i),e({parent:n,before:i},()=>H(r.get().stock),()=>({}));let a=C(``),o=C(``);return n.insertBefore(a,n.firstChild),n.appendChild(o),[n.firstChild,n.lastChild]});return t==null?a():m(t,i,a)}})),a(n,X.TD,()=>({className:`text-right`,children:(t,n,i)=>{let a=()=>h(t=>{let n=A(),i=M(`rue:compiled-slot`);x(n,i),e({parent:n,before:i},()=>H(r.get().price),()=>({}));let a=C(``),o=C(``);return n.insertBefore(a,n.firstChild),n.appendChild(o),[n.firstChild,n.lastChild]});return t==null?a():m(t,i,a)}}));let i=C(``),o=C(``);return n.insertBefore(i,n.firstChild),n.appendChild(o),[n.firstChild,n.lastChild]});return t==null?o():m(t,i,o)}}));return t==null?o():m(t,i,o)},(e,i)=>{t=e,n=i,r.set(e)},void 0)},!1,!1)}),P(()=>b(i));let o=C(``),s=C(``);return n.insertBefore(o,n.firstChild),n.appendChild(s),[n.firstChild,n.lastChild]});return t==null?i():m(t,r,i)}}));let r=C(``),i=C(``);return n.insertBefore(r,n.firstChild),n.appendChild(i),[n.firstChild,n.lastChild]});return t==null?i():m(t,r,i)}}));return t==null?i():m(t,r,i)},l=r.nextSibling;i.removeChild(r),e({parent:i,before:l},()=>c,()=>({}));let u=(t,n,r)=>{let i=()=>p(X,()=>({pinCols:!0,className:`w-[980px]`,children:(t,n,r)=>{let i=()=>h(t=>{let n=A();a(n,X.Head,()=>({children:(e,t,n)=>{let r=()=>h(e=>{let t=A();a(t,X.TR,()=>({children:(e,t,n)=>{let r=()=>h(e=>{let t=A();a(t,X.TH,()=>({className:`bg-base-100`,children:(e,t,n)=>{let r=()=>V(e=>{let t=A();x(t,C(`姓名`));let n=C(``),r=C(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():m(e,n,r)}})),a(t,X.TH,()=>({children:(e,t,n)=>{let r=()=>V(e=>{let t=A();x(t,C(`岗位`));let n=C(``),r=C(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():m(e,n,r)}})),a(t,X.TH,()=>({children:(e,t,n)=>{let r=()=>V(e=>{let t=A();x(t,C(`团队`));let n=C(``),r=C(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():m(e,n,r)}})),a(t,X.TH,()=>({children:(e,t,n)=>{let r=()=>V(e=>{let t=A();x(t,C(`城市`));let n=C(``),r=C(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():m(e,n,r)}})),a(t,X.TH,()=>({className:`text-right`,children:(e,t,n)=>{let r=()=>V(e=>{let t=A();x(t,C(`绩效`));let n=C(``),r=C(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():m(e,n,r)}})),a(t,X.TH,()=>({className:`text-right`,children:(e,t,n)=>{let r=()=>V(e=>{let t=A();x(t,C(`访问`));let n=C(``),r=C(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():m(e,n,r)}})),a(t,X.TH,()=>({className:`text-right`,children:(e,t,n)=>{let r=()=>V(e=>{let t=A();x(t,C(`月薪`));let n=C(``),r=C(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():m(e,n,r)}})),a(t,X.TH,()=>({children:(e,t,n)=>{let r=()=>V(e=>{let t=A();x(t,C(`地址`));let n=C(``),r=C(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():m(e,n,r)}}));let n=C(``),r=C(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():m(e,n,r)}}));let n=C(``),r=C(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():m(e,n,r)}})),a(n,X.Body,()=>({children:(t,n,r)=>{let i=()=>h(t=>{let n=A(),r=M(`rue:list:end`);x(n,r);let i=[];N(()=>{let t=St||[];i=T(r.parentNode,r,i,t,(e,t)=>e.key,(t,n)=>{let r=z(t);return j((t,n,i)=>{let o=()=>p(X.TR,()=>({children:(t,n,i)=>{let o=()=>h(t=>{let n=A();a(n,X.TH,()=>({className:`bg-base-100`,children:(t,n,i)=>{let a=()=>h(t=>{let n=A(),i=M(`rue:compiled-slot`);x(n,i),e({parent:n,before:i},()=>H(r.get().name),()=>({}));let a=C(``),o=C(``);return n.insertBefore(a,n.firstChild),n.appendChild(o),[n.firstChild,n.lastChild]});return t==null?a():m(t,i,a)}})),a(n,X.TD,()=>({children:(t,n,i)=>{let a=()=>h(t=>{let n=A(),i=M(`rue:compiled-slot`);x(n,i),e({parent:n,before:i},()=>H(r.get().role),()=>({}));let a=C(``),o=C(``);return n.insertBefore(a,n.firstChild),n.appendChild(o),[n.firstChild,n.lastChild]});return t==null?a():m(t,i,a)}})),a(n,X.TD,()=>({children:(t,n,i)=>{let a=()=>h(t=>{let n=A(),i=M(`rue:compiled-slot`);x(n,i),e({parent:n,before:i},()=>H(r.get().team),()=>({}));let a=C(``),o=C(``);return n.insertBefore(a,n.firstChild),n.appendChild(o),[n.firstChild,n.lastChild]});return t==null?a():m(t,i,a)}})),a(n,X.TD,()=>({children:(t,n,i)=>{let a=()=>h(t=>{let n=A(),i=M(`rue:compiled-slot`);x(n,i),e({parent:n,before:i},()=>H(r.get().city),()=>({}));let a=C(``),o=C(``);return n.insertBefore(a,n.firstChild),n.appendChild(o),[n.firstChild,n.lastChild]});return t==null?a():m(t,i,a)}})),a(n,X.TD,()=>({className:`text-right`,children:(t,n,i)=>{let a=()=>h(t=>{let n=A(),i=M(`rue:compiled-slot`);x(n,i),e({parent:n,before:i},()=>H(r.get().score),()=>({}));let a=C(``),o=C(``);return n.insertBefore(a,n.firstChild),n.appendChild(o),[n.firstChild,n.lastChild]});return t==null?a():m(t,i,a)}})),a(n,X.TD,()=>({className:`text-right`,children:(t,n,i)=>{let a=()=>h(t=>{let n=A(),i=M(`rue:compiled-slot`);x(n,i),e({parent:n,before:i},()=>H(r.get().visits),()=>({}));let a=C(``),o=C(``);return n.insertBefore(a,n.firstChild),n.appendChild(o),[n.firstChild,n.lastChild]});return t==null?a():m(t,i,a)}})),a(n,X.TD,()=>({className:`text-right`,children:(t,n,i)=>{let a=()=>h(t=>{let n=A(),i=M(`rue:compiled-slot`);x(n,i),e({parent:n,before:i},()=>H(r.get().salary),()=>({}));let a=C(``),o=C(``);return n.insertBefore(a,n.firstChild),n.appendChild(o),[n.firstChild,n.lastChild]});return t==null?a():m(t,i,a)}})),a(n,X.TD,()=>({children:(t,n,i)=>{let a=()=>h(t=>{let n=A(),i=M(`rue:compiled-slot`);x(n,i),e({parent:n,before:i},()=>H(r.get().address),()=>({}));let a=C(``),o=C(``);return n.insertBefore(a,n.firstChild),n.appendChild(o),[n.firstChild,n.lastChild]});return t==null?a():m(t,i,a)}}));let i=C(``),o=C(``);return n.insertBefore(i,n.firstChild),n.appendChild(o),[n.firstChild,n.lastChild]});return t==null?o():m(t,i,o)}}));return t==null?o():m(t,i,o)},(e,i)=>{t=e,n=i,r.set(e)},void 0)},!1,!1)}),P(()=>b(i));let o=C(``),s=C(``);return n.insertBefore(o,n.firstChild),n.appendChild(s),[n.firstChild,n.lastChild]});return t==null?i():m(t,r,i)}}));let r=C(``),i=C(``);return n.insertBefore(r,n.firstChild),n.appendChild(i),[n.firstChild,n.lastChild]});return t==null?i():m(t,r,i)}}));return t==null?i():m(t,r,i)},d=o.nextSibling;return s.removeChild(o),e({parent:s,before:d},()=>u,()=>({})),[n,n]}),code:Ut}));return t==null?i():m(t,r,i)},qt=Pe.nextSibling;Fe.removeChild(Pe),e({parent:Fe,before:qt},()=>Kt,()=>({}));let Jt=(e,t,n)=>{let r=()=>p(yt,()=>({rows:At}));return e==null?r():m(e,n,r)},Yt=Ie.nextSibling;Le.removeChild(Ie),e({parent:Le,before:Yt},()=>Jt,()=>({}));let Xt=(e,t,n)=>{let r=()=>p(yt,()=>({rows:jt}));return e==null?r():m(e,n,r)},Zt=Re.nextSibling;ze.removeChild(Re),e({parent:ze,before:Zt},()=>Xt,()=>({}));let Qt=(e,t,n)=>{let r=()=>p(yt,()=>({rows:Mt}));return e==null?r():m(e,n,r)},$t=Be.nextSibling;Ve.removeChild(Be),e({parent:Ve,before:$t},()=>Qt,()=>({}));let en=(e,t,n)=>{let r=()=>p(yt,()=>({rows:Nt}));return e==null?r():m(e,n,r)},tn=He.nextSibling;Ue.removeChild(He),e({parent:Ue,before:tn},()=>en,()=>({}));let nn=C(``),rn=C(``);return r.insertBefore(nn,r.firstChild),r.appendChild(rn),[r.firstChild,r.lastChild]});return t==null?g():m(t,i,g)}})))};export{Wt as default};