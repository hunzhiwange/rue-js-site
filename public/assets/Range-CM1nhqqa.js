import{$ as e,$t as t,Bt as n,Gt as r,Xt as i,Z as a,ct as o,et as s,gt as c,l,nt as u,o as d,rt as f,t as p,tt as m,ut as h}from"./vapor-runtime-CKrmRMZX.js";import{a as g,n as _}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{a as v,i as y}from"./persistentSidebarPlayground-CKHFGglU.js";import{t as b}from"./Code-D5UqTwV6.js";import{t as x}from"./tabs-DRfs918f.js";import{t as S}from"./range-rMfaXwEY.js";import{r as C}from"./SidebarPlaygroundDesign-CWudvLqE.js";var w=[`neutral`,`primary`,`secondary`,`accent`,`success`,`warning`,`info`,`error`],T=[`xs`,`sm`,`md`,`lg`,`xl`],E=[`small`,`medium`,`large`],D=n=>l(i=>{let o=m(`div`,i);h(o,`component-preview not-prose text-base-content my-6 lg:my-12`);let c=m(`div`,o);a(o,c),h(c,`flex flex-wrap items-start justify-between gap-3`);let f=m(`div`,c);a(c,f);let g=m(`h2`,f);a(f,g),h(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(g,u(`# `));let _=e(`rue:slot:anchor`);a(g,_),t(()=>{let e=n.title;r(()=>d(e,g,_))});let v=e(`rue:slot:anchor`);a(f,v),t(()=>{let i=n.summary?l(()=>{let i=s(),o=m(`p`,i);a(i,o),h(o,`m-0 text-sm opacity-70`);let c=e(`rue:slot:anchor`);return a(o,c),t(()=>{let e=n.summary;r(()=>d(e,o,c))}),i}):``;r(()=>d(i,f,v))});let y=e(`rue:component:anchor`);a(o,y),t(()=>{let e=p(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:n.tab.value,onChange:e=>n.tab.value=e,className:`mb-3 mt-4`});r(()=>d(e,o,y))});let S=e(`rue:slot:anchor`);return a(o,S),t(()=>{let i=n.tab.value===`preview`?n.preview():l(()=>{let i=s(),o=e(`rue:component:anchor`);return a(i,o),t(()=>{let e=p(b,{className:`mt-2`,lang:`tsx`,code:n.code});r(()=>d(e,i,o))}),i});r(()=>d(i,o,S))}),o}),O=n=>l(i=>{let c=m(`div`,i);h(c,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=m(`table`,c);a(c,f),h(f,`table table-zebra`);let p=m(`thead`,f);a(f,p);let g=m(`tr`,p);a(p,g);let v=m(`th`,g);a(g,v),a(v,u(`属性`));let y=m(`th`,g);a(g,y),a(y,u(`说明`));let b=m(`th`,g);a(g,b),a(b,u(`类型`));let x=m(`th`,g);a(g,x),a(x,u(`默认值`));let S=m(`tbody`,f);a(f,S);let C=e(`rue:list:start`),w=e(`rue:list:end`);a(S,C),a(S,w);let T=new Map;return t(()=>{T=_({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,i,c,u,f)=>{d(l(()=>{let i=s(),c=m(`tr`,i);a(i,c),t(()=>{o(c,`key`,String(n.prop))});let l=m(`td`,c);a(c,l);let u=m(`code`,l);a(l,u);let f=e(`rue:slot:anchor`);a(u,f),t(()=>{let e=n.prop;r(()=>d(e,u,f))});let p=m(`td`,c);a(c,p);let h=e(`rue:slot:anchor`);a(p,h),t(()=>{let e=n.description;r(()=>d(e,p,h))});let g=m(`td`,c);a(c,g);let _=m(`code`,g);a(g,_);let v=e(`rue:slot:anchor`);a(_,v),t(()=>{let e=n.type;r(()=>d(e,_,v))});let y=m(`td`,c);a(c,y);let b=m(`code`,y);a(y,b);let x=e(`rue:slot:anchor`);return a(b,x),t(()=>{let e=n.defaultValue;r(()=>d(e,b,x))}),i}),i,c)}})}),c}),k=()=>{let{sliderValue:r}=g(`useSetup:0:0`,()=>i(()=>({sliderValue:g(`ref:1:0`,()=>n(`40`))})));return l(n=>{let i=m(`div`,n);h(i,`w-full max-w-xs space-y-3`);let o=e(`rue:component:anchor`);a(i,o),d(p(S,{"data-testid":`range-basic`,min:0,max:100,defaultValue:40,onValueChange:e=>{r.value=String(e)}}),i,o);let s=m(`p`,i);a(i,s),h(s,`m-0 text-sm text-base-content/70`),a(s,u(`当前值：`));let l=f(s);return a(s,l),t(()=>{c(l,r.value)}),i})},A=()=>{let{bandwidth:o}=g(`useSetup:0:0:dup1`,()=>i(()=>({bandwidth:g(`ref:1:1`,()=>n(250))})));return l(n=>{let i=m(`div`,n);h(i,`w-full max-w-lg space-y-4 rounded-box border border-base-300 bg-base-100 p-5`);let s=e(`rue:component:anchor`);a(i,s),t(()=>{let e=p(S,{min:100,max:1e3,step:50,defaultValue:250,color:`primary`,label:`边缘带宽`,hint:`滑动查看不同档位的交付能力。`,helper:`超过 500 Mbps 后，建议同步升级防护策略与监控采样。`,showValue:{formatter:e=>`${e} Mbps`},marks:[{value:100,label:`Lite`},{value:250,label:`Start`},{value:500,label:`Growth`},{value:750,label:`Scale`},{value:1e3,label:`Max`}],onValueChange:e=>{o.value=e}});r(()=>d(e,i,s))});let l=m(`div`,i);a(i,l),h(l,`grid gap-3 rounded-box bg-base-200/70 p-4 text-sm sm:grid-cols-3`);let g=m(`div`,l);a(l,g);let _=m(`div`,g);a(g,_),h(_,`text-xs uppercase tracking-wide text-base-content/50`),a(_,u(`每秒请求`));let v=m(`div`,g);a(g,v),h(v,`mt-1 text-lg font-semibold text-base-content`);let y=f(v);a(v,y),t(()=>{c(y,Math.round(o.value/10*18))}),a(v,u(`k`));let b=m(`div`,l);a(l,b);let x=m(`div`,b);a(b,x),h(x,`text-xs uppercase tracking-wide text-base-content/50`),a(x,u(`区域副本`));let C=m(`div`,b);a(b,C),h(C,`mt-1 text-lg font-semibold text-base-content`);let w=f(C);a(C,w),t(()=>{c(w,o.value>=500?`6 个`:`3 个`)});let T=m(`div`,l);a(l,T);let E=m(`div`,T);a(T,E),h(E,`text-xs uppercase tracking-wide text-base-content/50`),a(E,u(`推荐套餐`));let D=m(`div`,T);a(T,D),h(D,`mt-1 text-lg font-semibold text-base-content`);let O=f(D);return a(D,O),t(()=>{c(O,o.value>=750?`Enterprise`:o.value>=500?`Scale`:o.value>=250?`Growth`:`Starter`)}),i})},j=()=>{let{seats:o,committedSeats:s}=g(`useSetup:0:0:dup2`,()=>i(()=>({seats:g(`ref:1:2`,()=>n(12)),committedSeats:g(`ref:1:3`,()=>n(12))})));return l(n=>{let i=m(`div`,n);h(i,`w-full max-w-lg rounded-box border border-base-300 bg-base-100 p-5`);let l=e(`rue:component:anchor`);a(i,l),t(()=>{let e=p(S,{min:5,max:60,step:5,defaultValue:12,color:`secondary`,showValue:{formatter:e=>`${e} seats`,placement:`below`},label:`团队席位`,hint:`拖动时实时更新预算，松手后再提交确认值。`,marks:[5,15,30,45,60],onValueChange:e=>{o.value=e},onValueCommit:e=>{s.value=e}});r(()=>d(e,i,l))});let g=m(`div`,i);a(i,g),h(g,`mt-4 grid gap-3 text-sm sm:grid-cols-2`);let _=m(`div`,g);a(g,_),h(_,`rounded-box bg-base-200/70 p-4`);let v=m(`div`,_);a(_,v),h(v,`text-xs uppercase tracking-wide text-base-content/50`),a(v,u(`实时预算`));let y=m(`div`,_);a(_,y),h(y,`mt-2 text-lg font-semibold text-base-content`),a(y,u(`¥ `));let b=f(y);a(y,b),t(()=>{c(b,o.value*129)}),a(y,u(` / 月`));let x=m(`div`,g);a(g,x),h(x,`rounded-box bg-base-200/70 p-4`);let C=m(`div`,x);a(x,C),h(C,`text-xs uppercase tracking-wide text-base-content/50`),a(C,u(`已确认席位`));let w=m(`div`,x);a(x,w),h(w,`mt-2 text-lg font-semibold text-base-content`);let T=f(w);return a(w,T),t(()=>{c(T,s.value)}),a(w,u(` seats`)),i})},M=()=>l(n=>{let i=m(`div`,n);h(i,`w-full max-w-sm`);let o=e(`rue:component:anchor`);return a(i,o),t(()=>{let e=p(S,{min:0,max:100,defaultValue:25,step:25,showValue:{placement:`below`,formatter:e=>`${e}%`},marks:[{value:0,label:`1`},{value:25,label:`2`},{value:50,label:`3`},{value:75,label:`4`},{value:100,label:`5`}]});r(()=>d(e,i,o))}),i}),N=()=>l(n=>{let i=m(`div`,n);h(i,`grid gap-4`);let u=e(`rue:list:start`),g=e(`rue:list:end`);a(i,u),a(i,g);let v=new Map;return t(()=>{v=_({items:w||[],getKey:(e,t)=>e,elements:v,parent:u.parentNode,before:g,singleRoot:!0,trackIndex:!1,start:u,renderItem:(n,i,u,g,_)=>{d(l(()=>{let i=s(),l=m(`div`,i);a(i,l),t(()=>{o(l,`key`,String(n))}),h(l,`space-y-2 rounded-box border border-base-300 bg-base-100 p-4`);let u=m(`div`,l);a(l,u),h(u,`text-xs uppercase tracking-wide text-base-content/60`);let g=f(u);a(u,g),t(()=>{c(g,n)});let _=e(`rue:component:anchor`);return a(l,_),t(()=>{let e=p(S,{color:n,min:0,max:100,defaultValue:40,showValue:!0});r(()=>d(e,l,_))}),i}),i,u)}})}),i}),P=()=>l(n=>{let i=m(`div`,n);h(i,`w-full max-w-sm space-y-3 rounded-box border border-base-300 bg-base-100 p-4`);let o=e(`rue:component:anchor`);return a(i,o),t(()=>{let e=p(S,{min:0,max:100,defaultValue:40,showValue:{formatter:e=>`mix ${e}`},className:`text-blue-300 [--range-bg:orange] [--range-thumb:blue] [--range-fill:0]`});r(()=>d(e,i,o))}),i}),F=[{prop:`className`,description:`追加到原生 input 的类名，适合继续覆写 CSS 变量`,type:`string`,defaultValue:`-`},{prop:`color`,description:`语义色，映射到 range-* 颜色类`,type:`'neutral' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'info' | 'error'`,defaultValue:`-`},{prop:`defaultValue`,description:`非受控初始值`,type:`string | number`,defaultValue:`-`},{prop:`formatter`,description:`值格式化函数，可与 showValue 组合使用`,type:`(value: number, info: { min: number; max: number; percent: number }) => any`,defaultValue:`-`},{prop:`helper`,description:`底部辅助文案`,type:`any`,defaultValue:`-`},{prop:`hint`,description:`标题下方的简短说明`,type:`any`,defaultValue:`-`},{prop:`label`,description:`顶部标题，自动关联 input id`,type:`any`,defaultValue:`-`},{prop:`marks`,description:`刻度点，可传 number / string 或 { value, label } 数组`,type:`Array<string | number | { value: string | number; label?: any }>`,defaultValue:`-`},{prop:`max`,description:`最大值`,type:`string | number`,defaultValue:`100`},{prop:`min`,description:`最小值`,type:`string | number`,defaultValue:`0`},{prop:`onValueChange`,description:`拖动过程中的语义回调，返回解析后的 number`,type:`(value: number, event: Event) => void`,defaultValue:`-`},{prop:`onValueCommit`,description:`原生 change 阶段的语义回调，适合提交确认值`,type:`(value: number, event: Event) => void`,defaultValue:`-`},{prop:`rootClassName`,description:`增强结构外层容器类名，仅在展示层激活时生效`,type:`string`,defaultValue:`-`},{prop:`showValue`,description:`显示当前值，可配置 formatter、placement 和 className`,type:`boolean | { formatter?: (value: number, info: { min: number; max: number; percent: number }) => any; placement?: 'inline' | 'below'; className?: string }`,defaultValue:`false`},{prop:`size`,description:`尺寸，支持 xs-xl 以及 small / medium / large 别名`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'medium' | 'large'`,defaultValue:`'md'`},{prop:`step`,description:`步长`,type:`string | number`,defaultValue:`1`},{prop:`value`,description:`受控值`,type:`string | number`,defaultValue:`-`}],I=()=>{let{tabBasic:o,tabStory:_,tabSteps:b,tabColors:x,tabSizes:w,tabCommit:I,tabCustom:L}=g(`useSetup:0:0:dup3`,()=>i(()=>({tabBasic:g(`ref:1:4`,()=>n(`preview`)),tabStory:g(`ref:1:5`,()=>n(`preview`)),tabSteps:g(`ref:1:6`,()=>n(`preview`)),tabColors:g(`ref:1:7`,()=>n(`preview`)),tabSizes:g(`ref:1:8`,()=>n(`preview`)),tabCommit:g(`ref:1:9`,()=>n(`preview`)),tabCustom:g(`ref:1:10`,()=>n(`preview`))})));return l(n=>{let i=s(),g=e(`rue:component:anchor`);return a(i,g),d(p(C,{children:l(()=>{let n=s(),i=m(`div`,n);a(n,i),h(i,`max-w-none prose prose-sm md:prose-base`);let l=m(`h1`,i);a(i,l),a(l,u(`Range Slider 范围选择`));let g=m(`p`,i);a(i,g),h(g,`mt-3 mb-3 text-sm`),a(g,u(`Range 仍然坚持原生`));let C=m(`code`,g);a(g,C),a(C,u(`input type="range"`));let R=f(g);a(g,R),c(R,` `),a(g,u(`的语义，但不再只是一条裸滑杆。现在可以直接在组件层补齐标题、提示、刻度、值展示和语义回调，设计页也按能力分层重新组织。`));let z=e(`rue:component:anchor`);a(i,z),t(()=>{let e=p(D,{title:`Range`,summary:`保留原来的最小兼容写法；如果你只想要一个原生滑杆，API 仍然保持直接。`,tab:o,preview:()=>y(k,{}),code:`<Range min={0} max={100} value={40} />`});r(()=>d(e,i,z))});let B=e(`rue:component:anchor`);a(i,B),t(()=>{let e=p(D,{title:`带文案与实时值`,summary:`把 label、hint、helper、showValue 和 marks 叠到组件自身，适合做套餐档位和配置面板。`,tab:_,preview:()=>y(A,{}),code:`const bandwidth = ref(250)

<Range
  min={100}
  max={1000}
  step={50}
  defaultValue={250}
  color="primary"
  label="边缘带宽"
  hint="滑动查看不同档位的交付能力。"
  helper="超过 500 Mbps 后，建议同步升级防护策略与监控采样。"
  showValue={{ formatter: value => value + ' Mbps' }}
  marks={[
    { value: 100, label: 'Lite' },
    { value: 250, label: 'Start' },
    { value: 500, label: 'Growth' },
    { value: 750, label: 'Scale' },
    { value: 1000, label: 'Max' },
  ]}
  onValueChange={nextValue => {
    bandwidth.value = nextValue
  }}
/>`});r(()=>d(e,i,B))});let V=e(`rue:component:anchor`);a(i,V),t(()=>{let e=p(D,{title:`With steps and measure`,summary:`旧 demo 保留，但把刻度线和标签收进 marks，减少样板代码。`,tab:b,preview:()=>y(M,{}),code:`<Range
  min={0}
  max={100}
  defaultValue={25}
  step={25}
  showValue={{ placement: 'below', formatter: currentValue => currentValue + '%' }}
  marks={[
    { value: 0, label: '1' },
    { value: 25, label: '2' },
    { value: 50, label: '3' },
    { value: 75, label: '4' },
    { value: 100, label: '5' },
  ]}
/>`});r(()=>d(e,i,V))});let H=e(`rue:component:anchor`);a(i,H),t(()=>{let e=p(D,{title:`Range colors`,summary:`保留原有颜色矩阵，同时展示增强 API 与原有颜色类可以自然叠加。`,tab:x,preview:()=>y(N,{}),code:`const colors = ['neutral', 'primary', 'secondary', 'accent', 'success', 'warning', 'info', 'error'] as const

<div className="grid gap-4">
  {colors.map(color => (
    <div key={color} className="space-y-2 rounded-box border border-base-300 bg-base-100 p-4">
      <div className="text-xs uppercase tracking-wide text-base-content/60">{color}</div>
      <Range
        color={color}
        min={0}
        max={100}
        defaultValue={40}
        showValue={true}
      />
    </div>
  ))}
</div>`});r(()=>d(e,i,H))});let U=e(`rue:component:anchor`);a(i,U),t(()=>{let e=p(D,{title:`Sizes`,summary:`保留 xs 到 xl 的原始尺寸，同时补上 small / medium / large 三个别名，方便和其他组件对齐。`,tab:w,preview:()=>v(`div`,{className:`space-y-6`,children:[y(`div`,{className:`flex w-full max-w-sm flex-col gap-4`,children:T.map((e,t)=>y(S,{size:e,min:0,max:100,defaultValue:30+t*10},e))}),y(`div`,{className:`grid gap-3 rounded-box border border-dashed border-base-300 bg-base-100 p-4 text-sm sm:grid-cols-3`,children:E.map((e,t)=>v(`div`,{className:`space-y-2`,children:[y(`div`,{className:`text-xs uppercase tracking-wide text-base-content/60`,children:e}),y(S,{size:e,min:0,max:100,defaultValue:35+t*20})]},e))})]}),code:`<Range size="xs" min={0} max={100} defaultValue={30} />
<Range size="sm" min={0} max={100} defaultValue={40} />
<Range size="md" min={0} max={100} defaultValue={50} />
<Range size="lg" min={0} max={100} defaultValue={60} />
<Range size="xl" min={0} max={100} defaultValue={70} />

<Range size="small" min={0} max={100} defaultValue={35} />
<Range size="medium" min={0} max={100} defaultValue={55} />
<Range size="large" min={0} max={100} defaultValue={75} />`});r(()=>d(e,i,U))});let W=e(`rue:component:anchor`);a(i,W),t(()=>{let e=p(D,{title:`受控提交`,summary:`拖动中用 onValueChange 更新即时反馈，松手后用 onValueCommit 记录确认值。`,tab:I,preview:()=>y(j,{}),code:`const seats = ref(12)
const committedSeats = ref(12)

<Range
  min={5}
  max={60}
  step={5}
  defaultValue={12}
  color="secondary"
  showValue={{ formatter: value => value + ' seats', placement: 'below' }}
  label="团队席位"
  hint="拖动时实时更新预算，松手后再提交确认值。"
  marks={[5, 15, 30, 45, 60]}
  onValueChange={nextValue => {
    seats.value = nextValue
  }}
  onValueCommit={nextValue => {
    committedSeats.value = nextValue
  }}
/>`});r(()=>d(e,i,W))});let G=e(`rue:component:anchor`);a(i,G),t(()=>{let e=p(D,{title:`Range with custom color and no fill`,summary:`原来的自定义 CSS 变量方案继续可用；增强 API 不会挡住底层变量覆写。`,tab:L,preview:()=>y(P,{}),code:`<Range
  min={0}
  max={100}
  defaultValue={40}
  showValue={{ formatter: currentValue => 'mix ' + currentValue }}
  className="text-blue-300 [--range-bg:orange] [--range-thumb:blue] [--range-fill:0]"
/>`});r(()=>d(e,i,G))});let K=m(`div`,i);a(i,K),h(K,`component-preview not-prose text-base-content my-6 lg:my-12`);let q=m(`h2`,K);a(K,q),h(q,`component-preview-title mt-2 mb-3 text-lg font-semibold`),a(q,u(`# API`));let J=m(`p`,K);a(K,J),h(J,`mb-4 text-sm text-base-content/70`),a(J,u(`不做增强展示时，Range 仍然是一个直接透传原生属性的滑杆；一旦传入`));let Y=m(`code`,J);a(J,Y),a(Y,u(`label`)),a(J,u(`、`));let X=m(`code`,J);a(J,X),a(X,u(`showValue`)),a(J,u(`、`));let Z=m(`code`,J);a(J,Z),a(Z,u(`marks`)),a(J,u(`等属性，就会自动切换到更完整的展示结构。`));let Q=e(`rue:component:anchor`);return a(K,Q),t(()=>{let e=p(O,{rows:F});r(()=>d(e,K,Q))}),n})}),i,g),i})};export{I as default};