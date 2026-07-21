import{Cn as e,Ct as t,Mt as n,Tt as r,dt as i,ft as a,ht as o,mt as s,ot as c,pn as l,pt as u,st as d,tn as f,vn as p}from"./context-8lXZvIn-.js";import{l as m,o as h,t as g}from"./vapor-runtime-ygJWVcNn.js";import{a as _}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as v}from"./Code-DhoWkRkB.js";import{r as y}from"./SidebarPlaygroundExample-B78jsvoF.js";var b=()=>{let{message:b,reverseMessage:x,notify:S,activeTab:C}=_(`useSetup:0:0`,()=>e(()=>{let e=_(`ref:1:0`,()=>l(`Hello World!`));return{message:e,reverseMessage:()=>{e.value=e.value.split(``).reverse().join(``)},notify:()=>{alert(`navigation was prevented.`)},activeTab:_(`ref:1:1`,()=>l(`preview`))}}));return m(e=>{let l=a(),_=i(`rue:component:anchor`);return d(l,_),h(g(y,{children:m(()=>{let e=a(),l=u(`h1`,e);d(e,l),r(l,`text-5xl font-semibold mb-4 md:mb-4`),d(l,s(`处理输入（移植自 Vue）`));let _=u(`div`,e);d(e,_),t(_,`role`,`tablist`),r(_,`tabs tabs-box`);let y=u(`button`,_);d(_,y),t(y,`role`,`tab`),f(()=>{r(y,`tab ${C.value===`preview`?`tab-active`:``}`)}),c(y,`click`,()=>{C.value=`preview`}),d(y,s(`效果`));let w=u(`button`,_);d(_,w),t(w,`role`,`tab`),f(()=>{r(w,`tab ${C.value===`code`?`tab-active`:``}`)}),c(w,`click`,()=>{C.value=`code`}),d(w,s(`代码`));let T=u(`div`,e);d(e,T),r(T,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let E=i(`rue:slot:anchor`);d(T,E),f(()=>{let e=C.value===`code`?m(()=>{let e=a(),t=u(`div`,e);d(e,t),r(t,`card bg-base-100 shadow overflow-auto h-[260px] md:h-[560px]`);let n=u(`div`,t);d(t,n),r(n,`card-body p-0`);let o=i(`rue:component:anchor`);return d(n,o),f(()=>{let e=g(v,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default HandlingInput;`});p(()=>h(e,n,o))}),e}):``;p(()=>h(e,T,E))}),d(T,s(` `));let D=i(`rue:slot:anchor`);return d(T,D),f(()=>{let e=C.value===`preview`?m(()=>{let e=a(),i=u(`div`,e);d(e,i),r(i,`card bg-base-100 shadow`);let l=u(`div`,i);d(i,l),r(l,`card-body`);let p=u(`h1`,l);d(l,p),r(p,`text-2xl font-semibold`);let m=o(p);d(p,m),f(()=>{n(m,b.value)});let h=u(`button`,l);d(l,h),r(h,`btn btn-primary`),c(h,`click`,x),d(h,s(`Reverse Message`));let g=u(`button`,l);d(l,g),r(g,`btn btn-outline`),c(g,`click`,()=>b.value+=`!`),d(g,s(`Append "!"`));let _=u(`a`,l);return d(l,_),r(_,`link link-primary`),t(_,`href`,`https://google.com`),c(_,`click`,e=>{e.preventDefault(),S()}),d(_,s(`A link with e.preventDefault()`)),e}):``;p(()=>h(e,T,D))}),e})}),l,_),l})};export{b as default};