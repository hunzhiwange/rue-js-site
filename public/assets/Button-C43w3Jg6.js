import{F as e,I as t,K as n,L as r,N as i,Q as a,R as o,W as s,d as c,dt as l,ht as u,l as d,st as f,t as p,vt as m,z as h}from"./vapor-runtime-BuwLbCGk.js";import{a as g,n as _}from"./vapor-helpers-vapor-Bly5xJie.js";import{n as v,t as y}from"./src-BQwLQD8R.js";import{n as b}from"./SidebarPlaygroundDesign-SQXYHI-q.js";import{t as x}from"./Code-DQxnq0in.js";import{t as S}from"./button-BlewusST.js";import{t as C}from"./tabs-DqfJzZfa.js";var w=a=>c(s=>{let u=r(`div`,s);n(u,`component-preview not-prose text-base-content my-6 lg:my-12`);let f=r(`div`,u);i(u,f),n(f,`flex flex-wrap items-start justify-between gap-3`);let h=r(`div`,f);i(f,h);let g=r(`h2`,h);i(h,g),n(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(g,o(`# `));let _=e(`rue:slot:anchor`);i(g,_),m(()=>{let e=a.title;l(()=>d(e,g,_))});let v=e(`rue:slot:anchor`);i(h,v),m(()=>{let o=a.summary?c(()=>{let o=t(),s=r(`p`,o);i(o,s),n(s,`m-0 text-sm opacity-70`);let c=e(`rue:slot:anchor`);return i(s,c),m(()=>{let e=a.summary;l(()=>d(e,s,c))}),o}):``;l(()=>d(o,h,v))});let y=e(`rue:component:anchor`);i(u,y),m(()=>{let e=p(C,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:a.tab.value,onChange:e=>a.tab.value=e,className:`mb-3 mt-4`});l(()=>d(e,u,y))});let b=e(`rue:slot:anchor`);return i(u,b),m(()=>{let n=a.tab.value===`preview`?a.preview():c(()=>{let n=t(),r=e(`rue:component:anchor`);return i(n,r),m(()=>{let e=p(x,{className:`mt-2`,lang:`tsx`,code:a.code});l(()=>d(e,n,r))}),n});l(()=>d(n,u,b))}),u}),T=a=>c(u=>{let f=r(`div`,u);n(f,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let p=r(`table`,f);i(f,p),n(p,`table table-zebra`);let h=r(`thead`,p);i(p,h);let g=r(`tr`,h);i(h,g);let v=r(`th`,g);i(g,v),i(v,o(`属性`));let y=r(`th`,g);i(g,y),i(y,o(`说明`));let b=r(`th`,g);i(g,b),i(b,o(`类型`));let x=r(`th`,g);i(g,x),i(x,o(`默认值`));let S=r(`tbody`,p);i(p,S);let C=e(`rue:list:start`),w=e(`rue:list:end`);i(S,C),i(S,w);let T=new Map;return m(()=>{T=_({items:a.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,a,o,u,f)=>{d(c(()=>{let a=t(),o=r(`tr`,a);i(a,o),m(()=>{s(o,`key`,String(n.prop))});let c=r(`td`,o);i(o,c);let u=r(`code`,c);i(c,u);let f=e(`rue:slot:anchor`);i(u,f),m(()=>{let e=n.prop;l(()=>d(e,u,f))});let p=r(`td`,o);i(o,p);let h=e(`rue:slot:anchor`);i(p,h),m(()=>{let e=n.description;l(()=>d(e,p,h))});let g=r(`td`,o);i(o,g);let _=r(`code`,g);i(g,_);let v=e(`rue:slot:anchor`);i(_,v),m(()=>{let e=n.type;l(()=>d(e,_,v))});let y=r(`td`,o);i(o,y);let b=r(`code`,y);i(y,b);let x=e(`rue:slot:anchor`);return i(b,x),m(()=>{let e=n.defaultValue;l(()=>d(e,b,x))}),a}),a,o)}})}),f}),ee=()=>c(e=>{let t=r(`svg`,e);s(t,`xmlns`,`http://www.w3.org/2000/svg`),s(t,`viewBox`,`0 0 24 24`),s(t,`fill`,`none`),s(t,`stroke`,`currentColor`),s(t,`strokeWidth`,`2`),n(t,`size-[1.05em]`);let a=r(`path`,t);return i(t,a),s(a,`strokeLinecap`,`round`),s(a,`strokeLinejoin`,`round`),s(a,`d`,`M12 5v14M5 12h14`),t}),E=()=>c(e=>{let t=r(`svg`,e);s(t,`xmlns`,`http://www.w3.org/2000/svg`),s(t,`viewBox`,`0 0 24 24`),s(t,`fill`,`none`),s(t,`stroke`,`currentColor`),s(t,`strokeWidth`,`2`),n(t,`size-[1.05em]`);let a=r(`path`,t);i(t,a),s(a,`strokeLinecap`,`round`),s(a,`strokeLinejoin`,`round`),s(a,`d`,`M5 12h14`);let o=r(`path`,t);return i(t,o),s(o,`strokeLinecap`,`round`),s(o,`strokeLinejoin`,`round`),s(o,`d`,`m13 6 6 6-6 6`),t}),D=()=>c(e=>{let t=r(`svg`,e);s(t,`xmlns`,`http://www.w3.org/2000/svg`),s(t,`viewBox`,`0 0 24 24`),s(t,`fill`,`none`),s(t,`stroke`,`currentColor`),s(t,`strokeWidth`,`2`),n(t,`size-[1.05em]`);let a=r(`path`,t);return i(t,a),s(a,`strokeLinecap`,`round`),s(a,`strokeLinejoin`,`round`),s(a,`d`,`M12 20s-7-4.35-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 10c0 5.65-7 10-7 10Z`),t}),O=()=>c(e=>{let t=r(`svg`,e);s(t,`xmlns`,`http://www.w3.org/2000/svg`),s(t,`viewBox`,`0 0 24 24`),s(t,`fill`,`none`),s(t,`stroke`,`currentColor`),s(t,`strokeWidth`,`2`),n(t,`size-[1.05em]`);let a=r(`path`,t);i(t,a),s(a,`strokeLinecap`,`round`),s(a,`strokeLinejoin`,`round`),s(a,`d`,`M4.5 19.5 9 15l6 6`);let o=r(`path`,t);i(t,o),s(o,`strokeLinecap`,`round`),s(o,`strokeLinejoin`,`round`),s(o,`d`,`M15 9c0-3.5 2.5-6 6-6 0 3.5-2.5 6-6 6Z`);let c=r(`path`,t);i(t,c),s(c,`strokeLinecap`,`round`),s(c,`strokeLinejoin`,`round`),s(c,`d`,`M15 9 9 15`);let l=r(`circle`,t);return i(t,l),s(l,`cx`,`14`),s(l,`cy`,`10`),s(l,`r`,`1`),s(l,`fill`,`currentColor`),s(l,`stroke`,`none`),t}),te=()=>c(e=>{let t=r(`svg`,e);s(t,`xmlns`,`http://www.w3.org/2000/svg`),s(t,`viewBox`,`0 0 24 24`),s(t,`fill`,`none`),s(t,`stroke`,`currentColor`),s(t,`strokeWidth`,`2`),n(t,`size-[1.05em]`);let a=r(`rect`,t);i(t,a),s(a,`x`,`3`),s(a,`y`,`5`),s(a,`width`,`18`),s(a,`height`,`14`),s(a,`rx`,`2`);let o=r(`path`,t);return i(t,o),s(o,`strokeLinecap`,`round`),s(o,`strokeLinejoin`,`round`),s(o,`d`,`m4 7 8 6 8-6`),t}),k=()=>c(e=>{let t=r(`svg`,e);s(t,`xmlns`,`http://www.w3.org/2000/svg`),s(t,`viewBox`,`0 0 24 24`),s(t,`fill`,`none`),s(t,`stroke`,`currentColor`),s(t,`strokeWidth`,`2`),n(t,`size-[1.05em]`);let a=r(`path`,t);i(t,a),s(a,`strokeLinecap`,`round`),s(a,`strokeLinejoin`,`round`),s(a,`d`,`m12 3 1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3Z`);let o=r(`path`,t);return i(t,o),s(o,`strokeLinecap`,`round`),s(o,`strokeLinejoin`,`round`),s(o,`d`,`M5 18h.01M19 18h.01M12 21h.01`),t}),A=[{label:`Default`},{label:`Neutral`,color:`neutral`},{label:`Primary`,color:`primary`},{label:`Secondary`,color:`secondary`},{label:`Accent`,color:`accent`},{label:`Info`,color:`info`},{label:`Success`,color:`success`},{label:`Warning`,color:`warning`},{label:`Error`,color:`error`}],ne=[{label:`Filled`,variant:`filled`},{label:`Outlined`,variant:`outlined`},{label:`Dashed`,variant:`dashed`}],re=[{label:`Login with Email`,icon:`@`,className:`bg-white text-base-content border-base-300`,iconClassName:`bg-base-200 text-base-content`},{label:`Login with GitHub`,icon:`GH`,className:`bg-neutral text-neutral-content border-neutral`,iconClassName:`bg-white/15 text-white`},{label:`Login with Google`,icon:`G`,className:`bg-white text-base-content border-base-300`,iconClassName:`bg-red-100 text-red-700`},{label:`Login with Facebook`,icon:`f`,className:`bg-[#1A77F2] text-white border-[#005fd8]`,iconClassName:`bg-white/15 text-white`},{label:`Login with X`,icon:`X`,className:`bg-black text-white border-black`,iconClassName:`bg-white/15 text-white`},{label:`Login with Apple`,icon:`A`,className:`bg-black text-white border-black`,iconClassName:`bg-white/15 text-white`},{label:`Login with Slack`,icon:`S`,className:`bg-[#622069] text-white border-[#591660]`,iconClassName:`bg-white/15 text-white`},{label:`Login with Microsoft`,icon:`M`,className:`bg-[#2F2F2F] text-white border-black`,iconClassName:`bg-white/15 text-white`},{label:`Login with LINE`,icon:`L`,className:`bg-[#03C755] text-white border-[#00b544]`,iconClassName:`bg-white/15 text-white`},{label:`Login with MetaMask`,icon:`MM`,className:`bg-white text-base-content border-base-300`,iconClassName:`bg-orange-100 text-orange-700`}],ie=t=>c(a=>{let o=r(`span`,a);m(()=>{n(o,String(`inline-grid h-5 min-w-5 place-items-center rounded-full px-1 text-[0.55rem] leading-none font-bold ${t.className??`bg-base-200 text-base-content`}`))});let s=e(`rue:slot:anchor`);return i(o,s),m(()=>{let e=t.text;l(()=>d(e,o,s))}),o}),ae=[{prop:`active`,description:`激活态，追加 btn-active`,type:`boolean`,defaultValue:`false`},{prop:`as`,description:`指定渲染标签，可选 button、a、div`,type:`'button' | 'a' | 'div'`,defaultValue:`'button'`},{prop:`block`,description:`整行按钮，宽度撑满容器`,type:`boolean`,defaultValue:`false`},{prop:`color`,description:`颜色层，danger 会映射到 error 按钮色`,type:`'default' | 'danger' | 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'`,defaultValue:`'default'`},{prop:`danger`,description:`危险态快捷开关，未设置 color 时等价于 color="danger"`,type:`boolean`,defaultValue:`false`},{prop:`disabled`,description:`禁用按钮；a 和 div 根节点也会输出禁用语义`,type:`boolean`,defaultValue:`false`},{prop:`href`,description:`传入后默认以 a 标签渲染`,type:`string`,defaultValue:`-`},{prop:`htmlType`,description:`原生 button 的 type`,type:`'button' | 'submit' | 'reset'`,defaultValue:`'button'`},{prop:`icon`,description:`图标节点`,type:`any`,defaultValue:`-`},{prop:`iconPlacement`,description:`图标位置`,type:`'start' | 'end'`,defaultValue:`'start'`},{prop:`loading`,description:`支持 boolean 或对象写法，可自定义加载图标`,type:`boolean | { delay?: number; icon?: any }`,defaultValue:`false`},{prop:`onClick`,description:`点击按钮时的回调；disabled 或 loading 时不会触发`,type:`(event: MouseEvent) => void`,defaultValue:`-`},{prop:`shape`,description:`按钮形状`,type:`'default' | 'square' | 'circle' | 'round'`,defaultValue:`'default'`},{prop:`size`,description:`尺寸，支持 xs 到 xl，以及 small / middle / large 别名`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'middle' | 'medium' | 'large'`,defaultValue:`-`},{prop:`target`,description:`链接目标窗口，仅 a 标签生效`,type:`string`,defaultValue:`-`},{prop:`type`,description:`视觉类型，直接替代旧的 variant 语义`,type:`'solid' | 'filled' | 'outlined' | 'dashed' | 'text' | 'link'`,defaultValue:`'solid'`},{prop:`wide`,description:`宽按钮，追加 btn-wide`,type:`boolean`,defaultValue:`false`}],oe=[{prop:`as`,description:`指定按钮组根节点标签`,type:`any`,defaultValue:`'div'`},{prop:`size`,description:`统一同步组内按钮尺寸`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'middle' | 'medium' | 'large'`,defaultValue:`-`},{prop:`shape`,description:`统一同步组内按钮轮廓；circle 在分组场景下会映射为圆角组合样式`,type:`'default' | 'square' | 'circle' | 'round'`,defaultValue:`-`},{prop:`direction`,description:`按钮组排列方向`,type:`'horizontal' | 'vertical'`,defaultValue:`'horizontal'`},{prop:`block`,description:`让按钮组宽度撑满容器`,type:`boolean`,defaultValue:`false`},{prop:`className`,description:`自定义根节点类名`,type:`string`,defaultValue:`-`}],se=()=>{let{tabTypes:_,tabResponsive:x,tabPalette:C,tabVariants:se,tabDanger:ce,tabIcons:le,tabLoading:ue,tabClick:de,tabSizes:fe,tabGroup:pe,tabStates:me,tabFormLink:he,tabRecipes:ge,tabLogin:_e,submitCount:j,clickCount:M,lastAction:N}=g(`useSetup:0:0`,()=>u(()=>({tabTypes:g(`ref:1:0`,()=>f(`preview`)),tabResponsive:g(`ref:1:1`,()=>f(`preview`)),tabPalette:g(`ref:1:2`,()=>f(`preview`)),tabVariants:g(`ref:1:3`,()=>f(`preview`)),tabDanger:g(`ref:1:4`,()=>f(`preview`)),tabIcons:g(`ref:1:5`,()=>f(`preview`)),tabLoading:g(`ref:1:6`,()=>f(`preview`)),tabClick:g(`ref:1:7`,()=>f(`preview`)),tabSizes:g(`ref:1:8`,()=>f(`preview`)),tabGroup:g(`ref:1:9`,()=>f(`preview`)),tabStates:g(`ref:1:10`,()=>f(`preview`)),tabFormLink:g(`ref:1:11`,()=>f(`preview`)),tabRecipes:g(`ref:1:12`,()=>f(`preview`)),tabLogin:g(`ref:1:13`,()=>f(`preview`)),submitCount:g(`ref:1:14`,()=>f(0)),clickCount:g(`ref:1:15`,()=>f(0)),lastAction:g(`ref:1:16`,()=>f(`未触发`))})));return c(u=>{let f=t(),g=e(`rue:component:anchor`);return i(f,g),d(p(b,{children:c(()=>{let c=t(),u=r(`div`,c);i(c,u),n(u,`max-w-none prose prose-sm md:prose-base`);let f=r(`h1`,u);i(u,f),i(f,o(`Button 按钮`));let g=r(`p`,u);i(u,g),n(g,`text-sm mt-3 mb-3`);let b=r(`code`,g);i(g,b),i(b,o(`type`)),i(g,o(`负责视觉类型，`));let P=r(`code`,g);i(g,P),i(P,o(`color`)),i(g,o(`负责主题色，再用`));let F=r(`code`,g);i(g,F),i(F,o(`shape`)),i(g,o(`、`));let I=r(`code`,g);i(g,I),i(I,o(`icon`)),i(g,o(`、`));let L=r(`code`,g);i(g,L),i(L,o(`loading`)),i(g,o(`补足交互细节。`));let R=r(`div`,u);i(u,R),n(R,`text-sm flex flex-wrap gap-4`);let z=r(`a`,R);i(R,z),s(z,`href`,`https://daisyui.com/components/button/`),s(z,`target`,`_blank`),i(z,o(`查看 Button 静态样式`));let B=r(`h2`,u);i(u,B),i(B,o(`何时使用`));let V=r(`ul`,u);i(u,V);let H=r(`li`,V);i(V,H),i(H,o(`需要一个通用操作按钮，并希望颜色、类型、形状和状态能拆开表达。`));let U=r(`li`,V);i(V,U),i(U,o(`需要在表单里区分视觉类型`));let W=r(`code`,U);i(U,W),i(W,o(`type`)),i(U,o(`和原生提交类型`));let ve=r(`code`,U);i(U,ve),i(ve,o(`htmlType`)),i(U,o(`。`));let ye=r(`li`,V);i(V,ye),i(ye,o(`需要统一处理图标按钮、加载按钮、链接按钮和整行按钮。`));let be=e(`rue:component:anchor`);i(u,be),m(()=>{let e=p(w,{title:`类型`,summary:`type 现在直接对应视觉类型。`,tab:_,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:[y(S,{children:`Solid`}),y(S,{type:`outlined`,children:`Outlined`}),y(S,{type:`dashed`,children:`Dashed`}),y(S,{type:`filled`,children:`Filled`}),y(S,{type:`text`,children:`Text`}),y(S,{type:`link`,children:`Link`})]})}),code:`<Button>Solid</Button>
        <Button type="outlined">Outlined</Button>
<Button type="dashed">Dashed</Button>
        <Button type="filled">Filled</Button>
<Button type="text">Text</Button>
<Button type="link">Link</Button>`});l(()=>d(e,u,be))});let xe=e(`rue:component:anchor`);i(u,xe),m(()=>{let e=p(w,{title:`响应式尺寸`,summary:`把原来的响应式按钮演示保留回来，统一改成 size + className 的方式。`,tab:x,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:y(S,{size:`xs`,className:`sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl`,children:`Responsive`})})}),code:`<Button size="xs" className="sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
  Responsive
</Button>`});l(()=>d(e,u,xe))});let Se=e(`rue:component:anchor`);i(u,Se),m(()=>{let e=p(w,{title:`颜色色板`,summary:`原来的颜色演示继续保留，但统一改成 color 语义。`,tab:C,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:A.map(e=>y(S,{color:e.color,children:e.label},e.label))})}),code:`const tones = [
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
</div>`});l(()=>d(e,u,Se))});let Ce=e(`rue:component:anchor`);i(u,Ce),m(()=>{let e=p(w,{title:`风格矩阵`,summary:`把原来的 soft、outline、dash 演示融合成统一的 type 展示。`,tab:se,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-5`,children:[ne.map(e=>v(`div`,{children:[y(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:e.label}),y(`div`,{className:`flex flex-wrap gap-2`,children:A.map(t=>y(S,{color:t.color,type:e.variant,children:t.label},`${e.label}-${t.label}`))})]},e.label)),v(`div`,{className:`rounded-box bg-white p-4 text-black`,children:[y(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] text-black/60`,children:`Neutral on light surface`}),v(`div`,{className:`flex flex-wrap gap-2`,children:[y(S,{color:`neutral`,type:`outlined`,children:`Outline`}),y(S,{color:`neutral`,type:`dashed`,children:`Dash`})]})]})]})}),code:`const tones = [
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
</div>`});l(()=>d(e,u,Ce))});let we=e(`rue:component:anchor`);i(u,we),m(()=>{let e=p(w,{title:`危险态`,summary:`danger 是快捷开关，也可以直接通过 color='danger' 控制。`,tab:ce,preview:()=>y(`div`,{className:`card bg-neutral text-neutral-content shadow-sm`,children:v(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:[y(S,{color:`danger`,children:`Delete forever`}),y(S,{color:`danger`,type:`outlined`,children:`Remove access`}),y(S,{color:`danger`,type:`filled`,children:`Archive branch`}),y(S,{color:`danger`,type:`text`,children:`Clear cache`})]})}),code:`<Button color="danger">Delete forever</Button>
        <Button color="danger" type="outlined">Remove access</Button>
        <Button color="danger" type="filled">Archive branch</Button>
        <Button color="danger" type="text">Clear cache</Button>`});l(()=>d(e,u,we))});let Te=e(`rue:component:anchor`);i(u,Te),m(()=>{let e=p(w,{title:`图标与图标位置`,summary:`icon 和 iconPlacement 用来组织图标按钮与带文案按钮。`,tab:le,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:[y(S,{color:`primary`,icon:y(ee,{}),children:`Create project`}),y(S,{color:`secondary`,type:`outlined`,icon:y(E,{}),iconPlacement:`end`,children:`Continue`}),y(S,{color:`accent`,shape:`circle`,icon:y(D,{}),"aria-label":`收藏`}),y(S,{color:`info`,shape:`square`,icon:y(k,{}),"aria-label":`高亮`})]})}),code:`<Button color="primary" icon={<span>+</span>}>
  Create project
</Button>

<Button color="secondary" type="outlined" icon={<span>→</span>} iconPlacement="end">
  Continue
</Button>

<Button color="accent" shape="circle" icon={<span>♥</span>} aria-label="收藏" />`});l(()=>d(e,u,Te))});let Ee=e(`rue:component:anchor`);i(u,Ee),m(()=>{let e=p(w,{title:`加载状态`,summary:`loading 会锁定按钮；对象写法可以替换默认加载图标。`,tab:ue,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body flex flex-row flex-wrap items-center gap-2`,children:[y(S,{color:`primary`,loading:!0,children:`Saving`}),y(S,{type:`outlined`,loading:{icon:y(`span`,{className:`loading loading-dots loading-xs`})},children:`Syncing`}),y(S,{color:`success`,icon:y(O,{}),children:`Ready to publish`})]})}),code:`<Button color="primary" loading>Saving</Button>

<Button
  type="outlined"
  loading={{ icon: <span className="loading loading-dots loading-xs" /> }}
>
  Syncing
</Button>`});l(()=>d(e,u,Ee))});let De=e(`rue:component:anchor`);i(u,De),m(()=>{let e=p(w,{title:`点击事件`,summary:`onClick 会透传原生点击事件，适合命令触发、埋点和分组按钮内交互。`,tab:de,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-4`,children:[v(`div`,{className:`flex flex-wrap items-center gap-2`,children:[y(S,{color:`primary`,onClick:e=>{M.value+=1,N.value=`save:${e.currentTarget.tagName.toLowerCase()}`},children:`Trigger save`}),y(S,{type:`outlined`,onClick:e=>{M.value+=1,N.value=`preview:${e.currentTarget.tagName.toLowerCase()}`},children:`Preview draft`}),y(S,{href:`#button-api`,type:`link`,onClick:e=>{e.preventDefault(),M.value+=1,N.value=`link:${e.currentTarget.tagName.toLowerCase()}`},children:`Track jump`})]}),v(`div`,{className:`rounded-box bg-base-200/70 px-4 py-3 text-sm`,children:[v(`div`,{children:[`click count: `,M.value]}),v(`div`,{children:[`last action: `,N.value]})]})]})}),code:`const clickCount = ref(0)
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
</div>`});l(()=>d(e,u,De))});let Oe=e(`rue:component:anchor`);i(u,Oe),m(()=>{let e=p(w,{title:`尺寸与形状`,summary:`size 管尺寸，shape 管轮廓形态。`,tab:fe,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-5`,children:[v(`div`,{children:[y(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Sizes`}),v(`div`,{className:`flex flex-wrap items-center gap-2`,children:[y(S,{size:`small`,children:`Small`}),y(S,{children:`Default`}),y(S,{size:`large`,color:`primary`,children:`Large`}),y(S,{size:`xs`,type:`outlined`,children:`XS`}),y(S,{size:`xl`,color:`secondary`,children:`XL`})]})]}),v(`div`,{children:[y(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Shapes`}),v(`div`,{className:`flex flex-wrap items-center gap-2`,children:[y(S,{color:`primary`,shape:`round`,children:`Round action`}),y(S,{color:`secondary`,shape:`square`,icon:y(k,{}),"aria-label":`square`}),y(S,{color:`accent`,shape:`circle`,icon:y(D,{}),"aria-label":`circle`})]})]})]})}),code:`<Button size="small">Small</Button>
<Button>Default</Button>
<Button size="large" color="primary">Large</Button>
<Button size="xs" type="outlined">XS</Button>
<Button size="xl" color="secondary">XL</Button>

<Button color="primary" shape="round">Round action</Button>
<Button color="secondary" shape="square" icon={<span>⋯</span>} />
<Button color="accent" shape="circle" icon={<span>♥</span>} />`});l(()=>d(e,u,Oe))});let ke=e(`rue:component:anchor`);i(u,ke),m(()=>{let e=p(w,{title:`按钮组合`,summary:`提供与常见 ButtonGroup 类似的分组能力，这里统一用 Button.Group。`,tab:pe,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-6`,children:[v(`div`,{children:[y(`div`,{className:`mb-3 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Basic`}),v(`div`,{className:`flex flex-wrap items-center gap-3`,children:[v(S.Group,{children:[y(S,{children:`Cancel`}),y(S,{color:`primary`,children:`Confirm`})]}),v(S.Group,{children:[y(S,{disabled:!0,children:`Yesterday`}),y(S,{disabled:!0,children:`Today`}),y(S,{disabled:!0,children:`Tomorrow`})]}),v(S.Group,{children:[y(S,{color:`primary`,children:`L`}),y(S,{children:`M`}),y(S,{children:`M`}),y(S,{type:`dashed`,children:`R`})]})]})]}),v(`div`,{children:[y(`div`,{className:`mb-3 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Icons`}),v(`div`,{className:`flex flex-wrap items-center gap-3`,children:[v(S.Group,{children:[y(S,{color:`primary`,icon:y(`span`,{"aria-hidden":`true`,children:`←`}),children:`Backward`}),y(S,{color:`primary`,icon:y(`span`,{"aria-hidden":`true`,children:`→`}),iconPlacement:`end`,children:`Forward`})]}),v(S.Group,{children:[y(S,{color:`primary`,icon:y(`span`,{"aria-hidden":`true`,children:`«`}),"aria-label":`skip backward`}),y(S,{color:`primary`,icon:y(`span`,{"aria-hidden":`true`,children:`»`}),"aria-label":`skip forward`})]}),v(S.Group,{children:[y(S,{icon:y(`span`,{"aria-hidden":`true`,children:`✦`}),"aria-label":`magic`}),y(S,{icon:y(`span`,{"aria-hidden":`true`,children:`☀`}),"aria-label":`sunny`}),y(S,{icon:y(`span`,{"aria-hidden":`true`,children:`✂`}),"aria-label":`crop`}),y(S,{icon:y(`span`,{"aria-hidden":`true`,children:`⛶`}),"aria-label":`filter`})]})]})]}),v(`div`,{children:[y(`div`,{className:`mb-3 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Circle`}),v(`div`,{className:`flex flex-wrap items-center gap-3`,children:[v(S.Group,{shape:`circle`,children:[y(S,{color:`primary`,children:`Backward`}),y(S,{color:`primary`,children:`Forward`})]}),v(S.Group,{shape:`circle`,children:[y(S,{color:`primary`,icon:y(`span`,{"aria-hidden":`true`,children:`«`}),"aria-label":`circle backward`}),y(S,{color:`primary`,icon:y(`span`,{"aria-hidden":`true`,children:`»`}),"aria-label":`circle forward`})]}),v(S.Group,{shape:`circle`,children:[y(S,{icon:y(`span`,{"aria-hidden":`true`,children:`✦`}),"aria-label":`circle magic`}),y(S,{icon:y(`span`,{"aria-hidden":`true`,children:`☀`}),"aria-label":`circle sunny`}),y(S,{icon:y(`span`,{"aria-hidden":`true`,children:`✂`}),"aria-label":`circle crop`}),y(S,{icon:y(`span`,{"aria-hidden":`true`,children:`⛶`}),"aria-label":`circle filter`})]})]})]}),v(`div`,{children:[y(`div`,{className:`mb-3 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Size`}),v(`div`,{className:`space-y-3`,children:[v(`div`,{className:`flex flex-wrap items-center gap-3`,children:[v(S.Group,{size:`large`,children:[y(S,{children:`Large`}),y(S,{children:`Large`})]}),v(S.Group,{children:[y(S,{children:`Default`}),y(S,{children:`Default`})]}),v(S.Group,{size:`small`,children:[y(S,{children:`Small`}),y(S,{children:`Small`})]})]}),v(`div`,{className:`flex flex-wrap items-center gap-3`,children:[v(S.Group,{size:`large`,shape:`circle`,children:[y(S,{children:`Large`}),y(S,{children:`Large`})]}),v(S.Group,{shape:`circle`,children:[y(S,{children:`Default`}),y(S,{children:`Default`})]}),v(S.Group,{size:`small`,shape:`circle`,children:[y(S,{children:`Small`}),y(S,{children:`Small`})]})]})]})]})]})}),code:`<div className="space-y-6">
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
</div>`});l(()=>d(e,u,ke))});let Ae=e(`rue:component:anchor`);i(u,Ae),m(()=>{let e=p(w,{title:`状态与布局`,summary:`把原来的 active、disabled、wide、block 示例也融合到当前页面。`,tab:me,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-5`,children:[v(`div`,{children:[y(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`States`}),v(`div`,{className:`flex flex-wrap gap-2`,children:[y(S,{active:!0,children:`Active`}),y(S,{color:`primary`,active:!0,children:`Primary active`}),y(S,{disabled:!0,children:`Disabled`}),y(S,{href:`#button-api`,disabled:!0,children:`Disabled link`})]})]}),v(`div`,{children:[y(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Layout`}),v(`div`,{className:`flex flex-col gap-2 sm:max-w-sm`,children:[y(S,{wide:!0,children:`Wide button`}),y(S,{block:!0,color:`primary`,children:`Block button`})]})]})]})}),code:`<div className="flex flex-wrap gap-2">
  <Button active>Active</Button>
  <Button color="primary" active>Primary active</Button>
  <Button disabled>Disabled</Button>
  <Button href="#button-api" disabled>Disabled link</Button>
</div>

<div className="flex flex-col gap-2 sm:max-w-sm">
  <Button wide>Wide button</Button>
  <Button block color="primary">Block button</Button>
</div>`});l(()=>d(e,u,Ae))});let je=e(`rue:component:anchor`);i(u,je),m(()=>{let e=p(w,{title:`根节点与表单行为`,summary:`默认渲染 button，同时保留链接根节点、div 根节点和表单行为示例。`,tab:he,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-4`,children:[v(`div`,{className:`flex flex-wrap gap-2`,children:[y(S,{children:`Native button`}),y(S,{href:`#button-api`,children:`Anchor`}),y(S,{as:`div`,type:`text`,children:`Div button`})]}),v(`div`,{className:`text-sm opacity-70`,children:[`submit count: `,j.value]}),v(`form`,{className:`flex flex-wrap items-center gap-2`,onSubmit:e=>{e.preventDefault(),j.value+=1},children:[y(S,{color:`primary`,htmlType:`submit`,children:`Submit form`}),y(S,{type:`outlined`,htmlType:`reset`,children:`Reset form`}),y(S,{href:`#button-api`,type:`link`,children:`Jump to API`})]})]})}),code:`const submitCount = ref(0)

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
</form>`});l(()=>d(e,u,je))});let Me=e(`rue:component:anchor`);i(u,Me),m(()=>{let e=p(w,{title:`场景组合`,summary:`把图标、变体、布局属性组合在一起，可以很快搭出操作条。`,tab:ge,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-4`,children:[v(`div`,{className:`flex flex-wrap gap-2`,children:[y(S,{color:`primary`,icon:y(O,{}),children:`Publish`}),y(S,{type:`outlined`,icon:y(E,{}),iconPlacement:`end`,children:`Preview`}),y(S,{type:`text`,icon:y(k,{}),children:`Save draft`})]}),v(`div`,{className:`grid gap-2 md:grid-cols-2`,children:[y(S,{block:!0,className:`justify-start bg-white text-base-content border-base-300`,icon:y(te,{}),children:`Continue with Email`}),y(S,{block:!0,color:`primary`,className:`justify-start`,icon:y(k,{}),children:`Continue with Rue ID`})]})]})}),code:`<div className="flex flex-wrap gap-2">
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
</div>`});l(()=>d(e,u,Me))});let Ne=e(`rue:component:anchor`);i(u,Ne),m(()=>{let e=p(w,{title:`登录按钮`,summary:`把原来的 provider 登录按钮演示融合回来，统一改成 icon + block + className 的新 API 写法。`,tab:_e,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body`,children:y(`div`,{className:`grid gap-2 md:grid-cols-2`,children:re.map(e=>y(S,{block:!0,className:`justify-start ${e.className}`,icon:y(ie,{text:e.icon,className:e.iconClassName}),children:e.label},e.label))})})}),code:`const loginButtons = [
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
</div>`});l(()=>d(e,u,Ne))});let G=r(`h2`,u);i(u,G),s(G,`id`,`button-api`),i(G,o(`API`));let Pe=r(`p`,u);i(u,Pe),i(Pe,o(`当前页面展示的是 Button 与 Button.Group 的完整可用 API。`));let K=r(`p`,u);i(u,K),i(K,o(`推荐使用顺序：`));let Fe=r(`code`,K);i(K,Fe),i(Fe,o(`type`)),i(K,o(`->`));let Ie=r(`code`,K);i(K,Ie),i(Ie,o(`color`)),i(K,o(`->`));let Le=r(`code`,K);i(K,Le),i(Le,o(`shape`)),i(K,o(`->`));let Re=h(K);i(K,Re),a(Re,` `);let ze=r(`code`,K);i(K,ze),i(ze,o(`size`)),i(K,o(`->`));let Be=r(`code`,K);i(K,Be),i(Be,o(`loading`)),i(K,o(`->`));let Ve=r(`code`,K);i(K,Ve),i(Ve,o(`disabled`)),i(K,o(`。`));let He=r(`h3`,u);i(u,He),i(He,o(`Button`));let Ue=e(`rue:component:anchor`);i(u,Ue),m(()=>{let e=p(T,{rows:ae});l(()=>d(e,u,Ue))});let We=r(`h3`,u);i(u,We),i(We,o(`Button.Group`));let Ge=e(`rue:component:anchor`);i(u,Ge),m(()=>{let e=p(T,{rows:oe});l(()=>d(e,u,Ge))});let Ke=r(`h2`,u);i(u,Ke),i(Ke,o(`FAQ`));let qe=r(`h3`,u);i(u,qe),i(qe,o(`为什么有 type 还需要 htmlType？`));let q=r(`p`,u);i(u,q);let Je=r(`code`,q);i(q,Je),i(Je,o(`type`)),i(q,o(`负责按钮视觉类型，`));let Ye=r(`code`,q);i(q,Ye),i(Ye,o(`htmlType`)),i(q,o(`负责原生 button 行为。视觉和提交语义拆开之后， 表单场景会更直接。`));let Xe=r(`h3`,u);i(u,Xe),i(Xe,o(`type 和 color 应该怎么分工？`));let J=r(`p`,u);i(u,J);let Ze=r(`code`,J);i(J,Ze),i(Ze,o(`type`)),i(J,o(`负责视觉类型，比如`));let Qe=r(`code`,J);i(J,Qe),i(Qe,o(`outlined`)),i(J,o(`、`));let $e=r(`code`,J);i(J,$e),i($e,o(`filled`)),i(J,o(`、`));let et=r(`code`,J);i(J,et),i(et,o(`text`)),i(J,o(`。`));let tt=r(`code`,J);i(J,tt),i(tt,o(`color`)),i(J,o(`负责主题色，比如`));let nt=r(`code`,J);i(J,nt),i(nt,o(`primary`)),i(J,o(`、`));let rt=r(`code`,J);i(J,rt),i(rt,o(`secondary`)),i(J,o(`、`));let it=r(`code`,J);i(J,it),i(it,o(`danger`)),i(J,o(`。`));let Y=r(`p`,u);i(u,Y),i(Y,o(`大多数场景可以先定颜色， 再根据密度和层级选择`));let at=r(`code`,Y);i(Y,at),i(at,o(`solid`)),i(Y,o(`、`));let ot=r(`code`,Y);i(Y,ot),i(ot,o(`outlined`)),i(Y,o(`、`));let st=r(`code`,Y);i(Y,st),i(st,o(`filled`)),i(Y,o(`或`));let ct=r(`code`,Y);i(Y,ct),i(ct,o(`text`)),i(Y,o(`。`));let lt=r(`h3`,u);i(u,lt),i(lt,o(`loading 对象里的 delay 会生效吗？`));let X=r(`p`,u);i(u,X),i(X,o(`当前版本已经支持`));let ut=r(`code`,X);i(X,ut),i(ut,o(`loading`)),i(X,o(`的对象写法和自定义`));let dt=r(`code`,X);i(X,dt),i(dt,o(`icon`)),i(X,o(`。`));let ft=r(`code`,X);i(X,ft),i(ft,o(`delay`)),i(X,o(`字段已保留在配置结构里，后续如果补充延迟显示策略，可以直接在现有接口上继续扩展。`));let pt=r(`h3`,u);i(u,pt),i(pt,o(`Button.Group 会覆盖子按钮哪些属性？`));let Z=r(`p`,u);i(u,Z),i(Z,o(`组级只会统一同步`));let Q=r(`code`,Z);i(Z,Q),i(Q,o(`size`)),i(Z,o(`和`));let mt=r(`code`,Z);i(Z,mt),i(mt,o(`shape`)),i(Z,o(`，方便在一组按钮上集中控制尺寸和轮廓。 每个子按钮自己的`));let ht=r(`code`,Z);i(Z,ht),i(ht,o(`color`)),i(Z,o(`、`));let gt=r(`code`,Z);i(Z,gt),i(gt,o(`type`)),i(Z,o(`、`));let _t=r(`code`,Z);i(Z,_t),i(_t,o(`disabled`)),i(Z,o(`、`));let vt=r(`code`,Z);i(Z,vt),i(vt,o(`onClick`)),i(Z,o(`仍然在各自的`));let yt=h(Z);i(Z,yt),a(yt,` `);let $=r(`code`,Z);return i(Z,$),i($,o(`Button`)),i(Z,o(`上配置。`)),c})}),f,g),f})};export{se as default};