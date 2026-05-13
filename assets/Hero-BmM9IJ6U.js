import{F as e,G as t,I as n,L as r,M as i,P as a,U as o,_t as s,bt as c,c as l,lt as u,pt as d,t as f,u as p}from"./vapor-runtime-D3a-68js.js";import{a as m,n as h}from"./vapor-helpers-vapor-DGjYaAZX.js";import{n as g,t as _}from"./src-BfQKH6_d.js";import{n as v}from"./SidebarPlaygroundDesign-vpnUkFCM.js";import{t as y}from"./button-DroKVuaU.js";import{t as b}from"./fieldset-gE9vdPU4.js";import{t as x}from"./input-D_T0Xhpz.js";import{t as S}from"./PreviewBlock-DZ28sFI7.js";var C={"base-100":`bg-base-100 text-base-content`,"base-200":`bg-base-200 text-base-content`,"base-300":`bg-base-300 text-base-content`,neutral:`bg-neutral text-neutral-content`,primary:`bg-primary text-primary-content`,secondary:`bg-secondary text-secondary-content`,accent:`bg-accent text-accent-content`,info:`bg-info text-info-content`,success:`bg-success text-success-content`,warning:`bg-warning text-warning-content`,error:`bg-error text-error-content`},w={sm:`min-h-80`,md:`min-h-96`,lg:`min-h-[30rem]`,xl:`min-h-[36rem]`,screen:`min-h-screen`},ee={center:`text-center`,split:`flex-col gap-10 lg:flex-row`,"split-reverse":`flex-col gap-10 lg:flex-row-reverse`},te={start:`items-start`,center:`items-center`,end:`items-end`},ne={start:`text-left`,center:`text-center`,end:`text-right`},re={sm:`gap-4`,md:`gap-6`,lg:`gap-10`,xl:`gap-14`},ie={"base-content":`bg-base-content`,neutral:`bg-neutral`,primary:`bg-primary`,secondary:`bg-secondary`,accent:`bg-accent`,info:`bg-info`,success:`bg-success`,warning:`bg-warning`,error:`bg-error`},T={sm:`text-3xl md:text-4xl`,md:`text-4xl md:text-5xl`,lg:`text-5xl md:text-6xl`,xl:`text-6xl md:text-7xl`},E={sm:`text-sm md:text-base`,md:`text-base md:text-lg`,lg:`text-lg md:text-xl`},D=(...e)=>e.filter(Boolean).join(` `),O=(e,t)=>{if(!(!e&&!t))return{...e,...t}},k=e=>{if(e)return e===!0?{}:e},A=e=>{if(e!=null){if(typeof e==`number`)return{opacity:e};switch(e){case`soft`:return{opacity:.25};case`strong`:return{opacity:.7};default:return{opacity:.45}}}},j=({backgroundImage:e,backgroundPosition:t,backgroundSize:n,backgroundRepeat:r})=>{if(e)return{backgroundImage:`url(${e})`,backgroundPosition:t??`center`,backgroundSize:n??`cover`,backgroundRepeat:r??`no-repeat`}},M=(e,t,n)=>{if(e){if(n)switch(e){case`center`:return`items-center sm:justify-center`;case`end`:return`items-end sm:justify-end`;default:return`items-start sm:justify-start`}if(t===`column`)switch(e){case`center`:return`items-center`;case`end`:return`items-end`;default:return`items-start`}switch(e){case`center`:return`justify-center`;case`end`:return`justify-end`;default:return`justify-start`}}},N=({as:e=`div`,className:t,children:n,style:r,tone:i=`default`,size:a,fullHeight:o,backgroundImage:s,backgroundPosition:c,backgroundSize:l,backgroundRepeat:u,overlay:d,...f})=>{let p=e,m=j({backgroundImage:s,backgroundPosition:c,backgroundSize:l,backgroundRepeat:u}),h=k(d);return g(p,{...f,style:O(r,m),className:D(`hero`,i===`default`?void 0:C[i],o?w.screen:a?w[a]:void 0,t),children:[h?_(F,{...h}):null,n]})},P=({as:e=`div`,className:t,children:n,layout:r=`inherit`,align:i,textAlign:a,gap:o,...s})=>_(e,{...s,className:D(`hero-content`,r===`inherit`?void 0:ee[r],i?te[i]:void 0,a?ne[a]:void 0,o?re[o]:void 0,t),children:n}),F=({as:e=`div`,className:t,children:n,tone:r=`default`,opacity:i,blur:a,style:o,...s})=>_(e,{...s,style:O(o,A(i)),className:D(`hero-overlay`,r===`default`?void 0:ie[r],a?`backdrop-blur-sm`:void 0,t),children:n}),I=Object.assign(N,{Content:P,Overlay:F,Title:({as:e=`h1`,className:t,children:n,size:r=`lg`,balanced:i=!0,...a})=>_(e,{...a,className:D(`font-bold tracking-tight`,T[r],i?`text-balance`:void 0,t),children:n}),Description:({as:e=`p`,className:t,children:n,size:r=`md`,muted:i=!0,...a})=>_(e,{...a,className:D(`max-w-2xl leading-relaxed`,E[r],i?`opacity-80`:void 0,t),children:n}),Actions:({as:e=`div`,className:t,children:n,align:r,direction:i=`row`,stackOnMobile:a=!1,...o})=>_(e,{...o,className:D(`flex gap-3`,a?`flex-col sm:flex-row sm:flex-wrap`:i===`column`?`flex-col`:`flex-row flex-wrap`,M(r,i,a),t),children:n})}),L=`https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp`,R=`https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp`,z=s=>p(()=>{let u=n(`div`);t(u,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=n(`table`);i(u,f),t(f,`table table-zebra`);let m=n(`thead`);i(f,m);let g=n(`tr`);i(m,g);let _=n(`th`);i(g,_),i(_,r(`属性`));let v=n(`th`);i(g,v),i(v,r(`说明`));let y=n(`th`);i(g,y),i(y,r(`类型`));let b=n(`th`);i(g,b),i(b,r(`默认值`));let x=n(`tbody`);i(f,x);let S=a(`rue:list:start`),C=a(`rue:list:end`);i(x,S),i(x,C);let w=new Map;return c(()=>{w=h({items:s.rows||[],getKey:(e,t)=>e.prop,elements:w,parent:x,before:C,singleRoot:!0,trackIndex:!1,start:S,renderItem:(t,r,s,u,f)=>{l(p(()=>{let r=e(),s=n(`tr`);i(r,s),c(()=>{o(s,`key`,String(t.prop))});let u=n(`td`);i(s,u);let f=n(`code`);i(u,f);let p=a(`rue:slot:anchor`);i(f,p),c(()=>{let e=t.prop;d(()=>l(e,f,p))});let m=n(`td`);i(s,m);let h=a(`rue:slot:anchor`);i(m,h),c(()=>{let e=t.description;d(()=>l(e,m,h))});let g=n(`td`);i(s,g);let _=n(`code`);i(g,_);let v=a(`rue:slot:anchor`);i(_,v),c(()=>{let e=t.type;d(()=>l(e,_,v))});let y=n(`td`);i(s,y);let b=n(`code`);i(y,b);let x=a(`rue:slot:anchor`);return i(b,x),c(()=>{let e=t.defaultValue;d(()=>l(e,b,x))}),r}),r,s)}})}),u}),ae=[{prop:`as`,description:`指定 Hero 根节点标签`,type:`string`,defaultValue:`div`},{prop:`backgroundImage`,description:`直接设置背景图 URL，组件会自动写入内联背景样式`,type:`string`,defaultValue:`-`},{prop:`backgroundPosition`,description:`背景图定位`,type:`string`,defaultValue:`center`},{prop:`backgroundRepeat`,description:`背景图重复方式`,type:`string`,defaultValue:`no-repeat`},{prop:`backgroundSize`,description:`背景图尺寸`,type:`string`,defaultValue:`cover`},{prop:`fullHeight`,description:`直接切换到全屏高度，等价于 screen 尺寸`,type:`boolean`,defaultValue:`false`},{prop:`overlay`,description:`开启自动遮罩，也支持直接传入 Hero.Overlay 同构配置对象`,type:`boolean | HeroOverlayProps`,defaultValue:`false`},{prop:`size`,description:`Hero 区块高度预设`,type:`sm | md | lg | xl | screen`,defaultValue:`-`},{prop:`tone`,description:`Root 背景与前景色语义层`,type:`default | base-100 | base-200 | base-300 | neutral | primary | secondary | accent | info | success | warning | error`,defaultValue:`default`}],oe=[{prop:`Hero.Content.align`,description:`控制内容区交叉轴对齐`,type:`start | center | end`,defaultValue:`-`},{prop:`Hero.Content.as`,description:`指定内容区标签`,type:`string`,defaultValue:`div`},{prop:`Hero.Content.gap`,description:`内容区间距预设，适合覆盖 split 默认间距`,type:`sm | md | lg | xl`,defaultValue:`-`},{prop:`Hero.Content.layout`,description:`语义布局预设，覆盖居中、分栏与反向分栏`,type:`inherit | center | split | split-reverse`,defaultValue:`inherit`},{prop:`Hero.Content.textAlign`,description:`文字对齐方式`,type:`start | center | end`,defaultValue:`-`}],se=[{prop:`Hero.Overlay.blur`,description:`为遮罩添加轻量模糊，适合背景图场景`,type:`boolean`,defaultValue:`false`},{prop:`Hero.Overlay.opacity`,description:`遮罩透明度，支持 soft / medium / strong 或数字`,type:`soft | medium | strong | number`,defaultValue:`-`},{prop:`Hero.Overlay.tone`,description:`遮罩色调，可配合自动 overlay 一起用`,type:`default | base-content | neutral | primary | secondary | accent | info | success | warning | error`,defaultValue:`default`},{prop:`Hero.Title.balanced`,description:`标题默认启用 text-balance，减少过长标题断行问题`,type:`boolean`,defaultValue:`true`},{prop:`Hero.Title.size`,description:`标题字号预设`,type:`sm | md | lg | xl`,defaultValue:`lg`},{prop:`Hero.Description.muted`,description:`描述文本默认降低一点对比度`,type:`boolean`,defaultValue:`true`},{prop:`Hero.Description.size`,description:`描述字号预设`,type:`sm | md | lg`,defaultValue:`md`},{prop:`Hero.Actions.align`,description:`操作区对齐方式，会根据横排或竖排自动切换到 justify / items`,type:`start | center | end`,defaultValue:`-`},{prop:`Hero.Actions.direction`,description:`操作区排列方向`,type:`row | column`,defaultValue:`row`},{prop:`Hero.Actions.stackOnMobile`,description:`移动端堆叠、桌面端横排，适合 CTA 组合`,type:`boolean`,defaultValue:`false`}],B=()=>{let{tabSemantic:h,tabCentered:C,tabFigure:w,tabReverse:ee,tabForm:te,tabOverlay:ne,tabOverlayAuto:re,tabPresets:ie}=m(`useSetup:0:0`,()=>s(()=>({tabSemantic:m(`ref:1:0`,()=>u(`preview`)),tabCentered:m(`ref:1:1`,()=>u(`preview`)),tabFigure:m(`ref:1:2`,()=>u(`preview`)),tabReverse:m(`ref:1:3`,()=>u(`preview`)),tabForm:m(`ref:1:4`,()=>u(`preview`)),tabOverlay:m(`ref:1:5`,()=>u(`preview`)),tabOverlayAuto:m(`ref:1:6`,()=>u(`preview`)),tabPresets:m(`ref:1:7`,()=>u(`preview`))})));return p(()=>{let s=e(),u=a(`rue:component:anchor`);return i(s,u),l(f(v,{children:p(()=>{let s=e(),u=n(`div`);i(s,u),t(u,`max-w-none prose prose-sm md:prose-base`);let p=n(`h1`);i(u,p),i(p,r(`Hero 主视觉区`));let m=n(`p`);i(u,m),t(m,`mt-3 mb-3 text-sm`),i(m,r(`Hero 现在不只是一个样式壳。Root 负责背景、尺寸和遮罩，Content 负责布局，Title / Description / Actions 负责最常见的文案骨架，剩下的局部视觉继续交给 className 微调。`));let v=n(`p`);i(u,v),t(v,`mt-0 mb-4 text-sm`),i(v,r(`没有可以直接对照的同名标准组件，所以这次的增强重点放在组合能力和语义 API 上：保留 Rue 自己的视觉语言，但把高频搭建动作从页面里收回到组件里。`));let T=n(`div`);i(u,T),t(T,`text-sm`);let E=n(`a`);i(T,E),o(E,`href`,`https://daisyui.com/components/hero/`),o(E,`target`,`_blank`),i(E,r(`查看 Hero 静态样式`));let D=n(`div`);i(u,D),t(D,`not-prose mt-6 grid gap-4 lg:grid-cols-3`);let O=n(`div`);i(D,O),t(O,`rounded-[1.5rem] border border-base-300 bg-base-100 p-5 shadow-sm`);let k=n(`div`);i(O,k),t(k,`text-xs uppercase tracking-[0.28em] opacity-60`),i(k,r(`Root`));let A=n(`div`);i(O,A),t(A,`mt-3 text-lg font-semibold`),i(A,r(`Background, size, overlay`));let j=n(`p`);i(O,j),t(j,`mt-2 text-sm opacity-70`),i(j,r(`用 tone、size、backgroundImage、overlay 先把 Hero 的外层骨架搭起来。`));let M=n(`div`);i(D,M),t(M,`rounded-[1.5rem] border border-base-300 bg-base-100 p-5 shadow-sm`);let N=n(`div`);i(M,N),t(N,`text-xs uppercase tracking-[0.28em] opacity-60`),i(N,r(`Content`));let P=n(`div`);i(M,P),t(P,`mt-3 text-lg font-semibold`),i(P,r(`Split, reverse, center`));let F=n(`p`);i(M,F),t(F,`mt-2 text-sm opacity-70`),i(F,r(`用 Hero.Content.layout 切换常见主视觉布局，再按需叠加 align、textAlign 和 gap。`));let B=n(`div`);i(D,B),t(B,`rounded-[1.5rem] border border-base-300 bg-base-100 p-5 shadow-sm`);let V=n(`div`);i(B,V),t(V,`text-xs uppercase tracking-[0.28em] opacity-60`),i(V,r(`Parts`));let H=n(`div`);i(B,H),t(H,`mt-3 text-lg font-semibold`),i(H,r(`Readable copy blocks`));let U=n(`p`);i(B,U),t(U,`mt-2 text-sm opacity-70`),i(U,r(`标题、描述和操作区都给了语义化入口，页面里的重复样式可以明显减少。`));let ce=a(`rue:component:anchor`);i(u,ce),c(()=>{let e=f(S,{title:`Semantic starter`,tab:h,preview:()=>_(I,{tone:`base-100`,size:`xl`,className:`overflow-hidden rounded-[2rem] border border-base-300 bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10`,children:g(I.Content,{layout:`split`,align:`center`,gap:`xl`,className:`px-6 py-10 lg:px-16`,children:[g(`div`,{className:`space-y-5`,children:[_(`span`,{className:`badge badge-outline badge-primary`,children:`Rue Design Hero`}),_(I.Title,{children:`Ship landing sections without rebuilding layout scaffolding.`}),_(I.Description,{children:`Hero 现在把 surface、height、background image、overlay 和 action 布局都提升成了语义 API。页面可以更聚焦在内容，而不是重复拼装容器类名。`}),g(I.Actions,{stackOnMobile:!0,children:[_(y,{color:`primary`,children:`Get Started`}),_(y,{type:`outlined`,children:`Browse patterns`})]})]}),_(`div`,{className:`grid w-full max-w-md gap-4`,children:g(`div`,{className:`rounded-[1.5rem] border border-base-300 bg-base-100/90 p-5 shadow-xl`,children:[_(`p`,{className:`text-xs uppercase tracking-[0.3em] opacity-60`,children:`Composition`}),g(`div`,{className:`mt-4 space-y-3`,children:[g(`div`,{className:`rounded-2xl bg-base-200 p-4`,children:[_(`div`,{className:`text-sm font-semibold`,children:`Root handles surface`}),_(`p`,{className:`mt-1 text-sm opacity-70`,children:`tone、size、backgroundImage、overlay 负责外层骨架。`})]}),g(`div`,{className:`rounded-2xl bg-base-200 p-4`,children:[_(`div`,{className:`text-sm font-semibold`,children:`Content handles layout`}),_(`p`,{className:`mt-1 text-sm opacity-70`,children:`layout、align、textAlign、gap 负责组织主视觉内容。`})]})]})]})})]})}),code:`<Hero
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
</Hero>`});d(()=>l(e,u,ce))});let le=a(`rue:component:anchor`);i(u,le),c(()=>{let e=f(S,{title:`Centered hero`,tab:C,preview:()=>_(I,{tone:`base-200`,size:`lg`,className:`rounded-box`,children:_(I.Content,{layout:`center`,textAlign:`center`,gap:`md`,className:`px-6 py-10`,children:g(`div`,{className:`max-w-md space-y-4`,children:[_(I.Title,{children:`Hello there`}),_(I.Description,{children:`Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.`}),g(I.Actions,{align:`center`,stackOnMobile:!0,children:[_(y,{color:`primary`,children:`Get Started`}),_(y,{type:`outlined`,children:`View Docs`})]})]})})}),code:`<Hero tone={'base-200'} size={'lg'} className={'rounded-box'}>
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
</Hero>`});d(()=>l(e,u,le))});let ue=a(`rue:component:anchor`);i(u,ue),c(()=>{let e=f(S,{title:`Hero with figure`,tab:w,preview:()=>_(I,{tone:`base-200`,size:`lg`,className:`rounded-box`,children:g(I.Content,{layout:`split`,align:`center`,className:`px-6 py-10`,children:[_(`img`,{src:L,className:`max-w-sm rounded-lg shadow-2xl`,alt:`Hero figure`}),g(`div`,{children:[_(I.Title,{children:`Box Office News!`}),_(I.Description,{children:`Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi.`}),g(I.Actions,{className:`mt-6`,children:[_(y,{color:`primary`,children:`Get Started`}),_(y,{type:`text`,children:`View details`})]})]})]})}),code:`<Hero tone={'base-200'} size={'lg'} className={'rounded-box'}>
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
</Hero>`});d(()=>l(e,u,ue))});let de=a(`rue:component:anchor`);i(u,de),c(()=>{let e=f(S,{title:`Hero with figure but reverse order`,tab:ee,preview:()=>_(I,{tone:`base-100`,size:`lg`,className:`rounded-box border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-accent/10`,children:g(I.Content,{layout:`split-reverse`,align:`center`,className:`px-6 py-10`,children:[_(`img`,{src:L,className:`max-w-sm rounded-lg shadow-2xl`,alt:`Hero reverse figure`}),g(`div`,{children:[_(`span`,{className:`badge badge-soft badge-accent`,children:`Reverse layout`}),_(I.Title,{className:`mt-4`,children:`Box Office News!`}),_(I.Description,{children:`Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi.`}),g(I.Actions,{className:`mt-6`,children:[_(y,{color:`primary`,children:`Get Started`}),_(y,{type:`outlined`,children:`See release plan`})]})]})]})}),code:`<Hero
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
</Hero>`});d(()=>l(e,u,de))});let fe=a(`rue:component:anchor`);i(u,fe),c(()=>{let e=f(S,{title:`Hero with form`,tab:te,preview:()=>_(I,{tone:`base-200`,size:`lg`,className:`rounded-box`,children:g(I.Content,{layout:`split-reverse`,align:`center`,className:`px-6 py-10`,children:[g(`div`,{className:`space-y-4 text-center lg:text-left`,children:[_(`span`,{className:`badge badge-outline`,children:`Members only`}),_(I.Title,{children:`Login now!`}),_(I.Description,{children:`Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi.`})]}),_(`div`,{className:`card w-full max-w-sm shrink-0 bg-base-100 shadow-2xl`,children:_(`div`,{className:`card-body`,children:g(b,{children:[_(b.Label,{children:`Email`}),_(x,{type:`email`,placeholder:`Email`}),_(b.Label,{children:`Password`}),_(x,{type:`password`,placeholder:`Password`}),_(`div`,{children:_(`a`,{className:`link link-hover`,children:`Forgot password?`})}),_(y,{color:`neutral`,className:`mt-4`,children:`Login`})]})})})]})}),code:`<Hero tone={'base-200'} size={'lg'} className={'rounded-box'}>
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
</Hero>`});d(()=>l(e,u,fe))});let pe=a(`rue:component:anchor`);i(u,pe),c(()=>{let e=f(S,{title:`Hero with overlay image`,tab:ne,preview:()=>g(I,{backgroundImage:R,size:`lg`,className:`rounded-box`,children:[_(I.Overlay,{opacity:`medium`,className:`rounded-box`}),_(I.Content,{layout:`center`,textAlign:`center`,className:`px-6 py-10 text-neutral-content`,children:g(`div`,{className:`max-w-md space-y-5`,children:[_(I.Title,{children:`Hello there`}),_(I.Description,{muted:!1,className:`text-neutral-content/80`,children:`Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi.`}),g(I.Actions,{align:`center`,stackOnMobile:!0,children:[_(y,{color:`primary`,children:`Get Started`}),_(y,{type:`outlined`,children:`Read story`})]})]})})]}),code:`<Hero backgroundImage={'${R}'} size={'lg'} className={'rounded-box'}>
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
</Hero>`});d(()=>l(e,u,pe))});let me=a(`rue:component:anchor`);i(u,me),c(()=>{let e=f(S,{title:`Hero with automatic overlay`,tab:re,preview:()=>_(I,{as:`section`,backgroundImage:R,size:`xl`,overlay:{tone:`base-content`,opacity:`medium`,blur:!0,className:`rounded-[2rem]`},className:`overflow-hidden rounded-[2rem]`,children:g(I.Content,{layout:`split`,align:`center`,gap:`xl`,className:`px-6 py-12 text-neutral-content lg:px-16`,children:[g(`div`,{className:`space-y-5`,children:[_(`span`,{className:`badge badge-soft badge-primary`,children:`Auto Overlay`}),_(I.Title,{children:`把背景图和可读性补丁一起交给 Hero 处理。`}),_(I.Description,{muted:!1,className:`text-neutral-content/80`,children:`当页面只是想快速搭一个带图主视觉区时，直接传 backgroundImage 和 overlay 就够了，不用再手写遮罩层节点。`})]}),_(`div`,{className:`w-full max-w-xs rounded-[1.5rem] border border-white/15 bg-black/30 p-5 backdrop-blur-sm`,children:g(I.Actions,{direction:`column`,align:`start`,children:[_(y,{color:`primary`,block:!0,children:`Start from template`}),_(y,{type:`outlined`,block:!0,children:`Read migration guide`})]})})]})}),code:`<Hero
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
</Hero>`});d(()=>l(e,u,me))});let he=a(`rue:component:anchor`);i(u,he),c(()=>{let e=f(S,{title:`Surface and size presets`,tab:ie,preview:()=>g(`div`,{className:`grid gap-4 xl:grid-cols-3`,children:[_(I,{tone:`base-200`,size:`sm`,className:`rounded-box`,children:_(I.Content,{className:`px-4 py-6`,children:g(`div`,{className:`space-y-3`,children:[_(`span`,{className:`badge badge-soft`,children:`base-200 / sm`}),_(I.Title,{size:`sm`,children:`Compact spotlight`}),_(I.Description,{size:`sm`,children:`适合列表页里的次级引导块。`})]})})}),_(I,{tone:`primary`,size:`md`,className:`rounded-box`,children:_(I.Content,{className:`px-4 py-6`,children:g(`div`,{className:`space-y-3`,children:[_(`span`,{className:`badge badge-soft badge-neutral`,children:`primary / md`}),_(I.Title,{size:`sm`,children:`Campaign push`}),_(I.Description,{size:`sm`,muted:!1,children:`颜色与前景色一起切换，页面里不用再单独补文字颜色。`})]})})}),_(I,{tone:`neutral`,size:`lg`,className:`rounded-box`,children:_(I.Content,{className:`px-4 py-6`,children:g(`div`,{className:`space-y-3`,children:[_(`span`,{className:`badge badge-outline badge-primary`,children:`neutral / lg`}),_(I.Title,{size:`sm`,children:`Full campaign frame`}),_(I.Description,{size:`sm`,muted:!1,children:`更高的尺寸适合首页首屏或专题页入口。`})]})})})]}),code:`<div className={'grid gap-4 xl:grid-cols-3'}>
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
</div>`});d(()=>l(e,u,he))});let W=n(`div`);i(u,W),t(W,`not-prose my-12 space-y-8`);let G=n(`section`);i(W,G),t(G,`space-y-2`);let K=n(`h2`);i(G,K),t(K,`text-2xl font-semibold`),i(K,r(`API`));let q=n(`p`);i(G,q),t(q,`text-sm opacity-70`),i(q,r(`推荐把外层背景和高度交给 Hero Root，把布局交给 Hero.Content，把标题、描述和 CTA 交给语义子组件。这样页面里仍然可以继续用 className 微调，但不会反复重写同一套结构。`));let J=n(`section`);i(W,J),t(J,`space-y-3`);let Y=n(`h3`);i(J,Y),t(Y,`text-xl font-semibold`),i(Y,r(`Hero`));let ge=a(`rue:component:anchor`);i(J,ge),c(()=>{let e=f(z,{rows:ae});d(()=>l(e,J,ge))});let X=n(`section`);i(W,X),t(X,`space-y-3`);let Z=n(`h3`);i(X,Z),t(Z,`text-xl font-semibold`),i(Z,r(`Hero.Content`));let _e=a(`rue:component:anchor`);i(X,_e),c(()=>{let e=f(z,{rows:oe});d(()=>l(e,X,_e))});let Q=n(`section`);i(W,Q),t(Q,`space-y-3`);let $=n(`h3`);i(Q,$),t($,`text-xl font-semibold`),i($,r(`Hero parts`));let ve=a(`rue:component:anchor`);return i(Q,ve),c(()=>{let e=f(z,{rows:se});d(()=>l(e,Q,ve))}),s})}),s,u),s})};export{B as default};