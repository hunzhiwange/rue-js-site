import{$ as e,B as t,Dt as n,G as r,H as i,K as a,U as o,W as s,Z as c,at as l,ht as u,l as d,s as f,t as p,wt as m,yt as h,z as g}from"./vapor-runtime-C1rlwc61.js";import{a as _}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as v}from"./Code-BCLFq1E3.js";import{t as y}from"./SidebarPlaygroundExample-CdMvdgT7.js";var b=()=>{let{message:b,reverseMessage:x,notify:S,activeTab:C}=_(`useSetup:0:0`,()=>m(()=>{let e=_(`ref:1:0`,()=>u(`Hello World!`));return{message:e,reverseMessage:()=>{e.value=e.value.split(``).reverse().join(``)},notify:()=>{alert(`navigation was prevented.`)},activeTab:_(`ref:1:1`,()=>u(`preview`))}}));return d(u=>{let m=o(),_=i(`rue:component:anchor`);return t(m,_),f(p(y,{children:d(()=>{let u=o(),m=s(`h1`,u);t(u,m),e(m,`text-5xl font-semibold mb-4 md:mb-4`),t(m,r(`处理输入（移植自 Vue）`));let _=s(`div`,u);t(u,_),c(_,`role`,`tablist`),e(_,`tabs tabs-box`);let y=s(`button`,_);t(_,y),c(y,`role`,`tab`),n(()=>{e(y,String(`tab ${C.value===`preview`?`tab-active`:``}`))}),g(y,`click`,()=>{C.value=`preview`}),t(y,r(`效果`));let w=s(`button`,_);t(_,w),c(w,`role`,`tab`),n(()=>{e(w,String(`tab ${C.value===`code`?`tab-active`:``}`))}),g(w,`click`,()=>{C.value=`code`}),t(w,r(`代码`));let T=s(`div`,u);t(u,T),e(T,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let E=i(`rue:slot:anchor`);t(T,E),n(()=>{let r=C.value===`code`?d(()=>{let r=o(),a=s(`div`,r);t(r,a),e(a,`card bg-base-100 shadow overflow-auto h-[260px] md:h-[560px]`);let c=s(`div`,a);t(a,c),e(c,`card-body p-0`);let l=i(`rue:component:anchor`);return t(c,l),n(()=>{let e=p(v,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default HandlingInput;`});h(()=>f(e,c,l))}),r}):``;h(()=>f(r,T,E))}),t(T,r(` `));let D=i(`rue:slot:anchor`);return t(T,D),n(()=>{let i=C.value===`preview`?d(()=>{let i=o(),u=s(`div`,i);t(i,u),e(u,`card bg-base-100 shadow`);let d=s(`div`,u);t(u,d),e(d,`card-body`);let f=s(`h1`,d);t(d,f),e(f,`text-2xl font-semibold`);let p=a(f);t(f,p),n(()=>{l(p,b.value)});let m=s(`button`,d);t(d,m),e(m,`btn btn-primary`),g(m,`click`,x),t(m,r(`Reverse Message`));let h=s(`button`,d);t(d,h),e(h,`btn btn-outline`),g(h,`click`,()=>b.value+=`!`),t(h,r(`Append "!"`));let _=s(`a`,d);return t(d,_),e(_,`link link-primary`),c(_,`href`,`https://google.com`),g(_,`click`,e=>{e.preventDefault(),S()}),t(_,r(`A link with e.preventDefault()`)),i}):``;h(()=>f(i,T,D))}),u})}),m,_),m})};export{b as default};