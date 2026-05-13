import{F as e,G as t,I as n,L as r,M as i,P as a,R as o,U as s,Z as c,_t as l,bt as u,c as d,lt as f,pt as p,t as m,u as h}from"./vapor-runtime-D3a-68js.js";import{a as g,n as _}from"./vapor-helpers-vapor-DGjYaAZX.js";import{n as v,t as y}from"./src-BfQKH6_d.js";import{n as b}from"./SidebarPlaygroundDesign-vpnUkFCM.js";import{t as x}from"./Code-2C2psoH3.js";import{t as S}from"./button-DroKVuaU.js";import{t as C}from"./tabs-BgQmsOey.js";var w=o=>h(()=>{let s=n(`div`);t(s,`component-preview not-prose text-base-content my-6 lg:my-12`);let c=n(`div`);i(s,c),t(c,`flex flex-wrap items-start justify-between gap-3`);let l=n(`div`);i(c,l);let f=n(`h2`);i(l,f),t(f,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(f,r(`# `));let g=a(`rue:slot:anchor`);i(f,g),u(()=>{let e=o.title;p(()=>d(e,f,g))});let _=a(`rue:slot:anchor`);i(l,_),u(()=>{let r=o.summary?h(()=>{let r=e(),s=n(`p`);i(r,s),t(s,`m-0 text-sm opacity-70`);let c=a(`rue:slot:anchor`);return i(s,c),u(()=>{let e=o.summary;p(()=>d(e,s,c))}),r}):``;p(()=>d(r,l,_))});let v=a(`rue:component:anchor`);i(s,v),u(()=>{let e=m(C,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:o.tab.value,onChange:e=>o.tab.value=e,className:`mb-3 mt-4`});p(()=>d(e,s,v))});let y=a(`rue:slot:anchor`);return i(s,y),u(()=>{let t=o.tab.value===`preview`?o.preview():h(()=>{let t=e(),n=a(`rue:component:anchor`);return i(t,n),u(()=>{let e=m(x,{className:`mt-2`,lang:`tsx`,code:o.code});p(()=>d(e,t,n))}),t});p(()=>d(t,s,y))}),s}),T=o=>h(()=>{let c=n(`div`);t(c,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let l=n(`table`);i(c,l),t(l,`table table-zebra`);let f=n(`thead`);i(l,f);let m=n(`tr`);i(f,m);let g=n(`th`);i(m,g),i(g,r(`属性`));let v=n(`th`);i(m,v),i(v,r(`说明`));let y=n(`th`);i(m,y),i(y,r(`类型`));let b=n(`th`);i(m,b),i(b,r(`默认值`));let x=n(`tbody`);i(l,x);let S=a(`rue:list:start`),C=a(`rue:list:end`);i(x,S),i(x,C);let w=new Map;return u(()=>{w=_({items:o.rows||[],getKey:(e,t)=>e.prop,elements:w,parent:x,before:C,singleRoot:!0,trackIndex:!1,start:S,renderItem:(t,r,o,c,l)=>{d(h(()=>{let r=e(),o=n(`tr`);i(r,o),u(()=>{s(o,`key`,String(t.prop))});let c=n(`td`);i(o,c);let l=n(`code`);i(c,l);let f=a(`rue:slot:anchor`);i(l,f),u(()=>{let e=t.prop;p(()=>d(e,l,f))});let m=n(`td`);i(o,m);let h=a(`rue:slot:anchor`);i(m,h),u(()=>{let e=t.description;p(()=>d(e,m,h))});let g=n(`td`);i(o,g);let _=n(`code`);i(g,_);let v=a(`rue:slot:anchor`);i(_,v),u(()=>{let e=t.type;p(()=>d(e,_,v))});let y=n(`td`);i(o,y);let b=n(`code`);i(y,b);let x=a(`rue:slot:anchor`);return i(b,x),u(()=>{let e=t.defaultValue;p(()=>d(e,b,x))}),r}),r,o)}})}),c}),ee=()=>h(()=>{let e=n(`svg`);s(e,`xmlns`,`http://www.w3.org/2000/svg`),s(e,`viewBox`,`0 0 24 24`),s(e,`fill`,`none`),s(e,`stroke`,`currentColor`),s(e,`strokeWidth`,`2`),t(e,`size-[1.05em]`);let r=n(`path`);return i(e,r),s(r,`strokeLinecap`,`round`),s(r,`strokeLinejoin`,`round`),s(r,`d`,`M12 5v14M5 12h14`),e}),E=()=>h(()=>{let e=n(`svg`);s(e,`xmlns`,`http://www.w3.org/2000/svg`),s(e,`viewBox`,`0 0 24 24`),s(e,`fill`,`none`),s(e,`stroke`,`currentColor`),s(e,`strokeWidth`,`2`),t(e,`size-[1.05em]`);let r=n(`path`);i(e,r),s(r,`strokeLinecap`,`round`),s(r,`strokeLinejoin`,`round`),s(r,`d`,`M5 12h14`);let a=n(`path`);return i(e,a),s(a,`strokeLinecap`,`round`),s(a,`strokeLinejoin`,`round`),s(a,`d`,`m13 6 6 6-6 6`),e}),D=()=>h(()=>{let e=n(`svg`);s(e,`xmlns`,`http://www.w3.org/2000/svg`),s(e,`viewBox`,`0 0 24 24`),s(e,`fill`,`none`),s(e,`stroke`,`currentColor`),s(e,`strokeWidth`,`2`),t(e,`size-[1.05em]`);let r=n(`path`);return i(e,r),s(r,`strokeLinecap`,`round`),s(r,`strokeLinejoin`,`round`),s(r,`d`,`M12 20s-7-4.35-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 10c0 5.65-7 10-7 10Z`),e}),O=()=>h(()=>{let e=n(`svg`);s(e,`xmlns`,`http://www.w3.org/2000/svg`),s(e,`viewBox`,`0 0 24 24`),s(e,`fill`,`none`),s(e,`stroke`,`currentColor`),s(e,`strokeWidth`,`2`),t(e,`size-[1.05em]`);let r=n(`path`);i(e,r),s(r,`strokeLinecap`,`round`),s(r,`strokeLinejoin`,`round`),s(r,`d`,`M4.5 19.5 9 15l6 6`);let a=n(`path`);i(e,a),s(a,`strokeLinecap`,`round`),s(a,`strokeLinejoin`,`round`),s(a,`d`,`M15 9c0-3.5 2.5-6 6-6 0 3.5-2.5 6-6 6Z`);let o=n(`path`);i(e,o),s(o,`strokeLinecap`,`round`),s(o,`strokeLinejoin`,`round`),s(o,`d`,`M15 9 9 15`);let c=n(`circle`);return i(e,c),s(c,`cx`,`14`),s(c,`cy`,`10`),s(c,`r`,`1`),s(c,`fill`,`currentColor`),s(c,`stroke`,`none`),e}),te=()=>h(()=>{let e=n(`svg`);s(e,`xmlns`,`http://www.w3.org/2000/svg`),s(e,`viewBox`,`0 0 24 24`),s(e,`fill`,`none`),s(e,`stroke`,`currentColor`),s(e,`strokeWidth`,`2`),t(e,`size-[1.05em]`);let r=n(`rect`);i(e,r),s(r,`x`,`3`),s(r,`y`,`5`),s(r,`width`,`18`),s(r,`height`,`14`),s(r,`rx`,`2`);let a=n(`path`);return i(e,a),s(a,`strokeLinecap`,`round`),s(a,`strokeLinejoin`,`round`),s(a,`d`,`m4 7 8 6 8-6`),e}),k=()=>h(()=>{let e=n(`svg`);s(e,`xmlns`,`http://www.w3.org/2000/svg`),s(e,`viewBox`,`0 0 24 24`),s(e,`fill`,`none`),s(e,`stroke`,`currentColor`),s(e,`strokeWidth`,`2`),t(e,`size-[1.05em]`);let r=n(`path`);i(e,r),s(r,`strokeLinecap`,`round`),s(r,`strokeLinejoin`,`round`),s(r,`d`,`m12 3 1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3Z`);let a=n(`path`);return i(e,a),s(a,`strokeLinecap`,`round`),s(a,`strokeLinejoin`,`round`),s(a,`d`,`M5 18h.01M19 18h.01M12 21h.01`),e}),ne=[{label:`Default`},{label:`Neutral`,color:`neutral`},{label:`Primary`,color:`primary`},{label:`Secondary`,color:`secondary`},{label:`Accent`,color:`accent`},{label:`Info`,color:`info`},{label:`Success`,color:`success`},{label:`Warning`,color:`warning`},{label:`Error`,color:`error`}],re=[{label:`Filled`,variant:`filled`},{label:`Outlined`,variant:`outlined`},{label:`Dashed`,variant:`dashed`}],ie=[{label:`Login with Email`,icon:`@`,className:`bg-white text-base-content border-base-300`,iconClassName:`bg-base-200 text-base-content`},{label:`Login with GitHub`,icon:`GH`,className:`bg-neutral text-neutral-content border-neutral`,iconClassName:`bg-white/15 text-white`},{label:`Login with Google`,icon:`G`,className:`bg-white text-base-content border-base-300`,iconClassName:`bg-red-100 text-red-700`},{label:`Login with Facebook`,icon:`f`,className:`bg-[#1A77F2] text-white border-[#005fd8]`,iconClassName:`bg-white/15 text-white`},{label:`Login with X`,icon:`X`,className:`bg-black text-white border-black`,iconClassName:`bg-white/15 text-white`},{label:`Login with Apple`,icon:`A`,className:`bg-black text-white border-black`,iconClassName:`bg-white/15 text-white`},{label:`Login with Slack`,icon:`S`,className:`bg-[#622069] text-white border-[#591660]`,iconClassName:`bg-white/15 text-white`},{label:`Login with Microsoft`,icon:`M`,className:`bg-[#2F2F2F] text-white border-black`,iconClassName:`bg-white/15 text-white`},{label:`Login with LINE`,icon:`L`,className:`bg-[#03C755] text-white border-[#00b544]`,iconClassName:`bg-white/15 text-white`},{label:`Login with MetaMask`,icon:`MM`,className:`bg-white text-base-content border-base-300`,iconClassName:`bg-orange-100 text-orange-700`}],ae=e=>h(()=>{let r=n(`span`);u(()=>{t(r,String(`inline-grid h-5 min-w-5 place-items-center rounded-full px-1 text-[0.55rem] leading-none font-bold ${e.className??`bg-base-200 text-base-content`}`))});let o=a(`rue:slot:anchor`);return i(r,o),u(()=>{let t=e.text;p(()=>d(t,r,o))}),r}),oe=[{prop:`active`,description:`激活态，追加 btn-active`,type:`boolean`,defaultValue:`false`},{prop:`as`,description:`指定渲染标签，可选 button、a、div`,type:`'button' | 'a' | 'div'`,defaultValue:`'button'`},{prop:`block`,description:`整行按钮，宽度撑满容器`,type:`boolean`,defaultValue:`false`},{prop:`color`,description:`颜色层，danger 会映射到 error 按钮色`,type:`'default' | 'danger' | 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'`,defaultValue:`'default'`},{prop:`danger`,description:`危险态快捷开关，未设置 color 时等价于 color="danger"`,type:`boolean`,defaultValue:`false`},{prop:`disabled`,description:`禁用按钮；a 和 div 根节点也会输出禁用语义`,type:`boolean`,defaultValue:`false`},{prop:`href`,description:`传入后默认以 a 标签渲染`,type:`string`,defaultValue:`-`},{prop:`htmlType`,description:`原生 button 的 type`,type:`'button' | 'submit' | 'reset'`,defaultValue:`'button'`},{prop:`icon`,description:`图标节点`,type:`any`,defaultValue:`-`},{prop:`iconPlacement`,description:`图标位置`,type:`'start' | 'end'`,defaultValue:`'start'`},{prop:`loading`,description:`支持 boolean 或对象写法，可自定义加载图标`,type:`boolean | { delay?: number; icon?: any }`,defaultValue:`false`},{prop:`onClick`,description:`点击按钮时的回调；disabled 或 loading 时不会触发`,type:`(event: MouseEvent) => void`,defaultValue:`-`},{prop:`shape`,description:`按钮形状`,type:`'default' | 'square' | 'circle' | 'round'`,defaultValue:`'default'`},{prop:`size`,description:`尺寸，支持 xs 到 xl，以及 small / middle / large 别名`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'middle' | 'medium' | 'large'`,defaultValue:`-`},{prop:`target`,description:`链接目标窗口，仅 a 标签生效`,type:`string`,defaultValue:`-`},{prop:`type`,description:`视觉类型，直接替代旧的 variant 语义`,type:`'solid' | 'filled' | 'outlined' | 'dashed' | 'text' | 'link'`,defaultValue:`'solid'`},{prop:`wide`,description:`宽按钮，追加 btn-wide`,type:`boolean`,defaultValue:`false`}],se=[{prop:`as`,description:`指定按钮组根节点标签`,type:`any`,defaultValue:`'div'`},{prop:`size`,description:`统一同步组内按钮尺寸`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'middle' | 'medium' | 'large'`,defaultValue:`-`},{prop:`shape`,description:`统一同步组内按钮轮廓；circle 在分组场景下会映射为圆角组合样式`,type:`'default' | 'square' | 'circle' | 'round'`,defaultValue:`-`},{prop:`direction`,description:`按钮组排列方向`,type:`'horizontal' | 'vertical'`,defaultValue:`'horizontal'`},{prop:`block`,description:`让按钮组宽度撑满容器`,type:`boolean`,defaultValue:`false`},{prop:`className`,description:`自定义根节点类名`,type:`string`,defaultValue:`-`}],ce=()=>{let{tabTypes:_,tabResponsive:x,tabPalette:C,tabVariants:ce,tabDanger:le,tabIcons:ue,tabLoading:de,tabClick:fe,tabSizes:pe,tabGroup:me,tabStates:he,tabFormLink:ge,tabRecipes:_e,tabLogin:ve,submitCount:A,clickCount:j,lastAction:M}=g(`useSetup:0:0`,()=>l(()=>({tabTypes:g(`ref:1:0`,()=>f(`preview`)),tabResponsive:g(`ref:1:1`,()=>f(`preview`)),tabPalette:g(`ref:1:2`,()=>f(`preview`)),tabVariants:g(`ref:1:3`,()=>f(`preview`)),tabDanger:g(`ref:1:4`,()=>f(`preview`)),tabIcons:g(`ref:1:5`,()=>f(`preview`)),tabLoading:g(`ref:1:6`,()=>f(`preview`)),tabClick:g(`ref:1:7`,()=>f(`preview`)),tabSizes:g(`ref:1:8`,()=>f(`preview`)),tabGroup:g(`ref:1:9`,()=>f(`preview`)),tabStates:g(`ref:1:10`,()=>f(`preview`)),tabFormLink:g(`ref:1:11`,()=>f(`preview`)),tabRecipes:g(`ref:1:12`,()=>f(`preview`)),tabLogin:g(`ref:1:13`,()=>f(`preview`)),submitCount:g(`ref:1:14`,()=>f(0)),clickCount:g(`ref:1:15`,()=>f(0)),lastAction:g(`ref:1:16`,()=>f(`未触发`))})));return h(()=>{let l=e(),f=a(`rue:component:anchor`);return i(l,f),d(m(b,{children:h(()=>{let l=e(),f=n(`div`);i(l,f),t(f,`max-w-none prose prose-sm md:prose-base`);let h=n(`h1`);i(f,h),i(h,r(`Button 按钮`));let g=n(`p`);i(f,g),t(g,`text-sm mt-3 mb-3`);let b=n(`code`);i(g,b),i(b,r(`type`)),i(g,r(`负责视觉类型，`));let N=n(`code`);i(g,N),i(N,r(`color`)),i(g,r(`负责主题色，再用`));let P=n(`code`);i(g,P),i(P,r(`shape`)),i(g,r(`、`));let F=n(`code`);i(g,F),i(F,r(`icon`)),i(g,r(`、`));let I=n(`code`);i(g,I),i(I,r(`loading`)),i(g,r(`补足交互细节。`));let L=n(`div`);i(f,L),t(L,`text-sm flex flex-wrap gap-4`);let R=n(`a`);i(L,R),s(R,`href`,`https://daisyui.com/components/button/`),s(R,`target`,`_blank`),i(R,r(`查看 Button 静态样式`));let z=n(`h2`);i(f,z),i(z,r(`何时使用`));let B=n(`ul`);i(f,B);let V=n(`li`);i(B,V),i(V,r(`需要一个通用操作按钮，并希望颜色、类型、形状和状态能拆开表达。`));let H=n(`li`);i(B,H),i(H,r(`需要在表单里区分视觉类型`));let U=n(`code`);i(H,U),i(U,r(`type`)),i(H,r(`和原生提交类型`));let W=n(`code`);i(H,W),i(W,r(`htmlType`)),i(H,r(`。`));let ye=n(`li`);i(B,ye),i(ye,r(`需要统一处理图标按钮、加载按钮、链接按钮和整行按钮。`));let be=a(`rue:component:anchor`);i(f,be),u(()=>{let e=m(w,{title:`类型`,summary:`type 现在直接对应视觉类型。`,tab:_,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:[y(S,{children:`Solid`}),y(S,{type:`outlined`,children:`Outlined`}),y(S,{type:`dashed`,children:`Dashed`}),y(S,{type:`filled`,children:`Filled`}),y(S,{type:`text`,children:`Text`}),y(S,{type:`link`,children:`Link`})]})}),code:`<Button>Solid</Button>
        <Button type="outlined">Outlined</Button>
<Button type="dashed">Dashed</Button>
        <Button type="filled">Filled</Button>
<Button type="text">Text</Button>
<Button type="link">Link</Button>`});p(()=>d(e,f,be))});let xe=a(`rue:component:anchor`);i(f,xe),u(()=>{let e=m(w,{title:`响应式尺寸`,summary:`把原来的响应式按钮演示保留回来，统一改成 size + className 的方式。`,tab:x,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:y(S,{size:`xs`,className:`sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl`,children:`Responsive`})})}),code:`<Button size="xs" className="sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
  Responsive
</Button>`});p(()=>d(e,f,xe))});let Se=a(`rue:component:anchor`);i(f,Se),u(()=>{let e=m(w,{title:`颜色色板`,summary:`原来的颜色演示继续保留，但统一改成 color 语义。`,tab:C,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:ne.map(e=>y(S,{color:e.color,children:e.label},e.label))})}),code:`const tones = [
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
</div>`});p(()=>d(e,f,Se))});let Ce=a(`rue:component:anchor`);i(f,Ce),u(()=>{let e=m(w,{title:`风格矩阵`,summary:`把原来的 soft、outline、dash 演示融合成统一的 type 展示。`,tab:ce,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-5`,children:[re.map(e=>v(`div`,{children:[y(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:e.label}),y(`div`,{className:`flex flex-wrap gap-2`,children:ne.map(t=>y(S,{color:t.color,type:e.variant,children:t.label},`${e.label}-${t.label}`))})]},e.label)),v(`div`,{className:`rounded-box bg-white p-4 text-black`,children:[y(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] text-black/60`,children:`Neutral on light surface`}),v(`div`,{className:`flex flex-wrap gap-2`,children:[y(S,{color:`neutral`,type:`outlined`,children:`Outline`}),y(S,{color:`neutral`,type:`dashed`,children:`Dash`})]})]})]})}),code:`const tones = [
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
</div>`});p(()=>d(e,f,Ce))});let we=a(`rue:component:anchor`);i(f,we),u(()=>{let e=m(w,{title:`危险态`,summary:`danger 是快捷开关，也可以直接通过 color='danger' 控制。`,tab:le,preview:()=>y(`div`,{className:`card bg-neutral text-neutral-content shadow-sm`,children:v(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:[y(S,{color:`danger`,children:`Delete forever`}),y(S,{color:`danger`,type:`outlined`,children:`Remove access`}),y(S,{color:`danger`,type:`filled`,children:`Archive branch`}),y(S,{color:`danger`,type:`text`,children:`Clear cache`})]})}),code:`<Button color="danger">Delete forever</Button>
        <Button color="danger" type="outlined">Remove access</Button>
        <Button color="danger" type="filled">Archive branch</Button>
        <Button color="danger" type="text">Clear cache</Button>`});p(()=>d(e,f,we))});let Te=a(`rue:component:anchor`);i(f,Te),u(()=>{let e=m(w,{title:`图标与图标位置`,summary:`icon 和 iconPlacement 用来组织图标按钮与带文案按钮。`,tab:ue,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:[y(S,{color:`primary`,icon:y(ee,{}),children:`Create project`}),y(S,{color:`secondary`,type:`outlined`,icon:y(E,{}),iconPlacement:`end`,children:`Continue`}),y(S,{color:`accent`,shape:`circle`,icon:y(D,{}),"aria-label":`收藏`}),y(S,{color:`info`,shape:`square`,icon:y(k,{}),"aria-label":`高亮`})]})}),code:`<Button color="primary" icon={<span>+</span>}>
  Create project
</Button>

<Button color="secondary" type="outlined" icon={<span>→</span>} iconPlacement="end">
  Continue
</Button>

<Button color="accent" shape="circle" icon={<span>♥</span>} aria-label="收藏" />`});p(()=>d(e,f,Te))});let Ee=a(`rue:component:anchor`);i(f,Ee),u(()=>{let e=m(w,{title:`加载状态`,summary:`loading 会锁定按钮；对象写法可以替换默认加载图标。`,tab:de,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:[y(S,{color:`primary`,loading:!0,children:`Saving`}),y(S,{type:`outlined`,loading:{icon:y(`span`,{className:`loading loading-dots loading-xs`})},children:`Syncing`}),y(S,{color:`success`,icon:y(O,{}),children:`Ready to publish`})]})}),code:`<Button color="primary" loading>Saving</Button>

<Button
  type="outlined"
  loading={{ icon: <span className="loading loading-dots loading-xs" /> }}
>
  Syncing
</Button>`});p(()=>d(e,f,Ee))});let De=a(`rue:component:anchor`);i(f,De),u(()=>{let e=m(w,{title:`点击事件`,summary:`onClick 会透传原生点击事件，适合命令触发、埋点和分组按钮内交互。`,tab:fe,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-4`,children:[v(`div`,{className:`flex flex-wrap items-center gap-2`,children:[y(S,{color:`primary`,onClick:e=>{j.value+=1,M.value=`save:${e.currentTarget.tagName.toLowerCase()}`},children:`Trigger save`}),y(S,{type:`outlined`,onClick:e=>{j.value+=1,M.value=`preview:${e.currentTarget.tagName.toLowerCase()}`},children:`Preview draft`}),y(S,{href:`#button-api`,type:`link`,onClick:e=>{e.preventDefault(),j.value+=1,M.value=`link:${e.currentTarget.tagName.toLowerCase()}`},children:`Track jump`})]}),v(`div`,{className:`rounded-box bg-base-200/70 px-4 py-3 text-sm`,children:[v(`div`,{children:[`click count: `,j.value]}),v(`div`,{children:[`last action: `,M.value]})]})]})}),code:`const clickCount = ref(0)
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
</div>`});p(()=>d(e,f,De))});let Oe=a(`rue:component:anchor`);i(f,Oe),u(()=>{let e=m(w,{title:`尺寸与形状`,summary:`size 管尺寸，shape 管轮廓形态。`,tab:pe,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-5`,children:[v(`div`,{children:[y(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Sizes`}),v(`div`,{className:`flex flex-wrap items-center gap-2`,children:[y(S,{size:`small`,children:`Small`}),y(S,{children:`Default`}),y(S,{size:`large`,color:`primary`,children:`Large`}),y(S,{size:`xs`,type:`outlined`,children:`XS`}),y(S,{size:`xl`,color:`secondary`,children:`XL`})]})]}),v(`div`,{children:[y(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Shapes`}),v(`div`,{className:`flex flex-wrap items-center gap-2`,children:[y(S,{color:`primary`,shape:`round`,children:`Round action`}),y(S,{color:`secondary`,shape:`square`,icon:y(k,{}),"aria-label":`square`}),y(S,{color:`accent`,shape:`circle`,icon:y(D,{}),"aria-label":`circle`})]})]})]})}),code:`<Button size="small">Small</Button>
<Button>Default</Button>
<Button size="large" color="primary">Large</Button>
<Button size="xs" type="outlined">XS</Button>
<Button size="xl" color="secondary">XL</Button>

<Button color="primary" shape="round">Round action</Button>
<Button color="secondary" shape="square" icon={<span>⋯</span>} />
<Button color="accent" shape="circle" icon={<span>♥</span>} />`});p(()=>d(e,f,Oe))});let ke=a(`rue:component:anchor`);i(f,ke),u(()=>{let e=m(w,{title:`按钮组合`,summary:`提供与常见 ButtonGroup 类似的分组能力，这里统一用 Button.Group。`,tab:me,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-6`,children:[v(`div`,{children:[y(`div`,{className:`mb-3 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Basic`}),v(`div`,{className:`flex flex-wrap items-center gap-3`,children:[v(S.Group,{children:[y(S,{children:`Cancel`}),y(S,{color:`primary`,children:`Confirm`})]}),v(S.Group,{children:[y(S,{disabled:!0,children:`Yesterday`}),y(S,{disabled:!0,children:`Today`}),y(S,{disabled:!0,children:`Tomorrow`})]}),v(S.Group,{children:[y(S,{color:`primary`,children:`L`}),y(S,{children:`M`}),y(S,{children:`M`}),y(S,{type:`dashed`,children:`R`})]})]})]}),v(`div`,{children:[y(`div`,{className:`mb-3 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Icons`}),v(`div`,{className:`flex flex-wrap items-center gap-3`,children:[v(S.Group,{children:[y(S,{color:`primary`,icon:y(`span`,{"aria-hidden":`true`,children:`←`}),children:`Backward`}),y(S,{color:`primary`,icon:y(`span`,{"aria-hidden":`true`,children:`→`}),iconPlacement:`end`,children:`Forward`})]}),v(S.Group,{children:[y(S,{color:`primary`,icon:y(`span`,{"aria-hidden":`true`,children:`«`}),"aria-label":`skip backward`}),y(S,{color:`primary`,icon:y(`span`,{"aria-hidden":`true`,children:`»`}),"aria-label":`skip forward`})]}),v(S.Group,{children:[y(S,{icon:y(`span`,{"aria-hidden":`true`,children:`✦`}),"aria-label":`magic`}),y(S,{icon:y(`span`,{"aria-hidden":`true`,children:`☀`}),"aria-label":`sunny`}),y(S,{icon:y(`span`,{"aria-hidden":`true`,children:`✂`}),"aria-label":`crop`}),y(S,{icon:y(`span`,{"aria-hidden":`true`,children:`⛶`}),"aria-label":`filter`})]})]})]}),v(`div`,{children:[y(`div`,{className:`mb-3 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Circle`}),v(`div`,{className:`flex flex-wrap items-center gap-3`,children:[v(S.Group,{shape:`circle`,children:[y(S,{color:`primary`,children:`Backward`}),y(S,{color:`primary`,children:`Forward`})]}),v(S.Group,{shape:`circle`,children:[y(S,{color:`primary`,icon:y(`span`,{"aria-hidden":`true`,children:`«`}),"aria-label":`circle backward`}),y(S,{color:`primary`,icon:y(`span`,{"aria-hidden":`true`,children:`»`}),"aria-label":`circle forward`})]}),v(S.Group,{shape:`circle`,children:[y(S,{icon:y(`span`,{"aria-hidden":`true`,children:`✦`}),"aria-label":`circle magic`}),y(S,{icon:y(`span`,{"aria-hidden":`true`,children:`☀`}),"aria-label":`circle sunny`}),y(S,{icon:y(`span`,{"aria-hidden":`true`,children:`✂`}),"aria-label":`circle crop`}),y(S,{icon:y(`span`,{"aria-hidden":`true`,children:`⛶`}),"aria-label":`circle filter`})]})]})]}),v(`div`,{children:[y(`div`,{className:`mb-3 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Size`}),v(`div`,{className:`space-y-3`,children:[v(`div`,{className:`flex flex-wrap items-center gap-3`,children:[v(S.Group,{size:`large`,children:[y(S,{children:`Large`}),y(S,{children:`Large`})]}),v(S.Group,{children:[y(S,{children:`Default`}),y(S,{children:`Default`})]}),v(S.Group,{size:`small`,children:[y(S,{children:`Small`}),y(S,{children:`Small`})]})]}),v(`div`,{className:`flex flex-wrap items-center gap-3`,children:[v(S.Group,{size:`large`,shape:`circle`,children:[y(S,{children:`Large`}),y(S,{children:`Large`})]}),v(S.Group,{shape:`circle`,children:[y(S,{children:`Default`}),y(S,{children:`Default`})]}),v(S.Group,{size:`small`,shape:`circle`,children:[y(S,{children:`Small`}),y(S,{children:`Small`})]})]})]})]})]})}),code:`<div className="space-y-6">
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
</div>`});p(()=>d(e,f,ke))});let Ae=a(`rue:component:anchor`);i(f,Ae),u(()=>{let e=m(w,{title:`状态与布局`,summary:`把原来的 active、disabled、wide、block 示例也融合到当前页面。`,tab:he,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-5`,children:[v(`div`,{children:[y(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`States`}),v(`div`,{className:`flex flex-wrap gap-2`,children:[y(S,{active:!0,children:`Active`}),y(S,{color:`primary`,active:!0,children:`Primary active`}),y(S,{disabled:!0,children:`Disabled`}),y(S,{href:`#button-api`,disabled:!0,children:`Disabled link`})]})]}),v(`div`,{children:[y(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Layout`}),v(`div`,{className:`flex flex-col gap-2 sm:max-w-sm`,children:[y(S,{wide:!0,children:`Wide button`}),y(S,{block:!0,color:`primary`,children:`Block button`})]})]})]})}),code:`<div className="flex flex-wrap gap-2">
  <Button active>Active</Button>
  <Button color="primary" active>Primary active</Button>
  <Button disabled>Disabled</Button>
  <Button href="#button-api" disabled>Disabled link</Button>
</div>

<div className="flex flex-col gap-2 sm:max-w-sm">
  <Button wide>Wide button</Button>
  <Button block color="primary">Block button</Button>
</div>`});p(()=>d(e,f,Ae))});let je=a(`rue:component:anchor`);i(f,je),u(()=>{let e=m(w,{title:`根节点与表单行为`,summary:`默认渲染 button，同时保留链接根节点、div 根节点和表单行为示例。`,tab:ge,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-4`,children:[v(`div`,{className:`flex flex-wrap gap-2`,children:[y(S,{children:`Native button`}),y(S,{href:`#button-api`,children:`Anchor`}),y(S,{as:`div`,type:`text`,children:`Div button`})]}),v(`div`,{className:`text-sm opacity-70`,children:[`submit count: `,A.value]}),v(`form`,{className:`flex flex-wrap items-center gap-2`,onSubmit:e=>{e.preventDefault(),A.value+=1},children:[y(S,{color:`primary`,htmlType:`submit`,children:`Submit form`}),y(S,{type:`outlined`,htmlType:`reset`,children:`Reset form`}),y(S,{href:`#button-api`,type:`link`,children:`Jump to API`})]})]})}),code:`const submitCount = ref(0)

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
</form>`});p(()=>d(e,f,je))});let Me=a(`rue:component:anchor`);i(f,Me),u(()=>{let e=m(w,{title:`场景组合`,summary:`把图标、变体、布局属性组合在一起，可以很快搭出操作条。`,tab:_e,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-4`,children:[v(`div`,{className:`flex flex-wrap gap-2`,children:[y(S,{color:`primary`,icon:y(O,{}),children:`Publish`}),y(S,{type:`outlined`,icon:y(E,{}),iconPlacement:`end`,children:`Preview`}),y(S,{type:`text`,icon:y(k,{}),children:`Save draft`})]}),v(`div`,{className:`grid gap-2 md:grid-cols-2`,children:[y(S,{block:!0,className:`justify-start bg-white text-base-content border-base-300`,icon:y(te,{}),children:`Continue with Email`}),y(S,{block:!0,color:`primary`,className:`justify-start`,icon:y(k,{}),children:`Continue with Rue ID`})]})]})}),code:`<div className="flex flex-wrap gap-2">
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
</div>`});p(()=>d(e,f,Me))});let Ne=a(`rue:component:anchor`);i(f,Ne),u(()=>{let e=m(w,{title:`登录按钮`,summary:`把原来的 provider 登录按钮演示融合回来，统一改成 icon + block + className 的新 API 写法。`,tab:ve,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body`,children:y(`div`,{className:`grid gap-2 md:grid-cols-2`,children:ie.map(e=>y(S,{block:!0,className:`justify-start ${e.className}`,icon:y(ae,{text:e.icon,className:e.iconClassName}),children:e.label},e.label))})})}),code:`const loginButtons = [
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
</div>`});p(()=>d(e,f,Ne))});let G=n(`h2`);i(f,G),s(G,`id`,`button-api`),i(G,r(`API`));let Pe=n(`p`);i(f,Pe),i(Pe,r(`当前页面展示的是 Button 与 Button.Group 的完整可用 API。`));let K=n(`p`);i(f,K),i(K,r(`推荐使用顺序：`));let Fe=n(`code`);i(K,Fe),i(Fe,r(`type`)),i(K,r(`->`));let Ie=n(`code`);i(K,Ie),i(Ie,r(`color`)),i(K,r(`->`));let Le=n(`code`);i(K,Le),i(Le,r(`shape`)),i(K,r(`->`));let Re=o(K);i(K,Re),c(Re,` `);let ze=n(`code`);i(K,ze),i(ze,r(`size`)),i(K,r(`->`));let Be=n(`code`);i(K,Be),i(Be,r(`loading`)),i(K,r(`->`));let Ve=n(`code`);i(K,Ve),i(Ve,r(`disabled`)),i(K,r(`。`));let He=n(`h3`);i(f,He),i(He,r(`Button`));let Ue=a(`rue:component:anchor`);i(f,Ue),u(()=>{let e=m(T,{rows:oe});p(()=>d(e,f,Ue))});let We=n(`h3`);i(f,We),i(We,r(`Button.Group`));let Ge=a(`rue:component:anchor`);i(f,Ge),u(()=>{let e=m(T,{rows:se});p(()=>d(e,f,Ge))});let Ke=n(`h2`);i(f,Ke),i(Ke,r(`FAQ`));let qe=n(`h3`);i(f,qe),i(qe,r(`为什么有 type 还需要 htmlType？`));let q=n(`p`);i(f,q);let Je=n(`code`);i(q,Je),i(Je,r(`type`)),i(q,r(`负责按钮视觉类型，`));let Ye=n(`code`);i(q,Ye),i(Ye,r(`htmlType`)),i(q,r(`负责原生 button 行为。视觉和提交语义拆开之后， 表单场景会更直接。`));let Xe=n(`h3`);i(f,Xe),i(Xe,r(`type 和 color 应该怎么分工？`));let J=n(`p`);i(f,J);let Ze=n(`code`);i(J,Ze),i(Ze,r(`type`)),i(J,r(`负责视觉类型，比如`));let Qe=n(`code`);i(J,Qe),i(Qe,r(`outlined`)),i(J,r(`、`));let $e=n(`code`);i(J,$e),i($e,r(`filled`)),i(J,r(`、`));let et=n(`code`);i(J,et),i(et,r(`text`)),i(J,r(`。`));let tt=n(`code`);i(J,tt),i(tt,r(`color`)),i(J,r(`负责主题色，比如`));let nt=n(`code`);i(J,nt),i(nt,r(`primary`)),i(J,r(`、`));let rt=n(`code`);i(J,rt),i(rt,r(`secondary`)),i(J,r(`、`));let it=n(`code`);i(J,it),i(it,r(`danger`)),i(J,r(`。`));let Y=n(`p`);i(f,Y),i(Y,r(`大多数场景可以先定颜色， 再根据密度和层级选择`));let X=n(`code`);i(Y,X),i(X,r(`solid`)),i(Y,r(`、`));let at=n(`code`);i(Y,at),i(at,r(`outlined`)),i(Y,r(`、`));let ot=n(`code`);i(Y,ot),i(ot,r(`filled`)),i(Y,r(`或`));let st=n(`code`);i(Y,st),i(st,r(`text`)),i(Y,r(`。`));let ct=n(`h3`);i(f,ct),i(ct,r(`loading 对象里的 delay 会生效吗？`));let Z=n(`p`);i(f,Z),i(Z,r(`当前版本已经支持`));let lt=n(`code`);i(Z,lt),i(lt,r(`loading`)),i(Z,r(`的对象写法和自定义`));let ut=n(`code`);i(Z,ut),i(ut,r(`icon`)),i(Z,r(`。`));let dt=n(`code`);i(Z,dt),i(dt,r(`delay`)),i(Z,r(`字段已保留在配置结构里，后续如果补充延迟显示策略，可以直接在现有接口上继续扩展。`));let ft=n(`h3`);i(f,ft),i(ft,r(`Button.Group 会覆盖子按钮哪些属性？`));let Q=n(`p`);i(f,Q),i(Q,r(`组级只会统一同步`));let pt=n(`code`);i(Q,pt),i(pt,r(`size`)),i(Q,r(`和`));let mt=n(`code`);i(Q,mt),i(mt,r(`shape`)),i(Q,r(`，方便在一组按钮上集中控制尺寸和轮廓。 每个子按钮自己的`));let ht=n(`code`);i(Q,ht),i(ht,r(`color`)),i(Q,r(`、`));let gt=n(`code`);i(Q,gt),i(gt,r(`type`)),i(Q,r(`、`));let _t=n(`code`);i(Q,_t),i(_t,r(`disabled`)),i(Q,r(`、`));let vt=n(`code`);i(Q,vt),i(vt,r(`onClick`)),i(Q,r(`仍然在各自的`));let $=n(`code`);return i(Q,$),i($,r(`Button`)),i(Q,r(`上配置。`)),l})}),l,f),l})};export{ce as default};