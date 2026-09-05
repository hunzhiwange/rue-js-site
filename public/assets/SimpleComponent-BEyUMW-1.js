import{Bt as e,C as t,Et as n,H as r,K as i,L as a,Lt as o,Mt as s,S as c,V as l,W as u,_n as d,bn as f,fn as p,gn as m,hn as h,nt as g,ot as _,pn as v,q as y,wn as b,x,z as S}from"./rue-runtime-CwEGJ854.js";import{t as C}from"./Code-DUvGro8N.js";import{r as w}from"./SidebarPlaygroundExample-EGR0CyDT.js";var T=d(`<span><!--rue:text-hole:0--></span>`),E=d(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">简单组件（移植自 Vue）</h1>`),D=d(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),O=d(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),k=e=>{let t=u(e.todo);return y(n(Object.assign(e=>{let n=T().content.cloneNode(!0).firstChild,r=n.childNodes[0],i=r.parentNode,a=m(``);return i.insertBefore(a,r),i.removeChild(r),f(a,()=>t.get().text),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})),e=>S(()=>{t.set(e.todo)}),()=>e)},A=()=>{let d=e([{id:0,text:`Vegetables`},{id:1,text:`Cheese`},{id:2,text:`Whatever else humans are supposed to eat`}]),f=e(`preview`);return s(()=>y(r(w,()=>({children:[(e,t,r)=>x(e,r,()=>n(Object.assign(e=>{let t=g();return t.appendChild(E().content.cloneNode(!0)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,r)=>x(e,r,()=>n(Object.assign(e=>{let t=g(),n=D().content.cloneNode(!0),r=n.firstChild,i=r.childNodes[0],s=r.childNodes[1];t.appendChild(n),_(i,`role`,`tab`),b(()=>{a(i,`tab ${f.value===`preview`?`tab-active`:``}`)});let c=e=>{let t=()=>{f.value=`preview`};typeof t==`function`&&t(e)};i.addEventListener(`click`,c),o(()=>i.removeEventListener(`click`,c)),_(s,`role`,`tab`),b(()=>{a(s,`tab ${f.value===`code`?`tab-active`:``}`)});let l=e=>{let t=()=>{f.value=`code`};typeof t==`function`&&t(e)};return s.addEventListener(`click`,l),o(()=>s.removeEventListener(`click`,l)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,r,a)=>x(e,a,()=>n(Object.assign(e=>{let r=g(),a=O().content.cloneNode(!0),o=a.firstChild,s=o.childNodes[0],_=s.parentNode,y=o.childNodes[1],S=y.parentNode;return r.appendChild(a),l(_,s,()=>{let e=f.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>n(Object.assign(e=>{let t=h(`div`,e);t.className=`card bg-base-100 shadow overflow-auto h-[280px] md:h-[560px]`;let n=h(`div`,t);return p(t,n),n.className=`card-body p-0`,i(n,C,()=>({className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

type Item = { id: number; text: string };

const TodoItem: FC<{ todo: Item }> = (props) => (
  <span>{props.todo.text}</span>
);

const SimpleComponent: FC = () => {
  const groceryList = ref<Item[]>([
    { id: 0, text: 'Vegetables' },
    { id: 1, text: 'Cheese' },
    { id: 2, text: 'Whatever else humans are supposed to eat' },
  ]);
  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body grid gap-2">
        <ol className="list-decimal pl-6 space-y-2">
          {groceryList.value.map(item => (
            <li key={item.id} className="px-3 py-2 rounded-md bg-base-200">
              <TodoItem todo={item} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default SimpleComponent;`})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>n(Object.assign(t=>{let n=m(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>n(Object.assign(e=>{let t=g();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),l(S,y,()=>{let e=f.value===`preview`;return e?{__rue_compiled_branch_key:!0,create:()=>n(Object.assign(e=>{let r=h(`div`,e);r.className=`card bg-base-100 shadow`;let a=h(`div`,r);p(r,a),a.className=`card-body grid gap-2`;let o=h(`ol`,a);p(a,o),o.className=`list-decimal pl-6 space-y-2`;let s=v(`rue:list:end`);p(o,s);let l=[];return b(()=>{let e=d.value||[];l=t(o,s,l,e,(e,t)=>e.id,(e,t)=>{let r=u(e),a=u(t);return c((e,t,a)=>x(e,a,()=>n(Object.assign(e=>{let t=h(`li`,e);return t.className=`px-3 py-2 rounded-md bg-base-200`,i(t,k,()=>({todo:r.get()})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(n,i)=>{e=n,t=i,r.set(n),a.set(i)})})}),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>n(Object.assign(t=>{let n=m(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>n(Object.assign(e=>{let t=g();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})))]})),e=>S(()=>{})))};export{A as default};