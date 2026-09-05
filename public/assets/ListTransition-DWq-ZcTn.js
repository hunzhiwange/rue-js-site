import{Bt as e,Dn as t,Et as n,K as r,L as i,Lt as a,Mt as o,V as s,X as c,Y as l,_n as u,_t as d,at as f,et as p,gn as m,hn as h,ht as g,it as _,kn as v,nt as y,pt as b,q as x,rt as S,tt as C,wn as w,y as T,z as E}from"./rue-runtime-CwEGJ854.js";import{t as D}from"./Code-B3jCYMAr.js";import{r as O}from"./SidebarPlaygroundExample-EGR0CyDT.js";var k=u(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">带过渡动效的列表（移植自 Vue）</h1>`),A=u(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),j=u(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),M=[1,2,3,4,5],N=350,P=`
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

export default ListTransitionExample;`,I=()=>{let u=e([...M]),I=e(M.length+1),L=e(!1),R=e(`preview`),z=()=>{let e=u.value.slice(),t=Math.round(Math.random()*e.length);e.splice(t,0,I.value),u.value=e,I.value+=1},B=e=>{u.value=u.value.filter(t=>t!==e)},V=()=>{let e=u.value.slice(),t=e.length;for(;t!==0;){let n=Math.floor(Math.random()*t);--t;let r=e[t];e[t]=e[n],e[n]=r}u.value=e},H=()=>{L.value=!0,u.value=[...M],I.value=M.length+1,setTimeout(()=>{L.value=!1},N)};return o(()=>x((()=>{let e=g(()=>{let e=y(),t=S(`style`,e);return c(e,t),w(()=>{b(t,P)}),e}),o=g(()=>{let e=y(),t=j().content.cloneNode(!0),o=t.firstChild,x=o.childNodes[0],E=x.parentNode,O=o.childNodes[1],k=O.parentNode;return e.appendChild(t),s(E,x,()=>{let e=R.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>n(Object.assign(e=>{let t=h(`div`,e);return t.className=`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`,r(t,D,()=>({className:`h-full`,lang:`tsx`,code:F})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>n(Object.assign(t=>{let n=m(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>n(Object.assign(e=>{let t=y();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),w(()=>{let e=R.value===`preview`?g(()=>{let e=y(),t=S(`div`,e);c(e,t),i(t,`card bg-base-100 shadow`);let n=S(`div`,t);c(t,n),i(n,`card-body grid gap-4`);let r=S(`div`,n);c(n,r),i(r,`flex gap-3`);let o=S(`button`,r);c(r,o),i(o,`btn btn-primary`);let s=e=>{let t=z;typeof t==`function`&&t(e)};o.addEventListener(`click`,s),a(()=>o.removeEventListener(`click`,s)),c(o,_(`Insert at random index`));let m=S(`button`,r);c(r,m),i(m,`btn`);let h=e=>{let t=H;typeof t==`function`&&t(e)};m.addEventListener(`click`,h),a(()=>m.removeEventListener(`click`,h)),c(m,_(`Reset`));let x=S(`button`,r);c(r,x),i(x,`btn`);let E=e=>{let t=V;typeof t==`function`&&t(e)};x.addEventListener(`click`,E),a(()=>x.removeEventListener(`click`,E)),c(x,_(`Shuffle`));let D=S(`div`,n);c(n,D),w(()=>{i(D,`list-shell ${L.value?`is-resetting`:``} rounded-xl border border-base-200 bg-base-100 p-3`)});let O=C(`rue:component:anchor`);return c(D,O),w(()=>{let e=d(T,()=>({tag:`ul`,name:`list`,type:`transition`,duration:N,children:u.value.map(e=>p(g(()=>{let t=y(),n=S(`li`,t);c(t,n),i(n,`rounded-md border border-base-200 bg-base-100 px-3 py-2 shadow-sm`);let r=S(`span`,n);c(n,r),i(r,`text-base-content`);let o=f(r);c(r,o),w(()=>{b(o,e)});let s=S(`button`,n);c(n,s),i(s,`btn btn-sm`);let l=t=>{let n=()=>B(e);typeof n==`function`&&n(t)};return s.addEventListener(`click`,l),a(()=>s.removeEventListener(`click`,l)),c(s,_(`x`)),t},!0),e))}));v(()=>l(e,D,O))}),e},!0):``;v(()=>l(e,k,O))}),e});return d(O,()=>({children:[n(e=>k().content.cloneNode(!0).firstChild),n(Object.assign(e=>{let n=A().content.cloneNode(!0).firstChild,r=n.childNodes[0],i=n.childNodes[1];r.setAttribute(`role`,`tab`);let a;w(()=>{let e=`tab ${R.value===`preview`?`tab-active`:``}`,t=e==null?``:String(e);Object.is(a,t)||(a=t,r.className=t)});let o=e=>{let t=()=>{R.value=`preview`};typeof t==`function`&&t(e)};r.addEventListener(`click`,o),t(()=>r.removeEventListener(`click`,o)),i.setAttribute(`role`,`tab`);let s;w(()=>{let e=`tab ${R.value===`code`?`tab-active`:``}`,t=e==null?``:String(e);Object.is(s,t)||(s=t,i.className=t)});let c=e=>{let t=()=>{R.value=`code`};typeof t==`function`&&t(e)};return i.addEventListener(`click`,c),t(()=>i.removeEventListener(`click`,c)),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})),e,o]}))})(),e=>E(()=>{})))};export{I as default};