import{C as e,Dn as t,E as n,Q as r,Qt as i,Vt as a,_n as o,_t as s,at as c,b as l,ct as u,et as d,gn as f,mn as p,nt as m,pn as h,qt as g,rt as _,st as v,tn as y,vn as b,w as x,wn as S,xn as C,xt as w}from"./rue-runtime-HIMg8Lz8.js";import{t as T}from"./Code-DpH7u0gk.js";import{r as E}from"./SidebarPlaygroundExample-BCPRe0hA.js";var D=b(`<span><!--rue:text-hole:0--></span>`),O=b(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">简单组件（移植自 Vue）</h1>`),k=b(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),A=b(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),j=e=>{let t=c(e.todo);return u(a(Object.assign(e=>{let n=D().content.cloneNode(!0).firstChild,r=n.childNodes[0],i=r.parentNode,a=o(``);return i.insertBefore(a,r),i.removeChild(r),C(a,()=>t.get().text),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})),e=>d(()=>{t.set(e.todo)}),()=>e)},M=()=>{let b=y([{id:0,text:`Vegetables`},{id:1,text:`Cheese`},{id:2,text:`Whatever else humans are supposed to eat`}]),C=y(`preview`);return g(()=>u(_(E,()=>({children:[(e,t,r)=>n(e,r,()=>a(Object.assign(e=>{let t=s();return t.appendChild(O().content.cloneNode(!0)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,o)=>n(e,o,()=>a(Object.assign(e=>{let t=s(),n=k().content.cloneNode(!0),a=n.firstChild,o=a.childNodes[0],c=a.childNodes[1];t.appendChild(n),w(o,`role`,`tab`),S(()=>{r(o,`tab ${C.value===`preview`?`tab-active`:``}`)});let l=e=>{let t=()=>{C.value=`preview`};typeof t==`function`&&t(e)};o.addEventListener(`click`,l),i(()=>o.removeEventListener(`click`,l)),w(c,`role`,`tab`),S(()=>{r(c,`tab ${C.value===`code`?`tab-active`:``}`)});let u=e=>{let t=()=>{C.value=`code`};typeof t==`function`&&t(e)};return c.addEventListener(`click`,u),i(()=>c.removeEventListener(`click`,u)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(r,i,u)=>n(r,u,()=>a(Object.assign(r=>{let i=s(),u=A().content.cloneNode(!0),d=u.firstChild,g=d.childNodes[0],_=g.parentNode,y=d.childNodes[1],w=y.parentNode;return i.appendChild(u),m(_,g,()=>{let e=C.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>a(Object.assign(e=>{let t=f(`div`,e);t.className=`card bg-base-100 shadow overflow-auto h-[280px] md:h-[560px]`;let n=f(`div`,t);return h(t,n),n.className=`card-body p-0`,v(n,T,()=>({className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default SimpleComponent;`})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>a(Object.assign(t=>{let n=o(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>a(Object.assign(e=>{let t=s();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),m(w,y,()=>{let r=C.value===`preview`;return r?{__rue_compiled_branch_key:!0,create:()=>a(Object.assign(r=>{let i=f(`div`,r);i.className=`card bg-base-100 shadow`;let o=f(`div`,i);h(i,o),o.className=`card-body grid gap-2`;let s=f(`ol`,o);h(o,s),s.className=`list-decimal pl-6 space-y-2`;let u=p(`rue:list:end`);h(s,u);let d=[];return S(()=>{let t=b.value||[];d=x(s,u,d,t,(e,t)=>e.id,(t,r)=>{let i=c(t);return e((e,t,r)=>n(e,r,()=>a(Object.assign(e=>{let t=f(`li`,e);return t.className=`px-3 py-2 rounded-md bg-base-200`,v(t,j,()=>({todo:i.get()})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,n)=>{t=e,r=n,i.set(e)})})}),t(()=>l(d)),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0}))}:typeof r==`number`||typeof r==`bigint`?{__rue_compiled_branch_key:r,create:()=>a(Object.assign(e=>{let t=o(typeof r==`string`||typeof r==`number`||typeof r==`bigint`?r:``);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>a(Object.assign(e=>{let t=s();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0})))]})),e=>d(()=>{})))};export{M as default};