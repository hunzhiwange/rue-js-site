import{Bt as e,Dt as t,F as n,M as r,Ut as i,V as a,Vt as o,Wt as s,fn as c,gn as l,hn as u,in as d,kt as f,mn as p,mt as m,nt as h,sn as g,u as _,yn as v}from"./rue-runtime-BWbIfNT8.js";import{t as y}from"./Code-C5ZhIIr9.js";import{r as b}from"./SidebarPlaygroundExample-DUmYtIFQ.js";var x=v(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">v-html / r-html</h1>`),S=v(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),C=v(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),w=(v,w,T)=>{let E=m(`code`),D=m(`<strong>草稿</strong><span> 文档仍在编辑中。</span>`),O=m(`<strong>Pro</strong><span> 专业版在线</span>`);return h(()=>(()=>{let m=s(r=>{let m=p(),h=C().content.cloneNode(!0),_=h.firstChild,v=_.childNodes[0],b=v.parentNode,x=_.childNodes[1],S=x.parentNode;m.appendChild(h),i(b,v,()=>{let e=E.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>s(e=>{let t=u(`div`,e);t.setAttribute(`class`,`card bg-base-100 shadow overflow-auto`);let r=u(`div`,t);return c(t,r),r.setAttribute(`class`,`card-body p-0`),n(r,y,()=>({className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

const VHtmlAndRHtml: FC = () => {
  const articleHtml = ref('<strong>草稿</strong><span> 文档仍在编辑中。</span>');
  const badgeHtml = ref('<strong>Pro</strong><span> 专业版在线</span>');

  return (
    <div className="grid gap-4">
      <button className="btn btn-sm" onClick={() => {
        articleHtml.value = '<strong>已发布</strong><span> 文档已经公开。</span>';
        badgeHtml.value = '<strong>Basic</strong><span> 标准版在线</span>';
      }}>
        更新 HTML
      </button>

      <div v-html="articleHtml.value" className="alert alert-info"></div>
      <p r-html={badgeHtml.value} className="badge badge-success badge-lg"></p>
    </div>
  );
};

export default VHtmlAndRHtml;`})),[t,t]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>a(t=>{let n=l(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>a(e=>{let t=p();return[t.firstChild,t.lastChild]})}}),e({parent:S,before:x},()=>E.value===`preview`?(e,n,r)=>o(e,r,()=>s(()=>{let e=p(),n=u(`div`,e);c(e,n),t(n,`card bg-base-100 shadow`);let r=u(`div`,n);c(n,r),t(r,`card-body grid gap-6`);let i=u(`section`,r);c(r,i),t(i,`space-y-3`);let a=u(`div`,i);c(i,a),t(a,`flex flex-wrap items-center justify-between gap-3`);let o=u(`h2`,a);c(a,o),t(o,`text-xl font-semibold`),c(o,l(`v-html / r-html`));let s=u(`button`,a);c(a,s),t(s,`btn btn-sm`);let m=e=>{let t=()=>{D.value=`<strong>已发布</strong><span> 文档已经公开。</span>`,O.value=`<strong>Basic</strong><span> 标准版在线</span>`};typeof t==`function`&&t(e)};s.addEventListener(`click`,m),g(()=>s.removeEventListener(`click`,m)),c(s,l(`更新 HTML`));let h=u(`div`,i);c(i,h),t(h,`rounded-box border border-base-300 p-4 grid gap-3`);let _=u(`div`,h);c(h,_),t(_,`alert alert-info`),d(()=>{let e={__html:D.value};f(_,e&&`__html`in e?e.__html:``)});let v=u(`p`,h);c(h,v),t(v,`badge badge-success badge-lg`),d(()=>{let e={__html:O.value};f(v,e&&`__html`in e?e.__html:``)});let y=l(``),b=l(``);return e.insertBefore(y,e.firstChild),e.appendChild(b),[e.firstChild,e.lastChild]})):(e,t,n)=>{let r=()=>a(e=>{let t=l(``);return[t,t]});return e==null?r():o(e,n,r)},()=>({}));let w=l(``),T=l(``);return m.insertBefore(w,m.firstChild),m.appendChild(T),[m.firstChild,m.lastChild]});return r(b,()=>({children:[a(e=>{let t=x().content.cloneNode(!0).firstChild;return[t,t]}),s(e=>{let t=S().content.cloneNode(!0).firstChild,n=t.childNodes[0],r=t.childNodes[1];n.setAttribute(`role`,`tab`);let i;d(()=>{let e=`tab ${E.value===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(i,t)||(i=t,n.setAttribute(`class`,t))}),g(_(e,n,`click`,()=>()=>{E.value=`preview`})),r.setAttribute(`role`,`tab`);let a;return d(()=>{let e=`tab ${E.value===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(a,t)||(a=t,r.setAttribute(`class`,t))}),g(_(e,r,`click`,()=>()=>{E.value=`code`})),[t,t]}),m]}))})())};export{w as default};