import{$ as e,Ht as t,J as n,Kt as r,Lt as i,Q as a,X as o,Xt as s,Z as c,at as l,bt as u,et as d,jt as f,l as p,pt as m,q as h,qt as g,r as _,s as v,st as y,t as b}from"./vapor-runtime-iQZthBPQ.js";import{a as x,n as ee,t as te}from"./vapor-helpers-vapor-BjKHCvOa.js";import{t as S}from"./Code-CZqShVUj.js";import{r as ne}from"./SidebarPlaygroundExample-5H7RL-T7.js";var C=`import { type FC, nextTick, ref, useRef, watchPostEffect } from '@rue-js/rue';

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

export default WatchPostEffectDemo;`,re=[`修改 count.value 后，响应式状态会立刻变化，DOM patch 会进入同一轮 flush。`,`在事件函数里同步读取 DOM，可能拿到的是本轮 patch 前的旧文本。`,`watchPostEffect 会在 DOM 更新完成后运行，适合读取布局、文本或同步第三方 DOM 插件。`,`await nextTick() 是命令式等待一次 flush；watchPostEffect 会自动追踪依赖并重复执行。`],w=()=>{let t=x(`useSetup:0:0`,()=>g(()=>{let e=x(`ref:1:0`,()=>i(0)),t=x(`ref:1:1`,()=>i(`尚未读取`)),n=x(`ref:1:2`,()=>i(`等待首次 flush`)),a=x(`ref:1:3`,()=>i(`尚未读取`)),o=x(`ref:1:4`,()=>i(`点击按钮后观察三种读取时机。`)),s=x(`ref:1:5`,()=>i([])),c=x(`useRef:1:6`,()=>r()),l=0,u=[];return f(()=>{let t=e.value,r=c.current?.textContent??`(missing)`;l+=1,n.value=r,u.unshift(`post #${l}: state=${t}, DOM=${r}`),s.value=u.slice(0,5)}),{count:e,syncDomText:t,postDomText:n,tickDomText:a,actionNote:o,logLines:s,countRef:c,history:u,postRun:l}})),{count:b,syncDomText:S,postDomText:ne,tickDomText:C,actionNote:w,logLines:ie,countRef:T,history:ae}=t,{postRun:oe}=t,se=async e=>{for(let t=0;t<e;t+=1)b.value+=1;S.value=T.current?.textContent??`(missing)`,C.value=`等待 nextTick...`,w.value=e===1?`状态已同步变成 ${b.value}，但同步读取 DOM 仍可能是旧值。`:`连续更新 ${e} 次会合并到同一轮 post effect。`,await u(),C.value=T.current?.textContent??`(missing)`},ce=async()=>{b.value=0,S.value=`尚未读取`,C.value=`等待 nextTick...`,w.value=`已重置，等待 DOM flush 完成。`,await u(),C.value=T.current?.textContent??`(missing)`};return p(t=>{let r=a(`div`,t);y(r,`card bg-base-100 shadow`);let i=a(`div`,r);n(r,i),y(i,`card-body gap-5`);let u=a(`p`,i);n(i,u),y(u,`text-base-content/70 leading-7`),n(u,e("`watchPostEffect()` 适合在响应式更新已经写入 DOM 之后执行副作用，比如测量元素尺寸、读取最新文本、同步第三方 DOM 插件。"));let f=a(`div`,i);n(i,f),y(f,`rounded-box border border-info/30 bg-info/10 p-4 text-sm leading-6 text-base-content/80`);let g=a(`div`,f);n(f,g),y(g,`font-medium text-info`),n(g,e(`DOM 读取时机说明`));let x=a(`ul`,f);n(f,x),y(x,`mt-2 list-disc space-y-1 pl-5`);let ae=o(`rue:list:start`),oe=o(`rue:list:end`);n(x,ae),n(x,oe);let le=new Map;s(()=>{le=ee({items:re||[],getKey:(e,t)=>e,elements:le,parent:x,before:oe,singleRoot:!0,trackIndex:!1,start:ae,renderItem:(e,t,r,i,o)=>{v(p(()=>{let t=c(),r=a(`li`,t);n(t,r),s(()=>{l(r,`key`,String(e))});let i=d(r);return n(r,i),s(()=>{m(i,e)}),t}),t,r)}})});let E=a(`div`,i);n(i,E),y(E,`rounded-box border border-base-300 bg-base-200/40 p-5`);let D=a(`div`,E);n(E,D),y(D,`text-sm uppercase tracking-[0.24em] text-base-content/50`),n(D,e(`响应式状态`));let O=a(`div`,E);n(E,O),y(O,`mt-3 flex flex-wrap items-end gap-4`);let k=a(`div`,O);n(O,k);let A=a(`div`,k);n(k,A),y(A,`text-sm text-base-content/60`),n(A,e(`count.value`));let j=a(`div`,k);n(k,j),y(j,`text-5xl font-semibold text-primary`);let ue=d(j);n(j,ue),s(()=>{m(ue,b.value)});let M=a(`div`,O);n(O,M),y(M,`min-w-48 rounded-box bg-base-100 p-4`);let N=a(`div`,M);n(M,N),y(N,`text-sm text-base-content/60`),n(N,e(`真实 DOM 文本`));let P=a(`div`,M);n(M,P),y(P,`mt-1 font-mono text-3xl`);let F=a(`span`,P);n(P,F);let de=te(F,()=>T);_(()=>{de()});let fe=d(F);n(F,fe),s(()=>{m(fe,b.value)});let I=a(`div`,i);n(i,I),y(I,`flex flex-wrap gap-3`);let L=a(`button`,I);n(I,L),y(L,`btn btn-primary`),h(L,`click`,()=>void se(1)),n(L,e(`+1 并读取 DOM`));let R=a(`button`,I);n(I,R),y(R,`btn btn-secondary`),h(R,`click`,()=>void se(3)),n(R,e(`连续 +3`));let z=a(`button`,I);n(I,z),y(z,`btn btn-ghost`),h(z,`click`,()=>void ce()),n(z,e(`重置`));let B=a(`div`,i);n(i,B),y(B,`rounded-box border border-dashed border-base-300 bg-base-100 p-4 text-sm text-base-content/70`);let pe=d(B);n(B,pe),s(()=>{m(pe,w.value)});let V=a(`div`,i);n(i,V),y(V,`grid gap-4 md:grid-cols-3`);let H=a(`div`,V);n(V,H),y(H,`rounded-box border border-base-300 bg-base-100 p-4`);let U=a(`div`,H);n(H,U),y(U,`text-sm text-base-content/60`),n(U,e(`同步读取 DOM`));let W=a(`div`,H);n(H,W),y(W,`mt-2 font-mono text-2xl`);let me=d(W);n(W,me),s(()=>{m(me,S.value)});let G=a(`div`,V);n(V,G),y(G,`rounded-box border border-base-300 bg-base-100 p-4`);let K=a(`div`,G);n(G,K),y(K,`text-sm text-base-content/60`),n(K,e(`watchPostEffect 读取`));let q=a(`div`,G);n(G,q),y(q,`mt-2 font-mono text-2xl text-success`);let he=d(q);n(q,he),s(()=>{m(he,ne.value)});let J=a(`div`,V);n(V,J),y(J,`rounded-box border border-base-300 bg-base-100 p-4`);let Y=a(`div`,J);n(J,Y),y(Y,`text-sm text-base-content/60`),n(Y,e(`await nextTick() 后`));let X=a(`div`,J);n(J,X),y(X,`mt-2 font-mono text-2xl text-info`);let ge=d(X);n(X,ge),s(()=>{m(ge,C.value)});let Z=a(`div`,i);n(i,Z),y(Z,`rounded-box border border-base-300 bg-base-100 p-4`);let Q=a(`div`,Z);n(Z,Q),y(Q,`text-sm font-medium text-base-content/70`),n(Q,e(`最近的 post effect 记录`));let $=a(`ul`,Z);n(Z,$),y($,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let _e=o(`rue:list:start`),ve=o(`rue:list:end`);n($,_e),n($,ve);let ye=new Map;return s(()=>{ye=ee({items:ie.value||[],getKey:(e,t)=>e,elements:ye,parent:$,before:ve,singleRoot:!0,trackIndex:!1,start:_e,renderItem:(e,t,r,i,o)=>{v(p(()=>{let t=c(),r=a(`li`,t);n(t,r),s(()=>{l(r,`key`,String(e))});let i=d(r);return n(r,i),s(()=>{m(i,e)}),t}),t,r)}})}),r})},ie=()=>{let{activeTab:r}=x(`useSetup:0:0:dup1`,()=>g(()=>({activeTab:x(`ref:1:7`,()=>i(`preview`))})));return p(i=>{let u=c(),d=o(`rue:component:anchor`);return n(u,d),v(b(ne,{children:p(()=>{let i=c(),u=a(`h1`,i);n(i,u),y(u,`text-5xl font-semibold mb-4 md:mb-4`),n(u,e(`watchPostEffect DOM 读取时机`));let d=a(`div`,i);n(i,d),l(d,`role`,`tablist`),y(d,`tabs tabs-box`);let f=a(`button`,d);n(d,f),l(f,`role`,`tab`),s(()=>{y(f,`tab ${r.value===`preview`?`tab-active`:``}`)}),h(f,`click`,()=>{r.value=`preview`}),n(f,e(`效果`));let m=a(`button`,d);n(d,m),l(m,`role`,`tab`),s(()=>{y(m,`tab ${r.value===`code`?`tab-active`:``}`)}),h(m,`click`,()=>{r.value=`code`}),n(m,e(`代码`));let g=a(`div`,i);n(i,g),y(g,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let _=o(`rue:slot:anchor`);n(g,_),s(()=>{let e=r.value===`code`?p(()=>{let e=c(),r=a(`div`,e);n(e,r),y(r,`card bg-base-100 shadow overflow-auto`);let i=a(`div`,r);n(r,i),y(i,`card-body p-0`);let l=o(`rue:component:anchor`);return n(i,l),s(()=>{let e=b(S,{className:`h-full`,lang:`tsx`,code:C});t(()=>v(e,i,l))}),e}):``;t(()=>v(e,g,_))}),n(g,e(` `));let x=o(`rue:slot:anchor`);return n(g,x),s(()=>{let e=r.value===`preview`?p(()=>{let e=c(),t=o(`rue:component:anchor`);return n(e,t),v(b(w,{}),e,t),e}):``;t(()=>v(e,g,x))}),i})}),u,d),u})};export{ie as default};