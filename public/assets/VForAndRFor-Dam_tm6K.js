import{Bt as e,H as t,Ut as n,V as r,Vt as i,Wt as a,Y as o,f as s,fn as c,gn as l,h as u,hn as d,in as f,mn as p,p as m,pn as h,qt as g,sn as _,st as v,tt as y,u as b,vt as x,yn as S,yt as C,zt as w}from"./rue-runtime-Cv6BZekS.js";import{t as T}from"./Code-BzFVdc3U.js";import{r as E}from"./SidebarPlaygroundExample-rFyhXfC_.js";var D=S(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">v-for / r-for</h1>`),O=S(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),k=S(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),A=[{id:1,name:`Apple`,color:`红色`},{id:2,name:`Banana`,color:`黄色`},{id:3,name:`Cherry`,color:`酒红色`}],j={framework:`Rue`,renderer:`Vapor`,syntax:`TSX directives`},M=(S,M,N)=>{let P=v(`code`),F=v([...A]),I=v(3),L=y(()=>F.value.map((e,t)=>({...e,rank:t+1})));return o(()=>r(E,()=>({children:(r,o,v)=>{let y=()=>a(r=>{let o=p();o.appendChild(D().content.cloneNode(!0));let v=O().content.cloneNode(!0),y=v.firstChild,S=y.childNodes[0],E=y.childNodes[1];o.appendChild(v),S.setAttribute(`role`,`tab`);let M;f(()=>{let e=`tab ${P.value===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(M,t)||(M=t,S.setAttribute(`class`,t))}),_(b(r,S,`click`,()=>()=>{P.value=`preview`})),E.setAttribute(`role`,`tab`);let N;f(()=>{let e=`tab ${P.value===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(N,t)||(N=t,E.setAttribute(`class`,t))}),_(b(r,E,`click`,()=>()=>{P.value=`code`}));let R=k().content.cloneNode(!0),z=R.firstChild,B=z.childNodes[0],V=B.parentNode,H=z.childNodes[1],U=H.parentNode;o.appendChild(R),n(V,B,()=>{let e=P.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>a(e=>{let n=d(`div`,e);n.setAttribute(`class`,`card bg-base-100 shadow overflow-auto`);let r=d(`div`,n);return c(n,r),r.setAttribute(`class`,`card-body p-0`),t(r,T,()=>({className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VForAndRFor;`})),[n,n]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>C(t=>{let n=l(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>C(e=>{let t=p();return[t.firstChild,t.lastChild]})}}),n(U,H,()=>{let t=P.value===`preview`;return t?{__rue_compiled_branch_key:!0,create:()=>a(t=>{let n=d(`div`,t);n.setAttribute(`class`,`card bg-base-100 shadow`);let r=d(`div`,n);c(n,r),r.setAttribute(`class`,`card-body grid gap-6`);let o=d(`section`,r);c(r,o),o.setAttribute(`class`,`space-y-3`);let f=d(`div`,o);c(o,f),f.setAttribute(`class`,`flex flex-wrap items-center justify-between gap-3`);let p=d(`h2`,f);c(f,p),p.setAttribute(`class`,`text-xl font-semibold`),c(p,l(`v-for：数组遍历`));let v=d(`div`,f);c(f,v),v.setAttribute(`class`,`join`);let y=d(`button`,v);c(v,y),y.setAttribute(`class`,`btn btn-sm join-item`),_(b(t,y,`click`,()=>()=>{F.value=[...F.value].reverse()})),c(y,l(`倒序`));let S=d(`button`,v);c(v,S),S.setAttribute(`class`,`btn btn-sm join-item`),_(b(t,S,`click`,()=>()=>{F.value=[...A]})),c(S,l(`重置`));let C=d(`ul`,o);c(o,C),C.setAttribute(`class`,`list bg-base-200 rounded-box`);let T=h(`rue:list:end`);c(C,T);let E=[];g(()=>{let t=(e=>Array.isArray(e)?e.map((e,t)=>[e,t,t]):typeof e==`number`?Array.from({length:e},(e,t)=>[t+1,t,t]):Object.entries(e??{}).map(([e,t],n)=>[t,e,n]))(L.get())||[];E=u(C,T,E,t,(e,t)=>`${e[0].id}-${e[0].rank}`,(t,n)=>{let r=x(t);return m((t,n,o)=>{let s=()=>a(t=>{let n=d(`li`,t);n.setAttribute(`class`,`list-row`);let i=d(`div`,n);c(n,i);let a=d(`div`,i);c(i,a),a.setAttribute(`class`,`font-medium`);let o=h(`rue:compiled-slot`);c(a,o),e({parent:a,before:o},()=>w(r.get()[0].rank),()=>({})),c(a,l(`. `));let s=h(`rue:compiled-slot`);c(a,s),e({parent:a,before:s},()=>w(r.get()[0].name),()=>({}));let u=d(`div`,i);c(i,u),u.setAttribute(`class`,`text-sm opacity-70`),c(u,l(`颜色：`));let f=h(`rue:compiled-slot`);return c(u,f),e({parent:u,before:f},()=>w(r.get()[0].color),()=>({})),[n,n]});return t==null?s():i(t,o,s)},(e,i)=>{t=e,n=i,r.set(e)},void 0)},!1,!1)}),_(()=>s(E));let D=d(`section`,r);c(r,D),D.setAttribute(`class`,`space-y-3`);let O=d(`h2`,D);c(D,O),O.setAttribute(`class`,`text-xl font-semibold`),c(O,l(`r-for：对象遍历`));let k=d(`div`,D);c(D,k),k.setAttribute(`class`,`flex flex-wrap gap-2`);let M=h(`rue:list:end`);c(k,M);let N=[];g(()=>{let t=(e=>Array.isArray(e)?e.map((e,t)=>[e,t,t]):typeof e==`number`?Array.from({length:e},(e,t)=>[t+1,t,t]):Object.entries(e??{}).map(([e,t],n)=>[t,e,n]))(j)||[];N=u(k,M,N,t,(e,t)=>e[1],(t,n)=>{let r=x(t);return m((t,n,o)=>{let s=()=>a(t=>{let n=d(`span`,t);n.setAttribute(`class`,`badge badge-outline badge-lg`);let i=h(`rue:compiled-slot`);c(n,i),e({parent:n,before:i},()=>w(r.get()[1]),()=>({})),c(n,l(`: `));let a=h(`rue:compiled-slot`);return c(n,a),e({parent:n,before:a},()=>w(r.get()[0]),()=>({})),[n,n]});return t==null?s():i(t,o,s)},(e,i)=>{t=e,n=i,r.set(e)},void 0)},!1,!1)}),_(()=>s(N));let P=d(`section`,r);c(r,P),P.setAttribute(`class`,`space-y-3`);let R=d(`div`,P);c(P,R),R.setAttribute(`class`,`flex flex-wrap items-center justify-between gap-3`);let z=d(`h2`,R);c(R,z),z.setAttribute(`class`,`text-xl font-semibold`),c(z,l(`v-for：数字迭代`));let B=d(`div`,R);c(R,B),B.setAttribute(`class`,`join`);let V=d(`button`,B);c(B,V),V.setAttribute(`class`,`btn btn-sm join-item`),_(b(t,V,`click`,()=>()=>{I.value=Math.max(1,I.value-1)})),c(V,l(`-1`));let H=d(`button`,B);c(B,H),H.setAttribute(`class`,`btn btn-sm join-item`),_(b(t,H,`click`,()=>()=>{I.value=Math.min(6,I.value+1)})),c(H,l(`+1`));let U=d(`div`,P);c(P,U),U.setAttribute(`class`,`flex flex-wrap gap-2`);let W=h(`rue:list:end`);c(U,W);let G=[];return g(()=>{let t=(e=>Array.isArray(e)?e.map((e,t)=>[e,t,t]):typeof e==`number`?Array.from({length:e},(e,t)=>[t+1,t,t]):Object.entries(e??{}).map(([e,t],n)=>[t,e,n]))(I.value)||[];G=u(U,W,G,t,(e,t)=>e[0],(t,n)=>{let r=x(t);return m((t,n,o)=>{let s=()=>a(t=>{let n=d(`span`,t);n.setAttribute(`class`,`badge badge-primary badge-lg`),c(n,l(`Step `));let i=h(`rue:compiled-slot`);return c(n,i),e({parent:n,before:i},()=>w(r.get()[0]),()=>({})),[n,n]});return t==null?s():i(t,o,s)},(e,i)=>{t=e,n=i,r.set(e)},void 0)},!1,!1)}),_(()=>s(G)),[n,n]})}:typeof t==`number`||typeof t==`bigint`?{__rue_compiled_branch_key:t,create:()=>C(e=>{let n=l(typeof t==`string`||typeof t==`number`||typeof t==`bigint`?t:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>C(e=>{let t=p();return[t.firstChild,t.lastChild]})}});let W=l(``),G=l(``);return o.insertBefore(W,o.firstChild),o.appendChild(G),[o.firstChild,o.lastChild]});return r==null?y():i(r,v,y)}})))};export{M as default};