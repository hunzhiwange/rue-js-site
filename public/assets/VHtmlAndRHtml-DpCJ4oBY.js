import{Bt as e,Dt as t,H as n,Ut as r,Vt as i,Wt as a,Y as o,fn as s,gn as c,hn as l,in as u,kt as d,mn as f,sn as p,st as m,u as h,yn as g,yt as _,z as v}from"./rue-runtime-Cv6BZekS.js";import{t as y}from"./Code-BzFVdc3U.js";import{r as b}from"./SidebarPlaygroundExample-rFyhXfC_.js";var x=g(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">v-html / r-html</h1>`),S=g(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),C=g(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),w=(g,w,T)=>{let E=m(`code`),D=m(`<strong>草稿</strong><span> 文档仍在编辑中。</span>`),O=m(`<strong>Pro</strong><span> 专业版在线</span>`);return o(()=>(()=>{let o=a(o=>{let m=f(),h=C().content.cloneNode(!0),g=h.firstChild,v=g.childNodes[0],b=v.parentNode,x=g.childNodes[1],S=x.parentNode;m.appendChild(h),r(b,v,()=>{let e=E.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>a(e=>{let t=l(`div`,e);t.setAttribute(`class`,`card bg-base-100 shadow overflow-auto`);let r=l(`div`,t);return s(t,r),r.setAttribute(`class`,`card-body p-0`),n(r,y,()=>({className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VHtmlAndRHtml;`})),[t,t]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>_(t=>{let n=c(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>_(e=>{let t=f();return[t.firstChild,t.lastChild]})}}),e({parent:S,before:x},()=>E.value===`preview`?(e,n,r)=>i(e,r,()=>a(()=>{let e=f(),n=l(`div`,e);s(e,n),t(n,`card bg-base-100 shadow`);let r=l(`div`,n);s(n,r),t(r,`card-body grid gap-6`);let i=l(`section`,r);s(r,i),t(i,`space-y-3`);let a=l(`div`,i);s(i,a),t(a,`flex flex-wrap items-center justify-between gap-3`);let o=l(`h2`,a);s(a,o),t(o,`text-xl font-semibold`),s(o,c(`v-html / r-html`));let m=l(`button`,a);s(a,m),t(m,`btn btn-sm`);let h=e=>{let t=()=>{D.value=`<strong>已发布</strong><span> 文档已经公开。</span>`,O.value=`<strong>Basic</strong><span> 标准版在线</span>`};typeof t==`function`&&t(e)};m.addEventListener(`click`,h),p(()=>m.removeEventListener(`click`,h)),s(m,c(`更新 HTML`));let g=l(`div`,i);s(i,g),t(g,`rounded-box border border-base-300 p-4 grid gap-3`);let _=l(`div`,g);s(g,_),t(_,`alert alert-info`),u(()=>{let e={__html:D.value};d(_,e&&`__html`in e?e.__html:``)});let v=l(`p`,g);s(g,v),t(v,`badge badge-success badge-lg`),u(()=>{let e={__html:O.value};d(v,e&&`__html`in e?e.__html:``)});let y=c(``),b=c(``);return e.insertBefore(y,e.firstChild),e.appendChild(b),[e.firstChild,e.lastChild]})):(e,t,n)=>{let r=()=>_(e=>{let t=c(``);return[t,t]});return e==null?r():i(e,n,r)},()=>({}));let w=c(``),T=c(``);return m.insertBefore(w,m.firstChild),m.appendChild(T),[m.firstChild,m.lastChild]});return v(b,()=>({children:[_(e=>{let t=x().content.cloneNode(!0).firstChild;return[t,t]}),a(e=>{let t=S().content.cloneNode(!0).firstChild,n=t.childNodes[0],r=t.childNodes[1];n.setAttribute(`role`,`tab`);let i;u(()=>{let e=`tab ${E.value===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(i,t)||(i=t,n.setAttribute(`class`,t))}),p(h(e,n,`click`,()=>()=>{E.value=`preview`})),r.setAttribute(`role`,`tab`);let a;return u(()=>{let e=`tab ${E.value===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(a,t)||(a=t,r.setAttribute(`class`,t))}),p(h(e,r,`click`,()=>()=>{E.value=`code`})),[t,t]}),o]}))})())};export{w as default};