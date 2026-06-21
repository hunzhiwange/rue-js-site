import{$t as e,Jt as t,Q as n,St as r,dt as i,et as a,in as o,l as s,lt as c,nt as l,o as u,rt as d,t as f,tt as p,zt as m}from"./vapor-runtime-DsQWl-IB.js";import{a as h,n as g}from"./vapor-helpers-vapor-Dg64FcpK.js";import{a as _,i as v}from"./persistentSidebarPlayground-6jqnvaEa.js";import{t as y}from"./button-COZLI6MM.js";import{t as b}from"./fieldset-DZVXbJox.js";import{t as x}from"./input-ey-wzC3N.js";import{r as S}from"./SidebarPlaygroundDesign-EU389JDE.js";import{t as C}from"./PreviewBlock-wHSyDiek.js";var w={"base-100":`bg-base-100 text-base-content`,"base-200":`bg-base-200 text-base-content`,"base-300":`bg-base-300 text-base-content`,neutral:`bg-neutral text-neutral-content`,primary:`bg-primary text-primary-content`,secondary:`bg-secondary text-secondary-content`,accent:`bg-accent text-accent-content`,info:`bg-info text-info-content`,success:`bg-success text-success-content`,warning:`bg-warning text-warning-content`,error:`bg-error text-error-content`},T={sm:`min-h-80`,md:`min-h-96`,lg:`min-h-[30rem]`,xl:`min-h-[36rem]`,screen:`min-h-screen`},ee={center:`text-center`,split:`flex-col gap-10 lg:flex-row`,"split-reverse":`flex-col gap-10 lg:flex-row-reverse`},E={start:`items-start`,center:`items-center`,end:`items-end`},D={start:`text-left`,center:`text-center`,end:`text-right`},O={sm:`gap-4`,md:`gap-6`,lg:`gap-10`,xl:`gap-14`},k={"base-content":`bg-base-content`,neutral:`bg-neutral`,primary:`bg-primary`,secondary:`bg-secondary`,accent:`bg-accent`,info:`bg-info`,success:`bg-success`,warning:`bg-warning`,error:`bg-error`},A={sm:`text-3xl md:text-4xl`,md:`text-4xl md:text-5xl`,lg:`text-5xl md:text-6xl`,xl:`text-6xl md:text-7xl`},j={sm:`text-sm md:text-base`,md:`text-base md:text-lg`,lg:`text-lg md:text-xl`},M=(...e)=>e.filter(Boolean).join(` `),N=(e,t)=>{if(!(!e&&!t))return{...e,...t}},P=e=>{if(e)return e===!0?{}:e},F=e=>{if(e!=null){if(typeof e==`number`)return{opacity:e};switch(e){case`soft`:return{opacity:.25};case`strong`:return{opacity:.7};default:return{opacity:.45}}}},I=({backgroundImage:e,backgroundPosition:t,backgroundSize:n,backgroundRepeat:r})=>{if(e)return{backgroundImage:`url(${e})`,backgroundPosition:t??`center`,backgroundSize:n??`cover`,backgroundRepeat:r??`no-repeat`}},L=(e,t,n)=>{if(e){if(n)switch(e){case`center`:return`items-center sm:justify-center`;case`end`:return`items-end sm:justify-end`;default:return`items-start sm:justify-start`}if(t===`column`)switch(e){case`center`:return`items-center`;case`end`:return`items-end`;default:return`items-start`}switch(e){case`center`:return`justify-center`;case`end`:return`justify-end`;default:return`justify-start`}}},R=t=>{let{__rue_rest_omit_0:i,__rue_rest_omit_1:c,__rue_rest_omit_2:l,__rue_rest_omit_3:g,__rue_rest_omit_4:_,__rue_rest_omit_5:v,__rue_rest_omit_6:y,__rue_rest_omit_7:b,__rue_rest_omit_8:x,__rue_rest_omit_9:S,__rue_rest_omit_10:C,__rue_rest_omit_11:ee,rest:E,Component:D,backgroundStyle:O,overlayProps:k}=h(`useSetup:0:0`,()=>o(()=>{let{as:e,className:n,children:i,style:a,tone:o,size:s,fullHeight:c,backgroundImage:l,backgroundPosition:u,backgroundSize:d,backgroundRepeat:f,overlay:p,...m}=t;return{__rue_rest_omit_0:e,__rue_rest_omit_1:n,__rue_rest_omit_2:i,__rue_rest_omit_3:a,__rue_rest_omit_4:o,__rue_rest_omit_5:s,__rue_rest_omit_6:c,__rue_rest_omit_7:l,__rue_rest_omit_8:u,__rue_rest_omit_9:d,__rue_rest_omit_10:f,__rue_rest_omit_11:p,rest:m,Component:t.as===void 0?`div`:t.as,backgroundStyle:h(`computed:1:0`,()=>r(()=>I({backgroundImage:t.backgroundImage,backgroundPosition:t.backgroundPosition,backgroundSize:t.backgroundSize,backgroundRepeat:t.backgroundRepeat}))),overlayProps:h(`computed:1:1`,()=>r(()=>P(t.overlay)))}}));return s(r=>{let i=p(),o=a(`rue:component:anchor`);n(i,o);let c=s(()=>{let r=p(),i=a(`rue:slot:anchor`);n(r,i),m(()=>{let t=k.get()?s(()=>{let t=p(),r=a(`rue:component:anchor`);return n(t,r),m(()=>{let n=f(B,{...k.get()});e(()=>u(n,t,r))}),t}):``;e(()=>u(t,r,i))}),n(r,d(` `));let o=a(`rue:children:anchor`);return n(r,o),m(()=>{let n=t.children;e(()=>u(n,r,o))}),r});return m(()=>{let n=f(D,{...E,style:N(t.style,O.get()),className:M(`hero`,(t.tone===void 0?`default`:t.tone)===`default`?void 0:w[t.tone===void 0?`default`:t.tone],t.fullHeight?T.screen:t.size?T[t.size]:void 0,t.className),children:c});e(()=>u(n,i,o))}),i})},z=t=>{let{__rue_rest_omit_0:r,__rue_rest_omit_1:i,__rue_rest_omit_2:c,__rue_rest_omit_3:l,__rue_rest_omit_4:d,__rue_rest_omit_5:g,__rue_rest_omit_6:_,rest:v,Component:y}=h(`useSetup:0:0:dup1`,()=>o(()=>{let{as:e,className:n,children:r,layout:i,align:a,textAlign:o,gap:s,...c}=t;return{__rue_rest_omit_0:e,__rue_rest_omit_1:n,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,__rue_rest_omit_6:s,rest:c,Component:t.as===void 0?`div`:t.as}}));return s(r=>{let i=p(),o=a(`rue:component:anchor`);return n(i,o),m(()=>{let n=f(y,{...v,className:M(`hero-content`,(t.layout===void 0?`inherit`:t.layout)===`inherit`?void 0:ee[t.layout===void 0?`inherit`:t.layout],t.align?E[t.align]:void 0,t.textAlign?D[t.textAlign]:void 0,t.gap?O[t.gap]:void 0,t.className),children:t.children});e(()=>u(n,i,o))}),i})},B=t=>{let{__rue_rest_omit_0:r,__rue_rest_omit_1:i,__rue_rest_omit_2:c,__rue_rest_omit_3:l,__rue_rest_omit_4:d,__rue_rest_omit_5:g,__rue_rest_omit_6:_,rest:v,Component:y}=h(`useSetup:0:0:dup2`,()=>o(()=>{let{as:e,className:n,children:r,tone:i,opacity:a,blur:o,style:s,...c}=t;return{__rue_rest_omit_0:e,__rue_rest_omit_1:n,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,__rue_rest_omit_6:s,rest:c,Component:t.as===void 0?`div`:t.as}}));return s(r=>{let i=p(),o=a(`rue:component:anchor`);return n(i,o),m(()=>{let n=f(y,{...v,style:N(t.style,F(t.opacity)),className:M(`hero-overlay`,(t.tone===void 0?`default`:t.tone)===`default`?void 0:k[t.tone===void 0?`default`:t.tone],t.blur?`backdrop-blur-sm`:void 0,t.className),children:t.children});e(()=>u(n,i,o))}),i})},V=Object.assign(R,{Content:z,Overlay:B,Title:t=>{let{__rue_rest_omit_0:r,__rue_rest_omit_1:i,__rue_rest_omit_2:c,__rue_rest_omit_3:l,__rue_rest_omit_4:d,rest:g,Component:_}=h(`useSetup:0:0:dup3`,()=>o(()=>{let{as:e,className:n,children:r,size:i,balanced:a,...o}=t;return{__rue_rest_omit_0:e,__rue_rest_omit_1:n,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,rest:o,Component:t.as===void 0?`h1`:t.as}}));return s(r=>{let i=p(),o=a(`rue:component:anchor`);return n(i,o),m(()=>{let n=f(_,{...g,className:M(`font-bold tracking-tight`,A[t.size===void 0?`lg`:t.size],t.balanced===void 0||t.balanced?`text-balance`:void 0,t.className),children:t.children});e(()=>u(n,i,o))}),i})},Description:t=>{let{__rue_rest_omit_0:r,__rue_rest_omit_1:i,__rue_rest_omit_2:c,__rue_rest_omit_3:l,__rue_rest_omit_4:d,rest:g,Component:_}=h(`useSetup:0:0:dup4`,()=>o(()=>{let{as:e,className:n,children:r,size:i,muted:a,...o}=t;return{__rue_rest_omit_0:e,__rue_rest_omit_1:n,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,rest:o,Component:t.as===void 0?`p`:t.as}}));return s(r=>{let i=p(),o=a(`rue:component:anchor`);return n(i,o),m(()=>{let n=f(_,{...g,className:M(`max-w-2xl leading-relaxed`,j[t.size===void 0?`md`:t.size],t.muted===void 0||t.muted?`opacity-80`:void 0,t.className),children:t.children});e(()=>u(n,i,o))}),i})},Actions:t=>{let{__rue_rest_omit_0:r,__rue_rest_omit_1:i,__rue_rest_omit_2:c,__rue_rest_omit_3:l,__rue_rest_omit_4:d,__rue_rest_omit_5:g,rest:_,Component:v}=h(`useSetup:0:0:dup5`,()=>o(()=>{let{as:e,className:n,children:r,align:i,direction:a,stackOnMobile:o,...s}=t;return{__rue_rest_omit_0:e,__rue_rest_omit_1:n,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,rest:s,Component:t.as===void 0?`div`:t.as}}));return s(r=>{let i=p(),o=a(`rue:component:anchor`);return n(i,o),m(()=>{let n=f(v,{..._,className:M(`flex gap-3`,t.stackOnMobile!==void 0&&t.stackOnMobile?`flex-col sm:flex-row sm:flex-wrap`:(t.direction===void 0?`row`:t.direction)===`column`?`flex-col`:`flex-row flex-wrap`,L(t.align,t.direction===void 0?`row`:t.direction,t.stackOnMobile===void 0?!1:t.stackOnMobile),t.className),children:t.children});e(()=>u(n,i,o))}),i})}}),H=`https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp`,U=`https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp`,W=t=>s(r=>{let o=l(`div`,r);i(o,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=l(`table`,o);n(o,f),i(f,`table table-zebra`);let h=l(`thead`,f);n(f,h);let _=l(`tr`,h);n(h,_);let v=l(`th`,_);n(_,v),n(v,d(`属性`));let y=l(`th`,_);n(_,y),n(y,d(`说明`));let b=l(`th`,_);n(_,b),n(b,d(`类型`));let x=l(`th`,_);n(_,x),n(x,d(`默认值`));let S=l(`tbody`,f);n(f,S);let C=a(`rue:list:start`),w=a(`rue:list:end`);n(S,C),n(S,w);let T=new Map;return m(()=>{T=g({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,r,i,o,d)=>{u(s(()=>{let r=p(),i=l(`tr`,r);n(r,i),m(()=>{c(i,`key`,String(t.prop))});let o=l(`td`,i);n(i,o);let s=l(`code`,o);n(o,s);let d=a(`rue:slot:anchor`);n(s,d),m(()=>{let n=t.prop;e(()=>u(n,s,d))});let f=l(`td`,i);n(i,f);let h=a(`rue:slot:anchor`);n(f,h),m(()=>{let n=t.description;e(()=>u(n,f,h))});let g=l(`td`,i);n(i,g);let _=l(`code`,g);n(g,_);let v=a(`rue:slot:anchor`);n(_,v),m(()=>{let n=t.type;e(()=>u(n,_,v))});let y=l(`td`,i);n(i,y);let b=l(`code`,y);n(y,b);let x=a(`rue:slot:anchor`);return n(b,x),m(()=>{let n=t.defaultValue;e(()=>u(n,b,x))}),r}),r,i)}})}),o}),te=[{prop:`as`,description:`指定 Hero 根节点标签`,type:`string`,defaultValue:`div`},{prop:`backgroundImage`,description:`直接设置背景图 URL，组件会自动写入内联背景样式`,type:`string`,defaultValue:`-`},{prop:`backgroundPosition`,description:`背景图定位`,type:`string`,defaultValue:`center`},{prop:`backgroundRepeat`,description:`背景图重复方式`,type:`string`,defaultValue:`no-repeat`},{prop:`backgroundSize`,description:`背景图尺寸`,type:`string`,defaultValue:`cover`},{prop:`fullHeight`,description:`直接切换到全屏高度，等价于 screen 尺寸`,type:`boolean`,defaultValue:`false`},{prop:`overlay`,description:`开启自动遮罩，也支持直接传入 Hero.Overlay 同构配置对象`,type:`boolean | HeroOverlayProps`,defaultValue:`false`},{prop:`size`,description:`Hero 区块高度预设`,type:`sm | md | lg | xl | screen`,defaultValue:`-`},{prop:`tone`,description:`Root 背景与前景色语义层`,type:`default | base-100 | base-200 | base-300 | neutral | primary | secondary | accent | info | success | warning | error`,defaultValue:`default`}],ne=[{prop:`Hero.Content.align`,description:`控制内容区交叉轴对齐`,type:`start | center | end`,defaultValue:`-`},{prop:`Hero.Content.as`,description:`指定内容区标签`,type:`string`,defaultValue:`div`},{prop:`Hero.Content.gap`,description:`内容区间距预设，适合覆盖 split 默认间距`,type:`sm | md | lg | xl`,defaultValue:`-`},{prop:`Hero.Content.layout`,description:`语义布局预设，覆盖居中、分栏与反向分栏`,type:`inherit | center | split | split-reverse`,defaultValue:`inherit`},{prop:`Hero.Content.textAlign`,description:`文字对齐方式`,type:`start | center | end`,defaultValue:`-`}],re=[{prop:`Hero.Overlay.blur`,description:`为遮罩添加轻量模糊，适合背景图场景`,type:`boolean`,defaultValue:`false`},{prop:`Hero.Overlay.opacity`,description:`遮罩透明度，支持 soft / medium / strong 或数字`,type:`soft | medium | strong | number`,defaultValue:`-`},{prop:`Hero.Overlay.tone`,description:`遮罩色调，可配合自动 overlay 一起用`,type:`default | base-content | neutral | primary | secondary | accent | info | success | warning | error`,defaultValue:`default`},{prop:`Hero.Title.balanced`,description:`标题默认启用 text-balance，减少过长标题断行问题`,type:`boolean`,defaultValue:`true`},{prop:`Hero.Title.size`,description:`标题字号预设`,type:`sm | md | lg | xl`,defaultValue:`lg`},{prop:`Hero.Description.muted`,description:`描述文本默认降低一点对比度`,type:`boolean`,defaultValue:`true`},{prop:`Hero.Description.size`,description:`描述字号预设`,type:`sm | md | lg`,defaultValue:`md`},{prop:`Hero.Actions.align`,description:`操作区对齐方式，会根据横排或竖排自动切换到 justify / items`,type:`start | center | end`,defaultValue:`-`},{prop:`Hero.Actions.direction`,description:`操作区排列方向`,type:`row | column`,defaultValue:`row`},{prop:`Hero.Actions.stackOnMobile`,description:`移动端堆叠、桌面端横排，适合 CTA 组合`,type:`boolean`,defaultValue:`false`}],G=()=>{let{tabSemantic:r,tabCentered:c,tabFigure:g,tabReverse:w,tabForm:T,tabOverlay:ee,tabOverlayAuto:E,tabPresets:D}=h(`useSetup:0:0`,()=>o(()=>({tabSemantic:h(`ref:1:0`,()=>t(`preview`)),tabCentered:h(`ref:1:1`,()=>t(`preview`)),tabFigure:h(`ref:1:2`,()=>t(`preview`)),tabReverse:h(`ref:1:3`,()=>t(`preview`)),tabForm:h(`ref:1:4`,()=>t(`preview`)),tabOverlay:h(`ref:1:5`,()=>t(`preview`)),tabOverlayAuto:h(`ref:1:6`,()=>t(`preview`)),tabPresets:h(`ref:1:7`,()=>t(`preview`))})));return s(t=>{let o=p(),h=a(`rue:component:anchor`);return n(o,h),u(f(S,{children:s(()=>{let t=p(),o=l(`div`,t);n(t,o),i(o,`max-w-none prose prose-sm md:prose-base`);let s=l(`h1`,o);n(o,s),n(s,d(`Hero 主视觉区`));let h=l(`p`,o);n(o,h),i(h,`mt-3 mb-3 text-sm`),n(h,d(`Hero 现在不只是一个样式壳。Root 负责背景、尺寸和遮罩，Content 负责布局，Title / Description / Actions 负责最常见的文案骨架，剩下的局部视觉继续交给 className 微调。`));let S=l(`p`,o);n(o,S),i(S,`mt-0 mb-4 text-sm`),n(S,d(`没有可以直接对照的同名标准组件，所以组件重点覆盖组合能力和语义 API 上：使用 Rue 自己的视觉语言，但把高频搭建动作从页面里收回到组件里。`));let O=l(`div`,o);n(o,O),i(O,`not-prose mt-6 grid gap-4 lg:grid-cols-3`);let k=l(`div`,O);n(O,k),i(k,`rounded-[1.5rem] border border-base-300 bg-base-100 p-5 shadow-sm`);let A=l(`div`,k);n(k,A),i(A,`text-xs uppercase tracking-[0.28em] opacity-60`),n(A,d(`Root`));let j=l(`div`,k);n(k,j),i(j,`mt-3 text-lg font-semibold`),n(j,d(`Background, size, overlay`));let M=l(`p`,k);n(k,M),i(M,`mt-2 text-sm opacity-70`),n(M,d(`用 tone、size、backgroundImage、overlay 先把 Hero 的外层骨架搭起来。`));let N=l(`div`,O);n(O,N),i(N,`rounded-[1.5rem] border border-base-300 bg-base-100 p-5 shadow-sm`);let P=l(`div`,N);n(N,P),i(P,`text-xs uppercase tracking-[0.28em] opacity-60`),n(P,d(`Content`));let F=l(`div`,N);n(N,F),i(F,`mt-3 text-lg font-semibold`),n(F,d(`Split, reverse, center`));let I=l(`p`,N);n(N,I),i(I,`mt-2 text-sm opacity-70`),n(I,d(`用 Hero.Content.layout 切换常见主视觉布局，再按需叠加 align、textAlign 和 gap。`));let L=l(`div`,O);n(O,L),i(L,`rounded-[1.5rem] border border-base-300 bg-base-100 p-5 shadow-sm`);let R=l(`div`,L);n(L,R),i(R,`text-xs uppercase tracking-[0.28em] opacity-60`),n(R,d(`Parts`));let z=l(`div`,L);n(L,z),i(z,`mt-3 text-lg font-semibold`),n(z,d(`Readable copy blocks`));let B=l(`p`,L);n(L,B),i(B,`mt-2 text-sm opacity-70`),n(B,d(`标题、描述和操作区都给了语义化入口，页面里的重复样式可以明显减少。`));let G=a(`rue:component:anchor`);n(o,G),m(()=>{let t=f(C,{title:`Semantic starter`,tab:r,preview:()=>v(V,{tone:`base-100`,size:`xl`,className:`overflow-hidden rounded-[2rem] border border-base-300 bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10`,children:_(V.Content,{layout:`split`,align:`center`,gap:`xl`,className:`px-6 py-10 lg:px-16`,children:[_(`div`,{className:`space-y-5`,children:[v(`span`,{className:`badge badge-outline badge-primary`,children:`Rue Design Hero`}),v(V.Title,{children:`Ship landing sections without rebuilding layout scaffolding.`}),v(V.Description,{children:`Hero 现在把 surface、height、background image、overlay 和 action 布局都提升成了语义 API。页面可以更聚焦在内容，而不是重复拼装容器类名。`}),_(V.Actions,{stackOnMobile:!0,children:[v(y,{color:`primary`,children:`Get Started`}),v(y,{type:`outlined`,children:`Browse patterns`})]})]}),v(`div`,{className:`grid w-full max-w-md gap-4`,children:_(`div`,{className:`rounded-[1.5rem] border border-base-300 bg-base-100/90 p-5 shadow-xl`,children:[v(`p`,{className:`text-xs uppercase tracking-[0.3em] opacity-60`,children:`Composition`}),_(`div`,{className:`mt-4 space-y-3`,children:[_(`div`,{className:`rounded-2xl bg-base-200 p-4`,children:[v(`div`,{className:`text-sm font-semibold`,children:`Root handles surface`}),v(`p`,{className:`mt-1 text-sm opacity-70`,children:`tone、size、backgroundImage、overlay 负责外层骨架。`})]}),_(`div`,{className:`rounded-2xl bg-base-200 p-4`,children:[v(`div`,{className:`text-sm font-semibold`,children:`Content handles layout`}),v(`p`,{className:`mt-1 text-sm opacity-70`,children:`layout、align、textAlign、gap 负责组织主视觉内容。`})]})]})]})})]})}),code:`<Hero
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
</Hero>`});e(()=>u(t,o,G))});let ie=a(`rue:component:anchor`);n(o,ie),m(()=>{let t=f(C,{title:`Centered hero`,tab:c,preview:()=>v(V,{tone:`base-200`,size:`lg`,className:`rounded-box`,children:v(V.Content,{layout:`center`,textAlign:`center`,gap:`md`,className:`px-6 py-10`,children:_(`div`,{className:`max-w-md space-y-4`,children:[v(V.Title,{children:`Hello there`}),v(V.Description,{children:`Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.`}),_(V.Actions,{align:`center`,stackOnMobile:!0,children:[v(y,{color:`primary`,children:`Get Started`}),v(y,{type:`outlined`,children:`View Docs`})]})]})})}),code:`<Hero tone={'base-200'} size={'lg'} className={'rounded-box'}>
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
</Hero>`});e(()=>u(t,o,ie))});let ae=a(`rue:component:anchor`);n(o,ae),m(()=>{let t=f(C,{title:`Hero with figure`,tab:g,preview:()=>v(V,{tone:`base-200`,size:`lg`,className:`rounded-box`,children:_(V.Content,{layout:`split`,align:`center`,className:`px-6 py-10`,children:[v(`img`,{src:H,className:`max-w-sm rounded-lg shadow-2xl`,alt:`Hero figure`}),_(`div`,{children:[v(V.Title,{children:`Box Office News!`}),v(V.Description,{children:`Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi.`}),_(V.Actions,{className:`mt-6`,children:[v(y,{color:`primary`,children:`Get Started`}),v(y,{type:`text`,children:`View details`})]})]})]})}),code:`<Hero tone={'base-200'} size={'lg'} className={'rounded-box'}>
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
</Hero>`});e(()=>u(t,o,ae))});let oe=a(`rue:component:anchor`);n(o,oe),m(()=>{let t=f(C,{title:`Hero with figure but reverse order`,tab:w,preview:()=>v(V,{tone:`base-100`,size:`lg`,className:`rounded-box border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-accent/10`,children:_(V.Content,{layout:`split-reverse`,align:`center`,className:`px-6 py-10`,children:[v(`img`,{src:H,className:`max-w-sm rounded-lg shadow-2xl`,alt:`Hero reverse figure`}),_(`div`,{children:[v(`span`,{className:`badge badge-soft badge-accent`,children:`Reverse layout`}),v(V.Title,{className:`mt-4`,children:`Box Office News!`}),v(V.Description,{children:`Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi.`}),_(V.Actions,{className:`mt-6`,children:[v(y,{color:`primary`,children:`Get Started`}),v(y,{type:`outlined`,children:`See release plan`})]})]})]})}),code:`<Hero
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
</Hero>`});e(()=>u(t,o,oe))});let se=a(`rue:component:anchor`);n(o,se),m(()=>{let t=f(C,{title:`Hero with form`,tab:T,preview:()=>v(V,{tone:`base-200`,size:`lg`,className:`rounded-box`,children:_(V.Content,{layout:`split-reverse`,align:`center`,className:`px-6 py-10`,children:[_(`div`,{className:`space-y-4 text-center lg:text-left`,children:[v(`span`,{className:`badge badge-outline`,children:`Members only`}),v(V.Title,{children:`Login now!`}),v(V.Description,{children:`Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi.`})]}),v(`div`,{className:`card w-full max-w-sm shrink-0 bg-base-100 shadow-2xl`,children:v(`div`,{className:`card-body`,children:_(b,{children:[v(b.Label,{children:`Email`}),v(x,{type:`email`,placeholder:`Email`}),v(b.Label,{children:`Password`}),v(x,{type:`password`,placeholder:`Password`}),v(`div`,{children:v(`a`,{className:`link link-hover`,children:`Forgot password?`})}),v(y,{color:`neutral`,className:`mt-4`,children:`Login`})]})})})]})}),code:`<Hero tone={'base-200'} size={'lg'} className={'rounded-box'}>
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
</Hero>`});e(()=>u(t,o,se))});let ce=a(`rue:component:anchor`);n(o,ce),m(()=>{let t=f(C,{title:`Hero with overlay image`,tab:ee,preview:()=>_(V,{backgroundImage:U,size:`lg`,className:`rounded-box`,children:[v(V.Overlay,{opacity:`medium`,className:`rounded-box`}),v(V.Content,{layout:`center`,textAlign:`center`,className:`px-6 py-10 text-neutral-content`,children:_(`div`,{className:`max-w-md space-y-5`,children:[v(V.Title,{children:`Hello there`}),v(V.Description,{muted:!1,className:`text-neutral-content/80`,children:`Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi.`}),_(V.Actions,{align:`center`,stackOnMobile:!0,children:[v(y,{color:`primary`,children:`Get Started`}),v(y,{type:`outlined`,children:`Read story`})]})]})})]}),code:`<Hero backgroundImage={'${U}'} size={'lg'} className={'rounded-box'}>
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
</Hero>`});e(()=>u(t,o,ce))});let le=a(`rue:component:anchor`);n(o,le),m(()=>{let t=f(C,{title:`Hero with automatic overlay`,tab:E,preview:()=>v(V,{as:`section`,backgroundImage:U,size:`xl`,overlay:{tone:`base-content`,opacity:`medium`,blur:!0,className:`rounded-[2rem]`},className:`overflow-hidden rounded-[2rem]`,children:_(V.Content,{layout:`split`,align:`center`,gap:`xl`,className:`px-6 py-12 text-neutral-content lg:px-16`,children:[_(`div`,{className:`space-y-5`,children:[v(`span`,{className:`badge badge-soft badge-primary`,children:`Auto Overlay`}),v(V.Title,{children:`把背景图和可读性补丁一起交给 Hero 处理。`}),v(V.Description,{muted:!1,className:`text-neutral-content/80`,children:`当页面只是想快速搭一个带图主视觉区时，直接传 backgroundImage 和 overlay 就够了，不用再手写遮罩层节点。`})]}),v(`div`,{className:`w-full max-w-xs rounded-[1.5rem] border border-white/15 bg-black/30 p-5 backdrop-blur-sm`,children:_(V.Actions,{direction:`column`,align:`start`,children:[v(y,{color:`primary`,block:!0,children:`Start from template`}),v(y,{type:`outlined`,block:!0,children:`Read migration guide`})]})})]})}),code:`<Hero
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
</Hero>`});e(()=>u(t,o,le))});let ue=a(`rue:component:anchor`);n(o,ue),m(()=>{let t=f(C,{title:`Surface and size presets`,tab:D,preview:()=>_(`div`,{className:`grid gap-4 xl:grid-cols-3`,children:[v(V,{tone:`base-200`,size:`sm`,className:`rounded-box`,children:v(V.Content,{className:`px-4 py-6`,children:_(`div`,{className:`space-y-3`,children:[v(`span`,{className:`badge badge-soft`,children:`base-200 / sm`}),v(V.Title,{size:`sm`,children:`Compact spotlight`}),v(V.Description,{size:`sm`,children:`适合列表页里的次级引导块。`})]})})}),v(V,{tone:`primary`,size:`md`,className:`rounded-box`,children:v(V.Content,{className:`px-4 py-6`,children:_(`div`,{className:`space-y-3`,children:[v(`span`,{className:`badge badge-soft badge-neutral`,children:`primary / md`}),v(V.Title,{size:`sm`,children:`Campaign push`}),v(V.Description,{size:`sm`,muted:!1,children:`颜色与前景色一起切换，页面里不用再单独补文字颜色。`})]})})}),v(V,{tone:`neutral`,size:`lg`,className:`rounded-box`,children:v(V.Content,{className:`px-4 py-6`,children:_(`div`,{className:`space-y-3`,children:[v(`span`,{className:`badge badge-outline badge-primary`,children:`neutral / lg`}),v(V.Title,{size:`sm`,children:`Full campaign frame`}),v(V.Description,{size:`sm`,muted:!1,children:`更高的尺寸适合首页首屏或专题页入口。`})]})})})]}),code:`<div className={'grid gap-4 xl:grid-cols-3'}>
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
</div>`});e(()=>u(t,o,ue))});let K=l(`div`,o);n(o,K),i(K,`not-prose my-12 space-y-8`);let q=l(`section`,K);n(K,q),i(q,`space-y-2`);let J=l(`h2`,q);n(q,J),i(J,`text-2xl font-semibold`),n(J,d(`API`));let Y=l(`p`,q);n(q,Y),i(Y,`text-sm opacity-70`),n(Y,d(`推荐把外层背景和高度交给 Hero Root，把布局交给 Hero.Content，把标题、描述和 CTA 交给语义子组件。这样页面里仍然可以用 className 微调，但不会反复重写同一套结构。`));let X=l(`section`,K);n(K,X),i(X,`space-y-3`);let Z=l(`h3`,X);n(X,Z),i(Z,`text-xl font-semibold`),n(Z,d(`Hero`));let de=a(`rue:component:anchor`);n(X,de),m(()=>{let t=f(W,{rows:te});e(()=>u(t,X,de))});let Q=l(`section`,K);n(K,Q),i(Q,`space-y-3`);let fe=l(`h3`,Q);n(Q,fe),i(fe,`text-xl font-semibold`),n(fe,d(`Hero.Content`));let pe=a(`rue:component:anchor`);n(Q,pe),m(()=>{let t=f(W,{rows:ne});e(()=>u(t,Q,pe))});let $=l(`section`,K);n(K,$),i($,`space-y-3`);let me=l(`h3`,$);n($,me),i(me,`text-xl font-semibold`),n(me,d(`Hero parts`));let he=a(`rue:component:anchor`);return n($,he),m(()=>{let t=f(W,{rows:re});e(()=>u(t,$,he))}),t})}),o,h),o})};export{G as default};