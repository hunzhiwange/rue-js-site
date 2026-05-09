import{A as e,F as t,H as n,I as r,L as i,N as a,P as o,W as s,Y as c,c as l,j as u,pt as d,rt as f,t as p,u as m,ut as h}from"./vapor-runtime-BZZbPG7x.js";import{a as g}from"./vapor-helpers-vapor-DuGQh50d.js";import{t as _}from"./Code-C8wy38VS.js";import{t as v}from"./SidebarPlaygroundExample-Dv_xU0wR.js";var y=()=>{let{message:y,reverseMessage:b,notify:x,activeTab:S}=g(`useSetup:0:0`,()=>h(()=>{let e=g(`ref:1:0`,()=>f(`Hello World!`));return{message:e,reverseMessage:()=>{e.value=e.value.split(``).reverse().join(``)},notify:()=>{alert(`navigation was prevented.`)},activeTab:g(`ref:1:1`,()=>f(`preview`))}}));return m(()=>{let f=o(),h=a(`rue:component:anchor`);return u(f,h),l(p(v,{children:m(()=>{let f=o(),h=t(`h1`);u(f,h),s(h,`text-5xl font-semibold mb-4 md:mb-4`),u(h,r(`处理输入（移植自 Vue）`));let g=t(`div`);u(f,g),n(g,`role`,`tablist`),s(g,`tabs tabs-box`);let v=t(`button`);u(g,v),n(v,`role`,`tab`),d(()=>{s(v,String(`tab ${S.value===`preview`?`tab-active`:``}`))}),e(v,`click`,()=>{S.value=`preview`}),u(v,r(`效果`));let C=t(`button`);u(g,C),n(C,`role`,`tab`),d(()=>{s(C,String(`tab ${S.value===`code`?`tab-active`:``}`))}),e(C,`click`,()=>{S.value=`code`}),u(C,r(`代码`));let w=t(`div`);u(f,w),s(w,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let T=a(`rue:slot:anchor`);u(w,T),d(()=>{l(S.value===`code`?m(()=>{let e=o(),n=t(`div`);u(e,n),s(n,`card bg-base-100 shadow overflow-auto h-[260px] md:h-[560px]`);let r=t(`div`);u(n,r),s(r,`card-body p-0`);let i=a(`rue:component:anchor`);return u(r,i),d(()=>{l(p(_,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default HandlingInput;`}),r,i)}),e}):``,w,T)}),u(w,r(` `));let E=a(`rue:slot:anchor`);return u(w,E),d(()=>{l(S.value===`preview`?m(()=>{let a=o(),l=t(`div`);u(a,l),s(l,`card bg-base-100 shadow`);let f=t(`div`);u(l,f),s(f,`card-body`);let p=t(`h1`);u(f,p),s(p,`text-2xl font-semibold`);let m=i(p);u(p,m),d(()=>{c(m,y.value)});let h=t(`button`);u(f,h),s(h,`btn btn-primary`),e(h,`click`,b),u(h,r(`Reverse Message`));let g=t(`button`);u(f,g),s(g,`btn btn-outline`),e(g,`click`,()=>y.value+=`!`),u(g,r(`Append "!"`));let _=t(`a`);return u(f,_),s(_,`link link-primary`),n(_,`href`,`https://google.com`),e(_,`click`,e=>{e.preventDefault(),x()}),u(_,r(`A link with e.preventDefault()`)),a}):``,w,E)}),f})}),f,h),f})};export{y as default};