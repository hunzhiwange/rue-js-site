import{Bt as e,Dn as t,Et as n,H as r,K as i,L as a,Lt as o,Mt as s,V as c,_n as l,bn as u,fn as d,gn as f,hn as p,nt as m,ot as h,q as g,wn as _,x as v,z as y}from"./rue-runtime-CwEGJ854.js";import{t as b}from"./Code-B3jCYMAr.js";import{r as x}from"./SidebarPlaygroundExample-EGR0CyDT.js";var S=l(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">处理输入（移植自 Vue）</h1>`),C=l(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),w=l(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),T=()=>{let l=e(`Hello World!`),T=()=>{l.value=l.value.split(``).reverse().join(``)},E=()=>{alert(`navigation was prevented.`)},D=e(`preview`);return s(()=>g(r(x,()=>({children:[(e,t,r)=>v(e,r,()=>n(Object.assign(e=>{let t=m();return t.appendChild(S().content.cloneNode(!0)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,r)=>v(e,r,()=>n(Object.assign(e=>{let t=m(),n=C().content.cloneNode(!0),r=n.firstChild,i=r.childNodes[0],s=r.childNodes[1];t.appendChild(n),h(i,`role`,`tab`),_(()=>{a(i,`tab ${D.value===`preview`?`tab-active`:``}`)});let c=e=>{let t=()=>{D.value=`preview`};typeof t==`function`&&t(e)};i.addEventListener(`click`,c),o(()=>i.removeEventListener(`click`,c)),h(s,`role`,`tab`),_(()=>{a(s,`tab ${D.value===`code`?`tab-active`:``}`)});let l=e=>{let t=()=>{D.value=`code`};typeof t==`function`&&t(e)};return s.addEventListener(`click`,l),o(()=>s.removeEventListener(`click`,l)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,r,a)=>v(e,a,()=>n(Object.assign(e=>{let r=m(),a=w().content.cloneNode(!0),o=a.firstChild,s=o.childNodes[0],h=s.parentNode,g=o.childNodes[1],_=g.parentNode;return r.appendChild(a),c(h,s,()=>{let e=D.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>n(Object.assign(e=>{let t=p(`div`,e);t.className=`card bg-base-100 shadow overflow-auto h-[260px] md:h-[560px]`;let n=p(`div`,t);return d(t,n),n.className=`card-body p-0`,i(n,b,()=>({className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default HandlingInput;`})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>n(Object.assign(t=>{let n=f(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>n(Object.assign(e=>{let t=m();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),c(_,g,()=>{let e=D.value===`preview`;return e?{__rue_compiled_branch_key:!0,create:()=>n(Object.assign(e=>{let n=p(`div`,e);n.className=`card bg-base-100 shadow`;let r=p(`div`,n);d(n,r),r.className=`card-body`;let i=p(`h1`,r);d(r,i),i.className=`text-2xl font-semibold`;let a=f(``);d(i,a),u(a,()=>l.value);let o=p(`button`,r);d(r,o),o.className=`btn btn-primary`;let s=e=>{let t=T;typeof t==`function`&&t(e)};o.addEventListener(`click`,s),t(()=>o.removeEventListener(`click`,s)),d(o,f(`Reverse Message`));let c=p(`button`,r);d(r,c),c.className=`btn btn-outline`;let m=e=>{let t=()=>l.value+=`!`;typeof t==`function`&&t(e)};c.addEventListener(`click`,m),t(()=>c.removeEventListener(`click`,m)),d(c,f(`Append "!"`));let h=p(`a`,r);d(r,h),h.className=`link link-primary`,h.setAttribute(`href`,`https://google.com`);let g=e=>{let t=e=>{e.preventDefault(),E()};typeof t==`function`&&t(e)};return h.addEventListener(`click`,g),t(()=>h.removeEventListener(`click`,g)),d(h,f(`A link with e.preventDefault()`)),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>n(Object.assign(t=>{let n=f(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>n(Object.assign(e=>{let t=m();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})))]})),e=>y(()=>{})))};export{T as default};