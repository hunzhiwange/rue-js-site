import{Ht as e,Q as t,Vt as n,Xt as r,Z as i,an as a,at as o,bt as s,dt as c,it as l,kt as u,l as d,n as f,nt as p,o as m,on as h,pt as g,rt as _,t as v,tn as y,tt as b}from"./vapor-runtime-x7F5M-49.js";import{a as x,n as ee,t as te}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as S}from"./Code-BoXKy3gJ.js";import{r as ne}from"./SidebarPlaygroundExample-BmbQ-Y7_.js";var C=`import { type FC, nextTick, ref, useRef, watchPostEffect } from '@rue-js/rue';

const timingNotes = [
  '修改 count.value 后，响应式状态会立刻变化，DOM patch 会进入同一轮 flush。',
  '在事件函数里同步读取 DOM，可能拿到的是本轮 patch 前的旧文本。',
  'watchPostEffect 会在 DOM 更新完成后运行，适合读取布局、文本或同步第三方 DOM 插件。',
  'await nextTick() 是命令式等待一次 flush；watchPostEffect 会自动追踪依赖并重复执行。',
] as const;

const WatchPostEffectDemo: FC = () => {
  const count = ref(0);
  const syncDomText = ref('尚未读取');
  const postDomText = ref('等待首次 flush');
  const tickDomText = ref('尚未读取');
  const countRef = useRef<HTMLSpanElement>();

  watchPostEffect(() => {
    count.value;
    postDomText.value = countRef.current?.textContent ?? '(missing)';
  });

  const add = async () => {
    count.value += 1;
    syncDomText.value = countRef.current?.textContent ?? '(missing)';
    tickDomText.value = '等待 nextTick...';
    await nextTick();
    tickDomText.value = countRef.current?.textContent ?? '(missing)';
  };

  return (
    <div className="grid gap-4">
      <div className="rounded-box border border-info/30 bg-info/10 p-4 text-sm leading-6">
        <div className="font-medium text-info">DOM 读取时机说明</div>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          {timingNotes.map(note => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </div>
      <div>状态值：{count.value}</div>
      <div>
        DOM 文本：<span ref={countRef}>{count.value}</span>
      </div>
      <button onClick={() => void add()}>增加并读取 DOM</button>
      <div>同步读取：{syncDomText.value}</div>
      <div>watchPostEffect：{postDomText.value}</div>
      <div>nextTick 后：{tickDomText.value}</div>
    </div>
  );
};

export default WatchPostEffectDemo;`,re=[`修改 count.value 后，响应式状态会立刻变化，DOM patch 会进入同一轮 flush。`,`在事件函数里同步读取 DOM，可能拿到的是本轮 patch 前的旧文本。`,`watchPostEffect 会在 DOM 更新完成后运行，适合读取布局、文本或同步第三方 DOM 插件。`,`await nextTick() 是命令式等待一次 flush；watchPostEffect 会自动追踪依赖并重复执行。`],w=()=>{let v=x(`useSetup:0:0`,()=>h(()=>{let t=x(`ref:1:0`,()=>r(0)),n=x(`ref:1:1`,()=>r(`尚未读取`)),i=x(`ref:1:2`,()=>r(`等待首次 flush`)),o=x(`ref:1:3`,()=>r(`尚未读取`)),s=x(`ref:1:4`,()=>r(`点击按钮后观察三种读取时机。`)),c=x(`ref:1:5`,()=>r([])),l=x(`useRef:1:6`,()=>a()),u=0,d=[];return e(()=>{let e=t.value,n=l.current?.textContent??`(missing)`;u+=1,i.value=n,d.unshift(`post #${u}: state=${e}, DOM=${n}`),c.value=d.slice(0,5)}),{count:t,syncDomText:n,postDomText:i,tickDomText:o,actionNote:s,logLines:c,countRef:l,history:d,postRun:u}})),{count:y,syncDomText:S,postDomText:ne,tickDomText:C,actionNote:w,logLines:ie,countRef:T,history:ae}=v,{postRun:oe}=v,se=async e=>{for(let t=0;t<e;t+=1)y.value+=1;S.value=T.current?.textContent??`(missing)`,C.value=`等待 nextTick...`,w.value=e===1?`状态已同步变成 ${y.value}，但同步读取 DOM 仍可能是旧值。`:`连续更新 ${e} 次会合并到同一轮 post effect。`,await u(),C.value=T.current?.textContent??`(missing)`},ce=async()=>{y.value=0,S.value=`尚未读取`,C.value=`等待 nextTick...`,w.value=`已重置，等待 DOM flush 完成。`,await u(),C.value=T.current?.textContent??`(missing)`};return d(e=>{let r=_(`div`,e);g(r,`card bg-base-100 shadow`);let a=_(`div`,r);t(r,a),g(a,`card-body gap-5`);let u=_(`p`,a);t(a,u),g(u,`text-base-content/70 leading-7`),t(u,l("`watchPostEffect()` 适合在响应式更新已经写入 DOM 之后执行副作用，比如测量元素尺寸、读取最新文本、同步第三方 DOM 插件。"));let h=_(`div`,a);t(a,h),g(h,`rounded-box border border-info/30 bg-info/10 p-4 text-sm leading-6 text-base-content/80`);let v=_(`div`,h);t(h,v),g(v,`font-medium text-info`),t(v,l(`DOM 读取时机说明`));let x=_(`ul`,h);t(h,x),g(x,`mt-2 list-disc space-y-1 pl-5`);let ae=b(`rue:list:start`),oe=b(`rue:list:end`);t(x,ae),t(x,oe);let le=new Map;n(()=>{le=ee({items:re||[],getKey:(e,t)=>e,elements:le,parent:x,before:oe,singleRoot:!0,trackIndex:!1,start:ae,renderItem:(e,r,i,a,l)=>{m(d(()=>{let r=p(),i=_(`li`,r);t(r,i),n(()=>{c(i,`key`,String(e))});let a=o(i);return t(i,a),n(()=>{s(a,e)}),r}),r,i)}})});let E=_(`div`,a);t(a,E),g(E,`rounded-box border border-base-300 bg-base-200/40 p-5`);let D=_(`div`,E);t(E,D),g(D,`text-sm uppercase tracking-[0.24em] text-base-content/50`),t(D,l(`响应式状态`));let O=_(`div`,E);t(E,O),g(O,`mt-3 flex flex-wrap items-end gap-4`);let k=_(`div`,O);t(O,k);let A=_(`div`,k);t(k,A),g(A,`text-sm text-base-content/60`),t(A,l(`count.value`));let j=_(`div`,k);t(k,j),g(j,`text-5xl font-semibold text-primary`);let ue=o(j);t(j,ue),n(()=>{s(ue,y.value)});let M=_(`div`,O);t(O,M),g(M,`min-w-48 rounded-box bg-base-100 p-4`);let N=_(`div`,M);t(M,N),g(N,`text-sm text-base-content/60`),t(N,l(`真实 DOM 文本`));let P=_(`div`,M);t(M,P),g(P,`mt-1 font-mono text-3xl`);let F=_(`span`,P);t(P,F);let de=te(F,()=>T);f(()=>{de()});let fe=o(F);t(F,fe),n(()=>{s(fe,y.value)});let I=_(`div`,a);t(a,I),g(I,`flex flex-wrap gap-3`);let L=_(`button`,I);t(I,L),g(L,`btn btn-primary`),i(L,`click`,()=>void se(1)),t(L,l(`+1 并读取 DOM`));let R=_(`button`,I);t(I,R),g(R,`btn btn-secondary`),i(R,`click`,()=>void se(3)),t(R,l(`连续 +3`));let z=_(`button`,I);t(I,z),g(z,`btn btn-ghost`),i(z,`click`,()=>void ce()),t(z,l(`重置`));let B=_(`div`,a);t(a,B),g(B,`rounded-box border border-dashed border-base-300 bg-base-100 p-4 text-sm text-base-content/70`);let pe=o(B);t(B,pe),n(()=>{s(pe,w.value)});let V=_(`div`,a);t(a,V),g(V,`grid gap-4 md:grid-cols-3`);let H=_(`div`,V);t(V,H),g(H,`rounded-box border border-base-300 bg-base-100 p-4`);let U=_(`div`,H);t(H,U),g(U,`text-sm text-base-content/60`),t(U,l(`同步读取 DOM`));let W=_(`div`,H);t(H,W),g(W,`mt-2 font-mono text-2xl`);let me=o(W);t(W,me),n(()=>{s(me,S.value)});let G=_(`div`,V);t(V,G),g(G,`rounded-box border border-base-300 bg-base-100 p-4`);let K=_(`div`,G);t(G,K),g(K,`text-sm text-base-content/60`),t(K,l(`watchPostEffect 读取`));let q=_(`div`,G);t(G,q),g(q,`mt-2 font-mono text-2xl text-success`);let he=o(q);t(q,he),n(()=>{s(he,ne.value)});let J=_(`div`,V);t(V,J),g(J,`rounded-box border border-base-300 bg-base-100 p-4`);let Y=_(`div`,J);t(J,Y),g(Y,`text-sm text-base-content/60`),t(Y,l(`await nextTick() 后`));let X=_(`div`,J);t(J,X),g(X,`mt-2 font-mono text-2xl text-info`);let ge=o(X);t(X,ge),n(()=>{s(ge,C.value)});let Z=_(`div`,a);t(a,Z),g(Z,`rounded-box border border-base-300 bg-base-100 p-4`);let Q=_(`div`,Z);t(Z,Q),g(Q,`text-sm font-medium text-base-content/70`),t(Q,l(`最近的 post effect 记录`));let $=_(`ul`,Z);t(Z,$),g($,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let _e=b(`rue:list:start`),ve=b(`rue:list:end`);t($,_e),t($,ve);let ye=new Map;return n(()=>{ye=ee({items:ie.value||[],getKey:(e,t)=>e,elements:ye,parent:$,before:ve,singleRoot:!0,trackIndex:!1,start:_e,renderItem:(e,r,i,a,l)=>{m(d(()=>{let r=p(),i=_(`li`,r);t(r,i),n(()=>{c(i,`key`,String(e))});let a=o(i);return t(i,a),n(()=>{s(a,e)}),r}),r,i)}})}),r})},ie=()=>{let{activeTab:e}=x(`useSetup:0:0:dup1`,()=>h(()=>({activeTab:x(`ref:1:7`,()=>r(`preview`))})));return d(r=>{let a=p(),o=b(`rue:component:anchor`);return t(a,o),m(v(ne,{children:d(()=>{let r=p(),a=_(`h1`,r);t(r,a),g(a,`text-5xl font-semibold mb-4 md:mb-4`),t(a,l(`watchPostEffect DOM 读取时机`));let o=_(`div`,r);t(r,o),c(o,`role`,`tablist`),g(o,`tabs tabs-box`);let s=_(`button`,o);t(o,s),c(s,`role`,`tab`),n(()=>{g(s,`tab ${e.value===`preview`?`tab-active`:``}`)}),i(s,`click`,()=>{e.value=`preview`}),t(s,l(`效果`));let u=_(`button`,o);t(o,u),c(u,`role`,`tab`),n(()=>{g(u,`tab ${e.value===`code`?`tab-active`:``}`)}),i(u,`click`,()=>{e.value=`code`}),t(u,l(`代码`));let f=_(`div`,r);t(r,f),g(f,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let h=b(`rue:slot:anchor`);t(f,h),n(()=>{let r=e.value===`code`?d(()=>{let e=p(),r=_(`div`,e);t(e,r),g(r,`card bg-base-100 shadow overflow-auto`);let i=_(`div`,r);t(r,i),g(i,`card-body p-0`);let a=b(`rue:component:anchor`);return t(i,a),n(()=>{let e=v(S,{className:`h-full`,lang:`tsx`,code:C});y(()=>m(e,i,a))}),e}):``;y(()=>m(r,f,h))}),t(f,l(` `));let x=b(`rue:slot:anchor`);return t(f,x),n(()=>{let n=e.value===`preview`?d(()=>{let e=p(),n=b(`rue:component:anchor`);return t(e,n),m(v(w,{}),e,n),e}):``;y(()=>m(n,f,x))}),r})}),a,o),a})};export{ie as default};