import{$ as e,Ht as t,J as n,Kt as r,Q as i,Rt as a,S as o,X as s,Xt as c,Y as l,Z as u,ct as d,et as f,j as p,l as m,mt as h,ot as g,qt as _,s as v,t as y,tt as b}from"./vapor-runtime-aZAg0Qkw.js";import{a as x,o as S}from"./vapor-helpers-vapor-gtGwiIv0.js";import{a as C,i as w,n as T,o as E,r as D,s as O,t as k}from"./BaseTransition-5OHAQ87f.js";import{t as A}from"./Code-5DOEyGxf.js";import{r as j}from"./SidebarPlaygroundExample-cASgDpH3.js";var M=new WeakSet,N=e=>Array.isArray(e)?e.map(e=>N(e)):e,P=e=>{let t=[],n=e=>{if(!(e==null||e===!1)){if(Array.isArray(e)){e.forEach(n);return}t.push(e)}};return n(e),t},F=e=>{if(typeof e!=`object`&&typeof e!=`function`||e==null)return``;let t=e.key??e.props?.key;return t==null?``:String(t)},I=e=>({...e,children:N(e.children)}),L=e=>{let t=r(),n=_(()=>({firstRender:!0,renderVersion:null})),i=e=>Array.from(e.children).filter(e=>e.nodeType===1&&!e.hasAttribute(`data-rue-leaving`));p(()=>{n.renderVersion=null});let a=I(e),c=a.name||`rue`,u=a.moveClass??`${c}-move`,{runEnter:d,runLeave:f}=k(a),m=new Map,h=new Map,g=t.current;g&&i(g).forEach(e=>{let t=e.getAttribute(`data-rue-key`);t&&(m.set(t,e),h.set(t,e.getBoundingClientRect()))});let v=P(a.children),y=v.map(F),b=Symbol(`transition-group-render`),x=n.firstRender;return n.renderVersion=b,queueMicrotask(()=>{if(n.renderVersion!==b)return;let e=t.current;if(!e)return;let r=i(e),o=new Map,c=new Set;r.forEach(e=>{let t=e.getAttribute(`data-rue-key`);t&&c.add(t)});let p=x&&m.size===0&&c.size===0&&!M.has(e);for(let e=0;e<v.length;e++){let t=r[e];if(!t)continue;let n=y[e];n?(t.setAttribute(`data-rue-key`,n),o.set(n,t)):t.removeAttribute(`data-rue-key`)}y.forEach(e=>{if(!e)return;let t=o.get(e);if(t&&!m.has(e)){if(p){a.appear&&d(t,`appear`);return}d(t,`enter`)}}),h.forEach((e,t)=>{let n=o.get(t);if(!n)return;let r=n.getBoundingClientRect(),i=e.left-r.left,s=e.top-r.top;if(!i&&!s)return;n.style.transform=`translate(${i}px, ${s}px)`,n.style.transition=`transform 0s`,D(n),n.style.transform=``,n.style.transition=``,T(n,u);let c=a.type??w(n),l=Math.max(E(n,`transition`,void 0,`enter`),E(n,`animation`,void 0,`enter`));O(n,c??null,l,()=>C(n,u))});let g=new Set(y.filter(Boolean));m.forEach((t,n)=>{g.has(n)||(t.setAttribute(`data-rue-leaving`,`true`),s(e,t)||l(e,t),f(t,()=>{t.remove()}))}),M.add(e)}),n.firstRender=!1,o(e.tag||`span`,e.tag?{ref:t}:{ref:t,style:`display: contents`},e.children)},R=[1,2,3,4,5],z=350,B=`
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

export default ListTransitionExample;`,H=()=>{let{items:r,nextId:o,activeTab:s,insert:p,remove:C,shuffle:w,reset:T}=x(`useSetup:0:0`,()=>_(()=>{let e=x(`ref:1:0`,()=>a([...R])),t=x(`ref:1:1`,()=>a(R.length+1));return{items:e,nextId:t,activeTab:x(`ref:1:2`,()=>a(`preview`)),insert:()=>{let n=e.value.slice(),r=Math.round(Math.random()*n.length);n.splice(r,0,t.value),e.value=n,t.value+=1},remove:t=>{e.value=e.value.filter(e=>e!==t)},shuffle:()=>{let t=e.value.slice(),n=t.length;for(;n!==0;){let e=Math.floor(Math.random()*n);--n;let r=t[n];t[n]=t[e],t[e]=r}e.value=t},reset:()=>{e.value=[...R],t.value=R.length+1}}}));return m(a=>{let o=i(),_=u(`rue:component:anchor`);return l(o,_),v(y(j,{children:m(()=>{let a=i(),o=e(`h1`,a);l(a,o),d(o,`text-5xl font-semibold mb-4 md:mb-4`),l(o,f(`带过渡动效的列表（移植自 Vue）`));let _=e(`div`,a);l(a,_),g(_,`role`,`tablist`),d(_,`tabs tabs-box`);let x=e(`button`,_);l(_,x),g(x,`role`,`tab`),c(()=>{d(x,String(`tab ${s.value===`preview`?`tab-active`:``}`))}),n(x,`click`,()=>{s.value=`preview`}),l(x,f(`效果`));let E=e(`button`,_);l(_,E),g(E,`role`,`tab`),c(()=>{d(E,String(`tab ${s.value===`code`?`tab-active`:``}`))}),n(E,`click`,()=>{s.value=`code`}),l(E,f(`代码`));let D=e(`style`,a);l(a,D),c(()=>{h(D,B)});let O=e(`div`,a);l(a,O),d(O,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let k=u(`rue:slot:anchor`);l(O,k),c(()=>{let n=s.value===`code`?m(()=>{let n=i(),r=e(`div`,n);l(n,r),d(r,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`);let a=u(`rue:component:anchor`);return l(r,a),c(()=>{let e=y(A,{className:`h-full`,lang:`tsx`,code:V});t(()=>v(e,r,a))}),n}):``;t(()=>v(n,O,k))}),l(O,f(` `));let j=u(`rue:slot:anchor`);return l(O,j),c(()=>{let a=s.value===`preview`?m(()=>{let a=i(),o=e(`div`,a);l(a,o),d(o,`card bg-base-100 shadow`);let s=e(`div`,o);l(o,s),d(s,`card-body grid gap-4`);let _=e(`div`,s);l(s,_),d(_,`flex gap-3`);let x=e(`button`,_);l(_,x),d(x,`btn btn-primary`),n(x,`click`,p),l(x,f(`Insert at random index`));let E=e(`button`,_);l(_,E),d(E,`btn`),n(E,`click`,T),l(E,f(`Reset`));let D=e(`button`,_);l(_,D),d(D,`btn`),n(D,`click`,w),l(D,f(`Shuffle`));let O=e(`div`,s);l(s,O),d(O,`list-shell rounded-xl border border-base-200 bg-base-100 p-3`);let k=u(`rue:component:anchor`);return l(O,k),c(()=>{let a=y(L,{key:r.value.join(`-`),tag:`ul`,name:`list`,duration:z,children:r.value.map(t=>S(m(()=>{let r=i(),a=e(`li`,r);l(r,a),c(()=>{g(a,`key`,String(t))}),d(a,`rounded-md border border-base-200 bg-base-100 px-3 py-2 shadow-sm`);let o=e(`span`,a);l(a,o),d(o,`text-base-content`);let s=b(o);l(o,s),c(()=>{h(s,t)});let u=e(`button`,a);return l(a,u),d(u,`btn btn-sm`),n(u,`click`,()=>C(t)),l(u,f(`x`)),r}),t))});t(()=>v(a,O,k))}),a}):``;t(()=>v(a,O,j))}),a})}),o,_),o})};export{H as default};