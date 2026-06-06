import{$ as e,Et as t,G as n,H as r,J as i,K as a,Ot as o,Tt as s,W as c,_t as l,d as u,k as d,kt as f,l as p,q as m,st as h,t as g,tt as _,xt as v}from"./vapor-runtime-ACs_OvwU.js";import{a as y,n as b}from"./vapor-helpers-vapor-BFB_fGs4.js";import{n as x,t as S}from"./src-B0RvnZVV.js";import{n as C}from"./SidebarPlaygroundDesign-fKTv1NQ3.js";import{t as w}from"./Code-CliOXHNE.js";import{t as T}from"./tabs-CPymQe79.js";var E=0,D=(e,t)=>t?`${e} ${t}`:e,O=(e,t)=>{let n=Number(e);return Number.isFinite(n)?n:t},k=(e,t,n)=>e<t?t:e>n?n:e,A=(e,t)=>{let n=O(e,0),r=O(t,100);return r<=n?{min:n,max:n+1}:{min:n,max:r}},j=e=>{let t=O(e,1);return t>0?t:1},M=e=>{switch(e){case`small`:return`sm`;case`default`:case`medium`:return`md`;case`large`:return`lg`;default:return e}},N=(e,t,n,r)=>k(O(e,r),t,n),P=(e,t,n)=>(e-t)/(n-t)*100,F=e=>e?e===!0?{visible:!0,placement:`inline`}:{visible:!0,placement:e.placement??`inline`,className:e.className,formatter:e.formatter}:{visible:!1,placement:`inline`},I=e=>typeof e==`object`&&!!e&&`value`in e,L=(e,t,n)=>e?.length?e.map((e,r)=>{let i=I(e)?e.value:e,a=N(i,t,n,t),o=I(e)&&`label`in e?e.label:String(i);return{key:`${r}-${String(i)}`,value:a,label:o,percent:P(a,t,n)}}).sort((e,t)=>e.value-t.value):[],R=(e,t,n)=>typeof t==`function`?t(e,n):String(e),z=(e,t,n)=>{let r=`range`;e&&(r+=` range-${e}`);let i=M(t);return i&&(r+=` range-${i}`),n&&(r+=` ${n}`),r},B=({id:e,color:t,size:n,className:r,rootClassName:i,label:a,hint:c,helper:u,labelClassName:f,hintClassName:p,helperClassName:m,valueClassName:h,marksClassName:g,style:_,rootStyle:v,min:y,max:b,step:C,value:w,defaultValue:T,showValue:O,formatter:k,marks:M,disabled:I,onInput:B,onChange:V,onValueChange:ee,onValueCommit:te,...H})=>{let U=s(),W=s(),G=H.ref,ne=l(`rue-range-${E++}`),K=A(y,b),re=j(C),q=w!==void 0,J=l(N(T??w??K.min,K.min,K.max,K.min)),Y=q?N(w,K.min,K.max,J.value):N(J.value,K.min,K.max,K.min),X=F(O),ie=L(M,K.min,K.max),Z=e??ne.value,ae={min:K.min,max:K.max,percent:P(Y,K.min,K.max)},oe=X.formatter??k,Q=R(Y,oe,ae),se=typeof Q==`string`||typeof Q==`number`?String(Q):void 0,ce=a!=null||c!=null||u!=null||X.visible||ie.length>0||!!i||!!v||!!f||!!p||!!m||!!h||!!g;`ref`in H&&delete H.ref;let le=e=>{if(typeof G==`function`){G(e);return}G&&typeof G==`object`&&(G.current=e??void 0)},ue=e=>{U.current=e??void 0,le(e)},de=e=>R(e,oe,{min:K.min,max:K.max,percent:P(e,K.min,K.max)}),$=e=>{let t=de(e),n=typeof t==`string`||typeof t==`number`?String(t):void 0;U.current&&(U.current.value=String(e),U.current.setAttribute(`aria-valuenow`,String(e)),n===void 0?U.current.removeAttribute(`aria-valuetext`):U.current.setAttribute(`aria-valuetext`,n)),W.current&&(n!==void 0&&W.current.querySelectorAll(`[data-rue-range-output="true"]`).forEach(e=>{e.textContent=n}),W.current.querySelectorAll(`[data-rue-range-mark]`).forEach(t=>{let n=t,r=e>=Number(n.getAttribute(`data-rue-range-mark`));n.className=`absolute top-0 flex -translate-x-1/2 flex-col items-center gap-1 text-[11px] ${r?`font-medium text-base-content`:`text-base-content/55`}`;let i=n.firstElementChild;i&&(i.className=r?`h-2 w-px bg-base-content/80`:`h-2 w-px bg-base-content/25`)}))},fe=e=>{let t=e.target,n=N(t?.value,K.min,K.max,Y);q||(J.value=n,$(n)),B?.(e),ee?.(n,e)},pe=e=>{let t=e.target,n=N(t?.value,K.min,K.max,Y);q||(J.value=n,$(n)),V?.(e),te?.(n,e)};d(()=>{$(Y)}),o(()=>w,e=>{q&&$(N(e,K.min,K.max,J.value))},{immediate:!0});let me=S(`input`,{...H,ref:ue,id:Z,type:`range`,className:z(t,n,r),style:_,min:String(K.min),max:String(K.max),step:C===void 0?void 0:String(re),value:String(Y),disabled:I,"aria-valuemin":String(K.min),"aria-valuemax":String(K.max),"aria-valuenow":String(Y),"aria-valuetext":se,onInput:fe,onChange:pe});return ce?x(`div`,{ref:e=>{W.current=e??void 0},className:D(`w-full space-y-3`,i),style:v,"data-rue-range-root":`true`,children:[a!=null||c!=null||X.visible&&X.placement===`inline`?x(`div`,{className:`flex items-start justify-between gap-4`,children:[x(`div`,{className:`min-w-0 space-y-1`,children:[a==null?null:S(`label`,{htmlFor:Z,className:D(`block text-sm font-medium text-base-content`,f),children:a}),c==null?null:S(`p`,{className:D(`m-0 text-xs text-base-content/65`,p),children:c})]}),X.visible&&X.placement===`inline`?S(`output`,{htmlFor:Z,className:D(D(`shrink-0 rounded-full bg-base-200 px-3 py-1 text-xs font-medium text-base-content`,X.className),h),"data-rue-range-output":`true`,children:Q}):null]}):null,S(`div`,{className:`w-full`,children:me}),X.visible&&X.placement===`below`?S(`div`,{className:`flex justify-end`,children:S(`output`,{htmlFor:Z,className:D(D(`rounded-full bg-base-200 px-3 py-1 text-xs font-medium text-base-content`,X.className),h),"data-rue-range-output":`true`,children:Q})}):null,ie.length>0?S(`div`,{className:D(`relative h-10`,g),"data-rue-range-marks":`true`,children:ie.map(e=>{let t=Y>=e.value;return x(`span`,{className:D(`absolute top-0 flex -translate-x-1/2 flex-col items-center gap-1 text-[11px] ${t?`font-medium text-base-content`:`text-base-content/55`}`),style:{left:`${e.percent}%`},"data-rue-range-mark":String(e.value),children:[S(`span`,{className:`h-2 w-px ${t?`bg-base-content/80`:`bg-base-content/25`}`}),e.label==null?null:S(`span`,{className:`whitespace-nowrap`,children:e.label})]},e.key)})}):null,u==null?null:S(`p`,{className:D(`m-0 text-xs text-base-content/60`,m),children:u})]}):me},V=[`neutral`,`primary`,`secondary`,`accent`,`success`,`warning`,`info`,`error`],ee=[`xs`,`sm`,`md`,`lg`,`xl`],te=[`small`,`medium`,`large`],H=e=>u(t=>{let i=a(`div`,t);_(i,`component-preview not-prose text-base-content my-6 lg:my-12`);let o=a(`div`,i);r(i,o),_(o,`flex flex-wrap items-start justify-between gap-3`);let s=a(`div`,o);r(o,s);let l=a(`h2`,s);r(s,l),_(l,`component-preview-title mt-2 mb-1 text-lg font-semibold`),r(l,m(`# `));let d=c(`rue:slot:anchor`);r(l,d),f(()=>{let t=e.title;v(()=>p(t,l,d))});let h=c(`rue:slot:anchor`);r(s,h),f(()=>{let t=e.summary?u(()=>{let t=n(),i=a(`p`,t);r(t,i),_(i,`m-0 text-sm opacity-70`);let o=c(`rue:slot:anchor`);return r(i,o),f(()=>{let t=e.summary;v(()=>p(t,i,o))}),t}):``;v(()=>p(t,s,h))});let y=c(`rue:component:anchor`);r(i,y),f(()=>{let t=g(T,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`});v(()=>p(t,i,y))});let b=c(`rue:slot:anchor`);return r(i,b),f(()=>{let t=e.tab.value===`preview`?e.preview():u(()=>{let t=n(),i=c(`rue:component:anchor`);return r(t,i),f(()=>{let n=g(w,{className:`mt-2`,lang:`tsx`,code:e.code});v(()=>p(n,t,i))}),t});v(()=>p(t,i,b))}),i}),U=t=>u(i=>{let o=a(`div`,i);_(o,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let s=a(`table`,o);r(o,s),_(s,`table table-zebra`);let l=a(`thead`,s);r(s,l);let d=a(`tr`,l);r(l,d);let h=a(`th`,d);r(d,h),r(h,m(`属性`));let g=a(`th`,d);r(d,g),r(g,m(`说明`));let y=a(`th`,d);r(d,y),r(y,m(`类型`));let x=a(`th`,d);r(d,x),r(x,m(`默认值`));let S=a(`tbody`,s);r(s,S);let C=c(`rue:list:start`),w=c(`rue:list:end`);r(S,C),r(S,w);let T=new Map;return f(()=>{T=b({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,i,o,s,l)=>{p(u(()=>{let i=n(),o=a(`tr`,i);r(i,o),f(()=>{e(o,`key`,String(t.prop))});let s=a(`td`,o);r(o,s);let l=a(`code`,s);r(s,l);let u=c(`rue:slot:anchor`);r(l,u),f(()=>{let e=t.prop;v(()=>p(e,l,u))});let d=a(`td`,o);r(o,d);let m=c(`rue:slot:anchor`);r(d,m),f(()=>{let e=t.description;v(()=>p(e,d,m))});let h=a(`td`,o);r(o,h);let g=a(`code`,h);r(h,g);let _=c(`rue:slot:anchor`);r(g,_),f(()=>{let e=t.type;v(()=>p(e,g,_))});let y=a(`td`,o);r(o,y);let b=a(`code`,y);r(y,b);let x=c(`rue:slot:anchor`);return r(b,x),f(()=>{let e=t.defaultValue;v(()=>p(e,b,x))}),i}),i,o)}})}),o}),W=()=>{let{sliderValue:e}=y(`useSetup:0:0`,()=>t(()=>({sliderValue:y(`ref:1:0`,()=>l(`40`))})));return u(t=>{let n=a(`div`,t);_(n,`w-full max-w-xs space-y-3`);let o=c(`rue:component:anchor`);r(n,o),f(()=>{let t=g(B,{"data-testid":`range-basic`,min:0,max:100,value:e.value,onInput:t=>{e.value=t.target.value}});v(()=>p(t,n,o))});let s=a(`p`,n);r(n,s),_(s,`m-0 text-sm text-base-content/70`),r(s,m(`当前值：`));let l=i(s);return r(s,l),f(()=>{h(l,e.value)}),n})},G=()=>{let{bandwidth:e}=y(`useSetup:0:0:dup1`,()=>t(()=>({bandwidth:y(`ref:1:1`,()=>l(250))})));return u(t=>{let n=a(`div`,t);_(n,`w-full max-w-lg space-y-4 rounded-box border border-base-300 bg-base-100 p-5`);let o=c(`rue:component:anchor`);r(n,o),f(()=>{let t=g(B,{min:100,max:1e3,step:50,value:e.value,color:`primary`,label:`边缘带宽`,hint:`滑动查看不同档位的交付能力。`,helper:`超过 500 Mbps 后，建议同步升级防护策略与监控采样。`,showValue:{formatter:e=>`${e} Mbps`},marks:[{value:100,label:`Lite`},{value:250,label:`Start`},{value:500,label:`Growth`},{value:750,label:`Scale`},{value:1e3,label:`Max`}],onValueChange:t=>{e.value=t}});v(()=>p(t,n,o))});let s=a(`div`,n);r(n,s),_(s,`grid gap-3 rounded-box bg-base-200/70 p-4 text-sm sm:grid-cols-3`);let l=a(`div`,s);r(s,l);let u=a(`div`,l);r(l,u),_(u,`text-xs uppercase tracking-wide text-base-content/50`),r(u,m(`每秒请求`));let d=a(`div`,l);r(l,d),_(d,`mt-1 text-lg font-semibold text-base-content`);let y=i(d);r(d,y),f(()=>{h(y,Math.round(e.value/10*18))}),r(d,m(`k`));let b=a(`div`,s);r(s,b);let x=a(`div`,b);r(b,x),_(x,`text-xs uppercase tracking-wide text-base-content/50`),r(x,m(`区域副本`));let S=a(`div`,b);r(b,S),_(S,`mt-1 text-lg font-semibold text-base-content`);let C=i(S);r(S,C),f(()=>{h(C,e.value>=500?`6 个`:`3 个`)});let w=a(`div`,s);r(s,w);let T=a(`div`,w);r(w,T),_(T,`text-xs uppercase tracking-wide text-base-content/50`),r(T,m(`推荐套餐`));let E=a(`div`,w);r(w,E),_(E,`mt-1 text-lg font-semibold text-base-content`);let D=i(E);return r(E,D),f(()=>{h(D,e.value>=750?`Enterprise`:e.value>=500?`Scale`:e.value>=250?`Growth`:`Starter`)}),n})},ne=()=>{let{seats:e,committedSeats:n}=y(`useSetup:0:0:dup2`,()=>t(()=>({seats:y(`ref:1:2`,()=>l(12)),committedSeats:y(`ref:1:3`,()=>l(12))})));return u(t=>{let o=a(`div`,t);_(o,`w-full max-w-lg rounded-box border border-base-300 bg-base-100 p-5`);let s=c(`rue:component:anchor`);r(o,s),f(()=>{let t=g(B,{min:5,max:60,step:5,value:e.value,color:`secondary`,showValue:{formatter:e=>`${e} seats`,placement:`below`},label:`团队席位`,hint:`拖动时实时更新预算，松手后再提交确认值。`,marks:[5,15,30,45,60],onValueChange:t=>{e.value=t},onValueCommit:e=>{n.value=e}});v(()=>p(t,o,s))});let l=a(`div`,o);r(o,l),_(l,`mt-4 grid gap-3 text-sm sm:grid-cols-2`);let u=a(`div`,l);r(l,u),_(u,`rounded-box bg-base-200/70 p-4`);let d=a(`div`,u);r(u,d),_(d,`text-xs uppercase tracking-wide text-base-content/50`),r(d,m(`实时预算`));let y=a(`div`,u);r(u,y),_(y,`mt-2 text-lg font-semibold text-base-content`),r(y,m(`¥ `));let b=i(y);r(y,b),f(()=>{h(b,e.value*129)}),r(y,m(` / 月`));let x=a(`div`,l);r(l,x),_(x,`rounded-box bg-base-200/70 p-4`);let S=a(`div`,x);r(x,S),_(S,`text-xs uppercase tracking-wide text-base-content/50`),r(S,m(`已确认席位`));let C=a(`div`,x);r(x,C),_(C,`mt-2 text-lg font-semibold text-base-content`);let w=i(C);return r(C,w),f(()=>{h(w,n.value)}),r(C,m(` seats`)),o})},K=()=>{let{value:e}=y(`useSetup:0:0:dup3`,()=>t(()=>({value:y(`ref:1:4`,()=>l(25))})));return u(t=>{let n=a(`div`,t);_(n,`w-full max-w-sm`);let i=c(`rue:component:anchor`);return r(n,i),f(()=>{let t=g(B,{min:0,max:100,value:e.value,step:25,showValue:{placement:`below`,formatter:e=>`${e}%`},marks:[{value:0,label:`1`},{value:25,label:`2`},{value:50,label:`3`},{value:75,label:`4`},{value:100,label:`5`}],onValueChange:t=>{e.value=t}});v(()=>p(t,n,i))}),n})},re=()=>{let{values:o}=y(`useSetup:0:0:dup4`,()=>t(()=>({values:y(`ref:1:5`,()=>l({neutral:40,primary:40,secondary:40,accent:40,success:40,warning:40,info:40,error:40}))})));return u(t=>{let s=a(`div`,t);_(s,`grid gap-4`);let l=c(`rue:list:start`),d=c(`rue:list:end`);r(s,l),r(s,d);let m=new Map;return f(()=>{m=b({items:V||[],getKey:(e,t)=>e,elements:m,parent:l.parentNode,before:d,singleRoot:!0,trackIndex:!1,start:l,renderItem:(t,s,l,d,m)=>{p(u(()=>{let s=n(),l=a(`div`,s);r(s,l),f(()=>{e(l,`key`,String(t))}),_(l,`space-y-2 rounded-box border border-base-300 bg-base-100 p-4`);let u=a(`div`,l);r(l,u),_(u,`text-xs uppercase tracking-wide text-base-content/60`);let d=i(u);r(u,d),f(()=>{h(d,t)});let m=c(`rue:component:anchor`);return r(l,m),f(()=>{let e=g(B,{color:t,min:0,max:100,value:o.value[t],showValue:!0,onValueChange:e=>{o.value={...o.value,[t]:e}}});v(()=>p(e,l,m))}),s}),s,l)}})}),s})},q=()=>{let{value:e}=y(`useSetup:0:0:dup5`,()=>t(()=>({value:y(`ref:1:6`,()=>l(40))})));return u(t=>{let n=a(`div`,t);_(n,`w-full max-w-sm space-y-3 rounded-box border border-base-300 bg-base-100 p-4`);let i=c(`rue:component:anchor`);return r(n,i),f(()=>{let t=g(B,{min:0,max:100,value:e.value,showValue:{formatter:e=>`mix ${e}`},className:`text-blue-300 [--range-bg:orange] [--range-thumb:blue] [--range-fill:0]`,onValueChange:t=>{e.value=t}});v(()=>p(t,n,i))}),n})},J=[{prop:`className`,description:`追加到原生 input 的类名，适合继续覆写 CSS 变量`,type:`string`,defaultValue:`-`},{prop:`color`,description:`语义色，映射到 range-* 颜色类`,type:`'neutral' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'info' | 'error'`,defaultValue:`-`},{prop:`defaultValue`,description:`非受控初始值`,type:`string | number`,defaultValue:`-`},{prop:`formatter`,description:`值格式化函数，可与 showValue 组合使用`,type:`(value: number, info: { min: number; max: number; percent: number }) => any`,defaultValue:`-`},{prop:`helper`,description:`底部辅助文案`,type:`any`,defaultValue:`-`},{prop:`hint`,description:`标题下方的简短说明`,type:`any`,defaultValue:`-`},{prop:`label`,description:`顶部标题，自动关联 input id`,type:`any`,defaultValue:`-`},{prop:`marks`,description:`刻度点，可传 number / string 或 { value, label } 数组`,type:`Array<string | number | { value: string | number; label?: any }>`,defaultValue:`-`},{prop:`max`,description:`最大值`,type:`string | number`,defaultValue:`100`},{prop:`min`,description:`最小值`,type:`string | number`,defaultValue:`0`},{prop:`onValueChange`,description:`拖动过程中的语义回调，返回解析后的 number`,type:`(value: number, event: Event) => void`,defaultValue:`-`},{prop:`onValueCommit`,description:`原生 change 阶段的语义回调，适合提交确认值`,type:`(value: number, event: Event) => void`,defaultValue:`-`},{prop:`rootClassName`,description:`增强结构外层容器类名，仅在展示层激活时生效`,type:`string`,defaultValue:`-`},{prop:`showValue`,description:`显示当前值，可配置 formatter、placement 和 className`,type:`boolean | { formatter?: (value: number, info: { min: number; max: number; percent: number }) => any; placement?: 'inline' | 'below'; className?: string }`,defaultValue:`false`},{prop:`size`,description:`尺寸，支持 xs-xl 以及 small / medium / large 别名`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'medium' | 'large'`,defaultValue:`'md'`},{prop:`step`,description:`步长`,type:`string | number`,defaultValue:`1`},{prop:`value`,description:`受控值`,type:`string | number`,defaultValue:`-`}],Y=()=>{let{tabBasic:e,tabStory:o,tabSteps:s,tabColors:d,tabSizes:b,tabCommit:w,tabCustom:T}=y(`useSetup:0:0:dup6`,()=>t(()=>({tabBasic:y(`ref:1:7`,()=>l(`preview`)),tabStory:y(`ref:1:8`,()=>l(`preview`)),tabSteps:y(`ref:1:9`,()=>l(`preview`)),tabColors:y(`ref:1:10`,()=>l(`preview`)),tabSizes:y(`ref:1:11`,()=>l(`preview`)),tabCommit:y(`ref:1:12`,()=>l(`preview`)),tabCustom:y(`ref:1:13`,()=>l(`preview`))})));return u(t=>{let l=n(),y=c(`rue:component:anchor`);return r(l,y),p(g(C,{children:u(()=>{let t=n(),l=a(`div`,t);r(t,l),_(l,`max-w-none prose prose-sm md:prose-base`);let u=a(`h1`,l);r(l,u),r(u,m(`Range Slider 范围选择`));let y=a(`p`,l);r(l,y),_(y,`mt-3 mb-3 text-sm`),r(y,m(`Range 仍然坚持原生`));let C=a(`code`,y);r(y,C),r(C,m(`input type="range"`));let E=i(y);r(y,E),h(E,` `),r(y,m(`的语义，但不再只是一条裸滑杆。现在可以直接在组件层补齐标题、提示、刻度、值展示和语义回调，设计页也按能力分层重新组织。`));let D=c(`rue:component:anchor`);r(l,D),f(()=>{let t=g(H,{title:`Range`,summary:`保留原来的最小兼容写法；如果你只想要一个原生滑杆，API 仍然保持直接。`,tab:e,preview:()=>S(W,{}),code:`<Range min={0} max={100} value={40} />`});v(()=>p(t,l,D))});let O=c(`rue:component:anchor`);r(l,O),f(()=>{let e=g(H,{title:`带文案与实时值`,summary:`把 label、hint、helper、showValue 和 marks 叠到组件自身，适合做套餐档位和配置面板。`,tab:o,preview:()=>S(G,{}),code:`const bandwidth = ref(250)

<Range
  min={100}
  max={1000}
  step={50}
  value={bandwidth.value}
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
/>`});v(()=>p(e,l,O))});let k=c(`rue:component:anchor`);r(l,k),f(()=>{let e=g(H,{title:`With steps and measure`,summary:`旧 demo 保留，但把刻度线和标签收进 marks，减少样板代码。`,tab:s,preview:()=>S(K,{}),code:`const value = ref(25)

<Range
  min={0}
  max={100}
  value={value.value}
  step={25}
  showValue={{ placement: 'below', formatter: currentValue => currentValue + '%' }}
  marks={[
    { value: 0, label: '1' },
    { value: 25, label: '2' },
    { value: 50, label: '3' },
    { value: 75, label: '4' },
    { value: 100, label: '5' },
  ]}
  onValueChange={nextValue => {
    value.value = nextValue
  }}
/>`});v(()=>p(e,l,k))});let A=c(`rue:component:anchor`);r(l,A),f(()=>{let e=g(H,{title:`Range colors`,summary:`保留原有颜色矩阵，同时展示增强 API 与原有颜色类可以自然叠加。`,tab:d,preview:()=>S(re,{}),code:`const colors = ['neutral', 'primary', 'secondary', 'accent', 'success', 'warning', 'info', 'error'] as const
const values = ref({
  neutral: 40,
  primary: 40,
  secondary: 40,
  accent: 40,
  success: 40,
  warning: 40,
  info: 40,
  error: 40,
})

<div className="grid gap-4">
  {colors.map(color => (
    <div key={color} className="space-y-2 rounded-box border border-base-300 bg-base-100 p-4">
      <div className="text-xs uppercase tracking-wide text-base-content/60">{color}</div>
      <Range
        color={color}
        min={0}
        max={100}
        value={values.value[color]}
        showValue={true}
        onValueChange={nextValue => {
          values.value = {
            ...values.value,
            [color]: nextValue,
          }
        }}
      />
    </div>
  ))}
</div>`});v(()=>p(e,l,A))});let j=c(`rue:component:anchor`);r(l,j),f(()=>{let e=g(H,{title:`Sizes`,summary:`保留 xs 到 xl 的原始尺寸，同时补上 small / medium / large 三个别名，方便和其他组件对齐。`,tab:b,preview:()=>x(`div`,{className:`space-y-6`,children:[S(`div`,{className:`flex w-full max-w-sm flex-col gap-4`,children:ee.map((e,t)=>S(B,{size:e,min:0,max:100,value:30+t*10},e))}),S(`div`,{className:`grid gap-3 rounded-box border border-dashed border-base-300 bg-base-100 p-4 text-sm sm:grid-cols-3`,children:te.map((e,t)=>x(`div`,{className:`space-y-2`,children:[S(`div`,{className:`text-xs uppercase tracking-wide text-base-content/60`,children:e}),S(B,{size:e,min:0,max:100,value:35+t*20})]},e))})]}),code:`<Range size="xs" min={0} max={100} value={30} />
<Range size="sm" min={0} max={100} value={40} />
<Range size="md" min={0} max={100} value={50} />
<Range size="lg" min={0} max={100} value={60} />
<Range size="xl" min={0} max={100} value={70} />

<Range size="small" min={0} max={100} value={35} />
<Range size="medium" min={0} max={100} value={55} />
<Range size="large" min={0} max={100} value={75} />`});v(()=>p(e,l,j))});let M=c(`rue:component:anchor`);r(l,M),f(()=>{let e=g(H,{title:`受控提交`,summary:`拖动中用 onValueChange 更新即时反馈，松手后用 onValueCommit 记录确认值。`,tab:w,preview:()=>S(ne,{}),code:`const seats = ref(12)
const committedSeats = ref(12)

<Range
  min={5}
  max={60}
  step={5}
  value={seats.value}
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
/>`});v(()=>p(e,l,M))});let N=c(`rue:component:anchor`);r(l,N),f(()=>{let e=g(H,{title:`Range with custom color and no fill`,summary:`原来的自定义 CSS 变量方案继续可用；增强 API 不会挡住底层变量覆写。`,tab:T,preview:()=>S(q,{}),code:`const value = ref(40)

<Range
  min={0}
  max={100}
  value={value.value}
  showValue={{ formatter: currentValue => 'mix ' + currentValue }}
  className="text-blue-300 [--range-bg:orange] [--range-thumb:blue] [--range-fill:0]"
  onValueChange={nextValue => {
    value.value = nextValue
  }}
/>`});v(()=>p(e,l,N))});let P=a(`div`,l);r(l,P),_(P,`component-preview not-prose text-base-content my-6 lg:my-12`);let F=a(`h2`,P);r(P,F),_(F,`component-preview-title mt-2 mb-3 text-lg font-semibold`),r(F,m(`# API`));let I=a(`p`,P);r(P,I),_(I,`mb-4 text-sm text-base-content/70`),r(I,m(`不做增强展示时，Range 仍然是一个直接透传原生属性的滑杆；一旦传入`));let L=a(`code`,I);r(I,L),r(L,m(`label`)),r(I,m(`、`));let R=a(`code`,I);r(I,R),r(R,m(`showValue`)),r(I,m(`、`));let z=a(`code`,I);r(I,z),r(z,m(`marks`)),r(I,m(`等属性，就会自动切换到更完整的展示结构。`));let V=c(`rue:component:anchor`);return r(P,V),f(()=>{let e=g(U,{rows:J});v(()=>p(e,P,V))}),t})}),l,y),l})};export{Y as default};