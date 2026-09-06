import{At as e,Dn as t,Mt as n,Ot as r,Q as i,Qt as a,Vt as o,_n as s,_t as c,bt as l,ct as u,dt as d,et as f,gn as p,gt as m,kn as h,nt as g,pn as _,qt as v,st as y,tn as b,ut as x,vn as S,vt as C,wn as w,xt as T,yt as E}from"./rue-runtime-HIMg8Lz8.js";import{t as D}from"./Code-DpH7u0gk.js";import{r as O}from"./SidebarPlaygroundExample-BCPRe0hA.js";var k=S(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">处理输入（移植自 Vue）</h1>`),A=S(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),j=S(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),M=()=>{let S=b(`Hello World!`),M=()=>{S.value=S.value.split(``).reverse().join(``)},N=()=>{alert(`navigation was prevented.`)},P=b(`preview`);return v(()=>u((()=>{let u=e(()=>{let t=c(),n=j().content.cloneNode(!0),u=n.firstChild,f=u.childNodes[0],v=f.parentNode,b=u.childNodes[1],O=b.parentNode;return t.appendChild(n),g(v,f,()=>{let e=P.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>o(Object.assign(e=>{let t=p(`div`,e);t.className=`card bg-base-100 shadow overflow-auto h-[260px] md:h-[560px]`;let n=p(`div`,t);return _(t,n),n.className=`card-body p-0`,y(n,D,()=>({className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default HandlingInput;`})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>o(Object.assign(t=>{let n=s(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>o(Object.assign(e=>{let t=c();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),w(()=>{let t=P.value===`preview`?e(()=>{let e=c(),t=C(`div`,e);d(e,t),i(t,`card bg-base-100 shadow`);let n=C(`div`,t);d(t,n),i(n,`card-body`);let o=C(`h1`,n);d(n,o),i(o,`text-2xl font-semibold`),d(o,E(`message.value: `));let s=l(o);d(o,s),w(()=>{r(s,S.value)});let u=C(`h1`,n);d(n,u),i(u,`text-2xl font-semibold`),d(u,E(`message: `));let f=m(`rue:slot:anchor`);d(u,f),w(()=>{let e=S;h(()=>x(e,u,f))});let p=C(`button`,n);d(n,p),i(p,`btn btn-primary`);let g=e=>{let t=M;typeof t==`function`&&t(e)};p.addEventListener(`click`,g),a(()=>p.removeEventListener(`click`,g)),d(p,E(`Reverse Message`));let _=C(`button`,n);d(n,_),i(_,`btn btn-outline`);let v=e=>{let t=()=>S.value+=`!`;typeof t==`function`&&t(e)};_.addEventListener(`click`,v),a(()=>_.removeEventListener(`click`,v)),d(_,E(`Append "!"`));let y=C(`a`,n);d(n,y),i(y,`link link-primary`),T(y,`href`,`https://google.com`);let b=e=>{let t=e=>{e.preventDefault(),N()};typeof t==`function`&&t(e)};return y.addEventListener(`click`,b),a(()=>y.removeEventListener(`click`,b)),d(y,E(`A link with e.preventDefault()`)),e},!0):``;h(()=>x(t,O,b))}),t});return n(O,()=>({children:[o(e=>k().content.cloneNode(!0).firstChild),o(Object.assign(e=>{let n=A().content.cloneNode(!0).firstChild,r=n.childNodes[0],i=n.childNodes[1];r.setAttribute(`role`,`tab`);let a;w(()=>{let e=`tab ${P.value===`preview`?`tab-active`:``}`,t=e==null?``:String(e);Object.is(a,t)||(a=t,r.className=t)});let o=e=>{let t=()=>{P.value=`preview`};typeof t==`function`&&t(e)};r.addEventListener(`click`,o),t(()=>r.removeEventListener(`click`,o)),i.setAttribute(`role`,`tab`);let s;w(()=>{let e=`tab ${P.value===`code`?`tab-active`:``}`,t=e==null?``:String(e);Object.is(s,t)||(s=t,i.className=t)});let c=e=>{let t=()=>{P.value=`code`};typeof t==`function`&&t(e)};return i.addEventListener(`click`,c),t(()=>i.removeEventListener(`click`,c)),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})),u]}))})(),e=>f(()=>{})))};export{M as default};