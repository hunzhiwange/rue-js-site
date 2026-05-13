import{F as e,G as t,I as n,L as r,M as i,P as a,R as o,U as s,Z as c,_t as l,bt as u,c as d,gt as f,lt as p,pt as m,t as h,u as g}from"./vapor-runtime-D3a-68js.js";import{a as _,n as v}from"./vapor-helpers-vapor-DGjYaAZX.js";import{n as y,t as b}from"./src-BfQKH6_d.js";import{n as x}from"./SidebarPlaygroundDesign-vpnUkFCM.js";import{t as S}from"./Code-2C2psoH3.js";import{t as C}from"./tabs-BgQmsOey.js";var w=(e,t)=>t?`${e} ${t}`:e,T=(...e)=>e.filter(Boolean).join(` `),E=(e,t,n)=>Math.min(Math.max(e,t),n),D=(e,t)=>{let n=Number(e);return!Number.isFinite(n)||n<=0?t:Math.floor(n)},O=e=>{switch(e){case`small`:return`sm`;case`middle`:return`md`;case`large`:return`lg`;default:return e}},k=e=>{switch(e){case`center`:return`justify-center`;case`end`:return`justify-end`;default:return`justify-start`}},A=e=>{let t=`join`;return e&&(t+=` join-${e}`),t},j=(e,t,n,r)=>{let i=O(e),a=`join-item btn`;return i&&(a+=` btn-${i}`),t&&(a+=` btn-active`),n&&(a+=` btn-disabled`),r&&(a+=` ${r}`),a},M=(e,t)=>{let n=O(e),r=`select select-bordered`;return n&&(r+=` select-${n}`),t&&(r+=` ${t}`),r},N=(e,t)=>{let n=O(e),r=`input input-bordered`;return n&&(r+=` input-${n}`),t&&(r+=` ${t}`),r},ee=(e,t)=>T(N(e),`appearance-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none`,t),te=(e,t)=>{let n=String(Math.max(1,e)).length;return t===`simple`?n<=2?`w-10`:n===3?`w-12`:`w-14`:n<=2?`w-14`:n===3?`w-16`:`w-20`},ne=e=>{let t=e.reduce((e,t)=>Math.max(e,String(t).length),2);return t<=2?`w-16`:t===3?`w-18`:`w-20`},P=e=>e.current!==void 0||e.defaultCurrent!==void 0||e.total!==void 0||e.pageSize!==void 0||e.defaultPageSize!==void 0||e.simple!==void 0||e.showSizeChanger!==void 0||e.showQuickJumper!==void 0||e.showLessItems!==void 0||e.hideOnSinglePage!==void 0||e.showTotal!==void 0||e.itemRender!==void 0||e.align!==void 0||e.size!==void 0||e.disabled!==void 0||e.onChange!==void 0||e.onShowSizeChange!==void 0||e.pageSizeOptions!==void 0||e.locale!==void 0,F=(e,t,n)=>n<=0?[0,0]:[(e-1)*t+1,Math.min(n,e*t)],re=(e,t,n)=>{if(t<=0)return[];let r=[],i=n?1:2,a=n?3:5;if(t<=5+i*2){for(let e=1;e<=t;e+=1)r.push({type:`page`,page:e,label:String(e)});return r}let o=Math.max(1,e-i),s=Math.min(t,e+i);if(r.push({type:`page`,page:1,label:`1`}),o>2)r.push({type:`jump-prev`,page:Math.max(1,e-a),label:`•••`});else for(let e=2;e<o;e+=1)r.push({type:`page`,page:e,label:String(e)});for(let e=Math.max(2,o);e<=Math.min(t-1,s);e+=1)r.push({type:`page`,page:e,label:String(e)});if(s<t-1)r.push({type:`jump-next`,page:Math.min(t,e+a),label:`•••`});else for(let e=s+1;e<t;e+=1)r.push({type:`page`,page:e,label:String(e)});return r.push({type:`page`,page:t,label:String(t)}),r},I=Object.assign(({direction:e,align:t,size:n,className:r,children:i,current:a,defaultCurrent:o,total:s,pageSize:c,defaultPageSize:l,disabled:u,simple:d,showSizeChanger:m,pageSizeOptions:h,showQuickJumper:g,showLessItems:_,hideOnSinglePage:v,showTitle:x=!0,showTotal:S,itemRender:C,onChange:j,onShowSizeChange:L,locale:R,...ie})=>{if(!P({direction:e,align:t,size:n,className:r,children:i,current:a,defaultCurrent:o,total:s,pageSize:c,defaultPageSize:l,disabled:u,simple:d,showSizeChanger:m,pageSizeOptions:h,showQuickJumper:g,showLessItems:_,hideOnSinglePage:v,showTotal:S,itemRender:C,onChange:j,onShowSizeChange:L,locale:R}))return b(`div`,{...ie,className:w(A(e),r),children:i});let z=p(D(o??a??1,1)),B=p(D(l??c??10,10)),V=D(c??B.value,10),H=Math.max(0,Number(s)||0),U=Math.max(1,Math.ceil(H/V)),W=E(D(a??z.value,1),1,U),ae=F(W,V,H),G=h&&h.length>0?h.map(e=>D(e,V)):[10,20,50,100],K=typeof d==`object`?d:d?{}:void 0,q=typeof g==`object`&&g?g:g?{}:void 0,J=re(W,U,_),Y=f();if(!Y.current){let e=String(W);Y.current={page:W,simple:e,quick:e}}else if(Y.current.page!==W){let e=String(W);Y.current.page=W,Y.current.simple=e,Y.current.quick=e}let X=Y.current,Z={prev:R?.prev??`‹`,next:R?.next??`›`,jumpPrev:R?.jumpPrev??`•••`,jumpNext:R?.jumpNext??`•••`,pageSuffix:R?.pageSuffix??`/ page`,itemsPerPage:R?.itemsPerPage??`items / page`,pageTitle:R?.pageTitle??(e=>`Page ${e}`),jumpTo:R?.jumpTo??`Go to`,previousPage:R?.previousPage??`Previous Page`,nextPage:R?.nextPage??`Next Page`,jumpPrevTitle:R?.jumpPrevTitle??`Jump Previous Pages`,jumpNextTitle:R?.jumpNextTitle??`Jump Next Pages`};if(v&&U<=1)return null;let Q=(e,t=V)=>{let n=Math.max(1,Math.ceil(H/t)),r=E(D(e,1),1,n);a===void 0&&(z.value=r),c===void 0&&t!==V&&(B.value=t),j&&j(r,t)},oe=e=>{let t=D(e,V),n=E(W,1,Math.max(1,Math.ceil(H/t)));c===void 0&&(B.value=t),a===void 0&&(z.value=n),L&&L(n,t),j&&j(n,t)},$=(e,t,r,i)=>{let a=!!u||!!i?.disabled,o=r,s=C?C(e,t,o):o;return b(I.Item,{size:n,active:i?.active,disabled:a,"aria-label":t===`page`?Z.pageTitle(e):void 0,title:x?i?.title??(t===`page`?Z.pageTitle(e):void 0):void 0,onClick:()=>{a||i?.active||Q(e)},children:s})},se=K?y(`div`,{className:A(),children:[$(Math.max(1,W-1),`prev`,Z.prev,{disabled:W<=1,title:Z.previousPage}),y(`div`,{className:N(n,`join-item inline-flex shrink-0 items-center gap-1 px-2 text-sm`),children:[K.readOnly?b(`span`,{className:`tabular-nums`,children:W}):b(`input`,{type:`text`,inputMode:`numeric`,pattern:`[0-9]*`,min:`1`,max:String(U),value:X.simple,disabled:u,className:T(`border-0 bg-transparent p-0 text-right outline-none appearance-none [appearance:textfield] tabular-nums [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none`,te(U,`simple`)),onInput:e=>{X.simple=e.currentTarget.value},onKeyDown:e=>{if(e.key!==`Enter`)return;let t=e.currentTarget;Q(Number(t.value))},onBlur:e=>{if(u)return;let t=e.currentTarget;if(t.value===``){t.value=String(W),X.simple=t.value;return}Q(Number(t.value))}},`simple-${W}-${U}`),b(`span`,{className:`inline-flex items-center opacity-60`,children:Z.pageSuffix===`/ page`?`/ ${U}`:`${Z.pageSuffix} ${U}`})]}),$(Math.min(U,W+1),`next`,Z.next,{disabled:W>=U,title:Z.nextPage})]}):y(`div`,{className:A(e),children:[$(Math.max(1,W-1),`prev`,Z.prev,{disabled:W<=1,title:Z.previousPage}),J.map(e=>{let t=e.type===`jump-prev`?Z.jumpPrev:e.type===`jump-next`?Z.jumpNext:e.label;return $(e.page,e.type,t,{active:e.type===`page`&&e.page===W,disabled:e.type===`page`?!1:!!u,title:e.type===`page`?Z.pageTitle(e.page):e.type===`jump-prev`?Z.jumpPrevTitle:Z.jumpNextTitle})}),$(Math.min(U,W+1),`next`,Z.next,{disabled:W>=U,title:Z.nextPage})]});return y(`div`,{...ie,className:T(`flex flex-wrap items-center gap-3`,k(t),r),children:[S?b(`div`,{className:`text-sm opacity-70`,"aria-live":`polite`,children:S(H,ae)}):null,se,m?y(`label`,{className:`flex items-center gap-2 text-sm opacity-80`,children:[b(`select`,{value:String(V),disabled:u,className:M(n,`${ne(G)} text-center tabular-nums`),onChange:e=>oe(Number(e.currentTarget.value)),children:G.map(e=>b(`option`,{value:String(e),children:e},e))}),b(`span`,{children:Z.itemsPerPage})]}):null,q?y(`div`,{className:`flex items-center gap-2 text-sm`,children:[b(`span`,{className:`opacity-70`,children:Z.jumpTo}),b(`input`,{type:`text`,inputMode:`numeric`,pattern:`[0-9]*`,min:`1`,max:String(U),value:X.quick,disabled:u,className:ee(n,`${te(U,`quick`)} text-center tabular-nums`),onInput:e=>{X.quick=e.currentTarget.value},onKeyDown:e=>{if(e.key!==`Enter`)return;let t=e.currentTarget;Q(Number(t.value))}},`quick-${W}-${U}`),q.goButton==null?null:b(`button`,{type:`button`,disabled:u,className:T(`btn`,O(n)?`btn-${O(n)}`:void 0),onClick:e=>{let t=e.currentTarget.parentElement?.querySelector(`input`);t&&Q(Number(t.value))},children:q.goButton})]}):null]})},{Item:({tag:e=`button`,active:t,disabled:n,size:r,className:i,children:a,...o})=>{let s=e,c={...o,className:j(r,t,n,i)};return t&&(c[`aria-current`]=o[`aria-current`]??`page`),n&&(c[`aria-disabled`]=o[`aria-disabled`]??!0,e===`button`||e===`input`?c.disabled=o.disabled??!0:(c.role=o.role??`button`,c.tabIndex=o.tabIndex??-1)),b(s,{...c,children:a})}}),L=o=>{let{tabRef:s,tab:c}=_(`useSetup:0:0`,()=>l(()=>{let e=_(`useRef:1:0`,()=>f());return e.current||=_(`ref:1:1`,()=>p(`preview`)),{tabRef:e,tab:e.current}}));return g(()=>{let s=n(`div`);t(s,`component-preview not-prose text-base-content my-6 lg:my-12`);let l=n(`div`);i(s,l),t(l,`flex flex-wrap items-start justify-between gap-3`);let f=n(`div`);i(l,f);let p=n(`h2`);i(f,p),t(p,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(p,r(`# `));let _=a(`rue:slot:anchor`);i(p,_),u(()=>{let e=o.title;m(()=>d(e,p,_))});let v=a(`rue:slot:anchor`);i(f,v),u(()=>{let r=o.summary?g(()=>{let r=e(),s=n(`p`);i(r,s),t(s,`m-0 text-sm opacity-70`);let c=a(`rue:slot:anchor`);return i(s,c),u(()=>{let e=o.summary;m(()=>d(e,s,c))}),r}):``;m(()=>d(r,f,v))});let y=a(`rue:component:anchor`);i(s,y),u(()=>{let e=h(C,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:c.value,onChange:e=>c.value=e,className:`mb-3 mt-4`});m(()=>d(e,s,y))});let b=a(`rue:slot:anchor`);return i(s,b),u(()=>{let t=c.value===`preview`?o.preview():g(()=>{let t=e(),n=a(`rue:component:anchor`);return i(t,n),u(()=>{let e=h(S,{className:`mt-2`,lang:`tsx`,code:o.code});m(()=>d(e,t,n))}),t});m(()=>d(t,s,b))}),s})},R=o=>g(()=>{let c=n(`div`);t(c,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let l=n(`table`);i(c,l),t(l,`table table-zebra`);let f=n(`thead`);i(l,f);let p=n(`tr`);i(f,p);let h=n(`th`);i(p,h),i(h,r(`属性`));let _=n(`th`);i(p,_),i(_,r(`说明`));let y=n(`th`);i(p,y),i(y,r(`类型`));let b=n(`th`);i(p,b),i(b,r(`默认值`));let x=n(`tbody`);i(l,x);let S=a(`rue:list:start`),C=a(`rue:list:end`);i(x,S),i(x,C);let w=new Map;return u(()=>{w=v({items:o.rows||[],getKey:(e,t)=>e.prop,elements:w,parent:x,before:C,singleRoot:!0,trackIndex:!1,start:S,renderItem:(t,r,o,c,l)=>{d(g(()=>{let r=e(),o=n(`tr`);i(r,o),u(()=>{s(o,`key`,String(t.prop))});let c=n(`td`);i(o,c);let l=n(`code`);i(c,l);let f=a(`rue:slot:anchor`);i(l,f),u(()=>{let e=t.prop;m(()=>d(e,l,f))});let p=n(`td`);i(o,p);let h=a(`rue:slot:anchor`);i(p,h),u(()=>{let e=t.description;m(()=>d(e,p,h))});let g=n(`td`);i(o,g);let _=n(`code`);i(g,_);let v=a(`rue:slot:anchor`);i(_,v),u(()=>{let e=t.type;m(()=>d(e,_,v))});let y=n(`td`);i(o,y);let b=n(`code`);i(y,b);let x=a(`rue:slot:anchor`);return i(b,x),u(()=>{let e=t.defaultValue;m(()=>d(e,b,x))}),r}),r,o)}})}),c}),ie=[{prop:`current / defaultCurrent`,description:`受控或非受控的当前页码。`,type:`number`,defaultValue:`1`},{prop:`total`,description:`数据总条数；传入后自动计算页码按钮。`,type:`number`,defaultValue:`0`},{prop:`pageSize / defaultPageSize`,description:`每页条数，配合 total 共同决定总页数。`,type:`number`,defaultValue:`10`},{prop:`simple`,description:`切换为简洁模式；可传 { readOnly: true } 关闭中间输入。`,type:`boolean | { readOnly?: boolean }`,defaultValue:`false`},{prop:`showSizeChanger / pageSizeOptions`,description:`展示每页条数切换，并自定义可选项。`,type:`boolean / Array<number | string>`,defaultValue:`false / [10, 20, 50, 100]`},{prop:`showQuickJumper`,description:`展示快速跳页输入框；可传 { goButton } 自定义确认按钮。`,type:`boolean | { goButton?: any }`,defaultValue:`false`},{prop:`showTotal`,description:`自定义总数与区间文案。`,type:`(total: number, range: [number, number]) => any`,defaultValue:`-`},{prop:`itemRender`,description:`自定义页码、上一页、下一页、跳转项的渲染内容。`,type:`(page: number, type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next', original: any) => any`,defaultValue:`-`},{prop:`align / size / disabled`,description:`控制对齐、尺寸和禁用态。`,type:`'start' | 'center' | 'end' / 'xs' | 'sm' | 'md' | 'lg' | 'xl' / boolean`,defaultValue:`'start' / 'md' / false`},{prop:`showLessItems / hideOnSinglePage`,description:`控制页码折叠密度，以及单页时是否隐藏。`,type:`boolean`,defaultValue:`false`},{prop:`onChange / onShowSizeChange`,description:`页码变化、每页条数变化时的回调。`,type:`(page: number, pageSize: number) => void`,defaultValue:`-`}],z=()=>{let{stateRef:v,drivenPrimaryPage:S,drivenSecondaryPage:C,controlledPage:w,controlledPageSize:T,simplePage:E,simpleReadonlyPage:D,advancedPage:O,advancedPageSize:k,advancedCompactPage:A,advancedCompactPageSize:j,customPage:M}=_(`useSetup:0:0:dup1`,()=>l(()=>{let e=_(`useRef:1:2`,()=>f());return e.current||={drivenPrimaryPage:_(`ref:1:3`,()=>p(2)),drivenSecondaryPage:_(`ref:1:4`,()=>p(6)),controlledPage:_(`ref:1:5`,()=>p(4)),controlledPageSize:_(`ref:1:6`,()=>p(10)),simplePage:_(`ref:1:7`,()=>p(2)),simpleReadonlyPage:_(`ref:1:8`,()=>p(2)),advancedPage:_(`ref:1:9`,()=>p(3)),advancedPageSize:_(`ref:1:10`,()=>p(20)),advancedCompactPage:_(`ref:1:11`,()=>p(3)),advancedCompactPageSize:_(`ref:1:12`,()=>p(10)),customPage:_(`ref:1:13`,()=>p(6))},{stateRef:e,drivenPrimaryPage:e.current.drivenPrimaryPage,drivenSecondaryPage:e.current.drivenSecondaryPage,controlledPage:e.current.controlledPage,controlledPageSize:e.current.controlledPageSize,simplePage:e.current.simplePage,simpleReadonlyPage:e.current.simpleReadonlyPage,advancedPage:e.current.advancedPage,advancedPageSize:e.current.advancedPageSize,advancedCompactPage:e.current.advancedCompactPage,advancedCompactPageSize:e.current.advancedCompactPageSize,customPage:e.current.customPage}}));return g(()=>{let l=e(),f=a(`rue:component:anchor`);return i(l,f),d(h(x,{children:g(()=>{let l=e(),f=n(`div`);i(l,f),t(f,`max-w-none prose prose-sm md:prose-base`);let p=n(`h1`);i(f,p),i(p,r(`Pagination 分页`));let g=n(`p`);i(f,g),t(g,`text-sm mt-3 mb-3`),i(g,r(`Pagination 现在同时支持两类用法：保留原有的静态组合模式，以及更贴近业务组件习惯的 的数据驱动模式。 视觉仍基于 Rue 当前的 join 与 btn 体系，但补齐了页码计算、受控/非受控、简单模式、页容量切换、快捷跳转和自定义渲染。`));let _=n(`div`);i(f,_),t(_,`text-sm flex flex-wrap gap-4`);let v=n(`a`);i(_,v),s(v,`href`,`https://daisyui.com/components/pagination/`),s(v,`target`,`_blank`),i(v,r(`查看 Pagination 静态样式`));let x=n(`h2`);i(f,x),i(x,r(`何时使用`));let N=n(`ul`);i(f,N);let ee=n(`li`);i(N,ee),i(ee,r(`需要保留 Rue 现有 join + btn 分页视觉，但希望组件自己计算页码与跳转逻辑。`));let te=n(`li`);i(N,te),i(te,r(`需要受控/非受控分页、简单模式、页容量切换、快捷跳页等更完整的交互能力。`));let ne=n(`li`);i(N,ne),i(ne,r(`需要在静态拼装和数据驱动两种模式间切换，并逐步迁移旧用法。`));let P=n(`h2`);i(f,P),t(P,`mt-8`),i(P,r(`静态组合模式`));let F=n(`p`);i(f,F),t(F,`text-sm opacity-80`),i(F,r(`适合完全自定义节点结构的场景。以下示例保留原有 compound 用法，只补齐说明与可复制代码。`));let re=a(`rue:component:anchor`);i(f,re),u(()=>{let e=h(L,{title:`Basic pagination`,summary:`最基础的静态拼装方式，适合完全由业务侧决定按钮内容和顺序。`,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(I,{className:`w-fit`,"data-testid":`pagination-basic`,children:[b(I.Item,{"aria-label":`Previous page`,children:`«`}),b(I.Item,{children:`1`}),b(I.Item,{children:`2`}),b(I.Item,{children:`3`}),b(I.Item,{"aria-label":`Next page`,children:`»`})]})})}),code:`<Pagination className="w-fit">
  <Pagination.Item aria-label="Previous page">«</Pagination.Item>
  <Pagination.Item>1</Pagination.Item>
  <Pagination.Item>2</Pagination.Item>
  <Pagination.Item>3</Pagination.Item>
  <Pagination.Item aria-label="Next page">»</Pagination.Item>
</Pagination>`});m(()=>d(e,f,re))});let z=a(`rue:component:anchor`);i(f,z),u(()=>{let e=h(L,{title:`Vertical pagination`,summary:"继续沿用 `direction='vertical'`，适合侧栏步骤、目录或分段导航。",preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(I,{direction:`vertical`,className:`w-fit`,"data-testid":`pagination-vertical`,children:[b(I.Item,{children:`Overview`}),b(I.Item,{children:`Updates`}),b(I.Item,{children:`Logs`})]})})}),code:`<Pagination direction="vertical" className="w-fit">
  <Pagination.Item>Overview</Pagination.Item>
  <Pagination.Item>Updates</Pagination.Item>
  <Pagination.Item>Logs</Pagination.Item>
</Pagination>`});m(()=>d(e,f,z))});let B=a(`rue:component:anchor`);i(f,B),u(()=>{let e=h(L,{title:`Current and disabled items`,summary:"静态模式下仍可通过 `active`、`disabled` 和 `tag='a'` 控制语义与状态。",preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(I,{className:`w-fit`,"data-testid":`pagination-stateful`,children:[b(I.Item,{disabled:!0,children:`Prev`}),b(I.Item,{children:`1`}),b(I.Item,{active:!0,children:`2`}),b(I.Item,{children:`3`}),b(I.Item,{tag:`a`,href:`#next`,children:`Next`})]})})}),code:`<Pagination className="w-fit">
  <Pagination.Item disabled>Prev</Pagination.Item>
  <Pagination.Item>1</Pagination.Item>
  <Pagination.Item active>2</Pagination.Item>
  <Pagination.Item>3</Pagination.Item>
  <Pagination.Item tag="a" href="#next">Next</Pagination.Item>
</Pagination>`});m(()=>d(e,f,B))});let V=a(`rue:component:anchor`);i(f,V),u(()=>{let e=h(L,{title:`Data driven basic`,summary:"传入 `total` 后由组件自动计算页码；这里改成受控版本，便于在设计页直接切换和观察当前页变化。",preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-4`,children:[b(I,{current:S.value,total:120,showTotal:(e,t)=>`${t[0]}-${t[1]} / ${e}`,onChange:e=>{S.value=e}}),b(I,{current:C.value,total:500,size:`sm`,align:`center`,onChange:e=>{C.value=e}}),y(`div`,{className:`text-sm opacity-70`,children:[`当前示例页码：默认尺寸第 `,S.value,` 页，小尺寸第`,` `,C.value,` 页`]})]})}),code:`const primaryPage = ref(2)
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
</>`});m(()=>d(e,f,V))});let H=a(`rue:component:anchor`);i(f,H),u(()=>{let e=h(L,{title:`Controlled pagination`,summary:"通过 `current` 与 `pageSize` 接管状态，适合和表格、请求参数或 URL 查询同步。",preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-4`,children:[b(I,{current:w.value,pageSize:T.value,total:185,showSizeChanger:!0,showTotal:(e,t)=>`${t[0]}-${t[1]} of ${e} items`,onChange:(e,t)=>{w.value=e,T.value=t},onShowSizeChange:(e,t)=>{w.value=e,T.value=t}}),y(`div`,{className:`text-sm opacity-70`,children:[`当前第 `,w.value,` 页，每页 `,T.value,` 条`]})]})}),code:`const current = ref(4)
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
/>`});m(()=>d(e,f,H))});let U=a(`rue:component:anchor`);i(f,U),u(()=>{let e=h(L,{title:`Simple mode`,summary:`简洁模式只保留上一页、页码输入和下一页，适合空间紧张的工具栏。`,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-4`,children:[b(I,{simple:!0,current:E.value,total:50,onChange:e=>{E.value=e}}),b(I,{simple:{readOnly:!0},current:D.value,total:50,onChange:e=>{D.value=e}}),b(I,{simple:!0,total:50,defaultCurrent:2,disabled:!0}),y(`div`,{className:`text-sm opacity-70`,children:[`当前示例页码：可输入第 `,E.value,` 页，只读第 `,D.value,` 页`]})]})}),code:`const simplePage = ref(2)
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
</>`});m(()=>d(e,f,U))});let W=a(`rue:component:anchor`);i(f,W),u(()=>{let e=h(L,{title:`Page size and quick jumper`,summary:`页容量切换与快捷跳页现在默认更紧凑，页数较少时输入框不会显得过宽。`,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-4`,children:[b(I,{current:O.value,pageSize:k.value,total:120,showSizeChanger:!0,pageSizeOptions:[10,20,50],showQuickJumper:{goButton:`Go`},showTotal:(e,t)=>`${t[0]}-${t[1]} / ${e}`,onChange:(e,t)=>{O.value=e,k.value=t},onShowSizeChange:(e,t)=>{O.value=e,k.value=t}}),b(I,{current:A.value,pageSize:j.value,total:500,size:`sm`,showSizeChanger:!0,showQuickJumper:!0,align:`end`,onChange:(e,t)=>{A.value=e,j.value=t},onShowSizeChange:(e,t)=>{A.value=e,j.value=t}}),y(`div`,{className:`text-sm opacity-70`,children:[`紧凑版当前第 `,A.value,` 页，每页 `,j.value,` `,`条`]})]})}),code:`const current = ref(3)
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
</>`});m(()=>d(e,f,W))});let ae=a(`rue:component:anchor`);i(f,ae),u(()=>{let e=h(L,{title:`Custom item render`,summary:"通过 `itemRender` 重写上一页、下一页或跳转项文本，保留默认交互逻辑。",preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-4`,children:[b(I,{current:M.value,total:500,showLessItems:!0,onChange:e=>{M.value=e},itemRender:(e,t,n)=>t===`prev`?b(`span`,{className:`font-medium`,children:`Previous`}):t===`next`?b(`span`,{className:`font-medium`,children:`Next`}):n}),b(I,{total:8,defaultCurrent:1,hideOnSinglePage:!0}),y(`div`,{className:`text-sm opacity-70`,children:[`自定义文案示例当前位于第 `,M.value,` 页`]})]})}),code:`const current = ref(6)

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

<Pagination total={8} defaultCurrent={1} hideOnSinglePage />`});m(()=>d(e,f,ae))});let G=n(`h2`);i(f,G),s(G,`id`,`pagination-api`),i(G,r(`API`));let K=a(`rue:component:anchor`);i(f,K),u(()=>{let e=h(R,{rows:ie});m(()=>d(e,f,K))});let q=n(`h2`);i(f,q),i(q,r(`FAQ`));let J=n(`div`);i(f,J),t(J,`space-y-4 text-sm leading-6`);let Y=n(`div`);i(J,Y);let X=n(`h3`);i(Y,X),t(X,`mb-1 text-base font-semibold`),i(X,r(`什么时候用静态组合，什么时候用数据驱动？`));let Z=n(`p`);i(Y,Z),t(Z,`m-0 opacity-80`),i(Z,r("当按钮结构、文案和链接完全由业务自定义时，用 `Pagination.Item` 静态组合更直接；只要你已经有 `total`、`current`、`pageSize` 这些分页信息，优先使用数据驱动模式，省去页码计算与边界处理。"));let Q=n(`div`);i(J,Q);let oe=n(`h3`);i(Q,oe),t(oe,`mb-1 text-base font-semibold`),i(oe,r("`simple` 适合什么场景？"));let $=n(`p`);i(Q,$),t($,`m-0 opacity-80`),i($,r("`simple` 适合工具栏、卡片头部、移动端等横向空间有限的区域；如果只想展示当前页而不允许直接输入， 可以传 `simple="));let se=o($);i($,se),u(()=>{c(se,{readOnly:!0})}),i($,r("`。"));let ce=n(`div`);i(J,ce);let le=n(`h3`);i(ce,le),t(le,`mb-1 text-base font-semibold`),i(le,r(`切换每页条数时会触发哪些回调？`));let ue=n(`p`);i(ce,ue),t(ue,`m-0 opacity-80`),i(ue,r("`onShowSizeChange` 专门用于处理页容量变更；为了保持外部状态同步，`onChange` 也会收到新的页码和 `pageSize`，所以受控场景通常同时兼容这两个回调。"));let de=n(`div`);i(J,de);let fe=n(`h3`);i(de,fe),t(fe,`mb-1 text-base font-semibold`),i(fe,r(`如何把上一页、下一页改成业务文案？`));let pe=n(`p`);return i(de,pe),t(pe,`m-0 opacity-80`),i(pe,r("轻量替换可以用 `itemRender` 改写 `prev`、`next`、`jump-prev`、`jump-next` 的内容；如果还要替换 aria/title 文案，可以继续传 `locale`。")),l})}),l,f),l})};export{z as default};