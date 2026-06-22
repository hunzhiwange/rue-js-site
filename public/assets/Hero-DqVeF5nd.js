import{Q as e,Vt as t,Xt as n,dt as r,it as i,l as a,nt as o,o as s,on as c,pt as l,rt as u,t as d,tn as f,tt as p,wt as m}from"./vapor-runtime-x7F5M-49.js";import{a as h,n as g}from"./vapor-helpers-vapor-D1LP4JjK.js";import{a as _,o as v}from"./persistentSidebarPlayground-Cl_JMYk5.js";import{t as y}from"./button-CgV0EoO3.js";import{t as b}from"./fieldset-CkYBhlq8.js";import{t as x}from"./input-CouJaqB5.js";import{r as S}from"./SidebarPlaygroundDesign-Bmw9WJ3p.js";import{t as C}from"./PreviewBlock-CLB4jOfl.js";var w={"base-100":`bg-base-100 text-base-content`,"base-200":`bg-base-200 text-base-content`,"base-300":`bg-base-300 text-base-content`,neutral:`bg-neutral text-neutral-content`,primary:`bg-primary text-primary-content`,secondary:`bg-secondary text-secondary-content`,accent:`bg-accent text-accent-content`,info:`bg-info text-info-content`,success:`bg-success text-success-content`,warning:`bg-warning text-warning-content`,error:`bg-error text-error-content`},T={sm:`min-h-80`,md:`min-h-96`,lg:`min-h-[30rem]`,xl:`min-h-[36rem]`,screen:`min-h-screen`},ee={center:`text-center`,split:`flex-col gap-10 lg:flex-row`,"split-reverse":`flex-col gap-10 lg:flex-row-reverse`},E={start:`items-start`,center:`items-center`,end:`items-end`},D={start:`text-left`,center:`text-center`,end:`text-right`},O={sm:`gap-4`,md:`gap-6`,lg:`gap-10`,xl:`gap-14`},k={"base-content":`bg-base-content`,neutral:`bg-neutral`,primary:`bg-primary`,secondary:`bg-secondary`,accent:`bg-accent`,info:`bg-info`,success:`bg-success`,warning:`bg-warning`,error:`bg-error`},A={sm:`text-3xl md:text-4xl`,md:`text-4xl md:text-5xl`,lg:`text-5xl md:text-6xl`,xl:`text-6xl md:text-7xl`},j={sm:`text-sm md:text-base`,md:`text-base md:text-lg`,lg:`text-lg md:text-xl`},M=(...e)=>e.filter(Boolean).join(` `),N=(e,t)=>{if(!(!e&&!t))return{...e,...t}},P=e=>{if(e)return e===!0?{}:e},F=e=>{if(e!=null){if(typeof e==`number`)return{opacity:e};switch(e){case`soft`:return{opacity:.25};case`strong`:return{opacity:.7};default:return{opacity:.45}}}},I=({backgroundImage:e,backgroundPosition:t,backgroundSize:n,backgroundRepeat:r})=>{if(e)return{backgroundImage:`url(${e})`,backgroundPosition:t??`center`,backgroundSize:n??`cover`,backgroundRepeat:r??`no-repeat`}},L=(e,t,n)=>{if(e){if(n)switch(e){case`center`:return`items-center sm:justify-center`;case`end`:return`items-end sm:justify-end`;default:return`items-start sm:justify-start`}if(t===`column`)switch(e){case`center`:return`items-center`;case`end`:return`items-end`;default:return`items-start`}switch(e){case`center`:return`justify-center`;case`end`:return`justify-end`;default:return`justify-start`}}},R=n=>{let{__rue_rest_omit_0:r,__rue_rest_omit_1:l,__rue_rest_omit_2:u,__rue_rest_omit_3:g,__rue_rest_omit_4:_,__rue_rest_omit_5:v,__rue_rest_omit_6:y,__rue_rest_omit_7:b,__rue_rest_omit_8:x,__rue_rest_omit_9:S,__rue_rest_omit_10:C,__rue_rest_omit_11:ee,rest:E,Component:D,backgroundStyle:O,overlayProps:k}=h(`useSetup:0:0`,()=>c(()=>{let{as:e,className:t,children:r,style:i,tone:a,size:o,fullHeight:s,backgroundImage:c,backgroundPosition:l,backgroundSize:u,backgroundRepeat:d,overlay:f,...p}=n;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,__rue_rest_omit_6:s,__rue_rest_omit_7:c,__rue_rest_omit_8:l,__rue_rest_omit_9:u,__rue_rest_omit_10:d,__rue_rest_omit_11:f,rest:p,Component:n.as===void 0?`div`:n.as,backgroundStyle:h(`computed:1:0`,()=>m(()=>I({backgroundImage:n.backgroundImage,backgroundPosition:n.backgroundPosition,backgroundSize:n.backgroundSize,backgroundRepeat:n.backgroundRepeat}))),overlayProps:h(`computed:1:1`,()=>m(()=>P(n.overlay)))}}));return a(r=>{let c=o(),l=p(`rue:component:anchor`);e(c,l);let u=a(()=>{let r=o(),c=p(`rue:slot:anchor`);e(r,c),t(()=>{let n=k.get()?a(()=>{let n=o(),r=p(`rue:component:anchor`);return e(n,r),t(()=>{let e=d(B,{...k.get()});f(()=>s(e,n,r))}),n}):``;f(()=>s(n,r,c))}),e(r,i(` `));let l=p(`rue:children:anchor`);return e(r,l),t(()=>{let e=n.children;f(()=>s(e,r,l))}),r});return t(()=>{let e=d(D,{...E,style:N(n.style,O.get()),className:M(`hero`,(n.tone===void 0?`default`:n.tone)===`default`?void 0:w[n.tone===void 0?`default`:n.tone],n.fullHeight?T.screen:n.size?T[n.size]:void 0,n.className),children:u});f(()=>s(e,c,l))}),c})},z=n=>{let{__rue_rest_omit_0:r,__rue_rest_omit_1:i,__rue_rest_omit_2:l,__rue_rest_omit_3:u,__rue_rest_omit_4:m,__rue_rest_omit_5:g,__rue_rest_omit_6:_,rest:v,Component:y}=h(`useSetup:0:0:dup1`,()=>c(()=>{let{as:e,className:t,children:r,layout:i,align:a,textAlign:o,gap:s,...c}=n;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,__rue_rest_omit_6:s,rest:c,Component:n.as===void 0?`div`:n.as}}));return a(r=>{let i=o(),a=p(`rue:component:anchor`);return e(i,a),t(()=>{let e=d(y,{...v,className:M(`hero-content`,(n.layout===void 0?`inherit`:n.layout)===`inherit`?void 0:ee[n.layout===void 0?`inherit`:n.layout],n.align?E[n.align]:void 0,n.textAlign?D[n.textAlign]:void 0,n.gap?O[n.gap]:void 0,n.className),children:n.children});f(()=>s(e,i,a))}),i})},B=n=>{let{__rue_rest_omit_0:r,__rue_rest_omit_1:i,__rue_rest_omit_2:l,__rue_rest_omit_3:u,__rue_rest_omit_4:m,__rue_rest_omit_5:g,__rue_rest_omit_6:_,rest:v,Component:y}=h(`useSetup:0:0:dup2`,()=>c(()=>{let{as:e,className:t,children:r,tone:i,opacity:a,blur:o,style:s,...c}=n;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,__rue_rest_omit_6:s,rest:c,Component:n.as===void 0?`div`:n.as}}));return a(r=>{let i=o(),a=p(`rue:component:anchor`);return e(i,a),t(()=>{let e=d(y,{...v,style:N(n.style,F(n.opacity)),className:M(`hero-overlay`,(n.tone===void 0?`default`:n.tone)===`default`?void 0:k[n.tone===void 0?`default`:n.tone],n.blur?`backdrop-blur-sm`:void 0,n.className),children:n.children});f(()=>s(e,i,a))}),i})},V=Object.assign(R,{Content:z,Overlay:B,Title:n=>{let{__rue_rest_omit_0:r,__rue_rest_omit_1:i,__rue_rest_omit_2:l,__rue_rest_omit_3:u,__rue_rest_omit_4:m,rest:g,Component:_}=h(`useSetup:0:0:dup3`,()=>c(()=>{let{as:e,className:t,children:r,size:i,balanced:a,...o}=n;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,rest:o,Component:n.as===void 0?`h1`:n.as}}));return a(r=>{let i=o(),a=p(`rue:component:anchor`);return e(i,a),t(()=>{let e=d(_,{...g,className:M(`font-bold tracking-tight`,A[n.size===void 0?`lg`:n.size],n.balanced===void 0||n.balanced?`text-balance`:void 0,n.className),children:n.children});f(()=>s(e,i,a))}),i})},Description:n=>{let{__rue_rest_omit_0:r,__rue_rest_omit_1:i,__rue_rest_omit_2:l,__rue_rest_omit_3:u,__rue_rest_omit_4:m,rest:g,Component:_}=h(`useSetup:0:0:dup4`,()=>c(()=>{let{as:e,className:t,children:r,size:i,muted:a,...o}=n;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,rest:o,Component:n.as===void 0?`p`:n.as}}));return a(r=>{let i=o(),a=p(`rue:component:anchor`);return e(i,a),t(()=>{let e=d(_,{...g,className:M(`max-w-2xl leading-relaxed`,j[n.size===void 0?`md`:n.size],n.muted===void 0||n.muted?`opacity-80`:void 0,n.className),children:n.children});f(()=>s(e,i,a))}),i})},Actions:n=>{let{__rue_rest_omit_0:r,__rue_rest_omit_1:i,__rue_rest_omit_2:l,__rue_rest_omit_3:u,__rue_rest_omit_4:m,__rue_rest_omit_5:g,rest:_,Component:v}=h(`useSetup:0:0:dup5`,()=>c(()=>{let{as:e,className:t,children:r,align:i,direction:a,stackOnMobile:o,...s}=n;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,rest:s,Component:n.as===void 0?`div`:n.as}}));return a(r=>{let i=o(),a=p(`rue:component:anchor`);return e(i,a),t(()=>{let e=d(v,{..._,className:M(`flex gap-3`,n.stackOnMobile!==void 0&&n.stackOnMobile?`flex-col sm:flex-row sm:flex-wrap`:(n.direction===void 0?`row`:n.direction)===`column`?`flex-col`:`flex-row flex-wrap`,L(n.align,n.direction===void 0?`row`:n.direction,n.stackOnMobile===void 0?!1:n.stackOnMobile),n.className),children:n.children});f(()=>s(e,i,a))}),i})}}),H=`https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp`,U=`https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp`,W=n=>a(c=>{let d=u(`div`,c);l(d,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=u(`table`,d);e(d,m),l(m,`table table-zebra`);let h=u(`thead`,m);e(m,h);let _=u(`tr`,h);e(h,_);let v=u(`th`,_);e(_,v),e(v,i(`属性`));let y=u(`th`,_);e(_,y),e(y,i(`说明`));let b=u(`th`,_);e(_,b),e(b,i(`类型`));let x=u(`th`,_);e(_,x),e(x,i(`默认值`));let S=u(`tbody`,m);e(m,S);let C=p(`rue:list:start`),w=p(`rue:list:end`);e(S,C),e(S,w);let T=new Map;return t(()=>{T=g({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,i,c,l,d)=>{s(a(()=>{let i=o(),a=u(`tr`,i);e(i,a),t(()=>{r(a,`key`,String(n.prop))});let c=u(`td`,a);e(a,c);let l=u(`code`,c);e(c,l);let d=p(`rue:slot:anchor`);e(l,d),t(()=>{let e=n.prop;f(()=>s(e,l,d))});let m=u(`td`,a);e(a,m);let h=p(`rue:slot:anchor`);e(m,h),t(()=>{let e=n.description;f(()=>s(e,m,h))});let g=u(`td`,a);e(a,g);let _=u(`code`,g);e(g,_);let v=p(`rue:slot:anchor`);e(_,v),t(()=>{let e=n.type;f(()=>s(e,_,v))});let y=u(`td`,a);e(a,y);let b=u(`code`,y);e(y,b);let x=p(`rue:slot:anchor`);return e(b,x),t(()=>{let e=n.defaultValue;f(()=>s(e,b,x))}),i}),i,c)}})}),d}),te=[{prop:`as`,description:`指定 Hero 根节点标签`,type:`string`,defaultValue:`div`},{prop:`backgroundImage`,description:`直接设置背景图 URL，组件会自动写入内联背景样式`,type:`string`,defaultValue:`-`},{prop:`backgroundPosition`,description:`背景图定位`,type:`string`,defaultValue:`center`},{prop:`backgroundRepeat`,description:`背景图重复方式`,type:`string`,defaultValue:`no-repeat`},{prop:`backgroundSize`,description:`背景图尺寸`,type:`string`,defaultValue:`cover`},{prop:`fullHeight`,description:`直接切换到全屏高度，等价于 screen 尺寸`,type:`boolean`,defaultValue:`false`},{prop:`overlay`,description:`开启自动遮罩，也支持直接传入 Hero.Overlay 同构配置对象`,type:`boolean | HeroOverlayProps`,defaultValue:`false`},{prop:`size`,description:`Hero 区块高度预设`,type:`sm | md | lg | xl | screen`,defaultValue:`-`},{prop:`tone`,description:`Root 背景与前景色语义层`,type:`default | base-100 | base-200 | base-300 | neutral | primary | secondary | accent | info | success | warning | error`,defaultValue:`default`}],ne=[{prop:`Hero.Content.align`,description:`控制内容区交叉轴对齐`,type:`start | center | end`,defaultValue:`-`},{prop:`Hero.Content.as`,description:`指定内容区标签`,type:`string`,defaultValue:`div`},{prop:`Hero.Content.gap`,description:`内容区间距预设，适合覆盖 split 默认间距`,type:`sm | md | lg | xl`,defaultValue:`-`},{prop:`Hero.Content.layout`,description:`语义布局预设，覆盖居中、分栏与反向分栏`,type:`inherit | center | split | split-reverse`,defaultValue:`inherit`},{prop:`Hero.Content.textAlign`,description:`文字对齐方式`,type:`start | center | end`,defaultValue:`-`}],re=[{prop:`Hero.Overlay.blur`,description:`为遮罩添加轻量模糊，适合背景图场景`,type:`boolean`,defaultValue:`false`},{prop:`Hero.Overlay.opacity`,description:`遮罩透明度，支持 soft / medium / strong 或数字`,type:`soft | medium | strong | number`,defaultValue:`-`},{prop:`Hero.Overlay.tone`,description:`遮罩色调，可配合自动 overlay 一起用`,type:`default | base-content | neutral | primary | secondary | accent | info | success | warning | error`,defaultValue:`default`},{prop:`Hero.Title.balanced`,description:`标题默认启用 text-balance，减少过长标题断行问题`,type:`boolean`,defaultValue:`true`},{prop:`Hero.Title.size`,description:`标题字号预设`,type:`sm | md | lg | xl`,defaultValue:`lg`},{prop:`Hero.Description.muted`,description:`描述文本默认降低一点对比度`,type:`boolean`,defaultValue:`true`},{prop:`Hero.Description.size`,description:`描述字号预设`,type:`sm | md | lg`,defaultValue:`md`},{prop:`Hero.Actions.align`,description:`操作区对齐方式，会根据横排或竖排自动切换到 justify / items`,type:`start | center | end`,defaultValue:`-`},{prop:`Hero.Actions.direction`,description:`操作区排列方向`,type:`row | column`,defaultValue:`row`},{prop:`Hero.Actions.stackOnMobile`,description:`移动端堆叠、桌面端横排，适合 CTA 组合`,type:`boolean`,defaultValue:`false`}],G=()=>{let{tabSemantic:r,tabCentered:m,tabFigure:g,tabReverse:w,tabForm:T,tabOverlay:ee,tabOverlayAuto:E,tabPresets:D}=h(`useSetup:0:0`,()=>c(()=>({tabSemantic:h(`ref:1:0`,()=>n(`preview`)),tabCentered:h(`ref:1:1`,()=>n(`preview`)),tabFigure:h(`ref:1:2`,()=>n(`preview`)),tabReverse:h(`ref:1:3`,()=>n(`preview`)),tabForm:h(`ref:1:4`,()=>n(`preview`)),tabOverlay:h(`ref:1:5`,()=>n(`preview`)),tabOverlayAuto:h(`ref:1:6`,()=>n(`preview`)),tabPresets:h(`ref:1:7`,()=>n(`preview`))})));return a(n=>{let c=o(),h=p(`rue:component:anchor`);return e(c,h),s(d(S,{children:a(()=>{let n=o(),a=u(`div`,n);e(n,a),l(a,`max-w-none prose prose-sm md:prose-base`);let c=u(`h1`,a);e(a,c),e(c,i(`Hero 主视觉区`));let h=u(`p`,a);e(a,h),l(h,`mt-3 mb-3 text-sm`),e(h,i(`Hero 现在不只是一个样式壳。Root 负责背景、尺寸和遮罩，Content 负责布局，Title / Description / Actions 负责最常见的文案骨架，剩下的局部视觉继续交给 className 微调。`));let S=u(`p`,a);e(a,S),l(S,`mt-0 mb-4 text-sm`),e(S,i(`没有可以直接对照的同名标准组件，所以组件重点覆盖组合能力和语义 API 上：使用 Rue 自己的视觉语言，但把高频搭建动作从页面里收回到组件里。`));let O=u(`div`,a);e(a,O),l(O,`not-prose mt-6 grid gap-4 lg:grid-cols-3`);let k=u(`div`,O);e(O,k),l(k,`rounded-[1.5rem] border border-base-300 bg-base-100 p-5 shadow-sm`);let A=u(`div`,k);e(k,A),l(A,`text-xs uppercase tracking-[0.28em] opacity-60`),e(A,i(`Root`));let j=u(`div`,k);e(k,j),l(j,`mt-3 text-lg font-semibold`),e(j,i(`Background, size, overlay`));let M=u(`p`,k);e(k,M),l(M,`mt-2 text-sm opacity-70`),e(M,i(`用 tone、size、backgroundImage、overlay 先把 Hero 的外层骨架搭起来。`));let N=u(`div`,O);e(O,N),l(N,`rounded-[1.5rem] border border-base-300 bg-base-100 p-5 shadow-sm`);let P=u(`div`,N);e(N,P),l(P,`text-xs uppercase tracking-[0.28em] opacity-60`),e(P,i(`Content`));let F=u(`div`,N);e(N,F),l(F,`mt-3 text-lg font-semibold`),e(F,i(`Split, reverse, center`));let I=u(`p`,N);e(N,I),l(I,`mt-2 text-sm opacity-70`),e(I,i(`用 Hero.Content.layout 切换常见主视觉布局，再按需叠加 align、textAlign 和 gap。`));let L=u(`div`,O);e(O,L),l(L,`rounded-[1.5rem] border border-base-300 bg-base-100 p-5 shadow-sm`);let R=u(`div`,L);e(L,R),l(R,`text-xs uppercase tracking-[0.28em] opacity-60`),e(R,i(`Parts`));let z=u(`div`,L);e(L,z),l(z,`mt-3 text-lg font-semibold`),e(z,i(`Readable copy blocks`));let B=u(`p`,L);e(L,B),l(B,`mt-2 text-sm opacity-70`),e(B,i(`标题、描述和操作区都给了语义化入口，页面里的重复样式可以明显减少。`));let G=p(`rue:component:anchor`);e(a,G),t(()=>{let e=d(C,{title:`Semantic starter`,tab:r,preview:()=>_(V,{tone:`base-100`,size:`xl`,className:`overflow-hidden rounded-[2rem] border border-base-300 bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10`,children:v(V.Content,{layout:`split`,align:`center`,gap:`xl`,className:`px-6 py-10 lg:px-16`,children:[v(`div`,{className:`space-y-5`,children:[_(`span`,{className:`badge badge-outline badge-primary`,children:`Rue Design Hero`}),_(V.Title,{children:`Ship landing sections without rebuilding layout scaffolding.`}),_(V.Description,{children:`Hero 现在把 surface、height、background image、overlay 和 action 布局都提升成了语义 API。页面可以更聚焦在内容，而不是重复拼装容器类名。`}),v(V.Actions,{stackOnMobile:!0,children:[_(y,{color:`primary`,children:`Get Started`}),_(y,{type:`outlined`,children:`Browse patterns`})]})]}),_(`div`,{className:`grid w-full max-w-md gap-4`,children:v(`div`,{className:`rounded-[1.5rem] border border-base-300 bg-base-100/90 p-5 shadow-xl`,children:[_(`p`,{className:`text-xs uppercase tracking-[0.3em] opacity-60`,children:`Composition`}),v(`div`,{className:`mt-4 space-y-3`,children:[v(`div`,{className:`rounded-2xl bg-base-200 p-4`,children:[_(`div`,{className:`text-sm font-semibold`,children:`Root handles surface`}),_(`p`,{className:`mt-1 text-sm opacity-70`,children:`tone、size、backgroundImage、overlay 负责外层骨架。`})]}),v(`div`,{className:`rounded-2xl bg-base-200 p-4`,children:[_(`div`,{className:`text-sm font-semibold`,children:`Content handles layout`}),_(`p`,{className:`mt-1 text-sm opacity-70`,children:`layout、align、textAlign、gap 负责组织主视觉内容。`})]})]})]})})]})}),code:`<Hero
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
</Hero>`});f(()=>s(e,a,G))});let ie=p(`rue:component:anchor`);e(a,ie),t(()=>{let e=d(C,{title:`Centered hero`,tab:m,preview:()=>_(V,{tone:`base-200`,size:`lg`,className:`rounded-box`,children:_(V.Content,{layout:`center`,textAlign:`center`,gap:`md`,className:`px-6 py-10`,children:v(`div`,{className:`max-w-md space-y-4`,children:[_(V.Title,{children:`Hello there`}),_(V.Description,{children:`Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.`}),v(V.Actions,{align:`center`,stackOnMobile:!0,children:[_(y,{color:`primary`,children:`Get Started`}),_(y,{type:`outlined`,children:`View Docs`})]})]})})}),code:`<Hero tone={'base-200'} size={'lg'} className={'rounded-box'}>
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
</Hero>`});f(()=>s(e,a,ie))});let ae=p(`rue:component:anchor`);e(a,ae),t(()=>{let e=d(C,{title:`Hero with figure`,tab:g,preview:()=>_(V,{tone:`base-200`,size:`lg`,className:`rounded-box`,children:v(V.Content,{layout:`split`,align:`center`,className:`px-6 py-10`,children:[_(`img`,{src:H,className:`max-w-sm rounded-lg shadow-2xl`,alt:`Hero figure`}),v(`div`,{children:[_(V.Title,{children:`Box Office News!`}),_(V.Description,{children:`Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi.`}),v(V.Actions,{className:`mt-6`,children:[_(y,{color:`primary`,children:`Get Started`}),_(y,{type:`text`,children:`View details`})]})]})]})}),code:`<Hero tone={'base-200'} size={'lg'} className={'rounded-box'}>
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
</Hero>`});f(()=>s(e,a,ae))});let oe=p(`rue:component:anchor`);e(a,oe),t(()=>{let e=d(C,{title:`Hero with figure but reverse order`,tab:w,preview:()=>_(V,{tone:`base-100`,size:`lg`,className:`rounded-box border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-accent/10`,children:v(V.Content,{layout:`split-reverse`,align:`center`,className:`px-6 py-10`,children:[_(`img`,{src:H,className:`max-w-sm rounded-lg shadow-2xl`,alt:`Hero reverse figure`}),v(`div`,{children:[_(`span`,{className:`badge badge-soft badge-accent`,children:`Reverse layout`}),_(V.Title,{className:`mt-4`,children:`Box Office News!`}),_(V.Description,{children:`Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi.`}),v(V.Actions,{className:`mt-6`,children:[_(y,{color:`primary`,children:`Get Started`}),_(y,{type:`outlined`,children:`See release plan`})]})]})]})}),code:`<Hero
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
</Hero>`});f(()=>s(e,a,oe))});let se=p(`rue:component:anchor`);e(a,se),t(()=>{let e=d(C,{title:`Hero with form`,tab:T,preview:()=>_(V,{tone:`base-200`,size:`lg`,className:`rounded-box`,children:v(V.Content,{layout:`split-reverse`,align:`center`,className:`px-6 py-10`,children:[v(`div`,{className:`space-y-4 text-center lg:text-left`,children:[_(`span`,{className:`badge badge-outline`,children:`Members only`}),_(V.Title,{children:`Login now!`}),_(V.Description,{children:`Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi.`})]}),_(`div`,{className:`card w-full max-w-sm shrink-0 bg-base-100 shadow-2xl`,children:_(`div`,{className:`card-body`,children:v(b,{children:[_(b.Label,{children:`Email`}),_(x,{type:`email`,placeholder:`Email`}),_(b.Label,{children:`Password`}),_(x,{type:`password`,placeholder:`Password`}),_(`div`,{children:_(`a`,{className:`link link-hover`,children:`Forgot password?`})}),_(y,{color:`neutral`,className:`mt-4`,children:`Login`})]})})})]})}),code:`<Hero tone={'base-200'} size={'lg'} className={'rounded-box'}>
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
</Hero>`});f(()=>s(e,a,se))});let ce=p(`rue:component:anchor`);e(a,ce),t(()=>{let e=d(C,{title:`Hero with overlay image`,tab:ee,preview:()=>v(V,{backgroundImage:U,size:`lg`,className:`rounded-box`,children:[_(V.Overlay,{opacity:`medium`,className:`rounded-box`}),_(V.Content,{layout:`center`,textAlign:`center`,className:`px-6 py-10 text-neutral-content`,children:v(`div`,{className:`max-w-md space-y-5`,children:[_(V.Title,{children:`Hello there`}),_(V.Description,{muted:!1,className:`text-neutral-content/80`,children:`Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi.`}),v(V.Actions,{align:`center`,stackOnMobile:!0,children:[_(y,{color:`primary`,children:`Get Started`}),_(y,{type:`outlined`,children:`Read story`})]})]})})]}),code:`<Hero backgroundImage={'${U}'} size={'lg'} className={'rounded-box'}>
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
</Hero>`});f(()=>s(e,a,ce))});let le=p(`rue:component:anchor`);e(a,le),t(()=>{let e=d(C,{title:`Hero with automatic overlay`,tab:E,preview:()=>_(V,{as:`section`,backgroundImage:U,size:`xl`,overlay:{tone:`base-content`,opacity:`medium`,blur:!0,className:`rounded-[2rem]`},className:`overflow-hidden rounded-[2rem]`,children:v(V.Content,{layout:`split`,align:`center`,gap:`xl`,className:`px-6 py-12 text-neutral-content lg:px-16`,children:[v(`div`,{className:`space-y-5`,children:[_(`span`,{className:`badge badge-soft badge-primary`,children:`Auto Overlay`}),_(V.Title,{children:`把背景图和可读性补丁一起交给 Hero 处理。`}),_(V.Description,{muted:!1,className:`text-neutral-content/80`,children:`当页面只是想快速搭一个带图主视觉区时，直接传 backgroundImage 和 overlay 就够了，不用再手写遮罩层节点。`})]}),_(`div`,{className:`w-full max-w-xs rounded-[1.5rem] border border-white/15 bg-black/30 p-5 backdrop-blur-sm`,children:v(V.Actions,{direction:`column`,align:`start`,children:[_(y,{color:`primary`,block:!0,children:`Start from template`}),_(y,{type:`outlined`,block:!0,children:`Read migration guide`})]})})]})}),code:`<Hero
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
</Hero>`});f(()=>s(e,a,le))});let ue=p(`rue:component:anchor`);e(a,ue),t(()=>{let e=d(C,{title:`Surface and size presets`,tab:D,preview:()=>v(`div`,{className:`grid gap-4 xl:grid-cols-3`,children:[_(V,{tone:`base-200`,size:`sm`,className:`rounded-box`,children:_(V.Content,{className:`px-4 py-6`,children:v(`div`,{className:`space-y-3`,children:[_(`span`,{className:`badge badge-soft`,children:`base-200 / sm`}),_(V.Title,{size:`sm`,children:`Compact spotlight`}),_(V.Description,{size:`sm`,children:`适合列表页里的次级引导块。`})]})})}),_(V,{tone:`primary`,size:`md`,className:`rounded-box`,children:_(V.Content,{className:`px-4 py-6`,children:v(`div`,{className:`space-y-3`,children:[_(`span`,{className:`badge badge-soft badge-neutral`,children:`primary / md`}),_(V.Title,{size:`sm`,children:`Campaign push`}),_(V.Description,{size:`sm`,muted:!1,children:`颜色与前景色一起切换，页面里不用再单独补文字颜色。`})]})})}),_(V,{tone:`neutral`,size:`lg`,className:`rounded-box`,children:_(V.Content,{className:`px-4 py-6`,children:v(`div`,{className:`space-y-3`,children:[_(`span`,{className:`badge badge-outline badge-primary`,children:`neutral / lg`}),_(V.Title,{size:`sm`,children:`Full campaign frame`}),_(V.Description,{size:`sm`,muted:!1,children:`更高的尺寸适合首页首屏或专题页入口。`})]})})})]}),code:`<div className={'grid gap-4 xl:grid-cols-3'}>
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
</div>`});f(()=>s(e,a,ue))});let K=u(`div`,a);e(a,K),l(K,`not-prose my-12 space-y-8`);let q=u(`section`,K);e(K,q),l(q,`space-y-2`);let J=u(`h2`,q);e(q,J),l(J,`text-2xl font-semibold`),e(J,i(`API`));let Y=u(`p`,q);e(q,Y),l(Y,`text-sm opacity-70`),e(Y,i(`推荐把外层背景和高度交给 Hero Root，把布局交给 Hero.Content，把标题、描述和 CTA 交给语义子组件。这样页面里仍然可以用 className 微调，但不会反复重写同一套结构。`));let X=u(`section`,K);e(K,X),l(X,`space-y-3`);let Z=u(`h3`,X);e(X,Z),l(Z,`text-xl font-semibold`),e(Z,i(`Hero`));let de=p(`rue:component:anchor`);e(X,de),t(()=>{let e=d(W,{rows:te});f(()=>s(e,X,de))});let Q=u(`section`,K);e(K,Q),l(Q,`space-y-3`);let fe=u(`h3`,Q);e(Q,fe),l(fe,`text-xl font-semibold`),e(fe,i(`Hero.Content`));let pe=p(`rue:component:anchor`);e(Q,pe),t(()=>{let e=d(W,{rows:ne});f(()=>s(e,Q,pe))});let $=u(`section`,K);e(K,$),l($,`space-y-3`);let me=u(`h3`,$);e($,me),l(me,`text-xl font-semibold`),e(me,i(`Hero parts`));let he=p(`rue:component:anchor`);return e($,he),t(()=>{let e=d(W,{rows:re});f(()=>s(e,$,he))}),n})}),c,h),c})};export{G as default};