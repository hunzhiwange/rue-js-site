import{F as e,H as t,Ht as n,I as r,Ut as i,V as a,Vt as o,Wt as s,Y as c,f as l,fn as u,gn as d,h as f,hn as p,in as m,mn as h,p as g,pn as _,qt as v,sn as y,st as b,u as x,vt as S,yn as C,yt as w}from"./rue-runtime-Cv6BZekS.js";import{t as T}from"./Code-BzFVdc3U.js";import{r as E}from"./SidebarPlaygroundExample-rFyhXfC_.js";var D=C(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">条件与循环（移植自 Vue）</h1>`),O=C(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),k=C(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),A=(C,A,j)=>{console.log(`hello1`);let M=b(!0),N=b([1,2,3]);console.log(`hello2`);let P=()=>{M.value=!M.value};console.log(`i am here1`);let F=()=>{N.value=[...N.value,N.value.length+1]},I=()=>{N.value=N.value.slice(0,-1)},L=()=>{N.value=[...N.value].reverse()},R=b(`preview`);return console.log(`i am here2`),c(()=>a(E,()=>({children:(a,c,b)=>{let C=()=>s(a=>{let c=h();c.appendChild(D().content.cloneNode(!0));let b=O().content.cloneNode(!0),C=b.firstChild,E=C.childNodes[0],A=C.childNodes[1];c.appendChild(b),E.setAttribute(`role`,`tab`);let j;m(()=>{let e=`tab ${R.value===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(j,t)||(j=t,E.setAttribute(`class`,t))}),y(x(a,E,`click`,()=>()=>{R.value=`preview`})),A.setAttribute(`role`,`tab`);let z;m(()=>{let e=`tab ${R.value===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(z,t)||(z=t,A.setAttribute(`class`,t))}),y(x(a,A,`click`,()=>()=>{R.value=`code`}));let B=k().content.cloneNode(!0),V=B.firstChild,H=V.childNodes[0],U=H.parentNode,W=V.childNodes[1],G=W.parentNode;c.appendChild(B),i(U,H,()=>{let e=R.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>s(e=>{let n=p(`div`,e);n.setAttribute(`class`,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`);let r=p(`div`,n);return u(n,r),r.setAttribute(`class`,`card-body p-0`),t(r,T,()=>({className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default ConditionalsAndLoops;`})),[n,n]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>w(t=>{let n=d(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>w(e=>{let t=h();return[t.firstChild,t.lastChild]})}}),i(G,W,()=>{let t=R.value===`preview`;return t?{__rue_compiled_branch_key:!0,create:()=>s(t=>{let i=p(`div`,t);i.setAttribute(`class`,`card bg-base-100 shadow`);let a=p(`div`,i);u(i,a),a.setAttribute(`class`,`card-body grid gap-4`);let c=p(`div`,a);u(a,c),c.setAttribute(`class`,`flex flex-wrap gap-2`);let m=p(`button`,c);u(c,m),m.setAttribute(`class`,`btn btn-primary`);let h=e=>{let t=P;typeof t==`function`&&t(e)};m.addEventListener(`click`,h),y(()=>m.removeEventListener(`click`,h)),u(m,d(`Toggle List`));let b=p(`button`,c);u(c,b),b.setAttribute(`class`,`btn btn-primary`);let x=e=>{let t=F;typeof t==`function`&&t(e)};b.addEventListener(`click`,x),y(()=>b.removeEventListener(`click`,x)),u(b,d(`Push Number`));let C=p(`button`,c);u(c,C),C.setAttribute(`class`,`btn btn-primary`);let T=e=>{let t=I;typeof t==`function`&&t(e)};C.addEventListener(`click`,T),y(()=>C.removeEventListener(`click`,T)),u(C,d(`Pop Number`));let E=p(`button`,c);u(c,E),E.setAttribute(`class`,`btn btn-primary`);let D=e=>{let t=L;typeof t==`function`&&t(e)};return E.addEventListener(`click`,D),y(()=>E.removeEventListener(`click`,D)),u(E,d(`Reverse List`)),n(()=>M.value&&N.value.length?{__rue_compiled_branch_key:!0,create:()=>s(t=>{let n=p(`ul`,t);n.setAttribute(`class`,`list-disc pl-6 space-y-1`);let i=_(`rue:list:end`);u(n,i);let a=[];return v(()=>{let t=N.value||[];a=f(i.parentNode,i,a,t,(e,t)=>e,(t,n)=>{let i=S(t);return g((t,n,a)=>{let s=()=>e(e=>{let t=p(`li`,e),n=d(``);return u(t,n),r(n,()=>i.get()),[t,t]});return t==null?s():o(t,a,s)},(e,r)=>{t=e,n=r,i.set(e)},void 0)},!1,!1)}),y(()=>l(a)),[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>n(()=>N.value.length?{__rue_compiled_branch_key:!0,create:()=>w(e=>{let t=p(`p`,e);return t.setAttribute(`class`,`text-gray-700`),u(t,d(`List is not empty, but hidden.`)),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>w(e=>{let t=p(`p`,e);return t.setAttribute(`class`,`text-gray-700`),u(t,d(`List is empty.`)),[t,t]})})}).__rue_compiled_mount(a),[i,i]})}:typeof t==`number`||typeof t==`bigint`?{__rue_compiled_branch_key:t,create:()=>w(e=>{let n=d(typeof t==`string`||typeof t==`number`||typeof t==`bigint`?t:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>w(e=>{let t=h();return[t.firstChild,t.lastChild]})}});let K=d(``),q=d(``);return c.insertBefore(K,c.firstChild),c.appendChild(q),[c.firstChild,c.lastChild]});return a==null?C():o(a,b,C)}})))};export{A as default};