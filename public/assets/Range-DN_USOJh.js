import{F as e,I as t,K as n,L as r,N as i,Q as a,R as o,S as s,W as c,_t as l,d as u,gt as d,l as f,mt as p,ot as m,pt as h,t as g,ut as _,z as v}from"./vapor-runtime-B3ypJaOM.js";import{a as y,n as b}from"./vapor-helpers-vapor-CER7Yupw.js";import{n as x,t as S}from"./src-BhCwGZbQ.js";import{n as C}from"./SidebarPlaygroundDesign-DJJx0NbZ.js";import{t as w}from"./Code-DOCCgQFa.js";import{t as T}from"./tabs-Cu0uJJtf.js";var E=0,D=(e,t)=>t?`${e} ${t}`:e,O=(e,t)=>{let n=Number(e);return Number.isFinite(n)?n:t},k=(e,t,n)=>e<t?t:e>n?n:e,ee=(e,t)=>{let n=O(e,0),r=O(t,100);return r<=n?{min:n,max:n+1}:{min:n,max:r}},A=e=>{let t=O(e,1);return t>0?t:1},j=e=>{switch(e){case`small`:return`sm`;case`default`:case`medium`:return`md`;case`large`:return`lg`;default:return e}},M=(e,t,n,r)=>k(O(e,r),t,n),N=(e,t,n)=>(e-t)/(n-t)*100,P=e=>e?e===!0?{visible:!0,placement:`inline`}:{visible:!0,placement:e.placement??`inline`,className:e.className,formatter:e.formatter}:{visible:!1,placement:`inline`},F=e=>typeof e==`object`&&!!e&&`value`in e,I=(e,t,n)=>e?.length?e.map((e,r)=>{let i=F(e)?e.value:e,a=M(i,t,n,t),o=F(e)&&`label`in e?e.label:String(i);return{key:`${r}-${String(i)}`,value:a,label:o,percent:N(a,t,n)}}).sort((e,t)=>e.value-t.value):[],L=(e,t,n)=>typeof t==`function`?t(e,n):String(e),R=(e,t,n)=>{let r=`range`;e&&(r+=` range-${e}`);let i=j(t);return i&&(r+=` range-${i}`),n&&(r+=` ${n}`),r},z=({id:e,color:t,size:n,className:r,rootClassName:i,label:a,hint:o,helper:c,labelClassName:l,hintClassName:u,helperClassName:f,valueClassName:p,marksClassName:g,style:_,rootStyle:v,min:y,max:b,step:C,value:w,defaultValue:T,showValue:O,formatter:k,marks:j,disabled:F,onInput:z,onChange:B,onValueChange:te,onValueCommit:ne,...V})=>{let H=h(),U=h(),W=V.ref,re=m(`rue-range-${E++}`),G=ee(y,b),ie=A(C),K=w!==void 0,q=m(M(T??w??G.min,G.min,G.max,G.min)),J=K?M(w,G.min,G.max,q.value):M(q.value,G.min,G.max,G.min),Y=P(O),X=I(j,G.min,G.max),Z=e??re.value,ae={min:G.min,max:G.max,percent:N(J,G.min,G.max)},oe=Y.formatter??k,Q=L(J,oe,ae),se=typeof Q==`string`||typeof Q==`number`?String(Q):void 0,ce=a!=null||o!=null||c!=null||Y.visible||X.length>0||!!i||!!v||!!l||!!u||!!f||!!p||!!g;`ref`in V&&delete V.ref;let le=e=>{if(typeof W==`function`){W(e);return}W&&typeof W==`object`&&(W.current=e??void 0)},ue=e=>{H.current=e??void 0,le(e)},de=e=>L(e,oe,{min:G.min,max:G.max,percent:N(e,G.min,G.max)}),$=e=>{let t=de(e),n=typeof t==`string`||typeof t==`number`?String(t):void 0;H.current&&(H.current.value=String(e),H.current.setAttribute(`aria-valuenow`,String(e)),n===void 0?H.current.removeAttribute(`aria-valuetext`):H.current.setAttribute(`aria-valuetext`,n)),U.current&&(n!==void 0&&U.current.querySelectorAll(`[data-rue-range-output="true"]`).forEach(e=>{e.textContent=n}),U.current.querySelectorAll(`[data-rue-range-mark]`).forEach(t=>{let n=t,r=e>=Number(n.getAttribute(`data-rue-range-mark`));n.className=`absolute top-0 flex -translate-x-1/2 flex-col items-center gap-1 text-[11px] ${r?`font-medium text-base-content`:`text-base-content/55`}`;let i=n.firstElementChild;i&&(i.className=r?`h-2 w-px bg-base-content/80`:`h-2 w-px bg-base-content/25`)}))},fe=e=>{let t=e.target,n=M(t?.value,G.min,G.max,J);K||(q.value=n,$(n)),z?.(e),te?.(n,e)},pe=e=>{let t=e.target,n=M(t?.value,G.min,G.max,J);K||(q.value=n,$(n)),B?.(e),ne?.(n,e)};s(()=>{$(J)}),d(()=>w,e=>{K&&$(M(e,G.min,G.max,q.value))},{immediate:!0});let me=S(`input`,{...V,ref:ue,id:Z,type:`range`,className:R(t,n,r),style:_,min:String(G.min),max:String(G.max),step:C===void 0?void 0:String(ie),value:String(J),disabled:F,"aria-valuemin":String(G.min),"aria-valuemax":String(G.max),"aria-valuenow":String(J),"aria-valuetext":se,onInput:fe,onChange:pe});return ce?x(`div`,{ref:e=>{U.current=e??void 0},className:D(`w-full space-y-3`,i),style:v,"data-rue-range-root":`true`,children:[a!=null||o!=null||Y.visible&&Y.placement===`inline`?x(`div`,{className:`flex items-start justify-between gap-4`,children:[x(`div`,{className:`min-w-0 space-y-1`,children:[a==null?null:S(`label`,{htmlFor:Z,className:D(`block text-sm font-medium text-base-content`,l),children:a}),o==null?null:S(`p`,{className:D(`m-0 text-xs text-base-content/65`,u),children:o})]}),Y.visible&&Y.placement===`inline`?S(`output`,{htmlFor:Z,className:D(D(`shrink-0 rounded-full bg-base-200 px-3 py-1 text-xs font-medium text-base-content`,Y.className),p),"data-rue-range-output":`true`,children:Q}):null]}):null,S(`div`,{className:`w-full`,children:me}),Y.visible&&Y.placement===`below`?S(`div`,{className:`flex justify-end`,children:S(`output`,{htmlFor:Z,className:D(D(`rounded-full bg-base-200 px-3 py-1 text-xs font-medium text-base-content`,Y.className),p),"data-rue-range-output":`true`,children:Q})}):null,X.length>0?S(`div`,{className:D(`relative h-10`,g),"data-rue-range-marks":`true`,children:X.map(e=>{let t=J>=e.value;return x(`span`,{className:D(`absolute top-0 flex -translate-x-1/2 flex-col items-center gap-1 text-[11px] ${t?`font-medium text-base-content`:`text-base-content/55`}`),style:{left:`${e.percent}%`},"data-rue-range-mark":String(e.value),children:[S(`span`,{className:`h-2 w-px ${t?`bg-base-content/80`:`bg-base-content/25`}`}),e.label==null?null:S(`span`,{className:`whitespace-nowrap`,children:e.label})]},e.key)})}):null,c==null?null:S(`p`,{className:D(`m-0 text-xs text-base-content/60`,f),children:c})]}):me},B=[`neutral`,`primary`,`secondary`,`accent`,`success`,`warning`,`info`,`error`],te=[`xs`,`sm`,`md`,`lg`,`xl`],ne=[`small`,`medium`,`large`],V=a=>u(s=>{let c=r(`div`,s);n(c,`component-preview not-prose text-base-content my-6 lg:my-12`);let d=r(`div`,c);i(c,d),n(d,`flex flex-wrap items-start justify-between gap-3`);let p=r(`div`,d);i(d,p);let m=r(`h2`,p);i(p,m),n(m,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(m,o(`# `));let h=e(`rue:slot:anchor`);i(m,h),l(()=>{let e=a.title;_(()=>f(e,m,h))});let v=e(`rue:slot:anchor`);i(p,v),l(()=>{let o=a.summary?u(()=>{let o=t(),s=r(`p`,o);i(o,s),n(s,`m-0 text-sm opacity-70`);let c=e(`rue:slot:anchor`);return i(s,c),l(()=>{let e=a.summary;_(()=>f(e,s,c))}),o}):``;_(()=>f(o,p,v))});let y=e(`rue:component:anchor`);i(c,y),l(()=>{let e=g(T,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:a.tab.value,onChange:e=>a.tab.value=e,className:`mb-3 mt-4`});_(()=>f(e,c,y))});let b=e(`rue:slot:anchor`);return i(c,b),l(()=>{let n=a.tab.value===`preview`?a.preview():u(()=>{let n=t(),r=e(`rue:component:anchor`);return i(n,r),l(()=>{let e=g(w,{className:`mt-2`,lang:`tsx`,code:a.code});_(()=>f(e,n,r))}),n});_(()=>f(n,c,b))}),c}),H=a=>u(s=>{let d=r(`div`,s);n(d,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let p=r(`table`,d);i(d,p),n(p,`table table-zebra`);let m=r(`thead`,p);i(p,m);let h=r(`tr`,m);i(m,h);let g=r(`th`,h);i(h,g),i(g,o(`属性`));let v=r(`th`,h);i(h,v),i(v,o(`说明`));let y=r(`th`,h);i(h,y),i(y,o(`类型`));let x=r(`th`,h);i(h,x),i(x,o(`默认值`));let S=r(`tbody`,p);i(p,S);let C=e(`rue:list:start`),w=e(`rue:list:end`);i(S,C),i(S,w);let T=new Map;return l(()=>{T=b({items:a.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,a,o,s,d)=>{f(u(()=>{let a=t(),o=r(`tr`,a);i(a,o),l(()=>{c(o,`key`,String(n.prop))});let s=r(`td`,o);i(o,s);let u=r(`code`,s);i(s,u);let d=e(`rue:slot:anchor`);i(u,d),l(()=>{let e=n.prop;_(()=>f(e,u,d))});let p=r(`td`,o);i(o,p);let m=e(`rue:slot:anchor`);i(p,m),l(()=>{let e=n.description;_(()=>f(e,p,m))});let h=r(`td`,o);i(o,h);let g=r(`code`,h);i(h,g);let v=e(`rue:slot:anchor`);i(g,v),l(()=>{let e=n.type;_(()=>f(e,g,v))});let y=r(`td`,o);i(o,y);let b=r(`code`,y);i(y,b);let x=e(`rue:slot:anchor`);return i(b,x),l(()=>{let e=n.defaultValue;_(()=>f(e,b,x))}),a}),a,o)}})}),d}),U=()=>{let{sliderValue:t}=y(`useSetup:0:0`,()=>p(()=>({sliderValue:y(`ref:1:0`,()=>m(`40`))})));return u(s=>{let c=r(`div`,s);n(c,`w-full max-w-xs space-y-3`);let u=e(`rue:component:anchor`);i(c,u),l(()=>{let e=g(z,{"data-testid":`range-basic`,min:0,max:100,value:t.value,onInput:e=>{t.value=e.target.value}});_(()=>f(e,c,u))});let d=r(`p`,c);i(c,d),n(d,`m-0 text-sm text-base-content/70`),i(d,o(`当前值：`));let p=v(d);return i(d,p),l(()=>{a(p,t.value)}),c})},W=()=>{let{bandwidth:t}=y(`useSetup:0:0:dup1`,()=>p(()=>({bandwidth:y(`ref:1:1`,()=>m(250))})));return u(s=>{let c=r(`div`,s);n(c,`w-full max-w-lg space-y-4 rounded-box border border-base-300 bg-base-100 p-5`);let u=e(`rue:component:anchor`);i(c,u),l(()=>{let e=g(z,{min:100,max:1e3,step:50,value:t.value,color:`primary`,label:`边缘带宽`,hint:`滑动查看不同档位的交付能力。`,helper:`超过 500 Mbps 后，建议同步升级防护策略与监控采样。`,showValue:{formatter:e=>`${e} Mbps`},marks:[{value:100,label:`Lite`},{value:250,label:`Start`},{value:500,label:`Growth`},{value:750,label:`Scale`},{value:1e3,label:`Max`}],onValueChange:e=>{t.value=e}});_(()=>f(e,c,u))});let d=r(`div`,c);i(c,d),n(d,`grid gap-3 rounded-box bg-base-200/70 p-4 text-sm sm:grid-cols-3`);let p=r(`div`,d);i(d,p);let m=r(`div`,p);i(p,m),n(m,`text-xs uppercase tracking-wide text-base-content/50`),i(m,o(`每秒请求`));let h=r(`div`,p);i(p,h),n(h,`mt-1 text-lg font-semibold text-base-content`);let y=v(h);i(h,y),l(()=>{a(y,Math.round(t.value/10*18))}),i(h,o(`k`));let b=r(`div`,d);i(d,b);let x=r(`div`,b);i(b,x),n(x,`text-xs uppercase tracking-wide text-base-content/50`),i(x,o(`区域副本`));let S=r(`div`,b);i(b,S),n(S,`mt-1 text-lg font-semibold text-base-content`);let C=v(S);i(S,C),l(()=>{a(C,t.value>=500?`6 个`:`3 个`)});let w=r(`div`,d);i(d,w);let T=r(`div`,w);i(w,T),n(T,`text-xs uppercase tracking-wide text-base-content/50`),i(T,o(`推荐套餐`));let E=r(`div`,w);i(w,E),n(E,`mt-1 text-lg font-semibold text-base-content`);let D=v(E);return i(E,D),l(()=>{a(D,t.value>=750?`Enterprise`:t.value>=500?`Scale`:t.value>=250?`Growth`:`Starter`)}),c})},re=()=>{let{seats:t,committedSeats:s}=y(`useSetup:0:0:dup2`,()=>p(()=>({seats:y(`ref:1:2`,()=>m(12)),committedSeats:y(`ref:1:3`,()=>m(12))})));return u(c=>{let u=r(`div`,c);n(u,`w-full max-w-lg rounded-box border border-base-300 bg-base-100 p-5`);let d=e(`rue:component:anchor`);i(u,d),l(()=>{let e=g(z,{min:5,max:60,step:5,value:t.value,color:`secondary`,showValue:{formatter:e=>`${e} seats`,placement:`below`},label:`团队席位`,hint:`拖动时实时更新预算，松手后再提交确认值。`,marks:[5,15,30,45,60],onValueChange:e=>{t.value=e},onValueCommit:e=>{s.value=e}});_(()=>f(e,u,d))});let p=r(`div`,u);i(u,p),n(p,`mt-4 grid gap-3 text-sm sm:grid-cols-2`);let m=r(`div`,p);i(p,m),n(m,`rounded-box bg-base-200/70 p-4`);let h=r(`div`,m);i(m,h),n(h,`text-xs uppercase tracking-wide text-base-content/50`),i(h,o(`实时预算`));let y=r(`div`,m);i(m,y),n(y,`mt-2 text-lg font-semibold text-base-content`),i(y,o(`¥ `));let b=v(y);i(y,b),l(()=>{a(b,t.value*129)}),i(y,o(` / 月`));let x=r(`div`,p);i(p,x),n(x,`rounded-box bg-base-200/70 p-4`);let S=r(`div`,x);i(x,S),n(S,`text-xs uppercase tracking-wide text-base-content/50`),i(S,o(`已确认席位`));let C=r(`div`,x);i(x,C),n(C,`mt-2 text-lg font-semibold text-base-content`);let w=v(C);return i(C,w),l(()=>{a(w,s.value)}),i(C,o(` seats`)),u})},G=()=>{let{value:t}=y(`useSetup:0:0:dup3`,()=>p(()=>({value:y(`ref:1:4`,()=>m(25))})));return u(a=>{let o=r(`div`,a);n(o,`w-full max-w-sm`);let s=e(`rue:component:anchor`);return i(o,s),l(()=>{let e=g(z,{min:0,max:100,value:t.value,step:25,showValue:{placement:`below`,formatter:e=>`${e}%`},marks:[{value:0,label:`1`},{value:25,label:`2`},{value:50,label:`3`},{value:75,label:`4`},{value:100,label:`5`}],onValueChange:e=>{t.value=e}});_(()=>f(e,o,s))}),o})},ie=()=>{let{values:o}=y(`useSetup:0:0:dup4`,()=>p(()=>({values:y(`ref:1:5`,()=>m({neutral:40,primary:40,secondary:40,accent:40,success:40,warning:40,info:40,error:40}))})));return u(s=>{let d=r(`div`,s);n(d,`grid gap-4`);let p=e(`rue:list:start`),m=e(`rue:list:end`);i(d,p),i(d,m);let h=new Map;return l(()=>{h=b({items:B||[],getKey:(e,t)=>e,elements:h,parent:p.parentNode,before:m,singleRoot:!0,trackIndex:!1,start:p,renderItem:(s,d,p,m,h)=>{f(u(()=>{let u=t(),d=r(`div`,u);i(u,d),l(()=>{c(d,`key`,String(s))}),n(d,`space-y-2 rounded-box border border-base-300 bg-base-100 p-4`);let p=r(`div`,d);i(d,p),n(p,`text-xs uppercase tracking-wide text-base-content/60`);let m=v(p);i(p,m),l(()=>{a(m,s)});let h=e(`rue:component:anchor`);return i(d,h),l(()=>{let e=g(z,{color:s,min:0,max:100,value:o.value[s],showValue:!0,onValueChange:e=>{o.value={...o.value,[s]:e}}});_(()=>f(e,d,h))}),u}),d,p)}})}),d})},K=()=>{let{value:t}=y(`useSetup:0:0:dup5`,()=>p(()=>({value:y(`ref:1:6`,()=>m(40))})));return u(a=>{let o=r(`div`,a);n(o,`w-full max-w-sm space-y-3 rounded-box border border-base-300 bg-base-100 p-4`);let s=e(`rue:component:anchor`);return i(o,s),l(()=>{let e=g(z,{min:0,max:100,value:t.value,showValue:{formatter:e=>`mix ${e}`},className:`text-blue-300 [--range-bg:orange] [--range-thumb:blue] [--range-fill:0]`,onValueChange:e=>{t.value=e}});_(()=>f(e,o,s))}),o})},q=[{prop:`className`,description:`追加到原生 input 的类名，适合继续覆写 CSS 变量`,type:`string`,defaultValue:`-`},{prop:`color`,description:`语义色，映射到 range-* 颜色类`,type:`'neutral' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'info' | 'error'`,defaultValue:`-`},{prop:`defaultValue`,description:`非受控初始值`,type:`string | number`,defaultValue:`-`},{prop:`formatter`,description:`值格式化函数，可与 showValue 组合使用`,type:`(value: number, info: { min: number; max: number; percent: number }) => any`,defaultValue:`-`},{prop:`helper`,description:`底部辅助文案`,type:`any`,defaultValue:`-`},{prop:`hint`,description:`标题下方的简短说明`,type:`any`,defaultValue:`-`},{prop:`label`,description:`顶部标题，自动关联 input id`,type:`any`,defaultValue:`-`},{prop:`marks`,description:`刻度点，可传 number / string 或 { value, label } 数组`,type:`Array<string | number | { value: string | number; label?: any }>`,defaultValue:`-`},{prop:`max`,description:`最大值`,type:`string | number`,defaultValue:`100`},{prop:`min`,description:`最小值`,type:`string | number`,defaultValue:`0`},{prop:`onValueChange`,description:`拖动过程中的语义回调，返回解析后的 number`,type:`(value: number, event: Event) => void`,defaultValue:`-`},{prop:`onValueCommit`,description:`原生 change 阶段的语义回调，适合提交确认值`,type:`(value: number, event: Event) => void`,defaultValue:`-`},{prop:`rootClassName`,description:`增强结构外层容器类名，仅在展示层激活时生效`,type:`string`,defaultValue:`-`},{prop:`showValue`,description:`显示当前值，可配置 formatter、placement 和 className`,type:`boolean | { formatter?: (value: number, info: { min: number; max: number; percent: number }) => any; placement?: 'inline' | 'below'; className?: string }`,defaultValue:`false`},{prop:`size`,description:`尺寸，支持 xs-xl 以及 small / medium / large 别名`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'medium' | 'large'`,defaultValue:`'md'`},{prop:`step`,description:`步长`,type:`string | number`,defaultValue:`1`},{prop:`value`,description:`受控值`,type:`string | number`,defaultValue:`-`}],J=()=>{let{tabBasic:s,tabStory:d,tabSteps:h,tabColors:b,tabSizes:w,tabCommit:T,tabCustom:E}=y(`useSetup:0:0:dup6`,()=>p(()=>({tabBasic:y(`ref:1:7`,()=>m(`preview`)),tabStory:y(`ref:1:8`,()=>m(`preview`)),tabSteps:y(`ref:1:9`,()=>m(`preview`)),tabColors:y(`ref:1:10`,()=>m(`preview`)),tabSizes:y(`ref:1:11`,()=>m(`preview`)),tabCommit:y(`ref:1:12`,()=>m(`preview`)),tabCustom:y(`ref:1:13`,()=>m(`preview`))})));return u(p=>{let m=t(),y=e(`rue:component:anchor`);return i(m,y),f(g(C,{children:u(()=>{let u=t(),p=r(`div`,u);i(u,p),n(p,`max-w-none prose prose-sm md:prose-base`);let m=r(`h1`,p);i(p,m),i(m,o(`Range Slider 范围选择`));let y=r(`p`,p);i(p,y),n(y,`mt-3 mb-3 text-sm`),i(y,o(`Range 仍然坚持原生`));let C=r(`code`,y);i(y,C),i(C,o(`input type="range"`));let D=v(y);i(y,D),a(D,` `),i(y,o(`的语义，但不再只是一条裸滑杆。现在可以直接在组件层补齐标题、提示、刻度、值展示和语义回调，设计页也按能力分层重新组织。`));let O=r(`div`,p);i(p,O),n(O,`text-sm`);let k=r(`a`,O);i(O,k),c(k,`href`,`https://daisyui.com/components/range/`),c(k,`target`,`_blank`),i(k,o(`查看 Range 静态样式`));let ee=e(`rue:component:anchor`);i(p,ee),l(()=>{let e=g(V,{title:`Range`,summary:`保留原来的最小兼容写法；如果你只想要一个原生滑杆，API 仍然保持直接。`,tab:s,preview:()=>S(U,{}),code:`<Range min={0} max={100} value={40} />`});_(()=>f(e,p,ee))});let A=e(`rue:component:anchor`);i(p,A),l(()=>{let e=g(V,{title:`带文案与实时值`,summary:`把 label、hint、helper、showValue 和 marks 叠到组件自身，适合做套餐档位和配置面板。`,tab:d,preview:()=>S(W,{}),code:`const bandwidth = ref(250)

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
/>`});_(()=>f(e,p,A))});let j=e(`rue:component:anchor`);i(p,j),l(()=>{let e=g(V,{title:`With steps and measure`,summary:`旧 demo 保留，但把刻度线和标签收进 marks，减少样板代码。`,tab:h,preview:()=>S(G,{}),code:`const value = ref(25)

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
/>`});_(()=>f(e,p,j))});let M=e(`rue:component:anchor`);i(p,M),l(()=>{let e=g(V,{title:`Range colors`,summary:`保留原有颜色矩阵，同时展示增强 API 与原有颜色类可以自然叠加。`,tab:b,preview:()=>S(ie,{}),code:`const colors = ['neutral', 'primary', 'secondary', 'accent', 'success', 'warning', 'info', 'error'] as const
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
</div>`});_(()=>f(e,p,M))});let N=e(`rue:component:anchor`);i(p,N),l(()=>{let e=g(V,{title:`Sizes`,summary:`保留 xs 到 xl 的原始尺寸，同时补上 small / medium / large 三个别名，方便和其他组件对齐。`,tab:w,preview:()=>x(`div`,{className:`space-y-6`,children:[S(`div`,{className:`flex w-full max-w-sm flex-col gap-4`,children:te.map((e,t)=>S(z,{size:e,min:0,max:100,value:30+t*10},e))}),S(`div`,{className:`grid gap-3 rounded-box border border-dashed border-base-300 bg-base-100 p-4 text-sm sm:grid-cols-3`,children:ne.map((e,t)=>x(`div`,{className:`space-y-2`,children:[S(`div`,{className:`text-xs uppercase tracking-wide text-base-content/60`,children:e}),S(z,{size:e,min:0,max:100,value:35+t*20})]},e))})]}),code:`<Range size="xs" min={0} max={100} value={30} />
<Range size="sm" min={0} max={100} value={40} />
<Range size="md" min={0} max={100} value={50} />
<Range size="lg" min={0} max={100} value={60} />
<Range size="xl" min={0} max={100} value={70} />

<Range size="small" min={0} max={100} value={35} />
<Range size="medium" min={0} max={100} value={55} />
<Range size="large" min={0} max={100} value={75} />`});_(()=>f(e,p,N))});let P=e(`rue:component:anchor`);i(p,P),l(()=>{let e=g(V,{title:`受控提交`,summary:`拖动中用 onValueChange 更新即时反馈，松手后用 onValueCommit 记录确认值。`,tab:T,preview:()=>S(re,{}),code:`const seats = ref(12)
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
/>`});_(()=>f(e,p,P))});let F=e(`rue:component:anchor`);i(p,F),l(()=>{let e=g(V,{title:`Range with custom color and no fill`,summary:`原来的自定义 CSS 变量方案继续可用；增强 API 不会挡住底层变量覆写。`,tab:E,preview:()=>S(K,{}),code:`const value = ref(40)

<Range
  min={0}
  max={100}
  value={value.value}
  showValue={{ formatter: currentValue => 'mix ' + currentValue }}
  className="text-blue-300 [--range-bg:orange] [--range-thumb:blue] [--range-fill:0]"
  onValueChange={nextValue => {
    value.value = nextValue
  }}
/>`});_(()=>f(e,p,F))});let I=r(`div`,p);i(p,I),n(I,`component-preview not-prose text-base-content my-6 lg:my-12`);let L=r(`h2`,I);i(I,L),n(L,`component-preview-title mt-2 mb-3 text-lg font-semibold`),i(L,o(`# API`));let R=r(`p`,I);i(I,R),n(R,`mb-4 text-sm text-base-content/70`),i(R,o(`不做增强展示时，Range 仍然是一个直接透传原生属性的滑杆；一旦传入`));let B=r(`code`,R);i(R,B),i(B,o(`label`)),i(R,o(`、`));let J=r(`code`,R);i(R,J),i(J,o(`showValue`)),i(R,o(`、`));let Y=r(`code`,R);i(R,Y),i(Y,o(`marks`)),i(R,o(`等属性，就会自动切换到更完整的展示结构。`));let X=e(`rue:component:anchor`);return i(I,X),l(()=>{let e=g(H,{rows:q});_(()=>f(e,I,X))}),u})}),m,y),m})};export{J as default};