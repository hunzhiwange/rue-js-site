import{$ as e,J as t,Kt as n,Lt as r,Q as i,Vt as a,Y as o,Yt as s,Z as c,ct as l,dt as u,et as d,l as f,ot as p,s as m,t as h}from"./vapor-runtime-DHPuOjqh.js";import{a as g}from"./vapor-helpers-vapor-CJFAWine.js";import{t as _}from"./Code-Ds9lKLk6.js";import{t as v}from"./SidebarPlaygroundExample-KML-rOvA.js";var y=()=>{let{activeTab:y,articleHtml:b,badgeHtml:x}=g(`useSetup:0:0`,()=>n(()=>({activeTab:g(`ref:1:0`,()=>r(`code`)),articleHtml:g(`ref:1:1`,()=>r(`<strong>草稿</strong><span> 文档仍在编辑中。</span>`)),badgeHtml:g(`ref:1:2`,()=>r(`<strong>Pro</strong><span> 专业版在线</span>`))})));return f(n=>{let r=i(),g=c(`rue:component:anchor`);return o(r,g),m(h(v,{children:f(()=>{let n=i(),r=e(`h1`,n);o(n,r),l(r,`text-5xl font-semibold mb-4 md:mb-4`),o(r,d(`v-html / r-html`));let g=e(`div`,n);o(n,g),p(g,`role`,`tablist`),l(g,`tabs tabs-box`);let v=e(`button`,g);o(g,v),p(v,`role`,`tab`),s(()=>{l(v,String(`tab ${y.value===`preview`?`tab-active`:``}`))}),t(v,`click`,()=>{y.value=`preview`}),o(v,d(`效果`));let S=e(`button`,g);o(g,S),p(S,`role`,`tab`),s(()=>{l(S,String(`tab ${y.value===`code`?`tab-active`:``}`))}),t(S,`click`,()=>{y.value=`code`}),o(S,d(`代码`));let C=e(`div`,n);o(n,C),l(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=c(`rue:slot:anchor`);o(C,w),s(()=>{let t=y.value===`code`?f(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`card bg-base-100 shadow overflow-auto`);let r=e(`div`,n);o(n,r),l(r,`card-body p-0`);let u=c(`rue:component:anchor`);return o(r,u),s(()=>{let e=h(_,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VHtmlAndRHtml;`});a(()=>m(e,r,u))}),t}):``;a(()=>m(t,C,w))}),o(C,d(` `));let T=c(`rue:slot:anchor`);return o(C,T),s(()=>{let n=y.value===`preview`?f(()=>{let n=i(),r=e(`div`,n);o(n,r),l(r,`card bg-base-100 shadow`);let a=e(`div`,r);o(r,a),l(a,`card-body grid gap-6`);let c=e(`section`,a);o(a,c),l(c,`space-y-3`);let f=e(`div`,c);o(c,f),l(f,`flex flex-wrap items-center justify-between gap-3`);let p=e(`h2`,f);o(f,p),l(p,`text-xl font-semibold`),o(p,d(`v-html / r-html`));let m=e(`button`,f);o(f,m),l(m,`btn btn-sm`),t(m,`click`,()=>{b.value=`<strong>已发布</strong><span> 文档已经公开。</span>`,x.value=`<strong>Basic</strong><span> 标准版在线</span>`}),o(m,d(`更新 HTML`));let h=e(`div`,c);o(c,h),l(h,`rounded-box border border-base-300 p-4 grid gap-3`);let g=e(`div`,h);o(h,g),l(g,`alert alert-info`),s(()=>{let e={__html:b.value};u(g,e&&`__html`in e?e.__html:``)});let _=e(`p`,h);return o(h,_),l(_,`badge badge-success badge-lg`),s(()=>{let e={__html:x.value};u(_,e&&`__html`in e?e.__html:``)}),n}):``;a(()=>m(n,C,T))}),n})}),r,g),r})};export{y as default};