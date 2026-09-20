import{Bt as e,Dt as t,F as n,H as r,Ht as i,I as a,Mt as o,Qt as s,T as c,U as l,Ut as u,V as d,Vt as f,Wt as p,Y as m,Z as h,_t as g,en as _,et as v,f as y,fn as b,gn as x,gt as S,h as C,hn as w,in as T,k as E,mn as D,p as O,pn as k,qt as A,sn as j,st as M,u as N,vt as P,yn as F,yt as I,zt as L}from"./rue-runtime-Cv6BZekS.js";import{t as R}from"./Code-BzFVdc3U.js";import{r as z}from"./SidebarPlaygroundExample-rFyhXfC_.js";var B=F(`<section class="rounded-box border border-info/25 bg-info/10 p-5"><div class="text-xs font-semibold uppercase opacity-60">EditorPanel</div><label class="form-control mt-4"><span class="label-text">草稿内容</span><!--rue:opaque-hole:0--></label></section>`),V=F(`<section class="rounded-box border border-success/25 bg-success/10 p-5"><div class="text-xs font-semibold uppercase opacity-60">CounterPanel</div><div class="mt-4 text-5xl font-semibold">rue:direct-text</div><button class="btn btn-success btn-sm mt-5">增加</button></section>`),H=F(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">onDeactivated()</h1>`),U=F(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),W=F(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),G={EditorPanel:`编辑器`,CounterPanel:`计数器`},K={EditorPanel:(e,n,r)=>{let i=P(S(e,`writeLog`)),[a,s]=v(`EditorPanel:hook:0`,`切到计数器后再回来，这段文字还在。`);return h(()=>{i.get()(`EditorPanel deactivated: "${a.get().slice(0,12)}"`)}),m(()=>l(p(e=>{let n=B().content.cloneNode(!0).firstChild,r=n.childNodes[1].childNodes[1],i=r.parentNode,c=w(`textarea`,i);b(i,c),i.insertBefore(c,r),t(c,`textarea textarea-bordered mt-2 min-h-28`),T(()=>{o(c,a.get())});let l=e=>{let t=e=>{s(e.target.value)};typeof t==`function`&&t(e)};return c.addEventListener(`input`,l),j(()=>c.removeEventListener(`input`,l)),[n,n]}),e=>_(()=>{i.set(e.writeLog)}),()=>g(e)))},CounterPanel:(e,t,n)=>{let r=P(S(e,`writeLog`)),[i,a]=v(`CounterPanel:hook:0`,0);return h(()=>{r.get()(`CounterPanel deactivated: count = ${i.get()}`)}),m(()=>l(p(e=>{let t=V().content.cloneNode(!0).firstChild,n=t.childNodes[2],r=t.childNodes[1].childNodes[0];return r.parentNode,n.setAttribute(`class`,`btn btn-success btn-sm mt-5`),j(N(e,n,`click`,()=>()=>{a(e=>e+1)})),s(r,()=>i.get()),[t,t]}),e=>_(()=>{r.set(e.writeLog)}),()=>g(e)))}},q=`import {
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
};`,J=(e,t,n)=>{let i=P(S(e,`activePanel`)),a=P(S(e,`writeLog`));return l(E(()=>({cacheKey:i.get().value,children:(e=>(t,n,i)=>{let o=()=>p(t=>{let n=D();r(n,c,()=>({is:e,writeLog:a.get()}));let i=x(``),o=x(``);return n.insertBefore(i,n.firstChild),n.appendChild(o),[n.firstChild,n.lastChild]});return t==null?o():f(t,i,o)})(K[i.get().value]),cacheName:`Component`})),e=>_(()=>{i.set(e.activePanel),a.set(e.writeLog)}),()=>g(e))},Y=(t,o,s)=>{let c=M(`preview`),l=M(`EditorPanel`),h=M([]),g=e=>{h.value=[`${new Date().toLocaleTimeString()}  ${e}`,...h.value].slice(0,6)};return m(()=>d(z,()=>({children:(t,o,s)=>{let d=()=>p(t=>{let o=D();o.appendChild(H().content.cloneNode(!0));let s=U().content.cloneNode(!0),d=s.firstChild,m=d.childNodes[0],_=d.childNodes[1];o.appendChild(s),m.setAttribute(`role`,`tab`);let v;T(()=>{let e=`tab ${c.value===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(v,t)||(v=t,m.setAttribute(`class`,t))}),j(N(t,m,`click`,()=>()=>{c.value=`preview`})),_.setAttribute(`role`,`tab`);let S;T(()=>{let e=`tab ${c.value===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(S,t)||(S=t,_.setAttribute(`class`,t))}),j(N(t,_,`click`,()=>()=>{c.value=`code`}));let E=W().content.cloneNode(!0),M=E.firstChild,F=M.childNodes[0],z=F.parentNode,B=M.childNodes[1],V=B.parentNode;o.appendChild(E),u(z,F,()=>{let e=c.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>p(e=>{let t=w(`div`,e);t.setAttribute(`class`,`card bg-base-100 shadow overflow-auto`);let n=w(`div`,t);return b(t,n),n.setAttribute(`class`,`card-body p-0`),r(n,R,()=>({className:`h-full`,lang:`tsx`,code:q})),[t,t]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>I(t=>{let n=x(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>I(e=>{let t=D();return[t.firstChild,t.lastChild]})}}),u(V,B,()=>{let t=c.value===`preview`;return t?{__rue_compiled_branch_key:!0,create:()=>p(t=>{let o=w(`div`,t);o.setAttribute(`class`,`card bg-base-100 shadow`);let s=w(`div`,o);b(o,s),s.setAttribute(`class`,`card-body gap-6`);let c=w(`div`,s);b(s,c),c.setAttribute(`class`,`join`);let u=k(`rue:list:end`);b(c,u);let d=[];A(()=>{let t=Object.keys(K)||[];d=C(c,u,d,t,(e,t)=>e,(t,n)=>{let r=P(t);return O((t,n,i)=>{let a=()=>p(t=>{let n=w(`button`,t),i;T(()=>{let e=`btn join-item ${l.value===r.get()?`btn-primary`:``}`,t=e===!1||e==null?``:String(e);Object.is(i,t)||(i=t,n.setAttribute(`class`,t))}),j(N(t,n,`click`,()=>()=>{l.value=r.get()}));let a=k(`rue:compiled-slot`);return b(n,a),e({parent:n,before:a},()=>L(G[r.get()]),()=>({})),[n,n]});return t==null?a():f(t,i,a)},(e,i)=>{t=e,n=i,r.set(e)},void 0)},!1,!1)}),j(()=>y(d)),r(s,J,()=>({activePanel:l,writeLog:g}));let m=w(`section`,s);b(s,m),m.setAttribute(`class`,`rounded-box bg-base-200 p-4`);let _=w(`h2`,m);b(m,_),_.setAttribute(`class`,`text-lg font-semibold`),b(_,x(`Deactivated 日志`));let v=w(`ul`,m);b(m,v),v.setAttribute(`class`,`mt-3 space-y-2 text-sm`),i(()=>{let e=h.value.length===0;return e?{__rue_compiled_branch_key:!0,create:()=>I(e=>{let t=w(`li`,e);return t.setAttribute(`class`,`opacity-60`),b(t,x(`切换面板后会出现日志。`)),[t,t]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>I(t=>{let n=x(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>I(e=>{let t=D();return[t.firstChild,t.lastChild]})}}).__rue_compiled_mount(v);let S=k(`rue:list:end`);b(v,S);let E=[];return A(()=>{let e=h.value||[];E=C(v,S,E,e,(e,t)=>`${e}:${t}`,(e,t)=>{let r=P(e);return O((e,t,i)=>{let o=()=>n(e=>{let t=w(`li`,e);t.setAttribute(`class`,`rounded-box bg-base-100 px-3 py-2`);let n=x(``);return b(t,n),a(n,()=>r.get()),[t,t]});return e==null?o():f(e,i,o)},(n,i)=>{e=n,t=i,r.set(n)},void 0)},!1,!1)}),j(()=>y(E)),[o,o]})}:typeof t==`number`||typeof t==`bigint`?{__rue_compiled_branch_key:t,create:()=>I(e=>{let n=x(typeof t==`string`||typeof t==`number`||typeof t==`bigint`?t:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>I(e=>{let t=D();return[t.firstChild,t.lastChild]})}});let Y=x(``),X=x(``);return o.insertBefore(Y,o.firstChild),o.appendChild(X),[o.firstChild,o.lastChild]});return t==null?d():f(t,s,d)}})))};export{Y as default};