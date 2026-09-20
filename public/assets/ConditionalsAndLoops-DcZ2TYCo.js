import{F as e,Ht as t,P as n,Ut as r,V as i,Vt as a,W as o,Wt as s,X as c,Y as l,f as u,fn as d,gn as f,h as p,hn as m,in as h,mn as g,mt as _,nt as v,p as y,pn as b,qt as x,sn as S,u as C,yn as w}from"./rue-runtime-BWbIfNT8.js";import{t as T}from"./Code-C5ZhIIr9.js";import{r as E}from"./SidebarPlaygroundExample-DUmYtIFQ.js";var D=w(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">条件与循环（移植自 Vue）</h1>`),O=w(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),k=w(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),A=(w,A,j)=>{console.log(`hello1`);let M=_(!0),N=_([1,2,3]);console.log(`hello2`);let P=()=>{M.value=!M.value};console.log(`i am here1`);let F=()=>{N.value=[...N.value,N.value.length+1]},I=()=>{N.value=N.value.slice(0,-1)},L=()=>{N.value=[...N.value].reverse()},R=_(`preview`);return console.log(`i am here2`),v(()=>n(E,()=>({children:(n,_,v)=>{let w=()=>s(n=>{let _=g();_.appendChild(D().content.cloneNode(!0));let v=O().content.cloneNode(!0),w=v.firstChild,E=w.childNodes[0],A=w.childNodes[1];_.appendChild(v),E.setAttribute(`role`,`tab`);let j;h(()=>{let e=`tab ${R.value===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(j,t)||(j=t,E.setAttribute(`class`,t))}),S(C(n,E,`click`,()=>()=>{R.value=`preview`})),A.setAttribute(`role`,`tab`);let z;h(()=>{let e=`tab ${R.value===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(z,t)||(z=t,A.setAttribute(`class`,t))}),S(C(n,A,`click`,()=>()=>{R.value=`code`}));let B=k().content.cloneNode(!0),V=B.firstChild,H=V.childNodes[0],U=H.parentNode,W=V.childNodes[1],G=W.parentNode;_.appendChild(B),r(U,H,()=>{let t=R.value===`code`;return t?{__rue_compiled_branch_key:!0,create:()=>s(t=>{let n=m(`div`,t);n.setAttribute(`class`,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`);let r=m(`div`,n);return d(n,r),r.setAttribute(`class`,`card-body p-0`),e(r,T,()=>({className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default ConditionalsAndLoops;`})),[n,n]})}:typeof t==`number`||typeof t==`bigint`?{__rue_compiled_branch_key:t,create:()=>i(e=>{let n=f(typeof t==`string`||typeof t==`number`||typeof t==`bigint`?t:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>i(e=>{let t=g();return[t.firstChild,t.lastChild]})}}),r(G,W,()=>{let e=R.value===`preview`;return e?{__rue_compiled_branch_key:!0,create:()=>s(e=>{let n=m(`div`,e);n.setAttribute(`class`,`card bg-base-100 shadow`);let r=m(`div`,n);d(n,r),r.setAttribute(`class`,`card-body grid gap-4`);let h=m(`div`,r);d(r,h),h.setAttribute(`class`,`flex flex-wrap gap-2`);let g=m(`button`,h);d(h,g),g.setAttribute(`class`,`btn btn-primary`);let _=e=>{let t=P;typeof t==`function`&&t(e)};g.addEventListener(`click`,_),S(()=>g.removeEventListener(`click`,_)),d(g,f(`Toggle List`));let v=m(`button`,h);d(h,v),v.setAttribute(`class`,`btn btn-primary`);let C=e=>{let t=F;typeof t==`function`&&t(e)};v.addEventListener(`click`,C),S(()=>v.removeEventListener(`click`,C)),d(v,f(`Push Number`));let w=m(`button`,h);d(h,w),w.setAttribute(`class`,`btn btn-primary`);let T=e=>{let t=I;typeof t==`function`&&t(e)};w.addEventListener(`click`,T),S(()=>w.removeEventListener(`click`,T)),d(w,f(`Pop Number`));let E=m(`button`,h);d(h,E),E.setAttribute(`class`,`btn btn-primary`);let D=e=>{let t=L;typeof t==`function`&&t(e)};return E.addEventListener(`click`,D),S(()=>E.removeEventListener(`click`,D)),d(E,f(`Reverse List`)),t(()=>M.value&&N.value.length?{__rue_compiled_branch_key:!0,create:()=>s(e=>{let t=m(`ul`,e);t.setAttribute(`class`,`list-disc pl-6 space-y-1`);let n=b(`rue:list:end`);d(t,n);let r=[];return x(()=>{let e=N.value||[];r=p(n.parentNode,n,r,e,(e,t)=>e,(e,t)=>{let n=o(e);return y((e,t,r)=>{let i=()=>l(e=>{let t=m(`li`,e),r=f(``);return d(t,r),c(r,()=>n.get()),[t,t]});return e==null?i():a(e,r,i)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),S(()=>u(r)),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>t(()=>N.value.length?{__rue_compiled_branch_key:!0,create:()=>i(e=>{let t=m(`p`,e);return t.setAttribute(`class`,`text-gray-700`),d(t,f(`List is not empty, but hidden.`)),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>i(e=>{let t=m(`p`,e);return t.setAttribute(`class`,`text-gray-700`),d(t,f(`List is empty.`)),[t,t]})})}).__rue_compiled_mount(r),[n,n]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>i(t=>{let n=f(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>i(e=>{let t=g();return[t.firstChild,t.lastChild]})}});let K=f(``),q=f(``);return _.insertBefore(K,_.firstChild),_.appendChild(q),[_.firstChild,_.lastChild]});return n==null?w():a(n,v,w)}})))};export{A as default};