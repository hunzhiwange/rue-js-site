import{F as e,H as t,I as n,L as r,N as i,P as a,W as o,Y as s,c,j as l,lt as u,pt as d,rt as f,t as p,u as m,ut as h}from"./vapor-runtime-BZZbPG7x.js";import{a as g,n as _}from"./vapor-helpers-vapor-DuGQh50d.js";import{n as v,t as y}from"./src-DP0sEeZS.js";import{n as b}from"./SidebarPlaygroundDesign-DJfSSlM7.js";import{t as x}from"./Code-C8wy38VS.js";import{t as S}from"./tabs-B-QPmbH8.js";var C=(e,t)=>t?`${e} ${t}`:e,w=(...e)=>e.filter(Boolean).join(` `),T=(e,t,n)=>Math.min(Math.max(e,t),n),E=(e,t)=>{let n=Number(e);return!Number.isFinite(n)||n<=0?t:Math.floor(n)},D=e=>{switch(e){case`small`:return`sm`;case`middle`:return`md`;case`large`:return`lg`;default:return e}},ee=e=>{switch(e){case`center`:return`justify-center`;case`end`:return`justify-end`;default:return`justify-start`}},O=e=>{let t=`join`;return e&&(t+=` join-${e}`),t},k=(e,t,n,r)=>{let i=D(e),a=`join-item btn`;return i&&(a+=` btn-${i}`),t&&(a+=` btn-active`),n&&(a+=` btn-disabled`),r&&(a+=` ${r}`),a},A=(e,t)=>{let n=D(e),r=`select select-bordered`;return n&&(r+=` select-${n}`),t&&(r+=` ${t}`),r},j=(e,t)=>{let n=D(e),r=`input input-bordered`;return n&&(r+=` input-${n}`),t&&(r+=` ${t}`),r},te=(e,t)=>w(j(e),`appearance-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none`,t),M=(e,t)=>{let n=String(Math.max(1,e)).length;return t===`simple`?n<=2?`w-10`:n===3?`w-12`:`w-14`:n<=2?`w-14`:n===3?`w-16`:`w-20`},ne=e=>{let t=e.reduce((e,t)=>Math.max(e,String(t).length),2);return t<=2?`w-16`:t===3?`w-18`:`w-20`},re=e=>e.current!==void 0||e.defaultCurrent!==void 0||e.total!==void 0||e.pageSize!==void 0||e.defaultPageSize!==void 0||e.simple!==void 0||e.showSizeChanger!==void 0||e.showQuickJumper!==void 0||e.showLessItems!==void 0||e.hideOnSinglePage!==void 0||e.showTotal!==void 0||e.itemRender!==void 0||e.align!==void 0||e.size!==void 0||e.disabled!==void 0||e.onChange!==void 0||e.onShowSizeChange!==void 0||e.pageSizeOptions!==void 0||e.locale!==void 0,ie=(e,t,n)=>n<=0?[0,0]:[(e-1)*t+1,Math.min(n,e*t)],ae=(e,t,n)=>{if(t<=0)return[];let r=[],i=n?1:2,a=n?3:5;if(t<=5+i*2){for(let e=1;e<=t;e+=1)r.push({type:`page`,page:e,label:String(e)});return r}let o=Math.max(1,e-i),s=Math.min(t,e+i);if(r.push({type:`page`,page:1,label:`1`}),o>2)r.push({type:`jump-prev`,page:Math.max(1,e-a),label:`•••`});else for(let e=2;e<o;e+=1)r.push({type:`page`,page:e,label:String(e)});for(let e=Math.max(2,o);e<=Math.min(t-1,s);e+=1)r.push({type:`page`,page:e,label:String(e)});if(s<t-1)r.push({type:`jump-next`,page:Math.min(t,e+a),label:`•••`});else for(let e=s+1;e<t;e+=1)r.push({type:`page`,page:e,label:String(e)});return r.push({type:`page`,page:t,label:String(t)}),r},N=Object.assign(({direction:e,align:t,size:n,className:r,children:i,current:a,defaultCurrent:o,total:s,pageSize:c,defaultPageSize:l,disabled:d,simple:p,showSizeChanger:m,pageSizeOptions:h,showQuickJumper:g,showLessItems:_,hideOnSinglePage:b,showTitle:x=!0,showTotal:S,itemRender:k,onChange:P,onShowSizeChange:F,locale:I,...L})=>{if(!re({direction:e,align:t,size:n,className:r,children:i,current:a,defaultCurrent:o,total:s,pageSize:c,defaultPageSize:l,disabled:d,simple:p,showSizeChanger:m,pageSizeOptions:h,showQuickJumper:g,showLessItems:_,hideOnSinglePage:b,showTotal:S,itemRender:k,onChange:P,onShowSizeChange:F,locale:I}))return y(`div`,{...L,className:C(O(e),r),children:i});let R=f(E(o??a??1,1)),z=f(E(l??c??10,10)),B=E(c??z.value,10),V=Math.max(0,Number(s)||0),H=Math.max(1,Math.ceil(V/B)),U=T(E(a??R.value,1),1,H),W=ie(U,B,V),G=h&&h.length>0?h.map(e=>E(e,B)):[10,20,50,100],K=typeof p==`object`?p:p?{}:void 0,q=typeof g==`object`&&g?g:g?{}:void 0,oe=ae(U,H,_),J=u();if(!J.current){let e=String(U);J.current={page:U,simple:e,quick:e}}else if(J.current.page!==U){let e=String(U);J.current.page=U,J.current.simple=e,J.current.quick=e}let Y=J.current,X={prev:I?.prev??`‹`,next:I?.next??`›`,jumpPrev:I?.jumpPrev??`•••`,jumpNext:I?.jumpNext??`•••`,pageSuffix:I?.pageSuffix??`/ page`,itemsPerPage:I?.itemsPerPage??`items / page`,pageTitle:I?.pageTitle??(e=>`Page ${e}`),jumpTo:I?.jumpTo??`Go to`,previousPage:I?.previousPage??`Previous Page`,nextPage:I?.nextPage??`Next Page`,jumpPrevTitle:I?.jumpPrevTitle??`Jump Previous Pages`,jumpNextTitle:I?.jumpNextTitle??`Jump Next Pages`};if(b&&H<=1)return null;let Z=(e,t=B)=>{let n=Math.max(1,Math.ceil(V/t)),r=T(E(e,1),1,n);a===void 0&&(R.value=r),c===void 0&&t!==B&&(z.value=t),P&&P(r,t)},Q=e=>{let t=E(e,B),n=T(U,1,Math.max(1,Math.ceil(V/t)));c===void 0&&(z.value=t),a===void 0&&(R.value=n),F&&F(n,t),P&&P(n,t)},$=(e,t,r,i)=>{let a=!!d||!!i?.disabled,o=r,s=k?k(e,t,o):o;return y(N.Item,{size:n,active:i?.active,disabled:a,"aria-label":t===`page`?X.pageTitle(e):void 0,title:x?i?.title??(t===`page`?X.pageTitle(e):void 0):void 0,onClick:()=>{a||i?.active||Z(e)},children:s})},se=K?v(`div`,{className:O(),children:[$(Math.max(1,U-1),`prev`,X.prev,{disabled:U<=1,title:X.previousPage}),v(`div`,{className:j(n,`join-item inline-flex shrink-0 items-center gap-1 px-2 text-sm`),children:[K.readOnly?y(`span`,{className:`tabular-nums`,children:U}):y(`input`,{type:`text`,inputMode:`numeric`,pattern:`[0-9]*`,min:`1`,max:String(H),value:Y.simple,disabled:d,className:w(`border-0 bg-transparent p-0 text-right outline-none appearance-none [appearance:textfield] tabular-nums [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none`,M(H,`simple`)),onInput:e=>{Y.simple=e.currentTarget.value},onKeyDown:e=>{if(e.key!==`Enter`)return;let t=e.currentTarget;Z(Number(t.value))},onBlur:e=>{if(d)return;let t=e.currentTarget;if(t.value===``){t.value=String(U),Y.simple=t.value;return}Z(Number(t.value))}},`simple-${U}-${H}`),y(`span`,{className:`inline-flex items-center opacity-60`,children:X.pageSuffix===`/ page`?`/ ${H}`:`${X.pageSuffix} ${H}`})]}),$(Math.min(H,U+1),`next`,X.next,{disabled:U>=H,title:X.nextPage})]}):v(`div`,{className:O(e),children:[$(Math.max(1,U-1),`prev`,X.prev,{disabled:U<=1,title:X.previousPage}),oe.map(e=>{let t=e.type===`jump-prev`?X.jumpPrev:e.type===`jump-next`?X.jumpNext:e.label;return $(e.page,e.type,t,{active:e.type===`page`&&e.page===U,disabled:e.type===`page`?!1:!!d,title:e.type===`page`?X.pageTitle(e.page):e.type===`jump-prev`?X.jumpPrevTitle:X.jumpNextTitle})}),$(Math.min(H,U+1),`next`,X.next,{disabled:U>=H,title:X.nextPage})]});return v(`div`,{...L,className:w(`flex flex-wrap items-center gap-3`,ee(t),r),children:[S?y(`div`,{className:`text-sm opacity-70`,"aria-live":`polite`,children:S(V,W)}):null,se,m?v(`label`,{className:`flex items-center gap-2 text-sm opacity-80`,children:[y(`select`,{value:String(B),disabled:d,className:A(n,`${ne(G)} text-center tabular-nums`),onChange:e=>Q(Number(e.currentTarget.value)),children:G.map(e=>y(`option`,{value:String(e),children:e},e))}),y(`span`,{children:X.itemsPerPage})]}):null,q?v(`div`,{className:`flex items-center gap-2 text-sm`,children:[y(`span`,{className:`opacity-70`,children:X.jumpTo}),y(`input`,{type:`text`,inputMode:`numeric`,pattern:`[0-9]*`,min:`1`,max:String(H),value:Y.quick,disabled:d,className:te(n,`${M(H,`quick`)} text-center tabular-nums`),onInput:e=>{Y.quick=e.currentTarget.value},onKeyDown:e=>{if(e.key!==`Enter`)return;let t=e.currentTarget;Z(Number(t.value))}},`quick-${U}-${H}`),q.goButton==null?null:y(`button`,{type:`button`,disabled:d,className:w(`btn`,D(n)?`btn-${D(n)}`:void 0),onClick:e=>{let t=e.currentTarget.parentElement?.querySelector(`input`);t&&Z(Number(t.value))},children:q.goButton})]}):null]})},{Item:({tag:e=`button`,active:t,disabled:n,size:r,className:i,children:a,...o})=>{let s=e,c={...o,className:k(r,t,n,i)};return t&&(c[`aria-current`]=o[`aria-current`]??`page`),n&&(c[`aria-disabled`]=o[`aria-disabled`]??!0,e===`button`||e===`input`?c.disabled=o.disabled??!0:(c.role=o.role??`button`,c.tabIndex=o.tabIndex??-1)),y(s,{...c,children:a})}}),P=({title:t,summary:_,preview:v,code:y})=>{let{tabRef:b,tab:C}=g(`useSetup:0:0`,()=>h(()=>{let e=g(`useRef:1:0`,()=>u());return e.current||=g(`ref:1:1`,()=>f(`preview`)),{tabRef:e,tab:e.current}}));return m(()=>{let u=e(`div`);o(u,`component-preview not-prose text-base-content my-6 lg:my-12`);let f=e(`div`);l(u,f),o(f,`flex flex-wrap items-start justify-between gap-3`);let h=e(`div`);l(f,h);let g=e(`h2`);l(h,g),o(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(g,n(`# `));let b=r(g);l(g,b),d(()=>{s(b,t)});let w=i(`rue:slot:anchor`);l(h,w),d(()=>{c(_?m(()=>{let t=a(),n=e(`p`);l(t,n),o(n,`m-0 text-sm opacity-70`);let i=r(n);return l(n,i),d(()=>{s(i,_)}),t}):``,h,w)});let T=i(`rue:component:anchor`);l(u,T),d(()=>{c(p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:C.value,onChange:e=>C.value=e,className:`mb-3 mt-4`}),u,T)});let E=i(`rue:slot:anchor`);return l(u,E),d(()=>{c(C.value===`preview`?v():m(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),d(()=>{c(p(x,{className:`mt-2`,lang:`tsx`,code:y}),e,t)}),e}),u,E)}),u})},F=({rows:r})=>m(()=>{let s=e(`div`);o(s,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let u=e(`table`);l(s,u),o(u,`table table-zebra`);let f=e(`thead`);l(u,f);let p=e(`tr`);l(f,p);let h=e(`th`);l(p,h),l(h,n(`属性`));let g=e(`th`);l(p,g),l(g,n(`说明`));let v=e(`th`);l(p,v),l(v,n(`类型`));let y=e(`th`);l(p,y),l(y,n(`默认值`));let b=e(`tbody`);l(u,b);let x=i(`rue:list:start`),S=i(`rue:list:end`);l(b,x),l(b,S);let C=new Map;return d(()=>{C=_({items:r||[],getKey:(e,t)=>e.prop,elements:C,parent:b,before:S,singleRoot:!0,start:x,renderItem:(n,r,o,s,u)=>{c(m(()=>{let r=a(),o=e(`tr`);l(r,o),d(()=>{t(o,`key`,String(n.prop))});let s=e(`td`);l(o,s);let u=e(`code`);l(s,u);let f=i(`rue:slot:anchor`);l(u,f),d(()=>{let e=n.prop;c(e,u,f)});let p=e(`td`);l(o,p);let m=i(`rue:slot:anchor`);l(p,m),d(()=>{let e=n.description;c(e,p,m)});let h=e(`td`);l(o,h);let g=e(`code`);l(h,g);let _=i(`rue:slot:anchor`);l(g,_),d(()=>{let e=n.type;c(e,g,_)});let v=e(`td`);l(o,v);let y=e(`code`);l(v,y);let b=i(`rue:slot:anchor`);return l(y,b),d(()=>{let e=n.defaultValue;c(e,y,b)}),r}),r,o)}})}),s}),I=[{prop:`current / defaultCurrent`,description:`受控或非受控的当前页码。`,type:`number`,defaultValue:`1`},{prop:`total`,description:`数据总条数；传入后自动计算页码按钮。`,type:`number`,defaultValue:`0`},{prop:`pageSize / defaultPageSize`,description:`每页条数，配合 total 共同决定总页数。`,type:`number`,defaultValue:`10`},{prop:`simple`,description:`切换为简洁模式；可传 { readOnly: true } 关闭中间输入。`,type:`boolean | { readOnly?: boolean }`,defaultValue:`false`},{prop:`showSizeChanger / pageSizeOptions`,description:`展示每页条数切换，并自定义可选项。`,type:`boolean / Array<number | string>`,defaultValue:`false / [10, 20, 50, 100]`},{prop:`showQuickJumper`,description:`展示快速跳页输入框；可传 { goButton } 自定义确认按钮。`,type:`boolean | { goButton?: any }`,defaultValue:`false`},{prop:`showTotal`,description:`自定义总数与区间文案。`,type:`(total: number, range: [number, number]) => any`,defaultValue:`-`},{prop:`itemRender`,description:`自定义页码、上一页、下一页、跳转项的渲染内容。`,type:`(page: number, type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next', original: any) => any`,defaultValue:`-`},{prop:`align / size / disabled`,description:`控制对齐、尺寸和禁用态。`,type:`'start' | 'center' | 'end' / 'xs' | 'sm' | 'md' | 'lg' | 'xl' / boolean`,defaultValue:`'start' / 'md' / false`},{prop:`showLessItems / hideOnSinglePage`,description:`控制页码折叠密度，以及单页时是否隐藏。`,type:`boolean`,defaultValue:`false`},{prop:`onChange / onShowSizeChange`,description:`页码变化、每页条数变化时的回调。`,type:`(page: number, pageSize: number) => void`,defaultValue:`-`}],L=()=>{let{stateRef:_,drivenPrimaryPage:x,drivenSecondaryPage:S,controlledPage:C,controlledPageSize:w,simplePage:T,simpleReadonlyPage:E,advancedPage:D,advancedPageSize:ee,advancedCompactPage:O,advancedCompactPageSize:k,customPage:A}=g(`useSetup:0:0`,()=>h(()=>{let e=g(`useRef:1:2`,()=>u());return e.current||={drivenPrimaryPage:g(`ref:1:3`,()=>f(2)),drivenSecondaryPage:g(`ref:1:4`,()=>f(6)),controlledPage:g(`ref:1:5`,()=>f(4)),controlledPageSize:g(`ref:1:6`,()=>f(10)),simplePage:g(`ref:1:7`,()=>f(2)),simpleReadonlyPage:g(`ref:1:8`,()=>f(2)),advancedPage:g(`ref:1:9`,()=>f(3)),advancedPageSize:g(`ref:1:10`,()=>f(20)),advancedCompactPage:g(`ref:1:11`,()=>f(3)),advancedCompactPageSize:g(`ref:1:12`,()=>f(10)),customPage:g(`ref:1:13`,()=>f(6))},{stateRef:e,drivenPrimaryPage:e.current.drivenPrimaryPage,drivenSecondaryPage:e.current.drivenSecondaryPage,controlledPage:e.current.controlledPage,controlledPageSize:e.current.controlledPageSize,simplePage:e.current.simplePage,simpleReadonlyPage:e.current.simpleReadonlyPage,advancedPage:e.current.advancedPage,advancedPageSize:e.current.advancedPageSize,advancedCompactPage:e.current.advancedCompactPage,advancedCompactPageSize:e.current.advancedCompactPageSize,customPage:e.current.customPage}}));return m(()=>{let u=a(),f=i(`rue:component:anchor`);return l(u,f),c(p(b,{children:m(()=>{let u=a(),f=e(`div`);l(u,f),o(f,`max-w-none prose prose-sm md:prose-base`);let m=e(`h1`);l(f,m),l(m,n(`Pagination 分页`));let h=e(`p`);l(f,h),o(h,`text-sm mt-3 mb-3`),l(h,n(`Pagination 现在同时支持两类用法：保留原有的静态组合模式，以及更贴近业务组件习惯的 的数据驱动模式。 视觉仍基于 Rue 当前的 join 与 btn 体系，但补齐了页码计算、受控/非受控、简单模式、页容量切换、快捷跳转和自定义渲染。`));let g=e(`div`);l(f,g),o(g,`text-sm flex flex-wrap gap-4`);let _=e(`a`);l(g,_),t(_,`href`,`https://daisyui.com/components/pagination/`),t(_,`target`,`_blank`),l(_,n(`查看 Pagination 静态样式`));let b=e(`h2`);l(f,b),l(b,n(`何时使用`));let j=e(`ul`);l(f,j);let te=e(`li`);l(j,te),l(te,n(`需要保留 Rue 现有 join + btn 分页视觉，但希望组件自己计算页码与跳转逻辑。`));let M=e(`li`);l(j,M),l(M,n(`需要受控/非受控分页、简单模式、页容量切换、快捷跳页等更完整的交互能力。`));let ne=e(`li`);l(j,ne),l(ne,n(`需要在静态拼装和数据驱动两种模式间切换，并逐步迁移旧用法。`));let re=e(`h2`);l(f,re),o(re,`mt-8`),l(re,n(`静态组合模式`));let ie=e(`p`);l(f,ie),o(ie,`text-sm opacity-80`),l(ie,n(`适合完全自定义节点结构的场景。以下示例保留原有 compound 用法，只补齐说明与可复制代码。`));let ae=i(`rue:component:anchor`);l(f,ae),d(()=>{c(p(P,{title:`Basic pagination`,summary:`最基础的静态拼装方式，适合完全由业务侧决定按钮内容和顺序。`,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body`,children:v(N,{className:`w-fit`,"data-testid":`pagination-basic`,children:[y(N.Item,{"aria-label":`Previous page`,children:`«`}),y(N.Item,{children:`1`}),y(N.Item,{children:`2`}),y(N.Item,{children:`3`}),y(N.Item,{"aria-label":`Next page`,children:`»`})]})})}),code:`<Pagination className="w-fit">
  <Pagination.Item aria-label="Previous page">«</Pagination.Item>
  <Pagination.Item>1</Pagination.Item>
  <Pagination.Item>2</Pagination.Item>
  <Pagination.Item>3</Pagination.Item>
  <Pagination.Item aria-label="Next page">»</Pagination.Item>
</Pagination>`}),f,ae)});let L=i(`rue:component:anchor`);l(f,L),d(()=>{c(p(P,{title:`Vertical pagination`,summary:"继续沿用 `direction='vertical'`，适合侧栏步骤、目录或分段导航。",preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body`,children:v(N,{direction:`vertical`,className:`w-fit`,"data-testid":`pagination-vertical`,children:[y(N.Item,{children:`Overview`}),y(N.Item,{children:`Updates`}),y(N.Item,{children:`Logs`})]})})}),code:`<Pagination direction="vertical" className="w-fit">
  <Pagination.Item>Overview</Pagination.Item>
  <Pagination.Item>Updates</Pagination.Item>
  <Pagination.Item>Logs</Pagination.Item>
</Pagination>`}),f,L)});let R=i(`rue:component:anchor`);l(f,R),d(()=>{c(p(P,{title:`Current and disabled items`,summary:"静态模式下仍可通过 `active`、`disabled` 和 `tag='a'` 控制语义与状态。",preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body`,children:v(N,{className:`w-fit`,"data-testid":`pagination-stateful`,children:[y(N.Item,{disabled:!0,children:`Prev`}),y(N.Item,{children:`1`}),y(N.Item,{active:!0,children:`2`}),y(N.Item,{children:`3`}),y(N.Item,{tag:`a`,href:`#next`,children:`Next`})]})})}),code:`<Pagination className="w-fit">
  <Pagination.Item disabled>Prev</Pagination.Item>
  <Pagination.Item>1</Pagination.Item>
  <Pagination.Item active>2</Pagination.Item>
  <Pagination.Item>3</Pagination.Item>
  <Pagination.Item tag="a" href="#next">Next</Pagination.Item>
</Pagination>`}),f,R)});let z=i(`rue:component:anchor`);l(f,z),d(()=>{c(p(P,{title:`Data driven basic`,summary:"传入 `total` 后由组件自动计算页码；这里改成受控版本，便于在设计页直接切换和观察当前页变化。",preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-4`,children:[y(N,{current:x.value,total:120,showTotal:(e,t)=>`${t[0]}-${t[1]} / ${e}`,onChange:e=>{x.value=e}}),y(N,{current:S.value,total:500,size:`sm`,align:`center`,onChange:e=>{S.value=e}}),v(`div`,{className:`text-sm opacity-70`,children:[`当前示例页码：默认尺寸第 `,x.value,` 页，小尺寸第`,` `,S.value,` 页`]})]})}),code:`const primaryPage = ref(2)
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
</>`}),f,z)});let B=i(`rue:component:anchor`);l(f,B),d(()=>{c(p(P,{title:`Controlled pagination`,summary:"通过 `current` 与 `pageSize` 接管状态，适合和表格、请求参数或 URL 查询同步。",preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-4`,children:[y(N,{current:C.value,pageSize:w.value,total:185,showSizeChanger:!0,showTotal:(e,t)=>`${t[0]}-${t[1]} of ${e} items`,onChange:(e,t)=>{C.value=e,w.value=t},onShowSizeChange:(e,t)=>{C.value=e,w.value=t}}),v(`div`,{className:`text-sm opacity-70`,children:[`当前第 `,C.value,` 页，每页 `,w.value,` 条`]})]})}),code:`const current = ref(4)
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
/>`}),f,B)});let V=i(`rue:component:anchor`);l(f,V),d(()=>{c(p(P,{title:`Simple mode`,summary:`简洁模式只保留上一页、页码输入和下一页，适合空间紧张的工具栏。`,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-4`,children:[y(N,{simple:!0,current:T.value,total:50,onChange:e=>{T.value=e}}),y(N,{simple:{readOnly:!0},current:E.value,total:50,onChange:e=>{E.value=e}}),y(N,{simple:!0,total:50,defaultCurrent:2,disabled:!0}),v(`div`,{className:`text-sm opacity-70`,children:[`当前示例页码：可输入第 `,T.value,` 页，只读第 `,E.value,` 页`]})]})}),code:`const simplePage = ref(2)
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
</>`}),f,V)});let H=i(`rue:component:anchor`);l(f,H),d(()=>{c(p(P,{title:`Page size and quick jumper`,summary:`页容量切换与快捷跳页现在默认更紧凑，页数较少时输入框不会显得过宽。`,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-4`,children:[y(N,{current:D.value,pageSize:ee.value,total:120,showSizeChanger:!0,pageSizeOptions:[10,20,50],showQuickJumper:{goButton:`Go`},showTotal:(e,t)=>`${t[0]}-${t[1]} / ${e}`,onChange:(e,t)=>{D.value=e,ee.value=t},onShowSizeChange:(e,t)=>{D.value=e,ee.value=t}}),y(N,{current:O.value,pageSize:k.value,total:500,size:`sm`,showSizeChanger:!0,showQuickJumper:!0,align:`end`,onChange:(e,t)=>{O.value=e,k.value=t},onShowSizeChange:(e,t)=>{O.value=e,k.value=t}}),v(`div`,{className:`text-sm opacity-70`,children:[`紧凑版当前第 `,O.value,` 页，每页 `,k.value,` `,`条`]})]})}),code:`const current = ref(3)
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
</>`}),f,H)});let U=i(`rue:component:anchor`);l(f,U),d(()=>{c(p(P,{title:`Custom item render`,summary:"通过 `itemRender` 重写上一页、下一页或跳转项文本，保留默认交互逻辑。",preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-4`,children:[y(N,{current:A.value,total:500,showLessItems:!0,onChange:e=>{A.value=e},itemRender:(e,t,n)=>t===`prev`?y(`span`,{className:`font-medium`,children:`Previous`}):t===`next`?y(`span`,{className:`font-medium`,children:`Next`}):n}),y(N,{total:8,defaultCurrent:1,hideOnSinglePage:!0}),v(`div`,{className:`text-sm opacity-70`,children:[`自定义文案示例当前位于第 `,A.value,` 页`]})]})}),code:`const current = ref(6)

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

<Pagination total={8} defaultCurrent={1} hideOnSinglePage />`}),f,U)});let W=e(`h2`);l(f,W),t(W,`id`,`pagination-api`),l(W,n(`API`));let G=i(`rue:component:anchor`);l(f,G),d(()=>{c(p(F,{rows:I}),f,G)});let K=e(`h2`);l(f,K),l(K,n(`FAQ`));let q=e(`div`);l(f,q),o(q,`space-y-4 text-sm leading-6`);let oe=e(`div`);l(q,oe);let J=e(`h3`);l(oe,J),o(J,`mb-1 text-base font-semibold`),l(J,n(`什么时候用静态组合，什么时候用数据驱动？`));let Y=e(`p`);l(oe,Y),o(Y,`m-0 opacity-80`),l(Y,n("当按钮结构、文案和链接完全由业务自定义时，用 `Pagination.Item` 静态组合更直接；只要你已经有 `total`、`current`、`pageSize` 这些分页信息，优先使用数据驱动模式，省去页码计算与边界处理。"));let X=e(`div`);l(q,X);let Z=e(`h3`);l(X,Z),o(Z,`mb-1 text-base font-semibold`),l(Z,n("`simple` 适合什么场景？"));let Q=e(`p`);l(X,Q),o(Q,`m-0 opacity-80`),l(Q,n("`simple` 适合工具栏、卡片头部、移动端等横向空间有限的区域；如果只想展示当前页而不允许直接输入， 可以传 `simple="));let $=r(Q);l(Q,$),d(()=>{s($,{readOnly:!0})}),l(Q,n("`。"));let se=e(`div`);l(q,se);let ce=e(`h3`);l(se,ce),o(ce,`mb-1 text-base font-semibold`),l(ce,n(`切换每页条数时会触发哪些回调？`));let le=e(`p`);l(se,le),o(le,`m-0 opacity-80`),l(le,n("`onShowSizeChange` 专门用于处理页容量变更；为了保持外部状态同步，`onChange` 也会收到新的页码和 `pageSize`，所以受控场景通常同时兼容这两个回调。"));let ue=e(`div`);l(q,ue);let de=e(`h3`);l(ue,de),o(de,`mb-1 text-base font-semibold`),l(de,n(`如何把上一页、下一页改成业务文案？`));let fe=e(`p`);return l(ue,fe),o(fe,`m-0 opacity-80`),l(fe,n("轻量替换可以用 `itemRender` 改写 `prev`、`next`、`jump-prev`、`jump-next` 的内容；如果还要替换 aria/title 文案，可以继续传 `locale`。")),u})}),u,f),u})};export{L as default};