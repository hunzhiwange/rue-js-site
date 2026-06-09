import{$ as e,Ht as t,Kt as n,Q as r,Rt as i,Xt as a,Y as o,Z as s,ct as c,et as l,l as u,mt as d,ot as f,qt as p,s as m,t as h,tt as g}from"./vapor-runtime-aZAg0Qkw.js";import{a as _,n as v}from"./vapor-helpers-vapor-gtGwiIv0.js";import{a as y,i as b}from"./persistentSidebarPlayground-IkfbXpbu.js";import{t as x}from"./Code-5DOEyGxf.js";import{t as S}from"./tabs-CWmjyn0I.js";import{r as C}from"./SidebarPlaygroundDesign-CS11MI8e.js";var w=(e,t)=>t?`${e} ${t}`:e,T=(...e)=>e.filter(Boolean).join(` `),E=(e,t,n)=>Math.min(Math.max(e,t),n),D=(e,t)=>{let n=Number(e);return!Number.isFinite(n)||n<=0?t:Math.floor(n)},O=e=>{switch(e){case`small`:return`sm`;case`middle`:return`md`;case`large`:return`lg`;default:return e}},ee=e=>{switch(e){case`center`:return`justify-center`;case`end`:return`justify-end`;default:return`justify-start`}},k=e=>{let t=`join`;return e&&(t+=` join-${e}`),t},A=(e,t,n,r)=>{let i=O(e),a=`join-item btn`;return i&&(a+=` btn-${i}`),t&&(a+=` btn-active`),n&&(a+=` btn-disabled`),r&&(a+=` ${r}`),a},j=(e,t)=>{let n=O(e),r=`select select-bordered`;return n&&(r+=` select-${n}`),t&&(r+=` ${t}`),r},M=(e,t)=>{let n=O(e),r=`input input-bordered`;return n&&(r+=` input-${n}`),t&&(r+=` ${t}`),r},te=(e,t)=>T(M(e),`appearance-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none`,t),N=(e,t)=>{let n=String(Math.max(1,e)).length;return t===`simple`?n<=2?`w-10`:n===3?`w-12`:`w-14`:n<=2?`w-14`:n===3?`w-16`:`w-20`},P=e=>{let t=e.reduce((e,t)=>Math.max(e,String(t).length),2);return t<=2?`w-16`:t===3?`w-18`:`w-20`},ne=e=>e.current!==void 0||e.defaultCurrent!==void 0||e.total!==void 0||e.pageSize!==void 0||e.defaultPageSize!==void 0||e.simple!==void 0||e.showSizeChanger!==void 0||e.showQuickJumper!==void 0||e.showLessItems!==void 0||e.hideOnSinglePage!==void 0||e.showTotal!==void 0||e.itemRender!==void 0||e.align!==void 0||e.size!==void 0||e.disabled!==void 0||e.onChange!==void 0||e.onShowSizeChange!==void 0||e.pageSizeOptions!==void 0||e.locale!==void 0,re=(e,t,n)=>n<=0?[0,0]:[(e-1)*t+1,Math.min(n,e*t)],ie=(e,t,n)=>{if(t<=0)return[];let r=[],i=n?1:2,a=n?3:5;if(t<=5+i*2){for(let e=1;e<=t;e+=1)r.push({type:`page`,page:e,label:String(e)});return r}let o=Math.max(1,e-i),s=Math.min(t,e+i);if(r.push({type:`page`,page:1,label:`1`}),o>2)r.push({type:`jump-prev`,page:Math.max(1,e-a),label:`•••`});else for(let e=2;e<o;e+=1)r.push({type:`page`,page:e,label:String(e)});for(let e=Math.max(2,o);e<=Math.min(t-1,s);e+=1)r.push({type:`page`,page:e,label:String(e)});if(s<t-1)r.push({type:`jump-next`,page:Math.min(t,e+a),label:`•••`});else for(let e=s+1;e<t;e+=1)r.push({type:`page`,page:e,label:String(e)});return r.push({type:`page`,page:t,label:String(t)}),r},F=Object.assign(({direction:e,align:t,size:r,className:a,children:o,current:s,defaultCurrent:c,total:l,pageSize:u,defaultPageSize:d,disabled:f,simple:p,showSizeChanger:m,pageSizeOptions:h,showQuickJumper:g,showLessItems:_,hideOnSinglePage:v,showTitle:x=!0,showTotal:S,itemRender:C,onChange:A,onShowSizeChange:I,locale:L,...ae})=>{if(!ne({direction:e,align:t,size:r,className:a,children:o,current:s,defaultCurrent:c,total:l,pageSize:u,defaultPageSize:d,disabled:f,simple:p,showSizeChanger:m,pageSizeOptions:h,showQuickJumper:g,showLessItems:_,hideOnSinglePage:v,showTotal:S,itemRender:C,onChange:A,onShowSizeChange:I,locale:L}))return b(`div`,{...ae,className:w(k(e),a),children:o});let R=i(D(c??s??1,1)),z=i(D(d??u??10,10)),B=D(u??z.value,10),V=Math.max(0,Number(l)||0),H=Math.max(1,Math.ceil(V/B)),U=E(D(s??R.value,1),1,H),oe=re(U,B,V),W=h&&h.length>0?h.map(e=>D(e,B)):[10,20,50,100],G=typeof p==`object`?p:p?{}:void 0,K=typeof g==`object`&&g?g:g?{}:void 0,q=ie(U,H,_),J=n();if(!J.current){let e=String(U);J.current={page:U,simple:e,quick:e}}else if(J.current.page!==U){let e=String(U);J.current.page=U,J.current.simple=e,J.current.quick=e}let Y=J.current,X={prev:L?.prev??`‹`,next:L?.next??`›`,jumpPrev:L?.jumpPrev??`•••`,jumpNext:L?.jumpNext??`•••`,pageSuffix:L?.pageSuffix??`/ page`,itemsPerPage:L?.itemsPerPage??`items / page`,pageTitle:L?.pageTitle??(e=>`Page ${e}`),jumpTo:L?.jumpTo??`Go to`,previousPage:L?.previousPage??`Previous Page`,nextPage:L?.nextPage??`Next Page`,jumpPrevTitle:L?.jumpPrevTitle??`Jump Previous Pages`,jumpNextTitle:L?.jumpNextTitle??`Jump Next Pages`};if(v&&H<=1)return null;let Z=(e,t=B)=>{let n=Math.max(1,Math.ceil(V/t)),r=E(D(e,1),1,n);s===void 0&&(R.value=r),u===void 0&&t!==B&&(z.value=t),A&&A(r,t)},se=e=>{let t=D(e,B),n=E(U,1,Math.max(1,Math.ceil(V/t)));u===void 0&&(z.value=t),s===void 0&&(R.value=n),I&&I(n,t),A&&A(n,t)},Q=(e,t,n,i)=>{let a=!!f||!!i?.disabled,o=n,s=C?C(e,t,o):o;return b(F.Item,{size:r,active:i?.active,disabled:a,"aria-label":t===`page`?X.pageTitle(e):void 0,title:x?i?.title??(t===`page`?X.pageTitle(e):void 0):void 0,onClick:()=>{a||i?.active||Z(e)},children:s})},ce=G?y(`div`,{className:k(),children:[Q(Math.max(1,U-1),`prev`,X.prev,{disabled:U<=1,title:X.previousPage}),y(`div`,{className:M(r,`join-item inline-flex shrink-0 items-center gap-1 px-2 text-sm`),children:[G.readOnly?b(`span`,{className:`tabular-nums`,children:U}):b(`input`,{type:`text`,inputMode:`numeric`,pattern:`[0-9]*`,min:`1`,max:String(H),value:Y.simple,disabled:f,className:T(`border-0 bg-transparent p-0 text-right outline-none appearance-none [appearance:textfield] tabular-nums [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none`,N(H,`simple`)),onInput:e=>{Y.simple=e.currentTarget.value},onKeyDown:e=>{if(e.key!==`Enter`)return;let t=e.currentTarget;Z(Number(t.value))},onBlur:e=>{if(f)return;let t=e.currentTarget;if(t.value===``){t.value=String(U),Y.simple=t.value;return}Z(Number(t.value))}},`simple-${U}-${H}`),b(`span`,{className:`inline-flex items-center opacity-60`,children:X.pageSuffix===`/ page`?`/ ${H}`:`${X.pageSuffix} ${H}`})]}),Q(Math.min(H,U+1),`next`,X.next,{disabled:U>=H,title:X.nextPage})]}):y(`div`,{className:k(e),children:[Q(Math.max(1,U-1),`prev`,X.prev,{disabled:U<=1,title:X.previousPage}),q.map(e=>{let t=e.type===`jump-prev`?X.jumpPrev:e.type===`jump-next`?X.jumpNext:e.label;return Q(e.page,e.type,t,{active:e.type===`page`&&e.page===U,disabled:e.type===`page`?!1:!!f,title:e.type===`page`?X.pageTitle(e.page):e.type===`jump-prev`?X.jumpPrevTitle:X.jumpNextTitle})}),Q(Math.min(H,U+1),`next`,X.next,{disabled:U>=H,title:X.nextPage})]});return y(`div`,{...ae,className:T(`flex flex-wrap items-center gap-3`,ee(t),a),children:[S?b(`div`,{className:`text-sm opacity-70`,"aria-live":`polite`,children:S(V,oe)}):null,ce,m?y(`label`,{className:`flex items-center gap-2 text-sm opacity-80`,children:[b(`select`,{value:String(B),disabled:f,className:j(r,`${P(W)} text-center tabular-nums`),onChange:e=>se(Number(e.currentTarget.value)),children:W.map(e=>b(`option`,{value:String(e),children:e},e))}),b(`span`,{children:X.itemsPerPage})]}):null,K?y(`div`,{className:`flex items-center gap-2 text-sm`,children:[b(`span`,{className:`opacity-70`,children:X.jumpTo}),b(`input`,{type:`text`,inputMode:`numeric`,pattern:`[0-9]*`,min:`1`,max:String(H),value:Y.quick,disabled:f,className:te(r,`${N(H,`quick`)} text-center tabular-nums`),onInput:e=>{Y.quick=e.currentTarget.value},onKeyDown:e=>{if(e.key!==`Enter`)return;let t=e.currentTarget;Z(Number(t.value))}},`quick-${U}-${H}`),K.goButton==null?null:b(`button`,{type:`button`,disabled:f,className:T(`btn`,O(r)?`btn-${O(r)}`:void 0),onClick:e=>{let t=e.currentTarget.parentElement?.querySelector(`input`);t&&Z(Number(t.value))},children:K.goButton})]}):null]})},{Item:({tag:e=`button`,active:t,disabled:n,size:r,className:i,children:a,...o})=>{let s=e,c={...o,className:A(r,t,n,i)};return t&&(c[`aria-current`]=o[`aria-current`]??`page`),n&&(c[`aria-disabled`]=o[`aria-disabled`]??!0,e===`button`||e===`input`?c.disabled=o.disabled??!0:(c.role=o.role??`button`,c.tabIndex=o.tabIndex??-1)),b(s,{...c,children:a})}}),I=d=>{let{tabRef:f,tab:g}=_(`useSetup:0:0`,()=>p(()=>{let e=_(`useRef:1:0`,()=>n());return e.current||=_(`ref:1:1`,()=>i(`preview`)),{tabRef:e,tab:e.current}}));return u(n=>{let i=e(`div`,n);c(i,`component-preview not-prose text-base-content my-6 lg:my-12`);let f=e(`div`,i);o(i,f),c(f,`flex flex-wrap items-start justify-between gap-3`);let p=e(`div`,f);o(f,p);let _=e(`h2`,p);o(p,_),c(_,`component-preview-title mt-2 mb-1 text-lg font-semibold`),o(_,l(`# `));let v=s(`rue:slot:anchor`);o(_,v),a(()=>{let e=d.title;t(()=>m(e,_,v))});let y=s(`rue:slot:anchor`);o(p,y),a(()=>{let n=d.summary?u(()=>{let n=r(),i=e(`p`,n);o(n,i),c(i,`m-0 text-sm opacity-70`);let l=s(`rue:slot:anchor`);return o(i,l),a(()=>{let e=d.summary;t(()=>m(e,i,l))}),n}):``;t(()=>m(n,p,y))});let b=s(`rue:component:anchor`);o(i,b),a(()=>{let e=h(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:g.value,onChange:e=>g.value=e,className:`mb-3 mt-4`});t(()=>m(e,i,b))});let C=s(`rue:slot:anchor`);return o(i,C),a(()=>{let e=g.value===`preview`?d.preview():u(()=>{let e=r(),n=s(`rue:component:anchor`);return o(e,n),a(()=>{let r=h(x,{className:`mt-2`,lang:`tsx`,code:d.code});t(()=>m(r,e,n))}),e});t(()=>m(e,i,C))}),i})},L=n=>u(i=>{let d=e(`div`,i);c(d,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let p=e(`table`,d);o(d,p),c(p,`table table-zebra`);let h=e(`thead`,p);o(p,h);let g=e(`tr`,h);o(h,g);let _=e(`th`,g);o(g,_),o(_,l(`属性`));let y=e(`th`,g);o(g,y),o(y,l(`说明`));let b=e(`th`,g);o(g,b),o(b,l(`类型`));let x=e(`th`,g);o(g,x),o(x,l(`默认值`));let S=e(`tbody`,p);o(p,S);let C=s(`rue:list:start`),w=s(`rue:list:end`);o(S,C),o(S,w);let T=new Map;return a(()=>{T=v({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,i,c,l,d)=>{m(u(()=>{let i=r(),c=e(`tr`,i);o(i,c),a(()=>{f(c,`key`,String(n.prop))});let l=e(`td`,c);o(c,l);let u=e(`code`,l);o(l,u);let d=s(`rue:slot:anchor`);o(u,d),a(()=>{let e=n.prop;t(()=>m(e,u,d))});let p=e(`td`,c);o(c,p);let h=s(`rue:slot:anchor`);o(p,h),a(()=>{let e=n.description;t(()=>m(e,p,h))});let g=e(`td`,c);o(c,g);let _=e(`code`,g);o(g,_);let v=s(`rue:slot:anchor`);o(_,v),a(()=>{let e=n.type;t(()=>m(e,_,v))});let y=e(`td`,c);o(c,y);let b=e(`code`,y);o(y,b);let x=s(`rue:slot:anchor`);return o(b,x),a(()=>{let e=n.defaultValue;t(()=>m(e,b,x))}),i}),i,c)}})}),d}),ae=[{prop:`current / defaultCurrent`,description:`受控或非受控的当前页码。`,type:`number`,defaultValue:`1`},{prop:`total`,description:`数据总条数；传入后自动计算页码按钮。`,type:`number`,defaultValue:`0`},{prop:`pageSize / defaultPageSize`,description:`每页条数，配合 total 共同决定总页数。`,type:`number`,defaultValue:`10`},{prop:`simple`,description:`切换为简洁模式；可传 { readOnly: true } 关闭中间输入。`,type:`boolean | { readOnly?: boolean }`,defaultValue:`false`},{prop:`showSizeChanger / pageSizeOptions`,description:`展示每页条数切换，并自定义可选项。`,type:`boolean / Array<number | string>`,defaultValue:`false / [10, 20, 50, 100]`},{prop:`showQuickJumper`,description:`展示快速跳页输入框；可传 { goButton } 自定义确认按钮。`,type:`boolean | { goButton?: any }`,defaultValue:`false`},{prop:`showTotal`,description:`自定义总数与区间文案。`,type:`(total: number, range: [number, number]) => any`,defaultValue:`-`},{prop:`itemRender`,description:`自定义页码、上一页、下一页、跳转项的渲染内容。`,type:`(page: number, type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next', original: any) => any`,defaultValue:`-`},{prop:`align / size / disabled`,description:`控制对齐、尺寸和禁用态。`,type:`'start' | 'center' | 'end' / 'xs' | 'sm' | 'md' | 'lg' | 'xl' / boolean`,defaultValue:`'start' / 'md' / false`},{prop:`showLessItems / hideOnSinglePage`,description:`控制页码折叠密度，以及单页时是否隐藏。`,type:`boolean`,defaultValue:`false`},{prop:`onChange / onShowSizeChange`,description:`页码变化、每页条数变化时的回调。`,type:`(page: number, pageSize: number) => void`,defaultValue:`-`}],R=()=>{let{stateRef:v,drivenPrimaryPage:x,drivenSecondaryPage:S,controlledPage:w,controlledPageSize:T,simplePage:E,simpleReadonlyPage:D,advancedPage:O,advancedPageSize:ee,advancedCompactPage:k,advancedCompactPageSize:A,customPage:j}=_(`useSetup:0:0:dup1`,()=>p(()=>{let e=_(`useRef:1:2`,()=>n());return e.current||={drivenPrimaryPage:_(`ref:1:3`,()=>i(2)),drivenSecondaryPage:_(`ref:1:4`,()=>i(6)),controlledPage:_(`ref:1:5`,()=>i(4)),controlledPageSize:_(`ref:1:6`,()=>i(10)),simplePage:_(`ref:1:7`,()=>i(2)),simpleReadonlyPage:_(`ref:1:8`,()=>i(2)),advancedPage:_(`ref:1:9`,()=>i(3)),advancedPageSize:_(`ref:1:10`,()=>i(20)),advancedCompactPage:_(`ref:1:11`,()=>i(3)),advancedCompactPageSize:_(`ref:1:12`,()=>i(10)),customPage:_(`ref:1:13`,()=>i(6))},{stateRef:e,drivenPrimaryPage:e.current.drivenPrimaryPage,drivenSecondaryPage:e.current.drivenSecondaryPage,controlledPage:e.current.controlledPage,controlledPageSize:e.current.controlledPageSize,simplePage:e.current.simplePage,simpleReadonlyPage:e.current.simpleReadonlyPage,advancedPage:e.current.advancedPage,advancedPageSize:e.current.advancedPageSize,advancedCompactPage:e.current.advancedCompactPage,advancedCompactPageSize:e.current.advancedCompactPageSize,customPage:e.current.customPage}}));return u(n=>{let i=r(),p=s(`rue:component:anchor`);return o(i,p),m(h(C,{children:u(()=>{let n=r(),i=e(`div`,n);o(n,i),c(i,`max-w-none prose prose-sm md:prose-base`);let u=e(`h1`,i);o(i,u),o(u,l(`Pagination 分页`));let p=e(`p`,i);o(i,p),c(p,`text-sm mt-3 mb-3`),o(p,l(`Pagination 现在同时支持两类用法：保留原有的静态组合模式，以及更贴近业务组件习惯的 的数据驱动模式。 视觉仍基于 Rue 当前的 join 与 btn 体系，但补齐了页码计算、受控/非受控、简单模式、页容量切换、快捷跳转和自定义渲染。`));let _=e(`h2`,i);o(i,_),o(_,l(`何时使用`));let v=e(`ul`,i);o(i,v);let C=e(`li`,v);o(v,C),o(C,l(`需要保留 Rue 现有 join + btn 分页视觉，但希望组件自己计算页码与跳转逻辑。`));let M=e(`li`,v);o(v,M),o(M,l(`需要受控/非受控分页、简单模式、页容量切换、快捷跳页等更完整的交互能力。`));let te=e(`li`,v);o(v,te),o(te,l(`需要在静态拼装和数据驱动两种模式间切换，并逐步迁移旧用法。`));let N=e(`h2`,i);o(i,N),c(N,`mt-8`),o(N,l(`静态组合模式`));let P=e(`p`,i);o(i,P),c(P,`text-sm opacity-80`),o(P,l(`适合完全自定义节点结构的场景。以下示例保留原有 compound 用法，只补齐说明与可复制代码。`));let ne=s(`rue:component:anchor`);o(i,ne),a(()=>{let e=h(I,{title:`Basic pagination`,summary:`最基础的静态拼装方式，适合完全由业务侧决定按钮内容和顺序。`,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(F,{className:`w-fit`,"data-testid":`pagination-basic`,children:[b(F.Item,{"aria-label":`Previous page`,children:`«`}),b(F.Item,{children:`1`}),b(F.Item,{children:`2`}),b(F.Item,{children:`3`}),b(F.Item,{"aria-label":`Next page`,children:`»`})]})})}),code:`<Pagination className="w-fit">
  <Pagination.Item aria-label="Previous page">«</Pagination.Item>
  <Pagination.Item>1</Pagination.Item>
  <Pagination.Item>2</Pagination.Item>
  <Pagination.Item>3</Pagination.Item>
  <Pagination.Item aria-label="Next page">»</Pagination.Item>
</Pagination>`});t(()=>m(e,i,ne))});let re=s(`rue:component:anchor`);o(i,re),a(()=>{let e=h(I,{title:`Vertical pagination`,summary:"继续沿用 `direction='vertical'`，适合侧栏步骤、目录或分段导航。",preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(F,{direction:`vertical`,className:`w-fit`,"data-testid":`pagination-vertical`,children:[b(F.Item,{children:`Overview`}),b(F.Item,{children:`Updates`}),b(F.Item,{children:`Logs`})]})})}),code:`<Pagination direction="vertical" className="w-fit">
  <Pagination.Item>Overview</Pagination.Item>
  <Pagination.Item>Updates</Pagination.Item>
  <Pagination.Item>Logs</Pagination.Item>
</Pagination>`});t(()=>m(e,i,re))});let ie=s(`rue:component:anchor`);o(i,ie),a(()=>{let e=h(I,{title:`Current and disabled items`,summary:"静态模式下仍可通过 `active`、`disabled` 和 `tag='a'` 控制语义与状态。",preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(F,{className:`w-fit`,"data-testid":`pagination-stateful`,children:[b(F.Item,{disabled:!0,children:`Prev`}),b(F.Item,{children:`1`}),b(F.Item,{active:!0,children:`2`}),b(F.Item,{children:`3`}),b(F.Item,{tag:`a`,href:`#next`,children:`Next`})]})})}),code:`<Pagination className="w-fit">
  <Pagination.Item disabled>Prev</Pagination.Item>
  <Pagination.Item>1</Pagination.Item>
  <Pagination.Item active>2</Pagination.Item>
  <Pagination.Item>3</Pagination.Item>
  <Pagination.Item tag="a" href="#next">Next</Pagination.Item>
</Pagination>`});t(()=>m(e,i,ie))});let R=s(`rue:component:anchor`);o(i,R),a(()=>{let e=h(I,{title:`Data driven basic`,summary:"传入 `total` 后由组件自动计算页码；这里改成受控版本，便于在设计页直接切换和观察当前页变化。",preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-4`,children:[b(F,{current:x.value,total:120,showTotal:(e,t)=>`${t[0]}-${t[1]} / ${e}`,onChange:e=>{x.value=e}}),b(F,{current:S.value,total:500,size:`sm`,align:`center`,onChange:e=>{S.value=e}}),y(`div`,{className:`text-sm opacity-70`,children:[`当前示例页码：默认尺寸第 `,x.value,` 页，小尺寸第`,` `,S.value,` 页`]})]})}),code:`const primaryPage = ref(2)
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
</>`});t(()=>m(e,i,R))});let z=s(`rue:component:anchor`);o(i,z),a(()=>{let e=h(I,{title:`Controlled pagination`,summary:"通过 `current` 与 `pageSize` 接管状态，适合和表格、请求参数或 URL 查询同步。",preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-4`,children:[b(F,{current:w.value,pageSize:T.value,total:185,showSizeChanger:!0,showTotal:(e,t)=>`${t[0]}-${t[1]} of ${e} items`,onChange:(e,t)=>{w.value=e,T.value=t},onShowSizeChange:(e,t)=>{w.value=e,T.value=t}}),y(`div`,{className:`text-sm opacity-70`,children:[`当前第 `,w.value,` 页，每页 `,T.value,` 条`]})]})}),code:`const current = ref(4)
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
/>`});t(()=>m(e,i,z))});let B=s(`rue:component:anchor`);o(i,B),a(()=>{let e=h(I,{title:`Simple mode`,summary:`简洁模式只保留上一页、页码输入和下一页，适合空间紧张的工具栏。`,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-4`,children:[b(F,{simple:!0,current:E.value,total:50,onChange:e=>{E.value=e}}),b(F,{simple:{readOnly:!0},current:D.value,total:50,onChange:e=>{D.value=e}}),b(F,{simple:!0,total:50,defaultCurrent:2,disabled:!0}),y(`div`,{className:`text-sm opacity-70`,children:[`当前示例页码：可输入第 `,E.value,` 页，只读第 `,D.value,` 页`]})]})}),code:`const simplePage = ref(2)
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
</>`});t(()=>m(e,i,B))});let V=s(`rue:component:anchor`);o(i,V),a(()=>{let e=h(I,{title:`Page size and quick jumper`,summary:`页容量切换与快捷跳页现在默认更紧凑，页数较少时输入框不会显得过宽。`,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-4`,children:[b(F,{current:O.value,pageSize:ee.value,total:120,showSizeChanger:!0,pageSizeOptions:[10,20,50],showQuickJumper:{goButton:`Go`},showTotal:(e,t)=>`${t[0]}-${t[1]} / ${e}`,onChange:(e,t)=>{O.value=e,ee.value=t},onShowSizeChange:(e,t)=>{O.value=e,ee.value=t}}),b(F,{current:k.value,pageSize:A.value,total:500,size:`sm`,showSizeChanger:!0,showQuickJumper:!0,align:`end`,onChange:(e,t)=>{k.value=e,A.value=t},onShowSizeChange:(e,t)=>{k.value=e,A.value=t}}),y(`div`,{className:`text-sm opacity-70`,children:[`紧凑版当前第 `,k.value,` 页，每页 `,A.value,` `,`条`]})]})}),code:`const current = ref(3)
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
</>`});t(()=>m(e,i,V))});let H=s(`rue:component:anchor`);o(i,H),a(()=>{let e=h(I,{title:`Custom item render`,summary:"通过 `itemRender` 重写上一页、下一页或跳转项文本，保留默认交互逻辑。",preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-4`,children:[b(F,{current:j.value,total:500,showLessItems:!0,onChange:e=>{j.value=e},itemRender:(e,t,n)=>t===`prev`?b(`span`,{className:`font-medium`,children:`Previous`}):t===`next`?b(`span`,{className:`font-medium`,children:`Next`}):n}),b(F,{total:8,defaultCurrent:1,hideOnSinglePage:!0}),y(`div`,{className:`text-sm opacity-70`,children:[`自定义文案示例当前位于第 `,j.value,` 页`]})]})}),code:`const current = ref(6)

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

<Pagination total={8} defaultCurrent={1} hideOnSinglePage />`});t(()=>m(e,i,H))});let U=e(`h2`,i);o(i,U),f(U,`id`,`pagination-api`),o(U,l(`API`));let oe=s(`rue:component:anchor`);o(i,oe),a(()=>{let e=h(L,{rows:ae});t(()=>m(e,i,oe))});let W=e(`h2`,i);o(i,W),o(W,l(`FAQ`));let G=e(`div`,i);o(i,G),c(G,`space-y-4 text-sm leading-6`);let K=e(`div`,G);o(G,K);let q=e(`h3`,K);o(K,q),c(q,`mb-1 text-base font-semibold`),o(q,l(`什么时候用静态组合，什么时候用数据驱动？`));let J=e(`p`,K);o(K,J),c(J,`m-0 opacity-80`),o(J,l("当按钮结构、文案和链接完全由业务自定义时，用 `Pagination.Item` 静态组合更直接；只要你已经有 `total`、`current`、`pageSize` 这些分页信息，优先使用数据驱动模式，省去页码计算与边界处理。"));let Y=e(`div`,G);o(G,Y);let X=e(`h3`,Y);o(Y,X),c(X,`mb-1 text-base font-semibold`),o(X,l("`simple` 适合什么场景？"));let Z=e(`p`,Y);o(Y,Z),c(Z,`m-0 opacity-80`),o(Z,l("`simple` 适合工具栏、卡片头部、移动端等横向空间有限的区域；如果只想展示当前页而不允许直接输入， 可以传 `simple="));let se=g(Z);o(Z,se),a(()=>{d(se,{readOnly:!0})}),o(Z,l("`。"));let Q=e(`div`,G);o(G,Q);let ce=e(`h3`,Q);o(Q,ce),c(ce,`mb-1 text-base font-semibold`),o(ce,l(`切换每页条数时会触发哪些回调？`));let le=e(`p`,Q);o(Q,le),c(le,`m-0 opacity-80`),o(le,l("`onShowSizeChange` 专门用于处理页容量变更；为了保持外部状态同步，`onChange` 也会收到新的页码和 `pageSize`，所以受控场景通常同时兼容这两个回调。"));let $=e(`div`,G);o(G,$);let ue=e(`h3`,$);o($,ue),c(ue,`mb-1 text-base font-semibold`),o(ue,l(`如何把上一页、下一页改成业务文案？`));let de=e(`p`,$);return o($,de),c(de,`m-0 opacity-80`),o(de,l("轻量替换可以用 `itemRender` 改写 `prev`、`next`、`jump-prev`、`jump-next` 的内容；如果还要替换 aria/title 文案，可以继续传 `locale`。")),n})}),i,p),i})};export{R as default};