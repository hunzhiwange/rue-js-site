import{$ as e,B as t,Ct as n,Dt as r,G as i,H as a,K as o,U as s,W as c,Z as l,at as u,ht as d,l as f,s as p,t as m,wt as h,yt as g}from"./vapor-runtime-C1rlwc61.js";import{a as _,n as v}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as y}from"./Code-BCLFq1E3.js";import{n as b,t as x}from"./src-BLzF0BqW.js";import{n as S}from"./SidebarPlaygroundDesign-DmoUIYgb.js";import{t as C}from"./tabs-BOxm6iIN.js";var w=(e,t)=>t?`${e} ${t}`:e,T=(...e)=>e.filter(Boolean).join(` `),E=(e,t,n)=>Math.min(Math.max(e,t),n),D=(e,t)=>{let n=Number(e);return!Number.isFinite(n)||n<=0?t:Math.floor(n)},O=e=>{switch(e){case`small`:return`sm`;case`middle`:return`md`;case`large`:return`lg`;default:return e}},ee=e=>{switch(e){case`center`:return`justify-center`;case`end`:return`justify-end`;default:return`justify-start`}},k=e=>{let t=`join`;return e&&(t+=` join-${e}`),t},A=(e,t,n,r)=>{let i=O(e),a=`join-item btn`;return i&&(a+=` btn-${i}`),t&&(a+=` btn-active`),n&&(a+=` btn-disabled`),r&&(a+=` ${r}`),a},j=(e,t)=>{let n=O(e),r=`select select-bordered`;return n&&(r+=` select-${n}`),t&&(r+=` ${t}`),r},M=(e,t)=>{let n=O(e),r=`input input-bordered`;return n&&(r+=` input-${n}`),t&&(r+=` ${t}`),r},te=(e,t)=>T(M(e),`appearance-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none`,t),N=(e,t)=>{let n=String(Math.max(1,e)).length;return t===`simple`?n<=2?`w-10`:n===3?`w-12`:`w-14`:n<=2?`w-14`:n===3?`w-16`:`w-20`},P=e=>{let t=e.reduce((e,t)=>Math.max(e,String(t).length),2);return t<=2?`w-16`:t===3?`w-18`:`w-20`},ne=e=>e.current!==void 0||e.defaultCurrent!==void 0||e.total!==void 0||e.pageSize!==void 0||e.defaultPageSize!==void 0||e.simple!==void 0||e.showSizeChanger!==void 0||e.showQuickJumper!==void 0||e.showLessItems!==void 0||e.hideOnSinglePage!==void 0||e.showTotal!==void 0||e.itemRender!==void 0||e.align!==void 0||e.size!==void 0||e.disabled!==void 0||e.onChange!==void 0||e.onShowSizeChange!==void 0||e.pageSizeOptions!==void 0||e.locale!==void 0,re=(e,t,n)=>n<=0?[0,0]:[(e-1)*t+1,Math.min(n,e*t)],ie=(e,t,n)=>{if(t<=0)return[];let r=[],i=n?1:2,a=n?3:5;if(t<=5+i*2){for(let e=1;e<=t;e+=1)r.push({type:`page`,page:e,label:String(e)});return r}let o=Math.max(1,e-i),s=Math.min(t,e+i);if(r.push({type:`page`,page:1,label:`1`}),o>2)r.push({type:`jump-prev`,page:Math.max(1,e-a),label:`•••`});else for(let e=2;e<o;e+=1)r.push({type:`page`,page:e,label:String(e)});for(let e=Math.max(2,o);e<=Math.min(t-1,s);e+=1)r.push({type:`page`,page:e,label:String(e)});if(s<t-1)r.push({type:`jump-next`,page:Math.min(t,e+a),label:`•••`});else for(let e=s+1;e<t;e+=1)r.push({type:`page`,page:e,label:String(e)});return r.push({type:`page`,page:t,label:String(t)}),r},F=Object.assign(({direction:e,align:t,size:r,className:i,children:a,current:o,defaultCurrent:s,total:c,pageSize:l,defaultPageSize:u,disabled:f,simple:p,showSizeChanger:m,pageSizeOptions:h,showQuickJumper:g,showLessItems:_,hideOnSinglePage:v,showTitle:y=!0,showTotal:S,itemRender:C,onChange:A,onShowSizeChange:I,locale:L,...ae})=>{if(!ne({direction:e,align:t,size:r,className:i,children:a,current:o,defaultCurrent:s,total:c,pageSize:l,defaultPageSize:u,disabled:f,simple:p,showSizeChanger:m,pageSizeOptions:h,showQuickJumper:g,showLessItems:_,hideOnSinglePage:v,showTotal:S,itemRender:C,onChange:A,onShowSizeChange:I,locale:L}))return x(`div`,{...ae,className:w(k(e),i),children:a});let R=d(D(s??o??1,1)),z=d(D(u??l??10,10)),B=D(l??z.value,10),V=Math.max(0,Number(c)||0),H=Math.max(1,Math.ceil(V/B)),U=E(D(o??R.value,1),1,H),oe=re(U,B,V),W=h&&h.length>0?h.map(e=>D(e,B)):[10,20,50,100],G=typeof p==`object`?p:p?{}:void 0,K=typeof g==`object`&&g?g:g?{}:void 0,q=ie(U,H,_),J=n();if(!J.current){let e=String(U);J.current={page:U,simple:e,quick:e}}else if(J.current.page!==U){let e=String(U);J.current.page=U,J.current.simple=e,J.current.quick=e}let Y=J.current,X={prev:L?.prev??`‹`,next:L?.next??`›`,jumpPrev:L?.jumpPrev??`•••`,jumpNext:L?.jumpNext??`•••`,pageSuffix:L?.pageSuffix??`/ page`,itemsPerPage:L?.itemsPerPage??`items / page`,pageTitle:L?.pageTitle??(e=>`Page ${e}`),jumpTo:L?.jumpTo??`Go to`,previousPage:L?.previousPage??`Previous Page`,nextPage:L?.nextPage??`Next Page`,jumpPrevTitle:L?.jumpPrevTitle??`Jump Previous Pages`,jumpNextTitle:L?.jumpNextTitle??`Jump Next Pages`};if(v&&H<=1)return null;let Z=(e,t=B)=>{let n=Math.max(1,Math.ceil(V/t)),r=E(D(e,1),1,n);o===void 0&&(R.value=r),l===void 0&&t!==B&&(z.value=t),A&&A(r,t)},se=e=>{let t=D(e,B),n=E(U,1,Math.max(1,Math.ceil(V/t)));l===void 0&&(z.value=t),o===void 0&&(R.value=n),I&&I(n,t),A&&A(n,t)},Q=(e,t,n,i)=>{let a=!!f||!!i?.disabled,o=n,s=C?C(e,t,o):o;return x(F.Item,{size:r,active:i?.active,disabled:a,"aria-label":t===`page`?X.pageTitle(e):void 0,title:y?i?.title??(t===`page`?X.pageTitle(e):void 0):void 0,onClick:()=>{a||i?.active||Z(e)},children:s})},ce=G?b(`div`,{className:k(),children:[Q(Math.max(1,U-1),`prev`,X.prev,{disabled:U<=1,title:X.previousPage}),b(`div`,{className:M(r,`join-item inline-flex shrink-0 items-center gap-1 px-2 text-sm`),children:[G.readOnly?x(`span`,{className:`tabular-nums`,children:U}):x(`input`,{type:`text`,inputMode:`numeric`,pattern:`[0-9]*`,min:`1`,max:String(H),value:Y.simple,disabled:f,className:T(`border-0 bg-transparent p-0 text-right outline-none appearance-none [appearance:textfield] tabular-nums [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none`,N(H,`simple`)),onInput:e=>{Y.simple=e.currentTarget.value},onKeyDown:e=>{if(e.key!==`Enter`)return;let t=e.currentTarget;Z(Number(t.value))},onBlur:e=>{if(f)return;let t=e.currentTarget;if(t.value===``){t.value=String(U),Y.simple=t.value;return}Z(Number(t.value))}},`simple-${U}-${H}`),x(`span`,{className:`inline-flex items-center opacity-60`,children:X.pageSuffix===`/ page`?`/ ${H}`:`${X.pageSuffix} ${H}`})]}),Q(Math.min(H,U+1),`next`,X.next,{disabled:U>=H,title:X.nextPage})]}):b(`div`,{className:k(e),children:[Q(Math.max(1,U-1),`prev`,X.prev,{disabled:U<=1,title:X.previousPage}),q.map(e=>{let t=e.type===`jump-prev`?X.jumpPrev:e.type===`jump-next`?X.jumpNext:e.label;return Q(e.page,e.type,t,{active:e.type===`page`&&e.page===U,disabled:e.type===`page`?!1:!!f,title:e.type===`page`?X.pageTitle(e.page):e.type===`jump-prev`?X.jumpPrevTitle:X.jumpNextTitle})}),Q(Math.min(H,U+1),`next`,X.next,{disabled:U>=H,title:X.nextPage})]});return b(`div`,{...ae,className:T(`flex flex-wrap items-center gap-3`,ee(t),i),children:[S?x(`div`,{className:`text-sm opacity-70`,"aria-live":`polite`,children:S(V,oe)}):null,ce,m?b(`label`,{className:`flex items-center gap-2 text-sm opacity-80`,children:[x(`select`,{value:String(B),disabled:f,className:j(r,`${P(W)} text-center tabular-nums`),onChange:e=>se(Number(e.currentTarget.value)),children:W.map(e=>x(`option`,{value:String(e),children:e},e))}),x(`span`,{children:X.itemsPerPage})]}):null,K?b(`div`,{className:`flex items-center gap-2 text-sm`,children:[x(`span`,{className:`opacity-70`,children:X.jumpTo}),x(`input`,{type:`text`,inputMode:`numeric`,pattern:`[0-9]*`,min:`1`,max:String(H),value:Y.quick,disabled:f,className:te(r,`${N(H,`quick`)} text-center tabular-nums`),onInput:e=>{Y.quick=e.currentTarget.value},onKeyDown:e=>{if(e.key!==`Enter`)return;let t=e.currentTarget;Z(Number(t.value))}},`quick-${U}-${H}`),K.goButton==null?null:x(`button`,{type:`button`,disabled:f,className:T(`btn`,O(r)?`btn-${O(r)}`:void 0),onClick:e=>{let t=e.currentTarget.parentElement?.querySelector(`input`);t&&Z(Number(t.value))},children:K.goButton})]}):null]})},{Item:({tag:e=`button`,active:t,disabled:n,size:r,className:i,children:a,...o})=>{let s=e,c={...o,className:A(r,t,n,i)};return t&&(c[`aria-current`]=o[`aria-current`]??`page`),n&&(c[`aria-disabled`]=o[`aria-disabled`]??!0,e===`button`||e===`input`?c.disabled=o.disabled??!0:(c.role=o.role??`button`,c.tabIndex=o.tabIndex??-1)),x(s,{...c,children:a})}}),I=o=>{let{tabRef:l,tab:u}=_(`useSetup:0:0`,()=>h(()=>{let e=_(`useRef:1:0`,()=>n());return e.current||=_(`ref:1:1`,()=>d(`preview`)),{tabRef:e,tab:e.current}}));return f(n=>{let l=c(`div`,n);e(l,`component-preview not-prose text-base-content my-6 lg:my-12`);let d=c(`div`,l);t(l,d),e(d,`flex flex-wrap items-start justify-between gap-3`);let h=c(`div`,d);t(d,h);let _=c(`h2`,h);t(h,_),e(_,`component-preview-title mt-2 mb-1 text-lg font-semibold`),t(_,i(`# `));let v=a(`rue:slot:anchor`);t(_,v),r(()=>{let e=o.title;g(()=>p(e,_,v))});let b=a(`rue:slot:anchor`);t(h,b),r(()=>{let n=o.summary?f(()=>{let n=s(),i=c(`p`,n);t(n,i),e(i,`m-0 text-sm opacity-70`);let l=a(`rue:slot:anchor`);return t(i,l),r(()=>{let e=o.summary;g(()=>p(e,i,l))}),n}):``;g(()=>p(n,h,b))});let x=a(`rue:component:anchor`);t(l,x),r(()=>{let e=m(C,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:u.value,onChange:e=>u.value=e,className:`mb-3 mt-4`});g(()=>p(e,l,x))});let S=a(`rue:slot:anchor`);return t(l,S),r(()=>{let e=u.value===`preview`?o.preview():f(()=>{let e=s(),n=a(`rue:component:anchor`);return t(e,n),r(()=>{let t=m(y,{className:`mt-2`,lang:`tsx`,code:o.code});g(()=>p(t,e,n))}),e});g(()=>p(e,l,S))}),l})},L=n=>f(o=>{let u=c(`div`,o);e(u,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let d=c(`table`,u);t(u,d),e(d,`table table-zebra`);let m=c(`thead`,d);t(d,m);let h=c(`tr`,m);t(m,h);let _=c(`th`,h);t(h,_),t(_,i(`属性`));let y=c(`th`,h);t(h,y),t(y,i(`说明`));let b=c(`th`,h);t(h,b),t(b,i(`类型`));let x=c(`th`,h);t(h,x),t(x,i(`默认值`));let S=c(`tbody`,d);t(d,S);let C=a(`rue:list:start`),w=a(`rue:list:end`);t(S,C),t(S,w);let T=new Map;return r(()=>{T=v({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,n,i,o,u)=>{p(f(()=>{let n=s(),i=c(`tr`,n);t(n,i),r(()=>{l(i,`key`,String(e.prop))});let o=c(`td`,i);t(i,o);let u=c(`code`,o);t(o,u);let d=a(`rue:slot:anchor`);t(u,d),r(()=>{let t=e.prop;g(()=>p(t,u,d))});let f=c(`td`,i);t(i,f);let m=a(`rue:slot:anchor`);t(f,m),r(()=>{let t=e.description;g(()=>p(t,f,m))});let h=c(`td`,i);t(i,h);let _=c(`code`,h);t(h,_);let v=a(`rue:slot:anchor`);t(_,v),r(()=>{let t=e.type;g(()=>p(t,_,v))});let y=c(`td`,i);t(i,y);let b=c(`code`,y);t(y,b);let x=a(`rue:slot:anchor`);return t(b,x),r(()=>{let t=e.defaultValue;g(()=>p(t,b,x))}),n}),n,i)}})}),u}),ae=[{prop:`current / defaultCurrent`,description:`受控或非受控的当前页码。`,type:`number`,defaultValue:`1`},{prop:`total`,description:`数据总条数；传入后自动计算页码按钮。`,type:`number`,defaultValue:`0`},{prop:`pageSize / defaultPageSize`,description:`每页条数，配合 total 共同决定总页数。`,type:`number`,defaultValue:`10`},{prop:`simple`,description:`切换为简洁模式；可传 { readOnly: true } 关闭中间输入。`,type:`boolean | { readOnly?: boolean }`,defaultValue:`false`},{prop:`showSizeChanger / pageSizeOptions`,description:`展示每页条数切换，并自定义可选项。`,type:`boolean / Array<number | string>`,defaultValue:`false / [10, 20, 50, 100]`},{prop:`showQuickJumper`,description:`展示快速跳页输入框；可传 { goButton } 自定义确认按钮。`,type:`boolean | { goButton?: any }`,defaultValue:`false`},{prop:`showTotal`,description:`自定义总数与区间文案。`,type:`(total: number, range: [number, number]) => any`,defaultValue:`-`},{prop:`itemRender`,description:`自定义页码、上一页、下一页、跳转项的渲染内容。`,type:`(page: number, type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next', original: any) => any`,defaultValue:`-`},{prop:`align / size / disabled`,description:`控制对齐、尺寸和禁用态。`,type:`'start' | 'center' | 'end' / 'xs' | 'sm' | 'md' | 'lg' | 'xl' / boolean`,defaultValue:`'start' / 'md' / false`},{prop:`showLessItems / hideOnSinglePage`,description:`控制页码折叠密度，以及单页时是否隐藏。`,type:`boolean`,defaultValue:`false`},{prop:`onChange / onShowSizeChange`,description:`页码变化、每页条数变化时的回调。`,type:`(page: number, pageSize: number) => void`,defaultValue:`-`}],R=()=>{let{stateRef:v,drivenPrimaryPage:y,drivenSecondaryPage:C,controlledPage:w,controlledPageSize:T,simplePage:E,simpleReadonlyPage:D,advancedPage:O,advancedPageSize:ee,advancedCompactPage:k,advancedCompactPageSize:A,customPage:j}=_(`useSetup:0:0:dup1`,()=>h(()=>{let e=_(`useRef:1:2`,()=>n());return e.current||={drivenPrimaryPage:_(`ref:1:3`,()=>d(2)),drivenSecondaryPage:_(`ref:1:4`,()=>d(6)),controlledPage:_(`ref:1:5`,()=>d(4)),controlledPageSize:_(`ref:1:6`,()=>d(10)),simplePage:_(`ref:1:7`,()=>d(2)),simpleReadonlyPage:_(`ref:1:8`,()=>d(2)),advancedPage:_(`ref:1:9`,()=>d(3)),advancedPageSize:_(`ref:1:10`,()=>d(20)),advancedCompactPage:_(`ref:1:11`,()=>d(3)),advancedCompactPageSize:_(`ref:1:12`,()=>d(10)),customPage:_(`ref:1:13`,()=>d(6))},{stateRef:e,drivenPrimaryPage:e.current.drivenPrimaryPage,drivenSecondaryPage:e.current.drivenSecondaryPage,controlledPage:e.current.controlledPage,controlledPageSize:e.current.controlledPageSize,simplePage:e.current.simplePage,simpleReadonlyPage:e.current.simpleReadonlyPage,advancedPage:e.current.advancedPage,advancedPageSize:e.current.advancedPageSize,advancedCompactPage:e.current.advancedCompactPage,advancedCompactPageSize:e.current.advancedCompactPageSize,customPage:e.current.customPage}}));return f(n=>{let d=s(),h=a(`rue:component:anchor`);return t(d,h),p(m(S,{children:f(()=>{let n=s(),d=c(`div`,n);t(n,d),e(d,`max-w-none prose prose-sm md:prose-base`);let f=c(`h1`,d);t(d,f),t(f,i(`Pagination 分页`));let h=c(`p`,d);t(d,h),e(h,`text-sm mt-3 mb-3`),t(h,i(`Pagination 现在同时支持两类用法：保留原有的静态组合模式，以及更贴近业务组件习惯的 的数据驱动模式。 视觉仍基于 Rue 当前的 join 与 btn 体系，但补齐了页码计算、受控/非受控、简单模式、页容量切换、快捷跳转和自定义渲染。`));let _=c(`h2`,d);t(d,_),t(_,i(`何时使用`));let v=c(`ul`,d);t(d,v);let S=c(`li`,v);t(v,S),t(S,i(`需要保留 Rue 现有 join + btn 分页视觉，但希望组件自己计算页码与跳转逻辑。`));let M=c(`li`,v);t(v,M),t(M,i(`需要受控/非受控分页、简单模式、页容量切换、快捷跳页等更完整的交互能力。`));let te=c(`li`,v);t(v,te),t(te,i(`需要在静态拼装和数据驱动两种模式间切换，并逐步迁移旧用法。`));let N=c(`h2`,d);t(d,N),e(N,`mt-8`),t(N,i(`静态组合模式`));let P=c(`p`,d);t(d,P),e(P,`text-sm opacity-80`),t(P,i(`适合完全自定义节点结构的场景。以下示例保留原有 compound 用法，只补齐说明与可复制代码。`));let ne=a(`rue:component:anchor`);t(d,ne),r(()=>{let e=m(I,{title:`Basic pagination`,summary:`最基础的静态拼装方式，适合完全由业务侧决定按钮内容和顺序。`,preview:()=>x(`div`,{className:`card bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body`,children:b(F,{className:`w-fit`,"data-testid":`pagination-basic`,children:[x(F.Item,{"aria-label":`Previous page`,children:`«`}),x(F.Item,{children:`1`}),x(F.Item,{children:`2`}),x(F.Item,{children:`3`}),x(F.Item,{"aria-label":`Next page`,children:`»`})]})})}),code:`<Pagination className="w-fit">
  <Pagination.Item aria-label="Previous page">«</Pagination.Item>
  <Pagination.Item>1</Pagination.Item>
  <Pagination.Item>2</Pagination.Item>
  <Pagination.Item>3</Pagination.Item>
  <Pagination.Item aria-label="Next page">»</Pagination.Item>
</Pagination>`});g(()=>p(e,d,ne))});let re=a(`rue:component:anchor`);t(d,re),r(()=>{let e=m(I,{title:`Vertical pagination`,summary:"继续沿用 `direction='vertical'`，适合侧栏步骤、目录或分段导航。",preview:()=>x(`div`,{className:`card bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body`,children:b(F,{direction:`vertical`,className:`w-fit`,"data-testid":`pagination-vertical`,children:[x(F.Item,{children:`Overview`}),x(F.Item,{children:`Updates`}),x(F.Item,{children:`Logs`})]})})}),code:`<Pagination direction="vertical" className="w-fit">
  <Pagination.Item>Overview</Pagination.Item>
  <Pagination.Item>Updates</Pagination.Item>
  <Pagination.Item>Logs</Pagination.Item>
</Pagination>`});g(()=>p(e,d,re))});let ie=a(`rue:component:anchor`);t(d,ie),r(()=>{let e=m(I,{title:`Current and disabled items`,summary:"静态模式下仍可通过 `active`、`disabled` 和 `tag='a'` 控制语义与状态。",preview:()=>x(`div`,{className:`card bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body`,children:b(F,{className:`w-fit`,"data-testid":`pagination-stateful`,children:[x(F.Item,{disabled:!0,children:`Prev`}),x(F.Item,{children:`1`}),x(F.Item,{active:!0,children:`2`}),x(F.Item,{children:`3`}),x(F.Item,{tag:`a`,href:`#next`,children:`Next`})]})})}),code:`<Pagination className="w-fit">
  <Pagination.Item disabled>Prev</Pagination.Item>
  <Pagination.Item>1</Pagination.Item>
  <Pagination.Item active>2</Pagination.Item>
  <Pagination.Item>3</Pagination.Item>
  <Pagination.Item tag="a" href="#next">Next</Pagination.Item>
</Pagination>`});g(()=>p(e,d,ie))});let R=a(`rue:component:anchor`);t(d,R),r(()=>{let e=m(I,{title:`Data driven basic`,summary:"传入 `total` 后由组件自动计算页码；这里改成受控版本，便于在设计页直接切换和观察当前页变化。",preview:()=>x(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body gap-4`,children:[x(F,{current:y.value,total:120,showTotal:(e,t)=>`${t[0]}-${t[1]} / ${e}`,onChange:e=>{y.value=e}}),x(F,{current:C.value,total:500,size:`sm`,align:`center`,onChange:e=>{C.value=e}}),b(`div`,{className:`text-sm opacity-70`,children:[`当前示例页码：默认尺寸第 `,y.value,` 页，小尺寸第`,` `,C.value,` 页`]})]})}),code:`const primaryPage = ref(2)
const secondaryPage = ref(6)

<>
  <Pagination
    current={primaryPage.value}
    total={120}
    showTotal={(total, range) => \`\${range[0]}-\${range[1]} / \${total}\`}
    onChange={page => {
      primaryPage.value = page
    }}
  />

  <Pagination
    current={secondaryPage.value}
    total={500}
    size="sm"
    align="center"
    onChange={page => {
      secondaryPage.value = page
    }}
  />
</>`});g(()=>p(e,d,R))});let z=a(`rue:component:anchor`);t(d,z),r(()=>{let e=m(I,{title:`Controlled pagination`,summary:"通过 `current` 与 `pageSize` 接管状态，适合和表格、请求参数或 URL 查询同步。",preview:()=>x(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body gap-4`,children:[x(F,{current:w.value,pageSize:T.value,total:185,showSizeChanger:!0,showTotal:(e,t)=>`${t[0]}-${t[1]} of ${e} items`,onChange:(e,t)=>{w.value=e,T.value=t},onShowSizeChange:(e,t)=>{w.value=e,T.value=t}}),b(`div`,{className:`text-sm opacity-70`,children:[`当前第 `,w.value,` 页，每页 `,T.value,` 条`]})]})}),code:`const current = ref(4)
const pageSize = ref(10)

<Pagination
  current={current.value}
  pageSize={pageSize.value}
  total={185}
  showSizeChanger
  showTotal={(total, range) => \`\${range[0]}-\${range[1]} of \${total} items\`}
  onChange={(page, nextPageSize) => {
    current.value = page
    pageSize.value = nextPageSize
  }}
  onShowSizeChange={(page, nextPageSize) => {
    current.value = page
    pageSize.value = nextPageSize
  }}
/>`});g(()=>p(e,d,z))});let B=a(`rue:component:anchor`);t(d,B),r(()=>{let e=m(I,{title:`Simple mode`,summary:`简洁模式只保留上一页、页码输入和下一页，适合空间紧张的工具栏。`,preview:()=>x(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body gap-4`,children:[x(F,{simple:!0,current:E.value,total:50,onChange:e=>{E.value=e}}),x(F,{simple:{readOnly:!0},current:D.value,total:50,onChange:e=>{D.value=e}}),x(F,{simple:!0,total:50,defaultCurrent:2,disabled:!0}),b(`div`,{className:`text-sm opacity-70`,children:[`当前示例页码：可输入第 `,E.value,` 页，只读第 `,D.value,` 页`]})]})}),code:`const simplePage = ref(2)
const simpleReadonlyPage = ref(2)

<>
  <Pagination
    simple
    current={simplePage.value}
    total={50}
    onChange={page => {
      simplePage.value = page
    }}
  />
  <Pagination
    simple={{ readOnly: true }}
    current={simpleReadonlyPage.value}
    total={50}
    onChange={page => {
      simpleReadonlyPage.value = page
    }}
  />
  <Pagination simple total={50} defaultCurrent={2} disabled />
</>`});g(()=>p(e,d,B))});let V=a(`rue:component:anchor`);t(d,V),r(()=>{let e=m(I,{title:`Page size and quick jumper`,summary:`页容量切换与快捷跳页现在默认更紧凑，页数较少时输入框不会显得过宽。`,preview:()=>x(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body gap-4`,children:[x(F,{current:O.value,pageSize:ee.value,total:120,showSizeChanger:!0,pageSizeOptions:[10,20,50],showQuickJumper:{goButton:`Go`},showTotal:(e,t)=>`${t[0]}-${t[1]} / ${e}`,onChange:(e,t)=>{O.value=e,ee.value=t},onShowSizeChange:(e,t)=>{O.value=e,ee.value=t}}),x(F,{current:k.value,pageSize:A.value,total:500,size:`sm`,showSizeChanger:!0,showQuickJumper:!0,align:`end`,onChange:(e,t)=>{k.value=e,A.value=t},onShowSizeChange:(e,t)=>{k.value=e,A.value=t}}),b(`div`,{className:`text-sm opacity-70`,children:[`紧凑版当前第 `,k.value,` 页，每页 `,A.value,` `,`条`]})]})}),code:`const current = ref(3)
const pageSize = ref(20)
const compactPage = ref(3)
const compactPageSize = ref(10)

<>
  <Pagination
    current={current.value}
    pageSize={pageSize.value}
    total={120}
    showSizeChanger
    pageSizeOptions={[10, 20, 50]}
    showQuickJumper={{ goButton: 'Go' }}
    showTotal={(total, range) => \`\${range[0]}-\${range[1]} / \${total}\`}
    onChange={(page, nextPageSize) => {
      current.value = page
      pageSize.value = nextPageSize
    }}
    onShowSizeChange={(page, nextPageSize) => {
      current.value = page
      pageSize.value = nextPageSize
    }}
  />

  <Pagination
    current={compactPage.value}
    pageSize={compactPageSize.value}
    total={500}
    size="sm"
    showSizeChanger
    showQuickJumper
    align="end"
    onChange={(page, nextPageSize) => {
      compactPage.value = page
      compactPageSize.value = nextPageSize
    }}
    onShowSizeChange={(page, nextPageSize) => {
      compactPage.value = page
      compactPageSize.value = nextPageSize
    }}
  />
</>`});g(()=>p(e,d,V))});let H=a(`rue:component:anchor`);t(d,H),r(()=>{let e=m(I,{title:`Custom item render`,summary:"通过 `itemRender` 重写上一页、下一页或跳转项文本，保留默认交互逻辑。",preview:()=>x(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body gap-4`,children:[x(F,{current:j.value,total:500,showLessItems:!0,onChange:e=>{j.value=e},itemRender:(e,t,n)=>t===`prev`?x(`span`,{className:`font-medium`,children:`Previous`}):t===`next`?x(`span`,{className:`font-medium`,children:`Next`}):n}),x(F,{total:8,defaultCurrent:1,hideOnSinglePage:!0}),b(`div`,{className:`text-sm opacity-70`,children:[`自定义文案示例当前位于第 `,j.value,` 页`]})]})}),code:`const current = ref(6)

<Pagination
  current={current.value}
  total={500}
  showLessItems
  onChange={page => {
    current.value = page
  }}
  itemRender={(_, type, original) => {
    if (type === 'prev') {
      return <span className="font-medium">Previous</span>
    }
    if (type === 'next') {
      return <span className="font-medium">Next</span>
    }
    return original
  }}
/>

<Pagination total={8} defaultCurrent={1} hideOnSinglePage />`});g(()=>p(e,d,H))});let U=c(`h2`,d);t(d,U),l(U,`id`,`pagination-api`),t(U,i(`API`));let oe=a(`rue:component:anchor`);t(d,oe),r(()=>{let e=m(L,{rows:ae});g(()=>p(e,d,oe))});let W=c(`h2`,d);t(d,W),t(W,i(`FAQ`));let G=c(`div`,d);t(d,G),e(G,`space-y-4 text-sm leading-6`);let K=c(`div`,G);t(G,K);let q=c(`h3`,K);t(K,q),e(q,`mb-1 text-base font-semibold`),t(q,i(`什么时候用静态组合，什么时候用数据驱动？`));let J=c(`p`,K);t(K,J),e(J,`m-0 opacity-80`),t(J,i("当按钮结构、文案和链接完全由业务自定义时，用 `Pagination.Item` 静态组合更直接；只要你已经有 `total`、`current`、`pageSize` 这些分页信息，优先使用数据驱动模式，省去页码计算与边界处理。"));let Y=c(`div`,G);t(G,Y);let X=c(`h3`,Y);t(Y,X),e(X,`mb-1 text-base font-semibold`),t(X,i("`simple` 适合什么场景？"));let Z=c(`p`,Y);t(Y,Z),e(Z,`m-0 opacity-80`),t(Z,i("`simple` 适合工具栏、卡片头部、移动端等横向空间有限的区域；如果只想展示当前页而不允许直接输入， 可以传 `simple="));let se=o(Z);t(Z,se),r(()=>{u(se,{readOnly:!0})}),t(Z,i("`。"));let Q=c(`div`,G);t(G,Q);let ce=c(`h3`,Q);t(Q,ce),e(ce,`mb-1 text-base font-semibold`),t(ce,i(`切换每页条数时会触发哪些回调？`));let le=c(`p`,Q);t(Q,le),e(le,`m-0 opacity-80`),t(le,i("`onShowSizeChange` 专门用于处理页容量变更；为了保持外部状态同步，`onChange` 也会收到新的页码和 `pageSize`，所以受控场景通常同时兼容这两个回调。"));let $=c(`div`,G);t(G,$);let ue=c(`h3`,$);t($,ue),e(ue,`mb-1 text-base font-semibold`),t(ue,i(`如何把上一页、下一页改成业务文案？`));let de=c(`p`,$);return t($,de),e(de,`m-0 opacity-80`),t(de,i("轻量替换可以用 `itemRender` 改写 `prev`、`next`、`jump-prev`、`jump-next` 的内容；如果还要替换 aria/title 文案，可以继续传 `locale`。")),n})}),d,h),d})};export{R as default};