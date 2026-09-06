import{At as e,Dn as t,E as n,Mt as r,Q as i,Vt as a,_n as o,_t as s,at as c,b as l,ct as u,dt as d,et as f,gn as p,gt as m,hn as h,kn as g,on as _,pn as v,qt as y,rt as b,st as x,tn as S,ut as C,vn as w,vt as T,w as ee,wn as E,x as te,yn as D,yt as O}from"./rue-runtime-HIMg8Lz8.js";import{t as k}from"./button-wFg2EV7R.js";import{t as A}from"./fieldset-DEzCMLNV.js";import{t as ne}from"./input-BQw3YBwv.js";import{r as j}from"./SidebarPlaygroundDesign-Cj7sFoQ4.js";import{t as M}from"./PreviewBlock-Dc0KnPUP.js";var re={"base-100":`bg-base-100 text-base-content`,"base-200":`bg-base-200 text-base-content`,"base-300":`bg-base-300 text-base-content`,neutral:`bg-neutral text-neutral-content`,primary:`bg-primary text-primary-content`,secondary:`bg-secondary text-secondary-content`,accent:`bg-accent text-accent-content`,info:`bg-info text-info-content`,success:`bg-success text-success-content`,warning:`bg-warning text-warning-content`,error:`bg-error text-error-content`},N={sm:`min-h-80`,md:`min-h-96`,lg:`min-h-[30rem]`,xl:`min-h-[36rem]`,screen:`min-h-screen`},ie={center:`text-center`,split:`flex-col gap-10 lg:flex-row`,"split-reverse":`flex-col gap-10 lg:flex-row-reverse`},P={start:`items-start`,center:`items-center`,end:`items-end`},F={start:`text-left`,center:`text-center`,end:`text-right`},I={sm:`gap-4`,md:`gap-6`,lg:`gap-10`,xl:`gap-14`},L={"base-content":`bg-base-content`,neutral:`bg-neutral`,primary:`bg-primary`,secondary:`bg-secondary`,accent:`bg-accent`,info:`bg-info`,success:`bg-success`,warning:`bg-warning`,error:`bg-error`},R={sm:`text-3xl md:text-4xl`,md:`text-4xl md:text-5xl`,lg:`text-5xl md:text-6xl`,xl:`text-6xl md:text-7xl`},z={sm:`text-sm md:text-base`,md:`text-base md:text-lg`,lg:`text-lg md:text-xl`},B=(...e)=>e.filter(Boolean).join(` `),V=(e,t)=>{if(!(!e&&!t))return{...e,...t}},H=e=>{if(e)return e===!0?{}:e},U=e=>{if(e!=null){if(typeof e==`number`)return{opacity:e};switch(e){case`soft`:return{opacity:.25};case`strong`:return{opacity:.7};default:return{opacity:.45}}}},W=({backgroundImage:e,backgroundPosition:t,backgroundSize:n,backgroundRepeat:r})=>{if(e)return{backgroundImage:`url(${e})`,backgroundPosition:t??`center`,backgroundSize:n??`cover`,backgroundRepeat:r??`no-repeat`}},G=(e,t,n)=>{if(e){if(n)switch(e){case`center`:return`items-center sm:justify-center`;case`end`:return`items-end sm:justify-end`;default:return`items-start sm:justify-start`}if(t===`column`)switch(e){case`center`:return`items-center`;case`end`:return`items-end`;default:return`items-start`}switch(e){case`center`:return`justify-center`;case`end`:return`justify-end`;default:return`justify-start`}}},K=e=>{let t=c(e.as),n=c(e.backgroundImage),i=c(e.backgroundPosition),a=c(e.backgroundRepeat),o=c(e.backgroundSize),s=c(e.children),l=c(e.className),d=c(e.fullHeight),p=c(e.overlay),m=c(e.size),h=c(e.style),g=c(e.tone),_=c(D(e,[`as`,`backgroundImage`,`backgroundPosition`,`backgroundRepeat`,`backgroundSize`,`children`,`className`,`fullHeight`,`overlay`,`size`,`style`,`tone`])),v=t.get()===void 0?`div`:t.get(),y=W({backgroundImage:n.get(),backgroundPosition:i.get(),backgroundSize:o.get(),backgroundRepeat:a.get()}),b=H(p.get());return u((()=>{let e=r(J,()=>({...b}));return r(v,()=>({..._.get(),style:V(h.get(),y),className:B(`hero`,(g.get()===void 0?`default`:g.get())==="default"?void 0:re[g.get()===void 0?`default`:g.get()],d.get()?N.screen:m.get()?N[m.get()]:void 0,l.get()),children:[b?e:void 0,s.get()]}))})(),e=>f(()=>{t.set(e.as),n.set(e.backgroundImage),i.set(e.backgroundPosition),a.set(e.backgroundRepeat),o.set(e.backgroundSize),s.set(e.children),l.set(e.className),d.set(e.fullHeight),p.set(e.overlay),m.set(e.size),h.set(e.style),g.set(e.tone),_.set(D(e,[`as`,`backgroundImage`,`backgroundPosition`,`backgroundRepeat`,`backgroundSize`,`children`,`className`,`fullHeight`,`overlay`,`size`,`style`,`tone`]))}),()=>e)},q=e=>{let t=c(e.align),n=c(e.as),i=c(e.children),a=c(e.className),o=c(e.gap),s=c(e.layout),l=c(e.textAlign),d=c(D(e,[`align`,`as`,`children`,`className`,`gap`,`layout`,`textAlign`])),p=n.get()===void 0?`div`:n.get();return u(r(p,()=>({...d.get(),className:B(`hero-content`,(s.get()===void 0?`inherit`:s.get())===`inherit`?void 0:ie[s.get()===void 0?`inherit`:s.get()],t.get()?P[t.get()]:void 0,l.get()?F[l.get()]:void 0,o.get()?I[o.get()]:void 0,a.get()),children:i.get()})),e=>f(()=>{t.set(e.align),n.set(e.as),i.set(e.children),a.set(e.className),o.set(e.gap),s.set(e.layout),l.set(e.textAlign),d.set(D(e,[`align`,`as`,`children`,`className`,`gap`,`layout`,`textAlign`]))}),()=>e)},J=e=>{let t=c(e.as),n=c(e.blur),i=c(e.children),a=c(e.className),o=c(e.opacity),s=c(e.style),l=c(e.tone),d=c(D(e,[`as`,`blur`,`children`,`className`,`opacity`,`style`,`tone`])),p=t.get()===void 0?`div`:t.get();return u(r(p,()=>({...d.get(),style:V(s.get(),U(o.get())),className:B(`hero-overlay`,(l.get()===void 0?`default`:l.get())==="default"?void 0:L[l.get()===void 0?`default`:l.get()],n.get()?`backdrop-blur-sm`:void 0,a.get()),children:i.get()})),e=>f(()=>{t.set(e.as),n.set(e.blur),i.set(e.children),a.set(e.className),o.set(e.opacity),s.set(e.style),l.set(e.tone),d.set(D(e,[`as`,`blur`,`children`,`className`,`opacity`,`style`,`tone`]))}),()=>e)},Y=Object.assign(K,{Content:q,Overlay:J,Title:e=>{let t=c(e.as),n=c(e.balanced),i=c(e.children),a=c(e.className),o=c(e.size),s=c(D(e,[`as`,`balanced`,`children`,`className`,`size`])),l=t.get()===void 0?`h1`:t.get();return u(r(l,()=>({...s.get(),className:B(`font-bold tracking-tight`,R[o.get()===void 0?`lg`:o.get()],n.get()===void 0||n.get()?`text-balance`:void 0,a.get()),children:i.get()})),e=>f(()=>{t.set(e.as),n.set(e.balanced),i.set(e.children),a.set(e.className),o.set(e.size),s.set(D(e,[`as`,`balanced`,`children`,`className`,`size`]))}),()=>e)},Description:e=>{let t=c(e.as),n=c(e.children),i=c(e.className),a=c(e.muted),o=c(e.size),s=c(D(e,[`as`,`children`,`className`,`muted`,`size`])),l=t.get()===void 0?`p`:t.get();return u(r(l,()=>({...s.get(),className:B(`max-w-2xl leading-relaxed`,z[o.get()===void 0?`md`:o.get()],a.get()===void 0||a.get()?`opacity-80`:void 0,i.get()),children:n.get()})),e=>f(()=>{t.set(e.as),n.set(e.children),i.set(e.className),a.set(e.muted),o.set(e.size),s.set(D(e,[`as`,`children`,`className`,`muted`,`size`]))}),()=>e)},Actions:e=>{let t=c(e.align),n=c(e.as),i=c(e.children),a=c(e.className),o=c(e.direction),s=c(e.stackOnMobile),l=c(D(e,[`align`,`as`,`children`,`className`,`direction`,`stackOnMobile`])),d=n.get()===void 0?`div`:n.get();return u(r(d,()=>({...l.get(),className:B(`flex gap-3`,s.get()!==void 0&&s.get()?`flex-col sm:flex-row sm:flex-wrap`:(o.get()===void 0?`row`:o.get())===`column`?`flex-col`:`flex-row flex-wrap`,G(t.get(),o.get()===void 0?`row`:o.get(),s.get()!==void 0&&s.get()),a.get()),children:i.get()})),e=>f(()=>{t.set(e.align),n.set(e.as),i.set(e.children),a.set(e.className),o.set(e.direction),s.set(e.stackOnMobile),l.set(D(e,[`align`,`as`,`children`,`className`,`direction`,`stackOnMobile`]))}),()=>e)}}),ae=w(`<div class="space-y-5"><span class="badge badge-outline badge-primary">Rue Design Hero</span><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--></div>`),oe=w(`<div class="grid w-full max-w-md gap-4"><div class="rounded-[1.5rem] border border-base-300 bg-base-100/90 p-5 shadow-xl"><p class="text-xs uppercase tracking-[0.3em] opacity-60">Composition</p><div class="mt-4 space-y-3"><div class="rounded-2xl bg-base-200 p-4"><div class="text-sm font-semibold">Root handles surface</div><p class="mt-1 text-sm opacity-70">tone、size、backgroundImage、overlay 负责外层骨架。</p></div><div class="rounded-2xl bg-base-200 p-4"><div class="text-sm font-semibold">Content handles layout</div><p class="mt-1 text-sm opacity-70">layout、align、textAlign、gap 负责组织主视觉内容。</p></div></div></div></div>`),se=w(`<div class="max-w-md space-y-4"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--></div>`),ce=w(`<img class="max-w-sm rounded-lg shadow-2xl" alt="Hero figure">`),le=w(`<div><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--></div>`),ue=w(`<img class="max-w-sm rounded-lg shadow-2xl" alt="Hero reverse figure">`),de=w(`<div><span class="badge badge-soft badge-accent">Reverse layout</span><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--></div>`),fe=w(`<div class="space-y-4 text-center lg:text-left"><span class="badge badge-outline">Members only</span><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--></div>`),pe=w(`<div class="card w-full max-w-sm shrink-0 bg-base-100 shadow-2xl"><div class="card-body"><!--rue:opaque-hole:0--></div></div>`),me=w(`<div class="max-w-md space-y-5"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--></div>`),he=w(`<div class="space-y-5"><span class="badge badge-soft badge-primary">Auto Overlay</span><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--></div>`),ge=w(`<div class="w-full max-w-xs rounded-[1.5rem] border border-white/15 bg-black/30 p-5 backdrop-blur-sm"><!--rue:opaque-hole:0--></div>`),_e=w(`<div class="grid gap-4 xl:grid-cols-3"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--></div>`),X=w(`<div class="not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100"><table class="table table-zebra"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><!--rue:text-hole:0--></tbody></table></div>`),ve=w(`<div class="max-w-none prose prose-sm md:prose-base"><h1>Hero 主视觉区</h1><p class="mt-3 mb-3 text-sm">Hero 现在不只是一个样式壳。Root 负责背景、尺寸和遮罩，Content 负责布局，Title / Description / Actions 负责最常见的文案骨架，剩下的局部视觉继续交给 className 微调。</p><p class="mt-0 mb-4 text-sm">没有可以直接对照的同名标准组件，所以组件重点覆盖组合能力和语义 API 上：使用 Rue 自己的视觉语言，但把高频搭建动作从页面里收回到组件里。</p><div class="not-prose mt-6 grid gap-4 lg:grid-cols-3"><div class="rounded-[1.5rem] border border-base-300 bg-base-100 p-5 shadow-sm"><div class="text-xs uppercase tracking-[0.28em] opacity-60">Root</div><div class="mt-3 text-lg font-semibold">Background, size, overlay</div><p class="mt-2 text-sm opacity-70">用 tone、size、backgroundImage、overlay 先把 Hero 的外层骨架搭起来。</p></div><div class="rounded-[1.5rem] border border-base-300 bg-base-100 p-5 shadow-sm"><div class="text-xs uppercase tracking-[0.28em] opacity-60">Content</div><div class="mt-3 text-lg font-semibold">Split, reverse, center</div><p class="mt-2 text-sm opacity-70">用 Hero.Content.layout 切换常见主视觉布局，再按需叠加 align、textAlign 和 gap。</p></div><div class="rounded-[1.5rem] border border-base-300 bg-base-100 p-5 shadow-sm"><div class="text-xs uppercase tracking-[0.28em] opacity-60">Parts</div><div class="mt-3 text-lg font-semibold">Readable copy blocks</div><p class="mt-2 text-sm opacity-70">标题、描述和操作区都给了语义化入口，页面里的重复样式可以明显减少。</p></div></div><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--><!--rue:opaque-hole:5--><!--rue:opaque-hole:6--><!--rue:opaque-hole:7--><div class="not-prose my-12 space-y-8"><section class="space-y-2"><h2 class="text-2xl font-semibold">API</h2><p class="text-sm opacity-70">推荐把外层背景和高度交给 Hero Root，把布局交给 Hero.Content，把标题、描述和 CTA 交给语义子组件。这样页面里仍然可以用 className 微调，但不会反复重写同一套结构。</p></section><section class="space-y-3"><h3 class="text-xl font-semibold">Hero</h3><!--rue:opaque-hole:8--></section><section class="space-y-3"><h3 class="text-xl font-semibold">Hero.Content</h3><!--rue:opaque-hole:9--></section><section class="space-y-3"><h3 class="text-xl font-semibold">Hero parts</h3><!--rue:opaque-hole:10--></section></div></div>`),Z=`https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp`,Q=`https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp`,$=e=>{let n=c(e.rows);return u(a(Object.assign(e=>{let r=X().content.cloneNode(!0).firstChild,i=r.childNodes[0].childNodes[1].childNodes[0],a=i.parentNode,s=w(`<tr><td><code><!--rue:text-hole:0--></code></td><td>rue:row-text</td><td><code><!--rue:text-hole:2--></code></td><td><code><!--rue:text-hole:3--></code></td></tr>`),c=[];return E(()=>{let e=n.get()||[];c=ee(a,i,c,e,(e,t)=>e.prop,(e,t,n)=>{let r=e,i;return te(e=>{let t=s().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0].childNodes[0],a=n.parentNode,c=t.childNodes[1].childNodes[0];c.data=``,c.parentNode;let l=t.childNodes[2].childNodes[0].childNodes[0],u=l.parentNode,d=t.childNodes[3].childNodes[0].childNodes[0],f=d.parentNode,p=o(``);a.insertBefore(p,n),a.removeChild(n);let m;{let e=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);Object.is(m,e)||(p.textContent=e,m=e)}let h;{let e=r.description==null||typeof r.description==`boolean`?``:String(r.description);Object.is(h,e)||(c.textContent=e,h=e)}let g=o(``);u.insertBefore(g,l),u.removeChild(l);let _;{let e=r.type==null||typeof r.type==`boolean`?``:String(r.type);Object.is(_,e)||(g.textContent=e,_=e)}let v=o(``);f.insertBefore(v,d),f.removeChild(d);let y;{let e=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);Object.is(y,e)||(v.textContent=e,y=e)}return i=()=>{{let e=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);Object.is(m,e)||(p.textContent=e,m=e)}{let e=r.description==null||typeof r.description==`boolean`?``:String(r.description);Object.is(h,e)||(c.textContent=e,h=e)}{let e=r.type==null||typeof r.type==`boolean`?``:String(r.type);Object.is(_,e)||(g.textContent=e,_=e)}{let e=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);Object.is(y,e)||(v.textContent=e,y=e)}},{__rue_compiled_host:t,__rue_compiled_roots:[t]}},(n,a)=>{e=n,t=a,r=n,i()},n)})}),t(()=>l(c)),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})),e=>f(()=>{n.set(e.rows)}),()=>e)},ye=[{prop:`as`,description:`指定 Hero 根节点标签`,type:`string`,defaultValue:`div`},{prop:`backgroundImage`,description:`直接设置背景图 URL，组件会自动写入内联背景样式`,type:`string`,defaultValue:`-`},{prop:`backgroundPosition`,description:`背景图定位`,type:`string`,defaultValue:`center`},{prop:`backgroundRepeat`,description:`背景图重复方式`,type:`string`,defaultValue:`no-repeat`},{prop:`backgroundSize`,description:`背景图尺寸`,type:`string`,defaultValue:`cover`},{prop:`fullHeight`,description:`直接切换到全屏高度，等价于 screen 尺寸`,type:`boolean`,defaultValue:`false`},{prop:`overlay`,description:`开启自动遮罩，也支持直接传入 Hero.Overlay 同构配置对象`,type:`boolean | HeroOverlayProps`,defaultValue:`false`},{prop:`size`,description:`Hero 区块高度预设`,type:`sm | md | lg | xl | screen`,defaultValue:`-`},{prop:`tone`,description:`Root 背景与前景色语义层`,type:`default | base-100 | base-200 | base-300 | neutral | primary | secondary | accent | info | success | warning | error`,defaultValue:`default`}],be=[{prop:`Hero.Content.align`,description:`控制内容区交叉轴对齐`,type:`start | center | end`,defaultValue:`-`},{prop:`Hero.Content.as`,description:`指定内容区标签`,type:`string`,defaultValue:`div`},{prop:`Hero.Content.gap`,description:`内容区间距预设，适合覆盖 split 默认间距`,type:`sm | md | lg | xl`,defaultValue:`-`},{prop:`Hero.Content.layout`,description:`语义布局预设，覆盖居中、分栏与反向分栏`,type:`inherit | center | split | split-reverse`,defaultValue:`inherit`},{prop:`Hero.Content.textAlign`,description:`文字对齐方式`,type:`start | center | end`,defaultValue:`-`}],xe=[{prop:`Hero.Overlay.blur`,description:`为遮罩添加轻量模糊，适合背景图场景`,type:`boolean`,defaultValue:`false`},{prop:`Hero.Overlay.opacity`,description:`遮罩透明度，支持 soft / medium / strong 或数字`,type:`soft | medium | strong | number`,defaultValue:`-`},{prop:`Hero.Overlay.tone`,description:`遮罩色调，可配合自动 overlay 一起用`,type:`default | base-content | neutral | primary | secondary | accent | info | success | warning | error`,defaultValue:`default`},{prop:`Hero.Title.balanced`,description:`标题默认启用 text-balance，减少过长标题断行问题`,type:`boolean`,defaultValue:`true`},{prop:`Hero.Title.size`,description:`标题字号预设`,type:`sm | md | lg | xl`,defaultValue:`lg`},{prop:`Hero.Description.muted`,description:`描述文本默认降低一点对比度`,type:`boolean`,defaultValue:`true`},{prop:`Hero.Description.size`,description:`描述字号预设`,type:`sm | md | lg`,defaultValue:`md`},{prop:`Hero.Actions.align`,description:`操作区对齐方式，会根据横排或竖排自动切换到 justify / items`,type:`start | center | end`,defaultValue:`-`},{prop:`Hero.Actions.direction`,description:`操作区排列方向`,type:`row | column`,defaultValue:`row`},{prop:`Hero.Actions.stackOnMobile`,description:`移动端堆叠、桌面端横排，适合 CTA 组合`,type:`boolean`,defaultValue:`false`}],Se=()=>{let t=S(`preview`),c=S(`preview`),l=S(`preview`),w=S(`preview`),ee=S(`preview`),te=S(`preview`),D=S(`preview`),re=S(`preview`);return y(()=>u(b(j,()=>({children:(u,f,y)=>n(u,y,()=>a(Object.assign(n=>{let u=s(),f=ve().content.cloneNode(!0),y=f.firstChild,b=y.childNodes[4],S=b.parentNode,j=y.childNodes[5],N=j.parentNode,ie=y.childNodes[6],P=ie.parentNode,F=y.childNodes[7],I=F.parentNode,L=y.childNodes[8],R=L.parentNode,z=y.childNodes[9],B=z.parentNode,V=y.childNodes[10],H=V.parentNode,U=y.childNodes[11],W=U.parentNode,G=y.childNodes[12].childNodes[1].childNodes[1],K=G.parentNode,q=y.childNodes[12].childNodes[2].childNodes[1],J=q.parentNode,X=y.childNodes[12].childNodes[3].childNodes[1],Se=X.parentNode;u.appendChild(f);let Ce=h(S);x(Ce,M,()=>({title:`Semantic starter`,tab:t,preview:_(()=>(()=>{let t=e(()=>{let e=s(),t=ae().content.cloneNode(!0),n=t.firstChild,i=n.childNodes[1],a=i.parentNode,o=n.childNodes[2],c=o.parentNode,l=n.childNodes[3],u=l.parentNode;e.appendChild(t);let d=r(Y.Title,()=>({children:`Ship landing sections without rebuilding layout scaffolding.`}));C(d,a,i);let f=r(Y.Description,()=>({children:`Hero 现在把 surface、height、background image、overlay 和 action 布局都提升成了语义 API。页面可以更聚焦在内容，而不是重复拼装容器类名。`}));return C(f,c,o),E(()=>{let e=r(k,()=>({color:`primary`,children:`Get Started`})),t=r(k,()=>({type:`outlined`,children:`Browse patterns`})),n=r(Y.Actions,()=>({stackOnMobile:!0,children:[e,t]}));g(()=>C(n,u,l))}),e}),n=r(Y.Content,()=>({layout:`split`,align:`center`,gap:`xl`,className:`px-6 py-10 lg:px-16`,children:[t,a(e=>oe().content.cloneNode(!0).firstChild)]}));return r(Y,()=>({tone:`base-100`,size:`xl`,className:`overflow-hidden rounded-[2rem] border border-base-300 bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10`,children:n}))})()),code:`<Hero
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
</Hero>`})),S.insertBefore(Ce,b);let we=h(N);x(we,M,()=>({title:`Centered hero`,tab:c,preview:_(()=>(()=>{let t=e(()=>{let e=s(),t=se().content.cloneNode(!0),n=t.firstChild,i=n.childNodes[0],a=i.parentNode,o=n.childNodes[1],c=o.parentNode,l=n.childNodes[2],u=l.parentNode;e.appendChild(t);let d=r(Y.Title,()=>({children:`Hello there`}));C(d,a,i);let f=r(Y.Description,()=>({children:`Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.`}));return C(f,c,o),E(()=>{let e=r(k,()=>({color:`primary`,children:`Get Started`})),t=r(k,()=>({type:`outlined`,children:`View Docs`})),n=r(Y.Actions,()=>({align:`center`,stackOnMobile:!0,children:[e,t]}));g(()=>C(n,u,l))}),e}),n=r(Y.Content,()=>({layout:`center`,textAlign:`center`,gap:`md`,className:`px-6 py-10`,children:t}));return r(Y,()=>({tone:`base-200`,size:`lg`,className:`rounded-box`,children:n}))})()),code:`<Hero tone={'base-200'} size={'lg'} className={'rounded-box'}>
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
</Hero>`})),N.insertBefore(we,j);let Te=h(P);x(Te,M,()=>({title:`Hero with figure`,tab:l,preview:_(()=>(()=>{let t=e(()=>{let e=s(),t=le().content.cloneNode(!0),n=t.firstChild,i=n.childNodes[0],a=i.parentNode,o=n.childNodes[1],c=o.parentNode,l=n.childNodes[2],u=l.parentNode;e.appendChild(t);let d=r(Y.Title,()=>({children:`Box Office News!`}));C(d,a,i);let f=r(Y.Description,()=>({children:`Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi.`}));return C(f,c,o),E(()=>{let e=r(k,()=>({color:`primary`,children:`Get Started`})),t=r(k,()=>({type:`text`,children:`View details`})),n=r(Y.Actions,()=>({className:`mt-6`,children:[e,t]}));g(()=>C(n,u,l))}),e}),n=r(Y.Content,()=>({layout:`split`,align:`center`,className:`px-6 py-10`,children:[a(Object.assign(e=>{let t=ce().content.cloneNode(!0).firstChild,n=t,r;return E(()=>{let e=Z;Object.is(r,e)||(r=e,n.setAttribute(`src`,String(e)))}),n.className=`max-w-sm rounded-lg shadow-2xl`,n.setAttribute(`alt`,`Hero figure`),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),t]}));return r(Y,()=>({tone:`base-200`,size:`lg`,className:`rounded-box`,children:n}))})()),code:`<Hero tone={'base-200'} size={'lg'} className={'rounded-box'}>
  <Hero.Content layout={'split'} align={'center'} className={'px-6 py-10'}>
    <img src={'${Z}'} className={'max-w-sm rounded-lg shadow-2xl'} alt={'Hero figure'} />
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
</Hero>`})),P.insertBefore(Te,ie);let Ee=h(I);x(Ee,M,()=>({title:`Hero with figure but reverse order`,tab:w,preview:_(()=>(()=>{let t=e(()=>{let e=s(),t=de().content.cloneNode(!0),n=t.firstChild,i=n.childNodes[1],a=i.parentNode,o=n.childNodes[2],c=o.parentNode,l=n.childNodes[3],u=l.parentNode;e.appendChild(t);let d=r(Y.Title,()=>({className:`mt-4`,children:`Box Office News!`}));C(d,a,i);let f=r(Y.Description,()=>({children:`Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi.`}));return C(f,c,o),E(()=>{let e=r(k,()=>({color:`primary`,children:`Get Started`})),t=r(k,()=>({type:`outlined`,children:`See release plan`})),n=r(Y.Actions,()=>({className:`mt-6`,children:[e,t]}));g(()=>C(n,u,l))}),e}),n=r(Y.Content,()=>({layout:`split-reverse`,align:`center`,className:`px-6 py-10`,children:[a(Object.assign(e=>{let t=ue().content.cloneNode(!0).firstChild,n=t,r;return E(()=>{let e=Z;Object.is(r,e)||(r=e,n.setAttribute(`src`,String(e)))}),n.className=`max-w-sm rounded-lg shadow-2xl`,n.setAttribute(`alt`,`Hero reverse figure`),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),t]}));return r(Y,()=>({tone:`base-100`,size:`lg`,className:`rounded-box border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-accent/10`,children:n}))})()),code:`<Hero
  tone={'base-100'}
  size={'lg'}
  className={'rounded-box border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-accent/10'}
>
  <Hero.Content layout={'split-reverse'} align={'center'} className={'px-6 py-10'}>
    <img src={'${Z}'} className={'max-w-sm rounded-lg shadow-2xl'} alt={'Hero reverse figure'} />
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
</Hero>`})),I.insertBefore(Ee,F);let De=h(R);x(De,M,()=>({title:`Hero with form`,tab:ee,preview:_(()=>(()=>{let t=e(()=>{let e=s(),t=fe().content.cloneNode(!0),n=t.firstChild,i=n.childNodes[1],a=i.parentNode,o=n.childNodes[2],c=o.parentNode;e.appendChild(t);let l=r(Y.Title,()=>({children:`Login now!`}));C(l,a,i);let u=r(Y.Description,()=>({children:`Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi.`}));return C(u,c,o),e}),n=e(()=>{let e=s(),t=pe().content.cloneNode(!0),n=t.firstChild.childNodes[0].childNodes[0],i=n.parentNode;return e.appendChild(t),E(()=>{let e=r(A.Label,()=>({children:`Email`})),t=r(ne,()=>({type:`email`,placeholder:`Email`})),s=r(A.Label,()=>({children:`Password`})),c=r(ne,()=>({type:`password`,placeholder:`Password`})),l=r(k,()=>({color:`neutral`,className:`mt-4`,children:`Login`})),u=r(A,()=>({children:[e,t,s,c,a(Object.assign(e=>{let t=p(`div`,e),n=p(`a`,t);return v(t,n),n.className=`link link-hover`,v(n,o(`Forgot password?`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),l]}));g(()=>C(u,i,n))}),e}),i=r(Y.Content,()=>({layout:`split-reverse`,align:`center`,className:`px-6 py-10`,children:[t,n]}));return r(Y,()=>({tone:`base-200`,size:`lg`,className:`rounded-box`,children:i}))})()),code:`<Hero tone={'base-200'} size={'lg'} className={'rounded-box'}>
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
</Hero>`})),R.insertBefore(De,L);let Oe=h(B);x(Oe,M,()=>({title:`Hero with overlay image`,tab:te,preview:_(()=>(()=>{let t=r(Y.Overlay,()=>({opacity:`medium`,className:`rounded-box`})),n=e(()=>{let e=s(),t=me().content.cloneNode(!0),n=t.firstChild,i=n.childNodes[0],a=i.parentNode,o=n.childNodes[1],c=o.parentNode,l=n.childNodes[2],u=l.parentNode;e.appendChild(t);let d=r(Y.Title,()=>({children:`Hello there`}));C(d,a,i);let f=r(Y.Description,()=>({muted:!1,className:`text-neutral-content/80`,children:`Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi.`}));return C(f,c,o),E(()=>{let e=r(k,()=>({color:`primary`,children:`Get Started`})),t=r(k,()=>({type:`outlined`,children:`Read story`})),n=r(Y.Actions,()=>({align:`center`,stackOnMobile:!0,children:[e,t]}));g(()=>C(n,u,l))}),e}),i=r(Y.Content,()=>({layout:`center`,textAlign:`center`,className:`px-6 py-10 text-neutral-content`,children:n}));return r(Y,()=>({backgroundImage:Q,size:`lg`,className:`rounded-box`,children:[t,i]}))})()),code:`<Hero backgroundImage={'${Q}'} size={'lg'} className={'rounded-box'}>
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
</Hero>`})),B.insertBefore(Oe,z);let ke=h(H);x(ke,M,()=>({title:`Hero with automatic overlay`,tab:D,preview:_(()=>(()=>{let t=e(()=>{let e=s(),t=he().content.cloneNode(!0),n=t.firstChild,i=n.childNodes[1],a=i.parentNode,o=n.childNodes[2],c=o.parentNode;e.appendChild(t);let l=r(Y.Title,()=>({children:`把背景图和可读性补丁一起交给 Hero 处理。`}));C(l,a,i);let u=r(Y.Description,()=>({muted:!1,className:`text-neutral-content/80`,children:`当页面只是想快速搭一个带图主视觉区时，直接传 backgroundImage 和 overlay 就够了，不用再手写遮罩层节点。`}));return C(u,c,o),e}),n=e(()=>{let e=s(),t=ge().content.cloneNode(!0),n=t.firstChild.childNodes[0],i=n.parentNode;return e.appendChild(t),E(()=>{let e=r(k,()=>({color:`primary`,block:!0,children:`Start from template`})),t=r(k,()=>({type:`outlined`,block:!0,children:`Read migration guide`})),a=r(Y.Actions,()=>({direction:`column`,align:`start`,children:[e,t]}));g(()=>C(a,i,n))}),e}),i=r(Y.Content,()=>({layout:`split`,align:`center`,gap:`xl`,className:`px-6 py-12 text-neutral-content lg:px-16`,children:[t,n]}));return r(Y,()=>({as:`section`,backgroundImage:Q,size:`xl`,overlay:{tone:`base-content`,opacity:`medium`,blur:!0,className:`rounded-[2rem]`},className:`overflow-hidden rounded-[2rem]`,children:i}))})()),code:`<Hero
  as={'section'}
  backgroundImage={'${Q}'}
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
</Hero>`})),H.insertBefore(ke,V);let Ae=h(W);x(Ae,M,()=>({title:`Surface and size presets`,tab:re,preview:_(()=>e(t=>{let n=_e().content.cloneNode(!0).firstChild,a=n.childNodes[0],o=a.parentNode,c=n.childNodes[1],l=c.parentNode,u=n.childNodes[2],f=u.parentNode;return E(()=>{let t=e(()=>{let e=s(),t=T(`div`,e);d(e,t),i(t,`space-y-3`);let n=T(`span`,t);d(t,n),i(n,`badge badge-soft`),d(n,O(`base-200 / sm`));let a=m(`rue:component:anchor`);d(t,a);let o=r(Y.Title,()=>({size:`sm`,children:`Compact spotlight`}));C(o,t,a);let c=m(`rue:component:anchor`);d(t,c);let l=r(Y.Description,()=>({size:`sm`,children:`适合列表页里的次级引导块。`}));return C(l,t,c),e}),n=r(Y.Content,()=>({className:`px-4 py-6`,children:t})),c=r(Y,()=>({tone:`base-200`,size:`sm`,className:`rounded-box`,children:n}));g(()=>C(c,o,a))}),E(()=>{let t=e(()=>{let e=s(),t=T(`div`,e);d(e,t),i(t,`space-y-3`);let n=T(`span`,t);d(t,n),i(n,`badge badge-soft badge-neutral`),d(n,O(`primary / md`));let a=m(`rue:component:anchor`);d(t,a);let o=r(Y.Title,()=>({size:`sm`,children:`Campaign push`}));C(o,t,a);let c=m(`rue:component:anchor`);d(t,c);let l=r(Y.Description,()=>({size:`sm`,muted:!1,children:`颜色与前景色一起切换，页面里不用再单独补文字颜色。`}));return C(l,t,c),e}),n=r(Y.Content,()=>({className:`px-4 py-6`,children:t})),a=r(Y,()=>({tone:`primary`,size:`md`,className:`rounded-box`,children:n}));g(()=>C(a,l,c))}),E(()=>{let t=e(()=>{let e=s(),t=T(`div`,e);d(e,t),i(t,`space-y-3`);let n=T(`span`,t);d(t,n),i(n,`badge badge-outline badge-primary`),d(n,O(`neutral / lg`));let a=m(`rue:component:anchor`);d(t,a);let o=r(Y.Title,()=>({size:`sm`,children:`Full campaign frame`}));C(o,t,a);let c=m(`rue:component:anchor`);d(t,c);let l=r(Y.Description,()=>({size:`sm`,muted:!1,children:`更高的尺寸适合首页首屏或专题页入口。`}));return C(l,t,c),e}),n=r(Y.Content,()=>({className:`px-4 py-6`,children:t})),a=r(Y,()=>({tone:`neutral`,size:`lg`,className:`rounded-box`,children:n}));g(()=>C(a,f,u))}),n})),code:`<div className={'grid gap-4 xl:grid-cols-3'}>
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
</div>`})),W.insertBefore(Ae,U);let je=h(K);x(je,$,()=>({rows:ye})),K.insertBefore(je,G);let Me=h(J);x(Me,$,()=>({rows:be})),J.insertBefore(Me,q);let Ne=h(Se);return x(Ne,$,()=>({rows:xe})),Se.insertBefore(Ne,X),{__rue_compiled_host:u,__rue_compiled_roots:[u]}},{__rue_compiled_explicit_roots:!0})))})),e=>f(()=>{})))};export{Se as default};