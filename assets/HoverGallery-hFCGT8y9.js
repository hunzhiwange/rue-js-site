import{F as e,H as t,I as n,L as r,N as i,P as a,W as o,Y as s,c,j as l,pt as u,rt as d,t as f,u as p,ut as m}from"./vapor-runtime-BZZbPG7x.js";import{a as h,n as g}from"./vapor-helpers-vapor-DuGQh50d.js";import{n as _,t as v}from"./src-DP0sEeZS.js";import{n as y}from"./SidebarPlaygroundDesign-DJfSSlM7.js";import{t as b}from"./Code-C8wy38VS.js";import{t as x}from"./tabs-B-QPmbH8.js";var S=(e,t)=>t?`${e} ${t}`:e,C=e=>{switch(e){case`contain`:return`object-contain`;case`fill`:return`object-fill`;case`none`:return`object-none`;case`scale-down`:return`object-scale-down`;default:return e?`object-cover`:void 0}},w=e=>{if(e==null||e===!1)return[];if(!Array.isArray(e))return[e];let t=[];return e.forEach(e=>{t.push(...w(e))}),t},T=(e,t,n,r)=>{if(typeof e==`string`)return{key:t,node:v(`img`,{src:e,alt:``,className:S(``,S(n??``,r)).trim()||void 0},t)};if(e&&typeof e==`object`){let i=e;if(i.node!=null)return{key:i.key??t,node:i.node,label:i.label};if(i.src)return{key:i.key??t,label:i.label,node:v(`img`,{src:i.src,alt:i.alt??``,className:S(S(n??``,r),S(i.className??``,i.imageClassName)).trim()||void 0},i.key??t)}}return{key:t,node:e}},E=(e,t,n,r)=>e&&e.length>0?e.map((e,t)=>T(e,t,n,r)):w(t).map((e,t)=>({key:t,node:e})),D=e=>{let t=e.as??`figure`,n=e.className,r=e.wrapperClassName,i=e.children,a=e.items,o=e.imageClassName,s=e.fit,c=e.showGuide,l=e.guideLabels,u=e.guideClassName,d=e.guideItemClassName,f=E(a,i,C(s),o),p=f.map(e=>e.node),m=f.length>1?f.length-1:0,h=t,g=S(`hover-gallery`,n),y=Object.assign({},e);delete y.as,delete y.className,delete y.wrapperClassName,delete y.children,delete y.items,delete y.imageClassName,delete y.fit,delete y.showGuide,delete y.guideLabels,delete y.guideClassName,delete y.guideItemClassName;let b=v(h,{...y,className:g,children:p});return!c||m===0?b:_(`div`,{className:S(`grid *:[grid-area:1/1]`,r),children:[b,v(`div`,{className:S(`pointer-events-none grid font-mono text-white text-shadow-lg`,u),style:{gridTemplateColumns:`repeat(${m}, minmax(0, 1fr))`},"aria-hidden":`true`,children:f.slice(1).map((e,t)=>v(`div`,{className:S(`from-white/10 via-transparent to-black/10 bg-linear-80 grid place-content-center`,d),children:l?.[t]??e.label??t+2},e.key))})]})},O=({title:t,summary:d,tab:m,preview:h,code:g})=>p(()=>{let _=e(`div`);o(_,`component-preview not-prose text-base-content my-6 lg:my-12`);let v=e(`div`);l(_,v),o(v,`flex flex-wrap items-start justify-between gap-3`);let y=e(`div`);l(v,y);let S=e(`h2`);l(y,S),o(S,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(S,n(`# `));let C=r(S);l(S,C),u(()=>{s(C,t)});let w=i(`rue:slot:anchor`);l(y,w),u(()=>{c(d?p(()=>{let t=a(),n=e(`p`);l(t,n),o(n,`m-0 text-sm opacity-70`);let i=r(n);return l(n,i),u(()=>{s(i,d)}),t}):``,y,w)});let T=i(`rue:component:anchor`);l(_,T),u(()=>{c(f(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:m.value,onChange:e=>m.value=e,className:`mb-3 mt-4`}),_,T)});let E=i(`rue:slot:anchor`);return l(_,E),u(()=>{c(m.value===`preview`?h():p(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),u(()=>{c(f(b,{className:`mt-2`,lang:`tsx`,code:g}),e,t)}),e}),_,E)}),_}),k=({rows:r})=>p(()=>{let s=e(`div`);o(s,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let d=e(`table`);l(s,d),o(d,`table table-zebra`);let f=e(`thead`);l(d,f);let m=e(`tr`);l(f,m);let h=e(`th`);l(m,h),l(h,n(`属性`));let _=e(`th`);l(m,_),l(_,n(`说明`));let v=e(`th`);l(m,v),l(v,n(`类型`));let y=e(`th`);l(m,y),l(y,n(`默认值`));let b=e(`tbody`);l(d,b);let x=i(`rue:list:start`),S=i(`rue:list:end`);l(b,x),l(b,S);let C=new Map;return u(()=>{C=g({items:r||[],getKey:(e,t)=>e.prop,elements:C,parent:b,before:S,singleRoot:!0,start:x,renderItem:(n,r,o,s,d)=>{c(p(()=>{let r=a(),o=e(`tr`);l(r,o),u(()=>{t(o,`key`,String(n.prop))});let s=e(`td`);l(o,s);let d=e(`code`);l(s,d);let f=i(`rue:slot:anchor`);l(d,f),u(()=>{let e=n.prop;c(e,d,f)});let p=e(`td`);l(o,p);let m=i(`rue:slot:anchor`);l(p,m),u(()=>{let e=n.description;c(e,p,m)});let h=e(`td`);l(o,h);let g=e(`code`);l(h,g);let _=i(`rue:slot:anchor`);l(g,_),u(()=>{let e=n.type;c(e,g,_)});let v=e(`td`);l(o,v);let y=e(`code`);l(v,y);let b=i(`rue:slot:anchor`);return l(y,b),u(()=>{let e=n.defaultValue;c(e,y,b)}),r}),r,o)}})}),s}),A=[{src:`https://img.daisyui.com/images/stock/daisyui-hat-1.webp`,alt:`帽子正面`},{src:`https://img.daisyui.com/images/stock/daisyui-hat-2.webp`,alt:`帽子侧面`,label:`2`},{node:v(`img`,{src:`https://img.daisyui.com/images/stock/daisyui-hat-3.webp`,alt:`帽子背面`}),label:`3`},{src:`https://img.daisyui.com/images/stock/daisyui-hat-4.webp`,alt:`帽子细节`,label:`4`}],j=[{src:`https://img.daisyui.com/images/stock/daisyui-hat-1.webp`,alt:`基础款帽子正面`},{src:`https://img.daisyui.com/images/stock/daisyui-hat-2.webp`,alt:`基础款帽子侧面`},{src:`https://img.daisyui.com/images/stock/daisyui-hat-3.webp`,alt:`基础款帽子背面`},{src:`https://img.daisyui.com/images/stock/daisyui-hat-4.webp`,alt:`基础款帽子细节`}],M=[{prop:`as`,description:`指定根节点标签，可选 figure 或 div`,type:`'figure' | 'div'`,defaultValue:`'figure'`},{prop:`children`,description:`直接传入图片节点；当 items 为空时作为渲染源`,type:`any`,defaultValue:`-`},{prop:`className`,description:`追加到 hover-gallery 根节点的类名`,type:`string`,defaultValue:`-`},{prop:`fit`,description:`统一控制 items 生成图片的 object-fit`,type:`'cover' | 'contain' | 'fill' | 'none' | 'scale-down'`,defaultValue:`-`},{prop:`guideClassName`,description:`追加到导览遮罩容器的类名`,type:`string`,defaultValue:`-`},{prop:`guideItemClassName`,description:`追加到每个导览分栏的类名`,type:`string`,defaultValue:`-`},{prop:`guideLabels`,description:`覆盖导览遮罩文案；长度通常为图片数量减一`,type:`ReadonlyArray<any>`,defaultValue:`-`},{prop:`imageClassName`,description:`统一追加到 items 生成图片上的类名`,type:`string`,defaultValue:`-`},{prop:`items`,description:`数据驱动模式，支持字符串 src、对象项或自定义 node`,type:`ReadonlyArray<string | HoverGalleryItem | any>`,defaultValue:`-`},{prop:`showGuide`,description:`显示与 hover 区域对齐的导览遮罩`,type:`boolean`,defaultValue:`false`},{prop:`wrapperClassName`,description:`showGuide 开启时追加到外层叠放容器的类名`,type:`string`,defaultValue:`-`}],N=`<HoverGallery
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
`,P=`<HoverGallery as="figure" className="max-w-60">
  <img src="https://img.daisyui.com/images/stock/daisyui-hat-1.webp" alt="Hat front" />
  <img src="https://img.daisyui.com/images/stock/daisyui-hat-2.webp" alt="Hat side" />
  <img src="https://img.daisyui.com/images/stock/daisyui-hat-3.webp" alt="Hat back" />
  <img src="https://img.daisyui.com/images/stock/daisyui-hat-4.webp" alt="Hat detail" />
</HoverGallery>
`,F=`const galleryItems = [
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
`,I=`<HoverGallery
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
`,L=`<div className="card card-sm bg-base-200 max-w-72 border border-base-300/60 shadow-lg">
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
`,R=()=>{let{tabHow:g,tabBasic:b,tabItems:x,tabGuide:S,tabCard:C}=h(`useSetup:0:0`,()=>m(()=>({tabHow:h(`ref:1:0`,()=>d(`preview`)),tabBasic:h(`ref:1:1`,()=>d(`preview`)),tabItems:h(`ref:1:2`,()=>d(`preview`)),tabGuide:h(`ref:1:3`,()=>d(`preview`)),tabCard:h(`ref:1:4`,()=>d(`preview`))})));return p(()=>{let d=a(),m=i(`rue:component:anchor`);return l(d,m),c(f(y,{children:p(()=>{let d=a(),p=e(`div`);l(d,p),o(p,`max-w-none prose prose-sm md:prose-base`);let m=e(`h1`);l(p,m),l(m,n(`Hover Gallery 悬浮画廊`));let h=e(`p`);l(p,h),o(h,`text-sm mt-3 mb-3`),l(h,n(`Hover Gallery 适合做商品多视角缩略图。Rue 这一版把原本散落在 demo 里的结构提炼成组件 API：既能继续直接写`));let y=e(`code`);l(h,y),l(y,n(`children`)),l(h,n(`，也能切到`));let w=e(`code`);l(h,w),l(w,n(`items`));let T=r(h);l(h,T),s(T,` `),l(h,n(`数据驱动，并把导览遮罩和图片层样式统一收口到组件里。`));let E=e(`div`);l(p,E),o(E,`text-sm flex flex-wrap gap-4`);let R=e(`a`);l(E,R),t(R,`href`,`https://daisyui.com/components/hover-gallery/`),t(R,`target`,`_blank`),l(R,n(`查看 Hover Gallery 静态样式`));let z=e(`h2`);l(p,z),l(z,n(`何时使用`));let B=e(`ul`);l(p,B);let V=e(`li`);l(B,V),l(V,n(`需要在商品卡片、作品集卡片里，用最轻的结构承载多张预览图。`));let H=e(`li`);l(B,H),l(H,n(`想保留纯 CSS 的 hover 体验，但又不想在页面层重复写导览遮罩和图片映射逻辑。`));let U=e(`li`);l(B,U),l(U,n(`同一套页面里既有静态写法，也有列表数据驱动写法，希望 API 可以平滑共存。`));let W=i(`rue:component:anchor`);l(p,W),u(()=>{c(f(O,{title:`How it works`,summary:`第一张图片默认可见，其余图片会对应到横向 hover 分栏。组件现在可以直接输出这层导览遮罩。`,tab:g,preview:()=>v(`div`,{className:`flex justify-center`,children:v(D,{className:`max-w-60`,wrapperClassName:`max-w-60 rounded-box overflow-hidden shadow`,showGuide:!0,items:A})}),code:N}),p,W)});let G=i(`rue:component:anchor`);l(p,G),u(()=>{c(f(O,{title:`基础用法`,summary:`保留原来的 children 写法。适合已经手写好图片节点的场景。`,tab:b,preview:()=>v(`div`,{className:`flex justify-center`,children:_(D,{as:`figure`,className:`max-w-60`,children:[v(`img`,{src:`https://img.daisyui.com/images/stock/daisyui-hat-1.webp`,alt:`帽子正面`}),v(`img`,{src:`https://img.daisyui.com/images/stock/daisyui-hat-2.webp`,alt:`帽子侧面`}),v(`img`,{src:`https://img.daisyui.com/images/stock/daisyui-hat-3.webp`,alt:`帽子背面`}),v(`img`,{src:`https://img.daisyui.com/images/stock/daisyui-hat-4.webp`,alt:`帽子细节`})]})}),code:P}),p,G)});let K=i(`rue:component:anchor`);l(p,K),u(()=>{c(f(O,{title:`数据驱动`,summary:`items 支持字符串、对象项和自定义 node，方便从接口数据或内容配置直接渲染。`,tab:x,preview:()=>v(`div`,{className:`flex justify-center`,children:v(D,{as:`figure`,className:`max-w-60`,items:A})}),code:F}),p,K)});let q=i(`rue:component:anchor`);l(p,q),u(()=>{c(f(O,{title:`自定义导览与图片层`,summary:`导览文案、导览样式和图片 object-fit 都能在组件层统一配置，不需要再在页面里手工叠 grid。`,tab:S,preview:()=>v(`div`,{className:`flex justify-center`,children:_(`div`,{className:`space-y-3`,children:[v(D,{className:`max-w-sm bg-base-100`,wrapperClassName:`max-w-sm rounded-box overflow-hidden border border-base-300 shadow-lg`,imageClassName:`aspect-[4/3] w-full bg-base-200`,fit:`contain`,showGuide:!0,guideLabels:[`侧面`,`背面`,`细节`],guideClassName:`text-xs font-semibold text-base-content`,guideItemClassName:`from-base-100/70 via-transparent to-base-content/10`,items:j}),_(`p`,{className:`m-0 text-xs opacity-70`,children:[`这一组更适合做详情页的角度预览，统一的 `,v(`code`,{children:`fit`}),` 和`,` `,v(`code`,{children:`imageClassName`}),` 可以把不同来源的图片先收敛到同一版式里。`]})]})}),code:I}),p,q)});let J=i(`rue:component:anchor`);l(p,J),u(()=>{c(f(O,{title:`商品卡片组合`,summary:`保留原来的卡片场景，但把图片映射交给 HoverGallery 自己处理。`,tab:C,preview:()=>v(`div`,{className:`flex justify-center`,children:_(`div`,{className:`card card-sm bg-base-200 max-w-72 border border-base-300/60 shadow-lg`,children:[v(D,{as:`figure`,items:j,imageClassName:`aspect-[4/3] w-full object-cover`}),_(`div`,{className:`card-body gap-3`,children:[_(`div`,{className:`flex items-start justify-between gap-3`,children:[_(`div`,{children:[v(`h3`,{className:`card-title text-base`,children:`Rue Field Cap`}),v(`p`,{className:`m-0 text-sm opacity-70`,children:`Cotton twill, matte buckle, small logo stitch.`})]}),v(`span`,{className:`badge badge-primary badge-soft`,children:`New`})]}),_(`div`,{className:`flex items-center justify-between text-sm`,children:[v(`span`,{className:`opacity-70`,children:`4 angles preview`}),v(`strong`,{children:`¥199`})]})]})]})}),code:L}),p,J)});let Y=e(`h2`);l(p,Y),t(Y,`id`,`hover-gallery-api`),l(Y,n(`API`));let X=i(`rue:component:anchor`);return l(p,X),u(()=>{c(f(k,{rows:M}),p,X)}),d})}),d,m),d})};export{R as default};