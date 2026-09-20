import{H as e,Ht as t,Ut as n,V as r,Vt as i,Wt as a,Y as o,fn as s,gn as c,hn as l,in as u,mn as d,sn as f,st as p,u as m,yn as h,yt as g}from"./rue-runtime-Cv6BZekS.js";import{t as _}from"./Code-BzFVdc3U.js";import{r as v}from"./SidebarPlaygroundExample-rFyhXfC_.js";var y=h(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">条件渲染</h1>`),b=h(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),x=h(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),S=(h,S,C)=>{let w=p(`code`);return o(()=>r(v,()=>({children:(r,o,p)=>{let h=()=>a(r=>{let i=d();i.appendChild(y().content.cloneNode(!0));let o=b().content.cloneNode(!0),p=o.firstChild,h=p.childNodes[0],v=p.childNodes[1];i.appendChild(o),h.setAttribute(`role`,`tab`);let S;u(()=>{let e=`tab ${w.value===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(S,t)||(S=t,h.setAttribute(`class`,t))}),f(m(r,h,`click`,()=>()=>{w.value=`preview`})),v.setAttribute(`role`,`tab`);let C;u(()=>{let e=`tab ${w.value===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(C,t)||(C=t,v.setAttribute(`class`,t))}),f(m(r,v,`click`,()=>()=>{w.value=`code`}));let T=x().content.cloneNode(!0),E=T.firstChild,D=E.childNodes[0],O=D.parentNode,k=E.childNodes[1],A=k.parentNode;i.appendChild(T),n(O,D,()=>{let t=w.value===`code`;return t?{__rue_compiled_branch_key:!0,create:()=>a(t=>{let n=l(`div`,t);n.setAttribute(`class`,`card bg-base-100 shadow overflow-auto`);let r=l(`div`,n);return s(n,r),r.setAttribute(`class`,`card-body p-0`),e(r,_,()=>({className:`h-full`,lang:`tsx`,code:`import { type FC } from '@rue-js/rue';

const showA = true;
const showB = false;

const ConditionalRendering: FC = () => (
  <div className="grid gap-2">
    <div>{showA ? 'A 显示（?:）' : 'A 隐藏'}</div>
    <div>--[{showB && 'B 显示（&&）'}]--</div>
    <div />
    <div></div>
    <div>--[{null}]--</div>
    <div>--[{false}]--</div>
    <div>--[{undefined}]--</div>
    <div>--[{true}]--</div>
    <div>--[{1}]--</div>
    <div>--[{0}]--</div>
  </div>
);

export default ConditionalRendering;`})),[n,n]})}:typeof t==`number`||typeof t==`bigint`?{__rue_compiled_branch_key:t,create:()=>g(e=>{let n=c(typeof t==`string`||typeof t==`number`||typeof t==`bigint`?t:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>g(e=>{let t=d();return[t.firstChild,t.lastChild]})}}),n(A,k,()=>{let e=w.value===`preview`;return e?{__rue_compiled_branch_key:!0,create:()=>a(e=>{let n=l(`div`,e);n.setAttribute(`class`,`card bg-base-100 shadow`);let r=l(`div`,n);s(n,r),r.setAttribute(`class`,`card-body grid gap-2`);let i=l(`div`,r);s(r,i),t(()=>({__rue_compiled_branch_key:!0,create:()=>g(e=>{let t=c(`A 显示（?:）`);return[t,t]})})).__rue_compiled_mount(i);let a=l(`div`,r);s(r,a),s(a,c(`--[`)),t(()=>({__rue_compiled_branch_key:!1,create:()=>g(e=>{let t=d();return[t.firstChild,t.lastChild]})})).__rue_compiled_mount(a),s(a,c(`]--`));let o=l(`div`,r);s(r,o);let u=l(`div`,r);s(r,u);let f=l(`div`,r);s(r,f),s(f,c(`--[`)),s(f,c(``)),s(f,c(`]--`));let p=l(`div`,r);s(r,p),s(p,c(`--[`)),s(p,c(``)),s(p,c(`]--`));let m=l(`div`,r);s(r,m),s(m,c(`--[`)),s(m,c(``)),s(m,c(`]--`));let h=l(`div`,r);s(r,h),s(h,c(`--[`)),s(h,c(``)),s(h,c(`]--`));let _=l(`div`,r);s(r,_),s(_,c(`--[`)),s(_,c(`1`)),s(_,c(`]--`));let v=l(`div`,r);return s(r,v),s(v,c(`--[`)),s(v,c(`0`)),s(v,c(`]--`)),[n,n]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>g(t=>{let n=c(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>g(e=>{let t=d();return[t.firstChild,t.lastChild]})}});let j=c(``),M=c(``);return i.insertBefore(j,i.firstChild),i.appendChild(M),[i.firstChild,i.lastChild]});return r==null?h():i(r,p,h)}})))};export{S as default};