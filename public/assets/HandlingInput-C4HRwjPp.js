import{F as e,I as t,K as n,L as r,M as i,N as a,Q as o,R as s,W as c,d as l,dt as u,ht as d,l as f,st as p,t as m,vt as h,z as g}from"./vapor-runtime-BuwLbCGk.js";import{a as _}from"./vapor-helpers-vapor-Bly5xJie.js";import{t as v}from"./Code-DQxnq0in.js";import{t as y}from"./SidebarPlaygroundExample-BwOo72z2.js";var b=()=>{let{message:b,reverseMessage:x,notify:S,activeTab:C}=_(`useSetup:0:0`,()=>d(()=>{let e=_(`ref:1:0`,()=>p(`Hello World!`));return{message:e,reverseMessage:()=>{e.value=e.value.split(``).reverse().join(``)},notify:()=>{alert(`navigation was prevented.`)},activeTab:_(`ref:1:1`,()=>p(`preview`))}}));return l(d=>{let p=t(),_=e(`rue:component:anchor`);return a(p,_),f(m(y,{children:l(()=>{let d=t(),p=r(`h1`,d);a(d,p),n(p,`text-5xl font-semibold mb-4 md:mb-4`),a(p,s(`处理输入（移植自 Vue）`));let _=r(`div`,d);a(d,_),c(_,`role`,`tablist`),n(_,`tabs tabs-box`);let y=r(`button`,_);a(_,y),c(y,`role`,`tab`),h(()=>{n(y,String(`tab ${C.value===`preview`?`tab-active`:``}`))}),i(y,`click`,()=>{C.value=`preview`}),a(y,s(`效果`));let w=r(`button`,_);a(_,w),c(w,`role`,`tab`),h(()=>{n(w,String(`tab ${C.value===`code`?`tab-active`:``}`))}),i(w,`click`,()=>{C.value=`code`}),a(w,s(`代码`));let T=r(`div`,d);a(d,T),n(T,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let E=e(`rue:slot:anchor`);a(T,E),h(()=>{let i=C.value===`code`?l(()=>{let i=t(),o=r(`div`,i);a(i,o),n(o,`card bg-base-100 shadow overflow-auto h-[260px] md:h-[560px]`);let s=r(`div`,o);a(o,s),n(s,`card-body p-0`);let c=e(`rue:component:anchor`);return a(s,c),h(()=>{let e=m(v,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default HandlingInput;`});u(()=>f(e,s,c))}),i}):``;u(()=>f(i,T,E))}),a(T,s(` `));let D=e(`rue:slot:anchor`);return a(T,D),h(()=>{let e=C.value===`preview`?l(()=>{let e=t(),l=r(`div`,e);a(e,l),n(l,`card bg-base-100 shadow`);let u=r(`div`,l);a(l,u),n(u,`card-body`);let d=r(`h1`,u);a(u,d),n(d,`text-2xl font-semibold`);let f=g(d);a(d,f),h(()=>{o(f,b.value)});let p=r(`button`,u);a(u,p),n(p,`btn btn-primary`),i(p,`click`,x),a(p,s(`Reverse Message`));let m=r(`button`,u);a(u,m),n(m,`btn btn-outline`),i(m,`click`,()=>b.value+=`!`),a(m,s(`Append "!"`));let _=r(`a`,u);return a(u,_),n(_,`link link-primary`),c(_,`href`,`https://google.com`),i(_,`click`,e=>{e.preventDefault(),S()}),a(_,s(`A link with e.preventDefault()`)),e}):``;u(()=>f(e,T,D))}),d})}),p,_),p})};export{b as default};