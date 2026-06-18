import{$ as e,A as t,Ht as n,J as r,Kt as i,Lt as a,Q as o,X as s,Xt as c,Y as l,Z as u,at as d,et as f,l as p,pt as m,q as h,qt as g,s as _,st as v,t as y,x as b}from"./vapor-runtime-iQZthBPQ.js";import{a as x,o as S}from"./vapor-helpers-vapor-BjKHCvOa.js";import{a as C,i as w,n as T,o as E,r as D,s as O,t as k}from"./BaseTransition-BnE9eveM.js";import{t as A}from"./Code-CZqShVUj.js";import{r as j}from"./SidebarPlaygroundExample-5H7RL-T7.js";var M=new WeakSet,N=e=>Array.isArray(e)?e.map(e=>N(e)):e,P=e=>{let t=[],n=e=>{if(!(e==null||e===!1)){if(Array.isArray(e)){e.forEach(n);return}t.push(e)}};return n(e),t},F=e=>{if(typeof e!=`object`&&typeof e!=`function`||e==null)return``;let t=e.key??e.props?.key;return t==null?``:String(t)},I=e=>({...e,children:N(e.children)}),L=e=>{let n=i(),a=g(()=>({firstRender:!0,renderVersion:null})),o=e=>Array.from(e.children).filter(e=>e.nodeType===1&&!e.hasAttribute(`data-rue-leaving`)),s=e=>e.getAttribute(`key`)??e.getAttribute(`data-rue-key`)??``,c=(e,t)=>{let n=new Map;t.forEach(e=>{let t=s(e);if(!t)return;let r=n.get(t)??[];r.push(e),n.set(t,r)});let r=x.map((e,r)=>e?n.get(e)?.shift()??t[r]:t[r]),i=null;for(let t=r.length-1;t>=0;--t){let n=r[t];n&&(n.nextSibling!==i&&e.insertBefore(n,i),i=n)}return r.filter(e=>!!e)};t(()=>{a.renderVersion=null});let u=I(e),d=u.name||`rue`,f=u.moveClass??`${d}-move`,{runEnter:p,runLeave:m}=k(u),h=new Map,_=new Map,v=n.current;v&&o(v).forEach(e=>{let t=e.getAttribute(`data-rue-key`);t&&(h.set(t,e),_.set(t,e.getBoundingClientRect()))});let y=P(u.children),x=y.map(F),S=Symbol(`transition-group-render`),A=a.firstRender;return a.renderVersion=S,queueMicrotask(()=>{if(a.renderVersion!==S)return;let e=n.current;if(!e)return;let t=c(e,o(e)),i=new Map,s=new Set;t.forEach(e=>{let t=e.getAttribute(`data-rue-key`);t&&s.add(t)});let d=A&&h.size===0&&s.size===0&&!M.has(e);for(let e=0;e<y.length;e++){let n=t[e];if(!n)continue;let r=x[e];r?(n.setAttribute(`data-rue-key`,r),i.set(r,n)):n.removeAttribute(`data-rue-key`)}x.forEach(e=>{if(!e)return;let t=i.get(e);if(t&&!h.has(e)){if(d){u.appear&&p(t,`appear`);return}p(t,`enter`)}}),_.forEach((e,t)=>{let n=i.get(t);if(!n)return;let r=n.getBoundingClientRect(),a=e.left-r.left,o=e.top-r.top;if(!a&&!o)return;n.style.transform=`translate(${a}px, ${o}px)`,n.style.transition=`transform 0s`,D(n),n.style.transform=``,n.style.transition=``,T(n,f);let s=u.type??w(n),c=Math.max(E(n,`transition`,void 0,`enter`),E(n,`animation`,void 0,`enter`));O(n,s??null,c,()=>C(n,f))});let g=new Set(x.filter(Boolean));h.forEach((t,n)=>{g.has(n)||(t.setAttribute(`data-rue-leaving`,`true`),l(e,t)||r(e,t),m(t,()=>{t.remove()}))}),M.add(e)}),a.firstRender=!1,b(e.tag||`span`,e.tag?{ref:n}:{ref:n,style:`display: contents`},e.children)},R=[1,2,3,4,5],z=350,B=`
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
    opacity ${z}ms cubic-bezier(0.55, 0, 0.1, 1),
    transform ${z}ms cubic-bezier(0.55, 0, 0.1, 1);
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
  transition: transform ${z}ms cubic-bezier(0.55, 0, 0.1, 1);
}
`,V=`import { type FC, TransitionGroup, ref } from '@rue-js/rue';

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

export default ListTransitionExample;`,H=()=>{let{items:t,nextId:i,activeTab:l,insert:b,remove:C,shuffle:w,reset:T}=x(`useSetup:0:0`,()=>g(()=>{let e=x(`ref:1:0`,()=>a([...R])),t=x(`ref:1:1`,()=>a(R.length+1));return{items:e,nextId:t,activeTab:x(`ref:1:2`,()=>a(`preview`)),insert:()=>{let n=e.value.slice(),r=Math.round(Math.random()*n.length);n.splice(r,0,t.value),e.value=n,t.value+=1},remove:t=>{e.value=e.value.filter(e=>e!==t)},shuffle:()=>{let t=e.value.slice(),n=t.length;for(;n!==0;){let e=Math.floor(Math.random()*n);--n;let r=t[n];t[n]=t[e],t[e]=r}e.value=t},reset:()=>{e.value=[...R],t.value=R.length+1}}}));return p(i=>{let a=u(),g=s(`rue:component:anchor`);return r(a,g),_(y(j,{children:p(()=>{let i=u(),a=o(`h1`,i);r(i,a),v(a,`text-5xl font-semibold mb-4 md:mb-4`),r(a,e(`带过渡动效的列表（移植自 Vue）`));let g=o(`div`,i);r(i,g),d(g,`role`,`tablist`),v(g,`tabs tabs-box`);let x=o(`button`,g);r(g,x),d(x,`role`,`tab`),c(()=>{v(x,`tab ${l.value===`preview`?`tab-active`:``}`)}),h(x,`click`,()=>{l.value=`preview`}),r(x,e(`效果`));let E=o(`button`,g);r(g,E),d(E,`role`,`tab`),c(()=>{v(E,`tab ${l.value===`code`?`tab-active`:``}`)}),h(E,`click`,()=>{l.value=`code`}),r(E,e(`代码`));let D=o(`style`,i);r(i,D),c(()=>{m(D,B)});let O=o(`div`,i);r(i,O),v(O,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let k=s(`rue:slot:anchor`);r(O,k),c(()=>{let e=l.value===`code`?p(()=>{let e=u(),t=o(`div`,e);r(e,t),v(t,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`);let i=s(`rue:component:anchor`);return r(t,i),c(()=>{let e=y(A,{className:`h-full`,lang:`tsx`,code:V});n(()=>_(e,t,i))}),e}):``;n(()=>_(e,O,k))}),r(O,e(` `));let j=s(`rue:slot:anchor`);return r(O,j),c(()=>{let i=l.value===`preview`?p(()=>{let i=u(),a=o(`div`,i);r(i,a),v(a,`card bg-base-100 shadow`);let l=o(`div`,a);r(a,l),v(l,`card-body grid gap-4`);let g=o(`div`,l);r(l,g),v(g,`flex gap-3`);let x=o(`button`,g);r(g,x),v(x,`btn btn-primary`),h(x,`click`,b),r(x,e(`Insert at random index`));let E=o(`button`,g);r(g,E),v(E,`btn`),h(E,`click`,T),r(E,e(`Reset`));let D=o(`button`,g);r(g,D),v(D,`btn`),h(D,`click`,w),r(D,e(`Shuffle`));let O=o(`div`,l);r(l,O),v(O,`list-shell rounded-xl border border-base-200 bg-base-100 p-3`);let k=s(`rue:component:anchor`);return r(O,k),c(()=>{let i=y(L,{tag:`ul`,name:`list`,type:`transition`,duration:z,children:t.value.map(t=>S(p(()=>{let n=u(),i=o(`li`,n);r(n,i),c(()=>{d(i,`key`,String(t))}),v(i,`rounded-md border border-base-200 bg-base-100 px-3 py-2 shadow-sm`);let a=o(`span`,i);r(i,a),v(a,`text-base-content`);let s=f(a);r(a,s),c(()=>{m(s,t)});let l=o(`button`,i);return r(i,l),v(l,`btn btn-sm`),h(l,`click`,()=>C(t)),r(l,e(`x`)),n}),t))});n(()=>_(i,O,k))}),i}):``;n(()=>_(i,O,j))}),i})}),a,g),a})};export{H as default};