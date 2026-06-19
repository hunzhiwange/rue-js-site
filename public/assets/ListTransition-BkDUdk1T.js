import{$ as e,Jt as t,Q as n,Qt as r,Wt as i,X as a,Y as o,Yt as s,Z as c,b as l,et as u,ht as d,k as f,l as p,lt as m,nt as h,o as g,st as _,t as v,tt as y,zt as b}from"./vapor-runtime-CXIalONM.js";import{a as x,o as S}from"./vapor-helpers-vapor-CoXKrGmY.js";import{a as C,i as w,n as T,o as E,r as D,s as O,t as k}from"./BaseTransition-fN4CMjMP.js";import{t as A}from"./Code-BIscIyEp.js";import{r as j}from"./SidebarPlaygroundExample-CEz1fABX.js";var M=new WeakSet,N=Symbol.for(`rue.element.head-record`),P=e=>Array.isArray(e)?e.map(e=>P(e)):e,F=e=>{let t=[],n=e=>{if(!(e==null||e===!1)){if(Array.isArray(e)){e.forEach(n);return}t.push(e)}};return n(e),t},I=e=>{if(typeof e!=`object`&&typeof e!=`function`||e==null)return``;let t=e,n=t[N],r=t.key??t.props?.key??n?.key??n?.props?.key;return r==null?``:String(r)},L=e=>({...e,children:P(e.children)}),R=e=>{let n=t(),r=s(()=>({firstRender:!0,prevKeys:[],renderVersion:null})),i=e=>Array.from(e.children).filter(e=>e.nodeType===1&&!e.hasAttribute(`data-rue-leaving`)),o=e=>e.getAttribute(`key`)??e.getAttribute(`data-rue-key`)??``,u=(e,t)=>{let n=new Map;t.forEach(e=>{let t=o(e);if(!t)return;let r=n.get(t)??[];r.push(e),n.set(t,r)});let r=S.map((e,r)=>e?n.get(e)?.shift()??t[r]:t[r]),i=null;for(let t=r.length-1;t>=0;--t){let n=r[t];n&&(n.nextSibling!==i&&e.insertBefore(n,i),i=n)}return r.filter(e=>!!e)};f(()=>{r.prevKeys=[],r.renderVersion=null});let d=L(e),p=d.name||`rue`,m=d.moveClass??`${p}-move`,{runEnter:h,runLeave:g}=k(d),_=new Map,v=new Map,y=n.current,b=r.prevKeys.slice();y&&i(y).forEach((e,t)=>{let n=e.getAttribute(`data-rue-key`)??b[t]??``;n&&(e.hasAttribute(`data-rue-key`)||e.setAttribute(`data-rue-key`,n),_.set(n,e),v.set(n,e.getBoundingClientRect()))});let x=F(d.children),S=x.map(I),A=Symbol(`transition-group-render`),j=r.firstRender;return r.renderVersion=A,queueMicrotask(()=>{if(r.renderVersion!==A)return;let e=n.current;if(!e)return;let t=u(e,i(e)),o=new Map,s=new Set;t.forEach(e=>{let t=e.getAttribute(`data-rue-key`);t&&s.add(t)});let l=j&&!y&&b.length===0&&_.size===0&&s.size===0&&!M.has(e);for(let e=0;e<x.length;e++){let n=t[e];if(!n)continue;let r=S[e];r?(n.setAttribute(`data-rue-key`,r),o.set(r,n)):n.removeAttribute(`data-rue-key`)}S.forEach(e=>{if(!e)return;let t=o.get(e);if(t&&!_.has(e)){if(l){d.appear&&h(t,`appear`);return}h(t,`enter`)}}),v.forEach((e,t)=>{let n=o.get(t);if(!n)return;let r=n.getBoundingClientRect(),i=e.left-r.left,a=e.top-r.top;if(!i&&!a)return;n.style.transform=`translate(${i}px, ${a}px)`,n.style.transition=`transform 0s`,D(n),T(n,m),n.style.transform=``,n.style.transition=``;let s=d.type??w(n),c=Math.max(E(n,`transition`,void 0,`enter`),E(n,`animation`,void 0,`enter`));O(n,s??null,c,()=>C(n,m))});let f=new Set(S.filter(Boolean));_.forEach((t,n)=>{f.has(n)||(t.setAttribute(`data-rue-leaving`,`true`),c(e,t)||a(e,t),g(t,()=>{t.remove()}))}),M.add(e),r.prevKeys=S.slice()}),r.firstRender=!1,l(e.tag||`span`,e.tag?{ref:n}:{ref:n,style:`display: contents`},e.children)},z=[1,2,3,4,5],B=350,V=`
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
    opacity ${B}ms cubic-bezier(0.55, 0, 0.1, 1),
    transform ${B}ms cubic-bezier(0.55, 0, 0.1, 1);
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
  transition: transform ${B}ms cubic-bezier(0.55, 0, 0.1, 1);
}
`,H=`import { type FC, TransitionGroup, ref } from '@rue-js/rue';

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

export default ListTransitionExample;`,U=()=>{let{items:t,nextId:c,activeTab:l,insert:f,remove:C,shuffle:w,reset:T}=x(`useSetup:0:0`,()=>s(()=>{let e=x(`ref:1:0`,()=>b([...z])),t=x(`ref:1:1`,()=>b(z.length+1));return{items:e,nextId:t,activeTab:x(`ref:1:2`,()=>b(`preview`)),insert:()=>{let n=e.value.slice(),r=Math.round(Math.random()*n.length);n.splice(r,0,t.value),e.value=n,t.value+=1},remove:t=>{e.value=e.value.filter(e=>e!==t)},shuffle:()=>{let t=e.value.slice(),n=t.length;for(;n!==0;){let e=Math.floor(Math.random()*n);--n;let r=t[n];t[n]=t[e],t[e]=r}e.value=t},reset:()=>{e.value=[...z],t.value=z.length+1}}}));return p(s=>{let c=e(),b=n(`rue:component:anchor`);return a(c,b),g(v(j,{children:p(()=>{let s=e(),c=u(`h1`,s);a(s,c),m(c,`text-5xl font-semibold mb-4 md:mb-4`),a(c,y(`带过渡动效的列表（移植自 Vue）`));let b=u(`div`,s);a(s,b),_(b,`role`,`tablist`),m(b,`tabs tabs-box`);let x=u(`button`,b);a(b,x),_(x,`role`,`tab`),r(()=>{m(x,`tab ${l.value===`preview`?`tab-active`:``}`)}),o(x,`click`,()=>{l.value=`preview`}),a(x,y(`效果`));let E=u(`button`,b);a(b,E),_(E,`role`,`tab`),r(()=>{m(E,`tab ${l.value===`code`?`tab-active`:``}`)}),o(E,`click`,()=>{l.value=`code`}),a(E,y(`代码`));let D=u(`style`,s);a(s,D),r(()=>{d(D,V)});let O=u(`div`,s);a(s,O),m(O,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let k=n(`rue:slot:anchor`);a(O,k),r(()=>{let t=l.value===`code`?p(()=>{let t=e(),o=u(`div`,t);a(t,o),m(o,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`);let s=n(`rue:component:anchor`);return a(o,s),r(()=>{let e=v(A,{className:`h-full`,lang:`tsx`,code:H});i(()=>g(e,o,s))}),t}):``;i(()=>g(t,O,k))}),a(O,y(` `));let j=n(`rue:slot:anchor`);return a(O,j),r(()=>{let s=l.value===`preview`?p(()=>{let s=e(),c=u(`div`,s);a(s,c),m(c,`card bg-base-100 shadow`);let l=u(`div`,c);a(c,l),m(l,`card-body grid gap-4`);let b=u(`div`,l);a(l,b),m(b,`flex gap-3`);let x=u(`button`,b);a(b,x),m(x,`btn btn-primary`),o(x,`click`,f),a(x,y(`Insert at random index`));let E=u(`button`,b);a(b,E),m(E,`btn`),o(E,`click`,T),a(E,y(`Reset`));let D=u(`button`,b);a(b,D),m(D,`btn`),o(D,`click`,w),a(D,y(`Shuffle`));let O=u(`div`,l);a(l,O),m(O,`list-shell rounded-xl border border-base-200 bg-base-100 p-3`);let k=n(`rue:component:anchor`);return a(O,k),r(()=>{let n=v(R,{tag:`ul`,name:`list`,type:`transition`,duration:B,children:t.value.map(t=>S(p(()=>{let n=e(),i=u(`li`,n);a(n,i),r(()=>{_(i,`key`,String(t))}),m(i,`rounded-md border border-base-200 bg-base-100 px-3 py-2 shadow-sm`);let s=u(`span`,i);a(i,s),m(s,`text-base-content`);let c=h(s);a(s,c),r(()=>{d(c,t)});let l=u(`button`,i);return a(i,l),m(l,`btn btn-sm`),o(l,`click`,()=>C(t)),a(l,y(`x`)),n}),t))});i(()=>g(n,O,k))}),s}):``;i(()=>g(s,O,j))}),s})}),c,b),c})};export{U as default};