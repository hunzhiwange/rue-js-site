import{$ as e,Q as t,Qt as n,Wt as r,X as i,Y as a,Yt as o,et as s,ht as c,l,lt as u,nt as d,o as f,st as p,t as m,tt as h,zt as g}from"./vapor-runtime-CXIalONM.js";import{a as _,n as v}from"./vapor-helpers-vapor-CoXKrGmY.js";import{a as y,i as b}from"./persistentSidebarPlayground-DBDp2zjv.js";import{t as x}from"./Code-BIscIyEp.js";import{t as S}from"./button-CeShl0h_.js";import{r as C}from"./SidebarPlaygroundDesign-CsC_YS7V.js";import{t as w}from"./preview-test-gate-DumhDfV7.js";var T=[`preview`,`code`],ee=(r,o)=>l(m=>{let h=s(`div`,m);p(h,`role`,`tablist`),u(h,`tabs tabs-box mb-3 mt-4`);let g=t(`rue:list:start`),_=t(`rue:list:end`);i(h,g),i(h,_);let y=new Map;return n(()=>{y=v({items:T||[],getKey:(e,t)=>t,elements:y,parent:g.parentNode,before:_,singleRoot:!0,trackIndex:!1,start:g,renderItem:(t,m,h,g,_)=>{f(l(()=>{let l=e(),f=r===t,m=s(`button`,l);i(l,m),p(m,`type`,`button`),p(m,`role`,`tab`),n(()=>{p(m,`aria-selected`,String(f?`true`:`false`))}),n(()=>{u(m,`tab ${f?`tab-active`:``}`)}),a(m,`click`,()=>o(t));let h=d(m);return i(m,h),n(()=>{c(h,t===`preview`?`预览`:`JSX代码`)}),l}),m,h)}})}),h}),E=a=>l(o=>{let c=s(`div`,o);u(c,`component-preview not-prose text-base-content my-6 lg:my-12`);let d=s(`div`,c);i(c,d),u(d,`flex flex-wrap items-start justify-between gap-3`);let p=s(`div`,d);i(d,p);let g=s(`h2`,p);i(p,g),u(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(g,h(`# `));let _=t(`rue:slot:anchor`);i(g,_),n(()=>{let e=a.title;r(()=>f(e,g,_))});let v=t(`rue:slot:anchor`);i(p,v),n(()=>{let o=a.summary?l(()=>{let o=e(),c=s(`p`,o);i(o,c),u(c,`m-0 text-sm opacity-70`);let l=t(`rue:slot:anchor`);return i(c,l),n(()=>{let e=a.summary;r(()=>f(e,c,l))}),o}):``;r(()=>f(o,p,v))});let y=t(`rue:slot:anchor`);i(c,y),n(()=>{let e=ee(a.tab.value,e=>a.tab.value=e);r(()=>f(e,c,y))}),i(c,h(` `));let b=t(`rue:slot:anchor`);return i(c,b),n(()=>{let o=a.tab.value===`preview`?w(a.title,a.preview):l(()=>{let o=e(),s=t(`rue:component:anchor`);return i(o,s),n(()=>{let e=m(x,{className:`mt-2`,lang:`tsx`,code:a.code});r(()=>f(e,o,s))}),o});r(()=>f(o,c,b))}),c}),D=a=>l(o=>{let c=s(`div`,o);u(c,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let d=s(`table`,c);i(c,d),u(d,`table table-zebra`);let m=s(`thead`,d);i(d,m);let g=s(`tr`,m);i(m,g);let _=s(`th`,g);i(g,_),i(_,h(`属性`));let y=s(`th`,g);i(g,y),i(y,h(`说明`));let b=s(`th`,g);i(g,b),i(b,h(`类型`));let x=s(`th`,g);i(g,x),i(x,h(`默认值`));let S=s(`tbody`,d);i(d,S);let C=t(`rue:list:start`),w=t(`rue:list:end`);i(S,C),i(S,w);let T=new Map;return n(()=>{T=v({items:a.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(a,o,c,u,d)=>{f(l(()=>{let o=e(),c=s(`tr`,o);i(o,c),n(()=>{p(c,`key`,String(a.prop))});let l=s(`td`,c);i(c,l);let u=s(`code`,l);i(l,u);let d=t(`rue:slot:anchor`);i(u,d),n(()=>{let e=a.prop;r(()=>f(e,u,d))});let m=s(`td`,c);i(c,m);let h=t(`rue:slot:anchor`);i(m,h),n(()=>{let e=a.description;r(()=>f(e,m,h))});let g=s(`td`,c);i(c,g);let _=s(`code`,g);i(g,_);let v=t(`rue:slot:anchor`);i(_,v),n(()=>{let e=a.type;r(()=>f(e,_,v))});let y=s(`td`,c);i(c,y);let b=s(`code`,y);i(y,b);let x=t(`rue:slot:anchor`);return i(b,x),n(()=>{let e=a.defaultValue;r(()=>f(e,b,x))}),o}),o,c)}})}),c}),te=()=>l(e=>{let t=s(`svg`,e);p(t,`xmlns`,`http://www.w3.org/2000/svg`),p(t,`viewBox`,`0 0 24 24`),p(t,`fill`,`none`),p(t,`stroke`,`currentColor`),p(t,`strokeWidth`,`2`),u(t,`size-[1.05em]`);let n=s(`path`,t);return i(t,n),p(n,`strokeLinecap`,`round`),p(n,`strokeLinejoin`,`round`),p(n,`d`,`M12 5v14M5 12h14`),t}),O=()=>l(e=>{let t=s(`svg`,e);p(t,`xmlns`,`http://www.w3.org/2000/svg`),p(t,`viewBox`,`0 0 24 24`),p(t,`fill`,`none`),p(t,`stroke`,`currentColor`),p(t,`strokeWidth`,`2`),u(t,`size-[1.05em]`);let n=s(`path`,t);i(t,n),p(n,`strokeLinecap`,`round`),p(n,`strokeLinejoin`,`round`),p(n,`d`,`M5 12h14`);let r=s(`path`,t);return i(t,r),p(r,`strokeLinecap`,`round`),p(r,`strokeLinejoin`,`round`),p(r,`d`,`m13 6 6 6-6 6`),t}),k=()=>l(e=>{let t=s(`svg`,e);p(t,`xmlns`,`http://www.w3.org/2000/svg`),p(t,`viewBox`,`0 0 24 24`),p(t,`fill`,`none`),p(t,`stroke`,`currentColor`),p(t,`strokeWidth`,`2`),u(t,`size-[1.05em]`);let n=s(`path`,t);return i(t,n),p(n,`strokeLinecap`,`round`),p(n,`strokeLinejoin`,`round`),p(n,`d`,`M12 20s-7-4.35-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 10c0 5.65-7 10-7 10Z`),t}),ne=()=>l(e=>{let t=s(`svg`,e);p(t,`xmlns`,`http://www.w3.org/2000/svg`),p(t,`viewBox`,`0 0 24 24`),p(t,`fill`,`none`),p(t,`stroke`,`currentColor`),p(t,`strokeWidth`,`2`),u(t,`size-[1.05em]`);let n=s(`path`,t);i(t,n),p(n,`strokeLinecap`,`round`),p(n,`strokeLinejoin`,`round`),p(n,`d`,`M4.5 19.5 9 15l6 6`);let r=s(`path`,t);i(t,r),p(r,`strokeLinecap`,`round`),p(r,`strokeLinejoin`,`round`),p(r,`d`,`M15 9c0-3.5 2.5-6 6-6 0 3.5-2.5 6-6 6Z`);let a=s(`path`,t);i(t,a),p(a,`strokeLinecap`,`round`),p(a,`strokeLinejoin`,`round`),p(a,`d`,`M15 9 9 15`);let o=s(`circle`,t);return i(t,o),p(o,`cx`,`14`),p(o,`cy`,`10`),p(o,`r`,`1`),p(o,`fill`,`currentColor`),p(o,`stroke`,`none`),t}),re=()=>l(e=>{let t=s(`svg`,e);p(t,`xmlns`,`http://www.w3.org/2000/svg`),p(t,`viewBox`,`0 0 24 24`),p(t,`fill`,`none`),p(t,`stroke`,`currentColor`),p(t,`strokeWidth`,`2`),u(t,`size-[1.05em]`);let n=s(`rect`,t);i(t,n),p(n,`x`,`3`),p(n,`y`,`5`),p(n,`width`,`18`),p(n,`height`,`14`),p(n,`rx`,`2`);let r=s(`path`,t);return i(t,r),p(r,`strokeLinecap`,`round`),p(r,`strokeLinejoin`,`round`),p(r,`d`,`m4 7 8 6 8-6`),t}),A=()=>l(e=>{let t=s(`svg`,e);p(t,`xmlns`,`http://www.w3.org/2000/svg`),p(t,`viewBox`,`0 0 24 24`),p(t,`fill`,`none`),p(t,`stroke`,`currentColor`),p(t,`strokeWidth`,`2`),u(t,`size-[1.05em]`);let n=s(`path`,t);i(t,n),p(n,`strokeLinecap`,`round`),p(n,`strokeLinejoin`,`round`),p(n,`d`,`m12 3 1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3Z`);let r=s(`path`,t);return i(t,r),p(r,`strokeLinecap`,`round`),p(r,`strokeLinejoin`,`round`),p(r,`d`,`M5 18h.01M19 18h.01M12 21h.01`),t}),ie=[{label:`Default`},{label:`Neutral`,color:`neutral`},{label:`Primary`,color:`primary`},{label:`Secondary`,color:`secondary`},{label:`Accent`,color:`accent`},{label:`Info`,color:`info`},{label:`Success`,color:`success`},{label:`Warning`,color:`warning`},{label:`Error`,color:`error`}],ae=[{label:`Filled`,variant:`filled`},{label:`Outlined`,variant:`outlined`},{label:`Dashed`,variant:`dashed`}],oe=[{label:`Login with Email`,icon:`@`,className:`bg-white text-base-content border-base-300`,iconClassName:`bg-base-200 text-base-content`},{label:`Login with GitHub`,icon:`GH`,className:`bg-neutral text-neutral-content border-neutral`,iconClassName:`bg-white/15 text-white`},{label:`Login with Google`,icon:`G`,className:`bg-white text-base-content border-base-300`,iconClassName:`bg-red-100 text-red-700`},{label:`Login with Facebook`,icon:`f`,className:`bg-[#1A77F2] text-white border-[#005fd8]`,iconClassName:`bg-white/15 text-white`},{label:`Login with X`,icon:`X`,className:`bg-black text-white border-black`,iconClassName:`bg-white/15 text-white`},{label:`Login with Apple`,icon:`A`,className:`bg-black text-white border-black`,iconClassName:`bg-white/15 text-white`},{label:`Login with Slack`,icon:`S`,className:`bg-[#622069] text-white border-[#591660]`,iconClassName:`bg-white/15 text-white`},{label:`Login with Microsoft`,icon:`M`,className:`bg-[#2F2F2F] text-white border-black`,iconClassName:`bg-white/15 text-white`},{label:`Login with LINE`,icon:`L`,className:`bg-[#03C755] text-white border-[#00b544]`,iconClassName:`bg-white/15 text-white`},{label:`Login with MetaMask`,icon:`MM`,className:`bg-white text-base-content border-base-300`,iconClassName:`bg-orange-100 text-orange-700`}],se=e=>l(a=>{let o=s(`span`,a);n(()=>{u(o,`inline-grid h-5 min-w-5 place-items-center rounded-full px-1 text-[0.55rem] leading-none font-bold ${e.className??`bg-base-200 text-base-content`}`)});let c=t(`rue:slot:anchor`);return i(o,c),n(()=>{let t=e.text;r(()=>f(t,o,c))}),o}),ce=[{prop:`active`,description:`激活态，追加 btn-active`,type:`boolean`,defaultValue:`false`},{prop:`as`,description:`指定渲染标签，可选 button、a、div`,type:`'button' | 'a' | 'div'`,defaultValue:`'button'`},{prop:`block`,description:`整行按钮，宽度撑满容器`,type:`boolean`,defaultValue:`false`},{prop:`color`,description:`颜色层，danger 会映射到 error 按钮色`,type:`'default' | 'danger' | 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'`,defaultValue:`'default'`},{prop:`danger`,description:`危险态快捷开关，未设置 color 时等价于 color="danger"`,type:`boolean`,defaultValue:`false`},{prop:`disabled`,description:`禁用按钮；a 和 div 根节点也会输出禁用语义`,type:`boolean`,defaultValue:`false`},{prop:`href`,description:`传入后默认以 a 标签渲染`,type:`string`,defaultValue:`-`},{prop:`htmlType`,description:`原生 button 的 type`,type:`'button' | 'submit' | 'reset'`,defaultValue:`'button'`},{prop:`icon`,description:`图标节点`,type:`any`,defaultValue:`-`},{prop:`iconPlacement`,description:`图标位置`,type:`'start' | 'end'`,defaultValue:`'start'`},{prop:`loading`,description:`支持 boolean 或对象写法，可自定义加载图标`,type:`boolean | { delay?: number; icon?: any }`,defaultValue:`false`},{prop:`onClick`,description:`点击按钮时的回调；disabled 或 loading 时不会触发`,type:`(event: MouseEvent) => void`,defaultValue:`-`},{prop:`shape`,description:`按钮形状`,type:`'default' | 'square' | 'circle' | 'round'`,defaultValue:`'default'`},{prop:`size`,description:`尺寸，支持 xs 到 xl，以及 small / middle / large 别名`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'middle' | 'medium' | 'large'`,defaultValue:`-`},{prop:`target`,description:`链接目标窗口，仅 a 标签生效`,type:`string`,defaultValue:`-`},{prop:`type`,description:`视觉类型，直接替代旧的 variant 语义`,type:`'solid' | 'filled' | 'outlined' | 'dashed' | 'text' | 'link'`,defaultValue:`'solid'`},{prop:`wide`,description:`宽按钮，追加 btn-wide`,type:`boolean`,defaultValue:`false`}],le=[{prop:`as`,description:`指定按钮组根节点标签`,type:`any`,defaultValue:`'div'`},{prop:`size`,description:`统一同步组内按钮尺寸`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'middle' | 'medium' | 'large'`,defaultValue:`-`},{prop:`shape`,description:`统一同步组内按钮轮廓；circle 在分组场景下会映射为圆角组合样式`,type:`'default' | 'square' | 'circle' | 'round'`,defaultValue:`-`},{prop:`direction`,description:`按钮组排列方向`,type:`'horizontal' | 'vertical'`,defaultValue:`'horizontal'`},{prop:`block`,description:`让按钮组宽度撑满容器`,type:`boolean`,defaultValue:`false`},{prop:`className`,description:`自定义根节点类名`,type:`string`,defaultValue:`-`}],j=()=>{let{tabTypes:a,tabResponsive:v,tabPalette:x,tabVariants:w,tabDanger:T,tabIcons:ee,tabLoading:j,tabClick:ue,tabSizes:de,tabGroup:fe,tabStates:pe,tabFormLink:me,tabRecipes:he,tabLogin:ge,submitCount:M,clickCount:N,lastAction:P}=_(`useSetup:0:0`,()=>o(()=>({tabTypes:_(`ref:1:0`,()=>g(`preview`)),tabResponsive:_(`ref:1:1`,()=>g(`preview`)),tabPalette:_(`ref:1:2`,()=>g(`preview`)),tabVariants:_(`ref:1:3`,()=>g(`preview`)),tabDanger:_(`ref:1:4`,()=>g(`preview`)),tabIcons:_(`ref:1:5`,()=>g(`preview`)),tabLoading:_(`ref:1:6`,()=>g(`preview`)),tabClick:_(`ref:1:7`,()=>g(`preview`)),tabSizes:_(`ref:1:8`,()=>g(`preview`)),tabGroup:_(`ref:1:9`,()=>g(`preview`)),tabStates:_(`ref:1:10`,()=>g(`preview`)),tabFormLink:_(`ref:1:11`,()=>g(`preview`)),tabRecipes:_(`ref:1:12`,()=>g(`preview`)),tabLogin:_(`ref:1:13`,()=>g(`preview`)),submitCount:_(`ref:1:14`,()=>g(0)),clickCount:_(`ref:1:15`,()=>g(0)),lastAction:_(`ref:1:16`,()=>g(`未触发`))})));return l(o=>{let g=e(),_=t(`rue:component:anchor`);return i(g,_),f(m(C,{children:l(()=>{let o=e(),l=s(`div`,o);i(o,l),u(l,`max-w-none prose prose-sm md:prose-base`);let g=s(`h1`,l);i(l,g),i(g,h(`Button 按钮`));let _=s(`p`,l);i(l,_),u(_,`text-sm mt-3 mb-3`);let C=s(`code`,_);i(_,C),i(C,h(`type`)),i(_,h(`负责视觉类型，`));let F=s(`code`,_);i(_,F),i(F,h(`color`)),i(_,h(`负责主题色，再用`));let I=s(`code`,_);i(_,I),i(I,h(`shape`)),i(_,h(`、`));let L=s(`code`,_);i(_,L),i(L,h(`icon`)),i(_,h(`、`));let R=s(`code`,_);i(_,R),i(R,h(`loading`)),i(_,h(`补足交互细节。`));let z=s(`h2`,l);i(l,z),i(z,h(`何时使用`));let B=s(`ul`,l);i(l,B);let V=s(`li`,B);i(B,V),i(V,h(`需要一个通用操作按钮，并希望颜色、类型、形状和状态能拆开表达。`));let H=s(`li`,B);i(B,H),i(H,h(`需要在表单里区分视觉类型`));let U=s(`code`,H);i(H,U),i(U,h(`type`)),i(H,h(`和原生提交类型`));let W=s(`code`,H);i(H,W),i(W,h(`htmlType`)),i(H,h(`。`));let G=s(`li`,B);i(B,G),i(G,h(`需要统一处理图标按钮、加载按钮、链接按钮和整行按钮。`));let _e=t(`rue:component:anchor`);i(l,_e),n(()=>{let e=m(E,{title:`类型`,summary:`type 现在直接对应视觉类型。`,tab:a,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:[b(S,{children:`Solid`}),b(S,{type:`outlined`,children:`Outlined`}),b(S,{type:`dashed`,children:`Dashed`}),b(S,{type:`filled`,children:`Filled`}),b(S,{type:`text`,children:`Text`}),b(S,{type:`link`,children:`Link`})]})}),code:`<Button>Solid</Button>
        <Button type="outlined">Outlined</Button>
<Button type="dashed">Dashed</Button>
        <Button type="filled">Filled</Button>
<Button type="text">Text</Button>
<Button type="link">Link</Button>`});r(()=>f(e,l,_e))});let ve=t(`rue:component:anchor`);i(l,ve),n(()=>{let e=m(E,{title:`响应式尺寸`,summary:`把原来的响应式按钮演示保留回来，统一改成 size + className 的方式。`,tab:v,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:b(S,{size:`xs`,className:`sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl`,children:`Responsive`})})}),code:`<Button size="xs" className="sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
  Responsive
</Button>`});r(()=>f(e,l,ve))});let ye=t(`rue:component:anchor`);i(l,ye),n(()=>{let e=m(E,{title:`颜色色板`,summary:`原来的颜色演示继续保留，但统一改成 color 语义。`,tab:x,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:ie.map(e=>b(S,{color:e.color,children:e.label},e.label))})}),code:`const tones = [
  { label: 'Default' },
  { label: 'Neutral', color: 'neutral' },
  { label: 'Primary', color: 'primary' },
  { label: 'Secondary', color: 'secondary' },
  { label: 'Accent', color: 'accent' },
  { label: 'Info', color: 'info' },
  { label: 'Success', color: 'success' },
  { label: 'Warning', color: 'warning' },
  { label: 'Error', color: 'error' },
] as const

<div className="flex flex-wrap gap-2">
  {tones.map(tone => (
    <Button key={tone.label} color={tone.color}>
      {tone.label}
    </Button>
  ))}
</div>`});r(()=>f(e,l,ye))});let be=t(`rue:component:anchor`);i(l,be),n(()=>{let e=m(E,{title:`风格矩阵`,summary:`把原来的 soft、outline、dash 演示融合成统一的 type 展示。`,tab:w,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-5`,children:[ae.map(e=>y(`div`,{children:[b(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:e.label}),b(`div`,{className:`flex flex-wrap gap-2`,children:ie.map(t=>b(S,{color:t.color,type:e.variant,children:t.label},`${e.label}-${t.label}`))})]},e.label)),y(`div`,{className:`rounded-box bg-white p-4 text-black`,children:[b(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] text-black/60`,children:`Neutral on light surface`}),y(`div`,{className:`flex flex-wrap gap-2`,children:[b(S,{color:`neutral`,type:`outlined`,children:`Outline`}),b(S,{color:`neutral`,type:`dashed`,children:`Dash`})]})]})]})}),code:`const tones = [
  { label: 'Default' },
  { label: 'Neutral', color: 'neutral' },
  { label: 'Primary', color: 'primary' },
  { label: 'Secondary', color: 'secondary' },
  { label: 'Accent', color: 'accent' },
  { label: 'Info', color: 'info' },
  { label: 'Success', color: 'success' },
  { label: 'Warning', color: 'warning' },
  { label: 'Error', color: 'error' },
] as const

const styles = [
  { label: 'Filled', variant: 'filled' },
  { label: 'Outlined', variant: 'outlined' },
  { label: 'Dashed', variant: 'dashed' },
] as const

{styles.map(style => (
  <div key={style.label}>
    <div className="flex flex-wrap gap-2">
      {tones.map(tone => (
        <Button key={style.label + '-' + tone.label} color={tone.color} type={style.variant}>
          {tone.label}
        </Button>
      ))}
    </div>
  </div>
))}

<div className="bg-white p-4 rounded-box">
  <Button color="neutral" type="outlined">Outline</Button>
  <Button color="neutral" type="dashed">Dash</Button>
</div>`});r(()=>f(e,l,be))});let xe=t(`rue:component:anchor`);i(l,xe),n(()=>{let e=m(E,{title:`危险态`,summary:`danger 是快捷开关，也可以直接通过 color='danger' 控制。`,tab:T,preview:()=>b(`div`,{className:`card bg-neutral text-neutral-content shadow-sm`,children:y(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:[b(S,{color:`danger`,children:`Delete forever`}),b(S,{color:`danger`,type:`outlined`,children:`Remove access`}),b(S,{color:`danger`,type:`filled`,children:`Archive branch`}),b(S,{color:`danger`,type:`text`,children:`Clear cache`})]})}),code:`<Button color="danger">Delete forever</Button>
        <Button color="danger" type="outlined">Remove access</Button>
        <Button color="danger" type="filled">Archive branch</Button>
        <Button color="danger" type="text">Clear cache</Button>`});r(()=>f(e,l,xe))});let Se=t(`rue:component:anchor`);i(l,Se),n(()=>{let e=m(E,{title:`图标与图标位置`,summary:`icon 和 iconPlacement 用来组织图标按钮与带文案按钮。`,tab:ee,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:[b(S,{color:`primary`,icon:b(te,{}),children:`Create project`}),b(S,{color:`secondary`,type:`outlined`,icon:b(O,{}),iconPlacement:`end`,children:`Continue`}),b(S,{color:`accent`,shape:`circle`,icon:b(k,{}),"aria-label":`收藏`}),b(S,{color:`info`,shape:`square`,icon:b(A,{}),"aria-label":`高亮`})]})}),code:`<Button color="primary" icon={<span>+</span>}>
  Create project
</Button>

<Button color="secondary" type="outlined" icon={<span>→</span>} iconPlacement="end">
  Continue
</Button>

<Button color="accent" shape="circle" icon={<span>♥</span>} aria-label="收藏" />`});r(()=>f(e,l,Se))});let Ce=t(`rue:component:anchor`);i(l,Ce),n(()=>{let e=m(E,{title:`加载状态`,summary:`loading 会锁定按钮；对象写法可以替换默认加载图标。`,tab:j,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:[b(S,{color:`primary`,loading:!0,children:`Saving`}),b(S,{type:`outlined`,loading:{icon:b(`span`,{className:`loading loading-dots loading-xs`})},children:`Syncing`}),b(S,{color:`success`,icon:b(ne,{}),children:`Ready to publish`})]})}),code:`<Button color="primary" loading>Saving</Button>

<Button
  type="outlined"
  loading={{ icon: <span className="loading loading-dots loading-xs" /> }}
>
  Syncing
</Button>`});r(()=>f(e,l,Ce))});let we=t(`rue:component:anchor`);i(l,we),n(()=>{let e=m(E,{title:`点击事件`,summary:`onClick 会透传原生点击事件，适合命令触发、埋点和分组按钮内交互。`,tab:ue,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-4`,children:[y(`div`,{className:`flex flex-wrap items-center gap-2`,children:[b(S,{color:`primary`,onClick:e=>{N.value+=1,P.value=`save:${e.currentTarget.tagName.toLowerCase()}`},children:`Trigger save`}),b(S,{type:`outlined`,onClick:e=>{N.value+=1,P.value=`preview:${e.currentTarget.tagName.toLowerCase()}`},children:`Preview draft`}),b(S,{href:`#button-api`,type:`link`,onClick:e=>{e.preventDefault(),N.value+=1,P.value=`link:${e.currentTarget.tagName.toLowerCase()}`},children:`Track jump`})]}),y(`div`,{className:`rounded-box bg-base-200/70 px-4 py-3 text-sm`,children:[y(`div`,{children:[`click count: `,N.value]}),y(`div`,{children:[`last action: `,P.value]})]})]})}),code:`const clickCount = ref(0)
const lastAction = ref('未触发')

<div className="flex flex-wrap items-center gap-2">
  <Button
    color="primary"
    onClick={event => {
      clickCount.value = clickCount.value + 1
      lastAction.value = 'save:' + (event.currentTarget as HTMLElement).tagName.toLowerCase()
    }}
  >
    Trigger save
  </Button>

  <Button
    type="outlined"
    onClick={event => {
      clickCount.value = clickCount.value + 1
      lastAction.value = 'preview:' + (event.currentTarget as HTMLElement).tagName.toLowerCase()
    }}
  >
    Preview draft
  </Button>

  <Button
    href="#button-api"
    type="link"
    onClick={event => {
      event.preventDefault()
      clickCount.value = clickCount.value + 1
      lastAction.value = 'link:' + (event.currentTarget as HTMLElement).tagName.toLowerCase()
    }}
  >
    Track jump
  </Button>
</div>

<div className="rounded-box bg-base-200/70 px-4 py-3 text-sm">
  <div>click count: {clickCount.value}</div>
  <div>last action: {lastAction.value}</div>
</div>`});r(()=>f(e,l,we))});let Te=t(`rue:component:anchor`);i(l,Te),n(()=>{let e=m(E,{title:`尺寸与形状`,summary:`size 管尺寸，shape 管轮廓形态。`,tab:de,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-5`,children:[y(`div`,{children:[b(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Sizes`}),y(`div`,{className:`flex flex-wrap items-center gap-2`,children:[b(S,{size:`small`,children:`Small`}),b(S,{children:`Default`}),b(S,{size:`large`,color:`primary`,children:`Large`}),b(S,{size:`xs`,type:`outlined`,children:`XS`}),b(S,{size:`xl`,color:`secondary`,children:`XL`})]})]}),y(`div`,{children:[b(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Shapes`}),y(`div`,{className:`flex flex-wrap items-center gap-2`,children:[b(S,{color:`primary`,shape:`round`,children:`Round action`}),b(S,{color:`secondary`,shape:`square`,icon:b(A,{}),"aria-label":`square`}),b(S,{color:`accent`,shape:`circle`,icon:b(k,{}),"aria-label":`circle`})]})]})]})}),code:`<Button size="small">Small</Button>
<Button>Default</Button>
<Button size="large" color="primary">Large</Button>
<Button size="xs" type="outlined">XS</Button>
<Button size="xl" color="secondary">XL</Button>

<Button color="primary" shape="round">Round action</Button>
<Button color="secondary" shape="square" icon={<span>⋯</span>} />
<Button color="accent" shape="circle" icon={<span>♥</span>} />`});r(()=>f(e,l,Te))});let Ee=t(`rue:component:anchor`);i(l,Ee),n(()=>{let e=m(E,{title:`按钮组合`,summary:`提供与常见 ButtonGroup 类似的分组能力，这里统一用 Button.Group。`,tab:fe,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-6`,children:[y(`div`,{children:[b(`div`,{className:`mb-3 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Basic`}),y(`div`,{className:`flex flex-wrap items-center gap-3`,children:[y(S.Group,{children:[b(S,{children:`Cancel`}),b(S,{color:`primary`,children:`Confirm`})]}),y(S.Group,{children:[b(S,{disabled:!0,children:`Yesterday`}),b(S,{disabled:!0,children:`Today`}),b(S,{disabled:!0,children:`Tomorrow`})]}),y(S.Group,{children:[b(S,{color:`primary`,children:`L`}),b(S,{children:`M`}),b(S,{children:`M`}),b(S,{type:`dashed`,children:`R`})]})]})]}),y(`div`,{children:[b(`div`,{className:`mb-3 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Icons`}),y(`div`,{className:`flex flex-wrap items-center gap-3`,children:[y(S.Group,{children:[b(S,{color:`primary`,icon:b(`span`,{"aria-hidden":`true`,children:`←`}),children:`Backward`}),b(S,{color:`primary`,icon:b(`span`,{"aria-hidden":`true`,children:`→`}),iconPlacement:`end`,children:`Forward`})]}),y(S.Group,{children:[b(S,{color:`primary`,icon:b(`span`,{"aria-hidden":`true`,children:`«`}),"aria-label":`skip backward`}),b(S,{color:`primary`,icon:b(`span`,{"aria-hidden":`true`,children:`»`}),"aria-label":`skip forward`})]}),y(S.Group,{children:[b(S,{icon:b(`span`,{"aria-hidden":`true`,children:`✦`}),"aria-label":`magic`}),b(S,{icon:b(`span`,{"aria-hidden":`true`,children:`☀`}),"aria-label":`sunny`}),b(S,{icon:b(`span`,{"aria-hidden":`true`,children:`✂`}),"aria-label":`crop`}),b(S,{icon:b(`span`,{"aria-hidden":`true`,children:`⛶`}),"aria-label":`filter`})]})]})]}),y(`div`,{children:[b(`div`,{className:`mb-3 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Circle`}),y(`div`,{className:`flex flex-wrap items-center gap-3`,children:[y(S.Group,{shape:`circle`,children:[b(S,{color:`primary`,children:`Backward`}),b(S,{color:`primary`,children:`Forward`})]}),y(S.Group,{shape:`circle`,children:[b(S,{color:`primary`,icon:b(`span`,{"aria-hidden":`true`,children:`«`}),"aria-label":`circle backward`}),b(S,{color:`primary`,icon:b(`span`,{"aria-hidden":`true`,children:`»`}),"aria-label":`circle forward`})]}),y(S.Group,{shape:`circle`,children:[b(S,{icon:b(`span`,{"aria-hidden":`true`,children:`✦`}),"aria-label":`circle magic`}),b(S,{icon:b(`span`,{"aria-hidden":`true`,children:`☀`}),"aria-label":`circle sunny`}),b(S,{icon:b(`span`,{"aria-hidden":`true`,children:`✂`}),"aria-label":`circle crop`}),b(S,{icon:b(`span`,{"aria-hidden":`true`,children:`⛶`}),"aria-label":`circle filter`})]})]})]}),y(`div`,{children:[b(`div`,{className:`mb-3 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Size`}),y(`div`,{className:`space-y-3`,children:[y(`div`,{className:`flex flex-wrap items-center gap-3`,children:[y(S.Group,{size:`large`,children:[b(S,{children:`Large`}),b(S,{children:`Large`})]}),y(S.Group,{children:[b(S,{children:`Default`}),b(S,{children:`Default`})]}),y(S.Group,{size:`small`,children:[b(S,{children:`Small`}),b(S,{children:`Small`})]})]}),y(`div`,{className:`flex flex-wrap items-center gap-3`,children:[y(S.Group,{size:`large`,shape:`circle`,children:[b(S,{children:`Large`}),b(S,{children:`Large`})]}),y(S.Group,{shape:`circle`,children:[b(S,{children:`Default`}),b(S,{children:`Default`})]}),y(S.Group,{size:`small`,shape:`circle`,children:[b(S,{children:`Small`}),b(S,{children:`Small`})]})]})]})]})]})}),code:`<div className="space-y-6">
  <div>
    <div className="mb-3 text-xs font-medium uppercase tracking-[0.2em] opacity-60">Basic</div>
    <div className="flex flex-wrap items-center gap-3">
      <Button.Group>
        <Button>Cancel</Button>
        <Button color="primary">Confirm</Button>
      </Button.Group>
      <Button.Group>
        <Button disabled>Yesterday</Button>
        <Button disabled>Today</Button>
        <Button disabled>Tomorrow</Button>
      </Button.Group>
      <Button.Group>
        <Button color="primary">L</Button>
        <Button>M</Button>
        <Button>M</Button>
        <Button type="dashed">R</Button>
      </Button.Group>
    </div>
  </div>

  <div>
    <div className="mb-3 text-xs font-medium uppercase tracking-[0.2em] opacity-60">Icons</div>
    <div className="flex flex-wrap items-center gap-3">
      <Button.Group>
        <Button color="primary" icon={<span aria-hidden="true">←</span>}>Backward</Button>
        <Button color="primary" icon={<span aria-hidden="true">→</span>} iconPlacement="end">
          Forward
        </Button>
      </Button.Group>
      <Button.Group>
        <Button color="primary" icon={<span aria-hidden="true">«</span>} aria-label="skip backward" />
        <Button color="primary" icon={<span aria-hidden="true">»</span>} aria-label="skip forward" />
      </Button.Group>
      <Button.Group>
        <Button icon={<span aria-hidden="true">✦</span>} aria-label="magic" />
        <Button icon={<span aria-hidden="true">☀</span>} aria-label="sunny" />
        <Button icon={<span aria-hidden="true">✂</span>} aria-label="crop" />
        <Button icon={<span aria-hidden="true">⛶</span>} aria-label="filter" />
      </Button.Group>
    </div>
  </div>

  <div>
    <div className="mb-3 text-xs font-medium uppercase tracking-[0.2em] opacity-60">Circle</div>
    <div className="flex flex-wrap items-center gap-3">
      <Button.Group shape="circle">
        <Button color="primary">Backward</Button>
        <Button color="primary">Forward</Button>
      </Button.Group>
      <Button.Group shape="circle">
        <Button color="primary" icon={<span aria-hidden="true">«</span>} aria-label="circle backward" />
        <Button color="primary" icon={<span aria-hidden="true">»</span>} aria-label="circle forward" />
      </Button.Group>
      <Button.Group shape="circle">
        <Button icon={<span aria-hidden="true">✦</span>} aria-label="circle magic" />
        <Button icon={<span aria-hidden="true">☀</span>} aria-label="circle sunny" />
        <Button icon={<span aria-hidden="true">✂</span>} aria-label="circle crop" />
        <Button icon={<span aria-hidden="true">⛶</span>} aria-label="circle filter" />
      </Button.Group>
    </div>
  </div>

  <div>
    <div className="mb-3 text-xs font-medium uppercase tracking-[0.2em] opacity-60">Size</div>
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-3">
        <Button.Group size="large">
          <Button>Large</Button>
          <Button>Large</Button>
        </Button.Group>
        <Button.Group>
          <Button>Default</Button>
          <Button>Default</Button>
        </Button.Group>
        <Button.Group size="small">
          <Button>Small</Button>
          <Button>Small</Button>
        </Button.Group>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <Button.Group size="large" shape="circle">
          <Button>Large</Button>
          <Button>Large</Button>
        </Button.Group>
        <Button.Group shape="circle">
          <Button>Default</Button>
          <Button>Default</Button>
        </Button.Group>
        <Button.Group size="small" shape="circle">
          <Button>Small</Button>
          <Button>Small</Button>
        </Button.Group>
      </div>
    </div>
  </div>
</div>`});r(()=>f(e,l,Ee))});let De=t(`rue:component:anchor`);i(l,De),n(()=>{let e=m(E,{title:`状态与布局`,summary:`把原来的 active、disabled、wide、block 示例也融合到当前页面。`,tab:pe,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-5`,children:[y(`div`,{children:[b(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`States`}),y(`div`,{className:`flex flex-wrap gap-2`,children:[b(S,{active:!0,children:`Active`}),b(S,{color:`primary`,active:!0,children:`Primary active`}),b(S,{disabled:!0,children:`Disabled`}),b(S,{href:`#button-api`,disabled:!0,children:`Disabled link`})]})]}),y(`div`,{children:[b(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Layout`}),y(`div`,{className:`flex flex-col gap-2 sm:max-w-sm`,children:[b(S,{wide:!0,children:`Wide button`}),b(S,{block:!0,color:`primary`,children:`Block button`})]})]})]})}),code:`<div className="flex flex-wrap gap-2">
  <Button active>Active</Button>
  <Button color="primary" active>Primary active</Button>
  <Button disabled>Disabled</Button>
  <Button href="#button-api" disabled>Disabled link</Button>
</div>

<div className="flex flex-col gap-2 sm:max-w-sm">
  <Button wide>Wide button</Button>
  <Button block color="primary">Block button</Button>
</div>`});r(()=>f(e,l,De))});let Oe=t(`rue:component:anchor`);i(l,Oe),n(()=>{let e=m(E,{title:`根节点与表单行为`,summary:`默认渲染 button，同时保留链接根节点、div 根节点和表单行为示例。`,tab:me,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-4`,children:[y(`div`,{className:`flex flex-wrap gap-2`,children:[b(S,{children:`Native button`}),b(S,{href:`#button-api`,children:`Anchor`}),b(S,{as:`div`,type:`text`,children:`Div button`})]}),y(`div`,{className:`text-sm opacity-70`,children:[`submit count: `,M.value]}),y(`form`,{className:`flex flex-wrap items-center gap-2`,onSubmit:e=>{e.preventDefault(),M.value+=1},children:[b(S,{color:`primary`,htmlType:`submit`,children:`Submit form`}),b(S,{type:`outlined`,htmlType:`reset`,children:`Reset form`}),b(S,{href:`#button-api`,type:`link`,children:`Jump to API`})]})]})}),code:`const submitCount = ref(0)

<div className="flex flex-wrap gap-2">
  <Button>Native button</Button>
  <Button href="#button-api">Anchor</Button>
  <Button as="div" type="text">Div button</Button>
</div>

<form
  onSubmit={event => {
    event.preventDefault()
    submitCount.value = submitCount.value + 1
  }}
>
  <Button color="primary" htmlType="submit">Submit form</Button>
  <Button type="outlined" htmlType="reset">Reset form</Button>
  <Button href="#button-api" type="link">Jump to API</Button>
</form>`});r(()=>f(e,l,Oe))});let ke=t(`rue:component:anchor`);i(l,ke),n(()=>{let e=m(E,{title:`场景组合`,summary:`把图标、变体、布局属性组合在一起，可以很快搭出操作条。`,tab:he,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-4`,children:[y(`div`,{className:`flex flex-wrap gap-2`,children:[b(S,{color:`primary`,icon:b(ne,{}),children:`Publish`}),b(S,{type:`outlined`,icon:b(O,{}),iconPlacement:`end`,children:`Preview`}),b(S,{type:`text`,icon:b(A,{}),children:`Save draft`})]}),y(`div`,{className:`grid gap-2 md:grid-cols-2`,children:[b(S,{block:!0,className:`justify-start bg-white text-base-content border-base-300`,icon:b(re,{}),children:`Continue with Email`}),b(S,{block:!0,color:`primary`,className:`justify-start`,icon:b(A,{}),children:`Continue with Rue ID`})]})]})}),code:`<div className="flex flex-wrap gap-2">
  <Button color="primary" icon={<span>🚀</span>}>Publish</Button>
  <Button type="outlined" icon={<span>→</span>} iconPlacement="end">Preview</Button>
  <Button type="text" icon={<span>✦</span>}>Save draft</Button>
</div>

<div className="grid gap-2 md:grid-cols-2">
  <Button block className="justify-start bg-white text-base-content border-base-300" icon={<span>✉</span>}>
    Continue with Email
  </Button>
  <Button block color="primary" className="justify-start" icon={<span>✦</span>}>
    Continue with Rue ID
  </Button>
</div>`});r(()=>f(e,l,ke))});let Ae=t(`rue:component:anchor`);i(l,Ae),n(()=>{let e=m(E,{title:`登录按钮`,summary:`把原来的 provider 登录按钮演示融合回来，统一改成 icon + block + className 的新 API 写法。`,tab:ge,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:b(`div`,{className:`grid gap-2 md:grid-cols-2`,children:oe.map(e=>b(S,{block:!0,className:`justify-start ${e.className}`,icon:b(se,{text:e.icon,className:e.iconClassName}),children:e.label},e.label))})})}),code:`const loginButtons = [
  { label: 'Login with Email', icon: '@', className: 'bg-white text-base-content border-base-300', iconClassName: 'bg-base-200 text-base-content' },
  { label: 'Login with GitHub', icon: 'GH', className: 'bg-neutral text-neutral-content border-neutral', iconClassName: 'bg-white/15 text-white' },
  { label: 'Login with Google', icon: 'G', className: 'bg-white text-base-content border-base-300', iconClassName: 'bg-red-100 text-red-700' },
  { label: 'Login with Slack', icon: 'S', className: 'bg-[#622069] text-white border-[#591660]', iconClassName: 'bg-white/15 text-white' },
] as const

<div className="grid gap-2 md:grid-cols-2">
  {loginButtons.map(item => (
    <Button
      key={item.label}
      block
      className={'justify-start ' + item.className}
      icon={<BrandMark text={item.icon} className={item.iconClassName} />}
    >
      {item.label}
    </Button>
  ))}
</div>`});r(()=>f(e,l,Ae))});let K=s(`h2`,l);i(l,K),p(K,`id`,`button-api`),i(K,h(`API`));let je=s(`p`,l);i(l,je),i(je,h(`当前页面展示的是 Button 与 Button.Group 的完整可用 API。`));let q=s(`p`,l);i(l,q),i(q,h(`推荐使用顺序：`));let Me=s(`code`,q);i(q,Me),i(Me,h(`type`)),i(q,h(`->`));let Ne=s(`code`,q);i(q,Ne),i(Ne,h(`color`)),i(q,h(`->`));let Pe=s(`code`,q);i(q,Pe),i(Pe,h(`shape`)),i(q,h(`->`));let Fe=d(q);i(q,Fe),c(Fe,` `);let Ie=s(`code`,q);i(q,Ie),i(Ie,h(`size`)),i(q,h(`->`));let Le=s(`code`,q);i(q,Le),i(Le,h(`loading`)),i(q,h(`->`));let Re=s(`code`,q);i(q,Re),i(Re,h(`disabled`)),i(q,h(`。`));let ze=s(`h3`,l);i(l,ze),i(ze,h(`Button`));let Be=t(`rue:component:anchor`);i(l,Be),n(()=>{let e=m(D,{rows:ce});r(()=>f(e,l,Be))});let Ve=s(`h3`,l);i(l,Ve),i(Ve,h(`Button.Group`));let He=t(`rue:component:anchor`);i(l,He),n(()=>{let e=m(D,{rows:le});r(()=>f(e,l,He))});let Ue=s(`h2`,l);i(l,Ue),i(Ue,h(`FAQ`));let We=s(`h3`,l);i(l,We),i(We,h(`为什么有 type 还需要 htmlType？`));let J=s(`p`,l);i(l,J);let Ge=s(`code`,J);i(J,Ge),i(Ge,h(`type`)),i(J,h(`负责按钮视觉类型，`));let Ke=s(`code`,J);i(J,Ke),i(Ke,h(`htmlType`)),i(J,h(`负责原生 button 行为。视觉和提交语义拆开之后， 表单场景会更直接。`));let qe=s(`h3`,l);i(l,qe),i(qe,h(`type 和 color 应该怎么分工？`));let Y=s(`p`,l);i(l,Y);let Je=s(`code`,Y);i(Y,Je),i(Je,h(`type`)),i(Y,h(`负责视觉类型，比如`));let Ye=s(`code`,Y);i(Y,Ye),i(Ye,h(`outlined`)),i(Y,h(`、`));let Xe=s(`code`,Y);i(Y,Xe),i(Xe,h(`filled`)),i(Y,h(`、`));let Ze=s(`code`,Y);i(Y,Ze),i(Ze,h(`text`)),i(Y,h(`。`));let Qe=s(`code`,Y);i(Y,Qe),i(Qe,h(`color`)),i(Y,h(`负责主题色，比如`));let $e=s(`code`,Y);i(Y,$e),i($e,h(`primary`)),i(Y,h(`、`));let et=s(`code`,Y);i(Y,et),i(et,h(`secondary`)),i(Y,h(`、`));let tt=s(`code`,Y);i(Y,tt),i(tt,h(`danger`)),i(Y,h(`。`));let X=s(`p`,l);i(l,X),i(X,h(`大多数场景可以先定颜色， 再根据密度和层级选择`));let nt=s(`code`,X);i(X,nt),i(nt,h(`solid`)),i(X,h(`、`));let rt=s(`code`,X);i(X,rt),i(rt,h(`outlined`)),i(X,h(`、`));let Z=s(`code`,X);i(X,Z),i(Z,h(`filled`)),i(X,h(`或`));let it=s(`code`,X);i(X,it),i(it,h(`text`)),i(X,h(`。`));let at=s(`h3`,l);i(l,at),i(at,h(`loading 对象里的 delay 会生效吗？`));let Q=s(`p`,l);i(l,Q),i(Q,h(`当前版本已经支持`));let ot=s(`code`,Q);i(Q,ot),i(ot,h(`loading`)),i(Q,h(`的对象写法和自定义`));let st=s(`code`,Q);i(Q,st),i(st,h(`icon`)),i(Q,h(`。`));let ct=s(`code`,Q);i(Q,ct),i(ct,h(`delay`)),i(Q,h(`字段已保留在配置结构里，后续如果补充延迟显示策略，可以直接在现有接口上继续扩展。`));let lt=s(`h3`,l);i(l,lt),i(lt,h(`Button.Group 会覆盖子按钮哪些属性？`));let $=s(`p`,l);i(l,$),i($,h(`组级只会统一同步`));let ut=s(`code`,$);i($,ut),i(ut,h(`size`)),i($,h(`和`));let dt=s(`code`,$);i($,dt),i(dt,h(`shape`)),i($,h(`，方便在一组按钮上集中控制尺寸和轮廓。 每个子按钮自己的`));let ft=s(`code`,$);i($,ft),i(ft,h(`color`)),i($,h(`、`));let pt=s(`code`,$);i($,pt),i(pt,h(`type`)),i($,h(`、`));let mt=s(`code`,$);i($,mt),i(mt,h(`disabled`)),i($,h(`、`));let ht=s(`code`,$);i($,ht),i(ht,h(`onClick`)),i($,h(`仍然在各自的`));let gt=d($);i($,gt),c(gt,` `);let _t=s(`code`,$);return i($,_t),i(_t,h(`Button`)),i($,h(`上配置。`)),o})}),g,_),g})};export{j as default};