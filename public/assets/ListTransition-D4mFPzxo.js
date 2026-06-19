import{$ as e,$t as t,Bt as n,Gt as r,Q as i,R as a,X as o,Xt as s,Yt as c,Z as l,b as u,ct as d,et as f,gt as p,k as m,l as h,nt as g,o as _,rt as v,t as y,tt as b,ut as x}from"./vapor-runtime-CKrmRMZX.js";import{a as S,o as C}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{a as w,i as T,n as E,o as D,r as O,s as k,t as A}from"./BaseTransition-CAbV5vwn.js";import{t as j}from"./Code-D5UqTwV6.js";import{r as M}from"./SidebarPlaygroundExample-D2vGHFCu.js";var N=new WeakSet,P=Symbol.for(`rue.element.head-record`),F=e=>Array.isArray(e)?e.map(e=>F(e)):e,I=e=>{let t=[],n=e=>{if(!(e==null||e===!1)){if(Array.isArray(e)){e.forEach(n);return}t.push(e)}};return n(e),t},L=e=>{if(typeof e!=`object`&&typeof e!=`function`||e==null)return``;let t=e,n=t[P],r=t.key??t.props?.key??n?.key??n?.props?.key;return r==null?``:String(r)},R=e=>({...e,children:F(e.children)}),z=e=>{let t=c(),n=s(()=>({firstRender:!0,prevKeys:[],renderVersion:null})),r=e=>Array.from(e.children).filter(e=>e.nodeType===1&&!e.hasAttribute(`data-rue-leaving`)),a=e=>e.getAttribute(`key`)??e.getAttribute(`data-rue-key`)??``,o=(e,t)=>{let n=new Map;t.forEach(e=>{let t=a(e);if(!t)return;let r=n.get(t)??[];r.push(e),n.set(t,r)});let r=S.map((e,r)=>e?n.get(e)?.shift()??t[r]:t[r]),i=null;for(let t=r.length-1;t>=0;--t){let n=r[t];n&&(n.nextSibling!==i&&e.insertBefore(n,i),i=n)}return r.filter(e=>!!e)};m(()=>{n.prevKeys=[],n.renderVersion=null});let d=R(e),f=d.name||`rue`,p=d.moveClass??`${f}-move`,{runEnter:h,runLeave:g}=A(d),_=new Map,v=new Map,y=t.current,b=n.prevKeys.slice();y&&r(y).forEach((e,t)=>{let n=e.getAttribute(`data-rue-key`)??b[t]??``;n&&(e.hasAttribute(`data-rue-key`)||e.setAttribute(`data-rue-key`,n),_.set(n,e),v.set(n,e.getBoundingClientRect()))});let x=I(d.children),S=x.map(L),C=Symbol(`transition-group-render`),j=n.firstRender;return n.renderVersion=C,queueMicrotask(()=>{if(n.renderVersion!==C)return;let e=t.current;if(!e)return;let a=o(e,r(e)),s=new Map,c=new Set;a.forEach(e=>{let t=e.getAttribute(`data-rue-key`);t&&c.add(t)});let u=j&&!y&&b.length===0&&_.size===0&&c.size===0&&!N.has(e);for(let e=0;e<x.length;e++){let t=a[e];if(!t)continue;let n=S[e];n?(t.setAttribute(`data-rue-key`,n),s.set(n,t)):t.removeAttribute(`data-rue-key`)}S.forEach(e=>{if(!e)return;let t=s.get(e);if(t&&!_.has(e)){if(u){d.appear&&h(t,`appear`);return}h(t,`enter`)}}),v.forEach((e,t)=>{let n=s.get(t);if(!n)return;let r=n.getBoundingClientRect(),i=e.left-r.left,a=e.top-r.top;if(!i&&!a)return;n.style.transform=`translate(${i}px, ${a}px)`,n.style.transition=`transform 0s`,O(n),E(n,p),n.style.transform=``,n.style.transition=``;let o=d.type??T(n),c=Math.max(D(n,`transition`,void 0,`enter`),D(n,`animation`,void 0,`enter`));k(n,o??null,c,()=>w(n,p))});let f=new Set(S.filter(Boolean));_.forEach((t,n)=>{f.has(n)||(t.setAttribute(`data-rue-leaving`,`true`),i(e,t)||l(e,t),g(t,()=>{t.remove()}))}),N.add(e),n.prevKeys=S.slice()}),n.firstRender=!1,u(e.tag||`span`,e.tag?{ref:t}:{ref:t,style:`display: contents`},e.children)};a(z,`TransitionGroup`);var B=[1,2,3,4,5],V=350,H=`
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

export default ListTransitionExample;`,W=()=>{let{items:i,nextId:a,activeTab:c,insert:u,remove:m,shuffle:w,reset:T}=S(`useSetup:0:0`,()=>s(()=>{let e=S(`ref:1:0`,()=>n([...B])),t=S(`ref:1:1`,()=>n(B.length+1));return{items:e,nextId:t,activeTab:S(`ref:1:2`,()=>n(`preview`)),insert:()=>{let n=e.value.slice(),r=Math.round(Math.random()*n.length);n.splice(r,0,t.value),e.value=n,t.value+=1},remove:t=>{e.value=e.value.filter(e=>e!==t)},shuffle:()=>{let t=e.value.slice(),n=t.length;for(;n!==0;){let e=Math.floor(Math.random()*n);--n;let r=t[n];t[n]=t[e],t[e]=r}e.value=t},reset:()=>{e.value=[...B],t.value=B.length+1}}}));return h(n=>{let a=f(),s=e(`rue:component:anchor`);return l(a,s),_(y(M,{children:h(()=>{let n=f(),a=b(`h1`,n);l(n,a),x(a,`text-5xl font-semibold mb-4 md:mb-4`),l(a,g(`带过渡动效的列表（移植自 Vue）`));let s=b(`div`,n);l(n,s),d(s,`role`,`tablist`),x(s,`tabs tabs-box`);let S=b(`button`,s);l(s,S),d(S,`role`,`tab`),t(()=>{x(S,`tab ${c.value===`preview`?`tab-active`:``}`)}),o(S,`click`,()=>{c.value=`preview`}),l(S,g(`效果`));let E=b(`button`,s);l(s,E),d(E,`role`,`tab`),t(()=>{x(E,`tab ${c.value===`code`?`tab-active`:``}`)}),o(E,`click`,()=>{c.value=`code`}),l(E,g(`代码`));let D=b(`style`,n);l(n,D),t(()=>{p(D,H)});let O=b(`div`,n);l(n,O),x(O,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let k=e(`rue:slot:anchor`);l(O,k),t(()=>{let n=c.value===`code`?h(()=>{let n=f(),i=b(`div`,n);l(n,i),x(i,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`);let a=e(`rue:component:anchor`);return l(i,a),t(()=>{let e=y(j,{className:`h-full`,lang:`tsx`,code:U});r(()=>_(e,i,a))}),n}):``;r(()=>_(n,O,k))}),l(O,g(` `));let A=e(`rue:slot:anchor`);return l(O,A),t(()=>{let n=c.value===`preview`?h(()=>{let n=f(),a=b(`div`,n);l(n,a),x(a,`card bg-base-100 shadow`);let s=b(`div`,a);l(a,s),x(s,`card-body grid gap-4`);let c=b(`div`,s);l(s,c),x(c,`flex gap-3`);let S=b(`button`,c);l(c,S),x(S,`btn btn-primary`),o(S,`click`,u),l(S,g(`Insert at random index`));let E=b(`button`,c);l(c,E),x(E,`btn`),o(E,`click`,T),l(E,g(`Reset`));let D=b(`button`,c);l(c,D),x(D,`btn`),o(D,`click`,w),l(D,g(`Shuffle`));let O=b(`div`,s);l(s,O),x(O,`list-shell rounded-xl border border-base-200 bg-base-100 p-3`);let k=e(`rue:component:anchor`);return l(O,k),t(()=>{let e=y(z,{tag:`ul`,name:`list`,type:`transition`,duration:V,children:i.value.map(e=>C(h(()=>{let n=f(),r=b(`li`,n);l(n,r),t(()=>{d(r,`key`,String(e))}),x(r,`rounded-md border border-base-200 bg-base-100 px-3 py-2 shadow-sm`);let i=b(`span`,r);l(r,i),x(i,`text-base-content`);let a=v(i);l(i,a),t(()=>{p(a,e)});let s=b(`button`,r);return l(r,s),x(s,`btn btn-sm`),o(s,`click`,()=>m(e)),l(s,g(`x`)),n}),e))});r(()=>_(e,O,k))}),n}):``;r(()=>_(n,O,A))}),n})}),a,s),a})};export{W as default};