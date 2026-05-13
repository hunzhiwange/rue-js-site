import{F as e,G as t,I as n,L as r,M as i,P as a,R as o,U as s,Z as c,_t as l,bt as u,c as d,j as f,lt as p,pt as m,t as h,u as g}from"./vapor-runtime-D3a-68js.js";import{a as _}from"./vapor-helpers-vapor-DGjYaAZX.js";import{t as v}from"./Code-2C2psoH3.js";import{t as y}from"./SidebarPlaygroundExample-DKa0aI1C.js";var b=()=>{let{message:b,reverseMessage:x,notify:S,activeTab:C}=_(`useSetup:0:0`,()=>l(()=>{let e=_(`ref:1:0`,()=>p(`Hello World!`));return{message:e,reverseMessage:()=>{e.value=e.value.split(``).reverse().join(``)},notify:()=>{alert(`navigation was prevented.`)},activeTab:_(`ref:1:1`,()=>p(`preview`))}}));return g(()=>{let l=e(),p=a(`rue:component:anchor`);return i(l,p),d(h(y,{children:g(()=>{let l=e(),p=n(`h1`);i(l,p),t(p,`text-5xl font-semibold mb-4 md:mb-4`),i(p,r(`处理输入（移植自 Vue）`));let _=n(`div`);i(l,_),s(_,`role`,`tablist`),t(_,`tabs tabs-box`);let y=n(`button`);i(_,y),s(y,`role`,`tab`),u(()=>{t(y,String(`tab ${C.value===`preview`?`tab-active`:``}`))}),f(y,`click`,()=>{C.value=`preview`}),i(y,r(`效果`));let w=n(`button`);i(_,w),s(w,`role`,`tab`),u(()=>{t(w,String(`tab ${C.value===`code`?`tab-active`:``}`))}),f(w,`click`,()=>{C.value=`code`}),i(w,r(`代码`));let T=n(`div`);i(l,T),t(T,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let E=a(`rue:slot:anchor`);i(T,E),u(()=>{let r=C.value===`code`?g(()=>{let r=e(),o=n(`div`);i(r,o),t(o,`card bg-base-100 shadow overflow-auto h-[260px] md:h-[560px]`);let s=n(`div`);i(o,s),t(s,`card-body p-0`);let c=a(`rue:component:anchor`);return i(s,c),u(()=>{let e=h(v,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default HandlingInput;`});m(()=>d(e,s,c))}),r}):``;m(()=>d(r,T,E))}),i(T,r(` `));let D=a(`rue:slot:anchor`);return i(T,D),u(()=>{let a=C.value===`preview`?g(()=>{let a=e(),l=n(`div`);i(a,l),t(l,`card bg-base-100 shadow`);let d=n(`div`);i(l,d),t(d,`card-body`);let p=n(`h1`);i(d,p),t(p,`text-2xl font-semibold`);let m=o(p);i(p,m),u(()=>{c(m,b.value)});let h=n(`button`);i(d,h),t(h,`btn btn-primary`),f(h,`click`,x),i(h,r(`Reverse Message`));let g=n(`button`);i(d,g),t(g,`btn btn-outline`),f(g,`click`,()=>b.value+=`!`),i(g,r(`Append "!"`));let _=n(`a`);return i(d,_),t(_,`link link-primary`),s(_,`href`,`https://google.com`),f(_,`click`,e=>{e.preventDefault(),S()}),i(_,r(`A link with e.preventDefault()`)),a}):``;m(()=>d(a,T,D))}),l})}),l,p),l})};export{b as default};