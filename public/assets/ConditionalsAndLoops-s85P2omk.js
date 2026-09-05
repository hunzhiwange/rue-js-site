import{B as e,Bt as t,C as n,Dn as r,Et as i,H as a,K as o,L as s,Lt as c,Mt as l,S as u,V as d,W as f,_n as p,bn as m,fn as h,gn as g,hn as _,nt as v,ot as y,pn as b,q as x,wn as S,x as C,z as w}from"./rue-runtime-CwEGJ854.js";import{t as T}from"./Code-B3jCYMAr.js";import{r as E}from"./SidebarPlaygroundExample-EGR0CyDT.js";var D=p(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">条件与循环（移植自 Vue）</h1>`),O=p(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),k=p(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),A=()=>{console.log(`hello1`);let p=t(!0),A=t([1,2,3]);console.log(`hello2`);let j=()=>{p.value=!p.value};console.log(`i am here1`);let M=()=>{A.value=[...A.value,A.value.length+1]},N=()=>{A.value=A.value.slice(0,-1)},P=()=>{A.value=[...A.value].reverse()},F=t(`preview`);return console.log(`i am here2`),l(()=>x(a(E,()=>({children:[(e,t,n)=>C(e,n,()=>i(Object.assign(e=>{let t=v();return t.appendChild(D().content.cloneNode(!0)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,n)=>C(e,n,()=>i(Object.assign(e=>{let t=v(),n=O().content.cloneNode(!0),r=n.firstChild,i=r.childNodes[0],a=r.childNodes[1];t.appendChild(n),y(i,`role`,`tab`),S(()=>{s(i,`tab ${F.value===`preview`?`tab-active`:``}`)});let o=e=>{let t=()=>{F.value=`preview`};typeof t==`function`&&t(e)};i.addEventListener(`click`,o),c(()=>i.removeEventListener(`click`,o)),y(a,`role`,`tab`),S(()=>{s(a,`tab ${F.value===`code`?`tab-active`:``}`)});let l=e=>{let t=()=>{F.value=`code`};typeof t==`function`&&t(e)};return a.addEventListener(`click`,l),c(()=>a.removeEventListener(`click`,l)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,a,s)=>C(t,s,()=>i(Object.assign(t=>{let a=v(),s=k().content.cloneNode(!0),c=s.firstChild,l=c.childNodes[0],y=l.parentNode,x=c.childNodes[1],w=x.parentNode;return a.appendChild(s),d(y,l,()=>{let e=F.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>i(Object.assign(e=>{let t=_(`div`,e);t.className=`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`;let n=_(`div`,t);return h(t,n),n.className=`card-body p-0`,o(n,T,()=>({className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default ConditionalsAndLoops;`})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>i(Object.assign(t=>{let n=g(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>i(Object.assign(e=>{let t=v();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),d(w,x,()=>{let t=F.value===`preview`;return t?{__rue_compiled_branch_key:!0,create:()=>i(Object.assign(t=>{let a=_(`div`,t);a.className=`card bg-base-100 shadow`;let o=_(`div`,a);h(a,o),o.className=`card-body grid gap-4`;let s=_(`div`,o);h(o,s),s.className=`flex flex-wrap gap-2`;let c=_(`button`,s);h(s,c),c.className=`btn btn-primary`;let l=e=>{let t=j;typeof t==`function`&&t(e)};c.addEventListener(`click`,l),r(()=>c.removeEventListener(`click`,l)),h(c,g(`Toggle List`));let d=_(`button`,s);h(s,d),d.className=`btn btn-primary`;let v=e=>{let t=M;typeof t==`function`&&t(e)};d.addEventListener(`click`,v),r(()=>d.removeEventListener(`click`,v)),h(d,g(`Push Number`));let y=_(`button`,s);h(s,y),y.className=`btn btn-primary`;let x=e=>{let t=N;typeof t==`function`&&t(e)};y.addEventListener(`click`,x),r(()=>y.removeEventListener(`click`,x)),h(y,g(`Pop Number`));let w=_(`button`,s);h(s,w),w.className=`btn btn-primary`;let T=e=>{let t=P;typeof t==`function`&&t(e)};return w.addEventListener(`click`,T),r(()=>w.removeEventListener(`click`,T)),h(w,g(`Reverse List`)),e(()=>p.value&&A.value.length?{__rue_compiled_branch_key:!0,create:()=>i(Object.assign(e=>{let t=_(`ul`,e);t.className=`list-disc pl-6 space-y-1`;let r=b(`rue:list:end`);h(t,r);let a=[];return S(()=>{let e=A.value||[];a=n(r.parentNode,r,a,e,(e,t)=>e,(e,t)=>{let n=f(e),r=f(t);return u((e,t,r)=>C(e,r,()=>i(Object.assign(e=>{let t=_(`li`,e),r=g(``);return h(t,r),m(r,()=>n.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(i,a)=>{e=i,t=a,n.set(i),r.set(a)})})}),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>e(()=>A.value.length?{__rue_compiled_branch_key:!0,create:()=>i(Object.assign(e=>{let t=_(`p`,e);return t.className=`text-gray-700`,h(t,g(`List is not empty, but hidden.`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>i(Object.assign(e=>{let t=_(`p`,e);return t.className=`text-gray-700`,h(t,g(`List is empty.`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))})}).__rue_compiled_mount(o),{__rue_compiled_host:a,__rue_compiled_roots:[a]}},{__rue_compiled_explicit_roots:!0}))}:typeof t==`number`||typeof t==`bigint`?{__rue_compiled_branch_key:t,create:()=>i(Object.assign(e=>{let n=g(typeof t==`string`||typeof t==`number`||typeof t==`bigint`?t:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>i(Object.assign(e=>{let t=v();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),{__rue_compiled_host:a,__rue_compiled_roots:[a]}},{__rue_compiled_explicit_roots:!0})))]})),e=>w(()=>{})))};export{A as default};