import{Bt as e,F as t,P as n,Ut as r,V as i,Vt as a,W as o,Wt as s,ct as c,f as l,fn as u,gn as d,h as f,hn as p,in as m,mn as h,mt as g,nt as _,p as v,pn as y,qt as b,sn as x,u as S,yn as C,zt as w}from"./rue-runtime-BWbIfNT8.js";import{t as T}from"./Code-C5ZhIIr9.js";import{r as E}from"./SidebarPlaygroundExample-DUmYtIFQ.js";var D=C(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">v-for / r-for</h1>`),O=C(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),k=C(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),A=[{id:1,name:`Apple`,color:`红色`},{id:2,name:`Banana`,color:`黄色`},{id:3,name:`Cherry`,color:`酒红色`}],j={framework:`Rue`,renderer:`Vapor`,syntax:`TSX directives`},M=(C,M,N)=>{let P=g(`code`),F=g([...A]),I=g(3),L=c(()=>F.value.map((e,t)=>({...e,rank:t+1})));return _(()=>n(E,()=>({children:(n,c,g)=>{let _=()=>s(n=>{let c=h();c.appendChild(D().content.cloneNode(!0));let g=O().content.cloneNode(!0),_=g.firstChild,C=_.childNodes[0],E=_.childNodes[1];c.appendChild(g),C.setAttribute(`role`,`tab`);let M;m(()=>{let e=`tab ${P.value===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(M,t)||(M=t,C.setAttribute(`class`,t))}),x(S(n,C,`click`,()=>()=>{P.value=`preview`})),E.setAttribute(`role`,`tab`);let N;m(()=>{let e=`tab ${P.value===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(N,t)||(N=t,E.setAttribute(`class`,t))}),x(S(n,E,`click`,()=>()=>{P.value=`code`}));let R=k().content.cloneNode(!0),z=R.firstChild,B=z.childNodes[0],V=B.parentNode,H=z.childNodes[1],U=H.parentNode;c.appendChild(R),r(V,B,()=>{let e=P.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>s(e=>{let n=p(`div`,e);n.setAttribute(`class`,`card bg-base-100 shadow overflow-auto`);let r=p(`div`,n);return u(n,r),r.setAttribute(`class`,`card-body p-0`),t(r,T,()=>({className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

const meta = {
  framework: 'Rue',
  renderer: 'Vapor',
  syntax: 'TSX directives',
};

const VForAndRFor: FC = () => {
  const fruits = ref([
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' },
  ]);
  const count = ref(3);

  return (
    <div className="grid gap-4">
      <ul className="list bg-base-100 rounded-box">
        <li v-for="(item, index) in fruits.value" className="list-row">
          {index + 1}. {item.name}
        </li>
      </ul>

      <div className="flex flex-wrap gap-2">
        <span r-for="(value, key) in meta" className="badge badge-outline">
          {key}: {value}
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        <span v-for="step in count.value" className="badge badge-primary">
          Step {step}
        </span>
      </div>
    </div>
  );
};

export default VForAndRFor;`})),[n,n]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>i(t=>{let n=d(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>i(e=>{let t=h();return[t.firstChild,t.lastChild]})}}),r(U,H,()=>{let t=P.value===`preview`;return t?{__rue_compiled_branch_key:!0,create:()=>s(t=>{let n=p(`div`,t);n.setAttribute(`class`,`card bg-base-100 shadow`);let r=p(`div`,n);u(n,r),r.setAttribute(`class`,`card-body grid gap-6`);let i=p(`section`,r);u(r,i),i.setAttribute(`class`,`space-y-3`);let c=p(`div`,i);u(i,c),c.setAttribute(`class`,`flex flex-wrap items-center justify-between gap-3`);let m=p(`h2`,c);u(c,m),m.setAttribute(`class`,`text-xl font-semibold`),u(m,d(`v-for：数组遍历`));let h=p(`div`,c);u(c,h),h.setAttribute(`class`,`join`);let g=p(`button`,h);u(h,g),g.setAttribute(`class`,`btn btn-sm join-item`),x(S(t,g,`click`,()=>()=>{F.value=[...F.value].reverse()})),u(g,d(`倒序`));let _=p(`button`,h);u(h,_),_.setAttribute(`class`,`btn btn-sm join-item`),x(S(t,_,`click`,()=>()=>{F.value=[...A]})),u(_,d(`重置`));let C=p(`ul`,i);u(i,C),C.setAttribute(`class`,`list bg-base-200 rounded-box`);let T=y(`rue:list:end`);u(C,T);let E=[];b(()=>{let t=(e=>Array.isArray(e)?e.map((e,t)=>[e,t,t]):typeof e==`number`?Array.from({length:e},(e,t)=>[t+1,t,t]):Object.entries(e??{}).map(([e,t],n)=>[t,e,n]))(L.get())||[];E=f(C,T,E,t,(e,t)=>`${e[0].id}-${e[0].rank}`,(t,n)=>{let r=o(t);return v((t,n,i)=>{let o=()=>s(t=>{let n=p(`li`,t);n.setAttribute(`class`,`list-row`);let i=p(`div`,n);u(n,i);let a=p(`div`,i);u(i,a),a.setAttribute(`class`,`font-medium`);let o=y(`rue:compiled-slot`);u(a,o),e({parent:a,before:o},()=>w(r.get()[0].rank),()=>({})),u(a,d(`. `));let s=y(`rue:compiled-slot`);u(a,s),e({parent:a,before:s},()=>w(r.get()[0].name),()=>({}));let c=p(`div`,i);u(i,c),c.setAttribute(`class`,`text-sm opacity-70`),u(c,d(`颜色：`));let l=y(`rue:compiled-slot`);return u(c,l),e({parent:c,before:l},()=>w(r.get()[0].color),()=>({})),[n,n]});return t==null?o():a(t,i,o)},(e,i)=>{t=e,n=i,r.set(e)},void 0)},!1,!1)}),x(()=>l(E));let D=p(`section`,r);u(r,D),D.setAttribute(`class`,`space-y-3`);let O=p(`h2`,D);u(D,O),O.setAttribute(`class`,`text-xl font-semibold`),u(O,d(`r-for：对象遍历`));let k=p(`div`,D);u(D,k),k.setAttribute(`class`,`flex flex-wrap gap-2`);let M=y(`rue:list:end`);u(k,M);let N=[];b(()=>{let t=(e=>Array.isArray(e)?e.map((e,t)=>[e,t,t]):typeof e==`number`?Array.from({length:e},(e,t)=>[t+1,t,t]):Object.entries(e??{}).map(([e,t],n)=>[t,e,n]))(j)||[];N=f(k,M,N,t,(e,t)=>e[1],(t,n)=>{let r=o(t);return v((t,n,i)=>{let o=()=>s(t=>{let n=p(`span`,t);n.setAttribute(`class`,`badge badge-outline badge-lg`);let i=y(`rue:compiled-slot`);u(n,i),e({parent:n,before:i},()=>w(r.get()[1]),()=>({})),u(n,d(`: `));let a=y(`rue:compiled-slot`);return u(n,a),e({parent:n,before:a},()=>w(r.get()[0]),()=>({})),[n,n]});return t==null?o():a(t,i,o)},(e,i)=>{t=e,n=i,r.set(e)},void 0)},!1,!1)}),x(()=>l(N));let P=p(`section`,r);u(r,P),P.setAttribute(`class`,`space-y-3`);let R=p(`div`,P);u(P,R),R.setAttribute(`class`,`flex flex-wrap items-center justify-between gap-3`);let z=p(`h2`,R);u(R,z),z.setAttribute(`class`,`text-xl font-semibold`),u(z,d(`v-for：数字迭代`));let B=p(`div`,R);u(R,B),B.setAttribute(`class`,`join`);let V=p(`button`,B);u(B,V),V.setAttribute(`class`,`btn btn-sm join-item`),x(S(t,V,`click`,()=>()=>{I.value=Math.max(1,I.value-1)})),u(V,d(`-1`));let H=p(`button`,B);u(B,H),H.setAttribute(`class`,`btn btn-sm join-item`),x(S(t,H,`click`,()=>()=>{I.value=Math.min(6,I.value+1)})),u(H,d(`+1`));let U=p(`div`,P);u(P,U),U.setAttribute(`class`,`flex flex-wrap gap-2`);let W=y(`rue:list:end`);u(U,W);let G=[];return b(()=>{let t=(e=>Array.isArray(e)?e.map((e,t)=>[e,t,t]):typeof e==`number`?Array.from({length:e},(e,t)=>[t+1,t,t]):Object.entries(e??{}).map(([e,t],n)=>[t,e,n]))(I.value)||[];G=f(U,W,G,t,(e,t)=>e[0],(t,n)=>{let r=o(t);return v((t,n,i)=>{let o=()=>s(t=>{let n=p(`span`,t);n.setAttribute(`class`,`badge badge-primary badge-lg`),u(n,d(`Step `));let i=y(`rue:compiled-slot`);return u(n,i),e({parent:n,before:i},()=>w(r.get()[0]),()=>({})),[n,n]});return t==null?o():a(t,i,o)},(e,i)=>{t=e,n=i,r.set(e)},void 0)},!1,!1)}),x(()=>l(G)),[n,n]})}:typeof t==`number`||typeof t==`bigint`?{__rue_compiled_branch_key:t,create:()=>i(e=>{let n=d(typeof t==`string`||typeof t==`number`||typeof t==`bigint`?t:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>i(e=>{let t=h();return[t.firstChild,t.lastChild]})}});let W=d(``),G=d(``);return c.insertBefore(W,c.firstChild),c.appendChild(G),[c.firstChild,c.lastChild]});return n==null?_():a(n,g,_)}})))};export{M as default};