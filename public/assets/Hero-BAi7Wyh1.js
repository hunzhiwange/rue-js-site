import{$ as e,B as t,Dt as n,G as r,H as i,U as a,W as o,Z as s,ht as c,l,s as u,t as d,wt as f,yt as p}from"./vapor-runtime-C1rlwc61.js";import{a as m,n as h}from"./vapor-helpers-vapor-HR6N5lMH.js";import{n as g,t as _}from"./src-BLzF0BqW.js";import{n as v}from"./SidebarPlaygroundDesign-DmoUIYgb.js";import{t as y}from"./button-B1PhsXzm.js";import{t as b}from"./fieldset-mezqiGsv.js";import{t as x}from"./input-B3nHDIiJ.js";import{t as S}from"./PreviewBlock-CfdDuiov.js";var C={"base-100":`bg-base-100 text-base-content`,"base-200":`bg-base-200 text-base-content`,"base-300":`bg-base-300 text-base-content`,neutral:`bg-neutral text-neutral-content`,primary:`bg-primary text-primary-content`,secondary:`bg-secondary text-secondary-content`,accent:`bg-accent text-accent-content`,info:`bg-info text-info-content`,success:`bg-success text-success-content`,warning:`bg-warning text-warning-content`,error:`bg-error text-error-content`},w={sm:`min-h-80`,md:`min-h-96`,lg:`min-h-[30rem]`,xl:`min-h-[36rem]`,screen:`min-h-screen`},T={center:`text-center`,split:`flex-col gap-10 lg:flex-row`,"split-reverse":`flex-col gap-10 lg:flex-row-reverse`},E={start:`items-start`,center:`items-center`,end:`items-end`},ee={start:`text-left`,center:`text-center`,end:`text-right`},te={sm:`gap-4`,md:`gap-6`,lg:`gap-10`,xl:`gap-14`},D={"base-content":`bg-base-content`,neutral:`bg-neutral`,primary:`bg-primary`,secondary:`bg-secondary`,accent:`bg-accent`,info:`bg-info`,success:`bg-success`,warning:`bg-warning`,error:`bg-error`},O={sm:`text-3xl md:text-4xl`,md:`text-4xl md:text-5xl`,lg:`text-5xl md:text-6xl`,xl:`text-6xl md:text-7xl`},k={sm:`text-sm md:text-base`,md:`text-base md:text-lg`,lg:`text-lg md:text-xl`},A=(...e)=>e.filter(Boolean).join(` `),j=(e,t)=>{if(!(!e&&!t))return{...e,...t}},M=e=>{if(e)return e===!0?{}:e},N=e=>{if(e!=null){if(typeof e==`number`)return{opacity:e};switch(e){case`soft`:return{opacity:.25};case`strong`:return{opacity:.7};default:return{opacity:.45}}}},P=({backgroundImage:e,backgroundPosition:t,backgroundSize:n,backgroundRepeat:r})=>{if(e)return{backgroundImage:`url(${e})`,backgroundPosition:t??`center`,backgroundSize:n??`cover`,backgroundRepeat:r??`no-repeat`}},F=(e,t,n)=>{if(e){if(n)switch(e){case`center`:return`items-center sm:justify-center`;case`end`:return`items-end sm:justify-end`;default:return`items-start sm:justify-start`}if(t===`column`)switch(e){case`center`:return`items-center`;case`end`:return`items-end`;default:return`items-start`}switch(e){case`center`:return`justify-center`;case`end`:return`justify-end`;default:return`justify-start`}}},I=({as:e=`div`,className:t,children:n,style:r,tone:i=`default`,size:a,fullHeight:o,backgroundImage:s,backgroundPosition:c,backgroundSize:l,backgroundRepeat:u,overlay:d,...f})=>{let p=e,m=P({backgroundImage:s,backgroundPosition:c,backgroundSize:l,backgroundRepeat:u}),h=M(d);return g(p,{...f,style:j(r,m),className:A(`hero`,i===`default`?void 0:C[i],o?w.screen:a?w[a]:void 0,t),children:[h?_(R,{...h}):null,n]})},L=({as:e=`div`,className:t,children:n,layout:r=`inherit`,align:i,textAlign:a,gap:o,...s})=>_(e,{...s,className:A(`hero-content`,r===`inherit`?void 0:T[r],i?E[i]:void 0,a?ee[a]:void 0,o?te[o]:void 0,t),children:n}),R=({as:e=`div`,className:t,children:n,tone:r=`default`,opacity:i,blur:a,style:o,...s})=>_(e,{...s,style:j(o,N(i)),className:A(`hero-overlay`,r===`default`?void 0:D[r],a?`backdrop-blur-sm`:void 0,t),children:n}),z=Object.assign(I,{Content:L,Overlay:R,Title:({as:e=`h1`,className:t,children:n,size:r=`lg`,balanced:i=!0,...a})=>_(e,{...a,className:A(`font-bold tracking-tight`,O[r],i?`text-balance`:void 0,t),children:n}),Description:({as:e=`p`,className:t,children:n,size:r=`md`,muted:i=!0,...a})=>_(e,{...a,className:A(`max-w-2xl leading-relaxed`,k[r],i?`opacity-80`:void 0,t),children:n}),Actions:({as:e=`div`,className:t,children:n,align:r,direction:i=`row`,stackOnMobile:a=!1,...o})=>_(e,{...o,className:A(`flex gap-3`,a?`flex-col sm:flex-row sm:flex-wrap`:i===`column`?`flex-col`:`flex-row flex-wrap`,F(r,i,a),t),children:n})}),B=`https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp`,V=`https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp`,H=c=>l(d=>{let f=o(`div`,d);e(f,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=o(`table`,f);t(f,m),e(m,`table table-zebra`);let g=o(`thead`,m);t(m,g);let _=o(`tr`,g);t(g,_);let v=o(`th`,_);t(_,v),t(v,r(`属性`));let y=o(`th`,_);t(_,y),t(y,r(`说明`));let b=o(`th`,_);t(_,b),t(b,r(`类型`));let x=o(`th`,_);t(_,x),t(x,r(`默认值`));let S=o(`tbody`,m);t(m,S);let C=i(`rue:list:start`),w=i(`rue:list:end`);t(S,C),t(S,w);let T=new Map;return n(()=>{T=h({items:c.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,r,c,d,f)=>{u(l(()=>{let r=a(),c=o(`tr`,r);t(r,c),n(()=>{s(c,`key`,String(e.prop))});let l=o(`td`,c);t(c,l);let d=o(`code`,l);t(l,d);let f=i(`rue:slot:anchor`);t(d,f),n(()=>{let t=e.prop;p(()=>u(t,d,f))});let m=o(`td`,c);t(c,m);let h=i(`rue:slot:anchor`);t(m,h),n(()=>{let t=e.description;p(()=>u(t,m,h))});let g=o(`td`,c);t(c,g);let _=o(`code`,g);t(g,_);let v=i(`rue:slot:anchor`);t(_,v),n(()=>{let t=e.type;p(()=>u(t,_,v))});let y=o(`td`,c);t(c,y);let b=o(`code`,y);t(y,b);let x=i(`rue:slot:anchor`);return t(b,x),n(()=>{let t=e.defaultValue;p(()=>u(t,b,x))}),r}),r,c)}})}),f}),ne=[{prop:`as`,description:`指定 Hero 根节点标签`,type:`string`,defaultValue:`div`},{prop:`backgroundImage`,description:`直接设置背景图 URL，组件会自动写入内联背景样式`,type:`string`,defaultValue:`-`},{prop:`backgroundPosition`,description:`背景图定位`,type:`string`,defaultValue:`center`},{prop:`backgroundRepeat`,description:`背景图重复方式`,type:`string`,defaultValue:`no-repeat`},{prop:`backgroundSize`,description:`背景图尺寸`,type:`string`,defaultValue:`cover`},{prop:`fullHeight`,description:`直接切换到全屏高度，等价于 screen 尺寸`,type:`boolean`,defaultValue:`false`},{prop:`overlay`,description:`开启自动遮罩，也支持直接传入 Hero.Overlay 同构配置对象`,type:`boolean | HeroOverlayProps`,defaultValue:`false`},{prop:`size`,description:`Hero 区块高度预设`,type:`sm | md | lg | xl | screen`,defaultValue:`-`},{prop:`tone`,description:`Root 背景与前景色语义层`,type:`default | base-100 | base-200 | base-300 | neutral | primary | secondary | accent | info | success | warning | error`,defaultValue:`default`}],re=[{prop:`Hero.Content.align`,description:`控制内容区交叉轴对齐`,type:`start | center | end`,defaultValue:`-`},{prop:`Hero.Content.as`,description:`指定内容区标签`,type:`string`,defaultValue:`div`},{prop:`Hero.Content.gap`,description:`内容区间距预设，适合覆盖 split 默认间距`,type:`sm | md | lg | xl`,defaultValue:`-`},{prop:`Hero.Content.layout`,description:`语义布局预设，覆盖居中、分栏与反向分栏`,type:`inherit | center | split | split-reverse`,defaultValue:`inherit`},{prop:`Hero.Content.textAlign`,description:`文字对齐方式`,type:`start | center | end`,defaultValue:`-`}],ie=[{prop:`Hero.Overlay.blur`,description:`为遮罩添加轻量模糊，适合背景图场景`,type:`boolean`,defaultValue:`false`},{prop:`Hero.Overlay.opacity`,description:`遮罩透明度，支持 soft / medium / strong 或数字`,type:`soft | medium | strong | number`,defaultValue:`-`},{prop:`Hero.Overlay.tone`,description:`遮罩色调，可配合自动 overlay 一起用`,type:`default | base-content | neutral | primary | secondary | accent | info | success | warning | error`,defaultValue:`default`},{prop:`Hero.Title.balanced`,description:`标题默认启用 text-balance，减少过长标题断行问题`,type:`boolean`,defaultValue:`true`},{prop:`Hero.Title.size`,description:`标题字号预设`,type:`sm | md | lg | xl`,defaultValue:`lg`},{prop:`Hero.Description.muted`,description:`描述文本默认降低一点对比度`,type:`boolean`,defaultValue:`true`},{prop:`Hero.Description.size`,description:`描述字号预设`,type:`sm | md | lg`,defaultValue:`md`},{prop:`Hero.Actions.align`,description:`操作区对齐方式，会根据横排或竖排自动切换到 justify / items`,type:`start | center | end`,defaultValue:`-`},{prop:`Hero.Actions.direction`,description:`操作区排列方向`,type:`row | column`,defaultValue:`row`},{prop:`Hero.Actions.stackOnMobile`,description:`移动端堆叠、桌面端横排，适合 CTA 组合`,type:`boolean`,defaultValue:`false`}],U=()=>{let{tabSemantic:s,tabCentered:h,tabFigure:C,tabReverse:w,tabForm:T,tabOverlay:E,tabOverlayAuto:ee,tabPresets:te}=m(`useSetup:0:0`,()=>f(()=>({tabSemantic:m(`ref:1:0`,()=>c(`preview`)),tabCentered:m(`ref:1:1`,()=>c(`preview`)),tabFigure:m(`ref:1:2`,()=>c(`preview`)),tabReverse:m(`ref:1:3`,()=>c(`preview`)),tabForm:m(`ref:1:4`,()=>c(`preview`)),tabOverlay:m(`ref:1:5`,()=>c(`preview`)),tabOverlayAuto:m(`ref:1:6`,()=>c(`preview`)),tabPresets:m(`ref:1:7`,()=>c(`preview`))})));return l(c=>{let f=a(),m=i(`rue:component:anchor`);return t(f,m),u(d(v,{children:l(()=>{let c=a(),l=o(`div`,c);t(c,l),e(l,`max-w-none prose prose-sm md:prose-base`);let f=o(`h1`,l);t(l,f),t(f,r(`Hero 主视觉区`));let m=o(`p`,l);t(l,m),e(m,`mt-3 mb-3 text-sm`),t(m,r(`Hero 现在不只是一个样式壳。Root 负责背景、尺寸和遮罩，Content 负责布局，Title / Description / Actions 负责最常见的文案骨架，剩下的局部视觉继续交给 className 微调。`));let v=o(`p`,l);t(l,v),e(v,`mt-0 mb-4 text-sm`),t(v,r(`没有可以直接对照的同名标准组件，所以这次的增强重点放在组合能力和语义 API 上：保留 Rue 自己的视觉语言，但把高频搭建动作从页面里收回到组件里。`));let D=o(`div`,l);t(l,D),e(D,`not-prose mt-6 grid gap-4 lg:grid-cols-3`);let O=o(`div`,D);t(D,O),e(O,`rounded-[1.5rem] border border-base-300 bg-base-100 p-5 shadow-sm`);let k=o(`div`,O);t(O,k),e(k,`text-xs uppercase tracking-[0.28em] opacity-60`),t(k,r(`Root`));let A=o(`div`,O);t(O,A),e(A,`mt-3 text-lg font-semibold`),t(A,r(`Background, size, overlay`));let j=o(`p`,O);t(O,j),e(j,`mt-2 text-sm opacity-70`),t(j,r(`用 tone、size、backgroundImage、overlay 先把 Hero 的外层骨架搭起来。`));let M=o(`div`,D);t(D,M),e(M,`rounded-[1.5rem] border border-base-300 bg-base-100 p-5 shadow-sm`);let N=o(`div`,M);t(M,N),e(N,`text-xs uppercase tracking-[0.28em] opacity-60`),t(N,r(`Content`));let P=o(`div`,M);t(M,P),e(P,`mt-3 text-lg font-semibold`),t(P,r(`Split, reverse, center`));let F=o(`p`,M);t(M,F),e(F,`mt-2 text-sm opacity-70`),t(F,r(`用 Hero.Content.layout 切换常见主视觉布局，再按需叠加 align、textAlign 和 gap。`));let I=o(`div`,D);t(D,I),e(I,`rounded-[1.5rem] border border-base-300 bg-base-100 p-5 shadow-sm`);let L=o(`div`,I);t(I,L),e(L,`text-xs uppercase tracking-[0.28em] opacity-60`),t(L,r(`Parts`));let R=o(`div`,I);t(I,R),e(R,`mt-3 text-lg font-semibold`),t(R,r(`Readable copy blocks`));let U=o(`p`,I);t(I,U),e(U,`mt-2 text-sm opacity-70`),t(U,r(`标题、描述和操作区都给了语义化入口，页面里的重复样式可以明显减少。`));let ae=i(`rue:component:anchor`);t(l,ae),n(()=>{let e=d(S,{title:`Semantic starter`,tab:s,preview:()=>_(z,{tone:`base-100`,size:`xl`,className:`overflow-hidden rounded-[2rem] border border-base-300 bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10`,children:g(z.Content,{layout:`split`,align:`center`,gap:`xl`,className:`px-6 py-10 lg:px-16`,children:[g(`div`,{className:`space-y-5`,children:[_(`span`,{className:`badge badge-outline badge-primary`,children:`Rue Design Hero`}),_(z.Title,{children:`Ship landing sections without rebuilding layout scaffolding.`}),_(z.Description,{children:`Hero 现在把 surface、height、background image、overlay 和 action 布局都提升成了语义 API。页面可以更聚焦在内容，而不是重复拼装容器类名。`}),g(z.Actions,{stackOnMobile:!0,children:[_(y,{color:`primary`,children:`Get Started`}),_(y,{type:`outlined`,children:`Browse patterns`})]})]}),_(`div`,{className:`grid w-full max-w-md gap-4`,children:g(`div`,{className:`rounded-[1.5rem] border border-base-300 bg-base-100/90 p-5 shadow-xl`,children:[_(`p`,{className:`text-xs uppercase tracking-[0.3em] opacity-60`,children:`Composition`}),g(`div`,{className:`mt-4 space-y-3`,children:[g(`div`,{className:`rounded-2xl bg-base-200 p-4`,children:[_(`div`,{className:`text-sm font-semibold`,children:`Root handles surface`}),_(`p`,{className:`mt-1 text-sm opacity-70`,children:`tone、size、backgroundImage、overlay 负责外层骨架。`})]}),g(`div`,{className:`rounded-2xl bg-base-200 p-4`,children:[_(`div`,{className:`text-sm font-semibold`,children:`Content handles layout`}),_(`p`,{className:`mt-1 text-sm opacity-70`,children:`layout、align、textAlign、gap 负责组织主视觉内容。`})]})]})]})})]})}),code:`<Hero
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
</Hero>`});p(()=>u(e,l,ae))});let oe=i(`rue:component:anchor`);t(l,oe),n(()=>{let e=d(S,{title:`Centered hero`,tab:h,preview:()=>_(z,{tone:`base-200`,size:`lg`,className:`rounded-box`,children:_(z.Content,{layout:`center`,textAlign:`center`,gap:`md`,className:`px-6 py-10`,children:g(`div`,{className:`max-w-md space-y-4`,children:[_(z.Title,{children:`Hello there`}),_(z.Description,{children:`Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.`}),g(z.Actions,{align:`center`,stackOnMobile:!0,children:[_(y,{color:`primary`,children:`Get Started`}),_(y,{type:`outlined`,children:`View Docs`})]})]})})}),code:`<Hero tone={'base-200'} size={'lg'} className={'rounded-box'}>
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
</Hero>`});p(()=>u(e,l,oe))});let se=i(`rue:component:anchor`);t(l,se),n(()=>{let e=d(S,{title:`Hero with figure`,tab:C,preview:()=>_(z,{tone:`base-200`,size:`lg`,className:`rounded-box`,children:g(z.Content,{layout:`split`,align:`center`,className:`px-6 py-10`,children:[_(`img`,{src:B,className:`max-w-sm rounded-lg shadow-2xl`,alt:`Hero figure`}),g(`div`,{children:[_(z.Title,{children:`Box Office News!`}),_(z.Description,{children:`Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi.`}),g(z.Actions,{className:`mt-6`,children:[_(y,{color:`primary`,children:`Get Started`}),_(y,{type:`text`,children:`View details`})]})]})]})}),code:`<Hero tone={'base-200'} size={'lg'} className={'rounded-box'}>
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
</Hero>`});p(()=>u(e,l,se))});let ce=i(`rue:component:anchor`);t(l,ce),n(()=>{let e=d(S,{title:`Hero with figure but reverse order`,tab:w,preview:()=>_(z,{tone:`base-100`,size:`lg`,className:`rounded-box border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-accent/10`,children:g(z.Content,{layout:`split-reverse`,align:`center`,className:`px-6 py-10`,children:[_(`img`,{src:B,className:`max-w-sm rounded-lg shadow-2xl`,alt:`Hero reverse figure`}),g(`div`,{children:[_(`span`,{className:`badge badge-soft badge-accent`,children:`Reverse layout`}),_(z.Title,{className:`mt-4`,children:`Box Office News!`}),_(z.Description,{children:`Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi.`}),g(z.Actions,{className:`mt-6`,children:[_(y,{color:`primary`,children:`Get Started`}),_(y,{type:`outlined`,children:`See release plan`})]})]})]})}),code:`<Hero
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
</Hero>`});p(()=>u(e,l,ce))});let le=i(`rue:component:anchor`);t(l,le),n(()=>{let e=d(S,{title:`Hero with form`,tab:T,preview:()=>_(z,{tone:`base-200`,size:`lg`,className:`rounded-box`,children:g(z.Content,{layout:`split-reverse`,align:`center`,className:`px-6 py-10`,children:[g(`div`,{className:`space-y-4 text-center lg:text-left`,children:[_(`span`,{className:`badge badge-outline`,children:`Members only`}),_(z.Title,{children:`Login now!`}),_(z.Description,{children:`Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi.`})]}),_(`div`,{className:`card w-full max-w-sm shrink-0 bg-base-100 shadow-2xl`,children:_(`div`,{className:`card-body`,children:g(b,{children:[_(b.Label,{children:`Email`}),_(x,{type:`email`,placeholder:`Email`}),_(b.Label,{children:`Password`}),_(x,{type:`password`,placeholder:`Password`}),_(`div`,{children:_(`a`,{className:`link link-hover`,children:`Forgot password?`})}),_(y,{color:`neutral`,className:`mt-4`,children:`Login`})]})})})]})}),code:`<Hero tone={'base-200'} size={'lg'} className={'rounded-box'}>
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
</Hero>`});p(()=>u(e,l,le))});let ue=i(`rue:component:anchor`);t(l,ue),n(()=>{let e=d(S,{title:`Hero with overlay image`,tab:E,preview:()=>g(z,{backgroundImage:V,size:`lg`,className:`rounded-box`,children:[_(z.Overlay,{opacity:`medium`,className:`rounded-box`}),_(z.Content,{layout:`center`,textAlign:`center`,className:`px-6 py-10 text-neutral-content`,children:g(`div`,{className:`max-w-md space-y-5`,children:[_(z.Title,{children:`Hello there`}),_(z.Description,{muted:!1,className:`text-neutral-content/80`,children:`Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi.`}),g(z.Actions,{align:`center`,stackOnMobile:!0,children:[_(y,{color:`primary`,children:`Get Started`}),_(y,{type:`outlined`,children:`Read story`})]})]})})]}),code:`<Hero backgroundImage={'${V}'} size={'lg'} className={'rounded-box'}>
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
</Hero>`});p(()=>u(e,l,ue))});let de=i(`rue:component:anchor`);t(l,de),n(()=>{let e=d(S,{title:`Hero with automatic overlay`,tab:ee,preview:()=>_(z,{as:`section`,backgroundImage:V,size:`xl`,overlay:{tone:`base-content`,opacity:`medium`,blur:!0,className:`rounded-[2rem]`},className:`overflow-hidden rounded-[2rem]`,children:g(z.Content,{layout:`split`,align:`center`,gap:`xl`,className:`px-6 py-12 text-neutral-content lg:px-16`,children:[g(`div`,{className:`space-y-5`,children:[_(`span`,{className:`badge badge-soft badge-primary`,children:`Auto Overlay`}),_(z.Title,{children:`把背景图和可读性补丁一起交给 Hero 处理。`}),_(z.Description,{muted:!1,className:`text-neutral-content/80`,children:`当页面只是想快速搭一个带图主视觉区时，直接传 backgroundImage 和 overlay 就够了，不用再手写遮罩层节点。`})]}),_(`div`,{className:`w-full max-w-xs rounded-[1.5rem] border border-white/15 bg-black/30 p-5 backdrop-blur-sm`,children:g(z.Actions,{direction:`column`,align:`start`,children:[_(y,{color:`primary`,block:!0,children:`Start from template`}),_(y,{type:`outlined`,block:!0,children:`Read migration guide`})]})})]})}),code:`<Hero
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
</Hero>`});p(()=>u(e,l,de))});let fe=i(`rue:component:anchor`);t(l,fe),n(()=>{let e=d(S,{title:`Surface and size presets`,tab:te,preview:()=>g(`div`,{className:`grid gap-4 xl:grid-cols-3`,children:[_(z,{tone:`base-200`,size:`sm`,className:`rounded-box`,children:_(z.Content,{className:`px-4 py-6`,children:g(`div`,{className:`space-y-3`,children:[_(`span`,{className:`badge badge-soft`,children:`base-200 / sm`}),_(z.Title,{size:`sm`,children:`Compact spotlight`}),_(z.Description,{size:`sm`,children:`适合列表页里的次级引导块。`})]})})}),_(z,{tone:`primary`,size:`md`,className:`rounded-box`,children:_(z.Content,{className:`px-4 py-6`,children:g(`div`,{className:`space-y-3`,children:[_(`span`,{className:`badge badge-soft badge-neutral`,children:`primary / md`}),_(z.Title,{size:`sm`,children:`Campaign push`}),_(z.Description,{size:`sm`,muted:!1,children:`颜色与前景色一起切换，页面里不用再单独补文字颜色。`})]})})}),_(z,{tone:`neutral`,size:`lg`,className:`rounded-box`,children:_(z.Content,{className:`px-4 py-6`,children:g(`div`,{className:`space-y-3`,children:[_(`span`,{className:`badge badge-outline badge-primary`,children:`neutral / lg`}),_(z.Title,{size:`sm`,children:`Full campaign frame`}),_(z.Description,{size:`sm`,muted:!1,children:`更高的尺寸适合首页首屏或专题页入口。`})]})})})]}),code:`<div className={'grid gap-4 xl:grid-cols-3'}>
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
</div>`});p(()=>u(e,l,fe))});let W=o(`div`,l);t(l,W),e(W,`not-prose my-12 space-y-8`);let G=o(`section`,W);t(W,G),e(G,`space-y-2`);let K=o(`h2`,G);t(G,K),e(K,`text-2xl font-semibold`),t(K,r(`API`));let q=o(`p`,G);t(G,q),e(q,`text-sm opacity-70`),t(q,r(`推荐把外层背景和高度交给 Hero Root，把布局交给 Hero.Content，把标题、描述和 CTA 交给语义子组件。这样页面里仍然可以继续用 className 微调，但不会反复重写同一套结构。`));let J=o(`section`,W);t(W,J),e(J,`space-y-3`);let Y=o(`h3`,J);t(J,Y),e(Y,`text-xl font-semibold`),t(Y,r(`Hero`));let pe=i(`rue:component:anchor`);t(J,pe),n(()=>{let e=d(H,{rows:ne});p(()=>u(e,J,pe))});let X=o(`section`,W);t(W,X),e(X,`space-y-3`);let Z=o(`h3`,X);t(X,Z),e(Z,`text-xl font-semibold`),t(Z,r(`Hero.Content`));let me=i(`rue:component:anchor`);t(X,me),n(()=>{let e=d(H,{rows:re});p(()=>u(e,X,me))});let Q=o(`section`,W);t(W,Q),e(Q,`space-y-3`);let $=o(`h3`,Q);t(Q,$),e($,`text-xl font-semibold`),t($,r(`Hero parts`));let he=i(`rue:component:anchor`);return t(Q,he),n(()=>{let e=d(H,{rows:ie});p(()=>u(e,Q,he))}),c})}),f,m),f})};export{U as default};