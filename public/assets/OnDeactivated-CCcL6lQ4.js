import{At as e,C as t,Dn as n,Dt as r,E as i,Kt as a,Mt as o,Q as s,Qt as c,Vt as l,Xt as u,_n as d,_t as f,at as p,b as m,ct as h,dt as g,et as _,f as v,gn as y,kn as b,mn as x,nt as S,pn as C,qt as w,rt as T,st as E,tn as D,tt as O,ut as k,v as A,vn as j,vt as M,w as N,wn as P,xn as F,xt as I}from"./rue-runtime-HIMg8Lz8.js";import{t as L}from"./Code-DpH7u0gk.js";import{r as R}from"./SidebarPlaygroundExample-BCPRe0hA.js";var z=j(`<section class="rounded-box border border-info/25 bg-info/10 p-5"><div class="text-xs font-semibold uppercase opacity-60">EditorPanel</div><label class="form-control mt-4"><span class="label-text">草稿内容</span><!--rue:opaque-hole:0--></label></section>`),B=j(`<section class="rounded-box border border-success/25 bg-success/10 p-5"><div class="text-xs font-semibold uppercase opacity-60">CounterPanel</div><div class="mt-4 text-5xl font-semibold"><!--rue:text-hole:0--></div><button class="btn btn-success btn-sm mt-5">增加</button></section>`),V=j(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">onDeactivated()</h1>`),H=j(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),U=j(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),W={EditorPanel:`编辑器`,CounterPanel:`计数器`},G={EditorPanel:t=>{let n=p(t.writeLog),[i,o]=a(`EditorPanel:hook:0`,`切到计数器后再回来，这段文字还在。`);return u(()=>{n.get()(`EditorPanel deactivated: "${i.get().slice(0,12)}"`)}),w(()=>h(e(()=>{let e=f(),t=z().content.cloneNode(!0),n=t.firstChild.childNodes[1].childNodes[1],a=n.parentNode;e.appendChild(t);let l=M(`textarea`,a);g(a,l),a.insertBefore(l,n),s(l,`textarea textarea-bordered mt-2 min-h-28`),P(()=>{r(l,i.get())});let u=e=>{let t=e=>{o(e.target.value)};typeof t==`function`&&t(e)};return l.addEventListener(`input`,u),c(()=>l.removeEventListener(`input`,u)),e},!0),e=>_(()=>{n.set(e.writeLog)}),()=>t))},CounterPanel:e=>{let t=p(e.writeLog),[r,i]=a(`CounterPanel:hook:0`,0);return u(()=>{t.get()(`CounterPanel deactivated: count = ${r.get()}`)}),w(()=>h(l(Object.assign(e=>{let t=B().content.cloneNode(!0).firstChild,a=t.childNodes[2],o=t.childNodes[1].childNodes[0],s=o.parentNode;a.className=`btn btn-success btn-sm mt-5`;let c=e=>{let t=()=>{i(e=>e+1)};typeof t==`function`&&t(e)};a.addEventListener(`click`,c),n(()=>a.removeEventListener(`click`,c));let l=d(``);return s.insertBefore(l,o),s.removeChild(o),F(l,()=>r.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),e=>_(()=>{t.set(e.writeLog)}),()=>e))}},K=`import {
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
};`,q=e=>{let t=p(e.activePanel),n=p(e.writeLog);return h((()=>{let e=o(A,()=>({is:G[t.get().value],key:t.get().value,writeLog:n.get()}));return o(v,()=>({cacheKey:t.get().value,cacheName:G[t.get().value].name,children:e}))})(),e=>_(()=>{t.set(e.activePanel),n.set(e.writeLog)}),()=>e)},J=()=>{let e=D(`preview`),r=D(`EditorPanel`),a=D([]),o=e=>{a.value=[`${new Date().toLocaleTimeString()}  ${e}`,...a.value].slice(0,6)};return w(()=>h(T(R,()=>({children:[(e,t,n)=>i(e,n,()=>l(Object.assign(e=>{let t=f();return t.appendChild(V().content.cloneNode(!0)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,n,r)=>i(t,r,()=>l(Object.assign(t=>{let n=f(),r=H().content.cloneNode(!0),i=r.firstChild,a=i.childNodes[0],o=i.childNodes[1];n.appendChild(r),I(a,`role`,`tab`),P(()=>{s(a,`tab ${e.value===`preview`?`tab-active`:``}`)});let l=t=>{let n=()=>{e.value=`preview`};typeof n==`function`&&n(t)};a.addEventListener(`click`,l),c(()=>a.removeEventListener(`click`,l)),I(o,`role`,`tab`),P(()=>{s(o,`tab ${e.value===`code`?`tab-active`:``}`)});let u=t=>{let n=()=>{e.value=`code`};typeof n==`function`&&n(t)};return o.addEventListener(`click`,u),c(()=>o.removeEventListener(`click`,u)),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))),(s,c,u)=>i(s,u,()=>l(Object.assign(s=>{let c=f(),u=U().content.cloneNode(!0),h=u.firstChild,g=h.childNodes[0],_=g.parentNode,v=h.childNodes[1],w=v.parentNode;return c.appendChild(u),S(_,g,()=>{let t=e.value===`code`;return t?{__rue_compiled_branch_key:!0,create:()=>l(Object.assign(e=>{let t=y(`div`,e);t.className=`card bg-base-100 shadow overflow-auto`;let n=y(`div`,t);return C(t,n),n.className=`card-body p-0`,E(n,L,()=>({className:`h-full`,lang:`tsx`,code:K})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof t==`number`||typeof t==`bigint`?{__rue_compiled_branch_key:t,create:()=>l(Object.assign(e=>{let n=d(typeof t==`string`||typeof t==`number`||typeof t==`bigint`?t:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>l(Object.assign(e=>{let t=f();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),S(w,v,()=>{let s=e.value===`preview`;return s?{__rue_compiled_branch_key:!0,create:()=>l(Object.assign(e=>{let s=y(`div`,e);s.className=`card bg-base-100 shadow`;let c=y(`div`,s);C(s,c),c.className=`card-body gap-6`;let u=y(`div`,c);C(c,u),u.className=`join`;let h=x(`rue:list:end`);C(u,h);let g=[];P(()=>{let e=Object.keys(G)||[];g=N(u,h,g,e,(e,t)=>e,(e,a)=>{let o=p(e);return t((e,t,a)=>i(e,a,()=>l(Object.assign(e=>{let t=y(`button`,e),i;P(()=>{let e=`btn join-item ${r.value===o.get()?`btn-primary`:``}`,n=e==null?``:String(e);Object.is(i,n)||(i=n,t.className=n)});let a=e=>{let t=()=>{r.value=o.get()};typeof t==`function`&&t(e)};t.addEventListener(`click`,a),n(()=>t.removeEventListener(`click`,a));let s=x(`rue:compiled-slot`);return C(t,s),P(()=>{let e=W[o.get()];b(()=>k(e,t,s))}),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,n)=>{e=t,a=n,o.set(t)})})}),n(()=>m(g)),E(c,q,()=>({activePanel:r,writeLog:o}));let _=y(`section`,c);C(c,_),_.className=`rounded-box bg-base-200 p-4`;let v=y(`h2`,_);C(_,v),v.className=`text-lg font-semibold`,C(v,d(`Deactivated 日志`));let S=y(`ul`,_);C(_,S),S.className=`mt-3 space-y-2 text-sm`,O(()=>{let e=a.value.length===0;return e?{__rue_compiled_branch_key:!0,create:()=>l(Object.assign(e=>{let t=y(`li`,e);return t.className=`opacity-60`,C(t,d(`切换面板后会出现日志。`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>l(Object.assign(t=>{let n=d(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>l(Object.assign(e=>{let t=f();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}).__rue_compiled_mount(S);let w=x(`rue:list:end`);C(S,w);let T=[];return P(()=>{let e=a.value||[];T=N(S,w,T,e,(e,t)=>`${e}:${t}`,(e,n)=>{let r=p(e);return t((e,t,n)=>i(e,n,()=>l(Object.assign(e=>{let t=y(`li`,e);t.className=`rounded-box bg-base-100 px-3 py-2`;let n=d(``);return C(t,n),F(n,()=>r.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,i)=>{e=t,n=i,r.set(t)})})}),n(()=>m(T)),{__rue_compiled_host:s,__rue_compiled_roots:[s]}},{__rue_compiled_explicit_roots:!0}))}:typeof s==`number`||typeof s==`bigint`?{__rue_compiled_branch_key:s,create:()=>l(Object.assign(e=>{let t=d(typeof s==`string`||typeof s==`number`||typeof s==`bigint`?s:``);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>l(Object.assign(e=>{let t=f();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),{__rue_compiled_host:c,__rue_compiled_roots:[c]}},{__rue_compiled_explicit_roots:!0})))]})),e=>_(()=>{})))};export{J as default};