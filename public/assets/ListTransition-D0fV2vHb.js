import{H as e,Qt as t,Ut as n,Vt as r,Wt as i,Y as a,f as o,fn as s,gn as c,h as l,hn as u,in as d,mn as f,p,pn as m,qt as h,r as g,sn as _,st as v,u as y,vn as b,vt as x,yn as S,yt as C,z as w}from"./rue-runtime-Cv6BZekS.js";import{t as T}from"./Code-BzFVdc3U.js";import{r as E}from"./SidebarPlaygroundExample-rFyhXfC_.js";var D=S(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">带过渡动效的列表（移植自 Vue）</h1>`),O=S(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),k=S(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),A=[1,2,3,4,5],j=350,M=`
.list-shell {
  position: relative;
}

.list-shell ul {
  position: relative;
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.75rem;
}

.list-shell li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  transform-origin: center left;
}

.list-enter-active,
.list-leave-active {
  transition: opacity ${j}ms cubic-bezier(0.55, 0, 0.1, 1);
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
}

.list-leave-active {
  position: absolute;
  inset-inline: 0;
}

.list-move {
  transition: transform ${j}ms cubic-bezier(0.55, 0, 0.1, 1);
}

.list-shell.is-resetting .list-move {
  transition: none;
}
`,N=`import { type FC, TransitionGroup, ref } from '@rue-js/rue';

const INITIAL_IDS = [1, 2, 3, 4, 5];

const ListTransitionExample: FC = () => {
  const items = ref<number[]>([...INITIAL_IDS]);
  const nextId = ref(INITIAL_IDS.length + 1);
  const resetting = ref(false);

  const insert = () => {
    const nextItems = items.value.slice();
    const index = Math.round(Math.random() * nextItems.length);
    nextItems.splice(index, 0, nextId.value);
    items.value = nextItems;
    nextId.value += 1;
  };

  const remove = (itemId: number) => {
    items.value = items.value.filter((item) => item !== itemId);
  };

  const shuffle = () => {
    const nextItems = items.value.slice();
    let currentIndex = nextItems.length;
    while (currentIndex !== 0) {
      const randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      const temp = nextItems[currentIndex];
      nextItems[currentIndex] = nextItems[randomIndex];
      nextItems[randomIndex] = temp;
    }
    items.value = nextItems;
  };

  const reset = () => {
    resetting.value = true;
    items.value = [...INITIAL_IDS];
    nextId.value = INITIAL_IDS.length + 1;
    setTimeout(() => {
      resetting.value = false;
    }, 350);
  };

  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body grid gap-4">
        <div className="flex gap-3">
          <button className="btn btn-primary" onClick={insert}>Insert at random index</button>
          <button className="btn" onClick={reset}>Reset</button>
          <button className="btn" onClick={shuffle}>Shuffle</button>
        </div>

        <div className={'list-shell ' + (resetting.value ? 'is-resetting ' : '') + 'rounded-xl border border-base-200 bg-base-100 p-3'}>
          <TransitionGroup tag="ul" name="list" type="transition" duration={350}>
            {items.value.map((item) => (
              <li key={item} className="rounded-md border border-base-200 bg-base-100 px-3 py-2 shadow-sm">
                <span className="text-base-content">{item}</span>
                <button className="btn btn-sm" onClick={() => remove(item)}>x</button>
              </li>
            ))}
          </TransitionGroup>
        </div>
      </div>
    </div>
  );
};

export default ListTransitionExample;`,P=(S,P,F)=>{let I=v([...A]),L=v(A.length+1),R=v(!1),z=v(`preview`),B=()=>{let e=I.value.slice(),t=Math.round(Math.random()*e.length);e.splice(t,0,L.value),I.value=e,L.value+=1},V=e=>{I.value=I.value.filter(t=>t!==e)},H=()=>{let e=I.value.slice(),t=e.length;for(;t!==0;){let n=Math.floor(Math.random()*t);--t;let r=e[t];e[t]=e[n],e[n]=r}I.value=e},U=()=>{R.value=!0,I.value=[...A],L.value=A.length+1,setTimeout(()=>{R.value=!1},j)};return a(()=>(()=>{let a=i(()=>{let e=f(),t=u(`style`,e);s(e,t),d(()=>{b(t,M)});let n=c(``),r=c(``);return e.insertBefore(n,e.firstChild),e.appendChild(r),[e.firstChild,e.lastChild]});return w(E,()=>({children:[C(e=>{let t=D().content.cloneNode(!0).firstChild;return[t,t]}),i(e=>{let t=O().content.cloneNode(!0).firstChild,n=t.childNodes[0],r=t.childNodes[1];n.setAttribute(`role`,`tab`);let i;d(()=>{let e=`tab ${z.value===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(i,t)||(i=t,n.setAttribute(`class`,t))}),_(y(e,n,`click`,()=>()=>{z.value=`preview`})),r.setAttribute(`role`,`tab`);let a;return d(()=>{let e=`tab ${z.value===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(a,t)||(a=t,r.setAttribute(`class`,t))}),_(y(e,r,`click`,()=>()=>{z.value=`code`})),[t,t]}),a,i(a=>{let v=k().content.cloneNode(!0).firstChild,b=v.childNodes[0],S=b.parentNode,w=v.childNodes[1],E=w.parentNode;return n(S,b,()=>{let n=z.value;return n===`code`?{__rue_compiled_branch_key:`code`,create:()=>i(t=>{let n=u(`div`,t);return n.setAttribute(`class`,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`),e(n,T,()=>({className:`h-full`,lang:`tsx`,code:N})),[n,n]})}:n===`preview`?{__rue_compiled_branch_key:`preview`,create:()=>i(e=>{let n=u(`div`,e);n.setAttribute(`class`,`card bg-base-100 shadow`);let a=u(`div`,n);s(n,a),a.setAttribute(`class`,`card-body grid gap-4`);let v=u(`div`,a);s(a,v),v.setAttribute(`class`,`flex gap-3`);let b=u(`button`,v);s(v,b),b.setAttribute(`class`,`btn btn-primary`);let S=e=>{let t=B;typeof t==`function`&&t(e)};b.addEventListener(`click`,S),_(()=>b.removeEventListener(`click`,S)),s(b,c(`Insert at random index`));let C=u(`button`,v);s(v,C),C.setAttribute(`class`,`btn`);let w=e=>{let t=U;typeof t==`function`&&t(e)};C.addEventListener(`click`,w),_(()=>C.removeEventListener(`click`,w)),s(C,c(`Reset`));let T=u(`button`,v);s(v,T),T.setAttribute(`class`,`btn`);let E=e=>{let t=H;typeof t==`function`&&t(e)};T.addEventListener(`click`,E),_(()=>T.removeEventListener(`click`,E)),s(T,c(`Shuffle`));let D=u(`div`,a);s(a,D);let O;return d(()=>{let e=`list-shell ${R.value?`is-resetting`:``} rounded-xl border border-base-200 bg-base-100 p-3`,t=e===!1||e==null?``:String(e);Object.is(O,t)||(O=t,D.setAttribute(`class`,t))}),g(()=>({tag:`ul`,name:`list`,type:`transition`,duration:j,children:(e,n,a)=>{let d=()=>i(e=>{let n=f(),a=m(`rue:list:end`);s(n,a);let d=[];h(()=>{let e=I.value||[];d=l(a.parentNode,a,d,e,(e,t)=>e,(e,n)=>{let a=x(e);return p((e,n,o)=>{let l=()=>i(e=>{let n=u(`li`,e);n.setAttribute(`class`,`rounded-md border border-base-200 bg-base-100 px-3 py-2 shadow-sm`);let r=u(`span`,n);s(n,r),r.setAttribute(`class`,`text-base-content`);let i=c(``);s(r,i),t(i,()=>a.get());let o=u(`button`,n);return s(n,o),o.setAttribute(`class`,`btn btn-sm`),_(y(e,o,`click`,()=>()=>V(a.get()))),s(o,c(`x`)),[n,n]});return e==null?l():r(e,o,l)},(t,r)=>{e=t,n=r,a.set(t)},void 0)},!1,!1)}),_(()=>o(d));let g=c(``),v=c(``);return n.insertBefore(g,n.firstChild),n.appendChild(v),[n.firstChild,n.lastChild]});return e==null?d():r(e,a,d)}})).__rue_compiled_mount(D,null),[n,n]})}:{__rue_compiled_branch_key:n,create:()=>C(e=>{let t=f();return[t.firstChild,t.lastChild]})}}),E.removeChild(w),[v,v]})]}))})())};export{P as default};