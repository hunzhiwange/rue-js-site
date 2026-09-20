import{Bt as e,Dt as t,G as n,H as r,Ut as i,Vt as a,Wt as o,Y as s,_n as c,fn as l,gn as u,hn as d,in as f,mn as p,pn as m,sn as h,st as g,u as _,vn as v,yn as y,yt as b,z as x,zt as S}from"./rue-runtime-Cv6BZekS.js";import{t as C}from"./Code-BzFVdc3U.js";import{r as w}from"./SidebarPlaygroundExample-rFyhXfC_.js";var T=y(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">v-once / r-once</h1>`),E=y(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),D=y(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),O=(y,O,k)=>{let A=g(`code`),j=g(`首次渲染`),M=g(0);return s(()=>(()=>{let s=o(s=>{let g=p(),_=D().content.cloneNode(!0),y=_.firstChild,x=y.childNodes[0],w=x.parentNode,T=y.childNodes[1],E=T.parentNode;g.appendChild(_),i(w,x,()=>{let e=A.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>o(e=>{let t=d(`div`,e);t.setAttribute(`class`,`card bg-base-100 shadow overflow-auto`);let n=d(`div`,t);return l(t,n),n.setAttribute(`class`,`card-body p-0`),r(n,C,()=>({className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

const VOnceAndROnce: FC = () => {
  const onceMessage = ref('首次渲染');
  const onceCount = ref(0);

  return (
    <div className="grid gap-4">
      <button
        className="btn btn-sm"
        onClick={() => {
          onceCount.value += 1;
          onceMessage.value = \`已更新 \${onceCount.value} 次\`;
        }}
      >
        更新数据
      </button>

      <div className="grid md:grid-cols-2 gap-3">
        <div className="space-y-2">
          <div className="text-sm opacity-70">当前值：{onceMessage.value}</div>
          <span v-once className="badge badge-primary badge-lg">
            {onceMessage.value}
          </span>
        </div>
        <div className="space-y-2">
          <div className="text-sm opacity-70">当前计数：{onceCount.value}</div>
          <span r-once className="badge badge-secondary badge-lg">
            count: {onceCount.value}
          </span>
        </div>
      </div>
    </div>
  );
};

export default VOnceAndROnce;`})),[t,t]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>b(t=>{let n=u(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>b(e=>{let t=p();return[t.firstChild,t.lastChild]})}}),e({parent:E,before:T},()=>A.value===`preview`?(r,i,s)=>a(r,s,()=>o(()=>{let r=p(),i=d(`div`,r);l(r,i),t(i,`card bg-base-100 shadow`);let a=d(`div`,i);l(i,a),t(a,`card-body grid gap-6`);let o=d(`section`,a);l(a,o),t(o,`space-y-3`);let s=d(`div`,o);l(o,s),t(s,`flex flex-wrap items-center justify-between gap-3`);let g=d(`h2`,s);l(s,g),t(g,`text-xl font-semibold`),l(g,u(`v-once / r-once`));let _=d(`button`,s);l(s,_),t(_,`btn btn-sm`);let y=e=>{let t=()=>{M.value+=1,j.value=`已更新 ${M.value} 次`};typeof t==`function`&&t(e)};_.addEventListener(`click`,y),h(()=>_.removeEventListener(`click`,y)),l(_,u(`更新数据`));let x=d(`p`,o);l(o,x),t(x,`text-sm opacity-70`),l(x,u(`once 内容仅在当前组件挂载期间保持首次渲染值；离开路由后再次返回会重新取值。`));let C=d(`div`,o);l(o,C),t(C,`rounded-box border border-base-300 p-4 grid md:grid-cols-2 gap-3`);let w=d(`div`,C);l(C,w),t(w,`space-y-2`);let T=d(`div`,w);l(w,T),t(T,`text-sm opacity-70`),l(T,u(`当前值：`));let E=c(T);l(T,E),f(()=>{v(E,j.value)});let D=m(`rue:slot:anchor`);l(w,D);let O=n(`memo:3574:3698`,()=>b(()=>{let e=p(),n=d(`span`,e);l(e,n),t(n,`badge badge-primary badge-lg`);let r=c(n);l(n,r),v(r,j.value);let i=u(``),a=u(``);return e.insertBefore(i,e.firstChild),e.appendChild(a),[e.firstChild,e.lastChild]}),[]);e({parent:w,before:D},()=>S(O),()=>({}));let k=d(`div`,C);l(C,k),t(k,`space-y-2`);let A=d(`div`,k);l(k,A),t(A,`text-sm opacity-70`),l(A,u(`当前计数：`));let N=c(A);l(A,N),f(()=>{v(N,M.value)});let P=m(`rue:slot:anchor`);l(k,P);let F=n(`memo:3885:4016`,()=>b(()=>{let e=p(),n=d(`span`,e);l(e,n),t(n,`badge badge-secondary badge-lg`),l(n,u(`count: `));let r=c(n);l(n,r),v(r,M.value);let i=u(``),a=u(``);return e.insertBefore(i,e.firstChild),e.appendChild(a),[e.firstChild,e.lastChild]}),[]);e({parent:k,before:P},()=>S(F),()=>({}));let I=u(``),L=u(``);return r.insertBefore(I,r.firstChild),r.appendChild(L),[r.firstChild,r.lastChild]})):(e,t,n)=>{let r=()=>b(e=>{let t=u(``);return[t,t]});return e==null?r():a(e,n,r)},()=>({}));let O=u(``),k=u(``);return g.insertBefore(O,g.firstChild),g.appendChild(k),[g.firstChild,g.lastChild]});return x(w,()=>({children:[b(e=>{let t=T().content.cloneNode(!0).firstChild;return[t,t]}),o(e=>{let t=E().content.cloneNode(!0).firstChild,n=t.childNodes[0],r=t.childNodes[1];n.setAttribute(`role`,`tab`);let i;f(()=>{let e=`tab ${A.value===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(i,t)||(i=t,n.setAttribute(`class`,t))}),h(_(e,n,`click`,()=>()=>{A.value=`preview`})),r.setAttribute(`role`,`tab`);let a;return f(()=>{let e=`tab ${A.value===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(a,t)||(a=t,r.setAttribute(`class`,t))}),h(_(e,r,`click`,()=>()=>{A.value=`code`})),[t,t]}),s]}))})())};export{O as default};