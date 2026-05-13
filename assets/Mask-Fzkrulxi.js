import{F as e,G as t,I as n,L as r,M as i,P as a,U as o,_t as s,bt as c,c as l,lt as u,pt as d,t as f,u as p}from"./vapor-runtime-D3a-68js.js";import{a as m,n as h}from"./vapor-helpers-vapor-DGjYaAZX.js";import{n as g,t as _}from"./src-BfQKH6_d.js";import{n as v}from"./SidebarPlaygroundDesign-vpnUkFCM.js";import{t as y}from"./Code-2C2psoH3.js";import{t as b}from"./tabs-BgQmsOey.js";var x=(e,t)=>t?`${e} ${t}`:e,S=e=>Array.isArray(e)?e.some(e=>S(e)):e!=null&&e!==!1,C=e=>{if(e)return e===`start`?`1`:e===`end`?`2`:e},w=e=>{switch(e){case`xs`:return`size-12`;case`sm`:case`small`:return`size-16`;case`md`:case`middle`:case`medium`:return`size-24`;case`lg`:case`large`:return`size-32`;case`xl`:return`size-40`;case`2xl`:return`size-52`;case`3xl`:return`size-64`;default:return}},T=e=>{switch(e){case`top`:return`object-top`;case`bottom`:return`object-bottom`;case`left`:return`object-left`;case`right`:return`object-right`;case`top-left`:return`object-left-top`;case`top-right`:return`object-right-top`;case`bottom-left`:return`object-left-bottom`;case`bottom-right`:return`object-right-bottom`;default:return e?`object-center`:void 0}},E=e=>{switch(e){case`contain`:return`object-contain`;case`fill`:return`object-fill`;case`none`:return`object-none`;case`scale-down`:return`object-scale-down`;default:return e?`object-cover`:void 0}},D=e=>{switch(e){case`neutral`:return`bg-neutral text-neutral-content`;case`primary`:return`bg-primary text-primary-content`;case`secondary`:return`bg-secondary text-secondary-content`;case`accent`:return`bg-accent text-accent-content`;case`info`:return`bg-info text-info-content`;case`success`:return`bg-success text-success-content`;case`warning`:return`bg-warning text-warning-content`;case`error`:return`bg-error text-error-content`;case`base`:return`bg-base-200 text-base-content`;default:return}},O=e=>{switch(e){case`neutral`:return`ring-neutral/35`;case`primary`:return`ring-primary/35`;case`secondary`:return`ring-secondary/35`;case`accent`:return`ring-accent/35`;case`info`:return`ring-info/35`;case`success`:return`ring-success/35`;case`warning`:return`ring-warning/35`;case`error`:return`ring-error/35`;default:return`ring-base-300`}},k=({shape:e,half:t,size:n,fit:r,position:i,tone:a,bordered:o,ring:s,shadow:c,interactive:l})=>{let u=`mask mask-${e??`squircle`}`,d=C(t),f=w(n),p=E(r),m=T(i),h=D(a);return d&&(u+=` mask-half-${d}`),f&&(u+=` ${f}`),p&&(u+=` ${p}`),m&&(u+=` ${m}`),h&&(u+=` ${h}`),o&&(u+=` ring-1 ring-inset ring-base-300/80`),s&&(u+=` ring-2 ring-offset-2 ring-offset-base-100 ${O(a)}`),c&&(u+=` shadow-xl shadow-base-content/10`),l&&(u+=` transition duration-200 ease-out hover:-translate-y-1 hover:shadow-2xl`),u},A=({as:e=`img`,shape:t=`squircle`,half:n,size:r,fit:i=`cover`,position:a,tone:o,bordered:s,ring:c,shadow:l,interactive:u,src:d,alt:f,imageProps:p,wrapperClassName:m,imageClassName:h,content:v,contentClassName:y,caption:b,captionClassName:C,className:w,children:T,...E})=>{let D=k({shape:t,half:n,size:r,fit:i,position:a,tone:o,bordered:s,ring:c,shadow:l,interactive:u}),O=v??T;if(d&&(S(O)||b!=null||m!=null||h!=null||y!=null||C!=null||e===`figure`)){let t=e===`img`?`figure`:e,n=t===`figure`?`figcaption`:`div`;return g(t,{...E,className:x(`relative inline-flex flex-col items-center gap-3`,m),children:[g(`div`,{className:`relative inline-flex`,children:[_(`img`,{...p,src:d,alt:f,className:x(x(D,w),h)}),S(O)?_(`div`,{className:x(`absolute inset-0 grid place-items-center p-4 text-center`,y),children:O}):null]}),b==null?null:_(n,{className:x(`text-center text-sm opacity-70`,C),children:b})]})}return _(e,{...E,src:d,alt:f,className:x(D,w),children:T})},j=`https://picsum.photos/320/320?grayscale`,M=`https://picsum.photos/420/240?grayscale`,N=`https://picsum.photos/240/420?grayscale`,P=[`squircle`,`heart`,`hexagon`,`hexagon-2`,`decagon`,`pentagon`,`diamond`,`square`,`circle`],F=[`star`,`star-2`],I=[`triangle`,`triangle-2`,`triangle-3`,`triangle-4`],L=[`xs`,`sm`,`md`,`lg`,`xl`,`2xl`],R=[{label:`cover`,fit:`cover`,src:M},{label:`contain`,fit:`contain`,src:N},{label:`fill`,fit:`fill`,src:M}],z=[{label:`Base`,tone:`base`},{label:`Primary`,tone:`primary`},{label:`Secondary`,tone:`secondary`},{label:`Accent`,tone:`accent`},{label:`Success`,tone:`success`},{label:`Warning`,tone:`warning`}],B=[{prop:`as`,description:`指定渲染标签，默认输出 img，也可渲染 div、figure 等任意宿主元素`,type:`string`,defaultValue:`'img'`},{prop:`shape`,description:`遮罩形状，覆盖当前支持的全部 mask-* 造型`,type:`'squircle' | 'heart' | 'hexagon' | 'hexagon-2' | 'decagon' | 'pentagon' | 'diamond' | 'square' | 'circle' | 'star' | 'star-2' | 'triangle' | 'triangle-2' | 'triangle-3' | 'triangle-4'`,defaultValue:`'squircle'`},{prop:`half`,description:`半边遮罩；支持数字写法，也支持 start / end 语义别名`,type:`'1' | '2' | 'start' | 'end'`,defaultValue:`-`},{prop:`size`,description:`语义尺寸，映射到一组常用正方形尺寸 class`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'`,defaultValue:`-`},{prop:`fit`,description:`媒体内容适配模式，输出 object-* 类名`,type:`'cover' | 'contain' | 'fill' | 'none' | 'scale-down'`,defaultValue:`'cover'`},{prop:`tone`,description:`给非图片宿主补齐背景与前景色，方便做头像牌、数字徽记和内容卡片`,type:`'base' | 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'`,defaultValue:`-`},{prop:`bordered`,description:`追加轻量内描边，适合浅背景图片或卡片`,type:`boolean`,defaultValue:`false`},{prop:`ring`,description:`追加 ring 与 offset，tone 存在时会自动继承对应的环颜色`,type:`boolean`,defaultValue:`false`},{prop:`shadow`,description:`追加投影，适合头像、封面和内容模块`,type:`boolean`,defaultValue:`false`},{prop:`interactive`,description:`追加轻量 hover 动效，方便做可点击素材墙或精选卡片`,type:`boolean`,defaultValue:`false`},{prop:`className`,description:`透传自定义样式类，可与组件生成的 mask 类叠加`,type:`string`,defaultValue:`-`}],V=o=>p(()=>{let s=n(`div`);t(s,`component-preview not-prose text-base-content my-6 lg:my-12`);let u=n(`div`);i(s,u),t(u,`flex flex-wrap items-start justify-between gap-3`);let m=n(`div`);i(u,m);let h=n(`h2`);i(m,h),t(h,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(h,r(`# `));let g=a(`rue:slot:anchor`);i(h,g),c(()=>{let e=o.title;d(()=>l(e,h,g))});let _=a(`rue:slot:anchor`);i(m,_),c(()=>{let r=o.summary?p(()=>{let r=e(),s=n(`p`);i(r,s),t(s,`m-0 text-sm opacity-70`);let u=a(`rue:slot:anchor`);return i(s,u),c(()=>{let e=o.summary;d(()=>l(e,s,u))}),r}):``;d(()=>l(r,m,_))});let v=a(`rue:component:anchor`);i(s,v),c(()=>{let e=f(b,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:o.tab.value,onChange:e=>o.tab.value=e,className:`mb-3 mt-4`});d(()=>l(e,s,v))});let x=a(`rue:slot:anchor`);return i(s,x),c(()=>{let t=o.tab.value===`preview`?o.preview():p(()=>{let t=e(),n=a(`rue:component:anchor`);return i(t,n),c(()=>{let e=f(y,{className:`mt-2`,lang:`tsx`,code:o.code});d(()=>l(e,t,n))}),t});d(()=>l(t,s,x))}),s}),H=s=>p(()=>{let u=n(`div`);t(u,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=n(`table`);i(u,f),t(f,`table table-zebra`);let m=n(`thead`);i(f,m);let g=n(`tr`);i(m,g);let _=n(`th`);i(g,_),i(_,r(`属性`));let v=n(`th`);i(g,v),i(v,r(`说明`));let y=n(`th`);i(g,y),i(y,r(`类型`));let b=n(`th`);i(g,b),i(b,r(`默认值`));let x=n(`tbody`);i(f,x);let S=a(`rue:list:start`),C=a(`rue:list:end`);i(x,S),i(x,C);let w=new Map;return c(()=>{w=h({items:s.rows||[],getKey:(e,t)=>e.prop,elements:w,parent:x,before:C,singleRoot:!0,trackIndex:!1,start:S,renderItem:(t,r,s,u,f)=>{l(p(()=>{let r=e(),s=n(`tr`);i(r,s),c(()=>{o(s,`key`,String(t.prop))});let u=n(`td`);i(s,u);let f=n(`code`);i(u,f);let p=a(`rue:slot:anchor`);i(f,p),c(()=>{let e=t.prop;d(()=>l(e,f,p))});let m=n(`td`);i(s,m);let h=a(`rue:slot:anchor`);i(m,h),c(()=>{let e=t.description;d(()=>l(e,m,h))});let g=n(`td`);i(s,g);let _=n(`code`);i(g,_);let v=a(`rue:slot:anchor`);i(_,v),c(()=>{let e=t.type;d(()=>l(e,_,v))});let y=n(`td`);i(s,y);let b=n(`code`);i(y,b);let x=a(`rue:slot:anchor`);return i(b,x),c(()=>{let e=t.defaultValue;d(()=>l(e,b,x))}),r}),r,s)}})}),u}),U=()=>{let{tabShapes:h,tabStars:y,tabTriangles:b,tabHalf:x,tabSize:S,tabFit:C,tabTone:w}=m(`useSetup:0:0`,()=>s(()=>({tabShapes:m(`ref:1:0`,()=>u(`preview`)),tabStars:m(`ref:1:1`,()=>u(`preview`)),tabTriangles:m(`ref:1:2`,()=>u(`preview`)),tabHalf:m(`ref:1:3`,()=>u(`preview`)),tabSize:m(`ref:1:4`,()=>u(`preview`)),tabFit:m(`ref:1:5`,()=>u(`preview`)),tabTone:m(`ref:1:6`,()=>u(`preview`))})));return p(()=>{let s=e(),u=a(`rue:component:anchor`);return i(s,u),l(f(v,{children:p(()=>{let s=e(),u=n(`div`);i(s,u),t(u,`max-w-none prose prose-sm md:prose-base`);let p=n(`h1`);i(u,p),i(p,r(`Mask 形状裁切`));let m=n(`p`);i(u,m),t(m,`text-sm mt-3 mb-3`),i(m,r(`Mask 现在不只是原始 class 的薄封装。它保留 Rue 的轻量视觉路线，同时补上尺寸、fit、tone、ring 与交互态这些更适合实际页面搭建的语义化能力。`));let v=n(`div`);i(u,v),t(v,`text-sm`);let T=n(`a`);i(v,T),o(T,`href`,`https://daisyui.com/components/mask/`),o(T,`target`,`_blank`),o(T,`rel`,`noreferrer`),i(T,r(`查看 Mask 静态样式来源`));let E=a(`rue:component:anchor`);i(u,E),c(()=>{let e=f(V,{title:`Core shapes`,summary:`保留原有基础形状示例，并统一到更整洁的卡片布局里。`,tab:h,preview:()=>_(`div`,{className:`card bg-base-100 shadow-sm`,children:_(`div`,{className:`card-body flex flex-wrap gap-4`,"data-testid":`mask-shapes-demo`,children:P.map(e=>_(A,{shape:e,src:j,alt:e,size:`md`,bordered:!0},e))})}),code:`<Mask shape="squircle" src="${j}" alt="squircle" size="md" bordered />
<Mask shape="heart" src="${j}" alt="heart" size="md" bordered />
<Mask shape="hexagon" src="${j}" alt="hexagon" size="md" bordered />
<Mask shape="hexagon-2" src="${j}" alt="hexagon-2" size="md" bordered />
<Mask shape="decagon" src="${j}" alt="decagon" size="md" bordered />
<Mask shape="pentagon" src="${j}" alt="pentagon" size="md" bordered />
<Mask shape="diamond" src="${j}" alt="diamond" size="md" bordered />
<Mask shape="square" src="${j}" alt="square" size="md" bordered />
<Mask shape="circle" src="${j}" alt="circle" size="md" bordered />`});d(()=>l(e,u,E))});let D=a(`rue:component:anchor`);i(u,D),c(()=>{let e=f(V,{title:`Star variants`,summary:`保留星形与粗星形示例，增加 ring 和 hover，适合头像墙或精选内容。`,tab:y,preview:()=>_(`div`,{className:`card bg-base-100 shadow-sm`,children:_(`div`,{className:`card-body flex flex-wrap gap-5`,children:F.map(e=>_(A,{shape:e,src:j,alt:e,size:`lg`,ring:!0,shadow:!0,interactive:!0},e))})}),code:`<Mask shape="star" src="${j}" alt="star" size="lg" ring shadow interactive />
<Mask shape="star-2" src="${j}" alt="star-2" size="lg" ring shadow interactive />`});d(()=>l(e,u,D))});let O=a(`rue:component:anchor`);i(u,O),c(()=>{let e=f(V,{title:`Triangle variants`,summary:`保留四向三角形示例，并通过统一尺寸让方向差异更好观察。`,tab:b,preview:()=>_(`div`,{className:`card bg-base-100 shadow-sm`,children:_(`div`,{className:`card-body flex flex-wrap gap-5`,children:I.map(e=>_(A,{shape:e,src:j,alt:e,size:`lg`,bordered:!0,shadow:!0},e))})}),code:`<Mask shape="triangle" src="${j}" alt="triangle" size="lg" bordered shadow />
<Mask shape="triangle-2" src="${j}" alt="triangle-2" size="lg" bordered shadow />
<Mask shape="triangle-3" src="${j}" alt="triangle-3" size="lg" bordered shadow />
<Mask shape="triangle-4" src="${j}" alt="triangle-4" size="lg" bordered shadow />`});d(()=>l(e,u,O))});let k=a(`rue:component:anchor`);i(u,k),c(()=>{let e=f(V,{title:`Half modifiers and arbitrary host`,summary:`保留 half modifier 与任意宿主演示，并补上 start / end 语义别名。`,tab:x,preview:()=>_(`div`,{className:`card bg-base-100 shadow-sm`,children:g(`div`,{className:`card-body flex flex-wrap items-center gap-6`,children:[_(A,{shape:`star`,half:`1`,src:j,alt:`star half 1`,size:`lg`,ring:!0}),_(A,{shape:`star`,half:`2`,src:j,alt:`star half 2`,size:`lg`,ring:!0}),_(A,{shape:`diamond`,half:`start`,src:j,alt:`diamond start`,size:`lg`,bordered:!0}),_(A,{as:`div`,shape:`diamond`,tone:`primary`,size:`lg`,ring:!0,shadow:!0,className:`grid place-content-center text-sm font-semibold uppercase tracking-[0.2em]`,"data-testid":`mask-host-demo`,children:`Host`})]})}),code:`<Mask shape="star" half="1" src="${j}" alt="star half 1" size="lg" ring />
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
</Mask>`});d(()=>l(e,u,k))});let U=a(`rue:component:anchor`);i(u,U),c(()=>{let e=f(V,{title:`Semantic sizes`,summary:`新增尺寸别名，常见头像和封面尺寸不再需要每次都手写宽高 class。`,tab:S,preview:()=>_(`div`,{className:`card bg-base-100 shadow-sm`,children:_(`div`,{className:`card-body flex flex-wrap items-end gap-5`,children:L.map(e=>g(`div`,{className:`flex flex-col items-center gap-3 text-xs uppercase tracking-[0.18em] opacity-80`,children:[_(A,{shape:`circle`,src:j,alt:e,size:e,ring:!0}),_(`span`,{children:e})]},e))})}),code:`<Mask shape="circle" src="${j}" alt="xs" size="xs" ring />
<Mask shape="circle" src="${j}" alt="sm" size="sm" ring />
<Mask shape="circle" src="${j}" alt="md" size="md" ring />
<Mask shape="circle" src="${j}" alt="lg" size="lg" ring />
<Mask shape="circle" src="${j}" alt="xl" size="xl" ring />
<Mask shape="circle" src="${j}" alt="2xl" size="2xl" ring />`});d(()=>l(e,u,U))});let W=a(`rue:component:anchor`);i(u,W),c(()=>{let e=f(V,{title:`Fit modes`,summary:`新增 fit 语义，宽图、竖图和封面图都能直接得到明确的裁切策略。`,tab:C,preview:()=>_(`div`,{className:`card bg-base-100 shadow-sm`,children:_(`div`,{className:`card-body grid gap-6 md:grid-cols-3`,children:R.map(e=>g(`div`,{className:`space-y-3`,children:[_(`div`,{className:`text-xs font-semibold uppercase tracking-[0.18em] opacity-70`,children:e.label}),_(`div`,{className:`rounded-box bg-base-200 p-4`,children:_(A,{shape:`hexagon-2`,src:e.src,alt:e.label,size:`xl`,fit:e.fit,bordered:!0,className:`mx-auto`})})]},e.label))})}),code:`<Mask shape="hexagon-2" src="${M}" alt="cover" size="xl" fit="cover" bordered className="mx-auto" />
<Mask shape="hexagon-2" src="${N}" alt="contain" size="xl" fit="contain" bordered className="mx-auto" />
<Mask shape="hexagon-2" src="${M}" alt="fill" size="xl" fit="fill" bordered className="mx-auto" />`});d(()=>l(e,u,W))});let G=a(`rue:component:anchor`);i(u,G),c(()=>{let e=f(V,{title:`Tone surfaces`,summary:`新增 tone、ring、shadow 组合后，Mask 也能承担数字徽记、内容牌和亮点卡片的职责。`,tab:w,preview:()=>_(`div`,{className:`card bg-base-100 shadow-sm`,children:g(`div`,{className:`card-body gap-6`,children:[_(`div`,{className:`flex flex-wrap gap-4`,children:z.map(e=>_(A,{as:`div`,shape:`squircle`,tone:e.tone,size:`md`,ring:!0,className:`grid place-content-center text-center text-xs font-semibold uppercase tracking-[0.18em]`,children:e.label},e.label))}),g(`div`,{className:`grid gap-4 md:grid-cols-3`,children:[_(A,{as:`div`,shape:`hexagon`,tone:`secondary`,size:`xl`,ring:!0,shadow:!0,interactive:!0,className:`mx-auto grid place-content-center p-6 text-center`,children:g(`div`,{className:`space-y-1`,children:[_(`div`,{className:`text-3xl font-black`,children:`24`}),_(`div`,{className:`text-xs uppercase tracking-[0.22em] opacity-80`,children:`Launches`})]})}),_(A,{as:`div`,shape:`diamond`,tone:`accent`,size:`xl`,ring:!0,shadow:!0,className:`mx-auto grid place-content-center p-6 text-center`,children:g(`div`,{className:`space-y-1`,children:[_(`div`,{className:`text-sm font-semibold uppercase tracking-[0.18em]`,children:`Featured`}),_(`div`,{className:`text-xs opacity-80`,children:`Rue Studio`})]})}),_(A,{as:`div`,shape:`circle`,tone:`success`,size:`xl`,ring:!0,shadow:!0,className:`mx-auto grid place-content-center p-6 text-center`,children:g(`div`,{className:`space-y-1`,children:[_(`div`,{className:`text-2xl font-black`,children:`98%`}),_(`div`,{className:`text-xs uppercase tracking-[0.18em] opacity-80`,children:`Approval`})]})})]})]})}),code:`<div className="flex flex-wrap gap-4">
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
</div>`});d(()=>l(e,u,G))});let K=n(`div`);i(u,K),t(K,`my-8`);let q=n(`h2`);i(K,q),t(q,`mt-0`),i(q,r(`API`));let J=a(`rue:component:anchor`);return i(K,J),c(()=>{let e=f(H,{rows:B});d(()=>l(e,K,J))}),s})}),s,u),s})};export{U as default};