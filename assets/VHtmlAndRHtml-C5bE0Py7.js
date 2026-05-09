import{A as e,F as t,H as n,I as r,K as i,N as a,P as o,W as s,c,j as l,pt as u,rt as d,t as f,u as p,ut as m}from"./vapor-runtime-CKndxKFn.js";import{a as h}from"./vapor-helpers-vapor-yxlhW-_4.js";import{t as g}from"./Code-B1JFTu6m.js";import{t as _}from"./SidebarPlaygroundExample-DlK8mtjC.js";var v=()=>{let{activeTab:v,articleHtml:y,badgeHtml:b}=h(`useSetup:0:0`,()=>m(()=>({activeTab:h(`ref:1:0`,()=>d(`code`)),articleHtml:h(`ref:1:1`,()=>d(`<strong>草稿</strong><span> 文档仍在编辑中。</span>`)),badgeHtml:h(`ref:1:2`,()=>d(`<strong>Pro</strong><span> 专业版在线</span>`))})));return p(()=>{let d=o(),m=a(`rue:component:anchor`);return l(d,m),c(f(_,{children:p(()=>{let d=o(),m=t(`h1`);l(d,m),s(m,`text-5xl font-semibold mb-4 md:mb-4`),l(m,r(`v-html / r-html`));let h=t(`div`);l(d,h),n(h,`role`,`tablist`),s(h,`tabs tabs-box`);let _=t(`button`);l(h,_),n(_,`role`,`tab`),u(()=>{s(_,String(`tab ${v.value===`preview`?`tab-active`:``}`))}),e(_,`click`,()=>{v.value=`preview`}),l(_,r(`效果`));let x=t(`button`);l(h,x),n(x,`role`,`tab`),u(()=>{s(x,String(`tab ${v.value===`code`?`tab-active`:``}`))}),e(x,`click`,()=>{v.value=`code`}),l(x,r(`代码`));let S=t(`div`);l(d,S),s(S,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let C=a(`rue:slot:anchor`);l(S,C),u(()=>{c(v.value===`code`?p(()=>{let e=o(),n=t(`div`);l(e,n),s(n,`card bg-base-100 shadow overflow-auto`);let r=t(`div`);l(n,r),s(r,`card-body p-0`);let i=a(`rue:component:anchor`);return l(r,i),u(()=>{c(f(g,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VHtmlAndRHtml;`}),r,i)}),e}):``,S,C)}),l(S,r(` `));let w=a(`rue:slot:anchor`);return l(S,w),u(()=>{c(v.value===`preview`?p(()=>{let n=o(),a=t(`div`);l(n,a),s(a,`card bg-base-100 shadow`);let c=t(`div`);l(a,c),s(c,`card-body grid gap-6`);let d=t(`section`);l(c,d),s(d,`space-y-3`);let f=t(`div`);l(d,f),s(f,`flex flex-wrap items-center justify-between gap-3`);let p=t(`h2`);l(f,p),s(p,`text-xl font-semibold`),l(p,r(`v-html / r-html`));let m=t(`button`);l(f,m),s(m,`btn btn-sm`),e(m,`click`,()=>{y.value=`<strong>已发布</strong><span> 文档已经公开。</span>`,b.value=`<strong>Basic</strong><span> 标准版在线</span>`}),l(m,r(`更新 HTML`));let h=t(`div`);l(d,h),s(h,`rounded-box border border-base-300 p-4 grid gap-3`);let g=t(`div`);l(h,g),s(g,`alert alert-info`),u(()=>{let e={__html:y.value};i(g,e&&`__html`in e?e.__html:``)});let _=t(`p`);return l(h,_),s(_,`badge badge-success badge-lg`),u(()=>{let e={__html:b.value};i(_,e&&`__html`in e?e.__html:``)}),n}):``,S,w)}),d})}),d,m),d})};export{v as default};