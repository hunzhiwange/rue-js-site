import{$t as e,Jt as t,Q as n,Z as r,dt as i,et as a,in as o,it as s,l as c,lt as l,nt as u,o as d,rt as f,t as p,tt as m,vt as h,zt as g}from"./vapor-runtime-DsQWl-IB.js";import{a as _,n as v}from"./vapor-helpers-vapor-Dg64FcpK.js";import{a as y,i as b}from"./persistentSidebarPlayground-6jqnvaEa.js";import{t as x}from"./Code-4SUSUwRg.js";import{t as S}from"./button-COZLI6MM.js";import{r as C}from"./SidebarPlaygroundDesign-EU389JDE.js";import{t as w}from"./preview-test-gate-nDDBbirJ.js";var T=[`preview`,`code`],ee=(e,t)=>c(o=>{let f=u(`div`,o);l(f,`role`,`tablist`),i(f,`tabs tabs-box mb-3 mt-4`);let p=a(`rue:list:start`),_=a(`rue:list:end`);n(f,p),n(f,_);let y=new Map;return g(()=>{y=v({items:T||[],getKey:(e,t)=>t,elements:y,parent:p.parentNode,before:_,singleRoot:!0,trackIndex:!1,start:p,renderItem:(a,o,f,p,_)=>{d(c(()=>{let o=m(),c=e===a,d=u(`button`,o);n(o,d),l(d,`type`,`button`),l(d,`role`,`tab`),g(()=>{l(d,`aria-selected`,String(c?`true`:`false`))}),g(()=>{i(d,`tab ${c?`tab-active`:``}`)}),r(d,`click`,()=>t(a));let f=s(d);return n(d,f),g(()=>{h(f,a===`preview`?`预览`:`JSX代码`)}),o}),o,f)}})}),f}),E=t=>c(r=>{let o=u(`div`,r);i(o,`component-preview not-prose text-base-content my-6 lg:my-12`);let s=u(`div`,o);n(o,s),i(s,`flex flex-wrap items-start justify-between gap-3`);let l=u(`div`,s);n(s,l);let h=u(`h2`,l);n(l,h),i(h,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(h,f(`# `));let _=a(`rue:slot:anchor`);n(h,_),g(()=>{let n=t.title;e(()=>d(n,h,_))});let v=a(`rue:slot:anchor`);n(l,v),g(()=>{let r=t.summary?c(()=>{let r=m(),o=u(`p`,r);n(r,o),i(o,`m-0 text-sm opacity-70`);let s=a(`rue:slot:anchor`);return n(o,s),g(()=>{let n=t.summary;e(()=>d(n,o,s))}),r}):``;e(()=>d(r,l,v))});let y=a(`rue:slot:anchor`);n(o,y),g(()=>{let n=ee(t.tab.value,e=>t.tab.value=e);e(()=>d(n,o,y))}),n(o,f(` `));let b=a(`rue:slot:anchor`);return n(o,b),g(()=>{let r=t.tab.value===`preview`?w(t.title,t.preview):c(()=>{let r=m(),i=a(`rue:component:anchor`);return n(r,i),g(()=>{let n=p(x,{className:`mt-2`,lang:`tsx`,code:t.code});e(()=>d(n,r,i))}),r});e(()=>d(r,o,b))}),o}),D=t=>c(r=>{let o=u(`div`,r);i(o,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let s=u(`table`,o);n(o,s),i(s,`table table-zebra`);let p=u(`thead`,s);n(s,p);let h=u(`tr`,p);n(p,h);let _=u(`th`,h);n(h,_),n(_,f(`属性`));let y=u(`th`,h);n(h,y),n(y,f(`说明`));let b=u(`th`,h);n(h,b),n(b,f(`类型`));let x=u(`th`,h);n(h,x),n(x,f(`默认值`));let S=u(`tbody`,s);n(s,S);let C=a(`rue:list:start`),w=a(`rue:list:end`);n(S,C),n(S,w);let T=new Map;return g(()=>{T=v({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,r,i,o,s)=>{d(c(()=>{let r=m(),i=u(`tr`,r);n(r,i),g(()=>{l(i,`key`,String(t.prop))});let o=u(`td`,i);n(i,o);let s=u(`code`,o);n(o,s);let c=a(`rue:slot:anchor`);n(s,c),g(()=>{let n=t.prop;e(()=>d(n,s,c))});let f=u(`td`,i);n(i,f);let p=a(`rue:slot:anchor`);n(f,p),g(()=>{let n=t.description;e(()=>d(n,f,p))});let h=u(`td`,i);n(i,h);let _=u(`code`,h);n(h,_);let v=a(`rue:slot:anchor`);n(_,v),g(()=>{let n=t.type;e(()=>d(n,_,v))});let y=u(`td`,i);n(i,y);let b=u(`code`,y);n(y,b);let x=a(`rue:slot:anchor`);return n(b,x),g(()=>{let n=t.defaultValue;e(()=>d(n,b,x))}),r}),r,i)}})}),o}),te=()=>c(e=>{let t=u(`svg`,e);l(t,`xmlns`,`http://www.w3.org/2000/svg`),l(t,`viewBox`,`0 0 24 24`),l(t,`fill`,`none`),l(t,`stroke`,`currentColor`),l(t,`strokeWidth`,`2`),i(t,`size-[1.05em]`);let r=u(`path`,t);return n(t,r),l(r,`strokeLinecap`,`round`),l(r,`strokeLinejoin`,`round`),l(r,`d`,`M12 5v14M5 12h14`),t}),O=()=>c(e=>{let t=u(`svg`,e);l(t,`xmlns`,`http://www.w3.org/2000/svg`),l(t,`viewBox`,`0 0 24 24`),l(t,`fill`,`none`),l(t,`stroke`,`currentColor`),l(t,`strokeWidth`,`2`),i(t,`size-[1.05em]`);let r=u(`path`,t);n(t,r),l(r,`strokeLinecap`,`round`),l(r,`strokeLinejoin`,`round`),l(r,`d`,`M5 12h14`);let a=u(`path`,t);return n(t,a),l(a,`strokeLinecap`,`round`),l(a,`strokeLinejoin`,`round`),l(a,`d`,`m13 6 6 6-6 6`),t}),k=()=>c(e=>{let t=u(`svg`,e);l(t,`xmlns`,`http://www.w3.org/2000/svg`),l(t,`viewBox`,`0 0 24 24`),l(t,`fill`,`none`),l(t,`stroke`,`currentColor`),l(t,`strokeWidth`,`2`),i(t,`size-[1.05em]`);let r=u(`path`,t);return n(t,r),l(r,`strokeLinecap`,`round`),l(r,`strokeLinejoin`,`round`),l(r,`d`,`M12 20s-7-4.35-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 10c0 5.65-7 10-7 10Z`),t}),ne=()=>c(e=>{let t=u(`svg`,e);l(t,`xmlns`,`http://www.w3.org/2000/svg`),l(t,`viewBox`,`0 0 24 24`),l(t,`fill`,`none`),l(t,`stroke`,`currentColor`),l(t,`strokeWidth`,`2`),i(t,`size-[1.05em]`);let r=u(`path`,t);n(t,r),l(r,`strokeLinecap`,`round`),l(r,`strokeLinejoin`,`round`),l(r,`d`,`M4.5 19.5 9 15l6 6`);let a=u(`path`,t);n(t,a),l(a,`strokeLinecap`,`round`),l(a,`strokeLinejoin`,`round`),l(a,`d`,`M15 9c0-3.5 2.5-6 6-6 0 3.5-2.5 6-6 6Z`);let o=u(`path`,t);n(t,o),l(o,`strokeLinecap`,`round`),l(o,`strokeLinejoin`,`round`),l(o,`d`,`M15 9 9 15`);let s=u(`circle`,t);return n(t,s),l(s,`cx`,`14`),l(s,`cy`,`10`),l(s,`r`,`1`),l(s,`fill`,`currentColor`),l(s,`stroke`,`none`),t}),re=()=>c(e=>{let t=u(`svg`,e);l(t,`xmlns`,`http://www.w3.org/2000/svg`),l(t,`viewBox`,`0 0 24 24`),l(t,`fill`,`none`),l(t,`stroke`,`currentColor`),l(t,`strokeWidth`,`2`),i(t,`size-[1.05em]`);let r=u(`rect`,t);n(t,r),l(r,`x`,`3`),l(r,`y`,`5`),l(r,`width`,`18`),l(r,`height`,`14`),l(r,`rx`,`2`);let a=u(`path`,t);return n(t,a),l(a,`strokeLinecap`,`round`),l(a,`strokeLinejoin`,`round`),l(a,`d`,`m4 7 8 6 8-6`),t}),A=()=>c(e=>{let t=u(`svg`,e);l(t,`xmlns`,`http://www.w3.org/2000/svg`),l(t,`viewBox`,`0 0 24 24`),l(t,`fill`,`none`),l(t,`stroke`,`currentColor`),l(t,`strokeWidth`,`2`),i(t,`size-[1.05em]`);let r=u(`path`,t);n(t,r),l(r,`strokeLinecap`,`round`),l(r,`strokeLinejoin`,`round`),l(r,`d`,`m12 3 1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3Z`);let a=u(`path`,t);return n(t,a),l(a,`strokeLinecap`,`round`),l(a,`strokeLinejoin`,`round`),l(a,`d`,`M5 18h.01M19 18h.01M12 21h.01`),t}),ie=[{label:`Default`},{label:`Neutral`,color:`neutral`},{label:`Primary`,color:`primary`},{label:`Secondary`,color:`secondary`},{label:`Accent`,color:`accent`},{label:`Info`,color:`info`},{label:`Success`,color:`success`},{label:`Warning`,color:`warning`},{label:`Error`,color:`error`}],ae=[{label:`Filled`,variant:`filled`},{label:`Outlined`,variant:`outlined`},{label:`Dashed`,variant:`dashed`}],oe=[{label:`Login with Email`,icon:`@`,className:`bg-white text-base-content border-base-300`,iconClassName:`bg-base-200 text-base-content`},{label:`Login with GitHub`,icon:`GH`,className:`bg-neutral text-neutral-content border-neutral`,iconClassName:`bg-white/15 text-white`},{label:`Login with Google`,icon:`G`,className:`bg-white text-base-content border-base-300`,iconClassName:`bg-red-100 text-red-700`},{label:`Login with Facebook`,icon:`f`,className:`bg-[#1A77F2] text-white border-[#005fd8]`,iconClassName:`bg-white/15 text-white`},{label:`Login with X`,icon:`X`,className:`bg-black text-white border-black`,iconClassName:`bg-white/15 text-white`},{label:`Login with Apple`,icon:`A`,className:`bg-black text-white border-black`,iconClassName:`bg-white/15 text-white`},{label:`Login with Slack`,icon:`S`,className:`bg-[#622069] text-white border-[#591660]`,iconClassName:`bg-white/15 text-white`},{label:`Login with Microsoft`,icon:`M`,className:`bg-[#2F2F2F] text-white border-black`,iconClassName:`bg-white/15 text-white`},{label:`Login with LINE`,icon:`L`,className:`bg-[#03C755] text-white border-[#00b544]`,iconClassName:`bg-white/15 text-white`},{label:`Login with MetaMask`,icon:`MM`,className:`bg-white text-base-content border-base-300`,iconClassName:`bg-orange-100 text-orange-700`}],se=t=>c(r=>{let o=u(`span`,r);g(()=>{i(o,`inline-grid h-5 min-w-5 place-items-center rounded-full px-1 text-[0.55rem] leading-none font-bold ${t.className??`bg-base-200 text-base-content`}`)});let s=a(`rue:slot:anchor`);return n(o,s),g(()=>{let n=t.text;e(()=>d(n,o,s))}),o}),ce=[{prop:`active`,description:`激活态，追加 btn-active`,type:`boolean`,defaultValue:`false`},{prop:`as`,description:`指定渲染标签，可选 button、a、div`,type:`'button' | 'a' | 'div'`,defaultValue:`'button'`},{prop:`block`,description:`整行按钮，宽度撑满容器`,type:`boolean`,defaultValue:`false`},{prop:`color`,description:`颜色层，danger 会映射到 error 按钮色`,type:`'default' | 'danger' | 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'`,defaultValue:`'default'`},{prop:`danger`,description:`危险态快捷开关，未设置 color 时等价于 color="danger"`,type:`boolean`,defaultValue:`false`},{prop:`disabled`,description:`禁用按钮；a 和 div 根节点也会输出禁用语义`,type:`boolean`,defaultValue:`false`},{prop:`href`,description:`传入后默认以 a 标签渲染`,type:`string`,defaultValue:`-`},{prop:`htmlType`,description:`原生 button 的 type`,type:`'button' | 'submit' | 'reset'`,defaultValue:`'button'`},{prop:`icon`,description:`图标节点`,type:`any`,defaultValue:`-`},{prop:`iconPlacement`,description:`图标位置`,type:`'start' | 'end'`,defaultValue:`'start'`},{prop:`loading`,description:`支持 boolean 或对象写法，可自定义加载图标`,type:`boolean | { delay?: number; icon?: any }`,defaultValue:`false`},{prop:`onClick`,description:`点击按钮时的回调；disabled 或 loading 时不会触发`,type:`(event: MouseEvent) => void`,defaultValue:`-`},{prop:`shape`,description:`按钮形状`,type:`'default' | 'square' | 'circle' | 'round'`,defaultValue:`'default'`},{prop:`size`,description:`尺寸，支持 xs 到 xl，以及 small / middle / large 别名`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'middle' | 'medium' | 'large'`,defaultValue:`-`},{prop:`target`,description:`链接目标窗口，仅 a 标签生效`,type:`string`,defaultValue:`-`},{prop:`type`,description:`视觉类型，直接替代基础的 variant 语义`,type:`'solid' | 'filled' | 'outlined' | 'dashed' | 'text' | 'link'`,defaultValue:`'solid'`},{prop:`wide`,description:`宽按钮，追加 btn-wide`,type:`boolean`,defaultValue:`false`}],le=[{prop:`as`,description:`指定按钮组根节点标签`,type:`any`,defaultValue:`'div'`},{prop:`size`,description:`统一同步组内按钮尺寸`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'middle' | 'medium' | 'large'`,defaultValue:`-`},{prop:`shape`,description:`统一同步组内按钮轮廓；circle 在分组场景下会映射为圆角组合样式`,type:`'default' | 'square' | 'circle' | 'round'`,defaultValue:`-`},{prop:`direction`,description:`按钮组排列方向`,type:`'horizontal' | 'vertical'`,defaultValue:`'horizontal'`},{prop:`block`,description:`让按钮组宽度撑满容器`,type:`boolean`,defaultValue:`false`},{prop:`className`,description:`自定义根节点类名`,type:`string`,defaultValue:`-`}],j=()=>{let{tabTypes:r,tabResponsive:v,tabPalette:x,tabVariants:w,tabDanger:T,tabIcons:ee,tabLoading:j,tabClick:ue,tabSizes:de,tabGroup:fe,tabStates:pe,tabFormLink:me,tabRecipes:he,tabLogin:ge,submitCount:M,clickCount:N,lastAction:P}=_(`useSetup:0:0`,()=>o(()=>({tabTypes:_(`ref:1:0`,()=>t(`preview`)),tabResponsive:_(`ref:1:1`,()=>t(`preview`)),tabPalette:_(`ref:1:2`,()=>t(`preview`)),tabVariants:_(`ref:1:3`,()=>t(`preview`)),tabDanger:_(`ref:1:4`,()=>t(`preview`)),tabIcons:_(`ref:1:5`,()=>t(`preview`)),tabLoading:_(`ref:1:6`,()=>t(`preview`)),tabClick:_(`ref:1:7`,()=>t(`preview`)),tabSizes:_(`ref:1:8`,()=>t(`preview`)),tabGroup:_(`ref:1:9`,()=>t(`preview`)),tabStates:_(`ref:1:10`,()=>t(`preview`)),tabFormLink:_(`ref:1:11`,()=>t(`preview`)),tabRecipes:_(`ref:1:12`,()=>t(`preview`)),tabLogin:_(`ref:1:13`,()=>t(`preview`)),submitCount:_(`ref:1:14`,()=>t(0)),clickCount:_(`ref:1:15`,()=>t(0)),lastAction:_(`ref:1:16`,()=>t(`未触发`))})));return c(t=>{let o=m(),_=a(`rue:component:anchor`);return n(o,_),d(p(C,{children:c(()=>{let t=m(),o=u(`div`,t);n(t,o),i(o,`max-w-none prose prose-sm md:prose-base`);let c=u(`h1`,o);n(o,c),n(c,f(`Button 按钮`));let _=u(`p`,o);n(o,_),i(_,`text-sm mt-3 mb-3`);let C=u(`code`,_);n(_,C),n(C,f(`type`)),n(_,f(`负责视觉类型，`));let F=u(`code`,_);n(_,F),n(F,f(`color`)),n(_,f(`负责主题色，再用`));let I=u(`code`,_);n(_,I),n(I,f(`shape`)),n(_,f(`、`));let L=u(`code`,_);n(_,L),n(L,f(`icon`)),n(_,f(`、`));let R=u(`code`,_);n(_,R),n(R,f(`loading`)),n(_,f(`补足交互细节。`));let z=u(`h2`,o);n(o,z),n(z,f(`何时使用`));let B=u(`ul`,o);n(o,B);let V=u(`li`,B);n(B,V),n(V,f(`需要一个通用操作按钮，并希望颜色、类型、形状和状态能拆开表达。`));let H=u(`li`,B);n(B,H),n(H,f(`需要在表单里区分视觉类型`));let U=u(`code`,H);n(H,U),n(U,f(`type`)),n(H,f(`和原生提交类型`));let W=u(`code`,H);n(H,W),n(W,f(`htmlType`)),n(H,f(`。`));let G=u(`li`,B);n(B,G),n(G,f(`需要统一处理图标按钮、加载按钮、链接按钮和整行按钮。`));let _e=a(`rue:component:anchor`);n(o,_e),g(()=>{let t=p(E,{title:`类型`,summary:`type 现在直接对应视觉类型。`,tab:r,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:[b(S,{children:`Solid`}),b(S,{type:`outlined`,children:`Outlined`}),b(S,{type:`dashed`,children:`Dashed`}),b(S,{type:`filled`,children:`Filled`}),b(S,{type:`text`,children:`Text`}),b(S,{type:`link`,children:`Link`})]})}),code:`<Button>Solid</Button>
        <Button type="outlined">Outlined</Button>
<Button type="dashed">Dashed</Button>
        <Button type="filled">Filled</Button>
<Button type="text">Text</Button>
<Button type="link">Link</Button>`});e(()=>d(t,o,_e))});let ve=a(`rue:component:anchor`);n(o,ve),g(()=>{let t=p(E,{title:`响应式尺寸`,summary:`把基础的响应式按钮演示保持回来，统一改成 size + className 的方式。`,tab:v,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:b(S,{size:`xs`,className:`sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl`,children:`Responsive`})})}),code:`<Button size="xs" className="sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
  Responsive
</Button>`});e(()=>d(t,o,ve))});let ye=a(`rue:component:anchor`);n(o,ye),g(()=>{let t=p(E,{title:`颜色色板`,summary:`颜色演示展示，但统一改成 color 语义。`,tab:x,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:ie.map(e=>b(S,{color:e.color,children:e.label},e.label))})}),code:`const tones = [
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
</div>`});e(()=>d(t,o,ye))});let be=a(`rue:component:anchor`);n(o,be),g(()=>{let t=p(E,{title:`风格矩阵`,summary:`把基础的 soft、outline、dash 演示融合成统一的 type 展示。`,tab:w,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-5`,children:[ae.map(e=>y(`div`,{children:[b(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:e.label}),b(`div`,{className:`flex flex-wrap gap-2`,children:ie.map(t=>b(S,{color:t.color,type:e.variant,children:t.label},`${e.label}-${t.label}`))})]},e.label)),y(`div`,{className:`rounded-box bg-white p-4 text-black`,children:[b(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] text-black/60`,children:`Neutral on light surface`}),y(`div`,{className:`flex flex-wrap gap-2`,children:[b(S,{color:`neutral`,type:`outlined`,children:`Outline`}),b(S,{color:`neutral`,type:`dashed`,children:`Dash`})]})]})]})}),code:`const tones = [
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
</div>`});e(()=>d(t,o,be))});let xe=a(`rue:component:anchor`);n(o,xe),g(()=>{let t=p(E,{title:`危险态`,summary:`danger 是快捷开关，也可以直接通过 color='danger' 控制。`,tab:T,preview:()=>b(`div`,{className:`card bg-neutral text-neutral-content shadow-sm`,children:y(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:[b(S,{color:`danger`,children:`Delete forever`}),b(S,{color:`danger`,type:`outlined`,children:`Remove access`}),b(S,{color:`danger`,type:`filled`,children:`Archive branch`}),b(S,{color:`danger`,type:`text`,children:`Clear cache`})]})}),code:`<Button color="danger">Delete forever</Button>
        <Button color="danger" type="outlined">Remove access</Button>
        <Button color="danger" type="filled">Archive branch</Button>
        <Button color="danger" type="text">Clear cache</Button>`});e(()=>d(t,o,xe))});let Se=a(`rue:component:anchor`);n(o,Se),g(()=>{let t=p(E,{title:`图标与图标位置`,summary:`icon 和 iconPlacement 用来组织图标按钮与带文案按钮。`,tab:ee,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:[b(S,{color:`primary`,icon:b(te,{}),children:`Create project`}),b(S,{color:`secondary`,type:`outlined`,icon:b(O,{}),iconPlacement:`end`,children:`Continue`}),b(S,{color:`accent`,shape:`circle`,icon:b(k,{}),"aria-label":`收藏`}),b(S,{color:`info`,shape:`square`,icon:b(A,{}),"aria-label":`高亮`})]})}),code:`<Button color="primary" icon={<span>+</span>}>
  Create project
</Button>

<Button color="secondary" type="outlined" icon={<span>→</span>} iconPlacement="end">
  Continue
</Button>

<Button color="accent" shape="circle" icon={<span>♥</span>} aria-label="收藏" />`});e(()=>d(t,o,Se))});let Ce=a(`rue:component:anchor`);n(o,Ce),g(()=>{let t=p(E,{title:`加载状态`,summary:`loading 会锁定按钮；对象写法可以替换默认加载图标。`,tab:j,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:[b(S,{color:`primary`,loading:!0,children:`Saving`}),b(S,{type:`outlined`,loading:{icon:b(`span`,{className:`loading loading-dots loading-xs`})},children:`Syncing`}),b(S,{color:`success`,icon:b(ne,{}),children:`Ready to publish`})]})}),code:`<Button color="primary" loading>Saving</Button>

<Button
  type="outlined"
  loading={{ icon: <span className="loading loading-dots loading-xs" /> }}
>
  Syncing
</Button>`});e(()=>d(t,o,Ce))});let we=a(`rue:component:anchor`);n(o,we),g(()=>{let t=p(E,{title:`点击事件`,summary:`onClick 会透传原生点击事件，适合命令触发、埋点和分组按钮内交互。`,tab:ue,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-4`,children:[y(`div`,{className:`flex flex-wrap items-center gap-2`,children:[b(S,{color:`primary`,onClick:e=>{N.value+=1,P.value=`save:${e.currentTarget.tagName.toLowerCase()}`},children:`Trigger save`}),b(S,{type:`outlined`,onClick:e=>{N.value+=1,P.value=`preview:${e.currentTarget.tagName.toLowerCase()}`},children:`Preview draft`}),b(S,{href:`#button-api`,type:`link`,onClick:e=>{e.preventDefault(),N.value+=1,P.value=`link:${e.currentTarget.tagName.toLowerCase()}`},children:`Track jump`})]}),y(`div`,{className:`rounded-box bg-base-200/70 px-4 py-3 text-sm`,children:[y(`div`,{children:[`click count: `,N.value]}),y(`div`,{children:[`last action: `,P.value]})]})]})}),code:`const clickCount = ref(0)
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
</div>`});e(()=>d(t,o,we))});let Te=a(`rue:component:anchor`);n(o,Te),g(()=>{let t=p(E,{title:`尺寸与形状`,summary:`size 管尺寸，shape 管轮廓形态。`,tab:de,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-5`,children:[y(`div`,{children:[b(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Sizes`}),y(`div`,{className:`flex flex-wrap items-center gap-2`,children:[b(S,{size:`small`,children:`Small`}),b(S,{children:`Default`}),b(S,{size:`large`,color:`primary`,children:`Large`}),b(S,{size:`xs`,type:`outlined`,children:`XS`}),b(S,{size:`xl`,color:`secondary`,children:`XL`})]})]}),y(`div`,{children:[b(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Shapes`}),y(`div`,{className:`flex flex-wrap items-center gap-2`,children:[b(S,{color:`primary`,shape:`round`,children:`Round action`}),b(S,{color:`secondary`,shape:`square`,icon:b(A,{}),"aria-label":`square`}),b(S,{color:`accent`,shape:`circle`,icon:b(k,{}),"aria-label":`circle`})]})]})]})}),code:`<Button size="small">Small</Button>
<Button>Default</Button>
<Button size="large" color="primary">Large</Button>
<Button size="xs" type="outlined">XS</Button>
<Button size="xl" color="secondary">XL</Button>

<Button color="primary" shape="round">Round action</Button>
<Button color="secondary" shape="square" icon={<span>⋯</span>} />
<Button color="accent" shape="circle" icon={<span>♥</span>} />`});e(()=>d(t,o,Te))});let Ee=a(`rue:component:anchor`);n(o,Ee),g(()=>{let t=p(E,{title:`按钮组合`,summary:`提供与常见 ButtonGroup 类似的分组能力，这里统一用 Button.Group。`,tab:fe,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-6`,children:[y(`div`,{children:[b(`div`,{className:`mb-3 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Basic`}),y(`div`,{className:`flex flex-wrap items-center gap-3`,children:[y(S.Group,{children:[b(S,{children:`Cancel`}),b(S,{color:`primary`,children:`Confirm`})]}),y(S.Group,{children:[b(S,{disabled:!0,children:`Yesterday`}),b(S,{disabled:!0,children:`Today`}),b(S,{disabled:!0,children:`Tomorrow`})]}),y(S.Group,{children:[b(S,{color:`primary`,children:`L`}),b(S,{children:`M`}),b(S,{children:`M`}),b(S,{type:`dashed`,children:`R`})]})]})]}),y(`div`,{children:[b(`div`,{className:`mb-3 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Icons`}),y(`div`,{className:`flex flex-wrap items-center gap-3`,children:[y(S.Group,{children:[b(S,{color:`primary`,icon:b(`span`,{"aria-hidden":`true`,children:`←`}),children:`Backward`}),b(S,{color:`primary`,icon:b(`span`,{"aria-hidden":`true`,children:`→`}),iconPlacement:`end`,children:`Forward`})]}),y(S.Group,{children:[b(S,{color:`primary`,icon:b(`span`,{"aria-hidden":`true`,children:`«`}),"aria-label":`skip backward`}),b(S,{color:`primary`,icon:b(`span`,{"aria-hidden":`true`,children:`»`}),"aria-label":`skip forward`})]}),y(S.Group,{children:[b(S,{icon:b(`span`,{"aria-hidden":`true`,children:`✦`}),"aria-label":`magic`}),b(S,{icon:b(`span`,{"aria-hidden":`true`,children:`☀`}),"aria-label":`sunny`}),b(S,{icon:b(`span`,{"aria-hidden":`true`,children:`✂`}),"aria-label":`crop`}),b(S,{icon:b(`span`,{"aria-hidden":`true`,children:`⛶`}),"aria-label":`filter`})]})]})]}),y(`div`,{children:[b(`div`,{className:`mb-3 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Circle`}),y(`div`,{className:`flex flex-wrap items-center gap-3`,children:[y(S.Group,{shape:`circle`,children:[b(S,{color:`primary`,children:`Backward`}),b(S,{color:`primary`,children:`Forward`})]}),y(S.Group,{shape:`circle`,children:[b(S,{color:`primary`,icon:b(`span`,{"aria-hidden":`true`,children:`«`}),"aria-label":`circle backward`}),b(S,{color:`primary`,icon:b(`span`,{"aria-hidden":`true`,children:`»`}),"aria-label":`circle forward`})]}),y(S.Group,{shape:`circle`,children:[b(S,{icon:b(`span`,{"aria-hidden":`true`,children:`✦`}),"aria-label":`circle magic`}),b(S,{icon:b(`span`,{"aria-hidden":`true`,children:`☀`}),"aria-label":`circle sunny`}),b(S,{icon:b(`span`,{"aria-hidden":`true`,children:`✂`}),"aria-label":`circle crop`}),b(S,{icon:b(`span`,{"aria-hidden":`true`,children:`⛶`}),"aria-label":`circle filter`})]})]})]}),y(`div`,{children:[b(`div`,{className:`mb-3 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Size`}),y(`div`,{className:`space-y-3`,children:[y(`div`,{className:`flex flex-wrap items-center gap-3`,children:[y(S.Group,{size:`large`,children:[b(S,{children:`Large`}),b(S,{children:`Large`})]}),y(S.Group,{children:[b(S,{children:`Default`}),b(S,{children:`Default`})]}),y(S.Group,{size:`small`,children:[b(S,{children:`Small`}),b(S,{children:`Small`})]})]}),y(`div`,{className:`flex flex-wrap items-center gap-3`,children:[y(S.Group,{size:`large`,shape:`circle`,children:[b(S,{children:`Large`}),b(S,{children:`Large`})]}),y(S.Group,{shape:`circle`,children:[b(S,{children:`Default`}),b(S,{children:`Default`})]}),y(S.Group,{size:`small`,shape:`circle`,children:[b(S,{children:`Small`}),b(S,{children:`Small`})]})]})]})]})]})}),code:`<div className="space-y-6">
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
</div>`});e(()=>d(t,o,Ee))});let De=a(`rue:component:anchor`);n(o,De),g(()=>{let t=p(E,{title:`状态与布局`,summary:`把基础的 active、disabled、wide、block 示例也融合到当前页面。`,tab:pe,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-5`,children:[y(`div`,{children:[b(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`States`}),y(`div`,{className:`flex flex-wrap gap-2`,children:[b(S,{active:!0,children:`Active`}),b(S,{color:`primary`,active:!0,children:`Primary active`}),b(S,{disabled:!0,children:`Disabled`}),b(S,{href:`#button-api`,disabled:!0,children:`Disabled link`})]})]}),y(`div`,{children:[b(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Layout`}),y(`div`,{className:`flex flex-col gap-2 sm:max-w-sm`,children:[b(S,{wide:!0,children:`Wide button`}),b(S,{block:!0,color:`primary`,children:`Block button`})]})]})]})}),code:`<div className="flex flex-wrap gap-2">
  <Button active>Active</Button>
  <Button color="primary" active>Primary active</Button>
  <Button disabled>Disabled</Button>
  <Button href="#button-api" disabled>Disabled link</Button>
</div>

<div className="flex flex-col gap-2 sm:max-w-sm">
  <Button wide>Wide button</Button>
  <Button block color="primary">Block button</Button>
</div>`});e(()=>d(t,o,De))});let Oe=a(`rue:component:anchor`);n(o,Oe),g(()=>{let t=p(E,{title:`根节点与表单行为`,summary:`默认渲染 button，同时保持链接根节点、div 根节点和表单行为示例。`,tab:me,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-4`,children:[y(`div`,{className:`flex flex-wrap gap-2`,children:[b(S,{children:`Native button`}),b(S,{href:`#button-api`,children:`Anchor`}),b(S,{as:`div`,type:`text`,children:`Div button`})]}),y(`div`,{className:`text-sm opacity-70`,children:[`submit count: `,M.value]}),y(`form`,{className:`flex flex-wrap items-center gap-2`,onSubmit:e=>{e.preventDefault(),M.value+=1},children:[b(S,{color:`primary`,htmlType:`submit`,children:`Submit form`}),b(S,{type:`outlined`,htmlType:`reset`,children:`Reset form`}),b(S,{href:`#button-api`,type:`link`,children:`Jump to API`})]})]})}),code:`const submitCount = ref(0)

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
</form>`});e(()=>d(t,o,Oe))});let ke=a(`rue:component:anchor`);n(o,ke),g(()=>{let t=p(E,{title:`场景组合`,summary:`把图标、变体、布局属性组合在一起，可以很快搭出操作条。`,tab:he,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-4`,children:[y(`div`,{className:`flex flex-wrap gap-2`,children:[b(S,{color:`primary`,icon:b(ne,{}),children:`Publish`}),b(S,{type:`outlined`,icon:b(O,{}),iconPlacement:`end`,children:`Preview`}),b(S,{type:`text`,icon:b(A,{}),children:`Save draft`})]}),y(`div`,{className:`grid gap-2 md:grid-cols-2`,children:[b(S,{block:!0,className:`justify-start bg-white text-base-content border-base-300`,icon:b(re,{}),children:`Continue with Email`}),b(S,{block:!0,color:`primary`,className:`justify-start`,icon:b(A,{}),children:`Continue with Rue ID`})]})]})}),code:`<div className="flex flex-wrap gap-2">
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
</div>`});e(()=>d(t,o,ke))});let Ae=a(`rue:component:anchor`);n(o,Ae),g(()=>{let t=p(E,{title:`登录按钮`,summary:`把基础的 provider 登录按钮演示融合回来，统一改成 icon + block + className 的新 API 写法。`,tab:ge,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:b(`div`,{className:`grid gap-2 md:grid-cols-2`,children:oe.map(e=>b(S,{block:!0,className:`justify-start ${e.className}`,icon:b(se,{text:e.icon,className:e.iconClassName}),children:e.label},e.label))})})}),code:`const loginButtons = [
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
</div>`});e(()=>d(t,o,Ae))});let K=u(`h2`,o);n(o,K),l(K,`id`,`button-api`),n(K,f(`API`));let je=u(`p`,o);n(o,je),n(je,f(`当前页面展示的是 Button 与 Button.Group 的完整可用 API。`));let q=u(`p`,o);n(o,q),n(q,f(`推荐使用顺序：`));let Me=u(`code`,q);n(q,Me),n(Me,f(`type`)),n(q,f(`->`));let Ne=u(`code`,q);n(q,Ne),n(Ne,f(`color`)),n(q,f(`->`));let Pe=u(`code`,q);n(q,Pe),n(Pe,f(`shape`)),n(q,f(`->`));let Fe=s(q);n(q,Fe),h(Fe,` `);let Ie=u(`code`,q);n(q,Ie),n(Ie,f(`size`)),n(q,f(`->`));let Le=u(`code`,q);n(q,Le),n(Le,f(`loading`)),n(q,f(`->`));let Re=u(`code`,q);n(q,Re),n(Re,f(`disabled`)),n(q,f(`。`));let ze=u(`h3`,o);n(o,ze),n(ze,f(`Button`));let Be=a(`rue:component:anchor`);n(o,Be),g(()=>{let t=p(D,{rows:ce});e(()=>d(t,o,Be))});let Ve=u(`h3`,o);n(o,Ve),n(Ve,f(`Button.Group`));let He=a(`rue:component:anchor`);n(o,He),g(()=>{let t=p(D,{rows:le});e(()=>d(t,o,He))});let Ue=u(`h2`,o);n(o,Ue),n(Ue,f(`FAQ`));let We=u(`h3`,o);n(o,We),n(We,f(`为什么有 type 还需要 htmlType？`));let J=u(`p`,o);n(o,J);let Ge=u(`code`,J);n(J,Ge),n(Ge,f(`type`)),n(J,f(`负责按钮视觉类型，`));let Ke=u(`code`,J);n(J,Ke),n(Ke,f(`htmlType`)),n(J,f(`负责原生 button 行为。视觉和提交语义拆开之后， 表单场景会更直接。`));let qe=u(`h3`,o);n(o,qe),n(qe,f(`type 和 color 应该怎么分工？`));let Y=u(`p`,o);n(o,Y);let Je=u(`code`,Y);n(Y,Je),n(Je,f(`type`)),n(Y,f(`负责视觉类型，比如`));let Ye=u(`code`,Y);n(Y,Ye),n(Ye,f(`outlined`)),n(Y,f(`、`));let Xe=u(`code`,Y);n(Y,Xe),n(Xe,f(`filled`)),n(Y,f(`、`));let Ze=u(`code`,Y);n(Y,Ze),n(Ze,f(`text`)),n(Y,f(`。`));let Qe=u(`code`,Y);n(Y,Qe),n(Qe,f(`color`)),n(Y,f(`负责主题色，比如`));let $e=u(`code`,Y);n(Y,$e),n($e,f(`primary`)),n(Y,f(`、`));let et=u(`code`,Y);n(Y,et),n(et,f(`secondary`)),n(Y,f(`、`));let tt=u(`code`,Y);n(Y,tt),n(tt,f(`danger`)),n(Y,f(`。`));let X=u(`p`,o);n(o,X),n(X,f(`大多数场景可以先定颜色， 再根据密度和层级选择`));let nt=u(`code`,X);n(X,nt),n(nt,f(`solid`)),n(X,f(`、`));let rt=u(`code`,X);n(X,rt),n(rt,f(`outlined`)),n(X,f(`、`));let Z=u(`code`,X);n(X,Z),n(Z,f(`filled`)),n(X,f(`或`));let it=u(`code`,X);n(X,it),n(it,f(`text`)),n(X,f(`。`));let at=u(`h3`,o);n(o,at),n(at,f(`loading 对象里的 delay 会生效吗？`));let Q=u(`p`,o);n(o,Q),n(Q,f(`当前组件支持`));let ot=u(`code`,Q);n(Q,ot),n(ot,f(`loading`)),n(Q,f(`的对象写法和自定义`));let st=u(`code`,Q);n(Q,st),n(st,f(`icon`)),n(Q,f(`。`));let ct=u(`code`,Q);n(Q,ct),n(ct,f(`delay`)),n(Q,f(`字段已保持在配置结构里，后续如果补充延迟显示策略，可以直接在当前接口上继续扩展。`));let lt=u(`h3`,o);n(o,lt),n(lt,f(`Button.Group 会覆盖子按钮哪些属性？`));let $=u(`p`,o);n(o,$),n($,f(`组级只会统一同步`));let ut=u(`code`,$);n($,ut),n(ut,f(`size`)),n($,f(`和`));let dt=u(`code`,$);n($,dt),n(dt,f(`shape`)),n($,f(`，方便在一组按钮上集中控制尺寸和轮廓。 每个子按钮自己的`));let ft=u(`code`,$);n($,ft),n(ft,f(`color`)),n($,f(`、`));let pt=u(`code`,$);n($,pt),n(pt,f(`type`)),n($,f(`、`));let mt=u(`code`,$);n($,mt),n(mt,f(`disabled`)),n($,f(`、`));let ht=u(`code`,$);n($,ht),n(ht,f(`onClick`)),n($,f(`仍然在各自的`));let gt=s($);n($,gt),h(gt,` `);let _t=u(`code`,$);return n($,_t),n(_t,f(`Button`)),n($,f(`上配置。`)),t})}),o,_),o})};export{j as default};