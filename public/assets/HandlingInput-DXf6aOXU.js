import{$ as e,Ht as t,J as n,Lt as r,Q as i,X as a,Xt as o,Z as s,at as c,et as l,l as u,pt as d,q as f,qt as p,s as m,st as h,t as g}from"./vapor-runtime-iQZthBPQ.js";import{a as _}from"./vapor-helpers-vapor-BjKHCvOa.js";import{t as v}from"./Code-CZqShVUj.js";import{r as y}from"./SidebarPlaygroundExample-5H7RL-T7.js";var b=()=>{let{message:b,reverseMessage:x,notify:S,activeTab:C}=_(`useSetup:0:0`,()=>p(()=>{let e=_(`ref:1:0`,()=>r(`Hello World!`));return{message:e,reverseMessage:()=>{e.value=e.value.split(``).reverse().join(``)},notify:()=>{alert(`navigation was prevented.`)},activeTab:_(`ref:1:1`,()=>r(`preview`))}}));return u(r=>{let p=s(),_=a(`rue:component:anchor`);return n(p,_),m(g(y,{children:u(()=>{let r=s(),p=i(`h1`,r);n(r,p),h(p,`text-5xl font-semibold mb-4 md:mb-4`),n(p,e(`处理输入（移植自 Vue）`));let _=i(`div`,r);n(r,_),c(_,`role`,`tablist`),h(_,`tabs tabs-box`);let y=i(`button`,_);n(_,y),c(y,`role`,`tab`),o(()=>{h(y,`tab ${C.value===`preview`?`tab-active`:``}`)}),f(y,`click`,()=>{C.value=`preview`}),n(y,e(`效果`));let w=i(`button`,_);n(_,w),c(w,`role`,`tab`),o(()=>{h(w,`tab ${C.value===`code`?`tab-active`:``}`)}),f(w,`click`,()=>{C.value=`code`}),n(w,e(`代码`));let T=i(`div`,r);n(r,T),h(T,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let E=a(`rue:slot:anchor`);n(T,E),o(()=>{let e=C.value===`code`?u(()=>{let e=s(),r=i(`div`,e);n(e,r),h(r,`card bg-base-100 shadow overflow-auto h-[260px] md:h-[560px]`);let c=i(`div`,r);n(r,c),h(c,`card-body p-0`);let l=a(`rue:component:anchor`);return n(c,l),o(()=>{let e=g(v,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

const HandlingInput: FC = () => {
  const message = ref('Hello World!');
  const reverseMessage = () => {
    message.value = message.value.split('').reverse().join('');
  };
  const notify = () => {
    alert('navigation was prevented.');
  };
  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body">
        <h1 className="text-2xl font-semibold">{message.value}</h1>
        <button className="btn btn-primary" onClick={reverseMessage}>
          Reverse Message
        </button>
        <button className="btn btn-outline" onClick={() => (message.value += '!')}>
          Append "!"
        </button>
        <a
          className="link link-primary"
          href="https://google.com"
          onClick={(e: any) => {
            e.preventDefault()
            notify()
          }}
        >
          A link with e.preventDefault()
        </a>
      </div>
    </div>
  );
};

export default HandlingInput;`});t(()=>m(e,c,l))}),e}):``;t(()=>m(e,T,E))}),n(T,e(` `));let D=a(`rue:slot:anchor`);return n(T,D),o(()=>{let r=C.value===`preview`?u(()=>{let t=s(),r=i(`div`,t);n(t,r),h(r,`card bg-base-100 shadow`);let a=i(`div`,r);n(r,a),h(a,`card-body`);let u=i(`h1`,a);n(a,u),h(u,`text-2xl font-semibold`);let p=l(u);n(u,p),o(()=>{d(p,b.value)});let m=i(`button`,a);n(a,m),h(m,`btn btn-primary`),f(m,`click`,x),n(m,e(`Reverse Message`));let g=i(`button`,a);n(a,g),h(g,`btn btn-outline`),f(g,`click`,()=>b.value+=`!`),n(g,e(`Append "!"`));let _=i(`a`,a);return n(a,_),h(_,`link link-primary`),c(_,`href`,`https://google.com`),f(_,`click`,e=>{e.preventDefault(),S()}),n(_,e(`A link with e.preventDefault()`)),t}):``;t(()=>m(r,T,D))}),r})}),p,_),p})};export{b as default};