import{F as e,H as t,I as n,L as r,N as i,P as a,W as o,Y as s,c,ft as l,j as u,lt as d,pt as f,rt as p,t as m,u as h,ut as g,x as _}from"./vapor-runtime-CKndxKFn.js";import{a as v,n as y}from"./vapor-helpers-vapor-yxlhW-_4.js";import{n as b,t as x}from"./src-CqIWk1va.js";import{n as S}from"./SidebarPlaygroundDesign-CBV-3y9s.js";import{t as C}from"./Code-B1JFTu6m.js";import{t as w}from"./tabs-BbiCzXqJ.js";var T=0,E=(e,t)=>t?`${e} ${t}`:e,D=(e,t)=>{let n=Number(e);return Number.isFinite(n)?n:t},O=(e,t,n)=>e<t?t:e>n?n:e,k=(e,t)=>{let n=D(e,0),r=D(t,100);return r<=n?{min:n,max:n+1}:{min:n,max:r}},A=e=>{let t=D(e,1);return t>0?t:1},j=e=>{switch(e){case`small`:return`sm`;case`default`:case`medium`:return`md`;case`large`:return`lg`;default:return e}},M=(e,t,n,r)=>O(D(e,r),t,n),N=(e,t,n)=>(e-t)/(n-t)*100,ee=e=>e?e===!0?{visible:!0,placement:`inline`}:{visible:!0,placement:e.placement??`inline`,className:e.className,formatter:e.formatter}:{visible:!1,placement:`inline`},P=e=>typeof e==`object`&&!!e&&`value`in e,F=(e,t,n)=>e?.length?e.map((e,r)=>{let i=P(e)?e.value:e,a=M(i,t,n,t),o=P(e)&&`label`in e?e.label:String(i);return{key:`${r}-${String(i)}`,value:a,label:o,percent:N(a,t,n)}}).sort((e,t)=>e.value-t.value):[],I=(e,t,n)=>typeof t==`function`?t(e,n):String(e),L=(e,t,n)=>{let r=`range`;e&&(r+=` range-${e}`);let i=j(t);return i&&(r+=` range-${i}`),n&&(r+=` ${n}`),r},R=({id:e,color:t,size:n,className:r,rootClassName:i,label:a,hint:o,helper:s,labelClassName:c,hintClassName:u,helperClassName:f,valueClassName:m,marksClassName:h,style:g,rootStyle:v,min:y,max:S,step:C,value:w,defaultValue:D,showValue:O,formatter:j,marks:P,disabled:R,onInput:z,onChange:te,onValueChange:ne,onValueCommit:B,...V})=>{let H=d(),U=d(),W=V.ref,re=p(`rue-range-${T++}`),G=k(y,S),ie=A(C),K=w!==void 0,q=p(M(D??w??G.min,G.min,G.max,G.min)),J=K?M(w,G.min,G.max,q.value):M(q.value,G.min,G.max,G.min),Y=ee(O),X=F(P,G.min,G.max),Z=e??re.value,ae={min:G.min,max:G.max,percent:N(J,G.min,G.max)},oe=Y.formatter??j,Q=I(J,oe,ae),se=typeof Q==`string`||typeof Q==`number`?String(Q):void 0,ce=a!=null||o!=null||s!=null||Y.visible||X.length>0||!!i||!!v||!!c||!!u||!!f||!!m||!!h;`ref`in V&&delete V.ref;let le=e=>{if(typeof W==`function`){W(e);return}W&&typeof W==`object`&&(W.current=e??void 0)},ue=e=>{H.current=e??void 0,le(e)},de=e=>I(e,oe,{min:G.min,max:G.max,percent:N(e,G.min,G.max)}),$=e=>{let t=de(e),n=typeof t==`string`||typeof t==`number`?String(t):void 0;H.current&&(H.current.value=String(e),H.current.setAttribute(`aria-valuenow`,String(e)),n===void 0?H.current.removeAttribute(`aria-valuetext`):H.current.setAttribute(`aria-valuetext`,n)),U.current&&(n!==void 0&&U.current.querySelectorAll(`[data-rue-range-output="true"]`).forEach(e=>{e.textContent=n}),U.current.querySelectorAll(`[data-rue-range-mark]`).forEach(t=>{let n=t,r=e>=Number(n.getAttribute(`data-rue-range-mark`));n.className=`absolute top-0 flex -translate-x-1/2 flex-col items-center gap-1 text-[11px] ${r?`font-medium text-base-content`:`text-base-content/55`}`;let i=n.firstElementChild;i&&(i.className=r?`h-2 w-px bg-base-content/80`:`h-2 w-px bg-base-content/25`)}))},fe=e=>{let t=e.target,n=M(t?.value,G.min,G.max,J);K||(q.value=n,$(n)),z?.(e),ne?.(n,e)},pe=e=>{let t=e.target,n=M(t?.value,G.min,G.max,J);K||(q.value=n,$(n)),te?.(e),B?.(n,e)};_(()=>{$(J)}),l(()=>w,e=>{K&&$(M(e,G.min,G.max,q.value))},{immediate:!0});let me=x(`input`,{...V,ref:ue,id:Z,type:`range`,className:L(t,n,r),style:g,min:String(G.min),max:String(G.max),step:C===void 0?void 0:String(ie),value:String(J),disabled:R,"aria-valuemin":String(G.min),"aria-valuemax":String(G.max),"aria-valuenow":String(J),"aria-valuetext":se,onInput:fe,onChange:pe});return ce?b(`div`,{ref:e=>{U.current=e??void 0},className:E(`w-full space-y-3`,i),style:v,"data-rue-range-root":`true`,children:[a!=null||o!=null||Y.visible&&Y.placement===`inline`?b(`div`,{className:`flex items-start justify-between gap-4`,children:[b(`div`,{className:`min-w-0 space-y-1`,children:[a==null?null:x(`label`,{htmlFor:Z,className:E(`block text-sm font-medium text-base-content`,c),children:a}),o==null?null:x(`p`,{className:E(`m-0 text-xs text-base-content/65`,u),children:o})]}),Y.visible&&Y.placement===`inline`?x(`output`,{htmlFor:Z,className:E(E(`shrink-0 rounded-full bg-base-200 px-3 py-1 text-xs font-medium text-base-content`,Y.className),m),"data-rue-range-output":`true`,children:Q}):null]}):null,x(`div`,{className:`w-full`,children:me}),Y.visible&&Y.placement===`below`?x(`div`,{className:`flex justify-end`,children:x(`output`,{htmlFor:Z,className:E(E(`rounded-full bg-base-200 px-3 py-1 text-xs font-medium text-base-content`,Y.className),m),"data-rue-range-output":`true`,children:Q})}):null,X.length>0?x(`div`,{className:E(`relative h-10`,h),"data-rue-range-marks":`true`,children:X.map(e=>{let t=J>=e.value;return b(`span`,{className:E(`absolute top-0 flex -translate-x-1/2 flex-col items-center gap-1 text-[11px] ${t?`font-medium text-base-content`:`text-base-content/55`}`),style:{left:`${e.percent}%`},"data-rue-range-mark":String(e.value),children:[x(`span`,{className:`h-2 w-px ${t?`bg-base-content/80`:`bg-base-content/25`}`}),e.label==null?null:x(`span`,{className:`whitespace-nowrap`,children:e.label})]},e.key)})}):null,s==null?null:x(`p`,{className:E(`m-0 text-xs text-base-content/60`,f),children:s})]}):me},z=[`neutral`,`primary`,`secondary`,`accent`,`success`,`warning`,`info`,`error`],te=[`xs`,`sm`,`md`,`lg`,`xl`],ne=[`small`,`medium`,`large`],B=({title:t,summary:l,tab:d,preview:p,code:g})=>h(()=>{let _=e(`div`);o(_,`component-preview not-prose text-base-content my-6 lg:my-12`);let v=e(`div`);u(_,v),o(v,`flex flex-wrap items-start justify-between gap-3`);let y=e(`div`);u(v,y);let b=e(`h2`);u(y,b),o(b,`component-preview-title mt-2 mb-1 text-lg font-semibold`),u(b,n(`# `));let x=r(b);u(b,x),f(()=>{s(x,t)});let S=i(`rue:slot:anchor`);u(y,S),f(()=>{c(l?h(()=>{let t=a(),n=e(`p`);u(t,n),o(n,`m-0 text-sm opacity-70`);let i=r(n);return u(n,i),f(()=>{s(i,l)}),t}):``,y,S)});let T=i(`rue:component:anchor`);u(_,T),f(()=>{c(m(w,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:d.value,onChange:e=>d.value=e,className:`mb-3 mt-4`}),_,T)});let E=i(`rue:slot:anchor`);return u(_,E),f(()=>{c(d.value===`preview`?p():h(()=>{let e=a(),t=i(`rue:component:anchor`);return u(e,t),f(()=>{c(m(C,{className:`mt-2`,lang:`tsx`,code:g}),e,t)}),e}),_,E)}),_}),V=({rows:r})=>h(()=>{let s=e(`div`);o(s,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let l=e(`table`);u(s,l),o(l,`table table-zebra`);let d=e(`thead`);u(l,d);let p=e(`tr`);u(d,p);let m=e(`th`);u(p,m),u(m,n(`属性`));let g=e(`th`);u(p,g),u(g,n(`说明`));let _=e(`th`);u(p,_),u(_,n(`类型`));let v=e(`th`);u(p,v),u(v,n(`默认值`));let b=e(`tbody`);u(l,b);let x=i(`rue:list:start`),S=i(`rue:list:end`);u(b,x),u(b,S);let C=new Map;return f(()=>{C=y({items:r||[],getKey:(e,t)=>e.prop,elements:C,parent:b,before:S,singleRoot:!0,start:x,renderItem:(n,r,o,s,l)=>{c(h(()=>{let r=a(),o=e(`tr`);u(r,o),f(()=>{t(o,`key`,String(n.prop))});let s=e(`td`);u(o,s);let l=e(`code`);u(s,l);let d=i(`rue:slot:anchor`);u(l,d),f(()=>{let e=n.prop;c(e,l,d)});let p=e(`td`);u(o,p);let m=i(`rue:slot:anchor`);u(p,m),f(()=>{let e=n.description;c(e,p,m)});let h=e(`td`);u(o,h);let g=e(`code`);u(h,g);let _=i(`rue:slot:anchor`);u(g,_),f(()=>{let e=n.type;c(e,g,_)});let v=e(`td`);u(o,v);let y=e(`code`);u(v,y);let b=i(`rue:slot:anchor`);return u(y,b),f(()=>{let e=n.defaultValue;c(e,y,b)}),r}),r,o)}})}),s}),H=()=>{let{sliderValue:t}=v(`useSetup:0:0`,()=>g(()=>({sliderValue:v(`ref:1:0`,()=>p(`40`))})));return h(()=>{let a=e(`div`);o(a,`w-full max-w-xs space-y-3`);let l=i(`rue:component:anchor`);u(a,l),f(()=>{c(m(R,{"data-testid":`range-basic`,min:0,max:100,value:t.value,onInput:e=>{t.value=e.target.value}}),a,l)});let d=e(`p`);u(a,d),o(d,`m-0 text-sm text-base-content/70`),u(d,n(`当前值：`));let p=r(d);return u(d,p),f(()=>{s(p,t.value)}),a})},U=()=>{let{bandwidth:t}=v(`useSetup:0:0`,()=>g(()=>({bandwidth:v(`ref:1:1`,()=>p(250))})));return h(()=>{let a=e(`div`);o(a,`w-full max-w-lg space-y-4 rounded-box border border-base-300 bg-base-100 p-5`);let l=i(`rue:component:anchor`);u(a,l),f(()=>{c(m(R,{min:100,max:1e3,step:50,value:t.value,color:`primary`,label:`边缘带宽`,hint:`滑动查看不同档位的交付能力。`,helper:`超过 500 Mbps 后，建议同步升级防护策略与监控采样。`,showValue:{formatter:e=>`${e} Mbps`},marks:[{value:100,label:`Lite`},{value:250,label:`Start`},{value:500,label:`Growth`},{value:750,label:`Scale`},{value:1e3,label:`Max`}],onValueChange:e=>{t.value=e}}),a,l)});let d=e(`div`);u(a,d),o(d,`grid gap-3 rounded-box bg-base-200/70 p-4 text-sm sm:grid-cols-3`);let p=e(`div`);u(d,p);let h=e(`div`);u(p,h),o(h,`text-xs uppercase tracking-wide text-base-content/50`),u(h,n(`每秒请求`));let g=e(`div`);u(p,g),o(g,`mt-1 text-lg font-semibold text-base-content`);let _=r(g);u(g,_),f(()=>{s(_,Math.round(t.value/10*18))}),u(g,n(`k`));let v=e(`div`);u(d,v);let y=e(`div`);u(v,y),o(y,`text-xs uppercase tracking-wide text-base-content/50`),u(y,n(`区域副本`));let b=e(`div`);u(v,b),o(b,`mt-1 text-lg font-semibold text-base-content`);let x=r(b);u(b,x),f(()=>{s(x,t.value>=500?`6 个`:`3 个`)});let S=e(`div`);u(d,S);let C=e(`div`);u(S,C),o(C,`text-xs uppercase tracking-wide text-base-content/50`),u(C,n(`推荐套餐`));let w=e(`div`);u(S,w),o(w,`mt-1 text-lg font-semibold text-base-content`);let T=r(w);return u(w,T),f(()=>{s(T,t.value>=750?`Enterprise`:t.value>=500?`Scale`:t.value>=250?`Growth`:`Starter`)}),a})},W=()=>{let{seats:t,committedSeats:a}=v(`useSetup:0:0`,()=>g(()=>({seats:v(`ref:1:2`,()=>p(12)),committedSeats:v(`ref:1:3`,()=>p(12))})));return h(()=>{let l=e(`div`);o(l,`w-full max-w-lg rounded-box border border-base-300 bg-base-100 p-5`);let d=i(`rue:component:anchor`);u(l,d),f(()=>{c(m(R,{min:5,max:60,step:5,value:t.value,color:`secondary`,showValue:{formatter:e=>`${e} seats`,placement:`below`},label:`团队席位`,hint:`拖动时实时更新预算，松手后再提交确认值。`,marks:[5,15,30,45,60],onValueChange:e=>{t.value=e},onValueCommit:e=>{a.value=e}}),l,d)});let p=e(`div`);u(l,p),o(p,`mt-4 grid gap-3 text-sm sm:grid-cols-2`);let h=e(`div`);u(p,h),o(h,`rounded-box bg-base-200/70 p-4`);let g=e(`div`);u(h,g),o(g,`text-xs uppercase tracking-wide text-base-content/50`),u(g,n(`实时预算`));let _=e(`div`);u(h,_),o(_,`mt-2 text-lg font-semibold text-base-content`),u(_,n(`¥ `));let v=r(_);u(_,v),f(()=>{s(v,t.value*129)}),u(_,n(` / 月`));let y=e(`div`);u(p,y),o(y,`rounded-box bg-base-200/70 p-4`);let b=e(`div`);u(y,b),o(b,`text-xs uppercase tracking-wide text-base-content/50`),u(b,n(`已确认席位`));let x=e(`div`);u(y,x),o(x,`mt-2 text-lg font-semibold text-base-content`);let S=r(x);return u(x,S),f(()=>{s(S,a.value)}),u(x,n(` seats`)),l})},re=()=>{let{value:t}=v(`useSetup:0:0`,()=>g(()=>({value:v(`ref:1:4`,()=>p(25))})));return h(()=>{let n=e(`div`);o(n,`w-full max-w-sm`);let r=i(`rue:component:anchor`);return u(n,r),f(()=>{c(m(R,{min:0,max:100,value:t.value,step:25,showValue:{placement:`below`,formatter:e=>`${e}%`},marks:[{value:0,label:`1`},{value:25,label:`2`},{value:50,label:`3`},{value:75,label:`4`},{value:100,label:`5`}],onValueChange:e=>{t.value=e}}),n,r)}),n})},G=()=>{let{values:n}=v(`useSetup:0:0`,()=>g(()=>({values:v(`ref:1:5`,()=>p({neutral:40,primary:40,secondary:40,accent:40,success:40,warning:40,info:40,error:40}))})));return h(()=>{let l=e(`div`);o(l,`grid gap-4`);let d=i(`rue:list:start`),p=i(`rue:list:end`);u(l,d),u(l,p);let g=new Map;return f(()=>{g=y({items:z||[],getKey:(e,t)=>e,elements:g,parent:d.parentNode,before:p,singleRoot:!0,start:d,renderItem:(l,d,p,g,_)=>{c(h(()=>{let d=a(),p=e(`div`);u(d,p),f(()=>{t(p,`key`,String(l))}),o(p,`space-y-2 rounded-box border border-base-300 bg-base-100 p-4`);let h=e(`div`);u(p,h),o(h,`text-xs uppercase tracking-wide text-base-content/60`);let g=r(h);u(h,g),f(()=>{s(g,l)});let _=i(`rue:component:anchor`);return u(p,_),f(()=>{c(m(R,{color:l,min:0,max:100,value:n.value[l],showValue:!0,onValueChange:e=>{n.value={...n.value,[l]:e}}}),p,_)}),d}),d,p)}})}),l})},ie=()=>{let{value:t}=v(`useSetup:0:0`,()=>g(()=>({value:v(`ref:1:6`,()=>p(40))})));return h(()=>{let n=e(`div`);o(n,`w-full max-w-sm space-y-3 rounded-box border border-base-300 bg-base-100 p-4`);let r=i(`rue:component:anchor`);return u(n,r),f(()=>{c(m(R,{min:0,max:100,value:t.value,showValue:{formatter:e=>`mix ${e}`},className:`text-blue-300 [--range-bg:orange] [--range-thumb:blue] [--range-fill:0]`,onValueChange:e=>{t.value=e}}),n,r)}),n})},K=[{prop:`className`,description:`追加到原生 input 的类名，适合继续覆写 CSS 变量`,type:`string`,defaultValue:`-`},{prop:`color`,description:`语义色，映射到 range-* 颜色类`,type:`'neutral' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'info' | 'error'`,defaultValue:`-`},{prop:`defaultValue`,description:`非受控初始值`,type:`string | number`,defaultValue:`-`},{prop:`formatter`,description:`值格式化函数，可与 showValue 组合使用`,type:`(value: number, info: { min: number; max: number; percent: number }) => any`,defaultValue:`-`},{prop:`helper`,description:`底部辅助文案`,type:`any`,defaultValue:`-`},{prop:`hint`,description:`标题下方的简短说明`,type:`any`,defaultValue:`-`},{prop:`label`,description:`顶部标题，自动关联 input id`,type:`any`,defaultValue:`-`},{prop:`marks`,description:`刻度点，可传 number / string 或 { value, label } 数组`,type:`Array<string | number | { value: string | number; label?: any }>`,defaultValue:`-`},{prop:`max`,description:`最大值`,type:`string | number`,defaultValue:`100`},{prop:`min`,description:`最小值`,type:`string | number`,defaultValue:`0`},{prop:`onValueChange`,description:`拖动过程中的语义回调，返回解析后的 number`,type:`(value: number, event: Event) => void`,defaultValue:`-`},{prop:`onValueCommit`,description:`原生 change 阶段的语义回调，适合提交确认值`,type:`(value: number, event: Event) => void`,defaultValue:`-`},{prop:`rootClassName`,description:`增强结构外层容器类名，仅在展示层激活时生效`,type:`string`,defaultValue:`-`},{prop:`showValue`,description:`显示当前值，可配置 formatter、placement 和 className`,type:`boolean | { formatter?: (value: number, info: { min: number; max: number; percent: number }) => any; placement?: 'inline' | 'below'; className?: string }`,defaultValue:`false`},{prop:`size`,description:`尺寸，支持 xs-xl 以及 small / medium / large 别名`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'medium' | 'large'`,defaultValue:`'md'`},{prop:`step`,description:`步长`,type:`string | number`,defaultValue:`1`},{prop:`value`,description:`受控值`,type:`string | number`,defaultValue:`-`}],q=()=>{let{tabBasic:l,tabStory:d,tabSteps:_,tabColors:y,tabSizes:C,tabCommit:w,tabCustom:T}=v(`useSetup:0:0`,()=>g(()=>({tabBasic:v(`ref:1:7`,()=>p(`preview`)),tabStory:v(`ref:1:8`,()=>p(`preview`)),tabSteps:v(`ref:1:9`,()=>p(`preview`)),tabColors:v(`ref:1:10`,()=>p(`preview`)),tabSizes:v(`ref:1:11`,()=>p(`preview`)),tabCommit:v(`ref:1:12`,()=>p(`preview`)),tabCustom:v(`ref:1:13`,()=>p(`preview`))})));return h(()=>{let p=a(),g=i(`rue:component:anchor`);return u(p,g),c(m(S,{children:h(()=>{let p=a(),h=e(`div`);u(p,h),o(h,`max-w-none prose prose-sm md:prose-base`);let g=e(`h1`);u(h,g),u(g,n(`Range Slider 范围选择`));let v=e(`p`);u(h,v),o(v,`mt-3 mb-3 text-sm`),u(v,n(`Range 仍然坚持原生`));let S=e(`code`);u(v,S),u(S,n(`input type="range"`));let E=r(v);u(v,E),s(E,` `),u(v,n(`的语义，但不再只是一条裸滑杆。现在可以直接在组件层补齐标题、提示、刻度、值展示和语义回调，设计页也按能力分层重新组织。`));let D=e(`div`);u(h,D),o(D,`text-sm`);let O=e(`a`);u(D,O),t(O,`href`,`https://daisyui.com/components/range/`),t(O,`target`,`_blank`),u(O,n(`查看 Range 静态样式`));let k=i(`rue:component:anchor`);u(h,k),f(()=>{c(m(B,{title:`Range`,summary:`保留原来的最小兼容写法；如果你只想要一个原生滑杆，API 仍然保持直接。`,tab:l,preview:()=>x(H,{}),code:`<Range min={0} max={100} value={40} />`}),h,k)});let A=i(`rue:component:anchor`);u(h,A),f(()=>{c(m(B,{title:`带文案与实时值`,summary:`把 label、hint、helper、showValue 和 marks 叠到组件自身，适合做套餐档位和配置面板。`,tab:d,preview:()=>x(U,{}),code:`const bandwidth = ref(250)

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
/>`}),h,A)});let j=i(`rue:component:anchor`);u(h,j),f(()=>{c(m(B,{title:`With steps and measure`,summary:`旧 demo 保留，但把刻度线和标签收进 marks，减少样板代码。`,tab:_,preview:()=>x(re,{}),code:`const value = ref(25)

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
/>`}),h,j)});let M=i(`rue:component:anchor`);u(h,M),f(()=>{c(m(B,{title:`Range colors`,summary:`保留原有颜色矩阵，同时展示增强 API 与原有颜色类可以自然叠加。`,tab:y,preview:()=>x(G,{}),code:`const colors = ['neutral', 'primary', 'secondary', 'accent', 'success', 'warning', 'info', 'error'] as const
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
</div>`}),h,M)});let N=i(`rue:component:anchor`);u(h,N),f(()=>{c(m(B,{title:`Sizes`,summary:`保留 xs 到 xl 的原始尺寸，同时补上 small / medium / large 三个别名，方便和其他组件对齐。`,tab:C,preview:()=>b(`div`,{className:`space-y-6`,children:[x(`div`,{className:`flex w-full max-w-sm flex-col gap-4`,children:te.map((e,t)=>x(R,{size:e,min:0,max:100,value:30+t*10},e))}),x(`div`,{className:`grid gap-3 rounded-box border border-dashed border-base-300 bg-base-100 p-4 text-sm sm:grid-cols-3`,children:ne.map((e,t)=>b(`div`,{className:`space-y-2`,children:[x(`div`,{className:`text-xs uppercase tracking-wide text-base-content/60`,children:e}),x(R,{size:e,min:0,max:100,value:35+t*20})]},e))})]}),code:`<Range size="xs" min={0} max={100} value={30} />
<Range size="sm" min={0} max={100} value={40} />
<Range size="md" min={0} max={100} value={50} />
<Range size="lg" min={0} max={100} value={60} />
<Range size="xl" min={0} max={100} value={70} />

<Range size="small" min={0} max={100} value={35} />
<Range size="medium" min={0} max={100} value={55} />
<Range size="large" min={0} max={100} value={75} />`}),h,N)});let ee=i(`rue:component:anchor`);u(h,ee),f(()=>{c(m(B,{title:`受控提交`,summary:`拖动中用 onValueChange 更新即时反馈，松手后用 onValueCommit 记录确认值。`,tab:w,preview:()=>x(W,{}),code:`const seats = ref(12)
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
/>`}),h,ee)});let P=i(`rue:component:anchor`);u(h,P),f(()=>{c(m(B,{title:`Range with custom color and no fill`,summary:`原来的自定义 CSS 变量方案继续可用；增强 API 不会挡住底层变量覆写。`,tab:T,preview:()=>x(ie,{}),code:`const value = ref(40)

<Range
  min={0}
  max={100}
  value={value.value}
  showValue={{ formatter: currentValue => 'mix ' + currentValue }}
  className="text-blue-300 [--range-bg:orange] [--range-thumb:blue] [--range-fill:0]"
  onValueChange={nextValue => {
    value.value = nextValue
  }}
/>`}),h,P)});let F=e(`div`);u(h,F),o(F,`component-preview not-prose text-base-content my-6 lg:my-12`);let I=e(`h2`);u(F,I),o(I,`component-preview-title mt-2 mb-3 text-lg font-semibold`),u(I,n(`# API`));let L=e(`p`);u(F,L),o(L,`mb-4 text-sm text-base-content/70`),u(L,n(`不做增强展示时，Range 仍然是一个直接透传原生属性的滑杆；一旦传入`));let z=e(`code`);u(L,z),u(z,n(`label`)),u(L,n(`、`));let q=e(`code`);u(L,q),u(q,n(`showValue`)),u(L,n(`、`));let J=e(`code`);u(L,J),u(J,n(`marks`)),u(L,n(`等属性，就会自动切换到更完整的展示结构。`));let Y=i(`rue:component:anchor`);return u(F,Y),f(()=>{c(m(V,{rows:K}),F,Y)}),p})}),p,g),p})};export{q as default};