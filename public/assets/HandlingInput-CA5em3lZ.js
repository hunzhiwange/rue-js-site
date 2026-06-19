import{$ as e,Q as t,Qt as n,Wt as r,X as i,Y as a,Yt as o,et as s,ht as c,l,lt as u,nt as d,o as f,st as p,t as m,tt as h,zt as g}from"./vapor-runtime-CXIalONM.js";import{a as _}from"./vapor-helpers-vapor-CoXKrGmY.js";import{t as v}from"./Code-BIscIyEp.js";import{r as y}from"./SidebarPlaygroundExample-CEz1fABX.js";var b=()=>{let{message:b,reverseMessage:x,notify:S,activeTab:C}=_(`useSetup:0:0`,()=>o(()=>{let e=_(`ref:1:0`,()=>g(`Hello World!`));return{message:e,reverseMessage:()=>{e.value=e.value.split(``).reverse().join(``)},notify:()=>{alert(`navigation was prevented.`)},activeTab:_(`ref:1:1`,()=>g(`preview`))}}));return l(o=>{let g=e(),_=t(`rue:component:anchor`);return i(g,_),f(m(y,{children:l(()=>{let o=e(),g=s(`h1`,o);i(o,g),u(g,`text-5xl font-semibold mb-4 md:mb-4`),i(g,h(`处理输入（移植自 Vue）`));let _=s(`div`,o);i(o,_),p(_,`role`,`tablist`),u(_,`tabs tabs-box`);let y=s(`button`,_);i(_,y),p(y,`role`,`tab`),n(()=>{u(y,`tab ${C.value===`preview`?`tab-active`:``}`)}),a(y,`click`,()=>{C.value=`preview`}),i(y,h(`效果`));let w=s(`button`,_);i(_,w),p(w,`role`,`tab`),n(()=>{u(w,`tab ${C.value===`code`?`tab-active`:``}`)}),a(w,`click`,()=>{C.value=`code`}),i(w,h(`代码`));let T=s(`div`,o);i(o,T),u(T,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let E=t(`rue:slot:anchor`);i(T,E),n(()=>{let a=C.value===`code`?l(()=>{let a=e(),o=s(`div`,a);i(a,o),u(o,`card bg-base-100 shadow overflow-auto h-[260px] md:h-[560px]`);let c=s(`div`,o);i(o,c),u(c,`card-body p-0`);let l=t(`rue:component:anchor`);return i(c,l),n(()=>{let e=m(v,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default HandlingInput;`});r(()=>f(e,c,l))}),a}):``;r(()=>f(a,T,E))}),i(T,h(` `));let D=t(`rue:slot:anchor`);return i(T,D),n(()=>{let t=C.value===`preview`?l(()=>{let t=e(),r=s(`div`,t);i(t,r),u(r,`card bg-base-100 shadow`);let o=s(`div`,r);i(r,o),u(o,`card-body`);let l=s(`h1`,o);i(o,l),u(l,`text-2xl font-semibold`);let f=d(l);i(l,f),n(()=>{c(f,b.value)});let m=s(`button`,o);i(o,m),u(m,`btn btn-primary`),a(m,`click`,x),i(m,h(`Reverse Message`));let g=s(`button`,o);i(o,g),u(g,`btn btn-outline`),a(g,`click`,()=>b.value+=`!`),i(g,h(`Append "!"`));let _=s(`a`,o);return i(o,_),u(_,`link link-primary`),p(_,`href`,`https://google.com`),a(_,`click`,e=>{e.preventDefault(),S()}),i(_,h(`A link with e.preventDefault()`)),t}):``;r(()=>f(t,T,D))}),o})}),g,_),g})};export{b as default};