import{$ as e,Ht as t,J as n,Lt as r,Q as i,X as a,Xt as o,Z as s,at as c,et as l,l as u,pt as d,q as f,qt as p,s as m,st as h,t as g}from"./vapor-runtime-iQZthBPQ.js";import{a as _,n as v}from"./vapor-helpers-vapor-BjKHCvOa.js";import{a as y,i as b}from"./persistentSidebarPlayground-BfF7yM0K.js";import{t as x}from"./Code-CZqShVUj.js";import{t as S}from"./button-CyhsFe_V.js";import{r as C}from"./SidebarPlaygroundDesign-BcHYLGe4.js";import{t as w}from"./preview-test-gate-PvTX1w6L.js";var T=[`preview`,`code`],ee=(e,t)=>u(r=>{let p=i(`div`,r);c(p,`role`,`tablist`),h(p,`tabs tabs-box mb-3 mt-4`);let g=a(`rue:list:start`),_=a(`rue:list:end`);n(p,g),n(p,_);let y=new Map;return o(()=>{y=v({items:T||[],getKey:(e,t)=>t,elements:y,parent:g.parentNode,before:_,singleRoot:!0,trackIndex:!1,start:g,renderItem:(r,a,p,g,_)=>{m(u(()=>{let a=s(),u=e===r,p=i(`button`,a);n(a,p),c(p,`type`,`button`),c(p,`role`,`tab`),o(()=>{c(p,`aria-selected`,String(u?`true`:`false`))}),o(()=>{h(p,`tab ${u?`tab-active`:``}`)}),f(p,`click`,()=>t(r));let m=l(p);return n(p,m),o(()=>{d(m,r===`preview`?`预览`:`JSX代码`)}),a}),a,p)}})}),p}),E=r=>u(c=>{let l=i(`div`,c);h(l,`component-preview not-prose text-base-content my-6 lg:my-12`);let d=i(`div`,l);n(l,d),h(d,`flex flex-wrap items-start justify-between gap-3`);let f=i(`div`,d);n(d,f);let p=i(`h2`,f);n(f,p),h(p,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(p,e(`# `));let _=a(`rue:slot:anchor`);n(p,_),o(()=>{let e=r.title;t(()=>m(e,p,_))});let v=a(`rue:slot:anchor`);n(f,v),o(()=>{let e=r.summary?u(()=>{let e=s(),c=i(`p`,e);n(e,c),h(c,`m-0 text-sm opacity-70`);let l=a(`rue:slot:anchor`);return n(c,l),o(()=>{let e=r.summary;t(()=>m(e,c,l))}),e}):``;t(()=>m(e,f,v))});let y=a(`rue:slot:anchor`);n(l,y),o(()=>{let e=ee(r.tab.value,e=>r.tab.value=e);t(()=>m(e,l,y))}),n(l,e(` `));let b=a(`rue:slot:anchor`);return n(l,b),o(()=>{let e=r.tab.value===`preview`?w(r.title,r.preview):u(()=>{let e=s(),i=a(`rue:component:anchor`);return n(e,i),o(()=>{let n=g(x,{className:`mt-2`,lang:`tsx`,code:r.code});t(()=>m(n,e,i))}),e});t(()=>m(e,l,b))}),l}),D=r=>u(l=>{let d=i(`div`,l);h(d,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=i(`table`,d);n(d,f),h(f,`table table-zebra`);let p=i(`thead`,f);n(f,p);let g=i(`tr`,p);n(p,g);let _=i(`th`,g);n(g,_),n(_,e(`属性`));let y=i(`th`,g);n(g,y),n(y,e(`说明`));let b=i(`th`,g);n(g,b),n(b,e(`类型`));let x=i(`th`,g);n(g,x),n(x,e(`默认值`));let S=i(`tbody`,f);n(f,S);let C=a(`rue:list:start`),w=a(`rue:list:end`);n(S,C),n(S,w);let T=new Map;return o(()=>{T=v({items:r.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,r,l,d,f)=>{m(u(()=>{let r=s(),l=i(`tr`,r);n(r,l),o(()=>{c(l,`key`,String(e.prop))});let u=i(`td`,l);n(l,u);let d=i(`code`,u);n(u,d);let f=a(`rue:slot:anchor`);n(d,f),o(()=>{let n=e.prop;t(()=>m(n,d,f))});let p=i(`td`,l);n(l,p);let h=a(`rue:slot:anchor`);n(p,h),o(()=>{let n=e.description;t(()=>m(n,p,h))});let g=i(`td`,l);n(l,g);let _=i(`code`,g);n(g,_);let v=a(`rue:slot:anchor`);n(_,v),o(()=>{let n=e.type;t(()=>m(n,_,v))});let y=i(`td`,l);n(l,y);let b=i(`code`,y);n(y,b);let x=a(`rue:slot:anchor`);return n(b,x),o(()=>{let n=e.defaultValue;t(()=>m(n,b,x))}),r}),r,l)}})}),d}),te=()=>u(e=>{let t=i(`svg`,e);c(t,`xmlns`,`http://www.w3.org/2000/svg`),c(t,`viewBox`,`0 0 24 24`),c(t,`fill`,`none`),c(t,`stroke`,`currentColor`),c(t,`strokeWidth`,`2`),h(t,`size-[1.05em]`);let r=i(`path`,t);return n(t,r),c(r,`strokeLinecap`,`round`),c(r,`strokeLinejoin`,`round`),c(r,`d`,`M12 5v14M5 12h14`),t}),O=()=>u(e=>{let t=i(`svg`,e);c(t,`xmlns`,`http://www.w3.org/2000/svg`),c(t,`viewBox`,`0 0 24 24`),c(t,`fill`,`none`),c(t,`stroke`,`currentColor`),c(t,`strokeWidth`,`2`),h(t,`size-[1.05em]`);let r=i(`path`,t);n(t,r),c(r,`strokeLinecap`,`round`),c(r,`strokeLinejoin`,`round`),c(r,`d`,`M5 12h14`);let a=i(`path`,t);return n(t,a),c(a,`strokeLinecap`,`round`),c(a,`strokeLinejoin`,`round`),c(a,`d`,`m13 6 6 6-6 6`),t}),k=()=>u(e=>{let t=i(`svg`,e);c(t,`xmlns`,`http://www.w3.org/2000/svg`),c(t,`viewBox`,`0 0 24 24`),c(t,`fill`,`none`),c(t,`stroke`,`currentColor`),c(t,`strokeWidth`,`2`),h(t,`size-[1.05em]`);let r=i(`path`,t);return n(t,r),c(r,`strokeLinecap`,`round`),c(r,`strokeLinejoin`,`round`),c(r,`d`,`M12 20s-7-4.35-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 10c0 5.65-7 10-7 10Z`),t}),ne=()=>u(e=>{let t=i(`svg`,e);c(t,`xmlns`,`http://www.w3.org/2000/svg`),c(t,`viewBox`,`0 0 24 24`),c(t,`fill`,`none`),c(t,`stroke`,`currentColor`),c(t,`strokeWidth`,`2`),h(t,`size-[1.05em]`);let r=i(`path`,t);n(t,r),c(r,`strokeLinecap`,`round`),c(r,`strokeLinejoin`,`round`),c(r,`d`,`M4.5 19.5 9 15l6 6`);let a=i(`path`,t);n(t,a),c(a,`strokeLinecap`,`round`),c(a,`strokeLinejoin`,`round`),c(a,`d`,`M15 9c0-3.5 2.5-6 6-6 0 3.5-2.5 6-6 6Z`);let o=i(`path`,t);n(t,o),c(o,`strokeLinecap`,`round`),c(o,`strokeLinejoin`,`round`),c(o,`d`,`M15 9 9 15`);let s=i(`circle`,t);return n(t,s),c(s,`cx`,`14`),c(s,`cy`,`10`),c(s,`r`,`1`),c(s,`fill`,`currentColor`),c(s,`stroke`,`none`),t}),re=()=>u(e=>{let t=i(`svg`,e);c(t,`xmlns`,`http://www.w3.org/2000/svg`),c(t,`viewBox`,`0 0 24 24`),c(t,`fill`,`none`),c(t,`stroke`,`currentColor`),c(t,`strokeWidth`,`2`),h(t,`size-[1.05em]`);let r=i(`rect`,t);n(t,r),c(r,`x`,`3`),c(r,`y`,`5`),c(r,`width`,`18`),c(r,`height`,`14`),c(r,`rx`,`2`);let a=i(`path`,t);return n(t,a),c(a,`strokeLinecap`,`round`),c(a,`strokeLinejoin`,`round`),c(a,`d`,`m4 7 8 6 8-6`),t}),A=()=>u(e=>{let t=i(`svg`,e);c(t,`xmlns`,`http://www.w3.org/2000/svg`),c(t,`viewBox`,`0 0 24 24`),c(t,`fill`,`none`),c(t,`stroke`,`currentColor`),c(t,`strokeWidth`,`2`),h(t,`size-[1.05em]`);let r=i(`path`,t);n(t,r),c(r,`strokeLinecap`,`round`),c(r,`strokeLinejoin`,`round`),c(r,`d`,`m12 3 1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3Z`);let a=i(`path`,t);return n(t,a),c(a,`strokeLinecap`,`round`),c(a,`strokeLinejoin`,`round`),c(a,`d`,`M5 18h.01M19 18h.01M12 21h.01`),t}),ie=[{label:`Default`},{label:`Neutral`,color:`neutral`},{label:`Primary`,color:`primary`},{label:`Secondary`,color:`secondary`},{label:`Accent`,color:`accent`},{label:`Info`,color:`info`},{label:`Success`,color:`success`},{label:`Warning`,color:`warning`},{label:`Error`,color:`error`}],ae=[{label:`Filled`,variant:`filled`},{label:`Outlined`,variant:`outlined`},{label:`Dashed`,variant:`dashed`}],oe=[{label:`Login with Email`,icon:`@`,className:`bg-white text-base-content border-base-300`,iconClassName:`bg-base-200 text-base-content`},{label:`Login with GitHub`,icon:`GH`,className:`bg-neutral text-neutral-content border-neutral`,iconClassName:`bg-white/15 text-white`},{label:`Login with Google`,icon:`G`,className:`bg-white text-base-content border-base-300`,iconClassName:`bg-red-100 text-red-700`},{label:`Login with Facebook`,icon:`f`,className:`bg-[#1A77F2] text-white border-[#005fd8]`,iconClassName:`bg-white/15 text-white`},{label:`Login with X`,icon:`X`,className:`bg-black text-white border-black`,iconClassName:`bg-white/15 text-white`},{label:`Login with Apple`,icon:`A`,className:`bg-black text-white border-black`,iconClassName:`bg-white/15 text-white`},{label:`Login with Slack`,icon:`S`,className:`bg-[#622069] text-white border-[#591660]`,iconClassName:`bg-white/15 text-white`},{label:`Login with Microsoft`,icon:`M`,className:`bg-[#2F2F2F] text-white border-black`,iconClassName:`bg-white/15 text-white`},{label:`Login with LINE`,icon:`L`,className:`bg-[#03C755] text-white border-[#00b544]`,iconClassName:`bg-white/15 text-white`},{label:`Login with MetaMask`,icon:`MM`,className:`bg-white text-base-content border-base-300`,iconClassName:`bg-orange-100 text-orange-700`}],se=e=>u(r=>{let s=i(`span`,r);o(()=>{h(s,`inline-grid h-5 min-w-5 place-items-center rounded-full px-1 text-[0.55rem] leading-none font-bold ${e.className??`bg-base-200 text-base-content`}`)});let c=a(`rue:slot:anchor`);return n(s,c),o(()=>{let n=e.text;t(()=>m(n,s,c))}),s}),ce=[{prop:`active`,description:`激活态，追加 btn-active`,type:`boolean`,defaultValue:`false`},{prop:`as`,description:`指定渲染标签，可选 button、a、div`,type:`'button' | 'a' | 'div'`,defaultValue:`'button'`},{prop:`block`,description:`整行按钮，宽度撑满容器`,type:`boolean`,defaultValue:`false`},{prop:`color`,description:`颜色层，danger 会映射到 error 按钮色`,type:`'default' | 'danger' | 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'`,defaultValue:`'default'`},{prop:`danger`,description:`危险态快捷开关，未设置 color 时等价于 color="danger"`,type:`boolean`,defaultValue:`false`},{prop:`disabled`,description:`禁用按钮；a 和 div 根节点也会输出禁用语义`,type:`boolean`,defaultValue:`false`},{prop:`href`,description:`传入后默认以 a 标签渲染`,type:`string`,defaultValue:`-`},{prop:`htmlType`,description:`原生 button 的 type`,type:`'button' | 'submit' | 'reset'`,defaultValue:`'button'`},{prop:`icon`,description:`图标节点`,type:`any`,defaultValue:`-`},{prop:`iconPlacement`,description:`图标位置`,type:`'start' | 'end'`,defaultValue:`'start'`},{prop:`loading`,description:`支持 boolean 或对象写法，可自定义加载图标`,type:`boolean | { delay?: number; icon?: any }`,defaultValue:`false`},{prop:`onClick`,description:`点击按钮时的回调；disabled 或 loading 时不会触发`,type:`(event: MouseEvent) => void`,defaultValue:`-`},{prop:`shape`,description:`按钮形状`,type:`'default' | 'square' | 'circle' | 'round'`,defaultValue:`'default'`},{prop:`size`,description:`尺寸，支持 xs 到 xl，以及 small / middle / large 别名`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'middle' | 'medium' | 'large'`,defaultValue:`-`},{prop:`target`,description:`链接目标窗口，仅 a 标签生效`,type:`string`,defaultValue:`-`},{prop:`type`,description:`视觉类型，直接替代旧的 variant 语义`,type:`'solid' | 'filled' | 'outlined' | 'dashed' | 'text' | 'link'`,defaultValue:`'solid'`},{prop:`wide`,description:`宽按钮，追加 btn-wide`,type:`boolean`,defaultValue:`false`}],le=[{prop:`as`,description:`指定按钮组根节点标签`,type:`any`,defaultValue:`'div'`},{prop:`size`,description:`统一同步组内按钮尺寸`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'middle' | 'medium' | 'large'`,defaultValue:`-`},{prop:`shape`,description:`统一同步组内按钮轮廓；circle 在分组场景下会映射为圆角组合样式`,type:`'default' | 'square' | 'circle' | 'round'`,defaultValue:`-`},{prop:`direction`,description:`按钮组排列方向`,type:`'horizontal' | 'vertical'`,defaultValue:`'horizontal'`},{prop:`block`,description:`让按钮组宽度撑满容器`,type:`boolean`,defaultValue:`false`},{prop:`className`,description:`自定义根节点类名`,type:`string`,defaultValue:`-`}],j=()=>{let{tabTypes:f,tabResponsive:v,tabPalette:x,tabVariants:w,tabDanger:T,tabIcons:ee,tabLoading:j,tabClick:ue,tabSizes:de,tabGroup:fe,tabStates:pe,tabFormLink:me,tabRecipes:he,tabLogin:ge,submitCount:M,clickCount:N,lastAction:P}=_(`useSetup:0:0`,()=>p(()=>({tabTypes:_(`ref:1:0`,()=>r(`preview`)),tabResponsive:_(`ref:1:1`,()=>r(`preview`)),tabPalette:_(`ref:1:2`,()=>r(`preview`)),tabVariants:_(`ref:1:3`,()=>r(`preview`)),tabDanger:_(`ref:1:4`,()=>r(`preview`)),tabIcons:_(`ref:1:5`,()=>r(`preview`)),tabLoading:_(`ref:1:6`,()=>r(`preview`)),tabClick:_(`ref:1:7`,()=>r(`preview`)),tabSizes:_(`ref:1:8`,()=>r(`preview`)),tabGroup:_(`ref:1:9`,()=>r(`preview`)),tabStates:_(`ref:1:10`,()=>r(`preview`)),tabFormLink:_(`ref:1:11`,()=>r(`preview`)),tabRecipes:_(`ref:1:12`,()=>r(`preview`)),tabLogin:_(`ref:1:13`,()=>r(`preview`)),submitCount:_(`ref:1:14`,()=>r(0)),clickCount:_(`ref:1:15`,()=>r(0)),lastAction:_(`ref:1:16`,()=>r(`未触发`))})));return u(r=>{let p=s(),_=a(`rue:component:anchor`);return n(p,_),m(g(C,{children:u(()=>{let r=s(),u=i(`div`,r);n(r,u),h(u,`max-w-none prose prose-sm md:prose-base`);let p=i(`h1`,u);n(u,p),n(p,e(`Button 按钮`));let _=i(`p`,u);n(u,_),h(_,`text-sm mt-3 mb-3`);let C=i(`code`,_);n(_,C),n(C,e(`type`)),n(_,e(`负责视觉类型，`));let F=i(`code`,_);n(_,F),n(F,e(`color`)),n(_,e(`负责主题色，再用`));let I=i(`code`,_);n(_,I),n(I,e(`shape`)),n(_,e(`、`));let L=i(`code`,_);n(_,L),n(L,e(`icon`)),n(_,e(`、`));let R=i(`code`,_);n(_,R),n(R,e(`loading`)),n(_,e(`补足交互细节。`));let z=i(`h2`,u);n(u,z),n(z,e(`何时使用`));let B=i(`ul`,u);n(u,B);let V=i(`li`,B);n(B,V),n(V,e(`需要一个通用操作按钮，并希望颜色、类型、形状和状态能拆开表达。`));let H=i(`li`,B);n(B,H),n(H,e(`需要在表单里区分视觉类型`));let U=i(`code`,H);n(H,U),n(U,e(`type`)),n(H,e(`和原生提交类型`));let W=i(`code`,H);n(H,W),n(W,e(`htmlType`)),n(H,e(`。`));let G=i(`li`,B);n(B,G),n(G,e(`需要统一处理图标按钮、加载按钮、链接按钮和整行按钮。`));let _e=a(`rue:component:anchor`);n(u,_e),o(()=>{let e=g(E,{title:`类型`,summary:`type 现在直接对应视觉类型。`,tab:f,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:[b(S,{children:`Solid`}),b(S,{type:`outlined`,children:`Outlined`}),b(S,{type:`dashed`,children:`Dashed`}),b(S,{type:`filled`,children:`Filled`}),b(S,{type:`text`,children:`Text`}),b(S,{type:`link`,children:`Link`})]})}),code:`<Button>Solid</Button>
        <Button type="outlined">Outlined</Button>
<Button type="dashed">Dashed</Button>
        <Button type="filled">Filled</Button>
<Button type="text">Text</Button>
<Button type="link">Link</Button>`});t(()=>m(e,u,_e))});let ve=a(`rue:component:anchor`);n(u,ve),o(()=>{let e=g(E,{title:`响应式尺寸`,summary:`把原来的响应式按钮演示保留回来，统一改成 size + className 的方式。`,tab:v,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:b(S,{size:`xs`,className:`sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl`,children:`Responsive`})})}),code:`<Button size="xs" className="sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
  Responsive
</Button>`});t(()=>m(e,u,ve))});let ye=a(`rue:component:anchor`);n(u,ye),o(()=>{let e=g(E,{title:`颜色色板`,summary:`原来的颜色演示继续保留，但统一改成 color 语义。`,tab:x,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:ie.map(e=>b(S,{color:e.color,children:e.label},e.label))})}),code:`const tones = [
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
</div>`});t(()=>m(e,u,ye))});let be=a(`rue:component:anchor`);n(u,be),o(()=>{let e=g(E,{title:`风格矩阵`,summary:`把原来的 soft、outline、dash 演示融合成统一的 type 展示。`,tab:w,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-5`,children:[ae.map(e=>y(`div`,{children:[b(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:e.label}),b(`div`,{className:`flex flex-wrap gap-2`,children:ie.map(t=>b(S,{color:t.color,type:e.variant,children:t.label},`${e.label}-${t.label}`))})]},e.label)),y(`div`,{className:`rounded-box bg-white p-4 text-black`,children:[b(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] text-black/60`,children:`Neutral on light surface`}),y(`div`,{className:`flex flex-wrap gap-2`,children:[b(S,{color:`neutral`,type:`outlined`,children:`Outline`}),b(S,{color:`neutral`,type:`dashed`,children:`Dash`})]})]})]})}),code:`const tones = [
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
</div>`});t(()=>m(e,u,be))});let xe=a(`rue:component:anchor`);n(u,xe),o(()=>{let e=g(E,{title:`危险态`,summary:`danger 是快捷开关，也可以直接通过 color='danger' 控制。`,tab:T,preview:()=>b(`div`,{className:`card bg-neutral text-neutral-content shadow-sm`,children:y(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:[b(S,{color:`danger`,children:`Delete forever`}),b(S,{color:`danger`,type:`outlined`,children:`Remove access`}),b(S,{color:`danger`,type:`filled`,children:`Archive branch`}),b(S,{color:`danger`,type:`text`,children:`Clear cache`})]})}),code:`<Button color="danger">Delete forever</Button>
        <Button color="danger" type="outlined">Remove access</Button>
        <Button color="danger" type="filled">Archive branch</Button>
        <Button color="danger" type="text">Clear cache</Button>`});t(()=>m(e,u,xe))});let Se=a(`rue:component:anchor`);n(u,Se),o(()=>{let e=g(E,{title:`图标与图标位置`,summary:`icon 和 iconPlacement 用来组织图标按钮与带文案按钮。`,tab:ee,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:[b(S,{color:`primary`,icon:b(te,{}),children:`Create project`}),b(S,{color:`secondary`,type:`outlined`,icon:b(O,{}),iconPlacement:`end`,children:`Continue`}),b(S,{color:`accent`,shape:`circle`,icon:b(k,{}),"aria-label":`收藏`}),b(S,{color:`info`,shape:`square`,icon:b(A,{}),"aria-label":`高亮`})]})}),code:`<Button color="primary" icon={<span>+</span>}>
  Create project
</Button>

<Button color="secondary" type="outlined" icon={<span>→</span>} iconPlacement="end">
  Continue
</Button>

<Button color="accent" shape="circle" icon={<span>♥</span>} aria-label="收藏" />`});t(()=>m(e,u,Se))});let Ce=a(`rue:component:anchor`);n(u,Ce),o(()=>{let e=g(E,{title:`加载状态`,summary:`loading 会锁定按钮；对象写法可以替换默认加载图标。`,tab:j,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:[b(S,{color:`primary`,loading:!0,children:`Saving`}),b(S,{type:`outlined`,loading:{icon:b(`span`,{className:`loading loading-dots loading-xs`})},children:`Syncing`}),b(S,{color:`success`,icon:b(ne,{}),children:`Ready to publish`})]})}),code:`<Button color="primary" loading>Saving</Button>

<Button
  type="outlined"
  loading={{ icon: <span className="loading loading-dots loading-xs" /> }}
>
  Syncing
</Button>`});t(()=>m(e,u,Ce))});let we=a(`rue:component:anchor`);n(u,we),o(()=>{let e=g(E,{title:`点击事件`,summary:`onClick 会透传原生点击事件，适合命令触发、埋点和分组按钮内交互。`,tab:ue,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-4`,children:[y(`div`,{className:`flex flex-wrap items-center gap-2`,children:[b(S,{color:`primary`,onClick:e=>{N.value+=1,P.value=`save:${e.currentTarget.tagName.toLowerCase()}`},children:`Trigger save`}),b(S,{type:`outlined`,onClick:e=>{N.value+=1,P.value=`preview:${e.currentTarget.tagName.toLowerCase()}`},children:`Preview draft`}),b(S,{href:`#button-api`,type:`link`,onClick:e=>{e.preventDefault(),N.value+=1,P.value=`link:${e.currentTarget.tagName.toLowerCase()}`},children:`Track jump`})]}),y(`div`,{className:`rounded-box bg-base-200/70 px-4 py-3 text-sm`,children:[y(`div`,{children:[`click count: `,N.value]}),y(`div`,{children:[`last action: `,P.value]})]})]})}),code:`const clickCount = ref(0)
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
</div>`});t(()=>m(e,u,we))});let Te=a(`rue:component:anchor`);n(u,Te),o(()=>{let e=g(E,{title:`尺寸与形状`,summary:`size 管尺寸，shape 管轮廓形态。`,tab:de,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-5`,children:[y(`div`,{children:[b(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Sizes`}),y(`div`,{className:`flex flex-wrap items-center gap-2`,children:[b(S,{size:`small`,children:`Small`}),b(S,{children:`Default`}),b(S,{size:`large`,color:`primary`,children:`Large`}),b(S,{size:`xs`,type:`outlined`,children:`XS`}),b(S,{size:`xl`,color:`secondary`,children:`XL`})]})]}),y(`div`,{children:[b(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Shapes`}),y(`div`,{className:`flex flex-wrap items-center gap-2`,children:[b(S,{color:`primary`,shape:`round`,children:`Round action`}),b(S,{color:`secondary`,shape:`square`,icon:b(A,{}),"aria-label":`square`}),b(S,{color:`accent`,shape:`circle`,icon:b(k,{}),"aria-label":`circle`})]})]})]})}),code:`<Button size="small">Small</Button>
<Button>Default</Button>
<Button size="large" color="primary">Large</Button>
<Button size="xs" type="outlined">XS</Button>
<Button size="xl" color="secondary">XL</Button>

<Button color="primary" shape="round">Round action</Button>
<Button color="secondary" shape="square" icon={<span>⋯</span>} />
<Button color="accent" shape="circle" icon={<span>♥</span>} />`});t(()=>m(e,u,Te))});let Ee=a(`rue:component:anchor`);n(u,Ee),o(()=>{let e=g(E,{title:`按钮组合`,summary:`提供与常见 ButtonGroup 类似的分组能力，这里统一用 Button.Group。`,tab:fe,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-6`,children:[y(`div`,{children:[b(`div`,{className:`mb-3 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Basic`}),y(`div`,{className:`flex flex-wrap items-center gap-3`,children:[y(S.Group,{children:[b(S,{children:`Cancel`}),b(S,{color:`primary`,children:`Confirm`})]}),y(S.Group,{children:[b(S,{disabled:!0,children:`Yesterday`}),b(S,{disabled:!0,children:`Today`}),b(S,{disabled:!0,children:`Tomorrow`})]}),y(S.Group,{children:[b(S,{color:`primary`,children:`L`}),b(S,{children:`M`}),b(S,{children:`M`}),b(S,{type:`dashed`,children:`R`})]})]})]}),y(`div`,{children:[b(`div`,{className:`mb-3 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Icons`}),y(`div`,{className:`flex flex-wrap items-center gap-3`,children:[y(S.Group,{children:[b(S,{color:`primary`,icon:b(`span`,{"aria-hidden":`true`,children:`←`}),children:`Backward`}),b(S,{color:`primary`,icon:b(`span`,{"aria-hidden":`true`,children:`→`}),iconPlacement:`end`,children:`Forward`})]}),y(S.Group,{children:[b(S,{color:`primary`,icon:b(`span`,{"aria-hidden":`true`,children:`«`}),"aria-label":`skip backward`}),b(S,{color:`primary`,icon:b(`span`,{"aria-hidden":`true`,children:`»`}),"aria-label":`skip forward`})]}),y(S.Group,{children:[b(S,{icon:b(`span`,{"aria-hidden":`true`,children:`✦`}),"aria-label":`magic`}),b(S,{icon:b(`span`,{"aria-hidden":`true`,children:`☀`}),"aria-label":`sunny`}),b(S,{icon:b(`span`,{"aria-hidden":`true`,children:`✂`}),"aria-label":`crop`}),b(S,{icon:b(`span`,{"aria-hidden":`true`,children:`⛶`}),"aria-label":`filter`})]})]})]}),y(`div`,{children:[b(`div`,{className:`mb-3 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Circle`}),y(`div`,{className:`flex flex-wrap items-center gap-3`,children:[y(S.Group,{shape:`circle`,children:[b(S,{color:`primary`,children:`Backward`}),b(S,{color:`primary`,children:`Forward`})]}),y(S.Group,{shape:`circle`,children:[b(S,{color:`primary`,icon:b(`span`,{"aria-hidden":`true`,children:`«`}),"aria-label":`circle backward`}),b(S,{color:`primary`,icon:b(`span`,{"aria-hidden":`true`,children:`»`}),"aria-label":`circle forward`})]}),y(S.Group,{shape:`circle`,children:[b(S,{icon:b(`span`,{"aria-hidden":`true`,children:`✦`}),"aria-label":`circle magic`}),b(S,{icon:b(`span`,{"aria-hidden":`true`,children:`☀`}),"aria-label":`circle sunny`}),b(S,{icon:b(`span`,{"aria-hidden":`true`,children:`✂`}),"aria-label":`circle crop`}),b(S,{icon:b(`span`,{"aria-hidden":`true`,children:`⛶`}),"aria-label":`circle filter`})]})]})]}),y(`div`,{children:[b(`div`,{className:`mb-3 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Size`}),y(`div`,{className:`space-y-3`,children:[y(`div`,{className:`flex flex-wrap items-center gap-3`,children:[y(S.Group,{size:`large`,children:[b(S,{children:`Large`}),b(S,{children:`Large`})]}),y(S.Group,{children:[b(S,{children:`Default`}),b(S,{children:`Default`})]}),y(S.Group,{size:`small`,children:[b(S,{children:`Small`}),b(S,{children:`Small`})]})]}),y(`div`,{className:`flex flex-wrap items-center gap-3`,children:[y(S.Group,{size:`large`,shape:`circle`,children:[b(S,{children:`Large`}),b(S,{children:`Large`})]}),y(S.Group,{shape:`circle`,children:[b(S,{children:`Default`}),b(S,{children:`Default`})]}),y(S.Group,{size:`small`,shape:`circle`,children:[b(S,{children:`Small`}),b(S,{children:`Small`})]})]})]})]})]})}),code:`<div className="space-y-6">
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
</div>`});t(()=>m(e,u,Ee))});let De=a(`rue:component:anchor`);n(u,De),o(()=>{let e=g(E,{title:`状态与布局`,summary:`把原来的 active、disabled、wide、block 示例也融合到当前页面。`,tab:pe,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-5`,children:[y(`div`,{children:[b(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`States`}),y(`div`,{className:`flex flex-wrap gap-2`,children:[b(S,{active:!0,children:`Active`}),b(S,{color:`primary`,active:!0,children:`Primary active`}),b(S,{disabled:!0,children:`Disabled`}),b(S,{href:`#button-api`,disabled:!0,children:`Disabled link`})]})]}),y(`div`,{children:[b(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Layout`}),y(`div`,{className:`flex flex-col gap-2 sm:max-w-sm`,children:[b(S,{wide:!0,children:`Wide button`}),b(S,{block:!0,color:`primary`,children:`Block button`})]})]})]})}),code:`<div className="flex flex-wrap gap-2">
  <Button active>Active</Button>
  <Button color="primary" active>Primary active</Button>
  <Button disabled>Disabled</Button>
  <Button href="#button-api" disabled>Disabled link</Button>
</div>

<div className="flex flex-col gap-2 sm:max-w-sm">
  <Button wide>Wide button</Button>
  <Button block color="primary">Block button</Button>
</div>`});t(()=>m(e,u,De))});let Oe=a(`rue:component:anchor`);n(u,Oe),o(()=>{let e=g(E,{title:`根节点与表单行为`,summary:`默认渲染 button，同时保留链接根节点、div 根节点和表单行为示例。`,tab:me,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-4`,children:[y(`div`,{className:`flex flex-wrap gap-2`,children:[b(S,{children:`Native button`}),b(S,{href:`#button-api`,children:`Anchor`}),b(S,{as:`div`,type:`text`,children:`Div button`})]}),y(`div`,{className:`text-sm opacity-70`,children:[`submit count: `,M.value]}),y(`form`,{className:`flex flex-wrap items-center gap-2`,onSubmit:e=>{e.preventDefault(),M.value+=1},children:[b(S,{color:`primary`,htmlType:`submit`,children:`Submit form`}),b(S,{type:`outlined`,htmlType:`reset`,children:`Reset form`}),b(S,{href:`#button-api`,type:`link`,children:`Jump to API`})]})]})}),code:`const submitCount = ref(0)

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
</form>`});t(()=>m(e,u,Oe))});let ke=a(`rue:component:anchor`);n(u,ke),o(()=>{let e=g(E,{title:`场景组合`,summary:`把图标、变体、布局属性组合在一起，可以很快搭出操作条。`,tab:he,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-4`,children:[y(`div`,{className:`flex flex-wrap gap-2`,children:[b(S,{color:`primary`,icon:b(ne,{}),children:`Publish`}),b(S,{type:`outlined`,icon:b(O,{}),iconPlacement:`end`,children:`Preview`}),b(S,{type:`text`,icon:b(A,{}),children:`Save draft`})]}),y(`div`,{className:`grid gap-2 md:grid-cols-2`,children:[b(S,{block:!0,className:`justify-start bg-white text-base-content border-base-300`,icon:b(re,{}),children:`Continue with Email`}),b(S,{block:!0,color:`primary`,className:`justify-start`,icon:b(A,{}),children:`Continue with Rue ID`})]})]})}),code:`<div className="flex flex-wrap gap-2">
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
</div>`});t(()=>m(e,u,ke))});let Ae=a(`rue:component:anchor`);n(u,Ae),o(()=>{let e=g(E,{title:`登录按钮`,summary:`把原来的 provider 登录按钮演示融合回来，统一改成 icon + block + className 的新 API 写法。`,tab:ge,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:b(`div`,{className:`grid gap-2 md:grid-cols-2`,children:oe.map(e=>b(S,{block:!0,className:`justify-start ${e.className}`,icon:b(se,{text:e.icon,className:e.iconClassName}),children:e.label},e.label))})})}),code:`const loginButtons = [
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
</div>`});t(()=>m(e,u,Ae))});let K=i(`h2`,u);n(u,K),c(K,`id`,`button-api`),n(K,e(`API`));let je=i(`p`,u);n(u,je),n(je,e(`当前页面展示的是 Button 与 Button.Group 的完整可用 API。`));let q=i(`p`,u);n(u,q),n(q,e(`推荐使用顺序：`));let Me=i(`code`,q);n(q,Me),n(Me,e(`type`)),n(q,e(`->`));let Ne=i(`code`,q);n(q,Ne),n(Ne,e(`color`)),n(q,e(`->`));let Pe=i(`code`,q);n(q,Pe),n(Pe,e(`shape`)),n(q,e(`->`));let Fe=l(q);n(q,Fe),d(Fe,` `);let Ie=i(`code`,q);n(q,Ie),n(Ie,e(`size`)),n(q,e(`->`));let Le=i(`code`,q);n(q,Le),n(Le,e(`loading`)),n(q,e(`->`));let Re=i(`code`,q);n(q,Re),n(Re,e(`disabled`)),n(q,e(`。`));let ze=i(`h3`,u);n(u,ze),n(ze,e(`Button`));let Be=a(`rue:component:anchor`);n(u,Be),o(()=>{let e=g(D,{rows:ce});t(()=>m(e,u,Be))});let Ve=i(`h3`,u);n(u,Ve),n(Ve,e(`Button.Group`));let He=a(`rue:component:anchor`);n(u,He),o(()=>{let e=g(D,{rows:le});t(()=>m(e,u,He))});let Ue=i(`h2`,u);n(u,Ue),n(Ue,e(`FAQ`));let We=i(`h3`,u);n(u,We),n(We,e(`为什么有 type 还需要 htmlType？`));let J=i(`p`,u);n(u,J);let Ge=i(`code`,J);n(J,Ge),n(Ge,e(`type`)),n(J,e(`负责按钮视觉类型，`));let Ke=i(`code`,J);n(J,Ke),n(Ke,e(`htmlType`)),n(J,e(`负责原生 button 行为。视觉和提交语义拆开之后， 表单场景会更直接。`));let qe=i(`h3`,u);n(u,qe),n(qe,e(`type 和 color 应该怎么分工？`));let Y=i(`p`,u);n(u,Y);let Je=i(`code`,Y);n(Y,Je),n(Je,e(`type`)),n(Y,e(`负责视觉类型，比如`));let Ye=i(`code`,Y);n(Y,Ye),n(Ye,e(`outlined`)),n(Y,e(`、`));let Xe=i(`code`,Y);n(Y,Xe),n(Xe,e(`filled`)),n(Y,e(`、`));let Ze=i(`code`,Y);n(Y,Ze),n(Ze,e(`text`)),n(Y,e(`。`));let Qe=i(`code`,Y);n(Y,Qe),n(Qe,e(`color`)),n(Y,e(`负责主题色，比如`));let $e=i(`code`,Y);n(Y,$e),n($e,e(`primary`)),n(Y,e(`、`));let et=i(`code`,Y);n(Y,et),n(et,e(`secondary`)),n(Y,e(`、`));let tt=i(`code`,Y);n(Y,tt),n(tt,e(`danger`)),n(Y,e(`。`));let X=i(`p`,u);n(u,X),n(X,e(`大多数场景可以先定颜色， 再根据密度和层级选择`));let nt=i(`code`,X);n(X,nt),n(nt,e(`solid`)),n(X,e(`、`));let rt=i(`code`,X);n(X,rt),n(rt,e(`outlined`)),n(X,e(`、`));let Z=i(`code`,X);n(X,Z),n(Z,e(`filled`)),n(X,e(`或`));let it=i(`code`,X);n(X,it),n(it,e(`text`)),n(X,e(`。`));let at=i(`h3`,u);n(u,at),n(at,e(`loading 对象里的 delay 会生效吗？`));let Q=i(`p`,u);n(u,Q),n(Q,e(`当前版本已经支持`));let ot=i(`code`,Q);n(Q,ot),n(ot,e(`loading`)),n(Q,e(`的对象写法和自定义`));let st=i(`code`,Q);n(Q,st),n(st,e(`icon`)),n(Q,e(`。`));let ct=i(`code`,Q);n(Q,ct),n(ct,e(`delay`)),n(Q,e(`字段已保留在配置结构里，后续如果补充延迟显示策略，可以直接在现有接口上继续扩展。`));let lt=i(`h3`,u);n(u,lt),n(lt,e(`Button.Group 会覆盖子按钮哪些属性？`));let $=i(`p`,u);n(u,$),n($,e(`组级只会统一同步`));let ut=i(`code`,$);n($,ut),n(ut,e(`size`)),n($,e(`和`));let dt=i(`code`,$);n($,dt),n(dt,e(`shape`)),n($,e(`，方便在一组按钮上集中控制尺寸和轮廓。 每个子按钮自己的`));let ft=i(`code`,$);n($,ft),n(ft,e(`color`)),n($,e(`、`));let pt=i(`code`,$);n($,pt),n(pt,e(`type`)),n($,e(`、`));let mt=i(`code`,$);n($,mt),n(mt,e(`disabled`)),n($,e(`、`));let ht=i(`code`,$);n($,ht),n(ht,e(`onClick`)),n($,e(`仍然在各自的`));let gt=l($);n($,gt),d(gt,` `);let _t=i(`code`,$);return n($,_t),n(_t,e(`Button`)),n($,e(`上配置。`)),r})}),p,_),p})};export{j as default};