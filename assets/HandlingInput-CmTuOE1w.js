import{F as e,I as t,K as n,L as r,M as i,N as a,Q as o,R as s,W as c,_t as l,d as u,l as d,mt as f,ot as p,t as m,ut as h,z as g}from"./vapor-runtime-Bp8DIxJg.js";import{a as _}from"./vapor-helpers-vapor-D3i3KBBg.js";import{t as v}from"./Code-D55WiaDx.js";import{t as y}from"./SidebarPlaygroundExample-Cpkm7O-2.js";var b=()=>{let{message:b,reverseMessage:x,notify:S,activeTab:C}=_(`useSetup:0:0`,()=>f(()=>{let e=_(`ref:1:0`,()=>p(`Hello World!`));return{message:e,reverseMessage:()=>{e.value=e.value.split(``).reverse().join(``)},notify:()=>{alert(`navigation was prevented.`)},activeTab:_(`ref:1:1`,()=>p(`preview`))}}));return u(f=>{let p=t(),_=e(`rue:component:anchor`);return a(p,_),d(m(y,{children:u(()=>{let f=t(),p=r(`h1`,f);a(f,p),n(p,`text-5xl font-semibold mb-4 md:mb-4`),a(p,s(`处理输入（移植自 Vue）`));let _=r(`div`,f);a(f,_),c(_,`role`,`tablist`),n(_,`tabs tabs-box`);let y=r(`button`,_);a(_,y),c(y,`role`,`tab`),l(()=>{n(y,String(`tab ${C.value===`preview`?`tab-active`:``}`))}),i(y,`click`,()=>{C.value=`preview`}),a(y,s(`效果`));let w=r(`button`,_);a(_,w),c(w,`role`,`tab`),l(()=>{n(w,String(`tab ${C.value===`code`?`tab-active`:``}`))}),i(w,`click`,()=>{C.value=`code`}),a(w,s(`代码`));let T=r(`div`,f);a(f,T),n(T,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let E=e(`rue:slot:anchor`);a(T,E),l(()=>{let i=C.value===`code`?u(()=>{let i=t(),o=r(`div`,i);a(i,o),n(o,`card bg-base-100 shadow overflow-auto h-[260px] md:h-[560px]`);let s=r(`div`,o);a(o,s),n(s,`card-body p-0`);let c=e(`rue:component:anchor`);return a(s,c),l(()=>{let e=m(v,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default HandlingInput;`});h(()=>d(e,s,c))}),i}):``;h(()=>d(i,T,E))}),a(T,s(` `));let D=e(`rue:slot:anchor`);return a(T,D),l(()=>{let e=C.value===`preview`?u(()=>{let e=t(),u=r(`div`,e);a(e,u),n(u,`card bg-base-100 shadow`);let d=r(`div`,u);a(u,d),n(d,`card-body`);let f=r(`h1`,d);a(d,f),n(f,`text-2xl font-semibold`);let p=g(f);a(f,p),l(()=>{o(p,b.value)});let m=r(`button`,d);a(d,m),n(m,`btn btn-primary`),i(m,`click`,x),a(m,s(`Reverse Message`));let h=r(`button`,d);a(d,h),n(h,`btn btn-outline`),i(h,`click`,()=>b.value+=`!`),a(h,s(`Append "!"`));let _=r(`a`,d);return a(d,_),n(_,`link link-primary`),c(_,`href`,`https://google.com`),i(_,`click`,e=>{e.preventDefault(),S()}),a(_,s(`A link with e.preventDefault()`)),e}):``;h(()=>d(e,T,D))}),f})}),p,_),p})};export{b as default};