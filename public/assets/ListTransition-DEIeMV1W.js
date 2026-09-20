import{F as e,M as t,Qt as n,Ut as r,V as i,Vt as a,W as o,Wt as s,f as c,fn as l,gn as u,h as d,hn as f,in as p,mn as m,mt as h,nt as g,p as _,pn as v,qt as y,r as b,sn as x,u as S,vn as C,yn as w}from"./rue-runtime-BWbIfNT8.js";import{t as T}from"./Code-C5ZhIIr9.js";import{r as E}from"./SidebarPlaygroundExample-DUmYtIFQ.js";var D=w(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">带过渡动效的列表（移植自 Vue）</h1>`),O=w(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),k=w(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),A=[1,2,3,4,5],j=350,M=`
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

export default ListTransitionExample;`,P=(w,P,F)=>{let I=h([...A]),L=h(A.length+1),R=h(!1),z=h(`preview`),B=()=>{let e=I.value.slice(),t=Math.round(Math.random()*e.length);e.splice(t,0,L.value),I.value=e,L.value+=1},V=e=>{I.value=I.value.filter(t=>t!==e)},H=()=>{let e=I.value.slice(),t=e.length;for(;t!==0;){let n=Math.floor(Math.random()*t);--t;let r=e[t];e[t]=e[n],e[n]=r}I.value=e},U=()=>{R.value=!0,I.value=[...A],L.value=A.length+1,setTimeout(()=>{R.value=!1},j)};return g(()=>(()=>{let h=s(()=>{let e=m(),t=f(`style`,e);l(e,t),p(()=>{C(t,M)});let n=u(``),r=u(``);return e.insertBefore(n,e.firstChild),e.appendChild(r),[e.firstChild,e.lastChild]});return t(E,()=>({children:[i(e=>{let t=D().content.cloneNode(!0).firstChild;return[t,t]}),s(e=>{let t=O().content.cloneNode(!0).firstChild,n=t.childNodes[0],r=t.childNodes[1];n.setAttribute(`role`,`tab`);let i;p(()=>{let e=`tab ${z.value===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(i,t)||(i=t,n.setAttribute(`class`,t))}),x(S(e,n,`click`,()=>()=>{z.value=`preview`})),r.setAttribute(`role`,`tab`);let a;return p(()=>{let e=`tab ${z.value===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(a,t)||(a=t,r.setAttribute(`class`,t))}),x(S(e,r,`click`,()=>()=>{z.value=`code`})),[t,t]}),h,s(t=>{let h=k().content.cloneNode(!0).firstChild,g=h.childNodes[0],C=g.parentNode,w=h.childNodes[1],E=w.parentNode;return r(C,g,()=>{let t=z.value;return t===`code`?{__rue_compiled_branch_key:`code`,create:()=>s(t=>{let n=f(`div`,t);return n.setAttribute(`class`,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`),e(n,T,()=>({className:`h-full`,lang:`tsx`,code:N})),[n,n]})}:t===`preview`?{__rue_compiled_branch_key:`preview`,create:()=>s(e=>{let t=f(`div`,e);t.setAttribute(`class`,`card bg-base-100 shadow`);let r=f(`div`,t);l(t,r),r.setAttribute(`class`,`card-body grid gap-4`);let i=f(`div`,r);l(r,i),i.setAttribute(`class`,`flex gap-3`);let h=f(`button`,i);l(i,h),h.setAttribute(`class`,`btn btn-primary`);let g=e=>{let t=B;typeof t==`function`&&t(e)};h.addEventListener(`click`,g),x(()=>h.removeEventListener(`click`,g)),l(h,u(`Insert at random index`));let C=f(`button`,i);l(i,C),C.setAttribute(`class`,`btn`);let w=e=>{let t=U;typeof t==`function`&&t(e)};C.addEventListener(`click`,w),x(()=>C.removeEventListener(`click`,w)),l(C,u(`Reset`));let T=f(`button`,i);l(i,T),T.setAttribute(`class`,`btn`);let E=e=>{let t=H;typeof t==`function`&&t(e)};T.addEventListener(`click`,E),x(()=>T.removeEventListener(`click`,E)),l(T,u(`Shuffle`));let D=f(`div`,r);l(r,D);let O;return p(()=>{let e=`list-shell ${R.value?`is-resetting`:``} rounded-xl border border-base-200 bg-base-100 p-3`,t=e===!1||e==null?``:String(e);Object.is(O,t)||(O=t,D.setAttribute(`class`,t))}),b(()=>({tag:`ul`,name:`list`,type:`transition`,duration:j,children:(e,t,r)=>{let i=()=>s(e=>{let t=m(),r=v(`rue:list:end`);l(t,r);let i=[];y(()=>{let e=I.value||[];i=d(r.parentNode,r,i,e,(e,t)=>e,(e,t)=>{let r=o(e);return _((e,t,i)=>{let o=()=>s(e=>{let t=f(`li`,e);t.setAttribute(`class`,`rounded-md border border-base-200 bg-base-100 px-3 py-2 shadow-sm`);let i=f(`span`,t);l(t,i),i.setAttribute(`class`,`text-base-content`);let a=u(``);l(i,a),n(a,()=>r.get());let o=f(`button`,t);return l(t,o),o.setAttribute(`class`,`btn btn-sm`),x(S(e,o,`click`,()=>()=>V(r.get()))),l(o,u(`x`)),[t,t]});return e==null?o():a(e,i,o)},(n,i)=>{e=n,t=i,r.set(n)},void 0)},!1,!1)}),x(()=>c(i));let p=u(``),h=u(``);return t.insertBefore(p,t.firstChild),t.appendChild(h),[t.firstChild,t.lastChild]});return e==null?i():a(e,r,i)}})).__rue_compiled_mount(D,null),[t,t]})}:{__rue_compiled_branch_key:t,create:()=>i(e=>{let t=m();return[t.firstChild,t.lastChild]})}}),E.removeChild(w),[h,h]})]}))})())};export{P as default};