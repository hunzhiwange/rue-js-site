import{F as e,H as t,I as n,N as r,P as i,W as a,c as o,j as s,pt as c,rt as l,t as u,u as d,ut as f}from"./vapor-runtime-BZZbPG7x.js";import{a as p,n as m}from"./vapor-helpers-vapor-DuGQh50d.js";import{n as h,t as g}from"./src-DP0sEeZS.js";import{n as _}from"./SidebarPlaygroundDesign-DJfSSlM7.js";import{t as v}from"./button-BOnbyENm.js";import{t as y}from"./fieldset-CwVMbd-Z.js";import{t as b}from"./input-BprVLhu7.js";import{t as x}from"./PreviewBlock-BHJcXiGu.js";var S={"base-100":`bg-base-100 text-base-content`,"base-200":`bg-base-200 text-base-content`,"base-300":`bg-base-300 text-base-content`,neutral:`bg-neutral text-neutral-content`,primary:`bg-primary text-primary-content`,secondary:`bg-secondary text-secondary-content`,accent:`bg-accent text-accent-content`,info:`bg-info text-info-content`,success:`bg-success text-success-content`,warning:`bg-warning text-warning-content`,error:`bg-error text-error-content`},C={sm:`min-h-80`,md:`min-h-96`,lg:`min-h-[30rem]`,xl:`min-h-[36rem]`,screen:`min-h-screen`},ee={center:`text-center`,split:`flex-col gap-10 lg:flex-row`,"split-reverse":`flex-col gap-10 lg:flex-row-reverse`},w={start:`items-start`,center:`items-center`,end:`items-end`},te={start:`text-left`,center:`text-center`,end:`text-right`},ne={sm:`gap-4`,md:`gap-6`,lg:`gap-10`,xl:`gap-14`},re={"base-content":`bg-base-content`,neutral:`bg-neutral`,primary:`bg-primary`,secondary:`bg-secondary`,accent:`bg-accent`,info:`bg-info`,success:`bg-success`,warning:`bg-warning`,error:`bg-error`},T={sm:`text-3xl md:text-4xl`,md:`text-4xl md:text-5xl`,lg:`text-5xl md:text-6xl`,xl:`text-6xl md:text-7xl`},E={sm:`text-sm md:text-base`,md:`text-base md:text-lg`,lg:`text-lg md:text-xl`},D=(...e)=>e.filter(Boolean).join(` `),O=(e,t)=>{if(!(!e&&!t))return{...e,...t}},k=e=>{if(e)return e===!0?{}:e},A=e=>{if(e!=null){if(typeof e==`number`)return{opacity:e};switch(e){case`soft`:return{opacity:.25};case`strong`:return{opacity:.7};default:return{opacity:.45}}}},j=({backgroundImage:e,backgroundPosition:t,backgroundSize:n,backgroundRepeat:r})=>{if(e)return{backgroundImage:`url(${e})`,backgroundPosition:t??`center`,backgroundSize:n??`cover`,backgroundRepeat:r??`no-repeat`}},M=(e,t,n)=>{if(e){if(n)switch(e){case`center`:return`items-center sm:justify-center`;case`end`:return`items-end sm:justify-end`;default:return`items-start sm:justify-start`}if(t===`column`)switch(e){case`center`:return`items-center`;case`end`:return`items-end`;default:return`items-start`}switch(e){case`center`:return`justify-center`;case`end`:return`justify-end`;default:return`justify-start`}}},N=({as:e=`div`,className:t,children:n,style:r,tone:i=`default`,size:a,fullHeight:o,backgroundImage:s,backgroundPosition:c,backgroundSize:l,backgroundRepeat:u,overlay:d,...f})=>{let p=e,m=j({backgroundImage:s,backgroundPosition:c,backgroundSize:l,backgroundRepeat:u}),_=k(d);return h(p,{...f,style:O(r,m),className:D(`hero`,i===`default`?void 0:S[i],o?C.screen:a?C[a]:void 0,t),children:[_?g(F,{..._}):null,n]})},P=({as:e=`div`,className:t,children:n,layout:r=`inherit`,align:i,textAlign:a,gap:o,...s})=>g(e,{...s,className:D(`hero-content`,r===`inherit`?void 0:ee[r],i?w[i]:void 0,a?te[a]:void 0,o?ne[o]:void 0,t),children:n}),F=({as:e=`div`,className:t,children:n,tone:r=`default`,opacity:i,blur:a,style:o,...s})=>g(e,{...s,style:O(o,A(i)),className:D(`hero-overlay`,r===`default`?void 0:re[r],a?`backdrop-blur-sm`:void 0,t),children:n}),I=Object.assign(N,{Content:P,Overlay:F,Title:({as:e=`h1`,className:t,children:n,size:r=`lg`,balanced:i=!0,...a})=>g(e,{...a,className:D(`font-bold tracking-tight`,T[r],i?`text-balance`:void 0,t),children:n}),Description:({as:e=`p`,className:t,children:n,size:r=`md`,muted:i=!0,...a})=>g(e,{...a,className:D(`max-w-2xl leading-relaxed`,E[r],i?`opacity-80`:void 0,t),children:n}),Actions:({as:e=`div`,className:t,children:n,align:r,direction:i=`row`,stackOnMobile:a=!1,...o})=>g(e,{...o,className:D(`flex gap-3`,a?`flex-col sm:flex-row sm:flex-wrap`:i===`column`?`flex-col`:`flex-row flex-wrap`,M(r,i,a),t),children:n})}),L=`https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp`,R=`https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp`,z=({rows:l})=>d(()=>{let u=e(`div`);a(u,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=e(`table`);s(u,f),a(f,`table table-zebra`);let p=e(`thead`);s(f,p);let h=e(`tr`);s(p,h);let g=e(`th`);s(h,g),s(g,n(`属性`));let _=e(`th`);s(h,_),s(_,n(`说明`));let v=e(`th`);s(h,v),s(v,n(`类型`));let y=e(`th`);s(h,y),s(y,n(`默认值`));let b=e(`tbody`);s(f,b);let x=r(`rue:list:start`),S=r(`rue:list:end`);s(b,x),s(b,S);let C=new Map;return c(()=>{C=m({items:l||[],getKey:(e,t)=>e.prop,elements:C,parent:b,before:S,singleRoot:!0,start:x,renderItem:(n,a,l,u,f)=>{o(d(()=>{let a=i(),l=e(`tr`);s(a,l),c(()=>{t(l,`key`,String(n.prop))});let u=e(`td`);s(l,u);let d=e(`code`);s(u,d);let f=r(`rue:slot:anchor`);s(d,f),c(()=>{let e=n.prop;o(e,d,f)});let p=e(`td`);s(l,p);let m=r(`rue:slot:anchor`);s(p,m),c(()=>{let e=n.description;o(e,p,m)});let h=e(`td`);s(l,h);let g=e(`code`);s(h,g);let _=r(`rue:slot:anchor`);s(g,_),c(()=>{let e=n.type;o(e,g,_)});let v=e(`td`);s(l,v);let y=e(`code`);s(v,y);let b=r(`rue:slot:anchor`);return s(y,b),c(()=>{let e=n.defaultValue;o(e,y,b)}),a}),a,l)}})}),u}),ie=[{prop:`as`,description:`指定 Hero 根节点标签`,type:`string`,defaultValue:`div`},{prop:`backgroundImage`,description:`直接设置背景图 URL，组件会自动写入内联背景样式`,type:`string`,defaultValue:`-`},{prop:`backgroundPosition`,description:`背景图定位`,type:`string`,defaultValue:`center`},{prop:`backgroundRepeat`,description:`背景图重复方式`,type:`string`,defaultValue:`no-repeat`},{prop:`backgroundSize`,description:`背景图尺寸`,type:`string`,defaultValue:`cover`},{prop:`fullHeight`,description:`直接切换到全屏高度，等价于 screen 尺寸`,type:`boolean`,defaultValue:`false`},{prop:`overlay`,description:`开启自动遮罩，也支持直接传入 Hero.Overlay 同构配置对象`,type:`boolean | HeroOverlayProps`,defaultValue:`false`},{prop:`size`,description:`Hero 区块高度预设`,type:`sm | md | lg | xl | screen`,defaultValue:`-`},{prop:`tone`,description:`Root 背景与前景色语义层`,type:`default | base-100 | base-200 | base-300 | neutral | primary | secondary | accent | info | success | warning | error`,defaultValue:`default`}],ae=[{prop:`Hero.Content.align`,description:`控制内容区交叉轴对齐`,type:`start | center | end`,defaultValue:`-`},{prop:`Hero.Content.as`,description:`指定内容区标签`,type:`string`,defaultValue:`div`},{prop:`Hero.Content.gap`,description:`内容区间距预设，适合覆盖 split 默认间距`,type:`sm | md | lg | xl`,defaultValue:`-`},{prop:`Hero.Content.layout`,description:`语义布局预设，覆盖居中、分栏与反向分栏`,type:`inherit | center | split | split-reverse`,defaultValue:`inherit`},{prop:`Hero.Content.textAlign`,description:`文字对齐方式`,type:`start | center | end`,defaultValue:`-`}],oe=[{prop:`Hero.Overlay.blur`,description:`为遮罩添加轻量模糊，适合背景图场景`,type:`boolean`,defaultValue:`false`},{prop:`Hero.Overlay.opacity`,description:`遮罩透明度，支持 soft / medium / strong 或数字`,type:`soft | medium | strong | number`,defaultValue:`-`},{prop:`Hero.Overlay.tone`,description:`遮罩色调，可配合自动 overlay 一起用`,type:`default | base-content | neutral | primary | secondary | accent | info | success | warning | error`,defaultValue:`default`},{prop:`Hero.Title.balanced`,description:`标题默认启用 text-balance，减少过长标题断行问题`,type:`boolean`,defaultValue:`true`},{prop:`Hero.Title.size`,description:`标题字号预设`,type:`sm | md | lg | xl`,defaultValue:`lg`},{prop:`Hero.Description.muted`,description:`描述文本默认降低一点对比度`,type:`boolean`,defaultValue:`true`},{prop:`Hero.Description.size`,description:`描述字号预设`,type:`sm | md | lg`,defaultValue:`md`},{prop:`Hero.Actions.align`,description:`操作区对齐方式，会根据横排或竖排自动切换到 justify / items`,type:`start | center | end`,defaultValue:`-`},{prop:`Hero.Actions.direction`,description:`操作区排列方向`,type:`row | column`,defaultValue:`row`},{prop:`Hero.Actions.stackOnMobile`,description:`移动端堆叠、桌面端横排，适合 CTA 组合`,type:`boolean`,defaultValue:`false`}],B=()=>{let{tabSemantic:m,tabCentered:S,tabFigure:C,tabReverse:ee,tabForm:w,tabOverlay:te,tabOverlayAuto:ne,tabPresets:re}=p(`useSetup:0:0`,()=>f(()=>({tabSemantic:p(`ref:1:0`,()=>l(`preview`)),tabCentered:p(`ref:1:1`,()=>l(`preview`)),tabFigure:p(`ref:1:2`,()=>l(`preview`)),tabReverse:p(`ref:1:3`,()=>l(`preview`)),tabForm:p(`ref:1:4`,()=>l(`preview`)),tabOverlay:p(`ref:1:5`,()=>l(`preview`)),tabOverlayAuto:p(`ref:1:6`,()=>l(`preview`)),tabPresets:p(`ref:1:7`,()=>l(`preview`))})));return d(()=>{let l=i(),f=r(`rue:component:anchor`);return s(l,f),o(u(_,{children:d(()=>{let l=i(),d=e(`div`);s(l,d),a(d,`max-w-none prose prose-sm md:prose-base`);let f=e(`h1`);s(d,f),s(f,n(`Hero 主视觉区`));let p=e(`p`);s(d,p),a(p,`mt-3 mb-3 text-sm`),s(p,n(`Hero 现在不只是一个样式壳。Root 负责背景、尺寸和遮罩，Content 负责布局，Title / Description / Actions 负责最常见的文案骨架，剩下的局部视觉继续交给 className 微调。`));let _=e(`p`);s(d,_),a(_,`mt-0 mb-4 text-sm`),s(_,n(`没有可以直接对照的同名标准组件，所以这次的增强重点放在组合能力和语义 API 上：保留 Rue 自己的视觉语言，但把高频搭建动作从页面里收回到组件里。`));let T=e(`div`);s(d,T),a(T,`text-sm`);let E=e(`a`);s(T,E),t(E,`href`,`https://daisyui.com/components/hero/`),t(E,`target`,`_blank`),s(E,n(`查看 Hero 静态样式`));let D=e(`div`);s(d,D),a(D,`not-prose mt-6 grid gap-4 lg:grid-cols-3`);let O=e(`div`);s(D,O),a(O,`rounded-[1.5rem] border border-base-300 bg-base-100 p-5 shadow-sm`);let k=e(`div`);s(O,k),a(k,`text-xs uppercase tracking-[0.28em] opacity-60`),s(k,n(`Root`));let A=e(`div`);s(O,A),a(A,`mt-3 text-lg font-semibold`),s(A,n(`Background, size, overlay`));let j=e(`p`);s(O,j),a(j,`mt-2 text-sm opacity-70`),s(j,n(`用 tone、size、backgroundImage、overlay 先把 Hero 的外层骨架搭起来。`));let M=e(`div`);s(D,M),a(M,`rounded-[1.5rem] border border-base-300 bg-base-100 p-5 shadow-sm`);let N=e(`div`);s(M,N),a(N,`text-xs uppercase tracking-[0.28em] opacity-60`),s(N,n(`Content`));let P=e(`div`);s(M,P),a(P,`mt-3 text-lg font-semibold`),s(P,n(`Split, reverse, center`));let F=e(`p`);s(M,F),a(F,`mt-2 text-sm opacity-70`),s(F,n(`用 Hero.Content.layout 切换常见主视觉布局，再按需叠加 align、textAlign 和 gap。`));let B=e(`div`);s(D,B),a(B,`rounded-[1.5rem] border border-base-300 bg-base-100 p-5 shadow-sm`);let V=e(`div`);s(B,V),a(V,`text-xs uppercase tracking-[0.28em] opacity-60`),s(V,n(`Parts`));let H=e(`div`);s(B,H),a(H,`mt-3 text-lg font-semibold`),s(H,n(`Readable copy blocks`));let U=e(`p`);s(B,U),a(U,`mt-2 text-sm opacity-70`),s(U,n(`标题、描述和操作区都给了语义化入口，页面里的重复样式可以明显减少。`));let se=r(`rue:component:anchor`);s(d,se),c(()=>{o(u(x,{title:`Semantic starter`,tab:m,preview:()=>g(I,{tone:`base-100`,size:`xl`,className:`overflow-hidden rounded-[2rem] border border-base-300 bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10`,children:h(I.Content,{layout:`split`,align:`center`,gap:`xl`,className:`px-6 py-10 lg:px-16`,children:[h(`div`,{className:`space-y-5`,children:[g(`span`,{className:`badge badge-outline badge-primary`,children:`Rue Design Hero`}),g(I.Title,{children:`Ship landing sections without rebuilding layout scaffolding.`}),g(I.Description,{children:`Hero 现在把 surface、height、background image、overlay 和 action 布局都提升成了语义 API。页面可以更聚焦在内容，而不是重复拼装容器类名。`}),h(I.Actions,{stackOnMobile:!0,children:[g(v,{color:`primary`,children:`Get Started`}),g(v,{type:`outlined`,children:`Browse patterns`})]})]}),g(`div`,{className:`grid w-full max-w-md gap-4`,children:h(`div`,{className:`rounded-[1.5rem] border border-base-300 bg-base-100/90 p-5 shadow-xl`,children:[g(`p`,{className:`text-xs uppercase tracking-[0.3em] opacity-60`,children:`Composition`}),h(`div`,{className:`mt-4 space-y-3`,children:[h(`div`,{className:`rounded-2xl bg-base-200 p-4`,children:[g(`div`,{className:`text-sm font-semibold`,children:`Root handles surface`}),g(`p`,{className:`mt-1 text-sm opacity-70`,children:`tone、size、backgroundImage、overlay 负责外层骨架。`})]}),h(`div`,{className:`rounded-2xl bg-base-200 p-4`,children:[g(`div`,{className:`text-sm font-semibold`,children:`Content handles layout`}),g(`p`,{className:`mt-1 text-sm opacity-70`,children:`layout、align、textAlign、gap 负责组织主视觉内容。`})]})]})]})})]})}),code:`<Hero
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
</Hero>`}),d,se)});let ce=r(`rue:component:anchor`);s(d,ce),c(()=>{o(u(x,{title:`Centered hero`,tab:S,preview:()=>g(I,{tone:`base-200`,size:`lg`,className:`rounded-box`,children:g(I.Content,{layout:`center`,textAlign:`center`,gap:`md`,className:`px-6 py-10`,children:h(`div`,{className:`max-w-md space-y-4`,children:[g(I.Title,{children:`Hello there`}),g(I.Description,{children:`Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.`}),h(I.Actions,{align:`center`,stackOnMobile:!0,children:[g(v,{color:`primary`,children:`Get Started`}),g(v,{type:`outlined`,children:`View Docs`})]})]})})}),code:`<Hero tone={'base-200'} size={'lg'} className={'rounded-box'}>
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
</Hero>`}),d,ce)});let le=r(`rue:component:anchor`);s(d,le),c(()=>{o(u(x,{title:`Hero with figure`,tab:C,preview:()=>g(I,{tone:`base-200`,size:`lg`,className:`rounded-box`,children:h(I.Content,{layout:`split`,align:`center`,className:`px-6 py-10`,children:[g(`img`,{src:L,className:`max-w-sm rounded-lg shadow-2xl`,alt:`Hero figure`}),h(`div`,{children:[g(I.Title,{children:`Box Office News!`}),g(I.Description,{children:`Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi.`}),h(I.Actions,{className:`mt-6`,children:[g(v,{color:`primary`,children:`Get Started`}),g(v,{type:`text`,children:`View details`})]})]})]})}),code:`<Hero tone={'base-200'} size={'lg'} className={'rounded-box'}>
  <Hero.Content layout={'split'} align={'center'} className={'px-6 py-10'}>
    <img src={'${L}'} className={'max-w-sm rounded-lg shadow-2xl'} alt={'Hero figure'} />
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
</Hero>`}),d,le)});let ue=r(`rue:component:anchor`);s(d,ue),c(()=>{o(u(x,{title:`Hero with figure but reverse order`,tab:ee,preview:()=>g(I,{tone:`base-100`,size:`lg`,className:`rounded-box border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-accent/10`,children:h(I.Content,{layout:`split-reverse`,align:`center`,className:`px-6 py-10`,children:[g(`img`,{src:L,className:`max-w-sm rounded-lg shadow-2xl`,alt:`Hero reverse figure`}),h(`div`,{children:[g(`span`,{className:`badge badge-soft badge-accent`,children:`Reverse layout`}),g(I.Title,{className:`mt-4`,children:`Box Office News!`}),g(I.Description,{children:`Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi.`}),h(I.Actions,{className:`mt-6`,children:[g(v,{color:`primary`,children:`Get Started`}),g(v,{type:`outlined`,children:`See release plan`})]})]})]})}),code:`<Hero
  tone={'base-100'}
  size={'lg'}
  className={'rounded-box border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-accent/10'}
>
  <Hero.Content layout={'split-reverse'} align={'center'} className={'px-6 py-10'}>
    <img src={'${L}'} className={'max-w-sm rounded-lg shadow-2xl'} alt={'Hero reverse figure'} />
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
</Hero>`}),d,ue)});let de=r(`rue:component:anchor`);s(d,de),c(()=>{o(u(x,{title:`Hero with form`,tab:w,preview:()=>g(I,{tone:`base-200`,size:`lg`,className:`rounded-box`,children:h(I.Content,{layout:`split-reverse`,align:`center`,className:`px-6 py-10`,children:[h(`div`,{className:`space-y-4 text-center lg:text-left`,children:[g(`span`,{className:`badge badge-outline`,children:`Members only`}),g(I.Title,{children:`Login now!`}),g(I.Description,{children:`Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi.`})]}),g(`div`,{className:`card w-full max-w-sm shrink-0 bg-base-100 shadow-2xl`,children:g(`div`,{className:`card-body`,children:h(y,{children:[g(y.Label,{children:`Email`}),g(b,{type:`email`,placeholder:`Email`}),g(y.Label,{children:`Password`}),g(b,{type:`password`,placeholder:`Password`}),g(`div`,{children:g(`a`,{className:`link link-hover`,children:`Forgot password?`})}),g(v,{color:`neutral`,className:`mt-4`,children:`Login`})]})})})]})}),code:`<Hero tone={'base-200'} size={'lg'} className={'rounded-box'}>
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
</Hero>`}),d,de)});let fe=r(`rue:component:anchor`);s(d,fe),c(()=>{o(u(x,{title:`Hero with overlay image`,tab:te,preview:()=>h(I,{backgroundImage:R,size:`lg`,className:`rounded-box`,children:[g(I.Overlay,{opacity:`medium`,className:`rounded-box`}),g(I.Content,{layout:`center`,textAlign:`center`,className:`px-6 py-10 text-neutral-content`,children:h(`div`,{className:`max-w-md space-y-5`,children:[g(I.Title,{children:`Hello there`}),g(I.Description,{muted:!1,className:`text-neutral-content/80`,children:`Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi.`}),h(I.Actions,{align:`center`,stackOnMobile:!0,children:[g(v,{color:`primary`,children:`Get Started`}),g(v,{type:`outlined`,children:`Read story`})]})]})})]}),code:`<Hero backgroundImage={'${R}'} size={'lg'} className={'rounded-box'}>
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
</Hero>`}),d,fe)});let pe=r(`rue:component:anchor`);s(d,pe),c(()=>{o(u(x,{title:`Hero with automatic overlay`,tab:ne,preview:()=>g(I,{as:`section`,backgroundImage:R,size:`xl`,overlay:{tone:`base-content`,opacity:`medium`,blur:!0,className:`rounded-[2rem]`},className:`overflow-hidden rounded-[2rem]`,children:h(I.Content,{layout:`split`,align:`center`,gap:`xl`,className:`px-6 py-12 text-neutral-content lg:px-16`,children:[h(`div`,{className:`space-y-5`,children:[g(`span`,{className:`badge badge-soft badge-primary`,children:`Auto Overlay`}),g(I.Title,{children:`把背景图和可读性补丁一起交给 Hero 处理。`}),g(I.Description,{muted:!1,className:`text-neutral-content/80`,children:`当页面只是想快速搭一个带图主视觉区时，直接传 backgroundImage 和 overlay 就够了，不用再手写遮罩层节点。`})]}),g(`div`,{className:`w-full max-w-xs rounded-[1.5rem] border border-white/15 bg-black/30 p-5 backdrop-blur-sm`,children:h(I.Actions,{direction:`column`,align:`start`,children:[g(v,{color:`primary`,block:!0,children:`Start from template`}),g(v,{type:`outlined`,block:!0,children:`Read migration guide`})]})})]})}),code:`<Hero
  as={'section'}
  backgroundImage={'${R}'}
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
</Hero>`}),d,pe)});let me=r(`rue:component:anchor`);s(d,me),c(()=>{o(u(x,{title:`Surface and size presets`,tab:re,preview:()=>h(`div`,{className:`grid gap-4 xl:grid-cols-3`,children:[g(I,{tone:`base-200`,size:`sm`,className:`rounded-box`,children:g(I.Content,{className:`px-4 py-6`,children:h(`div`,{className:`space-y-3`,children:[g(`span`,{className:`badge badge-soft`,children:`base-200 / sm`}),g(I.Title,{size:`sm`,children:`Compact spotlight`}),g(I.Description,{size:`sm`,children:`适合列表页里的次级引导块。`})]})})}),g(I,{tone:`primary`,size:`md`,className:`rounded-box`,children:g(I.Content,{className:`px-4 py-6`,children:h(`div`,{className:`space-y-3`,children:[g(`span`,{className:`badge badge-soft badge-neutral`,children:`primary / md`}),g(I.Title,{size:`sm`,children:`Campaign push`}),g(I.Description,{size:`sm`,muted:!1,children:`颜色与前景色一起切换，页面里不用再单独补文字颜色。`})]})})}),g(I,{tone:`neutral`,size:`lg`,className:`rounded-box`,children:g(I.Content,{className:`px-4 py-6`,children:h(`div`,{className:`space-y-3`,children:[g(`span`,{className:`badge badge-outline badge-primary`,children:`neutral / lg`}),g(I.Title,{size:`sm`,children:`Full campaign frame`}),g(I.Description,{size:`sm`,muted:!1,children:`更高的尺寸适合首页首屏或专题页入口。`})]})})})]}),code:`<div className={'grid gap-4 xl:grid-cols-3'}>
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
</div>`}),d,me)});let W=e(`div`);s(d,W),a(W,`not-prose my-12 space-y-8`);let G=e(`section`);s(W,G),a(G,`space-y-2`);let K=e(`h2`);s(G,K),a(K,`text-2xl font-semibold`),s(K,n(`API`));let q=e(`p`);s(G,q),a(q,`text-sm opacity-70`),s(q,n(`推荐把外层背景和高度交给 Hero Root，把布局交给 Hero.Content，把标题、描述和 CTA 交给语义子组件。这样页面里仍然可以继续用 className 微调，但不会反复重写同一套结构。`));let J=e(`section`);s(W,J),a(J,`space-y-3`);let Y=e(`h3`);s(J,Y),a(Y,`text-xl font-semibold`),s(Y,n(`Hero`));let he=r(`rue:component:anchor`);s(J,he),c(()=>{o(u(z,{rows:ie}),J,he)});let X=e(`section`);s(W,X),a(X,`space-y-3`);let Z=e(`h3`);s(X,Z),a(Z,`text-xl font-semibold`),s(Z,n(`Hero.Content`));let ge=r(`rue:component:anchor`);s(X,ge),c(()=>{o(u(z,{rows:ae}),X,ge)});let Q=e(`section`);s(W,Q),a(Q,`space-y-3`);let $=e(`h3`);s(Q,$),a($,`text-xl font-semibold`),s($,n(`Hero parts`));let _e=r(`rue:component:anchor`);return s(Q,_e),c(()=>{o(u(z,{rows:oe}),Q,_e)}),l})}),l,f),l})};export{B as default};