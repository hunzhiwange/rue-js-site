import{Cn as e,Ct as t,Mt as n,Tt as r,dt as i,ft as a,ht as o,jt as s,mt as c,ot as l,pn as u,pt as d,rt as f,st as p,tn as m,v as h,vn as g,wn as _}from"./context-8lXZvIn-.js";import{l as v,o as y,t as b}from"./vapor-runtime-ygJWVcNn.js";import{a as x,n as S}from"./vapor-helpers-vapor-CMwHgsXf.js";import{l as C}from"./src-DnK6Cdoa.js";import{t as w}from"./Code-DhoWkRkB.js";import{t as T}from"./src-CCTNpCXV.js";import{r as E}from"./SidebarPlaygroundExample-B78jsvoF.js";var D={EditorPanel:`编辑器`,CounterPanel:`计数器`},O={EditorPanel:t=>{let{text:n,setText:i}=x(`useSetup:0:0`,()=>e(()=>{let[e,n]=x(`useState:1:0`,()=>_(`切到计数器后再回来，这段文字还在。`));return h(()=>{t.writeLog(`EditorPanel deactivated: "${e.value.slice(0,12)}"`)}),{text:e,setText:n}}));return v(e=>{let t=d(`section`,e);r(t,`rounded-box border border-info/25 bg-info/10 p-5`);let a=d(`div`,t);p(t,a),r(a,`text-xs font-semibold uppercase opacity-60`),p(a,c(`EditorPanel`));let o=d(`label`,t);p(t,o),r(o,`form-control mt-4`);let u=d(`span`,o);p(o,u),r(u,`label-text`),p(u,c(`草稿内容`));let f=d(`textarea`,o);return p(o,f),r(f,`textarea textarea-bordered mt-2 min-h-28`),m(()=>{s(f,n.value)}),l(f,`input`,e=>{i(e.target.value)}),t})},CounterPanel:t=>{let{count:i,setCount:a}=x(`useSetup:0:0:dup1`,()=>e(()=>{let[e,n]=x(`useState:1:1`,()=>_(0));return h(()=>{t.writeLog(`CounterPanel deactivated: count = ${e.value}`)}),{count:e,setCount:n}}));return v(e=>{let t=d(`section`,e);r(t,`rounded-box border border-success/25 bg-success/10 p-5`);let s=d(`div`,t);p(t,s),r(s,`text-xs font-semibold uppercase opacity-60`),p(s,c(`CounterPanel`));let u=d(`div`,t);p(t,u),r(u,`mt-4 text-5xl font-semibold`);let f=o(u);p(u,f),m(()=>{n(f,i.value)});let h=d(`button`,t);return p(t,h),r(h,`btn btn-success btn-sm mt-5`),l(h,`click`,()=>{a(e=>{e.value+=1})}),p(h,c(`增加`)),t})}},k=`import {
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
};`,A=e=>v(()=>{let t=document.createDocumentFragment(),n=document.createComment(`on-deactivated-anchor`);return t.appendChild(n),x(`watchEffect:1:2`,()=>m(()=>{y(T(C,{children:T(f,{is:O[e.activePanel.value],writeLog:e.writeLog},e.activePanel.value)}),t,n)})),t}),j=()=>{let{activeTab:s,activePanel:f,logs:h,writeLog:_}=x(`useSetup:0:0:dup2`,()=>e(()=>{let e=x(`ref:1:3`,()=>u(`preview`)),t=x(`ref:1:4`,()=>u(`EditorPanel`)),n=x(`ref:1:5`,()=>u([]));return{activeTab:e,activePanel:t,logs:n,writeLog:e=>{n.value=[`${new Date().toLocaleTimeString()}  ${e}`,...n.value].slice(0,6)}}}));return v(e=>{let u=a(),x=i(`rue:component:anchor`);return p(u,x),y(b(E,{children:v(()=>{let e=a(),u=d(`h1`,e);p(e,u),r(u,`text-5xl font-semibold mb-4 md:mb-4`),p(u,c(`onDeactivated()`));let x=d(`div`,e);p(e,x),t(x,`role`,`tablist`),r(x,`tabs tabs-box`);let C=d(`button`,x);p(x,C),t(C,`role`,`tab`),m(()=>{r(C,`tab ${s.value===`preview`?`tab-active`:``}`)}),l(C,`click`,()=>{s.value=`preview`}),p(C,c(`效果`));let T=d(`button`,x);p(x,T),t(T,`role`,`tab`),m(()=>{r(T,`tab ${s.value===`code`?`tab-active`:``}`)}),l(T,`click`,()=>{s.value=`code`}),p(T,c(`代码`));let E=d(`div`,e);p(e,E),r(E,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let j=i(`rue:slot:anchor`);p(E,j),m(()=>{let e=s.value===`code`?v(()=>{let e=a(),t=d(`div`,e);p(e,t),r(t,`card bg-base-100 shadow overflow-auto`);let n=d(`div`,t);p(t,n),r(n,`card-body p-0`);let o=i(`rue:component:anchor`);return p(n,o),m(()=>{let e=b(w,{className:`h-full`,lang:`tsx`,code:k});g(()=>y(e,n,o))}),e}):``;g(()=>y(e,E,j))}),p(E,c(` `));let M=i(`rue:slot:anchor`);return p(E,M),m(()=>{let e=s.value===`preview`?v(()=>{let e=a(),s=d(`div`,e);p(e,s),r(s,`card bg-base-100 shadow`);let u=d(`div`,s);p(s,u),r(u,`card-body gap-6`);let x=d(`div`,u);p(u,x),r(x,`join`);let C=i(`rue:list:start`),w=i(`rue:list:end`);p(x,C),p(x,w);let T=new Map;m(()=>{T=S({items:Object.keys(O)||[],getKey:(e,t)=>e,elements:T,parent:x,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,n,o,s,c)=>{y(v(()=>{let n=a(),o=d(`button`,n);p(n,o),m(()=>{r(o,`btn join-item ${f.value===e?`btn-primary`:``}`)}),l(o,`click`,()=>{f.value=e}),m(()=>{t(o,`key`,String(e))});let s=i(`rue:slot:anchor`);return p(o,s),m(()=>{let t=D[e];g(()=>y(t,o,s))}),n}),n,o)}})});let E=i(`rue:component:anchor`);p(u,E),m(()=>{let e=b(A,{activePanel:f,writeLog:_});g(()=>y(e,u,E))});let k=d(`section`,u);p(u,k),r(k,`rounded-box bg-base-200 p-4`);let j=d(`h2`,k);p(k,j),r(j,`text-lg font-semibold`),p(j,c(`Deactivated 日志`));let M=d(`ul`,k);p(k,M),r(M,`mt-3 space-y-2 text-sm`);let N=i(`rue:slot:anchor`);p(M,N),m(()=>{let e=h.value.length===0?v(()=>{let e=a(),t=d(`li`,e);return p(e,t),r(t,`opacity-60`),p(t,c(`切换面板后会出现日志。`)),e}):``;g(()=>y(e,M,N))}),p(M,c(` `));let P=i(`rue:list:start`),F=i(`rue:list:end`);p(M,P),p(M,F);let I=new Map;return m(()=>{I=S({items:h.value||[],getKey:(e,t)=>e,elements:I,parent:M,before:F,singleRoot:!0,trackIndex:!1,start:P,renderItem:(e,i,s,c,l)=>{y(v(()=>{let i=a(),s=d(`li`,i);p(i,s),r(s,`rounded-box bg-base-100 px-3 py-2`),m(()=>{t(s,`key`,String(e))});let c=o(s);return p(s,c),m(()=>{n(c,e)}),i}),i,s)}})}),e}):``;g(()=>y(e,E,M))}),e})}),u,x),u})};export{j as default};