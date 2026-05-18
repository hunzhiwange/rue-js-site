import{C as e,F as t,I as n,K as r,L as i,M as a,N as o,P as s,Q as c,R as l,W as u,d,dt as f,ht as p,l as m,mt as h,st as g,t as _,v,vt as y,z as b}from"./vapor-runtime-BuwLbCGk.js";import{a as x,o as S}from"./vapor-helpers-vapor-Bly5xJie.js";import{a as C,i as w,n as T,o as E,r as D,s as O,t as k}from"./BaseTransition-LQJuH5W-.js";import{t as A}from"./Code-DQxnq0in.js";import{t as j}from"./SidebarPlaygroundExample-BwOo72z2.js";var M=new WeakSet,N=e=>Array.isArray(e)?e.map(e=>N(e)):e,P=e=>{let t=[],n=e=>{if(!(e==null||e===!1)){if(Array.isArray(e)){e.forEach(n);return}t.push(e)}};return n(e),t},F=e=>{if(typeof e!=`object`&&typeof e!=`function`||e==null)return``;let t=e.key??e.props?.key;return t==null?``:String(t)},I=e=>({...e,children:N(e.children)}),L=t=>{let n=h(),r=p(()=>({firstRender:!0,renderVersion:null})),i=e=>Array.from(e.children).filter(e=>e.nodeType===1&&!e.hasAttribute(`data-rue-leaving`));e(()=>{r.renderVersion=null});let a=I(t),c=a.name||`rue`,l=a.moveClass??`${c}-move`,{runEnter:u,runLeave:d}=k(a),f=new Map,m=new Map,g=n.current;g&&i(g).forEach(e=>{let t=e.getAttribute(`data-rue-key`);t&&(f.set(t,e),m.set(t,e.getBoundingClientRect()))});let _=P(a.children),y=_.map(F),b=Symbol(`transition-group-render`),x=r.firstRender;return r.renderVersion=b,queueMicrotask(()=>{if(r.renderVersion!==b)return;let e=n.current;if(!e)return;let t=i(e),c=new Map,p=new Set;t.forEach(e=>{let t=e.getAttribute(`data-rue-key`);t&&p.add(t)});let h=x&&f.size===0&&p.size===0&&!M.has(e);for(let e=0;e<_.length;e++){let n=t[e];if(!n)continue;let r=y[e];r?(n.setAttribute(`data-rue-key`,r),c.set(r,n)):n.removeAttribute(`data-rue-key`)}y.forEach(e=>{if(!e)return;let t=c.get(e);if(t&&!f.has(e)){if(h){a.appear&&u(t,`appear`);return}u(t,`enter`)}}),m.forEach((e,t)=>{let n=c.get(t);if(!n)return;let r=n.getBoundingClientRect(),i=e.left-r.left,o=e.top-r.top;if(!i&&!o)return;n.style.transform=`translate(${i}px, ${o}px)`,n.style.transition=`transform 0s`,D(n),n.style.transform=``,n.style.transition=``,T(n,l);let s=a.type??w(n),u=Math.max(E(n,`transition`,void 0,`enter`),E(n,`animation`,void 0,`enter`));O(n,s??null,u,()=>C(n,l))});let g=new Set(y.filter(Boolean));f.forEach((t,n)=>{g.has(n)||(t.setAttribute(`data-rue-leaving`,`true`),s(e,t)||o(e,t),d(t,()=>{t.remove()}))}),M.add(e)}),r.firstRender=!1,v(t.tag||`span`,t.tag?{ref:n}:{ref:n,style:`display: contents`},t.children)},R=[1,2,3,4,5],z=350,B=`
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

export default ListTransitionExample;`,H=()=>{let{items:e,nextId:s,activeTab:h,insert:v,remove:C,shuffle:w,reset:T}=x(`useSetup:0:0`,()=>p(()=>{let e=x(`ref:1:0`,()=>g([...R])),t=x(`ref:1:1`,()=>g(R.length+1));return{items:e,nextId:t,activeTab:x(`ref:1:2`,()=>g(`preview`)),insert:()=>{let n=e.value.slice(),r=Math.round(Math.random()*n.length);n.splice(r,0,t.value),e.value=n,t.value+=1},remove:t=>{e.value=e.value.filter(e=>e!==t)},shuffle:()=>{let t=e.value.slice(),n=t.length;for(;n!==0;){let e=Math.floor(Math.random()*n);--n;let r=t[n];t[n]=t[e],t[e]=r}e.value=t},reset:()=>{e.value=[...R],t.value=R.length+1}}}));return d(s=>{let p=n(),g=t(`rue:component:anchor`);return o(p,g),m(_(j,{children:d(()=>{let s=n(),p=i(`h1`,s);o(s,p),r(p,`text-5xl font-semibold mb-4 md:mb-4`),o(p,l(`带过渡动效的列表（移植自 Vue）`));let g=i(`div`,s);o(s,g),u(g,`role`,`tablist`),r(g,`tabs tabs-box`);let x=i(`button`,g);o(g,x),u(x,`role`,`tab`),y(()=>{r(x,String(`tab ${h.value===`preview`?`tab-active`:``}`))}),a(x,`click`,()=>{h.value=`preview`}),o(x,l(`效果`));let E=i(`button`,g);o(g,E),u(E,`role`,`tab`),y(()=>{r(E,String(`tab ${h.value===`code`?`tab-active`:``}`))}),a(E,`click`,()=>{h.value=`code`}),o(E,l(`代码`));let D=i(`style`,s);o(s,D),y(()=>{c(D,B)});let O=i(`div`,s);o(s,O),r(O,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let k=t(`rue:slot:anchor`);o(O,k),y(()=>{let e=h.value===`code`?d(()=>{let e=n(),a=i(`div`,e);o(e,a),r(a,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`);let s=t(`rue:component:anchor`);return o(a,s),y(()=>{let e=_(A,{className:`h-full`,lang:`tsx`,code:V});f(()=>m(e,a,s))}),e}):``;f(()=>m(e,O,k))}),o(O,l(` `));let j=t(`rue:slot:anchor`);return o(O,j),y(()=>{let s=h.value===`preview`?d(()=>{let s=n(),p=i(`div`,s);o(s,p),r(p,`card bg-base-100 shadow`);let h=i(`div`,p);o(p,h),r(h,`card-body grid gap-4`);let g=i(`div`,h);o(h,g),r(g,`flex gap-3`);let x=i(`button`,g);o(g,x),r(x,`btn btn-primary`),a(x,`click`,v),o(x,l(`Insert at random index`));let E=i(`button`,g);o(g,E),r(E,`btn`),a(E,`click`,T),o(E,l(`Reset`));let D=i(`button`,g);o(g,D),r(D,`btn`),a(D,`click`,w),o(D,l(`Shuffle`));let O=i(`div`,h);o(h,O),r(O,`list-shell rounded-xl border border-base-200 bg-base-100 p-3`);let k=t(`rue:component:anchor`);return o(O,k),y(()=>{let t=_(L,{key:e.value.join(`-`),tag:`ul`,name:`list`,duration:z,children:e.value.map(e=>S(d(()=>{let t=n(),s=i(`li`,t);o(t,s),y(()=>{u(s,`key`,String(e))}),r(s,`rounded-md border border-base-200 bg-base-100 px-3 py-2 shadow-sm`);let d=i(`span`,s);o(s,d),r(d,`text-base-content`);let f=b(d);o(d,f),y(()=>{c(f,e)});let p=i(`button`,s);return o(s,p),r(p,`btn btn-sm`),a(p,`click`,()=>C(e)),o(p,l(`x`)),t}),e))});f(()=>m(t,O,k))}),s}):``;f(()=>m(s,O,j))}),s})}),p,g),p})};export{H as default};