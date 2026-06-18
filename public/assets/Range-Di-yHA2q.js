import{$ as e,Ht as t,J as n,Lt as r,Q as i,X as a,Xt as o,Z as s,at as c,et as l,l as u,pt as d,qt as f,s as p,st as m,t as h}from"./vapor-runtime-iQZthBPQ.js";import{a as g,n as _}from"./vapor-helpers-vapor-BjKHCvOa.js";import{a as v,i as y}from"./persistentSidebarPlayground-BfF7yM0K.js";import{t as b}from"./Code-CZqShVUj.js";import{t as x}from"./tabs-BBuGEPV7.js";import{t as S}from"./range-DKDXCA21.js";import{r as C}from"./SidebarPlaygroundDesign-BcHYLGe4.js";var w=[`neutral`,`primary`,`secondary`,`accent`,`success`,`warning`,`info`,`error`],T=[`xs`,`sm`,`md`,`lg`,`xl`],E=[`small`,`medium`,`large`],D=r=>u(c=>{let l=i(`div`,c);m(l,`component-preview not-prose text-base-content my-6 lg:my-12`);let d=i(`div`,l);n(l,d),m(d,`flex flex-wrap items-start justify-between gap-3`);let f=i(`div`,d);n(d,f);let g=i(`h2`,f);n(f,g),m(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(g,e(`# `));let _=a(`rue:slot:anchor`);n(g,_),o(()=>{let e=r.title;t(()=>p(e,g,_))});let v=a(`rue:slot:anchor`);n(f,v),o(()=>{let e=r.summary?u(()=>{let e=s(),c=i(`p`,e);n(e,c),m(c,`m-0 text-sm opacity-70`);let l=a(`rue:slot:anchor`);return n(c,l),o(()=>{let e=r.summary;t(()=>p(e,c,l))}),e}):``;t(()=>p(e,f,v))});let y=a(`rue:component:anchor`);n(l,y),o(()=>{let e=h(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:r.tab.value,onChange:e=>r.tab.value=e,className:`mb-3 mt-4`});t(()=>p(e,l,y))});let S=a(`rue:slot:anchor`);return n(l,S),o(()=>{let e=r.tab.value===`preview`?r.preview():u(()=>{let e=s(),i=a(`rue:component:anchor`);return n(e,i),o(()=>{let n=h(b,{className:`mt-2`,lang:`tsx`,code:r.code});t(()=>p(n,e,i))}),e});t(()=>p(e,l,S))}),l}),O=r=>u(l=>{let d=i(`div`,l);m(d,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=i(`table`,d);n(d,f),m(f,`table table-zebra`);let h=i(`thead`,f);n(f,h);let g=i(`tr`,h);n(h,g);let v=i(`th`,g);n(g,v),n(v,e(`属性`));let y=i(`th`,g);n(g,y),n(y,e(`说明`));let b=i(`th`,g);n(g,b),n(b,e(`类型`));let x=i(`th`,g);n(g,x),n(x,e(`默认值`));let S=i(`tbody`,f);n(f,S);let C=a(`rue:list:start`),w=a(`rue:list:end`);n(S,C),n(S,w);let T=new Map;return o(()=>{T=_({items:r.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,r,l,d,f)=>{p(u(()=>{let r=s(),l=i(`tr`,r);n(r,l),o(()=>{c(l,`key`,String(e.prop))});let u=i(`td`,l);n(l,u);let d=i(`code`,u);n(u,d);let f=a(`rue:slot:anchor`);n(d,f),o(()=>{let n=e.prop;t(()=>p(n,d,f))});let m=i(`td`,l);n(l,m);let h=a(`rue:slot:anchor`);n(m,h),o(()=>{let n=e.description;t(()=>p(n,m,h))});let g=i(`td`,l);n(l,g);let _=i(`code`,g);n(g,_);let v=a(`rue:slot:anchor`);n(_,v),o(()=>{let n=e.type;t(()=>p(n,_,v))});let y=i(`td`,l);n(l,y);let b=i(`code`,y);n(y,b);let x=a(`rue:slot:anchor`);return n(b,x),o(()=>{let n=e.defaultValue;t(()=>p(n,b,x))}),r}),r,l)}})}),d}),k=()=>{let{sliderValue:t}=g(`useSetup:0:0`,()=>f(()=>({sliderValue:g(`ref:1:0`,()=>r(`40`))})));return u(r=>{let s=i(`div`,r);m(s,`w-full max-w-xs space-y-3`);let c=a(`rue:component:anchor`);n(s,c),p(h(S,{"data-testid":`range-basic`,min:0,max:100,defaultValue:40,onValueChange:e=>{t.value=String(e)}}),s,c);let u=i(`p`,s);n(s,u),m(u,`m-0 text-sm text-base-content/70`),n(u,e(`当前值：`));let f=l(u);return n(u,f),o(()=>{d(f,t.value)}),s})},A=()=>{let{bandwidth:s}=g(`useSetup:0:0:dup1`,()=>f(()=>({bandwidth:g(`ref:1:1`,()=>r(250))})));return u(r=>{let c=i(`div`,r);m(c,`w-full max-w-lg space-y-4 rounded-box border border-base-300 bg-base-100 p-5`);let u=a(`rue:component:anchor`);n(c,u),o(()=>{let e=h(S,{min:100,max:1e3,step:50,defaultValue:250,color:`primary`,label:`边缘带宽`,hint:`滑动查看不同档位的交付能力。`,helper:`超过 500 Mbps 后，建议同步升级防护策略与监控采样。`,showValue:{formatter:e=>`${e} Mbps`},marks:[{value:100,label:`Lite`},{value:250,label:`Start`},{value:500,label:`Growth`},{value:750,label:`Scale`},{value:1e3,label:`Max`}],onValueChange:e=>{s.value=e}});t(()=>p(e,c,u))});let f=i(`div`,c);n(c,f),m(f,`grid gap-3 rounded-box bg-base-200/70 p-4 text-sm sm:grid-cols-3`);let g=i(`div`,f);n(f,g);let _=i(`div`,g);n(g,_),m(_,`text-xs uppercase tracking-wide text-base-content/50`),n(_,e(`每秒请求`));let v=i(`div`,g);n(g,v),m(v,`mt-1 text-lg font-semibold text-base-content`);let y=l(v);n(v,y),o(()=>{d(y,Math.round(s.value/10*18))}),n(v,e(`k`));let b=i(`div`,f);n(f,b);let x=i(`div`,b);n(b,x),m(x,`text-xs uppercase tracking-wide text-base-content/50`),n(x,e(`区域副本`));let C=i(`div`,b);n(b,C),m(C,`mt-1 text-lg font-semibold text-base-content`);let w=l(C);n(C,w),o(()=>{d(w,s.value>=500?`6 个`:`3 个`)});let T=i(`div`,f);n(f,T);let E=i(`div`,T);n(T,E),m(E,`text-xs uppercase tracking-wide text-base-content/50`),n(E,e(`推荐套餐`));let D=i(`div`,T);n(T,D),m(D,`mt-1 text-lg font-semibold text-base-content`);let O=l(D);return n(D,O),o(()=>{d(O,s.value>=750?`Enterprise`:s.value>=500?`Scale`:s.value>=250?`Growth`:`Starter`)}),c})},j=()=>{let{seats:s,committedSeats:c}=g(`useSetup:0:0:dup2`,()=>f(()=>({seats:g(`ref:1:2`,()=>r(12)),committedSeats:g(`ref:1:3`,()=>r(12))})));return u(r=>{let u=i(`div`,r);m(u,`w-full max-w-lg rounded-box border border-base-300 bg-base-100 p-5`);let f=a(`rue:component:anchor`);n(u,f),o(()=>{let e=h(S,{min:5,max:60,step:5,defaultValue:12,color:`secondary`,showValue:{formatter:e=>`${e} seats`,placement:`below`},label:`团队席位`,hint:`拖动时实时更新预算，松手后再提交确认值。`,marks:[5,15,30,45,60],onValueChange:e=>{s.value=e},onValueCommit:e=>{c.value=e}});t(()=>p(e,u,f))});let g=i(`div`,u);n(u,g),m(g,`mt-4 grid gap-3 text-sm sm:grid-cols-2`);let _=i(`div`,g);n(g,_),m(_,`rounded-box bg-base-200/70 p-4`);let v=i(`div`,_);n(_,v),m(v,`text-xs uppercase tracking-wide text-base-content/50`),n(v,e(`实时预算`));let y=i(`div`,_);n(_,y),m(y,`mt-2 text-lg font-semibold text-base-content`),n(y,e(`¥ `));let b=l(y);n(y,b),o(()=>{d(b,s.value*129)}),n(y,e(` / 月`));let x=i(`div`,g);n(g,x),m(x,`rounded-box bg-base-200/70 p-4`);let C=i(`div`,x);n(x,C),m(C,`text-xs uppercase tracking-wide text-base-content/50`),n(C,e(`已确认席位`));let w=i(`div`,x);n(x,w),m(w,`mt-2 text-lg font-semibold text-base-content`);let T=l(w);return n(w,T),o(()=>{d(T,c.value)}),n(w,e(` seats`)),u})},M=()=>u(e=>{let r=i(`div`,e);m(r,`w-full max-w-sm`);let s=a(`rue:component:anchor`);return n(r,s),o(()=>{let e=h(S,{min:0,max:100,defaultValue:25,step:25,showValue:{placement:`below`,formatter:e=>`${e}%`},marks:[{value:0,label:`1`},{value:25,label:`2`},{value:50,label:`3`},{value:75,label:`4`},{value:100,label:`5`}]});t(()=>p(e,r,s))}),r}),N=()=>u(e=>{let r=i(`div`,e);m(r,`grid gap-4`);let f=a(`rue:list:start`),g=a(`rue:list:end`);n(r,f),n(r,g);let v=new Map;return o(()=>{v=_({items:w||[],getKey:(e,t)=>e,elements:v,parent:f.parentNode,before:g,singleRoot:!0,trackIndex:!1,start:f,renderItem:(e,r,f,g,_)=>{p(u(()=>{let r=s(),u=i(`div`,r);n(r,u),o(()=>{c(u,`key`,String(e))}),m(u,`space-y-2 rounded-box border border-base-300 bg-base-100 p-4`);let f=i(`div`,u);n(u,f),m(f,`text-xs uppercase tracking-wide text-base-content/60`);let g=l(f);n(f,g),o(()=>{d(g,e)});let _=a(`rue:component:anchor`);return n(u,_),o(()=>{let n=h(S,{color:e,min:0,max:100,defaultValue:40,showValue:!0});t(()=>p(n,u,_))}),r}),r,f)}})}),r}),P=()=>u(e=>{let r=i(`div`,e);m(r,`w-full max-w-sm space-y-3 rounded-box border border-base-300 bg-base-100 p-4`);let s=a(`rue:component:anchor`);return n(r,s),o(()=>{let e=h(S,{min:0,max:100,defaultValue:40,showValue:{formatter:e=>`mix ${e}`},className:`text-blue-300 [--range-bg:orange] [--range-thumb:blue] [--range-fill:0]`});t(()=>p(e,r,s))}),r}),F=[{prop:`className`,description:`追加到原生 input 的类名，适合继续覆写 CSS 变量`,type:`string`,defaultValue:`-`},{prop:`color`,description:`语义色，映射到 range-* 颜色类`,type:`'neutral' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'info' | 'error'`,defaultValue:`-`},{prop:`defaultValue`,description:`非受控初始值`,type:`string | number`,defaultValue:`-`},{prop:`formatter`,description:`值格式化函数，可与 showValue 组合使用`,type:`(value: number, info: { min: number; max: number; percent: number }) => any`,defaultValue:`-`},{prop:`helper`,description:`底部辅助文案`,type:`any`,defaultValue:`-`},{prop:`hint`,description:`标题下方的简短说明`,type:`any`,defaultValue:`-`},{prop:`label`,description:`顶部标题，自动关联 input id`,type:`any`,defaultValue:`-`},{prop:`marks`,description:`刻度点，可传 number / string 或 { value, label } 数组`,type:`Array<string | number | { value: string | number; label?: any }>`,defaultValue:`-`},{prop:`max`,description:`最大值`,type:`string | number`,defaultValue:`100`},{prop:`min`,description:`最小值`,type:`string | number`,defaultValue:`0`},{prop:`onValueChange`,description:`拖动过程中的语义回调，返回解析后的 number`,type:`(value: number, event: Event) => void`,defaultValue:`-`},{prop:`onValueCommit`,description:`原生 change 阶段的语义回调，适合提交确认值`,type:`(value: number, event: Event) => void`,defaultValue:`-`},{prop:`rootClassName`,description:`增强结构外层容器类名，仅在展示层激活时生效`,type:`string`,defaultValue:`-`},{prop:`showValue`,description:`显示当前值，可配置 formatter、placement 和 className`,type:`boolean | { formatter?: (value: number, info: { min: number; max: number; percent: number }) => any; placement?: 'inline' | 'below'; className?: string }`,defaultValue:`false`},{prop:`size`,description:`尺寸，支持 xs-xl 以及 small / medium / large 别名`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'medium' | 'large'`,defaultValue:`'md'`},{prop:`step`,description:`步长`,type:`string | number`,defaultValue:`1`},{prop:`value`,description:`受控值`,type:`string | number`,defaultValue:`-`}],I=()=>{let{tabBasic:c,tabStory:_,tabSteps:b,tabColors:x,tabSizes:w,tabCommit:I,tabCustom:L}=g(`useSetup:0:0:dup3`,()=>f(()=>({tabBasic:g(`ref:1:4`,()=>r(`preview`)),tabStory:g(`ref:1:5`,()=>r(`preview`)),tabSteps:g(`ref:1:6`,()=>r(`preview`)),tabColors:g(`ref:1:7`,()=>r(`preview`)),tabSizes:g(`ref:1:8`,()=>r(`preview`)),tabCommit:g(`ref:1:9`,()=>r(`preview`)),tabCustom:g(`ref:1:10`,()=>r(`preview`))})));return u(r=>{let f=s(),g=a(`rue:component:anchor`);return n(f,g),p(h(C,{children:u(()=>{let r=s(),u=i(`div`,r);n(r,u),m(u,`max-w-none prose prose-sm md:prose-base`);let f=i(`h1`,u);n(u,f),n(f,e(`Range Slider 范围选择`));let g=i(`p`,u);n(u,g),m(g,`mt-3 mb-3 text-sm`),n(g,e(`Range 仍然坚持原生`));let C=i(`code`,g);n(g,C),n(C,e(`input type="range"`));let R=l(g);n(g,R),d(R,` `),n(g,e(`的语义，但不再只是一条裸滑杆。现在可以直接在组件层补齐标题、提示、刻度、值展示和语义回调，设计页也按能力分层重新组织。`));let z=a(`rue:component:anchor`);n(u,z),o(()=>{let e=h(D,{title:`Range`,summary:`保留原来的最小兼容写法；如果你只想要一个原生滑杆，API 仍然保持直接。`,tab:c,preview:()=>y(k,{}),code:`<Range min={0} max={100} value={40} />`});t(()=>p(e,u,z))});let B=a(`rue:component:anchor`);n(u,B),o(()=>{let e=h(D,{title:`带文案与实时值`,summary:`把 label、hint、helper、showValue 和 marks 叠到组件自身，适合做套餐档位和配置面板。`,tab:_,preview:()=>y(A,{}),code:`const bandwidth = ref(250)

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
/>`});t(()=>p(e,u,B))});let V=a(`rue:component:anchor`);n(u,V),o(()=>{let e=h(D,{title:`With steps and measure`,summary:`旧 demo 保留，但把刻度线和标签收进 marks，减少样板代码。`,tab:b,preview:()=>y(M,{}),code:`<Range
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
/>`});t(()=>p(e,u,V))});let H=a(`rue:component:anchor`);n(u,H),o(()=>{let e=h(D,{title:`Range colors`,summary:`保留原有颜色矩阵，同时展示增强 API 与原有颜色类可以自然叠加。`,tab:x,preview:()=>y(N,{}),code:`const colors = ['neutral', 'primary', 'secondary', 'accent', 'success', 'warning', 'info', 'error'] as const

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
</div>`});t(()=>p(e,u,H))});let U=a(`rue:component:anchor`);n(u,U),o(()=>{let e=h(D,{title:`Sizes`,summary:`保留 xs 到 xl 的原始尺寸，同时补上 small / medium / large 三个别名，方便和其他组件对齐。`,tab:w,preview:()=>v(`div`,{className:`space-y-6`,children:[y(`div`,{className:`flex w-full max-w-sm flex-col gap-4`,children:T.map((e,t)=>y(S,{size:e,min:0,max:100,defaultValue:30+t*10},e))}),y(`div`,{className:`grid gap-3 rounded-box border border-dashed border-base-300 bg-base-100 p-4 text-sm sm:grid-cols-3`,children:E.map((e,t)=>v(`div`,{className:`space-y-2`,children:[y(`div`,{className:`text-xs uppercase tracking-wide text-base-content/60`,children:e}),y(S,{size:e,min:0,max:100,defaultValue:35+t*20})]},e))})]}),code:`<Range size="xs" min={0} max={100} defaultValue={30} />
<Range size="sm" min={0} max={100} defaultValue={40} />
<Range size="md" min={0} max={100} defaultValue={50} />
<Range size="lg" min={0} max={100} defaultValue={60} />
<Range size="xl" min={0} max={100} defaultValue={70} />

<Range size="small" min={0} max={100} defaultValue={35} />
<Range size="medium" min={0} max={100} defaultValue={55} />
<Range size="large" min={0} max={100} defaultValue={75} />`});t(()=>p(e,u,U))});let W=a(`rue:component:anchor`);n(u,W),o(()=>{let e=h(D,{title:`受控提交`,summary:`拖动中用 onValueChange 更新即时反馈，松手后用 onValueCommit 记录确认值。`,tab:I,preview:()=>y(j,{}),code:`const seats = ref(12)
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
/>`});t(()=>p(e,u,W))});let G=a(`rue:component:anchor`);n(u,G),o(()=>{let e=h(D,{title:`Range with custom color and no fill`,summary:`原来的自定义 CSS 变量方案继续可用；增强 API 不会挡住底层变量覆写。`,tab:L,preview:()=>y(P,{}),code:`<Range
  min={0}
  max={100}
  defaultValue={40}
  showValue={{ formatter: currentValue => 'mix ' + currentValue }}
  className="text-blue-300 [--range-bg:orange] [--range-thumb:blue] [--range-fill:0]"
/>`});t(()=>p(e,u,G))});let K=i(`div`,u);n(u,K),m(K,`component-preview not-prose text-base-content my-6 lg:my-12`);let q=i(`h2`,K);n(K,q),m(q,`component-preview-title mt-2 mb-3 text-lg font-semibold`),n(q,e(`# API`));let J=i(`p`,K);n(K,J),m(J,`mb-4 text-sm text-base-content/70`),n(J,e(`不做增强展示时，Range 仍然是一个直接透传原生属性的滑杆；一旦传入`));let Y=i(`code`,J);n(J,Y),n(Y,e(`label`)),n(J,e(`、`));let X=i(`code`,J);n(J,X),n(X,e(`showValue`)),n(J,e(`、`));let Z=i(`code`,J);n(J,Z),n(Z,e(`marks`)),n(J,e(`等属性，就会自动切换到更完整的展示结构。`));let Q=a(`rue:component:anchor`);return n(K,Q),o(()=>{let e=h(O,{rows:F});t(()=>p(e,K,Q))}),r})}),f,g),f})};export{I as default};