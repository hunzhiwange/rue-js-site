import{$ as e,$t as t,Bt as n,Gt as r,X as i,Xt as a,Z as o,ct as s,et as c,gt as l,l as u,nt as d,o as f,rt as p,t as m,tt as h,ut as g}from"./vapor-runtime-CKrmRMZX.js";import{a as _,n as v}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{a as y,i as b}from"./persistentSidebarPlayground-CKHFGglU.js";import{t as x}from"./Code-D5UqTwV6.js";import{t as S}from"./button-CiwrjbTY.js";import{r as C}from"./SidebarPlaygroundDesign-CWudvLqE.js";import{t as w}from"./preview-test-gate-DuGL5287.js";var T=[`preview`,`code`],ee=(n,r)=>u(a=>{let d=h(`div`,a);s(d,`role`,`tablist`),g(d,`tabs tabs-box mb-3 mt-4`);let m=e(`rue:list:start`),_=e(`rue:list:end`);o(d,m),o(d,_);let y=new Map;return t(()=>{y=v({items:T||[],getKey:(e,t)=>t,elements:y,parent:m.parentNode,before:_,singleRoot:!0,trackIndex:!1,start:m,renderItem:(e,a,d,m,_)=>{f(u(()=>{let a=c(),u=n===e,d=h(`button`,a);o(a,d),s(d,`type`,`button`),s(d,`role`,`tab`),t(()=>{s(d,`aria-selected`,String(u?`true`:`false`))}),t(()=>{g(d,`tab ${u?`tab-active`:``}`)}),i(d,`click`,()=>r(e));let f=p(d);return o(d,f),t(()=>{l(f,e===`preview`?`预览`:`JSX代码`)}),a}),a,d)}})}),d}),E=n=>u(i=>{let a=h(`div`,i);g(a,`component-preview not-prose text-base-content my-6 lg:my-12`);let s=h(`div`,a);o(a,s),g(s,`flex flex-wrap items-start justify-between gap-3`);let l=h(`div`,s);o(s,l);let p=h(`h2`,l);o(l,p),g(p,`component-preview-title mt-2 mb-1 text-lg font-semibold`),o(p,d(`# `));let _=e(`rue:slot:anchor`);o(p,_),t(()=>{let e=n.title;r(()=>f(e,p,_))});let v=e(`rue:slot:anchor`);o(l,v),t(()=>{let i=n.summary?u(()=>{let i=c(),a=h(`p`,i);o(i,a),g(a,`m-0 text-sm opacity-70`);let s=e(`rue:slot:anchor`);return o(a,s),t(()=>{let e=n.summary;r(()=>f(e,a,s))}),i}):``;r(()=>f(i,l,v))});let y=e(`rue:slot:anchor`);o(a,y),t(()=>{let e=ee(n.tab.value,e=>n.tab.value=e);r(()=>f(e,a,y))}),o(a,d(` `));let b=e(`rue:slot:anchor`);return o(a,b),t(()=>{let i=n.tab.value===`preview`?w(n.title,n.preview):u(()=>{let i=c(),a=e(`rue:component:anchor`);return o(i,a),t(()=>{let e=m(x,{className:`mt-2`,lang:`tsx`,code:n.code});r(()=>f(e,i,a))}),i});r(()=>f(i,a,b))}),a}),D=n=>u(i=>{let a=h(`div`,i);g(a,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let l=h(`table`,a);o(a,l),g(l,`table table-zebra`);let p=h(`thead`,l);o(l,p);let m=h(`tr`,p);o(p,m);let _=h(`th`,m);o(m,_),o(_,d(`属性`));let y=h(`th`,m);o(m,y),o(y,d(`说明`));let b=h(`th`,m);o(m,b),o(b,d(`类型`));let x=h(`th`,m);o(m,x),o(x,d(`默认值`));let S=h(`tbody`,l);o(l,S);let C=e(`rue:list:start`),w=e(`rue:list:end`);o(S,C),o(S,w);let T=new Map;return t(()=>{T=v({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,i,a,l,d)=>{f(u(()=>{let i=c(),a=h(`tr`,i);o(i,a),t(()=>{s(a,`key`,String(n.prop))});let l=h(`td`,a);o(a,l);let u=h(`code`,l);o(l,u);let d=e(`rue:slot:anchor`);o(u,d),t(()=>{let e=n.prop;r(()=>f(e,u,d))});let p=h(`td`,a);o(a,p);let m=e(`rue:slot:anchor`);o(p,m),t(()=>{let e=n.description;r(()=>f(e,p,m))});let g=h(`td`,a);o(a,g);let _=h(`code`,g);o(g,_);let v=e(`rue:slot:anchor`);o(_,v),t(()=>{let e=n.type;r(()=>f(e,_,v))});let y=h(`td`,a);o(a,y);let b=h(`code`,y);o(y,b);let x=e(`rue:slot:anchor`);return o(b,x),t(()=>{let e=n.defaultValue;r(()=>f(e,b,x))}),i}),i,a)}})}),a}),te=()=>u(e=>{let t=h(`svg`,e);s(t,`xmlns`,`http://www.w3.org/2000/svg`),s(t,`viewBox`,`0 0 24 24`),s(t,`fill`,`none`),s(t,`stroke`,`currentColor`),s(t,`strokeWidth`,`2`),g(t,`size-[1.05em]`);let n=h(`path`,t);return o(t,n),s(n,`strokeLinecap`,`round`),s(n,`strokeLinejoin`,`round`),s(n,`d`,`M12 5v14M5 12h14`),t}),O=()=>u(e=>{let t=h(`svg`,e);s(t,`xmlns`,`http://www.w3.org/2000/svg`),s(t,`viewBox`,`0 0 24 24`),s(t,`fill`,`none`),s(t,`stroke`,`currentColor`),s(t,`strokeWidth`,`2`),g(t,`size-[1.05em]`);let n=h(`path`,t);o(t,n),s(n,`strokeLinecap`,`round`),s(n,`strokeLinejoin`,`round`),s(n,`d`,`M5 12h14`);let r=h(`path`,t);return o(t,r),s(r,`strokeLinecap`,`round`),s(r,`strokeLinejoin`,`round`),s(r,`d`,`m13 6 6 6-6 6`),t}),k=()=>u(e=>{let t=h(`svg`,e);s(t,`xmlns`,`http://www.w3.org/2000/svg`),s(t,`viewBox`,`0 0 24 24`),s(t,`fill`,`none`),s(t,`stroke`,`currentColor`),s(t,`strokeWidth`,`2`),g(t,`size-[1.05em]`);let n=h(`path`,t);return o(t,n),s(n,`strokeLinecap`,`round`),s(n,`strokeLinejoin`,`round`),s(n,`d`,`M12 20s-7-4.35-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 10c0 5.65-7 10-7 10Z`),t}),ne=()=>u(e=>{let t=h(`svg`,e);s(t,`xmlns`,`http://www.w3.org/2000/svg`),s(t,`viewBox`,`0 0 24 24`),s(t,`fill`,`none`),s(t,`stroke`,`currentColor`),s(t,`strokeWidth`,`2`),g(t,`size-[1.05em]`);let n=h(`path`,t);o(t,n),s(n,`strokeLinecap`,`round`),s(n,`strokeLinejoin`,`round`),s(n,`d`,`M4.5 19.5 9 15l6 6`);let r=h(`path`,t);o(t,r),s(r,`strokeLinecap`,`round`),s(r,`strokeLinejoin`,`round`),s(r,`d`,`M15 9c0-3.5 2.5-6 6-6 0 3.5-2.5 6-6 6Z`);let i=h(`path`,t);o(t,i),s(i,`strokeLinecap`,`round`),s(i,`strokeLinejoin`,`round`),s(i,`d`,`M15 9 9 15`);let a=h(`circle`,t);return o(t,a),s(a,`cx`,`14`),s(a,`cy`,`10`),s(a,`r`,`1`),s(a,`fill`,`currentColor`),s(a,`stroke`,`none`),t}),re=()=>u(e=>{let t=h(`svg`,e);s(t,`xmlns`,`http://www.w3.org/2000/svg`),s(t,`viewBox`,`0 0 24 24`),s(t,`fill`,`none`),s(t,`stroke`,`currentColor`),s(t,`strokeWidth`,`2`),g(t,`size-[1.05em]`);let n=h(`rect`,t);o(t,n),s(n,`x`,`3`),s(n,`y`,`5`),s(n,`width`,`18`),s(n,`height`,`14`),s(n,`rx`,`2`);let r=h(`path`,t);return o(t,r),s(r,`strokeLinecap`,`round`),s(r,`strokeLinejoin`,`round`),s(r,`d`,`m4 7 8 6 8-6`),t}),A=()=>u(e=>{let t=h(`svg`,e);s(t,`xmlns`,`http://www.w3.org/2000/svg`),s(t,`viewBox`,`0 0 24 24`),s(t,`fill`,`none`),s(t,`stroke`,`currentColor`),s(t,`strokeWidth`,`2`),g(t,`size-[1.05em]`);let n=h(`path`,t);o(t,n),s(n,`strokeLinecap`,`round`),s(n,`strokeLinejoin`,`round`),s(n,`d`,`m12 3 1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3Z`);let r=h(`path`,t);return o(t,r),s(r,`strokeLinecap`,`round`),s(r,`strokeLinejoin`,`round`),s(r,`d`,`M5 18h.01M19 18h.01M12 21h.01`),t}),ie=[{label:`Default`},{label:`Neutral`,color:`neutral`},{label:`Primary`,color:`primary`},{label:`Secondary`,color:`secondary`},{label:`Accent`,color:`accent`},{label:`Info`,color:`info`},{label:`Success`,color:`success`},{label:`Warning`,color:`warning`},{label:`Error`,color:`error`}],ae=[{label:`Filled`,variant:`filled`},{label:`Outlined`,variant:`outlined`},{label:`Dashed`,variant:`dashed`}],oe=[{label:`Login with Email`,icon:`@`,className:`bg-white text-base-content border-base-300`,iconClassName:`bg-base-200 text-base-content`},{label:`Login with GitHub`,icon:`GH`,className:`bg-neutral text-neutral-content border-neutral`,iconClassName:`bg-white/15 text-white`},{label:`Login with Google`,icon:`G`,className:`bg-white text-base-content border-base-300`,iconClassName:`bg-red-100 text-red-700`},{label:`Login with Facebook`,icon:`f`,className:`bg-[#1A77F2] text-white border-[#005fd8]`,iconClassName:`bg-white/15 text-white`},{label:`Login with X`,icon:`X`,className:`bg-black text-white border-black`,iconClassName:`bg-white/15 text-white`},{label:`Login with Apple`,icon:`A`,className:`bg-black text-white border-black`,iconClassName:`bg-white/15 text-white`},{label:`Login with Slack`,icon:`S`,className:`bg-[#622069] text-white border-[#591660]`,iconClassName:`bg-white/15 text-white`},{label:`Login with Microsoft`,icon:`M`,className:`bg-[#2F2F2F] text-white border-black`,iconClassName:`bg-white/15 text-white`},{label:`Login with LINE`,icon:`L`,className:`bg-[#03C755] text-white border-[#00b544]`,iconClassName:`bg-white/15 text-white`},{label:`Login with MetaMask`,icon:`MM`,className:`bg-white text-base-content border-base-300`,iconClassName:`bg-orange-100 text-orange-700`}],se=n=>u(i=>{let a=h(`span`,i);t(()=>{g(a,`inline-grid h-5 min-w-5 place-items-center rounded-full px-1 text-[0.55rem] leading-none font-bold ${n.className??`bg-base-200 text-base-content`}`)});let s=e(`rue:slot:anchor`);return o(a,s),t(()=>{let e=n.text;r(()=>f(e,a,s))}),a}),ce=[{prop:`active`,description:`激活态，追加 btn-active`,type:`boolean`,defaultValue:`false`},{prop:`as`,description:`指定渲染标签，可选 button、a、div`,type:`'button' | 'a' | 'div'`,defaultValue:`'button'`},{prop:`block`,description:`整行按钮，宽度撑满容器`,type:`boolean`,defaultValue:`false`},{prop:`color`,description:`颜色层，danger 会映射到 error 按钮色`,type:`'default' | 'danger' | 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'`,defaultValue:`'default'`},{prop:`danger`,description:`危险态快捷开关，未设置 color 时等价于 color="danger"`,type:`boolean`,defaultValue:`false`},{prop:`disabled`,description:`禁用按钮；a 和 div 根节点也会输出禁用语义`,type:`boolean`,defaultValue:`false`},{prop:`href`,description:`传入后默认以 a 标签渲染`,type:`string`,defaultValue:`-`},{prop:`htmlType`,description:`原生 button 的 type`,type:`'button' | 'submit' | 'reset'`,defaultValue:`'button'`},{prop:`icon`,description:`图标节点`,type:`any`,defaultValue:`-`},{prop:`iconPlacement`,description:`图标位置`,type:`'start' | 'end'`,defaultValue:`'start'`},{prop:`loading`,description:`支持 boolean 或对象写法，可自定义加载图标`,type:`boolean | { delay?: number; icon?: any }`,defaultValue:`false`},{prop:`onClick`,description:`点击按钮时的回调；disabled 或 loading 时不会触发`,type:`(event: MouseEvent) => void`,defaultValue:`-`},{prop:`shape`,description:`按钮形状`,type:`'default' | 'square' | 'circle' | 'round'`,defaultValue:`'default'`},{prop:`size`,description:`尺寸，支持 xs 到 xl，以及 small / middle / large 别名`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'middle' | 'medium' | 'large'`,defaultValue:`-`},{prop:`target`,description:`链接目标窗口，仅 a 标签生效`,type:`string`,defaultValue:`-`},{prop:`type`,description:`视觉类型，直接替代旧的 variant 语义`,type:`'solid' | 'filled' | 'outlined' | 'dashed' | 'text' | 'link'`,defaultValue:`'solid'`},{prop:`wide`,description:`宽按钮，追加 btn-wide`,type:`boolean`,defaultValue:`false`}],le=[{prop:`as`,description:`指定按钮组根节点标签`,type:`any`,defaultValue:`'div'`},{prop:`size`,description:`统一同步组内按钮尺寸`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'middle' | 'medium' | 'large'`,defaultValue:`-`},{prop:`shape`,description:`统一同步组内按钮轮廓；circle 在分组场景下会映射为圆角组合样式`,type:`'default' | 'square' | 'circle' | 'round'`,defaultValue:`-`},{prop:`direction`,description:`按钮组排列方向`,type:`'horizontal' | 'vertical'`,defaultValue:`'horizontal'`},{prop:`block`,description:`让按钮组宽度撑满容器`,type:`boolean`,defaultValue:`false`},{prop:`className`,description:`自定义根节点类名`,type:`string`,defaultValue:`-`}],j=()=>{let{tabTypes:i,tabResponsive:v,tabPalette:x,tabVariants:w,tabDanger:T,tabIcons:ee,tabLoading:j,tabClick:ue,tabSizes:de,tabGroup:fe,tabStates:pe,tabFormLink:me,tabRecipes:he,tabLogin:ge,submitCount:M,clickCount:N,lastAction:P}=_(`useSetup:0:0`,()=>a(()=>({tabTypes:_(`ref:1:0`,()=>n(`preview`)),tabResponsive:_(`ref:1:1`,()=>n(`preview`)),tabPalette:_(`ref:1:2`,()=>n(`preview`)),tabVariants:_(`ref:1:3`,()=>n(`preview`)),tabDanger:_(`ref:1:4`,()=>n(`preview`)),tabIcons:_(`ref:1:5`,()=>n(`preview`)),tabLoading:_(`ref:1:6`,()=>n(`preview`)),tabClick:_(`ref:1:7`,()=>n(`preview`)),tabSizes:_(`ref:1:8`,()=>n(`preview`)),tabGroup:_(`ref:1:9`,()=>n(`preview`)),tabStates:_(`ref:1:10`,()=>n(`preview`)),tabFormLink:_(`ref:1:11`,()=>n(`preview`)),tabRecipes:_(`ref:1:12`,()=>n(`preview`)),tabLogin:_(`ref:1:13`,()=>n(`preview`)),submitCount:_(`ref:1:14`,()=>n(0)),clickCount:_(`ref:1:15`,()=>n(0)),lastAction:_(`ref:1:16`,()=>n(`未触发`))})));return u(n=>{let a=c(),_=e(`rue:component:anchor`);return o(a,_),f(m(C,{children:u(()=>{let n=c(),a=h(`div`,n);o(n,a),g(a,`max-w-none prose prose-sm md:prose-base`);let u=h(`h1`,a);o(a,u),o(u,d(`Button 按钮`));let _=h(`p`,a);o(a,_),g(_,`text-sm mt-3 mb-3`);let C=h(`code`,_);o(_,C),o(C,d(`type`)),o(_,d(`负责视觉类型，`));let F=h(`code`,_);o(_,F),o(F,d(`color`)),o(_,d(`负责主题色，再用`));let I=h(`code`,_);o(_,I),o(I,d(`shape`)),o(_,d(`、`));let L=h(`code`,_);o(_,L),o(L,d(`icon`)),o(_,d(`、`));let R=h(`code`,_);o(_,R),o(R,d(`loading`)),o(_,d(`补足交互细节。`));let z=h(`h2`,a);o(a,z),o(z,d(`何时使用`));let B=h(`ul`,a);o(a,B);let V=h(`li`,B);o(B,V),o(V,d(`需要一个通用操作按钮，并希望颜色、类型、形状和状态能拆开表达。`));let H=h(`li`,B);o(B,H),o(H,d(`需要在表单里区分视觉类型`));let U=h(`code`,H);o(H,U),o(U,d(`type`)),o(H,d(`和原生提交类型`));let W=h(`code`,H);o(H,W),o(W,d(`htmlType`)),o(H,d(`。`));let G=h(`li`,B);o(B,G),o(G,d(`需要统一处理图标按钮、加载按钮、链接按钮和整行按钮。`));let _e=e(`rue:component:anchor`);o(a,_e),t(()=>{let e=m(E,{title:`类型`,summary:`type 现在直接对应视觉类型。`,tab:i,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:[b(S,{children:`Solid`}),b(S,{type:`outlined`,children:`Outlined`}),b(S,{type:`dashed`,children:`Dashed`}),b(S,{type:`filled`,children:`Filled`}),b(S,{type:`text`,children:`Text`}),b(S,{type:`link`,children:`Link`})]})}),code:`<Button>Solid</Button>
        <Button type="outlined">Outlined</Button>
<Button type="dashed">Dashed</Button>
        <Button type="filled">Filled</Button>
<Button type="text">Text</Button>
<Button type="link">Link</Button>`});r(()=>f(e,a,_e))});let ve=e(`rue:component:anchor`);o(a,ve),t(()=>{let e=m(E,{title:`响应式尺寸`,summary:`把原来的响应式按钮演示保留回来，统一改成 size + className 的方式。`,tab:v,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:b(S,{size:`xs`,className:`sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl`,children:`Responsive`})})}),code:`<Button size="xs" className="sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
  Responsive
</Button>`});r(()=>f(e,a,ve))});let ye=e(`rue:component:anchor`);o(a,ye),t(()=>{let e=m(E,{title:`颜色色板`,summary:`原来的颜色演示继续保留，但统一改成 color 语义。`,tab:x,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:ie.map(e=>b(S,{color:e.color,children:e.label},e.label))})}),code:`const tones = [
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
</div>`});r(()=>f(e,a,ye))});let be=e(`rue:component:anchor`);o(a,be),t(()=>{let e=m(E,{title:`风格矩阵`,summary:`把原来的 soft、outline、dash 演示融合成统一的 type 展示。`,tab:w,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-5`,children:[ae.map(e=>y(`div`,{children:[b(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:e.label}),b(`div`,{className:`flex flex-wrap gap-2`,children:ie.map(t=>b(S,{color:t.color,type:e.variant,children:t.label},`${e.label}-${t.label}`))})]},e.label)),y(`div`,{className:`rounded-box bg-white p-4 text-black`,children:[b(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] text-black/60`,children:`Neutral on light surface`}),y(`div`,{className:`flex flex-wrap gap-2`,children:[b(S,{color:`neutral`,type:`outlined`,children:`Outline`}),b(S,{color:`neutral`,type:`dashed`,children:`Dash`})]})]})]})}),code:`const tones = [
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
</div>`});r(()=>f(e,a,be))});let xe=e(`rue:component:anchor`);o(a,xe),t(()=>{let e=m(E,{title:`危险态`,summary:`danger 是快捷开关，也可以直接通过 color='danger' 控制。`,tab:T,preview:()=>b(`div`,{className:`card bg-neutral text-neutral-content shadow-sm`,children:y(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:[b(S,{color:`danger`,children:`Delete forever`}),b(S,{color:`danger`,type:`outlined`,children:`Remove access`}),b(S,{color:`danger`,type:`filled`,children:`Archive branch`}),b(S,{color:`danger`,type:`text`,children:`Clear cache`})]})}),code:`<Button color="danger">Delete forever</Button>
        <Button color="danger" type="outlined">Remove access</Button>
        <Button color="danger" type="filled">Archive branch</Button>
        <Button color="danger" type="text">Clear cache</Button>`});r(()=>f(e,a,xe))});let Se=e(`rue:component:anchor`);o(a,Se),t(()=>{let e=m(E,{title:`图标与图标位置`,summary:`icon 和 iconPlacement 用来组织图标按钮与带文案按钮。`,tab:ee,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:[b(S,{color:`primary`,icon:b(te,{}),children:`Create project`}),b(S,{color:`secondary`,type:`outlined`,icon:b(O,{}),iconPlacement:`end`,children:`Continue`}),b(S,{color:`accent`,shape:`circle`,icon:b(k,{}),"aria-label":`收藏`}),b(S,{color:`info`,shape:`square`,icon:b(A,{}),"aria-label":`高亮`})]})}),code:`<Button color="primary" icon={<span>+</span>}>
  Create project
</Button>

<Button color="secondary" type="outlined" icon={<span>→</span>} iconPlacement="end">
  Continue
</Button>

<Button color="accent" shape="circle" icon={<span>♥</span>} aria-label="收藏" />`});r(()=>f(e,a,Se))});let Ce=e(`rue:component:anchor`);o(a,Ce),t(()=>{let e=m(E,{title:`加载状态`,summary:`loading 会锁定按钮；对象写法可以替换默认加载图标。`,tab:j,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:[b(S,{color:`primary`,loading:!0,children:`Saving`}),b(S,{type:`outlined`,loading:{icon:b(`span`,{className:`loading loading-dots loading-xs`})},children:`Syncing`}),b(S,{color:`success`,icon:b(ne,{}),children:`Ready to publish`})]})}),code:`<Button color="primary" loading>Saving</Button>

<Button
  type="outlined"
  loading={{ icon: <span className="loading loading-dots loading-xs" /> }}
>
  Syncing
</Button>`});r(()=>f(e,a,Ce))});let we=e(`rue:component:anchor`);o(a,we),t(()=>{let e=m(E,{title:`点击事件`,summary:`onClick 会透传原生点击事件，适合命令触发、埋点和分组按钮内交互。`,tab:ue,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-4`,children:[y(`div`,{className:`flex flex-wrap items-center gap-2`,children:[b(S,{color:`primary`,onClick:e=>{N.value+=1,P.value=`save:${e.currentTarget.tagName.toLowerCase()}`},children:`Trigger save`}),b(S,{type:`outlined`,onClick:e=>{N.value+=1,P.value=`preview:${e.currentTarget.tagName.toLowerCase()}`},children:`Preview draft`}),b(S,{href:`#button-api`,type:`link`,onClick:e=>{e.preventDefault(),N.value+=1,P.value=`link:${e.currentTarget.tagName.toLowerCase()}`},children:`Track jump`})]}),y(`div`,{className:`rounded-box bg-base-200/70 px-4 py-3 text-sm`,children:[y(`div`,{children:[`click count: `,N.value]}),y(`div`,{children:[`last action: `,P.value]})]})]})}),code:`const clickCount = ref(0)
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
</div>`});r(()=>f(e,a,we))});let Te=e(`rue:component:anchor`);o(a,Te),t(()=>{let e=m(E,{title:`尺寸与形状`,summary:`size 管尺寸，shape 管轮廓形态。`,tab:de,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-5`,children:[y(`div`,{children:[b(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Sizes`}),y(`div`,{className:`flex flex-wrap items-center gap-2`,children:[b(S,{size:`small`,children:`Small`}),b(S,{children:`Default`}),b(S,{size:`large`,color:`primary`,children:`Large`}),b(S,{size:`xs`,type:`outlined`,children:`XS`}),b(S,{size:`xl`,color:`secondary`,children:`XL`})]})]}),y(`div`,{children:[b(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Shapes`}),y(`div`,{className:`flex flex-wrap items-center gap-2`,children:[b(S,{color:`primary`,shape:`round`,children:`Round action`}),b(S,{color:`secondary`,shape:`square`,icon:b(A,{}),"aria-label":`square`}),b(S,{color:`accent`,shape:`circle`,icon:b(k,{}),"aria-label":`circle`})]})]})]})}),code:`<Button size="small">Small</Button>
<Button>Default</Button>
<Button size="large" color="primary">Large</Button>
<Button size="xs" type="outlined">XS</Button>
<Button size="xl" color="secondary">XL</Button>

<Button color="primary" shape="round">Round action</Button>
<Button color="secondary" shape="square" icon={<span>⋯</span>} />
<Button color="accent" shape="circle" icon={<span>♥</span>} />`});r(()=>f(e,a,Te))});let Ee=e(`rue:component:anchor`);o(a,Ee),t(()=>{let e=m(E,{title:`按钮组合`,summary:`提供与常见 ButtonGroup 类似的分组能力，这里统一用 Button.Group。`,tab:fe,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-6`,children:[y(`div`,{children:[b(`div`,{className:`mb-3 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Basic`}),y(`div`,{className:`flex flex-wrap items-center gap-3`,children:[y(S.Group,{children:[b(S,{children:`Cancel`}),b(S,{color:`primary`,children:`Confirm`})]}),y(S.Group,{children:[b(S,{disabled:!0,children:`Yesterday`}),b(S,{disabled:!0,children:`Today`}),b(S,{disabled:!0,children:`Tomorrow`})]}),y(S.Group,{children:[b(S,{color:`primary`,children:`L`}),b(S,{children:`M`}),b(S,{children:`M`}),b(S,{type:`dashed`,children:`R`})]})]})]}),y(`div`,{children:[b(`div`,{className:`mb-3 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Icons`}),y(`div`,{className:`flex flex-wrap items-center gap-3`,children:[y(S.Group,{children:[b(S,{color:`primary`,icon:b(`span`,{"aria-hidden":`true`,children:`←`}),children:`Backward`}),b(S,{color:`primary`,icon:b(`span`,{"aria-hidden":`true`,children:`→`}),iconPlacement:`end`,children:`Forward`})]}),y(S.Group,{children:[b(S,{color:`primary`,icon:b(`span`,{"aria-hidden":`true`,children:`«`}),"aria-label":`skip backward`}),b(S,{color:`primary`,icon:b(`span`,{"aria-hidden":`true`,children:`»`}),"aria-label":`skip forward`})]}),y(S.Group,{children:[b(S,{icon:b(`span`,{"aria-hidden":`true`,children:`✦`}),"aria-label":`magic`}),b(S,{icon:b(`span`,{"aria-hidden":`true`,children:`☀`}),"aria-label":`sunny`}),b(S,{icon:b(`span`,{"aria-hidden":`true`,children:`✂`}),"aria-label":`crop`}),b(S,{icon:b(`span`,{"aria-hidden":`true`,children:`⛶`}),"aria-label":`filter`})]})]})]}),y(`div`,{children:[b(`div`,{className:`mb-3 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Circle`}),y(`div`,{className:`flex flex-wrap items-center gap-3`,children:[y(S.Group,{shape:`circle`,children:[b(S,{color:`primary`,children:`Backward`}),b(S,{color:`primary`,children:`Forward`})]}),y(S.Group,{shape:`circle`,children:[b(S,{color:`primary`,icon:b(`span`,{"aria-hidden":`true`,children:`«`}),"aria-label":`circle backward`}),b(S,{color:`primary`,icon:b(`span`,{"aria-hidden":`true`,children:`»`}),"aria-label":`circle forward`})]}),y(S.Group,{shape:`circle`,children:[b(S,{icon:b(`span`,{"aria-hidden":`true`,children:`✦`}),"aria-label":`circle magic`}),b(S,{icon:b(`span`,{"aria-hidden":`true`,children:`☀`}),"aria-label":`circle sunny`}),b(S,{icon:b(`span`,{"aria-hidden":`true`,children:`✂`}),"aria-label":`circle crop`}),b(S,{icon:b(`span`,{"aria-hidden":`true`,children:`⛶`}),"aria-label":`circle filter`})]})]})]}),y(`div`,{children:[b(`div`,{className:`mb-3 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Size`}),y(`div`,{className:`space-y-3`,children:[y(`div`,{className:`flex flex-wrap items-center gap-3`,children:[y(S.Group,{size:`large`,children:[b(S,{children:`Large`}),b(S,{children:`Large`})]}),y(S.Group,{children:[b(S,{children:`Default`}),b(S,{children:`Default`})]}),y(S.Group,{size:`small`,children:[b(S,{children:`Small`}),b(S,{children:`Small`})]})]}),y(`div`,{className:`flex flex-wrap items-center gap-3`,children:[y(S.Group,{size:`large`,shape:`circle`,children:[b(S,{children:`Large`}),b(S,{children:`Large`})]}),y(S.Group,{shape:`circle`,children:[b(S,{children:`Default`}),b(S,{children:`Default`})]}),y(S.Group,{size:`small`,shape:`circle`,children:[b(S,{children:`Small`}),b(S,{children:`Small`})]})]})]})]})]})}),code:`<div className="space-y-6">
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
</div>`});r(()=>f(e,a,Ee))});let De=e(`rue:component:anchor`);o(a,De),t(()=>{let e=m(E,{title:`状态与布局`,summary:`把原来的 active、disabled、wide、block 示例也融合到当前页面。`,tab:pe,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-5`,children:[y(`div`,{children:[b(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`States`}),y(`div`,{className:`flex flex-wrap gap-2`,children:[b(S,{active:!0,children:`Active`}),b(S,{color:`primary`,active:!0,children:`Primary active`}),b(S,{disabled:!0,children:`Disabled`}),b(S,{href:`#button-api`,disabled:!0,children:`Disabled link`})]})]}),y(`div`,{children:[b(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Layout`}),y(`div`,{className:`flex flex-col gap-2 sm:max-w-sm`,children:[b(S,{wide:!0,children:`Wide button`}),b(S,{block:!0,color:`primary`,children:`Block button`})]})]})]})}),code:`<div className="flex flex-wrap gap-2">
  <Button active>Active</Button>
  <Button color="primary" active>Primary active</Button>
  <Button disabled>Disabled</Button>
  <Button href="#button-api" disabled>Disabled link</Button>
</div>

<div className="flex flex-col gap-2 sm:max-w-sm">
  <Button wide>Wide button</Button>
  <Button block color="primary">Block button</Button>
</div>`});r(()=>f(e,a,De))});let Oe=e(`rue:component:anchor`);o(a,Oe),t(()=>{let e=m(E,{title:`根节点与表单行为`,summary:`默认渲染 button，同时保留链接根节点、div 根节点和表单行为示例。`,tab:me,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-4`,children:[y(`div`,{className:`flex flex-wrap gap-2`,children:[b(S,{children:`Native button`}),b(S,{href:`#button-api`,children:`Anchor`}),b(S,{as:`div`,type:`text`,children:`Div button`})]}),y(`div`,{className:`text-sm opacity-70`,children:[`submit count: `,M.value]}),y(`form`,{className:`flex flex-wrap items-center gap-2`,onSubmit:e=>{e.preventDefault(),M.value+=1},children:[b(S,{color:`primary`,htmlType:`submit`,children:`Submit form`}),b(S,{type:`outlined`,htmlType:`reset`,children:`Reset form`}),b(S,{href:`#button-api`,type:`link`,children:`Jump to API`})]})]})}),code:`const submitCount = ref(0)

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
</form>`});r(()=>f(e,a,Oe))});let ke=e(`rue:component:anchor`);o(a,ke),t(()=>{let e=m(E,{title:`场景组合`,summary:`把图标、变体、布局属性组合在一起，可以很快搭出操作条。`,tab:he,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-4`,children:[y(`div`,{className:`flex flex-wrap gap-2`,children:[b(S,{color:`primary`,icon:b(ne,{}),children:`Publish`}),b(S,{type:`outlined`,icon:b(O,{}),iconPlacement:`end`,children:`Preview`}),b(S,{type:`text`,icon:b(A,{}),children:`Save draft`})]}),y(`div`,{className:`grid gap-2 md:grid-cols-2`,children:[b(S,{block:!0,className:`justify-start bg-white text-base-content border-base-300`,icon:b(re,{}),children:`Continue with Email`}),b(S,{block:!0,color:`primary`,className:`justify-start`,icon:b(A,{}),children:`Continue with Rue ID`})]})]})}),code:`<div className="flex flex-wrap gap-2">
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
</div>`});r(()=>f(e,a,ke))});let Ae=e(`rue:component:anchor`);o(a,Ae),t(()=>{let e=m(E,{title:`登录按钮`,summary:`把原来的 provider 登录按钮演示融合回来，统一改成 icon + block + className 的新 API 写法。`,tab:ge,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:b(`div`,{className:`grid gap-2 md:grid-cols-2`,children:oe.map(e=>b(S,{block:!0,className:`justify-start ${e.className}`,icon:b(se,{text:e.icon,className:e.iconClassName}),children:e.label},e.label))})})}),code:`const loginButtons = [
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
</div>`});r(()=>f(e,a,Ae))});let K=h(`h2`,a);o(a,K),s(K,`id`,`button-api`),o(K,d(`API`));let je=h(`p`,a);o(a,je),o(je,d(`当前页面展示的是 Button 与 Button.Group 的完整可用 API。`));let q=h(`p`,a);o(a,q),o(q,d(`推荐使用顺序：`));let Me=h(`code`,q);o(q,Me),o(Me,d(`type`)),o(q,d(`->`));let Ne=h(`code`,q);o(q,Ne),o(Ne,d(`color`)),o(q,d(`->`));let Pe=h(`code`,q);o(q,Pe),o(Pe,d(`shape`)),o(q,d(`->`));let Fe=p(q);o(q,Fe),l(Fe,` `);let Ie=h(`code`,q);o(q,Ie),o(Ie,d(`size`)),o(q,d(`->`));let Le=h(`code`,q);o(q,Le),o(Le,d(`loading`)),o(q,d(`->`));let Re=h(`code`,q);o(q,Re),o(Re,d(`disabled`)),o(q,d(`。`));let ze=h(`h3`,a);o(a,ze),o(ze,d(`Button`));let Be=e(`rue:component:anchor`);o(a,Be),t(()=>{let e=m(D,{rows:ce});r(()=>f(e,a,Be))});let Ve=h(`h3`,a);o(a,Ve),o(Ve,d(`Button.Group`));let He=e(`rue:component:anchor`);o(a,He),t(()=>{let e=m(D,{rows:le});r(()=>f(e,a,He))});let Ue=h(`h2`,a);o(a,Ue),o(Ue,d(`FAQ`));let We=h(`h3`,a);o(a,We),o(We,d(`为什么有 type 还需要 htmlType？`));let J=h(`p`,a);o(a,J);let Ge=h(`code`,J);o(J,Ge),o(Ge,d(`type`)),o(J,d(`负责按钮视觉类型，`));let Ke=h(`code`,J);o(J,Ke),o(Ke,d(`htmlType`)),o(J,d(`负责原生 button 行为。视觉和提交语义拆开之后， 表单场景会更直接。`));let qe=h(`h3`,a);o(a,qe),o(qe,d(`type 和 color 应该怎么分工？`));let Y=h(`p`,a);o(a,Y);let Je=h(`code`,Y);o(Y,Je),o(Je,d(`type`)),o(Y,d(`负责视觉类型，比如`));let Ye=h(`code`,Y);o(Y,Ye),o(Ye,d(`outlined`)),o(Y,d(`、`));let Xe=h(`code`,Y);o(Y,Xe),o(Xe,d(`filled`)),o(Y,d(`、`));let Ze=h(`code`,Y);o(Y,Ze),o(Ze,d(`text`)),o(Y,d(`。`));let Qe=h(`code`,Y);o(Y,Qe),o(Qe,d(`color`)),o(Y,d(`负责主题色，比如`));let $e=h(`code`,Y);o(Y,$e),o($e,d(`primary`)),o(Y,d(`、`));let et=h(`code`,Y);o(Y,et),o(et,d(`secondary`)),o(Y,d(`、`));let tt=h(`code`,Y);o(Y,tt),o(tt,d(`danger`)),o(Y,d(`。`));let X=h(`p`,a);o(a,X),o(X,d(`大多数场景可以先定颜色， 再根据密度和层级选择`));let nt=h(`code`,X);o(X,nt),o(nt,d(`solid`)),o(X,d(`、`));let rt=h(`code`,X);o(X,rt),o(rt,d(`outlined`)),o(X,d(`、`));let Z=h(`code`,X);o(X,Z),o(Z,d(`filled`)),o(X,d(`或`));let it=h(`code`,X);o(X,it),o(it,d(`text`)),o(X,d(`。`));let at=h(`h3`,a);o(a,at),o(at,d(`loading 对象里的 delay 会生效吗？`));let Q=h(`p`,a);o(a,Q),o(Q,d(`当前版本已经支持`));let ot=h(`code`,Q);o(Q,ot),o(ot,d(`loading`)),o(Q,d(`的对象写法和自定义`));let st=h(`code`,Q);o(Q,st),o(st,d(`icon`)),o(Q,d(`。`));let ct=h(`code`,Q);o(Q,ct),o(ct,d(`delay`)),o(Q,d(`字段已保留在配置结构里，后续如果补充延迟显示策略，可以直接在现有接口上继续扩展。`));let lt=h(`h3`,a);o(a,lt),o(lt,d(`Button.Group 会覆盖子按钮哪些属性？`));let $=h(`p`,a);o(a,$),o($,d(`组级只会统一同步`));let ut=h(`code`,$);o($,ut),o(ut,d(`size`)),o($,d(`和`));let dt=h(`code`,$);o($,dt),o(dt,d(`shape`)),o($,d(`，方便在一组按钮上集中控制尺寸和轮廓。 每个子按钮自己的`));let ft=h(`code`,$);o($,ft),o(ft,d(`color`)),o($,d(`、`));let pt=h(`code`,$);o($,pt),o(pt,d(`type`)),o($,d(`、`));let mt=h(`code`,$);o($,mt),o(mt,d(`disabled`)),o($,d(`、`));let ht=h(`code`,$);o($,ht),o(ht,d(`onClick`)),o($,d(`仍然在各自的`));let gt=p($);o($,gt),l(gt,` `);let _t=h(`code`,$);return o($,_t),o(_t,d(`Button`)),o($,d(`上配置。`)),n})}),a,_),a})};export{j as default};