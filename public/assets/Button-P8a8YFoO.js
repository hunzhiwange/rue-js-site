import{Cn as e,Ct as t,Mt as n,Tt as r,dt as i,ft as a,ht as o,mt as s,ot as c,pn as l,pt as u,st as d,tn as f,vn as p}from"./context-8lXZvIn-.js";import{l as m,o as h,t as g}from"./vapor-runtime-ygJWVcNn.js";import{a as _,n as v}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as y}from"./Code-DhoWkRkB.js";import{n as b,t as x}from"./src-CCTNpCXV.js";import{t as S}from"./button-CvwbmGA0.js";import{r as C}from"./SidebarPlaygroundDesign-BbUFY3mM.js";import{t as w}from"./preview-test-gate-DVT0twjZ.js";var T=[`preview`,`code`],ee=(e,s)=>m(l=>{let p=u(`div`,l);t(p,`role`,`tablist`),r(p,`tabs tabs-box mb-3 mt-4`);let g=i(`rue:list:start`),_=i(`rue:list:end`);d(p,g),d(p,_);let y=new Map;return f(()=>{y=v({items:T||[],getKey:(e,t)=>t,elements:y,parent:g.parentNode,before:_,singleRoot:!0,trackIndex:!1,start:g,renderItem:(i,l,p,g,_)=>{h(m(()=>{let l=a(),p=e===i,m=u(`button`,l);d(l,m),t(m,`type`,`button`),t(m,`role`,`tab`),f(()=>{t(m,`aria-selected`,String(p?`true`:`false`))}),f(()=>{r(m,`tab ${p?`tab-active`:``}`)}),c(m,`click`,()=>s(i));let h=o(m);return d(m,h),f(()=>{n(h,i===`preview`?`预览`:`JSX代码`)}),l}),l,p)}})}),p}),E=e=>m(t=>{let n=u(`div`,t);r(n,`component-preview not-prose text-base-content my-6 lg:my-12`);let o=u(`div`,n);d(n,o),r(o,`flex flex-wrap items-start justify-between gap-3`);let c=u(`div`,o);d(o,c);let l=u(`h2`,c);d(c,l),r(l,`component-preview-title mt-2 mb-1 text-lg font-semibold`),d(l,s(`# `));let _=i(`rue:slot:anchor`);d(l,_),f(()=>{let t=e.title;p(()=>h(t,l,_))});let v=i(`rue:slot:anchor`);d(c,v),f(()=>{let t=e.summary?m(()=>{let t=a(),n=u(`p`,t);d(t,n),r(n,`m-0 text-sm opacity-70`);let o=i(`rue:slot:anchor`);return d(n,o),f(()=>{let t=e.summary;p(()=>h(t,n,o))}),t}):``;p(()=>h(t,c,v))});let b=i(`rue:slot:anchor`);d(n,b),f(()=>{let t=ee(e.tab.value,t=>e.tab.value=t);p(()=>h(t,n,b))}),d(n,s(` `));let x=i(`rue:slot:anchor`);return d(n,x),f(()=>{let t=e.tab.value===`preview`?w(e.title,e.preview):m(()=>{let t=a(),n=i(`rue:component:anchor`);return d(t,n),f(()=>{let r=g(y,{className:`mt-2`,lang:`tsx`,code:e.code});p(()=>h(r,t,n))}),t});p(()=>h(t,n,x))}),n}),D=e=>m(n=>{let o=u(`div`,n);r(o,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let c=u(`table`,o);d(o,c),r(c,`table table-zebra`);let l=u(`thead`,c);d(c,l);let g=u(`tr`,l);d(l,g);let _=u(`th`,g);d(g,_),d(_,s(`属性`));let y=u(`th`,g);d(g,y),d(y,s(`说明`));let b=u(`th`,g);d(g,b),d(b,s(`类型`));let x=u(`th`,g);d(g,x),d(x,s(`默认值`));let S=u(`tbody`,c);d(c,S);let C=i(`rue:list:start`),w=i(`rue:list:end`);d(S,C),d(S,w);let T=new Map;return f(()=>{T=v({items:e.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,n,r,o,s)=>{h(m(()=>{let n=a(),r=u(`tr`,n);d(n,r),f(()=>{t(r,`key`,String(e.prop))});let o=u(`td`,r);d(r,o);let s=u(`code`,o);d(o,s);let c=i(`rue:slot:anchor`);d(s,c),f(()=>{let t=e.prop;p(()=>h(t,s,c))});let l=u(`td`,r);d(r,l);let m=i(`rue:slot:anchor`);d(l,m),f(()=>{let t=e.description;p(()=>h(t,l,m))});let g=u(`td`,r);d(r,g);let _=u(`code`,g);d(g,_);let v=i(`rue:slot:anchor`);d(_,v),f(()=>{let t=e.type;p(()=>h(t,_,v))});let y=u(`td`,r);d(r,y);let b=u(`code`,y);d(y,b);let x=i(`rue:slot:anchor`);return d(b,x),f(()=>{let t=e.defaultValue;p(()=>h(t,b,x))}),n}),n,r)}})}),o}),te=()=>m(e=>{let n=u(`svg`,e);t(n,`xmlns`,`http://www.w3.org/2000/svg`),t(n,`viewBox`,`0 0 24 24`),t(n,`fill`,`none`),t(n,`stroke`,`currentColor`),t(n,`strokeWidth`,`2`),r(n,`size-[1.05em]`);let i=u(`path`,n);return d(n,i),t(i,`strokeLinecap`,`round`),t(i,`strokeLinejoin`,`round`),t(i,`d`,`M12 5v14M5 12h14`),n}),O=()=>m(e=>{let n=u(`svg`,e);t(n,`xmlns`,`http://www.w3.org/2000/svg`),t(n,`viewBox`,`0 0 24 24`),t(n,`fill`,`none`),t(n,`stroke`,`currentColor`),t(n,`strokeWidth`,`2`),r(n,`size-[1.05em]`);let i=u(`path`,n);d(n,i),t(i,`strokeLinecap`,`round`),t(i,`strokeLinejoin`,`round`),t(i,`d`,`M5 12h14`);let a=u(`path`,n);return d(n,a),t(a,`strokeLinecap`,`round`),t(a,`strokeLinejoin`,`round`),t(a,`d`,`m13 6 6 6-6 6`),n}),k=()=>m(e=>{let n=u(`svg`,e);t(n,`xmlns`,`http://www.w3.org/2000/svg`),t(n,`viewBox`,`0 0 24 24`),t(n,`fill`,`none`),t(n,`stroke`,`currentColor`),t(n,`strokeWidth`,`2`),r(n,`size-[1.05em]`);let i=u(`path`,n);return d(n,i),t(i,`strokeLinecap`,`round`),t(i,`strokeLinejoin`,`round`),t(i,`d`,`M12 20s-7-4.35-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 10c0 5.65-7 10-7 10Z`),n}),ne=()=>m(e=>{let n=u(`svg`,e);t(n,`xmlns`,`http://www.w3.org/2000/svg`),t(n,`viewBox`,`0 0 24 24`),t(n,`fill`,`none`),t(n,`stroke`,`currentColor`),t(n,`strokeWidth`,`2`),r(n,`size-[1.05em]`);let i=u(`path`,n);d(n,i),t(i,`strokeLinecap`,`round`),t(i,`strokeLinejoin`,`round`),t(i,`d`,`M4.5 19.5 9 15l6 6`);let a=u(`path`,n);d(n,a),t(a,`strokeLinecap`,`round`),t(a,`strokeLinejoin`,`round`),t(a,`d`,`M15 9c0-3.5 2.5-6 6-6 0 3.5-2.5 6-6 6Z`);let o=u(`path`,n);d(n,o),t(o,`strokeLinecap`,`round`),t(o,`strokeLinejoin`,`round`),t(o,`d`,`M15 9 9 15`);let s=u(`circle`,n);return d(n,s),t(s,`cx`,`14`),t(s,`cy`,`10`),t(s,`r`,`1`),t(s,`fill`,`currentColor`),t(s,`stroke`,`none`),n}),re=()=>m(e=>{let n=u(`svg`,e);t(n,`xmlns`,`http://www.w3.org/2000/svg`),t(n,`viewBox`,`0 0 24 24`),t(n,`fill`,`none`),t(n,`stroke`,`currentColor`),t(n,`strokeWidth`,`2`),r(n,`size-[1.05em]`);let i=u(`rect`,n);d(n,i),t(i,`x`,`3`),t(i,`y`,`5`),t(i,`width`,`18`),t(i,`height`,`14`),t(i,`rx`,`2`);let a=u(`path`,n);return d(n,a),t(a,`strokeLinecap`,`round`),t(a,`strokeLinejoin`,`round`),t(a,`d`,`m4 7 8 6 8-6`),n}),A=()=>m(e=>{let n=u(`svg`,e);t(n,`xmlns`,`http://www.w3.org/2000/svg`),t(n,`viewBox`,`0 0 24 24`),t(n,`fill`,`none`),t(n,`stroke`,`currentColor`),t(n,`strokeWidth`,`2`),r(n,`size-[1.05em]`);let i=u(`path`,n);d(n,i),t(i,`strokeLinecap`,`round`),t(i,`strokeLinejoin`,`round`),t(i,`d`,`m12 3 1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3Z`);let a=u(`path`,n);return d(n,a),t(a,`strokeLinecap`,`round`),t(a,`strokeLinejoin`,`round`),t(a,`d`,`M5 18h.01M19 18h.01M12 21h.01`),n}),ie=[{label:`Default`},{label:`Neutral`,color:`neutral`},{label:`Primary`,color:`primary`},{label:`Secondary`,color:`secondary`},{label:`Accent`,color:`accent`},{label:`Info`,color:`info`},{label:`Success`,color:`success`},{label:`Warning`,color:`warning`},{label:`Error`,color:`error`}],ae=[{label:`Filled`,variant:`filled`},{label:`Outlined`,variant:`outlined`},{label:`Dashed`,variant:`dashed`}],oe=[{label:`Login with Email`,icon:`@`,className:`bg-white text-base-content border-base-300`,iconClassName:`bg-base-200 text-base-content`},{label:`Login with GitHub`,icon:`GH`,className:`bg-neutral text-neutral-content border-neutral`,iconClassName:`bg-white/15 text-white`},{label:`Login with Google`,icon:`G`,className:`bg-white text-base-content border-base-300`,iconClassName:`bg-red-100 text-red-700`},{label:`Login with Facebook`,icon:`f`,className:`bg-[#1A77F2] text-white border-[#005fd8]`,iconClassName:`bg-white/15 text-white`},{label:`Login with X`,icon:`X`,className:`bg-black text-white border-black`,iconClassName:`bg-white/15 text-white`},{label:`Login with Apple`,icon:`A`,className:`bg-black text-white border-black`,iconClassName:`bg-white/15 text-white`},{label:`Login with Slack`,icon:`S`,className:`bg-[#622069] text-white border-[#591660]`,iconClassName:`bg-white/15 text-white`},{label:`Login with Microsoft`,icon:`M`,className:`bg-[#2F2F2F] text-white border-black`,iconClassName:`bg-white/15 text-white`},{label:`Login with LINE`,icon:`L`,className:`bg-[#03C755] text-white border-[#00b544]`,iconClassName:`bg-white/15 text-white`},{label:`Login with MetaMask`,icon:`MM`,className:`bg-white text-base-content border-base-300`,iconClassName:`bg-orange-100 text-orange-700`}],se=e=>m(t=>{let n=u(`span`,t);f(()=>{r(n,`inline-grid h-5 min-w-5 place-items-center rounded-full px-1 text-[0.55rem] leading-none font-bold ${e.className??`bg-base-200 text-base-content`}`)});let a=i(`rue:slot:anchor`);return d(n,a),f(()=>{let t=e.text;p(()=>h(t,n,a))}),n}),ce=[{prop:`active`,description:`激活态，追加 btn-active`,type:`boolean`,defaultValue:`false`},{prop:`as`,description:`指定渲染标签，可选 button、a、div`,type:`'button' | 'a' | 'div'`,defaultValue:`'button'`},{prop:`block`,description:`整行按钮，宽度撑满容器`,type:`boolean`,defaultValue:`false`},{prop:`color`,description:`颜色层，danger 会映射到 error 按钮色`,type:`'default' | 'danger' | 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'`,defaultValue:`'default'`},{prop:`danger`,description:`危险态快捷开关，未设置 color 时等价于 color="danger"`,type:`boolean`,defaultValue:`false`},{prop:`disabled`,description:`禁用按钮；a 和 div 根节点也会输出禁用语义`,type:`boolean`,defaultValue:`false`},{prop:`href`,description:`传入后默认以 a 标签渲染`,type:`string`,defaultValue:`-`},{prop:`htmlType`,description:`原生 button 的 type`,type:`'button' | 'submit' | 'reset'`,defaultValue:`'button'`},{prop:`icon`,description:`图标节点`,type:`any`,defaultValue:`-`},{prop:`iconPlacement`,description:`图标位置`,type:`'start' | 'end'`,defaultValue:`'start'`},{prop:`loading`,description:`支持 boolean 或对象写法，可自定义加载图标`,type:`boolean | { delay?: number; icon?: any }`,defaultValue:`false`},{prop:`onClick`,description:`点击按钮时的回调；disabled 或 loading 时不会触发`,type:`(event: MouseEvent) => void`,defaultValue:`-`},{prop:`shape`,description:`按钮形状`,type:`'default' | 'square' | 'circle' | 'round'`,defaultValue:`'default'`},{prop:`size`,description:`尺寸，支持 xs 到 xl，以及 small / middle / large 别名`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'middle' | 'medium' | 'large'`,defaultValue:`-`},{prop:`target`,description:`链接目标窗口，仅 a 标签生效`,type:`string`,defaultValue:`-`},{prop:`type`,description:`视觉类型，直接替代基础的 variant 语义`,type:`'solid' | 'filled' | 'outlined' | 'dashed' | 'text' | 'link'`,defaultValue:`'solid'`},{prop:`wide`,description:`宽按钮，追加 btn-wide`,type:`boolean`,defaultValue:`false`}],le=[{prop:`as`,description:`指定按钮组根节点标签`,type:`any`,defaultValue:`'div'`},{prop:`size`,description:`统一同步组内按钮尺寸`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'middle' | 'medium' | 'large'`,defaultValue:`-`},{prop:`shape`,description:`统一同步组内按钮轮廓；circle 在分组场景下会映射为圆角组合样式`,type:`'default' | 'square' | 'circle' | 'round'`,defaultValue:`-`},{prop:`direction`,description:`按钮组排列方向`,type:`'horizontal' | 'vertical'`,defaultValue:`'horizontal'`},{prop:`block`,description:`让按钮组宽度撑满容器`,type:`boolean`,defaultValue:`false`},{prop:`className`,description:`自定义根节点类名`,type:`string`,defaultValue:`-`}],j=()=>{let{tabTypes:c,tabResponsive:v,tabPalette:y,tabVariants:w,tabDanger:T,tabIcons:ee,tabLoading:j,tabClick:ue,tabSizes:de,tabGroup:fe,tabStates:pe,tabFormLink:me,tabRecipes:he,tabLogin:ge,submitCount:M,clickCount:N,lastAction:P}=_(`useSetup:0:0`,()=>e(()=>({tabTypes:_(`ref:1:0`,()=>l(`preview`)),tabResponsive:_(`ref:1:1`,()=>l(`preview`)),tabPalette:_(`ref:1:2`,()=>l(`preview`)),tabVariants:_(`ref:1:3`,()=>l(`preview`)),tabDanger:_(`ref:1:4`,()=>l(`preview`)),tabIcons:_(`ref:1:5`,()=>l(`preview`)),tabLoading:_(`ref:1:6`,()=>l(`preview`)),tabClick:_(`ref:1:7`,()=>l(`preview`)),tabSizes:_(`ref:1:8`,()=>l(`preview`)),tabGroup:_(`ref:1:9`,()=>l(`preview`)),tabStates:_(`ref:1:10`,()=>l(`preview`)),tabFormLink:_(`ref:1:11`,()=>l(`preview`)),tabRecipes:_(`ref:1:12`,()=>l(`preview`)),tabLogin:_(`ref:1:13`,()=>l(`preview`)),submitCount:_(`ref:1:14`,()=>l(0)),clickCount:_(`ref:1:15`,()=>l(0)),lastAction:_(`ref:1:16`,()=>l(`未触发`))})));return m(e=>{let l=a(),_=i(`rue:component:anchor`);return d(l,_),h(g(C,{children:m(()=>{let e=a(),l=u(`div`,e);d(e,l),r(l,`max-w-none prose prose-sm md:prose-base`);let m=u(`h1`,l);d(l,m),d(m,s(`Button 按钮`));let _=u(`p`,l);d(l,_),r(_,`text-sm mt-3 mb-3`);let C=u(`code`,_);d(_,C),d(C,s(`type`)),d(_,s(`负责视觉类型，`));let F=u(`code`,_);d(_,F),d(F,s(`color`)),d(_,s(`负责主题色，再用`));let I=u(`code`,_);d(_,I),d(I,s(`shape`)),d(_,s(`、`));let L=u(`code`,_);d(_,L),d(L,s(`icon`)),d(_,s(`、`));let R=u(`code`,_);d(_,R),d(R,s(`loading`)),d(_,s(`补足交互细节。`));let z=u(`h2`,l);d(l,z),d(z,s(`何时使用`));let B=u(`ul`,l);d(l,B);let V=u(`li`,B);d(B,V),d(V,s(`需要一个通用操作按钮，并希望颜色、类型、形状和状态能拆开表达。`));let H=u(`li`,B);d(B,H),d(H,s(`需要在表单里区分视觉类型`));let U=u(`code`,H);d(H,U),d(U,s(`type`)),d(H,s(`和原生提交类型`));let W=u(`code`,H);d(H,W),d(W,s(`htmlType`)),d(H,s(`。`));let G=u(`li`,B);d(B,G),d(G,s(`需要统一处理图标按钮、加载按钮、链接按钮和整行按钮。`));let _e=i(`rue:component:anchor`);d(l,_e),f(()=>{let e=g(E,{title:`类型`,summary:`type 现在直接对应视觉类型。`,tab:c,preview:()=>x(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:[x(S,{children:`Solid`}),x(S,{type:`outlined`,children:`Outlined`}),x(S,{type:`dashed`,children:`Dashed`}),x(S,{type:`filled`,children:`Filled`}),x(S,{type:`text`,children:`Text`}),x(S,{type:`link`,children:`Link`})]})}),code:`<Button>Solid</Button>
        <Button type="outlined">Outlined</Button>
<Button type="dashed">Dashed</Button>
        <Button type="filled">Filled</Button>
<Button type="text">Text</Button>
<Button type="link">Link</Button>`});p(()=>h(e,l,_e))});let ve=i(`rue:component:anchor`);d(l,ve),f(()=>{let e=g(E,{title:`响应式尺寸`,summary:`把基础的响应式按钮演示保持回来，统一改成 size + className 的方式。`,tab:v,preview:()=>x(`div`,{className:`card bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:x(S,{size:`xs`,className:`sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl`,children:`Responsive`})})}),code:`<Button size="xs" className="sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
  Responsive
</Button>`});p(()=>h(e,l,ve))});let ye=i(`rue:component:anchor`);d(l,ye),f(()=>{let e=g(E,{title:`颜色色板`,summary:`颜色演示展示，但统一改成 color 语义。`,tab:y,preview:()=>x(`div`,{className:`card bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:ie.map(e=>x(S,{color:e.color,children:e.label},e.label))})}),code:`const tones = [
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
</div>`});p(()=>h(e,l,ye))});let be=i(`rue:component:anchor`);d(l,be),f(()=>{let e=g(E,{title:`风格矩阵`,summary:`把基础的 soft、outline、dash 演示融合成统一的 type 展示。`,tab:w,preview:()=>x(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body gap-5`,children:[ae.map(e=>b(`div`,{children:[x(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:e.label}),x(`div`,{className:`flex flex-wrap gap-2`,children:ie.map(t=>x(S,{color:t.color,type:e.variant,children:t.label},`${e.label}-${t.label}`))})]},e.label)),b(`div`,{className:`rounded-box bg-white p-4 text-black`,children:[x(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] text-black/60`,children:`Neutral on light surface`}),b(`div`,{className:`flex flex-wrap gap-2`,children:[x(S,{color:`neutral`,type:`outlined`,children:`Outline`}),x(S,{color:`neutral`,type:`dashed`,children:`Dash`})]})]})]})}),code:`const tones = [
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
</div>`});p(()=>h(e,l,be))});let xe=i(`rue:component:anchor`);d(l,xe),f(()=>{let e=g(E,{title:`危险态`,summary:`danger 是快捷开关，也可以直接通过 color='danger' 控制。`,tab:T,preview:()=>x(`div`,{className:`card bg-neutral text-neutral-content shadow-sm`,children:b(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:[x(S,{color:`danger`,children:`Delete forever`}),x(S,{color:`danger`,type:`outlined`,children:`Remove access`}),x(S,{color:`danger`,type:`filled`,children:`Archive branch`}),x(S,{color:`danger`,type:`text`,children:`Clear cache`})]})}),code:`<Button color="danger">Delete forever</Button>
        <Button color="danger" type="outlined">Remove access</Button>
        <Button color="danger" type="filled">Archive branch</Button>
        <Button color="danger" type="text">Clear cache</Button>`});p(()=>h(e,l,xe))});let Se=i(`rue:component:anchor`);d(l,Se),f(()=>{let e=g(E,{title:`图标与图标位置`,summary:`icon 和 iconPlacement 用来组织图标按钮与带文案按钮。`,tab:ee,preview:()=>x(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:[x(S,{color:`primary`,icon:x(te,{}),children:`Create project`}),x(S,{color:`secondary`,type:`outlined`,icon:x(O,{}),iconPlacement:`end`,children:`Continue`}),x(S,{color:`accent`,shape:`circle`,icon:x(k,{}),"aria-label":`收藏`}),x(S,{color:`info`,shape:`square`,icon:x(A,{}),"aria-label":`高亮`})]})}),code:`<Button color="primary" icon={<span>+</span>}>
  Create project
</Button>

<Button color="secondary" type="outlined" icon={<span>→</span>} iconPlacement="end">
  Continue
</Button>

<Button color="accent" shape="circle" icon={<span>♥</span>} aria-label="收藏" />`});p(()=>h(e,l,Se))});let Ce=i(`rue:component:anchor`);d(l,Ce),f(()=>{let e=g(E,{title:`加载状态`,summary:`loading 会锁定按钮；对象写法可以替换默认加载图标。`,tab:j,preview:()=>x(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:[x(S,{color:`primary`,loading:!0,children:`Saving`}),x(S,{type:`outlined`,loading:{icon:x(`span`,{className:`loading loading-dots loading-xs`})},children:`Syncing`}),x(S,{color:`success`,icon:x(ne,{}),children:`Ready to publish`})]})}),code:`<Button color="primary" loading>Saving</Button>

<Button
  type="outlined"
  loading={{ icon: <span className="loading loading-dots loading-xs" /> }}
>
  Syncing
</Button>`});p(()=>h(e,l,Ce))});let we=i(`rue:component:anchor`);d(l,we),f(()=>{let e=g(E,{title:`点击事件`,summary:`onClick 会透传原生点击事件，适合命令触发、埋点和分组按钮内交互。`,tab:ue,preview:()=>x(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body gap-4`,children:[b(`div`,{className:`flex flex-wrap items-center gap-2`,children:[x(S,{color:`primary`,onClick:e=>{N.value+=1,P.value=`save:${e.currentTarget.tagName.toLowerCase()}`},children:`Trigger save`}),x(S,{type:`outlined`,onClick:e=>{N.value+=1,P.value=`preview:${e.currentTarget.tagName.toLowerCase()}`},children:`Preview draft`}),x(S,{href:`#button-api`,type:`link`,onClick:e=>{e.preventDefault(),N.value+=1,P.value=`link:${e.currentTarget.tagName.toLowerCase()}`},children:`Track jump`})]}),b(`div`,{className:`rounded-box bg-base-200/70 px-4 py-3 text-sm`,children:[b(`div`,{children:[`click count: `,N.value]}),b(`div`,{children:[`last action: `,P.value]})]})]})}),code:`const clickCount = ref(0)
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
</div>`});p(()=>h(e,l,we))});let Te=i(`rue:component:anchor`);d(l,Te),f(()=>{let e=g(E,{title:`尺寸与形状`,summary:`size 管尺寸，shape 管轮廓形态。`,tab:de,preview:()=>x(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body gap-5`,children:[b(`div`,{children:[x(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Sizes`}),b(`div`,{className:`flex flex-wrap items-center gap-2`,children:[x(S,{size:`small`,children:`Small`}),x(S,{children:`Default`}),x(S,{size:`large`,color:`primary`,children:`Large`}),x(S,{size:`xs`,type:`outlined`,children:`XS`}),x(S,{size:`xl`,color:`secondary`,children:`XL`})]})]}),b(`div`,{children:[x(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Shapes`}),b(`div`,{className:`flex flex-wrap items-center gap-2`,children:[x(S,{color:`primary`,shape:`round`,children:`Round action`}),x(S,{color:`secondary`,shape:`square`,icon:x(A,{}),"aria-label":`square`}),x(S,{color:`accent`,shape:`circle`,icon:x(k,{}),"aria-label":`circle`})]})]})]})}),code:`<Button size="small">Small</Button>
<Button>Default</Button>
<Button size="large" color="primary">Large</Button>
<Button size="xs" type="outlined">XS</Button>
<Button size="xl" color="secondary">XL</Button>

<Button color="primary" shape="round">Round action</Button>
<Button color="secondary" shape="square" icon={<span>⋯</span>} />
<Button color="accent" shape="circle" icon={<span>♥</span>} />`});p(()=>h(e,l,Te))});let Ee=i(`rue:component:anchor`);d(l,Ee),f(()=>{let e=g(E,{title:`按钮组合`,summary:`提供与常见 ButtonGroup 类似的分组能力，这里统一用 Button.Group。`,tab:fe,preview:()=>x(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body gap-6`,children:[b(`div`,{children:[x(`div`,{className:`mb-3 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Basic`}),b(`div`,{className:`flex flex-wrap items-center gap-3`,children:[b(S.Group,{children:[x(S,{children:`Cancel`}),x(S,{color:`primary`,children:`Confirm`})]}),b(S.Group,{children:[x(S,{disabled:!0,children:`Yesterday`}),x(S,{disabled:!0,children:`Today`}),x(S,{disabled:!0,children:`Tomorrow`})]}),b(S.Group,{children:[x(S,{color:`primary`,children:`L`}),x(S,{children:`M`}),x(S,{children:`M`}),x(S,{type:`dashed`,children:`R`})]})]})]}),b(`div`,{children:[x(`div`,{className:`mb-3 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Icons`}),b(`div`,{className:`flex flex-wrap items-center gap-3`,children:[b(S.Group,{children:[x(S,{color:`primary`,icon:x(`span`,{"aria-hidden":`true`,children:`←`}),children:`Backward`}),x(S,{color:`primary`,icon:x(`span`,{"aria-hidden":`true`,children:`→`}),iconPlacement:`end`,children:`Forward`})]}),b(S.Group,{children:[x(S,{color:`primary`,icon:x(`span`,{"aria-hidden":`true`,children:`«`}),"aria-label":`skip backward`}),x(S,{color:`primary`,icon:x(`span`,{"aria-hidden":`true`,children:`»`}),"aria-label":`skip forward`})]}),b(S.Group,{children:[x(S,{icon:x(`span`,{"aria-hidden":`true`,children:`✦`}),"aria-label":`magic`}),x(S,{icon:x(`span`,{"aria-hidden":`true`,children:`☀`}),"aria-label":`sunny`}),x(S,{icon:x(`span`,{"aria-hidden":`true`,children:`✂`}),"aria-label":`crop`}),x(S,{icon:x(`span`,{"aria-hidden":`true`,children:`⛶`}),"aria-label":`filter`})]})]})]}),b(`div`,{children:[x(`div`,{className:`mb-3 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Circle`}),b(`div`,{className:`flex flex-wrap items-center gap-3`,children:[b(S.Group,{shape:`circle`,children:[x(S,{color:`primary`,children:`Backward`}),x(S,{color:`primary`,children:`Forward`})]}),b(S.Group,{shape:`circle`,children:[x(S,{color:`primary`,icon:x(`span`,{"aria-hidden":`true`,children:`«`}),"aria-label":`circle backward`}),x(S,{color:`primary`,icon:x(`span`,{"aria-hidden":`true`,children:`»`}),"aria-label":`circle forward`})]}),b(S.Group,{shape:`circle`,children:[x(S,{icon:x(`span`,{"aria-hidden":`true`,children:`✦`}),"aria-label":`circle magic`}),x(S,{icon:x(`span`,{"aria-hidden":`true`,children:`☀`}),"aria-label":`circle sunny`}),x(S,{icon:x(`span`,{"aria-hidden":`true`,children:`✂`}),"aria-label":`circle crop`}),x(S,{icon:x(`span`,{"aria-hidden":`true`,children:`⛶`}),"aria-label":`circle filter`})]})]})]}),b(`div`,{children:[x(`div`,{className:`mb-3 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Size`}),b(`div`,{className:`space-y-3`,children:[b(`div`,{className:`flex flex-wrap items-center gap-3`,children:[b(S.Group,{size:`large`,children:[x(S,{children:`Large`}),x(S,{children:`Large`})]}),b(S.Group,{children:[x(S,{children:`Default`}),x(S,{children:`Default`})]}),b(S.Group,{size:`small`,children:[x(S,{children:`Small`}),x(S,{children:`Small`})]})]}),b(`div`,{className:`flex flex-wrap items-center gap-3`,children:[b(S.Group,{size:`large`,shape:`circle`,children:[x(S,{children:`Large`}),x(S,{children:`Large`})]}),b(S.Group,{shape:`circle`,children:[x(S,{children:`Default`}),x(S,{children:`Default`})]}),b(S.Group,{size:`small`,shape:`circle`,children:[x(S,{children:`Small`}),x(S,{children:`Small`})]})]})]})]})]})}),code:`<div className="space-y-6">
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
</div>`});p(()=>h(e,l,Ee))});let De=i(`rue:component:anchor`);d(l,De),f(()=>{let e=g(E,{title:`状态与布局`,summary:`把基础的 active、disabled、wide、block 示例也融合到当前页面。`,tab:pe,preview:()=>x(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body gap-5`,children:[b(`div`,{children:[x(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`States`}),b(`div`,{className:`flex flex-wrap gap-2`,children:[x(S,{active:!0,children:`Active`}),x(S,{color:`primary`,active:!0,children:`Primary active`}),x(S,{disabled:!0,children:`Disabled`}),x(S,{href:`#button-api`,disabled:!0,children:`Disabled link`})]})]}),b(`div`,{children:[x(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Layout`}),b(`div`,{className:`flex flex-col gap-2 sm:max-w-sm`,children:[x(S,{wide:!0,children:`Wide button`}),x(S,{block:!0,color:`primary`,children:`Block button`})]})]})]})}),code:`<div className="flex flex-wrap gap-2">
  <Button active>Active</Button>
  <Button color="primary" active>Primary active</Button>
  <Button disabled>Disabled</Button>
  <Button href="#button-api" disabled>Disabled link</Button>
</div>

<div className="flex flex-col gap-2 sm:max-w-sm">
  <Button wide>Wide button</Button>
  <Button block color="primary">Block button</Button>
</div>`});p(()=>h(e,l,De))});let Oe=i(`rue:component:anchor`);d(l,Oe),f(()=>{let e=g(E,{title:`根节点与表单行为`,summary:`默认渲染 button，同时保持链接根节点、div 根节点和表单行为示例。`,tab:me,preview:()=>x(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body gap-4`,children:[b(`div`,{className:`flex flex-wrap gap-2`,children:[x(S,{children:`Native button`}),x(S,{href:`#button-api`,children:`Anchor`}),x(S,{as:`div`,type:`text`,children:`Div button`})]}),b(`div`,{className:`text-sm opacity-70`,children:[`submit count: `,M.value]}),b(`form`,{className:`flex flex-wrap items-center gap-2`,onSubmit:e=>{e.preventDefault(),M.value+=1},children:[x(S,{color:`primary`,htmlType:`submit`,children:`Submit form`}),x(S,{type:`outlined`,htmlType:`reset`,children:`Reset form`}),x(S,{href:`#button-api`,type:`link`,children:`Jump to API`})]})]})}),code:`const submitCount = ref(0)

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
</form>`});p(()=>h(e,l,Oe))});let ke=i(`rue:component:anchor`);d(l,ke),f(()=>{let e=g(E,{title:`场景组合`,summary:`把图标、变体、布局属性组合在一起，可以很快搭出操作条。`,tab:he,preview:()=>x(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body gap-4`,children:[b(`div`,{className:`flex flex-wrap gap-2`,children:[x(S,{color:`primary`,icon:x(ne,{}),children:`Publish`}),x(S,{type:`outlined`,icon:x(O,{}),iconPlacement:`end`,children:`Preview`}),x(S,{type:`text`,icon:x(A,{}),children:`Save draft`})]}),b(`div`,{className:`grid gap-2 md:grid-cols-2`,children:[x(S,{block:!0,className:`justify-start bg-white text-base-content border-base-300`,icon:x(re,{}),children:`Continue with Email`}),x(S,{block:!0,color:`primary`,className:`justify-start`,icon:x(A,{}),children:`Continue with Rue ID`})]})]})}),code:`<div className="flex flex-wrap gap-2">
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
</div>`});p(()=>h(e,l,ke))});let Ae=i(`rue:component:anchor`);d(l,Ae),f(()=>{let e=g(E,{title:`登录按钮`,summary:`把基础的 provider 登录按钮演示融合回来，统一改成 icon + block + className 的新 API 写法。`,tab:ge,preview:()=>x(`div`,{className:`card bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body`,children:x(`div`,{className:`grid gap-2 md:grid-cols-2`,children:oe.map(e=>x(S,{block:!0,className:`justify-start ${e.className}`,icon:x(se,{text:e.icon,className:e.iconClassName}),children:e.label},e.label))})})}),code:`const loginButtons = [
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
</div>`});p(()=>h(e,l,Ae))});let K=u(`h2`,l);d(l,K),t(K,`id`,`button-api`),d(K,s(`API`));let je=u(`p`,l);d(l,je),d(je,s(`当前页面展示的是 Button 与 Button.Group 的完整可用 API。`));let q=u(`p`,l);d(l,q),d(q,s(`推荐使用顺序：`));let Me=u(`code`,q);d(q,Me),d(Me,s(`type`)),d(q,s(`->`));let Ne=u(`code`,q);d(q,Ne),d(Ne,s(`color`)),d(q,s(`->`));let Pe=u(`code`,q);d(q,Pe),d(Pe,s(`shape`)),d(q,s(`->`));let Fe=o(q);d(q,Fe),n(Fe,` `);let Ie=u(`code`,q);d(q,Ie),d(Ie,s(`size`)),d(q,s(`->`));let Le=u(`code`,q);d(q,Le),d(Le,s(`loading`)),d(q,s(`->`));let Re=u(`code`,q);d(q,Re),d(Re,s(`disabled`)),d(q,s(`。`));let ze=u(`h3`,l);d(l,ze),d(ze,s(`Button`));let Be=i(`rue:component:anchor`);d(l,Be),f(()=>{let e=g(D,{rows:ce});p(()=>h(e,l,Be))});let Ve=u(`h3`,l);d(l,Ve),d(Ve,s(`Button.Group`));let He=i(`rue:component:anchor`);d(l,He),f(()=>{let e=g(D,{rows:le});p(()=>h(e,l,He))});let Ue=u(`h2`,l);d(l,Ue),d(Ue,s(`FAQ`));let We=u(`h3`,l);d(l,We),d(We,s(`为什么有 type 还需要 htmlType？`));let J=u(`p`,l);d(l,J);let Ge=u(`code`,J);d(J,Ge),d(Ge,s(`type`)),d(J,s(`负责按钮视觉类型，`));let Ke=u(`code`,J);d(J,Ke),d(Ke,s(`htmlType`)),d(J,s(`负责原生 button 行为。视觉和提交语义拆开之后， 表单场景会更直接。`));let qe=u(`h3`,l);d(l,qe),d(qe,s(`type 和 color 应该怎么分工？`));let Y=u(`p`,l);d(l,Y);let Je=u(`code`,Y);d(Y,Je),d(Je,s(`type`)),d(Y,s(`负责视觉类型，比如`));let Ye=u(`code`,Y);d(Y,Ye),d(Ye,s(`outlined`)),d(Y,s(`、`));let Xe=u(`code`,Y);d(Y,Xe),d(Xe,s(`filled`)),d(Y,s(`、`));let Ze=u(`code`,Y);d(Y,Ze),d(Ze,s(`text`)),d(Y,s(`。`));let Qe=u(`code`,Y);d(Y,Qe),d(Qe,s(`color`)),d(Y,s(`负责主题色，比如`));let $e=u(`code`,Y);d(Y,$e),d($e,s(`primary`)),d(Y,s(`、`));let et=u(`code`,Y);d(Y,et),d(et,s(`secondary`)),d(Y,s(`、`));let tt=u(`code`,Y);d(Y,tt),d(tt,s(`danger`)),d(Y,s(`。`));let X=u(`p`,l);d(l,X),d(X,s(`大多数场景可以先定颜色， 再根据密度和层级选择`));let nt=u(`code`,X);d(X,nt),d(nt,s(`solid`)),d(X,s(`、`));let rt=u(`code`,X);d(X,rt),d(rt,s(`outlined`)),d(X,s(`、`));let Z=u(`code`,X);d(X,Z),d(Z,s(`filled`)),d(X,s(`或`));let it=u(`code`,X);d(X,it),d(it,s(`text`)),d(X,s(`。`));let at=u(`h3`,l);d(l,at),d(at,s(`loading 对象里的 delay 会生效吗？`));let Q=u(`p`,l);d(l,Q),d(Q,s(`当前组件支持`));let ot=u(`code`,Q);d(Q,ot),d(ot,s(`loading`)),d(Q,s(`的对象写法和自定义`));let st=u(`code`,Q);d(Q,st),d(st,s(`icon`)),d(Q,s(`。`));let ct=u(`code`,Q);d(Q,ct),d(ct,s(`delay`)),d(Q,s(`字段已保持在配置结构里，后续如果补充延迟显示策略，可以直接在当前接口上继续扩展。`));let lt=u(`h3`,l);d(l,lt),d(lt,s(`Button.Group 会覆盖子按钮哪些属性？`));let $=u(`p`,l);d(l,$),d($,s(`组级只会统一同步`));let ut=u(`code`,$);d($,ut),d(ut,s(`size`)),d($,s(`和`));let dt=u(`code`,$);d($,dt),d(dt,s(`shape`)),d($,s(`，方便在一组按钮上集中控制尺寸和轮廓。 每个子按钮自己的`));let ft=u(`code`,$);d($,ft),d(ft,s(`color`)),d($,s(`、`));let pt=u(`code`,$);d($,pt),d(pt,s(`type`)),d($,s(`、`));let mt=u(`code`,$);d($,mt),d(mt,s(`disabled`)),d($,s(`、`));let ht=u(`code`,$);d($,ht),d(ht,s(`onClick`)),d($,s(`仍然在各自的`));let gt=o($);d($,gt),n(gt,` `);let _t=u(`code`,$);return d($,_t),d(_t,s(`Button`)),d($,s(`上配置。`)),e})}),l,_),l})};export{j as default};