import{Cn as e,Ct as t,Ht as n,Mt as r,Sn as i,Tt as a,dt as o,ft as s,ht as c,mt as l,nn as u,ot as d,pn as f,pt as p,st as m,tn as h,vn as g}from"./context-8lXZvIn-.js";import{l as _,n as v,o as y,t as b}from"./vapor-runtime-ygJWVcNn.js";import{a as x,n as ee,t as te}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as S}from"./Code-DhoWkRkB.js";import{r as ne}from"./SidebarPlaygroundExample-B78jsvoF.js";var C=`import { type FC, nextTick, ref, useRef, watchPostEffect } from '@rue-js/rue';

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

export default WatchPostEffectDemo;`,re=[`修改 count.value 后，响应式状态会立刻变化，DOM patch 会进入同一轮 flush。`,`在事件函数里同步读取 DOM，可能拿到的是本轮 patch 前的旧文本。`,`watchPostEffect 会在 DOM 更新完成后运行，适合读取布局、文本或同步第三方 DOM 插件。`,`await nextTick() 是命令式等待一次 flush；watchPostEffect 会自动追踪依赖并重复执行。`],w=()=>{let g=x(`useSetup:0:0`,()=>e(()=>{let e=x(`ref:1:0`,()=>f(0)),t=x(`ref:1:1`,()=>f(`尚未读取`)),n=x(`ref:1:2`,()=>f(`等待首次 flush`)),r=x(`ref:1:3`,()=>f(`尚未读取`)),a=x(`ref:1:4`,()=>f(`点击按钮后观察三种读取时机。`)),o=x(`ref:1:5`,()=>f([])),s=x(`useRef:1:6`,()=>i()),c=0,l=[];return u(()=>{let t=e.value,r=s.current?.textContent??`(missing)`;c+=1,n.value=r,l.unshift(`post #${c}: state=${t}, DOM=${r}`),o.value=l.slice(0,5)}),{count:e,syncDomText:t,postDomText:n,tickDomText:r,actionNote:a,logLines:o,countRef:s,history:l,postRun:c}})),{count:b,syncDomText:S,postDomText:ne,tickDomText:C,actionNote:w,logLines:ie,countRef:T,history:ae}=g,{postRun:oe}=g,se=async e=>{for(let t=0;t<e;t+=1)b.value+=1;let t=T.current?.textContent??`(missing)`;S.value=t,C.value=`等待 nextTick...`,w.value=e===1?`状态已同步变成 ${b.value}，但同步读取 DOM 仍可能是旧值。`:`连续更新 ${e} 次会合并到同一轮 post effect。`,await n(),C.value=T.current?.textContent??`(missing)`},ce=async()=>{b.value=0,S.value=`尚未读取`,C.value=`等待 nextTick...`,w.value=`已重置，等待 DOM flush 完成。`,await n(),C.value=T.current?.textContent??`(missing)`};return _(e=>{let n=p(`div`,e);a(n,`card bg-base-100 shadow`);let i=p(`div`,n);m(n,i),a(i,`card-body gap-5`);let u=p(`p`,i);m(i,u),a(u,`text-base-content/70 leading-7`),m(u,l("`watchPostEffect()` 适合在响应式更新已经写入 DOM 之后执行副作用，比如测量元素尺寸、读取最新文本、同步第三方 DOM 插件。"));let f=p(`div`,i);m(i,f),a(f,`rounded-box border border-info/30 bg-info/10 p-4 text-sm leading-6 text-base-content/80`);let g=p(`div`,f);m(f,g),a(g,`font-medium text-info`),m(g,l(`DOM 读取时机说明`));let x=p(`ul`,f);m(f,x),a(x,`mt-2 list-disc space-y-1 pl-5`);let ae=o(`rue:list:start`),oe=o(`rue:list:end`);m(x,ae),m(x,oe);let le=new Map;h(()=>{le=ee({items:re||[],getKey:(e,t)=>e,elements:le,parent:x,before:oe,singleRoot:!0,trackIndex:!1,start:ae,renderItem:(e,n,i,a,o)=>{y(_(()=>{let n=s(),i=p(`li`,n);m(n,i),h(()=>{t(i,`key`,String(e))});let a=c(i);return m(i,a),h(()=>{r(a,e)}),n}),n,i)}})});let E=p(`div`,i);m(i,E),a(E,`rounded-box border border-base-300 bg-base-200/40 p-5`);let D=p(`div`,E);m(E,D),a(D,`text-sm uppercase tracking-[0.24em] text-base-content/50`),m(D,l(`响应式状态`));let O=p(`div`,E);m(E,O),a(O,`mt-3 flex flex-wrap items-end gap-4`);let k=p(`div`,O);m(O,k);let A=p(`div`,k);m(k,A),a(A,`text-sm text-base-content/60`),m(A,l(`count.value`));let j=p(`div`,k);m(k,j),a(j,`text-5xl font-semibold text-primary`);let ue=c(j);m(j,ue),h(()=>{r(ue,b.value)});let M=p(`div`,O);m(O,M),a(M,`min-w-48 rounded-box bg-base-100 p-4`);let N=p(`div`,M);m(M,N),a(N,`text-sm text-base-content/60`),m(N,l(`真实 DOM 文本`));let P=p(`div`,M);m(M,P),a(P,`mt-1 font-mono text-3xl`);let F=p(`span`,P);m(P,F);let de=te(F,()=>T);v(()=>{de()});let fe=c(F);m(F,fe),h(()=>{r(fe,b.value)});let I=p(`div`,i);m(i,I),a(I,`flex flex-wrap gap-3`);let L=p(`button`,I);m(I,L),a(L,`btn btn-primary`),d(L,`click`,()=>void se(1)),m(L,l(`+1 并读取 DOM`));let R=p(`button`,I);m(I,R),a(R,`btn btn-secondary`),d(R,`click`,()=>void se(3)),m(R,l(`连续 +3`));let z=p(`button`,I);m(I,z),a(z,`btn btn-ghost`),d(z,`click`,()=>void ce()),m(z,l(`重置`));let B=p(`div`,i);m(i,B),a(B,`rounded-box border border-dashed border-base-300 bg-base-100 p-4 text-sm text-base-content/70`);let pe=c(B);m(B,pe),h(()=>{r(pe,w.value)});let V=p(`div`,i);m(i,V),a(V,`grid gap-4 md:grid-cols-3`);let H=p(`div`,V);m(V,H),a(H,`rounded-box border border-base-300 bg-base-100 p-4`);let U=p(`div`,H);m(H,U),a(U,`text-sm text-base-content/60`),m(U,l(`同步读取 DOM`));let W=p(`div`,H);m(H,W),a(W,`mt-2 font-mono text-2xl`);let me=c(W);m(W,me),h(()=>{r(me,S.value)});let G=p(`div`,V);m(V,G),a(G,`rounded-box border border-base-300 bg-base-100 p-4`);let K=p(`div`,G);m(G,K),a(K,`text-sm text-base-content/60`),m(K,l(`watchPostEffect 读取`));let q=p(`div`,G);m(G,q),a(q,`mt-2 font-mono text-2xl text-success`);let he=c(q);m(q,he),h(()=>{r(he,ne.value)});let J=p(`div`,V);m(V,J),a(J,`rounded-box border border-base-300 bg-base-100 p-4`);let Y=p(`div`,J);m(J,Y),a(Y,`text-sm text-base-content/60`),m(Y,l(`await nextTick() 后`));let X=p(`div`,J);m(J,X),a(X,`mt-2 font-mono text-2xl text-info`);let ge=c(X);m(X,ge),h(()=>{r(ge,C.value)});let Z=p(`div`,i);m(i,Z),a(Z,`rounded-box border border-base-300 bg-base-100 p-4`);let Q=p(`div`,Z);m(Z,Q),a(Q,`text-sm font-medium text-base-content/70`),m(Q,l(`最近的 post effect 记录`));let $=p(`ul`,Z);m(Z,$),a($,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let _e=o(`rue:list:start`),ve=o(`rue:list:end`);m($,_e),m($,ve);let ye=new Map;return h(()=>{ye=ee({items:ie.value||[],getKey:(e,t)=>e,elements:ye,parent:$,before:ve,singleRoot:!0,trackIndex:!1,start:_e,renderItem:(e,n,i,a,o)=>{y(_(()=>{let n=s(),i=p(`li`,n);m(n,i),h(()=>{t(i,`key`,String(e))});let a=c(i);return m(i,a),h(()=>{r(a,e)}),n}),n,i)}})}),n})},ie=()=>{let{activeTab:n}=x(`useSetup:0:0:dup1`,()=>e(()=>({activeTab:x(`ref:1:7`,()=>f(`preview`))})));return _(e=>{let r=s(),i=o(`rue:component:anchor`);return m(r,i),y(b(ne,{children:_(()=>{let e=s(),r=p(`h1`,e);m(e,r),a(r,`text-5xl font-semibold mb-4 md:mb-4`),m(r,l(`watchPostEffect DOM 读取时机`));let i=p(`div`,e);m(e,i),t(i,`role`,`tablist`),a(i,`tabs tabs-box`);let c=p(`button`,i);m(i,c),t(c,`role`,`tab`),h(()=>{a(c,`tab ${n.value===`preview`?`tab-active`:``}`)}),d(c,`click`,()=>{n.value=`preview`}),m(c,l(`效果`));let u=p(`button`,i);m(i,u),t(u,`role`,`tab`),h(()=>{a(u,`tab ${n.value===`code`?`tab-active`:``}`)}),d(u,`click`,()=>{n.value=`code`}),m(u,l(`代码`));let f=p(`div`,e);m(e,f),a(f,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let v=o(`rue:slot:anchor`);m(f,v),h(()=>{let e=n.value===`code`?_(()=>{let e=s(),t=p(`div`,e);m(e,t),a(t,`card bg-base-100 shadow overflow-auto`);let n=p(`div`,t);m(t,n),a(n,`card-body p-0`);let r=o(`rue:component:anchor`);return m(n,r),h(()=>{let e=b(S,{className:`h-full`,lang:`tsx`,code:C});g(()=>y(e,n,r))}),e}):``;g(()=>y(e,f,v))}),m(f,l(` `));let x=o(`rue:slot:anchor`);return m(f,x),h(()=>{let e=n.value===`preview`?_(()=>{let e=s(),t=o(`rue:component:anchor`);return m(e,t),y(b(w,{}),e,t),e}):``;g(()=>y(e,f,x))}),e})}),r,i),r})};export{ie as default};