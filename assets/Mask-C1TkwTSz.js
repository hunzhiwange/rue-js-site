import{F as e,H as t,I as n,L as r,N as i,P as a,W as o,Y as s,c,j as l,pt as u,rt as d,t as f,u as p,ut as m}from"./vapor-runtime-CKndxKFn.js";import{a as h,n as g}from"./vapor-helpers-vapor-yxlhW-_4.js";import{n as _,t as v}from"./src-CqIWk1va.js";import{n as y}from"./SidebarPlaygroundDesign-CBV-3y9s.js";import{t as b}from"./Code-B1JFTu6m.js";import{t as x}from"./tabs-BbiCzXqJ.js";var S=(e,t)=>t?`${e} ${t}`:e,C=e=>Array.isArray(e)?e.some(e=>C(e)):e!=null&&e!==!1,w=e=>{if(e)return e===`start`?`1`:e===`end`?`2`:e},T=e=>{switch(e){case`xs`:return`size-12`;case`sm`:case`small`:return`size-16`;case`md`:case`middle`:case`medium`:return`size-24`;case`lg`:case`large`:return`size-32`;case`xl`:return`size-40`;case`2xl`:return`size-52`;case`3xl`:return`size-64`;default:return}},E=e=>{switch(e){case`top`:return`object-top`;case`bottom`:return`object-bottom`;case`left`:return`object-left`;case`right`:return`object-right`;case`top-left`:return`object-left-top`;case`top-right`:return`object-right-top`;case`bottom-left`:return`object-left-bottom`;case`bottom-right`:return`object-right-bottom`;default:return e?`object-center`:void 0}},D=e=>{switch(e){case`contain`:return`object-contain`;case`fill`:return`object-fill`;case`none`:return`object-none`;case`scale-down`:return`object-scale-down`;default:return e?`object-cover`:void 0}},O=e=>{switch(e){case`neutral`:return`bg-neutral text-neutral-content`;case`primary`:return`bg-primary text-primary-content`;case`secondary`:return`bg-secondary text-secondary-content`;case`accent`:return`bg-accent text-accent-content`;case`info`:return`bg-info text-info-content`;case`success`:return`bg-success text-success-content`;case`warning`:return`bg-warning text-warning-content`;case`error`:return`bg-error text-error-content`;case`base`:return`bg-base-200 text-base-content`;default:return}},k=e=>{switch(e){case`neutral`:return`ring-neutral/35`;case`primary`:return`ring-primary/35`;case`secondary`:return`ring-secondary/35`;case`accent`:return`ring-accent/35`;case`info`:return`ring-info/35`;case`success`:return`ring-success/35`;case`warning`:return`ring-warning/35`;case`error`:return`ring-error/35`;default:return`ring-base-300`}},A=({shape:e,half:t,size:n,fit:r,position:i,tone:a,bordered:o,ring:s,shadow:c,interactive:l})=>{let u=`mask mask-${e??`squircle`}`,d=w(t),f=T(n),p=D(r),m=E(i),h=O(a);return d&&(u+=` mask-half-${d}`),f&&(u+=` ${f}`),p&&(u+=` ${p}`),m&&(u+=` ${m}`),h&&(u+=` ${h}`),o&&(u+=` ring-1 ring-inset ring-base-300/80`),s&&(u+=` ring-2 ring-offset-2 ring-offset-base-100 ${k(a)}`),c&&(u+=` shadow-xl shadow-base-content/10`),l&&(u+=` transition duration-200 ease-out hover:-translate-y-1 hover:shadow-2xl`),u},j=({as:e=`img`,shape:t=`squircle`,half:n,size:r,fit:i=`cover`,position:a,tone:o,bordered:s,ring:c,shadow:l,interactive:u,src:d,alt:f,imageProps:p,wrapperClassName:m,imageClassName:h,content:g,contentClassName:y,caption:b,captionClassName:x,className:w,children:T,...E})=>{let D=A({shape:t,half:n,size:r,fit:i,position:a,tone:o,bordered:s,ring:c,shadow:l,interactive:u}),O=g??T;if(d&&(C(O)||b!=null||m!=null||h!=null||y!=null||x!=null||e===`figure`)){let t=e===`img`?`figure`:e,n=t===`figure`?`figcaption`:`div`;return _(t,{...E,className:S(`relative inline-flex flex-col items-center gap-3`,m),children:[_(`div`,{className:`relative inline-flex`,children:[v(`img`,{...p,src:d,alt:f,className:S(S(D,w),h)}),C(O)?v(`div`,{className:S(`absolute inset-0 grid place-items-center p-4 text-center`,y),children:O}):null]}),b==null?null:v(n,{className:S(`text-center text-sm opacity-70`,x),children:b})]})}return v(e,{...E,src:d,alt:f,className:S(D,w),children:T})},M=`https://picsum.photos/320/320?grayscale`,N=`https://picsum.photos/420/240?grayscale`,P=`https://picsum.photos/240/420?grayscale`,F=[`squircle`,`heart`,`hexagon`,`hexagon-2`,`decagon`,`pentagon`,`diamond`,`square`,`circle`],I=[`star`,`star-2`],L=[`triangle`,`triangle-2`,`triangle-3`,`triangle-4`],R=[`xs`,`sm`,`md`,`lg`,`xl`,`2xl`],z=[{label:`cover`,fit:`cover`,src:N},{label:`contain`,fit:`contain`,src:P},{label:`fill`,fit:`fill`,src:N}],B=[{label:`Base`,tone:`base`},{label:`Primary`,tone:`primary`},{label:`Secondary`,tone:`secondary`},{label:`Accent`,tone:`accent`},{label:`Success`,tone:`success`},{label:`Warning`,tone:`warning`}],V=[{prop:`as`,description:`指定渲染标签，默认输出 img，也可渲染 div、figure 等任意宿主元素`,type:`string`,defaultValue:`'img'`},{prop:`shape`,description:`遮罩形状，覆盖当前支持的全部 mask-* 造型`,type:`'squircle' | 'heart' | 'hexagon' | 'hexagon-2' | 'decagon' | 'pentagon' | 'diamond' | 'square' | 'circle' | 'star' | 'star-2' | 'triangle' | 'triangle-2' | 'triangle-3' | 'triangle-4'`,defaultValue:`'squircle'`},{prop:`half`,description:`半边遮罩；支持数字写法，也支持 start / end 语义别名`,type:`'1' | '2' | 'start' | 'end'`,defaultValue:`-`},{prop:`size`,description:`语义尺寸，映射到一组常用正方形尺寸 class`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'`,defaultValue:`-`},{prop:`fit`,description:`媒体内容适配模式，输出 object-* 类名`,type:`'cover' | 'contain' | 'fill' | 'none' | 'scale-down'`,defaultValue:`'cover'`},{prop:`tone`,description:`给非图片宿主补齐背景与前景色，方便做头像牌、数字徽记和内容卡片`,type:`'base' | 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'`,defaultValue:`-`},{prop:`bordered`,description:`追加轻量内描边，适合浅背景图片或卡片`,type:`boolean`,defaultValue:`false`},{prop:`ring`,description:`追加 ring 与 offset，tone 存在时会自动继承对应的环颜色`,type:`boolean`,defaultValue:`false`},{prop:`shadow`,description:`追加投影，适合头像、封面和内容模块`,type:`boolean`,defaultValue:`false`},{prop:`interactive`,description:`追加轻量 hover 动效，方便做可点击素材墙或精选卡片`,type:`boolean`,defaultValue:`false`},{prop:`className`,description:`透传自定义样式类，可与组件生成的 mask 类叠加`,type:`string`,defaultValue:`-`}],H=({title:t,summary:d,tab:m,preview:h,code:g})=>p(()=>{let _=e(`div`);o(_,`component-preview not-prose text-base-content my-6 lg:my-12`);let v=e(`div`);l(_,v),o(v,`flex flex-wrap items-start justify-between gap-3`);let y=e(`div`);l(v,y);let S=e(`h2`);l(y,S),o(S,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(S,n(`# `));let C=r(S);l(S,C),u(()=>{s(C,t)});let w=i(`rue:slot:anchor`);l(y,w),u(()=>{c(d?p(()=>{let t=a(),n=e(`p`);l(t,n),o(n,`m-0 text-sm opacity-70`);let i=r(n);return l(n,i),u(()=>{s(i,d)}),t}):``,y,w)});let T=i(`rue:component:anchor`);l(_,T),u(()=>{c(f(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:m.value,onChange:e=>m.value=e,className:`mb-3 mt-4`}),_,T)});let E=i(`rue:slot:anchor`);return l(_,E),u(()=>{c(m.value===`preview`?h():p(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),u(()=>{c(f(b,{className:`mt-2`,lang:`tsx`,code:g}),e,t)}),e}),_,E)}),_}),U=({rows:r})=>p(()=>{let s=e(`div`);o(s,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let d=e(`table`);l(s,d),o(d,`table table-zebra`);let f=e(`thead`);l(d,f);let m=e(`tr`);l(f,m);let h=e(`th`);l(m,h),l(h,n(`属性`));let _=e(`th`);l(m,_),l(_,n(`说明`));let v=e(`th`);l(m,v),l(v,n(`类型`));let y=e(`th`);l(m,y),l(y,n(`默认值`));let b=e(`tbody`);l(d,b);let x=i(`rue:list:start`),S=i(`rue:list:end`);l(b,x),l(b,S);let C=new Map;return u(()=>{C=g({items:r||[],getKey:(e,t)=>e.prop,elements:C,parent:b,before:S,singleRoot:!0,start:x,renderItem:(n,r,o,s,d)=>{c(p(()=>{let r=a(),o=e(`tr`);l(r,o),u(()=>{t(o,`key`,String(n.prop))});let s=e(`td`);l(o,s);let d=e(`code`);l(s,d);let f=i(`rue:slot:anchor`);l(d,f),u(()=>{let e=n.prop;c(e,d,f)});let p=e(`td`);l(o,p);let m=i(`rue:slot:anchor`);l(p,m),u(()=>{let e=n.description;c(e,p,m)});let h=e(`td`);l(o,h);let g=e(`code`);l(h,g);let _=i(`rue:slot:anchor`);l(g,_),u(()=>{let e=n.type;c(e,g,_)});let v=e(`td`);l(o,v);let y=e(`code`);l(v,y);let b=i(`rue:slot:anchor`);return l(y,b),u(()=>{let e=n.defaultValue;c(e,y,b)}),r}),r,o)}})}),s}),W=()=>{let{tabShapes:r,tabStars:s,tabTriangles:g,tabHalf:b,tabSize:x,tabFit:S,tabTone:C}=h(`useSetup:0:0`,()=>m(()=>({tabShapes:h(`ref:1:0`,()=>d(`preview`)),tabStars:h(`ref:1:1`,()=>d(`preview`)),tabTriangles:h(`ref:1:2`,()=>d(`preview`)),tabHalf:h(`ref:1:3`,()=>d(`preview`)),tabSize:h(`ref:1:4`,()=>d(`preview`)),tabFit:h(`ref:1:5`,()=>d(`preview`)),tabTone:h(`ref:1:6`,()=>d(`preview`))})));return p(()=>{let d=a(),m=i(`rue:component:anchor`);return l(d,m),c(f(y,{children:p(()=>{let d=a(),p=e(`div`);l(d,p),o(p,`max-w-none prose prose-sm md:prose-base`);let m=e(`h1`);l(p,m),l(m,n(`Mask 形状裁切`));let h=e(`p`);l(p,h),o(h,`text-sm mt-3 mb-3`),l(h,n(`Mask 现在不只是原始 class 的薄封装。它保留 Rue 的轻量视觉路线，同时补上尺寸、fit、tone、ring 与交互态这些更适合实际页面搭建的语义化能力。`));let y=e(`div`);l(p,y),o(y,`text-sm`);let w=e(`a`);l(y,w),t(w,`href`,`https://daisyui.com/components/mask/`),t(w,`target`,`_blank`),t(w,`rel`,`noreferrer`),l(w,n(`查看 Mask 静态样式来源`));let T=i(`rue:component:anchor`);l(p,T),u(()=>{c(f(H,{title:`Core shapes`,summary:`保留原有基础形状示例，并统一到更整洁的卡片布局里。`,tab:r,preview:()=>v(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body flex flex-wrap gap-4`,"data-testid":`mask-shapes-demo`,children:F.map(e=>v(j,{shape:e,src:M,alt:e,size:`md`,bordered:!0},e))})}),code:`<Mask shape="squircle" src="${M}" alt="squircle" size="md" bordered />
<Mask shape="heart" src="${M}" alt="heart" size="md" bordered />
<Mask shape="hexagon" src="${M}" alt="hexagon" size="md" bordered />
<Mask shape="hexagon-2" src="${M}" alt="hexagon-2" size="md" bordered />
<Mask shape="decagon" src="${M}" alt="decagon" size="md" bordered />
<Mask shape="pentagon" src="${M}" alt="pentagon" size="md" bordered />
<Mask shape="diamond" src="${M}" alt="diamond" size="md" bordered />
<Mask shape="square" src="${M}" alt="square" size="md" bordered />
<Mask shape="circle" src="${M}" alt="circle" size="md" bordered />`}),p,T)});let E=i(`rue:component:anchor`);l(p,E),u(()=>{c(f(H,{title:`Star variants`,summary:`保留星形与粗星形示例，增加 ring 和 hover，适合头像墙或精选内容。`,tab:s,preview:()=>v(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body flex flex-wrap gap-5`,children:I.map(e=>v(j,{shape:e,src:M,alt:e,size:`lg`,ring:!0,shadow:!0,interactive:!0},e))})}),code:`<Mask shape="star" src="${M}" alt="star" size="lg" ring shadow interactive />
<Mask shape="star-2" src="${M}" alt="star-2" size="lg" ring shadow interactive />`}),p,E)});let D=i(`rue:component:anchor`);l(p,D),u(()=>{c(f(H,{title:`Triangle variants`,summary:`保留四向三角形示例，并通过统一尺寸让方向差异更好观察。`,tab:g,preview:()=>v(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body flex flex-wrap gap-5`,children:L.map(e=>v(j,{shape:e,src:M,alt:e,size:`lg`,bordered:!0,shadow:!0},e))})}),code:`<Mask shape="triangle" src="${M}" alt="triangle" size="lg" bordered shadow />
<Mask shape="triangle-2" src="${M}" alt="triangle-2" size="lg" bordered shadow />
<Mask shape="triangle-3" src="${M}" alt="triangle-3" size="lg" bordered shadow />
<Mask shape="triangle-4" src="${M}" alt="triangle-4" size="lg" bordered shadow />`}),p,D)});let O=i(`rue:component:anchor`);l(p,O),u(()=>{c(f(H,{title:`Half modifiers and arbitrary host`,summary:`保留 half modifier 与任意宿主演示，并补上 start / end 语义别名。`,tab:b,preview:()=>v(`div`,{className:`card bg-base-100 shadow-sm`,children:_(`div`,{className:`card-body flex flex-wrap items-center gap-6`,children:[v(j,{shape:`star`,half:`1`,src:M,alt:`star half 1`,size:`lg`,ring:!0}),v(j,{shape:`star`,half:`2`,src:M,alt:`star half 2`,size:`lg`,ring:!0}),v(j,{shape:`diamond`,half:`start`,src:M,alt:`diamond start`,size:`lg`,bordered:!0}),v(j,{as:`div`,shape:`diamond`,tone:`primary`,size:`lg`,ring:!0,shadow:!0,className:`grid place-content-center text-sm font-semibold uppercase tracking-[0.2em]`,"data-testid":`mask-host-demo`,children:`Host`})]})}),code:`<Mask shape="star" half="1" src="${M}" alt="star half 1" size="lg" ring />
<Mask shape="star" half="2" src="${M}" alt="star half 2" size="lg" ring />
<Mask shape="diamond" half="start" src="${M}" alt="diamond start" size="lg" bordered />
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
</Mask>`}),p,O)});let k=i(`rue:component:anchor`);l(p,k),u(()=>{c(f(H,{title:`Semantic sizes`,summary:`新增尺寸别名，常见头像和封面尺寸不再需要每次都手写宽高 class。`,tab:x,preview:()=>v(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body flex flex-wrap items-end gap-5`,children:R.map(e=>_(`div`,{className:`flex flex-col items-center gap-3 text-xs uppercase tracking-[0.18em] opacity-80`,children:[v(j,{shape:`circle`,src:M,alt:e,size:e,ring:!0}),v(`span`,{children:e})]},e))})}),code:`<Mask shape="circle" src="${M}" alt="xs" size="xs" ring />
<Mask shape="circle" src="${M}" alt="sm" size="sm" ring />
<Mask shape="circle" src="${M}" alt="md" size="md" ring />
<Mask shape="circle" src="${M}" alt="lg" size="lg" ring />
<Mask shape="circle" src="${M}" alt="xl" size="xl" ring />
<Mask shape="circle" src="${M}" alt="2xl" size="2xl" ring />`}),p,k)});let A=i(`rue:component:anchor`);l(p,A),u(()=>{c(f(H,{title:`Fit modes`,summary:`新增 fit 语义，宽图、竖图和封面图都能直接得到明确的裁切策略。`,tab:S,preview:()=>v(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body grid gap-6 md:grid-cols-3`,children:z.map(e=>_(`div`,{className:`space-y-3`,children:[v(`div`,{className:`text-xs font-semibold uppercase tracking-[0.18em] opacity-70`,children:e.label}),v(`div`,{className:`rounded-box bg-base-200 p-4`,children:v(j,{shape:`hexagon-2`,src:e.src,alt:e.label,size:`xl`,fit:e.fit,bordered:!0,className:`mx-auto`})})]},e.label))})}),code:`<Mask shape="hexagon-2" src="${N}" alt="cover" size="xl" fit="cover" bordered className="mx-auto" />
<Mask shape="hexagon-2" src="${P}" alt="contain" size="xl" fit="contain" bordered className="mx-auto" />
<Mask shape="hexagon-2" src="${N}" alt="fill" size="xl" fit="fill" bordered className="mx-auto" />`}),p,A)});let W=i(`rue:component:anchor`);l(p,W),u(()=>{c(f(H,{title:`Tone surfaces`,summary:`新增 tone、ring、shadow 组合后，Mask 也能承担数字徽记、内容牌和亮点卡片的职责。`,tab:C,preview:()=>v(`div`,{className:`card bg-base-100 shadow-sm`,children:_(`div`,{className:`card-body gap-6`,children:[v(`div`,{className:`flex flex-wrap gap-4`,children:B.map(e=>v(j,{as:`div`,shape:`squircle`,tone:e.tone,size:`md`,ring:!0,className:`grid place-content-center text-center text-xs font-semibold uppercase tracking-[0.18em]`,children:e.label},e.label))}),_(`div`,{className:`grid gap-4 md:grid-cols-3`,children:[v(j,{as:`div`,shape:`hexagon`,tone:`secondary`,size:`xl`,ring:!0,shadow:!0,interactive:!0,className:`mx-auto grid place-content-center p-6 text-center`,children:_(`div`,{className:`space-y-1`,children:[v(`div`,{className:`text-3xl font-black`,children:`24`}),v(`div`,{className:`text-xs uppercase tracking-[0.22em] opacity-80`,children:`Launches`})]})}),v(j,{as:`div`,shape:`diamond`,tone:`accent`,size:`xl`,ring:!0,shadow:!0,className:`mx-auto grid place-content-center p-6 text-center`,children:_(`div`,{className:`space-y-1`,children:[v(`div`,{className:`text-sm font-semibold uppercase tracking-[0.18em]`,children:`Featured`}),v(`div`,{className:`text-xs opacity-80`,children:`Rue Studio`})]})}),v(j,{as:`div`,shape:`circle`,tone:`success`,size:`xl`,ring:!0,shadow:!0,className:`mx-auto grid place-content-center p-6 text-center`,children:_(`div`,{className:`space-y-1`,children:[v(`div`,{className:`text-2xl font-black`,children:`98%`}),v(`div`,{className:`text-xs uppercase tracking-[0.18em] opacity-80`,children:`Approval`})]})})]})]})}),code:`<div className="flex flex-wrap gap-4">
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
</div>`}),p,W)});let G=e(`div`);l(p,G),o(G,`my-8`);let K=e(`h2`);l(G,K),o(K,`mt-0`),l(K,n(`API`));let q=i(`rue:component:anchor`);return l(G,q),u(()=>{c(f(U,{rows:V}),G,q)}),d})}),d,m),d})};export{W as default};