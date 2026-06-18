import{$ as e,Ht as t,J as n,Lt as r,Q as i,X as a,Xt as o,Z as s,at as c,gt as l,l as u,qt as d,s as f,st as p,t as m}from"./vapor-runtime-iQZthBPQ.js";import{a as h,n as g}from"./vapor-helpers-vapor-BjKHCvOa.js";import{a as _,i as v}from"./persistentSidebarPlayground-BfF7yM0K.js";import{t as y}from"./button-CyhsFe_V.js";import{t as b}from"./fieldset-CXBmdGMT.js";import{t as x}from"./input-2bBycoUP.js";import{r as S}from"./SidebarPlaygroundDesign-BcHYLGe4.js";import{t as C}from"./PreviewBlock-DJFn4Hia.js";var w={"base-100":`bg-base-100 text-base-content`,"base-200":`bg-base-200 text-base-content`,"base-300":`bg-base-300 text-base-content`,neutral:`bg-neutral text-neutral-content`,primary:`bg-primary text-primary-content`,secondary:`bg-secondary text-secondary-content`,accent:`bg-accent text-accent-content`,info:`bg-info text-info-content`,success:`bg-success text-success-content`,warning:`bg-warning text-warning-content`,error:`bg-error text-error-content`},T={sm:`min-h-80`,md:`min-h-96`,lg:`min-h-[30rem]`,xl:`min-h-[36rem]`,screen:`min-h-screen`},ee={center:`text-center`,split:`flex-col gap-10 lg:flex-row`,"split-reverse":`flex-col gap-10 lg:flex-row-reverse`},E={start:`items-start`,center:`items-center`,end:`items-end`},D={start:`text-left`,center:`text-center`,end:`text-right`},O={sm:`gap-4`,md:`gap-6`,lg:`gap-10`,xl:`gap-14`},k={"base-content":`bg-base-content`,neutral:`bg-neutral`,primary:`bg-primary`,secondary:`bg-secondary`,accent:`bg-accent`,info:`bg-info`,success:`bg-success`,warning:`bg-warning`,error:`bg-error`},A={sm:`text-3xl md:text-4xl`,md:`text-4xl md:text-5xl`,lg:`text-5xl md:text-6xl`,xl:`text-6xl md:text-7xl`},j={sm:`text-sm md:text-base`,md:`text-base md:text-lg`,lg:`text-lg md:text-xl`},M=(...e)=>e.filter(Boolean).join(` `),N=(e,t)=>{if(!(!e&&!t))return{...e,...t}},P=e=>{if(e)return e===!0?{}:e},F=e=>{if(e!=null){if(typeof e==`number`)return{opacity:e};switch(e){case`soft`:return{opacity:.25};case`strong`:return{opacity:.7};default:return{opacity:.45}}}},I=({backgroundImage:e,backgroundPosition:t,backgroundSize:n,backgroundRepeat:r})=>{if(e)return{backgroundImage:`url(${e})`,backgroundPosition:t??`center`,backgroundSize:n??`cover`,backgroundRepeat:r??`no-repeat`}},L=(e,t,n)=>{if(e){if(n)switch(e){case`center`:return`items-center sm:justify-center`;case`end`:return`items-end sm:justify-end`;default:return`items-start sm:justify-start`}if(t===`column`)switch(e){case`center`:return`items-center`;case`end`:return`items-end`;default:return`items-start`}switch(e){case`center`:return`justify-center`;case`end`:return`justify-end`;default:return`justify-start`}}},R=r=>{let{__rue_rest_omit_0:i,__rue_rest_omit_1:c,__rue_rest_omit_2:p,__rue_rest_omit_3:g,__rue_rest_omit_4:_,__rue_rest_omit_5:v,__rue_rest_omit_6:y,__rue_rest_omit_7:b,__rue_rest_omit_8:x,__rue_rest_omit_9:S,__rue_rest_omit_10:C,__rue_rest_omit_11:ee,rest:E,Component:D,backgroundStyle:O,overlayProps:k}=h(`useSetup:0:0`,()=>d(()=>{let{as:e,className:t,children:n,style:i,tone:a,size:o,fullHeight:s,backgroundImage:c,backgroundPosition:u,backgroundSize:d,backgroundRepeat:f,overlay:p,...m}=r;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:n,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,__rue_rest_omit_6:s,__rue_rest_omit_7:c,__rue_rest_omit_8:u,__rue_rest_omit_9:d,__rue_rest_omit_10:f,__rue_rest_omit_11:p,rest:m,Component:r.as===void 0?`div`:r.as,backgroundStyle:h(`computed:1:0`,()=>l(()=>I({backgroundImage:r.backgroundImage,backgroundPosition:r.backgroundPosition,backgroundSize:r.backgroundSize,backgroundRepeat:r.backgroundRepeat}))),overlayProps:h(`computed:1:1`,()=>l(()=>P(r.overlay)))}}));return u(i=>{let c=s(),l=a(`rue:component:anchor`);n(c,l);let d=u(()=>{let i=s(),c=a(`rue:slot:anchor`);n(i,c),o(()=>{let e=k.get()?u(()=>{let e=s(),r=a(`rue:component:anchor`);return n(e,r),o(()=>{let n=m(B,{...k.get()});t(()=>f(n,e,r))}),e}):``;t(()=>f(e,i,c))}),n(i,e(` `));let l=a(`rue:children:anchor`);return n(i,l),o(()=>{let e=r.children;t(()=>f(e,i,l))}),i});return o(()=>{let e=m(D,{...E,style:N(r.style,O.get()),className:M(`hero`,(r.tone===void 0?`default`:r.tone)===`default`?void 0:w[r.tone===void 0?`default`:r.tone],r.fullHeight?T.screen:r.size?T[r.size]:void 0,r.className),children:d});t(()=>f(e,c,l))}),c})},z=e=>{let{__rue_rest_omit_0:r,__rue_rest_omit_1:i,__rue_rest_omit_2:c,__rue_rest_omit_3:l,__rue_rest_omit_4:p,__rue_rest_omit_5:g,__rue_rest_omit_6:_,rest:v,Component:y}=h(`useSetup:0:0:dup1`,()=>d(()=>{let{as:t,className:n,children:r,layout:i,align:a,textAlign:o,gap:s,...c}=e;return{__rue_rest_omit_0:t,__rue_rest_omit_1:n,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,__rue_rest_omit_6:s,rest:c,Component:e.as===void 0?`div`:e.as}}));return u(r=>{let i=s(),c=a(`rue:component:anchor`);return n(i,c),o(()=>{let n=m(y,{...v,className:M(`hero-content`,(e.layout===void 0?`inherit`:e.layout)===`inherit`?void 0:ee[e.layout===void 0?`inherit`:e.layout],e.align?E[e.align]:void 0,e.textAlign?D[e.textAlign]:void 0,e.gap?O[e.gap]:void 0,e.className),children:e.children});t(()=>f(n,i,c))}),i})},B=e=>{let{__rue_rest_omit_0:r,__rue_rest_omit_1:i,__rue_rest_omit_2:c,__rue_rest_omit_3:l,__rue_rest_omit_4:p,__rue_rest_omit_5:g,__rue_rest_omit_6:_,rest:v,Component:y}=h(`useSetup:0:0:dup2`,()=>d(()=>{let{as:t,className:n,children:r,tone:i,opacity:a,blur:o,style:s,...c}=e;return{__rue_rest_omit_0:t,__rue_rest_omit_1:n,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,__rue_rest_omit_6:s,rest:c,Component:e.as===void 0?`div`:e.as}}));return u(r=>{let i=s(),c=a(`rue:component:anchor`);return n(i,c),o(()=>{let n=m(y,{...v,style:N(e.style,F(e.opacity)),className:M(`hero-overlay`,(e.tone===void 0?`default`:e.tone)===`default`?void 0:k[e.tone===void 0?`default`:e.tone],e.blur?`backdrop-blur-sm`:void 0,e.className),children:e.children});t(()=>f(n,i,c))}),i})},V=Object.assign(R,{Content:z,Overlay:B,Title:e=>{let{__rue_rest_omit_0:r,__rue_rest_omit_1:i,__rue_rest_omit_2:c,__rue_rest_omit_3:l,__rue_rest_omit_4:p,rest:g,Component:_}=h(`useSetup:0:0:dup3`,()=>d(()=>{let{as:t,className:n,children:r,size:i,balanced:a,...o}=e;return{__rue_rest_omit_0:t,__rue_rest_omit_1:n,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,rest:o,Component:e.as===void 0?`h1`:e.as}}));return u(r=>{let i=s(),c=a(`rue:component:anchor`);return n(i,c),o(()=>{let n=m(_,{...g,className:M(`font-bold tracking-tight`,A[e.size===void 0?`lg`:e.size],e.balanced===void 0||e.balanced?`text-balance`:void 0,e.className),children:e.children});t(()=>f(n,i,c))}),i})},Description:e=>{let{__rue_rest_omit_0:r,__rue_rest_omit_1:i,__rue_rest_omit_2:c,__rue_rest_omit_3:l,__rue_rest_omit_4:p,rest:g,Component:_}=h(`useSetup:0:0:dup4`,()=>d(()=>{let{as:t,className:n,children:r,size:i,muted:a,...o}=e;return{__rue_rest_omit_0:t,__rue_rest_omit_1:n,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,rest:o,Component:e.as===void 0?`p`:e.as}}));return u(r=>{let i=s(),c=a(`rue:component:anchor`);return n(i,c),o(()=>{let n=m(_,{...g,className:M(`max-w-2xl leading-relaxed`,j[e.size===void 0?`md`:e.size],e.muted===void 0||e.muted?`opacity-80`:void 0,e.className),children:e.children});t(()=>f(n,i,c))}),i})},Actions:e=>{let{__rue_rest_omit_0:r,__rue_rest_omit_1:i,__rue_rest_omit_2:c,__rue_rest_omit_3:l,__rue_rest_omit_4:p,__rue_rest_omit_5:g,rest:_,Component:v}=h(`useSetup:0:0:dup5`,()=>d(()=>{let{as:t,className:n,children:r,align:i,direction:a,stackOnMobile:o,...s}=e;return{__rue_rest_omit_0:t,__rue_rest_omit_1:n,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,rest:s,Component:e.as===void 0?`div`:e.as}}));return u(r=>{let i=s(),c=a(`rue:component:anchor`);return n(i,c),o(()=>{let n=m(v,{..._,className:M(`flex gap-3`,e.stackOnMobile!==void 0&&e.stackOnMobile?`flex-col sm:flex-row sm:flex-wrap`:(e.direction===void 0?`row`:e.direction)===`column`?`flex-col`:`flex-row flex-wrap`,L(e.align,e.direction===void 0?`row`:e.direction,e.stackOnMobile===void 0?!1:e.stackOnMobile),e.className),children:e.children});t(()=>f(n,i,c))}),i})}}),H=`https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp`,U=`https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp`,W=r=>u(l=>{let d=i(`div`,l);p(d,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=i(`table`,d);n(d,m),p(m,`table table-zebra`);let h=i(`thead`,m);n(m,h);let _=i(`tr`,h);n(h,_);let v=i(`th`,_);n(_,v),n(v,e(`属性`));let y=i(`th`,_);n(_,y),n(y,e(`说明`));let b=i(`th`,_);n(_,b),n(b,e(`类型`));let x=i(`th`,_);n(_,x),n(x,e(`默认值`));let S=i(`tbody`,m);n(m,S);let C=a(`rue:list:start`),w=a(`rue:list:end`);n(S,C),n(S,w);let T=new Map;return o(()=>{T=g({items:r.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,r,l,d,p)=>{f(u(()=>{let r=s(),l=i(`tr`,r);n(r,l),o(()=>{c(l,`key`,String(e.prop))});let u=i(`td`,l);n(l,u);let d=i(`code`,u);n(u,d);let p=a(`rue:slot:anchor`);n(d,p),o(()=>{let n=e.prop;t(()=>f(n,d,p))});let m=i(`td`,l);n(l,m);let h=a(`rue:slot:anchor`);n(m,h),o(()=>{let n=e.description;t(()=>f(n,m,h))});let g=i(`td`,l);n(l,g);let _=i(`code`,g);n(g,_);let v=a(`rue:slot:anchor`);n(_,v),o(()=>{let n=e.type;t(()=>f(n,_,v))});let y=i(`td`,l);n(l,y);let b=i(`code`,y);n(y,b);let x=a(`rue:slot:anchor`);return n(b,x),o(()=>{let n=e.defaultValue;t(()=>f(n,b,x))}),r}),r,l)}})}),d}),te=[{prop:`as`,description:`指定 Hero 根节点标签`,type:`string`,defaultValue:`div`},{prop:`backgroundImage`,description:`直接设置背景图 URL，组件会自动写入内联背景样式`,type:`string`,defaultValue:`-`},{prop:`backgroundPosition`,description:`背景图定位`,type:`string`,defaultValue:`center`},{prop:`backgroundRepeat`,description:`背景图重复方式`,type:`string`,defaultValue:`no-repeat`},{prop:`backgroundSize`,description:`背景图尺寸`,type:`string`,defaultValue:`cover`},{prop:`fullHeight`,description:`直接切换到全屏高度，等价于 screen 尺寸`,type:`boolean`,defaultValue:`false`},{prop:`overlay`,description:`开启自动遮罩，也支持直接传入 Hero.Overlay 同构配置对象`,type:`boolean | HeroOverlayProps`,defaultValue:`false`},{prop:`size`,description:`Hero 区块高度预设`,type:`sm | md | lg | xl | screen`,defaultValue:`-`},{prop:`tone`,description:`Root 背景与前景色语义层`,type:`default | base-100 | base-200 | base-300 | neutral | primary | secondary | accent | info | success | warning | error`,defaultValue:`default`}],ne=[{prop:`Hero.Content.align`,description:`控制内容区交叉轴对齐`,type:`start | center | end`,defaultValue:`-`},{prop:`Hero.Content.as`,description:`指定内容区标签`,type:`string`,defaultValue:`div`},{prop:`Hero.Content.gap`,description:`内容区间距预设，适合覆盖 split 默认间距`,type:`sm | md | lg | xl`,defaultValue:`-`},{prop:`Hero.Content.layout`,description:`语义布局预设，覆盖居中、分栏与反向分栏`,type:`inherit | center | split | split-reverse`,defaultValue:`inherit`},{prop:`Hero.Content.textAlign`,description:`文字对齐方式`,type:`start | center | end`,defaultValue:`-`}],re=[{prop:`Hero.Overlay.blur`,description:`为遮罩添加轻量模糊，适合背景图场景`,type:`boolean`,defaultValue:`false`},{prop:`Hero.Overlay.opacity`,description:`遮罩透明度，支持 soft / medium / strong 或数字`,type:`soft | medium | strong | number`,defaultValue:`-`},{prop:`Hero.Overlay.tone`,description:`遮罩色调，可配合自动 overlay 一起用`,type:`default | base-content | neutral | primary | secondary | accent | info | success | warning | error`,defaultValue:`default`},{prop:`Hero.Title.balanced`,description:`标题默认启用 text-balance，减少过长标题断行问题`,type:`boolean`,defaultValue:`true`},{prop:`Hero.Title.size`,description:`标题字号预设`,type:`sm | md | lg | xl`,defaultValue:`lg`},{prop:`Hero.Description.muted`,description:`描述文本默认降低一点对比度`,type:`boolean`,defaultValue:`true`},{prop:`Hero.Description.size`,description:`描述字号预设`,type:`sm | md | lg`,defaultValue:`md`},{prop:`Hero.Actions.align`,description:`操作区对齐方式，会根据横排或竖排自动切换到 justify / items`,type:`start | center | end`,defaultValue:`-`},{prop:`Hero.Actions.direction`,description:`操作区排列方向`,type:`row | column`,defaultValue:`row`},{prop:`Hero.Actions.stackOnMobile`,description:`移动端堆叠、桌面端横排，适合 CTA 组合`,type:`boolean`,defaultValue:`false`}],G=()=>{let{tabSemantic:c,tabCentered:l,tabFigure:g,tabReverse:w,tabForm:T,tabOverlay:ee,tabOverlayAuto:E,tabPresets:D}=h(`useSetup:0:0`,()=>d(()=>({tabSemantic:h(`ref:1:0`,()=>r(`preview`)),tabCentered:h(`ref:1:1`,()=>r(`preview`)),tabFigure:h(`ref:1:2`,()=>r(`preview`)),tabReverse:h(`ref:1:3`,()=>r(`preview`)),tabForm:h(`ref:1:4`,()=>r(`preview`)),tabOverlay:h(`ref:1:5`,()=>r(`preview`)),tabOverlayAuto:h(`ref:1:6`,()=>r(`preview`)),tabPresets:h(`ref:1:7`,()=>r(`preview`))})));return u(r=>{let d=s(),h=a(`rue:component:anchor`);return n(d,h),f(m(S,{children:u(()=>{let r=s(),u=i(`div`,r);n(r,u),p(u,`max-w-none prose prose-sm md:prose-base`);let d=i(`h1`,u);n(u,d),n(d,e(`Hero 主视觉区`));let h=i(`p`,u);n(u,h),p(h,`mt-3 mb-3 text-sm`),n(h,e(`Hero 现在不只是一个样式壳。Root 负责背景、尺寸和遮罩，Content 负责布局，Title / Description / Actions 负责最常见的文案骨架，剩下的局部视觉继续交给 className 微调。`));let S=i(`p`,u);n(u,S),p(S,`mt-0 mb-4 text-sm`),n(S,e(`没有可以直接对照的同名标准组件，所以这次的增强重点放在组合能力和语义 API 上：保留 Rue 自己的视觉语言，但把高频搭建动作从页面里收回到组件里。`));let O=i(`div`,u);n(u,O),p(O,`not-prose mt-6 grid gap-4 lg:grid-cols-3`);let k=i(`div`,O);n(O,k),p(k,`rounded-[1.5rem] border border-base-300 bg-base-100 p-5 shadow-sm`);let A=i(`div`,k);n(k,A),p(A,`text-xs uppercase tracking-[0.28em] opacity-60`),n(A,e(`Root`));let j=i(`div`,k);n(k,j),p(j,`mt-3 text-lg font-semibold`),n(j,e(`Background, size, overlay`));let M=i(`p`,k);n(k,M),p(M,`mt-2 text-sm opacity-70`),n(M,e(`用 tone、size、backgroundImage、overlay 先把 Hero 的外层骨架搭起来。`));let N=i(`div`,O);n(O,N),p(N,`rounded-[1.5rem] border border-base-300 bg-base-100 p-5 shadow-sm`);let P=i(`div`,N);n(N,P),p(P,`text-xs uppercase tracking-[0.28em] opacity-60`),n(P,e(`Content`));let F=i(`div`,N);n(N,F),p(F,`mt-3 text-lg font-semibold`),n(F,e(`Split, reverse, center`));let I=i(`p`,N);n(N,I),p(I,`mt-2 text-sm opacity-70`),n(I,e(`用 Hero.Content.layout 切换常见主视觉布局，再按需叠加 align、textAlign 和 gap。`));let L=i(`div`,O);n(O,L),p(L,`rounded-[1.5rem] border border-base-300 bg-base-100 p-5 shadow-sm`);let R=i(`div`,L);n(L,R),p(R,`text-xs uppercase tracking-[0.28em] opacity-60`),n(R,e(`Parts`));let z=i(`div`,L);n(L,z),p(z,`mt-3 text-lg font-semibold`),n(z,e(`Readable copy blocks`));let B=i(`p`,L);n(L,B),p(B,`mt-2 text-sm opacity-70`),n(B,e(`标题、描述和操作区都给了语义化入口，页面里的重复样式可以明显减少。`));let G=a(`rue:component:anchor`);n(u,G),o(()=>{let e=m(C,{title:`Semantic starter`,tab:c,preview:()=>v(V,{tone:`base-100`,size:`xl`,className:`overflow-hidden rounded-[2rem] border border-base-300 bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10`,children:_(V.Content,{layout:`split`,align:`center`,gap:`xl`,className:`px-6 py-10 lg:px-16`,children:[_(`div`,{className:`space-y-5`,children:[v(`span`,{className:`badge badge-outline badge-primary`,children:`Rue Design Hero`}),v(V.Title,{children:`Ship landing sections without rebuilding layout scaffolding.`}),v(V.Description,{children:`Hero 现在把 surface、height、background image、overlay 和 action 布局都提升成了语义 API。页面可以更聚焦在内容，而不是重复拼装容器类名。`}),_(V.Actions,{stackOnMobile:!0,children:[v(y,{color:`primary`,children:`Get Started`}),v(y,{type:`outlined`,children:`Browse patterns`})]})]}),v(`div`,{className:`grid w-full max-w-md gap-4`,children:_(`div`,{className:`rounded-[1.5rem] border border-base-300 bg-base-100/90 p-5 shadow-xl`,children:[v(`p`,{className:`text-xs uppercase tracking-[0.3em] opacity-60`,children:`Composition`}),_(`div`,{className:`mt-4 space-y-3`,children:[_(`div`,{className:`rounded-2xl bg-base-200 p-4`,children:[v(`div`,{className:`text-sm font-semibold`,children:`Root handles surface`}),v(`p`,{className:`mt-1 text-sm opacity-70`,children:`tone、size、backgroundImage、overlay 负责外层骨架。`})]}),_(`div`,{className:`rounded-2xl bg-base-200 p-4`,children:[v(`div`,{className:`text-sm font-semibold`,children:`Content handles layout`}),v(`p`,{className:`mt-1 text-sm opacity-70`,children:`layout、align、textAlign、gap 负责组织主视觉内容。`})]})]})]})})]})}),code:`<Hero
  tone={'base-100'}
  size={'xl'}
  className={'overflow-hidden rounded-[2rem] border border-base-300 bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10'}
>
  <Hero.Content layout={'split'} align={'center'} gap={'xl'} className={'px-6 py-10 lg:px-16'}>
    <div className={'space-y-5'}>
      <span className={'badge badge-outline badge-primary'}>Rue Design Hero</span>
      <Hero.Title>Ship landing sections without rebuilding layout scaffolding.</Hero.Title>
      <Hero.Description>
        Hero 现在把 surface、height、background image、overlay 和 action 布局都提升成了语义 API。
      </Hero.Description>
      <Hero.Actions stackOnMobile>
        <Button color={'primary'}>Get Started</Button>
        <Button type={'outlined'}>Browse patterns</Button>
      </Hero.Actions>
    </div>

    <div className={'grid w-full max-w-md gap-4'}>
      <div className={'rounded-[1.5rem] border border-base-300 bg-base-100/90 p-5 shadow-xl'}>
        <p className={'text-xs uppercase tracking-[0.3em] opacity-60'}>Composition</p>
        <div className={'mt-4 space-y-3'}>
          <div className={'rounded-2xl bg-base-200 p-4'}>
            <div className={'text-sm font-semibold'}>Root handles surface</div>
            <p className={'mt-1 text-sm opacity-70'}>tone、size、backgroundImage、overlay 负责外层骨架。</p>
          </div>
          <div className={'rounded-2xl bg-base-200 p-4'}>
            <div className={'text-sm font-semibold'}>Content handles layout</div>
            <p className={'mt-1 text-sm opacity-70'}>layout、align、textAlign、gap 负责组织主视觉内容。</p>
          </div>
        </div>
      </div>
    </div>
  </Hero.Content>
</Hero>`});t(()=>f(e,u,G))});let ie=a(`rue:component:anchor`);n(u,ie),o(()=>{let e=m(C,{title:`Centered hero`,tab:l,preview:()=>v(V,{tone:`base-200`,size:`lg`,className:`rounded-box`,children:v(V.Content,{layout:`center`,textAlign:`center`,gap:`md`,className:`px-6 py-10`,children:_(`div`,{className:`max-w-md space-y-4`,children:[v(V.Title,{children:`Hello there`}),v(V.Description,{children:`Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.`}),_(V.Actions,{align:`center`,stackOnMobile:!0,children:[v(y,{color:`primary`,children:`Get Started`}),v(y,{type:`outlined`,children:`View Docs`})]})]})})}),code:`<Hero tone={'base-200'} size={'lg'} className={'rounded-box'}>
  <Hero.Content layout={'center'} textAlign={'center'} gap={'md'} className={'px-6 py-10'}>
    <div className={'max-w-md space-y-4'}>
      <Hero.Title>Hello there</Hero.Title>
      <Hero.Description>
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.
      </Hero.Description>
      <Hero.Actions align={'center'} stackOnMobile>
        <Button color={'primary'}>Get Started</Button>
        <Button type={'outlined'}>View Docs</Button>
      </Hero.Actions>
    </div>
  </Hero.Content>
</Hero>`});t(()=>f(e,u,ie))});let ae=a(`rue:component:anchor`);n(u,ae),o(()=>{let e=m(C,{title:`Hero with figure`,tab:g,preview:()=>v(V,{tone:`base-200`,size:`lg`,className:`rounded-box`,children:_(V.Content,{layout:`split`,align:`center`,className:`px-6 py-10`,children:[v(`img`,{src:H,className:`max-w-sm rounded-lg shadow-2xl`,alt:`Hero figure`}),_(`div`,{children:[v(V.Title,{children:`Box Office News!`}),v(V.Description,{children:`Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi.`}),_(V.Actions,{className:`mt-6`,children:[v(y,{color:`primary`,children:`Get Started`}),v(y,{type:`text`,children:`View details`})]})]})]})}),code:`<Hero tone={'base-200'} size={'lg'} className={'rounded-box'}>
  <Hero.Content layout={'split'} align={'center'} className={'px-6 py-10'}>
    <img src={'${H}'} className={'max-w-sm rounded-lg shadow-2xl'} alt={'Hero figure'} />
    <div>
      <Hero.Title>Box Office News!</Hero.Title>
      <Hero.Description>
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi.
      </Hero.Description>
      <Hero.Actions className={'mt-6'}>
        <Button color={'primary'}>Get Started</Button>
        <Button type={'text'}>View details</Button>
      </Hero.Actions>
    </div>
  </Hero.Content>
</Hero>`});t(()=>f(e,u,ae))});let oe=a(`rue:component:anchor`);n(u,oe),o(()=>{let e=m(C,{title:`Hero with figure but reverse order`,tab:w,preview:()=>v(V,{tone:`base-100`,size:`lg`,className:`rounded-box border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-accent/10`,children:_(V.Content,{layout:`split-reverse`,align:`center`,className:`px-6 py-10`,children:[v(`img`,{src:H,className:`max-w-sm rounded-lg shadow-2xl`,alt:`Hero reverse figure`}),_(`div`,{children:[v(`span`,{className:`badge badge-soft badge-accent`,children:`Reverse layout`}),v(V.Title,{className:`mt-4`,children:`Box Office News!`}),v(V.Description,{children:`Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi.`}),_(V.Actions,{className:`mt-6`,children:[v(y,{color:`primary`,children:`Get Started`}),v(y,{type:`outlined`,children:`See release plan`})]})]})]})}),code:`<Hero
  tone={'base-100'}
  size={'lg'}
  className={'rounded-box border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-accent/10'}
>
  <Hero.Content layout={'split-reverse'} align={'center'} className={'px-6 py-10'}>
    <img src={'${H}'} className={'max-w-sm rounded-lg shadow-2xl'} alt={'Hero reverse figure'} />
    <div>
      <span className={'badge badge-soft badge-accent'}>Reverse layout</span>
      <Hero.Title className={'mt-4'}>Box Office News!</Hero.Title>
      <Hero.Description>
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi.
      </Hero.Description>
      <Hero.Actions className={'mt-6'}>
        <Button color={'primary'}>Get Started</Button>
        <Button type={'outlined'}>See release plan</Button>
      </Hero.Actions>
    </div>
  </Hero.Content>
</Hero>`});t(()=>f(e,u,oe))});let se=a(`rue:component:anchor`);n(u,se),o(()=>{let e=m(C,{title:`Hero with form`,tab:T,preview:()=>v(V,{tone:`base-200`,size:`lg`,className:`rounded-box`,children:_(V.Content,{layout:`split-reverse`,align:`center`,className:`px-6 py-10`,children:[_(`div`,{className:`space-y-4 text-center lg:text-left`,children:[v(`span`,{className:`badge badge-outline`,children:`Members only`}),v(V.Title,{children:`Login now!`}),v(V.Description,{children:`Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi.`})]}),v(`div`,{className:`card w-full max-w-sm shrink-0 bg-base-100 shadow-2xl`,children:v(`div`,{className:`card-body`,children:_(b,{children:[v(b.Label,{children:`Email`}),v(x,{type:`email`,placeholder:`Email`}),v(b.Label,{children:`Password`}),v(x,{type:`password`,placeholder:`Password`}),v(`div`,{children:v(`a`,{className:`link link-hover`,children:`Forgot password?`})}),v(y,{color:`neutral`,className:`mt-4`,children:`Login`})]})})})]})}),code:`<Hero tone={'base-200'} size={'lg'} className={'rounded-box'}>
  <Hero.Content layout={'split-reverse'} align={'center'} className={'px-6 py-10'}>
    <div className={'space-y-4 text-center lg:text-left'}>
      <span className={'badge badge-outline'}>Members only</span>
      <Hero.Title>Login now!</Hero.Title>
      <Hero.Description>
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi.
      </Hero.Description>
    </div>

    <div className={'card w-full max-w-sm shrink-0 bg-base-100 shadow-2xl'}>
      <div className={'card-body'}>
        <Fieldset>
          <Fieldset.Label>Email</Fieldset.Label>
          <Input type={'email'} placeholder={'Email'} />
          <Fieldset.Label>Password</Fieldset.Label>
          <Input type={'password'} placeholder={'Password'} />
          <div>
            <a className={'link link-hover'}>Forgot password?</a>
          </div>
          <Button color={'neutral'} className={'mt-4'}>
            Login
          </Button>
        </Fieldset>
      </div>
    </div>
  </Hero.Content>
</Hero>`});t(()=>f(e,u,se))});let ce=a(`rue:component:anchor`);n(u,ce),o(()=>{let e=m(C,{title:`Hero with overlay image`,tab:ee,preview:()=>_(V,{backgroundImage:U,size:`lg`,className:`rounded-box`,children:[v(V.Overlay,{opacity:`medium`,className:`rounded-box`}),v(V.Content,{layout:`center`,textAlign:`center`,className:`px-6 py-10 text-neutral-content`,children:_(`div`,{className:`max-w-md space-y-5`,children:[v(V.Title,{children:`Hello there`}),v(V.Description,{muted:!1,className:`text-neutral-content/80`,children:`Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi.`}),_(V.Actions,{align:`center`,stackOnMobile:!0,children:[v(y,{color:`primary`,children:`Get Started`}),v(y,{type:`outlined`,children:`Read story`})]})]})})]}),code:`<Hero backgroundImage={'${U}'} size={'lg'} className={'rounded-box'}>
  <Hero.Overlay opacity={'medium'} className={'rounded-box'} />
  <Hero.Content layout={'center'} textAlign={'center'} className={'px-6 py-10 text-neutral-content'}>
    <div className={'max-w-md space-y-5'}>
      <Hero.Title>Hello there</Hero.Title>
      <Hero.Description muted={false} className={'text-neutral-content/80'}>
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi.
      </Hero.Description>
      <Hero.Actions align={'center'} stackOnMobile>
        <Button color={'primary'}>Get Started</Button>
        <Button type={'outlined'}>Read story</Button>
      </Hero.Actions>
    </div>
  </Hero.Content>
</Hero>`});t(()=>f(e,u,ce))});let le=a(`rue:component:anchor`);n(u,le),o(()=>{let e=m(C,{title:`Hero with automatic overlay`,tab:E,preview:()=>v(V,{as:`section`,backgroundImage:U,size:`xl`,overlay:{tone:`base-content`,opacity:`medium`,blur:!0,className:`rounded-[2rem]`},className:`overflow-hidden rounded-[2rem]`,children:_(V.Content,{layout:`split`,align:`center`,gap:`xl`,className:`px-6 py-12 text-neutral-content lg:px-16`,children:[_(`div`,{className:`space-y-5`,children:[v(`span`,{className:`badge badge-soft badge-primary`,children:`Auto Overlay`}),v(V.Title,{children:`把背景图和可读性补丁一起交给 Hero 处理。`}),v(V.Description,{muted:!1,className:`text-neutral-content/80`,children:`当页面只是想快速搭一个带图主视觉区时，直接传 backgroundImage 和 overlay 就够了，不用再手写遮罩层节点。`})]}),v(`div`,{className:`w-full max-w-xs rounded-[1.5rem] border border-white/15 bg-black/30 p-5 backdrop-blur-sm`,children:_(V.Actions,{direction:`column`,align:`start`,children:[v(y,{color:`primary`,block:!0,children:`Start from template`}),v(y,{type:`outlined`,block:!0,children:`Read migration guide`})]})})]})}),code:`<Hero
  as={'section'}
  backgroundImage={'${U}'}
  size={'xl'}
  overlay={{ tone: 'base-content', opacity: 'medium', blur: true, className: 'rounded-[2rem]' }}
  className={'overflow-hidden rounded-[2rem]'}
>
  <Hero.Content layout={'split'} align={'center'} gap={'xl'} className={'px-6 py-12 text-neutral-content lg:px-16'}>
    <div className={'space-y-5'}>
      <span className={'badge badge-soft badge-primary'}>Auto Overlay</span>
      <Hero.Title>把背景图和可读性补丁一起交给 Hero 处理。</Hero.Title>
      <Hero.Description muted={false} className={'text-neutral-content/80'}>
        当页面只是想快速搭一个带图主视觉区时，直接传 backgroundImage 和 overlay 就够了。
      </Hero.Description>
    </div>

    <div className={'w-full max-w-xs rounded-[1.5rem] border border-white/15 bg-black/30 p-5 backdrop-blur-sm'}>
      <Hero.Actions direction={'column'} align={'start'}>
        <Button color={'primary'} block>
          Start from template
        </Button>
        <Button type={'outlined'} block>
          Read migration guide
        </Button>
      </Hero.Actions>
    </div>
  </Hero.Content>
</Hero>`});t(()=>f(e,u,le))});let ue=a(`rue:component:anchor`);n(u,ue),o(()=>{let e=m(C,{title:`Surface and size presets`,tab:D,preview:()=>_(`div`,{className:`grid gap-4 xl:grid-cols-3`,children:[v(V,{tone:`base-200`,size:`sm`,className:`rounded-box`,children:v(V.Content,{className:`px-4 py-6`,children:_(`div`,{className:`space-y-3`,children:[v(`span`,{className:`badge badge-soft`,children:`base-200 / sm`}),v(V.Title,{size:`sm`,children:`Compact spotlight`}),v(V.Description,{size:`sm`,children:`适合列表页里的次级引导块。`})]})})}),v(V,{tone:`primary`,size:`md`,className:`rounded-box`,children:v(V.Content,{className:`px-4 py-6`,children:_(`div`,{className:`space-y-3`,children:[v(`span`,{className:`badge badge-soft badge-neutral`,children:`primary / md`}),v(V.Title,{size:`sm`,children:`Campaign push`}),v(V.Description,{size:`sm`,muted:!1,children:`颜色与前景色一起切换，页面里不用再单独补文字颜色。`})]})})}),v(V,{tone:`neutral`,size:`lg`,className:`rounded-box`,children:v(V.Content,{className:`px-4 py-6`,children:_(`div`,{className:`space-y-3`,children:[v(`span`,{className:`badge badge-outline badge-primary`,children:`neutral / lg`}),v(V.Title,{size:`sm`,children:`Full campaign frame`}),v(V.Description,{size:`sm`,muted:!1,children:`更高的尺寸适合首页首屏或专题页入口。`})]})})})]}),code:`<div className={'grid gap-4 xl:grid-cols-3'}>
  <Hero tone={'base-200'} size={'sm'} className={'rounded-box'}>
    <Hero.Content className={'px-4 py-6'}>
      <div className={'space-y-3'}>
        <span className={'badge badge-soft'}>base-200 / sm</span>
        <Hero.Title size={'sm'}>Compact spotlight</Hero.Title>
        <Hero.Description size={'sm'}>适合列表页里的次级引导块。</Hero.Description>
      </div>
    </Hero.Content>
  </Hero>

  <Hero tone={'primary'} size={'md'} className={'rounded-box'}>
    <Hero.Content className={'px-4 py-6'}>
      <div className={'space-y-3'}>
        <span className={'badge badge-soft badge-neutral'}>primary / md</span>
        <Hero.Title size={'sm'}>Campaign push</Hero.Title>
        <Hero.Description size={'sm'} muted={false}>
          颜色与前景色一起切换，页面里不用再单独补文字颜色。
        </Hero.Description>
      </div>
    </Hero.Content>
  </Hero>

  <Hero tone={'neutral'} size={'lg'} className={'rounded-box'}>
    <Hero.Content className={'px-4 py-6'}>
      <div className={'space-y-3'}>
        <span className={'badge badge-outline badge-primary'}>neutral / lg</span>
        <Hero.Title size={'sm'}>Full campaign frame</Hero.Title>
        <Hero.Description size={'sm'} muted={false}>
          更高的尺寸适合首页首屏或专题页入口。
        </Hero.Description>
      </div>
    </Hero.Content>
  </Hero>
</div>`});t(()=>f(e,u,ue))});let K=i(`div`,u);n(u,K),p(K,`not-prose my-12 space-y-8`);let q=i(`section`,K);n(K,q),p(q,`space-y-2`);let J=i(`h2`,q);n(q,J),p(J,`text-2xl font-semibold`),n(J,e(`API`));let Y=i(`p`,q);n(q,Y),p(Y,`text-sm opacity-70`),n(Y,e(`推荐把外层背景和高度交给 Hero Root，把布局交给 Hero.Content，把标题、描述和 CTA 交给语义子组件。这样页面里仍然可以继续用 className 微调，但不会反复重写同一套结构。`));let X=i(`section`,K);n(K,X),p(X,`space-y-3`);let Z=i(`h3`,X);n(X,Z),p(Z,`text-xl font-semibold`),n(Z,e(`Hero`));let de=a(`rue:component:anchor`);n(X,de),o(()=>{let e=m(W,{rows:te});t(()=>f(e,X,de))});let Q=i(`section`,K);n(K,Q),p(Q,`space-y-3`);let fe=i(`h3`,Q);n(Q,fe),p(fe,`text-xl font-semibold`),n(fe,e(`Hero.Content`));let pe=a(`rue:component:anchor`);n(Q,pe),o(()=>{let e=m(W,{rows:ne});t(()=>f(e,Q,pe))});let $=i(`section`,K);n(K,$),p($,`space-y-3`);let me=i(`h3`,$);n($,me),p(me,`text-xl font-semibold`),n(me,e(`Hero parts`));let he=a(`rue:component:anchor`);return n($,he),o(()=>{let e=m(W,{rows:re});t(()=>f(e,$,he))}),r})}),d,h),d})};export{G as default};