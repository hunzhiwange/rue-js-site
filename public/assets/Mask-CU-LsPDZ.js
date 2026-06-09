import{$ as e,Ht as t,Q as n,Rt as r,Xt as i,Y as a,Z as o,ct as s,et as c,l,ot as u,qt as d,s as f,t as p}from"./vapor-runtime-aZAg0Qkw.js";import{a as m,n as h}from"./vapor-helpers-vapor-gtGwiIv0.js";import{a as g,i as _}from"./persistentSidebarPlayground-IkfbXpbu.js";import{t as v}from"./Code-5DOEyGxf.js";import{t as y}from"./tabs-CWmjyn0I.js";import{r as b}from"./SidebarPlaygroundDesign-CS11MI8e.js";var x=(e,t)=>t?`${e} ${t}`:e,S=e=>Array.isArray(e)?e.some(e=>S(e)):e!=null&&e!==!1,C=e=>{if(e)return e===`start`?`1`:e===`end`?`2`:e},w=e=>{switch(e){case`xs`:return`size-12`;case`sm`:case`small`:return`size-16`;case`md`:case`middle`:case`medium`:return`size-24`;case`lg`:case`large`:return`size-32`;case`xl`:return`size-40`;case`2xl`:return`size-52`;case`3xl`:return`size-64`;default:return}},T=e=>{switch(e){case`top`:return`object-top`;case`bottom`:return`object-bottom`;case`left`:return`object-left`;case`right`:return`object-right`;case`top-left`:return`object-left-top`;case`top-right`:return`object-right-top`;case`bottom-left`:return`object-left-bottom`;case`bottom-right`:return`object-right-bottom`;default:return e?`object-center`:void 0}},E=e=>{switch(e){case`contain`:return`object-contain`;case`fill`:return`object-fill`;case`none`:return`object-none`;case`scale-down`:return`object-scale-down`;default:return e?`object-cover`:void 0}},D=e=>{switch(e){case`neutral`:return`bg-neutral text-neutral-content`;case`primary`:return`bg-primary text-primary-content`;case`secondary`:return`bg-secondary text-secondary-content`;case`accent`:return`bg-accent text-accent-content`;case`info`:return`bg-info text-info-content`;case`success`:return`bg-success text-success-content`;case`warning`:return`bg-warning text-warning-content`;case`error`:return`bg-error text-error-content`;case`base`:return`bg-base-200 text-base-content`;default:return}},O=e=>{switch(e){case`neutral`:return`ring-neutral/35`;case`primary`:return`ring-primary/35`;case`secondary`:return`ring-secondary/35`;case`accent`:return`ring-accent/35`;case`info`:return`ring-info/35`;case`success`:return`ring-success/35`;case`warning`:return`ring-warning/35`;case`error`:return`ring-error/35`;default:return`ring-base-300`}},k=({shape:e,half:t,size:n,fit:r,position:i,tone:a,bordered:o,ring:s,shadow:c,interactive:l})=>{let u=`mask mask-${e??`squircle`}`,d=C(t),f=w(n),p=E(r),m=T(i),h=D(a);return d&&(u+=` mask-half-${d}`),f&&(u+=` ${f}`),p&&(u+=` ${p}`),m&&(u+=` ${m}`),h&&(u+=` ${h}`),o&&(u+=` ring-1 ring-inset ring-base-300/80`),s&&(u+=` ring-2 ring-offset-2 ring-offset-base-100 ${O(a)}`),c&&(u+=` shadow-xl shadow-base-content/10`),l&&(u+=` transition duration-200 ease-out hover:-translate-y-1 hover:shadow-2xl`),u},A=({as:e=`img`,shape:t=`squircle`,half:n,size:r,fit:i=`cover`,position:a,tone:o,bordered:s,ring:c,shadow:l,interactive:u,src:d,alt:f,imageProps:p,wrapperClassName:m,imageClassName:h,content:v,contentClassName:y,caption:b,captionClassName:C,className:w,children:T,...E})=>{let D=k({shape:t,half:n,size:r,fit:i,position:a,tone:o,bordered:s,ring:c,shadow:l,interactive:u}),O=v??T;if(d&&(S(O)||b!=null||m!=null||h!=null||y!=null||C!=null||e===`figure`)){let t=e===`img`?`figure`:e,n=t===`figure`?`figcaption`:`div`;return g(t,{...E,className:x(`relative inline-flex flex-col items-center gap-3`,m),children:[g(`div`,{className:`relative inline-flex`,children:[_(`img`,{...p,src:d,alt:f,className:x(x(D,w),h)}),S(O)?_(`div`,{className:x(`absolute inset-0 grid place-items-center p-4 text-center`,y),children:O}):null]}),b==null?null:_(n,{className:x(`text-center text-sm opacity-70`,C),children:b})]})}return _(e,{...E,src:d,alt:f,className:x(D,w),children:T})},j=`https://picsum.photos/320/320?grayscale`,M=`https://picsum.photos/420/240?grayscale`,N=`https://picsum.photos/240/420?grayscale`,P=[`squircle`,`heart`,`hexagon`,`hexagon-2`,`decagon`,`pentagon`,`diamond`,`square`,`circle`],F=[`star`,`star-2`],I=[`triangle`,`triangle-2`,`triangle-3`,`triangle-4`],L=[`xs`,`sm`,`md`,`lg`,`xl`,`2xl`],R=[{label:`cover`,fit:`cover`,src:M},{label:`contain`,fit:`contain`,src:N},{label:`fill`,fit:`fill`,src:M}],z=[{label:`Base`,tone:`base`},{label:`Primary`,tone:`primary`},{label:`Secondary`,tone:`secondary`},{label:`Accent`,tone:`accent`},{label:`Success`,tone:`success`},{label:`Warning`,tone:`warning`}],B=[{prop:`as`,description:`指定渲染标签，默认输出 img，也可渲染 div、figure 等任意宿主元素`,type:`string`,defaultValue:`'img'`},{prop:`shape`,description:`遮罩形状，覆盖当前支持的全部 mask-* 造型`,type:`'squircle' | 'heart' | 'hexagon' | 'hexagon-2' | 'decagon' | 'pentagon' | 'diamond' | 'square' | 'circle' | 'star' | 'star-2' | 'triangle' | 'triangle-2' | 'triangle-3' | 'triangle-4'`,defaultValue:`'squircle'`},{prop:`half`,description:`半边遮罩；支持数字写法，也支持 start / end 语义别名`,type:`'1' | '2' | 'start' | 'end'`,defaultValue:`-`},{prop:`size`,description:`语义尺寸，映射到一组常用正方形尺寸 class`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'`,defaultValue:`-`},{prop:`fit`,description:`媒体内容适配模式，输出 object-* 类名`,type:`'cover' | 'contain' | 'fill' | 'none' | 'scale-down'`,defaultValue:`'cover'`},{prop:`tone`,description:`给非图片宿主补齐背景与前景色，方便做头像牌、数字徽记和内容卡片`,type:`'base' | 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'`,defaultValue:`-`},{prop:`bordered`,description:`追加轻量内描边，适合浅背景图片或卡片`,type:`boolean`,defaultValue:`false`},{prop:`ring`,description:`追加 ring 与 offset，tone 存在时会自动继承对应的环颜色`,type:`boolean`,defaultValue:`false`},{prop:`shadow`,description:`追加投影，适合头像、封面和内容模块`,type:`boolean`,defaultValue:`false`},{prop:`interactive`,description:`追加轻量 hover 动效，方便做可点击素材墙或精选卡片`,type:`boolean`,defaultValue:`false`},{prop:`className`,description:`透传自定义样式类，可与组件生成的 mask 类叠加`,type:`string`,defaultValue:`-`}],V=r=>l(u=>{let d=e(`div`,u);s(d,`component-preview not-prose text-base-content my-6 lg:my-12`);let m=e(`div`,d);a(d,m),s(m,`flex flex-wrap items-start justify-between gap-3`);let h=e(`div`,m);a(m,h);let g=e(`h2`,h);a(h,g),s(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(g,c(`# `));let _=o(`rue:slot:anchor`);a(g,_),i(()=>{let e=r.title;t(()=>f(e,g,_))});let b=o(`rue:slot:anchor`);a(h,b),i(()=>{let c=r.summary?l(()=>{let c=n(),l=e(`p`,c);a(c,l),s(l,`m-0 text-sm opacity-70`);let u=o(`rue:slot:anchor`);return a(l,u),i(()=>{let e=r.summary;t(()=>f(e,l,u))}),c}):``;t(()=>f(c,h,b))});let x=o(`rue:component:anchor`);a(d,x),i(()=>{let e=p(y,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:r.tab.value,onChange:e=>r.tab.value=e,className:`mb-3 mt-4`});t(()=>f(e,d,x))});let S=o(`rue:slot:anchor`);return a(d,S),i(()=>{let e=r.tab.value===`preview`?r.preview():l(()=>{let e=n(),s=o(`rue:component:anchor`);return a(e,s),i(()=>{let n=p(v,{className:`mt-2`,lang:`tsx`,code:r.code});t(()=>f(n,e,s))}),e});t(()=>f(e,d,S))}),d}),H=r=>l(d=>{let p=e(`div`,d);s(p,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=e(`table`,p);a(p,m),s(m,`table table-zebra`);let g=e(`thead`,m);a(m,g);let _=e(`tr`,g);a(g,_);let v=e(`th`,_);a(_,v),a(v,c(`属性`));let y=e(`th`,_);a(_,y),a(y,c(`说明`));let b=e(`th`,_);a(_,b),a(b,c(`类型`));let x=e(`th`,_);a(_,x),a(x,c(`默认值`));let S=e(`tbody`,m);a(m,S);let C=o(`rue:list:start`),w=o(`rue:list:end`);a(S,C),a(S,w);let T=new Map;return i(()=>{T=h({items:r.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(r,s,c,d,p)=>{f(l(()=>{let s=n(),c=e(`tr`,s);a(s,c),i(()=>{u(c,`key`,String(r.prop))});let l=e(`td`,c);a(c,l);let d=e(`code`,l);a(l,d);let p=o(`rue:slot:anchor`);a(d,p),i(()=>{let e=r.prop;t(()=>f(e,d,p))});let m=e(`td`,c);a(c,m);let h=o(`rue:slot:anchor`);a(m,h),i(()=>{let e=r.description;t(()=>f(e,m,h))});let g=e(`td`,c);a(c,g);let _=e(`code`,g);a(g,_);let v=o(`rue:slot:anchor`);a(_,v),i(()=>{let e=r.type;t(()=>f(e,_,v))});let y=e(`td`,c);a(c,y);let b=e(`code`,y);a(y,b);let x=o(`rue:slot:anchor`);return a(b,x),i(()=>{let e=r.defaultValue;t(()=>f(e,b,x))}),s}),s,c)}})}),p}),U=()=>{let{tabShapes:u,tabStars:h,tabTriangles:v,tabHalf:y,tabSize:x,tabFit:S,tabTone:C}=m(`useSetup:0:0`,()=>d(()=>({tabShapes:m(`ref:1:0`,()=>r(`preview`)),tabStars:m(`ref:1:1`,()=>r(`preview`)),tabTriangles:m(`ref:1:2`,()=>r(`preview`)),tabHalf:m(`ref:1:3`,()=>r(`preview`)),tabSize:m(`ref:1:4`,()=>r(`preview`)),tabFit:m(`ref:1:5`,()=>r(`preview`)),tabTone:m(`ref:1:6`,()=>r(`preview`))})));return l(r=>{let d=n(),m=o(`rue:component:anchor`);return a(d,m),f(p(b,{children:l(()=>{let r=n(),l=e(`div`,r);a(r,l),s(l,`max-w-none prose prose-sm md:prose-base`);let d=e(`h1`,l);a(l,d),a(d,c(`Mask 形状裁切`));let m=e(`p`,l);a(l,m),s(m,`text-sm mt-3 mb-3`),a(m,c(`Mask 现在不只是原始 class 的薄封装。它保留 Rue 的轻量视觉路线，同时补上尺寸、fit、tone、ring 与交互态这些更适合实际页面搭建的语义化能力。`));let b=o(`rue:component:anchor`);a(l,b),i(()=>{let e=p(V,{title:`Core shapes`,summary:`保留原有基础形状示例，并统一到更整洁的卡片布局里。`,tab:u,preview:()=>_(`div`,{className:`card bg-base-100 shadow-sm`,children:_(`div`,{className:`card-body flex flex-wrap gap-4`,"data-testid":`mask-shapes-demo`,children:P.map(e=>_(A,{shape:e,src:j,alt:e,size:`md`,bordered:!0},e))})}),code:`<Mask shape="squircle" src="${j}" alt="squircle" size="md" bordered />
<Mask shape="heart" src="${j}" alt="heart" size="md" bordered />
<Mask shape="hexagon" src="${j}" alt="hexagon" size="md" bordered />
<Mask shape="hexagon-2" src="${j}" alt="hexagon-2" size="md" bordered />
<Mask shape="decagon" src="${j}" alt="decagon" size="md" bordered />
<Mask shape="pentagon" src="${j}" alt="pentagon" size="md" bordered />
<Mask shape="diamond" src="${j}" alt="diamond" size="md" bordered />
<Mask shape="square" src="${j}" alt="square" size="md" bordered />
<Mask shape="circle" src="${j}" alt="circle" size="md" bordered />`});t(()=>f(e,l,b))});let w=o(`rue:component:anchor`);a(l,w),i(()=>{let e=p(V,{title:`Star variants`,summary:`保留星形与粗星形示例，增加 ring 和 hover，适合头像墙或精选内容。`,tab:h,preview:()=>_(`div`,{className:`card bg-base-100 shadow-sm`,children:_(`div`,{className:`card-body flex flex-wrap gap-5`,children:F.map(e=>_(A,{shape:e,src:j,alt:e,size:`lg`,ring:!0,shadow:!0,interactive:!0},e))})}),code:`<Mask shape="star" src="${j}" alt="star" size="lg" ring shadow interactive />
<Mask shape="star-2" src="${j}" alt="star-2" size="lg" ring shadow interactive />`});t(()=>f(e,l,w))});let T=o(`rue:component:anchor`);a(l,T),i(()=>{let e=p(V,{title:`Triangle variants`,summary:`保留四向三角形示例，并通过统一尺寸让方向差异更好观察。`,tab:v,preview:()=>_(`div`,{className:`card bg-base-100 shadow-sm`,children:_(`div`,{className:`card-body flex flex-wrap gap-5`,children:I.map(e=>_(A,{shape:e,src:j,alt:e,size:`lg`,bordered:!0,shadow:!0},e))})}),code:`<Mask shape="triangle" src="${j}" alt="triangle" size="lg" bordered shadow />
<Mask shape="triangle-2" src="${j}" alt="triangle-2" size="lg" bordered shadow />
<Mask shape="triangle-3" src="${j}" alt="triangle-3" size="lg" bordered shadow />
<Mask shape="triangle-4" src="${j}" alt="triangle-4" size="lg" bordered shadow />`});t(()=>f(e,l,T))});let E=o(`rue:component:anchor`);a(l,E),i(()=>{let e=p(V,{title:`Half modifiers and arbitrary host`,summary:`保留 half modifier 与任意宿主演示，并补上 start / end 语义别名。`,tab:y,preview:()=>_(`div`,{className:`card bg-base-100 shadow-sm`,children:g(`div`,{className:`card-body flex flex-wrap items-center gap-6`,children:[_(A,{shape:`star`,half:`1`,src:j,alt:`star half 1`,size:`lg`,ring:!0}),_(A,{shape:`star`,half:`2`,src:j,alt:`star half 2`,size:`lg`,ring:!0}),_(A,{shape:`diamond`,half:`start`,src:j,alt:`diamond start`,size:`lg`,bordered:!0}),_(A,{as:`div`,shape:`diamond`,tone:`primary`,size:`lg`,ring:!0,shadow:!0,className:`grid place-content-center text-sm font-semibold uppercase tracking-[0.2em]`,"data-testid":`mask-host-demo`,children:`Host`})]})}),code:`<Mask shape="star" half="1" src="${j}" alt="star half 1" size="lg" ring />
<Mask shape="star" half="2" src="${j}" alt="star half 2" size="lg" ring />
<Mask shape="diamond" half="start" src="${j}" alt="diamond start" size="lg" bordered />
<Mask
  as="div"
  shape="diamond"
  tone="primary"
  size="lg"
  ring
  shadow
  className="grid place-content-center text-sm font-semibold uppercase tracking-[0.2em]"
>
  Host
</Mask>`});t(()=>f(e,l,E))});let D=o(`rue:component:anchor`);a(l,D),i(()=>{let e=p(V,{title:`Semantic sizes`,summary:`新增尺寸别名，常见头像和封面尺寸不再需要每次都手写宽高 class。`,tab:x,preview:()=>_(`div`,{className:`card bg-base-100 shadow-sm`,children:_(`div`,{className:`card-body flex flex-wrap items-end gap-5`,children:L.map(e=>g(`div`,{className:`flex flex-col items-center gap-3 text-xs uppercase tracking-[0.18em] opacity-80`,children:[_(A,{shape:`circle`,src:j,alt:e,size:e,ring:!0}),_(`span`,{children:e})]},e))})}),code:`<Mask shape="circle" src="${j}" alt="xs" size="xs" ring />
<Mask shape="circle" src="${j}" alt="sm" size="sm" ring />
<Mask shape="circle" src="${j}" alt="md" size="md" ring />
<Mask shape="circle" src="${j}" alt="lg" size="lg" ring />
<Mask shape="circle" src="${j}" alt="xl" size="xl" ring />
<Mask shape="circle" src="${j}" alt="2xl" size="2xl" ring />`});t(()=>f(e,l,D))});let O=o(`rue:component:anchor`);a(l,O),i(()=>{let e=p(V,{title:`Fit modes`,summary:`新增 fit 语义，宽图、竖图和封面图都能直接得到明确的裁切策略。`,tab:S,preview:()=>_(`div`,{className:`card bg-base-100 shadow-sm`,children:_(`div`,{className:`card-body grid gap-6 md:grid-cols-3`,children:R.map(e=>g(`div`,{className:`space-y-3`,children:[_(`div`,{className:`text-xs font-semibold uppercase tracking-[0.18em] opacity-70`,children:e.label}),_(`div`,{className:`rounded-box bg-base-200 p-4`,children:_(A,{shape:`hexagon-2`,src:e.src,alt:e.label,size:`xl`,fit:e.fit,bordered:!0,className:`mx-auto`})})]},e.label))})}),code:`<Mask shape="hexagon-2" src="${M}" alt="cover" size="xl" fit="cover" bordered className="mx-auto" />
<Mask shape="hexagon-2" src="${N}" alt="contain" size="xl" fit="contain" bordered className="mx-auto" />
<Mask shape="hexagon-2" src="${M}" alt="fill" size="xl" fit="fill" bordered className="mx-auto" />`});t(()=>f(e,l,O))});let k=o(`rue:component:anchor`);a(l,k),i(()=>{let e=p(V,{title:`Tone surfaces`,summary:`新增 tone、ring、shadow 组合后，Mask 也能承担数字徽记、内容牌和亮点卡片的职责。`,tab:C,preview:()=>_(`div`,{className:`card bg-base-100 shadow-sm`,children:g(`div`,{className:`card-body gap-6`,children:[_(`div`,{className:`flex flex-wrap gap-4`,children:z.map(e=>_(A,{as:`div`,shape:`squircle`,tone:e.tone,size:`md`,ring:!0,className:`grid place-content-center text-center text-xs font-semibold uppercase tracking-[0.18em]`,children:e.label},e.label))}),g(`div`,{className:`grid gap-4 md:grid-cols-3`,children:[_(A,{as:`div`,shape:`hexagon`,tone:`secondary`,size:`xl`,ring:!0,shadow:!0,interactive:!0,className:`mx-auto grid place-content-center p-6 text-center`,children:g(`div`,{className:`space-y-1`,children:[_(`div`,{className:`text-3xl font-black`,children:`24`}),_(`div`,{className:`text-xs uppercase tracking-[0.22em] opacity-80`,children:`Launches`})]})}),_(A,{as:`div`,shape:`diamond`,tone:`accent`,size:`xl`,ring:!0,shadow:!0,className:`mx-auto grid place-content-center p-6 text-center`,children:g(`div`,{className:`space-y-1`,children:[_(`div`,{className:`text-sm font-semibold uppercase tracking-[0.18em]`,children:`Featured`}),_(`div`,{className:`text-xs opacity-80`,children:`Rue Studio`})]})}),_(A,{as:`div`,shape:`circle`,tone:`success`,size:`xl`,ring:!0,shadow:!0,className:`mx-auto grid place-content-center p-6 text-center`,children:g(`div`,{className:`space-y-1`,children:[_(`div`,{className:`text-2xl font-black`,children:`98%`}),_(`div`,{className:`text-xs uppercase tracking-[0.18em] opacity-80`,children:`Approval`})]})})]})]})}),code:`<div className="flex flex-wrap gap-4">
  <Mask
    as="div"
    shape="squircle"
    tone="base"
    size="md"
    ring
    className="grid place-content-center text-center text-xs font-semibold uppercase tracking-[0.18em]"
  >
    Base
  </Mask>
  <Mask
    as="div"
    shape="squircle"
    tone="primary"
    size="md"
    ring
    className="grid place-content-center text-center text-xs font-semibold uppercase tracking-[0.18em]"
  >
    Primary
  </Mask>
  <Mask
    as="div"
    shape="squircle"
    tone="secondary"
    size="md"
    ring
    className="grid place-content-center text-center text-xs font-semibold uppercase tracking-[0.18em]"
  >
    Secondary
  </Mask>
  <Mask
    as="div"
    shape="squircle"
    tone="accent"
    size="md"
    ring
    className="grid place-content-center text-center text-xs font-semibold uppercase tracking-[0.18em]"
  >
    Accent
  </Mask>
  <Mask
    as="div"
    shape="squircle"
    tone="success"
    size="md"
    ring
    className="grid place-content-center text-center text-xs font-semibold uppercase tracking-[0.18em]"
  >
    Success
  </Mask>
  <Mask
    as="div"
    shape="squircle"
    tone="warning"
    size="md"
    ring
    className="grid place-content-center text-center text-xs font-semibold uppercase tracking-[0.18em]"
  >
    Warning
  </Mask>
</div>

<div className="grid gap-4 md:grid-cols-3">
  <Mask
    as="div"
    shape="hexagon"
    tone="secondary"
    size="xl"
    ring
    shadow
    interactive
    className="mx-auto grid place-content-center p-6 text-center"
  >
    <div className="space-y-1">
      <div className="text-3xl font-black">24</div>
      <div className="text-xs uppercase tracking-[0.22em] opacity-80">Launches</div>
    </div>
  </Mask>

  <Mask
    as="div"
    shape="diamond"
    tone="accent"
    size="xl"
    ring
    shadow
    className="mx-auto grid place-content-center p-6 text-center"
  >
    <div className="space-y-1">
      <div className="text-sm font-semibold uppercase tracking-[0.18em]">
        Featured
      </div>
      <div className="text-xs opacity-80">Rue Studio</div>
    </div>
  </Mask>

  <Mask
    as="div"
    shape="circle"
    tone="success"
    size="xl"
    ring
    shadow
    className="mx-auto grid place-content-center p-6 text-center"
  >
    <div className="space-y-1">
      <div className="text-2xl font-black">98%</div>
      <div className="text-xs uppercase tracking-[0.18em] opacity-80">Approval</div>
    </div>
  </Mask>
</div>`});t(()=>f(e,l,k))});let U=e(`div`,l);a(l,U),s(U,`my-8`);let W=e(`h2`,U);a(U,W),s(W,`mt-0`),a(W,c(`API`));let G=o(`rue:component:anchor`);return a(U,G),i(()=>{let e=p(H,{rows:B});t(()=>f(e,U,G))}),r})}),d,m),d})};export{U as default};