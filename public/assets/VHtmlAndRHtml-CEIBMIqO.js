import{$ as e,B as t,Dt as n,G as r,H as i,U as a,W as o,Z as s,ht as c,l,nt as u,s as d,t as f,wt as p,yt as m,z as h}from"./vapor-runtime-C1rlwc61.js";import{a as g}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as _}from"./Code-BCLFq1E3.js";import{t as v}from"./SidebarPlaygroundExample-CdMvdgT7.js";var y=()=>{let{activeTab:y,articleHtml:b,badgeHtml:x}=g(`useSetup:0:0`,()=>p(()=>({activeTab:g(`ref:1:0`,()=>c(`code`)),articleHtml:g(`ref:1:1`,()=>c(`<strong>草稿</strong><span> 文档仍在编辑中。</span>`)),badgeHtml:g(`ref:1:2`,()=>c(`<strong>Pro</strong><span> 专业版在线</span>`))})));return l(c=>{let p=a(),g=i(`rue:component:anchor`);return t(p,g),d(f(v,{children:l(()=>{let c=a(),p=o(`h1`,c);t(c,p),e(p,`text-5xl font-semibold mb-4 md:mb-4`),t(p,r(`v-html / r-html`));let g=o(`div`,c);t(c,g),s(g,`role`,`tablist`),e(g,`tabs tabs-box`);let v=o(`button`,g);t(g,v),s(v,`role`,`tab`),n(()=>{e(v,String(`tab ${y.value===`preview`?`tab-active`:``}`))}),h(v,`click`,()=>{y.value=`preview`}),t(v,r(`效果`));let S=o(`button`,g);t(g,S),s(S,`role`,`tab`),n(()=>{e(S,String(`tab ${y.value===`code`?`tab-active`:``}`))}),h(S,`click`,()=>{y.value=`code`}),t(S,r(`代码`));let C=o(`div`,c);t(c,C),e(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=i(`rue:slot:anchor`);t(C,w),n(()=>{let r=y.value===`code`?l(()=>{let r=a(),s=o(`div`,r);t(r,s),e(s,`card bg-base-100 shadow overflow-auto`);let c=o(`div`,s);t(s,c),e(c,`card-body p-0`);let l=i(`rue:component:anchor`);return t(c,l),n(()=>{let e=f(_,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VHtmlAndRHtml;`});m(()=>d(e,c,l))}),r}):``;m(()=>d(r,C,w))}),t(C,r(` `));let T=i(`rue:slot:anchor`);return t(C,T),n(()=>{let i=y.value===`preview`?l(()=>{let i=a(),s=o(`div`,i);t(i,s),e(s,`card bg-base-100 shadow`);let c=o(`div`,s);t(s,c),e(c,`card-body grid gap-6`);let l=o(`section`,c);t(c,l),e(l,`space-y-3`);let d=o(`div`,l);t(l,d),e(d,`flex flex-wrap items-center justify-between gap-3`);let f=o(`h2`,d);t(d,f),e(f,`text-xl font-semibold`),t(f,r(`v-html / r-html`));let p=o(`button`,d);t(d,p),e(p,`btn btn-sm`),h(p,`click`,()=>{b.value=`<strong>已发布</strong><span> 文档已经公开。</span>`,x.value=`<strong>Basic</strong><span> 标准版在线</span>`}),t(p,r(`更新 HTML`));let m=o(`div`,l);t(l,m),e(m,`rounded-box border border-base-300 p-4 grid gap-3`);let g=o(`div`,m);t(m,g),e(g,`alert alert-info`),n(()=>{let e={__html:b.value};u(g,e&&`__html`in e?e.__html:``)});let _=o(`p`,m);return t(m,_),e(_,`badge badge-success badge-lg`),n(()=>{let e={__html:x.value};u(_,e&&`__html`in e?e.__html:``)}),i}):``;m(()=>d(i,C,T))}),c})}),p,g),p})};export{y as default};