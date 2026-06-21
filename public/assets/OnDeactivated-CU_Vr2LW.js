import{$t as e,J as t,Jt as n,Q as r,T as i,Z as a,_t as o,an as s,dt as c,et as l,in as u,it as d,l as f,lt as p,nt as m,o as h,rt as g,t as _,tt as v,vt as y,zt as b}from"./vapor-runtime-DsQWl-IB.js";import{a as x,n as S}from"./vapor-helpers-vapor-Dg64FcpK.js";import{i as C}from"./persistentSidebarPlayground-6jqnvaEa.js";import{t as w}from"./KeepAlive-zJaZ_QxY.js";import{t as T}from"./Code-4SUSUwRg.js";import{r as E}from"./SidebarPlaygroundExample-BEWYUWOl.js";var D={EditorPanel:`编辑器`,CounterPanel:`计数器`},O={EditorPanel:e=>{let{text:t,setText:n}=x(`useSetup:0:0`,()=>u(()=>{let[t,n]=x(`useState:1:0`,()=>s(`切到计数器后再回来，这段文字还在。`));return i(()=>{e.writeLog(`EditorPanel deactivated: "${t.value.slice(0,12)}"`)}),{text:t,setText:n}}));return f(e=>{let i=m(`section`,e);c(i,`rounded-box border border-info/25 bg-info/10 p-5`);let s=m(`div`,i);r(i,s),c(s,`text-xs font-semibold uppercase opacity-60`),r(s,g(`EditorPanel`));let l=m(`label`,i);r(i,l),c(l,`form-control mt-4`);let u=m(`span`,l);r(l,u),c(u,`label-text`),r(u,g(`草稿内容`));let d=m(`textarea`,l);return r(l,d),c(d,`textarea textarea-bordered mt-2 min-h-28`),b(()=>{o(d,t.value)}),a(d,`input`,e=>{n(e.target.value)}),i})},CounterPanel:e=>{let{count:t,setCount:n}=x(`useSetup:0:0:dup1`,()=>u(()=>{let[t,n]=x(`useState:1:1`,()=>s(0));return i(()=>{e.writeLog(`CounterPanel deactivated: count = ${t.value}`)}),{count:t,setCount:n}}));return f(e=>{let i=m(`section`,e);c(i,`rounded-box border border-success/25 bg-success/10 p-5`);let o=m(`div`,i);r(i,o),c(o,`text-xs font-semibold uppercase opacity-60`),r(o,g(`CounterPanel`));let s=m(`div`,i);r(i,s),c(s,`mt-4 text-5xl font-semibold`);let l=d(s);r(s,l),b(()=>{y(l,t.value)});let u=m(`button`,i);return r(i,u),c(u,`btn btn-success btn-sm mt-5`),a(u,`click`,()=>{n(e=>{e.value+=1})}),r(u,g(`增加`)),i})}},k=`import {
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
};`,A=e=>f(()=>{let n=document.createDocumentFragment(),r=document.createComment(`on-deactivated-anchor`);return n.appendChild(r),x(`watchEffect:1:2`,()=>b(()=>{h(C(w,{children:C(t,{is:O[e.activePanel.value],writeLog:e.writeLog},e.activePanel.value)}),n,r)})),n}),j=()=>{let{activeTab:t,activePanel:i,logs:o,writeLog:s}=x(`useSetup:0:0:dup2`,()=>u(()=>{let e=x(`ref:1:3`,()=>n(`preview`)),t=x(`ref:1:4`,()=>n(`EditorPanel`)),r=x(`ref:1:5`,()=>n([]));return{activeTab:e,activePanel:t,logs:r,writeLog:e=>{r.value=[`${new Date().toLocaleTimeString()}  ${e}`,...r.value].slice(0,6)}}}));return f(n=>{let u=v(),x=l(`rue:component:anchor`);return r(u,x),h(_(E,{children:f(()=>{let n=v(),u=m(`h1`,n);r(n,u),c(u,`text-5xl font-semibold mb-4 md:mb-4`),r(u,g(`onDeactivated()`));let x=m(`div`,n);r(n,x),p(x,`role`,`tablist`),c(x,`tabs tabs-box`);let C=m(`button`,x);r(x,C),p(C,`role`,`tab`),b(()=>{c(C,`tab ${t.value===`preview`?`tab-active`:``}`)}),a(C,`click`,()=>{t.value=`preview`}),r(C,g(`效果`));let w=m(`button`,x);r(x,w),p(w,`role`,`tab`),b(()=>{c(w,`tab ${t.value===`code`?`tab-active`:``}`)}),a(w,`click`,()=>{t.value=`code`}),r(w,g(`代码`));let E=m(`div`,n);r(n,E),c(E,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let j=l(`rue:slot:anchor`);r(E,j),b(()=>{let n=t.value===`code`?f(()=>{let t=v(),n=m(`div`,t);r(t,n),c(n,`card bg-base-100 shadow overflow-auto`);let i=m(`div`,n);r(n,i),c(i,`card-body p-0`);let a=l(`rue:component:anchor`);return r(i,a),b(()=>{let t=_(T,{className:`h-full`,lang:`tsx`,code:k});e(()=>h(t,i,a))}),t}):``;e(()=>h(n,E,j))}),r(E,g(` `));let M=l(`rue:slot:anchor`);return r(E,M),b(()=>{let n=t.value===`preview`?f(()=>{let t=v(),n=m(`div`,t);r(t,n),c(n,`card bg-base-100 shadow`);let u=m(`div`,n);r(n,u),c(u,`card-body gap-6`);let x=m(`div`,u);r(u,x),c(x,`join`);let C=l(`rue:list:start`),w=l(`rue:list:end`);r(x,C),r(x,w);let T=new Map;b(()=>{T=S({items:Object.keys(O)||[],getKey:(e,t)=>e,elements:T,parent:x,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,n,o,s,u)=>{h(f(()=>{let n=v(),o=m(`button`,n);r(n,o),b(()=>{c(o,`btn join-item ${i.value===t?`btn-primary`:``}`)}),a(o,`click`,()=>{i.value=t}),b(()=>{p(o,`key`,String(t))});let s=l(`rue:slot:anchor`);return r(o,s),b(()=>{let n=D[t];e(()=>h(n,o,s))}),n}),n,o)}})});let E=l(`rue:component:anchor`);r(u,E),b(()=>{let t=_(A,{activePanel:i,writeLog:s});e(()=>h(t,u,E))});let k=m(`section`,u);r(u,k),c(k,`rounded-box bg-base-200 p-4`);let j=m(`h2`,k);r(k,j),c(j,`text-lg font-semibold`),r(j,g(`Deactivated 日志`));let M=m(`ul`,k);r(k,M),c(M,`mt-3 space-y-2 text-sm`);let N=l(`rue:slot:anchor`);r(M,N),b(()=>{let t=o.value.length===0?f(()=>{let e=v(),t=m(`li`,e);return r(e,t),c(t,`opacity-60`),r(t,g(`切换面板后会出现日志。`)),e}):``;e(()=>h(t,M,N))}),r(M,g(` `));let P=l(`rue:list:start`),F=l(`rue:list:end`);r(M,P),r(M,F);let I=new Map;return b(()=>{I=S({items:o.value||[],getKey:(e,t)=>e,elements:I,parent:M,before:F,singleRoot:!0,trackIndex:!1,start:P,renderItem:(e,t,n,i,a)=>{h(f(()=>{let t=v(),n=m(`li`,t);r(t,n),c(n,`rounded-box bg-base-100 px-3 py-2`),b(()=>{p(n,`key`,String(e))});let i=d(n);return r(n,i),b(()=>{y(i,e)}),t}),t,n)}})}),t}):``;e(()=>h(n,E,M))}),n})}),u,x),u})};export{j as default};