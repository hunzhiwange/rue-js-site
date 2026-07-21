import{Cn as e,Ct as t,Lt as n,Nt as r,Tt as i,dt as a,ft as o,mt as s,pn as c,pt as l,st as u,tn as d,vn as f}from"./context-8lXZvIn-.js";import{l as p,o as m,t as h}from"./vapor-runtime-ygJWVcNn.js";import{a as g,n as _}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as v}from"./Code-DhoWkRkB.js";import{n as y,t as b}from"./src-CCTNpCXV.js";import{t as x}from"./tabs-B1XdBEJF.js";import{r as S}from"./SidebarPlaygroundDesign-BbUFY3mM.js";var C=(e,t)=>t?`${e} ${t}`:e,w=e=>Array.isArray(e)?e.some(e=>w(e)):e!=null&&e!==!1,T=e=>{if(e)return e===`start`?`1`:e===`end`?`2`:e},E=e=>{switch(e){case`xs`:return`size-12`;case`sm`:case`small`:return`size-16`;case`md`:case`middle`:case`medium`:return`size-24`;case`lg`:case`large`:return`size-32`;case`xl`:return`size-40`;case`2xl`:return`size-52`;case`3xl`:return`size-64`;default:return}},D=e=>{switch(e){case`top`:return`object-top`;case`bottom`:return`object-bottom`;case`left`:return`object-left`;case`right`:return`object-right`;case`top-left`:return`object-left-top`;case`top-right`:return`object-right-top`;case`bottom-left`:return`object-left-bottom`;case`bottom-right`:return`object-right-bottom`;default:return e?`object-center`:void 0}},O=e=>{switch(e){case`contain`:return`object-contain`;case`fill`:return`object-fill`;case`none`:return`object-none`;case`scale-down`:return`object-scale-down`;default:return e?`object-cover`:void 0}},k=e=>{switch(e){case`neutral`:return`bg-neutral text-neutral-content`;case`primary`:return`bg-primary text-primary-content`;case`secondary`:return`bg-secondary text-secondary-content`;case`accent`:return`bg-accent text-accent-content`;case`info`:return`bg-info text-info-content`;case`success`:return`bg-success text-success-content`;case`warning`:return`bg-warning text-warning-content`;case`error`:return`bg-error text-error-content`;case`base`:return`bg-base-200 text-base-content`;default:return}},A=e=>{switch(e){case`neutral`:return`ring-neutral/35`;case`primary`:return`ring-primary/35`;case`secondary`:return`ring-secondary/35`;case`accent`:return`ring-accent/35`;case`info`:return`ring-info/35`;case`success`:return`ring-success/35`;case`warning`:return`ring-warning/35`;case`error`:return`ring-error/35`;default:return`ring-base-300`}},j=({shape:e,half:t,size:n,fit:r,position:i,tone:a,bordered:o,ring:s,shadow:c,interactive:l})=>{let u=`mask mask-${e??`squircle`}`,d=T(t),f=E(n),p=O(r),m=D(i),h=k(a);return d&&(u+=` mask-half-${d}`),f&&(u+=` ${f}`),p&&(u+=` ${p}`),m&&(u+=` ${m}`),h&&(u+=` ${h}`),o&&(u+=` ring-1 ring-inset ring-base-300/80`),s&&(u+=` ring-2 ring-offset-2 ring-offset-base-100 ${A(a)}`),c&&(u+=` shadow-xl shadow-base-content/10`),l&&(u+=` transition duration-200 ease-out hover:-translate-y-1 hover:shadow-2xl`),u},M=s=>{let{__rue_rest_omit_0:c,__rue_rest_omit_1:h,__rue_rest_omit_2:_,__rue_rest_omit_3:v,__rue_rest_omit_4:y,__rue_rest_omit_5:b,__rue_rest_omit_6:x,__rue_rest_omit_7:S,__rue_rest_omit_8:T,__rue_rest_omit_9:E,__rue_rest_omit_10:D,__rue_rest_omit_11:O,__rue_rest_omit_12:k,__rue_rest_omit_13:A,__rue_rest_omit_14:M,__rue_rest_omit_15:N,__rue_rest_omit_16:P,__rue_rest_omit_17:F,__rue_rest_omit_18:I,__rue_rest_omit_19:L,__rue_rest_omit_20:R,__rue_rest_omit_21:z,rest:B,cls:V,contentNode:H,mediaMode:U}=g(`useSetup:0:0`,()=>e(()=>{let{as:e,shape:t,half:r,size:i,fit:a,position:o,tone:c,bordered:l,ring:u,shadow:d,interactive:f,src:p,alt:m,imageProps:h,wrapperClassName:_,imageClassName:v,content:y,contentClassName:b,caption:x,captionClassName:S,className:C,children:T,...E}=s,D=g(`computed:1:0`,()=>n(()=>j({shape:s.shape===void 0?`squircle`:s.shape,half:s.half,size:s.size,fit:s.fit===void 0?`cover`:s.fit,position:s.position,tone:s.tone,bordered:s.bordered,ring:s.ring,shadow:s.shadow,interactive:s.interactive}))),O=g(`computed:1:1`,()=>n(()=>s.content??s.children)),k=O;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,__rue_rest_omit_6:c,__rue_rest_omit_7:l,__rue_rest_omit_8:u,__rue_rest_omit_9:d,__rue_rest_omit_10:f,__rue_rest_omit_11:p,__rue_rest_omit_12:m,__rue_rest_omit_13:h,__rue_rest_omit_14:_,__rue_rest_omit_15:v,__rue_rest_omit_16:y,__rue_rest_omit_17:b,__rue_rest_omit_18:x,__rue_rest_omit_19:S,__rue_rest_omit_20:C,__rue_rest_omit_21:T,rest:E,cls:D,contentNode:O,mediaMode:g(`computed:1:2`,()=>n(()=>!!s.src&&(w(k.get())||s.caption!=null||s.wrapperClassName!=null||s.imageClassName!=null||s.contentClassName!=null||s.captionClassName!=null||(s.as===void 0?`img`:s.as)===`figure`)))}}));if(U.get()){let e=C(`relative inline-flex flex-col items-center gap-3`,s.wrapperClassName);return(s.as===void 0?`img`:s.as)===`div`?p(n=>{let c=l(`div`,n);d(()=>{r(c,B)}),d(()=>{i(c,e)});let h=l(`div`,c);u(c,h),i(h,`relative inline-flex`);let g=l(`img`,h);u(h,g),d(()=>{r(g,s.imageProps)}),d(()=>{t(g,`src`,String(s.src))}),d(()=>{t(g,`alt`,String(s.alt))}),d(()=>{i(g,C(C(V.get(),s.className),s.imageClassName))});let _=a(`rue:slot:anchor`);u(h,_),d(()=>{let e=w(H.get())?p(()=>{let e=o(),t=l(`div`,e);u(e,t),d(()=>{i(t,C(`absolute inset-0 grid place-items-center p-4 text-center`,s.contentClassName))});let n=a(`rue:slot:anchor`);return u(t,n),d(()=>{let e=H.get();f(()=>m(e,t,n))}),e}):``;f(()=>m(e,h,_))});let v=a(`rue:slot:anchor`);return u(c,v),d(()=>{let e=s.caption==null?``:p(()=>{let e=o(),t=l(`div`,e);u(e,t),d(()=>{i(t,C(`text-center text-sm opacity-70`,s.captionClassName))});let n=a(`rue:slot:anchor`);return u(t,n),d(()=>{let e=s.caption;f(()=>m(e,t,n))}),e});f(()=>m(e,c,v))}),c}):p(n=>{let c=l(`figure`,n);d(()=>{r(c,B)}),d(()=>{i(c,e)});let h=l(`div`,c);u(c,h),i(h,`relative inline-flex`);let g=l(`img`,h);u(h,g),d(()=>{r(g,s.imageProps)}),d(()=>{t(g,`src`,String(s.src))}),d(()=>{t(g,`alt`,String(s.alt))}),d(()=>{i(g,C(C(V.get(),s.className),s.imageClassName))});let _=a(`rue:slot:anchor`);u(h,_),d(()=>{let e=w(H.get())?p(()=>{let e=o(),t=l(`div`,e);u(e,t),d(()=>{i(t,C(`absolute inset-0 grid place-items-center p-4 text-center`,s.contentClassName))});let n=a(`rue:slot:anchor`);return u(t,n),d(()=>{let e=H.get();f(()=>m(e,t,n))}),e}):``;f(()=>m(e,h,_))});let v=a(`rue:slot:anchor`);return u(c,v),d(()=>{let e=s.caption==null?``:p(()=>{let e=o(),t=l(`figcaption`,e);u(e,t),d(()=>{i(t,C(`text-center text-sm opacity-70`,s.captionClassName))});let n=a(`rue:slot:anchor`);return u(t,n),d(()=>{let e=s.caption;f(()=>m(e,t,n))}),e});f(()=>m(e,c,v))}),c})}let W=C(V.get(),s.className);return(s.as===void 0?`img`:s.as)===`div`?p(e=>{let t=l(`div`,e);d(()=>{r(t,B)}),d(()=>{i(t,W)});let n=a(`rue:children:anchor`);return u(t,n),d(()=>{let e=s.children;f(()=>m(e,t,n))}),t}):(s.as===void 0?`img`:s.as)===`span`?p(e=>{let t=l(`span`,e);d(()=>{r(t,B)}),d(()=>{i(t,W)});let n=a(`rue:children:anchor`);return u(t,n),d(()=>{let e=s.children;f(()=>m(e,t,n))}),t}):(s.as===void 0?`img`:s.as)===`figure`?p(e=>{let t=l(`figure`,e);d(()=>{r(t,B)}),d(()=>{i(t,W)});let n=a(`rue:children:anchor`);return u(t,n),d(()=>{let e=s.children;f(()=>m(e,t,n))}),t}):(s.as===void 0?`img`:s.as)===`section`?p(e=>{let t=l(`section`,e);d(()=>{r(t,B)}),d(()=>{i(t,W)});let n=a(`rue:children:anchor`);return u(t,n),d(()=>{let e=s.children;f(()=>m(e,t,n))}),t}):(s.as===void 0?`img`:s.as)===`article`?p(e=>{let t=l(`article`,e);d(()=>{r(t,B)}),d(()=>{i(t,W)});let n=a(`rue:children:anchor`);return u(t,n),d(()=>{let e=s.children;f(()=>m(e,t,n))}),t}):(s.as===void 0?`img`:s.as)===`a`?p(e=>{let t=l(`a`,e);d(()=>{r(t,B)}),d(()=>{i(t,W)});let n=a(`rue:children:anchor`);return u(t,n),d(()=>{let e=s.children;f(()=>m(e,t,n))}),t}):(s.as===void 0?`img`:s.as)===`button`?p(e=>{let t=l(`button`,e);d(()=>{r(t,B)}),d(()=>{i(t,W)});let n=a(`rue:children:anchor`);return u(t,n),d(()=>{let e=s.children;f(()=>m(e,t,n))}),t}):p(e=>{let n=l(`img`,e);return d(()=>{r(n,B)}),d(()=>{t(n,`src`,String(s.src))}),d(()=>{t(n,`alt`,String(s.alt))}),d(()=>{i(n,W)}),n})},N=`https://picsum.photos/320/320?grayscale`,P=`https://picsum.photos/420/240?grayscale`,F=`https://picsum.photos/240/420?grayscale`,I=[`squircle`,`heart`,`hexagon`,`hexagon-2`,`decagon`,`pentagon`,`diamond`,`square`,`circle`],L=[`star`,`star-2`],R=[`triangle`,`triangle-2`,`triangle-3`,`triangle-4`],z=[`xs`,`sm`,`md`,`lg`,`xl`,`2xl`],B=[{label:`cover`,fit:`cover`,src:P},{label:`contain`,fit:`contain`,src:F},{label:`fill`,fit:`fill`,src:P}],V=[{label:`Base`,tone:`base`},{label:`Primary`,tone:`primary`},{label:`Secondary`,tone:`secondary`},{label:`Accent`,tone:`accent`},{label:`Success`,tone:`success`},{label:`Warning`,tone:`warning`}],H=[{prop:`as`,description:`指定渲染标签，默认输出 img，也可渲染 div、figure 等任意宿主元素`,type:`string`,defaultValue:`'img'`},{prop:`shape`,description:`遮罩形状，覆盖当前支持的全部 mask-* 造型`,type:`'squircle' | 'heart' | 'hexagon' | 'hexagon-2' | 'decagon' | 'pentagon' | 'diamond' | 'square' | 'circle' | 'star' | 'star-2' | 'triangle' | 'triangle-2' | 'triangle-3' | 'triangle-4'`,defaultValue:`'squircle'`},{prop:`half`,description:`半边遮罩；支持数字写法，也支持 start / end 语义别名`,type:`'1' | '2' | 'start' | 'end'`,defaultValue:`-`},{prop:`size`,description:`语义尺寸，映射到一组常用正方形尺寸 class`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'`,defaultValue:`-`},{prop:`fit`,description:`媒体内容适配模式，输出 object-* 类名`,type:`'cover' | 'contain' | 'fill' | 'none' | 'scale-down'`,defaultValue:`'cover'`},{prop:`tone`,description:`给非图片宿主补充背景与前景色，方便做头像牌、数字徽记和内容卡片`,type:`'base' | 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'`,defaultValue:`-`},{prop:`bordered`,description:`追加轻量内描边，适合浅背景图片或卡片`,type:`boolean`,defaultValue:`false`},{prop:`ring`,description:`追加 ring 与 offset，tone 存在时会自动继承对应的环颜色`,type:`boolean`,defaultValue:`false`},{prop:`shadow`,description:`追加投影，适合头像、封面和内容模块`,type:`boolean`,defaultValue:`false`},{prop:`interactive`,description:`追加轻量 hover 动效，方便做可点击素材墙或精选卡片`,type:`boolean`,defaultValue:`false`},{prop:`className`,description:`透传自定义样式类，可与组件生成的 mask 类叠加`,type:`string`,defaultValue:`-`}],U=e=>p(t=>{let n=l(`div`,t);i(n,`component-preview not-prose text-base-content my-6 lg:my-12`);let r=l(`div`,n);u(n,r),i(r,`flex flex-wrap items-start justify-between gap-3`);let c=l(`div`,r);u(r,c);let g=l(`h2`,c);u(c,g),i(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),u(g,s(`# `));let _=a(`rue:slot:anchor`);u(g,_),d(()=>{let t=e.title;f(()=>m(t,g,_))});let y=a(`rue:slot:anchor`);u(c,y),d(()=>{let t=e.summary?p(()=>{let t=o(),n=l(`p`,t);u(t,n),i(n,`m-0 text-sm opacity-70`);let r=a(`rue:slot:anchor`);return u(n,r),d(()=>{let t=e.summary;f(()=>m(t,n,r))}),t}):``;f(()=>m(t,c,y))});let b=a(`rue:component:anchor`);u(n,b),d(()=>{let t=h(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`});f(()=>m(t,n,b))});let S=a(`rue:slot:anchor`);return u(n,S),d(()=>{let t=e.tab.value===`preview`?e.preview():p(()=>{let t=o(),n=a(`rue:component:anchor`);return u(t,n),d(()=>{let r=h(v,{className:`mt-2`,lang:`tsx`,code:e.code});f(()=>m(r,t,n))}),t});f(()=>m(t,n,S))}),n}),W=e=>p(n=>{let r=l(`div`,n);i(r,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let c=l(`table`,r);u(r,c),i(c,`table table-zebra`);let h=l(`thead`,c);u(c,h);let g=l(`tr`,h);u(h,g);let v=l(`th`,g);u(g,v),u(v,s(`属性`));let y=l(`th`,g);u(g,y),u(y,s(`说明`));let b=l(`th`,g);u(g,b),u(b,s(`类型`));let x=l(`th`,g);u(g,x),u(x,s(`默认值`));let S=l(`tbody`,c);u(c,S);let C=a(`rue:list:start`),w=a(`rue:list:end`);u(S,C),u(S,w);let T=new Map;return d(()=>{T=_({items:e.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,n,r,i,s)=>{m(p(()=>{let n=o(),r=l(`tr`,n);u(n,r),d(()=>{t(r,`key`,String(e.prop))});let i=l(`td`,r);u(r,i);let s=l(`code`,i);u(i,s);let c=a(`rue:slot:anchor`);u(s,c),d(()=>{let t=e.prop;f(()=>m(t,s,c))});let p=l(`td`,r);u(r,p);let h=a(`rue:slot:anchor`);u(p,h),d(()=>{let t=e.description;f(()=>m(t,p,h))});let g=l(`td`,r);u(r,g);let _=l(`code`,g);u(g,_);let v=a(`rue:slot:anchor`);u(_,v),d(()=>{let t=e.type;f(()=>m(t,_,v))});let y=l(`td`,r);u(r,y);let b=l(`code`,y);u(y,b);let x=a(`rue:slot:anchor`);return u(b,x),d(()=>{let t=e.defaultValue;f(()=>m(t,b,x))}),n}),n,r)}})}),r}),G=()=>{let{tabShapes:t,tabStars:n,tabTriangles:r,tabHalf:_,tabSize:v,tabFit:x,tabTone:C}=g(`useSetup:0:0`,()=>e(()=>({tabShapes:g(`ref:1:0`,()=>c(`preview`)),tabStars:g(`ref:1:1`,()=>c(`preview`)),tabTriangles:g(`ref:1:2`,()=>c(`preview`)),tabHalf:g(`ref:1:3`,()=>c(`preview`)),tabSize:g(`ref:1:4`,()=>c(`preview`)),tabFit:g(`ref:1:5`,()=>c(`preview`)),tabTone:g(`ref:1:6`,()=>c(`preview`))})));return p(e=>{let c=o(),g=a(`rue:component:anchor`);return u(c,g),m(h(S,{children:p(()=>{let e=o(),c=l(`div`,e);u(e,c),i(c,`max-w-none prose prose-sm md:prose-base`);let p=l(`h1`,c);u(c,p),u(p,s(`Mask 形状裁切`));let g=l(`p`,c);u(c,g),i(g,`text-sm mt-3 mb-3`),u(g,s(`Mask 现在不只是基础 class 的薄封装。它使用 Rue 的轻量视觉路线，同时补上尺寸、fit、tone、ring 与交互态这些更适合实际页面搭建的语义化能力。`));let S=a(`rue:component:anchor`);u(c,S),d(()=>{let e=h(U,{title:`Core shapes`,summary:`展示基础形状示例，并统一到更整洁的卡片布局里。`,tab:t,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body flex flex-wrap gap-4`,"data-testid":`mask-shapes-demo`,children:I.map(e=>b(M,{shape:e,src:N,alt:e,size:`md`,bordered:!0},e))})}),code:`<Mask shape="squircle" src="${N}" alt="squircle" size="md" bordered />
<Mask shape="heart" src="${N}" alt="heart" size="md" bordered />
<Mask shape="hexagon" src="${N}" alt="hexagon" size="md" bordered />
<Mask shape="hexagon-2" src="${N}" alt="hexagon-2" size="md" bordered />
<Mask shape="decagon" src="${N}" alt="decagon" size="md" bordered />
<Mask shape="pentagon" src="${N}" alt="pentagon" size="md" bordered />
<Mask shape="diamond" src="${N}" alt="diamond" size="md" bordered />
<Mask shape="square" src="${N}" alt="square" size="md" bordered />
<Mask shape="circle" src="${N}" alt="circle" size="md" bordered />`});f(()=>m(e,c,S))});let w=a(`rue:component:anchor`);u(c,w),d(()=>{let e=h(U,{title:`Star variants`,summary:`展示星形与粗星形示例，增加 ring 和 hover，适合头像墙或精选内容。`,tab:n,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body flex flex-wrap gap-5`,children:L.map(e=>b(M,{shape:e,src:N,alt:e,size:`lg`,ring:!0,shadow:!0,interactive:!0},e))})}),code:`<Mask shape="star" src="${N}" alt="star" size="lg" ring shadow interactive />
<Mask shape="star-2" src="${N}" alt="star-2" size="lg" ring shadow interactive />`});f(()=>m(e,c,w))});let T=a(`rue:component:anchor`);u(c,T),d(()=>{let e=h(U,{title:`Triangle variants`,summary:`展示四向三角形示例，并通过统一尺寸让方向差异更好观察。`,tab:r,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body flex flex-wrap gap-5`,children:R.map(e=>b(M,{shape:e,src:N,alt:e,size:`lg`,bordered:!0,shadow:!0},e))})}),code:`<Mask shape="triangle" src="${N}" alt="triangle" size="lg" bordered shadow />
<Mask shape="triangle-2" src="${N}" alt="triangle-2" size="lg" bordered shadow />
<Mask shape="triangle-3" src="${N}" alt="triangle-3" size="lg" bordered shadow />
<Mask shape="triangle-4" src="${N}" alt="triangle-4" size="lg" bordered shadow />`});f(()=>m(e,c,T))});let E=a(`rue:component:anchor`);u(c,E),d(()=>{let e=h(U,{title:`Half modifiers and arbitrary host`,summary:`展示 half modifier 与任意宿主演示，并补上 start / end 语义别名。`,tab:_,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body flex flex-wrap items-center gap-6`,children:[b(M,{shape:`star`,half:`1`,src:N,alt:`star half 1`,size:`lg`,ring:!0}),b(M,{shape:`star`,half:`2`,src:N,alt:`star half 2`,size:`lg`,ring:!0}),b(M,{shape:`diamond`,half:`start`,src:N,alt:`diamond start`,size:`lg`,bordered:!0}),b(M,{as:`div`,shape:`diamond`,tone:`primary`,size:`lg`,ring:!0,shadow:!0,className:`grid place-content-center text-sm font-semibold uppercase tracking-[0.2em]`,"data-testid":`mask-host-demo`,children:`Host`})]})}),code:`<Mask shape="star" half="1" src="${N}" alt="star half 1" size="lg" ring />
<Mask shape="star" half="2" src="${N}" alt="star half 2" size="lg" ring />
<Mask shape="diamond" half="start" src="${N}" alt="diamond start" size="lg" bordered />
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
</Mask>`});f(()=>m(e,c,E))});let D=a(`rue:component:anchor`);u(c,D),d(()=>{let e=h(U,{title:`Semantic sizes`,summary:`尺寸别名适合常见头像和封面场景，不必每次都手写宽高 class。`,tab:v,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body flex flex-wrap items-end gap-5`,children:z.map(e=>y(`div`,{className:`flex flex-col items-center gap-3 text-xs uppercase tracking-[0.18em] opacity-80`,children:[b(M,{shape:`circle`,src:N,alt:e,size:e,ring:!0}),b(`span`,{children:e})]},e))})}),code:`<Mask shape="circle" src="${N}" alt="xs" size="xs" ring />
<Mask shape="circle" src="${N}" alt="sm" size="sm" ring />
<Mask shape="circle" src="${N}" alt="md" size="md" ring />
<Mask shape="circle" src="${N}" alt="lg" size="lg" ring />
<Mask shape="circle" src="${N}" alt="xl" size="xl" ring />
<Mask shape="circle" src="${N}" alt="2xl" size="2xl" ring />`});f(()=>m(e,c,D))});let O=a(`rue:component:anchor`);u(c,O),d(()=>{let e=h(U,{title:`Fit modes`,summary:`fit 语义让宽图、竖图和封面图都能直接得到明确的裁切策略。`,tab:x,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body grid gap-6 md:grid-cols-3`,children:B.map(e=>y(`div`,{className:`space-y-3`,children:[b(`div`,{className:`text-xs font-semibold uppercase tracking-[0.18em] opacity-70`,children:e.label}),b(`div`,{className:`rounded-box bg-base-200 p-4`,children:b(M,{shape:`hexagon-2`,src:e.src,alt:e.label,size:`xl`,fit:e.fit,bordered:!0,className:`mx-auto`})})]},e.label))})}),code:`<Mask shape="hexagon-2" src="${P}" alt="cover" size="xl" fit="cover" bordered className="mx-auto" />
<Mask shape="hexagon-2" src="${F}" alt="contain" size="xl" fit="contain" bordered className="mx-auto" />
<Mask shape="hexagon-2" src="${P}" alt="fill" size="xl" fit="fill" bordered className="mx-auto" />`});f(()=>m(e,c,O))});let k=a(`rue:component:anchor`);u(c,k),d(()=>{let e=h(U,{title:`Tone surfaces`,summary:`tone、ring、shadow 组合后，Mask 也能承担数字徽记、内容牌和亮点卡片的职责。`,tab:C,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-6`,children:[b(`div`,{className:`flex flex-wrap gap-4`,children:V.map(e=>b(M,{as:`div`,shape:`squircle`,tone:e.tone,size:`md`,ring:!0,className:`grid place-content-center text-center text-xs font-semibold uppercase tracking-[0.18em]`,children:e.label},e.label))}),y(`div`,{className:`grid gap-4 md:grid-cols-3`,children:[b(M,{as:`div`,shape:`hexagon`,tone:`secondary`,size:`xl`,ring:!0,shadow:!0,interactive:!0,className:`mx-auto grid place-content-center p-6 text-center`,children:y(`div`,{className:`space-y-1`,children:[b(`div`,{className:`text-3xl font-black`,children:`24`}),b(`div`,{className:`text-xs uppercase tracking-[0.22em] opacity-80`,children:`Launches`})]})}),b(M,{as:`div`,shape:`diamond`,tone:`accent`,size:`xl`,ring:!0,shadow:!0,className:`mx-auto grid place-content-center p-6 text-center`,children:y(`div`,{className:`space-y-1`,children:[b(`div`,{className:`text-sm font-semibold uppercase tracking-[0.18em]`,children:`Featured`}),b(`div`,{className:`text-xs opacity-80`,children:`Rue Studio`})]})}),b(M,{as:`div`,shape:`circle`,tone:`success`,size:`xl`,ring:!0,shadow:!0,className:`mx-auto grid place-content-center p-6 text-center`,children:y(`div`,{className:`space-y-1`,children:[b(`div`,{className:`text-2xl font-black`,children:`98%`}),b(`div`,{className:`text-xs uppercase tracking-[0.18em] opacity-80`,children:`Approval`})]})})]})]})}),code:`<div className="flex flex-wrap gap-4">
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
</div>`});f(()=>m(e,c,k))});let A=l(`div`,c);u(c,A),i(A,`my-8`);let j=l(`h2`,A);u(A,j),i(j,`mt-0`),u(j,s(`API`));let G=a(`rue:component:anchor`);return u(A,G),d(()=>{let e=h(W,{rows:H});f(()=>m(e,A,G))}),e})}),c,g),c})};export{G as default};