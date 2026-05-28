import{$ as e,D as t,Gt as n,I as r,J as i,Kt as a,Lt as o,Q as s,Vt as c,X as l,Y as u,Yt as d,Z as f,ct as p,d as m,et as h,l as g,mt as _,ot as v,t as y,tt as b}from"./vapor-runtime-BR_2rwNk.js";import{a as x,o as S}from"./vapor-helpers-vapor-DkadWylb.js";import{a as C,i as w,n as T,o as E,r as D,s as O,t as k}from"./BaseTransition-1Kaff2kD.js";import{t as A}from"./Code-B_4lzH85.js";import{t as j}from"./SidebarPlaygroundExample-CtM-WHq_.js";var M=new WeakSet,N=e=>Array.isArray(e)?e.map(e=>N(e)):e,P=e=>{let t=[],n=e=>{if(!(e==null||e===!1)){if(Array.isArray(e)){e.forEach(n);return}t.push(e)}};return n(e),t},F=e=>{if(typeof e!=`object`&&typeof e!=`function`||e==null)return``;let t=e.key??e.props?.key;return t==null?``:String(t)},I=e=>({...e,children:N(e.children)}),L=e=>{let i=n(),o=a(()=>({firstRender:!0,renderVersion:null})),s=e=>Array.from(e.children).filter(e=>e.nodeType===1&&!e.hasAttribute(`data-rue-leaving`));r(()=>{o.renderVersion=null});let c=I(e),d=c.name||`rue`,f=c.moveClass??`${d}-move`,{runEnter:p,runLeave:m}=k(c),h=new Map,g=new Map,_=i.current;_&&s(_).forEach(e=>{let t=e.getAttribute(`data-rue-key`);t&&(h.set(t,e),g.set(t,e.getBoundingClientRect()))});let v=P(c.children),y=v.map(F),b=Symbol(`transition-group-render`),x=o.firstRender;return o.renderVersion=b,queueMicrotask(()=>{if(o.renderVersion!==b)return;let e=i.current;if(!e)return;let t=s(e),n=new Map,r=new Set;t.forEach(e=>{let t=e.getAttribute(`data-rue-key`);t&&r.add(t)});let a=x&&h.size===0&&r.size===0&&!M.has(e);for(let e=0;e<v.length;e++){let r=t[e];if(!r)continue;let i=y[e];i?(r.setAttribute(`data-rue-key`,i),n.set(i,r)):r.removeAttribute(`data-rue-key`)}y.forEach(e=>{if(!e)return;let t=n.get(e);if(t&&!h.has(e)){if(a){c.appear&&p(t,`appear`);return}p(t,`enter`)}}),g.forEach((e,t)=>{let r=n.get(t);if(!r)return;let i=r.getBoundingClientRect(),a=e.left-i.left,o=e.top-i.top;if(!a&&!o)return;r.style.transform=`translate(${a}px, ${o}px)`,r.style.transition=`transform 0s`,D(r),r.style.transform=``,r.style.transition=``,T(r,f);let s=c.type??w(r),l=Math.max(E(r,`transition`,void 0,`enter`),E(r,`animation`,void 0,`enter`));O(r,s??null,l,()=>C(r,f))});let d=new Set(y.filter(Boolean));h.forEach((t,n)=>{d.has(n)||(t.setAttribute(`data-rue-leaving`,`true`),l(e,t)||u(e,t),m(t,()=>{t.remove()}))}),M.add(e)}),o.firstRender=!1,t(e.tag||`span`,e.tag?{ref:i}:{ref:i,style:`display: contents`},e.children)},R=[1,2,3,4,5],z=350,B=`
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

export default ListTransitionExample;`,H=()=>{let{items:t,nextId:n,activeTab:r,insert:l,remove:C,shuffle:w,reset:T}=x(`useSetup:0:0`,()=>a(()=>{let e=x(`ref:1:0`,()=>o([...R])),t=x(`ref:1:1`,()=>o(R.length+1));return{items:e,nextId:t,activeTab:x(`ref:1:2`,()=>o(`preview`)),insert:()=>{let n=e.value.slice(),r=Math.round(Math.random()*n.length);n.splice(r,0,t.value),e.value=n,t.value+=1},remove:t=>{e.value=e.value.filter(e=>e!==t)},shuffle:()=>{let t=e.value.slice(),n=t.length;for(;n!==0;){let e=Math.floor(Math.random()*n);--n;let r=t[n];t[n]=t[e],t[e]=r}e.value=t},reset:()=>{e.value=[...R],t.value=R.length+1}}}));return m(n=>{let a=s(),o=f(`rue:component:anchor`);return u(a,o),g(y(j,{children:m(()=>{let n=s(),a=e(`h1`,n);u(n,a),p(a,`text-5xl font-semibold mb-4 md:mb-4`),u(a,h(`带过渡动效的列表（移植自 Vue）`));let o=e(`div`,n);u(n,o),v(o,`role`,`tablist`),p(o,`tabs tabs-box`);let x=e(`button`,o);u(o,x),v(x,`role`,`tab`),d(()=>{p(x,String(`tab ${r.value===`preview`?`tab-active`:``}`))}),i(x,`click`,()=>{r.value=`preview`}),u(x,h(`效果`));let E=e(`button`,o);u(o,E),v(E,`role`,`tab`),d(()=>{p(E,String(`tab ${r.value===`code`?`tab-active`:``}`))}),i(E,`click`,()=>{r.value=`code`}),u(E,h(`代码`));let D=e(`style`,n);u(n,D),d(()=>{_(D,B)});let O=e(`div`,n);u(n,O),p(O,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let k=f(`rue:slot:anchor`);u(O,k),d(()=>{let t=r.value===`code`?m(()=>{let t=s(),n=e(`div`,t);u(t,n),p(n,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`);let r=f(`rue:component:anchor`);return u(n,r),d(()=>{let e=y(A,{className:`h-full`,lang:`tsx`,code:V});c(()=>g(e,n,r))}),t}):``;c(()=>g(t,O,k))}),u(O,h(` `));let j=f(`rue:slot:anchor`);return u(O,j),d(()=>{let n=r.value===`preview`?m(()=>{let n=s(),r=e(`div`,n);u(n,r),p(r,`card bg-base-100 shadow`);let a=e(`div`,r);u(r,a),p(a,`card-body grid gap-4`);let o=e(`div`,a);u(a,o),p(o,`flex gap-3`);let x=e(`button`,o);u(o,x),p(x,`btn btn-primary`),i(x,`click`,l),u(x,h(`Insert at random index`));let E=e(`button`,o);u(o,E),p(E,`btn`),i(E,`click`,T),u(E,h(`Reset`));let D=e(`button`,o);u(o,D),p(D,`btn`),i(D,`click`,w),u(D,h(`Shuffle`));let O=e(`div`,a);u(a,O),p(O,`list-shell rounded-xl border border-base-200 bg-base-100 p-3`);let k=f(`rue:component:anchor`);return u(O,k),d(()=>{let n=y(L,{key:t.value.join(`-`),tag:`ul`,name:`list`,duration:z,children:t.value.map(t=>S(m(()=>{let n=s(),r=e(`li`,n);u(n,r),d(()=>{v(r,`key`,String(t))}),p(r,`rounded-md border border-base-200 bg-base-100 px-3 py-2 shadow-sm`);let a=e(`span`,r);u(r,a),p(a,`text-base-content`);let o=b(a);u(a,o),d(()=>{_(o,t)});let c=e(`button`,r);return u(r,c),p(c,`btn btn-sm`),i(c,`click`,()=>C(t)),u(c,h(`x`)),n}),t))});c(()=>g(n,O,k))}),n}):``;c(()=>g(n,O,j))}),n})}),a,o),a})};export{H as default};