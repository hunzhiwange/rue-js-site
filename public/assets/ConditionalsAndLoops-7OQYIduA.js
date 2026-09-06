import{C as e,Dn as t,E as n,Q as r,Qt as i,Vt as a,_n as o,_t as s,at as c,b as l,ct as u,et as d,gn as f,mn as p,nt as m,pn as h,qt as g,rt as _,st as v,tn as y,tt as b,vn as x,w as S,wn as C,xn as w,xt as T}from"./rue-runtime-HIMg8Lz8.js";import{t as E}from"./Code-DpH7u0gk.js";import{r as D}from"./SidebarPlaygroundExample-BCPRe0hA.js";var O=x(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">条件与循环（移植自 Vue）</h1>`),k=x(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),A=x(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),j=()=>{console.log(`hello1`);let x=y(!0),j=y([1,2,3]);console.log(`hello2`);let M=()=>{x.value=!x.value};console.log(`i am here1`);let N=()=>{j.value=[...j.value,j.value.length+1]},P=()=>{j.value=j.value.slice(0,-1)},F=()=>{j.value=[...j.value].reverse()},I=y(`preview`);return console.log(`i am here2`),g(()=>u(_(D,()=>({children:[(e,t,r)=>n(e,r,()=>a(Object.assign(e=>{let t=s();return t.appendChild(O().content.cloneNode(!0)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,o)=>n(e,o,()=>a(Object.assign(e=>{let t=s(),n=k().content.cloneNode(!0),a=n.firstChild,o=a.childNodes[0],c=a.childNodes[1];t.appendChild(n),T(o,`role`,`tab`),C(()=>{r(o,`tab ${I.value===`preview`?`tab-active`:``}`)});let l=e=>{let t=()=>{I.value=`preview`};typeof t==`function`&&t(e)};o.addEventListener(`click`,l),i(()=>o.removeEventListener(`click`,l)),T(c,`role`,`tab`),C(()=>{r(c,`tab ${I.value===`code`?`tab-active`:``}`)});let u=e=>{let t=()=>{I.value=`code`};typeof t==`function`&&t(e)};return c.addEventListener(`click`,u),i(()=>c.removeEventListener(`click`,u)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(r,i,u)=>n(r,u,()=>a(Object.assign(r=>{let i=s(),u=A().content.cloneNode(!0),d=u.firstChild,g=d.childNodes[0],_=g.parentNode,y=d.childNodes[1],T=y.parentNode;return i.appendChild(u),m(_,g,()=>{let e=I.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>a(Object.assign(e=>{let t=f(`div`,e);t.className=`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`;let n=f(`div`,t);return h(t,n),n.className=`card-body p-0`,v(n,E,()=>({className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

const ConditionalsAndLoops: FC = () => {
  const show = ref(true);
  const list = ref<number[]>([1, 2, 3]);

  const toggleShow = () => {
    show.value = !show.value;
  };
  const pushNumber = () => {
    list.value = [...list.value, list.value.length + 1];
  };
  const popNumber = () => {
    list.value = list.value.slice(0, -1);
  };
  const reverseList = () => {
    list.value = [...list.value].reverse();
  };

  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body grid gap-4">
        <div className="flex flex-wrap gap-2">
          <button className="btn btn-primary" onClick={toggleShow}>
            Toggle List
          </button>
          <button className="btn btn-primary" onClick={pushNumber}>
            Push Number
          </button>
          <button className="btn btn-primary" onClick={popNumber}>
            Pop Number
          </button>
          <button className="btn btn-primary" onClick={reverseList}>
            Reverse List
          </button>
        </div>

        {show.value && list.value.length ? (
          <ul className="list-disc pl-6 space-y-1">
            {list.value.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : list.value.length ? (
          <p className="text-gray-700">List is not empty, but hidden.</p>
        ) : (
          <p className="text-gray-700">List is empty.</p>
        )}
      </div>
    </div>
  );
};

export default ConditionalsAndLoops;`})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>a(Object.assign(t=>{let n=o(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>a(Object.assign(e=>{let t=s();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),m(T,y,()=>{let r=I.value===`preview`;return r?{__rue_compiled_branch_key:!0,create:()=>a(Object.assign(r=>{let i=f(`div`,r);i.className=`card bg-base-100 shadow`;let s=f(`div`,i);h(i,s),s.className=`card-body grid gap-4`;let u=f(`div`,s);h(s,u),u.className=`flex flex-wrap gap-2`;let d=f(`button`,u);h(u,d),d.className=`btn btn-primary`;let m=e=>{let t=M;typeof t==`function`&&t(e)};d.addEventListener(`click`,m),t(()=>d.removeEventListener(`click`,m)),h(d,o(`Toggle List`));let g=f(`button`,u);h(u,g),g.className=`btn btn-primary`;let _=e=>{let t=N;typeof t==`function`&&t(e)};g.addEventListener(`click`,_),t(()=>g.removeEventListener(`click`,_)),h(g,o(`Push Number`));let v=f(`button`,u);h(u,v),v.className=`btn btn-primary`;let y=e=>{let t=P;typeof t==`function`&&t(e)};v.addEventListener(`click`,y),t(()=>v.removeEventListener(`click`,y)),h(v,o(`Pop Number`));let T=f(`button`,u);h(u,T),T.className=`btn btn-primary`;let E=e=>{let t=F;typeof t==`function`&&t(e)};return T.addEventListener(`click`,E),t(()=>T.removeEventListener(`click`,E)),h(T,o(`Reverse List`)),b(()=>x.value&&j.value.length?{__rue_compiled_branch_key:!0,create:()=>a(Object.assign(r=>{let i=f(`ul`,r);i.className=`list-disc pl-6 space-y-1`;let s=p(`rue:list:end`);h(i,s);let u=[];return C(()=>{let t=j.value||[];u=S(s.parentNode,s,u,t,(e,t)=>e,(t,r)=>{let i=c(t);return e((e,t,r)=>n(e,r,()=>a(Object.assign(e=>{let t=f(`li`,e),n=o(``);return h(t,n),w(n,()=>i.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,n)=>{t=e,r=n,i.set(e)})})}),t(()=>l(u)),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>b(()=>j.value.length?{__rue_compiled_branch_key:!0,create:()=>a(Object.assign(e=>{let t=f(`p`,e);return t.className=`text-gray-700`,h(t,o(`List is not empty, but hidden.`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>a(Object.assign(e=>{let t=f(`p`,e);return t.className=`text-gray-700`,h(t,o(`List is empty.`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))})}).__rue_compiled_mount(s),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0}))}:typeof r==`number`||typeof r==`bigint`?{__rue_compiled_branch_key:r,create:()=>a(Object.assign(e=>{let t=o(typeof r==`string`||typeof r==`number`||typeof r==`bigint`?r:``);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>a(Object.assign(e=>{let t=s();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0})))]})),e=>d(()=>{})))};export{j as default};