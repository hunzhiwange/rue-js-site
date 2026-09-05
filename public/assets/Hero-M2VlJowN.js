import{Bt as e,C as t,Et as n,H as r,K as i,Kt as a,L as o,Mt as s,S as c,W as l,X as u,Y as d,_n as f,_t as p,bn as m,fn as h,gn as g,hn as _,ht as v,it as y,kn as b,mn as x,nt as S,q as C,rt as w,tt as T,vn as E,wn as D,x as O,z as k}from"./rue-runtime-CwEGJ854.js";import{t as A}from"./button-BlvcsWE0.js";import{t as j}from"./fieldset-BLBrKC3n.js";import{t as ee}from"./input-Bm2FiP-g.js";import{r as M}from"./SidebarPlaygroundDesign-CwCJwf8H.js";import{t as N}from"./PreviewBlock-B_EIWpIk.js";var te={"base-100":`bg-base-100 text-base-content`,"base-200":`bg-base-200 text-base-content`,"base-300":`bg-base-300 text-base-content`,neutral:`bg-neutral text-neutral-content`,primary:`bg-primary text-primary-content`,secondary:`bg-secondary text-secondary-content`,accent:`bg-accent text-accent-content`,info:`bg-info text-info-content`,success:`bg-success text-success-content`,warning:`bg-warning text-warning-content`,error:`bg-error text-error-content`},P={sm:`min-h-80`,md:`min-h-96`,lg:`min-h-[30rem]`,xl:`min-h-[36rem]`,screen:`min-h-screen`},F={center:`text-center`,split:`flex-col gap-10 lg:flex-row`,"split-reverse":`flex-col gap-10 lg:flex-row-reverse`},ne={start:`items-start`,center:`items-center`,end:`items-end`},I={start:`text-left`,center:`text-center`,end:`text-right`},L={sm:`gap-4`,md:`gap-6`,lg:`gap-10`,xl:`gap-14`},R={"base-content":`bg-base-content`,neutral:`bg-neutral`,primary:`bg-primary`,secondary:`bg-secondary`,accent:`bg-accent`,info:`bg-info`,success:`bg-success`,warning:`bg-warning`,error:`bg-error`},z={sm:`text-3xl md:text-4xl`,md:`text-4xl md:text-5xl`,lg:`text-5xl md:text-6xl`,xl:`text-6xl md:text-7xl`},B={sm:`text-sm md:text-base`,md:`text-base md:text-lg`,lg:`text-lg md:text-xl`},V=(...e)=>e.filter(Boolean).join(` `),H=(e,t)=>{if(!(!e&&!t))return{...e,...t}},U=e=>{if(e)return e===!0?{}:e},W=e=>{if(e!=null){if(typeof e==`number`)return{opacity:e};switch(e){case`soft`:return{opacity:.25};case`strong`:return{opacity:.7};default:return{opacity:.45}}}},G=({backgroundImage:e,backgroundPosition:t,backgroundSize:n,backgroundRepeat:r})=>{if(e)return{backgroundImage:`url(${e})`,backgroundPosition:t??`center`,backgroundSize:n??`cover`,backgroundRepeat:r??`no-repeat`}},K=(e,t,n)=>{if(e){if(n)switch(e){case`center`:return`items-center sm:justify-center`;case`end`:return`items-end sm:justify-end`;default:return`items-start sm:justify-start`}if(t===`column`)switch(e){case`center`:return`items-center`;case`end`:return`items-end`;default:return`items-start`}switch(e){case`center`:return`justify-center`;case`end`:return`justify-end`;default:return`justify-start`}}},q=e=>{let t=l(e.as),n=l(e.backgroundImage),r=l(e.backgroundPosition),i=l(e.backgroundRepeat),a=l(e.backgroundSize),o=l(e.children),s=l(e.className),c=l(e.fullHeight),u=l(e.overlay),d=l(e.size),f=l(e.style),m=l(e.tone),h=l(E(e,[`as`,`backgroundImage`,`backgroundPosition`,`backgroundRepeat`,`backgroundSize`,`children`,`className`,`fullHeight`,`overlay`,`size`,`style`,`tone`])),g=t.get()===void 0?`div`:t.get(),_=G({backgroundImage:n.get(),backgroundPosition:r.get(),backgroundSize:a.get(),backgroundRepeat:i.get()}),v=U(u.get());return C((()=>{let e=p(Y,()=>({...v}));return p(g,()=>({...h.get(),style:H(f.get(),_),className:V(`hero`,(m.get()===void 0?`default`:m.get())==="default"?void 0:te[m.get()===void 0?`default`:m.get()],c.get()?P.screen:d.get()?P[d.get()]:void 0,s.get()),children:[v?e:void 0,o.get()]}))})(),e=>k(()=>{t.set(e.as),n.set(e.backgroundImage),r.set(e.backgroundPosition),i.set(e.backgroundRepeat),a.set(e.backgroundSize),o.set(e.children),s.set(e.className),c.set(e.fullHeight),u.set(e.overlay),d.set(e.size),f.set(e.style),m.set(e.tone),h.set(E(e,[`as`,`backgroundImage`,`backgroundPosition`,`backgroundRepeat`,`backgroundSize`,`children`,`className`,`fullHeight`,`overlay`,`size`,`style`,`tone`]))}),()=>e)},J=e=>{let t=l(e.align),n=l(e.as),r=l(e.children),i=l(e.className),a=l(e.gap),o=l(e.layout),s=l(e.textAlign),c=l(E(e,[`align`,`as`,`children`,`className`,`gap`,`layout`,`textAlign`])),u=n.get()===void 0?`div`:n.get();return C(p(u,()=>({...c.get(),className:V(`hero-content`,(o.get()===void 0?`inherit`:o.get())===`inherit`?void 0:F[o.get()===void 0?`inherit`:o.get()],t.get()?ne[t.get()]:void 0,s.get()?I[s.get()]:void 0,a.get()?L[a.get()]:void 0,i.get()),children:r.get()})),e=>k(()=>{t.set(e.align),n.set(e.as),r.set(e.children),i.set(e.className),a.set(e.gap),o.set(e.layout),s.set(e.textAlign),c.set(E(e,[`align`,`as`,`children`,`className`,`gap`,`layout`,`textAlign`]))}),()=>e)},Y=e=>{let t=l(e.as),n=l(e.blur),r=l(e.children),i=l(e.className),a=l(e.opacity),o=l(e.style),s=l(e.tone),c=l(E(e,[`as`,`blur`,`children`,`className`,`opacity`,`style`,`tone`])),u=t.get()===void 0?`div`:t.get();return C(p(u,()=>({...c.get(),style:H(o.get(),W(a.get())),className:V(`hero-overlay`,(s.get()===void 0?`default`:s.get())==="default"?void 0:R[s.get()===void 0?`default`:s.get()],n.get()?`backdrop-blur-sm`:void 0,i.get()),children:r.get()})),e=>k(()=>{t.set(e.as),n.set(e.blur),r.set(e.children),i.set(e.className),a.set(e.opacity),o.set(e.style),s.set(e.tone),c.set(E(e,[`as`,`blur`,`children`,`className`,`opacity`,`style`,`tone`]))}),()=>e)},X=Object.assign(q,{Content:J,Overlay:Y,Title:e=>{let t=l(e.as),n=l(e.balanced),r=l(e.children),i=l(e.className),a=l(e.size),o=l(E(e,[`as`,`balanced`,`children`,`className`,`size`])),s=t.get()===void 0?`h1`:t.get();return C(p(s,()=>({...o.get(),className:V(`font-bold tracking-tight`,z[a.get()===void 0?`lg`:a.get()],n.get()===void 0||n.get()?`text-balance`:void 0,i.get()),children:r.get()})),e=>k(()=>{t.set(e.as),n.set(e.balanced),r.set(e.children),i.set(e.className),a.set(e.size),o.set(E(e,[`as`,`balanced`,`children`,`className`,`size`]))}),()=>e)},Description:e=>{let t=l(e.as),n=l(e.children),r=l(e.className),i=l(e.muted),a=l(e.size),o=l(E(e,[`as`,`children`,`className`,`muted`,`size`])),s=t.get()===void 0?`p`:t.get();return C(p(s,()=>({...o.get(),className:V(`max-w-2xl leading-relaxed`,B[a.get()===void 0?`md`:a.get()],i.get()===void 0||i.get()?`opacity-80`:void 0,r.get()),children:n.get()})),e=>k(()=>{t.set(e.as),n.set(e.children),r.set(e.className),i.set(e.muted),a.set(e.size),o.set(E(e,[`as`,`children`,`className`,`muted`,`size`]))}),()=>e)},Actions:e=>{let t=l(e.align),n=l(e.as),r=l(e.children),i=l(e.className),a=l(e.direction),o=l(e.stackOnMobile),s=l(E(e,[`align`,`as`,`children`,`className`,`direction`,`stackOnMobile`])),c=n.get()===void 0?`div`:n.get();return C(p(c,()=>({...s.get(),className:V(`flex gap-3`,o.get()!==void 0&&o.get()?`flex-col sm:flex-row sm:flex-wrap`:(a.get()===void 0?`row`:a.get())===`column`?`flex-col`:`flex-row flex-wrap`,K(t.get(),a.get()===void 0?`row`:a.get(),o.get()!==void 0&&o.get()),i.get()),children:r.get()})),e=>k(()=>{t.set(e.align),n.set(e.as),r.set(e.children),i.set(e.className),a.set(e.direction),o.set(e.stackOnMobile),s.set(E(e,[`align`,`as`,`children`,`className`,`direction`,`stackOnMobile`]))}),()=>e)}}),re=f(`<div class="space-y-5"><span class="badge badge-outline badge-primary">Rue Design Hero</span><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--></div>`),ie=f(`<div class="grid w-full max-w-md gap-4"><div class="rounded-[1.5rem] border border-base-300 bg-base-100/90 p-5 shadow-xl"><p class="text-xs uppercase tracking-[0.3em] opacity-60">Composition</p><div class="mt-4 space-y-3"><div class="rounded-2xl bg-base-200 p-4"><div class="text-sm font-semibold">Root handles surface</div><p class="mt-1 text-sm opacity-70">tone、size、backgroundImage、overlay 负责外层骨架。</p></div><div class="rounded-2xl bg-base-200 p-4"><div class="text-sm font-semibold">Content handles layout</div><p class="mt-1 text-sm opacity-70">layout、align、textAlign、gap 负责组织主视觉内容。</p></div></div></div></div>`),ae=f(`<div class="max-w-md space-y-4"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--></div>`),oe=f(`<img class="max-w-sm rounded-lg shadow-2xl" alt="Hero figure">`),se=f(`<div><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--></div>`),ce=f(`<img class="max-w-sm rounded-lg shadow-2xl" alt="Hero reverse figure">`),le=f(`<div><span class="badge badge-soft badge-accent">Reverse layout</span><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--></div>`),ue=f(`<div class="space-y-4 text-center lg:text-left"><span class="badge badge-outline">Members only</span><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--></div>`),de=f(`<div class="card w-full max-w-sm shrink-0 bg-base-100 shadow-2xl"><div class="card-body"><!--rue:opaque-hole:0--></div></div>`),fe=f(`<div class="max-w-md space-y-5"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--></div>`),pe=f(`<div class="space-y-5"><span class="badge badge-soft badge-primary">Auto Overlay</span><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--></div>`),me=f(`<div class="w-full max-w-xs rounded-[1.5rem] border border-white/15 bg-black/30 p-5 backdrop-blur-sm"><!--rue:opaque-hole:0--></div>`),he=f(`<div class="grid gap-4 xl:grid-cols-3"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--></div>`),Z=f(`<div class="not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100"><table class="table table-zebra"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><!--rue:text-hole:0--></tbody></table></div>`),ge=f(`<div class="max-w-none prose prose-sm md:prose-base"><h1>Hero 主视觉区</h1><p class="mt-3 mb-3 text-sm">Hero 现在不只是一个样式壳。Root 负责背景、尺寸和遮罩，Content 负责布局，Title / Description / Actions 负责最常见的文案骨架，剩下的局部视觉继续交给 className 微调。</p><p class="mt-0 mb-4 text-sm">没有可以直接对照的同名标准组件，所以组件重点覆盖组合能力和语义 API 上：使用 Rue 自己的视觉语言，但把高频搭建动作从页面里收回到组件里。</p><div class="not-prose mt-6 grid gap-4 lg:grid-cols-3"><div class="rounded-[1.5rem] border border-base-300 bg-base-100 p-5 shadow-sm"><div class="text-xs uppercase tracking-[0.28em] opacity-60">Root</div><div class="mt-3 text-lg font-semibold">Background, size, overlay</div><p class="mt-2 text-sm opacity-70">用 tone、size、backgroundImage、overlay 先把 Hero 的外层骨架搭起来。</p></div><div class="rounded-[1.5rem] border border-base-300 bg-base-100 p-5 shadow-sm"><div class="text-xs uppercase tracking-[0.28em] opacity-60">Content</div><div class="mt-3 text-lg font-semibold">Split, reverse, center</div><p class="mt-2 text-sm opacity-70">用 Hero.Content.layout 切换常见主视觉布局，再按需叠加 align、textAlign 和 gap。</p></div><div class="rounded-[1.5rem] border border-base-300 bg-base-100 p-5 shadow-sm"><div class="text-xs uppercase tracking-[0.28em] opacity-60">Parts</div><div class="mt-3 text-lg font-semibold">Readable copy blocks</div><p class="mt-2 text-sm opacity-70">标题、描述和操作区都给了语义化入口，页面里的重复样式可以明显减少。</p></div></div><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--><!--rue:opaque-hole:5--><!--rue:opaque-hole:6--><!--rue:opaque-hole:7--><div class="not-prose my-12 space-y-8"><section class="space-y-2"><h2 class="text-2xl font-semibold">API</h2><p class="text-sm opacity-70">推荐把外层背景和高度交给 Hero Root，把布局交给 Hero.Content，把标题、描述和 CTA 交给语义子组件。这样页面里仍然可以用 className 微调，但不会反复重写同一套结构。</p></section><section class="space-y-3"><h3 class="text-xl font-semibold">Hero</h3><!--rue:opaque-hole:8--></section><section class="space-y-3"><h3 class="text-xl font-semibold">Hero.Content</h3><!--rue:opaque-hole:9--></section><section class="space-y-3"><h3 class="text-xl font-semibold">Hero parts</h3><!--rue:opaque-hole:10--></section></div></div>`),Q=`https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp`,$=`https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp`,_e=e=>{let r=l(e.rows);return C(n(Object.assign(e=>{let i=Z().content.cloneNode(!0).firstChild,a=i.childNodes[0].childNodes[1].childNodes[0],o=a.parentNode,s=[];return D(()=>{let e=r.get()||[];s=t(o,a,s,e,(e,t)=>e.prop,(e,t)=>{let r=l(e),i=l(t);return c((e,t,i)=>O(e,i,()=>n(Object.assign(e=>{let t=_(`tr`,e),n=_(`td`,t);h(t,n);let i=_(`code`,n);h(n,i);let a=g(``);h(i,a),m(a,()=>r.get().prop);let o=_(`td`,t);h(t,o);let s=g(``);h(o,s),m(s,()=>r.get().description);let c=_(`td`,t);h(t,c);let l=_(`code`,c);h(c,l);let u=g(``);h(l,u),m(u,()=>r.get().type);let d=_(`td`,t);h(t,d);let f=_(`code`,d);h(d,f);let p=g(``);return h(f,p),m(p,()=>r.get().defaultValue),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(n,a)=>{e=n,t=a,r.set(n),i.set(a)})})}),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0})),e=>k(()=>{r.set(e.rows)}),()=>e)},ve=[{prop:`as`,description:`指定 Hero 根节点标签`,type:`string`,defaultValue:`div`},{prop:`backgroundImage`,description:`直接设置背景图 URL，组件会自动写入内联背景样式`,type:`string`,defaultValue:`-`},{prop:`backgroundPosition`,description:`背景图定位`,type:`string`,defaultValue:`center`},{prop:`backgroundRepeat`,description:`背景图重复方式`,type:`string`,defaultValue:`no-repeat`},{prop:`backgroundSize`,description:`背景图尺寸`,type:`string`,defaultValue:`cover`},{prop:`fullHeight`,description:`直接切换到全屏高度，等价于 screen 尺寸`,type:`boolean`,defaultValue:`false`},{prop:`overlay`,description:`开启自动遮罩，也支持直接传入 Hero.Overlay 同构配置对象`,type:`boolean | HeroOverlayProps`,defaultValue:`false`},{prop:`size`,description:`Hero 区块高度预设`,type:`sm | md | lg | xl | screen`,defaultValue:`-`},{prop:`tone`,description:`Root 背景与前景色语义层`,type:`default | base-100 | base-200 | base-300 | neutral | primary | secondary | accent | info | success | warning | error`,defaultValue:`default`}],ye=[{prop:`Hero.Content.align`,description:`控制内容区交叉轴对齐`,type:`start | center | end`,defaultValue:`-`},{prop:`Hero.Content.as`,description:`指定内容区标签`,type:`string`,defaultValue:`div`},{prop:`Hero.Content.gap`,description:`内容区间距预设，适合覆盖 split 默认间距`,type:`sm | md | lg | xl`,defaultValue:`-`},{prop:`Hero.Content.layout`,description:`语义布局预设，覆盖居中、分栏与反向分栏`,type:`inherit | center | split | split-reverse`,defaultValue:`inherit`},{prop:`Hero.Content.textAlign`,description:`文字对齐方式`,type:`start | center | end`,defaultValue:`-`}],be=[{prop:`Hero.Overlay.blur`,description:`为遮罩添加轻量模糊，适合背景图场景`,type:`boolean`,defaultValue:`false`},{prop:`Hero.Overlay.opacity`,description:`遮罩透明度，支持 soft / medium / strong 或数字`,type:`soft | medium | strong | number`,defaultValue:`-`},{prop:`Hero.Overlay.tone`,description:`遮罩色调，可配合自动 overlay 一起用`,type:`default | base-content | neutral | primary | secondary | accent | info | success | warning | error`,defaultValue:`default`},{prop:`Hero.Title.balanced`,description:`标题默认启用 text-balance，减少过长标题断行问题`,type:`boolean`,defaultValue:`true`},{prop:`Hero.Title.size`,description:`标题字号预设`,type:`sm | md | lg | xl`,defaultValue:`lg`},{prop:`Hero.Description.muted`,description:`描述文本默认降低一点对比度`,type:`boolean`,defaultValue:`true`},{prop:`Hero.Description.size`,description:`描述字号预设`,type:`sm | md | lg`,defaultValue:`md`},{prop:`Hero.Actions.align`,description:`操作区对齐方式，会根据横排或竖排自动切换到 justify / items`,type:`start | center | end`,defaultValue:`-`},{prop:`Hero.Actions.direction`,description:`操作区排列方向`,type:`row | column`,defaultValue:`row`},{prop:`Hero.Actions.stackOnMobile`,description:`移动端堆叠、桌面端横排，适合 CTA 组合`,type:`boolean`,defaultValue:`false`}],xe=()=>{let t=e(`preview`),c=e(`preview`),l=e(`preview`),f=e(`preview`),m=e(`preview`),E=e(`preview`),te=e(`preview`),P=e(`preview`);return s(()=>C(r(M,()=>({children:(e,r,s)=>O(e,s,()=>n(Object.assign(e=>{let r=S(),s=ge().content.cloneNode(!0),C=s.firstChild,O=C.childNodes[4],k=O.parentNode,M=C.childNodes[5],F=M.parentNode,ne=C.childNodes[6],I=ne.parentNode,L=C.childNodes[7],R=L.parentNode,z=C.childNodes[8],B=z.parentNode,V=C.childNodes[9],H=V.parentNode,U=C.childNodes[10],W=U.parentNode,G=C.childNodes[11],K=G.parentNode,q=C.childNodes[12].childNodes[1].childNodes[1],J=q.parentNode,Y=C.childNodes[12].childNodes[2].childNodes[1],Z=Y.parentNode,xe=C.childNodes[12].childNodes[3].childNodes[1],Se=xe.parentNode;r.appendChild(s);let Ce=x(k);i(Ce,N,()=>({title:`Semantic starter`,tab:t,preview:a(()=>(()=>{let e=v(()=>{let e=S(),t=re().content.cloneNode(!0),n=t.firstChild,r=n.childNodes[1],i=r.parentNode,a=n.childNodes[2],o=a.parentNode,s=n.childNodes[3],c=s.parentNode;e.appendChild(t);let l=p(X.Title,()=>({children:`Ship landing sections without rebuilding layout scaffolding.`}));d(l,i,r);let u=p(X.Description,()=>({children:`Hero 现在把 surface、height、background image、overlay 和 action 布局都提升成了语义 API。页面可以更聚焦在内容，而不是重复拼装容器类名。`}));return d(u,o,a),D(()=>{let e=p(A,()=>({color:`primary`,children:`Get Started`})),t=p(A,()=>({type:`outlined`,children:`Browse patterns`})),n=p(X.Actions,()=>({stackOnMobile:!0,children:[e,t]}));b(()=>d(n,c,s))}),e}),t=p(X.Content,()=>({layout:`split`,align:`center`,gap:`xl`,className:`px-6 py-10 lg:px-16`,children:[e,n(e=>ie().content.cloneNode(!0).firstChild)]}));return p(X,()=>({tone:`base-100`,size:`xl`,className:`overflow-hidden rounded-[2rem] border border-base-300 bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10`,children:t}))})()),code:`<Hero
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
</Hero>`})),k.insertBefore(Ce,O);let we=x(F);i(we,N,()=>({title:`Centered hero`,tab:c,preview:a(()=>(()=>{let e=v(()=>{let e=S(),t=ae().content.cloneNode(!0),n=t.firstChild,r=n.childNodes[0],i=r.parentNode,a=n.childNodes[1],o=a.parentNode,s=n.childNodes[2],c=s.parentNode;e.appendChild(t);let l=p(X.Title,()=>({children:`Hello there`}));d(l,i,r);let u=p(X.Description,()=>({children:`Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.`}));return d(u,o,a),D(()=>{let e=p(A,()=>({color:`primary`,children:`Get Started`})),t=p(A,()=>({type:`outlined`,children:`View Docs`})),n=p(X.Actions,()=>({align:`center`,stackOnMobile:!0,children:[e,t]}));b(()=>d(n,c,s))}),e}),t=p(X.Content,()=>({layout:`center`,textAlign:`center`,gap:`md`,className:`px-6 py-10`,children:e}));return p(X,()=>({tone:`base-200`,size:`lg`,className:`rounded-box`,children:t}))})()),code:`<Hero tone={'base-200'} size={'lg'} className={'rounded-box'}>
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
</Hero>`})),F.insertBefore(we,M);let Te=x(I);i(Te,N,()=>({title:`Hero with figure`,tab:l,preview:a(()=>(()=>{let e=v(()=>{let e=S(),t=se().content.cloneNode(!0),n=t.firstChild,r=n.childNodes[0],i=r.parentNode,a=n.childNodes[1],o=a.parentNode,s=n.childNodes[2],c=s.parentNode;e.appendChild(t);let l=p(X.Title,()=>({children:`Box Office News!`}));d(l,i,r);let u=p(X.Description,()=>({children:`Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi.`}));return d(u,o,a),D(()=>{let e=p(A,()=>({color:`primary`,children:`Get Started`})),t=p(A,()=>({type:`text`,children:`View details`})),n=p(X.Actions,()=>({className:`mt-6`,children:[e,t]}));b(()=>d(n,c,s))}),e}),t=p(X.Content,()=>({layout:`split`,align:`center`,className:`px-6 py-10`,children:[n(Object.assign(e=>{let t=oe().content.cloneNode(!0).firstChild,n=t,r;return D(()=>{let e=Q;Object.is(r,e)||(r=e,n.setAttribute(`src`,String(e)))}),n.className=`max-w-sm rounded-lg shadow-2xl`,n.setAttribute(`alt`,`Hero figure`),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),e]}));return p(X,()=>({tone:`base-200`,size:`lg`,className:`rounded-box`,children:t}))})()),code:`<Hero tone={'base-200'} size={'lg'} className={'rounded-box'}>
  <Hero.Content layout={'split'} align={'center'} className={'px-6 py-10'}>
    <img src={'${Q}'} className={'max-w-sm rounded-lg shadow-2xl'} alt={'Hero figure'} />
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
</Hero>`})),I.insertBefore(Te,ne);let Ee=x(R);i(Ee,N,()=>({title:`Hero with figure but reverse order`,tab:f,preview:a(()=>(()=>{let e=v(()=>{let e=S(),t=le().content.cloneNode(!0),n=t.firstChild,r=n.childNodes[1],i=r.parentNode,a=n.childNodes[2],o=a.parentNode,s=n.childNodes[3],c=s.parentNode;e.appendChild(t);let l=p(X.Title,()=>({className:`mt-4`,children:`Box Office News!`}));d(l,i,r);let u=p(X.Description,()=>({children:`Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi.`}));return d(u,o,a),D(()=>{let e=p(A,()=>({color:`primary`,children:`Get Started`})),t=p(A,()=>({type:`outlined`,children:`See release plan`})),n=p(X.Actions,()=>({className:`mt-6`,children:[e,t]}));b(()=>d(n,c,s))}),e}),t=p(X.Content,()=>({layout:`split-reverse`,align:`center`,className:`px-6 py-10`,children:[n(Object.assign(e=>{let t=ce().content.cloneNode(!0).firstChild,n=t,r;return D(()=>{let e=Q;Object.is(r,e)||(r=e,n.setAttribute(`src`,String(e)))}),n.className=`max-w-sm rounded-lg shadow-2xl`,n.setAttribute(`alt`,`Hero reverse figure`),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),e]}));return p(X,()=>({tone:`base-100`,size:`lg`,className:`rounded-box border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-accent/10`,children:t}))})()),code:`<Hero
  tone={'base-100'}
  size={'lg'}
  className={'rounded-box border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-accent/10'}
>
  <Hero.Content layout={'split-reverse'} align={'center'} className={'px-6 py-10'}>
    <img src={'${Q}'} className={'max-w-sm rounded-lg shadow-2xl'} alt={'Hero reverse figure'} />
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
</Hero>`})),R.insertBefore(Ee,L);let De=x(B);i(De,N,()=>({title:`Hero with form`,tab:m,preview:a(()=>(()=>{let e=v(()=>{let e=S(),t=ue().content.cloneNode(!0),n=t.firstChild,r=n.childNodes[1],i=r.parentNode,a=n.childNodes[2],o=a.parentNode;e.appendChild(t);let s=p(X.Title,()=>({children:`Login now!`}));d(s,i,r);let c=p(X.Description,()=>({children:`Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi.`}));return d(c,o,a),e}),t=v(()=>{let e=S(),t=de().content.cloneNode(!0),r=t.firstChild.childNodes[0].childNodes[0],i=r.parentNode;return e.appendChild(t),D(()=>{let e=p(j.Label,()=>({children:`Email`})),t=p(ee,()=>({type:`email`,placeholder:`Email`})),a=p(j.Label,()=>({children:`Password`})),o=p(ee,()=>({type:`password`,placeholder:`Password`})),s=p(A,()=>({color:`neutral`,className:`mt-4`,children:`Login`})),c=p(j,()=>({children:[e,t,a,o,n(Object.assign(e=>{let t=_(`div`,e),n=_(`a`,t);return h(t,n),n.className=`link link-hover`,h(n,g(`Forgot password?`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),s]}));b(()=>d(c,i,r))}),e}),r=p(X.Content,()=>({layout:`split-reverse`,align:`center`,className:`px-6 py-10`,children:[e,t]}));return p(X,()=>({tone:`base-200`,size:`lg`,className:`rounded-box`,children:r}))})()),code:`<Hero tone={'base-200'} size={'lg'} className={'rounded-box'}>
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
</Hero>`})),B.insertBefore(De,z);let Oe=x(H);i(Oe,N,()=>({title:`Hero with overlay image`,tab:E,preview:a(()=>(()=>{let e=p(X.Overlay,()=>({opacity:`medium`,className:`rounded-box`})),t=v(()=>{let e=S(),t=fe().content.cloneNode(!0),n=t.firstChild,r=n.childNodes[0],i=r.parentNode,a=n.childNodes[1],o=a.parentNode,s=n.childNodes[2],c=s.parentNode;e.appendChild(t);let l=p(X.Title,()=>({children:`Hello there`}));d(l,i,r);let u=p(X.Description,()=>({muted:!1,className:`text-neutral-content/80`,children:`Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi.`}));return d(u,o,a),D(()=>{let e=p(A,()=>({color:`primary`,children:`Get Started`})),t=p(A,()=>({type:`outlined`,children:`Read story`})),n=p(X.Actions,()=>({align:`center`,stackOnMobile:!0,children:[e,t]}));b(()=>d(n,c,s))}),e}),n=p(X.Content,()=>({layout:`center`,textAlign:`center`,className:`px-6 py-10 text-neutral-content`,children:t}));return p(X,()=>({backgroundImage:$,size:`lg`,className:`rounded-box`,children:[e,n]}))})()),code:`<Hero backgroundImage={'${$}'} size={'lg'} className={'rounded-box'}>
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
</Hero>`})),H.insertBefore(Oe,V);let ke=x(W);i(ke,N,()=>({title:`Hero with automatic overlay`,tab:te,preview:a(()=>(()=>{let e=v(()=>{let e=S(),t=pe().content.cloneNode(!0),n=t.firstChild,r=n.childNodes[1],i=r.parentNode,a=n.childNodes[2],o=a.parentNode;e.appendChild(t);let s=p(X.Title,()=>({children:`把背景图和可读性补丁一起交给 Hero 处理。`}));d(s,i,r);let c=p(X.Description,()=>({muted:!1,className:`text-neutral-content/80`,children:`当页面只是想快速搭一个带图主视觉区时，直接传 backgroundImage 和 overlay 就够了，不用再手写遮罩层节点。`}));return d(c,o,a),e}),t=v(()=>{let e=S(),t=me().content.cloneNode(!0),n=t.firstChild.childNodes[0],r=n.parentNode;return e.appendChild(t),D(()=>{let e=p(A,()=>({color:`primary`,block:!0,children:`Start from template`})),t=p(A,()=>({type:`outlined`,block:!0,children:`Read migration guide`})),i=p(X.Actions,()=>({direction:`column`,align:`start`,children:[e,t]}));b(()=>d(i,r,n))}),e}),n=p(X.Content,()=>({layout:`split`,align:`center`,gap:`xl`,className:`px-6 py-12 text-neutral-content lg:px-16`,children:[e,t]}));return p(X,()=>({as:`section`,backgroundImage:$,size:`xl`,overlay:{tone:`base-content`,opacity:`medium`,blur:!0,className:`rounded-[2rem]`},className:`overflow-hidden rounded-[2rem]`,children:n}))})()),code:`<Hero
  as={'section'}
  backgroundImage={'${$}'}
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
</Hero>`})),W.insertBefore(ke,U);let Ae=x(K);i(Ae,N,()=>({title:`Surface and size presets`,tab:P,preview:a(()=>v(e=>{let t=he().content.cloneNode(!0).firstChild,n=t.childNodes[0],r=n.parentNode,i=t.childNodes[1],a=i.parentNode,s=t.childNodes[2],c=s.parentNode;return D(()=>{let e=v(()=>{let e=S(),t=w(`div`,e);u(e,t),o(t,`space-y-3`);let n=w(`span`,t);u(t,n),o(n,`badge badge-soft`),u(n,y(`base-200 / sm`));let r=T(`rue:component:anchor`);u(t,r);let i=p(X.Title,()=>({size:`sm`,children:`Compact spotlight`}));d(i,t,r);let a=T(`rue:component:anchor`);u(t,a);let s=p(X.Description,()=>({size:`sm`,children:`适合列表页里的次级引导块。`}));return d(s,t,a),e}),t=p(X.Content,()=>({className:`px-4 py-6`,children:e})),i=p(X,()=>({tone:`base-200`,size:`sm`,className:`rounded-box`,children:t}));b(()=>d(i,r,n))}),D(()=>{let e=v(()=>{let e=S(),t=w(`div`,e);u(e,t),o(t,`space-y-3`);let n=w(`span`,t);u(t,n),o(n,`badge badge-soft badge-neutral`),u(n,y(`primary / md`));let r=T(`rue:component:anchor`);u(t,r);let i=p(X.Title,()=>({size:`sm`,children:`Campaign push`}));d(i,t,r);let a=T(`rue:component:anchor`);u(t,a);let s=p(X.Description,()=>({size:`sm`,muted:!1,children:`颜色与前景色一起切换，页面里不用再单独补文字颜色。`}));return d(s,t,a),e}),t=p(X.Content,()=>({className:`px-4 py-6`,children:e})),n=p(X,()=>({tone:`primary`,size:`md`,className:`rounded-box`,children:t}));b(()=>d(n,a,i))}),D(()=>{let e=v(()=>{let e=S(),t=w(`div`,e);u(e,t),o(t,`space-y-3`);let n=w(`span`,t);u(t,n),o(n,`badge badge-outline badge-primary`),u(n,y(`neutral / lg`));let r=T(`rue:component:anchor`);u(t,r);let i=p(X.Title,()=>({size:`sm`,children:`Full campaign frame`}));d(i,t,r);let a=T(`rue:component:anchor`);u(t,a);let s=p(X.Description,()=>({size:`sm`,muted:!1,children:`更高的尺寸适合首页首屏或专题页入口。`}));return d(s,t,a),e}),t=p(X.Content,()=>({className:`px-4 py-6`,children:e})),n=p(X,()=>({tone:`neutral`,size:`lg`,className:`rounded-box`,children:t}));b(()=>d(n,c,s))}),t})),code:`<div className={'grid gap-4 xl:grid-cols-3'}>
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
</div>`})),K.insertBefore(Ae,G);let je=x(J);i(je,_e,()=>({rows:ve})),J.insertBefore(je,q);let Me=x(Z);i(Me,_e,()=>({rows:ye})),Z.insertBefore(Me,Y);let Ne=x(Se);return i(Ne,_e,()=>({rows:be})),Se.insertBefore(Ne,xe),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})))})),e=>k(()=>{})))};export{xe as default};