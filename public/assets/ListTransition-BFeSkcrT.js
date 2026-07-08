import{A as e,Q as t,Vt as n,Xt as r,Z as i,an as a,at as o,bt as s,dt as c,et as l,it as u,l as d,nt as f,o as p,on as m,pt as h,rt as g,t as _,tn as v,tt as y,x as b,z as x}from"./vapor-runtime-x7F5M-49.js";import{a as S,o as C}from"./vapor-helpers-vapor-D1LP4JjK.js";import{a as w,i as T,n as E,o as D,r as O,s as k,t as A}from"./BaseTransition-itwGn6Mf.js";import{t as j}from"./Code-BoXKy3gJ.js";import{r as M}from"./SidebarPlaygroundExample-BmbQ-Y7_.js";var N=new WeakSet,P=Symbol.for(`rue.element.head-record`),F=e=>Array.isArray(e)?e.map(e=>F(e)):e,I=e=>{let t=[],n=e=>{if(!(e==null||e===!1)){if(Array.isArray(e)){e.forEach(n);return}t.push(e)}};return n(e),t},L=e=>{if(typeof e!=`object`&&typeof e!=`function`||e==null)return``;let t=e,n=t[P],r=t.key??t.props?.key??n?.key??n?.props?.key;return r==null?``:String(r)},R=e=>({...e,children:F(e.children)}),z=n=>{let r=a(),i=m(()=>({firstRender:!0,prevKeys:[],renderVersion:null})),o=e=>Array.from(e.children).filter(e=>e.nodeType===1&&!e.hasAttribute(`data-rue-leaving`)),s=e=>e.getAttribute(`key`)??e.getAttribute(`data-rue-key`)??``,c=(e,t)=>{let n=new Map;t.forEach(e=>{let t=s(e);if(!t)return;let r=n.get(t)??[];r.push(e),n.set(t,r)});let r=S.map((e,r)=>e?n.get(e)?.shift()??t[r]:t[r]),i=null;for(let t=r.length-1;t>=0;--t){let n=r[t];n&&(n.nextSibling!==i&&e.insertBefore(n,i),i=n)}return r.filter(e=>!!e)};e(()=>{i.prevKeys=[],i.renderVersion=null});let u=R(n),d=u.name||`rue`,f=u.moveClass??`${d}-move`,{runEnter:p,runLeave:h}=A(u),g=new Map,_=new Map,v=r.current,y=i.prevKeys.slice();v&&o(v).forEach((e,t)=>{let n=e.getAttribute(`data-rue-key`)??y[t]??``;n&&(e.hasAttribute(`data-rue-key`)||e.setAttribute(`data-rue-key`,n),g.set(n,e),_.set(n,e.getBoundingClientRect()))});let x=I(u.children),S=x.map(L),C=Symbol(`transition-group-render`),j=i.firstRender;return i.renderVersion=C,queueMicrotask(()=>{if(i.renderVersion!==C)return;let e=r.current;if(!e)return;let n=c(e,o(e)),a=new Map,s=new Set;n.forEach(e=>{let t=e.getAttribute(`data-rue-key`);t&&s.add(t)});let d=j&&!v&&y.length===0&&g.size===0&&s.size===0&&!N.has(e);for(let e=0;e<x.length;e++){let t=n[e];if(!t)continue;let r=S[e];r?(t.setAttribute(`data-rue-key`,r),a.set(r,t)):t.removeAttribute(`data-rue-key`)}S.forEach(e=>{if(!e)return;let t=a.get(e);if(t&&!g.has(e)){if(d){u.appear&&p(t,`appear`);return}p(t,`enter`)}}),_.forEach((e,t)=>{let n=a.get(t);if(!n)return;let r=n.getBoundingClientRect(),i=e.left-r.left,o=e.top-r.top;if(!i&&!o)return;n.style.transform=`translate(${i}px, ${o}px)`,n.style.transition=`transform 0s`,O(n),E(n,f),n.style.transform=``,n.style.transition=``;let s=u.type??T(n),c=Math.max(D(n,`transition`,void 0,`enter`),D(n,`animation`,void 0,`enter`));k(n,s??null,c,()=>w(n,f))});let m=new Set(S.filter(Boolean));g.forEach((n,r)=>{m.has(r)||(n.setAttribute(`data-rue-leaving`,`true`),l(e,n)||t(e,n),h(n,()=>{n.remove()}))}),N.add(e),i.prevKeys=S.slice()}),i.firstRender=!1,b(n.tag||`span`,n.tag?{ref:r}:{ref:r,style:`display: contents`},n.children)};x(z,`TransitionGroup`);var B=[1,2,3,4,5],V=350,H=`
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

export default ListTransitionExample;`,W=()=>{let{items:e,nextId:a,activeTab:l,insert:b,remove:x,shuffle:w,reset:T}=S(`useSetup:0:0`,()=>m(()=>{let e=S(`ref:1:0`,()=>r([...B])),t=S(`ref:1:1`,()=>r(B.length+1));return{items:e,nextId:t,activeTab:S(`ref:1:2`,()=>r(`preview`)),insert:()=>{let n=e.value.slice(),r=Math.round(Math.random()*n.length);n.splice(r,0,t.value),e.value=n,t.value+=1},remove:t=>{e.value=e.value.filter(e=>e!==t)},shuffle:()=>{let t=e.value.slice(),n=t.length;for(;n!==0;){let e=Math.floor(Math.random()*n);--n;let r=t[n];t[n]=t[e],t[e]=r}e.value=t},reset:()=>{e.value=[...B],t.value=B.length+1}}}));return d(r=>{let a=f(),m=y(`rue:component:anchor`);return t(a,m),p(_(M,{children:d(()=>{let r=f(),a=g(`h1`,r);t(r,a),h(a,`text-5xl font-semibold mb-4 md:mb-4`),t(a,u(`带过渡动效的列表（移植自 Vue）`));let m=g(`div`,r);t(r,m),c(m,`role`,`tablist`),h(m,`tabs tabs-box`);let S=g(`button`,m);t(m,S),c(S,`role`,`tab`),n(()=>{h(S,`tab ${l.value===`preview`?`tab-active`:``}`)}),i(S,`click`,()=>{l.value=`preview`}),t(S,u(`效果`));let E=g(`button`,m);t(m,E),c(E,`role`,`tab`),n(()=>{h(E,`tab ${l.value===`code`?`tab-active`:``}`)}),i(E,`click`,()=>{l.value=`code`}),t(E,u(`代码`));let D=g(`style`,r);t(r,D),n(()=>{s(D,H)});let O=g(`div`,r);t(r,O),h(O,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let k=y(`rue:slot:anchor`);t(O,k),n(()=>{let e=l.value===`code`?d(()=>{let e=f(),r=g(`div`,e);t(e,r),h(r,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`);let i=y(`rue:component:anchor`);return t(r,i),n(()=>{let e=_(j,{className:`h-full`,lang:`tsx`,code:U});v(()=>p(e,r,i))}),e}):``;v(()=>p(e,O,k))}),t(O,u(` `));let A=y(`rue:slot:anchor`);return t(O,A),n(()=>{let r=l.value===`preview`?d(()=>{let r=f(),a=g(`div`,r);t(r,a),h(a,`card bg-base-100 shadow`);let l=g(`div`,a);t(a,l),h(l,`card-body grid gap-4`);let m=g(`div`,l);t(l,m),h(m,`flex gap-3`);let S=g(`button`,m);t(m,S),h(S,`btn btn-primary`),i(S,`click`,b),t(S,u(`Insert at random index`));let E=g(`button`,m);t(m,E),h(E,`btn`),i(E,`click`,T),t(E,u(`Reset`));let D=g(`button`,m);t(m,D),h(D,`btn`),i(D,`click`,w),t(D,u(`Shuffle`));let O=g(`div`,l);t(l,O),h(O,`list-shell rounded-xl border border-base-200 bg-base-100 p-3`);let k=y(`rue:component:anchor`);return t(O,k),n(()=>{let r=_(z,{tag:`ul`,name:`list`,type:`transition`,duration:V,children:e.value.map(e=>C(d(()=>{let r=f(),a=g(`li`,r);t(r,a),n(()=>{c(a,`key`,String(e))}),h(a,`rounded-md border border-base-200 bg-base-100 px-3 py-2 shadow-sm`);let l=g(`span`,a);t(a,l),h(l,`text-base-content`);let d=o(l);t(l,d),n(()=>{s(d,e)});let p=g(`button`,a);return t(a,p),h(p,`btn btn-sm`),i(p,`click`,()=>x(e)),t(p,u(`x`)),r}),e))});v(()=>p(r,O,k))}),r}):``;v(()=>p(r,O,A))}),r})}),a,m),a})};export{W as default};