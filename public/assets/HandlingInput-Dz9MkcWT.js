import{Q as e,Vt as t,Xt as n,Z as r,at as i,bt as a,dt as o,it as s,l as c,nt as l,o as u,on as d,pt as f,rt as p,t as m,tn as h,tt as g}from"./vapor-runtime-x7F5M-49.js";import{a as _}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as v}from"./Code-C5NjdoiC.js";import{r as y}from"./SidebarPlaygroundExample-DpItFif-.js";var b=()=>{let{message:b,reverseMessage:x,notify:S,activeTab:C}=_(`useSetup:0:0`,()=>d(()=>{let e=_(`ref:1:0`,()=>n(`Hello World!`));return{message:e,reverseMessage:()=>{e.value=e.value.split(``).reverse().join(``)},notify:()=>{alert(`navigation was prevented.`)},activeTab:_(`ref:1:1`,()=>n(`preview`))}}));return c(n=>{let d=l(),_=g(`rue:component:anchor`);return e(d,_),u(m(y,{children:c(()=>{let n=l(),d=p(`h1`,n);e(n,d),f(d,`text-5xl font-semibold mb-4 md:mb-4`),e(d,s(`处理输入（移植自 Vue）`));let _=p(`div`,n);e(n,_),o(_,`role`,`tablist`),f(_,`tabs tabs-box`);let y=p(`button`,_);e(_,y),o(y,`role`,`tab`),t(()=>{f(y,`tab ${C.value===`preview`?`tab-active`:``}`)}),r(y,`click`,()=>{C.value=`preview`}),e(y,s(`效果`));let w=p(`button`,_);e(_,w),o(w,`role`,`tab`),t(()=>{f(w,`tab ${C.value===`code`?`tab-active`:``}`)}),r(w,`click`,()=>{C.value=`code`}),e(w,s(`代码`));let T=p(`div`,n);e(n,T),f(T,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let E=g(`rue:slot:anchor`);e(T,E),t(()=>{let n=C.value===`code`?c(()=>{let n=l(),r=p(`div`,n);e(n,r),f(r,`card bg-base-100 shadow overflow-auto h-[260px] md:h-[560px]`);let i=p(`div`,r);e(r,i),f(i,`card-body p-0`);let a=g(`rue:component:anchor`);return e(i,a),t(()=>{let e=m(v,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default HandlingInput;`});h(()=>u(e,i,a))}),n}):``;h(()=>u(n,T,E))}),e(T,s(` `));let D=g(`rue:slot:anchor`);return e(T,D),t(()=>{let n=C.value===`preview`?c(()=>{let n=l(),c=p(`div`,n);e(n,c),f(c,`card bg-base-100 shadow`);let u=p(`div`,c);e(c,u),f(u,`card-body`);let d=p(`h1`,u);e(u,d),f(d,`text-2xl font-semibold`);let m=i(d);e(d,m),t(()=>{a(m,b.value)});let h=p(`button`,u);e(u,h),f(h,`btn btn-primary`),r(h,`click`,x),e(h,s(`Reverse Message`));let g=p(`button`,u);e(u,g),f(g,`btn btn-outline`),r(g,`click`,()=>b.value+=`!`),e(g,s(`Append "!"`));let _=p(`a`,u);return e(u,_),f(_,`link link-primary`),o(_,`href`,`https://google.com`),r(_,`click`,e=>{e.preventDefault(),S()}),e(_,s(`A link with e.preventDefault()`)),n}):``;h(()=>u(n,T,D))}),n})}),d,_),d})};export{b as default};