import{C as e,Cn as t,Ct as n,H as r,Mt as i,Sn as a,Tt as o,dt as s,ft as c,ht as l,m as u,mt as d,ot as f,pn as p,pt as m,st as h,tn as g,ut as _,vn as v}from"./context-8lXZvIn-.js";import{l as y,o as b,t as x}from"./vapor-runtime-ygJWVcNn.js";import{a as S,o as C}from"./vapor-helpers-vapor-CMwHgsXf.js";import{a as w,i as T,n as E,o as D,r as O,s as k,t as A}from"./BaseTransition-nUVBHeGx.js";import{t as j}from"./Code-DhoWkRkB.js";import{r as M}from"./SidebarPlaygroundExample-B78jsvoF.js";var N=new WeakSet,P=Symbol.for(`rue.element.head-record`),F=()=>{let e=globalThis.__rue_is_server_rendering__;return typeof e==`number`&&e>0},I=e=>Array.isArray(e)?e.map(e=>I(e)):e,L=e=>{let t=[],n=e=>{if(!(e==null||e===!1)){if(Array.isArray(e)){e.forEach(n);return}t.push(e)}};return n(e),t},R=e=>{if(typeof e!=`object`&&typeof e!=`function`||e==null)return``;let t=e,n=t[P],r=t.key??t.props?.key??n?.key??n?.props?.key;return r==null?``:String(r)},z=e=>({...e,children:I(e.children)}),B=n=>{let r=a(),i=t(()=>({firstRender:!0,prevKeys:[],renderVersion:null}));if(F())return u(n.tag||`span`,n.tag?{ref:r}:{ref:r,style:`display: contents`},n.children);let o=e=>Array.from(e.children).filter(e=>e.nodeType===1&&!e.hasAttribute(`data-rue-leaving`)),s=e=>e.getAttribute(`key`)??e.getAttribute(`data-rue-key`)??``,c=(e,t)=>{let n=new Map;t.forEach(e=>{let t=s(e);if(!t)return;let r=n.get(t)??[];r.push(e),n.set(t,r)});let r=S.map((e,r)=>e?n.get(e)?.shift()??t[r]:t[r]),i=null;for(let t=r.length-1;t>=0;--t){let n=r[t];n&&(n.nextSibling!==i&&e.insertBefore(n,i),i=n)}return r.filter(e=>!!e)};e(()=>{i.prevKeys=[],i.renderVersion=null});let l=z(n),d=l.name||`rue`,f=l.moveClass??`${d}-move`,{runEnter:p,runLeave:m}=A(l),g=new Map,v=new Map,y=r.current,b=i.prevKeys.slice();y&&o(y).forEach((e,t)=>{let n=e.getAttribute(`data-rue-key`)??b[t]??``;n&&(e.hasAttribute(`data-rue-key`)||e.setAttribute(`data-rue-key`,n),g.set(n,e),v.set(n,e.getBoundingClientRect()))});let x=L(l.children),S=x.map(R),C=Symbol(`transition-group-render`),j=i.firstRender;return i.renderVersion=C,queueMicrotask(()=>{if(i.renderVersion!==C)return;let e=r.current;if(!e)return;let t=c(e,o(e)),n=new Map,a=new Set;t.forEach(e=>{let t=e.getAttribute(`data-rue-key`);t&&a.add(t)});let s=j&&!y&&b.length===0&&g.size===0&&a.size===0&&!N.has(e);for(let e=0;e<x.length;e++){let r=t[e];if(!r)continue;let i=S[e];i?(r.setAttribute(`data-rue-key`,i),n.set(i,r)):r.removeAttribute(`data-rue-key`)}S.forEach(e=>{if(!e)return;let t=n.get(e);if(t&&!g.has(e)){if(s){l.appear&&p(t,`appear`);return}p(t,`enter`)}}),v.forEach((e,t)=>{let r=n.get(t);if(!r)return;let i=r.getBoundingClientRect(),a=e.left-i.left,o=e.top-i.top;if(!a&&!o)return;r.style.transform=`translate(${a}px, ${o}px)`,r.style.transition=`transform 0s`,O(r),E(r,f),r.style.transform=``,r.style.transition=``;let s=l.type??T(r),c=Math.max(D(r,`transition`,void 0,`enter`),D(r,`animation`,void 0,`enter`));k(r,s??null,c,()=>w(r,f))});let u=new Set(S.filter(Boolean));g.forEach((t,n)=>{u.has(n)||(t.setAttribute(`data-rue-leaving`,`true`),_(e,t)||h(e,t),m(t,()=>{t.remove()}))}),N.add(e),i.prevKeys=S.slice()}),i.firstRender=!1,u(n.tag||`span`,n.tag?{ref:r}:{ref:r,style:`display: contents`},n.children)};r(B,`TransitionGroup`);var V=[1,2,3,4,5],H=350,U=`
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
    opacity ${H}ms cubic-bezier(0.55, 0, 0.1, 1),
    transform ${H}ms cubic-bezier(0.55, 0, 0.1, 1);
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
  transition: transform ${H}ms cubic-bezier(0.55, 0, 0.1, 1);
}
`,W=`import { type FC, TransitionGroup, ref } from '@rue-js/rue';

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

export default ListTransitionExample;`,G=()=>{let{items:e,nextId:r,activeTab:a,insert:u,remove:_,shuffle:w,reset:T}=S(`useSetup:0:0`,()=>t(()=>{let e=S(`ref:1:0`,()=>p([...V])),t=S(`ref:1:1`,()=>p(V.length+1));return{items:e,nextId:t,activeTab:S(`ref:1:2`,()=>p(`preview`)),insert:()=>{let n=e.value.slice(),r=Math.round(Math.random()*n.length);n.splice(r,0,t.value),e.value=n,t.value+=1},remove:t=>{e.value=e.value.filter(e=>e!==t)},shuffle:()=>{let t=e.value.slice(),n=t.length;for(;n!==0;){let e=Math.floor(Math.random()*n);--n;let r=t[n];t[n]=t[e],t[e]=r}e.value=t},reset:()=>{e.value=[...V],t.value=V.length+1}}}));return y(t=>{let r=c(),p=s(`rue:component:anchor`);return h(r,p),b(x(M,{children:y(()=>{let t=c(),r=m(`h1`,t);h(t,r),o(r,`text-5xl font-semibold mb-4 md:mb-4`),h(r,d(`带过渡动效的列表（移植自 Vue）`));let p=m(`div`,t);h(t,p),n(p,`role`,`tablist`),o(p,`tabs tabs-box`);let S=m(`button`,p);h(p,S),n(S,`role`,`tab`),g(()=>{o(S,`tab ${a.value===`preview`?`tab-active`:``}`)}),f(S,`click`,()=>{a.value=`preview`}),h(S,d(`效果`));let E=m(`button`,p);h(p,E),n(E,`role`,`tab`),g(()=>{o(E,`tab ${a.value===`code`?`tab-active`:``}`)}),f(E,`click`,()=>{a.value=`code`}),h(E,d(`代码`));let D=m(`style`,t);h(t,D),g(()=>{i(D,U)});let O=m(`div`,t);h(t,O),o(O,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let k=s(`rue:slot:anchor`);h(O,k),g(()=>{let e=a.value===`code`?y(()=>{let e=c(),t=m(`div`,e);h(e,t),o(t,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`);let n=s(`rue:component:anchor`);return h(t,n),g(()=>{let e=x(j,{className:`h-full`,lang:`tsx`,code:W});v(()=>b(e,t,n))}),e}):``;v(()=>b(e,O,k))}),h(O,d(` `));let A=s(`rue:slot:anchor`);return h(O,A),g(()=>{let t=a.value===`preview`?y(()=>{let t=c(),r=m(`div`,t);h(t,r),o(r,`card bg-base-100 shadow`);let a=m(`div`,r);h(r,a),o(a,`card-body grid gap-4`);let p=m(`div`,a);h(a,p),o(p,`flex gap-3`);let S=m(`button`,p);h(p,S),o(S,`btn btn-primary`),f(S,`click`,u),h(S,d(`Insert at random index`));let E=m(`button`,p);h(p,E),o(E,`btn`),f(E,`click`,T),h(E,d(`Reset`));let D=m(`button`,p);h(p,D),o(D,`btn`),f(D,`click`,w),h(D,d(`Shuffle`));let O=m(`div`,a);h(a,O),o(O,`list-shell rounded-xl border border-base-200 bg-base-100 p-3`);let k=s(`rue:component:anchor`);return h(O,k),g(()=>{let t=x(B,{tag:`ul`,name:`list`,type:`transition`,duration:H,children:e.value.map(e=>C(y(()=>{let t=c(),r=m(`li`,t);h(t,r),g(()=>{n(r,`key`,String(e))}),o(r,`rounded-md border border-base-200 bg-base-100 px-3 py-2 shadow-sm`);let a=m(`span`,r);h(r,a),o(a,`text-base-content`);let s=l(a);h(a,s),g(()=>{i(s,e)});let u=m(`button`,r);return h(r,u),o(u,`btn btn-sm`),f(u,`click`,()=>_(e)),h(u,d(`x`)),t}),e))});v(()=>b(t,O,k))}),t}):``;v(()=>b(t,O,A))}),t})}),r,p),r})};export{G as default};