import{$ as e,$t as t,Bt as n,Gt as r,X as i,Xt as a,Z as o,ct as s,et as c,gt as l,l as u,nt as d,o as f,rt as p,t as m,tt as h,ut as g}from"./vapor-runtime-CKrmRMZX.js";import{a as _}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{t as v}from"./Code-D5UqTwV6.js";import{r as y}from"./SidebarPlaygroundExample-D2vGHFCu.js";var b=()=>{let{message:b,reverseMessage:x,notify:S,activeTab:C}=_(`useSetup:0:0`,()=>a(()=>{let e=_(`ref:1:0`,()=>n(`Hello World!`));return{message:e,reverseMessage:()=>{e.value=e.value.split(``).reverse().join(``)},notify:()=>{alert(`navigation was prevented.`)},activeTab:_(`ref:1:1`,()=>n(`preview`))}}));return u(n=>{let a=c(),_=e(`rue:component:anchor`);return o(a,_),f(m(y,{children:u(()=>{let n=c(),a=h(`h1`,n);o(n,a),g(a,`text-5xl font-semibold mb-4 md:mb-4`),o(a,d(`处理输入（移植自 Vue）`));let _=h(`div`,n);o(n,_),s(_,`role`,`tablist`),g(_,`tabs tabs-box`);let y=h(`button`,_);o(_,y),s(y,`role`,`tab`),t(()=>{g(y,`tab ${C.value===`preview`?`tab-active`:``}`)}),i(y,`click`,()=>{C.value=`preview`}),o(y,d(`效果`));let w=h(`button`,_);o(_,w),s(w,`role`,`tab`),t(()=>{g(w,`tab ${C.value===`code`?`tab-active`:``}`)}),i(w,`click`,()=>{C.value=`code`}),o(w,d(`代码`));let T=h(`div`,n);o(n,T),g(T,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let E=e(`rue:slot:anchor`);o(T,E),t(()=>{let n=C.value===`code`?u(()=>{let n=c(),i=h(`div`,n);o(n,i),g(i,`card bg-base-100 shadow overflow-auto h-[260px] md:h-[560px]`);let a=h(`div`,i);o(i,a),g(a,`card-body p-0`);let s=e(`rue:component:anchor`);return o(a,s),t(()=>{let e=m(v,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default HandlingInput;`});r(()=>f(e,a,s))}),n}):``;r(()=>f(n,T,E))}),o(T,d(` `));let D=e(`rue:slot:anchor`);return o(T,D),t(()=>{let e=C.value===`preview`?u(()=>{let e=c(),n=h(`div`,e);o(e,n),g(n,`card bg-base-100 shadow`);let r=h(`div`,n);o(n,r),g(r,`card-body`);let a=h(`h1`,r);o(r,a),g(a,`text-2xl font-semibold`);let u=p(a);o(a,u),t(()=>{l(u,b.value)});let f=h(`button`,r);o(r,f),g(f,`btn btn-primary`),i(f,`click`,x),o(f,d(`Reverse Message`));let m=h(`button`,r);o(r,m),g(m,`btn btn-outline`),i(m,`click`,()=>b.value+=`!`),o(m,d(`Append "!"`));let _=h(`a`,r);return o(r,_),g(_,`link link-primary`),s(_,`href`,`https://google.com`),i(_,`click`,e=>{e.preventDefault(),S()}),o(_,d(`A link with e.preventDefault()`)),e}):``;r(()=>f(e,T,D))}),n})}),a,_),a})};export{b as default};