import{$ as e,Et as t,G as n,H as r,J as i,K as a,Tt as o,W as s,_t as c,d as l,kt as u,l as d,q as f,st as p,t as m,tt as h,xt as g}from"./vapor-runtime-ACs_OvwU.js";import{a as _,n as v}from"./vapor-helpers-vapor-BFB_fGs4.js";import{n as y,t as b}from"./src-B0RvnZVV.js";import{n as x}from"./SidebarPlaygroundDesign-fKTv1NQ3.js";import{t as S}from"./Code-CliOXHNE.js";import{t as C}from"./tabs-CPymQe79.js";var w=(e,t)=>t?`${e} ${t}`:e,T=(...e)=>e.filter(Boolean).join(` `),E=(e,t,n)=>Math.min(Math.max(e,t),n),D=(e,t)=>{let n=Number(e);return!Number.isFinite(n)||n<=0?t:Math.floor(n)},O=e=>{switch(e){case`small`:return`sm`;case`middle`:return`md`;case`large`:return`lg`;default:return e}},ee=e=>{switch(e){case`center`:return`justify-center`;case`end`:return`justify-end`;default:return`justify-start`}},k=e=>{let t=`join`;return e&&(t+=` join-${e}`),t},A=(e,t,n,r)=>{let i=O(e),a=`join-item btn`;return i&&(a+=` btn-${i}`),t&&(a+=` btn-active`),n&&(a+=` btn-disabled`),r&&(a+=` ${r}`),a},j=(e,t)=>{let n=O(e),r=`select select-bordered`;return n&&(r+=` select-${n}`),t&&(r+=` ${t}`),r},M=(e,t)=>{let n=O(e),r=`input input-bordered`;return n&&(r+=` input-${n}`),t&&(r+=` ${t}`),r},te=(e,t)=>T(M(e),`appearance-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none`,t),N=(e,t)=>{let n=String(Math.max(1,e)).length;return t===`simple`?n<=2?`w-10`:n===3?`w-12`:`w-14`:n<=2?`w-14`:n===3?`w-16`:`w-20`},P=e=>{let t=e.reduce((e,t)=>Math.max(e,String(t).length),2);return t<=2?`w-16`:t===3?`w-18`:`w-20`},ne=e=>e.current!==void 0||e.defaultCurrent!==void 0||e.total!==void 0||e.pageSize!==void 0||e.defaultPageSize!==void 0||e.simple!==void 0||e.showSizeChanger!==void 0||e.showQuickJumper!==void 0||e.showLessItems!==void 0||e.hideOnSinglePage!==void 0||e.showTotal!==void 0||e.itemRender!==void 0||e.align!==void 0||e.size!==void 0||e.disabled!==void 0||e.onChange!==void 0||e.onShowSizeChange!==void 0||e.pageSizeOptions!==void 0||e.locale!==void 0,re=(e,t,n)=>n<=0?[0,0]:[(e-1)*t+1,Math.min(n,e*t)],ie=(e,t,n)=>{if(t<=0)return[];let r=[],i=n?1:2,a=n?3:5;if(t<=5+i*2){for(let e=1;e<=t;e+=1)r.push({type:`page`,page:e,label:String(e)});return r}let o=Math.max(1,e-i),s=Math.min(t,e+i);if(r.push({type:`page`,page:1,label:`1`}),o>2)r.push({type:`jump-prev`,page:Math.max(1,e-a),label:`•••`});else for(let e=2;e<o;e+=1)r.push({type:`page`,page:e,label:String(e)});for(let e=Math.max(2,o);e<=Math.min(t-1,s);e+=1)r.push({type:`page`,page:e,label:String(e)});if(s<t-1)r.push({type:`jump-next`,page:Math.min(t,e+a),label:`•••`});else for(let e=s+1;e<t;e+=1)r.push({type:`page`,page:e,label:String(e)});return r.push({type:`page`,page:t,label:String(t)}),r},F=Object.assign(({direction:e,align:t,size:n,className:r,children:i,current:a,defaultCurrent:s,total:l,pageSize:u,defaultPageSize:d,disabled:f,simple:p,showSizeChanger:m,pageSizeOptions:h,showQuickJumper:g,showLessItems:_,hideOnSinglePage:v,showTitle:x=!0,showTotal:S,itemRender:C,onChange:A,onShowSizeChange:I,locale:L,...ae})=>{if(!ne({direction:e,align:t,size:n,className:r,children:i,current:a,defaultCurrent:s,total:l,pageSize:u,defaultPageSize:d,disabled:f,simple:p,showSizeChanger:m,pageSizeOptions:h,showQuickJumper:g,showLessItems:_,hideOnSinglePage:v,showTotal:S,itemRender:C,onChange:A,onShowSizeChange:I,locale:L}))return b(`div`,{...ae,className:w(k(e),r),children:i});let R=c(D(s??a??1,1)),z=c(D(d??u??10,10)),B=D(u??z.value,10),V=Math.max(0,Number(l)||0),H=Math.max(1,Math.ceil(V/B)),U=E(D(a??R.value,1),1,H),oe=re(U,B,V),W=h&&h.length>0?h.map(e=>D(e,B)):[10,20,50,100],G=typeof p==`object`?p:p?{}:void 0,K=typeof g==`object`&&g?g:g?{}:void 0,q=ie(U,H,_),J=o();if(!J.current){let e=String(U);J.current={page:U,simple:e,quick:e}}else if(J.current.page!==U){let e=String(U);J.current.page=U,J.current.simple=e,J.current.quick=e}let Y=J.current,X={prev:L?.prev??`‹`,next:L?.next??`›`,jumpPrev:L?.jumpPrev??`•••`,jumpNext:L?.jumpNext??`•••`,pageSuffix:L?.pageSuffix??`/ page`,itemsPerPage:L?.itemsPerPage??`items / page`,pageTitle:L?.pageTitle??(e=>`Page ${e}`),jumpTo:L?.jumpTo??`Go to`,previousPage:L?.previousPage??`Previous Page`,nextPage:L?.nextPage??`Next Page`,jumpPrevTitle:L?.jumpPrevTitle??`Jump Previous Pages`,jumpNextTitle:L?.jumpNextTitle??`Jump Next Pages`};if(v&&H<=1)return null;let Z=(e,t=B)=>{let n=Math.max(1,Math.ceil(V/t)),r=E(D(e,1),1,n);a===void 0&&(R.value=r),u===void 0&&t!==B&&(z.value=t),A&&A(r,t)},se=e=>{let t=D(e,B),n=E(U,1,Math.max(1,Math.ceil(V/t)));u===void 0&&(z.value=t),a===void 0&&(R.value=n),I&&I(n,t),A&&A(n,t)},Q=(e,t,r,i)=>{let a=!!f||!!i?.disabled,o=r,s=C?C(e,t,o):o;return b(F.Item,{size:n,active:i?.active,disabled:a,"aria-label":t===`page`?X.pageTitle(e):void 0,title:x?i?.title??(t===`page`?X.pageTitle(e):void 0):void 0,onClick:()=>{a||i?.active||Z(e)},children:s})},ce=G?y(`div`,{className:k(),children:[Q(Math.max(1,U-1),`prev`,X.prev,{disabled:U<=1,title:X.previousPage}),y(`div`,{className:M(n,`join-item inline-flex shrink-0 items-center gap-1 px-2 text-sm`),children:[G.readOnly?b(`span`,{className:`tabular-nums`,children:U}):b(`input`,{type:`text`,inputMode:`numeric`,pattern:`[0-9]*`,min:`1`,max:String(H),value:Y.simple,disabled:f,className:T(`border-0 bg-transparent p-0 text-right outline-none appearance-none [appearance:textfield] tabular-nums [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none`,N(H,`simple`)),onInput:e=>{Y.simple=e.currentTarget.value},onKeyDown:e=>{if(e.key!==`Enter`)return;let t=e.currentTarget;Z(Number(t.value))},onBlur:e=>{if(f)return;let t=e.currentTarget;if(t.value===``){t.value=String(U),Y.simple=t.value;return}Z(Number(t.value))}},`simple-${U}-${H}`),b(`span`,{className:`inline-flex items-center opacity-60`,children:X.pageSuffix===`/ page`?`/ ${H}`:`${X.pageSuffix} ${H}`})]}),Q(Math.min(H,U+1),`next`,X.next,{disabled:U>=H,title:X.nextPage})]}):y(`div`,{className:k(e),children:[Q(Math.max(1,U-1),`prev`,X.prev,{disabled:U<=1,title:X.previousPage}),q.map(e=>{let t=e.type===`jump-prev`?X.jumpPrev:e.type===`jump-next`?X.jumpNext:e.label;return Q(e.page,e.type,t,{active:e.type===`page`&&e.page===U,disabled:e.type===`page`?!1:!!f,title:e.type===`page`?X.pageTitle(e.page):e.type===`jump-prev`?X.jumpPrevTitle:X.jumpNextTitle})}),Q(Math.min(H,U+1),`next`,X.next,{disabled:U>=H,title:X.nextPage})]});return y(`div`,{...ae,className:T(`flex flex-wrap items-center gap-3`,ee(t),r),children:[S?b(`div`,{className:`text-sm opacity-70`,"aria-live":`polite`,children:S(V,oe)}):null,ce,m?y(`label`,{className:`flex items-center gap-2 text-sm opacity-80`,children:[b(`select`,{value:String(B),disabled:f,className:j(n,`${P(W)} text-center tabular-nums`),onChange:e=>se(Number(e.currentTarget.value)),children:W.map(e=>b(`option`,{value:String(e),children:e},e))}),b(`span`,{children:X.itemsPerPage})]}):null,K?y(`div`,{className:`flex items-center gap-2 text-sm`,children:[b(`span`,{className:`opacity-70`,children:X.jumpTo}),b(`input`,{type:`text`,inputMode:`numeric`,pattern:`[0-9]*`,min:`1`,max:String(H),value:Y.quick,disabled:f,className:te(n,`${N(H,`quick`)} text-center tabular-nums`),onInput:e=>{Y.quick=e.currentTarget.value},onKeyDown:e=>{if(e.key!==`Enter`)return;let t=e.currentTarget;Z(Number(t.value))}},`quick-${U}-${H}`),K.goButton==null?null:b(`button`,{type:`button`,disabled:f,className:T(`btn`,O(n)?`btn-${O(n)}`:void 0),onClick:e=>{let t=e.currentTarget.parentElement?.querySelector(`input`);t&&Z(Number(t.value))},children:K.goButton})]}):null]})},{Item:({tag:e=`button`,active:t,disabled:n,size:r,className:i,children:a,...o})=>{let s=e,c={...o,className:A(r,t,n,i)};return t&&(c[`aria-current`]=o[`aria-current`]??`page`),n&&(c[`aria-disabled`]=o[`aria-disabled`]??!0,e===`button`||e===`input`?c.disabled=o.disabled??!0:(c.role=o.role??`button`,c.tabIndex=o.tabIndex??-1)),b(s,{...c,children:a})}}),I=e=>{let{tabRef:i,tab:p}=_(`useSetup:0:0`,()=>t(()=>{let e=_(`useRef:1:0`,()=>o());return e.current||=_(`ref:1:1`,()=>c(`preview`)),{tabRef:e,tab:e.current}}));return l(t=>{let i=a(`div`,t);h(i,`component-preview not-prose text-base-content my-6 lg:my-12`);let o=a(`div`,i);r(i,o),h(o,`flex flex-wrap items-start justify-between gap-3`);let c=a(`div`,o);r(o,c);let _=a(`h2`,c);r(c,_),h(_,`component-preview-title mt-2 mb-1 text-lg font-semibold`),r(_,f(`# `));let v=s(`rue:slot:anchor`);r(_,v),u(()=>{let t=e.title;g(()=>d(t,_,v))});let y=s(`rue:slot:anchor`);r(c,y),u(()=>{let t=e.summary?l(()=>{let t=n(),i=a(`p`,t);r(t,i),h(i,`m-0 text-sm opacity-70`);let o=s(`rue:slot:anchor`);return r(i,o),u(()=>{let t=e.summary;g(()=>d(t,i,o))}),t}):``;g(()=>d(t,c,y))});let b=s(`rue:component:anchor`);r(i,b),u(()=>{let e=m(C,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:p.value,onChange:e=>p.value=e,className:`mb-3 mt-4`});g(()=>d(e,i,b))});let x=s(`rue:slot:anchor`);return r(i,x),u(()=>{let t=p.value===`preview`?e.preview():l(()=>{let t=n(),i=s(`rue:component:anchor`);return r(t,i),u(()=>{let n=m(S,{className:`mt-2`,lang:`tsx`,code:e.code});g(()=>d(n,t,i))}),t});g(()=>d(t,i,x))}),i})},L=t=>l(i=>{let o=a(`div`,i);h(o,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let c=a(`table`,o);r(o,c),h(c,`table table-zebra`);let p=a(`thead`,c);r(c,p);let m=a(`tr`,p);r(p,m);let _=a(`th`,m);r(m,_),r(_,f(`属性`));let y=a(`th`,m);r(m,y),r(y,f(`说明`));let b=a(`th`,m);r(m,b),r(b,f(`类型`));let x=a(`th`,m);r(m,x),r(x,f(`默认值`));let S=a(`tbody`,c);r(c,S);let C=s(`rue:list:start`),w=s(`rue:list:end`);r(S,C),r(S,w);let T=new Map;return u(()=>{T=v({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,i,o,c,f)=>{d(l(()=>{let i=n(),o=a(`tr`,i);r(i,o),u(()=>{e(o,`key`,String(t.prop))});let c=a(`td`,o);r(o,c);let l=a(`code`,c);r(c,l);let f=s(`rue:slot:anchor`);r(l,f),u(()=>{let e=t.prop;g(()=>d(e,l,f))});let p=a(`td`,o);r(o,p);let m=s(`rue:slot:anchor`);r(p,m),u(()=>{let e=t.description;g(()=>d(e,p,m))});let h=a(`td`,o);r(o,h);let _=a(`code`,h);r(h,_);let v=s(`rue:slot:anchor`);r(_,v),u(()=>{let e=t.type;g(()=>d(e,_,v))});let y=a(`td`,o);r(o,y);let b=a(`code`,y);r(y,b);let x=s(`rue:slot:anchor`);return r(b,x),u(()=>{let e=t.defaultValue;g(()=>d(e,b,x))}),i}),i,o)}})}),o}),ae=[{prop:`current / defaultCurrent`,description:`受控或非受控的当前页码。`,type:`number`,defaultValue:`1`},{prop:`total`,description:`数据总条数；传入后自动计算页码按钮。`,type:`number`,defaultValue:`0`},{prop:`pageSize / defaultPageSize`,description:`每页条数，配合 total 共同决定总页数。`,type:`number`,defaultValue:`10`},{prop:`simple`,description:`切换为简洁模式；可传 { readOnly: true } 关闭中间输入。`,type:`boolean | { readOnly?: boolean }`,defaultValue:`false`},{prop:`showSizeChanger / pageSizeOptions`,description:`展示每页条数切换，并自定义可选项。`,type:`boolean / Array<number | string>`,defaultValue:`false / [10, 20, 50, 100]`},{prop:`showQuickJumper`,description:`展示快速跳页输入框；可传 { goButton } 自定义确认按钮。`,type:`boolean | { goButton?: any }`,defaultValue:`false`},{prop:`showTotal`,description:`自定义总数与区间文案。`,type:`(total: number, range: [number, number]) => any`,defaultValue:`-`},{prop:`itemRender`,description:`自定义页码、上一页、下一页、跳转项的渲染内容。`,type:`(page: number, type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next', original: any) => any`,defaultValue:`-`},{prop:`align / size / disabled`,description:`控制对齐、尺寸和禁用态。`,type:`'start' | 'center' | 'end' / 'xs' | 'sm' | 'md' | 'lg' | 'xl' / boolean`,defaultValue:`'start' / 'md' / false`},{prop:`showLessItems / hideOnSinglePage`,description:`控制页码折叠密度，以及单页时是否隐藏。`,type:`boolean`,defaultValue:`false`},{prop:`onChange / onShowSizeChange`,description:`页码变化、每页条数变化时的回调。`,type:`(page: number, pageSize: number) => void`,defaultValue:`-`}],R=()=>{let{stateRef:v,drivenPrimaryPage:S,drivenSecondaryPage:C,controlledPage:w,controlledPageSize:T,simplePage:E,simpleReadonlyPage:D,advancedPage:O,advancedPageSize:ee,advancedCompactPage:k,advancedCompactPageSize:A,customPage:j}=_(`useSetup:0:0:dup1`,()=>t(()=>{let e=_(`useRef:1:2`,()=>o());return e.current||={drivenPrimaryPage:_(`ref:1:3`,()=>c(2)),drivenSecondaryPage:_(`ref:1:4`,()=>c(6)),controlledPage:_(`ref:1:5`,()=>c(4)),controlledPageSize:_(`ref:1:6`,()=>c(10)),simplePage:_(`ref:1:7`,()=>c(2)),simpleReadonlyPage:_(`ref:1:8`,()=>c(2)),advancedPage:_(`ref:1:9`,()=>c(3)),advancedPageSize:_(`ref:1:10`,()=>c(20)),advancedCompactPage:_(`ref:1:11`,()=>c(3)),advancedCompactPageSize:_(`ref:1:12`,()=>c(10)),customPage:_(`ref:1:13`,()=>c(6))},{stateRef:e,drivenPrimaryPage:e.current.drivenPrimaryPage,drivenSecondaryPage:e.current.drivenSecondaryPage,controlledPage:e.current.controlledPage,controlledPageSize:e.current.controlledPageSize,simplePage:e.current.simplePage,simpleReadonlyPage:e.current.simpleReadonlyPage,advancedPage:e.current.advancedPage,advancedPageSize:e.current.advancedPageSize,advancedCompactPage:e.current.advancedCompactPage,advancedCompactPageSize:e.current.advancedCompactPageSize,customPage:e.current.customPage}}));return l(t=>{let o=n(),c=s(`rue:component:anchor`);return r(o,c),d(m(x,{children:l(()=>{let t=n(),o=a(`div`,t);r(t,o),h(o,`max-w-none prose prose-sm md:prose-base`);let c=a(`h1`,o);r(o,c),r(c,f(`Pagination 分页`));let l=a(`p`,o);r(o,l),h(l,`text-sm mt-3 mb-3`),r(l,f(`Pagination 现在同时支持两类用法：保留原有的静态组合模式，以及更贴近业务组件习惯的 的数据驱动模式。 视觉仍基于 Rue 当前的 join 与 btn 体系，但补齐了页码计算、受控/非受控、简单模式、页容量切换、快捷跳转和自定义渲染。`));let _=a(`h2`,o);r(o,_),r(_,f(`何时使用`));let v=a(`ul`,o);r(o,v);let x=a(`li`,v);r(v,x),r(x,f(`需要保留 Rue 现有 join + btn 分页视觉，但希望组件自己计算页码与跳转逻辑。`));let M=a(`li`,v);r(v,M),r(M,f(`需要受控/非受控分页、简单模式、页容量切换、快捷跳页等更完整的交互能力。`));let te=a(`li`,v);r(v,te),r(te,f(`需要在静态拼装和数据驱动两种模式间切换，并逐步迁移旧用法。`));let N=a(`h2`,o);r(o,N),h(N,`mt-8`),r(N,f(`静态组合模式`));let P=a(`p`,o);r(o,P),h(P,`text-sm opacity-80`),r(P,f(`适合完全自定义节点结构的场景。以下示例保留原有 compound 用法，只补齐说明与可复制代码。`));let ne=s(`rue:component:anchor`);r(o,ne),u(()=>{let e=m(I,{title:`Basic pagination`,summary:`最基础的静态拼装方式，适合完全由业务侧决定按钮内容和顺序。`,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(F,{className:`w-fit`,"data-testid":`pagination-basic`,children:[b(F.Item,{"aria-label":`Previous page`,children:`«`}),b(F.Item,{children:`1`}),b(F.Item,{children:`2`}),b(F.Item,{children:`3`}),b(F.Item,{"aria-label":`Next page`,children:`»`})]})})}),code:`<Pagination className="w-fit">
  <Pagination.Item aria-label="Previous page">«</Pagination.Item>
  <Pagination.Item>1</Pagination.Item>
  <Pagination.Item>2</Pagination.Item>
  <Pagination.Item>3</Pagination.Item>
  <Pagination.Item aria-label="Next page">»</Pagination.Item>
</Pagination>`});g(()=>d(e,o,ne))});let re=s(`rue:component:anchor`);r(o,re),u(()=>{let e=m(I,{title:`Vertical pagination`,summary:"继续沿用 `direction='vertical'`，适合侧栏步骤、目录或分段导航。",preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(F,{direction:`vertical`,className:`w-fit`,"data-testid":`pagination-vertical`,children:[b(F.Item,{children:`Overview`}),b(F.Item,{children:`Updates`}),b(F.Item,{children:`Logs`})]})})}),code:`<Pagination direction="vertical" className="w-fit">
  <Pagination.Item>Overview</Pagination.Item>
  <Pagination.Item>Updates</Pagination.Item>
  <Pagination.Item>Logs</Pagination.Item>
</Pagination>`});g(()=>d(e,o,re))});let ie=s(`rue:component:anchor`);r(o,ie),u(()=>{let e=m(I,{title:`Current and disabled items`,summary:"静态模式下仍可通过 `active`、`disabled` 和 `tag='a'` 控制语义与状态。",preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(F,{className:`w-fit`,"data-testid":`pagination-stateful`,children:[b(F.Item,{disabled:!0,children:`Prev`}),b(F.Item,{children:`1`}),b(F.Item,{active:!0,children:`2`}),b(F.Item,{children:`3`}),b(F.Item,{tag:`a`,href:`#next`,children:`Next`})]})})}),code:`<Pagination className="w-fit">
  <Pagination.Item disabled>Prev</Pagination.Item>
  <Pagination.Item>1</Pagination.Item>
  <Pagination.Item active>2</Pagination.Item>
  <Pagination.Item>3</Pagination.Item>
  <Pagination.Item tag="a" href="#next">Next</Pagination.Item>
</Pagination>`});g(()=>d(e,o,ie))});let R=s(`rue:component:anchor`);r(o,R),u(()=>{let e=m(I,{title:`Data driven basic`,summary:"传入 `total` 后由组件自动计算页码；这里改成受控版本，便于在设计页直接切换和观察当前页变化。",preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-4`,children:[b(F,{current:S.value,total:120,showTotal:(e,t)=>`${t[0]}-${t[1]} / ${e}`,onChange:e=>{S.value=e}}),b(F,{current:C.value,total:500,size:`sm`,align:`center`,onChange:e=>{C.value=e}}),y(`div`,{className:`text-sm opacity-70`,children:[`当前示例页码：默认尺寸第 `,S.value,` 页，小尺寸第`,` `,C.value,` 页`]})]})}),code:`const primaryPage = ref(2)
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
</>`});g(()=>d(e,o,R))});let z=s(`rue:component:anchor`);r(o,z),u(()=>{let e=m(I,{title:`Controlled pagination`,summary:"通过 `current` 与 `pageSize` 接管状态，适合和表格、请求参数或 URL 查询同步。",preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-4`,children:[b(F,{current:w.value,pageSize:T.value,total:185,showSizeChanger:!0,showTotal:(e,t)=>`${t[0]}-${t[1]} of ${e} items`,onChange:(e,t)=>{w.value=e,T.value=t},onShowSizeChange:(e,t)=>{w.value=e,T.value=t}}),y(`div`,{className:`text-sm opacity-70`,children:[`当前第 `,w.value,` 页，每页 `,T.value,` 条`]})]})}),code:`const current = ref(4)
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
/>`});g(()=>d(e,o,z))});let B=s(`rue:component:anchor`);r(o,B),u(()=>{let e=m(I,{title:`Simple mode`,summary:`简洁模式只保留上一页、页码输入和下一页，适合空间紧张的工具栏。`,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-4`,children:[b(F,{simple:!0,current:E.value,total:50,onChange:e=>{E.value=e}}),b(F,{simple:{readOnly:!0},current:D.value,total:50,onChange:e=>{D.value=e}}),b(F,{simple:!0,total:50,defaultCurrent:2,disabled:!0}),y(`div`,{className:`text-sm opacity-70`,children:[`当前示例页码：可输入第 `,E.value,` 页，只读第 `,D.value,` 页`]})]})}),code:`const simplePage = ref(2)
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
</>`});g(()=>d(e,o,B))});let V=s(`rue:component:anchor`);r(o,V),u(()=>{let e=m(I,{title:`Page size and quick jumper`,summary:`页容量切换与快捷跳页现在默认更紧凑，页数较少时输入框不会显得过宽。`,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-4`,children:[b(F,{current:O.value,pageSize:ee.value,total:120,showSizeChanger:!0,pageSizeOptions:[10,20,50],showQuickJumper:{goButton:`Go`},showTotal:(e,t)=>`${t[0]}-${t[1]} / ${e}`,onChange:(e,t)=>{O.value=e,ee.value=t},onShowSizeChange:(e,t)=>{O.value=e,ee.value=t}}),b(F,{current:k.value,pageSize:A.value,total:500,size:`sm`,showSizeChanger:!0,showQuickJumper:!0,align:`end`,onChange:(e,t)=>{k.value=e,A.value=t},onShowSizeChange:(e,t)=>{k.value=e,A.value=t}}),y(`div`,{className:`text-sm opacity-70`,children:[`紧凑版当前第 `,k.value,` 页，每页 `,A.value,` `,`条`]})]})}),code:`const current = ref(3)
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
</>`});g(()=>d(e,o,V))});let H=s(`rue:component:anchor`);r(o,H),u(()=>{let e=m(I,{title:`Custom item render`,summary:"通过 `itemRender` 重写上一页、下一页或跳转项文本，保留默认交互逻辑。",preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-4`,children:[b(F,{current:j.value,total:500,showLessItems:!0,onChange:e=>{j.value=e},itemRender:(e,t,n)=>t===`prev`?b(`span`,{className:`font-medium`,children:`Previous`}):t===`next`?b(`span`,{className:`font-medium`,children:`Next`}):n}),b(F,{total:8,defaultCurrent:1,hideOnSinglePage:!0}),y(`div`,{className:`text-sm opacity-70`,children:[`自定义文案示例当前位于第 `,j.value,` 页`]})]})}),code:`const current = ref(6)

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

<Pagination total={8} defaultCurrent={1} hideOnSinglePage />`});g(()=>d(e,o,H))});let U=a(`h2`,o);r(o,U),e(U,`id`,`pagination-api`),r(U,f(`API`));let oe=s(`rue:component:anchor`);r(o,oe),u(()=>{let e=m(L,{rows:ae});g(()=>d(e,o,oe))});let W=a(`h2`,o);r(o,W),r(W,f(`FAQ`));let G=a(`div`,o);r(o,G),h(G,`space-y-4 text-sm leading-6`);let K=a(`div`,G);r(G,K);let q=a(`h3`,K);r(K,q),h(q,`mb-1 text-base font-semibold`),r(q,f(`什么时候用静态组合，什么时候用数据驱动？`));let J=a(`p`,K);r(K,J),h(J,`m-0 opacity-80`),r(J,f("当按钮结构、文案和链接完全由业务自定义时，用 `Pagination.Item` 静态组合更直接；只要你已经有 `total`、`current`、`pageSize` 这些分页信息，优先使用数据驱动模式，省去页码计算与边界处理。"));let Y=a(`div`,G);r(G,Y);let X=a(`h3`,Y);r(Y,X),h(X,`mb-1 text-base font-semibold`),r(X,f("`simple` 适合什么场景？"));let Z=a(`p`,Y);r(Y,Z),h(Z,`m-0 opacity-80`),r(Z,f("`simple` 适合工具栏、卡片头部、移动端等横向空间有限的区域；如果只想展示当前页而不允许直接输入， 可以传 `simple="));let se=i(Z);r(Z,se),u(()=>{p(se,{readOnly:!0})}),r(Z,f("`。"));let Q=a(`div`,G);r(G,Q);let ce=a(`h3`,Q);r(Q,ce),h(ce,`mb-1 text-base font-semibold`),r(ce,f(`切换每页条数时会触发哪些回调？`));let le=a(`p`,Q);r(Q,le),h(le,`m-0 opacity-80`),r(le,f("`onShowSizeChange` 专门用于处理页容量变更；为了保持外部状态同步，`onChange` 也会收到新的页码和 `pageSize`，所以受控场景通常同时兼容这两个回调。"));let $=a(`div`,G);r(G,$);let ue=a(`h3`,$);r($,ue),h(ue,`mb-1 text-base font-semibold`),r(ue,f(`如何把上一页、下一页改成业务文案？`));let de=a(`p`,$);return r($,de),h(de,`m-0 opacity-80`),r(de,f("轻量替换可以用 `itemRender` 改写 `prev`、`next`、`jump-prev`、`jump-next` 的内容；如果还要替换 aria/title 文案，可以继续传 `locale`。")),t})}),o,c),o})};export{R as default};