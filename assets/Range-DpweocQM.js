import{F as e,G as t,I as n,L as r,M as i,P as a,R as o,U as s,Z as c,_t as l,bt as u,c as d,gt as f,lt as p,pt as m,t as h,u as g,x as _,yt as v}from"./vapor-runtime-D3a-68js.js";import{a as y,n as b}from"./vapor-helpers-vapor-DGjYaAZX.js";import{n as x,t as S}from"./src-BfQKH6_d.js";import{n as C}from"./SidebarPlaygroundDesign-vpnUkFCM.js";import{t as w}from"./Code-2C2psoH3.js";import{t as T}from"./tabs-BgQmsOey.js";var E=0,D=(e,t)=>t?`${e} ${t}`:e,O=(e,t)=>{let n=Number(e);return Number.isFinite(n)?n:t},k=(e,t,n)=>e<t?t:e>n?n:e,A=(e,t)=>{let n=O(e,0),r=O(t,100);return r<=n?{min:n,max:n+1}:{min:n,max:r}},ee=e=>{let t=O(e,1);return t>0?t:1},j=e=>{switch(e){case`small`:return`sm`;case`default`:case`medium`:return`md`;case`large`:return`lg`;default:return e}},M=(e,t,n,r)=>k(O(e,r),t,n),N=(e,t,n)=>(e-t)/(n-t)*100,P=e=>e?e===!0?{visible:!0,placement:`inline`}:{visible:!0,placement:e.placement??`inline`,className:e.className,formatter:e.formatter}:{visible:!1,placement:`inline`},F=e=>typeof e==`object`&&!!e&&`value`in e,I=(e,t,n)=>e?.length?e.map((e,r)=>{let i=F(e)?e.value:e,a=M(i,t,n,t),o=F(e)&&`label`in e?e.label:String(i);return{key:`${r}-${String(i)}`,value:a,label:o,percent:N(a,t,n)}}).sort((e,t)=>e.value-t.value):[],L=(e,t,n)=>typeof t==`function`?t(e,n):String(e),R=(e,t,n)=>{let r=`range`;e&&(r+=` range-${e}`);let i=j(t);return i&&(r+=` range-${i}`),n&&(r+=` ${n}`),r},z=({id:e,color:t,size:n,className:r,rootClassName:i,label:a,hint:o,helper:s,labelClassName:c,hintClassName:l,helperClassName:u,valueClassName:d,marksClassName:m,style:h,rootStyle:g,min:y,max:b,step:C,value:w,defaultValue:T,showValue:O,formatter:k,marks:j,disabled:F,onInput:z,onChange:B,onValueChange:te,onValueCommit:ne,...V})=>{let H=f(),U=f(),W=V.ref,re=p(`rue-range-${E++}`),G=A(y,b),ie=ee(C),K=w!==void 0,q=p(M(T??w??G.min,G.min,G.max,G.min)),J=K?M(w,G.min,G.max,q.value):M(q.value,G.min,G.max,G.min),Y=P(O),X=I(j,G.min,G.max),Z=e??re.value,ae={min:G.min,max:G.max,percent:N(J,G.min,G.max)},oe=Y.formatter??k,Q=L(J,oe,ae),se=typeof Q==`string`||typeof Q==`number`?String(Q):void 0,ce=a!=null||o!=null||s!=null||Y.visible||X.length>0||!!i||!!g||!!c||!!l||!!u||!!d||!!m;`ref`in V&&delete V.ref;let le=e=>{if(typeof W==`function`){W(e);return}W&&typeof W==`object`&&(W.current=e??void 0)},ue=e=>{H.current=e??void 0,le(e)},de=e=>L(e,oe,{min:G.min,max:G.max,percent:N(e,G.min,G.max)}),$=e=>{let t=de(e),n=typeof t==`string`||typeof t==`number`?String(t):void 0;H.current&&(H.current.value=String(e),H.current.setAttribute(`aria-valuenow`,String(e)),n===void 0?H.current.removeAttribute(`aria-valuetext`):H.current.setAttribute(`aria-valuetext`,n)),U.current&&(n!==void 0&&U.current.querySelectorAll(`[data-rue-range-output="true"]`).forEach(e=>{e.textContent=n}),U.current.querySelectorAll(`[data-rue-range-mark]`).forEach(t=>{let n=t,r=e>=Number(n.getAttribute(`data-rue-range-mark`));n.className=`absolute top-0 flex -translate-x-1/2 flex-col items-center gap-1 text-[11px] ${r?`font-medium text-base-content`:`text-base-content/55`}`;let i=n.firstElementChild;i&&(i.className=r?`h-2 w-px bg-base-content/80`:`h-2 w-px bg-base-content/25`)}))},fe=e=>{let t=e.target,n=M(t?.value,G.min,G.max,J);K||(q.value=n,$(n)),z?.(e),te?.(n,e)},pe=e=>{let t=e.target,n=M(t?.value,G.min,G.max,J);K||(q.value=n,$(n)),B?.(e),ne?.(n,e)};_(()=>{$(J)}),v(()=>w,e=>{K&&$(M(e,G.min,G.max,q.value))},{immediate:!0});let me=S(`input`,{...V,ref:ue,id:Z,type:`range`,className:R(t,n,r),style:h,min:String(G.min),max:String(G.max),step:C===void 0?void 0:String(ie),value:String(J),disabled:F,"aria-valuemin":String(G.min),"aria-valuemax":String(G.max),"aria-valuenow":String(J),"aria-valuetext":se,onInput:fe,onChange:pe});return ce?x(`div`,{ref:e=>{U.current=e??void 0},className:D(`w-full space-y-3`,i),style:g,"data-rue-range-root":`true`,children:[a!=null||o!=null||Y.visible&&Y.placement===`inline`?x(`div`,{className:`flex items-start justify-between gap-4`,children:[x(`div`,{className:`min-w-0 space-y-1`,children:[a==null?null:S(`label`,{htmlFor:Z,className:D(`block text-sm font-medium text-base-content`,c),children:a}),o==null?null:S(`p`,{className:D(`m-0 text-xs text-base-content/65`,l),children:o})]}),Y.visible&&Y.placement===`inline`?S(`output`,{htmlFor:Z,className:D(D(`shrink-0 rounded-full bg-base-200 px-3 py-1 text-xs font-medium text-base-content`,Y.className),d),"data-rue-range-output":`true`,children:Q}):null]}):null,S(`div`,{className:`w-full`,children:me}),Y.visible&&Y.placement===`below`?S(`div`,{className:`flex justify-end`,children:S(`output`,{htmlFor:Z,className:D(D(`rounded-full bg-base-200 px-3 py-1 text-xs font-medium text-base-content`,Y.className),d),"data-rue-range-output":`true`,children:Q})}):null,X.length>0?S(`div`,{className:D(`relative h-10`,m),"data-rue-range-marks":`true`,children:X.map(e=>{let t=J>=e.value;return x(`span`,{className:D(`absolute top-0 flex -translate-x-1/2 flex-col items-center gap-1 text-[11px] ${t?`font-medium text-base-content`:`text-base-content/55`}`),style:{left:`${e.percent}%`},"data-rue-range-mark":String(e.value),children:[S(`span`,{className:`h-2 w-px ${t?`bg-base-content/80`:`bg-base-content/25`}`}),e.label==null?null:S(`span`,{className:`whitespace-nowrap`,children:e.label})]},e.key)})}):null,s==null?null:S(`p`,{className:D(`m-0 text-xs text-base-content/60`,u),children:s})]}):me},B=[`neutral`,`primary`,`secondary`,`accent`,`success`,`warning`,`info`,`error`],te=[`xs`,`sm`,`md`,`lg`,`xl`],ne=[`small`,`medium`,`large`],V=o=>g(()=>{let s=n(`div`);t(s,`component-preview not-prose text-base-content my-6 lg:my-12`);let c=n(`div`);i(s,c),t(c,`flex flex-wrap items-start justify-between gap-3`);let l=n(`div`);i(c,l);let f=n(`h2`);i(l,f),t(f,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(f,r(`# `));let p=a(`rue:slot:anchor`);i(f,p),u(()=>{let e=o.title;m(()=>d(e,f,p))});let _=a(`rue:slot:anchor`);i(l,_),u(()=>{let r=o.summary?g(()=>{let r=e(),s=n(`p`);i(r,s),t(s,`m-0 text-sm opacity-70`);let c=a(`rue:slot:anchor`);return i(s,c),u(()=>{let e=o.summary;m(()=>d(e,s,c))}),r}):``;m(()=>d(r,l,_))});let v=a(`rue:component:anchor`);i(s,v),u(()=>{let e=h(T,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:o.tab.value,onChange:e=>o.tab.value=e,className:`mb-3 mt-4`});m(()=>d(e,s,v))});let y=a(`rue:slot:anchor`);return i(s,y),u(()=>{let t=o.tab.value===`preview`?o.preview():g(()=>{let t=e(),n=a(`rue:component:anchor`);return i(t,n),u(()=>{let e=h(w,{className:`mt-2`,lang:`tsx`,code:o.code});m(()=>d(e,t,n))}),t});m(()=>d(t,s,y))}),s}),H=o=>g(()=>{let c=n(`div`);t(c,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let l=n(`table`);i(c,l),t(l,`table table-zebra`);let f=n(`thead`);i(l,f);let p=n(`tr`);i(f,p);let h=n(`th`);i(p,h),i(h,r(`属性`));let _=n(`th`);i(p,_),i(_,r(`说明`));let v=n(`th`);i(p,v),i(v,r(`类型`));let y=n(`th`);i(p,y),i(y,r(`默认值`));let x=n(`tbody`);i(l,x);let S=a(`rue:list:start`),C=a(`rue:list:end`);i(x,S),i(x,C);let w=new Map;return u(()=>{w=b({items:o.rows||[],getKey:(e,t)=>e.prop,elements:w,parent:x,before:C,singleRoot:!0,trackIndex:!1,start:S,renderItem:(t,r,o,c,l)=>{d(g(()=>{let r=e(),o=n(`tr`);i(r,o),u(()=>{s(o,`key`,String(t.prop))});let c=n(`td`);i(o,c);let l=n(`code`);i(c,l);let f=a(`rue:slot:anchor`);i(l,f),u(()=>{let e=t.prop;m(()=>d(e,l,f))});let p=n(`td`);i(o,p);let h=a(`rue:slot:anchor`);i(p,h),u(()=>{let e=t.description;m(()=>d(e,p,h))});let g=n(`td`);i(o,g);let _=n(`code`);i(g,_);let v=a(`rue:slot:anchor`);i(_,v),u(()=>{let e=t.type;m(()=>d(e,_,v))});let y=n(`td`);i(o,y);let b=n(`code`);i(y,b);let x=a(`rue:slot:anchor`);return i(b,x),u(()=>{let e=t.defaultValue;m(()=>d(e,b,x))}),r}),r,o)}})}),c}),U=()=>{let{sliderValue:e}=y(`useSetup:0:0`,()=>l(()=>({sliderValue:y(`ref:1:0`,()=>p(`40`))})));return g(()=>{let s=n(`div`);t(s,`w-full max-w-xs space-y-3`);let l=a(`rue:component:anchor`);i(s,l),u(()=>{let t=h(z,{"data-testid":`range-basic`,min:0,max:100,value:e.value,onInput:t=>{e.value=t.target.value}});m(()=>d(t,s,l))});let f=n(`p`);i(s,f),t(f,`m-0 text-sm text-base-content/70`),i(f,r(`当前值：`));let p=o(f);return i(f,p),u(()=>{c(p,e.value)}),s})},W=()=>{let{bandwidth:e}=y(`useSetup:0:0:dup1`,()=>l(()=>({bandwidth:y(`ref:1:1`,()=>p(250))})));return g(()=>{let s=n(`div`);t(s,`w-full max-w-lg space-y-4 rounded-box border border-base-300 bg-base-100 p-5`);let l=a(`rue:component:anchor`);i(s,l),u(()=>{let t=h(z,{min:100,max:1e3,step:50,value:e.value,color:`primary`,label:`边缘带宽`,hint:`滑动查看不同档位的交付能力。`,helper:`超过 500 Mbps 后，建议同步升级防护策略与监控采样。`,showValue:{formatter:e=>`${e} Mbps`},marks:[{value:100,label:`Lite`},{value:250,label:`Start`},{value:500,label:`Growth`},{value:750,label:`Scale`},{value:1e3,label:`Max`}],onValueChange:t=>{e.value=t}});m(()=>d(t,s,l))});let f=n(`div`);i(s,f),t(f,`grid gap-3 rounded-box bg-base-200/70 p-4 text-sm sm:grid-cols-3`);let p=n(`div`);i(f,p);let g=n(`div`);i(p,g),t(g,`text-xs uppercase tracking-wide text-base-content/50`),i(g,r(`每秒请求`));let _=n(`div`);i(p,_),t(_,`mt-1 text-lg font-semibold text-base-content`);let v=o(_);i(_,v),u(()=>{c(v,Math.round(e.value/10*18))}),i(_,r(`k`));let y=n(`div`);i(f,y);let b=n(`div`);i(y,b),t(b,`text-xs uppercase tracking-wide text-base-content/50`),i(b,r(`区域副本`));let x=n(`div`);i(y,x),t(x,`mt-1 text-lg font-semibold text-base-content`);let S=o(x);i(x,S),u(()=>{c(S,e.value>=500?`6 个`:`3 个`)});let C=n(`div`);i(f,C);let w=n(`div`);i(C,w),t(w,`text-xs uppercase tracking-wide text-base-content/50`),i(w,r(`推荐套餐`));let T=n(`div`);i(C,T),t(T,`mt-1 text-lg font-semibold text-base-content`);let E=o(T);return i(T,E),u(()=>{c(E,e.value>=750?`Enterprise`:e.value>=500?`Scale`:e.value>=250?`Growth`:`Starter`)}),s})},re=()=>{let{seats:e,committedSeats:s}=y(`useSetup:0:0:dup2`,()=>l(()=>({seats:y(`ref:1:2`,()=>p(12)),committedSeats:y(`ref:1:3`,()=>p(12))})));return g(()=>{let l=n(`div`);t(l,`w-full max-w-lg rounded-box border border-base-300 bg-base-100 p-5`);let f=a(`rue:component:anchor`);i(l,f),u(()=>{let t=h(z,{min:5,max:60,step:5,value:e.value,color:`secondary`,showValue:{formatter:e=>`${e} seats`,placement:`below`},label:`团队席位`,hint:`拖动时实时更新预算，松手后再提交确认值。`,marks:[5,15,30,45,60],onValueChange:t=>{e.value=t},onValueCommit:e=>{s.value=e}});m(()=>d(t,l,f))});let p=n(`div`);i(l,p),t(p,`mt-4 grid gap-3 text-sm sm:grid-cols-2`);let g=n(`div`);i(p,g),t(g,`rounded-box bg-base-200/70 p-4`);let _=n(`div`);i(g,_),t(_,`text-xs uppercase tracking-wide text-base-content/50`),i(_,r(`实时预算`));let v=n(`div`);i(g,v),t(v,`mt-2 text-lg font-semibold text-base-content`),i(v,r(`¥ `));let y=o(v);i(v,y),u(()=>{c(y,e.value*129)}),i(v,r(` / 月`));let b=n(`div`);i(p,b),t(b,`rounded-box bg-base-200/70 p-4`);let x=n(`div`);i(b,x),t(x,`text-xs uppercase tracking-wide text-base-content/50`),i(x,r(`已确认席位`));let S=n(`div`);i(b,S),t(S,`mt-2 text-lg font-semibold text-base-content`);let C=o(S);return i(S,C),u(()=>{c(C,s.value)}),i(S,r(` seats`)),l})},G=()=>{let{value:e}=y(`useSetup:0:0:dup3`,()=>l(()=>({value:y(`ref:1:4`,()=>p(25))})));return g(()=>{let r=n(`div`);t(r,`w-full max-w-sm`);let o=a(`rue:component:anchor`);return i(r,o),u(()=>{let t=h(z,{min:0,max:100,value:e.value,step:25,showValue:{placement:`below`,formatter:e=>`${e}%`},marks:[{value:0,label:`1`},{value:25,label:`2`},{value:50,label:`3`},{value:75,label:`4`},{value:100,label:`5`}],onValueChange:t=>{e.value=t}});m(()=>d(t,r,o))}),r})},ie=()=>{let{values:r}=y(`useSetup:0:0:dup4`,()=>l(()=>({values:y(`ref:1:5`,()=>p({neutral:40,primary:40,secondary:40,accent:40,success:40,warning:40,info:40,error:40}))})));return g(()=>{let l=n(`div`);t(l,`grid gap-4`);let f=a(`rue:list:start`),p=a(`rue:list:end`);i(l,f),i(l,p);let _=new Map;return u(()=>{_=b({items:B||[],getKey:(e,t)=>e,elements:_,parent:f.parentNode,before:p,singleRoot:!0,trackIndex:!1,start:f,renderItem:(l,f,p,_,v)=>{d(g(()=>{let f=e(),p=n(`div`);i(f,p),u(()=>{s(p,`key`,String(l))}),t(p,`space-y-2 rounded-box border border-base-300 bg-base-100 p-4`);let g=n(`div`);i(p,g),t(g,`text-xs uppercase tracking-wide text-base-content/60`);let _=o(g);i(g,_),u(()=>{c(_,l)});let v=a(`rue:component:anchor`);return i(p,v),u(()=>{let e=h(z,{color:l,min:0,max:100,value:r.value[l],showValue:!0,onValueChange:e=>{r.value={...r.value,[l]:e}}});m(()=>d(e,p,v))}),f}),f,p)}})}),l})},K=()=>{let{value:e}=y(`useSetup:0:0:dup5`,()=>l(()=>({value:y(`ref:1:6`,()=>p(40))})));return g(()=>{let r=n(`div`);t(r,`w-full max-w-sm space-y-3 rounded-box border border-base-300 bg-base-100 p-4`);let o=a(`rue:component:anchor`);return i(r,o),u(()=>{let t=h(z,{min:0,max:100,value:e.value,showValue:{formatter:e=>`mix ${e}`},className:`text-blue-300 [--range-bg:orange] [--range-thumb:blue] [--range-fill:0]`,onValueChange:t=>{e.value=t}});m(()=>d(t,r,o))}),r})},q=[{prop:`className`,description:`追加到原生 input 的类名，适合继续覆写 CSS 变量`,type:`string`,defaultValue:`-`},{prop:`color`,description:`语义色，映射到 range-* 颜色类`,type:`'neutral' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'info' | 'error'`,defaultValue:`-`},{prop:`defaultValue`,description:`非受控初始值`,type:`string | number`,defaultValue:`-`},{prop:`formatter`,description:`值格式化函数，可与 showValue 组合使用`,type:`(value: number, info: { min: number; max: number; percent: number }) => any`,defaultValue:`-`},{prop:`helper`,description:`底部辅助文案`,type:`any`,defaultValue:`-`},{prop:`hint`,description:`标题下方的简短说明`,type:`any`,defaultValue:`-`},{prop:`label`,description:`顶部标题，自动关联 input id`,type:`any`,defaultValue:`-`},{prop:`marks`,description:`刻度点，可传 number / string 或 { value, label } 数组`,type:`Array<string | number | { value: string | number; label?: any }>`,defaultValue:`-`},{prop:`max`,description:`最大值`,type:`string | number`,defaultValue:`100`},{prop:`min`,description:`最小值`,type:`string | number`,defaultValue:`0`},{prop:`onValueChange`,description:`拖动过程中的语义回调，返回解析后的 number`,type:`(value: number, event: Event) => void`,defaultValue:`-`},{prop:`onValueCommit`,description:`原生 change 阶段的语义回调，适合提交确认值`,type:`(value: number, event: Event) => void`,defaultValue:`-`},{prop:`rootClassName`,description:`增强结构外层容器类名，仅在展示层激活时生效`,type:`string`,defaultValue:`-`},{prop:`showValue`,description:`显示当前值，可配置 formatter、placement 和 className`,type:`boolean | { formatter?: (value: number, info: { min: number; max: number; percent: number }) => any; placement?: 'inline' | 'below'; className?: string }`,defaultValue:`false`},{prop:`size`,description:`尺寸，支持 xs-xl 以及 small / medium / large 别名`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'medium' | 'large'`,defaultValue:`'md'`},{prop:`step`,description:`步长`,type:`string | number`,defaultValue:`1`},{prop:`value`,description:`受控值`,type:`string | number`,defaultValue:`-`}],J=()=>{let{tabBasic:f,tabStory:_,tabSteps:v,tabColors:b,tabSizes:w,tabCommit:T,tabCustom:E}=y(`useSetup:0:0:dup6`,()=>l(()=>({tabBasic:y(`ref:1:7`,()=>p(`preview`)),tabStory:y(`ref:1:8`,()=>p(`preview`)),tabSteps:y(`ref:1:9`,()=>p(`preview`)),tabColors:y(`ref:1:10`,()=>p(`preview`)),tabSizes:y(`ref:1:11`,()=>p(`preview`)),tabCommit:y(`ref:1:12`,()=>p(`preview`)),tabCustom:y(`ref:1:13`,()=>p(`preview`))})));return g(()=>{let l=e(),p=a(`rue:component:anchor`);return i(l,p),d(h(C,{children:g(()=>{let l=e(),p=n(`div`);i(l,p),t(p,`max-w-none prose prose-sm md:prose-base`);let g=n(`h1`);i(p,g),i(g,r(`Range Slider 范围选择`));let y=n(`p`);i(p,y),t(y,`mt-3 mb-3 text-sm`),i(y,r(`Range 仍然坚持原生`));let C=n(`code`);i(y,C),i(C,r(`input type="range"`));let D=o(y);i(y,D),c(D,` `),i(y,r(`的语义，但不再只是一条裸滑杆。现在可以直接在组件层补齐标题、提示、刻度、值展示和语义回调，设计页也按能力分层重新组织。`));let O=n(`div`);i(p,O),t(O,`text-sm`);let k=n(`a`);i(O,k),s(k,`href`,`https://daisyui.com/components/range/`),s(k,`target`,`_blank`),i(k,r(`查看 Range 静态样式`));let A=a(`rue:component:anchor`);i(p,A),u(()=>{let e=h(V,{title:`Range`,summary:`保留原来的最小兼容写法；如果你只想要一个原生滑杆，API 仍然保持直接。`,tab:f,preview:()=>S(U,{}),code:`<Range min={0} max={100} value={40} />`});m(()=>d(e,p,A))});let ee=a(`rue:component:anchor`);i(p,ee),u(()=>{let e=h(V,{title:`带文案与实时值`,summary:`把 label、hint、helper、showValue 和 marks 叠到组件自身，适合做套餐档位和配置面板。`,tab:_,preview:()=>S(W,{}),code:`const bandwidth = ref(250)

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
/>`});m(()=>d(e,p,ee))});let j=a(`rue:component:anchor`);i(p,j),u(()=>{let e=h(V,{title:`With steps and measure`,summary:`旧 demo 保留，但把刻度线和标签收进 marks，减少样板代码。`,tab:v,preview:()=>S(G,{}),code:`const value = ref(25)

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
/>`});m(()=>d(e,p,j))});let M=a(`rue:component:anchor`);i(p,M),u(()=>{let e=h(V,{title:`Range colors`,summary:`保留原有颜色矩阵，同时展示增强 API 与原有颜色类可以自然叠加。`,tab:b,preview:()=>S(ie,{}),code:`const colors = ['neutral', 'primary', 'secondary', 'accent', 'success', 'warning', 'info', 'error'] as const
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
</div>`});m(()=>d(e,p,M))});let N=a(`rue:component:anchor`);i(p,N),u(()=>{let e=h(V,{title:`Sizes`,summary:`保留 xs 到 xl 的原始尺寸，同时补上 small / medium / large 三个别名，方便和其他组件对齐。`,tab:w,preview:()=>x(`div`,{className:`space-y-6`,children:[S(`div`,{className:`flex w-full max-w-sm flex-col gap-4`,children:te.map((e,t)=>S(z,{size:e,min:0,max:100,value:30+t*10},e))}),S(`div`,{className:`grid gap-3 rounded-box border border-dashed border-base-300 bg-base-100 p-4 text-sm sm:grid-cols-3`,children:ne.map((e,t)=>x(`div`,{className:`space-y-2`,children:[S(`div`,{className:`text-xs uppercase tracking-wide text-base-content/60`,children:e}),S(z,{size:e,min:0,max:100,value:35+t*20})]},e))})]}),code:`<Range size="xs" min={0} max={100} value={30} />
<Range size="sm" min={0} max={100} value={40} />
<Range size="md" min={0} max={100} value={50} />
<Range size="lg" min={0} max={100} value={60} />
<Range size="xl" min={0} max={100} value={70} />

<Range size="small" min={0} max={100} value={35} />
<Range size="medium" min={0} max={100} value={55} />
<Range size="large" min={0} max={100} value={75} />`});m(()=>d(e,p,N))});let P=a(`rue:component:anchor`);i(p,P),u(()=>{let e=h(V,{title:`受控提交`,summary:`拖动中用 onValueChange 更新即时反馈，松手后用 onValueCommit 记录确认值。`,tab:T,preview:()=>S(re,{}),code:`const seats = ref(12)
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
/>`});m(()=>d(e,p,P))});let F=a(`rue:component:anchor`);i(p,F),u(()=>{let e=h(V,{title:`Range with custom color and no fill`,summary:`原来的自定义 CSS 变量方案继续可用；增强 API 不会挡住底层变量覆写。`,tab:E,preview:()=>S(K,{}),code:`const value = ref(40)

<Range
  min={0}
  max={100}
  value={value.value}
  showValue={{ formatter: currentValue => 'mix ' + currentValue }}
  className="text-blue-300 [--range-bg:orange] [--range-thumb:blue] [--range-fill:0]"
  onValueChange={nextValue => {
    value.value = nextValue
  }}
/>`});m(()=>d(e,p,F))});let I=n(`div`);i(p,I),t(I,`component-preview not-prose text-base-content my-6 lg:my-12`);let L=n(`h2`);i(I,L),t(L,`component-preview-title mt-2 mb-3 text-lg font-semibold`),i(L,r(`# API`));let R=n(`p`);i(I,R),t(R,`mb-4 text-sm text-base-content/70`),i(R,r(`不做增强展示时，Range 仍然是一个直接透传原生属性的滑杆；一旦传入`));let B=n(`code`);i(R,B),i(B,r(`label`)),i(R,r(`、`));let J=n(`code`);i(R,J),i(J,r(`showValue`)),i(R,r(`、`));let Y=n(`code`);i(R,Y),i(Y,r(`marks`)),i(R,r(`等属性，就会自动切换到更完整的展示结构。`));let X=a(`rue:component:anchor`);return i(I,X),u(()=>{let e=h(H,{rows:q});m(()=>d(e,I,X))}),l})}),l,p),l})};export{J as default};