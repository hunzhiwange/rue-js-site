import{B as e,Bt as t,Ct as n,Dt as r,E as i,F as a,Ht as o,I as s,Jt as c,P as l,Qt as u,R as d,St as f,Ut as p,V as m,Vt as h,W as g,Wt as _,X as v,Y as y,_n as b,ct as x,en as S,f as C,fn as w,g as T,gn as E,h as D,hn as O,in as k,m as A,mn as j,mt as M,nt as N,p as P,pn as F,qt as I,sn as L,u as R,vn as z,yn as B,z as V,zt as H}from"./rue-runtime-BWbIfNT8.js";import{t as U}from"./Code-C5ZhIIr9.js";import{t as W}from"./tabs-rNAY-7C8.js";import{t as G}from"./dropdown-l7XL-5Ij.js";import{r as ee}from"./SidebarPlaygroundDesign-DS4naa5t.js";var K=B(`<table><!--rue:text-hole:0--></table>`),te=B(`<div class="flex items-center gap-2"><!--rue:opaque-hole:0--><span><!--rue:text-hole:1--></span></div>`),ne=B(`<span>rue:direct-text</span>`),re=B(`<th><!--rue:opaque-hole:0--></th>`),q=B(`<td><!--rue:opaque-hole:0--></td>`),ie=B(`<tr><!--rue:text-hole:0--><!--rue:text-hole:1--><!--rue:text-hole:2--></tr>`),ae=B(`<tr><td><!--rue:opaque-hole:0--></td></tr>`),oe=B(`<span><span>▲</span><span>▼</span></span>`),se=B(`<div class="w-56 rounded-box border border-base-content/10 bg-base-100 p-3 shadow-xl"><!--rue:text-hole:0--><!--rue:text-hole:1--><div class="max-h-56 space-y-2 overflow-auto"><!--rue:text-hole:2--><!--rue:text-hole:3--></div><!--rue:text-hole:4--></div>`),ce=B(`<div class="relative flex items-center gap-2"><span>rue:direct-text</span><!--rue:text-hole:1--><!--rue:text-hole:2--></div>`),le=B(`<th><!--rue:text-hole:0--></th>`),ue=B(`<label><input></label>`),de=B(`<th><div><!--rue:opaque-hole:0--><!--rue:text-hole:1--></div></th>`),fe=B(`<td><div><!--rue:opaque-hole:0--><!--rue:text-hole:1--></div></td>`),pe=B(`<button><!--rue:text-hole:0--></button>`),me=B(`<div><button class="btn btn-ghost btn-xs">Prev</button><!--rue:text-hole:0--><button class="btn btn-ghost btn-xs">Next</button></div>`),he=B(`<label><input type="checkbox" class="checkbox"></label>`),ge=B(`<div><!--rue:text-hole:0--><!--rue:text-hole:1--><table><!--rue:text-hole:2--><tbody><!--rue:text-hole:3--><!--rue:text-hole:4--></tbody><!--rue:text-hole:5--></table><!--rue:text-hole:6--><!--rue:text-hole:7--></div>`),_e=B(`<table></table>`),ve=B(`<thead><!--rue:text-hole:0--></thead>`),ye=B(`<tbody><!--rue:text-hole:0--></tbody>`),be=B(`<tfoot><!--rue:text-hole:0--></tfoot>`),xe=B(`<tr><!--rue:text-hole:0--></tr>`),Se=B(`<td><!--rue:text-hole:0--></td>`),Ce=0,we={emptyText:`No Data`,filterConfirm:`应用`,filterReset:`重置`,triggerAsc:`切换为升序`,triggerDesc:`切换为降序`,cancelSort:`取消排序`},Te=(e,t)=>{if(t){if(Array.isArray(t)){let n=e;for(let e of t){if(n==null)return;n=n[e]}return n}return e?.[t]}},Ee=e=>e===`right`?`text-right`:e===`center`?`text-center`:`text-left`,J=(...e)=>e.filter(Boolean).join(` `).trim()||void 0,Y=(...e)=>{let t;return e.forEach(e=>{e&&(t=t?{...t,...e}:{...e})}),t},De=e=>e==null||e===!1?[]:Array.isArray(e)?[...e]:typeof e!=`string`&&typeof e?.[Symbol.iterator]==`function`?Array.from(e):[e],Oe=(e,t)=>e.key?e.key:typeof e.dataIndex==`string`?e.dataIndex:Array.isArray(e.dataIndex)&&e.dataIndex.length>0?e.dataIndex.join(`.`):`column-${t.join(`-`)}`,ke=e=>(e.children??[]).filter(e=>!e.hidden),Ae=e=>e.reduce((e,t)=>{if(t.hidden)return e;let n=ke(t);return n.length===0?e+1:e+Ae(n)},0),je=e=>{let t=1;return e.forEach(e=>{if(e.hidden)return;let n=ke(e);n.length>0&&(t=Math.max(t,1+je(n)))}),t},Me=(e,t=[])=>{let n=[];return e.forEach((e,r)=>{if(e.hidden)return;let i=[...t,r],a=ke(e);if(a.length>0){n.push(...Me(a,i));return}n.push({column:e,indexPath:i,key:Oe(e,i)})}),n},Ne=e=>{let t=e.filter(e=>!e.hidden),n=je(t),r=Array.from({length:n},()=>[]),i=(e,t,a=[])=>{e.forEach((e,o)=>{if(e.hidden)return;let s=[...a,o],c=ke(e),l=c.length>0?Ae(c):1,u=e.colSpan??l;if(u===0)return;let d=e.rowSpan??(c.length>0?1:n-t);r[t].push({column:e,index:o,key:Oe(e,s),colSpan:u,rowSpan:d}),c.length>0&&i(c,t+1,s)})};return i(t,0),r},Pe=e=>!!(e.fixedCol||e.fixed===!0||e.fixed===`left`||e.fixed===`start`),Fe=e=>typeof e==`object`&&!!e,Ie=e=>{if(Fe(e.sorter))return e.sorter.multiple},Le=e=>(Array.isArray(e)?e:typeof e?.get==`function`?e.get():[]).filter(e=>!!e?.order).sort((e,t)=>{let n=e.multiple??0,r=t.multiple??0;return n===r?0:r-n}),Re=e=>{let t=Le(e.filter(e=>e.column.sortOrder!==void 0).map(e=>({key:e.key,order:e.column.sortOrder,multiple:Ie(e.column)})));return t.length>0?t:Le(e.filter(e=>!!e.column.defaultSortOrder).map(e=>({key:e.key,order:e.column.defaultSortOrder,multiple:Ie(e.column)})))},ze=e=>{let t={};return e.forEach(({column:e,key:n})=>{if(e.filteredValue!==void 0){t[n]=De(e.filteredValue);return}e.defaultFilteredValue!==void 0&&(t[n]=De(e.defaultFilteredValue))}),t},Be=(e,t)=>e<=1?1:e>=t?t:e,Ve=e=>typeof e==`number`?`${e}px`:e,He=e=>{switch(e){case`small`:return`table-sm`;case`middle`:return`table-md`;case`large`:return`table-lg`;case`xs`:case`sm`:case`md`:case`lg`:case`xl`:return`table-${e}`;default:return}},Ue=e=>({...we,...e}),We=(e,t)=>typeof e==`function`?e({props:t})??{}:e??{},Ge=e=>e?e===!0||e.showTitle!==!1:!1,Ke=e=>{switch(e){case`topLeft`:return`topStart`;case`topCenter`:return`topCenter`;case`topRight`:return`topEnd`;case`bottomLeft`:return`bottomStart`;case`bottomCenter`:return`bottomCenter`;case`bottomRight`:return`bottomEnd`;default:return`none`}},qe=e=>e==null||e===!1?[]:(e.placement?.length?e.placement:e.position?.length?e.position.map(Ke):[`bottomEnd`]).filter((e,t,n)=>e===`none`?n.length===1:n.indexOf(e)===t),Je=e=>{switch(e){case`topStart`:case`bottomStart`:return`justify-start`;case`topCenter`:case`bottomCenter`:return`justify-center`;default:return`justify-end`}},Ye=(e,t)=>{let n=e?.[t];return Array.isArray(n)?n:[]},Xe=e=>typeof e==`function`&&(e.kind===`block-factory`||e.length===3),Ze=(n,r,a)=>{let c=g(V(n,`data`)),u=g(V(n,`render`));return s(o(()=>typeof u.get()==`function`?Xe(u.get())?{__rue_compiled_branch_key:1,create:()=>l(i,()=>({source:{children:u.get()},props:c.get()}))}:{__rue_compiled_branch_key:2,create:()=>_(e=>{let n=j(),r=F(`rue:slot:anchor`);w(n,r),t({parent:n,before:r},()=>H(u.get()(c.get())),()=>({}));let i=E(``),a=E(``);return n.insertBefore(i,n.firstChild),n.appendChild(a),[n.firstChild,n.lastChild]})}:{__rue_compiled_branch_key:0,create:()=>m(e=>{let t=j();return[t.firstChild,t.lastChild]})}),e=>S(()=>{c.set(e.data),u.set(e.render)}),()=>e(n))},Qe=(n,r,a)=>{let c=g(V(n,`expanded`)),u=g(V(n,`indent`)),d=g(V(n,`index`)),f=g(V(n,`record`)),p=g(V(n,`render`));return s(o(()=>typeof p.get()==`function`?Xe(p.get())?{__rue_compiled_branch_key:1,create:()=>l(i,()=>({source:{children:p.get()},props:f.get()}))}:{__rue_compiled_branch_key:2,create:()=>_(e=>{let n=j(),r=F(`rue:slot:anchor`);w(n,r),t({parent:n,before:r},()=>H(p.get()(f.get(),d.get(),u.get(),c.get())),()=>({}));let i=E(``),a=E(``);return n.insertBefore(i,n.firstChild),n.appendChild(a),[n.firstChild,n.lastChild]})}:{__rue_compiled_branch_key:0,create:()=>m(e=>{let t=j();return[t.firstChild,t.lastChild]})}),e=>S(()=>{c.set(e.expanded),u.set(e.indent),d.set(e.index),f.set(e.record),p.set(e.render)}),()=>e(n))},$e=(n,r,a)=>{let c=g(V(n,`value`));return s(o(()=>Xe(c.get())?{__rue_compiled_branch_key:0,create:()=>l(i,()=>({source:{children:c.get()}}))}:{__rue_compiled_branch_key:1,create:()=>_(e=>{let n=j(),r=F(`rue:compiled-slot`);w(n,r),t({parent:n,before:r},()=>H(c.get()),()=>({}));let i=E(``),a=E(``);return n.insertBefore(i,n.firstChild),n.appendChild(a),[n.firstChild,n.lastChild]})}),e=>S(()=>{c.set(e.value)}),()=>e(n))},et=(n,r,a)=>{let c=g(V(n,`data`)),u=g(V(n,`info`)),d=g(V(n,`render`));return s(o(()=>Xe(d.get())?{__rue_compiled_branch_key:0,create:()=>l(i,()=>({source:{children:d.get()},props:c.get()}))}:{__rue_compiled_branch_key:1,create:()=>_(e=>{let n=j(),r=F(`rue:slot:anchor`);w(n,r),t({parent:n,before:r},()=>H(d.get()(c.get(),u.get())),()=>({}));let i=E(``),a=E(``);return n.insertBefore(i,n.firstChild),n.appendChild(a),[n.firstChild,n.lastChild]})}),e=>S(()=>{c.set(e.data),u.set(e.info),d.set(e.render)}),()=>e(n))},tt=e=>{let t=typeof e;return t===`string`||t===`number`},X=Object.assign((r,i,b)=>{let T=c(`useSetup:0:0`,()=>{let t=x(()=>Ue(V(e(r),`locale`)));t.get();let n=t,i=x(()=>We(V(e(r),`classNames`),e(r)));i.get();let a=i,o=x(()=>We(V(e(r),`styles`),e(r)));o.get();let s=o,c=x(()=>typeof V(e(r),`loading`)==`object`?{spinning:V(e(r),`loading`).spinning!==!1,tip:V(e(r),`loading`).tip}:{spinning:!!V(e(r),`loading`),tip:void 0});c.get();let l=c,u=V(e(r),`expandable`)?.childrenColumnName??`children`,d=V(e(r),`expandable`)?.indentSize??15,f=V(e(r),`expandable`)?.expandedRowFormatter??V(e(r),`expandable`)?.expandedRowRender,p=(t,n)=>(typeof(V(e(r),`rowKey`)??`key`)==`function`?(V(e(r),`rowKey`)??`key`)(t):t?.[V(e(r),`rowKey`)??`key`])??n,m=(e,t=[])=>e.flatMap((e,n)=>{let r=[...t,n],i=p(e,`row-${r.join(`-`)}`),a=Ye(e,u);return a.length===0?[]:[i,...m(a,r)]}),h=`table`,g=x(()=>He(V(e(r),`size`)));g.get();let _=g;_.get()&&(h+=` ${_.get()}`),V(e(r),`zebra`)&&(h+=` table-zebra`),(V(e(r),`pinRows`)||V(e(r),`sticky`))&&(h+=` table-pin-rows`),V(e(r),`pinCols`)&&(h+=` table-pin-cols`),V(e(r),`bordered`)&&(h+=` border-separate border-spacing-0`),a.get().table&&(h+=` ${a.get().table}`),V(e(r),`className`)&&(h+=` ${V(e(r),`className`)}`);let v=x(()=>V(e(r),`children`)!=null);return v.get(),{localeText:t,__rue_phase2_localeText:n,semanticClasses:i,__rue_phase2_semanticClasses:a,semanticStyles:o,__rue_phase2_semanticStyles:s,loadingConfig:c,__rue_phase2_loadingConfig:l,childrenColumnName:u,indentSize:d,expandedRowRender:f,getRecordKey:p,collectExpandedKeys:m,sizeClass:g,__rue_phase2_sizeClass:_,hasChildren:v,__rue_phase2_hasChildren:v,cls:h}}),{localeText:A,__rue_phase2_localeText:N,semanticClasses:z,__rue_phase2_semanticClasses:B,semanticStyles:U,__rue_phase2_semanticStyles:W,loadingConfig:ee,__rue_phase2_loadingConfig:ve,childrenColumnName:ye,indentSize:be,expandedRowRender:xe,getRecordKey:Se,collectExpandedKeys:we,sizeClass:Oe,__rue_phase2_sizeClass:Ae,hasChildren:je,__rue_phase2_hasChildren:Ke}=T,{cls:Xe}=T;if(Ke.get())return _(n=>{let i=K().content.cloneNode(!0).firstChild,a=i,o=i.childNodes[0],s=o.parentNode,c;k(()=>{let e=Xe,t=e===!1||e==null?``:String(e);Object.is(c,t)||(c=t,a.setAttribute(`class`,t))});let l;return k(()=>{let e=W.get().table,t=f(e);Object.is(l,t)||(l=t,a.style.cssText=t)}),t({parent:s,before:o},()=>((e,t)=>(n,r,i)=>H(V(e,t))(n,r,i))(e(r),`children`),()=>({})),[i,i]});let X=Array.isArray(V(r,`columns`))?Me(V(r,`columns`)??[]):[],nt=M(`rue-table-${Ce++}`),rt=M(Re(X)),it=e=>{rt.value=typeof e==`function`?e(rt.value):e},at=M(ze(X)),ot=e=>{at.value=typeof e==`function`?e(at.value):e},st=M({}),ct=e=>{st.value=typeof e==`function`?e(st.value):e},lt=M({}),ut=e=>{lt.value=typeof e==`function`?e(lt.value):e},dt={value:null},ft={value:null},pt=M(0),mt=e=>{pt.value=typeof e==`function`?e(pt.value):e},ht=M(V(e(r),`rowSelection`)?.defaultSelectedRowKeys?[...V(e(r),`rowSelection`).defaultSelectedRowKeys]:[]),gt=e=>{ht.value=typeof e==`function`?e(ht.value):e},_t=x(()=>V(e(r),`pagination`)!=null&&V(e(r),`pagination`)!==!1?V(e(r),`pagination`):void 0);_t.get();let Z=_t,vt=M(Z.get()?Z.get().current??Z.get().defaultCurrent??1:1),yt=e=>{vt.value=typeof e==`function`?e(vt.value):e},bt=M(Z.get()?Z.get().pageSize??Z.get().defaultPageSize??10:Math.max(V(e(r),`dataSource`)?.length??0,1)),xt=M(V(e(r),`expandable`)?.defaultExpandedRowKeys?[...V(e(r),`expandable`).defaultExpandedRowKeys]:V(e(r),`expandable`)?.defaultExpandAllRows&&Array.isArray(V(e(r),`dataSource`))?V(e(r),`dataSource`).flatMap((e,t)=>{let n=Se(e,`row-${t}`),r=Ye(e,ye);return xe||r.length>0?[n,...we(r,[t])]:[]}):[]),St=e=>{xt.value=typeof e==`function`?e(xt.value):e};if(Array.isArray(V(r,`columns`))&&Array.isArray(V(e(r),`dataSource`))){let i=(i,s,d)=>{let{renderBodyCell:b,expandableState:S,__rue_phase2_expandableState:T,rowProps:M,rowPropClassName:N,rowPropStyle:R,rowClickHandler:z,restRowProps:U,baseRowClassName:G,__rue_phase2_baseRowClassName:ee,hoverClassName:K,mergedRowClick:oe,showExpandedRow:se,__rue_phase2_showExpandedRow:ce,expandedRowClassName:le,__rue_phase2_expandedRowClassName:ue}=c(`useSetup:0:0`,()=>{let a=(a,d,g)=>{let{value:b,__rue_phase2_value:S,rendered:C,__rue_phase2_rendered:w,cellProps:T,__rue_phase2_cellProps:D,cellPropClassName:O,cellPropStyle:A,restCellProps:M,colSpan:N,__rue_phase2_colSpan:P,rowSpan:F,__rue_phase2_rowSpan:I}=c(`useSetup:0:0`,()=>{let t=x(()=>Te(V(i,`record`),V(a,`column`).dataIndex));t.get();let n=t,r=x(()=>V(a,`column`).formatter?V(a,`column`).formatter(n.get(),V(i,`record`),e(s)):n.get());r.get();let o=r,c=x(()=>V(a,`column`).onCell&&V(a,`column`).onCell(V(i,`record`),e(s))||{});c.get();let l=c,{className:u,style:d,...f}=l.get(),p=x(()=>l.get().colSpan??1);p.get();let m=p,h=x(()=>l.get().rowSpan??1);return h.get(),{value:t,__rue_phase2_value:n,rendered:r,__rue_phase2_rendered:o,cellProps:c,__rue_phase2_cellProps:l,cellPropClassName:u,cellPropStyle:d,restCellProps:f,colSpan:p,__rue_phase2_colSpan:m,rowSpan:h,__rue_phase2_rowSpan:h}});if(P.get()===0||I.get()===0)return m(e=>{let t=j();return[t.firstChild,t.lastChild]});let L=x(()=>!Ot&&e(d)===0);L.get();let R=L,z=x(()=>V(a,`column`).rowScope||V(e(r),`pinCols`)&&Pe(V(a,`column`))?`th`:`td`);z.get();let H=x(()=>J(B.get().cell,Ee(V(a,`column`).align),V(a,`column`).className,V(a,`column`).ellipsis?`truncate`:void 0,O));H.get();let U=x(()=>Y(W.get().cell,V(a,`column`).width||V(a,`column`).minWidth?{...V(a,`column`).width?{width:V(a,`column`).width}:{},...V(a,`column`).minWidth?{minWidth:V(a,`column`).minWidth}:{}}:void 0,R.get()&&V(i,`indent`)>0?{paddingLeft:`${V(i,`indent`)*be}px`}:void 0,A));U.get();let G=x(()=>V(a,`column`).ellipsis&&Ge(V(a,`column`).ellipsis)&&tt(w.get())?String(w.get()):void 0);G.get();let ee=(n,r,c)=>o(()=>R.get()?{__rue_compiled_branch_key:0,create:()=>_(n=>{let r=te().content.cloneNode(!0).firstChild,o=r.childNodes[1],c=r.childNodes[0],d=c.parentNode,f=r.childNodes[1].childNodes[0],m=f.parentNode,g;k(()=>{let e=V(a,`column`).ellipsis?`truncate`:void 0,t=e===!1||e==null?``:String(e);Object.is(g,t)||(g=t,o.setAttribute(`class`,t))});let _=(t,n,r)=>{let a=()=>l(_n,()=>({arg0:e(i),arg1:e(s),arg2:p.get()}));return t==null?a():h(t,r,a)},v=c.nextSibling;d.removeChild(c),t({parent:d,before:v},()=>_,()=>({}));let y=E(``);return m.insertBefore(y,f),m.removeChild(f),u(y,()=>String(w.get()??``)),[r,r]})}:{__rue_compiled_branch_key:1,create:()=>y(e=>{let t=ne().content.cloneNode(!0).firstChild,n=t.childNodes[0];return n.parentNode,v(n,()=>String(w.get()??``)),[t,t]})});return z.get()===`th`?_(e=>{let r=re().content.cloneNode(!0).firstChild,o=r,s=r.childNodes[0],c=s.parentNode,u;k(()=>{let e=H.get(),t=e===!1||e==null?``:String(e);Object.is(u,t)||(u=t,o.setAttribute(`class`,t))});let d;k(()=>{let e=U.get(),t=f(e);Object.is(d,t)||(d=t,o.style.cssText=t)});let p;k(()=>{let e=G.get();Object.is(p,e)||(p=e,e==null||e===!1?o.removeAttribute(`title`):o.setAttribute(`title`,String(e)))});let m;k(()=>{let e=N.get();Object.is(m,e)||(m=e,e==null||e===!1?o.removeAttribute(`colSpan`):o.setAttribute(`colSpan`,String(e)))});let g;k(()=>{let e=F.get();Object.is(g,e)||(g=e,e==null||e===!1?o.removeAttribute(`rowSpan`):o.setAttribute(`rowSpan`,String(e)))});let _;k(()=>{let e=V(a,`column`).rowScope;Object.is(_,e)||(_=e,e==null||e===!1?o.removeAttribute(`scope`):o.setAttribute(`scope`,String(e)))});let v;k(()=>{let e=L.get()&&V(i,`indent`)>0?String(V(i,`indent`)):void 0;Object.is(v,e)||(v=e,e==null?o.removeAttribute(`data-rue-table-indent`):o.setAttribute(`data-rue-table-indent`,String(e)))}),n(o,()=>M,[`__rue_static_template_id__`]);let y=(e,t,n)=>{let r=()=>l(ee,()=>({}));return e==null?r():h(e,n,r)},b=s.nextSibling;return c.removeChild(s),t({parent:c,before:b},()=>y,()=>({})),[r,r]}):_(e=>{let r=q().content.cloneNode(!0).firstChild,o=r,s=r.childNodes[0],c=s.parentNode,u;k(()=>{let e=H.get(),t=e===!1||e==null?``:String(e);Object.is(u,t)||(u=t,o.setAttribute(`class`,t))});let d;k(()=>{let e=U.get(),t=f(e);Object.is(d,t)||(d=t,o.style.cssText=t)});let p;k(()=>{let e=G.get();Object.is(p,e)||(p=e,e==null||e===!1?o.removeAttribute(`title`):o.setAttribute(`title`,String(e)))});let m;k(()=>{let e=N.get();Object.is(m,e)||(m=e,e==null||e===!1?o.removeAttribute(`colSpan`):o.setAttribute(`colSpan`,String(e)))});let g;k(()=>{let e=F.get();Object.is(g,e)||(g=e,e==null||e===!1?o.removeAttribute(`rowSpan`):o.setAttribute(`rowSpan`,String(e)))});let _;k(()=>{let e=V(a,`column`).rowScope;Object.is(_,e)||(_=e,e==null||e===!1?o.removeAttribute(`scope`):o.setAttribute(`scope`,String(e)))});let v;k(()=>{let e=L.get()&&V(i,`indent`)>0?String(V(i,`indent`)):void 0;Object.is(v,e)||(v=e,e==null?o.removeAttribute(`data-rue-table-indent`):o.setAttribute(`data-rue-table-indent`,String(e)))}),n(o,()=>M,[`__rue_static_template_id__`]);let y=(e,t,n)=>{let r=()=>l(ee,()=>({}));return e==null?r():h(e,n,r)},b=s.nextSibling;return c.removeChild(s),t({parent:c,before:b},()=>y,()=>({})),[r,r]})},d=x(()=>Xt(e(i),e(s)));d.get();let p=d,g=V(e(r),`onRow`)&&V(e(r),`onRow`)(V(i,`record`),e(s))||{},{className:b,style:S,onClick:C,...w}=g,T=x(()=>typeof V(e(r),`rowClassName`)==`function`?V(e(r),`rowClassName`)(V(i,`record`),e(s)):``);T.get();let D=T,O=V(e(r),`rowHoverable`)??!1?V(e(r),`rowHoverClass`)||`hover:bg-base-200`:``,A=t=>{C&&C(t),!(!V(e(r),`expandable`)?.expandRowByClick||!p.get().enabled)&&((t?.target)?.closest(`button, input, a, label`)||Zt(e(i),e(s)))},M=x(()=>Dt&&p.get().hasExpandedRowRender&&p.get().expanded);M.get();let N=M,P=x(()=>N.get()?typeof V(e(r),`expandable`)?.expandedRowClassName==`function`?V(e(r),`expandable`).expandedRowClassName(V(i,`record`),e(s),V(i,`indent`)):V(e(r),`expandable`)?.expandedRowClassName:void 0);return P.get(),{renderBodyCell:a,expandableState:d,__rue_phase2_expandableState:p,rowProps:g,rowPropClassName:b,rowPropStyle:S,rowClickHandler:C,restRowProps:w,baseRowClassName:T,__rue_phase2_baseRowClassName:D,hoverClassName:O,mergedRowClick:A,showExpandedRow:M,__rue_phase2_showExpandedRow:N,expandedRowClassName:P,__rue_phase2_expandedRowClassName:P}});return _(c=>{let u=j(),d=ie().content.cloneNode(!0),v=d.firstChild,y=v,x=v.childNodes[0],T=x.parentNode,M=v.childNodes[1],z=M.parentNode,ee=v.childNodes[2],te=ee.parentNode;u.appendChild(d);let ne;k(()=>{let e=String(V(i,`key`));Object.is(ne,e)||(ne=e,e==null?y.removeAttribute(`data-rue-table-row-key`):y.setAttribute(`data-rue-table-row-key`,String(e)))}),n(y,()=>U,[`onClick`,`className`,`style`,`__rue_static_template_id__`]);let re=e=>{let t=oe;typeof t==`function`&&t(e)};y.addEventListener(`click`,re),L(()=>y.removeEventListener(`click`,re));let q;k(()=>{let e=J(B.get().bodyRow,N,G.get(),K),t=e===!1||e==null?``:String(e);Object.is(q,t)||(q=t,y.setAttribute(`class`,t))});let ce;k(()=>{let e=Y(W.get().bodyRow,R),t=f(e);Object.is(ce,t)||(ce=t,y.style.cssText=t)}),p(T,x,()=>Ot?{__rue_compiled_branch_key:!0,create:()=>_(t=>{let n=O(`td`,t),o;k(()=>{let e=J(B.get().cell,Ee(`center`)),t=e===!1||e==null?``:String(e);Object.is(o,t)||(o=t,n.setAttribute(`class`,t))});let c;return k(()=>{let t=Y(W.get().cell,V(e(r),`expandable`)?.columnWidth?{width:V(e(r),`expandable`).columnWidth}:void 0,V(i,`indent`)>0?{paddingLeft:`${V(i,`indent`)*be}px`}:void 0),a=f(t);Object.is(c,a)||(c=a,n.style.cssText=a)}),a(n,_n,()=>({arg0:e(i),arg1:e(s),arg2:S.get()})),[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>m(e=>{let t=j();return[t.firstChild,t.lastChild]})}),p(z,M,()=>Et?{__rue_compiled_branch_key:!0,create:()=>l(gn,()=>({arg0:e(i),arg1:e(s)}))}:{__rue_compiled_branch_key:!1,create:()=>m(e=>{let t=j();return[t.firstChild,t.lastChild]})});let ue=[];I(()=>{let e=A.get()||[];ue=D(te,ee,ue,e,(e,t)=>t,(e,n)=>{let r=g(e),i=g(n);return P((e,n,a)=>h(e,a,()=>_(e=>{let n=j(),a=F(`rue:row-call`);w(n,a),t({parent:n,before:a},()=>((e,t)=>(n,r,i)=>H(b(e,t))(n,r,i))(r.get(),i.get()),()=>({}));let o=E(``),s=E(``);return n.insertBefore(o,n.firstChild),n.appendChild(s),[n.firstChild,n.lastChild]})),(t,a)=>{e=t,n=a,r.set(t),i.set(a)},void 0)},!0,!1)}),L(()=>C(ue)),o(()=>se.get()?{__rue_compiled_branch_key:!0,create:()=>_(n=>{let r=ae().content.cloneNode(!0).firstChild,a=r,o=r.childNodes[0],c=r.childNodes[0].childNodes[0],u=c.parentNode,d;k(()=>{let e=le.get(),t=e===!1||e==null?``:String(e);Object.is(d,t)||(d=t,a.setAttribute(`class`,t))});let f;k(()=>{let e=At;Object.is(f,e)||(f=e,e==null||e===!1?o.removeAttribute(`colSpan`):o.setAttribute(`colSpan`,String(e)))});let p=(t,n,r)=>{let a=()=>l(Qe,()=>({render:xe,record:V(i,`record`),index:e(s),indent:V(i,`indent`),expanded:!0}));return t==null?a():h(t,r,a)},m=c.nextSibling;return u.removeChild(c),t({parent:u,before:m},()=>p,()=>({})),[r,r]})}:{__rue_compiled_branch_key:!1,create:()=>m(e=>{let t=j();return[t.firstChild,t.lastChild]})}).__rue_compiled_mount(u);let de=E(``),fe=E(``);return u.insertBefore(de,u.firstChild),u.appendChild(fe),[u.firstChild,u.lastChild]})},b=(i,s,u)=>{let{headerRowProps:v,headerRowClassName:y,headerRowStyle:b,restHeaderRowProps:x}=c(`useSetup:0:0`,()=>{let t=V(e(r),`onHeaderRow`)&&V(e(r),`onHeaderRow`)(d(V(i,`map`),i,[e=>e.column]),e(s))||{},{className:n,style:a,...o}=t;return{headerRowProps:t,headerRowClassName:n,headerRowStyle:a,restHeaderRowProps:o}});return _(c=>{let u=ie().content.cloneNode(!0).firstChild,d=u,v=u.childNodes[0],S=v.parentNode,E=u.childNodes[1],A=E.parentNode,M=u.childNodes[2],N=M.parentNode,R;k(()=>{let e=J(B.get().headerRow,y),t=e===!1||e==null?``:String(e);Object.is(R,t)||(R=t,d.setAttribute(`class`,t))});let z;k(()=>{let e=Y(W.get().headerRow,b),t=f(e);Object.is(z,t)||(z=t,d.style.cssText=t)}),n(d,()=>x,[`__rue_static_template_id__`]),p(S,v,()=>e(s)===0&&Ot?{__rue_compiled_branch_key:!0,create:()=>_(n=>{let i=O(`th`,n),a;k(()=>{let e=T.get().length;Object.is(a,e)||(a=e,e==null||e===!1?i.removeAttribute(`rowSpan`):i.setAttribute(`rowSpan`,String(e)))});let o;k(()=>{let e=J(B.get().headerCell,Ee(`center`)),t=e===!1||e==null?``:String(e);Object.is(o,t)||(o=t,i.setAttribute(`class`,t))});let s;k(()=>{let t=Y(W.get().headerCell,V(e(r),`expandable`)?.columnWidth?{width:V(e(r),`expandable`).columnWidth}:void 0),n=f(t);Object.is(s,n)||(s=n,i.style.cssText=n)});let c=F(`rue:compiled-slot`);return w(i,c),t({parent:i,before:c},()=>H(V(e(r),`expandable`)?.columnTitle??``),()=>({})),[i,i]})}:{__rue_compiled_branch_key:!1,create:()=>m(e=>{let t=j();return[t.firstChild,t.lastChild]})}),p(A,E,()=>e(s)===0&&Et?{__rue_compiled_branch_key:!0,create:()=>_(n=>{let i=O(`th`,n),s;k(()=>{let e=T.get().length;Object.is(s,e)||(s=e,e==null||e===!1?i.removeAttribute(`rowSpan`):i.setAttribute(`rowSpan`,String(e)))});let c;k(()=>{let e=J(B.get().headerCell,Ee(Tt)),t=e===!1||e==null?``:String(e);Object.is(c,t)||(c=t,i.setAttribute(`class`,t))});let l;k(()=>{let t=Y(W.get().headerCell,V(e(r),`rowSelection`)?.columnWidth?{width:V(e(r),`rowSelection`).columnWidth}:void 0),n=f(t);Object.is(l,n)||(l=n,i.style.cssText=n)});let u=O(`div`,i);w(i,u);let d;return k(()=>{let t=J(`inline-flex items-center gap-2`,V(e(r),`rowSelection`)?.titleClassName),n=t===!1||t==null?``:String(t);Object.is(d,n)||(d=n,u.setAttribute(`class`,n))}),a(u,En,()=>({})),o(()=>V(e(r),`rowSelection`)?.columnTitle?{__rue_compiled_branch_key:!0,create:()=>_(n=>{let i=O(`span`,n),a=F(`rue:compiled-slot`);return w(i,a),t({parent:i,before:a},()=>H(V(e(r),`rowSelection`).columnTitle),()=>({})),[i,i]})}:{__rue_compiled_branch_key:!1,create:()=>m(e=>{let t=j();return[t.firstChild,t.lastChild]})}).__rue_compiled_mount(u),[i,i]})}:{__rue_compiled_branch_key:!1,create:()=>m(e=>{let t=j();return[t.firstChild,t.lastChild]})});let U=[];return I(()=>{let t=e(i)||[];U=D(N,M,U,t,(e,t)=>e.key,(t,n)=>{let r=g(t);return P((t,n,i)=>{let a=()=>l(hn,()=>({meta:r.get(),level:e(s)}));return t==null?a():h(t,i,a)},(e,i)=>{t=e,n=i,r.set(e)},void 0)},!1,!1)}),L(()=>C(U)),[u,u]})},T=x(()=>Ne(V(r,`columns`)??[])),A=x(()=>Me(V(r,`columns`)??[])),M=x(()=>new Map(A.get().map(e=>[e.key,e]))),z=()=>{mt(e=>e+1)},U=x(()=>{let e=A.get();return e.some(e=>e.column.sortOrder!==void 0)?Re(e):Le([...rt.value])}),ee=x(()=>new Map(U.get().map(e=>[e.key,e]))),K=x(()=>A.get().reduce((e,t)=>{let n=t.column.filteredValue;return n===void 0?(e[t.key]=De(at.value[t.key]),e):(e[t.key]=De(n),e)},{})),_e=e=>{let t={};return Object.keys(e).forEach(n=>{Array.isArray(e[n])&&e[n].length>0&&(t[n]=[...e[n]])}),t},Ce=x(()=>_e(K.get())),we=e=>typeof e.sorter==`function`?e.sorter:Fe(e.sorter)&&typeof e.sorter.compare==`function`?e.sorter.compare:(t,n)=>{let r=Te(t,e.dataIndex),i=Te(n,e.dataIndex);return r==null&&i==null?0:r==null?-1:i==null||r>i?1:r<i?-1:0},Oe=(e,t,n)=>{for(let r of Le(n)){let n=M.get().get(r.key);if(!n?.column.sorter)continue;let i=we(n.column),a=r.order===`ascend`?i(e,t):-i(e,t);if(a!==0)return a}return 0},Ae=(e,t)=>A.get().every(n=>{let r=t[n.key]??[];if(!Array.isArray(r)||r.length===0)return!0;let i=n.column.filterCombine??`or`;if(n.column.onFilter)return i===`and`?r.every(t=>n.column.onFilter(t,e)):r.some(t=>n.column.onFilter(t,e));let a=Te(e,n.column.dataIndex);return i===`and`?r.every(e=>e===a):r.includes(a)}),je=(t,n)=>{let i=e=>{let r=e.flatMap(e=>{let n=Ye(e,ye),r=n.length>0?i(n):[];return!Ae(e,t)&&r.length===0?[]:n.length>0?[{...e,[ye]:r}]:[e]});return Le(n).length>0&&(r=r.slice().sort((e,t)=>Oe(e,t,n))),r};return i(V(e(r),`dataSource`))},ze=x(()=>V(e(r),`expandable`)?.expandedRowKeys?[...V(e(r),`expandable`).expandedRowKeys]:[...xt.value]),He=x(()=>new Set(ze.get())),Ue=(e,t=0,n=[],r=!1)=>e.flatMap((e,i)=>{let a=[...n,i],o=Se(e,`row-${a.join(`-`)}`),s=Ye(e,ye),c={key:o,renderKey:`${typeof o}:${String(o)}@${a.join(`-`)}`,record:e,indent:t,hasTreeChildren:s.length>0};return s.length>0&&(r||He.get().has(o))?[c,...Ue(s,t+1,a,r)]:[c]}),We=Ue(V(e(r),`dataSource`),0,[],!0),Ke=We.some(e=>e.hasTreeChildren),X=x(()=>je(K.get(),U.get())),_t=x(()=>Ue(X.get())),Q=Z.get()!=null,$=x(()=>{let e=_t.get(),t=e.length,n=Q?Math.max(1,Z.get().pageSize??bt.value):Math.max(t,1),r=Q?Math.max(1,Math.ceil(t/n)):1,i=Q?Be(Z.get().current??vt.value,r):1;return{total:t,pageSize:n,pageCount:r,currentPage:i,pageRows:Q?e.slice((i-1)*n,i*n):e}}),Ct=x(()=>V(e(r),`rowSelection`)?.selectedRowKeys?[...V(e(r),`rowSelection`).selectedRowKeys]:[...ht.value]),wt=x(()=>new Set(Ct.get())),Tt=V(e(r),`rowSelection`)?.align??`center`,Et=!!V(e(r),`rowSelection`),Dt=!!xe,Ot=(Dt||Ke)&&V(e(r),`expandable`)?.showExpandColumn!==!1,kt=+!!Et+ +!!Ot,At=A.get().length+kt,jt=Y(W.get().wrapper,V(e(r),`scroll`)?.y===void 0?void 0:{maxHeight:Ve(V(e(r),`scroll`).y)},V(e(r),`height`)===void 0?void 0:{height:Ve(V(e(r),`height`))},V(e(r),`sticky`)&&typeof V(e(r),`sticky`)==`object`&&V(e(r),`sticky`).offsetScroll!==void 0?{top:Ve(V(e(r),`sticky`).offsetScroll)}:void 0),Mt=J(V(e(r),`scroll`)?.x?`overflow-x-auto`:void 0,V(e(r),`scroll`)?.y||V(e(r),`height`)!==void 0?`overflow-y-auto`:void 0,B.get().wrapper),Nt=Y(W.get().table)??{},Pt=A.get().some(({column:e})=>!!e.ellipsis);V(e(r),`tableLayout`)?Nt.tableLayout=V(e(r),`tableLayout`):(Pt||V(e(r),`scroll`)?.x)&&(Nt.tableLayout=`fixed`),V(e(r),`scroll`)?.x===!0?(Nt.width=`max-content`,Nt.minWidth=`100%`):V(e(r),`scroll`)?.x!==void 0&&(Nt.width=Ve(V(e(r),`scroll`).x),Nt.minWidth=`100%`),(()=>{let e=globalThis,t=`__rue_table_outside_close_${nt.value}`;if(e[t])return;let n=e=>{let t=e?.target;t&&(t.closest(`[data-rue-table-root="${nt.value}"]`)||(dt.value=null,z()))};e?.addEventListener&&e.addEventListener(`pointerdown`,n),e[t]=n})();let Ft=()=>{if(!V(e(r),`scroll`)?.scrollToFirstRowOnChange)return;let t=ft.value;t&&(t.scrollTop=0)},It=x(()=>Le(U.get()).map(e=>{let t=M.get().get(e.key);return t?{column:t.column,columnKey:e.key,order:e.order}:null}).filter(Boolean)),Lt=(e,t)=>{let n=e.title;return typeof n==`function`?n({sortOrder:ee.get().get(t)?.order??null,filteredValue:K.get()[t]??[],sortColumns:It.get(),filters:Ce.get()}):n},Rt=e=>{let t=Le(e).map(e=>{let t=M.get().get(e.key);return t?{column:t.column,order:e.order,columnKey:e.key,field:t.column.dataIndex,multiple:e.multiple}:null}).filter(Boolean);return t.length===0?{column:null,order:null}:t.length===1?t[0]:t},zt=(t,n,i,a,o)=>{if(!V(e(r),`onChange`))return;let s=je(a,o),c=Ue(s),l=Q?Math.max(1,Math.ceil(c.length/i)):1,u=Q?Be(n,l):1,d=Q?c.slice((u-1)*i,u*i).map(e=>e.record):c.map(e=>e.record);V(e(r),`onChange`)(Q?{current:u,pageSize:i}:!1,_e(a),Rt(o),{action:t,currentDataSource:d})},Bt=(e,t)=>{let n=M.get().get(e)?.column;if(!n?.sorter)return;let r=Ie(n),i=(()=>{if(r!=null){let n=U.get().filter(t=>{let n=M.get().get(t.key)?.column;return Ie(n??{})!=null&&t.key!==e}).map(e=>({...e}));return t&&n.push({key:e,order:t,multiple:r}),Le(n)}return t?[{key:e,order:t,multiple:r}]:[]})();it(i),z(),Q&&Z.get().current===void 0&&yt(1),Ft(),zt(`sort`,Q?1:$.get().currentPage,$.get().pageSize,K.get(),i),setTimeout(()=>{setTimeout(()=>{let t=document.querySelector(`button[aria-label="sort-${e}"]`)?.closest(`table`)?.querySelector(`tbody`);if(!t)return;let n=new Map(Array.from(t.querySelectorAll(`tr[data-rue-table-row-key]`)).map(e=>[e.dataset.rueTableRowKey,e]));Ue(je(K.get(),i)).forEach(e=>{let r=n.get(String(e.key));r&&t.appendChild(r)})},0)},0)},Vt=(e,t,n)=>{let r=De(t),i={...K.get(),[e]:r};A.get().find(t=>t.key===e)?.column?.filteredValue===void 0&&ot(i),ct(t=>({...t,[e]:r})),z(),Q&&Z.get().current===void 0&&yt(1),n&&(dt.value=null),Ft(),zt(`filter`,Q?1:$.get().currentPage,$.get().pageSize,i,U.get())},Ht=e=>{let t=Be(e,$.get().pageCount);Q&&Z.get().current===void 0&&yt(t),z(),Q&&Z.get().onChange&&Z.get().onChange(t,$.get().pageSize),Ft(),zt(`paginate`,t,$.get().pageSize,K.get(),U.get())},Ut=t=>t.filter(t=>!V(e(r),`rowSelection`)?.disabled&&!(V(e(r),`rowSelection`)?.getCheckboxProps?V(e(r),`rowSelection`).getCheckboxProps(t.record):{})?.disabled),Wt=x(()=>Ut($.get().pageRows)),Gt=x(()=>Wt.get().map(e=>e.key)),Kt=x(()=>Gt.get().length>0&&Gt.get().every(e=>wt.get().has(e))),qt=x(()=>Gt.get().some(e=>wt.get().has(e))&&!Kt.get()),Jt=(t,n,i,a,o)=>{V(e(r),`rowSelection`)?.selectedRowKeys===void 0&&gt([...t]);let s=We.filter(e=>t.includes(e.key)).map(e=>e.record);i!==void 0&&V(e(r),`rowSelection`)?.onSelect&&typeof a==`boolean`&&V(e(r),`rowSelection`).onSelect(i,a,s,o),V(e(r),`rowSelection`)?.onChange&&V(e(r),`rowSelection`).onChange([...t],s,n)},Yt=t=>{if(!V(e(r),`rowSelection`)||V(e(r),`rowSelection`).type===`radio`)return;let n=new Set(Gt.get()),i=V(e(r),`rowSelection`).selectedRowKeys??ht.value,a=new Set(i);n.forEach(e=>{t?a.add(e):a.delete(e)});let o=Array.from(a);if(Jt(o,{type:`checkbox`}),V(e(r),`rowSelection`).onSelectAll){let n=We.filter(e=>o.includes(e.key)).map(e=>e.record);V(e(r),`rowSelection`).onSelectAll(t,n)}},Xt=(t,n)=>{let i=!!xe&&(!V(e(r),`expandable`)?.rowExpandable||V(e(r),`expandable`).rowExpandable(t.record)),a=t.hasTreeChildren||i;return{key:t.key,enabled:a,expanded:He.get().has(t.key),hasExpandedRowRender:i,indent:t.indent,rowIndex:n}},Zt=(t,n)=>{let i=Xt(t,n);if(!i.enabled)return;let a=new Set(ze.get());i.expanded?a.delete(i.key):a.add(i.key);let o=Array.from(a);V(e(r),`expandable`)?.expandedRowKeys===void 0&&St(o),z(),V(e(r),`expandable`)?.onExpand&&V(e(r),`expandable`).onExpand(!i.expanded,t.record),V(e(r),`expandable`)?.onExpandedRowsChange&&V(e(r),`expandable`).onExpandedRowsChange(o)},Qt=t=>[...t.sortDirections??V(e(r),`sortDirections`)??[`ascend`,`descend`],null],$t=(e,t)=>{let n=Qt(t),r=new Map(Le([...rt.value]).map(e=>[e.key,e])).get(e)?.order??null;return n[(n.findIndex(e=>e===r)+1+n.length)%n.length]},en=(e,t)=>{let n=e.filterDropdownProps?.open??e.filterDropdownOpen;return n===void 0?dt.value===t:!!n},tn=(e,t)=>(t?en(t,e):dt.value===e)||st.value[e]!==void 0?De(st.value[e]??K.get()[e]):De(K.get()[e]),nn=(e,t)=>{ct(n=>({...n,[e]:De(t)})),z()},rn=(e,t,n)=>{let r=en(t,e);t.filterDropdownProps?.open===void 0&&t.filterDropdownOpen===void 0&&(n?dt.value=e:dt.value===e&&(dt.value=null)),!n&&r!==n&&z(),t.filterDropdownProps?.onOpenChange?.(n),t.onFilterDropdownOpenChange?.(n)},an=(e,t)=>{rn(e,t,!1)},on=(e,t,n)=>{Vt(e,tn(e,t),n?.closeDropdown??!0)},sn=(e,t,n)=>{let r=t.filterResetToDefaultFilteredValue?De(t.defaultFilteredValue):[];if(nn(e,r),n?.confirm){Vt(e,r,n.closeDropdown??!0);return}n?.closeDropdown&&an(e,t)},cn=(e,t)=>typeof e.filterIcon==`function`?e.filterIcon(t):e.filterIcon===void 0?`☰`:e.filterIcon,ln=(t,n,r)=>{let i=g(V(t,`arg0`)),a=g(V(t,`arg1`));return s(o(()=>typeof i.get().sortIcon==`function`?{__rue_compiled_branch_key:0,create:()=>y(e=>{let t=ne().content.cloneNode(!0).firstChild,n=t.childNodes[0];return n.parentNode,v(n,()=>String(String(i.get().sortIcon({sortOrder:a.get()})))),[t,t]})}:{__rue_compiled_branch_key:1,create:()=>_(e=>{let t=oe().content.cloneNode(!0).firstChild,n=t,r=t.childNodes[0],i=t.childNodes[1],o;k(()=>{let e=J(`inline-flex flex-col leading-none`,a.get()?`text-base-content`:`opacity-60`),t=e===!1||e==null?``:String(e);Object.is(o,t)||(o=t,n.setAttribute(`class`,t))});let s;k(()=>{let e=J(a.get()===`ascend`?`text-base-content`:`opacity-40`),t=e===!1||e==null?``:String(e);Object.is(s,t)||(s=t,r.setAttribute(`class`,t))});let c;return k(()=>{let e=J(`-mt-0.5`,a.get()===`descend`?`text-base-content`:`opacity-40`),t=e===!1||e==null?``:String(e);Object.is(c,t)||(c=t,i.setAttribute(`class`,t))}),[t,t]})}),e=>S(()=>{i.set(e.arg0),a.set(e.arg1)}),()=>e(t))},un=(e,t,n)=>t?e.map(e=>{let r=typeof n.filterSearch==`function`?n.filterSearch(t,e):String(e.text).toLowerCase().includes(t.toLowerCase()),i=Array.isArray(e.children)?un(e.children,t,n):void 0;return r||i&&i.length>0?i&&i.length>0?{...e,children:i}:e:null}).filter(Boolean):e,dn=(e,t,n,r,i=0)=>e.flatMap(e=>[{key:`${String(e.value)}-${i}`,text:String(e.text),depth:i,type:t.filterMultiple===!1?`radio`:`checkbox`,name:`rue-table-filter-${nt.value}-${n}`,checked:r.includes(e.value),onChange:r=>{let i=r.target.checked,a=tn(n,t),o=new Set(a);i?o.add(e.value):o.delete(e.value);let s=t.filterMultiple===!1?i?[e.value]:[]:[...o];nn(n,s),t.filterOnClose===!1&&Vt(n,s,!1)}},...dn(e.children??[],t,n,r,i+1)]),fn=(n,r,i)=>{let a=g(V(n,`arg0`)),o=g(V(n,`arg1`)),l=g(V(n,`arg3`)),u=g(V(n,`arg4`)),{safeDraftValues:d,__rue_phase2_safeDraftValues:v,safeMenuItems:y,__rue_phase2_safeMenuItems:b,presetRows:T,__rue_phase2_presetRows:A}=c(`useSetup:0:0`,()=>{let e=x(()=>Array.isArray(l.get())?l.get():[]);e.get();let t=e,n=x(()=>Array.isArray(u.get())?u.get():[]);n.get();let r=n,i=x(()=>(o.get().filterPresets??[]).map(e=>({...e,onClick:()=>nn(a.get(),e.values)})));return i.get(),{safeDraftValues:e,__rue_phase2_safeDraftValues:t,safeMenuItems:n,__rue_phase2_safeMenuItems:r,presetRows:i,__rue_phase2_presetRows:i}});return s(_(e=>{let n=se().content.cloneNode(!0).firstChild,r=n.childNodes[0],i=r.parentNode,s=n.childNodes[1],c=s.parentNode,l=n.childNodes[2].childNodes[0],u=l.parentNode,v=n.childNodes[2].childNodes[1],b=v.parentNode,x=n.childNodes[3],S=x.parentNode,A=[];I(()=>{let e=T.get()||[];A=D(i,r,A,e,(e,t)=>t,(e,n)=>{let r=g(e);return P((e,n,i)=>{let a=()=>_(e=>{let n=O(`button`,e);n.setAttribute(`type`,`button`);let i;k(()=>{let e=r.get().className,t=e===!1||e==null?``:String(e);Object.is(i,t)||(i=t,n.setAttribute(`class`,t))});let a=e=>{let t=r.get().onClick;typeof t==`function`&&t(e)};n.addEventListener(`click`,a),L(()=>n.removeEventListener(`click`,a));let o=F(`rue:compiled-slot`);return w(n,o),t({parent:n,before:o},()=>H(r.get().label),()=>({})),[n,n]});return e==null?a():h(e,i,a)},(t,i)=>{e=t,n=i,r.set(t)},void 0)},!1,!1)}),L(()=>C(A)),p(c,s,()=>o.get().filterSearch?{__rue_compiled_branch_key:!0,create:()=>_(e=>{let t=O(`input`,e);t.setAttribute(`type`,`text`),t.setAttribute(`class`,`input input-bordered input-xs mb-2 w-full`),t.setAttribute(`placeholder`,`搜索筛选项`);let n;k(()=>{let e=lt.value[a.get()]??``,r=e==null?``:String(e);Object.is(n,r)||(n=r,t.value=r)});let r=e=>{let t=e=>{ut(t=>({...t,[a.get()]:e.target.value})),z()};typeof t==`function`&&t(e)};return t.addEventListener(`input`,r),L(()=>t.removeEventListener(`input`,r)),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>m(e=>{let t=j();return[t.firstChild,t.lastChild]})});let M=[];return I(()=>{let e=dn(y.get(),o.get(),a.get(),d.get())||[];M=D(u,l,M,e,(e,t)=>e.key,(e,n)=>{let r=g(e);return P((e,n,i)=>{let a=()=>_(e=>{let n=O(`label`,e);n.setAttribute(`class`,`flex items-center gap-2 text-sm`);let i;k(()=>{let e={paddingLeft:`${r.get().depth*12}px`},t=f(e);Object.is(i,t)||(i=t,n.style.cssText=t)});let a=O(`input`,n);w(n,a);let o;k(()=>{let e=r.get().type;Object.is(o,e)||(o=e,e==null||e===!1?a.removeAttribute(`type`):a.setAttribute(`type`,String(e)))});let s;k(()=>{let e=r.get().name;Object.is(s,e)||(s=e,e==null||e===!1?a.removeAttribute(`name`):a.setAttribute(`name`,String(e)))});let c;k(()=>{let e=r.get().type===`radio`?`radio radio-xs`:`checkbox checkbox-xs`,t=e===!1||e==null?``:String(e);Object.is(c,t)||(c=t,a.setAttribute(`class`,t))});let l;k(()=>{let e=!!r.get().checked;Object.is(l,e)||(l=e,a.checked=e)});let u=e=>{let t=r.get().onChange;typeof t==`function`&&t(e)};a.addEventListener(`change`,u),L(()=>a.removeEventListener(`change`,u));let d=O(`span`,n);w(n,d);let p=F(`rue:compiled-slot`);return w(d,p),t({parent:d,before:p},()=>H(r.get().text),()=>({})),[n,n]});return e==null?a():h(e,i,a)},(t,i)=>{e=t,n=i,r.set(t)},void 0)},!1,!1)}),L(()=>C(M)),p(b,v,()=>y.get().length===0?{__rue_compiled_branch_key:!0,create:()=>m(e=>{let t=O(`div`,e);return t.setAttribute(`class`,`text-sm opacity-60`),w(t,E(`暂无匹配项`)),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>m(e=>{let t=j();return[t.firstChild,t.lastChild]})}),p(S,x,()=>o.get().filterOnClose===!1?{__rue_compiled_branch_key:!0,create:()=>m(e=>{let t=j();return[t.firstChild,t.lastChild]})}:{__rue_compiled_branch_key:!1,create:()=>_(e=>{let n=O(`div`,e);n.setAttribute(`class`,`mt-3 flex justify-end gap-2`);let r=O(`button`,n);w(n,r),r.setAttribute(`class`,`btn btn-ghost btn-xs`),L(R(e,r,`click`,()=>()=>sn(a.get(),o.get(),{confirm:!0})));let i=F(`rue:compiled-slot`);w(r,i),t({parent:r,before:i},()=>H(N.get().filterReset),()=>({}));let s=O(`button`,n);w(n,s);let c;k(()=>{let e=J(`btn btn-primary btn-xs`,o.get().filterConfirmClassName),t=e===!1||e==null?``:String(e);Object.is(c,t)||(c=t,s.setAttribute(`class`,t))}),L(R(e,s,`click`,()=>()=>on(a.get(),o.get())));let l=F(`rue:compiled-slot`);return w(s,l),t({parent:s,before:l},()=>H(N.get().filterConfirm),()=>({})),[n,n]})}),[n,n]}),e=>S(()=>{a.set(e.arg0),o.set(e.arg1),l.set(e.arg3),u.set(e.arg4)}),()=>e(n))},pn=(t,n)=>{let i=t.showSorterTooltip??V(e(r),`showSorterTooltip`);if(i===!1)return;if(typeof i==`object`&&i?.title!==void 0)return i.title;let a=$t(n,t);return a===`ascend`?N.get().triggerAsc:a===`descend`?N.get().triggerDesc:N.get().cancelSort},mn=(n,r,i)=>{let o=g(V(n,`arg0`)),u=g(V(n,`arg1`)),{titleNode:d,__rue_phase2_titleNode:f,filtered:v,__rue_phase2_filtered:y,sortOrder:b,draftValues:C,__rue_phase2_draftValues:T,filterSearchValue:D,visible:A,__rue_phase2_visible:M,menuItems:N,__rue_phase2_menuItems:P,sorterTooltipTitle:I,__rue_phase2_sorterTooltipTitle:R,_dropdownOpen:z,_dropdownOnOpenChange:B,_dropdownChildren:U,_dropdownContent:W,_dropdownOverlay:te,_dropdownItems:ne,_dropdownMenu:re,_dropdownPopupRender:q,dropdownProps:ie}=c(`useSetup:0:0`,()=>{let e=x(()=>Lt(u.get(),o.get()));e.get();let t=e,n=x(()=>u.get().filtered??(K.get()[o.get()]??[]).length>0);n.get();let r=n,i=ee.get().get(o.get())?.order??null,a=x(()=>tn(o.get(),u.get()));a.get();let s=a,c=lt.value[o.get()]??``,l=x(()=>en(u.get(),o.get()));l.get();let d=l,f=x(()=>un(u.get().filters??[],c,u.get()));f.get();let p=f,m=x(()=>pn(u.get(),o.get()));m.get();let h=m,{open:g,onOpenChange:_,children:v,content:y,overlay:b,items:S,menu:C,popupRender:w,...T}=u.get().filterDropdownProps??{};return{titleNode:e,__rue_phase2_titleNode:t,filtered:n,__rue_phase2_filtered:r,sortOrder:i,draftValues:a,__rue_phase2_draftValues:s,filterSearchValue:c,visible:l,__rue_phase2_visible:d,menuItems:f,__rue_phase2_menuItems:p,sorterTooltipTitle:m,__rue_phase2_sorterTooltipTitle:h,_dropdownOpen:g,_dropdownOnOpenChange:_,_dropdownChildren:v,_dropdownContent:y,_dropdownOverlay:b,_dropdownItems:S,_dropdownMenu:C,_dropdownPopupRender:w,dropdownProps:T}});return s(_(e=>{let n=ce().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[0],i=r.parentNode,s=F(`rue:text-hole:0`);i.replaceChild(s,r);let c=n.childNodes[1],f=c.parentNode,g=n.childNodes[2],y=g.parentNode;return t({parent:i,before:s},()=>H(d.get()??``),()=>({})),p(f,c,()=>u.get().sorter?{__rue_compiled_branch_key:!0,create:()=>_(e=>{let t=O(`button`,e);t.setAttribute(`type`,`button`);let n;k(()=>{let e=`sort-${o.get()}`;Object.is(n,e)||(n=e,e==null?t.removeAttribute(`aria-label`):t.setAttribute(`aria-label`,String(e)))});let r;k(()=>{let e=I.get();Object.is(r,e)||(r=e,e==null||e===!1?t.removeAttribute(`title`):t.setAttribute(`title`,String(e)))}),t.setAttribute(`class`,`btn btn-ghost btn-xs h-auto min-h-0 px-1 py-0.5`);let i=e=>{let t=e=>{e.stopPropagation(),Bt(o.get(),$t(o.get(),u.get()))};typeof t==`function`&&t(e)};return t.addEventListener(`click`,i),L(()=>t.removeEventListener(`click`,i)),a(t,ln,()=>({arg0:u.get(),arg1:b})),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>m(e=>{let t=j();return[t.firstChild,t.lastChild]})}),p(y,g,()=>Array.isArray(u.get().filters)&&u.get().filters.length>0||u.get().filterPresets!==void 0?{__rue_compiled_branch_key:!0,create:()=>l(G,()=>({trigger:`click`,open:A.get(),closeOnClick:!1,align:`start`,...ie,onOpenChange:e=>rn(o.get(),u.get(),e),children:(e,n,r)=>{let i=()=>_(e=>{let n=j();a(n,G.Trigger,()=>({as:`button`,type:`button`,"aria-label":`filter-${o.get()}`,className:J(`btn btn-ghost btn-xs h-auto min-h-0 px-1 py-0.5 select-none`,v.get()?`text-base-content`:`opacity-40`),children:(e,n,r)=>{let i=()=>_(e=>{let n=j(),r=O(`span`,n);w(n,r);let i=F(`rue:compiled-slot`);w(r,i),t({parent:r,before:i},()=>H(cn(u.get(),v.get())),()=>({}));let a=E(``),o=E(``);return n.insertBefore(a,n.firstChild),n.appendChild(o),[n.firstChild,n.lastChild]});return e==null?i():h(e,r,i)}})),a(n,G.Content,()=>({className:`dropdown-content z-50 mt-2 p-0`,onClick:e=>e.stopPropagation(),children:(e,t,n)=>{let r=()=>_(e=>{let t=j();a(t,fn,()=>({arg0:o.get(),arg1:u.get(),arg2:A.get(),arg3:C.get(),arg4:N.get()}));let n=E(``),r=E(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():h(e,n,r)}}));let r=E(``),i=E(``);return n.insertBefore(r,n.firstChild),n.appendChild(i),[n.firstChild,n.lastChild]});return e==null?i():h(e,r,i)}}))}:{__rue_compiled_branch_key:!1,create:()=>m(e=>{let t=j();return[t.firstChild,t.lastChild]})}),[n,n]}),e=>S(()=>{o.set(e.arg0),u.set(e.arg1)}),()=>e(n))},hn=(r,i,a)=>{let u=g(V(r,`level`)),d=g(V(r,`meta`));return s(o(()=>{let{cellProps:e,__rue_phase2_cellProps:r,children:i,__rue_phase2_children:a,isLeaf:o,__rue_phase2_isLeaf:s,leaf:u,__rue_phase2_leaf:h,key:g,__rue_phase2_key:v,colSpan:y,__rue_phase2_colSpan:b,rowSpan:S,__rue_phase2_rowSpan:C}=c(`useSetup:0:0`,()=>{let e=x(()=>d.get().column.onHeaderCell&&d.get().column.onHeaderCell(d.get().column,d.get().index)||{});e.get();let t=e,n=x(()=>ke(d.get().column));n.get();let r=n,i=x(()=>r.get().length===0);i.get();let a=i,o=x(()=>a.get()?M.get().get(d.get().key)??null:null);o.get();let s=o,c=x(()=>s.get()?.key??d.get().key);c.get();let l=c,u=x(()=>t.get().colSpan??d.get().colSpan);u.get();let f=u,p=x(()=>t.get().rowSpan??d.get().rowSpan);return p.get(),{cellProps:e,__rue_phase2_cellProps:t,children:n,__rue_phase2_children:r,isLeaf:i,__rue_phase2_isLeaf:a,leaf:o,__rue_phase2_leaf:s,key:c,__rue_phase2_key:l,colSpan:u,__rue_phase2_colSpan:f,rowSpan:p,__rue_phase2_rowSpan:p}});if(b.get()===0||C.get()===0)return{__rue_compiled_branch_key:0,create:()=>m(e=>{let t=j();return[t.firstChild,t.lastChild]})};let{className:T,style:E,...D}=r.get(),A=x(()=>J(B.get().headerCell,Ee(d.get().column.align),d.get().column.className,T));A.get();let N=x(()=>Y(W.get().headerCell,d.get().column.width||d.get().column.minWidth?{...d.get().column.width?{width:d.get().column.width}:{},...d.get().column.minWidth?{minWidth:d.get().column.minWidth}:{}}:void 0,E));return N.get(),{__rue_compiled_branch_key:1,__rue_compiled_branch_refresh:!0,create:()=>_(e=>{let r=le().content.cloneNode(!0).firstChild,i=r,a=r.childNodes[0],o=a.parentNode,s;k(()=>{let e=y.get();Object.is(s,e)||(s=e,e==null||e===!1?i.removeAttribute(`colSpan`):i.setAttribute(`colSpan`,String(e)))});let c;k(()=>{let e=S.get();Object.is(c,e)||(c=e,e==null||e===!1?i.removeAttribute(`rowSpan`):i.setAttribute(`rowSpan`,String(e)))});let m;k(()=>{let e=A.get(),t=e===!1||e==null?``:String(e);Object.is(m,t)||(m=t,i.setAttribute(`class`,t))});let h;return k(()=>{let e=N.get(),t=f(e);Object.is(h,t)||(h=t,i.style.cssText=t)}),n(i,()=>D,[`__rue_static_template_id__`]),p(o,a,()=>u.get()?{__rue_compiled_branch_key:!0,create:()=>l(mn,()=>({arg0:g.get(),arg1:d.get().column}))}:{__rue_compiled_branch_key:!1,create:()=>_(e=>{let n=O(`span`,e),r=F(`rue:compiled-slot`);return w(n,r),t({parent:n,before:r},()=>H(Lt(d.get().column,d.get().key)??``),()=>({})),[n,n]})}),[r,r]})}}),e=>S(()=>{u.set(e.level),d.set(e.meta)}),()=>e(r))},gn=(i,a,u)=>{let d=g(V(i,`arg0`)),v=g(V(i,`arg1`));return s(o(()=>{if(!V(e(r),`rowSelection`))return{__rue_compiled_branch_key:0,create:()=>m(e=>{let t=j();return[t.firstChild,t.lastChild]})};let i=V(e(r),`rowSelection`).getCheckboxProps?{...V(e(r),`rowSelection`).getCheckboxProps(d.get().record)}:{};V(e(r),`rowSelection`).disabled&&(i.disabled=!0);let{inputClassName:a,SelectionCellTag:o}=c(`RenderSelectionCell:setup-region:2`,()=>({inputClassName:V(e(r),`rowSelection`).type===`radio`?`radio`:`checkbox`,SelectionCellTag:V(e(r),`pinCols`)&&V(e(r),`rowSelection`).fixed?`th`:`td`})),s=x(()=>wt.get().has(d.get().key));s.get();let u=s,g=t=>{let n=t.target;if(V(e(r),`rowSelection`).type===`radio`){Jt([d.get().key],{type:`radio`},d.get().record,!0,t);return}let i=V(e(r),`rowSelection`).selectedRowKeys??ht.value,a=new Set(i);n.checked?a.add(d.get().key):a.delete(d.get().key),Jt(Array.from(a),{type:`checkbox`},d.get().record,n.checked,t)},y=(t,o,s)=>_(t=>{let o=ue().content.cloneNode(!0).firstChild,s=o,c=o.childNodes[0],l=e=>{let t=e=>e.stopPropagation();typeof t==`function`&&t(e)};s.addEventListener(`click`,l),L(()=>s.removeEventListener(`click`,l));let d;k(()=>{let t=V(e(r),`rowSelection`).type===`radio`?`radio`:`checkbox`;Object.is(d,t)||(d=t,t==null||t===!1?c.removeAttribute(`type`):c.setAttribute(`type`,String(t)))});let f;k(()=>{let t=V(e(r),`rowSelection`).type===`radio`?`${nt.value}-selection`:void 0;Object.is(f,t)||(f=t,t==null||t===!1?c.removeAttribute(`name`):c.setAttribute(`name`,String(t)))});let p;k(()=>{let e=a,t=e===!1||e==null?``:String(e);Object.is(p,t)||(p=t,c.setAttribute(`class`,t))});let m;k(()=>{let e=!!u.get();Object.is(m,e)||(m=e,c.checked=e)});let h=e=>{let t=g;typeof t==`function`&&t(e)};return c.addEventListener(`change`,h),L(()=>c.removeEventListener(`change`,h)),n(c,()=>i,[]),[o,o]});return o===`th`?{__rue_compiled_branch_key:1,__rue_compiled_branch_refresh:!0,create:()=>_(n=>{let i=de().content.cloneNode(!0).firstChild,a=i,o=i.childNodes[0],c=i.childNodes[0].childNodes[0],u=c.parentNode,g=i.childNodes[0].childNodes[1],b=g.parentNode,x;k(()=>{let e=J(B.get().cell,Ee(Tt)),t=e===!1||e==null?``:String(e);Object.is(x,t)||(x=t,a.setAttribute(`class`,t))});let S;k(()=>{let t=Y(W.get().cell,V(e(r),`rowSelection`).columnWidth?{width:V(e(r),`rowSelection`).columnWidth}:void 0),n=f(t);Object.is(S,n)||(S=n,a.style.cssText=n)});let C;k(()=>{let t=J(`inline-flex items-center gap-2`,V(e(r),`rowSelection`).cellClassName),n=t===!1||t==null?``:String(t);Object.is(C,n)||(C=n,o.setAttribute(`class`,n))});let T;k(()=>{let e=String(s.get());Object.is(T,e)||(T=e,e==null?o.removeAttribute(`data-checked`):o.setAttribute(`data-checked`,String(e)))});let E=(e,t,n)=>{let r=()=>l(y,()=>({}));return e==null?r():h(e,n,r)},D=c.nextSibling;return u.removeChild(c),t({parent:u,before:D},()=>E,()=>({})),p(b,g,()=>V(e(r),`rowSelection`).cellLabelFormatter?{__rue_compiled_branch_key:!0,create:()=>_(n=>{let i=O(`span`,n),a=F(`rue:compiled-slot`);return w(i,a),t({parent:i,before:a},()=>H(V(e(r),`rowSelection`).cellLabelFormatter(s.get(),d.get().record,v.get())),()=>({})),[i,i]})}:{__rue_compiled_branch_key:!1,create:()=>m(e=>{let t=j();return[t.firstChild,t.lastChild]})}),[i,i]})}:{__rue_compiled_branch_key:2,__rue_compiled_branch_refresh:!0,create:()=>_(n=>{let i=fe().content.cloneNode(!0).firstChild,a=i,o=i.childNodes[0],c=i.childNodes[0].childNodes[0],u=c.parentNode,g=i.childNodes[0].childNodes[1],b=g.parentNode,x;k(()=>{let e=J(B.get().cell,Ee(Tt)),t=e===!1||e==null?``:String(e);Object.is(x,t)||(x=t,a.setAttribute(`class`,t))});let S;k(()=>{let t=Y(W.get().cell,V(e(r),`rowSelection`).columnWidth?{width:V(e(r),`rowSelection`).columnWidth}:void 0),n=f(t);Object.is(S,n)||(S=n,a.style.cssText=n)});let C;k(()=>{let t=J(`inline-flex items-center gap-2`,V(e(r),`rowSelection`).cellClassName),n=t===!1||t==null?``:String(t);Object.is(C,n)||(C=n,o.setAttribute(`class`,n))});let T;k(()=>{let e=String(s.get());Object.is(T,e)||(T=e,e==null?o.removeAttribute(`data-checked`):o.setAttribute(`data-checked`,String(e)))});let E=(e,t,n)=>{let r=()=>l(y,()=>({}));return e==null?r():h(e,n,r)},D=c.nextSibling;return u.removeChild(c),t({parent:u,before:D},()=>E,()=>({})),p(b,g,()=>V(e(r),`rowSelection`).cellLabelFormatter?{__rue_compiled_branch_key:!0,create:()=>_(n=>{let i=O(`span`,n),a=F(`rue:compiled-slot`);return w(i,a),t({parent:i,before:a},()=>H(V(e(r),`rowSelection`).cellLabelFormatter(s.get(),d.get().record,v.get())),()=>({})),[i,i]})}:{__rue_compiled_branch_key:!1,create:()=>m(e=>{let t=j();return[t.firstChild,t.lastChild]})}),[i,i]})}}),e=>S(()=>{d.set(e.arg0),v.set(e.arg1)}),()=>e(i))},_n=(t,n,i)=>{let a=g(V(t,`arg0`)),c=g(V(t,`arg1`)),l=g(V(t,`arg2`));return s(o(()=>l.get().enabled?{__rue_compiled_branch_key:1,create:()=>_(t=>{let n=pe().content.cloneNode(!0).firstChild,i=n,o=n.childNodes[0],s=o.parentNode,d;k(()=>{let t=J(`btn btn-ghost btn-xs`,V(e(r),`expandable`)?.expandButtonClassName),n=t===!1||t==null?``:String(t);Object.is(d,n)||(d=n,i.setAttribute(`class`,n))});let f=e=>{let t=e=>{e.stopPropagation(),Zt(a.get(),c.get())};typeof t==`function`&&t(e)};i.addEventListener(`click`,f),L(()=>i.removeEventListener(`click`,f));let p=E(``);return s.insertBefore(p,o),s.removeChild(o),u(p,()=>String(String(V(e(r),`expandable`)?.expandLabelFormatter?V(e(r),`expandable`).expandLabelFormatter(l.get().expanded,a.get().record):l.get().expanded?`-`:`+`))),[n,n]})}:{__rue_compiled_branch_key:0,create:()=>m(e=>{let t=j();return[t.firstChild,t.lastChild]})}),e=>S(()=>{a.set(e.arg0),c.set(e.arg1),l.set(e.arg2)}),()=>e(t))},vn=({arg0:e,arg1:t})=>i(e,t),yn=x(()=>$.get().pageRows.map(e=>e.record)),bn=x(()=>({total:$.get().total,page:$.get().currentPage,pageSize:$.get().pageSize})),xn=x(()=>{let e=yn.get().slice();return e.total=$.get().total,e}),Sn=qe(Z.get()),Cn=Q&&!(Z.get()?.hideOnSinglePage&&$.get().pageCount<=1)&&(Sn.length!==1||Sn[0]!==`none`),wn=(t,n,r)=>{let i=g(V(t,`arg0`));return s((e=>e)(_(e=>{let t=me().content.cloneNode(!0).firstChild,n=t,r=t.childNodes[0],a=t.childNodes[2],o=t.childNodes[1],s=o.parentNode,c;k(()=>{let e=i.get();Object.is(c,e)||(c=e,e==null?n.removeAttribute(`data-rue-table-pager`):n.setAttribute(`data-rue-table-pager`,String(e)))});let l;k(()=>{let e=J(`flex items-center gap-2 p-2`,Je(i.get()),B.get().pager),t=e===!1||e==null?``:String(e);Object.is(l,t)||(l=t,n.setAttribute(`class`,t))});let d;k(()=>{let e=W.get().pager,t=f(e);Object.is(d,t)||(d=t,n.style.cssText=t)}),r.setAttribute(`class`,`btn btn-ghost btn-xs`);let p;k(()=>{let e=$.get().currentPage<=1;Object.is(p,e)||(p=e,r.disabled=e)}),L(R(e,r,`click`,()=>()=>Ht($.get().currentPage-1))),a.setAttribute(`class`,`btn btn-ghost btn-xs`);let m;k(()=>{let e=$.get().currentPage>=$.get().pageCount;Object.is(m,e)||(m=e,a.disabled=e)}),L(R(e,a,`click`,()=>()=>Ht($.get().currentPage+1)));let v=[];return I(()=>{let e=Array.from({length:$.get().pageCount})||[];v=D(s,o,v,e,(e,t)=>`page-${i.get()}-${t+1}`,(e,t)=>{let n=g(e),r=g(t);return P((e,t,n)=>{let i=()=>_(e=>{let t=O(`button`,e),n;k(()=>{let e=`btn btn-ghost btn-xs${$.get().currentPage===r.get()+1?` btn-active`:``}`,i=e===!1||e==null?``:String(e);Object.is(n,i)||(n=i,t.setAttribute(`class`,i))}),L(R(e,t,`click`,()=>()=>Ht(r.get()+1)));let i=E(``);return w(t,i),u(i,()=>r.get()+1),[t,t]});return e==null?i():h(e,n,i)},(i,a)=>{e=i,t=a,n.set(i),r.set(a)},void 0)},!0,!1)}),L(()=>C(v)),[t,t]}),`pager-${i.get()}`),e=>S(()=>{i.set(e.arg0)}),()=>e(t))},Tn=V(e(r),`rowSelection`)?.getTitleCheckboxProps?.()??{},En=(t,i,a)=>o(()=>V(e(r),`rowSelection`)?.type===`radio`||V(e(r),`rowSelection`)?.hideSelectAll?{__rue_compiled_branch_key:0,create:()=>m(e=>{let t=j();return[t.firstChild,t.lastChild]})}:{__rue_compiled_branch_key:1,create:()=>_(t=>{let i=he().content.cloneNode(!0).firstChild,a=i.childNodes[0];a.setAttribute(`type`,`checkbox`),a.setAttribute(`class`,`checkbox`);let o;k(()=>{let e=!!Kt.get();Object.is(o,e)||(o=e,a.checked=e)});let s;k(()=>{let e=qt.get()?`mixed`:Kt.get()?`true`:`false`;Object.is(s,e)||(s=e,e==null?a.removeAttribute(`aria-checked`):a.setAttribute(`aria-checked`,String(e)))});let c;k(()=>{let t=!!(V(e(r),`rowSelection`)?.disabled||Gt.get().length===0);Object.is(c,t)||(c=t,a.disabled=t)});let l=e=>{let t=e=>Yt(e.target.checked);typeof t==`function`&&t(e)};return a.addEventListener(`change`,l),L(()=>a.removeEventListener(`change`,l)),n(a,()=>Tn,[]),[i,i]})}),Dn=t=>{V(e(r),`onScroll`)&&V(e(r),`onScroll`)(t)};return _(n=>{let i=ge().content.cloneNode(!0).firstChild,s=i,c=i.childNodes[2],u=i.childNodes[2].childNodes[1],d=i.childNodes[0],v=d.parentNode,y=i.childNodes[1],x=y.parentNode,S=i.childNodes[2].childNodes[0],A=S.parentNode,M=i.childNodes[2].childNodes[1].childNodes[0],R=M.parentNode,z=i.childNodes[2].childNodes[1].childNodes[1],U=z.parentNode,G=i.childNodes[2].childNodes[2],ee=G.parentNode,K=i.childNodes[3],te=K.parentNode,ne=i.childNodes[4],re=ne.parentNode,q=e=>{ft.value=e};typeof q==`function`?q(s):q&&typeof q==`object`&&`current`in q&&(q.current=s),L(()=>{typeof q==`function`?q(null):q&&typeof q==`object`&&`current`in q&&(q.current=null)});let ie;k(()=>{let e=nt.value;Object.is(ie,e)||(ie=e,e==null?s.removeAttribute(`data-rue-table-root`):s.setAttribute(`data-rue-table-root`,String(e)))});let ae;k(()=>{let e=nt.value;Object.is(ae,e)||(ae=e,e==null?s.removeAttribute(`data-rue-table-scroll`):s.setAttribute(`data-rue-table-scroll`,String(e)))});let oe;k(()=>{let e=pt.value;Object.is(oe,e)||(oe=e,e==null?s.removeAttribute(`data-rue-table-version`):s.setAttribute(`data-rue-table-version`,String(e)))});let se;k(()=>{let t=J(`relative`,V(e(r),`bordered`)?`rounded-box border border-base-300 bg-base-100`:void 0,B.get().root,Mt),n=t===!1||t==null?``:String(t);Object.is(se,n)||(se=n,s.setAttribute(`class`,n))});let ce;k(()=>{let e=Y(W.get().root,jt),t=f(e);Object.is(ce,t)||(ce=t,s.style.cssText=t)});let le=e=>{let t=Dn;typeof t==`function`&&t(e)};s.addEventListener(`scroll`,le),L(()=>s.removeEventListener(`scroll`,le));let ue;k(()=>{let e=Xe,t=e===!1||e==null?``:String(e);Object.is(ue,t)||(ue=t,c.setAttribute(`class`,t))});let de;k(()=>{let e=f(Nt);Object.is(de,e)||(de=e,c.style.cssText=e)});let fe;k(()=>{let e=nt.value;Object.is(fe,e)||(fe=e,e==null?c.removeAttribute(`data-rue-table-id`):c.setAttribute(`data-rue-table-id`,String(e)))});let pe;k(()=>{let e=B.get().tbody,t=e===!1||e==null?``:String(e);Object.is(pe,t)||(pe=t,u.setAttribute(`class`,t))});let me;k(()=>{let e=W.get().tbody,t=f(e);Object.is(me,t)||(me=t,u.style.cssText=t)}),p(v,d,()=>Cn?{__rue_compiled_branch_key:!0,create:()=>_(e=>{let t=j();w(t,E(` `));let n=F(`rue:list:end`);w(t,n);let r=[];I(()=>{let e=Sn.filter(e=>e.startsWith(`top`))||[];r=D(n.parentNode,n,r,e,(e,t)=>e,(e,t)=>{let n=g(e);return P((e,t,r)=>{let i=()=>l(wn,()=>({arg0:n.get()}));return e==null?i():h(e,r,i)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),L(()=>C(r)),w(t,E(` `));let i=E(``),a=E(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]})}:{__rue_compiled_branch_key:!1,create:()=>m(e=>{let t=j();return[t.firstChild,t.lastChild]})}),p(x,y,()=>V(e(r),`titleFormatter`)?{__rue_compiled_branch_key:!0,create:()=>_(t=>{let n=O(`div`,t),i;k(()=>{let e=J(`p-2`,B.get().title),t=e===!1||e==null?``:String(e);Object.is(i,t)||(i=t,n.setAttribute(`class`,t))});let o;return k(()=>{let e=W.get().title,t=f(e);Object.is(o,t)||(o=t,n.style.cssText=t)}),a(n,Ze,()=>({render:V(e(r),`titleFormatter`),data:yn.get()})),[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>m(e=>{let t=j();return[t.firstChild,t.lastChild]})}),p(A,S,()=>V(e(r),`showHeader`)??!0?{__rue_compiled_branch_key:!0,create:()=>_(e=>{let n=O(`thead`,e),r;k(()=>{let e=B.get().thead,t=e===!1||e==null?``:String(e);Object.is(r,t)||(r=t,n.setAttribute(`class`,t))});let i;k(()=>{let e=W.get().thead,t=f(e);Object.is(i,t)||(i=t,n.style.cssText=t)});let a=F(`rue:list:end`);w(n,a);let o=[];return I(()=>{let e=T.get()||[];o=D(a.parentNode,a,o,e,(e,t)=>t,(e,n)=>{let r=g(e),i=g(n);return P((e,n,a)=>h(e,a,()=>_(e=>{let n=j(),a=F(`rue:row-call`);w(n,a),t({parent:n,before:a},()=>((e,t)=>(n,r,i)=>H(b(e,t))(n,r,i))(r.get(),i.get()),()=>({}));let o=E(``),s=E(``);return n.insertBefore(o,n.firstChild),n.appendChild(s),[n.firstChild,n.lastChild]})),(t,a)=>{e=t,n=a,r.set(t),i.set(a)},void 0)},!0,!1)}),L(()=>C(o)),[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>m(e=>{let t=j();return[t.firstChild,t.lastChild]})});let he=[];return I(()=>{let e=$.get().pageRows||[];he=D(R,M,he,e,(e,t)=>e.renderKey,(e,t)=>{let n=g(e),r=g(t);return P((e,t,i)=>{let a=()=>l(vn,()=>({arg0:n.get(),arg1:r.get()}));return e==null?a():h(e,i,a)},(i,a)=>{e=i,t=a,n.set(i),r.set(a)},void 0)},!0,!1)}),L(()=>C(he)),p(U,z,()=>$.get().pageRows.length===0?{__rue_compiled_branch_key:!0,create:()=>_(t=>{let n=O(`tr`,t),i=O(`td`,n);w(n,i);let o;k(()=>{let e=At;Object.is(o,e)||(o=e,e==null||e===!1?i.removeAttribute(`colSpan`):i.setAttribute(`colSpan`,String(e)))});let s;k(()=>{let e=J(B.get().empty,Ee(`center`)),t=e===!1||e==null?``:String(e);Object.is(s,t)||(s=t,i.setAttribute(`class`,t))});let c;return k(()=>{let e=W.get().empty,t=f(e);Object.is(c,t)||(c=t,i.style.cssText=t)}),a(i,$e,()=>({value:V(e(r),`emptyText`)===void 0?N.get().emptyText:V(e(r),`emptyText`)})),[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>m(e=>{let t=j();return[t.firstChild,t.lastChild]})}),p(ee,G,()=>typeof V(e(r),`summary`)==`function`||Cn&&Sn.some(e=>e.startsWith(`bottom`))?{__rue_compiled_branch_key:!0,create:()=>_(t=>{let n=O(`tfoot`,t),i;k(()=>{let e=B.get().tfoot,t=e===!1||e==null?``:String(e);Object.is(i,t)||(i=t,n.setAttribute(`class`,t))});let s;return k(()=>{let e=W.get().tfoot,t=f(e);Object.is(s,t)||(s=t,n.style.cssText=t)}),o(()=>typeof V(e(r),`summary`)==`function`?{__rue_compiled_branch_key:!0,create:()=>_(t=>{let n=O(`tr`,t),i;k(()=>{let e=B.get().summary,t=e===!1||e==null?``:String(e);Object.is(i,t)||(i=t,n.setAttribute(`class`,t))});let o;k(()=>{let e=W.get().summary,t=f(e);Object.is(o,t)||(o=t,n.style.cssText=t)});let s=O(`td`,n);w(n,s);let c;return k(()=>{let e=At;Object.is(c,e)||(c=e,e==null||e===!1?s.removeAttribute(`colSpan`):s.setAttribute(`colSpan`,String(e)))}),a(s,et,()=>({render:V(e(r),`summary`),data:xn.get(),info:bn.get()})),[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>m(e=>{let t=j();return[t.firstChild,t.lastChild]})}).__rue_compiled_mount(n),o(()=>Cn?{__rue_compiled_branch_key:!0,create:()=>_(e=>{let t=j();w(t,E(` `));let n=F(`rue:list:end`);w(t,n);let r=[];I(()=>{let e=Sn.filter(e=>e.startsWith(`bottom`))||[];r=D(n.parentNode,n,r,e,(e,t)=>`pager-row-${e}`,(e,t)=>{let n=g(e);return P((e,t,r)=>{let i=()=>_(e=>{let t=O(`tr`,e),r=O(`td`,t);w(t,r);let i;return k(()=>{let e=At;Object.is(i,e)||(i=e,e==null||e===!1?r.removeAttribute(`colSpan`):r.setAttribute(`colSpan`,String(e)))}),a(r,wn,()=>({arg0:n.get()})),[t,t]});return e==null?i():h(e,r,i)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),L(()=>C(r)),w(t,E(` `));let i=E(``),o=E(``);return t.insertBefore(i,t.firstChild),t.appendChild(o),[t.firstChild,t.lastChild]})}:{__rue_compiled_branch_key:!1,create:()=>m(e=>{let t=j();return[t.firstChild,t.lastChild]})}).__rue_compiled_mount(n),[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>m(e=>{let t=j();return[t.firstChild,t.lastChild]})}),p(te,K,()=>V(e(r),`footerFormatter`)?{__rue_compiled_branch_key:!0,create:()=>_(t=>{let n=O(`div`,t),i;k(()=>{let e=J(`p-2`,B.get().footer),t=e===!1||e==null?``:String(e);Object.is(i,t)||(i=t,n.setAttribute(`class`,t))});let o;return k(()=>{let e=W.get().footer,t=f(e);Object.is(o,t)||(o=t,n.style.cssText=t)}),a(n,Ze,()=>({render:V(e(r),`footerFormatter`),data:yn.get()})),[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>m(e=>{let t=j();return[t.firstChild,t.lastChild]})}),p(re,ne,()=>ve.get().spinning?{__rue_compiled_branch_key:!0,create:()=>_(e=>{let n=O(`div`,e),r;k(()=>{let e=J(`absolute inset-0 z-20 flex flex-col items-center justify-center gap-2 rounded-box bg-base-100/70`,B.get().loading),t=e===!1||e==null?``:String(e);Object.is(r,t)||(r=t,n.setAttribute(`class`,t))});let i;k(()=>{let e=W.get().loading,t=f(e);Object.is(i,t)||(i=t,n.style.cssText=t)});let a=O(`span`,n);return w(n,a),a.setAttribute(`class`,`loading loading-spinner loading-md`),o(()=>ve.get().tip?{__rue_compiled_branch_key:!0,create:()=>_(e=>{let n=O(`div`,e);n.setAttribute(`class`,`text-sm opacity-70`);let r=F(`rue:compiled-slot`);return w(n,r),t({parent:n,before:r},()=>H(ve.get().tip),()=>({})),[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>m(e=>{let t=j();return[t.firstChild,t.lastChild]})}).__rue_compiled_mount(n),[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>m(e=>{let t=j();return[t.firstChild,t.lastChild]})}),[i,i]})}return _(e=>{let t=_e().content.cloneNode(!0).firstChild,n=t,r;k(()=>{let e=Xe,t=e===!1||e==null?``:String(e);Object.is(r,t)||(r=t,n.setAttribute(`class`,t))});let i;return k(()=>{let e=U.get().table,t=f(e);Object.is(i,t)||(i=t,n.style.cssText=t)}),[t,t]})},{Head:(n,r,i)=>{let a=g(V(n,`children`)),o=g(V(n,`className`));return s(_(e=>{let n=ve().content.cloneNode(!0).firstChild,r=n,i=n.childNodes[0],s=i.parentNode,c;return k(()=>{let e=o.get()||void 0,t=e===!1||e==null?``:String(e);Object.is(c,t)||(c=t,r.setAttribute(`class`,t))}),t({parent:s,before:i},()=>a.get(),()=>({})),[n,n]}),e=>S(()=>{a.set(e.children),o.set(e.className)}),()=>e(n))},Body:(n,r,i)=>{let a=g(V(n,`children`)),o=g(V(n,`className`));return s(_(e=>{let n=ye().content.cloneNode(!0).firstChild,r=n,i=n.childNodes[0],s=i.parentNode,c;return k(()=>{let e=o.get()||void 0,t=e===!1||e==null?``:String(e);Object.is(c,t)||(c=t,r.setAttribute(`class`,t))}),t({parent:s,before:i},()=>a.get(),()=>({})),[n,n]}),e=>S(()=>{a.set(e.children),o.set(e.className)}),()=>e(n))},Foot:(n,r,i)=>{let a=g(V(n,`children`)),o=g(V(n,`className`));return s(_(e=>{let n=be().content.cloneNode(!0).firstChild,r=n,i=n.childNodes[0],s=i.parentNode,c;return k(()=>{let e=o.get()||void 0,t=e===!1||e==null?``:String(e);Object.is(c,t)||(c=t,r.setAttribute(`class`,t))}),t({parent:s,before:i},()=>a.get(),()=>({})),[n,n]}),e=>S(()=>{a.set(e.children),o.set(e.className)}),()=>e(n))},TR:(n,r,i)=>{let a=g(V(n,`children`)),o=g(V(n,`className`));return s(_(e=>{let n=xe().content.cloneNode(!0).firstChild,r=n,i=n.childNodes[0],s=i.parentNode,c;return k(()=>{let e=o.get()||void 0,t=e===!1||e==null?``:String(e);Object.is(c,t)||(c=t,r.setAttribute(`class`,t))}),t({parent:s,before:i},()=>a.get(),()=>({})),[n,n]}),e=>S(()=>{a.set(e.children),o.set(e.className)}),()=>e(n))},TH:(n,r,i)=>{let a=g(V(n,`children`)),o=g(V(n,`className`));return s(_(e=>{let n=le().content.cloneNode(!0).firstChild,r=n,i=n.childNodes[0],s=i.parentNode,c;return k(()=>{let e=o.get()||void 0,t=e===!1||e==null?``:String(e);Object.is(c,t)||(c=t,r.setAttribute(`class`,t))}),t({parent:s,before:i},()=>a.get(),()=>({})),[n,n]}),e=>S(()=>{a.set(e.children),o.set(e.className)}),()=>e(n))},TD:(n,r,i)=>{let a=g(V(n,`children`)),o=g(V(n,`className`));return s(_(e=>{let n=Se().content.cloneNode(!0).firstChild,r=n,i=n.childNodes[0],s=i.parentNode,c;return k(()=>{let e=o.get()||void 0,t=e===!1||e==null?``:String(e);Object.is(c,t)||(c=t,r.setAttribute(`class`,t))}),t({parent:s,before:i},()=>a.get(),()=>({})),[n,n]}),e=>S(()=>{a.set(e.children),o.set(e.className)}),()=>e(n))}}),nt=B(`<div class="text-sm leading-6"><div>团队：<!--rue:text-hole:0--></div><div>地址：<!--rue:text-hole:1--></div></div>`),rt=B(`<div class="flex justify-between text-sm"><span>当前行数：<!--rue:text-hole:0--></span><span>平均绩效： <!--rue:text-hole:1--></span></div>`),it=B(`<div class="text-sm font-medium">成员列表（当前页 <!--rue:text-hole:0--> 行）</div>`),at=B(`<div class="overflow-x-auto rounded-box border border-base-300 bg-base-100 p-4"><!--rue:opaque-hole:0--></div>`),ot=B(`<div class="grid gap-4 lg:grid-cols-2"><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="mb-3 text-sm font-medium">带背景与激活行</div><!--rue:opaque-hole:0--></div><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="mb-3 text-sm font-medium">hover / zebra / xs</div><!--rue:opaque-hole:1--></div></div>`),st=B(`<div class="space-y-4 rounded-box border border-base-300 bg-base-100 p-4"><div class="flex flex-wrap items-center gap-2 text-sm"><!--rue:text-hole:0--><button class="btn btn-ghost btn-xs">清空排序</button><button>只看 Jim</button><button>只看 London</button><button>Jim + London</button><button class="btn btn-ghost btn-xs">清空筛选</button><button class="btn btn-ghost btn-xs">清空全部</button><span class="opacity-70">筛选：Name <!--rue:text-hole:1--> / Address <!--rue:text-hole:2-->； 当前排序： <!--rue:text-hole:3--> / <!--rue:text-hole:4--></span></div><!--rue:opaque-hole:5--></div>`),ct=B(`<div class="space-y-4 rounded-box border border-base-300 bg-base-100 p-4"><div class="flex flex-wrap gap-2 text-sm"><button class="btn btn-ghost btn-xs">语文 + 数学降序</button><button class="btn btn-ghost btn-xs">三科降序</button><button class="btn btn-ghost btn-xs">语文升序 + 英语降序</button><button class="btn btn-ghost btn-xs">清空排序</button></div><div class="flex flex-wrap items-center gap-2 text-sm"><!--rue:text-hole:0--><span class="opacity-70">当前优先级：<!--rue:text-hole:1--></span></div><!--rue:opaque-hole:2--></div>`),lt=B(`<div class="space-y-4 rounded-box border border-base-300 bg-base-100 p-4"><div class="flex flex-wrap gap-2 text-sm"><!--rue:text-hole:0--></div><!--rue:opaque-hole:1--></div>`),ut=B(`<div class="grid gap-4 lg:grid-cols-2"><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="mb-3 text-sm">多选：当前 <!--rue:text-hole:0--></div><!--rue:opaque-hole:1--></div><div class="rounded-box border border-base-300 bg-base-100 p-4"><div class="mb-3 text-sm">单选：当前 <!--rue:text-hole:2--></div><!--rue:opaque-hole:3--></div></div>`),dt=B(`<div class="grid gap-4 lg:grid-cols-2"><div class="rounded-box border border-base-300 bg-base-100 p-4"><!--rue:opaque-hole:0--></div><div class="rounded-box border border-base-300 bg-base-100 p-4"><!--rue:opaque-hole:1--></div></div>`),ft=B(`<div class="rounded-box border border-base-300 bg-base-100 p-4"><!--rue:opaque-hole:0--></div>`),pt=B(`<div class="space-y-4 rounded-box border border-base-300 bg-base-100 p-4"><div class="flex flex-wrap gap-2 text-sm"><button class="btn btn-ghost btn-xs"><!--rue:text-hole:0--></button><span>最近操作：<!--rue:text-hole:1--></span></div><!--rue:opaque-hole:2--></div>`),mt=B(`<div class="grid gap-4 xl:grid-cols-2"><div class="h-72 overflow-auto rounded-box border border-base-300 bg-base-100 p-4"><!--rue:opaque-hole:0--></div><div class="rounded-box border border-base-300 bg-base-100 p-4 overflow-x-auto"><!--rue:opaque-hole:1--></div></div>`),ht=B(`<div class="component-preview not-prose text-base-content my-6 lg:my-12"><div class="flex flex-wrap items-start justify-between gap-3"><div><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># <!--rue:text-hole:0--></h2><!--rue:text-hole:1--></div></div><!--rue:opaque-hole:2--><!--rue:text-hole:3--></div>`),gt=B(`<div class="not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100"><table class="table table-zebra"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><!--rue:text-hole:0--></tbody></table></div>`),_t=B(`<button class="btn btn-ghost btn-xs">查看</button>`),Z=B(`<div class="max-w-none prose prose-sm md:prose-base"><h1>Table 表格</h1><p>Rue Table 现在同时覆盖数据驱动表格和 daisyUI 风格的静态表格写法，使用 Rue 当前视觉风格，并补充更完整的 排序、筛选、分页、选择、展开与分组表头能力。</p><p>可以先从基础用法进入，再根据场景查看筛选排序、选择模式、滚动布局与分组表头。静态样式写法仍然提供，可继续 使用 <code>Table.Head</code>、<code>Table.Body</code> 等复合组件。</p><h2>何时使用</h2><ul><li>需要展示结构化列表数据，并同时提供排序、筛选、分页等交互。</li><li>适合使用 Rue / daisyUI 的表格视觉风格，同时使用数据表式 API。</li><li>基础简单静态表格，也有复杂后台表格，想统一在一个组件里处理。</li></ul><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--><!--rue:opaque-hole:5--><!--rue:opaque-hole:6--><!--rue:opaque-hole:7--><!--rue:opaque-hole:8--><!--rue:opaque-hole:9--><h2 id="table-api">API</h2><p>当前页面只列出 Rue Table 当前最常用的配置项，优先对应实际使用场景。</p><h3>Table</h3><!--rue:opaque-hole:10--><h3>Column</h3><!--rue:opaque-hole:11--><h3>rowSelection</h3><!--rue:opaque-hole:12--><h3>expandable</h3><!--rue:opaque-hole:13--><h2>FAQ</h2><h3>数据驱动和静态结构怎么选？</h3><p>需要排序、筛选、分页、选择、展开时优先使用 <code>columns + dataSource</code> 。只想快速输出结构化样式， 或需要完全手写表格结构时，可以使用复合组件写法即可。</p><h3>为什么筛选或排序后会回到第一页？</h3><p>这是为了避免当前页在筛选后没有数据。如果你希望完全自行控制分页，把 <code>pagination.current</code> 和<code>onChange</code> 一起受控即可。</p><h3>固定列和 pinCols 的关系是什么？</h3><p><code>pinCols</code> 负责启用 daisyUI 的固定列视觉能力，具体哪一列固定则由列上的 <code>fixedCol</code> 或 <code>fixed</code> 控制。静态结构写法中，通常把固定列单元格写成 <code>TH</code> 会更自然。</p></div>`),vt=(e,n,i)=>_(n=>{let i=ht().content.cloneNode(!0).firstChild,a=i.childNodes[0].childNodes[0].childNodes[0].childNodes[1],o=a.parentNode,s=i.childNodes[0].childNodes[0].childNodes[1],c=s.parentNode,u=i.childNodes[1],f=u.parentNode,p=i.childNodes[2],g=p.parentNode;t({parent:o,before:a},()=>H(V(e,`title`)),()=>({})),t({parent:c,before:s},()=>V(e,`summary`)?(n,i,a)=>h(n,a,()=>_(()=>{let n=j(),i=O(`p`,n);w(n,i),r(i,`m-0 text-sm opacity-70`);let a=F(`rue:slot:anchor`);w(i,a),t({parent:i,before:a},()=>H(V(e,`summary`)),()=>({}));let o=E(``),s=E(``);return n.insertBefore(o,n.firstChild),n.appendChild(s),[n.firstChild,n.lastChild]})):(e,t,n)=>{let r=()=>m(e=>{let t=E(``);return[t,t]});return e==null?r():h(e,n,r)},()=>({}));let v=(t,n,r)=>{let i=()=>l(W,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:V(e,`tab`).value,onChange:t=>V(e,`tab`).value=t,className:`mb-3 mt-4`}));return t==null?i():h(t,r,i)},y=u.nextSibling;return f.removeChild(u),t({parent:f,before:y},()=>v,()=>({})),t({parent:g,before:p},()=>V(e,`tab`).value===`preview`?H(d(V(e,`preview`),e,[])):(t,n,r)=>h(t,r,()=>l(U,()=>({className:`mt-2`,lang:`tsx`,code:V(e,`code`)}))),()=>({})),[i,i]}),yt=(t,n,r)=>{let i=g(V(t,`rows`));return s(_(e=>{let t=gt().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[1].childNodes[0],r=n.parentNode,a=B(`<tr><td><code><!--rue:text-hole:0--></code></td><td>rue:row-text</td><td><code><!--rue:text-hole:2--></code></td><td><code><!--rue:text-hole:3--></code></td></tr>`),o=[];return I(()=>{let e=i.get()||[];o=T(r,n,o,e,(e,t)=>e.prop,(e,t,n)=>{let r=e,i;return A(e=>{let t=a().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0].childNodes[0],o=n.parentNode,s=t.childNodes[1].childNodes[0];s.parentNode;let c=t.childNodes[2].childNodes[0].childNodes[0],l=c.parentNode,u=t.childNodes[3].childNodes[0].childNodes[0],d=u.parentNode,f=E(``);o.insertBefore(f,n),o.removeChild(n);let p=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);f.textContent=p;let m=r.description==null||typeof r.description==`boolean`?``:String(r.description);s.textContent=m;let h=E(``);l.insertBefore(h,c),l.removeChild(c);let g=r.type==null||typeof r.type==`boolean`?``:String(r.type);h.textContent=g;let _=E(``);d.insertBefore(_,u),d.removeChild(u);let v=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);return _.textContent=v,i=()=>{{let e=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);Object.is(p,e)||(f.textContent=e,p=e)}{let e=r.description==null||typeof r.description==`boolean`?``:String(r.description);Object.is(m,e)||(s.textContent=e,m=e)}{let e=r.type==null||typeof r.type==`boolean`?``:String(r.type);Object.is(g,e)||(h.textContent=e,g=e)}{let e=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);Object.is(v,e)||(_.textContent=e,v=e)}},[t,t]},(n,a)=>{e=n,t=a,r=n,i()},void 0,n)},!1,!0)}),L(()=>C(o)),[t,t]}),e=>S(()=>{i.set(e.rows)}),()=>e(t))},bt=[{key:`1`,name:`林青`,age:28,city:`杭州`,role:`设计工程师`,team:`体验平台`,status:`active`,score:92,salary:26e3,visits:148,address:`云谷路 88 号`},{key:`2`,name:`周宁`,age:34,city:`上海`,role:`前端工程师`,team:`设计系统`,status:`active`,score:88,salary:31e3,visits:203,address:`武康路 12 号`},{key:`3`,name:`刘溪`,age:41,city:`深圳`,role:`产品经理`,team:`商业化`,status:`leave`,score:79,salary:35e3,visits:167,address:`深南大道 100 号`},{key:`4`,name:`陈默`,age:26,city:`成都`,role:`测试开发`,team:`质量平台`,status:`trial`,score:95,salary:22e3,visits:98,address:`天府三街 18 号`},{key:`5`,name:`顾安`,age:31,city:`北京`,role:`运营分析`,team:`增长`,status:`active`,score:83,salary:24500,visits:132,address:`望京 SOHO`}],xt=[{id:`1`,item:`套餐 A`,owner:`前台`,channel:`门店`,stock:42,price:`199`},{id:`2`,item:`套餐 B`,owner:`门店`,channel:`小程序`,stock:36,price:`299`},{id:`3`,item:`套餐 C`,owner:`线上`,channel:`官网`,stock:28,price:`399`},{id:`4`,item:`体验卡`,owner:`运营`,channel:`社群`,stock:86,price:`99`},{id:`5`,item:`企业版`,owner:`销售`,channel:`直销`,stock:12,price:`1299`},{id:`6`,item:`家庭版`,owner:`门店`,channel:`门店`,stock:25,price:`699`},{id:`7`,item:`增值包`,owner:`客服`,channel:`续费`,stock:57,price:`159`},{id:`8`,item:`旗舰包`,owner:`线上`,channel:`官网`,stock:18,price:`999`},{id:`9`,item:`季度包`,owner:`增长`,channel:`投放`,stock:64,price:`499`},{id:`10`,item:`年度包`,owner:`销售`,channel:`直销`,stock:21,price:`1599`}],St=[{key:`1`,name:`林青`,role:`设计工程师`,team:`体验平台`,city:`杭州`,score:92,visits:148,salary:26e3,address:`云谷路 88 号`},{key:`2`,name:`周宁`,role:`前端工程师`,team:`设计系统`,city:`上海`,score:88,visits:216,salary:31e3,address:`武康路 12 号`},{key:`3`,name:`刘溪`,role:`产品经理`,team:`商业化`,city:`深圳`,score:76,visits:174,salary:35e3,address:`深南大道 100 号`},{key:`4`,name:`陈默`,role:`测试开发`,team:`质量平台`,city:`成都`,score:95,visits:98,salary:22e3,address:`天府三街 18 号`},{key:`5`,name:`顾安`,role:`运营分析`,team:`增长`,city:`北京`,score:83,visits:132,salary:24500,address:`望京 SOHO`},{key:`6`,name:`许嘉`,role:`数据分析`,team:`策略`,city:`南京`,score:91,visits:121,salary:27e3,address:`软件大道 66 号`},{key:`7`,name:`何澈`,role:`客户成功`,team:`企业服务`,city:`苏州`,score:87,visits:154,salary:24e3,address:`金鸡湖大道 9 号`}],Q=[{key:`1`,name:`John Brown`,age:32,address:`New York No. 1 Lake Park`},{key:`2`,name:`Jim Green`,age:42,address:`London No. 1 Lake Park`},{key:`3`,name:`Joe Black`,age:32,address:`Sydney No. 1 Lake Park`},{key:`4`,name:`Jim Red`,age:32,address:`London No. 2 Lake Park`}],$=[{key:`name`,label:`姓名`},{key:`age`,label:`年龄`},{key:`address`,label:`地址`}],Ct=[{key:`1`,name:`John Brown`,chinese:98,math:60,english:70},{key:`2`,name:`Jim Green`,chinese:98,math:66,english:89},{key:`3`,name:`Joe Black`,chinese:98,math:90,english:70},{key:`4`,name:`Jim Red`,chinese:88,math:99,english:89}],wt=[{key:`chinese`,label:`语文`,priority:3},{key:`math`,label:`数学`,priority:2},{key:`english`,label:`英语`,priority:1}],Tt=e=>wt.some(t=>t.key===e),Et=e=>e===`ascend`||e===`descend`,Dt=[{key:`1`,name:`Cy Ganderton`,team:`Design Ops`,city:`Hangzhou`,owner:`Hart Hagerty`,updatedAt:`2026-04-18`},{key:`2`,name:`Brice Swyre`,team:`Growth`,city:`Shanghai`,owner:`Yancy Tear`,updatedAt:`2026-04-19`},{key:`3`,name:`Marjy Ferencz`,team:`Infra`,city:`Shenzhen`,owner:`Maribeth Popping`,updatedAt:`2026-04-21`}],Ot=[{key:`name`,label:`Name`},{key:`team`,label:`Team`},{key:`city`,label:`City`},{key:`owner`,label:`Owner`},{key:`updatedAt`,label:`Updated`}],kt=e=>Ot.map(t=>({key:t.key,title:t.label,dataIndex:t.key,hidden:!e.includes(t.key)})),At=[{prop:`columns`,description:`列配置，支持分组表头、排序、筛选、隐藏列与单元格属性。`,type:`ColumnItem[]`,defaultValue:`-`},{prop:`dataSource`,description:`数据数组。`,type:`any[]`,defaultValue:`-`},{prop:`rowKey`,description:`行主键，可传字段名或函数。`,type:`string | (record) => key`,defaultValue:"`key`"},{prop:`rowSelection`,description:`选择列配置，支持多选、单选、禁用项、表头标题。`,type:`object`,defaultValue:`-`},{prop:`expandable`,description:`展开行配置，支持按行点击展开与受控展开。`,type:`object`,defaultValue:`-`},{prop:`pagination`,description:"分页配置，设为 `false` 时关闭分页。",type:`object | false`,defaultValue:`-`},{prop:`scroll`,description:`横向 / 纵向滚动配置，可在变更后自动回到顶部。`,type:`object`,defaultValue:`-`},{prop:`summary`,description:`汇总栏渲染。`,type:`(currentData, info) => any`,defaultValue:`-`}],jt=[{prop:`title`,description:`列标题，支持传节点或函数。`,type:`any | (context) => any`,defaultValue:`-`},{prop:`dataIndex`,description:`字段路径，支持字符串和数组路径。`,type:`string | string[]`,defaultValue:`-`},{prop:`sorter / sortOrder`,description:`本地排序、受控排序与多列排序。`,type:`boolean | fn | { compare?: fn; multiple?: number } / SortOrder`,defaultValue:`-`},{prop:`filters / filterDropdown / filteredValue`,description:`默认筛选菜单、自定义筛选面板与受控筛选值。`,type:`Filter.Item[] / render fn / any[]`,defaultValue:`-`},{prop:`filterSearch`,description:`筛选项搜索。`,type:`boolean | fn`,defaultValue:`false`},{prop:`children`,description:`分组表头子列。`,type:`ColumnItem[]`,defaultValue:`-`},{prop:`hidden`,description:`隐藏列但保持配置。`,type:`boolean`,defaultValue:`false`},{prop:`onCell / onHeaderCell`,description:`给单元格注入 className、style、colSpan、rowSpan 等属性。`,type:`fn`,defaultValue:`-`}],Mt=[{prop:`type`,description:`选择模式。`,type:"`checkbox` | `radio`",defaultValue:"`checkbox`"},{prop:`columnTitle`,description:`选择列表头内容。`,type:`any`,defaultValue:`-`},{prop:`hideSelectAll`,description:`隐藏全选框。`,type:`boolean`,defaultValue:`false`},{prop:`getCheckboxProps`,description:`为某一行注入 disabled 等状态。`,type:`(record) => object`,defaultValue:`-`},{prop:`onSelect / onSelectAll / onChange`,description:`选择行为回调。`,type:`fn`,defaultValue:`-`}],Nt=[{prop:`expandedRowRender`,description:`展开内容渲染函数。`,type:`(record, index) => any`,defaultValue:`-`},{prop:`expandRowByClick`,description:`点击行即可展开。`,type:`boolean`,defaultValue:`false`},{prop:`showExpandColumn`,description:`是否展示展开列。`,type:`boolean`,defaultValue:`true`},{prop:`rowExpandable`,description:`按行控制是否可展开。`,type:`(record) => boolean`,defaultValue:`-`},{prop:`defaultExpandedRowKeys / expandedRowKeys`,description:`默认展开 / 受控展开。`,type:`key[]`,defaultValue:`-`}],Pt=`import { Table } from '@rue-js/design'
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
}`,Wt=(e,n,i)=>{let o=M(`preview`),s=M(`preview`),c=M(`preview`),d=M(`preview`),f=M(`preview`),p=M(`preview`),v=M(`preview`),y=M(`preview`),x=M(`preview`),S=M(`preview`),T=M([`2`]),A=M([`2`]),B=M(`未点击`),V=M([`Jim`]),U=M([`London`]),W=M({columnKey:`age`,order:`descend`}),G=M({chinese:`descend`,math:`descend`}),K=M([`name`,`team`,`city`,`owner`]),te=M(kt(K.value)),ne=M(!1),re=M([`2`]),q=()=>[{key:`name`,title:`Name`,filters:[{text:`Jim`,value:`Jim`},{text:`Joe`,value:`Joe`},{text:`John`,value:`John`}],dataIndex:`name`,filteredValue:V.value,filterSearch:!0,onFilter:(e,t)=>t.name.includes(e),sorter:(e,t)=>e.name.length-t.name.length,sortDirections:[`descend`,`ascend`],sortOrder:W.value.columnKey===`name`?W.value.order:null},{key:`age`,title:`Age`,dataIndex:`age`,sorter:(e,t)=>e.age-t.age,sortDirections:[`descend`,`ascend`],sortOrder:W.value.columnKey===`age`?W.value.order:null},{key:`address`,title:`Address`,filters:[{text:`London`,value:`London`},{text:`New York`,value:`New York`},{text:`Sydney`,value:`Sydney`}],dataIndex:`address`,filteredValue:U.value,filterSearch:!0,onFilter:(e,t)=>t.address.includes(e),sorter:(e,t)=>e.address.length-t.address.length,sortDirections:[`descend`,`ascend`],sortOrder:W.value.columnKey===`address`?W.value.order:null,ellipsis:!0}],ie=M(q()),ae=()=>{ie.value=q()},oe=()=>[{title:`Name`,dataIndex:`name`},{key:`chinese`,title:`Chinese Score`,dataIndex:`chinese`,sortOrder:G.value.chinese??null,sorter:{compare:(e,t)=>e.chinese-t.chinese,multiple:3},sortDirections:[`descend`,`ascend`]},{key:`math`,title:`Math Score`,dataIndex:`math`,sortOrder:G.value.math??null,sorter:{compare:(e,t)=>e.math-t.math,multiple:2},sortDirections:[`descend`,`ascend`]},{key:`english`,title:`English Score`,dataIndex:`english`,sortOrder:G.value.english??null,sorter:{compare:(e,t)=>e.english-t.english,multiple:1},sortDirections:[`descend`,`ascend`]}],se=M(oe()),ce=()=>{se.value=oe()},le=e=>{let t=W.value,n=t.columnKey===e?t.order===`descend`?`ascend`:t.order===`ascend`?null:`descend`:`descend`;W.value=n?{columnKey:e,order:n}:{columnKey:null,order:null},ae()},ue=(e,t)=>{let n=W.value.columnKey===e?W.value.order:null;return n===`descend`?`${t}降序`:n===`ascend`?`${t}升序`:`${t}排序`},de=()=>$.find(e=>e.key===W.value.columnKey)?.label??`无`,fe=()=>W.value.order===`descend`?`降序`:W.value.order===`ascend`?`升序`:`无`,pe=e=>{G.value={...e},ce()},me=e=>{let t=G.value[e]??null,n=t===`descend`?`ascend`:t===`ascend`?null:`descend`,r={...G.value};n?r[e]=n:delete r[e],G.value=r,ce()},he=e=>{let t=G.value[e.key];return t===`descend`?`${e.label}降序`:t===`ascend`?`${e.label}升序`:`${e.label}排序`},ge=()=>wt.filter(e=>G.value[e.key]).sort((e,t)=>t.priority-e.priority).map(e=>{let t=G.value[e.key]===`descend`?`降序`:`升序`;return`${e.label}${t} P${e.priority}`}).join(` / `)||`无`,_e=e=>{let t=K.value.includes(e)?K.value.filter(t=>t!==e):[...K.value,e];K.value=t,te.value=kt(t)},ve=[{title:`姓名`,dataIndex:`name`},{title:`城市`,dataIndex:`city`},{title:`岗位`,dataIndex:`role`},{title:`团队`,dataIndex:`team`}],ye=e=>[{title:`成员信息`,children:[{title:`姓名`,dataIndex:`name`,width:120},{title:`城市`,dataIndex:`city`,width:120}]},{title:`工作概览`,children:[{title:`岗位`,dataIndex:`role`,ellipsis:!0},{title:`团队`,dataIndex:`team`,ellipsis:!0},{title:`月薪`,dataIndex:`salary`,align:`right`,hidden:e}]},{title:`操作`,key:`action`,width:120,align:`center`,render:(e,t)=>_(e=>{let n=_t().content.cloneNode(!0).firstChild,r=n;return r.setAttribute(`class`,`btn btn-ghost btn-xs`),L(R(e,r,`click`,()=>()=>B.value=`操作 ${t.name}`)),[n,n]}),onCell:(e,t)=>({className:t%2==0?`bg-base-100`:`bg-base-200/30`})}],be=M(ye(ne.value)),xe=()=>{ne.value=!ne.value,be.value=ye(ne.value)},Se=[{title:`姓名`,dataIndex:`name`,width:120,fixedCol:!0},{title:`城市`,dataIndex:`city`,width:120},{title:`岗位`,dataIndex:`role`,width:180,ellipsis:!0},{title:`团队`,dataIndex:`team`,width:160},{title:`地址`,dataIndex:`address`,width:220,ellipsis:!0},{title:`访问量`,dataIndex:`visits`,width:120,align:`right`}];return N(()=>l(ee,()=>({children:(e,n,i)=>{let M=()=>_(e=>{let n=j(),i=Z().content.cloneNode(!0),M=i.firstChild,N=M.childNodes[5],ee=N.parentNode,q=M.childNodes[6],oe=q.parentNode,ye=M.childNodes[7],Ce=ye.parentNode,we=M.childNodes[8],Te=we.parentNode,Ee=M.childNodes[9],J=Ee.parentNode,Y=M.childNodes[10],De=Y.parentNode,Oe=M.childNodes[11],ke=Oe.parentNode,Ae=M.childNodes[12],je=Ae.parentNode,Me=M.childNodes[13],Ne=Me.parentNode,Pe=M.childNodes[14],Fe=Pe.parentNode,Ie=M.childNodes[18],Le=Ie.parentNode,Re=M.childNodes[20],ze=Re.parentNode,Be=M.childNodes[22],Ve=Be.parentNode,He=M.childNodes[24],Ue=He.parentNode;n.appendChild(i);let We=(e,n,r)=>{let i=()=>l(vt,()=>({title:`基础数据表格`,summary:`最直接的 columns + dataSource 用法，适合作为大多数列表页的起点。`,tab:o,preview:()=>_(e=>{let n=at().content.cloneNode(!0).firstChild,r=n.childNodes[0],i=r.parentNode,a=(e,t,n)=>{let r=()=>l(X,()=>({className:`w-full`,columns:ve,dataSource:bt}));return e==null?r():h(e,n,r)},o=r.nextSibling;return i.removeChild(r),t({parent:i,before:o},()=>a,()=>({})),[n,n]}),code:Pt}));return e==null?i():h(e,r,i)},Ge=N.nextSibling;ee.removeChild(N),t({parent:ee,before:Ge},()=>We,()=>({}));let Ke=(e,n,r)=>{let i=()=>l(vt,()=>({title:`视觉风格与静态行态`,summary:`使用当前视觉类示例：背景、激活行、hover、zebra 与尺寸示例。`,tab:s,preview:()=>_(e=>{let n=ot().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[1],i=r.parentNode,o=n.childNodes[1].childNodes[1],s=o.parentNode,c=(e,t,n)=>{let r=()=>l(X,()=>({className:`w-full`,children:(e,t,n)=>{let r=()=>_(e=>{let t=j();a(t,X.Head,()=>({children:(e,t,n)=>{let r=()=>_(e=>{let t=j();a(t,X.TR,()=>({children:(e,t,n)=>{let r=()=>_(e=>{let t=j();a(t,X.TH,()=>({children:(e,t,n)=>{let r=()=>m(e=>{let t=j();w(t,E(`姓名`));let n=E(``),r=E(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():h(e,n,r)}})),a(t,X.TH,()=>({children:(e,t,n)=>{let r=()=>m(e=>{let t=j();w(t,E(`岗位`));let n=E(``),r=E(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():h(e,n,r)}})),a(t,X.TH,()=>({children:(e,t,n)=>{let r=()=>m(e=>{let t=j();w(t,E(`城市`));let n=E(``),r=E(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():h(e,n,r)}}));let n=E(``),r=E(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():h(e,n,r)}}));let n=E(``),r=E(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():h(e,n,r)}})),a(t,X.Body,()=>({children:(e,t,n)=>{let r=()=>_(e=>{let t=j();a(t,X.TR,()=>({className:`bg-base-200`,children:(e,t,n)=>{let r=()=>_(e=>{let t=j();a(t,X.TD,()=>({children:(e,t,n)=>{let r=()=>m(e=>{let t=j();w(t,E(`林青`));let n=E(``),r=E(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():h(e,n,r)}})),a(t,X.TD,()=>({children:(e,t,n)=>{let r=()=>m(e=>{let t=j();w(t,E(`设计工程师`));let n=E(``),r=E(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():h(e,n,r)}})),a(t,X.TD,()=>({children:(e,t,n)=>{let r=()=>m(e=>{let t=j();w(t,E(`杭州`));let n=E(``),r=E(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():h(e,n,r)}}));let n=E(``),r=E(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():h(e,n,r)}})),a(t,X.TR,()=>({className:`active`,children:(e,t,n)=>{let r=()=>_(e=>{let t=j();a(t,X.TD,()=>({children:(e,t,n)=>{let r=()=>m(e=>{let t=j();w(t,E(`周宁`));let n=E(``),r=E(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():h(e,n,r)}})),a(t,X.TD,()=>({children:(e,t,n)=>{let r=()=>m(e=>{let t=j();w(t,E(`前端工程师`));let n=E(``),r=E(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():h(e,n,r)}})),a(t,X.TD,()=>({children:(e,t,n)=>{let r=()=>m(e=>{let t=j();w(t,E(`上海`));let n=E(``),r=E(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():h(e,n,r)}}));let n=E(``),r=E(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():h(e,n,r)}}));let n=E(``),r=E(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():h(e,n,r)}}));let n=E(``),r=E(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():h(e,n,r)}}));return e==null?r():h(e,n,r)},u=r.nextSibling;i.removeChild(r),t({parent:i,before:u},()=>c,()=>({}));let d=(e,t,n)=>{let r=()=>l(X,()=>({className:`w-full`,zebra:!0,size:`xs`,rowHoverable:!0,columns:ve,dataSource:bt.slice(0,3)}));return e==null?r():h(e,n,r)},f=o.nextSibling;return s.removeChild(o),t({parent:s,before:f},()=>d,()=>({})),[n,n]}),code:Ft}));return e==null?i():h(e,r,i)},qe=q.nextSibling;oe.removeChild(q),t({parent:oe,before:qe},()=>Ke,()=>({}));let Je=(e,n,r)=>{let i=()=>l(vt,()=>({title:`可控筛选与排序`,summary:`恢复外部控制台式的筛选与排序示例，避免交互状态混在一起。`,tab:c,preview:()=>_(e=>{let n=st().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[1],i=n.childNodes[0].childNodes[2],a=n.childNodes[0].childNodes[3],o=n.childNodes[0].childNodes[4],s=n.childNodes[0].childNodes[5],c=n.childNodes[0].childNodes[6],d=n.childNodes[0].childNodes[0],f=d.parentNode,p=n.childNodes[0].childNodes[7].childNodes[1],m=p.parentNode,v=n.childNodes[0].childNodes[7].childNodes[3],y=v.parentNode,b=n.childNodes[0].childNodes[7].childNodes[5],x=b.parentNode,S=n.childNodes[0].childNodes[7].childNodes[7],T=S.parentNode,A=n.childNodes[1],j=A.parentNode;r.setAttribute(`class`,`btn btn-ghost btn-xs`),L(R(e,r,`click`,()=>()=>{W.value={columnKey:null,order:null},ae()}));let M;k(()=>{let e=`btn btn-xs ${V.value.length===1&&V.value[0]===`Jim`&&U.value.length===0?`btn-primary`:`btn-ghost`}`,t=e===!1||e==null?``:String(e);Object.is(M,t)||(M=t,i.setAttribute(`class`,t))}),L(R(e,i,`click`,()=>()=>{V.value=[`Jim`],U.value=[],ae()}));let N;k(()=>{let e=`btn btn-xs ${U.value.length===1&&U.value[0]===`London`&&V.value.length===0?`btn-primary`:`btn-ghost`}`,t=e===!1||e==null?``:String(e);Object.is(N,t)||(N=t,a.setAttribute(`class`,t))}),L(R(e,a,`click`,()=>()=>{V.value=[],U.value=[`London`],ae()}));let z;k(()=>{let e=`btn btn-xs ${V.value.length===1&&V.value[0]===`Jim`&&U.value.length===1&&U.value[0]===`London`?`btn-primary`:`btn-ghost`}`,t=e===!1||e==null?``:String(e);Object.is(z,t)||(z=t,o.setAttribute(`class`,t))}),L(R(e,o,`click`,()=>()=>{V.value=[`Jim`],U.value=[`London`],ae()})),s.setAttribute(`class`,`btn btn-ghost btn-xs`),L(R(e,s,`click`,()=>()=>{V.value=[],U.value=[],ae()})),c.setAttribute(`class`,`btn btn-ghost btn-xs`),L(R(e,c,`click`,()=>()=>{V.value=[],U.value=[],W.value={columnKey:null,order:null},ae()}));let B=[];I(()=>{B=D(f,d,B,$||[],(e,t)=>e.key,(e,n)=>{let r=g(e);return P((e,n,i)=>{let a=()=>_(e=>{let n=O(`button`,e),i;k(()=>{let e=`btn btn-xs ${W.value.columnKey===r.get().key?`btn-primary`:`btn-ghost`}`,t=e===!1||e==null?``:String(e);Object.is(i,t)||(i=t,n.setAttribute(`class`,t))}),L(R(e,n,`click`,()=>()=>le(r.get().key)));let a=F(`rue:compiled-slot`);return w(n,a),t({parent:n,before:a},()=>((e,t)=>(n,r,i)=>H(ue(e,t))(n,r,i))(r.get().key,r.get().label),()=>({})),[n,n]});return e==null?a():h(e,i,a)},(t,i)=>{e=t,n=i,r.set(t)},void 0)},!1,!1)}),L(()=>C(B)),t({parent:m,before:p},()=>H(V.value.join(`, `)||`无`),()=>({})),t({parent:y,before:v},()=>H(U.value.join(`, `)||`无`),()=>({}));let G=E(``);x.insertBefore(G,b),x.removeChild(b),u(G,()=>de());let ee=E(``);T.insertBefore(ee,S),T.removeChild(S),u(ee,()=>fe());let K=(e,t,n)=>{let r=()=>l(X,()=>({className:`w-full`,columns:ie.value,dataSource:Q,sortDirections:[`descend`,`ascend`],onChange:(e,t,n)=>{V.value=Array.isArray(t?.name)&&t.name.length>0?t.name:[],U.value=Array.isArray(t?.address)&&t.address.length>0?t.address:[];let r=Array.isArray(n)?n[0]:n;W.value={columnKey:r?.order?r?.columnKey??null:null,order:r?.order??null},ae()}}));return e==null?r():h(e,n,r)},te=A.nextSibling;return j.removeChild(A),t({parent:j,before:te},()=>K,()=>({})),[n,n]}),code:It}));return e==null?i():h(e,r,i)},Ye=ye.nextSibling;Ce.removeChild(ye),t({parent:Ce,before:Ye},()=>Je,()=>({}));let Xe=(e,n,r)=>{let i=()=>l(vt,()=>({title:`多列排序（优先级组合）`,summary:`补回多列优先级排序示例，支持 { compare, multiple } 并按优先级组合排序。`,tab:d,preview:()=>_(e=>{let n=ct().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[0],i=n.childNodes[0].childNodes[1],a=n.childNodes[0].childNodes[2],o=n.childNodes[0].childNodes[3],s=n.childNodes[1].childNodes[0],c=s.parentNode,d=n.childNodes[1].childNodes[1].childNodes[1],f=d.parentNode,p=n.childNodes[2],m=p.parentNode;r.setAttribute(`class`,`btn btn-ghost btn-xs`),L(R(e,r,`click`,()=>()=>pe({chinese:`descend`,math:`descend`}))),i.setAttribute(`class`,`btn btn-ghost btn-xs`),L(R(e,i,`click`,()=>()=>pe({chinese:`descend`,math:`descend`,english:`descend`}))),a.setAttribute(`class`,`btn btn-ghost btn-xs`),L(R(e,a,`click`,()=>()=>pe({chinese:`ascend`,english:`descend`}))),o.setAttribute(`class`,`btn btn-ghost btn-xs`),L(R(e,o,`click`,()=>()=>pe({})));let v=[];I(()=>{v=D(c,s,v,wt||[],(e,t)=>e.key,(e,t)=>{let n=g(e);return P((e,t,r)=>{let i=()=>_(e=>{let t=O(`button`,e),r;k(()=>{let e=`btn btn-xs ${G.value[n.get().key]?`btn-primary`:`btn-ghost`}`,i=e===!1||e==null?``:String(e);Object.is(r,i)||(r=i,t.setAttribute(`class`,i))}),L(R(e,t,`click`,()=>()=>me(n.get().key)));let i=E(``);return w(t,i),u(i,()=>he(n.get())),[t,t]});return e==null?i():h(e,r,i)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),L(()=>C(v)),t({parent:f,before:d},()=>(e,t,n)=>H(ge())(e,t,n),()=>({}));let y=(e,t,n)=>{let r=()=>l(X,()=>({className:`w-full`,columns:se.value,dataSource:Ct,sortDirections:[`descend`,`ascend`],onChange:(e,t,n)=>{let r=Array.isArray(n)?n:n?.order?[n]:[];G.value=r.reduce((e,t)=>{let n=t?.columnKey,r=t?.order;return Tt(n)&&Et(r)&&(e[n]=r),e},{}),ce()}}));return e==null?r():h(e,n,r)},b=p.nextSibling;return m.removeChild(p),t({parent:m,before:b},()=>y,()=>({})),[n,n]}),code:Lt}));return e==null?i():h(e,r,i)},Ze=we.nextSibling;Te.removeChild(we),t({parent:Te,before:Ze},()=>Xe,()=>({}));let Qe=(e,n,i)=>{let a=()=>l(vt,()=>({title:`动态列显隐`,summary:`把基础的隐藏列示例 补回来，并用外部开关控制列可见性。`,tab:f,preview:()=>_(e=>{let n=lt().content.cloneNode(!0).firstChild,i=n.childNodes[0].childNodes[0],a=i.parentNode,o=n.childNodes[1],s=o.parentNode,c=[];I(()=>{c=D(a,i,c,Ot||[],(e,t)=>e.key,(e,t)=>{let n=g(e);return P((e,t,i)=>{let a=()=>_(()=>{let e=j(),t=O(`button`,e);w(e,t),k(()=>{r(t,`btn btn-xs ${K.value.includes(n.get().key)?`btn-primary`:`btn-ghost`}`)});let i=e=>{let t=()=>_e(n.get().key);typeof t==`function`&&t(e)};t.addEventListener(`click`,i),L(()=>t.removeEventListener(`click`,i));let a=b(t);w(t,a),k(()=>{z(a,K.value.includes(n.get().key)?`隐藏 ${n.get().label}`:`显示 ${n.get().label}`)});let o=E(``),s=E(``);return e.insertBefore(o,e.firstChild),e.appendChild(s),[e.firstChild,e.lastChild]});return e==null?a():h(e,i,a)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),L(()=>C(c));let u=(e,t,n)=>{let r=()=>l(X,()=>({className:`w-full`,columns:te.value,dataSource:Dt}));return e==null?r():h(e,n,r)},d=o.nextSibling;return s.removeChild(o),t({parent:s,before:d},()=>u,()=>({})),[n,n]}),code:Rt}));return e==null?a():h(e,i,a)},$e=Ee.nextSibling;J.removeChild(Ee),t({parent:J,before:$e},()=>Qe,()=>({}));let et=(e,n,r)=>{let i=()=>l(vt,()=>({title:`选择模式`,summary:`展示多选、单选、禁用项、部分禁用几类示例，并增加选择列表头与回调展示。`,tab:p,preview:()=>_(e=>{let n=ut().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[0].childNodes[1],i=r.parentNode,a=n.childNodes[0].childNodes[1],o=a.parentNode,s=n.childNodes[1].childNodes[0].childNodes[1],c=s.parentNode,u=n.childNodes[1].childNodes[1],d=u.parentNode;t({parent:i,before:r},()=>H(T.value.join(`, `)||`空`),()=>({}));let f=(e,t,n)=>{let r=()=>l(X,()=>({className:`w-full`,columns:[{title:`姓名`,dataIndex:`name`},{title:`团队`,dataIndex:`team`},{title:`状态`,dataIndex:`status`}],dataSource:bt,rowSelection:{columnTitle:`成员`,selectedRowKeys:T.value,getCheckboxProps:e=>({disabled:e.status===`leave`}),onChange:e=>T.value=[...e]}}));return e==null?r():h(e,n,r)},p=a.nextSibling;o.removeChild(a),t({parent:o,before:p},()=>f,()=>({})),t({parent:c,before:s},()=>H(A.value[0]??`空`),()=>({}));let m=(e,t,n)=>{let r=()=>l(X,()=>({className:`w-full`,columns:[{title:`姓名`,dataIndex:`name`},{title:`城市`,dataIndex:`city`}],dataSource:bt.slice(0,4),rowSelection:{type:`radio`,hideSelectAll:!0,selectedRowKeys:A.value,onChange:e=>A.value=[...e]}}));return e==null?r():h(e,n,r)},g=u.nextSibling;return d.removeChild(u),t({parent:d,before:g},()=>m,()=>({})),[n,n]}),code:zt}));return e==null?i():h(e,r,i)},tt=Y.nextSibling;De.removeChild(Y),t({parent:De,before:tt},()=>et,()=>({}));let ht=(e,n,r)=>{let i=()=>l(vt,()=>({title:`展开、摘要与空态`,summary:`把展开行、按行点击展开、summary 和 emptyText 放在同一个业务场景里。`,tab:v,preview:()=>_(e=>{let n=dt().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[0],i=r.parentNode,a=n.childNodes[1].childNodes[0],o=a.parentNode,s=(e,n,r)=>{let i=()=>l(X,()=>({className:`w-full`,columns:[{title:`姓名`,dataIndex:`name`},{title:`绩效`,dataIndex:`score`,align:`right`}],dataSource:bt,expandable:{expandedRowKeys:re.value,expandRowByClick:!0,onExpandedRowsChange:e=>re.value=[...e],expandedRowRender:e=>_(n=>{let r=nt().content.cloneNode(!0).firstChild,i=r.childNodes[0].childNodes[1],a=i.parentNode,o=r.childNodes[1].childNodes[1],s=o.parentNode;return t({parent:a,before:i},()=>H(e.team),()=>({})),t({parent:s,before:o},()=>H(e.address),()=>({})),[r,r]})},summary:e=>_(n=>{let r=rt().content.cloneNode(!0).firstChild,i=r.childNodes[0].childNodes[1],a=i.parentNode,o=r.childNodes[1].childNodes[1],s=o.parentNode;return t({parent:a,before:i},()=>H(e.length),()=>({})),t({parent:s,before:o},()=>H(Math.round(e.reduce((e,t)=>e+t.score,0)/e.length)),()=>({})),[r,r]})}));return e==null?i():h(e,r,i)},c=r.nextSibling;i.removeChild(r),t({parent:i,before:c},()=>s,()=>({}));let u=(e,t,n)=>{let r=()=>l(X,()=>({className:`w-full`,columns:[{title:`姓名`,dataIndex:`name`},{title:`团队`,dataIndex:`team`}],dataSource:[],emptyText:(e,t,n)=>{let r=()=>m(e=>{let t=O(`span`,e);return t.setAttribute(`class`,`text-sm opacity-60`),w(t,E(`暂无成员，请先创建数据。`)),[t,t]});return e==null?r():h(e,n,r)}}));return e==null?r():h(e,n,r)},d=a.nextSibling;return o.removeChild(a),t({parent:o,before:d},()=>u,()=>({})),[n,n]}),code:Bt}));return e==null?i():h(e,r,i)},gt=Oe.nextSibling;ke.removeChild(Oe),t({parent:ke,before:gt},()=>ht,()=>({}));let _t=(e,n,r)=>{let i=()=>l(vt,()=>({title:`滚动、标题、尾部与省略`,summary:`展示滚动、title/footer、ellipsis 和滚动容器类示例，并串成一个长表格布局场景。`,tab:y,preview:()=>_(e=>{let n=ft().content.cloneNode(!0).firstChild,r=n.childNodes[0],i=r.parentNode,a=(e,n,r)=>{let i=()=>l(X,()=>({className:`w-full`,columns:Se,dataSource:bt.concat(bt).concat(bt),scroll:{x:900,y:220,scrollToFirstRowOnChange:!0},title:e=>_(n=>{let r=it().content.cloneNode(!0).firstChild,i=r.childNodes[1],a=i.parentNode;return t({parent:a,before:i},()=>H(e.length),()=>({})),[r,r]}),footer:e=>m(e=>{let t=O(`div`,e);return t.setAttribute(`class`,`text-sm opacity-70`),w(t,E(`展示了固定列、纵向滚动和 ellipsis。`)),[t,t]})}));return e==null?i():h(e,r,i)},o=r.nextSibling;return i.removeChild(r),t({parent:i,before:o},()=>a,()=>({})),[n,n]}),code:Vt}));return e==null?i():h(e,r,i)},kt=Ae.nextSibling;je.removeChild(Ae),t({parent:je,before:kt},()=>_t,()=>({}));let Wt=(e,n,r)=>{let i=()=>l(vt,()=>({title:`分组表头、隐藏列与单元格属性`,summary:`分组表头示例同时覆盖隐藏列、单元格 className/style 和操作列。`,tab:x,preview:()=>_(e=>{let n=pt().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[0],i=n.childNodes[0].childNodes[0].childNodes[0],a=i.parentNode,o=n.childNodes[0].childNodes[1].childNodes[1],s=o.parentNode,c=n.childNodes[1],d=c.parentNode;r.setAttribute(`class`,`btn btn-ghost btn-xs`);let f=e=>{let t=xe;typeof t==`function`&&t(e)};r.addEventListener(`click`,f),L(()=>r.removeEventListener(`click`,f));let p=E(``);a.insertBefore(p,i),a.removeChild(i),u(p,()=>ne.value?`显示月薪列`:`隐藏月薪列`);let m=E(``);s.insertBefore(m,o),s.removeChild(o),u(m,()=>B.value);let g=(e,t,n)=>{let r=()=>l(X,()=>({className:`w-full`,columns:be.value,dataSource:bt,rowHoverable:!0,onRow:e=>({onClick:()=>B.value=`点击 ${e.name}`})}));return e==null?r():h(e,n,r)},_=c.nextSibling;return d.removeChild(c),t({parent:d,before:_},()=>g,()=>({})),[n,n]}),code:Ht}));return e==null?i():h(e,r,i)},Gt=Me.nextSibling;Ne.removeChild(Me),t({parent:Ne,before:Gt},()=>Wt,()=>({}));let Kt=(e,n,r)=>{let i=()=>l(vt,()=>({title:`静态样式、Pinned Rows 与 Pinned Cols`,summary:`基础静态样式示例 仍然提供，适合不需要 columns/dataSource 时直接写结构。`,tab:S,preview:()=>_(e=>{let n=mt().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[0],i=r.parentNode,o=n.childNodes[1].childNodes[0],s=o.parentNode,c=(e,n,r)=>{let i=()=>l(X,()=>({zebra:!0,pinRows:!0,className:`w-full min-w-[640px]`,children:(e,n,r)=>{let i=()=>_(e=>{let n=j();a(n,X.Head,()=>({children:(e,t,n)=>{let r=()=>_(e=>{let t=j();a(t,X.TR,()=>({children:(e,t,n)=>{let r=()=>_(e=>{let t=j();a(t,X.TH,()=>({children:(e,t,n)=>{let r=()=>m(e=>{let t=j();w(t,E(`商品`));let n=E(``),r=E(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():h(e,n,r)}})),a(t,X.TH,()=>({children:(e,t,n)=>{let r=()=>m(e=>{let t=j();w(t,E(`负责人`));let n=E(``),r=E(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():h(e,n,r)}})),a(t,X.TH,()=>({children:(e,t,n)=>{let r=()=>m(e=>{let t=j();w(t,E(`渠道`));let n=E(``),r=E(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():h(e,n,r)}})),a(t,X.TH,()=>({className:`text-right`,children:(e,t,n)=>{let r=()=>m(e=>{let t=j();w(t,E(`库存`));let n=E(``),r=E(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():h(e,n,r)}})),a(t,X.TH,()=>({className:`text-right`,children:(e,t,n)=>{let r=()=>m(e=>{let t=j();w(t,E(`价格`));let n=E(``),r=E(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():h(e,n,r)}}));let n=E(``),r=E(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():h(e,n,r)}}));let n=E(``),r=E(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():h(e,n,r)}})),a(n,X.Body,()=>({children:(e,n,r)=>{let i=()=>_(e=>{let n=j(),r=F(`rue:list:end`);w(n,r);let i=[];I(()=>{let e=xt||[];i=D(r.parentNode,r,i,e,(e,t)=>e.id,(e,n)=>{let r=g(e);return P((e,n,i)=>{let o=()=>l(X.TR,()=>({children:(e,n,i)=>{let o=()=>_(e=>{let n=j();a(n,X.TD,()=>({children:(e,n,i)=>{let a=()=>_(e=>{let n=j(),i=F(`rue:compiled-slot`);w(n,i),t({parent:n,before:i},()=>H(r.get().item),()=>({}));let a=E(``),o=E(``);return n.insertBefore(a,n.firstChild),n.appendChild(o),[n.firstChild,n.lastChild]});return e==null?a():h(e,i,a)}})),a(n,X.TD,()=>({children:(e,n,i)=>{let a=()=>_(e=>{let n=j(),i=F(`rue:compiled-slot`);w(n,i),t({parent:n,before:i},()=>H(r.get().owner),()=>({}));let a=E(``),o=E(``);return n.insertBefore(a,n.firstChild),n.appendChild(o),[n.firstChild,n.lastChild]});return e==null?a():h(e,i,a)}})),a(n,X.TD,()=>({children:(e,n,i)=>{let a=()=>_(e=>{let n=j(),i=F(`rue:compiled-slot`);w(n,i),t({parent:n,before:i},()=>H(r.get().channel),()=>({}));let a=E(``),o=E(``);return n.insertBefore(a,n.firstChild),n.appendChild(o),[n.firstChild,n.lastChild]});return e==null?a():h(e,i,a)}})),a(n,X.TD,()=>({className:`text-right`,children:(e,n,i)=>{let a=()=>_(e=>{let n=j(),i=F(`rue:compiled-slot`);w(n,i),t({parent:n,before:i},()=>H(r.get().stock),()=>({}));let a=E(``),o=E(``);return n.insertBefore(a,n.firstChild),n.appendChild(o),[n.firstChild,n.lastChild]});return e==null?a():h(e,i,a)}})),a(n,X.TD,()=>({className:`text-right`,children:(e,n,i)=>{let a=()=>_(e=>{let n=j(),i=F(`rue:compiled-slot`);w(n,i),t({parent:n,before:i},()=>H(r.get().price),()=>({}));let a=E(``),o=E(``);return n.insertBefore(a,n.firstChild),n.appendChild(o),[n.firstChild,n.lastChild]});return e==null?a():h(e,i,a)}}));let i=E(``),o=E(``);return n.insertBefore(i,n.firstChild),n.appendChild(o),[n.firstChild,n.lastChild]});return e==null?o():h(e,i,o)}}));return e==null?o():h(e,i,o)},(t,i)=>{e=t,n=i,r.set(t)},void 0)},!1,!1)}),L(()=>C(i));let o=E(``),s=E(``);return n.insertBefore(o,n.firstChild),n.appendChild(s),[n.firstChild,n.lastChild]});return e==null?i():h(e,r,i)}}));let r=E(``),i=E(``);return n.insertBefore(r,n.firstChild),n.appendChild(i),[n.firstChild,n.lastChild]});return e==null?i():h(e,r,i)}}));return e==null?i():h(e,r,i)},u=r.nextSibling;i.removeChild(r),t({parent:i,before:u},()=>c,()=>({}));let d=(e,n,r)=>{let i=()=>l(X,()=>({pinCols:!0,className:`w-[980px]`,children:(e,n,r)=>{let i=()=>_(e=>{let n=j();a(n,X.Head,()=>({children:(e,t,n)=>{let r=()=>_(e=>{let t=j();a(t,X.TR,()=>({children:(e,t,n)=>{let r=()=>_(e=>{let t=j();a(t,X.TH,()=>({className:`bg-base-100`,children:(e,t,n)=>{let r=()=>m(e=>{let t=j();w(t,E(`姓名`));let n=E(``),r=E(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():h(e,n,r)}})),a(t,X.TH,()=>({children:(e,t,n)=>{let r=()=>m(e=>{let t=j();w(t,E(`岗位`));let n=E(``),r=E(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():h(e,n,r)}})),a(t,X.TH,()=>({children:(e,t,n)=>{let r=()=>m(e=>{let t=j();w(t,E(`团队`));let n=E(``),r=E(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():h(e,n,r)}})),a(t,X.TH,()=>({children:(e,t,n)=>{let r=()=>m(e=>{let t=j();w(t,E(`城市`));let n=E(``),r=E(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():h(e,n,r)}})),a(t,X.TH,()=>({className:`text-right`,children:(e,t,n)=>{let r=()=>m(e=>{let t=j();w(t,E(`绩效`));let n=E(``),r=E(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():h(e,n,r)}})),a(t,X.TH,()=>({className:`text-right`,children:(e,t,n)=>{let r=()=>m(e=>{let t=j();w(t,E(`访问`));let n=E(``),r=E(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():h(e,n,r)}})),a(t,X.TH,()=>({className:`text-right`,children:(e,t,n)=>{let r=()=>m(e=>{let t=j();w(t,E(`月薪`));let n=E(``),r=E(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():h(e,n,r)}})),a(t,X.TH,()=>({children:(e,t,n)=>{let r=()=>m(e=>{let t=j();w(t,E(`地址`));let n=E(``),r=E(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():h(e,n,r)}}));let n=E(``),r=E(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():h(e,n,r)}}));let n=E(``),r=E(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():h(e,n,r)}})),a(n,X.Body,()=>({children:(e,n,r)=>{let i=()=>_(e=>{let n=j(),r=F(`rue:list:end`);w(n,r);let i=[];I(()=>{let e=St||[];i=D(r.parentNode,r,i,e,(e,t)=>e.key,(e,n)=>{let r=g(e);return P((e,n,i)=>{let o=()=>l(X.TR,()=>({children:(e,n,i)=>{let o=()=>_(e=>{let n=j();a(n,X.TH,()=>({className:`bg-base-100`,children:(e,n,i)=>{let a=()=>_(e=>{let n=j(),i=F(`rue:compiled-slot`);w(n,i),t({parent:n,before:i},()=>H(r.get().name),()=>({}));let a=E(``),o=E(``);return n.insertBefore(a,n.firstChild),n.appendChild(o),[n.firstChild,n.lastChild]});return e==null?a():h(e,i,a)}})),a(n,X.TD,()=>({children:(e,n,i)=>{let a=()=>_(e=>{let n=j(),i=F(`rue:compiled-slot`);w(n,i),t({parent:n,before:i},()=>H(r.get().role),()=>({}));let a=E(``),o=E(``);return n.insertBefore(a,n.firstChild),n.appendChild(o),[n.firstChild,n.lastChild]});return e==null?a():h(e,i,a)}})),a(n,X.TD,()=>({children:(e,n,i)=>{let a=()=>_(e=>{let n=j(),i=F(`rue:compiled-slot`);w(n,i),t({parent:n,before:i},()=>H(r.get().team),()=>({}));let a=E(``),o=E(``);return n.insertBefore(a,n.firstChild),n.appendChild(o),[n.firstChild,n.lastChild]});return e==null?a():h(e,i,a)}})),a(n,X.TD,()=>({children:(e,n,i)=>{let a=()=>_(e=>{let n=j(),i=F(`rue:compiled-slot`);w(n,i),t({parent:n,before:i},()=>H(r.get().city),()=>({}));let a=E(``),o=E(``);return n.insertBefore(a,n.firstChild),n.appendChild(o),[n.firstChild,n.lastChild]});return e==null?a():h(e,i,a)}})),a(n,X.TD,()=>({className:`text-right`,children:(e,n,i)=>{let a=()=>_(e=>{let n=j(),i=F(`rue:compiled-slot`);w(n,i),t({parent:n,before:i},()=>H(r.get().score),()=>({}));let a=E(``),o=E(``);return n.insertBefore(a,n.firstChild),n.appendChild(o),[n.firstChild,n.lastChild]});return e==null?a():h(e,i,a)}})),a(n,X.TD,()=>({className:`text-right`,children:(e,n,i)=>{let a=()=>_(e=>{let n=j(),i=F(`rue:compiled-slot`);w(n,i),t({parent:n,before:i},()=>H(r.get().visits),()=>({}));let a=E(``),o=E(``);return n.insertBefore(a,n.firstChild),n.appendChild(o),[n.firstChild,n.lastChild]});return e==null?a():h(e,i,a)}})),a(n,X.TD,()=>({className:`text-right`,children:(e,n,i)=>{let a=()=>_(e=>{let n=j(),i=F(`rue:compiled-slot`);w(n,i),t({parent:n,before:i},()=>H(r.get().salary),()=>({}));let a=E(``),o=E(``);return n.insertBefore(a,n.firstChild),n.appendChild(o),[n.firstChild,n.lastChild]});return e==null?a():h(e,i,a)}})),a(n,X.TD,()=>({children:(e,n,i)=>{let a=()=>_(e=>{let n=j(),i=F(`rue:compiled-slot`);w(n,i),t({parent:n,before:i},()=>H(r.get().address),()=>({}));let a=E(``),o=E(``);return n.insertBefore(a,n.firstChild),n.appendChild(o),[n.firstChild,n.lastChild]});return e==null?a():h(e,i,a)}}));let i=E(``),o=E(``);return n.insertBefore(i,n.firstChild),n.appendChild(o),[n.firstChild,n.lastChild]});return e==null?o():h(e,i,o)}}));return e==null?o():h(e,i,o)},(t,i)=>{e=t,n=i,r.set(t)},void 0)},!1,!1)}),L(()=>C(i));let o=E(``),s=E(``);return n.insertBefore(o,n.firstChild),n.appendChild(s),[n.firstChild,n.lastChild]});return e==null?i():h(e,r,i)}}));let r=E(``),i=E(``);return n.insertBefore(r,n.firstChild),n.appendChild(i),[n.firstChild,n.lastChild]});return e==null?i():h(e,r,i)}}));return e==null?i():h(e,r,i)},f=o.nextSibling;return s.removeChild(o),t({parent:s,before:f},()=>d,()=>({})),[n,n]}),code:Ut}));return e==null?i():h(e,r,i)},qt=Pe.nextSibling;Fe.removeChild(Pe),t({parent:Fe,before:qt},()=>Kt,()=>({}));let Jt=(e,t,n)=>{let r=()=>l(yt,()=>({rows:At}));return e==null?r():h(e,n,r)},Yt=Ie.nextSibling;Le.removeChild(Ie),t({parent:Le,before:Yt},()=>Jt,()=>({}));let Xt=(e,t,n)=>{let r=()=>l(yt,()=>({rows:jt}));return e==null?r():h(e,n,r)},Zt=Re.nextSibling;ze.removeChild(Re),t({parent:ze,before:Zt},()=>Xt,()=>({}));let Qt=(e,t,n)=>{let r=()=>l(yt,()=>({rows:Mt}));return e==null?r():h(e,n,r)},$t=Be.nextSibling;Ve.removeChild(Be),t({parent:Ve,before:$t},()=>Qt,()=>({}));let en=(e,t,n)=>{let r=()=>l(yt,()=>({rows:Nt}));return e==null?r():h(e,n,r)},tn=He.nextSibling;Ue.removeChild(He),t({parent:Ue,before:tn},()=>en,()=>({}));let nn=E(``),rn=E(``);return n.insertBefore(nn,n.firstChild),n.appendChild(rn),[n.firstChild,n.lastChild]});return e==null?M():h(e,i,M)}})))};export{Wt as default};