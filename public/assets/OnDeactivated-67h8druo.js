import{B as e,Bt as t,Dt as n,F as r,Ht as i,I as a,Mt as o,P as s,Qt as c,T as l,Ut as u,V as d,Vt as f,W as p,Wt as m,X as h,Y as g,en as _,f as v,fn as y,gn as b,h as x,hn as S,in as C,it as w,k as T,mn as E,mt as D,nt as O,p as k,pn as A,qt as j,sn as M,st as N,u as P,yn as F,z as I,zt as L}from"./rue-runtime-BWbIfNT8.js";import{t as R}from"./Code-C5ZhIIr9.js";import{r as z}from"./SidebarPlaygroundExample-DUmYtIFQ.js";var B=F(`<section class="rounded-box border border-info/25 bg-info/10 p-5"><div class="text-xs font-semibold uppercase opacity-60">EditorPanel</div><label class="form-control mt-4"><span class="label-text">草稿内容</span><!--rue:opaque-hole:0--></label></section>`),V=F(`<section class="rounded-box border border-success/25 bg-success/10 p-5"><div class="text-xs font-semibold uppercase opacity-60">CounterPanel</div><div class="mt-4 text-5xl font-semibold">rue:direct-text</div><button class="btn btn-success btn-sm mt-5">增加</button></section>`),H=F(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">onDeactivated()</h1>`),U=F(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),W=F(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),G={EditorPanel:`编辑器`,CounterPanel:`计数器`},K={EditorPanel:(t,r,i)=>{let s=p(I(t,`writeLog`)),[c,l]=N(`EditorPanel:hook:0`,`切到计数器后再回来，这段文字还在。`);return w(()=>{s.get()(`EditorPanel deactivated: "${c.get().slice(0,12)}"`)}),O(()=>a(m(e=>{let t=B().content.cloneNode(!0).firstChild,r=t.childNodes[1].childNodes[1],i=r.parentNode,a=S(`textarea`,i);y(i,a),i.insertBefore(a,r),n(a,`textarea textarea-bordered mt-2 min-h-28`),C(()=>{o(a,c.get())});let s=e=>{let t=e=>{l(e.target.value)};typeof t==`function`&&t(e)};return a.addEventListener(`input`,s),M(()=>a.removeEventListener(`input`,s)),[t,t]}),e=>_(()=>{s.set(e.writeLog)}),()=>e(t)))},CounterPanel:(t,n,r)=>{let i=p(I(t,`writeLog`)),[o,s]=N(`CounterPanel:hook:0`,0);return w(()=>{i.get()(`CounterPanel deactivated: count = ${o.get()}`)}),O(()=>a(m(e=>{let t=V().content.cloneNode(!0).firstChild,n=t.childNodes[2],r=t.childNodes[1].childNodes[0];return r.parentNode,n.setAttribute(`class`,`btn btn-success btn-sm mt-5`),M(P(e,n,`click`,()=>()=>{s(e=>e+1)})),c(r,()=>o.get()),[t,t]}),e=>_(()=>{i.set(e.writeLog)}),()=>e(t)))}},q=`import {
  Component,
  KeepAlive,
  onDeactivated,
  ref,
  useState,
  type FC,
} from '@rue-js/rue';

const EditorPanel: FC<{ writeLog: (message: string) => void }> = props => {
  const [text, setText] = useState('draft');

  onDeactivated(() => {
    props.writeLog(\`EditorPanel deactivated: "\${text}"\`);
  });

  return (
    <textarea
      value={text}
      onInput={(event: Event) => {
        setText((event.target as HTMLTextAreaElement).value);
      }}
    />
  );
};

const CounterPanel: FC<{ writeLog: (message: string) => void }> = props => {
  const [count, setCount] = useState(0);

  onDeactivated(() => {
    props.writeLog(\`CounterPanel deactivated: count = \${count}\`);
  });

  return (
    <button onClick={() => setCount(value => value + 1)}>
      count: {count}
    </button>
  );
};

const panels = { EditorPanel, CounterPanel };

/** KeepAlive 切换示例主体，负责在两个缓存面板之间切换并记录日志。 */
const Demo: FC = () => {
  const activePanel = ref<keyof typeof panels>('EditorPanel');

  return (
    <KeepAlive>
      <Component
        is={panels[activePanel.value]}
        key={activePanel.value}
        writeLog={message => console.log(message)}
      />
    </KeepAlive>
  );
};`,J=(t,n,i)=>{let o=p(I(t,`activePanel`)),s=p(I(t,`writeLog`));return a(T(()=>({cacheKey:o.get().value,children:(e=>(t,n,i)=>{let a=()=>m(t=>{let n=E();r(n,l,()=>({is:e,writeLog:s.get()}));let i=b(``),a=b(``);return n.insertBefore(i,n.firstChild),n.appendChild(a),[n.firstChild,n.lastChild]});return t==null?a():f(t,i,a)})(K[o.get().value]),cacheName:`Component`})),e=>_(()=>{o.set(e.activePanel),s.set(e.writeLog)}),()=>e(t))},Y=(e,n,a)=>{let o=D(`preview`),c=D(`EditorPanel`),l=D([]),_=e=>{l.value=[`${new Date().toLocaleTimeString()}  ${e}`,...l.value].slice(0,6)};return O(()=>s(z,()=>({children:(e,n,a)=>{let s=()=>m(e=>{let n=E();n.appendChild(H().content.cloneNode(!0));let a=U().content.cloneNode(!0),s=a.firstChild,w=s.childNodes[0],T=s.childNodes[1];n.appendChild(a),w.setAttribute(`role`,`tab`);let D;C(()=>{let e=`tab ${o.value===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(D,t)||(D=t,w.setAttribute(`class`,t))}),M(P(e,w,`click`,()=>()=>{o.value=`preview`})),T.setAttribute(`role`,`tab`);let O;C(()=>{let e=`tab ${o.value===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(O,t)||(O=t,T.setAttribute(`class`,t))}),M(P(e,T,`click`,()=>()=>{o.value=`code`}));let N=W().content.cloneNode(!0),F=N.firstChild,I=F.childNodes[0],z=I.parentNode,B=F.childNodes[1],V=B.parentNode;n.appendChild(N),u(z,I,()=>{let e=o.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>m(e=>{let t=S(`div`,e);t.setAttribute(`class`,`card bg-base-100 shadow overflow-auto`);let n=S(`div`,t);return y(t,n),n.setAttribute(`class`,`card-body p-0`),r(n,R,()=>({className:`h-full`,lang:`tsx`,code:q})),[t,t]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>d(t=>{let n=b(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>d(e=>{let t=E();return[t.firstChild,t.lastChild]})}}),u(V,B,()=>{let e=o.value===`preview`;return e?{__rue_compiled_branch_key:!0,create:()=>m(e=>{let n=S(`div`,e);n.setAttribute(`class`,`card bg-base-100 shadow`);let a=S(`div`,n);y(n,a),a.setAttribute(`class`,`card-body gap-6`);let o=S(`div`,a);y(a,o),o.setAttribute(`class`,`join`);let s=A(`rue:list:end`);y(o,s);let u=[];j(()=>{let e=Object.keys(K)||[];u=x(o,s,u,e,(e,t)=>e,(e,n)=>{let r=p(e);return k((e,n,i)=>{let a=()=>m(e=>{let n=S(`button`,e),i;C(()=>{let e=`btn join-item ${c.value===r.get()?`btn-primary`:``}`,t=e===!1||e==null?``:String(e);Object.is(i,t)||(i=t,n.setAttribute(`class`,t))}),M(P(e,n,`click`,()=>()=>{c.value=r.get()}));let a=A(`rue:compiled-slot`);return y(n,a),t({parent:n,before:a},()=>L(G[r.get()]),()=>({})),[n,n]});return e==null?a():f(e,i,a)},(t,i)=>{e=t,n=i,r.set(t)},void 0)},!1,!1)}),M(()=>v(u)),r(a,J,()=>({activePanel:c,writeLog:_}));let w=S(`section`,a);y(a,w),w.setAttribute(`class`,`rounded-box bg-base-200 p-4`);let T=S(`h2`,w);y(w,T),T.setAttribute(`class`,`text-lg font-semibold`),y(T,b(`Deactivated 日志`));let D=S(`ul`,w);y(w,D),D.setAttribute(`class`,`mt-3 space-y-2 text-sm`),i(()=>{let e=l.value.length===0;return e?{__rue_compiled_branch_key:!0,create:()=>d(e=>{let t=S(`li`,e);return t.setAttribute(`class`,`opacity-60`),y(t,b(`切换面板后会出现日志。`)),[t,t]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>d(t=>{let n=b(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>d(e=>{let t=E();return[t.firstChild,t.lastChild]})}}).__rue_compiled_mount(D);let O=A(`rue:list:end`);y(D,O);let N=[];return j(()=>{let e=l.value||[];N=x(D,O,N,e,(e,t)=>`${e}:${t}`,(e,t)=>{let n=p(e);return k((e,t,r)=>{let i=()=>g(e=>{let t=S(`li`,e);t.setAttribute(`class`,`rounded-box bg-base-100 px-3 py-2`);let r=b(``);return y(t,r),h(r,()=>n.get()),[t,t]});return e==null?i():f(e,r,i)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),M(()=>v(N)),[n,n]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>d(t=>{let n=b(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>d(e=>{let t=E();return[t.firstChild,t.lastChild]})}});let Y=b(``),X=b(``);return n.insertBefore(Y,n.firstChild),n.appendChild(X),[n.firstChild,n.lastChild]});return e==null?s():f(e,a,s)}})))};export{Y as default};