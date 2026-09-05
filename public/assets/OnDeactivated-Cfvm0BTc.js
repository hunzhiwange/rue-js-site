import{B as e,Bt as t,C as n,Dn as r,Et as i,Ft as a,H as o,K as s,L as c,Lt as l,Mt as u,S as d,V as f,W as p,X as m,Y as h,_n as g,_t as _,bn as v,fn as y,ft as b,gn as x,hn as S,ht as C,jt as w,kn as T,l as E,m as D,nt as O,ot as k,pn as A,q as j,rt as M,wn as N,x as P,z as F}from"./rue-runtime-CwEGJ854.js";import{t as I}from"./Code-B3jCYMAr.js";import{r as L}from"./SidebarPlaygroundExample-EGR0CyDT.js";var R=g(`<section class="rounded-box border border-info/25 bg-info/10 p-5"><div class="text-xs font-semibold uppercase opacity-60">EditorPanel</div><label class="form-control mt-4"><span class="label-text">草稿内容</span><!--rue:opaque-hole:0--></label></section>`),z=g(`<section class="rounded-box border border-success/25 bg-success/10 p-5"><div class="text-xs font-semibold uppercase opacity-60">CounterPanel</div><div class="mt-4 text-5xl font-semibold"><!--rue:text-hole:0--></div><button class="btn btn-success btn-sm mt-5">增加</button></section>`),B=g(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">onDeactivated()</h1>`),V=g(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),H=g(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),U={EditorPanel:`编辑器`,CounterPanel:`计数器`},W={EditorPanel:e=>{let t=p(e.writeLog),[n,r]=w(`EditorPanel:hook:0`,`切到计数器后再回来，这段文字还在。`);return a(()=>{t.get()(`EditorPanel deactivated: "${n.value.slice(0,12)}"`)}),u(()=>j(C(()=>{let e=O(),t=R().content.cloneNode(!0),i=t.firstChild.childNodes[1].childNodes[1],a=i.parentNode;e.appendChild(t);let o=M(`textarea`,a);m(a,o),a.insertBefore(o,i),c(o,`textarea textarea-bordered mt-2 min-h-28`),N(()=>{b(o,n.value)});let s=e=>{let t=e=>{r(e.target.value)};typeof t==`function`&&t(e)};return o.addEventListener(`input`,s),l(()=>o.removeEventListener(`input`,s)),e},!0),e=>F(()=>{t.set(e.writeLog)}),()=>e))},CounterPanel:e=>{let t=p(e.writeLog),[n,o]=w(`CounterPanel:hook:0`,0);return a(()=>{t.get()(`CounterPanel deactivated: count = ${n.value}`)}),u(()=>j(i(Object.assign(e=>{let t=z().content.cloneNode(!0).firstChild,i=t.childNodes[2],a=t.childNodes[1].childNodes[0],s=a.parentNode;i.className=`btn btn-success btn-sm mt-5`;let c=e=>{let t=()=>{o(e=>{e.value+=1})};typeof t==`function`&&t(e)};i.addEventListener(`click`,c),r(()=>i.removeEventListener(`click`,c));let l=x(``);return s.insertBefore(l,a),s.removeChild(a),v(l,()=>n.value),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),e=>F(()=>{t.set(e.writeLog)}),()=>e))}},G=`import {
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
    props.writeLog(\`EditorPanel deactivated: "\${text.value}"\`);
  });

  return (
    <textarea
      value={text.value}
      onInput={(event: Event) => {
        setText((event.target as HTMLTextAreaElement).value);
      }}
    />
  );
};

const CounterPanel: FC<{ writeLog: (message: string) => void }> = props => {
  const [count, setCount] = useState(0);

  onDeactivated(() => {
    props.writeLog(\`CounterPanel deactivated: count = \${count.value}\`);
  });

  return (
    <button onClick={() => setCount(value => { value.value += 1 })}>
      count: {count.value}
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
};`,K=e=>{let t=p(e.activePanel),n=p(e.writeLog);return j((()=>{let e=_(E,()=>({is:W[t.get().value],key:t.get().value,writeLog:n.get()}));return _(D,()=>({cacheKey:t.get().value,cacheName:W[t.get().value].name,children:e}))})(),e=>F(()=>{t.set(e.activePanel),n.set(e.writeLog)}),()=>e)},q=()=>{let a=t(`preview`),m=t(`EditorPanel`),g=t([]),_=e=>{g.value=[`${new Date().toLocaleTimeString()}  ${e}`,...g.value].slice(0,6)};return u(()=>j(o(L,()=>({children:[(e,t,n)=>P(e,n,()=>i(Object.assign(e=>{let t=O();return t.appendChild(B().content.cloneNode(!0)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,n)=>P(e,n,()=>i(Object.assign(e=>{let t=O(),n=V().content.cloneNode(!0),r=n.firstChild,i=r.childNodes[0],o=r.childNodes[1];t.appendChild(n),k(i,`role`,`tab`),N(()=>{c(i,`tab ${a.value===`preview`?`tab-active`:``}`)});let s=e=>{let t=()=>{a.value=`preview`};typeof t==`function`&&t(e)};i.addEventListener(`click`,s),l(()=>i.removeEventListener(`click`,s)),k(o,`role`,`tab`),N(()=>{c(o,`tab ${a.value===`code`?`tab-active`:``}`)});let u=e=>{let t=()=>{a.value=`code`};typeof t==`function`&&t(e)};return o.addEventListener(`click`,u),l(()=>o.removeEventListener(`click`,u)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,o,c)=>P(t,c,()=>i(Object.assign(t=>{let o=O(),c=H().content.cloneNode(!0),l=c.firstChild,u=l.childNodes[0],b=u.parentNode,C=l.childNodes[1],w=C.parentNode;return o.appendChild(c),f(b,u,()=>{let e=a.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>i(Object.assign(e=>{let t=S(`div`,e);t.className=`card bg-base-100 shadow overflow-auto`;let n=S(`div`,t);return y(t,n),n.className=`card-body p-0`,s(n,I,()=>({className:`h-full`,lang:`tsx`,code:G})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>i(Object.assign(t=>{let n=x(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>i(Object.assign(e=>{let t=O();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),f(w,C,()=>{let t=a.value===`preview`;return t?{__rue_compiled_branch_key:!0,create:()=>i(Object.assign(t=>{let a=S(`div`,t);a.className=`card bg-base-100 shadow`;let o=S(`div`,a);y(a,o),o.className=`card-body gap-6`;let c=S(`div`,o);y(o,c),c.className=`join`;let l=A(`rue:list:end`);y(c,l);let u=[];N(()=>{let e=Object.keys(W)||[];u=n(c,l,u,e,(e,t)=>e,(e,t)=>{let n=p(e),a=p(t);return d((e,t,a)=>P(e,a,()=>i(Object.assign(e=>{let t=S(`button`,e),i;N(()=>{let e=`btn join-item ${m.value===n.get()?`btn-primary`:``}`,r=e==null?``:String(e);Object.is(i,r)||(i=r,t.className=r)});let a=e=>{let t=()=>{m.value=n.get()};typeof t==`function`&&t(e)};t.addEventListener(`click`,a),r(()=>t.removeEventListener(`click`,a));let o=A(`rue:compiled-slot`);return y(t,o),N(()=>{let e=U[n.get()];T(()=>h(e,t,o))}),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(r,i)=>{e=r,t=i,n.set(r),a.set(i)})})}),s(o,K,()=>({activePanel:m,writeLog:_}));let f=S(`section`,o);y(o,f),f.className=`rounded-box bg-base-200 p-4`;let b=S(`h2`,f);y(f,b),b.className=`text-lg font-semibold`,y(b,x(`Deactivated 日志`));let C=S(`ul`,f);y(f,C),C.className=`mt-3 space-y-2 text-sm`,e(()=>{let e=g.value.length===0;return e?{__rue_compiled_branch_key:!0,create:()=>i(Object.assign(e=>{let t=S(`li`,e);return t.className=`opacity-60`,y(t,x(`切换面板后会出现日志。`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>i(Object.assign(t=>{let n=x(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>i(Object.assign(e=>{let t=O();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}).__rue_compiled_mount(C);let w=A(`rue:list:end`);y(C,w);let E=[];return N(()=>{let e=g.value||[];E=n(C,w,E,e,(e,t)=>`${e}:${t}`,(e,t)=>{let n=p(e),r=p(t);return d((e,t,r)=>P(e,r,()=>i(Object.assign(e=>{let t=S(`li`,e);t.className=`rounded-box bg-base-100 px-3 py-2`;let r=x(``);return y(t,r),v(r,()=>n.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(i,a)=>{e=i,t=a,n.set(i),r.set(a)})})}),{__rue_compiled_host:a,__rue_compiled_roots:[a]}},{__rue_compiled_explicit_roots:!0}))}:typeof t==`number`||typeof t==`bigint`?{__rue_compiled_branch_key:t,create:()=>i(Object.assign(e=>{let n=x(typeof t==`string`||typeof t==`number`||typeof t==`bigint`?t:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>i(Object.assign(e=>{let t=O();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),{__rue_compiled_host:o,__rue_compiled_roots:[o]}},{__rue_compiled_explicit_roots:!0})))]})),e=>F(()=>{})))};export{q as default};