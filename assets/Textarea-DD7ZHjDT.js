import{F as e,H as t,I as n,L as r,N as i,P as a,W as o,Y as s,c,j as l,pt as u,rt as d,t as f,u as p,ut as m}from"./vapor-runtime-CKndxKFn.js";import{a as h,n as g}from"./vapor-helpers-vapor-yxlhW-_4.js";import{n as _,t as v}from"./src-CqIWk1va.js";import{n as y}from"./SidebarPlaygroundDesign-CBV-3y9s.js";import{t as b}from"./Code-B1JFTu6m.js";import{t as x}from"./tabs-BbiCzXqJ.js";import{t as S}from"./textarea-CumV6_tl.js";var C=[{label:`Primary`,color:`primary`},{label:`Secondary`,color:`secondary`},{label:`Accent`,color:`accent`},{label:`Neutral`,color:`neutral`},{label:`Info`,color:`info`},{label:`Success`,color:`success`},{label:`Warning`,color:`warning`},{label:`Error`,color:`error`}],w=[{prop:`allowClear`,description:`显示清空按钮，支持对象写法自定义图标`,type:`boolean | { clearIcon?: any }`,defaultValue:`false`},{prop:`autoSize`,description:`自动根据内容撑高，可限制最小和最大行数`,type:`boolean | { minRows?: number; maxRows?: number }`,defaultValue:`false`},{prop:`color`,description:`主题色；default 表示不追加色彩类`,type:`'default' | 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'`,defaultValue:`'default'`},{prop:`countClassName`,description:`字数统计区域自定义类名`,type:`string`,defaultValue:`-`},{prop:`ghost`,description:`兼容旧用法，等价于 variant="ghost"`,type:`boolean`,defaultValue:`false`},{prop:`onClear`,description:`点击清空按钮后触发`,type:`(event: MouseEvent) => void`,defaultValue:`-`},{prop:`resize`,description:`控制拖拽缩放方向`,type:`'none' | 'vertical' | 'horizontal' | 'both'`,defaultValue:`-`},{prop:`rootClassName`,description:`外层包装节点类名`,type:`string`,defaultValue:`-`},{prop:`showCount`,description:`显示字数统计，支持 formatter 自定义展示`,type:`boolean | { formatter?: (info: { count: number; maxLength?: number }) => any }`,defaultValue:`false`},{prop:`size`,description:`尺寸，支持 xs 到 xl，以及 small / middle / large 别名`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'middle' | 'medium' | 'large'`,defaultValue:`-`},{prop:`status`,description:`语义状态，未传 color 时会映射到 warning / error 视觉`,type:`'warning' | 'error'`,defaultValue:`-`},{prop:`variant`,description:`视觉变体，保持 Rue 当前 textarea 基底`,type:`'outlined' | 'filled' | 'ghost'`,defaultValue:`'outlined'`}],T=({title:t,summary:d,tab:m,preview:h,code:g})=>p(()=>{let _=e(`div`);o(_,`component-preview not-prose text-base-content my-6 lg:my-12`);let v=e(`div`);l(_,v),o(v,`flex flex-wrap items-start justify-between gap-3`);let y=e(`div`);l(v,y);let S=e(`h2`);l(y,S),o(S,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(S,n(`# `));let C=r(S);l(S,C),u(()=>{s(C,t)});let w=i(`rue:slot:anchor`);l(y,w),u(()=>{c(d?p(()=>{let t=a(),n=e(`p`);l(t,n),o(n,`m-0 text-sm opacity-70`);let i=r(n);return l(n,i),u(()=>{s(i,d)}),t}):``,y,w)});let T=i(`rue:component:anchor`);l(_,T),u(()=>{c(f(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:m.value,onChange:e=>m.value=e,className:`mb-3 mt-4`}),_,T)});let E=i(`rue:slot:anchor`);return l(_,E),u(()=>{c(m.value===`preview`?h():p(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),u(()=>{c(f(b,{className:`mt-2`,lang:`tsx`,code:g}),e,t)}),e}),_,E)}),_}),E=({rows:r})=>p(()=>{let s=e(`div`);o(s,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let d=e(`table`);l(s,d),o(d,`table table-zebra`);let f=e(`thead`);l(d,f);let m=e(`tr`);l(f,m);let h=e(`th`);l(m,h),l(h,n(`属性`));let _=e(`th`);l(m,_),l(_,n(`说明`));let v=e(`th`);l(m,v),l(v,n(`类型`));let y=e(`th`);l(m,y),l(y,n(`默认值`));let b=e(`tbody`);l(d,b);let x=i(`rue:list:start`),S=i(`rue:list:end`);l(b,x),l(b,S);let C=new Map;return u(()=>{C=g({items:r||[],getKey:(e,t)=>e.prop,elements:C,parent:b,before:S,singleRoot:!0,start:x,renderItem:(n,r,o,s,d)=>{c(p(()=>{let r=a(),o=e(`tr`);l(r,o),u(()=>{t(o,`key`,String(n.prop))});let s=e(`td`);l(o,s);let d=e(`code`);l(s,d);let f=i(`rue:slot:anchor`);l(d,f),u(()=>{let e=n.prop;c(e,d,f)});let p=e(`td`);l(o,p);let m=i(`rue:slot:anchor`);l(p,m),u(()=>{let e=n.description;c(e,p,m)});let h=e(`td`);l(o,h);let g=e(`code`);l(h,g);let _=i(`rue:slot:anchor`);l(g,_),u(()=>{let e=n.type;c(e,g,_)});let v=e(`td`);l(o,v);let y=e(`code`);l(v,y);let b=i(`rue:slot:anchor`);return l(y,b),u(()=>{let e=n.defaultValue;c(e,y,b)}),r}),r,o)}})}),s}),ee=()=>{let{basicValue:t}=h(`useSetup:0:0`,()=>m(()=>({basicValue:h(`ref:1:0`,()=>d(`Rue Design
Multiline input`))})));return p(()=>{let a=e(`div`);o(a,`grid w-full max-w-xl gap-3`);let d=i(`rue:component:anchor`);l(a,d),u(()=>{c(f(S,{"data-testid":`textarea-basic`,rows:5,placeholder:`Bio`,value:t.value,onInput:e=>{t.value=e.target?.value??``}}),a,d)});let p=e(`p`);l(a,p),o(p,`m-0 text-sm text-base-content/70`),l(p,n(`当前内容：`));let m=r(p);return l(p,m),u(()=>{s(m,t.value||`空`)}),a})},te=()=>{let{summary:t,note:r}=h(`useSetup:0:0`,()=>m(()=>({summary:h(`ref:1:1`,()=>d(`这是一段会显示字数统计的说明文案。`)),note:h(`ref:1:2`,()=>d(`支持清空、字数限制和自定义计数提示。`))})));return p(()=>{let a=e(`div`);o(a,`grid w-full max-w-2xl gap-4 lg:grid-cols-2`);let s=e(`div`);l(a,s),o(s,`rounded-box border border-base-300 bg-base-100 p-4`);let d=e(`div`);l(s,d),o(d,`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`),l(d,n(`Count`));let p=i(`rue:component:anchor`);l(s,p),u(()=>{c(f(S,{value:t.value,maxLength:120,showCount:!0,rows:5,placeholder:`更新说明`,onInput:e=>{t.value=e.target?.value??``}}),s,p)});let m=e(`div`);l(a,m),o(m,`rounded-box border border-base-300 bg-base-100 p-4`);let h=e(`div`);l(m,h),o(h,`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`),l(h,n(`Clear + formatter`));let g=i(`rue:component:anchor`);return l(m,g),u(()=>{c(f(S,{value:r.value,maxLength:60,allowClear:!0,showCount:{formatter:e=>`剩余 ${Math.max((e.maxLength??0)-e.count,0)} 字`},status:r.value.length>48?`warning`:void 0,rows:5,placeholder:`写点摘要`,onInput:e=>{r.value=e.target?.value??``}}),m,g)}),a})},ne=()=>{let{composer:t}=h(`useSetup:0:0`,()=>m(()=>({composer:h(`ref:1:3`,()=>d(`大家好，
这块演示会随着内容增高。`))})));return p(()=>{let r=e(`div`);o(r,`grid w-full max-w-2xl gap-4 lg:grid-cols-2`);let a=e(`div`);l(r,a),o(a,`rounded-box border border-base-300 bg-base-100 p-4`);let s=e(`div`);l(a,s),o(s,`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`),l(s,n(`Auto size`));let d=i(`rue:component:anchor`);l(a,d),u(()=>{c(f(S,{value:t.value,autoSize:{minRows:3,maxRows:8},showCount:!0,allowClear:!0,placeholder:`输入一段较长的评论`,onInput:e=>{t.value=e.target?.value??``}}),a,d)});let p=e(`div`);l(r,p),o(p,`rounded-box border border-base-300 bg-base-100 p-4`);let m=e(`div`);l(p,m),o(m,`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`),l(m,n(`Resize directions`));let h=e(`div`);l(p,h),o(h,`grid gap-3`);let g=i(`rue:component:anchor`);l(h,g),c(f(S,{resize:`none`,rows:4,placeholder:`禁止拖拽缩放`}),h,g);let _=i(`rue:component:anchor`);l(h,_),c(f(S,{resize:`horizontal`,rows:4,placeholder:`只允许横向拖拽`}),h,_);let v=i(`rue:component:anchor`);return l(h,v),c(f(S,{resize:`vertical`,rows:4,placeholder:`只允许纵向拖拽`}),h,v),r})},re=()=>{let{review:t}=h(`useSetup:0:0`,()=>m(()=>({review:h(`ref:1:4`,()=>d(`先说结论：这版交互更顺了。

1. 清空和字数提示都更直观。
2. 自动高度适合写中短文。`))})));return p(()=>{let r=e(`div`);o(r,`rounded-box border border-base-300 bg-base-100 p-4`);let a=e(`div`);l(r,a),o(a,`grid gap-4 md:grid-cols-[1.3fr_0.7fr]`);let s=e(`div`);l(a,s),o(s,`space-y-3`);let d=e(`div`);l(s,d);let p=e(`div`);l(d,p),o(p,`text-sm font-medium`),l(p,n(`发布备注`));let m=e(`div`);l(d,m),o(m,`text-xs opacity-60`),l(m,n("组合 `filled + allowClear + autoSize + showCount`。"));let h=i(`rue:component:anchor`);l(s,h),u(()=>{c(f(S,{value:t.value,variant:`filled`,color:`primary`,autoSize:{minRows:4,maxRows:10},allowClear:!0,showCount:!0,maxLength:240,placeholder:`写一段更新说明`,onInput:e=>{t.value=e.target?.value??``}}),s,h)});let g=e(`div`);l(a,g),o(g,`rounded-box bg-base-200/60 p-4 text-sm`);let _=e(`div`);l(g,_),o(_,`mb-2 font-medium`),l(_,n(`使用建议`));let v=e(`ul`);l(g,v),o(v,`m-0 space-y-2 pl-5`);let y=e(`li`);l(v,y),l(y,n("反馈输入优先开 `autoSize`，避免内容被遮住。"));let b=e(`li`);l(v,b),l(b,n("短文本编辑可配 `allowClear`，减少回删成本。"));let x=e(`li`);return l(v,x),l(x,n("有字数约束时，直接叠加 `showCount + maxLength`。")),r})},ie=()=>{let{tabBasic:g,tabSemantic:b,tabCount:x,tabAutoSize:ie,tabColors:ae,tabSizes:oe,tabDisabled:se,tabRecipe:ce}=h(`useSetup:0:0`,()=>m(()=>({tabBasic:h(`ref:1:5`,()=>d(`preview`)),tabSemantic:h(`ref:1:6`,()=>d(`preview`)),tabCount:h(`ref:1:7`,()=>d(`preview`)),tabAutoSize:h(`ref:1:8`,()=>d(`preview`)),tabColors:h(`ref:1:9`,()=>d(`preview`)),tabSizes:h(`ref:1:10`,()=>d(`preview`)),tabDisabled:h(`ref:1:11`,()=>d(`preview`)),tabRecipe:h(`ref:1:12`,()=>d(`preview`))})));return p(()=>{let d=a(),m=i(`rue:component:anchor`);return l(d,m),c(f(y,{children:p(()=>{let d=a(),p=e(`div`);l(d,p),o(p,`max-w-none prose prose-sm md:prose-base`);let m=e(`h1`);l(p,m),l(m,n(`Textarea 文本域`));let h=e(`p`);l(p,h),o(h,`text-sm mt-3 mb-3`),l(h,n(`Textarea 不再只是原生`));let y=e(`code`);l(h,y),l(y,n(`textarea`)),l(h,n(`的样式壳。当前版本保留 Rue 的视觉基底， 同时补齐了更适合真实输入场景的语义 API，比如`));let le=e(`code`);l(h,le),l(le,n(`status`)),l(h,n(`、`));let ue=e(`code`);l(h,ue),l(ue,n(`allowClear`)),l(h,n(`、`));let de=e(`code`);l(h,de),l(de,n(`showCount`)),l(h,n(`、`));let fe=e(`code`);l(h,fe),l(fe,n(`autoSize`)),l(h,n(`和`));let pe=e(`code`);l(h,pe),l(pe,n(`resize`)),l(h,n(`。`));let D=e(`div`);l(p,D),o(D,`text-sm flex flex-wrap gap-4`);let O=e(`a`);l(D,O),t(O,`href`,`https://daisyui.com/components/textarea/`),t(O,`target`,`_blank`),l(O,n(`查看 Textarea 静态样式`));let me=e(`h2`);l(p,me),l(me,n(`何时使用`));let k=e(`ul`);l(p,k);let A=e(`li`);l(k,A),l(A,n(`需要输入评论、备注、描述等多行文本，并希望保留 Rue 的基础视觉风格。`));let j=e(`li`);l(k,j),l(j,n(`需要把状态提示、字数统计、清空操作和自动高度作为统一组件能力复用。`));let M=e(`li`);l(k,M),l(M,n(`需要在轻量样式包装之外，再获得更顺手的交互语义和 demo 参考。`));let N=i(`rue:component:anchor`);l(p,N),u(()=>{c(f(T,{title:`基础用法`,summary:`保留原有受控输入示例，并把当前输入内容直接展示出来。`,tab:g,preview:()=>v(ee,{}),code:`const value = ref('Rue Design\\nMultiline input')

<Textarea
  rows={5}
  placeholder="Bio"
  value={value.value}
  onInput={(event: Event) => {
    value.value = (event.target as HTMLTextAreaElement | null)?.value ?? ''
  }}
/>`}),p,N)});let P=i(`rue:component:anchor`);l(p,P),u(()=>{c(f(T,{title:`语义状态与风格`,summary:`用 status 处理输入风险提示，用 variant 调整层级，不必只靠自定义 className。`,tab:b,preview:()=>_(`div`,{className:`grid w-full max-w-2xl gap-4 lg:grid-cols-2`,children:[v(S,{status:`warning`,rows:4,placeholder:`Warning state`,defaultValue:`这段草稿接近字数上限，建议再收敛一点。`}),v(S,{status:`error`,rows:4,placeholder:`Error state`,defaultValue:`缺少必要信息，请补充发布时间和变更影响范围。`}),v(S,{variant:`filled`,color:`primary`,rows:4,placeholder:`Filled`,defaultValue:`Filled 适合放在更轻的表单背景里。`}),v(S,{variant:`ghost`,rows:4,placeholder:`Ghost`,defaultValue:`Ghost 更适合信息面板或低强调输入区。`})]}),code:`<Textarea status="warning" rows={4} defaultValue="这段草稿接近字数上限，建议再收敛一点。" />
<Textarea status="error" rows={4} defaultValue="缺少必要信息，请补充发布时间和变更影响范围。" />
<Textarea variant="filled" color="primary" rows={4} defaultValue="Filled 适合放在更轻的表单背景里。" />
<Textarea variant="ghost" rows={4} defaultValue="Ghost 更适合信息面板或低强调输入区。" />`}),p,P)});let F=i(`rue:component:anchor`);l(p,F),u(()=>{c(f(T,{title:`字数统计与清空`,summary:`showCount 负责反馈输入进度，allowClear 用于快速回到空态。`,tab:x,preview:()=>v(te,{}),code:`const summary = ref('这是一段会显示字数统计的说明文案。')

<Textarea
  value={summary.value}
  maxLength={120}
  showCount={true}
  rows={5}
  onInput={(event: Event) => {
    summary.value = (event.target as HTMLTextAreaElement | null)?.value ?? ''
  }}
/>

<Textarea
  allowClear={true}
  maxLength={60}
  showCount={{
    formatter: info => \`剩余 \${Math.max((info.maxLength ?? 0) - info.count, 0)} 字\`,
  }}
/>`}),p,F)});let I=i(`rue:component:anchor`);l(p,I),u(()=>{c(f(T,{title:`自动高度与缩放`,summary:`autoSize 更适合评论、描述、发布说明；resize 则覆盖拖拽策略。`,tab:ie,preview:()=>v(ne,{}),code:`const composer = ref('大家好，\\n这块演示会随着内容增高。')

<Textarea
  value={composer.value}
  autoSize={{ minRows: 3, maxRows: 8 }}
  showCount={true}
  allowClear={true}
  onInput={(event: Event) => {
    composer.value = (event.target as HTMLTextAreaElement | null)?.value ?? ''
  }}
/>

<Textarea resize="none" rows={4} placeholder="禁止拖拽缩放" />
<Textarea resize="horizontal" rows={4} placeholder="只允许横向拖拽" />
<Textarea resize="vertical" rows={4} placeholder="只允许纵向拖拽" />`}),p,I)});let L=i(`rue:component:anchor`);l(p,L),u(()=>{c(f(T,{title:`颜色色板`,summary:`保留原有颜色示例，继续沿用 Rue 的主题色体系。`,tab:ae,preview:()=>v(`div`,{className:`grid w-full max-w-md gap-4`,children:C.map(e=>v(S,{color:e.color,placeholder:e.label},e.label))}),code:`<Textarea color="primary" placeholder="Primary" />
<Textarea color="secondary" placeholder="Secondary" />
<Textarea color="accent" placeholder="Accent" />
<Textarea color="neutral" placeholder="Neutral" />
<Textarea color="info" placeholder="Info" />
<Textarea color="success" placeholder="Success" />
<Textarea color="warning" placeholder="Warning" />
<Textarea color="error" placeholder="Error" />`}),p,L)});let R=i(`rue:component:anchor`);l(p,R),u(()=>{c(f(T,{title:`尺寸体系`,summary:`保留原有 xs 到 xl 示例，并补充 small / middle / large 别名。`,tab:oe,preview:()=>_(`div`,{className:`grid w-full max-w-md gap-4`,children:[v(S,{"data-testid":`textarea-size-xs`,size:`xs`,placeholder:`Xsmall`}),v(S,{size:`sm`,placeholder:`Small`}),v(S,{size:`md`,placeholder:`Medium`}),v(S,{size:`lg`,placeholder:`Large`}),v(S,{size:`xl`,placeholder:`Xlarge`}),v(S,{size:`small`,placeholder:`Small alias`}),v(S,{size:`middle`,placeholder:`Middle alias`}),v(S,{size:`large`,placeholder:`Large alias`})]}),code:`<Textarea size="xs" placeholder="Xsmall" />
<Textarea size="sm" placeholder="Small" />
<Textarea size="md" placeholder="Medium" />
<Textarea size="lg" placeholder="Large" />
<Textarea size="xl" placeholder="Xlarge" />

<Textarea size="small" placeholder="Small alias" />
<Textarea size="middle" placeholder="Middle alias" />
<Textarea size="large" placeholder="Large alias" />`}),p,R)});let z=i(`rue:component:anchor`);l(p,z),u(()=>{c(f(T,{title:`禁用与只读`,summary:`保留原有 disabled 示例，并补一组只读场景。`,tab:se,preview:()=>_(`div`,{className:`grid w-full max-w-xl gap-4`,children:[v(S,{"data-testid":`textarea-disabled`,placeholder:`Bio`,disabled:!0}),v(S,{readOnly:!0,variant:`filled`,rows:4,defaultValue:`只读文本域适合展示已经生成但允许复制的说明文案。`})]}),code:`<Textarea placeholder="Bio" disabled={true} />

<Textarea
  readOnly={true}
  variant="filled"
  rows={4}
  defaultValue="只读文本域适合展示已经生成但允许复制的说明文案。"
/>`}),p,z)});let B=i(`rue:component:anchor`);l(p,B),u(()=>{c(f(T,{title:`场景组合`,summary:`把 Filled、自动高度、清空和字数统计组合起来，就能快速搭出真实输入区。`,tab:ce,preview:()=>v(re,{}),code:`const review = ref('先说结论：这版交互更顺了。')

<Textarea
  value={review.value}
  variant="filled"
  color="primary"
  autoSize={{ minRows: 4, maxRows: 10 }}
  allowClear={true}
  showCount={true}
  maxLength={240}
  onInput={(event: Event) => {
    review.value = (event.target as HTMLTextAreaElement | null)?.value ?? ''
  }}
/>`}),p,B)});let V=e(`h2`);l(p,V),t(V,`id`,`textarea-api`),l(V,n(`API`));let H=e(`p`);l(p,H),l(H,n(`下面列出当前页面新增或重点推荐使用的 Textarea API。`));let he=i(`rue:component:anchor`);l(p,he),u(()=>{c(f(E,{rows:w}),p,he)});let U=e(`div`);l(p,U),o(U,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4`);let W=e(`h3`);l(U,W),o(W,`mt-0 mb-3 text-base font-semibold`),l(W,n(`组合建议`));let G=e(`div`);l(U,G),o(G,`grid gap-2 text-sm md:grid-cols-2`);let K=e(`div`);l(G,K);let ge=e(`code`);l(K,ge),l(ge,n(`showCount + maxLength`)),l(K,n(`：适合摘要、简介、备注等有限长输入。`));let q=e(`div`);l(G,q);let _e=e(`code`);l(q,_e),l(_e,n(`allowClear + autoSize`)),l(q,n(`：适合评论、回复、发布说明。`));let J=e(`div`);l(G,J);let ve=e(`code`);l(J,ve),l(ve,n(`status="warning"`)),l(J,n(`：适合接近限制但仍可提交的状态。`));let Y=e(`div`);l(G,Y);let ye=e(`code`);l(Y,ye),l(ye,n(`status="error"`)),l(Y,n(`：适合校验失败或缺少关键信息。`));let be=e(`h2`);l(p,be),l(be,n(`FAQ`));let xe=e(`h3`);l(p,xe),l(xe,n(`什么时候用 color，什么时候用 status？`));let X=e(`p`);l(p,X);let Se=e(`code`);l(X,Se),l(Se,n(`color`)),l(X,n(`更偏主题色表达，适合整体视觉语气；`));let Ce=e(`code`);l(X,Ce),l(Ce,n(`status`));let we=r(X);l(X,we),s(we,` `),l(X,n(`更偏输入反馈语义， 适合警告和错误提示。常见表单场景里，优先用`));let Te=e(`code`);l(X,Te),l(Te,n(`status`));let Ee=r(X);l(X,Ee),s(Ee,` `),l(X,n(`表达风险更直观。`));let De=e(`h3`);l(p,De),l(De,n(`autoSize 和原生 rows 是什么关系？`));let Z=e(`p`);l(p,Z),l(Z,n(`如果同时传了`));let Oe=e(`code`);l(Z,Oe),l(Oe,n(`rows`)),l(Z,n(`，它会作为自动高度的初始下限；如果只传`));let Q=e(`code`);l(Z,Q),l(Q,n(`autoSize`));let ke=r(Z);l(Z,ke),s(ke,` `),l(Z,n(`对象， 则优先使用其中的`));let Ae=e(`code`);l(Z,Ae),l(Ae,n(`minRows`)),l(Z,n(`。`));let je=e(`h3`);l(p,je),l(je,n(`showCount 会不会限制输入？`));let $=e(`p`);l(p,$),l($,n(`不会。真正的限制仍由原生`));let Me=e(`code`);l($,Me),l(Me,n(`maxLength`)),l($,n(`控制；`));let Ne=e(`code`);l($,Ne),l(Ne,n(`showCount`));let Pe=r($);return l($,Pe),s(Pe,` `),l($,n(`负责把当前输入进度展示出来。`)),d})}),d,m),d})};export{ie as default};