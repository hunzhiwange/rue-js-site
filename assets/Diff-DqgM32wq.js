import{F as e,H as t,I as n,L as r,N as i,P as a,W as o,Y as s,c,j as l,pt as u,rt as d,t as f,u as p,ut as m}from"./vapor-runtime-CKndxKFn.js";import{a as h,n as g}from"./vapor-helpers-vapor-yxlhW-_4.js";import{n as _,t as v}from"./src-CqIWk1va.js";import{n as y}from"./SidebarPlaygroundDesign-CBV-3y9s.js";import{t as b}from"./Code-B1JFTu6m.js";import{t as x}from"./tabs-BbiCzXqJ.js";var S=e=>e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`),C=e=>e?typeof e==`string`?e.trim():Object.entries(e).filter(([,e])=>e!=null).map(([e,t])=>`${e.startsWith(`--`)?e:S(e)}:${String(t)}`).join(`; `):``,w=(...e)=>e.map(e=>C(e)).filter(Boolean).join(`; `),T={display:`grid`,justifyContent:`normal`,alignItems:`stretch`},E=(e,t,n)=>e<t?t:e>n?n:e,D=(e,t)=>{let n=Number(e);return Number.isFinite(n)?n:t},O=(e,t)=>{let n=D(e,0),r=D(t,100);return r<=n?{min:n,max:n+1}:{min:n,max:r}},ee=e=>{let t=D(e,1);return t>0?t:1},k=(e,t,n,r)=>E(D(e,r),t,n),A=(e,t,n)=>(e-t)/(n-t)*100,j=(e,t)=>t?`${e} ${t}`:e,M=e=>v(`div`,{className:`relative h-full [&>*]:h-full [&>*]:w-full [&>*]:max-w-none`,children:e}),te=e=>e==null?!1:Array.isArray(e)?e.length>0:!0,N=(e,t)=>{typeof e==`function`?e(t):e&&typeof e==`object`&&`current`in e&&(e.current=t??void 0)},P=({className:e,style:t,role:n,tabIndex:r,label:i,labelClassName:a,children:o,...s})=>{let c=s.ref;`ref`in s&&delete s.ref;let l=C(t),u=e=>{e&&(l?e.setAttribute(`style`,l):e.removeAttribute(`style`)),N(c,e)};return _(`div`,{...s,ref:u,className:j(`diff-item-1 relative`,e),role:n,tabIndex:r,children:[i==null?null:v(`span`,{className:j(`pointer-events-none absolute left-4 top-4 z-10 rounded-full bg-base-100/80 px-3 py-1 text-xs font-medium text-base-content shadow-sm backdrop-blur`,a),children:i}),o]})},F=({className:e,style:t,role:n,tabIndex:r,label:i,labelClassName:a,children:o,...s})=>{let c=s.ref;`ref`in s&&delete s.ref;let l=C(t),u=e=>{e&&(l?e.setAttribute(`style`,l):e.removeAttribute(`style`)),N(c,e)};return _(`div`,{...s,ref:u,className:j(`diff-item-2 relative`,e),role:n,tabIndex:r,children:[i==null?null:v(`span`,{className:j(`pointer-events-none absolute right-4 top-4 z-10 rounded-full bg-base-100/80 px-3 py-1 text-xs font-medium text-base-content shadow-sm backdrop-blur`,a),children:i}),o]})},I=({className:e,style:t,children:n,...r})=>{let i=r.ref;`ref`in r&&delete r.ref;let a=C(t),o=e=>{e&&(a?e.setAttribute(`style`,a):e.removeAttribute(`style`)),N(i,e)};return v(`div`,{...r,ref:o,className:j(`diff-resizer`,e),children:n})},L=Object.assign(({className:e,style:t,tabIndex:n,value:r,defaultValue:i,min:a,max:o,step:s,disabled:c,item1:l,item2:u,item1Label:f,item2Label:p,resizerContent:m,children:h,onChange:g,...y})=>{let b=y.ref;`ref`in y&&delete y.ref;let x=O(a,o),S=ee(s),E=d(k(i??r??50,x.min,x.max,50)),D=r!==void 0,L=D?k(r,x.min,x.max,E.value):k(E.value,x.min,x.max,50),R=A(L,x.min,x.max),z=!te(h)&&(l!==void 0||u!==void 0),B=j(z?`diff relative isolate overflow-hidden select-none`:`diff`,e),V=w(t,T),H=null,U=null,W=null,G=null,K=null,q=e=>{e&&(V?e.setAttribute(`style`,V):e.removeAttribute(`style`)),N(b,e)},J=e=>{let t=A(e,x.min,x.max);H&&H.setAttribute(`style`,C({clipPath:`inset(0 ${100-t}% 0 0)`})),U&&U.setAttribute(`style`,C({clipPath:`inset(0 0 0 ${t}%)`})),W&&W.setAttribute(`style`,C({left:`${t}%`,width:0,minWidth:0,maxWidth:0,clipPath:`none`,overflow:`visible`,opacity:1,resize:`none`,transform:`translateX(-50%)`})),G&&(G.style.left=`${t}%`),K&&(K.setAttribute(`aria-valuenow`,String(e)),K.value=String(e))},Y=e=>{let t=e.target,n=k(t?.value,x.min,x.max,L);D||(E.value=n),J(n),g&&g(n,e)};if(!z)return v(`figure`,{...y,ref:q,className:B,tabIndex:n,"aria-disabled":c?`true`:void 0,children:h});let ne=y[`aria-label`]??`Diff position`;return _(`figure`,{...y,ref:q,className:B,tabIndex:void 0,"aria-disabled":c?`true`:void 0,children:[v(P,{className:`absolute inset-0 z-10 overflow-hidden`,role:`img`,ref:e=>{H=e,J(L)},children:M(l)}),v(F,{className:`absolute inset-0 overflow-hidden after:hidden`,role:`img`,ref:e=>{U=e,J(L)},children:M(u)}),f==null?null:v(`span`,{className:`pointer-events-none absolute left-4 top-4 z-30 rounded-full bg-base-100/80 px-3 py-1 text-xs font-medium text-base-content shadow-sm backdrop-blur`,children:f}),p==null?null:v(`span`,{className:`pointer-events-none absolute right-4 top-4 z-30 rounded-full bg-base-100/80 px-3 py-1 text-xs font-medium text-base-content shadow-sm backdrop-blur`,children:p}),v(I,{className:`pointer-events-none absolute inset-y-0 z-20`,ref:e=>{W=e,J(L)},style:{left:`${R}%`,width:0,minWidth:0,maxWidth:0,clipPath:`none`,overflow:`visible`,opacity:1,resize:`none`,transform:`translateX(-50%)`},children:v(`span`,{className:`absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-base-100 shadow-sm`})}),m==null?null:v(`span`,{ref:e=>{G=e,J(L)},className:`pointer-events-none absolute top-1/2 z-30 inline-flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-base-300 bg-base-100/85 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-base-content shadow-sm backdrop-blur`,style:{left:`${R}%`},children:m}),v(`input`,{type:`range`,className:`absolute inset-0 z-30 h-full w-full cursor-col-resize opacity-0 disabled:cursor-not-allowed`,ref:e=>{K=e,J(L)},min:String(x.min),max:String(x.max),step:String(S),value:String(L),disabled:c,tabIndex:n,"aria-label":ne,"aria-valuemin":String(x.min),"aria-valuemax":String(x.max),"aria-valuenow":String(L),onInput:Y,onChange:Y})]})},{Item1:P,Item2:F,Resizer:I}),R=({title:t,summary:d,tab:m,preview:h,code:g})=>p(()=>{let _=e(`div`);o(_,`component-preview not-prose text-base-content my-6 lg:my-12`);let v=e(`div`);l(_,v),o(v,`flex flex-wrap items-start justify-between gap-3`);let y=e(`div`);l(v,y);let S=e(`h2`);l(y,S),o(S,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(S,n(`# `));let C=r(S);l(S,C),u(()=>{s(C,t)});let w=i(`rue:slot:anchor`);l(y,w),u(()=>{c(d?p(()=>{let t=a(),n=e(`p`);l(t,n),o(n,`m-0 text-sm opacity-70`);let i=r(n);return l(n,i),u(()=>{s(i,d)}),t}):``,y,w)});let T=i(`rue:component:anchor`);l(_,T),u(()=>{c(f(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:m.value,onChange:e=>m.value=e,className:`mb-3 mt-4`}),_,T)});let E=i(`rue:slot:anchor`);return l(_,E),u(()=>{c(m.value===`preview`?h():p(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),u(()=>{c(f(b,{className:`mt-2`,lang:`tsx`,code:g}),e,t)}),e}),_,E)}),_}),z=({rows:r})=>p(()=>{let s=e(`div`);o(s,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let d=e(`table`);l(s,d),o(d,`table table-zebra`);let f=e(`thead`);l(d,f);let m=e(`tr`);l(f,m);let h=e(`th`);l(m,h),l(h,n(`属性`));let _=e(`th`);l(m,_),l(_,n(`说明`));let v=e(`th`);l(m,v),l(v,n(`类型`));let y=e(`th`);l(m,y),l(y,n(`默认值`));let b=e(`tbody`);l(d,b);let x=i(`rue:list:start`),S=i(`rue:list:end`);l(b,x),l(b,S);let C=new Map;return u(()=>{C=g({items:r||[],getKey:(e,t)=>e.prop,elements:C,parent:b,before:S,singleRoot:!0,start:x,renderItem:(n,r,o,s,d)=>{c(p(()=>{let r=a(),o=e(`tr`);l(r,o),u(()=>{t(o,`key`,String(n.prop))});let s=e(`td`);l(o,s);let d=e(`code`);l(s,d);let f=i(`rue:slot:anchor`);l(d,f),u(()=>{let e=n.prop;c(e,d,f)});let p=e(`td`);l(o,p);let m=i(`rue:slot:anchor`);l(p,m),u(()=>{let e=n.description;c(e,p,m)});let h=e(`td`);l(o,h);let g=e(`code`);l(h,g);let _=i(`rue:slot:anchor`);l(g,_),u(()=>{let e=n.type;c(e,g,_)});let v=e(`td`);l(o,v);let y=e(`code`);l(v,y);let b=i(`rue:slot:anchor`);return l(y,b),u(()=>{let e=n.defaultValue;c(e,y,b)}),r}),r,o)}})}),s}),B=[{prop:`item1`,description:`快捷模式下的左侧内容`,type:`any`,defaultValue:`-`},{prop:`item2`,description:`快捷模式下的右侧内容`,type:`any`,defaultValue:`-`},{prop:`item1Label`,description:`左侧角标文案或节点`,type:`any`,defaultValue:`-`},{prop:`item2Label`,description:`右侧角标文案或节点`,type:`any`,defaultValue:`-`},{prop:`resizerContent`,description:`手柄中央的自定义内容`,type:`any`,defaultValue:`-`},{prop:`value`,description:`受控位置值，仅快捷模式生效`,type:`number`,defaultValue:`-`},{prop:`defaultValue`,description:`非受控初始位置，仅快捷模式生效`,type:`number`,defaultValue:`50`},{prop:`min`,description:`最小值，仅快捷模式生效`,type:`number`,defaultValue:`0`},{prop:`max`,description:`最大值，仅快捷模式生效`,type:`number`,defaultValue:`100`},{prop:`step`,description:`步进值，仅快捷模式生效`,type:`number`,defaultValue:`1`},{prop:`onChange`,description:`拖动或键盘调整时回调当前值`,type:`(value: number, event: Event) => void`,defaultValue:`-`},{prop:`disabled`,description:`禁用快捷模式拖动能力`,type:`boolean`,defaultValue:`false`},{prop:`children`,description:`传入子节点后优先使用旧的组合式结构`,type:`any`,defaultValue:`-`}],V=[{prop:`Diff.Item1`,description:`左侧内容区，兼容 role、tabIndex、label 和 style`,type:`component`,defaultValue:`-`},{prop:`Diff.Item2`,description:`右侧内容区，兼容 role、tabIndex、label 和 style`,type:`component`,defaultValue:`-`},{prop:`Diff.Resizer`,description:`分隔条，可继续自定义 className、style 和 children`,type:`component`,defaultValue:`-`},{prop:`tabIndex`,description:`旧结构模式下继续透传到根节点`,type:`number`,defaultValue:`-`}],H=()=>{let{tabEnhanced:g,tabControlled:b,tabReadonly:x,tabLegacyImage:S,tabLegacyText:C,controlledValue:w}=h(`useSetup:0:0`,()=>m(()=>({tabEnhanced:h(`ref:1:0`,()=>d(`preview`)),tabControlled:h(`ref:1:1`,()=>d(`preview`)),tabReadonly:h(`ref:1:2`,()=>d(`preview`)),tabLegacyImage:h(`ref:1:3`,()=>d(`preview`)),tabLegacyText:h(`ref:1:4`,()=>d(`preview`)),controlledValue:h(`ref:1:5`,()=>d(38))})));return p(()=>{let d=a(),m=i(`rue:component:anchor`);return l(d,m),c(f(y,{children:p(()=>{let d=a(),p=e(`div`);l(d,p),o(p,`max-w-none prose prose-sm md:prose-base`);let m=e(`h1`);l(p,m),l(m,n(`Diff 对比`));let h=e(`p`);l(p,h),o(h,`text-sm mt-3 mb-3`),l(h,n(`Diff 现在除了保留原来的组合式结构，还补上一套更顺手的快捷 API。可以直接传内容和位置值，也可以继续用`));let y=e(`code`);l(h,y),l(y,n(`Diff.Item1`)),l(h,n(`、`));let T=e(`code`);l(h,T),l(T,n(`Diff.Item2`)),l(h,n(`、`));let E=e(`code`);l(h,E),l(E,n(`Diff.Resizer`)),l(h,n(`自己拼装。`));let D=e(`div`);l(p,D),o(D,`text-sm flex flex-wrap gap-4`);let O=e(`a`);l(D,O),t(O,`href`,`https://daisyui.com/components/diff/`),t(O,`target`,`_blank`),t(O,`rel`,`noreferrer`),l(O,n(`查看 Diff 静态样式`));let ee=e(`h2`);l(p,ee),l(ee,n(`何时使用`));let k=e(`ul`);l(p,k);let A=e(`li`);l(k,A),l(A,n(`需要比较两个版本、两套视觉稿或两段内容，并让用户自己拖动查看差异。`));let j=e(`li`);l(k,j),l(j,n(`想要一个更轻的 API，直接传左右内容和默认位置，而不是每次都手写三段结构。`));let M=i(`rue:component:anchor`);l(p,M),u(()=>{c(f(R,{title:`增强写法`,summary:`直接用 item1、item2、item1Label、item2Label 和 resizerContent 就能得到可拖动的对比区域。`,tab:g,preview:()=>v(`div`,{className:`card bg-base-100 shadow-sm`,children:_(`div`,{className:`card-body gap-4`,children:[v(L,{className:`rounded-box aspect-[16/9] border border-base-300`,defaultValue:44,item1Label:`V1`,item2Label:`V2`,resizerContent:`new`,"aria-label":`首页头图改版对比`,item1:v(`div`,{className:`h-full w-full bg-[#112031] p-6 text-white`,children:_(`div`,{className:`flex h-full flex-col justify-between`,children:[_(`div`,{className:`space-y-3`,children:[v(`div`,{className:`text-xs uppercase tracking-[0.3em] text-cyan-200/80`,children:`Rue Cloud`}),v(`div`,{className:`max-w-[14rem] text-3xl font-semibold leading-tight`,children:`Ship design changes with one source of truth`}),v(`div`,{className:`max-w-[16rem] text-sm text-slate-300`,children:`聚焦深色界面和强对比 CTA，强调协作与发布节奏。`})]}),_(`div`,{className:`flex gap-2`,children:[v(`span`,{className:`rounded-full bg-cyan-400 px-3 py-1 text-xs font-semibold text-slate-950`,children:`Publish faster`}),v(`span`,{className:`rounded-full border border-white/20 px-3 py-1 text-xs text-white/80`,children:`Team sync`})]})]})}),item2:v(`div`,{className:`h-full w-full bg-base-200 p-6 text-base-content`,children:_(`div`,{className:`flex h-full flex-col justify-between rounded-box border border-base-300 bg-base-100 p-5 shadow-sm`,children:[_(`div`,{className:`space-y-3`,children:[v(`div`,{className:`text-xs uppercase tracking-[0.3em] opacity-60`,children:`Rue Cloud`}),v(`div`,{className:`max-w-[14rem] text-3xl font-semibold leading-tight`,children:`Design review feels calmer and more editorial`}),v(`div`,{className:`max-w-[16rem] text-sm opacity-70`,children:`同一套信息结构，但把密度降下来，强调留白、节奏和可读性。`})]}),_(`div`,{className:`grid grid-cols-2 gap-2 text-xs`,children:[v(`div`,{className:`rounded-box bg-base-200 px-3 py-2`,children:`Clear sections`}),v(`div`,{className:`rounded-box bg-base-200 px-3 py-2`,children:`Softer contrast`}),v(`div`,{className:`rounded-box bg-base-200 px-3 py-2`,children:`Readable text`}),v(`div`,{className:`rounded-box bg-base-200 px-3 py-2`,children:`Stable hierarchy`})]})]})})}),v(`div`,{className:`text-sm opacity-70`,children:`快捷模式下内部会自动生成拖动层，键盘聚焦后也能直接调整位置。`})]})}),code:`<Diff
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
/>`}),p,M)});let te=i(`rue:component:anchor`);l(p,te),u(()=>{c(f(R,{title:`受控位置`,summary:`value 和 onChange 可以把 Diff 变成受控组件，适合和外部滑杆、表单或讲解步骤联动。`,tab:b,preview:()=>v(`div`,{className:`card bg-base-100 shadow-sm`,children:_(`div`,{className:`card-body gap-4`,children:[_(`div`,{className:`flex flex-wrap items-center gap-3 text-sm`,children:[_(`span`,{className:`badge badge-outline`,children:[`当前值 `,w.value]}),v(`button`,{className:`btn btn-xs`,onClick:()=>w.value=20,children:`20`}),v(`button`,{className:`btn btn-xs`,onClick:()=>w.value=50,children:`50`}),v(`button`,{className:`btn btn-xs`,onClick:()=>w.value=80,children:`80`})]}),v(`input`,{type:`range`,className:`range range-primary`,min:`0`,max:`100`,value:String(w.value),onInput:e=>{let t=e.target;w.value=Number(t.value)}}),v(L,{className:`rounded-box aspect-[16/9] border border-base-300`,value:w.value,onChange:e=>{w.value=e},item1Label:`Before`,item2Label:`After`,resizerContent:`${w.value}%`,"aria-label":`品牌色调整对比`,item1:v(`div`,{className:`grid h-full w-full place-content-center bg-slate-950 text-center text-white`,children:_(`div`,{className:`space-y-2`,children:[v(`div`,{className:`text-xs uppercase tracking-[0.35em] text-fuchsia-200/70`,children:`Old palette`}),v(`div`,{className:`text-5xl font-black`,children:`RUE`}),v(`div`,{className:`mx-auto h-2 w-28 rounded-full bg-fuchsia-500`})]})}),item2:v(`div`,{className:`grid h-full w-full place-content-center bg-neutral-100 text-center text-slate-900`,children:_(`div`,{className:`space-y-2`,children:[v(`div`,{className:`text-xs uppercase tracking-[0.35em] text-cyan-700/60`,children:`New palette`}),v(`div`,{className:`text-5xl font-black`,children:`RUE`}),v(`div`,{className:`mx-auto h-2 w-28 rounded-full bg-cyan-500`})]})})})]})}),code:`const value = ref(38)

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
/>`}),p,te)});let N=i(`rue:component:anchor`);l(p,N),u(()=>{c(f(R,{title:`只读模式`,summary:`disabled 会保留当前可视结果，但不再允许拖动，适合说明文档、快照回顾或固定审稿视角。`,tab:x,preview:()=>v(`div`,{className:`card bg-base-100 shadow-sm`,children:_(`div`,{className:`card-body gap-4`,children:[v(L,{className:`rounded-box aspect-[16/9] border border-base-300`,value:62,disabled:!0,item1Label:`Dense`,item2Label:`Comfort`,resizerContent:`lock`,"aria-label":`信息密度对比`,item1:v(`div`,{className:`h-full w-full bg-base-300 p-4 text-xs text-base-content`,children:v(`div`,{className:`grid h-full grid-cols-3 gap-2`,children:Array.from({length:12}).map((e,t)=>_(`div`,{className:`rounded-box border border-base-100 bg-base-100 p-2`,children:[v(`div`,{className:`h-2 w-8 rounded-full bg-primary/70`}),_(`div`,{className:`mt-2 space-y-1`,children:[v(`div`,{className:`h-1.5 rounded-full bg-base-300`}),v(`div`,{className:`h-1.5 rounded-full bg-base-300`}),v(`div`,{className:`h-1.5 w-3/4 rounded-full bg-base-300`})]})]},t))})}),item2:v(`div`,{className:`h-full w-full bg-base-200 p-6 text-base-content`,children:_(`div`,{className:`grid h-full gap-4 md:grid-cols-[1.1fr_0.9fr]`,children:[_(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-5`,children:[v(`div`,{className:`h-3 w-24 rounded-full bg-primary/70`}),_(`div`,{className:`mt-4 space-y-3`,children:[v(`div`,{className:`h-3 rounded-full bg-base-200`}),v(`div`,{className:`h-3 rounded-full bg-base-200`}),v(`div`,{className:`h-3 w-4/5 rounded-full bg-base-200`})]})]}),_(`div`,{className:`grid gap-3`,children:[v(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`}),v(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`}),v(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`})]})]})})}),v(`div`,{className:`text-sm opacity-70`,children:`固定为 62%，用来展示最终审稿视角。`})]})}),code:`<Diff
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
/>`}),p,N)});let P=i(`rue:component:anchor`);l(p,P),u(()=>{c(f(R,{title:`图片对比`,summary:`组合式写法示例。`,tab:S,preview:()=>_(L,{className:`rounded-field aspect-16/9`,tabIndex:0,children:[v(L.Item1,{role:`img`,tabIndex:0,children:v(`img`,{alt:`daisy`,src:`https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp`})}),v(L.Item2,{role:`img`,children:v(`img`,{alt:`daisy`,src:`https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.webp`})}),v(L.Resizer,{})]}),code:`<Diff className="aspect-16/9" tabIndex={0}>
  <Diff.Item1 role="img" tabIndex={0}>
    <img alt="daisy" src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp" />
  </Diff.Item1>
  <Diff.Item2 role="img">
    <img alt="daisy" src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.webp" />
  </Diff.Item2>
  <Diff.Resizer />
</Diff>`}),p,P)});let F=i(`rue:component:anchor`);l(p,F),u(()=>{c(f(R,{title:`文本对比`,summary:`增强 API 不是替代，而是补齐。`,tab:C,preview:()=>_(L,{className:`rounded-field aspect-16/9`,tabIndex:0,children:[v(L.Item1,{role:`img`,tabIndex:0,children:v(`div`,{className:`bg-primary text-primary-content text-4xl lg:text-9xl font-black grid place-content-center`,children:`DAISY`})}),v(L.Item2,{role:`img`,children:v(`div`,{className:`bg-base-200 text-4xl lg:text-9xl font-black grid place-content-center`,children:`DAISY`})}),v(L.Resizer,{})]}),code:`<Diff className="aspect-16/9" tabIndex={0}>
  <Diff.Item1 role="img" tabIndex={0}>
    <div className="bg-primary text-primary-content grid place-content-center text-9xl font-black">
      DAISY
    </div>
  </Diff.Item1>
  <Diff.Item2 role="img">
    <div className="bg-base-200 grid place-content-center text-9xl font-black">DAISY</div>
  </Diff.Item2>
  <Diff.Resizer />
</Diff>`}),p,F)});let I=e(`h2`);l(p,I),t(I,`id`,`diff-api`),l(I,n(`API`));let H=e(`p`);l(p,H),l(H,n(`Diff 现在同时支持快捷模式和组合式模式，下面按根组件和子组件拆开列出。`));let U=i(`rue:component:anchor`);l(p,U),u(()=>{c(f(z,{rows:B}),p,U)});let W=e(`div`);l(p,W),o(W,`not-prose mt-6`);let G=i(`rue:component:anchor`);l(p,G),u(()=>{c(f(z,{rows:V}),p,G)});let K=e(`div`);l(p,K),o(K,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4 text-sm`);let q=e(`div`);l(K,q),o(q,`font-semibold`),l(q,n(`模式选择建议`));let J=e(`div`);l(K,J),o(J,`mt-2 grid gap-2 md:grid-cols-2`);let Y=e(`div`);l(J,Y);let ne=e(`code`);l(Y,ne),l(ne,n(`item1 / item2`)),l(Y,n(`适合快速搭 demo、做受控联动、补标签和默认手柄内容。`));let X=e(`div`);l(J,X);let re=e(`code`);l(X,re),l(re,n(`children + Diff.Item1 / Item2 / Resizer`));let ie=r(X);l(X,ie),s(ie,` `),l(X,n(`适合保留旧结构，或自己完全掌控内部布局。`));let ae=e(`h2`);l(p,ae),l(ae,n(`FAQ`));let oe=e(`h3`);l(p,oe),l(oe,n(`快捷模式和组合式模式怎么选？`));let Z=e(`p`);l(p,Z),l(Z,n(`如果你只是想比较两个内容块，优先用`));let se=e(`code`);l(Z,se),l(se,n(`item1`)),l(Z,n(`和`));let ce=e(`code`);l(Z,ce),l(ce,n(`item2`)),l(Z,n(`。如果你已经有现成结构， 或者需要完全接管内部节点顺序，就继续用旧的组合式写法。`));let le=e(`h3`);l(p,le),l(le,n(`value 和 defaultValue 有什么区别？`));let Q=e(`p`);l(p,Q);let ue=e(`code`);l(Q,ue),l(ue,n(`value`)),l(Q,n(`是受控值，外部状态说了算；`));let de=e(`code`);l(Q,de),l(de,n(`defaultValue`));let fe=r(Q);l(Q,fe),s(fe,` `),l(Q,n(`只决定初始位置，之后由组件内部维护。`));let pe=e(`h3`);l(p,pe),l(pe,n(`传了 children 之后 value 还会生效吗？`));let $=e(`p`);l(p,$),l($,n(`当前版本里，`));let me=e(`code`);l($,me),l(me,n(`children`)),l($,n(`会切换到组合式模式，因此`));let he=e(`code`);l($,he),l(he,n(`value`)),l($,n(`、`));let ge=e(`code`);l($,ge),l(ge,n(`defaultValue`)),l($,n(`这些快捷模式能力不会接管内部布局。需要受控拖动时，优先使用`));let _e=e(`code`);l($,_e),l(_e,n(`item1`)),l($,n(`/`));let ve=r($);l($,ve),s(ve,` `);let ye=e(`code`);return l($,ye),l(ye,n(`item2`)),l($,n(`。`)),d})}),d,m),d})};export{H as default};