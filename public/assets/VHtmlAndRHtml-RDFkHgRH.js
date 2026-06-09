import{$ as e,Ht as t,J as n,Q as r,Rt as i,Xt as a,Y as o,Z as s,ct as c,dt as l,et as u,l as d,ot as f,qt as p,s as m,t as h}from"./vapor-runtime-aZAg0Qkw.js";import{a as g}from"./vapor-helpers-vapor-gtGwiIv0.js";import{t as _}from"./Code-5DOEyGxf.js";import{r as v}from"./SidebarPlaygroundExample-cASgDpH3.js";var y=()=>{let{activeTab:y,articleHtml:b,badgeHtml:x}=g(`useSetup:0:0`,()=>p(()=>({activeTab:g(`ref:1:0`,()=>i(`code`)),articleHtml:g(`ref:1:1`,()=>i(`<strong>草稿</strong><span> 文档仍在编辑中。</span>`)),badgeHtml:g(`ref:1:2`,()=>i(`<strong>Pro</strong><span> 专业版在线</span>`))})));return d(i=>{let p=r(),g=s(`rue:component:anchor`);return o(p,g),m(h(v,{children:d(()=>{let i=r(),p=e(`h1`,i);o(i,p),c(p,`text-5xl font-semibold mb-4 md:mb-4`),o(p,u(`v-html / r-html`));let g=e(`div`,i);o(i,g),f(g,`role`,`tablist`),c(g,`tabs tabs-box`);let v=e(`button`,g);o(g,v),f(v,`role`,`tab`),a(()=>{c(v,String(`tab ${y.value===`preview`?`tab-active`:``}`))}),n(v,`click`,()=>{y.value=`preview`}),o(v,u(`效果`));let S=e(`button`,g);o(g,S),f(S,`role`,`tab`),a(()=>{c(S,String(`tab ${y.value===`code`?`tab-active`:``}`))}),n(S,`click`,()=>{y.value=`code`}),o(S,u(`代码`));let C=e(`div`,i);o(i,C),c(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=s(`rue:slot:anchor`);o(C,w),a(()=>{let n=y.value===`code`?d(()=>{let n=r(),i=e(`div`,n);o(n,i),c(i,`card bg-base-100 shadow overflow-auto`);let l=e(`div`,i);o(i,l),c(l,`card-body p-0`);let u=s(`rue:component:anchor`);return o(l,u),a(()=>{let e=h(_,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VHtmlAndRHtml;`});t(()=>m(e,l,u))}),n}):``;t(()=>m(n,C,w))}),o(C,u(` `));let T=s(`rue:slot:anchor`);return o(C,T),a(()=>{let i=y.value===`preview`?d(()=>{let t=r(),i=e(`div`,t);o(t,i),c(i,`card bg-base-100 shadow`);let s=e(`div`,i);o(i,s),c(s,`card-body grid gap-6`);let d=e(`section`,s);o(s,d),c(d,`space-y-3`);let f=e(`div`,d);o(d,f),c(f,`flex flex-wrap items-center justify-between gap-3`);let p=e(`h2`,f);o(f,p),c(p,`text-xl font-semibold`),o(p,u(`v-html / r-html`));let m=e(`button`,f);o(f,m),c(m,`btn btn-sm`),n(m,`click`,()=>{b.value=`<strong>已发布</strong><span> 文档已经公开。</span>`,x.value=`<strong>Basic</strong><span> 标准版在线</span>`}),o(m,u(`更新 HTML`));let h=e(`div`,d);o(d,h),c(h,`rounded-box border border-base-300 p-4 grid gap-3`);let g=e(`div`,h);o(h,g),c(g,`alert alert-info`),a(()=>{let e={__html:b.value};l(g,e&&`__html`in e?e.__html:``)});let _=e(`p`,h);return o(h,_),c(_,`badge badge-success badge-lg`),a(()=>{let e={__html:x.value};l(_,e&&`__html`in e?e.__html:``)}),t}):``;t(()=>m(i,C,T))}),i})}),p,g),p})};export{y as default};