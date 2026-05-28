import{$ as e,J as t,Kt as n,Lt as r,Q as i,Vt as a,Y as o,Yt as s,Z as c,ct as l,d as u,et as d,l as f,mt as p,ot as m,t as h,tt as g}from"./vapor-runtime-BR_2rwNk.js";import{a as _}from"./vapor-helpers-vapor-DkadWylb.js";import{t as v}from"./Code-B_4lzH85.js";import{t as y}from"./SidebarPlaygroundExample-CtM-WHq_.js";var b=()=>{let{message:b,reverseMessage:x,notify:S,activeTab:C}=_(`useSetup:0:0`,()=>n(()=>{let e=_(`ref:1:0`,()=>r(`Hello World!`));return{message:e,reverseMessage:()=>{e.value=e.value.split(``).reverse().join(``)},notify:()=>{alert(`navigation was prevented.`)},activeTab:_(`ref:1:1`,()=>r(`preview`))}}));return u(n=>{let r=i(),_=c(`rue:component:anchor`);return o(r,_),f(h(y,{children:u(()=>{let n=i(),r=e(`h1`,n);o(n,r),l(r,`text-5xl font-semibold mb-4 md:mb-4`),o(r,d(`处理输入（移植自 Vue）`));let _=e(`div`,n);o(n,_),m(_,`role`,`tablist`),l(_,`tabs tabs-box`);let y=e(`button`,_);o(_,y),m(y,`role`,`tab`),s(()=>{l(y,String(`tab ${C.value===`preview`?`tab-active`:``}`))}),t(y,`click`,()=>{C.value=`preview`}),o(y,d(`效果`));let w=e(`button`,_);o(_,w),m(w,`role`,`tab`),s(()=>{l(w,String(`tab ${C.value===`code`?`tab-active`:``}`))}),t(w,`click`,()=>{C.value=`code`}),o(w,d(`代码`));let T=e(`div`,n);o(n,T),l(T,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let E=c(`rue:slot:anchor`);o(T,E),s(()=>{let t=C.value===`code`?u(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`card bg-base-100 shadow overflow-auto h-[260px] md:h-[560px]`);let r=e(`div`,n);o(n,r),l(r,`card-body p-0`);let u=c(`rue:component:anchor`);return o(r,u),s(()=>{let e=h(v,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default HandlingInput;`});a(()=>f(e,r,u))}),t}):``;a(()=>f(t,T,E))}),o(T,d(` `));let D=c(`rue:slot:anchor`);return o(T,D),s(()=>{let n=C.value===`preview`?u(()=>{let n=i(),r=e(`div`,n);o(n,r),l(r,`card bg-base-100 shadow`);let a=e(`div`,r);o(r,a),l(a,`card-body`);let c=e(`h1`,a);o(a,c),l(c,`text-2xl font-semibold`);let u=g(c);o(c,u),s(()=>{p(u,b.value)});let f=e(`button`,a);o(a,f),l(f,`btn btn-primary`),t(f,`click`,x),o(f,d(`Reverse Message`));let h=e(`button`,a);o(a,h),l(h,`btn btn-outline`),t(h,`click`,()=>b.value+=`!`),o(h,d(`Append "!"`));let _=e(`a`,a);return o(a,_),l(_,`link link-primary`),m(_,`href`,`https://google.com`),t(_,`click`,e=>{e.preventDefault(),S()}),o(_,d(`A link with e.preventDefault()`)),n}):``;a(()=>f(n,T,D))}),n})}),r,_),r})};export{b as default};