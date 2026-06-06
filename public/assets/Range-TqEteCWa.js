import{$ as e,B as t,Ct as n,D as r,Dt as i,Et as a,G as o,H as s,K as c,U as l,W as u,Z as d,at as f,ht as p,l as m,s as h,t as g,wt as _,yt as v}from"./vapor-runtime-C1rlwc61.js";import{a as y,n as b}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as x}from"./Code-BCLFq1E3.js";import{n as S,t as C}from"./src-BLzF0BqW.js";import{n as w}from"./SidebarPlaygroundDesign-DmoUIYgb.js";import{t as T}from"./tabs-BOxm6iIN.js";var E=0,D=(e,t)=>t?`${e} ${t}`:e,O=(e,t)=>{let n=Number(e);return Number.isFinite(n)?n:t},k=(e,t,n)=>e<t?t:e>n?n:e,A=(e,t)=>{let n=O(e,0),r=O(t,100);return r<=n?{min:n,max:n+1}:{min:n,max:r}},j=e=>{let t=O(e,1);return t>0?t:1},M=e=>{switch(e){case`small`:return`sm`;case`default`:case`medium`:return`md`;case`large`:return`lg`;default:return e}},N=(e,t,n,r)=>k(O(e,r),t,n),P=(e,t,n)=>(e-t)/(n-t)*100,F=e=>e?e===!0?{visible:!0,placement:`inline`}:{visible:!0,placement:e.placement??`inline`,className:e.className,formatter:e.formatter}:{visible:!1,placement:`inline`},I=e=>typeof e==`object`&&!!e&&`value`in e,L=(e,t,n)=>e?.length?e.map((e,r)=>{let i=I(e)?e.value:e,a=N(i,t,n,t),o=I(e)&&`label`in e?e.label:String(i);return{key:`${r}-${String(i)}`,value:a,label:o,percent:P(a,t,n)}}).sort((e,t)=>e.value-t.value):[],R=(e,t,n)=>typeof t==`function`?t(e,n):String(e),z=(e,t,n)=>{let r=`range`;e&&(r+=` range-${e}`);let i=M(t);return i&&(r+=` range-${i}`),n&&(r+=` ${n}`),r},B=({id:e,color:t,size:i,className:o,rootClassName:s,label:c,hint:l,helper:u,labelClassName:d,hintClassName:f,helperClassName:m,valueClassName:h,marksClassName:g,style:_,rootStyle:v,min:y,max:b,step:x,value:w,defaultValue:T,showValue:O,formatter:k,marks:M,disabled:I,onInput:B,onChange:V,onValueChange:ee,onValueCommit:te,...H})=>{let U=n(),W=n(),G=H.ref,ne=p(`rue-range-${E++}`),K=A(y,b),re=j(x),q=w!==void 0,J=p(N(T??w??K.min,K.min,K.max,K.min)),Y=q?N(w,K.min,K.max,J.value):N(J.value,K.min,K.max,K.min),X=F(O),ie=L(M,K.min,K.max),Z=e??ne.value,ae={min:K.min,max:K.max,percent:P(Y,K.min,K.max)},oe=X.formatter??k,Q=R(Y,oe,ae),se=typeof Q==`string`||typeof Q==`number`?String(Q):void 0,ce=c!=null||l!=null||u!=null||X.visible||ie.length>0||!!s||!!v||!!d||!!f||!!m||!!h||!!g;`ref`in H&&delete H.ref;let le=e=>{if(typeof G==`function`){G(e);return}G&&typeof G==`object`&&(G.current=e??void 0)},ue=e=>{U.current=e??void 0,le(e)},de=e=>R(e,oe,{min:K.min,max:K.max,percent:P(e,K.min,K.max)}),$=e=>{let t=de(e),n=typeof t==`string`||typeof t==`number`?String(t):void 0;U.current&&(U.current.value=String(e),U.current.setAttribute(`aria-valuenow`,String(e)),n===void 0?U.current.removeAttribute(`aria-valuetext`):U.current.setAttribute(`aria-valuetext`,n)),W.current&&(n!==void 0&&W.current.querySelectorAll(`[data-rue-range-output="true"]`).forEach(e=>{e.textContent=n}),W.current.querySelectorAll(`[data-rue-range-mark]`).forEach(t=>{let n=t,r=e>=Number(n.getAttribute(`data-rue-range-mark`));n.className=`absolute top-0 flex -translate-x-1/2 flex-col items-center gap-1 text-[11px] ${r?`font-medium text-base-content`:`text-base-content/55`}`;let i=n.firstElementChild;i&&(i.className=r?`h-2 w-px bg-base-content/80`:`h-2 w-px bg-base-content/25`)}))},fe=e=>{let t=e.target,n=N(t?.value,K.min,K.max,Y);q||(J.value=n,$(n)),B?.(e),ee?.(n,e)},pe=e=>{let t=e.target,n=N(t?.value,K.min,K.max,Y);q||(J.value=n,$(n)),V?.(e),te?.(n,e)};r(()=>{$(Y)}),a(()=>w,e=>{q&&$(N(e,K.min,K.max,J.value))},{immediate:!0});let me=C(`input`,{...H,ref:ue,id:Z,type:`range`,className:z(t,i,o),style:_,min:String(K.min),max:String(K.max),step:x===void 0?void 0:String(re),value:String(Y),disabled:I,"aria-valuemin":String(K.min),"aria-valuemax":String(K.max),"aria-valuenow":String(Y),"aria-valuetext":se,onInput:fe,onChange:pe});return ce?S(`div`,{ref:e=>{W.current=e??void 0},className:D(`w-full space-y-3`,s),style:v,"data-rue-range-root":`true`,children:[c!=null||l!=null||X.visible&&X.placement===`inline`?S(`div`,{className:`flex items-start justify-between gap-4`,children:[S(`div`,{className:`min-w-0 space-y-1`,children:[c==null?null:C(`label`,{htmlFor:Z,className:D(`block text-sm font-medium text-base-content`,d),children:c}),l==null?null:C(`p`,{className:D(`m-0 text-xs text-base-content/65`,f),children:l})]}),X.visible&&X.placement===`inline`?C(`output`,{htmlFor:Z,className:D(D(`shrink-0 rounded-full bg-base-200 px-3 py-1 text-xs font-medium text-base-content`,X.className),h),"data-rue-range-output":`true`,children:Q}):null]}):null,C(`div`,{className:`w-full`,children:me}),X.visible&&X.placement===`below`?C(`div`,{className:`flex justify-end`,children:C(`output`,{htmlFor:Z,className:D(D(`rounded-full bg-base-200 px-3 py-1 text-xs font-medium text-base-content`,X.className),h),"data-rue-range-output":`true`,children:Q})}):null,ie.length>0?C(`div`,{className:D(`relative h-10`,g),"data-rue-range-marks":`true`,children:ie.map(e=>{let t=Y>=e.value;return S(`span`,{className:D(`absolute top-0 flex -translate-x-1/2 flex-col items-center gap-1 text-[11px] ${t?`font-medium text-base-content`:`text-base-content/55`}`),style:{left:`${e.percent}%`},"data-rue-range-mark":String(e.value),children:[C(`span`,{className:`h-2 w-px ${t?`bg-base-content/80`:`bg-base-content/25`}`}),e.label==null?null:C(`span`,{className:`whitespace-nowrap`,children:e.label})]},e.key)})}):null,u==null?null:C(`p`,{className:D(`m-0 text-xs text-base-content/60`,m),children:u})]}):me},V=[`neutral`,`primary`,`secondary`,`accent`,`success`,`warning`,`info`,`error`],ee=[`xs`,`sm`,`md`,`lg`,`xl`],te=[`small`,`medium`,`large`],H=n=>m(r=>{let a=u(`div`,r);e(a,`component-preview not-prose text-base-content my-6 lg:my-12`);let c=u(`div`,a);t(a,c),e(c,`flex flex-wrap items-start justify-between gap-3`);let d=u(`div`,c);t(c,d);let f=u(`h2`,d);t(d,f),e(f,`component-preview-title mt-2 mb-1 text-lg font-semibold`),t(f,o(`# `));let p=s(`rue:slot:anchor`);t(f,p),i(()=>{let e=n.title;v(()=>h(e,f,p))});let _=s(`rue:slot:anchor`);t(d,_),i(()=>{let r=n.summary?m(()=>{let r=l(),a=u(`p`,r);t(r,a),e(a,`m-0 text-sm opacity-70`);let o=s(`rue:slot:anchor`);return t(a,o),i(()=>{let e=n.summary;v(()=>h(e,a,o))}),r}):``;v(()=>h(r,d,_))});let y=s(`rue:component:anchor`);t(a,y),i(()=>{let e=g(T,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:n.tab.value,onChange:e=>n.tab.value=e,className:`mb-3 mt-4`});v(()=>h(e,a,y))});let b=s(`rue:slot:anchor`);return t(a,b),i(()=>{let e=n.tab.value===`preview`?n.preview():m(()=>{let e=l(),r=s(`rue:component:anchor`);return t(e,r),i(()=>{let t=g(x,{className:`mt-2`,lang:`tsx`,code:n.code});v(()=>h(t,e,r))}),e});v(()=>h(e,a,b))}),a}),U=n=>m(r=>{let a=u(`div`,r);e(a,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let c=u(`table`,a);t(a,c),e(c,`table table-zebra`);let f=u(`thead`,c);t(c,f);let p=u(`tr`,f);t(f,p);let g=u(`th`,p);t(p,g),t(g,o(`属性`));let _=u(`th`,p);t(p,_),t(_,o(`说明`));let y=u(`th`,p);t(p,y),t(y,o(`类型`));let x=u(`th`,p);t(p,x),t(x,o(`默认值`));let S=u(`tbody`,c);t(c,S);let C=s(`rue:list:start`),w=s(`rue:list:end`);t(S,C),t(S,w);let T=new Map;return i(()=>{T=b({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,n,r,a,o)=>{h(m(()=>{let n=l(),r=u(`tr`,n);t(n,r),i(()=>{d(r,`key`,String(e.prop))});let a=u(`td`,r);t(r,a);let o=u(`code`,a);t(a,o);let c=s(`rue:slot:anchor`);t(o,c),i(()=>{let t=e.prop;v(()=>h(t,o,c))});let f=u(`td`,r);t(r,f);let p=s(`rue:slot:anchor`);t(f,p),i(()=>{let t=e.description;v(()=>h(t,f,p))});let m=u(`td`,r);t(r,m);let g=u(`code`,m);t(m,g);let _=s(`rue:slot:anchor`);t(g,_),i(()=>{let t=e.type;v(()=>h(t,g,_))});let y=u(`td`,r);t(r,y);let b=u(`code`,y);t(y,b);let x=s(`rue:slot:anchor`);return t(b,x),i(()=>{let t=e.defaultValue;v(()=>h(t,b,x))}),n}),n,r)}})}),a}),W=()=>{let{sliderValue:n}=y(`useSetup:0:0`,()=>_(()=>({sliderValue:y(`ref:1:0`,()=>p(`40`))})));return m(r=>{let a=u(`div`,r);e(a,`w-full max-w-xs space-y-3`);let l=s(`rue:component:anchor`);t(a,l),i(()=>{let e=g(B,{"data-testid":`range-basic`,min:0,max:100,value:n.value,onInput:e=>{n.value=e.target.value}});v(()=>h(e,a,l))});let d=u(`p`,a);t(a,d),e(d,`m-0 text-sm text-base-content/70`),t(d,o(`当前值：`));let p=c(d);return t(d,p),i(()=>{f(p,n.value)}),a})},G=()=>{let{bandwidth:n}=y(`useSetup:0:0:dup1`,()=>_(()=>({bandwidth:y(`ref:1:1`,()=>p(250))})));return m(r=>{let a=u(`div`,r);e(a,`w-full max-w-lg space-y-4 rounded-box border border-base-300 bg-base-100 p-5`);let l=s(`rue:component:anchor`);t(a,l),i(()=>{let e=g(B,{min:100,max:1e3,step:50,value:n.value,color:`primary`,label:`边缘带宽`,hint:`滑动查看不同档位的交付能力。`,helper:`超过 500 Mbps 后，建议同步升级防护策略与监控采样。`,showValue:{formatter:e=>`${e} Mbps`},marks:[{value:100,label:`Lite`},{value:250,label:`Start`},{value:500,label:`Growth`},{value:750,label:`Scale`},{value:1e3,label:`Max`}],onValueChange:e=>{n.value=e}});v(()=>h(e,a,l))});let d=u(`div`,a);t(a,d),e(d,`grid gap-3 rounded-box bg-base-200/70 p-4 text-sm sm:grid-cols-3`);let p=u(`div`,d);t(d,p);let m=u(`div`,p);t(p,m),e(m,`text-xs uppercase tracking-wide text-base-content/50`),t(m,o(`每秒请求`));let _=u(`div`,p);t(p,_),e(_,`mt-1 text-lg font-semibold text-base-content`);let y=c(_);t(_,y),i(()=>{f(y,Math.round(n.value/10*18))}),t(_,o(`k`));let b=u(`div`,d);t(d,b);let x=u(`div`,b);t(b,x),e(x,`text-xs uppercase tracking-wide text-base-content/50`),t(x,o(`区域副本`));let S=u(`div`,b);t(b,S),e(S,`mt-1 text-lg font-semibold text-base-content`);let C=c(S);t(S,C),i(()=>{f(C,n.value>=500?`6 个`:`3 个`)});let w=u(`div`,d);t(d,w);let T=u(`div`,w);t(w,T),e(T,`text-xs uppercase tracking-wide text-base-content/50`),t(T,o(`推荐套餐`));let E=u(`div`,w);t(w,E),e(E,`mt-1 text-lg font-semibold text-base-content`);let D=c(E);return t(E,D),i(()=>{f(D,n.value>=750?`Enterprise`:n.value>=500?`Scale`:n.value>=250?`Growth`:`Starter`)}),a})},ne=()=>{let{seats:n,committedSeats:r}=y(`useSetup:0:0:dup2`,()=>_(()=>({seats:y(`ref:1:2`,()=>p(12)),committedSeats:y(`ref:1:3`,()=>p(12))})));return m(a=>{let l=u(`div`,a);e(l,`w-full max-w-lg rounded-box border border-base-300 bg-base-100 p-5`);let d=s(`rue:component:anchor`);t(l,d),i(()=>{let e=g(B,{min:5,max:60,step:5,value:n.value,color:`secondary`,showValue:{formatter:e=>`${e} seats`,placement:`below`},label:`团队席位`,hint:`拖动时实时更新预算，松手后再提交确认值。`,marks:[5,15,30,45,60],onValueChange:e=>{n.value=e},onValueCommit:e=>{r.value=e}});v(()=>h(e,l,d))});let p=u(`div`,l);t(l,p),e(p,`mt-4 grid gap-3 text-sm sm:grid-cols-2`);let m=u(`div`,p);t(p,m),e(m,`rounded-box bg-base-200/70 p-4`);let _=u(`div`,m);t(m,_),e(_,`text-xs uppercase tracking-wide text-base-content/50`),t(_,o(`实时预算`));let y=u(`div`,m);t(m,y),e(y,`mt-2 text-lg font-semibold text-base-content`),t(y,o(`¥ `));let b=c(y);t(y,b),i(()=>{f(b,n.value*129)}),t(y,o(` / 月`));let x=u(`div`,p);t(p,x),e(x,`rounded-box bg-base-200/70 p-4`);let S=u(`div`,x);t(x,S),e(S,`text-xs uppercase tracking-wide text-base-content/50`),t(S,o(`已确认席位`));let C=u(`div`,x);t(x,C),e(C,`mt-2 text-lg font-semibold text-base-content`);let w=c(C);return t(C,w),i(()=>{f(w,r.value)}),t(C,o(` seats`)),l})},K=()=>{let{value:n}=y(`useSetup:0:0:dup3`,()=>_(()=>({value:y(`ref:1:4`,()=>p(25))})));return m(r=>{let a=u(`div`,r);e(a,`w-full max-w-sm`);let o=s(`rue:component:anchor`);return t(a,o),i(()=>{let e=g(B,{min:0,max:100,value:n.value,step:25,showValue:{placement:`below`,formatter:e=>`${e}%`},marks:[{value:0,label:`1`},{value:25,label:`2`},{value:50,label:`3`},{value:75,label:`4`},{value:100,label:`5`}],onValueChange:e=>{n.value=e}});v(()=>h(e,a,o))}),a})},re=()=>{let{values:n}=y(`useSetup:0:0:dup4`,()=>_(()=>({values:y(`ref:1:5`,()=>p({neutral:40,primary:40,secondary:40,accent:40,success:40,warning:40,info:40,error:40}))})));return m(r=>{let a=u(`div`,r);e(a,`grid gap-4`);let o=s(`rue:list:start`),p=s(`rue:list:end`);t(a,o),t(a,p);let _=new Map;return i(()=>{_=b({items:V||[],getKey:(e,t)=>e,elements:_,parent:o.parentNode,before:p,singleRoot:!0,trackIndex:!1,start:o,renderItem:(r,a,o,p,_)=>{h(m(()=>{let a=l(),o=u(`div`,a);t(a,o),i(()=>{d(o,`key`,String(r))}),e(o,`space-y-2 rounded-box border border-base-300 bg-base-100 p-4`);let p=u(`div`,o);t(o,p),e(p,`text-xs uppercase tracking-wide text-base-content/60`);let m=c(p);t(p,m),i(()=>{f(m,r)});let _=s(`rue:component:anchor`);return t(o,_),i(()=>{let e=g(B,{color:r,min:0,max:100,value:n.value[r],showValue:!0,onValueChange:e=>{n.value={...n.value,[r]:e}}});v(()=>h(e,o,_))}),a}),a,o)}})}),a})},q=()=>{let{value:n}=y(`useSetup:0:0:dup5`,()=>_(()=>({value:y(`ref:1:6`,()=>p(40))})));return m(r=>{let a=u(`div`,r);e(a,`w-full max-w-sm space-y-3 rounded-box border border-base-300 bg-base-100 p-4`);let o=s(`rue:component:anchor`);return t(a,o),i(()=>{let e=g(B,{min:0,max:100,value:n.value,showValue:{formatter:e=>`mix ${e}`},className:`text-blue-300 [--range-bg:orange] [--range-thumb:blue] [--range-fill:0]`,onValueChange:e=>{n.value=e}});v(()=>h(e,a,o))}),a})},J=[{prop:`className`,description:`追加到原生 input 的类名，适合继续覆写 CSS 变量`,type:`string`,defaultValue:`-`},{prop:`color`,description:`语义色，映射到 range-* 颜色类`,type:`'neutral' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'info' | 'error'`,defaultValue:`-`},{prop:`defaultValue`,description:`非受控初始值`,type:`string | number`,defaultValue:`-`},{prop:`formatter`,description:`值格式化函数，可与 showValue 组合使用`,type:`(value: number, info: { min: number; max: number; percent: number }) => any`,defaultValue:`-`},{prop:`helper`,description:`底部辅助文案`,type:`any`,defaultValue:`-`},{prop:`hint`,description:`标题下方的简短说明`,type:`any`,defaultValue:`-`},{prop:`label`,description:`顶部标题，自动关联 input id`,type:`any`,defaultValue:`-`},{prop:`marks`,description:`刻度点，可传 number / string 或 { value, label } 数组`,type:`Array<string | number | { value: string | number; label?: any }>`,defaultValue:`-`},{prop:`max`,description:`最大值`,type:`string | number`,defaultValue:`100`},{prop:`min`,description:`最小值`,type:`string | number`,defaultValue:`0`},{prop:`onValueChange`,description:`拖动过程中的语义回调，返回解析后的 number`,type:`(value: number, event: Event) => void`,defaultValue:`-`},{prop:`onValueCommit`,description:`原生 change 阶段的语义回调，适合提交确认值`,type:`(value: number, event: Event) => void`,defaultValue:`-`},{prop:`rootClassName`,description:`增强结构外层容器类名，仅在展示层激活时生效`,type:`string`,defaultValue:`-`},{prop:`showValue`,description:`显示当前值，可配置 formatter、placement 和 className`,type:`boolean | { formatter?: (value: number, info: { min: number; max: number; percent: number }) => any; placement?: 'inline' | 'below'; className?: string }`,defaultValue:`false`},{prop:`size`,description:`尺寸，支持 xs-xl 以及 small / medium / large 别名`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'medium' | 'large'`,defaultValue:`'md'`},{prop:`step`,description:`步长`,type:`string | number`,defaultValue:`1`},{prop:`value`,description:`受控值`,type:`string | number`,defaultValue:`-`}],Y=()=>{let{tabBasic:n,tabStory:r,tabSteps:a,tabColors:d,tabSizes:b,tabCommit:x,tabCustom:T}=y(`useSetup:0:0:dup6`,()=>_(()=>({tabBasic:y(`ref:1:7`,()=>p(`preview`)),tabStory:y(`ref:1:8`,()=>p(`preview`)),tabSteps:y(`ref:1:9`,()=>p(`preview`)),tabColors:y(`ref:1:10`,()=>p(`preview`)),tabSizes:y(`ref:1:11`,()=>p(`preview`)),tabCommit:y(`ref:1:12`,()=>p(`preview`)),tabCustom:y(`ref:1:13`,()=>p(`preview`))})));return m(p=>{let _=l(),y=s(`rue:component:anchor`);return t(_,y),h(g(w,{children:m(()=>{let p=l(),m=u(`div`,p);t(p,m),e(m,`max-w-none prose prose-sm md:prose-base`);let _=u(`h1`,m);t(m,_),t(_,o(`Range Slider 范围选择`));let y=u(`p`,m);t(m,y),e(y,`mt-3 mb-3 text-sm`),t(y,o(`Range 仍然坚持原生`));let w=u(`code`,y);t(y,w),t(w,o(`input type="range"`));let E=c(y);t(y,E),f(E,` `),t(y,o(`的语义，但不再只是一条裸滑杆。现在可以直接在组件层补齐标题、提示、刻度、值展示和语义回调，设计页也按能力分层重新组织。`));let D=s(`rue:component:anchor`);t(m,D),i(()=>{let e=g(H,{title:`Range`,summary:`保留原来的最小兼容写法；如果你只想要一个原生滑杆，API 仍然保持直接。`,tab:n,preview:()=>C(W,{}),code:`<Range min={0} max={100} value={40} />`});v(()=>h(e,m,D))});let O=s(`rue:component:anchor`);t(m,O),i(()=>{let e=g(H,{title:`带文案与实时值`,summary:`把 label、hint、helper、showValue 和 marks 叠到组件自身，适合做套餐档位和配置面板。`,tab:r,preview:()=>C(G,{}),code:`const bandwidth = ref(250)

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
/>`});v(()=>h(e,m,O))});let k=s(`rue:component:anchor`);t(m,k),i(()=>{let e=g(H,{title:`With steps and measure`,summary:`旧 demo 保留，但把刻度线和标签收进 marks，减少样板代码。`,tab:a,preview:()=>C(K,{}),code:`const value = ref(25)

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
/>`});v(()=>h(e,m,k))});let A=s(`rue:component:anchor`);t(m,A),i(()=>{let e=g(H,{title:`Range colors`,summary:`保留原有颜色矩阵，同时展示增强 API 与原有颜色类可以自然叠加。`,tab:d,preview:()=>C(re,{}),code:`const colors = ['neutral', 'primary', 'secondary', 'accent', 'success', 'warning', 'info', 'error'] as const
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
</div>`});v(()=>h(e,m,A))});let j=s(`rue:component:anchor`);t(m,j),i(()=>{let e=g(H,{title:`Sizes`,summary:`保留 xs 到 xl 的原始尺寸，同时补上 small / medium / large 三个别名，方便和其他组件对齐。`,tab:b,preview:()=>S(`div`,{className:`space-y-6`,children:[C(`div`,{className:`flex w-full max-w-sm flex-col gap-4`,children:ee.map((e,t)=>C(B,{size:e,min:0,max:100,value:30+t*10},e))}),C(`div`,{className:`grid gap-3 rounded-box border border-dashed border-base-300 bg-base-100 p-4 text-sm sm:grid-cols-3`,children:te.map((e,t)=>S(`div`,{className:`space-y-2`,children:[C(`div`,{className:`text-xs uppercase tracking-wide text-base-content/60`,children:e}),C(B,{size:e,min:0,max:100,value:35+t*20})]},e))})]}),code:`<Range size="xs" min={0} max={100} value={30} />
<Range size="sm" min={0} max={100} value={40} />
<Range size="md" min={0} max={100} value={50} />
<Range size="lg" min={0} max={100} value={60} />
<Range size="xl" min={0} max={100} value={70} />

<Range size="small" min={0} max={100} value={35} />
<Range size="medium" min={0} max={100} value={55} />
<Range size="large" min={0} max={100} value={75} />`});v(()=>h(e,m,j))});let M=s(`rue:component:anchor`);t(m,M),i(()=>{let e=g(H,{title:`受控提交`,summary:`拖动中用 onValueChange 更新即时反馈，松手后用 onValueCommit 记录确认值。`,tab:x,preview:()=>C(ne,{}),code:`const seats = ref(12)
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
/>`});v(()=>h(e,m,M))});let N=s(`rue:component:anchor`);t(m,N),i(()=>{let e=g(H,{title:`Range with custom color and no fill`,summary:`原来的自定义 CSS 变量方案继续可用；增强 API 不会挡住底层变量覆写。`,tab:T,preview:()=>C(q,{}),code:`const value = ref(40)

<Range
  min={0}
  max={100}
  value={value.value}
  showValue={{ formatter: currentValue => 'mix ' + currentValue }}
  className="text-blue-300 [--range-bg:orange] [--range-thumb:blue] [--range-fill:0]"
  onValueChange={nextValue => {
    value.value = nextValue
  }}
/>`});v(()=>h(e,m,N))});let P=u(`div`,m);t(m,P),e(P,`component-preview not-prose text-base-content my-6 lg:my-12`);let F=u(`h2`,P);t(P,F),e(F,`component-preview-title mt-2 mb-3 text-lg font-semibold`),t(F,o(`# API`));let I=u(`p`,P);t(P,I),e(I,`mb-4 text-sm text-base-content/70`),t(I,o(`不做增强展示时，Range 仍然是一个直接透传原生属性的滑杆；一旦传入`));let L=u(`code`,I);t(I,L),t(L,o(`label`)),t(I,o(`、`));let R=u(`code`,I);t(I,R),t(R,o(`showValue`)),t(I,o(`、`));let z=u(`code`,I);t(I,z),t(z,o(`marks`)),t(I,o(`等属性，就会自动切换到更完整的展示结构。`));let V=s(`rue:component:anchor`);return t(P,V),i(()=>{let e=g(U,{rows:J});v(()=>h(e,P,V))}),p})}),_,y),_})};export{Y as default};