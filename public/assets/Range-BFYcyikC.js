import{Cn as e,Ct as t,Mt as n,Tt as r,dt as i,ft as a,ht as o,mt as s,pn as c,pt as l,st as u,tn as d,vn as f}from"./context-8lXZvIn-.js";import{l as p,o as m,t as h}from"./vapor-runtime-ygJWVcNn.js";import{a as g,n as _}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as v}from"./Code-DhoWkRkB.js";import{n as y,t as b}from"./src-CCTNpCXV.js";import{t as x}from"./tabs-B1XdBEJF.js";import{t as S}from"./range-BiuYBi3W.js";import{r as C}from"./SidebarPlaygroundDesign-BbUFY3mM.js";var w=[`neutral`,`primary`,`secondary`,`accent`,`success`,`warning`,`info`,`error`],T=[`xs`,`sm`,`md`,`lg`,`xl`],E=[`small`,`medium`,`large`],D=e=>p(t=>{let n=l(`div`,t);r(n,`component-preview not-prose text-base-content my-6 lg:my-12`);let o=l(`div`,n);u(n,o),r(o,`flex flex-wrap items-start justify-between gap-3`);let c=l(`div`,o);u(o,c);let g=l(`h2`,c);u(c,g),r(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),u(g,s(`# `));let _=i(`rue:slot:anchor`);u(g,_),d(()=>{let t=e.title;f(()=>m(t,g,_))});let y=i(`rue:slot:anchor`);u(c,y),d(()=>{let t=e.summary?p(()=>{let t=a(),n=l(`p`,t);u(t,n),r(n,`m-0 text-sm opacity-70`);let o=i(`rue:slot:anchor`);return u(n,o),d(()=>{let t=e.summary;f(()=>m(t,n,o))}),t}):``;f(()=>m(t,c,y))});let b=i(`rue:component:anchor`);u(n,b),d(()=>{let t=h(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`});f(()=>m(t,n,b))});let S=i(`rue:slot:anchor`);return u(n,S),d(()=>{let t=e.tab.value===`preview`?e.preview():p(()=>{let t=a(),n=i(`rue:component:anchor`);return u(t,n),d(()=>{let r=h(v,{className:`mt-2`,lang:`tsx`,code:e.code});f(()=>m(r,t,n))}),t});f(()=>m(t,n,S))}),n}),O=e=>p(n=>{let o=l(`div`,n);r(o,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let c=l(`table`,o);u(o,c),r(c,`table table-zebra`);let h=l(`thead`,c);u(c,h);let g=l(`tr`,h);u(h,g);let v=l(`th`,g);u(g,v),u(v,s(`属性`));let y=l(`th`,g);u(g,y),u(y,s(`说明`));let b=l(`th`,g);u(g,b),u(b,s(`类型`));let x=l(`th`,g);u(g,x),u(x,s(`默认值`));let S=l(`tbody`,c);u(c,S);let C=i(`rue:list:start`),w=i(`rue:list:end`);u(S,C),u(S,w);let T=new Map;return d(()=>{T=_({items:e.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,n,r,o,s)=>{m(p(()=>{let n=a(),r=l(`tr`,n);u(n,r),d(()=>{t(r,`key`,String(e.prop))});let o=l(`td`,r);u(r,o);let s=l(`code`,o);u(o,s);let c=i(`rue:slot:anchor`);u(s,c),d(()=>{let t=e.prop;f(()=>m(t,s,c))});let p=l(`td`,r);u(r,p);let h=i(`rue:slot:anchor`);u(p,h),d(()=>{let t=e.description;f(()=>m(t,p,h))});let g=l(`td`,r);u(r,g);let _=l(`code`,g);u(g,_);let v=i(`rue:slot:anchor`);u(_,v),d(()=>{let t=e.type;f(()=>m(t,_,v))});let y=l(`td`,r);u(r,y);let b=l(`code`,y);u(y,b);let x=i(`rue:slot:anchor`);return u(b,x),d(()=>{let t=e.defaultValue;f(()=>m(t,b,x))}),n}),n,r)}})}),o}),k=()=>{let{sliderValue:t}=g(`useSetup:0:0`,()=>e(()=>({sliderValue:g(`ref:1:0`,()=>c(`40`))})));return p(e=>{let a=l(`div`,e);r(a,`w-full max-w-xs space-y-3`);let c=i(`rue:component:anchor`);u(a,c),m(h(S,{"data-testid":`range-basic`,min:0,max:100,defaultValue:40,onValueChange:e=>{t.value=String(e)}}),a,c);let f=l(`p`,a);u(a,f),r(f,`m-0 text-sm text-base-content/70`),u(f,s(`当前值：`));let p=o(f);return u(f,p),d(()=>{n(p,t.value)}),a})},A=()=>{let{bandwidth:t}=g(`useSetup:0:0:dup1`,()=>e(()=>({bandwidth:g(`ref:1:1`,()=>c(250))})));return p(e=>{let a=l(`div`,e);r(a,`w-full max-w-lg space-y-4 rounded-box border border-base-300 bg-base-100 p-5`);let c=i(`rue:component:anchor`);u(a,c),d(()=>{let e=h(S,{min:100,max:1e3,step:50,defaultValue:250,color:`primary`,label:`边缘带宽`,hint:`滑动查看不同档位的交付能力。`,helper:`超过 500 Mbps 后，建议同步升级防护策略与监控采样。`,showValue:{formatter:e=>`${e} Mbps`},marks:[{value:100,label:`Lite`},{value:250,label:`Start`},{value:500,label:`Growth`},{value:750,label:`Scale`},{value:1e3,label:`Max`}],onValueChange:e=>{t.value=e}});f(()=>m(e,a,c))});let p=l(`div`,a);u(a,p),r(p,`grid gap-3 rounded-box bg-base-200/70 p-4 text-sm sm:grid-cols-3`);let g=l(`div`,p);u(p,g);let _=l(`div`,g);u(g,_),r(_,`text-xs uppercase tracking-wide text-base-content/50`),u(_,s(`每秒请求`));let v=l(`div`,g);u(g,v),r(v,`mt-1 text-lg font-semibold text-base-content`);let y=o(v);u(v,y),d(()=>{n(y,Math.round(t.value/10*18))}),u(v,s(`k`));let b=l(`div`,p);u(p,b);let x=l(`div`,b);u(b,x),r(x,`text-xs uppercase tracking-wide text-base-content/50`),u(x,s(`区域副本`));let C=l(`div`,b);u(b,C),r(C,`mt-1 text-lg font-semibold text-base-content`);let w=o(C);u(C,w),d(()=>{n(w,t.value>=500?`6 个`:`3 个`)});let T=l(`div`,p);u(p,T);let E=l(`div`,T);u(T,E),r(E,`text-xs uppercase tracking-wide text-base-content/50`),u(E,s(`推荐套餐`));let D=l(`div`,T);u(T,D),r(D,`mt-1 text-lg font-semibold text-base-content`);let O=o(D);return u(D,O),d(()=>{n(O,t.value>=750?`Enterprise`:t.value>=500?`Scale`:t.value>=250?`Growth`:`Starter`)}),a})},j=()=>{let{seats:t,committedSeats:a}=g(`useSetup:0:0:dup2`,()=>e(()=>({seats:g(`ref:1:2`,()=>c(12)),committedSeats:g(`ref:1:3`,()=>c(12))})));return p(e=>{let c=l(`div`,e);r(c,`w-full max-w-lg rounded-box border border-base-300 bg-base-100 p-5`);let p=i(`rue:component:anchor`);u(c,p),d(()=>{let e=h(S,{min:5,max:60,step:5,defaultValue:12,color:`secondary`,showValue:{formatter:e=>`${e} seats`,placement:`below`},label:`团队席位`,hint:`拖动时实时更新预算，松手后再提交确认值。`,marks:[5,15,30,45,60],onValueChange:e=>{t.value=e},onValueCommit:e=>{a.value=e}});f(()=>m(e,c,p))});let g=l(`div`,c);u(c,g),r(g,`mt-4 grid gap-3 text-sm sm:grid-cols-2`);let _=l(`div`,g);u(g,_),r(_,`rounded-box bg-base-200/70 p-4`);let v=l(`div`,_);u(_,v),r(v,`text-xs uppercase tracking-wide text-base-content/50`),u(v,s(`实时预算`));let y=l(`div`,_);u(_,y),r(y,`mt-2 text-lg font-semibold text-base-content`),u(y,s(`¥ `));let b=o(y);u(y,b),d(()=>{n(b,t.value*129)}),u(y,s(` / 月`));let x=l(`div`,g);u(g,x),r(x,`rounded-box bg-base-200/70 p-4`);let C=l(`div`,x);u(x,C),r(C,`text-xs uppercase tracking-wide text-base-content/50`),u(C,s(`已确认席位`));let w=l(`div`,x);u(x,w),r(w,`mt-2 text-lg font-semibold text-base-content`);let T=o(w);return u(w,T),d(()=>{n(T,a.value)}),u(w,s(` seats`)),c})},M=()=>p(e=>{let t=l(`div`,e);r(t,`w-full max-w-sm`);let n=i(`rue:component:anchor`);return u(t,n),d(()=>{let e=h(S,{min:0,max:100,defaultValue:25,step:25,showValue:{placement:`below`,formatter:e=>`${e}%`},marks:[{value:0,label:`1`},{value:25,label:`2`},{value:50,label:`3`},{value:75,label:`4`},{value:100,label:`5`}]});f(()=>m(e,t,n))}),t}),N=()=>p(e=>{let s=l(`div`,e);r(s,`grid gap-4`);let c=i(`rue:list:start`),g=i(`rue:list:end`);u(s,c),u(s,g);let v=new Map;return d(()=>{v=_({items:w||[],getKey:(e,t)=>e,elements:v,parent:c.parentNode,before:g,singleRoot:!0,trackIndex:!1,start:c,renderItem:(e,s,c,g,_)=>{m(p(()=>{let s=a(),c=l(`div`,s);u(s,c),d(()=>{t(c,`key`,String(e))}),r(c,`space-y-2 rounded-box border border-base-300 bg-base-100 p-4`);let p=l(`div`,c);u(c,p),r(p,`text-xs uppercase tracking-wide text-base-content/60`);let g=o(p);u(p,g),d(()=>{n(g,e)});let _=i(`rue:component:anchor`);return u(c,_),d(()=>{let t=h(S,{color:e,min:0,max:100,defaultValue:40,showValue:!0});f(()=>m(t,c,_))}),s}),s,c)}})}),s}),P=()=>p(e=>{let t=l(`div`,e);r(t,`w-full max-w-sm space-y-3 rounded-box border border-base-300 bg-base-100 p-4`);let n=i(`rue:component:anchor`);return u(t,n),d(()=>{let e=h(S,{min:0,max:100,defaultValue:40,showValue:{formatter:e=>`mix ${e}`},className:`text-blue-300 [--range-bg:orange] [--range-thumb:blue] [--range-fill:0]`});f(()=>m(e,t,n))}),t}),F=[{prop:`className`,description:`追加到原生 input 的类名，适合继续覆写 CSS 变量`,type:`string`,defaultValue:`-`},{prop:`color`,description:`语义色，映射到 range-* 颜色类`,type:`'neutral' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'info' | 'error'`,defaultValue:`-`},{prop:`defaultValue`,description:`非受控初始值`,type:`string | number`,defaultValue:`-`},{prop:`formatter`,description:`值格式化函数，可与 showValue 组合使用`,type:`(value: number, info: { min: number; max: number; percent: number }) => any`,defaultValue:`-`},{prop:`helper`,description:`底部辅助文案`,type:`any`,defaultValue:`-`},{prop:`hint`,description:`标题下方的简短说明`,type:`any`,defaultValue:`-`},{prop:`label`,description:`顶部标题，自动关联 input id`,type:`any`,defaultValue:`-`},{prop:`marks`,description:`刻度点，可传 number / string 或 { value, label } 数组`,type:`Array<string | number | { value: string | number; label?: any }>`,defaultValue:`-`},{prop:`max`,description:`最大值`,type:`string | number`,defaultValue:`100`},{prop:`min`,description:`最小值`,type:`string | number`,defaultValue:`0`},{prop:`onValueChange`,description:`拖动过程中的语义回调，返回解析后的 number`,type:`(value: number, event: Event) => void`,defaultValue:`-`},{prop:`onValueCommit`,description:`原生 change 阶段的语义回调，适合提交确认值`,type:`(value: number, event: Event) => void`,defaultValue:`-`},{prop:`rootClassName`,description:`增强结构外层容器类名，仅在展示层激活时生效`,type:`string`,defaultValue:`-`},{prop:`showValue`,description:`显示当前值，可配置 formatter、placement 和 className`,type:`boolean | { formatter?: (value: number, info: { min: number; max: number; percent: number }) => any; placement?: 'inline' | 'below'; className?: string }`,defaultValue:`false`},{prop:`size`,description:`尺寸，支持 xs-xl 以及 small / medium / large 别名`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'medium' | 'large'`,defaultValue:`'md'`},{prop:`step`,description:`步长`,type:`string | number`,defaultValue:`1`},{prop:`value`,description:`受控值`,type:`string | number`,defaultValue:`-`}],I=()=>{let{tabBasic:t,tabStory:_,tabSteps:v,tabColors:x,tabSizes:w,tabCommit:I,tabCustom:L}=g(`useSetup:0:0:dup3`,()=>e(()=>({tabBasic:g(`ref:1:4`,()=>c(`preview`)),tabStory:g(`ref:1:5`,()=>c(`preview`)),tabSteps:g(`ref:1:6`,()=>c(`preview`)),tabColors:g(`ref:1:7`,()=>c(`preview`)),tabSizes:g(`ref:1:8`,()=>c(`preview`)),tabCommit:g(`ref:1:9`,()=>c(`preview`)),tabCustom:g(`ref:1:10`,()=>c(`preview`))})));return p(e=>{let c=a(),g=i(`rue:component:anchor`);return u(c,g),m(h(C,{children:p(()=>{let e=a(),c=l(`div`,e);u(e,c),r(c,`max-w-none prose prose-sm md:prose-base`);let p=l(`h1`,c);u(c,p),u(p,s(`Range Slider 范围选择`));let g=l(`p`,c);u(c,g),r(g,`mt-3 mb-3 text-sm`),u(g,s(`Range 仍然坚持原生`));let C=l(`code`,g);u(g,C),u(C,s(`input type="range"`));let R=o(g);u(g,R),n(R,` `),u(g,s(`的语义，但不再只是一条裸滑杆。现在可以直接在组件层补充标题、提示、刻度、值展示和语义回调，设计页也按能力分层重新组织。`));let z=i(`rue:component:anchor`);u(c,z),d(()=>{let e=h(D,{title:`Range`,summary:`展示最小写法；如果你只想要一个原生滑杆，API 仍然保持直接。`,tab:t,preview:()=>b(k,{}),code:`<Range min={0} max={100} value={40} />`});f(()=>m(e,c,z))});let B=i(`rue:component:anchor`);u(c,B),d(()=>{let e=h(D,{title:`带文案与实时值`,summary:`把 label、hint、helper、showValue 和 marks 叠到组件自身，适合做套餐档位和配置面板。`,tab:_,preview:()=>b(A,{}),code:`const bandwidth = ref(250)

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
/>`});f(()=>m(e,c,B))});let V=i(`rue:component:anchor`);u(c,V),d(()=>{let e=h(D,{title:`With steps and measure`,summary:`基础示例 保持，但把刻度线和标签收进 marks，减少样板代码。`,tab:v,preview:()=>b(M,{}),code:`<Range
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
/>`});f(()=>m(e,c,V))});let H=i(`rue:component:anchor`);u(c,H),d(()=>{let e=h(D,{title:`Range colors`,summary:`使用颜色矩阵，同时展示语义 API 与颜色类可以自然叠加。`,tab:x,preview:()=>b(N,{}),code:`const colors = ['neutral', 'primary', 'secondary', 'accent', 'success', 'warning', 'info', 'error'] as const

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
</div>`});f(()=>m(e,c,H))});let U=i(`rue:component:anchor`);u(c,U),d(()=>{let e=h(D,{title:`Sizes`,summary:`展示 xs 到 xl 的基础尺寸，同时补上 small / medium / large 三个别名，方便和其他组件对齐。`,tab:w,preview:()=>y(`div`,{className:`space-y-6`,children:[b(`div`,{className:`flex w-full max-w-sm flex-col gap-4`,children:T.map((e,t)=>b(S,{size:e,min:0,max:100,defaultValue:30+t*10},e))}),b(`div`,{className:`grid gap-3 rounded-box border border-dashed border-base-300 bg-base-100 p-4 text-sm sm:grid-cols-3`,children:E.map((e,t)=>y(`div`,{className:`space-y-2`,children:[b(`div`,{className:`text-xs uppercase tracking-wide text-base-content/60`,children:e}),b(S,{size:e,min:0,max:100,defaultValue:35+t*20})]},e))})]}),code:`<Range size="xs" min={0} max={100} defaultValue={30} />
<Range size="sm" min={0} max={100} defaultValue={40} />
<Range size="md" min={0} max={100} defaultValue={50} />
<Range size="lg" min={0} max={100} defaultValue={60} />
<Range size="xl" min={0} max={100} defaultValue={70} />

<Range size="small" min={0} max={100} defaultValue={35} />
<Range size="medium" min={0} max={100} defaultValue={55} />
<Range size="large" min={0} max={100} defaultValue={75} />`});f(()=>m(e,c,U))});let W=i(`rue:component:anchor`);u(c,W),d(()=>{let e=h(D,{title:`受控提交`,summary:`拖动中用 onValueChange 更新即时反馈，松手后用 onValueCommit 记录确认值。`,tab:I,preview:()=>b(j,{}),code:`const seats = ref(12)
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
/>`});f(()=>m(e,c,W))});let G=i(`rue:component:anchor`);u(c,G),d(()=>{let e=h(D,{title:`Range with custom color and no fill`,summary:`基础的自定义 CSS 变量方案继续可用；语义 API 不会挡住底层变量覆写。`,tab:L,preview:()=>b(P,{}),code:`<Range
  min={0}
  max={100}
  defaultValue={40}
  showValue={{ formatter: currentValue => 'mix ' + currentValue }}
  className="text-blue-300 [--range-bg:orange] [--range-thumb:blue] [--range-fill:0]"
/>`});f(()=>m(e,c,G))});let K=l(`div`,c);u(c,K),r(K,`component-preview not-prose text-base-content my-6 lg:my-12`);let q=l(`h2`,K);u(K,q),r(q,`component-preview-title mt-2 mb-3 text-lg font-semibold`),u(q,s(`# API`));let J=l(`p`,K);u(K,J),r(J,`mb-4 text-sm text-base-content/70`),u(J,s(`不做增强展示时，Range 仍然是一个直接透传原生属性的滑杆；一旦传入`));let Y=l(`code`,J);u(J,Y),u(Y,s(`label`)),u(J,s(`、`));let X=l(`code`,J);u(J,X),u(X,s(`showValue`)),u(J,s(`、`));let Z=l(`code`,J);u(J,Z),u(Z,s(`marks`)),u(J,s(`等属性，就会自动切换到更完整的展示结构。`));let Q=i(`rue:component:anchor`);return u(K,Q),d(()=>{let e=h(O,{rows:F});f(()=>m(e,K,Q))}),e})}),c,g),c})};export{I as default};