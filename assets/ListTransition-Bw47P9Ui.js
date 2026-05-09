import{A as e,F as t,H as n,I as r,L as i,M as a,N as o,P as s,S as c,W as l,Y as u,_ as d,c as f,j as p,lt as m,pt as h,rt as g,t as _,u as v,ut as y}from"./vapor-runtime-BZZbPG7x.js";import{a as b,o as x}from"./vapor-helpers-vapor-DuGQh50d.js";import{a as S,i as C,n as w,o as T,r as E,s as D,t as O}from"./BaseTransition-BfYb5OSF.js";import{t as k}from"./Code-C8wy38VS.js";import{t as A}from"./SidebarPlaygroundExample-Dv_xU0wR.js";var j=e=>Array.isArray(e)?e.map(e=>j(e)):e,M=e=>{let t=[],n=e=>{if(!(e==null||e===!1)){if(Array.isArray(e)){e.forEach(n);return}t.push(e)}};return n(e),t},N=e=>{if(typeof e!=`object`&&typeof e!=`function`||e==null)return``;let t=e.key??e.props?.key;return t==null?``:String(t)},P=e=>({...e,children:j(e.children)}),F=e=>{let t=m(),n=y(()=>({firstRender:!0,renderVersion:null})),r=e=>Array.from(e.children).filter(e=>e.nodeType===1&&!e.hasAttribute(`data-rue-leaving`));c(()=>{n.renderVersion=null});let i=P(e),o=i.name||`rue`,s=i.moveClass??`${o}-move`,{runEnter:l,runLeave:u}=O(i),f=new Map,h=new Map,g=t.current;g&&r(g).forEach(e=>{let t=e.getAttribute(`data-rue-key`);t&&(f.set(t,e),h.set(t,e.getBoundingClientRect()))});let _=M(i.children),v=_.map(N),b=Symbol(`transition-group-render`),x=n.firstRender;return n.renderVersion=b,queueMicrotask(()=>{if(n.renderVersion!==b)return;let e=t.current;if(!e)return;let o=r(e),c=new Map;for(let e=0;e<_.length;e++){let t=o[e];if(!t)continue;let n=v[e];n?(t.setAttribute(`data-rue-key`,n),c.set(n,t)):t.removeAttribute(`data-rue-key`)}v.forEach(e=>{if(!e)return;let t=c.get(e);if(t&&!f.has(e)){if(x){i.appear&&l(t,`appear`);return}l(t,`enter`)}}),h.forEach((e,t)=>{let n=c.get(t);if(!n)return;let r=n.getBoundingClientRect(),a=e.left-r.left,o=e.top-r.top;if(!a&&!o)return;n.style.transform=`translate(${a}px, ${o}px)`,n.style.transition=`transform 0s`,E(n),n.style.transform=``,n.style.transition=``,w(n,s);let l=i.type??C(n),u=Math.max(T(n,`transition`,void 0,`enter`),T(n,`animation`,void 0,`enter`));D(n,l??null,u,()=>S(n,s))});let d=new Set(v.filter(Boolean));f.forEach((t,n)=>{d.has(n)||(t.setAttribute(`data-rue-leaving`,`true`),a(e,t)||p(e,t),u(t,()=>{t.remove()}))})}),n.firstRender=!1,d(e.tag||`span`,e.tag?{ref:t}:{ref:t,style:`display: contents`},e.children)},I=[1,2,3,4,5],L=350,R=`
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
  transition:
    opacity ${L}ms cubic-bezier(0.55, 0, 0.1, 1),
    transform ${L}ms cubic-bezier(0.55, 0, 0.1, 1);
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(12px) scale(0.96);
}

.list-leave-active {
  position: absolute;
  inset-inline: 0;
}

.list-move {
  transition: transform ${L}ms cubic-bezier(0.55, 0, 0.1, 1);
}
`,z=`import { type FC, TransitionGroup, ref } from '@rue-js/rue';

const INITIAL_IDS = [1, 2, 3, 4, 5];

const ListTransitionExample: FC = () => {
  const items = ref<number[]>([...INITIAL_IDS]);
  const nextId = ref(INITIAL_IDS.length + 1);

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
    items.value = [...INITIAL_IDS];
    nextId.value = INITIAL_IDS.length + 1;
  };

  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body grid gap-4">
        <div className="flex gap-3">
          <button className="btn btn-primary" onClick={insert}>Insert at random index</button>
          <button className="btn" onClick={reset}>Reset</button>
          <button className="btn" onClick={shuffle}>Shuffle</button>
        </div>

        <div className="list-shell rounded-xl border border-base-200 bg-base-100 p-3">
          <TransitionGroup tag="ul" name="list" duration={350}>
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

export default ListTransitionExample;`,B=()=>{let{items:a,nextId:c,activeTab:d,insert:m,remove:S,shuffle:C,reset:w}=b(`useSetup:0:0`,()=>y(()=>{let e=b(`ref:1:0`,()=>g([...I])),t=b(`ref:1:1`,()=>g(I.length+1));return{items:e,nextId:t,activeTab:b(`ref:1:2`,()=>g(`preview`)),insert:()=>{let n=e.value.slice(),r=Math.round(Math.random()*n.length);n.splice(r,0,t.value),e.value=n,t.value+=1},remove:t=>{e.value=e.value.filter(e=>e!==t)},shuffle:()=>{let t=e.value.slice(),n=t.length;for(;n!==0;){let e=Math.floor(Math.random()*n);--n;let r=t[n];t[n]=t[e],t[e]=r}e.value=t},reset:()=>{e.value=[...I],t.value=I.length+1}}}));return v(()=>{let c=s(),g=o(`rue:component:anchor`);return p(c,g),f(_(A,{children:v(()=>{let c=s(),g=t(`h1`);p(c,g),l(g,`text-5xl font-semibold mb-4 md:mb-4`),p(g,r(`带过渡动效的列表（移植自 Vue）`));let y=t(`div`);p(c,y),n(y,`role`,`tablist`),l(y,`tabs tabs-box`);let b=t(`button`);p(y,b),n(b,`role`,`tab`),h(()=>{l(b,String(`tab ${d.value===`preview`?`tab-active`:``}`))}),e(b,`click`,()=>{d.value=`preview`}),p(b,r(`效果`));let T=t(`button`);p(y,T),n(T,`role`,`tab`),h(()=>{l(T,String(`tab ${d.value===`code`?`tab-active`:``}`))}),e(T,`click`,()=>{d.value=`code`}),p(T,r(`代码`));let E=t(`style`);p(c,E),h(()=>{u(E,R)});let D=t(`div`);p(c,D),l(D,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let O=o(`rue:slot:anchor`);p(D,O),h(()=>{f(d.value===`code`?v(()=>{let e=s(),n=t(`div`);p(e,n),l(n,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`);let r=o(`rue:component:anchor`);return p(n,r),h(()=>{f(_(k,{className:`h-full`,lang:`tsx`,code:z}),n,r)}),e}):``,D,O)}),p(D,r(` `));let A=o(`rue:slot:anchor`);return p(D,A),h(()=>{f(d.value===`preview`?v(()=>{let c=s(),d=t(`div`);p(c,d),l(d,`card bg-base-100 shadow`);let g=t(`div`);p(d,g),l(g,`card-body grid gap-4`);let y=t(`div`);p(g,y),l(y,`flex gap-3`);let b=t(`button`);p(y,b),l(b,`btn btn-primary`),e(b,`click`,m),p(b,r(`Insert at random index`));let T=t(`button`);p(y,T),l(T,`btn`),e(T,`click`,w),p(T,r(`Reset`));let E=t(`button`);p(y,E),l(E,`btn`),e(E,`click`,C),p(E,r(`Shuffle`));let D=t(`div`);p(g,D),l(D,`list-shell rounded-xl border border-base-200 bg-base-100 p-3`);let O=o(`rue:component:anchor`);return p(D,O),h(()=>{f(_(F,{tag:`ul`,name:`list`,duration:L,children:a.value.map(a=>x(v(()=>{let o=s(),c=t(`li`);p(o,c),h(()=>{n(c,`key`,String(a))}),l(c,`rounded-md border border-base-200 bg-base-100 px-3 py-2 shadow-sm`);let d=t(`span`);p(c,d),l(d,`text-base-content`);let f=i(d);p(d,f),h(()=>{u(f,a)});let m=t(`button`);return p(c,m),l(m,`btn btn-sm`),e(m,`click`,()=>S(a)),p(m,r(`x`)),o}),a))}),D,O)}),c}):``,D,A)}),c})}),c,g),c})};export{B as default};