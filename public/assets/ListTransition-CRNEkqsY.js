import{$ as e,A as t,Et as n,G as r,H as i,J as a,K as o,T as s,Tt as c,U as l,V as u,W as d,_t as f,d as p,kt as m,l as h,q as g,st as _,t as v,tt as y,xt as b}from"./vapor-runtime-EUvELKQT.js";import{a as x,o as S}from"./vapor-helpers-vapor-C_FztvJU.js";import{a as C,i as w,n as T,o as E,r as D,s as O,t as k}from"./BaseTransition-C9MIYBLt.js";import{t as A}from"./Code-BdVklNCb.js";import{t as j}from"./SidebarPlaygroundExample-1AA0CIwm.js";var M=new WeakSet,N=e=>Array.isArray(e)?e.map(e=>N(e)):e,P=e=>{let t=[],n=e=>{if(!(e==null||e===!1)){if(Array.isArray(e)){e.forEach(n);return}t.push(e)}};return n(e),t},F=e=>{if(typeof e!=`object`&&typeof e!=`function`||e==null)return``;let t=e.key??e.props?.key;return t==null?``:String(t)},I=e=>({...e,children:N(e.children)}),L=e=>{let r=c(),a=n(()=>({firstRender:!0,renderVersion:null})),o=e=>Array.from(e.children).filter(e=>e.nodeType===1&&!e.hasAttribute(`data-rue-leaving`));t(()=>{a.renderVersion=null});let u=I(e),d=u.name||`rue`,f=u.moveClass??`${d}-move`,{runEnter:p,runLeave:m}=k(u),h=new Map,g=new Map,_=r.current;_&&o(_).forEach(e=>{let t=e.getAttribute(`data-rue-key`);t&&(h.set(t,e),g.set(t,e.getBoundingClientRect()))});let v=P(u.children),y=v.map(F),b=Symbol(`transition-group-render`),x=a.firstRender;return a.renderVersion=b,queueMicrotask(()=>{if(a.renderVersion!==b)return;let e=r.current;if(!e)return;let t=o(e),n=new Map,s=new Set;t.forEach(e=>{let t=e.getAttribute(`data-rue-key`);t&&s.add(t)});let c=x&&h.size===0&&s.size===0&&!M.has(e);for(let e=0;e<v.length;e++){let r=t[e];if(!r)continue;let i=y[e];i?(r.setAttribute(`data-rue-key`,i),n.set(i,r)):r.removeAttribute(`data-rue-key`)}y.forEach(e=>{if(!e)return;let t=n.get(e);if(t&&!h.has(e)){if(c){u.appear&&p(t,`appear`);return}p(t,`enter`)}}),g.forEach((e,t)=>{let r=n.get(t);if(!r)return;let i=r.getBoundingClientRect(),a=e.left-i.left,o=e.top-i.top;if(!a&&!o)return;r.style.transform=`translate(${a}px, ${o}px)`,r.style.transition=`transform 0s`,D(r),r.style.transform=``,r.style.transition=``,T(r,f);let s=u.type??w(r),c=Math.max(E(r,`transition`,void 0,`enter`),E(r,`animation`,void 0,`enter`));O(r,s??null,c,()=>C(r,f))});let d=new Set(y.filter(Boolean));h.forEach((t,n)=>{d.has(n)||(t.setAttribute(`data-rue-leaving`,`true`),l(e,t)||i(e,t),m(t,()=>{t.remove()}))}),M.add(e)}),a.firstRender=!1,s(e.tag||`span`,e.tag?{ref:r}:{ref:r,style:`display: contents`},e.children)},R=[1,2,3,4,5],z=350,B=`
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

export default ListTransitionExample;`,H=()=>{let{items:t,nextId:s,activeTab:c,insert:l,remove:C,shuffle:w,reset:T}=x(`useSetup:0:0`,()=>n(()=>{let e=x(`ref:1:0`,()=>f([...R])),t=x(`ref:1:1`,()=>f(R.length+1));return{items:e,nextId:t,activeTab:x(`ref:1:2`,()=>f(`preview`)),insert:()=>{let n=e.value.slice(),r=Math.round(Math.random()*n.length);n.splice(r,0,t.value),e.value=n,t.value+=1},remove:t=>{e.value=e.value.filter(e=>e!==t)},shuffle:()=>{let t=e.value.slice(),n=t.length;for(;n!==0;){let e=Math.floor(Math.random()*n);--n;let r=t[n];t[n]=t[e],t[e]=r}e.value=t},reset:()=>{e.value=[...R],t.value=R.length+1}}}));return p(n=>{let s=r(),f=d(`rue:component:anchor`);return i(s,f),h(v(j,{children:p(()=>{let n=r(),s=o(`h1`,n);i(n,s),y(s,`text-5xl font-semibold mb-4 md:mb-4`),i(s,g(`带过渡动效的列表（移植自 Vue）`));let f=o(`div`,n);i(n,f),e(f,`role`,`tablist`),y(f,`tabs tabs-box`);let x=o(`button`,f);i(f,x),e(x,`role`,`tab`),m(()=>{y(x,String(`tab ${c.value===`preview`?`tab-active`:``}`))}),u(x,`click`,()=>{c.value=`preview`}),i(x,g(`效果`));let E=o(`button`,f);i(f,E),e(E,`role`,`tab`),m(()=>{y(E,String(`tab ${c.value===`code`?`tab-active`:``}`))}),u(E,`click`,()=>{c.value=`code`}),i(E,g(`代码`));let D=o(`style`,n);i(n,D),m(()=>{_(D,B)});let O=o(`div`,n);i(n,O),y(O,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let k=d(`rue:slot:anchor`);i(O,k),m(()=>{let e=c.value===`code`?p(()=>{let e=r(),t=o(`div`,e);i(e,t),y(t,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`);let n=d(`rue:component:anchor`);return i(t,n),m(()=>{let e=v(A,{className:`h-full`,lang:`tsx`,code:V});b(()=>h(e,t,n))}),e}):``;b(()=>h(e,O,k))}),i(O,g(` `));let j=d(`rue:slot:anchor`);return i(O,j),m(()=>{let n=c.value===`preview`?p(()=>{let n=r(),s=o(`div`,n);i(n,s),y(s,`card bg-base-100 shadow`);let c=o(`div`,s);i(s,c),y(c,`card-body grid gap-4`);let f=o(`div`,c);i(c,f),y(f,`flex gap-3`);let x=o(`button`,f);i(f,x),y(x,`btn btn-primary`),u(x,`click`,l),i(x,g(`Insert at random index`));let E=o(`button`,f);i(f,E),y(E,`btn`),u(E,`click`,T),i(E,g(`Reset`));let D=o(`button`,f);i(f,D),y(D,`btn`),u(D,`click`,w),i(D,g(`Shuffle`));let O=o(`div`,c);i(c,O),y(O,`list-shell rounded-xl border border-base-200 bg-base-100 p-3`);let k=d(`rue:component:anchor`);return i(O,k),m(()=>{let n=v(L,{key:t.value.join(`-`),tag:`ul`,name:`list`,duration:z,children:t.value.map(t=>S(p(()=>{let n=r(),s=o(`li`,n);i(n,s),m(()=>{e(s,`key`,String(t))}),y(s,`rounded-md border border-base-200 bg-base-100 px-3 py-2 shadow-sm`);let c=o(`span`,s);i(s,c),y(c,`text-base-content`);let l=a(c);i(c,l),m(()=>{_(l,t)});let d=o(`button`,s);return i(s,d),y(d,`btn btn-sm`),u(d,`click`,()=>C(t)),i(d,g(`x`)),n}),t))});b(()=>h(n,O,k))}),n}):``;b(()=>h(n,O,j))}),n})}),s,f),s})};export{H as default};