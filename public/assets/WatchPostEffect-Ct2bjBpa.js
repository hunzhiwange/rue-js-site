import{$t as e,Bt as t,Dt as n,Jt as r,Q as i,Z as a,dt as o,et as s,in as c,it as l,l as u,lt as d,n as f,nt as p,o as m,rn as h,rt as g,t as _,tt as v,vt as y,zt as b}from"./vapor-runtime-DsQWl-IB.js";import{a as x,n as ee,t as te}from"./vapor-helpers-vapor-Dg64FcpK.js";import{t as S}from"./Code-4SUSUwRg.js";import{r as ne}from"./SidebarPlaygroundExample-BEWYUWOl.js";var C=`import { type FC, nextTick, ref, useRef, watchPostEffect } from '@rue-js/rue';

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

export default WatchPostEffectDemo;`,re=[`修改 count.value 后，响应式状态会立刻变化，DOM patch 会进入同一轮 flush。`,`在事件函数里同步读取 DOM，可能拿到的是本轮 patch 前的旧文本。`,`watchPostEffect 会在 DOM 更新完成后运行，适合读取布局、文本或同步第三方 DOM 插件。`,`await nextTick() 是命令式等待一次 flush；watchPostEffect 会自动追踪依赖并重复执行。`],w=()=>{let e=x(`useSetup:0:0`,()=>c(()=>{let e=x(`ref:1:0`,()=>r(0)),n=x(`ref:1:1`,()=>r(`尚未读取`)),i=x(`ref:1:2`,()=>r(`等待首次 flush`)),a=x(`ref:1:3`,()=>r(`尚未读取`)),o=x(`ref:1:4`,()=>r(`点击按钮后观察三种读取时机。`)),s=x(`ref:1:5`,()=>r([])),c=x(`useRef:1:6`,()=>h()),l=0,u=[];return t(()=>{let t=e.value,n=c.current?.textContent??`(missing)`;l+=1,i.value=n,u.unshift(`post #${l}: state=${t}, DOM=${n}`),s.value=u.slice(0,5)}),{count:e,syncDomText:n,postDomText:i,tickDomText:a,actionNote:o,logLines:s,countRef:c,history:u,postRun:l}})),{count:_,syncDomText:S,postDomText:ne,tickDomText:C,actionNote:w,logLines:ie,countRef:T,history:ae}=e,{postRun:oe}=e,se=async e=>{for(let t=0;t<e;t+=1)_.value+=1;S.value=T.current?.textContent??`(missing)`,C.value=`等待 nextTick...`,w.value=e===1?`状态已同步变成 ${_.value}，但同步读取 DOM 仍可能是旧值。`:`连续更新 ${e} 次会合并到同一轮 post effect。`,await n(),C.value=T.current?.textContent??`(missing)`},ce=async()=>{_.value=0,S.value=`尚未读取`,C.value=`等待 nextTick...`,w.value=`已重置，等待 DOM flush 完成。`,await n(),C.value=T.current?.textContent??`(missing)`};return u(e=>{let t=p(`div`,e);o(t,`card bg-base-100 shadow`);let n=p(`div`,t);i(t,n),o(n,`card-body gap-5`);let r=p(`p`,n);i(n,r),o(r,`text-base-content/70 leading-7`),i(r,g("`watchPostEffect()` 适合在响应式更新已经写入 DOM 之后执行副作用，比如测量元素尺寸、读取最新文本、同步第三方 DOM 插件。"));let c=p(`div`,n);i(n,c),o(c,`rounded-box border border-info/30 bg-info/10 p-4 text-sm leading-6 text-base-content/80`);let h=p(`div`,c);i(c,h),o(h,`font-medium text-info`),i(h,g(`DOM 读取时机说明`));let x=p(`ul`,c);i(c,x),o(x,`mt-2 list-disc space-y-1 pl-5`);let ae=s(`rue:list:start`),oe=s(`rue:list:end`);i(x,ae),i(x,oe);let le=new Map;b(()=>{le=ee({items:re||[],getKey:(e,t)=>e,elements:le,parent:x,before:oe,singleRoot:!0,trackIndex:!1,start:ae,renderItem:(e,t,n,r,a)=>{m(u(()=>{let t=v(),n=p(`li`,t);i(t,n),b(()=>{d(n,`key`,String(e))});let r=l(n);return i(n,r),b(()=>{y(r,e)}),t}),t,n)}})});let E=p(`div`,n);i(n,E),o(E,`rounded-box border border-base-300 bg-base-200/40 p-5`);let D=p(`div`,E);i(E,D),o(D,`text-sm uppercase tracking-[0.24em] text-base-content/50`),i(D,g(`响应式状态`));let O=p(`div`,E);i(E,O),o(O,`mt-3 flex flex-wrap items-end gap-4`);let k=p(`div`,O);i(O,k);let A=p(`div`,k);i(k,A),o(A,`text-sm text-base-content/60`),i(A,g(`count.value`));let j=p(`div`,k);i(k,j),o(j,`text-5xl font-semibold text-primary`);let ue=l(j);i(j,ue),b(()=>{y(ue,_.value)});let M=p(`div`,O);i(O,M),o(M,`min-w-48 rounded-box bg-base-100 p-4`);let N=p(`div`,M);i(M,N),o(N,`text-sm text-base-content/60`),i(N,g(`真实 DOM 文本`));let P=p(`div`,M);i(M,P),o(P,`mt-1 font-mono text-3xl`);let F=p(`span`,P);i(P,F);let de=te(F,()=>T);f(()=>{de()});let fe=l(F);i(F,fe),b(()=>{y(fe,_.value)});let I=p(`div`,n);i(n,I),o(I,`flex flex-wrap gap-3`);let L=p(`button`,I);i(I,L),o(L,`btn btn-primary`),a(L,`click`,()=>void se(1)),i(L,g(`+1 并读取 DOM`));let R=p(`button`,I);i(I,R),o(R,`btn btn-secondary`),a(R,`click`,()=>void se(3)),i(R,g(`连续 +3`));let z=p(`button`,I);i(I,z),o(z,`btn btn-ghost`),a(z,`click`,()=>void ce()),i(z,g(`重置`));let B=p(`div`,n);i(n,B),o(B,`rounded-box border border-dashed border-base-300 bg-base-100 p-4 text-sm text-base-content/70`);let pe=l(B);i(B,pe),b(()=>{y(pe,w.value)});let V=p(`div`,n);i(n,V),o(V,`grid gap-4 md:grid-cols-3`);let H=p(`div`,V);i(V,H),o(H,`rounded-box border border-base-300 bg-base-100 p-4`);let U=p(`div`,H);i(H,U),o(U,`text-sm text-base-content/60`),i(U,g(`同步读取 DOM`));let W=p(`div`,H);i(H,W),o(W,`mt-2 font-mono text-2xl`);let me=l(W);i(W,me),b(()=>{y(me,S.value)});let G=p(`div`,V);i(V,G),o(G,`rounded-box border border-base-300 bg-base-100 p-4`);let K=p(`div`,G);i(G,K),o(K,`text-sm text-base-content/60`),i(K,g(`watchPostEffect 读取`));let q=p(`div`,G);i(G,q),o(q,`mt-2 font-mono text-2xl text-success`);let he=l(q);i(q,he),b(()=>{y(he,ne.value)});let J=p(`div`,V);i(V,J),o(J,`rounded-box border border-base-300 bg-base-100 p-4`);let Y=p(`div`,J);i(J,Y),o(Y,`text-sm text-base-content/60`),i(Y,g(`await nextTick() 后`));let X=p(`div`,J);i(J,X),o(X,`mt-2 font-mono text-2xl text-info`);let ge=l(X);i(X,ge),b(()=>{y(ge,C.value)});let Z=p(`div`,n);i(n,Z),o(Z,`rounded-box border border-base-300 bg-base-100 p-4`);let Q=p(`div`,Z);i(Z,Q),o(Q,`text-sm font-medium text-base-content/70`),i(Q,g(`最近的 post effect 记录`));let $=p(`ul`,Z);i(Z,$),o($,`mt-3 space-y-2 text-sm leading-6 text-base-content/80`);let _e=s(`rue:list:start`),ve=s(`rue:list:end`);i($,_e),i($,ve);let ye=new Map;return b(()=>{ye=ee({items:ie.value||[],getKey:(e,t)=>e,elements:ye,parent:$,before:ve,singleRoot:!0,trackIndex:!1,start:_e,renderItem:(e,t,n,r,a)=>{m(u(()=>{let t=v(),n=p(`li`,t);i(t,n),b(()=>{d(n,`key`,String(e))});let r=l(n);return i(n,r),b(()=>{y(r,e)}),t}),t,n)}})}),t})},ie=()=>{let{activeTab:t}=x(`useSetup:0:0:dup1`,()=>c(()=>({activeTab:x(`ref:1:7`,()=>r(`preview`))})));return u(n=>{let r=v(),c=s(`rue:component:anchor`);return i(r,c),m(_(ne,{children:u(()=>{let n=v(),r=p(`h1`,n);i(n,r),o(r,`text-5xl font-semibold mb-4 md:mb-4`),i(r,g(`watchPostEffect DOM 读取时机`));let c=p(`div`,n);i(n,c),d(c,`role`,`tablist`),o(c,`tabs tabs-box`);let l=p(`button`,c);i(c,l),d(l,`role`,`tab`),b(()=>{o(l,`tab ${t.value===`preview`?`tab-active`:``}`)}),a(l,`click`,()=>{t.value=`preview`}),i(l,g(`效果`));let f=p(`button`,c);i(c,f),d(f,`role`,`tab`),b(()=>{o(f,`tab ${t.value===`code`?`tab-active`:``}`)}),a(f,`click`,()=>{t.value=`code`}),i(f,g(`代码`));let h=p(`div`,n);i(n,h),o(h,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let y=s(`rue:slot:anchor`);i(h,y),b(()=>{let n=t.value===`code`?u(()=>{let t=v(),n=p(`div`,t);i(t,n),o(n,`card bg-base-100 shadow overflow-auto`);let r=p(`div`,n);i(n,r),o(r,`card-body p-0`);let a=s(`rue:component:anchor`);return i(r,a),b(()=>{let t=_(S,{className:`h-full`,lang:`tsx`,code:C});e(()=>m(t,r,a))}),t}):``;e(()=>m(n,h,y))}),i(h,g(` `));let x=s(`rue:slot:anchor`);return i(h,x),b(()=>{let n=t.value===`preview`?u(()=>{let e=v(),t=s(`rue:component:anchor`);return i(e,t),m(_(w,{}),e,t),e}):``;e(()=>m(n,h,x))}),n})}),r,c),r})};export{ie as default};