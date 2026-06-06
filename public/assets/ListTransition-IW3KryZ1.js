import{$ as e,B as t,C as n,Ct as r,Dt as i,G as a,H as o,K as s,O as c,U as l,V as u,W as d,Z as f,at as p,ht as m,l as h,s as g,t as _,wt as v,yt as y,z as b}from"./vapor-runtime-C1rlwc61.js";import{a as x,o as S}from"./vapor-helpers-vapor-HR6N5lMH.js";import{a as C,i as w,n as T,o as E,r as D,s as O,t as k}from"./BaseTransition-BUHIgwhj.js";import{t as A}from"./Code-BCLFq1E3.js";import{t as j}from"./SidebarPlaygroundExample-CdMvdgT7.js";var M=new WeakSet,N=e=>Array.isArray(e)?e.map(e=>N(e)):e,P=e=>{let t=[],n=e=>{if(!(e==null||e===!1)){if(Array.isArray(e)){e.forEach(n);return}t.push(e)}};return n(e),t},F=e=>{if(typeof e!=`object`&&typeof e!=`function`||e==null)return``;let t=e.key??e.props?.key;return t==null?``:String(t)},I=e=>({...e,children:N(e.children)}),L=e=>{let i=r(),a=v(()=>({firstRender:!0,renderVersion:null})),o=e=>Array.from(e.children).filter(e=>e.nodeType===1&&!e.hasAttribute(`data-rue-leaving`));c(()=>{a.renderVersion=null});let s=I(e),l=s.name||`rue`,d=s.moveClass??`${l}-move`,{runEnter:f,runLeave:p}=k(s),m=new Map,h=new Map,g=i.current;g&&o(g).forEach(e=>{let t=e.getAttribute(`data-rue-key`);t&&(m.set(t,e),h.set(t,e.getBoundingClientRect()))});let _=P(s.children),y=_.map(F),b=Symbol(`transition-group-render`),x=a.firstRender;return a.renderVersion=b,queueMicrotask(()=>{if(a.renderVersion!==b)return;let e=i.current;if(!e)return;let n=o(e),r=new Map,c=new Set;n.forEach(e=>{let t=e.getAttribute(`data-rue-key`);t&&c.add(t)});let l=x&&m.size===0&&c.size===0&&!M.has(e);for(let e=0;e<_.length;e++){let t=n[e];if(!t)continue;let i=y[e];i?(t.setAttribute(`data-rue-key`,i),r.set(i,t)):t.removeAttribute(`data-rue-key`)}y.forEach(e=>{if(!e)return;let t=r.get(e);if(t&&!m.has(e)){if(l){s.appear&&f(t,`appear`);return}f(t,`enter`)}}),h.forEach((e,t)=>{let n=r.get(t);if(!n)return;let i=n.getBoundingClientRect(),a=e.left-i.left,o=e.top-i.top;if(!a&&!o)return;n.style.transform=`translate(${a}px, ${o}px)`,n.style.transition=`transform 0s`,D(n),n.style.transform=``,n.style.transition=``,T(n,d);let c=s.type??w(n),l=Math.max(E(n,`transition`,void 0,`enter`),E(n,`animation`,void 0,`enter`));O(n,c??null,l,()=>C(n,d))});let g=new Set(y.filter(Boolean));m.forEach((n,r)=>{g.has(r)||(n.setAttribute(`data-rue-leaving`,`true`),u(e,n)||t(e,n),p(n,()=>{n.remove()}))}),M.add(e)}),a.firstRender=!1,n(e.tag||`span`,e.tag?{ref:i}:{ref:i,style:`display: contents`},e.children)},R=[1,2,3,4,5],z=350,B=`
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

export default ListTransitionExample;`,H=()=>{let{items:n,nextId:r,activeTab:c,insert:u,remove:C,shuffle:w,reset:T}=x(`useSetup:0:0`,()=>v(()=>{let e=x(`ref:1:0`,()=>m([...R])),t=x(`ref:1:1`,()=>m(R.length+1));return{items:e,nextId:t,activeTab:x(`ref:1:2`,()=>m(`preview`)),insert:()=>{let n=e.value.slice(),r=Math.round(Math.random()*n.length);n.splice(r,0,t.value),e.value=n,t.value+=1},remove:t=>{e.value=e.value.filter(e=>e!==t)},shuffle:()=>{let t=e.value.slice(),n=t.length;for(;n!==0;){let e=Math.floor(Math.random()*n);--n;let r=t[n];t[n]=t[e],t[e]=r}e.value=t},reset:()=>{e.value=[...R],t.value=R.length+1}}}));return h(r=>{let m=l(),v=o(`rue:component:anchor`);return t(m,v),g(_(j,{children:h(()=>{let r=l(),m=d(`h1`,r);t(r,m),e(m,`text-5xl font-semibold mb-4 md:mb-4`),t(m,a(`带过渡动效的列表（移植自 Vue）`));let v=d(`div`,r);t(r,v),f(v,`role`,`tablist`),e(v,`tabs tabs-box`);let x=d(`button`,v);t(v,x),f(x,`role`,`tab`),i(()=>{e(x,String(`tab ${c.value===`preview`?`tab-active`:``}`))}),b(x,`click`,()=>{c.value=`preview`}),t(x,a(`效果`));let E=d(`button`,v);t(v,E),f(E,`role`,`tab`),i(()=>{e(E,String(`tab ${c.value===`code`?`tab-active`:``}`))}),b(E,`click`,()=>{c.value=`code`}),t(E,a(`代码`));let D=d(`style`,r);t(r,D),i(()=>{p(D,B)});let O=d(`div`,r);t(r,O),e(O,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let k=o(`rue:slot:anchor`);t(O,k),i(()=>{let n=c.value===`code`?h(()=>{let n=l(),r=d(`div`,n);t(n,r),e(r,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`);let a=o(`rue:component:anchor`);return t(r,a),i(()=>{let e=_(A,{className:`h-full`,lang:`tsx`,code:V});y(()=>g(e,r,a))}),n}):``;y(()=>g(n,O,k))}),t(O,a(` `));let j=o(`rue:slot:anchor`);return t(O,j),i(()=>{let r=c.value===`preview`?h(()=>{let r=l(),c=d(`div`,r);t(r,c),e(c,`card bg-base-100 shadow`);let m=d(`div`,c);t(c,m),e(m,`card-body grid gap-4`);let v=d(`div`,m);t(m,v),e(v,`flex gap-3`);let x=d(`button`,v);t(v,x),e(x,`btn btn-primary`),b(x,`click`,u),t(x,a(`Insert at random index`));let E=d(`button`,v);t(v,E),e(E,`btn`),b(E,`click`,T),t(E,a(`Reset`));let D=d(`button`,v);t(v,D),e(D,`btn`),b(D,`click`,w),t(D,a(`Shuffle`));let O=d(`div`,m);t(m,O),e(O,`list-shell rounded-xl border border-base-200 bg-base-100 p-3`);let k=o(`rue:component:anchor`);return t(O,k),i(()=>{let r=_(L,{key:n.value.join(`-`),tag:`ul`,name:`list`,duration:z,children:n.value.map(n=>S(h(()=>{let r=l(),o=d(`li`,r);t(r,o),i(()=>{f(o,`key`,String(n))}),e(o,`rounded-md border border-base-200 bg-base-100 px-3 py-2 shadow-sm`);let c=d(`span`,o);t(o,c),e(c,`text-base-content`);let u=s(c);t(c,u),i(()=>{p(u,n)});let m=d(`button`,o);return t(o,m),e(m,`btn btn-sm`),b(m,`click`,()=>C(n)),t(m,a(`x`)),r}),n))});y(()=>g(r,O,k))}),r}):``;y(()=>g(r,O,j))}),r})}),m,v),m})};export{H as default};