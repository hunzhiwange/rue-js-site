import{F as e,G as t,I as n,J as r,L as i,M as a,P as o,U as s,_t as c,bt as l,c as u,j as d,lt as f,pt as p,t as m,u as h}from"./vapor-runtime-D3a-68js.js";import{a as g}from"./vapor-helpers-vapor-DGjYaAZX.js";import{t as _}from"./Code-2C2psoH3.js";import{t as v}from"./SidebarPlaygroundExample-DKa0aI1C.js";var y=()=>{let{activeTab:y,articleHtml:b,badgeHtml:x}=g(`useSetup:0:0`,()=>c(()=>({activeTab:g(`ref:1:0`,()=>f(`code`)),articleHtml:g(`ref:1:1`,()=>f(`<strong>草稿</strong><span> 文档仍在编辑中。</span>`)),badgeHtml:g(`ref:1:2`,()=>f(`<strong>Pro</strong><span> 专业版在线</span>`))})));return h(()=>{let c=e(),f=o(`rue:component:anchor`);return a(c,f),u(m(v,{children:h(()=>{let c=e(),f=n(`h1`);a(c,f),t(f,`text-5xl font-semibold mb-4 md:mb-4`),a(f,i(`v-html / r-html`));let g=n(`div`);a(c,g),s(g,`role`,`tablist`),t(g,`tabs tabs-box`);let v=n(`button`);a(g,v),s(v,`role`,`tab`),l(()=>{t(v,String(`tab ${y.value===`preview`?`tab-active`:``}`))}),d(v,`click`,()=>{y.value=`preview`}),a(v,i(`效果`));let S=n(`button`);a(g,S),s(S,`role`,`tab`),l(()=>{t(S,String(`tab ${y.value===`code`?`tab-active`:``}`))}),d(S,`click`,()=>{y.value=`code`}),a(S,i(`代码`));let C=n(`div`);a(c,C),t(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=o(`rue:slot:anchor`);a(C,w),l(()=>{let r=y.value===`code`?h(()=>{let r=e(),i=n(`div`);a(r,i),t(i,`card bg-base-100 shadow overflow-auto`);let s=n(`div`);a(i,s),t(s,`card-body p-0`);let c=o(`rue:component:anchor`);return a(s,c),l(()=>{let e=m(_,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VHtmlAndRHtml;`});p(()=>u(e,s,c))}),r}):``;p(()=>u(r,C,w))}),a(C,i(` `));let T=o(`rue:slot:anchor`);return a(C,T),l(()=>{let o=y.value===`preview`?h(()=>{let o=e(),s=n(`div`);a(o,s),t(s,`card bg-base-100 shadow`);let c=n(`div`);a(s,c),t(c,`card-body grid gap-6`);let u=n(`section`);a(c,u),t(u,`space-y-3`);let f=n(`div`);a(u,f),t(f,`flex flex-wrap items-center justify-between gap-3`);let p=n(`h2`);a(f,p),t(p,`text-xl font-semibold`),a(p,i(`v-html / r-html`));let m=n(`button`);a(f,m),t(m,`btn btn-sm`),d(m,`click`,()=>{b.value=`<strong>已发布</strong><span> 文档已经公开。</span>`,x.value=`<strong>Basic</strong><span> 标准版在线</span>`}),a(m,i(`更新 HTML`));let h=n(`div`);a(u,h),t(h,`rounded-box border border-base-300 p-4 grid gap-3`);let g=n(`div`);a(h,g),t(g,`alert alert-info`),l(()=>{let e={__html:b.value};r(g,e&&`__html`in e?e.__html:``)});let _=n(`p`);return a(h,_),t(_,`badge badge-success badge-lg`),l(()=>{let e={__html:x.value};r(_,e&&`__html`in e?e.__html:``)}),o}):``;p(()=>u(o,C,T))}),c})}),c,f),c})};export{y as default};