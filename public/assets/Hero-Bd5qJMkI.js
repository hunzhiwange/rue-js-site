import{F as e,I as t,K as n,L as r,N as i,R as a,W as o,d as s,dt as c,ht as l,l as u,st as d,t as f,vt as p}from"./vapor-runtime-BuwLbCGk.js";import{a as m,n as h}from"./vapor-helpers-vapor-Bly5xJie.js";import{n as g,t as _}from"./src-BQwLQD8R.js";import{n as v}from"./SidebarPlaygroundDesign-SQXYHI-q.js";import{t as y}from"./button-BlewusST.js";import{t as b}from"./fieldset-BtRZ016d.js";import{t as x}from"./input-BU-TVJFw.js";import{t as S}from"./PreviewBlock-Cks1b4IL.js";var C={"base-100":`bg-base-100 text-base-content`,"base-200":`bg-base-200 text-base-content`,"base-300":`bg-base-300 text-base-content`,neutral:`bg-neutral text-neutral-content`,primary:`bg-primary text-primary-content`,secondary:`bg-secondary text-secondary-content`,accent:`bg-accent text-accent-content`,info:`bg-info text-info-content`,success:`bg-success text-success-content`,warning:`bg-warning text-warning-content`,error:`bg-error text-error-content`},w={sm:`min-h-80`,md:`min-h-96`,lg:`min-h-[30rem]`,xl:`min-h-[36rem]`,screen:`min-h-screen`},T={center:`text-center`,split:`flex-col gap-10 lg:flex-row`,"split-reverse":`flex-col gap-10 lg:flex-row-reverse`},ee={start:`items-start`,center:`items-center`,end:`items-end`},te={start:`text-left`,center:`text-center`,end:`text-right`},ne={sm:`gap-4`,md:`gap-6`,lg:`gap-10`,xl:`gap-14`},re={"base-content":`bg-base-content`,neutral:`bg-neutral`,primary:`bg-primary`,secondary:`bg-secondary`,accent:`bg-accent`,info:`bg-info`,success:`bg-success`,warning:`bg-warning`,error:`bg-error`},E={sm:`text-3xl md:text-4xl`,md:`text-4xl md:text-5xl`,lg:`text-5xl md:text-6xl`,xl:`text-6xl md:text-7xl`},D={sm:`text-sm md:text-base`,md:`text-base md:text-lg`,lg:`text-lg md:text-xl`},O=(...e)=>e.filter(Boolean).join(` `),k=(e,t)=>{if(!(!e&&!t))return{...e,...t}},A=e=>{if(e)return e===!0?{}:e},j=e=>{if(e!=null){if(typeof e==`number`)return{opacity:e};switch(e){case`soft`:return{opacity:.25};case`strong`:return{opacity:.7};default:return{opacity:.45}}}},M=({backgroundImage:e,backgroundPosition:t,backgroundSize:n,backgroundRepeat:r})=>{if(e)return{backgroundImage:`url(${e})`,backgroundPosition:t??`center`,backgroundSize:n??`cover`,backgroundRepeat:r??`no-repeat`}},N=(e,t,n)=>{if(e){if(n)switch(e){case`center`:return`items-center sm:justify-center`;case`end`:return`items-end sm:justify-end`;default:return`items-start sm:justify-start`}if(t===`column`)switch(e){case`center`:return`items-center`;case`end`:return`items-end`;default:return`items-start`}switch(e){case`center`:return`justify-center`;case`end`:return`justify-end`;default:return`justify-start`}}},P=({as:e=`div`,className:t,children:n,style:r,tone:i=`default`,size:a,fullHeight:o,backgroundImage:s,backgroundPosition:c,backgroundSize:l,backgroundRepeat:u,overlay:d,...f})=>{let p=e,m=M({backgroundImage:s,backgroundPosition:c,backgroundSize:l,backgroundRepeat:u}),h=A(d);return g(p,{...f,style:k(r,m),className:O(`hero`,i===`default`?void 0:C[i],o?w.screen:a?w[a]:void 0,t),children:[h?_(I,{...h}):null,n]})},F=({as:e=`div`,className:t,children:n,layout:r=`inherit`,align:i,textAlign:a,gap:o,...s})=>_(e,{...s,className:O(`hero-content`,r===`inherit`?void 0:T[r],i?ee[i]:void 0,a?te[a]:void 0,o?ne[o]:void 0,t),children:n}),I=({as:e=`div`,className:t,children:n,tone:r=`default`,opacity:i,blur:a,style:o,...s})=>_(e,{...s,style:k(o,j(i)),className:O(`hero-overlay`,r===`default`?void 0:re[r],a?`backdrop-blur-sm`:void 0,t),children:n}),L=Object.assign(P,{Content:F,Overlay:I,Title:({as:e=`h1`,className:t,children:n,size:r=`lg`,balanced:i=!0,...a})=>_(e,{...a,className:O(`font-bold tracking-tight`,E[r],i?`text-balance`:void 0,t),children:n}),Description:({as:e=`p`,className:t,children:n,size:r=`md`,muted:i=!0,...a})=>_(e,{...a,className:O(`max-w-2xl leading-relaxed`,D[r],i?`opacity-80`:void 0,t),children:n}),Actions:({as:e=`div`,className:t,children:n,align:r,direction:i=`row`,stackOnMobile:a=!1,...o})=>_(e,{...o,className:O(`flex gap-3`,a?`flex-col sm:flex-row sm:flex-wrap`:i===`column`?`flex-col`:`flex-row flex-wrap`,N(r,i,a),t),children:n})}),R=`https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp`,z=`https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp`,B=l=>s(d=>{let f=r(`div`,d);n(f,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=r(`table`,f);i(f,m),n(m,`table table-zebra`);let g=r(`thead`,m);i(m,g);let _=r(`tr`,g);i(g,_);let v=r(`th`,_);i(_,v),i(v,a(`属性`));let y=r(`th`,_);i(_,y),i(y,a(`说明`));let b=r(`th`,_);i(_,b),i(b,a(`类型`));let x=r(`th`,_);i(_,x),i(x,a(`默认值`));let S=r(`tbody`,m);i(m,S);let C=e(`rue:list:start`),w=e(`rue:list:end`);i(S,C),i(S,w);let T=new Map;return p(()=>{T=h({items:l.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,a,l,d,f)=>{u(s(()=>{let a=t(),s=r(`tr`,a);i(a,s),p(()=>{o(s,`key`,String(n.prop))});let l=r(`td`,s);i(s,l);let d=r(`code`,l);i(l,d);let f=e(`rue:slot:anchor`);i(d,f),p(()=>{let e=n.prop;c(()=>u(e,d,f))});let m=r(`td`,s);i(s,m);let h=e(`rue:slot:anchor`);i(m,h),p(()=>{let e=n.description;c(()=>u(e,m,h))});let g=r(`td`,s);i(s,g);let _=r(`code`,g);i(g,_);let v=e(`rue:slot:anchor`);i(_,v),p(()=>{let e=n.type;c(()=>u(e,_,v))});let y=r(`td`,s);i(s,y);let b=r(`code`,y);i(y,b);let x=e(`rue:slot:anchor`);return i(b,x),p(()=>{let e=n.defaultValue;c(()=>u(e,b,x))}),a}),a,l)}})}),f}),ie=[{prop:`as`,description:`指定 Hero 根节点标签`,type:`string`,defaultValue:`div`},{prop:`backgroundImage`,description:`直接设置背景图 URL，组件会自动写入内联背景样式`,type:`string`,defaultValue:`-`},{prop:`backgroundPosition`,description:`背景图定位`,type:`string`,defaultValue:`center`},{prop:`backgroundRepeat`,description:`背景图重复方式`,type:`string`,defaultValue:`no-repeat`},{prop:`backgroundSize`,description:`背景图尺寸`,type:`string`,defaultValue:`cover`},{prop:`fullHeight`,description:`直接切换到全屏高度，等价于 screen 尺寸`,type:`boolean`,defaultValue:`false`},{prop:`overlay`,description:`开启自动遮罩，也支持直接传入 Hero.Overlay 同构配置对象`,type:`boolean | HeroOverlayProps`,defaultValue:`false`},{prop:`size`,description:`Hero 区块高度预设`,type:`sm | md | lg | xl | screen`,defaultValue:`-`},{prop:`tone`,description:`Root 背景与前景色语义层`,type:`default | base-100 | base-200 | base-300 | neutral | primary | secondary | accent | info | success | warning | error`,defaultValue:`default`}],ae=[{prop:`Hero.Content.align`,description:`控制内容区交叉轴对齐`,type:`start | center | end`,defaultValue:`-`},{prop:`Hero.Content.as`,description:`指定内容区标签`,type:`string`,defaultValue:`div`},{prop:`Hero.Content.gap`,description:`内容区间距预设，适合覆盖 split 默认间距`,type:`sm | md | lg | xl`,defaultValue:`-`},{prop:`Hero.Content.layout`,description:`语义布局预设，覆盖居中、分栏与反向分栏`,type:`inherit | center | split | split-reverse`,defaultValue:`inherit`},{prop:`Hero.Content.textAlign`,description:`文字对齐方式`,type:`start | center | end`,defaultValue:`-`}],oe=[{prop:`Hero.Overlay.blur`,description:`为遮罩添加轻量模糊，适合背景图场景`,type:`boolean`,defaultValue:`false`},{prop:`Hero.Overlay.opacity`,description:`遮罩透明度，支持 soft / medium / strong 或数字`,type:`soft | medium | strong | number`,defaultValue:`-`},{prop:`Hero.Overlay.tone`,description:`遮罩色调，可配合自动 overlay 一起用`,type:`default | base-content | neutral | primary | secondary | accent | info | success | warning | error`,defaultValue:`default`},{prop:`Hero.Title.balanced`,description:`标题默认启用 text-balance，减少过长标题断行问题`,type:`boolean`,defaultValue:`true`},{prop:`Hero.Title.size`,description:`标题字号预设`,type:`sm | md | lg | xl`,defaultValue:`lg`},{prop:`Hero.Description.muted`,description:`描述文本默认降低一点对比度`,type:`boolean`,defaultValue:`true`},{prop:`Hero.Description.size`,description:`描述字号预设`,type:`sm | md | lg`,defaultValue:`md`},{prop:`Hero.Actions.align`,description:`操作区对齐方式，会根据横排或竖排自动切换到 justify / items`,type:`start | center | end`,defaultValue:`-`},{prop:`Hero.Actions.direction`,description:`操作区排列方向`,type:`row | column`,defaultValue:`row`},{prop:`Hero.Actions.stackOnMobile`,description:`移动端堆叠、桌面端横排，适合 CTA 组合`,type:`boolean`,defaultValue:`false`}],V=()=>{let{tabSemantic:h,tabCentered:C,tabFigure:w,tabReverse:T,tabForm:ee,tabOverlay:te,tabOverlayAuto:ne,tabPresets:re}=m(`useSetup:0:0`,()=>l(()=>({tabSemantic:m(`ref:1:0`,()=>d(`preview`)),tabCentered:m(`ref:1:1`,()=>d(`preview`)),tabFigure:m(`ref:1:2`,()=>d(`preview`)),tabReverse:m(`ref:1:3`,()=>d(`preview`)),tabForm:m(`ref:1:4`,()=>d(`preview`)),tabOverlay:m(`ref:1:5`,()=>d(`preview`)),tabOverlayAuto:m(`ref:1:6`,()=>d(`preview`)),tabPresets:m(`ref:1:7`,()=>d(`preview`))})));return s(l=>{let d=t(),m=e(`rue:component:anchor`);return i(d,m),u(f(v,{children:s(()=>{let s=t(),l=r(`div`,s);i(s,l),n(l,`max-w-none prose prose-sm md:prose-base`);let d=r(`h1`,l);i(l,d),i(d,a(`Hero 主视觉区`));let m=r(`p`,l);i(l,m),n(m,`mt-3 mb-3 text-sm`),i(m,a(`Hero 现在不只是一个样式壳。Root 负责背景、尺寸和遮罩，Content 负责布局，Title / Description / Actions 负责最常见的文案骨架，剩下的局部视觉继续交给 className 微调。`));let v=r(`p`,l);i(l,v),n(v,`mt-0 mb-4 text-sm`),i(v,a(`没有可以直接对照的同名标准组件，所以这次的增强重点放在组合能力和语义 API 上：保留 Rue 自己的视觉语言，但把高频搭建动作从页面里收回到组件里。`));let E=r(`div`,l);i(l,E),n(E,`text-sm`);let D=r(`a`,E);i(E,D),o(D,`href`,`https://daisyui.com/components/hero/`),o(D,`target`,`_blank`),i(D,a(`查看 Hero 静态样式`));let O=r(`div`,l);i(l,O),n(O,`not-prose mt-6 grid gap-4 lg:grid-cols-3`);let k=r(`div`,O);i(O,k),n(k,`rounded-[1.5rem] border border-base-300 bg-base-100 p-5 shadow-sm`);let A=r(`div`,k);i(k,A),n(A,`text-xs uppercase tracking-[0.28em] opacity-60`),i(A,a(`Root`));let j=r(`div`,k);i(k,j),n(j,`mt-3 text-lg font-semibold`),i(j,a(`Background, size, overlay`));let M=r(`p`,k);i(k,M),n(M,`mt-2 text-sm opacity-70`),i(M,a(`用 tone、size、backgroundImage、overlay 先把 Hero 的外层骨架搭起来。`));let N=r(`div`,O);i(O,N),n(N,`rounded-[1.5rem] border border-base-300 bg-base-100 p-5 shadow-sm`);let P=r(`div`,N);i(N,P),n(P,`text-xs uppercase tracking-[0.28em] opacity-60`),i(P,a(`Content`));let F=r(`div`,N);i(N,F),n(F,`mt-3 text-lg font-semibold`),i(F,a(`Split, reverse, center`));let I=r(`p`,N);i(N,I),n(I,`mt-2 text-sm opacity-70`),i(I,a(`用 Hero.Content.layout 切换常见主视觉布局，再按需叠加 align、textAlign 和 gap。`));let V=r(`div`,O);i(O,V),n(V,`rounded-[1.5rem] border border-base-300 bg-base-100 p-5 shadow-sm`);let H=r(`div`,V);i(V,H),n(H,`text-xs uppercase tracking-[0.28em] opacity-60`),i(H,a(`Parts`));let U=r(`div`,V);i(V,U),n(U,`mt-3 text-lg font-semibold`),i(U,a(`Readable copy blocks`));let W=r(`p`,V);i(V,W),n(W,`mt-2 text-sm opacity-70`),i(W,a(`标题、描述和操作区都给了语义化入口，页面里的重复样式可以明显减少。`));let se=e(`rue:component:anchor`);i(l,se),p(()=>{let e=f(S,{title:`Semantic starter`,tab:h,preview:()=>_(L,{tone:`base-100`,size:`xl`,className:`overflow-hidden rounded-[2rem] border border-base-300 bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10`,children:g(L.Content,{layout:`split`,align:`center`,gap:`xl`,className:`px-6 py-10 lg:px-16`,children:[g(`div`,{className:`space-y-5`,children:[_(`span`,{className:`badge badge-outline badge-primary`,children:`Rue Design Hero`}),_(L.Title,{children:`Ship landing sections without rebuilding layout scaffolding.`}),_(L.Description,{children:`Hero 现在把 surface、height、background image、overlay 和 action 布局都提升成了语义 API。页面可以更聚焦在内容，而不是重复拼装容器类名。`}),g(L.Actions,{stackOnMobile:!0,children:[_(y,{color:`primary`,children:`Get Started`}),_(y,{type:`outlined`,children:`Browse patterns`})]})]}),_(`div`,{className:`grid w-full max-w-md gap-4`,children:g(`div`,{className:`rounded-[1.5rem] border border-base-300 bg-base-100/90 p-5 shadow-xl`,children:[_(`p`,{className:`text-xs uppercase tracking-[0.3em] opacity-60`,children:`Composition`}),g(`div`,{className:`mt-4 space-y-3`,children:[g(`div`,{className:`rounded-2xl bg-base-200 p-4`,children:[_(`div`,{className:`text-sm font-semibold`,children:`Root handles surface`}),_(`p`,{className:`mt-1 text-sm opacity-70`,children:`tone、size、backgroundImage、overlay 负责外层骨架。`})]}),g(`div`,{className:`rounded-2xl bg-base-200 p-4`,children:[_(`div`,{className:`text-sm font-semibold`,children:`Content handles layout`}),_(`p`,{className:`mt-1 text-sm opacity-70`,children:`layout、align、textAlign、gap 负责组织主视觉内容。`})]})]})]})})]})}),code:`<Hero
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
</Hero>`});c(()=>u(e,l,se))});let ce=e(`rue:component:anchor`);i(l,ce),p(()=>{let e=f(S,{title:`Centered hero`,tab:C,preview:()=>_(L,{tone:`base-200`,size:`lg`,className:`rounded-box`,children:_(L.Content,{layout:`center`,textAlign:`center`,gap:`md`,className:`px-6 py-10`,children:g(`div`,{className:`max-w-md space-y-4`,children:[_(L.Title,{children:`Hello there`}),_(L.Description,{children:`Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.`}),g(L.Actions,{align:`center`,stackOnMobile:!0,children:[_(y,{color:`primary`,children:`Get Started`}),_(y,{type:`outlined`,children:`View Docs`})]})]})})}),code:`<Hero tone={'base-200'} size={'lg'} className={'rounded-box'}>
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
</Hero>`});c(()=>u(e,l,ce))});let le=e(`rue:component:anchor`);i(l,le),p(()=>{let e=f(S,{title:`Hero with figure`,tab:w,preview:()=>_(L,{tone:`base-200`,size:`lg`,className:`rounded-box`,children:g(L.Content,{layout:`split`,align:`center`,className:`px-6 py-10`,children:[_(`img`,{src:R,className:`max-w-sm rounded-lg shadow-2xl`,alt:`Hero figure`}),g(`div`,{children:[_(L.Title,{children:`Box Office News!`}),_(L.Description,{children:`Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi.`}),g(L.Actions,{className:`mt-6`,children:[_(y,{color:`primary`,children:`Get Started`}),_(y,{type:`text`,children:`View details`})]})]})]})}),code:`<Hero tone={'base-200'} size={'lg'} className={'rounded-box'}>
  <Hero.Content layout={'split'} align={'center'} className={'px-6 py-10'}>
    <img src={'${R}'} className={'max-w-sm rounded-lg shadow-2xl'} alt={'Hero figure'} />
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
</Hero>`});c(()=>u(e,l,le))});let ue=e(`rue:component:anchor`);i(l,ue),p(()=>{let e=f(S,{title:`Hero with figure but reverse order`,tab:T,preview:()=>_(L,{tone:`base-100`,size:`lg`,className:`rounded-box border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-accent/10`,children:g(L.Content,{layout:`split-reverse`,align:`center`,className:`px-6 py-10`,children:[_(`img`,{src:R,className:`max-w-sm rounded-lg shadow-2xl`,alt:`Hero reverse figure`}),g(`div`,{children:[_(`span`,{className:`badge badge-soft badge-accent`,children:`Reverse layout`}),_(L.Title,{className:`mt-4`,children:`Box Office News!`}),_(L.Description,{children:`Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi.`}),g(L.Actions,{className:`mt-6`,children:[_(y,{color:`primary`,children:`Get Started`}),_(y,{type:`outlined`,children:`See release plan`})]})]})]})}),code:`<Hero
  tone={'base-100'}
  size={'lg'}
  className={'rounded-box border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-accent/10'}
>
  <Hero.Content layout={'split-reverse'} align={'center'} className={'px-6 py-10'}>
    <img src={'${R}'} className={'max-w-sm rounded-lg shadow-2xl'} alt={'Hero reverse figure'} />
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
</Hero>`});c(()=>u(e,l,ue))});let de=e(`rue:component:anchor`);i(l,de),p(()=>{let e=f(S,{title:`Hero with form`,tab:ee,preview:()=>_(L,{tone:`base-200`,size:`lg`,className:`rounded-box`,children:g(L.Content,{layout:`split-reverse`,align:`center`,className:`px-6 py-10`,children:[g(`div`,{className:`space-y-4 text-center lg:text-left`,children:[_(`span`,{className:`badge badge-outline`,children:`Members only`}),_(L.Title,{children:`Login now!`}),_(L.Description,{children:`Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi.`})]}),_(`div`,{className:`card w-full max-w-sm shrink-0 bg-base-100 shadow-2xl`,children:_(`div`,{className:`card-body`,children:g(b,{children:[_(b.Label,{children:`Email`}),_(x,{type:`email`,placeholder:`Email`}),_(b.Label,{children:`Password`}),_(x,{type:`password`,placeholder:`Password`}),_(`div`,{children:_(`a`,{className:`link link-hover`,children:`Forgot password?`})}),_(y,{color:`neutral`,className:`mt-4`,children:`Login`})]})})})]})}),code:`<Hero tone={'base-200'} size={'lg'} className={'rounded-box'}>
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
</Hero>`});c(()=>u(e,l,de))});let fe=e(`rue:component:anchor`);i(l,fe),p(()=>{let e=f(S,{title:`Hero with overlay image`,tab:te,preview:()=>g(L,{backgroundImage:z,size:`lg`,className:`rounded-box`,children:[_(L.Overlay,{opacity:`medium`,className:`rounded-box`}),_(L.Content,{layout:`center`,textAlign:`center`,className:`px-6 py-10 text-neutral-content`,children:g(`div`,{className:`max-w-md space-y-5`,children:[_(L.Title,{children:`Hello there`}),_(L.Description,{muted:!1,className:`text-neutral-content/80`,children:`Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi.`}),g(L.Actions,{align:`center`,stackOnMobile:!0,children:[_(y,{color:`primary`,children:`Get Started`}),_(y,{type:`outlined`,children:`Read story`})]})]})})]}),code:`<Hero backgroundImage={'${z}'} size={'lg'} className={'rounded-box'}>
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
</Hero>`});c(()=>u(e,l,fe))});let pe=e(`rue:component:anchor`);i(l,pe),p(()=>{let e=f(S,{title:`Hero with automatic overlay`,tab:ne,preview:()=>_(L,{as:`section`,backgroundImage:z,size:`xl`,overlay:{tone:`base-content`,opacity:`medium`,blur:!0,className:`rounded-[2rem]`},className:`overflow-hidden rounded-[2rem]`,children:g(L.Content,{layout:`split`,align:`center`,gap:`xl`,className:`px-6 py-12 text-neutral-content lg:px-16`,children:[g(`div`,{className:`space-y-5`,children:[_(`span`,{className:`badge badge-soft badge-primary`,children:`Auto Overlay`}),_(L.Title,{children:`把背景图和可读性补丁一起交给 Hero 处理。`}),_(L.Description,{muted:!1,className:`text-neutral-content/80`,children:`当页面只是想快速搭一个带图主视觉区时，直接传 backgroundImage 和 overlay 就够了，不用再手写遮罩层节点。`})]}),_(`div`,{className:`w-full max-w-xs rounded-[1.5rem] border border-white/15 bg-black/30 p-5 backdrop-blur-sm`,children:g(L.Actions,{direction:`column`,align:`start`,children:[_(y,{color:`primary`,block:!0,children:`Start from template`}),_(y,{type:`outlined`,block:!0,children:`Read migration guide`})]})})]})}),code:`<Hero
  as={'section'}
  backgroundImage={'${z}'}
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
</Hero>`});c(()=>u(e,l,pe))});let me=e(`rue:component:anchor`);i(l,me),p(()=>{let e=f(S,{title:`Surface and size presets`,tab:re,preview:()=>g(`div`,{className:`grid gap-4 xl:grid-cols-3`,children:[_(L,{tone:`base-200`,size:`sm`,className:`rounded-box`,children:_(L.Content,{className:`px-4 py-6`,children:g(`div`,{className:`space-y-3`,children:[_(`span`,{className:`badge badge-soft`,children:`base-200 / sm`}),_(L.Title,{size:`sm`,children:`Compact spotlight`}),_(L.Description,{size:`sm`,children:`适合列表页里的次级引导块。`})]})})}),_(L,{tone:`primary`,size:`md`,className:`rounded-box`,children:_(L.Content,{className:`px-4 py-6`,children:g(`div`,{className:`space-y-3`,children:[_(`span`,{className:`badge badge-soft badge-neutral`,children:`primary / md`}),_(L.Title,{size:`sm`,children:`Campaign push`}),_(L.Description,{size:`sm`,muted:!1,children:`颜色与前景色一起切换，页面里不用再单独补文字颜色。`})]})})}),_(L,{tone:`neutral`,size:`lg`,className:`rounded-box`,children:_(L.Content,{className:`px-4 py-6`,children:g(`div`,{className:`space-y-3`,children:[_(`span`,{className:`badge badge-outline badge-primary`,children:`neutral / lg`}),_(L.Title,{size:`sm`,children:`Full campaign frame`}),_(L.Description,{size:`sm`,muted:!1,children:`更高的尺寸适合首页首屏或专题页入口。`})]})})})]}),code:`<div className={'grid gap-4 xl:grid-cols-3'}>
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
</div>`});c(()=>u(e,l,me))});let G=r(`div`,l);i(l,G),n(G,`not-prose my-12 space-y-8`);let K=r(`section`,G);i(G,K),n(K,`space-y-2`);let q=r(`h2`,K);i(K,q),n(q,`text-2xl font-semibold`),i(q,a(`API`));let J=r(`p`,K);i(K,J),n(J,`text-sm opacity-70`),i(J,a(`推荐把外层背景和高度交给 Hero Root，把布局交给 Hero.Content，把标题、描述和 CTA 交给语义子组件。这样页面里仍然可以继续用 className 微调，但不会反复重写同一套结构。`));let Y=r(`section`,G);i(G,Y),n(Y,`space-y-3`);let X=r(`h3`,Y);i(Y,X),n(X,`text-xl font-semibold`),i(X,a(`Hero`));let he=e(`rue:component:anchor`);i(Y,he),p(()=>{let e=f(B,{rows:ie});c(()=>u(e,Y,he))});let Z=r(`section`,G);i(G,Z),n(Z,`space-y-3`);let Q=r(`h3`,Z);i(Z,Q),n(Q,`text-xl font-semibold`),i(Q,a(`Hero.Content`));let ge=e(`rue:component:anchor`);i(Z,ge),p(()=>{let e=f(B,{rows:ae});c(()=>u(e,Z,ge))});let $=r(`section`,G);i(G,$),n($,`space-y-3`);let _e=r(`h3`,$);i($,_e),n(_e,`text-xl font-semibold`),i(_e,a(`Hero parts`));let ve=e(`rue:component:anchor`);return i($,ve),p(()=>{let e=f(B,{rows:oe});c(()=>u(e,$,ve))}),s})}),d,m),d})};export{V as default};