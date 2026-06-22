import{Q as e,Vt as t,Xt as n,at as r,bt as i,dt as a,it as o,l as s,nt as c,o as l,on as u,pt as d,rt as f,t as p,tn as m,tt as h}from"./vapor-runtime-x7F5M-49.js";import{a as g,n as _}from"./vapor-helpers-vapor-D1LP4JjK.js";import{a as v,o as y}from"./persistentSidebarPlayground-Cl_JMYk5.js";import{t as b}from"./Code-C5NjdoiC.js";import{t as x}from"./tabs-C4UF43sZ.js";import{t as S}from"./range-x-nh3wQu.js";import{r as C}from"./SidebarPlaygroundDesign-Bmw9WJ3p.js";var w=[`neutral`,`primary`,`secondary`,`accent`,`success`,`warning`,`info`,`error`],T=[`xs`,`sm`,`md`,`lg`,`xl`],E=[`small`,`medium`,`large`],D=n=>s(r=>{let i=f(`div`,r);d(i,`component-preview not-prose text-base-content my-6 lg:my-12`);let a=f(`div`,i);e(i,a),d(a,`flex flex-wrap items-start justify-between gap-3`);let u=f(`div`,a);e(a,u);let g=f(`h2`,u);e(u,g),d(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),e(g,o(`# `));let _=h(`rue:slot:anchor`);e(g,_),t(()=>{let e=n.title;m(()=>l(e,g,_))});let v=h(`rue:slot:anchor`);e(u,v),t(()=>{let r=n.summary?s(()=>{let r=c(),i=f(`p`,r);e(r,i),d(i,`m-0 text-sm opacity-70`);let a=h(`rue:slot:anchor`);return e(i,a),t(()=>{let e=n.summary;m(()=>l(e,i,a))}),r}):``;m(()=>l(r,u,v))});let y=h(`rue:component:anchor`);e(i,y),t(()=>{let e=p(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:n.tab.value,onChange:e=>n.tab.value=e,className:`mb-3 mt-4`});m(()=>l(e,i,y))});let S=h(`rue:slot:anchor`);return e(i,S),t(()=>{let r=n.tab.value===`preview`?n.preview():s(()=>{let r=c(),i=h(`rue:component:anchor`);return e(r,i),t(()=>{let e=p(b,{className:`mt-2`,lang:`tsx`,code:n.code});m(()=>l(e,r,i))}),r});m(()=>l(r,i,S))}),i}),O=n=>s(r=>{let i=f(`div`,r);d(i,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let u=f(`table`,i);e(i,u),d(u,`table table-zebra`);let p=f(`thead`,u);e(u,p);let g=f(`tr`,p);e(p,g);let v=f(`th`,g);e(g,v),e(v,o(`属性`));let y=f(`th`,g);e(g,y),e(y,o(`说明`));let b=f(`th`,g);e(g,b),e(b,o(`类型`));let x=f(`th`,g);e(g,x),e(x,o(`默认值`));let S=f(`tbody`,u);e(u,S);let C=h(`rue:list:start`),w=h(`rue:list:end`);e(S,C),e(S,w);let T=new Map;return t(()=>{T=_({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,r,i,o,u)=>{l(s(()=>{let r=c(),i=f(`tr`,r);e(r,i),t(()=>{a(i,`key`,String(n.prop))});let o=f(`td`,i);e(i,o);let s=f(`code`,o);e(o,s);let u=h(`rue:slot:anchor`);e(s,u),t(()=>{let e=n.prop;m(()=>l(e,s,u))});let d=f(`td`,i);e(i,d);let p=h(`rue:slot:anchor`);e(d,p),t(()=>{let e=n.description;m(()=>l(e,d,p))});let g=f(`td`,i);e(i,g);let _=f(`code`,g);e(g,_);let v=h(`rue:slot:anchor`);e(_,v),t(()=>{let e=n.type;m(()=>l(e,_,v))});let y=f(`td`,i);e(i,y);let b=f(`code`,y);e(y,b);let x=h(`rue:slot:anchor`);return e(b,x),t(()=>{let e=n.defaultValue;m(()=>l(e,b,x))}),r}),r,i)}})}),i}),k=()=>{let{sliderValue:a}=g(`useSetup:0:0`,()=>u(()=>({sliderValue:g(`ref:1:0`,()=>n(`40`))})));return s(n=>{let s=f(`div`,n);d(s,`w-full max-w-xs space-y-3`);let c=h(`rue:component:anchor`);e(s,c),l(p(S,{"data-testid":`range-basic`,min:0,max:100,defaultValue:40,onValueChange:e=>{a.value=String(e)}}),s,c);let u=f(`p`,s);e(s,u),d(u,`m-0 text-sm text-base-content/70`),e(u,o(`当前值：`));let m=r(u);return e(u,m),t(()=>{i(m,a.value)}),s})},A=()=>{let{bandwidth:a}=g(`useSetup:0:0:dup1`,()=>u(()=>({bandwidth:g(`ref:1:1`,()=>n(250))})));return s(n=>{let s=f(`div`,n);d(s,`w-full max-w-lg space-y-4 rounded-box border border-base-300 bg-base-100 p-5`);let c=h(`rue:component:anchor`);e(s,c),t(()=>{let e=p(S,{min:100,max:1e3,step:50,defaultValue:250,color:`primary`,label:`边缘带宽`,hint:`滑动查看不同档位的交付能力。`,helper:`超过 500 Mbps 后，建议同步升级防护策略与监控采样。`,showValue:{formatter:e=>`${e} Mbps`},marks:[{value:100,label:`Lite`},{value:250,label:`Start`},{value:500,label:`Growth`},{value:750,label:`Scale`},{value:1e3,label:`Max`}],onValueChange:e=>{a.value=e}});m(()=>l(e,s,c))});let u=f(`div`,s);e(s,u),d(u,`grid gap-3 rounded-box bg-base-200/70 p-4 text-sm sm:grid-cols-3`);let g=f(`div`,u);e(u,g);let _=f(`div`,g);e(g,_),d(_,`text-xs uppercase tracking-wide text-base-content/50`),e(_,o(`每秒请求`));let v=f(`div`,g);e(g,v),d(v,`mt-1 text-lg font-semibold text-base-content`);let y=r(v);e(v,y),t(()=>{i(y,Math.round(a.value/10*18))}),e(v,o(`k`));let b=f(`div`,u);e(u,b);let x=f(`div`,b);e(b,x),d(x,`text-xs uppercase tracking-wide text-base-content/50`),e(x,o(`区域副本`));let C=f(`div`,b);e(b,C),d(C,`mt-1 text-lg font-semibold text-base-content`);let w=r(C);e(C,w),t(()=>{i(w,a.value>=500?`6 个`:`3 个`)});let T=f(`div`,u);e(u,T);let E=f(`div`,T);e(T,E),d(E,`text-xs uppercase tracking-wide text-base-content/50`),e(E,o(`推荐套餐`));let D=f(`div`,T);e(T,D),d(D,`mt-1 text-lg font-semibold text-base-content`);let O=r(D);return e(D,O),t(()=>{i(O,a.value>=750?`Enterprise`:a.value>=500?`Scale`:a.value>=250?`Growth`:`Starter`)}),s})},j=()=>{let{seats:a,committedSeats:c}=g(`useSetup:0:0:dup2`,()=>u(()=>({seats:g(`ref:1:2`,()=>n(12)),committedSeats:g(`ref:1:3`,()=>n(12))})));return s(n=>{let s=f(`div`,n);d(s,`w-full max-w-lg rounded-box border border-base-300 bg-base-100 p-5`);let u=h(`rue:component:anchor`);e(s,u),t(()=>{let e=p(S,{min:5,max:60,step:5,defaultValue:12,color:`secondary`,showValue:{formatter:e=>`${e} seats`,placement:`below`},label:`团队席位`,hint:`拖动时实时更新预算，松手后再提交确认值。`,marks:[5,15,30,45,60],onValueChange:e=>{a.value=e},onValueCommit:e=>{c.value=e}});m(()=>l(e,s,u))});let g=f(`div`,s);e(s,g),d(g,`mt-4 grid gap-3 text-sm sm:grid-cols-2`);let _=f(`div`,g);e(g,_),d(_,`rounded-box bg-base-200/70 p-4`);let v=f(`div`,_);e(_,v),d(v,`text-xs uppercase tracking-wide text-base-content/50`),e(v,o(`实时预算`));let y=f(`div`,_);e(_,y),d(y,`mt-2 text-lg font-semibold text-base-content`),e(y,o(`¥ `));let b=r(y);e(y,b),t(()=>{i(b,a.value*129)}),e(y,o(` / 月`));let x=f(`div`,g);e(g,x),d(x,`rounded-box bg-base-200/70 p-4`);let C=f(`div`,x);e(x,C),d(C,`text-xs uppercase tracking-wide text-base-content/50`),e(C,o(`已确认席位`));let w=f(`div`,x);e(x,w),d(w,`mt-2 text-lg font-semibold text-base-content`);let T=r(w);return e(w,T),t(()=>{i(T,c.value)}),e(w,o(` seats`)),s})},M=()=>s(n=>{let r=f(`div`,n);d(r,`w-full max-w-sm`);let i=h(`rue:component:anchor`);return e(r,i),t(()=>{let e=p(S,{min:0,max:100,defaultValue:25,step:25,showValue:{placement:`below`,formatter:e=>`${e}%`},marks:[{value:0,label:`1`},{value:25,label:`2`},{value:50,label:`3`},{value:75,label:`4`},{value:100,label:`5`}]});m(()=>l(e,r,i))}),r}),N=()=>s(n=>{let o=f(`div`,n);d(o,`grid gap-4`);let u=h(`rue:list:start`),g=h(`rue:list:end`);e(o,u),e(o,g);let v=new Map;return t(()=>{v=_({items:w||[],getKey:(e,t)=>e,elements:v,parent:u.parentNode,before:g,singleRoot:!0,trackIndex:!1,start:u,renderItem:(n,o,u,g,_)=>{l(s(()=>{let o=c(),s=f(`div`,o);e(o,s),t(()=>{a(s,`key`,String(n))}),d(s,`space-y-2 rounded-box border border-base-300 bg-base-100 p-4`);let u=f(`div`,s);e(s,u),d(u,`text-xs uppercase tracking-wide text-base-content/60`);let g=r(u);e(u,g),t(()=>{i(g,n)});let _=h(`rue:component:anchor`);return e(s,_),t(()=>{let e=p(S,{color:n,min:0,max:100,defaultValue:40,showValue:!0});m(()=>l(e,s,_))}),o}),o,u)}})}),o}),P=()=>s(n=>{let r=f(`div`,n);d(r,`w-full max-w-sm space-y-3 rounded-box border border-base-300 bg-base-100 p-4`);let i=h(`rue:component:anchor`);return e(r,i),t(()=>{let e=p(S,{min:0,max:100,defaultValue:40,showValue:{formatter:e=>`mix ${e}`},className:`text-blue-300 [--range-bg:orange] [--range-thumb:blue] [--range-fill:0]`});m(()=>l(e,r,i))}),r}),F=[{prop:`className`,description:`追加到原生 input 的类名，适合继续覆写 CSS 变量`,type:`string`,defaultValue:`-`},{prop:`color`,description:`语义色，映射到 range-* 颜色类`,type:`'neutral' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'info' | 'error'`,defaultValue:`-`},{prop:`defaultValue`,description:`非受控初始值`,type:`string | number`,defaultValue:`-`},{prop:`formatter`,description:`值格式化函数，可与 showValue 组合使用`,type:`(value: number, info: { min: number; max: number; percent: number }) => any`,defaultValue:`-`},{prop:`helper`,description:`底部辅助文案`,type:`any`,defaultValue:`-`},{prop:`hint`,description:`标题下方的简短说明`,type:`any`,defaultValue:`-`},{prop:`label`,description:`顶部标题，自动关联 input id`,type:`any`,defaultValue:`-`},{prop:`marks`,description:`刻度点，可传 number / string 或 { value, label } 数组`,type:`Array<string | number | { value: string | number; label?: any }>`,defaultValue:`-`},{prop:`max`,description:`最大值`,type:`string | number`,defaultValue:`100`},{prop:`min`,description:`最小值`,type:`string | number`,defaultValue:`0`},{prop:`onValueChange`,description:`拖动过程中的语义回调，返回解析后的 number`,type:`(value: number, event: Event) => void`,defaultValue:`-`},{prop:`onValueCommit`,description:`原生 change 阶段的语义回调，适合提交确认值`,type:`(value: number, event: Event) => void`,defaultValue:`-`},{prop:`rootClassName`,description:`增强结构外层容器类名，仅在展示层激活时生效`,type:`string`,defaultValue:`-`},{prop:`showValue`,description:`显示当前值，可配置 formatter、placement 和 className`,type:`boolean | { formatter?: (value: number, info: { min: number; max: number; percent: number }) => any; placement?: 'inline' | 'below'; className?: string }`,defaultValue:`false`},{prop:`size`,description:`尺寸，支持 xs-xl 以及 small / medium / large 别名`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'medium' | 'large'`,defaultValue:`'md'`},{prop:`step`,description:`步长`,type:`string | number`,defaultValue:`1`},{prop:`value`,description:`受控值`,type:`string | number`,defaultValue:`-`}],I=()=>{let{tabBasic:a,tabStory:_,tabSteps:b,tabColors:x,tabSizes:w,tabCommit:I,tabCustom:L}=g(`useSetup:0:0:dup3`,()=>u(()=>({tabBasic:g(`ref:1:4`,()=>n(`preview`)),tabStory:g(`ref:1:5`,()=>n(`preview`)),tabSteps:g(`ref:1:6`,()=>n(`preview`)),tabColors:g(`ref:1:7`,()=>n(`preview`)),tabSizes:g(`ref:1:8`,()=>n(`preview`)),tabCommit:g(`ref:1:9`,()=>n(`preview`)),tabCustom:g(`ref:1:10`,()=>n(`preview`))})));return s(n=>{let u=c(),g=h(`rue:component:anchor`);return e(u,g),l(p(C,{children:s(()=>{let n=c(),s=f(`div`,n);e(n,s),d(s,`max-w-none prose prose-sm md:prose-base`);let u=f(`h1`,s);e(s,u),e(u,o(`Range Slider 范围选择`));let g=f(`p`,s);e(s,g),d(g,`mt-3 mb-3 text-sm`),e(g,o(`Range 仍然坚持原生`));let C=f(`code`,g);e(g,C),e(C,o(`input type="range"`));let R=r(g);e(g,R),i(R,` `),e(g,o(`的语义，但不再只是一条裸滑杆。现在可以直接在组件层补充标题、提示、刻度、值展示和语义回调，设计页也按能力分层重新组织。`));let z=h(`rue:component:anchor`);e(s,z),t(()=>{let e=p(D,{title:`Range`,summary:`展示最小写法；如果你只想要一个原生滑杆，API 仍然保持直接。`,tab:a,preview:()=>v(k,{}),code:`<Range min={0} max={100} value={40} />`});m(()=>l(e,s,z))});let B=h(`rue:component:anchor`);e(s,B),t(()=>{let e=p(D,{title:`带文案与实时值`,summary:`把 label、hint、helper、showValue 和 marks 叠到组件自身，适合做套餐档位和配置面板。`,tab:_,preview:()=>v(A,{}),code:`const bandwidth = ref(250)

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
/>`});m(()=>l(e,s,B))});let V=h(`rue:component:anchor`);e(s,V),t(()=>{let e=p(D,{title:`With steps and measure`,summary:`基础示例 保持，但把刻度线和标签收进 marks，减少样板代码。`,tab:b,preview:()=>v(M,{}),code:`<Range
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
/>`});m(()=>l(e,s,V))});let H=h(`rue:component:anchor`);e(s,H),t(()=>{let e=p(D,{title:`Range colors`,summary:`使用颜色矩阵，同时展示语义 API 与颜色类可以自然叠加。`,tab:x,preview:()=>v(N,{}),code:`const colors = ['neutral', 'primary', 'secondary', 'accent', 'success', 'warning', 'info', 'error'] as const

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
</div>`});m(()=>l(e,s,H))});let U=h(`rue:component:anchor`);e(s,U),t(()=>{let e=p(D,{title:`Sizes`,summary:`展示 xs 到 xl 的基础尺寸，同时补上 small / medium / large 三个别名，方便和其他组件对齐。`,tab:w,preview:()=>y(`div`,{className:`space-y-6`,children:[v(`div`,{className:`flex w-full max-w-sm flex-col gap-4`,children:T.map((e,t)=>v(S,{size:e,min:0,max:100,defaultValue:30+t*10},e))}),v(`div`,{className:`grid gap-3 rounded-box border border-dashed border-base-300 bg-base-100 p-4 text-sm sm:grid-cols-3`,children:E.map((e,t)=>y(`div`,{className:`space-y-2`,children:[v(`div`,{className:`text-xs uppercase tracking-wide text-base-content/60`,children:e}),v(S,{size:e,min:0,max:100,defaultValue:35+t*20})]},e))})]}),code:`<Range size="xs" min={0} max={100} defaultValue={30} />
<Range size="sm" min={0} max={100} defaultValue={40} />
<Range size="md" min={0} max={100} defaultValue={50} />
<Range size="lg" min={0} max={100} defaultValue={60} />
<Range size="xl" min={0} max={100} defaultValue={70} />

<Range size="small" min={0} max={100} defaultValue={35} />
<Range size="medium" min={0} max={100} defaultValue={55} />
<Range size="large" min={0} max={100} defaultValue={75} />`});m(()=>l(e,s,U))});let W=h(`rue:component:anchor`);e(s,W),t(()=>{let e=p(D,{title:`受控提交`,summary:`拖动中用 onValueChange 更新即时反馈，松手后用 onValueCommit 记录确认值。`,tab:I,preview:()=>v(j,{}),code:`const seats = ref(12)
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
/>`});m(()=>l(e,s,W))});let G=h(`rue:component:anchor`);e(s,G),t(()=>{let e=p(D,{title:`Range with custom color and no fill`,summary:`基础的自定义 CSS 变量方案继续可用；语义 API 不会挡住底层变量覆写。`,tab:L,preview:()=>v(P,{}),code:`<Range
  min={0}
  max={100}
  defaultValue={40}
  showValue={{ formatter: currentValue => 'mix ' + currentValue }}
  className="text-blue-300 [--range-bg:orange] [--range-thumb:blue] [--range-fill:0]"
/>`});m(()=>l(e,s,G))});let K=f(`div`,s);e(s,K),d(K,`component-preview not-prose text-base-content my-6 lg:my-12`);let q=f(`h2`,K);e(K,q),d(q,`component-preview-title mt-2 mb-3 text-lg font-semibold`),e(q,o(`# API`));let J=f(`p`,K);e(K,J),d(J,`mb-4 text-sm text-base-content/70`),e(J,o(`不做增强展示时，Range 仍然是一个直接透传原生属性的滑杆；一旦传入`));let Y=f(`code`,J);e(J,Y),e(Y,o(`label`)),e(J,o(`、`));let X=f(`code`,J);e(J,X),e(X,o(`showValue`)),e(J,o(`、`));let Z=f(`code`,J);e(J,Z),e(Z,o(`marks`)),e(J,o(`等属性，就会自动切换到更完整的展示结构。`));let Q=h(`rue:component:anchor`);return e(K,Q),t(()=>{let e=p(O,{rows:F});m(()=>l(e,K,Q))}),n})}),u,g),u})};export{I as default};