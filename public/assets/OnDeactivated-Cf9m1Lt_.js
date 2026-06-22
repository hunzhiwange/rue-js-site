import{J as e,Q as t,T as n,Vt as r,Xt as i,Z as a,at as o,bt as s,dt as c,it as l,l as u,nt as d,o as f,on as p,pt as m,rt as h,sn as g,t as _,tn as v,tt as y,yt as b}from"./vapor-runtime-x7F5M-49.js";import{a as x,n as S}from"./vapor-helpers-vapor-D1LP4JjK.js";import{a as C}from"./persistentSidebarPlayground-Cl_JMYk5.js";import{t as w}from"./KeepAlive-CPK-kywO.js";import{t as T}from"./Code-C5NjdoiC.js";import{r as E}from"./SidebarPlaygroundExample-DpItFif-.js";var D={EditorPanel:`编辑器`,CounterPanel:`计数器`},O={EditorPanel:e=>{let{text:i,setText:o}=x(`useSetup:0:0`,()=>p(()=>{let[t,r]=x(`useState:1:0`,()=>g(`切到计数器后再回来，这段文字还在。`));return n(()=>{e.writeLog(`EditorPanel deactivated: "${t.value.slice(0,12)}"`)}),{text:t,setText:r}}));return u(e=>{let n=h(`section`,e);m(n,`rounded-box border border-info/25 bg-info/10 p-5`);let s=h(`div`,n);t(n,s),m(s,`text-xs font-semibold uppercase opacity-60`),t(s,l(`EditorPanel`));let c=h(`label`,n);t(n,c),m(c,`form-control mt-4`);let u=h(`span`,c);t(c,u),m(u,`label-text`),t(u,l(`草稿内容`));let d=h(`textarea`,c);return t(c,d),m(d,`textarea textarea-bordered mt-2 min-h-28`),r(()=>{b(d,i.value)}),a(d,`input`,e=>{o(e.target.value)}),n})},CounterPanel:e=>{let{count:i,setCount:c}=x(`useSetup:0:0:dup1`,()=>p(()=>{let[t,r]=x(`useState:1:1`,()=>g(0));return n(()=>{e.writeLog(`CounterPanel deactivated: count = ${t.value}`)}),{count:t,setCount:r}}));return u(e=>{let n=h(`section`,e);m(n,`rounded-box border border-success/25 bg-success/10 p-5`);let u=h(`div`,n);t(n,u),m(u,`text-xs font-semibold uppercase opacity-60`),t(u,l(`CounterPanel`));let d=h(`div`,n);t(n,d),m(d,`mt-4 text-5xl font-semibold`);let f=o(d);t(d,f),r(()=>{s(f,i.value)});let p=h(`button`,n);return t(n,p),m(p,`btn btn-success btn-sm mt-5`),a(p,`click`,()=>{c(e=>{e.value+=1})}),t(p,l(`增加`)),n})}},k=`import {
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
};`,A=t=>u(()=>{let n=document.createDocumentFragment(),i=document.createComment(`on-deactivated-anchor`);return n.appendChild(i),x(`watchEffect:1:2`,()=>r(()=>{f(C(w,{children:C(e,{is:O[t.activePanel.value],writeLog:t.writeLog},t.activePanel.value)}),n,i)})),n}),j=()=>{let{activeTab:e,activePanel:n,logs:g,writeLog:b}=x(`useSetup:0:0:dup2`,()=>p(()=>{let e=x(`ref:1:3`,()=>i(`preview`)),t=x(`ref:1:4`,()=>i(`EditorPanel`)),n=x(`ref:1:5`,()=>i([]));return{activeTab:e,activePanel:t,logs:n,writeLog:e=>{n.value=[`${new Date().toLocaleTimeString()}  ${e}`,...n.value].slice(0,6)}}}));return u(i=>{let p=d(),x=y(`rue:component:anchor`);return t(p,x),f(_(E,{children:u(()=>{let i=d(),p=h(`h1`,i);t(i,p),m(p,`text-5xl font-semibold mb-4 md:mb-4`),t(p,l(`onDeactivated()`));let x=h(`div`,i);t(i,x),c(x,`role`,`tablist`),m(x,`tabs tabs-box`);let C=h(`button`,x);t(x,C),c(C,`role`,`tab`),r(()=>{m(C,`tab ${e.value===`preview`?`tab-active`:``}`)}),a(C,`click`,()=>{e.value=`preview`}),t(C,l(`效果`));let w=h(`button`,x);t(x,w),c(w,`role`,`tab`),r(()=>{m(w,`tab ${e.value===`code`?`tab-active`:``}`)}),a(w,`click`,()=>{e.value=`code`}),t(w,l(`代码`));let E=h(`div`,i);t(i,E),m(E,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let j=y(`rue:slot:anchor`);t(E,j),r(()=>{let n=e.value===`code`?u(()=>{let e=d(),n=h(`div`,e);t(e,n),m(n,`card bg-base-100 shadow overflow-auto`);let i=h(`div`,n);t(n,i),m(i,`card-body p-0`);let a=y(`rue:component:anchor`);return t(i,a),r(()=>{let e=_(T,{className:`h-full`,lang:`tsx`,code:k});v(()=>f(e,i,a))}),e}):``;v(()=>f(n,E,j))}),t(E,l(` `));let M=y(`rue:slot:anchor`);return t(E,M),r(()=>{let i=e.value===`preview`?u(()=>{let e=d(),i=h(`div`,e);t(e,i),m(i,`card bg-base-100 shadow`);let p=h(`div`,i);t(i,p),m(p,`card-body gap-6`);let x=h(`div`,p);t(p,x),m(x,`join`);let C=y(`rue:list:start`),w=y(`rue:list:end`);t(x,C),t(x,w);let T=new Map;r(()=>{T=S({items:Object.keys(O)||[],getKey:(e,t)=>e,elements:T,parent:x,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,i,o,s,l)=>{f(u(()=>{let i=d(),o=h(`button`,i);t(i,o),r(()=>{m(o,`btn join-item ${n.value===e?`btn-primary`:``}`)}),a(o,`click`,()=>{n.value=e}),r(()=>{c(o,`key`,String(e))});let s=y(`rue:slot:anchor`);return t(o,s),r(()=>{let t=D[e];v(()=>f(t,o,s))}),i}),i,o)}})});let E=y(`rue:component:anchor`);t(p,E),r(()=>{let e=_(A,{activePanel:n,writeLog:b});v(()=>f(e,p,E))});let k=h(`section`,p);t(p,k),m(k,`rounded-box bg-base-200 p-4`);let j=h(`h2`,k);t(k,j),m(j,`text-lg font-semibold`),t(j,l(`Deactivated 日志`));let M=h(`ul`,k);t(k,M),m(M,`mt-3 space-y-2 text-sm`);let N=y(`rue:slot:anchor`);t(M,N),r(()=>{let e=g.value.length===0?u(()=>{let e=d(),n=h(`li`,e);return t(e,n),m(n,`opacity-60`),t(n,l(`切换面板后会出现日志。`)),e}):``;v(()=>f(e,M,N))}),t(M,l(` `));let P=y(`rue:list:start`),F=y(`rue:list:end`);t(M,P),t(M,F);let I=new Map;return r(()=>{I=S({items:g.value||[],getKey:(e,t)=>e,elements:I,parent:M,before:F,singleRoot:!0,trackIndex:!1,start:P,renderItem:(e,n,i,a,l)=>{f(u(()=>{let n=d(),i=h(`li`,n);t(n,i),m(i,`rounded-box bg-base-100 px-3 py-2`),r(()=>{c(i,`key`,String(e))});let a=o(i);return t(i,a),r(()=>{s(a,e)}),n}),n,i)}})}),e}):``;v(()=>f(i,E,M))}),i})}),p,x),p})};export{j as default};