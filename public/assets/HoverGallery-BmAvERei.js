import{$ as e,Et as t,G as n,H as r,J as i,K as a,W as o,_t as s,d as c,kt as l,l as u,q as d,st as f,t as p,tt as m,xt as h}from"./vapor-runtime-ACs_OvwU.js";import{a as g,n as _}from"./vapor-helpers-vapor-BFB_fGs4.js";import{n as v,t as y}from"./src-B0RvnZVV.js";import{n as b}from"./SidebarPlaygroundDesign-fKTv1NQ3.js";import{t as x}from"./Code-CliOXHNE.js";import{t as S}from"./tabs-CPymQe79.js";var C=(e,t)=>t?`${e} ${t}`:e,w=e=>{switch(e){case`contain`:return`object-contain`;case`fill`:return`object-fill`;case`none`:return`object-none`;case`scale-down`:return`object-scale-down`;default:return e?`object-cover`:void 0}},T=e=>{if(e==null||e===!1)return[];if(!Array.isArray(e))return[e];let t=[];return e.forEach(e=>{t.push(...T(e))}),t},E=(e,t,n,r)=>{if(typeof e==`string`)return{key:t,node:y(`img`,{src:e,alt:``,className:C(``,C(n??``,r)).trim()||void 0},t)};if(e&&typeof e==`object`){let i=e;if(i.node!=null)return{key:i.key??t,node:i.node,label:i.label};if(i.src)return{key:i.key??t,label:i.label,node:y(`img`,{src:i.src,alt:i.alt??``,className:C(C(n??``,r),C(i.className??``,i.imageClassName)).trim()||void 0},i.key??t)}}return{key:t,node:e}},D=(e,t,n,r)=>e&&e.length>0?e.map((e,t)=>E(e,t,n,r)):T(t).map((e,t)=>({key:t,node:e})),O=e=>{let t=e.as??`figure`,n=e.className,r=e.wrapperClassName,i=e.children,a=e.items,o=e.imageClassName,s=e.fit,c=e.showGuide,l=e.guideLabels,u=e.guideClassName,d=e.guideItemClassName,f=D(a,i,w(s),o),p=f.map(e=>e.node),m=f.length>1?f.length-1:0,h=t,g=C(`hover-gallery`,n),_=Object.assign({},e);delete _.as,delete _.className,delete _.wrapperClassName,delete _.children,delete _.items,delete _.imageClassName,delete _.fit,delete _.showGuide,delete _.guideLabels,delete _.guideClassName,delete _.guideItemClassName;let b=y(h,{..._,className:g,children:p});return!c||m===0?b:v(`div`,{className:C(`grid *:[grid-area:1/1]`,r),children:[b,y(`div`,{className:C(`pointer-events-none grid font-mono text-white text-shadow-lg`,u),style:{gridTemplateColumns:`repeat(${m}, minmax(0, 1fr))`},"aria-hidden":`true`,children:f.slice(1).map((e,t)=>y(`div`,{className:C(`from-white/10 via-transparent to-black/10 bg-linear-80 grid place-content-center`,d),children:l?.[t]??e.label??t+2},e.key))})]})},k=e=>c(t=>{let i=a(`div`,t);m(i,`component-preview not-prose text-base-content my-6 lg:my-12`);let s=a(`div`,i);r(i,s),m(s,`flex flex-wrap items-start justify-between gap-3`);let f=a(`div`,s);r(s,f);let g=a(`h2`,f);r(f,g),m(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),r(g,d(`# `));let _=o(`rue:slot:anchor`);r(g,_),l(()=>{let t=e.title;h(()=>u(t,g,_))});let v=o(`rue:slot:anchor`);r(f,v),l(()=>{let t=e.summary?c(()=>{let t=n(),i=a(`p`,t);r(t,i),m(i,`m-0 text-sm opacity-70`);let s=o(`rue:slot:anchor`);return r(i,s),l(()=>{let t=e.summary;h(()=>u(t,i,s))}),t}):``;h(()=>u(t,f,v))});let y=o(`rue:component:anchor`);r(i,y),l(()=>{let t=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`});h(()=>u(t,i,y))});let b=o(`rue:slot:anchor`);return r(i,b),l(()=>{let t=e.tab.value===`preview`?e.preview():c(()=>{let t=n(),i=o(`rue:component:anchor`);return r(t,i),l(()=>{let n=p(x,{className:`mt-2`,lang:`tsx`,code:e.code});h(()=>u(n,t,i))}),t});h(()=>u(t,i,b))}),i}),A=t=>c(i=>{let s=a(`div`,i);m(s,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=a(`table`,s);r(s,f),m(f,`table table-zebra`);let p=a(`thead`,f);r(f,p);let g=a(`tr`,p);r(p,g);let v=a(`th`,g);r(g,v),r(v,d(`属性`));let y=a(`th`,g);r(g,y),r(y,d(`说明`));let b=a(`th`,g);r(g,b),r(b,d(`类型`));let x=a(`th`,g);r(g,x),r(x,d(`默认值`));let S=a(`tbody`,f);r(f,S);let C=o(`rue:list:start`),w=o(`rue:list:end`);r(S,C),r(S,w);let T=new Map;return l(()=>{T=_({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,i,s,d,f)=>{u(c(()=>{let i=n(),s=a(`tr`,i);r(i,s),l(()=>{e(s,`key`,String(t.prop))});let c=a(`td`,s);r(s,c);let d=a(`code`,c);r(c,d);let f=o(`rue:slot:anchor`);r(d,f),l(()=>{let e=t.prop;h(()=>u(e,d,f))});let p=a(`td`,s);r(s,p);let m=o(`rue:slot:anchor`);r(p,m),l(()=>{let e=t.description;h(()=>u(e,p,m))});let g=a(`td`,s);r(s,g);let _=a(`code`,g);r(g,_);let v=o(`rue:slot:anchor`);r(_,v),l(()=>{let e=t.type;h(()=>u(e,_,v))});let y=a(`td`,s);r(s,y);let b=a(`code`,y);r(y,b);let x=o(`rue:slot:anchor`);return r(b,x),l(()=>{let e=t.defaultValue;h(()=>u(e,b,x))}),i}),i,s)}})}),s}),j=[{src:`https://img.daisyui.com/images/stock/daisyui-hat-1.webp`,alt:`帽子正面`},{src:`https://img.daisyui.com/images/stock/daisyui-hat-2.webp`,alt:`帽子侧面`,label:`2`},{node:y(`img`,{src:`https://img.daisyui.com/images/stock/daisyui-hat-3.webp`,alt:`帽子背面`}),label:`3`},{src:`https://img.daisyui.com/images/stock/daisyui-hat-4.webp`,alt:`帽子细节`,label:`4`}],M=[{src:`https://img.daisyui.com/images/stock/daisyui-hat-1.webp`,alt:`基础款帽子正面`},{src:`https://img.daisyui.com/images/stock/daisyui-hat-2.webp`,alt:`基础款帽子侧面`},{src:`https://img.daisyui.com/images/stock/daisyui-hat-3.webp`,alt:`基础款帽子背面`},{src:`https://img.daisyui.com/images/stock/daisyui-hat-4.webp`,alt:`基础款帽子细节`}],N=[{prop:`as`,description:`指定根节点标签，可选 figure 或 div`,type:`'figure' | 'div'`,defaultValue:`'figure'`},{prop:`children`,description:`直接传入图片节点；当 items 为空时作为渲染源`,type:`any`,defaultValue:`-`},{prop:`className`,description:`追加到 hover-gallery 根节点的类名`,type:`string`,defaultValue:`-`},{prop:`fit`,description:`统一控制 items 生成图片的 object-fit`,type:`'cover' | 'contain' | 'fill' | 'none' | 'scale-down'`,defaultValue:`-`},{prop:`guideClassName`,description:`追加到导览遮罩容器的类名`,type:`string`,defaultValue:`-`},{prop:`guideItemClassName`,description:`追加到每个导览分栏的类名`,type:`string`,defaultValue:`-`},{prop:`guideLabels`,description:`覆盖导览遮罩文案；长度通常为图片数量减一`,type:`ReadonlyArray<any>`,defaultValue:`-`},{prop:`imageClassName`,description:`统一追加到 items 生成图片上的类名`,type:`string`,defaultValue:`-`},{prop:`items`,description:`数据驱动模式，支持字符串 src、对象项或自定义 node`,type:`ReadonlyArray<string | HoverGalleryItem | any>`,defaultValue:`-`},{prop:`showGuide`,description:`显示与 hover 区域对齐的导览遮罩`,type:`boolean`,defaultValue:`false`},{prop:`wrapperClassName`,description:`showGuide 开启时追加到外层叠放容器的类名`,type:`string`,defaultValue:`-`}],P=`<HoverGallery
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
`,z=()=>{let{tabHow:_,tabBasic:x,tabItems:S,tabGuide:C,tabCard:w}=g(`useSetup:0:0`,()=>t(()=>({tabHow:g(`ref:1:0`,()=>s(`preview`)),tabBasic:g(`ref:1:1`,()=>s(`preview`)),tabItems:g(`ref:1:2`,()=>s(`preview`)),tabGuide:g(`ref:1:3`,()=>s(`preview`)),tabCard:g(`ref:1:4`,()=>s(`preview`))})));return c(t=>{let s=n(),g=o(`rue:component:anchor`);return r(s,g),u(p(b,{children:c(()=>{let t=n(),s=a(`div`,t);r(t,s),m(s,`max-w-none prose prose-sm md:prose-base`);let c=a(`h1`,s);r(s,c),r(c,d(`Hover Gallery 悬浮画廊`));let g=a(`p`,s);r(s,g),m(g,`text-sm mt-3 mb-3`),r(g,d(`Hover Gallery 适合做商品多视角缩略图。Rue 这一版把原本散落在 demo 里的结构提炼成组件 API：既能继续直接写`));let b=a(`code`,g);r(g,b),r(b,d(`children`)),r(g,d(`，也能切到`));let T=a(`code`,g);r(g,T),r(T,d(`items`));let E=i(g);r(g,E),f(E,` `),r(g,d(`数据驱动，并把导览遮罩和图片层样式统一收口到组件里。`));let D=a(`h2`,s);r(s,D),r(D,d(`何时使用`));let z=a(`ul`,s);r(s,z);let B=a(`li`,z);r(z,B),r(B,d(`需要在商品卡片、作品集卡片里，用最轻的结构承载多张预览图。`));let V=a(`li`,z);r(z,V),r(V,d(`想保留纯 CSS 的 hover 体验，但又不想在页面层重复写导览遮罩和图片映射逻辑。`));let H=a(`li`,z);r(z,H),r(H,d(`同一套页面里既有静态写法，也有列表数据驱动写法，希望 API 可以平滑共存。`));let U=o(`rue:component:anchor`);r(s,U),l(()=>{let e=p(k,{title:`How it works`,summary:`第一张图片默认可见，其余图片会对应到横向 hover 分栏。组件现在可以直接输出这层导览遮罩。`,tab:_,preview:()=>y(`div`,{className:`flex justify-center`,children:y(O,{className:`max-w-60`,wrapperClassName:`max-w-60 rounded-box overflow-hidden shadow`,showGuide:!0,items:j})}),code:P});h(()=>u(e,s,U))});let W=o(`rue:component:anchor`);r(s,W),l(()=>{let e=p(k,{title:`基础用法`,summary:`保留原来的 children 写法。适合已经手写好图片节点的场景。`,tab:x,preview:()=>y(`div`,{className:`flex justify-center`,children:v(O,{as:`figure`,className:`max-w-60`,children:[y(`img`,{src:`https://img.daisyui.com/images/stock/daisyui-hat-1.webp`,alt:`帽子正面`}),y(`img`,{src:`https://img.daisyui.com/images/stock/daisyui-hat-2.webp`,alt:`帽子侧面`}),y(`img`,{src:`https://img.daisyui.com/images/stock/daisyui-hat-3.webp`,alt:`帽子背面`}),y(`img`,{src:`https://img.daisyui.com/images/stock/daisyui-hat-4.webp`,alt:`帽子细节`})]})}),code:F});h(()=>u(e,s,W))});let G=o(`rue:component:anchor`);r(s,G),l(()=>{let e=p(k,{title:`数据驱动`,summary:`items 支持字符串、对象项和自定义 node，方便从接口数据或内容配置直接渲染。`,tab:S,preview:()=>y(`div`,{className:`flex justify-center`,children:y(O,{as:`figure`,className:`max-w-60`,items:j})}),code:I});h(()=>u(e,s,G))});let K=o(`rue:component:anchor`);r(s,K),l(()=>{let e=p(k,{title:`自定义导览与图片层`,summary:`导览文案、导览样式和图片 object-fit 都能在组件层统一配置，不需要再在页面里手工叠 grid。`,tab:C,preview:()=>y(`div`,{className:`flex justify-center`,children:v(`div`,{className:`space-y-3`,children:[y(O,{className:`max-w-sm bg-base-100`,wrapperClassName:`max-w-sm rounded-box overflow-hidden border border-base-300 shadow-lg`,imageClassName:`aspect-[4/3] w-full bg-base-200`,fit:`contain`,showGuide:!0,guideLabels:[`侧面`,`背面`,`细节`],guideClassName:`text-xs font-semibold text-base-content`,guideItemClassName:`from-base-100/70 via-transparent to-base-content/10`,items:M}),v(`p`,{className:`m-0 text-xs opacity-70`,children:[`这一组更适合做详情页的角度预览，统一的 `,y(`code`,{children:`fit`}),` 和`,` `,y(`code`,{children:`imageClassName`}),` 可以把不同来源的图片先收敛到同一版式里。`]})]})}),code:L});h(()=>u(e,s,K))});let q=o(`rue:component:anchor`);r(s,q),l(()=>{let e=p(k,{title:`商品卡片组合`,summary:`保留原来的卡片场景，但把图片映射交给 HoverGallery 自己处理。`,tab:w,preview:()=>y(`div`,{className:`flex justify-center`,children:v(`div`,{className:`card card-sm bg-base-200 max-w-72 border border-base-300/60 shadow-lg`,children:[y(O,{as:`figure`,items:M,imageClassName:`aspect-[4/3] w-full object-cover`}),v(`div`,{className:`card-body gap-3`,children:[v(`div`,{className:`flex items-start justify-between gap-3`,children:[v(`div`,{children:[y(`h3`,{className:`card-title text-base`,children:`Rue Field Cap`}),y(`p`,{className:`m-0 text-sm opacity-70`,children:`Cotton twill, matte buckle, small logo stitch.`})]}),y(`span`,{className:`badge badge-primary badge-soft`,children:`New`})]}),v(`div`,{className:`flex items-center justify-between text-sm`,children:[y(`span`,{className:`opacity-70`,children:`4 angles preview`}),y(`strong`,{children:`¥199`})]})]})]})}),code:R});h(()=>u(e,s,q))});let J=a(`h2`,s);r(s,J),e(J,`id`,`hover-gallery-api`),r(J,d(`API`));let Y=o(`rue:component:anchor`);return r(s,Y),l(()=>{let e=p(A,{rows:N});h(()=>u(e,s,Y))}),t})}),s,g),s})};export{z as default};