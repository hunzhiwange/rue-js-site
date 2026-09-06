import{At as e,Dn as t,Mt as n,Ot as r,Q as i,Qt as a,Vt as o,_ as s,_n as c,_t as l,bt as u,ct as d,dt as f,et as p,gn as m,gt as h,ht as g,kn as _,nt as v,qt as y,st as b,tn as x,ut as S,vn as C,vt as w,wn as T,yt as E}from"./rue-runtime-HIMg8Lz8.js";import{t as D}from"./Code-DpH7u0gk.js";import{r as O}from"./SidebarPlaygroundExample-BCPRe0hA.js";var k=C(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">带过渡动效的列表（移植自 Vue）</h1>`),A=C(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),j=C(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),M=[1,2,3,4,5],N=350,P=`
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
  transition: opacity ${N}ms cubic-bezier(0.55, 0, 0.1, 1);
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
  transition: transform ${N}ms cubic-bezier(0.55, 0, 0.1, 1);
}

.list-shell.is-resetting .list-move {
  transition: none;
}
`,F=`import { type FC, TransitionGroup, ref } from '@rue-js/rue';

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

export default ListTransitionExample;`,I=()=>{let C=x([...M]),I=x(M.length+1),L=x(!1),R=x(`preview`),z=()=>{let e=C.value.slice(),t=Math.round(Math.random()*e.length);e.splice(t,0,I.value),C.value=e,I.value+=1},B=e=>{C.value=C.value.filter(t=>t!==e)},V=()=>{let e=C.value.slice(),t=e.length;for(;t!==0;){let n=Math.floor(Math.random()*t);--t;let r=e[t];e[t]=e[n],e[n]=r}C.value=e},H=()=>{L.value=!0,C.value=[...M],I.value=M.length+1,setTimeout(()=>{L.value=!1},N)};return y(()=>d((()=>{let d=e(()=>{let e=l(),t=w(`style`,e);return f(e,t),T(()=>{r(t,P)}),e}),p=e(()=>{let t=l(),d=j().content.cloneNode(!0),p=d.firstChild,y=p.childNodes[0],x=y.parentNode,O=p.childNodes[1],k=O.parentNode;return t.appendChild(d),v(x,y,()=>{let e=R.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>o(Object.assign(e=>{let t=m(`div`,e);return t.className=`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`,b(t,D,()=>({className:`h-full`,lang:`tsx`,code:F})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>o(Object.assign(t=>{let n=c(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>o(Object.assign(e=>{let t=l();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),T(()=>{let t=R.value===`preview`?e(()=>{let t=l(),o=w(`div`,t);f(t,o),i(o,`card bg-base-100 shadow`);let c=w(`div`,o);f(o,c),i(c,`card-body grid gap-4`);let d=w(`div`,c);f(c,d),i(d,`flex gap-3`);let p=w(`button`,d);f(d,p),i(p,`btn btn-primary`);let m=e=>{let t=z;typeof t==`function`&&t(e)};p.addEventListener(`click`,m),a(()=>p.removeEventListener(`click`,m)),f(p,E(`Insert at random index`));let v=w(`button`,d);f(d,v),i(v,`btn`);let y=e=>{let t=H;typeof t==`function`&&t(e)};v.addEventListener(`click`,y),a(()=>v.removeEventListener(`click`,y)),f(v,E(`Reset`));let b=w(`button`,d);f(d,b),i(b,`btn`);let x=e=>{let t=V;typeof t==`function`&&t(e)};b.addEventListener(`click`,x),a(()=>b.removeEventListener(`click`,x)),f(b,E(`Shuffle`));let D=w(`div`,c);f(c,D),T(()=>{i(D,`list-shell ${L.value?`is-resetting`:``} rounded-xl border border-base-200 bg-base-100 p-3`)});let O=h(`rue:component:anchor`);return f(D,O),T(()=>{let t=n(s,()=>({tag:`ul`,name:`list`,type:`transition`,duration:N,children:C.value.map(t=>g(e(()=>{let e=l(),n=w(`li`,e);f(e,n),i(n,`rounded-md border border-base-200 bg-base-100 px-3 py-2 shadow-sm`);let o=w(`span`,n);f(n,o),i(o,`text-base-content`);let s=u(o);f(o,s),T(()=>{r(s,t)});let c=w(`button`,n);f(n,c),i(c,`btn btn-sm`);let d=e=>{let n=()=>B(t);typeof n==`function`&&n(e)};return c.addEventListener(`click`,d),a(()=>c.removeEventListener(`click`,d)),f(c,E(`x`)),e},!0),t))}));_(()=>S(t,D,O))}),t},!0):``;_(()=>S(t,k,O))}),t});return n(O,()=>({children:[o(e=>k().content.cloneNode(!0).firstChild),o(Object.assign(e=>{let n=A().content.cloneNode(!0).firstChild,r=n.childNodes[0],i=n.childNodes[1];r.setAttribute(`role`,`tab`);let a;T(()=>{let e=`tab ${R.value===`preview`?`tab-active`:``}`,t=e==null?``:String(e);Object.is(a,t)||(a=t,r.className=t)});let o=e=>{let t=()=>{R.value=`preview`};typeof t==`function`&&t(e)};r.addEventListener(`click`,o),t(()=>r.removeEventListener(`click`,o)),i.setAttribute(`role`,`tab`);let s;T(()=>{let e=`tab ${R.value===`code`?`tab-active`:``}`,t=e==null?``:String(e);Object.is(s,t)||(s=t,i.className=t)});let c=e=>{let t=()=>{R.value=`code`};typeof t==`function`&&t(e)};return i.addEventListener(`click`,c),t(()=>i.removeEventListener(`click`,c)),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})),d,p]}))})(),e=>p(()=>{})))};export{I as default};