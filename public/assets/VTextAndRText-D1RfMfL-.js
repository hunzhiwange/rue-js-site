import{H as e,Qt as t,Ut as n,V as r,Vt as i,Wt as a,Y as o,fn as s,gn as c,hn as l,in as u,mn as d,sn as f,st as p,u as m,yn as h,yt as g}from"./rue-runtime-Cv6BZekS.js";import{t as _}from"./Code-BzFVdc3U.js";import{r as v}from"./SidebarPlaygroundExample-rFyhXfC_.js";var y=h(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">v-text / r-text</h1>`),b=h(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),x=h(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),S=(h,S,C)=>{let w=p(`code`),T=p(`Rue 文本指令`),E=p(`等待同步`);return o(()=>r(v,()=>({children:(r,o,p)=>{let h=()=>a(r=>{let i=d();i.appendChild(y().content.cloneNode(!0));let o=b().content.cloneNode(!0),p=o.firstChild,h=p.childNodes[0],v=p.childNodes[1];i.appendChild(o),h.setAttribute(`role`,`tab`);let S;u(()=>{let e=`tab ${w.value===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(S,t)||(S=t,h.setAttribute(`class`,t))}),f(m(r,h,`click`,()=>()=>{w.value=`preview`})),v.setAttribute(`role`,`tab`);let C;u(()=>{let e=`tab ${w.value===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(C,t)||(C=t,v.setAttribute(`class`,t))}),f(m(r,v,`click`,()=>()=>{w.value=`code`}));let D=x().content.cloneNode(!0),O=D.firstChild,k=O.childNodes[0],A=k.parentNode,j=O.childNodes[1],M=j.parentNode;i.appendChild(D),n(A,k,()=>{let t=w.value===`code`;return t?{__rue_compiled_branch_key:!0,create:()=>a(t=>{let n=l(`div`,t);n.setAttribute(`class`,`card bg-base-100 shadow overflow-auto`);let r=l(`div`,n);return s(n,r),r.setAttribute(`class`,`card-body p-0`),e(r,_,()=>({className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

const VTextAndRText: FC = () => {
  const title = ref('Rue 文本指令');
  const status = ref('等待同步');

  return (
    <div className="grid gap-4">
      <input className="input input-bordered" value={title.value} onInput={event => {
        title.value = (event.target as HTMLInputElement).value;
      }} />
      <button className="btn btn-sm" onClick={() => {
        status.value = '已同步：' + title.value;
      }}>
        同步状态
      </button>

      <h2 v-text="title.value" className="text-xl font-semibold"></h2>
      <p r-text={status.value} className="alert alert-info"></p>
    </div>
  );
};

export default VTextAndRText;`})),[n,n]})}:typeof t==`number`||typeof t==`bigint`?{__rue_compiled_branch_key:t,create:()=>g(e=>{let n=c(typeof t==`string`||typeof t==`number`||typeof t==`bigint`?t:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>g(e=>{let t=d();return[t.firstChild,t.lastChild]})}}),n(M,j,()=>{let e=w.value===`preview`;return e?{__rue_compiled_branch_key:!0,create:()=>a(e=>{let n=l(`div`,e);n.setAttribute(`class`,`card bg-base-100 shadow`);let r=l(`div`,n);s(n,r),r.setAttribute(`class`,`card-body grid gap-6`);let i=l(`section`,r);s(r,i),i.setAttribute(`class`,`space-y-3`);let a=l(`div`,i);s(i,a),a.setAttribute(`class`,`flex flex-wrap items-center gap-3`);let o=l(`input`,a);s(a,o),o.setAttribute(`class`,`input input-bordered`);let d;u(()=>{let e=T.value,t=e==null?``:String(e);Object.is(d,t)||(d=t,o.value=t)});let p=e=>{let t=e=>{T.value=e.target.value};typeof t==`function`&&t(e)};o.addEventListener(`input`,p),f(()=>o.removeEventListener(`input`,p));let h=l(`button`,a);s(a,h),h.setAttribute(`class`,`btn btn-sm`),f(m(e,h,`click`,()=>()=>{E.value=`已同步：`+T.value})),s(h,c(`同步状态`));let g=l(`div`,i);s(i,g),g.setAttribute(`class`,`rounded-box border border-base-300 p-4 grid gap-3`);let _=l(`h2`,g);s(g,_),_.setAttribute(`class`,`text-xl font-semibold`);let v=c(``);s(_,v),t(v,()=>T.value);let y=l(`p`,g);s(g,y),y.setAttribute(`class`,`alert alert-info`);let b=c(``);return s(y,b),t(b,()=>E.value),[n,n]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>g(t=>{let n=c(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>g(e=>{let t=d();return[t.firstChild,t.lastChild]})}});let N=c(``),P=c(``);return i.insertBefore(N,i.firstChild),i.appendChild(P),[i.firstChild,i.lastChild]});return r==null?h():i(r,p,h)}})))};export{S as default};