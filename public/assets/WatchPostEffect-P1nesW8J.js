import{$ as e,$t as t,Bt as n,Ct as r,Gt as i,Pt as a,X as o,Xt as s,Yt as c,Z as l,ct as u,et as d,gt as f,l as p,n as m,nt as h,o as g,rt as _,t as v,tt as y,ut as b}from"./vapor-runtime-CKrmRMZX.js";import{a as x,n as ee,t as te}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{t as S}from"./Code-D5UqTwV6.js";import{r as ne}from"./SidebarPlaygroundExample-D2vGHFCu.js";var C=`import { type FC, nextTick, ref, useRef, watchPostEffect } from '@rue-js/rue';

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

export default WatchPostEffectDemo;`,re=[`修改 count.value 后，响应式状态会立刻变化，DOM patch 会进入同一轮 flush。`,`在事件函数里同步读取 DOM，可能拿到的是本轮 patch 前的旧文本。`,`watchPostEffect 会在 DOM 更新完成后运行，适合读取布局、文本或同步第三方 DOM 插件。`,`await nextTick() 是命令式等待一次 flush；watchPostEffect 会自动追踪依赖并重复执行。`],w=()=>{let i=x(`useSetup:0:0`,()=>s(()=>{let e=x(`ref:1:0`,()=>n(0)),t=x(`ref:1:1`,()=>n(`尚未读取`)),r=x(`ref:1:2`,()=>n(`等待首次 flush`)),i=x(`ref:1:3`,()=>n(`尚未读取`)),o=x(`ref:1:4`,()=>n(`点击按钮后观察三种读取时机。`)),s=x(`ref:1:5`,()=>n([])),l=x(`useRef:1:6`,()=>c()),u=0,d=[];return a(()=>{let t=e.value,n=l.current?.textContent??`(missing)`;u+=1,r.value=n,d.unshift(`post #${u}: state=${t}, DOM=${n}`),s.value=d.slice(0,5)}),{count:e,syncDomText:t,postDomText:r,tickDomText:i,actionNote:o,logLines:s,countRef:l,history:d,postRun:u}})),{count:v,syncDomText:S,postDomText:ne,tickDomText:C,actionNote:w,logLines:ie,countRef:T,history:ae}=i,{postRun:oe}=i,se=async e=>{for(let t=0;t<e;t+=1)v.value+=1;S.value=T.current?.textContent??`(missing)`,C.value=`等待 nextTick...`,w.value=e===1?`状态已同步变成 ${v.value}，但同步读取 DOM 仍可能是旧值。`:`连续更新 ${e} 次会合并到同一轮 post effect。`,await r(),C.value=T.current?.textContent??`(missing)`},ce=async()=>{v.value=0,S.value=`尚未读取`,C.value=`等待 nextTick...`,w.value=`已重置，等待 DOM flush 完成。`,await r(),C.value=T.current?.textContent??`(missing)`};return p(n=>{let r=y(`div`,n);b(r,`card bg-base-100 shadow`);let i=y(`div`,r);l(r,i),b(i,`card-body gap-5`);let a=y(`p`,i);l(i,a),b(a,`text-base-content/70 leading-7`),l(a,h("`watchPostEffect()` 适合在响应式更新已经写入 DOM 之后执行副作用，比如测量元素尺寸、读取最新文本、同步第三方 DOM 插件。"));let s=y(`div`,i);l(i,s),b(s,`rounded-box border border-info/30 bg-info/10 p-4 text-sm leading-6 text-base-content/80`);let c=y(`div`,s);l(s,c),b(c,`font-medium text-info`),l(c,h(`DOM 读取时机说明`));let x=y(`ul`,s);l(s,x),b(x,`mt-2 list-disc space-y-1 pl-5`);let ae=e(`rue:list:start`),oe=e(`rue:list:end`);l(x,ae),l(x,oe);let le=new Map;t(()=>{le=ee({items:re||[],getKey:(e,t)=>e,elements:le,parent:x,before:oe,singleRoot:!0,trackIndex:!1,start:ae,renderItem:(e,n,r,i,a)=>{g(p(()=>{let n=d(),r=y(`li`,n);l(n,r),t(()=>{u(r,`key`,String(e))});let i=_(r);return l(r,i),t(()=>{f(i,e)}),n}),n,r)}})});let E=y(`div`,i);l(i,E),b(E,`rounded-box border border-base-300 bg-base-200/40 p-5`);let D=y(`div`,E);l(E,D),b(D,`text-sm uppercase tracking-[0.24em] text-base-content/50`),l(D,h(`响应式状态`));let O=y(`div`,E);l(E,O),b(O,`mt-3 flex flex-wrap items-end gap-4`);let k=y(`div`,O);l(O,k);let A=y(`div`,k);l(k,A),b(A,`text-sm text-base-content/60`),l(A,h(`count.value`));let j=y(`div`,k);l(k,j),b(j,`text-5xl font-semibold text-primary`);let ue=_(j);l(j,ue),t(()=>{f(ue,v.value)});let M=y(`div`,O);l(O,M),b(M,`min-w-48 rounded-box bg-base-100 p-4`);let N=y(`div`,M);l(M,N),b(N,`text-sm text-base-content/60`),l(N,h(`真实 DOM 文本`));let P=y(`div`,M);l(M,P),b(P,`mt-1 font-mono text-3xl`);let F=y(`span`,P);l(P,F);let de=te(F,()=>T);m(()=>{de()});let fe=_(F);l(F,fe),t(()=>{f(fe,v.value)});let I=y(`div`,i);l(i,I),b(I,`flex flex-wrap gap-3`);let L=y(`button`,I);l(I,L),b(L,`btn btn-primary`),o(L,`click`,()=>void se(1)),l(L,h(`+1 并读取 DOM`));let R=y(`button`,I);l(I,R),b(R,`btn btn-secondary`),o(R,`click`,()=>void se(3)),l(R,h(`连续 +3`));let z=y(`button`,I);l(I,z),b(z,`btn btn-ghost`),o(z,`click`,()=>void ce()),l(z,h(`重置`));let B=y(`div`,i);l(i,B),b(B,`rounded-box border border-dashed border-base-300 bg-base-100 p-4 text-sm text-base-content/70`);let pe=_(B);l(B,pe),t(()=>{f(pe,w.value)});let V=y(`div`,i);l(i,V),b(V,`grid gap-4 md:grid-cols-3`);let H=y(`div`,V);l(V,H),b(H,`rounded-box border border-base-300 bg-base-100 p-4`);let U=y(`div`,H);l(H,U),b(U,`text-sm text-base-content/60`),l(U,h(`同步读取 DOM`));let W=y(`div`,H);l(H,W),b(W,`mt-2 font-mono text-2xl`);let me=_(W);l(W,me),t(()=>{f(me,S.value)});let G=y(`div`,V);l(V,G),b(G,`rounded-box border border-base-300 bg-base-100 p-4`);let K=y(`div`,G);l(G,K),b(K,`text-sm text-base-content/60`),l(K,h(`watchPostEffect 读取`));let q=y(`div`,G);l(G,q),b(q,`mt-2 font-mono text-2xl text-success`);let he=_(q);l(q,he),t(()=>{f(he,ne.value)});let J=y(`div`,V);l(V,J),b(J,`rounded-box border border-base-300 bg-base-100 p-4`);let Y=y(`div`,J);l(J,Y),b(Y,`text-sm text-base-content/60`),l(Y,h(`await nextTick() 后`));let X=y(`div`,J);l(J,X),b(X,`mt-2 font-mono text-2xl text-info`);let ge=_(X);l(X,ge),t(()=>{f(ge,C.value)});let Z=y(`div`,i);l(i,Z),b(Z,`rounded-box border border-base-300 bg-base-100 p-4`);let Q=y(`div`,Z);l(Z,Q),b(Q,`text-sm font-medium text-base-content/70`),l(Q,h(`最近的 post effect 记录`));let $=y(`ul`,Z);l(Z,$),b($,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let _e=e(`rue:list:start`),ve=e(`rue:list:end`);l($,_e),l($,ve);let ye=new Map;return t(()=>{ye=ee({items:ie.value||[],getKey:(e,t)=>e,elements:ye,parent:$,before:ve,singleRoot:!0,trackIndex:!1,start:_e,renderItem:(e,n,r,i,a)=>{g(p(()=>{let n=d(),r=y(`li`,n);l(n,r),t(()=>{u(r,`key`,String(e))});let i=_(r);return l(r,i),t(()=>{f(i,e)}),n}),n,r)}})}),r})},ie=()=>{let{activeTab:r}=x(`useSetup:0:0:dup1`,()=>s(()=>({activeTab:x(`ref:1:7`,()=>n(`preview`))})));return p(n=>{let a=d(),s=e(`rue:component:anchor`);return l(a,s),g(v(ne,{children:p(()=>{let n=d(),a=y(`h1`,n);l(n,a),b(a,`text-5xl font-semibold mb-4 md:mb-4`),l(a,h(`watchPostEffect DOM 读取时机`));let s=y(`div`,n);l(n,s),u(s,`role`,`tablist`),b(s,`tabs tabs-box`);let c=y(`button`,s);l(s,c),u(c,`role`,`tab`),t(()=>{b(c,`tab ${r.value===`preview`?`tab-active`:``}`)}),o(c,`click`,()=>{r.value=`preview`}),l(c,h(`效果`));let f=y(`button`,s);l(s,f),u(f,`role`,`tab`),t(()=>{b(f,`tab ${r.value===`code`?`tab-active`:``}`)}),o(f,`click`,()=>{r.value=`code`}),l(f,h(`代码`));let m=y(`div`,n);l(n,m),b(m,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let _=e(`rue:slot:anchor`);l(m,_),t(()=>{let n=r.value===`code`?p(()=>{let n=d(),r=y(`div`,n);l(n,r),b(r,`card bg-base-100 shadow overflow-auto`);let a=y(`div`,r);l(r,a),b(a,`card-body p-0`);let o=e(`rue:component:anchor`);return l(a,o),t(()=>{let e=v(S,{className:`h-full`,lang:`tsx`,code:C});i(()=>g(e,a,o))}),n}):``;i(()=>g(n,m,_))}),l(m,h(` `));let x=e(`rue:slot:anchor`);return l(m,x),t(()=>{let t=r.value===`preview`?p(()=>{let t=d(),n=e(`rue:component:anchor`);return l(t,n),g(v(w,{}),t,n),t}):``;i(()=>g(t,m,x))}),n})}),a,s),a})};export{ie as default};