import{Cn as e,Ct as t,Lt as n,Tt as r,dt as i,ft as a,mt as o,pn as s,pt as c,st as l,tn as u,vn as d}from"./context-8lXZvIn-.js";import{l as f,o as p,t as m}from"./vapor-runtime-ygJWVcNn.js";import{a as h,n as g}from"./vapor-helpers-vapor-CMwHgsXf.js";import{n as _,t as v}from"./src-CCTNpCXV.js";import{t as y}from"./button-CvwbmGA0.js";import{t as b}from"./fieldset-CDa7yrbI.js";import{t as x}from"./input-X8WmXKJB.js";import{r as S}from"./SidebarPlaygroundDesign-BbUFY3mM.js";import{t as C}from"./PreviewBlock-ARp---67.js";var w={"base-100":`bg-base-100 text-base-content`,"base-200":`bg-base-200 text-base-content`,"base-300":`bg-base-300 text-base-content`,neutral:`bg-neutral text-neutral-content`,primary:`bg-primary text-primary-content`,secondary:`bg-secondary text-secondary-content`,accent:`bg-accent text-accent-content`,info:`bg-info text-info-content`,success:`bg-success text-success-content`,warning:`bg-warning text-warning-content`,error:`bg-error text-error-content`},T={sm:`min-h-80`,md:`min-h-96`,lg:`min-h-[30rem]`,xl:`min-h-[36rem]`,screen:`min-h-screen`},ee={center:`text-center`,split:`flex-col gap-10 lg:flex-row`,"split-reverse":`flex-col gap-10 lg:flex-row-reverse`},E={start:`items-start`,center:`items-center`,end:`items-end`},D={start:`text-left`,center:`text-center`,end:`text-right`},O={sm:`gap-4`,md:`gap-6`,lg:`gap-10`,xl:`gap-14`},k={"base-content":`bg-base-content`,neutral:`bg-neutral`,primary:`bg-primary`,secondary:`bg-secondary`,accent:`bg-accent`,info:`bg-info`,success:`bg-success`,warning:`bg-warning`,error:`bg-error`},A={sm:`text-3xl md:text-4xl`,md:`text-4xl md:text-5xl`,lg:`text-5xl md:text-6xl`,xl:`text-6xl md:text-7xl`},j={sm:`text-sm md:text-base`,md:`text-base md:text-lg`,lg:`text-lg md:text-xl`},M=(...e)=>e.filter(Boolean).join(` `),N=(e,t)=>{if(!(!e&&!t))return{...e,...t}},P=e=>{if(e)return e===!0?{}:e},F=e=>{if(e!=null){if(typeof e==`number`)return{opacity:e};switch(e){case`soft`:return{opacity:.25};case`strong`:return{opacity:.7};default:return{opacity:.45}}}},I=({backgroundImage:e,backgroundPosition:t,backgroundSize:n,backgroundRepeat:r})=>{if(e)return{backgroundImage:`url(${e})`,backgroundPosition:t??`center`,backgroundSize:n??`cover`,backgroundRepeat:r??`no-repeat`}},L=(e,t,n)=>{if(e){if(n)switch(e){case`center`:return`items-center sm:justify-center`;case`end`:return`items-end sm:justify-end`;default:return`items-start sm:justify-start`}if(t===`column`)switch(e){case`center`:return`items-center`;case`end`:return`items-end`;default:return`items-start`}switch(e){case`center`:return`justify-center`;case`end`:return`justify-end`;default:return`justify-start`}}},R=t=>{let{__rue_rest_omit_0:r,__rue_rest_omit_1:s,__rue_rest_omit_2:c,__rue_rest_omit_3:g,__rue_rest_omit_4:_,__rue_rest_omit_5:v,__rue_rest_omit_6:y,__rue_rest_omit_7:b,__rue_rest_omit_8:x,__rue_rest_omit_9:S,__rue_rest_omit_10:C,__rue_rest_omit_11:ee,rest:E,Component:D,backgroundStyle:O,overlayProps:k}=h(`useSetup:0:0`,()=>e(()=>{let{as:e,className:r,children:i,style:a,tone:o,size:s,fullHeight:c,backgroundImage:l,backgroundPosition:u,backgroundSize:d,backgroundRepeat:f,overlay:p,...m}=t;return{__rue_rest_omit_0:e,__rue_rest_omit_1:r,__rue_rest_omit_2:i,__rue_rest_omit_3:a,__rue_rest_omit_4:o,__rue_rest_omit_5:s,__rue_rest_omit_6:c,__rue_rest_omit_7:l,__rue_rest_omit_8:u,__rue_rest_omit_9:d,__rue_rest_omit_10:f,__rue_rest_omit_11:p,rest:m,Component:t.as===void 0?`div`:t.as,backgroundStyle:h(`computed:1:0`,()=>n(()=>I({backgroundImage:t.backgroundImage,backgroundPosition:t.backgroundPosition,backgroundSize:t.backgroundSize,backgroundRepeat:t.backgroundRepeat}))),overlayProps:h(`computed:1:1`,()=>n(()=>P(t.overlay)))}}));return f(e=>{let n=a(),r=i(`rue:component:anchor`);l(n,r);let s=f(()=>{let e=a(),n=i(`rue:slot:anchor`);l(e,n),u(()=>{let t=k.get()?f(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),u(()=>{let n=m(B,{...k.get()});d(()=>p(n,e,t))}),e}):``;d(()=>p(t,e,n))}),l(e,o(` `));let r=i(`rue:children:anchor`);return l(e,r),u(()=>{let n=t.children;d(()=>p(n,e,r))}),e});return u(()=>{let e=m(D,{...E,style:N(t.style,O.get()),className:M(`hero`,(t.tone===void 0?`default`:t.tone)==="default"?void 0:w[t.tone===void 0?`default`:t.tone],t.fullHeight?T.screen:t.size?T[t.size]:void 0,t.className),children:s});d(()=>p(e,n,r))}),n})},z=t=>{let{__rue_rest_omit_0:n,__rue_rest_omit_1:r,__rue_rest_omit_2:o,__rue_rest_omit_3:s,__rue_rest_omit_4:c,__rue_rest_omit_5:g,__rue_rest_omit_6:_,rest:v,Component:y}=h(`useSetup:0:0:dup1`,()=>e(()=>{let{as:e,className:n,children:r,layout:i,align:a,textAlign:o,gap:s,...c}=t;return{__rue_rest_omit_0:e,__rue_rest_omit_1:n,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,__rue_rest_omit_6:s,rest:c,Component:t.as===void 0?`div`:t.as}}));return f(e=>{let n=a(),r=i(`rue:component:anchor`);return l(n,r),u(()=>{let e=m(y,{...v,className:M(`hero-content`,(t.layout===void 0?`inherit`:t.layout)===`inherit`?void 0:ee[t.layout===void 0?`inherit`:t.layout],t.align?E[t.align]:void 0,t.textAlign?D[t.textAlign]:void 0,t.gap?O[t.gap]:void 0,t.className),children:t.children});d(()=>p(e,n,r))}),n})},B=t=>{let{__rue_rest_omit_0:n,__rue_rest_omit_1:r,__rue_rest_omit_2:o,__rue_rest_omit_3:s,__rue_rest_omit_4:c,__rue_rest_omit_5:g,__rue_rest_omit_6:_,rest:v,Component:y}=h(`useSetup:0:0:dup2`,()=>e(()=>{let{as:e,className:n,children:r,tone:i,opacity:a,blur:o,style:s,...c}=t;return{__rue_rest_omit_0:e,__rue_rest_omit_1:n,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,__rue_rest_omit_6:s,rest:c,Component:t.as===void 0?`div`:t.as}}));return f(e=>{let n=a(),r=i(`rue:component:anchor`);return l(n,r),u(()=>{let e=m(y,{...v,style:N(t.style,F(t.opacity)),className:M(`hero-overlay`,(t.tone===void 0?`default`:t.tone)==="default"?void 0:k[t.tone===void 0?`default`:t.tone],t.blur?`backdrop-blur-sm`:void 0,t.className),children:t.children});d(()=>p(e,n,r))}),n})},V=Object.assign(R,{Content:z,Overlay:B,Title:t=>{let{__rue_rest_omit_0:n,__rue_rest_omit_1:r,__rue_rest_omit_2:o,__rue_rest_omit_3:s,__rue_rest_omit_4:c,rest:g,Component:_}=h(`useSetup:0:0:dup3`,()=>e(()=>{let{as:e,className:n,children:r,size:i,balanced:a,...o}=t;return{__rue_rest_omit_0:e,__rue_rest_omit_1:n,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,rest:o,Component:t.as===void 0?`h1`:t.as}}));return f(e=>{let n=a(),r=i(`rue:component:anchor`);return l(n,r),u(()=>{let e=m(_,{...g,className:M(`font-bold tracking-tight`,A[t.size===void 0?`lg`:t.size],t.balanced===void 0||t.balanced?`text-balance`:void 0,t.className),children:t.children});d(()=>p(e,n,r))}),n})},Description:t=>{let{__rue_rest_omit_0:n,__rue_rest_omit_1:r,__rue_rest_omit_2:o,__rue_rest_omit_3:s,__rue_rest_omit_4:c,rest:g,Component:_}=h(`useSetup:0:0:dup4`,()=>e(()=>{let{as:e,className:n,children:r,size:i,muted:a,...o}=t;return{__rue_rest_omit_0:e,__rue_rest_omit_1:n,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,rest:o,Component:t.as===void 0?`p`:t.as}}));return f(e=>{let n=a(),r=i(`rue:component:anchor`);return l(n,r),u(()=>{let e=m(_,{...g,className:M(`max-w-2xl leading-relaxed`,j[t.size===void 0?`md`:t.size],t.muted===void 0||t.muted?`opacity-80`:void 0,t.className),children:t.children});d(()=>p(e,n,r))}),n})},Actions:t=>{let{__rue_rest_omit_0:n,__rue_rest_omit_1:r,__rue_rest_omit_2:o,__rue_rest_omit_3:s,__rue_rest_omit_4:c,__rue_rest_omit_5:g,rest:_,Component:v}=h(`useSetup:0:0:dup5`,()=>e(()=>{let{as:e,className:n,children:r,align:i,direction:a,stackOnMobile:o,...s}=t;return{__rue_rest_omit_0:e,__rue_rest_omit_1:n,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,rest:s,Component:t.as===void 0?`div`:t.as}}));return f(e=>{let n=a(),r=i(`rue:component:anchor`);return l(n,r),u(()=>{let e=m(v,{..._,className:M(`flex gap-3`,t.stackOnMobile!==void 0&&t.stackOnMobile?`flex-col sm:flex-row sm:flex-wrap`:(t.direction===void 0?`row`:t.direction)===`column`?`flex-col`:`flex-row flex-wrap`,L(t.align,t.direction===void 0?`row`:t.direction,t.stackOnMobile!==void 0&&t.stackOnMobile),t.className),children:t.children});d(()=>p(e,n,r))}),n})}}),H=`https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp`,U=`https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp`,W=e=>f(n=>{let s=c(`div`,n);r(s,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=c(`table`,s);l(s,m),r(m,`table table-zebra`);let h=c(`thead`,m);l(m,h);let _=c(`tr`,h);l(h,_);let v=c(`th`,_);l(_,v),l(v,o(`属性`));let y=c(`th`,_);l(_,y),l(y,o(`说明`));let b=c(`th`,_);l(_,b),l(b,o(`类型`));let x=c(`th`,_);l(_,x),l(x,o(`默认值`));let S=c(`tbody`,m);l(m,S);let C=i(`rue:list:start`),w=i(`rue:list:end`);l(S,C),l(S,w);let T=new Map;return u(()=>{T=g({items:e.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,n,r,o,s)=>{p(f(()=>{let n=a(),r=c(`tr`,n);l(n,r),u(()=>{t(r,`key`,String(e.prop))});let o=c(`td`,r);l(r,o);let s=c(`code`,o);l(o,s);let f=i(`rue:slot:anchor`);l(s,f),u(()=>{let t=e.prop;d(()=>p(t,s,f))});let m=c(`td`,r);l(r,m);let h=i(`rue:slot:anchor`);l(m,h),u(()=>{let t=e.description;d(()=>p(t,m,h))});let g=c(`td`,r);l(r,g);let _=c(`code`,g);l(g,_);let v=i(`rue:slot:anchor`);l(_,v),u(()=>{let t=e.type;d(()=>p(t,_,v))});let y=c(`td`,r);l(r,y);let b=c(`code`,y);l(y,b);let x=i(`rue:slot:anchor`);return l(b,x),u(()=>{let t=e.defaultValue;d(()=>p(t,b,x))}),n}),n,r)}})}),s}),te=[{prop:`as`,description:`指定 Hero 根节点标签`,type:`string`,defaultValue:`div`},{prop:`backgroundImage`,description:`直接设置背景图 URL，组件会自动写入内联背景样式`,type:`string`,defaultValue:`-`},{prop:`backgroundPosition`,description:`背景图定位`,type:`string`,defaultValue:`center`},{prop:`backgroundRepeat`,description:`背景图重复方式`,type:`string`,defaultValue:`no-repeat`},{prop:`backgroundSize`,description:`背景图尺寸`,type:`string`,defaultValue:`cover`},{prop:`fullHeight`,description:`直接切换到全屏高度，等价于 screen 尺寸`,type:`boolean`,defaultValue:`false`},{prop:`overlay`,description:`开启自动遮罩，也支持直接传入 Hero.Overlay 同构配置对象`,type:`boolean | HeroOverlayProps`,defaultValue:`false`},{prop:`size`,description:`Hero 区块高度预设`,type:`sm | md | lg | xl | screen`,defaultValue:`-`},{prop:`tone`,description:`Root 背景与前景色语义层`,type:`default | base-100 | base-200 | base-300 | neutral | primary | secondary | accent | info | success | warning | error`,defaultValue:`default`}],ne=[{prop:`Hero.Content.align`,description:`控制内容区交叉轴对齐`,type:`start | center | end`,defaultValue:`-`},{prop:`Hero.Content.as`,description:`指定内容区标签`,type:`string`,defaultValue:`div`},{prop:`Hero.Content.gap`,description:`内容区间距预设，适合覆盖 split 默认间距`,type:`sm | md | lg | xl`,defaultValue:`-`},{prop:`Hero.Content.layout`,description:`语义布局预设，覆盖居中、分栏与反向分栏`,type:`inherit | center | split | split-reverse`,defaultValue:`inherit`},{prop:`Hero.Content.textAlign`,description:`文字对齐方式`,type:`start | center | end`,defaultValue:`-`}],re=[{prop:`Hero.Overlay.blur`,description:`为遮罩添加轻量模糊，适合背景图场景`,type:`boolean`,defaultValue:`false`},{prop:`Hero.Overlay.opacity`,description:`遮罩透明度，支持 soft / medium / strong 或数字`,type:`soft | medium | strong | number`,defaultValue:`-`},{prop:`Hero.Overlay.tone`,description:`遮罩色调，可配合自动 overlay 一起用`,type:`default | base-content | neutral | primary | secondary | accent | info | success | warning | error`,defaultValue:`default`},{prop:`Hero.Title.balanced`,description:`标题默认启用 text-balance，减少过长标题断行问题`,type:`boolean`,defaultValue:`true`},{prop:`Hero.Title.size`,description:`标题字号预设`,type:`sm | md | lg | xl`,defaultValue:`lg`},{prop:`Hero.Description.muted`,description:`描述文本默认降低一点对比度`,type:`boolean`,defaultValue:`true`},{prop:`Hero.Description.size`,description:`描述字号预设`,type:`sm | md | lg`,defaultValue:`md`},{prop:`Hero.Actions.align`,description:`操作区对齐方式，会根据横排或竖排自动切换到 justify / items`,type:`start | center | end`,defaultValue:`-`},{prop:`Hero.Actions.direction`,description:`操作区排列方向`,type:`row | column`,defaultValue:`row`},{prop:`Hero.Actions.stackOnMobile`,description:`移动端堆叠、桌面端横排，适合 CTA 组合`,type:`boolean`,defaultValue:`false`}],G=()=>{let{tabSemantic:t,tabCentered:n,tabFigure:g,tabReverse:w,tabForm:T,tabOverlay:ee,tabOverlayAuto:E,tabPresets:D}=h(`useSetup:0:0`,()=>e(()=>({tabSemantic:h(`ref:1:0`,()=>s(`preview`)),tabCentered:h(`ref:1:1`,()=>s(`preview`)),tabFigure:h(`ref:1:2`,()=>s(`preview`)),tabReverse:h(`ref:1:3`,()=>s(`preview`)),tabForm:h(`ref:1:4`,()=>s(`preview`)),tabOverlay:h(`ref:1:5`,()=>s(`preview`)),tabOverlayAuto:h(`ref:1:6`,()=>s(`preview`)),tabPresets:h(`ref:1:7`,()=>s(`preview`))})));return f(e=>{let s=a(),h=i(`rue:component:anchor`);return l(s,h),p(m(S,{children:f(()=>{let e=a(),s=c(`div`,e);l(e,s),r(s,`max-w-none prose prose-sm md:prose-base`);let f=c(`h1`,s);l(s,f),l(f,o(`Hero 主视觉区`));let h=c(`p`,s);l(s,h),r(h,`mt-3 mb-3 text-sm`),l(h,o(`Hero 现在不只是一个样式壳。Root 负责背景、尺寸和遮罩，Content 负责布局，Title / Description / Actions 负责最常见的文案骨架，剩下的局部视觉继续交给 className 微调。`));let S=c(`p`,s);l(s,S),r(S,`mt-0 mb-4 text-sm`),l(S,o(`没有可以直接对照的同名标准组件，所以组件重点覆盖组合能力和语义 API 上：使用 Rue 自己的视觉语言，但把高频搭建动作从页面里收回到组件里。`));let O=c(`div`,s);l(s,O),r(O,`not-prose mt-6 grid gap-4 lg:grid-cols-3`);let k=c(`div`,O);l(O,k),r(k,`rounded-[1.5rem] border border-base-300 bg-base-100 p-5 shadow-sm`);let A=c(`div`,k);l(k,A),r(A,`text-xs uppercase tracking-[0.28em] opacity-60`),l(A,o(`Root`));let j=c(`div`,k);l(k,j),r(j,`mt-3 text-lg font-semibold`),l(j,o(`Background, size, overlay`));let M=c(`p`,k);l(k,M),r(M,`mt-2 text-sm opacity-70`),l(M,o(`用 tone、size、backgroundImage、overlay 先把 Hero 的外层骨架搭起来。`));let N=c(`div`,O);l(O,N),r(N,`rounded-[1.5rem] border border-base-300 bg-base-100 p-5 shadow-sm`);let P=c(`div`,N);l(N,P),r(P,`text-xs uppercase tracking-[0.28em] opacity-60`),l(P,o(`Content`));let F=c(`div`,N);l(N,F),r(F,`mt-3 text-lg font-semibold`),l(F,o(`Split, reverse, center`));let I=c(`p`,N);l(N,I),r(I,`mt-2 text-sm opacity-70`),l(I,o(`用 Hero.Content.layout 切换常见主视觉布局，再按需叠加 align、textAlign 和 gap。`));let L=c(`div`,O);l(O,L),r(L,`rounded-[1.5rem] border border-base-300 bg-base-100 p-5 shadow-sm`);let R=c(`div`,L);l(L,R),r(R,`text-xs uppercase tracking-[0.28em] opacity-60`),l(R,o(`Parts`));let z=c(`div`,L);l(L,z),r(z,`mt-3 text-lg font-semibold`),l(z,o(`Readable copy blocks`));let B=c(`p`,L);l(L,B),r(B,`mt-2 text-sm opacity-70`),l(B,o(`标题、描述和操作区都给了语义化入口，页面里的重复样式可以明显减少。`));let G=i(`rue:component:anchor`);l(s,G),u(()=>{let e=m(C,{title:`Semantic starter`,tab:t,preview:()=>v(V,{tone:`base-100`,size:`xl`,className:`overflow-hidden rounded-[2rem] border border-base-300 bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10`,children:_(V.Content,{layout:`split`,align:`center`,gap:`xl`,className:`px-6 py-10 lg:px-16`,children:[_(`div`,{className:`space-y-5`,children:[v(`span`,{className:`badge badge-outline badge-primary`,children:`Rue Design Hero`}),v(V.Title,{children:`Ship landing sections without rebuilding layout scaffolding.`}),v(V.Description,{children:`Hero 现在把 surface、height、background image、overlay 和 action 布局都提升成了语义 API。页面可以更聚焦在内容，而不是重复拼装容器类名。`}),_(V.Actions,{stackOnMobile:!0,children:[v(y,{color:`primary`,children:`Get Started`}),v(y,{type:`outlined`,children:`Browse patterns`})]})]}),v(`div`,{className:`grid w-full max-w-md gap-4`,children:_(`div`,{className:`rounded-[1.5rem] border border-base-300 bg-base-100/90 p-5 shadow-xl`,children:[v(`p`,{className:`text-xs uppercase tracking-[0.3em] opacity-60`,children:`Composition`}),_(`div`,{className:`mt-4 space-y-3`,children:[_(`div`,{className:`rounded-2xl bg-base-200 p-4`,children:[v(`div`,{className:`text-sm font-semibold`,children:`Root handles surface`}),v(`p`,{className:`mt-1 text-sm opacity-70`,children:`tone、size、backgroundImage、overlay 负责外层骨架。`})]}),_(`div`,{className:`rounded-2xl bg-base-200 p-4`,children:[v(`div`,{className:`text-sm font-semibold`,children:`Content handles layout`}),v(`p`,{className:`mt-1 text-sm opacity-70`,children:`layout、align、textAlign、gap 负责组织主视觉内容。`})]})]})]})})]})}),code:`<Hero
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
</Hero>`});d(()=>p(e,s,G))});let ie=i(`rue:component:anchor`);l(s,ie),u(()=>{let e=m(C,{title:`Centered hero`,tab:n,preview:()=>v(V,{tone:`base-200`,size:`lg`,className:`rounded-box`,children:v(V.Content,{layout:`center`,textAlign:`center`,gap:`md`,className:`px-6 py-10`,children:_(`div`,{className:`max-w-md space-y-4`,children:[v(V.Title,{children:`Hello there`}),v(V.Description,{children:`Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.`}),_(V.Actions,{align:`center`,stackOnMobile:!0,children:[v(y,{color:`primary`,children:`Get Started`}),v(y,{type:`outlined`,children:`View Docs`})]})]})})}),code:`<Hero tone={'base-200'} size={'lg'} className={'rounded-box'}>
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
</Hero>`});d(()=>p(e,s,ie))});let ae=i(`rue:component:anchor`);l(s,ae),u(()=>{let e=m(C,{title:`Hero with figure`,tab:g,preview:()=>v(V,{tone:`base-200`,size:`lg`,className:`rounded-box`,children:_(V.Content,{layout:`split`,align:`center`,className:`px-6 py-10`,children:[v(`img`,{src:H,className:`max-w-sm rounded-lg shadow-2xl`,alt:`Hero figure`}),_(`div`,{children:[v(V.Title,{children:`Box Office News!`}),v(V.Description,{children:`Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi.`}),_(V.Actions,{className:`mt-6`,children:[v(y,{color:`primary`,children:`Get Started`}),v(y,{type:`text`,children:`View details`})]})]})]})}),code:`<Hero tone={'base-200'} size={'lg'} className={'rounded-box'}>
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
</Hero>`});d(()=>p(e,s,ae))});let oe=i(`rue:component:anchor`);l(s,oe),u(()=>{let e=m(C,{title:`Hero with figure but reverse order`,tab:w,preview:()=>v(V,{tone:`base-100`,size:`lg`,className:`rounded-box border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-accent/10`,children:_(V.Content,{layout:`split-reverse`,align:`center`,className:`px-6 py-10`,children:[v(`img`,{src:H,className:`max-w-sm rounded-lg shadow-2xl`,alt:`Hero reverse figure`}),_(`div`,{children:[v(`span`,{className:`badge badge-soft badge-accent`,children:`Reverse layout`}),v(V.Title,{className:`mt-4`,children:`Box Office News!`}),v(V.Description,{children:`Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi.`}),_(V.Actions,{className:`mt-6`,children:[v(y,{color:`primary`,children:`Get Started`}),v(y,{type:`outlined`,children:`See release plan`})]})]})]})}),code:`<Hero
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
</Hero>`});d(()=>p(e,s,oe))});let se=i(`rue:component:anchor`);l(s,se),u(()=>{let e=m(C,{title:`Hero with form`,tab:T,preview:()=>v(V,{tone:`base-200`,size:`lg`,className:`rounded-box`,children:_(V.Content,{layout:`split-reverse`,align:`center`,className:`px-6 py-10`,children:[_(`div`,{className:`space-y-4 text-center lg:text-left`,children:[v(`span`,{className:`badge badge-outline`,children:`Members only`}),v(V.Title,{children:`Login now!`}),v(V.Description,{children:`Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi.`})]}),v(`div`,{className:`card w-full max-w-sm shrink-0 bg-base-100 shadow-2xl`,children:v(`div`,{className:`card-body`,children:_(b,{children:[v(b.Label,{children:`Email`}),v(x,{type:`email`,placeholder:`Email`}),v(b.Label,{children:`Password`}),v(x,{type:`password`,placeholder:`Password`}),v(`div`,{children:v(`a`,{className:`link link-hover`,children:`Forgot password?`})}),v(y,{color:`neutral`,className:`mt-4`,children:`Login`})]})})})]})}),code:`<Hero tone={'base-200'} size={'lg'} className={'rounded-box'}>
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
</Hero>`});d(()=>p(e,s,se))});let ce=i(`rue:component:anchor`);l(s,ce),u(()=>{let e=m(C,{title:`Hero with overlay image`,tab:ee,preview:()=>_(V,{backgroundImage:U,size:`lg`,className:`rounded-box`,children:[v(V.Overlay,{opacity:`medium`,className:`rounded-box`}),v(V.Content,{layout:`center`,textAlign:`center`,className:`px-6 py-10 text-neutral-content`,children:_(`div`,{className:`max-w-md space-y-5`,children:[v(V.Title,{children:`Hello there`}),v(V.Description,{muted:!1,className:`text-neutral-content/80`,children:`Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi.`}),_(V.Actions,{align:`center`,stackOnMobile:!0,children:[v(y,{color:`primary`,children:`Get Started`}),v(y,{type:`outlined`,children:`Read story`})]})]})})]}),code:`<Hero backgroundImage={'${U}'} size={'lg'} className={'rounded-box'}>
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
</Hero>`});d(()=>p(e,s,ce))});let le=i(`rue:component:anchor`);l(s,le),u(()=>{let e=m(C,{title:`Hero with automatic overlay`,tab:E,preview:()=>v(V,{as:`section`,backgroundImage:U,size:`xl`,overlay:{tone:`base-content`,opacity:`medium`,blur:!0,className:`rounded-[2rem]`},className:`overflow-hidden rounded-[2rem]`,children:_(V.Content,{layout:`split`,align:`center`,gap:`xl`,className:`px-6 py-12 text-neutral-content lg:px-16`,children:[_(`div`,{className:`space-y-5`,children:[v(`span`,{className:`badge badge-soft badge-primary`,children:`Auto Overlay`}),v(V.Title,{children:`把背景图和可读性补丁一起交给 Hero 处理。`}),v(V.Description,{muted:!1,className:`text-neutral-content/80`,children:`当页面只是想快速搭一个带图主视觉区时，直接传 backgroundImage 和 overlay 就够了，不用再手写遮罩层节点。`})]}),v(`div`,{className:`w-full max-w-xs rounded-[1.5rem] border border-white/15 bg-black/30 p-5 backdrop-blur-sm`,children:_(V.Actions,{direction:`column`,align:`start`,children:[v(y,{color:`primary`,block:!0,children:`Start from template`}),v(y,{type:`outlined`,block:!0,children:`Read migration guide`})]})})]})}),code:`<Hero
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
</Hero>`});d(()=>p(e,s,le))});let ue=i(`rue:component:anchor`);l(s,ue),u(()=>{let e=m(C,{title:`Surface and size presets`,tab:D,preview:()=>_(`div`,{className:`grid gap-4 xl:grid-cols-3`,children:[v(V,{tone:`base-200`,size:`sm`,className:`rounded-box`,children:v(V.Content,{className:`px-4 py-6`,children:_(`div`,{className:`space-y-3`,children:[v(`span`,{className:`badge badge-soft`,children:`base-200 / sm`}),v(V.Title,{size:`sm`,children:`Compact spotlight`}),v(V.Description,{size:`sm`,children:`适合列表页里的次级引导块。`})]})})}),v(V,{tone:`primary`,size:`md`,className:`rounded-box`,children:v(V.Content,{className:`px-4 py-6`,children:_(`div`,{className:`space-y-3`,children:[v(`span`,{className:`badge badge-soft badge-neutral`,children:`primary / md`}),v(V.Title,{size:`sm`,children:`Campaign push`}),v(V.Description,{size:`sm`,muted:!1,children:`颜色与前景色一起切换，页面里不用再单独补文字颜色。`})]})})}),v(V,{tone:`neutral`,size:`lg`,className:`rounded-box`,children:v(V.Content,{className:`px-4 py-6`,children:_(`div`,{className:`space-y-3`,children:[v(`span`,{className:`badge badge-outline badge-primary`,children:`neutral / lg`}),v(V.Title,{size:`sm`,children:`Full campaign frame`}),v(V.Description,{size:`sm`,muted:!1,children:`更高的尺寸适合首页首屏或专题页入口。`})]})})})]}),code:`<div className={'grid gap-4 xl:grid-cols-3'}>
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
</div>`});d(()=>p(e,s,ue))});let K=c(`div`,s);l(s,K),r(K,`not-prose my-12 space-y-8`);let q=c(`section`,K);l(K,q),r(q,`space-y-2`);let J=c(`h2`,q);l(q,J),r(J,`text-2xl font-semibold`),l(J,o(`API`));let Y=c(`p`,q);l(q,Y),r(Y,`text-sm opacity-70`),l(Y,o(`推荐把外层背景和高度交给 Hero Root，把布局交给 Hero.Content，把标题、描述和 CTA 交给语义子组件。这样页面里仍然可以用 className 微调，但不会反复重写同一套结构。`));let X=c(`section`,K);l(K,X),r(X,`space-y-3`);let Z=c(`h3`,X);l(X,Z),r(Z,`text-xl font-semibold`),l(Z,o(`Hero`));let de=i(`rue:component:anchor`);l(X,de),u(()=>{let e=m(W,{rows:te});d(()=>p(e,X,de))});let Q=c(`section`,K);l(K,Q),r(Q,`space-y-3`);let fe=c(`h3`,Q);l(Q,fe),r(fe,`text-xl font-semibold`),l(fe,o(`Hero.Content`));let pe=i(`rue:component:anchor`);l(Q,pe),u(()=>{let e=m(W,{rows:ne});d(()=>p(e,Q,pe))});let $=c(`section`,K);l(K,$),r($,`space-y-3`);let me=c(`h3`,$);l($,me),r(me,`text-xl font-semibold`),l(me,o(`Hero parts`));let he=i(`rue:component:anchor`);return l($,he),u(()=>{let e=m(W,{rows:re});d(()=>p(e,$,he))}),e})}),s,h),s})};export{G as default};