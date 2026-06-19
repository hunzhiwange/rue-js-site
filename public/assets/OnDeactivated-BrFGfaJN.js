import{$ as e,$t as t,Bt as n,Gt as r,X as i,Xt as a,Z as o,Zt as s,ct as c,et as l,gt as u,ht as d,l as f,nt as p,o as m,q as h,rt as g,t as _,tt as v,ut as y,w as b}from"./vapor-runtime-CKrmRMZX.js";import{a as x,n as S}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{i as C}from"./persistentSidebarPlayground-CKHFGglU.js";import{t as w}from"./KeepAlive-CB9L6C0S.js";import{t as T}from"./Code-D5UqTwV6.js";import{r as E}from"./SidebarPlaygroundExample-D2vGHFCu.js";var D={EditorPanel:`编辑器`,CounterPanel:`计数器`},O={EditorPanel:e=>{let{text:n,setText:r}=x(`useSetup:0:0`,()=>a(()=>{let[t,n]=x(`useState:1:0`,()=>s(`切到计数器后再回来，这段文字还在。`));return b(()=>{e.writeLog(`EditorPanel deactivated: "${t.value.slice(0,12)}"`)}),{text:t,setText:n}}));return f(e=>{let a=v(`section`,e);y(a,`rounded-box border border-info/25 bg-info/10 p-5`);let s=v(`div`,a);o(a,s),y(s,`text-xs font-semibold uppercase opacity-60`),o(s,p(`EditorPanel`));let c=v(`label`,a);o(a,c),y(c,`form-control mt-4`);let l=v(`span`,c);o(c,l),y(l,`label-text`),o(l,p(`草稿内容`));let u=v(`textarea`,c);return o(c,u),y(u,`textarea textarea-bordered mt-2 min-h-28`),t(()=>{d(u,n.value)}),i(u,`input`,e=>{r(e.target.value)}),a})},CounterPanel:e=>{let{count:n,setCount:r}=x(`useSetup:0:0:dup1`,()=>a(()=>{let[t,n]=x(`useState:1:1`,()=>s(0));return b(()=>{e.writeLog(`CounterPanel deactivated: count = ${t.value}`)}),{count:t,setCount:n}}));return f(e=>{let a=v(`section`,e);y(a,`rounded-box border border-success/25 bg-success/10 p-5`);let s=v(`div`,a);o(a,s),y(s,`text-xs font-semibold uppercase opacity-60`),o(s,p(`CounterPanel`));let c=v(`div`,a);o(a,c),y(c,`mt-4 text-5xl font-semibold`);let l=g(c);o(c,l),t(()=>{u(l,n.value)});let d=v(`button`,a);return o(a,d),y(d,`btn btn-success btn-sm mt-5`),i(d,`click`,()=>{r(e=>{e.value+=1})}),o(d,p(`增加`)),a})}},k=`import {
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
};`,A=e=>f(()=>{let n=document.createDocumentFragment(),r=document.createComment(`on-deactivated-anchor`);return n.appendChild(r),x(`watchEffect:1:2`,()=>t(()=>{m(C(w,{children:C(h,{is:O[e.activePanel.value],writeLog:e.writeLog},e.activePanel.value)}),n,r)})),n}),j=()=>{let{activeTab:s,activePanel:d,logs:h,writeLog:b}=x(`useSetup:0:0:dup2`,()=>a(()=>{let e=x(`ref:1:3`,()=>n(`preview`)),t=x(`ref:1:4`,()=>n(`EditorPanel`)),r=x(`ref:1:5`,()=>n([]));return{activeTab:e,activePanel:t,logs:r,writeLog:e=>{r.value=[`${new Date().toLocaleTimeString()}  ${e}`,...r.value].slice(0,6)}}}));return f(n=>{let a=l(),x=e(`rue:component:anchor`);return o(a,x),m(_(E,{children:f(()=>{let n=l(),a=v(`h1`,n);o(n,a),y(a,`text-5xl font-semibold mb-4 md:mb-4`),o(a,p(`onDeactivated()`));let x=v(`div`,n);o(n,x),c(x,`role`,`tablist`),y(x,`tabs tabs-box`);let C=v(`button`,x);o(x,C),c(C,`role`,`tab`),t(()=>{y(C,`tab ${s.value===`preview`?`tab-active`:``}`)}),i(C,`click`,()=>{s.value=`preview`}),o(C,p(`效果`));let w=v(`button`,x);o(x,w),c(w,`role`,`tab`),t(()=>{y(w,`tab ${s.value===`code`?`tab-active`:``}`)}),i(w,`click`,()=>{s.value=`code`}),o(w,p(`代码`));let E=v(`div`,n);o(n,E),y(E,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let j=e(`rue:slot:anchor`);o(E,j),t(()=>{let n=s.value===`code`?f(()=>{let n=l(),i=v(`div`,n);o(n,i),y(i,`card bg-base-100 shadow overflow-auto`);let a=v(`div`,i);o(i,a),y(a,`card-body p-0`);let s=e(`rue:component:anchor`);return o(a,s),t(()=>{let e=_(T,{className:`h-full`,lang:`tsx`,code:k});r(()=>m(e,a,s))}),n}):``;r(()=>m(n,E,j))}),o(E,p(` `));let M=e(`rue:slot:anchor`);return o(E,M),t(()=>{let n=s.value===`preview`?f(()=>{let n=l(),a=v(`div`,n);o(n,a),y(a,`card bg-base-100 shadow`);let s=v(`div`,a);o(a,s),y(s,`card-body gap-6`);let x=v(`div`,s);o(s,x),y(x,`join`);let C=e(`rue:list:start`),w=e(`rue:list:end`);o(x,C),o(x,w);let T=new Map;t(()=>{T=S({items:Object.keys(O)||[],getKey:(e,t)=>e,elements:T,parent:x,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,a,s,u,p)=>{m(f(()=>{let a=l(),s=v(`button`,a);o(a,s),t(()=>{y(s,`btn join-item ${d.value===n?`btn-primary`:``}`)}),i(s,`click`,()=>{d.value=n}),t(()=>{c(s,`key`,String(n))});let u=e(`rue:slot:anchor`);return o(s,u),t(()=>{let e=D[n];r(()=>m(e,s,u))}),a}),a,s)}})});let E=e(`rue:component:anchor`);o(s,E),t(()=>{let e=_(A,{activePanel:d,writeLog:b});r(()=>m(e,s,E))});let k=v(`section`,s);o(s,k),y(k,`rounded-box bg-base-200 p-4`);let j=v(`h2`,k);o(k,j),y(j,`text-lg font-semibold`),o(j,p(`Deactivated 日志`));let M=v(`ul`,k);o(k,M),y(M,`mt-3 space-y-2 text-sm`);let N=e(`rue:slot:anchor`);o(M,N),t(()=>{let e=h.value.length===0?f(()=>{let e=l(),t=v(`li`,e);return o(e,t),y(t,`opacity-60`),o(t,p(`切换面板后会出现日志。`)),e}):``;r(()=>m(e,M,N))}),o(M,p(` `));let P=e(`rue:list:start`),F=e(`rue:list:end`);o(M,P),o(M,F);let I=new Map;return t(()=>{I=S({items:h.value||[],getKey:(e,t)=>e,elements:I,parent:M,before:F,singleRoot:!0,trackIndex:!1,start:P,renderItem:(e,n,r,i,a)=>{m(f(()=>{let n=l(),r=v(`li`,n);o(n,r),y(r,`rounded-box bg-base-100 px-3 py-2`),t(()=>{c(r,`key`,String(e))});let i=g(r);return o(r,i),t(()=>{u(i,e)}),n}),n,r)}})}),n}):``;r(()=>m(n,E,M))}),n})}),a,x),a})};export{j as default};