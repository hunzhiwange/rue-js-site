import{B as e,Bt as t,F as n,I as r,P as i,Ut as a,V as o,Vt as s,W as c,Wt as l,en as u,f as d,fn as f,gn as p,h as m,hn as h,in as g,mn as _,mt as v,nt as y,p as b,pn as x,qt as S,sn as C,u as w,yn as T,z as E,zt as D}from"./rue-runtime-BWbIfNT8.js";import{t as O}from"./Code-C5ZhIIr9.js";import{r as k}from"./SidebarPlaygroundExample-DUmYtIFQ.js";var A=T(`<span>rue:direct-text</span>`),j=T(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">简单组件（移植自 Vue）</h1>`),M=T(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),N=T(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),P=(n,i,a)=>{let o=c(E(n,`todo`));return r(l(()=>{let e=_(),n=A().content.cloneNode(!0),r=n.firstChild.childNodes[0],i=r.parentNode,a=x(`rue:text-hole:0`);i.replaceChild(a,r),e.appendChild(n),t({parent:i,before:a},()=>D(o.get().text),()=>({}));let s=p(``),c=p(``);return e.insertBefore(s,e.firstChild),e.appendChild(c),[e.firstChild,e.lastChild]}),e=>u(()=>{o.set(e.todo)}),()=>e(n))},F=(e,t,r)=>{let u=v([{id:0,text:`Vegetables`},{id:1,text:`Cheese`},{id:2,text:`Whatever else humans are supposed to eat`}]),T=v(`preview`);return y(()=>i(k,()=>({children:(e,t,r)=>{let i=()=>l(e=>{let t=_();t.appendChild(j().content.cloneNode(!0));let r=M().content.cloneNode(!0),i=r.firstChild,v=i.childNodes[0],y=i.childNodes[1];t.appendChild(r),v.setAttribute(`role`,`tab`);let E;g(()=>{let e=`tab ${T.value===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(E,t)||(E=t,v.setAttribute(`class`,t))}),C(w(e,v,`click`,()=>()=>{T.value=`preview`})),y.setAttribute(`role`,`tab`);let D;g(()=>{let e=`tab ${T.value===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(D,t)||(D=t,y.setAttribute(`class`,t))}),C(w(e,y,`click`,()=>()=>{T.value=`code`}));let k=N().content.cloneNode(!0),A=k.firstChild,F=A.childNodes[0],I=F.parentNode,L=A.childNodes[1],R=L.parentNode;t.appendChild(k),a(I,F,()=>{let e=T.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>l(e=>{let t=h(`div`,e);t.setAttribute(`class`,`card bg-base-100 shadow overflow-auto h-[280px] md:h-[560px]`);let r=h(`div`,t);return f(t,r),r.setAttribute(`class`,`card-body p-0`),n(r,O,()=>({className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default SimpleComponent;`})),[t,t]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>o(t=>{let n=p(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>o(e=>{let t=_();return[t.firstChild,t.lastChild]})}}),a(R,L,()=>{let e=T.value===`preview`;return e?{__rue_compiled_branch_key:!0,create:()=>l(e=>{let t=h(`div`,e);t.setAttribute(`class`,`card bg-base-100 shadow`);let r=h(`div`,t);f(t,r),r.setAttribute(`class`,`card-body grid gap-2`);let i=h(`ol`,r);f(r,i),i.setAttribute(`class`,`list-decimal pl-6 space-y-2`);let a=x(`rue:list:end`);f(i,a);let o=[];return S(()=>{let e=u.value||[];o=m(i,a,o,e,(e,t)=>e.id,(e,t)=>{let r=c(e);return b((e,t,i)=>{let a=()=>l(e=>{let t=h(`li`,e);return t.setAttribute(`class`,`px-3 py-2 rounded-md bg-base-200`),n(t,P,()=>({todo:r.get()})),[t,t]});return e==null?a():s(e,i,a)},(n,i)=>{e=n,t=i,r.set(n)},void 0)},!1,!1)}),C(()=>d(o)),[t,t]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>o(t=>{let n=p(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>o(e=>{let t=_();return[t.firstChild,t.lastChild]})}});let z=p(``),B=p(``);return t.insertBefore(z,t.firstChild),t.appendChild(B),[t.firstChild,t.lastChild]});return e==null?i():s(e,r,i)}})))};export{F as default};