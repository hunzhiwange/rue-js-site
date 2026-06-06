import{$ as e,Kt as t,Lt as n,Q as r,Vt as i,Y as a,Yt as o,Z as s,ct as c,et as l,l as u,mt as d,ot as f,s as p,t as m,tt as h}from"./vapor-runtime-DHPuOjqh.js";import{a as g,n as _}from"./vapor-helpers-vapor-CJFAWine.js";import{a as v,i as y}from"./persistentSidebarPlayground-C_0jw6dq.js";import{t as b}from"./Code-Ds9lKLk6.js";import{t as x}from"./tabs-DSy0eY-V.js";import{n as S}from"./SidebarPlaygroundDesign-DMSFSCs3.js";var C=(e,t)=>t?`${e} ${t}`:e,w=e=>{switch(e){case`contain`:return`object-contain`;case`fill`:return`object-fill`;case`none`:return`object-none`;case`scale-down`:return`object-scale-down`;default:return e?`object-cover`:void 0}},T=e=>{if(e==null||e===!1)return[];if(!Array.isArray(e))return[e];let t=[];return e.forEach(e=>{t.push(...T(e))}),t},E=(e,t,n,r)=>{if(typeof e==`string`)return{key:t,node:y(`img`,{src:e,alt:``,className:C(``,C(n??``,r)).trim()||void 0},t)};if(e&&typeof e==`object`){let i=e;if(i.node!=null)return{key:i.key??t,node:i.node,label:i.label};if(i.src)return{key:i.key??t,label:i.label,node:y(`img`,{src:i.src,alt:i.alt??``,className:C(C(n??``,r),C(i.className??``,i.imageClassName)).trim()||void 0},i.key??t)}}return{key:t,node:e}},D=(e,t,n,r)=>e&&e.length>0?e.map((e,t)=>E(e,t,n,r)):T(t).map((e,t)=>({key:t,node:e})),O=e=>{let t=e.as??`figure`,n=e.className,r=e.wrapperClassName,i=e.children,a=e.items,o=e.imageClassName,s=e.fit,c=e.showGuide,l=e.guideLabels,u=e.guideClassName,d=e.guideItemClassName,f=D(a,i,w(s),o),p=f.map(e=>e.node),m=f.length>1?f.length-1:0,h=t,g=C(`hover-gallery`,n),_=Object.assign({},e);delete _.as,delete _.className,delete _.wrapperClassName,delete _.children,delete _.items,delete _.imageClassName,delete _.fit,delete _.showGuide,delete _.guideLabels,delete _.guideClassName,delete _.guideItemClassName;let b=y(h,{..._,className:g,children:p});return!c||m===0?b:v(`div`,{className:C(`grid *:[grid-area:1/1]`,r),children:[b,y(`div`,{className:C(`pointer-events-none grid font-mono text-white text-shadow-lg`,u),style:{gridTemplateColumns:`repeat(${m}, minmax(0, 1fr))`},"aria-hidden":`true`,children:f.slice(1).map((e,t)=>y(`div`,{className:C(`from-white/10 via-transparent to-black/10 bg-linear-80 grid place-content-center`,d),children:l?.[t]??e.label??t+2},e.key))})]})},k=t=>u(n=>{let d=e(`div`,n);c(d,`component-preview not-prose text-base-content my-6 lg:my-12`);let f=e(`div`,d);a(d,f),c(f,`flex flex-wrap items-start justify-between gap-3`);let h=e(`div`,f);a(f,h);let g=e(`h2`,h);a(h,g),c(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(g,l(`# `));let _=s(`rue:slot:anchor`);a(g,_),o(()=>{let e=t.title;i(()=>p(e,g,_))});let v=s(`rue:slot:anchor`);a(h,v),o(()=>{let n=t.summary?u(()=>{let n=r(),l=e(`p`,n);a(n,l),c(l,`m-0 text-sm opacity-70`);let u=s(`rue:slot:anchor`);return a(l,u),o(()=>{let e=t.summary;i(()=>p(e,l,u))}),n}):``;i(()=>p(n,h,v))});let y=s(`rue:component:anchor`);a(d,y),o(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:t.tab.value,onChange:e=>t.tab.value=e,className:`mb-3 mt-4`});i(()=>p(e,d,y))});let S=s(`rue:slot:anchor`);return a(d,S),o(()=>{let e=t.tab.value===`preview`?t.preview():u(()=>{let e=r(),n=s(`rue:component:anchor`);return a(e,n),o(()=>{let r=m(b,{className:`mt-2`,lang:`tsx`,code:t.code});i(()=>p(r,e,n))}),e});i(()=>p(e,d,S))}),d}),A=t=>u(n=>{let d=e(`div`,n);c(d,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=e(`table`,d);a(d,m),c(m,`table table-zebra`);let h=e(`thead`,m);a(m,h);let g=e(`tr`,h);a(h,g);let v=e(`th`,g);a(g,v),a(v,l(`属性`));let y=e(`th`,g);a(g,y),a(y,l(`说明`));let b=e(`th`,g);a(g,b),a(b,l(`类型`));let x=e(`th`,g);a(g,x),a(x,l(`默认值`));let S=e(`tbody`,m);a(m,S);let C=s(`rue:list:start`),w=s(`rue:list:end`);a(S,C),a(S,w);let T=new Map;return o(()=>{T=_({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,n,c,l,d)=>{p(u(()=>{let n=r(),c=e(`tr`,n);a(n,c),o(()=>{f(c,`key`,String(t.prop))});let l=e(`td`,c);a(c,l);let u=e(`code`,l);a(l,u);let d=s(`rue:slot:anchor`);a(u,d),o(()=>{let e=t.prop;i(()=>p(e,u,d))});let m=e(`td`,c);a(c,m);let h=s(`rue:slot:anchor`);a(m,h),o(()=>{let e=t.description;i(()=>p(e,m,h))});let g=e(`td`,c);a(c,g);let _=e(`code`,g);a(g,_);let v=s(`rue:slot:anchor`);a(_,v),o(()=>{let e=t.type;i(()=>p(e,_,v))});let y=e(`td`,c);a(c,y);let b=e(`code`,y);a(y,b);let x=s(`rue:slot:anchor`);return a(b,x),o(()=>{let e=t.defaultValue;i(()=>p(e,b,x))}),n}),n,c)}})}),d}),j=[{src:`https://img.daisyui.com/images/stock/daisyui-hat-1.webp`,alt:`帽子正面`},{src:`https://img.daisyui.com/images/stock/daisyui-hat-2.webp`,alt:`帽子侧面`,label:`2`},{node:y(`img`,{src:`https://img.daisyui.com/images/stock/daisyui-hat-3.webp`,alt:`帽子背面`}),label:`3`},{src:`https://img.daisyui.com/images/stock/daisyui-hat-4.webp`,alt:`帽子细节`,label:`4`}],M=[{src:`https://img.daisyui.com/images/stock/daisyui-hat-1.webp`,alt:`基础款帽子正面`},{src:`https://img.daisyui.com/images/stock/daisyui-hat-2.webp`,alt:`基础款帽子侧面`},{src:`https://img.daisyui.com/images/stock/daisyui-hat-3.webp`,alt:`基础款帽子背面`},{src:`https://img.daisyui.com/images/stock/daisyui-hat-4.webp`,alt:`基础款帽子细节`}],N=[{prop:`as`,description:`指定根节点标签，可选 figure 或 div`,type:`'figure' | 'div'`,defaultValue:`'figure'`},{prop:`children`,description:`直接传入图片节点；当 items 为空时作为渲染源`,type:`any`,defaultValue:`-`},{prop:`className`,description:`追加到 hover-gallery 根节点的类名`,type:`string`,defaultValue:`-`},{prop:`fit`,description:`统一控制 items 生成图片的 object-fit`,type:`'cover' | 'contain' | 'fill' | 'none' | 'scale-down'`,defaultValue:`-`},{prop:`guideClassName`,description:`追加到导览遮罩容器的类名`,type:`string`,defaultValue:`-`},{prop:`guideItemClassName`,description:`追加到每个导览分栏的类名`,type:`string`,defaultValue:`-`},{prop:`guideLabels`,description:`覆盖导览遮罩文案；长度通常为图片数量减一`,type:`ReadonlyArray<any>`,defaultValue:`-`},{prop:`imageClassName`,description:`统一追加到 items 生成图片上的类名`,type:`string`,defaultValue:`-`},{prop:`items`,description:`数据驱动模式，支持字符串 src、对象项或自定义 node`,type:`ReadonlyArray<string | HoverGalleryItem | any>`,defaultValue:`-`},{prop:`showGuide`,description:`显示与 hover 区域对齐的导览遮罩`,type:`boolean`,defaultValue:`false`},{prop:`wrapperClassName`,description:`showGuide 开启时追加到外层叠放容器的类名`,type:`string`,defaultValue:`-`}],P=`<HoverGallery
  className="max-w-60"
  wrapperClassName="max-w-60 rounded-box overflow-hidden shadow"
  showGuide={true}
  items={[
    { src: 'https://img.daisyui.com/images/stock/daisyui-hat-1.webp', alt: 'Hat front' },
    { src: 'https://img.daisyui.com/images/stock/daisyui-hat-2.webp', alt: 'Hat side' },
    { src: 'https://img.daisyui.com/images/stock/daisyui-hat-3.webp', alt: 'Hat back' },
    { src: 'https://img.daisyui.com/images/stock/daisyui-hat-4.webp', alt: 'Hat detail' },
  ]}
/>
`,F=`<HoverGallery as="figure" className="max-w-60">
  <img src="https://img.daisyui.com/images/stock/daisyui-hat-1.webp" alt="Hat front" />
  <img src="https://img.daisyui.com/images/stock/daisyui-hat-2.webp" alt="Hat side" />
  <img src="https://img.daisyui.com/images/stock/daisyui-hat-3.webp" alt="Hat back" />
  <img src="https://img.daisyui.com/images/stock/daisyui-hat-4.webp" alt="Hat detail" />
</HoverGallery>
`,I=`const galleryItems = [
  'https://img.daisyui.com/images/stock/daisyui-hat-1.webp',
  {
    src: 'https://img.daisyui.com/images/stock/daisyui-hat-2.webp',
    alt: 'Hat side',
  },
  {
    node: <img src="https://img.daisyui.com/images/stock/daisyui-hat-3.webp" alt="Hat back" />,
  },
  {
    src: 'https://img.daisyui.com/images/stock/daisyui-hat-4.webp',
    alt: 'Hat detail',
  },
]

<HoverGallery as="figure" className="max-w-60" items={galleryItems} />
`,L=`<HoverGallery
  className="max-w-sm bg-base-100"
  wrapperClassName="max-w-sm rounded-box overflow-hidden border border-base-300 shadow-lg"
  imageClassName="aspect-[4/3] w-full bg-base-200"
  fit="contain"
  showGuide={true}
  guideLabels={['侧面', '背面', '细节']}
  guideClassName="text-xs font-semibold text-base-content"
  guideItemClassName="from-base-100/70 via-transparent to-base-content/10"
  items={[
    { src: 'https://img.daisyui.com/images/stock/daisyui-hat-1.webp', alt: 'Hat front' },
    { src: 'https://img.daisyui.com/images/stock/daisyui-hat-2.webp', alt: 'Hat side' },
    { src: 'https://img.daisyui.com/images/stock/daisyui-hat-3.webp', alt: 'Hat back' },
    { src: 'https://img.daisyui.com/images/stock/daisyui-hat-4.webp', alt: 'Hat detail' },
  ]}
/>
`,R=`<div className="card card-sm bg-base-200 max-w-72 border border-base-300/60 shadow-lg">
  <HoverGallery
    as="figure"
    items={[
      { src: 'https://img.daisyui.com/images/stock/daisyui-hat-1.webp', alt: 'Hat front' },
      { src: 'https://img.daisyui.com/images/stock/daisyui-hat-2.webp', alt: 'Hat side' },
      { src: 'https://img.daisyui.com/images/stock/daisyui-hat-3.webp', alt: 'Hat back' },
      { src: 'https://img.daisyui.com/images/stock/daisyui-hat-4.webp', alt: 'Hat detail' },
    ]}
    imageClassName="aspect-[4/3] w-full object-cover"
  />
  <div className="card-body gap-3">
    <div className="flex items-start justify-between gap-3">
      <div>
        <h3 className="card-title text-base">Rue Field Cap</h3>
        <p className="m-0 text-sm opacity-70">Cotton twill, matte buckle, small logo stitch.</p>
      </div>
      <span className="badge badge-primary badge-soft">New</span>
    </div>
    <div className="flex items-center justify-between text-sm">
      <span className="opacity-70">4 angles preview</span>
      <strong>¥199</strong>
    </div>
  </div>
</div>
`,z=()=>{let{tabHow:_,tabBasic:b,tabItems:x,tabGuide:C,tabCard:w}=g(`useSetup:0:0`,()=>t(()=>({tabHow:g(`ref:1:0`,()=>n(`preview`)),tabBasic:g(`ref:1:1`,()=>n(`preview`)),tabItems:g(`ref:1:2`,()=>n(`preview`)),tabGuide:g(`ref:1:3`,()=>n(`preview`)),tabCard:g(`ref:1:4`,()=>n(`preview`))})));return u(t=>{let n=r(),g=s(`rue:component:anchor`);return a(n,g),p(m(S,{children:u(()=>{let t=r(),n=e(`div`,t);a(t,n),c(n,`max-w-none prose prose-sm md:prose-base`);let u=e(`h1`,n);a(n,u),a(u,l(`Hover Gallery 悬浮画廊`));let g=e(`p`,n);a(n,g),c(g,`text-sm mt-3 mb-3`),a(g,l(`Hover Gallery 适合做商品多视角缩略图。Rue 这一版把原本散落在 demo 里的结构提炼成组件 API：既能继续直接写`));let S=e(`code`,g);a(g,S),a(S,l(`children`)),a(g,l(`，也能切到`));let T=e(`code`,g);a(g,T),a(T,l(`items`));let E=h(g);a(g,E),d(E,` `),a(g,l(`数据驱动，并把导览遮罩和图片层样式统一收口到组件里。`));let D=e(`h2`,n);a(n,D),a(D,l(`何时使用`));let z=e(`ul`,n);a(n,z);let B=e(`li`,z);a(z,B),a(B,l(`需要在商品卡片、作品集卡片里，用最轻的结构承载多张预览图。`));let V=e(`li`,z);a(z,V),a(V,l(`想保留纯 CSS 的 hover 体验，但又不想在页面层重复写导览遮罩和图片映射逻辑。`));let H=e(`li`,z);a(z,H),a(H,l(`同一套页面里既有静态写法，也有列表数据驱动写法，希望 API 可以平滑共存。`));let U=s(`rue:component:anchor`);a(n,U),o(()=>{let e=m(k,{title:`How it works`,summary:`第一张图片默认可见，其余图片会对应到横向 hover 分栏。组件现在可以直接输出这层导览遮罩。`,tab:_,preview:()=>y(`div`,{className:`flex justify-center`,children:y(O,{className:`max-w-60`,wrapperClassName:`max-w-60 rounded-box overflow-hidden shadow`,showGuide:!0,items:j})}),code:P});i(()=>p(e,n,U))});let W=s(`rue:component:anchor`);a(n,W),o(()=>{let e=m(k,{title:`基础用法`,summary:`保留原来的 children 写法。适合已经手写好图片节点的场景。`,tab:b,preview:()=>y(`div`,{className:`flex justify-center`,children:v(O,{as:`figure`,className:`max-w-60`,children:[y(`img`,{src:`https://img.daisyui.com/images/stock/daisyui-hat-1.webp`,alt:`帽子正面`}),y(`img`,{src:`https://img.daisyui.com/images/stock/daisyui-hat-2.webp`,alt:`帽子侧面`}),y(`img`,{src:`https://img.daisyui.com/images/stock/daisyui-hat-3.webp`,alt:`帽子背面`}),y(`img`,{src:`https://img.daisyui.com/images/stock/daisyui-hat-4.webp`,alt:`帽子细节`})]})}),code:F});i(()=>p(e,n,W))});let G=s(`rue:component:anchor`);a(n,G),o(()=>{let e=m(k,{title:`数据驱动`,summary:`items 支持字符串、对象项和自定义 node，方便从接口数据或内容配置直接渲染。`,tab:x,preview:()=>y(`div`,{className:`flex justify-center`,children:y(O,{as:`figure`,className:`max-w-60`,items:j})}),code:I});i(()=>p(e,n,G))});let K=s(`rue:component:anchor`);a(n,K),o(()=>{let e=m(k,{title:`自定义导览与图片层`,summary:`导览文案、导览样式和图片 object-fit 都能在组件层统一配置，不需要再在页面里手工叠 grid。`,tab:C,preview:()=>y(`div`,{className:`flex justify-center`,children:v(`div`,{className:`space-y-3`,children:[y(O,{className:`max-w-sm bg-base-100`,wrapperClassName:`max-w-sm rounded-box overflow-hidden border border-base-300 shadow-lg`,imageClassName:`aspect-[4/3] w-full bg-base-200`,fit:`contain`,showGuide:!0,guideLabels:[`侧面`,`背面`,`细节`],guideClassName:`text-xs font-semibold text-base-content`,guideItemClassName:`from-base-100/70 via-transparent to-base-content/10`,items:M}),v(`p`,{className:`m-0 text-xs opacity-70`,children:[`这一组更适合做详情页的角度预览，统一的 `,y(`code`,{children:`fit`}),` 和`,` `,y(`code`,{children:`imageClassName`}),` 可以把不同来源的图片先收敛到同一版式里。`]})]})}),code:L});i(()=>p(e,n,K))});let q=s(`rue:component:anchor`);a(n,q),o(()=>{let e=m(k,{title:`商品卡片组合`,summary:`保留原来的卡片场景，但把图片映射交给 HoverGallery 自己处理。`,tab:w,preview:()=>y(`div`,{className:`flex justify-center`,children:v(`div`,{className:`card card-sm bg-base-200 max-w-72 border border-base-300/60 shadow-lg`,children:[y(O,{as:`figure`,items:M,imageClassName:`aspect-[4/3] w-full object-cover`}),v(`div`,{className:`card-body gap-3`,children:[v(`div`,{className:`flex items-start justify-between gap-3`,children:[v(`div`,{children:[y(`h3`,{className:`card-title text-base`,children:`Rue Field Cap`}),y(`p`,{className:`m-0 text-sm opacity-70`,children:`Cotton twill, matte buckle, small logo stitch.`})]}),y(`span`,{className:`badge badge-primary badge-soft`,children:`New`})]}),v(`div`,{className:`flex items-center justify-between text-sm`,children:[y(`span`,{className:`opacity-70`,children:`4 angles preview`}),y(`strong`,{children:`¥199`})]})]})]})}),code:R});i(()=>p(e,n,q))});let J=e(`h2`,n);a(n,J),f(J,`id`,`hover-gallery-api`),a(J,l(`API`));let Y=s(`rue:component:anchor`);return a(n,Y),o(()=>{let e=m(A,{rows:N});i(()=>p(e,n,Y))}),t})}),n,g),n})};export{z as default};