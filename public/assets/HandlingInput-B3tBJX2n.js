import{$ as e,Et as t,G as n,H as r,J as i,K as a,V as o,W as s,_t as c,d as l,kt as u,l as d,q as f,st as p,t as m,tt as h,xt as g}from"./vapor-runtime-ACs_OvwU.js";import{a as _}from"./vapor-helpers-vapor-BFB_fGs4.js";import{t as v}from"./Code-CliOXHNE.js";import{t as y}from"./SidebarPlaygroundExample-DXnPmR3z.js";var b=()=>{let{message:b,reverseMessage:x,notify:S,activeTab:C}=_(`useSetup:0:0`,()=>t(()=>{let e=_(`ref:1:0`,()=>c(`Hello World!`));return{message:e,reverseMessage:()=>{e.value=e.value.split(``).reverse().join(``)},notify:()=>{alert(`navigation was prevented.`)},activeTab:_(`ref:1:1`,()=>c(`preview`))}}));return l(t=>{let c=n(),_=s(`rue:component:anchor`);return r(c,_),d(m(y,{children:l(()=>{let t=n(),c=a(`h1`,t);r(t,c),h(c,`text-5xl font-semibold mb-4 md:mb-4`),r(c,f(`处理输入（移植自 Vue）`));let _=a(`div`,t);r(t,_),e(_,`role`,`tablist`),h(_,`tabs tabs-box`);let y=a(`button`,_);r(_,y),e(y,`role`,`tab`),u(()=>{h(y,String(`tab ${C.value===`preview`?`tab-active`:``}`))}),o(y,`click`,()=>{C.value=`preview`}),r(y,f(`效果`));let w=a(`button`,_);r(_,w),e(w,`role`,`tab`),u(()=>{h(w,String(`tab ${C.value===`code`?`tab-active`:``}`))}),o(w,`click`,()=>{C.value=`code`}),r(w,f(`代码`));let T=a(`div`,t);r(t,T),h(T,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let E=s(`rue:slot:anchor`);r(T,E),u(()=>{let e=C.value===`code`?l(()=>{let e=n(),t=a(`div`,e);r(e,t),h(t,`card bg-base-100 shadow overflow-auto h-[260px] md:h-[560px]`);let i=a(`div`,t);r(t,i),h(i,`card-body p-0`);let o=s(`rue:component:anchor`);return r(i,o),u(()=>{let e=m(v,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default HandlingInput;`});g(()=>d(e,i,o))}),e}):``;g(()=>d(e,T,E))}),r(T,f(` `));let D=s(`rue:slot:anchor`);return r(T,D),u(()=>{let t=C.value===`preview`?l(()=>{let t=n(),s=a(`div`,t);r(t,s),h(s,`card bg-base-100 shadow`);let c=a(`div`,s);r(s,c),h(c,`card-body`);let l=a(`h1`,c);r(c,l),h(l,`text-2xl font-semibold`);let d=i(l);r(l,d),u(()=>{p(d,b.value)});let m=a(`button`,c);r(c,m),h(m,`btn btn-primary`),o(m,`click`,x),r(m,f(`Reverse Message`));let g=a(`button`,c);r(c,g),h(g,`btn btn-outline`),o(g,`click`,()=>b.value+=`!`),r(g,f(`Append "!"`));let _=a(`a`,c);return r(c,_),h(_,`link link-primary`),e(_,`href`,`https://google.com`),o(_,`click`,e=>{e.preventDefault(),S()}),r(_,f(`A link with e.preventDefault()`)),t}):``;g(()=>d(t,T,D))}),t})}),c,_),c})};export{b as default};