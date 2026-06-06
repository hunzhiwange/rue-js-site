import{$ as e,B as t,Dt as n,G as r,H as i,K as a,U as o,W as s,Z as c,at as l,ht as u,l as d,s as f,t as p,wt as m,yt as h}from"./vapor-runtime-C1rlwc61.js";import{a as g,n as _}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as v}from"./Code-BCLFq1E3.js";import{n as y,t as b}from"./src-BLzF0BqW.js";import{n as x}from"./SidebarPlaygroundDesign-DmoUIYgb.js";import{t as S}from"./tabs-BOxm6iIN.js";var C=(e,t)=>t?`${e} ${t}`:e,w=e=>{switch(e){case`contain`:return`object-contain`;case`fill`:return`object-fill`;case`none`:return`object-none`;case`scale-down`:return`object-scale-down`;default:return e?`object-cover`:void 0}},T=e=>{if(e==null||e===!1)return[];if(!Array.isArray(e))return[e];let t=[];return e.forEach(e=>{t.push(...T(e))}),t},E=(e,t,n,r)=>{if(typeof e==`string`)return{key:t,node:b(`img`,{src:e,alt:``,className:C(``,C(n??``,r)).trim()||void 0},t)};if(e&&typeof e==`object`){let i=e;if(i.node!=null)return{key:i.key??t,node:i.node,label:i.label};if(i.src)return{key:i.key??t,label:i.label,node:b(`img`,{src:i.src,alt:i.alt??``,className:C(C(n??``,r),C(i.className??``,i.imageClassName)).trim()||void 0},i.key??t)}}return{key:t,node:e}},D=(e,t,n,r)=>e&&e.length>0?e.map((e,t)=>E(e,t,n,r)):T(t).map((e,t)=>({key:t,node:e})),O=e=>{let t=e.as??`figure`,n=e.className,r=e.wrapperClassName,i=e.children,a=e.items,o=e.imageClassName,s=e.fit,c=e.showGuide,l=e.guideLabels,u=e.guideClassName,d=e.guideItemClassName,f=D(a,i,w(s),o),p=f.map(e=>e.node),m=f.length>1?f.length-1:0,h=t,g=C(`hover-gallery`,n),_=Object.assign({},e);delete _.as,delete _.className,delete _.wrapperClassName,delete _.children,delete _.items,delete _.imageClassName,delete _.fit,delete _.showGuide,delete _.guideLabels,delete _.guideClassName,delete _.guideItemClassName;let v=b(h,{..._,className:g,children:p});return!c||m===0?v:y(`div`,{className:C(`grid *:[grid-area:1/1]`,r),children:[v,b(`div`,{className:C(`pointer-events-none grid font-mono text-white text-shadow-lg`,u),style:{gridTemplateColumns:`repeat(${m}, minmax(0, 1fr))`},"aria-hidden":`true`,children:f.slice(1).map((e,t)=>b(`div`,{className:C(`from-white/10 via-transparent to-black/10 bg-linear-80 grid place-content-center`,d),children:l?.[t]??e.label??t+2},e.key))})]})},k=a=>d(c=>{let l=s(`div`,c);e(l,`component-preview not-prose text-base-content my-6 lg:my-12`);let u=s(`div`,l);t(l,u),e(u,`flex flex-wrap items-start justify-between gap-3`);let m=s(`div`,u);t(u,m);let g=s(`h2`,m);t(m,g),e(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),t(g,r(`# `));let _=i(`rue:slot:anchor`);t(g,_),n(()=>{let e=a.title;h(()=>f(e,g,_))});let y=i(`rue:slot:anchor`);t(m,y),n(()=>{let r=a.summary?d(()=>{let r=o(),c=s(`p`,r);t(r,c),e(c,`m-0 text-sm opacity-70`);let l=i(`rue:slot:anchor`);return t(c,l),n(()=>{let e=a.summary;h(()=>f(e,c,l))}),r}):``;h(()=>f(r,m,y))});let b=i(`rue:component:anchor`);t(l,b),n(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:a.tab.value,onChange:e=>a.tab.value=e,className:`mb-3 mt-4`});h(()=>f(e,l,b))});let x=i(`rue:slot:anchor`);return t(l,x),n(()=>{let e=a.tab.value===`preview`?a.preview():d(()=>{let e=o(),r=i(`rue:component:anchor`);return t(e,r),n(()=>{let t=p(v,{className:`mt-2`,lang:`tsx`,code:a.code});h(()=>f(t,e,r))}),e});h(()=>f(e,l,x))}),l}),A=a=>d(l=>{let u=s(`div`,l);e(u,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let p=s(`table`,u);t(u,p),e(p,`table table-zebra`);let m=s(`thead`,p);t(p,m);let g=s(`tr`,m);t(m,g);let v=s(`th`,g);t(g,v),t(v,r(`属性`));let y=s(`th`,g);t(g,y),t(y,r(`说明`));let b=s(`th`,g);t(g,b),t(b,r(`类型`));let x=s(`th`,g);t(g,x),t(x,r(`默认值`));let S=s(`tbody`,p);t(p,S);let C=i(`rue:list:start`),w=i(`rue:list:end`);t(S,C),t(S,w);let T=new Map;return n(()=>{T=_({items:a.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,r,a,l,u)=>{f(d(()=>{let r=o(),a=s(`tr`,r);t(r,a),n(()=>{c(a,`key`,String(e.prop))});let l=s(`td`,a);t(a,l);let u=s(`code`,l);t(l,u);let d=i(`rue:slot:anchor`);t(u,d),n(()=>{let t=e.prop;h(()=>f(t,u,d))});let p=s(`td`,a);t(a,p);let m=i(`rue:slot:anchor`);t(p,m),n(()=>{let t=e.description;h(()=>f(t,p,m))});let g=s(`td`,a);t(a,g);let _=s(`code`,g);t(g,_);let v=i(`rue:slot:anchor`);t(_,v),n(()=>{let t=e.type;h(()=>f(t,_,v))});let y=s(`td`,a);t(a,y);let b=s(`code`,y);t(y,b);let x=i(`rue:slot:anchor`);return t(b,x),n(()=>{let t=e.defaultValue;h(()=>f(t,b,x))}),r}),r,a)}})}),u}),j=[{src:`https://img.daisyui.com/images/stock/daisyui-hat-1.webp`,alt:`帽子正面`},{src:`https://img.daisyui.com/images/stock/daisyui-hat-2.webp`,alt:`帽子侧面`,label:`2`},{node:b(`img`,{src:`https://img.daisyui.com/images/stock/daisyui-hat-3.webp`,alt:`帽子背面`}),label:`3`},{src:`https://img.daisyui.com/images/stock/daisyui-hat-4.webp`,alt:`帽子细节`,label:`4`}],M=[{src:`https://img.daisyui.com/images/stock/daisyui-hat-1.webp`,alt:`基础款帽子正面`},{src:`https://img.daisyui.com/images/stock/daisyui-hat-2.webp`,alt:`基础款帽子侧面`},{src:`https://img.daisyui.com/images/stock/daisyui-hat-3.webp`,alt:`基础款帽子背面`},{src:`https://img.daisyui.com/images/stock/daisyui-hat-4.webp`,alt:`基础款帽子细节`}],N=[{prop:`as`,description:`指定根节点标签，可选 figure 或 div`,type:`'figure' | 'div'`,defaultValue:`'figure'`},{prop:`children`,description:`直接传入图片节点；当 items 为空时作为渲染源`,type:`any`,defaultValue:`-`},{prop:`className`,description:`追加到 hover-gallery 根节点的类名`,type:`string`,defaultValue:`-`},{prop:`fit`,description:`统一控制 items 生成图片的 object-fit`,type:`'cover' | 'contain' | 'fill' | 'none' | 'scale-down'`,defaultValue:`-`},{prop:`guideClassName`,description:`追加到导览遮罩容器的类名`,type:`string`,defaultValue:`-`},{prop:`guideItemClassName`,description:`追加到每个导览分栏的类名`,type:`string`,defaultValue:`-`},{prop:`guideLabels`,description:`覆盖导览遮罩文案；长度通常为图片数量减一`,type:`ReadonlyArray<any>`,defaultValue:`-`},{prop:`imageClassName`,description:`统一追加到 items 生成图片上的类名`,type:`string`,defaultValue:`-`},{prop:`items`,description:`数据驱动模式，支持字符串 src、对象项或自定义 node`,type:`ReadonlyArray<string | HoverGalleryItem | any>`,defaultValue:`-`},{prop:`showGuide`,description:`显示与 hover 区域对齐的导览遮罩`,type:`boolean`,defaultValue:`false`},{prop:`wrapperClassName`,description:`showGuide 开启时追加到外层叠放容器的类名`,type:`string`,defaultValue:`-`}],P=`<HoverGallery
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
`,z=()=>{let{tabHow:_,tabBasic:v,tabItems:S,tabGuide:C,tabCard:w}=g(`useSetup:0:0`,()=>m(()=>({tabHow:g(`ref:1:0`,()=>u(`preview`)),tabBasic:g(`ref:1:1`,()=>u(`preview`)),tabItems:g(`ref:1:2`,()=>u(`preview`)),tabGuide:g(`ref:1:3`,()=>u(`preview`)),tabCard:g(`ref:1:4`,()=>u(`preview`))})));return d(u=>{let m=o(),g=i(`rue:component:anchor`);return t(m,g),f(p(x,{children:d(()=>{let u=o(),d=s(`div`,u);t(u,d),e(d,`max-w-none prose prose-sm md:prose-base`);let m=s(`h1`,d);t(d,m),t(m,r(`Hover Gallery 悬浮画廊`));let g=s(`p`,d);t(d,g),e(g,`text-sm mt-3 mb-3`),t(g,r(`Hover Gallery 适合做商品多视角缩略图。Rue 这一版把原本散落在 demo 里的结构提炼成组件 API：既能继续直接写`));let x=s(`code`,g);t(g,x),t(x,r(`children`)),t(g,r(`，也能切到`));let T=s(`code`,g);t(g,T),t(T,r(`items`));let E=a(g);t(g,E),l(E,` `),t(g,r(`数据驱动，并把导览遮罩和图片层样式统一收口到组件里。`));let D=s(`h2`,d);t(d,D),t(D,r(`何时使用`));let z=s(`ul`,d);t(d,z);let B=s(`li`,z);t(z,B),t(B,r(`需要在商品卡片、作品集卡片里，用最轻的结构承载多张预览图。`));let V=s(`li`,z);t(z,V),t(V,r(`想保留纯 CSS 的 hover 体验，但又不想在页面层重复写导览遮罩和图片映射逻辑。`));let H=s(`li`,z);t(z,H),t(H,r(`同一套页面里既有静态写法，也有列表数据驱动写法，希望 API 可以平滑共存。`));let U=i(`rue:component:anchor`);t(d,U),n(()=>{let e=p(k,{title:`How it works`,summary:`第一张图片默认可见，其余图片会对应到横向 hover 分栏。组件现在可以直接输出这层导览遮罩。`,tab:_,preview:()=>b(`div`,{className:`flex justify-center`,children:b(O,{className:`max-w-60`,wrapperClassName:`max-w-60 rounded-box overflow-hidden shadow`,showGuide:!0,items:j})}),code:P});h(()=>f(e,d,U))});let W=i(`rue:component:anchor`);t(d,W),n(()=>{let e=p(k,{title:`基础用法`,summary:`保留原来的 children 写法。适合已经手写好图片节点的场景。`,tab:v,preview:()=>b(`div`,{className:`flex justify-center`,children:y(O,{as:`figure`,className:`max-w-60`,children:[b(`img`,{src:`https://img.daisyui.com/images/stock/daisyui-hat-1.webp`,alt:`帽子正面`}),b(`img`,{src:`https://img.daisyui.com/images/stock/daisyui-hat-2.webp`,alt:`帽子侧面`}),b(`img`,{src:`https://img.daisyui.com/images/stock/daisyui-hat-3.webp`,alt:`帽子背面`}),b(`img`,{src:`https://img.daisyui.com/images/stock/daisyui-hat-4.webp`,alt:`帽子细节`})]})}),code:F});h(()=>f(e,d,W))});let G=i(`rue:component:anchor`);t(d,G),n(()=>{let e=p(k,{title:`数据驱动`,summary:`items 支持字符串、对象项和自定义 node，方便从接口数据或内容配置直接渲染。`,tab:S,preview:()=>b(`div`,{className:`flex justify-center`,children:b(O,{as:`figure`,className:`max-w-60`,items:j})}),code:I});h(()=>f(e,d,G))});let K=i(`rue:component:anchor`);t(d,K),n(()=>{let e=p(k,{title:`自定义导览与图片层`,summary:`导览文案、导览样式和图片 object-fit 都能在组件层统一配置，不需要再在页面里手工叠 grid。`,tab:C,preview:()=>b(`div`,{className:`flex justify-center`,children:y(`div`,{className:`space-y-3`,children:[b(O,{className:`max-w-sm bg-base-100`,wrapperClassName:`max-w-sm rounded-box overflow-hidden border border-base-300 shadow-lg`,imageClassName:`aspect-[4/3] w-full bg-base-200`,fit:`contain`,showGuide:!0,guideLabels:[`侧面`,`背面`,`细节`],guideClassName:`text-xs font-semibold text-base-content`,guideItemClassName:`from-base-100/70 via-transparent to-base-content/10`,items:M}),y(`p`,{className:`m-0 text-xs opacity-70`,children:[`这一组更适合做详情页的角度预览，统一的 `,b(`code`,{children:`fit`}),` 和`,` `,b(`code`,{children:`imageClassName`}),` 可以把不同来源的图片先收敛到同一版式里。`]})]})}),code:L});h(()=>f(e,d,K))});let q=i(`rue:component:anchor`);t(d,q),n(()=>{let e=p(k,{title:`商品卡片组合`,summary:`保留原来的卡片场景，但把图片映射交给 HoverGallery 自己处理。`,tab:w,preview:()=>b(`div`,{className:`flex justify-center`,children:y(`div`,{className:`card card-sm bg-base-200 max-w-72 border border-base-300/60 shadow-lg`,children:[b(O,{as:`figure`,items:M,imageClassName:`aspect-[4/3] w-full object-cover`}),y(`div`,{className:`card-body gap-3`,children:[y(`div`,{className:`flex items-start justify-between gap-3`,children:[y(`div`,{children:[b(`h3`,{className:`card-title text-base`,children:`Rue Field Cap`}),b(`p`,{className:`m-0 text-sm opacity-70`,children:`Cotton twill, matte buckle, small logo stitch.`})]}),b(`span`,{className:`badge badge-primary badge-soft`,children:`New`})]}),y(`div`,{className:`flex items-center justify-between text-sm`,children:[b(`span`,{className:`opacity-70`,children:`4 angles preview`}),b(`strong`,{children:`¥199`})]})]})]})}),code:R});h(()=>f(e,d,q))});let J=s(`h2`,d);t(d,J),c(J,`id`,`hover-gallery-api`),t(J,r(`API`));let Y=i(`rue:component:anchor`);return t(d,Y),n(()=>{let e=p(A,{rows:N});h(()=>f(e,d,Y))}),u})}),m,g),m})};export{z as default};