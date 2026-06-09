import{$ as e,Ht as t,Kt as n,O as r,Q as i,Rt as a,Xt as o,Y as s,Yt as c,Z as l,ct as u,et as d,l as f,mt as p,ot as m,qt as h,s as g,t as _,tt as v}from"./vapor-runtime-aZAg0Qkw.js";import{a as y,n as b}from"./vapor-helpers-vapor-gtGwiIv0.js";import{a as x,i as S}from"./persistentSidebarPlayground-IkfbXpbu.js";import{t as C}from"./Code-5DOEyGxf.js";import{t as w}from"./tabs-CWmjyn0I.js";import{r as T}from"./SidebarPlaygroundDesign-CS11MI8e.js";var E=0,D=(e,t)=>t?`${e} ${t}`:e,O=(e,t)=>{let n=Number(e);return Number.isFinite(n)?n:t},k=(e,t,n)=>e<t?t:e>n?n:e,A=(e,t)=>{let n=O(e,0),r=O(t,100);return r<=n?{min:n,max:n+1}:{min:n,max:r}},j=e=>{let t=O(e,1);return t>0?t:1},M=e=>{switch(e){case`small`:return`sm`;case`default`:case`medium`:return`md`;case`large`:return`lg`;default:return e}},N=(e,t,n,r)=>k(O(e,r),t,n),P=(e,t,n)=>(e-t)/(n-t)*100,F=e=>e?e===!0?{visible:!0,placement:`inline`}:{visible:!0,placement:e.placement??`inline`,className:e.className,formatter:e.formatter}:{visible:!1,placement:`inline`},I=e=>typeof e==`object`&&!!e&&`value`in e,L=(e,t,n)=>e?.length?e.map((e,r)=>{let i=I(e)?e.value:e,a=N(i,t,n,t),o=I(e)&&`label`in e?e.label:String(i);return{key:`${r}-${String(i)}`,value:a,label:o,percent:P(a,t,n)}}).sort((e,t)=>e.value-t.value):[],R=(e,t,n)=>typeof t==`function`?t(e,n):String(e),z=(e,t,n)=>{let r=`range`;e&&(r+=` range-${e}`);let i=M(t);return i&&(r+=` range-${i}`),n&&(r+=` ${n}`),r},B=({id:e,color:t,size:i,className:o,rootClassName:s,label:l,hint:u,helper:d,labelClassName:f,hintClassName:p,helperClassName:m,valueClassName:h,marksClassName:g,style:_,rootStyle:v,min:y,max:b,step:C,value:w,defaultValue:T,showValue:O,formatter:k,marks:M,disabled:I,onInput:B,onChange:V,onValueChange:ee,onValueCommit:te,...H})=>{let U=n(),W=n(),G=H.ref,ne=a(`rue-range-${E++}`),K=A(y,b),re=j(C),q=w!==void 0,J=a(N(T??w??K.min,K.min,K.max,K.min)),Y=q?N(w,K.min,K.max,J.value):N(J.value,K.min,K.max,K.min),X=F(O),ie=L(M,K.min,K.max),Z=e??ne.value,ae={min:K.min,max:K.max,percent:P(Y,K.min,K.max)},oe=X.formatter??k,Q=R(Y,oe,ae),se=typeof Q==`string`||typeof Q==`number`?String(Q):void 0,ce=l!=null||u!=null||d!=null||X.visible||ie.length>0||!!s||!!v||!!f||!!p||!!m||!!h||!!g;`ref`in H&&delete H.ref;let le=e=>{if(typeof G==`function`){G(e);return}G&&typeof G==`object`&&(G.current=e??void 0)},ue=e=>{U.current=e??void 0,le(e)},de=e=>R(e,oe,{min:K.min,max:K.max,percent:P(e,K.min,K.max)}),$=e=>{let t=de(e),n=typeof t==`string`||typeof t==`number`?String(t):void 0;U.current&&(U.current.value=String(e),U.current.setAttribute(`aria-valuenow`,String(e)),n===void 0?U.current.removeAttribute(`aria-valuetext`):U.current.setAttribute(`aria-valuetext`,n)),W.current&&(n!==void 0&&W.current.querySelectorAll(`[data-rue-range-output="true"]`).forEach(e=>{e.textContent=n}),W.current.querySelectorAll(`[data-rue-range-mark]`).forEach(t=>{let n=t,r=e>=Number(n.getAttribute(`data-rue-range-mark`));n.className=`absolute top-0 flex -translate-x-1/2 flex-col items-center gap-1 text-[11px] ${r?`font-medium text-base-content`:`text-base-content/55`}`;let i=n.firstElementChild;i&&(i.className=r?`h-2 w-px bg-base-content/80`:`h-2 w-px bg-base-content/25`)}))},fe=e=>{let t=e.target,n=N(t?.value,K.min,K.max,Y);q||(J.value=n,$(n)),B?.(e),ee?.(n,e)},pe=e=>{let t=e.target,n=N(t?.value,K.min,K.max,Y);q||(J.value=n,$(n)),V?.(e),te?.(n,e)};r(()=>{$(Y)}),c(()=>w,e=>{q&&$(N(e,K.min,K.max,J.value))},{immediate:!0});let me=S(`input`,{...H,ref:ue,id:Z,type:`range`,className:z(t,i,o),style:_,min:String(K.min),max:String(K.max),step:C===void 0?void 0:String(re),value:String(Y),disabled:I,"aria-valuemin":String(K.min),"aria-valuemax":String(K.max),"aria-valuenow":String(Y),"aria-valuetext":se,onInput:fe,onChange:pe});return ce?x(`div`,{ref:e=>{W.current=e??void 0},className:D(`w-full space-y-3`,s),style:v,"data-rue-range-root":`true`,children:[l!=null||u!=null||X.visible&&X.placement===`inline`?x(`div`,{className:`flex items-start justify-between gap-4`,children:[x(`div`,{className:`min-w-0 space-y-1`,children:[l==null?null:S(`label`,{htmlFor:Z,className:D(`block text-sm font-medium text-base-content`,f),children:l}),u==null?null:S(`p`,{className:D(`m-0 text-xs text-base-content/65`,p),children:u})]}),X.visible&&X.placement===`inline`?S(`output`,{htmlFor:Z,className:D(D(`shrink-0 rounded-full bg-base-200 px-3 py-1 text-xs font-medium text-base-content`,X.className),h),"data-rue-range-output":`true`,children:Q}):null]}):null,S(`div`,{className:`w-full`,children:me}),X.visible&&X.placement===`below`?S(`div`,{className:`flex justify-end`,children:S(`output`,{htmlFor:Z,className:D(D(`rounded-full bg-base-200 px-3 py-1 text-xs font-medium text-base-content`,X.className),h),"data-rue-range-output":`true`,children:Q})}):null,ie.length>0?S(`div`,{className:D(`relative h-10`,g),"data-rue-range-marks":`true`,children:ie.map(e=>{let t=Y>=e.value;return x(`span`,{className:D(`absolute top-0 flex -translate-x-1/2 flex-col items-center gap-1 text-[11px] ${t?`font-medium text-base-content`:`text-base-content/55`}`),style:{left:`${e.percent}%`},"data-rue-range-mark":String(e.value),children:[S(`span`,{className:`h-2 w-px ${t?`bg-base-content/80`:`bg-base-content/25`}`}),e.label==null?null:S(`span`,{className:`whitespace-nowrap`,children:e.label})]},e.key)})}):null,d==null?null:S(`p`,{className:D(`m-0 text-xs text-base-content/60`,m),children:d})]}):me},V=[`neutral`,`primary`,`secondary`,`accent`,`success`,`warning`,`info`,`error`],ee=[`xs`,`sm`,`md`,`lg`,`xl`],te=[`small`,`medium`,`large`],H=n=>f(r=>{let a=e(`div`,r);u(a,`component-preview not-prose text-base-content my-6 lg:my-12`);let c=e(`div`,a);s(a,c),u(c,`flex flex-wrap items-start justify-between gap-3`);let p=e(`div`,c);s(c,p);let m=e(`h2`,p);s(p,m),u(m,`component-preview-title mt-2 mb-1 text-lg font-semibold`),s(m,d(`# `));let h=l(`rue:slot:anchor`);s(m,h),o(()=>{let e=n.title;t(()=>g(e,m,h))});let v=l(`rue:slot:anchor`);s(p,v),o(()=>{let r=n.summary?f(()=>{let r=i(),a=e(`p`,r);s(r,a),u(a,`m-0 text-sm opacity-70`);let c=l(`rue:slot:anchor`);return s(a,c),o(()=>{let e=n.summary;t(()=>g(e,a,c))}),r}):``;t(()=>g(r,p,v))});let y=l(`rue:component:anchor`);s(a,y),o(()=>{let e=_(w,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:n.tab.value,onChange:e=>n.tab.value=e,className:`mb-3 mt-4`});t(()=>g(e,a,y))});let b=l(`rue:slot:anchor`);return s(a,b),o(()=>{let e=n.tab.value===`preview`?n.preview():f(()=>{let e=i(),r=l(`rue:component:anchor`);return s(e,r),o(()=>{let i=_(C,{className:`mt-2`,lang:`tsx`,code:n.code});t(()=>g(i,e,r))}),e});t(()=>g(e,a,b))}),a}),U=n=>f(r=>{let a=e(`div`,r);u(a,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let c=e(`table`,a);s(a,c),u(c,`table table-zebra`);let p=e(`thead`,c);s(c,p);let h=e(`tr`,p);s(p,h);let _=e(`th`,h);s(h,_),s(_,d(`属性`));let v=e(`th`,h);s(h,v),s(v,d(`说明`));let y=e(`th`,h);s(h,y),s(y,d(`类型`));let x=e(`th`,h);s(h,x),s(x,d(`默认值`));let S=e(`tbody`,c);s(c,S);let C=l(`rue:list:start`),w=l(`rue:list:end`);s(S,C),s(S,w);let T=new Map;return o(()=>{T=b({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,r,a,c,u)=>{g(f(()=>{let r=i(),a=e(`tr`,r);s(r,a),o(()=>{m(a,`key`,String(n.prop))});let c=e(`td`,a);s(a,c);let u=e(`code`,c);s(c,u);let d=l(`rue:slot:anchor`);s(u,d),o(()=>{let e=n.prop;t(()=>g(e,u,d))});let f=e(`td`,a);s(a,f);let p=l(`rue:slot:anchor`);s(f,p),o(()=>{let e=n.description;t(()=>g(e,f,p))});let h=e(`td`,a);s(a,h);let _=e(`code`,h);s(h,_);let v=l(`rue:slot:anchor`);s(_,v),o(()=>{let e=n.type;t(()=>g(e,_,v))});let y=e(`td`,a);s(a,y);let b=e(`code`,y);s(y,b);let x=l(`rue:slot:anchor`);return s(b,x),o(()=>{let e=n.defaultValue;t(()=>g(e,b,x))}),r}),r,a)}})}),a}),W=()=>{let{sliderValue:n}=y(`useSetup:0:0`,()=>h(()=>({sliderValue:y(`ref:1:0`,()=>a(`40`))})));return f(r=>{let i=e(`div`,r);u(i,`w-full max-w-xs space-y-3`);let a=l(`rue:component:anchor`);s(i,a),o(()=>{let e=_(B,{"data-testid":`range-basic`,min:0,max:100,value:n.value,onInput:e=>{n.value=e.target.value}});t(()=>g(e,i,a))});let c=e(`p`,i);s(i,c),u(c,`m-0 text-sm text-base-content/70`),s(c,d(`当前值：`));let f=v(c);return s(c,f),o(()=>{p(f,n.value)}),i})},G=()=>{let{bandwidth:n}=y(`useSetup:0:0:dup1`,()=>h(()=>({bandwidth:y(`ref:1:1`,()=>a(250))})));return f(r=>{let i=e(`div`,r);u(i,`w-full max-w-lg space-y-4 rounded-box border border-base-300 bg-base-100 p-5`);let a=l(`rue:component:anchor`);s(i,a),o(()=>{let e=_(B,{min:100,max:1e3,step:50,value:n.value,color:`primary`,label:`边缘带宽`,hint:`滑动查看不同档位的交付能力。`,helper:`超过 500 Mbps 后，建议同步升级防护策略与监控采样。`,showValue:{formatter:e=>`${e} Mbps`},marks:[{value:100,label:`Lite`},{value:250,label:`Start`},{value:500,label:`Growth`},{value:750,label:`Scale`},{value:1e3,label:`Max`}],onValueChange:e=>{n.value=e}});t(()=>g(e,i,a))});let c=e(`div`,i);s(i,c),u(c,`grid gap-3 rounded-box bg-base-200/70 p-4 text-sm sm:grid-cols-3`);let f=e(`div`,c);s(c,f);let m=e(`div`,f);s(f,m),u(m,`text-xs uppercase tracking-wide text-base-content/50`),s(m,d(`每秒请求`));let h=e(`div`,f);s(f,h),u(h,`mt-1 text-lg font-semibold text-base-content`);let y=v(h);s(h,y),o(()=>{p(y,Math.round(n.value/10*18))}),s(h,d(`k`));let b=e(`div`,c);s(c,b);let x=e(`div`,b);s(b,x),u(x,`text-xs uppercase tracking-wide text-base-content/50`),s(x,d(`区域副本`));let S=e(`div`,b);s(b,S),u(S,`mt-1 text-lg font-semibold text-base-content`);let C=v(S);s(S,C),o(()=>{p(C,n.value>=500?`6 个`:`3 个`)});let w=e(`div`,c);s(c,w);let T=e(`div`,w);s(w,T),u(T,`text-xs uppercase tracking-wide text-base-content/50`),s(T,d(`推荐套餐`));let E=e(`div`,w);s(w,E),u(E,`mt-1 text-lg font-semibold text-base-content`);let D=v(E);return s(E,D),o(()=>{p(D,n.value>=750?`Enterprise`:n.value>=500?`Scale`:n.value>=250?`Growth`:`Starter`)}),i})},ne=()=>{let{seats:n,committedSeats:r}=y(`useSetup:0:0:dup2`,()=>h(()=>({seats:y(`ref:1:2`,()=>a(12)),committedSeats:y(`ref:1:3`,()=>a(12))})));return f(i=>{let a=e(`div`,i);u(a,`w-full max-w-lg rounded-box border border-base-300 bg-base-100 p-5`);let c=l(`rue:component:anchor`);s(a,c),o(()=>{let e=_(B,{min:5,max:60,step:5,value:n.value,color:`secondary`,showValue:{formatter:e=>`${e} seats`,placement:`below`},label:`团队席位`,hint:`拖动时实时更新预算，松手后再提交确认值。`,marks:[5,15,30,45,60],onValueChange:e=>{n.value=e},onValueCommit:e=>{r.value=e}});t(()=>g(e,a,c))});let f=e(`div`,a);s(a,f),u(f,`mt-4 grid gap-3 text-sm sm:grid-cols-2`);let m=e(`div`,f);s(f,m),u(m,`rounded-box bg-base-200/70 p-4`);let h=e(`div`,m);s(m,h),u(h,`text-xs uppercase tracking-wide text-base-content/50`),s(h,d(`实时预算`));let y=e(`div`,m);s(m,y),u(y,`mt-2 text-lg font-semibold text-base-content`),s(y,d(`¥ `));let b=v(y);s(y,b),o(()=>{p(b,n.value*129)}),s(y,d(` / 月`));let x=e(`div`,f);s(f,x),u(x,`rounded-box bg-base-200/70 p-4`);let S=e(`div`,x);s(x,S),u(S,`text-xs uppercase tracking-wide text-base-content/50`),s(S,d(`已确认席位`));let C=e(`div`,x);s(x,C),u(C,`mt-2 text-lg font-semibold text-base-content`);let w=v(C);return s(C,w),o(()=>{p(w,r.value)}),s(C,d(` seats`)),a})},K=()=>{let{value:n}=y(`useSetup:0:0:dup3`,()=>h(()=>({value:y(`ref:1:4`,()=>a(25))})));return f(r=>{let i=e(`div`,r);u(i,`w-full max-w-sm`);let a=l(`rue:component:anchor`);return s(i,a),o(()=>{let e=_(B,{min:0,max:100,value:n.value,step:25,showValue:{placement:`below`,formatter:e=>`${e}%`},marks:[{value:0,label:`1`},{value:25,label:`2`},{value:50,label:`3`},{value:75,label:`4`},{value:100,label:`5`}],onValueChange:e=>{n.value=e}});t(()=>g(e,i,a))}),i})},re=()=>{let{values:n}=y(`useSetup:0:0:dup4`,()=>h(()=>({values:y(`ref:1:5`,()=>a({neutral:40,primary:40,secondary:40,accent:40,success:40,warning:40,info:40,error:40}))})));return f(r=>{let a=e(`div`,r);u(a,`grid gap-4`);let c=l(`rue:list:start`),d=l(`rue:list:end`);s(a,c),s(a,d);let h=new Map;return o(()=>{h=b({items:V||[],getKey:(e,t)=>e,elements:h,parent:c.parentNode,before:d,singleRoot:!0,trackIndex:!1,start:c,renderItem:(r,a,c,d,h)=>{g(f(()=>{let a=i(),c=e(`div`,a);s(a,c),o(()=>{m(c,`key`,String(r))}),u(c,`space-y-2 rounded-box border border-base-300 bg-base-100 p-4`);let d=e(`div`,c);s(c,d),u(d,`text-xs uppercase tracking-wide text-base-content/60`);let f=v(d);s(d,f),o(()=>{p(f,r)});let h=l(`rue:component:anchor`);return s(c,h),o(()=>{let e=_(B,{color:r,min:0,max:100,value:n.value[r],showValue:!0,onValueChange:e=>{n.value={...n.value,[r]:e}}});t(()=>g(e,c,h))}),a}),a,c)}})}),a})},q=()=>{let{value:n}=y(`useSetup:0:0:dup5`,()=>h(()=>({value:y(`ref:1:6`,()=>a(40))})));return f(r=>{let i=e(`div`,r);u(i,`w-full max-w-sm space-y-3 rounded-box border border-base-300 bg-base-100 p-4`);let a=l(`rue:component:anchor`);return s(i,a),o(()=>{let e=_(B,{min:0,max:100,value:n.value,showValue:{formatter:e=>`mix ${e}`},className:`text-blue-300 [--range-bg:orange] [--range-thumb:blue] [--range-fill:0]`,onValueChange:e=>{n.value=e}});t(()=>g(e,i,a))}),i})},J=[{prop:`className`,description:`追加到原生 input 的类名，适合继续覆写 CSS 变量`,type:`string`,defaultValue:`-`},{prop:`color`,description:`语义色，映射到 range-* 颜色类`,type:`'neutral' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'info' | 'error'`,defaultValue:`-`},{prop:`defaultValue`,description:`非受控初始值`,type:`string | number`,defaultValue:`-`},{prop:`formatter`,description:`值格式化函数，可与 showValue 组合使用`,type:`(value: number, info: { min: number; max: number; percent: number }) => any`,defaultValue:`-`},{prop:`helper`,description:`底部辅助文案`,type:`any`,defaultValue:`-`},{prop:`hint`,description:`标题下方的简短说明`,type:`any`,defaultValue:`-`},{prop:`label`,description:`顶部标题，自动关联 input id`,type:`any`,defaultValue:`-`},{prop:`marks`,description:`刻度点，可传 number / string 或 { value, label } 数组`,type:`Array<string | number | { value: string | number; label?: any }>`,defaultValue:`-`},{prop:`max`,description:`最大值`,type:`string | number`,defaultValue:`100`},{prop:`min`,description:`最小值`,type:`string | number`,defaultValue:`0`},{prop:`onValueChange`,description:`拖动过程中的语义回调，返回解析后的 number`,type:`(value: number, event: Event) => void`,defaultValue:`-`},{prop:`onValueCommit`,description:`原生 change 阶段的语义回调，适合提交确认值`,type:`(value: number, event: Event) => void`,defaultValue:`-`},{prop:`rootClassName`,description:`增强结构外层容器类名，仅在展示层激活时生效`,type:`string`,defaultValue:`-`},{prop:`showValue`,description:`显示当前值，可配置 formatter、placement 和 className`,type:`boolean | { formatter?: (value: number, info: { min: number; max: number; percent: number }) => any; placement?: 'inline' | 'below'; className?: string }`,defaultValue:`false`},{prop:`size`,description:`尺寸，支持 xs-xl 以及 small / medium / large 别名`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'medium' | 'large'`,defaultValue:`'md'`},{prop:`step`,description:`步长`,type:`string | number`,defaultValue:`1`},{prop:`value`,description:`受控值`,type:`string | number`,defaultValue:`-`}],Y=()=>{let{tabBasic:n,tabStory:r,tabSteps:c,tabColors:m,tabSizes:b,tabCommit:C,tabCustom:w}=y(`useSetup:0:0:dup6`,()=>h(()=>({tabBasic:y(`ref:1:7`,()=>a(`preview`)),tabStory:y(`ref:1:8`,()=>a(`preview`)),tabSteps:y(`ref:1:9`,()=>a(`preview`)),tabColors:y(`ref:1:10`,()=>a(`preview`)),tabSizes:y(`ref:1:11`,()=>a(`preview`)),tabCommit:y(`ref:1:12`,()=>a(`preview`)),tabCustom:y(`ref:1:13`,()=>a(`preview`))})));return f(a=>{let h=i(),y=l(`rue:component:anchor`);return s(h,y),g(_(T,{children:f(()=>{let a=i(),f=e(`div`,a);s(a,f),u(f,`max-w-none prose prose-sm md:prose-base`);let h=e(`h1`,f);s(f,h),s(h,d(`Range Slider 范围选择`));let y=e(`p`,f);s(f,y),u(y,`mt-3 mb-3 text-sm`),s(y,d(`Range 仍然坚持原生`));let T=e(`code`,y);s(y,T),s(T,d(`input type="range"`));let E=v(y);s(y,E),p(E,` `),s(y,d(`的语义，但不再只是一条裸滑杆。现在可以直接在组件层补齐标题、提示、刻度、值展示和语义回调，设计页也按能力分层重新组织。`));let D=l(`rue:component:anchor`);s(f,D),o(()=>{let e=_(H,{title:`Range`,summary:`保留原来的最小兼容写法；如果你只想要一个原生滑杆，API 仍然保持直接。`,tab:n,preview:()=>S(W,{}),code:`<Range min={0} max={100} value={40} />`});t(()=>g(e,f,D))});let O=l(`rue:component:anchor`);s(f,O),o(()=>{let e=_(H,{title:`带文案与实时值`,summary:`把 label、hint、helper、showValue 和 marks 叠到组件自身，适合做套餐档位和配置面板。`,tab:r,preview:()=>S(G,{}),code:`const bandwidth = ref(250)

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
/>`});t(()=>g(e,f,O))});let k=l(`rue:component:anchor`);s(f,k),o(()=>{let e=_(H,{title:`With steps and measure`,summary:`旧 demo 保留，但把刻度线和标签收进 marks，减少样板代码。`,tab:c,preview:()=>S(K,{}),code:`const value = ref(25)

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
/>`});t(()=>g(e,f,k))});let A=l(`rue:component:anchor`);s(f,A),o(()=>{let e=_(H,{title:`Range colors`,summary:`保留原有颜色矩阵，同时展示增强 API 与原有颜色类可以自然叠加。`,tab:m,preview:()=>S(re,{}),code:`const colors = ['neutral', 'primary', 'secondary', 'accent', 'success', 'warning', 'info', 'error'] as const
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
</div>`});t(()=>g(e,f,A))});let j=l(`rue:component:anchor`);s(f,j),o(()=>{let e=_(H,{title:`Sizes`,summary:`保留 xs 到 xl 的原始尺寸，同时补上 small / medium / large 三个别名，方便和其他组件对齐。`,tab:b,preview:()=>x(`div`,{className:`space-y-6`,children:[S(`div`,{className:`flex w-full max-w-sm flex-col gap-4`,children:ee.map((e,t)=>S(B,{size:e,min:0,max:100,value:30+t*10},e))}),S(`div`,{className:`grid gap-3 rounded-box border border-dashed border-base-300 bg-base-100 p-4 text-sm sm:grid-cols-3`,children:te.map((e,t)=>x(`div`,{className:`space-y-2`,children:[S(`div`,{className:`text-xs uppercase tracking-wide text-base-content/60`,children:e}),S(B,{size:e,min:0,max:100,value:35+t*20})]},e))})]}),code:`<Range size="xs" min={0} max={100} value={30} />
<Range size="sm" min={0} max={100} value={40} />
<Range size="md" min={0} max={100} value={50} />
<Range size="lg" min={0} max={100} value={60} />
<Range size="xl" min={0} max={100} value={70} />

<Range size="small" min={0} max={100} value={35} />
<Range size="medium" min={0} max={100} value={55} />
<Range size="large" min={0} max={100} value={75} />`});t(()=>g(e,f,j))});let M=l(`rue:component:anchor`);s(f,M),o(()=>{let e=_(H,{title:`受控提交`,summary:`拖动中用 onValueChange 更新即时反馈，松手后用 onValueCommit 记录确认值。`,tab:C,preview:()=>S(ne,{}),code:`const seats = ref(12)
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
/>`});t(()=>g(e,f,M))});let N=l(`rue:component:anchor`);s(f,N),o(()=>{let e=_(H,{title:`Range with custom color and no fill`,summary:`原来的自定义 CSS 变量方案继续可用；增强 API 不会挡住底层变量覆写。`,tab:w,preview:()=>S(q,{}),code:`const value = ref(40)

<Range
  min={0}
  max={100}
  value={value.value}
  showValue={{ formatter: currentValue => 'mix ' + currentValue }}
  className="text-blue-300 [--range-bg:orange] [--range-thumb:blue] [--range-fill:0]"
  onValueChange={nextValue => {
    value.value = nextValue
  }}
/>`});t(()=>g(e,f,N))});let P=e(`div`,f);s(f,P),u(P,`component-preview not-prose text-base-content my-6 lg:my-12`);let F=e(`h2`,P);s(P,F),u(F,`component-preview-title mt-2 mb-3 text-lg font-semibold`),s(F,d(`# API`));let I=e(`p`,P);s(P,I),u(I,`mb-4 text-sm text-base-content/70`),s(I,d(`不做增强展示时，Range 仍然是一个直接透传原生属性的滑杆；一旦传入`));let L=e(`code`,I);s(I,L),s(L,d(`label`)),s(I,d(`、`));let R=e(`code`,I);s(I,R),s(R,d(`showValue`)),s(I,d(`、`));let z=e(`code`,I);s(I,z),s(z,d(`marks`)),s(I,d(`等属性，就会自动切换到更完整的展示结构。`));let V=l(`rue:component:anchor`);return s(P,V),o(()=>{let e=_(U,{rows:J});t(()=>g(e,P,V))}),a})}),h,y),h})};export{Y as default};