import{$ as e,Q as t,Qt as n,Wt as r,X as i,Yt as a,et as o,ht as s,l as c,lt as l,nt as u,o as d,st as f,t as p,tt as m,zt as h}from"./vapor-runtime-CXIalONM.js";import{a as g,n as _}from"./vapor-helpers-vapor-CoXKrGmY.js";import{a as v,i as y}from"./persistentSidebarPlayground-DBDp2zjv.js";import{t as b}from"./Code-BIscIyEp.js";import{t as x}from"./tabs-CZWMQq5i.js";import{t as S}from"./range-vFelKrGq.js";import{r as C}from"./SidebarPlaygroundDesign-CsC_YS7V.js";var w=[`neutral`,`primary`,`secondary`,`accent`,`success`,`warning`,`info`,`error`],T=[`xs`,`sm`,`md`,`lg`,`xl`],E=[`small`,`medium`,`large`],D=a=>c(s=>{let u=o(`div`,s);l(u,`component-preview not-prose text-base-content my-6 lg:my-12`);let f=o(`div`,u);i(u,f),l(f,`flex flex-wrap items-start justify-between gap-3`);let h=o(`div`,f);i(f,h);let g=o(`h2`,h);i(h,g),l(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(g,m(`# `));let _=t(`rue:slot:anchor`);i(g,_),n(()=>{let e=a.title;r(()=>d(e,g,_))});let v=t(`rue:slot:anchor`);i(h,v),n(()=>{let s=a.summary?c(()=>{let s=e(),c=o(`p`,s);i(s,c),l(c,`m-0 text-sm opacity-70`);let u=t(`rue:slot:anchor`);return i(c,u),n(()=>{let e=a.summary;r(()=>d(e,c,u))}),s}):``;r(()=>d(s,h,v))});let y=t(`rue:component:anchor`);i(u,y),n(()=>{let e=p(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:a.tab.value,onChange:e=>a.tab.value=e,className:`mb-3 mt-4`});r(()=>d(e,u,y))});let S=t(`rue:slot:anchor`);return i(u,S),n(()=>{let o=a.tab.value===`preview`?a.preview():c(()=>{let o=e(),s=t(`rue:component:anchor`);return i(o,s),n(()=>{let e=p(b,{className:`mt-2`,lang:`tsx`,code:a.code});r(()=>d(e,o,s))}),o});r(()=>d(o,u,S))}),u}),O=a=>c(s=>{let u=o(`div`,s);l(u,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let p=o(`table`,u);i(u,p),l(p,`table table-zebra`);let h=o(`thead`,p);i(p,h);let g=o(`tr`,h);i(h,g);let v=o(`th`,g);i(g,v),i(v,m(`属性`));let y=o(`th`,g);i(g,y),i(y,m(`说明`));let b=o(`th`,g);i(g,b),i(b,m(`类型`));let x=o(`th`,g);i(g,x),i(x,m(`默认值`));let S=o(`tbody`,p);i(p,S);let C=t(`rue:list:start`),w=t(`rue:list:end`);i(S,C),i(S,w);let T=new Map;return n(()=>{T=_({items:a.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(a,s,l,u,p)=>{d(c(()=>{let s=e(),c=o(`tr`,s);i(s,c),n(()=>{f(c,`key`,String(a.prop))});let l=o(`td`,c);i(c,l);let u=o(`code`,l);i(l,u);let p=t(`rue:slot:anchor`);i(u,p),n(()=>{let e=a.prop;r(()=>d(e,u,p))});let m=o(`td`,c);i(c,m);let h=t(`rue:slot:anchor`);i(m,h),n(()=>{let e=a.description;r(()=>d(e,m,h))});let g=o(`td`,c);i(c,g);let _=o(`code`,g);i(g,_);let v=t(`rue:slot:anchor`);i(_,v),n(()=>{let e=a.type;r(()=>d(e,_,v))});let y=o(`td`,c);i(c,y);let b=o(`code`,y);i(y,b);let x=t(`rue:slot:anchor`);return i(b,x),n(()=>{let e=a.defaultValue;r(()=>d(e,b,x))}),s}),s,l)}})}),u}),k=()=>{let{sliderValue:e}=g(`useSetup:0:0`,()=>a(()=>({sliderValue:g(`ref:1:0`,()=>h(`40`))})));return c(r=>{let a=o(`div`,r);l(a,`w-full max-w-xs space-y-3`);let c=t(`rue:component:anchor`);i(a,c),d(p(S,{"data-testid":`range-basic`,min:0,max:100,defaultValue:40,onValueChange:t=>{e.value=String(t)}}),a,c);let f=o(`p`,a);i(a,f),l(f,`m-0 text-sm text-base-content/70`),i(f,m(`当前值：`));let h=u(f);return i(f,h),n(()=>{s(h,e.value)}),a})},A=()=>{let{bandwidth:e}=g(`useSetup:0:0:dup1`,()=>a(()=>({bandwidth:g(`ref:1:1`,()=>h(250))})));return c(a=>{let c=o(`div`,a);l(c,`w-full max-w-lg space-y-4 rounded-box border border-base-300 bg-base-100 p-5`);let f=t(`rue:component:anchor`);i(c,f),n(()=>{let t=p(S,{min:100,max:1e3,step:50,defaultValue:250,color:`primary`,label:`边缘带宽`,hint:`滑动查看不同档位的交付能力。`,helper:`超过 500 Mbps 后，建议同步升级防护策略与监控采样。`,showValue:{formatter:e=>`${e} Mbps`},marks:[{value:100,label:`Lite`},{value:250,label:`Start`},{value:500,label:`Growth`},{value:750,label:`Scale`},{value:1e3,label:`Max`}],onValueChange:t=>{e.value=t}});r(()=>d(t,c,f))});let h=o(`div`,c);i(c,h),l(h,`grid gap-3 rounded-box bg-base-200/70 p-4 text-sm sm:grid-cols-3`);let g=o(`div`,h);i(h,g);let _=o(`div`,g);i(g,_),l(_,`text-xs uppercase tracking-wide text-base-content/50`),i(_,m(`每秒请求`));let v=o(`div`,g);i(g,v),l(v,`mt-1 text-lg font-semibold text-base-content`);let y=u(v);i(v,y),n(()=>{s(y,Math.round(e.value/10*18))}),i(v,m(`k`));let b=o(`div`,h);i(h,b);let x=o(`div`,b);i(b,x),l(x,`text-xs uppercase tracking-wide text-base-content/50`),i(x,m(`区域副本`));let C=o(`div`,b);i(b,C),l(C,`mt-1 text-lg font-semibold text-base-content`);let w=u(C);i(C,w),n(()=>{s(w,e.value>=500?`6 个`:`3 个`)});let T=o(`div`,h);i(h,T);let E=o(`div`,T);i(T,E),l(E,`text-xs uppercase tracking-wide text-base-content/50`),i(E,m(`推荐套餐`));let D=o(`div`,T);i(T,D),l(D,`mt-1 text-lg font-semibold text-base-content`);let O=u(D);return i(D,O),n(()=>{s(O,e.value>=750?`Enterprise`:e.value>=500?`Scale`:e.value>=250?`Growth`:`Starter`)}),c})},j=()=>{let{seats:e,committedSeats:f}=g(`useSetup:0:0:dup2`,()=>a(()=>({seats:g(`ref:1:2`,()=>h(12)),committedSeats:g(`ref:1:3`,()=>h(12))})));return c(a=>{let c=o(`div`,a);l(c,`w-full max-w-lg rounded-box border border-base-300 bg-base-100 p-5`);let h=t(`rue:component:anchor`);i(c,h),n(()=>{let t=p(S,{min:5,max:60,step:5,defaultValue:12,color:`secondary`,showValue:{formatter:e=>`${e} seats`,placement:`below`},label:`团队席位`,hint:`拖动时实时更新预算，松手后再提交确认值。`,marks:[5,15,30,45,60],onValueChange:t=>{e.value=t},onValueCommit:e=>{f.value=e}});r(()=>d(t,c,h))});let g=o(`div`,c);i(c,g),l(g,`mt-4 grid gap-3 text-sm sm:grid-cols-2`);let _=o(`div`,g);i(g,_),l(_,`rounded-box bg-base-200/70 p-4`);let v=o(`div`,_);i(_,v),l(v,`text-xs uppercase tracking-wide text-base-content/50`),i(v,m(`实时预算`));let y=o(`div`,_);i(_,y),l(y,`mt-2 text-lg font-semibold text-base-content`),i(y,m(`¥ `));let b=u(y);i(y,b),n(()=>{s(b,e.value*129)}),i(y,m(` / 月`));let x=o(`div`,g);i(g,x),l(x,`rounded-box bg-base-200/70 p-4`);let C=o(`div`,x);i(x,C),l(C,`text-xs uppercase tracking-wide text-base-content/50`),i(C,m(`已确认席位`));let w=o(`div`,x);i(x,w),l(w,`mt-2 text-lg font-semibold text-base-content`);let T=u(w);return i(w,T),n(()=>{s(T,f.value)}),i(w,m(` seats`)),c})},M=()=>c(e=>{let a=o(`div`,e);l(a,`w-full max-w-sm`);let s=t(`rue:component:anchor`);return i(a,s),n(()=>{let e=p(S,{min:0,max:100,defaultValue:25,step:25,showValue:{placement:`below`,formatter:e=>`${e}%`},marks:[{value:0,label:`1`},{value:25,label:`2`},{value:50,label:`3`},{value:75,label:`4`},{value:100,label:`5`}]});r(()=>d(e,a,s))}),a}),N=()=>c(a=>{let m=o(`div`,a);l(m,`grid gap-4`);let h=t(`rue:list:start`),g=t(`rue:list:end`);i(m,h),i(m,g);let v=new Map;return n(()=>{v=_({items:w||[],getKey:(e,t)=>e,elements:v,parent:h.parentNode,before:g,singleRoot:!0,trackIndex:!1,start:h,renderItem:(a,m,h,g,_)=>{d(c(()=>{let c=e(),m=o(`div`,c);i(c,m),n(()=>{f(m,`key`,String(a))}),l(m,`space-y-2 rounded-box border border-base-300 bg-base-100 p-4`);let h=o(`div`,m);i(m,h),l(h,`text-xs uppercase tracking-wide text-base-content/60`);let g=u(h);i(h,g),n(()=>{s(g,a)});let _=t(`rue:component:anchor`);return i(m,_),n(()=>{let e=p(S,{color:a,min:0,max:100,defaultValue:40,showValue:!0});r(()=>d(e,m,_))}),c}),m,h)}})}),m}),P=()=>c(e=>{let a=o(`div`,e);l(a,`w-full max-w-sm space-y-3 rounded-box border border-base-300 bg-base-100 p-4`);let s=t(`rue:component:anchor`);return i(a,s),n(()=>{let e=p(S,{min:0,max:100,defaultValue:40,showValue:{formatter:e=>`mix ${e}`},className:`text-blue-300 [--range-bg:orange] [--range-thumb:blue] [--range-fill:0]`});r(()=>d(e,a,s))}),a}),F=[{prop:`className`,description:`追加到原生 input 的类名，适合继续覆写 CSS 变量`,type:`string`,defaultValue:`-`},{prop:`color`,description:`语义色，映射到 range-* 颜色类`,type:`'neutral' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'info' | 'error'`,defaultValue:`-`},{prop:`defaultValue`,description:`非受控初始值`,type:`string | number`,defaultValue:`-`},{prop:`formatter`,description:`值格式化函数，可与 showValue 组合使用`,type:`(value: number, info: { min: number; max: number; percent: number }) => any`,defaultValue:`-`},{prop:`helper`,description:`底部辅助文案`,type:`any`,defaultValue:`-`},{prop:`hint`,description:`标题下方的简短说明`,type:`any`,defaultValue:`-`},{prop:`label`,description:`顶部标题，自动关联 input id`,type:`any`,defaultValue:`-`},{prop:`marks`,description:`刻度点，可传 number / string 或 { value, label } 数组`,type:`Array<string | number | { value: string | number; label?: any }>`,defaultValue:`-`},{prop:`max`,description:`最大值`,type:`string | number`,defaultValue:`100`},{prop:`min`,description:`最小值`,type:`string | number`,defaultValue:`0`},{prop:`onValueChange`,description:`拖动过程中的语义回调，返回解析后的 number`,type:`(value: number, event: Event) => void`,defaultValue:`-`},{prop:`onValueCommit`,description:`原生 change 阶段的语义回调，适合提交确认值`,type:`(value: number, event: Event) => void`,defaultValue:`-`},{prop:`rootClassName`,description:`增强结构外层容器类名，仅在展示层激活时生效`,type:`string`,defaultValue:`-`},{prop:`showValue`,description:`显示当前值，可配置 formatter、placement 和 className`,type:`boolean | { formatter?: (value: number, info: { min: number; max: number; percent: number }) => any; placement?: 'inline' | 'below'; className?: string }`,defaultValue:`false`},{prop:`size`,description:`尺寸，支持 xs-xl 以及 small / medium / large 别名`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'medium' | 'large'`,defaultValue:`'md'`},{prop:`step`,description:`步长`,type:`string | number`,defaultValue:`1`},{prop:`value`,description:`受控值`,type:`string | number`,defaultValue:`-`}],I=()=>{let{tabBasic:f,tabStory:_,tabSteps:b,tabColors:x,tabSizes:w,tabCommit:I,tabCustom:L}=g(`useSetup:0:0:dup3`,()=>a(()=>({tabBasic:g(`ref:1:4`,()=>h(`preview`)),tabStory:g(`ref:1:5`,()=>h(`preview`)),tabSteps:g(`ref:1:6`,()=>h(`preview`)),tabColors:g(`ref:1:7`,()=>h(`preview`)),tabSizes:g(`ref:1:8`,()=>h(`preview`)),tabCommit:g(`ref:1:9`,()=>h(`preview`)),tabCustom:g(`ref:1:10`,()=>h(`preview`))})));return c(a=>{let h=e(),g=t(`rue:component:anchor`);return i(h,g),d(p(C,{children:c(()=>{let a=e(),c=o(`div`,a);i(a,c),l(c,`max-w-none prose prose-sm md:prose-base`);let h=o(`h1`,c);i(c,h),i(h,m(`Range Slider 范围选择`));let g=o(`p`,c);i(c,g),l(g,`mt-3 mb-3 text-sm`),i(g,m(`Range 仍然坚持原生`));let C=o(`code`,g);i(g,C),i(C,m(`input type="range"`));let R=u(g);i(g,R),s(R,` `),i(g,m(`的语义，但不再只是一条裸滑杆。现在可以直接在组件层补齐标题、提示、刻度、值展示和语义回调，设计页也按能力分层重新组织。`));let z=t(`rue:component:anchor`);i(c,z),n(()=>{let e=p(D,{title:`Range`,summary:`保留原来的最小兼容写法；如果你只想要一个原生滑杆，API 仍然保持直接。`,tab:f,preview:()=>y(k,{}),code:`<Range min={0} max={100} value={40} />`});r(()=>d(e,c,z))});let B=t(`rue:component:anchor`);i(c,B),n(()=>{let e=p(D,{title:`带文案与实时值`,summary:`把 label、hint、helper、showValue 和 marks 叠到组件自身，适合做套餐档位和配置面板。`,tab:_,preview:()=>y(A,{}),code:`const bandwidth = ref(250)

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
/>`});r(()=>d(e,c,B))});let V=t(`rue:component:anchor`);i(c,V),n(()=>{let e=p(D,{title:`With steps and measure`,summary:`旧 demo 保留，但把刻度线和标签收进 marks，减少样板代码。`,tab:b,preview:()=>y(M,{}),code:`<Range
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
/>`});r(()=>d(e,c,V))});let H=t(`rue:component:anchor`);i(c,H),n(()=>{let e=p(D,{title:`Range colors`,summary:`保留原有颜色矩阵，同时展示增强 API 与原有颜色类可以自然叠加。`,tab:x,preview:()=>y(N,{}),code:`const colors = ['neutral', 'primary', 'secondary', 'accent', 'success', 'warning', 'info', 'error'] as const

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
</div>`});r(()=>d(e,c,H))});let U=t(`rue:component:anchor`);i(c,U),n(()=>{let e=p(D,{title:`Sizes`,summary:`保留 xs 到 xl 的原始尺寸，同时补上 small / medium / large 三个别名，方便和其他组件对齐。`,tab:w,preview:()=>v(`div`,{className:`space-y-6`,children:[y(`div`,{className:`flex w-full max-w-sm flex-col gap-4`,children:T.map((e,t)=>y(S,{size:e,min:0,max:100,defaultValue:30+t*10},e))}),y(`div`,{className:`grid gap-3 rounded-box border border-dashed border-base-300 bg-base-100 p-4 text-sm sm:grid-cols-3`,children:E.map((e,t)=>v(`div`,{className:`space-y-2`,children:[y(`div`,{className:`text-xs uppercase tracking-wide text-base-content/60`,children:e}),y(S,{size:e,min:0,max:100,defaultValue:35+t*20})]},e))})]}),code:`<Range size="xs" min={0} max={100} defaultValue={30} />
<Range size="sm" min={0} max={100} defaultValue={40} />
<Range size="md" min={0} max={100} defaultValue={50} />
<Range size="lg" min={0} max={100} defaultValue={60} />
<Range size="xl" min={0} max={100} defaultValue={70} />

<Range size="small" min={0} max={100} defaultValue={35} />
<Range size="medium" min={0} max={100} defaultValue={55} />
<Range size="large" min={0} max={100} defaultValue={75} />`});r(()=>d(e,c,U))});let W=t(`rue:component:anchor`);i(c,W),n(()=>{let e=p(D,{title:`受控提交`,summary:`拖动中用 onValueChange 更新即时反馈，松手后用 onValueCommit 记录确认值。`,tab:I,preview:()=>y(j,{}),code:`const seats = ref(12)
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
/>`});r(()=>d(e,c,W))});let G=t(`rue:component:anchor`);i(c,G),n(()=>{let e=p(D,{title:`Range with custom color and no fill`,summary:`原来的自定义 CSS 变量方案继续可用；增强 API 不会挡住底层变量覆写。`,tab:L,preview:()=>y(P,{}),code:`<Range
  min={0}
  max={100}
  defaultValue={40}
  showValue={{ formatter: currentValue => 'mix ' + currentValue }}
  className="text-blue-300 [--range-bg:orange] [--range-thumb:blue] [--range-fill:0]"
/>`});r(()=>d(e,c,G))});let K=o(`div`,c);i(c,K),l(K,`component-preview not-prose text-base-content my-6 lg:my-12`);let q=o(`h2`,K);i(K,q),l(q,`component-preview-title mt-2 mb-3 text-lg font-semibold`),i(q,m(`# API`));let J=o(`p`,K);i(K,J),l(J,`mb-4 text-sm text-base-content/70`),i(J,m(`不做增强展示时，Range 仍然是一个直接透传原生属性的滑杆；一旦传入`));let Y=o(`code`,J);i(J,Y),i(Y,m(`label`)),i(J,m(`、`));let X=o(`code`,J);i(J,X),i(X,m(`showValue`)),i(J,m(`、`));let Z=o(`code`,J);i(J,Z),i(Z,m(`marks`)),i(J,m(`等属性，就会自动切换到更完整的展示结构。`));let Q=t(`rue:component:anchor`);return i(K,Q),n(()=>{let e=p(O,{rows:F});r(()=>d(e,K,Q))}),a})}),h,g),h})};export{I as default};