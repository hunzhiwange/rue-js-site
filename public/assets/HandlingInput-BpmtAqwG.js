import{$t as e,Jt as t,Q as n,Z as r,dt as i,et as a,in as o,it as s,l as c,lt as l,nt as u,o as d,rt as f,t as p,tt as m,vt as h,zt as g}from"./vapor-runtime-DsQWl-IB.js";import{a as _}from"./vapor-helpers-vapor-Dg64FcpK.js";import{t as v}from"./Code-4SUSUwRg.js";import{r as y}from"./SidebarPlaygroundExample-BEWYUWOl.js";var b=()=>{let{message:b,reverseMessage:x,notify:S,activeTab:C}=_(`useSetup:0:0`,()=>o(()=>{let e=_(`ref:1:0`,()=>t(`Hello World!`));return{message:e,reverseMessage:()=>{e.value=e.value.split(``).reverse().join(``)},notify:()=>{alert(`navigation was prevented.`)},activeTab:_(`ref:1:1`,()=>t(`preview`))}}));return c(t=>{let o=m(),_=a(`rue:component:anchor`);return n(o,_),d(p(y,{children:c(()=>{let t=m(),o=u(`h1`,t);n(t,o),i(o,`text-5xl font-semibold mb-4 md:mb-4`),n(o,f(`处理输入（移植自 Vue）`));let _=u(`div`,t);n(t,_),l(_,`role`,`tablist`),i(_,`tabs tabs-box`);let y=u(`button`,_);n(_,y),l(y,`role`,`tab`),g(()=>{i(y,`tab ${C.value===`preview`?`tab-active`:``}`)}),r(y,`click`,()=>{C.value=`preview`}),n(y,f(`效果`));let w=u(`button`,_);n(_,w),l(w,`role`,`tab`),g(()=>{i(w,`tab ${C.value===`code`?`tab-active`:``}`)}),r(w,`click`,()=>{C.value=`code`}),n(w,f(`代码`));let T=u(`div`,t);n(t,T),i(T,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let E=a(`rue:slot:anchor`);n(T,E),g(()=>{let t=C.value===`code`?c(()=>{let t=m(),r=u(`div`,t);n(t,r),i(r,`card bg-base-100 shadow overflow-auto h-[260px] md:h-[560px]`);let o=u(`div`,r);n(r,o),i(o,`card-body p-0`);let s=a(`rue:component:anchor`);return n(o,s),g(()=>{let t=p(v,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default HandlingInput;`});e(()=>d(t,o,s))}),t}):``;e(()=>d(t,T,E))}),n(T,f(` `));let D=a(`rue:slot:anchor`);return n(T,D),g(()=>{let t=C.value===`preview`?c(()=>{let e=m(),t=u(`div`,e);n(e,t),i(t,`card bg-base-100 shadow`);let a=u(`div`,t);n(t,a),i(a,`card-body`);let o=u(`h1`,a);n(a,o),i(o,`text-2xl font-semibold`);let c=s(o);n(o,c),g(()=>{h(c,b.value)});let d=u(`button`,a);n(a,d),i(d,`btn btn-primary`),r(d,`click`,x),n(d,f(`Reverse Message`));let p=u(`button`,a);n(a,p),i(p,`btn btn-outline`),r(p,`click`,()=>b.value+=`!`),n(p,f(`Append "!"`));let _=u(`a`,a);return n(a,_),i(_,`link link-primary`),l(_,`href`,`https://google.com`),r(_,`click`,e=>{e.preventDefault(),S()}),n(_,f(`A link with e.preventDefault()`)),e}):``;e(()=>d(t,T,D))}),t})}),o,_),o})};export{b as default};