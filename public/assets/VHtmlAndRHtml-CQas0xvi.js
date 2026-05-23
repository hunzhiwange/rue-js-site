import{$ as e,Et as t,G as n,H as r,K as i,V as a,W as o,_t as s,d as c,it as l,kt as u,l as d,q as f,t as p,tt as m,xt as h}from"./vapor-runtime-BAZOdMd8.js";import{a as g}from"./vapor-helpers-vapor-BvUp1QnH.js";import{t as _}from"./Code-DY4Ua5uc.js";import{t as v}from"./SidebarPlaygroundExample-B8LFNSBu.js";var y=()=>{let{activeTab:y,articleHtml:b,badgeHtml:x}=g(`useSetup:0:0`,()=>t(()=>({activeTab:g(`ref:1:0`,()=>s(`code`)),articleHtml:g(`ref:1:1`,()=>s(`<strong>草稿</strong><span> 文档仍在编辑中。</span>`)),badgeHtml:g(`ref:1:2`,()=>s(`<strong>Pro</strong><span> 专业版在线</span>`))})));return c(t=>{let s=n(),g=o(`rue:component:anchor`);return r(s,g),d(p(v,{children:c(()=>{let t=n(),s=i(`h1`,t);r(t,s),m(s,`text-5xl font-semibold mb-4 md:mb-4`),r(s,f(`v-html / r-html`));let g=i(`div`,t);r(t,g),e(g,`role`,`tablist`),m(g,`tabs tabs-box`);let v=i(`button`,g);r(g,v),e(v,`role`,`tab`),u(()=>{m(v,String(`tab ${y.value===`preview`?`tab-active`:``}`))}),a(v,`click`,()=>{y.value=`preview`}),r(v,f(`效果`));let S=i(`button`,g);r(g,S),e(S,`role`,`tab`),u(()=>{m(S,String(`tab ${y.value===`code`?`tab-active`:``}`))}),a(S,`click`,()=>{y.value=`code`}),r(S,f(`代码`));let C=i(`div`,t);r(t,C),m(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=o(`rue:slot:anchor`);r(C,w),u(()=>{let e=y.value===`code`?c(()=>{let e=n(),t=i(`div`,e);r(e,t),m(t,`card bg-base-100 shadow overflow-auto`);let a=i(`div`,t);r(t,a),m(a,`card-body p-0`);let s=o(`rue:component:anchor`);return r(a,s),u(()=>{let e=p(_,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VHtmlAndRHtml;`});h(()=>d(e,a,s))}),e}):``;h(()=>d(e,C,w))}),r(C,f(` `));let T=o(`rue:slot:anchor`);return r(C,T),u(()=>{let e=y.value===`preview`?c(()=>{let e=n(),t=i(`div`,e);r(e,t),m(t,`card bg-base-100 shadow`);let o=i(`div`,t);r(t,o),m(o,`card-body grid gap-6`);let s=i(`section`,o);r(o,s),m(s,`space-y-3`);let c=i(`div`,s);r(s,c),m(c,`flex flex-wrap items-center justify-between gap-3`);let d=i(`h2`,c);r(c,d),m(d,`text-xl font-semibold`),r(d,f(`v-html / r-html`));let p=i(`button`,c);r(c,p),m(p,`btn btn-sm`),a(p,`click`,()=>{b.value=`<strong>已发布</strong><span> 文档已经公开。</span>`,x.value=`<strong>Basic</strong><span> 标准版在线</span>`}),r(p,f(`更新 HTML`));let h=i(`div`,s);r(s,h),m(h,`rounded-box border border-base-300 p-4 grid gap-3`);let g=i(`div`,h);r(h,g),m(g,`alert alert-info`),u(()=>{let e={__html:b.value};l(g,e&&`__html`in e?e.__html:``)});let _=i(`p`,h);return r(h,_),m(_,`badge badge-success badge-lg`),u(()=>{let e={__html:x.value};l(_,e&&`__html`in e?e.__html:``)}),e}):``;h(()=>d(e,C,T))}),t})}),s,g),s})};export{y as default};