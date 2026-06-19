import{$ as e,K as t,Q as n,Qt as r,Wt as i,X as a,Xt as o,Y as s,Yt as c,et as l,ht as u,l as d,lt as f,mt as p,nt as m,o as h,st as g,t as _,tt as v,w as y,zt as b}from"./vapor-runtime-CXIalONM.js";import{a as x,n as S}from"./vapor-helpers-vapor-CoXKrGmY.js";import{i as C}from"./persistentSidebarPlayground-DBDp2zjv.js";import{t as w}from"./KeepAlive-Da7RpvkH.js";import{t as T}from"./Code-BIscIyEp.js";import{r as E}from"./SidebarPlaygroundExample-CEz1fABX.js";var D={EditorPanel:`编辑器`,CounterPanel:`计数器`},O={EditorPanel:e=>{let{text:t,setText:n}=x(`useSetup:0:0`,()=>c(()=>{let[t,n]=x(`useState:1:0`,()=>o(`切到计数器后再回来，这段文字还在。`));return y(()=>{e.writeLog(`EditorPanel deactivated: "${t.value.slice(0,12)}"`)}),{text:t,setText:n}}));return d(e=>{let i=l(`section`,e);f(i,`rounded-box border border-info/25 bg-info/10 p-5`);let o=l(`div`,i);a(i,o),f(o,`text-xs font-semibold uppercase opacity-60`),a(o,v(`EditorPanel`));let c=l(`label`,i);a(i,c),f(c,`form-control mt-4`);let u=l(`span`,c);a(c,u),f(u,`label-text`),a(u,v(`草稿内容`));let d=l(`textarea`,c);return a(c,d),f(d,`textarea textarea-bordered mt-2 min-h-28`),r(()=>{p(d,t.value)}),s(d,`input`,e=>{n(e.target.value)}),i})},CounterPanel:e=>{let{count:t,setCount:n}=x(`useSetup:0:0:dup1`,()=>c(()=>{let[t,n]=x(`useState:1:1`,()=>o(0));return y(()=>{e.writeLog(`CounterPanel deactivated: count = ${t.value}`)}),{count:t,setCount:n}}));return d(e=>{let i=l(`section`,e);f(i,`rounded-box border border-success/25 bg-success/10 p-5`);let o=l(`div`,i);a(i,o),f(o,`text-xs font-semibold uppercase opacity-60`),a(o,v(`CounterPanel`));let c=l(`div`,i);a(i,c),f(c,`mt-4 text-5xl font-semibold`);let d=m(c);a(c,d),r(()=>{u(d,t.value)});let p=l(`button`,i);return a(i,p),f(p,`btn btn-success btn-sm mt-5`),s(p,`click`,()=>{n(e=>{e.value+=1})}),a(p,v(`增加`)),i})}},k=`import {
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
};`,A=e=>d(()=>{let n=document.createDocumentFragment(),i=document.createComment(`on-deactivated-anchor`);return n.appendChild(i),x(`watchEffect:1:2`,()=>r(()=>{h(C(w,{children:C(t,{is:O[e.activePanel.value],writeLog:e.writeLog},e.activePanel.value)}),n,i)})),n}),j=()=>{let{activeTab:t,activePanel:o,logs:p,writeLog:y}=x(`useSetup:0:0:dup2`,()=>c(()=>{let e=x(`ref:1:3`,()=>b(`preview`)),t=x(`ref:1:4`,()=>b(`EditorPanel`)),n=x(`ref:1:5`,()=>b([]));return{activeTab:e,activePanel:t,logs:n,writeLog:e=>{n.value=[`${new Date().toLocaleTimeString()}  ${e}`,...n.value].slice(0,6)}}}));return d(c=>{let b=e(),x=n(`rue:component:anchor`);return a(b,x),h(_(E,{children:d(()=>{let c=e(),b=l(`h1`,c);a(c,b),f(b,`text-5xl font-semibold mb-4 md:mb-4`),a(b,v(`onDeactivated()`));let x=l(`div`,c);a(c,x),g(x,`role`,`tablist`),f(x,`tabs tabs-box`);let C=l(`button`,x);a(x,C),g(C,`role`,`tab`),r(()=>{f(C,`tab ${t.value===`preview`?`tab-active`:``}`)}),s(C,`click`,()=>{t.value=`preview`}),a(C,v(`效果`));let w=l(`button`,x);a(x,w),g(w,`role`,`tab`),r(()=>{f(w,`tab ${t.value===`code`?`tab-active`:``}`)}),s(w,`click`,()=>{t.value=`code`}),a(w,v(`代码`));let E=l(`div`,c);a(c,E),f(E,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let j=n(`rue:slot:anchor`);a(E,j),r(()=>{let o=t.value===`code`?d(()=>{let t=e(),o=l(`div`,t);a(t,o),f(o,`card bg-base-100 shadow overflow-auto`);let s=l(`div`,o);a(o,s),f(s,`card-body p-0`);let c=n(`rue:component:anchor`);return a(s,c),r(()=>{let e=_(T,{className:`h-full`,lang:`tsx`,code:k});i(()=>h(e,s,c))}),t}):``;i(()=>h(o,E,j))}),a(E,v(` `));let M=n(`rue:slot:anchor`);return a(E,M),r(()=>{let c=t.value===`preview`?d(()=>{let t=e(),c=l(`div`,t);a(t,c),f(c,`card bg-base-100 shadow`);let b=l(`div`,c);a(c,b),f(b,`card-body gap-6`);let x=l(`div`,b);a(b,x),f(x,`join`);let C=n(`rue:list:start`),w=n(`rue:list:end`);a(x,C),a(x,w);let T=new Map;r(()=>{T=S({items:Object.keys(O)||[],getKey:(e,t)=>e,elements:T,parent:x,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,c,u,p,m)=>{h(d(()=>{let c=e(),u=l(`button`,c);a(c,u),r(()=>{f(u,`btn join-item ${o.value===t?`btn-primary`:``}`)}),s(u,`click`,()=>{o.value=t}),r(()=>{g(u,`key`,String(t))});let d=n(`rue:slot:anchor`);return a(u,d),r(()=>{let e=D[t];i(()=>h(e,u,d))}),c}),c,u)}})});let E=n(`rue:component:anchor`);a(b,E),r(()=>{let e=_(A,{activePanel:o,writeLog:y});i(()=>h(e,b,E))});let k=l(`section`,b);a(b,k),f(k,`rounded-box bg-base-200 p-4`);let j=l(`h2`,k);a(k,j),f(j,`text-lg font-semibold`),a(j,v(`Deactivated 日志`));let M=l(`ul`,k);a(k,M),f(M,`mt-3 space-y-2 text-sm`);let N=n(`rue:slot:anchor`);a(M,N),r(()=>{let t=p.value.length===0?d(()=>{let t=e(),n=l(`li`,t);return a(t,n),f(n,`opacity-60`),a(n,v(`切换面板后会出现日志。`)),t}):``;i(()=>h(t,M,N))}),a(M,v(` `));let P=n(`rue:list:start`),F=n(`rue:list:end`);a(M,P),a(M,F);let I=new Map;return r(()=>{I=S({items:p.value||[],getKey:(e,t)=>e,elements:I,parent:M,before:F,singleRoot:!0,trackIndex:!1,start:P,renderItem:(t,n,i,o,s)=>{h(d(()=>{let n=e(),i=l(`li`,n);a(n,i),f(i,`rounded-box bg-base-100 px-3 py-2`),r(()=>{g(i,`key`,String(t))});let o=m(i);return a(i,o),r(()=>{u(o,t)}),n}),n,i)}})}),t}):``;i(()=>h(c,E,M))}),c})}),b,x),b})};export{j as default};