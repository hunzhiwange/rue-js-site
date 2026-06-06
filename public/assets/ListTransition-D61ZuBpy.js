import{$ as e,Gt as t,J as n,Kt as r,Lt as i,Q as a,S as o,Vt as s,X as c,Y as l,Yt as u,Z as d,ct as f,et as p,j as m,l as h,mt as g,ot as _,s as v,t as y,tt as b}from"./vapor-runtime-DHPuOjqh.js";import{a as x,o as S}from"./vapor-helpers-vapor-CJFAWine.js";import{a as C,i as w,n as T,o as E,r as D,s as O,t as k}from"./BaseTransition-BinKqaWI.js";import{t as A}from"./Code-Ds9lKLk6.js";import{t as j}from"./SidebarPlaygroundExample-KML-rOvA.js";var M=new WeakSet,N=e=>Array.isArray(e)?e.map(e=>N(e)):e,P=e=>{let t=[],n=e=>{if(!(e==null||e===!1)){if(Array.isArray(e)){e.forEach(n);return}t.push(e)}};return n(e),t},F=e=>{if(typeof e!=`object`&&typeof e!=`function`||e==null)return``;let t=e.key??e.props?.key;return t==null?``:String(t)},I=e=>({...e,children:N(e.children)}),L=e=>{let n=t(),i=r(()=>({firstRender:!0,renderVersion:null})),a=e=>Array.from(e.children).filter(e=>e.nodeType===1&&!e.hasAttribute(`data-rue-leaving`));m(()=>{i.renderVersion=null});let s=I(e),u=s.name||`rue`,d=s.moveClass??`${u}-move`,{runEnter:f,runLeave:p}=k(s),h=new Map,g=new Map,_=n.current;_&&a(_).forEach(e=>{let t=e.getAttribute(`data-rue-key`);t&&(h.set(t,e),g.set(t,e.getBoundingClientRect()))});let v=P(s.children),y=v.map(F),b=Symbol(`transition-group-render`),x=i.firstRender;return i.renderVersion=b,queueMicrotask(()=>{if(i.renderVersion!==b)return;let e=n.current;if(!e)return;let t=a(e),r=new Map,o=new Set;t.forEach(e=>{let t=e.getAttribute(`data-rue-key`);t&&o.add(t)});let u=x&&h.size===0&&o.size===0&&!M.has(e);for(let e=0;e<v.length;e++){let n=t[e];if(!n)continue;let i=y[e];i?(n.setAttribute(`data-rue-key`,i),r.set(i,n)):n.removeAttribute(`data-rue-key`)}y.forEach(e=>{if(!e)return;let t=r.get(e);if(t&&!h.has(e)){if(u){s.appear&&f(t,`appear`);return}f(t,`enter`)}}),g.forEach((e,t)=>{let n=r.get(t);if(!n)return;let i=n.getBoundingClientRect(),a=e.left-i.left,o=e.top-i.top;if(!a&&!o)return;n.style.transform=`translate(${a}px, ${o}px)`,n.style.transition=`transform 0s`,D(n),n.style.transform=``,n.style.transition=``,T(n,d);let c=s.type??w(n),l=Math.max(E(n,`transition`,void 0,`enter`),E(n,`animation`,void 0,`enter`));O(n,c??null,l,()=>C(n,d))});let m=new Set(y.filter(Boolean));h.forEach((t,n)=>{m.has(n)||(t.setAttribute(`data-rue-leaving`,`true`),c(e,t)||l(e,t),p(t,()=>{t.remove()}))}),M.add(e)}),i.firstRender=!1,o(e.tag||`span`,e.tag?{ref:n}:{ref:n,style:`display: contents`},e.children)},R=[1,2,3,4,5],z=350,B=`
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

export default ListTransitionExample;`,H=()=>{let{items:t,nextId:o,activeTab:c,insert:m,remove:C,shuffle:w,reset:T}=x(`useSetup:0:0`,()=>r(()=>{let e=x(`ref:1:0`,()=>i([...R])),t=x(`ref:1:1`,()=>i(R.length+1));return{items:e,nextId:t,activeTab:x(`ref:1:2`,()=>i(`preview`)),insert:()=>{let n=e.value.slice(),r=Math.round(Math.random()*n.length);n.splice(r,0,t.value),e.value=n,t.value+=1},remove:t=>{e.value=e.value.filter(e=>e!==t)},shuffle:()=>{let t=e.value.slice(),n=t.length;for(;n!==0;){let e=Math.floor(Math.random()*n);--n;let r=t[n];t[n]=t[e],t[e]=r}e.value=t},reset:()=>{e.value=[...R],t.value=R.length+1}}}));return h(r=>{let i=a(),o=d(`rue:component:anchor`);return l(i,o),v(y(j,{children:h(()=>{let r=a(),i=e(`h1`,r);l(r,i),f(i,`text-5xl font-semibold mb-4 md:mb-4`),l(i,p(`带过渡动效的列表（移植自 Vue）`));let o=e(`div`,r);l(r,o),_(o,`role`,`tablist`),f(o,`tabs tabs-box`);let x=e(`button`,o);l(o,x),_(x,`role`,`tab`),u(()=>{f(x,String(`tab ${c.value===`preview`?`tab-active`:``}`))}),n(x,`click`,()=>{c.value=`preview`}),l(x,p(`效果`));let E=e(`button`,o);l(o,E),_(E,`role`,`tab`),u(()=>{f(E,String(`tab ${c.value===`code`?`tab-active`:``}`))}),n(E,`click`,()=>{c.value=`code`}),l(E,p(`代码`));let D=e(`style`,r);l(r,D),u(()=>{g(D,B)});let O=e(`div`,r);l(r,O),f(O,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let k=d(`rue:slot:anchor`);l(O,k),u(()=>{let t=c.value===`code`?h(()=>{let t=a(),n=e(`div`,t);l(t,n),f(n,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`);let r=d(`rue:component:anchor`);return l(n,r),u(()=>{let e=y(A,{className:`h-full`,lang:`tsx`,code:V});s(()=>v(e,n,r))}),t}):``;s(()=>v(t,O,k))}),l(O,p(` `));let j=d(`rue:slot:anchor`);return l(O,j),u(()=>{let r=c.value===`preview`?h(()=>{let r=a(),i=e(`div`,r);l(r,i),f(i,`card bg-base-100 shadow`);let o=e(`div`,i);l(i,o),f(o,`card-body grid gap-4`);let c=e(`div`,o);l(o,c),f(c,`flex gap-3`);let x=e(`button`,c);l(c,x),f(x,`btn btn-primary`),n(x,`click`,m),l(x,p(`Insert at random index`));let E=e(`button`,c);l(c,E),f(E,`btn`),n(E,`click`,T),l(E,p(`Reset`));let D=e(`button`,c);l(c,D),f(D,`btn`),n(D,`click`,w),l(D,p(`Shuffle`));let O=e(`div`,o);l(o,O),f(O,`list-shell rounded-xl border border-base-200 bg-base-100 p-3`);let k=d(`rue:component:anchor`);return l(O,k),u(()=>{let r=y(L,{key:t.value.join(`-`),tag:`ul`,name:`list`,duration:z,children:t.value.map(t=>S(h(()=>{let r=a(),i=e(`li`,r);l(r,i),u(()=>{_(i,`key`,String(t))}),f(i,`rounded-md border border-base-200 bg-base-100 px-3 py-2 shadow-sm`);let o=e(`span`,i);l(i,o),f(o,`text-base-content`);let s=b(o);l(o,s),u(()=>{g(s,t)});let c=e(`button`,i);return l(i,c),f(c,`btn btn-sm`),n(c,`click`,()=>C(t)),l(c,p(`x`)),r}),t))});s(()=>v(r,O,k))}),r}):``;s(()=>v(r,O,j))}),r})}),i,o),i})};export{H as default};