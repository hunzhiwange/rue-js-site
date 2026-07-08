import{Q as e,Vt as t,Xt as n,Z as r,dt as i,gt as a,it as o,l as s,nt as c,o as l,on as u,pt as d,rt as f,t as p,tn as m,tt as h}from"./vapor-runtime-x7F5M-49.js";import{a as g}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as _}from"./Code-BoXKy3gJ.js";import{r as v}from"./SidebarPlaygroundExample-BmbQ-Y7_.js";var y=()=>{let{activeTab:y,articleHtml:b,badgeHtml:x}=g(`useSetup:0:0`,()=>u(()=>({activeTab:g(`ref:1:0`,()=>n(`code`)),articleHtml:g(`ref:1:1`,()=>n(`<strong>草稿</strong><span> 文档仍在编辑中。</span>`)),badgeHtml:g(`ref:1:2`,()=>n(`<strong>Pro</strong><span> 专业版在线</span>`))})));return s(n=>{let u=c(),g=h(`rue:component:anchor`);return e(u,g),l(p(v,{children:s(()=>{let n=c(),u=f(`h1`,n);e(n,u),d(u,`text-5xl font-semibold mb-4 md:mb-4`),e(u,o(`v-html / r-html`));let g=f(`div`,n);e(n,g),i(g,`role`,`tablist`),d(g,`tabs tabs-box`);let v=f(`button`,g);e(g,v),i(v,`role`,`tab`),t(()=>{d(v,`tab ${y.value===`preview`?`tab-active`:``}`)}),r(v,`click`,()=>{y.value=`preview`}),e(v,o(`效果`));let S=f(`button`,g);e(g,S),i(S,`role`,`tab`),t(()=>{d(S,`tab ${y.value===`code`?`tab-active`:``}`)}),r(S,`click`,()=>{y.value=`code`}),e(S,o(`代码`));let C=f(`div`,n);e(n,C),d(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=h(`rue:slot:anchor`);e(C,w),t(()=>{let n=y.value===`code`?s(()=>{let n=c(),r=f(`div`,n);e(n,r),d(r,`card bg-base-100 shadow overflow-auto`);let i=f(`div`,r);e(r,i),d(i,`card-body p-0`);let a=h(`rue:component:anchor`);return e(i,a),t(()=>{let e=p(_,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VHtmlAndRHtml;`});m(()=>l(e,i,a))}),n}):``;m(()=>l(n,C,w))}),e(C,o(` `));let T=h(`rue:slot:anchor`);return e(C,T),t(()=>{let n=y.value===`preview`?s(()=>{let n=c(),i=f(`div`,n);e(n,i),d(i,`card bg-base-100 shadow`);let s=f(`div`,i);e(i,s),d(s,`card-body grid gap-6`);let l=f(`section`,s);e(s,l),d(l,`space-y-3`);let u=f(`div`,l);e(l,u),d(u,`flex flex-wrap items-center justify-between gap-3`);let p=f(`h2`,u);e(u,p),d(p,`text-xl font-semibold`),e(p,o(`v-html / r-html`));let m=f(`button`,u);e(u,m),d(m,`btn btn-sm`),r(m,`click`,()=>{b.value=`<strong>已发布</strong><span> 文档已经公开。</span>`,x.value=`<strong>Basic</strong><span> 标准版在线</span>`}),e(m,o(`更新 HTML`));let h=f(`div`,l);e(l,h),d(h,`rounded-box border border-base-300 p-4 grid gap-3`);let g=f(`div`,h);e(h,g),d(g,`alert alert-info`),t(()=>{let e={__html:b.value};a(g,e&&`__html`in e?e.__html:``)});let _=f(`p`,h);return e(h,_),d(_,`badge badge-success badge-lg`),t(()=>{let e={__html:x.value};a(_,e&&`__html`in e?e.__html:``)}),n}):``;m(()=>l(n,C,T))}),n})}),u,g),u})};export{y as default};