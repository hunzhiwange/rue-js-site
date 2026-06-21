import{$t as e,Jt as t,Q as n,Z as r,dt as i,et as a,in as o,l as s,lt as c,mt as l,nt as u,o as d,rt as f,t as p,tt as m,zt as h}from"./vapor-runtime-DsQWl-IB.js";import{a as g}from"./vapor-helpers-vapor-Dg64FcpK.js";import{t as _}from"./Code-4SUSUwRg.js";import{r as v}from"./SidebarPlaygroundExample-BEWYUWOl.js";var y=()=>{let{activeTab:y,articleHtml:b,badgeHtml:x}=g(`useSetup:0:0`,()=>o(()=>({activeTab:g(`ref:1:0`,()=>t(`code`)),articleHtml:g(`ref:1:1`,()=>t(`<strong>草稿</strong><span> 文档仍在编辑中。</span>`)),badgeHtml:g(`ref:1:2`,()=>t(`<strong>Pro</strong><span> 专业版在线</span>`))})));return s(t=>{let o=m(),g=a(`rue:component:anchor`);return n(o,g),d(p(v,{children:s(()=>{let t=m(),o=u(`h1`,t);n(t,o),i(o,`text-5xl font-semibold mb-4 md:mb-4`),n(o,f(`v-html / r-html`));let g=u(`div`,t);n(t,g),c(g,`role`,`tablist`),i(g,`tabs tabs-box`);let v=u(`button`,g);n(g,v),c(v,`role`,`tab`),h(()=>{i(v,`tab ${y.value===`preview`?`tab-active`:``}`)}),r(v,`click`,()=>{y.value=`preview`}),n(v,f(`效果`));let S=u(`button`,g);n(g,S),c(S,`role`,`tab`),h(()=>{i(S,`tab ${y.value===`code`?`tab-active`:``}`)}),r(S,`click`,()=>{y.value=`code`}),n(S,f(`代码`));let C=u(`div`,t);n(t,C),i(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=a(`rue:slot:anchor`);n(C,w),h(()=>{let t=y.value===`code`?s(()=>{let t=m(),r=u(`div`,t);n(t,r),i(r,`card bg-base-100 shadow overflow-auto`);let o=u(`div`,r);n(r,o),i(o,`card-body p-0`);let s=a(`rue:component:anchor`);return n(o,s),h(()=>{let t=p(_,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VHtmlAndRHtml;`});e(()=>d(t,o,s))}),t}):``;e(()=>d(t,C,w))}),n(C,f(` `));let T=a(`rue:slot:anchor`);return n(C,T),h(()=>{let t=y.value===`preview`?s(()=>{let e=m(),t=u(`div`,e);n(e,t),i(t,`card bg-base-100 shadow`);let a=u(`div`,t);n(t,a),i(a,`card-body grid gap-6`);let o=u(`section`,a);n(a,o),i(o,`space-y-3`);let s=u(`div`,o);n(o,s),i(s,`flex flex-wrap items-center justify-between gap-3`);let c=u(`h2`,s);n(s,c),i(c,`text-xl font-semibold`),n(c,f(`v-html / r-html`));let d=u(`button`,s);n(s,d),i(d,`btn btn-sm`),r(d,`click`,()=>{b.value=`<strong>已发布</strong><span> 文档已经公开。</span>`,x.value=`<strong>Basic</strong><span> 标准版在线</span>`}),n(d,f(`更新 HTML`));let p=u(`div`,o);n(o,p),i(p,`rounded-box border border-base-300 p-4 grid gap-3`);let g=u(`div`,p);n(p,g),i(g,`alert alert-info`),h(()=>{let e={__html:b.value};l(g,e&&`__html`in e?e.__html:``)});let _=u(`p`,p);return n(p,_),i(_,`badge badge-success badge-lg`),h(()=>{let e={__html:x.value};l(_,e&&`__html`in e?e.__html:``)}),e}):``;e(()=>d(t,C,T))}),t})}),o,g),o})};export{y as default};