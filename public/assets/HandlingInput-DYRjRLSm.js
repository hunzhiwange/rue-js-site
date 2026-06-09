import{$ as e,Ht as t,J as n,Q as r,Rt as i,Xt as a,Y as o,Z as s,ct as c,et as l,l as u,mt as d,ot as f,qt as p,s as m,t as h,tt as g}from"./vapor-runtime-aZAg0Qkw.js";import{a as _}from"./vapor-helpers-vapor-gtGwiIv0.js";import{t as v}from"./Code-5DOEyGxf.js";import{r as y}from"./SidebarPlaygroundExample-cASgDpH3.js";var b=()=>{let{message:b,reverseMessage:x,notify:S,activeTab:C}=_(`useSetup:0:0`,()=>p(()=>{let e=_(`ref:1:0`,()=>i(`Hello World!`));return{message:e,reverseMessage:()=>{e.value=e.value.split(``).reverse().join(``)},notify:()=>{alert(`navigation was prevented.`)},activeTab:_(`ref:1:1`,()=>i(`preview`))}}));return u(i=>{let p=r(),_=s(`rue:component:anchor`);return o(p,_),m(h(y,{children:u(()=>{let i=r(),p=e(`h1`,i);o(i,p),c(p,`text-5xl font-semibold mb-4 md:mb-4`),o(p,l(`处理输入（移植自 Vue）`));let _=e(`div`,i);o(i,_),f(_,`role`,`tablist`),c(_,`tabs tabs-box`);let y=e(`button`,_);o(_,y),f(y,`role`,`tab`),a(()=>{c(y,String(`tab ${C.value===`preview`?`tab-active`:``}`))}),n(y,`click`,()=>{C.value=`preview`}),o(y,l(`效果`));let w=e(`button`,_);o(_,w),f(w,`role`,`tab`),a(()=>{c(w,String(`tab ${C.value===`code`?`tab-active`:``}`))}),n(w,`click`,()=>{C.value=`code`}),o(w,l(`代码`));let T=e(`div`,i);o(i,T),c(T,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let E=s(`rue:slot:anchor`);o(T,E),a(()=>{let n=C.value===`code`?u(()=>{let n=r(),i=e(`div`,n);o(n,i),c(i,`card bg-base-100 shadow overflow-auto h-[260px] md:h-[560px]`);let l=e(`div`,i);o(i,l),c(l,`card-body p-0`);let u=s(`rue:component:anchor`);return o(l,u),a(()=>{let e=h(v,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default HandlingInput;`});t(()=>m(e,l,u))}),n}):``;t(()=>m(n,T,E))}),o(T,l(` `));let D=s(`rue:slot:anchor`);return o(T,D),a(()=>{let i=C.value===`preview`?u(()=>{let t=r(),i=e(`div`,t);o(t,i),c(i,`card bg-base-100 shadow`);let s=e(`div`,i);o(i,s),c(s,`card-body`);let u=e(`h1`,s);o(s,u),c(u,`text-2xl font-semibold`);let p=g(u);o(u,p),a(()=>{d(p,b.value)});let m=e(`button`,s);o(s,m),c(m,`btn btn-primary`),n(m,`click`,x),o(m,l(`Reverse Message`));let h=e(`button`,s);o(s,h),c(h,`btn btn-outline`),n(h,`click`,()=>b.value+=`!`),o(h,l(`Append "!"`));let _=e(`a`,s);return o(s,_),c(_,`link link-primary`),f(_,`href`,`https://google.com`),n(_,`click`,e=>{e.preventDefault(),S()}),o(_,l(`A link with e.preventDefault()`)),t}):``;t(()=>m(i,T,D))}),i})}),p,_),p})};export{b as default};