import{F as e,G as t,I as n,L as r,M as i,N as a,P as o,R as s,S as c,U as l,Z as u,_ as d,_t as f,bt as p,c as m,gt as h,j as g,lt as _,pt as v,t as y,u as b}from"./vapor-runtime-D3a-68js.js";import{a as x,o as S}from"./vapor-helpers-vapor-DGjYaAZX.js";import{a as C,i as w,n as T,o as E,r as D,s as O,t as k}from"./BaseTransition-B6HVmP4a.js";import{t as A}from"./Code-2C2psoH3.js";import{t as j}from"./SidebarPlaygroundExample-DKa0aI1C.js";var M=e=>Array.isArray(e)?e.map(e=>M(e)):e,N=e=>{let t=[],n=e=>{if(!(e==null||e===!1)){if(Array.isArray(e)){e.forEach(n);return}t.push(e)}};return n(e),t},P=e=>{if(typeof e!=`object`&&typeof e!=`function`||e==null)return``;let t=e.key??e.props?.key;return t==null?``:String(t)},F=e=>({...e,children:M(e.children)}),I=e=>{let t=h(),n=f(()=>({firstRender:!0,renderVersion:null})),r=e=>Array.from(e.children).filter(e=>e.nodeType===1&&!e.hasAttribute(`data-rue-leaving`));c(()=>{n.renderVersion=null});let o=F(e),s=o.name||`rue`,l=o.moveClass??`${s}-move`,{runEnter:u,runLeave:p}=k(o),m=new Map,g=new Map,_=t.current;_&&r(_).forEach(e=>{let t=e.getAttribute(`data-rue-key`);t&&(m.set(t,e),g.set(t,e.getBoundingClientRect()))});let v=N(o.children),y=v.map(P),b=Symbol(`transition-group-render`),x=n.firstRender;return n.renderVersion=b,queueMicrotask(()=>{if(n.renderVersion!==b)return;let e=t.current;if(!e)return;let s=r(e),c=new Map;for(let e=0;e<v.length;e++){let t=s[e];if(!t)continue;let n=y[e];n?(t.setAttribute(`data-rue-key`,n),c.set(n,t)):t.removeAttribute(`data-rue-key`)}y.forEach(e=>{if(!e)return;let t=c.get(e);if(t&&!m.has(e)){if(x){o.appear&&u(t,`appear`);return}u(t,`enter`)}}),g.forEach((e,t)=>{let n=c.get(t);if(!n)return;let r=n.getBoundingClientRect(),i=e.left-r.left,a=e.top-r.top;if(!i&&!a)return;n.style.transform=`translate(${i}px, ${a}px)`,n.style.transition=`transform 0s`,D(n),n.style.transform=``,n.style.transition=``,T(n,l);let s=o.type??w(n),u=Math.max(E(n,`transition`,void 0,`enter`),E(n,`animation`,void 0,`enter`));O(n,s??null,u,()=>C(n,l))});let d=new Set(y.filter(Boolean));m.forEach((t,n)=>{d.has(n)||(t.setAttribute(`data-rue-leaving`,`true`),a(e,t)||i(e,t),p(t,()=>{t.remove()}))})}),n.firstRender=!1,d(e.tag||`span`,e.tag?{ref:t}:{ref:t,style:`display: contents`},e.children)},L=[1,2,3,4,5],R=350,z=`
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
    opacity ${R}ms cubic-bezier(0.55, 0, 0.1, 1),
    transform ${R}ms cubic-bezier(0.55, 0, 0.1, 1);
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
  transition: transform ${R}ms cubic-bezier(0.55, 0, 0.1, 1);
}
`,B=`import { type FC, TransitionGroup, ref } from '@rue-js/rue';

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

export default ListTransitionExample;`,V=()=>{let{items:a,nextId:c,activeTab:d,insert:h,remove:C,shuffle:w,reset:T}=x(`useSetup:0:0`,()=>f(()=>{let e=x(`ref:1:0`,()=>_([...L])),t=x(`ref:1:1`,()=>_(L.length+1));return{items:e,nextId:t,activeTab:x(`ref:1:2`,()=>_(`preview`)),insert:()=>{let n=e.value.slice(),r=Math.round(Math.random()*n.length);n.splice(r,0,t.value),e.value=n,t.value+=1},remove:t=>{e.value=e.value.filter(e=>e!==t)},shuffle:()=>{let t=e.value.slice(),n=t.length;for(;n!==0;){let e=Math.floor(Math.random()*n);--n;let r=t[n];t[n]=t[e],t[e]=r}e.value=t},reset:()=>{e.value=[...L],t.value=L.length+1}}}));return b(()=>{let c=e(),f=o(`rue:component:anchor`);return i(c,f),m(y(j,{children:b(()=>{let c=e(),f=n(`h1`);i(c,f),t(f,`text-5xl font-semibold mb-4 md:mb-4`),i(f,r(`带过渡动效的列表（移植自 Vue）`));let _=n(`div`);i(c,_),l(_,`role`,`tablist`),t(_,`tabs tabs-box`);let x=n(`button`);i(_,x),l(x,`role`,`tab`),p(()=>{t(x,String(`tab ${d.value===`preview`?`tab-active`:``}`))}),g(x,`click`,()=>{d.value=`preview`}),i(x,r(`效果`));let E=n(`button`);i(_,E),l(E,`role`,`tab`),p(()=>{t(E,String(`tab ${d.value===`code`?`tab-active`:``}`))}),g(E,`click`,()=>{d.value=`code`}),i(E,r(`代码`));let D=n(`style`);i(c,D),p(()=>{u(D,z)});let O=n(`div`);i(c,O),t(O,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let k=o(`rue:slot:anchor`);i(O,k),p(()=>{let r=d.value===`code`?b(()=>{let r=e(),a=n(`div`);i(r,a),t(a,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`);let s=o(`rue:component:anchor`);return i(a,s),p(()=>{let e=y(A,{className:`h-full`,lang:`tsx`,code:B});v(()=>m(e,a,s))}),r}):``;v(()=>m(r,O,k))}),i(O,r(` `));let j=o(`rue:slot:anchor`);return i(O,j),p(()=>{let c=d.value===`preview`?b(()=>{let c=e(),d=n(`div`);i(c,d),t(d,`card bg-base-100 shadow`);let f=n(`div`);i(d,f),t(f,`card-body grid gap-4`);let _=n(`div`);i(f,_),t(_,`flex gap-3`);let x=n(`button`);i(_,x),t(x,`btn btn-primary`),g(x,`click`,h),i(x,r(`Insert at random index`));let E=n(`button`);i(_,E),t(E,`btn`),g(E,`click`,T),i(E,r(`Reset`));let D=n(`button`);i(_,D),t(D,`btn`),g(D,`click`,w),i(D,r(`Shuffle`));let O=n(`div`);i(f,O),t(O,`list-shell rounded-xl border border-base-200 bg-base-100 p-3`);let k=o(`rue:component:anchor`);return i(O,k),p(()=>{let o=y(I,{tag:`ul`,name:`list`,duration:R,children:a.value.map(a=>S(b(()=>{let o=e(),c=n(`li`);i(o,c),p(()=>{l(c,`key`,String(a))}),t(c,`rounded-md border border-base-200 bg-base-100 px-3 py-2 shadow-sm`);let d=n(`span`);i(c,d),t(d,`text-base-content`);let f=s(d);i(d,f),p(()=>{u(f,a)});let m=n(`button`);return i(c,m),t(m,`btn btn-sm`),g(m,`click`,()=>C(a)),i(m,r(`x`)),o}),a))});v(()=>m(o,O,k))}),c}):``;v(()=>m(c,O,j))}),c})}),c,f),c})};export{V as default};