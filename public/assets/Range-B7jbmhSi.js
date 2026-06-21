import{$t as e,Jt as t,Q as n,dt as r,et as i,in as a,it as o,l as s,lt as c,nt as l,o as u,rt as d,t as f,tt as p,vt as m,zt as h}from"./vapor-runtime-DsQWl-IB.js";import{a as g,n as _}from"./vapor-helpers-vapor-Dg64FcpK.js";import{a as v,i as y}from"./persistentSidebarPlayground-6jqnvaEa.js";import{t as b}from"./Code-4SUSUwRg.js";import{t as x}from"./tabs-Duzh3URW.js";import{t as S}from"./range-C1fwVDpw.js";import{r as C}from"./SidebarPlaygroundDesign-EU389JDE.js";var w=[`neutral`,`primary`,`secondary`,`accent`,`success`,`warning`,`info`,`error`],T=[`xs`,`sm`,`md`,`lg`,`xl`],E=[`small`,`medium`,`large`],D=t=>s(a=>{let o=l(`div`,a);r(o,`component-preview not-prose text-base-content my-6 lg:my-12`);let c=l(`div`,o);n(o,c),r(c,`flex flex-wrap items-start justify-between gap-3`);let m=l(`div`,c);n(c,m);let g=l(`h2`,m);n(m,g),r(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(g,d(`# `));let _=i(`rue:slot:anchor`);n(g,_),h(()=>{let n=t.title;e(()=>u(n,g,_))});let v=i(`rue:slot:anchor`);n(m,v),h(()=>{let a=t.summary?s(()=>{let a=p(),o=l(`p`,a);n(a,o),r(o,`m-0 text-sm opacity-70`);let s=i(`rue:slot:anchor`);return n(o,s),h(()=>{let n=t.summary;e(()=>u(n,o,s))}),a}):``;e(()=>u(a,m,v))});let y=i(`rue:component:anchor`);n(o,y),h(()=>{let n=f(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:t.tab.value,onChange:e=>t.tab.value=e,className:`mb-3 mt-4`});e(()=>u(n,o,y))});let S=i(`rue:slot:anchor`);return n(o,S),h(()=>{let r=t.tab.value===`preview`?t.preview():s(()=>{let r=p(),a=i(`rue:component:anchor`);return n(r,a),h(()=>{let n=f(b,{className:`mt-2`,lang:`tsx`,code:t.code});e(()=>u(n,r,a))}),r});e(()=>u(r,o,S))}),o}),O=t=>s(a=>{let o=l(`div`,a);r(o,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=l(`table`,o);n(o,f),r(f,`table table-zebra`);let m=l(`thead`,f);n(f,m);let g=l(`tr`,m);n(m,g);let v=l(`th`,g);n(g,v),n(v,d(`属性`));let y=l(`th`,g);n(g,y),n(y,d(`说明`));let b=l(`th`,g);n(g,b),n(b,d(`类型`));let x=l(`th`,g);n(g,x),n(x,d(`默认值`));let S=l(`tbody`,f);n(f,S);let C=i(`rue:list:start`),w=i(`rue:list:end`);n(S,C),n(S,w);let T=new Map;return h(()=>{T=_({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,r,a,o,d)=>{u(s(()=>{let r=p(),a=l(`tr`,r);n(r,a),h(()=>{c(a,`key`,String(t.prop))});let o=l(`td`,a);n(a,o);let s=l(`code`,o);n(o,s);let d=i(`rue:slot:anchor`);n(s,d),h(()=>{let n=t.prop;e(()=>u(n,s,d))});let f=l(`td`,a);n(a,f);let m=i(`rue:slot:anchor`);n(f,m),h(()=>{let n=t.description;e(()=>u(n,f,m))});let g=l(`td`,a);n(a,g);let _=l(`code`,g);n(g,_);let v=i(`rue:slot:anchor`);n(_,v),h(()=>{let n=t.type;e(()=>u(n,_,v))});let y=l(`td`,a);n(a,y);let b=l(`code`,y);n(y,b);let x=i(`rue:slot:anchor`);return n(b,x),h(()=>{let n=t.defaultValue;e(()=>u(n,b,x))}),r}),r,a)}})}),o}),k=()=>{let{sliderValue:e}=g(`useSetup:0:0`,()=>a(()=>({sliderValue:g(`ref:1:0`,()=>t(`40`))})));return s(t=>{let a=l(`div`,t);r(a,`w-full max-w-xs space-y-3`);let s=i(`rue:component:anchor`);n(a,s),u(f(S,{"data-testid":`range-basic`,min:0,max:100,defaultValue:40,onValueChange:t=>{e.value=String(t)}}),a,s);let c=l(`p`,a);n(a,c),r(c,`m-0 text-sm text-base-content/70`),n(c,d(`当前值：`));let p=o(c);return n(c,p),h(()=>{m(p,e.value)}),a})},A=()=>{let{bandwidth:c}=g(`useSetup:0:0:dup1`,()=>a(()=>({bandwidth:g(`ref:1:1`,()=>t(250))})));return s(t=>{let a=l(`div`,t);r(a,`w-full max-w-lg space-y-4 rounded-box border border-base-300 bg-base-100 p-5`);let s=i(`rue:component:anchor`);n(a,s),h(()=>{let t=f(S,{min:100,max:1e3,step:50,defaultValue:250,color:`primary`,label:`边缘带宽`,hint:`滑动查看不同档位的交付能力。`,helper:`超过 500 Mbps 后，建议同步升级防护策略与监控采样。`,showValue:{formatter:e=>`${e} Mbps`},marks:[{value:100,label:`Lite`},{value:250,label:`Start`},{value:500,label:`Growth`},{value:750,label:`Scale`},{value:1e3,label:`Max`}],onValueChange:e=>{c.value=e}});e(()=>u(t,a,s))});let p=l(`div`,a);n(a,p),r(p,`grid gap-3 rounded-box bg-base-200/70 p-4 text-sm sm:grid-cols-3`);let g=l(`div`,p);n(p,g);let _=l(`div`,g);n(g,_),r(_,`text-xs uppercase tracking-wide text-base-content/50`),n(_,d(`每秒请求`));let v=l(`div`,g);n(g,v),r(v,`mt-1 text-lg font-semibold text-base-content`);let y=o(v);n(v,y),h(()=>{m(y,Math.round(c.value/10*18))}),n(v,d(`k`));let b=l(`div`,p);n(p,b);let x=l(`div`,b);n(b,x),r(x,`text-xs uppercase tracking-wide text-base-content/50`),n(x,d(`区域副本`));let C=l(`div`,b);n(b,C),r(C,`mt-1 text-lg font-semibold text-base-content`);let w=o(C);n(C,w),h(()=>{m(w,c.value>=500?`6 个`:`3 个`)});let T=l(`div`,p);n(p,T);let E=l(`div`,T);n(T,E),r(E,`text-xs uppercase tracking-wide text-base-content/50`),n(E,d(`推荐套餐`));let D=l(`div`,T);n(T,D),r(D,`mt-1 text-lg font-semibold text-base-content`);let O=o(D);return n(D,O),h(()=>{m(O,c.value>=750?`Enterprise`:c.value>=500?`Scale`:c.value>=250?`Growth`:`Starter`)}),a})},j=()=>{let{seats:c,committedSeats:p}=g(`useSetup:0:0:dup2`,()=>a(()=>({seats:g(`ref:1:2`,()=>t(12)),committedSeats:g(`ref:1:3`,()=>t(12))})));return s(t=>{let a=l(`div`,t);r(a,`w-full max-w-lg rounded-box border border-base-300 bg-base-100 p-5`);let s=i(`rue:component:anchor`);n(a,s),h(()=>{let t=f(S,{min:5,max:60,step:5,defaultValue:12,color:`secondary`,showValue:{formatter:e=>`${e} seats`,placement:`below`},label:`团队席位`,hint:`拖动时实时更新预算，松手后再提交确认值。`,marks:[5,15,30,45,60],onValueChange:e=>{c.value=e},onValueCommit:e=>{p.value=e}});e(()=>u(t,a,s))});let g=l(`div`,a);n(a,g),r(g,`mt-4 grid gap-3 text-sm sm:grid-cols-2`);let _=l(`div`,g);n(g,_),r(_,`rounded-box bg-base-200/70 p-4`);let v=l(`div`,_);n(_,v),r(v,`text-xs uppercase tracking-wide text-base-content/50`),n(v,d(`实时预算`));let y=l(`div`,_);n(_,y),r(y,`mt-2 text-lg font-semibold text-base-content`),n(y,d(`¥ `));let b=o(y);n(y,b),h(()=>{m(b,c.value*129)}),n(y,d(` / 月`));let x=l(`div`,g);n(g,x),r(x,`rounded-box bg-base-200/70 p-4`);let C=l(`div`,x);n(x,C),r(C,`text-xs uppercase tracking-wide text-base-content/50`),n(C,d(`已确认席位`));let w=l(`div`,x);n(x,w),r(w,`mt-2 text-lg font-semibold text-base-content`);let T=o(w);return n(w,T),h(()=>{m(T,p.value)}),n(w,d(` seats`)),a})},M=()=>s(t=>{let a=l(`div`,t);r(a,`w-full max-w-sm`);let o=i(`rue:component:anchor`);return n(a,o),h(()=>{let t=f(S,{min:0,max:100,defaultValue:25,step:25,showValue:{placement:`below`,formatter:e=>`${e}%`},marks:[{value:0,label:`1`},{value:25,label:`2`},{value:50,label:`3`},{value:75,label:`4`},{value:100,label:`5`}]});e(()=>u(t,a,o))}),a}),N=()=>s(t=>{let a=l(`div`,t);r(a,`grid gap-4`);let d=i(`rue:list:start`),g=i(`rue:list:end`);n(a,d),n(a,g);let v=new Map;return h(()=>{v=_({items:w||[],getKey:(e,t)=>e,elements:v,parent:d.parentNode,before:g,singleRoot:!0,trackIndex:!1,start:d,renderItem:(t,a,d,g,_)=>{u(s(()=>{let a=p(),s=l(`div`,a);n(a,s),h(()=>{c(s,`key`,String(t))}),r(s,`space-y-2 rounded-box border border-base-300 bg-base-100 p-4`);let d=l(`div`,s);n(s,d),r(d,`text-xs uppercase tracking-wide text-base-content/60`);let g=o(d);n(d,g),h(()=>{m(g,t)});let _=i(`rue:component:anchor`);return n(s,_),h(()=>{let n=f(S,{color:t,min:0,max:100,defaultValue:40,showValue:!0});e(()=>u(n,s,_))}),a}),a,d)}})}),a}),P=()=>s(t=>{let a=l(`div`,t);r(a,`w-full max-w-sm space-y-3 rounded-box border border-base-300 bg-base-100 p-4`);let o=i(`rue:component:anchor`);return n(a,o),h(()=>{let t=f(S,{min:0,max:100,defaultValue:40,showValue:{formatter:e=>`mix ${e}`},className:`text-blue-300 [--range-bg:orange] [--range-thumb:blue] [--range-fill:0]`});e(()=>u(t,a,o))}),a}),F=[{prop:`className`,description:`追加到原生 input 的类名，适合继续覆写 CSS 变量`,type:`string`,defaultValue:`-`},{prop:`color`,description:`语义色，映射到 range-* 颜色类`,type:`'neutral' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'info' | 'error'`,defaultValue:`-`},{prop:`defaultValue`,description:`非受控初始值`,type:`string | number`,defaultValue:`-`},{prop:`formatter`,description:`值格式化函数，可与 showValue 组合使用`,type:`(value: number, info: { min: number; max: number; percent: number }) => any`,defaultValue:`-`},{prop:`helper`,description:`底部辅助文案`,type:`any`,defaultValue:`-`},{prop:`hint`,description:`标题下方的简短说明`,type:`any`,defaultValue:`-`},{prop:`label`,description:`顶部标题，自动关联 input id`,type:`any`,defaultValue:`-`},{prop:`marks`,description:`刻度点，可传 number / string 或 { value, label } 数组`,type:`Array<string | number | { value: string | number; label?: any }>`,defaultValue:`-`},{prop:`max`,description:`最大值`,type:`string | number`,defaultValue:`100`},{prop:`min`,description:`最小值`,type:`string | number`,defaultValue:`0`},{prop:`onValueChange`,description:`拖动过程中的语义回调，返回解析后的 number`,type:`(value: number, event: Event) => void`,defaultValue:`-`},{prop:`onValueCommit`,description:`原生 change 阶段的语义回调，适合提交确认值`,type:`(value: number, event: Event) => void`,defaultValue:`-`},{prop:`rootClassName`,description:`增强结构外层容器类名，仅在展示层激活时生效`,type:`string`,defaultValue:`-`},{prop:`showValue`,description:`显示当前值，可配置 formatter、placement 和 className`,type:`boolean | { formatter?: (value: number, info: { min: number; max: number; percent: number }) => any; placement?: 'inline' | 'below'; className?: string }`,defaultValue:`false`},{prop:`size`,description:`尺寸，支持 xs-xl 以及 small / medium / large 别名`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'medium' | 'large'`,defaultValue:`'md'`},{prop:`step`,description:`步长`,type:`string | number`,defaultValue:`1`},{prop:`value`,description:`受控值`,type:`string | number`,defaultValue:`-`}],I=()=>{let{tabBasic:c,tabStory:_,tabSteps:b,tabColors:x,tabSizes:w,tabCommit:I,tabCustom:L}=g(`useSetup:0:0:dup3`,()=>a(()=>({tabBasic:g(`ref:1:4`,()=>t(`preview`)),tabStory:g(`ref:1:5`,()=>t(`preview`)),tabSteps:g(`ref:1:6`,()=>t(`preview`)),tabColors:g(`ref:1:7`,()=>t(`preview`)),tabSizes:g(`ref:1:8`,()=>t(`preview`)),tabCommit:g(`ref:1:9`,()=>t(`preview`)),tabCustom:g(`ref:1:10`,()=>t(`preview`))})));return s(t=>{let a=p(),g=i(`rue:component:anchor`);return n(a,g),u(f(C,{children:s(()=>{let t=p(),a=l(`div`,t);n(t,a),r(a,`max-w-none prose prose-sm md:prose-base`);let s=l(`h1`,a);n(a,s),n(s,d(`Range Slider 范围选择`));let g=l(`p`,a);n(a,g),r(g,`mt-3 mb-3 text-sm`),n(g,d(`Range 仍然坚持原生`));let C=l(`code`,g);n(g,C),n(C,d(`input type="range"`));let R=o(g);n(g,R),m(R,` `),n(g,d(`的语义，但不再只是一条裸滑杆。现在可以直接在组件层补充标题、提示、刻度、值展示和语义回调，设计页也按能力分层重新组织。`));let z=i(`rue:component:anchor`);n(a,z),h(()=>{let t=f(D,{title:`Range`,summary:`展示最小写法；如果你只想要一个原生滑杆，API 仍然保持直接。`,tab:c,preview:()=>y(k,{}),code:`<Range min={0} max={100} value={40} />`});e(()=>u(t,a,z))});let B=i(`rue:component:anchor`);n(a,B),h(()=>{let t=f(D,{title:`带文案与实时值`,summary:`把 label、hint、helper、showValue 和 marks 叠到组件自身，适合做套餐档位和配置面板。`,tab:_,preview:()=>y(A,{}),code:`const bandwidth = ref(250)

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
/>`});e(()=>u(t,a,B))});let V=i(`rue:component:anchor`);n(a,V),h(()=>{let t=f(D,{title:`With steps and measure`,summary:`基础示例 保持，但把刻度线和标签收进 marks，减少样板代码。`,tab:b,preview:()=>y(M,{}),code:`<Range
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
/>`});e(()=>u(t,a,V))});let H=i(`rue:component:anchor`);n(a,H),h(()=>{let t=f(D,{title:`Range colors`,summary:`使用颜色矩阵，同时展示语义 API 与颜色类可以自然叠加。`,tab:x,preview:()=>y(N,{}),code:`const colors = ['neutral', 'primary', 'secondary', 'accent', 'success', 'warning', 'info', 'error'] as const

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
</div>`});e(()=>u(t,a,H))});let U=i(`rue:component:anchor`);n(a,U),h(()=>{let t=f(D,{title:`Sizes`,summary:`展示 xs 到 xl 的基础尺寸，同时补上 small / medium / large 三个别名，方便和其他组件对齐。`,tab:w,preview:()=>v(`div`,{className:`space-y-6`,children:[y(`div`,{className:`flex w-full max-w-sm flex-col gap-4`,children:T.map((e,t)=>y(S,{size:e,min:0,max:100,defaultValue:30+t*10},e))}),y(`div`,{className:`grid gap-3 rounded-box border border-dashed border-base-300 bg-base-100 p-4 text-sm sm:grid-cols-3`,children:E.map((e,t)=>v(`div`,{className:`space-y-2`,children:[y(`div`,{className:`text-xs uppercase tracking-wide text-base-content/60`,children:e}),y(S,{size:e,min:0,max:100,defaultValue:35+t*20})]},e))})]}),code:`<Range size="xs" min={0} max={100} defaultValue={30} />
<Range size="sm" min={0} max={100} defaultValue={40} />
<Range size="md" min={0} max={100} defaultValue={50} />
<Range size="lg" min={0} max={100} defaultValue={60} />
<Range size="xl" min={0} max={100} defaultValue={70} />

<Range size="small" min={0} max={100} defaultValue={35} />
<Range size="medium" min={0} max={100} defaultValue={55} />
<Range size="large" min={0} max={100} defaultValue={75} />`});e(()=>u(t,a,U))});let W=i(`rue:component:anchor`);n(a,W),h(()=>{let t=f(D,{title:`受控提交`,summary:`拖动中用 onValueChange 更新即时反馈，松手后用 onValueCommit 记录确认值。`,tab:I,preview:()=>y(j,{}),code:`const seats = ref(12)
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
/>`});e(()=>u(t,a,W))});let G=i(`rue:component:anchor`);n(a,G),h(()=>{let t=f(D,{title:`Range with custom color and no fill`,summary:`基础的自定义 CSS 变量方案继续可用；语义 API 不会挡住底层变量覆写。`,tab:L,preview:()=>y(P,{}),code:`<Range
  min={0}
  max={100}
  defaultValue={40}
  showValue={{ formatter: currentValue => 'mix ' + currentValue }}
  className="text-blue-300 [--range-bg:orange] [--range-thumb:blue] [--range-fill:0]"
/>`});e(()=>u(t,a,G))});let K=l(`div`,a);n(a,K),r(K,`component-preview not-prose text-base-content my-6 lg:my-12`);let q=l(`h2`,K);n(K,q),r(q,`component-preview-title mt-2 mb-3 text-lg font-semibold`),n(q,d(`# API`));let J=l(`p`,K);n(K,J),r(J,`mb-4 text-sm text-base-content/70`),n(J,d(`不做增强展示时，Range 仍然是一个直接透传原生属性的滑杆；一旦传入`));let Y=l(`code`,J);n(J,Y),n(Y,d(`label`)),n(J,d(`、`));let X=l(`code`,J);n(J,X),n(X,d(`showValue`)),n(J,d(`、`));let Z=l(`code`,J);n(J,Z),n(Z,d(`marks`)),n(J,d(`等属性，就会自动切换到更完整的展示结构。`));let Q=i(`rue:component:anchor`);return n(K,Q),h(()=>{let t=f(O,{rows:F});e(()=>u(t,K,Q))}),t})}),a,g),a})};export{I as default};