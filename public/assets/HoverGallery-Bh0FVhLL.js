import{F as e,I as t,K as n,L as r,N as i,Q as a,R as o,W as s,d as c,dt as l,ht as u,l as d,st as f,t as p,vt as m,z as h}from"./vapor-runtime-BuwLbCGk.js";import{a as g,n as _}from"./vapor-helpers-vapor-Bly5xJie.js";import{n as v,t as y}from"./src-BQwLQD8R.js";import{n as b}from"./SidebarPlaygroundDesign-SQXYHI-q.js";import{t as x}from"./Code-DQxnq0in.js";import{t as S}from"./tabs-DqfJzZfa.js";var C=(e,t)=>t?`${e} ${t}`:e,w=e=>{switch(e){case`contain`:return`object-contain`;case`fill`:return`object-fill`;case`none`:return`object-none`;case`scale-down`:return`object-scale-down`;default:return e?`object-cover`:void 0}},T=e=>{if(e==null||e===!1)return[];if(!Array.isArray(e))return[e];let t=[];return e.forEach(e=>{t.push(...T(e))}),t},E=(e,t,n,r)=>{if(typeof e==`string`)return{key:t,node:y(`img`,{src:e,alt:``,className:C(``,C(n??``,r)).trim()||void 0},t)};if(e&&typeof e==`object`){let i=e;if(i.node!=null)return{key:i.key??t,node:i.node,label:i.label};if(i.src)return{key:i.key??t,label:i.label,node:y(`img`,{src:i.src,alt:i.alt??``,className:C(C(n??``,r),C(i.className??``,i.imageClassName)).trim()||void 0},i.key??t)}}return{key:t,node:e}},D=(e,t,n,r)=>e&&e.length>0?e.map((e,t)=>E(e,t,n,r)):T(t).map((e,t)=>({key:t,node:e})),O=e=>{let t=e.as??`figure`,n=e.className,r=e.wrapperClassName,i=e.children,a=e.items,o=e.imageClassName,s=e.fit,c=e.showGuide,l=e.guideLabels,u=e.guideClassName,d=e.guideItemClassName,f=D(a,i,w(s),o),p=f.map(e=>e.node),m=f.length>1?f.length-1:0,h=t,g=C(`hover-gallery`,n),_=Object.assign({},e);delete _.as,delete _.className,delete _.wrapperClassName,delete _.children,delete _.items,delete _.imageClassName,delete _.fit,delete _.showGuide,delete _.guideLabels,delete _.guideClassName,delete _.guideItemClassName;let b=y(h,{..._,className:g,children:p});return!c||m===0?b:v(`div`,{className:C(`grid *:[grid-area:1/1]`,r),children:[b,y(`div`,{className:C(`pointer-events-none grid font-mono text-white text-shadow-lg`,u),style:{gridTemplateColumns:`repeat(${m}, minmax(0, 1fr))`},"aria-hidden":`true`,children:f.slice(1).map((e,t)=>y(`div`,{className:C(`from-white/10 via-transparent to-black/10 bg-linear-80 grid place-content-center`,d),children:l?.[t]??e.label??t+2},e.key))})]})},k=a=>c(s=>{let u=r(`div`,s);n(u,`component-preview not-prose text-base-content my-6 lg:my-12`);let f=r(`div`,u);i(u,f),n(f,`flex flex-wrap items-start justify-between gap-3`);let h=r(`div`,f);i(f,h);let g=r(`h2`,h);i(h,g),n(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(g,o(`# `));let _=e(`rue:slot:anchor`);i(g,_),m(()=>{let e=a.title;l(()=>d(e,g,_))});let v=e(`rue:slot:anchor`);i(h,v),m(()=>{let o=a.summary?c(()=>{let o=t(),s=r(`p`,o);i(o,s),n(s,`m-0 text-sm opacity-70`);let c=e(`rue:slot:anchor`);return i(s,c),m(()=>{let e=a.summary;l(()=>d(e,s,c))}),o}):``;l(()=>d(o,h,v))});let y=e(`rue:component:anchor`);i(u,y),m(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:a.tab.value,onChange:e=>a.tab.value=e,className:`mb-3 mt-4`});l(()=>d(e,u,y))});let b=e(`rue:slot:anchor`);return i(u,b),m(()=>{let n=a.tab.value===`preview`?a.preview():c(()=>{let n=t(),r=e(`rue:component:anchor`);return i(n,r),m(()=>{let e=p(x,{className:`mt-2`,lang:`tsx`,code:a.code});l(()=>d(e,n,r))}),n});l(()=>d(n,u,b))}),u}),A=a=>c(u=>{let f=r(`div`,u);n(f,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let p=r(`table`,f);i(f,p),n(p,`table table-zebra`);let h=r(`thead`,p);i(p,h);let g=r(`tr`,h);i(h,g);let v=r(`th`,g);i(g,v),i(v,o(`属性`));let y=r(`th`,g);i(g,y),i(y,o(`说明`));let b=r(`th`,g);i(g,b),i(b,o(`类型`));let x=r(`th`,g);i(g,x),i(x,o(`默认值`));let S=r(`tbody`,p);i(p,S);let C=e(`rue:list:start`),w=e(`rue:list:end`);i(S,C),i(S,w);let T=new Map;return m(()=>{T=_({items:a.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,a,o,u,f)=>{d(c(()=>{let a=t(),o=r(`tr`,a);i(a,o),m(()=>{s(o,`key`,String(n.prop))});let c=r(`td`,o);i(o,c);let u=r(`code`,c);i(c,u);let f=e(`rue:slot:anchor`);i(u,f),m(()=>{let e=n.prop;l(()=>d(e,u,f))});let p=r(`td`,o);i(o,p);let h=e(`rue:slot:anchor`);i(p,h),m(()=>{let e=n.description;l(()=>d(e,p,h))});let g=r(`td`,o);i(o,g);let _=r(`code`,g);i(g,_);let v=e(`rue:slot:anchor`);i(_,v),m(()=>{let e=n.type;l(()=>d(e,_,v))});let y=r(`td`,o);i(o,y);let b=r(`code`,y);i(y,b);let x=e(`rue:slot:anchor`);return i(b,x),m(()=>{let e=n.defaultValue;l(()=>d(e,b,x))}),a}),a,o)}})}),f}),j=[{src:`https://img.daisyui.com/images/stock/daisyui-hat-1.webp`,alt:`帽子正面`},{src:`https://img.daisyui.com/images/stock/daisyui-hat-2.webp`,alt:`帽子侧面`,label:`2`},{node:y(`img`,{src:`https://img.daisyui.com/images/stock/daisyui-hat-3.webp`,alt:`帽子背面`}),label:`3`},{src:`https://img.daisyui.com/images/stock/daisyui-hat-4.webp`,alt:`帽子细节`,label:`4`}],M=[{src:`https://img.daisyui.com/images/stock/daisyui-hat-1.webp`,alt:`基础款帽子正面`},{src:`https://img.daisyui.com/images/stock/daisyui-hat-2.webp`,alt:`基础款帽子侧面`},{src:`https://img.daisyui.com/images/stock/daisyui-hat-3.webp`,alt:`基础款帽子背面`},{src:`https://img.daisyui.com/images/stock/daisyui-hat-4.webp`,alt:`基础款帽子细节`}],N=[{prop:`as`,description:`指定根节点标签，可选 figure 或 div`,type:`'figure' | 'div'`,defaultValue:`'figure'`},{prop:`children`,description:`直接传入图片节点；当 items 为空时作为渲染源`,type:`any`,defaultValue:`-`},{prop:`className`,description:`追加到 hover-gallery 根节点的类名`,type:`string`,defaultValue:`-`},{prop:`fit`,description:`统一控制 items 生成图片的 object-fit`,type:`'cover' | 'contain' | 'fill' | 'none' | 'scale-down'`,defaultValue:`-`},{prop:`guideClassName`,description:`追加到导览遮罩容器的类名`,type:`string`,defaultValue:`-`},{prop:`guideItemClassName`,description:`追加到每个导览分栏的类名`,type:`string`,defaultValue:`-`},{prop:`guideLabels`,description:`覆盖导览遮罩文案；长度通常为图片数量减一`,type:`ReadonlyArray<any>`,defaultValue:`-`},{prop:`imageClassName`,description:`统一追加到 items 生成图片上的类名`,type:`string`,defaultValue:`-`},{prop:`items`,description:`数据驱动模式，支持字符串 src、对象项或自定义 node`,type:`ReadonlyArray<string | HoverGalleryItem | any>`,defaultValue:`-`},{prop:`showGuide`,description:`显示与 hover 区域对齐的导览遮罩`,type:`boolean`,defaultValue:`false`},{prop:`wrapperClassName`,description:`showGuide 开启时追加到外层叠放容器的类名`,type:`string`,defaultValue:`-`}],P=`<HoverGallery
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
`,z=()=>{let{tabHow:_,tabBasic:x,tabItems:S,tabGuide:C,tabCard:w}=g(`useSetup:0:0`,()=>u(()=>({tabHow:g(`ref:1:0`,()=>f(`preview`)),tabBasic:g(`ref:1:1`,()=>f(`preview`)),tabItems:g(`ref:1:2`,()=>f(`preview`)),tabGuide:g(`ref:1:3`,()=>f(`preview`)),tabCard:g(`ref:1:4`,()=>f(`preview`))})));return c(u=>{let f=t(),g=e(`rue:component:anchor`);return i(f,g),d(p(b,{children:c(()=>{let c=t(),u=r(`div`,c);i(c,u),n(u,`max-w-none prose prose-sm md:prose-base`);let f=r(`h1`,u);i(u,f),i(f,o(`Hover Gallery 悬浮画廊`));let g=r(`p`,u);i(u,g),n(g,`text-sm mt-3 mb-3`),i(g,o(`Hover Gallery 适合做商品多视角缩略图。Rue 这一版把原本散落在 demo 里的结构提炼成组件 API：既能继续直接写`));let b=r(`code`,g);i(g,b),i(b,o(`children`)),i(g,o(`，也能切到`));let T=r(`code`,g);i(g,T),i(T,o(`items`));let E=h(g);i(g,E),a(E,` `),i(g,o(`数据驱动，并把导览遮罩和图片层样式统一收口到组件里。`));let D=r(`div`,u);i(u,D),n(D,`text-sm flex flex-wrap gap-4`);let z=r(`a`,D);i(D,z),s(z,`href`,`https://daisyui.com/components/hover-gallery/`),s(z,`target`,`_blank`),i(z,o(`查看 Hover Gallery 静态样式`));let B=r(`h2`,u);i(u,B),i(B,o(`何时使用`));let V=r(`ul`,u);i(u,V);let H=r(`li`,V);i(V,H),i(H,o(`需要在商品卡片、作品集卡片里，用最轻的结构承载多张预览图。`));let U=r(`li`,V);i(V,U),i(U,o(`想保留纯 CSS 的 hover 体验，但又不想在页面层重复写导览遮罩和图片映射逻辑。`));let W=r(`li`,V);i(V,W),i(W,o(`同一套页面里既有静态写法，也有列表数据驱动写法，希望 API 可以平滑共存。`));let G=e(`rue:component:anchor`);i(u,G),m(()=>{let e=p(k,{title:`How it works`,summary:`第一张图片默认可见，其余图片会对应到横向 hover 分栏。组件现在可以直接输出这层导览遮罩。`,tab:_,preview:()=>y(`div`,{className:`flex justify-center`,children:y(O,{className:`max-w-60`,wrapperClassName:`max-w-60 rounded-box overflow-hidden shadow`,showGuide:!0,items:j})}),code:P});l(()=>d(e,u,G))});let K=e(`rue:component:anchor`);i(u,K),m(()=>{let e=p(k,{title:`基础用法`,summary:`保留原来的 children 写法。适合已经手写好图片节点的场景。`,tab:x,preview:()=>y(`div`,{className:`flex justify-center`,children:v(O,{as:`figure`,className:`max-w-60`,children:[y(`img`,{src:`https://img.daisyui.com/images/stock/daisyui-hat-1.webp`,alt:`帽子正面`}),y(`img`,{src:`https://img.daisyui.com/images/stock/daisyui-hat-2.webp`,alt:`帽子侧面`}),y(`img`,{src:`https://img.daisyui.com/images/stock/daisyui-hat-3.webp`,alt:`帽子背面`}),y(`img`,{src:`https://img.daisyui.com/images/stock/daisyui-hat-4.webp`,alt:`帽子细节`})]})}),code:F});l(()=>d(e,u,K))});let q=e(`rue:component:anchor`);i(u,q),m(()=>{let e=p(k,{title:`数据驱动`,summary:`items 支持字符串、对象项和自定义 node，方便从接口数据或内容配置直接渲染。`,tab:S,preview:()=>y(`div`,{className:`flex justify-center`,children:y(O,{as:`figure`,className:`max-w-60`,items:j})}),code:I});l(()=>d(e,u,q))});let J=e(`rue:component:anchor`);i(u,J),m(()=>{let e=p(k,{title:`自定义导览与图片层`,summary:`导览文案、导览样式和图片 object-fit 都能在组件层统一配置，不需要再在页面里手工叠 grid。`,tab:C,preview:()=>y(`div`,{className:`flex justify-center`,children:v(`div`,{className:`space-y-3`,children:[y(O,{className:`max-w-sm bg-base-100`,wrapperClassName:`max-w-sm rounded-box overflow-hidden border border-base-300 shadow-lg`,imageClassName:`aspect-[4/3] w-full bg-base-200`,fit:`contain`,showGuide:!0,guideLabels:[`侧面`,`背面`,`细节`],guideClassName:`text-xs font-semibold text-base-content`,guideItemClassName:`from-base-100/70 via-transparent to-base-content/10`,items:M}),v(`p`,{className:`m-0 text-xs opacity-70`,children:[`这一组更适合做详情页的角度预览，统一的 `,y(`code`,{children:`fit`}),` 和`,` `,y(`code`,{children:`imageClassName`}),` 可以把不同来源的图片先收敛到同一版式里。`]})]})}),code:L});l(()=>d(e,u,J))});let Y=e(`rue:component:anchor`);i(u,Y),m(()=>{let e=p(k,{title:`商品卡片组合`,summary:`保留原来的卡片场景，但把图片映射交给 HoverGallery 自己处理。`,tab:w,preview:()=>y(`div`,{className:`flex justify-center`,children:v(`div`,{className:`card card-sm bg-base-200 max-w-72 border border-base-300/60 shadow-lg`,children:[y(O,{as:`figure`,items:M,imageClassName:`aspect-[4/3] w-full object-cover`}),v(`div`,{className:`card-body gap-3`,children:[v(`div`,{className:`flex items-start justify-between gap-3`,children:[v(`div`,{children:[y(`h3`,{className:`card-title text-base`,children:`Rue Field Cap`}),y(`p`,{className:`m-0 text-sm opacity-70`,children:`Cotton twill, matte buckle, small logo stitch.`})]}),y(`span`,{className:`badge badge-primary badge-soft`,children:`New`})]}),v(`div`,{className:`flex items-center justify-between text-sm`,children:[y(`span`,{className:`opacity-70`,children:`4 angles preview`}),y(`strong`,{children:`¥199`})]})]})]})}),code:R});l(()=>d(e,u,Y))});let X=r(`h2`,u);i(u,X),s(X,`id`,`hover-gallery-api`),i(X,o(`API`));let Z=e(`rue:component:anchor`);return i(u,Z),m(()=>{let e=p(A,{rows:N});l(()=>d(e,u,Z))}),c})}),f,g),f})};export{z as default};