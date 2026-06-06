import{$ as e,B as t,Dt as n,G as r,H as i,K as a,U as o,W as s,Z as c,at as l,ht as u,l as d,s as f,t as p,wt as m,yt as h}from"./vapor-runtime-C1rlwc61.js";import{a as g,n as _}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as v}from"./Code-BCLFq1E3.js";import{n as y,t as b}from"./src-BLzF0BqW.js";import{n as x}from"./SidebarPlaygroundDesign-DmoUIYgb.js";import{t as S}from"./tabs-BOxm6iIN.js";var C=e=>e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`),w=e=>e?typeof e==`string`?e.trim():Object.entries(e).filter(([,e])=>e!=null).map(([e,t])=>`${e.startsWith(`--`)?e:C(e)}:${String(t)}`).join(`; `):``,T=(...e)=>e.map(e=>w(e)).filter(Boolean).join(`; `),ee={display:`grid`,justifyContent:`normal`,alignItems:`stretch`},E=(e,t,n)=>e<t?t:e>n?n:e,D=(e,t)=>{let n=Number(e);return Number.isFinite(n)?n:t},O=(e,t)=>{let n=D(e,0),r=D(t,100);return r<=n?{min:n,max:n+1}:{min:n,max:r}},k=e=>{let t=D(e,1);return t>0?t:1},A=(e,t,n,r)=>E(D(e,r),t,n),j=(e,t,n)=>(e-t)/(n-t)*100,M=(e,t)=>t?`${e} ${t}`:e,N=e=>b(`div`,{className:`relative h-full [&>*]:h-full [&>*]:w-full [&>*]:max-w-none`,children:e}),te=e=>e==null?!1:Array.isArray(e)?e.length>0:!0,P=(e,t)=>{typeof e==`function`?e(t):e&&typeof e==`object`&&`current`in e&&(e.current=t??void 0)},F=({className:e,style:t,role:n,tabIndex:r,label:i,labelClassName:a,children:o,...s})=>{let c=s.ref;`ref`in s&&delete s.ref;let l=w(t),u=e=>{e&&(l?e.setAttribute(`style`,l):e.removeAttribute(`style`)),P(c,e)};return y(`div`,{...s,ref:u,className:M(`diff-item-1 relative`,e),role:n,tabIndex:r,children:[i==null?null:b(`span`,{className:M(`pointer-events-none absolute left-4 top-4 z-10 rounded-full bg-base-100/80 px-3 py-1 text-xs font-medium text-base-content shadow-sm backdrop-blur`,a),children:i}),o]})},I=({className:e,style:t,role:n,tabIndex:r,label:i,labelClassName:a,children:o,...s})=>{let c=s.ref;`ref`in s&&delete s.ref;let l=w(t),u=e=>{e&&(l?e.setAttribute(`style`,l):e.removeAttribute(`style`)),P(c,e)};return y(`div`,{...s,ref:u,className:M(`diff-item-2 relative`,e),role:n,tabIndex:r,children:[i==null?null:b(`span`,{className:M(`pointer-events-none absolute right-4 top-4 z-10 rounded-full bg-base-100/80 px-3 py-1 text-xs font-medium text-base-content shadow-sm backdrop-blur`,a),children:i}),o]})},L=({className:e,style:t,children:n,...r})=>{let i=r.ref;`ref`in r&&delete r.ref;let a=w(t),o=e=>{e&&(a?e.setAttribute(`style`,a):e.removeAttribute(`style`)),P(i,e)};return b(`div`,{...r,ref:o,className:M(`diff-resizer`,e),children:n})},R=Object.assign(({className:e,style:t,tabIndex:n,value:r,defaultValue:i,min:a,max:o,step:s,disabled:c,item1:l,item2:d,item1Label:f,item2Label:p,resizerContent:m,children:h,onChange:g,..._})=>{let v=_.ref;`ref`in _&&delete _.ref;let x=O(a,o),S=k(s),C=u(A(i??r??50,x.min,x.max,50)),E=r!==void 0,D=E?A(r,x.min,x.max,C.value):A(C.value,x.min,x.max,50),R=j(D,x.min,x.max),z=!te(h)&&(l!==void 0||d!==void 0),B=M(z?`diff relative isolate overflow-hidden select-none`:`diff`,e),V=T(t,ee),H=null,U=null,W=null,G=null,K=null,q=e=>{e&&(V?e.setAttribute(`style`,V):e.removeAttribute(`style`)),P(v,e)},J=e=>{let t=j(e,x.min,x.max);H&&H.setAttribute(`style`,w({clipPath:`inset(0 ${100-t}% 0 0)`})),U&&U.setAttribute(`style`,w({clipPath:`inset(0 0 0 ${t}%)`})),W&&W.setAttribute(`style`,w({left:`${t}%`,width:0,minWidth:0,maxWidth:0,clipPath:`none`,overflow:`visible`,opacity:1,resize:`none`,transform:`translateX(-50%)`})),G&&(G.style.left=`${t}%`),K&&(K.setAttribute(`aria-valuenow`,String(e)),K.value=String(e))},Y=e=>{let t=e.target,n=A(t?.value,x.min,x.max,D);E||(C.value=n),J(n),g&&g(n,e)};if(!z)return b(`figure`,{..._,ref:q,className:B,tabIndex:n,"aria-disabled":c?`true`:void 0,children:h});let X=_[`aria-label`]??`Diff position`;return y(`figure`,{..._,ref:q,className:B,tabIndex:void 0,"aria-disabled":c?`true`:void 0,children:[b(F,{className:`absolute inset-0 z-10 overflow-hidden`,role:`img`,ref:e=>{H=e,J(D)},children:N(l)}),b(I,{className:`absolute inset-0 overflow-hidden after:hidden`,role:`img`,ref:e=>{U=e,J(D)},children:N(d)}),f==null?null:b(`span`,{className:`pointer-events-none absolute left-4 top-4 z-30 rounded-full bg-base-100/80 px-3 py-1 text-xs font-medium text-base-content shadow-sm backdrop-blur`,children:f}),p==null?null:b(`span`,{className:`pointer-events-none absolute right-4 top-4 z-30 rounded-full bg-base-100/80 px-3 py-1 text-xs font-medium text-base-content shadow-sm backdrop-blur`,children:p}),b(L,{className:`pointer-events-none absolute inset-y-0 z-20`,ref:e=>{W=e,J(D)},style:{left:`${R}%`,width:0,minWidth:0,maxWidth:0,clipPath:`none`,overflow:`visible`,opacity:1,resize:`none`,transform:`translateX(-50%)`},children:b(`span`,{className:`absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-base-100 shadow-sm`})}),m==null?null:b(`span`,{ref:e=>{G=e,J(D)},className:`pointer-events-none absolute top-1/2 z-30 inline-flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-base-300 bg-base-100/85 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-base-content shadow-sm backdrop-blur`,style:{left:`${R}%`},children:m}),b(`input`,{type:`range`,className:`absolute inset-0 z-30 h-full w-full cursor-col-resize opacity-0 disabled:cursor-not-allowed`,ref:e=>{K=e,J(D)},min:String(x.min),max:String(x.max),step:String(S),value:String(D),disabled:c,tabIndex:n,"aria-label":X,"aria-valuemin":String(x.min),"aria-valuemax":String(x.max),"aria-valuenow":String(D),onInput:Y,onChange:Y})]})},{Item1:F,Item2:I,Resizer:L}),z=a=>d(c=>{let l=s(`div`,c);e(l,`component-preview not-prose text-base-content my-6 lg:my-12`);let u=s(`div`,l);t(l,u),e(u,`flex flex-wrap items-start justify-between gap-3`);let m=s(`div`,u);t(u,m);let g=s(`h2`,m);t(m,g),e(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),t(g,r(`# `));let _=i(`rue:slot:anchor`);t(g,_),n(()=>{let e=a.title;h(()=>f(e,g,_))});let y=i(`rue:slot:anchor`);t(m,y),n(()=>{let r=a.summary?d(()=>{let r=o(),c=s(`p`,r);t(r,c),e(c,`m-0 text-sm opacity-70`);let l=i(`rue:slot:anchor`);return t(c,l),n(()=>{let e=a.summary;h(()=>f(e,c,l))}),r}):``;h(()=>f(r,m,y))});let b=i(`rue:component:anchor`);t(l,b),n(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:a.tab.value,onChange:e=>a.tab.value=e,className:`mb-3 mt-4`});h(()=>f(e,l,b))});let x=i(`rue:slot:anchor`);return t(l,x),n(()=>{let e=a.tab.value===`preview`?a.preview():d(()=>{let e=o(),r=i(`rue:component:anchor`);return t(e,r),n(()=>{let t=p(v,{className:`mt-2`,lang:`tsx`,code:a.code});h(()=>f(t,e,r))}),e});h(()=>f(e,l,x))}),l}),B=a=>d(l=>{let u=s(`div`,l);e(u,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let p=s(`table`,u);t(u,p),e(p,`table table-zebra`);let m=s(`thead`,p);t(p,m);let g=s(`tr`,m);t(m,g);let v=s(`th`,g);t(g,v),t(v,r(`属性`));let y=s(`th`,g);t(g,y),t(y,r(`说明`));let b=s(`th`,g);t(g,b),t(b,r(`类型`));let x=s(`th`,g);t(g,x),t(x,r(`默认值`));let S=s(`tbody`,p);t(p,S);let C=i(`rue:list:start`),w=i(`rue:list:end`);t(S,C),t(S,w);let T=new Map;return n(()=>{T=_({items:a.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,r,a,l,u)=>{f(d(()=>{let r=o(),a=s(`tr`,r);t(r,a),n(()=>{c(a,`key`,String(e.prop))});let l=s(`td`,a);t(a,l);let u=s(`code`,l);t(l,u);let d=i(`rue:slot:anchor`);t(u,d),n(()=>{let t=e.prop;h(()=>f(t,u,d))});let p=s(`td`,a);t(a,p);let m=i(`rue:slot:anchor`);t(p,m),n(()=>{let t=e.description;h(()=>f(t,p,m))});let g=s(`td`,a);t(a,g);let _=s(`code`,g);t(g,_);let v=i(`rue:slot:anchor`);t(_,v),n(()=>{let t=e.type;h(()=>f(t,_,v))});let y=s(`td`,a);t(a,y);let b=s(`code`,y);t(y,b);let x=i(`rue:slot:anchor`);return t(b,x),n(()=>{let t=e.defaultValue;h(()=>f(t,b,x))}),r}),r,a)}})}),u}),V=[{prop:`item1`,description:`快捷模式下的左侧内容`,type:`any`,defaultValue:`-`},{prop:`item2`,description:`快捷模式下的右侧内容`,type:`any`,defaultValue:`-`},{prop:`item1Label`,description:`左侧角标文案或节点`,type:`any`,defaultValue:`-`},{prop:`item2Label`,description:`右侧角标文案或节点`,type:`any`,defaultValue:`-`},{prop:`resizerContent`,description:`手柄中央的自定义内容`,type:`any`,defaultValue:`-`},{prop:`value`,description:`受控位置值，仅快捷模式生效`,type:`number`,defaultValue:`-`},{prop:`defaultValue`,description:`非受控初始位置，仅快捷模式生效`,type:`number`,defaultValue:`50`},{prop:`min`,description:`最小值，仅快捷模式生效`,type:`number`,defaultValue:`0`},{prop:`max`,description:`最大值，仅快捷模式生效`,type:`number`,defaultValue:`100`},{prop:`step`,description:`步进值，仅快捷模式生效`,type:`number`,defaultValue:`1`},{prop:`onChange`,description:`拖动或键盘调整时回调当前值`,type:`(value: number, event: Event) => void`,defaultValue:`-`},{prop:`disabled`,description:`禁用快捷模式拖动能力`,type:`boolean`,defaultValue:`false`},{prop:`children`,description:`传入子节点后优先使用旧的组合式结构`,type:`any`,defaultValue:`-`}],H=[{prop:`Diff.Item1`,description:`左侧内容区，兼容 role、tabIndex、label 和 style`,type:`component`,defaultValue:`-`},{prop:`Diff.Item2`,description:`右侧内容区，兼容 role、tabIndex、label 和 style`,type:`component`,defaultValue:`-`},{prop:`Diff.Resizer`,description:`分隔条，可继续自定义 className、style 和 children`,type:`component`,defaultValue:`-`},{prop:`tabIndex`,description:`旧结构模式下继续透传到根节点`,type:`number`,defaultValue:`-`}],U=()=>{let{tabEnhanced:_,tabControlled:v,tabReadonly:S,tabLegacyImage:C,tabLegacyText:w,controlledValue:T}=g(`useSetup:0:0`,()=>m(()=>({tabEnhanced:g(`ref:1:0`,()=>u(`preview`)),tabControlled:g(`ref:1:1`,()=>u(`preview`)),tabReadonly:g(`ref:1:2`,()=>u(`preview`)),tabLegacyImage:g(`ref:1:3`,()=>u(`preview`)),tabLegacyText:g(`ref:1:4`,()=>u(`preview`)),controlledValue:g(`ref:1:5`,()=>u(38))})));return d(u=>{let m=o(),g=i(`rue:component:anchor`);return t(m,g),f(p(x,{children:d(()=>{let u=o(),d=s(`div`,u);t(u,d),e(d,`max-w-none prose prose-sm md:prose-base`);let m=s(`h1`,d);t(d,m),t(m,r(`Diff 对比`));let g=s(`p`,d);t(d,g),e(g,`text-sm mt-3 mb-3`),t(g,r(`Diff 现在除了保留原来的组合式结构，还补上一套更顺手的快捷 API。可以直接传内容和位置值，也可以继续用`));let x=s(`code`,g);t(g,x),t(x,r(`Diff.Item1`)),t(g,r(`、`));let ee=s(`code`,g);t(g,ee),t(ee,r(`Diff.Item2`)),t(g,r(`、`));let E=s(`code`,g);t(g,E),t(E,r(`Diff.Resizer`)),t(g,r(`自己拼装。`));let D=s(`h2`,d);t(d,D),t(D,r(`何时使用`));let O=s(`ul`,d);t(d,O);let k=s(`li`,O);t(O,k),t(k,r(`需要比较两个版本、两套视觉稿或两段内容，并让用户自己拖动查看差异。`));let A=s(`li`,O);t(O,A),t(A,r(`想要一个更轻的 API，直接传左右内容和默认位置，而不是每次都手写三段结构。`));let j=i(`rue:component:anchor`);t(d,j),n(()=>{let e=p(z,{title:`增强写法`,summary:`直接用 item1、item2、item1Label、item2Label 和 resizerContent 就能得到可拖动的对比区域。`,tab:_,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-4`,children:[b(R,{className:`rounded-box aspect-[16/9] border border-base-300`,defaultValue:44,item1Label:`V1`,item2Label:`V2`,resizerContent:`new`,"aria-label":`首页头图改版对比`,item1:b(`div`,{className:`h-full w-full bg-[#112031] p-6 text-white`,children:y(`div`,{className:`flex h-full flex-col justify-between`,children:[y(`div`,{className:`space-y-3`,children:[b(`div`,{className:`text-xs uppercase tracking-[0.3em] text-cyan-200/80`,children:`Rue Cloud`}),b(`div`,{className:`max-w-[14rem] text-3xl font-semibold leading-tight`,children:`Ship design changes with one source of truth`}),b(`div`,{className:`max-w-[16rem] text-sm text-slate-300`,children:`聚焦深色界面和强对比 CTA，强调协作与发布节奏。`})]}),y(`div`,{className:`flex gap-2`,children:[b(`span`,{className:`rounded-full bg-cyan-400 px-3 py-1 text-xs font-semibold text-slate-950`,children:`Publish faster`}),b(`span`,{className:`rounded-full border border-white/20 px-3 py-1 text-xs text-white/80`,children:`Team sync`})]})]})}),item2:b(`div`,{className:`h-full w-full bg-base-200 p-6 text-base-content`,children:y(`div`,{className:`flex h-full flex-col justify-between rounded-box border border-base-300 bg-base-100 p-5 shadow-sm`,children:[y(`div`,{className:`space-y-3`,children:[b(`div`,{className:`text-xs uppercase tracking-[0.3em] opacity-60`,children:`Rue Cloud`}),b(`div`,{className:`max-w-[14rem] text-3xl font-semibold leading-tight`,children:`Design review feels calmer and more editorial`}),b(`div`,{className:`max-w-[16rem] text-sm opacity-70`,children:`同一套信息结构，但把密度降下来，强调留白、节奏和可读性。`})]}),y(`div`,{className:`grid grid-cols-2 gap-2 text-xs`,children:[b(`div`,{className:`rounded-box bg-base-200 px-3 py-2`,children:`Clear sections`}),b(`div`,{className:`rounded-box bg-base-200 px-3 py-2`,children:`Softer contrast`}),b(`div`,{className:`rounded-box bg-base-200 px-3 py-2`,children:`Readable text`}),b(`div`,{className:`rounded-box bg-base-200 px-3 py-2`,children:`Stable hierarchy`})]})]})})}),b(`div`,{className:`text-sm opacity-70`,children:`快捷模式下内部会自动生成拖动层，键盘聚焦后也能直接调整位置。`})]})}),code:`<Diff
  className="rounded-box aspect-[16/9] border border-base-300"
  defaultValue={44}
  item1Label="V1"
  item2Label="V2"
  resizerContent="new"
  aria-label="首页头图改版对比"
  item1={
    <div className="h-full w-full bg-[#112031] p-6 text-white">
      <div className="flex h-full flex-col justify-between">
        <div className="space-y-3">
          <div className="text-xs uppercase tracking-[0.3em] text-cyan-200/80">Rue Cloud</div>
          <div className="max-w-[14rem] text-3xl font-semibold leading-tight">
            Ship design changes with one source of truth
          </div>
          <div className="max-w-[16rem] text-sm text-slate-300">
            聚焦深色界面和强对比 CTA，强调协作与发布节奏。
          </div>
        </div>
        <div className="flex gap-2">
          <span className="rounded-full bg-cyan-400 px-3 py-1 text-xs font-semibold text-slate-950">
            Publish faster
          </span>
          <span className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/80">
            Team sync
          </span>
        </div>
      </div>
    </div>
  }
  item2={
    <div className="h-full w-full bg-base-200 p-6 text-base-content">
      <div className="flex h-full flex-col justify-between rounded-box border border-base-300 bg-base-100 p-5 shadow-sm">
        <div className="space-y-3">
          <div className="text-xs uppercase tracking-[0.3em] opacity-60">Rue Cloud</div>
          <div className="max-w-[14rem] text-3xl font-semibold leading-tight">
            Design review feels calmer and more editorial
          </div>
          <div className="max-w-[16rem] text-sm opacity-70">
            同一套信息结构，但把密度降下来，强调留白、节奏和可读性。
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="rounded-box bg-base-200 px-3 py-2">Clear sections</div>
          <div className="rounded-box bg-base-200 px-3 py-2">Softer contrast</div>
          <div className="rounded-box bg-base-200 px-3 py-2">Readable text</div>
          <div className="rounded-box bg-base-200 px-3 py-2">Stable hierarchy</div>
        </div>
      </div>
    </div>
  }
/>`});h(()=>f(e,d,j))});let M=i(`rue:component:anchor`);t(d,M),n(()=>{let e=p(z,{title:`受控位置`,summary:`value 和 onChange 可以把 Diff 变成受控组件，适合和外部滑杆、表单或讲解步骤联动。`,tab:v,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-4`,children:[y(`div`,{className:`flex flex-wrap items-center gap-3 text-sm`,children:[y(`span`,{className:`badge badge-outline`,children:[`当前值 `,T.value]}),b(`button`,{className:`btn btn-xs`,onClick:()=>T.value=20,children:`20`}),b(`button`,{className:`btn btn-xs`,onClick:()=>T.value=50,children:`50`}),b(`button`,{className:`btn btn-xs`,onClick:()=>T.value=80,children:`80`})]}),b(`input`,{type:`range`,className:`range range-primary`,min:`0`,max:`100`,value:String(T.value),onInput:e=>{let t=e.target;T.value=Number(t.value)}}),b(R,{className:`rounded-box aspect-[16/9] border border-base-300`,value:T.value,onChange:e=>{T.value=e},item1Label:`Before`,item2Label:`After`,resizerContent:`${T.value}%`,"aria-label":`品牌色调整对比`,item1:b(`div`,{className:`grid h-full w-full place-content-center bg-slate-950 text-center text-white`,children:y(`div`,{className:`space-y-2`,children:[b(`div`,{className:`text-xs uppercase tracking-[0.35em] text-fuchsia-200/70`,children:`Old palette`}),b(`div`,{className:`text-5xl font-black`,children:`RUE`}),b(`div`,{className:`mx-auto h-2 w-28 rounded-full bg-fuchsia-500`})]})}),item2:b(`div`,{className:`grid h-full w-full place-content-center bg-neutral-100 text-center text-slate-900`,children:y(`div`,{className:`space-y-2`,children:[b(`div`,{className:`text-xs uppercase tracking-[0.35em] text-cyan-700/60`,children:`New palette`}),b(`div`,{className:`text-5xl font-black`,children:`RUE`}),b(`div`,{className:`mx-auto h-2 w-28 rounded-full bg-cyan-500`})]})})})]})}),code:`const value = ref(38)

<input
  type="range"
  className="range range-primary"
  min="0"
  max="100"
  value={String(value.value)}
  onInput={event => {
    const target = event.target as HTMLInputElement
    value.value = Number(target.value)
  }}
/>

<Diff
  className="rounded-box aspect-[16/9] border border-base-300"
  value={value.value}
  onChange={nextValue => {
    value.value = nextValue
  }}
  item1Label="Before"
  item2Label="After"
  resizerContent={\`\${value.value}%\`}
  aria-label="品牌色调整对比"
  item1={
    <div className="grid h-full w-full place-content-center bg-slate-950 text-center text-white">
      <div className="space-y-2">
        <div className="text-xs uppercase tracking-[0.35em] text-fuchsia-200/70">Old palette</div>
        <div className="text-5xl font-black">RUE</div>
        <div className="mx-auto h-2 w-28 rounded-full bg-fuchsia-500" />
      </div>
    </div>
  }
  item2={
    <div className="grid h-full w-full place-content-center bg-neutral-100 text-center text-slate-900">
      <div className="space-y-2">
        <div className="text-xs uppercase tracking-[0.35em] text-cyan-700/60">New palette</div>
        <div className="text-5xl font-black">RUE</div>
        <div className="mx-auto h-2 w-28 rounded-full bg-cyan-500" />
      </div>
    </div>
  }
/>`});h(()=>f(e,d,M))});let N=i(`rue:component:anchor`);t(d,N),n(()=>{let e=p(z,{title:`只读模式`,summary:`disabled 会保留当前可视结果，但不再允许拖动，适合说明文档、快照回顾或固定审稿视角。`,tab:S,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-4`,children:[b(R,{className:`rounded-box aspect-[16/9] border border-base-300`,value:62,disabled:!0,item1Label:`Dense`,item2Label:`Comfort`,resizerContent:`lock`,"aria-label":`信息密度对比`,item1:b(`div`,{className:`h-full w-full bg-base-300 p-4 text-xs text-base-content`,children:b(`div`,{className:`grid h-full grid-cols-3 gap-2`,children:Array.from({length:12}).map((e,t)=>y(`div`,{className:`rounded-box border border-base-100 bg-base-100 p-2`,children:[b(`div`,{className:`h-2 w-8 rounded-full bg-primary/70`}),y(`div`,{className:`mt-2 space-y-1`,children:[b(`div`,{className:`h-1.5 rounded-full bg-base-300`}),b(`div`,{className:`h-1.5 rounded-full bg-base-300`}),b(`div`,{className:`h-1.5 w-3/4 rounded-full bg-base-300`})]})]},t))})}),item2:b(`div`,{className:`h-full w-full bg-base-200 p-6 text-base-content`,children:y(`div`,{className:`grid h-full gap-4 md:grid-cols-[1.1fr_0.9fr]`,children:[y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-5`,children:[b(`div`,{className:`h-3 w-24 rounded-full bg-primary/70`}),y(`div`,{className:`mt-4 space-y-3`,children:[b(`div`,{className:`h-3 rounded-full bg-base-200`}),b(`div`,{className:`h-3 rounded-full bg-base-200`}),b(`div`,{className:`h-3 w-4/5 rounded-full bg-base-200`})]})]}),y(`div`,{className:`grid gap-3`,children:[b(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`}),b(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`}),b(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`})]})]})})}),b(`div`,{className:`text-sm opacity-70`,children:`固定为 62%，用来展示最终审稿视角。`})]})}),code:`<Diff
  className="rounded-box aspect-[16/9] border border-base-300"
  value={62}
  disabled
  item1Label="Dense"
  item2Label="Comfort"
  resizerContent="lock"
  aria-label="信息密度对比"
  item1={
    <div className="h-full w-full bg-base-300 p-4 text-xs text-base-content">
      <div className="grid h-full grid-cols-3 gap-2">
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index} className="rounded-box border border-base-100 bg-base-100 p-2">
            <div className="h-2 w-8 rounded-full bg-primary/70" />
            <div className="mt-2 space-y-1">
              <div className="h-1.5 rounded-full bg-base-300" />
              <div className="h-1.5 rounded-full bg-base-300" />
              <div className="h-1.5 w-3/4 rounded-full bg-base-300" />
            </div>
          </div>
        ))}
      </div>
    </div>
  }
  item2={
    <div className="h-full w-full bg-base-200 p-6 text-base-content">
      <div className="grid h-full gap-4 md:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-box border border-base-300 bg-base-100 p-5">
          <div className="h-3 w-24 rounded-full bg-primary/70" />
          <div className="mt-4 space-y-3">
            <div className="h-3 rounded-full bg-base-200" />
            <div className="h-3 rounded-full bg-base-200" />
            <div className="h-3 w-4/5 rounded-full bg-base-200" />
          </div>
        </div>
        <div className="grid gap-3">
          <div className="rounded-box border border-base-300 bg-base-100 p-4" />
          <div className="rounded-box border border-base-300 bg-base-100 p-4" />
          <div className="rounded-box border border-base-300 bg-base-100 p-4" />
        </div>
      </div>
    </div>
  }
/>`});h(()=>f(e,d,N))});let te=i(`rue:component:anchor`);t(d,te),n(()=>{let e=p(z,{title:`图片对比`,summary:`组合式写法示例。`,tab:C,preview:()=>y(R,{className:`rounded-field aspect-16/9`,tabIndex:0,children:[b(R.Item1,{role:`img`,tabIndex:0,children:b(`img`,{alt:`daisy`,src:`https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp`})}),b(R.Item2,{role:`img`,children:b(`img`,{alt:`daisy`,src:`https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.webp`})}),b(R.Resizer,{})]}),code:`<Diff className="aspect-16/9" tabIndex={0}>
  <Diff.Item1 role="img" tabIndex={0}>
    <img alt="daisy" src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp" />
  </Diff.Item1>
  <Diff.Item2 role="img">
    <img alt="daisy" src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.webp" />
  </Diff.Item2>
  <Diff.Resizer />
</Diff>`});h(()=>f(e,d,te))});let P=i(`rue:component:anchor`);t(d,P),n(()=>{let e=p(z,{title:`文本对比`,summary:`增强 API 不是替代，而是补齐。`,tab:w,preview:()=>y(R,{className:`rounded-field aspect-16/9`,tabIndex:0,children:[b(R.Item1,{role:`img`,tabIndex:0,children:b(`div`,{className:`bg-primary text-primary-content text-4xl lg:text-9xl font-black grid place-content-center`,children:`DAISY`})}),b(R.Item2,{role:`img`,children:b(`div`,{className:`bg-base-200 text-4xl lg:text-9xl font-black grid place-content-center`,children:`DAISY`})}),b(R.Resizer,{})]}),code:`<Diff className="aspect-16/9" tabIndex={0}>
  <Diff.Item1 role="img" tabIndex={0}>
    <div className="bg-primary text-primary-content grid place-content-center text-9xl font-black">
      DAISY
    </div>
  </Diff.Item1>
  <Diff.Item2 role="img">
    <div className="bg-base-200 grid place-content-center text-9xl font-black">DAISY</div>
  </Diff.Item2>
  <Diff.Resizer />
</Diff>`});h(()=>f(e,d,P))});let F=s(`h2`,d);t(d,F),c(F,`id`,`diff-api`),t(F,r(`API`));let I=s(`p`,d);t(d,I),t(I,r(`Diff 现在同时支持快捷模式和组合式模式，下面按根组件和子组件拆开列出。`));let L=i(`rue:component:anchor`);t(d,L),n(()=>{let e=p(B,{rows:V});h(()=>f(e,d,L))});let U=s(`div`,d);t(d,U),e(U,`not-prose mt-6`);let W=i(`rue:component:anchor`);t(d,W),n(()=>{let e=p(B,{rows:H});h(()=>f(e,d,W))});let G=s(`div`,d);t(d,G),e(G,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4 text-sm`);let K=s(`div`,G);t(G,K),e(K,`font-semibold`),t(K,r(`模式选择建议`));let q=s(`div`,G);t(G,q),e(q,`mt-2 grid gap-2 md:grid-cols-2`);let J=s(`div`,q);t(q,J);let Y=s(`code`,J);t(J,Y),t(Y,r(`item1 / item2`)),t(J,r(`适合快速搭 demo、做受控联动、补标签和默认手柄内容。`));let X=s(`div`,q);t(q,X);let ne=s(`code`,X);t(X,ne),t(ne,r(`children + Diff.Item1 / Item2 / Resizer`));let re=a(X);t(X,re),l(re,` `),t(X,r(`适合保留旧结构，或自己完全掌控内部布局。`));let ie=s(`h2`,d);t(d,ie),t(ie,r(`FAQ`));let ae=s(`h3`,d);t(d,ae),t(ae,r(`快捷模式和组合式模式怎么选？`));let Z=s(`p`,d);t(d,Z),t(Z,r(`如果你只是想比较两个内容块，优先用`));let oe=s(`code`,Z);t(Z,oe),t(oe,r(`item1`)),t(Z,r(`和`));let se=s(`code`,Z);t(Z,se),t(se,r(`item2`)),t(Z,r(`。如果你已经有现成结构， 或者需要完全接管内部节点顺序，就继续用旧的组合式写法。`));let ce=s(`h3`,d);t(d,ce),t(ce,r(`value 和 defaultValue 有什么区别？`));let Q=s(`p`,d);t(d,Q);let le=s(`code`,Q);t(Q,le),t(le,r(`value`)),t(Q,r(`是受控值，外部状态说了算；`));let ue=s(`code`,Q);t(Q,ue),t(ue,r(`defaultValue`));let de=a(Q);t(Q,de),l(de,` `),t(Q,r(`只决定初始位置，之后由组件内部维护。`));let fe=s(`h3`,d);t(d,fe),t(fe,r(`传了 children 之后 value 还会生效吗？`));let $=s(`p`,d);t(d,$),t($,r(`当前版本里，`));let pe=s(`code`,$);t($,pe),t(pe,r(`children`)),t($,r(`会切换到组合式模式，因此`));let me=s(`code`,$);t($,me),t(me,r(`value`)),t($,r(`、`));let he=s(`code`,$);t($,he),t(he,r(`defaultValue`)),t($,r(`这些快捷模式能力不会接管内部布局。需要受控拖动时，优先使用`));let ge=s(`code`,$);t($,ge),t(ge,r(`item1`)),t($,r(`/`));let _e=a($);t($,_e),l(_e,` `);let ve=s(`code`,$);return t($,ve),t(ve,r(`item2`)),t($,r(`。`)),u})}),m,g),m})};export{U as default};