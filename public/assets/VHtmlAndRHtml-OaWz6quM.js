import{$ as e,Ht as t,J as n,Lt as r,Q as i,X as a,Xt as o,Z as s,at as c,l,q as u,qt as d,s as f,st as p,t as m,ut as h}from"./vapor-runtime-iQZthBPQ.js";import{a as g}from"./vapor-helpers-vapor-BjKHCvOa.js";import{t as _}from"./Code-CZqShVUj.js";import{r as v}from"./SidebarPlaygroundExample-5H7RL-T7.js";var y=()=>{let{activeTab:y,articleHtml:b,badgeHtml:x}=g(`useSetup:0:0`,()=>d(()=>({activeTab:g(`ref:1:0`,()=>r(`code`)),articleHtml:g(`ref:1:1`,()=>r(`<strong>草稿</strong><span> 文档仍在编辑中。</span>`)),badgeHtml:g(`ref:1:2`,()=>r(`<strong>Pro</strong><span> 专业版在线</span>`))})));return l(r=>{let d=s(),g=a(`rue:component:anchor`);return n(d,g),f(m(v,{children:l(()=>{let r=s(),d=i(`h1`,r);n(r,d),p(d,`text-5xl font-semibold mb-4 md:mb-4`),n(d,e(`v-html / r-html`));let g=i(`div`,r);n(r,g),c(g,`role`,`tablist`),p(g,`tabs tabs-box`);let v=i(`button`,g);n(g,v),c(v,`role`,`tab`),o(()=>{p(v,`tab ${y.value===`preview`?`tab-active`:``}`)}),u(v,`click`,()=>{y.value=`preview`}),n(v,e(`效果`));let S=i(`button`,g);n(g,S),c(S,`role`,`tab`),o(()=>{p(S,`tab ${y.value===`code`?`tab-active`:``}`)}),u(S,`click`,()=>{y.value=`code`}),n(S,e(`代码`));let C=i(`div`,r);n(r,C),p(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=a(`rue:slot:anchor`);n(C,w),o(()=>{let e=y.value===`code`?l(()=>{let e=s(),r=i(`div`,e);n(e,r),p(r,`card bg-base-100 shadow overflow-auto`);let c=i(`div`,r);n(r,c),p(c,`card-body p-0`);let l=a(`rue:component:anchor`);return n(c,l),o(()=>{let e=m(_,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VHtmlAndRHtml;`});t(()=>f(e,c,l))}),e}):``;t(()=>f(e,C,w))}),n(C,e(` `));let T=a(`rue:slot:anchor`);return n(C,T),o(()=>{let r=y.value===`preview`?l(()=>{let t=s(),r=i(`div`,t);n(t,r),p(r,`card bg-base-100 shadow`);let a=i(`div`,r);n(r,a),p(a,`card-body grid gap-6`);let c=i(`section`,a);n(a,c),p(c,`space-y-3`);let l=i(`div`,c);n(c,l),p(l,`flex flex-wrap items-center justify-between gap-3`);let d=i(`h2`,l);n(l,d),p(d,`text-xl font-semibold`),n(d,e(`v-html / r-html`));let f=i(`button`,l);n(l,f),p(f,`btn btn-sm`),u(f,`click`,()=>{b.value=`<strong>已发布</strong><span> 文档已经公开。</span>`,x.value=`<strong>Basic</strong><span> 标准版在线</span>`}),n(f,e(`更新 HTML`));let m=i(`div`,c);n(c,m),p(m,`rounded-box border border-base-300 p-4 grid gap-3`);let g=i(`div`,m);n(m,g),p(g,`alert alert-info`),o(()=>{let e={__html:b.value};h(g,e&&`__html`in e?e.__html:``)});let _=i(`p`,m);return n(m,_),p(_,`badge badge-success badge-lg`),o(()=>{let e={__html:x.value};h(_,e&&`__html`in e?e.__html:``)}),t}):``;t(()=>f(r,C,T))}),r})}),d,g),d})};export{y as default};