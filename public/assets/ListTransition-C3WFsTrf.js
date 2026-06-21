import{$ as e,$t as t,A as n,Jt as r,Q as i,Z as a,dt as o,et as s,in as c,it as l,l as u,lt as d,nt as f,o as p,rn as m,rt as h,t as g,tt as _,vt as v,x as y,z as b,zt as x}from"./vapor-runtime-DsQWl-IB.js";import{a as S,o as C}from"./vapor-helpers-vapor-Dg64FcpK.js";import{a as w,i as T,n as E,o as D,r as O,s as k,t as A}from"./BaseTransition-MkTyjdIP.js";import{t as j}from"./Code-4SUSUwRg.js";import{r as M}from"./SidebarPlaygroundExample-BEWYUWOl.js";var N=new WeakSet,P=Symbol.for(`rue.element.head-record`),F=e=>Array.isArray(e)?e.map(e=>F(e)):e,I=e=>{let t=[],n=e=>{if(!(e==null||e===!1)){if(Array.isArray(e)){e.forEach(n);return}t.push(e)}};return n(e),t},L=e=>{if(typeof e!=`object`&&typeof e!=`function`||e==null)return``;let t=e,n=t[P],r=t.key??t.props?.key??n?.key??n?.props?.key;return r==null?``:String(r)},R=e=>({...e,children:F(e.children)}),z=t=>{let r=m(),a=c(()=>({firstRender:!0,prevKeys:[],renderVersion:null})),o=e=>Array.from(e.children).filter(e=>e.nodeType===1&&!e.hasAttribute(`data-rue-leaving`)),s=e=>e.getAttribute(`key`)??e.getAttribute(`data-rue-key`)??``,l=(e,t)=>{let n=new Map;t.forEach(e=>{let t=s(e);if(!t)return;let r=n.get(t)??[];r.push(e),n.set(t,r)});let r=S.map((e,r)=>e?n.get(e)?.shift()??t[r]:t[r]),i=null;for(let t=r.length-1;t>=0;--t){let n=r[t];n&&(n.nextSibling!==i&&e.insertBefore(n,i),i=n)}return r.filter(e=>!!e)};n(()=>{a.prevKeys=[],a.renderVersion=null});let u=R(t),d=u.name||`rue`,f=u.moveClass??`${d}-move`,{runEnter:p,runLeave:h}=A(u),g=new Map,_=new Map,v=r.current,b=a.prevKeys.slice();v&&o(v).forEach((e,t)=>{let n=e.getAttribute(`data-rue-key`)??b[t]??``;n&&(e.hasAttribute(`data-rue-key`)||e.setAttribute(`data-rue-key`,n),g.set(n,e),_.set(n,e.getBoundingClientRect()))});let x=I(u.children),S=x.map(L),C=Symbol(`transition-group-render`),j=a.firstRender;return a.renderVersion=C,queueMicrotask(()=>{if(a.renderVersion!==C)return;let t=r.current;if(!t)return;let n=l(t,o(t)),s=new Map,c=new Set;n.forEach(e=>{let t=e.getAttribute(`data-rue-key`);t&&c.add(t)});let d=j&&!v&&b.length===0&&g.size===0&&c.size===0&&!N.has(t);for(let e=0;e<x.length;e++){let t=n[e];if(!t)continue;let r=S[e];r?(t.setAttribute(`data-rue-key`,r),s.set(r,t)):t.removeAttribute(`data-rue-key`)}S.forEach(e=>{if(!e)return;let t=s.get(e);if(t&&!g.has(e)){if(d){u.appear&&p(t,`appear`);return}p(t,`enter`)}}),_.forEach((e,t)=>{let n=s.get(t);if(!n)return;let r=n.getBoundingClientRect(),i=e.left-r.left,a=e.top-r.top;if(!i&&!a)return;n.style.transform=`translate(${i}px, ${a}px)`,n.style.transition=`transform 0s`,O(n),E(n,f),n.style.transform=``,n.style.transition=``;let o=u.type??T(n),c=Math.max(D(n,`transition`,void 0,`enter`),D(n,`animation`,void 0,`enter`));k(n,o??null,c,()=>w(n,f))});let m=new Set(S.filter(Boolean));g.forEach((n,r)=>{m.has(r)||(n.setAttribute(`data-rue-leaving`,`true`),e(t,n)||i(t,n),h(n,()=>{n.remove()}))}),N.add(t),a.prevKeys=S.slice()}),a.firstRender=!1,y(t.tag||`span`,t.tag?{ref:r}:{ref:r,style:`display: contents`},t.children)};b(z,`TransitionGroup`);var B=[1,2,3,4,5],V=350,H=`
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
    opacity ${V}ms cubic-bezier(0.55, 0, 0.1, 1),
    transform ${V}ms cubic-bezier(0.55, 0, 0.1, 1);
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
  transition: transform ${V}ms cubic-bezier(0.55, 0, 0.1, 1);
}
`,U=`import { type FC, TransitionGroup, ref } from '@rue-js/rue';

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

export default ListTransitionExample;`,W=()=>{let{items:e,nextId:n,activeTab:m,insert:y,remove:b,shuffle:w,reset:T}=S(`useSetup:0:0`,()=>c(()=>{let e=S(`ref:1:0`,()=>r([...B])),t=S(`ref:1:1`,()=>r(B.length+1));return{items:e,nextId:t,activeTab:S(`ref:1:2`,()=>r(`preview`)),insert:()=>{let n=e.value.slice(),r=Math.round(Math.random()*n.length);n.splice(r,0,t.value),e.value=n,t.value+=1},remove:t=>{e.value=e.value.filter(e=>e!==t)},shuffle:()=>{let t=e.value.slice(),n=t.length;for(;n!==0;){let e=Math.floor(Math.random()*n);--n;let r=t[n];t[n]=t[e],t[e]=r}e.value=t},reset:()=>{e.value=[...B],t.value=B.length+1}}}));return u(n=>{let r=_(),c=s(`rue:component:anchor`);return i(r,c),p(g(M,{children:u(()=>{let n=_(),r=f(`h1`,n);i(n,r),o(r,`text-5xl font-semibold mb-4 md:mb-4`),i(r,h(`带过渡动效的列表（移植自 Vue）`));let c=f(`div`,n);i(n,c),d(c,`role`,`tablist`),o(c,`tabs tabs-box`);let S=f(`button`,c);i(c,S),d(S,`role`,`tab`),x(()=>{o(S,`tab ${m.value===`preview`?`tab-active`:``}`)}),a(S,`click`,()=>{m.value=`preview`}),i(S,h(`效果`));let E=f(`button`,c);i(c,E),d(E,`role`,`tab`),x(()=>{o(E,`tab ${m.value===`code`?`tab-active`:``}`)}),a(E,`click`,()=>{m.value=`code`}),i(E,h(`代码`));let D=f(`style`,n);i(n,D),x(()=>{v(D,H)});let O=f(`div`,n);i(n,O),o(O,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let k=s(`rue:slot:anchor`);i(O,k),x(()=>{let e=m.value===`code`?u(()=>{let e=_(),n=f(`div`,e);i(e,n),o(n,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`);let r=s(`rue:component:anchor`);return i(n,r),x(()=>{let e=g(j,{className:`h-full`,lang:`tsx`,code:U});t(()=>p(e,n,r))}),e}):``;t(()=>p(e,O,k))}),i(O,h(` `));let A=s(`rue:slot:anchor`);return i(O,A),x(()=>{let n=m.value===`preview`?u(()=>{let n=_(),r=f(`div`,n);i(n,r),o(r,`card bg-base-100 shadow`);let c=f(`div`,r);i(r,c),o(c,`card-body grid gap-4`);let m=f(`div`,c);i(c,m),o(m,`flex gap-3`);let S=f(`button`,m);i(m,S),o(S,`btn btn-primary`),a(S,`click`,y),i(S,h(`Insert at random index`));let E=f(`button`,m);i(m,E),o(E,`btn`),a(E,`click`,T),i(E,h(`Reset`));let D=f(`button`,m);i(m,D),o(D,`btn`),a(D,`click`,w),i(D,h(`Shuffle`));let O=f(`div`,c);i(c,O),o(O,`list-shell rounded-xl border border-base-200 bg-base-100 p-3`);let k=s(`rue:component:anchor`);return i(O,k),x(()=>{let n=g(z,{tag:`ul`,name:`list`,type:`transition`,duration:V,children:e.value.map(e=>C(u(()=>{let t=_(),n=f(`li`,t);i(t,n),x(()=>{d(n,`key`,String(e))}),o(n,`rounded-md border border-base-200 bg-base-100 px-3 py-2 shadow-sm`);let r=f(`span`,n);i(n,r),o(r,`text-base-content`);let s=l(r);i(r,s),x(()=>{v(s,e)});let c=f(`button`,n);return i(n,c),o(c,`btn btn-sm`),a(c,`click`,()=>b(e)),i(c,h(`x`)),t}),e))});t(()=>p(n,O,k))}),n}):``;t(()=>p(n,O,A))}),n})}),r,c),r})};export{W as default};