import{Bt as e,H as t,U as n,Ut as r,V as i,Vt as a,Wt as o,Y as s,_t as c,en as l,f as u,fn as d,gn as f,gt as p,h as m,hn as h,in as g,mn as _,p as v,pn as y,qt as b,sn as x,st as S,u as C,vt as w,yn as T,yt as E,zt as D}from"./rue-runtime-Cv6BZekS.js";import{t as O}from"./Code-BzFVdc3U.js";import{r as k}from"./SidebarPlaygroundExample-rFyhXfC_.js";var A=T(`<span>rue:direct-text</span>`),j=T(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">简单组件（移植自 Vue）</h1>`),M=T(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),N=T(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),P=(t,r,i)=>{let a=w(p(t,`todo`));return n(o(()=>{let t=_(),n=A().content.cloneNode(!0),r=n.firstChild.childNodes[0],i=r.parentNode,o=y(`rue:text-hole:0`);i.replaceChild(o,r),t.appendChild(n),e({parent:i,before:o},()=>D(a.get().text),()=>({}));let s=f(``),c=f(``);return t.insertBefore(s,t.firstChild),t.appendChild(c),[t.firstChild,t.lastChild]}),e=>l(()=>{a.set(e.todo)}),()=>c(t))},F=(e,n,c)=>{let l=S([{id:0,text:`Vegetables`},{id:1,text:`Cheese`},{id:2,text:`Whatever else humans are supposed to eat`}]),p=S(`preview`);return s(()=>i(k,()=>({children:(e,n,i)=>{let s=()=>o(e=>{let n=_();n.appendChild(j().content.cloneNode(!0));let i=M().content.cloneNode(!0),s=i.firstChild,c=s.childNodes[0],S=s.childNodes[1];n.appendChild(i),c.setAttribute(`role`,`tab`);let T;g(()=>{let e=`tab ${p.value===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(T,t)||(T=t,c.setAttribute(`class`,t))}),x(C(e,c,`click`,()=>()=>{p.value=`preview`})),S.setAttribute(`role`,`tab`);let D;g(()=>{let e=`tab ${p.value===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(D,t)||(D=t,S.setAttribute(`class`,t))}),x(C(e,S,`click`,()=>()=>{p.value=`code`}));let k=N().content.cloneNode(!0),A=k.firstChild,F=A.childNodes[0],I=F.parentNode,L=A.childNodes[1],R=L.parentNode;n.appendChild(k),r(I,F,()=>{let e=p.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>o(e=>{let n=h(`div`,e);n.setAttribute(`class`,`card bg-base-100 shadow overflow-auto h-[280px] md:h-[560px]`);let r=h(`div`,n);return d(n,r),r.setAttribute(`class`,`card-body p-0`),t(r,O,()=>({className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default SimpleComponent;`})),[n,n]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>E(t=>{let n=f(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>E(e=>{let t=_();return[t.firstChild,t.lastChild]})}}),r(R,L,()=>{let e=p.value===`preview`;return e?{__rue_compiled_branch_key:!0,create:()=>o(e=>{let n=h(`div`,e);n.setAttribute(`class`,`card bg-base-100 shadow`);let r=h(`div`,n);d(n,r),r.setAttribute(`class`,`card-body grid gap-2`);let i=h(`ol`,r);d(r,i),i.setAttribute(`class`,`list-decimal pl-6 space-y-2`);let s=y(`rue:list:end`);d(i,s);let c=[];return b(()=>{let e=l.value||[];c=m(i,s,c,e,(e,t)=>e.id,(e,n)=>{let r=w(e);return v((e,n,i)=>{let s=()=>o(e=>{let n=h(`li`,e);return n.setAttribute(`class`,`px-3 py-2 rounded-md bg-base-200`),t(n,P,()=>({todo:r.get()})),[n,n]});return e==null?s():a(e,i,s)},(t,i)=>{e=t,n=i,r.set(t)},void 0)},!1,!1)}),x(()=>u(c)),[n,n]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>E(t=>{let n=f(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>E(e=>{let t=_();return[t.firstChild,t.lastChild]})}});let z=f(``),B=f(``);return n.insertBefore(z,n.firstChild),n.appendChild(B),[n.firstChild,n.lastChild]});return e==null?s():a(e,i,s)}})))};export{F as default};