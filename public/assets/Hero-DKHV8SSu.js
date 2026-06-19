import{$ as e,Q as t,Qt as n,Wt as r,X as i,Yt as a,et as o,l as s,lt as c,o as l,st as u,t as d,tt as f,vt as p,zt as m}from"./vapor-runtime-CXIalONM.js";import{a as h,n as g}from"./vapor-helpers-vapor-CoXKrGmY.js";import{a as _,i as v}from"./persistentSidebarPlayground-DBDp2zjv.js";import{t as y}from"./button-CeShl0h_.js";import{t as b}from"./fieldset-DUJObilR.js";import{t as x}from"./input-DiGoZI6O.js";import{r as S}from"./SidebarPlaygroundDesign-CsC_YS7V.js";import{t as C}from"./PreviewBlock-RQJhyX9w.js";var w={"base-100":`bg-base-100 text-base-content`,"base-200":`bg-base-200 text-base-content`,"base-300":`bg-base-300 text-base-content`,neutral:`bg-neutral text-neutral-content`,primary:`bg-primary text-primary-content`,secondary:`bg-secondary text-secondary-content`,accent:`bg-accent text-accent-content`,info:`bg-info text-info-content`,success:`bg-success text-success-content`,warning:`bg-warning text-warning-content`,error:`bg-error text-error-content`},T={sm:`min-h-80`,md:`min-h-96`,lg:`min-h-[30rem]`,xl:`min-h-[36rem]`,screen:`min-h-screen`},ee={center:`text-center`,split:`flex-col gap-10 lg:flex-row`,"split-reverse":`flex-col gap-10 lg:flex-row-reverse`},E={start:`items-start`,center:`items-center`,end:`items-end`},D={start:`text-left`,center:`text-center`,end:`text-right`},O={sm:`gap-4`,md:`gap-6`,lg:`gap-10`,xl:`gap-14`},k={"base-content":`bg-base-content`,neutral:`bg-neutral`,primary:`bg-primary`,secondary:`bg-secondary`,accent:`bg-accent`,info:`bg-info`,success:`bg-success`,warning:`bg-warning`,error:`bg-error`},A={sm:`text-3xl md:text-4xl`,md:`text-4xl md:text-5xl`,lg:`text-5xl md:text-6xl`,xl:`text-6xl md:text-7xl`},j={sm:`text-sm md:text-base`,md:`text-base md:text-lg`,lg:`text-lg md:text-xl`},M=(...e)=>e.filter(Boolean).join(` `),N=(e,t)=>{if(!(!e&&!t))return{...e,...t}},P=e=>{if(e)return e===!0?{}:e},F=e=>{if(e!=null){if(typeof e==`number`)return{opacity:e};switch(e){case`soft`:return{opacity:.25};case`strong`:return{opacity:.7};default:return{opacity:.45}}}},I=({backgroundImage:e,backgroundPosition:t,backgroundSize:n,backgroundRepeat:r})=>{if(e)return{backgroundImage:`url(${e})`,backgroundPosition:t??`center`,backgroundSize:n??`cover`,backgroundRepeat:r??`no-repeat`}},L=(e,t,n)=>{if(e){if(n)switch(e){case`center`:return`items-center sm:justify-center`;case`end`:return`items-end sm:justify-end`;default:return`items-start sm:justify-start`}if(t===`column`)switch(e){case`center`:return`items-center`;case`end`:return`items-end`;default:return`items-start`}switch(e){case`center`:return`justify-center`;case`end`:return`justify-end`;default:return`justify-start`}}},R=o=>{let{__rue_rest_omit_0:c,__rue_rest_omit_1:u,__rue_rest_omit_2:m,__rue_rest_omit_3:g,__rue_rest_omit_4:_,__rue_rest_omit_5:v,__rue_rest_omit_6:y,__rue_rest_omit_7:b,__rue_rest_omit_8:x,__rue_rest_omit_9:S,__rue_rest_omit_10:C,__rue_rest_omit_11:ee,rest:E,Component:D,backgroundStyle:O,overlayProps:k}=h(`useSetup:0:0`,()=>a(()=>{let{as:e,className:t,children:n,style:r,tone:i,size:a,fullHeight:s,backgroundImage:c,backgroundPosition:l,backgroundSize:u,backgroundRepeat:d,overlay:f,...m}=o;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:n,__rue_rest_omit_3:r,__rue_rest_omit_4:i,__rue_rest_omit_5:a,__rue_rest_omit_6:s,__rue_rest_omit_7:c,__rue_rest_omit_8:l,__rue_rest_omit_9:u,__rue_rest_omit_10:d,__rue_rest_omit_11:f,rest:m,Component:o.as===void 0?`div`:o.as,backgroundStyle:h(`computed:1:0`,()=>p(()=>I({backgroundImage:o.backgroundImage,backgroundPosition:o.backgroundPosition,backgroundSize:o.backgroundSize,backgroundRepeat:o.backgroundRepeat}))),overlayProps:h(`computed:1:1`,()=>p(()=>P(o.overlay)))}}));return s(a=>{let c=e(),u=t(`rue:component:anchor`);i(c,u);let p=s(()=>{let a=e(),c=t(`rue:slot:anchor`);i(a,c),n(()=>{let o=k.get()?s(()=>{let a=e(),o=t(`rue:component:anchor`);return i(a,o),n(()=>{let e=d(B,{...k.get()});r(()=>l(e,a,o))}),a}):``;r(()=>l(o,a,c))}),i(a,f(` `));let u=t(`rue:children:anchor`);return i(a,u),n(()=>{let e=o.children;r(()=>l(e,a,u))}),a});return n(()=>{let e=d(D,{...E,style:N(o.style,O.get()),className:M(`hero`,(o.tone===void 0?`default`:o.tone)===`default`?void 0:w[o.tone===void 0?`default`:o.tone],o.fullHeight?T.screen:o.size?T[o.size]:void 0,o.className),children:p});r(()=>l(e,c,u))}),c})},z=o=>{let{__rue_rest_omit_0:c,__rue_rest_omit_1:u,__rue_rest_omit_2:f,__rue_rest_omit_3:p,__rue_rest_omit_4:m,__rue_rest_omit_5:g,__rue_rest_omit_6:_,rest:v,Component:y}=h(`useSetup:0:0:dup1`,()=>a(()=>{let{as:e,className:t,children:n,layout:r,align:i,textAlign:a,gap:s,...c}=o;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:n,__rue_rest_omit_3:r,__rue_rest_omit_4:i,__rue_rest_omit_5:a,__rue_rest_omit_6:s,rest:c,Component:o.as===void 0?`div`:o.as}}));return s(a=>{let s=e(),c=t(`rue:component:anchor`);return i(s,c),n(()=>{let e=d(y,{...v,className:M(`hero-content`,(o.layout===void 0?`inherit`:o.layout)===`inherit`?void 0:ee[o.layout===void 0?`inherit`:o.layout],o.align?E[o.align]:void 0,o.textAlign?D[o.textAlign]:void 0,o.gap?O[o.gap]:void 0,o.className),children:o.children});r(()=>l(e,s,c))}),s})},B=o=>{let{__rue_rest_omit_0:c,__rue_rest_omit_1:u,__rue_rest_omit_2:f,__rue_rest_omit_3:p,__rue_rest_omit_4:m,__rue_rest_omit_5:g,__rue_rest_omit_6:_,rest:v,Component:y}=h(`useSetup:0:0:dup2`,()=>a(()=>{let{as:e,className:t,children:n,tone:r,opacity:i,blur:a,style:s,...c}=o;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:n,__rue_rest_omit_3:r,__rue_rest_omit_4:i,__rue_rest_omit_5:a,__rue_rest_omit_6:s,rest:c,Component:o.as===void 0?`div`:o.as}}));return s(a=>{let s=e(),c=t(`rue:component:anchor`);return i(s,c),n(()=>{let e=d(y,{...v,style:N(o.style,F(o.opacity)),className:M(`hero-overlay`,(o.tone===void 0?`default`:o.tone)===`default`?void 0:k[o.tone===void 0?`default`:o.tone],o.blur?`backdrop-blur-sm`:void 0,o.className),children:o.children});r(()=>l(e,s,c))}),s})},V=Object.assign(R,{Content:z,Overlay:B,Title:o=>{let{__rue_rest_omit_0:c,__rue_rest_omit_1:u,__rue_rest_omit_2:f,__rue_rest_omit_3:p,__rue_rest_omit_4:m,rest:g,Component:_}=h(`useSetup:0:0:dup3`,()=>a(()=>{let{as:e,className:t,children:n,size:r,balanced:i,...a}=o;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:n,__rue_rest_omit_3:r,__rue_rest_omit_4:i,rest:a,Component:o.as===void 0?`h1`:o.as}}));return s(a=>{let s=e(),c=t(`rue:component:anchor`);return i(s,c),n(()=>{let e=d(_,{...g,className:M(`font-bold tracking-tight`,A[o.size===void 0?`lg`:o.size],o.balanced===void 0||o.balanced?`text-balance`:void 0,o.className),children:o.children});r(()=>l(e,s,c))}),s})},Description:o=>{let{__rue_rest_omit_0:c,__rue_rest_omit_1:u,__rue_rest_omit_2:f,__rue_rest_omit_3:p,__rue_rest_omit_4:m,rest:g,Component:_}=h(`useSetup:0:0:dup4`,()=>a(()=>{let{as:e,className:t,children:n,size:r,muted:i,...a}=o;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:n,__rue_rest_omit_3:r,__rue_rest_omit_4:i,rest:a,Component:o.as===void 0?`p`:o.as}}));return s(a=>{let s=e(),c=t(`rue:component:anchor`);return i(s,c),n(()=>{let e=d(_,{...g,className:M(`max-w-2xl leading-relaxed`,j[o.size===void 0?`md`:o.size],o.muted===void 0||o.muted?`opacity-80`:void 0,o.className),children:o.children});r(()=>l(e,s,c))}),s})},Actions:o=>{let{__rue_rest_omit_0:c,__rue_rest_omit_1:u,__rue_rest_omit_2:f,__rue_rest_omit_3:p,__rue_rest_omit_4:m,__rue_rest_omit_5:g,rest:_,Component:v}=h(`useSetup:0:0:dup5`,()=>a(()=>{let{as:e,className:t,children:n,align:r,direction:i,stackOnMobile:a,...s}=o;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:n,__rue_rest_omit_3:r,__rue_rest_omit_4:i,__rue_rest_omit_5:a,rest:s,Component:o.as===void 0?`div`:o.as}}));return s(a=>{let s=e(),c=t(`rue:component:anchor`);return i(s,c),n(()=>{let e=d(v,{..._,className:M(`flex gap-3`,o.stackOnMobile!==void 0&&o.stackOnMobile?`flex-col sm:flex-row sm:flex-wrap`:(o.direction===void 0?`row`:o.direction)===`column`?`flex-col`:`flex-row flex-wrap`,L(o.align,o.direction===void 0?`row`:o.direction,o.stackOnMobile===void 0?!1:o.stackOnMobile),o.className),children:o.children});r(()=>l(e,s,c))}),s})}}),H=`https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp`,U=`https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp`,W=a=>s(d=>{let p=o(`div`,d);c(p,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=o(`table`,p);i(p,m),c(m,`table table-zebra`);let h=o(`thead`,m);i(m,h);let _=o(`tr`,h);i(h,_);let v=o(`th`,_);i(_,v),i(v,f(`属性`));let y=o(`th`,_);i(_,y),i(y,f(`说明`));let b=o(`th`,_);i(_,b),i(b,f(`类型`));let x=o(`th`,_);i(_,x),i(x,f(`默认值`));let S=o(`tbody`,m);i(m,S);let C=t(`rue:list:start`),w=t(`rue:list:end`);i(S,C),i(S,w);let T=new Map;return n(()=>{T=g({items:a.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(a,c,d,f,p)=>{l(s(()=>{let s=e(),c=o(`tr`,s);i(s,c),n(()=>{u(c,`key`,String(a.prop))});let d=o(`td`,c);i(c,d);let f=o(`code`,d);i(d,f);let p=t(`rue:slot:anchor`);i(f,p),n(()=>{let e=a.prop;r(()=>l(e,f,p))});let m=o(`td`,c);i(c,m);let h=t(`rue:slot:anchor`);i(m,h),n(()=>{let e=a.description;r(()=>l(e,m,h))});let g=o(`td`,c);i(c,g);let _=o(`code`,g);i(g,_);let v=t(`rue:slot:anchor`);i(_,v),n(()=>{let e=a.type;r(()=>l(e,_,v))});let y=o(`td`,c);i(c,y);let b=o(`code`,y);i(y,b);let x=t(`rue:slot:anchor`);return i(b,x),n(()=>{let e=a.defaultValue;r(()=>l(e,b,x))}),s}),c,d)}})}),p}),te=[{prop:`as`,description:`指定 Hero 根节点标签`,type:`string`,defaultValue:`div`},{prop:`backgroundImage`,description:`直接设置背景图 URL，组件会自动写入内联背景样式`,type:`string`,defaultValue:`-`},{prop:`backgroundPosition`,description:`背景图定位`,type:`string`,defaultValue:`center`},{prop:`backgroundRepeat`,description:`背景图重复方式`,type:`string`,defaultValue:`no-repeat`},{prop:`backgroundSize`,description:`背景图尺寸`,type:`string`,defaultValue:`cover`},{prop:`fullHeight`,description:`直接切换到全屏高度，等价于 screen 尺寸`,type:`boolean`,defaultValue:`false`},{prop:`overlay`,description:`开启自动遮罩，也支持直接传入 Hero.Overlay 同构配置对象`,type:`boolean | HeroOverlayProps`,defaultValue:`false`},{prop:`size`,description:`Hero 区块高度预设`,type:`sm | md | lg | xl | screen`,defaultValue:`-`},{prop:`tone`,description:`Root 背景与前景色语义层`,type:`default | base-100 | base-200 | base-300 | neutral | primary | secondary | accent | info | success | warning | error`,defaultValue:`default`}],ne=[{prop:`Hero.Content.align`,description:`控制内容区交叉轴对齐`,type:`start | center | end`,defaultValue:`-`},{prop:`Hero.Content.as`,description:`指定内容区标签`,type:`string`,defaultValue:`div`},{prop:`Hero.Content.gap`,description:`内容区间距预设，适合覆盖 split 默认间距`,type:`sm | md | lg | xl`,defaultValue:`-`},{prop:`Hero.Content.layout`,description:`语义布局预设，覆盖居中、分栏与反向分栏`,type:`inherit | center | split | split-reverse`,defaultValue:`inherit`},{prop:`Hero.Content.textAlign`,description:`文字对齐方式`,type:`start | center | end`,defaultValue:`-`}],re=[{prop:`Hero.Overlay.blur`,description:`为遮罩添加轻量模糊，适合背景图场景`,type:`boolean`,defaultValue:`false`},{prop:`Hero.Overlay.opacity`,description:`遮罩透明度，支持 soft / medium / strong 或数字`,type:`soft | medium | strong | number`,defaultValue:`-`},{prop:`Hero.Overlay.tone`,description:`遮罩色调，可配合自动 overlay 一起用`,type:`default | base-content | neutral | primary | secondary | accent | info | success | warning | error`,defaultValue:`default`},{prop:`Hero.Title.balanced`,description:`标题默认启用 text-balance，减少过长标题断行问题`,type:`boolean`,defaultValue:`true`},{prop:`Hero.Title.size`,description:`标题字号预设`,type:`sm | md | lg | xl`,defaultValue:`lg`},{prop:`Hero.Description.muted`,description:`描述文本默认降低一点对比度`,type:`boolean`,defaultValue:`true`},{prop:`Hero.Description.size`,description:`描述字号预设`,type:`sm | md | lg`,defaultValue:`md`},{prop:`Hero.Actions.align`,description:`操作区对齐方式，会根据横排或竖排自动切换到 justify / items`,type:`start | center | end`,defaultValue:`-`},{prop:`Hero.Actions.direction`,description:`操作区排列方向`,type:`row | column`,defaultValue:`row`},{prop:`Hero.Actions.stackOnMobile`,description:`移动端堆叠、桌面端横排，适合 CTA 组合`,type:`boolean`,defaultValue:`false`}],G=()=>{let{tabSemantic:u,tabCentered:p,tabFigure:g,tabReverse:w,tabForm:T,tabOverlay:ee,tabOverlayAuto:E,tabPresets:D}=h(`useSetup:0:0`,()=>a(()=>({tabSemantic:h(`ref:1:0`,()=>m(`preview`)),tabCentered:h(`ref:1:1`,()=>m(`preview`)),tabFigure:h(`ref:1:2`,()=>m(`preview`)),tabReverse:h(`ref:1:3`,()=>m(`preview`)),tabForm:h(`ref:1:4`,()=>m(`preview`)),tabOverlay:h(`ref:1:5`,()=>m(`preview`)),tabOverlayAuto:h(`ref:1:6`,()=>m(`preview`)),tabPresets:h(`ref:1:7`,()=>m(`preview`))})));return s(a=>{let m=e(),h=t(`rue:component:anchor`);return i(m,h),l(d(S,{children:s(()=>{let a=e(),s=o(`div`,a);i(a,s),c(s,`max-w-none prose prose-sm md:prose-base`);let m=o(`h1`,s);i(s,m),i(m,f(`Hero 主视觉区`));let h=o(`p`,s);i(s,h),c(h,`mt-3 mb-3 text-sm`),i(h,f(`Hero 现在不只是一个样式壳。Root 负责背景、尺寸和遮罩，Content 负责布局，Title / Description / Actions 负责最常见的文案骨架，剩下的局部视觉继续交给 className 微调。`));let S=o(`p`,s);i(s,S),c(S,`mt-0 mb-4 text-sm`),i(S,f(`没有可以直接对照的同名标准组件，所以这次的增强重点放在组合能力和语义 API 上：保留 Rue 自己的视觉语言，但把高频搭建动作从页面里收回到组件里。`));let O=o(`div`,s);i(s,O),c(O,`not-prose mt-6 grid gap-4 lg:grid-cols-3`);let k=o(`div`,O);i(O,k),c(k,`rounded-[1.5rem] border border-base-300 bg-base-100 p-5 shadow-sm`);let A=o(`div`,k);i(k,A),c(A,`text-xs uppercase tracking-[0.28em] opacity-60`),i(A,f(`Root`));let j=o(`div`,k);i(k,j),c(j,`mt-3 text-lg font-semibold`),i(j,f(`Background, size, overlay`));let M=o(`p`,k);i(k,M),c(M,`mt-2 text-sm opacity-70`),i(M,f(`用 tone、size、backgroundImage、overlay 先把 Hero 的外层骨架搭起来。`));let N=o(`div`,O);i(O,N),c(N,`rounded-[1.5rem] border border-base-300 bg-base-100 p-5 shadow-sm`);let P=o(`div`,N);i(N,P),c(P,`text-xs uppercase tracking-[0.28em] opacity-60`),i(P,f(`Content`));let F=o(`div`,N);i(N,F),c(F,`mt-3 text-lg font-semibold`),i(F,f(`Split, reverse, center`));let I=o(`p`,N);i(N,I),c(I,`mt-2 text-sm opacity-70`),i(I,f(`用 Hero.Content.layout 切换常见主视觉布局，再按需叠加 align、textAlign 和 gap。`));let L=o(`div`,O);i(O,L),c(L,`rounded-[1.5rem] border border-base-300 bg-base-100 p-5 shadow-sm`);let R=o(`div`,L);i(L,R),c(R,`text-xs uppercase tracking-[0.28em] opacity-60`),i(R,f(`Parts`));let z=o(`div`,L);i(L,z),c(z,`mt-3 text-lg font-semibold`),i(z,f(`Readable copy blocks`));let B=o(`p`,L);i(L,B),c(B,`mt-2 text-sm opacity-70`),i(B,f(`标题、描述和操作区都给了语义化入口，页面里的重复样式可以明显减少。`));let G=t(`rue:component:anchor`);i(s,G),n(()=>{let e=d(C,{title:`Semantic starter`,tab:u,preview:()=>v(V,{tone:`base-100`,size:`xl`,className:`overflow-hidden rounded-[2rem] border border-base-300 bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10`,children:_(V.Content,{layout:`split`,align:`center`,gap:`xl`,className:`px-6 py-10 lg:px-16`,children:[_(`div`,{className:`space-y-5`,children:[v(`span`,{className:`badge badge-outline badge-primary`,children:`Rue Design Hero`}),v(V.Title,{children:`Ship landing sections without rebuilding layout scaffolding.`}),v(V.Description,{children:`Hero 现在把 surface、height、background image、overlay 和 action 布局都提升成了语义 API。页面可以更聚焦在内容，而不是重复拼装容器类名。`}),_(V.Actions,{stackOnMobile:!0,children:[v(y,{color:`primary`,children:`Get Started`}),v(y,{type:`outlined`,children:`Browse patterns`})]})]}),v(`div`,{className:`grid w-full max-w-md gap-4`,children:_(`div`,{className:`rounded-[1.5rem] border border-base-300 bg-base-100/90 p-5 shadow-xl`,children:[v(`p`,{className:`text-xs uppercase tracking-[0.3em] opacity-60`,children:`Composition`}),_(`div`,{className:`mt-4 space-y-3`,children:[_(`div`,{className:`rounded-2xl bg-base-200 p-4`,children:[v(`div`,{className:`text-sm font-semibold`,children:`Root handles surface`}),v(`p`,{className:`mt-1 text-sm opacity-70`,children:`tone、size、backgroundImage、overlay 负责外层骨架。`})]}),_(`div`,{className:`rounded-2xl bg-base-200 p-4`,children:[v(`div`,{className:`text-sm font-semibold`,children:`Content handles layout`}),v(`p`,{className:`mt-1 text-sm opacity-70`,children:`layout、align、textAlign、gap 负责组织主视觉内容。`})]})]})]})})]})}),code:`<Hero
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
</Hero>`});r(()=>l(e,s,G))});let ie=t(`rue:component:anchor`);i(s,ie),n(()=>{let e=d(C,{title:`Centered hero`,tab:p,preview:()=>v(V,{tone:`base-200`,size:`lg`,className:`rounded-box`,children:v(V.Content,{layout:`center`,textAlign:`center`,gap:`md`,className:`px-6 py-10`,children:_(`div`,{className:`max-w-md space-y-4`,children:[v(V.Title,{children:`Hello there`}),v(V.Description,{children:`Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.`}),_(V.Actions,{align:`center`,stackOnMobile:!0,children:[v(y,{color:`primary`,children:`Get Started`}),v(y,{type:`outlined`,children:`View Docs`})]})]})})}),code:`<Hero tone={'base-200'} size={'lg'} className={'rounded-box'}>
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
</Hero>`});r(()=>l(e,s,ie))});let ae=t(`rue:component:anchor`);i(s,ae),n(()=>{let e=d(C,{title:`Hero with figure`,tab:g,preview:()=>v(V,{tone:`base-200`,size:`lg`,className:`rounded-box`,children:_(V.Content,{layout:`split`,align:`center`,className:`px-6 py-10`,children:[v(`img`,{src:H,className:`max-w-sm rounded-lg shadow-2xl`,alt:`Hero figure`}),_(`div`,{children:[v(V.Title,{children:`Box Office News!`}),v(V.Description,{children:`Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi.`}),_(V.Actions,{className:`mt-6`,children:[v(y,{color:`primary`,children:`Get Started`}),v(y,{type:`text`,children:`View details`})]})]})]})}),code:`<Hero tone={'base-200'} size={'lg'} className={'rounded-box'}>
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
</Hero>`});r(()=>l(e,s,ae))});let oe=t(`rue:component:anchor`);i(s,oe),n(()=>{let e=d(C,{title:`Hero with figure but reverse order`,tab:w,preview:()=>v(V,{tone:`base-100`,size:`lg`,className:`rounded-box border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-accent/10`,children:_(V.Content,{layout:`split-reverse`,align:`center`,className:`px-6 py-10`,children:[v(`img`,{src:H,className:`max-w-sm rounded-lg shadow-2xl`,alt:`Hero reverse figure`}),_(`div`,{children:[v(`span`,{className:`badge badge-soft badge-accent`,children:`Reverse layout`}),v(V.Title,{className:`mt-4`,children:`Box Office News!`}),v(V.Description,{children:`Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi.`}),_(V.Actions,{className:`mt-6`,children:[v(y,{color:`primary`,children:`Get Started`}),v(y,{type:`outlined`,children:`See release plan`})]})]})]})}),code:`<Hero
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
</Hero>`});r(()=>l(e,s,oe))});let se=t(`rue:component:anchor`);i(s,se),n(()=>{let e=d(C,{title:`Hero with form`,tab:T,preview:()=>v(V,{tone:`base-200`,size:`lg`,className:`rounded-box`,children:_(V.Content,{layout:`split-reverse`,align:`center`,className:`px-6 py-10`,children:[_(`div`,{className:`space-y-4 text-center lg:text-left`,children:[v(`span`,{className:`badge badge-outline`,children:`Members only`}),v(V.Title,{children:`Login now!`}),v(V.Description,{children:`Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi.`})]}),v(`div`,{className:`card w-full max-w-sm shrink-0 bg-base-100 shadow-2xl`,children:v(`div`,{className:`card-body`,children:_(b,{children:[v(b.Label,{children:`Email`}),v(x,{type:`email`,placeholder:`Email`}),v(b.Label,{children:`Password`}),v(x,{type:`password`,placeholder:`Password`}),v(`div`,{children:v(`a`,{className:`link link-hover`,children:`Forgot password?`})}),v(y,{color:`neutral`,className:`mt-4`,children:`Login`})]})})})]})}),code:`<Hero tone={'base-200'} size={'lg'} className={'rounded-box'}>
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
</Hero>`});r(()=>l(e,s,se))});let ce=t(`rue:component:anchor`);i(s,ce),n(()=>{let e=d(C,{title:`Hero with overlay image`,tab:ee,preview:()=>_(V,{backgroundImage:U,size:`lg`,className:`rounded-box`,children:[v(V.Overlay,{opacity:`medium`,className:`rounded-box`}),v(V.Content,{layout:`center`,textAlign:`center`,className:`px-6 py-10 text-neutral-content`,children:_(`div`,{className:`max-w-md space-y-5`,children:[v(V.Title,{children:`Hello there`}),v(V.Description,{muted:!1,className:`text-neutral-content/80`,children:`Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi.`}),_(V.Actions,{align:`center`,stackOnMobile:!0,children:[v(y,{color:`primary`,children:`Get Started`}),v(y,{type:`outlined`,children:`Read story`})]})]})})]}),code:`<Hero backgroundImage={'${U}'} size={'lg'} className={'rounded-box'}>
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
</Hero>`});r(()=>l(e,s,ce))});let le=t(`rue:component:anchor`);i(s,le),n(()=>{let e=d(C,{title:`Hero with automatic overlay`,tab:E,preview:()=>v(V,{as:`section`,backgroundImage:U,size:`xl`,overlay:{tone:`base-content`,opacity:`medium`,blur:!0,className:`rounded-[2rem]`},className:`overflow-hidden rounded-[2rem]`,children:_(V.Content,{layout:`split`,align:`center`,gap:`xl`,className:`px-6 py-12 text-neutral-content lg:px-16`,children:[_(`div`,{className:`space-y-5`,children:[v(`span`,{className:`badge badge-soft badge-primary`,children:`Auto Overlay`}),v(V.Title,{children:`把背景图和可读性补丁一起交给 Hero 处理。`}),v(V.Description,{muted:!1,className:`text-neutral-content/80`,children:`当页面只是想快速搭一个带图主视觉区时，直接传 backgroundImage 和 overlay 就够了，不用再手写遮罩层节点。`})]}),v(`div`,{className:`w-full max-w-xs rounded-[1.5rem] border border-white/15 bg-black/30 p-5 backdrop-blur-sm`,children:_(V.Actions,{direction:`column`,align:`start`,children:[v(y,{color:`primary`,block:!0,children:`Start from template`}),v(y,{type:`outlined`,block:!0,children:`Read migration guide`})]})})]})}),code:`<Hero
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
</Hero>`});r(()=>l(e,s,le))});let ue=t(`rue:component:anchor`);i(s,ue),n(()=>{let e=d(C,{title:`Surface and size presets`,tab:D,preview:()=>_(`div`,{className:`grid gap-4 xl:grid-cols-3`,children:[v(V,{tone:`base-200`,size:`sm`,className:`rounded-box`,children:v(V.Content,{className:`px-4 py-6`,children:_(`div`,{className:`space-y-3`,children:[v(`span`,{className:`badge badge-soft`,children:`base-200 / sm`}),v(V.Title,{size:`sm`,children:`Compact spotlight`}),v(V.Description,{size:`sm`,children:`适合列表页里的次级引导块。`})]})})}),v(V,{tone:`primary`,size:`md`,className:`rounded-box`,children:v(V.Content,{className:`px-4 py-6`,children:_(`div`,{className:`space-y-3`,children:[v(`span`,{className:`badge badge-soft badge-neutral`,children:`primary / md`}),v(V.Title,{size:`sm`,children:`Campaign push`}),v(V.Description,{size:`sm`,muted:!1,children:`颜色与前景色一起切换，页面里不用再单独补文字颜色。`})]})})}),v(V,{tone:`neutral`,size:`lg`,className:`rounded-box`,children:v(V.Content,{className:`px-4 py-6`,children:_(`div`,{className:`space-y-3`,children:[v(`span`,{className:`badge badge-outline badge-primary`,children:`neutral / lg`}),v(V.Title,{size:`sm`,children:`Full campaign frame`}),v(V.Description,{size:`sm`,muted:!1,children:`更高的尺寸适合首页首屏或专题页入口。`})]})})})]}),code:`<div className={'grid gap-4 xl:grid-cols-3'}>
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
</div>`});r(()=>l(e,s,ue))});let K=o(`div`,s);i(s,K),c(K,`not-prose my-12 space-y-8`);let q=o(`section`,K);i(K,q),c(q,`space-y-2`);let J=o(`h2`,q);i(q,J),c(J,`text-2xl font-semibold`),i(J,f(`API`));let Y=o(`p`,q);i(q,Y),c(Y,`text-sm opacity-70`),i(Y,f(`推荐把外层背景和高度交给 Hero Root，把布局交给 Hero.Content，把标题、描述和 CTA 交给语义子组件。这样页面里仍然可以继续用 className 微调，但不会反复重写同一套结构。`));let X=o(`section`,K);i(K,X),c(X,`space-y-3`);let Z=o(`h3`,X);i(X,Z),c(Z,`text-xl font-semibold`),i(Z,f(`Hero`));let de=t(`rue:component:anchor`);i(X,de),n(()=>{let e=d(W,{rows:te});r(()=>l(e,X,de))});let Q=o(`section`,K);i(K,Q),c(Q,`space-y-3`);let fe=o(`h3`,Q);i(Q,fe),c(fe,`text-xl font-semibold`),i(fe,f(`Hero.Content`));let pe=t(`rue:component:anchor`);i(Q,pe),n(()=>{let e=d(W,{rows:ne});r(()=>l(e,Q,pe))});let $=o(`section`,K);i(K,$),c($,`space-y-3`);let me=o(`h3`,$);i($,me),c(me,`text-xl font-semibold`),i(me,f(`Hero parts`));let he=t(`rue:component:anchor`);return i($,he),n(()=>{let e=d(W,{rows:re});r(()=>l(e,$,he))}),a})}),m,h),m})};export{G as default};