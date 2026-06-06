import{$ as e,Kt as t,Lt as n,Q as r,Vt as i,Y as a,Yt as o,Z as s,ct as c,et as l,l as u,ot as d,s as f,t as p}from"./vapor-runtime-DHPuOjqh.js";import{a as m,n as h}from"./vapor-helpers-vapor-CJFAWine.js";import{a as g,i as _}from"./persistentSidebarPlayground-C_0jw6dq.js";import{t as v}from"./button-Cy4xZBmC.js";import{t as y}from"./fieldset-DsJGh0Xa.js";import{t as b}from"./input-DnJRs2ot.js";import{n as x}from"./SidebarPlaygroundDesign-DMSFSCs3.js";import{t as S}from"./PreviewBlock-BYaG1RFO.js";var C={"base-100":`bg-base-100 text-base-content`,"base-200":`bg-base-200 text-base-content`,"base-300":`bg-base-300 text-base-content`,neutral:`bg-neutral text-neutral-content`,primary:`bg-primary text-primary-content`,secondary:`bg-secondary text-secondary-content`,accent:`bg-accent text-accent-content`,info:`bg-info text-info-content`,success:`bg-success text-success-content`,warning:`bg-warning text-warning-content`,error:`bg-error text-error-content`},w={sm:`min-h-80`,md:`min-h-96`,lg:`min-h-[30rem]`,xl:`min-h-[36rem]`,screen:`min-h-screen`},T={center:`text-center`,split:`flex-col gap-10 lg:flex-row`,"split-reverse":`flex-col gap-10 lg:flex-row-reverse`},ee={start:`items-start`,center:`items-center`,end:`items-end`},te={start:`text-left`,center:`text-center`,end:`text-right`},E={sm:`gap-4`,md:`gap-6`,lg:`gap-10`,xl:`gap-14`},D={"base-content":`bg-base-content`,neutral:`bg-neutral`,primary:`bg-primary`,secondary:`bg-secondary`,accent:`bg-accent`,info:`bg-info`,success:`bg-success`,warning:`bg-warning`,error:`bg-error`},O={sm:`text-3xl md:text-4xl`,md:`text-4xl md:text-5xl`,lg:`text-5xl md:text-6xl`,xl:`text-6xl md:text-7xl`},k={sm:`text-sm md:text-base`,md:`text-base md:text-lg`,lg:`text-lg md:text-xl`},A=(...e)=>e.filter(Boolean).join(` `),j=(e,t)=>{if(!(!e&&!t))return{...e,...t}},M=e=>{if(e)return e===!0?{}:e},N=e=>{if(e!=null){if(typeof e==`number`)return{opacity:e};switch(e){case`soft`:return{opacity:.25};case`strong`:return{opacity:.7};default:return{opacity:.45}}}},P=({backgroundImage:e,backgroundPosition:t,backgroundSize:n,backgroundRepeat:r})=>{if(e)return{backgroundImage:`url(${e})`,backgroundPosition:t??`center`,backgroundSize:n??`cover`,backgroundRepeat:r??`no-repeat`}},F=(e,t,n)=>{if(e){if(n)switch(e){case`center`:return`items-center sm:justify-center`;case`end`:return`items-end sm:justify-end`;default:return`items-start sm:justify-start`}if(t===`column`)switch(e){case`center`:return`items-center`;case`end`:return`items-end`;default:return`items-start`}switch(e){case`center`:return`justify-center`;case`end`:return`justify-end`;default:return`justify-start`}}},I=({as:e=`div`,className:t,children:n,style:r,tone:i=`default`,size:a,fullHeight:o,backgroundImage:s,backgroundPosition:c,backgroundSize:l,backgroundRepeat:u,overlay:d,...f})=>{let p=e,m=P({backgroundImage:s,backgroundPosition:c,backgroundSize:l,backgroundRepeat:u}),h=M(d);return g(p,{...f,style:j(r,m),className:A(`hero`,i===`default`?void 0:C[i],o?w.screen:a?w[a]:void 0,t),children:[h?_(R,{...h}):null,n]})},L=({as:e=`div`,className:t,children:n,layout:r=`inherit`,align:i,textAlign:a,gap:o,...s})=>_(e,{...s,className:A(`hero-content`,r===`inherit`?void 0:T[r],i?ee[i]:void 0,a?te[a]:void 0,o?E[o]:void 0,t),children:n}),R=({as:e=`div`,className:t,children:n,tone:r=`default`,opacity:i,blur:a,style:o,...s})=>_(e,{...s,style:j(o,N(i)),className:A(`hero-overlay`,r===`default`?void 0:D[r],a?`backdrop-blur-sm`:void 0,t),children:n}),z=Object.assign(I,{Content:L,Overlay:R,Title:({as:e=`h1`,className:t,children:n,size:r=`lg`,balanced:i=!0,...a})=>_(e,{...a,className:A(`font-bold tracking-tight`,O[r],i?`text-balance`:void 0,t),children:n}),Description:({as:e=`p`,className:t,children:n,size:r=`md`,muted:i=!0,...a})=>_(e,{...a,className:A(`max-w-2xl leading-relaxed`,k[r],i?`opacity-80`:void 0,t),children:n}),Actions:({as:e=`div`,className:t,children:n,align:r,direction:i=`row`,stackOnMobile:a=!1,...o})=>_(e,{...o,className:A(`flex gap-3`,a?`flex-col sm:flex-row sm:flex-wrap`:i===`column`?`flex-col`:`flex-row flex-wrap`,F(r,i,a),t),children:n})}),B=`https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp`,V=`https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp`,H=t=>u(n=>{let p=e(`div`,n);c(p,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=e(`table`,p);a(p,m),c(m,`table table-zebra`);let g=e(`thead`,m);a(m,g);let _=e(`tr`,g);a(g,_);let v=e(`th`,_);a(_,v),a(v,l(`属性`));let y=e(`th`,_);a(_,y),a(y,l(`说明`));let b=e(`th`,_);a(_,b),a(b,l(`类型`));let x=e(`th`,_);a(_,x),a(x,l(`默认值`));let S=e(`tbody`,m);a(m,S);let C=s(`rue:list:start`),w=s(`rue:list:end`);a(S,C),a(S,w);let T=new Map;return o(()=>{T=h({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,n,c,l,p)=>{f(u(()=>{let n=r(),c=e(`tr`,n);a(n,c),o(()=>{d(c,`key`,String(t.prop))});let l=e(`td`,c);a(c,l);let u=e(`code`,l);a(l,u);let p=s(`rue:slot:anchor`);a(u,p),o(()=>{let e=t.prop;i(()=>f(e,u,p))});let m=e(`td`,c);a(c,m);let h=s(`rue:slot:anchor`);a(m,h),o(()=>{let e=t.description;i(()=>f(e,m,h))});let g=e(`td`,c);a(c,g);let _=e(`code`,g);a(g,_);let v=s(`rue:slot:anchor`);a(_,v),o(()=>{let e=t.type;i(()=>f(e,_,v))});let y=e(`td`,c);a(c,y);let b=e(`code`,y);a(y,b);let x=s(`rue:slot:anchor`);return a(b,x),o(()=>{let e=t.defaultValue;i(()=>f(e,b,x))}),n}),n,c)}})}),p}),ne=[{prop:`as`,description:`指定 Hero 根节点标签`,type:`string`,defaultValue:`div`},{prop:`backgroundImage`,description:`直接设置背景图 URL，组件会自动写入内联背景样式`,type:`string`,defaultValue:`-`},{prop:`backgroundPosition`,description:`背景图定位`,type:`string`,defaultValue:`center`},{prop:`backgroundRepeat`,description:`背景图重复方式`,type:`string`,defaultValue:`no-repeat`},{prop:`backgroundSize`,description:`背景图尺寸`,type:`string`,defaultValue:`cover`},{prop:`fullHeight`,description:`直接切换到全屏高度，等价于 screen 尺寸`,type:`boolean`,defaultValue:`false`},{prop:`overlay`,description:`开启自动遮罩，也支持直接传入 Hero.Overlay 同构配置对象`,type:`boolean | HeroOverlayProps`,defaultValue:`false`},{prop:`size`,description:`Hero 区块高度预设`,type:`sm | md | lg | xl | screen`,defaultValue:`-`},{prop:`tone`,description:`Root 背景与前景色语义层`,type:`default | base-100 | base-200 | base-300 | neutral | primary | secondary | accent | info | success | warning | error`,defaultValue:`default`}],re=[{prop:`Hero.Content.align`,description:`控制内容区交叉轴对齐`,type:`start | center | end`,defaultValue:`-`},{prop:`Hero.Content.as`,description:`指定内容区标签`,type:`string`,defaultValue:`div`},{prop:`Hero.Content.gap`,description:`内容区间距预设，适合覆盖 split 默认间距`,type:`sm | md | lg | xl`,defaultValue:`-`},{prop:`Hero.Content.layout`,description:`语义布局预设，覆盖居中、分栏与反向分栏`,type:`inherit | center | split | split-reverse`,defaultValue:`inherit`},{prop:`Hero.Content.textAlign`,description:`文字对齐方式`,type:`start | center | end`,defaultValue:`-`}],ie=[{prop:`Hero.Overlay.blur`,description:`为遮罩添加轻量模糊，适合背景图场景`,type:`boolean`,defaultValue:`false`},{prop:`Hero.Overlay.opacity`,description:`遮罩透明度，支持 soft / medium / strong 或数字`,type:`soft | medium | strong | number`,defaultValue:`-`},{prop:`Hero.Overlay.tone`,description:`遮罩色调，可配合自动 overlay 一起用`,type:`default | base-content | neutral | primary | secondary | accent | info | success | warning | error`,defaultValue:`default`},{prop:`Hero.Title.balanced`,description:`标题默认启用 text-balance，减少过长标题断行问题`,type:`boolean`,defaultValue:`true`},{prop:`Hero.Title.size`,description:`标题字号预设`,type:`sm | md | lg | xl`,defaultValue:`lg`},{prop:`Hero.Description.muted`,description:`描述文本默认降低一点对比度`,type:`boolean`,defaultValue:`true`},{prop:`Hero.Description.size`,description:`描述字号预设`,type:`sm | md | lg`,defaultValue:`md`},{prop:`Hero.Actions.align`,description:`操作区对齐方式，会根据横排或竖排自动切换到 justify / items`,type:`start | center | end`,defaultValue:`-`},{prop:`Hero.Actions.direction`,description:`操作区排列方向`,type:`row | column`,defaultValue:`row`},{prop:`Hero.Actions.stackOnMobile`,description:`移动端堆叠、桌面端横排，适合 CTA 组合`,type:`boolean`,defaultValue:`false`}],U=()=>{let{tabSemantic:d,tabCentered:h,tabFigure:C,tabReverse:w,tabForm:T,tabOverlay:ee,tabOverlayAuto:te,tabPresets:E}=m(`useSetup:0:0`,()=>t(()=>({tabSemantic:m(`ref:1:0`,()=>n(`preview`)),tabCentered:m(`ref:1:1`,()=>n(`preview`)),tabFigure:m(`ref:1:2`,()=>n(`preview`)),tabReverse:m(`ref:1:3`,()=>n(`preview`)),tabForm:m(`ref:1:4`,()=>n(`preview`)),tabOverlay:m(`ref:1:5`,()=>n(`preview`)),tabOverlayAuto:m(`ref:1:6`,()=>n(`preview`)),tabPresets:m(`ref:1:7`,()=>n(`preview`))})));return u(t=>{let n=r(),m=s(`rue:component:anchor`);return a(n,m),f(p(x,{children:u(()=>{let t=r(),n=e(`div`,t);a(t,n),c(n,`max-w-none prose prose-sm md:prose-base`);let u=e(`h1`,n);a(n,u),a(u,l(`Hero 主视觉区`));let m=e(`p`,n);a(n,m),c(m,`mt-3 mb-3 text-sm`),a(m,l(`Hero 现在不只是一个样式壳。Root 负责背景、尺寸和遮罩，Content 负责布局，Title / Description / Actions 负责最常见的文案骨架，剩下的局部视觉继续交给 className 微调。`));let x=e(`p`,n);a(n,x),c(x,`mt-0 mb-4 text-sm`),a(x,l(`没有可以直接对照的同名标准组件，所以这次的增强重点放在组合能力和语义 API 上：保留 Rue 自己的视觉语言，但把高频搭建动作从页面里收回到组件里。`));let D=e(`div`,n);a(n,D),c(D,`not-prose mt-6 grid gap-4 lg:grid-cols-3`);let O=e(`div`,D);a(D,O),c(O,`rounded-[1.5rem] border border-base-300 bg-base-100 p-5 shadow-sm`);let k=e(`div`,O);a(O,k),c(k,`text-xs uppercase tracking-[0.28em] opacity-60`),a(k,l(`Root`));let A=e(`div`,O);a(O,A),c(A,`mt-3 text-lg font-semibold`),a(A,l(`Background, size, overlay`));let j=e(`p`,O);a(O,j),c(j,`mt-2 text-sm opacity-70`),a(j,l(`用 tone、size、backgroundImage、overlay 先把 Hero 的外层骨架搭起来。`));let M=e(`div`,D);a(D,M),c(M,`rounded-[1.5rem] border border-base-300 bg-base-100 p-5 shadow-sm`);let N=e(`div`,M);a(M,N),c(N,`text-xs uppercase tracking-[0.28em] opacity-60`),a(N,l(`Content`));let P=e(`div`,M);a(M,P),c(P,`mt-3 text-lg font-semibold`),a(P,l(`Split, reverse, center`));let F=e(`p`,M);a(M,F),c(F,`mt-2 text-sm opacity-70`),a(F,l(`用 Hero.Content.layout 切换常见主视觉布局，再按需叠加 align、textAlign 和 gap。`));let I=e(`div`,D);a(D,I),c(I,`rounded-[1.5rem] border border-base-300 bg-base-100 p-5 shadow-sm`);let L=e(`div`,I);a(I,L),c(L,`text-xs uppercase tracking-[0.28em] opacity-60`),a(L,l(`Parts`));let R=e(`div`,I);a(I,R),c(R,`mt-3 text-lg font-semibold`),a(R,l(`Readable copy blocks`));let U=e(`p`,I);a(I,U),c(U,`mt-2 text-sm opacity-70`),a(U,l(`标题、描述和操作区都给了语义化入口，页面里的重复样式可以明显减少。`));let ae=s(`rue:component:anchor`);a(n,ae),o(()=>{let e=p(S,{title:`Semantic starter`,tab:d,preview:()=>_(z,{tone:`base-100`,size:`xl`,className:`overflow-hidden rounded-[2rem] border border-base-300 bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10`,children:g(z.Content,{layout:`split`,align:`center`,gap:`xl`,className:`px-6 py-10 lg:px-16`,children:[g(`div`,{className:`space-y-5`,children:[_(`span`,{className:`badge badge-outline badge-primary`,children:`Rue Design Hero`}),_(z.Title,{children:`Ship landing sections without rebuilding layout scaffolding.`}),_(z.Description,{children:`Hero 现在把 surface、height、background image、overlay 和 action 布局都提升成了语义 API。页面可以更聚焦在内容，而不是重复拼装容器类名。`}),g(z.Actions,{stackOnMobile:!0,children:[_(v,{color:`primary`,children:`Get Started`}),_(v,{type:`outlined`,children:`Browse patterns`})]})]}),_(`div`,{className:`grid w-full max-w-md gap-4`,children:g(`div`,{className:`rounded-[1.5rem] border border-base-300 bg-base-100/90 p-5 shadow-xl`,children:[_(`p`,{className:`text-xs uppercase tracking-[0.3em] opacity-60`,children:`Composition`}),g(`div`,{className:`mt-4 space-y-3`,children:[g(`div`,{className:`rounded-2xl bg-base-200 p-4`,children:[_(`div`,{className:`text-sm font-semibold`,children:`Root handles surface`}),_(`p`,{className:`mt-1 text-sm opacity-70`,children:`tone、size、backgroundImage、overlay 负责外层骨架。`})]}),g(`div`,{className:`rounded-2xl bg-base-200 p-4`,children:[_(`div`,{className:`text-sm font-semibold`,children:`Content handles layout`}),_(`p`,{className:`mt-1 text-sm opacity-70`,children:`layout、align、textAlign、gap 负责组织主视觉内容。`})]})]})]})})]})}),code:`<Hero
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
</Hero>`});i(()=>f(e,n,ae))});let oe=s(`rue:component:anchor`);a(n,oe),o(()=>{let e=p(S,{title:`Centered hero`,tab:h,preview:()=>_(z,{tone:`base-200`,size:`lg`,className:`rounded-box`,children:_(z.Content,{layout:`center`,textAlign:`center`,gap:`md`,className:`px-6 py-10`,children:g(`div`,{className:`max-w-md space-y-4`,children:[_(z.Title,{children:`Hello there`}),_(z.Description,{children:`Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.`}),g(z.Actions,{align:`center`,stackOnMobile:!0,children:[_(v,{color:`primary`,children:`Get Started`}),_(v,{type:`outlined`,children:`View Docs`})]})]})})}),code:`<Hero tone={'base-200'} size={'lg'} className={'rounded-box'}>
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
</Hero>`});i(()=>f(e,n,oe))});let se=s(`rue:component:anchor`);a(n,se),o(()=>{let e=p(S,{title:`Hero with figure`,tab:C,preview:()=>_(z,{tone:`base-200`,size:`lg`,className:`rounded-box`,children:g(z.Content,{layout:`split`,align:`center`,className:`px-6 py-10`,children:[_(`img`,{src:B,className:`max-w-sm rounded-lg shadow-2xl`,alt:`Hero figure`}),g(`div`,{children:[_(z.Title,{children:`Box Office News!`}),_(z.Description,{children:`Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi.`}),g(z.Actions,{className:`mt-6`,children:[_(v,{color:`primary`,children:`Get Started`}),_(v,{type:`text`,children:`View details`})]})]})]})}),code:`<Hero tone={'base-200'} size={'lg'} className={'rounded-box'}>
  <Hero.Content layout={'split'} align={'center'} className={'px-6 py-10'}>
    <img src={'${B}'} className={'max-w-sm rounded-lg shadow-2xl'} alt={'Hero figure'} />
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
</Hero>`});i(()=>f(e,n,se))});let ce=s(`rue:component:anchor`);a(n,ce),o(()=>{let e=p(S,{title:`Hero with figure but reverse order`,tab:w,preview:()=>_(z,{tone:`base-100`,size:`lg`,className:`rounded-box border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-accent/10`,children:g(z.Content,{layout:`split-reverse`,align:`center`,className:`px-6 py-10`,children:[_(`img`,{src:B,className:`max-w-sm rounded-lg shadow-2xl`,alt:`Hero reverse figure`}),g(`div`,{children:[_(`span`,{className:`badge badge-soft badge-accent`,children:`Reverse layout`}),_(z.Title,{className:`mt-4`,children:`Box Office News!`}),_(z.Description,{children:`Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi.`}),g(z.Actions,{className:`mt-6`,children:[_(v,{color:`primary`,children:`Get Started`}),_(v,{type:`outlined`,children:`See release plan`})]})]})]})}),code:`<Hero
  tone={'base-100'}
  size={'lg'}
  className={'rounded-box border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-accent/10'}
>
  <Hero.Content layout={'split-reverse'} align={'center'} className={'px-6 py-10'}>
    <img src={'${B}'} className={'max-w-sm rounded-lg shadow-2xl'} alt={'Hero reverse figure'} />
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
</Hero>`});i(()=>f(e,n,ce))});let le=s(`rue:component:anchor`);a(n,le),o(()=>{let e=p(S,{title:`Hero with form`,tab:T,preview:()=>_(z,{tone:`base-200`,size:`lg`,className:`rounded-box`,children:g(z.Content,{layout:`split-reverse`,align:`center`,className:`px-6 py-10`,children:[g(`div`,{className:`space-y-4 text-center lg:text-left`,children:[_(`span`,{className:`badge badge-outline`,children:`Members only`}),_(z.Title,{children:`Login now!`}),_(z.Description,{children:`Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi.`})]}),_(`div`,{className:`card w-full max-w-sm shrink-0 bg-base-100 shadow-2xl`,children:_(`div`,{className:`card-body`,children:g(y,{children:[_(y.Label,{children:`Email`}),_(b,{type:`email`,placeholder:`Email`}),_(y.Label,{children:`Password`}),_(b,{type:`password`,placeholder:`Password`}),_(`div`,{children:_(`a`,{className:`link link-hover`,children:`Forgot password?`})}),_(v,{color:`neutral`,className:`mt-4`,children:`Login`})]})})})]})}),code:`<Hero tone={'base-200'} size={'lg'} className={'rounded-box'}>
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
</Hero>`});i(()=>f(e,n,le))});let ue=s(`rue:component:anchor`);a(n,ue),o(()=>{let e=p(S,{title:`Hero with overlay image`,tab:ee,preview:()=>g(z,{backgroundImage:V,size:`lg`,className:`rounded-box`,children:[_(z.Overlay,{opacity:`medium`,className:`rounded-box`}),_(z.Content,{layout:`center`,textAlign:`center`,className:`px-6 py-10 text-neutral-content`,children:g(`div`,{className:`max-w-md space-y-5`,children:[_(z.Title,{children:`Hello there`}),_(z.Description,{muted:!1,className:`text-neutral-content/80`,children:`Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi.`}),g(z.Actions,{align:`center`,stackOnMobile:!0,children:[_(v,{color:`primary`,children:`Get Started`}),_(v,{type:`outlined`,children:`Read story`})]})]})})]}),code:`<Hero backgroundImage={'${V}'} size={'lg'} className={'rounded-box'}>
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
</Hero>`});i(()=>f(e,n,ue))});let de=s(`rue:component:anchor`);a(n,de),o(()=>{let e=p(S,{title:`Hero with automatic overlay`,tab:te,preview:()=>_(z,{as:`section`,backgroundImage:V,size:`xl`,overlay:{tone:`base-content`,opacity:`medium`,blur:!0,className:`rounded-[2rem]`},className:`overflow-hidden rounded-[2rem]`,children:g(z.Content,{layout:`split`,align:`center`,gap:`xl`,className:`px-6 py-12 text-neutral-content lg:px-16`,children:[g(`div`,{className:`space-y-5`,children:[_(`span`,{className:`badge badge-soft badge-primary`,children:`Auto Overlay`}),_(z.Title,{children:`把背景图和可读性补丁一起交给 Hero 处理。`}),_(z.Description,{muted:!1,className:`text-neutral-content/80`,children:`当页面只是想快速搭一个带图主视觉区时，直接传 backgroundImage 和 overlay 就够了，不用再手写遮罩层节点。`})]}),_(`div`,{className:`w-full max-w-xs rounded-[1.5rem] border border-white/15 bg-black/30 p-5 backdrop-blur-sm`,children:g(z.Actions,{direction:`column`,align:`start`,children:[_(v,{color:`primary`,block:!0,children:`Start from template`}),_(v,{type:`outlined`,block:!0,children:`Read migration guide`})]})})]})}),code:`<Hero
  as={'section'}
  backgroundImage={'${V}'}
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
</Hero>`});i(()=>f(e,n,de))});let fe=s(`rue:component:anchor`);a(n,fe),o(()=>{let e=p(S,{title:`Surface and size presets`,tab:E,preview:()=>g(`div`,{className:`grid gap-4 xl:grid-cols-3`,children:[_(z,{tone:`base-200`,size:`sm`,className:`rounded-box`,children:_(z.Content,{className:`px-4 py-6`,children:g(`div`,{className:`space-y-3`,children:[_(`span`,{className:`badge badge-soft`,children:`base-200 / sm`}),_(z.Title,{size:`sm`,children:`Compact spotlight`}),_(z.Description,{size:`sm`,children:`适合列表页里的次级引导块。`})]})})}),_(z,{tone:`primary`,size:`md`,className:`rounded-box`,children:_(z.Content,{className:`px-4 py-6`,children:g(`div`,{className:`space-y-3`,children:[_(`span`,{className:`badge badge-soft badge-neutral`,children:`primary / md`}),_(z.Title,{size:`sm`,children:`Campaign push`}),_(z.Description,{size:`sm`,muted:!1,children:`颜色与前景色一起切换，页面里不用再单独补文字颜色。`})]})})}),_(z,{tone:`neutral`,size:`lg`,className:`rounded-box`,children:_(z.Content,{className:`px-4 py-6`,children:g(`div`,{className:`space-y-3`,children:[_(`span`,{className:`badge badge-outline badge-primary`,children:`neutral / lg`}),_(z.Title,{size:`sm`,children:`Full campaign frame`}),_(z.Description,{size:`sm`,muted:!1,children:`更高的尺寸适合首页首屏或专题页入口。`})]})})})]}),code:`<div className={'grid gap-4 xl:grid-cols-3'}>
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
</div>`});i(()=>f(e,n,fe))});let W=e(`div`,n);a(n,W),c(W,`not-prose my-12 space-y-8`);let G=e(`section`,W);a(W,G),c(G,`space-y-2`);let K=e(`h2`,G);a(G,K),c(K,`text-2xl font-semibold`),a(K,l(`API`));let q=e(`p`,G);a(G,q),c(q,`text-sm opacity-70`),a(q,l(`推荐把外层背景和高度交给 Hero Root，把布局交给 Hero.Content，把标题、描述和 CTA 交给语义子组件。这样页面里仍然可以继续用 className 微调，但不会反复重写同一套结构。`));let J=e(`section`,W);a(W,J),c(J,`space-y-3`);let Y=e(`h3`,J);a(J,Y),c(Y,`text-xl font-semibold`),a(Y,l(`Hero`));let pe=s(`rue:component:anchor`);a(J,pe),o(()=>{let e=p(H,{rows:ne});i(()=>f(e,J,pe))});let X=e(`section`,W);a(W,X),c(X,`space-y-3`);let Z=e(`h3`,X);a(X,Z),c(Z,`text-xl font-semibold`),a(Z,l(`Hero.Content`));let me=s(`rue:component:anchor`);a(X,me),o(()=>{let e=p(H,{rows:re});i(()=>f(e,X,me))});let Q=e(`section`,W);a(W,Q),c(Q,`space-y-3`);let $=e(`h3`,Q);a(Q,$),c($,`text-xl font-semibold`),a($,l(`Hero parts`));let he=s(`rue:component:anchor`);return a(Q,he),o(()=>{let e=p(H,{rows:ie});i(()=>f(e,Q,he))}),t})}),n,m),n})};export{U as default};