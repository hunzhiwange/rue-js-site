import{H as e,Qt as t,Ut as n,V as r,Vt as i,Wt as a,Y as o,fn as s,gn as c,hn as l,in as u,mn as d,sn as f,st as p,u as m,yn as h,yt as g}from"./rue-runtime-Cv6BZekS.js";import{t as _}from"./Code-BzFVdc3U.js";import{r as v}from"./SidebarPlaygroundExample-rFyhXfC_.js";var y=h(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">处理输入（移植自 Vue）</h1>`),b=h(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),x=h(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),S=(h,S,C)=>{let w=p(`Hello World!`),T=()=>{w.value=w.value.split(``).reverse().join(``)},E=()=>{alert(`navigation was prevented.`)},D=p(`preview`);return o(()=>r(v,()=>({children:(r,o,p)=>{let h=()=>a(r=>{let i=d();i.appendChild(y().content.cloneNode(!0));let o=b().content.cloneNode(!0),p=o.firstChild,h=p.childNodes[0],v=p.childNodes[1];i.appendChild(o),h.setAttribute(`role`,`tab`);let S;u(()=>{let e=`tab ${D.value===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(S,t)||(S=t,h.setAttribute(`class`,t))}),f(m(r,h,`click`,()=>()=>{D.value=`preview`})),v.setAttribute(`role`,`tab`);let C;u(()=>{let e=`tab ${D.value===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(C,t)||(C=t,v.setAttribute(`class`,t))}),f(m(r,v,`click`,()=>()=>{D.value=`code`}));let O=x().content.cloneNode(!0),k=O.firstChild,A=k.childNodes[0],j=A.parentNode,M=k.childNodes[1],N=M.parentNode;i.appendChild(O),n(j,A,()=>{let t=D.value===`code`;return t?{__rue_compiled_branch_key:!0,create:()=>a(t=>{let n=l(`div`,t);n.setAttribute(`class`,`card bg-base-100 shadow overflow-auto h-[260px] md:h-[560px]`);let r=l(`div`,n);return s(n,r),r.setAttribute(`class`,`card-body p-0`),e(r,_,()=>({className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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
        <h1 className="text-2xl font-semibold">message.value: {message.value}</h1>
        <h1 className="text-2xl font-semibold">message: {message}</h1>
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

export default HandlingInput;`})),[n,n]})}:typeof t==`number`||typeof t==`bigint`?{__rue_compiled_branch_key:t,create:()=>g(e=>{let n=c(typeof t==`string`||typeof t==`number`||typeof t==`bigint`?t:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>g(e=>{let t=d();return[t.firstChild,t.lastChild]})}}),n(N,M,()=>{let e=D.value===`preview`;return e?{__rue_compiled_branch_key:!0,create:()=>a(e=>{let n=l(`div`,e);n.setAttribute(`class`,`card bg-base-100 shadow`);let r=l(`div`,n);s(n,r),r.setAttribute(`class`,`card-body`);let i=l(`h1`,r);s(r,i),i.setAttribute(`class`,`text-2xl font-semibold`),s(i,c(`message.value: `));let a=c(``);s(i,a),t(a,()=>w.value);let o=l(`h1`,r);s(r,o),o.setAttribute(`class`,`text-2xl font-semibold`),s(o,c(`message: `));let u=c(``);s(o,u),t(u,()=>w.value);let d=l(`button`,r);s(r,d),d.setAttribute(`class`,`btn btn-primary`);let p=e=>{let t=T;typeof t==`function`&&t(e)};d.addEventListener(`click`,p),f(()=>d.removeEventListener(`click`,p)),s(d,c(`Reverse Message`));let h=l(`button`,r);s(r,h),h.setAttribute(`class`,`btn btn-outline`),f(m(e,h,`click`,()=>()=>w.value+=`!`)),s(h,c(`Append "!"`));let g=l(`a`,r);s(r,g),g.setAttribute(`class`,`link link-primary`),g.setAttribute(`href`,`https://google.com`);let _=e=>{let t=e=>{e.preventDefault(),E()};typeof t==`function`&&t(e)};return g.addEventListener(`click`,_),f(()=>g.removeEventListener(`click`,_)),s(g,c(`A link with e.preventDefault()`)),[n,n]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>g(t=>{let n=c(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>g(e=>{let t=d();return[t.firstChild,t.lastChild]})}});let P=c(``),F=c(``);return i.insertBefore(P,i.firstChild),i.appendChild(F),[i.firstChild,i.lastChild]});return r==null?h():i(r,p,h)}})))};export{S as default};