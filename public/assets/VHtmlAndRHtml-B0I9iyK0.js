import{Cn as e,Ct as t,Ot as n,Tt as r,dt as i,ft as a,mt as o,ot as s,pn as c,pt as l,st as u,tn as d,vn as f}from"./context-8lXZvIn-.js";import{l as p,o as m,t as h}from"./vapor-runtime-ygJWVcNn.js";import{a as g}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as _}from"./Code-DhoWkRkB.js";import{r as v}from"./SidebarPlaygroundExample-B78jsvoF.js";var y=()=>{let{activeTab:y,articleHtml:b,badgeHtml:x}=g(`useSetup:0:0`,()=>e(()=>({activeTab:g(`ref:1:0`,()=>c(`code`)),articleHtml:g(`ref:1:1`,()=>c(`<strong>草稿</strong><span> 文档仍在编辑中。</span>`)),badgeHtml:g(`ref:1:2`,()=>c(`<strong>Pro</strong><span> 专业版在线</span>`))})));return p(e=>{let c=a(),g=i(`rue:component:anchor`);return u(c,g),m(h(v,{children:p(()=>{let e=a(),c=l(`h1`,e);u(e,c),r(c,`text-5xl font-semibold mb-4 md:mb-4`),u(c,o(`v-html / r-html`));let g=l(`div`,e);u(e,g),t(g,`role`,`tablist`),r(g,`tabs tabs-box`);let v=l(`button`,g);u(g,v),t(v,`role`,`tab`),d(()=>{r(v,`tab ${y.value===`preview`?`tab-active`:``}`)}),s(v,`click`,()=>{y.value=`preview`}),u(v,o(`效果`));let S=l(`button`,g);u(g,S),t(S,`role`,`tab`),d(()=>{r(S,`tab ${y.value===`code`?`tab-active`:``}`)}),s(S,`click`,()=>{y.value=`code`}),u(S,o(`代码`));let C=l(`div`,e);u(e,C),r(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=i(`rue:slot:anchor`);u(C,w),d(()=>{let e=y.value===`code`?p(()=>{let e=a(),t=l(`div`,e);u(e,t),r(t,`card bg-base-100 shadow overflow-auto`);let n=l(`div`,t);u(t,n),r(n,`card-body p-0`);let o=i(`rue:component:anchor`);return u(n,o),d(()=>{let e=h(_,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VHtmlAndRHtml;`});f(()=>m(e,n,o))}),e}):``;f(()=>m(e,C,w))}),u(C,o(` `));let T=i(`rue:slot:anchor`);return u(C,T),d(()=>{let e=y.value===`preview`?p(()=>{let e=a(),t=l(`div`,e);u(e,t),r(t,`card bg-base-100 shadow`);let i=l(`div`,t);u(t,i),r(i,`card-body grid gap-6`);let c=l(`section`,i);u(i,c),r(c,`space-y-3`);let f=l(`div`,c);u(c,f),r(f,`flex flex-wrap items-center justify-between gap-3`);let p=l(`h2`,f);u(f,p),r(p,`text-xl font-semibold`),u(p,o(`v-html / r-html`));let m=l(`button`,f);u(f,m),r(m,`btn btn-sm`),s(m,`click`,()=>{b.value=`<strong>已发布</strong><span> 文档已经公开。</span>`,x.value=`<strong>Basic</strong><span> 标准版在线</span>`}),u(m,o(`更新 HTML`));let h=l(`div`,c);u(c,h),r(h,`rounded-box border border-base-300 p-4 grid gap-3`);let g=l(`div`,h);u(h,g),r(g,`alert alert-info`),d(()=>{let e={__html:b.value};n(g,e&&`__html`in e?e.__html:``)});let _=l(`p`,h);return u(h,_),r(_,`badge badge-success badge-lg`),d(()=>{let e={__html:x.value};n(_,e&&`__html`in e?e.__html:``)}),e}):``;f(()=>m(e,C,T))}),e})}),c,g),c})};export{y as default};